import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const meleeWeapons = weaponsByCategory("melee");

export const metadata: Metadata = {
  title: "Melhores Melee Warframe — Guia Meta",
  description: "Melhores armas melee para iniciar com segurança, ganhar mobilidade, montar utilidade e investir em dano ou Incarnon no endgame.",
  alternates: { canonical: "/melhores-melee" },
  openGraph: {
    title: "Melhores melee Warframe | WarframeFool",
    description: "Ranking prático de melee como Glaive Prime, Ceramic Dagger Incarnon, Praedos e Dual Ichor, separando utilidade, dano e investimento.",
    url: "/melhores-melee"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Melee Warframe — Guia Meta",
    description: "Melhores armas melee para iniciar com segurança, ganhar mobilidade, montar utilidade e investir em dano ou Incarnon no endgame."
  }
};

export default function MelhoresMeleePage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Melee Warframe",
    description: "Ranking prático de melee para mobilidade, utilidade, dano, stat-stick, Incarnon e farms repetidos.",
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
      description="Melee por estágio da conta: conforto e mobilidade para começar, utilidade no intermediário e dano, stat-stick ou Incarnon no endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Melee", href: "/melhores-melee" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Melee recomendadas" description="Use esta página para separar melee de dano, utilidade, mobilidade e setups específicos. O meta pode mudar com updates, hotfixes, Arcanes, Rivens, Helminth e balanceamentos.">
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

      <SectionBlock title="Escolha por função" description="Melee no Warframe pode ser dano principal, mobilidade, stat-stick ou ferramenta de setup. O melhor valor depende do que sua conta ainda não cobre.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Iniciante</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Procure uma melee confortável, barata de montar e que ajude a sobreviver enquanto suas armas principais ainda não estão completas.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Intermediário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Praedos e outras opções de utilidade ganham valor quando mobilidade, conforto e repetição de missões importam mais que dano bruto.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Endgame</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Glaive Prime, Dual Ichor Incarnon e Ceramic Dagger Incarnon entram quando a melee tem função definida em dano, clear ou stat-stick.</p>
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
