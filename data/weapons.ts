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
    description: "Primária Incarnon de clear. Para iniciante é objetivo futuro; para intermediário resolve densidade; no endgame vira base de missões longas quando bem montada.",
    recommendedFor: ["Steel Path", "Sobrevivência", "Missões longas"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Vale investimento alto depois que mods Galvanized, Arcanes e evoluções Incarnon estiverem liberados. Revise após hotfixes e balanceamentos.",
    hasIncarnon: true,
    buildHref: "/builds/torid-incarnon"
  },
  {
    id: "latron-incarnon",
    name: "Latron Incarnon",
    category: "primary",
    categoryLabel: "Primária",
    tier: "S",
    type: "Rifle / Incarnon",
    focus: ["Steel Path", "Dano", "Incarnon"],
    description: "Rifle Incarnon para dano consistente. É mais indicado quando a conta já tem mods e Arcanes suficientes para sustentar o investimento.",
    recommendedFor: ["Steel Path", "Alvos resistentes", "Conteúdo endgame"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Priorize após montar uma base de crítico/status e confirmar que a arma cobre uma função real no loadout.",
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
    description: "Primária Incarnon confortável para conteúdo alto, com bom valor quando você quer uma arma principal estável.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Bosses"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa candidata a Catalisador quando você já sabe que quer uma primária principal para endgame.",
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
    description: "Shotgun Incarnon focada em alvo único. Serve melhor para bosses, Eximus e inimigos resistentes do que para limpar mapa inteiro.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Bosses"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Bom destino de recursos quando sua conta já precisa resolver alvos pesados e possui outra ferramenta de clear.",
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
    description: "Rifle Incarnon estável para manter dano por longos períodos, útil quando você prefere consistência a explosões curtas de dano.",
    recommendedFor: ["Missões longas", "Steel Path", "Alvos fortes"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa opção intermediária/endgame se você valoriza estabilidade e já tem a base de mods pronta.",
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
    description: "Shotgun com foco em alvo pesado, boa para quem prefere gameplay direto e já tem investimento suficiente para sustentar a build.",
    recommendedFor: ["Bosses", "Steel Path", "Alvos únicos"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Invista se você já tem o adaptador Incarnon, gosta de shotguns e precisa de uma alternativa para alvo resistente.",
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
    description: "Secundária Incarnon de dano consistente. Ajuda contas intermediárias como plano B e contas endgame como resposta confiável a alvos resistentes.",
    recommendedFor: ["Steel Path", "Bosses", "Arquimídia Profunda"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Invista quando a secundária precisa cobrir alvo pesado. Ajustes de Arcanes, Rivens e hotfixes podem mudar a versão ideal.",
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
    description: "Secundária Incarnon voltada para clear quando bem montada. Pede mais preparo que opções simples, mas pode ajudar bastante em missões densas.",
    recommendedFor: ["Steel Path", "Missões longas", "Clear"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa prioridade para intermediário/endgame quando você quer uma secundária que também ajude no clear.",
    hasIncarnon: true,
    buildHref: "/builds/dual-toxocyst-incarnon"
  },
  {
    id: "lex-incarnon",
    name: "Lex Incarnon",
    category: "secondary",
    categoryLabel: "Secundária",
    tier: "S",
    type: "Pistola / Incarnon",
    focus: ["Boss", "Dano", "Incarnon"],
    description: "Pistola Incarnon para dano direto contra alvos duros, mais valiosa quando você precisa de uma secundária simples de entender.",
    recommendedFor: ["Bosses", "Steel Path", "Alvos pesados"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Vale quando a secundária é parte importante do dano do loadout e você já possui a base de mods.",
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
    description: "Secundária de suporte e primer de status. Boa para intermediários porque melhora outras armas sem precisar ser a fonte principal de dano.",
    recommendedFor: ["Steel Path", "Melee", "Builds com Condition Overload"],
    buildDifficulty: "Média",
    formaCount: null,
    investmentNote: "Muito útil cedo no endgame, principalmente para habilitar dano de melee ou armas que aproveitam status.",
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
    description: "Melee arremessável de alto impacto. Recompensa quem gosta do estilo de arremesso, mas não é obrigatória para toda conta.",
    recommendedFor: ["Steel Path", "Alvos resistentes", "Conteúdo geral"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Invista se você gosta do estilo de gameplay e precisa de melee para dano real, não apenas utilidade.",
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
    description: "Melee Incarnon de utilidade e stat-stick. Tem mais valor em setups específicos do que como recomendação universal para iniciante.",
    recommendedFor: ["Stat-stick", "Endgame", "Builds específicas"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Prioridade alta se você usa Warframes que aproveitam stat-stick; caso contrário, trate como investimento de nicho.",
    hasIncarnon: true,
    buildHref: "/builds/ceramic-dagger-incarnon"
  },
  {
    id: "praedos",
    name: "Praedos",
    category: "melee",
    categoryLabel: "Melee",
    tier: "S",
    type: "Tonfa / Incarnon",
    focus: ["Mobilidade", "Utilidade", "Incarnon"],
    description: "Melee Incarnon de mobilidade e qualidade de vida. Ajuda muito em farms e missões rápidas, mesmo quando não é fonte principal de dano.",
    recommendedFor: ["Missões rápidas", "Farm", "Loadouts gerais"],
    buildDifficulty: "Média",
    formaCount: null,
    investmentNote: "Ótima compra de conforto para contas intermediárias e endgame que repetem muitos farms ou missões rápidas.",
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
    description: "Melee Incarnon para clear e farms com boa densidade. Funciona melhor quando o jogador já quer usar melee como parte ativa do dano.",
    recommendedFor: ["Farm", "Steel Path", "Sobrevivência"],
    buildDifficulty: "Alta",
    formaCount: null,
    investmentNote: "Boa prioridade se você quer transformar melee em ferramenta de clear e já tem suporte de status, combo ou sobrevivência.",
    hasIncarnon: true
  }
];

export function weaponsByCategory(category: WeaponCategoryId) {
  return weapons.filter(weapon => weapon.category === category);
}

export function incarnonWeapons() {
  return weapons.filter(weapon => weapon.hasIncarnon);
}
