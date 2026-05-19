import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Sobre o WarframeFool",
  description: "Conheça o WarframeFool: tier list, builds e guias em português para jogadores brasileiros de Warframe.",
  alternates: { canonical: "/sobre" },
  openGraph: {
    title: "Sobre o WarframeFool",
    description: "Tier list, builds e guias em português para Warframe.",
    url: "/sobre"
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre o WarframeFool",
    description: "Tier list, builds e guias em português para jogadores brasileiros de Warframe."
  }
};

export default function SobrePage() {
  return (
    <SeoPage
      eyebrow="Sobre"
      title="Sobre o WarframeFool"
      description="Um projeto independente de fãs para transformar tier list, builds e guias de Warframe em uma ferramenta clara para jogadores brasileiros."
    >
      <SectionBlock title="Objetivo do projeto" description="A proposta é ajudar na decisão de investimento sem fingir que existe uma build universal perfeita.">
        <InfoCardGrid
          cards={[
            { title: "Tier list prática", description: "Ranking focado em uso real, conforto, custo de investimento, Steel Path, farm e bosses.", tags: ["Meta", "Investimento"] },
            { title: "Builds editáveis", description: "Estruturas para registrar builds testadas sem inventar dados fechados ou números sem contexto.", href: "/builds", tags: ["Builds"] },
            { title: "Guias em português", description: "Conteúdo pensado para jogadores brasileiros, com linguagem direta e páginas fáceis de consultar.", href: "/steel-path", tags: ["BR", "Guias"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Avisos importantes" description="Warframe muda com frequência, então o site precisa ser mantido como uma base editável.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Meta muda</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Hotfixes, Rivens, Arcanes, Helminth e balanceamentos podem alterar prioridade de armas e Warframes.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Site não oficial</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Warframe é marca da Digital Extremes. Este site é um projeto independente de fãs.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Dados editáveis</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">As páginas novas usam arquivos em data/ para facilitar manutenção sem mexer no layout.</p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title="Como manter atualizado" description="Arquivos principais para editar conteúdo sem quebrar componentes.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/weapons.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Armas, foco, tiers, Incarnon, custo e links de build.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/warframes.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Warframes por função, variante, prioridade e investimento.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">data/builds.ts</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Builds de Felarx, Laetum, Praedos e futuras páginas de build.</p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title="Hospedagem gratuita e domínio" description="Opções viáveis para manter o projeto online sem serviços pagos obrigatórios.">
        <InfoCardGrid
          cards={[
            { title: "Vercel", description: "Melhor encaixe para Next.js com App Router, deploy automático e domínio vercel.app gratuito.", tags: ["Recomendado"] },
            { title: "Cloudflare Pages", description: "Boa opção gratuita para front-end estático ou builds compatíveis com Cloudflare.", tags: ["Grátis"] },
            { title: "Netlify", description: "Alternativa simples para sites front-end e deploy por Git.", tags: ["Grátis"] },
            { title: "GitHub Pages", description: "Só faz sentido se o projeto for exportado como estático e não depender de API serverless.", tags: ["Estático"] }
          ]}
        />
        <div className="mt-3 rounded-lg border border-border/70 bg-card/70 p-4">
          <h2 className="font-black text-yellow-100">Sugestões de domínio</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            warframefool.com.br, warframefool.com, guiatenno.com.br, tennobuilds.com.br, warframemeta.com.br, warframefool.is-a.dev.
          </p>
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
