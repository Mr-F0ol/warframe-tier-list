export const siteUrl = "https://warframefool.vercel.app";
export const dateModified = "2026-05-21";

export function absoluteUrl(path: string) {
  if (!path || path === "/") return siteUrl;
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function articleJsonLd({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "pt-BR",
    dateModified,
    author: {
      "@type": "Organization",
      name: "WarframeFool",
      url: siteUrl
    },
    publisher: {
      "@type": "Organization",
      name: "WarframeFool",
      url: siteUrl
    }
  };
}

export function itemListJsonLd({
  name,
  description,
  path,
  items
}: {
  name: string;
  description: string;
  path: string;
  items: Array<{ name: string; url?: string; description?: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: absoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: item.url ? absoluteUrl(item.url) : undefined,
      description: item.description
    }))
  };
}
