# Política de segurança

## Escopo

Este projeto é um site público de guias de Warframe. Ele não usa login, não armazena dados sensíveis no servidor e não exige dados pessoais para navegar.

Rotas em escopo:

- `https://warframefool.vercel.app`
- páginas públicas do site
- APIs públicas do próprio projeto, como `/api/health`, `/api/tier-list`, `/api/warframes`, `/api/weapons` e `/api/loadouts`

Fora de escopo:

- serviços de terceiros fora do domínio do projeto
- contas pessoais do GitHub, Vercel ou registrador
- abuso volumétrico, spam massivo ou DDoS
- engenharia social

## Postura atual

- Produção pública em HTTPS.
- Dados de Minha Conta, Planejador e Loadouts ficam no navegador via `localStorage`.
- Importação JSON é validada por versão, tamanho, estrutura e chaves perigosas.
- APIs usam validação de entrada e respostas sem stack trace.
- Headers de segurança são aplicados pelo Next.js.
- Dependabot, CodeQL, secret scan, security checks e ZAP Baseline estão configurados no GitHub Actions.

## Divulgação responsável

Se encontrar uma falha, envie um relatório privado para `SEU_EMAIL_DE_SEGURANCA`. Substitua esse placeholder por um contato real antes do deploy.

Inclua:

- URL afetada.
- Passos de reprodução.
- Impacto esperado.
- Evidência mínima, sem explorar contas ou dados de terceiros.

Não envie credenciais, tokens ou dados pessoais sensíveis no primeiro contato. Não publique detalhes antes da correção.

## Revisão

Última revisão de segurança: 2026-06-01.
