import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { TierKey } from "@/lib/types";

export interface LinkCard {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export interface RankCardItem {
  id: string;
  name: string;
  tier: TierKey;
  description: string;
  focus: string[];
  recommendedFor: string[];
  href?: string;
  meta?: string;
  detailLabel?: string;
}

type JsonLdData = Record<string, unknown> | Array<Record<string, unknown>>;

export function SeoPage({
  eyebrow,
  title,
  description,
  breadcrumbs,
  structuredData,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  structuredData?: JsonLdData;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    publisher: {
      "@type": "Organization",
      name: "Warframe Fool"
    },
    inLanguage: "pt-BR"
  };

  return (
    <main id="conteudo" className="mx-auto w-[min(1180px,calc(100%-32px))] scroll-mt-24 pb-10 pt-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {toJsonLdArray(structuredData).map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
      <section className="relative overflow-hidden border-b border-border/70 py-8 md:py-12">
        <span className="inline-flex border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase text-cyan-100">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-normal text-foreground sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-cyan-50/82 sm:text-lg">{description}</p>
      </section>
      {children}
    </main>
  );
}

function toJsonLdArray(data?: JsonLdData) {
  if (!data) return [];
  return Array.isArray(data) ? data : [data];
}

export function SectionBlock({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black text-foreground">
          {title}
          {description ? <span className="mt-1 block text-sm font-normal leading-6 text-muted-foreground">{description}</span> : null}
        </h2>
      </div>
      {children}
    </section>
  );
}

export function InfoCardGrid({ cards }: { cards: LinkCard[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {cards.map(card => (
        <InfoCard key={`${card.title}-${card.href || "static"}`} card={card} />
      ))}
    </div>
  );
}

export function InfoCard({ card }: { card: LinkCard }) {
  const content = (
    <Card className="h-full p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35">
      <h3 className="text-lg font-black text-yellow-100">{card.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.description}</p>
      {card.tags?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {card.tags.map(tag => (
            <Badge key={tag} variant="cyan">{tag}</Badge>
          ))}
        </div>
      ) : null}
    </Card>
  );

  if (!card.href) return content;
  return (
    <Link href={card.href} className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {content}
    </Link>
  );
}

export function RankCardGrid({ items }: { items: RankCardItem[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {items.map(item => (
        <RankCard key={item.id} item={item} />
      ))}
    </div>
  );
}

export function RankCard({ item }: { item: RankCardItem }) {
  const content = (
    <Card className="h-full p-4 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/35">
      <div className="flex items-start justify-between gap-3">
        <div>
          {item.meta ? <span className="text-[11px] font-bold uppercase text-cyan-200/75">{item.meta}</span> : null}
          <h3 className="mt-1 text-xl font-black text-foreground">{item.name}</h3>
        </div>
        <Badge variant={item.tier === "S" ? "gold" : "cyan"}>Tier {item.tier}</Badge>
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.focus.map(tag => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase text-cyan-100/80">{item.detailLabel || "Melhor para"}</p>
      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.recommendedFor.join(" · ")}</p>
    </Card>
  );

  if (!item.href) return content;
  return (
    <Link href={item.href} className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {content}
    </Link>
  );
}

export function InternalLinks({ links }: { links: LinkCard[] }) {
  return (
    <SectionBlock title="Guias relacionados" description="Links internos para aprofundar sem sair do fluxo do site.">
      <InfoCardGrid cards={links} />
    </SectionBlock>
  );
}
