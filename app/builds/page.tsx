import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides } from "@/data/builds";
import { siteMeta } from "@/data/siteMeta";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Builds Warframe — Guias para Steel Path, Bosses e Farm",
  description: "Guias de builds Warframe com objetivo, prioridade de stats, mods principais, substituições e observações de meta.",
  alternates: { canonical: "/builds" },
  openGraph: {
    title: "Builds Warframe | WarframeFool",
    description: "Guias em português para escolher builds de Steel Path, bosses, farm e missões rápidas.",
    url: "/builds"
  },
  twitter: {
    card: "summary_large_image",
    title: "Builds Warframe — Guias para Steel Path, Bosses e Farm",
    description: "Guias de builds Warframe com objetivo, prioridade de stats, mods principais, substituições e observações de meta."
  }
};

export default function BuildsPage() {
  const itemListSchema = itemListJsonLd({
    name: "Builds Warframe",
    description: "Guias de builds do WarframeFool para Steel Path, bosses, farm e mobilidade.",
    path: "/builds",
    items: buildGuides.map(build => ({
      name: `Build ${build.name} Warframe`,
      url: `/builds/${build.slug}`,
      description: build.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Builds"
      title="Builds Warframe"
      description="Cada build mostra objetivo, prioridade de stats e recomendações práticas para você adaptar à sua conta."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Builds", href: "/builds" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Guias disponíveis" description="Use as builds como base e ajuste conforme seus mods, Arcanes, Rivens e estilo de jogo.">
        <RankCardGrid
          items={buildGuides.map(build => ({
            id: build.slug,
            name: build.name,
            tier: build.tier,
            description: build.description,
            focus: build.bestFor,
            recommendedFor: build.statPriority.slice(0, 4),
            href: `/builds/${build.slug}`,
            meta: build.category
          }))}
        />
      </SectionBlock>

      <SectionBlock title="Próximos guias planejados" description="Cards sem link quebrado: quando o guia detalhado existir, ele entra na lista principal.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {plannedBuilds.map(build => (
            <article key={build.name} className="border border-border/70 bg-card/70 p-4">
              <span className="text-[11px] font-bold uppercase text-cyan-200/75">{build.category}</span>
              <h2 className="mt-1 text-xl font-black text-foreground">{build.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{build.description}</p>
              <div className="mt-4 inline-flex rounded-md border border-border/70 bg-background/45 px-2 py-1 text-xs font-bold uppercase text-muted-foreground">
                Guia em preparação
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Como usar os guias de build" description={`Base revisada em ${siteMeta.lastUpdated} para ${siteMeta.updateBase}. Atualizações do jogo podem mudar o meta, então revise antes de investir Forma.`}>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Escolha pelo objetivo</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Antes de gastar Forma, veja se a build resolve Steel Path, boss, farm ou mobilidade.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Adapte à sua conta</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use os mods principais como base e troque por substituições baratas quando faltar recurso.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Revise após hotfix</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Meta muda com Arcanes, Rivens, Incarnon e balanceamentos; valide antes de fechar investimento alto.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Loadouts", description: "Monte combinações para Steel Path, Farm e bosses.", href: "/loadouts" },
          { title: "Incarnon", description: "Priorize adaptadores antes de fechar builds caras.", href: "/incarnon" },
          { title: "Tier List", description: "Volte para o ranking completo.", href: "/tier-list" }
        ]}
      />
    </SeoPage>
  );
}

const plannedBuilds = [
  {
    name: "Dual Toxocyst Incarnon",
    category: "Secundária Incarnon",
    description: "Guia futuro para secundária de clear, status e missões com alta densidade de inimigos."
  },
  {
    name: "Ceramic Dagger Incarnon",
    category: "Melee Incarnon",
    description: "Guia futuro para uso como stat-stick, utilidade e builds específicas de endgame."
  },
  {
    name: "Glaive Prime",
    category: "Melee",
    description: "Guia futuro para melee arremessável, dano e variações por conforto de gameplay."
  },
  {
    name: "Dante",
    category: "Warframe",
    description: "Guia futuro para segurança, dano em área e uso geral em Steel Path."
  },
  {
    name: "Revenant Prime",
    category: "Warframe Prime",
    description: "Guia futuro para sobrevivência simples, conteúdo solo e entrada segura no Steel Path."
  },
  {
    name: "Wisp Prime",
    category: "Warframe Prime",
    description: "Guia futuro para suporte, buffs de squad, bosses e missões longas."
  },
  {
    name: "Saryn Prime",
    category: "Warframe Prime",
    description: "Guia futuro para clear, farm de foco e missões com grande densidade de inimigos."
  },
  {
    name: "Nautilus Prime",
    category: "Companheiro",
    description: "Guia futuro para suporte, agrupamento de inimigos e conforto em loadouts de farm."
  }
];
