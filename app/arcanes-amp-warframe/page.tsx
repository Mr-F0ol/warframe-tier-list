import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Arcanes de Amp Warframe 2026 — Melhores Arcanes para Operador",
  description: "Guia em português dos melhores Arcanes de Amp no Warframe para Operador, Eidolon, Void Angels e uso geral, com prioridades e erros comuns.",
  alternates: { canonical: "/arcanes-amp-warframe" },
  openGraph: {
    title: "Arcanes de Amp Warframe 2026 | Warframe Fool",
    description: "Escolha Arcanes de Amp para dano, crítico, consistência e conteúdo de Operador.",
    url: "/arcanes-amp-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arcanes de Amp Warframe 2026 — Melhores Arcanes para Operador",
    description: "Guia em português dos melhores Arcanes de Amp no Warframe para Operador, Eidolon, Void Angels e uso geral."
  }
};

const arcaneRows = [
  {
    label: "Eternal Eradicate",
    cells: ["Dano geral do Amp após usar habilidade do Operador.", "Uso geral, Void Angels e setups modernos de Operador.", "Muito forte quando você já alterna habilidade e disparo com naturalidade."]
  },
  {
    label: "Eternal Onslaught",
    cells: ["Crítico do Amp em condição específica ligada à energia do Operador.", "Combinações ofensivas e builds focadas em burst.", "Exige controlar rotação para manter valor real."]
  },
  {
    label: "Virtuos Shadow",
    cells: ["Crítico após acerto em ponto fraco com o Operador.", "Eidolon e jogadores que acertam headshot/ponto fraco de forma consistente.", "Menos confortável se você ainda erra muito o posicionamento."]
  },
  {
    label: "Virtuos Strike",
    cells: ["Aumento de dano crítico em disparos críticos.", "Builds antigas ou alternativas focadas em crítico.", "Pode perder espaço para opções Eternal em setups mais modernos."]
  }
];

const faq = [
  {
    question: "Qual é o melhor Arcane de Amp geral?",
    answer: "Eternal Eradicate costuma ser a escolha mais segura para uso geral porque melhora dano com uma rotação simples de habilidade do Operador."
  },
  {
    question: "Eternal Onslaught vale a pena?",
    answer: "Sim, especialmente em setups ofensivos que conseguem ativar e aproveitar crítico com consistência. Ele exige mais atenção à rotação do que uma opção puramente confortável."
  },
  {
    question: "Virtuos Shadow ainda serve?",
    answer: "Serve, principalmente para Eidolon e jogadores que acertam pontos fracos de forma consistente. Para uso geral, os Arcanes Eternal costumam ser mais simples."
  },
  {
    question: "Preciso de Arcane de Amp para jogar Operador?",
    answer: "Não para começar. Primeiro faça um Amp modular decente. Depois, Arcanes aumentam bastante o teto de dano e conforto."
  }
];

export default function ArcanesAmpWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Arcanes de Amp Warframe 2026 — Melhores Arcanes para Operador",
    description: metadata.description || "",
    path: "/arcanes-amp-warframe"
  });

  return (
    <SeoPage
      eyebrow="Operador"
      title="Arcanes de Amp Warframe 2026"
      description="Escolha Arcanes para melhorar dano, crítico e consistência do Operador em Eidolon, Void Angels e uso geral."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Arcanes de Amp", href: "/arcanes-amp-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="O que são Arcanes de Amp?" description="Arcanes de Amp são melhorias equipadas no Amp para aumentar dano, crítico ou consistência do Operador/Drifter.">
        <GuideCardGrid
          items={[
            { title: "Depois do Amp modular", description: "Não adianta priorizar Arcane se você ainda usa um Amp muito fraco. Primeiro monte uma base como 1-2-3, 5-4-7 ou 7-4-7.", href: "/melhor-amp-operador-warframe", badge: "Prioridade", badgeVariant: "cyan" },
            { title: "Dois slots no endgame", description: "Com progresso suficiente, o Amp pode usar mais de um Arcane. A combinação certa depende do objetivo.", badge: "Endgame", badgeVariant: "steel" },
            { title: "Sinergia com escola", description: "Madurai aumenta bastante o teto ofensivo. Unairu e Vazarin ajudam quando o problema é segurança.", href: "/melhor-escola-warframe", badge: "Foco", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Melhores Arcanes de Amp" description="Priorize Arcanes que resolvem o tipo de conteúdo que você realmente joga.">
        <GuideTable columns={["Função", "Melhor para", "Atenção"]} rows={arcaneRows} />
      </SectionBlock>

      <SectionBlock title="Prioridade por objetivo" description="Não existe um único Arcane perfeito para todos os casos. Escolha pelo uso do Operador.">
        <GuideCardGrid
          items={[
            { title: "Melhor geral", description: "Eternal Eradicate é uma prioridade segura para quem quer usar Operador em missões variadas.", badge: "Eternal Eradicate", badgeVariant: "meta" },
            { title: "Melhor burst", description: "Eternal Onslaught é forte quando você quer mais crítico e sabe controlar a rotação.", badge: "Eternal Onslaught", badgeVariant: "tierS" },
            { title: "Melhor para Eidolon", description: "Virtuos Shadow ainda tem valor para jogadores que acertam ponto fraco com consistência.", href: "/guia-eidolon-warframe", badge: "Virtuos Shadow", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Arcanes melhoram o Amp, mas não compensam base ruim ou rotação sem prática.">
        <GuideCardGrid
          items={[
            { title: "Comprar Arcane antes do Amp", description: "Um Amp modular bom muda mais sua conta que um Arcane colocado em base fraca.", badge: "Ordem", badgeVariant: "outline" },
            { title: "Ignorar condição de ativação", description: "Leia como o Arcane ativa. Se sua rotação não ativa o bônus, o valor real cai muito.", badge: "Rotação", badgeVariant: "cyan" },
            { title: "Copiar setup de Eidolon para tudo", description: "O que funciona em Eidolon nem sempre é o mais confortável para Void Angels e missões comuns.", badge: "Contexto", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Amp do Operador", description: "Escolha a base do Amp antes de investir em Arcanes.", href: "/melhor-amp-operador-warframe" },
          { title: "Guia Eidolon", description: "Veja onde Arcanes de Amp fazem diferença em caçadas.", href: "/guia-eidolon-warframe" },
          { title: "Void Angels", description: "Use Arcanes para melhorar a fase do Operador no Zariman.", href: "/void-angels-warframe" },
          { title: "Farm de Foco", description: "Evolua a escola que sustenta a rotação do Operador.", href: "/farm-foco-warframe" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
