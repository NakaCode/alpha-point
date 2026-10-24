# ROUPA ALPHA POINT — pesquisa-geo

> Só o que é deste canal. Base: `identidade.md` («Base de mapa», «A abertura e o mapa»), na pasta desta roupa (um nível
> acima de `agentes/`). Destilada de `marca/agentes/pesquisa-geo.md` e de `marca/acervos/5-dados-e-fronteiras.md`, em dia
> com a marca de 24/10/2026. Caminho `marca/…` aqui é procedência no repositório do canal, não arquivo seu.

## 1 · Quem consome a sua geometria

- O `mapista`, sobre a base **MapTiler** (`canal.json` › `mapa.perfil`; Lucas, 26/09/2026). Você não escolhe base,
  câmera nem cor, e não pede tile: o plano cobra por pedido.
- **Território é polígono inteiro; ponto é anel.** País, estado ou região: o polígono completo. Estreito, base, porto,
  fim de estrada: o ponto real.
- **Fronteira disputada:** a linha de controle de fato, com a fonte de cada linha (a cena a desenha tracejada, `DISPUTED`).
- Os territórios de contexto ganham cor pela vizinhança em todos os mapas do vídeo, nunca pela ordem da fala
  (04/10/2026; `marca/identidade.md` §6): a fronteira terrestre e o país de cada vizinho saem da sua geometria.
- **A região falada, sempre demarcada** (Lucas, 24/10/2026; do vídeo 5 em diante): toda região que a fala nomeia ou
  percorre (uma costa, um deserto, uma bacia, um vale, uma faixa entre duas cidades) precisa de geometria lida, com
  procedência, para o mapista demarcá-la enquanto ela é dita. Sem polígono de fonte para o limite, entregue os pontos que
  a fala dá (com geometria real) e o trecho entre eles, e diga que não há limite oficial; nunca um polígono feito à mão.
- **A água** (23/10/2026): rios, lagos, represas e canais que a cena mostra pedem a linha ou o polígono real (Natural
  Earth, HydroSHEDS, OSM), e, no rio, o sentido da corrente, porque a correnteza desce no sentido da água.

## 2 · As fontes que o canal aceita

- Fronteiras e costas: **Natural Earth** (domínio público).
- **Desde 27/09/2026** (licenças e créditos em `marca/acervos/5-dados-e-fronteiras.md`):
  - geometria: geoBoundaries, US Census TIGER, Statistics Canada, LSIB, HydroSHEDS v2, Marine Regions;
  - relevo: Copernicus DEM GLO-30, USGS 3DEP (o Alasca a 5 m), GEBCO, ETOPO. SRTM e NASADEM param em 60°N;
  - **não servem:** GADM, UN SALB e Eurostat GISCO (não comerciais).
  - **HydroSHEDS, o arquivo:** as páginas ficam em `www.hydrosheds.org`, mas os downloads ficam em `data.hydrosheds.org`,
    cujo `robots.txt` é «User-agent: * / Disallow: /» (conferido em 22/10/2026, depois de um download por script no vídeo
    4). Arquivo de lá não se baixa por programa: só a pessoa, no navegador, pelo botão da página do produto. Se a
    geometria dele faltar na obra, diga no relato, sem baixar.
- **Ponto de cidade:** o do Natural Earth (sem crédito) antes do OSM (ODbL, crédito na tela). Ponto sobre a costa
  simplificada do NE pode cair na água: declare o deslocamento.
- **Mapa antigo digitalizado como geometria** (Lucas, 07/10/2026: «mapa antigo sim»): entra quando as três coisas valem
  juntas — domínio público **provado** (com o sha256 da folha), georreferência por pontos de controle independentes ou
  pela própria fonte oficial, e **incerteza medida e declarada** em `out/<proj>/_pesquisa/pauta-geo.md`. Sem crédito na
  tela; a coleção vai na descrição. O que a folha não fecha vai como linha aberta.

## 3 · O rótulo

Nome em inglês dos EUA pelo AP Stylebook. País e região em CAIXA ALTA, Inter 700, `+0.04em`; cidade, rio, estreito em
caixa normal. Rótulo de 128 px, teto 160, até 3 palavras (4 se nome próprio); nunca herói. A grafia final é do
`redator-de-tela`. Geometria nova leva o nome em inglês, não em português.

## 4 · Crédito, por licença

- Natural Earth, TIGER, mapa antigo em domínio público: nada na tela.
- OpenStreetMap: `© OpenStreetMap contributors` na tela (já coberto pela linha da MapTiler quando a base é ela) e
  `openstreetmap.org/copyright` na descrição. Diga quais cenas carregam OSM.
- Copernicus DEM: a linha de crédito fixa da licença, inteira, na descrição (como no vídeo 3).
- Copernicus Sentinel: `Contains modified Copernicus Sentinel data <year>` na tela.

## 5 · Quando não há geometria real

- **Rota que nunca foi construída** (27/09/2026): o canal aceita o esquema declarado. Entregue o ponto de partida
  real, os pontos que o texto nomeia, com geometria real, e o trecho da fonte de onde a linha sai. A tela leva
  `Approximate route`. Nunca decalque figura sem permissão.
- Figura ou traçado de documento estadual ou de imprensa só com permissão de uso clara; sem ela, bloqueio reportado.
- Para o resto, bloqueio reportado com o que existe de mais próximo.
