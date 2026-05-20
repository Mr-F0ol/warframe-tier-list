import type { TierKey } from "@/lib/types";

export interface BuildGuide {
  slug: string;
  name: string;
  seoTitle?: string;
  category: "Primária" | "Secundária" | "Melee";
  tier: TierKey;
  description: string;
  summary: string;
  mainRole: string;
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

const defaultWarning = "Hotfixes, Riven, Arcanes, evoluções Incarnon e balanceamentos podem mudar o valor real desta build. Use como referência e valide no seu próprio loadout.";

export const buildGuides: BuildGuide[] = [
  {
    slug: "felarx",
    name: "Felarx",
    seoTitle: "Build Felarx Warframe 2026 — Melhor Configuração para Steel Path e Bosses",
    category: "Primária",
    tier: "S",
    description: "Build Felarx Warframe para dano alto em Steel Path, bosses e alvos resistentes.",
    summary: "Shotgun Incarnon focada em dano bruto. Funciona melhor quando o loadout já resolve sobrevivência e controle de inimigos.",
    mainRole: "Derreter alvos pesados e bosses, cobrindo o ponto fraco de builds focadas só em clear.",
    strengths: ["Dano em alvo único muito alto", "Boa para Eximus, bosses e inimigos resistentes", "Escala bem com investimento endgame"],
    weaknesses: ["Não é a opção mais confortável para limpar mapa inteiro", "Exige atenção às evoluções Incarnon", "Custo de build tende a ser alto para extrair o teto"],
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
    bestUse: "Bosses, Arquimídia Profunda, Steel Path e inimigos que não caem rápido para armas de clear.",
    investmentPriority: "Muito alta",
    difficulty: "Alta",
    buildCost: "Alto",
    metaWarning: defaultWarning,
    disclaimer: "Esta página organiza a build por objetivo, custo e substituições para facilitar testes na sua conta.",
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
    faq: [
      { question: "Felarx é boa para Steel Path?", answer: "Sim. Ela é uma das melhores opções para alvo pesado, Eximus e bosses quando o resto do loadout já resolve sobrevivência e clear." },
      { question: "Qual elemento usar na Felarx?", answer: "Use o elemento que resolve o alvo da missão. Para bosses e facções específicas, vale ter variações em vez de manter um único elemento para tudo." },
      { question: "Felarx serve para limpar mapa?", answer: "Ela pode matar inimigos comuns, mas não é a opção mais confortável para clear amplo. Use uma arma ou Warframe de área junto dela." },
      { question: "Preciso de muitas Formas na Felarx?", answer: "A build final costuma pedir investimento, mas teste o estilo da arma e as evoluções antes de gastar Forma demais." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare a Felarx com outras armas do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Entenda quando priorizar adaptadores Incarnon." },
      { href: "/melhores-armas-primarias", label: "Melhores primárias", description: "Compare a Felarx com Torid, Latron, Burston e Phenmor." }
    ]
  },
  {
    slug: "laetum",
    name: "Laetum",
    seoTitle: "Build Laetum Warframe 2026 — Melhor Configuração Incarnon para Steel Path",
    category: "Secundária",
    tier: "S",
    description: "Build Laetum Warframe para secundária de dano consistente no meta Steel Path.",
    summary: "Secundária Incarnon forte para dano direto, usada como plano seguro quando a primária está ocupada com clear ou utilidade.",
    mainRole: "Dano consistente contra alvos resistentes sem depender da primária.",
    strengths: ["Muito consistente no endgame", "Boa como arma reserva de alto dano", "Funciona bem em loadouts gerais"],
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
    metaWarning: defaultWarning,
    disclaimer: "A build separa função, custo e ajustes para facilitar validação em missão real.",
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
    faq: [
      { question: "Laetum ainda vale para Steel Path?", answer: "Sim. A Laetum continua excelente como secundária de dano consistente, principalmente quando a primária está ocupada com clear ou utilidade." },
      { question: "Laetum é melhor para boss ou uso geral?", answer: "Ela funciona nos dois, mas brilha como arma reserva para alvo resistente, Eximus e situações em que você precisa de dano confiável." },
      { question: "Qual elemento usar na Laetum?", answer: "Escolha conforme facção e função. Se ela for sua arma de alvo pesado, ajuste o elemento para o alvo que você quer resolver." },
      { question: "Preciso usar a forma Incarnon sempre?", answer: "Não. A forma Incarnon é forte, mas o uso ideal depende da missão, munição, alvo e conforto da sua rotação." }
    ],
    internalLinks: [
      { href: "/builds", label: "Builds", description: "Veja outros guias de build para armas e loadouts." },
      { href: "/tier-list", label: "Tier List", description: "Compare a Laetum com outras armas do meta." },
      { href: "/incarnon", label: "Guia Incarnon", description: "Veja outras armas Incarnon fortes." },
      { href: "/melhores-armas-secundarias", label: "Melhores secundárias", description: "Compare Laetum, Dual Toxocyst, Lex e Kuva Nukor." }
    ]
  },
  {
    slug: "praedos",
    name: "Praedos",
    category: "Melee",
    tier: "S",
    description: "Build Praedos Warframe para mobilidade, utilidade e conforto em farms e missões rápidas.",
    summary: "Melee Incarnon usada principalmente como ferramenta de mobilidade e qualidade de vida, com opção de virar arma de dano se a build for ajustada.",
    mainRole: "Aumentar fluidez do loadout, melhorar deslocamento e servir como melee utilitária.",
    strengths: ["Excelente conforto em missões repetidas", "Valor mesmo quando não é fonte principal de dano", "Boa flexibilidade entre utilidade e melee"],
    weaknesses: ["Menor prioridade se você não usa mobilidade ativa", "Build de dano compete com outras melee fortes", "Pode parecer fraca se usada sem entender o papel utilitário"],
    recommendedMods: ["Velocidade de ataque se for usar para melee", "Combo ou sustain conforme estilo", "Elemento se a arma for matar", "Mods de qualidade de vida para mobilidade", "Evoluções Incarnon utilitárias"],
    substituteMods: ["Slots de conforto no lugar de dano", "Elemento alternativo conforme facção", "Opções mais baratas antes de mods Primed", "Configuração utilitária sem foco em DPS máximo"],
    approximateForma: "2 a 4 Formas, dependendo se o foco é mobilidade pura ou dano melee.",
    recommendedArcanes: ["Melee Duplicate quando fizer sentido para a build", "Melee Exposure", "Arcane de melee compatível com seu foco real"],
    recommendedElement: "Se a Praedos for utilitária, elemento é secundário. Se for fonte de dano, ajuste conforme facção e status disponíveis no loadout.",
    incarnonEvolutions: [
      "Priorize evoluções utilitárias quando a Praedos for usada para mobilidade e conforto.",
      "Escolha evoluções ofensivas apenas se ela realmente for sua fonte de dano melee.",
      "Separe a configuração de farm da configuração de dano para não misturar objetivos."
    ],
    bestUse: "Farm, missões rápidas, deslocamento e loadouts que valorizam qualidade de vida.",
    investmentPriority: "Alta",
    difficulty: "Média",
    buildCost: "Médio",
    metaWarning: defaultWarning,
    disclaimer: "A página separa uso utilitário e uso de dano para evitar uma build única que não serve para todos.",
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
    faq: [
      { question: "Praedos é boa mesmo sem ser arma principal?", answer: "Sim. O valor da Praedos vem muito da mobilidade e do conforto, não apenas do dano melee." },
      { question: "Devo buildar Praedos para dano?", answer: "Só se você realmente pretende usar melee para matar. Para farm e missões rápidas, a versão utilitária costuma entregar mais valor." },
      { question: "Qual elemento usar na Praedos?", answer: "Se ela for utilitária, o elemento importa menos. Se for arma de dano, ajuste conforme facção e status do loadout." }
    ],
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
