import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const secondaryWeapons = weaponsByCategory("secondary");

export const metadata: Metadata = {
  title: "Melhores Armas Secundárias Warframe — Guia Meta",
  description: "Melhores secundárias para iniciar com suporte, evoluir com dano reserva e chegar ao endgame com primer, Incarnon e consistência.",
  alternates: { canonical: "/melhores-armas-secundarias" },
  openGraph: {
    title: "Melhores armas secundárias Warframe | WarframeFool",
    description: "Ranking prático de secundárias como Laetum, Dual Toxocyst, Lex Incarnon e Kuva Nukor, com foco em função real no loadout.",
    url: "/melhores-armas-secundarias"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Armas Secundárias Warframe — Guia Meta",
    description: "Melhores secundárias para iniciar com suporte, evoluir com dano reserva e chegar ao endgame com primer, Incarnon e consistência."
  }
};

export default function MelhoresArmasSecundariasPage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Armas Secundárias Warframe",
    description: "Ranking prático de secundárias para suporte, primer, alvo pesado, Steel Path e progressão de conta.",
    path: "/melhores-armas-secundarias",
    items: secondaryWeapons.map(weapon => ({
      name: weapon.name,
      url: weapon.buildHref,
      description: weapon.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Armas secundárias"
      title="Melhores armas secundárias no Warframe"
      description="Secundárias por estágio da conta: suporte simples para iniciar, dano reserva no intermediário e Incarnon ou primer refinado no endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Secundárias", href: "/melhores-armas-secundarias" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Secundárias recomendadas" description="Lista focada em função prática: aplicar status, finalizar alvo pesado, cobrir fraquezas da primária e manter consistência em missões longas. O meta pode mudar com updates, hotfixes, Arcanes, Rivens e balanceamentos.">
        <RankCardGrid
          items={secondaryWeapons.map(weapon => ({
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

      <SectionBlock title="Função da secundária" description="Uma boa secundária não precisa competir com a primária; ela deve resolver o problema que falta no loadout em cada fase da conta.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Iniciante</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use a secundária para suporte: aplicar status, cobrir alcance curto ou finalizar inimigos que sobrevivem ao dano principal.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Intermediário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Priorize uma peça que tenha função clara, como Kuva Nukor para status ou Laetum para dano direto quando a primária não resolve.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Endgame</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Invista em Incarnon, Arcanes e sinergias com Rivens só depois de definir se a secundária será primer, alvo pesado ou clear complementar.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Build Laetum", description: "Estrutura para dano consistente.", href: "/builds/laetum" },
          { title: "Melhores primárias", description: "Combine sua secundária com uma primária de clear ou alvo pesado.", href: "/melhores-armas-primarias" },
          { title: "Loadouts", description: "Salve combinações por objetivo no navegador.", href: "/loadouts" }
        ]}
      />
    </SeoPage>
  );
}
