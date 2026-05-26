export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://warframefool.vercel.app/#website",
    name: "Warframe Fool",
    url: "https://warframefool.vercel.app",
    description: "Tier list Warframe com Warframes Prime, armas Incarnon, recomendações por missão e prioridades de investimento.",
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "Warframe Fool",
      url: "https://warframefool.vercel.app"
    }
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
