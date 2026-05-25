# Warframe Fool

Warframe Fool é um guia em português para tier list, builds, farms, armas Incarnon, Steel Path, meta atual e organização de loadouts do Warframe.

Stack atual:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- componentes no estilo shadcn/ui
- Vercel como hospedagem principal

> Warframe é marca da Digital Extremes. Este site é um projeto independente de fãs.

## Rodar localmente

Instale as dependências:

```bash
npm install
```

Rode em modo desenvolvimento:

```bash
npm run dev
```

Abra:

```bash
http://localhost:3000
```

Build de produção:

```bash
npm run build
```

Validação de TypeScript:

```bash
npm run typecheck
```

Check completo usado antes de deploy:

```bash
npm run deploy:check
```

## Editar dados do site

Os conteúdos novos foram organizados em arquivos editáveis:

- `data/weapons.ts`: armas, tiers, categoria, foco, Incarnon, custo e links de builds.
- `data/warframes.ts`: Warframes recomendados, função, prioridade e uso.
- `data/builds.ts`: páginas de build como Felarx, Laetum, Praedos e Torid Incarnon.
- `data/farms.ts`: guias de créditos, Endo, Kuva, Oxio, Criótico e Telúrio.
- `data/incarnon.ts`: prioridades e cards de armas Incarnon.
- `data/loadouts.ts`: cards de loadouts prontos para copiar/compartilhar.
- `data/guide-pages.ts`: páginas de guias complementares.
- `data/comparisons.ts`: comparações editáveis entre armas e Warframes.
- `data/loadout-presets.ts`: compatibilidade para os cards antigos de loadout.
- `data/tier-list.json`: tier list principal usada pelo componente interativo.
- `data/tier-meta.json`: tags, detalhes e metadados da tier list.

Para criar uma nova página de build:

1. Adicione um novo item em `data/builds.ts`.
2. Preencha `slug`, `name`, `summary`, `mainRole`, `strengths`, `weaknesses`, `recommendedMods`, `substituteMods`, `approximateForma`, `recommendedArcanes`, `bestUse` e `investmentPriority`.
3. A rota `/builds/[slug]` será gerada automaticamente se o item estiver em `buildGuides`.

Evite colocar números ou builds fechadas sem teste. Use texto editável e registre variações quando Riven, Arcanes, hotfixes ou balanceamentos mudarem o resultado.

## Salvamento em nuvem futuro

O site não implementa login agora. Os loadouts salvos pelo usuário ficam no navegador.

Para uma versão futura com salvamento em nuvem, opções gratuitas recomendadas:

- Neon
- Supabase

Quando essa etapa for implementada, a variável de conexão poderá ser configurada no ambiente da Vercel:

```env
DATABASE_URL=postgresql://usuario:senha@host/database?sslmode=require
```

Depois rode:

```bash
npm run db:schema
```

Não é necessário configurar banco para rodar a versão atual do guia.

## Deploy na Vercel

1. Faça login na Vercel.
2. Conecte o repositório ou rode deploy pelo CLI.
3. Rode antes do deploy:

```bash
npm run deploy:check
```

Deploy pelo CLI:

```bash
npx vercel deploy --prod
```

O domínio gratuito atual pode usar o formato:

```txt
https://warframefool.vercel.app
```

## Domínio customizado

Na Vercel:

1. Abra o projeto.
2. Vá em Settings > Domains.
3. Adicione o domínio.
4. Configure o DNS conforme instrução da Vercel.

Sugestões de domínio:

- `warframefool.com.br`
- `warframefool.com`
- `guiatenno.com.br`
- `tennobuilds.com.br`
- `warframemeta.com.br`
- `warframefool.is-a.dev`

## Outras hospedagens gratuitas

- Vercel: melhor encaixe para Next.js App Router.
- Cloudflare Pages: boa opção para front-end estático ou adaptado.
- Netlify: alternativa simples para deploy por Git.
- GitHub Pages: use apenas se exportar o projeto como estático e não depender das API routes.

## SEO técnico

O projeto inclui:

- metadata por página
- canonical URLs
- Open Graph
- Twitter Card
- sitemap.xml
- robots.txt
- JSON-LD básico nas páginas de conteúdo
- títulos pensados para busca em português

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run validate:migration
npm run deploy:check
npm run db:schema
```

## Próximos passos futuros

- Conectar salvamento em nuvem com Neon ou Supabase.
- Implementar login opcional para loadouts pessoais.
- Adicionar editor interno para builds.
- Criar mais páginas de build por Warframe e arma.
- Adicionar imagens otimizadas para armas e Warframes.
- Criar histórico de mudanças por patch/hotfix.
- Adicionar testes automatizados de componentes críticos.
