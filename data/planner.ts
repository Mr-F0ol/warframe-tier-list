export type AccountStage = "conta-nova" | "meio-jogo" | "pre-steel-path" | "steel-path" | "endgame";

export type PlayerGoal =
  | "sobreviver"
  | "dano"
  | "farm"
  | "boss"
  | "steel-path"
  | "incarnon"
  | "operador"
  | "loadout-geral";

export type Playstyle = "seguro" | "dano-alto" | "farm-rapido" | "suporte" | "solo" | "grupo" | "missao-longa" | "boss";

export type InvestmentLevel = "baixo" | "medio" | "alto";

export interface PlannerAnswers {
  stage: AccountStage | "";
  goal: PlayerGoal | "";
  playstyle: Playstyle | "";
  investment: InvestmentLevel | "";
  ownedItems: string[];
}

export interface PlannerLink {
  label: string;
  href: string;
}

export interface PlannerRecommendation {
  id: string;
  title: string;
  priority: "Alta" | "Média" | "Baixa";
  reason: string;
  now: string;
  next: string;
  warframes: string[];
  weapons: string[];
  build: string;
  farms: string[];
  forma: string;
  avoid: string[];
  links: PlannerLink[];
}

export interface PlannerRule {
  id: string;
  stages: AccountStage[];
  goals: PlayerGoal[];
  playstyles?: Playstyle[];
  investments: InvestmentLevel[];
  ownedBonus?: string[];
  missingBonus?: string[];
  recommendation: PlannerRecommendation;
}

export const stageOptions: Array<{ value: AccountStage; label: string; description: string }> = [
  { value: "conta-nova", label: "Conta nova", description: "Ainda abrindo planetas, mods base e recursos principais." },
  { value: "meio-jogo", label: "Meio do jogo", description: "Já tem alguma base, mas ainda precisa organizar mods, farms e reputações." },
  { value: "pre-steel-path", label: "Pré-Steel Path", description: "Preparando dano, sobrevivência e recursos para entrar no Steel Path." },
  { value: "steel-path", label: "Steel Path", description: "Já entrou no modo difícil e precisa de consistência." },
  { value: "endgame", label: "Endgame", description: "Otimizando builds, Incarnon, Arcanes, bosses e missões longas." }
];

export const goalOptions: Array<{ value: PlayerGoal; label: string }> = [
  { value: "sobreviver", label: "Sobreviver melhor" },
  { value: "dano", label: "Dar mais dano" },
  { value: "farm", label: "Farmar recursos" },
  { value: "boss", label: "Matar bosses" },
  { value: "steel-path", label: "Entrar no Steel Path" },
  { value: "incarnon", label: "Melhorar Incarnon" },
  { value: "operador", label: "Melhorar foco/Operador" },
  { value: "loadout-geral", label: "Montar loadout geral" }
];

export const playstyleOptions: Array<{ value: Playstyle; label: string }> = [
  { value: "seguro", label: "Seguro e fácil" },
  { value: "dano-alto", label: "Dano alto" },
  { value: "farm-rapido", label: "Farm rápido" },
  { value: "suporte", label: "Suporte" },
  { value: "solo", label: "Solo" },
  { value: "grupo", label: "Grupo" },
  { value: "missao-longa", label: "Missão longa" },
  { value: "boss", label: "Boss" }
];

export const investmentOptions: Array<{ value: InvestmentLevel; label: string; description: string }> = [
  { value: "baixo", label: "Baixo", description: "Pouca Forma, poucos Arcanes e poucos mods Galvanized." },
  { value: "medio", label: "Médio", description: "Algumas Formas, alguns mods bons e começo de Arcanes." },
  { value: "alto", label: "Alto", description: "Várias Formas, Arcanes, Galvanized, Incarnon e builds caras." }
];

export const ownedItemGroups = [
  {
    label: "Warframes",
    items: ["Dante", "Revenant Prime", "Wisp Prime", "Saryn Prime", "Protea Prime", "Rhino", "Khora Prime", "Citrine", "Nezha"]
  },
  {
    label: "Armas",
    items: ["Torid Incarnon", "Felarx", "Laetum", "Praedos", "Dual Toxocyst Incarnon", "Ceramic Dagger Incarnon", "Glaive Prime"]
  },
  {
    label: "Recursos e sistemas",
    items: [
      "Mods Galvanized",
      "Arcanes primários/secundários",
      "Forma suficiente",
      "Zariman liberada",
      "Duviri liberado",
      "Steel Path liberado",
      "Helminth liberado",
      "Operador/Amp decente"
    ]
  }
];

export const plannerRules: PlannerRule[] = [
  {
    id: "new-account-safe-base",
    stages: ["conta-nova"],
    goals: ["sobreviver", "loadout-geral", "farm"],
    playstyles: ["seguro", "solo", "farm-rapido"],
    investments: ["baixo", "medio"],
    recommendation: {
      id: "new-account-safe-base",
      title: "Construa uma base segura antes de investir caro",
      priority: "Alta",
      reason: "Sua conta ainda ganha mais valor ao fortalecer mods, sobrevivência e economia do que ao copiar builds endgame.",
      now: "Monte um Warframe resistente, evolua mods principais e escolha uma arma simples que resolva a campanha sem exigir Incarnon.",
      next: "Depois, prepare créditos, Endo e reputações para abrir caminho a Galvanized Mods, Arcanes e armas mais fortes.",
      warframes: ["Rhino", "Nezha", "Wisp Prime se já tiver acesso"],
      weapons: ["Arma confortável da sua progressão", "Laetum como objetivo futuro", "Felarx como objetivo futuro"],
      build: "Build base com sobrevivência, dano simples e elementos ajustados à facção.",
      farms: ["Créditos", "Endo", "Mods base", "Recursos de fabricação"],
      forma: "Evite espalhar Forma cedo. Guarde para um Warframe seguro e uma arma que continue útil depois.",
      avoid: ["Gastar Forma em itens temporários", "Copiar build endgame sem mods", "Ignorar sobrevivência"],
      links: [
        { label: "Comece Aqui", href: "/comece-aqui" },
        { label: "Farm", href: "/farm" },
        { label: "Progressão", href: "/progressao" },
        { label: "Tier List", href: "/tier-list" }
      ]
    },
    missingBonus: ["Mods Galvanized", "Forma suficiente"]
  },
  {
    id: "pre-steel-path-safe",
    stages: ["pre-steel-path", "meio-jogo"],
    goals: ["steel-path", "sobreviver", "loadout-geral"],
    playstyles: ["seguro", "solo", "missao-longa"],
    investments: ["baixo", "medio"],
    recommendation: {
      id: "pre-steel-path-safe",
      title: "Monte um setup seguro antes do Steel Path",
      priority: "Alta",
      reason: "Steel Path pune falta de dano e sobrevivência. Um setup confiável vale mais que muitas builds incompletas.",
      now: "Escolha um Warframe seguro, uma arma de clear e uma resposta para alvo pesado antes de investir em variações.",
      next: "Feche créditos, Endo, Forma e Galvanized Mods para transformar esse setup em base permanente.",
      warframes: ["Revenant Prime", "Wisp Prime", "Dante", "Rhino"],
      weapons: ["Laetum", "Felarx", "Torid Incarnon"],
      build: "Build recomendada: Laetum ou Felarx para alvo resistente, com Warframe seguro e elementos ajustados.",
      farms: ["Endo", "Créditos", "Forma", "Mods Galvanized"],
      forma: "Priorize uma arma forte e um Warframe seguro antes de espalhar Forma em muitos itens.",
      avoid: ["Entrar no Steel Path sem dano consistente", "Ignorar Eximus", "Usar elemento único para tudo"],
      links: [
        { label: "Checklist Steel Path", href: "/steel-path" },
        { label: "Builds", href: "/builds" },
        { label: "Farm de Endo", href: "/farm-endo" },
        { label: "Farm de Créditos", href: "/farm-creditos" }
      ]
    },
    missingBonus: ["Steel Path liberado", "Mods Galvanized"]
  },
  {
    id: "damage-boss-priority",
    stages: ["pre-steel-path", "steel-path", "endgame"],
    goals: ["dano", "boss"],
    playstyles: ["dano-alto", "boss", "solo"],
    investments: ["medio", "alto"],
    recommendation: {
      id: "damage-boss-priority",
      title: "Priorize dano confiável em alvo pesado",
      priority: "Alta",
      reason: "Bosses e inimigos resistentes pedem uma arma dedicada; clear de grupo sozinho não resolve tudo.",
      now: "Prepare Laetum ou Felarx com mods principais, Arcane adequado e variação de elemento por alvo.",
      next: "Depois use Torid Incarnon ou Warframe de clear para completar o loadout e cobrir missões densas.",
      warframes: ["Dante", "Revenant Prime", "Wisp Prime"],
      weapons: ["Felarx", "Laetum", "Dual Toxocyst Incarnon"],
      build: "Build recomendada: Felarx para alvo pesado ou Laetum como secundária confiável.",
      farms: ["Endo", "Kuva se usar Riven", "Arcanes", "Forma"],
      forma: "Gaste Forma primeiro na arma que resolve boss/alvo pesado com consistência.",
      avoid: ["Usar só arma de área contra boss", "Ignorar Arcanes", "Copiar elemento sem validar o alvo"],
      links: [
        { label: "Build Felarx", href: "/builds/felarx" },
        { label: "Build Laetum", href: "/builds/laetum" },
        { label: "Comparador", href: "/comparar" },
        { label: "Loadouts", href: "/loadouts" }
      ]
    },
    ownedBonus: ["Felarx", "Laetum", "Arcanes primários/secundários"]
  },
  {
    id: "farm-clear-priority",
    stages: ["meio-jogo", "pre-steel-path", "steel-path", "endgame"],
    goals: ["farm", "loadout-geral"],
    playstyles: ["farm-rapido", "missao-longa", "grupo"],
    investments: ["medio", "alto"],
    recommendation: {
      id: "farm-clear-priority",
      title: "Otimize clear e repetição de farm",
      priority: "Média",
      reason: "Farm bom é aquele que você repete sem morrer, sem pausar a rotação e sem remontar o loadout toda hora.",
      now: "Use uma arma ou Warframe de clear, salve o loadout e ajuste mobilidade antes de buscar dano teórico máximo.",
      next: "Quando o farm virar rotina, invista em Torid Incarnon, Praedos e variações por recurso.",
      warframes: ["Saryn Prime", "Wisp Prime", "Protea Prime", "Khora Prime"],
      weapons: ["Torid Incarnon", "Praedos", "Glaive Prime"],
      build: "Build recomendada: Torid Incarnon para grupos e Praedos para mobilidade/conforto.",
      farms: ["Créditos", "Endo", "Kuva", "Recurso alvo da sessão"],
      forma: "Invista em uma ferramenta de clear e uma peça de mobilidade antes de otimizar detalhes.",
      avoid: ["Farmar sem objetivo", "Trocar método o tempo todo", "Usar setup lento em missão repetitiva"],
      links: [
        { label: "Farm", href: "/farm" },
        { label: "Build Torid", href: "/builds/torid-incarnon" },
        { label: "Build Praedos", href: "/builds/praedos" },
        { label: "Loadouts", href: "/loadouts" }
      ]
    },
    ownedBonus: ["Torid Incarnon", "Praedos"]
  },
  {
    id: "incarnon-priority",
    stages: ["steel-path", "endgame"],
    goals: ["incarnon", "dano", "loadout-geral"],
    playstyles: ["dano-alto", "farm-rapido", "missao-longa"],
    investments: ["medio", "alto"],
    recommendation: {
      id: "incarnon-priority",
      title: "Escolha Incarnon pela função que falta no loadout",
      priority: "Alta",
      reason: "Adaptador Incarnon vale mais quando cobre uma lacuna clara: clear, alvo pesado, secundária confiável ou mobilidade.",
      now: "Compare Torid, Felarx, Laetum, Dual Toxocyst, Ceramic Dagger e Praedos antes de gastar recursos.",
      next: "Depois de escolher, confirme rotação do Circuito Steel Path/Duviri e feche mods/Arcanes antes da Forma final.",
      warframes: ["Dante", "Revenant Prime", "Wisp Prime"],
      weapons: ["Torid Incarnon", "Felarx", "Laetum", "Dual Toxocyst Incarnon", "Ceramic Dagger Incarnon", "Praedos"],
      build: "Build recomendada: escolha pelo problema atual, não apenas pelo ranking.",
      farms: ["Circuito Steel Path", "Endo", "Forma", "Arcanes"],
      forma: "Gaste Forma só depois de testar a função da arma e as evoluções Incarnon.",
      avoid: ["Pegar adaptador sem usar a arma", "Ignorar rotação atual", "Montar sem Galvanized ou Arcane quando a build depende disso"],
      links: [
        { label: "Incarnon", href: "/incarnon" },
        { label: "Comparador", href: "/comparar" },
        { label: "Builds", href: "/builds" },
        { label: "Progressão", href: "/progressao" }
      ]
    },
    ownedBonus: ["Duviri liberado", "Steel Path liberado"]
  },
  {
    id: "operator-focus-priority",
    stages: ["meio-jogo", "pre-steel-path", "steel-path", "endgame"],
    goals: ["operador", "sobreviver"],
    playstyles: ["seguro", "suporte", "solo"],
    investments: ["baixo", "medio", "alto"],
    recommendation: {
      id: "operator-focus-priority",
      title: "Melhore Operador, foco e Amp sem travar a progressão",
      priority: "Média",
      reason: "Operador forte ajuda em conteúdo específico, mas precisa acompanhar a base da conta.",
      now: "Escolha uma escola útil, organize lentes e monte um Amp confortável conforme seu acesso atual.",
      next: "Depois refine Amp, Arcanes e foco para Eidolon, Void Angels ou conteúdo que realmente exige Operador.",
      warframes: ["Dante", "Wisp Prime", "Revenant Prime"],
      weapons: ["Amp inicial melhorado", "Laetum como arma de segurança", "Felarx para alvo pesado"],
      build: "Build recomendada: loadout seguro com Operador como suporte, não como única solução.",
      farms: ["Foco", "Amp", "Reputações", "Endo"],
      forma: "Não gaste Forma tentando compensar falta de foco; organize primeiro escola, Amp e mods base.",
      avoid: ["Ignorar lentes", "Escolher escola sem objetivo", "Farmar foco com build frágil"],
      links: [
        { label: "Melhor Escola", href: "/melhor-escola-warframe" },
        { label: "Melhor Amp", href: "/melhor-amp-operador-warframe" },
        { label: "Farm de Foco", href: "/farm-foco-warframe" },
        { label: "Comece Aqui", href: "/comece-aqui" }
      ]
    },
    missingBonus: ["Operador/Amp decente"]
  }
];

const fallbackRecommendation: PlannerRecommendation = {
  id: "balanced-plan",
  title: "Monte um loadout equilibrado e revise prioridades",
  priority: "Média",
  reason: "Suas respostas indicam que o melhor próximo passo é cobrir a função que mais atrapalha sua conta agora.",
  now: "Escolha um Warframe seguro, uma arma de clear, uma arma para alvo resistente e um farm principal.",
  next: "Depois compare builds, salve um loadout e ajuste Forma/Arcanes conforme a missão que você mais repete.",
  warframes: ["Revenant Prime", "Wisp Prime", "Dante"],
  weapons: ["Torid Incarnon", "Felarx", "Laetum"],
  build: "Build base recomendada: uma opção de clear, uma opção de alvo pesado e sobrevivência confortável.",
  farms: ["Créditos", "Endo", "Forma", "Kuva quando usar Riven"],
  forma: "Invista primeiro no item que resolve mais missões e só depois abra variações.",
  avoid: ["Espalhar Forma sem plano", "Copiar build cara sem recursos", "Ignorar o objetivo real da missão"],
  links: [
    { label: "Tier List", href: "/tier-list" },
    { label: "Builds", href: "/builds" },
    { label: "Farm", href: "/farm" },
    { label: "Loadouts", href: "/loadouts" }
  ]
};

export function generatePlannerRecommendations(answers: PlannerAnswers) {
  const scored = plannerRules
    .map(rule => ({ rule, score: scoreRule(rule, answers) }))
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(item => item.rule.recommendation);

  if (!scored.length) return [fallbackRecommendation];
  return scored;
}

function scoreRule(rule: PlannerRule, answers: PlannerAnswers) {
  let score = 0;
  if (answers.stage && rule.stages.includes(answers.stage)) score += 4;
  if (answers.goal && rule.goals.includes(answers.goal)) score += 5;
  if (answers.investment && rule.investments.includes(answers.investment)) score += 2;
  if (answers.playstyle && rule.playstyles?.includes(answers.playstyle)) score += 2;
  if (rule.ownedBonus?.some(item => answers.ownedItems.includes(item))) score += 1;
  if (rule.missingBonus?.some(item => !answers.ownedItems.includes(item))) score += 1;
  return score;
}

export function labelForPlannerValue(value: string) {
  return (
    stageOptions.find(option => option.value === value)?.label ||
    goalOptions.find(option => option.value === value)?.label ||
    playstyleOptions.find(option => option.value === value)?.label ||
    investmentOptions.find(option => option.value === value)?.label ||
    value
  );
}
