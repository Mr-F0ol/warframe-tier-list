import { incarnonWeapons } from "@/data/weapons";

export interface IncarnonPriority {
  id: string;
  name: string;
  category: "Primária" | "Secundária" | "Melee";
  tier: string;
  role: string;
  bestUse: string;
  difficulty: "Baixa" | "Média" | "Alta";
  investment: "Baixo" | "Médio" | "Alto";
  conclusion: string;
  href?: string;
}

export const incarnonPriorities: IncarnonPriority[] = incarnonWeapons().map(weapon => ({
  id: weapon.id,
  name: weapon.name,
  category: weapon.categoryLabel,
  tier: weapon.tier,
  role: weapon.focus.join(", "),
  bestUse: weapon.recommendedFor.join(", "),
  difficulty: weapon.buildDifficulty,
  investment: weapon.investmentNote.includes("alto") || weapon.investmentNote.includes("Alto") ? "Alto" : "Médio",
  conclusion: weapon.description,
  href: weapon.buildHref
}));

export const topIncarnonSetups = [
  {
    title: "Melhor clear geral",
    description: "Torid Incarnon é uma escolha forte para intermediário e endgame quando a missão tem muita densidade. Iniciantes devem tratar como objetivo futuro, não como obrigação imediata.",
    href: "/builds/torid-incarnon",
    tags: ["Clear", "Steel Path"]
  },
  {
    title: "Melhor alvo pesado",
    description: "Felarx serve para boss, Eximus e inimigo resistente que arma de área demora para finalizar. Funciona melhor quando outro slot do loadout já resolve clear.",
    href: "/builds/felarx",
    tags: ["Boss", "Dano"]
  },
  {
    title: "Melhor secundária Incarnon",
    description: "Laetum é uma base forte para dano consistente sem depender da primária. Boa para intermediário e endgame, desde que a rotação da forma Incarnon seja confortável.",
    href: "/builds/laetum",
    tags: ["Secundária", "Endgame"]
  },
  {
    title: "Melhor utilidade melee",
    description: "Praedos agrega mobilidade e qualidade de vida. Não precisa ser sua principal fonte de dano para valer em farms, missões rápidas e loadouts de endgame.",
    href: "/builds/praedos",
    tags: ["Mobilidade", "Farm"]
  }
];
