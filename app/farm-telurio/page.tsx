import type { Metadata } from "next";
import { FarmGuideContent } from "@/components/farm-guide-content";
import { SeoPage } from "@/components/seo/seo-page";
import { getFarmGuide } from "@/data/farms";
import { articleJsonLd } from "@/lib/seo";

const page = getFarmGuide("farm-telurio")!;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  alternates: { canonical: "/farm-telurio" },
  openGraph: { title: page.seoTitle, description: page.seoDescription, url: "/farm-telurio" },
  twitter: { card: "summary_large_image", title: page.seoTitle, description: page.seoDescription }
};

export default function FarmTelurioPage() {
  const articleSchema = articleJsonLd({ title: page.seoTitle, description: page.seoDescription, path: "/farm-telurio" });

  return (
    <SeoPage
      eyebrow="Farm"
      title={page.title}
      description={page.description}
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" },
        { label: "Farm de Telúrio", href: "/farm-telurio" }
      ]}
      structuredData={articleSchema}
    >
      <FarmGuideContent guide={page} />
    </SeoPage>
  );
}
