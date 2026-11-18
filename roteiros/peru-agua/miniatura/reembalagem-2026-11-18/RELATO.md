# A reembalagem do vídeo 3 (`peru-agua`): as miniaturas · o relato (18/11/2026)

O pedido: `out/_reembalagem/2026-11-18/pedido-miniaturas.md`, com o estilo, o código e as regras do pedido do Grand Canyon
(`pautas/arizona-strip/_trabalho/pedido-miniaturas.md`). O laudo do cético: `out/_reembalagem/2026-11-18/peru-agua/cetico.md`. As regras do
Lucas: `out/_reembalagem/2026-11-18/decisoes-lucas.md`.

O que se fez:
- as 2 miniaturas novas do §4 do cético: **n1 "ONLY 2%"** e **n2 "AMAZON SIDE"**;
- as prévias de 320 e de 168 das três do Lucas que o cético listou: a **A3** (no ar), a **A2** e a **A**;
- a folha, com o título mais clicável do cético embaixo de todas: **N3, *Lima Barely Gets Rain. How Do 10 Million People Get Water?***

## Os arquivos

Tudo em `roteiros/peru-agua/miniatura/reembalagem-2026-11-18/`:

| Arquivo | O que é |
|---|---|
| `folha.png` | As cinco lado a lado: primeiro as do Lucas (A3, A2, A, na ordem do ranking do cético), depois a n1 e a n2. Cada uma vai a 1280 com o título embaixo, a 320 com o título embaixo, a 168 com o título ao lado e a 168 ampliada 3 vezes (só para conferir). O selo de duração é o do vídeo publicado: 12:03 (723,8 s, `out/peru-agua/descricao-youtube.md`, linha 26). |
| `n1-*`, `n2-*` | Para cada uma: `-2560.jpg`, `-1280.jpg`, as prévias `-320.png` e `-168.png`, e as medidas em `-pontos.json`. |
| `l-A3-*`, `l-A2-*`, `l-A-*` | As do Lucas: a cópia do JPG de 1280, byte a byte, e as prévias de 320 e 168 feitas dela. O registro está em `lucas.json`. |
| `n1.py`, `n2.py` | O script de cada miniatura, sem rede. São cópias do `m2.py` da Austrália, mudadas. |
| `peru.py` | O mapa comum: a terra em amarelo, o mar, os lados, o lago, e as funções do ciano e do vermelho. Sem rede. É cópia do `australia.py`, mudada. |
| `n-bases.py` | Todos os pedidos de rede, um por vez, com o User-Agent do canal. É cópia do `m-bases.py`, mudada. |
| `lucas.py` | As prévias das do Lucas. Sem rede. |
| `conferir.py`, `conferencia.json` | A conferência da geografia e dos números. Sem rede. |
| `mapa.py`, `bases.py`, `folha.py` | Cópias das de `roteiros/australia-animais/miniatura/`, mudadas aqui. O topo de cada uma diz o que mudou. |
| `_bases/` | As bases, cada uma com o `.json` de procedência, o robots.txt lido, o `pedidos.jsonl` e os ensaios em `_bases/_tmp/`. Fica fora do git (`.gitignore`, linha 108; os PNG desta pasta, linha 109). |

**O código antigo do vídeo** (`roteiros/peru-agua/miniatura/`: `base-A.py`, `base-A2.py`, `base-A3.py`, `baixar-base-A.py` e os `A*-pontos.json`)
foi lido, mas nada dele foi editado nem rodado.
- O `peru.py` usa as mesmas camadas do `base-A3.py`, lidas do mesmo lugar (`out/peru-agua/_media/geo/`).
- O quadro da n1 sai do `A3-pontos.json`.
- A Blue Marble da A foi copiada para `_bases/` (abaixo).
- O desenho (o relevo amarelo, o vermelho, o ciano, a caixa preta) é o das miniaturas de hoje. Por isso o código-base é o da Austrália, e não
  o da A3.

**Para refazer**, da raiz do canal e sem rede:

```
python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/lucas.py
python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/n1.py
python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/n2.py
python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/folha.py
python -X utf8 -B -P roteiros/peru-agua/miniatura/reembalagem-2026-11-18/conferir.py
```

Rodar de novo dá o mesmo arquivo. Rodei a n1 e a n2 duas vezes, e o sha256 dos `-2560.jpg` não mudou: `712e7ee9…` (n1) e `5be39f27…` (n2).

## As do Lucas (para os leitores)

| id | A caixa | Origem (o JPG de 1280) | sha256 | O que é |
|---|---|---|---|---|
| A3 | NO WATER / HERE? | `roteiros/peru-agua/miniatura/miniatura-A3-1280.jpg` | `54b4fa92…` | no ar desde 30/10; a do teste de títulos |
| A2 | AND THE / WATER? | `roteiros/peru-agua/miniatura/miniatura-1280.jpg` | `8a22dc98…` | a publicada em 24/10 |
| A | AND THE WATER? | `out/peru-agua/_tmp/miniatura/A/miniatura-A-1280.jpg` (fora do git) | `b48d79d6…` | escolhida em 24/10 e trocada pela A2 antes de publicar |

- O `l-<id>-1280.jpg` é a cópia, conferida pelo sha256.
- O `-320.png` e o `-168.png` são a redução dela (LANCZOS), sem nenhuma outra mudança.
- O arquivo da A2 não tem o id no nome: usei "A2", o id do cético e do `A2-pontos.json` ao lado.
- A B ("ONE TUNNEL") não é do Lucas e ficou fora, como no cético.

## n1, "ONLY 2%"

- **O que se vê:**
  - o Peru inteiro;
  - **em vermelho**, o lado do Pacífico (a faixa da costa à divisória), com o relevo por baixo, o contorno branco de 5 px e a sombra por fora;
  - **em ciano**, o lado da Amazônia, com o relevo pintado em ciano e misturado ao amarelo a 88 %;
  - por cima do ciano, os 11 rios amazônicos do Natural Earth em azul saturado, com contorno escuro (18 px os principais, 14 px os outros). O
    Amazonas segue pelo Brasil até a borda do quadro;
  - **em amarelo**, o lado do Titicaca e os vizinhos, com as divisas de terra em branco fino;
  - o lago Titicaca em azul;
  - o contorno branco do Peru em volta de tudo;
  - **"97%"** em branco (230 px, sombra escura) no ciano, com "OF PERU'S WATER" embaixo (60 px);
  - a seta branca da caixa até o vermelho;
  - a caixa preta embaixo à esquerda: "ONLY" em branco (210 px) e "2%" em vermelho (330 px), com o sublinhado vermelho.
- **O quadro** vai de 18,62 S a 0,40 N, centrado em 81,40 O (de ~98,6 a ~64,2 O). É o da A3 um pouco mais apertado, como o cético deixou: o
  Peru fica ~4 % maior. A 1ª rodada (e1) usava o quadro da A3 0,02° para dentro: a Blue Marble da A tem exatamente a janela da A3, e um quadro
  igual sai dela pelo arredondamento.
- **A seta** tem 922 px. A ponta fica no vermelho, na latitude de Lima (76,36 O; 12,06 S): 41 px para dentro da costa, numa faixa que tem
  109 px ali, a ~75 km da cidade.
  - O cético pedia ~60 px para dentro. Isso levaria a ponta quase à divisória.
  - Não há rótulo de cidade, como o cético pediu.
- **As medidas:**
  - o vermelho ocupa 3,6 % da imagem; o ciano, 12,0 %; o mar, 60 %;
  - a caixa vai de 3,1 % a 30,2 % da largura e fica a 611 px do vermelho;
  - 74 % do "97%" fica sobre o ciano; o resto passa à divisa com o Brasil e ao contorno.

## n2, "AMAZON SIDE"

- **O que se vê:**
  - o Peru central, de Lima ao alto Mantaro;
  - **em vermelho**, o lado do Pacífico, com Lima dentro;
  - **em ciano**, o lado da Amazônia, misturado ao amarelo a 88 %;
  - a divisória em branco grosso (9 px, com sombra): é a "linha" do vídeo;
  - **Lima**: o ponto branco de 34 px na estação Campo de Marte do SENAMHI, com "LIMA" em texto escuro numa caixa clara (Inter 800, 110 px; a
    do Big Sur), sobre o mar;
  - **os lagos**: o ponto branco na estação de Marcapomacocha da OMM, com "HIGH LAKES" (60 px) acima e à direita, no ciano;
  - a seta branca e curva, dos lagos a Lima;
  - a caixa: "AMAZON" em ciano (224 px) e "SIDE" em branco (190 px), com o sublinhado vermelho.
  - Nenhum polígono do OSM entrou: nem os lagos, nem os rios, nem o túnel.
- **O quadro** vai de 13,62 a 11,12 S, centrado em 76,72 O (de ~79,0 a ~74,4 O). As rodadas estão no topo do `n2.py`:
  - e1, perto do quadro do cético e com "AMAZON" a 250 px: a caixa ficava a 13 px da costa;
  - o quadro final fica mais ao sul e a leste. O ciano cresce, e a caixa fica a 109 px da costa;
  - **"AMAZON" baixou de 250 para 224 px** para caber no mar.
- **A seta é ESQUEMÁTICA** (771 px; corpo de 40 a 80 px, cabeça de 165 × 225).
  - A estação fica a **7,6 km da divisória** (~35 px no palco). Uma seta reta para Lima cruzava a linha embaixo do ponto e começava no
    vermelho (e1: `comeca_no_ciano: false`).
  - Por isso ela sai do ponto para o sudeste, por dentro do ciano, faz a curva e cruza a linha branca à vista (76,16 O; 11,77 S; a 231 px do
    ponto). Depois chega a Lima pelo leste.
  - O desenho lembra o caminho de verdade (o canal para o sul, o túnel para o oeste, o rio descendo a Lima), mas **não é o traçado do canal
    e do túnel**. Os controles foram escolhidos para a leitura.
- **As medidas:**
  - o vermelho ocupa 25,5 % da imagem; o ciano, 27,6 %; o mar, 46,9 %;
  - a caixa vai de 2,5 % a 46,7 % da largura;
  - 41 % do caminho da seta fica sobre o ciano.

## As medidas, lado a lado

| | n1 | n2 |
|---|---|---|
| maiúscula da caixa no 168 | ONLY 10,0 px; **2% 15,8 px** | **AMAZON 10,6 px**; SIDE 9,1 px |
| o outro texto | "97%" 11,3 px no 168; "OF PERU'S WATER" 3,0 px (só a 1280) | "LIMA" 10 px no 320 e 5,2 px no 168; "HIGH LAKES" ~5,5 px no 320 |
| a caixa, na largura | 3,1 % a 30,2 % | 2,5 % a 46,7 % |
| distância da caixa à terra | 610 px | 108 px |
| peças sobre o vermelho | 1,0 % | 5,1 % |
| canto da duração (320 × 320 do palco) | livre (alfa 0) | livre (alfa 0) |
| luminância média | 109 | 108 |
| JPG de 1280 | 305 KB, q 95 | 383 KB, q 95 |

Para comparar: "VIPERS", da Austrália, tinha 11,9 px no 168; "UTAH", da Strip, 13,8 px.

## A conferência

**Os três tamanhos, com o título embaixo** (`folha.png`). Olhei cada uma a 1280, a 320 e a 168, e a 168 ampliada 3 vezes.
- **A palavra lê no 168 nas duas**: "2%" (a mais forte de todas), "ONLY", "AMAZON" e "SIDE". O "97%" também lê.
- A faixa vermelha da n1 lê no 168 graças ao contorno branco, com ~5 px de largura. Na n2, a divisão vermelho/ciano lê, e a seta liga os dois
  lados.
- "LIMA" lê a 320; no 168, é a mais fraca.
- O selo de duração não cobre nada.

**A geografia** (`conferir.py` → `conferencia.json`; sem rede):
- **Os lados cobrem o Peru sem sobra nem sobreposição**: 0 km² de sobreposição, 0 % do Peru fora deles.
- **As áreas** (área igual, esfera autálica): 282.072, 964.527 e 48.537 km². Contra a ANA (PNRH, Cuadro 2.1), dão +1,3 %, +0,7 % e −0,8 %. São
  os mesmos números do laudo de fatos do vídeo (`roteiros/peru-agua/qc-roteiro/fatos-pesquisa-2026-10-22.laudo.md`, PA003: CONFIRMADA).
- **Os pontos:**
  - Campo de Marte fica no lado do Pacífico, a 95,8 km da divisória. É a conta do laudo (PA006: 95,77 km);
  - a estação de Marcapomacocha fica no lado da Amazônia, a 7,6 km dela.
- **A n1:**
  - a ponta da seta fica no lado do Pacífico;
  - o Peru inteiro cabe no quadro;
  - os vizinhos no quadro são a Bolívia, o Brasil, o Chile, a Colômbia e o Equador;
  - o Titicaca está no quadro (o `ne_10m_lakes`, uma feição).
- **A n2:**
  - nenhum vizinho no quadro: só Peru e mar;
  - a seta começa no lado da Amazônia, cruza a divisória (o ponto da troca fica a 0,2 km da linha) e acaba no lado do Pacífico.
- **A costa** (os vetores contra o ASTER, além de 4 px dela):
  - na n1, 576 px discordam. O mais longe é "mar com altitude no ASTER" a 81,9 O e 3,0 S, no mar, ~100 km da costa. Não investiguei o que é. Não
    aparece, porque o mar se pinta pelos vetores;
  - na n2, 734 px discordam. O mais longe é um vazio do ASTER em terra (74,73 O; 11,54 S), no ciano;
  - os 89 px de vazio em terra da n2 foram preenchidos pelos vizinhos (`cv2.inpaint`) antes do sombreado. Na n1, nenhum.
- **A altitude**: 0 px fora do colormap da GIBS, nos dois recortes.
- **Os números** (`conferencia.json` › `fatos`):
  - "2%" = 1,76 % e "97%" = 97,91 % (ANA, PNRH, Cuadro 2.3). O laudo da descrição os confirmou (A9, A10 e T3).
  - O "2%" arredonda para cima, então o "ONLY" não exagera.
  - "AMAZON SIDE" é o rótulo que o próprio vídeo usa sobre o mesmo polígono (PA003). O roteiro paga na linha 12 ("more than half of the water
    Lima stores for the dry season sits in lakes on the other side of the line"), na 54 (SEDAPAL, 2007) e na 56 ("in the upper Mantaro basin,
    which drains toward the Amazon").
- **Nada de gente nem de foto** nas duas.

## As fontes, as licenças e o crédito

| Camada | Fonte | Licença e crédito |
|---|---|---|
| os lados e a divisória | HydroBASINS v1c nível 6 (WWF), recortado pelo `peru-ne` (`out/peru-agua/_media/geo/vertente-*.json`, `divisoria-continental-peru.json`; os sha256 estão nos `-pontos.json`) | **HydroSHEDS v1 License Agreement**, aceita pelo Lucas em 22/10/2026 (`roteiros/peru-agua/decisoes-lucas.md`, linhas 118–125). O texto do Exhibit B vai na descrição, e nada na tela. Já está na descrição publicada. |
| o Peru e os rios | Natural Earth 1:10m (`peru-ne.json`, `rios-vertente-atlantico.json`, `amazonas-ate-o-atlantico.json`) | domínio público. Os termos foram lidos hoje pelo desenhista da Austrália: "All versions of Natural Earth raster + vector map data found on this website are in the public domain" (`roteiros/australia-animais/miniatura/_bases/naturalearth-terms-of-use.html`) |
| os vizinhos | Natural Earth 1:10m Admin 0, a cópia da pré-v1 (sha256 `239eec57…`, conferido contra o manifesto dela) | domínio público |
| o lago Titicaca | Natural Earth `ne_10m_lakes`, o cache da máquina (sha256 `2d036f53…`, medido aqui; o cache não tem manifesto) | domínio público |
| os pontos | `pontos-fontes.json` do vídeo: SENAMHI (Campo de Marte) e OMM (Marcapomacocha) | coordenadas de estação; nada na tela além de "LIMA" e "HIGH LAKES" |
| o relevo e a altitude | NASA GIBS, `ASTER_GDEM_Greyscale_Shaded_Relief` e `ASTER_GDEM_Color_Index`, em dois recortes novos (`_bases/peru-*` e `_bases/centro-*`). O colormap vem de `out/_pautas/video-8/miniaturas/_bases/` (sha256 `75af600f…`), lido sem mover | aberta: "Fees: none" e "AccessConstraints: none" (o GetCapabilities, `out/rio-columbia/_tmp/miniatura/gibs/capabilities-3857.xml`, lido em 17/11; conferido no disco hoje). O ASTER GDEM é da NASA e do METI. A GIBS pede o reconhecimento (abaixo) |
| o mar | NASA GIBS, `BlueMarble_ShadedRelief_Bathymetry`. É a base da miniatura A, de 24/10 (`out/peru-agua/_tmp/miniatura/A/_base/bmng-relevo-batimetria-5120-w99.jpg`), copiada para `_bases/peru-bluemarble.jpg` sem pedido, com o sha256 conferido contra o `.json` de origem (`90d0e6c6…`). Na n2, ela é só a textura do mar, ampliada ~4 vezes e borrada | domínio público (NASA), com o mesmo reconhecimento |
| as letras | `marca/fontes/inter` | SIL OFL |

**Na descrição do vídeo, se uma das novas for ao ar:**
- **Nada do OSM entrou**: não há crédito de OpenStreetMap.
- **O relevo do ASTER é novo neste vídeo.** A descrição publicada credita "NASA" em geral e não traz o reconhecimento da GIBS (a A3, com a
  Blue Marble da GIBS, também não). A GIBS pede, sem ser condição de licença: "We acknowledge the use of imagery provided by services from
  NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS). Elevation: ASTER GDEM
  (NASA/METI). Blue Marble: NASA Earth Observatory." A Sala decide.
- **O Exhibit B do HydroSHEDS nomeia o produto pelo título** ("This product, "Why Peru Lives on the Dry Side of the Andes", incorporates…",
  duas vezes). **Se o título mudar, o texto da descrição tem de mudar junto**, com o título novo nos dois lugares (`decisoes-lucas.md`, linha
  125: "com o título do vídeo no lugar de 'This product'"). Vale para qualquer troca de título, com ou sem miniatura nova.

## Os pedidos de rede: 5

Saíram do `n-bases.py`, um por vez, com o User-Agent do canal, entre 17:18:01Z e 17:19:02Z de 18/11 (14:18 a 14:19 em Brasília). Cada um está
no `_bases/pedidos.jsonl`.
- O robots.txt da GIBS foi lido antes do 1º pedido: deu **404**, sem regras (`_bases/robots-gibs.earthdata.nasa.gov.txt`). A GIBS não é site
  novo para o canal; li assim mesmo.
- Os outros 4 foram à GIBS: o relevo e a altitude do recorte "peru" (100,0 a 63,5 O; 19,3 S a 1,3 N; 5600 px) e do recorte "centro" (80,2 a
  73,6 O; 14,3 a 10,0 S; 5600 px).
- Nenhum site recusou. Nada se contornou.

## O que declaro de método

- **Nenhum `python -c` e nenhum Python pela entrada.** Para ler os `-pontos.json` e as camadas, usei `node -e` (só leitura).
- **O `_bases/_tmp/recorte.py`** (um recorte de imagem, para conferir os vazios do ASTER) foi gravado com `cat` e heredoc: é o arquivo que se
  grava, e o Python rodou do arquivo.
- **Nada foi gravado fora desta pasta.** Nenhum arquivo antigo foi editado (`git status` não mostra mudança em arquivo rastreado). Nenhum
  navegador, nenhum vidIQ, nenhuma MapTiler, nenhum `SendMessage`, nenhum commit.

## O que ficou fraco

- **n1, "ONLY 2%":**
  - **na folha, ela está com o N3**, e o cético não a recomenda com ele: o par fica com três números ("10 Million", "97%", "2%"). O par dela é o
    N1 (*Why Peru's People and Water Are on Opposite Sides of the Andes*). Com o L3, ela repete o "2%";
  - **o "97%" pode ser lido como área** (o risco do cético). No 168, "OF PERU'S WATER" some (3 px), e quem diz "água" é o título;
  - **a ponta da seta** entra 41 px na faixa, e não os ~60 do cético. Ela cai ~75 km a leste de Lima, e sem rótulo nada diz "Lima";
  - **o "2%" vermelho sobre o preto** tem menos contraste que o branco. Lê pelo tamanho (15,8 px no 168);
  - **o vermelho encosta no azul do mar.** Só o contorno branco de 5 px os separa (`marca/embalagem.md` §3: "nada de vermelho contra azul");
  - **o mar ocupa 60 % da imagem**, e o canto de cima à esquerda é azul vazio (só as Galápagos);
  - **o lado do Titicaca, em amarelo**, é 0,6 % da imagem e não lê no 168. O sul do Peru só se lê pelo contorno branco.
- **n2, "AMAZON SIDE":**
  - **"AMAZON" pode ser lido como a floresta ou o rio** ("Lima bebe do Amazonas"; o risco do cético). No 168, o ciano é só uma área, e o relevo
    de montanha não se vê;
  - **a seta é esquemática** e sugere que toda a água de Lima vem dali. É parte: mais da metade do que a cidade guarda para a seca. A curva
    para o sul é escolha minha;
  - **os lagos ficam encostados na linha.** A estação fica a 7,6 km da divisória, e o ponto parece estar sobre ela; quem o prende ao ciano é o
    rótulo. "HIGH LAKES" só lê a 1280 (~5,5 px no 320);
  - **"LIMA" é fraca no 168** (5,2 px), embora leia a 320;
  - **"AMAZON" ficou em 224 px**, e não nos ~250 do cético, para a caixa caber no mar. A caixa ocupa quase metade da largura;
  - **não há amarelo**: o quadro só tem Peru, e foge da paleta das referências (vermelho, ciano e azul só). O ciano é um pouco mais de um quarto
    da imagem, à direita, longe da caixa;
  - **o ASTER tem uns poucos poços escuros** no ciano de cima à direita (~74,7–75,0 O; ~11,4–11,6 S). São do próprio dado, não do vazio
    preenchido, e se veem como pintas a 1280.
- **As duas:**
  - **nenhum leitor a frio viu as duas.** A banca de quatro lentes (`marca/embalagem.md` §3) não foi feita;
  - **o estilo novo** (relevo amarelo, vermelho e ciano) vai **ao lado do estilo antigo da A3** (satélite escuro, laranja, anel) no mesmo
    canal. Num teste A/B, a diferença de estilo pesa junto com a palavra;
  - **ao subir uma delas**, o Exhibit B e o reconhecimento da GIBS na descrição pedem a decisão da Sala (acima).

## Para a Sala (git)

- **Ficam fora** (`.gitignore`, linhas 108 e 109): `_bases/` (~39 MB) e os PNG desta pasta (`folha.png` e as prévias de 320 e 168).
- **Sobem**:
  - os JPG: `n1-*`, `n2-*` e as cópias `l-*-1280.jpg`, de ~0,26 a ~0,79 MB cada;
  - os `-pontos.json`, o `lucas.json` e o `conferencia.json`;
  - os `.py` e este relato.
- **Nada pessoal** em arquivo nenhum. O User-Agent leva o contato do canal, que só vai gravado nos `.json` como "o do canal".
  - **Exceção, que não é minha:** o `.json` de procedência da Blue Marble antiga, copiado para `_bases/peru-bluemarble.jpg.json` (fora do git),
    guarda o caminho de origem e a URL. O `.json` original da A (`out/peru-agua/_tmp/…`, também fora do git) tem o User-Agent com o e-mail
    de contato do canal (`canal.json` › `contato`). A cópia não repete esse campo.
