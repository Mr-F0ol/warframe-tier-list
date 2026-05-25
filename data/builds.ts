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
    acquisition: "A Felarx é uma arma Incarnon ligada ao conteúdo da Zariman. Use esta página como referência de build e confirme os requisitos dentro do jogo antes de planejar o investimento.",
    starterBuild: "Use uma versão inicial com multishot, dano base, elemento adequado ao alvo e um slot de conforto para recarga ou manuseio. Não force mods Galvanized, Arcanes e polarizações se a arma ainda não encaixou no seu loadout.",
    endgameBuild: "A versão endgame deve combinar evoluções Incarnon escolhidas com objetivo claro, mods Galvanized quando disponíveis, Arcane de primária e ajuste de elemento por boss ou facção.",
    steelPathNotes: "No Steel Path, a Felarx funciona melhor como arma de alvo pesado. Combine com Warframe seguro, controle ou uma primária/Warframe de clear para não depender dela em grupos grandes.",
    factionNotes: "Use elementos conforme a facção enfrentada. Viral/Calor pode ser uma base geral quando fizer sentido, mas bosses e inimigos específicos podem pedir outra combinação.",
    strengths: ["Dano forte em alvo único", "Boa para Eximus, bosses e inimigos resistentes", "Escala bem quando a conta já tem mods, Arcanes e evoluções Incarnon"],
    weaknesses: ["Não é a opção mais confortável para limpar mapa inteiro", "Exige atenção às evoluções Incarnon e ao elemento", "Pode parecer cara cedo se sua conta ainda falta mods base e sobrevivência"],
    recommendedMods: ["Multishot de shotgun", "Dano base ou equivalente disponível", "Elemento conforme facção", "Mods Galvanized quando liberados", "Slot flexível para cadência, recarga ou conforto"],
    substituteMods: ["Versões não Primed/mais baratas dos mods principais", "Elemento alternativo por facção", "Mod de conforto no lugar de dano máximo", "Opção de economia de munição se necessário"],
    approximateForma: "3 a 5 Formas, dependendo de mods Primed, polaridades e versão final testada.",
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
    disclaimer: "Esta página organiza a build por objetivo, custo e substituições para facilitar testes na sua conta.",
    bestFor: ["Bosses", "Steel Path", "Arquimídia Profunda", "Alvos pesados"],
    statPriority: ["Multishot", "Dano base", "Elemental adequado ao alvo", "Cadência ou recarga conforme conforto", "Evoluções Incarnon corretas"],
    progression: [
      "Iniciante: não force investimento completo se ainda faltam mods base, energia e sobrevivência; use a Felarx como objetivo futuro.",
      "Intermediário: teste a arma como solução de alvo pesado enquanto outro slot do loadout cuida de clear.",
      "Endgame: ajuste elemento, Arcane e evoluções conforme boss, facção e mudanças de hotfix antes de fechar a versão final."
    ],
    editableSlots: [
      { label: "Build inicial/barata", guidance: "Use esta versão quando ainda não tiver todos os mods Galvanized, Arcanes ou polarizações necessárias para a build final." },
      { label: "Build endgame", guidance: "Feche esta versão quando a arma já estiver testada contra Steel Path, bosses e alvos resistentes que você realmente enfrenta." },
      { label: "Variação de elemento", guidance: "Anote quando trocar elemento por facção, boss ou missão específica." }
    ],
    avoid: ["Copiar build sem conferir evoluções Incarnon", "Usar como solução única para clear de mapa", "Gastar Forma antes de saber se o estilo shotgun combina com você"],
    faq: [
      { question: "Felarx é boa para Steel Path?", answer: "Sim, principalmente como arma de alvo pesado. Ela funciona melhor quando o restante do loadout já resolve sobrevivência e clear." },
      { question: "Qual elemento usar na Felarx?", answer: "Use o elemento que resolve o alvo da missão. Para bosses e facções específicas, vale ter variações em vez de manter um único elemento para tudo." },
      { question: "Felarx serve para limpar mapa?", answer: "Ela pode matar inimigos comuns, mas não é a opção mais confortável para clear amplo. Use uma arma ou Warframe de área junto dela." },
      { question: "Quando não usar Felarx?", answer: "Evite usar a Felarx como única solução em missões de clear rápido. Ela é mais útil quando o problema é alvo pesado, boss ou inimigo resistente." },
      { question: "Preciso de muitas Formas na Felarx?", answer: "A build final costuma pedir investimento, mas teste o estilo da arma e as evoluções antes de gastar Forma demais." }
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
    seoTitle: "Build Torid Incarnon Warframe — Clear Meta para Steel Path",
    category: "Primária",
    tier: "S",
    description: "Build Torid Incarnon Warframe para clear consistente, Steel Path e missões com alta densidade de inimigos.",
    summary: "Primária Incarnon voltada para limpar grupos. Para iniciante, é um objetivo de progressão; para intermediário, resolve clear com boa consistência; no endgame, vira uma das bases de missões densas quando bem montada.",
    mainRole: "Limpar grupos e manter ritmo em Steel Path, farms longos e conteúdo geral com muitos inimigos.",
    playerProfile: "Serve para jogadores que já querem uma primária de clear e têm paciência para ajustar forma Incarnon, elemento e conforto. Para contas novas, é melhor tratar como objetivo futuro.",
    acquisition: "A Torid recebe valor alto com o adaptador Incarnon. Confirme a rotação e disponibilidade do adaptador no jogo antes de gastar recursos planejando a build final.",
    starterBuild: "Comece com multishot, dano base, elemento de uso geral e conforto suficiente para manter a arma fluida. A versão inicial deve funcionar antes de receber muitas Formas.",
    endgameBuild: "A versão endgame deve priorizar evoluções Incarnon de clear, mods Galvanized, Arcane de primária e ajustes de elemento por facção ou missão de alta densidade.",
    steelPathNotes: "No Steel Path, use a Torid Incarnon para limpar grupos. Leve outro slot do loadout para alvo pesado, boss ou inimigos que não caem rápido no clear.",
    factionNotes: "Ajuste elemento conforme facção. Para uso geral, escolha combinações que mantenham clear estável; para conteúdo específico, teste variações antes de fixar a build.",
    strengths: ["Clear confortável em grupos densos", "Boa para Steel Path e missões longas", "Combina bem com Warframes de suporte, energia ou buff"],
    weaknesses: ["Menos focada em alvo único que Felarx", "Pede investimento para mostrar consistência", "Pode perder valor em missões com poucos inimigos ou foco em boss isolado"],
    recommendedMods: ["Multishot de primária", "Dano base ou equivalente disponível", "Crítico/status conforme sua versão", "Elemento conforme facção", "Mods Galvanized quando liberados"],
    substituteMods: ["Versões comuns antes das Primed", "Elemento alternativo por facção", "Mod de conforto se faltar munição ou manuseio", "Slot flexível para cadência quando o clear ficar lento"],
    approximateForma: "3 a 5 Formas, dependendo de mods Primed, polaridades e versão final.",
    recommendedArcanes: ["Primary Merciless", "Primary Deadhead", "Arcane de primária que favoreça dano em sequência"],
    recommendedElement: "Ajuste conforme facção. Para uso geral, priorize combinações que mantenham clear consistente contra grupos densos.",
    incarnonEvolutions: [
      "Evolução II: escolha a opção que melhora conforto e fluxo da forma Incarnon.",
      "Evolução III: priorize consistência de dano, munição ou manuseio se a arma ficar pesada em missões longas.",
      "Evoluções finais: foque em bônus que reforçam clear, crítico/status e repetição de abates."
    ],
    bestUse: "Steel Path, sobrevivência, missões longas, farm com alta densidade e conteúdo geral em que clear é o gargalo.",
    investmentPriority: "Muito alta",
    difficulty: "Alta",
    buildCost: "Alto",
    lastReviewed: siteMeta.lastUpdated,
    baseUpdate: siteMeta.updateBase,
    metaWarning: defaultWarning,
    disclaimer: "Use esta build como base de clear e ajuste elemento, Arcane e conforto conforme sua conta.",
    bestFor: ["Steel Path", "Clear", "Farm", "Missões longas"],
    statPriority: ["Multishot", "Dano base", "Elemental adequado", "Crítico/status conforme build", "Evoluções Incarnon de clear"],
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
    avoid: ["Usar como resposta única para boss resistente", "Ignorar evolução Incarnon", "Gastar Forma antes de testar se o estilo de clear combina com você"],
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
    starterBuild: "A versão inicial deve usar multishot, dano base, elemento adequado e conforto de recarga/manuseio. Priorize consistência antes de tentar otimizar todo o teto de dano.",
    endgameBuild: "A versão endgame combina evoluções Incarnon bem escolhidas, mods Galvanized, Arcane de secundária e elemento ajustado para o alvo que a primária não resolve.",
    steelPathNotes: "No Steel Path, a Laetum funciona muito bem como secundária de segurança para Eximus, inimigos resistentes e situações em que a primária está focada em clear.",
    factionNotes: "Escolha elementos conforme o alvo. Se a Laetum for sua resposta contra inimigo resistente, adapte a combinação para esse inimigo em vez de usar uma configuração única para tudo.",
    strengths: ["Consistente em conteúdo avançado", "Boa como arma reserva de dano", "Funciona bem em loadouts gerais quando a primária é de clear"],
    weaknesses: ["Precisa de evolução Incarnon bem escolhida", "Pode exigir investimento alto", "Conforto depende de recarga, munição e preferência de gameplay"],
    recommendedMods: ["Multishot de secundária", "Dano base ou equivalente", "Elemento conforme facção", "Mods Galvanized quando disponíveis", "Slot flexível para recarga, cadência ou conforto"],
    substituteMods: ["Versões comuns antes das Primed", "Elemento alternativo por facção", "Mod de qualidade de vida se o manuseio ficar ruim", "Opção de status quando a build pedir aplicação"],
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
    statPriority: ["Multishot", "Dano consistente", "Elemental conforme facção", "Controle de recarga", "Evoluções Incarnon alinhadas ao estilo"],
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
    avoid: ["Ignorar economia de munição e conforto", "Assumir que toda missão precisa da forma Incarnon", "Trocar elementos sem testar contra o alvo real"],
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
    starterBuild: "A versão inicial pode focar em mobilidade, velocidade de ataque e conforto, sem tentar competir com uma build melee completa logo de início.",
    endgameBuild: "A versão endgame deve separar dois objetivos: uma variação de mobilidade para farms e uma variação melee quando a Praedos realmente precisa causar dano.",
    steelPathNotes: "No Steel Path, a Praedos ajuda pelo conforto e deslocamento. Se ela for sua fonte de dano, a build precisa de elemento, combo e suporte adequados.",
    factionNotes: "Se a Praedos for utilitária, elemento é secundário. Se for melee de dano, ajuste conforme facção e suporte de status do restante do loadout.",
    strengths: ["Excelente conforto em missões repetidas", "Valor mesmo quando não é fonte principal de dano", "Boa flexibilidade entre utilidade e melee"],
    weaknesses: ["Menor prioridade se você não usa mobilidade ativa", "Build de dano compete com outras melee fortes", "Pode parecer fraca se usada sem entender o papel utilitário"],
    recommendedMods: ["Velocidade de ataque se for usar para melee", "Combo ou sustain conforme estilo", "Elemento se a arma for matar", "Mods de qualidade de vida para mobilidade", "Evoluções Incarnon utilitárias"],
    substituteMods: ["Slots de conforto no lugar de dano", "Elemento alternativo conforme facção", "Opções mais baratas antes de mods Primed", "Configuração utilitária sem foco em DPS máximo"],
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
    statPriority: ["Mobilidade", "Velocidade de ataque se for usar melee", "Combo conforme variante", "Elemental se virar fonte de dano", "Evoluções Incarnon utilitárias"],
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
