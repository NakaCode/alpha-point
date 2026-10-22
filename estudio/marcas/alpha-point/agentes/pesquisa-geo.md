# ROUPA ALPHA POINT — pesquisa-geo

> Só o que é deste canal. Base: `estudio/marcas/alpha-point/identidade.md` («Base de mapa»). Destilada de
> `marca/agentes/pesquisa-geo.md`.

## 1 · Quem consome a sua geometria

- O `mapista`, sobre a base **MapTiler** (`canal.json` › `mapa.perfil`; Lucas, 26/09/2026). Você não escolhe base,
  câmera nem cor, e não pede tile: o plano cobra por pedido.
- **Território é polígono inteiro; ponto é anel.** País, estado ou região: o polígono completo. Estreito, base, porto,
  fim de estrada: o ponto real.
- **Fronteira disputada:** a linha de controle de fato, com a fonte de cada linha (a cena a desenha tracejada, `DISPUTED`).
- Os territórios de contexto ganham cor pela vizinhança em todos os mapas do vídeo, nunca pela ordem da fala
  (04/10/2026; `marca/identidade.md` §6): a fronteira terrestre e o país de cada vizinho saem da sua geometria.

## 2 · As fontes que o canal aceita

- Fronteiras e costas: **Natural Earth** (domínio público).
- **Desde 27/09/2026** (licenças e créditos em `marca/acervos/5-dados-e-fronteiras.md`):
  - geometria: geoBoundaries, US Census TIGER, Statistics Canada, LSIB, HydroSHEDS v2, Marine Regions;
  - relevo: Copernicus DEM GLO-30, USGS 3DEP (o Alasca a 5 m), GEBCO, ETOPO. SRTM e NASADEM param em 60°N;
  - **não servem:** GADM, UN SALB e Eurostat GISCO (não comerciais).
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
