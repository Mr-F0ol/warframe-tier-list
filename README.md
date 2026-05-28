# Warframe Fool

Warframe Fool é um guia brasileiro de Warframe com tier list, builds, meta atual, armas Incarnon, guias de farm, Steel Path e organização de loadouts.

URL atual:

```txt
https://warframefool.vercel.app
```

Warframe é marca da Digital Extremes. Este site é um projeto independente de fãs.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Vercel

## Rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o ambiente local:

```bash
npm run dev
```

Abra:

```txt
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

Check usado antes de deploy:

```bash
npm run deploy:check
```

## Estrutura de dados

Os dados principais ficam separados para facilitar revisão:

- `data/siteMeta.ts`: nome do site, URL, data de revisão e update base.
- `data/tier-list.json`: tier list principal usada em `/tier-list`.
- `data/tier-meta.json`: detalhes, tags e contexto dos itens da tier list.
- `data/builds.ts`: guias de Felarx, Laetum, Praedos, Torid Incarnon, Dual Toxocyst Incarnon e Ceramic Dagger Incarnon.
- `data/weapons.ts`: armas destacadas, tiers, categoria, foco e links de build.
- `data/warframes.ts`: Warframes recomendados e prioridade de uso.
- `data/farms.ts`: guias de créditos, Endo, Kuva, Oxio, Criótico e Telúrio.
- `data/incarnon.ts`: prioridades e cards de armas Incarnon.
- `data/loadouts.ts`: loadouts recomendados para copiar e adaptar.
- `data/guide-pages.ts`: conteúdo de guias complementares.
- `data/comparisons.ts`: comparações simples entre armas e Warframes.
- `data/planner.ts`: opções e regras do Planejador Warframe.
- `data/compareItems.ts`: itens usados no Comparador Warframe.
- `data/accountItems.ts`: itens usados em Minha Conta, com farms, builds e prioridades relacionadas.

## Páginas principais

- `/`: Home.
- `/comece-aqui`: roteiro por estágio da conta.
- `/progressao`: roadmap de progressão por etapas.
- `/minha-conta`: inventário local para marcar itens obtidos, desejados e em build.
- `/planejador`: ferramenta interativa para sugerir próximo investimento.
- `/comparar`: comparador de Warframes, armas e builds.
- `/ferramentas`: central com Minha Conta, Planejador, Comparador, Loadouts e atalhos úteis.
- `/tier-list`: tier list completa.
- `/meta-atual`: resumo do meta.
- `/builds`: lista de builds.
- `/farm`: guias de farm.
- `/farm-endo`: guia de Endo por estágio.
- `/farm-kuva`: guia de Kuva por estágio.
- `/loadouts`: organização de setups.
- `/steel-path`: checklist e preparação.
- `/builds/dual-toxocyst-incarnon`: build de secundária Incarnon.
- `/builds/ceramic-dagger-incarnon`: build de melee Incarnon.

## Editar navegação e sitemap

- Navbar principal: `components/site-navbar.tsx`.
- Rodapé: `components/site-footer.tsx`.
- Sitemap: `app/sitemap.ts`.
- Robots: `app/robots.ts`.

## Editar builds

Para adicionar uma build:

1. Crie um novo item em `data/builds.ts`.
2. Use um `slug` curto e consistente com a rota desejada.
3. Revise resumo, função, mods principais, substituições, Arcanes, forma aproximada, obtenção, pontos fortes, pontos fracos e links internos.
4. A rota `/builds/[slug]` passa a funcionar quando o item existe em `buildGuides`.

Evite números fechados sem validação. Registre variações quando Rivens, Arcanes, Incarnon, Helminth, hotfixes ou balanceamentos mudarem o resultado.

## Editar farms

Use `data/farms.ts` para revisar:

- título e descrição SEO de cada recurso.
- melhor método geral.
- método para iniciante, intermediário e endgame.
- Warframes recomendados.
- dicas rápidas, erros comuns e links relacionados.

As páginas `/farm-endo`, `/farm-kuva`, `/farm-creditos` e demais guias usam esses dados.

## Editar Planejador

Use `data/planner.ts` para revisar:

- opções de estágio da conta, objetivo, estilo e investimento.
- itens marcáveis como já obtidos.
- regras de recomendação em `plannerRules`.
- links internos exibidos no resultado.

O componente `components/planner-tool.tsx` roda no navegador, não usa API externa, não usa login e salva planos em `localStorage`.

Para testar o salvamento local:

1. Abra `/planejador`.
2. Complete as etapas obrigatórias.
3. Clique em `Salvar plano neste navegador`.
4. Recarregue a página e confira a seção `Planos salvos`.

## Editar Minha Conta

Use `data/accountItems.ts` para revisar itens do inventário local:

- Warframes, armas, mods, Arcanes, sistemas e recursos.
- `href` apenas quando existir página relacionada.
- `relatedFarms` e `relatedBuilds` para recomendações internas.
- `priorityHint` para orientar o jogador sem prometer dados fixos.

O componente `components/account-inventory.tsx` usa `localStorage` com a chave `warframe-fool-account-progress`. Não há login, banco ou sincronização online.

Funcionalidades disponíveis:

- marcar `Tenho`, `Quero pegar`, `Buildando` e `Favorito`.
- registrar Formas, Catalisador/Reator e notas locais.
- exportar progresso como JSON.
- importar JSON exportado pela própria página.
- limpar dados locais com confirmação.

Integrações principais:

- `/planejador` pode usar itens marcados em Minha Conta.
- `/builds` e páginas de build mostram status local quando houver item relacionado.
- `/tier-list` mostra badges locais em itens reconhecidos.
- `/farm` mostra farms relacionados aos itens marcados como desejados ou em build.

## Editar Comparador

Use `data/compareItems.ts` para revisar itens comparáveis:

- nome, categoria, tier, função, investimento e dificuldade.
- melhor uso, pontos fortes, pontos fracos e nota.
- `href` apenas quando existir página relacionada.

O componente `components/ComparisonTool.tsx` evita links quebrados e funciona com dois ou três itens.

## Editar tier list

Use:

- `data/tier-list.json` para mudar posição, tier, nota, imagem e variante.
- `data/tier-meta.json` para ajustar função, investimento, tags e contexto.

Itens sem validação não devem entrar ranqueados como S/A/B/C/D. Use tier sem nota ou mantenha fora da lista pública até revisar.

## Editar metadata

Use `data/siteMeta.ts` para manter o site consistente:

- `siteName`
- `siteUrl`
- `lastUpdated`
- `lastUpdatedISO`
- `updateBase`
- `updateLabel`

Isso evita páginas exibindo datas ou updates diferentes.

## Deploy na Vercel

Antes de publicar, rode:

```bash
npm run deploy:check
```

Deploy pelo CLI:

```bash
npx vercel deploy --prod
```

O domínio de produção atual é:

```txt
https://warframefool.vercel.app
```

## SEO técnico

O projeto inclui:

- metadata por página
- canonical URLs
- Open Graph
- Twitter Card
- sitemap.xml
- robots.txt
- JSON-LD em páginas de conteúdo
- breadcrumbs em guias e builds
- links internos entre tier list, builds, farm, Incarnon, loadouts e meta

## Loadouts

A versão atual salva loadouts no navegador. Login e sincronização em nuvem não fazem parte desta etapa.

Opções futuras possíveis:

- Neon
- Supabase

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

- Adicionar mais páginas de build por Warframe e arma.
- Criar histórico de mudanças por patch.
- Adicionar imagens otimizadas locais para itens principais.
- Criar editor interno para facilitar revisão dos dados.
- Adicionar verificações automatizadas para componentes críticos.
