# Checklist manual de segurança

Essas tarefas precisam ser feitas nos painéis externos. Não marque como concluídas apenas porque o código foi alterado.

## Contas e acesso

- [ ] Ativar passkey ou TOTP na conta Vercel.
- [ ] Ativar 2FA na conta GitHub.
- [ ] Guardar recovery codes offline.
- [ ] Revisar membros com acesso ao projeto.
- [ ] Aplicar menor privilégio para colaboradores.

## Vercel

- [ ] Ativar proteção para Preview Deployments.
- [ ] Manter produção pública e previews privados.
- [ ] Revisar variáveis de ambiente em Production e Preview.
- [ ] Transformar segredos em variáveis Sensitive quando aplicável.
- [ ] Revisar Activity Log periodicamente.
- [ ] Revisar previews antigos e remover o que não for necessário.
- [ ] Revisar logs e alertas.

## GitHub

- [ ] Habilitar Dependabot Alerts.
- [ ] Habilitar Secret Scanning quando disponível.
- [ ] Habilitar Push Protection quando disponível.
- [ ] Habilitar Code Scanning quando disponível.
- [ ] Configurar branch protection ou ruleset para impedir merge direto sem checks.
- [ ] Exigir checks de lint, testes, build e auditoria antes de merge.

## Domínio próprio futuro

Caso seja adotado domínio próprio:

- [ ] Habilitar MFA no registrador.
- [ ] Habilitar registrar lock.
- [ ] Habilitar DNSSEC quando suportado.
- [ ] Revisar registros DNS órfãos.
- [ ] Evitar CNAMEs abandonados.
- [ ] Validar redirects entre domínio raiz e `www`.

## WAF e DNS avançado

Cloudflare ou outro provedor de WAF/DNS pode ser avaliado no futuro se houver domínio próprio e necessidade real de regras avançadas. Não foi implementado nesta fase.
