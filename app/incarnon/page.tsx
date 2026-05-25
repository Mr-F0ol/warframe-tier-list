import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { incarnonWeapons } from "@/data/weapons";
import { itemListJsonLd } from "@/lib/seo";

const items = incarnonWeapons();

export const metadata: Metadata = {
  title: "Melhores Armas Incarnon Warframe — Guia Meta",
  description: "Guia de armas Incarnon para priorizar investimento no Warframe: primárias, secundárias e melee.",
  alternates: { canonical: "/incarnon" },
  openGraph: {
    title: "Armas Incarnon Warframe | WarframeFool",
    description: "Prioridades Incarnon para Steel Path, bosses, farm e endgame.",
    url: "/incarnon"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhores Armas Incarnon Warframe — Guia Meta",
    description: "Guia de armas Incarnon para priorizar investimento no Warframe: primárias, secundárias e melee."
  }
};

export default function IncarnonPage() {
  const itemListSchema = itemListJsonLd({
    name: "Armas Incarnon Warframe",
    description: "Prioridades Incarnon para Steel Path, bosses, farm e endgame.",
    path: "/incarnon",
    items: items.map(item => ({
      name: item.name,
      url: item.buildHref,
      description: item.description
    }))
  });

  return (
    <SeoPage
      eyebrow="Incarnon"
      title="Guia de armas Incarnon"
      description="Uma página dedicada para decidir quais armas Incarnon merecem adaptador, Forma e Catalisador primeiro."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Incarnon", href: "/incarnon" }
      ]}
      structuredData={itemListSchema}
    >
      <SectionBlock title="Prioridades Incarnon" description="A lista junta primárias, secundárias e melee para comparar investimento entre categorias.">
        <RankCardGrid
          items={items.map(weapon => ({
            id: weapon.id,
            name: weapon.name,
            tier: weapon.tier,
            description: weapon.description,
            focus: weapon.focus,
            recommendedFor: weapon.recommendedFor,
            href: weapon.buildHref,
            meta: `${weapon.categoryLabel} · ${weapon.type}`
          }))}
        />
      </SectionBlock>

      <SectionBlock title="Regra prática" description="Incarnon é forte, mas nem todo adaptador precisa virar prioridade imediata.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Priorize impacto real</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Escolha armas que resolvem uma dor da sua conta: clear, alvo pesado, mobilidade ou stat-stick.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Confira evoluções</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A arma só mostra o teto real quando as evoluções combinam com sua build e seu estilo de jogo.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Evite gastar no escuro</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Teste a sensação da arma antes de colocar muitas Formas ou comprar recursos só por hype.</p>
          </article>
        </div>
      </SectionBlock>


      <SectionBlock title="Evoluções Incarnon" description="Use este bloco como checklist antes de fechar uma build cara.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Função antes de número</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Escolha evoluções pensando no papel da arma: clear, boss, primer, stat-stick ou mobilidade.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Teste em missão real</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Simulador e teoria ajudam, mas o conforto real aparece em Steel Path, boss ou farm repetido.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Registre sua escolha</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Anote evoluções, motivo da escolha e variações por facção antes de investir pesado.</p>
          </article>
        </div>
      </SectionBlock>
      <InternalLinks
        links={[
          { title: "Build Felarx", description: "Estrutura para alvo pesado.", href: "/builds/felarx" },
          { title: "Melhores Incarnon", description: "Ranking dedicado de prioridades Incarnon.", href: "/melhores-incarnon" },
          { title: "Build Torid Incarnon", description: "Estrutura para clear em Steel Path.", href: "/builds/torid-incarnon" },
          { title: "Build Laetum", description: "Estrutura para secundária de dano consistente.", href: "/builds/laetum" },
          { title: "Melhores melee", description: "Compare Praedos, Ceramic Dagger e Dual Ichor.", href: "/melhores-melee" }
        ]}
      />
    </SeoPage>
  );
}
