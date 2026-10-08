# Pesquisa-geo, 08/10/2026 — conferência das camadas tiradas das folhas antigas do USGS

Pedido do Claude central (vídeo `los-angeles`, passo `art`), depois do `geo-quebra-mar-relato.md`. As camadas de origem ficam como
estavam. As novas estão em `out/los-angeles/_media/geo/` (`.json` + `.js`) e registradas no `pauta-geo.json` (28 itens; contrato
`pauta-pesquisa` válido; `qc-procedencia` PASS), com método, medida, ponto fixo, incerteza e sha256.

## A tabela

| camada de origem | cenas | folha | ponto fixo | deslocamento medido (folha − real) | incerteza declarada antes | camada corrigida |
|---|---|---|---|---|---|---|
| `long-wharf-usgs1903` | s19 | Calabasas 1903, 1:62.500 | relevo (3DEP): falésia de Pacific Palisades, cânions | **222 m**: 180 m O, 130 m S | ±16 m | **`long-wharf-usgs1903-corrigido`**, ±50 m |
| `molhe-1871-usgs1896` | s12 | San Pedro 1896, 1:62.500 | relevo (3DEP): morros de San Pedro e Palos Verdes | **272 m**: 200 m O, 185 m S | ±16 m | **`molhe-1871-usgs1896-corrigido`**, ±50 m |
| `pontos-historicos-usgs`: Deadman's Island | s07, s12, s19, s23, s31, s48, s55 | San Pedro 1896 | relevo | 272 m | ±16 m | **`pontos-historicos-usgs-corrigidos`**, ±50 m |
| ... Rattlesnake Island | idem | San Pedro 1896 | relevo (a ~2 km das janelas) | 272 m | ±16 m | idem, ±60 m |
| ... Port Los Angeles | idem | Calabasas 1903 | relevo | 222 m | ±16 m | idem, ±50 m |
| ... o farol | idem | Wilmington 1923, 1:24.000 | o próprio farol de 1913, que existe hoje (OSM) | 48 m | ±9 m | idem: a posição de hoje, ±5 m |
| `divisa-la-lb-terminal-island-usgs1923` | s46 | Wilmington 1923 | **nenhum no lugar** | **NÃO MEDIDO em Terminal Island**. Na mesma folha: 38 m na grade de San Pedro, ~58 m no quebra-mar | ±10 m | **não gravada**: fica, com a incerteza a corrigir para ≥ ±60 m (anotado na pauta) |
| `quebra-mar-usgs1923` | s29, s48 | Wilmington 1923 | o próprio muro (OSM) | 53–59 m N no trecho leste | ±9 m | já trocada pela `quebra-mar-osm` (relato anterior) |

Os sha256 das novas: `long-wharf-usgs1903-corrigido` `b3da33ee…3433`, `molhe-1871-usgs1896-corrigido` `49040c17…e580`,
`pontos-historicos-usgs-corrigidos` `f356004a…459a` (4 pontos, os mesmos nomes, mais `folha`, `correcao_m`, `incerteza_m`,
`metodo` e `posicao_na_folha`).

## O método

`_pesquisa/geo_folha_deslocamento.py` (novo):
- os pontos da referência de hoje são deslocados numa grade (leste, norte) e projetados na folha pela georreferência do próprio USGS;
- o melhor deslocamento é onde a folha desenha o lugar de hoje;
- **relevo:** as curvas de 50 ft do USGS 3DEP (`exportImage`, ~5 m, domínio público) contra as curvas marrons impressas na folha;
- **ruas:** os eixos de rua do TIGER 2025 contra o vão claro entre as quadras (só nas folhas 1:24.000).

A correção (`geo_folhas_corrigir.py`) é posição real = posição na folha − deslocamento. A gravação é `geo_folhas_corrigir_gravar.mjs`.

### Calabasas 1903 (o píer)
- Janelas em volta do píer, deslocamento em metros (leste, norte):
  - (-180, -130);
  - (-170, -140);
  - (-180, -130);
  - (-230, -130).
- Usado: (-180, -130).
- A janela oeste (-118.56 a -118.535) não fechou: o pico caiu na borda da busca. Ficou fora.
- **A comparação é fraca:** o 2º pico fica a ~40 m do 1º, com nota só 5–6 % menor. A dispersão entre janelas é de 60 m em leste e
  10 m em norte. Daí os ±50 m.
- **Conferência independente:** a raiz corrigida cai a 3 m da costa de hoje do OSM. Antes, caía a 202 m.

### San Pedro 1896 (o molhe, Deadman's, Rattlesnake)
- Quatro janelas de -118.35 a -118.28, deslocamento em metros (leste, norte):
  - (-200, -190);
  - (-200, -190);
  - (-170, -170);
  - (-210, -180).
- Mediana: (-200, -185). Os picos têm cerca do dobro da nota do fundo, mais nítidos que os de 1903.
- **Conferência independente:** Deadman's Island corrigida fica a 51–85 m da que a folha de 1923 desenha (antes, 247 m). A distância
  depende de quanto se corrige a de 1923, e cabe nos ±50 m de cada lado.
- Rattlesnake Island fica a ~2 km a leste das janelas de relevo. As quatro janelas concordam em ±20 m ao longo de 7 km: ±60 m.

### Wilmington 1923 (a divisa de Terminal Island)
- **Em Terminal Island não há ponto fixo** que exista na folha e hoje. A ilha foi aterrada e redesenhada, e as ruas, os trilhos e
  as margens de 1923 sumiram. A divisa LA–Long Beach do TIGER de hoje corre quase paralela ao traço de 1923, mas ela é o próprio
  objeto, e pode ter mudado por acordos de porto: não serve de ponto fixo.
- O que se mediu na mesma folha:
  - a grade de ruas de San Pedro, ~2,5 km a oeste: **(-20, +32), 38 m**. É a única janela de ruas com pico claro (nota 168 contra
    157 do 2º);
  - o quebra-mar (relato anterior): ~58 m para o norte;
  - Point Fermin, Wilmington e Long Beach oeste não fecharam: picos de grade repetidos, ou na borda da busca. Não medido.
- **A translação do quebra-mar não vale ali.** Duas medidas da mesma folha, a 2–3 km uma da outra, diferem em ~20 m em norte e em
  sinal no leste. Não há como saber qual vale em Terminal Island. Não corrigi no chute.
- A incerteza honesta da divisa é de pelo menos ±60 m, e não ±10 m. Anotei isso no item da pauta (`conferencia_2026_10_08`), sem
  mexer na camada.

## O que isso toca fora do pedido
- **As camadas de Hamlin** (`la-1906`, `faixa-1906`, `wilmington-1909`, `san-pedro-1909-divisa`, `la-1909`) usaram, na correção do
  sudeste de 07/10, Deadman's Island e Point Fermin **lidos na folha Wilmington 1923** como pontos de controle. Essa folha erra
  ~40–60 m ali. A incerteza declarada delas no sul é de ±150 a ±200 m, o que cobre esse erro: não pedem conserto agora.
- O farol de `pontos-historicos-usgs-corrigidos` vem do OSM. A cena que o mostrar leva `© OpenStreetMap contributors` (a linha da
  MapTiler já o leva).

## Fontes
- USGS HistoricalTopo: Calabasas 1903 (465394), San Pedro 1896 (298928) e Wilmington 1923 (295811), já no canal. Domínio público.
- USGS 3DEP `exportImage`, 08/10/2026:
  - bbox -118.57,34.01,-118.50,34.06 (`_tmp/geo-quebra-mar/dem.tif`, sha256 `54fd971d…353e`);
  - bbox -118.36,33.70,-118.25,33.78 (`dem-sp.tif`, `1c5fdee7…5595`).
  Domínio público.
- U.S. Census TIGER/Line 2025 Roads, condado de Los Angeles (`_tmp/geo-fontes/tl_2025_06037_roads.zip`, já no canal). Domínio público.
- OpenStreetMap (Overpass, 08/10/2026): o farol (`way/1312710274`) e a costa de Santa Monica Bay (`dump-cal.json`). ODbL.
