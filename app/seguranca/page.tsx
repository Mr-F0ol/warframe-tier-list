import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Segurança",
  description: "Postura pública de segurança do Warframe Fool: HTTPS, dados locais no navegador, importação de JSON e divulgação responsável.",
  alternates: { canonical: "/seguranca" },
  openGraph: {
    title: "Segurança",
    description: "Postura pública de segurança, dados locais e divulgação responsável do Warframe Fool.",
    url: "/seguranca"
  },
  twitter: {
    card: "summary_large_image",
    title: "Segurança",
    description: "Como o Warframe Fool trata segurança, dados locais e disclosure responsável."
  }
};

export default function SegurancaPage() {
  return (
    <SeoPage
      eyebrow="Segurança"
      title="Segurança"
      description="Resumo público da postura de segurança do Warframe Fool, incluindo HTTPS, dados locais no navegador e divulgação responsável."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Segurança", href: "/seguranca" }
      ]}
    >
      <SectionBlock title="Postura atual" description="O Warframe Fool é um guia público sem login, painel administrativo ou sincronização online nas ferramentas locais.">
        <InfoCardGrid
          cards={[
            {
              title: "HTTPS",
              description: "O site é servido por HTTPS na Vercel. Headers de segurança ajudam a reduzir riscos comuns de navegador.",
              tags: ["HTTPS", "Headers"]
            },
            {
              title: "Dados locais",
              description: "Minha Conta, Planejador e Loadouts salvos ficam apenas neste navegador via localStorage. Não há login nem sincronização online.",
              href: "/minha-conta",
              tags: ["localStorage"]
            },
            {
              title: "Backup local",
              description: "Quando quiser guardar seu progresso, exporte o JSON pelas próprias ferramentas e mantenha uma cópia segura.",
              tags: ["Exportação"]
            }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Dados e privacidade" description="O site foi desenhado para não precisar de dados sensíveis.">
        <div className="grid gap-3 md:grid-cols-3">
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Sem conta de usuário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              O Warframe Fool não pede e-mail, senha, conta Warframe ou login social.
            </p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Exportação controlada</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A importação de progresso aceita apenas JSON no formato esperado, com limite de tamanho e versão.
            </p>
          </article>
          <article className="bg-card/70 p-4">
            <h2 className="font-black text-yellow-100">Conteúdo do usuário</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Notas e textos livres são tratados como texto simples. O site não executa HTML importado.
            </p>
          </article>
        </div>
      </SectionBlock>

      <SectionBlock title="Automação de segurança" description="O repositório usa verificações para reduzir risco em mudanças futuras.">
        <InfoCardGrid
          cards={[
            { title: "Dependabot", description: "Dependências npm e GitHub Actions são revisadas semanalmente.", tags: ["Supply chain"] },
            { title: "CodeQL", description: "Análise estática de JavaScript e TypeScript roda em push, pull request e agenda semanal.", tags: ["Code scanning"] },
            { title: "ZAP Baseline", description: "Varredura baseline pode ser executada manualmente e também roda por agenda contra a produção.", tags: ["DAST"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Divulgação responsável" description="Relate falhas com evidência mínima e sem explorar dados ou contas de terceiros.">
        <div className="bg-card/70 p-4">
          <p className="text-sm leading-6 text-muted-foreground">
            Se encontrar um problema, envie um relatório privado com URL afetada, passos de reprodução, impacto esperado e evidência mínima.
            Não publique detalhes antes da correção e não envie credenciais, tokens ou dados pessoais sensíveis no primeiro contato.
          </p>
          <p className="mt-3 rounded-md border border-border/70 bg-background/60 px-3 py-2 text-sm font-bold text-cyan-100">
            Contato de segurança: Diogofernandes627@gmail.com
          </p>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Última revisão pública de segurança: 1 de junho de 2026.
          </p>
        </div>
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Minha Conta", description: "Entenda os dados locais salvos no navegador.", href: "/minha-conta" },
          { title: "Ferramentas", description: "Veja Planejador, Comparador e Loadouts.", href: "/ferramentas" },
          { title: "Sobre", description: "Conheça o projeto e seus avisos.", href: "/sobre" }
        ]}
      />
    </SeoPage>
  );
}
