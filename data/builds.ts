import type { TierKey } from "@/lib/types";
import { siteMeta } from "@/data/siteMeta";

export interface BuildGuide {
  slug: string;
  name: string;
  seoTitle?: string;
  category: "Primária" | "Secundária" | "Melee";
  tier: TierKey;
  description: string;
  summary: string;
  mainRole: string;
  playerProfile: string;
  acquisition: string;
  acquisitionDetails: {
    prerequisite: string;
    vendorOrMission: string;
    reputation: string;
    resources: string;
    difficulty: string;
    tip: string;
  };
  starterBuild: string;
  endgameBuild: string;
  steelPathNotes: string;
  factionNotes: string;
  strengths: string[];
  weaknesses: string[];
  recommendedMods: string[];
  substituteMods: string[];
  approximateForma: string;
  recommendedArcanes: string[];
  recommendedElement: string;
  incarnonEvolutions: string[];
  bestUse: string;
  investmentPriority: "Muito alta" | "Alta" | "Média" | "Baixa";
  difficulty: "Baixa" | "Média" | "Alta";
  buildCost: "Baixo" | "Médio" | "Alto";
  lastReviewed?: string;
  baseUpdate?: string;
  metaWarning: string;
  disclaimer: string;
  bestFor: string[];
  statPriority: string[];
  progression: string[];
  editableSlots: Array<{
    label: string;
    guidance: string;
  }>;
  avoid: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  internalLinks: Array<{
    href: string;
    label: string;
    description: string;
  }>;
}

const defaultWarning = "O valor desta build pode mudar com updates, hotfixes, Arcanes, Rivens, Helminth, evoluções Incarnon e balanceamentos. Use como ponto de partida e valide no seu próprio loadout antes de investir muitos recursos.";

export const buildGuides: BuildGuide[] = [
  {
    slug: "felarx",
    name: "Felarx",
    seoTitle: "Build Felarx Warframe 2026 — Steel Path, Bosses e Incarnon",
    category: "Primária",
    tier: "S",
    description: "Build Felarx Warframe para dano em alvo pesado, Steel Path, bosses e inimigos resistentes.",
    summary: "Shotgun Incarnon voltada para resolver inimigos resistentes. Para iniciante, serve como meta de longo prazo; para intermediário, entra quando a conta já tem sobrevivência; no endgame, cobre bosses e alvos que armas de clear demoram para finalizar.",
    mainRole: "Finalizar alvos pesados e bosses, cobrindo o ponto fraco de loadouts focados apenas em limpar grupos.",
    playerProfile: "Serve melhor para jogadores intermediários e endgame que já têm uma arma de clear ou Warframe de área e precisam de uma resposta confiável contra Eximus, bosses e inimigos resistentes.",
    acquisition: "A Felarx é uma arma Incarnon ligada ao conteúdo da Zariman e aos vendedores desse hub. Use esta página como referência de build e confirme os requisitos dentro do jogo antes de planejar o investimento.",
    acquisitionDetails: {
      prerequisite: "Avançar até liberar a Zariman e acesso ao vendedor de armas Incarnon.",
      vendorOrMission: "Normalmente comprada na Zariman com o vendedor de armas Incarnon.",
      reputation: "Pode exigir progressão de reputação da Zariman; confira o nível necessário no jogo.",
      resources: "Separe recursos da Zariman e créditos antes de comprar ou fabricar.",
      difficulty: "Média para obter, alta para finalizar com build endgame.",
      tip: "Use a arma em missões reais antes de gastar muitas Formas, porque a Felarx é mais voltada para alvo pesado do que para clear amplo."
    },
    starterBuild: "Build inicial: Hell's Chamber, Point Blank, Toxic Barrage, Frigid Blast, Blaze ou um mod de conforto, e um slot elemental conforme facção. Se faltar capacidade, use versões comuns e priorize multishot + elemento antes de otimizar dano máximo.",
    endgameBuild: "Build endgame: Galvanized Hell, Galvanized Savvy, Primed Point Blank, Critical Deceleration, Toxic Barrage, Frigid Blast, Primed Ravage ou opção equivalente se couber, e um slot flexível para facção, conforto ou ajuste de boss.",
    steelPathNotes: "No Steel Path, a Felarx funciona melhor como arma de alvo pesado. Combine com Warframe seguro, controle ou uma primária/Warframe de clear para não depender dela em grupos grandes.",
    factionNotes: "Use elementos conforme a facção enfrentada. Viral/Calor pode ser uma base geral quando fizer sentido, mas bosses e inimigos específicos podem pedir outra combinação.",
    strengths: ["Dano forte em alvo único", "Boa para Eximus, bosses e inimigos resistentes", "Escala bem quando a conta já tem mods, Arcanes e evoluções Incarnon"],
    weaknesses: ["Não é a opção mais confortável para limpar mapa inteiro", "Exige atenção às evoluções Incarnon e ao elemento", "Pode parecer cara cedo se sua conta ainda falta mods base e sobrevivência"],
    recommendedMods: ["Galvanized Hell", "Galvanized Savvy", "Primed Point Blank", "Critical Deceleration", "Toxic Barrage", "Frigid Blast", "Primed Ravage ou alternativa viável", "Slot flexível para facção, recarga ou conforto"],
    substituteMods: ["Hell's Chamber no lugar de Galvanized Hell", "Point Blank no lugar de Primed Point Blank", "Blunderbuss se ainda não couber Critical Deceleration", "Blaze para dano/Calor e conforto de progressão", "Contagious Spread ou Chilling Grasp se faltar mod 60/60", "Ammo Stock ou Tactical Pump se o conforto pesar mais que dano teórico"],
    approximateForma: "3 a 5 Formas, dependendo de mods Primed, polaridades e versão final validada.",
    recommendedArcanes: ["Primary Merciless", "Primary Deadhead", "Arcane de arma equivalente que favoreça dano consistente"],
    recommendedElement: "Ajuste conforme facção ou boss. Use o elemento que resolve melhor o alvo da missão em vez de manter uma configuração única para tudo.",
    incarnonEvolutions: [
      "Evolução II: escolha a opção que melhora o fluxo da shotgun para manter dano constante em alvo resistente.",
      "Evolução III: prefira conforto de recarga, manuseio ou consistência se a arma ficar pesada na prática.",
      "Evoluções finais: priorize bônus ofensivos voltados a alvo único e revise a escolha quando mudar facção, boss ou elemento."
    ],
    bestUse: "Bosses, Steel Path, Arquimídia Profunda e inimigos que não caem rápido para armas de clear.",
    investmentPriority: "Muito alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "Esta página organiza a build por objetivo, custo e substituições para facilitar validação na sua conta.",
    bestFor: ["Bosses", "Steel Path", "Arquimídia Profunda", "Alvos pesados"],
    statPriority: ["Galvanized Hell", "Galvanized Savvy", "Primed Point Blank", "Toxic Barrage ou Frigid Blast conforme alvo", "Recarga ou conforto se a rotação travar", "Evoluções Incarnon corretas"],
    progression: [
      "Iniciante: não force investimento completo se ainda faltam mods base, energia e sobrevivência; use a Felarx como objetivo futuro.",
      "Intermediário: use a arma como solução de alvo pesado enquanto outro slot do loadout cuida de clear.",
      "Endgame: ajuste elemento, Arcane e evoluções conforme boss, facção e mudanças de hotfix antes de fechar a versão final."
    ],
    editableSlots: [
      { label: "Build inicial/barata", guidance: "Use esta versão quando ainda não tiver todos os mods Galvanized, Arcanes ou polarizações necessárias para a build final." },
      { label: "Build endgame", guidance: "Feche esta versão quando a arma já estiver validada contra Steel Path, bosses e alvos resistentes que você realmente enfrenta." },
      { label: "Variação de elemento", guidance: "Anote quando trocar elemento por facção, boss ou missão específica." }
    ],
    avoid: ["Copiar build sem conferir evoluções Incarnon", "Usar como solução única para clear de mapa", "Gastar Forma antes de saber se o estilo shotgun combina com você"],
    faq: [
      { question: "Felarx é boa para Steel Path?", answer: "Sim, principalmente como arma de alvo pesado. Ela funciona melhor quando o restante do loadout já resolve sobrevivência e clear." },
      { question: "Qual elemento usar na Felarx?", answer: "Use o elemento que resolve o alvo da missão. Para bosses e facções específicas, vale ter variações em vez de manter um único elemento para tudo." },
      { question: "Felarx serve para limpar mapa?", answer: "Ela pode matar inimigos comuns, mas não é a opção mais confortável para clear amplo. Use uma arma ou Warframe de área junto dela." },
      { question: "Quando não usar Felarx?", answer: "Evite usar a Felarx como única solução em missões de clear rápido. Ela é mais útil quando o problema é alvo pesado, boss ou inimigo resistente." },
      { question: "Preciso de muitas Formas na Felarx?", answer: "A build final costuma pedir investimento, mas valide o estilo da arma e as evoluções antes de gastar Forma demais." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare a Felarx com outras armas do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda quando priorizar adaptadores Incarnon." },
      { href: "/farm-creditos", label: "Farm de Créditos", description: "Veja como montar rotas repetíveis com dano em alvo pesado." },
      { href: "/melhores-armas-primarias", label: "Melhores primárias", description: "Compare a Felarx com Torid, Latron, Burston e Phenmor." }
    ]
  },
  {
    slug: "torid-incarnon",
    name: "Torid Incarnon",
    category: "Primária",
    tier: "S",
    seoTitle: "Build Torid Incarnon Warframe — Guia para Steel Path",
    description: "Build Torid Incarnon Warframe para clear de grupos, Steel Path, Circuito, Sobrevivência e missões longas.",
    summary: "Torid Incarnon é uma das opções mais fortes para limpeza de grupos e missões longas quando bem investida. O modo Incarnon transforma a arma em uma opção excelente para dano em área, status e controle de multidões.",
    mainRole: "Clear de grupos, Steel Path, Sobrevivência, Conjunção, Circuito e missões longas.",
    playerProfile: "Serve para jogadores intermediários e endgame que já querem uma primária de clear e têm paciência para ajustar forma Incarnon, elemento e conforto. Para contas novas, é melhor tratar como objetivo futuro.",
    acquisition: "A Torid base é ligada ao Clã/Dojo, enquanto o adaptador Incarnon depende da rotação do Circuito Steel Path em Duviri. Confira a rotação atual no jogo antes de planejar o farm.",
    acquisitionDetails: {
      prerequisite: "Ter a Torid base e acesso ao caminho que libera adaptadores Incarnon.",
      vendorOrMission: "Torid base por pesquisa de Clã/Dojo; adaptador Incarnon pela rotação do Circuito Steel Path em Duviri.",
      reputation: "O requisito principal é progresso de conta e acesso ao Circuito Steel Path, não uma compra direta simples.",
      resources: "Separe recursos para fabricar a Torid, instalar o adaptador e polarizar a versão final.",
      difficulty: "Alta para a versão Incarnon completa, principalmente por rotação e investimento.",
      tip: "Confira a rotação atual do Circuito Steel Path no jogo antes de planejar o farm."
    },
    starterBuild: "Build inicial/barata: Serration, Split Chamber, Point Strike ou opção de crítico disponível, Vital Sense, Infected Clip, Cryo Rounds, Hellfire ou Stormbringer conforme facção, e um mod de conforto como recarga, munição ou qualidade de vida.",
    endgameBuild: "Build endgame: Galvanized Chamber, Galvanized Aptitude, Critical Delay, Vital Sense, Hunter Munitions se fizer sentido na configuração, Primed Cryo Rounds ou Cryo Rounds, Malignant Force ou Infected Clip, e Rime Rounds, Thermite Rounds ou outro elemental conforme facção.",
    steelPathNotes: "No Steel Path, use a Torid Incarnon para limpar grupos. Leve outro slot do loadout para alvo pesado, boss ou inimigos que não caem rápido no clear.",
    factionNotes: "Ajuste elemento conforme facção. Para uso geral, escolha combinações que mantenham clear estável; para conteúdo específico, valide variações antes de fixar a build.",
    strengths: ["Clear confortável em grupos densos", "Boa para Steel Path e missões longas", "Combina bem com Warframes de suporte, energia ou buff"],
    weaknesses: ["Menos focada em alvo único que Felarx", "Pede investimento para mostrar consistência", "Pode perder valor em missões com poucos inimigos ou foco em boss isolado"],
    recommendedMods: ["Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense", "Hunter Munitions se fizer sentido na configuração", "Primed Cryo Rounds ou Cryo Rounds", "Malignant Force ou Infected Clip", "Rime Rounds, Thermite Rounds ou elemental conforme facção"],
    substituteMods: ["Split Chamber no lugar de Galvanized Chamber", "Serration quando ainda faltar Arcane ou dano base", "Point Strike no lugar de Critical Delay", "Infected Clip ou Cryo Rounds se faltar mod 60/60", "Hellfire ou Stormbringer para ajustar facção", "Vigilante Armaments para multishot barato", "Speed Trigger ou mod de munição se a arma parecer pesada"],
    approximateForma: "3 a 5 Formas, dependendo de mods Primed, polaridades e versão final.",
    recommendedArcanes: ["Primary Merciless", "Primary Deadhead se o estilo favorecer abates precisos", "Primary Dexterity se você usa bastante melee junto"],
    recommendedElement: "Para uso geral, Viral/Calor costuma ser confortável quando aplicável. Ajuste elementos conforme facção, missão e evoluções Incarnon escolhidas.",
    incarnonEvolutions: [
      "Evolução II: escolha a opção que melhora conforto e fluxo da forma Incarnon.",
      "Evolução III: priorize consistência de dano, munição ou manuseio se a arma ficar pesada em missões longas.",
      "Evoluções finais: foque em bônus que reforçam clear, crítico/status e repetição de abates."
    ],
    bestUse: "Steel Path, Sobrevivência, Conjunção, Circuito, farm com alta densidade e missões longas.",
    investmentPriority: "Muito alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "Use esta build como base de clear e ajuste elemento, Arcane e conforto conforme sua conta.",
    bestFor: ["Steel Path", "Clear", "Farm", "Missões longas"],
    statPriority: ["Galvanized Chamber", "Critical Delay", "Vital Sense", "Status quando a build aproveitar Galvanized Aptitude", "Conforto de cadência", "Evoluções Incarnon de clear"],
    progression: [
      "Iniciante: priorize uma arma simples até liberar a base Incarnon e mods que sustentem o clear.",
      "Intermediário: use a Torid Incarnon para resolver densidade de inimigos e leve outro slot para alvo pesado.",
      "Endgame: revise elemento, Arcane e conforto de munição após updates, hotfixes e mudanças de balanceamento."
    ],
    editableSlots: [
      { label: "Versão de clear", guidance: "Use para Steel Path, sobrevivência e missões com muitos inimigos." },
      { label: "Variação de elemento", guidance: "Anote trocas por facção quando a configuração geral perder eficiência." },
      { label: "Conforto", guidance: "Registre ajustes de munição, cadência ou manuseio se o clear ficar inconsistente." }
    ],
    avoid: ["Usar como resposta única para boss resistente", "Ignorar evolução Incarnon", "Gastar Forma antes de confirmar se o estilo de clear combina com você"],
    faq: [
      { question: "Torid Incarnon é boa para Steel Path?", answer: "Sim. Ela é uma das opções mais confortáveis quando o desafio é limpar grupos densos e manter ritmo em missões longas." },
      { question: "Torid Incarnon ou Felarx?", answer: "Torid Incarnon tende a ser melhor para clear geral. Felarx tende a ser melhor quando o problema é boss ou alvo pesado." },
      { question: "Qual elemento usar na Torid Incarnon?", answer: "Ajuste conforme facção e objetivo. Para uso geral, escolha uma configuração que mantenha o clear estável na missão que você mais repete." },
      { question: "Vale investir muitas Formas?", answer: "Vale quando você já confirmou que a arma resolve seu clear e que a forma Incarnon combina com seu estilo de jogo." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare Torid Incarnon com outras primárias do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda prioridades de adaptadores Incarnon." },
      { href: "/builds/felarx", label: "Build Felarx", description: "Compare clear com dano em alvo pesado." },
      { href: "/farm-creditos", label: "Farm de Créditos", description: "Use clear consistente em rotas repetidas." }
    ]
  },
  {
    slug: "laetum",
    name: "Laetum",
    seoTitle: "Build Laetum Warframe 2026 — Melhor Configuração Incarnon para Steel Path",
    category: "Secundária",
    tier: "S",
    description: "Build Laetum Warframe para secundária Incarnon de dano consistente em Steel Path, bosses e alvos resistentes.",
    summary: "Secundária Incarnon usada como plano de dano confiável. Para iniciante, é uma meta de progressão; para intermediário, cobre alvos que a primária não resolve; no endgame, funciona como arma reserva forte e flexível.",
    mainRole: "Oferecer dano consistente contra alvos resistentes sem depender da primária.",
    playerProfile: "Serve para jogadores que querem uma secundária confiável para cobrir falhas da primária. É mais valiosa quando você já sabe se precisa de alvo pesado, plano B ou dano seguro em conteúdo alto.",
    acquisition: "A Laetum é uma secundária Incarnon associada ao progresso da Zariman. Confirme os requisitos de aquisição no jogo antes de investir Forma, Catalisador e Arcanes.",
    acquisitionDetails: {
      prerequisite: "Avançar até liberar a Zariman e o vendedor de armas Incarnon.",
      vendorOrMission: "Normalmente comprada na Zariman com o vendedor de armas Incarnon.",
      reputation: "Pode exigir reputação da Zariman; confirme o nível exato antes de planejar recursos.",
      resources: "Prepare recursos da Zariman, créditos e espaço para Catalisador/Formas.",
      difficulty: "Média para obter, alta para finalizar com mods e Arcanes.",
      tip: "Use a Laetum como secundária de segurança e valide as evoluções antes de decidir entre foco em crítico, status ou dano consistente."
    },
    starterBuild: "Build inicial: Hornet Strike, Barrel Diffusion, Lethal Torrent, Pistol Pestilence, Frostbite, Scorch ou Convulsion conforme facção, e um slot de conforto para recarga ou manuseio.",
    endgameBuild: "Build endgame: Galvanized Diffusion, Galvanized Shot, Lethal Torrent, Pistol Pestilence, Frostbite, Primed Heated Charge ou mod elemental de facção, Hornet Strike se ainda fizer sentido na sua versão, e Primed Target Cracker apenas se a evolução escolhida favorecer crítico.",
    steelPathNotes: "No Steel Path, a Laetum funciona muito bem como secundária de segurança para Eximus, inimigos resistentes e situações em que a primária está focada em clear.",
    factionNotes: "Escolha elementos conforme o alvo. Se a Laetum for sua resposta contra inimigo resistente, adapte a combinação para esse inimigo em vez de usar uma configuração única para tudo.",
    strengths: ["Consistente em conteúdo avançado", "Boa como arma reserva de dano", "Funciona bem em loadouts gerais quando a primária é de clear"],
    weaknesses: ["Precisa de evolução Incarnon bem escolhida", "Pode exigir investimento alto", "Conforto depende de recarga, munição e preferência de gameplay"],
    recommendedMods: ["Galvanized Diffusion", "Galvanized Shot", "Lethal Torrent", "Pistol Pestilence", "Frostbite", "Primed Heated Charge ou elemental conforme facção", "Hornet Strike quando ajudar sua versão", "Primed Target Cracker somente em variações críticas"],
    substituteMods: ["Barrel Diffusion no lugar de Galvanized Diffusion", "Hornet Strike como dano base de progressão", "Deep Freeze ou Convulsion se faltar mod 60/60", "Scorch para Calor/status", "Quickdraw ou Gunslinger se conforto for mais importante", "Elemental alternativo para boss ou facção"],
    approximateForma: "3 a 5 Formas, variando conforme mods Primed, arcanes e polaridades escolhidas.",
    recommendedArcanes: ["Secondary Merciless", "Secondary Deadhead", "Arcane de secundária alinhado ao seu padrão de kill"],
    recommendedElement: "Ajuste conforme facção e função da secundária. Se ela for arma de alvo pesado, priorize o elemento que funciona contra esse alvo.",
    incarnonEvolutions: [
      "Evolução II: escolha a opção que deixa a arma mais confortável para carregar e manter a forma Incarnon.",
      "Evolução III: priorize consistência de dano e manuseio se a secundária for seu plano B em Steel Path.",
      "Evoluções finais: use bônus ofensivos que combinam com alvo pesado, crítico/status da sua build e frequência de uso da forma Incarnon."
    ],
    bestUse: "Steel Path, bosses, Eximus e loadouts que precisam de uma secundária para resolver alvo pesado.",
    investmentPriority: "Muito alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "A build separa função, custo e ajustes para facilitar validação em missão real.",
    bestFor: ["Steel Path", "Bosses", "Alvos resistentes", "Loadouts sem secundária definida"],
    statPriority: ["Galvanized Diffusion", "Galvanized Shot quando houver status", "Elemental conforme facção", "Lethal Torrent", "Controle de recarga", "Evoluções Incarnon alinhadas ao estilo"],
    progression: [
      "Iniciante: não gaste recursos raros até confirmar que a rotação e a forma Incarnon combinam com você.",
      "Intermediário: use a Laetum para cobrir alvo pesado quando a primária é voltada para clear.",
      "Endgame: ajuste elemento, Arcane e conforto conforme missão, facção, Riven disponível e mudanças de meta."
    ],
    editableSlots: [
      { label: "Versão conforto", guidance: "Espaço para uma versão estável, fácil de usar e boa para conteúdo geral." },
      { label: "Versão alvo pesado", guidance: "Espaço para ajustes contra bosses, Eximus e inimigos com defesa alta." },
      { label: "Notas de evolução", guidance: "Registre as evoluções escolhidas e por que elas funcionaram na sua conta." }
    ],
    avoid: ["Ignorar economia de munição e conforto", "Assumir que toda missão precisa da forma Incarnon", "Trocar elementos sem validar contra o alvo real"],
    faq: [
      { question: "Laetum ainda vale para Steel Path?", answer: "Sim. A Laetum continua excelente como secundária de dano consistente, principalmente quando a primária está ocupada com clear ou utilidade." },
      { question: "Laetum é melhor para boss ou uso geral?", answer: "Ela funciona nos dois, mas tende a render mais como arma reserva para alvo resistente, Eximus e situações em que você precisa de dano confiável." },
      { question: "Qual elemento usar na Laetum?", answer: "Escolha conforme facção e função. Se ela for sua arma de alvo pesado, ajuste o elemento para o alvo que você quer resolver." },
      { question: "Quando não usar Laetum?", answer: "Se sua primária já resolve clear e alvo pesado com conforto, a Laetum pode ser menos urgente. Use a secundária para cobrir uma função que seu loadout ainda não tem." },
      { question: "Preciso usar a forma Incarnon sempre?", answer: "Não. A forma Incarnon é forte, mas o uso ideal depende da missão, munição, alvo e conforto da sua rotação." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare a Laetum com outras armas do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Veja outras armas Incarnon fortes." },
      { href: "/farm-creditos", label: "Farm de Créditos", description: "Use uma secundária confiável em rotas de farm repetidas." },
      { href: "/melhores-armas-secundarias", label: "Melhores secundárias", description: "Compare Laetum, Dual Toxocyst, Lex e Kuva Nukor." }
    ]
  },
  {
    slug: "dual-toxocyst-incarnon",
    name: "Dual Toxocyst Incarnon",
    seoTitle: "Build Dual Toxocyst Incarnon Warframe — Guia Meta",
    category: "Secundária",
    tier: "S",
    description: "Build Dual Toxocyst Incarnon Warframe para dano sustentado, alvo único, Steel Path e conteúdo avançado.",
    summary: "Dual Toxocyst Incarnon é uma secundária muito forte quando o jogador consegue ativar e manter seu ritmo de disparo. Ela funciona bem para dano sustentado, alvos resistentes e missões onde o jogador consegue aproveitar o modo Incarnon.",
    mainRole: "Dano sustentado, alvo único, Steel Path e conteúdo avançado.",
    playerProfile: "Serve melhor para jogadores intermediários e endgame que já têm mods de secundária, Arcanes e uma base de sobrevivência. Para iniciante absoluto, é mais seguro tratar como objetivo futuro.",
    acquisition: "Dual Toxocyst é uma arma secundária que pode exigir projeto e recursos. O adaptador Incarnon depende da rotação do Circuito Steel Path em Duviri. Confira a rotação atual no jogo antes de planejar o farm.",
    acquisitionDetails: {
      prerequisite: "Ter a arma base e acesso ao caminho que libera adaptadores Incarnon.",
      vendorOrMission: "Arma base por projeto/recursos conforme disponibilidade; adaptador pela rotação do Circuito Steel Path em Duviri.",
      reputation: "O requisito principal é progresso de conta e acesso ao Circuito Steel Path, não uma compra direta simples.",
      resources: "Separe recursos para fabricar a arma, instalar adaptador, usar Catalisador e polarizar a versão final.",
      difficulty: "Alta para a versão Incarnon completa, principalmente por rotação, mods e Arcanes.",
      tip: "Teste se você gosta do ritmo da arma antes de gastar muitas Formas; o desempenho depende de manter o fluxo de disparo e a forma Incarnon."
    },
    starterBuild: "Build inicial: Hornet Strike, Barrel Diffusion, Lethal Torrent, Pistol Gambit ou Creeping Bullseye se fizer sentido, Target Cracker, Pathogen Rounds, Deep Freeze ou outro elemental conforme facção, e um mod flexível de conforto.",
    endgameBuild: "Build endgame: Galvanized Diffusion, Galvanized Shot, Lethal Torrent, Primed Pistol Gambit ou Creeping Bullseye, Primed Target Cracker, Pistol Pestilence ou Pathogen Rounds, Frostbite ou Deep Freeze, e um slot flexível para elemento, facção ou qualidade de vida.",
    steelPathNotes: "No Steel Path, a Dual Toxocyst Incarnon funciona melhor quando você já sustenta sobrevivência e consegue manter abates sem quebrar o ritmo da arma.",
    factionNotes: "Ajuste elemento por facção e pelo papel da secundária no loadout. Se ela for sua arma de alvo pesado, priorize o elemento que resolve esse alvo.",
    strengths: ["Alto potencial de dano com investimento", "Boa escalabilidade com mods Galvanized e Arcane", "Excelente opção de secundária para setups endgame", "Funciona bem quando o jogador mantém o ritmo da arma"],
    weaknesses: ["Exige Incarnon e investimento para brilhar", "Pode ser menos confortável para quem não gosta do estilo da arma", "Depende de mods e Arcanes para desempenho máximo", "Não é a opção mais simples para iniciante absoluto"],
    recommendedMods: ["Galvanized Diffusion", "Galvanized Shot", "Lethal Torrent", "Primed Pistol Gambit ou Creeping Bullseye", "Primed Target Cracker", "Pistol Pestilence ou Pathogen Rounds", "Frostbite ou Deep Freeze", "Slot flexível para elemento, facção ou qualidade de vida"],
    substituteMods: ["Barrel Diffusion no lugar de Galvanized Diffusion", "Hornet Strike como dano base de progressão", "Pistol Gambit antes de Primed Pistol Gambit", "Target Cracker antes de Primed Target Cracker", "Pathogen Rounds ou Deep Freeze se faltar mod 60/60", "Quickdraw ou Gunslinger se o conforto pesar mais que dano teórico"],
    approximateForma: "3 a 5 Formas, dependendo de mods Primed, polaridades e versão Incarnon escolhida.",
    recommendedArcanes: ["Secondary Merciless", "Secondary Deadhead", "Secondary Encumber se fizer sentido com status e setup"],
    recommendedElement: "Use elementos conforme facção e função da arma. Viral/Calor pode ser confortável quando aplicável, mas não trate como regra fixa.",
    incarnonEvolutions: [
      "Evolução II: escolha uma opção que ajude a manter o ritmo da arma em missões longas.",
      "Evolução III: priorize consistência, conforto ou dano conforme o problema do seu loadout.",
      "Evoluções finais: alinhe os bônus ao uso real: alvo resistente, dano sustentado ou status."
    ],
    bestUse: "Steel Path, alvo único, missões longas e conteúdo avançado onde uma secundária forte sustenta dano.",
    investmentPriority: "Alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "Use esta build como base e ajuste conforto, elemento e Arcane depois de testar a rotação da arma.",
    bestFor: ["Steel Path", "Alvo único", "Dano sustentado", "Endgame"],
    statPriority: ["Galvanized Diffusion", "Galvanized Shot", "Lethal Torrent", "Pistol Gambit ou Creeping Bullseye conforme evolução", "Elemento por facção", "Arcane de secundária"],
    progression: [
      "Iniciante: trate como objetivo futuro e priorize mods base antes de investir pesado.",
      "Intermediário: use quando a secundária precisa resolver alvo resistente ou complementar uma primária de clear.",
      "Endgame: ajuste Arcane, elemento e conforto conforme a missão, Riven disponível e mudanças de meta."
    ],
    editableSlots: [
      { label: "Versão de progressão", guidance: "Use mods comuns enquanto libera Galvanized, Arcanes e polarizações." },
      { label: "Versão endgame", guidance: "Feche quando a arma já estiver validada contra Steel Path e conteúdo avançado." },
      { label: "Ajuste de conforto", guidance: "Registre mudanças de recarga, cadência ou manuseio se a arma perder ritmo." }
    ],
    avoid: ["Investir sem gostar do ritmo da arma", "Usar sem forma Incarnon ou Arcane adequado e esperar desempenho final", "Copiar elemento único sem testar contra a facção da missão"],
    faq: [
      { question: "Dual Toxocyst Incarnon vale a pena?", answer: "Vale para jogadores que querem uma secundária forte de dano sustentado e já têm investimento para sustentar mods, Arcane e forma Incarnon." },
      { question: "É boa para iniciante?", answer: "Não é a opção mais simples para iniciante absoluto. Funciona melhor como objetivo de progressão intermediária ou endgame." },
      { question: "Qual Arcane usar?", answer: "Secondary Merciless e Secondary Deadhead são escolhas seguras. Secondary Encumber pode fazer sentido em setups que aproveitam status." },
      { question: "Qual elemento usar?", answer: "Ajuste conforme facção e função da arma no loadout. Valide na missão real antes de gastar Forma demais." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Compare com outras builds de armas Incarnon." },
      { href: "/tier-list", label: "Tier List", description: "Veja a posição da Dual Toxocyst entre secundárias." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda prioridades de adaptadores." },
      { href: "/loadouts", label: "Loadouts", description: "Salve a secundária junto do setup completo." },
      { href: "/progressao", label: "Progressão", description: "Veja quando investir em armas Incarnon na conta." }
    ]
  },
  {
    slug: "ceramic-dagger-incarnon",
    name: "Ceramic Dagger Incarnon",
    seoTitle: "Build Ceramic Dagger Incarnon Warframe — Guia e Sinergias",
    category: "Melee",
    tier: "S",
    description: "Build Ceramic Dagger Incarnon Warframe para melee utilitária, sinergias, dano com investimento e setups avançados.",
    summary: "Ceramic Dagger Incarnon é uma melee valorizada por utilidade, sinergias e potencial de dano quando bem montada. Ela pode funcionar como peça de suporte para builds específicas ou como melee forte em setups otimizados.",
    mainRole: "Melee utilitária, sinergias Incarnon, dano com investimento e suporte a setups específicos.",
    playerProfile: "Serve para jogadores intermediários e endgame que querem explorar sinergias Incarnon, melee otimizada ou setups específicos. Para contas novas, outras melee simples costumam ser mais diretas.",
    acquisition: "Ceramic Dagger pode estar ligada a aquisição por mercado, alertas ou disponibilidade variável conforme a versão do jogo. O adaptador Incarnon depende da rotação do Circuito Steel Path em Duviri. Confira a disponibilidade atual no jogo antes de planejar o farm.",
    acquisitionDetails: {
      prerequisite: "Ter a Ceramic Dagger base e acesso ao caminho que libera adaptadores Incarnon.",
      vendorOrMission: "Arma base conforme disponibilidade atual no jogo; adaptador pela rotação do Circuito Steel Path em Duviri.",
      reputation: "O requisito principal é progresso de conta e acesso ao Circuito Steel Path.",
      resources: "Separe recursos para fabricar a arma, instalar adaptador, usar Catalisador e ajustar polaridades.",
      difficulty: "Alta para otimizar, porque o valor depende de evolução Incarnon, mods e sinergia do loadout.",
      tip: "Confirme a disponibilidade atual e teste a função real da Ceramic Dagger antes de investir muitas Formas."
    },
    starterBuild: "Build inicial: Pressure Point ou Primed Pressure Point, Organ Shatter, True Steel ou Sacrificial Steel, Fury ou Berserker Fury se fizer sentido, Fever Strike, North Wind, mod de alcance ou conforto e um slot flexível.",
    endgameBuild: "Build endgame: Condition Overload, Blood Rush, Weeping Wounds, Organ Shatter, Primed Reach ou Reach, Berserker Fury ou Primed Fury, elementos conforme facção, e slot flexível para Gladiator Might, facção ou conforto.",
    steelPathNotes: "No Steel Path, use a Ceramic Dagger Incarnon quando a build tiver função clara: dano melee, utilidade ou sinergia com o Warframe.",
    factionNotes: "Ajuste elementos conforme facção e status disponíveis no resto do loadout. Evite tratar uma configuração como obrigatória para todos os usos.",
    strengths: ["Boa utilidade em builds otimizadas", "Escala bem com mods de crítico/status conforme a configuração", "Pode complementar setups de armas e Warframes", "Excelente opção para jogadores que querem explorar sinergias Incarnon"],
    weaknesses: ["Não é a melee mais intuitiva para iniciantes", "Exige entender evoluções Incarnon e sinergias", "Pode precisar de Forma e mods fortes", "Resultado varia bastante conforme build e estilo de jogo"],
    recommendedMods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Primed Reach ou Reach", "Berserker Fury ou Primed Fury", "Elementos conforme facção", "Slot flexível para Gladiator Might, facção ou conforto"],
    substituteMods: ["Pressure Point ou Primed Pressure Point antes de Condition Overload", "True Steel ou Sacrificial Steel antes de Blood Rush", "Fury antes de Primed Fury", "Reach antes de Primed Reach", "Fever Strike e North Wind para progressão elemental", "Drifting Contact para conforto de combo"],
    approximateForma: "2 a 5 Formas, dependendo se a arma será utilitária, melee principal ou peça de sinergia específica.",
    recommendedArcanes: ["Melee Exposure", "Melee Duplicate quando fizer sentido para a configuração", "Arcane de melee compatível com o papel real da arma"],
    recommendedElement: "Ajuste conforme facção, status do loadout e evolução Incarnon escolhida. Não existe uma combinação única obrigatória para todos os setups.",
    incarnonEvolutions: [
      "Escolha evoluções pensando na função real: utilidade, dano melee ou sinergia com Warframe.",
      "Evite copiar evolução sem entender por que ela funciona no setup.",
      "Se o projeto receber dados mais específicos de evolução, revise esta seção antes de fechar a build final."
    ],
    bestUse: "Setups endgame, sinergias Incarnon, melee otimizada e builds específicas que aproveitam utilidade ou dano.",
    investmentPriority: "Alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "Use como base editável para validar sinergias; o resultado muda bastante conforme Warframe, mods, Arcanes e evoluções.",
    bestFor: ["Endgame", "Sinergias", "Melee", "Setups específicos"],
    statPriority: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Alcance", "Velocidade de ataque", "Evoluções Incarnon"],
    progression: [
      "Iniciante: não é prioridade antes de mods base, sobrevivência e arma principal consistente.",
      "Intermediário: considere quando já entende melee, combo e status.",
      "Endgame: ajuste evoluções, elementos e Arcane conforme a sinergia exata do setup."
    ],
    editableSlots: [
      { label: "Versão utilitária", guidance: "Use quando a Ceramic Dagger complementa outro dano principal." },
      { label: "Versão melee", guidance: "Use quando ela precisa matar de forma consistente." },
      { label: "Sinergia específica", guidance: "Registre o Warframe, evolução e motivo da escolha para não perder contexto." }
    ],
    avoid: ["Copiar uma configuração sem entender a sinergia", "Gastar Forma antes de confirmar o papel da arma", "Usar como melee universal sem comparar com outras opções"],
    faq: [
      { question: "Ceramic Dagger Incarnon é para iniciante?", answer: "Não é a opção mais intuitiva para iniciante. Ela rende mais quando o jogador entende evoluções Incarnon, combo, status e sinergias." },
      { question: "Ela serve como melee principal?", answer: "Pode servir em setups otimizados, mas também pode entrar como peça utilitária. Defina o papel antes de montar a build." },
      { question: "Qual elemento usar?", answer: "Ajuste por facção e pelo status disponível no loadout. Evite uma resposta única para todo conteúdo." },
      { question: "Preciso conferir a rotação?", answer: "Sim. O adaptador Incarnon depende da rotação do Circuito Steel Path em Duviri, então confira no jogo antes de planejar." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Compare com outras builds de melee e Incarnon." },
      { href: "/tier-list", label: "Tier List", description: "Veja a posição da Ceramic Dagger no ranking." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda prioridades de adaptadores." },
      { href: "/melhores-melee", label: "Melhores melee", description: "Compare com Praedos, Glaive Prime e Dual Ichor." },
      { href: "/progressao", label: "Progressão", description: "Veja quando investir em sinergias mais avançadas." }
    ]
  },
  {
    slug: "praedos",
    name: "Praedos",
    seoTitle: "Build Praedos Warframe 2026 — Melhor Evolução Incarnon e Build de Mobilidade",
    category: "Melee",
    tier: "S",
    description: "Build Praedos Warframe para mobilidade, utilidade e conforto em farms, missões rápidas e loadouts gerais.",
    summary: "Melee Incarnon valorizada pelo conforto. Para iniciante, não é prioridade antes da base da conta; para intermediário, melhora deslocamento; no endgame, separa uma versão utilitária de uma versão realmente melee.",
    mainRole: "Aumentar fluidez do loadout, melhorar deslocamento e servir como melee utilitária quando dano puro não é o objetivo principal.",
    playerProfile: "Serve para jogadores que repetem farms, missões rápidas ou Steel Path e querem economizar tempo com mobilidade. Para quem busca apenas dano melee, compare com outras opções antes de investir.",
    acquisition: "A Praedos é uma melee Incarnon ligada ao conteúdo da Zariman. Confirme os requisitos dentro do jogo e escolha evoluções de acordo com mobilidade ou dano.",
    acquisitionDetails: {
      prerequisite: "Avançar até liberar a Zariman e acesso ao vendedor de armas Incarnon.",
      vendorOrMission: "Normalmente comprada na Zariman com o vendedor de armas Incarnon.",
      reputation: "Pode exigir reputação da Zariman; confira o requisito antes de comprar.",
      resources: "Prepare recursos da Zariman, créditos e espaço para polarizações se for fazer versão melee.",
      difficulty: "Média para obter, média/alta para otimizar duas variações.",
      tip: "Separe uma configuração de mobilidade de uma configuração de dano. Misturar os dois objetivos costuma deixar a arma menos eficiente."
    },
    starterBuild: "Build inicial de mobilidade: Pressure Point, Fury, Reach, True Steel, Organ Shatter, Fever Strike, North Wind e um slot de conforto. Use para sentir a arma antes de buscar dano máximo.",
    endgameBuild: "Build endgame melee: Condition Overload, Blood Rush, Weeping Wounds, Organ Shatter, Berserker Fury ou Primed Fury, Primed Reach, Virulent Scourge, Vicious Frost ou ajuste elemental por facção.",
    steelPathNotes: "No Steel Path, a Praedos ajuda pelo conforto e deslocamento. Se ela for sua fonte de dano, a build precisa de elemento, combo e suporte adequados.",
    factionNotes: "Se a Praedos for utilitária, elemento é secundário. Se for melee de dano, ajuste conforme facção e suporte de status do restante do loadout.",
    strengths: ["Excelente conforto em missões repetidas", "Valor mesmo quando não é fonte principal de dano", "Boa flexibilidade entre utilidade e melee"],
    weaknesses: ["Menor prioridade se você não usa mobilidade ativa", "Build de dano compete com outras melee fortes", "Pode parecer fraca se usada sem entender o papel utilitário"],
    recommendedMods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Organ Shatter", "Berserker Fury ou Primed Fury", "Primed Reach", "Virulent Scourge", "Vicious Frost ou elemental conforme facção"],
    substituteMods: ["Pressure Point enquanto Condition Overload não encaixa", "True Steel antes de Blood Rush", "Fury no lugar de Primed Fury", "Reach no lugar de Primed Reach", "Fever Strike ou North Wind se faltar mod 60/60", "Drifting Contact para conforto de combo"],
    approximateForma: "2 a 4 Formas, dependendo se o foco é mobilidade pura ou dano melee.",
    recommendedArcanes: ["Melee Duplicate quando fizer sentido para a build", "Melee Exposure", "Arcane de melee compatível com seu foco real"],
    recommendedElement: "Se a Praedos for utilitária, elemento é secundário. Se for fonte de dano, ajuste conforme facção e status disponíveis no loadout.",
    incarnonEvolutions: [
      "Build focada em mobilidade: priorize evoluções que deixam deslocamento, parkour e ritmo de missão mais confortáveis.",
      "Build focada em melee: escolha evoluções ofensivas apenas se a Praedos realmente for sua fonte de dano.",
      "Configuração de farm: separe a versão utilitária da versão de dano para não misturar objetivos na mesma build."
    ],
    bestUse: "Farm, missões rápidas, deslocamento e loadouts que valorizam qualidade de vida.",
    investmentPriority: "Alta",
    difficulty: "Média",
    buildCost: "Médio",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "A página separa uso utilitário e uso de dano para evitar uma build única que não serve para todos.",
    bestFor: ["Farm", "Missões rápidas", "Mobilidade", "Loadouts gerais"],
    statPriority: ["Mobilidade", "Berserker Fury ou Primed Fury se for usar melee", "Combo e status", "Elemental se virar fonte de dano", "Evoluções Incarnon utilitárias"],
    progression: [
      "Iniciante: priorize sobrevivência, arma principal e mods base antes de investir pesado em mobilidade.",
      "Intermediário: use Praedos como ferramenta de deslocamento quando farms e missões rápidas começam a tomar tempo.",
      "Endgame: mantenha versões separadas para mobilidade e melee, revisando evoluções após hotfixes ou mudanças em Arcanes."
    ],
    editableSlots: [
      { label: "Build focada em mobilidade", guidance: "Use esta variação quando a Praedos entra para acelerar deslocamento, parkour e farms repetidos." },
      { label: "Build focada em melee", guidance: "Use esta variação quando a Praedos precisa matar e não apenas melhorar a fluidez do loadout." },
      { label: "Missões recomendadas", guidance: "Anote onde a mobilidade da Praedos realmente economiza tempo." }
    ],
    avoid: ["Tratar toda melee como stat-stick", "Ignorar evoluções de mobilidade", "Gastar recursos se você nunca usa melee ou parkour ativo"],
    faq: [
      { question: "Praedos é boa mesmo sem ser arma principal?", answer: "Sim. O valor da Praedos vem muito da mobilidade e do conforto, não apenas do dano melee." },
      { question: "Devo buildar Praedos para dano?", answer: "Só se você realmente pretende usar melee para matar. Para farm e missões rápidas, a versão utilitária costuma entregar mais valor." },
      { question: "Qual elemento usar na Praedos?", answer: "Se ela for utilitária, o elemento importa menos. Se for arma de dano, ajuste conforme facção e status do loadout." },
      { question: "Quando não usar Praedos?", answer: "Se você não aproveita mobilidade, parkour ou melee ativa, outra arma pode entregar mais valor imediato para dano puro." },
      { question: "Praedos é melhor para mobilidade ou melee?", answer: "Para a maioria dos loadouts, a Praedos entrega mais valor como ferramenta de mobilidade. A versão melee vale quando você quer usar a arma como fonte real de dano." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas, Incarnon e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare a Praedos com outras armas do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda quando priorizar armas Incarnon no seu progresso." },
      { href: "/melhores-melee", label: "Melhores melee", description: "Compare Praedos com Glaive Prime, Ceramic Dagger e Dual Ichor." },
      { href: "/farm-creditos", label: "Farm", description: "Veja como mobilidade ajuda em farms repetidos." },
      { href: "/steel-path", label: "Steel Path", description: "Monte uma base segura para conteúdo difícil." }
    ]
  }
];

export function getBuildGuide(slug: string) {
  return buildGuides.find(build => build.slug === slug);
}
