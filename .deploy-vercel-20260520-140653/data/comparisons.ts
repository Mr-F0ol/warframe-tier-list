import type { TierKey } from "@/lib/types";

export interface ComparisonItem {
  name: string;
  tier: TierKey;
  role: string;
  difficulty: "Baixa" | "Média" | "Alta";
  buildCost: "Baixo" | "Médio" | "Alto";
  bestUse: string;
}

export interface ComparisonGuide {
  id: string;
  title: string;
  itemA: ComparisonItem;
  itemB: ComparisonItem;
  conclusion: string;
}

export const comparisons: ComparisonGuide[] = [
  {
    id: "felarx-vs-torid",
    title: "Felarx vs Torid Incarnon",
    itemA: {
      name: "Felarx",
      tier: "S",
      role: "Dano em alvo pesado",
      difficulty: "Alta",
      buildCost: "Alto",
      bestUse: "Bosses e inimigos resistentes"
    },
    itemB: {
      name: "Torid Incarnon",
      tier: "S",
      role: "Clear de mapa",
      difficulty: "Alta",
      buildCost: "Alto",
      bestUse: "Steel Path com alta densidade"
    },
    conclusion: "Torid tende a ser melhor para uso geral e clear. Felarx tende a ser melhor para boss e alvo pesado."
  },
  {
    id: "laetum-vs-kuva-nukor",
    title: "Laetum vs Kuva Nukor",
    itemA: {
      name: "Laetum",
      tier: "S",
      role: "Dano direto",
      difficulty: "Alta",
      buildCost: "Alto",
      bestUse: "Alvos resistentes e secundária de dano"
    },
    itemB: {
      name: "Kuva Nukor",
      tier: "S",
      role: "Primer e status",
      difficulty: "Média",
      buildCost: "Médio",
      bestUse: "Aplicar status e habilitar dano de outras armas"
    },
    conclusion: "Laetum é melhor para matar. Kuva Nukor é melhor como suporte de status e primer."
  },
  {
    id: "dante-vs-revenant",
    title: "Dante vs Revenant Prime",
    itemA: {
      name: "Dante",
      tier: "S",
      role: "Overguard, dano e suporte",
      difficulty: "Média",
      buildCost: "Alto",
      bestUse: "Conteúdo geral difícil com utilidade ampla"
    },
    itemB: {
      name: "Revenant Prime",
      tier: "S",
      role: "Sobrevivência extrema",
      difficulty: "Baixa",
      buildCost: "Médio",
      bestUse: "Steel Path solo e segurança máxima"
    },
    conclusion: "Dante é melhor para uso geral ativo. Revenant Prime é melhor para segurança simples e consistente."
  }
];
