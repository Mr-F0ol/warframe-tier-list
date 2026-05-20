import type { Metadata } from "next";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { getTierListData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Loadouts Warframe — Monte combinações para Steel Path, Farm e Bosses",
  description: "Monte e salve combinações de Warframe, armas e notas para Steel Path, Farm, Bosses e missões rápidas.",
  alternates: { canonical: "/loadouts" },
  openGraph: {
    title: "Loadouts Warframe | WarframeFool",
    description: "Organize Warframe, primária, secundária, melee e notas por objetivo no WarframeFool.",
    url: "/loadouts"
  }
};

export default async function LoadoutsPage() {
  const tierList = await getTierListData();

  return (
    <SeoPage
      eyebrow="Loadouts"
      title="Meus Loadouts"
      description="Monte e salve combinações de Warframe, armas e notas para Steel Path, Farm, Bosses e missões rápidas."
    >
      <SectionBlock title="Criar e salvar" description="Seus loadouts ficam salvos neste navegador. Salvamento em nuvem poderá ser adicionado futuramente.">
        <LoadoutsPanel tierList={tierList} />
      </SectionBlock>
      <InternalLinks
        links={[
          { title: "Builds", description: "Use as estruturas de builds antes de salvar combinações finais.", href: "/builds" },
          { title: "Steel Path", description: "Monte loadouts voltados para conteúdo difícil.", href: "/steel-path" },
          { title: "Farm", description: "Organize loadouts para repetição e eficiência.", href: "/farm" }
        ]}
      />
    </SeoPage>
  );
}
