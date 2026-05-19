import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides } from "@/data/builds";

export const metadata: Metadata = {
  title: "Builds Warframe",
  description: "Guias editáveis de builds para Warframe, começando por Felarx, Laetum e Praedos sem inventar listas falsas de mods.",
  alternates: { canonical: "/builds" },
  openGraph: {
    title: "Builds Warframe | WarframeFool",
    description: "Estruturas de builds em português para organizar investimento e testes.",
    url: "/builds"
  }
};

export default function BuildsPage() {
  return (
    <SeoPage
      eyebrow="Builds"
      title="Builds e estruturas editáveis"
      description="Páginas para organizar objetivos, prioridades de stats e notas reais de teste sem fingir uma build universal perfeita."
    >
      <SectionBlock title="Builds disponíveis" description="Cada página tem slots editáveis no arquivo data/builds.ts para você completar depois com suas builds testadas.">
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

      <SectionBlock title="Por que usar estrutura editável?" description="Builds de Warframe mudam com Riven, Arcanes, Helminth, Evoluções Incarnon e mods disponíveis.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Menos dado falso</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">O site separa prioridade de stats e espaço de anotação, em vez de inventar uma importação de mods não testada.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Mais manutenção</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Você atualiza um arquivo de dados e a página reflete a mudança sem mexer no layout.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Futuro com loadouts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A estrutura conversa com a API de loadouts e PostgreSQL para salvar combinações no futuro.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Loadouts", description: "Área preparada para salvar combinações.", href: "/loadouts" },
          { title: "Incarnon", description: "Priorize adaptadores antes de fechar builds caras.", href: "/incarnon" },
          { title: "Tier List", description: "Volte para o ranking completo.", href: "/tier-list" }
        ]}
      />
    </SeoPage>
  );
}
