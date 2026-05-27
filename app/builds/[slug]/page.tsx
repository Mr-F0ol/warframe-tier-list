import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyLinkButton } from "@/components/copy-link-button";
import { FaqSection, GuideCardGrid, GuideCtaRow, NextGuideLinks } from "@/components/guide-ui";
import { Badge } from "@/components/ui/badge";
import { SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { getBuildGuide } from "@/data/builds";
import { siteMeta } from "@/data/siteMeta";
import { articleJsonLd } from "@/lib/seo";

interface BuildPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BuildPageProps): Promise<Metadata> {
  const { slug } = await params;
  const build = getBuildGuide(slug);
  if (!build) return {};

  const title = build.seoTitle || `Build ${build.name} Warframe — Meta Steel Path`;

  return {
    title,
    description: build.description,
    alternates: { canonical: `/builds/${build.slug}` },
    openGraph: {
      title: `${title} | Warframe Fool`,
      description: build.description,
      url: `/builds/${build.slug}`
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: build.description
    }
  };
}

export default async function BuildDetailPage({ params }: BuildPageProps) {
  const { slug } = await params;
  const build = getBuildGuide(slug);
  if (!build) notFound();

  const buildUrl = `https://warframefool.vercel.app/builds/${build.slug}`;
  const title = `Build ${build.name} Warframe`;
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Builds", href: "/builds" },
    { label: build.name, href: `/builds/${build.slug}` }
  ];
  const articleSchema = articleJsonLd({
    title: build.seoTitle || title,
    description: build.description,
    path: `/builds/${build.slug}`
  });

  return (
    <SeoPage eyebrow="Build" title={title} description={build.description} breadcrumbs={breadcrumbs} structuredData={articleSchema}>
      <SectionBlock title="Resposta rápida" description="Resumo direto para decidir se esta build merece investimento agora.">
        <GuideCardGrid items={quickAnswerItems(build)} />
        <GuideCtaRow
          items={[
            { href: "/tier-list", label: "Ver Tier List completa" },
            { href: "/builds", label: "Ver Builds", variant: "outline" },
            { href: "/incarnon", label: "Ver guia de Incarnon", variant: "outline" },
            { href: "/loadouts", label: "Montar Loadout", variant: "secondary" },
            { href: "/farm", label: "Ver guia de Farm", variant: "outline" }
          ]}
        />
      </SectionBlock>

      <section className="mt-8 grid gap-3 lg:grid-cols-[1.25fr_.75fr]">
        <article className="surface-panel rounded-lg p-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="meta">Meta Atual</Badge>
            <Badge variant={build.tier === "S" ? "tierS" : "tierA"}>Tier {build.tier}</Badge>
            <Badge variant={categoryVariant(build.category)}>{build.category}</Badge>
          </div>
          <h2 className="mt-5 text-2xl font-black text-yellow-100">Introdução</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{build.summary}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Metric label="Função principal" value={build.mainRole} />
            <Metric label="Perfil indicado" value={build.playerProfile} />
            <Metric label="Melhor uso" value={build.bestUse} />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <CopyLinkButton url={buildUrl} label="Copiar link da build" />
            <CopyLinkButton mode="share" url={buildUrl} label="Compartilhar" shareTitle={`Build ${build.name} Warframe`} shareText={build.description} />
          </div>
        </article>

        <aside className="surface-panel rounded-lg p-5">
          <h2 className="text-xl font-black text-yellow-100">Resumo de investimento</h2>
          <dl className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
            <Detail label="Dificuldade" value={build.difficulty} />
            <Detail label="Custo de build" value={build.buildCost} />
            <Detail label="Prioridade" value={build.investmentPriority} />
            <Detail label="Quantidade aproximada de Forma" value={build.approximateForma} />
            <Detail label="Última revisão" value={build.lastReviewed || siteMeta.lastUpdated} />
            <Detail label="Update base" value={build.baseUpdate || siteMeta.updateBase} />
          </dl>
          <h2 className="mt-5 text-lg font-black text-yellow-100">Observação sobre meta/hotfix</h2>
          <div className="mt-4 border-l-2 border-yellow-300/60 bg-yellow-300/10 p-3 text-sm leading-6 text-yellow-50">
            {build.metaWarning}
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{build.disclaimer}</p>
        </aside>
      </section>

      <SectionBlock title="Pontos fortes e fracos" description="Resumo objetivo para decidir se esta build resolve o problema da sua conta.">
        <div className="grid gap-3 md:grid-cols-2">
          <ListCard title="Pontos fortes" items={build.strengths} tone="good" />
          <ListCard title="Pontos fracos" items={build.weaknesses} tone="warn" />
        </div>
      </SectionBlock>

      <SectionBlock title="Como conseguir" description={build.acquisition}>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          <BuildInfoCard title="Pré-requisito" value={build.acquisitionDetails.prerequisite} />
          <BuildInfoCard title="Vendedor ou missão" value={build.acquisitionDetails.vendorOrMission} />
          <BuildInfoCard title="Reputação necessária" value={build.acquisitionDetails.reputation} />
          <BuildInfoCard title="Recursos necessários" value={build.acquisitionDetails.resources} />
          <BuildInfoCard title="Dificuldade para obter" value={build.acquisitionDetails.difficulty} />
          <BuildInfoCard title="Dica para farmar mais rápido" value={build.acquisitionDetails.tip} />
        </div>
      </SectionBlock>

      <SectionBlock title="Build inicial" description="Use esta versão para validar função e conforto antes de fechar investimento alto.">
        <BuildInfoCard title="Configuração barata" value={build.starterBuild} />
      </SectionBlock>

      <SectionBlock title="Build endgame" description="Versão de maior investimento para quando a arma já encaixou no seu loadout.">
        <BuildInfoCard title="Configuração final" value={build.endgameBuild} />
      </SectionBlock>

      <SectionBlock title="Substituições" description="Trocas úteis quando faltam mods Primed, Galvanized, Arcanes ou polarizações.">
        <div className="grid gap-3 md:grid-cols-2">
          <ListCard title="Mods principais" items={build.recommendedMods} tone="good" />
          <ListCard title="Substituições baratas" items={build.substituteMods} tone="neutral" />
        </div>
      </SectionBlock>

      <SectionBlock title="Variação por facção" description="Ajuste a build pela missão real em vez de tratar um setup como solução universal.">
        <div className="grid gap-3 md:grid-cols-2">
          <BuildInfoCard title="Observação sobre Steel Path" value={build.steelPathNotes} />
          <BuildInfoCard title="Facções e elementos" value={build.factionNotes} />
        </div>
      </SectionBlock>

      <SectionBlock title="Arcanes recomendados" description="Escolha conforme padrão de abate, função da arma e estilo do loadout.">
        <ListCard title="Arcanes" items={build.recommendedArcanes} tone="neutral" />
      </SectionBlock>

      <SectionBlock title="Evoluções e observações especiais" description="Escolha evoluções pensando no papel real da arma no seu loadout.">
        <ListCard title="Prioridade nas evoluções" items={build.incarnonEvolutions} tone="good" />
      </SectionBlock>

      {build.slug === "praedos" ? <PraedosSpecialSection /> : null}

      <SectionBlock title="Erros comuns" description="Pontos que costumam desperdiçar Forma, Catalisador ou tempo.">
        <div className="grid gap-3 lg:grid-cols-2">
          <GuideCardGrid items={commonMistakeItems(build.slug)} />
          <ListCard title="Evite" items={build.avoid} tone="warn" />
        </div>
      </SectionBlock>

      <SectionBlock title="Quando não usar" description="Nem toda arma S resolve toda missão. Use outra opção quando o objetivo pedir função diferente.">
        <GuideCardGrid items={whenNotUseItems(build.slug)} />
      </SectionBlock>

      <FaqSection items={build.faq} />
      <NextGuideLinks links={nextGuideItems(build)} />
    </SeoPage>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/45 p-3">
      <span className="text-[11px] font-black uppercase text-cyan-100/80">{label}</span>
      <strong className="mt-1 block text-sm leading-6 text-foreground">{value}</strong>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold uppercase text-cyan-100/80">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function BuildInfoCard({ title, value }: { title: string; value: string }) {
  return (
    <article className="border border-border/70 bg-card/70 p-4">
      <h2 className="font-black text-yellow-100">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
    </article>
  );
}

function ListCard({ title, items, tone }: { title: string; items: string[]; tone: "good" | "warn" | "neutral" }) {
  const border = tone === "good" ? "border-l-cyan-300" : tone === "warn" ? "border-l-yellow-300" : "border-l-border";

  return (
    <article className={`border-l-4 ${border} bg-card/70 p-4`}>
      <h2 className="font-black text-yellow-100">{title}</h2>
      <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

function categoryVariant(category: string): "primary" | "secondaryWeapon" | "melee" {
  if (category === "Primária") return "primary";
  if (category === "Secundária") return "secondaryWeapon";
  return "melee";
}

function quickAnswerItems(build: NonNullable<ReturnType<typeof getBuildGuide>>) {
  return [
    {
      title: "Melhor uso",
      description: build.bestUse,
      badge: build.category,
      badgeVariant: categoryVariant(build.category)
    },
    {
      title: "Melhor elemento",
      description: build.recommendedElement,
      badge: "Elemento",
      badgeVariant: "cyan" as const
    },
    {
      title: "Arcane recomendado",
      description: build.recommendedArcanes[0] || "Use um Arcane alinhado ao padrão de abate da arma.",
      badge: "Arcane",
      badgeVariant: "meta" as const
    },
    {
      title: "Forma aproximada",
      description: build.approximateForma,
      badge: "Investimento",
      badgeVariant: "outline" as const
    },
    {
      title: "Vale a pena investir?",
      description: `${build.investmentPriority}. Invista quando a função da arma resolver um problema real do seu loadout.`,
      badge: `Tier ${build.tier}`,
      badgeVariant: build.tier === "S" ? ("tierS" as const) : ("tierA" as const)
    }
  ];
}

function commonMistakeItems(slug: string) {
  if (slug === "felarx") {
    return [
      { title: "Usar como única arma de clear", description: "A Felarx resolve alvo pesado. Para mapa inteiro, combine com Warframe ou arma de área.", badge: "Função", badgeVariant: "outline" as const },
      { title: "Ignorar evoluções Incarnon", description: "A build muda muito conforme a evolução escolhida. Revise antes de gastar Forma.", badge: "Incarnon", badgeVariant: "steel" as const },
      { title: "Elemento fixo para tudo", description: "Bosses e facções diferentes pedem ajustes. Uma configuração única pode desperdiçar dano.", badge: "Elemento", badgeVariant: "cyan" as const }
    ];
  }

  if (slug === "laetum") {
    return [
      { title: "Forçar a forma Incarnon sempre", description: "A forma Incarnon é forte, mas a missão pode pedir economia, conforto ou troca rápida de alvo.", badge: "Uso", badgeVariant: "outline" as const },
      { title: "Montar sem conforto", description: "Recarga, munição e manuseio importam quando a Laetum é seu plano seguro no Steel Path.", badge: "Conforto", badgeVariant: "cyan" as const },
      { title: "Copiar elemento sem validar", description: "A secundária deve cobrir o alvo que sua primária não resolve. Confira contra o inimigo real.", badge: "Elemento", badgeVariant: "meta" as const }
    ];
  }

  if (slug === "torid-incarnon") {
    return [
      { title: "Usar contra boss como única resposta", description: "Torid Incarnon brilha no clear. Para alvo pesado, deixe uma Felarx, Laetum ou outra opção dedicada no loadout.", badge: "Função", badgeVariant: "outline" as const },
      { title: "Ignorar forma Incarnon", description: "A arma depende do fluxo da forma Incarnon para mostrar o valor real em missões densas.", badge: "Incarnon", badgeVariant: "steel" as const },
      { title: "Ficar sem conforto", description: "Se munição, cadência ou manuseio travam a sessão, troque dano teórico por consistência.", badge: "Conforto", badgeVariant: "cyan" as const }
    ];
  }

  if (slug === "dual-toxocyst-incarnon") {
    return [
      { title: "Investir sem gostar do ritmo", description: "A arma rende melhor quando você mantém o fluxo de disparo. Teste antes de fechar uma versão cara.", badge: "Conforto", badgeVariant: "cyan" as const },
      { title: "Ignorar Arcanes de secundária", description: "Secondary Merciless, Deadhead ou Encumber podem mudar bastante a consistência do setup.", badge: "Arcane", badgeVariant: "meta" as const },
      { title: "Usar sem função clara", description: "Defina se ela será alvo único, dano sustentado ou plano B antes de gastar Forma.", badge: "Função", badgeVariant: "outline" as const }
    ];
  }

  if (slug === "ceramic-dagger-incarnon") {
    return [
      { title: "Copiar sinergia sem contexto", description: "A Ceramic Dagger muda muito conforme Warframe, evolução Incarnon e função no loadout.", badge: "Sinergia", badgeVariant: "steel" as const },
      { title: "Misturar utilidade e dano sem foco", description: "Separe uma variação utilitária de uma variação melee quando o objetivo for diferente.", badge: "Objetivo", badgeVariant: "outline" as const },
      { title: "Ignorar disponibilidade atual", description: "Confira a fonte da arma e a rotação do adaptador antes de planejar o farm.", badge: "Farm", badgeVariant: "farm" as const }
    ];
  }

  return [
    { title: "Misturar mobilidade e dano sem foco", description: "Separe uma variação utilitária de uma variação melee para não enfraquecer as duas.", badge: "Objetivo", badgeVariant: "outline" as const },
    { title: "Ignorar evoluções de mobilidade", description: "A Praedos vale muito pelo conforto. Se você remove isso, ela compete com melees mais agressivas.", badge: "Mobilidade", badgeVariant: "cyan" as const },
    { title: "Investir sem usar parkour ativo", description: "Se você não aproveita deslocamento, talvez outra melee entregue mais valor imediato.", badge: "Uso real", badgeVariant: "steel" as const }
  ];
}

function whenNotUseItems(slug: string) {
  if (slug === "felarx") {
    return [
      { title: "Missões de clear rápido", description: "Quando o objetivo é limpar salas inteiras, uma arma de área ou Warframe de clear costuma ser mais confortável.", badge: "Farm", badgeVariant: "farm" as const },
      { title: "Conta sem suporte defensivo", description: "Se você morre antes de mirar nos alvos pesados, ajuste sobrevivência antes de investir mais dano.", badge: "Steel Path", badgeVariant: "steel" as const }
    ];
  }

  if (slug === "laetum") {
    return [
      { title: "Quando a primária já resolve tudo", description: "Se sua primária cobre clear e alvo pesado, talvez a secundária possa ser utilidade em vez de dano máximo.", badge: "Loadout", badgeVariant: "cyan" as const },
      { title: "Quando você não gosta da rotação", description: "A Laetum é forte, mas precisa encaixar no seu ritmo. Teste antes de fechar uma build cara.", badge: "Conforto", badgeVariant: "outline" as const }
    ];
  }

  if (slug === "torid-incarnon") {
    return [
      { title: "Boss isolado ou alvo único", description: "Quando a missão exige derreter um alvo resistente, Felarx ou Laetum podem ser escolhas mais diretas.", badge: "Boss", badgeVariant: "tierS" as const },
      { title: "Missões com baixa densidade", description: "Se quase não há grupos para limpar, o maior diferencial da Torid Incarnon aparece menos.", badge: "Clear", badgeVariant: "outline" as const }
    ];
  }

  if (slug === "dual-toxocyst-incarnon") {
    return [
      { title: "Conta sem mods de secundária", description: "Se faltam Galvanized, Arcane e polarizações, use uma secundária mais simples até preparar a base.", badge: "Progressão", badgeVariant: "outline" as const },
      { title: "Missões em que você perde ritmo", description: "Quando a missão corta fluxo de disparo com frequência, a arma pode parecer menos confortável.", badge: "Conforto", badgeVariant: "cyan" as const }
    ];
  }

  if (slug === "ceramic-dagger-incarnon") {
    return [
      { title: "Início de conta", description: "Se sua conta ainda precisa de mods base e sobrevivência, uma melee simples pode render mais agora.", badge: "Iniciante", badgeVariant: "outline" as const },
      { title: "Loadout sem sinergia melee", description: "Se a arma não complementa Warframe, status ou dano, outra melee pode ser mais direta.", badge: "Sinergia", badgeVariant: "steel" as const }
    ];
  }

  return [
    { title: "Conteúdo que exige dano melee máximo", description: "Se a missão pede uma melee puramente ofensiva, compare Praedos com outras opções de dano antes de investir.", badge: "Melee", badgeVariant: "melee" as const },
    { title: "Loadouts sem necessidade de deslocamento", description: "Quando mobilidade não economiza tempo, o maior diferencial da Praedos perde valor.", badge: "Farm", badgeVariant: "farm" as const }
  ];
}

function nextGuideItems(build: NonNullable<ReturnType<typeof getBuildGuide>>) {
  const baseLinks = [
    { title: "Tier List", description: "Compare a arma com outras opções fortes antes de gastar mais Forma.", href: "/tier-list", badge: "Meta", badgeVariant: "tierS" as const },
    { title: "Builds", description: "Volte para a lista de builds e compare outras armas por função.", href: "/builds", badge: "Guias", badgeVariant: "meta" as const },
    { title: "Loadouts", description: "Salve a build junto de Warframe, armas e notas para consultar depois.", href: "/loadouts", badge: "Ferramenta", badgeVariant: "cyan" as const },
    { title: "Farm", description: "Use armas consistentes em rotas repetidas sem perder tempo ajustando setup.", href: "/farm", badge: "Farm", badgeVariant: "farm" as const },
    { title: "Incarnon", description: "Veja como priorizar armas e evoluções Incarnon no seu progresso.", href: "/incarnon", badge: "Incarnon", badgeVariant: "steel" as const },
    { title: "Comece Aqui", description: "Escolha o próximo passo conforme estágio da conta.", href: "/comece-aqui", badge: "Roteiro", badgeVariant: "outline" as const },
    { title: "Progressão", description: "Veja quando priorizar mods, farms, Incarnon, Steel Path e builds caras.", href: "/progressao", badge: "Roadmap", badgeVariant: "cyan" as const },
    { title: "Planejador", description: "Use esta build dentro de um plano de investimento para sua conta.", href: "/planejador", badge: "Plano", badgeVariant: "meta" as const },
    { title: "Comparador", description: "Compare esta opção com outras armas e Warframes antes de gastar Forma.", href: "/comparar", badge: "Comparar", badgeVariant: "outline" as const }
  ];

  if (["torid-incarnon", "dual-toxocyst-incarnon", "ceramic-dagger-incarnon"].includes(build.slug)) {
    return [
      ...baseLinks,
      { title: "Steel Path", description: "Prepare checklist, mods e setup antes de missões mais difíceis.", href: "/steel-path", badge: "Steel Path", badgeVariant: "steel" as const }
    ];
  }

  return baseLinks;
}

function PraedosSpecialSection() {
  return (
    <SectionBlock title="Build de mobilidade e build melee" description="Praedos deve ter variações separadas: uma para ganhar tempo em missões rápidas e outra para quando ela realmente precisa matar.">
      <GuideCardGrid
        items={[
          {
            title: "Build de mobilidade",
            description: "Priorize evoluções e slots que deixam parkour, deslocamento e ritmo de farm mais confortáveis. Dano máximo é secundário aqui.",
            badge: "Mobilidade",
            badgeVariant: "cyan"
          },
          {
            title: "Build melee",
            description: "Use quando a Praedos será fonte real de dano. Aí entram velocidade de ataque, combo, elemento e sustain conforme seu estilo.",
            badge: "Melee",
            badgeVariant: "melee"
          },
          {
            title: "Evoluções de qualidade de vida",
            description: "Para farms e missões rápidas, escolha evoluções que economizam tempo e deixam o loadout mais fluido.",
            badge: "Conforto",
            badgeVariant: "meta"
          }
        ]}
      />
    </SectionBlock>
  );
}
