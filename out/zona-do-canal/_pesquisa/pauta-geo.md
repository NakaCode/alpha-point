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
| `zona-do-canal-1947.json` | o contorno da Zona: terra dentro da divisa + lagos Gatún e Madden | AMS, *Canal Zone and Vicinity*, 1:100.000, 1947 (LOC 83694755, via Commons) | domínio público, sem crédito na tela; a coleção vai na descrição | 1 (MultiPolygon, 2 partes) | ver "A folha de 1947" |
| `divisa-zona-1947.json` | as linhas da divisa como a folha as desenha (8 trechos) | a mesma folha | idem | 8 | idem |
| `linha-1914-panama.json` | "the line": a divisa entre a Cidade do Panamá e a Zona | *Road Map of Ancon, Balboa and Panama*, 1:8.000, out/1936 (NARA 192812325, via Commons) | domínio público, sem crédito na tela | 1 | ver "A folha de 1936" |
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
