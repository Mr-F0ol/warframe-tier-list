import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Guia Eidolon Warframe 2026 — Como Capturar Teralyst, Gantulyst e Hydrolyst",
  description: "Guia em português para caçar Eidolon no Warframe com Amp, escolas de foco, lures, funções do squad, erros comuns e preparação para Teralyst, Gantulyst e Hydrolyst.",
  alternates: { canonical: "/guia-eidolon-warframe" },
  openGraph: {
    title: "Guia Eidolon Warframe 2026 | WarframeFool",
    description: "Aprenda a preparar Amp, foco, lures e loadout para capturar Eidolons com mais consistência.",
    url: "/guia-eidolon-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Guia Eidolon Warframe 2026 — Como Capturar Teralyst, Gantulyst e Hydrolyst",
    description: "Guia em português para caçar Eidolon no Warframe com Amp, escolas de foco, lures, funções do squad, erros comuns e preparação."
  }
};

const eidolonRows = [
  {
    label: "Teralyst",
    cells: ["Primeiro Eidolon da sequência e melhor ponto para aprender.", "Amp decente, lures carregadas e arma forte contra articulações.", "Priorize consistência; não tente acelerar antes de entender o ciclo."]
  },
  {
    label: "Gantulyst",
    cells: ["Mais pressão, mais área de perigo e punição maior para lures mal cuidadas.", "Squad com função clara, suporte defensivo e dano em articulações.", "Proteja lures e evite ficar parado em ataques de área."]
  },
  {
    label: "Hydrolyst",
    cells: ["Etapa mais exigente da caçada tradicional.", "Amp forte, Madurai ou suporte bem coordenado, cura e controle de caos visual.", "Entre só quando a equipe já faz Teralyst e Gantulyst sem travar."]
  }
];

const faq = [
  {
    question: "Qual Amp usar para Eidolon?",
    answer: "1-2-3 já ajuda muito quem está começando. Para contas avançadas, 5-4-7 e 7-4-7 são escolhas fortes, principalmente com Arcanes de Amp e escola bem evoluída."
  },
  {
    question: "Preciso de Volt para Eidolon?",
    answer: "Volt é uma das escolhas mais fortes porque o escudo ajuda o dano do Amp e das armas, mas uma caçada casual pode funcionar com outros Warframes seguros e bem preparados."
  },
  {
    question: "Qual escola de foco usar em Eidolon?",
    answer: "Madurai é a escola ofensiva mais comum para dano do Operador. Unairu e Vazarin podem ajudar em segurança, mas Madurai costuma ser a prioridade para caçadas focadas em velocidade."
  },
  {
    question: "Por que capturar em vez de matar?",
    answer: "Capturar exige lures carregadas e tende a ser o objetivo principal porque melhora o retorno da caçada. Se as lures não estiverem prontas, a run perde valor."
  }
];

export default function GuiaEidolonWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Guia Eidolon Warframe 2026 — Como Capturar Teralyst, Gantulyst e Hydrolyst",
    description: metadata.description || "",
    path: "/guia-eidolon-warframe"
  });

  return (
    <SeoPage
      eyebrow="Eidolon"
      title="Guia Eidolon Warframe 2026"
      description="Prepare Amp, escola de foco, lures e loadout para capturar Teralyst, Gantulyst e Hydrolyst com mais consistência."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Guia Eidolon", href: "/guia-eidolon-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="O que são Eidolons?" description="Eidolons são bosses noturnos das Planícies de Eidolon. A luta alterna dano do Operador nos escudos e dano do Warframe nas articulações.">
        <GuideCardGrid
          items={[
            { title: "Escudo com Amp", description: "Use o Operador para remover o escudo. Sem um Amp decente, essa etapa fica lenta e cansativa.", badge: "Operador", badgeVariant: "warframe" },
            { title: "Articulações com arma", description: "Quando o escudo cai, mire nas partes vulneráveis com arma de alto dano e elemento adequado.", badge: "Dano", badgeVariant: "tierS" },
            { title: "Lures para captura", description: "Lures carregadas mantêm o Eidolon preso e permitem finalizar a captura com melhor recompensa.", badge: "Captura", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Checklist antes da caçada" description="Caçada boa começa antes de encontrar o boss. Resolva estes pontos para evitar uma run quebrada.">
        <GuideCardGrid
          items={[
            { title: "Amp pronto", description: "Evite entrar com Mote Amp. Um Amp modular simples já muda muito o ritmo da luta.", href: "/melhor-amp-operador-warframe", badge: "Obrigatório", badgeVariant: "cyan" },
            { title: "Escola definida", description: "Madurai é a escolha ofensiva padrão; Zenurik pode ajudar contas que ainda sofrem com energia fora da caçada.", href: "/melhor-escola-warframe", badge: "Foco", badgeVariant: "meta" },
            { title: "Arma de articulação", description: "Leve arma forte contra alvo único. Felarx e outras armas de burst podem cumprir esse papel quando bem buildadas.", href: "/builds/felarx", badge: "Bosses", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Ordem da luta" description="Repita o ciclo com calma até o grupo ficar consistente. Velocidade vem depois.">
        <GuideCardGrid
          items={[
            { title: "1. Carregar lures", description: "Hackeie lures e carregue com Vomvalysts antes de avançar demais na luta.", badge: "Preparação", badgeVariant: "outline" },
            { title: "2. Remover escudo", description: "Use Amp, buffs do Operador e posicionamento para derrubar o escudo do Eidolon.", badge: "Amp", badgeVariant: "cyan" },
            { title: "3. Quebrar articulação", description: "Quando o escudo cair, use sua arma de alvo único para quebrar a parte vulnerável.", badge: "Dano", badgeVariant: "tierS" },
            { title: "4. Proteger a captura", description: "Mantenha lures vivas, cuide de status e finalize só quando a captura estiver garantida.", badge: "Controle", badgeVariant: "steel" }
          ]}
          columns="four"
        />
      </SectionBlock>

      <SectionBlock title="Comparação dos Eidolons" description="Use a tabela para saber quando avançar para a próxima etapa da caçada.">
        <GuideTable columns={["Função", "Preparação", "Atenção"]} rows={eidolonRows} />
      </SectionBlock>

      <SectionBlock title="Funções úteis no squad" description="Mesmo em caçadas casuais, separar funções reduz confusão e perda de lures.">
        <GuideCardGrid
          items={[
            { title: "Dano de escudo", description: "Jogador focado em Amp, Madurai e Arcanes de Amp para acelerar a fase do Operador.", href: "/arcanes-amp-warframe", badge: "Amp", badgeVariant: "meta" },
            { title: "Dano de articulação", description: "Jogador com arma forte de alvo único para quebrar partes vulneráveis assim que o escudo cai.", href: "/tier-list", badge: "Arma", badgeVariant: "tierS" },
            { title: "Suporte e lures", description: "Jogador que mantém lures vivas, recupera aliados e evita que a luta vire caos.", badge: "Suporte", badgeVariant: "cyan" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="A maioria das caçadas ruins falha por preparação, não por falta de dano perfeito.">
        <GuideCardGrid
          items={[
            { title: "Entrar com Amp fraco", description: "O escudo demora demais e a luta inteira perde ritmo.", badge: "Amp", badgeVariant: "outline" },
            { title: "Ignorar lures", description: "Sem lures carregadas e próximas, a captura pode falhar mesmo com dano suficiente.", badge: "Captura", badgeVariant: "steel" },
            { title: "Quebrar articulação cedo demais", description: "Avançar sem preparar lures e posicionamento cria mais problemas do que velocidade.", badge: "Timing", badgeVariant: "cyan" }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Amp do Operador", description: "Escolha o Amp para derrubar escudos de Eidolon com mais conforto.", href: "/melhor-amp-operador-warframe" },
          { title: "Arcanes de Amp", description: "Veja Arcanes úteis para dano e consistência do Operador.", href: "/arcanes-amp-warframe" },
          { title: "Melhor Escola Warframe", description: "Compare Madurai, Zenurik, Unairu, Vazarin e Naramon.", href: "/melhor-escola-warframe" },
          { title: "Build Felarx", description: "Use uma arma forte para alvo pesado e bosses.", href: "/builds/felarx" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
