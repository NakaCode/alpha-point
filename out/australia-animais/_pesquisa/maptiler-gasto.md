# O gasto da MapTiler no vídeo 8 (australia-animais)

A liberação: Lucas, 18/11/2026, ~22:3x, no chat da Sala. A pergunta: "O vídeo 8 vai ter mapas: a Austrália e o Channel Country (onde vive
a taipan-do-interior), a separação da Antártida e a chegada das cobras pela Ásia. Libero a MapTiler (o satélite e o relevo) para este vídeo,
como no vídeo 7?" A resposta: "Sim, com relevo 3D (Recomendado)". A opção dizia: "Uso o satélite da MapTiler nas cenas de mapa e o relevo 3D
onde a cena precisar. Anoto o contador antes e depois de cada render, como no vídeo 7." (`sala/mapas-e-maptiler.md`; `roteiros/australia-animais/decisoes-lucas.md`.)

O relevo 3D vai só em s02 (o terrain; o conceito, arco, "AS POSES DE MAPA"). s04 P2 e s33 inclinam a câmera SEM terrain.

O contador se anota antes e depois de cada render de mapa e de cada rodada de portão com a pré-carga
(`ferramentas/chaves-nos-portoes.mjs`), como nos vídeos 5 e 7. Neste vídeo as peças rodam como subagentes da Sala (sem setor): quem anota
é a Sala, uma vez antes e uma vez depois de cada leva. A conta dos portões é a soma de `pedidos_maptiler` nas linhas novas do
`out/australia-animais/_tmp/maptiler-portoes.jsonl` (`_tmp/arte-1/maptiler-conta.mjs`). Os renders 4K de prova e os `quadro.mjs` não
imprimem a conta: ficam "não contados", com o número de execuções. O `portao-margens` e o `portao-movimento` não pedem tile (a prisão de
rede deles) e não entram aqui.

| Quando (Brasília) | Rodada | Pedidos | Notas |
|---|---|---|---|
| 19/11/2026 20:53 | antes da arte-1 (as 65 cenas; as de mapa são as 20 do `mapista` e as do editor com beat de mapa: s34, s51, s56, s62, s65, s68; o relevo 3D só em s02) | — | Sala. O `_tmp/maptiler-portoes.jsonl` ainda não existe (0 linhas). |
| 20/11/2026 01:3x | a arte-1 inteira (23 lotes, 65 cenas; 26 cenas de mapa: s02 s04 s10 s17 s20 s22 s25 s28 s31 s34 s39 s42 s43 s45 s50 s51 s53 s56 s60 s62 s65 s68 s69 s71 s73 s74) | 29.348 nos portões | Sala, pelo `_tmp/arte-1/maptiler-conta.mjs`: as linhas 1–333 do `_tmp/maptiler-portoes.jsonl` (de 19/11 21:13:51 a 20/11 01:24:51). Os 10 maiores: s39 4.820, s22 2.610, s28 2.048, s31 1.988, s65 1.799, s25 1.514, s02 1.463, s04 1.450, s74 1.189, s69 1.083. **Fora da conta** (não contados pelo render nem pelo `quadro.mjs`): 16 renders 4K de cena de mapa pela Sala (s17 s39 s22 s39 s43 s69 s42 s71 s28 s25 s45 s31 s51 s74 s68 s65), 11 clipes finais de cena de mapa pelas peças (s02 s04 s10 s20 s34 s50 s53 s56 s60 s62 s73, e o 1º render de s62) e os quadros de prova. O contador do painel da MapTiler fica para o Lucas, como no vídeo 7 (o ok de 18/11, ~22:3x, liberou o gasto do vídeo). |
| 20/11/2026 15:38 | o lote único de consertos (consertos-1; 7 cenas: s16 s22 s39 s51 s63 s65 s67; as de mapa ou com beat de mapa: s22, s39, s51, s65) | 5.480 nos portões | Sala, pelas linhas 334–379 do `_tmp/maptiler-portoes.jsonl` (desde 14:47): s22 876, s39 1.596, s51 2.158 (duas rodadas: a entrega e o 1º conserto, o [265]), s65 850. Não contados: os 4 renders 4K da Sala das cenas de mapa (s22, s39, s51, s65; `_tmp/arte-1/renders/tempos.txt`, as filas `consertos-A` e `consertos-B`) e os `quadro.mjs` das peças (MA 3, FA 2, FB 2). A liberação do vídeo vale (o Lucas, 18/11, "Sim, com relevo 3D (Recomendado)"). |
