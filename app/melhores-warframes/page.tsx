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
      description="Uma visão separada da tier list para escolher Warframes por estágio da conta: segurança para iniciante, consistência para intermediário e otimização para endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Tier List", href: "/tier-list" },
        { label: "Melhores Warframes", href: "/melhores-warframes" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Prioridades atuais" description="Ranking separado para consultar Warframes por função, investimento e momento da conta sem abrir a lista completa.">
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

      <SectionBlock title="Como usar esta página" description="A melhor escolha depende do que está travando sua conta agora e pode mudar com updates, hotfixes, Arcanes, Rivens, Helminth e balanceamentos.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="border-l-4 border-l-yellow-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Iniciante</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Se você morre muito, priorize Warframes seguros antes de perseguir dano máximo. Sobreviver acelera mais do que uma build cara que falha.</p>
          </article>
          <article className="border-l-4 border-l-cyan-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Intermediário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Quando a sobrevivência já está estável, escolha Warframes de clear, suporte ou farm conforme o conteúdo que você mais repete.</p>
          </article>
          <article className="border-l-4 border-l-cyan-300 bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Endgame</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">No endgame, invista em variações por missão: Steel Path, farm, boss, suporte e builds afetadas por Helminth, Arcanes e hotfixes.</p>
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
