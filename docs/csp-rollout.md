# Rollout da Content Security Policy

Data: 2026-06-01

## Política aplicada

A primeira fase usa `Content-Security-Policy-Report-Only` em todas as rotas. Isso permite observar violações no navegador sem bloquear scripts, estilos ou imagens durante a validação.

Política atual:

```txt
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data: blob: https://cdn.warframestat.us https://wiki.warframe.com https://www-static.warframe.com;
font-src 'self' data:;
connect-src 'self';
frame-ancestors 'none';
base-uri 'self';
form-action 'self';
object-src 'none';
upgrade-insecure-requests
```

Durante desenvolvimento local, `script-src` inclui `unsafe-inline` e `unsafe-eval` apenas para compatibilidade com o runtime de desenvolvimento do Next.js. Em produção, `unsafe-eval` não é permitido.

## Origens permitidas

- `'self'`: necessário para páginas, scripts, estilos, APIs internas, sitemap, robots e assets locais.
- `style-src 'unsafe-inline'`: necessário nesta fase porque o projeto usa estilos gerados/inline compatíveis com o ambiente atual do Next/Tailwind.
- `img-src data: blob:`: necessário para imagens embutidas, previews e assets gerados pelo navegador.
- `https://cdn.warframestat.us`: imagens de itens do Warframe.
- `https://wiki.warframe.com`: imagens externas usadas por dados/guias.
- `https://www-static.warframe.com`: assets oficiais usados por conteúdo visual.
- `font-src data:`: compatibilidade com fontes embutidas pelo runtime.
- `connect-src 'self'`: não há chamadas HTTP externas públicas necessárias nesta fase.

## Como testar

1. Rodar localmente:

```bash
npm run build
npm run start
```

2. Abrir páginas críticas:

- `/`
- `/tier-list`
- `/minha-conta`
- `/planejador`
- `/comparar`
- `/loadouts`
- `/seguranca`

3. No navegador, abrir DevTools > Console e procurar mensagens de CSP Report-Only.
4. Validar depois do deploy:

```bash
curl -I https://warframefool.vercel.app
```

Verificar se aparece `Content-Security-Policy-Report-Only`.

## Como migrar para modo obrigatório

1. Monitorar violações reais por pelo menos um ciclo de release.
2. Confirmar que nenhuma página crítica depende de script inline bloqueável.
3. Trocar o header em `next.config.ts` de:

```txt
Content-Security-Policy-Report-Only
```

para:

```txt
Content-Security-Policy
```

4. Fazer build, revisar no navegador e publicar primeiro em preview protegido.

## Sinais de quebra

- Página branca após carregamento.
- Botões interativos sem resposta.
- Planejador, Minha Conta ou Loadouts sem salvar no navegador.
- Imagens de cards desaparecendo.
- Console mostrando bloqueio de script, estilo ou imagem por CSP.

Se isso ocorrer, voltar temporariamente para Report-Only e ajustar a diretiva mínima necessária.
