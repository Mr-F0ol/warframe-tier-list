import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Farm de Foco Warframe 2026 — Melhores Lugares para Farmar Pontos de Escola",
  description: "Guia de farm de foco no Warframe com lentes, Sanctuary Onslaught, métodos para iniciante, intermediário e avançado, dicas e erros comuns.",
  alternates: { canonical: "/farm-foco-warframe" },
  openGraph: {
    title: "Farm de Foco Warframe 2026 | WarframeFool",
    description: "Aprenda a farmar pontos de escola com lentes, convergência e rotas por estágio da conta.",
    url: "/farm-foco-warframe"
  }
};

const methodRows = [
  {
    label: "Iniciante",
    cells: ["Missões que você completa sem morrer, com lente no Warframe mais usado.", "Consistência, aprender convergência e desbloquear primeiros nós.", "Não coloque lente em item que você troca toda hora."]
  },
  {
    label: "Intermediário",
    cells: ["Sanctuary Onslaught normal ou missões densas com Warframe de clear.", "Gerar afinidade rápido sem exigir build endgame.", "Use uma lente melhor quando já tiver certeza da escola."]
  },
  {
    label: "Avançado",
    cells: ["Elite Sanctuary Onslaught com Warframe de clear e equipe estável.", "Farm direto de foco por afinidade com ritmo alto.", "Entre com build pronta; testar setup novo durante o farm reduz muito a consistência."]
  }
];

const tips = [
  {
    title: "Use lente no item certo",
    description: "Se o Warframe mata com habilidade, a lente nele costuma render melhor. Se a arma carrega a missão, coloque lente na arma que realmente recebe afinidade.",
    badge: "Lentes",
    badgeVariant: "cyan" as const
  },
  {
    title: "Pegue orbes de convergência",
    description: "A convergência aumenta o ganho de foco por tempo limitado. Planeje a rota para matar bastante logo depois de pegar o orbe.",
    badge: "Convergência",
    badgeVariant: "meta" as const
  },
  {
    title: "Escolha a escola antes",
    description: "A lente define qual escola recebe foco. Evite distribuir pontos sem plano se você ainda precisa terminar Zenurik, Madurai ou Unairu.",
    badge: "Prioridade",
    badgeVariant: "steel" as const
  },
  {
    title: "Leve clear confortável",
    description: "Foco vem de afinidade. Quanto mais consistente o clear, melhor o resultado sem precisar inventar uma rota complicada.",
    badge: "Clear",
    badgeVariant: "farm" as const
  }
];

const mistakes = [
  {
    title: "Lente em equipamento errado",
    description: "Colocar lente em arma que quase não mata ou em item que não está no nível máximo reduz muito o retorno.",
    badge: "Erro comum",
    badgeVariant: "outline" as const
  },
  {
    title: "Ignorar sobrevivência",
    description: "Morrer durante convergência corta o ritmo e atrapalha a sessão. Ajuste defesa antes de buscar dano máximo.",
    badge: "Segurança",
    badgeVariant: "steel" as const
  },
  {
    title: "Trocar de escola toda hora",
    description: "Escolha uma escola prioritária e termine os nós importantes antes de espalhar foco em todas ao mesmo tempo.",
    badge: "Foco",
    badgeVariant: "cyan" as const
  },
  {
    title: "Entrar no ESO sem build pronta",
    description: "Elite Sanctuary Onslaught pune setup fraco. Se o clear cair, volte para método intermediário e melhore a build.",
    badge: "Endgame",
    badgeVariant: "meta" as const
  }
];

const faq = [
  {
    question: "Qual é o melhor lugar para farmar foco?",
    answer: "Para contas avançadas, Elite Sanctuary Onslaught costuma ser a rota mais direta e consistente. Para contas em evolução, Sanctuary Onslaught normal e missões densas com lente bem colocada são mais confortáveis."
  },
  {
    question: "O que são lentes de foco?",
    answer: "Lentes convertem parte da afinidade recebida por um equipamento no nível máximo em pontos de uma escola específica. A escola da lente define para onde os pontos vão."
  },
  {
    question: "Vale usar lente Lua ou Eidolon cedo?",
    answer: "Use lentes melhores quando você já sabe qual escola quer evoluir. Se ainda está testando, comece com uma lente mais simples para não desperdiçar recurso."
  },
  {
    question: "Farm de foco precisa de grupo?",
    answer: "Não precisa, mas um grupo com bom clear deixa Sanctuary Onslaught e Elite Sanctuary Onslaught mais estáveis. Solo funciona melhor quando sua build já limpa rápido."
  }
];

export default function FarmFocoWarframePage() {
  return (
    <SeoPage
      eyebrow="Farm"
      title="Farm de Foco Warframe 2026"
      description="Aprenda a ganhar pontos de escola com lentes, convergência e métodos por estágio da conta."
    >
      <SectionBlock title="O que é foco?" description="Foco é o recurso usado para desbloquear e evoluir habilidades das escolas do Operador: Zenurik, Madurai, Unairu, Vazarin e Naramon.">
        <GuideCardGrid
          items={[
            { title: "Pontos de escola", description: "Você gasta foco para liberar nós, melhorar habilidades e avançar a árvore escolhida.", badge: "Progressão", badgeVariant: "cyan" },
            { title: "Lentes", description: "A lente instalada define qual escola recebe os pontos gerados pela afinidade daquele equipamento.", badge: "Conversão", badgeVariant: "meta" },
            { title: "Convergência", description: "Orbes amarelos aparecem em missão quando há lente equipada e aumentam o ganho por um curto período.", badge: "Ritmo", badgeVariant: "farm" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Melhor lugar para farmar foco" description="Elite Sanctuary Onslaught é a rota mais forte quando você já tem build de clear, mas não é a melhor primeira opção para toda conta.">
        <GuideCardGrid
          items={[
            { title: "Melhor método avançado", description: "Elite Sanctuary Onslaught com Warframe de clear, lente boa e rotação estável.", badge: "Endgame", badgeVariant: "steel" },
            { title: "Melhor método intermediário", description: "Sanctuary Onslaught normal ou missões com muita densidade, sem exigir o mesmo nível de investimento.", badge: "Intermediário", badgeVariant: "cyan" },
            { title: "Melhor método iniciante", description: "Missões seguras que você já completa rápido, usando lente no Warframe ou arma que mais recebe afinidade.", badge: "Iniciante", badgeVariant: "outline" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Métodos por estágio da conta" description="Não force ESO se sua build ainda falha; foco bom é foco que você consegue repetir.">
        <GuideTable columns={["Onde farmar", "Objetivo", "Atenção"]} rows={methodRows} />
      </SectionBlock>

      <SectionBlock title="Dicas para farmar mais rápido" description="A maior parte do ganho vem de escolher bem a lente, matar rápido e aproveitar a convergência.">
        <GuideCardGrid items={tips} columns="four" />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Evite perder tempo em setups que parecem bons, mas geram pouco foco na prática.">
        <GuideCardGrid items={mistakes} columns="four" />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Escola Warframe", description: "Decida primeiro se seu foco vai para Zenurik, Madurai, Unairu, Vazarin ou Naramon.", href: "/melhor-escola-warframe" },
          { title: "Melhor Amp do Operador", description: "Combine sua escola com um Amp útil para Operador, Eidolon e Void Angels.", href: "/melhor-amp-operador-warframe" },
          { title: "Farm Warframe", description: "Veja outros guias de farm para créditos, recursos e rotas repetidas.", href: "/farm" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
