# Juneau: a revisão do Lucas no Premiere (01/10/2026)

O Lucas abriu o XML (`Juneau.xml` do pacote `C:\Juneau-Premiere`, commit cbb9168) no outro computador e foi mandando
notas por cena, com print do Premiere. Cada nota fica aqui com a mensagem literal, o diagnóstico pelo código da cena e
a proposta. Nada se conserta antes de ele terminar a revisão e decidir a lista: o conserto vai em uma rodada só, pela
conversa do `editor-de-arte` (e do `mapista`, se tocar cena de mapa), depois render, portões, `qc-visual`, XML e pacote.

## s01 (0,000–13,600 do master)

- **O Lucas:** "São muitas informações na tela (s01) e os créditos estão muito grandes" (print em 00:00:05:23).
- **O que se vê nesse quadro:** a data `AUG. 27, 1974` (0,2→6,567), o carimbo YES, o placar `57% · 46,659 to 35,683`
  (3,967→6,567), o rótulo `Juneau, Alaska`, o aviso `Photo from circa 1987` e duas linhas de crédito numa pílula (a
  da foto e a da fonte do placar). Seis blocos de leitura ao mesmo tempo, mais o crédito. O cabeçalho da cena conta 4
  elementos porque a régua da marca não conta crédito nem aviso do ano (identidade §4.2 e §6).
- **O tamanho do crédito:** 76 px no 4K (38 px no 1080p do Premiere), o alvo da marca (identidade §4.1, tokens
  `--fs-credito`). O piso do ofício é 72 px e não desce pela marca (`scripts/lib/marca-tokens.mjs`, "Descer, não");
  o crédito de mapa declarado (`data-qc-credito="mapa"`) tem piso próprio de 40 px. Abaixo de 72, o `qc-tamanho`
  reprova toda cena com crédito: só passa com a exceção do Lucas registrada (`qc/_excecoes-portao.json`).

## s02 (13,600–18,133)

- **O Lucas:** "s02 aparece uma marcação que não marca texto algum".
- **Por quê:** foi de propósito, e não funciona na tela. A cédula termina em `total $`, e o número fica em branco
  porque a voz só o diz em s23 (a regra "nenhum número antes da voz"). Em "price" (4,0 s), o grifo sublinha a lacuna
  vazia. Sem nada que mostre que ali é um campo em branco, o grifo parece um erro.

## s05 (34,667–46,400)

- **O Lucas:** "s05 não entendi muito bem o conceito dessa cena" e "Ao final ela é complementada com uma carta sobre a
  mesa, mas o inicio fica muito vago".
- **O que a cena faz:** nos primeiros 6 s ("One of them, Harris, chaired a committee pushing the move. He made the
  case in the official voter pamphlet of 1982."), só o card de nome (FRANK W. HARRIS, sem retrato, porque não há
  retrato em fonte autorizada) e um satélite do sudeste do Alasca, num canto, sem nome nenhum, com um anel pequeno
  em Juneau. O mapa não diz que lugar é, e nada mostra "a mudança" nem o "folheto oficial". O cartão da fala só
  pousa em 6,7 s.

## s23 (224,967–245,033)

- **O Lucas:** "s23 tem o campo para ser preenchido e logo em seguida aparece o número grande. Acredito que não precise
  desse campo antes, deixe o número só aparecer" (print da folha em b1).
- **O que a cena faz:** em b1 (0–7,567), a folha da cédula com o literal da pergunta, o número do literal em branco
  (`(estimated to total            )`, o "$2,843,147,000" fora) e, abaixo, a linha do preço vazia: o `$` e um traço
  laranja de 1.180 px. Em "about" (9,767), o herói ABOUT $2.8 BILLION pousa nessa linha, o `$` e o traço saem, e o
  número do literal entra.
- **O pedido:** tirar a linha do preço vazia; o número grande só aparece, em "about".
- **Junto com s02:** é o mesmo recurso (o campo em branco esperando o número da voz), e nas duas o Lucas o leu como
  sobra. O vão no literal da pergunta (`total            )`) é o mesmo campo em branco, dentro do texto.

## s40 (418,433–431,767)

- **O Lucas:** "o final da s40 fica muito tempo sem "nada", apenas com o fundo da marca".
- **O que a cena faz:** em b3, a folha do HB 3 entra na gaveta desenhada de 8,9 a 10,5 s e some. De 10,5 ao corte
  (13,334), quase 3 s, sobra a mesa vazia com o contorno da gaveta e a etiqueta AS OF SEPTEMBER 2026, enquanto a voz
  diz "the bill hadn't left its first committee" (10,967–12,597) e depois respira (12,6–13,3).
- **Ideia:** a folha não some. Entra devagar, até "committee", e fica com o topo para fora da gaveta (o cabeçalho
  HOUSE BILL NO. 3 · 2025 à vista): o projeto parado na gaveta, e não uma mesa vazia.

## s56 (578,133–584,933)

- **O Lucas:** "s56", com o print do b1 (a foto da Assembleia como uma faixa fina sobre a mesa). Ele não disse o
  quê; a leitura do Claude central, a confirmar com ele: a foto virou uma tira estreita, com as pessoas pequenas.
- **O que a cena faz:** em b1 (0–2,233), a foto do Juneau Empire (2048×1089, Michael Penn, sessão de 23/01/2017)
  recortada à faixa de cima do arquivo, y 0→196: só os nove membros até o peito, com a geleira da parede, a 1,4× (o
  teto da marca), 2.867 × 274 na tela, uma tira de 10:1. O editor cortou para deixar fora o homem de barba que serve
  água no primeiro plano, o público de costas e as placas com os nomes.
- **Ideia:** a foto inteira, impressa sobre a mesa (a 1,25×, 2.560 × 1.361, cabe na área segura), com a pílula Juneau
  Assembly sobre a mesa: a sessão com o público, como o jornal a publicou. O recorte não muda o sentido nos dois
  casos. As placas ficam pequenas (uns 12 px de letra no 1080p), e os nomes nelas são os dos membros de verdade.

## s62 e s63 (641,867–666,067, o fim e a tela final)

- **O Lucas:** "s62 e s63 ficaram apenas assim" (print: o carimbo YES e, embaixo, o `$` com a linha do preço vazia,
  na metade esquerda da mesa, e mais nada).
- **O que as cenas fazem:** s62 (4,2 s, "That yes vote was real. It just never came with a price voters would
  approve.") bate o YES e risca a linha do preço vazia; s63 (os 20 s sem voz, para os botões do YouTube) é o último
  quadro de s62 parado, escurecendo até metade do brilho.
- **De onde veio:** é o que o Lucas escolheu em 28/09/2026 (identidade §5, "A tela final e o carimbo do Juneau": "A
  última cena, parada e escurecendo", "B, carimbo de borracha à esquerda", "Médio"), numa página com três caminhos
  animados. Visto no vídeo inteiro, ficou pobre para ele. E a linha do preço vazia é o mesmo campo em branco que ele
  pediu para tirar de s02 e de s23: sem ela lá, o fim perde a rima com o começo.
- **Mudar o fim muda uma decisão dele registrada na identidade §5**: a pergunta vai com a lista final, e a regra da
  identidade se reescreve com a resposta.

## A voz (o vídeo inteiro)

- **O Lucas:** "A voz sofreu diversas mudanças de tom com o decorrer do vídeo. Alguns trechos tiveram uma transição
  abrupta também na fala. Talvez utilizar uma voz padrão melhore isso".
- **Como a narração foi feita** (26/09/2026, `canal.json` › `narracao`): ElevenLabs eleven_v3, voz "Alpha Point -
  Narrator (conversational, calm)" (um Remix feito pela API), `stability: 0` (o "Criativo"), um pedido por parágrafo
  (36 parágrafos), pausa de 0,07 s entre eles. O v3 não tem "request stitching": cada pedido é uma leitura nova, e no
  "Criativo" cada leitura varia mais. O Lucas aprovou essa narração em 26/09 ("pode seguir com o master"), ouvindo só o
  áudio; a nota de agora vem do vídeo montado.
- **O que pesa:** o relógio do vídeo inteiro (`words.json`) sai dessa narração. Narração nova muda o tempo de toda
  palavra, e com ele as 55 cenas (todas presas à palavra), o espelho, a regência, os textos de tela, os renders, os
  portões, os laudos e o XML.
- **A medida** (em curso, 01/10/2026, 23:xx): o tom por parágrafo e o salto em cada fronteira, por dois caminhos
  independentes, com recortes de áudio das fronteiras mais fortes em `out/juneau/_tmp/revisao-premiere/voz/`.
- **A decisão** (Lucas, 02/10/2026): "Sim, a mudança seria realmente apenas para o vídeo 2". O Juneau fica com a
  narração de 26/09. A medida serve para escolher a voz e o ajuste do vídeo 2 (registrado no CLAUDE.md, item 4 da
  narração).
