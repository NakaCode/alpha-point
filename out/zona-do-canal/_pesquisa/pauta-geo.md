# Zona do Canal — a geometria (pesquisa-geo, 15/10/2026)

Registro de cada camada de `out/zona-do-canal/_media/geo/` (o `pauta-geo.json` ao lado é o contrato; este arquivo dá a
incerteza medida, que a identidade §6 pede para mapa antigo). Tudo em WGS84, lon/lat em graus. O relato da tarefa está em
`out/zona-do-canal/_tmp/pesquisa-geo/relato.md`.

## As camadas

| arquivo (`_media/geo/`) | o que é | fonte e data do traçado | licença / tela | features | incerteza medida |
|---|---|---|---|---|---|
| `panama-ne.json` | o Panamá inteiro, 15 partes | Natural Earth 1:10m admin-0 (fronteira de hoje) | domínio público, sem crédito | 1 | a costa do NE é generalizada: Cerro Sosa e La Boca (OSM) caem 238 m e 47 m na água dela |
| `colombia-ne.json` | a Colômbia, contexto | Natural Earth 1:10m admin-0 | domínio público, sem crédito | 1 | a divisa Panamá–Colômbia é a de hoje (tratado de 1924); a de 1903 não foi levantada |
| `eixo-do-canal.json` | o canal de mar a mar (eclusas de 1914; sem as pistas de 2016) | OSM relation/2389520, Overpass, 15/10/2026 | ODbL: `© OpenStreetMap contributors` na tela | 1 | traçado de hoje; 76,05 km (47,25 mi) de 9,400 N a 8,943 N: o OSM para em Balboa, antes da boia do Pacífico (as "51 milhas" do dossiê vão de águas fundas a águas fundas) |
| `zona-do-canal-1947.json` | o contorno da Zona: terra dentro da divisa + lagos Gatún e Madden; **2ª rodada: + a ponta de Cristóbal** | AMS, *Canal Zone and Vicinity*, 1:100.000, 1947 (LOC 83694755, via Commons) | domínio público, sem crédito na tela; a coleção vai na descrição | 1 (MultiPolygon, 2 partes) | ver "A folha de 1947" e "2ª rodada" |
| `divisa-zona-1947.json` | as linhas da divisa como a folha as desenha (8 trechos) | a mesma folha | idem | 8 | idem |
| `linha-1914-panama.json` | "the line": a divisa entre a Cidade do Panamá e a Zona; **refeita na 2ª rodada** (a avenida e o rio pelo OSM) | folha de 1936 (NARA 192812325) + OSM (Av. de los Mártires e Río Curundú, 15/10/2026) | **ODbL nos trechos do OSM: `© OpenStreetMap contributors` na tela** | 1 | ver "2ª rodada"; a versão da 1ª rodada está em `_tmp/pesquisa-geo/rodada1/` |
| `fourth-of-july-avenue-1936.json` | o trecho da 4th of July Avenue (hoje Avenida de los Mártires) que a folha marca como divisa | a mesma folha de 1936 | idem | 1 | idem |
| `faixa-art2-5mi.json` | ESQUEMA: o princípio do Art. II, 5 milhas de cada lado do eixo | derivado do eixo do OSM | ODbL (deriva do OSM) | 1 | não é a divisa; é a regra do tratado aplicada ao eixo de hoje |
| `pontos-osm-hoje.json` | 17 pontos de hoje (morros, prédios, eclusas, a ponte, bairros) | OSM, centros do Overpass, 15/10/2026 (id em `osm`) | ODbL: crédito na tela | 17 | o centro do OSM; prédio e terreno = centro do contorno |
| `lugares-1947.json` | 11 lugares de 1947 (Gatún, Fort Davis, Margarita, Fort Sherman, Silver City, Red Tank, Pedro Miguel, Paraíso, Fort Clayton, Albrook Field, Fort Amador) | centróide da mancha amarela (área construída) da folha AMS 1947 | domínio público, sem crédito | 11 | georreferência da folha + o centróide da mancha: ±150–250 m; só no cinturão do canal |

## A folha de 1947 (AMS)

- **Licença:** obra do U.S. Army Map Service (governo federal dos EUA, 17 U.S.C. §105); a página do Commons diz "Public
  domain" e cita a LOC (https://www.loc.gov/item/83694755/). A página da LOC não foi lida (a LOC recusa robô; CLAUDE.md):
  fica para o navegador do app. Arquivo: o JPG do Commons, 11632×8285 px, sha256
  `a655dcc4983b6dc562c7ae07c46a7735310a0af5964fc1ad98b1e9882aa88261` (sha1 do Commons `d7887cb8…` conferido), em
  `out/zona-do-canal/_tmp/pesquisa-geo/baixado/ams1947/` (fora do git).
- **Georreferência pela própria folha:** as 17 linhas da gratícula de 5' achadas no pixel (ajuste de reta, rms 0,4–1,0 px,
  ~8,4 m/px); 64 interseções. O pixel vira lon/lat por interpolação entre as linhas vizinhas (exata nas linhas desenhadas).
  Um ajuste polinomial único deixaria 23 m rms (o papel tem deformação); a interpolação por célula a absorve.
- **Conferência contra fonte independente (o eixo do canal do OSM de hoje contra a faixa do canal desenhada):**
  Gatún–Gamboa (n = 124): desvio perpendicular mediano 71 m, p90 142 m, vetor médio 6 m O e 38 m N; Gaillard Cut
  (n = 11): mediano 130 m. Parte disso é o próprio canal (alargado depois de 1947) e a generalização do símbolo.
- **Na Cidade do Panamá a folha é mais fraca:** os pontos cotados dos morros caem 374 m (Sosa) e 574 m (Ancón) a oeste/norte
  dos picos do OSM, e a borda da Zona de 1947 fica a 199 m (mediana), 435 m (p90) e 529 m (máx.) da linha de 1936
  corrigida. **Para câmera na cidade, use `linha-1914-panama`; o contorno de 1947 serve à escala da Zona inteira.**
- **Como o polígono saiu:** a divisa é a tinta "— · —" da folha (traços pretos achados por componente conexo, escolhidos
  por corredores lidos nos recortes com grade e ligados na ordem); a água é a cor de água da folha; a Zona é a terra
  cercada por esses dois, mais os lagos. Os corredores só escolhem QUAIS traços são a divisa; nenhum vértice sai deles,
  fora as pontas que levam a linha até a água ou o mar (até 97 px, ~0,8 km, ligações listadas no relato).
- **Conferência pela área:** 534 mi² no polígono (523 na parte principal + 11 do lago Madden), contra 552,95 mi² do
  relatório de 1940 (362,01 de terra, 190,94 de água, "inclusive of Madden Lake"): −3,4 %.
- **O que falta ou difere, declarado:**
  - os lagos entram no nível normal que a folha pinta, não na cota de 100 pés (Gatún) e 260 pés (Madden) que a folha diz
    ser a divisa onde ela não a desenha;
  - o vale do Chagres entre Gamboa e a represa Madden (a extensão de 1935) não fechou: o lago Madden entra como peça
    separada, sem a faixa do vale que o liga ao resto;
  - Cristóbal (a ponta das docas ao sul da linha de Colón) pode faltar: a folha pinta Colón e Cristóbal num tom que a
    máscara de água confunde;
  - o mar de 3 milhas e as ilhas do Pacífico (Naos, Perico, Flamenco) ficam fora (é a definição de 1940: terra + lagos);
  - a parcela de Punta Paitilla (Zona em 1947, devolvida ao Panamá pelo tratado de 1955) não entrou;
  - um furo de 0,14 mi² perto de Gamboa (artefato da caixa de tinta do Madden) foi tirado.
- **Data do traçado:** 1947. Vale para 1935–1955 sem ressalva; para 1960 e 1964, com as devoluções de 1955 (Paitilla e
  terras em Colón) a conferir pelo verificador; para 1903–1913 a forma era outra (sem o lago Gatún).

## A folha de 1936 (Road Map of Ancon, Balboa and Panama)

- **Licença:** Office of the Department Engineer, Panama Canal Department (War Department), out/1936, "based on map of same
  title, Panama Canal, 1927"; NARA 192812325, via Commons ("Public domain"). A página da NARA não foi lida nesta rodada.
  Arquivo: 7112×4638 px, sha256 `eafcc655659fc87fa39bcbf4743c5afd2e52e129fb1540fd71cf7969841b1634`, em
  `out/zona-do-canal/_tmp/pesquisa-geo/baixado/road1936/` (fora do git). ~0,88 m/px.
- **Georreferência pela gratícula de 1' da própria folha** (8°57', 8°58', 79°33', 79°32'; rms das retas 0,7–1,0 px):
  ajuste afim pelas 4 interseções, resíduo 1,0 m.
- **O deslocamento da gratícula:** a folha está deslocada do WGS84 de hoje (datum local). Medido por pontos de controle
  independentes do OSM: o Instituto Nacional, o topo do Cerro Ancón e o eixo da avenida (4 centros de trecho da Avenida de
  los Mártires que têm de cair sobre a 4th of July Avenue da folha). Translação: 346 m (a folha põe as coisas 270 m a
  oeste e 213 m ao norte). Deixando um de fora: 9, 12, 41, 43, 50 e 91 m. **Incerteza declarada: ~40 m típica, até ~90 m**
  (o trecho norte, junto à Avenida Nacional). Um quinto centro da avenida (o de La Boca) ficou fora do ajuste: cai além
  da ponta da avenida de 1936.
- **Leitura da linha:** pontos lidos sobre a linha desenhada em recortes com grade, a ~12 px (~10 m): o tracejado
  "CANAL ZONE / REPUBLIC OF PANAMA" que vem do mar por Chorrillo, a 4th of July Avenue ("BOUNDARY OF PANAMA … 4TH OF JULY
  AVE … LINE"), a avenida que sobe ao norte até a Avenida Nacional, o traço-ponto até o Rio Curundú e o tracejado do rio.
  4.549 m. A ponta do mar, em Chorrillo, não chega à costa (a folha segue além do recorte lido).
- **Conferência de lado (OSM de hoje):** do lado da Zona, o Administration Building, o Cerro Ancón e o antigo hospital
  Gorgas (hoje Instituto Oncológico); do lado do Panamá, o Instituto Nacional (79 m da linha), a Plaza 5 de Mayo (81 m) e
  Calidonia. Todos do lado certo.

## Créditos

- Na tela: `© OpenStreetMap contributors` nas cenas que carregam `eixo-do-canal`, `faixa-art2-5mi` ou `pontos-osm-hoje`
  (já está na linha da MapTiler). Mapa antigo em domínio público e Natural Earth: sem crédito na tela.
- Na descrição: `openstreetmap.org/copyright`; "U.S. Army Map Service, Canal Zone and Vicinity (1947), Library of
  Congress"; "Road Map of Ancon, Balboa and Panama (1936), U.S. National Archives".


## 2ª rodada (pesquisa-2, 15/10/2026, 04:10–04:45 de Brasília)

As camadas de antes estão guardadas em `out/zona-do-canal/_tmp/pesquisa-geo/rodada1/` (`media-geo/`, a pauta e os insumos).

### Camadas novas e refeitas

| arquivo (`_media/geo/`) | o que é | fonte e data | licença / tela | features | incerteza medida |
|---|---|---|---|---|---|
| `linha-1914-panama.json` (**refeita**) | "the line" | folha de 1936 na ponta do mar e no trecho norte; OSM na avenida e no rio | ODbL nos trechos do OSM: `© OpenStreetMap contributors` na tela | 1 | ver "A linha refeita" |
| `zona-do-canal-1947.json` (**refeita**) | o contorno de 1947 + a ponta de Cristóbal | AMS 1947 | domínio público | 1 (2 partes) | ver "A ponta de Cristóbal" |
| `avenida-de-los-martires-osm.json` | a Avenida de los Mártires de hoje (a 4th of July Avenue de 1964), da cabeceira da ponte ao fim norte, 2.765 m | OSM, 22 vias (ids na propriedade `osm`), 15/10/2026 | ODbL, crédito na tela | 1 | pista dupla: a linha segue uma das pistas, ~10–20 m do eixo |
| `rio-curundu-osm.json` | o Río Curundú de hoje, com os trechos canalizados marcados (`canalizado`) | OSM, 10 vias, 15/10/2026 | ODbL, crédito na tela | 10 | o curso de hoje (canalizado em parte) |
| `puente-de-las-americas-osm.json` | a ponte (a Thatcher Ferry Bridge de 1962) como linha, 1.676 m | OSM, ways 147612377 + 863696429 | ODbL, crédito na tela | 1 | a ponta leste cai no fim sul da Av. de los Mártires (mesmo nó) |
| `pontos-osm-atlantico.json` | Cristóbal (bairro), o Edificio de Administración de Cristóbal, o Puerto de Cristóbal, Colón (cidade), Mount Hope (Monte Esperanza), Coco Solo | OSM, 15/10/2026 | ODbL, crédito na tela | 6 | centro do OSM; o nó "Colón" fica no sudeste da ilha, longe do centro antigo |
| `corregimento-ancon-osm.json` | o corregimento de Ancón (limite administrativo de HOJE, 191,5 km²) | OSM, relation/11382233 | ODbL, crédito na tela | 1 | não é o limite da Zona: cobre a antiga Zona do lado do Pacífico e mais |
| `cidades-obra-1912.json` | Gorgona, Empire e Culebra | ICC, *Property map of the Canal Zone*, 1:40.000, "Ancon … January 26, 1912" (LOC 82690127, via Commons, sha256 `4efc4c8d…`) | domínio público, sem crédito na tela; a coleção na descrição | 3 | **±700 m** (ver "A folha da ICC de 1912") |
| `lugares-1936.json` | Balboa Commissary, Balboa Clubhouse, La Boca (centro e contorno da grade de ruas) e La Boca School, em 1936 | folha de 1936 | domínio público | 5 | ±40–90 m (georreferência) + ~10–15 m (leitura) |
| `opcao-b-cidade-do-panama-osm.json` | **OPÇÃO (b), AGUARDA O LUCAS**: San Felipe + Santa Ana + El Chorrillo + Calidonia (união, 3,74 km²) e cada um; Curundú e Bella Vista à parte, fora da união | OSM, 15/10/2026 | ODbL | 7 | limites de hoje; o lado oeste da união coincide com a linha de 1936/OSM |
| `opcao-b-colon-osm.json` | **OPÇÃO (b), AGUARDA O LUCAS**: Barrio Norte + Barrio Sur (união, 3,10 km²) e cada um | OSM, 15/10/2026 | ODbL | 3 | limites de hoje, com o aterro a leste da ilha |
| `opcao-c-cidade-do-panama-1947.json` | **OPÇÃO (c), AGUARDA O LUCAS**: o amarelo (área construída) da folha de 1947 fora da Zona, 3,76 km² | AMS 1947 | domínio público | 1 | herda o deslocamento da folha na cidade: a borda oeste passa 200–500 m para dentro da Zona |
| `opcao-c-colon-1947.json` | **OPÇÃO (c), AGUARDA O LUCAS**: o amarelo da ilha ao norte da linha de Colón desenhada, 1,94 km² | AMS 1947 | domínio público | 1 | inclui New Cristóbal (Zona), que a folha não separa; ~100–200 m |

Nenhuma cena cita as quatro camadas `opcao-*`: elas existem só para o Lucas escolher entre (a), (b) e (c).

### A linha refeita (`linha-1914-panama`)

- **Método:** os vértices 1–7 da linha de 1936 (a 4th of July Ave, que já caíam a 0–13 m da avenida de hoje) foram trocados
  pela Av. de los Mártires do OSM entre as projeções do 1º e do 7º; os vértices 8–11 (o fim da avenida de 1936 rumo à Av.
  Central e o trecho que sobe à Av. Nacional) ficam da folha, porque a avenida de hoje vira para o norte e se afasta 73–256 m
  do traço de 1936; os vértices 11–27 (o rio) foram trocados pelo Río Curundú do OSM entre as projeções do 11º e do 27º; a
  ponta do mar (vértice 0) fica da folha. A folha só diz o caminho; a geometria do trecho é a do OSM.
- **A incerteza nova:** na avenida, a do OSM (pista dupla, ~10–20 m do eixo); na ponta do mar e no trecho norte, ±40–90 m
  (a folha de 1936); **no rio, o curso de hoje, que fica a 1–124 m (mediana ~45 m) do rio desenhado em 1936**: o Curundú
  foi canalizado depois, e a divisa de 1914 seguia o rio de então. Distância máxima de um vértice de 1936 à linha nova:
  124 m. 4.391 m (antes, 4.549 m).
- **Os vértices 1–7 não são conferência independente da avenida:** a translação da folha de 1936 (1ª rodada) foi medida
  com a própria avenida do OSM; por isso eles caíam a 0–13 m dela.
- **O crédito muda:** a linha passa a levar `© OpenStreetMap contributors` na tela (já vai na linha da MapTiler das cenas de
  mapa) e `openstreetmap.org/copyright` na descrição.
- A `fourth-of-july-avenue-1936` continua a da folha (o trecho de 1936); a avenida de hoje é a `avenida-de-los-martires-osm`.

### A ponta de Cristóbal (`zona-do-canal-1947`)

- **Por que faltava:** na folha, a ilha de Manzanillo (Colón + Cristóbal + New Cristóbal) é uma mancha amarela; os rótulos
  COLON e CRISTOBAL ficam sobre a baía de Limón. O filtro de terra do Natural Earth (que separa terra de mar na folha) põe a
  costa de Colón fora da ilha e contava a ilha inteira como mar.
- **O que entrou:** o amarelo da folha, numa caixa da ilha, ao SUL da linha de Colón desenhada (os traços "— —" do trecho
  `H-colon`): 0,39 km² (`geo_zona_r2_cristobal.py`). Um fechamento morfológico de 5×5 px na máscara inteira acrescentou
  ~1.100 px (~0,08 km²) espalhados nas bordas; nada saiu.
- **Conferência (OSM):** o Edificio de Administración de Cristóbal fica a 54 m da peça (sobre a linha desenhada) e o Puerto
  de Cristóbal a 91 m (as docas, em hachura preta, não são amarelas e não entram); Barrio Norte (Colón) fica fora, a 606 m.
- **O que continua fora:** New Cristóbal (a folha não desenha a linha que a separa de Colón); as docas.
- **O vale do Chagres até Madden não fechou, e não fecha por corredor:** a folha traz, junto ao lago Madden, a nota
  "CANAL ZONE BOUNDARY — Where the Boundary Line is omitted it follows the 260' contour around Madden Lake". Entre o fim do
  traço-ponto do norte (px 6141, 3252) e o começo do traço-ponto do leste (px 6296, 3252), a divisa é a cota de 260 pés, que
  a folha não desenha (os traços pretos longos do vale são outra coisa, sem legenda lida: trilhas ou outra cota). Não há
  tinta a escolher. O caminho real seria a cota de 79,2 m de um modelo de relevo (o Copernicus DEM, fonte aceita), com dois
  cuidados: é superfície (a copa das árvores desloca a cota em terreno suave) e o datum da cota de 1935 não é o do modelo.
  Fica como pergunta (relato).

### A folha da ICC de 1912 (`cidades-obra-1912`)

- **Licença:** obra federal (Isthmian Canal Commission); Commons: "Public domain", fonte LOC 82690127. A página da LOC não
  foi lida (a LOC recusa robô). Arquivo: 24.021×11.202 px, sha1 do Commons `25133ce1…` conferido, sha256
  `4efc4c8d248fdc3b36ff3a86afd642336116235a9f59f92767739c72d302adcc`, em `_tmp/pesquisa-geo/baixado/property1912/` (fora do git).
- **Georreferência:** a folha não tem gratícula e é girada. Pontos de controle independentes: 29 pontos lidos sobre a faixa
  do canal desenhada, recentrados pelo perfil de escuridão; ajuste de similaridade (escala, rotação, translação) que
  minimiza a distância perpendicular ao eixo do canal do OSM. 4 pontos com resíduo > 300 m no 1º ajuste saíram (3 no lago
  Gatún, onde a faixa desenhada e o eixo de hoje divergem, e 1 que caiu na linha do trem). Com 25: **resíduo perpendicular
  mediano 38 m (p90 119 m, máx. 255 m), deixa-um-de-fora mediano 45 m**; escala 3,47 m/px (1:40.000 a ~290 dpi), rotação
  −43,2°. Conferência visual do eixo do OSM projetado sobre a faixa: `_tmp/pesquisa-geo/r2/v1912-conferencia.jpg`.
- **A incerteza que manda:** os pontos são os centros dos rótulos GORGONA, EMPIRE e CULEBRA (não há símbolo de cidade
  separado; Empire e Culebra ficam numa faixa amarela de sítio urbano). Contra a folha de 1947, os rótulos e as manchas de
  Paraíso e Pedro Miguel caem a 430–710 m. **Incerteza declarada: ±700 m.** Serve a um mapa da Zona inteira (s16); não
  serve a câmera de cidade. Gorgona ficou sob o lago Gatún.
- O ajuste perpendicular prende mal a posição ao longo dos trechos retos; um par de eclusas lido na folha a prenderia.

### A folha de 1936: as leituras novas (`lugares-1936`)

- Balboa Commissary: o prédio ao lado do rótulo (o bloco sul dos dois a oeste do círculo do Prado); o bloco norte, a ~95 m,
  pode ser do mesmo conjunto: leitura duvidosa.
- Balboa Clubhouse: o prédio junto ao rótulo, na ponta oeste do Prado (107 m do Teatro Balboa de hoje).
- La Boca de 1936: o centro e o contorno da grade de ruas (Martinique, Barbados, Jamaica, Thomas, Trinidad, Domingo St.),
  com os vértices nos cruzamentos das ruas externas desenhadas; 235 m do nó "La Boca" de hoje. La Boca School à parte.
- Conferência independente: a arquibancada ("Grandstand") da folha cai a 132 m do centro do Estádio de Balboa do OSM (a
  arquibancada fica num lado do campo).
- **Shaler Triangle: a folha não rotula.** Junto à Plaza 5 de Mayo há uma ilha triangular sem nome no cruzamento da Av.
  Central com a 4th of July Ave (px ~4065, 2150 da folha); sem nome, não se atribui.

### Créditos (2ª rodada)

- Na tela, `© OpenStreetMap contributors` também nas cenas que carregarem `linha-1914-panama` (agora com trechos do OSM),
  `avenida-de-los-martires-osm`, `rio-curundu-osm`, `puente-de-las-americas-osm`, `pontos-osm-atlantico`,
  `corregimento-ancon-osm` e as `opcao-b-*`.
- Na descrição, além das de antes: "Isthmian Canal Commission, Property map of the Canal Zone (1912), Library of Congress".


## 3ª rodada (pesquisa-3, 15/10/2026, 04:55–05:25 de Brasília)

As versões da 2ª rodada de `zona-do-canal-1947`, `cidades-obra-1912` e da pauta estão guardadas em
`out/zona-do-canal/_tmp/pesquisa-geo/rodada2/`. Scripts e conferências desta rodada: `_tmp/pesquisa-geo/r3/` (scripts em
`r3/scripts/`). As camadas foram gravadas por `r3/scripts/gravar-r3.mjs`, que usa o `validarFC`, o `involucroJs` e o formato
de item do `gravarGeo` da pré-v1, mas **não grava o cache da máquina** (`~/.regie/geo`): a regra do setor nesta tarefa só
deixava escrever em `_media/geo/`, na pauta e em `_tmp/`. O cache ficou com as versões da 2ª rodada desses dois slugs.

### O vale do Chagres até Madden (`zona-do-canal-1947`, refeita)

- **O que a divisa é ali, pela fonte primária:** a Executive Order 5704 (Hoover, 02/09/1931; texto lido em
  https://www.presidency.ucsb.edu/node/361387) descreve a área acrescentada em Madden (~26 sq mi): começa no marco 37 da
  **cota de 100 pés** na margem direita do Chagres (foz da Quebrada Madroñal), sobe a quebrada, vai em reta (768 ft) ao marco
  164½ da **cota de 260 pés**, segue "the continuous 260-foot contour" em volta do Chagres, do Pequení e do Boquerón até o
  marco 19½ (Río Azote Caballo), volta em reta (3.560 ft) ao Chilibrillo, desce o Chilibrillo, acompanha a estrada de Madden,
  vai à Quebrada Moja Polla, desce até a cota de 100 pés (marco 33) e volta por ela (34, 35) ao Chagres. **A cota de 260 pés
  é só a volta do lago; o vale abaixo da represa é cota de 100 pés.** As pontas dos traço-pontos C-norte e E-leste da folha
  ficam a 36 m e 30 m no DEM (o fundo do vale), não na cota de 260.
- **Por isso a cota de 260 pés sozinha não serve ao vale:** no DEM, a região ≤ 79,25 m ligada ao lago escorre pela represa
  (o pixel de 30 m não vê a crista) e se espalha pelas planícies do Gatuncillo e de Chilibre, fora da Zona: 37,8 mi² novos,
  tocando a borda da janela (`r3/v-r3-79.jpg`). Não se usou.
- **O lago e a cota de 260 pés (L):** componente de 65 m ≤ DEM ≤ 79,25 m (260 pés) que contém o lago. O piso de 65 m separa o
  lago do vale a jusante sem traço à mão: de 65 a 70 m a área não muda (45,7 km²) e nada passa ao sul de 9,20° N a oeste de
  −79,62°; com piso de 60 m ela escorre. As ilhas acima da cota (59, 0,89 km²) foram preenchidas. L = 17,77 mi². A camada é
  L unida ao lago que a folha de 1947 pinta (o lago da 2ª rodada tinha um corte reto em −79,5847°, que perdia o braço oeste).
- **O vale abaixo da represa (V):** componente de DEM ≤ 30,48 m (100 pés) que contém o Chagres logo a jusante da represa
  (24,8 m em −79,6447, 9,2042), cortada pelos traço-pontos e pelo segmento entre as pontas deles. Não toca a borda; encosta
  na parte principal. V = 1,01 mi².
- **A ligação na represa não fechou:** entre V e L ficam ~200 m (as retas e os riachos da EO 5704 em volta da represa:
  Madroñal, Azote Caballo, Chilibrillo, Moja Polla). A folha os desenha em traço grosso, mas a tinta não se separou por
  detecção automática (texto, rios e estrada entram junto; `r3/v-r3-m79c.jpg`). Fica aberta, declarada na propriedade
  `aviso_rodada3` da camada.
- **Superfície, medida:** o Copernicus DEM é modelo de superfície (DSM). Como o DSM fica sempre acima do terreno, L e V são
  **mínimos**: o que está dentro deles está abaixo da cota também no terreno, e a cota de verdade fica para fora.
  - Na margem do lago, o anel de 1 a 3 pixels fora do lago pintado fica 24 m acima da água do DEM (mediana; água a 72,5 m =
    238 pés): a copa sobe logo na margem, e a cota de 260 pés do DSM gruda na beira da água.
  - A borda do lago pintado em 1947 fica 64 % fora de L, a 184 m (mediana), 836 m (p90) e 2,3 km (máx., nos braços
    estreitos) dele; por isso a camada é L ∪ lago pintado.
  - Se a cota subisse para compensar a copa: a 84,25 m, L dá 23,05 mi² (+30 %); a 89,25 m a região já cerca morros
    (11,8 km² de "ilhas") e a 94,25 m escapa do vale. Não há limiar honesto acima de 79,25 m.
  - No vale: os 14 traços grossos que a folha desenha no corredor (a cota de 100 pés da EO) ficam a 36,4 m no DEM (mediana do
    mínimo 3×3) e a **1,2 km (mediana; de 21 m a 2,5 km)** da borda de V. Uns 6 m de superfície num vale chato movem a cota
    de 100 pés em ~1 km: **V é só a fita do rio; o corredor real é bem mais largo.** Serve de ligação visual à escala da Zona
    inteira, nunca de câmera no vale.
  - Datum: o DEM é EGM2008; as cotas de 1931 são do nível médio do mar do Canal (Precise Level Datum). A diferença não foi
    medida; é pequena perto da copa.
- **Conferência pela área:** 547,55 mi² (parte principal 526,60 + Madden 20,95) contra 552,95 do relatório de 1940:
  **−1,0 %** (a 2ª rodada, medida do mesmo jeito: 536,83 mi², −2,9 %). A EO 5704 dá ~26 sq mi à área de Madden; a peça de
  Madden mais V somam ~22 mi² (−15 %), coerente com o mínimo.
- **O que continua igual:** a parte principal (incerteza da 1ª e da 2ª rodadas), a ponta de Cristóbal, a falta do mar de 3
  milhas e das ilhas do Pacífico. A faixa de 200 pés da estrada de Madden (EO 5880, 1932) não entra (61 m de largura).
- Prévia sobre a folha: `r3/v-r3-zona-nova.jpg`.

### Gorgona, Empire e Culebra (`cidades-obra-1912`, refeita)

- **O ajuste preso ao longo do canal:** aos 25 pontos da faixa (distância perpendicular ao eixo do OSM) entraram três pares
  de eclusas: o centro da estrutura desenhada na folha × o centro da relação do OSM (Gatún 12228856, Pedro Miguel 11382235,
  Miraflores 11382234), lidos nos recortes `r3/v1912-eclusas.jpg` e `r3/v1912-eclusas-zoom.jpg`. Com o ajuste da 2ª rodada,
  as eclusas caíam a 412, 156 e 146 m; com o novo, a 271, 117 e 106 m (a faixa fica em 34 m de mediana, p90 163 m). Deixando
  uma eclusa de fora: 536 m (Gatún, na ponta do ajuste), 188 m e 225 m. A distância Pedro Miguel–Miraflores sai 6,6 % maior
  na folha que no OSM: o centro "da estrutura" projetada em 1912 e o da relação de hoje não são o mesmo ponto, e isso limita
  o ajuste a ~100–200 m.
- **Os pontos relidos (`r3/v1912-cidades-zoom.jpg`):**
  - Empire = a estação (o rótulo STA. no cruzamento da ferrovia com os caminhos, no sítio urbano amarelo Empire–Culebra):
    (−79,666503, 9,055421), **±200 m**;
  - Culebra = o centro do rótulo CULEBRA, no lóbulo leste do sítio urbano (W. Culebra, Culebra, New Culebra; a folha não tem
    símbolo de cidade): (−79,657831, 9,046729), **±350 m**;
  - Gorgona = o grupo de casas (pontos) junto à ferrovia, a oeste do rótulo GORGONA: (−79,721931, 9,115157), **±350 m**. Cai
    na margem do lago Gatún de hoje (DEM 25–45 m), a 273 m do eixo do canal, como a cidade inundada pelo lago.
- **Correção da 2ª rodada:** o ponto de Gorgona da 2ª rodada estava no pixel errado (y 5909, ~220 px abaixo do rótulo, sobre
  o reservatório de Carabali): o ponto novo fica a **1.261 m** dele, mais que os ±700 m declarados. Empire mudou 332 m, e
  Culebra, 133 m. A camada guarda a coordenada da 2ª rodada em `rodada2_coord`.
- O sítio urbano amarelo Empire–Culebra da folha seria uma área real de 1912; não foi pedida e não foi gravada.

### Rainbow City (`lugares-1947`, sem mudar a geometria)

O verificador-de-fatos respondeu que o Census de 1960 trata Silver City e Rainbow City como a mesma cidade; a data da troca
do nome e a área não se acharam. Na pauta, o item `lugares-1947` ganhou `nota_rainbow_city`: para `rainbow-city` (s06, s48),
o ponto `silver-city-1947`, ±150–250 m. **É pino (ponto), não área.**

### A origem dos mapas

- **NARA 192812325** (a folha de 1936), lida pela API v2 oficial
  (`catalog.archives.gov/api/v2/records/search?naId=192812325`, com a chave e o User-Agent do canal; 1 pedido, HTTP 200;
  resposta em `r3/nara/192812325.json`, sha256 `24731f89…`): "Road Map of Ancon Balboa and Panama", out/1936, item;
  criador **War Department, Office of the Chief of Engineers**; série "Fortifications Map File Plans of Military Forts"
  (naId 305749), RG 77; `useRestriction: Unrestricted` e `accessRestriction: Unrestricted`; guarda: National Archives at
  College Park – Cartographic. A API não traz a frase "public domain": obra de órgão federal sem restrição de uso, domínio
  público (17 U.S.C. §105). Registrado na pauta (`licenca_na_origem_nara`) nos itens `linha-1914-panama`,
  `fourth-of-july-avenue-1936` e `lugares-1936`.
- **LOC 82690127** (a folha da ICC de 1912): a licença continua a **lida no Commons** ("Public domain", fonte LOC 82690127),
  declarada como tal na pauta (`licenca_lida_em`). A loc.gov pediu verificação de robô e não foi acessada por nenhum cliente.

### Créditos (3ª rodada)

- Na tela: nada novo. As duas camadas refeitas são domínio público + Copernicus DEM (`exige_credito: false`).
- Na descrição, além das de antes:
  - "Produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under
    COPERNICUS by the European Union and ESA; all rights reserved. The organisations in charge of the Copernicus programme by
    law or by delegation do not incur any liability for any use of the Copernicus WorldDEM-30." (o texto da licença para
    dado modificado, `marca/acervos/5-dados-e-fronteiras.md` §3.1; também em `extras` do item `zona-do-canal-1947`);
  - o registro da AWS sugere citar: "Copernicus Digital Elevation Model (DEM) was accessed on 2026-10-15 from
    https://registry.opendata.aws/copernicus-dem." (https://registry.opendata.aws/copernicus-dem/, lido em 15/10/2026:
    "GLO-30 Public and GLO-90 are available on a free basis for the general public").
- O ladrilho: `Copernicus_DSM_COG_10_N09_00_W080_00_DEM.tif`, 25.029.275 bytes, md5 igual ao ETag da AWS (`84b7beb8…`),
  sha256 `3f680f7b6fdf15f10182c5d869024e74a2eeb3bb4981f50a792f59f884283215`, em `_tmp/pesquisa-geo/baixado/copdem/` (fora
  do git).

## 4ª rodada (pesquisa-4, 15/10/2026, 05:25–05:50 de Brasília)

Tarefa `zona-do-canal-pesquisa-4`: a geometria que a regência pede (`regencia.json` › `_geo.falta`). Dois pedidos ao Overpass
(`overpass-api.de`, User-Agent do canal, ≥ 10 s entre pedidos; o primeiro deu 502 e passou na única repetição, depois de 2 min),
dumps em `_tmp/pesquisa-geo/dumps/r4-osm-*.json`. A folha de 1936 relida no disco (3 recortes em `_tmp/pesquisa-geo/r4/`).
Camadas gravadas sem o cache da máquina (`r4/gravar-r4.sh`); a versão anterior de `lugares-1936` em `_tmp/pesquisa-geo/rodada3/`.

### `balboa-high-school` (nova; s48/s49, s51, s53)

- O contorno do OSM way/609527463, "Centro de Capacitación Ascanio Arosemena", e o centro de área dele (-79.5572541, 8.9585783).
- A identidade: a La Prensa ("Muros con memoria, centinelas del Canal": a ACP usa as instalações da antiga Balboa High School
  como sede do Centro de Capacitación Ascanio Arosemena) e a Wikipedia (coordenada 8.9589861, -79.5573528; o HABS: "Northeast
  end of El Prado, Balboa"). O centro do OSM fica a **46 m** da coordenada da Wikipedia e a 172 m do Goethals Memorial (a cabeceira
  do Prado). Lado da Zona, a 1,2 km da linha de 1936.
- Precisão: poucos metros (OSM). O prédio de hoje inclui os acréscimos de 1963 e 1969: em janeiro de 1964 o contorno pode diferir
  nas alas. Não serve à folha de 1936 (o prédio é de 1942).
- Crédito: ODbL, `© OpenStreetMap contributors` na tela.

### `lugares-1936` (refeita: 5 → 8 pontos)

| slug | o que é | precisão | conferência |
|---|---|---|---|
| `tivoli-hotel-1936` | o prédio rotulado "Tivoli Hotel" | ±40 m típica (até 90 m) + ~15 m de leitura | a 43 m do "Tivoli BLDG" do STRI no OSM (way/1112176494), no sítio do hotel; a 105 m da linha, do lado da Zona |
| `ancon-clubhouse-1936` | o prédio apontado pela seta de "Ancon Clubhouse" (Frangipani St.) | ±40–90 m + ~10 m | do lado da Zona (243 m da linha). Se é o prédio do clube "gold" de 1920, a folha não diz |
| `ancon-1936` | o centro do rótulo grande "ANCON" da cidade, entre o Gorgas Hospital e o Ancon Boulevard | ±40–90 m; como "centro da cidade", ~300 m | a 466 m do pico do Cerro Ancón; o `place=quarter` "Ancón" do OSM de hoje fica a 1,17 km (é outro uso do nome, junto a Balboa) e não serve a 1920 |

Conferência de georreferência na mesma região: o Parque de Lesseps da folha a 96 m do Palacio Justo Arosemena do OSM (que
ocupa parte do antigo parque). As 5 leituras da 2ª rodada não mudaram.

### O Shaler Triangle: não achado como ponto

- O que se leu: "El espacio situado frente al Hotel Tívoli terminó adquiriendo una característica forma triangular", do lado da
  Zona, no limite com o parque panamenho; mais tarde Plaza Ascanio Arosemena; o terreno da "explanada de las banderas" ocupado
  em 2010 por um prédio de escritórios do complexo legislativo (La Prensa, "Del Parque de Lesseps a la Asamblea", 13/09/2026).
  O FRUS 1958–60 (PM-58) diz só "Shaler's Triangle in the Canal Zone".
- Por que não há ponto: a forma triangular é de depois de 1942, e a folha de 1936 não a mostra; nenhuma fonte lida diz qual
  prédio de hoje do complexo legislativo é o de 2010, e o OSM não tem "Shaler" nem "Plaza Ascanio Arosemena".
- O que há de mais próximo, real: `lugares-1936` › `tivoli-hotel-1936` e a `linha-1914-panama` entre o hotel e o Parque de
  Lesseps. O rótulo "approximate location" junto à linha, entre os dois, do lado da Zona, continua sendo o caminho da regência.

### Confirmados no disco, sem mudança

- Administration Building de Cristóbal e Cristóbal: `pontos-osm-atlantico` › `administration-building-cristobal`
  (-79.904567, 9.353282) e `cristobal-hoje` (-79.904559, 9.353002).
- A comissaria de Balboa: `lugares-1936` › `balboa-commissary-1936` (-79.558954, 8.9552; leitura duvidosa entre dois prédios a
  ~95 m, como na 2ª rodada).
- Os clubes de 1920 (s25): Balboa (`balboa-clubhouse-1936`), Ancón (`ancon-clubhouse-1936`, novo), Pedro Miguel, Red Tank,
  Paraíso e Gatún (`lugares-1947`), La Boca (`la-boca-1936`), Cristóbal (`pontos-osm-atlantico` › `cristobal-hoje`). A lista dos
  clubes do relatório de 1920 continua não lida por esta peça: os pontos são os das cidades que a regência nomeia.

### Créditos (4ª rodada)

- `balboa-high-school`: `© OpenStreetMap contributors` na tela (ODbL).
- `lugares-1936`: domínio público, sem crédito (NARA 192812325).


## 5ª rodada (pesquisa-5, 15/10/2026, 10:30–10:50 de Brasília)

A pauta da 4ª rodada está guardada em `out/zona-do-canal/_tmp/pesquisa-geo/rodada4/`. Scripts e conferências em
`out/zona-do-canal/_tmp/pesquisa-geo/r5/` (`caixa.py`, `agua_extrair.py`, `scripts/r5_construir.py`, `scripts/r5_origens.py`,
`scripts/r5_ver.py`); gravação sem o cache da máquina (`r3/scripts/gravar-r3.mjs`).

### Camadas novas

| arquivo (`_media/geo/`) | o que é | fonte e data | licença / tela | features | conferência |
|---|---|---|---|---|---|
| `faixa-art2-5mi-mar3mn.json` | ESQUEMA: a faixa do Art. II (5 mi de cada lado do eixo) com as 3 milhas náuticas mar adentro nas duas pontas | eixo do OSM + canais de acesso do OSM (Overpass 15/10/2026) + costa do OSM (osmdata, 08/10/2026) | ODbL: `© OpenStreetMap contributors` | 1 | 1.437,4 km² (555,0 mi²); contém 100 % da `faixa-art2-5mi`; a borda de fora a 5.556 m da terra nas duas pontas; Casco Viejo, Calidonia e Flamenco dentro (na antiga, fora) |
| `agua-osm-zona.json` | o mar do OSM para a água escura (identidade §6), na caixa das câmeras de s06, s11, s48 e s60 | water polygons do osmdata (Last-Modified 2026-10-08) − 275 estruturas do OSM (Overpass 15/10/2026) | ODbL: `© OpenStreetMap contributors` (já na linha da MapTiler) | 1 (47 polígonos) | caixa -81.15, 7.95, -78.05, 10.35; 1,1 MB; 46.458 vértices |

A `faixa-art2-5mi` fica como estava (sha256 `b6d00661…`, conferido).

### A faixa com o mar: a fonte e a conta

- **Fonte:** o Art. II do tratado de 18/11/1903 (Hay-Bunau-Varilla), lido em https://avalon.law.yale.edu/20th_century/pan001.asp
  (15/10/2026, 10:30, HTTP 200; sha256 da página `c7fdb92b…`). Literal: "The Republic of Panama grants to the United States in
  perpetuity the use, occupation and control of a zone of land and land under water for the construction maintenance, operation,
  sanitation and protection of said Canal of the width of ten miles extending to the distance of five miles on each side of the
  center line of the route of the Canal to be constructed; the said zone beginning in the Caribbean Sea three marine miles from mean
  low water mark and extending to and across the Isthmus of Panama into the Pacific ocean to a distance of three marine miles from
  mean low water mark with the proviso that the cities of Panama and Colon and the harbors adjacent to said cities, which are
  included within the boundaries of the zone above described, shall not be included within this grant."
- **A conta:** 5 milhas = 5 × 1.609,344 m = 8.046,72 m de cada lado; 3 milhas náuticas = 3 × 1.852 m = 5.556 m. (1.852 m é a
  milha náutica internacional, de 1929; em 1903 os EUA usavam 1.853,248 m: 3,7 m a mais em 3 milhas, menos de um pixel em qualquer
  quadro do vídeo.)
- **O método** (projeção local equirretangular a 9,1°N, a mesma da `faixa-art2-5mi`):
  1. o eixo estendido: o eixo do OSM (relation/2389520, de 9,400 N a 8,943 N) + os vértices dos canais de acesso do OSM além das
     pontas (Pacífico: `recommended_track` way/830303040 até -79.5216, 8.8885; Atlântico: way/1445268878 até -79.9188, 9.4035) +
     20 km no rumo do último trecho, só para passar das 3 milhas (o limite corta antes);
  2. a faixa: buffer de 8.046,72 m desse eixo, pontas planas;
  3. o limite do mar: buffer de 5.556 m da terra do istmo (o maior pedaço de terra da caixa; hoje inclui Naos, Perico e Flamenco,
     pela calçada de Amador, que é de 1913). As ilhas soltas não estendem o limite: o Art. II as trata à parte ("all islands within
     the limits of the zone"). Com elas (Taboguilla, 1,5 km², e as ilhotas de Limón Bay), a faixa iria a 1.545,8 km²; essa variante
     não foi entregue;
  4. a camada = faixa ∩ limite (lagos e rios contam como terra); fica só o pedaço ligado ao canal.
- **A linha de costa usada:** a do OSM (`natural=coastline`, pelos water polygons do osmdata), que pela convenção do OSM é a linha
  de preia-mar. O tratado mede da linha de baixa-mar média: onde a costa é praia ou lodaçal (o Pacífico tem maré grande), a linha de
  baixa-mar fica mar adentro, e o limite real iria além deste. **Não medido.** É esquema, como a `faixa-art2-5mi`.
- **O proviso:** as cidades do Panamá e de Colón ficam DENTRO dos limites e fora da concessão, pelo mesmo artigo: a península da
  Cidade do Panamá dentro desta faixa é o que a fala da s11 diz ("sat inside those limits").
- **Conferência** (olhar, não portão): `r5/v-r5-pacifico.jpg` e `r5/v-r5-atlantico.jpg`.

### A água do OSM

- **Fonte:** o `water-polygons-split-4326.zip` do osmdata (906.106.868 bytes, Last-Modified 2026-10-08 03:47:23 UTC, sha256
  `0b52c599…` conferido hoje), o mesmo do vídeo 2, lido sem extrair e sem baixar de novo (só leitura em
  `out/los-angeles/_media/geo/_osm-agua/`); 22 polígonos na caixa.
- **A caixa:** a união dos quadros 3840×2160 de todas as paradas de câmera de s06, s11, s48 e s60 (lidas do HTML), com o giro
  (círculo da meia-diagonal): -81.055, 8.059, -78.153, 10.261; com ~10 km de folga, -81.15, 7.95, -78.05, 10.35.
- **As estruturas tiradas** (Overpass, base 2026-10-15T13:29:50Z): 275, 242.108 m² — píer em área (50) e em linha com ±3 m (202),
  quebra-mar em área (7), em linha com ±8 m (15) e em multipolígono (1). Os quebra-mares da Cinta Costera ficam a 6–12 m (mediana)
  da costa do OSM: a faixa entre eles é enrocamento. `quay` em linha não se tira (é a borda do cais). Lista em `r5/resumo.json`.
- **Simplificação** por faixa de zoom (Douglas-Peucker com topologia): 1,2 m nos quadros de s48 com zoom ≥ 14,4
  (-79.645, 8.880, -79.475, 9.048; Hausdorff medido 1,41 m); 3 m nos quadros com zoom ≥ 12 (-80.16, 8.61, -79.08, 9.73; 3,71 m);
  10 m no resto, que só aparece com a Zona inteira (zoom ≤ 11,4, ~29 m por pixel 4K; 16,2 m). 111.304 → 46.458 vértices.
- **O que fica escuro também:** o mar do OSM sobe os canais de acesso até as eclusas (Miraflores e Gatún); os lagos Gatún e
  Miraflores não estão na camada e ficam no satélite.
- Conferência (olhar): `r5/v-r5-agua-cinta.jpg`.

### Créditos (5ª rodada)

- As duas camadas: `© OpenStreetMap contributors` na tela (já na linha `© MapTiler © OpenStreetMap contributors`) e
  `openstreetmap.org/copyright` na descrição.
