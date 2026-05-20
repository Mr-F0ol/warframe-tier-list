import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";

const primaryWeapons = weaponsByCategory("primary");

export const metadata: Metadata = {
  title: "Melhores Armas Primárias Warframe — Guia Meta",
  description: "Melhores armas primárias para Steel Path, Incarnon, bosses e clear no Warframe.",
  alternates: { canonical: "/melhores-armas-primarias" },
  openGraph: {
    title: "Melhores armas primárias Warframe | WarframeFool",
    description: "Ranking prático de primárias como Torid Incarnon, Felarx, Latron e Burston.",
    url: "/melhores-armas-primarias"
  }
};

export default function MelhoresArmasPrimariasPage() {
  return (
    <SeoPage
      eyebrow="Armas primárias"
      title="Melhores armas primárias no Warframe"
      description="Primárias para carregar Steel Path, bosses e missões longas, com foco em conforto, dano e investimento responsável."
    >
      <SectionBlock title="Primárias recomendadas" description="Lista focada em armas que resolvem clear, alvo pesado e consistência no endgame.">
        <RankCardGrid
          items={primaryWeapons.map(weapon => ({
            id: weapon.id,
            name: weapon.name,
            tier: weapon.tier,
            description: weapon.description,
            focus: weapon.focus,
            recommendedFor: weapon.recommendedFor,
            href: weapon.buildHref,
            meta: `${weapon.type} · ${weapon.buildDifficulty}`
          }))}
        />
      </SectionBlock>

      <SectionBlock title="Como priorizar" description="Não é obrigatório investir em todas. Escolha pelo problema que sua conta precisa resolver.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Clear de mapa</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Torid Incarnon e opções similares brilham quando o objetivo é limpar densidade de inimigos.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Alvo pesado</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Felarx, Phenmor e outras Incarnon ajudam quando Eximus, bosses ou alvos resistentes travam a missão.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Investimento</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Só coloque muitas Formas depois de confirmar evoluções Incarnon, mods Galvanized e arcanes disponíveis.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Build Felarx", description: "Estrutura para alvo pesado e bosses.", href: "/builds/felarx" },
          { title: "Incarnon", description: "Veja outras prioridades Incarnon.", href: "/incarnon" },
          { title: "Steel Path", description: "Monte uma base de conta para endgame.", href: "/steel-path" }
        ]}
      />
    </SeoPage>
  );
}
