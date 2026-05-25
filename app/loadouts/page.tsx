import type { Metadata } from "next";
import { LoadoutPresetCards } from "@/components/loadout-preset-cards";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { getTierListData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Loadouts Warframe — Organize combinações para Steel Path, Farm e Bosses",
  description: "Organize combinações de Warframe, armas e notas por objetivo e consulte seus loadouts depois.",
  alternates: { canonical: "/loadouts" },
  openGraph: {
    title: "Loadouts Warframe | WarframeFool",
    description: "Salve combinações de Warframe, primária, secundária, melee e notas por objetivo.",
    url: "/loadouts"
  },
  twitter: {
    card: "summary_large_image",
    title: "Loadouts Warframe — Organize combinações para Steel Path, Farm e Bosses",
    description: "Organize combinações de Warframe, armas e notas por objetivo e consulte seus loadouts depois."
  }
};

export default async function LoadoutsPage() {
  const tierList = await getTierListData();

  return (
    <SeoPage
      eyebrow="Loadouts"
      title="Meus Loadouts"
      description="Organize combinações de Warframe, armas e notas por objetivo."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Loadouts", href: "/loadouts" }
      ]}
    >
      <SectionBlock title="Criar e salvar" description="Os loadouts ficam salvos neste navegador.">
        <LoadoutsPanel tierList={tierList} />
      </SectionBlock>
      <LoadoutPresetCards />
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
