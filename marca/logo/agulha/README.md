# O logo do Alpha Point: a agulha

A decisão e as regras ficam em `marca/identidade.md` §8. Aqui ficam os arquivos.

| arquivo | onde vai | tamanho |
|---|---|---|
| `avatar.png` | YouTube Studio › Personalização › Branding › Foto. Ele a mostra num círculo de 98 px. | 800 × 800 |
| `banner.png` | YouTube Studio › Personalização › Branding › Imagem do banner. A área segura é de 1544 × 423, no centro. Desde 19/11/2026, o mundo em pontos (`banner.html`, com as peças em `banner-pontos/`). | 2560 × 1440 |
| `banner-topografico.png` e `banner-topografico.html` | o banner de 09/10/2026, sobre o relevo topográfico de `banner-fundo-topografico.jpg`, guardado como estava | 2560 × 1440 |
| `banner-liso.png` e `banner-liso.html` | o banner de 01/10/2026, de fundo liso `--fundo`, guardado como estava | 2560 × 1440 |
| `marca-dagua.png` | YouTube Studio › Personalização › Branding › Marca d'água do vídeo. Fundo transparente. | 300 × 300 |
| `simbolo.svg` | o símbolo nas duas cores, para a cena, a miniatura e a chamada | vetor |
| `simbolo-tinta.svg` e `simbolo-tinta-escura.svg` | o símbolo em uma cor, sobre escuro e sobre papel | vetor |

As medidas do YouTube vêm da ajuda oficial, lida em 01/10/2026: https://support.google.com/youtube/answer/10456525.

- **Para refazer:**
  - o avatar e o banner: `node marca/logo/_render.mjs marca/logo/agulha/<avatar|banner>.html <largura> <altura> <saida.png>`,
    com o Chrome desta máquina. Em 01/10/2026, o render daqui saiu idêntico, pixel a pixel, aos PNGs desta pasta;
  - a marca d'água: sai do `marca-dagua.svg` pelo `sharp` (o `_render.mjs` não guarda a transparência).
- **A geometria:** no `simbolo.svg` (dois polígonos). Os scripts que a calcularam ficam na proposta,
  `marca/logo/propostas-2/e-agulha/`, só nesta máquina.
- **As fontes do banner** (Barlow Condensed 800 e Inter) vêm de `marca/fontes/`, com licença SIL OFL 1.1.
- **O símbolo** é desenho próprio, sem letra de fonte, imagem de fora nem IA.
- **O banner de pontos** (desde 19/11/2026; a decisão está em `marca/identidade.md` §8). É o mundo inteiro numa grade de
  pontos, com o Pacífico atrás do nome e as Américas à direita. Os lugares dos vídeos publicados ficam acesos. Tudo é
  desenhado no `banner.html`: nenhuma imagem de fora e nenhuma IA.
  - **A terra** está em `banner-pontos/terra-plano.js`: 5.469 pontos, numa grade de 1,6875° (12 px no banner), sha256
    `ae560ea3…`. Ela vem do Natural Earth 1:110m (os países, domínio público), lido do acervo da pré-v1
    (`C:/projetos/regie-v1/acervo/geojson/ne110m-admin0-countries.json`, só leitura). Para refazer:
    `node marca/logo/agulha/banner-pontos/terra-pontos.mjs grade 1.6875 -340 20 -58 85 marca/logo/agulha/banner-pontos/terra-plano.js TERRA_PLANO`.
    Em 19/11/2026, esse comando refez o arquivo byte a byte.
  - **A agulha, o nome e a frase** saem de `banner-pontos/comum.js`, a função `marca`. Ela carrega as duas fontes com
    `document.fonts.load` antes de medir o texto: a medida feita antes da carga tirava o nome do centro (a skill
    `editar-cena-html`, L2).
  - **O grão** usa uma semente fixa, e o render sai igual a cada vez.
  - **Os lugares acesos** estão na lista `LUGARES` do `comum.js`, um por vídeo publicado. O Juneau, arquivado, e o Cassino,
    parado, ficam fora. Para acender o lugar de um vídeo novo, ele entra na lista e o `banner.png` se renderiza de novo.
  - **O render** sai com o mesmo `_render.mjs`, a 2560 × 1440. Em 19/11/2026, o `banner.png` daqui saiu igual à proposta que o
    Lucas escolheu (`marca/logo/propostas-3-banner/f-mapa.png`, fora do git): só 2 dos 3,7 milhões de pixels diferem, e por 3
    de 255 no máximo.
- **O fundo do banner de 09/10/2026** (guardado em `banner-topografico.*`; Lucas, 09/10/2026: "a logo eu gostei da nossa, mas
  o banner quero mudar um pouco") é o relevo topográfico que ele gerou numa IA de imagem, a partir do prompt A do Claude
  (curvas de nível finas em azul sobre marinho, o miolo livre, sem laranja e sem texto): `banner-fundo-topografico.jpg`,
  2000 × 1116, sha256 `e1e0379e…`, guardado como chegou. O `banner-topografico.html` o estica para cobrir o quadro (corta uns
  10 px de cada lado). O marinho dele (#151A30, medido no miolo) é um pouco mais azul que o `--fundo` (#0E1726). A agulha e as
  letras são desenho próprio, nas fontes da marca.
