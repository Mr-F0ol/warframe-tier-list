import type { Metadata } from "next";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { getTierListData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Loadouts Warframe — Organize combinações para Steel Path, Farm e Bosses",
  description: "Organize loadouts por objetivo e salve combinações de Warframe, armas e notas para consultar depois.",
  alternates: { canonical: "/loadouts" },
  openGraph: {
    title: "Loadouts Warframe | WarframeFool",
    description: "Salve combinações de Warframe, primária, secundária, melee e notas por objetivo.",
    url: "/loadouts"
  }
};

export default async function LoadoutsPage() {
  const tierList = await getTierListData();

  return (
    <SeoPage
      eyebrow="Loadouts"
      title="Meus Loadouts"
      description="Organize seus loadouts por objetivo e salve combinações para consultar depois."
    >
      <SectionBlock title="Criar e salvar" description="Os dados ficam salvos neste navegador para você consultar depois.">
        <LoadoutsPanel tierList={tierList} />
      </SectionBlock>
      <InternalLinks
        links={[
          { title: "Builds", description: "Use os guias de build antes de salvar combinações finais.", href: "/builds" },
          { title: "Steel Path", description: "Monte loadouts voltados para conteúdo difícil.", href: "/steel-path" },
          { title: "Farm", description: "Organize loadouts para repetição e eficiência.", href: "/farm" }
        ]}
      />
    </SeoPage>
  );
}
