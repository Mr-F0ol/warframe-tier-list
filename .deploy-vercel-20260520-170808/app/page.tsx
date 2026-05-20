import type { Metadata } from "next";
import Link from "next/link";
import { GuideSections } from "@/components/guide-sections";
import { MetaStatus } from "@/components/meta-status";
import { QuickPicks } from "@/components/quick-picks";
import { Sources } from "@/components/sources";
import { StructuredData } from "@/components/structured-data";
import { TierListApp } from "@/components/tier-list-app";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getTierListData, getTierMetaData } from "@/lib/tier-data";
import { buildItemIndex } from "@/lib/tier-utils";

export const metadata: Metadata = {
  title: "WarframeFool — Tier List Warframe 2026, Builds e Guias em Português",
  description: "Guia brasileiro de Warframe com tier list 2026, builds, Incarnon, farm, Steel Path e loadouts para organizar seus investimentos.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "WarframeFool — Tier List Warframe 2026, Builds e Guias em Português",
    description: "Tier list, builds, Incarnon, farm e loadouts em português para Warframe.",
    url: "/"
  }
};

export default async function HomePage() {
  const [tierList, tierMeta] = await Promise.all([getTierListData(), getTierMetaData()]);
  const itemIndex = buildItemIndex(tierList);

  return (
    <>
      <StructuredData />
      <header id="top" className="hero-bg relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
        <div className="relative mx-auto grid min-h-[440px] w-[min(1180px,calc(100%-32px))] content-between py-7 sm:min-h-[480px]">

          <div className="pb-10 pt-12 sm:pt-16">
            <span className="inline-flex border border-cyan-300/40 bg-background/75 px-3 py-2 text-xs font-bold uppercase tracking-normal text-cyan-100 shadow-[0_10px_40px_rgba(0,0,0,.28)] backdrop-blur">
              Atualizado em 18 maio 2026 - Meta Update 42.0.10
            </span>
            <h1 className="mt-5 max-w-4xl text-5xl font-black tracking-normal text-foreground drop-shadow-2xl sm:text-6xl md:text-7xl">
              WarframeFool
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/90 sm:text-lg">
              Tier List Warframe 2026, builds e guias em português para decidir onde gastar Forma, Catalisador e tempo em Steel Path, farm, bosses e missões rápidas.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild>
                <Link href="/tier-list">Abrir Tier List</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/builds">Ver Builds</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/incarnon">Prioridade Incarnon</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/farm">Guias de Farm</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/loadouts">Meus Loadouts</Link>
              </Button>
            </div>
            <div className="mt-7 grid max-w-4xl gap-2 sm:grid-cols-3">
              <HeroMetric label="Warframes" value="Normal + Prime" />
              <HeroMetric label="Armas" value="Incarnon, Kuva e Tenet" />
              <HeroMetric label="Foco" value="Meta, conforto e custo" />
            </div>
          </div>
        </div>
      </header>

      <main id="conteudo" className="mx-auto w-[min(1180px,calc(100%-32px))] scroll-mt-24 pb-10 pt-6">
        <MetaStatus />
        <QuickPicks itemIndex={itemIndex} />
        <section id="tier-list" className="mt-8 scroll-mt-24">
          <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-black">
              Tier List Warframe 2026
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                Ranking interativo com filtros por tier, função, variante, categoria de arma e busca.
              </span>
            </h2>
            <Badge variant="meta">Meta atual</Badge>
          </div>
          <TierListApp tierList={tierList} tierMeta={tierMeta} />
        </section>
        <GuideSections />
        <section className="mt-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl font-black">
              Guias principais
              <span className="mt-1 block text-sm font-normal text-muted-foreground">
                Atalhos para as páginas que concentram as decisões mais importantes da conta.
              </span>
            </h2>
            <Badge variant="outline">Meta muda após hotfixes</Badge>
          </div>
          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            <GuideLink href="/tier-list" title="Tier List completa" description="Ranking com filtros por tier, função, variante, arma e busca por nome." />
            <GuideLink href="/builds" title="Builds recomendadas" description="Estruturas para Felarx, Laetum, Praedos e futuras builds testadas." />
            <GuideLink href="/incarnon" title="Armas Incarnon" description="Priorize adaptadores que realmente mudam Steel Path, bosses e farm." />
            <GuideLink href="/farm" title="Farm Warframe" description="Rotas e prioridades para créditos, recursos e repetição eficiente." />
            <GuideLink href="/farm-foco-warframe" title="Farm de Foco" description="Lentes, convergência e métodos para evoluir escolas do Operador." />
            <GuideLink href="/melhor-escola-warframe" title="Melhor Escola" description="Compare Zenurik, Madurai, Unairu, Vazarin e Naramon por objetivo." />
            <GuideLink href="/melhor-amp-operador-warframe" title="Melhor Amp" description="Entenda combinações 1-2-3, 5-4-7 e 7-4-7 para Operador." />
            <GuideLink href="/steel-path" title="Steel Path" description="Base segura para sobrevivência, dano e investimento de endgame." />
            <GuideLink href="/loadouts" title="Loadouts" description="Salve suas combinações favoritas e consulte depois." />
          </div>
        </section>
        <section className="mt-8 rounded-lg border border-yellow-300/20 bg-yellow-300/10 p-4">
          <h2 className="text-lg font-black text-yellow-100">Aviso de meta</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
            Warframe muda com hotfixes, Rivens, Arcanes e novos Incarnon. Use o WarframeFool como guia prático de prioridade e valide builds caras na sua própria conta.
          </p>
        </section>
        <Sources />
      </main>
    </>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-background/62 p-3 shadow-[0_18px_50px_rgba(0,0,0,.24)] backdrop-blur">
      <span className="block text-[10px] font-bold uppercase text-muted-foreground">{label}</span>
      <strong className="mt-1 block text-sm text-yellow-100">{value}</strong>
    </div>
  );
}

function GuideLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      <Card className="h-full p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35">
        <h3 className="text-lg font-black text-yellow-100">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
      </Card>
    </Link>
  );
}
