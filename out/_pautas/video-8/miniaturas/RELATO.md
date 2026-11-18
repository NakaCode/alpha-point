# As miniaturas das finalistas do vídeo 8: o relato (17/11/2026)

Esboços para a escolha do Lucas, no estilo das referências que ele mandou no vídeo 7 (`out/rio-columbia/_tmp/miniatura/referencias/`).
O pedido está em `out/_pautas/video-8/pedido-miniaturas.md`. A miniatura final de quem for aprovada se refaz depois, com o roteiro.

Já saíram a `arizona-strip` e o `banff`. A terceira virá por mensagem e será um `<slug>-bases.py` e um `<slug>.py` sobre o código comum,
mais uma linha em `finalistas.json`.

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

## A folha

`folha.png` traz a `arizona-strip` e o `banff`. A terceira entra ao rodar `python -X utf8 -B -P out/_pautas/video-8/miniaturas/folha.py`,
depois de acrescentar o slug e o título a `finalistas.json`.

## Para a Sala (git)

O `.gitignore` deixa de fora os PNGs de `out/`: `folha.png`, as prévias e as bases da GIBS. Ficam dentro, se a Sala commitar:
- os JPGs;
- os scripts e os `.json`;
- os dois zips do Census (0,46 e 3,2 MB);
- as respostas da Overpass (8,1 MB da `arizona-strip` e 2,2 MB do `banff`).

**O `mapa.py` mudou com o `banff`:** o leitor do OSM passou a costurar também as relações `boundary` (os limites de cidade e de parque) e
a guardar o id de cada elemento. A `arizona-strip` foi rodada de novo depois disso e saiu igual, com o mesmo sha256 do JPG de 2560.

A pasta de rascunho desta tarefa foi apagada.
