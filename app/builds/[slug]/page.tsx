import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CopyLinkButton } from "@/components/copy-link-button";
import { Badge } from "@/components/ui/badge";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { buildGuides, getBuildGuide } from "@/data/builds";

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

  const title = `Build ${build.name} Warframe — Meta Steel Path`;

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

  return (
    <SeoPage eyebrow="Build" title={`Build ${build.name} Warframe`} description={build.description}>
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

      <SectionBlock title="Estrutura da build" description="Formato padrão para comparar builds sem depender de uma importação única e rígida.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <BuildInfoCard title="Build base recomendada" value={build.mainRole} />
          <BuildInfoCard title="Melhor para Steel Path" value={build.bestFor.includes("Steel Path") ? build.bestUse : "Use quando esta arma cobrir uma função clara no seu loadout."} />
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

      <SectionBlock title="Mods principais e substitutos" description="Use como base e ajuste os nomes exatos quando validar sua configuração final.">
        <div className="grid gap-3 lg:grid-cols-3">
          <ListCard title="Mods principais" items={build.recommendedMods} tone="good" />
          <ListCard title="Substituições baratas" items={build.substituteMods} tone="neutral" />
          <ListCard title="Arcanes recomendados" items={build.recommendedArcanes} tone="neutral" />
        </div>
      </SectionBlock>

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

      <SectionBlock title="Campos preparados para build completa" description="Use estes blocos quando ainda não houver dados suficientes para uma configuração fechada.">
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

      <InternalLinks links={build.internalLinks.map(link => ({ title: link.label, description: link.description, href: link.href }))} />
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

function categoryVariant(category: string) {
  if (category === "Primária") return "primary";
  if (category === "Secundária") return "secondaryWeapon";
  return "melee";
}
