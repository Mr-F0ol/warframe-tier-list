import type { Metadata } from "next";
import { ComparisonTool } from "@/components/ComparisonTool";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { compareItems } from "@/data/compareItems";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comparador Warframe — Compare Builds, Armas e Warframes",
  description: "Compare Warframes, armas Incarnon e builds para decidir onde investir Forma, Catalisador, Arcanes e tempo.",
  alternates: { canonical: "/comparar" },
  openGraph: {
    title: "Comparador Warframe — Compare Builds, Armas e Warframes",
    description: "Ferramenta em português para comparar builds, armas e Warframes por função e investimento.",
    url: "/comparar"
  },
  twitter: {
    card: "summary_large_image",
    title: "Comparador Warframe — Compare Builds, Armas e Warframes",
    description: "Compare Warframes, armas Incarnon e builds antes de investir Forma, Catalisador, Arcanes e tempo."
  }
};

export default function CompararPage() {
  const schema = articleJsonLd({
    title: "Comparador Warframe",
    description: "Ferramenta para comparar Warframes, armas e builds no Warframe.",
    path: "/comparar"
  });

  return (
    <SeoPage
      eyebrow="Ferramenta"
      title="Comparador Warframe"
      description="Compare dois ou três itens por tier, função, investimento, dificuldade, pontos fortes e página relacionada."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Comparador", href: "/comparar" }
      ]}
      structuredData={schema}
    >
      <SectionBlock title="Escolha os itens" description="Use exemplos como Felarx vs Laetum, Torid Incarnon vs Felarx ou Dante vs Revenant Prime.">
        <ComparisonTool items={compareItems} />
      </SectionBlock>

      <SectionBlock title="Comparações úteis" description="Atalhos para decidir com mais contexto depois da comparação.">
        <InfoCardGrid
          cards={[
            { title: "Planejador Warframe", description: "Gere uma recomendação completa se ainda estiver em dúvida.", href: "/planejador", tags: ["Plano"] },
            { title: "Builds", description: "Veja detalhes das builds com mods, Arcanes, Forma e erros comuns.", href: "/builds", tags: ["Builds"] },
            { title: "Tier List", description: "Compare ranking completo por categoria e função.", href: "/tier-list", tags: ["Ranking"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Loadouts", description: "Salve combinações depois de escolher os itens.", href: "/loadouts" },
          { title: "Farm", description: "Prepare recursos antes de fechar investimento.", href: "/farm" },
          { title: "Progressão", description: "Veja quando vale priorizar cada tipo de item.", href: "/progressao" }
        ]}
      />
    </SeoPage>
  );
}
