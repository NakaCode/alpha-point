# O que o motor (pré-v1 da Régie) traz para mapa

Levantamento feito em 22/10/2026, lendo o código de `C:/projetos/regie-v1` no commit `7ab9543` (branch `v1`, só leitura).
Nada do motor foi editado nem rodado: cada linha abaixo vem do código ou dos documentos do próprio motor
(`docs/MAPAS.md` e `docs/CREDITO-DE-MAPA.md`), com o arquivo citado. Onde o canal já diverge do motor, a nota diz
"no canal". Todo comando roda **de dentro da raiz do canal** (`C:/projetos/alpha-point`), porque o motor lê
`canal.json`, `marca/tokens.css` e `out/<proj>/` a partir do diretório atual.

Atalho: `<motor>` = `C:/projetos/regie-v1`.

---

## 0. O mapa do caminho, em uma tela

```
geometria real ──► src/geo/geo-*.mjs ──► cache da máquina (~/.regie/geo) + out/<proj>/_media/geo/<slug>.json/.js + _pesquisa/pauta-geo.json
                                                  │
canal.json › mapa.perfil ──► src/mapa/preparar-cena.mjs ──► out/<proj>/_media/_vendor/ (MapLibre, câmera, perfil sem chave)
                                                  │          + out/<proj>/_creditos-mapa.md  (+ graphics/<id>.html do molde, com --molde=)
                                                  ▼
                       out/<proj>/graphics/<id>.html  (molde src/mapa/moldes/mapa-base.html, o mapista edita o bloco CENA)
                                                  │
MAPTILER_KEY (chaves.mjs) ──► renderizar.mjs / quadro.mjs injetam window.__chaves pelo CDP ──► <id>.mp4 + <id>.mp4.de-html
```

---

## 1. Os perfis de base e como o canal escolhe um

**Arquivos:** `src/mapa/perfis.json` (os dados) e `src/mapa/perfis.mjs` (o leitor).

**Os três perfis** (`perfis.json`, versão 1, conferidos pelo motor em 23/09/2026):

| Perfil | Base | Relevo (DEM) | Credencial | Crédito na tela (`atribuicao.tela`) |
|---|---|---|---|---|
| `aberto` (o padrão) | EOX Sentinel-2 cloudless **2016**, raster de 256 px, maxzoom 13 | AWS Terrain Tiles, `terrarium`, 256 px, maxzoom 15 | nenhuma | a frase literal da EOX |
| `vetorial` | OpenFreeMap, estilo Liberty (`tipo: "estilo"`) | nenhum | nenhuma | `© OpenMapTiles · Data from OpenStreetMap` |
| `maptiler` | `https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key={chave}`, 512 px, maxzoom **20** | `https://api.maptiler.com/tiles/terrain-rgb-v2/{z}/{x}/{y}.webp?key={chave}`, 512 px, maxzoom **14**, `encoding: "mapbox"` | `"credencial": "MAPTILER_KEY"` | `© MapTiler © OpenStreetMap contributors` |

- Os três têm `terreno.exagero` (1,25) quando têm DEM, `hosts` (o maptiler: `api.maptiler.com`), `limites` e
  `atribuicao.descricao` (o texto longo para a descrição do vídeo, com links).
- **O perfil nunca guarda a chave**: a URL leva o marcador `{chave}`, e `credencial` diz só o NOME da variável.
  `validarPerfis()` reprova URL com chave literal (`?key=…` sem `{chave}`).
- O `limites` do maptiler: "A chave é do DONO do canal, nunca a da Top10. O crédito na tela só pode sair com licença
  custom da MapTiler que o dispense por escrito."

**Como o canal liga um perfil:** `canal.json` › `"mapa": { "perfil": "<nome>" }`. Sem escolha, vale `aberto`
(`preparar-cena.mjs` › `PERFIL_PADRAO`).
- **No canal:** `canal.json` › `mapa.perfil = "maptiler"` (Lucas, 26/09/2026), com o campo extra `decidido`, que o
  motor ignora.
- **Uma base por vídeo**: `preparar-cena --perfil=<x>` só CONFIRMA a do canal; diferente dela, sai 2
  (`PERFIL_DIVERGENTE`). Produção que já tem base e o canal troca: sai 1 (`BASE_TROCADA`) e pede `--trocar-base`, que
  depois lista as cenas a renderizar com `--forcar`.

**Funções de `perfis.mjs`:** `carregarPerfis`, `validarPerfis`, `perfilRenderizavel(nome)` (o perfil + o nome, sem chave),
`chavesParaCena(pastaProducao)` e `ondeEstaChave(perfil)`.
- `chavesParaCena(out/<proj>)` lê `out/<proj>/_media/_vendor/perfil-mapa.json`. Sem esse arquivo, devolve `{}` (a
  produção não tem mapa). Com `credencial`, chama `exigirChave(...)`: sem a chave na máquina, lança `SEM_CHAVE` com a
  mensagem que ensina onde pôr.

---

## 2. Onde a chave `MAPTILER_KEY` é lida (`src/lib/chaves.mjs`)

Só o nome e os caminhos; nenhum valor foi lido.

- **Ordem de procura** (`lerChave(nome)`):
  1. a variável de ambiente `MAPTILER_KEY`;
  2. o arquivo da máquina: `process.env.REGIE_CHAVES` ou, sem ele, `%USERPROFILE%\.regie\chaves.env`
     (`ARQUIVO_MAQUINA()`); nesta máquina, `C:\Users\zangp\.regie\chaves.env`;
  3. o `.env` da pasta atual (o do canal).
- O leitor aceita UTF-8 com ou sem BOM e UTF-16 LE/BE, CRLF, `export `, aspas e comentário com `#` (o
  `process.loadEnvFile` do Node perde a chave em silêncio com BOM ou UTF-16, medido pelo motor em 23/09/2026).
- `onde(nome)` devolve só `"ambiente" | "maquina" | "canal" | null`, sem o valor. É o jeito de saber de onde a chave
  vem (o `preparar-cena` usa isso para imprimir "chave MAPTILER_KEY: encontrada (maquina)").
- `exigirChave(nome, paraQue)` lança `code: "SEM_CHAVE"` com o caminho do arquivo da máquina.
- **Como a chave chega à cena:** nunca escrita em HTML, log ou arquivo. O render (e o `quadro.mjs`) a injetam pelo CDP
  com `Page.addScriptToEvaluateOnNewDocument`, antes de qualquer script da página, como
  `window.__chaves` congelado, não enumerável e não gravável (`renderizar.mjs` › `scriptChaves`; cópia igual em
  `src/lib/captura-png.mjs`). A cena troca `{chave}` por `encodeURIComponent(chave)` só na memória
  (`mapa-base.html` › `comChave`).
- **Consequência:** a cena de mapa maptiler **não abre à mão** no navegador; sem o render ela mostra a faixa vermelha
  "a base 'maptiler' precisa da chave MAPTILER_KEY, que o render da Régie injeta na hora".
  - No canal, os portões do molde abrem a cena sem a chave; quem dá a chave a eles é a pré-carga do canal
    `ferramentas/chaves-nos-portoes.mjs` (CLAUDE.md, "Os portões medem"). A linha do tempo do canal nunca lê a chave
    (toca o clipe de prova ou o rascunho).

---

## 3. `preparar-cena` (`src/mapa/preparar-cena.mjs`)

**Comando:**
```
node C:/projetos/regie-v1/src/mapa/preparar-cena.mjs <proj> [--molde=<id-da-cena>] [--perfil=<confirma>] [--trocar-base]
```

**Entra:** `canal.json` (perfil e `idiomas.origem`), `marca/tokens.css` (exigido: sem ele sai 1, `SEM_MARCA`),
`out/<proj>/_media/geo/*.json` e `out/<proj>/_pesquisa/pauta-geo.json`, o `acervo/vendor/` do motor e
`src/mapa/camera-mapa.js`.

**Sai** (copiado só se mudou, idempotente):
- `out/<proj>/_media/_vendor/maplibre-gl.js`, `maplibre-gl.css`, `LICENSE-maplibre-gl.txt` (MapLibre **4.7.1**, BSD-3,
  sha256 em `acervo/vendor/ORIGEM.json`; fica no 4.7.1 porque a câmera assume Web Mercator);
- `out/<proj>/_media/_vendor/camera-mapa.js`;
- `out/<proj>/_media/_vendor/perfil-mapa.js` (`window.__REGIE_MAPA = {…}`, sem chave) e `perfil-mapa.json` (o mesmo,
  para o render ler em `chavesParaCena`). O perfil gravado leva também `idioma` (de `idiomas.origem`: no canal, `en`);
- `out/<proj>/_media/geo/<slug>.js` regravado para todo `<slug>.json` (o invólucro, ver §5);
- `out/<proj>/_creditos-mapa.md`: o bloco para a DESCRIÇÃO do vídeo (`src/mapa/credito.mjs`);
- com `--molde=<id>`: `out/<proj>/graphics/<id>.html`, cópia do molde. **Nunca sobrescreve** cena que existe (sai 1,
  `CENA_EXISTE`).

**Travas:**
- toda geometria de `_media/geo/` precisa de item na `pauta-geo.json` com `fonte` e `licenca`, e de ser
  FeatureCollection válida; `.js` sem `.json` também reprova. Qualquer falha: **nada é gravado** (sai 1,
  `GEO_SEM_PROCEDENCIA`);
- o crédito de todo item da pauta é conferido antes da primeira escrita (`CREDITO_SEM_FONTE`);
- trava por arquivo na pauta (`comTrava`).

**O que ele avisa:** se um arquivo que as cenas carregam mudou (perfil, vendor, geometria), lista as cenas que o
carregam (`cenasQueCarregam`) e manda renderizar com `--forcar`, porque o carimbo do render guarda só o sha1 do HTML.

**Limites e cuidados:**
- no canal, depois de qualquer `preparar-cena prova-mapa`, o `base-landsat.py` tem de rodar de novo (ele regrava o
  `_creditos-mapa.md`, que o motor escreveria com o crédito da EOX) (CLAUDE.md, item 7);
- o `_creditos-mapa.md` diz "NÃO edite": se regenera do perfil e da pauta.

---

## 4. O molde da cena de mapa e a câmera

### 4.1 `src/mapa/moldes/mapa-base.html` (604 linhas)

O único molde de mapa do motor (o `template/templates-cena/` do motor só tem `navegacao/`, que o canal não usa).

- **Palco:** `<html lang="pt-BR" data-render="4k-native">`, 3840×2160. **No canal, a cena troca para `lang="en-US"`**
  (CLAUDE.md, "O vídeo fala inglês").
- **Carrega por caminho relativo:** `../../../marca/tokens.css`, `../_media/_vendor/maplibre-gl.css/.js`,
  `camera-mapa.js`, `perfil-mapa.js` e uma linha `<script src="../_media/geo/<slug>.js">` por geometria (o exemplo
  traz `brasil-ne10m-full.js`, a trocar).
- **O mapista edita só o bloco `CENA`:** `duracao` (= `dur` do segmento no espelho), `largura`/`altura` (nunca mude),
  `viewports` (`{lng, lat, zoom, bearing, pitch}`, pontos de passagem), `bearingLoop` (`{speed, startTime, dir, ramp}`,
  graus/s), `cameraAbre`/`cameraFecha` (0,16 e 0,20 da cena), `territorio` (`{geo, cor, entra, dura}`: camadas `fill`
  a 22 % e `line` de 5 px), `chips` (`{id, lnglat, entra, dura}`, reprojetados a cada quadro por `map.project`, com
  um balanço senoidal de 4,8 px) e `fotoRegiao` (`{geo, img, entra, dura, opacidade, borda}`: a foto recortada no
  polígono projetado, via `<clipPath>` SVG; `null` desliga).
- **O contrato de captura que ele cumpre:** `window.__duracao`, `__renderAt(t)` (nunca lança; faz `map.jumpTo(cameraAt(t))`),
  `__ready` (Promise: `load` + `idle`), `__prepararCaptura()`, `__aguardarMapa(teto=90000)`, `__fotosProntas`,
  `window.map`. Expõe também `__erroCena`, `__creditoMapa`, `__retentativasMapa`, `__retentativasMapaPorFalha`,
  `__errosMapa`, `__esperasEsgotadas` e `__avisoMapa`.
- **A espera de tile (`__aguardarMapa`):** `areTilesLoaded()`, nada se movendo, fonte `base` (e `dem` + terreno, se o
  perfil tem DEM) carregada, e, **sem relevo e sem inclinação**, um nível de tile só entre os tiles que vão ser
  desenhados. Com relevo ou pitch > 1, basta "tudo carregado e estável". Precisa de duas verificações seguidas (30 ms);
  o teto de 90 s esgotado é **erro** da cena.
- **Fail-closed:** todo `error` do MapLibre, tile com estado `errored` (vigia a cada 250 ms; o 404 de raster não
  dispara `error`), WebGL ausente, imagem que não carrega, geometria ausente ou sem procedência: tudo vira
  `window.__erroCena` e a faixa vermelha `#erroCena`. O render sai 3.
- **Retentativa:** toda URL http(s) do perfil passa pelo protocolo `regie+https` (`transformRequest`): até 5 tentativas
  (esperas de 0, 1, 3, 6 e 10 s), prazo de 30 s por tentativa, só em falha passageira (rede, tempo, 429, 5xx e **corpo
  corrompido com 200**: JPEG sem `FF D9`, PNG sem `IEND`, WebP menor que o RIFF declara, ou que não decodifica).
  401/403/404 não se repetem.
- **O crédito na tela** (`#credito`, `data-qc-papel="credito" data-qc-credito="mapa"`): a frase do perfil + o crédito de
  cada geometria que exige (ver §5), sem repetir "OpenStreetMap"; 46 px, branco 90 % sobre pílula preta 60 %, canto
  inferior esquerdo em `left:154px; bottom:86px`, a cena toda. **No canal, o crédito é 56 px do vídeo 2 em diante (76
  no Juneau)**, pela `var(--fs-credito)` do `marca/tokens.css` (identidade §4.1).
- **O molde traz um `#scrim`** (degradê escuro em cima e embaixo). No canal, a identidade não tem degradê: na prova do
  Landsat, a cena tirou o véu (CLAUDE.md, item 7).
- **Perfil vetorial:** `ajustarRotulos()` troca o `text-field` por `name:<idioma>` e multiplica o `text-size` por
  3840/1920. Não se aplica ao `maptiler` (raster).
- **Prévia:** `#preview` na URL liga o auto-loop; com o perfil maptiler, a prévia à mão não tem chave.
- `maxTileCacheSize: 4096` (não os 8192 do estúdio: GPU integrada pode estourar em 4K), `preserveDrawingBuffer: true`,
  `fadeDuration: 0`, `interactive: false`, `maxPitch: 85`.

### 4.2 `src/mapa/camera-mapa.js` (157 linhas; vai para `_media/_vendor/` pelo `preparar-cena`)

- `criarCameraMapa({viewports, duration, width, height, bearingLoop, cameraAbre, cameraFecha})` devolve
  `cameraAt(t) → {center, zoom, bearing, pitch}`.
- Viewport é ponto de PASSAGEM: um perfil de velocidade só para a cena inteira (arranca em `cameraAbre`, pousa em
  `cameraFecha`, integrado em 600 amostras), e dentro de cada perna a curva de van Wijk (a do `flyTo`, como função pura
  de t, `rho = 1,42`). Bearing e pitch interpolam linear por perna; `bearingLoop` soma uma órbita com rampa.
- Com 1 viewport só, a câmera fica parada (salvo a órbita).
- **Limite conhecido, anotado no cabeçalho:** `pausa: true` no viewport **não faz nada** (`totalPausa` e `janelaMov`
  são calculados e nunca usados). Quem precisa segurar a imagem calcula o trecho parado na própria cena.

### 4.3 `_rig.js`

- `src/cena/_rig.js` (80 linhas) é o kit das cenas HTML comuns (`window.RIG`: `clamp`, `seg`, `eo`, `eb`, `win`, `laco`,
  `camera` (push-in), `seekTo`, `mulberry32`, `grao`, `paleta`, `prontas`). **Não tem nada de mapa**, e o molde de
  mapa não o usa (tem os próprios `cl`, `eo`, `seg`). O `templates-cena/_rig.js` do canal é idêntico byte a byte ao do
  motor (conferido com `cmp`).
- `RIG.prontas()` espera as faces "Marca"/"MarcaSec": uma cena de mapa que copie o RIG para usar o `prontas` passa a
  depender dessas faces do `tokens.css`.

---

## 5. As ferramentas de geometria (`src/geo/`)

### 5.1 O chão comum (`src/geo/comum.mjs`)

Toda ferramenta `geo-*` grava pelo mesmo `gravarGeo`, **nesta ordem**:
1. **cache da máquina:** `%USERPROFILE%\.regie\geo\<slug>.json` + `manifest.json` (ou `REGIE_GEO_CACHE`);
2. **a produção:** `out/<proj>/_media/geo/<slug>.json` e `<slug>.js` (o invólucro, porque a cena abre por `file://`
   e ali `fetch` de arquivo local é bloqueado);
3. **a pauta, por último:** `out/<proj>/_pesquisa/pauta-geo.json` (`tipo: "geo"`, `fonte`, `arquivo`, `licenca`, `url`,
   `exige_credito`, `cena`, `features`, `bbox`, `sha256`, `derivado_por`, `registrado`), e então o `_creditos-mapa.md`
   (só se a produção já tem base).

- **O invólucro** `<slug>.js` pendura `window.__GEO[slug]` (a FeatureCollection) e `window.__GEO_META[slug]`
  (`fonte`, `licenca`, `exige_credito`, `credito_tela`). É dali que o molde monta o crédito.
- **Sem fonte e licença, nada é gravado.** `validarFC` exige FeatureCollection não vazia, com coordenada em toda feature.
- **Argumentos:** `--k=v` vira texto, `--flag` vira `true`; `<proj>` é o 1º posicional, ou `--so-cache` (só o cache).
  `--cena=<id>` grava a cena na pauta.
- **Entrada** (`lerEntradaGeo`): caminho de arquivo, slug do cache, arquivo do acervo do motor ou camada Natural Earth
  baixada (pelo nome da camada).
- **Licença herdada** (`origemHerdada`): camada Natural Earth intacta (o `name` começa com `ne_10m_`…) sai como domínio
  público, sem crédito. Senão, do manifest do cache, das propriedades do arquivo ou de `--fonte`/`--licenca`/`--fonte-url`;
  se nenhum diz, bloqueia. `exige_credito` vem do registro ou de licença com `odbl|cc by|atribui`.
- **Rede OSM:** User-Agent `regie/0.1 (canal <slug>; …; <contato>)`, com o `contato` do `canal.json` (no canal,
  `contato.naka@hotmail.com`); sem contato, sai 2 (`SEM_CONTATO`). Intervalo mínimo de 1,1 s por serviço, por máquina
  (`.ultimo-<servico>` no cache).
- **Código de saída:** 1 = bloqueio (o dado não serve), 2 = uso errado. A saída "gravou" vai ao stderr (`relatarGravacao`),
  que também lista as cenas que carregam a geometria mudada e pede `--forcar`.

### 5.2 Cada ferramenta

| Ferramenta | Comando | Entra | Sai (geometria) | Licença da saída | Travas e limites |
|---|---|---|---|---|---|
| `geo-pais-completo.mjs` | `<proj> --a3=ISO3 \| --nome="<NAME em inglês>" [--pt=] [--tol=0.006] [--slug=] [--fonte=] [--dec=4] [--cena=] [--out=] [--inline]` | `acervo/geojson/ne10m-admin0-countries.json` (padrão) ou outra camada admin-0 (`--fonte=ne_10m_admin_0_countries_ukr`, variante POV) | 1 feature MultiPolygon, o país inteiro; slug padrão `<pt>-ne10m[-pov]-full` | domínio público (NE) | conta as partes antes e depois e **aborta** se mudar; anel degenerado aborta; nome ambíguo por soberania aborta (use `--a3`) |
| `geo-ilha-de-pais.mjs` | `<proj> --fonte=<geojson\|slug> --ref=lon,lat --nome=<Nome> [--pt=] [--slug=]` | um país já em cache (ex.: saída do `geo-pais-completo`) | a parte do MultiPolygon que CONTÉM o ponto `--ref` | herdada | nenhuma parte contém o ponto: aborta; a geometria sai como está na fonte |
| `geo-recorte-bbox.mjs` | `<proj> --in=<geojson\|slug\|camada NE> --bbox=lonMin,latMin,lonMax,latMax --slug=<saida> [--tol=] [--nome=] [--src=] [--fonte= --licenca= --fonte-url=]` | camada global (rios, lagos, estados…) | polígonos cortados (Sutherland–Hodgman) e linhas partidas na janela; simplificação Douglas–Peucker opcional; coordenadas com 5 casas | herdada | nada cai na janela: aborta. **`--nome` grava o mesmo `name_pt` em TODAS as features** (não use). Camada sem `name` no topo (a de rios) não herda a licença: passe `--fonte`, `--licenca`, `--fonte-url`. Corte em 180° não é tratado (as Aleutas além de 180° ficam fora) |
| `geo-osm-rota.mjs` | `<proj> --osm=relation/<id> \| way/<id> \| --in=<dump.json> [--nome=] [--pt=] [--roles=] [--tol=] [--slug=] [--props={}]` | o Overpass (`overpass-api.de`, `out geom`) ou um dump salvo | 1 LineString costurada pelas pontas coincidentes (coordenadas com 6 casas), com `km_medido`, `km_declarado_osm`, `ponta_a`, `ponta_b` | ODbL, **exige crédito** | way que não encaixa vira "órfão": **só avisa** e grava assim mesmo (pista dupla e rotatória dão órfãos: no Juneau, 21, resolvidos pelo script do canal `out/juneau/_pesquisa/estrada-juneau-cascade.mjs`). Overpass 429 ou fora do ar: sai 1 |
| `geo-osm-area.mjs` | `<proj> --osm=relation/<id> \| --in=<dump> [--nome=] [--pt=] [--tol=] [--slug=] [--minpts=4] [--props={}]` | relation `type=multipolygon` | anéis `outer`/`inner` fechados | ODbL, exige crédito | anel que não fecha é reportado, não silenciado |
| `geo-lugar-osm.mjs` | `<proj> --q="<busca>" --ref=lon,lat [--pt=] [--slug=] [--raio=60] [--tol=0.0005] [--pais=xx] [--tipo=boundary] [--so-ponto] [--resposta=<json>] [--salvar-resposta=<arq>]` | o Nominatim | o limite administrativo e o ponto (ou só o ponto, com `--so-ponto`) | ODbL, exige crédito | `--ref` é obrigatório: resultado a mais de `--raio` km do ponto aborta (trava contra homônimo); `--resposta` roda sem rede |
| `geo-grande-circulo.mjs` | `<proj> --pontos=<geojson\|slug> --de=<id\|nome> --para=<id\|nome> --nome= [--slug=] [--passos=256]` ou `--coords-cruas --de=lon,lat --para=lon,lat` | arquivo de pontos real (ex.: cidades do NE) | a geodésica entre dois pontos (MultiLineString se cruza o antimeridiano) | herdada do arquivo de pontos; com `--coords-cruas`, carimbada como tal | não é rota real voada nem estrada: para via real, `geo-osm-rota`. Prova de comprimento: diverge, sai 1 |
| `obter-natural-earth.mjs` | sem argumento lista; `<camada> [<camada>…]` baixa | GitHub `nvkelso/natural-earth-vector`, fixado no commit `ca96624a…` | `%USERPROFILE%\.regie\geo\natural-earth\<camada>.geojson` (não vai à produção sozinho) | domínio público | sha256 fixado: baixou diferente, **nada é gravado**. Só 9 camadas conhecidas (abaixo) |
| `catalogo.mjs` | sem argumento lista; `--busca=<texto>`; `usar <proj> <slug> [--cena=]` | o `manifest.json` do cache da máquina e o do acervo do motor | `usar` copia do cache para a produção pelo mesmo `gravarGeo` (com pauta e crédito) | a registrada no cache | `usar` só lê do **cache** (o acervo do motor aparece na lista, mas não se "usa": entra pelo `geo-pais-completo`); item do cache sem fonte ou licença é recusado |

**As camadas Natural Earth que o motor sabe baixar** (`CAMADAS` em `obter-natural-earth.mjs`): `ne_10m_admin_1_states_provinces`
(40,7 MB), `ne_50m_admin_1_states_provinces`, `ne_10m_admin_0_countries_ukr`, `ne_10m_admin_0_map_units`,
`ne_10m_rivers_lake_centerlines`, `ne_10m_lakes`, `ne_10m_coastline`, `ne_10m_ocean` e `ne_10m_populated_places_simple`
(as cidades, em pontos: serve de `--pontos` ao `geo-grande-circulo`).

**Cidades:** o motor não tem ferramenta própria de cidade em ponto além de (a) a camada `ne_10m_populated_places_simple`
e (b) o `geo-lugar-osm --so-ponto` (OSM, com crédito). O ponto de cidade do NE com procedência é gravado no canal por
`out/juneau/_pesquisa/cidades-ne.mjs` (script do canal, não do motor).

### 5.3 O acervo e o cache

- **Acervo que viaja no motor** (`acervo/`, ~15 MB): `vendor/` (MapLibre 4.7.1), `geojson/ne10m-admin0-countries.json`
  (13 MB, 258 países, a entrada do `geo-pais-completo`), `geojson/ne110m-admin0-countries.json` (0,8 MB, mapa-múndi;
  **não usar em zoom de país**, descarta ilhas) e `geojson/manifest.json` (fonte, licença, URL fixada e sha256 de cada um).
- **Cache desta máquina** (`C:\Users\zangp\.regie\geo\`, contado em 22/10/2026): 134 itens no `manifest.json`, e em
  `natural-earth/` as camadas `admin_1_states_provinces`, `lakes`, `populated_places_simple`, `rivers_lake_centerlines`,
  e mais três que **não estão** na lista do `obter-natural-earth` (`geography_marine_polys`, `glaciated_areas`, `roads`):
  entraram por outro caminho, e a procedência delas está no registro de cada geometria derivada, não no motor.
- O cache serve a todos os canais da máquina; a produção tem a própria cópia (trocar o cache não muda cena feita).

---

## 6. Crédito de mapa (`src/mapa/credito.mjs`)

- **Na tela:** `atribuicao.tela` do perfil + `© OpenStreetMap contributors` se alguma geometria da cena vem do OSM (e a
  base ainda não diz OpenStreetMap) + `Geometria: <fonte> (<licença>)` para outra geometria que exija crédito (CC BY…).
  Natural Earth: nenhuma linha. A mesma regra mora no molde (navegador) e aqui (Node), porque o molde não pode importar
  módulo por `file://`.
- **Exige crédito?** É fail-closed: `exige_credito: true`, ou licença com `odbl|cc by|atribui`, ou fonte OSM/Overpass/Nominatim.
  Exige e não diz a fonte: erro `CREDITO_SEM_FONTE`.
- **Na descrição:** `blocoCreditosDescricao` → `out/<proj>/_creditos-mapa.md` ("Créditos de mapa:" + a descrição longa
  do perfil com os links + uma linha por geometria que exige, sem repetir a URL do OSM). No maptiler: "Mapas: © MapTiler
  (https://www.maptiler.com/copyright/) · © OpenStreetMap contributors — dados sob a Open Database License
  (https://www.openstreetmap.org/copyright)".
- A pesquisa de licença por trás está em `docs/CREDITO-DE-MAPA.md` (393 linhas).

---

## 7. O render (`src/ferramentas/renderizar.mjs`)

**Comando** (no canal, sempre com a pré-carga e `--4k`; CLAUDE.md, "Tropeços conhecidos"):
```
node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs C:/projetos/regie-v1/src/ferramentas/renderizar.mjs <proj> --cena=<id>[,<id>] --4k [--paralelo=2] [--espera=100] [--forcar]
```

**Entra:** `out/<proj>/graphics/<id>.html` (todas as cenas, ou as de `--cena`), o perfil gravado
(`_media/_vendor/perfil-mapa.json`) e a chave pela `chavesParaCena`. Precisa do Chrome (`acharChrome`, ou `CHROME_PATH`),
do ffmpeg e do ffprobe (`FFMPEG_PATH`/`FFPROBE_PATH`, ou `REGIE_FFMPEG`/`REGIE_FFPROBE`), Node 22+.

**Sai:** `out/<proj>/graphics/<id>.mp4` + o carimbo `<id>.mp4.de-html` e um JSON no stdout com o resultado de cada cena.

- **Palco e resolução** (`palco()`): com `data-render="4k-native"`, 3840×2160 a DPR 0,5 (= 1080p) por padrão; `--4k` dá
  DPR 1 (= 2160p). Sem o atributo, palco 1920×1080.
- **O carimbo** (`<id>.mp4.de-html`) são duas linhas: o **sha1 dos bytes do HTML** e a resolução (`1080p` ou `2160p`).
  Com carimbo igual, a cena sai "pulada" (o clipe já é deste HTML), a não ser com `--forcar`. O carimbo **não** cobre o
  que a cena carrega (perfil, vendor, geometria, `tokens.css`, fotos): mudou algo disso, renderize com `--forcar`. Um
  render sem `--4k` grava `1080p` no carimbo (no canal, todo render leva `--4k` e o clipe só vale com `2160p`).
- **Encode:** quadros JPEG (qualidade 95) → libx264, crf 16, preset medium, yuv420p, BT.709 limitado (convertido do
  BT.601 cheio do Chrome), 30 fps, **all-intra** (`keyint=1`), sem áudio, `+faststart`. Quadros = `round(__duracao × 30)`;
  o ffprobe confere o número de quadros do clipe.
- **Cena de mapa** (a que declara `window.__ready`): espera o `__ready` (até 20 s), mantém o `requestAnimationFrame`
  vivo e, a cada quadro, `await __renderAt(t)` → `await __aguardarMapa()` → espera fixa de `--espera` ms (100) →
  `Page.captureScreenshot`. Cada comando tem teto de 120 s.
- **A chave** vai por `Page.addScriptToEvaluateOnNewDocument` como `window.__chaves`, em toda cena da produção quando o
  perfil pede credencial.
- **Paralelo:** um Chrome por cena, `--paralelo=1..8` (padrão 2).
- **Códigos de saída:** 0 ok · 1 infraestrutura (sem Chrome, ffmpeg, chave, uso errado) · 2 contrato da cena quebrado
  (lido **antes** de abrir o Chrome: relógio real, sorteio, `@keyframes`, a lista de `src/cena/proibidos.mjs`, no HTML e
  nos `.css`/`.js` locais, menos o vendor conferido por sha) · 3 erro de JS ou `__erroCena` · 4 mídia, fonte ou folha que
  não carregou. Várias falhas: o código da primeira, em ordem de id.
- **Avisos que não reprovam:** renderizador por software (SwiftShader/llvmpipe) sai no log ("sai certo, porém mais
  lento"); `window.__avisos` da cena.
- **Limites:**
  - custo medido pelo motor (WSL2, SwiftShader, 1080p, perfil `aberto`): 3 a 9 s por quadro; quadro de salto de câmera,
    29–35 s. WebGL headless no Windows não foi medido pelo motor;
  - no canal, sem a pré-carga `cdp-sem-compressao.mjs` o WebSocket do Node 24 cai quando um quadro passa de 4 MB (satélite):
    "a conexão com o navegador caiu" (`APRENDIZADOS.md`, item 57);
  - cada render de cena maptiler pede tiles pagos: no canal, o contador se anota antes e depois
    (`out/<proj>/_pesquisa/maptiler-gasto.md`).

---

## 8. O quadro parado (`src/ferramentas/quadro.mjs`)

**Comando:**
```
node --import file:///C:/projetos/alpha-point/ferramentas/cdp-sem-compressao.mjs C:/projetos/regie-v1/src/ferramentas/quadro.mjs <arquivo.html> <saida.png> [--largura=3840] [--altura=2160] [--escala=1] [--t=<s>] [--transparente] [--tokens=<css>] [--marca=<json>]
```

- **Entra:** um HTML qualquer; com `--t`, chama `__prepararCaptura` e `__renderAt(t)` e passa pelo mesmo contrato estático do
  render. **Sai:** um PNG (`largura × escala` por `altura × escala`), gravado por nome provisório e rename, e um JSON no stdout.
- **Cena de mapa:** a chave chega como no render (`chavesDaPeca`), mas **só se o HTML mora numa pasta chamada `graphics`**
  (a produção é a pasta de cima). A espera do mapa (`__aguardarMapa`) também roda.
- **Códigos:** os do render (1, 2 só com `--t`, 3, 4).
- **Limites:**
  - o PNG de satélite em 4K passa de ~4 MB; sem a pré-carga do canal, a conexão com o Chrome cai (`APRENDIZADOS.md`,
    itens 17 e 57). Com a pré-carga, funciona; sem ela, renderize e tire o quadro do MP4 com o ffmpeg;
  - `--t` maior que `__duracao` sai 1.

---

## 9. O mapista do molde (`template/.claude/agents/mapista.md`, 472 linhas)

O `.claude/agents/mapista.md` do canal é idêntico byte a byte (conferido com `cmp`). O que ele pede, e o que o motor
entrega ou não:

- **Ofício** (§1–§10): geometria sempre real (nunca à mão); país destacado = território inteiro; uma base por vídeo, ao vivo,
  com relevo irmão; 2D ou 3D-drone, com os critérios de quando o 3D é obrigação (§5b) e da aritmética do relevo de poucos
  metros (§5c); órbita contínua (§6b); linha desenhada sobre base real é afirmação sobre a base (§6c); vizinho rotulado só com
  fronteira terrestre conferida (§6d); território em tempo passado nunca sobre base anacrônica (§8); o que ele recusa (§10).
- **Contrato** (§1–§9): entra o segmento do `espelho.json`, o `words.json`, a geometria, o `conceito-visual.json` e a marca;
  sai `out/<proj>/graphics/<id>.html`, com mídia por caminho relativo e sem segredo; o contrato de captura (§3); palco 4K
  (§4); o motor cartográfico (§5).
- **O que o ofício cita e o motor NÃO tem:**
  - `scripts/maprender.mjs` (o tirador de quadro de mapa da §7, checagens 1 e 7): **não existe** no molde nem na pré-v1
    (`docs/MAPAS.md`, "O que ficou para depois"). No canal, o quadro de mapa sai pelo `quadro.mjs` com a pré-carga, ou do MP4;
  - os gates de mapa `qc-mapa-movimento`, `-borda`, `-canvas`, `-vivo`, `qc-base-unica` e `qc-rotulo-territorio`: **não
    vieram**. Dos portões citados na §7, existem no canal `qc-carga`, `qc-pais-bandeira`, `qc-contrato` e `check-overlap`;
  - a capacidade `geometry.catalog` = o `catalogo.mjs` (§5); `render.webgl.4k` = o `renderizar.mjs` local;
  - o `<workspace>/tools/map-renderer` e o `terrain-renderer` (Cesium): não existem;
  - a §3 manda `isSourceLoaded('sat')`; no molde da Régie a fonte se chama `base`;
  - o checador de hex da §7 usa `perl`; no canal, o `qc-hex` (`scripts/qc-hex.mjs`).
- **Aviso do próprio ofício:** o `shot.mjs` genérico "stuba" o loop de animação do motor de mapa e fotografa tile cru:
  ele mente sobre a cena de mapa. (No canal, o mesmo vale para `_audit-til` e `qc-rodape-contraste` do molde, que o
  `ferramentas/portao-mapa.mjs` substitui em cena de mapa; CLAUDE.md, "Os portões medem".)
- **A roupa** do canal é `marca/agentes/mapista.md`.

---

## 10. O que o motor não faz (e onde o canal já preencheu)

| Falta no motor | Onde está dito | O que o canal tem |
|---|---|---|
| `pausa: true` da câmera não segura a imagem | cabeçalho de `camera-mapa.js`; `MAPAS.md`, achado 3 | a cena calcula o trecho parado por conta própria |
| tirador de quadro de mapa (`maprender.mjs`) e gates de mapa | `MAPAS.md`, "O que ficou para depois" | `quadro.mjs` com a pré-carga; `ferramentas/portao-mapa.mjs` (til e rodapé); `ferramentas/portao-margens.mjs` |
| chave da MapTiler nos portões do molde | (o portão abre a cena sem a chave) | `ferramentas/chaves-nos-portoes.mjs` (pré-carga) e o `conferir` dele |
| quadro grande derruba o CDP no Node 24 | (não previsto) | `ferramentas/cdp-sem-compressao.mjs` (pré-carga de todo render e quadro) |
| projeção polar / globo | `MAPAS.md`: MapLibre 4.7.1 só faz Web Mercator | nada |
| mapa como camada com alfa no Premiere | `MAPAS.md`: a cena sai opaca, tela cheia | nada |
| base offline (PMTiles) | `MAPAS.md` | o rascunho de tiles cinza só na linha do tempo |
| resolvedores IBGE, geoBoundaries, F1, mapas históricos | `MAPAS.md` | nada |
| bandeiras com procedência | `MAPAS.md` | `assets/flags/` do molde (tamanho variável: medir com `ffprobe`) |
| relevo e câmera 3D da MapTiler com prova | (não medido no motor) | provados no Juneau (s44 e s01) e liberados no vídeo 4 |
| rota OSM com pista dupla e rotatória | o `geo-osm-rota` só avisa os órfãos | `out/juneau/_pesquisa/estrada-juneau-cascade.mjs` |
| ponto de cidade com procedência | só a camada NE em pontos e o `geo-lugar-osm --so-ponto` | `out/juneau/_pesquisa/cidades-ne.mjs` e `ponto-fim-da-estrada.mjs` |
| base Landsat | (o motor só tem os três perfis) | `out/prova-mapa/_pesquisa/base-landsat.py` (teste; a base dos vídeos é a MapTiler) |

Nota: o `template/scripts/mapa-limpo.mjs` do molde **não é de mapa geográfico**: é a régua de timecode entre o que se
revisa e o `espelho.json`.
