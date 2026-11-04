# Big Sur (vídeo 5) na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e a prova |
|---|---|---|---|
| `open` | 04/11/2026, 16:0x | — | `regie open big-sur "Why This Stretch of California Is as Empty as Wyoming"` (o título 1 da pauta, como título de trabalho; o final sai na embalagem). Cópia do banco antes: `db/antes-open-big-sur-*.canal.db`. |
| `ingest` | 04/11/2026, 16:28 | `done` | A narração no v4 (`narracao.wav` `14c53e752758`, 787,78 s com a cauda de 20 s), aprovada pelo Lucas de ouvido: "Todos os audios estão corretos" (04/11). O master sintético (`_media/_master.mp4`, 3840×2160 a 30 fps, 787,78 s). O `words.json` `f6055f41…`, 2.300 palavras, com o `transcricao.json` APROVADO, 7 de 7 portões (`_tmp/ingest-5.log`). Os aceites: os 9 itens de conteúdo, em nome do Lucas (`--aceitar=1,2,8,14,21,27,31,35`); 3 vãos (171,49, 599,35, 717,49) e a pausa 260,66 do lado da ElevenLabs ("Caltrans, \| California's"), pela Sala, com a energia em quadros de 20 ms e o recorte do faster-whisper (`_tmp/relogio/conferir-som-1.log`); o vão 542,61 fechado na borda de início (o "road," voltou a 0,38 s). O `ingest-local.py` ganhou dois aceites que só somam, `--aceitar-fronteira-divergente` e `--aceitar-vao-na-borda`, com prova negativa e as cópias de antes em `out/juneau/_pesquisa/`. `mapa-limpo --conferir` sai 0. Relato em `_pesquisa/narracao-conferencia.md`. |
| `cut_detect` | 04/11/2026, 16:28 | `done` (dispensado) | Como nos vídeos anteriores: canal sem apresentador, master sintético, nada a decupar. |
