import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { guidePages } from "@/data/guide-pages";
import { articleJsonLd } from "@/lib/seo";

const page = guidePages["steel-path"];

export const metadata: Metadata = {
  title: "Steel Path Warframe — Checklist, Builds e Preparação",
  description: page.description,
  alternates: { canonical: "/steel-path" },
  openGraph: {
    title: "Steel Path Warframe — Checklist, Builds e Preparação | Warframe Fool",
    description: page.description,
    url: "/steel-path"
  },
  twitter: {
    card: "summary_large_image",
    title: "Steel Path Warframe — Checklist, Builds e Preparação",
    description: page.description
  }
};

export default function SteelPathPage() {
  const articleSchema = articleJsonLd({
    title: "Steel Path Warframe — Checklist, Builds e Preparação",
    description: page.description,
    path: "/steel-path"
  });

  return (
    <SeoPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Steel Path", href: "/steel-path" }
      ]}
      structuredData={articleSchema}
    >
      {page.sections.map(section => (
        <SectionBlock key={section.title} title={section.title} description={section.description}>
          <InfoCardGrid cards={section.cards} />
        </SectionBlock>
      ))}
      <InternalLinks links={page.links.map(link => ({ title: link.title, description: link.description, href: link.href }))} />
    </SeoPage>
  );
}
