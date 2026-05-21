import type { Metadata } from "next";
import { TierListApp } from "@/components/tier-list-app";
import { SeoPage, SectionBlock } from "@/components/seo/seo-page";
import { getTierListData, getTierMetaData } from "@/lib/tier-data";
import { itemListJsonLd } from "@/lib/seo";
import { flattenWarframes, flattenWeapons } from "@/lib/tier-utils";

export const metadata: Metadata = {
  title: "Tier List Warframe 2026 — Melhores Warframes e Armas para Steel Path",
  description: "Tier list Warframe 2026 com melhores Warframes, primárias, secundárias e melee para Steel Path, farm, bosses e endgame.",
  alternates: { canonical: "/tier-list" },
  openGraph: {
    title: "Tier List Warframe 2026 | WarframeFool",
    description: "Ranking completo com Warframes, armas, tiers, filtros e recomendações por objetivo.",
    url: "/tier-list"
  },
  twitter: {
    card: "summary_large_image",
    title: "Tier List Warframe 2026 — Melhores Warframes e Armas para Steel Path",
    description: "Tier list Warframe 2026 com melhores Warframes, primárias, secundárias e melee para Steel Path, farm, bosses e endgame."
  }
};

export default async function TierListPage() {
  const [tierList, tierMeta] = await Promise.all([getTierListData(), getTierMetaData()]);
  const itemListSchema = itemListJsonLd({
    name: "Tier List Warframe 2026",
    description: "Ranking completo de Warframes e armas do WarframeFool.",
    path: "/tier-list",
    items: [...flattenWarframes(tierList), ...flattenWeapons(tierList)].map(item => ({
      name: item.name,
      description: item.note || `${item.categoryTitle || "Warframe"} Tier ${item.tier}`
    }))
  });

  return (
    <SeoPage
      eyebrow="Tier List"
      title="Tier List Warframe completa"
      description="A experiência principal do site com filtros por tier, objetivo, variante, tipo de arma e busca por nome ou tag."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Ranking interativo" description="Use os filtros para encontrar o melhor investimento para sua conta.">
        <TierListApp tierList={tierList} tierMeta={tierMeta} />
      </SectionBlock>
    </SeoPage>
  );
}
