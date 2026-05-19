import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Sobre o WarframeFool",
  description: "Conheça o objetivo do WarframeFool: tier list, builds e guias em português para Warframe.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o WarframeFool",
    description: "Tier list, builds e guias em português para Warframe.",
    url: "/sobre"
  }
};

export default function SobrePage() {
  return (
    <SeoPage
      eyebrow="Sobre"
      title="Sobre o WarframeFool"
      description="Um site em português para transformar tier list, builds e guias de Warframe em uma ferramenta fácil de consultar e manter."
    >
      <SectionBlock title="Objetivo do projeto" description="A ideia é ajudar você a decidir investimento sem transformar cada escolha em planilha infinita.">
        <InfoCardGrid
          cards={[
            { title: "Tier list prática", description: "Ranking focado em uso real, conforto, custo de investimento e missões importantes.", tags: ["Meta", "Investimento"] },
            { title: "Builds editáveis", description: "Estruturas para registrar builds testadas sem inventar dados fechados.", href: "/builds", tags: ["Builds"] },
            { title: "Futuro com loadouts", description: "A base Next.js + PostgreSQL já prepara o caminho para salvar combinações online.", href: "/loadouts", tags: ["PostgreSQL"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Como manter atualizado" description="O código foi organizado para mexer em dados sem quebrar layout.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/weapons.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Edite armas, foco, tiers, Incarnon e links de build.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/warframes.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Edite destaques por função, variante e prioridade de investimento.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/builds.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Preencha builds reais depois de testar, sem espalhar texto manual pelas páginas.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Início", description: "Volte para a página principal.", href: "/" },
          { title: "Tier List", description: "Abra o ranking completo.", href: "/tier-list" },
          { title: "Incarnon", description: "Veja prioridades de adaptadores Incarnon.", href: "/incarnon" }
        ]}
      />
    </SeoPage>
  );
}
