import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { guidePages } from "@/data/guide-pages";

const page = guidePages["steel-path"];

export const metadata: Metadata = {
  title: "Steel Path Warframe — Guia Meta Atual",
  description: page.description,
  alternates: { canonical: "/steel-path" },
  openGraph: {
    title: "Steel Path Warframe | WarframeFool",
    description: page.description,
    url: "/steel-path"
  }
};

export default function SteelPathPage() {
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
