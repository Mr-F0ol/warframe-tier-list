import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideCtaRow, GuideTable, NextGuideLinks } from "@/components/guide-ui";
import { SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Melhor Escola Warframe 2026 — Operador, Foco e Steel Path",
  description: "Veja qual é a melhor escola de foco em Warframe para iniciantes, Steel Path, dano, sobrevivência e uso geral do Operador.",
  alternates: { canonical: "/melhor-escola-warframe" },
  openGraph: {
    title: "Melhor Escola Warframe 2026 — Operador, Foco e Steel Path",
    description: "Veja qual é a melhor escola de foco em Warframe para iniciantes, Steel Path, dano, sobrevivência e uso geral do Operador.",
    url: "/melhor-escola-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhor Escola Warframe 2026 — Operador, Foco e Steel Path",
    description: "Veja qual é a melhor escola de foco em Warframe para iniciantes, Steel Path, dano, sobrevivência e uso geral do Operador."
  }
};

const ranking = [
  {
    title: "Zenurik",
    description: "Melhor escolha geral para a maioria das contas porque ajuda energia, rotação de habilidades e conforto em missões longas.",
    badge: "Melhor geral",
    badgeVariant: "meta" as const
  },
  {
    title: "Madurai",
    description: "Melhor escola para dano do Operador, Amp, Void Strike e janelas curtas de burst contra alvos importantes.",
    badge: "Dano",
    badgeVariant: "tierS" as const
  },
  {
    title: "Unairu",
    description: "Excelente para Steel Path por sobrevivência, anti-controle, remoção de defesas inimigas e Last Gasp mais confiável.",
    badge: "Steel Path",
    badgeVariant: "steel" as const
  },
  {
    title: "Vazarin",
    description: "Forte para proteção, recuperação, suporte e segurança em missões onde morrer custa tempo ou objetivo.",
    badge: "Sobrevivência",
    badgeVariant: "cyan" as const
  },
  {
    title: "Naramon",
    description: "Boa para contas focadas em melee e combo, mas costuma ser menos universal que Zenurik, Madurai e Unairu.",
    badge: "Melee",
    badgeVariant: "melee" as const
  }
];

const quickAnswers = [
  {
    title: "Melhor escola geral",
    description: "Zenurik é a escolha mais segura para a maioria das contas porque melhora energia e conforto em quase todo Warframe.",
    badge: "Zenurik",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor para iniciante",
    description: "Zenurik reduz a sensação de ficar sem energia e facilita builds simples antes de você ter Arcanes, Helminth e mods caros.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor para dano",
    description: "Madurai é a melhor rota quando o objetivo é aumentar dano do Operador, Amp e janelas curtas contra bosses.",
    badge: "Madurai",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor para sobrevivência",
    description: "Unairu é excelente para Steel Path solo; Vazarin ganha valor quando você quer proteção e suporte.",
    badge: "Unairu",
    badgeVariant: "steel" as const
  },
  {
    title: "Melhor para Steel Path",
    description: "Unairu entrega segurança prática, enquanto Zenurik continua ótima se seu Warframe depende muito de habilidades.",
    badge: "Steel Path",
    badgeVariant: "steel" as const
  }
];

const choices = [
  {
    title: "Melhor escolha geral",
    description: "Zenurik é a recomendação mais segura quando você ainda não sabe qual escola maximizar. Energia e conforto ajudam quase todo Warframe.",
    badge: "Zenurik",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor escola para iniciante",
    description: "Zenurik também é a melhor primeira escolha para a maioria dos jogadores, porque reduz a sensação de ficar sem energia o tempo todo.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor escola para sobrevivência",
    description: "Unairu é excelente para jogador solo em conteúdo difícil; Vazarin entra melhor quando o foco é proteção e recuperação da equipe.",
    badge: "Unairu",
    badgeVariant: "steel" as const
  },
  {
    title: "Melhor escola para dano",
    description: "Madurai é a escola para burst, Operador agressivo, Amp forte e alvos que precisam cair em uma janela curta.",
    badge: "Madurai",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor escola para Operador",
    description: "Madurai melhora o teto ofensivo do Operador. Unairu e Vazarin complementam quando o problema é sobreviver fora do Warframe.",
    badge: "Operador",
    badgeVariant: "warframe" as const
  },
  {
    title: "Melhor escola para Steel Path",
    description: "Unairu costuma entregar mais segurança prática em Steel Path solo, enquanto Zenurik segue ótima se seu Warframe depende muito de habilidade.",
    badge: "Endgame",
    badgeVariant: "steel" as const
  }
];

const rows = [
  {
    label: "Zenurik",
    cells: ["Energia, controle e conforto de habilidades.", "Ajuda quase todo Warframe a manter rotação.", "Não aumenta tanto o dano direto quanto Madurai.", "Iniciante, farm, missões longas e Warframes que gastam muita energia."]
  },
  {
    label: "Madurai",
    cells: ["Dano do Operador, Amp e janelas de burst.", "Aumenta muito o teto ofensivo do Operador.", "Exige mais atenção a tempo de habilidade e posicionamento.", "Eidolon, Void Angels, bosses e conteúdo onde o Operador precisa bater forte."]
  },
  {
    label: "Unairu",
    cells: ["Sobrevivência, resistência a controle, remoção de defesa e Last Gasp.", "Deixa conteúdo difícil mais seguro, especialmente solo.", "Menos confortável para energia do Warframe.", "Steel Path solo, conteúdo com Eximus e missões em que cair pode custar a run."]
  },
  {
    label: "Vazarin",
    cells: ["Proteção, recuperação, suporte e segurança defensiva.", "Cria margem de erro para equipe e objetivos.", "Menos agressiva para dano e clear.", "Squads, objetivos frágeis e jogadores que querem segurança."]
  },
  {
    label: "Naramon",
    cells: ["Melee, combo e mobilidade do Operador.", "Sustenta estilos focados em corpo a corpo.", "Menos universal para contas que ainda faltam energia, dano ou defesa.", "Builds melee, stat-stick e jogadores que gostam de combate corpo a corpo."]
  }
];

const schoolUseCases = [
  {
    title: "Quando usar Zenurik",
    description: "Use quando seu problema é energia, rotação de habilidade, farm confortável ou uma conta que ainda não tem muitas fontes alternativas de energia.",
    badge: "Energia",
    badgeVariant: "meta" as const
  },
  {
    title: "Quando usar Madurai",
    description: "Use para Eidolon, Void Angels, bosses e qualquer situação em que o Operador precisa causar dano alto em pouco tempo.",
    badge: "Dano",
    badgeVariant: "tierS" as const
  },
  {
    title: "Quando usar Unairu",
    description: "Use em Steel Path solo, conteúdo com inimigos resistentes e missões onde sobreviver fora do Warframe faz diferença.",
    badge: "Steel Path",
    badgeVariant: "steel" as const
  },
  {
    title: "Quando usar Vazarin",
    description: "Use quando você quer proteger aliados, objetivos ou dar mais margem de erro a uma missão longa.",
    badge: "Suporte",
    badgeVariant: "cyan" as const
  },
  {
    title: "Quando usar Naramon",
    description: "Use se sua conta gira em torno de melee, combo e ritmo de combate corpo a corpo.",
    badge: "Melee",
    badgeVariant: "melee" as const
  }
];

const ctaLinks = [
  { href: "/tier-list", label: "Ver Tier List completa" },
  { href: "/melhor-amp-operador-warframe", label: "Ver Melhor Amp", variant: "outline" as const },
  { href: "/farm-foco-warframe", label: "Ver Farm de Foco", variant: "outline" as const },
  { href: "/loadouts", label: "Montar Loadout", variant: "secondary" as const }
];

const nextGuides = [
  { title: "Melhor Amp do Operador", description: "Monte um Amp que combina com Madurai, Unairu ou seu objetivo atual.", href: "/melhor-amp-operador-warframe", badge: "Operador", badgeVariant: "meta" as const },
  { title: "Farm de Foco", description: "Veja métodos para evoluir a escola escolhida sem desperdiçar lente.", href: "/farm-foco-warframe", badge: "Foco", badgeVariant: "cyan" as const },
  { title: "Tier List", description: "Compare Warframes e armas antes de investir Forma na sua conta.", href: "/tier-list", badge: "Meta", badgeVariant: "steel" as const }
];

const faq = [
  {
    question: "Qual escola escolher primeiro no Warframe?",
    answer: "Para a maioria dos jogadores, Zenurik é a escolha mais segura porque melhora energia e deixa builds simples mais confortáveis. Se você já quer jogar focado em Operador e boss, Madurai pode vir antes."
  },
  {
    question: "Zenurik ainda vale a pena em 2026?",
    answer: "Sim. Mesmo com Arcanes, Helminth e outras fontes de energia, Zenurik continua excelente para conta em evolução e para Warframes que dependem de habilidades constantes."
  },
  {
    question: "Madurai é obrigatório para Eidolon?",
    answer: "Não é obrigatório para jogar, mas é uma das escolas mais fortes quando o objetivo é aumentar dano do Operador e do Amp em janelas curtas."
  },
  {
    question: "Unairu ou Vazarin para sobreviver?",
    answer: "Unairu é mais forte para segurança solo e Steel Path. Vazarin é melhor quando você quer suporte, proteção e recuperação em objetivos ou grupo."
  },
  {
    question: "Posso trocar de escola depois?",
    answer: "Sim. Você pode usar outra escola quando quiser, mas o ideal é terminar os nós mais importantes de uma prioridade antes de espalhar foco demais."
  },
  {
    question: "Qual escola combina melhor com Amp?",
    answer: "Madurai é a mais ofensiva para Amp. Unairu e Vazarin entram quando o problema é sobreviver, recuperar margem de erro ou jogar conteúdo mais seguro."
  }
];

export default function MelhorEscolaWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Melhor Escola Warframe 2026 — Operador, Foco e Steel Path",
    description: metadata.description || "",
    path: "/melhor-escola-warframe"
  });

  return (
    <SeoPage
      eyebrow="Operador"
      title="Melhor Escola Warframe 2026"
      description="Escolha entre Zenurik, Madurai, Unairu, Vazarin e Naramon com foco em Operador, energia, dano e Steel Path."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Melhor Escola Warframe", href: "/melhor-escola-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="Resposta rápida" description="Escolha a escola pelo problema que você quer resolver agora: energia, dano, sobrevivência ou Steel Path.">
        <GuideCardGrid items={quickAnswers} />
        <GuideCtaRow items={ctaLinks} />
      </SectionBlock>

      <SectionBlock title="O que são escolas de foco?" description="Escolas de foco são árvores de habilidades do Operador/Drifter. Elas mudam energia, dano, sobrevivência, suporte e utilidade dentro das missões.">
        <GuideCardGrid
          items={[
            { title: "Conta em evolução", description: "Use a escola para cobrir o maior problema atual da sua conta: energia, dano, sobrevivência ou melee.", badge: "Prioridade", badgeVariant: "cyan" },
            { title: "Operador e Warframe", description: "Alguns bônus ajudam o Operador diretamente, enquanto outros melhoram a rotação do Warframe ou a segurança da missão.", badge: "Flexível", badgeVariant: "outline" },
            { title: "Habilidades vinculadas", description: "Algumas habilidades são investimentos de longo prazo e ficam mais importantes quando você começa a usar Operador com frequência.", badge: "Endgame", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Ranking geral das escolas" description="Ranking prático para jogador brasileiro decidir onde investir foco primeiro.">
        <GuideCardGrid items={ranking} />
      </SectionBlock>

      <SectionBlock title="Melhores escolhas por objetivo" description="Use estes cards quando você já sabe qual problema quer resolver.">
        <GuideCardGrid items={choices} />
      </SectionBlock>

      <SectionBlock title="Tabela comparativa" description="Comparação direta entre Zenurik, Madurai, Unairu, Vazarin e Naramon.">
        <GuideTable columns={["Melhor uso", "Ponto forte", "Ponto fraco", "Recomendado para"]} rows={rows} />
      </SectionBlock>

      <SectionBlock title="Quando usar cada escola" description="A melhor escola muda conforme a missão, seu Warframe e o quanto você depende do Operador.">
        <GuideCardGrid items={schoolUseCases} />
      </SectionBlock>

      <FaqSection items={faq} />
      <NextGuideLinks links={nextGuides} />
    </SeoPage>
  );
}
