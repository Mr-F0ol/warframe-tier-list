import { GuideSections } from "@/components/guide-sections";
import { MetaStatus } from "@/components/meta-status";
import { QuickPicks } from "@/components/quick-picks";
import { Sources } from "@/components/sources";
import { StructuredData } from "@/components/structured-data";
import { TierListApp } from "@/components/tier-list-app";
import { getTierListData, getTierMetaData } from "@/lib/tier-data";
import { buildItemIndex } from "@/lib/tier-utils";

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
              Tier List Warframe
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/90 sm:text-lg">
              Ranking prático para escolher onde gastar Forma, Catalisador e tempo em Steel Path, Archimedea, farm, bosses e missões longas.
            </p>
            <div className="mt-7 grid max-w-4xl gap-2 sm:grid-cols-3">
              <HeroMetric label="Warframes" value="Normal + Prime" />
              <HeroMetric label="Armas" value="Incarnon, Kuva e Tenet" />
              <HeroMetric label="Foco" value="Meta, conforto e custo" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-[min(1180px,calc(100%-32px))] pb-10 pt-6">
        <MetaStatus />
        <QuickPicks itemIndex={itemIndex} />
        <section id="tier-list" className="scroll-mt-24">
          <TierListApp tierList={tierList} tierMeta={tierMeta} />
        </section>
        <GuideSections />
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
