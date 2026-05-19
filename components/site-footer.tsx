import Link from "next/link";

const footerLinks = [
  { href: "/melhores-warframes", label: "Warframes" },
  { href: "/melhores-armas-primarias", label: "Primárias" },
  { href: "/melhores-armas-secundarias", label: "Secundárias" },
  { href: "/melhores-melee", label: "Melee" },
  { href: "/incarnon", label: "Incarnon" },
  { href: "/builds", label: "Builds" },
  { href: "/steel-path", label: "Steel Path" }
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border/70 bg-background/72">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-4 py-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <strong className="text-sm text-yellow-100">WarframeFool</strong>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Tier list, guias e estrutura de builds em português para ajudar a escolher onde investir tempo, Forma e Catalisadores no Warframe.
          </p>
        </div>
        <nav className="flex flex-wrap gap-2 text-sm" aria-label="Links do rodapé">
          {footerLinks.map(link => (
            <Link key={link.href} href={link.href} className="rounded-md border border-border/70 px-3 py-2 font-semibold text-muted-foreground transition hover:border-cyan-300/40 hover:text-cyan-50">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
