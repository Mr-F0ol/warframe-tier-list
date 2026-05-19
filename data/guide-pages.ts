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
    description: "Roteiro simples para organizar loadout, prioridade e escolhas antes de farmar créditos de forma consistente.",
    eyebrow: "Farm",
    sections: [
      {
        title: "Antes de começar",
        description: "O melhor farm é aquele que você consegue repetir sem travar por dano, sobrevivência ou deslocamento.",
        cards: [
          { title: "Loadout confortável", description: "Priorize um Warframe seguro e armas que matem sem exigir setup longo.", tags: ["Conforto", "Repetição"] },
          { title: "Mobilidade importa", description: "Armas utilitárias como Praedos podem economizar tempo em rotas repetidas.", href: "/builds/praedos", tags: ["Praedos", "Tempo"] },
          { title: "Evite overbuild cedo", description: "Não gaste Forma demais só para farm básico; invista pesado quando o farm virar rotina.", tags: ["Prioridade", "Recursos"] }
        ]
      },
      {
        title: "Como escolher equipamento",
        description: "Separe a função de cada slot: sobrevivência, clear, alvo pesado e mobilidade.",
        cards: [
          { title: "Warframe", description: "Use algo que não morra facilmente e mantenha a missão estável.", href: "/melhores-warframes", tags: ["Warframe"] },
          { title: "Primária", description: "Leve clear rápido quando a missão tem grupos grandes de inimigos.", href: "/melhores-armas-primarias", tags: ["Clear"] },
          { title: "Secundária", description: "Use como dano reserva ou primer quando sua primária tem outro papel.", href: "/melhores-armas-secundarias", tags: ["Suporte"] }
        ]
      }
    ],
    links: [
      { title: "Melhores Warframes", description: "Escolha uma base segura para farms longos.", href: "/melhores-warframes" },
      { title: "Praedos", description: "Guia editável de melee utilitária para mobilidade.", href: "/builds/praedos" },
      { title: "Loadouts", description: "Espaço preparado para salvar combinações depois do PostgreSQL.", href: "/loadouts" }
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
          { title: "Builds editáveis", description: "Use as páginas de builds como estrutura e registre sua configuração real depois dos testes.", href: "/builds", tags: ["Builds"] },
          { title: "Loadouts", description: "A estrutura de API e PostgreSQL já está preparada para salvar combinações futuras.", href: "/loadouts", tags: ["Futuro"] }
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
