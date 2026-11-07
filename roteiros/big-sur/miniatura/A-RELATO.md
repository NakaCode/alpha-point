# Miniatura A do vídeo 5 (`big-sur`): "ONLY 1,474"

06/11/2026. Feita por `base-A.py`, sem rede, em três passadas: a primeira e duas rodadas de ajuste. O conceito é o da pauta
(`pautas/2026-11-01-video-5-big-sur.md` §8, item 1), e a receita é a com pílula (`marca/embalagem.md` §1.1 e §3).

## A composição

- **A base** é a costa central da Califórnia no satélite, de ~123,0° a ~120,3° W e de ~36,9° a ~35,7° N: a Baía de Monterey no alto,
  a serra de Santa Lucia, o vale do Salinas e o mar à esquerda.
- **O distrito** de censo de Big Sur vai pintado de `--destaque` a 88 %, com o relevo por baixo, contorno `--tinta` de 9 px e uma
  sombra escura por fora.
- **O herói** fica no mar, à esquerda, em duas pílulas `--rotulo`: "ONLY" em `--tinta` e "1,474" em `--destaque`, na cor do
  distrito. A letra é Barlow Condensed 800 a 300 px.
- **As cidades** entram como "San Francisco" no alto e "Los Angeles" embaixo, em pílulas Inter 700 a 96 px. Cada pílula manda uma
  seta curva `--tinta` (34 px) a uma ponta do distrito: a de SF tem 427 px, e a de LA, 440 px.
- **O porquê:** com o título embaixo ("…as Empty as Wyoming"), a leitura é "entre LA e SF, só 1.474 pessoas aqui". A miniatura não
  nomeia Big Sur nem repete o título.
- **As duas metrópoles ficam fora da base.** As pílulas vão na borda, no rumo verdadeiro: a reta do centro do distrito ao centroide de
  área de cada metrópole (`metro-*.json`, em Mercator) corta a pílula de SF em x 1093 (a pílula vai de 670 a 1416) e a de LA em x 1895
  (de 1542 a 2200). A pílula de LA foi puxada para a esquerda do canto da duração, e a reta continua dentro dela.

## A geometria, projetada e conferida

- **A projeção.** O `ccd-big-sur.json` (GEOID 0605390235) é projetado em Mercator pela `janela_3857` e pelo `tamanho` lidos do
  `.png.json` da base. O sha256 da base confere antes de usar.
- **O recorte.** O quadro é um recorte da própria grade da base (px 481–3393 × 575–2213, a 0,879 px de palco por px da base), sem
  girar nem deformar.
- **As 20 rochas do mar** do polígono (até 0,015 km²) recebem o preenchimento, mas não o contorno, que as faria virar pontos.
- **A conferência, na grade de 100 m da base.** A água da base crua cai a 0,02 % dentro do distrito no deslocamento 0. Com o
  polígono deslocado 8 px, ela sobe a 4,2 % (oeste) e a 3,0 % (sul).
  - A nota do anel externo é máxima a 2 px a oeste (200 m), não a 0. Leio isso como a arrebentação e o pixel misto da costa, que o
    classificador não conta como água.
  - Os dois zooms 2× da `sobreposicao-contorno.png` (perto de Point Sur e na ponta sul) mostram o contorno em cima da linha da costa.
  - Olhei a sobreposição da primeira versão. O script a regrava a cada passada, e os zooms e a medida são da grade da base, que não
    muda com o quadro.

## O que vi nos três tamanhos

- **1280×720:** tudo lê. O distrito tem relevo dentro, e as setas não cobrem nada do distrito (0 % coberto pelas peças). No canto de
  320×320 da duração não há peça (alfa máximo 0).
- **320×180:** o herói, a faixa laranja, as duas setas e os nomes das duas cidades leem.
- **168×94** (no #0f0f0f do feed, real e ×4): "ONLY 1,474" lê inteiro, e a faixa laranja tem 45 px no eixo (o mínimo pedido era ~30).
  As duas setas leem como setas. **Os nomes das cidades somem** (~6 px): ali só fica "ONLY 1,474" e uma faixa laranja na costa com
  duas setas.
- A luminância média é 99/255 (a C do Atlântico tinha 95, e a A2, 70).

## As rodadas

- **r0:** o distrito tinha 39 px no 168, a seta de SF tinha 375 px (abaixo dos 400 da receita), e a terra estava clara demais
  (luminância 108).
- **r1:** o quadro apertou (45 px), a seta de SF saiu da ponta direita da pílula (427 px), e a terra ficou com ganho 1,2 e saturação
  0,9.
- **r2:** a ponta da seta de LA caía ao lado do entalhe retangular do sul do distrito (geometria real do Census) e parecia apontar para
  ele. Ela foi para o flanco leste, um pouco acima, e a saturação voltou a 0,95.

## O que ficou fraco

- **No 168, SF e LA não se leem.** O "entre duas metrópoles" depende do 320 para cima, ou do título.
- **A pílula de SF fica sobre a Baía de Monterey.** Quem não conhece a costa pode achar que San Francisco é ali, logo acima.
- **"ONLY 1,474" não diz "pessoas".** Quem dá a palavra é o "Empty" do título.
- **As setas podem ser lidas como "gente de SF e LA vem para cá".** É a leitura de turismo, que o vídeo não nega, mas não é o ponto.
- **Defeitos da base que o tratamento não tirou:**
  - um pouco do xadrez agrícola do Vale Central e nuvens pequenas à direita;
  - a emenda das passagens do Landsat no mar e uns pontos de reflexo do sol embaixo, à esquerda. Nada disso aparece no 320 nem no 168.
- **Não houve a banca de quatro lentes nem leitores a frio** (§3, "Conferência antes de mostrar ao dono"): o que está aqui é só o meu
  olhar.

## Os arquivos e as olhadas

- **Aqui:** `base-A.py`, `miniatura-A-2560.jpg` (1,17 MB) e `miniatura-A-1280.jpg` (466 KB, qualidade 95).
- **Em `out/big-sur/_tmp/miniatura/`:**
  - as prévias `previa-1280.png`, `previa-320.png` e `previa-168.png`;
  - `ver-pequenas.png`, com a de 168 real e ×4 e a de 320 sobre o #0f0f0f;
  - `sobreposicao-contorno.png`;
  - `A-pontos.json`, com todas as medidas.
- **Crédito na descrição:** a base é Landsat/USGS (domínio público), e o texto já está no `.png.json` dela. Nada da MapTiler nem do OSM.
  Pedidos de rede: 0.
- **Olhei 6 imagens:** 1 sobreposição, 3 quadros das pequenas e 2 de 1280.

---

# A2: a A na composição que o Lucas preferiu (rodada 2, 06/11/2026)

O Lucas viu a A ao lado de três imagens que ele gerou numa IA, só para comparar (nelas o mapa é inventado). A preferida dele tinha:
- o texto enorme e sem caixa, com brilho escuro atrás;
- os nomes das cidades em CAIXA ALTA, em pílulas claras;
- setas brancas grossas;
- o distrito grande no quadro;
- o satélite com mais contraste.

A A2 (`base-A2.py`) leva a A para essa composição sem inventar mapa nem cor. A A continua como estava. Foram uma passada e um ajuste.

## O que mudou da A para a A2

- **O quadro** fechou de 0,879 para 1,25 px de palco por px da base (~80 m por px). Ele vai de ~122,7° a ~120,8° W e de ~36,6° a ~35,8° N.
  - O distrito passou de 45 para **64 px no 168**. A caixa dele ocupa 56 % da altura da imagem.
  - A base é ampliada 1,25×, com uma máscara de nitidez leve. Não há detalhe inventado.
- **O herói** perdeu a pílula e ficou bem maior: Barlow Condensed 800 a 415 px. "ONLY" vai em `--tinta`, e "1,474", em `--destaque`.
  - A maiúscula tem 298 px (19,5 px no 168; antes, ~14).
  - O brilho escuro atrás das letras é a forma delas engordada e desfocada. Em volta das letras, a luminância cai para ~15/255.
- **As cidades** vão em "SAN FRANCISCO" e "LOS ANGELES", em pílulas `--tinta` com letra `--tinta-escura`.
  - A letra é Barlow Condensed 800 a 150 px, com a maiúscula de 13,5 px no 320. **Isso foge da tabela da §3**, que pede Inter 700 a 96
    px: a caixa alta da referência só cabe e lê a 320 na condensada da marca.
- **As setas** passaram a grossas e cheias: o corpo engrossa de 46 a 84 px, e a cabeça é um triângulo de 165 × 215 px, em
  `--tinta`, com sombra. A de SF tem 524 px, e a de LA, 486.
- **A base** ficou com mais relevo e mais contraste (CLAHE 3,0 na terra, ganho 1,22, contraste 1,15) e com uma vinheta de 50 % nas bordas.
  - A saturação fica em 1,0, a do real, e a cor da terra é a do Landsat de outubro.
  - O mar ganha um piso de luz azul. A luminância média final é 107 (a A tinha 99).

## O que não mudou

- **O distrito** continua sendo o polígono do Census, projetado pelas mesmas funções da A (a mesma `janela_3857` da base). A
  conferência da costa foi feita na A, na grade da própria base, e vale igual: a A2 só muda o recorte e a escala.
- **O rumo verdadeiro**, agora medido do ponto onde cada seta chega:
  - **SF:** a seta chega ao flanco nordeste do distrito. A reta dali ao centroide da metrópole (−101°) corta a pílula em x 1086–1117 (a
    pílula vai de 1071 a 2007).
  - **LA:** a seta chega à ponta sul. A reta (33°) corta a pílula em x 1857–2105 (de 1318 a 2121).
- **A pílula de SF não fica sobre a baía.** A água sob ela é 0,02 %.
  - Na primeira tentativa, com a seta chegando à ponta norte, a pílula pegava a Carmel Bay (23 % do terço esquerdo).
  - A seta passou a chegar ao flanco nordeste, a pílula foi para leste, e o quadro desceu até a Baía de Monterey sair. Só Monterey e a
    península ficam à esquerda da pílula, no alto.
- **O canto da duração** está livre (alfa máximo 0), e nenhuma peça cobre o distrito.

## O ajuste

- Na primeira A2, a seta de LA chegava ao flanco leste, ao lado do entalhe retangular do sul do distrito (geometria real do Census),
  como na r0 da A.
- Ela passou a mirar o ponto mais ao sul do polígono, medido na máscara, e sai da ponta direita da pílula. As duas setas engrossaram.

## O que vi nos três tamanhos

- **1280:** tudo lê. O distrito tem relevo dentro, e as setas e as pílulas não encostam nele.
- **320:** o herói, o distrito, as setas e os dois nomes leem.
- **168:** "ONLY 1,474" lê com folga, e o distrito é uma faixa laranja grande. As pílulas leem como pílulas brancas com letra; os nomes
  ficam no limite (~7 px).

## O que ficou fraco na A2

- **O entalhe retangular do sul do distrito** aparece no 1280 como um defeito, mas é a forma real.
- **A seta de LA é um gancho** (sobe e entra pela direita na ponta sul): lê, mas é menos fluida que a de SF.
- **A terra é bege-acinzentada** (outubro, o real), menos viva que o verde da imagem de IA.
- **A base ampliada 1,25×** fica um pouco macia no 2560. No 1280 não se nota.
- **As letras das cidades fogem da tabela da §3** (Barlow em vez de Inter).
- Continua sem a banca de quatro lentes e sem leitores a frio.

## Os arquivos e as olhadas da rodada 2

- **Aqui:** `base-A2.py`, `miniatura-A2-2560.jpg` (1,34 MB) e `miniatura-A2-1280.jpg` (534 KB).
- **Em `out/big-sur/_tmp/miniatura/`:**
  - as prévias `A2-previa-1280.png`, `A2-previa-320.png` e `A2-previa-168.png`;
  - `A2-ver.png`, com os três tamanhos sobre o #0f0f0f;
  - `A2-pontos.json`, com as medidas.
- **As olhadas** da rodada 2, contando a B, foram 6 de 10: a imagem de IA, a foto de Mud Creek, 2 quadros da A2 e 2 da B.
