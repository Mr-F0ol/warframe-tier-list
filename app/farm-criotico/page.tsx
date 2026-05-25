import type { Metadata } from "next";
import { FarmGuideContent } from "@/components/farm-guide-content";
import { SeoPage } from "@/components/seo/seo-page";
import { getFarmGuide } from "@/data/farms";
import { articleJsonLd } from "@/lib/seo";

const page = getFarmGuide("farm-criotico")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: { canonical: "/farm-criotico" },
  openGraph: { title: page.seoTitle, description: page.seoDescription, url: "/farm-criotico" },
  twitter: { card: "summary_large_image", title: page.seoTitle, description: page.seoDescription }
};

export default function FarmCrioticoPage() {
  const articleSchema = articleJsonLd({ title: page.seoTitle, description: page.seoDescription, path: "/farm-criotico" });

  return (
    <SeoPage
      eyebrow="Farm"
      title={page.title}
      description={page.description}
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" },
        { label: "Farm de Criótico", href: "/farm-criotico" }
      ]}
      structuredData={articleSchema}
    >
      <FarmGuideContent guide={page} />
    </SeoPage>
  );
}
