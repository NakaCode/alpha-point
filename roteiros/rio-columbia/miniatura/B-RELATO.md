# Miniatura B do vídeo 7 (`rio-columbia`): "EMPTY ON PURPOSE"

17/11/2026, para o Test & Compare, com o título "Why the U.S. Pays Canada to Keep Part of a Lake Empty". Feita por `base-B.py`, sem
rede, numa passada e três ajustes (o 3º a pedido da Sala). O conceito é o da pauta (`pautas/2026-11-09-video-7-rio-columbia.md` §8, miniatura 2), na receita com
lupa (`marca/embalagem.md` §3.1) e na família visual da A2 do Big Sur (o herói sem pílula, com brilho escuro).

## A composição

- **A base** é o Landsat de 14/04/2024 do Upper Arrow Lake no fundo do inverno: o lago estreito e escuro entre as Monashee e as Selkirk
  nevadas. O recorte é de 3200 × 1800 px da base (0,8 px do palco por px; 39 m de chão por px do palco).
- **O texto** fica no alto à esquerda: "EMPTY" em `--tinta` e "ON PURPOSE" em `--destaque`, Barlow Condensed 800 a 330 px, sem pílula,
  com brilho escuro atrás. A maiúscula tem 231 px (15 px no 168).
- **O anel** (224 px, traço de 38 px, `--destaque`, contorno escuro de 5 px) fica sobre o lago, embaixo à esquerda (x 1000, y 1190).
- **O cone** liga o anel à lupa pelas duas tangentes externas, calculadas (`--tinta`, 10 px, com sombra; preenchimento a 12 %). Nenhum
  pixel dele cai sobre as caixas do texto.
- **A lupa** (800 px por fora, borda de 20 px em `--destaque`) fica à direita, com o corte do lago:
  - a água no nível RESERVADO, em `--agua`, com a linha da superfície e o símbolo de nível (▽);
  - acima dela, **a faixa de cima, vazia**: a hachura a 45° em `--destaque` (o símbolo da s03) e o teto (o nível CHEIO) tracejado em
    `--destaque`;
  - o chão do vale e a face da barragem, no traço de engenheiro (`--tinta`, 13 px);
  - "NOT TO SCALE" em Inter, como no vídeo.
- **Sem número**, sem bandeira, sem torneira, sem vermelho contra azul (pauta §8 e §5).
- **O canto da duração** (320 × 320 embaixo à direita) está livre: alfa máximo das peças 0.

## A fonte e a licença de cada camada

| Camada | De onde vem | Licença e crédito |
|---|---|---|
| a base | `out/rio-columbia/_media/base/arrow-largo/landsat-arrow-fundo-2024-04-14.png`: Landsat 8 OLI, Collection 2 Level-2, `LC08_L2SP_044025_20240414_02_T1` e `LC08_L2SP_044026_20240414_02_T1`, pelo Microsoft Planetary Computer. O script confere o sha256 (`804dcbd6…`) e lê a janela do campo `recorte` do `.png.json` | domínio público (USGS). Sem crédito na miniatura; para a descrição, se quiser: "Landsat imagery courtesy of the U.S. Geological Survey" |
| o ponto do anel | lido na própria base: a água do Landsat conectada a uma semente no Upper Arrow, e nela o pixel mais longe da margem numa faixa de linhas (−117,91578, 50,36954; 1,6 km da margem) | o da base |
| a conferência do ponto | `out/rio-columbia/_media/geo/lago-arrow.json` (OSM). **Só confere**: o ponto cai dentro do polígono do Arrow Lakes Reservoir. Nada do OSM é desenhado | não há camada do OSM na imagem, então não há crédito do OSM |
| o corte do lago | a geometria do bloco "PEÇA 1 · O CORTE DO LAGO" de `out/rio-columbia/graphics/s03.html` (o desenho do canal a partir do diagrama do espaço reservado, L4). O script confere o texto de G e NIVEL no bloco e para se ele mudar | desenho do canal |
| as letras | `marca/fontes/` (Barlow Condensed 800 e Inter) | SIL OFL |
| as cores | `marca/tokens.css` | da marca |

Não entra MapTiler, satélite baixado nesta tarefa, nada desenhado à mão nem por IA, e o script não faz nenhum pedido de rede.

**O que mudou no corte, e por quê** (troca de símbolo, não de conteúdo; `embalagem.md` §3.1): os números de G e NIVEL são os da s03, só
escalados (0,40) e recortados pela lupa. O traço engrossou (13 px no palco, contra 2,4 px se fosse só escalado), a água ficou a 55 %
(35 % no vídeo), o ▽ cresceu 1,7×, o teto tracejado passou de `--tinta` a `--destaque`, e o chão e a barragem ganharam um tom (`--tinta`
a 9 % sobre `--fundo`). Tudo para ler no 320.

## Onde foge da receita, e por quê

- **A lupa tem 800 px, não 640:** a lupa maior deixa o corte maior (a faixa com 72 px no palco, 9 px no 320) sem perder de vista a
  barragem e a ponta da água. A 640 com a mesma escala, as duas ficariam fora do círculo. Não foi renderizada a 640.
- **O herói tem 330 px, não 300**, como as do Big Sur (340 e 415).
- **A base não é a da A.** A pauta pede "o mesmo satélite" da A. Quando a B foi feita, a base da bacia não existia no disco. Depois
  veio o Blue Marble da A (`bluemarble-bacia-relevo.png`), mas ele tem 650 m por px, e nele o Arrow é um fio de 3 px. A B ficou com a
  base do Arrow, que mostra o próprio lago no fundo.
- **A luminância média final é 111** (121 antes do texto e das peças): a neve deixa a base clara, e o contraste do texto vem do brilho
  escuro (luma 23 a 25 em volta das letras).

## Os ajustes

1. **Na 1ª passada**, a lupa (760 px) mostrava só o pedaço da barragem, como um tanque, e o cone encostava no "E" de PURPOSE. **Ajuste 1:**
   lupa de 840 px, o corte mais aberto, e o chão do vale num tom acima do fundo.
2. **No ajuste 1**, o cone cruzava o texto (956 px sobre as caixas). **Ajuste 2:** o anel foi para x 1000 (o recorte da base acompanhou),
   a lupa para 800 px em (2070, 740), e o corte para 0,40. O cone saiu do texto (0 px) e o canto continuou livre.
3. **A pedido da Sala** (17/11), o centro do corte na lupa passou de x 2150 a 2250: o coroamento e a face de jusante da barragem, que
   ficavam sob a borda, entraram na lupa. O resto não mudou (o cone segue fora do texto, e o canto, livre).

## O que vi nos três tamanhos

- **1280:**
  - "EMPTY ON PURPOSE" lê;
  - o lago escuro desce pelo vale e passa dentro do anel;
  - na lupa, a faixa hachurada com o teto tracejado, a água abaixo, o chão e a barragem leem, e "NOT TO SCALE" lê;
  - o canto da duração está livre.
- **320:**
  - o texto lê inteiro;
  - o anel lê sobre o lago;
  - na lupa, a faixa laranja fina sobre a cunha azul lê. "NOT TO SCALE" vira mancha.
- **168:**
  - "EMPTY ON PURPOSE" lê inteiro (a maiúscula tem 15 px);
  - o anel (17 px) lê;
  - a lupa vira um disco de 52 px com uma faixa laranja de 5 px sobre o azul: lê como "um corte com uma camada marcada", não mais que isso.

## O que ficou fraco

- **No 168, a lupa diz pouco.** O "vazio" depende do texto. Foi o que o teste dos leitores previu ("o corte técnico some na TV", Dale).
- **"ON PURPOSE" repete o "empty" do título** e pode ler como manobra suspeita (Arjun, no teste). No teste, a 2 teve 6,0 contra 7,0 da 1.
- **Sem contexto de país:** a base do Arrow não mostra a fronteira nem os EUA. O título dá isso.
- **A hachura é o símbolo do vídeo para o espaço reservado**, mas, a frio, uma faixa hachurada pode ler como "cheia de algo". O teto
  tracejado e a água logo abaixo dizem "vazia".
