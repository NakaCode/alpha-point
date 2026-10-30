# Laudo do verificador-de-fatos sobre a descrição do YouTube (Atlântico), 30/10/2026

Despacho: `verificador-de-fatos` (Opus), pela Sala, sobre `out/atlantico-fundo/descricao-youtube.md` (sha256 `64a3a7cfd720…`), o
rascunho de 30/10/2026 depois do cético. A descrição **não foi editada**: o que pede mudança vai abaixo, com o conserto pronto.
Data-base da verificação: **30/10/2026, 00:48** (hora de Brasília).

**COBERTURA: 95 de 95 afirmações com veredito.** A lista foi **derivada à mão**, pela leitura integral de tudo o que vai ao YouTube: os
4 títulos da tabela do Test & Compare (os 2 do Lucas, o 3º proposto e a forma curta dele), os 4 parágrafos e a linha "Figures:" da SEM
LINKS (idênticos na completa, conferido por script), a pergunta e o comentário fixado, os 9 capítulos e a estrutura deles, e os créditos
das duas versões só na atribuição (autor, licença, fonte). Nenhum script de lista do canal existe para descrição; o limite declarado é o
da leitura humana: relação causal e implicatura entram por leitura, e estão nos itens D6 e D19. As tags, a categoria e as notas internas
do rascunho ficam fora do denominador (como no Peru); as contas das notas foram conferidas à parte, no fim.

Base: `roteiros/atlantico-fundo/roteiro-narrador.md` (`ca4ac18db548…`, o texto julgado na rodada da F132); `qc-roteiro/fatos.laudo.md` e
`fatos-tabela.json` (285 de 285 confirmadas); `pautas/atlantico-fundo/fundamento.json` (fatos, `nao_se_diz`, fontes);
`roteiros/atlantico-fundo/decisoes-lucas.md`; `out/atlantico-fundo/words.json` (`a86e44af…`), `espelho.json` › `_capitulos` e `_relogio`,
`textos-tela.json` › `_pergunta_cta`, `atlantico-fundo-POS.xml`; `_pesquisa/conferencia-midia.json`, `_pesquisa/pauta-geo.json`,
`_media/base/_PROCEDENCIA.json`, `_creditos-mapa.md`, `_creditos-trilha.md`, `_pesquisa/caca-relato.md`; as 67 `graphics/s*.html`.
Scripts próprios (só leem): `conferir.py` e `conferir2.py`, na pasta de rascunho da sessão. **Rede:** só as 4 páginas canônicas das
licenças CC (by/2.0, by/3.0, by-sa/4.0, by/4.0), que responderam com a licença certa. Nenhum site recusou leitura. Nenhuma música aberta.

**NOTA: 9.5/10 · VEREDITO: PASS.** Nenhuma afirmação REFUTADA, DIVERGE nem NÃO ACHEI. Todo número, data e nome do texto está no roteiro
aprovado (que já passou por 285 de 285) e no dossiê; os créditos batem com os vereditos do conferente e com a geometria. Duas notas leves de
implicatura (D6 e D19), com conserto de uma frase, e três observações sem conserto obrigatório.

## Tabela

### Os títulos (Test & Compare)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| T1 | "The Deepest Point in the Atlantic Ocean" | CONFIRMADA | grafia literal de `decisoes-lucas.md` ("O título", 24/10, 18:4x); é o assunto do vídeo (F02) |
| T2 | "The Deepest Point in the Atlantic Ocean Is Only 83 Miles From a U.S. Island" | CONFIRMADA (obs. O1) | grafia literal de `decisoes-lucas.md`; F04: 134,3 km = 83,45 mi (geodésica até a costa de Aguadilla, Census); 82,95 pelo Natural Earth; F05: Porto Rico é território dos EUA ("a U.S. island", nunca "state", N31) |
| T3 | "Mount Everest Would Stick Out of the Deepest Point in the Atlantic" (proposta) | CONFIRMADA | F06: 8.848,86 m (China e Nepal, 2020, S26) − 8.378 m (S01) = 470,86 m = 1.544,8 ft fora d'água; não cai no N02 ("fits", "swallowed") |
| T4 | "Mount Everest Would Stick Out of the Atlantic's Deepest Point" (forma curta) | CONFIRMADA | idem T3 |

### A abertura (1º parágrafo)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| D1 | "About 83 miles off Puerto Rico" | CONFIRMADA | F04 (83,45 mi); roteiro, gancho, palavra por palavra |
| D2 | "a U.S. island" | CONFIRMADA | F05 (Census: "the 50 States, the District of Columbia, and Puerto Rico") |
| D3 | "lies the deepest point in the Atlantic Ocean, in the Puerto Rico Trench" | CONFIRMADA | F02: "North Atlantic, Puerto Rico Trench" (S01, Tabela 1) |
| D4 | "In 1939, the cruiser USS Milwaukee reported a depth north of the island" | CONFIRMADA | F26; F050: The Sun, 28/07/1939, "28,680 feet), north of" Porto Rico (S09); roteiro p1 |
| D5 | "then a record for the Atlantic" | CONFIRMADA | F050 ("establishing a new record"); F051, DANFS: "the greatest depth yet discovered in the Atlantic"; roteiro p1, "a record for the Atlantic at the time" |
| D6 | "and the spot was named the Milwaukee Deep" | CONFIRMADA (nota L1) | F27/F052: "The new depression has been named the Milwaukee Deep, from the United States cruiser" (S09); o nome de 1939, sem dizer oficial (N08) |
| D7 | "The deepest point is more than five miles down." | CONFIRMADA | F03: 8.378 ± 5 m = 5,21 mi (S01) |
| D8 | "Stand Mount Everest on the bottom, and its top 1,500 feet would stick out of the water." | CONFIRMADA | F06 (1.545 ft); roteiro, gancho, palavra por palavra |
| D9 | "When you think 'deepest ocean,' you think Mariana. But that's the Pacific" | CONFIRMADA | F07 (Challenger Deep, Fossa das Marianas, Pacífico; S25); a forma honesta do N01 |
| D10 | "about 9,500 miles away" | CONFIRMADA | F08: 15.270 km = 9.488 mi em círculo máximo (a checagem deu ~15.290 km com o Challenger de S02) |

### O 2º parágrafo (o 2º do gancho, palavra por palavra até a pergunta: conferido por script; só a assinatura fica de fora)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| D11 | "In 1964, a crew in a French deep-diving craft descended into the Puerto Rico Trench" | CONFIRMADA | F36; tabela F014–F015 (S06: "Revisiting the 1964 Archimède bathyscaphe dive…"; S04: "the French submersible Archimede"); sem "French crew" (N51) |
| D12 | "and reported a crowd of fish" | CONFIRMADA | F37; F016 (S06: "200 snailfish (Liparidae) during a one mile transect … extraordinarily high-density") |
| D13 | "In 2019, a submersible went back to the exact same spot." | CONFIRMADA | F38 (S06: "revisited the exact same site in the Puerto Rico Trench") |
| D14 | "It saw none of those fish." | CONFIRMADA | F018 (S06: "No snailfish were observed"; "those fish" = os peixes-caracol do relato, N50) |
| D15 | "The first person to reach the deepest point itself got there only in December 2018." | CONFIRMADA | F39; F019 (S04: "the first person to reach the absolute nadir of the Atlantic Ocean"); o mergulho em 19/12/2018 (S05); sem N03 |
| D16 | "a 2019 study found that the official list of undersea features still had the Atlantic more than 1,000 feet too deep" | CONFIRMADA | F09; F021–F023, F026: gazetteer 8.740 m (S02, Tabela 1); 8.740 − 8.408 = 1.089 ft pelo próprio estudo; − 8.378 = 1.188 ft pelo sonar |
| D17 | "even after sonar showed otherwise" | CONFIRMADA | F024 (S02: "depth soundings consistently shallower than those published"); F025 (USGS, 8.300–8.340 m desde 2002–2003, S28) |

### Os dois parágrafos curtos

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| D18 | "In 1883, a U.S. Coast and Geodetic Survey steamer" | CONFIRMADA | F23 (o Blake, do USC&GS, 27/01/1883; S11, p. 46); roteiro p1 |
| D19 | "lowered a weighted wire more than five miles to the bottom" | CONFIRMADA (nota L2) | F032–F033: 4.561 braças = 27.366 ft = 8.341 m = 5,18 mi (S11); roteiro p1, "The wire went down more than five miles before it touched bottom" |
| D20 | "In 2002 and 2003, the U.S. Geological Survey mapped the trench with multibeam sonar." | CONFIRMADA | F32 (S28, página do USGS de 22/08/2018); roteiro p3, palavra por palavra |
| D21 | "The USGS says its walls show many old underwater landslides." | CONFIRMADA | F45; F105–F106 (S27/S28: "numerous retrograde slope failures", "Continuous retrograde slumping through time … giant landslides"); atribuído |
| D22 | "On Anegada, in the British Virgin Islands" | CONFIRMADA | F50 (S17); Anegada britânica, sem "U.S. island" (N24) |
| D23 | "a 2025 study dated the tsunami" | CONFIRMADA | F122, F124 (S17: "Uranium-series dates from coral boulders constrain the timing"; GRL 52(19), 2025) |
| D24 | "that left coral boulders far inland" | CONFIRMADA | F51; F118 (S17: "hundreds of coral boulders that came to rest hundreds of meters inland") |
| D25 | "to sometime between 1381 and 1391" | CONFIRMADA | F123 (S17: "the tsunami dates between 1381 and 1391 CE"); nunca "in 1385" (N24) |
| D26 | "In December 2018, Victor Vescovo reached the deepest point" | CONFIRMADA | F39 (S04; S05: "Wednesday, December 19") |
| D27 | "alone" | CONFIRMADA | F162 (S04: "Unprecedented Solo Submersible Dive") |
| D28 | "in his submersible Limiting Factor" | CONFIRMADA | F163 (S04: "in his private submersible, the Limiting Factor"); roteiro p5, "in his own sub" |
| D29 | "Far to the south, the South Sandwich Trench is the Atlantic's other contender." | CONFIRMADA | F73, F77, F212 (S02: o número mais publicado do Meteor, 8.428 m, passaria o de Porto Rico); roteiro p7; não diz "deeper" (N14) |
| D30 | "In 2023, the International Hydrographic Organization recognized the Southern Ocean" | CONFIRMADA | F81 (Res. 02/2023, S20; decisão 19 da A-3, S21); "recognized", não "ratified" nem "for the first time" (N20) |
| D31 | "which begins at 60 degrees south" | CONFIRMADA | F243 (S20: "the northern geographic limit of the Southern Ocean is defined by the parallel of Latitude 60°S") |
| D32 | "By the 60°S line, that trench's deepest point, the Meteor Deep, is in the Atlantic." | CONFIRMADA | F244, F83 (S01: 55,230°S, ~330 mi ao norte da linha; "the Meteor Deep lies within the waters of the southernmost Atlantic Ocean"); qualificado pela linha, como o F83 pede |

### A linha "Figures:" (cada atribuição sustenta um número do texto)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| FG1 | "Bongiovanni et al., Geoscience Data Journal (2021)" | CONFIRMADA | S01 (GDJ 9(1):108–123, doi 10.1002/gdj3.122): D7, D8, D32 |
| FG2 | "China & Nepal survey of Mount Everest (2020)" | CONFIRMADA | S26 (AP, 08/12/2020): D8; o crédito da s03 |
| FG3 | "National Geographic Society bulletin (1939)" | CONFIRMADA | S09 (The Sun, 28/07/1939, boletim da NGS): D4–D6; o crédito da s20 |
| FG4 | "Jamieson et al., Deep-Sea Research I (2020)" | CONFIRMADA | S06 (DSR I 162:103336): D11–D14 |
| FG5 | "Stewart & Jamieson, Earth-Science Reviews (2019)" | CONFIRMADA | S02 (ESR 197:102896): D16, D17 |
| FG6 | "Five Deeps Expedition (2018)" | CONFIRMADA | S04 (release de 21/12/2018): D15, D26–D28; o crédito da s53 |
| FG7 | "U.S. Coast and Geodetic Survey (1883)" | CONFIRMADA | S11: D18, D19; o crédito da s15 |
| FG8 | "U.S. Geological Survey (2018)" | CONFIRMADA | S28 (22/08/2018): D20, D21; o crédito de s33, s36, s38 e s39 |
| FG9 | "Kilbourne et al., Geophysical Research Letters (2025)" | CONFIRMADA | S17 (GRL 52(19), e2024GL114448): D22–D25 |
| FG10 | "IHO (2023)" | CONFIRMADA | S20/S21 (Res. 02/2023): D30, D31 |
| FG11 | "Distances measured by Alpha Point (straight line)." | CONFIRMADA (obs. O2) | F04 (geodésica de Vincenty, 83,45 mi) e F08 (círculo máximo, 9.488 mi): conta do canal sobre os pontos de S01; o `textos-tela.json` chama o "≈ 9,500 MI" de "conta nossa" |

### A pergunta e o comentário fixado

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| Q1 | "Would you make that dive alone? Answer in the comments." | CONFIRMADA | `textos-tela.json` › `_pergunta_cta` › `texto`, letra por letra (31 caracteres); a pressuposição (o mergulho solo) é F162 |
| Q2 | o comentário fixado "Would you make that dive alone?" | CONFIRMADA | idem; o mesmo texto da descrição |

### Os capítulos (os mesmos 9 nas duas versões, conferido por script)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| C1 | "0:00 The bottom of the Atlantic" | CONFIRMADA | `_capitulos` › gancho em 0 s; 1ª palavra "About" em 0,04 s; o título vem da assinatura ("the story of the bottom of the Atlantic") e não afirma fato |
| C2 | "1:00 A wire and a sound" | CONFIRMADA | p1 em 60,46 s (para baixo, 1:00); 1ª palavra "On" (January…); a anterior, "begins.", acaba em 59,98 s; título do espelho, literal |
| C3 | "2:19 A crew and a net" | CONFIRMADA | p2 em 139,64 s; "In 1964, people…"; título literal |
| C4 | "3:25 The sonar that already knew" | CONFIRMADA | p3 em 205,10 s; "In 2002…"; título literal |
| C5 | "4:50 What came ashore" | CONFIRMADA | p4 em 290,97 s; "The USGS says…"; título literal |
| C6 | "6:06 A robot, a sonar and a man alone" | CONFIRMADA | p5 em 366,85 s; "In 2015…"; título literal |
| C7 | "7:37 The number on the list" | CONFIRMADA | p6 em 457,84 s; "In 2019, two scientists…"; título literal |
| C8 | "9:13 The other contender" | CONFIRMADA | p7 em 553,70 s; "The Atlantic has…"; título literal |
| C9 | "10:36 The second look" | CONFIRMADA | p8 em 636,79 s; "In 2019, the same sub…"; título literal |
| C10 | a estrutura: o 1º em 0:00, 9 capítulos, cada um com 10 s ou mais, dentro do vídeo | CONFIRMADA | o menor tem 60,46 s (o gancho), o último 78,2 s pelo tempo da descrição; o XML põe o `_master` no quadro 0, com 21.426 quadros a 30 fps = 714,2 s; a fala acaba em 694,07 s |

### Os créditos (só a atribuição: autor, licença, fonte)

| id | afirmação | veredito | o que a fonte diz |
|---|---|---|---|
| S1 | "Sources are shown on screen." | CONFIRMADA | 37 das 67 cenas têm linha "Source(s):" (129 ocorrências no HTML) |
| S2 | Raimond Spekking (CC BY-SA 4.0), via Commons | CONFIRMADA | veredito da s24: "© Raimond Spekking / CC BY-SA 4.0 (via Wikimedia Commons)" |
| S3 | Richard Varcoe, Caladan Oceanic (CC BY-SA 4.0) | CONFIRMADA | vereditos de s47, s52/s54, s53 e s63: CC BY-SA 4.0 com permissão VRT; a forma que o Lucas aprovou (28/10, 15:0x) |
| S4 | Gnangcomapp (CC BY-SA 4.0) | CONFIRMADA | veredito da s56 |
| S5 | David Broad (CC BY 3.0) | CONFIRMADA | veredito da s43: "Creative Commons Attribution 3.0 Unported" |
| S6 | NOAA Photo Library (CC BY 2.0) | CONFIRMADA | veredito da s32: CC BY 2.0, sem PD-USGov na página |
| S7 | El Mundo / Universidad de Puerto Rico, fora de "Public domain" | CONFIRMADA | `credito_na_tela` da s39 e a `excecao_lucas` de 29/10, 01:1x (o PD-1923 não se confirmou na origem, e a descrição não o afirma) |
| S8 | "Photos via Wikimedia Commons (may have been cropped or resized)" | CONFIRMADA | as seis vêm de páginas do Commons (`acervo-livre` nos vereditos); a frase é hipotética, e as cenas recortam e escalam |
| S9 | "Pages from Stewart & Jamieson … (2019), CC BY 4.0 (cropped)" | CONFIRMADA | vereditos de s08, s56, s58 e s59: CC BY 4.0 (PDF da editora e NORA); recortes da p. 1 e da p. 4 |
| S10 | NASA, ISS071-E-1036, "image courtesy of the Earth Science and Remote Sensing Unit, NASA Johnson Space Center" | CONFIRMADA | veredito da s01, a linha "Na descrição" |
| S11 | NASA Earth Observatory (na completa, "images by Michala Garrison") | CONFIRMADA | veredito da s66; S40 |
| S12 | NOAA / NOAA Ocean Exploration, domínio público | CONFIRMADA | vereditos de s27, s29, s47 e s72 (FAQ da NOAA OE; PD-USGov-NOAA); o "Office of Ocean Exploration and Research" vai pelo nome de hoje |
| S13 | U.S. Geological Survey / "Brian F. Atwater, USGS", domínio público | CONFIRMADA | veredito da s44: "Credit: Brian F. Atwater, U.S. Geological Survey. Public domain." |
| S14 | "Landsat imagery courtesy of the U.S. Geological Survey" | CONFIRMADA | `_media/base/_PROCEDENCIA.json` › `credito_descricao` da mesa (Landsat 9, 19/02/2025) |
| S15 | "U.S. Navy / National Archives" (na completa, "(19-N-27088)") | CONFIRMADA | veredito da s19 |
| S16 | "Harris & Ewing / Naval History and Heritage Command" | CONFIRMADA | veredito da s14 (PD-1923 nos EUA; a linha que ele sugere) |
| S17 | "Rijksmuseum" sob "Public domain" | CONFIRMADA | vereditos de s12 e s17: CC0 1.0 e "Publiek domein" |
| S18 | "The Illustrated London News (1872)" / "Dec. 14, 1872" | CONFIRMADA | veredito da s17, a linha "Na descrição" |
| S19 | "U.S. Coast and Geodetic Survey (1883)" | CONFIRMADA | veredito do `uscgs-1883-p8` (obra federal, 17 U.S.C. §105) |
| S20 | "Image(s) and/or video used under license from Shutterstock.com" (sem o artista) | CONFIRMADA | `caca-relato.md`, l. 141–146: "B. Só a linha do fim"; "'Wirestock Creators/Shutterstock.com' não vai" (Lucas, 29/10, 12:0x) |
| S21 | "Stock footage: Envato Elements" (na completa) | CONFIRMADA | vereditos de s11 e s51 (Envato, assinatura da Top10, projeto `atlantico-fundo`); cortesia, sem crédito exigido (midia.md §3.1) |
| S22 | "Maps: © MapTiler © OpenStreetMap contributors (data under the Open Database License)" | CONFIRMADA | `_creditos-mapa.md`, a linha dos mapas, vertida ao inglês |
| S23 | "Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi:10.5285/4f68d5c7-…)" | CONFIRMADA | `_media/base/_PROCEDENCIA.json` › `credito_descricao` do WMS, letra por letra; o DOI em `pauta-geo.json` (23 vezes) |
| S24 | "Flanders Marine Institute (2026): MarineRegions.org … Consulted on 2026-10-28. (CC BY 4.0)" | CONFIRMADA | `pauta-geo.json` (`zee-*` › `licenca`: CC BY 4.0; registrado em 2026-10-28); a citação de `geo_superficie.py` |
| S25 | "Wei, ten Brink & Atwater (2024), JGR Solid Earth 129(3), e2023JB028387 (CC BY 4.0)" | CONFIRMADA | `pauta-geo.json` › `rupturas-wei-2024.json` (fonte, licença, url); dossiê S18 |
| S26 | "Plate boundary: USGS, after Bird (2003), doi:10.1029/2001GC000252" | CONFIRMADA | `_creditos-mapa.md`, l. 39: "o serviço cita Bird, P. (2003), G³ 4(3), doi:10.1029/2001GC000252" |
| S27 | "Music:" e as 4 linhas "Artista / Música / courtesy of Epidemic Sound", mais o site | CONFIRMADA | `_creditos-trilha.md`, bloco "Para colar", letra por letra (só o texto; nenhum MP3 aberto) |
| S28 | "Bongiovanni, Stewart & Jamieson (2021), Geoscience Data Journal, CC BY 4.0: https://doi.org/10.1002/gdj3.122" | CONFIRMADA | S01 (autores, revista, DOI, "CC BY 4.0") |
| S29 | "Stewart & Jamieson (2019), Earth-Science Reviews, CC BY 4.0: https://doi.org/10.1016/j.earscirev.2019.102896" | CONFIRMADA | S02 |
| S30 | "Jamieson et al. (2020), Deep-Sea Research I: https://doi.org/10.1016/j.dsr.2020.103336" | CONFIRMADA | S06 (cinco autores; o DOI) |
| S31 | "Kilbourne et al. (2025), Geophysical Research Letters, CC BY 4.0: https://doi.org/10.1029/2024GL114448" | CONFIRMADA | S17 ("CC BY 4.0"; o DOI) |
| S32 | "U.S. Coast and Geodetic Survey (1883); International Hydrographic Review (1936); National Geographic Society bulletin (1939)" | CONFIRMADA | S11, S12, S09; os créditos de s15, s18/s75 e s20 |
| S33 | "U.S. Geological Survey (2006, 2018); NOAA (Ocean Exploration, 2015 and 2026; NCEI; National Ocean Service)" | CONFIRMADA | S27, S28; S32/S33 (2015), S31 (2026), S29 (NCEI), S69 (NOS) |
| S34 | "Australian Museum (2020); Five Deeps Expedition (2018); Popular Science (2018); GEBCO Gazetteer (NOAA NCEI, 2026)" | CONFIRMADA | S30, S04, S05, S15 |
| S35 | "IHO Resolution 02/2023; U.S. Census Bureau (2025); China & Nepal Everest survey (2020); NASA Earth Observatory (2026)" | CONFIRMADA (obs. O3) | S20/S21; S47 (estimativa de 01/07/2025, o crédito da s51); S26; S40 |
| S36 | as URLs das licenças CC na completa (by-sa/4.0, by/3.0, by/2.0, by/4.0) | CONFIRMADA | as 4 páginas da Creative Commons, lidas em 30/10/2026: CC BY-SA 4.0, CC BY 3.0 Unported, CC BY 2.0 Generic e CC BY 4.0 |

## Os achados acionáveis (os dois LEVES; nenhum segura a descrição)

**L1 · D6/D7, a implicatura do Milwaukee Deep · LEVE → RAIZ: PONTUAL.** Cada frase é verdadeira, mas a ordem "o ponto mais fundo … In 1939
… the spot was named the Milwaukee Deep. The deepest point is more than five miles down." convida o leitor a ler Milwaukee Deep = o ponto
mais fundo de hoje. O vídeo diz o contrário (p6: no ponto da lista antiga, "the top of a ridge"; F26: a posição do Milwaukee fica ~66 mi a
oeste do ponto do sonar; F30), e a tag "Milwaukee Deep" reforça a ligação. O 2º parágrafo ("more than 1,000 feet too deep") já sugere a
diferença; três palavras a separam sem entregar a virada.
**CONSERTO (nas duas versões):** trocar "The deepest point is more than five miles down." por
"By modern sonar, the deepest point is more than five miles down." (+17 caracteres; F03, o sonar da Five Deeps, S01).

**L2 · D19, o arame de 1883 sem o lugar (o N22 do dossiê) · LEVE → RAIZ: PONTUAL.** A frase tirou do roteiro o "north of Puerto Rico" e o
"about 60 miles east of the deepest point". Não está ao lado do "more than five miles down" de hoje (dois parágrafos antes) e não diz que o
fio chegou ao ponto mais fundo: por isso não é DIVERGE. Mas os dois "more than five miles" na mesma descrição deixam o leitor supor que o
fio de 1883 desceu no mesmo lugar, o que o dossiê veta ("o arame ao lado do número de hoje sem dizer que o lugar era outro").
**CONSERTO:** "In 1883, about 60 miles east of today's deepest point, a U.S. Coast and Geodetic Survey steamer lowered a weighted wire more
than five miles to the bottom." (+46 caracteres; F23, roteiro p1).
- Na SEM LINKS, cabe: com L1 e L2, 4.299 caracteres.
- Na completa, os dois juntos dão 5.024, acima de 5.000. Para caber, sai a cortesia "Stock footage: Envato Elements; Shutterstock. " (46
  caracteres, o primeiro corte que o próprio rascunho já prevê; a linha do Shutterstock que vem depois fica): 4.978. Sem esse corte, só o
  L1 cabe na completa (4.978).

## Observações (sem conserto obrigatório)

- **O1 · T2, "Only 83 Miles" sem "about".** O título arredonda 83,45 mi (Census) ou 82,95 mi (Natural Earth) para 83; a voz diz "About 83
  miles" aos 0,04 s. O arredondamento se sustenta, como o "2%" do título do Peru. É o título do Lucas: fica como ele escolheu.
- **O2 · FG11, "straight line".** O 83 é geodésica, e o 9.500, círculo máximo: a "linha reta" sobre a superfície da Terra. Se sustenta.
- **O3 · S35, "IHO Resolution 02/2023".** A s69 mostra "Source: IHO Publication M-3, 2026", que contém a resolução, e a s67, "IHO, 2023".
  Coberto, e já registrado pelo cético (`RELATO.md`, "O que fica para a Sala", 8).
- Na tabela, a frase do D9 vai com aspas simples dentro das duplas da célula; na descrição, "deepest ocean," está entre aspas duplas.

## Lista de nomes (anônimo no texto → nomeável)

| no texto | quem é | credencial | fonte |
|---|---|---|---|
| "a 2019 study" | Heather A. Stewart e Alan J. Jamieson | Stewart, British Geological Survey (o © BGS/UKRI do artigo); Jamieson, Newcastle University (F80) | S02, https://nora.nerc.ac.uk/id/eprint/524544/ |
| "the official list of undersea features" | IHO-IOC GEBCO Gazetteer of Undersea Feature Names | a lista oficial da IHO e da COI, servida pela NOAA NCEI | S15, https://www.ngdc.noaa.gov/gazetteer/api/v1/feature |
| "a 2025 study" | Kilbourne, Weil-Accardo, Feuillet, Deschamps, Xu, Shen, Sun, Halley e Atwater | Geophysical Research Letters 52(19), e2024GL114448 | S17, https://hal.science/hal-05463233/document |
| "a submersible went back" | o Limiting Factor (Caladan Oceanic) | o artigo de 2020 (DSR I) | S06, https://nora.nerc.ac.uk/id/eprint/528113/ |
| "a crew in a French deep-diving craft" | **fica anônimo de propósito**: nenhuma fonte lida diz quem estava a bordo do Archimède (A19, N51) | — | F36 |

## Voláteis

Nenhum no texto publicado: tudo é datado (1883, 1939, 1964, 2002–2003, 2018, 2019, 2023, 2025) ou estrutural ("more than five miles", "about
9,500 miles"). O "As of October 2026, the official list … doesn't include the Milwaukee Deep" do roteiro não entrou na descrição. Os tempos dos
capítulos dependem do vídeo exportado: conferir nele antes de publicar (um corte na montagem os mudaria; no XML, o master está no quadro 0, e
as chamadas ficam na V3, por cima).

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- O 3º título (T3 ou T4) só entra no teste com o "sim" dele no chat da Sala: factualmente, os dois se sustentam.
- Os links da MapTiler e da OSM na SEM LINKS, a nota "© 2019 BGS (UKRI)" nas páginas de Stewart & Jamieson e a GEBCO_2019 na s67 são
  decisões de licença do `RELATO.md` ("O que fica para a Sala", 2 a 4), não de fato. Não mudam nenhum veredito acima.

## Conferido além do denominador (as notas internas do rascunho)

| id | afirmação | veredito | medida |
|---|---|---|---|
| A1 | títulos com 39, 75, 66 e 61 caracteres | CONFIRMADA | 39, 75, 66, 61 |
| A2 | a F1 paga os títulos 1 e 2 aos 5,8 s; a F3 paga o 3º aos 13,7 s | CONFIRMADA | "Ocean." acaba em 5,79 s; "water.", em 13,70 s (`words.json`) |
| A3 | o 2º parágrafo é o 2º do gancho, palavra por palavra; o 1º muda só no declarado | CONFIRMADA | prefixo exato (falta só a assinatura); as frases do Everest, da Marianas e das 83 mi estão idênticas |
| A4 | SEM LINKS com 4.236 caracteres (4.239 bytes, 39 linhas); completa com 4.961 (4.965 bytes, 49 linhas); 5.009 com a quebra contada em dobro | CONFIRMADA | 4.236 / 4.239 / 39; 4.961 / 4.965 / 49; 4.961 + 48 = 5.009 |
| A5 | os cortes: 786 (os dois curtos), 466 (a "Figures:"), 46 (a cortesia do stock) | CONFIRMADA | 786, 466, 46 |
| A6 | "o último com 77 s até o fim" (a nota dos capítulos) | DIVERGE, só na nota | 77,4 s pelo espelho (636,79 → 714,19); 78,2 s pelo tempo da descrição (10:36). Não vai ao YouTube; o cético já o apontou (`RELATO.md`, 9) |
| A7 | o Everest de 8.848,86 m contra 8.378 ± 5 m deixa uns 1.545 pés de fora | CONFIRMADA | 470,86 m ÷ 0,3048 = 1.544,8 ft |

## Os 2 padrões mais vistos

1. **A frase do roteiro encurtada perde a cerca que o roteiro tinha posto.** O roteiro diz onde o arame desceu ("about 60 miles east") e
   separa a lista antiga do sonar (p6); a descrição, para caber, tirou essas cercas, e o que sobrou é verdadeiro mas convida a ler mais (L1 e
   L2). Em texto derivado do roteiro, a frase que entra leva a ressalva que o dossiê pede para ela (o `nao_se_diz`).
2. **Os créditos são fiéis ao veredito do conferente.** Autor, licença e forma de cada linha batem com o `credito_na_tela`, o
   `_PROCEDENCIA.json`, o `pauta-geo.json` e os `_creditos-*.md`; nada creditado que a cena não usa, e nada sob "Public domain" sem prova (o El
   Mundo ficou de fora, pela exceção).

NOTA: 9.5/10

VEREDITO: PASS
