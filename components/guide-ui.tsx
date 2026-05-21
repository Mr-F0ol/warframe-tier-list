import Link from "next/link";
import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

export interface GuideCardItem {
  title: string;
  description: string;
  badge?: string;
  badgeVariant?: BadgeVariant;
  href?: string;
}

export interface GuideTableRow {
  label: string;
  cells: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface GuideCtaItem {
  href: string;
  label: string;
  variant?: React.ComponentProps<typeof Button>["variant"];
}

export function GuideCardGrid({ items, columns = "three" }: { items: GuideCardItem[]; columns?: "two" | "three" | "four" }) {
  const gridClass = columns === "four" ? "lg:grid-cols-4" : columns === "two" ? "lg:grid-cols-2" : "lg:grid-cols-3";

  return (
    <div className={`grid gap-3 md:grid-cols-2 ${gridClass}`}>
      {items.map(item => (
        <GuideCard key={item.title} item={item} />
      ))}
    </div>
  );
}

export function GuideCard({ item }: { item: GuideCardItem }) {
  const content = (
    <Card className="h-full p-4 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/35">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="text-lg font-black text-yellow-100">{item.title}</h3>
        {item.badge ? <Badge variant={item.badgeVariant || "cyan"}>{item.badge}</Badge> : null}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
    </Card>
  );

  if (!item.href) return content;

  return (
    <Link href={item.href} className="block h-full rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {content}
    </Link>
  );
}

export function GuideTable({ columns, rows }: { columns: string[]; rows: GuideTableRow[] }) {
  const gridTemplateColumns = `190px repeat(${columns.length}, minmax(190px, 1fr))`;
  const minWidth = 190 + columns.length * 190;

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <div style={{ minWidth }}>
        <div className="grid bg-cyan-300/10 text-xs font-black uppercase text-cyan-100 sm:text-sm" style={{ gridTemplateColumns }}>
          <div className="border-r border-border p-3">Opção</div>
          {columns.map(column => (
            <div key={column} className="border-r border-border p-3 last:border-r-0">
              {column}
            </div>
          ))}
        </div>
        <div className="grid">
          {rows.map(row => (
            <article key={row.label} className="grid border-t border-border bg-card/75 first:border-t-0" style={{ gridTemplateColumns }}>
              <h3 className="border-r border-border p-3 text-base font-black text-yellow-100">{row.label}</h3>
              {row.cells.map((cell, index) => (
                <div key={`${row.label}-${columns[index]}`} className="border-r border-border p-3 text-sm leading-6 text-muted-foreground last:border-r-0">
                  {cell}
                </div>
              ))}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function GuideCtaRow({ items }: { items: GuideCtaItem[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map(item => (
        <Button key={item.href} asChild variant={item.variant || "secondary"} size="sm" className="min-h-9">
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </div>
  );
}

export function NextGuideLinks({ links }: { links: GuideCardItem[] }) {
  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-2xl font-black text-foreground">Próximo guia recomendado</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">Continue por guias relacionados para montar uma conta mais consistente.</p>
      </div>
      <GuideCardGrid items={links} />
    </section>
  );
}

export function FaqSection({ items }: { items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="mt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mb-3">
        <h2 className="text-2xl font-black text-foreground">FAQ</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">Respostas rápidas para dúvidas comuns antes de investir tempo, foco ou recursos.</p>
      </div>
      <div className="grid gap-3">
        {items.map(item => (
          <details key={item.question} className="surface-panel rounded-lg p-4">
            <summary className="cursor-pointer text-base font-black text-yellow-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">{item.question}</summary>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
