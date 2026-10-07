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
- **em resumo: ±50 m ao norte de 33,86 N e ~±100 m ao sul, onde só o farol segura o ajuste.**

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
| Área de 1906 | 61,66 | 61,90 | 61,90 |
| Shoestring Addition | 18,84 | 18,64 (11.931 ac) | 18,64 (18,59 medida) |
| Wilmington, 1909 | 10,57 | 9,93 (6.358 ac) | 9,93 |
| 1909 sem San Pedro | 72,21 | 71,83 (76,44 com San Pedro) | 76,44 |
| Hoje | 470,52 de terra + 31,49 de água (TIGER) | — | 468,85 (OF_AREA_SM) |
| Trecho fino de 1906, de norte a sul | **14,84 mi** (33,7447 a 33,9600 N) | — | 14,88 (33,7441 a 33,9600) |
| Polígono de 1906, de norte a sul | 18,34 mi | — | 18,38 |
| Trecho fino de hoje, de norte a sul | **8,66 mi** (33,7976 a 33,9232 N, TIGER) | — | 8,66 (mesmas latitudes) |
| Largura inscrita de 1906 (mediana) | 0,55 mi | — | 0,54 |
| Largura inscrita de hoje (mediana; mínima e máxima) | 0,54 (0,44 e 0,63) | — | 0,54 (0,45 e 0,64) |
| Degrau perto de Gardena, deslocamento para leste | 1,03 (1906) e 1,04 (hoje) | — | 1,01 a 1,04 |
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
- A ponta sul (33,7447 N) fica em terra, a **~0,9 km (~0,57 mi)** do azul mais próximo da folha de 1896.
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
