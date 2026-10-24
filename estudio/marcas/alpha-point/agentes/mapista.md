# ROUPA ALPHA POINT — mapista

> Só o que é deste canal. Base: `identidade.md` («Base de mapa», «A abertura e o mapa»), na pasta desta roupa (um nível
> acima de `agentes/`). Destilada de `marca/agentes/mapista.md`, com o tratamento do satélite de `marca/identidade.md` §6
> (09/10/2026), em dia com a marca de 24/10/2026. Caminho `marca/…`, `out/…` ou `canal.json` aqui é procedência no
> repositório do canal, não arquivo seu. Onde a `knowledge/ROUPA-CENA.md` ou o prompt da estação divergem desta roupa no
> gosto, vale esta roupa (`identidade.md`, «O que vence»).

## 1 · A base

- **MapTiler satellite-v2 + terrain-rgb-v2** (`canal.json` › `mapa.perfil`; Lucas, 26/09/2026: «será o maptiler»),
  conta e plano Flex do Lucas, que cobrem vídeo só até 100 mil inscritos. Trocar a base é decisão do Lucas; outra base
  só entra com a licença lida e registrada em `marca/identidade.md` §6. Esri e Mapbox não.
- Bases aceitas além dela (27/09/2026): Google Earth Timelapse e Studio (com o crédito do Google a cena inteira, sem
  repintar), Copernicus DEM, USGS 3DEP, GEBCO, ETOPO, Worldview/GIBS, NAIP, GOES, Himawari.
- **Relevo 3D só com o ok do Lucas do vídeo.** No vídeo 3, «Plano, sem relevo» (15/10/2026); no vídeo 4, «Sim e pode
  usar relevo quando necessário» (21/10/2026), onde o relevo explica a cordilheira, a encosta ou o vale, nunca enfeite.
  **O vídeo 5 pede um ok próprio**: até a Sala escrevê-lo aqui, mapa plano, mesmo que o prompt da estação fale em
  terreno DEM real. Onde a frase argumenta altura, proponha o relevo no relato.
- A cena liga, nesta ordem, `../_media/marca/tokens.css` (a cópia da marca que o motor semeia na obra) e
  `../_media/marca/motor.css` (o crédito a 60 px por cima), e escreve só `var(--…)`.

## 2 · O tratamento e as cores

- **Satélite, tratamento C** (Lucas, 09/10/2026: «C, vivo»): `raster-brightness-max 0.92`, `raster-saturation 0`,
  `raster-contrast 0.25`. Sem véu, scrim ou vinheta por cima. O mar aberto fica quase preto; a água do porto com emendas
  claras leva a camada de água do OSM em `--agua-base` (`#00050c`; 08 e 09/10/2026).
- **A água é azul, e corre** (Lucas, 23/10/2026: «Nos próximos toda água deve ser azul e com fluxo»; do vídeo 5 em
  diante): rio, lago, represa, canal, túnel e cano saem em `--agua` (`#AFD8F6`) em todo mapa, mesmo dentro do território
  protagonista ou da contraparte; é cor de TIPO, não de lado. A água que corre mostra a correnteza: um trecho mais claro
  da própria linha, em `--agua-luz` (`#EAF5FD`), desce no sentido da água e se repete, mais lento no rio baixo e mais
  rápido no cheio — luz na linha, não partícula solta. Lago e represa ficam parados; o que muda neles é o nível. Nunca
  encostada em território de lavanda (`--contexto-3`, 9,4 em deuteranopia). O mar não é «água» desta regra: segue a cena.
  O azul da água conta nas 3 matizes.
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

## 3 · A região falada, sempre demarcada (Lucas, 24/10/2026; do vídeo 5 em diante)

- Quando a fala nomeia ou percorre uma região (uma costa, um deserto, uma bacia, um vale, uma faixa entre duas cidades),
  o mapa a demarca **enquanto ela é dita**: contorno ou área acesa da região, ou, sem polígono lido, o trecho marcado
  entre os pontos que a fala dá (de Piura a Tacna, a costa entre os dois). O espectador não deduz a região só pelo nome.
- A demarcação sai de geometria lida, com procedência (a do `pesquisa-geo`), nunca de um polígono desenhado à mão como
  se fosse o oficial. Sem fonte para o limite, marque o que a fala afirma (os pontos, o trecho, a direção) e declare.

## 4 · Rótulos

- Pílula `--rotulo`, Inter 700, 128 px (teto 160), até 3 palavras ou 4 se nome próprio. Nome de lugar nunca é herói.
- País e região em CAIXA ALTA `+0.04em`; cidade, rio, estreito em caixa normal. AP Stylebook; imperial primeiro.
- **Nome dentro do território de contexto:** CAIXA ALTA, Inter 700, 104–128 px, letra `--tinta` com contorno de 14 px
  em `--rotulo` por fora (`--nome-territorio-*`).
- **Nenhum rótulo sobre uma linha do mapa:** a linha não se move; o rótulo muda de lugar.
- **O rótulo de uma linha só entra com a linha.**
- **A fala citada sobre o mapa leva `data-qc-papel="heroi"`** (Sala, 22/10/2026): piso 260, alvo 280; marcada como
  `rotulo`, passaria a 104 sem provar nada. Continua bloco (até 3 vivos) e não conta no «um herói por cena».
- **País: só o nome escrito, sem bandeira** (27/09/2026), também a dos EUA. Exceção pontual só se o Lucas a der.
- **Nome de lugar com foto** (03/10/2026): quando há foto aprovada do lugar, uma miniatura dela junto do nome, sem
  cobrir o território.
- **Rota que nunca foi construída:** tracejada, a partir do ponto real, com `Approximate route` a 84 px todo o tempo.
- **Contorno de mapa antigo em domínio público** (07/10/2026): entra como geometria, sem crédito na tela, e a câmera
  nunca chega mais perto do que a incerteza declarada sustenta; sem a palavra «Approximate» quando o Lucas assim
  decidir (Hamlin, vídeo 2).

## 5 · Câmera e animação

- O vídeo viaja por dentro do mapa: mapa seguido de mapa é uma viagem (1,5–3 s, cúbica), nunca corte. **No gancho, as
  fusões de cena (`fundir`) não se aplicam** (do vídeo 5 em diante): até a vinheta, nenhuma cena passa de ~8 s, e a
  imagem troca a cada 3–6 s (outra vista, outra linguagem).
- **O mapa do gancho entra voando** do continente (ou do globo) até o lugar, com a região falada demarcada e os números
  da fala animados na tela (contagem, barra, área que se acende), nunca um número parado; o relevo, só com o ok do vídeo.
  O mapa nunca abre o vídeo: os primeiros 2–3 s são a imagem real do lugar (`identidade.md`, «A abertura e o mapa»).
- **Mapa nunca parado** (03/10/2026): todo mapa que ficaria parado mais de 2 s ganha aproximação suave e contínua. A
  câmera não dá tranco: voo, recuo ou troca de mapa rápido ou brusco demais é achado do espectador (24/10/2026).
- **Sobre o mapa, mais vezes** (Lucas, 24/10/2026): a animação desenhada por cima do mapa, presa ao lugar que a fala
  nomeia (no Peru, o caminhão-pipa da s44 e a correnteza da s37), é o jeito preferido de pôr ilustração em fala de
  lugar. Ela segue o traço de engenheiro e a física da roupa do `editor-de-arte` (§4) e soma ao mapa: não o tira da tela.
- 2D ou 3D pelo argumento da frase, não por padrão de canal. Norte para cima ou órbita: pendente do Lucas.

## 6 · Crédito e espaço

- Na tela, do primeiro ao último quadro de mapa: `© MapTiler © OpenStreetMap contributors`, **60 px**
  (`var(--fs-credito)`), Inter 500, `--sec` sobre pílula `--rotulo`, de x 200 a x 1720, abaixo de y 1880, marcado
  `data-qc-papel="credito"`. O piso do motor é 60 px para todo crédito, sem a exceção do crédito de mapa que a pré-v1
  tinha, e o Lucas ficou com os 60 (24/10/2026: «60 px (Recomendado)»).
- Na descrição: `Maps: © MapTiler © OpenStreetMap contributors (data under the Open Database License)` (forma publicada).
- Natural Earth, Landsat, mapa antigo em domínio público: nada na tela. Copernicus: a linha da licença.
- Margem 200/160 em todo quadro, sob a câmera; canto inferior direito 400 × 400 vazio; teto de 6 elementos.
