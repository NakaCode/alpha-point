# Peru (o lado seco dos Andes) na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e o que prova |
|---|---|---|---|
| `open` | 17/10/2026, 12:4x | — | `regie open peru-agua "Why Peru Lives on the Dry Side of the Andes"` (o título de trabalho do Lucas, 17/10; o final passa pelo teste de leitores). O roteiro foi aprovado pelo Lucas ("Se os críticos aprovaram o roteiro, pode seguir", `roteiros/peru-agua/decisoes-lucas.md`), texto falado `40905ef8ecdc`. Cópia do banco antes: `db/antes-de-abrir-peru-agua-*.canal.db`. |
| `ingest` | 18/10/2026, 23:5x | `done` | A narração no eleven_v4, tratada (`narracao.wav` `d8f9da13…`, 723,78 s, cauda de 20 s igual ao `canal.json`), aprovada pelo Lucas depois de ouvir a narração e os 30 nomes: "A narração está ok" (18/10). O master sintético (`_media/_master.mp4`, 3840×2160 a 30 fps, 723,78 s, carimbo com essa narração). O `transcricao.json` APROVADO, 7/7 portões (`_pesquisa/ingest-3.log`), e o `words.json` (`7ac9ddba…`, 2.095 palavras, 27 trechos); `mapa-limpo --conferir` sai 0. Os aceites, um a um: (1) as grafias do transcritor (33 itens nos trechos 4, 7, 8, 9, 10, 11, 13, 15, 16, 17, 18, 19, 21, 22, 24, 26 e 27), conferidas em `_pesquisa/narracao-conferencia.md` e ouvidas pelo Lucas; (2) a fronteira da pausa 149,79 s ("cloud \| and"), que o ouvido não decidiu porque engoliu o "and": a proposta comum da regra e da ElevenLabs, conferida pela Sala na energia do som. O `ingest-local.py` ganhou o `--aceitar-fronteiras` (prova negativa em `_tmp/ingest-teste/`; a Zona do Canal e Los Angeles saem idênticos byte a byte, `out/<v>/_tmp/regressao-fronteiras/`). Gasto da voz: 5.678 créditos. |
| `cut_detect` | 18/10/2026, 23:5x | `done` (dispensado) | Como nos vídeos anteriores: canal sem apresentador, master sintético, nada a decupar. |
