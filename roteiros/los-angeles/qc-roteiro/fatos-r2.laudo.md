# Laudo · verificador de fatos · 2ª lista fechada (R2) · los-angeles

Revisão julgada: `99d86455e8ce` · base: a revisão `4902fe99688b` (`_trabalho/roteiro-r2.md`), julgada em `fatos-final.laudo.md` · data-base 2026-10-07 (09:29, hora de Brasília) · sem rede: tudo foi lido no disco

COBERTURA: 18 de 18. A lista se derivou do diff, por ferramenta:
- **10 afirmações das 6 frases trocadas** (R2-01 a R2-06), partidas por afirmação;
- **8 afirmações da 7ª troca**, pedida pelo Claude central durante a rodada e ainda não aplicada: a moldura nova (R2-07a a c) e as 5 medidas do parágrafo dela, refeitas no mapa novo (P5-1 a P5-5).

As outras frases do texto são idênticas, byte a byte, às da revisão `4902fe99688b`, e mantêm o veredito de `fatos-final.laudo.md` (156 de 156). A exceção é a F152 (B1), que era a frase de R2-04 e está resolvida abaixo.

NOTA: 9.6/10. As 6 trocas aplicadas se sustentam, e o B1 da rodada final caiu: o texto não dá mais duas distâncias ao mesmo porto. A nota não é 10 pela 7ª troca: a proposta diz "drawn by its engineer", e o próprio mapa diz que outro homem o compilou. Na rodada final, a nota foi 9.3, e não houve regressão.

## 1 · O diff: só as 6 trocas mudaram

**Como provei:**
- `node roteiros/los-angeles/_ferramentas/gate.mjs` sobre o texto de hoje deu PASSA, com sha256 `99d86455e8ce4609ea9d099d44435a16b1153784fd66cc4755a82bfdde95750a` (2.050 palavras, 32 parágrafos, 152 frases).
- O mesmo portão sobre `_trabalho/roteiro-r2.md` deu `4902fe99688bd24675424efecb0fceecf730ca4d3a0e600f42dafbdfa62efc96`: a cópia é a revisão que a bancada final julgou.
- Diff frase a frase (difflib, frases partidas por pontuação dentro de cada parágrafo): 6 blocos `replace` e nenhum `insert` nem `delete` fora deles.
- Prova byte a byte: as 6 trocas de `aplicar-r2.mjs` aplicadas, em memória, sobre `roteiro-r2.md` (cada "de" casou 1 vez) dão um texto **idêntico** ao `roteiro-narrador.md` de hoje (`identico: true`). Fora delas, nem título, nem comentário, nem linha `>` mudou.

| id | parágrafo | antes (4902fe99688b) | hoje (99d86455e8ce) |
|---|---|---|---|
| R2-05 | p2 | On November 8, 1886, Colonel Mendell signed a report in San Francisco. | On November 8, 1886, Colonel Mendell signed it in San Francisco. |
| R2-03 | p3 | So put the deep-water harbor on the map: in San Pedro Bay, more than twenty miles from the Plaza. | So put the deep-water harbor on the map: in San Pedro Bay. |
| R2-01 | p4 | The wall came first. | The breakwater came first. |
| R2-06 | p7 | On today's outline, about nine miles of it still run thin, between its neighbors: Gardena, Torrance, Carson, Lomita, and pockets of county land. Long Beach doesn't touch it. | On today's outline, the city has grown around both ends, and about nine miles of it still run thin, between other cities and county land. |
| R2-02 | p7 | A TEU is the space of one twenty-foot container; a forty-foot box counts as two. | A TEU is the space of a single twenty-foot container; a forty-foot box counts as two. |
| R2-04 | p7 | And a city nineteen miles from that harbor drew a strip half a mile wide to touch the two towns around it, then voted itself onto the coast. | And a city nineteen miles from the harbor towns drew a strip half a mile wide to touch them, then voted itself onto the coast. |

## 2 · A tabela de vereditos

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| R2-01 | The breakwater came first. | CONFIRMADA | É o mesmo fato da F070 (CONFIRMADA na rodada final), agora com o nome da obra. O quebra-mar começa em 26/04/1899 (Times, 27/04/1899). A faixa, da frase anterior, é de 1906, e a draga, da frase seguinte ("Then the second tool arrived"), é de 01/04/1905. O "breakwater" já foi apresentado em p2 ("a breakwater, a wall out in the bay"). | https://archive.org/details/sim_los-angeles-times_the-los-angeles-times_1899-04-27 (local: experiencia/lat1899/) |
| R2-02 | A TEU is the space of a single twenty-foot container; a forty-foot box counts as two. | CONFIRMADA (pela definição da unidade) | A mesma definição da rodada final ("one" virou "a single"): TEU = twenty-foot equivalent unit, e o contêiner de 40 pés conta 2 TEU. | https://www.portoflosangeles.org/business/statistics/facts-and-figures (local: evento/pola-facts-and-figures.txt) |
| R2-03 | So put the deep-water harbor on the map: in San Pedro Bay. | CONFIRMADA | SD18, 01/03/1897: "this Board reports in favor of San Pedro as the location for a deep-water harbor". O sítio é "at the westerly side of San Pedro Bay under Point Fermin" (H. Ex. Doc. 41). A distância saiu da voz, e com ela a metade do B1 (§3). | https://www.govinfo.gov/content/pkg/SERIALSET-03560_00_00-001-0018-0000/pdf/SERIALSET-03560_00_00-001-0018-0000.pdf (local: documento/sdoc18-1897.txt); https://www.govinfo.gov/content/pkg/SERIALSET-03103_00_00-035-0041-0000/pdf/SERIALSET-03103_00_00-035-0041-0000.pdf (local: documento/hexdoc41-1892.txt) |
| R2-04a | a city nineteen miles from the harbor towns | CONFIRMADA (medida até a mais próxima das duas; nota no §4) | Plaza → Wilmington: 19,10 a 19,15 mi (esc-09), e 19,16 mi pelos pontos GNIS e NRHP de lugares-gnis-nrhp. Plaza → San Pedro: 21,76 mi até a divisa de San Pedro, na ponta da faixa de 1906 (esc-09), e 22,37 mi até o ponto GNIS de San Pedro (medido nesta rodada). O texto já fixou as 19 milhas em Wilmington ("Wilmington, where the harbor is today, is about nineteen", p1), e a F087 usa a mesma leitura logo depois de nomear San Pedro e Wilmington. "X miles from the towns" se lê como a distância até elas, isto é, até a mais próxima. | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer (medição esc-09; local: geo/medidas-saida.txt); https://www.usgs.gov/tools/geographic-names-information-system-gnis (local: out/los-angeles/_media/geo/lugares-gnis-nrhp.json) |
| R2-04b | drew a strip half a mile wide to touch them | CONFIRMADA | Largura mediana de 0,54 mi (condado) e 0,55 mi (folha de Hamlin). A descrição legal segue "the boundary line of said City of San Pedro" e depois a de Wilmington (LA0007, doc-10): a faixa encosta nas duas. É o mesmo conteúdo da F152 de antes ("to touch the two towns around it"). | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 |
| R2-04c | then voted itself onto the coast | CONFIRMADA | Votações de 04/08/1909 (Wilmington, 107 a 61; Los Angeles) e de 12/08/1909 (San Pedro, 726 a 227). A consolidação entra em vigor em 28/08/1909, e é a primeira costa própria (frases de p6, CONFIRMADAS na rodada final). | (as URLs das linhas de p6 em fatos-final.laudo.md: Times de 1909, em experiencia/) |
| R2-05 | On November 8, 1886, Colonel Mendell signed it in San Francisco. | CONFIRMADA | O "it" retoma "the letter" (N06, "In between came the letter."). O cabeçalho diz "United States Engineer Office, San Francisco, Cal., November 8, 1886", e o documento é assinado por Mendell, coronel (N07 da rodada final). O dossiê o chama de "a carta de Mendell" (pp. 2122-2123), e ele tem forma de carta ao Chefe de Engenheiros: "letter" é fiel, como "report" era. | https://www.govinfo.gov/content/pkg/SERIALSET-02631_00_00-002-0001-0002/pdf/SERIALSET-02631_00_00-002-0001-0002.pdf (local: documento/arce1888-pp2110-2128.txt, pp. 2122-2123) |
| R2-06a | On today's outline, the city has grown around both ends | CONFIRMADA (nas DUAS pontas; medido nesta rodada) | Pelo esc-09, hoje o trecho fino corre "entre o corpo largo do norte (33,9232 N) e o de Harbor City e Wilmington (33,7976 N)"; em 1906, corria da ponta sul (33,7441 N) ao bloco largo (33,9600 N). Varri, por latitude, a largura leste-oeste de Los Angeles no intervalo que contém o meio da faixa, nos contornos de Hamlin (1906 e 1909) e do TIGER 2025 (hoje). PONTA NORTE, de 33,925 a 33,955 N: 0,55 mi em 1906 e 1909, de 2,0 a 3,6 mi hoje. PONTA SUL, de 33,760 a 33,795 N: de 0,58 a 0,71 mi em 1906, de 2,1 a 5,4 mi em 1909 (a consolidação de Wilmington) e de 3,4 a 4,9 mi hoje; de 33,745 a 33,755 N, de 0,3 a 0,6 mi em 1906 e 1909 (o polígono de 1909 não tem San Pedro, cuja divisa a folha deixa aberta) e de 3,5 a 4,3 mi hoje. A CONTA: a ponta norte recuou 0,0368 grau (cerca de 2,5 mi), e a sul, 0,0535 grau (cerca de 3,7 mi). Somam 6,2 mi, que é 14,88 menos 8,66. Toda a diferença vem das pontas que engordaram, e nada dela vem de a faixa ter encolhido: no meio (33,80 a 33,92 N), a faixa tem hoje de 0,49 a 0,57 mi, como em 1906. A frase não data o crescimento, e não precisa: no sul ele começa com a consolidação de 1909, e no norte é posterior a 1909. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (TIGER 2025 Places, GEOID 0644000; local: out/los-angeles/_media/geo/la-hoje-tiger.json); https://www.loc.gov/item/2006627663/ (Hamlin 1916; local: _media/geo/la-1906-hamlin.json, la-1909-hamlin.json, faixa-1906-hamlin.json); https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer (esc-09) |
| R2-06b | and about nine miles of it still run thin | CONFIRMADA | 8,66 mi de norte a sul (33,7976 a 33,9232 N), no condado e no TIGER, com as mesmas latitudes (pauta-geo.md). A largura inscrita de hoje tem mediana de 0,54 mi (mínima de 0,44 a 0,45; máxima de 0,63 a 0,64). O "still" se sustenta: no meio, a largura é a de 1906. Volátil (§6). | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html; https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer |
| R2-06c | between other cities and county land | CONFIRMADA | esc-09 (sin-03): dos 14 pontos de amostra, 8 caem em cidades e 6 em terra do condado; nenhum cai em Long Beach. Na minha amostra, a 150 m de cada borda entre 33,80 e 33,92 N, há a oeste Lomita, Torrance e Gardena, e a leste Carson e terra não incorporada. Nenhum ponto cai em Los Angeles. As duas peças de LA de hoje perto do degrau, a Dominguez Addition (1943) e a Norman Addition (1952), não encostam no trecho fino: uma tira do condado separa uma, e um pedaço de Gardena, a outra (num-32). É amostra, não perímetro. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (local: _media/geo/vizinhos-faixa-tiger.json); https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer |
| R2-07a | (proposta) Now measure it on the city's own annexation map | CONFIRMADA | O título do mapa é "Map Showing Territory Annexed to the City of Los Angeles, California", com o carimbo "Homer Hamlin · City Engineer · 1916": é o mapa do engenheiro da cidade, publicado pela cidade (pauta-geo.json, licença). Lido nesta rodada na cópia da LoC, out/los-angeles/_tmp/geo-fontes/hamlin1916/hamlin-1916-LOC-2006627663.jpg. | https://www.loc.gov/item/2006627663/ |
| R2-07b | (proposta) … in 1916 | CONFIRMADA | O carimbo diz "1916", e os metadados do Commons e da LoC dão DateTimeOriginal 1916. A última linha do quadro "History" é de June 14, 1916 (Westgate e Occidental). | https://www.loc.gov/item/2006627663/ (local: out/los-angeles/_tmp/licencas/commons-hamlin-1916-extmetadata.json) |
| R2-07c | (proposta) … drawn by its engineer | DIVERGE (periférico; achado 1) | O pé do próprio mapa diz: "Compiled under the direction of J.R. Prince, Chief Draftsman." Hamlin está no carimbo como City Engineer, o titular do escritório que publica, e o Commons e a LoC o catalogam como "Artist: Hamlin, Homer". O mapa não diz que Hamlin o desenhou, e diz quem dirigiu a compilação. | https://www.loc.gov/item/2006627663/ |
| P5-1 | The whole annexation was more than eighteen square miles. | CONFIRMADA (no mapa de Hamlin) | O quadro "History" do próprio mapa diz: "Dec. 26, 1906 · Shoestring · Annexation · 11931 [acres] · 18.64 [sq. mi.]". O polígono digitalizado dá 18,84 mi² (pauta-geo.md), e a minha varredura, 18,85. Obs.: o pedido falava em "about eighteen and a half square miles", mas o texto diz "more than eighteen", e é o que se confere. "More than eighteen" fecha com as duas medidas; "eighteen and a half" bateria com o quadro (18,64) e ficaria no limite com o polígono (18,84). | https://www.loc.gov/item/2006627663/ |
| P5-2 | But the thin part is less than half of that; | CONFIRMADA (com margem menor) | No polígono de Hamlin, cortado na latitude do dossiê (33,9600 N), a parte fina tem 8,94 mi² e o bloco do norte, 9,91 mi², num total de 18,85: 47,4 %. No condado, 8,63 / 18,64 = 46 %. Continua menos da metade nas duas medidas. | https://www.loc.gov/item/2006627663/ (local: _media/geo/faixa-1906-hamlin.json) |
| P5-3 | the rest is a wide block up north. | CONFIRMADA | No polígono de Hamlin, ao norte de 33,96 N, o bloco tem 3,53 mi de leste a oeste (de 33,965 a 33,985 N) e 1,85 mi mais acima. No mapa, é onde fica o rótulo "Shoestring Addition", entre Florence e Manchester. | https://www.loc.gov/item/2006627663/ |
| P5-4 | The thin part is about half a mile wide. | CONFIRMADA | A largura inscrita mediana é 0,55 mi na folha de Hamlin (0,54 no condado). Na varredura leste-oeste, fora do degrau perto de Gardena, vai de 0,53 a 0,60. | https://www.loc.gov/item/2006627663/ |
| P5-5 | On the outline of 1906, it runs about fifteen miles from north to south | CONFIRMADA | 14,84 mi (33,7447 a 33,9600 N) pela folha de Hamlin (pauta-geo.md), 14,86 pela minha varredura e 14,88 no condado. A incerteza da georreferência ao sul de 33,86 N (cerca de ±100 m) não chega à casa da milha. A oração "all of it across county land: …" não depende do mapa e mantém o veredito da rodada final. | https://www.loc.gov/item/2006627663/ |

**Resultado: CHECADO POR INTEIRO.**
- As 6 trocas aplicadas: as 10 afirmações saíram CONFIRMADA.
- A 7ª troca, ainda não aplicada: 7 de 8 saíram CONFIRMADA, e 1 saiu DIVERGE (R2-07c).
- Nenhum NÃO ACHEI e nenhuma REFUTADA.

## 3 · O B1 da rodada final e a aritmética interna das 19 milhas

- **O B1 está resolvido.** A rodada final achou o porto de águas profundas "more than twenty miles from the Plaza" (N20) e "nineteen miles from that harbor" (F152) no mesmo texto. R2-03 tirou a distância de N20, e R2-04 mede as 19 milhas até "the harbor towns", não até "that harbor".
- **Todas as 19 milhas do texto medem a mesma coisa**, da Plaza a Wilmington e à sua água: "Wilmington … is about nineteen" (p1); "the water it used was nineteen miles away", o estuário de Wilmington (p1); "Los Angeles, nineteen miles away" (F087, p4); e R2-04 (p7). Nenhuma afirmação de distância contradiz outra.
- **A régua na tela.** A de R2-04 vai da Plaza a Wilmington (19,1 mi), nunca a San Pedro (21,8 a 22,4) nem a Point Fermin (24,4). A régua até Point Fermin fica no mapa de p3, sem número na voz (pelo comentário de aplicar-r2.mjs). Se ela levar número na tela, é "MORE THAN 20 MILES" ou a medida, nunca 19.

## 4 · Os achados acionáveis

1. **[LEVE · R2-07c · DIVERGE periférico, na proposta ainda não aplicada]** "Now measure it on the city's own annexation map, drawn by its engineer in 1916."
   → **O que a fonte diz:** o carimbo traz "Homer Hamlin · City Engineer · 1916", e o pé, "Compiled under the direction of J.R. Prince, Chief Draftsman." Quem compilou foi outro homem, e o mapa o nomeia.
   → **CONSERTO**, no lugar de "Now measure it on the county's official map.": "Now measure it on the city's own annexation map, from 1916." Se o Claude central quiser o cargo: "Now measure it on the city's own annexation map, issued by its city engineer in 1916." O carimbo sustenta "issued by", não "drawn by". Nas duas, o "measure it" fica certo: a área (18,64 mi²) está impressa no quadro do mapa, e as extensões são medidas nossas sobre ele.
   → **Junto, no roteiro-editor.md:** a fonte de P5-1 a P5-5 passa a ser o mapa de Hamlin (LoC 2006627663), com as medidas da pauta-geo.md (14,84 mi; 0,55 mi; 18,64 mi² do quadro). O "Cuidado" do dossiê ("dizer 'measured on the county's official map'") deixa de valer para esta frase, e a camada do condado fica como conferência.
   → **RAIZ: PONTUAL.** O verbo de autoria foi além do carimbo, e só o pé do mapa mostra isso.
2. **[nota, sem troca · R2-04a]** "nineteen miles from the harbor towns" se sustenta lido até a mais próxima delas, Wilmington. Até San Pedro são de 21,8 a 22,4 mi. Se o Claude central quiser a frase imune a essa leitura, a redação que o dossiê sustenta é: "And a city nineteen miles from Wilmington drew a strip half a mile wide to touch it and San Pedro, then voted itself onto the coast." (+3 palavras). Não é obrigatória: o texto já fixou as 19 milhas em Wilmington em p1.

**Nota lateral, fora da lista (frase sem troca):** "The city covers about 469 square miles" (p7) é o número oficial do condado (OF_AREA_SM, 468,85). O contorno de hoje na tela será o do TIGER, que dá 470,52 mi² de terra mais 31,49 de água. A frase continua certa como número oficial. Se a tela puser uma área ao lado do contorno do TIGER, ela é "ABOUT 469 SQ MI", com a fonte oficial, e não uma área medida no TIGER.

## 5 · A lista de nomes

| quem o texto não nomeia | quem é | credencial | onde |
|---|---|---|---|
| "its engineer" (R2-07) | Homer Hamlin | City Engineer de Los Angeles, no carimbo do mapa de 1916 | https://www.loc.gov/item/2006627663/ |
| quem compilou o mapa (R2-07) | J. R. Prince | "Chief Draftsman", no pé do mapa: "Compiled under the direction of J.R. Prince, Chief Draftsman." | https://www.loc.gov/item/2006627663/ |

## 6 · Voláteis desta rodada

R2-06b e R2-06c (os "about nine miles" e os vizinhos) dependem do contorno de hoje:
- mudam com uma anexação de Los Angeles junto da faixa (a ponta engorda e o trecho fino encurta) ou com a incorporação de terra do condado como cidade;
- deixam de valer se uma anexação cobrir um lado ao longo da faixa;
- a data-base é o TIGER 2025 e a camada do condado consultada em 07/10/2026. Reconferir na véspera de publicar.

## 7 · Os 2 padrões mais vistos

1. **A troca de fonte arrasta a moldura da frase.** Trocar a camada do condado pelo mapa de Hamlin pediu um verbo de autoria novo, e o verbo foi além do documento. A moldura de fonte ("county's official map", "city's own map, drawn by…") é afirmação, e se confere no próprio documento, inteiro, até o pé.
2. **A causa geométrica se mede, não se infere.** "Grown around both ends" só se sustentou com a largura medida por latitude nos três contornos: o dossiê dava as latitudes, e não o que engordou a ponta norte.

## 8 · DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Se o canal aceita mapa histórico digitalizado (Hamlin, 1916, com ±50 a ±100 m) como geometria de tela (pauta-geo.md, "O que ainda pediria a decisão do Lucas", item 1). A 7ª troca depende disso. Se ele recusar, a voz volta ao condado, e a licença da camada do condado continua em aberto.

VEREDITO DA LENTE: PASS para a revisão julgada (99d86455e8ce). As 6 trocas aplicadas não têm REFUTADA nem DIVERGE, e o DIVERGE periférico da rodada final (B1) caiu. A 7ª troca, como foi proposta, entraria com um DIVERGE periférico (RESSALVA). Com o conserto do achado 1 ("…the city's own annexation map, from 1916."), o texto continua PASS.

NOTA: 9.6/10

VEREDITO: PASS
