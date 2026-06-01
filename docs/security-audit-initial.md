# Auditoria inicial de segurança

Data da revisão: 2026-06-01

## Estrutura do projeto

- Framework: Next.js `^15.5.18`.
- Router: App Router, com diretório `app/`.
- Gerenciador de pacotes: npm, com `package-lock.json`.
- Scripts existentes antes do hardening: `dev`, `build`, `start`, `lint`, `typecheck`, `check`, `validate:migration`, `db:schema`, `deploy:check`.
- Configuração Next.js: `next.config.ts`.
- Deploy: Vercel, domínio público `https://warframefool.vercel.app`.

## Rotas principais encontradas

- Páginas públicas: `/`, `/comece-aqui`, `/progressao`, `/minha-conta`, `/planejador`, `/comparar`, `/ferramentas`, `/tier-list`, `/builds`, `/builds/[slug]`, `/incarnon`, `/farm`, `/farm-creditos`, `/farm-endo`, `/farm-kuva`, `/farm-oxio`, `/farm-criotico`, `/farm-telurio`, `/loadouts`, `/meta-atual`, `/steel-path`, `/sobre`, `/seguranca`.
- Rotas técnicas: `/robots.txt`, `/sitemap.xml`, `/opengraph-image`.
- Route Handlers: `/api/health`, `/api/loadouts`, `/api/loadouts/[id]`, `/api/tier-list`, `/api/warframes`, `/api/weapons`.
- Server Actions: não encontradas.
- Middleware: não encontrado.

## Estado local e importação/exportação

- `localStorage` é usado em:
  - `components/account-inventory.tsx` e `lib/accountStorage.ts` para Minha Conta;
  - `components/planner-tool.tsx` para planos salvos do Planejador;
  - `components/loadouts-panel.tsx` para loadouts locais.
- `sessionStorage`: não encontrado.
- Importação/exportação de JSON:
  - Minha Conta permite exportar/importar progresso em JSON.
  - Planejador e Loadouts persistem JSON interno no navegador.
- Risco inicial: validação já existia em parte, mas faltava uma camada compartilhada para tamanho, JSON inválido e chaves perigosas como `__proto__`, `prototype` e `constructor`.
- Severidade: média.

## XSS, HTML dinâmico e DOM

- `dangerouslySetInnerHTML` aparece apenas para scripts JSON-LD em:
  - `components/structured-data.tsx`;
  - `components/guide-ui.tsx`;
  - `components/seo/seo-page.tsx`;
  - `components/breadcrumbs.tsx`.
- Esses usos serializam objetos com `JSON.stringify` para `application/ld+json`; não renderizam HTML vindo do usuário.
- `eval`, `new Function`, `innerHTML`, `insertAdjacentHTML` e `document.write`: não encontrados em código da aplicação.
- Links com `target="_blank"` sem `rel="noopener noreferrer"`: não encontrados.
- Severidade: baixa, com recomendação de manter JSON-LD sem dados importados do usuário.

## APIs e CORS

- APIs usam `NextRequest`/`NextResponse`.
- `lib/api-security.ts` já aplica leitura JSON com limite de corpo, erros genéricos e `Cache-Control`.
- CORS customizado não foi encontrado.
- Recomendação: manter CORS desabilitado enquanto não houver consumidor externo legítimo.
- Severidade: baixa.

## Headers HTTP

- Já existia uma configuração de headers em `next.config.ts`.
- Pontos a ajustar:
  - adicionar `poweredByHeader: false`;
  - iniciar CSP em modo `Content-Security-Policy-Report-Only`;
  - remover `preload` do HSTS nesta fase;
  - alinhar HSTS ao escopo inicial `max-age=31536000`.
- Severidade: média.

## Variáveis de ambiente e segredos

- Arquivos `.env` reais versionados: não encontrados.
- `.gitignore` ignora `.env`, `.env.*`, `.env*.local` e preserva `.env.example`.
- `.env.example` continha uma URL de banco com usuário/senha de exemplo. Não parecia segredo real, mas deve virar placeholder para evitar cópia acidental.
- Referências internas a `DATABASE_URL` existem em `lib/db.ts` e `scripts/apply-schema.js`; isso é uso interno esperado.
- Documentação antiga em `DEPLOY.md` cita `DATABASE_URL` com exemplos. Valores devem permanecer como placeholders, nunca credenciais reais.
- Severidade: baixa a média.

## Integrações externas e origens

- Imagens remotas permitidas no Next.js/CSP:
  - `https://cdn.warframestat.us`;
  - `https://wiki.warframe.com`;
  - `https://www-static.warframe.com`.
- Conexões externas em runtime público: não encontradas.
- Fonts externas: não encontradas; fontes usam origem local ou `data:`.
- Analytics externos: não encontrados.
- Severidade: baixa.

## Dependências e supply chain

- Dependências diretas relevantes: Next.js, React, Radix UI, Lucide, Tailwind, `pg`.
- `pg` é usado pelo caminho interno de loadouts/banco, embora a experiência pública atual funcione localmente.
- Não foi identificada dependência obviamente crítica e sem uso por leitura rápida, mas uma verificação automatizada de unused deps não está configurada.
- `npm audit` anterior indicou vulnerabilidade moderada transitiva em `postcss` dentro de `next`, sem correção automática segura sem mudança quebrável.
- Severidade: média.

## Riscos priorizados

| Risco | Severidade | Observação |
| --- | --- | --- |
| Importação JSON malformada ou grande demais | Médio | Pode afetar Minha Conta/Planejador/Loadouts no navegador. |
| Chaves perigosas em JSON importado | Médio | Deve ser bloqueado para reduzir risco de prototype pollution. |
| CSP obrigatória sem fase de observação | Médio | Pode quebrar Next.js/estilos se aplicada sem monitoramento. |
| `.env.example` com URL parecendo credencial | Baixo/Médio | Trocar por placeholder. |
| Dependência transitiva vulnerável sem fix seguro | Médio | Documentar e acompanhar via Dependabot. |
| Falta de pipeline unificado de security checks | Médio | Criar workflow dedicado sem deploy. |
