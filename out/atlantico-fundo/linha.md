# O ponto mais fundo do Atlântico (vídeo 4) na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova.

O vídeo era o 5 até 27/10/2026 ("A numeração dos vídeos", no CLAUDE.md) e ia sair pelo motor sem rosto do Top10. Em 28/10, às
02:2x, o Lucas: "Vamos continuar esse vídeo com nosso motor. O Top10 entra no próximo". Por isso a linha só abriu depois da
narração.

| Passo | Quando | Gatilho | Por quê, e o que prova |
|---|---|---|---|
| `open` | 28/10/2026, 10:2x | — | `regie open atlantico-fundo "The Deepest Point in the Atlantic Ocean"` (o título do Lucas; vai a teste no YouTube Studio com o "…Is Only 83 Miles From a U.S. Island", decidido em 24/10). O roteiro foi aprovado pelo Lucas em 27/10, às 02:40 ("Sim, aprovo (Recomendado)"; `roteiros/atlantico-fundo/roteiro-editor.md`, no cabeçalho), texto falado `7b965eecdb7c`. A linha abriu na conta Claude reserva, com a narração já ouvida e aprovada. Cópia do banco antes: `db/antes-de-abrir-atlantico-fundo-20261028-102258.canal.db`. |
| `ingest` | 28/10/2026, 11:0x | `done` | A narração no eleven_v4, tratada (`narracao.wav` `30cfff20…`, 713,95 s, cauda de 20 s igual ao `canal.json`), aprovada pelo Lucas depois de ouvir a narração inteira e os 31 recortes de nome: "Tudo certo com o áudio" (28/10, 10:2x). O master sintético (`_media/_master.mp4`, 3840×2160 a 30 fps, 713,95 s, carimbo com essa narração; `_pesquisa/master-1.log`). O `transcricao.json` APROVADO, 7/7 portões (`_pesquisa/ingest-2.log`), e o `words.json` (`76e0514b…`, 2.028 palavras, 28 trechos); `mapa-limpo --conferir` sai 0. Os aceites, um a um: (1) os 23 itens do transcritor nos trechos 1, 2, 3, 5, 6, 7, 9, 11, 13, 15, 17, 18, 19, 20, 24, 25 e 28 (15 milhares do "1 ,500", as duas datas ordinais, Archimède, Anegada, Jamieson 2×, crew's e cusk-eel), conferidos em `_pesquisa/narracao-conferencia.md` e ouvidos pelo Lucas; (2) os dois vãos com voz sem vale, 519,53 ("expedition's \| results,") e 689,52 ("the \| Atlantic,"), com a borda conferida pela Sala no som (energia em 10 ms, varredura de corte com o Whisper, recortes isolados; erro de no máximo 0,03 s; `_pesquisa/conferir-vaos-som.py` e os logs dele). O alinhamento da ElevenLabs saiu do histórico só por GET (`_pesquisa/alinhamento-1.log`). Gasto da voz: 5.665 créditos na narração, 8.485 no vídeo com a amostra. Cópia do banco antes: `db/antes-de-ingest-atlantico-fundo-20261028-110310.canal.db`. |
| `cut_detect` | 28/10/2026, 11:0x | `done` (dispensado) | Como nos vídeos anteriores: canal sem apresentador, master sintético, nada a decupar. |
