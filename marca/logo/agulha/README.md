# O logo do Alpha Point: a agulha

A decisão e as regras ficam em `marca/identidade.md` §8. Aqui ficam os arquivos.

| arquivo | onde vai | tamanho |
|---|---|---|
| `avatar.png` | YouTube Studio › Personalização › Branding › Foto. Ele a mostra num círculo de 98 px. | 800 × 800 |
| `banner.png` | YouTube Studio › Personalização › Branding › Imagem do banner. A área segura é de 1544 × 423, no centro. Desde 09/10/2026, sobre o relevo topográfico de `banner-fundo-topografico.jpg`. | 2560 × 1440 |
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
- **O fundo do banner** (Lucas, 09/10/2026: "a logo eu gostei da nossa, mas o banner quero mudar um pouco") é o relevo
  topográfico que ele gerou numa IA de imagem, a partir do prompt A do Claude (curvas de nível finas em azul sobre marinho, o
  miolo livre, sem laranja e sem texto): `banner-fundo-topografico.jpg`, 2000 × 1116, sha256 `e1e0379e…`, guardado como
  chegou. O `banner.html` o estica para cobrir o quadro (corta uns 10 px de cada lado). O marinho dele (#151A30, medido no
  miolo) é um pouco mais azul que o `--fundo` (#0E1726). A agulha e as letras continuam desenho próprio, nas fontes da marca.
