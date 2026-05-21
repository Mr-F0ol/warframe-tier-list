import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { warframes } from "@/data/warframes";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Melhores Warframes 2026 — Tier List Meta Atual",
  description: "Melhores Warframes para Steel Path, farm, suporte, bosses e conteúdo geral, com foco em investimento seguro no Warframe.",
  alternates: { canonical: "/melhores-warframes" },
  openGraph: {
    title: "Melhores Warframes 2026 | WarframeFool",
    description: "Ranking prático de Warframes normais e Prime para investir com segurança.",
    url: "/melhores-warframes"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Warframes 2026 — Tier List Meta Atual",
    description: "Melhores Warframes para Steel Path, farm, suporte, bosses e conteúdo geral, com foco em investimento seguro no Warframe."
  }
};

export default function MelhoresWarframesPage() {
  const itemListSchema = itemListJsonLd({
    name: "Melhores Warframes 2026",
    description: "Ranking prático de Warframes por função e investimento.",
    path: "/melhores-warframes",
    items: warframes.map(warframe => ({
      name: warframe.name,
      description: warframe.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Warframes"
      title="Melhores Warframes para investir"
      description="Uma visão separada da tier list para escolher Warframes por função: sobrevivência, suporte, farm, dano e conforto no endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Melhores Warframes", href: "/melhores-warframes" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Prioridades atuais" description="Ranking separado para consultar Warframes por função sem abrir a lista completa.">
        <RankCardGrid
          items={warframes.map(warframe => ({
            id: warframe.id,
            name: warframe.name,
            tier: warframe.tier,
            description: warframe.description,
            focus: warframe.focus,
            recommendedFor: warframe.recommendedFor,
            meta: `${warframe.variant} · ${warframe.role}`
          }))}
        />
      </SectionBlock>

      <SectionBlock title="Como usar esta página" description="A melhor escolha depende do que está travando sua conta agora.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="border-l-4 border-l-yellow-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Se você morre muito</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Priorize Dante, Revenant Prime, Wisp Prime ou Citrine antes de perseguir dano máximo.</p>
          </article>
          <article className="border-l-4 border-l-cyan-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Se falta clear</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Saryn Prime, Protea Prime e Xaku ajudam quando o problema é limpar densidade de inimigos.</p>
          </article>
          <article className="border-l-4 border-l-cyan-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Se quer farm</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Khora Prime entra melhor quando sua conta já tem stat-stick, energia e mods de suporte.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Tier List completa", description: "Veja todos os tiers, filtros e detalhes por item.", href: "/tier-list" },
          { title: "Steel Path", description: "Monte uma base segura para conteúdo difícil.", href: "/steel-path" },
          { title: "Builds", description: "Veja estruturas de build para armas meta.", href: "/builds" }
        ]}
      />
    </SeoPage>
  );
}
