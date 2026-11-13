# Pauta de geometria · vídeo 7 (`rio-columbia`) · 12/11/2026

> Índice legível de `pauta-geo.json` (a fonte é o JSON). Gerado por `out/rio-columbia/_tmp/pesquisa-geo/geo_pauta_md.py`; o relato está em
> `out/rio-columbia/_tmp/pesquisa-geo/relato.md`, e os scripts, na mesma pasta.

- Espelho: sha256 `28f6121ba6e3d7e8…`; 38 ids, 191 pedidos; 38 camadas em `_media/geo/` (`.json` e `.js`).
- Estado dos ids: atendido 34, parcial 2, bloqueio 2. Dos pedidos: atendidos 185, parciais 3, bloqueados 3.
- O par de satélite do Arrow (s41 P1, s61 P2): **14/04/2024 (fundo) e 11/07/2024 (pico)**, Landsat 8 e 9, path 044, linhas 025 e 026; o recorte fica com o mapista (abaixo).
- Portões: `validar-contrato pauta-pesquisa` sai 0; `qc-procedencia rio-columbia` PASS.
- **Antes do art (12/11/2026, ~23h):** mais 3 camadas (`fronteira-blaine-surrey`, `boat-encampment`, `arrowhead-bc-antiga`; 41 no total) e as 3
  entradas de satélite da mesa em `_media/base/mesa/`. O que está acima é da rodada do research (espelho r2); a rodada nova está no fim, em
  "Antes do art", e no bloco `rodada_antes_do_art` do JSON.

## Os 38 ids

| id | estado | pedidos | arquivos | nota |
|---|---|---|---|---|
| `astoria-or` | atendido | 2 | `astoria-or.json`, `rio-columbia.json` | geometria real, com fonte e licença |
| `bacia-columbia` | atendido | 7 | `bacia-columbia.json` | geometria real, com fonte e licença |
| `bacia-columbia-canada` | atendido | 6 | `bacia-columbia-canada.json` | geometria real, com fonte e licença |
| `bacia-columbia-eua` | atendido | 4 | `bacia-columbia-eua.json` | geometria real, com fonte e licença |
| `bacia-kootenai-eua-acima-de-birchbank` | atendido | 1 | `bacia-kootenai-eua.json` | geometria real, com fonte e licença |
| `barragem-grand-coulee` | atendido | 1 | `barragem-grand-coulee.json` | geometria real, com fonte e licença |
| `barragem-keenleyside` | atendido | 6 | `barragem-keenleyside.json` | geometria real, com fonte e licença |
| `barragem-libby` | atendido | 2 | `barragem-libby.json` | geometria real, com fonte e licença |
| `barragem-mica` | atendido | 3 | `barragem-mica.json` | geometria real, com fonte e licença |
| `barragens-columbia-eua` | atendido | 6 | `barragens-columbia-eua.json` | geometria real, com fonte e licença |
| `canada` | atendido | 6 | `canada.json` | geometria real, com fonte e licença |
| `castlegar-bc` | atendido | 2 | `castlegar-bc.json` | geometria real, com fonte e licença |
| `colombia-britanica` | atendido | 6 | `british-columbia.json` | geometria real, com fonte e licença |
| `columbia-lake` | atendido | 1 | `columbia-lake.json` | geometria real, com fonte e licença |
| `curva-antiga-big-bend` | bloqueio | 2 | — | nenhum mapa antigo em domínio público, com escala e georreferência que sirvam, foi achado por programa (ver bloqueios) |
| `estacao-birchbank` | atendido | 3 | `estacao-birchbank.json` | geometria real, com fonte e licença |
| `estacao-the-dalles` | atendido | 5 | `estacao-the-dalles.json` | geometria real, com fonte e licença |
| `estados-unidos` | atendido | 7 | `estados-unidos.json` | geometria real, com fonte e licença |
| `fronteira-canada-eua` | atendido | 27 | `fronteira-canada-eua.json` | geometria real, com fonte e licença |
| `kettle-falls` | atendido | 1 | `kettle-falls.json` | geometria real, com fonte e licença |
| `lago-arrow` | atendido | 25 | `lago-arrow.json` | geometria real, com fonte e licença |
| `lago-duncan` | atendido | 8 | `barragem-duncan.json`, `lago-duncan.json` | geometria real, com fonte e licença |
| `lago-kinbasket` | atendido | 10 | `lago-kinbasket.json` | geometria real, com fonte e licença |
| `lago-koocanusa` | atendido | 3 | `lago-koocanusa.json` | geometria real, com fonte e licença |
| `mica-creek-antiga` | bloqueio | 1 | — | o lugar da antiga vila não se leu; e a fonte é ambígua sobre qual lago a cobriu (ver bloqueios e avisos) |
| `montana` | atendido | 2 | `montana.json` | geometria real, com fonte e licença |
| `oliver-bc-fronteira` | parcial | 2 | `oliver-bc-fronteira.json` | Oliver é real; o ponto de entrega na fronteira é DECLARADO (o mais perto de Oliver): o tratado não dá coordenada |
| `oregon` | atendido | 2 | `oregon.json` | geometria real, com fonte e licença |
| `portland-or` | atendido | 6 | `portland-or.json` | geometria real, com fonte e licença |
| `puds-mid-columbia` | atendido | 1 | `puds-mid-columbia.json` | geometria real, com fonte e licença |
| `reserva-colville` | atendido | 1 | `reserva-colville.json` | geometria real, com fonte e licença |
| `rio-columbia` | atendido | 20 | `rio-columbia.json` | geometria real, com fonte e licença |
| `rio-columbia-trecho-canada` | atendido | 1 | `rio-columbia-trecho-canada.json` | geometria real, com fonte e licença |
| `rio-kootenay` | atendido | 2 | `rio-kootenay.json` | geometria real, com fonte e licença |
| `trail-bc` | atendido | 3 | `trail-bc.json` | geometria real, com fonte e licença |
| `vanport-1948` | atendido | 2 | `vanport-1948.json` | geometria real, com fonte e licença |
| `vilas-arrow` | parcial | 1 | `vilas-arrow.json` | Edgewood, Fauquier e Burton são as vilas de hoje (realocadas); os sítios alagados não se leram. Renata, sim |
| `washington` | atendido | 3 | `washington.json` | geometria real, com fonte e licença |

## As camadas

| arquivo | fonte | licença / crédito na tela | features | bbox | centro | KB | cenas |
|---|---|---|---|---|---|---|---|
| `astoria-or` | Natural Earth 1:10m | domínio público | 1 | [-123.83, 46.1884, -123.83, 46.1884] | [-123.83, 46.1884] | 0.2 | s13, s14 |
| `bacia-columbia-canada` | USGS Watershed Boundary Dataset | domínio público | 1 | [-121.1164, 48.9989, -114.054, 52.8807] | [-117.5004, 50.279] | 84.4 | s05, s15, s19, s20, s24, s25 |
| `bacia-columbia-eua` | USGS Watershed Boundary Dataset | domínio público | 1 | [-124.0753, 41.1278, -109.7625, 49.0014] | [-116.9944, 45.3899] | 105.5 | s05, s20, s28, s35 |
| `bacia-columbia` | USGS Watershed Boundary Dataset | domínio público | 1 | [-124.0914, 41.1278, -109.7625, 52.8807] | [-117.0811, 46.1979] | 188.7 | s05, s09, s15, s44, s58, s63, s64 |
| `bacia-kootenai-eua` | USGS WBD, região 17, HU6 170101 (Kootenai) ∩ os estados dos EUA do Census (cb 2025) | domínio público | 1 | [-116.9275, 47.8902, -114.6849, 49.0005] | [-115.618, 48.5827] | 10.3 | s19 |
| `barragem-duncan` | OpenStreetMap (Overpass API), way/220188876 (Duncan Dam), base de 2026-11-12T14:43:08Z | ODbL, © OpenStreetMap contributors | 1 | [-116.9457, 50.2506, -116.9457, 50.2506] | [-116.9457, 50.2506] | 0.2 | s20, s24, s27, s28, s30, s35, s46, s48 |
| `barragem-grand-coulee` | USACE National Inventory of Dams | domínio público | 1 | [-118.9805, 47.9566, -118.9805, 47.9566] | [-118.9805, 47.9566] | 0.3 | s54 |
| `barragem-keenleyside` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-117.772, 49.3398, -117.772, 49.3398] | [-117.772, 49.3398] | 0.2 | s07, s27, s28, s38, s41, s62 |
| `barragem-libby` | USACE National Inventory of Dams | domínio público | 1 | [-115.3143, 48.4103, -115.3143, 48.4103] | [-115.3143, 48.4103] | 0.3 | s25, s27 |
| `barragem-mica` | OpenStreetMap (Overpass API), way/418122690 (Mica Dam), base de 2026-11-12T14:43:08Z | ODbL, © OpenStreetMap contributors | 1 | [-118.5714, 52.0761, -118.5714, 52.0761] | [-118.5714, 52.0761] | 0.2 | s14, s27, s28 |
| `barragens-columbia-eua` | USACE National Inventory of Dams | domínio público + ODbL (Bonneville) | 11 | [-121.9408, 45.6148, -118.9805, 47.9954] | [-120.1666, 46.8371] | 3.6 | s13, s20, s30, s41, s55, s57 |
| `british-columbia` | Natural Earth 1:10m | domínio público | 1 | [-139.0602, 48.3061, -114.0375, 60.0001] | [-124.7524, 54.7606] | 119.9 | s02, s06, s13, s30, s53, s55 |
| `canada` | Natural Earth 1:10m | domínio público | 1 | [-132.0, 48.3061, -104.0, 57.0] | [-116.547, 53.138] | 135.5 | s02, s05, s09, s20, s48, s58 |
| `castlegar-bc` | OpenStreetMap (Overpass API), node/51971904 (Castlegar), base de 2026-11-12T14:43:08Z | ODbL, © OpenStreetMap contributors | 1 | [-117.6668, 49.325, -117.6668, 49.325] | [-117.6668, 49.325] | 0.2 | s18, s38 |
| `columbia-lake` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-115.8816, 50.1642, -115.8178, 50.2924] | [-115.8527, 50.2279] | 5.3 | s13 |
| `estacao-birchbank` | Environment and Climate Change Canada, Water Survey of Canada — estação 08NE049 | OGL – Canada | 1 | [-117.7177, 49.1778, -117.7177, 49.1778] | [-117.7177, 49.1778] | 0.3 | s18, s19, s46 |
| `estacao-the-dalles` | USGS National Water Information System, site 14105700 | domínio público | 1 | [-121.1899, 45.6083, -121.1899, 45.6083] | [-121.1899, 45.6083] | 0.3 | s18, s19, s35, s36, s46 |
| `estados-unidos` | Natural Earth 1:10m | domínio público | 1 | [-132.0, 39.0, -104.0, 56.829] | [-114.2027, 44.1034] | 61.8 | s02, s05, s09, s20, s48, s57, s58 |
| `fronteira-canada-eua` | U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 | domínio público | 1 | [-122.758, 48.997, -103.0, 49.0025] | [-112.8791, 48.9997] | 6.1 | s02, s05, s06, s09, s13, s14, s15, s18, s19, s20, s22, s24, s25, s26, s27, s28, s30, s35, s44, s46, s48, s51, s53, s55, s58, s62, s63 |
| `idaho` | U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 | domínio público | 1 | [-117.243, 41.9882, -111.0436, 49.0008] | [-114.6594, 44.389] | 37.9 | — |
| `kettle-falls` | USGS GNIS: Historical Features, feature_id 1530609 'Kettle Falls | domínio público | 2 | [-118.1094, 48.6107, -118.0558, 48.6393] | [-118.0826, 48.625] | 0.6 | s54 |
| `lago-arrow` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 3 | [-118.214, 49.3348, -117.7128, 50.9815] | [-117.9715, 50.2156] | 84.6 | s01, s02, s07, s12, s20, s24, s27, s28, s30, s32, s35, s38, s41, s43, s46, s48, s50, s51, s53, s55, s60, s61, s62, s63, s64 |
| `lago-duncan` | OpenStreetMap (Overpass API), relation/2911836 (Duncan Lake), base de 2026-11-12T14:43:08Z | ODbL, © OpenStreetMap contributors | 1 | [-117.0486, 50.2486, -116.9108, 50.6135] | [-116.9597, 50.4238] | 16.4 | s20, s24, s27, s28, s30, s35, s46, s48 |
| `lago-kinbasket` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-119.175, 51.5086, -117.3226, 52.7809] | [-118.2101, 52.0834] | 83.1 | s14, s20, s24, s27, s28, s30, s35, s46, s48, s51 |
| `lago-koocanusa` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 2 | [-115.426, 48.4087, -115.1288, 49.4351] | [-115.2474, 48.8934] | 82.9 | s25, s27, s51 |
| `montana` | U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 | domínio público | 1 | [-116.0491, 44.358, -104.0397, 49.0014] | [-109.6449, 47.0334] | 30.5 | s25, s27 |
| `oliver-bc-fronteira` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 2 | [-119.55, 49.0003, -119.55, 49.1833] | [-119.55, 49.0918] | 0.5 | s30, s55 |
| `oregon` | U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 | domínio público | 1 | [-124.5662, 41.9918, -116.4635, 46.2908] | [-120.5553, 43.9365] | 20.1 | s14, s18 |
| `portland-or` | Natural Earth 1:10m | domínio público | 1 | [-122.6819, 45.522, -122.6819, 45.522] | [-122.6819, 45.522] | 0.2 | s20, s22, s23, s28, s35, s62 |
| `puds-mid-columbia` | USACE National Inventory of Dams | domínio público | 5 | [-120.2955, 46.6461, -119.8783, 47.9483] | [-120.029, 47.2687] | 1.6 | s57 |
| `reserva-colville` | U.S. Census Bureau — Cartographic Boundary Files 2025, American Indian/Alaska Native/Native Hawaiian Areas 1:5 | domínio público | 1 | [-120.14, 47.8304, -118.14, 48.4828] | [-118.8729, 48.2294] | 9.5 | s53 |
| `rio-columbia-trecho-canada` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-118.6764, 49.0008, -115.833, 52.1248] | [-117.5852, 50.8353] | 24.2 | s14 |
| `rio-columbia` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-124.0861, 45.5454, -115.833, 52.1248] | [-119.2078, 48.3993] | 53.8 | s02, s06, s13, s14, s18, s19, s22, s23, s25, s28, s30, s35, s36, s41, s44, s46, s54, s57, s62, s63 |
| `rio-kootenay` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 1 | [-117.6533, 48.361, -115.1649, 51.0781] | [-116.0503, 49.4728] | 41.1 | s18, s19 |
| `trail-bc` | OpenStreetMap (Overpass API), node/10297535677 (Trail), base de 2026-11-12T14:43:08Z | ODbL, © OpenStreetMap contributors | 1 | [-117.7098, 49.0945, -117.7098, 49.0945] | [-117.7098, 49.0945] | 0.2 | s18, s22, s23 |
| `vanport-1948` | USGS GNIS, Historical Features | domínio público | 1 | [-122.7001, 45.6021, -122.7001, 45.6021] | [-122.7001, 45.6021] | 0.3 | s22, s23 |
| `vilas-arrow` | OpenStreetMap | ODbL, © OpenStreetMap contributors | 4 | [-118.144, 49.4333, -117.8801, 49.9868] | [-118.0499, 49.7682] | 1.3 | s51 |
| `washington` | U.S. Census Bureau — Cartographic Boundary Files 2025, states 1:500,000 | domínio público | 1 | [-124.7627, 45.5435, -116.916, 49.0024] | [-120.4453, 47.3806] | 81.8 | s53, s54, s57 |

A fidelidade de cada camada (o que foi medido e conferido) está em `fidelidade`, no JSON. As conferências de lugar (a distância de cada ponto
à linha do rio, ao lago ou à cidade) estão em `medidas.conferencias`.

## As medidas

- **A bacia** (medida 1): 673,174 km² = 259,914 mi² (+0.16% contra as 259,500 mi²); **no Canadá, 102,828 km² = 39,702 mi² = 15.28%** (F005: 'about 15 percent', confirmado); nos EUA, 84.68%.
- **O Kootenai nos EUA** (acima de Birchbank): 12,412 km² = 4,792 mi² = 14.2% dos 87.390 km² de drenagem de Birchbank (WSC).
- **O rio** (medida 8): 1,964.8 km = 1,220.9 mi (-1.8% contra 1,243 mi); no Canadá 771.9 km = 479.6 mi = 39.3% (-3.7% contra 498 mi).
- **O Koocanusa** (medida 7): o Kootenai dentro do polígono do OSM ao norte da fronteira, 35.8 mi (-15% contra as 42 mi); o lago inteiro, 82.3 mi.
- **Birchbank**: 12.3 mi = 19.8 km ao norte do paralelo 49 (F021).
- **A faixa do Arrow superior** (de Nakusp para o norte, a 30 m): 61.6 km² de leito exposto entre 11/07 e 14/04/2024; ~203 m por margem, larga na ponta norte.

## O par de satélite do Arrow

- **Fundo:** 2024-04-14, Landsat 8 OLI, `LC08_L2SP_044025_20240414_02_T1` + `LC08_L2SP_044026_20240414_02_T1`; nuvem na cena {'044025': 1.62, '044026': 2.45}.
- **Pico:** 2024-07-11, Landsat 9 OLI-2, `LC09_L2SP_044025_20240711_02_T1` + `LC09_L2SP_044026_20240711_02_T1`; nuvem na cena {'044025': 4.44, '044026': 0.09}.
- Por quê: o MESMO ano (2024: o fundo de abril e o cheio de julho do mesmo ciclo), a mesma órbita, pouca nuvem; das 12 datas medidas de 2021 a 2025 no path 044, a de 14/04/2024 tem a MENOR água dentro do polígono do Arrow (337,3 km²) e a de 11/07/2024 a MAIOR (473,0 km²). As outras: 28/04/2023 433,2; 02/08/2023 443,6; 25/04/2025 415,5; 23/08/2025 445,1; 05/09/2024 427,0; 25/06/2024 460,1; 06/04/2021 418,3; 15/02/2023 368,7 (com 13,6 % de pixels claros no lago: neve ou gelo)
- A faixa a 30 m: SIM. No Arrow superior, de Nakusp (50,24 N) para o norte, 61,6 km² são água em 11/07 e chão em 14/04: a largura média, por margem, é de ~200 m (~7 pixels de 30 m). A faixa larga está na ponta norte (de ~50,6 N até Revelstoke, ~25 km de leito exposto, com o rio correndo no meio), no fim do braço de Beaton e na baía de Nakusp; nas encostas íngremes do corpo do lago ela fica em 1–3 pixels. Na baía de Nakusp a máscara sai manchada: pode ser água rasa e turva, não chão (NÃO CONFERIDO). Prévia de conferência: out/rio-columbia/_tmp/pesquisa-geo/previas/arrow-faixa-nakusp-norte.png
- O recorte: ESCOLHIDO E MEDIDO; o recorte NÃO foi gravado em _media/base/: a roupa do pesquisa-geo (§1: 'Você não escolhe base, câmera nem cor') deixa o enquadramento e a cor com o mapista. O script está pronto e testado (um recorte de 500 px foi gravado só em _tmp/pesquisa-geo/previas/teste-recorte/). Script: `out/rio-columbia/_tmp/pesquisa-geo/landsat_par_recorte.py` (python -X utf8 -B -I out/rio-columbia/_tmp/pesquisa-geo/landsat_par_recorte.py [--bbox=lon0,lat0,lon1,lat1] [--largura=px] [--saida=pasta]; com --simular, só lista os pedidos). Sugestão: o motivo de s41 pede o Arrow superior, 'de Nakusp para o norte'; a medida diz que a diferença mais visível é a ponta norte (Revelstoke–Arrowhead–Beaton). Ex.: --bbox=-118.30,50.20,-117.65,51.05.
- Licença: domínio público (USGS, https://www.usgs.gov/centers/eros/data-citation) — sem crédito na tela (identidade §7); na descrição, a linha que a USGS pede. Descrição: "Satellite imagery: LC08_L2SP_044025_20240414_02_T1 and LC08_L2SP_044026_20240414_02_T1, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey." e "Satellite imagery: LC09_L2SP_044025_20240711_02_T1 and LC09_L2SP_044026_20240711_02_T1, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey."

## Bloqueios

- **`curva-antiga-big-bend`** (s14, s51): o traçado do rio ANTIGO na curva (a Big Bend), debaixo do Kinbasket, de mapa antigo em domínio público, com a georreferência e a incerteza medidas (identidade §6, 'Mapa antigo digitalizado'; roupa §3). Procurou-se: Wikimedia Commons, pela API (4 buscas: 'Big Bend Columbia River map', 'Boat Encampment map', 'Kootenay district map 1890', 'Columbia River Big Bend 1930 map'): nenhum mapa de escala grande da curva; só livros e relatórios; USGS Water-Supply Paper 1080 (1949, domínio público; a cópia local midia/rio-columbia/fontes/d/usgs-wsp1080-report.pdf): só mapas da bacia inteira, em escala de página; a curva sai com erro de quilômetros, maior que a largura do Kinbasket (1–3 km): não serve; NRCan (as folhas topográficas históricas 1:250.000, por exemplo 83D 'Canoe River' e 82M 'Seymour Arm', das edições anteriores a 1973): ficam em ftp.maps.canada.ca/pub, e o robots.txt dele é 'Disallow: /pub'; não se baixou. Mais perto: o polígono do Kinbasket (lago-kinbasket, OSM) e o tronco do rio de HOJE, que passa pelo meio do lago (rio-columbia); nenhum dos dois é o rio antigo, e a tela não pode dizer que é. Caminho: a Sala abre no navegador do app a folha histórica do NRCan da Big Bend (pela Open Government Licence – Canada; a edição dos anos 1950–60 tem o direito da Coroa vencido: 50 anos da publicação), e o pesquisa-geo a georreferencia por pontos de controle independentes, com o resíduo e a incerteza medidos, como a folha de Hamlin no vídeo 2. Sem isso, vale o que o espelho já prevê: 'fica o contorno do Kinbasket e o rótulo'. Devolve a: o mapista (s14, s51: o contorno do Kinbasket e o rótulo FORMER BIG BEND, sem traçado) e a Sala (se quer pedir a folha).
- **`mica-creek-antiga`** (s51): o ponto da antiga vila de Mica Creek ('named for the former town of Mica Creek, drowned under the pondage': BC Geographical Names, Mica Dam; F124). Procurou-se: a cópia local do BC Geographical Names de Mica Dam (F16): diz que a vila se afogou, mas não diz onde ela ficava; a CGNDB (NRCan, geogratis.gc.ca/services/geoname, 12/11/2026): 'Mica Creek' só como o lugar de HOJE (UNP, decidido em 1987, 52,0075 N, −118,5658) e como o riacho (RIV, 52,0117 N, −118,5678, o ponto da foz); nenhum registro da vila antiga; o OSM: o nó 'Mica Creek' (village) é o lugar de hoje, a 57 m do ponto da CGNDB. Mais perto: a barragem de Mica (barragem-mica) e o Kinbasket (lago-kinbasket). ATENÇÃO: a foz do riacho Mica Creek e o lugar de hoje ficam 7 km ABAIXO da barragem, no lago de Revelstoke, e não no Kinbasket (ver avisos). Caminho: uma fonte que diga onde ficava a vila (o BC Geographical Names de 'Mica Creek', a BC Hydro, um mapa anterior a 1973); até lá, nenhum ponto. Devolve a: o verificador-de-fatos (F124 e a frase do parágrafo 33 do roteiro: 'a town went under with it') e o mapista (s51 sem o ponto de Mica Creek).

## Avisos à Sala

- MICA CREEK (F124; o parágrafo 33 do roteiro: 'the river's big bend in British Columbia went under another of the treaty's lakes, and a town went under with it'). A CGNDB põe a foz do riacho Mica Creek em 52,0117 N, −118,5678 e o lugar de hoje, 'Mica Creek' (UNP, 1987), em 52,0075 N, −118,5658: os dois ficam 7 km ABAIXO da barragem de Mica (52,076 N), no lago da barragem de Revelstoke (1984), que não é do tratado, e não no Kinbasket. Se a vila antiga ficava na foz do riacho, quem a cobriu foi o lago de Revelstoke. O BC Geographical Names diz só 'named for the former town of Mica Creek, drowned under the pondage', no verbete da barragem de Mica, sem dizer onde a vila ficava. Para o verificador-de-fatos: o 'a town went under with it' não está provado pela geometria; NÃO CONFERIDO.
- A BACIA (medida 1 da pauta §10.1): o WBD do USGS cobre também a parte canadense. As HU4 1701–1709 somam 673.174 km² = 259.914 mi² no elipsoide (+0,16 % contra as 259,500 mi² da USACE/BPA; igual à soma do atributo do WBD); a parte ao norte da fronteira do Census tem 102.828 km² = 39.702 mi² = 15,28 % ('only about 15 percent': CONFIRMADO). O HydroBASINS não se usou: data.hydrosheds.org tem robots.txt 'Disallow: /' (o mesmo do vídeo 4).
- BIRCHBANK E A ÁGUA DOS EUA (K3): a parte americana do Kootenai (HU6 170101 dentro dos EUA) tem 12.412 km² = 4.792 mi² e é a única parte dos EUA acima de Birchbank; a WSC dá 87.390 km² de drenagem a Birchbank: 14,2 % dela fica em Montana e Idaho. Birchbank está a 19,8 km = 12,3 mi ao norte do paralelo 49 (F021 confere).
- O RIO (medida 8): pelo tronco do OSM, o Columbia tem 1.964,8 km = 1.220,9 mi (−1,8 % contra as 1,243 mi do USGS de 1981) e 771,9 km = 479,6 mi no Canadá (−3,7 % contra as 498 mi): 39,3 % do rio no Canadá (o USGS de 1981 dá 40,1 %; o de 2007, 664 de 1.942 km, 34,2 %). 'a third or more' (F018) fica de pé com qualquer das três contas. O OSM tem um vão de 323 m no tronco, na barragem de Revelstoke, fechado com um segmento reto (DECLARADO).
- KOOCANUSA (medida 7): o Kootenai dentro do polígono do OSM, ao norte da fronteira, mede 57,7 km = 35,8 mi, 15 % menos que as 42 mi da USACE/BPA (F046); no lago inteiro, 82,3 mi. As 42 mi são da cota cheia, e o polígono do OSM (que termina em 49,435 N) não declara a cota. Uma régua de '42 MILES' sobre esse polígono fica curta: ou a tela não põe régua, ou o mapista estende a régua pelo rio até as 42 mi, declarado.
- O PAR LANDSAT: 14/04/2024 (fundo) e 11/07/2024 (pico), path 044, linhas 025+026, o mesmo recorte. Medido: 337,3 km² de água contra 473,0 km² no polígono do Arrow; no Arrow superior (de Nakusp para o norte), 61,6 km² de leito exposto, a faixa com ~200 m por margem e larga na ponta norte (Revelstoke–Arrowhead). O recorte fica com o mapista (a roupa do pesquisa-geo não escolhe base, câmera nem cor): o script landsat_par_recorte.py está pronto e testado. Em abril as montanhas estão nevadas: a neve muda junto.
- A FRONTEIRA: a entregue é a do Census (cb 2025), em ~49,000 N. O Natural Earth põe o paralelo 49 em 48,9925 N, ~0,8 km ao sul: os polígonos de país do NE (canada, estados-unidos) servem ao rótulo, e a linha a desenhar é fronteira-canada-eua. A bacia foi cortada pela linha do Census.
- WELLS DAM: o ponto do NID (47,9483 N, −119,8783) fica a 815 m da crista no OSM; as outras barragens do NID ficam a 3–17 m da crista. Nos pontos de Wells (barragens-columbia-eua e puds-mid-columbia) vai junto crista_osm_ponto_mais_perto: o mapista decide qual usar no zoom das PUDs (s57).
- THE DALLES: a estação 14105700 fica 4,3 km A JUSANTE da barragem de The Dalles, a 169 m do rio; o pedido diz 'junto da barragem de The Dalles'. Os dois pinos (a estação e a barragem) não são o mesmo lugar.
- AS VILAS DO ARROW: Edgewood, Fauquier e Burton são as vilas de HOJE, realocadas (a 400–550 m da margem); os sítios alagados não se leram. Renata é o ponto do lugar que deixou de existir, a 53 m da margem. Nenhum ponto é 'a vila debaixo d'água'.
- KETTLE FALLS: a 1ª feature é AS QUEDAS (GNIS 'Kettle Falls (historical)', hoje sob o Lake Roosevelt), o lugar da pesca de F128; a cidade de hoje fica 5,1 km a sudeste e vai só de referência.
- COLVILLE: o polígono do Census é 'Colville Reservation and Off-Reservation Trust Land' (5.659 km² = 2.185 mi²); o rótulo 'COLVILLE RESERVATION' cobre também as terras em fideicomisso fora da reserva.
- A COLÚMBIA BRITÂNICA veio do Natural Earth (domínio público, sem crédito), não da Statistics Canada que o espelho citava (que pede a linha da Open Licence na tela e vem em Lambert): a roupa manda o NE para fronteiras. Se a Sala quiser a da StatCan, é outra rodada.
- OSM NA TELA: as camadas do OSM (o rio, o Kootenay, os lagos, Keenleyside, Mica, Duncan, Bonneville, Castlegar, Trail, Oliver e as vilas) pedem '© OpenStreetMap contributors' na tela, que a base MapTiler já leva ('© MapTiler © OpenStreetMap contributors'), e openstreetmap.org/copyright na descrição. As cenas estão na pauta-geo.md, 'As cenas com OSM'.
- BIRCHBANK (o pino) vem da ECCC pela Open Government Licence – Canada: a linha 'Contains information licensed under the Open Government Licence – Canada.' já está no crédito do dado das cenas com a medida (fatos-c, item 6); se o pino aparecer sozinho, a linha vai na faixa de crédito.
- O OVERPASS, nas duas respostas 502 de hoje, escreveu: "This public endpoint is intended for browser-based and human-operated tools. For automated or high-volume use, run a local Overpass API instance". O uso desta pesquisa foi pequeno (7 pedidos, um por vez), mas o aviso é novo e vale para os próximos vídeos: talvez caiba ao Lucas decidir se o canal continua pedindo ao Overpass público por programa (candidato ao APRENDIZADOS.md).

## As cenas com OSM

Na tela, '© OpenStreetMap contributors' (já no crédito da base MapTiler); na descrição, openstreetmap.org/copyright:

- s01: lago-arrow
- s02: lago-arrow, rio-columbia
- s06: rio-columbia
- s07: barragem-keenleyside, lago-arrow
- s12: lago-arrow
- s13: barragens-columbia-eua, columbia-lake, rio-columbia
- s14: barragem-mica, lago-kinbasket, rio-columbia, rio-columbia-trecho-canada
- s18: castlegar-bc, rio-columbia, rio-kootenay, trail-bc
- s19: rio-columbia, rio-kootenay
- s20: barragem-duncan, barragens-columbia-eua, lago-arrow, lago-duncan, lago-kinbasket
- s22: rio-columbia, trail-bc
- s23: rio-columbia, trail-bc
- s24: barragem-duncan, lago-arrow, lago-duncan, lago-kinbasket
- s25: lago-koocanusa, rio-columbia
- s27: barragem-duncan, barragem-keenleyside, barragem-mica, lago-arrow, lago-duncan, lago-kinbasket, lago-koocanusa
- s28: barragem-duncan, barragem-keenleyside, barragem-mica, lago-arrow, lago-duncan, lago-kinbasket, rio-columbia
- s30: barragem-duncan, barragens-columbia-eua, lago-arrow, lago-duncan, lago-kinbasket, oliver-bc-fronteira, rio-columbia
- s32: lago-arrow
- s35: barragem-duncan, lago-arrow, lago-duncan, lago-kinbasket, rio-columbia
- s36: agua-osm-the-dalles (desde 13/11/2026, no art), rio-columbia
- s38: barragem-keenleyside, castlegar-bc, lago-arrow
- s41: barragem-keenleyside, barragens-columbia-eua, lago-arrow, rio-columbia
- s43: lago-arrow
- s44: rio-columbia
- s46: barragem-duncan, lago-arrow, lago-duncan, lago-kinbasket, rio-columbia
- s48: barragem-duncan, lago-arrow, lago-duncan, lago-kinbasket
- s50: lago-arrow
- s51: lago-arrow, lago-kinbasket, lago-koocanusa, vilas-arrow
- s53: lago-arrow
- s54: rio-columbia
- s55: barragens-columbia-eua, lago-arrow, oliver-bc-fronteira
- s57: barragens-columbia-eua, rio-columbia
- s60: lago-arrow
- s61: lago-arrow
- s62: barragem-keenleyside, lago-arrow, rio-columbia
- s63: lago-arrow, rio-columbia
- s64: lago-arrow

## Créditos para a descrição (além da base MapTiler)

- Geometria: © OpenStreetMap contributors — dados sob a Open Database License (https://www.openstreetmap.org/copyright)
- Contains information licensed under the Open Government Licence – Canada. https://open.canada.ca/en/open-government-licence-canada
- Satellite imagery: LC08_L2SP_044025_20240414_02_T1 and LC08_L2SP_044026_20240414_02_T1, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey.
- Satellite imagery: LC09_L2SP_044025_20240711_02_T1 and LC09_L2SP_044026_20240711_02_T1, Landsat Collection 2 Level-2. Landsat imagery courtesy of the U.S. Geological Survey.
- O resto (Natural Earth, Census, USGS WBD/GNIS/NWIS, USACE NID) é domínio público, sem crédito obrigatório.

## NÃO CONFERIDO

- a cota do lago nos polígonos do OSM (Arrow, Kinbasket, Duncan, Koocanusa): o OSM não declara a que nível cada polígono foi traçado
- o nível do Arrow nas duas datas do par Landsat (a série da BC Hydro, de licença não lida): o par se escolheu pela água MEDIDA na imagem, não pela cota
- a baía de Nakusp no fundo de 14/04/2024: a máscara de água sai manchada ali, e pode ser água rasa e turva, não chão
- onde ficavam os sítios alagados de Edgewood, Fauquier e Burton (os pontos entregues são as vilas de hoje) e o da antiga vila de Mica Creek
- o ponto exato da entrega na fronteira 'near Oliver' (o tratado não dá coordenada; o ponto entregue é o da fronteira mais perto de Oliver, DECLARADO)
- a coordenada de Oliver no OSM vem arredondada (49,18333, −119,55); a da CGNDB não se pediu
- a fronteira entregue é a do Census 1:500.000 (generalizada); o LSIB, mais fino, só pelo navegador do app
- o ponto de Wells no NID (815 m fora da crista do OSM); o de Bonneville veio só do OSM (o NID público não a traz)

## Recusas e robots.txt

- **hydro.nationalmap.gov (o serviço do WBD e do NHD)**: HTTP 403 ao pedir o robots.txt. parou ali; o WBD veio dos produtos estáticos do USGS no S3 (prd-tnm.s3.amazonaws.com, sem robots.txt). Para a Sala: nada a abrir: o WBD já veio.
- **data.hydrosheds.org (HydroBASINS)**: robots.txt 'Disallow: /' (registrado no vídeo 4; não se pediu de novo). o HydroBASINS não se usou; o WBD cobre a bacia inteira. Para a Sala: nada.
- **ftp.maps.canada.ca (NRCan: CanVec, NHN, as folhas topográficas históricas)**: robots.txt 'Disallow: /pub'. não se baixou nada de lá. Para a Sala: se quiser o rio antigo da Big Bend: abrir no navegador do app as folhas históricas 1:250.000 83D (Canoe River) e 82M (Seymour Arm) anteriores a 1973 (o Historical Topographic Maps do NRCan, no open.canada.ca) e baixar a de edição mais antiga legível.
- **collaboration.cmc.ec.gc.ca (os polígonos de bacia das estações da WSC)**: robots.txt 'Disallow: /cmc'. não se usou; a parte americana acima de Birchbank saiu do WBD. Para a Sala: nada.
- **api.weather.gc.ca (MSC GeoMet)**: robots.txt 'Disallow: /collections/*/items'. usou-se a cópia local da estação 08NE049 (midia/rio-columbia/fontes/a/). Para a Sala: nada.
- **overpass-api.de**: robots.txt 'Disallow: /api/' (a regra é para robôs de busca; a API é a porta que o OSM abre a programas, e o pedido da Sala manda usá-la um pedido por vez); 2 respostas 502 'at capacity', com o pedido de repetir com espera. 7 pedidos no total (5 respondidos e 2 com 502, os dois no Kootenay, repetido minutos depois), um por vez, 10 s ou mais entre eles. Para a Sala: nada.

## Antes do art (12/11/2026, ~23h)

> O pedido: `out/rio-columbia/_tmp/pesquisa-geo/pedido-antes-do-art.md` (o item 45 do `para-passos-seguintes.json`; VC-06). A fonte é o bloco
> `rodada_antes_do_art` do JSON; o relato: `out/rio-columbia/_tmp/pesquisa-geo/relato-antes-do-art.md`. Espelho de agora: `3de8e7ad…` (o de 22:48, depois da r3; no começo desta rodada era o `9ae1ef28…`),
> 40 ids e 199 pedidos em `needs.geo`, todos com arquivo na pauta (o `mica-creek-antiga` saiu na r3).

### As três camadas novas

| camada | cena | features | fonte | licença e crédito | o lugar, conferido |
|---|---|---|---|---|---|
| `fronteira-blaine-surrey` | s26 P2 | 2 (o ponto; o trecho) | Census: TIGER 2025 (a I-5) + cb 2025 1:500.000 (a fronteira, Blaine) | domínio público, sem crédito | o ponto (49.002356 N, −122.756517) fica SOBRE a linha de `fronteira-canada-eua`, a 110 m do fim oeste dela (a costa); é a média das pontas norte das duas pistas da I-5, levada 30 m ao norte até a linha. A 327 m do Peace Arch Park da CGNDB, 1,18 km de Blaine (GNIS, ao sul), 13,2 km de Surrey (CGNDB, ao norte). O trecho: 7,51 km (4,67 mi) da linha dentro do limite de Blaine; **o lado canadense (Surrey) NÃO MEDIDO** (Statistics Canada: 403) |
| `boat-encampment` | s51 P4 | 1 | NRCan CGNDB `JCPFF` (UNP, previouslyOfficial, 1974-03-11) | OGL – Canada: a linha da licença no crédito | 52.116667 N, −118.43333; a 85 m do BCGN 52160 (52°06'59"N 118°26'04"W); DENTRO do Kinbasket (OSM), 1,98 km da margem; NÃO é Mica Creek (CGNDB `JBOGU`, 15,2 km) |
| `arrowhead-bc-antiga` | s51 P2 | 1 | NRCan CGNDB `JDBYA` (UNP, official, 1988-11-09) | OGL – Canada: a linha da licença no crédito | 50.711111 N, −117.92083; a 84 m do BCGN 39855 (Locality, 'reinstated', 'N. end of Upper Arrow Lake'); em terra, 2,0 km ao NORTE da água de hoje (OSM e Landsat de 05/09/2024). A frase sobre a vila vai ao verificador-de-fatos (item 19) |

- O BC Geographical Names entra só como conferência (a licença dele é o Copyright da Província, fora da lista aprovada).
- Crédito na descrição: `Contains information licensed under the Open Government Licence – Canada. https://open.canada.ca/en/open-government-licence-canada` (já está acima).
- Para o redator e o verificador (s26): F042 não diz "Peace Arch", mas a proclamação do tratado (Lyndon B. Johnson, 16/09/1964; coletânea CSG West, F1,
  p. 41) termina com "Done at the International Peace Arch, Blaine, Washington", e os slides do Corps de 2013 (p. 10) dizem "Proclamation and Exchange
  of Diplomatic Notes at Peace Arch - 16 Sept. 1964". A camada não escreve o nome.

### As três entradas da mesa (`_media/base/mesa/`)

Landsat Collection 2 Level-2 (USGS, domínio público, sem crédito na tela), pelo Planetary Computer; 3952 × 2272 px (o quadro 3840 × 2160 mais a
sangria de 56 px), Web Mercator, norte para cima; a cor é a receita do canal. O `mesa-satelite.py --seco --sangria=56` dá `passa: true` nas três.

| entrada | arquivo | cenas Landsat | janela (miolo) | nuvem na janela (QA_PIXEL) | `--seco` |
|---|---|---|---|---|---|
| M-VALE | `landsat-m-vale-sangria56.png` (`10845383…`) | LC08 044/025 de **05/09/2024** (99,8 % do quadro); LC09 045/025 de 04/09/2024 só no canto noroeste | 50.60 N, 117.90 W; 120 × 67,5 km, 31,25 m/px | 0,74 % marcada, mais no terço leste (as Selkirk); 39 % dela no mesmo pixel em 23/08/2025 (gelo e neve fixos, não nuvem); nenhuma nuvem na prévia de 1/4 | ganho 2,11; crédito 10,53:1 (8,1:1 na mesa inteira) |
| M-FOZ | `landsat-m-foz-sangria56.png` (`825acae4…`) | LC09 046/028 de **09/07/2024** | 45.60 N, 122.70 W; 60 × 33,8 km, 15,6 m/px (reamostrado) | 0,003 % | ganho 1,58; crédito 9,14:1 |
| M-CAPITOLIO | `landsat-m-capitolio-sangria56.png` (`90fbf073…`) | LC08 015/033 de **10/09/2024** | 38.89 N, 77.01 W; 40 × 22,5 km, 10,4 m/px (reamostrado) | 0,03 % | ganho 1,63; crédito 9,59:1 (8,91:1 na mesa inteira) |

- A cena de 11/07/2024 do par cobre 99,6 % da janela M-VALE, mas tem 5,5 % de nuvem e 10 % de sombra dentro dela: não serviu.
- O lugar conferido sem olhar: o Arrow (OSM) cai na água turquesa (índice de cor 0,48 contra 0,00 da terra; o polígono deslocado 1 km perde); a linha do
  Columbia (OSM) cai na água escura (luma 39 contra 92 a 3 km); a água do DC (TIGER AREAWATER) cai na água (luma 58 contra 94; deslocada 500 m a leste
  ou a oeste, 67 e 70).
- Créditos para a descrição: os de cada `.png.json` (`credito_descricao`), "Landsat imagery courtesy of the U.S. Geological Survey."

## No art: a água escura de The Dalles (13/11/2026, ~04h)

> O pedido: a Sala de controle, no `art`, pela regra "A água escura nos mapas do porto" (`marca/identidade.md`; Lucas, 08/10/2026), depois do relato
> do mapista (`out/rio-columbia/_tmp/arte-1/M5.md`, s36: remendos de borda reta na água do Columbia em The Dalles, que o teto de nível não tira).
> A fonte é o item `_media/geo/agua-osm-the-dalles.json` e o bloco `rodada_art_agua_the_dalles` do JSON; o relato:
> `out/rio-columbia/_tmp/pesquisa-geo/relato-agua-the-dalles.md`. (Esta seção foi escrita à mão; o `geo_pauta_md.py` não a gera.)

| camada | cena | features | fonte | licença e crédito | o lugar, conferido |
|---|---|---|---|---|---|
| `agua-osm-the-dalles` (`ee53af8a…`, 438 KB) | s36 | 2: `rio` (o Columbia, 26 polígonos, 98 buracos) e `outras_aguas` (216 lagos, lagoas e afluentes perto da câmera) | OSM pela Overpass (relation/104541, Lake Bonneville 19258775, Lake Celilo 5673968, Lake Umatilla 7112634 e 5 eclusas; estruturas tiradas como terra); na janela de Dallesport (margem de Washington, 45,6145–45,6610 N), somado o TIGER/Line 2025 AREAWATER | ODbL: "© OpenStreetMap contributors", que a linha da MapTiler já leva; o TIGER é domínio público, sem crédito. Nada novo na tela | a linha do Columbia do OSM fica 99,92 % dentro da água (fora só na barragem e na ponte de The Dalles); a estação USGS 14105700 em terra, a 15 m da borda; as barragens de The Dalles e John Day (NID) e Bonneville, em terra |

- **Recorte:** a caixa −122.10, 45.36, −120.15, 46.15, a união dos quadros da s36 com zoom ≥ 10,5 (de 2,03 s ao fim), com folga de 4,7 a 7,3 km. O rio
  cobre inteiro todo quadro com zoom ≥ 10,5; as outras águas, todo quadro com zoom ≥ 12. Abaixo disso o mapista apaga a camada pelo zoom (sugestão: o rio
  de 0 em z 10,5 a 1 em z 11; as outras águas de 0 em z 11,5 a 1 em z 12).
- **Estruturas como terra:** a barragem e a ponte de The Dalles, John Day, Hood River, Sam Hill, Bridge of the Gods, as pontes ferroviárias, píeres, quebra-mares
  e ilhas do OSM (a ponte em linha com a tag `width` ou a regra declarada: 3,65 m por faixa + 2 × 2 m; 6 m por via férrea; 3 m de passarela).
- **A janela de Dallesport:** ali o OSM traça a margem por uma reta que fica de 10 a 50 m dentro da água (entre 45,624 e 45,642 N); o TIGER segue a margem do
  satélite. Na janela, a água é OSM ∪ TIGER, só do lado leste da linha do rio; nas pontas as duas margens concordam a 1,5 m e 0,2 m.
- **Encaixe no satélite** (3 quadros da s36 do mapista, 7,5, 25 e 43,5 s, ~6 m por px de 4K, sem tile): mediana do desvio de −3,5 a −1,5 m, mediana absoluta
  1,07–1,27 px, p90 3,5–3,9 px, 71–74 % dos perfis a até 2 px. Sobra água crua num lugar só, perto de 45,646 N (~210 m com 2,5 a 5 px; nem o OSM nem o
  TIGER chegam à margem ali). O tom cobre terra por 3,5–4,5 px (20–27 m) em trechos de 120 a 480 m onde o OSM traça a margem pela beira de fora da praia e
  do enrocamento: o mesmo caso aceito no vídeo 2.
- **Prova:** `out/rio-columbia/_tmp/pesquisa-geo/agua-the-dalles/prova-agua-the-dalles.jpg` (o satélite como está e com a camada pintada, a 25 e 43,5 s).
- **Pedidos:** 2 ao Overpass respondidos (água e estruturas) e 2 com 502 "at capacity" na das estruturas, repetida com recuo; o robots.txt e a página
  `/copyright` do openstreetmap.org (licença lida hoje); 2 zips do TIGER no www2.census.gov.
- **Portões:** `validar-contrato pauta-pesquisa` sai 0. `qc-procedencia rio-columbia` sai REPROVADO por 3 arquivos que não são desta camada:
  `_media/base/mesa/mesa-m-capitolio.png`, `mesa-m-foz.png` e `mesa-m-vale.png` (gravados no art às 02:33–02:34, sem entrada no `_PROCEDENCIA.json` da
  pasta). O portão não conta `_media/geo/`.
