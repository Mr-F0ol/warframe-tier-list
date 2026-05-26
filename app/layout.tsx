import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { siteMeta } from "@/data/siteMeta";
import "./globals.css";

const title = "Warframe Fool — Tier List, Builds e Meta Warframe";
const description =
  "Guia brasileiro de Warframe com tier list, builds, armas Incarnon, farms, Steel Path, meta atual e loadouts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.siteUrl),
  title: {
    default: title,
    template: "%s | Warframe Fool"
  },
  description,
  applicationName: "Warframe Fool",
  generator: "Next.js",
  keywords: [
    "Warframe",
    "Warframe tier list",
    "Warframe Fool",
    "tier list Warframe 2026",
    "Warframe Prime",
    "armas Incarnon",
    "Steel Path",
    "Warframe meta"
  ],
  authors: [{ name: "Warframe Fool" }],
  creator: "Warframe Fool",
  publisher: "Warframe Fool",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteName,
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Warframe Fool - Tier List Warframe"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  icons: {
    icon: [
      {
        url: "/assets/site-logo.svg?v=20260518",
        type: "image/svg+xml"
      }
    ],
    shortcut: "/assets/site-logo.svg?v=20260518",
    apple: "/assets/site-logo.svg?v=20260518"
  }
};

export const viewport: Viewport = {
  themeColor: "#071013",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
