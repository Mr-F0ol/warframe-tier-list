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
    description: "Prioridades para montar uma conta segura, com dano suficiente e bons investimentos antes de conteúdo mais pesado.",
    eyebrow: "Endgame",
    sections: [
      {
        title: "Base segura primeiro",
        description: "Antes de perseguir dano máximo, resolva sobrevivência e consistência.",
        cards: [
          { title: "Warframe confiável", description: "Dante, Revenant, Wisp e Protea reduzem erro e deixam você aprender o ritmo.", href: "/melhores-warframes", tags: ["Sobrevivência"] },
          { title: "Arma principal", description: "Tenha pelo menos uma arma capaz de lidar com armadura alta e Eximus.", href: "/melhores-armas-primarias", tags: ["Dano"] },
          { title: "Secundária reserva", description: "Laetum, Kuva Nukor e outras secundárias fortes ajudam quando a primária não resolve tudo.", href: "/melhores-armas-secundarias", tags: ["Backup"] }
        ]
      },
      {
        title: "Quando investir pesado",
        description: "Forma, Catalisador e Arcanes rendem mais quando a peça resolve várias missões.",
        cards: [
          { title: "Incarnon", description: "Priorize armas Incarnon que mudam sua conta, não só armas que parecem bonitas no papel.", href: "/incarnon", tags: ["Incarnon"] },
          { title: "Builds por objetivo", description: "Use as páginas de builds como base e registre sua configuração real depois dos testes.", href: "/builds", tags: ["Builds"] },
          { title: "Loadouts", description: "Salve combinações no navegador e separe setups por objetivo.", href: "/loadouts", tags: ["Organização"] }
        ]
      }
    ],
    links: [
      { title: "Incarnon", description: "Veja quais armas Incarnon priorizar.", href: "/incarnon" },
      { title: "Build Felarx", description: "Estrutura para dano em alvo pesado.", href: "/builds/felarx" },
      { title: "Tier List", description: "Volte ao ranking completo do site.", href: "/tier-list" }
    ]
  }
};
