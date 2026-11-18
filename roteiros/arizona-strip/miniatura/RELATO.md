# As miniaturas da pauta do vídeo 8 (`arizona-strip`): o relato (18/11/2026)

O pedido: `pautas/arizona-strip/_trabalho/pedido-miniaturas.md`, com as três miniaturas do §8 da pauta
(`pautas/2026-11-18-video-8-arizona-strip.md`). O título embaixo, em todas: *Why Arizona Didn't Stop at the Grand Canyon*.

**A mudança da Sala no meio do trabalho** (18/11, depois do cético da pauta, `pautas/arizona-strip/_trabalho/cetico-v1.md`, K3, K6 e K9):
- a m3, "UTAH WANTED IT", passa a ser a primeira, e vem primeiro na folha;
- a m1 troca "CUT OFF" (a palavra do enxame e das manchetes da enchente) por "STILL ARIZONA", e ganha o rótulo "GRAND CANYON" ao longo do
  cânion. A arte fica;
- a m2, "265 MILES", vira reserva. Ela já estava pronta: terminei sem o nome da cidade (o ponto ficou sem nome) e a tirei da folha principal;
- o nome "Colorado City" não vai a nenhuma das três.

## Os arquivos

Tudo em `roteiros/arizona-strip/miniatura/`:

| Arquivo | O que é |
|---|---|
| `folha.png` | A folha principal: a m3 e a m1, nessa ordem, como o YouTube mostra. Cada uma vai a 1280 com o título embaixo, a 320 com o título embaixo e a 168 com o título ao lado, sempre com o selo de duração (15:12, a fala da pauta). |
| `folha-reserva.png` | A m2, no mesmo molde. |
| `m<n>-1280.jpg`, `m<n>-2560.jpg`, `m<n>-320.png`, `m<n>-168.png` | As três miniaturas e as prévias. |
| `m<n>.py` | O script de cada uma. Não faz pedido de rede. |
| `m<n>-pontos.json` | As medidas de cada uma. |
| `m3-bases.py` | Os 2 pedidos de rede da m3 (abaixo). |
| `conferir.py` e `conferencia.json` | A conferência da geografia e da arte da m1 (abaixo). |
| `mapa.py`, `bases.py`, `folha.py` | Cópias das de `out/_pautas/video-8/miniaturas/`, mudadas aqui. O topo de cada uma diz o que mudou. |
| `_bases/` | As 2 bases novas da m3, cada uma com o `.json` de procedência. Fica fora do git (`.gitignore`, linha 93). |

**Para refazer**, da raiz do canal e sem rede:

```
python -X utf8 -B -P roteiros/arizona-strip/miniatura/m<n>.py
python -X utf8 -B -P roteiros/arizona-strip/miniatura/folha.py
python -X utf8 -B -P roteiros/arizona-strip/miniatura/conferir.py
```

Rodar de novo dá o mesmo arquivo: conferi pelo sha256 do `m3-2560.jpg`.

Nada em `out/_pautas/video-8/miniaturas/` foi editado nem rodado. As bases de lá foram só lidas, sem mover.

## m3, "UTAH WANTED IT" (a primeira)

- **O quadro** vai de 35,53 a 37,88 N e de 116,56 a 111,34 O, em Mercator 16:9 (182 m de chão por px do palco).
  - Utah ocupa o terço de cima, com St. George e Kanab.
  - Nevada fica à esquerda e recebe a caixa.
  - A Strip fica à direita do meio, a ~70 px da borda direita.
- **O vermelho** é a Strip, os dois CCDs do Census: **16,9 % da imagem**, com o relevo por baixo, contorno branco e sombra.
- **Utah em ciano** ocupa 19,6 % da imagem: o mesmo relevo, pintado em ciano e misturado ao amarelo a 80 %, com contorno branco de 6 px.
- **A água** vai em **azul** saturado, para não se confundir com Utah: o rio Colorado e os lagos Mead, Powell e Mohave.
- **Duas setas brancas e grossas** saem dos pontos brancos de St. George e de Kanab e descem, curvas, até o meio do vermelho. Têm 411 e
  387 px no palco, e as duas pontas ficam no vermelho. **Não são estradas**: são o pedido de Utah, "como quem estica a mão".
- **Os rótulos pequenos** são ST. GEORGE, KANAB, NEVADA, ARIZONA e "GRAND CANYON". O do cânion vai no amarelo, logo ao sul do rio, sob o
  trecho do meio do cânion, inclinado 6°; fica a 50 px do rio e a 163 px da peça mais perto.
- **A caixa preta**, embaixo à esquerda e sobre Nevada, traz "UTAH" em ciano (290 px) e "WANTED IT" em branco (180 px), com o
  sublinhado vermelho. Termina a 49 px da divisa de 114,05 O e a 49 px do vermelho.
- **A voz paga** o texto aos 26,5 s (gancho A, frase 8) e o ato 4 inteiro.

**Onde ela foge do §8, e por quê:**
- **A caixa fica sobre Nevada, e não "sobre o Arizona ao sul do cânion".** Para ler no 168, as duas linhas pedem ~1.120 × 500 px no
  palco. Num quadro que mostra o sul de Utah, isso não cabe entre o cânion e a borda de baixo, porque o rio desce a 35,77 N no Diamond
  Creek. Sobre Nevada cabe, sem cobrir Utah nem a Strip.
- **O quadro não é o do §8** (35,60 a 38,20 N e 114,60 a 110,90 O), porque esse recorte não é 16:9. O meu foi apertado até o que a caixa
  deixa. Na 1ª rodada (35,45 a 37,90 N), o vermelho tinha 15,6 %.
- **O ciano vai a 80 %, e não a ~40 %.** A 40 %, o ciano sobre o amarelo deu verde-oliva, que não lia como ciano.
- **"UTAH" subiu de 250 para 290 px** na 2ª rodada. É a palavra que liga a caixa ao ciano.
- **Entrou o rótulo "GRAND CANYON".** A Sala pediu na m1, pelo mesmo motivo: sem ele, o cânion é só uma linha azul.

## m1, "STILL ARIZONA"

- **A arte é a da busca** (`out/_pautas/video-8/miniaturas/arizona-strip-1280.jpg`), refeita aqui com o mesmo código e os mesmos números:
  - o quadro vai de 35,45 a 37,30 N e de 114,79 a 110,71 O;
  - o vermelho ocupa **27,5 %** da imagem;
  - a água vai em ciano;
  - UTAH, NEVADA e ARIZONA vão pequenos;
  - a seta é a do caminho de fora.
- **A prova da arte** (`conferir.py`, item 5): comparei a m1 de 2560 com a da busca, pixel a pixel. Fora da caixa velha, da caixa nova e
  do rótulo do cânion, **nenhum pixel mudou**.
- **O que mudou:**
  - **o rótulo "GRAND CANYON"** (Inter 800, 58 px), na horizontal, no amarelo logo ao sul do rio, sob o trecho do meio do cânion. Fica a
    28 px do rio e a 42 px da caixa;
  - **a caixa**, em duas linhas: "STILL" em branco (136 px) e "ARIZONA" em vermelho (182 px, a cor da Strip), com o sublinhado vermelho.
    Vai de 38 % a 74 % da largura e fica a 38 px do vermelho.
- **Por que a caixa encolheu** (as rodadas estão no topo do `m1.py`):
  - numa linha só, "STILL ARIZONA" tem de acabar antes de 76 % da largura, onde o selo da duração começa no 168. Caberia só a ~127 px, com
    6 px de maiúscula;
  - com "ARIZONA" a 205 px, do tamanho do "CUT OFF", a caixa cobria a volta do Grand Canyon Village;
  - o rótulo do cânion paralelo ao trecho oeste (−27°) encostava no rio.
- **A seta continua ESQUEMÁTICA**, como o §8 registra. A rota de verdade passa por Las Vegas, a oeste do quadro, e termina em Kingman, ao
  sul dele. A seta passa por cima do braço Overton do lago Mead.

## m2, "265 MILES" (reserva)

- **O quadro** vai de 35,03 a 37,40 N e de 115,46 a 110,24 O, com Las Vegas, a Hoover Dam e Kingman dentro. O vermelho ocupa **16,8 %**.
- **A seta vai sobre as rodovias de verdade**: a geometria do HPMS 2025 (FHWA), dos arquivos do leitor B em
  `midia/arizona-strip/fontes/b/`. Os cortes são os mesmos marcos de milha da conta dele (`fatos-b.md` §2.1):

  | Rodovia | Trecho | Milhas |
  |---|---|---:|
  | AZ 389 | | 1,40 |
  | UT 59 | | 22,25 |
  | UT 9 | | 9,61 |
  | I-15 | Utah | 15,96 |
  | I-15 | Arizona, só ao sul de 37,0 N (a correção do leitor B) | 29,36 |
  | I-15 | Nevada, até o Spaghetti Bowl | 80,82 |
  | I-11 | | 37,04 |
  | US 93 | | 69,77 |
  | **Soma** | | **266,2** (a do leitor B) |

  A linha desenhada tem 268,1 mi com as pontas até os centros.
- **A linha foi alisada** para a seta não tremer: reamostrada a cada 6 px e passada por uma gaussiana de 14 px. A seta fica a no máximo
  **4,6 px do palco (0,84 km)** da estrada, e a mediana é 0,8 px.
- **O corpo da seta é um traço** (`desenhar_setas_traco`, no `mapa.py`). Com o polígono da m1, a volta de Las Vegas dobrava e deixava um
  dente.
- **As pontas são as da medida** (o cético, `rotas.py`; o leitor B): o centro de Colorado City, **num ponto sem nome**, e a sede do condado
  em Kingman, com o rótulo KINGMAN.
- **Os rótulos pequenos** são UTAH, NEVADA, ARIZONA e KINGMAN.
- **A caixa**, embaixo, traz "265" em vermelho (250 px) e "MILES" em branco (172 px). Vai de 46 % a 71 % da largura e fica a 66 px do
  vermelho.
- **O risco do cético (K3)**: "265 MILES" sem "about" fica 1 % abaixo do medido (266,2), e vende o isolamento, que é o ângulo do enxame.

## As medidas, lado a lado

| | m3 | m1 | m2 (reserva) |
|---|---|---|---|
| vermelho (fração da imagem) | 16,9 % (Utah 19,6 %) | 27,5 % | 16,8 % |
| peças sobre o vermelho | 6,6 % (as duas setas, de propósito) | 0,19 % (o começo da seta) | 1,4 % (a seta na saída e na I-15) |
| maiúscula da caixa no 168 | UTAH 13,8 px; WANTED IT 8,6 px | STILL 6,6 px; ARIZONA 8,7 px | 265: 11,9 px; MILES 8,2 px |
| o texto da faixa de baixo acaba em | 44 % da largura | 72 % | 69 % |
| canto da duração (320 × 320 do palco) | livre (alfa 0) | livre | livre |
| luminância média | 140 | 136 | 147 |
| JPG de 1280 | 490 KB, q 95 | 524 KB, q 95 | 551 KB, q 95 |

Para comparar: o "CUT OFF" da busca tinha 9,8 px de maiúscula no 168.

## A conferência

**Os três tamanhos, com o título embaixo** (`folha.png` e `folha-reserva.png`, com o selo de duração desenhado). Olhei cada uma a 1280, a
320 e a 168, e a 168 ampliada 4 vezes.
- **A palavra lê no 168 nas três.** A m3 é a que lê melhor: "UTAH" tem 13,8 px.
- **O selo não cobre letra** em nenhuma.
- **Os rótulos pequenos** (estados, cidades, o cânion) são de 1280 e não leem no 168.

**A geografia** (`conferir.py` → `conferencia.json`; sem rede, contra as cópias que o cético baixou do TIGERweb em
`out/_pautas/video-8/_trabalho/cetico-arizona-strip/`):
- **A Strip** são os dois CCDs que o cético somou (Kaibab Plateau e North Mohave), pelo Census Cartographic Boundary 2025 (1:500k).
  - Contra a geometria do TIGERweb (camada 20), a área é 20.377 contra 20.382 km², e a diferença simétrica, 31,7 km² (0,16 %).
  - O contorno de fora fica a no máximo **0,22 km** (1,2 a 1,5 px do palco).
  - A união dos dois CCDs do TIGERweb tem 5 frestas internas (0,025 km²) na linha entre os condados, do arredondamento a 4 casas. Fechei
    as frestas: elas não são contorno.
- **As divisas**, pelo Census 1:500k, contra as do TIGERweb (camada 80), no recorte das três:
  - AZ–UT: no máximo 0,12 km;
  - AZ–NV: 0,17 km;
  - NV–UT: 0,09 km;
  - todas abaixo de 1,2 px do palco;
  - CA–NV e AZ–CA não estão no arquivo do cético e não foram medidas. Só aparecem no canto da m2 e da m3.
- **A Strip é a terra ao norte do rio.** Dos 2.322 vértices do rio do OSM entre Lees Ferry e o lago Mead:
  - 98 % ficam a menos de 500 m do contorno da Strip, e a mediana é 14 m;
  - o máximo, 1,56 km, fica no canto sudoeste, no lago Mead (Gregg Basin). Ali o OSM traz o canal de hoje, e o limite do Census segue o
    leito do lago. A água pintada por cima esconde a emenda.
- **As setas:**
  - a da m2 segue a estrada (acima);
  - a da m1 é esquemática e diz isso;
  - as da m3 não representam estrada.
- **Colorado City** (só a m2, sem nome): o ponto do cético fica a 1,77 km do centróide do TIGERweb (~10 px do palco). Os dois ficam dentro
  da Strip.
- **Nada de Short Creek, de gente ou de foto.** O nome "Colorado City" não está em nenhuma imagem.

## As fontes, as licenças e o crédito

| Camada | Fonte | Licença e crédito |
|---|---|---|
| o relevo e a altitude (m1, m2) | NASA GIBS, `ASTER_GDEM_Greyscale_Shaded_Relief` e `ASTER_GDEM_Color_Index` (com o colormap da GIBS), em `out/_pautas/video-8/miniaturas/_bases/` (sha256 `d7c208e9…` e `128c0c21…`) | aberta: o GetCapabilities diz "Fees: none" e "AccessConstraints: none" (lido em 17/11 para o vídeo 7). O ASTER GDEM é da NASA e do METI. A GIBS pede o reconhecimento (abaixo). |
| o relevo e a altitude (m3) | os mesmos produtos da GIBS, num recorte maior (117,0 a 110,8 O, 35,1 a 38,25 N; 5580 × 3536 px; ~124 m de Mercator por px, como a base da busca), em `_bases/` (`eab3301f…` e `12db6a29…`). 100 % dos pixels da altitude casaram com o colormap. | a mesma |
| a Strip | U.S. Census Bureau, Cartographic Boundary Files 2025, `cb_2025_04_cousub_500k` (Kaibab Plateau CCD + North Mohave CCD) | domínio público (obra do governo dos EUA). Crédito de cortesia: U.S. Census Bureau |
| os estados e as divisas | U.S. Census Bureau, `cb_2025_us_state_500k` | domínio público |
| o rio e os lagos | OSM, pela Overpass (`arizona-strip-osm-agua.json`, base de 2026-11-18T00:54Z) | ODbL. **"© OpenStreetMap contributors"**, com openstreetmap.org/copyright na descrição |
| a estrada (só m2) | FHWA, HPMS 2025 (os DOTs de AZ, UT e NV), arquivos do leitor B | domínio público (governo dos EUA). Crédito, se for à tela: "FHWA HPMS" |
| St. George e Kanab (m3) | Natural Earth 10m populated places (o cache da máquina) | domínio público |
| as letras | `marca/fontes/inter` | SIL OFL |

**Na descrição do vídeo, se uma delas for:**
- "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science
  Data and Information System (ESDIS). Elevation: ASTER GDEM (NASA/METI).";
- "© OpenStreetMap contributors" (openstreetmap.org/copyright);
- U.S. Census Bureau (cortesia);
- e, com a m2, FHWA HPMS.

**Fora:** nada da MapTiler, nenhum serviço pago, nada desenhado à mão nem por IA, nenhum vidIQ, nenhum navegador.

**Os pedidos de rede: 2**, os dois do `m3-bases.py`, à GIBS, um por vez e com o User-Agent do canal, às 05:25 e às 05:26 de 18/11
(08:25Z e 08:26Z). As respostas foram 200, image/png.
- **Por que foram precisos:** a base da busca vai só até 115,8 O. Com ela, Nevada deixava ~740 px entre a borda e a divisa, pouco para a
  caixa de duas linhas.
- **A GIBS não é site novo:** o robots.txt dela deu 404 na leitura do vídeo 7.
- A m1 e a m2 não pediram nada.

## O que ficou fraco

- **m3:**
  - **o canto de cima à esquerda é amarelo vazio**, só com "NEVADA". É o preço de a caixa caber sobre Nevada;
  - **o vermelho tem 16,9 %**, longe dos 27,5 % da m1, e a Strip passa a ~70 px da borda direita. O lago Powell quase sai do quadro;
  - **as duas setas são curtas** (~400 px), porque St. George e Kanab ficam a 5 e 11 km da divisa. Também são quase iguais na forma;
  - **"WANTED IT" tem 8,6 px no 168.** Lê, mas abaixo do "CUT OFF" da busca (9,8);
  - **o risco do §8 continua**: lido a frio, o texto pode soar como notícia de agora. O título embaixo, no passado, ajuda; só o teste dos
    leitores diz;
  - **os pontos de St. George e Kanab são do Natural Earth.** Não os conferi contra o Census, porque não há cópia local com coordenadas.
- **m1:**
  - **"STILL" tem 6,6 px no 168**: é a palavra mais fraca das três miniaturas. "ARIZONA" tem 8,7;
  - **"ARIZONA" aparece duas vezes embaixo**: o rótulo pequeno, na ponta da seta, e a caixa ao lado;
  - **a seta é esquemática** e passa por cima do lago Mead;
  - **o rótulo do cânion ficou na horizontal**, sob o trecho do meio. Inclinado, não cabia entre o rio e a caixa.
- **m2 (reserva):**
  - o número vende o isolamento (o K3);
  - **sem o nome, o ponto de partida não diz de onde sai**. Só a seta diz;
  - **a volta de Las Vegas e da Hoover Dam fica embolada** no canto esquerdo.
- **As três:**
  - **o cânion lê como cânion só a 1280.** A 320 e a 168, é a linha da água e a borda do vermelho. O rótulo nomeia, mas não lê no 168;
  - **o selo da duração** foi desenhado com a fonte do canal, num tamanho aproximado do do YouTube. A medida de verdade é a do app.

## Para a Sala (git)

- **O `.gitignore` não deixa de fora os PNGs de `roteiros/`**: ele ignora só `out/**/*.png`. Se a Sala commitar a pasta, sobem:
  - `folha.png` (3,2 MB);
  - `folha-reserva.png` (1,7 MB);
  - as prévias de 320 e 168;
  - os JPGs (~0,5 e ~1,1 MB cada).
- **`_bases/` fica fora**, pela linha 93. São os 31 MB das duas bases novas.
- **Nada pessoal** em arquivo nenhum. O User-Agent dos pedidos leva o contato do canal, que só vai gravado como "o do canal" nos `.json`.
