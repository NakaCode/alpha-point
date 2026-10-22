# ROUPA ALPHA POINT — mapista

> Só o que é deste canal. Base: `estudio/marcas/alpha-point/identidade.md` («Base de mapa»). Destilada de
> `marca/agentes/mapista.md`, com o tratamento do satélite atualizado por `marca/identidade.md` §6 (09/10/2026).

## 1 · A base

- **MapTiler satellite-v2 + terrain-rgb-v2** (`canal.json` › `mapa.perfil`; Lucas, 26/09/2026: «será o maptiler»),
  conta e plano Flex do Lucas, que cobrem vídeo só até 100 mil inscritos. Trocar a base é decisão do Lucas; outra base
  só entra com a licença lida e registrada em `marca/identidade.md` §6. Esri e Mapbox não.
- Bases aceitas além dela (27/09/2026): Google Earth Timelapse e Studio (com o crédito do Google a cena inteira, sem
  repintar), Copernicus DEM, USGS 3DEP, GEBCO, ETOPO, Worldview/GIBS, NAIP, GOES, Himawari.
- **Relevo 3D** pede o ok do Lucas a cada vídeo (no vídeo 3, «Plano, sem relevo», 15/10/2026); sem ele, mapa plano.
  O Lucas pediu mais relevo e câmera viajando (03/10/2026): proponha onde a frase argumenta altura.

## 2 · O tratamento e as cores

- **Satélite, tratamento C** (Lucas, 09/10/2026: «C, vivo»): `raster-brightness-max 0.92`, `raster-saturation 0`,
  `raster-contrast 0.25`. Sem véu, scrim ou vinheta por cima. O mar aberto fica quase preto; a água do porto com emendas
  claras leva a camada de água do OSM em `--agua-base` (`#00050c`; 08 e 09/10/2026).
- **Protagonista:** `--destaque` a 85 % (40 % quando há território de contexto pintado), contorno `--tinta` 6 px.
- **Contraparte:** `--contraparte` a 35 % (01/10/2026). Terceiro ator: `--neutro` (fora do mapa).
- **Territórios de contexto** (04/10/2026), a 25 %, só com o nome no quadro: `--contexto-2` azul para o outro lado da
  fronteira internacional; `--contexto-3` lavanda para o vizinho mais importante do mesmo país; `--contexto-1` violeta
  para o segundo. Com a contraparte no quadro, só uma matiz de contexto; o azul nunca em mapa de voto ou partido dos EUA
  nem junto de `--tensao`. Atribuição pela vizinhança, nunca pela ordem da fala.
- **Fronteira:** a única linha branca — branco a 70 %, 5 px, sobre `#0B0F14` a 60 %, 12 px (30/09/2026). Estrada, rota
  ou malha não protagonista em `--contraparte`; a protagonista em `--destaque`; cinza nunca em linha de mapa.
- **Legenda das cores** (01/10/2026): caixa `--rotulo` discreta no canto de cima, amostra de cada linha e uma palavra a
  84 px; cada item entra com a sua linha; conta como um elemento.
- **Fronteira disputada:** tracejada, rótulo `DISPUTED`, a linha de controle de fato.
- **O ponto é o anel:** 56 px, traço 10 px `--destaque`, pulso 1→1,8 em 1,2 s, duas vezes. Nada de pino. País e região,
  sempre o polígono inteiro.

## 3 · Rótulos

- Pílula `--rotulo`, Inter 700, 128 px (teto 160), até 3 palavras ou 4 se nome próprio. Nome de lugar nunca é herói.
- País e região em CAIXA ALTA `+0.04em`; cidade, rio, estreito em caixa normal. AP Stylebook; imperial primeiro.
- **Nome dentro do território de contexto:** CAIXA ALTA, Inter 700, 104–128 px, letra `--tinta` com contorno de 14 px
  em `--rotulo` por fora (`--nome-territorio-*`).
- **Nenhum rótulo sobre uma linha do mapa:** a linha não se move; o rótulo muda de lugar.
- **O rótulo de uma linha só entra com a linha.**
- **País: só o nome escrito, sem bandeira** (27/09/2026), também a dos EUA. Exceção pontual só se o Lucas a der.
- **Nome de lugar com foto** (03/10/2026): quando há foto aprovada do lugar, uma miniatura dela junto do nome, sem
  cobrir o território.
- **Rota que nunca foi construída:** tracejada, a partir do ponto real, com `Approximate route` a 84 px todo o tempo.
- **Contorno de mapa antigo em domínio público** (07/10/2026): entra como geometria, sem crédito na tela, e a câmera
  nunca chega mais perto do que a incerteza declarada sustenta; sem a palavra «Approximate» quando o Lucas assim
  decidir (Hamlin, vídeo 2).

## 4 · Câmera

- O vídeo viaja por dentro do mapa: mapa seguido de mapa é uma viagem (1,5–3 s, cúbica), nunca corte.
- **Mapa nunca parado** (03/10/2026): todo mapa que ficaria parado mais de 2 s ganha aproximação suave e contínua.
- 2D ou 3D pelo argumento da frase, não por padrão de canal. Norte para cima ou órbita: pendente do Lucas.

## 5 · Crédito e espaço

- Na tela, do primeiro ao último quadro de mapa: `© MapTiler © OpenStreetMap contributors`, 56 px, Inter 500, `--sec`
  sobre pílula `--rotulo`, de x 200 a x 1720, abaixo de y 1880, marcado como crédito de mapa só na própria linha.
- Na descrição: `Maps: © MapTiler © OpenStreetMap contributors (data under the Open Database License)` (forma publicada).
- Natural Earth, Landsat, mapa antigo em domínio público: nada na tela. Copernicus: a linha da licença.
- Margem 200/160 em todo quadro, sob a câmera; canto inferior direito 400 × 400 vazio; teto de 6 elementos.
