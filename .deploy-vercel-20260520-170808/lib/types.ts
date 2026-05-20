export type TierKey = "S" | "A" | "B" | "C" | "D" | "U";
export type ItemType = "warframe" | "weapon";
export type WeaponCategoryId = "primary" | "secondary" | "melee";
export type ViewMode = "compact" | "detailed";

export interface TierItem {
  name: string;
  note?: string;
  baseName?: string;
  variant?: string;
  variantTags?: string[];
  image?: string;
}

export interface TierRow {
  tier: TierKey;
  label: string;
  items: TierItem[];
}

export interface WeaponCategory {
  id: WeaponCategoryId;
  title: string;
  description: string;
  rows: TierRow[];
}

export interface TierListData {
  updatedAt: string;
  currentPatch: string;
  warframes: TierRow[];
  weapons: WeaponCategory[];
  variantLabels?: Record<string, string>;
}

export interface ItemDetail {
  role: string;
  investment: string;
  bestUses: string[];
  build: string[];
  warning: string;
}

export interface TierMetaData {
  tagLabels: Record<string, string>;
  itemTags: Record<string, string[]>;
  itemDetails: Record<string, ItemDetail>;
}

export interface ItemRecord extends TierItem {
  tier: TierKey;
  type: ItemType;
  category?: WeaponCategoryId;
  categoryTitle?: string;
}

export interface Loadout {
  id: string;
  name: string;
  objective: string;
  warframe: string;
  primary: string;
  secondary: string;
  melee: string;
  notes: string;
  createdAt: string;
}

export interface LoadoutInput {
  name: string;
  objective?: string;
  warframe: string;
  primary?: string;
  secondary?: string;
  melee?: string;
  notes?: string;
}

export interface MissionPreset {
  label: string;
  focus: string[];
  note: string;
  groups: {
    warframe: string[];
    primary: string[];
    secondary: string[];
    melee: string[];
  };
}
