import type { Metadata } from "next";
import Link from "next/link";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteMeta } from "@/data/siteMeta";

export const metadata: Metadata = {
  title: "Farm Warframe — Guias de Créditos, Endo, Kuva e Recursos",
  description: "Guia de farm Warframe em português com créditos, Endo, Kuva, Oxio, Criótico, Telúrio, Foco e recursos importantes por estágio da conta.",
  alternates: { canonical: "/farm" },
  openGraph: {
    title: "Farm Warframe — Guias de Créditos, Endo, Kuva e Recursos",
    description: "Guias de farm para créditos, recursos e evolução consistente no Warframe.",
    url: "/farm"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm Warframe — Guias de Créditos, Endo, Kuva e Recursos",
    description: "Guia de farm Warframe em português com créditos, Endo, Kuva, Oxio, Criótico, Telúrio, Foco e recursos importantes por estágio da conta."
  }
};

export default function FarmPage() {
  return (
    <SeoPage
      eyebrow="Farm"
      title="Farm Warframe"
      description="Organize créditos, recursos e equipamentos para repetir missões com menos travas e mais consistência."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" }
      ]}
    >
      <SectionBlock title="Guias de farm" description={`Comece pelo gargalo da sua conta: créditos, recursos, mobilidade ou sobrevivência. Base revisada em ${siteMeta.lastUpdated} para ${siteMeta.updateBase}.`}>
        <InfoCardGrid
          cards={[
            { title: "Farm de créditos", description: "Métodos por estágio da conta, equipamentos recomendados, booster e erros comuns.", href: "/farm-creditos", tags: ["Créditos"] },
            { title: "Farm de Endo", description: "Organize recursos para evoluir mods sem gastar Endo em prioridades erradas.", href: "/farm-endo", tags: ["Endo"] },
            { title: "Farm de Kuva", description: "Planeje Kuva para Riven sem sacrificar mods, Arcanes e builds base.", href: "/farm-kuva", tags: ["Kuva"] },
            { title: "Farm de Oxio", description: "Rotas Corpus, clear consistente e cuidados para farmar Oxio sem perder ritmo.", href: "/farm-oxio", tags: ["Oxio"] },
            { title: "Farm de Criótico", description: "Guia para escavação com defesa de objetivo, energia e repetição segura.", href: "/farm-criotico", tags: ["Criótico"] },
            { title: "Farm de Telúrio", description: "Rota segura para um recurso raro, sem prometer números fixos de drop.", href: "/farm-telurio", tags: ["Telúrio"] },
            { title: "Farm de foco", description: "Lentes, convergência e métodos para evoluir Zenurik, Madurai, Unairu, Vazarin e Naramon.", href: "/farm-foco-warframe", tags: ["Foco"] },
            { title: "Warframes para foco", description: "Saryn, Volt, Mirage e outras opções para Sanctuary Onslaught e ESO.", href: "/melhores-warframes-farm-foco", tags: ["ESO"] },
            { title: "Loadout confortável", description: "Salve combinações para repetir farms longos sem remontar tudo manualmente.", href: "/loadouts", tags: ["Organização"] },
            { title: "Melee de mobilidade", description: "Praedos ajuda quando o tempo de deslocamento pesa em rotas repetidas.", href: "/builds/praedos", tags: ["Mobilidade"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Resumo rápido por recurso" description="Use estes cards para escolher uma rota antes de abrir o guia completo.">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {farmSummaryCards.map(card => (
            <Card key={card.resource} className="flex h-full flex-col p-4">
              <h2 className="text-lg font-black text-yellow-100">{card.resource}</h2>
              <dl className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
                <SummaryRow label="Melhor método geral" value={card.bestMethod} />
                <SummaryRow label="Alternativa iniciante" value={card.beginnerAlternative} />
                <SummaryRow label="Warframes úteis" value={card.warframes} />
                <SummaryRow label="Dica rápida" value={card.tip} />
                <SummaryRow label="Erro comum" value={card.commonMistake} />
              </dl>
              <div className="mt-4 pt-1">
                {card.href ? (
                  <Button asChild size="sm" variant="secondary">
                    <Link href={card.href}>Abrir guia</Link>
                  </Button>
                ) : (
                  <Button size="sm" variant="outline" disabled>
                    Guia em breve
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Prioridade prática" description="Farm bom é farm que sua conta consegue repetir sem morrer, sem ficar sem energia e sem depender de setup lento.">
        <InfoCardGrid
          cards={[
            { title: "Conta nova", description: "Use Warframes seguros, armas simples e evite gastar Forma demais só para farm básico.", href: "/melhores-warframes", tags: ["Iniciante"] },
            { title: "Conta intermediária", description: "Procure clear consistente e uma arma reserva para Eximus, bosses ou inimigos resistentes.", href: "/melhores-armas-primarias", tags: ["Consistência"] },
            { title: "Endgame", description: "Invista em Incarnon, Arcanes e variações de loadout quando o farm virar rotina.", href: "/incarnon", tags: ["Endgame"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Farm de créditos", description: "Guia detalhado para organizar crédito sem prometer números irreais.", href: "/farm-creditos" },
          { title: "Farm de Endo", description: "Evolua mods importantes sem desperdiçar recursos cedo.", href: "/farm-endo" },
          { title: "Farm de Kuva", description: "Planeje Rivens e Kuva sem gastar tudo sem limite.", href: "/farm-kuva" },
          { title: "Progressão", description: "Veja onde cada farm entra no roadmap da conta.", href: "/progressao" },
          { title: "Planejador", description: "Receba sugestão de farm conforme estágio, objetivo e investimento.", href: "/planejador" },
          { title: "Loadouts", description: "Salve setups para repetir rotas com mais consistência.", href: "/loadouts" },
          { title: "Steel Path", description: "Monte uma base segura antes de rotas difíceis.", href: "/steel-path" },
          { title: "Builds", description: "Use armas e Warframes adequados para rotas repetidas.", href: "/builds" }
        ]}
      />
    </SeoPage>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold text-cyan-100/85">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

const farmSummaryCards = [
  {
    resource: "Créditos",
    bestMethod: "Index ou Profit-Taker, dependendo do progresso da conta e do loadout disponível.",
    beginnerAlternative: "Dark Sectors e missões rápidas com recompensa de créditos.",
    warframes: "Rhino, Revenant, Wisp ou opções resistentes.",
    tip: "Use booster quando for fazer uma sessão longa.",
    commonMistake: "Farmar créditos em missões lentas sem bônus.",
    href: "/farm-creditos"
  },
  {
    resource: "Endo",
    bestMethod: "Arbitrations, Ayatan Sculptures, dissolução de mods duplicados e missões adequadas ao progresso.",
    beginnerAlternative: "Converter mods duplicados, procurar Ayatan e evitar upar mods que serão substituídos cedo.",
    warframes: "Dante, Revenant, Wisp, Khora ou outro Warframe seguro.",
    tip: "Evolua primeiro dano, multishot, sobrevivência e utilidade usados em várias builds.",
    commonMistake: "Upar muitos mods ao mesmo tempo ou gastar Endo em mod pouco usado.",
    href: "/farm-endo"
  },
  {
    resource: "Kuva",
    bestMethod: "Kuva Survival, Kuva Siphon/Flood, Requiem, Steel Path e recompensas específicas conforme progresso.",
    beginnerAlternative: "Kuva Siphon/Flood quando disponíveis e desbloqueio do conteúdo necessário.",
    warframes: "Revenant, Dante, Protea e Wisp ajudam pela estabilidade.",
    tip: "Defina limite de rolagens e use booster apenas quando a sessão for longa e planejada.",
    commonMistake: "Gastar Kuva tentando rolar Riven sem limite claro.",
    href: "/farm-kuva"
  },
  {
    resource: "Oxio",
    bestMethod: "Missões Corpus com boa densidade e clear estável.",
    beginnerAlternative: "Rotas Corpus seguras, mesmo que sejam menos rápidas.",
    warframes: "Saryn, Protea, Wisp e Dante.",
    tip: "Use arma de clear para manter ritmo.",
    commonMistake: "Escolher missão lenta ou com baixa densidade.",
    href: "/farm-oxio"
  },
  {
    resource: "Criótico",
    bestMethod: "Escavação com defesa de objetivo e energia sob controle.",
    beginnerAlternative: "Escavações de nível confortável, abrindo poucos extratores por vez.",
    warframes: "Wisp, Protea, Dante e Citrine.",
    tip: "Proteja o extrator antes de tentar acelerar.",
    commonMistake: "Abrir objetivos demais sem defesa suficiente.",
    href: "/farm-criotico"
  },
  {
    resource: "Telúrio",
    bestMethod: "Missões onde o recurso pode aparecer e que você consegue repetir com consistência.",
    beginnerAlternative: "Sessões curtas com Warframe seguro e rota confortável.",
    warframes: "Revenant, Wisp, Dante e Protea.",
    tip: "Combine o farm com outro objetivo útil quando possível.",
    commonMistake: "Esperar drop fixo ou insistir em rota que você não aguenta repetir.",
    href: "/farm-telurio"
  },
  {
    resource: "Foco",
    bestMethod: "Método com lente bem posicionada, boa densidade e coleta de convergência.",
    beginnerAlternative: "Começar com lentes simples e uma build segura antes de otimizar.",
    warframes: "Saryn, Volt, Mirage ou Warframes de clear confortáveis.",
    tip: "Coloque lente no equipamento que realmente recebe afinidade.",
    commonMistake: "Trocar método sem entender para onde vai a afinidade.",
    href: "/farm-foco-warframe"
  },
  {
    resource: "Cristais Arcanos",
    bestMethod: "Priorize atividades relacionadas a Arcanes que sua conta consegue repetir com segurança.",
    beginnerAlternative: "Fortalecer sobrevivência e dano antes de entrar em rotas mais exigentes.",
    warframes: "Revenant, Dante, Wisp e suportes resistentes.",
    tip: "Planeje o farm junto com a Arcane que você realmente pretende usar.",
    commonMistake: "Farmar sem objetivo claro de Arcane ou build.",
    href: ""
  }
];
