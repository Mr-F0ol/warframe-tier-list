import type {
  ItemDetail,
  ItemRecord,
  TierItem,
  TierListData,
  TierMetaData,
  TierKey
} from "@/lib/types";

export const defaultVariantLabels: Record<string, string> = {
  normal: "Normal",
  prime: "Prime",
  incarnon: "Incarnon",
  kuva: "Kuva",
  tenet: "Tenet",
  umbra: "Umbra",
  prisma: "Prisma",
  wraith: "Wraith",
  vandal: "Vandal",
  dex: "Dex",
  coda: "Coda"
};

export function flattenWarframes(data: TierListData): ItemRecord[] {
  return data.warframes.flatMap(row =>
    row.items.map(item => ({
      ...item,
      tier: row.tier,
      type: "warframe" as const
    }))
  );
}

export function flattenWeapons(data: TierListData): ItemRecord[] {
  return data.weapons.flatMap(category =>
    category.rows.flatMap(row =>
      row.items.map(item => ({
        ...item,
        tier: row.tier,
        type: "weapon" as const,
        category: category.id,
        categoryTitle: category.title
      }))
    )
  );
}

export function buildItemIndex(data: TierListData) {
  return new Map([...flattenWarframes(data), ...flattenWeapons(data)].map(item => [item.name, item]));
}

export function labelForTag(
  tag: string,
  meta: TierMetaData,
  variantLabels: Record<string, string>
) {
  return meta.tagLabels[tag] || variantLabels[tag] || tag;
}

export function itemTags(item: ItemRecord | TierItem, meta: TierMetaData): string[] {
  const saved = meta.itemTags[item.name];
  if (Array.isArray(saved) && saved.length) {
    return [...new Set([...(item.variantTags || []), ...saved])];
  }
  return [...new Set([...(item.variantTags || []), ...inferTags(item)])];
}

export function displayTags(item: ItemRecord | TierItem, meta: TierMetaData) {
  return itemTags(item, meta).filter(tag => tag !== "normal");
}

export function itemDetail(
  item: ItemRecord,
  meta: TierMetaData,
  variantLabels: Record<string, string>
): ItemDetail {
  return {
    ...generatedDetail(item, meta, variantLabels),
    ...(meta.itemDetails[item.name] || {})
  };
}

function inferTags(item: TierItem): string[] {
  const haystack = `${item.name || ""} ${item.note || ""}`.toLowerCase();
  const tags = ["steel"];

  if (/farm|loot|recurso|drop/.test(haystack)) tags.push("farm");
  if (/boss|alvo|single|priorit/.test(haystack)) tags.push("boss");
  if (/rapida|veloc|speed|clear|nuke|area|aoe/.test(haystack)) tags.push("fast", "clear");
  if (/suporte|cura|energia|equipe|buff|defesa/.test(haystack)) tags.push("support");
  if (/tank|seguran|sobreviv|overguard|escudo|mesmer/.test(haystack)) tags.push("tank", "endurance");
  if (/controle|cc|crowd/.test(haystack)) tags.push("control");
  if (/incarnon/.test(haystack)) tags.push("incarnon");
  if (/iniciante|simples|cedo|baixo atrito/.test(haystack)) tags.push("beginner");

  return [...new Set(tags)].slice(0, 4);
}

function generatedDetail(
  item: ItemRecord,
  meta: TierMetaData,
  variantLabels: Record<string, string>
): ItemDetail {
  const tags = itemTags(item, meta);
  const typeLabel = item.type === "weapon" ? item.categoryTitle || "Arma" : "Warframe";
  const variantLabel = item.variant && item.variant !== "Normal" ? ` (${item.variant})` : "";
  const priorityByTier: Record<TierKey, string> = {
    S: "Alta: vale forma, catalisador/reactor e Arcanes cedo.",
    A: "Alta/média: ótimo investimento depois da base principal.",
    B: "Média: funciona bem, mas depende mais de gosto e build.",
    C: "Baixa/nicho: use quando a missão favorece a função.",
    D: "Baixa: segura recurso até ter opções mais fortes.",
    U: "A definir: ainda precisa de teste no meta atual."
  };

  return {
    role: `${typeLabel}${variantLabel} - ${item.note || "uso geral"}`,
    investment: priorityByTier[item.tier] || "A definir",
    bestUses: tags.map(tag => labelForTag(tag, meta, variantLabels)),
    build: generatedBuildLines(item, tags),
    warning: item.note || "Sem nota específica; trate como escolha flexível e priorize quando combinar com a missão."
  };
}

function generatedBuildLines(item: ItemRecord, tags: string[]) {
  if (item.type === "weapon") {
    if (item.category === "melee") {
      return [
        "Monte crítico/status conforme a arma e use combo quando ela escalar bem.",
        "Leve um primer se quiser forçar dano alto contra Steel Path.",
        "Ajuste elemento por facção; Viral/Heat e Corrosivo/Heat cobrem a maior parte do jogo."
      ];
    }

    const lines = [
      "Use dano base, multishot e crítico/status conforme a melhor escala da arma.",
      "Ajuste elemento por facção; Viral/Heat e Corrosivo/Heat são escolhas seguras.",
      "Complete com Arcane de arma e Exilus de qualidade de vida quando couber."
    ];

    if (tags.includes("incarnon")) {
      lines.unshift("Priorize evoluções Incarnon que aumentam dano, crítico/status e conforto de munição.");
    }

    return lines;
  }

  const lines = [
    "Priorize os atributos que sustentam a função principal do Warframe.",
    "Garanta energia e sobrevivência antes de perseguir números máximos de dano.",
    "Use Helminth para cobrir a fraqueza da build ou acelerar o objetivo da missão."
  ];

  if (tags.includes("support")) lines[0] = "Priorize duração/força suficientes para manter buffs e proteção consistentes.";
  if (tags.includes("fast") || tags.includes("clear")) lines[0] = "Priorize alcance, força e economia para limpar mapa sem ficar sem energia.";
  if (tags.includes("tank") || tags.includes("endurance")) lines[0] = "Priorize a mecânica defensiva central antes de adicionar dano ou conforto.";

  return lines;
}
