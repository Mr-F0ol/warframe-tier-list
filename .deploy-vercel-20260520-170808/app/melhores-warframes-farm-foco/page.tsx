import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Melhores Warframes para Farm de Foco 2026 — ESO, SO e Lentes",
  description: "Guia em português com os melhores Warframes para farm de foco no Warframe, incluindo Saryn, Volt, Mirage, Equinox, lentes, ESO, SO e erros comuns.",
  alternates: { canonical: "/melhores-warframes-farm-foco" },
  openGraph: {
    title: "Melhores Warframes para Farm de Foco 2026 | WarframeFool",
    description: "Escolha Warframes de clear para farmar foco com lentes, Sanctuary Onslaught e Elite Sanctuary Onslaught.",
    url: "/melhores-warframes-farm-foco"
  }
};

const warframeRows = [
  {
    label: "Saryn",
    cells: ["Clear em área e escala muito bem em salas cheias.", "ESO, SO e missões com muita densidade.", "Precisa de build confortável de alcance, força e sustain."]
  },
  {
    label: "Volt",
    cells: ["Discharge limpa grupos e oferece utilidade fora do farm de foco.", "Conta intermediária, foco e conteúdo geral.", "Pode cair em mapas ruins ou quando a build não sustenta energia."]
  },
  {
    label: "Mirage",
    cells: ["Explosive Legerdemain pode limpar salas rapidamente em conteúdo certo.", "Sanctuary Onslaught e farm com inimigos em densidade alta.", "Depende de setup e conforto; não é a opção mais universal."]
  },
  {
    label: "Equinox",
    cells: ["Maim pode limpar grupos quando a build e o ritmo estão alinhados.", "Jogadores que gostam de rotação e controle de mapa.", "Exige mais atenção a energia, alcance e preparação."]
  }
];

const faq = [
  {
    question: "Qual é o melhor Warframe para farm de foco?",
    answer: "Saryn é uma das escolhas mais fortes para ESO e salas densas. Volt e Mirage também são ótimos, dependendo da build, mapa e conforto do jogador."
  },
  {
    question: "Preciso jogar ESO para farmar foco?",
    answer: "Não. ESO é forte para contas preparadas, mas Sanctuary Onslaught normal e missões densas funcionam melhor para quem ainda está montando build."
  },
  {
    question: "Onde colocar a lente de foco?",
    answer: "Coloque a lente no equipamento que realmente recebe afinidade. Em Warframes de habilidade que matam muito, a lente no Warframe costuma fazer sentido."
  },
  {
    question: "Dá para farmar foco com arma em vez de Warframe?",
    answer: "Sim, se a arma for a principal fonte de abates. O importante é alinhar lente, fonte de dano e tipo de missão."
  }
];

export default function MelhoresWarframesFarmFocoPage() {
  return (
    <SeoPage
      eyebrow="Farm de Foco"
      title="Melhores Warframes para Farm de Foco 2026"
      description="Escolha Warframes de clear para ganhar foco com lentes, Sanctuary Onslaught, Elite Sanctuary Onslaught e missões densas."
    >
      <SectionBlock title="O que faz um Warframe ser bom para foco?" description="Farm de foco depende de afinidade. Warframes que limpam grupos rápido tendem a transformar lentes em pontos de escola com mais consistência.">
        <GuideCardGrid
          items={[
            { title: "Clear em área", description: "Quanto mais inimigos caem durante convergência, melhor o rendimento da lente.", badge: "Principal", badgeVariant: "meta" },
            { title: "Sustain de energia", description: "Se a build para toda hora por falta de energia, o farm perde ritmo.", badge: "Conforto", badgeVariant: "cyan" },
            { title: "Sobrevivência", description: "Morrer durante a rotação reduz o ganho e deixa ESO/SO muito menos consistente.", badge: "Segurança", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Ranking prático" description="Escolhas fortes para farmar foco sem depender de números irreais de sessão.">
        <GuideCardGrid
          items={[
            { title: "Saryn", description: "Melhor escolha geral para contas preparadas. Excelente em densidade alta e muito forte em ESO.", badge: "Melhor geral", badgeVariant: "meta" },
            { title: "Volt", description: "Ótimo intermediário: limpa grupos, tem utilidade em vários conteúdos e não fica preso só no farm de foco.", badge: "Versátil", badgeVariant: "cyan" },
            { title: "Mirage", description: "Muito forte em cenários certos com Explosive Legerdemain, principalmente quando o mapa favorece a rotação.", badge: "Clear", badgeVariant: "tierS" },
            { title: "Equinox", description: "Boa opção para quem gosta de Maim e já entende ritmo, alcance e energia.", badge: "Alternativa", badgeVariant: "outline" }
          ]}
          columns="four"
        />
      </SectionBlock>

      <SectionBlock title="Comparação dos Warframes" description="Use a tabela para escolher pelo seu estágio de conta e pelo método de farm.">
        <GuideTable columns={["Ponto forte", "Melhor para", "Atenção"]} rows={warframeRows} />
      </SectionBlock>

      <SectionBlock title="Como montar o loadout" description="A build não precisa ser perfeita, mas precisa matar rápido e repetir sem quebrar.">
        <GuideCardGrid
          items={[
            { title: "Lente no Warframe certo", description: "Se o Warframe mata com habilidade, coloque lente nele. Se a arma mata mais, repense a distribuição.", href: "/farm-foco-warframe", badge: "Lente", badgeVariant: "cyan" },
            { title: "Arma reserva", description: "Leve uma arma para Eximus ou alvo resistente quando o dano em área não resolver.", href: "/builds/laetum", badge: "Backup", badgeVariant: "steel" },
            { title: "Escola prioritária", description: "Defina se o foco vai para Zenurik, Madurai, Unairu, Vazarin ou Naramon antes de gastar lentes melhores.", href: "/melhor-escola-warframe", badge: "Escola", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="A maioria dos farms ruins vem de colocar lente no lugar errado ou entrar com build sem sustain.">
        <GuideCardGrid
          items={[
            { title: "Usar Warframe sem clear", description: "Sobreviver é bom, mas foco precisa de abates e afinidade em ritmo alto.", badge: "Clear", badgeVariant: "outline" },
            { title: "Ignorar energia", description: "Build forte no papel falha se você não consegue manter a rotação.", badge: "Energia", badgeVariant: "cyan" },
            { title: "Forçar ESO cedo demais", description: "Se ESO está falhando, use SO ou missões densas até sua build ficar pronta.", badge: "Progressão", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Farm de Foco", description: "Veja métodos com lentes, convergência, SO e ESO.", href: "/farm-foco-warframe" },
          { title: "Melhor Escola Warframe", description: "Escolha onde investir os pontos de foco primeiro.", href: "/melhor-escola-warframe" },
          { title: "Melhores Warframes", description: "Compare Warframes úteis além do farm de foco.", href: "/melhores-warframes" },
          { title: "Loadouts", description: "Salve sua configuração de farm para repetir depois.", href: "/loadouts" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
