import type { TierKey, WeaponCategoryId } from "@/lib/types";

export type WeaponDifficulty = "Baixa" | "Média" | "Alta";

export interface WeaponGuide {
  id: string;
  name: string;
  category: WeaponCategoryId;
  categoryLabel: "Primária" | "Secundária" | "Melee";
  tier: TierKey;
  type: string;
  focus: string[];
  description: string;
  recommendedFor: string[];
  buildDifficulty: WeaponDifficulty;
  formaCount: number | null;
  investmentNote: string;
  hasIncarnon: boolean;
  buildHref?: string;
}

export const weapons: WeaponGuide[] = [
  {
    id: "torid-incarnon",
    name: "Torid Incarnon",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Launcher / Incarnon",
    focus: ["Steel Path", "Clear", "Incarnon"],
    description: "Primária de clear muito forte, excelente para limpar grupos densos e escalar no endgame.",
    recommendedFor: ["Steel Path", "Sobrevivência", "Missões longas"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Vale investimento alto depois que os mods Galvanized e arcanes principais estiverem liberados.",
    hasIncarnon: true
  },
  {
    id: "latron-incarnon",
    name: "Latron Incarnon",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Rifle / Incarnon",
    focus: ["Steel Path", "Dano", "Incarnon"],
    description: "Rifle Incarnon de alto desempenho para dano consistente, especialmente quando a build já tem bom investimento.",
    recommendedFor: ["Steel Path", "Alvos resistentes", "Conteúdo endgame"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Priorize após ter uma base de dano crítico/status bem montada.",
    hasIncarnon: true
  },
  {
    id: "burston-incarnon",
    name: "Burston Incarnon",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Rifle / Incarnon",
    focus: ["Steel Path", "Boss", "Incarnon"],
    description: "Primária Incarnon forte, confortável e muito boa para conteúdo de nível alto.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Bosses"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa candidata a Catalisador quando você quer uma primária principal de endgame.",
    hasIncarnon: true
  },
  {
    id: "felarx",
    name: "Felarx",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Shotgun / Incarnon",
    focus: ["Boss", "Dano bruto", "Alvo pesado"],
    description: "Shotgun Incarnon extremamente forte para dano em alvo único e inimigos resistentes.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Bosses"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Excelente destino de recursos quando sua conta já precisa derreter alvos pesados.",
    hasIncarnon: true,
    buildHref: "/builds/felarx"
  },
  {
    id: "phenmor",
    name: "Phenmor",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Rifle / Incarnon",
    focus: ["Steel Path", "Endurance", "Incarnon"],
    description: "Rifle Incarnon sólido, estável e ótimo para manter dano por muito tempo.",
    recommendedFor: ["Missões longas", "Steel Path", "Alvos fortes"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa opção para quem prefere consistência a explosões pontuais de dano.",
    hasIncarnon: true
  },
  {
    id: "strun-incarnon",
    name: "Strun Incarnon",
    category: "primary",
    categoryLabel: "Primária",
    tier: "A",
    type: "Shotgun / Incarnon",
    focus: ["Steel Path", "Boss", "Incarnon"],
    description: "Shotgun forte para alvo pesado e boa opção quando você gosta de gameplay mais direta.",
    recommendedFor: ["Bosses", "Steel Path", "Alvos únicos"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Invista se você já tem o adaptador Incarnon e gosta de shotguns.",
    hasIncarnon: true
  },
  {
    id: "laetum",
    name: "Laetum",
    category: "secondary",
    categoryLabel: "Secundária",
    tier: "S",
    type: "Pistola / Incarnon",
    focus: ["Steel Path", "Boss", "Dano"],
    description: "Secundária Incarnon muito consistente, forte contra alvos resistentes e excelente para endgame.",
    recommendedFor: ["Steel Path", "Bosses", "Arquimídia Profunda"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Uma das melhores secundárias para receber investimento pesado sem depender de modismo momentâneo.",
    hasIncarnon: true,
    buildHref: "/builds/laetum"
  },
  {
    id: "dual-toxocyst-incarnon",
    name: "Dual Toxocyst Incarnon",
    category: "secondary",
    categoryLabel: "Secundária",
    tier: "S",
    type: "Pistolas / Incarnon",
    focus: ["Steel Path", "Clear", "Incarnon"],
    description: "Secundária Incarnon de alto teto, ótima para limpar inimigos quando bem montada.",
    recommendedFor: ["Steel Path", "Missões longas", "Clear"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa prioridade quando você quer uma secundária que também carregue a missão.",
    hasIncarnon: true
  },
  {
    id: "lex-incarnon",
    name: "Lex Incarnon",
    category: "secondary",
    categoryLabel: "Secundária",
    tier: "S",
    type: "Pistola / Incarnon",
    focus: ["Boss", "Dano", "Incarnon"],
    description: "Pistola Incarnon com dano alto e bom valor contra alvos duros.",
    recommendedFor: ["Bosses", "Steel Path", "Alvos pesados"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Vale muito quando você já usa secundária como ferramenta de dano principal.",
    hasIncarnon: true
  },
  {
    id: "kuva-nukor",
    name: "Kuva Nukor",
    category: "secondary",
    categoryLabel: "Secundária",
    tier: "S",
    type: "Beam / Kuva",
    focus: ["Primer", "Status", "Suporte"],
    description: "Secundária excelente como primer de status e suporte de dano para várias builds.",
    recommendedFor: ["Steel Path", "Melee", "Builds com Condition Overload"],
    buildDifficulty: "Média",
    formaCount: null,
    investmentNote: "Muito útil cedo no endgame, mesmo quando não é sua principal fonte de dano.",
    hasIncarnon: false
  },
  {
    id: "glaive-prime",
    name: "Glaive Prime",
    category: "melee",
    categoryLabel: "Melee",
    tier: "S",
    type: "Glaive",
    focus: ["Steel Path", "Slash", "Utilidade"],
    description: "Melee arremessável de alto impacto, excelente para dano e conforto quando bem usada.",
    recommendedFor: ["Steel Path", "Alvos resistentes", "Conteúdo geral"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Invista se você gosta do estilo de gameplay com arremesso e detonação manual.",
    hasIncarnon: false
  },
  {
    id: "ceramic-dagger-incarnon",
    name: "Ceramic Dagger Incarnon",
    category: "melee",
    categoryLabel: "Melee",
    tier: "S",
    type: "Dagger / Incarnon",
    focus: ["Stat-stick", "Utilidade", "Incarnon"],
    description: "Melee Incarnon muito valiosa para utilidade, stat-stick e setups específicos de endgame.",
    recommendedFor: ["Stat-stick", "Endgame", "Builds específicas"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Prioridade alta se você usa Warframes que aproveitam stat-stick.",
    hasIncarnon: true
  },
  {
    id: "praedos",
    name: "Praedos",
    category: "melee",
    categoryLabel: "Melee",
    tier: "S",
    type: "Tonfa / Incarnon",
    focus: ["Mobilidade", "Utilidade", "Incarnon"],
    description: "Melee Incarnon excelente como ferramenta de mobilidade e qualidade de vida, mesmo fora de foco melee.",
    recommendedFor: ["Missões rápidas", "Farm", "Loadouts gerais"],
    buildDifficulty: "Média",
    formaCount: null,
    investmentNote: "Ótima compra de conforto para qualquer conta que faz muito farm ou missões repetidas.",
    hasIncarnon: true,
    buildHref: "/builds/praedos"
  },
  {
    id: "dual-ichor-incarnon",
    name: "Dual Ichor Incarnon",
    category: "melee",
    categoryLabel: "Melee",
    tier: "S",
    type: "Dual swords / Incarnon",
    focus: ["Farm", "Clear", "Incarnon"],
    description: "Melee Incarnon muito forte para clear e setups de farm com boa densidade de inimigos.",
    recommendedFor: ["Farm", "Steel Path", "Sobrevivência"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa prioridade se você quer transformar melee em ferramenta de clear.",
    hasIncarnon: true
  }
];

export function weaponsByCategory(category: WeaponCategoryId) {
  return weapons.filter(weapon => weapon.category === category);
}

export function incarnonWeapons() {
  return weapons.filter(weapon => weapon.hasIncarnon);
}
