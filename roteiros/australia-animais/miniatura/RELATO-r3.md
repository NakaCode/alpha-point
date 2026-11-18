# As miniaturas do vídeo 8 prontas para a publicação (a rodada 3, `r3-`): o relato (18/11/2026)

O pedido: `pautas/australia-animais/_trabalho/pedido-miniaturas-r3.md`. O Lucas, 18/11, ~15:3x, às 3 miniaturas da rodada 2: **"Uma por título
(Recomendado)"**, e "os consertos de leitura em 168 px entram na publicação" (`roteiros/australia-animais/decisoes-lucas.md`). Os consertos são os que os
leitores apontaram (`out/_pautas/video-8-australia/teste-leitores.md`, "A rodada 2", e `leitor-1-r2.md` a `leitor-4-r2.md`). **A ideia de nenhuma
mudou.** Fiz as duas que vão ao ar (n1 e n2) e a reserva (n3).

## As três, numa linha

| | Vai ao ar com | O que mudou | Por quê (o leitor) |
|---|---|---|---|
| **r3-n1** "NOT THE KILLER" | o título 3 (*…Deadliest Snake Isn't Its Most Venomous One*) e o do Lucas | só a pílula: **INLAND TAIPAN / SNAKE**, em duas linhas, de 84 para 116 px | "nada na imagem diz que é uma cobra", "taipan não é palavra de todo lugar" (Tunde) |
| **r3-n2** "10 YEARS OF VENOM DEATHS < 1 MONTH" | o título 2 (*Why So Few People Die…*) | **"VENOM DEATHS"** na caixa (três linhas); o espaço entre "1" e "MONTH" maior; só o tronco das rodovias, com traço mais grosso; a pílula ROADS maior | "falta a palavra deaths" (Mia); "1MONTH" colado e a malha vira ruído na 168 (Tunde) |
| **r3-n3** (reserva) "SNAKES 35 / BEES & WASPS 42" | — | o cabeçalho **"VENOM DEATHS"** maior; a linha nova **"OTHERS 8"**, embaixo do sublinhado: 35 + 42 + 8 = 85 | "DEATHS, 2016–2025 some na 168"; "35 + 42 não fecha 85" (Tunde) |

## Os arquivos

Tudo em `roteiros/australia-animais/miniatura/`, com o prefixo `r3`:

| Arquivo | O que é |
|---|---|
| `r3-folha.png` | Cada r3 **ao lado da r2**, a 320 com o título embaixo, a 168 com o título ao lado e a 168 ampliada 3 vezes (só para conferir a palavra). Quatro linhas: a n1 com o título 3, a n1 com o do Lucas, a n2 com o título 2 e a n3 com o título 2 (o par mais forte dela no teste). O selo de duração **14:36** é ilustrativo (os 14,6 min de fala da pauta v2, §7). |
| `r3-n1-*`, `r3-n2-*`, `r3-n3-*` | Para cada uma: `-2560.jpg`, `-1280.jpg` (q 95), `-320.png`, `-168.png` e as medidas em `-pontos.json`. |
| `r3-n1.py`, `r3-n2.py`, `r3-n3.py` | O script de cada uma, cópia do da r2 com só o conserto mudado; o topo de cada um diz o que mudou, por quê e os ensaios. Nenhum faz pedido de rede. |
| `r3_comum.py` | O mapa comum (com cache só para os ensaios), a pílula de duas linhas, o corte das rodovias pelo scalerank do NE e a caixa com o sublinhado no meio e dois tamanhos na mesma linha. Importa o `r2_comum.py`, o `mapa.py` e o `australia.py`, que não foram editados. |
| `r3-folha.py` | A folha (as funções de desenho são cópia das do `r2-folha.py`). |
| `r3-conferir.py` e `r3-conferencia.json` | A conferência (abaixo). Sem rede. |
| `_bases/_tmp/r3-*` | Os ensaios, os logs das finais e o sha256 das duas rodadas (`sha-r3-1.txt`, `sha-r3-2.txt`). Fora do git. |

**Nada da rodada 1 e da 2 foi editado nem rodado de novo:** o `git diff` da pasta é vazio, e o `git status` só mostra arquivos `r3`.

**Para refazer**, da raiz do canal e sem rede (cada miniatura leva ~40 s):

```
python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-n1.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-n2.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-n3.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-folha.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r3-conferir.py
```

**Rodar de novo dá o mesmo arquivo:** rodei as três finais duas vezes, sem cache, e o sha256 dos `-2560.jpg` não mudou: `51e04776…` (n1), `ff0d0305…`
(n2) e `f24007ad…` (n3).

**O mapa é o da r2**, no mesmo quadro (47 S a 9,4 S, centrado em 127,3 E). Na n1, fora das duas pílulas (com 60 px de folga para a sombra), a r3 e a r2
diferem em média 0,0006 nível de cor, com 1 px acima de 8 em 3,25 milhões: é a compressão do JPG.

## r3-n1, "NOT THE KILLER": a pílula diz o bicho

- **O conserto:** a pílula passa de "INLAND TAIPAN" (84 px; 4,0 px de maiúscula na 168) para **"INLAND TAIPAN" / "SNAKE"**, em duas linhas de 116 px
  (**5,5 px** na 168). Agora a imagem diz que é uma cobra, e o nome lê na 168.
- **Os ensaios** (`_bases/_tmp/r3-n1-e1-*`, `-e2`):
  - "INLAND TAIPAN SNAKE" numa linha (`uma`): lia igual, mas a faixa ia de 40 % a 95 % da largura e cortava o norte do continente de lado a lado;
  - "SNAKE" pequeno em cima do nome (`kicker`): o "SNAKE" sumia na 168;
  - a pílula deslocada 70 px para a direita (`e2`): escondia mais o cabo York.
- **Ficou** centrada no vermelho, a 26 px acima dele, sem cobri-lo (0 %). A caixa, a seta e o vermelho são os da r2, pixel a pixel.
- **"com o título 3, ela repete a virada" (a Mia):** a virada é a ideia desta miniatura, e o pedido não deixa trocá-la.
  - O que muda é que o quem (o nome e o bicho) e o onde (o vermelho no interior) passam a ler na 168. O par se divide: o título dá a regra, a miniatura
    dá qual e onde.
  - **A repetição da virada continua.** Tirá-la seria trocar a caixa, e isso é decisão da Sala e do Lucas.
- **O fato** é o da r2: a taipan-do-interior é a de veneno mais potente medido em camundongo (1979); das 23 mortes por cobra de 2005–2015 (ASP-20), 17
  foram da marrom, 4 da tigre e 2 de cobra desconhecida, e nenhuma foi posta na conta dela. A caixa não diz "never", "nobody" nem "deadliest".

## r3-n2, a estrada: "10 YEARS OF / VENOM DEATHS / < 1 MONTH"

- **"falta a palavra deaths" (a Mia):** a linha branca diz o objeto, **"10 YEARS OF / VENOM DEATHS"**, em duas linhas.
  - Numa linha só, a caixa passava de 70 % da largura e cobria a Tasmânia.
  - "VENOM DEATHS" são as 85 mortes de 2016–2025 por todos os animais venenosos (X20–X29), o objeto que o pedido manda.
  - O mês é o da estrada (um mês médio de 2025: 1.276 ÷ 12 = 106,3, preliminar), que a pílula ROADS e o vermelho dizem. A frase lida fica "10 years of
    venom deaths < 1 month [of] roads".
- **"o < 1 MONTH sai colado" (o Tunde, "1MONTH"):** entre o "1" e o "MONTH" vai o espaço de 1/3 de eme da Inter (U+2004, conferido na fonte, sem
  tinta), em vez do espaço comum da Inter Black (0,184 eme).
- **"a malha de rodovias vira ruído em 168 px" (o Tunde):**
  - ficam só as **"Major Highway" de scalerank até 4**, a hierarquia do próprio Natural Earth (3 é o tronco). Saem as 90 "Secondary Highway" e as Major
    de scalerank 5 a 9;
  - são **293°** de rodovia, contra 559° na r2: 220 trechos (161 de scalerank 3 e 59 de 4), 30.764 km pelo `length_km` do NE;
  - simplificadas a 0,04° para o desenho, com o traço de 22 px (era 16) e o casco branco de 4 px (era 5). Ocupam **5,4 %** da imagem (era 6,9 %);
  - saiu 1 toco solto de 0,2°.
- **Os ensaios** (`_bases/_tmp/r3-n2-e1` a `-e4`):
  - e1: todas as Major. Ainda granulado no sudeste, e a caixa de três linhas encostava na costa;
  - e2: scalerank até 3 (o tronco, limpo mas ralo) contra até 4 (o anel e as cruzadas, com o sudeste mais cheio, onde mora a gente: o que a Mia gostou
    de ver). Fiquei com o 4;
  - e3 e e4: o tamanho das letras. A final é a e4.
- **Para a caixa de três linhas caber no mar sob Albany** (35,1 S), as letras encolheram:
  - as brancas, de 130 para 126 px: **6,0 px** na 168 (eram 6,2);
  - a amarela, de 250 para 210 px: **10,0 px** (era 11,9).
  - A caixa vai de 2 % a 50 % da largura (era 58 %) e fica a 22 px da Austrália (era 49).
- **A pílula ROADS** cresceu de 92 para 120 px (**5,7 px** na 168; era 4,4), porque é ela que completa a frase.
- **A seta** é a da r2, com 538 px: cai na mesma rodovia do NE (134,39 E; 28,63 S; Austrália do Sul).
  - É uma "Major Highway" de scalerank 3, sem nome no NE (pela posição, a Stuart Highway perto de Coober Pedy).
  - O nome não está na fonte e não vai a lugar nenhum.

## r3-n3 (a reserva): "VENOM DEATHS 2016–2025 / SNAKES 35 / BEES & WASPS 42 / OTHERS 8"

- **"DEATHS, 2016–2025 some na 168":** o substantivo cresce.
  - A linha tem dois tamanhos na mesma linha de base: **"VENOM DEATHS"** a 112 px (**5,3 px** na 168; era 4,0) e o período, "2016–2025", a 80 px
    (3,8 px: lê de 320 para cima).
  - Numa linha de um tamanho só, a caixa não passava de 96 px (4,5 px) sem encostar na ilha Kangaroo. O e2 é o de 96 px; o e3, com 120 px, encostou.
- **"35 + 42 não fecha 85" (o Tunde):** a conta fecha na caixa.
  - O cabeçalho diz o objeto inteiro, "VENOM DEATHS": as 85 de todos os venenosos.
  - Embaixo do sublinhado entra, pequena, **"OTHERS 8"** (4,3 px na 168): X25, outros artrópodes venenosos (carrapatos, formigas), 6, e X26, animais
    marinhos venenosos, 2.
  - **35 + 42 + 8 = 85**, conferido pelo `r3-conferir.py` na tabela da própria base (`fatos-b.md`, a série do ABS por código e ano); aranhas e escorpiões, 0.
  - **Sem "VENOM" no cabeçalho, "OTHERS 8" leria como "todos os outros bichos"**, o que é falso: os não venenosos (W53–W59) mataram 154 na mesma década
    (`fatos-b.md` §1.2).
- **O duelo continua junto:** SNAKES 35 em cima de BEES & WASPS 42, e a amarela continua sublinhada.
  - No e1, "OTHERS 8" ia logo abaixo do cabeçalho (8, 35, 42, subindo). Virava uma parede de texto e separava o duelo.
  - Para caberem quatro linhas, as do duelo encolheram: SNAKES 35 a 116 px (**5,5 px**; era 6,2) e BEES & WASPS 42 a 144 px (**7,0 px**; era 7,5).
  - A caixa vai de 2 % a 59 % da largura e fica a 20 px da terra.

## As medidas da 168, lado a lado

A altura da maiúscula vem do `-pontos.json`, como no `r2-conferir.py`. A pílula da r2 não gravava a medida; a dela é a conta da fonte (a maiúscula da
Inter 800 é 0,728 do px).

| | rodada 2 | rodada 3 |
|---|---|---|
| **n1** caixa | NOT THE 8,1 · KILLER 11,9 | igual |
| **n1** pílula | INLAND TAIPAN 4,0 | **INLAND TAIPAN 5,5 · SNAKE 5,5** |
| **n2** caixa | 10 YEARS OF VENOM 6,2 · < 1 MONTH 11,9 | 10 YEARS OF 6,0 · **VENOM DEATHS 6,0** · < 1 MONTH 10,0 |
| **n2** pílula | ROADS 4,4 | **ROADS 5,7** |
| **n3** caixa | DEATHS, 2016–2025 4,0 · SNAKES 35 6,2 · BEES & WASPS 42 7,5 | **VENOM DEATHS 5,3** (2016–2025 3,8) · SNAKES 35 5,5 · BEES & WASPS 42 7,0 · **OTHERS 8 4,3** |

- **Uma medida independente, na própria 168:** as linhas de pixel com amarelo dentro da caixa (a maiúscula mais o antisserrilhado).
  - KILLER: 12 e 12;
  - < 1 MONTH: 12 → 10;
  - BEES & WASPS 42: 8 → 7.
- **O resto, lado a lado:**
  - **a fração da largura** da caixa: n1 de 2 % a 40 % (igual); n2, até 50 % (era 58 %); n3, até 59 % (era 61 %);
  - **a distância à terra:** n1, 18 px; n2, 22 (era 49); n3, 20 (era 26);
  - **as peças sobre o vermelho:** n1, 0 %; n2, 4,1 % das rodovias (era 3,3 %); n3, 2,7 %;
  - **o canto da duração** (320 × 320 do palco): livre nas três (alfa 0);
  - **a luminância média:** 96,3, 97,4 e 84,9 (eram 99,7, 97,6 e 83,2);
  - **o JPG de 1280:** 274, 332 e 294 KB (q 95).

## A conferência

**Os três tamanhos** (`r3-folha.png`). Olhei cada uma a 1280, a 320, a 168 e a 168 ampliada 3 vezes, ao lado da r2.
- **Na 168:**
  - "INLAND TAIPAN / SNAKE" lê, onde antes o nome sumia;
  - a rede da n2 virou um anel com poucas cruzadas, em vez do granulado, e "VENOM DEATHS" e "ROADS" leem, apertados;
  - "< 1 MONTH" sai separado;
  - na n3, "VENOM DEATHS" lê no limite, e "2016–2025" e "OTHERS 8", não.
- **Na 320:** tudo lê.
- **O selo** não cobre nada.

**A geografia** (`r3-conferir.py` → `r3-conferencia.json`; sem rede):
- **O quadro:** a Nova Zelândia fica fora, pela geometria do NE: a costa oeste da Ilha do Sul, na faixa do quadro, fica em 166,47 E, 3,7 px além da borda.
- **O Channel Country (n1):** 100 % dentro da terra do ABS.
  - Por estado: 67 % em Queensland, 17 % na Austrália do Sul, 8 % em New South Wales e 7 % no Território do Norte.
  - Dos rios da ficha da taipan, correm dentro dele 95 % do Cooper, 66 % do Diamantina e 43 % do Warburton.
  - O vermelho é a biorregião, não a área da cobra.
- **As rodovias (n2):** há rodovia em todos os oito estados e territórios, em graus (r3 contra r2):
  - NSW 60,8 (94,1); Vic 25,6 (67,6); Qld 58,4 (128,1); SA 42,2 (55,1);
  - WA 78,2 (147,2); Tas 2,8 (24,1); NT 26,9 (45,5); ACT 0,6 (0,6).
  - 91 % do casco cai sobre a terra do ABS.
- **O vermelho da n3 é a Austrália:** a terra do ABS contra a do NE, além de 3 px da costa, discorda em 117 px (0,014 %).
- **As contas contra a base:**
  - 85 ÷ (1.276 ÷ 12) = 0,8 mês;
  - X20 = 35, X23 = 42, X25 + X26 = 8, X20–X29 = 85; cada soma confere com os dez anos da série.
- **As palavras contra os títulos** (o `r3-conferir.py` passou a contar "DEATHS" como a raiz de "Die" e de "Deadliest"):
  - **r3-n1:** "SNAKE" é a mesma palavra do título 3, com que ela vai ao ar. Com o título do Lucas, nada se repete;
  - **r3-n2:** "DEATHS" tem a raiz do "Die" do título 2, com que ela vai ao ar (é a palavra que a Mia pediu). Com o título 3, "VENOM" e "DEATHS" têm a
    raiz de "Venomous" e "Deadliest";
  - **r3-n3:** "DEATHS" contra o "Die" do título 2; "SNAKES", "VENOM" e "DEATHS" contra o título 3.
- **Nada de bicho desenhado, foto, caveira, emoji, "DEADLIEST", "NOBODY", "MYTH", "NEVER" ou bandeira.** As cores são as de papel da r2.

## O que ainda ficou fraco

- **As três:**
  - **nenhum leitor a frio viu a r3**, e o selo de duração é ilustrativo;
  - **as caixas têm mais palavras que as 2 a 4 da marca** (`embalagem.md` §1.1). Contando os números, como na r2: a n2 tem 7 e um sinal (eram 6), mais
    a pílula; a n3, 10 (eram 7);
  - a Nova Zelândia continua a 3,7 px da borda direita.
- **r3-n1:**
  - **a virada continua repetindo o título 3** (a Mia). Só a troca da caixa a tira, e a ideia é essa;
  - **"SNAKE" repete a palavra do título 3.** Com o do Lucas, é o que faltava;
  - **a pílula maior cobre o golfo de Carpentária e a base da Terra de Arnhem e do cabo York** (o alto da silhueta). A ponta do cabo York e o resto do
    contorno continuam à vista;
  - 5,5 px é o mínimo que lê;
  - **"KILLER" ainda pode ler como "nunca matou"** (a Mia já dizia). Nenhuma palavra da imagem diz isso;
  - o vermelho é pequeno: ~17 × 21 px na 168.
- **r3-n2:**
  - **"< 1 MONTH" perdeu tamanho** (11,9 → 10,0 px): é o preço da terceira linha. Continua a maior palavra da caixa e lê bem;
  - **"DEATHS" tem a raiz do "Die" do título 2, o par dela.** Dizer o objeto e não repetir a ideia do título não cabem juntos;
  - **a rede é o tronco do NE** (scalerank até 4, escolha minha), e as mortes são de todas as estradas. A Tasmânia fica com uma rodovia só (2,8°);
  - **a caixa ficou a 22 px da costa** (era 49), e o "<" ainda pede um segundo de leitura;
  - **2025 é preliminar no ABS:** se ele revisar, a âncora muda.
- **r3-n3 (reserva):**
  - **a caixa de quatro linhas é a mais pesada das três;**
  - **o duelo encolheu** (SNAKES 35 5,5 px; BEES & WASPS 42 7,0 px), e "VENOM DEATHS", a 5,3 px, lê só no limite;
  - **o período (2016–2025) e "OTHERS 8" não leem na 168;**
  - **"OTHERS 8" é um número que a voz precisa dizer igual.** O registro da pauta diz que o roteiro diz quem são os outros oito; se o roteiro não disser
    "eight", a linha sai (`MINI_N3_OUTROS=` vazio volta às três linhas);
  - a seta continua indo ao meio do continente (o Dale: "parece enfeite"). Ninguém pediu o conserto, e não mexi.

## As fontes, as licenças e o crédito

As camadas são as da r2, as mesmas bases do disco, conferidas pelo sha256 (o `RELATO-r2.md` e o `RELATO.md` têm a licença lida de cada uma):
- a terra do ABS (STE 2021, `d9b7f735…`; CC BY 4.0);
- o Channel Country do IBRA 7.1 (DCCEEW, `815fc5b5…`; CC BY);
- as rodovias do Natural Earth 1:10m (`66a0c7b4…`; domínio público): na r3, só as Major de scalerank até 4;
- os vizinhos do NE (`239eec57…`);
- o relevo, a altitude e o mar da NASA GIBS (ASTER GDEM; Blue Marble);
- as letras Inter (SIL OFL).
- **Nada novo:** nenhuma camada nova, nenhum download.

**Na descrição do vídeo, se uma delas for:**
- **as três:**
  - "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and
    Information System (ESDIS). Elevation: ASTER GDEM (NASA/METI). Blue Marble: NASA Earth Observatory.";
  - "Australian boundaries: Australian Bureau of Statistics, ASGS Edition 3 (CC BY 4.0)";
- **a r3-n1, também:** "Channel Country bioregion: IBRA 7.1, Australian Government Department of Climate Change, Energy, the Environment and Water (CC
  BY)", como o Lucas já mandou para a r2-n1;
- **a r3-n2 e a r3-n3:** os números são do *Causes of Death, Australia, 2025* do ABS (CC BY 4.0), que a descrição do vídeo já precisa creditar pela voz. Na
  n2, a conta é nossa (2025 preliminar). O Natural Earth não exige crédito ("Roads: Natural Earth", se a Sala quiser);
- nada do OSM.

## Os pedidos de rede: nenhum

- Toda base já estava no disco: as da rodada 1 em `_bases/` e o NE no cache da máquina.
- Nenhum site, nenhum robots.txt, nada recusado, nada contornado.
- Nada da MapTiler, de banco pago, de crédito, de vidIQ ou de navegador. Nenhum `SendMessage` e nenhum commit.

## O que declaro de método

- **Um comando meu foi recusado pela trava do Python** antes de rodar: sobrou um `python -` no começo de uma linha de Bash, um erro de digitação. Refiz só
  com o grep.
- **Um script de conferência de rascunho** (o comprimento das rodovias por estado, no scratchpad) cruzava os estados na geometria cheia e passou de 3
  minutos. Parei-o e refiz com os estados simplificados.
- **O cache do mapa dos ensaios** (`_bases/_tmp/r3-cache-*.npz`, 71 MB) foi gravado pelo `r3_comum.montar()` e **apagado no fim**. As finais rodam sem ele.
  Não usei o cache do `australia.py`, que grava sem o prefixo `r3`.
- **Os scripts de ver os ensaios** (a tira de tamanhos, as medidas, a comparação do mapa) ficaram no scratchpad da sessão, fora do canal.

## Para a Sala (git)

- **O `.gitignore` deixa de fora** `_bases/` (linha 105) e os PNGs desta pasta (linha 106): a `r3-folha.png` e as prévias `r3-*-320.png` e `r3-*-168.png` não
  sobem (conferido com `git check-ignore`).
- **Sobem:**
  - os `r3-*-1280.jpg` (274 a 332 KB) e `r3-*-2560.jpg` (537 a 660 KB);
  - os `r3-*-pontos.json` e o `r3-conferencia.json`;
  - os `.py` (`r3-n1.py`, `r3-n2.py`, `r3-n3.py`, `r3_comum.py`, `r3-folha.py`, `r3-conferir.py`) e este relato.
- **Nada pessoal** em arquivo nenhum.
