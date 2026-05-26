import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides } from "@/data/builds";
import { siteMeta } from "@/data/siteMeta";
import { itemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Builds Warframe — Guias de Armas e Warframes",
  description: "Guias de builds Warframe em português com foco, mods-chave, Arcanes, substituições e observações para Steel Path, bosses e farm.",
  alternates: { canonical: "/builds" },
  openGraph: {
    title: "Builds Warframe — Guias de Armas e Warframes",
    description: "Guias em português para escolher builds de Steel Path, bosses, farm e missões rápidas.",
    url: "/builds"
  },
  twitter: {
    card: "summary_large_image",
    title: "Builds Warframe — Guias de Armas e Warframes",
    description: "Guias de builds Warframe em português com foco, mods-chave, Arcanes, substituições e observações para Steel Path, bosses e farm."
  }
};

export default function BuildsPage() {
  const itemListSchema = itemListJsonLd({
    name: "Builds Warframe",
    description: "Guias de builds do Warframe Fool para Steel Path, bosses, farm e mobilidade.",
    path: "/builds",
    items: buildGuides.map(build => ({
      name: `Build ${build.name} Warframe`,
      url: `/builds/${build.slug}`,
      description: build.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Builds"
      title="Builds Warframe"
      description="Cada build mostra objetivo, prioridade de stats e recomendações práticas para você adaptar à sua conta."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Builds", href: "/builds" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Guias disponíveis" description="Use as builds como base e ajuste conforme seus mods, Arcanes, Rivens e estilo de jogo.">
        <RankCardGrid
          items={buildGuides.map(build => ({
            id: build.slug,
            name: build.name,
            tier: build.tier,
            description: buildCardText(build.slug).description,
            focus: buildCardText(build.slug).focus,
            recommendedFor: buildCardText(build.slug).mods,
            href: `/builds/${build.slug}`,
            meta: build.category,
            detailLabel: "Mods-chave"
          }))}
        />
      </SectionBlock>

      <SectionBlock title="Próximos guias planejados" description="Cards sem link quebrado: quando o guia detalhado existir, ele entra na lista principal.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {plannedBuilds.map(build => (
            <article key={build.name} className="border border-border/70 bg-card/70 p-4">
              <span className="text-[11px] font-bold uppercase text-cyan-200/75">{build.category}</span>
              <h2 className="mt-1 text-xl font-black text-foreground">{build.name}</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{build.description}</p>
              <div className="mt-4 inline-flex rounded-md border border-border/70 bg-background/45 px-2 py-1 text-xs font-bold uppercase text-muted-foreground">
                Guia em preparação
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Como usar os guias de build" description={`Base revisada em ${siteMeta.lastUpdated} para ${siteMeta.updateBase}. Atualizações do jogo podem mudar o meta, então revise antes de investir Forma.`}>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Escolha pelo objetivo</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Antes de gastar Forma, veja se a build resolve Steel Path, boss, farm ou mobilidade.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Adapte à sua conta</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Use os mods principais como base e troque por substituições baratas quando faltar recurso.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Revise após hotfix</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Meta muda com Arcanes, Rivens, Incarnon e balanceamentos; valide antes de fechar investimento alto.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Loadouts", description: "Monte combinações para Steel Path, Farm e bosses.", href: "/loadouts" },
          { title: "Incarnon", description: "Priorize adaptadores antes de fechar builds caras.", href: "/incarnon" },
          { title: "Tier List", description: "Volte para o ranking completo.", href: "/tier-list" },
          { title: "Progressão", description: "Veja quando investir em mods, Incarnon, Steel Path e builds caras.", href: "/progressao" },
          { title: "Farm", description: "Prepare créditos, Endo, Kuva e recursos antes de fechar builds.", href: "/farm" }
        ]}
      />
    </SeoPage>
  );
}

const plannedBuilds = [
  {
    name: "Glaive Prime",
    category: "Melee",
    description: "Guia futuro para melee arremessável, dano e variações por conforto de gameplay."
  },
  {
    name: "Dante",
    category: "Warframe",
    description: "Guia futuro para segurança, dano em área e uso geral em Steel Path."
  },
  {
    name: "Revenant Prime",
    category: "Warframe Prime",
    description: "Guia futuro para sobrevivência simples, conteúdo solo e entrada segura no Steel Path."
  },
  {
    name: "Wisp Prime",
    category: "Warframe Prime",
    description: "Guia futuro para suporte, buffs de squad, bosses e missões longas."
  },
  {
    name: "Saryn Prime",
    category: "Warframe Prime",
    description: "Guia futuro para clear, farm de foco e missões com grande densidade de inimigos."
  },
  {
    name: "Nautilus Prime",
    category: "Companheiro",
    description: "Guia futuro para suporte, agrupamento de inimigos e conforto em loadouts de farm."
  }
];

function buildCardText(slug: string) {
  const content: Record<string, { description: string; focus: string[]; mods: string[] }> = {
    felarx: {
      description: "Foco: dano alto em alvo único, bosses e Steel Path. Arcanes recomendados: Primary Deadhead ou Primary Merciless.",
      focus: ["Alvo único", "Bosses", "Steel Path"],
      mods: ["Galvanized Hell", "Galvanized Savvy", "Primed Point Blank", "Critical Deceleration"]
    },
    "torid-incarnon": {
      description: "Foco: clear de grupos, status, missões longas e Steel Path. Arcanes recomendados: Primary Merciless ou Primary Deadhead.",
      focus: ["Clear", "Status", "Missões longas"],
      mods: ["Galvanized Chamber", "Galvanized Aptitude", "Critical Delay", "Vital Sense"]
    },
    laetum: {
      description: "Foco: secundária forte para alvo único, bosses e conteúdo avançado. Arcanes recomendados: Secondary Merciless ou Secondary Deadhead.",
      focus: ["Secundária", "Alvo único", "Bosses"],
      mods: ["Galvanized Diffusion", "Galvanized Shot", "Lethal Torrent", "Elementos por facção"]
    },
    praedos: {
      description: "Foco: mobilidade, melee confortável, combo/status e utilidade geral para farms e missões rápidas.",
      focus: ["Mobilidade", "Combo/status", "Utilidade"],
      mods: ["Blood Rush", "Condition Overload", "Weeping Wounds", "Organ Shatter"]
    },
    "dual-toxocyst-incarnon": {
      description: "Foco: secundária Incarnon de dano sustentado, alvo único e conteúdo avançado quando você mantém o ritmo da arma.",
      focus: ["Secundária", "Dano sustentado", "Steel Path"],
      mods: ["Galvanized Diffusion", "Galvanized Shot", "Lethal Torrent", "Primed Target Cracker"]
    },
    "ceramic-dagger-incarnon": {
      description: "Foco: melee utilitária, sinergias Incarnon, dano com investimento e suporte para setups específicos.",
      focus: ["Melee", "Sinergia", "Endgame"],
      mods: ["Condition Overload", "Blood Rush", "Weeping Wounds", "Primed Reach"]
    }
  };

  return content[slug] || {
    description: "Build com função definida, mods principais, substituições e observações para adaptar à sua conta.",
    focus: ["Steel Path", "Farm", "Conteúdo geral"],
    mods: ["Mods principais", "Substituições", "Arcanes", "Ajustes por facção"]
  };
}
