import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides } from "@/data/builds";

export const metadata: Metadata = {
  title: "Builds Warframe — Guias para Steel Path, Bosses e Farm",
  description: "Guias de builds Warframe com objetivo, prioridade de stats, mods principais, substituições e observações de meta.",
  alternates: { canonical: "/builds" },
  openGraph: {
    title: "Builds Warframe | WarframeFool",
    description: "Guias em português para escolher builds de Steel Path, bosses, farm e missões rápidas.",
    url: "/builds"
  }
};

export default function BuildsPage() {
  return (
    <SeoPage
      eyebrow="Builds"
      title="Builds Warframe"
      description="Cada build mostra objetivo, prioridade de stats, pontos fortes e variações para você adaptar à sua conta."
    >
      <SectionBlock title="Guias disponíveis" description="Compare objetivo, melhor uso, mods principais, Arcanes, elemento recomendado e custo aproximado antes de investir Forma.">
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

      <SectionBlock title="Como usar os guias de build" description="Builds de Warframe mudam com Riven, Arcanes, Helminth, Evoluções Incarnon e mods disponíveis.">
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
