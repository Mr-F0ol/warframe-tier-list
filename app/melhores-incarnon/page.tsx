import type { Metadata } from "next";
import { ComparisonPanel } from "@/components/comparison-panel";
import { InfoCardGrid, InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { incarnonPriorities, topIncarnonSetups } from "@/data/incarnon";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Melhores Incarnon Warframe 2026 — Prioridades de Adaptador",
  description: "Ranking de armas Incarnon para priorizar adaptadores, Forma e Catalisador conforme sua conta avança do intermediário ao endgame.",
  alternates: { canonical: "/melhores-incarnon" },
  openGraph: {
    title: "Melhores Incarnon Warframe 2026 | WarframeFool",
    description: "Prioridades de armas Incarnon para investir com clareza em clear, alvo pesado, secundária e mobilidade.",
    url: "/melhores-incarnon"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Incarnon Warframe 2026 — Prioridades de Adaptador",
    description: "Ranking de armas Incarnon para priorizar adaptadores, Forma e Catalisador conforme sua conta avança do intermediário ao endgame."
  }
};

export default function MelhoresIncarnonPage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Incarnon Warframe 2026",
    description: "Prioridades de armas Incarnon para Steel Path, farm, bosses, mobilidade e progressão de investimento.",
    path: "/melhores-incarnon",
    items: incarnonPriorities.map(item => ({
      name: item.name,
      url: item.href,
      description: item.conclusion
    }))
  });

  return (
    <SeoPage
      eyebrow="Incarnon"
      title="Melhores Incarnon Warframe 2026"
      description="Escolha quais armas Incarnon merecem adaptador, Forma e Catalisador primeiro, separando objetivos de iniciante avançando, conta intermediária e endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Incarnon", href: "/incarnon" },
        { label: "Melhores Incarnon", href: "/melhores-incarnon" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Resposta rápida" description="Prioridades simples para decidir onde investir primeiro, sem tratar todo adaptador como obrigatório. Comece pelo que resolve uma função real no seu loadout.">
        <InfoCardGrid cards={topIncarnonSetups} />
      </SectionBlock>

      <SectionBlock title="Ranking de Incarnon" description="Cards por categoria, função, investimento e melhor uso. O meta pode mudar com updates, hotfixes, Arcanes, Rivens, evoluções Incarnon e balanceamentos.">
        <RankCardGrid
          items={incarnonPriorities.map(item => ({
            id: item.id,
            name: item.name,
            tier: item.tier as "S" | "A" | "B" | "C" | "D" | "U",
            description: item.conclusion,
            focus: [item.category, item.role],
            recommendedFor: [item.bestUse, `Dificuldade ${item.difficulty}`, `Investimento ${item.investment}`],
            href: item.href,
            meta: item.category
          }))}
        />
      </SectionBlock>

      <ComparisonPanel />

      <InternalLinks
        links={[
          { title: "Guia Incarnon", description: "Veja a página principal de Incarnon com regras práticas.", href: "/incarnon" },
          { title: "Build Torid Incarnon", description: "Build de clear para Steel Path e missões densas.", href: "/builds/torid-incarnon" },
          { title: "Tier List completa", description: "Compare Incarnon com Warframes e outras armas.", href: "/tier-list" }
        ]}
      />
    </SeoPage>
  );
}
