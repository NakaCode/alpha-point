# As miniaturas novas da Austrália (a rodada 2, `r2-`): o relato (18/11/2026)

O pedido: `pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md`. O Lucas, à pergunta das miniaturas do teste dos leitores: **"Faça novas"**. As
três de antes (`m1`, `m2`, `reserva-aranhas`) ficam de reserva e não foram tocadas. O estilo, o código e as regras são os dos dois pedidos anteriores
(`pedido-miniaturas.md` desta pauta e o do Grand Canyon) e o `RELATO.md` desta pasta. O título embaixo, na folha: o do Lucas, *Why Does Australia Have
So Many Dangerous Animals?*

## As três, numa linha

| | A caixa | O que se vê | Casa melhor com |
|---|---|---|---|
| **r2-n1** | **NOT THE / KILLER** (e a pílula **INLAND TAIPAN**) | o Channel Country (IBRA 7.1) em vermelho, o resto da Austrália em amarelo; a seta da caixa ao vermelho | o **T1, o do Lucas** |
| **r2-n2** | **10 YEARS OF VENOM / < 1 MONTH** (e a pílula **ROADS**) | as rodovias do país em vermelho sobre a Austrália amarela; a seta da caixa a uma rodovia | o **T2** |
| **r2-n3** | **DEATHS, 2016–2025 / SNAKES 35 / BEES & WASPS 42** | a Austrália inteira em vermelho; a seta da caixa ao meio do continente | o **T3** (com uma palavra repetida, abaixo) e o T1 |

## Os arquivos

Tudo em `roteiros/australia-animais/miniatura/`, com o prefixo `r2-`:

| Arquivo | O que é |
|---|---|
| `r2-folha.png` | As três lado a lado, com o título do Lucas embaixo, como o YouTube mostra: a 1280, a 320 com o título embaixo, a 168 com o título ao lado e a 168 ampliada 3 vezes (só para conferir a palavra). Todas com o selo de duração **14:36**, ilustrativo (os 14,6 min de fala da pauta v2, §7). |
| `r2-n1-*`, `r2-n2-*`, `r2-n3-*` | Para cada uma: `-2560.jpg`, `-1280.jpg` (q 95), `-320.png`, `-168.png` e as medidas em `-pontos.json`. |
| `r2-n1.py`, `r2-n2.py`, `r2-n3.py` | O script de cada uma. Nenhum faz pedido de rede. O topo de cada um diz o fato, as camadas e as rodadas. |
| `r2_comum.py` | As camadas novas (o Channel Country, os rios, o lago Eyre, as estradas, as capitais), conferidas pelo sha256, e a pílula do nome. Tem sublinhado, e não hífen, porque o Python não importa módulo com hífen. |
| `r2-folha.py` | Cópia do `folha.py` (que não foi editado), com o selo, a lista e o nome de saída mudados. |
| `r2-conferir.py` e `r2-conferencia.json` | A conferência (abaixo). Sem rede. |
| `_bases/_tmp/r2-*` | Os ensaios (`-e1` a `-e11`, `-pre`, `-l0`, `-l2`, `-l2b`), os logs das finais e o sha256 das duas rodadas. Fora do git. |

**Usados sem editar:** `mapa.py` e `australia.py` (os r2 os importam). Nada da rodada 1 foi editado, apagado nem rodado de novo: as datas dos arquivos são
das 13:15 às 13:51, e o `git status` da pasta só mostra arquivos `r2`.

**Para refazer**, da raiz do canal e sem rede:

```
python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n1.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n2.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-n3.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-folha.py
python -X utf8 -B -P roteiros/australia-animais/miniatura/r2-conferir.py
```

**Rodar de novo dá o mesmo arquivo:** rodei as três finais duas vezes, sem cache, e o sha256 dos `-2560.jpg` não mudou: `2a18d8a8…` (n1), `8a99b4a6…`
(n2) e `99303dd3…` (n3) (`_bases/_tmp/sha-r2-1a.txt` e `sha-r2-2a.txt`).

## O mapa e o quadro (o mesmo nas três)

- **O mapa** é o da rodada 1 (`australia.py`): a terra do ABS (STE 2021), o relevo amarelo do ASTER GDEM pela GIBS, o mar azul com a textura da Blue
  Marble, os vizinhos do Natural Earth. O mar é o claro da m1 (0,92).
- **O quadro é um só para as três** (o relato da rodada 1 marcava como fraco que a m1 e a m2 tinham quadros diferentes): **47 S a 9,4 S, centrado em
  127,3 E**, de 88,2 a 166,35 E. É uns 5 % mais perto que o da m1.
  - **Embaixo**, a caixa cabe no mar sob a costa sul da Austrália Ocidental: a 18 px dela na n1, a 49 na n2 e a 26 na n3.
  - **À direita**, a Nova Zelândia fica fora por pouco: a costa oeste da Ilha do Sul, na faixa de latitude do quadro, fica em 166,47 E, **3,7 px** além da
    borda.
  - **Em cima**, o cabo York (10,7 S) fica dentro, a ~43 px da borda.
- **As rodadas do quadro** (os ensaios n1-e1 a e10): no quadro da m1 (47 S a 7,5 S) o Channel Country ficava pequeno. Mais perto (44,8 S), a caixa cobria
  o canto sudoeste da Austrália Ocidental (Albany). Centrado em 129,5 E, a Ilha do Sul da Nova Zelândia entrava no canto de baixo à direita.

## r2-n1, "NOT THE KILLER": o endereço da taipan

- **O conceito:** é o "NOT THE KILLER" da pauta v1 (§8), que nunca tinha sido desenhado. O veneno mais potente medido em camundongo mora longe, num canto
  do interior, e não é o bicho que mata. A pílula dá o nome; a caixa dá a virada.
- **O que se vê:**
  - o **Channel Country** (IBRA 7.1, a região CHC) em vermelho, com o relevo, o contorno branco de 5 px e a sombra. É a região que a pauta nomeia como a
    casa da taipan (§4.3; §10.1, item 9). Ocupa **0,92 %** da imagem: ~264 × 321 px no palco, **~17 × 21 px na 168**;
  - a pílula preta **INLAND TAIPAN** (84 px no palco) logo acima do vermelho, sem cobri-lo;
  - a caixa embaixo à esquerda: **NOT THE** em branco (170 px; 8,1 px de maiúscula na 168) e **KILLER** em amarelo (250 px; **11,9 px na 168**), com o
    sublinhado vermelho;
  - a seta (820 px) da borda direita da caixa ao lado oeste do vermelho, com a ponta a 15 px dele.
- **O contorno foi limpo:** o IBRA tem fiapos de canal no sudoeste que, a ~3,4 km por px, viravam uma renda branca.
  - O ajuste foi um fechamento e uma abertura de 2 px. Tirou também 4 manchas soltas de menos de 200 px.
  - Mudou **3,5 % dos px** do vermelho, que ficou 1 % maior (33.485 → 33.830 px).
  - Com 4 px (um ensaio), o entalhe entre os dois braços do norte fechava e o X virava um borrão.
- **Sem ciano, e por quê:**
  - os rios da ficha da taipan (o Cooper, o Diamantina e o Warburton, do NE) cortavam o vermelho em pedaços na 168 (os ensaios e1, com 9 px, e e11, com
    6 px);
  - as 8 capitais do ABS (GCCSA), em ciano, viravam pontinhos sem nome, que liam como lagos (e2).
  - Os dois ensaios ficam no script: `MINI_N1_CIANO=rios` e `MINI_N1_CIANO=capitais`.
- **As duas cobras pelo endereço, que a Sala sugeriu: fiz só a metade da taipan.**
  - A área da cobra-marrom não está desenhada. O habitat dela é **A LER** (pauta §4.4, §11 item 3).
  - O Atlas of Living Australia (`api.ala.org.au`) e o Australian Faunal Directory recusaram o robô (a base, "Bloqueados"). Não procurei outra fonte
    de área de ocorrência (a IUCN, por exemplo, cuja licença não li).
  - Pelo pedido, desenhei só a região que a pauta nomeia.
  - E não pintei "o leste onde mora a gente" como casa da marrom, por três razões:
    - a pauta não dá essa região à marrom (só "perto de gente", A LER);
    - a frase "the taipan lives where no one lives" espera a medida do Censo (§5);
    - o "brown (17)" do ASP-20 é o grupo das marrons, e não sei, sem fonte lida, se ele cabe só no leste.
- **O fato da caixa** (pauta §4.4, P3, ASP-20 [R]): 23 mortes por cobra em 2005–2015; 17 da marrom, 4 da tigre, 2 de cobra desconhecida.
  - "None was put down to the inland taipan" é literal: 17 + 4 + 2 = 23.
  - A caixa não diz "never" (o "nenhuma morte" da taipan é NÃO CONFERIDO) nem "nobody"/"empty" (A MEDIR).
- **Quando a voz paga:**
  - o gancho A apresenta a taipan na frase 1 (0–8 s);
  - a virada vem na ponte do ato 3 (~7:16: "The snake that actually kills Australians lives somewhere else") e no ato 4 ("None was put down to the inland
    taipan");
  - se o T3 ganhar, a frase extra do gancho A paga aos ~12 s.
- **Com que título:**
  - **o T1 (o do Lucas)** é o par certo: "so many dangerous animals?" e "o veneno mais potente não é o que mata" montam o paradoxo, e nenhuma palavra se
    repete;
  - com o T2, ela adianta uma parte da resposta;
  - **com o T3, repete a ideia do título** ("deadliest isn't most venomous") e só soma o nome e o lugar. Nenhuma palavra se repete (o `r2-conferir.py`
    confere), mas é a mesma virada.

## r2-n2, a estrada: "10 YEARS OF VENOM < 1 MONTH"

- **O conceito:** a frase que o Tunde repetiria no almoço. De 2016 a 2025, todos os animais venenosos mataram 85 pessoas; as estradas, 1.276 em 2025
  (preliminar), 106,3 por mês. Dez anos de veneno são **0,8 mês** de estrada (pauta §4.1, "A âncora da estrada", FIRME, conta).
- **O que se vê:**
  - **as rodovias do país em vermelho**, sobre a Austrália amarela: as 360 "Major Highway" e as 90 "Secondary Highway" do Natural Earth 1:10m (45.160 e
    13.590 km pelo `length_km` do NE);
  - as rodovias vão cortadas na terra do ABS, com 16 px de vermelho e 5 px de casco branco de cada lado, e a sombra. Ocupam **6,9 %** da imagem;
  - a rede é do país todo: há rodovia em todos os estados e territórios (o `r2-conferir.py` mede o comprimento em cada um). Assim, nada de vermelho só
    num estado;
  - a caixa embaixo à esquerda: **10 YEARS OF VENOM** em branco (130 px; **6,2 px na 168**) e **< 1 MONTH** em amarelo (250 px; **11,9 px na 168**),
    com o sublinhado vermelho;
  - a seta (490 px) sobe da borda direita da caixa até uma rodovia do NE em 134,38 E, 28,62 S, na Austrália do Sul;
  - a pílula **ROADS** (92 px) logo acima da ponta.
- **A estrada da seta:** o NE a dá como "Major Highway" e não lhe dá nome. Pela posição, é a Stuart Highway perto de Coober Pedy, mas **o nome não está
  na fonte** e não vai a lugar nenhum.
  - A 1ª seta (e1) ia à estrada Eyre, na costa da Grande Baía: tinha 207 px e saía curta e torta.
- **Quando a voz paga:** no gancho A, frase 8 (~26–30 s): "That's fewer than Australia's roads killed in an average month of 2025". "10 YEARS" é o
  2016–2025 da voz; "1 MONTH" é o "average month of 2025".
- **Com que título:**
  - **o T2** é o par certo: ele pergunta por que tão pouca gente morre, e ela mostra o tamanho do "pouco" contra um perigo que todo mundo conhece;
  - com o T1, ela é o contraponto ("dangerous? menos que um mês de estrada");
  - **com o T3, não conversa** (o título é das cobras, a miniatura é de todo veneno) e **repete a raiz**: "VENOM" e "Venomous".

## r2-n3, o número com dono: "SNAKES 35 / BEES & WASPS 42"

- **O conceito:** o número com dono, um objeto que ninguém espera e o país inteiro.
  - No livro do ABS de 2016–2025, as abelhas e vespas (X23) mataram 42, mais que as cobras venenosas (X20), 35 (pauta §4.1, FIRME; fb 1, fb 3).
  - A voz do ato 1: "venomous snakes killed 35 people. Bees and wasps killed 42, more than the snakes".
- **O que se vê:**
  - **a Austrália inteira e a Tasmânia em vermelho** (o método da m1: os dois números são do país todo), com **22,8 %** da imagem;
  - a caixa embaixo à esquerda, em três linhas:
    - **DEATHS, 2016–2025**, pequena, em branco (84 px; 4,0 px na 168, só lê de 320 para cima). É o dono dos números, que faltou à "1 IN 3 MILLION";
    - **SNAKES 35**, em branco (130 px; 6,2 px na 168);
    - **BEES & WASPS 42**, em amarelo (156 px; **7,5 px na 168**), com o sublinhado;
  - a seta (611 px) da borda direita da caixa ao meio do continente. A ponta fica no vermelho, longe da costa: o Dale disse que a seta da m1 apontava "para
    o litoral sul, que é deserto".
- **"& WASPS" fica:** o código X23 junta "hornets, wasps and bees", e nenhuma fonte da base separa as duas. "BEES 42" seria um número com o dono errado.
  - O X20 é "venomous snakes and lizards"; a caixa diz "SNAKES", como a voz.
- **Quando a voz paga:** no ato 1 (0:44–2:45). O gancho A não diz as abelhas.
- **Com que título:**
  - **o T3** soma o que ele não diz: as abelhas e vespas mataram mais que todas as cobras. Mas **repete a palavra** "SNAKES"/"Snake";
  - com o T1, a resposta inesperada ("dangerous animals?" → as abelhas) não repete nada;
  - com o T2, ela mostra os números do "few", e "DEATHS" encosta no "Die" do título (a mesma ideia; o `r2-conferir.py` não pega essa raiz).

## As medidas, lado a lado

| | r2-n1 | r2-n2 | r2-n3 |
|---|---|---|---|
| o vermelho (fração da imagem) | 0,92 % (o Channel Country) | 6,9 % (as rodovias) | 22,8 % (a Austrália) |
| a maior maiúscula da caixa na 168 | **KILLER 11,9 px** | **< 1 MONTH 11,9 px** | **BEES & WASPS 42 7,5 px** |
| a menor maiúscula da caixa na 168 | NOT THE 8,1 px | 10 YEARS OF VENOM 6,2 px | DEATHS, 2016–2025 4,0 px |
| a caixa, na largura | 2 % a 40 % | 2 % a 58 % | 2 % a 61 % |
| distância da caixa à terra | 18 px | 49 px | 26 px (a ilha Kangaroo) |
| a seta | 820 px; a ponta a 15 px do vermelho | 490 px; a ponta a 4 px do casco | 611 px; a ponta dentro do vermelho |
| peças sobre o vermelho | 0 % | 3,3 % das rodovias (a pílula e a seta) | 2,7 % |
| canto da duração (320 × 320 do palco) | livre (alfa 0) | livre | livre |
| luminância média | 99,7 | 97,6 | 83,2 |
| JPG de 1280 | 289 KB, q 95 | 371 KB, q 95 | 294 KB, q 95 |

Para comparar: "ZERO" tinha 14,3 px na 168, "VIPERS" 11,9 e "3 MILLION" 10,8.

## A conferência

**Os três tamanhos, com o título do Lucas embaixo** (`r2-folha.png`, com o selo). Olhei cada uma a 1280, a 320, a 168 e a 168 ampliada 3 vezes.
- **Na 168:**
  - "KILLER" e "< 1 MONTH" leem bem;
  - "NOT THE" lê;
  - "BEES & WASPS 42" lê, apertado;
  - "10 YEARS OF VENOM" e "SNAKES 35" estão no limite;
  - "DEATHS, 2016–2025" e as pílulas (INLAND TAIPAN, ROADS) não leem.
- **Na 320:** tudo lê.
- **O vermelho de cada uma lê na 168:** a mancha do Channel Country, a teia das rodovias e o país inteiro.
- O selo não cobre nada.

**A geografia** (`r2-conferir.py` → `r2-conferencia.json`; sem rede):
- **O quadro:** a Nova Zelândia fica fora (pela geometria do NE). Os vizinhos que entram são a Indonésia, o Timor-Leste, a Papua-Nova Guiné, as Salomão,
  a Nova Caledônia e as ilhas australianas de fora do continente.
- **O Channel Country:** está 100 % dentro da terra do ABS.
  - Por estado: 67 % em Queensland, 17 % na Austrália do Sul, 8 % em New South Wales e 7 % no Território do Norte.
  - A área medida (304.677 km², numa sinusoidal simples) bate com os 30.409.437 ha do IBRA (304.094 km²).
  - **Os rios da ficha da taipan correm dentro dele:** 95 % do comprimento do Cooper e 66 % do Diamantina (o resto, rio acima, fora da biorregião). Do
    Warburton, 43 %. O lago Eyre fica fora (não toca).
  - O vermelho é a biorregião, não a área de ocorrência da cobra (a pauta v1 já pedia que "o vermelho não se diz 'a área da taipan'").
- **As rodovias:** há rodovia em todos os oito estados e territórios do continente e da Tasmânia (o ACT tem 0,63° de comprimento).
  - 93 % do casco branco cai sobre a terra do ABS; o resto é a largura das rodovias da costa, que passa da linha de costa.
  - O vermelho das rodovias foi cortado na terra.
- **O vermelho da n3 é a Austrália:** a terra do ABS contra a do Natural Earth 1:10m, além de 3 px da costa, discorda em **117 px (0,014 %)**. A
  discordância mais longe é o lago Alexandrina, na foz do Murray (139,26 E; 35,34 S), que o ABS conta como terra.
- **As caixas contra a base:** os números e as contas estão no json (85; 1.276 ÷ 12 = 106,3; 85 ÷ 106,3 = 0,8 mês; 35 e 42).
- **As palavras contra os títulos:**
  - nenhuma palavra igual em nenhuma das três;
  - a mesma raiz em duas: "VENOM" (n2) e "Venomous" (T3); "SNAKES" (n3) e "Snake" (T3);
  - a conferência não pega "DEATHS" (n3) contra "Die" (T2); está anotado aqui.
- **Nada de bicho, de gente, de foto, de víbora, de seta vinda da Ásia, nem de vermelho só num estado quando o fato é do país.**

## As fontes, as licenças e o crédito

| Camada | Fonte | Licença e crédito |
|---|---|---|
| a Austrália (a terra; o vermelho da n3) | ABS, ASGS Edition 3, `STE_2021_AUST_SHP_GDA2020.zip` (`d9b7f735…`), baixado na rodada 1 | **CC BY 4.0**, lida na rodada 1 (`_bases/abs-asgs3-digital-boundary-files.html`, `abs-copyright.html`). Crédito: **Australian Bureau of Statistics** |
| o Channel Country (n1) | **IBRA 7.1**, DCCEEW, serviço ArcGIS `IBRA7_Regions/FeatureServer/0`, região CHC (`ibra7-channel-country.geojson`, `815fc5b5…`), baixado na rodada 1 e não usado nela | **CC BY**, lida de novo hoje nos metadados (`_bases/ibra7-metadados.xml`): "CC - Attribution (CC BY)" e "Users must attribute the Australian Government Department of Climate Change, Energy, the Environment and Water as the data provider". Crédito: **DCCEEW (IBRA 7.1)** |
| as rodovias (n2) | Natural Earth 1:10m `ne_10m_roads`, o cache da máquina (`~/.regie/geo/natural-earth/`), sha256 `66a0c7b4…`, o mesmo que o Juneau registrou, do commit `ca96624` do `nvkelso/natural-earth-vector` (`out/juneau/_pesquisa/pauta-geo.json`) | **domínio público**: "All versions of Natural Earth raster + vector map data found on this website are in the public domain" (`_bases/naturalearth-terms-of-use.html`, lida na rodada 1). Sem crédito obrigatório |
| os vizinhos | Natural Earth 1:10m Admin 0, a cópia da pré-v1 (`239eec57…`) | domínio público |
| os rios e o lago Eyre (só nos ensaios e na conferência; **não estão nas finais**) | NE `ne_10m_rivers_australia` (`2ea77b86…`, rodada 1) e `ne_10m_lakes` do cache (`2d036f53…`, o da lista de camadas da pré-v1) | domínio público |
| as capitais (só no ensaio e2; **não estão nas finais**) | ABS GCCSA 2021 (`cc48b928…`, rodada 1) | CC BY 4.0 |
| o relevo, a altitude e o mar | NASA GIBS (ASTER GDEM; Blue Marble), o recorte `asia-*` da rodada 1 | aberta (o GetCapabilities da GIBS: "Fees: none", "AccessConstraints: none"); o reconhecimento da GIBS |
| as letras | `marca/fontes/inter` | SIL OFL |

**Na descrição do vídeo, se uma delas for:**
- as três: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data
  and Information System (ESDIS). Elevation: ASTER GDEM (NASA/METI). Blue Marble: NASA Earth Observatory." e "Australian boundaries: Australian Bureau of
  Statistics, ASGS Edition 3 (CC BY 4.0)";
- **a r2-n1, também:** "Channel Country bioregion: IBRA 7.1, Australian Government Department of Climate Change, Energy, the Environment and Water (CC
  BY)";
- a r2-n2: o Natural Earth não exige crédito; se a Sala quiser, "Roads: Natural Earth".
- Nada do OSM: não há crédito de OpenStreetMap.

## Os pedidos de rede: nenhum

- Toda base já estava no disco: as da rodada 1, em `_bases/`, e o NE do cache da máquina. O `_bases/pedidos.jsonl` termina no último pedido da rodada
  1 (16:31:41Z).
- Nenhum site novo, então nenhum robots.txt a ler. Nada recusou, nada se contornou.
- **Fora:** nada da MapTiler, nenhum serviço pago, nada desenhado à mão nem por IA, nenhum vidIQ, nenhum navegador, nenhum `SendMessage`, nenhum
  commit.

## O que declaro de método

- **Um comando meu foi recusado pela trava do canal** antes de rodar: sobrou, no fim de uma linha de Bash, um `python -` com heredoc vazio, um erro de
  digitação. Refiz sem ele. Nenhum `python -c`.
- **Apaguei os 8 caches do mapa** que eu mesmo gravei em `_bases/_tmp/` nos ensaios (`cache-*.npz`, ~590 MB). As finais rodam sem eles; os ensaios
  ficam.
- Os scripts de ver os ensaios (a tira de tamanhos, os recortes) ficaram no scratchpad da sessão, fora do canal.

## O que ficou fraco

- **As três:**
  - **duas passam do "2 a 4 palavras"** (`marca/embalagem.md` §1.1): a n2 tem 6 palavras e um sinal na caixa, mais a pílula; a n3 tem 7 palavras, em três
    linhas;
  - **nenhum leitor a frio viu as três.** A banca de quatro lentes (§3) não foi feita;
  - **o selo de duração (14:36) é ilustrativo**;
  - **a Nova Zelândia fica a 3,7 px da borda direita**: dentro da regra, mas no limite;
  - **cada uma serve melhor a um título** (n1 ao T1, n2 ao T2, n3 ao T3). No Test & Compare, cada uma vai aparecer com os três.
- **r2-n1:**
  - **o vermelho é pequeno**: ~17 × 21 px na 168;
  - **a pílula "INLAND TAIPAN" não lê na 168**: ali sobra "NOT THE KILLER" e uma mancha, e "killer de quê?" fica para o título;
  - **"KILLER" é palavra forte** e pode ler como "mito desmentido" (o risco que a pauta v1 já dava), ou como "a taipan nunca matou", que é NÃO CONFERIDO;
  - **com o T3, repete a virada do título**;
  - **paga tarde** sem o T3: só no fim do ato 3 (~7:16) e no ato 4;
  - **as duas cobras pelo endereço ficaram pela metade** (só a taipan; a marrom, A LER, e sem área aberta lida);
  - **o contorno do IBRA foi limpo** (3,5 % dos px);
  - **o vermelho é a biorregião**, não a área da cobra.
- **r2-n2:**
  - **"10 YEARS OF VENOM" tem 6,2 px na 168**, e a pílula "ROADS" não lê ali: na 168 sobram "< 1 MONTH" e a teia vermelha;
  - **o "<" pode não ser lido** como "menos que" de relance;
  - **"VENOM" é a raiz do "Venomous" do T3**;
  - **a rede é a das rodovias principais do NE**, e as mortes são de todas as estradas;
  - **a rodovia da seta não tem nome na fonte**;
  - **2025 é preliminar** no ABS: se ele revisar, a âncora muda (pauta §4.7), e a miniatura também;
  - **a caixa ocupa 58 % da largura**.
- **r2-n3:**
  - **a mais fraca na 168**: "BEES & WASPS 42" tem 7,5 px, e "DEATHS, 2016–2025" não lê;
  - **repete "SNAKES"** com o T3, e "DEATHS" encosta no "Die" do T2;
  - **é o mesmo desenho da m1** da rodada 1 (o país inteiro em vermelho, a caixa embaixo à esquerda); muda o texto;
  - **a caixa ocupa 61 % da largura** e fica a 26 px da ilha Kangaroo;
  - **"42 contra 35" não choca como "zero" ou "1 em 3 milhões"**: a surpresa é o objeto (a abelha), não o tamanho do número;
  - **paga só no ato 1** (0:44–2:45), não no gancho A;
  - **o vermelho do país inteiro é cor de perigo** (o Dale, na m1). Aqui não contradiz o número, mas é o mesmo vermelho.

## Para a Sala (git)

- **O `.gitignore` deixa de fora** `_bases/` (linha 105) e os PNGs desta pasta (linha 106): a `r2-folha.png` e as prévias `r2-*-320.png` e
  `r2-*-168.png` não sobem. Conferido com `git check-ignore`.
- **Sobem** os `r2-*-1280.jpg` (289 a 371 KB) e `r2-*-2560.jpg` (568 a 761 KB), os `r2-*-pontos.json`, o `r2-conferencia.json`, os `.py` (`r2-n1.py`,
  `r2-n2.py`, `r2-n3.py`, `r2_comum.py`, `r2-folha.py`, `r2-conferir.py`) e este relato.
- **Nada pessoal** em arquivo nenhum. O User-Agent não foi usado (nenhum pedido de rede).
