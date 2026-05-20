import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides } from "@/data/builds";

export const metadata: Metadata = {
  title: "Builds Warframe — Guias para Steel Path, Bosses e Farm",
  description: "Builds Warframe em português com objetivo, mods principais, substituições, Arcanes, elemento recomendado e Forma aproximada.",
  alternates: { canonical: "/builds" },
  openGraph: {
    title: "Builds Warframe | WarframeFool",
    description: "Estruturas de builds em português para organizar investimento, Steel Path, bosses e farm.",
    url: "/builds"
  }
};

export default function BuildsPage() {
  return (
    <SeoPage
      eyebrow="Builds"
      title="Builds Warframe"
      description="Páginas para organizar objetivos, prioridades de stats, substituições baratas e notas de teste sem depender de uma build universal perfeita."
    >
      <SectionBlock title="Builds disponíveis" description="Cada página segue uma estrutura pronta para comparar objetivo, mods, arcanes, elemento e custo de Forma.">
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

      <SectionBlock title="Por que usar estrutura padrão?" description="Builds de Warframe mudam com Riven, Arcanes, Helminth, Evoluções Incarnon e mods disponíveis.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Menos dado falso</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">O site separa prioridade de stats e espaço de anotação, em vez de inventar uma importação de mods não testada.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Mais fácil de revisar</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A mesma estrutura deixa claro o que mudou: objetivo, elemento, custo, Arcanes ou substituições.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Integração com loadouts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use as páginas de build para decidir o setup e depois salve combinações no navegador.</p>
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
