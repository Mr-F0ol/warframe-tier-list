# Playbook de resposta a incidente

Use este checklist quando houver suspeita de vazamento, alteração indevida, abuso de API, deploy comprometido ou comportamento anormal no Warframe Fool.

## 1. Identificar e classificar

- Registrar horário, URL afetada, usuário que percebeu, sintomas e evidências.
- Classificar impacto inicial: disponibilidade, integridade, confidencialidade ou abuso.
- Não publicar detalhes técnicos antes de entender o alcance.

## 2. Conter mudanças

- Pausar merges e deploys não essenciais.
- Avisar mantenedores com acesso ao GitHub/Vercel.
- Criar uma issue interna ou documento privado com linha do tempo.

## 3. Verificar Vercel

- Conferir Vercel Activity Log.
- Revisar deployments recentes, aliases e variáveis alteradas.
- Verificar previews acessíveis e URLs antigas que ainda estejam ativas.
- Durante abuso, avaliar Challenge Mode, regras de firewall ou proteção equivalente disponível no painel da Vercel.

## 4. Verificar GitHub

- Conferir commits, pull requests, releases e workflows recentes.
- Verificar se algum workflow falhou, foi alterado ou executou ação incomum.
- Revisar membros e tokens de acesso se houver sinal de comprometimento.

## 5. Segredos e variáveis

- Se um segredo foi exposto, rotacionar no provedor de origem imediatamente.
- Atualizar a variável correspondente na Vercel.
- Fazer redeploy obrigatório após alterar variáveis, porque deployments antigos não recebem automaticamente novos valores.
- Revogar tokens antigos em vez de apenas removê-los do código.

## 6. Rollback de código

- Rollback corrige código publicado, mas não rotaciona segredo vazado.
- Use rollback de deployment se a versão atual estiver quebrada ou insegura.
- Depois do rollback, abrir correção em branch separada e validar checks antes de novo deploy.

## 7. Recuperação

- Rodar `npm run security:check`.
- Conferir headers e páginas críticas.
- Validar `/seguranca`, `/sitemap.xml`, `/robots.txt`, `/minha-conta`, `/planejador` e `/loadouts`.
- Publicar novo deploy somente depois de corrigir causa raiz.

## 8. Domínio e DNS

Se houver domínio próprio no futuro:

- Revisar painel do registrador.
- Confirmar MFA, registrar lock e DNSSEC quando suportado.
- Procurar registros DNS órfãos, CNAMEs antigos e redirects quebrados.

## 9. Pós-incidente

- Registrar causa raiz.
- Registrar ações corretivas.
- Criar tarefa para prevenção futura.
- Revisar permissões e workflows.
- Atualizar este playbook se faltou algum passo.
