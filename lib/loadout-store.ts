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
    throw new Error("Salvamento em nuvem será adicionado futuramente.");
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
    name: normalizeText(input.name),
    objective: normalizeText(input.objective),
    warframe: normalizeText(input.warframe),
    primary: normalizeText(input.primary),
    secondary: normalizeText(input.secondary),
    melee: normalizeText(input.melee),
    notes: normalizeText(input.notes)
  };
}

async function readFallbackLoadouts(): Promise<Loadout[]> {
  try {
    const raw = await fs.readFile(fallbackPath, "utf8");
    return JSON.parse(raw) as Loadout[];
  } catch {
    return [];
  }
}

async function writeFallbackLoadouts(loadouts: Loadout[]) {
  await fs.mkdir(path.dirname(fallbackPath), { recursive: true });
  await fs.writeFile(fallbackPath, JSON.stringify(loadouts, null, 2));
}
