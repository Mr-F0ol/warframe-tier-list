import type { Metadata } from "next";
import { AccountInventory } from "@/components/account-inventory";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { Card } from "@/components/ui/card";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Minha Conta Warframe — Inventário Local e Prioridades",
  description: "Marque Warframes, armas, mods e sistemas que você já possui para receber prioridades, farms e recomendações personalizadas no Warframe Fool.",
  alternates: { canonical: "/minha-conta" },
  openGraph: {
    title: "Minha Conta Warframe — Inventário Local e Prioridades",
    description: "Inventário local em português para marcar itens, prioridades e progresso no Warframe.",
    url: "/minha-conta"
  },
  twitter: {
    card: "summary_large_image",
    title: "Minha Conta Warframe — Inventário Local e Prioridades",
    description: "Marque Warframes, armas, mods e sistemas que você já possui para receber prioridades personalizadas."
  }
};

export default function MinhaContaPage() {
  const schema = articleJsonLd({
    title: "Minha Conta Warframe",
    description: "Inventário local para marcar itens, prioridades e progresso no Warframe Fool.",
    path: "/minha-conta"
  });

  return (
    <SeoPage
      eyebrow="Inventário local"
      title="Minha Conta"
      description="Marque Warframes, armas, mods, Arcanes, sistemas e recursos que você possui ou quer pegar para receber prioridades mais úteis."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Minha Conta", href: "/minha-conta" }
      ]}
      structuredData={schema}
    >
      <SectionBlock title="Como funciona" description="Tudo roda localmente no navegador, sem login e sem sincronização online.">
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Dados locais</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Os dados ficam salvos apenas neste navegador. Não há login nem sincronização online.
            </p>
          </Card>
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Prioridades simples</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              O site usa regras claras para sugerir farms, builds e próximos passos conforme seus itens marcados.
            </p>
          </Card>
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Exportar e importar</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Você pode copiar um JSON para levar o progresso para outro navegador ou resetar tudo quando quiser.
            </p>
          </Card>
        </div>
      </SectionBlock>

      <AccountInventory />

      <InternalLinks
        links={[
          { title: "Planejador", description: "Use seus itens marcados para gerar um plano mais personalizado.", href: "/planejador" },
          { title: "Builds", description: "Abra builds de armas e acompanhe o que está buildando.", href: "/builds" },
          { title: "Farm", description: "Veja recursos recomendados para os itens que você quer pegar.", href: "/farm" },
          { title: "Progressão", description: "Confira o roadmap geral da conta.", href: "/progressao" },
          { title: "Loadouts", description: "Monte setups depois de marcar o que você possui.", href: "/loadouts" }
        ]}
      />
    </SeoPage>
  );
}
