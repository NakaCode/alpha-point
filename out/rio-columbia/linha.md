# Rio Columbia (vídeo 7) na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e a prova |
|---|---|---|---|
| `open` | 12/11/2026, 08:00 | — | `regie open rio-columbia "Why the U.S. Pays Canada to Keep Part of a Lake Empty"` (o título 1 da pauta v2, aprovado pelo Lucas em 09/11 com a miniatura e a abertura; o final sai na embalagem). O roteiro foi aprovado pelos conferentes, por delegação do Lucas (12/11, ~01:2x), e a narração, de ouvido, por ele ("Tudo correto", 12/11, ~07:5x). Cópia do banco antes: `db/antes-open-rio-columbia-20261112-080049.canal.db`. |
| `ingest` | 12/11/2026, 08:40 | `done` | A narração no v4 (`narracao.wav` `a42b283a7504`, 927,95 s com a cauda de 20 s), aprovada pelo Lucas de ouvido: "Tudo correto" (12/11, ~07:5x). O master sintético (`_media/_master.mp4`, 3840×2160 a 30 fps, 927,97 s). O `words.json` `04692a8f…`, 2.746 palavras, com o `transcricao.json` `755a8def…` APROVADO, 7 de 7 portões (`_tmp/ingest-4.log`). O alinhamento da ElevenLabs veio antes, só GET (`_tmp/alinhamento-1.log`). Os aceites: os 12 itens de conteúdo dos trechos 1, 21, 25, 33 e 34, pela escuta do Lucas e pela leitura do laudo (`--aceitar=1,21,25,33,34`); os 4 vãos (19,97, 272,26, 373,75 e 669,15), pela Sala, com a energia em quadros de 20 ms e a varredura do faster-whisper (`_tmp/relogio/conferir-som-1.log`). `mapa-limpo --conferir` sai 0. Relato em `_pesquisa/narracao-conferencia.md`. Cópia do banco antes: `db/antes-advance-ingest-rio-columbia-20261112-084011.canal.db`. |
| `cut_detect` | 12/11/2026, 08:40 | `done` (dispensado) | Como nos vídeos anteriores: canal sem apresentador, master sintético, nada a decupar. |
