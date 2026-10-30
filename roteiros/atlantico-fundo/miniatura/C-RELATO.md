# Miniatura C do vídeo 4 (`atlantico-fundo`): "NOT THE MARIANA TRENCH"

30/10/2026. O pedido do Lucas, no chat da Sala: "Eu quero uma terceira que desperte curiosidade comparando com a da Marianas 'Não é a
das marianas', algo assim". Feita por `base-C.py`, sem rede, em três passadas (a primeira e duas rodadas de ajuste).

## A composição: a 2, o mundo pela GEBCO

O mundo em Mercator, com o Pacífico no meio, como a s04 do vídeo (a vista do mundo que o Lucas mandou manter em 29/10):
- **à esquerda**, a Fossa das Marianas em tom neutro (o traço escuro da própria base, sem cor), riscada no Challenger Deep por um X em
  `--tensao`, com casco escuro de 10 px;
- **à direita**, do outro lado do Pacífico e das Américas, o ponto mais fundo do Atlântico no anel da marca (224 px, traço de 38 px em
  `--destaque`, contorno escuro e sombra; embalagem §3);
- **a seta** (`--tinta`, 34 px, pontas redondas, sombra) sai do X, passa por baixo, sobre o Pacífico aberto, e cai no anel;
- **no alto**, a faixa-herói numa pílula `--rotulo`.

Por que a 2, e não a 1:
- **É a única das três que mostra a comparação.** O pedido é "não é a das Marianas": o X, a seta e o anel dizem isso sem ler.
  O close do Atlântico (a 1) só põe o texto ao lado de um ponto, e o espectador não vê de onde vem a comparação.
- **Fica longe da A e da B.** A A já é Porto Rico de cima, com a fossa e o ponto; a 1 seria quase ela. A B é o corte de lado. A C é a
  única em escala de mundo.
- **O vídeo paga.** A primeira fala diz "But that's the Pacific, about 9,500 miles away", e a s04 mostra este mesmo mundo, com o arco
  das Marianas ao anel.

**A conta do pedido estava errada: são 150,1° de longitude, não ~137°.** O caminho curto entre os dois pontos é pelo Pacífico
(150,102°; pelo Atlântico seriam 209,898°). Ainda assim cabe legível: a 11,86 px por grau, os dois ficam a 1.783 px um do outro no palco.

**O quadro** vai de 112,23°E a 31,89°W e de 62,58°N a 37,58°S. Nele aparecem a Ásia oriental e o norte da Austrália, o Pacífico inteiro,
as Américas e uma faixa do Atlântico a leste do anel.

## O texto

- **"NOT THE MARIANA TRENCH"**, numa linha só: Barlow Condensed 800, 240 px, caixa alta.
- **NOT em `--destaque`**, que é a virada, como o "PERPETUITY" da Zona e a receita com lupa (§3.1). O resto vai em `--tinta`.
- **O contraste sobre a pílula** é de 15,8:1 na `--tinta` e de 8,7:1 no `--destaque`.
- **A frase longa ficou.** A 168×94, a altura da maiúscula dá 11,3 px, e a frase lê inteira nas duas vistas, a real e a ampliada ×4
  sobre o fundo #0f0f0f do feed. Por isso não houve variante curta.
- **Não repete nenhum dos dois títulos** e não nomeia Porto Rico nem a fossa dele. "MARIANA" é o que o espectador já conhece
  (embalagem §2, "O título não entrega a resposta").

## A base e a licença

- **A base** é `out/atlantico-fundo/_media/base/gebco-mundo-relevo.jpg`: o WMS oficial da GEBCO (camada GEBCO_LATEST), Web Mercator
  ±180°, 4096×4096, sha256 `5f769efc…` (o `.json` ao lado tem o pedido).
- **O que se fez com ela:**
  - reamostrada direto de Mercator para Mercator (uma transformação afim, a 1,04×), com o x dando a volta no antimeridiano;
  - tratada com saturação de 0,50, brilho de 0,80, contraste de 1,08 e a vinheta de 35 %;
  - a luminância média final dá 94,6/255. É mais clara que a do vídeo (a s04 usa brilho de 0,42), pela regra "Base mais clara" da §3.
- **A licença** é domínio público, pelos termos da GEBCO, com a fonte reconhecida. Pelo pedido da Sala, o crédito vai na descrição, não
  na miniatura. O texto pedido pelo WMS: "Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid
  (doi:10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)". Nada do OpenStreetMap, nada da MapTiler.
- **As fontes** vêm de `marca/fontes/` (Barlow Condensed, OFL).

## As coordenadas e de onde vêm

| Peça | Coordenada | Fonte | No palco (2560×1440) |
|---|---|---|---|
| o anel | 19,712°N, 67,311°W | `_media/geo/ponto-mais-fundo-atlantico.json` (F10; S01, Tabela 1; o anel do vídeo inteiro, 8.378 ± 5 m) | (2140,0; 720,0) |
| o X | 11,369°N, 142,587°E | `_media/geo/challenger-deep.json` (S01, Tabela 1; o ponto da Five Deeps, 10.924 ± 15 m) | (360,0; 822,8) |
| conferência | a isóbata de 7.000 m das Marianas | `_media/geo/fossa-marianas.json` (GEBCO_2026) | não se pinta |
| conferência | Porto Rico | `_media/geo/porto-rico.json` (Census 1:500.000) | não se pinta |

As posições saem da fórmula de Mercator (`palco()` no script). Nada foi posto a olho.

## O que conferi

**A geografia no quadro** (`C-pontos.json` e as provas em `_ver/prova-*.png`, que mostram a base crua com os contornos em magenta).
- **Porto Rico.** O contorno do Census cai sobre a ilha da base:
  - a luminância é de 182 dentro do contorno contra 135 na faixa de 7 px em volta;
  - o R−B é de −18 dentro contra −104 fora (a terra é cinza, e o mar, azul);
  - a faixa em volta é 100 % mar.
  - A fração de pixels com R>B dentro do contorno dá só 0,35, porque a GEBCO pinta a planície da ilha em cinza-esverdeado e a ilha tem
    162 px no palco. A prova visual (`prova-atlantico.png`) mostra o contorno em cima da ilha.
- **O anel cai no mar, dentro do traço escuro da fossa ao norte de Porto Rico.** O ponto tem cor crua (28, 35, 70) e luminância de 36,
  contra 98 na vizinhança de 41 px.
- **O Challenger Deep cai dentro da isóbata de 7.000 m**, na ponta sul do arco, no trecho mais escuro da base (luminância de 37 dentro da
  isóbata, contra 95 em volta).
- **A distância.** Pela geodésica de Vincenty no WGS84, do anel ao Challenger são 15.269,6 km, ou 9.488 mi. Bate com o dossiê (15.270 km,
  9.488 mi) e com o "about 9,500 miles" da fala. Nenhum número vai à miniatura: brigaria com o "83 Miles" do título 2 (§3.1).

**A leitura a 168×94.** Olhei a `miniatura-C-168.png` no tamanho real e ampliada ×4, sobre o #0f0f0f do feed
(`_ver/ver-168-feed-x4.png`). Leem:
- a frase inteira;
- o X vermelho, com 11 px;
- o anel laranja, com 14,7 px;
- a seta branca;
- o contorno das Américas e da Austrália.

**O canto da duração.** Nos 320×320 de baixo à direita, a camada das peças tem alfa máximo 0: só a base (o interior do Brasil). A seta
chega até x = 2032 e y = 1188, fora do canto.

**Os arquivos.** O JPEG de 1280 tem 461 KB (qualidade 95, abaixo dos 2 MB). Pedidos de rede: 0.

**As rodadas:**
- **r0:** o X no meio da caixa da isóbata, a 192 px; a isóbata em `--tinta` a 55 %; o ponto branco no anel. O X cobria o crescente e
  pesava tanto quanto o anel.
- **r1:** o X no Challenger Deep, a 168 px; a isóbata a 70 %. As partes de cima do arco (são 4 pedaços soltos) saíram como uma
  pedrinha cinza perdida acima do X.
- **r2, a entregue:** a isóbata não se pinta, e o ponto branco sai. O ponto lia como um "olho" sobre a ilha, e o anel do vídeo não tem
  ponto.
- As cópias da r0 e da r1 estão em `_ver/`.

## O que ficou fraco

- **O texto é menor que o das outras miniaturas.** Tem 240 px, contra os 300 da receita e da A2 do Peru. Os 22 caracteres só cabem numa
  linha assim. Em duas linhas a 300 px, o bloco cobriria a América do Norte e metade do Pacífico. Lê a 168, mas bate menos que o "AND THE
  WATER?".
- **O X e o anel têm matizes vizinhas** (`--tensao` e `--destaque`). A forma e o casco escuro os separam, mas não medi com o
  `contraste.mjs` para daltonismo. O vermelho segue a regra do pedido: só no risco, e sem encostar no azul.
- **Na escala de mundo, o anel abraça uns 19°**, com o leste de Hispaniola e Porto Rico dentro dele. Ele marca a região, não o ponto
  exato. Quem reconhecer a ilha pode achar que o ponto é ela.
- **As Marianas não têm desenho nem rótulo próprio**, só o traço da base e o X. Quem não conhece o Pacífico liga o X às Marianas pelo
  texto.
- **A seta vai do X ao anel, não do texto ao anel** (a variante da receita com pílula). Ela lê como "não é ali, é aqui", mas alguém pode
  lê-la como rota. Ela também cruza o Panamá e a Colômbia para chegar ao anel.
- **A faixa esconde a América do Norte acima de ~48°N** (o Canadá e o Alasca). O contorno das Américas continua legível.
- **Não houve a banca de quatro lentes** da §3 ("Conferência antes de mostrar ao dono"). O que está aqui é só o meu olhar.

## Os arquivos (em `out/atlantico-fundo/_tmp/miniatura/C/`)

- `base-C.py`: o script.
- As miniaturas: `miniatura-C-2560.png`, `miniatura-C-1280.jpg`, `miniatura-C-320.png` e `miniatura-C-168.png`.
- `C-pontos.json`: as conferências.
- `_ver/`, só para olhar:
  - as ampliações, os zooms do anel e do X, e as provas da geografia;
  - as cópias da r0 e da r1;
  - os scripts de prévia das bases e de medida do texto.
