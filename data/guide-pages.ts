export interface GuidePageCard {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export interface GuidePageContent {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  sections: Array<{
    title: string;
    description: string;
    cards: GuidePageCard[];
  }>;
  links: GuidePageCard[];
}

export const guidePages: Record<string, GuidePageContent> = {
  "farm-creditos": {
    slug: "farm-creditos",
    title: "Farm de créditos no Warframe",
    description: "Guia prático para farmar créditos no Warframe com métodos por estágio da conta, loadouts recomendados, erros comuns e ordem de prioridade.",
    eyebrow: "Farm",
    sections: [
      {
        title: "Melhor método para iniciantes",
        description: "No começo, escolha missões que você completa sem morrer e sem depender de setup caro.",
        cards: [
          { title: "Priorize consistência", description: "Vale mais repetir uma missão segura do que forçar um farm difícil que falha ou demora demais.", tags: ["Iniciante", "Segurança"] },
          { title: "Use armas simples", description: "Leve uma arma que mate grupos comuns sem exigir mods raros, Riven ou rotação complexa.", href: "/melhores-armas-primarias", tags: ["Dano"] },
          { title: "Não gaste demais cedo", description: "Evite colocar muitas Formas só para créditos básicos; primeiro estabilize sua conta.", tags: ["Recursos"] }
        ]
      },
      {
        title: "Melhor método intermediário",
        description: "Quando sua conta já segura missões mais longas, o foco passa a ser repetição com conforto.",
        cards: [
          { title: "Clear rápido", description: "Use Warframes e armas que limpam grupos com pouca preparação para reduzir tempo morto entre objetivos.", href: "/tier-list", tags: ["Clear"] },
          { title: "Sobrevivência estável", description: "Se você precisa parar para se recuperar toda hora, troque dano máximo por segurança e energia.", href: "/melhores-warframes", tags: ["Conforto"] },
          { title: "Loadout salvo", description: "Separe um loadout só para créditos e notas de ajustes para não remontar tudo a cada sessão.", href: "/loadouts", tags: ["Organização"] }
        ]
      },
      {
        title: "Melhor método endgame",
        description: "No endgame, crédito vem melhor quando a rota combina dano alto, mobilidade e pouca variação de execução.",
        cards: [
          { title: "Arma para alvo pesado", description: "Tenha uma opção confiável contra Eximus, bosses ou inimigos resistentes que atrasam a missão.", href: "/builds/felarx", tags: ["Bosses"] },
          { title: "Mobilidade conta", description: "Praedos e outras ferramentas de deslocamento ajudam quando a rota exige muita movimentação.", href: "/builds/praedos", tags: ["Mobilidade"] },
          { title: "Invista quando virar rotina", description: "Catalisador, Forma e Arcanes fazem mais sentido se você realmente repete esse farm com frequência.", href: "/incarnon", tags: ["Endgame"] }
        ]
      },
      {
        title: "Loadouts recomendados",
        description: "Separe a função de cada slot para não depender de uma única peça resolver tudo.",
        cards: [
          { title: "Warframe seguro", description: "Escolha algo que não morra facilmente e mantenha energia, defesa ou controle da missão.", href: "/melhores-warframes", tags: ["Warframe"] },
          { title: "Arma de clear", description: "Leve uma opção para limpar grupos quando a missão tiver muita densidade de inimigos.", href: "/melhores-armas-primarias", tags: ["Clear"] },
          { title: "Arma de alvo pesado", description: "Tenha dano confiável contra Eximus, bosses ou inimigos resistentes que atrasam a rota.", href: "/builds/felarx", tags: ["Dano"] },
          { title: "Mobilidade", description: "Use melee, foco em parkour ou ferramentas de deslocamento quando a rota exigir movimento constante.", href: "/builds/praedos", tags: ["Tempo"] }
        ]
      },
      {
        title: "Erros comuns",
        description: "Pequenas decisões ruins tornam o farm mais lento mesmo quando a build parece forte no papel.",
        cards: [
          { title: "Gastar Forma demais cedo", description: "Evite fechar uma build cara antes de confirmar que o método funciona bem para sua conta.", tags: ["Forma"] },
          { title: "Usar build frágil", description: "Dano alto não compensa se você precisa parar toda hora para se recuperar ou reviver.", tags: ["Sobrevivência"] },
          { title: "Ignorar booster", description: "Quando for dedicar uma sessão longa, confira se booster faz sentido antes de começar.", tags: ["Planejamento"] },
          { title: "Farmar sem objetivo", description: "Defina o que você quer comprar ou melhorar para evitar repetir missões sem direção.", tags: ["Foco"] },
          { title: "Trocar de método o tempo todo", description: "Teste uma rota por tempo suficiente antes de concluir que ela não funciona.", tags: ["Rotina"] }
        ]
      },
      {
        title: "Ordem prática de prioridade",
        description: "Otimize o farm em camadas: primeiro evite falhas, depois reduza o tempo por missão.",
        cards: [
          { title: "Primeiro garantir sobrevivência", description: "Uma rota segura vale mais que uma rota teoricamente rápida que falha ou exige atenção demais.", tags: ["1"] },
          { title: "Depois dano em área", description: "Quando você já não morre, acelere o clear para reduzir inimigos acumulados e objetivos parados.", href: "/melhores-armas-primarias", tags: ["2"] },
          { title: "Depois mobilidade", description: "Melhore deslocamento quando a maior perda de tempo estiver entre objetivos, extrações ou salas.", href: "/builds/praedos", tags: ["3"] },
          { title: "Depois otimizar tempo", description: "Só refine detalhes depois que o loadout já estiver confortável e repetível.", href: "/loadouts", tags: ["4"] }
        ]
      }
    ],
    links: [
      { title: "Melhores Warframes", description: "Escolha uma base segura para farms longos.", href: "/melhores-warframes" },
      { title: "Praedos", description: "Guia de melee utilitária para mobilidade.", href: "/builds/praedos" },
      { title: "Loadouts", description: "Salve combinações para repetir farms com mais consistência.", href: "/loadouts" }
    ]
  },
  "steel-path": {
    slug: "steel-path",
    title: "Steel Path no Warframe",
    description: "Checklist para entrar no Steel Path com segurança: sobreviver, causar dano consistente, lidar com Eximus e preparar builds sem gastar recursos à toa.",
    eyebrow: "Endgame",
    sections: [
      {
        title: "O que é Steel Path",
        description: "Steel Path aumenta a exigência de dano, sobrevivência e consistência. Não é só bater mais forte: o loadout precisa sustentar a missão inteira.",
        cards: [
          { title: "Mais resistência inimiga", description: "Prepare dano, status, elementos e controle. Uma arma confortável no mapa normal pode ficar lenta aqui.", href: "/tier-list", tags: ["Dano"] },
          { title: "Mais punição por erro", description: "Warframe frágil, energia instável ou build sem sustain tornam missões simples bem mais longas.", href: "/melhores-warframes", tags: ["Sobrevivência"] },
          { title: "Consistência vale mais", description: "O melhor setup é aquele que você repete sem morrer, sem ficar sem munição e sem travar em Eximus.", href: "/loadouts", tags: ["Loadout"] }
        ]
      },
      {
        title: "Requisitos antes de entrar",
        description: "Não precisa ter tudo perfeito, mas alguns pontos reduzem muito a frustração.",
        cards: [
          { title: "Warframe confiável", description: "Tenha defesa, escudo, redução de dano, overguard, invisibilidade, controle ou outro plano claro de sobrevivência.", href: "/melhores-warframes", tags: ["Warframe"] },
          { title: "Arma principal forte", description: "Leve uma arma capaz de matar grupos ou uma resposta para alvo pesado. Idealmente, use os dois papéis no loadout.", href: "/melhores-armas-primarias", tags: ["Armas"] },
          { title: "Mods básicos upados", description: "Dano, multishot, elemental, crítico/status e sobrevivência precisam estar em um nível minimamente funcional.", href: "/builds", tags: ["Mods"] }
        ]
      },
      {
        title: "Checklist mínimo",
        description: "Use este checklist antes de começar missões longas ou nós mais difíceis.",
        cards: [
          { title: "Sobrevivência confiável", description: "Um Warframe que não dependa de sorte para ficar vivo.", tags: ["1"] },
          { title: "Dano suficiente", description: "Uma arma principal com Catalisador, mods base e elemento coerente.", tags: ["2"] },
          { title: "Sustain ou controle", description: "Alguma fonte de cura, escudo, redução de dano, controle ou geração de energia.", tags: ["3"] },
          { title: "Forma nos itens centrais", description: "Polarize apenas o que já faz parte do seu setup principal.", tags: ["4"] },
          { title: "Plano contra armadura e Eximus", description: "Use status, elementos, strip, dano dedicado ou uma arma reserva para inimigos que travam a missão.", tags: ["5"] },
          { title: "Loadout salvo", description: "Salve a combinação para não remontar tudo sempre que entrar no Steel Path.", href: "/loadouts", tags: ["6"] }
        ]
      },
      {
        title: "Warframes seguros",
        description: "Escolha pela função que falta na sua conta: segurança, suporte, clear ou controle.",
        cards: [
          { title: "Revenant", description: "Base simples de sobrevivência para quem quer errar menos enquanto aprende o ritmo.", href: "/melhores-warframes", tags: ["Seguro"] },
          { title: "Dante", description: "Overguard, dano e conforto para missões variadas, especialmente quando a conta precisa de margem de erro.", href: "/melhores-warframes", tags: ["Geral"] },
          { title: "Wisp e Protea", description: "Suporte, energia, buffs e defesa de objetivo para deixar armas fortes mais consistentes.", href: "/melhores-warframes", tags: ["Suporte"] },
          { title: "Saryn e Citrine", description: "Boas quando você já entende rotação, energia e precisa de clear/status ou suporte defensivo.", href: "/melhores-warframes", tags: ["Clear"] }
        ]
      },
      {
        title: "Armas recomendadas",
        description: "Separe função de clear, alvo pesado e conforto em vez de depender de uma única arma para tudo.",
        cards: [
          { title: "Torid Incarnon", description: "Excelente para clear de grupos, missões densas e Steel Path quando bem investida.", href: "/builds/torid-incarnon", tags: ["Clear"] },
          { title: "Felarx", description: "Resposta forte para bosses, Eximus e inimigos resistentes que seguram a missão.", href: "/builds/felarx", tags: ["Alvo pesado"] },
          { title: "Laetum", description: "Secundária confiável para cobrir alvo resistente quando a primária está focada em clear.", href: "/builds/laetum", tags: ["Secundária"] },
          { title: "Praedos", description: "Melee de mobilidade e conforto para reduzir tempo em rotas repetidas.", href: "/builds/praedos", tags: ["Mobilidade"] }
        ]
      },
      {
        title: "Mods importantes",
        description: "Sem prometer lista única: priorize categorias que sustentam a build.",
        cards: [
          { title: "Dano e multishot", description: "Base para a maioria das armas. Versões Galvanized entram quando liberadas.", href: "/builds", tags: ["Armas"] },
          { title: "Elementos por facção", description: "Ajuste conforme inimigos e objetivo. Viral/Calor pode ser confortável em uso geral quando aplicável.", href: "/tier-list", tags: ["Elemento"] },
          { title: "Sobrevivência", description: "Adaptation, Rolling Guard, escudo, vida, armor, overguard ou controle conforme Warframe.", href: "/melhores-warframes", tags: ["Defesa"] },
          { title: "Arcanes", description: "Use Arcanes para estabilizar dano, energia, arma ou sobrevivência quando o básico já estiver pronto.", href: "/meta-atual", tags: ["Arcane"] }
        ]
      },
      {
        title: "Erros comuns",
        description: "O Steel Path costuma punir mais falta de plano do que falta de um item perfeito.",
        cards: [
          { title: "Entrar sem dano e defesa", description: "Se você morre e demora para matar, ajuste o básico antes de buscar otimização fina.", tags: ["Base"] },
          { title: "Copiar build cara cedo", description: "Uma build endgame pode não funcionar sem mods, Arcanes, Forma e evolução correta.", href: "/comece-aqui", tags: ["Progressão"] },
          { title: "Ignorar Eximus", description: "Tenha uma resposta para inimigos resistentes, seja arma dedicada, status, strip ou controle.", href: "/builds/felarx", tags: ["Eximus"] },
          { title: "Não salvar setup", description: "Sem loadout organizado, você perde tempo remontando e esquece ajustes por facção.", href: "/loadouts", tags: ["Organização"] }
        ]
      }
    ],
    links: [
      { title: "Comece Aqui", description: "Veja o caminho por estágio da conta.", href: "/comece-aqui" },
      { title: "Incarnon", description: "Veja quais armas Incarnon priorizar.", href: "/incarnon" },
      { title: "Build Felarx", description: "Estrutura para dano em alvo pesado.", href: "/builds/felarx" },
      { title: "Build Torid Incarnon", description: "Clear de grupos para Steel Path e missões longas.", href: "/builds/torid-incarnon" },
      { title: "Loadouts", description: "Monte e salve setups por objetivo.", href: "/loadouts" },
      { title: "Farm", description: "Organize créditos, Endo, Kuva e recursos para fortalecer builds.", href: "/farm" },
      { title: "Tier List", description: "Volte ao ranking completo do site.", href: "/tier-list" }
    ]
  }
};
