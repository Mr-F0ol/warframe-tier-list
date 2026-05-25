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
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Sobre", href: "/sobre" }
      ]}
    >
      <SectionBlock title="Objetivo do projeto" description="A proposta é ajudar na decisão de investimento sem fingir que existe uma build universal perfeita.">
        <InfoCardGrid
          cards={[
            { title: "Tier list prática", description: "Ranking focado em uso real, conforto, custo de investimento, Steel Path, farm e bosses.", tags: ["Meta", "Investimento"] },
            { title: "Builds por objetivo", description: "Estruturas para comparar builds testadas sem inventar números sem contexto.", href: "/builds", tags: ["Builds"] },
            { title: "Guias em português", description: "Conteúdo pensado para jogadores brasileiros, com linguagem direta e páginas fáceis de consultar.", href: "/steel-path", tags: ["BR", "Guias"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Avisos importantes" description="Warframe muda com frequência, então o site precisa ser mantido como uma base revisável.">
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
            <h2 className="font-black text-yellow-100">Conteúdo revisável</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">As recomendações são mantidas como uma base viva para acompanhar mudanças de meta e feedback de uso.</p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title="Como o guia é mantido" description="O foco é explicar prioridade de investimento com linguagem prática e revisão após mudanças relevantes do jogo.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Critério prático</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">As recomendações priorizam força real, conforto, custo de investimento e utilidade em missões comuns.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Revisão de meta</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Hotfixes, novos Primes, Incarnon e Arcanes podem mudar prioridades, então páginas trazem avisos de contexto.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Decisão por conta</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Uma arma tier S pode não ser sua melhor compra se a sua conta precisa primeiro de sobrevivência, energia ou farm.</p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title="Transparência" description="O WarframeFool é um guia de fãs, não uma fonte oficial ou promessa de meta permanente.">
        <InfoCardGrid
          cards={[
            { title: "Sem promessa universal", description: "Builds variam por mods, Arcanes, Rivens, Helminth, estilo de jogo e objetivo da missão.", tags: ["Contexto"] },
            { title: "Conteúdo em português", description: "A linguagem busca ser direta para consulta rápida, especialmente no celular.", tags: ["BR"] },
            { title: "Links internos úteis", description: "As páginas conectam tier list, builds, Incarnon, farm e loadouts para reduzir ida e volta desnecessária.", tags: ["UX"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Tecnologia e manutenção" description="O site foi feito para ser simples de hospedar e fácil de atualizar com dados editáveis.">
        <InfoCardGrid
          cards={[
            { title: "Next.js e Vercel", description: "A estrutura usa Next.js App Router, React, TypeScript e deploy na Vercel.", tags: ["Next.js", "Vercel"] },
            { title: "Dados editáveis", description: "Builds, armas, Warframes, farms, Incarnon e loadouts ficam em arquivos separados para facilitar revisão.", tags: ["Dados"] },
            { title: "Futuro", description: "Login e salvamento em nuvem podem ser adicionados depois com Neon ou Supabase, sem mudar o objetivo principal do guia.", tags: ["Roadmap"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Início", description: "Volte para a página principal.", href: "/" },
          { title: "Tier List", description: "Abra o ranking completo.", href: "/tier-list" },
          { title: "Meta Atual", description: "Veja um resumo rápido das melhores escolhas atuais.", href: "/meta-atual" },
          { title: "Incarnon", description: "Veja prioridades de adaptadores Incarnon.", href: "/incarnon" }
        ]}
      />
    </SeoPage>
  );
}
