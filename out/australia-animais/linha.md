# Os bichos venenosos da Austrália (vídeo 8) na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e a prova |
|---|---|---|---|
| `open` | 18/11/2026, 22:30 | — | `regie open australia-animais "Australia's Deadliest Snake Isn't Its Most Venomous One"` (o 1º dos três títulos do Test & Compare que o Lucas escolheu, 18/11, ~14:1x: "O 3, o 2 e o meu (Recomendado)"; `roteiros/australia-animais/decisoes-lucas.md`). O roteiro foi aprovado pelo Lucas (~21:2x: "Pode seguir (Recomendado)"; sha12 do texto falado `bfd94a54b442`) e a narração, de ouvido (~22:2x: "áudios ok e plugins pode deixar"; `narracao.wav` tratada `ae9fc3249930`, 981,87 s com a cauda de 20 s). Cópia do banco antes: `db/antes-de-abrir-australia-animais-20261118T2230.canal.db`. |
| `ingest` | 18/11/2026, 23:06 | `done` | A narração no v4 (`narracao.wav` `ae9fc3249930`, 981,87 s com a cauda de 20 s), aprovada pelo Lucas de ouvido: "áudios ok e plugins pode deixar" (18/11, ~22:2x). O master sintético (`_media/_master.mp4`, 3840×2160 a 30 fps, 981,87 s). O alinhamento da ElevenLabs (60 de 60 por request_id; só GET). O relógio: `words.json` `064f54a0b2ee…` (2.743 palavras, de 0,07 a 961,64 s), com o laudo `transcricao.json` APROVADO na 2ª rodada do `ingest-local.py` (22:31–22:52 e 23:05–23:06). Os aceites: `--aceitar=9,24,26,29,34,37,38` (grafia do Whisper: algarismos, "planes", "one", "LD50"; a escuta do Lucas), `--aceitar-vaos=26.86,157.82,469.88,932.29` e `--aceitar-fronteiras=529.93` (a Sala, no som: `_tmp/relogio/conferir-som-1.log` e `_tmp/relogio/fronteira-t37.log`). Cópia do banco antes: `db/antes-do-advance-ingest-australia-animais-20261118T2306.canal.db`. |
| `cut_detect` | 18/11/2026, 23:06 | `done` (dispensado) | Como nos vídeos anteriores: canal sem apresentador, master sintético, nada a decupar. |
