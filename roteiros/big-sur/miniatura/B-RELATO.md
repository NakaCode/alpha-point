# Miniatura B do vídeo 5 (`big-sur`): "ROAD KEEPS FALLING"

06/11/2026, na rodada 2, a pedido do Lucas. Feita por `base-B.py`, sem rede, numa passada e um ajuste. O conceito é o da pauta
(`pautas/2026-11-01-video-5-big-sur.md` §8, item 2), na família visual da A2.

## A composição

- **A foto** é a aérea do USGS do deslizamento de Mud Creek, de 27/05/2017, em tela cheia: o leque de terra desce a serra até o mar e
  corta a estrada, que se vê dos dois lados dele.
  - **Por que tela cheia, e não a lupa:** uma lupa de 640 px (embalagem §3.1) vira um círculo de 42 px no 168, onde o leque some. Em
    tela cheia, o leque é a forma que se lê no 168.
- **O texto** fica no alto à esquerda, no estilo do herói da A2: "ROAD KEEPS" em `--tinta` e "FALLING" em `--destaque`.
  - A letra é Barlow Condensed 800 a 340 px, sem pílula, com brilho escuro atrás. A maiúscula tem 244 px (16 px no 168).
  - O texto cobre a parte de cima da cicatriz. A estrada, o leque e o mar ficam livres.
- **A pílula "HIGHWAY 1"** (`--tinta`, letra `--tinta-escura`, como as cidades da A2) fica embaixo à esquerda, sobre o mar.
  - Ela manda uma seta grossa (507 px) ao ponto em que a estrada some sob a terra, do lado esquerdo do leque.
  - Esse ponto foi lido na foto de 1500 × 992 (x 455, y 542).
- **Um selo** pequeno no alto à direita, "MUD CREEK · MAY 2017" (Inter 700, 56 px, pílula `--rotulo`), dá o lugar e a data da foto.
  - **O porquê:** a miniatura fala no presente, e o veredito da s09 sobre a mesma foto pediu o aviso do ano.
  - O lugar não é mais específico que o `lugar_na_origem` ("Mud Creek landslide").
  - Se o Lucas preferir sem, o selo sai sem mexer no resto.
- **Sem mapa, sem anel e sem a Highway 1 do OSM.**

## A foto: procedência e veredito

- **A procedência.** O script confere o sha256 da foto contra o `_PROCEDENCIA.json` da pasta (`0a38ca1b…`).
- **O veredito.** O script exige um `aprovado` para esse sha256 no `conferencia-midia.json`. Há três: s26, s27 e s09; o da s09 tem
  `aviso_de_ano: true`.
- **A licença.** É domínio público (USGS, "Sources/Usage: Public Domain."), e `exige_credito` é falso.
- **O tratamento.** Nenhuma outra foto entrou. O recorte é 16:9 (a largura inteira, da linha 40 à 884 da foto), ampliado 1,71×, com
  nitidez leve, contraste 1,1 e vinheta de 50 %. A luminância média final é 119.
- **Fora do que o conferente julgou.** A miniatura não é uma cena, e o veredito vale para a cena da frase que ele julgou. O uso aqui é
  o da Sala, como o da A com a base Landsat.

## O ajuste

- Na primeira versão, a seta era curta (309 px) e parava 70 px abaixo da estrada.
- Ela passou a encostar no fim da estrada (32 px abaixo) e ganhou uma curva em C a partir da pílula.

## O que vi nos três tamanhos

- **1280:**
  - o texto, o leque, a estrada dos dois lados e a seta leem;
  - o selo lê;
  - o canto da duração está livre (alfa 0).
- **320:**
  - o texto e o leque leem;
  - a estrada aparece como um fio claro;
  - "HIGHWAY 1" lê;
  - o selo não lê.
- **168:**
  - "ROAD KEEPS FALLING" lê inteiro;
  - o leque castanho descendo ao mar verde-azulado lê como deslizamento;
  - a estrada, a seta e a pílula ficam pequenas, e o selo some.

## O que ficou fraco

- **No 168, a estrada não se vê.** Ali o "ROAD" depende do texto.
- **A foto é de um deslizamento só, o de 2017**, e o "KEEPS" pede repetição. O vídeo paga com Paul's Slide, Regent's Slide e os
  fechamentos de 2026, mas a imagem não mostra isso.
- **O texto cobre a parte de cima da cicatriz**, e a cabeça da seta cobre o último trecho visível da estrada à esquerda.
- **A B é mais clara que a A2** (luminância 119 contra 107), e as duas não parecem da mesma série à primeira vista.
- **"HIGHWAY 1" dá uma pista** que o título não dá. Não é o nome escondido (Big Sur), mas encosta no assunto da estrada, que a pauta
  quer como um dos três porquês, e não o tema.
- **Não houve a banca de quatro lentes nem leitores a frio.**

## Os arquivos

- **Aqui:** `base-B.py`, `miniatura-B-2560.jpg` (1,36 MB) e `miniatura-B-1280.jpg` (618 KB).
- **Em `out/big-sur/_tmp/miniatura/`:**
  - as prévias `B-previa-1280.png`, `B-previa-320.png` e `B-previa-168.png`;
  - `B-ver.png`, com os três tamanhos sobre o #0f0f0f;
  - `B-pontos.json`, com as medidas e os vereditos.
