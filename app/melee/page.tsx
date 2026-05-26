import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const meleeWeapons = weaponsByCategory("melee");

export const metadata: Metadata = {
  title: "Melee Warframe — Melhores Armas para Dano, Mobilidade e Farm",
  description: "Guia de melee Warframe com armas recomendadas para dano, utilidade, stat-stick, Incarnon, Steel Path e farm.",
  alternates: { canonical: "/melee" },
  openGraph: {
    title: "Melee Warframe | Warframe Fool",
    description: "Melhores melee para dano, mobilidade, stat-stick e farms repetidos.",
    url: "/melee"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melee Warframe — Melhores Armas para Dano, Mobilidade e Farm",
    description: "Guia de melee Warframe com armas recomendadas para dano, utilidade, stat-stick, Incarnon, Steel Path e farm."
  }
};

export default function MeleePage() {
  const itemListSchema = itemListJsonLd({
    name: "Melee Warframe",
    description: "Guia de melee Warframe com armas recomendadas por função.",
    path: "/melee",
    items: meleeWeapons.map(weapon => ({
      name: weapon.name,
      url: weapon.buildHref,
      description: weapon.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Melee"
      title="Melee Warframe"
      description="Escolha melee por função real: dano, mobilidade, stat-stick, utilidade ou conforto em farms repetidos."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Melee", href: "/melee" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Melee recomendadas" description="A lista abaixo usa os mesmos dados principais do Warframe Fool para manter consistência com a tier list.">
        <RankCardGrid
          items={meleeWeapons.map(weapon => ({
            id: weapon.id,
            name: weapon.name,
            tier: weapon.tier,
            description: weapon.description,
            focus: weapon.focus,
            recommendedFor: weapon.recommendedFor,
            href: weapon.buildHref,
            meta: `${weapon.type} · ${weapon.buildDifficulty}`
          }))}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhores melee", description: "Página completa de comparação das armas melee.", href: "/melhores-melee" },
          { title: "Build Praedos", description: "Estrutura para mobilidade e utilidade.", href: "/builds/praedos" },
          { title: "Farm", description: "Veja quando mobilidade acelera rotas repetidas.", href: "/farm" }
        ]}
      />
    </SeoPage>
  );
}
