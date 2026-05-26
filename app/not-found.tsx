import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="conteudo" className="mx-auto grid min-h-[60vh] w-[min(900px,calc(100%-32px))] place-items-center scroll-mt-24 py-16">
      <section className="surface-panel rounded-lg p-6 text-center">
        <span className="inline-flex border border-cyan-300/35 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase text-cyan-100">
          Página não encontrada
        </span>
        <h1 className="mt-4 text-4xl font-black text-foreground sm:text-5xl">Esse guia não foi encontrado</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          O link pode ter mudado ou a página ainda não existe. Use os atalhos abaixo para voltar aos guias principais do Warframe Fool.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/tier-list">Tier List</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/builds">Builds</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/farm">Farm</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
