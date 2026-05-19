import type { Metadata } from "next";
import { TierListApp } from "@/components/tier-list-app";
import { SeoPage, SectionBlock } from "@/components/seo/seo-page";
import { getTierListData, getTierMetaData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Tier List Warframe completa",
  description: "Tier list completa de Warframes e armas com filtros, tags, detalhes e recomendações por objetivo.",
  alternates: { canonical: "/tier-list" },
  openGraph: {
    title: "Tier List Warframe completa | WarframeFool",
    description: "Ranking completo com Warframes, armas, tiers, filtros e tags.",
    url: "/tier-list"
  }
};

export default async function TierListPage() {
  const [tierList, tierMeta] = await Promise.all([getTierListData(), getTierMetaData()]);

  return (
    <SeoPage
      eyebrow="Tier List"
      title="Tier List Warframe completa"
      description="A experiência principal do site com filtros por tier, objetivo, variante, tipo de arma e busca por nome ou tag."
    >
      <SectionBlock title="Ranking interativo" description="Use os filtros para encontrar o melhor investimento para sua conta.">
        <TierListApp tierList={tierList} tierMeta={tierMeta} />
      </SectionBlock>
    </SeoPage>
  );
}
