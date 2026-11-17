# Miniatura A do vídeo 7 (`rio-columbia`): "$37.6M A YEAR", no estilo das referências

17/11/2026, refeita depois que o Lucas achou a anterior "muito fraca" e mandou quatro prints de referência
(`out/rio-columbia/_tmp/miniatura/referencias/`): da The Geo Lens, o Lake Erie, Miami, a costa de Washington e Michigan; o Ruanda e
Burundi; do Geography by Geoff, a Louisiana e as San Juan. A versão de antes (satélite, laranja do canal, anel, rio até Portland) está no
git, no commit `ce3538b`.

Feita por `base-A.py` sobre `mapa.py` (o mesmo mapa da B; o teste do YouTube passa a medir só o texto), sem rede, numa passada e um
ajuste.

## A composição

- **O mapa:**
  - O Noroeste do Pacífico, de 46,0° N a 53,15° N e de 128,4° O a 108,8° O (16:9 em Mercator, 855 m por px do palco), do Kinbasket ao
    norte do Oregon, do Pacífico às Rochosas.
  - A terra em relevo sombreado amarelo-dourado.
  - O mar e os lagos em azul, com a textura leve da batimetria.
  - A parte canadense da bacia do Columbia em vermelho, com o relevo por baixo e contorno branco fino. Ela vai de x 952 a 1871 e de y 58
    a 861 no palco: 9 % da imagem, um pouco acima do centro.
  - O Arrow em ciano, com contorno branco fino. O polígono do OSM foi engrossado 5 px, porque o lago tem 2 a 5 px nesta escala.
  - A fronteira em branco fino.
  - "CANADA" e "U.S." pequenos (Inter 800, 62 px), a leste da bacia.
- **A caixa preta**, no alto à esquerda: "$37.6M" e "A YEAR" em vermelho, Inter 900 a 196 px. A maiúscula tem 143 px (9,4 px no 168).
- **A linha do K9**, dentro da caixa, sob o número: "Starting value, indexed to inflation", em branco, Inter 600 a 44 px (16 px na
  1280). `MINI_K9=0 python -X utf8 -B roteiros/rio-columbia/miniatura/base-A.py` a tira.
- **A seta** branca, grossa e curva, com contorno escuro e sombra, vai da caixa até a margem oeste do Arrow (662 px).
- **O canto da duração** (320 × 320 embaixo à direita) está livre: alfa máximo das peças 0.
- **As cores** são as das referências, medidas nos prints, não o `--destaque` do canal (a Sala: "o `--destaque` fica para o vídeo"). Elas
  ficam no topo de `mapa.py` (`VERMELHO`, `AMARELO`, `AZUL`, `CIANO`, `TEXTO_VERMELHO`).

## A fonte e a licença de cada camada

| Camada | De onde vem | Licença e crédito |
|---|---|---|
| o relevo | `out/rio-columbia/_media/base/aster-relevo-cinza-bacia.png` (4800 × 3039, sha256 `064ba535…`): ASTER GDEM, camada `ASTER_GDEM_Greyscale_Shaded_Relief`, pelo WMS da NASA GIBS, EPSG:3857, no recorte da base de antes. Foi baixado em 17/11/2026, num pedido, com o User-Agent do canal; o pedido inteiro está no `.png.json` | aberta. O GetCapabilities diz "Fees: none" e "AccessConstraints: none", e a GIBS diz "NASA promotes full and open sharing of data". Os metadados da camada não têm licença nem atribuição. A GIBS pede o reconhecimento: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS)." O ASTER GDEM é da NASA e do METI do Japão; a política de uso do LP DAAC não foi lida |
| a textura do mar | `out/rio-columbia/_media/base/bluemarble-bacia-relevo.png` (NASA Blue Marble com batimetria, GIBS; sha256 `a544f577…`) | domínio público (NASA); o mesmo reconhecimento da GIBS |
| a terra e o mar | Natural Earth 1:10m, admin-1 (os estados e províncias do Canadá e dos EUA), do cache da máquina (`~/.regie/geo/natural-earth/`) | domínio público (Natural Earth) |
| os lagos | Natural Earth 1:10m, lakes (sem o Upper e o Lower Arrow), e o OSM do disco: `lago-kinbasket`, `lago-koocanusa` e `lago-duncan` | NE: domínio público. OSM: ODbL, com o crédito do OpenStreetMap na descrição do vídeo |
| o Arrow (ciano) | `_media/geo/lago-arrow.json` (OSM) | ODbL, com o crédito na descrição |
| a bacia (vermelho) | `_media/geo/bacia-columbia-canada.json` (USGS WBD ∩ o lado canadense) | domínio público (USGS) |
| a fronteira | `_media/geo/fronteira-canada-eua.json` (U.S. Census, Cartographic Boundary 2025) | domínio público |
| as letras | `marca/fontes/inter` (Inter) | SIL OFL |

Não entra MapTiler, satélite, nada desenhado à mão nem por IA, e os scripts não fazem pedido de rede. Para a descrição do vídeo: o
reconhecimento da GIBS (acima) e o crédito do OpenStreetMap, que já está lá.

## Os pedidos à GIBS nesta rodada (um por vez, com o User-Agent do canal)

1. O GetCapabilities do WMS EPSG:3857, para achar a camada: `ASTER_GDEM_Greyscale_Shaded_Relief` existe.
2. O GetMetadata da camada, para ler a licença e a atribuição. Não havia nenhuma das duas.
3. O GetMap do relevo.

A máscara da água não precisou de pedido: veio do Natural Earth do disco. As cópias estão em `out/rio-columbia/_tmp/miniatura/gibs/`.

## O ajuste

- **Na 1ª passada**, o relevo cinza cru (mediana 139, quase tudo entre 120 e 160) deixou a terra lisa, e o mar saiu claro.
- **No ajuste**:
  - o relevo ganhou contraste local e foi esticado entre os percentis 2 e 98 da terra;
  - o azul do mar escureceu;
  - o quadro foi para 46,0–53,15° N, com o centro em 118,6° O, e a bacia passou para a direita da caixa;
  - o K9 subiu de 38 para 44 px.

## O que vi nos três tamanhos

- **1280:** o número, "A YEAR", o K9, a seta, a bacia vermelha com relevo, o Arrow ciano e "CANADA"/"U.S." leem. O canto está livre.
- **320:** a caixa, a bacia, a seta e o Arrow leem. O K9 vira um traço, e "CANADA"/"U.S." leem pequenos.
- **168:** "$37.6M A YEAR" lê, a bacia vermelha lê, e a seta e o Arrow ficam no limite.

## A comparação com as referências (`out/rio-columbia/_tmp/miniatura/folha-comparacao.png`, todas a 320)

- **No mesmo estilo:** as cores, a caixa preta com o vermelho, a seta branca com sombra e o relevo.
- **Abaixo das referências, em três pontos:**
  - **O assunto é menor.** Nas referências, o território ocupa de um terço a metade da imagem; aqui, a bacia ocupa 9 %. O enquadramento
    pedido (do Kinbasket até perto de Portland, do Pacífico às Rochosas) deixa a metade de baixo para a terra amarela dos EUA. Se a
    Sala quiser o assunto maior, a mudança é cortar o sul (por exemplo, `MINI_LAT_S=47.5`), perdendo o Oregon.
  - **O relevo é mais fraco** que o das San Juan e o da Louisiana, que têm sombra mais funda.
  - **O destaque ciano é um fio:** o Arrow é um lago estreito, e o Erie é um lago largo.
- **O risco da pauta continua:** dinheiro sozinho pode ler como escândalo. O K9 só ajuda a 1280.

- **3ª rodada (17/11/2026, acabamento, pedido da Sala):** o quadro fechou na bacia (`MINI_LAT_S` 48.62, `MINI_LAT_N` 52.41, `MINI_LON_C` −119.15; perde-se o Oregon e a ponta norte do Kinbasket), e o vermelho foi de 9 % a 31,3 % da imagem, com a fronteira e "CANADA / U.S." numa faixa embaixo, a oeste da bacia; o relevo ganhou volume (o cinza suavizado, misturado com a sombra larga, contraste local a 26 px e a cor por três pontos: sombra marrom, a cor da referência, luz creme) e a bacia uma sombra escura por fora; o Arrow virou uma mancha ciano (fechado, engrossado 10 px, contorno branco de 5 px), que lê a 320 e a 168; a caixa subiu a Inter 900 a 232 px (sem cobrir o vermelho: 0,46 % de peças sobre a bacia, só a seta), com o K9 legível a 1280; a seta engrossou (26→52 px, cabeça 118 × 158); o canto da duração segue livre (alfa 0). Mesmas bases do disco, mesmos sha256, nenhum pedido de rede.
