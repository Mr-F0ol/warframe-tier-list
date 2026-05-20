# Deploy Online

Este projeto está pronto para publicar em **Vercel + PostgreSQL**.

## Opção recomendada

- Hospedagem: Vercel
- Banco PostgreSQL: Neon ou Supabase
- Repositório: GitHub

## 1. Antes de subir

Rode na pasta do projeto:

```bash
npm install
npm run deploy:check
```

Se passar, o projeto está pronto para enviar para o GitHub/Vercel.

## 2. Subir para o GitHub

Na pasta do projeto:

```bash
git init
git add .
git commit -m "Deploy inicial da tier list"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/warframe-tier-list.git
git push -u origin main
```

Troque `SEU_USUARIO` e o nome do repositório pelo seu GitHub.

## 3. Criar banco PostgreSQL

Crie um banco no Neon ou Supabase e copie a connection string.

Use uma URL parecida com:

```env
DATABASE_URL=postgresql://usuario:senha@host/database?sslmode=require
```

## 4. Configurar Vercel

1. Entre em https://vercel.com
2. Clique em **Add New Project**.
3. Importe o repositório do GitHub.
4. Em **Environment Variables**, adicione:

```env
DATABASE_URL=postgresql://...
```

5. Faça o deploy.

## 5. Criar tabela de loadouts

Depois de configurar `DATABASE_URL`, rode localmente:

```bash
npm run db:schema
```

Esse comando cria a tabela no banco online usando a URL configurada no `.env.local`.

Outra opção é copiar o conteúdo de `db/schema.sql` e rodar direto no SQL Editor do Neon/Supabase.

## 6. Deploy automático

Depois que o GitHub estiver conectado na Vercel, cada `git push` na branch `main` atualiza o site online automaticamente.

## Observação importante

Sem `DATABASE_URL`, o site ainda abre na Vercel, mas os loadouts não serão salvos online. Para salvar loadouts de verdade, configure PostgreSQL.
