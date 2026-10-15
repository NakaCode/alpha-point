# Zona do Canal na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

| Passo | Quando | Gatilho | Por quê, e o que prova |
|---|---|---|---|
| `open` | 14/10/2026, 23:55 | — | `regie open zona-do-canal "Why a Town Inside Panama Was AMERICAN Until 1979"`. Em 15/10, depois da medida de demanda, do refutador e dos leitores a frio, o Lucas fixou o título "Why a Town Inside Panama Was American Until 1979", sem as maiúsculas (`roteiros/zona-do-canal/decisoes-lucas.md`; `_pesquisa/embalagem/`). O título do banco fica o de abertura: a v0.1.0 não tem verbo para trocá-lo. |
| `ingest` | 15/10/2026, 01:2x | `done` | A narração no eleven_v4, tratada (`narracao.wav` `a618bc3c…`, 827,47 s, cauda de 20 s igual ao `canal.json`), aprovada pelo Lucas depois de ouvir: "Já ouvo sim, está tudo de acordo" (14/10, 23:51). O master sintético (`_media/_master.mp4`, 3840×2160, carimbo com essa narração). O `transcricao.json` APROVADO, 7/7 portões (`_tmp/ingest-6.log`), e o `words.json` (`d5ceae4a…`, 2.217 palavras, 28 trechos); `mapa-limpo --conferir` sai 0. Os aceites, um a um, pela Sala: (1) as grafias do transcritor (trechos 1, 2, 3, 5, 8, 9, 12, 13, 14, 20, 21, 22, 24 e 25), conferidas em `_pesquisa/narracao-conferencia.md`; (2) 9 vãos com voz sem vale no som, que o alinhamento da v4 atrasava ~0,3 s (24,84; 138,72; 179,29; 470,36; 474,28; 671,55; 749,18; 775,50; 806,07), com a borda conferida pelo cético do som (`_tmp/relogio-vaos-cetico-som.md`, erro de 0 a 0,05 s), sem escuta humana. O `ingest-local.py` ganhou o aceite por vão (`--aceitar-vaos`) depois que um cético derrubou a regra automática do ouvido (`_tmp/relogio-vaos-relato-2.md`; Juneau e Los Angeles idênticos byte a byte). |
| `cut_detect` | 15/10/2026 | `done` (dispensado) | Como no Juneau e em Los Angeles: canal sem apresentador, master sintético, nada a decupar. |
