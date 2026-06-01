# Varreduras de segurança

## ZAP Baseline passivo

O workflow `.github/workflows/zap-baseline.yml` executa OWASP ZAP Baseline contra:

```txt
https://warframefool.vercel.app
```

Ele roda por agendamento semanal e manualmente por `workflow_dispatch`.

O Baseline Scan é passivo: ele navega e observa respostas, headers e padrões comuns de risco, mas não tenta explorar ativamente a aplicação. Por isso é adequado para rodar contra produção com menor risco operacional.

## Full Scan ativo

O ZAP Full Scan executa testes ativos e pode enviar payloads agressivos, criar ruído nos logs, acionar proteções e afetar disponibilidade. Por esse motivo ele não deve rodar automaticamente contra produção.

Se for necessário no futuro, execute Full Scan apenas em staging controlado ou preview protegido, com autorização explícita e janela de teste definida.

## Relatórios

O workflow salva relatórios como artifact:

- `zap-report.html`
- `zap-report.md`
- `zap-report.json`

Use esses arquivos para revisar achados recorrentes e ajustar regras conhecidas. Não ignore alertas novos sem triagem.

## Regras conhecidas

Se o ZAP gerar ruído em uma regra que foi avaliada como aceitável, ajuste o workflow com arquivo de regras específico. Registre o motivo no pull request para manter rastreabilidade.
