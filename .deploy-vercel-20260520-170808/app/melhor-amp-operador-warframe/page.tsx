import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Melhor Amp do Operador Warframe 2026 — Builds 1-2-3, 5-4-7 e 7-4-7",
  description: "Guia em português para escolher Amp do Operador no Warframe: entenda 1-2-3, 5-4-7, 7-4-7, Eidolon, uso geral e peças dos Quills e Vox Solaris.",
  alternates: { canonical: "/melhor-amp-operador-warframe" },
  openGraph: {
    title: "Melhor Amp do Operador Warframe 2026 | WarframeFool",
    description: "Compare builds 1-2-3, 5-4-7 e 7-4-7 para Operador, Eidolon e uso geral.",
    url: "/melhor-amp-operador-warframe"
  }
};

const ampBuilds = [
  {
    title: "5-4-7",
    description: "Melhor Amp geral para muitos jogadores avançados: tiro primário confortável, disparo alternativo útil e Brace forte para crítico.",
    badge: "Melhor geral",
    badgeVariant: "meta" as const
  },
  {
    title: "7-4-7",
    description: "Ótimo para quem já domina posicionamento do Operador e quer um Amp agressivo para alvos importantes e conteúdo endgame.",
    badge: "Endgame",
    badgeVariant: "steel" as const
  },
  {
    title: "1-2-3",
    description: "Boa rota inicial para sair do Amp básico e começar a lidar melhor com Eidolon, anjos e inimigos vulneráveis a dano do Operador.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  }
];

const useCases = [
  {
    title: "Melhor Amp para Eidolon",
    description: "7-4-7 é uma escolha forte quando você já tem acesso às peças avançadas e sabe jogar perto do alvo. Se ainda está evoluindo, 1-2-3 já é um salto enorme sobre o Amp inicial.",
    badge: "Eidolon",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor Amp para uso geral",
    description: "5-4-7 tende a ser mais confortável para missões variadas porque combina alcance, disparo alternativo útil e bom potencial de crítico.",
    badge: "Geral",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor para quem está começando",
    description: "1-2-3 é uma rota clara para progredir sem exigir toda a reputação avançada de Vox Solaris logo no começo.",
    badge: "Primeiro Amp",
    badgeVariant: "cyan" as const
  }
];

const tableRows = [
  {
    label: "1-2-3",
    cells: ["Raplak Prism, Shraksun Scaffold e Lohrin Brace.", "Primeiro Amp real, início em Eidolon e progresso pós-Operador.", "Priorize se você ainda está construindo reputação inicial."]
  },
  {
    label: "5-4-7",
    cells: ["Cantic Prism, Phahd Scaffold e Certus Brace.", "Uso geral, Void Angels, missões variadas e jogador que quer conforto.", "Boa ponte entre controle, alcance e dano."]
  },
  {
    label: "7-4-7",
    cells: ["Klamora Prism, Phahd Scaffold e Certus Brace.", "Endgame, alvo importante e jogador confortável com distância curta.", "Forte, mas exige melhor posicionamento."]
  }
];

const faq = [
  {
    question: "O que significam os números do Amp?",
    answer: "A comunidade usa três números na ordem Prism, Scaffold e Brace. Eles indicam a série das peças, não um ranking automático de poder."
  },
  {
    question: "Qual Amp devo fazer primeiro?",
    answer: "Se você ainda usa o Amp inicial, faça uma combinação simples como 1-2-3. O ganho de conforto é grande e você aprende a função de cada peça antes de investir em 5-4-7 ou 7-4-7."
  },
  {
    question: "5-4-7 é melhor que 7-4-7?",
    answer: "Depende do uso. 5-4-7 costuma ser mais confortável para uso geral; 7-4-7 tende a brilhar quando você domina posicionamento e quer mais pressão em alvos importantes."
  },
  {
    question: "Preciso de Madurai para usar Amp?",
    answer: "Não. Você pode usar Amp com qualquer escola, mas Madurai aumenta muito o teto ofensivo do Operador quando o foco é dano."
  }
];

export default function MelhorAmpOperadorWarframePage() {
  return (
    <SeoPage
      eyebrow="Operador"
      title="Melhor Amp do Operador Warframe 2026"
      description="Entenda Amp, combinações 1-2-3, 5-4-7 e 7-4-7, e escolha uma build para Eidolon, uso geral ou progresso inicial."
    >
      <SectionBlock title="O que é Amp?" description="Amp é a arma modular do Operador/Drifter. Ele muda o disparo principal, o disparo alternativo e bônus de atributos por meio de três peças.">
        <GuideCardGrid
          items={[
            { title: "Prism", description: "Define o disparo principal do Amp. É o primeiro número da combinação.", badge: "1º número", badgeVariant: "cyan" },
            { title: "Scaffold", description: "Define o disparo alternativo. É o segundo número e costuma mudar bastante o uso contra grupos ou bosses.", badge: "2º número", badgeVariant: "outline" },
            { title: "Brace", description: "Adiciona bônus ao conjunto. O Certus Brace é muito usado em builds avançadas pelo valor ofensivo.", badge: "3º número", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Como ler 1-2-3, 5-4-7 e 7-4-7" description="Os números seguem a ordem Prism, Scaffold e Brace. Eles ajudam a falar da build sem escrever o nome completo de cada peça.">
        <GuideTable columns={["Peças", "Melhor para", "Comentário"]} rows={tableRows} />
      </SectionBlock>

      <SectionBlock title="Melhores builds de Amp" description="Escolhas práticas para sair do Amp inicial e preparar o Operador para conteúdo mais difícil.">
        <GuideCardGrid items={ampBuilds} />
      </SectionBlock>

      <SectionBlock title="Melhor Amp por objetivo" description="Escolha pelo problema que você quer resolver agora.">
        <GuideCardGrid items={useCases} />
      </SectionBlock>

      <SectionBlock title="Onde conseguir as peças" description="As peças de Amp são compradas com reputação em sindicatos ligados ao Operador.">
        <GuideCardGrid
          items={[
            { title: "Peças 1 a 4", description: "Vêm dos Quills com Onkko em Cetus. São a rota natural para o primeiro Amp útil.", badge: "Cetus", badgeVariant: "cyan" },
            { title: "Peças 5 a 7", description: "Vêm da Vox Solaris com Little Duck em Fortuna. Elas pedem mais progresso, mas abrem builds endgame.", badge: "Fortuna", badgeVariant: "steel" },
            { title: "Monte antes de gildar", description: "Escolha as três peças com calma. Depois de construir um Amp, trate como investimento real da sua conta.", badge: "Atenção", badgeVariant: "outline" }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Escola Warframe", description: "Escolha Zenurik, Madurai, Unairu, Vazarin ou Naramon para combinar com seu Amp.", href: "/melhor-escola-warframe" },
          { title: "Farm de Foco", description: "Ganhe pontos para evoluir a escola que sustenta seu Operador.", href: "/farm-foco-warframe" },
          { title: "Arcanes de Amp", description: "Melhore dano, crítico e consistência do Operador.", href: "/arcanes-amp-warframe" },
          { title: "Guia Eidolon", description: "Use Amp e foco em caçadas de Teralyst, Gantulyst e Hydrolyst.", href: "/guia-eidolon-warframe" },
          { title: "Void Angels", description: "Prepare o Operador para lutas do Zariman.", href: "/void-angels-warframe" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
