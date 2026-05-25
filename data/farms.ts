export interface FarmGuide {
  slug: string;
  resource: string;
  title: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  bestPlace: string;
  beginnerAlternative: string;
  recommendedWarframes: string[];
  quickTips: string[];
  avoid: string[];
  relatedLinks: Array<{
    title: string;
    description: string;
    href: string;
  }>;
}

const updateWarning = "Eventos, boosters, mudanças de drop, updates, hotfixes, Arcanes, Rivens, Helminth e balanceamentos podem mudar prioridades de farm e loadout. Use este guia como base prática e revise quando o jogo receber mudanças relevantes.";

export const farmGuides: FarmGuide[] = [
  {
    slug: "farm-creditos",
    resource: "Créditos",
    title: "Farm de Créditos Warframe",
    description: "Guia prático para organizar créditos por estágio da conta: iniciante com rota segura, intermediário com repetição confortável e endgame com loadout dedicado.",
    seoTitle: "Farm de Créditos Warframe — Melhores Métodos",
    seoDescription: "Guia de farm de créditos em Warframe com método iniciante, intermediário, endgame, loadouts e erros comuns.",
    bestPlace: "O melhor método é a rota de créditos que sua conta completa rápido e sem morrer. No intermediário, foque em repetição; no endgame, use loadout dedicado e booster quando a sessão justificar.",
    beginnerAlternative: "Iniciante: comece por missões seguras e repetíveis. O objetivo inicial é juntar créditos sem gastar Forma demais em uma build feita só para farm.",
    recommendedWarframes: ["Revenant Prime", "Dante", "Wisp Prime", "Protea Prime"],
    quickTips: ["Iniciante: priorize sobreviver e completar a missão.", "Intermediário: leve uma arma de clear e outra para alvo pesado.", "Endgame: use booster quando for fazer uma sessão longa.", "Revise a rota depois de updates, hotfixes e mudanças de meta."],
    avoid: ["Gastar Forma demais cedo.", "Farmar com build frágil.", "Trocar de método a cada tentativa.", "Ignorar mobilidade e extração."],
    relatedLinks: [
      { title: "Loadouts", description: "Salve uma combinação dedicada para repetir o farm.", href: "/loadouts" },
      { title: "Build Felarx", description: "Use dano em alvo pesado quando a rota tiver inimigos resistentes.", href: "/builds/felarx" },
      { title: "Farm geral", description: "Veja outros recursos e prioridades de farm.", href: "/farm" }
    ]
  },
  {
    slug: "farm-endo",
    resource: "Endo",
    title: "Farm de Endo Warframe",
    description: "Métodos seguros para juntar Endo e evoluir mods sem travar a conta: primeiro mods base, depois otimizações e só então variações caras.",
    seoTitle: "Farm de Endo Warframe — Melhores Métodos para Evoluir Mods",
    seoDescription: "Guia de farm de Endo em Warframe com alternativas para iniciantes, Warframes recomendados, dicas rápidas e erros comuns.",
    bestPlace: "Priorize atividades com boa recompensa e que você consegue repetir sem falhar. No intermediário, organize sessões estáveis; no endgame, combine farm de Endo com objetivos secundários úteis.",
    beginnerAlternative: "Iniciante: converta mods duplicados, faça missões confortáveis e evite upar tudo ao mesmo tempo. Avance quando sua build tiver dano e sobrevivência.",
    recommendedWarframes: ["Dante", "Revenant Prime", "Wisp Prime", "Khora Prime"],
    quickTips: ["Iniciante: priorize mods base usados em várias builds.", "Intermediário: não upe mod caro sem saber se ele entra no loadout.", "Endgame: reserve Endo para Primed, Galvanized e variações realmente usadas.", "Revise prioridades após mudanças de Arcanes, Rivens e balanceamentos."],
    avoid: ["Evoluir mods aleatórios.", "Entrar em farm difícil sem sobrevivência.", "Ignorar custo de crédito ao upar mods.", "Gastar Endo em variações que você ainda não testou."],
    relatedLinks: [
      { title: "Builds", description: "Veja quais mods entram nas builds principais.", href: "/builds" },
      { title: "Melhores Warframes", description: "Escolha uma base segura para farms longos.", href: "/melhores-warframes" },
      { title: "Tier List", description: "Priorize recursos nos itens que mais valem investimento.", href: "/tier-list" }
    ]
  },
  {
    slug: "farm-kuva",
    resource: "Kuva",
    title: "Farm de Kuva Warframe",
    description: "Guia para organizar farm de Kuva sem apostar tudo em Riven antes da conta ter mods, Arcanes e armas consistentes.",
    seoTitle: "Farm de Kuva Warframe — Melhores Rotas e Dicas",
    seoDescription: "Guia de farm de Kuva em Warframe com método iniciante, Warframes recomendados, dicas e o que evitar antes de rolar Rivens.",
    bestPlace: "Use rotas de Kuva quando você já tem dano e sobrevivência suficientes para repetir missões sem travar em Eximus ou objetivos. No endgame, defina limites para não gastar tudo em rolagens pequenas.",
    beginnerAlternative: "Iniciante: antes de gastar muito Kuva em Riven, invista em mods base, Arcanes e armas consistentes. Kuva rende mais quando a conta já tem uma base forte.",
    recommendedWarframes: ["Revenant Prime", "Dante", "Protea Prime", "Wisp Prime"],
    quickTips: ["Iniciante: não dependa de Riven para fazer a arma funcionar.", "Intermediário: defina o Riven que realmente vale investimento.", "Endgame: pare de rolar quando a melhoria não mudar sua build na prática.", "Revise após hotfixes e balanceamentos de armas."],
    avoid: ["Gastar Kuva em arma que você não usa.", "Rolar Riven antes da build base estar pronta.", "Ignorar custo de tempo.", "Farmar sem meta clara."],
    relatedLinks: [
      { title: "Melhores armas primárias", description: "Veja quais armas merecem investimento alto.", href: "/melhores-armas-primarias" },
      { title: "Build Laetum", description: "Uma secundária forte reduz dependência de Riven.", href: "/builds/laetum" },
      { title: "Meta atual", description: "Compare prioridades antes de gastar recursos raros.", href: "/meta-atual" }
    ]
  },
  {
    slug: "farm-oxio",
    resource: "Oxio",
    title: "Farm de Oxio Warframe",
    description: "Como farmar Oxio com rotas repetíveis, Warframes confortáveis e foco em missões Corpus que sua conta consegue completar com bom ritmo.",
    seoTitle: "Farm de Oxio Warframe — Melhores Métodos para Conseguir Oxium",
    seoDescription: "Guia de farm de Oxio em Warframe com lugar recomendado, alternativa iniciante, Warframes úteis, dicas e erros comuns.",
    bestPlace: "Escolha missões Corpus com boa densidade e ritmo rápido. Intermediários devem priorizar clear; no endgame, salve um loadout próprio para reduzir tempo de preparação.",
    beginnerAlternative: "Iniciante: faça missões Corpus mais seguras e use uma arma que limpe grupos sem setup caro. A consistência vale mais que uma rota difícil.",
    recommendedWarframes: ["Saryn Prime", "Protea Prime", "Wisp Prime", "Dante"],
    quickTips: ["Iniciante: escolha uma missão Corpus que você termina sem morrer.", "Intermediário: use dano em área para acelerar grupos.", "Endgame: salve um loadout de farm Corpus.", "Revise a rota após eventos, boosters ou mudanças de drop."],
    avoid: ["Farmar em missão com baixa densidade.", "Ignorar sobrevivência contra Corpus.", "Sair trocando de rota antes de estabilizar.", "Usar arma lenta para clear."],
    relatedLinks: [
      { title: "Farm", description: "Veja outros recursos importantes.", href: "/farm" },
      { title: "Melhores Warframes", description: "Escolha Warframes de clear e conforto.", href: "/melhores-warframes" },
      { title: "Loadouts", description: "Salve uma combinação para Corpus.", href: "/loadouts" }
    ]
  },
  {
    slug: "farm-criotico",
    resource: "Criótico",
    title: "Farm de Criótico Warframe",
    description: "Guia de Criótico para escavação com foco em defesa de objetivo, energia e repetição estável por estágio da conta.",
    seoTitle: "Farm de Criótico Warframe — Guia de Escavação e Recursos",
    seoDescription: "Guia de farm de Criótico em Warframe com melhores práticas para escavação, Warframes recomendados e erros a evitar.",
    bestPlace: "Escavação é o caminho natural para Criótico. Intermediários devem manter extratores ativos com segurança; no endgame, abra mais objetivos apenas se a equipe sustentar defesa e energia.",
    beginnerAlternative: "Iniciante: comece em escavações de nível confortável. Proteja o extrator antes de tentar acelerar vários objetivos ao mesmo tempo.",
    recommendedWarframes: ["Wisp Prime", "Protea Prime", "Dante", "Citrine"],
    quickTips: ["Iniciante: proteja extratores antes de buscar velocidade.", "Intermediário: leve controle ou suporte defensivo.", "Endgame: otimize múltiplos extratores apenas se a equipe segura.", "Revise builds defensivas após mudanças de Helminth e Arcanes."],
    avoid: ["Ignorar o objetivo.", "Ficar sem energia de célula.", "Abrir muitos extratores ao mesmo tempo.", "Usar build sem defesa de área."],
    relatedLinks: [
      { title: "Steel Path", description: "Monte uma base segura para objetivos frágeis.", href: "/steel-path" },
      { title: "Melhores Warframes", description: "Veja suportes e defensores úteis.", href: "/melhores-warframes" },
      { title: "Builds", description: "Use armas consistentes contra inimigos resistentes.", href: "/builds" }
    ]
  },
  {
    slug: "farm-telurio",
    resource: "Telúrio",
    title: "Farm de Telúrio Warframe",
    description: "Guia de Telúrio com foco em missões adequadas, segurança e repetição sem prometer drop exato ou números frágeis.",
    seoTitle: "Farm de Telúrio Warframe — Melhores Métodos e Dicas",
    seoDescription: "Guia de farm de Telúrio em Warframe com lugar recomendado, alternativa iniciante, Warframes úteis, dicas rápidas e erros comuns.",
    bestPlace: "Use missões em que Telúrio pode aparecer e que sua conta completa com consistência. No intermediário, combine o farm com outro objetivo; no endgame, use loadout rápido sem depender de promessa de drop exato.",
    beginnerAlternative: "Iniciante: escolha uma missão confortável e repita com um Warframe seguro. A prioridade inicial é completar runs sem morrer e sem perder tempo procurando método perfeito.",
    recommendedWarframes: ["Revenant Prime", "Wisp Prime", "Dante", "Protea Prime"],
    quickTips: ["Iniciante: aceite sessões curtas e consistentes.", "Intermediário: leve loot radar quando fizer sentido.", "Endgame: combine Telúrio com outro objetivo útil.", "Revise o método após updates, eventos e mudanças de drop."],
    avoid: ["Prometer drop fixo.", "Usar build frágil.", "Fazer rota que você odeia repetir.", "Ignorar outros recursos ganhos no caminho."],
    relatedLinks: [
      { title: "Farm geral", description: "Organize recursos por prioridade.", href: "/farm" },
      { title: "Loadouts", description: "Salve uma combinação para farms raros.", href: "/loadouts" },
      { title: "Tier List", description: "Escolha equipamentos confiáveis.", href: "/tier-list" }
    ]
  }
];

export function getFarmGuide(slug: string) {
  return farmGuides.find(guide => guide.slug === slug);
}

export { updateWarning as farmUpdateWarning };
