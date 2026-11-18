# As miniaturas das finalistas do vídeo 8: o relato (17 e 18/11/2026)

Esboços para a escolha do Lucas, no estilo das referências que ele mandou no vídeo 7 (`out/rio-columbia/_tmp/miniatura/referencias/`).
O pedido está em `out/_pautas/video-8/pedido-miniaturas.md`. A miniatura final de quem for aprovada se refaz depois, com o roteiro.

Saíram as três: a `arizona-strip`, o `banff` e a `nz-ventos`. Cada uma é um `<slug>-bases.py` (rede) e um `<slug>.py` (sem rede) sobre o
código comum, mais uma linha em `finalistas.json`.

## O código comum

| Arquivo | O que faz |
|---|---|
| `mapa.py` | É o `mapa.py` do vídeo 7 (`roteiros/rio-columbia/miniatura/mapa.py`, que não foi editado) generalizado. Parâmetros: o quadro (`Quadro`), as bases e as camadas. Tem os leitores do Census (shapefile zipado), do OSM (a resposta da Overpass, com os multipolígonos costurados) e do Natural Earth. Pinta o relevo (`Relevo`) em qualquer cor por três pontos e põe por cima a caixa, as setas (`bezier` ou `caminho` por vários pontos) e os rótulos. Novo: a altitude do ASTER GDEM (`ler_altitude`), o `sombreado` calculado dela, a `profundidade` de um cânion e o `perto_de` uma linha. |
| `bases.py` | Os pedidos de rede, um por vez, com o User-Agent do canal (o contato vem do `canal.json`). São a GIBS (relevo, Blue Marble, índice de altitude, colormap), um arquivo aberto (o Census) e a Overpass. Cada um grava, ao lado do arquivo, um `.json` com a URL, a data, o sha256 e a licença. Nada se pede de novo se já estiver no disco, e um 403, 418, 429 ou captcha para o script. |
| `folha.py` | Monta a folha de comparação como o YouTube mostra: a 1280 com o título embaixo, a 320 com o título embaixo e a 168 com o título ao lado, cada uma com um selo de duração (14:05). Lê `finalistas.json`. Com um slug como argumento, faz a folha dos textos daquela finalista (`<slug>-textos.png`). |

## `arizona-strip`: "Why Arizona Didn't Stop at the Grand Canyon"

**Arquivos:**
- a miniatura: `arizona-strip-1280.jpg` e `arizona-strip-2560.jpg`;
- as prévias: `arizona-strip-320.png`, `arizona-strip-168.png` e `arizona-strip-ver.png` (1280, 320 e 168 numa folha só);
- as medidas: `arizona-strip-pontos.json`;
- o teste dos dois textos: `arizona-strip-textos.png`, com a variante em `_variantes/arizona-strip-why-*`;
- os scripts: `arizona-strip-bases.py` (rede) e `arizona-strip.py` (sem rede).

### O que se vê

- **O mapa** vai de 35,45° N a 37,30° N e de 114,79° O a 110,71° O, em Mercator 16:9 (178 m por px do palco). Mostra Nevada à esquerda,
  Utah em cima, o Lake Powell no canto de cima à direita e o resto do Arizona embaixo.
- **A Arizona Strip em vermelho** são os dois CCDs que o cético somou (Kaibab Plateau e North Mohave, Census 2025, 1:500k). Leva o relevo
  por baixo, contorno branco fino e sombra escura por fora, e ocupa **27,5 % da imagem**.
- **O Grand Canyon** marca a borda de baixo do vermelho. O rio Colorado corre em ciano, e o cânion aparece como uma faixa funda: grená
  dentro do vermelho e marrom no amarelo, com os cânions laterais.
- **A água** (o rio Colorado e os lagos Mead, Powell e Mohave, do OSM) vai em ciano.
- **As divisas** de Utah, Nevada e Arizona vão em branco fino, com "UTAH", "NEVADA" e "ARIZONA" pequenos (Inter 800).
- **A seta branca grossa** mostra o caminho de fora:
  - sai da Strip, em Colorado City;
  - sobe a Utah e vira para oeste;
  - desce por Nevada, por cima do lago Mead;
  - volta ao Arizona ao sul do lago, com a ponta sobre o rótulo "ARIZONA".
- **A caixa preta** traz "CUT OFF" em vermelho, Inter 900 a 205 px, com o sublinhado vermelho das referências. Fica embaixo, no resto do
  Arizona, entre o lóbulo oeste da Strip e o canto da duração.

### Por que "CUT OFF" e não "WHY?"

- **O título já pergunta "Why…".** "WHY?" repete o título. "CUT OFF" diz o paradoxo, a parte do outro lado do cânion isolada do resto do
  estado, e conversa com a seta, que mostra o caminho de fora.
- **O "WHY?" lê maior**: a maiúscula tem 12,4 px no 168, contra 9,8 px do "CUT OFF". Mesmo assim, o "CUT OFF" lê no 168
  (`arizona-strip-textos.png`).
- **A Sala pode trocar** com `MINI_ESCOLHA=why`. A variante já está pronta em `_variantes/`.

### As medidas (`arizona-strip-pontos.json`)

- **O vermelho** ocupa 27,5 % da imagem (no vídeo 7, 31 %). As peças cobrem 0,19 % dele, só o começo da seta.
- **O canto da duração** (320 × 320 embaixo à direita, no palco de 2560) está livre: alfa máximo das peças 0.
- **O texto da caixa acaba a 76 % da largura.** No 168, o selo da duração do YouTube (fonte fixa, ~36 × 18 px) começa por volta daí e não
  cobre letra. Conferido na folha, com o selo desenhado.
- **O JPG de 1280** tem 521 KB, com qualidade 95.

### As bases e as licenças

Foram 5 pedidos de rede, um por vez e com o User-Agent do canal, entre 21:55 e 22:05 de 17/11/2026 (de 00:55Z a 01:05Z de 18/11). Os
arquivos estão em `_bases/`, cada um com o `.json` ao lado.

| Camada | Arquivo e origem | Licença e crédito |
|---|---|---|
| o relevo (o detalhe fino) | `arizona-strip-aster-relevo.png` (5400 × 3689, sha256 `d7c208e9…`), de −115,8 a −109,8 e de 34,7 a 38,0: GIBS WMS EPSG:3857, `ASTER_GDEM_Greyscale_Shaded_Relief` | aberta: o GetCapabilities diz "Fees: none" e "AccessConstraints: none", e a GIBS diz "NASA promotes full and open sharing of data" (as duas lidas em 17/11 para o vídeo 7; as cópias estão em `out/rio-columbia/_tmp/miniatura/gibs/`). A GIBS pede um reconhecimento (abaixo). |
| a altitude (o volume e o cânion) | `arizona-strip-aster-altitude.png` (mesmo recorte e tamanho, sha256 `128c0c21…`): GIBS, `ASTER_GDEM_Color_Index`, decodificado pelo colormap `gibs-colormap-ASTER_GDEM_Color_Index.xml` (255 faixas, de 10 m abaixo de 800 m e de 25 m de 800 a 2.800 m). 100 % dos pixels casaram com o colormap. | a mesma da GIBS. O ASTER GDEM é da NASA e do METI. Como no vídeo 7, a política de uso do LP DAAC não foi lida. |
| a Strip (vermelho) | `cb_2025_04_cousub_500k.zip` (sha256 `14f665f2…`), U.S. Census, Cartographic Boundary 2025, county subdivisions do Arizona: Kaibab Plateau CCD + North Mohave CCD | domínio público (obra do governo dos EUA) |
| os estados e as divisas | `cb_2025_us_state_500k.zip` (sha256 `9cbfe171…`), copiado do disco (baixado para o vídeo 7), sem pedido | domínio público |
| o rio e os lagos (ciano) | `arizona-strip-osm-agua.json` (8,1 MB, sha256 `5e865542…`), uma consulta à Overpass: as vias `waterway=river` "Colorado River" e as relações `natural=water` "Lake Mead", "Lake Powell" e "Lake Mohave" (os anéis fecharam todos), base OSM de 2026-11-18T00:54:21Z | ODbL. Na descrição: "© OpenStreetMap contributors" e openstreetmap.org/copyright |
| as letras | `marca/fontes/inter` (Inter) | SIL OFL |

- **Fora**: nada da MapTiler, nenhuma Blue Marble (não há mar no quadro), e nada desenhado à mão nem por IA.
- **A seta** é a única forma livre. Ela passa por 8 pontos (lon/lat no `pontos.json`) tirados da rota do cético.
- **Para a descrição, se a pauta for**:
  - "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth
    Science Data and Information System (ESDIS). Elevation: ASTER GDEM (NASA/METI).";
  - o crédito do OpenStreetMap;
  - U.S. Census Bureau (cortesia).

### As rodadas

1. **Só com o cinza da GIBS** (o método do vídeo 7), o Grand Canyon virava textura fina, e o rio azul era só uma borda.
2. **O cânion marcado**:
   - pela rugosidade perto do rio: marcou pouco;
   - pela profundidade medida na altitude, no quadro inteiro: as serras de Nevada viraram manchas escuras.
3. **A versão entregue**:
   - o relevo mistura o cinza da GIBS (40 %) com o sombreado calculado da altitude (60 %, com exagero vertical 2,5 e luz de noroeste);
   - a profundidade (quanto cada ponto está abaixo do terreno mais alto num raio de ~11 km, de 300 a 1.400 m) escurece só a faixa do
     Grand Canyon, até ~18 km do rio, de Lees Ferry ao lago Mead;
   - a água passou a ciano;
   - a caixa desceu e foi para a esquerda do canto da duração.

### O que ficou fraco

- **O cânion se lê a 1280.** A 320 e a 168, o corte se lê pela linha ciano e pela borda do vermelho, não como um cânion. É a geografia:
  perto do Grand Canyon Village, o rio corre a 2 ou 3 km da South Rim, e a maior parte da garganta fica ao norte do rio, dentro do
  vermelho, como grená.
- **Nada na imagem diz "Grand Canyon".** Quem nomeia o cânion é o título. Um rótulo pequeno "GRAND CANYON" ajudaria a 1280, mas não entrou:
  o pedido fala em três rótulos e pouco texto.
- **A seta é esquemática, não é a estrada.** A rota real passa por Las Vegas, a oeste do quadro, cruza o rio na Hoover Dam e termina em
  Kingman, ao sul do quadro. A seta desce por Nevada por cima do braço Overton do lago Mead.
- **O vermelho ocupa 27,5 %, abaixo dos 31 % do vídeo 7.** O quadro precisa de Utah em cima e de Nevada à esquerda para a seta, e do
  Arizona embaixo para a caixa. Fechar mais tira o caminho de fora.
- **A caixa ficou perto do lóbulo oeste da Strip** (~60 px a 1280) e do rótulo "ARIZONA" (~65 px). A região de baixo é estreita, e o
  canto de baixo fica cheio.
- **O "CUT OFF" no 168** tem 9,8 px de maiúscula. Lê, mas fica abaixo do "WHY?" (12,4 px).
- **O lago Mead é o do OSM de hoje, baixo.** A Gregg Basin aparece como rio.
- **O Kaibab Plateau CCD tem lascas de terra entre os braços do Lake Powell**, perto da represa, porque segue o leito antigo do rio. É o
  dado do Census.
- **O ciano do Lake Powell**, no canto de cima à direita, puxa um pouco o olho para fora do assunto.

## `banff`: "Why You Can Buy a House in Banff but Can't Live in It"

**Arquivos:**
- a miniatura: `banff-1280.jpg` e `banff-2560.jpg`;
- as prévias: `banff-320.png`, `banff-168.png` e `banff-ver.png`;
- as medidas: `banff-pontos.json`;
- o teste dos dois textos: `banff-textos.png`, com a variante em `_variantes/banff-pct-*`;
- os scripts: `banff-bases.py` (rede) e `banff.py` (sem rede).

Os laudos lidos: `cetico-banff.md` (§4, a medida; §6, a miniatura) e `banff-mcallister.md`.

### O que se vê

- **O mapa** vai de 51,068° N a 51,202° N e de 115,637° O a 115,257° O, 26 km de largura (16,5 m por px do palco). Mostra o vale do Bow
  na diagonal, de Banff, em cima à esquerda, a Canmore, embaixo à direita, entre as cristas das Rochosas em relevo amarelo.
- **A cidade de Banff em vermelho** é o limite oficial no OSM (a relação 8452792, a mesma que o cético mediu). No palco ela dá 4,9 km²,
  contra os 4,88 km² dele. Leva contorno branco de 8 px e sombra escura, e ocupa ~310 × 345 px no palco: ~20 px no 168.
- **O rio Bow e os lagos** (os Vermilion Lakes e outros, do OSM) vão em ciano.
- **O limite do parque nacional de Banff** (OSM, relação 6365995) vai em branco fino, com o lado de fora 15 % mais escuro. Canmore fica
  do lado escuro.
- **Canmore** é um ponto branco no centro administrativo do OSM (o nó `admin_centre` da relação 8452489).
- **Os rótulos** "BANFF", "CANMORE" e "NATIONAL PARK" vão pequenos; o último fica do lado de dentro, perto do limite.
- **A seta branca grossa** sai de Canmore, sobe o vale pelo lado nordeste e chega à borda leste da cidade.
- **A caixa preta**, embaixo à esquerda, traz "WORKERS" e "ONLY" em vermelho, em duas linhas, Inter 900 a 210 px (10 px de maiúscula no
  168), com o sublinhado.

### Por que "WORKERS ONLY" e não "0.07%"

- **"0.07%" pede contexto que a imagem não dá.** É a medida nossa (a cidade dividida pelo parque), mas o quadro mostra só ~262 km² dos
  6.641 km² do parque. Quem vê não sabe de quê é o 0,07 %.
- **"WORKERS ONLY" diz a regra na hora**, como uma placa, e conversa com a seta: quem trabalha em Banff vem de Canmore.
- **"0.07%" lê maior no 168** (14,3 px de maiúscula, contra 10). A variante está pronta, e `MINI_ESCOLHA=pct` troca.
- **O cuidado do cético (K8) vale:** "only" é mais forte que a lei, que tem 7 categorias de "eligible resident". A placa fica na
  miniatura, e a fala diz "for most people" e "unless you work inside the park".

### As medidas (`banff-pontos.json`)

- **A cidade** ocupa 1,24 % da imagem. Nenhuma peça a cobre.
- **O canto da duração** (320 × 320) está livre: alfa máximo das peças 0.
- **Canmore** fica a 73 % da largura e a 84 % da altura, à esquerda do selo da duração no 168, que começa por volta de 76 % da largura.
- **O JPG de 1280** tem 530 KB.
- **O fundo de vale foi medido, não pintado** (em `fundo_de_vale`): o chão abaixo de 1.450 m e com declive de até 10°, dentro do parque, na
  altitude do ASTER alisada. Dá ~44 km² dos ~262 km² de parque no quadro, e a cidade (4,9 km²) é ~11 % dele. É medida de esboço: não
  é número de tela.

### As bases e as licenças

Foram 3 pedidos de rede, um por vez e com o User-Agent do canal, às 22:33 de 17/11/2026 (01:33Z de 18/11). O colormap da GIBS já estava
no disco, da `arizona-strip`.

| Camada | Arquivo e origem | Licença e crédito |
|---|---|---|
| o relevo | `banff-aster-relevo.png` (4400 × 2926, sha256 `c172c0d3…`), de −116,2 a −115,0 e de 50,95 a 51,45: GIBS, `ASTER_GDEM_Greyscale_Shaded_Relief` | aberta (a mesma da `arizona-strip`); o reconhecimento da GIBS na descrição |
| a altitude | `banff-aster-altitude.png` (mesmo recorte e tamanho, sha256 `73a47d41…`): GIBS, `ASTER_GDEM_Color_Index`, decodificado pelo colormap (100 % dos pixels casaram) | a mesma; ASTER GDEM (NASA/METI) |
| a cidade, Canmore, o parque, o rio e os lagos | `banff-osm.json` (2,2 MB, sha256 `6e4079e6…`, base OSM de 2026-11-18T01:32:54Z): as relações 8452792 (Banff), 8452489 (Town of Canmore) e 6365995 (Banff National Park, `boundary=protected_area`), o rio Bow e as águas com nome do recorte | ODbL. Na descrição: "© OpenStreetMap contributors" e openstreetmap.org/copyright |

- **O limite do parque é o do OSM.** A Sala deixou escolher, e veio no mesmo pedido da cidade. O conjunto aberto da Parks Canada
  (OGL-Canada) não foi baixado; para a tela, vale conferir o OSM contra ele.
- **Fora:** nada da MapTiler, nenhuma Blue Marble e nada do Census.
- **A seta** é a única forma livre: 5 pontos ao longo do vale (`pontos.json`).

### As rodadas

1. **Primeiro quadro, de 0,8° de largura, com o fundo de vale em ciano** (abaixo de 1.500 m e com declive de até 12°):
   - a cidade tinha ~9 px no 168;
   - o ciano virou uma mancha de ~80 km² que lia como lago.
2. **0,42° de largura**: o fundo de vale ficou sem ruído, mas continuava lendo como água (ciano é água nas referências e na
   `arizona-strip`). Saiu da pintura, e o ciano passou ao rio.
3. **O relevo:** com a luz de noroeste da GIBS, as cristas das Rochosas, que correm de noroeste a sudeste, saíam chatas. Passou a misturar
   30 % do cinza da GIBS com 70 % de um sombreado calculado da altitude, com luz de 315° e de 250° e exagero de 1,8.
4. **0,38° de largura**, com Canmore puxada para fora do selo da duração no 168, a seta curva e o rótulo do parque.

### O que ficou fraco

- **A cidade é pequena de propósito, e no 168 ela é uma mancha vermelha de ~20 px.** Lê, mas a caixa domina. Ao lado da `arizona-strip`,
  o assunto vermelho pesa muito menos. Uma lupa resolveria o tamanho, mas o relevo do ASTER (~30 m) ampliado de novo sairia borrado.
- **O relevo é mais macio** que o da `arizona-strip`: o ASTER de ~30 m vai ampliado 1,8 vez no palco de 2560. A 1280 ele segura.
- **Ninguém vê o parque inteiro.** O quadro mostra ~4 % dele, então o "minúscula dentro de um parque enorme" do cético não aparece. É
  isso que enfraquece o "0.07%".
- **O fundo de vale estreito, a explicação geográfica do cético, ficou fora da imagem** (o ciano lia como lago). Só a medida ficou no
  `pontos.json`.
- **O ponto de Canmore é o centro administrativo, não a mancha urbana.** O limite da Town of Canmore (~69 km², quase todo montanha) não
  foi desenhado.
- **O "WORKERS ONLY" simplifica a lei** (K8 do cético).
- **A caixa toca o limite do parque** no canto de cima à direita dela.

## `nz-ventos`: "Why New Zealand Put Its Capital in the Path of the Wind"

(A forma sem nome, que o Lucas gosta: "Why This Country Put Its Capital in a Wind Tunnel".)

**Arquivos:**
- a miniatura: `nz-ventos-1280.jpg` e `nz-ventos-2560.jpg`;
- as prévias: `nz-ventos-320.png`, `nz-ventos-168.png` e `nz-ventos-ver.png`;
- as medidas: `nz-ventos-pontos.json`;
- o teste dos dois textos: `nz-ventos-textos.png`, com a variante em `_variantes/nz-ventos-here-*`;
- os scripts: `nz-ventos-bases.py` (rede) e `nz-ventos.py` (sem rede).

O laudo lido: `out/_pautas/video-8/cetico-nz-ventos.md` (§4, o funil nos dados; §6, a miniatura que ele propõe; F12–F14, o "windiest").

### O que se vê

- **O mapa** vai de 41,95° S a 40,55° S e de 173,05° L a 176,36° L, em Mercator 16:9 (108 m de chão por px do palco). Mostra o sul da
  Ilha Norte em cima à direita (as serras Tararua e Remutaka, o Wairarapa, o cabo Palliser) e o norte da Ilha Sul embaixo à esquerda (os
  Marlborough Sounds e as serras de Kaikoura), com o estreito de Cook entre as duas. O mar é azul, com a textura da batimetria da Blue
  Marble, como no vídeo 7.
- **Wellington em vermelho** é a área urbana das quatro cidades do OSM (Wellington City, Porirua, Lower Hutt e Upper Hutt; as relações
  4266321, 4266370, 4266371 e 4266375), só na terra: 1.393 km², **3,2 % da imagem**. O porto (Port Nicholson) fica azul dentro do
  vermelho. Leva o relevo por baixo, contorno branco de 6 px e sombra escura por fora.
- **O estreito de Cook em ciano**, com a forma de funil: é o mar entre as duas ilhas onde a soma da distância à Ilha Norte e da distância
  à Ilha Sul fica abaixo de 46 a 56 km. Assim o ciano segue as duas costas, se estreita no gargalo, na frente de Wellington, e se abre nas
  duas bocas. O porto e o fundo dos Sounds ficam azuis. Ocupa 9,6 % da imagem. O gargalo medido entre as duas maiores massas de terra do
  quadro dá **21,8 km** (o cético fala em "~20 km").
- **Duas setas brancas grossas**, o funil do vento:
  - a do norte desce do mar da Tasmânia, ao largo da costa de Kapiti, e entra no estreito até a borda oeste do vermelho (Makara e
    Terawhiti);
  - a do sul sobe do Pacífico pela boca sul do estreito até a costa sul da cidade;
  - as duas pontas se encontram no gargalo, uma de cada lado da cidade. É o "71 % das horas de vento forte vêm só do norte e do sul" do
    cético (§4).
- **"COOK STRAIT"** vai pequeno, em duas linhas, no mar do estreito entre a Ilha Sul e a seta do sul.
- **A caixa preta**, em cima à esquerda (sobre os Sounds e o mar), traz "WIND" e "TUNNEL" em vermelho, Inter 900 a 205 px (9,8 px de
  maiúscula no 168), com o sublinhado.

### Por que "WIND TUNNEL" e não "WHY HERE?"

- **Com o título principal, "WHY HERE?" repete o "Why…"**, como o "WHY?" da `arizona-strip`. "WIND TUNNEL" põe em duas palavras o que as
  setas desenham (o funil) e o paradoxo (a capital dentro dele), e transforma o "Path of the Wind" do título em imagem.
- **Não é superlativo**: o cético proíbe "WINDIEST" na miniatura (F12–F14), e "WIND TUNNEL" não afirma ranking nenhum.
- **Se o título for o sem nome ("…in a Wind Tunnel"), a escolha se inverte**: "WIND TUNNEL" repetiria o título, e "WHY HERE?" (a
  sugestão do cético no §6) passa a ser a melhor. A variante está pronta, e `MINI_ESCOLHA=here` troca. O "WIND GAP" que o cético dá como
  B não foi pedido e não foi feito.
- **"WHY HERE?" lê um pouco maior no 168** (10,8 px de maiúscula, contra 9,8). Os dois leem (`nz-ventos-textos.png`).

### As medidas (`nz-ventos-pontos.json`)

- **O vermelho** ocupa 3,2 % da imagem. Nenhuma peça o cobre.
- **O canto da duração** (320 × 320) está livre, só mar: alfa máximo das peças 0.
- **As setas** têm 613 e 495 px no palco.
- **O JPG de 1280** tem 443 KB.
- **A menor soma das distâncias** (3,4 km, em 174,39 L e 41,12 S) é a das ilhotas The Brothers, do lado norte, a ~3 km do cabo Koamaru,
  da ilha Arapawa, do lado sul. Não é a largura do estreito; o gargalo é o de 21,8 km.

### As bases e as licenças

Foram 4 pedidos de rede, um por vez e com o User-Agent do canal, entre 00:21 e 00:22 de 18/11/2026 (03:21Z). O colormap da GIBS já estava
no disco, da `arizona-strip`.

| Camada | Arquivo e origem | Licença e crédito |
|---|---|---|
| o relevo | `nz-ventos-aster-relevo.png` (5000 × 3556, sha256 `12d37353…`), de 171,8 a 177,8 L e de 43,0 a 39,8 S: GIBS, `ASTER_GDEM_Greyscale_Shaded_Relief` | aberta (a mesma da `arizona-strip`); o reconhecimento da GIBS na descrição |
| a altitude e a terra | `nz-ventos-aster-altitude.png` (mesmo recorte e tamanho, sha256 `40fe0396…`): GIBS, `ASTER_GDEM_Color_Index`, decodificado pelo colormap. 66 % dos pixels da base são mar (sem dado, que o WMS devolve em preto) e viram 0 m; dos outros, 100 % casaram com o colormap. A terra é onde o ASTER tem altitude. | a mesma; ASTER GDEM (NASA/METI) |
| o mar | `nz-ventos-bluemarble.png` (mesmo recorte e tamanho, sha256 `1915e053…`): GIBS, `BlueMarble_ShadedRelief_Bathymetry`, só a textura (a luminância), como no vídeo 7 | domínio público (NASA); o reconhecimento da GIBS |
| Wellington (vermelho) | `nz-ventos-osm.json` (0,7 MB, sha256 `f74deb0f…`, base OSM de 2026-11-18T03:21:06Z): as relações de nível 6 das quatro cidades, a da região de Wellington (1638991, nível 4) e o nó da cidade (204648) | ODbL. Na descrição: "© OpenStreetMap contributors" e openstreetmap.org/copyright |
| os lagos | Natural Earth 10m (`ne_10m_lakes`: Wairarapa, Rotoroa, Rotoiti), do cache da máquina, sem pedido | domínio público |
| o estreito (só na alternativa `MINI_ESTREITO=1`) | Natural Earth 10m (`ne_10m_geography_marine_polys`, "Cook Strait"), do cache | domínio público |

- **Fora:** nada da MapTiler, nada do Census, e nada desenhado à mão nem por IA. O ciano é medido da própria terra do ASTER.
- **As setas** são a única forma livre: 4 pontos cada (lon/lat no `pontos.json`).
- **O `mapa.py` mudou com a `nz-ventos`:** o `ler_altitude` passou a tratar o preto (o fundo do WMS, que não é cor do colormap) como mar,
  a 0 m, como já tratava o transparente. A `arizona-strip` e o `banff` foram rodados de novo depois disso e saíram iguais, com o mesmo
  sha256 dos JPGs de 2560 (as escolhidas e as variantes).

### As rodadas

1. **Quadro de 1,9° de altura** (de 42,2 a 40,3 S), com o polígono "Cook Strait" do Natural Earth em ciano:
   - o polígono fecha o estreito com retas no mar aberto e virou um retângulo de cantos moles, artificial;
   - o rótulo "COOK STRAIT", numa linha, saía cortado pela seta do sul;
   - a seta do norte nascia debaixo da caixa;
   - o vermelho tinha 1,8 % da imagem.
2. **O ciano passou a ser o funil medido** (a soma das distâncias às duas ilhas), primeiro com a borda macia (de 45 a 75 km, uma névoa) e
   depois mais firme (de 46 a 56 km).
3. **A versão entregue**:
   - o quadro fechou para 1,4° de altura, e o vermelho foi a 3,2 %;
   - a seta do norte desce do alto do quadro, à direita da caixa;
   - as caudas das duas setas ficam dentro do quadro;
   - o rótulo vai em duas linhas, fora das setas.

### O que ficou fraco

- **O vermelho é pequeno: 3,2 % da imagem, longe dos 31 % do vídeo 7.** O assunto é o funil, e ele pede as duas ilhas no quadro. No 168,
  Wellington é uma mancha vermelha de ~35 px de ponta a ponta, que lê. A região de Wellington inteira (`MINI_VERMELHO=regiao`) leria muito mais forte, mas
  pinta o Wairarapa, que não é a capital. Ficou como opção, não como entrega.
- **As setas são esquemáticas.** O vento de oeste vira norte no estreito; a seta do norte mostra o vento que chega, não o caminho do ar. O
  cético pede setas "vindas do oeste, do mar da Tasmânia"; a Sala pediu do norte e do sul (o 71 % do aeroporto), e foi o que entrou.
- **O ciano lê como "água especial" mais do que como "vento"**: são as setas que dizem vento. Sem as setas, o funil ciano seria só o
  estreito.
- **"COOK STRAIT" não lê no 168** (é rótulo de 1280, como os das outras duas).
- **Muito azul**: o mar ocupa cerca de metade da imagem, e a miniatura fica mais fria que as outras duas. O amarelo das serras segura o
  contraste com o vermelho.
- **A caixa cobre os Marlborough Sounds**, o pedaço mais recortado da costa.

## A folha

`folha.png` traz as três, lado a lado: cada uma a 1280 com o título embaixo (branco sobre escuro, no máximo duas linhas) e o selo de
duração, e, embaixo, a 320 e a 168 como o YouTube as mostra. As folhas dos textos são `arizona-strip-textos.png`, `banff-textos.png` e
`nz-ventos-textos.png`. Para refazer: `python -X utf8 -B -P out/_pautas/video-8/miniaturas/folha.py` (e `folha.py <slug>`).

## Para a Sala (git)

O `.gitignore` deixa de fora os PNGs de `out/`: `folha.png`, as prévias e as bases da GIBS. Ficam dentro, se a Sala commitar:
- os JPGs;
- os scripts e os `.json`;
- os dois zips do Census (0,46 e 3,2 MB);
- as respostas da Overpass (8,1 MB da `arizona-strip`, 2,2 MB do `banff` e 0,7 MB da `nz-ventos`).

**O `mapa.py` mudou com o `banff`:** o leitor do OSM passou a costurar também as relações `boundary` (os limites de cidade e de parque) e
a guardar o id de cada elemento. A `arizona-strip` foi rodada de novo depois disso e saiu igual, com o mesmo sha256 do JPG de 2560. A
mudança da `nz-ventos` (o preto como mar) está na seção dela.

A pasta de rascunho desta tarefa (`_tmp`) foi apagada.
