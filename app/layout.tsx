import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tier List Warframe 2026",
  description: "Tier list prática de Warframe com Warframes, Primes, armas, recomendações por missão e loadouts.",
  icons: {
    icon: [
      {
        url: "/assets/site-logo.svg?v=20260514",
        type: "image/svg+xml"
      }
    ],
    shortcut: "/assets/site-logo.svg?v=20260514",
    apple: "/assets/site-logo.svg?v=20260514"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="dark">
      <body>{children}</body>
    </html>
  );
}
