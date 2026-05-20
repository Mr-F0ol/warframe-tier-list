import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Melhor Escola Warframe 2026 — Qual escolher para Operador e Steel Path",
  description: "Guia em português para escolher a melhor escola de foco no Warframe: Zenurik, Madurai, Unairu, Vazarin ou Naramon para iniciante, dano, sobrevivência e Steel Path.",
  alternates: { canonical: "/melhor-escola-warframe" },
  openGraph: {
    title: "Melhor Escola Warframe 2026 | WarframeFool",
    description: "Compare as escolas de foco e escolha a melhor opção para Operador, energia, dano e Steel Path.",
    url: "/melhor-escola-warframe"
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

const choices = [
  {
    title: "Melhor escolha geral",
    description: "Zenurik é a recomendação mais segura quando você ainda não sabe qual escola maximizar. Energia e conforto ajudam quase todo Warframe.",
    badge: "Zenurik",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor para iniciante",
    description: "Zenurik também é a melhor primeira escolha para a maioria dos jogadores, porque reduz a sensação de ficar sem energia o tempo todo.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor para sobrevivência",
    description: "Unairu é excelente para jogador solo em conteúdo difícil; Vazarin entra melhor quando o foco é proteção e recuperação da equipe.",
    badge: "Unairu",
    badgeVariant: "steel" as const
  },
  {
    title: "Melhor para dano",
    description: "Madurai é a escola para burst, Operador agressivo, Amp forte e alvos que precisam cair em uma janela curta.",
    badge: "Madurai",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor para Operador",
    description: "Madurai melhora o teto ofensivo do Operador. Unairu e Vazarin complementam quando o problema é sobreviver fora do Warframe.",
    badge: "Operador",
    badgeVariant: "warframe" as const
  },
  {
    title: "Melhor para Steel Path",
    description: "Unairu costuma entregar mais segurança prática em Steel Path solo, enquanto Zenurik segue ótima se seu Warframe depende muito de habilidade.",
    badge: "Endgame",
    badgeVariant: "steel" as const
  }
];

const rows = [
  {
    label: "Zenurik",
    cells: ["Energia, controle e conforto de habilidades.", "Iniciante, farm, missões longas e Warframes que gastam muita energia.", "Não aumenta tanto o dano direto quanto Madurai."]
  },
  {
    label: "Madurai",
    cells: ["Dano do Operador, Amp e janelas de burst.", "Eidolon, Void Angels, bosses e conteúdo onde o Operador precisa bater forte.", "Exige mais atenção a tempo de habilidade e posicionamento."]
  },
  {
    label: "Unairu",
    cells: ["Sobrevivência, resistência a controle, remoção de defesa e Last Gasp.", "Steel Path solo, conteúdo com Eximus e missões em que cair pode custar a run.", "Menos confortável para energia do Warframe."]
  },
  {
    label: "Vazarin",
    cells: ["Proteção, recuperação, suporte e segurança defensiva.", "Squads, objetivos frágeis, jogadores que querem margem de erro.", "Menos agressiva para dano e clear."]
  },
  {
    label: "Naramon",
    cells: ["Melee, combo e mobilidade do Operador.", "Builds melee, stat-stick e jogadores que gostam de combate corpo a corpo.", "Menos universal para contas que ainda faltam energia, dano ou defesa."]
  }
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
  }
];

export default function MelhorEscolaWarframePage() {
  return (
    <SeoPage
      eyebrow="Operador"
      title="Melhor Escola Warframe 2026"
      description="Escolha entre Zenurik, Madurai, Unairu, Vazarin e Naramon com foco em Operador, energia, dano e Steel Path."
    >
      <SectionBlock title="O que são escolas de foco?" description="Escolas de foco são árvores de habilidades do Operador/Drifter. Elas mudam energia, dano, sobrevivência, suporte e utilidade dentro das missões.">
        <GuideCardGrid
          items={[
            { title: "Conta em evolução", description: "Use a escola para cobrir o maior problema atual da sua conta: energia, dano, sobrevivência ou melee.", badge: "Prioridade", badgeVariant: "cyan" },
            { title: "Operador e Warframe", description: "Alguns bônus ajudam o Operador diretamente, enquanto outros melhoram a rotação do Warframe ou a segurança da missão.", badge: "Flexível", badgeVariant: "outline" },
            { title: "Way-Bounds", description: "Habilidades Way-Bound são investimentos de longo prazo. Elas ficam mais importantes quando você começa a usar Operador com frequência.", badge: "Endgame", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Ranking das melhores escolas" description="Ranking prático para jogador brasileiro decidir onde investir foco primeiro.">
        <GuideCardGrid items={ranking} />
      </SectionBlock>

      <SectionBlock title="Melhores escolhas por objetivo" description="Use estes cards quando você já sabe qual problema quer resolver.">
        <GuideCardGrid items={choices} />
      </SectionBlock>

      <SectionBlock title="Tabela comparativa" description="Comparação direta entre Zenurik, Madurai, Unairu, Vazarin e Naramon.">
        <GuideTable columns={["Foco principal", "Melhor para", "Atenção"]} rows={rows} />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Farm de Foco", description: "Veja como ganhar pontos para evoluir Zenurik, Madurai, Unairu, Vazarin e Naramon.", href: "/farm-foco-warframe" },
          { title: "Melhor Amp do Operador", description: "Escolha o Amp certo para complementar sua escola de foco.", href: "/melhor-amp-operador-warframe" },
          { title: "Guia Eidolon", description: "Veja onde Madurai, Amp e Arcanes fazem diferença.", href: "/guia-eidolon-warframe" },
          { title: "Steel Path", description: "Monte uma base segura antes de investir pesado em foco e Amp.", href: "/steel-path" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
