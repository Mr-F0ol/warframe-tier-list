# Warframe Tier List

Projeto migrado para **Next.js + React + TypeScript + Tailwind + shadcn/ui + PostgreSQL**.

## Rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Configure o banco, se quiser usar PostgreSQL:

```bash
cp .env.example .env.local
```

Edite `DATABASE_URL` em `.env.local`.

3. Crie a tabela de loadouts:

```bash
npm run db:schema
```

4. Rode o app:

```bash
npm run dev
```

Abra `http://localhost:3000`.

## Deploy online

O projeto está preparado para **Vercel + PostgreSQL**.

Leia o passo a passo em [`DEPLOY.md`](./DEPLOY.md).

Antes de publicar, rode:

```bash
npm run deploy:check
```

## Sem PostgreSQL

Se `DATABASE_URL` não estiver configurado, a API de loadouts usa `data/loadouts.json` como fallback local. Em hospedagens serverless como a Vercel, configure PostgreSQL para salvar loadouts online.

## Estrutura

- `app/`: páginas e API routes do Next.js.
- `components/`: UI React, incluindo componentes no estilo shadcn/ui.
- `lib/`: leitura dos dados, regras de tags, PostgreSQL e loadouts.
- `data/`: tier list e metadados atuais.
- `db/schema.sql`: schema PostgreSQL.
- `public/assets/`: arquivos públicos como a logo.

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run validate:migration
npm run deploy:check
```
