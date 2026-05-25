import fs from "node:fs/promises";
import path from "node:path";
import { siteMeta } from "@/data/siteMeta";
import type { TierListData, TierMetaData } from "@/lib/types";

const root = process.cwd();
const tierListPath = path.join(root, "data", "tier-list.json");
const tierMetaPath = path.join(root, "data", "tier-meta.json");

export async function getTierListData(): Promise<TierListData> {
  const raw = await fs.readFile(tierListPath, "utf8");
  const data = JSON.parse(raw) as TierListData;
  return {
    ...data,
    updatedAt: siteMeta.lastUpdatedISO,
    currentPatch: siteMeta.updatePatchLabel
  };
}

export async function getTierMetaData(): Promise<TierMetaData> {
  try {
    const raw = await fs.readFile(tierMetaPath, "utf8");
    return JSON.parse(raw) as TierMetaData;
  } catch {
    return { tagLabels: {}, itemTags: {}, itemDetails: {} };
  }
}

export { flattenWarframes, flattenWeapons } from "@/lib/tier-utils";
