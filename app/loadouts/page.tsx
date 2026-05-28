import type { Metadata } from "next";
import Link from "next/link";
import { LoadoutPresetCards } from "@/components/loadout-preset-cards";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { Button } from "@/components/ui/button";
import { getTierListData } from "@/lib/tier-data";

export const metadata: Metadata = {
  title: "Loadouts Warframe — Setups para Steel Path, Farm e Boss",
  description: "Organize combinações de Warframe, armas e notas por objetivo e consulte seus loadouts depois.",
  alternates: { canonical: "/loadouts" },
  openGraph: {
    title: "Loadouts Warframe — Setups para Steel Path, Farm e Boss | Warframe Fool",
    description: "Salve combinações de Warframe, primária, secundária, melee e notas por objetivo.",
    url: "/loadouts"
  },
  twitter: {
    card: "summary_large_image",
    title: "Loadouts Warframe — Setups para Steel Path, Farm e Boss",
    description: "Organize combinações de Warframe, armas e notas por objetivo e consulte seus loadouts depois."
  }
};

export default async function LoadoutsPage() {
  const tierList = await getTierListData();

  return (
    <SeoPage
      eyebrow="Loadouts"
      title="Meus Loadouts"
      description="Organize combinações de Warframe, armas e notas por objetivo."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Loadouts", href: "/loadouts" }
      ]}
    >
      <SectionBlock title="Criar e salvar loadout" description="Os loadouts ficam salvos neste navegador.">
        <LoadoutsPanel tierList={tierList} showHeading={false} />
      </SectionBlock>
      <SectionBlock title="Como o salvamento funciona" description="Use a ferramenta como organização rápida para consultar seus setups depois.">
        <div className="grid gap-3 md:grid-cols-2">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Salvo neste navegador</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Seus loadouts ficam guardados localmente no navegador deste dispositivo. Limpar dados do navegador pode remover essas combinações.
            </p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Sincronização futura</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Salvamento em nuvem e conta opcional podem ser adicionados futuramente, mantendo a organização atual por objetivo.
            </p>
          </article>
        </div>
      </SectionBlock>
      <LoadoutPresetCards />
      <SectionBlock title="Quer montar um loadout do zero?" description="Use Minha Conta para marcar quais Warframes e armas você possui antes de montar loadouts.">
        <div className="rounded-lg border border-cyan-300/25 bg-cyan-300/10 p-4">
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            Marque seus itens em Minha Conta e use o Planejador para gerar prioridade, Warframe, armas, farm recomendado e onde gastar Forma. Depois você pode voltar aqui para salvar a combinação.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild>
              <Link href="/planejador">Abrir Planejador</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/minha-conta">Abrir Minha Conta</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/comparar">Comparar itens</Link>
            </Button>
          </div>
        </div>
      </SectionBlock>
      <InternalLinks
        links={[
          { title: "Planejador", description: "Escolha prioridade antes de salvar um loadout novo.", href: "/planejador" },
          { title: "Builds", description: "Use os guias de build antes de salvar combinações finais.", href: "/builds" },
          { title: "Steel Path", description: "Monte loadouts voltados para conteúdo difícil.", href: "/steel-path" },
          { title: "Farm", description: "Organize loadouts para repetição e eficiência.", href: "/farm" }
        ]}
      />
    </SeoPage>
  );
}
