# Vídeo 5 (`big-sur`): a descrição do YouTube e o resto da publicação (rascunho de 06/11/2026)

**O título do vídeo:** *Why This Stretch of California Is as Empty as Wyoming* (53 caracteres), o título aprovado pelo Lucas com a pauta
(02/11/2026; `roteiros/big-sur/roteiro-narrador.md`, l. 1, e `pautas/2026-11-01-video-5-big-sur.md` §2). A voz o paga nas 3 primeiras
frases: o pedaço da Califórnia (F1, "This is Big Sur, between Los Angeles and San Francisco"), o normal (F2, as duas metrópoles) e o núcleo
(F3, "fewer than 1,500 people, as empty as Wyoming"). O título é um só, e o teste do YouTube (Test & Compare) vai com duas miniaturas
(abaixo, "As miniaturas do teste").

Escrita no fechamento do vídeo, na forma da do Atlântico (`out/atlantico-fundo/descricao-youtube.md`), já na medida curta que o Lucas pediu
lá ("A descrição está MUITO grande, não?", 30/10/2026). O que entra e de onde veio:
- **o resumo** segue o molde do Geoff (o gancho falado quase palavra por palavra; `out/_analises/geography-by-geoff/relatorio.md` §4). As
  frases são as do gancho e do p1 de `roteiros/big-sur/roteiro-narrador.md`, com três mudanças de forma, sem fato novo:
  - "This is Big Sur, between…" ganhou "on the California coast", para quem lê sem a imagem;
  - "the census district around this bridge" virou "the census district that carries the name Big Sur" (a frase do p1: "This one, in
    Monterey County, carries the name Big Sur"), porque sem a imagem "this bridge" não aponta para nada; e "in 2020" e "about six per
    square mile" vêm do p1 ("The count is from 2020, the most recent census"; "you get about six people per square mile. Wyoming had about
    the same that year");
  - o "rulebook" e os pontos viraram dois-pontos, para o parágrafo caber no começo da descrição.
  Ele termina na pergunta do gancho ("So why didn't it fill up?"), sem dar a resposta. Sem venda: nenhuma linha de comunidade, loja ou
  patrocínio. O texto da voz passou pelo `verificador-de-fatos` (`roteiros/big-sur/qc-roteiro/fatos.laudo.md` e os laudos de tela), e
  nada novo entrou aqui: por isso a descrição não teve laudo próprio, como a forma curta do Atlântico;
- **os capítulos** são os `_capitulos` do `espelho.json`, cada um conferido contra a primeira palavra da parte no `words.json` (`f6055f41…`;
  `out/big-sur/_tmp/descricao/capitulos.py`), com o tempo arredondado para baixo: 55,74 → 0:55 ("Let's start with the district's number");
  132,68 → 2:12 ("Picture it."); 277,54 → 4:37 ("They ranched…"); 345,31 → 5:45 ("Work on the coast highway began…"); 445,07 → 7:25 ("The
  county's answer took final form…"); 548,60 → 9:08 ("So how long can a coast…"); 646,97 → 10:46 ("So go back to the house…"). O primeiro
  em 0:00, 8 capítulos, o mais curto com 55 s (o gancho), o último com 141 s até o fim (787,8 s, 13:07,8; a fala acaba em 767,57 s, e os
  20 s finais são a tela final). O título do gancho é o da assinatura ("this is where the story of the coast that never filled up
  begins"); os outros são os do espelho, palavra por palavra;
- **a pergunta** é a `_pergunta_cta` do `textos-tela.json`, "Would you live on this coast?", palavra por palavra, na descrição e no
  comentário fixado (`_pergunta_cta` › `descricao_e_comentario_fixado`: "a mesma pergunta, palavra por palavra");
- **as fontes** estão na tela, cena a cena ("Sources are shown on screen."): o U.S. Census Bureau (o Censo de 2020, as estimativas de 2025
  e a American Community Survey de 2020–2024), o Big Sur Coast Land Use Plan do condado de Monterey (1986), a Caltrans (2025 e 2026), a
  Federal Highway Administration (2017) e a página do incêndio da CAL FIRE (atualizada em 20/10/2026) (`out/big-sur/_tmp/descricao/
  creditos-das-cenas.txt`). A versão com links, com a citação inteira de cada uma, fica para quando o YouTube liberar os links ("Pendente");
- **as imagens**: os 28 arquivos de `_media/` que as cenas citam, cada um casado com um `aprovado` do `_pesquisa/conferencia-midia.json`
  (pelo sha256 do `_PROCEDENCIA.json`, ou pela URL do item no footage de banco; nenhum ficou sem veredito; `out/big-sur/_tmp/descricao/
  midia-casada.txt`; os 3 "SEM VEREDITO" de lá são nomes cortados com "…" dentro das mensagens de erro do JavaScript, não arquivos):
  - as 8 fotos do Commons vão com o autor e a licença, como o `credito_na_tela`: Mavic of Steel, Natecation, Marty Aligata (duas), Jav72 e
    Joe Mabel (CC BY-SA 4.0), S. Rae (CC BY 2.0) e Jerrye and Roy Klotz MD (CC BY-SA 3.0);
  - **a do Nepenthe (s52)** vai com tudo o que o veredito pede em `na_descricao`: o título do arquivo, a página, os autores, a licença com o
    endereço e a mudança ("cropped; text added"). Na SEM LINKS, os endereços vão como texto, sem "https://", como os do Atlântico;
  - as de domínio público vão como cortesia, pelo nome da instituição: o USGS (a foto aérea de Mud Creek, 2017), o U.S. Forest Service (os
    dois vídeos de Andrew Avitt no DVIDS, 2026), a NOAA (a foto de 1932 de Floyd Risvold, do U.S. Coast & Geodetic Survey), o Historic
    American Buildings Survey (HABS CA-2734, os fornos de cal) e o U.S. Census Bureau (o questionário da ACS);
  - as 3 fotos da Caltrans vão com o nome do órgão (a origem não pede crédito; `marca/midia.md` §7.5, como na tela);
  - o still de satélite da mesa (`_media/base/landsat-big-sur*.png` e `mesa-big-sur*.png`, em 16 cenas, Landsat do USGS) vai como
    "Landsat imagery courtesy of the U.S. Geological Survey", a linha do `credito_descricao` da procedência, como no Peru e no Atlântico
    (a lista das passagens do Landsat fica na procedência, pelo tamanho);
- **o footage dos bancos pagos**: 11 clipes, 9 do Envato Elements, 1 do Motion Array e 1 da Storyblocks. Nenhum dos três pede crédito
  (`marca/midia.md` §3.1 a §3.3), e nenhum clipe é do Shutterstock: a linha "used under license from Shutterstock.com" não entra;
- **a geometria**: só a OpenStreetMap pede atribuição (a Highway 1, as pontes, a estrada Nacimiento-Fergusson, o Nepenthe, o mirante e o rio
  Big Sur; ODbL), e ela já está na linha dos mapas. O Census (TIGER/Line e Cartographic Boundary), o GNIS do USGS e a PAD-US 4.1 do USGS são
  domínio público e não pedem crédito (`out/big-sur/_creditos-mapa.md`, "De onde veio cada linha"); a PAD-US entra numa linha curta, porque
  as áreas protegidas são uma das respostas do vídeo;
- **os mapas** e **a música** são os blocos de `_creditos-mapa.md` (MapTiler e OSM, com a ODbL) e `_creditos-trilha.md` (Epidemic Sound,
  "<Artista> / <Música> / courtesy of Epidemic Sound" e o endereço), copiados. A música não passou por ferramenta nenhuma: só os créditos
  em texto.

**Pendente (antes de publicar):**
- **A miniatura:** decidida (abaixo, "As miniaturas do teste"): a A2 e a B no Test & Compare, com o título único.
- **Os links:** como no Peru e no Atlântico, vai primeiro a versão SEM LINKS. Quando o YouTube liberar os links, a Sala faz a versão
  completa, com a citação e o endereço de cada fonte e de cada licença (a MapTiler e a OSM pedem os links na descrição; `_creditos-mapa.md`).
  Se o YouTube recusar a SEM LINKS por causa dos endereços em texto, a Sala decide com o Lucas; crédito de licença nunca sai.
- **Os tempos dos capítulos** se conferem no vídeo exportado: a montagem não muda o relógio (a vinheta, a inscrição e o comentário são
  chamadas na V3, por cima), mas um corte mudaria.

## A versão SEM LINKS, a que vai agora

```text
This is Big Sur, on the California coast between Los Angeles and San Francisco. Their metro areas hold more than 17 million people. But the census district that carries the name Big Sur counted fewer than 1,500 people in 2020, about six per square mile, as empty as Wyoming. It isn't a harsh climate: Monterey County's 1986 plan for this coast calls the climate mild. And it isn't that nobody came: by the 1880s, the same plan says, nearly a thousand people were living along this coast. So why didn't it fill up?

Would you live on this coast? Answer in the comments.

0:00 The coast that never filled up
0:55 The number, and the district it belongs to
2:12 Try to build a house
4:37 Nearly a thousand, by sea
5:45 A road cut into the cliffs
7:25 The rule about what you can see
9:08 Three years without the road, then fire
10:46 Empty homes, passing visitors, and the view from Bixby Creek

Sources are shown on screen.
Photos via Wikimedia Commons (may have been cropped or resized for the video): Mavic of Steel; Natecation; Marty Aligata; Jav72; Joe Mabel (CC BY-SA 4.0); S. Rae (CC BY 2.0).
Nepenthe photo: "NEPENTHE - BIG SUR COAST OF CALIFORNIA" by Jerrye and Roy Klotz MD, commons.wikimedia.org/wiki/File:NEPENTHE_-_BIG_SUR_COAST_OF_CALIFORNIA.jpg, CC BY-SA 3.0 (creativecommons.org/licenses/by-sa/3.0), cropped; text added.
Public domain: U.S. Geological Survey; Landsat imagery courtesy of the U.S. Geological Survey; U.S. Forest Service (video by Andrew Avitt, via DVIDS); NOAA (Floyd Risvold, U.S. Coast & Geodetic Survey, 1932); Historic American Buildings Survey (HABS CA-2734); U.S. Census Bureau.
Photos courtesy of Caltrans.
Maps: © MapTiler (www.maptiler.com/copyright) · © OpenStreetMap contributors, data under the Open Database License (www.openstreetmap.org/copyright)
Protected areas: USGS Gap Analysis Project, PAD-US 4.1

Music:
Spirits Of Our Dreams / As Life Decides / courtesy of Epidemic Sound
DEX 1200 / The Lost Forest / courtesy of Epidemic Sound
Hanna Lindgren / Familiar Patterns / courtesy of Epidemic Sound
Colors of Illusion / Just Another State of Mind / courtesy of Epidemic Sound
www.epidemicsound.com
```

## O comentário fixado

A pergunta, palavra por palavra (`textos-tela.json` › `_pergunta_cta`; `marca/cta.md`):

```text
Would you live on this coast?
```

## As miniaturas do teste

O Lucas, no chat da Sala, em 06/11/2026, à pergunta "Quais miniaturas do Big Sur vão para o teste do YouTube (Test & Compare, até 3), com o
título único…?": **"A nova ONLY e a ROAD (Recomendado)"**. Para subir no Studio, as de 1280×720 (abaixo de 2 MB):
- **A2, "ONLY 1,474"**: `roteiros/big-sur/miniatura/miniatura-A2-1280.jpg`. O satélite Landsat de outubro de 2025 (USGS, domínio público), o
  distrito de censo de Big Sur em `--destaque`, projetado do polígono do TIGER/Line 2020 pela janela da base (não desenhado a olho), e as
  pílulas "SAN FRANCISCO" e "LOS ANGELES" na direção real de cada metrópole, que ficam fora do quadro. A composição segue a 3ª versão que o
  Lucas gerou numa IA de imagem para comparar (ele a preferiu; o mapa dela era inventado), com o mapa real. Os nomes das cidades vão em caixa
  alta, como na versão da IA (a receita da `embalagem.md` §3 pede Inter em caixa normal: seguiu-se o modelo que o Lucas escolheu);
- **B, "ROAD KEEPS FALLING"**: `roteiros/big-sur/miniatura/miniatura-B-1280.jpg`. A foto aérea do USGS de Mud Creek (27/05/2017, domínio
  público, `aprovado` no `conferencia-midia.json`; o script confere o sha256 antes de usar), com o selo "MUD CREEK · MAY 2017", porque a foto
  é de outro ano que o de hoje (o aviso do ano, `marca/identidade.md` §6). A voz paga a promessa aos 38 s ("and a road that keeps giving way",
  `words.json`, palavra 108, 38,39 s) e nas partes 2 e 6 (Mud Creek, Paul's Slide e Regent's Slide; os três anos sem a estrada).

As duas foram feitas por um agente novo, sem rede, em Python (`base-A2.py` e `base-B.py`; a primeira versão, `base-A.py`, fica de registro), e
conferidas nos 3 tamanhos (1280, 320 e 168: o texto-herói e o distrito leem nos três; os nomes das cidades ficam no limite no 168). Não passaram
pela banca de quatro lentes nem por leitores a frio (`embalagem.md` §3.1), para poupar a cota da semana: quem mede é o teste do YouTube. Os
relatos: `roteiros/big-sur/miniatura/A-RELATO.md` e `B-RELATO.md`.

## As tags

Separadas por vírgula, para colar no campo de tags do YouTube. "Big Sur" é a primeira; "Alpha Point" é a última, como no Peru e no Atlântico.
Nenhuma diz o que o vídeo revela no fim. A contagem está em "A conferência", abaixo.

```text
Big Sur, Big Sur California, California coast, Highway 1, Bixby Bridge, Monterey County, Santa Lucia Mountains, Wyoming, Los Angeles, San Francisco, census, population density, Big Sur Coast Land Use Plan, Mud Creek, Regent's Slide, Paul's Slide, Pacific Coast Highway, Nepenthe, California geography, US geography, geography documentary, map documentary, Alpha Point
```

## A categoria, o idioma e o resto do Studio

Pelo perfil do canal (`estudio/marcas/alpha-point/publicacao-youtube.json`, com as decisões do Lucas de 24 e 25/10/2026), como no Atlântico:
- **Categoria:** Education (27). **Idioma do vídeo e do áudio:** English (en).
- **Feito para crianças:** não. **Licença:** padrão do YouTube. **Incorporação:** permitida.
- **Conteúdo alterado ou sintético:** desmarcado (Lucas, 24/10/2026: "Deixar desmarcado (Recomendado)").
- **E-mail de contato na descrição:** nenhum (Lucas, 25/10/2026: "Nenhum, como hoje").
- **Monetização:** como o Lucas tiver no Studio (em 25/10/2026, o canal ainda não estava no Programa de Parcerias).
- **Os capítulos** entram pela própria descrição (o primeiro em 0:00, 8 capítulos, cada um com 55 s ou mais). Nenhum card de capítulo na
  tela (Lucas, 26/09/2026).
- **A tela final:** os 20 s sem voz, de 12:47,8 ao fim. O comentário fica à esquerda, de 12:50,3 a 12:56,3; a metade direita fica livre
  para os elementos finais do YouTube.
