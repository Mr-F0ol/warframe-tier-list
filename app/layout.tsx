import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import "./globals.css";

const siteUrl = "https://warframefool.vercel.app";
const title = "WarframeFool - Tier List Warframe 2026";
const description =
  "Tier list prática de Warframe com Warframes normais e Prime, armas Incarnon, recomendações por missão, prioridades de investimento e loadouts.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | WarframeFool"
  },
  description,
  applicationName: "WarframeFool",
  generator: "Next.js",
  keywords: [
    "Warframe",
    "Warframe tier list",
    "WarframeFool",
    "tier list Warframe 2026",
    "Warframe Prime",
    "armas Incarnon",
    "Steel Path",
    "Warframe meta"
  ],
  authors: [{ name: "WarframeFool" }],
  creator: "WarframeFool",
  publisher: "WarframeFool",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "WarframeFool",
    title,
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "WarframeFool - Tier List Warframe"
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
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
