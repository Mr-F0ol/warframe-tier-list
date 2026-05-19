import type { TierKey } from "@/lib/types";

export interface BuildGuide {
  slug: string;
  name: string;
  category: "Primária" | "Secundária" | "Melee";
  tier: TierKey;
  description: string;
  disclaimer: string;
  bestFor: string[];
  statPriority: string[];
  progression: string[];
  editableSlots: Array<{
    label: string;
    guidance: string;
  }>;
  avoid: string[];
  internalLinks: Array<{
    href: string;
    label: string;
    description: string;
  }>;
}

export const buildGuides: BuildGuide[] = [
  {
    slug: "felarx",
    name: "Felarx",
    category: "Primária",
    tier: "S",
    description: "Guia de estrutura para transformar a Felarx em uma arma de dano bruto contra alvos resistentes.",
    disclaimer: "Este guia não é uma importação fechada de mods. Ele define prioridades editáveis para você preencher com sua build testada no arquivo data/builds.ts.",
    bestFor: ["Bosses", "Steel Path", "Arquimídia Profunda", "Alvos pesados"],
    statPriority: ["Multishot", "Dano base", "Elemental adequado ao alvo", "Cadência ou recarga conforme conforto", "Evoluções Incarnon corretas"],
    progression: [
      "Use a Felarx quando você precisa derreter um alvo resistente, não como sua única ferramenta de clear.",
      "Antes de gastar muitas Formas, confirme as evoluções Incarnon e o papel dela no seu loadout.",
      "Combine com Warframes que resolvem sobrevivência, armor strip ou buff de dano."
    ],
    editableSlots: [
      { label: "Versão base", guidance: "Preencha aqui uma versão simples para quem ainda não tem todos os mods Galvanized." },
      { label: "Versão endgame", guidance: "Preencha depois com sua configuração validada em Steel Path e bosses." },
      { label: "Variação de elemento", guidance: "Anote quando trocar elemento por facção, boss ou missão específica." }
    ],
    avoid: ["Copiar build sem conferir evoluções Incarnon", "Usar como solução única para clear de mapa", "Gastar Forma antes de saber se o estilo shotgun combina com você"],
    internalLinks: [
      { href: "/melhores-armas-primarias", label: "Melhores primárias", description: "Compare a Felarx com Torid, Latron, Burston e Phenmor." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda quando priorizar adaptadores Incarnon." },
      { href: "/steel-path", label: "Steel Path", description: "Veja prioridades para montar conta de endgame." }
    ]
  },
  {
    slug: "laetum",
    name: "Laetum",
    category: "Secundária",
    tier: "S",
    description: "Guia de estrutura para usar a Laetum como secundária de dano alto e consistente no endgame.",
    disclaimer: "Este guia deixa os slots de mods como estrutura editável. Use como roteiro, não como dado fechado inventado.",
    bestFor: ["Steel Path", "Bosses", "Alvos resistentes", "Loadouts sem secundária definida"],
    statPriority: ["Multishot", "Dano consistente", "Elemental conforme facção", "Controle de recarga", "Evoluções Incarnon alinhadas ao estilo"],
    progression: [
      "Use a Laetum como plano seguro quando sua primária é voltada para clear.",
      "Ela funciona muito bem em loadouts que precisam de dano single target confiável.",
      "Teste a sensação da forma Incarnon antes de fechar uma build cara."
    ],
    editableSlots: [
      { label: "Versão conforto", guidance: "Espaço para uma versão estável, fácil de usar e boa para conteúdo geral." },
      { label: "Versão alvo pesado", guidance: "Espaço para ajustes contra bosses, Eximus e inimigos com defesa alta." },
      { label: "Notas de evolução", guidance: "Registre as evoluções escolhidas e por que elas funcionaram na sua conta." }
    ],
    avoid: ["Ignorar economia de munição e conforto", "Assumir que toda missão precisa da forma Incarnon", "Trocar elementos sem testar contra o alvo real"],
    internalLinks: [
      { href: "/melhores-armas-secundarias", label: "Melhores secundárias", description: "Compare Laetum, Dual Toxocyst, Lex e Kuva Nukor." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Veja outras armas Incarnon fortes." },
      { href: "/loadouts", label: "Loadouts", description: "Salve combinações futuras quando o banco estiver configurado." }
    ]
  },
  {
    slug: "praedos",
    name: "Praedos",
    category: "Melee",
    tier: "S",
    description: "Guia de estrutura para usar Praedos como melee utilitária, com foco em mobilidade e qualidade de vida.",
    disclaimer: "A página não finge uma build perfeita universal. Ela separa uso utilitário e uso melee para você editar depois.",
    bestFor: ["Farm", "Missões rápidas", "Mobilidade", "Loadouts gerais"],
    statPriority: ["Mobilidade", "Velocidade de ataque se for usar melee", "Combo conforme variante", "Elemental se virar fonte de dano", "Evoluções Incarnon utilitárias"],
    progression: [
      "Praedos vale mesmo quando não é sua principal fonte de dano, porque melhora deslocamento e fluidez.",
      "Separe uma configuração utilitária de uma configuração focada em dano melee.",
      "Use em farms repetidos quando tempo de deslocamento importa."
    ],
    editableSlots: [
      { label: "Versão utilitária", guidance: "Preencha sua configuração focada em mobilidade e conforto." },
      { label: "Versão melee", guidance: "Preencha uma configuração focada em dano caso use Praedos para matar." },
      { label: "Missões preferidas", guidance: "Anote onde a mobilidade da Praedos realmente economiza tempo." }
    ],
    avoid: ["Tratar toda melee como stat-stick", "Ignorar evoluções de mobilidade", "Gastar recursos se você nunca usa melee ou parkour ativo"],
    internalLinks: [
      { href: "/melhores-melee", label: "Melhores melee", description: "Compare Praedos com Glaive Prime, Ceramic Dagger e Dual Ichor." },
      { href: "/farm-creditos", label: "Farm", description: "Veja como mobilidade ajuda em farms repetidos." },
      { href: "/steel-path", label: "Steel Path", description: "Monte uma base segura para conteúdo difícil." }
    ]
  }
];

export function getBuildGuide(slug: string) {
  return buildGuides.find(build => build.slug === slug);
}
