import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const meleeWeapons = weaponsByCategory("melee");

export const metadata: Metadata = {
  title: "Melhores Melee Warframe — Guia Meta",
  description: "Melhores armas melee para Steel Path, utilidade, stat-stick, Incarnon e farm no Warframe.",
  alternates: { canonical: "/melhores-melee" },
  openGraph: {
    title: "Melhores melee Warframe | WarframeFool",
    description: "Ranking prático de melee como Glaive Prime, Ceramic Dagger Incarnon, Praedos e Dual Ichor.",
    url: "/melhores-melee"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Melee Warframe — Guia Meta",
    description: "Melhores armas melee para Steel Path, utilidade, stat-stick, Incarnon e farm no Warframe."
  }
};

export default function MelhoresMeleePage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Melee Warframe",
    description: "Ranking prático de melee para dano, utilidade, stat-stick, Incarnon e farm.",
    path: "/melhores-melee",
    items: meleeWeapons.map(weapon => ({
      name: weapon.name,
      url: weapon.buildHref,
      description: weapon.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Melee"
      title="Melhores armas melee no Warframe"
      description="Melee para dano, utilidade, mobilidade, stat-stick e farms repetidos, sem perder o foco em investimento real."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Melee", href: "/melhores-melee" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Melee recomendadas" description="Use esta página para separar melee de dano, utilidade e setups específicos.">
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

      <SectionBlock title="Escolha por função" description="Melee no Warframe pode ser dano principal, mobilidade ou ferramenta de setup.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Utilidade</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Praedos é valiosa mesmo fora de uma build melee pura por causa de conforto e deslocamento.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Stat-stick</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Ceramic Dagger Incarnon ganha valor em Warframes e setups específicos.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Dano e clear</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Glaive Prime e Dual Ichor Incarnon entram quando a melee realmente vai matar inimigos.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Build Praedos", description: "Estrutura para mobilidade e utilidade.", href: "/builds/praedos" },
          { title: "Farm", description: "Veja como mobilidade ajuda em farms repetidos.", href: "/farm-creditos" },
          { title: "Incarnon", description: "Veja melee e armas Incarnon em uma lista só.", href: "/incarnon" }
        ]}
      />
    </SeoPage>
  );
}
