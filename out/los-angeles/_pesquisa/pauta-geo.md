# Geometria do vídeo 2 (los-angeles): o caminho sem a camada do condado

Pesquisa-geo, 07/10/2026. Adiantamento pedido pelo Claude central antes do passo `research`. Os arquivos estão em
`out/los-angeles/_media/geo/` (fora do git), e o registro de cada um está em `pauta-geo.json`. A camada de anexações do
condado (a que o dossiê mediu) entrou aqui **só como conferência**: nenhum arquivo entregue vem dela, nem do OpenStreetMap.

## O que foi feito

1. **O contorno de hoje** vem do TIGER/Line 2025 do Census (domínio público). Ele traz a cidade, os cinco vizinhos da faixa,
   o condado (1:500.000), a costa e a água do porto.
2. **Os contornos históricos** vêm de um mapa da época em domínio público. É o *Map showing territory annexed to the City of
   Los Angeles*, de Homer Hamlin, City Engineer, publicado em 1916. A cópia digital é a da Library of Congress, baixada do
   Wikimedia Commons. O mapa desenha cada anexação de 1850 a 1916, com a data, a ordenança e a área em acres, e traz um
   quadro com o histórico.
   - **A georreferência:** um polinômio de 2ª ordem sobre 15 pontos de controle independentes do condado. São 8 cruzamentos
     de rua do TIGER, 6 cantos de township ou de seção do PLSS (BLM) e o farol do quebra-mar, lido na folha do USGS de 1923.
   - **A divisa:** é o traço impresso, lido lado a lado. Cada lado ganha amostras perpendiculares e uma reta ajustada, e o
     vértice sai do cruzamento de dois lados vizinhos.
   - **A união das peças** se fez no raster da própria folha.
   - Os scripts estão em `_pesquisa/` (`hamlin_*.py`). As imagens de conferência estão em `_tmp/hamlin-zoom/`.
3. **A água e as obras antigas** vêm das folhas topográficas históricas do USGS (domínio público), que o próprio USGS
   georreferenciou:
   - San Pedro, 1896: o molhe, Deadman's Island e Rattlesnake Island;
   - Calabasas, 1903: o Long Wharf de Port Los Angeles;
   - Wilmington, 1923: o quebra-mar e o farol.
4. **Os pontos** vêm do GNIS do USGS (San Pedro, Wilmington, Long Beach, Santa Monica) e do NRHP do NPS (a Plaza), os dois
   em domínio público.

## As camadas

| Arquivo (`_media/geo/`) | O que é | Fonte | Licença | Incerteza |
|---|---|---|---|---|
| `la-hoje-tiger` | Los Angeles hoje (1 feição) | TIGER 2025 Places, GEOID 0644000 | domínio público (Census, 17 U.S.C. §105) | a do TIGER |
| `vizinhos-faixa-tiger` | Gardena, Torrance, Carson, Lomita e Long Beach (5) | TIGER 2025 Places | domínio público | a do TIGER |
| `condado-la-cb500k` | condado de Los Angeles (1) | Census CB 2025, 1:500.000 | domínio público | generalizado; só para câmera larga |
| `costa-hoje-tiger` | costa de hoje, recortada (1) | TIGER 2025 Coastline | domínio público | a do TIGER |
| `agua-porto-hoje-tiger` | água do porto hoje (16) | TIGER 2025 Area Water, LA County | domínio público | sem rios nem mar aberto |
| `la-1850-hamlin` | a cidade de 1850 (1) | Hamlin 1916 | domínio público | ver abaixo |
| `la-1899-antes-da-faixa-hamlin` | o contorno de 1899 a 1906, antes da faixa (1) | Hamlin 1916 | domínio público | ver abaixo |
| `la-1906-hamlin` | o contorno de 1906, com a faixa (1) | Hamlin 1916 | domínio público | ver abaixo |
| `faixa-1906-hamlin` | só a Shoestring Addition (1) | Hamlin 1916 | domínio público | ver abaixo |
| `wilmington-1909-hamlin` | Wilmington, consolidada em 1909 (1) | Hamlin 1916 | domínio público | ver abaixo |
| `san-pedro-1909-divisa-hamlin` | a divisa de San Pedro de 1909, **aberta** (1 MultiLineString) | Hamlin 1916 | domínio público | ver abaixo |
| `la-1909-hamlin` | o contorno de 1906 unido a Wilmington, mais a divisa de San Pedro (2) | Hamlin 1916 | domínio público | ver abaixo |
| `molhe-1871-usgs1896` | o molhe entre Rattlesnake Island e Deadman's Island (1) | USGS San Pedro 1896 | domínio público (USGS) | ±11 m de leitura; folha 1:62.500 |
| `quebra-mar-usgs1923` | o quebra-mar, da costa ao farol (1) | USGS Wilmington 1923 | domínio público | ±4 m de leitura; folha 1:24.000 |
| `long-wharf-usgs1903` | o Long Wharf de Port Los Angeles (1) | USGS Calabasas 1903 | domínio público | ±11 m de leitura |
| `lugares-gnis-nrhp` | Plaza, San Pedro, Wilmington, Long Beach e Santa Monica (5) | GNIS e NRHP | domínio público | ponto nominal do lugar |
| `pontos-historicos-usgs` | Deadman's Island, Rattlesnake Island, Port Los Angeles e o farol (4) | USGS 1896, 1903 e 1923 | domínio público | ±11 m de leitura |

**A incerteza dos contornos de Hamlin:**
- o ajuste tem resíduo RMS de 23 m (máximo de 53 m);
- na validação cruzada (deixa um ponto de fora), RMS de 73 m e máximo de 251 m. O máximo é o farol, o único ponto ao sul de
  33,86 N; sem ele, o sul fica em extrapolação;
- o traço da folha tem uns 25 m de largura no terreno, porque a escala é de cerca de 1:85.000;
- conferências independentes:
  - o quadrado de 1850 fica a 45 m (mediana; máximo de 150 m) do polígono do condado;
  - a faixa de 1906 fica a 46 m (mediana) do limite do TIGER de hoje entre 33,870 e 33,920 N, e a 18 m (mediana; p90 de
    51 m) entre 33,800 e 33,855 N;
  - a ponta sul de 1906 cai a ~67 m da latitude do condado;
- **em resumo: ±50 m ao norte de 33,86 N e ~±100 m ao sul, onde só o farol segura o ajuste.** *Corrigido em 07/10/2026: o ~±100 m não valia
  no sudeste (Wilmington leste e Terminal Island), onde o erro chegava a ~0,5 km. Depois da correção do sudeste, ±150 a ±200 m ao sul de
  33,86 N; ver "Correção do sudeste de Hamlin", no fim.*

**O crédito na tela:** nenhuma camada pede. Para a descrição, se o canal quiser citar:
- "Source: U.S. Census Bureau, TIGER/Line Shapefiles 2025";
- "U.S. Geological Survey historical topographic maps";
- "Homer Hamlin, City Engineer, Map showing territory annexed to the City of Los Angeles (1916), Library of Congress".

O Census pede a citação, mas não a exige.

## As medidas, contra o dossiê

| Medida | Esta pesquisa | Quadro de Hamlin (1916) | Condado (dossiê) |
|---|---|---|---|
| Área de 1850 | 27,75 mi² | 28,01 (17.924 ac) | 28,01 |
| Área antes da faixa (1899–1906) | 42,79 | 43,26 | 43,26 |
| Área de 1906 | 61,25 (61,66 antes da correção do sudeste) | 61,90 | 61,90 |
| Shoestring Addition | 18,43 (18,84 antes) | 18,64 (11.931 ac) | 18,64 (18,59 medida) |
| Wilmington, 1909 | 9,76 (10,57 antes) | 9,93 (6.358 ac) | 9,93 |
| 1909 sem San Pedro | 70,99 (72,21 antes) | 71,83 (76,44 com San Pedro) | 76,44 |
| Hoje | 470,52 de terra + 31,49 de água (TIGER) | — | 468,85 (OF_AREA_SM) |
| Trecho fino de 1906, de norte a sul | **14,81 mi** (33,7451 a 33,9600 N; 14,84 antes) | — | 14,88 (33,7441 a 33,9600) |
| Polígono de 1906, de norte a sul | 18,34 mi | — | 18,38 |
| Trecho fino de hoje, de norte a sul | **8,66 mi** (33,7976 a 33,9232 N, TIGER) | — | 8,66 (mesmas latitudes) |
| Largura inscrita de 1906 (mediana) | 0,54 mi (0,55 antes) | — | 0,54 |
| Largura inscrita de hoje (mediana; mínima e máxima) | 0,54 (0,44 e 0,63) | — | 0,54 (0,45 e 0,64) |
| Degrau perto de Gardena, deslocamento para leste | 1,01 (1906; 1,03 antes) e 1,04 (hoje) | — | 1,01 a 1,04 |
| Quebra-mar, da costa ao farol | 2,09 mi | — | 2,11 (livro do porto, 1921) |
| Long Wharf | 0,74 mi | — | "more than three quarters of a mile" (1897) |

As diferenças ficam entre -1,1 % e +1,1 % nos contornos da cidade, e Wilmington fica em +6 %. O sul da folha depende de
extrapolação, e o traço de Wilmington é o de fora. As duas medidas do roteiro ("about fifteen miles" no contorno de 1906 e
"about nine miles" no de hoje) **se sustentam sem a camada do condado**: 14,84 mi pela folha de Hamlin e 8,66 mi pelo
TIGER.

O método das medidas é o do dossiê: o `medir_faixa.py`, com a mesma TM local e a mesma varredura, importado sem mudança.

**Dentro e fora**, todos conferidos:
- a Plaza fica dentro de 1850 e de hoje;
- o ponto de Wilmington do GNIS fica dentro de Wilmington em 1909, fora de LA em 1906 e dentro de LA hoje;
- San Pedro fica dentro de LA hoje;
- Long Beach fica dentro de Long Beach;
- Santa Monica fica fora de LA.

## A água de 1886–1888

**A carta da USC&GS de cerca de 1888 não foi obtida.** O robots.txt da coleção histórica da NOAA
(`historicalcharts.noaa.gov`) diz `Disallow: /` para qualquer robô, e por isso a pesquisa parou ali. O dossiê registra que o
IIIF de Stanford reiniciou a conexão. O caminho que resta é o navegador do app, pelo Claude central.

**O mais perto, em domínio público e já georreferenciado:** as folhas do USGS de 1896, Redondo e San Pedro, levantadas nos
anos 1890. Elas desenham a Wilmington Lagoon, o Bixby Slough, Rattlesnake Island, Deadman's Island, o molhe entre as duas e
Timms Point. A sobreposição da faixa de 1906 (Hamlin) sobre essas folhas está em `_tmp/geo-hist/faixa-1906-sobre-usgs-1896.jpg`
e é a prova a olhar.
- A borda leste da faixa corta o Bixby Slough. Entre ~33,750 e ~33,757 N, ela passa pela margem oeste do baixio da
  Wilmington Lagoon, na hachura azul.
- A ponta sul fica em terra. Antes da correção do sudeste, a ~0,8–0,9 km do azul mais próximo da folha de 1896; **depois dela, a 0,56 km
  (San Pedro 1896) e 0,64 km (Redondo 1896)**, ~0,35–0,40 mi.
- A medida da distância vem de uma classificação de cor (`agua_1896.py`). É indicativa (±150 m) e mistura linha d'água com
  baixio de maré.

**O que isso resolve, sem decidir a frase:**
- **"the same estuary":** as folhas de 1896 põem o estuário onde hoje estão a West Basin e a East Basin do porto (comparar
  com `agua-porto-hoje-tiger`). Se a frase pedir mais que essa comparação, falta a carta de 1888.
- **"a ponta de 1906 até a água da época":** as folhas são dez anos anteriores a 1906, e não de 1906. Elas dão um número de
  1896 (0,9 km da ponta, com a faixa passando sobre o baixio mais ao norte), não um de 1906. O T25 do dossiê continua como
  está até a decisão do Claude central.

## O que não se achou, e os limites

- **O fechamento de San Pedro, em 1909, do lado do mar.** A folha de Hamlin desenha a divisa por terra e até a água, mas não
  a fecha no mar.
  - A divisa vai como linha aberta.
  - O polígono de 1909 é o de 1906 mais Wilmington.
  - A área de 1909 com San Pedro (76,44 mi²) só existe como número, no quadro da folha, que é fonte primária em domínio
    público.
  - Fechar o polígono pediria inventar a linha do mar, e isso não se faz.
- **O molhe de 1871 como foi projetado.** O que existe é o molhe como a folha de 1896 o mostra.
- **O quebra-mar de 1899 a 1912 em construção.** Só o da folha de 1923, já completo.
- **Long Beach e Terminal Island em 1909.** A folha de Hamlin mostra a divisa de San Pedro em Terminal Island, mas não o
  limite de Long Beach.
- **O OpenStreetMap ficou de fora.** O Overpass respondeu 504 na única tentativa, e o quebra-mar veio da folha do USGS.
  Nenhuma camada pede "© OpenStreetMap contributors".
- **Datas para o verificador-de-fatos:** o quadro de Hamlin data a Southern Extension de **1º de junho de 1869**, e o
  condado, de 29/08/1859. Só a data muda; a área é a mesma, 766 acres.

## O que resolve a cena principal sem a camada do condado

**Tudo o que o roteiro mostra de contorno:**
- 1850, em volta da Plaza;
- o contorno antes da faixa ("forty-three square miles, well to the north");
- 1906, com a faixa ("about half a mile wide, for about fifteen miles": 0,55 mi e 14,84 mi);
- 1909, com Wilmington e a divisa de San Pedro;
- hoje (469 mi², o trecho fino de 8,66 mi), com os vizinhos;
- a água e as obras: a costa e o porto de hoje, o molhe, o quebra-mar, o Long Wharf, Deadman's Island e Rattlesnake
  Island.

Tudo em domínio público, sem crédito obrigatório na tela.

## O que ainda pediria a decisão do Lucas

1. **Se o canal aceita mapa histórico digitalizado como geometria de tela.** As fontes aceitas em 27/09 (identidade §6)
   são TIGER, geoBoundaries e as outras de dados. A folha de Hamlin (1916) e as folhas do USGS são domínio público, mas são
   um tipo novo de fonte: um contorno lido num mapa antigo, com ±50 a ±100 m declarados. A licença não é o problema. A pergunta é
   de política do canal.
2. **San Pedro em 1909.** Se a cena precisar de um polígono fechado de 1909, e não da divisa aberta, o único polígono
   fechado é o do condado. Ele também não é o de 1909: tem a área de hoje dentro da anexação, com a faixa de 3 milhas
   náuticas no mar. Usá-lo volta à questão da licença.
3. **A licença do condado, se ela ainda interessar.** Os termos do eGIS do condado, lidos pelo pesquisador em 07/10
   (`midia/los-angeles/fontes/geo/termos-de-uso-egis-lacounty.txt`), dizem: "you are granted a license to copy, publish,
   distribute and/or transmit the Data, to adapt the Data and to exploit the Data for commercial and/or personal use". O
   item do Public Works diz "No copyright and/or trademark licenses have been conferred". As duas leituras se contradizem.
   Com o caminho em domínio público, a camada do condado não é necessária.

Não é do Lucas: a carta de 1888 pelo navegador do app, que é com o Claude central.

## Como refazer

Os comandos rodam de dentro de `out/los-angeles/_pesquisa/`:
- `python hamlin_tracar.py`: lê as divisas;
- `python hamlin_ajuste.py`: mostra o resíduo dos pontos de controle;
- `python hamlin_epocas.py`: monta as épocas;
- `python geo_la_construir.py`: monta tudo em `_tmp/geo-final/`;
- `python agua_1896.py`: mede a faixa contra a água de 1896.

Depois, da raiz do canal, `node out/los-angeles/_pesquisa/geo_la_gravar.mjs` grava pela pré-v1, que escreve o cache, a
`_media/geo/` e a pauta.

As fontes baixadas estão em `out/los-angeles/_tmp/geo-fontes/`, e as licenças lidas, em `_tmp/licencas/`. O sha256 de cada
uma está na pauta, em `sha256_fonte`.

---

# 2ª rodada: as camadas que o espelho pedia (passo `research`, 07/10/2026)

O espelho de 07/10 (`espelho.json` › `_despacho_research.pesquisa_geo`) pedia 9 camadas que o disco não tinha. Saíram 7
arquivos, todos em domínio público (Census, USGS, USACE). **Nenhuma camada vem do OpenStreetMap nem da camada do condado**, e
nenhuma pede crédito na tela. Os scripts são `_pesquisa/geo_la_rodada2.py` (monta em `_tmp/geo-final-2/`, sem rede) e
`_pesquisa/geo_la_gravar2.mjs` (grava pela pré-v1). As conferências estão em `_tmp/geo-final-2/_conferencia.json`, e as prévias,
em `_tmp/pesquisa-geo/previa2-*.png`.

| Pedido do espelho | Arquivo (`_media/geo/`) | O que é | Fonte | Cenas |
|---|---|---|---|---|
| `a-pedir-california` | `california-cb500k` | a Califórnia (1 MultiPolygon, 12 partes) | Census CB 2025, estados 1:500.000, GEOID 06 | s05 |
| `a-pedir-catalina` | `catalina-tiger` | Santa Catalina Island (1 polígono) | TIGER 2025 Coastline, o anel fechado da ilha | s29 |
| `a-pedir-sf`, `a-pedir-sd`, `a-pedir-point-fermin` | `lugares-costa-gnis` | San Francisco, San Diego, Point Fermin, Playa del Rey e Main Channel (5 pontos; usar `_feature`) | USGS GNIS 277593, 1661377, 1664805, 247603 e 245395 | s05, s14, s17, s26, s29, s50 |
| `a-pedir-playa-del-rey` | `praia-aberta-mais-proxima-tiger` | o ponto da costa aberta mais próximo da Plaza (1 ponto) | TIGER 2025 Coastline, pelo método do esc-09 | s05 |
| `a-pedir-main-channel` | `main-channel-usace-ncf` | o Main Channel, 53 pés (1 polígono, o pé do talude) | USACE National Channel Framework, CESPL_LA_02_LAC_3 | s50, s55 |
| `a-pedir-port-long-beach` | `portos-la-long-beach-tiger` | a água do porto de cada cidade (2 MultiPolygon) e a divisa LA–Long Beach (1 MultiLineString) | TIGER 2025 Area Water + Places | s53 |
| `a-pedir-long-beach-terminal-island-1909` | `divisa-la-lb-terminal-island-usgs1923` | **só a divisa** LA–Long Beach através de Terminal Island, em 1923 (1 linha) | USGS Wilmington 1923, o traço "City Boundary" | s46 |

## As medidas

- **A praia aberta mais próxima da Plaza**, pelo TIGER: **14,02 mi** da Plaza do NRHP (14,08 do El Pueblo e 14,12 da Plaza
  Substation), no ponto 33,9570 N, −118,4525. O esc-09, na camada do condado, deu 13,99 a 14,09 mi, a 221 m deste ponto. O
  "about fourteen miles" do roteiro se sustenta em domínio público. O ponto fica ao sul da boca do Ballona, na praia de Playa del
  Rey (Dockweiler), a 1,1 km do ponto nominal do GNIS para Playa del Rey (que é o bairro, não a praia).
- **Point Fermin** (GNIS 1664805): o mesmo ponto que o dossiê usou para "MORE THAN 20 MILES" (24,43 a 24,48 mi da Plaza).
- **Catalina:** 196,2 km² (75,75 mi²) pela costa do TIGER; contém o ponto do GNIS da ilha e o de Avalon.
- **O Main Channel:** 1,233 km² medidos contra 1,234 km² do campo `projectedarea` do USACE; o eixo maior tem 2,58 mi, contra
  2,6 mi do `reportedlength`. Contém o ponto "Main Channel" do GNIS. 53 pés mantidos e autorizados, como o roteiro diz.
- **Os portos:** 39,98 km² de água do lado de Long Beach e 11,40 km² do lado de Los Angeles. Cada corpo d'água do TIGER cai numa
  cidade só (fora até 3 % de vértices sobre a divisa). Ficaram de fora 5 lagos e tanques de terra firme (Harbor Lake, a Rainbow
  Lagoon e três pequenos).

## Os limites de cada uma

- `california-cb500k`: generalizada e simplificada a 120 m; serve só à câmera larga. Perto de LA vale a `costa-hoje-tiger`.
- `catalina-tiger`: a ilha, sem a pedreira. O dossiê não dá o lugar de onde saía a pedra, e nada foi posto no lugar dele.
- `portos-la-long-beach-tiger`: é **a água do porto dentro de cada cidade**, não o limite legal de cada Harbor District. O limite
  do Porto de Long Beach não se leu: o `thehelm.polb.com` recusou o robô (decisão T02). O lado de Long Beach inclui a baía até
  Alamitos e as marinas do centro, que não são do porto. Para separar os dois portos e rotular cada um, como a s53 pede, basta;
  para desenhar "o Porto de Long Beach" como área legal, não.
- `main-channel-usace-ncf`: o pé do talude do trecho de projeto, não a margem do cais.

## O pedaço de Terminal Island que Long Beach anexou em 1909: só a divisa

**O polígono da anexação de 13/08/1909 continua sem fonte.** Procurei de novo:
- a folha de Hamlin (1916) desenha a divisa de San Pedro em Terminal Island, mas não o limite de Long Beach;
- a folha do USGS de 1896 (San Pedro) é anterior à anexação;
- a do USGS de **1923 (Wilmington, 1:24.000)** desenha a divisa entre as duas cidades, o traço "City Boundary", que cruza Terminal
  Island da margem sul do Cerritos Channel até a praia. Ela não desenha o resto do limite da anexação (a água, o lado leste);
- uma busca na web achou só mapas de arquivo sem cópia digital aberta (USC, Long Beach Harbor Dept.), nenhum em domínio público.

**O que existe, então, é a divisa de 1923** (`divisa-la-lb-terminal-island-usgs1923`, 723 m, ±10 m de leitura):
- fica a 13–32 m da divisa LA–Long Beach do TIGER de hoje: a linha não mudou de 1923 até hoje;
- não prova a linha de 1909, mas é a fonte de época mais próxima que se achou;
- a cena s46 pode mostrar **onde a ilha se divide entre as duas cidades** (com "1923" se a tela disser o ano da linha), não o
  polígono de 1909. Fechar o polígono pela costa pediria inventar o lado do mar, e isso não se faz. O 0,97 mi² fica só como
  número, do dossiê.

## Achado que toca a 1ª rodada: o sudeste da folha de Hamlin está deslocado

A divisa de 1923 deu uma régua independente para conferir os contornos de Hamlin no sudeste, onde o ajuste só tinha o farol:
- o trecho da divisa de San Pedro em Terminal Island (`san-pedro-1909-divisa-hamlin`) tem **a mesma forma** da divisa de 1923
  e da de hoje (a diagonal até a praia, o dente para oeste, a reta para o sul), mas fica **460 a 500 m a nordeste** dela;
- o lado leste de Wilmington (`wilmington-1909-hamlin`) fica a 44 m da divisa de hoje no Cerritos Channel e a **570 a 880 m** dela
  ao norte. A folha de 1923 põe o "City Boundary" onde o TIGER põe a divisa de hoje;
- isso bate com o excesso de área de Wilmington na tabela (10,57 mi² contra 9,93 no quadro de Hamlin, +6 %): uma tira de ~3 km
  com ~0,55 km de largura dá os 0,64 mi² a mais.

**A leitura mais provável é erro da georreferência de Hamlin no sudeste**, fora dos pontos de controle, e não divisa que mudou
entre 1916 e 1923; a prova não está fechada. A incerteza de "~±100 m ao sul de 33,86 N" que a 1ª rodada declarou **não vale**
para o sudeste da folha (Wilmington leste e Terminal Island): ali o erro chega a ~0,5–0,9 km. Afeta `wilmington-1909-hamlin`,
`la-1909-hamlin` e o trecho de Terminal Island de `san-pedro-1909-divisa-hamlin`; não afeta a faixa nem 1850, que têm conferência
própria. **Resolvido no mesmo dia** (decisão do Claude central): ver "Correção do sudeste de Hamlin", abaixo. Os pontos novos não usam a divisa,
que ficou como teste.

## Como refazer a 2ª rodada

De dentro de `out/los-angeles/_pesquisa/`: `python geo_la_rodada2.py`. Depois, da raiz do canal:
`REGIE_MOTOR=C:/projetos/regie-v1 node out/los-angeles/_pesquisa/geo_la_gravar2.mjs`. As fontes novas são
`_tmp/geo-fontes/cb_2025_us_state_500k.zip` e `_tmp/pesquisa-geo/ncf-lac3.geojson` (com `ncf-servico.json`, `ncf-busca.json` e
`ncf-licenca.txt`, o `licenseInfo` do item do USACE).

---

# Correção do sudeste de Hamlin (07/10/2026, decisão do Claude central)

**O método** (`_pesquisa/hamlin_sudeste.py`):
- A posição de cada pixel da folha passa a ser **o ajuste de 2ª ordem da 1ª rodada, mais uma correção local**: uma thin-plate spline
  sobre os resíduos, em metros.
- A correção vale zero nos 15 pontos de antes e é atenuada a zero ao norte de ~33,92 N (plena ao sul de ~33,86 N).
- Um polinômio global com os pontos novos foi tentado e recusado: o resíduo RMS subia de 23 para 84 m, porque a folha não é deformada
  por igual.
- O `hamlin_conferir.transformador()` usa a correção por padrão; com `sudeste=False`, devolve o ajuste antigo.

**Os 4 pontos novos.** Nenhum é a divisa LA–Long Beach.

| Ponto | Erro do ajuste antigo | Deixa-um-fora depois |
|---|---|---|
| canto T4S R13W/R14W (BLM) | 20 m | 63 m |
| canto T5S R13W/R14W, o degrau da linha de range (BLM) | 106 m | 57 m |
| Deadman's Island (USGS Wilmington 1923) | 182 m | 205 m |
| ponta de Point Fermin (USGS Wilmington 1923) | 441 m | 363 m |

Os 15 pontos de antes não mudam: resíduo RMS de 23 m, máximo de 53 m.

**Os testes fora do ajuste**, antes → depois:
- **o trilho do Pacific Electric na divisa norte de Wilmington** (USGS Compton 1924): 383 → **14 m**. Ficou fora do ajuste porque cai
  sobre a "Long Beach City Bdy" de 1924;
- **a divisa de San Pedro em Terminal Island contra a divisa LA–Long Beach de 1923**: 503 e 458 → **169 e 12 m**;
- **o lado leste de Wilmington contra o limite de LA de hoje (TIGER)**: mediana de 135 → **77 m**, máximo de 574 → **169 m**. As
  esquinas: NE 408 → 55 m, E 574 → 80 m e a do canal 44 → 169 m;
- **a faixa contra o TIGER de hoje**:
  - entre 33,800 e 33,855 N, mediana de 18 → **50 m** (p90 de 38 → 80 m). **Piorou** ali, porque a correção dos cantos do PLSS chega
    à ponta sul da faixa;
  - entre 33,870 e 33,920 N, de 46 → 35 m.

**As áreas**, antes → depois, contra o quadro de Hamlin:

| Camada | Antes | Depois | Quadro |
|---|---|---|---|
| Wilmington | 10,57 (+6,4 %) | **9,76 (−1,7 %)** | 9,93 |
| 1909 sem San Pedro | 72,21 | 70,99 (−1,2 %) | 71,83 |
| 1906 | 61,66 | 61,25 (−1,0 %) | 61,90 |
| a faixa (Shoestring) | 18,84 | 18,43 (−1,1 %) | 18,64 |
| 1850 | 27,75 | **27,75 (não mudou)** | 28,01 |
| antes da faixa (1899) | 42,79 | **42,79 (não mudou)** | 43,26 |

**A faixa de 1906:**
- o trecho fino mede 14,84 → **14,81 mi** de norte a sul, com a ponta sul em 33,7447 → 33,7451 N;
- a largura mediana vai de 0,55 → **0,54 mi**, a mesma do condado e do TIGER;
- o degrau perto de Gardena vai de 1,03 → 1,01 mi;
- os vértices se movem 49 m na mediana e 158 m no máximo, sempre no sul.

O 1850 não se move (0 m).

**As camadas regravadas:** `la-1906-hamlin`, `faixa-1906-hamlin`, `wilmington-1909-hamlin`, `san-pedro-1909-divisa-hamlin` e
`la-1909-hamlin`. `la-1850-hamlin` e `la-1899-antes-da-faixa-hamlin` não mudaram (só o texto de incerteza na pauta). As versões de
antes ficaram em `_tmp/pesquisa-geo/*-antes-gcp1923.json` (e `.js`), com a pauta, o `pauta-geo.md`, o `hamlin_conferir.py`, o
`geo-final` e o `geo-hist` de antes.

**A precisão declarada** agora:
- ±50 m ao norte de 33,86 N;
- ±150 a ±200 m ao sul (o deixa-um-fora vai de 57 a 363 m, e os testes independentes, de 1 a 169 m). Inclui a ponta sul da faixa, que
  piorou de ~20 para ~50 m contra o TIGER.

**Os números do roteiro e do dossiê** continuam de pé:
- "seventy-six square miles" (1909) vem do dossiê: o atributo TOTAL_AREA 76,44 do condado (esc.num-19, evt.num-43) e o quadro de
  Hamlin (71,83 + 4,61). Não vem da geometria, que nunca fechou San Pedro;
- "more than eighteen square miles" vem do quadro (18,64); a medida passou a 18,43, ainda acima de 18;
- "about fifteen miles": 14,81 mi aqui, 14,88 no condado;
- "about half a mile wide": 0,54 mi;
- "forty-three" e "twenty-eight" vêm do quadro, e esses contornos não mudaram;
- "less than half of that" vem do dossiê (8,63 contra 9,96 mi², no condado);
- "about nine miles" vem do TIGER de hoje e não depende de Hamlin;
- "It never reached the tide line": a ponta continua em terra. A distância ao azul da folha de 1896 caiu de ~0,8–0,9 km para
  ~0,56–0,64 km. O roteiro não diz a distância.

Achado de passagem, sem conserto: **Deadman's Island em `pontos-historicos-usgs`** (lida na folha de 1896, 1:62.500) fica a ~240 m de
onde a folha de 1923 (1:24.000) a desenha. A de 1923 é a mais precisa das duas.

**Como refazer**, de dentro de `_pesquisa/`:
1. `python hamlin_sudeste_conferir.py`, que grava `_tmp/pesquisa-geo/hamlin-sudeste-conferencia.json`, que o construir lê;
2. `python hamlin_epocas.py`;
3. `python geo_la_construir.py`;
4. da raiz do canal, `REGIE_MOTOR=C:/projetos/regie-v1 node out/los-angeles/_pesquisa/geo_la_gravar_gcp1923.mjs`.

A sobreposição de antes e de depois sobre a folha de 1923 está em `_tmp/pesquisa-geo/ti-sobreposicao-{antes,depois}-gcp1923.jpg`.
