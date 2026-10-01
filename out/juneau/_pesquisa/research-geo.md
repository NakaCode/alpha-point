# Research: pesquisa-geo (juneau), 27/09/2026

**O pedido:** o `needs.geo` das 12 cenas que o pedem (`espelho.json`; a fila está em `espelho-report.md` §4.3). A geometria que já existia (16 camadas) ficou intacta. A cópia de antes está em `out/juneau/_tmp/pauta-geo.antes-research-geo-20260927-122328.json`, e a do manifest do cache da máquina está ao lado dela.

**O registro:** `out/juneau/_pesquisa/pauta-geo.json`, agora com 40 itens (os 16 antigos, iguais byte a byte, e 24 deste research), validado. Os arquivos estão em `out/juneau/_media/geo/<slug>.json`, e cada um tem o `.js` que a cena carrega.

- Tudo foi gravado pelo `gravarGeo` da pré-v1, como na roupa §2: a geometria fica em `_media/geo/` e a procedência na pauta. Não há `_PROCEDENCIA.json` por cena porque não se trata de mídia de acervo, e o `qc-procedencia` não lê `.json`.
- Não houve pedido à MapTiler, crédito gasto, navegador nem banco pago.
- Nenhum site recusou leitura. O Overpass deu 504 (sobrecarga) três vezes na primeira volta; as tentativas foram espaçadas e depois ele respondeu. O NHD do USGS estourou o tempo uma vez, na consulta do Willow Creek, que não foi refeita: o Willow Creek do OSM bate com a foz e a nascente do GNIS.

## 0. O que mudou nesta volta (conserto do verificador, 27/09)

Cópias de antes, em `out/juneau/_tmp/bkp-verif-geo-20260927-132345/`: pauta, este relato, as 5 camadas regravadas (`.json` e `.js`) e o manifest do cache da máquina.

1. **O local de Willow (s15).** O NÃO ACHADO partia de uma leitura incompleta do folheto de 1976.
   - A p. 48 (PDF p. 2), lida na imagem, também diz que o local é limitado por Willow Creek ao norte, pelo Little Susitna River ao sul e pela Alaska Railroad a oeste, e que a cidade ficaria junto do Deception Creek. A mesma página tem o mapa WILLOW SITE, com o contorno do local.
   - A linha do NÃO ACHADO foi reescrita (seção 2), e as feições reais que o texto nomeia foram entregues em **`limites-sitio-willow-1976`** (nova).
   - O Deception Creek veio do NHD do USGS, porque o OSM só tem 7 dos 33 km dele. Nenhum ponto "5 mi a leste" foi posto.
2. **Larson Lake e Mount Yenlo (s15).** O folheto diz onde ficavam os dois locais (p. 49 e 50, lidas na imagem).
   - O `nao_e` dos dois pontos foi reescrito pelo `geo-gnis-juneau.mjs --so=…`, com a propriedade nova `local_1976` (página, o que diz, as feições que limitam o local no GNIS). A geometria não mudou.
   - A pendência que eu tinha passado ao verificador-de-fatos está respondida pela fonte primária (item 5 da seção 3).
3. **A Glenn Highway (s10).** A camada acabava em Glennallen e não chegava à Alaska Highway.
   - O elo existe no OSM e foi baixado com o mesmo método: **`estrada-glennallen-tok`** (nova), pela Richardson Highway e pelo Tok Cutoff até Tok.
   - A `glenn-highway` foi regravada só para a nota apontar o elo. Geometria idêntica.
4. **Correção achada no caminho: os raios de 30 mi (s12).** A conferência dos raios chamava a vila de Willow, o lago e o cume de "lugares de 1976" e exigia que ficassem fora do círculo.
   - São as feições, não os locais.
   - A travessia do Little Susitna pela ferrovia, onde se encontram os limites sul e oeste que o texto dá ao local de Willow, fica a 28,6 mi do ponto de Anchorage, **dentro** do círculo desenhado.
   - Os dois raios foram regravados com a conferência corrigida (`feicoes_de_1976_a_distancia_mi` e `travessia_little_susitna_ferrovia_a_distancia_mi`). A geometria não mudou (item 4 da seção 3).

## 1. O que foi entregue

As colunas **Licença** e **Tela** dizem se a camada põe crédito na tela. Domínio público não põe nada. "OSM" põe `© OpenStreetMap contributors`, que a base MapTiler já mostra durante todo o mapa.

| Pedido no espelho (cenas) | Arquivo | Fonte (data na origem) | Licença · tela | Resolução | Conferido |
|---|---|---|---|---|---|
| `british-columbia` (s44) | `british-columbia.json` | Natural Earth admin-1, CA-BC (commit ca96624, v5.1) | Domínio público · nada | 1 feature, 87 partes, 7.713 vértices, 165 KB, sem simplificação | Victoria e Prince George dentro, Juneau fora |
| `yukon` (s44) | `yukon.json` | NE admin-1, CA-YT | Domínio público · nada | 2 partes, 1.548 vértices, 34 KB | Whitehorse dentro, Juneau fora |
| `juneau-icefield` (s44) | `juneau-icefield.json` | NE `ne_10m_glaciated_areas`, name "Juneau Icefield" | Domínio público · nada | 1 polígono, 1.567 vértices, 34 KB | **Cruza a fronteira**, como diz mec-20.1: 561 vértices caem na B.C. e 1.002 no Alasca |
| `rede-rodoviaria-continente` (s03, s10) | `rede-rodoviaria-continente.json` | NE `ne_10m_roads`, recorte -170,51,-110,72, sem balsas | Domínio público · nada | 200 linhas, 242 KB | Nenhuma estrada a menos de 20 km de Juneau. **Correção declarada** no item 3.1 |
| `rede-rodoviaria-alasca` (s33) | `rede-rodoviaria-alasca.json` | O mesmo recorte, só `sov_a3` USA | Domínio público · nada | 25 linhas, 39 KB | A ligação com o continente segue pelas features CAN da camada acima |
| `alaska-highway` (s10, s44) | `alaska-highway.json` | OSM relation/326897, mais 8 ways com o mesmo nome em Teslin, Tok e Delta Junction (Overpass, 27/09 15:37Z) | ODbL · OSM | 1.909 vértices (DP 0,0005°), 46 KB | Vai de Dawson Creek (a 1,1 km do ponto do NE) a Delta Junction (a 0,2 km do GNIS). Mede 2.196 km (1.364,7 mi); a relation declara 2.232 |
| (s44, o trecho do Yukon) | `alaska-highway-trecho-yukon.json` | A mesma relation | ODbL · OSM | 128 vértices | Do nó que ela divide com a Haines Highway ao nó que divide com a Klondike: 172,5 km (107,2 mi) |
| `alaska-highway-ligacao-continente` (s10) | `alaska-highway-ligacao-continente.json` | Ponto de Dawson Creek no NE (ne_id 1159143727) | Domínio público · nada | 1 ponto | A ponta sul da rota do OSM fica a 1,09 km. O nome vem da fonte; o dossiê não o cita |
| `glenn-highway` (s10) | `glenn-highway.json` | OSM relation/16266162 (`from=Anchorage`, `to=Glennallen`), mais 3 ways em Anchorage | ODbL · OSM | 373 vértices | Do centro de Anchorage a Glennallen: 288,6 km (179,3 mi). Acaba no entroncamento com a Richardson, a 3,7 km do ponto de Glennallen no GNIS. **Não chega à Alaska Highway sozinha**: o elo é a linha abaixo |
| `glenn-highway`, o elo até a Alaska Highway (s10) | `estrada-glennallen-tok.json` (**nova**) | OSM relation/326212 ("Alaska Route 1") e relation/16204311 ("Tok Cut-Off", `from=Tok`, `to=Gulkana`), mais os ways com ref AK 1 da janela (Overpass, 27/09 16:24Z) | ODbL · OSM | 275 vértices (DP 0,0003°), 9 KB | Começa no mesmo vértice em que a `glenn-highway` acaba (0,000 km). Vai pela Richardson Highway (ref "AK 1;AK 4") por 22,5 km (14,0 mi) até Gakona Junction (a 0,1 km do GNIS 1402450). Segue pelo Tok Cutoff (ref "AK 1") por 196,4 km (122,0 mi) até o nó que a AK-1 divide com a Alaska Highway, em Tok (a 0,1 km do GNIS 1411046). Total: 218,9 km (136,0 mi). Nenhum way fora das duas relations |
| `haines-highway` (s44) | `haines-highway.json` | OSM relation/16265497 | ODbL · OSM | 380 vértices | De Haines (0,4 km) ao nó que ela divide com a Alaska Highway: 237,4 km (147,5 mi). O FSEIS dá "the 150-mile highway spur" (mec-01), e outros guias, 146–153 mi |
| `klondike-highway` (s44) | `klondike-highway.json` | OSM relations 8747347 (B.C.) e 5385974 (YT), mais os ways AK 98 | ODbL · OSM | 284 vértices | De Skagway (1,3 km) ao 1º nó que ela divide com a Alaska Highway, a 16,1 km de Whitehorse. É o "near Whitehorse" de mec-01.8. Mede 154,3 km (95,9 mi) |
| `haines-junction` (s44) | `haines-junction-osm.json` | OSM node/1715159941 (`place=town`) | ODbL · OSM | 1 ponto | Fica a 0,02 km do encontro Haines × Alaska Highway. O NE não tem Haines Junction |
| `estrada-anchorage-willow` (s15) | `estrada-anchorage-willow.json` | Glenn (16266162) + Parks (7636966/7636967), mais 2 ways | ODbL · OSM | 147 vértices | Do centro de Anchorage à **vila** de Willow: 109,7 km (**68,2 mi**). A fonte dá "approximately 70 road miles" até o **local**, que fica 5 mi a leste da vila |
| `sitio-capital-willow-1976` (s15): **o mais próximo** | `limites-sitio-willow-1976.json` (**nova**) | Willow Creek e Little Susitna River: OSM (Overpass, 27/09 16:28Z). Deception Creek: USGS NHD, flowlines com gnis_id 01401055 (edição de 2015–2016, alta resolução). Alaska Railroad: OSM, a linha-tronco ("Central Subdivision", Alaska Railroad Corporation) | ODbL · OSM (o Deception Creek, domínio público) | 4 features, 2.612 vértices (DP 0,0002°), 68 KB | **São as feições que o folheto dá como limites, não o local** (seção 2). Cada curso bate com a foz e a nascente do GNIS: Willow Creek, 0,3 e 0,07 km; Little Susitna, 1,96 e 0,13 km; Deception Creek, 0,15 e 1,28 km. A ferrovia vai só da travessia do Little Susitna (a 0,56 km de Houston no GNIS) à do Willow Creek (a 2,03 km da vila de Willow no GNIS): 20,6 km (12,8 mi) |
| `matsu-borough` (s15, s33, s39) | `matsu-borough.json` | U.S. Census TIGERweb, Counties 500K, GEOID 02170 (vintage 01/01/2025) | Domínio público federal · nada | 1 polígono, 258 vértices, 7 KB | Willow, Wasilla, Palmer e Talkeetna dentro; Anchorage e Fairbanks fora |
| `raio-30mi-anchorage`, `raio-30mi-fairbanks` (s12) | `raio-30mi-*.json` | Medição: Vincenty no WGS84 a partir do ponto do NE, 360 azimutes | Domínio público · nada | 361 vértices | O inverso dá 48.280,26–48.280,37 m (30 mi = 48.280,32). Do ponto de Anchorage: a vila de Willow a 37,2 mi, o lago Larson a 77,6 e o cume do Mt. Yenlo a 78,9. São as feições, não os locais. A travessia do Little Susitna pela ferrovia fica a **28,6 mi, dentro do círculo** (item 4 da seção 3) |
| `taku-inlet` (s44), **só o rótulo** | `taku-inlet-gnis.json` | USGS GNIS 1410576, Bay (ed. 12/02/2010) | Domínio público · nada | 1 ponto | Cai na água, a 18,7 km da foz do `rio-taku-osm`. O nó do OSM é esse mesmo ponto, importado do GNIS |
| `thane-road-fim` (s44), **pedido da direção de arte, 28/09** (seção 7) | `thane-road-fim.json` (**nova**) | OSM node/5691733230 (`highway=turning_circle`), a ponta sudeste da way/653314254 (`name=Thane Road`) (Overpass, 28/09 06:30Z) | ODbL · OSM | 1 ponto | 58.2454469, -134.2958702. **Terra**: a 62 m da costa do OSM, e também no NE 1:10M (a 154 m da costa simplificada). A 8,92 km (5,5 mi) do ponto de Juneau do NE, a 7,87 km (4,9 mi) pela via desde a ponta do centro |
| `lynn-canal` (s44, s48, s50), **só o rótulo** | `lynn-canal-gnis.json` | GNIS 1423488, Channel, BGN (ed. 16/06/2011) | Domínio público · nada | 1 ponto | Cai na água, a 10,2 km de Cascade Point |
| `echo-cove` (s50) | `echo-cove-gnis.json` | GNIS 1421647, Bay, Juneau (ed. 27/12/2010) | Domínio público · nada | 1 ponto | Fica a 0,52 km da estrada. No NE 1:10M cai em terra (a enseada é pequena demais para ele). Ver o item 3.3 |
| `terminal-katzehin` (s50): **o mais próximo** | `katzehin-river-gnis.json` | GNIS 1422993, a **foz** do rio (ed. 17/08/2010) | Domínio público · nada | 1 ponto | Margem leste, a 9,8 km de Haines. **Não é o terminal** (seção 2) |
| `sitios-1976-larson-lake-mount-yenlo` (s15) | `larson-lake-gnis.json`, `mount-yenlo-gnis.json` | GNIS 1405221 (Lake) e 1412337 (Summit). A posição dos locais vem do folheto de 1976, p. 49 e 50 | Domínio público · nada | 1 ponto cada | Cada nome é o único no GNIS do Alasca, e os dois ficam dentro do Mat-Su. **O lago e o cume, não os locais.** A cidade de Larson Lake ficaria na margem oeste do lago. O local de Mt. Yenlo ficava nas encostas ao sul do cume, e o cume fica no limite norte dele (item 5 da seção 3) |

- `name_pt` e `rotulo` levam o nome em **inglês** de propósito (roupa §4). O de `matsu-borough` é "Mat-Su Valley", da voz; o nome oficial está em `name`. O rótulo final é do redator-de-tela. A `estrada-glennallen-tok` tem `rotulo` vazio: o nome dos dois trechos está na propriedade `trechos`.
- As cenas com geometria OSM **nova** são s10, s15 e s44. As outras já tinham OSM da geometria antiga, e em todas vale o crédito da base MapTiler.

## 2. NÃO ACHADO (nada foi desenhado nem aproximado)

| Pedido (cena) | Buscas tentadas | O mais próximo que existe |
|---|---|---|
| `areas-anchorage-fairbanks` (s10) | A própria fonte (`poph.pdf`, p. 14) diz só "the Anchorage and Fairbanks areas" e "those two cities and their surrounding areas", sem limite. NE, OSM e TIGER só têm limites de hoje, e os boroughs só nasceram em 1964. As divisões censitárias de 1940–60 do NHGIS pedem conta, que não se cria | Os pontos das duas cidades (`cidades-ne`). Um borough de hoje seria anacrônico |
| `distritos-eleitorais-1974` (s12) | Busca na web ("Alaska 1974 election district boundaries shapefile"): o gis.data.alaska.gov só tem os distritos de 2013 em diante. NE e OSM não têm distrito eleitoral. O mapa de 1972–74 seria documento do Estado (midia.md §7.1) | Só os nomes do boletim, em texto, como o espelho já prevê |
| `sitio-capital-willow-1976`: o ponto e o contorno do local (s15) | Nem o GNIS (não tem "capital site"), nem o OSM, nem o NE têm o local. O folheto de 1976 (doc-16, p. 48 = PDF p. 2, lido na imagem em 27/09) dá: cerca de 70 milhas de estrada ao norte de Anchorage; a vila de Willow 5 mi a oeste; o local "generally bounded" por Willow Creek (N), o Little Susitna River (S) e a Alaska Railroad (O); a cidade no sopé dos Talkeetna Mountains, junto do Deception Creek. Não dá coordenada nem limite a leste. A mesma página traz o mapa WILLOW SITE, com o contorno do local (em degraus) e uma "development area" sobre um riacho | (1) **O mapa da p. 48**: figura do Estado, que só vai à tela com permissão clara (midia.md §7.1). É do pesquisa-documentos, e a `pauta-documentos.json` ainda não tem o folheto de 1976 (a "p. 48" de lá é a do folheto de 1978). (2) **As feições reais que o texto nomeia**, em `limites-sitio-willow-1976`, com o ponto do GNIS de cada curso: Willow Creek 1412108, Little Susitna River 1405547, Deception Creek 1401055. Elas mostram entre o quê o local ficava, sem fechar o contorno. (3) A vila (`cidade-willow-osm`), com "about five miles east" em texto |
| Contorno de `taku-inlet` (s44) | Nem o GNIS, nem o OSM (só o nó importado do GNIS) nem o NE (`ne_10m_geography_marine_polys`, baixado e lido) têm o polígono | Só o rótulo (`taku-inlet-gnis`) |
| Eixo ou contorno de `lynn-canal` (s44, s48, s50) | O GNIS tem só o ponto. O OSM (consulta de 27/09) não tem feição de água com esse nome, só um quartel de bombeiros e um cabo submarino. O NE também não | Só o rótulo (`lynn-canal-gnis`) |
| `rota-margem-leste-lynn-canal` (s48) e `rota-2b-2006` (s50) | O OSM não tem estrada proposta ou em obra na margem leste (58,6–59,5° N; só um way em obra dentro de Haines). As figuras do FSEIS são do Estado e não vão sem autorização escrita (midia.md §7.1, "O estudo de 2018") | O esquema declarado foi **decidido pelo Lucas em 27/09/2026**: "Sim, tracejada e com aviso (Recomendado)" (identidade §6, "Rota que nunca foi construída"; roupa §6). A linha é tracejada, sai do texto da fonte e do ponto de partida real, com `Approximate route` na tela |
| `terminal-katzehin` (s50) | A fonte dá só "a new ferry terminal 2 miles north of the Katzehin River" (mec-01), sem coordenada | A foz do rio (`katzehin-river-gnis`) |

O contorno dos locais de **Larson Lake** e de **Mt. Yenlo** também só existe nos mapas das p. 49 e 50 do mesmo folheto (figuras do Estado, §7.1). Para esses dois há âncora real: o lago e o cume (seção 1).

**O que isto muda no plano:** o montador decide, num re-espelho que não mexe nos ids.
- **s10**, plano 2: as duas camadas `glenn-highway` e `estrada-glennallen-tok` fazem o caminho de Anchorage até a Alaska Highway. O elo não se chama Glenn no OSM (item 2 da seção 3). No plano 3 ("as duas áreas acesas"), o plano fica sem polígono.
- **s12**, planos 1 a 3: sem os distritos.
- **s15**, plano 1 ("três locais na cédula"):
  - Willow só tem a vila, 5 mi a oeste do local;
  - Larson Lake tem o lago, e a cidade ficaria na margem oeste dele;
  - Mount Yenlo tem o cume, no limite norte do local.
- **s15**, plano 3: o anel do terreno continua sem ponto. O mais próximo em geometria são as linhas de `limites-sitio-willow-1976`; em documento, o mapa da p. 48 (§7.1).
- **s48 e s50**: as rotas não têm traçado.

## 3. Cuidados para quem desenha e para quem confere

1. **A correção no `ne_10m_roads`.** A feature `uident 7105` (a Klondike do lado do Alasca) seguia de Skagway até Haines pela margem do Taiya Inlet: 24,5 km de uma estrada que não existe.
   - O dossiê diz: "15 miles apart by water, but 350 miles apart over land via the Klondike Highway…" e "drive between Skagway and Haines using the highway route through Canada".
   - Ela foi cortada no ponto da linha mais perto de Skagway. O corte ficou registrado na feature e na camada (`correcao_declarada`). É a única edição de dado da fonte.
2. **A Glenn do OSM acaba em Glennallen; o elo até a Alaska Highway é outra camada.**
   - A relation da Glenn diz `to=Glennallen`. A `estrada-glennallen-tok` começa no vértice em que ela acaba e segue a AK-1: primeiro pela Richardson Highway, junto com a AK-4, até Gakona Junction; depois pelo Tok Cutoff, até Tok.
   - Se a tela rotular "Glenn Highway", o rótulo vai no traçado da `glenn-highway`: o elo tem os nomes do OSM (Richardson Highway, Tok Cutoff).
   - A relation do Tok Cut-Off diz `to=Gulkana`. O começo dele, no caminho, fica a 0,1 km de Gakona Junction e a 2,5 km de Gulkana (os dois no GNIS).
3. **Echo Cove: 2,08 mi × 2,9 mi.** Pela estrada do OSM, do ponto dela mais perto da Echo Cove do GNIS até a ponta norte (`cascade-point`) são 2,08 mi. A fonte fala em 2,9 mi "from Echo Cove to Cascade Point".
   - A "Echo Cove" da fonte e a ponta da estrada não são exatamente esses dois pontos, e nenhum foi mexido.
   - O GNIS não tem Cascade Point em Juneau (tem um nas Pribilof). O nome segue vindo do texto.
4. **Os raios não são a divisa legal.** A lei mede "within a radius of 30 miles of the City of Anchorage or Fairbanks" (doc-16), e o centro aqui é o ponto da cidade no NE. Wasilla cai dentro do raio de Anchorage.
   - A travessia do Little Susitna pela ferrovia fica a **28,6 mi** do ponto de Anchorage, dentro do círculo. É o encontro dos limites sul e oeste que o texto da p. 48 dá ao local de Willow, e fica a 0,56 km de Houston.
   - Ela não é o canto exato do local: o mapa da p. 48 desenha o contorno em degraus, a leste de Houston.
   - Se o círculo de s12 continuar na tela quando os limites de Willow entrarem em s15, a borda sul do local aparece dentro dele. Um lugar a menos de 30 mi de um ponto não prova nada sobre a lei, que mede da "City of Anchorage". Quem decide o que vai junto é o montador; a leitura da lei é do verificador-de-fatos.
5. **Larson Lake e Mount Yenlo: onde ficavam os locais.** O folheto de 1976 em disco responde a pendência que eu tinha passado ao verificador-de-fatos. Lido na imagem em 27/09: `midia/juneau/fontes/documento/verif/oep76.pdf`, que é o doc-16 do dossiê.
   - **Larson Lake** (p. 49 = PDF p. 3). O local fica 5 mi a leste de Talkeetna, nas encostas oeste dos Talkeetna Mountains. É limitado pelo braço norte do Montana Creek (S), pelos Talkeetna Mountains (N e L) e pelo Susitna River (O). A cidade ficaria "on the west side of Larson Lake".
     - O ponto do GNIS é o lago e fica a 7,1 mi de Talkeetna (GNIS 1410591).
     - Um anel no lago marca a âncora certa, mas a cidade ficaria na margem oeste dele.
   - **Mt. Yenlo** (p. 50 = PDF p. 4). O local fica "in the southerly foothills of Mt. Yenlo". É limitado pelas Yenlo Hills (N), pelo rio Yentna (S e O) e pelo Lake Creek (L).
     - O ponto do GNIS é o **cume**. O GNIS põe as Yenlo Hills (1412336) a 6 m dele, então **um anel no cume fica no limite norte do local, não dentro dele**. Para o mapista: o local se estende ao sul do cume, até o Yentna.
     - O Lake Creek do limite é o 1405178. Foz e nascente dele ficam a 32,9 e 32,1 km do cume; os outros três Lake Creek do Mat-Su ficam a 90 km ou mais.
   - As feições que limitam cada local estão em `local_1976.limites` de cada arquivo, como pontos do GNIS (foz e nascente, nos cursos d'água). Não são geometria desenhável.
   - As passagens das p. 49 e 50 não estão entre as afirmações do doc-16 no `fundamento.json`, que só registra as p. 47, 48 e 52. Quem as registra é o dono do dossiê: eu não edito `pautas/`.
6. **Os limites do local de Willow (`limites-sitio-willow-1976`).**
   - Não pinte a área entre as linhas: ela não fecha a leste, e o texto diz "generally bounded".
   - Willow Creek e Little Susitna vêm com os braços que têm o mesmo nome. O leito principal é a primeira parte de cada MultiLineString.
   - Um braço do Willow Creek cruza a ferrovia 0,8 km ao norte do leito principal. O trecho da ferrovia usa a travessia do leito principal, e as duas estão em `conferencia.travessias_com_todos_os_bracos`.
   - O Deception Creek é o do NHD (33,0 km, um trecho só). O do OSM (way/483131815, 7,0 km) para a 15,6 km da nascente do GNIS.
   - A ferrovia é a linha-tronco de hoje (`usage=main`). O ramal de Port MacKenzie (`usage=branch`) e os desvios de Houston ficaram de fora, porque não são a linha-tronco.
7. **A Alaska Highway é a rota de hoje**, retificada desde 1942, e a tela não a rotula como a de 1942. Os ways que não são membros da relation e entraram no caminho estão listados na propriedade `ways_fora_das_relations_no_caminho`.

## 4. Portões e checagens (contrato §3, roupa §8)

- **§3, itens 1, 2, 4, 5 e 6.** `node out/juneau/_pesquisa/conferir-pauta-geo.mjs juneau`: **40/40 ✓**, exit 0.
  - Confere FeatureCollection, contagem, nenhuma geometria vazia, WGS84, bbox e sha256 contra a pauta, o `.js` igual ao JSON, o peso (o maior deste research tem 242 KB) e se a licença bate com o crédito.
- **§3, item 3 (lugar real).** Por item, nos scripts, com o resultado gravado na propriedade `conferencia` de cada arquivo (tabela da seção 1).
- **§3, item 7.** `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/juneau/_pesquisa/pauta-geo.json`: **✓ válido**, exit 0.
- **`qc-procedencia`** (`REGIE_MOTOR=… node scripts/qc-procedencia.mjs juneau`): PASS, exit 0. Ele não lê `.json`, então não mede geometria.
- **Integridade da pauta**, medida contra as duas cópias:
  - as 16 entradas antigas estão iguais byte a byte;
  - nenhuma entrada sumiu;
  - mudaram só as 5 regravadas (seção 0), com a geometria idêntica à de antes, e entraram as 2 novas.
- **`build-geo-manifest.mjs`** (contrato §2.1): **NÃO MEDIDO (build-geo-manifest)**, porque não existe neste canal nem no molde (roupa §2).
- **Olhar, que não é portão.** As prévias foram feitas com `_tmp/geo-olhar.py` e estão em `out/juneau/_tmp/`:
  - da primeira volta: `olhar-panhandle.png`, `olhar-panhandle-osm.png`, `olhar-matsu.png` e `olhar-noroeste.png`;
  - desta volta: `olhar-elo-glennallen-tok.png` (o elo sai da ponta da Glenn e encontra a Alaska Highway em Tok, sobre a malha do NE) e `olhar-sitio-willow.png` (os limites de Willow, a estrada e o raio de Anchorage).
- **As páginas do folheto** renderizadas para leitura estão em `out/juneau/_tmp/oep76-paginas/` (p. 48 a 50, e o encarte do mapa da p. 48).

## 5. Como refazer

Tudo roda da raiz do canal. Os brutos ficam em `out/juneau/_tmp/geo-fontes/`, fora do git: o zip do GNIS, a resposta do TIGER, os dumps do Overpass e a resposta do NHD.

- `node out/juneau/_pesquisa/geo-ne-juneau.mjs --gravar` grava as 5 camadas do NE.
  - `ne_10m_roads` e `ne_10m_glaciated_areas` foram baixadas do mesmo commit do `obter-natural-earth`, com o sha256 fixado no script.
- `node out/juneau/_pesquisa/geo-gnis-juneau.mjs --gravar` grava os 6 pontos do GNIS.
  - `--so=larson-lake-gnis,mount-yenlo-gnis` grava só esses dois.
- `node out/juneau/_pesquisa/geo-tiger-matsu.mjs [--baixar] --gravar` grava o borough.
- `node out/juneau/_pesquisa/geo-osm-rodovias.mjs baixar todos`, depois `gravar todos`, grava as 9 camadas do script: 8 do OSM e o ponto de Dawson Creek, do NE.
  - O caminho é o mais curto no grafo dos ways.
  - Os extremos saem da varredura dupla pela estrada.
  - Os buracos das relations são remendados só com ways reais do mesmo nome ou da mesma ref.
  - O elo é o item `estrada-glennallen-tok`, com o dump `osm-ak1-tok`. A descoberta das relations está em `osm-descoberta-ak1.json`.
- `node out/juneau/_pesquisa/geo-sitio-willow-1976.mjs baixar`, depois `gravar`, grava os limites de Willow (Overpass e NHD).
- `node out/juneau/_pesquisa/raios-30mi.mjs --gravar` grava os dois raios. Rode depois dos limites de Willow: a conferência lê a travessia deles.

## 6. Para o APRENDIZADOS.md

Isto serviria a qualquer canal. Quem registra é o Claude central, para não haver dois escritores no arquivo.

1. O `ne_10m_roads` liga Skagway a Haines por uma estrada que não existe (`uident 7105`).
2. As relations de rodovia do OSM têm buracos: a da Alaska Highway tem 7 componentes, a da Glenn 5 e a da Parks 4. O `geo-osm-rota`, que costura pelas pontas, não fecha nenhuma delas. Serviria um modo que faça grafo, remendo por nome ou ref e extremos pela estrada.
3. O GNIS (USGS) e o TIGERweb (Census) dão, sem chave e em domínio público, pontos de feições com nome e polígonos de condado. A pré-v1 não tem ferramenta para nenhum dos dois.
4. Escolher uma feature por código no admin-1 ou no glaciated pede script, porque o `geo-recorte-bbox` leva o bbox inteiro.
5. **O NHD do USGS** dá o curso d'água inteiro, em domínio público, amarrado ao ID do GNIS (sem adivinhar nome). O endereço é `hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/6/query`, com `where=gnis_id LIKE '%<id>'` e `outSR=4326`.
   - O OSM pode ter só um pedaço do riacho: no Deception Creek, 7 de 33 km.
   - Conferir a foz e a nascente do GNIS contra a linha pega isso.
   - Consulta de rio grande pode estourar o tempo do serviço.
6. **A relation de uma rodovia pode acabar antes do lugar que o pedido quer** (a Glenn acaba em Glennallen, e não na Alaska Highway). Conferir o `from`/`to` da relation e o nó comum com a rodovia seguinte antes de dizer que ela "liga" dois lugares.
7. **"O local" não é a feição que dá nome a ele.** Folheto oficial de escolha de local costuma descrever os limites por feições com nome, e isso vira geometria real sem desenhar o local.

---
Devolução: s10 e s15 sobem para "geometria entregue, com o elo e as feições de limite". Continuam NÃO ACHADO:
- em s10, as áreas;
- em s12, os distritos;
- em s15, o ponto e o contorno dos três locais;
- em s44, s48 e s50, os contornos, as rotas e o terminal.

Agora decidem:
- o **montador**, que faz o re-espelho de s10 p2–3, s12 p1–3, s15 p1 e p3 e das rotas de s48 e s50;
- o **mapista**, que desenha. Atenção ao cume do Mt. Yenlo e ao círculo de 30 mi junto dos limites de Willow;
- o **redator-de-tela**, que dá os rótulos;
- o **verificador-de-fatos**, que confere Dawson Creek, os 2,08 × 2,9 mi e a leitura da lei dos 30 mi diante da travessia a 28,6 mi;
- o **pesquisa-documentos**, que decide o caso dos mapas das p. 48 a 50 do folheto de 1976 (§7.1);
- o **Lucas**, que decide o esquema declarado das rotas e dos corredores.

## 7. Pedido da direção de arte, 28/09: o fim da Thane Road (s44)

**O pedido.** É um ponto só, que a direção de arte devolveu à pesquisa antes da arte (FALTA do `conceito-visual.json`, s44): `thane-road-fim`, o ponto de partida real do esquema tracejado do corredor do Taku (`espelho.json` › s44 › `needs.geo` e `_esquema.taku.parte_de`).
- O Juneau está no `art_direction`, e o `research` continua fechado.
- Cópias de antes (a pauta, este relato e o manifest do cache da máquina): `out/juneau/_tmp/bkp-thane-road-fim-20260928-032906/`.

**O trecho da fonte, de onde a linha sai.** FSEIS 2018, p. 2-2, §2.2.1 Taku River Valley Highway (`midia/juneau/fontes/triagem/fseis.txt:3665-3668`; o rodapé "2-2" da página está na linha 3696): "a 118-mile-long highway from the end of Thane Road in Juneau, northeast along the Taku Inlet, across the Alaska-Canada border, up the Taku River Valley". A frase inteira está em `fonte_diz`, no arquivo do ponto, e o script a confere letra a letra no `fseis.txt`.

**A fonte do ponto, pela ordem da roupa (§3):**
- **Natural Earth:** não tem estrada perto. O vértice mais perto do `ne_10m_roads` (as camadas `rede-rodoviaria-*`) fica a 128,6 km, em Haines.
- **GNIS:** o `DomesticNames_AK.txt` do disco (sha256 4ff9df033d78…, o mesmo do `geo-gnis-juneau.mjs`, lido sem rede) não tem nenhuma classe de estrada (Stream, Lake, Summit…, sem Road nem Trail). Tem a vila de **Thane** (1410784, Populated Place), que entrou só como conferência do caminho.
- **OSM:** a ponta da via com `name=Thane Road`. Um pedido ao Overpass, com o User-Agent do canal (`lerConfigCanal().ua`, da pré-v1), respondido na primeira (osm_base 2026-09-28T06:30:51Z). A resposta está em `out/juneau/_tmp/geo-fontes/osm-thane-road.json` (sha256 9dabbed4e3c4…). Nenhum site recusou leitura.

**Qual ponta, e como decidi:**
- As 4 ways com `name=Thane Road` (356851234, 642406027, a ponte 653314253 e 653314254) formam um trecho só, de 115 nós, com 2 pontas soltas. Nenhuma outra via da janela tem nome começando por "Thane".
- As duas pontas saem da varredura dupla no grafo (a mais longe, pela via, de um nó qualquer, e a mais longe dela). Entre elas há 7,87 km.
- A **ponta do centro** (node/3266711489, 58.2923267, -134.3940194) fica a 1,29 km do ponto de Juneau do NE. Ali a via continua como South Franklin Street (AK 7).
- A **outra ponta** (node/5691733230) fica a 8,92 km do ponto de Juneau, a sudeste da ponta do centro (azimute 132,2°).
  - O nó tem `highway=turning_circle`, o retorno do fim da estrada.
  - Nenhuma outra via de carro sai dele. Só sai a Dupont Trail (`highway=path`), que segue pela costa.
- A via corre ao longo do Gastineau Channel: a mediana dos nós fica a 71 m da costa do OSM (o máximo é 363 m).
- A vila de Thane do GNIS fica a 0,07 km da via, entre as duas pontas: a 4,89 km da ponta do centro e a 2,98 km do fim, pela via.
- O script para, sem gravar, se qualquer uma dessas condições falhar.

**A medida:**

| O quê | Valor |
|---|---|
| Coordenada | **58.2454469, -134.2958702** (lat, lon), a do nó do OSM, sem mudança |
| Até o ponto de Juneau do NE (`cidades-ne`) | 8,92 km (5,5 mi) em linha reta (Vincenty, WGS84) |
| Pela Thane Road, desde a ponta do centro | 7,87 km (4,9 mi) |
| Terra ou água, pela costa do OSM | **Terra**, a 62 m da linha de costa (way/835580602). No OSM, a costa se desenha com a terra à esquerda do sentido do way. Os controles passaram: o ponto do Gastineau Channel no GNIS (1402497) deu água, e os 115 nós da via deram terra |
| No NE 1:10M (`panhandle-juneau`) | **Terra** (United States of America), a 154 m da costa simplificada. Ao contrário de Cascade Point, não há deslocamento a declarar |
| Até o ponto do Taku Inlet (GNIS 1410576) | 16,19 km, azimute 65° |

**Crédito.** É OSM (ODbL): `© OpenStreetMap contributors` na tela de s44, que a base MapTiler já mostra, e openstreetmap.org/copyright na descrição. A s44 já carregava OSM (a estrada, Cascade Point, o Taku e as rodovias do Yukon), e nada muda no crédito dela.

**Para quem desenha, e o que o texto não diz:**
- O ponto é só o começo. O texto diz que a estrada sai do fim da Thane Road "northeast along the Taku Inlet", mas não diz por onde ela vai do Gastineau Channel até o inlet.
  - Entre os dois fica a ponta de Bishop Point (GNIS 1399098, Cape), a 9,68 km do fim (azimute 119°). Do fim até o ponto do Taku Inlet no GNIS são 16,19 km (azimute 65°).
  - A Figure 2-1 do estudo mostra o traçado, mas é do Estado e não se decalca (midia.md §7.1).
  - Como a linha vai do ponto ao inlet é da arte, dentro do `Approximate route`. Não pus ponto intermediário, porque a fonte não nomeia nenhum.
- O fim é o de hoje no OSM. O FSEIS (2018) não dá coordenada; o que prova que é o fim da estrada é o nó do retorno, com a trilha que sai dele.
- As prévias (olhar, não portão): `out/juneau/_tmp/olhar-thane-road-fim-perto.png` (a via, a costa do OSM, a trilha e o ponto) e `olhar-thane-road-fim-taku.png` (o ponto, o Taku Inlet e o rio Taku). As camadas delas (`olhar-thane-*.json`) são só para a prévia.

**Portões:**
- `node out/juneau/_pesquisa/conferir-pauta-geo.mjs juneau`: **41/41 ✓**, exit 0.
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/juneau/_pesquisa/pauta-geo.json`: **✓ válido**, exit 0.
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-procedencia.mjs juneau`: PASS, exit 0. Ele não lê `.json`, então não mede geometria.
- A pauta passa a ter 41 itens. As 40 entradas de antes estão iguais byte a byte à cópia, e só a nova entrou.
- No cache da máquina, as 42 entradas de antes estão iguais, e a nova (`thane-road-fim`) é idêntica à da produção.
- `build-geo-manifest.mjs`: **NÃO MEDIDO (build-geo-manifest)**, como na seção 4.
- O `gravarGeo` não escreveu `_creditos-mapa.md`, porque a produção ainda não tem `_media/_vendor/perfil-mapa.json`.

**Como refazer.** `node out/juneau/_pesquisa/geo-thane-road-fim.mjs baixar` é o único passo com rede: um pedido ao Overpass. Depois vêm `conferir` e `gravar`, sem rede. Com a resposta guardada, o `gravar` refaz o arquivo idêntico, byte a byte (conferido).

**Para o APRENDIZADOS.md** (quem registra é o Claude central):
1. O GNIS Domestic Names não tem estrada: o arquivo do Alasca não tem classe Road nem Trail. O ponto de "fim da estrada" vem do OSM. A prova de que é o fim é o nó com `highway=turning_circle` (ou `noexit=yes`), sem nenhuma outra via de carro saindo dele.
2. Para saber se um ponto junto à costa cai em terra, a linha de costa do OSM (`natural=coastline`, terra à esquerda do sentido do way) mede ao metro, e o teste se prova com controles: os nós da própria via dão terra, e um ponto de água do GNIS dá água. O NE 1:10M erra por centenas de metros junto ao mar (Cascade Point caiu na água, a 236 m da costa).

---
Devolução (28/09): em s44, o ponto de partida do esquema do Taku está entregue (`thane-road-fim`). Agora decidem:
- o **Claude central**, que muda o `_existe` de `thane-road-fim` no espelho depois de conferir o arquivo no disco;
- o **mapista**, que desenha o esquema tracejado do Taku a partir deste ponto, com `Approximate route` e sem decalcar a Figure 2-1. O caminho do ponto até o Taku Inlet não está no texto (acima);
- o **redator-de-tela**, se o ponto tiver rótulo (o espelho diz que não tem).

## 8. Pedido do montador, 30/09: a rota da balsa estadual no Lynn Canal (s52)

**O pedido.** `rota-balsa-lynn-canal-osm` (`espelho.json` › s52 › `needs.geo`, décima quarta revisão): a rota da Alaska Marine Highway no Lynn Canal, do terminal de Auke Bay, em Juneau, a Haines e a Skagway, como o OSM a mapeia (`route=ferry`). É o serviço que existe: sem esquema e sem `Approximate route`. Despachado em 01/10, o último pedido do `research`.

**O que o OSM tem.** A descoberta (um pedido ao Overpass, só etiquetas e centros: `route=ferry` e `amenity=ferry_terminal` na janela 58.25–59.6 N, 134.5–135.9 W) achou o serviço do Estado em duas relations, com `operator=Alaska Marine Highway` e um way cada:

| Relation | Nome no OSM | Way | Vértices | Comprimento |
|---|---|---|---|---|
| relation/12533329 | Juneau - Haines | way/196083744 | 27 | 122,64 km (76,2 mi) |
| relation/12533328 | Haines - Skagway | way/468651609 | 20 | 23,81 km (14,8 mi) |

- Os dois ways começam no mesmo nó, node/4631478695, "Alaska Marine Highway Terminal - Haines (Lutak)". O Juneau - Haines acaba no node/65663494, "Alaska Marine Highway Terminal - Juneau", e o Haines - Skagway no node/6232504244, "Alaska State Ferry Terminal - Skagway". As pontas são os próprios nós de terminal.
- **Fora:** way/1110587425 "Skagway - Haines", do Haines Skagway Fast Ferry (`operator=Haines Skagway Fast Ferry`): empresa privada, não o Estado. E as outras rotas da AMH que saem de Juneau (Sitka, Hoonah, Gustavus…), que não são do Lynn Canal.
- As relations não têm etiqueta `distance` para comparar. Os ways têm `duration` (08:30 e 00:45), que não entrou: não foi pedida nem conferida.

**Como foi costurada.** Pelo `derivarRota` do `geo-osm-rota` da pré-v1 (a mesma costura pelas pontas e a mesma medida), com `--tol=0`, e gravada pelo `gravarGeo`, como no `geo-osm-rodovias.mjs`.
- O `geo-osm-rota` pela linha de comando lê uma relation só: o `derivarRota` usa os membros da primeira relation que acha no dump. Por isso os dois ways entram sem as relations. Cada um entra no sentido da viagem (Juneau → Lutak, Lutak → Skagway; inverter a ordem dos vértices não muda o traçado), e a costura os cola no nó comum de Lutak.
- **0 órfãos.** 1 LineString, 46 vértices, **146,46 km (91,0 mi)**. A linha começa em Juneau, passa por Lutak no km 122,64 e acaba em Skagway. Bbox [-135.46188, 58.34383, -134.68155, 59.44879], WGS84 lon/lat, 6 KB.
- Nada foi desenhado, aproximado nem ligado à mão.

**Os terminais** (distâncias geodésicas das pontas da linha):

| Ponta | Nó do OSM na ponta | Conferência |
|---|---|---|
| Juneau | node/65663494, ferry_terminal (0 m) | o outro nó do mesmo terminal (node/2062659390) a 104 m; o prédio "Alaska State Ferry Terminal" (way/409578915) a 139 m; **Auke Bay** no GNIS a 1,60 km (1398468, Bay) e a 1,49 km (1398469, Populated Place) |
| Haines (Lutak) | node/4631478695, ferry_terminal (0 m) | o prédio do terminal (way/1093562756) a 82 m; **Lutak Inlet** no GNIS (1423480, o ponto no meio do braço) a 3,21 km; a cidade de Haines a 6,00 km (GNIS 1422400) e a 5,20 km (`cidade-haines-osm`). O cais da cidade (Port Chilkoot Dock, node/8196315079) fica a 6,01 km e não é o terminal da balsa |
| Skagway | node/6232504244, ferry_terminal (0 m) | **Skagway** a 1,25 km (GNIS 1414754) e a 1,25 km (`cidades-ne`, NE) |

**A água:**
- **Pela costa do OSM** (`natural=coastline` a até 600 m da rota, 15 ways; a terra fica à esquerda do sentido do way): **nenhum cruzamento** da costa e **nenhum trecho em terra**, em 2.952 amostras a cada 50 m. Fora da chegada (a mais de 1 km de cada terminal), a linha passa a, no mínimo, **241 m da costa** (km 4,19, saindo de Auke Bay).
- **Os controles** (decidem só os que somam até 600 m entre a rota e a costa; dos 50 candidatos, 47 ficaram sem veredito e estão contados no arquivo): os prédios dos terminais de Juneau (way/409578915) e de Lutak (way/1093562756) deram **terra**, e a Auke Nu Cove (GNIS 1398474, Bay) deu **água**. Os três passaram.
- **No NE 1:10M** (`panhandle-juneau`), o meio da rota é água. Só as pontas caem na terra simplificada: 199 m em Juneau, 97 m em volta de Lutak e 646 m em Skagway. **Se a cena pintar a terra com o polígono do NE, declare esse deslocamento.** Sobre o satélite, vale a costa do OSM.

**Crédito.** É OSM (ODbL 1.0): `© OpenStreetMap contributors` na tela de s52, que a base MapTiler já mostra (`© MapTiler © OpenStreetMap contributors`), e openstreetmap.org/copyright na descrição. O `gravarGeo` acrescentou a linha ao `out/juneau/_creditos-mapa.md`.

**Para quem desenha:**
- O traçado é o desenho que o OSM dá ao serviço: 46 vértices em 146 km, uma linha de pontos espaçados. Não se lê como o caminho exato de cada viagem.
- O ponto de junção é o terminal de Lutak, a uns 6 km ao norte do centro de Haines. No OSM, as duas relations da AMH chegam a esse terminal, não ao cais da cidade (Port Chilkoot Dock).
- `rotulo` é `""`, como no espelho. O `name_pt` leva o nome em inglês (roupa, §4): "Alaska Marine Highway ferry route: Juneau – Haines – Skagway". O rótulo de tela, se houver, é do `redator-de-tela`.
- No arquivo, as propriedades guardam as duas relations, os trechos, os terminais com as distâncias, o teste da água com os controles e o que ficou fora.

**Portões:**
- `node scripts/validar-contrato.mjs pauta-pesquisa out/juneau/_pesquisa/pauta-geo.json`: **✓ válido**, exit 0.
- `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-procedencia.mjs juneau`: **PASS**, exit 0. Ele não lê `.json`, então não mede geometria.
- `node out/juneau/_pesquisa/conferir-pauta-geo.mjs juneau`: **42/42 ✓**, exit 0.
- A checagem 1 do contrato: FeatureCollection, 1 feature, LineString, 46 pares, nenhuma geometria vazia.
- A pauta passa a ter 42 itens. As 41 entradas de antes não mudaram (o `git diff` só acrescenta a nova).
- `build-geo-manifest.mjs`: **NÃO MEDIDO (build-geo-manifest)**, como na seção 4.

**Como refazer.** `node out/juneau/_pesquisa/geo-balsa-lynn-canal.mjs baixar <osm-descoberta-balsa-lynn|osm-balsa-lynn|osm-balsa-lynn-costa|todos>` é o único passo com rede. As respostas ficam em `out/juneau/_tmp/geo-fontes/`, com as bases OSM 2026-10-01T03:12:09Z, 03:18:17Z e 03:19:21Z. Depois vêm `conferir` e `gravar`, sem rede. O pedido da costa deu 504 uma vez, só com o `around`; com a janela da rota no mesmo filtro, respondeu na segunda tentativa, 45 s depois. Nenhum site recusou leitura.

**Para o APRENDIZADOS.md** (quem registra é o Claude central):
1. O `geo-osm-rota` costura uma relation só: o `derivarRota` lê os membros da primeira relation do dump. Uma rota que o OSM parte em duas relations com um nó comum (aqui, Juneau - Haines e Haines - Skagway) entra pelos ways, sem as relations, e a costura os cola no nó comum. Um modo de várias relations na ferramenta serviria a qualquer canal.
2. No Overpass, `around` com uma linha longa, sozinho, pesa no servidor (504). A mesma consulta com a janela da linha no filtro (`(bbox)(around:…)`) respondeu.

---
Devolução (01/10): em s52, plano 2, a rota da balsa estadual está entregue inteira (`rota-balsa-lynn-canal-osm`, Auke Bay → Haines (Lutak) → Skagway, 0 órfãos). Agora decidem:
- o **Claude central**, que muda o `_existe` de `rota-balsa-lynn-canal-osm` no espelho depois de conferir o arquivo no disco;
- o **mapista**, que desenha a rota sobre o satélite, com `© OpenStreetMap contributors` na tela, e declara o deslocamento das pontas se pintar a terra com o NE;
- o **redator-de-tela**, se a rota ou os terminais tiverem rótulo (o espelho diz que não têm).
