# Pesquisa-geo, 08/10/2026 — o quebra-mar de hoje (s29) e o píer de 1903 (s19)

Pedido do qc, com o vídeo no passo `art`. Nada foi apagado: `quebra-mar-usgs1923` e `long-wharf-usgs1903` ficam como estavam.

## 1 · A camada nova: `quebra-mar-osm`

- **Arquivos:** `out/los-angeles/_media/geo/quebra-mar-osm.json` e `.js` (1 feature, LineString, 34 vértices, WGS84, 1,5 KB),
  sha256 `5cf12d73ffc5f65f2be81df3d2e602f89d1a7a1b92f4ad16925019294354f9e9`. Registrada em `pauta-geo.json` (25 itens; `validar-contrato pauta-pesquisa` válido;
  `qc-procedencia` PASS). O `gravarGeo` acrescentou a linha dela em `out/los-angeles/_creditos-mapa.md`.
- **Fonte:** OpenStreetMap pelo Overpass (overpass-api.de), 08/10/2026, User-Agent do canal, um pedido por vez (um 504 no meio,
  repetido depois de 60 s). Dump: `out/los-angeles/_tmp/geo-quebra-mar/dump3.json` (sha256 `42e621a3…d638`).
- **Como se derivou** (`_pesquisa/geo_quebra_mar_osm.py` + `geo_quebra_mar_osm_gravar.mjs`):
  - no OSM, o muro é polígono, não linha: `way/1312790328` (`man_made=breakwater`, `material=rock`) vai da ponta do aterro de
    Cabrillo Beach (nó comum com `way/524838430`, -118.27732, 33.70803) ao farol. O eixo é a média das duas margens;
  - a raiz, a oeste da ponta, está enterrada no aterro de Cabrillo Beach (com enrocamento dos dois lados: `way/524838423` e
    `way/524838430`). O eixo ali é o meio entre as duas margens do aterro (coastline `way/41645427` e `way/448064329`), até onde o
    aterro encontra a terra (-118.2824, 33.70959);
  - termina no centro do farol "Los Angeles Light" / Angels Gate (`way/1312710274`; relation/17996894, NRHP, `start_date=1913`);
  - Douglas-Peucker a 1 m (406 → 34 vértices).
- **É a obra de 1899–1912:** o polígono é contínuo da costa até o farol de 1913. O Middle Breakwater (`way/4883616`, com nome, GNIS
  245853) começa a 673 m do farol, a leste da entrada de Angels Gate, e ficou de fora. Também ficaram de fora os outros polígonos
  `breakwater` do porto interno (marina de Cabrillo, Reservation Point).
- **Licença:** ODbL 1.0 (openstreetmap.org/copyright, lido em 08/10/2026). Na tela da s29: `© OpenStreetMap contributors` (a
  linha da MapTiler já o leva). Na descrição: openstreetmap.org/copyright.
- **Conferência independente:** a margem da água do TIGER 2025 (`agua-porto-hoje-tiger`, Census) fica a 1–13 m do eixo no trecho
  leste (o muro tem ~35 m de largura no OSM). O farol do OSM cai a 2 m da coordenada da Wikipedia (33.70857, -118.25160).
  Incerteza declarada: ±10 m no mar; ±20 m na raiz enterrada.

### Comprimento

| trecho | m | pés |
|---|---|---|
| da terra de hoje ao farol (a camada inteira) | 3.120 | 10.235 |
| no mar (da ponta do aterro ao farol) | 2.610 | 8.563 |
| raiz sobre o aterro | 510 | 1.672 |
| linha de 1923, do traço inteiro (comparação) | 3.353 | 11.002 |

A fonte dá 9.250 + 1.887 = 11.137 pés (2,11 mi). A linha de 1923 bate com isso (11.002). A de hoje mede 10.235 porque começa onde o
aterro de hoje encontra a terra: a raiz original, na costa de 1899, ficou sob o aterro e a praia de Cabrillo. Os 10.235 pés passam
de "at least 9,000 feet" e ficam abaixo do "just over two miles" da s47 (1,94 mi). **O número de tela continua sendo o da fonte, não
o da medida.**

### O deslocamento entre a linha de 1923 e a de hoje

A linha de 1923 corre **ao norte** da de hoje, ou seja, para dentro do porto (as medidas foram feitas a cada ~100 m ao longo do muro
de hoje, pela distância à linha de 1923):

- **no trecho reto leste** (de -118.266 ao farol, ~1,5 km): **53 a 59 m, mediana 58 m**. É praticamente uma translação: o que o
  qc-visual viu na s29 (55–70 m);
- na curva e na raiz: de 9 a 47 m (mediana 29). Ali a linha de 1923 corta a curva e casa com a de hoje em dois pontos;
- **no farol:** o fim da linha de 1923 fica a **81 m** do farol de hoje (~55 m ao norte e ~60 m a oeste). O ponto do farol da mesma
  folha (`pontos-historicos-usgs`) fica a 48 m. **A ponta de hoje casa com o Angels Gate**, e a de 1923 não;
- a raiz de 1923 (-118.2857, 33.7106) fica a 328 m do início da camada de hoje, sobre o que hoje é terra.

A incerteza registrada na camada de 1923 (±9 m) mede a leitura do traço, não o erro da folha. Ali, a folha erra em ~55–60 m (a
mesma folha dá a `divisa-la-lb-terminal-island-usgs1923`).

## 2 · O píer de 1903 (s19): os números sustentam o erro da folha

- **Ponto fixo:** o relevo. As curvas de 50 pés impressas na folha Calabasas 1903 foram comparadas com as de hoje, tiradas do USGS
  3DEP (`exportImage` do 3DEPElevation, ~5 m; `out/los-angeles/_tmp/geo-quebra-mar/dem.tif`). A falésia das Palisades e os cânions
  (Santa Monica, Rustic, Temescal) não andaram 200 m em 120 anos. Script: `_tmp/geo-quebra-mar/cal_contornos.py` (a correlação) e
  `cal_ver.py` (a sobreposição).
- **Medida:** a folha desenha o relevo deslocado para **sudoeste**, ou seja, para o mar:
  - na janela em volta do píer (-118.545 a -118.515, 34.025 a 34.042), 176 m a oeste e 130 m ao sul, **219 m**;
  - na janela de Santa Monica Canyon (-118.535 a -118.505), 232 m a oeste e 124 m ao sul, **263 m**;
  - na janela oeste, o pico caiu na borda da busca e não convergiu: sem número;
  - o pico da correlação é fraco (61–70 contra um fundo de 46–57): a folha de 1903 generaliza o relevo. A sobreposição
    (`_tmp/geo-quebra-mar/ver0.png` sem correção e `ver1.png` corrigida em 200 m O e 125 m S) mostra a falésia e os cânions casando
    depois da correção.
- **A prova:** corrigida pelo deslocamento medido no relevo (que não usa a costa), **a raiz do píer cai a 1–9 m da costa de hoje do
  OSM**, a 2,2 m de cota no 3DEP. Sem correção, está a 202 m. O deslocamento da folha explica a distância inteira, e não sobra nada
  para "a praia cresceu".
- **Resposta:** é **erro da georreferência ou do desenho da folha de 1903** (~220–260 m para sudoeste ali), não praia que cresceu.
  O comprimento do píer na folha (1.185 m = 0,74 mi, "more than three quarters of a mile") continua certo: o erro é de posição, não de
  forma.
- **A camada do píer não mudou.** Mas a incerteza dela no `pauta-geo.json` ("±5 m de georreferência + ±11 m de leitura") está errada
  para a posição: a medida aqui é ~±250 m. Corrigir esse registro, e o ponto "Port Los Angeles" de `pontos-historicos-usgs` (mesma
  folha), cabe a quem decide. O caminho, se a s19 precisar do píer sobre o satélite: transladar a camada pelo deslocamento medido,
  declarado como georreferência corrigida por pontos de controle independentes (roupa, §3).

## Fontes

- OpenStreetMap, Overpass API, 08/10/2026: ways 1312790328, 524838430, 524838423, 41645427, 448064329, 1312710274, 4883616; relation
  17996894. ODbL 1.0.
- U.S. Census Bureau, TIGER/Line 2025 Area Hydrography (`agua-porto-hoje-tiger`, já no canal). Domínio público.
- USGS 3DEP, `https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/exportImage`, bbox -118.57,34.01,-118.50,34.06,
  08/10/2026. Domínio público. Só para a medida, sem camada gravada.
- USGS HistoricalTopo: Wilmington 1923 (item 295811) e Calabasas 1903 (item 465394), já no canal.
- Wikipedia, "Los Angeles Harbor Light": 33.70857, -118.25160 (só para conferir o farol).
