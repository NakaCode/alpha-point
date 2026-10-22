# As fontes de mapa do Alpha Point, e as licenças como o canal as leu

Levantamento de 22/10/2026, **só do disco** (nenhum pedido à rede). Junta o que o canal decidiu, usou e registrou
sobre base de mapa, geometria e relevo nos quatro vídeos (Juneau, Los Angeles, Zona do Canal, Peru). Não é regra
nova: a regra mora em `marca/identidade.md` §6 (base, geometria e dados aceitos) e `marca/midia.md` §7.3; a prova das
licenças, em `marca/acervos/` (lidas em 27/09/2026). **Licença muda:** antes do primeiro uso num vídeo, a página de
termos se relê na origem e se compara com o texto copiado.

Onde cada coisa foi lida (todos no disco):
- `marca/identidade.md` §6 ("Bases aceitas", "Bases, geometria e dados aceitos em 27/09/2026", "Não servem",
  mapa antigo como geometria, a água escura do OSM);
- `marca/acervos/5-dados-e-fronteiras.md` (§0, §1.6–1.13, §3, §5, §7) e `3-museus-bibliotecas-mapas.md` (itens 1 e 2);
- `C:/projetos/regie-v1/docs/CREDITO-DE-MAPA.md` e `MAPAS.md` (pré-v1, só leitura: termos da MapTiler, guia da OSMF,
  ferramentas `geo-*`);
- `out/prova-mapa/_pesquisa/base-landsat.py` e `.json`; `out/los-angeles/_tmp/agua/fonte.md` (osmdata);
- `out/*/_pesquisa/pauta-geo.md` e `.json`, `out/peru-agua/_tmp/pesquisa-geo/relato.md` e `http-pedidos.log`,
  `out/zona-do-canal/_pesquisa/pauta-geo.md` (créditos por rodada), `out/*/_pesquisa/maptiler-gasto.md`;
- `APRENDIZADOS.md`, itens 20–24 (geo da pré-v1), 55 (Overpass), 56 (prova sobre Landsat), 67 e 87 (robots.txt do host
  do arquivo); `canal.json` (`mapa.perfil`, `contato`).

---

## 0 · O que vale para todas

- **User-Agent do canal em todo pedido**, com o contato de `canal.json` › `contato` (`contato.naka@hotmail.com`). As
  ferramentas `geo-*` da pré-v1 o leem sozinhas e param sem ele; script do canal o põe à mão. Formas vistas no disco:
  `regie alpha-point (<contato>)` (base-landsat.py), `alpha-point-canal (<contato>)` (osmdata), `AlphaPointBot/1.0
  (<contato>)` (Landsat da s16). Nominatim e Overpass **exigem** que o programa diga quem é (`MAPAS.md`).
- **Um pedido por vez**, com espera entre eles: as `geo-*` esperam 1,1 s por serviço; no Overpass o canal usou ≥ 10 s;
  onde o robots.txt dá `Crawl-delay`, ele vale (geoBoundaries e StatCan: 10 s).
- **O robots.txt do host do ARQUIVO, lido antes do primeiro pedido, num comando separado** (`APRENDIZADOS.md` 67 e 87).
  O do site das páginas não basta: HydroSHEDS (`www.` livre, `data.` veta tudo), Smithsonian (`api.si.edu` × `ids.si.edu`).
  Leitura cortada ou que falhou = o host fica fora até ser lido. Robots com 404 (AWS S3, GIBS) não veta; com 403, o
  levantamento tratou caso a caso (LSIB: o Lucas baixa no navegador).
- **Recusa não se contorna** (403, 429, captcha, Cloudflare, "unusual traffic"): para naquele host pelo resto da tarefa,
  sem outro cliente nem outro cabeçalho. O que só abre no navegador vai ao navegador do app (Claude central) ou ao
  Lucas, que baixa e o canal confere o sha256.
- **Procedência de cada camada** em `out/<proj>/_pesquisa/pauta-geo.json` (fonte, URL, licença, data, sha256, bbox,
  cena, `exige_credito`), gravada pelas ferramentas `geo-*`; recorte e derivado herdam a licença da entrada, e camada
  sem procedência não se recorta (passe `--fonte`, `--licenca`, `--fonte-url`).
- **Crédito na tela × na descrição.** Na tela só o que a licença exige na tela (MapTiler; OSM quando o mapa é peça
  central; Google Earth; CC BY de dado que aparece). Domínio público vai sem crédito na tela, com o pedido da fonte na
  descrição. Texto de crédito de mapa: 56 px no palco 4K do vídeo 2 em diante (76 no Juneau), na faixa de crédito,
  `data-qc-credito="mapa"` (identidade §4.1).

---

## 1 · Tabela-resumo

| Fonte | O que dá | Licença | Na tela | Na descrição | De onde | Situação no canal |
|---|---|---|---|---|---|---|
| **MapTiler** (satellite-v2 + terrain-rgb-v2) | satélite e relevo em tiles | Termos Cloud, plano Flex (pago, conta do Lucas) | `© MapTiler © OpenStreetMap contributors`, o mapa inteiro | linha MapTiler + OSM (abaixo) | tiles pela chave `MAPTILER_KEY` (perfil `maptiler` da pré-v1) | **a base dos 4 vídeos**; gasto liberado por vídeo |
| **OpenStreetMap** (Overpass, Nominatim, osmdata) | rio, estrada, túnel, bairro, ponto, água do mar | ODbL 1.0 | `© OpenStreetMap contributors` (já vai na linha da MapTiler) | `openstreetmap.org/copyright` | `overpass-api.de`, Nominatim, `osmdata.openstreetmap.de` | usado nos 4 vídeos |
| **Natural Earth** | países, admin-1, costa, rios e lagos grandes, cidades, mares | domínio público | nada | opcional: "Made with Natural Earth." | acervo da pré-v1 + `obter-natural-earth.mjs` (commit fixado e sha256) | usado nos 4 vídeos |
| **HydroBASINS / HydroSHEDS v1** (WWF) | bacias e vertentes (nível 1–12) | licença própria da WWF (comercial ok, com ressalvas) | nada | o **Exhibit B** inteiro | `data.hydrosheds.org` (**robots `Disallow: /`**: só a pessoa, no navegador) | usado no Peru, aceito pelo Lucas em 22/10 |
| **HydroSHEDS v2** | rios e bacias a ~30 m, Américas | CC BY 4.0 | não decidido (CC BY) | Lehner et al. 2022 | o mesmo `data.hydrosheds.org` | aceito em 27/09; não usado |
| **Landsat (USGS)** | satélite de data escolhida, 30 m | domínio público | nada | linha da USGS com o ID da cena | Microsoft Planetary Computer, API `item/bbox`, sem conta | prova do Juneau; base da s16 do Peru |
| **Copernicus DEM** GLO-30/GLO-90 | relevo global (DSM) | licença livre Copernicus | nada (dado modificado) | frase fixa de DLR/Airbus + aviso de responsabilidade | AWS Open Data (`copernicus-dem-30m`/`-90m`), sem conta | usado (medida) na Zona e no Peru |
| **GEBCO 2026** | batimetria + terra, 15" | domínio público | nada | citação GEBCO | gebco.net (recorte, CEDA, OPeNDAP) | aceito; não usado |
| **ETOPO 2022** (NOAA NCEI) | relevo de terra e mar, 15"/30"/60" | CC0-1.0 | nada | citação NCEI + DOI | NCEI (GeoTIFF, NetCDF/THREDDS) | aceito; não usado |
| **USGS 3DEP** | relevo dos EUA (Alasca a 5 m) | sem restrição | nada | "Credit: U.S. Geological Survey" | `elevation.nationalmap.gov` (`exportImage`), TNM | usado para conferir em LA |
| **US Census TIGER / CB** | limites, costa, água, ruas dos EUA | domínio público | nada | "Source: U.S. Census Bureau, TIGER/Line Shapefiles <ano>" | `www2.census.gov` | usado em LA e no Juneau |
| **USGS topoView / HistoricalTopo, GNIS** | folhas topográficas antigas; nomes oficiais | domínio público | nada | crédito ao USGS (pedido) | TNM Access API, bucket `prd-tnm` | usado em LA e no Juneau |
| **Mapa antigo em domínio público** (Commons/LOC/NARA) | contorno histórico traçado | domínio público provado | nada | o crédito que a coleção pede | Commons pela API; NARA pela API v2 | Hamlin 1916 (LA), AMS 1947 e folhas de 1912/1936 (Zona) |
| **NOAA cartas históricas** | cartas náuticas antigas | CC0 / domínio público | nada | "Provided by NOAA Office of Coast Survey" | `historicalcharts.noaa.gov` (**robots veta tudo**) | só pelo navegador; não obtida em LA |
| geoBoundaries (gbOpen), StatCan, NRCan (OGL-Canada), LSIB, Marine Regions | limites, zonas marítimas | CC BY 4.0 / Open Licence / OGL / domínio público / CC BY | o da licença | idem | ver §7 | aceitos em 27/09; geoBoundaries recusado no Peru por pedir crédito novo |
| NASA Blue Marble, Sentinel-2, GIBS/Worldview, NAIP, GOES, Himawari, EOX 2016 | satélite | ver §8 | ver §8 | ver §8 | ver §8 | aceitos; não usados |
| Google Earth Timelapse / Studio | vídeo 4K da Terra; voos 3D | CC BY 4.0 / Geo Guidelines | **obrigatório, a cena inteira** | link e mudança | Google (Studio pede conta do Lucas) | aceitos; não usados |
| **Esri, Mapbox, EOX 2018–2025, GADM, UN SALB, Eurostat GISCO** | — | não comercial ou direito comprado | — | — | — | **não servem** |

---

## 2 · MapTiler (a base do canal)

- **O que dá:** `satellite-v2` (foto de satélite em mosaico) e `terrain-rgb-v2` (relevo, para câmera 3D), pelo perfil
  `maptiler` da pré-v1. O canal escolheu: `canal.json` › `mapa.perfil: "maptiler"` (Lucas, 26/09/2026: "será o
  maptiler"). É a base do vídeo inteiro, uma só por vídeo (`preparar-cena` recusa outra).
- **Licença:** Termos Cloud da MapTiler (`maptiler.com/terms/cloud/`, §5 "Permitted Usage", item *Limited Videos*):
  vídeo para canal de internet "with a maximum 100,000 subscribers". A conta é do Lucas, no **plano Flex**; o Flex cobre
  vídeo só até **100 mil inscritos**, depois disso é licença custom com a MapTiler. O plano gratuito é só não comercial.
  O pago dispensa o logo, não o crédito. Termos Cloud §7: não esconder nem apagar aviso de direitos. Conferido pelos
  mantenedores da Régie em 23/09/2026 (`docs/CREDITO-DE-MAPA.md` da pré-v1).
- **Crédito na tela:** `© MapTiler © OpenStreetMap contributors`, **durante todo o tempo em que o mapa aparece**, salvo
  acordo por escrito. Nenhum documento fixa tamanho: "visible and readable on any screen". O canal usa 56 px (76 no
  Juneau). O guia de atribuição da MapTiler diz "corner or credits", mas o contrato (Termos Cloud) manda a tela; vale o
  contrato. A forma longa do OSM fica por extenso.
- **Crédito na descrição:** `Mapas: © MapTiler (https://www.maptiler.com/copyright/) · © OpenStreetMap contributors —
  Open Database License (https://www.openstreetmap.org/copyright)`.
- **De onde:** tiles `/tiles/satellite-v2/…` e `terrain-rgb-v2` com a chave `MAPTILER_KEY` do arquivo de chaves da
  máquina. A chave só se lê por `src/lib/chaves.mjs` da pré-v1, **nunca** dentro do HTML da cena; os portões recebem a
  chave pela pré-carga `ferramentas/chaves-nos-portoes.mjs`.
- **Cuidados:**
  - **cobra por pedido**, sem cache: cada render, prova e rodada de portão com a pré-carga pede tiles. O gasto pede o
    ok do Lucas **por vídeo** (Juneau 28/09, com relevo em s44 e s01; LA 07/10, sem relevo; Zona 15/10, sem relevo; Peru
    21/10, relevo "quando necessário"); o contador se anota antes e depois de cada render em
    `out/<proj>/_pesquisa/maptiler-gasto.md`. O painel pode contar pelo dia UTC e atrasa horas;
  - o satélite é mosaico: na água aparecem emendas claras de borda reta. O canal cobre a água com os *water polygons*
    do OSM em `--agua-base` (§3, identidade §6);
  - a linha do tempo pré-render nunca fala com a MapTiler (rascunho cinza); prova de cor se faz sobre Landsat (§5);
  - relevo (`terrain-rgb-v2`) e câmera 3D só onde a cena precisa, nunca enfeite; `portao-margens` dá NÃO MEDIDO em cena
    com relevo.

## 3 · OpenStreetMap

- **O que dá:** a geometria que o Natural Earth não tem: rio pequeno (Taku, Rímac, Chillón…), estrada (Alaska Route 7),
  túnel e canal (Cuevas–Milloc), eixo do Canal do Panamá, bairros e distritos, pontos (prédios, usinas, faróis), e a
  água do mar (*water polygons*) para a água escura dos mapas.
- **Licença:** ODbL 1.0. A forma "© OpenStreetMap contributors" é aceita pela *Attribution Guideline* da OSMF (adotada
  em 25/06/2021). Em vídeo em que o mapa é peça central: crédito **num canto do mapa** (o tempo de ser lido) **e** na
  descrição ou nos créditos finais, **com a URL** `openstreetmap.org/copyright`. O recorte que o canal guarda é base
  derivada; o compartilhamento pela mesma licença só valeria se ela fosse publicada (fica fora do git).
- **Crédito na tela:** `© OpenStreetMap contributors` em toda cena que carrega camada do OSM. Com a base MapTiler, ele já
  está na linha dela. A `pauta-geo.json` marca `exige_credito: true` e as cenas que carregam a camada (no Peru, 27
  cenas listadas no `pauta-geo.md`).
- **Crédito na descrição:** `openstreetmap.org/copyright` (dentro da linha da MapTiler).
- **De onde, e como:**
  - **Overpass** (`overpass-api.de`): `geo-osm-rota.mjs` (túnel, ferrovia, balsa, rio) e `geo-osm-area.mjs` (mar,
    baía, bacia), com `--osm=relation/<id>`; ou consulta própria do canal, um pedido por vez, ≥ 10 s entre eles, com o
    User-Agent, log em `_tmp/pesquisa-geo/overpass-pedidos.log`. Já respondeu 504 e 502: espaçar e repetir uma vez
    depois de 2 min. `around` com linha longa dá 504; filtrar por `(bbox)(around:…)` responde (APREND. 55);
  - **Nominatim**: `geo-lugar-osm.mjs` (cidade, bairro, porto, com `--ref` e `--raio` contra homônimo); a geometria
    `polygon_geojson` serviu de reserva quando o Overpass caiu (Juneau, 25/09);
  - **osmdata** (`osmdata.openstreetmap.de`, os *water polygons*): o robots.txt (lido 08/10/2026) só veta `/img/`,
    `/css/` e `/internal/`; `/data/` e `/download/` livres. A página `/info/downloading.html` aceita automação com
    `If-Modified-Since` (o `curl -z`), pede que se baixe só o necessário e avisa que abuso suspende o serviço.
    `water-polygons-split-4326.zip` tem ~906 MB (baixar uma vez e guardar); a variante simplificada tem ~24 MB.
    Citar o osmdata é bem-vindo, não obrigatório.
- **Cuidados:**
  - `geo-osm-rota` costura **uma relation só**: rota em várias relations entra pelos ways (`--tol=0`); pista dupla e
    rotatória deixam órfãos, e o canal monta o caminho mais curto à mão (APREND. 23, 55);
  - os *water polygons* só têm a água cercada por `natural=coastline` (lago e represa não); quebra-mar e píer podem
    vir dentro da água e se tiram;
  - o ponto do OSM é o centro do contorno de hoje: para lugar histórico, declarar o aproximado;
  - os limites administrativos do OSM podem divergir da fonte oficial (Puente Piedra: −30 % contra o INEI); medir e
    declarar.

## 4 · Natural Earth

- **O que dá:** países inteiros (`ne10m-admin0-countries`, todas as partes), admin-1, costa, rios e lagos grandes,
  cidades (`ne_10m_populated_places_simple`), polígonos de mar. Escala 1:10M (o 1:110M só para mapa-múndi: descarta
  ilhas).
- **Licença:** domínio público: "All versions of Natural Earth raster + vector map data found on this website are in
  the public domain." "No permission is needed to use Natural Earth. Crediting the authors is unnecessary." (terms of
  use, reconferido em 27/09/2026).
- **Crédito:** nenhum na tela; opcional na descrição: "Made with Natural Earth."
- **De onde:** o acervo da pré-v1 (`acervo/geojson/ne10m-admin0-countries.json`, com manifest e sha256) e
  `obter-natural-earth.mjs <camada>`, fixado no commit `ca96624a` do `nvkelso/natural-earth-vector` e em sha256.
  Ferramentas: `geo-pais-completo`, `geo-recorte-bbox`, `geo-ilha-de-pais`; o canal tem `out/juneau/_pesquisa/cidades-ne.mjs`
  para pontos de cidade.
- **Cuidados:** não tem rio pequeno (nem Taku, Chilkat, Knik, Matanuska, Mantaro); a costa é generalizada (ponto real
  pode cair na água: Cascade Point a 236 m, Cerro Sosa a 238 m); `geo-recorte-bbox --nome` grava o mesmo nome em todos
  os países (não usar); camada sem `name` no topo (rios) não herda a licença; as 9 Aleutas além de 180° ficam fora do
  recorte do Alasca. Fronteira disputada: o NE desenha o controle de fato.

## 5 · HydroSHEDS, HydroBASINS e HydroRIVERS (WWF)

- **O que dá:** HydroBASINS (bacias em 12 níveis, com `NEXT_DOWN` para seguir até a foz; no Peru, nível 6 da América do
  Sul, `hybas_sa_lev06_v1c.zip`), HydroRIVERS (rios do mundo a 15", 8,5 milhões de trechos, ordem de Strahler e vazão) e
  o HydroSHEDS v2 (rios e bacias a ~30 m, só nas Américas; cobertura acima de 60°N não conferida).
- **Licença:**
  - **v1 (HydroBASINS, HydroRIVERS, núcleo v1):** licença PRÓPRIA da WWF (Apêndice A da Technical Documentation v1.4,
    04/2022): "free for non-commercial and commercial use"; não se distribui como produto avulso; cláusula 10.7, guardar
    registros por 2 anos e deixar a WWF inspecioná-los; cláusula 7.1, rescisão "in the sole discretion of WWF"; nome e
    logo da WWF só com consentimento. Veredito do levantamento: **com ressalvas**. **O Lucas aceitou a v1 para o Peru**
    (22/10/2026, 02:2x: "Aceito a v1 e eu baixo (Recomendado)").
  - **v2:** "freely available for scientific, educational and commercial use … under a CC-BY 4.0 license". É a aceita
    em 27/09 (identidade §6). Citação: Lehner, B., A. Roth, M. Huber, M. Anand, M. Thieme (2022), "A sharper look at the
    world's rivers and catchments," *Eos*, 103, https://doi.org/10.1029/2022EO220167.
  - Os termos do **site** (textos e imagens de hydrosheds.org) proíbem uso comercial: valem para o site, não para os dados.
- **Crédito na tela:** nenhum (v1, como o Peru fez).
- **Crédito na descrição (v1, obrigatório: o "Exhibit B")**, com o título do vídeo no lugar de "This product" (texto
  exato em `out/peru-agua/_pesquisa/pauta-geo.json` › `credito_descricao`):
  "This product incorporates data from the HydroSHEDS version 1 database which is © World Wildlife Fund, Inc.
  (2006-2022) and has been used herein under license. WWF has not evaluated the data as altered and incorporated within
  this product, and therefore gives no warranty regarding its accuracy, completeness, currency or suitability for any
  particular purpose. Portions of the HydroSHEDS v1 database incorporate data which are the intellectual property rights
  of © USGS (2006-2008), NASA (2000-2005), ESRI (1992-1998), CIAT (2004-2006), UNEP-WCMC (1993), WWF (2004), Commonwealth
  of Australia (2007), and Her Royal Majesty and the British Crown and are used under license. The HydroSHEDS v1 database
  and more information are available at https://www.hydrosheds.org."
  Citação do HydroRIVERS, se usado: Lehner, B., Grill G. (2013), *Hydrological Processes* 27(15): 2171–2186,
  https://doi.org/10.1002/hyp.9740.
- **De onde:** as páginas ficam em `www.hydrosheds.org` (robots só com o Sitemap), **mas os arquivos ficam em
  `data.hydrosheds.org`, cujo robots.txt é `User-agent: *` / `Disallow: /`** (conferido em 22/10/2026). Arquivo de lá,
  **só pela pessoa no navegador**, pelo botão Download da página do produto; o canal confere o sha256 depois (Peru:
  10.389.476 bytes, sha256 `6b1899bdbee46354a9f4729bbf916108fb31ed2facdfac449237c00d3e39e90e`). Vale para o v2 também,
  que sai do mesmo host.
- **Cuidados:** foi aqui o tropeço do APREND. 87 (o zip baixado por script antes de ler o robots do host de download).
  O HydroBASINS v1 vem do SRTM de 15" (~500 m): precisão de ~500 m + simplificação; em quadro de 50 km isso aparece.

## 6 · Landsat (USGS), pelo Microsoft Planetary Computer

- **O que dá:** satélite de **data escolhida**, Collection 2 Level-2 (reflectância de superfície), 30 m; Landsat 5 TM
  (anos 80–2011), 8 e 9. Serve para a imagem do mês do fato, para "antes e depois", e como base de prova sem pagar a
  MapTiler (APREND. 56: a prova de cor do Juneau).
- **Licença:** domínio público. USGS: "may be used, transferred, or reproduced without copyright restriction"
  (`usgs.gov/centers/eros/data-citation`). Identidade §6: base regional aceita, sem crédito na tela.
- **Crédito na tela:** nenhum.
- **Crédito na descrição:** a linha que a USGS pede, com o ID da cena. Os dois textos gravados:
  - Juneau (prova): "Satellite imagery: Landsat 9 (LC09_L2SP_058019_20240323_02_T1) and Landsat 8
    (LC08_L2SP_057019_20240324_02_T1), Collection 2 Level-2 surface reflectance, March 23–24, 2024. Landsat 8 and Landsat
    9 images courtesy of the U.S. Geological Survey. USGS/NASA Landsat Program. https://doi.org/10.5066/P9OGBGM6 —
    accessed via Microsoft Planetary Computer."
  - Peru (s16): "Satellite imagery: LT05_L2SP_011064_19980603_02_T1, Landsat Collection 2 Level-2. Landsat imagery
    courtesy of the U.S. Geological Survey."
- **De onde:** API de dados do Planetary Computer, `https://planetarycomputer.microsoft.com/api/data/v1/item/bbox/…png`
  com `collection=landsat-c2-l2&item=<ID>`, recorte e reprojeção em EPSG:3857 no servidor, **sem conta e sem chave**.
  O robots.txt (lido em 22/10/2026) é `User-agent: *` sem Disallow. Termos do serviço:
  `planetarycomputer.microsoft.com/terms` (a página só carrega por JavaScript: **NÃO CONFERIDA** no levantamento de
  27/09; os dados são do USGS). Script de referência: `out/prova-mapa/_pesquisa/base-landsat.py` (pedaços em cache pelo
  hash da URL; para em 403/429/captcha, sem contornar).
- **Cuidados:** a cena entra como base própria (`window.__BASE_CANAL`, fonte `image` do MapLibre), fora dos perfis da
  pré-v1; depois de `preparar-cena`, o `_creditos-mapa.md` sai com o crédito da EOX e tem de ser regravado. Data limpa
  pode não existir no verão (neve, névoa). Prova sobre Landsat leva legenda de que não é a base do vídeo.

## 7 · Relevo: Copernicus DEM, GEBCO, ETOPO, 3DEP, SRTM/NASADEM

- **Copernicus DEM GLO-30 / GLO-90** (aceito em 27/09)
  - O que dá: modelo de **superfície** (inclui prédio e árvore) do mundo, 30 m e 90 m, inclusive acima de 60°N.
  - Licença: "Licence for the use of the Copernicus WorldDEM-30", full, free & open, comercial ok, mundial e sem prazo;
    termina se uma obrigação for descumprida; não sugerir endosso.
  - Crédito (modificado, que é o caso do canal), na descrição: "produced using Copernicus WorldDEM-30 © DLR e.V.
    2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union and ESA; all
    rights reserved" + "The organisations in charge of the Copernicus programme by law or by delegation do not incur any
    liability for any use of the Copernicus WorldDEM-30." Na Zona do Canal também a citação que o registro da AWS sugere:
    "Copernicus Digital Elevation Model (DEM) was accessed on <data> from https://registry.opendata.aws/copernicus-dem."
    Na tela, nada (`exige_credito: false`).
  - De onde: AWS Open Data, `copernicus-dem-30m.s3.amazonaws.com` e `copernicus-dem-90m.s3.amazonaws.com`, sem conta;
    robots.txt 404 (não veta); conferir md5 contra o ETag e gravar sha256. (O caminho da licença, o CDSE, pede conta
    gratuita e proíbe contas múltiplas.) Usado na Zona (cota de 79,2 m) e no Peru (crista: três critérios deram três
    linhas, e a linha derivada foi rejeitada).
- **GEBCO 2026 Grid** (aceito, "com a citação que cada um pede"; não usado)
  - Batimetria global com terra, 15". "The GEBCO Grid is placed in the public domain and may be used free of charge";
    permite "Commercially exploit"; pede "Acknowledge the source"; não sugerir status oficial; "should NOT be used for
    navigation".
  - Citação na descrição: "GEBCO Bathymetric Compilation Group 2026 (2026). The GEBCO_2026 Grid - a continuous terrain
    model for oceans and land at 15 arc-second intervals." DOI 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa.
  - De onde: gebco.net (global, recorte, CEDA, OPeNDAP). Robots do host de download: **não registrado no disco**; ler antes.
- **ETOPO 2022** (NOAA NCEI; aceito, não usado)
  - Relevo global de terra e fundo do mar, 15"/30"/60", versões de gelo e de rocha. Metadado: **CC0-1.0**.
  - Citação: "NOAA National Centers for Environmental Information. 2022: ETOPO 2022 15 Arc-Second Global Relief Model."
    DOI 10.25921/fd45-gt74. Não serve para navegação.
  - De onde: NCEI (GeoTIFF, NetCDF/THREDDS, recorte). Robots: **não registrado no disco**.
- **USGS 3DEP**: relevo dos EUA (1 m, 1/3", 1"; Alasca com IfSAR de 5 m). "All 3DEP products are available, free of
  charge and without use restrictions." Crédito pedido: "Credit: U.S. Geological Survey". Em LA o canal usou o
  `exportImage` do `3DEPElevation` (`elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/exportImage`)
  para conferir folhas antigas contra o relevo de hoje.
- **SRTM / NASADEM**: CC0 (NASA), sem sugerir endosso; citação "NASA JPL. (2020). NASADEM Merged DEM Global 1 arc second
  V001 [Dataset]…". **Só de 60°N a 56°S**: não cobre o Alasca acima de 60°N nem o norte do Canadá.
- Relevo da MapTiler (`terrain-rgb-v2`): dentro da licença e do crédito da MapTiler (§2).

## 8 · Satélite aceito e não usado

- **NASA Blue Marble** (escala de mundo e continente): domínio público.
- **Copernicus Sentinel-2** (Copernicus Browser / CDSE, 10 m, data escolhida): lei da UE, livre; crédito
  **obrigatório** (identidade §6; onde ele fica não está escrito, e na faixa de crédito é o caminho seguro):
  `Contains modified Copernicus Sentinel data <ano>`. O Browser pede conta gratuita; desligar
  o "Show Captions".
- **NASA Worldview / GIBS**: imagem NASA livre (CC0), WMTS sem chave, robots 404. **Sem a camada "Place Labels"** (Esri,
  TomTom, Garmin, OSM) e **sem "Coastlines/Borders/Roads"** (OSM e NE). Crédito sugerido: "We acknowledge the use of
  imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and
  Information System (ESDIS)."
- **USDA NAIP** (foto aérea dos EUA, 0,3–1 m, sem o Alasca), **NOAA GOES** e **Himawari** (JMA, licença de dados públicos
  1.0): aceitos em 27/09.
- **EOxCloudless 2016** (o perfil `aberto` da pré-v1): CC BY 4.0, crédito na tela "EOxCloudless https://cloudless.eox.at
  by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2016)". **Nunca outro ano**: 2018–2025 são CC
  BY-NC-SA. O serviço gratuito dá 429.
- **Google Earth Timelapse** (CC BY 4.0; 30 m até 2014, 19,11 m depois; versão sem rótulo): na tela `Google Earth
  Timelapse (Google, Landsat, Copernicus)` (+ Sentinel no período dele); na descrição, link da licença e a mudança.
- **Google Earth Studio**: YouTube educativo monetizado sem pedir; `Google Earth` e os provedores **na tela a cena
  inteira**, nunca nos créditos finais; a imagem não se repinta; sem download em massa; nada em patrocínio; conta e
  formulário do Lucas.

## 9 · Geometria oficial e histórica

- **US Census TIGER/Line e Cartographic Boundary** (domínio público, 17 U.S.C. §105): "We would ask, however, that you
  cite the Census Bureau as the source." Descrição: "Source: U.S. Census Bureau, TIGER/Line Shapefiles <ano>". TIGER/Line
  é marca; o limite é estatístico, sem valor jurídico. `www2.census.gov`: o robots não veta nada para `*`. Usado em LA
  (cidade, vizinhos, costa, água do porto, Catalina) e no Juneau (`geo-census-sudeste.mjs`, `geo-tiger-matsu.mjs`).
- **USGS topoView / HistoricalTopo e GNIS** (domínio público; crédito pedido ao USGS): TNM Access API sem chave,
  arquivos no bucket `prd-tnm`; robots do `ngmdb.usgs.gov` não veta `/topoview/`; o do `tnmaccess` deu 403 (4xx não veta,
  RFC 9309). US Topo antigo do Alasca: manter o aviso da ortoimagem de terceiros. Usado em LA (folhas de 1896, 1903,
  1923, georreferenciadas pelo USGS) e no Juneau (GNIS).
- **Mapa antigo em domínio público como geometria** (Lucas, 07/10/2026: "mapa antigo sim"): só com domínio público
  provado na origem e **incerteza medida e declarada** no `pauta-geo`; sem crédito na tela; na descrição o crédito da
  coleção (ex.: "U.S. Army Map Service, Canal Zone and Vicinity (1947), Library of Congress"; "Road Map of Ancon, Balboa
  and Panama (1936), U.S. National Archives"). O arquivo vem do **Commons pela API** (User-Agent do canal, um pedido por
  vez; conferir o sha1 contra `prop=imageinfo&iiprop=sha1` e o tipo pelos primeiros bytes, APREND. 82) ou da **NARA pela
  API v2** com a chave. A LOC recusa robô: a licença fica a lida no Commons.
- **NOAA Historical Map & Chart Collection**: CC0 / domínio público; crédito pedido "Provided by NOAA Office of Coast
  Survey"; **o robots.txt de `historicalcharts.noaa.gov` veta tudo**: só pelo navegador do app (por isso a carta de ~1888
  de LA não foi obtida).
- **geoBoundaries** (só o **gbOpen**; nunca o gbAuthoritative): CC BY 4.0 com a licença de origem de cada limite
  (`boundaryLicense`); crédito "geoBoundaries" + link + a fonte original; API com `Crawl-delay: 10`. No Peru ficou fora:
  o ADM2 vinha do IGN em CC BY 3.0 IGO, com crédito novo na tela, e o OSM cobria os mesmos limites.
- **Statistics Canada** (Open Licence): "Adapted from Statistics Canada, <produto>, <data>. This does not constitute an
  endorsement by Statistics Canada of this product." **NRCan** (OGL – Canada): "Contains information licensed under the
  Open Government Licence – Canada." (faixa de crédito e descrição). Nada de brasão nem símbolo do Canadá.
- **LSIB** (Departamento de Estado, domínio público, ~100 m): "U.S. Department of State, Office of the Geographer and
  Global Issues."; é a posição oficial dos EUA. Robots do host de download deu 403: o arquivo vem pelo navegador, com o
  sim do Lucas.
- **Marine Regions** (VLIZ, CC BY): "Flanders Marine Institute (<ano>): MarineRegions.org. Available online at
  www.marineregions.org. Consulted on <data>."; dizer que a linha não tem valor legal.
- **Overture divisions** (ODbL, OSM empacotado com `is_disputed`): levantado como "recomendo", mas **não foi perguntado**
  ao Lucas e não entra (identidade §6).

## 10 · Não servem

- **Esri World Imagery**: "Services may not be reproduced or transmitted for commercial purposes … except as expressly
  permitted in writing by Esri."
- **Mapbox**: vídeo só com "Purchased Print & Video Rights"; proíbe consulta em lote.
- **EOxCloudless 2018–2025**: CC BY-NC-SA 4.0 (2017 sem licença nas páginas: não usar).
- **GADM**, **UN SALB** (não comercial e proíbe mexer na geometria), **Eurostat GISCO** (não comercial).
- Qualquer outra base só entra depois de a licença ser lida e registrada na identidade §6.

## 11 · O que o disco não diz

- O robots.txt de `overpass-api.de`, de `nominatim.openstreetmap.org`, de gebco.net e do NCEI não está registrado nos
  arquivos lidos; as `geo-*` da pré-v1 usam Overpass e Nominatim com User-Agent e espera.
- Os termos do Planetary Computer ficaram NÃO CONFERIDOS (página só por JavaScript).
- A cobertura do HydroSHEDS v2 acima de 60°N não foi conferida.
- O tamanho de crédito na tela para dado CC BY de mapa (HydroSHEDS v2, Sentinel) fora da MapTiler não foi decidido pelo
  Lucas: segue a linha de crédito da identidade §4.1 e §7.
- Fronteira disputada: linha tracejada e rótulo `DISPUTED`, controle de fato, nunca a reivindicação de um lado
  (identidade §6); a política de fonte para a disputa ficou como sugestão no levantamento (§2 do relatório 5).
