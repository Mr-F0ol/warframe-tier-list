import type { Metadata } from "next";
import { FarmGuideContent } from "@/components/farm-guide-content";
import { SeoPage } from "@/components/seo/seo-page";
import { getFarmGuide } from "@/data/farms";
import { articleJsonLd } from "@/lib/seo";

const page = getFarmGuide("farm-creditos")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: { canonical: "/farm-creditos" },
  openGraph: {
    title: "Farm de créditos Warframe | Warframe Fool",
    description: page.seoDescription,
    url: "/farm-creditos"
  },
  twitter: {
    card: "summary_large_image",
    title: page.seoTitle,
    description: page.seoDescription
  }
};

export default function FarmCreditosPage() {
  const articleSchema = articleJsonLd({
    title: page.seoTitle,
    description: page.seoDescription,
    path: "/farm-creditos"
  });

  return (
    <SeoPage
      eyebrow="Farm"
      title={page.title}
      description={page.description}
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" },
        { label: "Farm de Créditos", href: "/farm-creditos" }
      ]}
      structuredData={articleSchema}
    >
      <FarmGuideContent guide={page} />
    </SeoPage>
  );
}
