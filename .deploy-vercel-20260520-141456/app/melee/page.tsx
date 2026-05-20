import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";

const meleeWeapons = weaponsByCategory("melee");

export const metadata: Metadata = {
  title: "Melee Warframe — Melhores Armas para Dano, Mobilidade e Farm",
  description: "Guia de melee Warframe com armas recomendadas para dano, utilidade, stat-stick, Incarnon, Steel Path e farm.",
  alternates: { canonical: "/melee" },
  openGraph: {
    title: "Melee Warframe | WarframeFool",
    description: "Melhores melee para dano, mobilidade, stat-stick e farms repetidos.",
    url: "/melee"
  }
};

export default function MeleePage() {
  return (
    <SeoPage
      eyebrow="Melee"
      title="Melee Warframe"
      description="Escolha melee por função real: dano, mobilidade, stat-stick, utilidade ou conforto em farms repetidos."
    >
      <SectionBlock title="Melee recomendadas" description="A lista abaixo usa os mesmos dados principais do WarframeFool para manter consistência com a tier list.">
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
