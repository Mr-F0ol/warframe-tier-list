import type { Metadata } from "next";
import { InternalLinks, RankCardGrid, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { weaponsByCategory } from "@/data/weapons";

const secondaryWeapons = weaponsByCategory("secondary");

export const metadata: Metadata = {
  title: "Melhores armas secundárias Warframe",
  description: "Melhores secundárias para Steel Path, primer, bosses e dano consistente no Warframe.",
  alternates: { canonical: "/melhores-armas-secundarias" },
  openGraph: {
    title: "Melhores armas secundárias Warframe | WarframeFool",
    description: "Ranking prático de secundárias como Laetum, Dual Toxocyst, Lex Incarnon e Kuva Nukor.",
    url: "/melhores-armas-secundarias"
  }
};

export default function MelhoresArmasSecundariasPage() {
  return (
    <SeoPage
      eyebrow="Armas secundárias"
      title="Melhores armas secundárias no Warframe"
      description="Secundárias para dano reserva, primer de status, alvo pesado e consistência em Steel Path."
    >
      <SectionBlock title="Secundárias recomendadas" description="Lista editável para manter o site simples de atualizar quando o meta mudar.">
        <RankCardGrid
          items={secondaryWeapons.map(weapon => ({
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

      <SectionBlock title="Função da secundária" description="Uma boa secundária não precisa competir com a primária; ela pode cobrir o que falta no loadout.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Dano confiável</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Laetum e Lex Incarnon ajudam quando você precisa de dano direto contra alvos fortes.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Primer</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Kuva Nukor continua útil para aplicar status e habilitar dano de outras peças do loadout.</p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Clear</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Dual Toxocyst Incarnon brilha quando você quer uma secundária que também limpa grupos.</p>
          </article>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Build Laetum", description: "Estrutura editável para dano consistente.", href: "/builds/laetum" },
          { title: "Melhores primárias", description: "Combine sua secundária com uma primária de clear ou alvo pesado.", href: "/melhores-armas-primarias" },
          { title: "Loadouts", description: "Salve combinações quando o banco estiver configurado.", href: "/loadouts" }
        ]}
      />
    </SeoPage>
  );
}
