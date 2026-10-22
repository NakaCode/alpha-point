# Peru (peru-agua) — a geometria (pesquisa-geo, 22/10/2026)

Registro de cada camada de `out/peru-agua/_media/geo/`. O contrato é o `pauta-geo.json` ao lado (34 itens e 5 bloqueios).
Este arquivo dá a fonte, a data, a fidelidade medida e o crédito de cada uma. Tudo em WGS84, lon/lat em graus decimais. Cada
`.json` tem o seu `.js` (o que a cena carrega). O relato da tarefa está em `out/peru-agua/_tmp/pesquisa-geo/relato.md`.

## As duas camadas que o vídeo inteiro usa

### A divisória e as vertentes (uma fonte só)

- **Fonte:** HydroBASINS v1c (WWF/HydroSHEDS), nível 6, América do Sul (`hybas_sa_lev06_v1c.zip`, 10.389.476 bytes, sha256
  `6b1899bdbee46354…`), baixado de `data.hydrosheds.org` em 22/10/2026. O relevo de base é o SRTM de 15" (~500 m), de 2013.
  O zip fica em `_tmp/pesquisa-geo/baixado/hybas/`, fora do git.
- **Método** (`geo_vertentes.py`): cada bacia segue `NEXT_DOWN` até a terminal, e a terminal decide a vertente: endorreica no
  Altiplano = Titicaca; saída a leste de −60° = Atlântico (no Peru, só o Amazonas); saída a oeste de −69° = Pacífico. As
  bacias se juntam por vertente e se recortam pelo `peru-ne`. As fitas entre a costa do NE e a do HydroBASINS (867 km², 403
  pedaços, quase tudo na costa) vão à vertente com que dividem mais borda, todas ao Pacífico. Depois vem o
  `shapely.coverage_simplify`, tol 0,003° (~330 m), com o contorno do país intacto. A divisória é a aresta COMPARTILHADA das
  vertentes simplificadas.
- **Conferência:** as três vertentes fecham o Peru sem sobreposição. O vão que sobra é de 0,27 km² (arredondamento a 5
  casas). Cada trecho da divisória está a 0,000° do contorno das duas vertentes que ele separa. Os pontos de referência caem
  do lado certo: Lima, Matucana, Huaraz e Arequipa no Pacífico; a estação de Marcapomacocha, Tarma, Huancayo, Cajamarca,
  Satipo, Iquitos e Cusco no Atlântico; Puno no Titicaca. O túnel Cuevas–Milloc (OSM) cruza a divisória em (−76,3348,
  −11,5415): a boca de Cuevas fica no lado atlântico, e a lagoa Milloc, no Pacífico.

| | HydroBASINS (este) | ANA (PNRH, doc.num-02) | diferença |
|---|---|---|---|
| Pacífico | 280.991 km² (108.491 mi²) | 278.483 km² | +0,9 % |
| Atlântico (Amazonas) | 960.519 km² (370.858 mi²) | 957.822 km² | +0,3 % |
| Titicaca | 48.367 km² (18.675 mi²) | 48.910 km² | −1,1 % |
| Peru (contorno do NE) | 1.289.876 km² | 1.285.215,6 km² | +0,4 % |

Áreas no elipsoide WGS84, pela cilíndrica de área igual de Lambert (exata em área), no polígono entregue.

- **A linha:** Pacífico–Atlântico 2.538 km, Pacífico–Titicaca 496 km, Atlântico–Titicaca 453 km, cada uma contínua (1
  LineString). A menor distância de Campo de Marte à divisória é 95,8 km (59,5 mi), no ponto (−76,3492, −11,5410). A
  estação de Marcapomacocha fica a 7,6 km dela.
- **Licença:** a HydroSHEDS v1 License Agreement (WWF), livre para uso comercial. O crédito do Exhibit B vai na DESCRIÇÃO
  (`credito_descricao` no json), não na tela. A licença é "com ressalvas" em `marca/acervos/5-dados-e-fronteiras.md` §1.9:
  é privada, com auditoria e rescisão a critério da WWF. O `robots.txt` de `data.hydrosheds.org` é `Disallow: /`, e o zip da
  1ª tarefa veio por script (ver o relato).
- **Resolvido em 22/10/2026 (2ª tarefa).** A licença v1: o Lucas, 22/10/2026, 02:2x, no chat da Sala, literal: "Aceito a v1 e
  eu baixo (Recomendado)" (`roteiros/peru-agua/decisoes-lucas.md`, "22/10/2026, 02:2x"). O download: o Lucas baixou no Brave o
  `hybas_sa_lev06_v1c.zip` pela página do HydroBASINS, às 02:19 ("baixei o arquivo"); a Sala o conferiu às 02:2x: 10.389.476
  bytes, sha256 `6b1899bdbee46354a9f4729bbf916108fb31ed2facdfac449237c00d3e39e90e`, idêntico byte a byte ao da 1ª tarefa (o
  setor conferiu o sha256 e o tamanho; registro no commit `8cfa910`). Nada se refaz. **As 5 camadas do HydroBASINS
  (`divisoria-continental-peru`, as três vertentes e `bacia-mantaro`) estão liberadas para render** (`render_liberado: true`
  no json). A licença continua a v1 da WWF; o crédito longo (Exhibit B) vai na descrição do YouTube, com o título do vídeo no
  lugar de "This product", e nada na tela. Nada mais se pede a `data.hydrosheds.org` por programa.
- **`bacia-mantaro`:** a 4ª peça da mesma cobertura. É a bacia INTEIRA do Mantaro, com 34.534 km² (a ANA dá 34.550 ao
  Mantaro). No nível 6 a "cuenca alta" não se separa. **Desde a 2ª tarefa, o `rotulo` da camada é "Mantaro basin"** (antes,
  "upper Mantaro basin", que dizia mais do que o polígono), e a `nota_mapista` diz: a voz da s39 diz "upper Mantaro basin";
  nunca pintar o polígono inteiro com esse rótulo; para "upper", câmera e rótulo no norte, sobre as lagoas de
  Marcapomacocha, ou um recorte declarado na tela. O texto de tela é do `redator-de-tela`. sha256 novo `0a179c78da1c3cba…`
  (antes `62eac8b5cd2834ab…`); a geometria é a mesma, byte a byte.

### O desierto costero do MINAM: SEM POLÍGONO (decisão da Sala)

O polígono não foi obtido, e a área **não foi medida**. Os 7.107.338 ha (≈ 27.442 mi²) do folheto (doc.num-41) seguem como
o único número; nenhuma geometria o confere. O que se tentou está no relato e em `bloqueios` do json. **Decisão da Sala
(22/10/2026, `consolidado.json` › `decisoes_da_sala`, "s21, o deserto costeiro"):** a s21 fica sem polígono. Na tela vão o
número e a fonte ("ABOUT 27,000 SQ MI (71,000 km²)", "Source: MINAM (Peru), 2019"), Piura e Tacna. Nenhum contorno de
deserto de outra fonte.

## As camadas

| arquivo | atende (`needs.geo`) | fonte · data | licença / tela | feat. | fidelidade |
|---|---|---|---|---|---|
| `peru-ne` | peru-ne | NE 1:10m admin-0 v5.1 (2022), tol 0,002° | domínio público, sem crédito | 1 (5 partes) | costa generalizada (2.421 → 1.794 vértices) |
| `chile-ne` | chile-ne | NE 1:10m admin-0, tol 0,004° | idem | 1 (163 partes) | contexto |
| `divisoria-continental-peru` | divisoria-continental-peru | HydroBASINS v1c | Exhibit B na descrição | 3 | acima |
| `vertente-pacifico` · `-atlantico` · `-titicaca` | idem | HydroBASINS v1c | idem | 1 cada | acima |
| `bacia-mantaro` | bacia-alto-mantaro | HydroBASINS v1c | idem | 1 | a bacia inteira (34.534 km²) |
| `tunel-transandino` | tunel-transandino | OSM way/1226268824 + 37 ways do canal, 22/10/2026 | ODbL: `© OpenStreetMap contributors` | 2 | canal 11,98 km (JICA 11,9) + túnel 10,08 km (JICA 10,1) = 22,06 km = **13,71 mi**; no OSM o túnel é uma reta de 2 nós; o canal começa em (−76,3293, −11,4052), a leste da lagoa Marcapomacocha |
| `lagoas-marcapomacocha-antacoto` | idem | OSM (way/26966977, relation/16907593, relation/16907595, way/26976126) | ODbL | 4 | Marcapomacocha 4,62 km², Antacoto 5,18 (no OSM "Antaquta", alt "Antacota"), Marcacocha 2,97, Tucto 0,55; Sangrar não tem lago no OSM; a lista das 19 lagoas não foi lida |
| `represas-antacoto-huascacocha-yuracmayo` | idem | OSM (relation/16907593, way/26966700, way/26943485) | ODbL | 3 | Antacoto e Huascacocha no lado atlântico; Yuracmayo no Pacífico (rio Blanco → Rímac) |
| `segundo-tunel-pontas` | segundo-tunel-planejado | OSM (way/26966553, way/26966527, way/293766958) | ODbL | 3 | Pomacocha e Huallacocha (Mantaro) e o rio Blanco; **a quebrada Pucullo não está no OSM** |
| `huinco` | huinco | OSM way/864802081 | ODbL | 1 | ponto dentro da usina (start_date 1964) |
| `la-atarjea` | la-atarjea | OSM way/299519645 | ODbL | 2 | contorno da planta (2,68 km²) + ponto |
| `villa-el-salvador` | idem | OSM relation/1944858 | ODbL | 1 | 34,0 km² (INEI 35,46) |
| `san-juan-de-miraflores` | idem | OSM relation/1944816 | ODbL | 1 | 22,1 km² (INEI 23,98) |
| `puente-piedra` | idem | OSM relation/1944788 | ODbL | 1 | **50,2 km² contra 71,18 do INEI (−30 %)** |
| `ilha-san-lorenzo` | ilha-san-lorenzo | OSM relation/3285474 | ODbL | 1 | 16,2 km²; o `peru-ne` cobre 92 % dela |
| `lima-callao-metropolitana` | idem | OSM relation/1944670 (Província de Lima) + relation/1944657 (Callao) | ODbL | 2 | o polígono ADMINISTRATIVO: Lima 2.702 km² (INEI 2.672), Callao 160,7 km² com as ilhas |
| `pontos-osm` | pamplona-1971, puquios-cantalloc, vilca, matucana, satipo, jauja, (cordilheira) | OSM, 22/10/2026 | ODbL | 11 | Pamplona = o bairro de hoje (node/9733606657), ponto aproximado declarado do lugar de 1971; Cantalloc = "Acueductos de Cantayoq" (way/1390289421); **Vilca = o povoado (node/2651665845, Huancaya, Yauyos), não a estação**; cumes do Huaguruncho e do Huaytapallana |
| `cidades-peru-ne` | lima, callao, iquitos, piura, tacna, nazca, jauja, satipo | NE 1:10m populated places | domínio público | 8 | todos em terra; Callao a 0,62 km da costa do NE; Jauja a 2,7 km e Satipo a 5,8 km do ponto do OSM (o ponto do OSM fica em `alternativa_osm`) |
| `pontos-fontes` | lima, satipo, matucana, caral, chan-chan, nazca, (lagoas) | SENAMHI (Campo de Marte), CSV da OMM 1991–2020, fichas da UNESCO | fato; o crédito é o do dado da cena | 7 | as coordenadas como as fontes as publicam; todas em terra |
| `rios-vertente-pacifico` | rios-vertente-pacifico | OSM, 79 relations no polígono da vertente | ODbL | 31 | os rios que chegam ao mar, sem afluentes; DP 0,002° |
| `rios-vertente-atlantico` | rios-vertente-atlantico | NE 1:10m rios | domínio público | 11 | os grandes; o NE não tem o Mantaro |
| `amazonas-ate-o-atlantico` | amazonas-ate-o-atlantico | NE 1:10m rios | domínio público | 3 | Amazonas, Marañón e Ucayali; o NE termina a linha a −52,7° (estuário) |
| `departamento-lima` | departamento-lima | NE admin-1 (PER-591 + PER-587) | domínio público | 1 | o departamento inteiro, sem o Callao, 35.221 km²; 1:10M |
| `loreto` | loreto | NE admin-1 PER-585 | domínio público | 1 | 373.776 km² (INEI 368.852) |
| `pacifico-sudeste` | pacifico-sudeste, (corrente-de-humboldt) | NE marine polys, recortado em −95,−35,−68,2 | domínio público | 1 | a corrente é esquema declarado do mapista |
| `rio-rimac` | rio-rimac | OSM relation/4637139 (`geo-osm-rota`, 0 órfãos) | ODbL | 1 | 139,2 km (a ANA dá ~145) |
| `rio-chillon` · `rio-lurin` · `rio-santa-eulalia` · `rio-supe` | idem | OSM relations 11643078 · 5149111 · 11750952 · 12024858 | ODbL | 1 cada | 135,1 · 90,5 · 43,3 · 96,9 km; o Santa Eulalia não inclui o trecho Milloc → Pillica |
| `rio-moche` | vale-moche, canal-chan-chan | OSM relation/4637091 | ODbL | 1 | 83,2 km; passa a 7,1 km de Chan Chan |
| `rio-chicama` | vale-chicama, canal-chan-chan | OSM relation/4637088 | ODbL | 1 | 166,6 km; o ponto mais perto de Chan Chan é a foz, a 29,6 km |

**As cenas que carregam OSM**, e por isso levam `© OpenStreetMap contributors` na tela (o crédito da base MapTiler já o
traz) e `openstreetmap.org/copyright` na descrição: s04, s07, s08, s18, s19, s22, s23, s24, s25, s26, s28, s29, s34,
s35, s36, s39, s40, s41, s42, s43, s44, s45, s48, s49, s50, s51 e s52 (a lista por camada está no campo `cena` do json). A s43
e a s44 entram pelo túnel (s43) e pela `lima-callao-metropolitana` (s44), não pela periferia, que ficou bloqueada.

## Onde a geometria simplificada desloca algo

- A costa do `peru-ne` é a do NE 1:10M. Callao fica a 0,62 km do mar e Chan Chan a 2,05 km. A ilha San Lorenzo só está 92 %
  dentro dela, e a Província de Lima e o Callao do OSM passam 3,1 e 2,3 km² para fora dela. Se a cena pintar a terra com o
  `peru-ne` em quadro fechado de Lima, declare o deslocamento, ou use o satélite.
- A divisória tem a precisão do HydroBASINS (~500 m) mais a simplificação (≤ 330 m). Em quadro de 50 km de largura, isso dá
  até ~25 px no palco de 3840.
- O túnel do OSM é uma reta entre as bocas; o traçado sob a montanha não está mapeado.

## Bloqueios (em `bloqueios` do json)

`desierto-costero-minam` (s21), `regioes-naturais-inei` (s31), `lima-periferia-sem-rede` (s43, s44),
`cordilheira-oriental-crista` (s18; só os cumes foram entregues) e `encosta-leste-andes` (s18). O que se tentou e o caminho
de cada um está no relato.

**As decisões da Sala sobre eles** (22/10/2026, `out/peru-agua/_tmp/verificar-research/consolidado.json` › `decisoes_da_sala`;
o campo `decisao_sala` de cada bloqueio no json):
- **s21** (`desierto-costero-minam`): fica sem polígono; na tela, o número e a fonte, Piura e Tacna; nenhum contorno de outra
  fonte (acima). Bloqueio definitivo neste vídeo.
- **s43 e s44** (`lima-periferia-sem-rede`): o need sai; quem muda o espelho é a Direção. Na s43, o aéreo da borda com "Lima";
  na s44, o `lima-callao-metropolitana` com o número da Sunass para Lima e Callao inteiros, sem borda nem distrito aceso.
- **s31** (`regioes-naturais-inei`): fica com a Direção, que replaneja sem a mancha da Costa do censo, sem trocar a régua pela
  vertente. Nenhuma rodada de Overpass para distritos.
- **s18** (a crista e a encosta): uma forma só, no traço do canal, entre os dois cumes reais (`pontos-osm`), declarada como
  esquema e sem altitude (Lucas, 22/10/2026, 02:0x, "O traço do canal"). Nenhuma linha de crista se mede aqui.
