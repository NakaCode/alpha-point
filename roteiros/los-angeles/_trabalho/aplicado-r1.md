# Aplicação da lista fechada · rodada 1 · los-angeles (vídeo 2)

> Gravado em 07/10/2026 08:34 (Brasília) pelo aplicador (Fable 5.1), sobre `roteiros/los-angeles/_trabalho/lista-r1.json`
> (35 itens). O "antes" é `_trabalho/roteiro-r1.md`, a cópia do roteiro que a bancada 1 julgou (sha256 do texto falado
> `822cb8e37301beacc503a5820695fc79a447983299c70a3afe6fe4ad35653bfd`, 2139 palavras, PASSA). O "depois" é
> `roteiros/los-angeles/roteiro-narrador.md` com os 35 itens aplicados, na ordem, cada `de` casando uma vez, sem mais
> nada. A variante do gancho (`variantes/gancho-hoje.md`) não foi tocada: a cópia dela está em
> `_trabalho/gancho-hoje-r1.md` (idêntica à variante, byte a byte).
> Esta prova é gerada por `provar-r1.py` (scratchpad da sessão), que reproduz a leitura do `gate.mjs` e roda o portão.

## O portão, depois da aplicação

- `node roteiros/los-angeles/_ferramentas/gate.mjs`: **PASSA**, exit 0 · sha256 do texto falado
  **`4902fe99688bd24675424efecb0fceecf730ca4d3a0e600f42dafbdfa62efc96`** · 2063 palavras (≈11:13 a 184 palavras/min)
  · 32 parágrafos · 153 frases · média 13.5 · maior
  33 · gancho com 140 palavras até a assinatura, "But" na
  palavra 32 · problemas: 0 · alertas: 3
  (os mesmos aceitos antes: TEU ×2, "monopoly" ×1).
- Com a variante do gancho de hoje (cópia no scratchpad: o corpo novo com os dois parágrafos do gancho trocados pelos da
  variante): **PASSA**, exit 0 · sha256 `019c5f927f17e5e8967388e58301dca7c59718497d8b583fa654bde3741db087` · 2063 palavras ·
  153 frases · maior 33 · gancho 140 palavras,
  "But" na palavra 32.
- O sha do roteiro novo bate com o da cópia de prova do doutor (`_tmp-lista.md`, `4902fe99…`): os dois arquivos são
  idênticos byte a byte (`diff` sem saída).
- Rodadas do portão até sair 0: **uma**. Nenhuma correção foi necessária.

## As palavras por parte e os pedidos à voz

| Parte | Antes | Depois | Saldo | Pedidos à voz (depois) |
|---|---|---|---|---|
| gancho | 140 | 140 | +0 | 2 (57, 83) |
| p1 | 269 | 262 | -7 | 5 (51, 53, 41, 68, 49) |
| p2 | 321 | 299 | -22 | 4 (85, 81, 49, 84) |
| p3 | 353 | 366 | +13 | 6 (41, 48, 65, 42, 63, 107) |
| p4 | 249 | 225 | -24 | 3 (91, 56, 78) |
| p5 | 326 | 314 | -12 | 5 (67, 40, 77, 72, 58) |
| p6 | 232 | 211 | -21 | 3 (85, 76, 50) |
| p7 | 249 | 246 | -3 | 4 (51, 45, 49, 101) |
| **total** | **2139** | **2063** | **-76** | 32 pedidos, de 40 a 107 palavras |

As chamadas (`marca/cta.md`): a inscrição sobre "Stone kept coming, barge after barge, for thirteen years." cai na palavra
≈1158 (≈6:18 de fala, ≈55 % de 11:33 com a cauda de 20 s);
a reserva, "The second board had said the same as the first.", na palavra ≈897 (≈4:52, ≈42 %).

## Os itens

- Aplicados: **35 de 35** (L01, L02, L03, L04, L05, L06, L07, L08, L09, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L20, L21, L22, L23, L24, L25, L26, L27, L28, L29, L30, L31, L32, L33, L34, L35).
- Que não casaram: **nenhum** (cada `de` casou uma vez no arquivo, conferido antes de gravar, em `--seco`).
- Itens que o diff frase a frase viu: 35 de 35.
- Avisos do casamento no texto falado: nenhum.

## O diff frase a frase, com o item que explica cada diferença

Frases do texto falado (a leitura do `gate.mjs`), pareadas por `difflib`. "SAI" é frase do antes que não está no depois;
"ENTRA" é frase do depois que não estava no antes. Ao lado, o item cujo `de` (no antes) ou `para` (no depois) cobre a
frase, por posição no texto. Uma frase sem item seria uma mudança fora da lista.

**Diferença 1** (replace; parte p1)

- SAI: “In 1886, Colonel Mendell of the Army Corps of Engineers wrote that the only deep-water harbors in California were San Francisco and San Diego, about six hundred miles apart.” ← L01
- SAI: “San Pedro Bay, in between, was an open anchorage, wide open to the southeast, where the winter storms came from.” ← L02
- ENTRA: “In 1886, Colonel Mendell of the Army Corps of Engineers wrote that the only deep-water harbors in California were San Francisco and San Diego.” ← L01
- ENTRA: “San Pedro Bay, in between, was an open anchorage, exposed to the southeast and south, where the winter storms came from.” ← L02

**Diferença 2** (replace; parte p1)

- SAI: “The city of 1850 sits inland, and the water it used was nineteen miles away, in a bay that wrecked ships and an estuary a rowboat could barely cross.” ← L03
- ENTRA: “The city of 1850 sits inland, and the water it used was nineteen miles away, in a bay that wrecked ships, and in a shallow estuary.” ← L03

**Diferença 3** (replace; parte p2)

- SAI: “In July 1871, the Army approved a plan by Mendell, then a major: a jetty, a wall of timber and rock, more than a mile long, from Rattlesnake Island to Deadman's Island.” ← L04
- ENTRA: “In July 1871, the Army approved a plan by Mendell, then a major.” ← L04
- ENTRA: “It was a jetty, a wall of timber and rock more than a mile long, from Rattlesnake Island to Deadman's Island.” ← L04

**Diferença 4** (replace; parte p2)

- SAI: “Then came the letter.” ← L05
- SAI: “On November 8, 1886, Colonel Mendell signed a preliminary examination in San Francisco.” ← L06
- SAI: “Wilmington harbor, he wrote, already took ships drawing twelve to fourteen feet, the depth of water a ship needs.” ← L06
- SAI: “And still: "It is a small estuary and can never be made a harbor for deep-water ships."” ← L07
- ENTRA: “In between came the letter.” ← L05
- ENTRA: “On November 8, 1886, Colonel Mendell signed a report in San Francisco.” ← L06
- ENTRA: “Wilmington harbor, he wrote, already took ships drawing twelve to fourteen feet, meaning they sat that deep in the water.” ← L06
- ENTRA: “And still he wrote: "It is a small estuary and can never be made a harbor for deep-water ships."” ← L07

**Diferença 5** (replace; parte p2)

- SAI: “So that is what "never" measured: not the bay, the estuary.” ← L08
- ENTRA: “So that is what his "never" measured: not the bay, the estuary.” ← L08

**Diferença 6** (replace; parte p2)

- SAI: “San Pedro Bay, Mendell wrote, was "worthy of improvement," and he asked for a survey.” ← L09
- ENTRA: “San Pedro Bay, Mendell wrote, was "worthy of improvement," though he questioned whether an artificial harbor there was worth it, and he asked for a survey.” ← L09

**Diferença 7** (replace; parte p2)

- SAI: “The man who wrote "never" had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.” ← L10
- SAI: “So the map now has two waters on it, and both of them still had to be made: an estuary with a ceiling on it, and an open bay that needed a wall.” ← L11
- SAI: “And a wall needs a decision about where.” ← L11
- ENTRA: “That man, the one who wrote "never," had designed the jetty, backed the breakwater, and would sit on the first board that picked San Pedro.” ← L10

**Diferença 8** (replace; parte p3)

- SAI: “In 1891, the Southern Pacific began a pier there, at Port Los Angeles, by the account of Charles Willard, a Chamber of Commerce man on San Pedro's side.” ← L12
- SAI: “The federal board of 1897 measured it at more than three quarters of a mile, out to about thirty-three feet of water: deep water you could walk to.” ← L12
- ENTRA: “In 1891, the Southern Pacific began a pier there, by the account of Charles Willard, a Chamber of Commerce man on San Pedro's side.” ← L12
- ENTRA: “The spot was called Port Los Angeles.” ← L12
- ENTRA: “Despite the name, it is not today's port.” ← L12
- ENTRA: “A later federal report measured the pier at more than three quarters of a mile, out to about thirty-three feet of water: deep water you could walk to.” ← L12

**Diferença 9** (insert; parte p3)

- ENTRA: “That meant going broke.” ← L13

**Diferença 10** (replace; parte p3)

- SAI: “They called it the Free Harbor Fight.” ← L14
- ENTRA: “It's remembered as the Free Harbor Fight.” ← L14

**Diferença 11** (replace; parte p3)

- SAI: “Willard's side called Port Los Angeles a "monopoly harbor"; the one dissenter on the last board would write that San Pedro "would probably eventuate in a serious monopoly."” ← L15
- ENTRA: “Willard's side called the railroad's Port Los Angeles a "monopoly harbor"; the one dissenter on a later board would write that spending at San Pedro "would probably eventuate in a serious monopoly."” ← L15

**Diferença 12** (replace; parte p3)

- SAI: “So put the deep-water harbor on the map: about nineteen miles from the Plaza, in a bay seven miles from the other one.” ← L16
- ENTRA: “So put the deep-water harbor on the map: in San Pedro Bay, more than twenty miles from the Plaza.” ← L16

**Diferença 13** (replace; parte p3)

- SAI: “First the wall.” ← L17
- SAI: “Then the question of whose town it was in.” ← L17
- ENTRA: “That gap is what the strip of 1906 would cross.” ← L17

**Diferença 14** (replace; parte p4)

- SAI: “Between fifteen and twenty thousand people watched, by the Times's count.” ← L18
- ENTRA: “Between fifteen and twenty thousand people watched, according to the Los Angeles Times.” ← L18

**Diferença 15** (replace; parte p4)

- SAI: “In January 1905, with money to spare, the Army got leave to extend the wall to at least nine thousand feet.” ← L19
- ENTRA: “In January 1905, with money to spare, the Army got approval to extend the wall to at least nine thousand feet.” ← L19

**Diferença 16** (replace; parte p4)

- SAI: “Then the second tool arrived, where the tide had stopped.” ← L20
- SAI: “On April 1, 1905, a federal dredge named the San Pedro went to work in the inner harbor.” ← L21
- ENTRA: “Then the second tool arrived.” ← L20
- ENTRA: “On April 1, 1905, a federal dredge went to work in the inner harbor.” ← L21

**Diferença 17** (delete; parte p4)

- SAI: “The Corps of Engineers counts the breakwater as completed in 1912: just over two miles of rock.” ← L22

**Diferença 18** (replace; parte p5)

- SAI: “Inside the city it was easy: 6,612 to 914 in the official count.” ← L23
- SAI: “In the territory, the Los Angeles Times, which had campaigned for annexation, counted six votes of margin on election night, and ten in the official count: 213 to 203, out of 416.” ← L23
- ENTRA: “The tallies come from the Los Angeles Times, which had campaigned for annexation.” ← L23
- ENTRA: “Inside the city it was easy, more than seven to one.” ← L23
- ENTRA: “In the territory, the margin was six votes on election night, and ten in the official count: 213 to 203.” ← L23

**Diferença 19** (replace; parte p5)

- SAI: “The whole annexation was about eighteen and a half square miles.” ← L24
- ENTRA: “The whole annexation was more than eighteen square miles.” ← L24

**Diferença 20** (replace; parte p5)

- SAI: “So this is the answer to the shape.” ← L25
- SAI: “Not a road to the sea.” ← L25
- SAI: “A legal handshake, drawn half a mile wide, so that one city could touch two others.” ← L25
- ENTRA: “So the strip is a legal handshake, drawn half a mile wide, so that one city could touch two others.” ← L25

**Diferença 21** (replace; parte p5)

- SAI: “That took three more years.” ← L26
- SAI: “The strip had taken the city to the harbor towns' doorsteps.” ← L27
- ENTRA: “That took almost three more years.” ← L26
- ENTRA: “The strip had taken the city to the harbor towns' boundary lines.” ← L27

**Diferença 22** (replace; parte p6)

- SAI: “In March 1909, the legislature passed a new consolidation law, for cities "each one of which is contiguous to the other."” ← L28
- ENTRA: “In March 1909, a new state law repeated the rule: consolidation only for cities "each one of which is contiguous to the other."” ← L28

**Diferença 23** (replace; parte p6)

- SAI: “Wilmington went first, on August 4: 107 to 61.” ← L29
- SAI: “Los Angeles, the same day, 13,661 to 221.” ← L29
- ENTRA: “Wilmington voted on August 4: 107 to 61.” ← L29
- ENTRA: “Los Angeles said yes the same day, by a landslide.” ← L29

**Diferença 24** (replace; parte p6)

- SAI: “And in 1912, the Corps of Engineers called the breakwater finished.” ← L30
- SAI: “The city had owned a coast for three years before its wall was done.” ← L30
- SAI: “Back to the outline, in layers: 1850, 1906, 1909.” ← L31
- SAI: “The strip stops being a dead end: a block, a thread, and a harbor at the bottom.” ← L31
- SAI: “And the thread is still there.” ← L31
- ENTRA: “And in 1912, the Corps of Engineers called the breakwater finished: just over two miles of rock.” ← L30
- ENTRA: “The city had owned a coast for almost three years before the wall was done.” ← L30

**Diferença 25** (replace; parte p7)

- SAI: “And the strip is still there, still about half a mile wide.” ← L32
- ENTRA: “And the strip is still there, about half a mile wide.” ← L32

**Diferença 26** (replace; parte p7)

- SAI: “The harbor at the end of it was finished by machine.” ← L33
- SAI: “The port's Main Channel is fifty-three feet deep today, dredged from forty-five to fifty-three with the Corps of Engineers by 2013.” ← L33
- ENTRA: “The harbor at the end of it was deepened by dredges.” ← L33
- ENTRA: “By 2013, the port and the Corps of Engineers had taken its Main Channel from forty-five feet to fifty-three.” ← L33

**Diferença 27** (replace; parte p7)

- SAI: “A TEU is a twenty-foot container unit, a measure of volume, not a count of boxes.” ← L34
- ENTRA: “A TEU is the space of one twenty-foot container; a forty-foot box counts as two.” ← L34

**Diferença 28** (replace; parte p7)

- SAI: “It was the way to a harbor that didn't exist yet.” ← L35
- ENTRA: “It was the way to a deep-water harbor that didn't exist yet.” ← L35

**Frases mudadas sem item que as explique: 0.**

## As fronteiras de pedido à voz que mudaram sem palavra nova

- L12 parte o parágrafo do píer (p3) em dois pedidos, antes de "A later federal report": com a glosa e o L13 ele passava
  de 110 palavras.
- L16 junta o fecho de p3 ao parágrafo da lei de 1896: sozinho, ele caía abaixo de 40.
- L11, L22 e L31 só tiram texto; L11 tira um parágrafo inteiro de p2 (a linha em branco vai junto).
- Resultado: 33 → 32 parágrafos falados, todos entre 40 e 107 palavras.

## O que fica para quem segue (da `lista-r1.md`, "O que muda para quem segue")

- A folha de pronúncia (`roteiros/los-angeles/pronuncia.md`) cita trechos trocados; refaz-se sobre o sha novo. "Times's" saiu do texto (L18).
- A cópia para a voz: os placares 6,612–914 (L23) e 13,661–221 (L29) saem da voz e vão à tela; "more than seven to one" e
  "by a landslide" entram; "T E U" continua (L34).
- A bancada da rodada 2 confere só as frases deste diff; o que é fato novo na voz está listado no fim da `lista-r1.md`.
- O `roteiro-editor.md` foi atualizado nesta mesma rodada (a revisão, a tabela das partes e as linhas das frases trocadas).
