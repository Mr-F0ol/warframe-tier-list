# Relatório de hardening de segurança

Data: 2026-06-01
Branch: `security-hardening`

## 1. Resumo executivo

Foi implementada a primeira fase de hardening do Warframe Fool sem criar login, banco, painel administrativo ou nova arquitetura. A mudança foca em headers HTTP, CSP em observação, validação defensiva de JSON/localStorage, redução de risco de segredos, automações de CI/CD e documentação operacional.

O site continua usando App Router do Next.js e armazenamento local no navegador para Minha Conta, Planejador e Loadouts.

## 2. Riscos encontrados

| Risco | Severidade | Tratamento |
| --- | --- | --- |
| JSON importado/local malformado ou grande demais | Médio | Criada camada reutilizável com limite de tamanho, tratamento de erro e bloqueio de chaves perigosas. |
| Prototype pollution via JSON (`__proto__`, `prototype`, `constructor`) | Médio | Bloqueado em parsing defensivo compartilhado. |
| CSP obrigatória podendo quebrar Next.js/estilos | Médio | Aplicada como `Content-Security-Policy-Report-Only`. |
| `.env.example` com valor parecendo credencial | Baixo/Médio | Substituído por placeholder vazio. |
| Dependência transitiva vulnerável em `postcss` dentro do Next | Médio | Documentada; sem fix automático seguro nesta fase. |
| Falta de pipeline unificado de segurança | Médio | Criado workflow `security-checks.yml`. |

## 3. Arquivos criados

- `.github/workflows/security-checks.yml`
- `.github/workflows/codeql.yml`
- `.github/workflows/secret-scan.yml`
- `.github/workflows/zap-baseline.yml`
- `.github/dependabot.yml`
- `app/seguranca/page.tsx`
- `docs/security-audit-initial.md`
- `docs/csp-rollout.md`
- `docs/security-scanning.md`
- `docs/incident-response.md`
- `docs/manual-security-checklist.md`
- `docs/security-hardening-report.md`
- `lib/local-storage-security.ts`
- `public/.well-known/security.txt`
- `scripts/security-storage.test.ts`
- `SECURITY.md`

## 4. Arquivos modificados

- `.env.example`
- `DEPLOY.md`
- `README.md`
- `app/sitemap.ts`
- `components/loadouts-panel.tsx`
- `components/planner-tool.tsx`
- `components/site-footer.tsx`
- `lib/accountStorage.ts`
- `lib/api-security.ts`
- `next.config.ts`
- `package.json`
- `tsconfig.json`
- `vercel.json`

## 5. Melhorias implementadas

- `poweredByHeader: false` no Next.js.
- Headers globais:
  - `Strict-Transport-Security: max-age=31536000`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- CSP aplicada como `Content-Security-Policy-Report-Only`.
- Sem CORS global.
- `npm ci` configurado no `vercel.json`.
- Scripts:
  - `test`
  - `test:security`
  - `security:audit`
  - `security:check`
- Validação JSON/localStorage compartilhada para:
  - Minha Conta;
  - Planejador;
  - Loadouts;
  - leitura de body JSON nas APIs.
- Testes para JSON válido, JSON inválido, payload acima do limite, chaves perigosas, texto livre e storage indisponível.
- Página pública `/seguranca`.
- `security.txt` com placeholder explícito.
- Dependabot, CodeQL, secret scan, security checks e ZAP Baseline passivo.

## 6. Itens não implementados e motivo

- Login, banco, sincronização em nuvem e painel administrativo: fora de escopo.
- CORS externo: não há consumidor externo legítimo nesta fase.
- CSP obrigatória: adiada para evitar quebra sem observação.
- Full Scan/Active Scan em produção: não implementado por risco operacional; documentado para staging controlado.
- Sentry/log drains: exigem configuração externa e possível conta/projeto fora do código.
- Cloudflare/WAF: só faz sentido avaliar com domínio próprio e necessidade real.

## 7. Vulnerabilidades de dependência restantes

`npm audit --audit-level=moderate` encontrou:

- `postcss` transitivo dentro de `next`;
- severidade: moderada;
- advisory: GHSA-qx2v-qp2m-jg93;
- npm indica "No fix available" sem mudança de dependência.

`npm audit fix --force` não deve ser usado nesta fase, pois pode aplicar mudança quebrável. O acompanhamento deve ser feito via Dependabot/atualização segura do Next.js.

## 8. Configurações manuais pendentes

Ver `docs/manual-security-checklist.md`.

Principais pendências:

- Ativar passkey/TOTP em GitHub e Vercel.
- Guardar recovery codes offline.
- Configurar branch protection/ruleset.
- Habilitar Secret Scanning, Push Protection e Code Scanning quando disponíveis.
- Proteger Preview Deployments na Vercel.
- Revisar variáveis Production/Preview e marcar segredos como Sensitive quando aplicável.
- Substituir `SEU_EMAIL_DE_SEGURANCA` em `/seguranca`, `SECURITY.md` e `public/.well-known/security.txt` antes do deploy.

## 9. Possíveis pontos de quebra

- CSP em modo obrigatório pode quebrar scripts/estilos do Next.js se aplicada antes da observação.
- Formatos antigos de `localStorage` são aceitos em Planejador e Loadouts, mas dados muito corrompidos serão ignorados/limpos.
- APIs agora rejeitam JSON com chaves perigosas e payloads grandes.

## 10. Teste local

Comandos executados:

```bash
npm ci
npm run lint
npm test
npm run typecheck
npm run build
npm run security:audit
npm run security:check
npm audit --audit-level=moderate
npm ls --depth=0
node -e "const fs=require('fs');const yaml=require('js-yaml');for(const f of fs.readdirSync('.github/workflows').filter(f=>f.endsWith('.yml')||f.endsWith('.yaml'))){yaml.load(fs.readFileSync('.github/workflows/'+f,'utf8'));console.log('ok',f)}yaml.load(fs.readFileSync('.github/dependabot.yml','utf8'));console.log('ok dependabot.yml')"
```

Resultados:

- `npm ci`: passou após execução fora do sandbox por bloqueio de permissão no cache local.
- `npm run lint`: passou, sem warnings/erros de ESLint. O Next avisou que `next lint` será removido no Next 16.
- `npm test`: passou, 8 testes de segurança.
- `npm run typecheck`: passou.
- `npm run build`: passou, 46 páginas geradas.
- `npm run security:audit`: passou em nível alto/crítico; ainda lista vulnerabilidade moderada transitiva.
- `npm run security:check`: passou; executou lint, testes de segurança, build e auditoria de produção.
- `npm audit --audit-level=moderate`: falhou por vulnerabilidade moderada conhecida em `postcss` transitivo do Next.
- `npm ls --depth=0`: listou `@emnapi/runtime` como extraneous opcional em `node_modules`, mesmo após `npm prune`; não está declarado como dependência direta do projeto.
- Validação YAML com `js-yaml`: passou para workflows e Dependabot.

## 11. Validar headers depois do deploy

Depois de publicar em preview ou produção:

```bash
curl -I https://warframefool.vercel.app
curl -I https://warframefool.vercel.app/seguranca
curl https://warframefool.vercel.app/.well-known/security.txt
```

Verificar:

- `Content-Security-Policy-Report-Only`
- `Strict-Transport-Security`
- `X-Content-Type-Options`
- `X-Frame-Options`
- `Referrer-Policy`
- `Permissions-Policy`
- ausência de `X-Powered-By`

## 12. CSP

Modo aplicado: `Report-Only`.

Origens externas liberadas:

- `https://cdn.warframestat.us`
- `https://wiki.warframe.com`
- `https://www-static.warframe.com`

Motivo: imagens remotas usadas pelo conteúdo visual do site. `connect-src` permanece restrito a `'self'`.

## 13. `dangerouslySetInnerHTML`

Ainda existe apenas para JSON-LD em:

- `components/structured-data.tsx`
- `components/guide-ui.tsx`
- `components/seo/seo-page.tsx`
- `components/breadcrumbs.tsx`

Esses usos serializam objetos com `JSON.stringify` para `application/ld+json` e não renderizam HTML importado pelo usuário.

## 14. Segredos

Nenhum arquivo `.env` real versionado foi encontrado. Nenhum segredo real foi identificado no código auditado.

Não há indicação de rotação obrigatória nesta revisão. Ainda assim, se algum valor real já tiver sido publicado anteriormente fora deste diff, ele deve ser rotacionado manualmente.

## 15. Próximos passos recomendados

1. Substituir `SEU_EMAIL_DE_SEGURANCA`.
2. Ativar proteções manuais em GitHub/Vercel.
3. Abrir PR da branch `security-hardening`.
4. Rodar ZAP Baseline manual após deploy em preview.
5. Monitorar violações CSP Report-Only antes de migrar para CSP obrigatória.
6. Acompanhar atualização segura do Next/PostCSS via Dependabot.
