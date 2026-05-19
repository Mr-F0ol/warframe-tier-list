import type { Metadata } from "next";
import { notFound } from "next/navigation";
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

  return {
    title: `Build ${build.name}`,
    description: build.description,
    alternates: { canonical: `/builds/${build.slug}` },
    openGraph: {
      title: `Build ${build.name} | WarframeFool`,
      description: build.description,
      url: `/builds/${build.slug}`
    }
  };
}

export default async function BuildDetailPage({ params }: BuildPageProps) {
  const { slug } = await params;
  const build = getBuildGuide(slug);
  if (!build) notFound();

  return (
    <SeoPage eyebrow="Build" title={`Build ${build.name}`} description={build.description}>
      <SectionBlock title="Uso recomendado" description={build.disclaimer}>
        <div className="grid gap-3 md:grid-cols-[1.1fr_.9fr]">
          <article className="bg-card/70 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold">Tier {build.tier}</Badge>
              <Badge variant="cyan">{build.category}</Badge>
            </div>
            <h2 className="mt-4 text-xl font-black text-yellow-100">Melhor para</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {build.bestFor.map(item => (
                <Badge key={item} variant="outline">{item}</Badge>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Use esta página como roteiro de edição. Quando você testar uma build real, preencha os slots no arquivo de dados em vez de espalhar texto manual pelo código.
            </p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="text-xl font-black text-yellow-100">Prioridade de stats</h2>
            <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
              {build.statPriority.map(item => (
                <li key={item} className="border-l-2 border-cyan-300/40 pl-3">{item}</li>
              ))}
            </ul>
          </article>
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

      <SectionBlock title="Slots editáveis" description="Campos pensados para você preencher depois com dados testados, sem inventar uma build fechada agora.">
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
