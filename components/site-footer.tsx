import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Início" },
  { href: "/comece-aqui", label: "Comece Aqui" },
  { href: "/progressao", label: "Progressão" },
  { href: "/minha-conta", label: "Minha Conta" },
  { href: "/planejador", label: "Planejador" },
  { href: "/comparar", label: "Comparador" },
  { href: "/ferramentas", label: "Ferramentas" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/builds", label: "Builds" },
  { href: "/incarnon", label: "Incarnon" },
  { href: "/farm", label: "Farm" },
  { href: "/loadouts", label: "Loadouts" },
  { href: "/meta-atual", label: "Meta Atual" },
  { href: "/steel-path", label: "Steel Path" },
  { href: "/sobre", label: "Sobre" }
];

export function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-border/70 bg-background/72">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-6 py-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <strong className="text-sm text-yellow-100">Warframe Fool</strong>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Tier list, builds e guias em português para ajudar jogadores brasileiros a escolher onde investir tempo, Forma e Catalisadores.
          </p>
          <p className="mt-3 max-w-2xl text-xs leading-5 text-muted-foreground">
            Warframe é marca da Digital Extremes. Este site é um projeto independente de fãs. Não é oficial, não é afiliado e pode ficar desatualizado após hotfixes, Arcanes, Rivens ou balanceamentos.
          </p>
          <span className="mt-3 inline-flex rounded-md border border-border/70 px-3 py-2 text-sm font-bold text-muted-foreground">
            GitHub em breve
          </span>
          <a href="#conteudo" className="ml-0 mt-3 block text-sm font-bold text-cyan-100 hover:text-yellow-100 sm:ml-4 sm:inline-flex">
            Voltar ao topo
          </a>
        </div>
        <nav className="flex max-w-xl flex-wrap gap-2 text-sm" aria-label="Links do rodapé">
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
