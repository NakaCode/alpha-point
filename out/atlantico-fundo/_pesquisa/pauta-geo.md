# Vídeo 4 (atlantico-fundo) — a geometria e o fundo (pesquisa-geo, parte B, 28/10/2026)

Registro de cada camada de `out/atlantico-fundo/_media/geo/` e das bases do fundo `out/atlantico-fundo/_media/base/gebco-*`.
O contrato é o `pauta-geo.json` ao lado: 47 itens (40 geometrias, 6 bases e o perfil da s75), que atendem os 41 ids e os 165 pedidos do
`needs.geo` do espelho (sha256 `34849733…`, o re-espelho de 28/10/2026 em que a s75 virou desenho), com 3 bloqueios parciais. Tudo em WGS84, lon/lat em graus decimais. Cada
geometria tem o `.js` que a cena carrega (`window.__GEO[slug]`); cada base tem o `.js` com `window.__BASE_GEBCO[slug]`
(imagem e os 4 cantos, em Web Mercator) e um `.json` com a procedência inteira. O relato da tarefa está em
`out/atlantico-fundo/_tmp/pesquisa-geo/relato.md`. Os scripts: `_pesquisa/geo_fundo.py` (GEBCO), `_pesquisa/geo_superficie.py`
(o resto), `_pesquisa/geo-gravar.mjs` (o `gravarGeo` da pré-v1) e `_pesquisa/geo_pauta.py` (este registro).

## O fundo: a GEBCO 2026

- **Fonte:** a GEBCO_2026 Grid (15", publicada em abril de 2026), pelo app oficial de recorte `download.gebco.net` (o `robots.txt`
  libera tudo), em Esri ASCII, que o numpy lê: Caribe 75–58°W × 14–26°N, Sandwich do Sul 36–18°W × 63–51°S e Marianas
  138–150°E × 9–25°N, mais a TID 2026 do Caribe e do sul e a TID 2019 do sul. Um pedido (a cesta `GEBCO_28_Oct_2026_c78af7c17e66`),
  um zip de 318.994.691 bytes (sha256 `ab97d2ae…`), em `_tmp/pesquisa-geo/baixado/gebco-cesta-1/`, fora do git.
- **A vista do mundo e do Atlântico:** o WMS oficial da GEBCO (`wms.gebco.net/mapserv`, sem `robots.txt`), em EPSG:3857: a camada
  `GEBCO_LATEST` (relevo com a cor da própria GEBCO) e a `GEBCO_LATEST_TID` (o que foi medido). O GetCapabilities diz: "It is
  intended that this Web Map Service (WMS) provides access to data from GEBCO's latest bathymetric grid in the form of imagery for use
  in your applications". Os 4 pedidos estão no `http-pedidos.log`.
- **Licença:** domínio público (GEBCO Grid terms of use, cópia local de 26/10 em `midia/atlantico-fundo/fontes/fa-gebco-terms-of-use.txt`
  e o PDF do próprio zip): copiar, adaptar e uso comercial livres; reconhecer a fonte; não sugerir aval do GEBCO, da IHO nem da IOC;
  não serve para navegação.
- **Crédito:** na tela, `GEBCO Compilation Group (2026) GEBCO 2026 Grid` (a 60 px, com a MapTiler e a Marine Regions na mesma faixa);
  na descrição, "GEBCO Bathymetric Compilation Group 2026 (2026). The GEBCO_2026 Grid … doi:10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa".
  Nas imagens do WMS, a forma que ele pede: "Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026
  Grid (doi:…)".
- **As curvas** saem da grade por marching squares (nos centros das células, sela pela média), nunca à mão. O limiar de cada uma foi
  escolhido DEPOIS de medir os candidatos (6.000, 6.500, 7.000, 7.500 e 8.000 m), pelos pontos que cada curva contém e pelo
  comprimento; o porquê está na `fidelidade` de cada item.

| fossa | isóbata | o que mede | os pontos |
|---|---|---|---|
| Porto Rico, inteira | 7.000 m | 791 km de leste a oeste (F20: ~810 km); 35.835 km² | dentro: o anel, a estimativa de 2019, o Blake, o Challenger, a crista da lista, Lyman; fora: o Dive 09, a 3,1 km (a parede sul) |
| Porto Rico, o trecho mais fundo | 8.000 m | 432 km (68,46–64,34°W); 7.471 km² | dentro: o anel, a estimativa de 2019, o Blake, Lyman; fora: o Challenger e a crista |
| Porto Rico, metade leste | 7.000 m a leste de 64,754°W | 8.601 km², ao norte de Anegada | corte reto declarado no meio do eixo |
| Sandwich do Sul | 6.000 m, 2 partes | 54,53°S a 60,70°S (F73: 54°40'S a 60°40'S); 48.553 km² | dentro: o Meteor e o ponto ao sul de 60°S |
| Marianas (vista do mundo) | 7.000 m, 4 partes | o arco até 25°N | o Challenger Deep dentro |

- Por que não a de 6.000 m em Porto Rico: ela e a de 6.500 vazam para fora da janela (juntam-se ao Atlântico); a de 7.500 deixa o
  Challenger fora; a de 8.000 é só o trecho mais fundo. **A curva de 8.400 m do F19 não existe na grade de 15"**: abaixo de 8.400 m há
  79 células soltas (ruído), por isso o trecho mais fundo é a de 8.000 m.

### As bases do fundo (`_media/base/gebco-*`)

| arquivo | atende | o que é | px | sha256 |
|---|---|---|---|---|
| `gebco-caribe.png` | gebco-2026-caribe | relevo sombreado, 15–24,5°N × 72,5–59°W, terra transparente | 3240×2426 | `92ca67cf3c6a…` |
| `gebco-sandwich-do-sul.png` | gebco-2026-sandwich-do-sul | relevo sombreado, 53–61,5°S × 33–20°W, terra transparente | 3120×3791 | `638ae523eafc…` |
| `gebco-mundo-relevo.jpg` | globo-gebco-2026 | o mundo (±85,05°), WMS `GEBCO_LATEST`, cor da GEBCO | 4096×4096 | `5f769efc761f…` |
| `gebco-atlantico-relevo.jpg` | globo-gebco-2026 | 100°W–20°E × 66°S–72°N, WMS `GEBCO_LATEST` | 2530×4096 | `2c6e9845908d…` |
| `gebco-mundo-medido.png` | gebco-2026-tid | máscara branca do que a GEBCO marca como medido (TID 10–17 e 44), o mundo | 4096×4096 | `40d945739794…` |
| `gebco-atlantico-medido.png` | gebco-2026-tid | a mesma máscara, o Atlântico | 2530×4096 | `3dbaa6074d55…` |

- As de grade (Caribe e Sandwich) estão em **Web Mercator** (as linhas igualmente espaçadas em y de Mercator, como a fonte de imagem
  do MapLibre pede), com os 4 cantos no `.js`. O sombreamento é Horn (azimute 315°, altura 45°) com o espaçamento real das células e
  **exagero vertical ×4 só na sombra** (nenhuma forma muda; se a Sala quiser ×1, o `geo_fundo.py` refaz). A cor é uma **proposta**:
  uma rampa de profundidade a partir do `--fundo` (#0E1726), mais clara no raso; a cor final é do diretor de arte e do mapista. A terra
  (≥ 0 m na GEBCO) fica transparente: a MapTiler mostra a terra. Conferidas no olho, com as costas do Census e do NE por cima.
- As do WMS vêm com a cor da própria GEBCO (azuis, verdes e marrons): para o tratamento do canal, o mapista as escurece na pintura da
  camada. A máscara do medido também marca células em **terra** (a Antártida, de sondagem sob o gelo): só vale no mar. O mundo e o
  Atlântico foram conferidos contra os 5 pontos da Five Deeps, o Meteor, a linha de 60°S e a fossa das Marianas: caem no lugar.
- **O `_PROCEDENCIA.json` de `_media/base/` é da parte A** (as bases de satélite da mesa): não o editei. As 6 entradas das bases GEBCO
  estão prontas para juntar em `_tmp/pesquisa-geo/_PROCEDENCIA-gebco-para-juntar.json`; sem elas, o `qc-procedencia` reprova as 6.

## As camadas

`DP` = domínio público. A coluna de licença diz se a tela leva crédito; o texto de cada crédito está no `credito_tela` do item.

| arquivo | atende (`needs.geo`) | data do dado | licença / tela | feat. | sha256 |
|---|---|---|---|---|---|
| `aguadilla-costa-ponto.json` | aguadilla-costa | F04 (Census 2023 1:500.000); conferido no cb_2025 em 28/10/2026 | fato; sem crédito | 1 | b09cc603116c |
| `aguadilla-municipio.json` | aguadilla-costa | Census Cartographic Boundary Files 2025 (1:500.000) | DP; sem crédito | 1 | c065f7f919a5 |
| `anegada.json` | anegada | OSM, base de 2026-10-28T17:33:05Z | ODbL; crédito | 1 | d9b48e549bb4 |
| `anegada-costa-norte.json` | anegada-costa-norte-blocos | OSM, base de 2026-10-28T17:33:05Z | ODbL; crédito | 1 | cb2c4fb1cfeb |
| `challenger-deep.json` | fossa-marianas-challenger-deep | S01 (2021), Tabela 1 | fato; sem crédito | 1 | 2c6b5d473cec |
| `cinco-oceanos-five-deeps.json` | cinco-oceanos-five-deeps | S01 (2021), Tabela 1 | fato; sem crédito | 5 | 6d02bccb5c49 |
| `costa-dominicana-la-altagracia.json` | costa-dominicana-la-altagracia | Natural Earth v5.1 (2022) | DP; sem crédito | 1 | 4515ad543dde |
| `costa-oeste-porto-rico.json` | costa-oeste-porto-rico | Census Cartographic Boundary Files 2025 (1:500.000) | DP; sem crédito | 1 | aa72971732c2 |
| `estimativa-2019-stewart-jamieson.json` | estimativa-2019-stewart-jamieson | S02 (2019) | fato; sem crédito | 1 | 7442e7163fbb |
| `fossa-marianas.json` | fossa-marianas-challenger-deep | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito | 1 | fe3c51f19d80 |
| `fossa-porto-rico.json` | fossa-porto-rico | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito | 1 | c7ab743f5be6 |
| `fossa-porto-rico-leste.json` | fossa-porto-rico-leste | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito | 1 | dfc70bcbee99 |
| `fossa-porto-rico-trecho-mais-fundo.json` | fossa-porto-rico-trecho-mais-fundo | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito | 1 | fe65ab325dc9 |
| `fossa-sandwich-do-sul.json` | fossa-sandwich-do-sul | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito | 1 | b82d5796813c |
| `ilhas-sandwich-do-sul.json` | ilhas-sandwich-do-sul | Natural Earth v5.1 (2022) | DP; sem crédito | 1 | d9cb8a9fed61 |
| `ilhas-virgens-britanicas.json` | ilhas-virgens-britanicas | Natural Earth v5.1 (2022) | DP; sem crédito | 1 | dae25f8a2e20 |
| `levantamento-fossa-sandwich-tid.json` | levantamento-2019-fossa-sandwich | GEBCO_2019 TID (abril de 2019) × GEBCO_2026 TID (abril de 2026) | DP; crédito | 2 | ababe67f4456 |
| `levantamento-usgs-2002-2003.json` | levantamento-usgs-2002-2003 | USGS OFR 2006-1210 (cruzeiros de set/2002, fev–mar/2003 e ago–set/2003) | DP; sem crédito | 3 | e434f5886a80 |
| `limite-placas-norte-americana-caribe.json` | limite-placas-norte-americana-caribe | USGS (serviço de 2026) sobre Bird (2003) PB2002 | DP; sem crédito | 7 | 788e945ad511 |
| `linha-do-equador.json` | linha-do-equador | linha de coordenada | n/a; sem crédito | 1 | 81062411ff1a |
| `mar-ao-norte-de-porto-rico.json` | mar-ao-norte-de-porto-rico | Census 2025 + GEBCO_2026 | DP; crédito | 1 | 8193d4d5b6bb |
| `mergulho-ex1502-dive09.json` | mergulho-ex1502-dive09 | NOAA EX1502 L3 Dive 09 (F68) | fato; sem crédito | 1 | 8c84b0e4cecc |
| `meteor-deep.json` | meteor-deep | S01 (2021), Tabela 1 | fato; sem crédito | 1 | 14c99af14715 |
| `milwaukee-deep-lista-antiga.json` | milwaukee-deep-lista-antiga | S02 Tabela 1 (GEBCO Gazetteer antigo) | fato; sem crédito | 1 | 9d899d2971e2 |
| `milwaukee-deep-lyman-1954.json` | — | S02 Tabela 1 (Lyman 1954; Theodore N. Gill, 1952) | fato; sem crédito | 1 | 5d565e05108b |
| `mount-michael-saunders.json` | mount-michael-saunders | Natural Earth v5.1 (2022) | DP; sem crédito | 2 | 76d21b4a1c9e |
| `oceanos-ne.json` | oceano-atlantico, oceano-pacifico, cinco-oceanos-five-deeps | Natural Earth v5.1 (2022) | DP; sem crédito | 7 | 927f9a973b06 |
| `paralelo-60s.json` | paralelo-60s | linha de coordenada (IHO Res. 02/2023, F81) | n/a; sem crédito | 1 | ca6cfc6bda1c |
| `passagem-de-mona.json` | passagem-de-mona | Natural Earth 10m + Census 2025 | DP; sem crédito | 1 | f303e81f9ca8 |
| `ponto-mais-fundo-atlantico.json` | ponto-mais-fundo-atlantico | S01 (2021), Tabela 1 | fato; sem crédito | 1 | 536506cba0ca |
| `porto-rico.json` | porto-rico, porto-rico-relevo | Census Cartographic Boundary Files 2025 (1:500.000) | DP; sem crédito | 1 | 34112f863742 |
| `republica-dominicana.json` | republica-dominicana | Natural Earth v5.1 (2022) | DP; sem crédito | 1 | 9556de006834 |
| `rupturas-wei-2024.json` | fossa-porto-rico-leste | Wei, ten Brink & Atwater (2024), Tabela 2 | CC BY 4.0; crédito | 4 | a424d2e8e0cd |
| `san-juan.json` | san-juan | Natural Earth v5.1 (2022) | DP; sem crédito | 1 | ba73d41e3544 |
| `sondagem-blake-1883.json` | sondagem-blake-1883 | relatório do USC&GS de 1883, p. 46 (S11) | fato; sem crédito | 1 | ff012d8c8974 |
| `sondagem-challenger.json` | sondagem-challenger | IHR 1936 (S12) | fato; sem crédito | 1 | 7a8523dc69dd |
| `zee-eua-porto-rico.json` | zee-eua-porto-rico | Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026 | CC BY 4.0; crédito | 1 | 000b78a1c36a |
| `zee-limites-eua-rd.json` | zee-eua-porto-rico, zee-republica-dominicana | Marine Regions, eez_boundaries, WFS de 28/10/2026 | CC BY 4.0; crédito | 3 | 34a23eb22be8 |
| `zee-republica-dominicana.json` | zee-republica-dominicana | Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026 | CC BY 4.0; crédito | 1 | 68d9df2a6d99 |
| `zee-sobreposicao-eua-rd.json` | zee-eua-porto-rico, zee-republica-dominicana | Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026 | CC BY 4.0; crédito | 1 | da5b905136a9 |
| `gebco-caribe.png` | gebco-2026-caribe | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito |  | 92ca67cf3c6a |
| `gebco-sandwich-do-sul.png` | gebco-2026-sandwich-do-sul | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 | DP; crédito |  | 638ae523eafc |
| `gebco-mundo-relevo.jpg` | globo-gebco-2026 | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 (pelo WMS 'LATEST', que hoje é a 2026) | DP; crédito |  | 5f769efc761f |
| `gebco-atlantico-relevo.jpg` | globo-gebco-2026 | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 (pelo WMS 'LATEST', que hoje é a 2026) | DP; crédito |  | 2c6e9845908d |
| `gebco-mundo-medido.png` | gebco-2026-tid | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 (pelo WMS 'LATEST', que hoje é a 2026) | DP; crédito |  | 40d945739794 |
| `gebco-atlantico-medido.png` | gebco-2026-tid | GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026 (pelo WMS 'LATEST', que hoje é a 2026) | DP; crédito |  | 3dbaa6074d55 |

## Costas, fronteiras e ilhas

- **Porto Rico** (`porto-rico`): a união dos 78 municípios do Census Cartographic Boundary Files 2025, 1:500.000 (`cb_2025_us_county_500k`,
  sha256 `aa976c00…`), 16 partes: a ilha principal (8.732 km²), Vieques (133), Mona (55), Culebra (27), Desecheo e ilhotas;
  8.956 km² no todo (o Census dá 8.868 km² de terra: o 1:500k generaliza a costa, +1 %). É a mesma família de costa das contas do
  dossiê (S55). Serve também o `porto-rico-relevo` (s37): o relevo da ilha é o terrain-rgb-v2 da MapTiler, do mapista.
- **Aguadilla** (`aguadilla-municipio`, GEOID 72005) e **o ponto das 83 mi** (`aguadilla-costa-ponto`, 18,5130°N, 67,1145°W, F04):
  **conferido** no cb_2025: o ponto da costa mais perto do anel fica a 2,7 m do ponto do F04, em Aguadilla, a 134,32 km = 83,47 mi
  (Vincenty, WGS84).
- **A costa oeste** (`costa-oeste-porto-rico`): a costa da ilha principal em Aguadilla, Aguada, Rincón, Añasco e Mayagüez, 58,9 km,
  trecho declarado.
- **República Dominicana** (NE 10m, tol 0,002°), **British Virgin Islands** (NE 10m) e **Anegada** (OSM, way/158313299, 592 vértices,
  40,0 km²; o NE tem 9 vértices). Anegada é britânica: nunca "U.S. island" (N24). O OSM pede `© OpenStreetMap contributors`, que já está
  no crédito da MapTiler.
- **A costa norte de Anegada** (`anegada-costa-norte`): **parcial**. É a costa norte inteira (19,9 km = 12,4 mi). O trecho de ~10 km
  do F51 ("de Bones Bight e Windlass Bight, a oeste, a Warner") não está localizado (bloqueio abaixo).
- **As Sandwich do Sul** (`ilhas-sandwich-do-sul`): as 9 partes do NE (SGS) a leste de 29°W, sem a Geórgia do Sul; 356 km de norte a
  sul (F86: ~350 km). Só o nome, sem bandeira e sem dono.
- **Mount Michael** (`mount-michael-saunders`): o polígono da ilha Saunders (NE, 38 km²) e um ponto no **centro da ilha**, DECLARADO
  (57,780°S, 26,448°W): o cume não foi lido.
- **San Juan** (NE, populated places): 116,7 mi do anel (F17: ~116 mi). Só ancora a foto da ISS; nunca a origem das 83 mi.
- **A costa dominicana** (`costa-dominicana-la-altagracia`): o ponto da costa do NE 10m mais perto do anel, 18,65656°N, 68,35619°W,
  **conferido**: 160,42 km = 99,68 mi (F16: 160,4 km).

## As zonas econômicas (Marine Regions)

- **Fonte e licença:** o WFS da VLIZ (`geo.vliz.be/geoserver/MarineRegions/wfs`), Maritime Boundaries v12; **CC BY 4.0** pela página de
  licença lida em 28/10/2026 ("licensed under CC-BY since Maritime Boundaries version 11 (2019)"), com a citação "Flanders Marine
  Institute (2026): MarineRegions.org. Available online at www.marineregions.org. Consulted on 2026-10-28." A VLIZ avisa: "The data
  has no legal value whatsoever". Zona econômica não é território (N32).
- `zee-eua-porto-rico` (MRGID 33179), `zee-republica-dominicana` (MRGID 8409), **`zee-sobreposicao-eua-rd`** (MRGID 48982, "Overlapping
  claim: United States (Puerto Rico) / Dominican Republic", 18.350 km²) e `zee-limites-eua-rd` (as linhas 3344, 3602 e 2041).
- Onde cai cada ponto: o anel, o Blake e a crista da lista na zona dos EUA; a estimativa de 2019 e o ponto de Lyman na dominicana;
  o Challenger (65°07'W) em nenhuma das três (deve ser a zona das Ilhas Virgens dos EUA, que não foi baixada).
- **Aviso:** o anel fica a **2,6 km (1,6 mi)** da área de reivindicação sobreposta, cuja borda é uma "Unsettled median line" (linha 3602,
  fonte "Limits in the Seas No. 130"). A fronteira direta EUA–RD (a 3344, "Median line" da VLIZ) só existe ao sul de 18,88°N. Ao lado
  do anel, a linha a acender é a 3602, e ela separa a zona dos EUA da sobreposição, não da zona dominicana. Do trecho de 8.000 m,
  4.326 km² ficam na zona dos EUA, 1.671 na dominicana e 549 na sobreposição.

## Pontos do dossiê

| arquivo | coordenada | fonte | do anel |
|---|---|---|---|
| `ponto-mais-fundo-atlantico` | 19,712°N, 67,311°W | F10 (S01 Tabela 1) | — (o ANEL) |
| `estimativa-2019-stewart-jamieson` | 19,613°N, 67,847°W | F15 (S02) | 57,3 km (35,6 mi) a oeste |
| `milwaukee-deep-lyman-1954` | 19,6°N, 68,31667°W | S02 Tabela 1 (Lyman 1954) | 106,2 km (66,0 mi) a oeste; sem needs próprio |
| `sondagem-blake-1883` | 19°40'50"N, 66°23'40"W | F23 (S11) | 96,2 km (59,75 mi) a leste |
| `milwaukee-deep-lista-antiga` | 19°35'N, 66°30'W | F29 (S02 Tabela 1) | 86,2 km (53,6 mi) a leste |
| `sondagem-challenger` | 19°42'N, 65°07'W | F22 (S12) | 230,1 km (143,0 mi) a leste |
| `mergulho-ex1502-dive09` | 19°09'N, 65°24'W | F68 | 210,1 km (130,6 mi) a leste |
| `meteor-deep` | 55,230°S, 26,173°W | F75 (S01 Tabela 1) | 9.170,3 km (5.698 mi) |
| `challenger-deep` | 11,369°N, 142,587°E | S01 Tabela 1 | — |
| `cinco-oceanos-five-deeps` | os 5 da Tabela 1 de S01, um por oceano | S01 | sem o nome dos outros quatro |

- Nenhum ponto foi movido: são as coordenadas das fontes, em decimal. O do Meteor nunca é o 55,323°S, 26,294°W (C03).
- A GEBCO_2026 nos pontos (só para conferir, nunca para a tela): anel 8.373 m; estimativa de 2019 8.359; Lyman 8.369 (S02: 8.370);
  Blake 8.073; crista da lista 7.567 (S02: 7.450, numa grade de 60 m); Challenger 7.615; Dive 09 5.993 (no alfinete, a coordenada arredondada ao minuto, numa encosta íngreme: o 3×3 vai de 5.700 a 6.188 m;
  no ponto de entrada na água do resumo oficial, 19°09,053'N 65°24,430'W, a célula dá 6.179 m; o robô desceu a 5.999,7 m e não chegou
  ao fundo, S32); Meteor 8.258 (o mínimo do
  recorte); Challenger Deep 10.925.

## Regiões e linhas declaradas

- `mar-ao-norte-de-porto-rico`: a faixa entre a costa norte da ilha principal e a borda sul da fossa de 7.000 m, nas longitudes da ilha,
  de 18,42°N para cima; 14.295 km². Declarada (não há polígono lido).
- `passagem-de-mona`: o mar entre a costa da Hispaniola (NE) e a de Porto Rico (Census), de 17,95°N a 18,6°N; Mona e Desecheo como
  buracos; 10.529 km². Os limites norte e sul são escolha da pesquisa: declarar.
- `fossa-porto-rico-leste` + **`rupturas-wei-2024`**: as áreas de ruptura não saem mais da figura de Kilbourne. Saem da **Tabela 2 de Wei
  et al. 2024** (cópia local, CC BY 4.0): a projeção na superfície de cada plano de falha (o ponto da tabela é o centro da borda de baixo;
  a borda de cima fica a largura × cos(mergulho) na direção oposta ao mergulho). Os dois cenários que alagam todos os blocos (S18): CDE
  M8.45 (megaempuxo, segmentos C, D e E, 255 km, 21.850 km²) e N M8.17 (falha normal ao norte da fossa, 2.977 km²). São MODELO, não
  ruptura observada; centradas em Anegada em longitude, 29 km ao norte dela. Crédito: "Fault model: Wei et al. (2024)" e o DOI na descrição.
- `limite-placas-norte-americana-caribe`: o serviço de limites de placas do USGS (a partir de PB2002, Bird 2003), 7 segmentos NA–CA, uma
  linha de escala global (31 vértices em 1.598 km); 725 km dela correm dentro da fossa de 7.000 m. Domínio público (USGS); a citação de
  Bird 2003 na descrição.
- `levantamento-usgs-2002-2003`: as **trilhas** do navio Ronald H. Brown nos 3 cruzeiros (USGS OFR 2006-1210, shapefiles de navegação),
  tol 0,002°. A área coberta pelo multifeixe não é polígono lido; a grade combinada do OFR vai de 69,70 a 61,50°W e de 16,36 a 22,69°N.
- `levantamento-fossa-sandwich-tid`: dentro da fossa de 6.000 m (48.551 km²), as células de medida direta (TID 10–17) da GEBCO_2019 e
  as que só aparecem na GEBCO_2026. **Na GEBCO_2019, 89,0 % da fossa não tinha medida direta** (o F78 diz ~91 %); na GEBCO_2026, 41,2 %.
  O "novo depois de 2019" (23.323 km²) junta todos os levantamentos entregues à GEBCO até 2026, não só o da Five Deeps (15.045 km²
  novos): nunca rotular essa área como "o levantamento de 2019". Contornos de célula, dentes de 15".
- `oceanos-ne`: as 7 áreas de rótulo de oceano do Natural Earth (não são limites da IHO). `paralelo-60s` e `linha-do-equador`: linhas de
  coordenada, 721 vértices, retas em Mercator.

## Bloqueios e o que ficou NÃO CONFERIDO

1. **O trecho de ~10 km da costa norte de Anegada (F51, s45).** Bones Bight, Windlass Bight, Soldier Point e Warner não têm coordenada em
   fonte lida (Kilbourne 2025 e Wei 2024, cópias locais) nem estão no OSM (consulta de 28/10/2026). Entregue: a costa norte inteira.
   Destrava: a figura S1 do suplemento de Kilbourne 2025, ou Atwater et al. 2017, no navegador do app.
2. **O cume do Mount Michael (s65, s66).** As páginas da NASA não dão coordenada; o Global Volcanism Program pediu verificação (A08).
   Entregue: o centro da ilha Saunders, declarado. Destrava: o GVP (vn=390090) no navegador do app.
3. **A área do levantamento de 2002–2003 (s31, s33).** Só as trilhas e os limites da grade combinada. A área sairia da grade combinada
   do OFR lida como máscara: código novo, não feito.
4. A Passagem de Mona e o "mar ao norte de Porto Rico" são faixas DECLARADAS, com os limites escritos.

## Avisos para a Sala e para o verificador

- **A nota do alfinete do Dive 09, corrigida em 28/10/2026** (laudo `roteiros/atlantico-fundo/qc-roteiro/f132-reverificacao-2026-10-28.laudo.md`,
  achado 5). Ela dizia "a parede sul a 5.999,7 m", como se a parede estivesse a essa profundidade; quem estava a 5.999,7 m era o robô. Agora:
  "o mergulho junto à parede sul: o robô desceu a 5.999,7 m e voltou sem chegar ao fundo (S32: 'Bottom Time: N/A')". O rótulo
  (`2015 · NOAA ROBOT`) e a geometria não mudaram; a camada passou de `b4804cd6…` a `8c84b0e4…`, regravada pelo `geo-gravar.mjs`.
- **A GEBCO não dá o "mais fundo".** Na Fossa de Porto Rico, a GEBCO_2026 tem 810 células mais fundas que 8.383 m; a mais funda,
  8.824 m, fica em 19,877°N, 65,235°W (TID 11, multifeixe), cercada de 8.400–8.500 m: ruído de linha de sonar. Nenhum número de tela
  sai da grade; o medidor usa os números do dossiê.
- **"U.S. waters" ao lado de uma linha não acertada:** acima, nas zonas econômicas.
- **F75:** os 9.195 km do dossiê são esféricos (haversine, R = 6.371 km); a geodésica no WGS84 dá 9.170,3 km (5.698 mi). "About 5,700
  miles" vale nos dois.
- **F78** conferido pela própria TID da GEBCO_2019 (89,0 %), e **F04, F16, F17, F20, F23, F29 e F86** conferidos pela geometria (acima).

## O mergulho 3D pela GEBCO (s02, s50) e o globo

- **Não é viável com o que o canal tem: pede uma prova nova** (`out/prova-gebco-3d/`, fora da produção). O MapLibre 4.7.1 aceita
  `raster-dem` (terrarium ou mapbox) só por tiles em URL, e o molde só monta o terreno do perfil (a MapTiler dá 0 m no mar). A cena abre
  por `file://`, onde o fetch de arquivo local é bloqueado: as tiles teriam de vir embutidas em `.js` e entrar por
  `maplibregl.addProtocol`. A grade existe e se codifica sem perda em Terrarium (`geo_gebco.terrarium`); faltam a pirâmide de tiles em Web
  Mercator, o protocolo, o exagero (×3–×5 para a fossa impressionar, declarado na tela, o que é regra nova do Lucas) e a base de cor por
  cima. O `portao-margens` dá NÃO MEDIDO em cena com relevo. Até a prova, s02 e s50 ficam planas, como o espelho diz.
- **O globo:** o canal não faz globo; s04, s48, s63, s64, s67, s68 e s70 usam `gebco-mundo-relevo` e `gebco-atlantico-relevo` em Mercator.

## Como refazer

Da pasta `out/atlantico-fundo/`, com o zip da GEBCO e os downloads em `_tmp/pesquisa-geo/baixado/`:
`python -X utf8 -B -P _pesquisa/geo_fundo.py` e `python -X utf8 -B -P _pesquisa/geo_superficie.py`; da raiz do canal,
`node out/atlantico-fundo/_pesquisa/geo-gravar.mjs`; de novo em `out/atlantico-fundo/`, `python -X utf8 -B -P _pesquisa/geo_pauta.py`.
Os pedidos de rede (um por vez, com o User-Agent do canal) estão em `_tmp/pesquisa-geo/http-pedidos.log`, pelos `_pesquisa/geo_http.py`
e `geo_baixar.py`.

<!-- perfil-s75: início (geo_perfil_s75.py --pauta; não editar à mão) -->
## O perfil do fundo da tela final (s75, "A · A descida")

- **A decisão:** o Lucas escolheu "A · A descida (Recomendado)" (28/10/2026, 14:5x, no chat da Sala; `roteiros/atlantico-fundo/decisoes-lucas.md`, "A tela final"). A s75 vira um corte vertical: a costa de Aguadilla à esquerda, o norte à direita, a câmera descendo até o anel.
- **O arquivo:** `_dados/perfil-aguadilla-anel.json` (sha256 `8118ef72580b…`), com a procedência inteira dentro, e os CSV `perfil-aguadilla-anel.csv`, `perfil-aguadilla-anel-continuacao-norte.csv` e `perfil-aguadilla-anel-recuo-em-terra.csv`. Fora de `_media/` (o conferente rodava). O id do `needs.geo`: `perfil-gebco-aguadilla-anel`.
- **A linha:** a geodésica WGS84 da costa (F04, 18,5130°N, 67,1145°W) ao anel (F10, 19,712°N, 67,311°W): 134,32 km = 83,46 mi, azimute 351,18°; 270 amostras a 499,3 m, cada uma com o valor CRU da célula de 15" que a contém (sem interpolar nem suavizar). Mais a **continuação declarada** ao norte (39,95 km) e um **recuo declarado** em terra (3,00 km), à parte.
- **No anel**, a grade dá 8.373 m (27.470 ft; vizinhança 3×3: 8.372–8.378 m), contra os 8.378 m (27.487 ft) do sonar de 2018. A mais funda da linha: 8.373 m em 134,32 km; na continuação, 8.375 m a 0,50 km além do anel. O número de tela continua o publicado; nenhum sai da grade.
- **As isóbatas dos mapas** (os polígonos de `_media/geo/`): 7.000 m em 101,13 km (62,84 mi), entra (mais fundo adiante); 154,54 km (96,03 mi), sai (mais raso adiante); 8.000 m em 122,31 km (76,00 mi), entra (mais fundo adiante); 142,75 km (88,70 mi), sai (mais raso adiante) (km desde a costa).
- **Ruído:** 0 amostra(s) marcada(s); no corredor de ±1 km, 1 célula(s) mais funda(s) que 8.378 m e 0 pico(s) de uma célula; a célula de 8.824 m fica a 218 km da linha.
- **O exagero vertical** de um corte 16:9: de ×8,0 a ×16,0, conforme o enquadramento; sugerido **×10**, declarado na legenda. O número é o do desenho que o editor-de-arte fizer.
- **Crédito:** `GEBCO Compilation Group (2026) GEBCO 2026 Grid` na tela; a citação com o DOI na descrição. Domínio público; não serve para navegação.
- **Como refazer:** `python -X utf8 -B out/atlantico-fundo/_pesquisa/geo_perfil_s75.py` e depois `… --pauta --visto` (da raiz do canal; sem rede). O `geo_pauta.py` da parte B preserva este item (o tipo é `perfil`).
<!-- perfil-s75: fim -->
