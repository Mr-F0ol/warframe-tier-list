import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { ensureLoadoutsTable, getPool } from "@/lib/db";
import type { Loadout, LoadoutInput } from "@/lib/types";
import { normalizeText } from "@/lib/utils";

const fallbackPath = path.join(process.cwd(), "data", "loadouts.json");
const hostedReadOnlyRuntime = process.env.VERCEL === "1";

export async function listLoadouts(): Promise<Loadout[]> {
  if (await ensureLoadoutsTable()) {
    const db = getPool();
    const result = await db!.query(`
      SELECT id, name, objective, warframe, primary_weapon, secondary_weapon, melee_weapon, notes, created_at
      FROM loadouts
      ORDER BY created_at DESC
    `);
    return result.rows.map(row => ({
      id: row.id,
      name: row.name,
      objective: row.objective || "",
      warframe: row.warframe,
      primary: row.primary_weapon || "",
      secondary: row.secondary_weapon || "",
      melee: row.melee_weapon || "",
      notes: row.notes || "",
      createdAt: row.created_at.toISOString()
    }));
  }

  if (hostedReadOnlyRuntime) return [];
  return readFallbackLoadouts();
}

export async function createLoadout(input: LoadoutInput): Promise<Loadout> {
  const payload = normalizeLoadoutInput(input);

  if (!payload.name || !payload.warframe) {
    throw new Error("Nome do loadout e Warframe são obrigatórios.");
  }

  if (await ensureLoadoutsTable()) {
    const db = getPool();
    const result = await db!.query(
      `
      INSERT INTO loadouts (name, objective, warframe, primary_weapon, secondary_weapon, melee_weapon, notes)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id, name, objective, warframe, primary_weapon, secondary_weapon, melee_weapon, notes, created_at
      `,
      [payload.name, payload.objective, payload.warframe, payload.primary, payload.secondary, payload.melee, payload.notes]
    );
    const row = result.rows[0];
    return {
      id: row.id,
      name: row.name,
      objective: row.objective || "",
      warframe: row.warframe,
      primary: row.primary_weapon || "",
      secondary: row.secondary_weapon || "",
      melee: row.melee_weapon || "",
      notes: row.notes || "",
      createdAt: row.created_at.toISOString()
    };
  }

  if (hostedReadOnlyRuntime) {
    throw new Error("Use o salvamento local da página de Loadouts.");
  }

  const loadout: Loadout = {
    id: crypto.randomUUID(),
    ...payload,
    createdAt: new Date().toISOString()
  };
  const loadouts = await readFallbackLoadouts();
  loadouts.unshift(loadout);
  await writeFallbackLoadouts(loadouts);
  return loadout;
}

export async function deleteLoadout(id: string) {
  if (await ensureLoadoutsTable()) {
    const db = getPool();
    const result = await db!.query("DELETE FROM loadouts WHERE id = $1", [id]);
    return (result.rowCount || 0) > 0;
  }

  if (hostedReadOnlyRuntime) return false;

  const loadouts = await readFallbackLoadouts();
  const nextLoadouts = loadouts.filter(loadout => loadout.id !== id);
  if (nextLoadouts.length === loadouts.length) return false;
  await writeFallbackLoadouts(nextLoadouts);
  return true;
}

function normalizeLoadoutInput(input: LoadoutInput) {
  return {
    name: normalizeText(input.name, 80),
    objective: normalizeText(input.objective, 80),
    warframe: normalizeText(input.warframe, 80),
    primary: normalizeText(input.primary, 80),
    secondary: normalizeText(input.secondary, 80),
    melee: normalizeText(input.melee, 80),
    notes: normalizeText(input.notes, 600)
  };
}

async function readFallbackLoadouts(): Promise<Loadout[]> {
  try {
    const raw = await fs.readFile(fallbackPath, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.map(normalizeStoredLoadout).filter((loadout): loadout is Loadout => Boolean(loadout));
  } catch {
    return [];
  }
}

async function writeFallbackLoadouts(loadouts: Loadout[]) {
  await fs.mkdir(path.dirname(fallbackPath), { recursive: true });
  await fs.writeFile(fallbackPath, JSON.stringify(loadouts.map(normalizeStoredLoadout).filter(Boolean), null, 2));
}

function normalizeStoredLoadout(value: unknown): Loadout | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const loadout = value as Partial<Loadout>;
  const name = normalizeText(loadout.name, 80);
  const warframe = normalizeText(loadout.warframe, 80);
  if (!name || !warframe) return null;

  return {
    id: /^[a-zA-Z0-9_-]{1,80}$/.test(String(loadout.id || "")) ? String(loadout.id) : crypto.randomUUID(),
    name,
    objective: normalizeText(loadout.objective, 80),
    warframe,
    primary: normalizeText(loadout.primary, 80),
    secondary: normalizeText(loadout.secondary, 80),
    melee: normalizeText(loadout.melee, 80),
    notes: normalizeText(loadout.notes, 600),
    createdAt: typeof loadout.createdAt === "string" ? loadout.createdAt : new Date().toISOString()
  };
}
