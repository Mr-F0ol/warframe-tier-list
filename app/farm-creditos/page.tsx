import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { guidePages } from "@/data/guide-pages";
import { articleJsonLd } from "@/lib/seo";

const page = guidePages["farm-creditos"];

export const metadata: Metadata = {
  title: "Farm de Créditos Warframe — Guia para Iniciantes, Intermediário e Endgame",
  description: page.description,
  alternates: { canonical: "/farm-creditos" },
  openGraph: {
    title: "Farm de créditos Warframe | WarframeFool",
    description: page.description,
    url: "/farm-creditos"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm de Créditos Warframe — Guia para Iniciantes, Intermediário e Endgame",
    description: page.description
  }
};

export default function FarmCreditosPage() {
  const articleSchema = articleJsonLd({
    title: "Farm de Créditos Warframe — Guia para Iniciantes, Intermediário e Endgame",
    description: page.description,
    path: "/farm-creditos"
  });

  return (
    <SeoPage
      eyebrow={page.eyebrow}
      title={page.title}
      description={page.description}
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" },
        { label: "Farm de Créditos", href: "/farm-creditos" }
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
