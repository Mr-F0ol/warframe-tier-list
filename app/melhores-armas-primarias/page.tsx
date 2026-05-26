import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const primaryWeapons = weaponsByCategory("primary");

export const metadata: Metadata = {
  title: "Melhores Armas Primárias Warframe — Guia Meta",
  description: "Melhores armas primárias para Steel Path, Incarnon, bosses e clear no Warframe.",
  alternates: { canonical: "/melhores-armas-primarias" },
  openGraph: {
    title: "Melhores armas primárias Warframe | Warframe Fool",
    description: "Ranking prático de primárias como Torid Incarnon, Felarx, Latron e Burston.",
    url: "/melhores-armas-primarias"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Armas Primárias Warframe — Guia Meta",
    description: "Melhores armas primárias para Steel Path, Incarnon, bosses e clear no Warframe."
  }
};

export default function MelhoresArmasPrimariasPage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Armas Primárias Warframe",
    description: "Ranking prático de armas primárias para Steel Path, Incarnon, bosses e clear.",
    path: "/melhores-armas-primarias",
    items: primaryWeapons.map(weapon => ({
      name: weapon.name,
      url: weapon.buildHref,
      description: weapon.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Armas primárias"
      title="Melhores armas primárias no Warframe"
      description="Primárias para cada estágio da conta: opções simples para começar, armas consistentes para Steel Path e Incarnon de alto investimento para endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Primárias", href: "/melhores-armas-primarias" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Primárias recomendadas" description="Lista focada em armas que resolvem clear, alvo pesado e consistência no endgame.">
        <RankCardGrid
          items={primaryWeapons.map(weapon => ({
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

      <SectionBlock title="Como priorizar" description="Não é obrigatório investir em todas. Escolha pelo problema que sua conta precisa resolver e revise após updates, hotfixes, Arcanes, Rivens e balanceamentos.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Iniciante</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Priorize uma arma que funcione com mods simples e não dependa de Riven. Consistência vem antes de teto teórico.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Intermediário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Escolha uma primária de clear e mantenha outra resposta para Eximus, bosses ou alvos resistentes.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Endgame</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Só coloque muitas Formas depois de confirmar evoluções Incarnon, mods Galvanized, Arcanes e função real da arma no loadout.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Build Felarx", description: "Estrutura para alvo pesado e bosses.", href: "/builds/felarx" },
          { title: "Incarnon", description: "Veja outras prioridades Incarnon.", href: "/incarnon" },
          { title: "Steel Path", description: "Monte uma base de conta para endgame.", href: "/steel-path" }
        ]}
      />
    </SeoPage>
  );
}
