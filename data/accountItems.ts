export type AccountItemCategory = "warframe" | "arma" | "sistema" | "farm";

export interface AccountItem {
  id: string;
  name: string;
  category: AccountItemCategory;
  type: string;
  tags: string[];
  href?: string;
  description: string;
  priorityHint: string;
  relatedFarms: string[];
  relatedBuilds: string[];
  recommendedFor: string[];
}

export const accountItems: AccountItem[] = [
  {
    id: "dante",
    name: "Dante",
    category: "warframe",
    type: "Warframe",
    tags: ["Steel Path", "Segurança", "Suporte", "Dano"],
    description: "Warframe seguro para conteúdo geral, proteção do grupo e dano em área.",
    priorityHint: "Boa prioridade se você quer um Warframe confortável para Steel Path e missões longas.",
    relatedFarms: ["/farm-endo", "/farm-creditos"],
    relatedBuilds: [],
    recommendedFor: ["steel-path", "sobrevivencia", "geral"]
  },
  {
    id: "revenant-prime",
    name: "Revenant Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Steel Path", "Sobrevivência", "Solo", "Boss"],
    description: "Opção segura para jogadores que querem sobreviver com consistência em conteúdo difícil.",
    priorityHint: "Excelente escolha se sua conta ainda sofre para ficar viva no Steel Path.",
    relatedFarms: ["/farm-endo", "/farm-creditos"],
    relatedBuilds: [],
    recommendedFor: ["steel-path", "sobrevivencia", "boss"]
  },
  {
    id: "wisp-prime",
    name: "Wisp Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Suporte", "Boss", "Missões longas", "Grupo"],
    description: "Warframe de suporte muito útil para buffs, sustentação e conforto de squad.",
    priorityHint: "Boa prioridade se você joga em grupo ou quer suporte flexível para bosses e farms.",
    relatedFarms: ["/farm-endo", "/farm-creditos"],
    relatedBuilds: [],
    recommendedFor: ["suporte", "boss", "farm"]
  },
  {
    id: "saryn-prime",
    name: "Saryn Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Farm", "Clear", "Foco", "ESO"],
    description: "Warframe de clear forte para conteúdo com alta densidade de inimigos.",
    priorityHint: "Boa prioridade se seu objetivo é farmar foco, limpar grupos e acelerar missões repetidas.",
    relatedFarms: ["/farm-foco-warframe", "/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["farm", "foco", "clear"]
  },
  {
    id: "protea-prime",
    name: "Protea Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Suporte", "Energia", "Farm", "Missões longas"],
    description: "Warframe versátil para energia, utilidade, dano e controle de ritmo em missões longas.",
    priorityHint: "Boa prioridade se você quer uma opção estável para farms, suporte e conteúdo prolongado.",
    relatedFarms: ["/farm-endo", "/farm-kuva"],
    relatedBuilds: [],
    recommendedFor: ["farm", "suporte", "missao-longa"]
  },
  {
    id: "rhino",
    name: "Rhino",
    category: "warframe",
    type: "Warframe",
    tags: ["Iniciante", "Sobrevivência", "Buff", "Seguro"],
    description: "Warframe simples e resistente para abrir progresso sem depender de build cara.",
    priorityHint: "Boa escolha inicial se você precisa de sobrevivência e dano extra sem muito investimento.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["iniciante", "sobrevivencia", "progressao"]
  },
  {
    id: "nezha",
    name: "Nezha",
    category: "warframe",
    type: "Warframe",
    tags: ["Iniciante", "Sobrevivência", "Mobilidade"],
    description: "Warframe resistente e ágil para progressão, farm e conteúdo geral.",
    priorityHint: "Boa opção se você quer segurança com mais mobilidade do que opções tradicionais.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["iniciante", "sobrevivencia", "farm"]
  },
  {
    id: "citrine",
    name: "Citrine",
    category: "warframe",
    type: "Warframe",
    tags: ["Suporte", "Sobrevivência", "Status", "Grupo"],
    description: "Warframe de suporte com boa utilidade para sobreviver e aplicar status.",
    priorityHint: "Boa prioridade se você quer conforto em grupo, sustain e suporte para missões longas.",
    relatedFarms: ["/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["suporte", "sobrevivencia", "grupo"]
  },
  {
    id: "khora-prime",
    name: "Khora Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Farm", "Controle", "Loot", "Missões longas"],
    description: "Warframe útil em farms organizados, controle de área e missões de repetição.",
    priorityHint: "Boa prioridade se seu foco é farmar recursos com composição mais preparada.",
    relatedFarms: ["/farm", "/farm-endo", "/farm-kuva"],
    relatedBuilds: [],
    recommendedFor: ["farm", "grupo", "recursos"]
  },
  {
    id: "gauss",
    name: "Gauss",
    category: "warframe",
    type: "Warframe",
    tags: ["Mobilidade", "Missões rápidas", "Dano"],
    description: "Warframe veloz para missões rápidas, farm de rotação e gameplay ativo.",
    priorityHint: "Boa escolha se você quer acelerar conteúdo repetido e gosta de mobilidade alta.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["farm", "mobilidade", "rapidas"]
  },
  {
    id: "kullervo",
    name: "Kullervo",
    category: "warframe",
    type: "Warframe",
    tags: ["Dano", "Melee", "Steel Path", "Boss"],
    description: "Warframe agressivo com bom potencial de dano quando a conta já tem base.",
    priorityHint: "Boa prioridade se você quer dano alto e já tem sobrevivência e mods preparados.",
    relatedFarms: ["/farm-endo", "/farm-kuva"],
    relatedBuilds: [],
    recommendedFor: ["dano", "melee", "steel-path"]
  },
  {
    id: "xaku-prime",
    name: "Xaku Prime",
    category: "warframe",
    type: "Warframe Prime",
    tags: ["Steel Path", "Escala", "Missões longas"],
    description: "Warframe forte para conteúdo avançado quando bem montado e entendido.",
    priorityHint: "Boa prioridade para jogadores que já querem otimizar Steel Path e missões longas.",
    relatedFarms: ["/farm-endo", "/farm-kuva"],
    relatedBuilds: [],
    recommendedFor: ["steel-path", "endgame", "missao-longa"]
  },
  {
    id: "torid-incarnon",
    name: "Torid Incarnon",
    category: "arma",
    type: "Primária",
    tags: ["Incarnon", "Steel Path", "Clear", "Endgame"],
    href: "/builds/torid-incarnon",
    description: "Primária forte para clear de grupos, status e missões longas quando bem investida.",
    priorityHint: "Boa prioridade se você precisa de uma arma de clear para Steel Path e farms densos.",
    relatedFarms: ["/farm-endo", "/farm-creditos"],
    relatedBuilds: ["/builds/torid-incarnon"],
    recommendedFor: ["farm", "steel-path", "endgame"]
  },
  {
    id: "felarx",
    name: "Felarx",
    category: "arma",
    type: "Primária",
    tags: ["Incarnon", "Steel Path", "Boss", "Zariman"],
    href: "/builds/felarx",
    description: "Primária forte para dano alto em alvo único e conteúdo avançado.",
    priorityHint: "Boa prioridade se você precisa de arma forte para bosses e alvos resistentes.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: ["/builds/felarx"],
    recommendedFor: ["boss", "steel-path", "endgame"]
  },
  {
    id: "laetum",
    name: "Laetum",
    category: "arma",
    type: "Secundária",
    tags: ["Incarnon", "Steel Path", "Boss", "Zariman"],
    href: "/builds/laetum",
    description: "Secundária Incarnon confiável para alvo resistente, bosses e conteúdo avançado.",
    priorityHint: "Boa prioridade se você quer uma secundária forte para cobrir falhas da primária.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: ["/builds/laetum"],
    recommendedFor: ["boss", "steel-path", "endgame"]
  },
  {
    id: "praedos",
    name: "Praedos",
    category: "arma",
    type: "Melee",
    tags: ["Incarnon", "Mobilidade", "Farm", "Zariman"],
    href: "/builds/praedos",
    description: "Melee Incarnon útil para mobilidade, conforto e missões repetidas.",
    priorityHint: "Boa prioridade quando você quer acelerar farms e melhorar fluidez do loadout.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: ["/builds/praedos"],
    recommendedFor: ["farm", "mobilidade", "geral"]
  },
  {
    id: "dual-toxocyst-incarnon",
    name: "Dual Toxocyst Incarnon",
    category: "arma",
    type: "Secundária",
    tags: ["Incarnon", "Steel Path", "Dano sustentado", "Endgame"],
    href: "/builds/dual-toxocyst-incarnon",
    description: "Secundária de dano sustentado para jogadores que aproveitam o ritmo da arma.",
    priorityHint: "Boa prioridade se você já tem mods de secundária e quer opção endgame consistente.",
    relatedFarms: ["/farm-endo", "/farm-kuva"],
    relatedBuilds: ["/builds/dual-toxocyst-incarnon"],
    recommendedFor: ["dano", "steel-path", "endgame"]
  },
  {
    id: "ceramic-dagger-incarnon",
    name: "Ceramic Dagger Incarnon",
    category: "arma",
    type: "Melee",
    tags: ["Incarnon", "Melee", "Sinergia", "Endgame"],
    href: "/builds/ceramic-dagger-incarnon",
    description: "Melee utilitária para sinergias Incarnon e setups otimizados.",
    priorityHint: "Boa prioridade se você quer explorar sinergias avançadas e já entende melee/status.",
    relatedFarms: ["/farm-endo", "/farm-kuva"],
    relatedBuilds: ["/builds/ceramic-dagger-incarnon"],
    recommendedFor: ["melee", "endgame", "sinergia"]
  },
  {
    id: "glaive-prime",
    name: "Glaive Prime",
    category: "arma",
    type: "Melee",
    tags: ["Melee", "Dano", "Endgame"],
    description: "Melee arremessável forte quando a conta já tem mods e prática com o estilo.",
    priorityHint: "Boa opção futura se você gosta de melee arremessável e quer dano com investimento.",
    relatedFarms: ["/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["melee", "dano", "endgame"]
  },
  {
    id: "phenmor",
    name: "Phenmor",
    category: "arma",
    type: "Primária",
    tags: ["Incarnon", "Zariman", "Dano", "Steel Path"],
    description: "Primária Incarnon de progressão avançada para dano consistente.",
    priorityHint: "Boa alternativa quando você quer outra primária Incarnon além de Felarx e Torid.",
    relatedFarms: ["/farm-creditos", "/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["dano", "steel-path", "zariman"]
  },
  {
    id: "innodem",
    name: "Innodem",
    category: "arma",
    type: "Melee",
    tags: ["Incarnon", "Zariman", "Mobilidade", "Melee"],
    description: "Melee Incarnon com utilidade e mobilidade para jogadores que gostam do estilo.",
    priorityHint: "Boa alternativa se você quer experimentar outra melee Incarnon antes de investir pesado.",
    relatedFarms: ["/farm-endo"],
    relatedBuilds: [],
    recommendedFor: ["melee", "mobilidade", "zariman"]
  },
  {
    id: "mods-galvanized",
    name: "Mods Galvanized",
    category: "sistema",
    type: "Mods",
    tags: ["Steel Path", "Dano", "Arbitrations", "Endo"],
    href: "/steel-path",
    description: "Mods importantes para elevar dano de armas e sustentar builds avançadas.",
    priorityHint: "Alta prioridade se você já entrou no Steel Path ou quer preparar armas endgame.",
    relatedFarms: ["/farm-endo", "/steel-path"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["steel-path", "dano", "endgame"]
  },
  {
    id: "arcanes-primarios",
    name: "Arcanes primários",
    category: "sistema",
    type: "Arcane",
    tags: ["Dano", "Primária", "Steel Path"],
    description: "Arcanes que ajudam primárias a escalar dano e consistência em conteúdo alto.",
    priorityHint: "Boa prioridade quando sua primária já tem mods principais e precisa de escala.",
    relatedFarms: ["/farm-endo", "/steel-path"],
    relatedBuilds: ["/builds/felarx", "/builds/torid-incarnon"],
    recommendedFor: ["dano", "steel-path", "primaria"]
  },
  {
    id: "arcanes-secundarios",
    name: "Arcanes secundários",
    category: "sistema",
    type: "Arcane",
    tags: ["Dano", "Secundária", "Steel Path"],
    description: "Arcanes que deixam secundárias como Laetum e Dual Toxocyst mais consistentes.",
    priorityHint: "Boa prioridade se sua secundária é parte importante do loadout.",
    relatedFarms: ["/farm-endo", "/steel-path"],
    relatedBuilds: ["/builds/laetum", "/builds/dual-toxocyst-incarnon"],
    recommendedFor: ["dano", "secundaria", "steel-path"]
  },
  {
    id: "arcanes-warframe",
    name: "Arcanes de Warframe",
    category: "sistema",
    type: "Arcane",
    tags: ["Sobrevivência", "Dano", "Endgame"],
    description: "Arcanes que ajustam sobrevivência, dano, energia ou conforto do Warframe.",
    priorityHint: "Priorize quando seus mods base já estão prontos e você quer refinar a build.",
    relatedFarms: ["/farm", "/steel-path"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["sobrevivencia", "endgame", "build"]
  },
  {
    id: "catalisador-orokin",
    name: "Catalisador Orokin",
    category: "sistema",
    type: "Recurso",
    tags: ["Armas", "Investimento", "Build"],
    description: "Recurso de investimento para aumentar capacidade de armas importantes.",
    priorityHint: "Use em armas que continuarão úteis, como Felarx, Laetum ou Torid Incarnon.",
    relatedFarms: ["/farm"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["build", "arma", "investimento"]
  },
  {
    id: "reator-orokin",
    name: "Reator Orokin",
    category: "sistema",
    type: "Recurso",
    tags: ["Warframe", "Investimento", "Build"],
    description: "Recurso de investimento para aumentar capacidade de Warframes importantes.",
    priorityHint: "Use em Warframes que resolvem sobrevivência, farm ou conteúdo difícil para sua conta.",
    relatedFarms: ["/farm"],
    relatedBuilds: [],
    recommendedFor: ["warframe", "build", "investimento"]
  },
  {
    id: "forma-suficiente",
    name: "Forma suficiente",
    category: "sistema",
    type: "Recurso",
    tags: ["Build", "Investimento", "Progressão"],
    description: "Reserva de Forma para fechar um Warframe seguro e uma arma principal antes de espalhar investimento.",
    priorityHint: "Se faltar Forma, finalize uma build principal antes de abrir muitas variações.",
    relatedFarms: ["/farm", "/progressao"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["build", "progressao", "steel-path"]
  },
  {
    id: "helminth",
    name: "Helminth",
    category: "sistema",
    type: "Sistema",
    tags: ["Build", "Endgame", "Variação"],
    description: "Sistema que permite personalizar builds com habilidades e ajustes avançados.",
    priorityHint: "Priorize depois de ter base de mods, recursos e Warframes principais mais estáveis.",
    relatedFarms: ["/progressao", "/farm"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["endgame", "build", "variacao"]
  },
  {
    id: "zariman-liberada",
    name: "Zariman liberada",
    category: "sistema",
    type: "Sistema",
    tags: ["Zariman", "Incarnon", "Progressão"],
    description: "Acesso importante para armas Incarnon como Felarx, Laetum e Praedos.",
    priorityHint: "Prioridade alta se você quer armas Incarnon da Zariman e builds avançadas.",
    relatedFarms: ["/progressao", "/incarnon"],
    relatedBuilds: ["/builds/felarx", "/builds/laetum", "/builds/praedos"],
    recommendedFor: ["incarnon", "progressao", "endgame"]
  },
  {
    id: "duviri-liberado",
    name: "Duviri liberado",
    category: "sistema",
    type: "Sistema",
    tags: ["Duviri", "Incarnon", "Circuito"],
    description: "Acesso usado para Circuito, rotação de adaptadores Incarnon e progressão avançada.",
    priorityHint: "Importante se seu objetivo é Torid, Dual Toxocyst, Ceramic Dagger e outros adaptadores.",
    relatedFarms: ["/incarnon", "/progressao"],
    relatedBuilds: ["/builds/torid-incarnon", "/builds/dual-toxocyst-incarnon", "/builds/ceramic-dagger-incarnon"],
    recommendedFor: ["incarnon", "duviri", "endgame"]
  },
  {
    id: "steel-path-liberado",
    name: "Steel Path liberado",
    category: "sistema",
    type: "Sistema",
    tags: ["Steel Path", "Endgame", "Progressão"],
    href: "/steel-path",
    description: "Modo de dificuldade avançada que muda prioridades de dano, sobrevivência e investimento.",
    priorityHint: "Marque quando já tiver acesso; se não, priorize checklist e progressão antes de builds caras.",
    relatedFarms: ["/steel-path", "/farm-endo", "/farm-kuva"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["steel-path", "endgame", "progressao"]
  },
  {
    id: "arbitrations-liberadas",
    name: "Arbitrations liberadas",
    category: "sistema",
    type: "Sistema",
    tags: ["Endo", "Mods", "Progressão"],
    href: "/farm-endo",
    description: "Conteúdo importante para Endo e preparação de mods avançados.",
    priorityHint: "Boa prioridade se você precisa evoluir mods e preparar Galvanized Mods.",
    relatedFarms: ["/farm-endo"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["endo", "mods", "progressao"]
  },
  {
    id: "operador-amp-decente",
    name: "Operador/Amp decente",
    category: "sistema",
    type: "Operador",
    tags: ["Operador", "Amp", "Foco"],
    href: "/melhor-amp-operador-warframe",
    description: "Base de Operador e Amp suficiente para conteúdo que exige dano ou utilidade fora do Warframe.",
    priorityHint: "Importante se você quer melhorar Eidolon, Void Angels, foco e conteúdo de Operador.",
    relatedFarms: ["/farm-foco-warframe"],
    relatedBuilds: [],
    recommendedFor: ["operador", "foco", "amp"]
  },
  {
    id: "escola-operador-principal",
    name: "Escola do Operador principal",
    category: "sistema",
    type: "Operador",
    tags: ["Foco", "Operador", "Escola"],
    href: "/melhor-escola-warframe",
    description: "Escola de foco principal escolhida conforme objetivo: energia, dano, sobrevivência ou suporte.",
    priorityHint: "Escolha uma escola principal antes de espalhar foco em tudo.",
    relatedFarms: ["/farm-foco-warframe"],
    relatedBuilds: [],
    recommendedFor: ["foco", "operador", "progressao"]
  },
  {
    id: "focus-farm-estavel",
    name: "Focus farm estável",
    category: "sistema",
    type: "Foco",
    tags: ["Foco", "Operador", "Farm"],
    href: "/farm-foco-warframe",
    description: "Rotina consistente para evoluir escolas de foco sem trocar método toda hora.",
    priorityHint: "Boa prioridade quando você já tem lente e setup que recebe afinidade de forma confiável.",
    relatedFarms: ["/farm-foco-warframe"],
    relatedBuilds: [],
    recommendedFor: ["foco", "operador", "farm"]
  },
  {
    id: "creditos",
    name: "Créditos",
    category: "farm",
    type: "Recurso",
    tags: ["Créditos", "Economia", "Progressão"],
    href: "/farm-creditos",
    description: "Recurso básico para mods, fabricação, trades e investimento geral.",
    priorityHint: "Priorize se você está travado para evoluir mods, fabricar armas ou montar builds.",
    relatedFarms: ["/farm-creditos"],
    relatedBuilds: [],
    recommendedFor: ["economia", "progressao", "build"]
  },
  {
    id: "endo",
    name: "Endo",
    category: "farm",
    type: "Recurso",
    tags: ["Endo", "Mods", "Build"],
    href: "/farm-endo",
    description: "Recurso essencial para evoluir mods e transformar builds incompletas em setups reais.",
    priorityHint: "Alta prioridade quando seus mods principais ainda estão longe do nível adequado.",
    relatedFarms: ["/farm-endo"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["mods", "build", "progressao"]
  },
  {
    id: "kuva",
    name: "Kuva",
    category: "farm",
    type: "Recurso",
    tags: ["Kuva", "Riven", "Endgame"],
    href: "/farm-kuva",
    description: "Recurso usado principalmente em Rivens e otimizações avançadas.",
    priorityHint: "Priorize só depois de ter base de mods e builds; use limite claro para rolagens.",
    relatedFarms: ["/farm-kuva"],
    relatedBuilds: ["/builds"],
    recommendedFor: ["riven", "endgame", "otimizacao"]
  },
  {
    id: "oxio",
    name: "Oxio",
    category: "farm",
    type: "Recurso",
    tags: ["Corpus", "Fabricação", "Recursos"],
    href: "/farm-oxio",
    description: "Recurso usado em fabricação e progressão, melhor farmado com rotas Corpus consistentes.",
    priorityHint: "Priorize quando uma arma, Warframe ou equipamento específico travar por falta de Oxio.",
    relatedFarms: ["/farm-oxio"],
    relatedBuilds: [],
    recommendedFor: ["recursos", "fabricacao"]
  },
  {
    id: "criotico",
    name: "Criótico",
    category: "farm",
    type: "Recurso",
    tags: ["Escavação", "Fabricação", "Recursos"],
    href: "/farm-criotico",
    description: "Recurso de escavação que exige defesa de objetivo e repetição segura.",
    priorityHint: "Priorize quando precisar fabricar itens específicos e já tiver setup para proteger escavadores.",
    relatedFarms: ["/farm-criotico"],
    relatedBuilds: [],
    recommendedFor: ["recursos", "escavacao"]
  },
  {
    id: "telurio",
    name: "Telúrio",
    category: "farm",
    type: "Recurso",
    tags: ["Recurso raro", "Fabricação"],
    href: "/farm-telurio",
    description: "Recurso raro que deve ser farmado em sessões planejadas e rotas confortáveis.",
    priorityHint: "Priorize quando o item atual exigir Telúrio; evite farmar sem objetivo claro.",
    relatedFarms: ["/farm-telurio"],
    relatedBuilds: [],
    recommendedFor: ["recursos", "raro"]
  },
  {
    id: "cristais-arcanos",
    name: "Cristais Arcanos",
    category: "farm",
    type: "Recurso",
    tags: ["Arcanes", "Endgame", "Farm"],
    description: "Recurso ligado a rotas e objetivos de Arcanes, dependendo do progresso da conta.",
    priorityHint: "Priorize quando souber qual Arcane quer melhorar e qual rota sua conta consegue repetir.",
    relatedFarms: ["/farm"],
    relatedBuilds: [],
    recommendedFor: ["arcanes", "endgame", "farm"]
  },
  {
    id: "foco",
    name: "Foco",
    category: "farm",
    type: "Recurso",
    tags: ["Foco", "Operador", "Escolas"],
    href: "/farm-foco-warframe",
    description: "Pontos para evoluir escolas do Operador e melhorar utilidade fora do Warframe.",
    priorityHint: "Priorize quando sua escola principal e Amp já têm objetivo claro.",
    relatedFarms: ["/farm-foco-warframe"],
    relatedBuilds: [],
    recommendedFor: ["foco", "operador", "progressao"]
  }
];

export const accountItemMap = new Map(accountItems.map(item => [item.id, item]));
export const accountItemsByName = new Map(accountItems.map(item => [normalizeAccountName(item.name), item]));

export function findAccountItemByName(name: string) {
  return accountItemsByName.get(normalizeAccountName(name));
}

export function normalizeAccountName(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
