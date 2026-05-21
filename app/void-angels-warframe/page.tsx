import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Void Angels Warframe 2026 — Como Derrotar e Farmar Voidplume Pinion",
  description: "Guia em português para derrotar Void Angels no Zariman, escolher Amp, escola de foco, armas, Warframes seguros e evitar erros comuns.",
  alternates: { canonical: "/void-angels-warframe" },
  openGraph: {
    title: "Void Angels Warframe 2026 | WarframeFool",
    description: "Aprenda a vencer Void Angels no Zariman com Operador, Amp, armas fortes e uma rotação segura.",
    url: "/void-angels-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Void Angels Warframe 2026 — Como Derrotar e Farmar Voidplume Pinion",
    description: "Guia em português para derrotar Void Angels no Zariman, escolher Amp, escola de foco, armas e Warframes seguros."
  }
};

const phaseRows = [
  {
    label: "Corpo físico",
    cells: ["Use Warframe e arma para reduzir vida até a fase do vazio.", "Arma de alvo pesado, sobrevivência e controle de inimigos ao redor.", "Não gaste tudo antes da fase do Operador."]
  },
  {
    label: "Fase do vazio",
    cells: ["Use Operador/Drifter e Amp para vencer a etapa interna.", "Amp confortável, mobilidade e escola que ajude dano ou segurança.", "Evite ficar parado; movimento ruim costuma matar mais que falta de dano."]
  },
  {
    label: "Finalização",
    cells: ["Volte ao corpo e finalize o Angel com o loadout principal.", "Dano confiável contra alvo resistente e atenção aos inimigos da missão.", "Se a missão principal estiver falhando, priorize o objetivo antes do Angel."]
  }
];

const faq = [
  {
    question: "Void Angel dropa Voidplume Pinion?",
    answer: "Sim, Void Angels são uma fonte importante de Voidplume Pinion no Zariman. A run fica melhor quando você consegue derrotar o Angel sem comprometer o objetivo principal."
  },
  {
    question: "Qual Amp usar contra Void Angel?",
    answer: "5-4-7 costuma ser confortável para uso geral. 7-4-7 é forte para jogadores avançados, enquanto 1-2-3 já ajuda quem está saindo do Amp inicial."
  },
  {
    question: "Preciso de uma build endgame para Void Angels?",
    answer: "Não para os primeiros encontros, mas Steel Path e missões mais pesadas pedem arma de alvo único, Amp decente e sobrevivência estável."
  },
  {
    question: "Void Angel é melhor solo ou em grupo?",
    answer: "Solo é mais previsível se sua build estiver pronta. Grupo ajuda quando há dano e suporte, mas pode atrapalhar se o objetivo principal ficar abandonado."
  }
];

export default function VoidAngelsWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Void Angels Warframe 2026 — Como Derrotar e Farmar Voidplume Pinion",
    description: metadata.description || "",
    path: "/void-angels-warframe"
  });

  return (
    <SeoPage
      eyebrow="Zariman"
      title="Void Angels Warframe 2026"
      description="Guia para derrotar Void Angels no Zariman, farmar Voidplume Pinion e escolher Amp, escola e armas com segurança."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Void Angels", href: "/void-angels-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="O que são Void Angels?" description="Void Angels são inimigos especiais do Zariman que alternam combate normal com uma fase focada em Operador/Drifter.">
        <GuideCardGrid
          items={[
            { title: "Combate híbrido", description: "Você precisa de Warframe e Operador funcionando bem. Ignorar um dos dois deixa a luta lenta.", badge: "Warframe + Operador", badgeVariant: "warframe" },
            { title: "Farm de Pinion", description: "Eles são importantes para progresso no Zariman e para quem quer comprar ou evoluir itens ligados aos Holdfasts.", badge: "Farm", badgeVariant: "farm" },
            { title: "Teste de conta", description: "Void Angel expõe buracos de sobrevivência, dano em alvo único e Amp fraco.", badge: "Endgame", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Como derrotar Void Angels" description="A luta fica simples quando você separa a fase do corpo, a fase do vazio e a finalização.">
        <GuideTable columns={["O que fazer", "Levar no loadout", "Atenção"]} rows={phaseRows} />
      </SectionBlock>

      <SectionBlock title="Melhores escolhas para a luta" description="Use opções consistentes em vez de setups frágeis que dependem de execução perfeita.">
        <GuideCardGrid
          items={[
            { title: "Amp confortável", description: "5-4-7 é uma escolha geral forte. 1-2-3 resolve progresso inicial, e 7-4-7 favorece jogadores avançados.", href: "/melhor-amp-operador-warframe", badge: "Amp", badgeVariant: "meta" },
            { title: "Escola ofensiva", description: "Madurai ajuda bastante quando a fase do Operador está demorando. Unairu pode salvar runs mais perigosas.", href: "/melhor-escola-warframe", badge: "Foco", badgeVariant: "cyan" },
            { title: "Arma de alvo pesado", description: "Felarx, Laetum e outras armas fortes contra alvo resistente reduzem o tempo na fase física.", href: "/builds/felarx", badge: "Dano", badgeVariant: "tierS" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Warframes seguros" description="Escolha Warframes que não morrem facilmente enquanto inimigos do Zariman pressionam ao redor.">
        <GuideCardGrid
          items={[
            { title: "Revenant", description: "Muito seguro para aprender a luta sem ser punido por cada erro de posicionamento.", badge: "Seguro", badgeVariant: "steel" },
            { title: "Dante", description: "Boa mistura de proteção, dano e conforto para missões modernas com alta pressão.", badge: "Versátil", badgeVariant: "meta" },
            { title: "Wisp", description: "Ajuda com vida, velocidade e conforto em missão, principalmente quando o objetivo precisa continuar andando.", badge: "Suporte", badgeVariant: "cyan" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Void Angel não é só dano: perder o objetivo da missão ou entrar com Operador fraco atrasa tudo.">
        <GuideCardGrid
          items={[
            { title: "Abandonar o objetivo", description: "Em missões do Zariman, matar o Angel não compensa se o objetivo principal falhar.", badge: "Missão", badgeVariant: "outline" },
            { title: "Entrar sem Amp decente", description: "A fase do vazio fica longa e perigosa, principalmente em conteúdo avançado.", badge: "Amp", badgeVariant: "cyan" },
            { title: "Usar build frágil", description: "Se o Warframe cai toda hora, troque dano máximo por proteção e consistência.", badge: "Sobrevivência", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Amp do Operador", description: "Escolha Amp para Void Angel, Eidolon e uso geral.", href: "/melhor-amp-operador-warframe" },
          { title: "Arcanes de Amp", description: "Melhore dano e consistência do Operador.", href: "/arcanes-amp-warframe" },
          { title: "Build Laetum", description: "Use uma secundária forte para alvo resistente.", href: "/builds/laetum" },
          { title: "Farm de Foco", description: "Evolua a escola que sustenta seu Operador.", href: "/farm-foco-warframe" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
