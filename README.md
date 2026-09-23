# Alpha Point

Canal criado com a **Régie** em 2026-09-23, operado por **Lucas Rosa**.
Este repositório é seu: tudo que você e o Claude construírem para este canal mora aqui.

## Como trabalhar

Abra o Claude Code **nesta pasta** e converse com ele. O `CLAUDE.md` daqui explica a ele
o que é este canal e como operar o motor — você não precisa decorar comando nenhum.

Se quiser rodar à mão, sempre de dentro desta pasta:

```
node C:\projetos\regie\bin\regie doctor                  confere se está tudo íntegro (rápido, sem custo)
node C:\projetos\regie\bin\regie graph                   a linha de produção
node C:\projetos\regie\bin\regie open <slug> "Título"    começa um vídeo
node C:\projetos\regie\bin\regie queue                   o que está em cada passo, e há quanto tempo
```

## O que é seu, e o que é do motor

| Aqui — seu | No motor — `top10-company/regie`, de Lucas e Mateus |
|---|---|
| `marca/` — identidade, voz, público | a linha de produção e a máquina de estados |
| `canal.json` — nome, nicho, idiomas | os ofícios, em `crafts/` |
| `db/canal.db` — a produção deste canal | o gerador de canais |
| `midia/` — o bruto, que não sai daqui | |
| tudo que você criar: roteiros, prompts, scripts | |

Você não altera o motor. Se descobrir algo que serviria a qualquer canal, anote em
`APRENDIZADOS.md` e avise o Lucas ou o Mateus.

## Onde os arquivos moram

- **bruto** (footage, masters) — nesta máquina, em `midia/`. Não viaja.
- **entrega** (o vídeo pronto, o XML) — na pasta de entregas do Drive compartilhado,
  indicada em `canal.json`, no campo `midia.entrega`.
- **banco** (`db/canal.db`) — só nesta máquina. Não vai para o git nem para nuvem.
