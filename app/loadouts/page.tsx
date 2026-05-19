import type { Metadata } from "next";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { getTierListData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Loadouts Warframe",
  description: "Área de loadouts do WarframeFool, preparada para salvar combinações com API Next.js e PostgreSQL gratuito no futuro.",
  alternates: { canonical: "/loadouts" },
  openGraph: {
    title: "Loadouts Warframe | WarframeFool",
    description: "Organize Warframe, primária, secundária, melee e notas por objetivo.",
    url: "/loadouts"
  }
};

export default async function LoadoutsPage() {
  const tierList = await getTierListData();

  return (
    <SeoPage
      eyebrow="Loadouts"
      title="Meus loadouts"
      description="Espaço para organizar combinações de Warframe, armas e notas por objetivo. A API já está pronta para PostgreSQL quando a DATABASE_URL for configurada."
    >
      <SectionBlock title="Criar e salvar" description="Sem banco configurado, o painel mostra o estado do backend e mantém a estrutura pronta para evolução.">
        <LoadoutsPanel tierList={tierList} />
      </SectionBlock>
      <InternalLinks
        links={[
          { title: "Builds", description: "Use as estruturas de builds antes de salvar combinações finais.", href: "/builds" },
          { title: "Steel Path", description: "Monte loadouts voltados para conteúdo difícil.", href: "/steel-path" },
          { title: "Farm", description: "Organize loadouts para repetição e eficiência.", href: "/farm-creditos" }
        ]}
      />
    </SeoPage>
  );
}
