# Juneau na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e o que prova |
|---|---|---|---|
| `open` | 26/09/2026 | — | `regie open juneau "Alaska Voted for a New Capital in 1974. It Was Never Built."` |
| `ingest` | 26/09/2026 | `done` | `words.json` + `transcricao.json` (laudo aprovado, 7 portões, sha da narração `468b045b…`), verificados pelo som, pelo contrato e pelo código (commit `57cc64d`; CLAUDE.md, "Peças da pré-v1 em uso", item 3) |
| `cut_detect` | 26/09/2026 | `done` (dispensado) | Canal sem apresentador: o master é a narração sobre tela preta 3840×2160 (`marca/identidade.md` §5), sem gravação bruta nem corte a detectar. O `mapa-limpo --conferir` mostra 0 vãos de card e a fala casando com o áudio. O ofício do `decupador` não se aplica e não foi instalado. |
| `mirror` | 27/09/2026 | `done` | `espelho.json` (61 cenas, 140 planos, 0 → 666,05 s sem vão nem sobreposição; sha `fbba9ec4…`), com `_pesquisa/espelho-report.md` e `_pesquisa/conferir-espelho.mjs` (exit 0). Feito pelo ofício do `montador` (despachado como agente geral, a sessão ainda não carregava os especialistas) e revisto em 9 rodadas por verificadores de contrato e tempo, fatos e geografia, e consumidores; `validar-contrato espelho --estrito` passa. A palavra exata em que cada texto entra fica para o `regente-de-imagem` (pendência no espelho). Página para o Lucas: https://claude.ai/artifact/1oFHFUqMYTqoL551FYAhHV |
