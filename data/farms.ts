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
  detailSections?: Array<{
    title: string;
    description: string;
    items?: string[];
  }>;
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
    bestPlace: "Para muitos jogadores, Index é o melhor método geral porque é repetível e direto. No endgame, Profit-Taker pode ser excelente quando você já tem acesso, sobrevivência, dano e um setup adequado. Use a rota que sua conta completa rápido e sem falhar.",
    beginnerAlternative: "Iniciante: comece por Dark Sectors, missões rápidas e objetivos que você termina com segurança. O objetivo inicial é juntar créditos sem gastar Forma demais em uma build feita só para farm.",
    recommendedWarframes: ["Rhino", "Revenant Prime", "Dante", "Wisp Prime", "Protea Prime"],
    quickTips: ["Iniciante: priorize sobreviver e completar a missão sem gastar recursos raros.", "Intermediário: leve uma arma de clear e outra para alvo pesado.", "Endgame: use booster quando for fazer uma sessão longa.", "Revise a rota depois de updates, hotfixes e mudanças de meta."],
    avoid: ["Farmar créditos em missões lentas sem bônus.", "Usar setup fraco em conteúdo que exige investimento.", "Gastar Forma demais cedo.", "Trocar de método o tempo todo sem estabilizar uma rota.", "Ignorar booster em sessões longas."],
    detailSections: [
      {
        title: "Qual método escolher?",
        description: "Escolha pelo estágio da conta e pelo setup disponível, não por promessa de ganho máximo.",
        items: ["Iniciante: Dark Sectors e missões rápidas.", "Intermediário: Index quando sua conta já sustenta a repetição.", "Endgame: Profit-Taker se tiver acesso e setup adequado.", "Casual: farmar créditos enquanto completa outros objetivos úteis."]
      },
      {
        title: "Melhor método geral",
        description: "Index é uma escolha segura para muitos jogadores por ser direto e repetível. Profit-Taker pode superar outras rotas no endgame se você já tem acesso e loadout preparado.",
        items: ["Use o método que você conclui sem falhar.", "Não trate uma rota endgame como melhor se sua conta ainda demora demais nela.", "Créditos rendem mais quando a sessão é planejada, com loadout pronto e objetivo claro."]
      },
      {
        title: "Método para iniciante",
        description: "Dark Sectors e missões rápidas com boa recompensa de créditos são opções simples enquanto sua conta ainda não tem build cara.",
        items: ["Use Warframe resistente.", "Evite investir Forma só para farmar crédito cedo.", "Prefira consistência a promessa de velocidade."]
      },
      {
        title: "Método intermediário",
        description: "Quando sua conta já tem dano e defesa, o foco passa a ser repetir rotas com menos tempo morto entre missão, extração e reinício.",
        items: ["Tenha uma arma de clear e uma resposta para alvo pesado.", "Salve um loadout de créditos.", "Ajuste elemento conforme inimigos da rota."]
      },
      {
        title: "Método endgame",
        description: "Profit-Taker e setups dedicados passam a fazer sentido quando você já tem acesso, Arcanes, sobrevivência e dano suficientes para manter ritmo.",
        items: ["Use booster se a sessão for longa.", "Leve build validada na sua conta, não uma configuração experimental.", "Revise a rota após hotfixes, Arcanes, Rivens e balanceamentos."]
      },
      {
        title: "Armas recomendadas",
        description: "Use armas que resolvem o problema da rota: clear para grupos, alvo pesado para inimigos resistentes e uma opção reserva caso a missão aperte.",
        items: ["Torid Incarnon para clear quando disponível.", "Felarx para alvo pesado e bosses.", "Laetum como secundária confiável.", "Arma confortável de progressão se você ainda não tem Incarnon."]
      },
      {
        title: "Booster vale a pena?",
        description: "Booster vale mais quando você já tem tempo para uma sessão longa e uma rota estável. Se você ainda está testando setup, estabilize primeiro.",
        items: ["Use booster quando for repetir a mesma rota várias vezes.", "Evite ativar booster para sessões curtas sem planejamento.", "Combine crédito com outros objetivos quando fizer sentido."]
      },
      {
        title: "Resumo final",
        description: "Comece seguro, estabilize uma rota e só depois otimize. Créditos não exigem a build mais cara do jogo, exigem repetição consistente.",
        items: ["Primeiro sobrevivência.", "Depois dano e clear.", "Depois mobilidade.", "Por fim, booster e otimização de tempo."]
      }
    ],
    relatedLinks: [
      { title: "Farm geral", description: "Veja outros recursos e prioridades de farm.", href: "/farm" },
      { title: "Loadouts", description: "Salve uma combinação dedicada para repetir o farm.", href: "/loadouts" },
      { title: "Comece Aqui", description: "Escolha a próxima prioridade conforme estágio da conta.", href: "/comece-aqui" },
      { title: "Progressão", description: "Veja quando créditos entram no roadmap da conta.", href: "/progressao" },
      { title: "Steel Path", description: "Prepare uma base segura antes de rotas exigentes.", href: "/steel-path" },
      { title: "Build Felarx", description: "Use dano em alvo pesado quando a rota tiver inimigos resistentes.", href: "/builds/felarx" },
      { title: "Build Torid Incarnon", description: "Use clear consistente em missões com alta densidade.", href: "/builds/torid-incarnon" }
    ]
  },
  {
    slug: "farm-endo",
    resource: "Endo",
    title: "Farm de Endo Warframe",
    description: "Métodos seguros para juntar Endo e evoluir mods sem travar a conta: primeiro mods base, depois otimizações e só então variações caras.",
    seoTitle: "Farm de Endo Warframe — Melhores Métodos",
    seoDescription: "Guia de farm de Endo em Warframe com método iniciante, intermediário, endgame, Arbitrations, Ayatan Sculptures e erros comuns.",
    bestPlace: "Endo costuma ser farmado de forma eficiente em atividades específicas como Arbitrations, dissolução de mods duplicados, Ayatan Sculptures e missões adequadas ao progresso do jogador. Priorize uma rota que sua conta conclui sem falhar.",
    beginnerAlternative: "Iniciante: dissolva mods duplicados, procure Ayatan Sculptures, faça missões confortáveis e evite upar tudo ao mesmo tempo. Avance quando sua build tiver dano e sobrevivência.",
    recommendedWarframes: ["Dante", "Revenant Prime", "Wisp Prime", "Khora Prime"],
    quickTips: ["Iniciante: priorize mods base usados em várias builds.", "Intermediário: Arbitrations e Ayatan ficam melhores quando sua conta já sustenta a repetição.", "Endgame: reserve Endo para Primed, Galvanized e variações realmente usadas.", "Revise prioridades após mudanças de Arcanes, Rivens e balanceamentos."],
    avoid: ["Upar muitos mods ao mesmo tempo.", "Gastar Endo em mod pouco usado.", "Entrar em farm difícil sem sobrevivência.", "Ignorar mods essenciais como dano, multishot, sobrevivência e utilidade.", "Ignorar custo de créditos ao upar mods."],
    detailSections: [
      {
        title: "Qual método escolher?",
        description: "Escolha pelo que sua conta libera e repete com segurança.",
        items: ["Iniciante: mods duplicados, Ayatan Sculptures e missões confortáveis.", "Intermediário: Arbitrations quando liberadas e rotas consistentes.", "Endgame: otimizar Arbitrations e farmar Endo junto de outros objetivos úteis.", "Casual: juntar Endo enquanto melhora mods essenciais, sem gastar tudo em luxo."]
      },
      {
        title: "Método para iniciante",
        description: "O foco inicial é transformar mods duplicados e Ayatan em progresso real sem gastar Endo em tudo ao mesmo tempo.",
        items: ["Dissolva mods duplicados.", "Procure Ayatan Sculptures quando aparecerem.", "Faça missões que também tragam créditos e mods.", "Evite gastar Endo em mods que serão substituídos cedo."]
      },
      {
        title: "Método intermediário",
        description: "Quando a conta já tem dano e defesa, Arbitrations e rotas repetíveis começam a render melhor.",
        items: ["Libere Arbitrations quando sua conta estiver pronta.", "Farm Ayatan de forma consistente.", "Priorize upar mods essenciais antes de mods de luxo.", "Salve um loadout resistente para missões repetidas."]
      },
      {
        title: "Método endgame",
        description: "No endgame, o ganho vem de estabilidade, velocidade e escolha correta de onde gastar Endo.",
        items: ["Otimize Arbitrations com setup rápido e resistente.", "Farm Endo enquanto completa outros objetivos.", "Evite gastar Endo em variações que não entram nas suas builds.", "Revise após updates e mudanças de meta."]
      },
      {
        title: "Armas recomendadas",
        description: "Use armas que limpam grupos e resolvem inimigos resistentes sem depender de execução perfeita.",
        items: ["Torid Incarnon para grupos quando disponível.", "Felarx ou Laetum para alvo pesado.", "Arma de progressão confortável se ainda faltar Incarnon.", "Melee de mobilidade se a rota exigir deslocamento."]
      },
      {
        title: "Booster e recursos úteis",
        description: "Booster ajuda mais quando você já tem rota estável e tempo para uma sessão longa.",
        items: ["Planeje sessão antes de gastar booster.", "Organize créditos junto do Endo, porque upar mods também custa créditos.", "Use loadouts salvos para repetir sem remontar."]
      }
    ],
    relatedLinks: [
      { title: "Farm geral", description: "Compare Endo com créditos, Kuva e recursos importantes.", href: "/farm" },
      { title: "Comece Aqui", description: "Veja quando priorizar Endo por estágio da conta.", href: "/comece-aqui" },
      { title: "Progressão", description: "Entenda onde Endo entra no roadmap da conta.", href: "/progressao" },
      { title: "Loadouts", description: "Salve um setup resistente para farms repetidos.", href: "/loadouts" },
      { title: "Steel Path", description: "Prepare sobrevivência e dano antes de rotas exigentes.", href: "/steel-path" },
      { title: "Builds", description: "Veja quais mods entram nas builds principais.", href: "/builds" },
      { title: "Tier List", description: "Priorize recursos nos itens que mais valem investimento.", href: "/tier-list" }
    ]
  },
  {
    slug: "farm-kuva",
    resource: "Kuva",
    title: "Farm de Kuva Warframe",
    description: "Guia para organizar farm de Kuva sem apostar tudo em Riven antes da conta ter mods, Arcanes e armas consistentes.",
    seoTitle: "Farm de Kuva Warframe — Guia por Estágio",
    seoDescription: "Guia de farm de Kuva em Warframe com Kuva Survival, Siphon, Flood, Steel Path, métodos por estágio e erros comuns.",
    bestPlace: "Kuva pode ser farmado por métodos como Kuva Survival, Kuva Siphon/Flood, Requiem, Steel Path e recompensas específicas, dependendo do progresso do jogador. Use a rota que sua conta repete com segurança.",
    beginnerAlternative: "Iniciante/intermediário: faça Kuva Siphon e Kuva Flood quando disponíveis, priorize desbloquear conteúdo necessário e evite gastar Kuva em Riven sem planejamento.",
    recommendedWarframes: ["Revenant Prime", "Dante", "Protea Prime", "Wisp Prime"],
    quickTips: ["Iniciante: não dependa de Riven para fazer a arma funcionar.", "Intermediário: defina o Riven que realmente vale investimento.", "Endgame: Steel Path e métodos mais eficientes fazem sentido quando o setup já está pronto.", "Revise após hotfixes e balanceamentos de armas."],
    avoid: ["Gastar Kuva tentando rolar Riven sem limite.", "Gastar Kuva em arma que você não usa.", "Rolar Riven antes da build base estar pronta.", "Farmar sem booster quando a sessão é longa e planejada.", "Usar setup lento em missões repetitivas."],
    detailSections: [
      {
        title: "Qual método escolher?",
        description: "Kuva vale mais quando o farm tem objetivo claro e limite de gasto.",
        items: ["Iniciante: desbloquear conteúdo e evitar depender de Riven.", "Intermediário: Kuva Siphon/Flood quando disponíveis.", "Endgame: Steel Path, Kuva Survival e métodos eficientes conforme disponibilidade.", "Casual: juntar Kuva enquanto completa outros objetivos."]
      },
      {
        title: "Método para iniciante",
        description: "Antes de buscar rolagens perfeitas, fortaleça mods base, Arcanes e armas consistentes.",
        items: ["Não trate Riven como requisito para a arma funcionar.", "Priorize desbloquear rotas e missões relacionadas.", "Use Kuva com limite planejado."]
      },
      {
        title: "Método intermediário",
        description: "Kuva Siphon e Kuva Flood entram quando você já consegue repetir missões com estabilidade.",
        items: ["Leve Warframe resistente.", "Use arma de clear e resposta para alvo pesado.", "Combine Kuva com progresso de Requiem quando fizer sentido."]
      },
      {
        title: "Método endgame",
        description: "No endgame, otimize Steel Path e rotas mais eficientes conforme disponibilidade e objetivo da conta.",
        items: ["Farmar Kuva junto com outros objetivos reduz sensação de repetição.", "Use setup resistente e com boa limpeza.", "Defina quando parar de rolar para não queimar todo o recurso."]
      },
      {
        title: "Armas recomendadas",
        description: "Use armas consistentes, porque farm de Kuva costuma envolver repetição e inimigos que punem setup fraco.",
        items: ["Torid Incarnon para clear quando disponível.", "Felarx ou Laetum para alvo pesado.", "Praedos para mobilidade se a missão tiver deslocamento.", "Arma confortável da sua conta se ainda faltar Incarnon."]
      },
      {
        title: "Booster e recursos úteis",
        description: "Booster vale mais quando a sessão é longa, planejada e a rota já está estabilizada.",
        items: ["Evite ativar booster só para testar rota.", "Salve loadout de Kuva.", "Revise o valor do Riven antes de gastar muitas rolagens."]
      }
    ],
    relatedLinks: [
      { title: "Farm geral", description: "Compare Kuva com Endo, créditos e recursos importantes.", href: "/farm" },
      { title: "Comece Aqui", description: "Veja quando Kuva começa a ser prioridade real.", href: "/comece-aqui" },
      { title: "Progressão", description: "Entenda onde Rivens e Kuva entram no roadmap.", href: "/progressao" },
      { title: "Loadouts", description: "Salve uma combinação para repetir rotas de Kuva.", href: "/loadouts" },
      { title: "Steel Path", description: "Prepare uma base segura para métodos mais exigentes.", href: "/steel-path" },
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
