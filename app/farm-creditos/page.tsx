import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { guidePages } from "@/data/guide-pages";

const page = guidePages["farm-creditos"];

export const metadata: Metadata = {
  title: "Farm de créditos Warframe",
  description: page.description,
  alternates: { canonical: "/farm-creditos" },
  openGraph: {
    title: "Farm de créditos Warframe | WarframeFool",
    description: page.description,
    url: "/farm-creditos"
  }
};

export default function FarmCreditosPage() {
  return (
    <SeoPage eyebrow={page.eyebrow} title={page.title} description={page.description}>
      {page.sections.map(section => (
        <SectionBlock key={section.title} title={section.title} description={section.description}>
          <InfoCardGrid cards={section.cards} />
        </SectionBlock>
      ))}
      <InternalLinks links={page.links.map(link => ({ title: link.title, description: link.description, href: link.href }))} />
    </SeoPage>
  );
}
