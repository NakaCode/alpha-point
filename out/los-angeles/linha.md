# Los Angeles na linha da Régie (v0.1.0)

O `regie advance` da v0.1.0 só recebe o gatilho (`done`, `retake`, `blocked`), sem motivo. O motivo de cada passo
fica aqui, com a data e o artefato que o prova. A conferência de cada passo, com um cético, está em
`out/los-angeles/_tmp/linha/` (fora do git; workflow `wf_95b20de3-403`, 08/10/2026).

| Passo | Quando | Gatilho | Por quê, e o que prova |
|---|---|---|---|
| `open` | 07/10/2026 | — | `regie open los-angeles "Why Is Los Angeles Shaped Like This?"` (o título 5, escolhido pelo Lucas às 11:2x) |
| `ingest` | 08/10/2026 | `done` | A narração no eleven_v4, tratada (`narracao.wav` `7c7d971a…`, 752,55 s, cauda de 20 s igual ao `canal.json`); `transcricao.json` aprovado (7/7 portões, 32/32 trechos, preso a esse áudio) e `words.json` (`90f3e24a…`, 2.127 palavras, o mesmo sha no espelho); `mapa-limpo --conferir` sai 0. A escuta do Lucas: "As escutas estão corretas, apenas 1 "can"" (08/10, 12:3x; `_pesquisa/narracao-conferencia.md`). O master sintético (`_media/_master.mp4`, 3840×2160, 30 fps, 752,55 s, carimbo com a narração de hoje), gerado às 12:42 depois da escuta (`0a564b9`). |
| `cut_detect` | 08/10/2026 | `done` (dispensado) | Como no Juneau: canal sem apresentador, master sintético, nada a decupar (a nota da linha faceless da pré-v1, `pipeline-faceless.json`, diz o mesmo). |
| `mirror` | 08/10/2026 | `done` | `espelho.json` do `montador` (56 cenas; as fusões s08→s07, s30→s29, s32→s31, s34→s33, s50 e s51→s49, s56→s55; `_relogio` preso ao `words.json` e à narração de hoje). O `validar-contrato espelho` e os portões do ofício passam; o cético não derrubou. Notas velhas no espelho (o master "ainda não existe", decisões já tomadas pelo Lucas ainda como pendentes, o `_rascunho`) ficam para o próximo toque do montador, sem segurar. |
