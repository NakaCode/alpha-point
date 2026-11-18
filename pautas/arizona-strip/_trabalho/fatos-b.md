# Vídeo 8 (`arizona-strip`): a base de fatos, leitor B (o hoje e as medidas)

Lido em 18/11/2026, entre ~03:50 e ~05:40 pelo relógio da máquina. Escopo: o cânion e as pontes, as milhas de estrada, o Censo 2020, o relógio
(Colorado City × Hildale), a vida que mora em Utah e os voláteis. O leitor A (a história e as divisas) é de outro agente.

Convenções: trecho literal em inglês (até 25 palavras) entre aspas; **[S]** = o dado só aparece em resumo de busca (WebSearch), nunca lido na origem
(a Sala relê antes de ir à fala ou à tela); nenhum WebFetch foi usado, tudo o que está entre aspas foi baixado com `curl` e procurado no arquivo.
Os arquivos baixados estão em `midia/arizona-strip/fontes/b/` (fora do git); os scripts, em `pautas/arizona-strip/_trabalho/scripts/b_*.py`.
User-Agent do canal, um pedido por vez. Cópia arquivada (web.archive.org) não foi usada.

## Resumo dos vereditos

| # | Afirmação | Veredito |
|---|---|---|
| 1a | As bordas do cânion ficam a 10 mi (média); de carro, South Rim Village → North Rim Village, ~212 mi, ~4 h 30 | **CONFIRMADO** (NPS, lida hoje) |
| 1b | O cânion tem 278 milhas de rio | **CONFIRMADO** (NPS); o eixo do rio no NHD reproduz: 277–278 mi abaixo de Lees Ferry caem em Pearce Ferry/Grand Wash |
| 1c | "Seven land crossings … for 750 miles" | **CONFIRMADO** como frase da NPS; a NPS **não lista** as sete, e conta as duas Navajo Bridges como uma |
| 1d | Pontes de estrada entre a Glen Canyon Dam e a Hoover Dam | **CONFIRMADO, medido**: US 89 (Glen Canyon Bridge, 1959), US 89A (Navajo Bridge, 1929 e 1995) e, na Hoover Dam, a crista da barragem até out/2010 e a ponte de contorno (2010) |
| 1e | Rio sem estrada que o cruze, da Navajo Bridge à Hoover Dam | **MEDIDO: 345,9 mi (556,7 km)**, método abaixo |
| 2a | Colorado City → Kingman, a rota mais rápida, ~261 mi, ~160 em Utah e Nevada | **EM PARTE**: por marcos de milha oficiais (HPMS 2025), **266 mi**, dos quais **166 (62 %) em Utah e Nevada**. O OSRM dá 260,6 (a diferença, 2 %, é de atalho por ruas de Las Vegas, hipótese). "Mais de 260" e "mais de 160" valem |
| 2b | Só pelo Arizona, ~375 mi | **CONFIRMADO** (≈ 376, por marcos HPMS e pernas da NPS) |
| 2c | North Rim → South Rim, 212 mi | **CONFIRMADO** (NPS, página do North Rim, atualizada 19/10/2026) |
| 3 | 9.955 moradores, 7.851 mi² de terra, mais que Nova Jersey | **CONFIRMADO** (TIGERweb relido hoje); o excesso sobre NJ é 6,75 %, não 6,7 %; e o limite dos dois CCDs **segue o rio** (≤ 234 m, medido) |
| 4 | O Arizona não adota horário de verão; Utah adota; Colorado City × Hildale | **CONFIRMADO** (lei do AZ, 49 CFR 71.2, NIST): **238 dias por ano** (34 semanas, 7,8 meses) de uma hora de diferença |
| 4b | Alguma parte da Strip segue a hora de Utah na prática | **NÃO ACHADO** em fonte oficial |
| 5 | BLM em St. George (F11) | **CONFIRMADO** (relido hoje); 3 monumentos do Arizona atendidos de Utah |
| 5b | Hospital/ambulância em Utah | **CONFIRMADO** (jul/2025): o Kane County Hospital (Kanab, UT) atendeu Fredonia por 40+ anos até o Arizona negar o certificado; o certificado saiu depois (data NÃO CONFERIDA) |
| 5c | 911 e correio passam por Utah | **NÃO CONFERIDO** (o site do condado recusou) |
| 6a | North Rim, hoje | **CONFIRMADO** (NPS, 16/11/2026): "limited fall day-use", sem serviços, aberta até 30/11 ou a 1ª nevasca; lodge destruído em 13/07/2025 |
| 6b | Enchente de 29/08/2026 | **CONFIRMADO** (NPS 30/08 e 03/09; USGS: Bright Angel Creek 13 → 15.900 pés³/s) |
| 6c | Enchente de 22/10/2026 (nota da Sala) | **EM PARTE**: o USGS mostra a cheia do Little Colorado e do Moenkopi; o "51.300 pés³/s" em Phantom Ranch **NÃO CONFERE** (máximo 30.100, estimado) |
| 6d | Desvio Zion–Mt. Carmel por Colorado City | **CONFIRMADO** (NPS + UDOT): veículos grandes, desde 07/06/2026 |
| 6e | Monumentos em notícia quente | **EM PARTE**: Baaj Nwaavjo de pé, sem ato de redução achado; Grand Staircase-Escalante (Utah) cortado em 13/07/2026 |
| 6f | Estradas US 89 (Cameron), US 89A, Navajo Bridge, AZ 67 | **NÃO CONFERIDO** (azdot.gov recusou) |

## O que ficou NÃO CONFERIDO (para a Sala ler no navegador do app)

1. **Estado das estradas hoje** (US 89 em Cameron, US 89A, Navajo Bridge, AZ 67, AZ 389): o azdot.gov respondeu 403 com desafio da Cloudflare (nem o `robots.txt`
   saiu). Ler em https://az511.gov (ou o QuickMaps da ADOT) e em https://azdot.gov/adot-blog/storied-history-glen-canyon-dam-bridge (história da ponte).
   Também o relato de um fechamento da US 89A a oeste de Marble Canyon por enchente (sem data, visto só em busca, [S]).
2. **A data exata da abertura da ponte de contorno da Hoover Dam** (19/10/2010, pela busca [S]): highways.dot.gov (403), fhwa.dot.gov/publications/publicroads/11marapr/01.cfm
   (403) e dot.nv.gov (403). Lida na origem: só "until October 2010" (FHWA By Day).
3. **911 e correio de Colorado City**: https://www.mohave.gov/departments/community-services/documents/colorado-city-area-resource-emergency-service-providers/ (403) e
   https://tocc.us/?p=372 (a polícia da cidade, 403). cedarcityutah.com (429).
4. **A data do anúncio do certificado do Kane County Hospital** (https://kchosp.net/announcements/2026/kane-county-hospital-receives-certificate-of-necessity-for-arizona/):
   a página não traz data; a busca [S] diz 05/01/2026.
5. **Se as Cape Royal Road e Point Imperial Road reabriram em 03/11/2026** (a NPS as fechou de 15/10 a 03/11 "para reparo"; a página de 16/11 só diz que o North Rim está aberto).
6. **As duas páginas da NPS se contradizem** sobre a South Kaibab abaixo do Tipoff: a "Status of the North Rim" (16/11) a lista como fechada; a "Key Hiking Messages" (sem data) a
   lista como aberta até a Black Bridge. Ver o navegador do app: https://www.nps.gov/grca/northrimstatus.htm e https://www.nps.gov/grca/planyourvisit/key-messages.htm.
7. **A restrição de veículos grandes na Zion–Mt. Carmel está em vigor hoje?** A NPS diz que começa em 07/06/2026; o texto da UDOT ainda fala em "until the new rules take effect on June 7"
   (não foi atualizado). Um fechamento por queda de pedras em 30/09/2026 (só secundária, [S]) também não foi lido na origem.
8. **A cheia de 22/10/2026 na origem do NWS** (os avisos de Flagstaff): só vi espelhos (defconlevel.com, govonestop.com) em busca [S]. Em 18/11 às 00:15 (MST) a API de alertas do NWS
   não tinha alerta ativo para Coconino, Mohave nem Navajo (lida). E o **"51.300 pés³/s"**: não existe na série do USGS (ver 6c); se vier de outra fonte (a régua de cota?), ler o NWIS no navegador.
9. **Pinyon Plain e Arizona 1** (urânio): só resumos [S] (KJZZ e KNAU de 07–09/07/2026 sobre o limite de arsênico; o aviso de processo contra a BLM, num site de militância sem data).
10. **A Proclamação 11043 (Bears Ears)**: só pelo resumo [S] (a 11044, Grand Staircase, foi lida no PDF do govinfo; o federalregister.gov deu captcha).
11. **A lista das "sete travessias"** da NPS: a NPS não a traz; contar no mapa.
12. **Utah e o fim das trocas de relógio** (o estatuto contingente 63G-1-901; o projeto H.B. 120 de 2025): só resumo [S]. Não afirmar que Utah vai parar de mudar o relógio.
13. **Hospital, aeroporto e comércio "mais perto de cada cidade da Strip"** com fonte oficial: só o BLM (aeroporto de St. George e escritório) e a NPS (hospedagem em Fredonia e Kanab) saíram. O resto, fora.

## Os 5 fatos mais fortes para o vídeo

1. **10 milhas contra 212.** NPS: "The average distance across the canyon is only 10 miles", e "the drive between the park's South Rim Village and the North Rim Village is about 212 miles".
2. **346 milhas de rio sem uma estrada que o cruze** (da Navajo Bridge à Hoover Dam; medida nossa, no NHD do USGS e nas estradas do Census). E a NPS: a Navajo Bridge é "one of only seven land crossings of the Colorado River for 750 miles".
3. **A medida da estrada, refeita por marcos oficiais**: Colorado City → Kingman = **266 mi pelas rodovias numeradas, 166 (62 %) em Utah e Nevada**; só pelo Arizona, **~376 mi**. A frase do cético ("261 … ~160 … 375") fica de pé como "mais de 260 … mais de 160 … cerca de 375".
4. **O relógio**: Colorado City fica uma hora atrás de Hildale por **238 dias por ano** (34 semanas). E, na Navajo Bridge, o limite da reserva Navajo (que adota o horário de verão) está no rio.
5. **A vida da Strip mora em Utah**: o escritório do BLM dos três monumentos do Arizona fica em St. George; a ambulância de Fredonia foi do hospital de Kanab (Utah) por mais de 40 anos, até o Arizona cortá-la em jul/2025.
   (Reserva: o hoje, "North Rim open only for day use, no lodge", e a enchente de 29/08/2026, com o pico de 15.900 pés³/s no Bright Angel Creek.)

---

## 1. O cânion e as pontes

### 1.1 As medidas da NPS (F1, F2, F3 do cético, relidas hoje)

| Fato | Veredito | Trecho literal | Fonte (lida em 18/11/2026) |
|---|---|---|---|
| 10 mi de borda a borda (média); 212 mi de carro, ~4 h 30 | **CONFIRMADO** | "The average distance across the canyon is only 10 miles" · "the drive between the park's South Rim Village and the North Rim Village is about 212 miles" · "takes about 4 1/2 hours to drive" | https://www.nps.gov/grca/planyourvisit/directions.htm (atualizada 13/12/2025) |
| O caminho dos 212 mi | **CONFIRMADO** | "From South Rim, Grand Canyon, AZ - 212 miles / 341 kilometers Take Highway 64 east to Cameron, AZ." Depois: US 89 até Bitter Springs, US 89A a oeste até Jacob Lake, AZ 67 ao sul | https://www.nps.gov/grca/planyourvisit/directions_n_rim.htm (atualizada 19/10/2026). O caminho passa pela Navajo Bridge |
| 278 milhas de rio; largura mínima 600 ft, média 10 mi, máxima 18 mi | **CONFIRMADO** | "Length: 278 river miles (447 km)" · "Minimum at Marble Canyon, 600 feet (180 m)" | https://www.nps.gov/grca/learn/management/statistics.htm (atualizada 28/07/2026). 278 × 1,609344 = 447,4 km |
| "Seven land crossings … for 750 miles" | **CONFIRMADO** (a frase) | "represent one of only seven land crossings of the Colorado River for 750 miles (1207 km)" | https://www.nps.gov/glca/learn/historyculture/navajobridge.htm (atualizada 03/02/2021). A NPS não lista as sete e fala das **duas** pontes (a de 1929 e a de 1995) como **uma** travessia |
| Navajo Bridge: 1929 e 1995 | **CONFIRMADO** | "on January 12, 1929, the bridge was opened to traffic" · "On May 2, 1995, two years after construction began traffic was diverted onto the new Navajo Bridge." A dedicação da nova foi em 14/09/1995 | mesma página da NPS |
| O naufrágio da balsa e a volta de 800 milhas | **CONFIRMADO** | "on June 7, 1928, the ferry sank in an accident which killed three men" · "People had to travel 800 miles (1287km) around the canyon to reach the other side of the river." | mesma página |
| Lees Ferry, antes: o rio no começo de tudo | **CONFIRMADO** | "In the 1870s, pioneers from Utah began to expand their settlements into northern Arizona." · "Nearly 600 miles (965 km) of deep canyons along the Colorado River stood in their way." A balsa é de 1873 (John D. Lee) | mesma página |

### 1.2 As pontes de estrada entre a barragem Glen Canyon e a Hoover Dam

| Travessia | Fato | Trecho literal | Fonte |
|---|---|---|---|
| **Glen Canyon Bridge** (US 89, Page) | Concluída em janeiro de 1959; arco de aço, tabuleiro de 1.271 ft, 700 ft acima do rio; construída para os caminhões da obra; "later transferred to the state of Arizona" | "Construction of the 1,271 foot-long steel-arch bridge 700 feet above the river, was completed in January 1959" · "reducing a 200-mile trip to cross the river to less than a quarter mile" | https://www.usbr.gov/uc/rm/crsp/gc/ (Reclamation, lida 18/11/2026). A medida nossa: a US 89 cruza o eixo do rio a 0,06 km da barragem |
| **Navajo Bridge** (US 89A, Marble Canyon) | A de 1929 hoje só leva pedestres (legenda da NPS: "the historic one on the left, which is now a pedestrian bridge"); a de 1995 leva a US 89A. Medida nossa: o cruzamento fica a 7,0 km (4,4 mi) abaixo de Lees Ferry; a NPS diz que o local foi escolhido "5 miles (8km) downriver" | (ver 1.1) | NPS, Navajo Bridge |
| **Hoover Dam, a crista** | A US 93 passava por cima da barragem até out/2010 | "Heavily travelled U.S. 93 ran along the dam's crest until October 2010, when the Hoover Dam Bypass opened." | https://www.fhwa.dot.gov/byday/fhbd0301.htm (FHWA, "FHWA By Day", 1º de março; lida 18/11/2026). NPS: "traffic on old U.S. 93 coursed right over its top" (https://www.nps.gov/articles/nevada-and-arizona-hoover-dam.htm, atualizada 07/11/2018) |
| **A ponte de contorno da Hoover Dam** (Mike O'Callaghan–Pat Tillman, 2010) | Aberta em outubro de 2010; ~900 ft acima do rio, logo a jusante da barragem. A data de 19/10/2010 é **[S]** (NÃO CONFERIDA, ver a lista) | "towering 900 feet above the Colorado River's Black Canyon, just south of Hoover Dam" (NPS, texto escrito pouco depois da abertura) | NPS acima. Na base HPMS, a I-11/US 93 cruza a linha de estado em (36,0126 N, 114,7415 O) |

**Entre as duas barragens não há outra ponte de estrada.** Método e prova (script `b_rio_medir.py`, `b_rio_estradas.py`):
- o eixo do rio vem do NHD (USGS, The National Map, camada "Flowline - Large Scale", baixado em 18/11/2026): os trechos "Colorado River" mais os "caminhos artificiais"
  (`fcode` 55800) que o NHD põe dentro dos reservatórios e rios largos, costurados em um grafo dirigido (sentido do fluxo), e o **caminho mais curto** da Glen Canyon Dam
  (-111,484; 36,937) à Hoover Dam (-114,738; 36,016): **589,4 km = 366,2 mi**, 4.359 vértices;
- as estradas vêm do TIGERweb do Census (camadas "Primary Roads", "Secondary Roads" e "Local Roads"): foram pedidas todas as vias a 500 m do eixo, e contado como **cruzamento**
  só o que **intersecta de fato** o eixo (interseção de segmentos). Cruzam: **US Hwy 89** (km 0,06, a Glen Canyon Bridge); **US Hwy 89A** e uma via local (km 32,63: a Navajo Bridge nova
  e a velha); uma "Phantom Ranch Village Trl" (km 167, a 87,8 mi abaixo de Lees Ferry: pelo lugar, são as pontes **de pedestres** Black Bridge e Silver Bridge, fechadas pela NPS desde 29/08/2026; é leitura minha do nome e da posição); e uma
  "Kingman Wash Access Rd" (km 589,25), já na Hoover Dam. Nada mais, entre a Navajo Bridge e a barragem;
- **da Navajo Bridge à Hoover Dam: 556,7 km = 345,9 mi.** Também: Lees Ferry → Hoover Dam, 350,3 mi; a barragem Glen Canyon → Lees Ferry, 15,9 mi; a barragem Glen Canyon → a Navajo Bridge, 20,3 mi;
  da milha 278 abaixo de Lees Ferry (onde a NPS fecha o parque) à Hoover Dam, 72,3 mi, todos de lago (Lake Mead);
- **a conferência do método**: pelo mesmo eixo, a Navajo Bridge cai a 4,4 mi de Lees Ferry (a NPS: "5 miles"); as pontes do Phantom Ranch, a 87,8 mi (conferência de memória: 87–88, NÃO CONFERIDO em fonte);
  as milhas 277–278 caem em (36,12 N, 113,93 O), onde acaba o cânion e começa o lago, o que bate com os 278 da NPS. O ponto de 225,9 mi cai em (35,77 N, 113,37 O), onde fica o Diamond Creek (de memória, NÃO CONFERIDO).

Ressalvas para a tela: (1) "sem estrada" vale para ponte de **estrada**; há travessias só de pedestres no Phantom Ranch; (2) a "Hoover Dam" é ela própria a primeira travessia de estrada abaixo da Navajo Bridge;
(3) o eixo dentro do Lake Mead é a linha artificial do NHD, não um canal medido; (4) os 346 mi são **medida nossa**, não vêm de uma fonte; a NPS diz "seven land crossings … for 750 miles" e não explica de onde a conta sai.

---

## 2. As milhas da estrada, sem o servidor de demonstração do OSRM (K7)

**Fonte usada: o HPMS 2025 da FHWA**, a base de rodovias que cada DOT estadual envia ao governo federal, com marcos de milha (`begin_point`, `end_point`) e geometria por seção.
Serviço: https://geo.dot.gov/server/rest/services/Hosted/HPMS_FULL_AZ_2025 (e `_UT_2025`, `_NV_2025`), FeatureServer/0, lido em 18/11/2026. Scripts: `b_hpms.py`, `b_hpms_rota.py`.
O ADOT, o UDOT e o NDOT diretamente não foram usados (azdot.gov recusou); o HPMS é o que eles mesmos enviam.

### 2.1 Colorado City → Kingman, a rota mais rápida do cético, remontada pelos marcos

| Perna | Marcos | Milhas (por geometria das seções) |
|---|---|---|
| AZ 389, do centro de Colorado City à linha de Utah | MP 1,40 → 0 | 1,40 |
| UT 59, da linha do Arizona até Hurricane (UT 9) | MP 0 → 22,261 | 22,25 |
| UT 9, de Hurricane à I-15 (saída 16) | MP 9,782 → 0,148 | 9,61 |
| I-15 em Utah, da saída 16 (MP 15,962) à linha do Arizona | MP 15,962 → 0 | 15,95 |
| I-15 no Arizona (o gargalo do Virgin River), da linha de Utah à de Nevada | 31,147 → 0 menos 1,72 mi que a base do Arizona dá a Utah | 29,39 |
| I-15 em Nevada, da linha do Arizona ao Spaghetti Bowl (I-11) | MP 123,765 → 42,882 | 80,82 |
| I-11 em Nevada, do Spaghetti Bowl à ponte da Hoover Dam | MP 37,258 → 0,209 | 37,04 |
| US 93 no Arizona, da ponte a Kingman (cruzamento com a I-40, MP 72,168) | MP 2,198 → 72,168 | 69,78 |
| **Total** | | **266,2 mi** (+ 0,7 do centro de Colorado City à AZ 389 e + 0,9 de Kingman, em linha reta) |

- **Por estado**: Utah 47,8; Nevada 117,9; Arizona 100,6. **Utah + Nevada = 165,7 mi = 62 %** do caminho.
- A prova de que a soma não depende do jeito de ler: a diferença dos marcos e a soma da geometria de cada perna batem a menos de 0,2 mi em todas (a UT 59, por exemplo, tem 22,261 pelos marcos e 22,247 pela geometria).
  Os marcos de entrada e saída de cada rodovia foram achados pelo vértice mais próximo entre as duas (todas as junções a menos de 0,06 mi, exceto os centros das cidades).
- **O erro corrigido no caminho**: a base do Arizona estende a I-15 por 1,7 mi além da linha de Utah (o último MP 31,147 fica em 37,022 N, e a linha é 37,000). Tirei os 1,7; a I-15 do Arizona tem **29,4 mi**.
- **A variante pela beltway (I-215)**: o caminho por Nevada sobe para 122,6 mi e o total para ~271. O Spaghetti Bowl é o mais curto das rodovias numeradas.
- **Como o OSRM chega a 260,6 (cético)**: os vértices do OSRM saem da I-15 ao norte de Las Vegas e descem em linha reta pela longitude −115,0796 por ~11 mi até a I-11
  (um atalho por ruas da cidade). Isso é **hipótese** minha, não está provado; a diferença para as rodovias numeradas é de 5,7 mi (2 %).
- **Para a tela**: "more than 260 miles" é verdadeiro pelos dois métodos; "about 160 of them in Utah and Nevada" também (159 no OSRM, 166 nas rodovias numeradas); "261" exato só vale com o motor do OSRM.
  Se for ao ar o número exato, que seja "about 265".

### 2.2 Só pelo Arizona (~375 mi do cético)

| Perna | Fonte | Milhas |
|---|---|---|
| AZ 389, do centro de Colorado City ao cruzamento com a US 89A (Fredonia) | HPMS, MP 1,40 → 32,583 | 31,18 |
| US 89A, de Fredonia a Jacob Lake | NPS: "Continue east on US 89a for 30/ miles 48 km. to the junction with Rt 67." | 30 |
| Jacob Lake → Flagstaff (US 89A e US 89, pela Navajo Bridge) | NPS: Flagstaff → North Rim = 207 mi, e Jacob Lake → North Rim = 43 mi; logo 207 − 43 | 164 |
| I-40, do cruzamento com a US 89 em Flagstaff (MP 200,502) a Kingman (MP 49,102) | HPMS | 151,4 (151,15 pela geometria) |
| **Total** | | **≈ 376,6**, + 0,7 e + 0,9 de ponta (o OSRM do cético deu 374,6) |

A conta mistura HPMS e pernas da NPS (o "Flagstaff" da NPS não é necessariamente o cruzamento da US 89 com a I-40: folga de ±3 mi). Para a tela, "about 375" vale.

### 2.3 Um erro na própria página da NPS

A página "How Do I Travel to the North Rim?" diz: "Drive east on Rt 9 for 10 miles/ 16 km to Rt 59. Continue east on Rt 59 for 32 miles/ 51 km." Pelos marcos do HPMS, a UT 9 de Hurricane à I-15 tem **9,6 mi** (bate com os 10 da NPS)
mas a **UT 59 inteira tem 22,3 mi** (da linha do Arizona a Hurricane), **não 32**. A NPS soma 128 + 10 + 32 + 33 + 30 + 43 = 276 (diz "275"); com a UT 59 certa, a conta de Las Vegas ao North Rim cai para ~266.
Não citar o "32 miles" da NPS para a UT 59. O que bate: a AZ 389 (NPS "33 miles"; HPMS 32,6) e a saída 16 da I-15 (HPMS, MP 15,96).

(Outras pernas oficiais úteis: Colorado City → saída 16 da I-15 = 1,40 + 22,25 + 9,61 = 33,3 mi pelas rodovias; o OSRM do cético deu 43,3 mi até o centro de St. George.)

---

## 3. O pedaço do estado (Censo 2020; F4 a F6 do cético)

Lido em 18/11/2026 no TIGERweb (`tigerWMS_Census2020`, camadas 20, 26, 28 e 80; script `b_censo.py`; sem a API do Censo). **O que bate, bate**:

| Dado | Valor relido hoje | Veredito |
|---|---|---|
| Kaibab Plateau CCD (Coconino) | 1.938 moradores; AREALAND 7.228.864.535 m² = **2.791,08 mi²** | **CONFIRMADO** (igual ao do cético) |
| North Mohave CCD (Mohave) | 8.017 moradores; AREALAND 13.105.711.895 m² = **5.060,14 mi²** | **CONFIRMADO** |
| **A Strip (os dois CCDs)** | **9.955 moradores; 7.851,22 mi² de terra** (+ 21,53 mi² de água); 1,27 moradores/mi² | **CONFIRMADO** |
| Arizona | 7.151.502 moradores; 113.653,4 mi² de terra | A Strip tem **6,91 %** da terra e **0,139 %** da gente. (O cético escreveu 113.655,5 mi²: 2 mi² de diferença de conversão) |
| Nova Jersey | 9.288.994 moradores; 7.354,8 mi² (o cético: 7.355,0) | A Strip é **6,75 % maior** que NJ (não 6,7 %): "about 7 percent bigger". NJ tem 933 vezes a gente e densidade de 1.263/mi² |
| Massachusetts | 7.801,0 mi² | a 50 mi² da Strip; não usar (o cético já avisou) |
| Colorado City (AZ) / Hildale (UT) | 2.478 / 1.127 = **3.605**; Centennial Park CDP (AZ) 1.578 | **CONFIRMADO**. Colorado City tem 9,2 mi²; Hildale, 5,6 mi² |
| Outros | Fredonia 1.323; Beaver Dam CDP 1.552; Scenic CDP 1.321; Cane Beds CDP 466; Littlefield CDP 256; Greenehaven CDP 381; Kaibab CDP 140; Moccasin CDP 53 | **CONFIRMADO** |
| Do outro lado da divisa | Kanab (UT) 4.683; Hurricane (UT) 20.036; St. George (UT) 95.342; Kingman (AZ) 32.689; Flagstaff (AZ) 76.831; Page (AZ) 7.440 | **CONFIRMADO** |

**O limite dos dois CCDs segue o rio** (medida nossa, `b_ccd_rio.py`): os 3.778 vértices do eixo do Colorado (NHD) entre Lees Ferry e a milha 278 ficam, até o contorno dos dois CCDs
(a geometria baixada pelo cético, generalizada), a **43 m na mediana e a 234 m no máximo**; 100 % dentro de 500 m. Ou seja, "a Strip do Censo" é o terreno entre o rio e a divisa de Utah.
(Ressalva do cético, que fica: a Strip não é uma unidade do Censo.)

**O trabalho em Utah (F12)**: relido pelo extrato do cético (`fluxos-saida.txt`; o xlsx tem sha256 `1dbf52be…`): de Mohave, 1.092 ± 489 trabalhadores vão ao condado de Washington (UT) e 175 ± 83 ao de Kane;
de Coconino, 416 ± 116 vão a Kane (ACS 2016–2020). Continua sendo número de **condado**, não da Strip.

---

## 4. Uma cidade cortada pela divisa: o relógio de Colorado City × Hildale

| Fato | Veredito | Trecho literal | Fonte (lida em 18/11/2026) |
|---|---|---|---|
| O Arizona rejeitou o horário de verão por lei | **CONFIRMADO** | "The standard time in Arizona shall be the solar time of the one hundred fifth meridian west of Greenwich, commonly known as standard mountain time." · "the state of Arizona elects to reject such time" | A.R.S. § 1-242, https://www.azleg.gov/ars/1/00242.htm. O § 1-242(D) acrescenta que a rejeição "may be changed by future legislative action" |
| A lei federal: o horário de verão vai do 2º domingo de março ao 1º de novembro; o estado pode se isentar | **CONFIRMADO** | "requires that the standard time of each State observing Daylight Saving Time shall be advanced 1 hour" · "beginning at 2 a.m. on the second Sunday in March of each year and ending at 2 a.m. on the first Sunday in November" · "The Act authorizes any State to exempt itself from this requirement." | **49 CFR § 71.2**, edição de 01/10/2025, baixada de https://www.govinfo.gov/content/pkg/CFR-2025-title49-vol1/xml/CFR-2025-title49-vol1-part71.xml (o eCFR bloqueia a API no `robots.txt`; ver a nota ao fim). A parte 71 só define fusos; a exceção do Arizona vem da lei do estado |
| Arizona e Utah estão no fuso das Montanhas; **Nevada, no do Pacífico** | **CONFIRMADO** | § 71.9(b): "Utah-Nevada-Arizona-California. From the northeast corner of the State of Nevada southerly along the Utah-Nevada boundary" (o limite entre os fusos Montanha e Pacífico) | 49 CFR § 71.8 e § 71.9, mesmo arquivo. **Consequência (conta nossa; o NIST lista como exceções ao horário de verão só "Hawaii, American Samoa, Guam, Puerto Rico, the Virgin Islands and most of Arizona", logo Nevada e Utah o adotam)**: no verão, o Arizona (MST, UTC−7) e Nevada (PDT, UTC−7) têm a mesma hora, e Utah (MDT) fica uma hora à frente dos dois; no inverno, Arizona e Utah têm a mesma, e Nevada uma hora atrás |
| Quase todo o Arizona não adota o horário de verão; a Nação Navajo, sim | **CONFIRMADO** | NIST: "In Arizona, the Navajo Indian territories do observe DST." · Navajo Nation (7/03/2026): "While most of Arizona does not observe Daylight Saving Time, the Navajo Nation does" | https://www.nist.gov/pml/time-and-frequency-division/local-time-faqs e https://opvp.navajo-nsn.gov/260307-daylight-savings-times/ |
| Pipe Spring (na Strip) segue o horário do Arizona | **CONFIRMADO** | "Pipe Spring National Monument is on Mountain Standard Time all year." | https://www.nps.gov/pisp/planyourvisit/hours.htm (atualizada 15/11/2024) |

**A conta (`b_horario.py`)**: em 2026 o horário de verão vai de **08/03 a 01/11 = 238 dias = 34 semanas = 7,8 meses = 65 % do ano**; em 2027, de 14/03 a 07/11, também 238 dias.
Nesses 238 dias, Colorado City (AZ, MST) fica **uma hora atrás** de Hildale (UT, MDT), cidades coladas na divisa; nos outros 127 dias, as duas têm a mesma hora. A leitura de que isso "vale para as duas metades da mesma cidade"
é do cético (a divisa passa entre as duas); o texto não precisa dizer "a mesma cidade": "twin towns".

**A Navajo Bridge e o horário (medida nossa, `b_navajo_fuso.py`)**: no TIGERweb 2020 (camada 34, reservas federais), os pontos a 178 m, 356 m, 712 m, 1,3 km e 2,7 km a **oeste** do eixo do rio sob a ponte
estão **fora** de reserva federal; no eixo e a **leste**, todos caem em "Navajo Nation Reservation". O limite da reserva é o rio. Como a Nação Navajo adota o horário de verão e o Arizona em volta não, a conclusão é que,
no verão, **a Navajo Bridge separa duas horas**: a margem leste (Marble Canyon) uma hora à frente da oeste (Lees Ferry). É **inferência** (o limite do Census + a declaração da Nação), a Sala decide se vai à tela.

**"Alguma fonte oficial diz que parte da Strip segue a hora de Utah?" NÃO ACHADO.** Três buscas não trouxeram nada (os resultados são de relógio e de turismo, todos dão MST para Colorado City). Não afirmar.
O estatuto de Utah de horário de verão o ano inteiro (63G-1-901) é contingente a uma mudança federal e o projeto H.B. 120 de 2025 propunha o contrário: **[S]**, NÃO CONFERIDO.

---

## 5. A vida que mora em Utah

| Fato | Veredito | Trecho literal | Fonte |
|---|---|---|---|
| O BLM da Strip fica em St. George | **CONFIRMADO** (F11 do cético, relido) | "The public lands information center and district office are located in St. George, Utah, the largest nearby city." · "4001 East Aviator Drive (just east of the St. George Municipal Airport)" | https://www.blm.gov/office/arizona-strip-district-office (lida 18/11/2026). O mesmo endereço atende o Vermilion Cliffs, o Grand Canyon–Parashant e o Baaj Nwaavjo, todos no Arizona. Telefone 435 (Utah); "more than 2.7 million acres … north of the Grand Canyon and south of the Utah state line" |
| A cidade mais próxima da Strip, a leste e a oeste | **CONFIRMADO** | "The closest town to the east of the district is Page, Arizona, and the closest town to the west is Mesquite, Nevada." | mesma página |
| A ambulância de Fredonia veio de Kanab, Utah | **CONFIRMADO** (jul/2025) | KUTV (03/07/2025): "has answered the call when residents in Fredonia and surrounding parts of northern Arizona dial 911" · Kane County Hospital (02/07/2025): "For 40 years no agency from Arizona has tried to serve Fredonia or surrounding areas." | https://kutv.com/news/utahs-growing-pains/arizona-blocks-cross-border-ambulance-operations-from-nearby-kanab-utah ; https://kanecountyhospitalut.gov/40-years-of-ambulance-service-to-fredonia-and-surrounding-areas-comes-to-a-screeching-halt/ |
| O Arizona negou o certificado, e a ambulância parou | **CONFIRMADO** | KUTV: o Arizona Department of Health Services "denied Kane County's application for a Certificate of Necessity", exigido de todo provedor de ambulância no Arizona. O hospital suspendeu o serviço em 01/07/2025 e o retomou em 04/07 por uma isenção da lei do Arizona (A.R.S. 36-2217) | as duas páginas acima; JEMS/Arizona Daily Sun (TNS): https://www.jems.com/ems-management/legal-issues/az-officials-work-to-address-ems-disruption-caused-by-border-bureaucracy/ |
| Enquanto isso, a ambulância veio de Colorado City | **CONFIRMADO** | "ground ambulance services from Colorado City, located 30 minutes to the west of Fredonia along Arizona State Route 389, will be dispatched for emergencies" (Arizona Daily Sun, jul/2025) | JEMS acima. O hospital: "The only other Northern Arizona ambulance service is in Colorado City" |
| O certificado foi dado depois | **EM PARTE** | "the Arizona Department of Health Services has issued a favorable decision approving our application for a Certificate of Necessity to provide ambulance services in northern Arizona" | página do hospital: https://kchosp.net/announcements/2026/kane-county-hospital-receives-certificate-of-necessity-for-arizona/ (sem data na página; a busca [S] diz 05/01/2026). Fonte do próprio hospital |
| 911 e correio de Colorado City | **NÃO CONFERIDO** | nenhuma fonte oficial lida: mohave.gov e tocc.us recusaram (403) | ver a lista |
| Hospital, aeroporto e comércio mais perto | **EM PARTE** | só o aeroporto de St. George e os serviços em Fredonia e Kanab: NPS (set/2025) "lodging is available outside the park at Kaibab Lodge, Jacob Lake, Marble Canyon, Page, Fredonia, and Kanab, Utah" | https://www.nps.gov/grca/learn/news/north-rim-partial-reopening-oct-2025.htm. NPS, na página do North Rim: "The nearest lodging, food services, and fuel are located 45 miles north of the North Rim at Jacob Lake, AZ." |

---

## 6. O que é atual (os voláteis), lido em 18/11/2026

### 6.1 A North Rim hoje

| Fato | Trecho literal | Fonte (data da página) |
|---|---|---|
| A North Rim está aberta, só de dia, até 30/11 ou a 1ª nevasca | "North Rim — OPEN through Nov. 30, 2026 (or the first major snowstorm of the season)" · "Limited fall day-use operations are in place on the North Rim, between October 15, and November 30, 2026" | https://www.nps.gov/grca/northrimstatus.htm (atualizada **16/11/2026**) e https://www.nps.gov/grca/planyourvisit/directions_n_rim.htm (**19/10/2026**) |
| Sem serviços | "The North Rim Campground, Gas Station, General Store and Backcountry Information Office have CLOSED for the 2026 season." · "DRINKING WATER and FOOD are not available on the North Rim between October 16 and November 30, 2026." | directions_n_rim (19/10/2026) |
| Estradas panorâmicas | fechadas de 15/10 ao nascer do sol de 03/11/2026 "to accommodate critical road repair"; **se reabriram, NÃO CONFERIDO** | directions_n_rim; https://www.nps.gov/grca/planyourvisit/conditions.htm (atualizada 26/10/2026: "North Rim - Limited Fall Day-use Only NO SERVICES … Scenic roads closed for repair through November 3") |
| O inverno | "Between December 1, and May 14, North Rim roads are closed to all vehicles (including snowmobiles)" | directions_n_rim. É a regra das estradas **do parque**; a AZ 67 fora do parque (a ADOT) é NÃO CONFERIDO |
| A volta | "Tentative reopening date: May 15, 2027." (o camping). Os serviços voltam "in future seasons (2027–2028 and beyond)" | northrimstatus (16/11/2026) |
| A trilha | quase todas as trilhas da borda estão fechadas; abertas, só a Bridle Trail do North Kaibab Trailhead ao antigo estacionamento do Lodge e parte da Arizona Trail | northrimstatus |
| O Grand Canyon Lodge | "Aerial reconnaissance confirmed destruction of the Grand Canyon Lodge, the North Rim Visitor Center, and many historic cabins." (13/07/2025). Em 2025 houve "emergency stabilization and selective demolition"; o futuro do Lodge: "a separate, full NEPA process" | northrimstatus: a cronologia do Dragon Bravo (incêndio aceso por raio em 04/07/2025; 500 visitantes evacuados em 10/07; avanço em 11/07) |
| Quando o Dragon Bravo reabriu a AZ 67 | "August 29, 2025 Arizona Department of Transportation reopens Hwy. 67 from Jacob Lake to the Kaibab Lodge." | northrimstatus; e a NPS de 25/09/2025 (reabertura parcial em 01/10/2025, até 14/11/2025): https://www.nps.gov/grca/learn/news/north-rim-partial-reopening-oct-2025.htm |

### 6.2 A enchente de 29/08/2026 na North Kaibab e no Phantom Ranch

- **CONFIRMADO.** NPS, comunicado de 30/08/2026 (https://www.nps.gov/grca/learn/news/significant-flash-flooding-closes-phantom-ranch-and-north-kaibab-trail.htm): "A significant flash-flood event occurred in Bright Angel Canyon and the Phantom Ranch area on August 29, beginning at approximately 2:30 p.m."
  (62 pessoas evacuadas até a manhã de 30/08, sem ferimentos informados); Phantom Ranch, o Bright Angel Campground, a cantina, as cabanas e **toda a North Kaibab Trail** (do trailhead ao Phantom Ranch) fechados; a Black Bridge e a Silver Bridge também;
  "Nearly all footbridges spanning Bright Angel Creek were destroyed, eliminating hiker access across the creek." O rio ficou fechado ao tráfego de barcos (metais e entulho no rio).
- O comunicado de **03/09/2026**: fecha também a South Kaibab abaixo do Tipoff e a Bright Angel abaixo do cruzamento com a Tonto; "There is currently no estimated date for reopening these areas."
- **Medido (USGS, `b_usgs2.py`)**: **Bright Angel Creek near Grand Canyon (09403000)**: a vazão estava em **13 pés³/s** em 28/08 e chegou a **15.900 pés³/s às 15:40 (MST) de 29/08/2026** (dado provisório). Cerca de 1.200 vezes o fluxo de base, em poucas horas.
  O Colorado em Phantom Ranch (09402500), de 28/08 a 02/09, ficou entre 7.500 e 11.100 pés³/s (máximo em 01/09; não conferi o dia 29 hora a hora).
- **Hoje (página "Key Hiking Messages", sem data na página; lida 18/11)**: fechados a North Kaibab inteira, o Phantom Ranch, as duas pontes sobre o rio e "Boat Beach is closed to all activities except emergencies and brief scouting of the new rapid formed at the mouth of Bright Angel Creek." Abertas: a Bright Angel até o River Resthouse, a River Trail e a South Kaibab até a Black Bridge
  (contradição com a página do North Rim, ver a lista, item 6). "There is no estimated reopening."

### 6.3 A enchente de 22/10/2026 (nota da Sala, os vídeos de YouTube)

Lido na origem: o USGS (NWIS, serviço IV, `b_usgs.py` e `b_usgs_picos.py`; dados **provisórios**, 15 em 15 minutos, horário MST), com o histórico de picos anuais (NWIS peak, baixado hoje).

| O que os vídeos dizem | O que o USGS mostra | Veredito |
|---|---|---|
| "A régua do USGS em Phantom Ranch com 51.300 pés³/s em 22/10/2026" | **Colorado River near Grand Canyon (09402500)**: máximo de **30.100 pés³/s** entre 22/10 23:30 e 23/10 00:15 (qualificadores "P, e": provisório e **estimado**); o rio já estava em ~19.900 às 18:00 de 22/10 (a cheia do Moenkopi de 21/10 já vinha chegando) e passou de 20.800 (20:30) a 30.100 em 3 horas. Não há 51.300 na série de 01/10 a 17/11 | **NÃO CONFERE**. Para comparar: os picos anuais do mesmo ponto incluem 46.700 (2012), 40.300 (2018), 43.100 (2023): 30.100 **não** é recorde |
| "O Little Colorado no nível mais alto desde 1993" | **Little Colorado River near Cameron (09402000)**: **18.000 pés³/s às 14:45 de 22/10/2026**. O pico anual de 12/01/1993 foi 18.200; depois dele, nenhum pico anual do arquivo passa de 11.500 (02/09/2002; o arquivo vai até o ano hídrico de 2022) | **CONFIRMADO em parte**: o mais alto desde 1993 no arquivo (e 1993 foi um pouco maior). 2023–2025 não estão no arquivo |
| "O Moenkopi Wash no nível mais alto desde 1993" | **Moenkopi Wash at Moenkopi (09401260)**: **21.400 pés³/s às 12:00 de 22/10/2026** (14.900 em 21/10). O arquivo de picos (1974–2018, 45 anos) tem máximo de 10.100 (30/09/1983) | **MAIS** que os vídeos: é o maior de todo o arquivo da estação (dado provisório) |
| "Uma corredeira nova na foz do Bright Angel Creek" | A NPS fala de "the new rapid formed at the mouth of Bright Angel Creek" (Key Hiking Messages), mas dentro do bloco da enchente de **29/08**; a ligação com outubro não está escrita | **EM PARTE**: a corredeira existe (NPS); a data é a do 29/08 |
| "A cicatriz do Dragon Bravo na North Rim virando enxurrada" em outubro | **Bright Angel Creek (09403000)**, a bacia da North Rim: em 20–25/10/2026 o máximo foi **503 pés³/s** (21/10), 30 vezes menos que o 29/08. A NPS: "Check out the current Dragon Bravo Fire Scar Flash Flood Risk from the National Weather Service" (risco, não evento) | **NÃO CONFERE** para outubro; vale para 29/08 |
| Lees Ferry | **Colorado River at Lees Ferry (09380000)**: máximo de 9.210 pés³/s (01/10) e 6.840 em 17/11 (as águas da barragem Glen Canyon), sem pico em 22/10 | a cheia de outubro veio dos afluentes do leste, não de cima |

NWS: os avisos de cheia de Flagstaff de 22/10 (Moenkopi Wash acima do nível de cheia de 27,0 ft, de Cameron à foz) só apareceram em espelhos [S] (ver a lista). Hoje (18/11, 00:15 MST) não há alerta do NWS ativo para o norte do Arizona (API lida).
**O que dá para afirmar**: "in October, flash floods from the Little Colorado and the Moenkopi Wash pushed the Colorado to about 30,000 cubic feet per second at Phantom Ranch" (**estimado, provisório**). Não dizer 51.300.

### 6.4 O desvio da Zion–Mt. Carmel por Colorado City

- **CONFIRMADO.** NPS Zion, comunicado de 05/01/2026 (atualizado 20/05/2026): as restrições da Zion–Mt. Carmel Highway começam em **07/06/2026**: veículos acima de 35 ft 9 in de comprimento, 7 ft 10 in de largura, 11 ft 4 in de altura ou 50.000 lb não podem usar o trecho entre Canyon Junction e a East Entrance
  (https://www.nps.gov/zion/learn/news/2026-01-05-large-vehicles.htm).
- **UDOT**, "Zion Area Road Restrictions" (https://zionarea.udot.utah.gov/road-restrictions-2/, lida 18/11/2026): "South of Zion National Park, you can take SR-59 east of Hurricane, then continue on Arizona SR-389 and US-89"; "Distance: 80 miles", "~ 1.5 to 2 hours"; "Large vehicles are able to access the Grand Canyon's North Rim Visitor Center and Bryce Canyon."
  O desvio **passa por Hildale e Colorado City** (UT 59 e AZ 389). O texto da UDOT ainda fala em "until the new rules take effect on June 7": a página não foi atualizada depois da data; confirmar se está em vigor hoje (item 7 da lista).
- Medida nossa para o desvio: a UT 59 + a AZ 389 somam 22,3 + 32,6 = 54,8 mi (HPMS) de Hurricane à US 89A.

### 6.5 Os monumentos e o urânio

- **Baaj Nwaavjo I'tah Kukveni (2023)**: de pé. O rastreador do Harvard Environmental & Energy Law Program (atualizado **13/10/2026**), https://eelp.law.harvard.edu/tracker/national-monuments-marine-national-monuments-and-marine-sanctuaries/ (fonte **secundária**, lida):
  "The Ninth Circuit Court of Appeals ruled that the Arizona state legislature, state treasurer, and three local governments lacked standing" (01/04/2026). Não há, nele, ato de redução do Baaj Nwaavjo. A página do BLM da Strip (18/11/2026) não traz notícia de monumento (a mais recente é de 16/11/2026, sobre um gasoduto).
- **Grand Canyon–Parashant (2000)** e o **Vermilion Cliffs**: nada achado. Não há atualização de redução nem de mineração.
- **O vizinho de Utah (relevante como "hoje")**: **Proclamation 11044 de 13/07/2026**, "Modifying the Grand Staircase-Escalante National Monument" (91 FR 45179, 17/07/2026), lida no PDF do govinfo:
  https://www.govinfo.gov/content/pkg/FR-2026-07-17/pdf/2026-14549.pdf. "a smaller and more appropriate reservation of approximately 181,541 acres comprising two units"; as terras excluídas ficam abertas a entrada e a título mineral 60 dias depois
  (~11/09/2026). A 11043 (Bears Ears), pelo rastreador e pelo resumo [S]. O rastreador (13/10/2026): ações judiciais em curso. A Strip e o Parashant **não** estão nessas proclamações.
- **Urânio**: Pinyon Plain (Tusayan, dentro do Baaj Nwaavjo, fora da Strip) e Arizona 1 (Mohave, na Strip): **[S]**, ver a lista, item 9. Não afirmar nada sobre mineração hoje.

### 6.6 As estradas "só pelo Arizona" (US 89 em Cameron, US 89A, Navajo Bridge)

**NÃO CONFERIDO** (azdot.gov recusou). O que dá para dizer com fonte lida: a NPS, na página do North Rim (19/10/2026), manda o visitante da South Rim pelo mesmo caminho (HWY 64 a Cameron, US 89 a Bitter Springs, US 89A a Jacob Lake) e não registra
fechamento; o USGS mostra que o Little Colorado em **Cameron** teve 18.000 pés³/s em 22/10/2026 (o que costuma fechar a ponte da US 89 sobre ele; **não lido**). Ler no navegador: https://az511.gov.

---

## As surpresas (para o roteiro)

1. **Entre a Glen Canyon Dam e a Hoover Dam o rio mede 366 milhas, e só duas estradas o cruzam ao longo de 346 delas** (a Navajo Bridge, a 20 mi da barragem, e a Hoover Dam, no fim). O "mapa" do paradoxo é mais forte com esse número do que com "seven crossings".
2. **A Strip tem três fusos de relógio em volta**: o Arizona (MST), Utah (MDT no verão) e Nevada (no fuso do Pacífico): no verão, Arizona e Nevada têm a mesma hora, e Utah, uma hora à frente dos dois.
3. **O rio é a borda da reserva Navajo na Navajo Bridge**: no verão, atravessar a ponte muda o relógio (inferência).
4. **O Arizona negou o certificado à ambulância de Utah** e o hospital de Kanab suspendeu o serviço a Fredonia em 01/07/2025; a ambulância de Colorado City (a 30 minutos) é que passou a atender; o hospital retomou o serviço em 04/07 por uma isenção da lei.
5. **A enchente do Bright Angel Creek foi 1.200 vezes o fluxo de base em horas** (13 → 15.900 pés³/s), e o Phantom Ranch ainda está fechado. A de outubro veio do outro lado (Little Colorado, Moenkopi) e o "51.300" dos vídeos não aparece no USGS.
6. **O desvio para o RV que não cabe na Zion–Mt. Carmel passa por Colorado City.**

## O que mudou em relação ao laudo do cético

- **A medida da estrada**: 261 → **266** pelas rodovias numeradas (marcos oficiais); "~160 em Utah e Nevada" → **166**. "Mais de 260" e "mais de 160" valem.
- **O excesso sobre Nova Jersey**: 6,7 % → 6,75 % (conversão de área).
- **A Arizona (terra)**: 113.655,5 → 113.653,4 mi² (conversão).
- **O "32 miles" da NPS para a UT 59** é erro (22,3).
- **A North Rim**: já não é a "North Rim depois do incêndio" do começo do ano: é "aberta só de dia, sem serviços, sem o Lodge, até 30/11".

## Notas de método e de conduta

- **Sites que recusaram** (não contornados): azdot.gov (403, desafio Cloudflare), highways.dot.gov (403), www.fhwa.dot.gov/publications/… (403), dot.nv.gov (403), www.mohave.gov (403), tocc.us (403), www.congress.gov (403), federalregister.gov (captcha),
  cedarcityutah.com (429). Para o Federal Register usei o PDF do govinfo (aberto).
- **Uma ressalva de conduta**: o primeiro pedido ao eCFR (`/api/versioner/v1/full/…`) saiu antes de eu ler o `robots.txt` dele, que **desautoriza** esse caminho; recebi só um erro 406 (sem conteúdo). Parei ali e usei o govinfo.
- **APIs usadas**, um pedido por vez, com o User-Agent do canal: NHD (hydro.nationalmap.gov), TIGERweb (tigerweb.geo.census.gov), HPMS (geo.dot.gov), NWIS (waterservices.usgs.gov e nwis.waterdata.usgs.gov, valores provisórios), NWS (api.weather.gov, alertas ativos).
  Nenhuma API do Censo com chave; nenhum OSRM; nenhum navegador; nenhum vidIQ; nenhum gasto de crédito; nenhum commit.
- **Dados do NHD e do HPMS**: do governo dos EUA, domínio público; o crédito de tela é "USGS National Hydrography Dataset" e "FHWA HPMS", se forem à tela.
- Arquivos: `midia/arizona-strip/fontes/b/` (páginas e JSON baixados, saídas dos scripts) e `pautas/arizona-strip/_trabalho/scripts/b_*.py` (`b_texto`, `b_pagina`, `b_pdf`, `b_nhd_baixar*`, `b_rio_medir`, `b_rio_estradas`, `b_rio_checar`,
  `b_censo`, `b_ccd_rio`, `b_horario`, `b_navajo_fuso`, `b_hpms`, `b_hpms_rota`, `b_usgs*`). Os scripts `b_rota_tiger*.py` foram uma tentativa que não funcionou (as camadas de estrada do TIGERweb vêm como linhas por nome de rodovia, não por trecho; não dá para montar grafo) e ficam só como registro.
