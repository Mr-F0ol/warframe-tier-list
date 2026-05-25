import type { Metadata } from "next";
import { ComparisonPanel } from "@/components/comparison-panel";
import { InfoCardGrid, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { topIncarnonSetups } from "@/data/incarnon";
import { siteMeta } from "@/data/siteMeta";
import { warframes } from "@/data/warframes";
import { weapons } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Meta Atual Warframe 2026 — Warframes, Armas, Incarnon e Setups",
  description: "Resumo do meta atual de Warframe com escolhas para iniciante, intermediário e endgame em Warframes, armas, Incarnon e setups.",
  alternates: { canonical: "/meta-atual" },
  openGraph: {
    title: "Meta Atual Warframe 2026 | WarframeFool",
    description: "Resumo rápido do meta atual para decidir investimentos sem esquecer que updates, hotfixes e balanceamentos podem mudar prioridades.",
    url: "/meta-atual"
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Atual Warframe 2026 — Warframes, Armas, Incarnon e Setups",
    description: "Resumo do meta atual de Warframe com escolhas para iniciante, intermediário e endgame em Warframes, armas, Incarnon e setups."
  }
};

const topWarframes = warframes.filter(item => item.tier === "S").slice(0, 5);
const topPrimaries = weapons.filter(item => item.category === "primary" && item.tier === "S").slice(0, 5);
const topSecondaries = weapons.filter(item => item.category === "secondary" && item.tier === "S").slice(0, 5);
const topMelee = weapons.filter(item => item.category === "melee" && item.tier === "S").slice(0, 5);

const setups = [
  { title: "Melhor setup geral", description: "Para conta intermediária e endgame, combine Warframe seguro, primária de clear, secundária de alvo pesado e melee de mobilidade. Ajuste conforme seus Arcanes, Rivens e Helminth.", href: "/loadouts", tags: ["Geral"] },
  { title: "Melhor setup para Steel Path", description: "Iniciante no Steel Path deve priorizar sobrevivência. Depois entram clear, controle de Eximus e dano dedicado contra alvos resistentes.", href: "/steel-path", tags: ["Steel Path"] },
  { title: "Melhor setup para boss", description: "Use uma base defensiva e uma arma de alvo único como Felarx ou Laetum quando a missão pedir dano direto, sem depender de números exatos de meta.", href: "/builds/felarx", tags: ["Boss"] },
  { title: "Melhor setup para farm", description: "No começo, escolha segurança. No intermediário, adicione clear. No endgame, otimize mobilidade e repetição com Warframes e armas que reduzem tempo de missão.", href: "/farm", tags: ["Farm"] }
];

export default function MetaAtualPage() {
  const itemListSchema = itemListJsonLd({
    name: "Meta Atual Warframe 2026",
    description: "Resumo de top escolhas para Warframes, armas, Incarnon e setups por estágio de conta.",
    path: "/meta-atual",
    items: [...topWarframes, ...topPrimaries, ...topSecondaries, ...topMelee].map(item => ({
      name: item.name,
      description: item.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Meta"
      title="Meta Atual Warframe 2026"
      description="Resumo direto para escolher Warframes, armas, Incarnon e setups por objetivo, diferenciando iniciante, intermediário e endgame."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Meta Atual", href: "/meta-atual" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Base do meta" description={`Revisado em ${siteMeta.lastUpdated} com base em ${siteMeta.updateBase}. Use como prioridade geral, não como regra absoluta para toda conta.`}>
        <InfoCardGrid
          cards={[
            { title: "Iniciante", description: "Priorize sobrevivência, armas simples e builds que funcionam sem muitas Formas.", tags: ["Segurança"] },
            { title: "Intermediário", description: "Comece a separar clear, alvo pesado, suporte e farm em loadouts diferentes.", tags: ["Consistência"] },
            { title: "Endgame", description: "Otimize Arcanes, Rivens, Incarnon, Helminth e elementos por missão.", tags: ["Otimização"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Top Warframes" description="Iniciante deve priorizar segurança e facilidade. Intermediário pode buscar dano e controle. Endgame otimiza Arcanes, Helminth e variações conforme missão.">
        <RankCardGrid items={topWarframes.map(item => ({ id: item.id, name: item.name, tier: item.tier, description: item.description, focus: item.focus, recommendedFor: item.recommendedFor, meta: item.role }))} />
      </SectionBlock>

      <SectionBlock title="Top Primárias" description="Primárias fortes servem para clear, Steel Path e alvo pesado, mas o investimento deve acompanhar seus mods, Forma disponível e objetivo real.">
        <RankCardGrid items={topPrimaries.map(toWeaponRankCard)} />
      </SectionBlock>

      <SectionBlock title="Top Secundárias" description="Secundárias podem ser primer, dano reserva ou finalização de alvo pesado. Não invista pesado sem saber qual função ela vai cumprir.">
        <RankCardGrid items={topSecondaries.map(toWeaponRankCard)} />
      </SectionBlock>

      <SectionBlock title="Top Melee" description="Melee entra como conforto, mobilidade, stat-stick ou dano principal. O valor muda bastante com Rivens, Arcanes e balanceamentos.">
        <RankCardGrid items={topMelee.map(toWeaponRankCard)} />
      </SectionBlock>

      <SectionBlock title="Top Incarnon" description="Prioridades rápidas de adaptador e investimento. Updates, hotfixes, evoluções Incarnon, Arcanes e balanceamentos podem mudar esta ordem.">
        <InfoCardGrid cards={topIncarnonSetups} />
      </SectionBlock>

      <SectionBlock title="Setups recomendados" description="Combinações práticas para objetivos comuns. Use como base editável, não como regra fixa para todas as contas.">
        <InfoCardGrid cards={setups} />
      </SectionBlock>

      <ComparisonPanel />
    </SeoPage>
  );
}

function toWeaponRankCard(weapon: typeof weapons[number]) {
  return {
    id: weapon.id,
    name: weapon.name,
    tier: weapon.tier,
    description: weapon.description,
    focus: weapon.focus,
    recommendedFor: weapon.recommendedFor,
    href: weapon.buildHref,
    meta: `${weapon.categoryLabel} · ${weapon.type}`
  };
}
