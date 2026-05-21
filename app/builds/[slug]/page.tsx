import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyLinkButton } from "@/components/copy-link-button";
import { FaqSection, GuideCardGrid, GuideCtaRow, NextGuideLinks } from "@/components/guide-ui";
import { Badge } from "@/components/ui/badge";
import { SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides, getBuildGuide } from "@/data/builds";
import { articleJsonLd } from "@/lib/seo";

interface BuildPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return buildGuides.map(build => ({ slug: build.slug }));
}

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
      title: `${title} | WarframeFool`,
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
          <h2 className="mt-5 text-2xl font-black text-yellow-100">Objetivo da build</h2>
          <p className="mt-3 text-sm leading-7 text-muted-foreground">{build.summary}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <Metric label="Objetivo" value={build.mainRole} />
            <Metric label="Quando usar" value={build.bestUse} />
            <Metric label="Prioridade" value={build.investmentPriority} />
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <CopyLinkButton url={buildUrl} label="Copiar link da build" />
            <CopyLinkButton mode="share" url={buildUrl} label="Compartilhar" shareTitle={`Build ${build.name} Warframe`} shareText={build.description} />
          </div>
        </article>

        <aside className="surface-panel rounded-lg p-5">
          <h2 className="text-xl font-black text-yellow-100">Forma e custo</h2>
          <dl className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
            <Detail label="Dificuldade" value={build.difficulty} />
            <Detail label="Custo de build" value={build.buildCost} />
            <Detail label="Quantidade aproximada de Forma" value={build.approximateForma} />
          </dl>
          <h2 className="mt-5 text-lg font-black text-yellow-100">Observação sobre meta/hotfix</h2>
          <div className="mt-4 border-l-2 border-yellow-300/60 bg-yellow-300/10 p-3 text-sm leading-6 text-yellow-50">
            {build.metaWarning}
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{build.disclaimer}</p>
        </aside>
      </section>

      <SectionBlock title="Plano da build" description="Resumo para entender o papel da build e adaptar os ajustes à sua conta.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <BuildInfoCard title="Build base recomendada" value={build.mainRole} />
          <BuildInfoCard title="Melhor para" value={build.bestFor.join(", ")} />
          <BuildInfoCard title="Prioridade de stats" value={build.statPriority.join(" · ")} />
          <BuildInfoCard title="Melhor para Bosses" value={build.bestFor.includes("Bosses") ? build.bestUse : "Use outra variação quando o foco for dano direto em alvo pesado."} />
          <BuildInfoCard title="Elemento recomendado" value={build.recommendedElement} />
        </div>
      </SectionBlock>

      <SectionBlock title="Pontos fortes e fracos" description="Resumo objetivo para decidir se esta build resolve o problema da sua conta.">
        <div className="grid gap-3 md:grid-cols-2">
          <ListCard title="Pontos fortes" items={build.strengths} tone="good" />
          <ListCard title="Pontos fracos" items={build.weaknesses} tone="warn" />
        </div>
      </SectionBlock>

      <SectionBlock title="Mods principais e substituições" description="Use como base e ajuste os nomes exatos quando validar sua configuração final.">
        <div className="grid gap-3 lg:grid-cols-3">
          <ListCard title="Mods principais" items={build.recommendedMods} tone="good" />
          <ListCard title="Substituições baratas" items={build.substituteMods} tone="neutral" />
          <ListCard title="Arcanes recomendados" items={build.recommendedArcanes} tone="neutral" />
        </div>
      </SectionBlock>

      <SectionBlock title="Evoluções Incarnon recomendadas" description="Escolha evoluções pensando no papel real da arma no seu loadout.">
        <ListCard title="Prioridade nas evoluções" items={build.incarnonEvolutions} tone="good" />
      </SectionBlock>

      {build.slug === "praedos" ? <PraedosSpecialSection /> : null}

      <SectionBlock title="Roteiro de progressão" description="O que validar antes de gastar recursos pesados.">
        <div className="grid gap-3 md:grid-cols-3">
          {build.progression.map((item, index) => (
            <article key={item} className="bg-card/70 p-4">
              <span className="text-xs font-black uppercase text-cyan-200">Passo {index + 1}</span>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Variações para testar" description="Use estes blocos para separar versão barata, versão endgame e ajustes por missão.">
        <div className="grid gap-3 md:grid-cols-3">
          {build.editableSlots.map(slot => (
            <article key={slot.label} className="border border-dashed border-cyan-300/35 bg-background/40 p-4">
              <h2 className="font-black text-yellow-100">{slot.label}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{slot.guidance}</p>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Evite" description="Pontos que costumam desperdiçar Forma, Catalisador ou tempo.">
        <div className="grid gap-3 md:grid-cols-3">
          {build.avoid.map(item => (
            <article key={item} className="bg-card/70 p-4 text-sm leading-6 text-muted-foreground">
              {item}
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Ajustes que parecem pequenos, mas costumam reduzir muito o valor da build.">
        <GuideCardGrid items={commonMistakeItems(build.slug)} />
      </SectionBlock>

      <SectionBlock title="Quando não usar" description="Nem toda arma S resolve toda missão. Use outra opção quando o objetivo pedir função diferente.">
        <GuideCardGrid items={whenNotUseItems(build.slug)} />
      </SectionBlock>

      <FaqSection items={build.faq} />
      <NextGuideLinks links={nextGuideItems()} />
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
      { title: "Copiar elemento sem testar", description: "A secundária deve cobrir o alvo que sua primária não resolve. Teste contra o inimigo real.", badge: "Elemento", badgeVariant: "meta" as const }
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

  return [
    { title: "Conteúdo que exige dano melee máximo", description: "Se a missão pede uma melee puramente ofensiva, compare Praedos com outras opções de dano antes de investir.", badge: "Melee", badgeVariant: "melee" as const },
    { title: "Loadouts sem necessidade de deslocamento", description: "Quando mobilidade não economiza tempo, o maior diferencial da Praedos perde valor.", badge: "Farm", badgeVariant: "farm" as const }
  ];
}

function nextGuideItems() {
  return [
    { title: "Tier List", description: "Compare a arma com outras opções fortes antes de gastar mais Forma.", href: "/tier-list", badge: "Meta", badgeVariant: "tierS" as const },
    { title: "Incarnon", description: "Veja como priorizar armas e evoluções Incarnon no seu progresso.", href: "/incarnon", badge: "Incarnon", badgeVariant: "steel" as const },
    { title: "Loadouts", description: "Salve a build junto de Warframe, armas e notas para consultar depois.", href: "/loadouts", badge: "Ferramenta", badgeVariant: "cyan" as const },
    { title: "Builds", description: "Volte para a lista de builds e compare outras armas por função.", href: "/builds", badge: "Guias", badgeVariant: "meta" as const },
    { title: "Farm de Créditos", description: "Use armas consistentes em rotas repetidas sem perder tempo ajustando setup.", href: "/farm-creditos", badge: "Farm", badgeVariant: "farm" as const }
  ];
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
