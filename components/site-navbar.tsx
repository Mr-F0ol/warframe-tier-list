"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ShareButton } from "@/components/share-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/comece-aqui", label: "Comece Aqui" },
  { href: "/planejador", label: "Planejador" },
  { href: "/tier-list", label: "Tier List" },
  { href: "/meta-atual", label: "Meta" },
  { href: "/builds", label: "Builds" },
  { href: "/incarnon", label: "Incarnon" },
  { href: "/farm", label: "Farm" },
  { href: "/loadouts", label: "Loadouts" },
  { href: "/sobre", label: "Sobre" }
];

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 shadow-[0_14px_42px_rgba(0,0,0,.28)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-[68px] w-[min(1180px,calc(100%-32px))] items-center justify-between gap-3 py-2">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/assets/site-logo.svg"
            alt="Warframe Fool"
            width={44}
            height={44}
            priority
            className="h-10 w-10 shrink-0 drop-shadow-[0_0_14px_rgba(247,198,91,.42)]"
          />
          <span className="min-w-0 leading-tight">
            <strong className="block truncate text-sm text-foreground">Warframe Fool</strong>
            <span className="block truncate text-[11px] font-bold uppercase text-cyan-200/80">Tier list e guias</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map(link => (
            <NavItem key={link.href} href={link.href} active={isActive(pathname, link.href)}>
              {link.label}
            </NavItem>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <ShareButton />
        </div>

        <Button
          type="button"
          size="icon"
          variant="outline"
          className="shrink-0 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(value => !value)}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border/70 bg-card/95 lg:hidden">
          <nav id="mobile-navigation" className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-2 py-3" aria-label="Navegação mobile">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md border border-transparent px-3 py-3 text-sm font-bold text-muted-foreground transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-50",
                  isActive(pathname, link.href) && "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-1 md:hidden">
              <ShareButton />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function NavItem({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={cn(
        "rounded-md border border-transparent px-3 py-2 text-sm font-bold text-muted-foreground transition hover:border-cyan-300/35 hover:bg-cyan-300/10 hover:text-cyan-50",
        active && "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
      )}
    >
      {children}
    </Link>
  );
}

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
