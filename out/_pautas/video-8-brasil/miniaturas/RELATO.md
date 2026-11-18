# As miniaturas das duas florestas (vídeo 8, Brasil): o relato (18/11/2026)

O pedido está em `out/_pautas/video-8-brasil/pedido-miniatura-florestas.md`. O título embaixo, nas duas, é o que o cético defende:
*Why the Amazon Doesn't Touch Brazil's Other Rainforest* (`cetico-duas-florestas.md` §6). O estilo e o código são os da Strip
(`pautas/arizona-strip/_trabalho/pedido-miniaturas.md`; `marca/embalagem.md` §3; as referências em `out/rio-columbia/_tmp/miniatura/referencias/`).

## Os arquivos

Tudo está em `out/_pautas/video-8-brasil/miniaturas/`:

| Arquivo | O que é |
|---|---|
| `folha.png` | As duas lado a lado, como o YouTube mostra. Cada uma vai a 1280 com o título embaixo, a 320 com o título embaixo e a 168 com o título ao lado. Também vai a 168 ampliada 3 vezes, só para conferir a palavra. Todas levam o selo de duração. |
| `florestas-m<n>-1280.jpg`, `-2560.jpg`, `-320.png`, `-168.png` | As duas miniaturas e as prévias. |
| `florestas-m<n>-pontos.json` | As medidas de cada uma: o quadro, as bases com o sha256, o vão conferido, as frações, a caixa, a seta, os rótulos e a conferência da costa. |
| `florestas.py` | O script das duas. Ele monta o mapa uma vez e grava a m1 e a m2. Não faz pedido de rede. |
| `florestas-bases.py` | Os 3 pedidos de rede à GIBS (abaixo). |
| `mapa.py`, `bases.py`, `folha.py` | Cópias das de `roteiros/arizona-strip/miniatura/`, mudadas aqui. O topo de cada uma diz o que mudou. No `mapa.py` entraram `ler_shp()`, `ler_geojson()`, `seta_dupla()` e `lonlat()`, e saiu o HPMS. |
| `_bases/` | As 3 bases novas, cada uma com o `.json` de procedência. Os esboços e as variantes ficam em `_bases/_tmp/`. A pasta fica fora do git (`.gitignore`, linha 102). |

**Para refazer**, da raiz do canal e sem rede:

```
python -X utf8 -B -P out/_pautas/video-8-brasil/miniaturas/florestas.py
python -X utf8 -B -P out/_pautas/video-8-brasil/miniaturas/folha.py
```

Rodar de novo dá o mesmo arquivo: conferi pelo sha256 dos dois `-2560.jpg` (`2f29c372…` e `be425808…`).

Nada em `out/_pautas/video-8/miniaturas/` nem em `roteiros/arizona-strip/miniatura/` foi editado nem rodado. De `out/_pautas/video-8/miniaturas/_bases/`, só
o colormap da GIBS foi lido, sem mover.

## O mapa (o mesmo nas duas)

- **O quadro** vai de 23,4 a 8,0 S e de 61,27 a 32,73 O, em Mercator 16:9: 1.241 m de Mercator por px do palco, ou ~1,19 km de chão.
  - A Amazônia fica no canto de cima à esquerda, com **13,2 %** da imagem.
  - A Mata Atlântica fica na faixa da costa e no sudeste, com **13,6 %**.
  - O mar fica à direita, com 21,6 %.
  - O vão fica à esquerda do meio.
- **As rodadas do quadro** (esboço plano, sem relevo):
  - de 25 a 5 S, com a ponta do Nordeste, a seta tinha 369 px e o vermelho, 9,9 %;
  - de 24 a 2 S, a seta tinha 338 px e o vermelho, 7,5 %;
  - fiquei com o quadro mais apertado, em que a seta tem **466 px** (18 % da largura).
- **As florestas** vêm da geometria do mapa de biomas do IBGE, edição 2025 (shp `v20250911`, o mesmo que o cético mediu), simplificada a 0,001°
  (~110 m, um décimo do px). A Mata Atlântica vai em **vermelho**, com o relevo por baixo, contorno branco de 5 px e sombra por fora. A Amazônia
  vai em **ciano**: o relevo pintado em ciano e misturado ao amarelo a 85 %, como a Utah da Strip, com contorno branco de 5 px.
- **A terra** é a dos vetores:
  - o Brasil é a união dos 6 biomas;
  - os vizinhos no quadro (Bolívia e Paraguai) vêm do Natural Earth 1:10m, com 0,05° de folga para fechar a fresta da fronteira;
  - a fronteira vai em branco fino;
  - o mar é o resto, em azul, com a textura leve da batimetria da Blue Marble.
- **O relevo amarelo** mistura o cinza do ASTER GDEM (20 %) com o sombreado calculado da altitude do ASTER GDEM (80 %).
  - O sombreado leva **exagero vertical de 6×** e duas luzes (315° e 270°).
  - Sem o exagero, o planalto, visto a ~1,2 km por px, fica quase liso. O cinza da GIBS, nessa escala, é quase plano (`_bases/_tmp/florestas-aster-relevo-ver.png`).
- **Os rótulos pequenos**, de 1280: AMAZON, no ciano, e ATLANTIC / FOREST, em duas linhas, no vermelho.
  - Numa linha só, o nome não cabe inteiro no vermelho em lugar nenhum do quadro: a faixa mais larga tem ~570 px, e o nome, 588.
  - Os dois ficam 100 % sobre a sua floresta, a pelo menos 23,6 px da borda.
  - `MINI_ROT_AM=0` e `MINI_ROT_MA=0` tiram os dois.
- **A seta branca de duas pontas** é reta e grossa: 72 px de corpo e cabeças de 140 × 196.
  - Vai de ponta a ponta do vão, recuada 6 px de cada lado para não comer o contorno branco.
  - Não passa sobre o ciano nem sobre o vermelho (fração 0).
  - Cada px dela no eixo vale 1,19 km.

## m1, "THE GAP"

- **A caixa preta** fica no amarelo de cima, à direita da ponta da Amazônia, de 40 % a 68 % da largura.
  - "THE" vai em branco (140 px). "GAP" vai em **amarelo** (280 px), a cor do vão, para ligar a palavra ao pedaço do mapa que ela nomeia, como
    o "UTAH" em ciano da Strip.
  - Leva o sublinhado vermelho das outras.
  - Fica a 35 px da Amazônia, a 35 px da Mata Atlântica e a 85 px da seta.
- **As rodadas da caixa**:
  - com "GAP" a 300 px, a caixa encostava no dente da Amazônia em cima (a 0 px) ou no vermelho à direita (a 0 a 12 px);
  - com 280 px, coube com folga dos dois lados;
  - variantes da cor da palavra: `MINI_COR_M1=vermelho|branco|ciano` grava em `_bases/_tmp/`.

## m2, "350 MILES"

- **A caixa preta** fica **no vão**, à direita da seta, como a cota de um desenho técnico, de 41 % a 64 % da largura.
  - "350" vai em amarelo (250 px) e "MILES" em branco (160 px).
  - Fica a 41 px da seta, a 40 px da Mata Atlântica (o fio do vale do Paranaíba, logo abaixo) e a 125 px da Amazônia.
  - Na 1ª rodada ela cobria a ponta do fio vermelho; subiu 70 px.
- **O número** é o do vão no mapa de biomas: 567,7 km = **352,8 mi**, arredondado para baixo.
- **A fonte do número** vai pequena, no canto de baixo à esquerda: "BIOME MAP: IBGE (2025)", Inter 800 a 34 px, sobre o Paraguai, a 84 px do
  vermelho.
  - O pedido não pedia. Pus porque o cético (§6) escreveu que "350 MILES" depende do mapa e, se for usado, leva a fonte na tela.
  - Só lê a 1280. `MINI_FONTE_M2=0` tira.

## As medidas, lado a lado

| | m1 | m2 |
|---|---|---|
| vermelho (Mata Atlântica) | 13,6 % | 13,6 % |
| ciano (Amazônia) | 13,2 % | 13,2 % |
| maiúscula da caixa no 168 | THE 6,7 px; **GAP 13,4 px** | **350: 11,9 px**; MILES 7,6 px |
| a caixa, na largura | 40 % a 68 % | 41 % a 64 % |
| peças sobre o vermelho | 2,6 % (o rótulo ATLANTIC FOREST, de propósito) | 2,6 % (idem) |
| peças sobre o ciano | 1,5 % (o rótulo AMAZON) | 1,5 % |
| canto da duração (320 × 320 do palco) | livre (alfa 0; é mar) | livre |
| luminância média | 130 | 132,5 |
| JPG de 1280 | 460 KB, q 95 | 472 KB, q 95 |

Para comparar com a Strip: "UTAH" tinha 13,8 px no 168, "WANTED IT" 8,6, "STILL" 6,6 e o "CUT OFF" da busca 9,8.

## A conferência

**Os três tamanhos, com o título embaixo** (`folha.png`, com o selo de duração). Olhei cada uma a 1280, a 320 e a 168, e a 168 ampliada 3 e 4
vezes.
- **A palavra lê no 168 nas duas**: "GAP" e "350".
- "THE" e "MILES" leem pior, mas leem.
- A seta de duas pontas lê como seta no 168 (~31 px de comprimento).
- O selo não cobre nada.
- Os rótulos pequenos e a fonte da m2 são de 1280 e não leem no 168.

**A geografia** (dentro do `florestas.py`, sem rede; em `pontos.json`, chaves `vao` e `costa_vetores_contra_aster`):
- **O vão, medido de novo**, por um caminho diferente do do cético: `nearest_points` no Albers de área igual do gerador (`_trabalho/geo_util.py`),
  sobre a geometria cheia, num recorte em volta do vão, e Vincenty no GRS80.
  - A Amazônia e a Mata Atlântica não se tocam.
  - Os pontos mais perto são **(52,2516 O; 13,4135 S)** e **(50,7052 O; 18,3210 S)**, cada um num vértice (0 m) e iguais aos do cético.
  - A distância é **567,7 km = 352,8 mi**.
  - O script para se algum dos três não bater.
- **A seta é reta no Mercator do palco.** A geodésica entre as duas pontas se afasta dessa reta no máximo **0,44 px**: medi na esfera, com um
  script de rascunho que não ficou na pasta.
- **As pontas da seta** caem no vão, a até 8 px de cada floresta: 6 px de recuo e o contorno.
- **A costa: os vetores contra o raster.** A terra dos vetores (IBGE + Natural Earth) foi comparada com a terra do ASTER (a GIBS dá o mar como
  sem dado).
  - Além de 4 px da costa, só **0,014 %** da terra dos vetores fica sem dado no ASTER, e 0,005 % do mar dos vetores tem altitude.
  - São 445 px ao todo. Não há desvio de registro entre o raster e os vetores.
  - O ponto mais longe fica no mar, a 98 px da costa, ao largo do Espírito Santo (38,32 O; 18,94 S). Ali o ASTER tem terra e os vetores, não. **Não
    investiguei** o que é. Não aparece, porque o mar se pinta pelos vetores.
- **A altitude**: 100 % dos pixels do índice de cor casaram com o colormap da GIBS (0 fora).
- **Nada de gente, de foto, de cidade nomeada** na imagem. Canarana e Quirinópolis não estão escritas: são só as pontas da seta.

## As fontes, as licenças e o crédito

| Camada | Fonte | Licença e crédito |
|---|---|---|
| a Mata Atlântica, a Amazônia e a terra do Brasil | IBGE, Biomas e Sistema Costeiro-Marinho do Brasil 1:250.000, **edição 2025** (zip `2025_Biomas-e-Sistema-Costeiro-Marinho-do-Brasil-1-250000_shp.zip`, sha256 `247b15c4…a1ea8f`, baixado pelo cético; o `.shp` extraído tem sha256 `324dba89…be5154`, medido aqui), em `midia/_pautas/video-8-brasil/cetico-duas-florestas/biomas2025/` | o diretório do IBGE diz "Todos os arquivos aqui disponíveis são públicos" (lido pelo gerador e pelo cético). Crédito: **IBGE, Biomas do Brasil (2025)**. Na m2, ele vai na tela como "BIOME MAP: IBGE (2025)" |
| os vizinhos e a fronteira | Natural Earth 1:10m Admin 0 (a cópia da pré-v1, `C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json`, sha256 `239eec57…` conferido contra o `manifest.json` dela) | domínio público; sem crédito obrigatório |
| o relevo e a altitude | NASA GIBS, `ASTER_GDEM_Greyscale_Shaded_Relief` e `ASTER_GDEM_Color_Index` (com o colormap da GIBS, de `out/_pautas/video-8/miniaturas/_bases/`, sha256 `75af600f…`), em `_bases/` (sha256 `353bbcc9…` e `1437d1cd…`; 5600 × 3839 px; 636 m de Mercator por px) | aberta: o GetCapabilities da GIBS diz "Fees: none" e "AccessConstraints: none" (lido em 17/11 para o vídeo 7). O ASTER GDEM é da NASA e do METI. A GIBS pede o reconhecimento (abaixo) |
| a textura do mar | NASA GIBS, `BlueMarble_ShadedRelief_Bathymetry`, em `_bases/` (sha256 `39100e3e…`) | domínio público (NASA), com o mesmo reconhecimento |
| as letras | `marca/fontes/inter` | SIL OFL |

**Na descrição do vídeo, se uma delas for:**
- "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science
  Data and Information System (ESDIS). Elevation: ASTER GDEM (NASA/METI). Blue Marble: NASA Earth Observatory.";
- "Biome boundaries: IBGE, Biomas do Brasil (2025)".
- Nada do OSM entrou, então não há crédito de OpenStreetMap.

**Fora:** nada da MapTiler, nenhum serviço pago, nada desenhado à mão nem por IA, nenhum vidIQ, nenhum navegador, nenhum `SendMessage`, nenhum
commit.

**Os pedidos de rede: 3**, os do `florestas-bases.py`, à GIBS, um por vez e com o User-Agent do canal.
- Os horários: 14:51:21Z, 14:51:49Z e 14:52:07Z de 18/11 (11:51 e 11:52 em Brasília).
- As respostas foram 200, image/png (16,4 MB, 12,7 MB e 34,0 MB).
- **Por que foram precisos:** nenhuma base do disco cobre o leste do Brasil nessa escala. A GEBCO do Atlântico cobre, mas a ~21 px por grau,
  ~570 px para o quadro inteiro.
- **A GIBS não é site novo:** o robots.txt dela deu 404 em 17/11/2026 (`out/rio-columbia/_tmp/miniatura/gibs-baixar.py`).
- O recorte (63 a 31 O, 5 a 26 S) tem folga em volta do quadro, para acertar o enquadramento sem pedir de novo.

## O que ficou fraco

- **As duas:**
  - **o vão só existe no mapa de biomas** (o K1 do cético). As duas miniaturas afirmam o vão em letra grande, e o mapa da Lei 11.428 põe os
    encraves do Nordeste a 85–135 mi da Amazônia. A m2 traz a fonte, mas a fonte só lê a 1280; a m1 não traz nenhuma;
  - **a Amazônia aparece só pela borda sul.** No 168, o ciano claro pode passar por água: é mais claro que o mar, mas da mesma família. O
    rótulo AMAZON só lê a 1280;
  - **a ponta de baixo da seta cai num fio fino do vermelho** (o vale do Paranaíba, no sul de Goiás), que é onde fica o ponto mais perto. No 168,
    a seta parece terminar numa mancha; o corpo do vermelho começa logo abaixo, a olho uns 60 px na 1280;
  - **não há o contorno do Brasil.** O quadro corta em 8 S, sem a ponta do Nordeste. Quem situa o lugar é o título, a costa e o rótulo
    AMAZON;
  - **o relevo amarelo é acidentado demais para o planalto**: tem exagero vertical de 6×. É o estilo das referências, mas no 168 vira textura;
  - **a Bolívia fica amarela** na borda esquerda, ao lado do ciano de Rondônia, porque o mapa do IBGE para na fronteira. É uma faixa
    estreita e pouco visível;
  - **o rótulo ATLANTIC FOREST entrega o nome** que o título esconde ("Brazil's Other Rainforest"). Fica a critério da Sala
    (`MINI_ROT_MA=0`);
  - **o selo de duração (15:00) é ilustrativo**: não há roteiro, e o cético estima de 13 a 16 minutos. O tamanho do selo é aproximado.
- **m1:** **"THE" tem 6,7 px no 168**: é a palavra mais fraca das duas. "THE GAP" também não diz entre o quê: depende da seta e do título.
- **m2:**
  - **"MILES" tem 7,6 px no 168**;
  - o número sem "about" fica 0,8 % abaixo do medido (352,8);
  - pela mesma razão do K1, a seção de comentários pode corrigir o número com o mapa da lei.

## Para a Sala (git)

- **O `.gitignore` deixa de fora os PNGs desta pasta** (linha 103): `folha.png` e as prévias de 320 e 168 não sobem.
- **Sobem** os JPGs (~0,46 e ~0,97 MB cada), os `-pontos.json`, os `.py` e este relato.
- **`_bases/` fica fora** (linha 102): são as 3 bases (63 MB) e os rascunhos de `_bases/_tmp/`.
- **Nada pessoal** em arquivo nenhum. O User-Agent leva o contato do canal, que só vai gravado nos `.json` como "o do canal".
