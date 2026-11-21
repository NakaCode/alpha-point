# Vídeo 8 (`australia-animais`): a descrição do YouTube e o resto da publicação (rascunho de 20/11/2026)

**Os títulos do vídeo.** Não é um título só: o teste do YouTube (Test & Compare) vai com 3 pares de título e miniatura (o Lucas, 18/11/2026, ~14:1x e ~15:3x;
`roteiros/australia-animais/decisoes-lucas.md`). A descrição serve aos três, porque o gancho do roteiro os paga (`words.json` `064f54a0…`):
- **T1, *Australia's Deadliest Snake Isn't Its Most Venomous One*** (55 caracteres), com a r3-n1 ("NOT THE KILLER"). A voz o paga em 4,80–7,27 s ("the
  land snake with the most potent venom on Earth") e em 11,96–14,52 s ("the inland taipan isn't even the snake that kills the most Australians");
- **T2, *Why So Few People Die From Australia's Deadly Animals*** (53), com a r3-n2 ("10 YEARS OF VENOM DEATHS < 1 MONTH"). A voz o paga em 25,14–27,37 s
  ("a country famous for its deadly animals"), em 34,2–35,3 s (os 85 mortos em dez anos) e em 44,71–49,41 s ("how does a country with so many venomous snakes
  end up with so few deaths?");
- **T3, *Why Does Australia Have So Many Dangerous Animals?*** (50, o do Lucas), com a r3-n1. No gancho ele é pago por "a country famous for its deadly
  animals" e "so many venomous snakes"; palavra por palavra, ele abre o ato 1, em 56,71–59,43 s ("Why does Australia have so many dangerous animals?"), e por isso
  o capítulo de 0:54 leva "dangerous animals" no título.

A r3-n3 ("SNAKES 35 / BEES & WASPS 42") é a reserva.

## Os voláteis: as frases da descrição que dependem deles

**Relidos em 20/11/2026, das 20:38 às 20:43, pelo `verificador-de-fatos`:** os 6 grupos de voláteis da tela continuam valendo (6 `vale`, 0 `mudou`, 0 `não
conferido`; `roteiros/australia-animais/qc-roteiro/volateis-2026-11-20.laudo.md`, NOTA 9/10, PASS), e os três títulos e as três miniaturas também. Os dois cubos
do ABS baixados hoje (2025_01 e 2025_15) são byte a byte os de 18/11: o 85, o zero das aranhas e os 1.276 da estrada em 2025 (≈ 106 por mês) não mudaram. Falta um
ponto porque, para 2026, o "NO CONFIRMED DEATH SINCE" se apoia só em buscas que nada acharam (o ABS vai até 2025). A descrição diz o que a tela diz.

A descrição diz o que a tela diz. Se um deles mudar antes de publicar, troque a frase que vem com ele. As quatro estão no resumo (a 1ª e a 3ª também estão no
T2 e na miniatura r3-n2). Os ids são os do `roteiros/australia-animais/qc-roteiro/fatos-tela.laudo.md` ("Os voláteis", l. 103–112):

| a frase da descrição | o volátil (ids do laudo de tela) | o que a tela diz hoje | o que a muda |
|---|---|---|---|
| "every venomous animal in Australia combined killed 85 people" (e o "Why So Few People Die…" do T2) | `= 85` (VT-021, VT-023, VT-024, VT-037): ABS, *Causes of Death, Australia, 2025*, X20–X29, 2016–2025 | 4 + 10 + 19 + 6 + 9 + 6 + 6 + 8 + 11 + 6 = 85, "2023 REVISED · 2024–2025 PRELIMINARY" | uma nova revisão ou edição do ABS (2023 revisado, 2024 e 2025 provisórios) |
| "Spiders killed none" | `SPIDERS (X21): 0 · 2016–2025` (VT-075, VT-331) | 0 nos dez anos | uma revisão do ABS que ponha um caso de aranha |
| "Australia's roads killed more people in an average month of 2025 than venom did in that whole decade" (e a miniatura r3-n2, "10 YEARS OF VENOM DEATHS < 1 MONTH") | `ROADS · AN AVERAGE MONTH OF 2025`, `≈ 106` (VT-034, VT-035): ABS, Table 15.4, 2025 preliminar | 1.276 ÷ 12 = 106,3 por mês, contra 85 em dez anos | a revisão do ABS para 2025; a frase só cai se o mês médio descer abaixo de 85 (a folga é de 106 contra 85) |
| "about two in three of Australia's snake species belong to the same venomous family it does" | `≈ 2 IN 3`, `150 OF 229 SNAKE SPECIES` (VT-012, VT-013, VT-137): The Reptile Database, busca de 18/11/2026 | 150 de 229 = 65,5 %, com a nota "Alpha Point count … searched Nov. 18, 2026" | uma espécie nova, ou um nome mudado, na base |

**Não são voláteis (não entram nesta tabela):** o T1 e a miniatura r3-n1 se apoiam no teste de 1979 em camundongos e no estudo de 2005–2015 (17 das 23 mortes por
cobra, da marrom), que não mudam. O T3 não tem número.

**Não entram na descrição, de propósito:** o "no one has died from a funnel-web bite" e o "about half" do parque (VT-401 a VT-420, nota do parque de 13/01/2026), o
"no confirmed death since" do funnel-web e do redback (VT-311, VT-320), os ≈ 58.000 da OMS (VT-239) e o cargo do Arbuckle. Eles ficam só na tela e na voz.

## O que entra, e de onde veio

Escrita na forma da do vídeo 7 (`out/rio-columbia/descricao-youtube.md`), na medida curta que o Lucas pediu no Atlântico ("A descrição está MUITO grande, não?",
30/10/2026). As ferramentas são as de `out/rio-columbia/_tmp/descricao/`, copiadas e adaptadas para `out/australia-animais/_tmp/descricao/`.
- **o resumo** é o gancho de `roteiros/australia-animais/roteiro-narrador.md`, as 10 frases dos 4 parágrafos, **palavra por palavra, sem nenhuma mudança de forma**
  (a assinatura "You're at Alpha Point, and this is where the story of Australia's venom begins." não entra). Nada precisou mudar por causa da tela: o "By our count"
  é a "Alpha Point count: The Reptile Database, searched Nov. 18, 2026" de s05 e s28, e o resto se lê sem a imagem ("the inland taipan" abre o resumo). Ele termina na
  pergunta do gancho ("So how does a country with so many venomous snakes end up with so few deaths?"), sem dar a resposta. Sem venda: nenhuma linha de comunidade,
  loja ou patrocínio. O texto da voz passou pelo `verificador-de-fatos` (`roteiros/australia-animais/qc-roteiro/fatos.laudo.md`) e nada novo entrou aqui: por isso a
  descrição não teve laudo próprio, como no vídeo 7;
- **os capítulos** são os `_capitulos` do `espelho.json`, cada um conferido contra a primeira palavra da parte no `words.json`
  (`out/australia-animais/_tmp/descricao/capitulos.py`), com o tempo arredondado para baixo: 54,73 → 0:54 ("You've probably heard the question"); 189,60 → 3:09 ("Go to the
  bottom of the globe"); 325,18 → 5:25 ("Then the continent dried out"); 458,52 → 7:38 ("The test that crowned the inland taipan"); 610,63 → 10:10 ("It's in the
  water, and it comes with a season"); 752,00 → 12:32 ("In the venom records, the top of the list isn't a snake"); 895,72 → 14:55 ("North of Sydney, on the Central Coast"). O primeiro em
  0:00, 8 capítulos, o mais curto com 54 s (o gancho), o último com 86,9 s até o fim (981,87 s, 16:21,87, os 29.456 quadros a 30 fps; a fala acaba em 961,64 s, e os 20 s finais
  são a tela final);
  - **a inscrição falada** (453,25 s, 7:33, "If you've followed the venom this far, subscribe to Alpha Point.") não é capítulo: dura 5 s, e o YouTube pede 10 s no mínimo.
    Ela cai no fim do capítulo "The inland taipan's address", e o capítulo seguinte começa em 7:38, onde a voz volta ao assunto;
  - **os títulos** do espelho estão em português, e os de cima são meus, em inglês, com palavras do roteiro de cada parte (nenhum é o do espelho, que é descrição de
    arte, não título de leitor):

    | tempo | o título | de onde saiu (o roteiro) |
    |---|---|---|
    | 0:00 | The story of Australia's venom | a assinatura do gancho: "this is where the story of Australia's venom begins" (a mesma regra do vídeo 7 e do Big Sur) |
    | 0:54 | The dangerous animals and the short death toll | "Why does Australia have so many dangerous animals?" (a 1ª frase do ato 1) e "the famous list is real, then, and the death toll is short" (no meio do ato 1) |
    | 3:09 | Where the snakes came from | a ponte do ato 2: "So that's where the snakes came from" |
    | 5:25 | The inland taipan's address | "This is where the inland taipan lives" e "Then check the address." |
    | 7:38 | The brown snake, and why few die of snakebite | "the brown snake" (a 1ª frase do ato 4) e "Medicine is part of why so few people die of snakebite" |
    | 10:10 | Box jellyfish, funnel-webs and redbacks | os três bichos do ato 5: "the box jellyfish", "Funnel-web spiders", "The redback" (o espelho diz "o norte e as aranhas") |
    | 12:32 | What does kill Australians? | a pergunta que abre o ato 6, no fim do ato 5: "Then what does kill Australians?" |
    | 14:55 | The Reptile Park and the funnel-webs | "the Australian Reptile Park milks funnel-web spiders" (a 1ª frase do fecho); nenhum título dá o fim ("no one has died"), só o assunto |

    Se a Sala preferir outro, troque só essa linha. O de 0:54 é o que carrega o T3 ("dangerous animals");
- **a pergunta** é a `_pergunta_cta` do `textos-tela.json`, "Which animal on the list worries you most?", palavra por palavra, na descrição e no comentário fixado
  (`marca/cta.md` §7: "a mesma pergunta vai também na descrição e no comentário fixado, palavra por palavra"), com o "Answer in the comments." da peça clara: a peça deste vídeo
  (`out/australia-animais/cta/comentario-cima.medidas.json`) leva a pergunta na placa e o "Answer in the comments" na faixa clara (y 655–823), e a `_pergunta_cta` conta as 4 palavras
  da ação (12 palavras, 6,5 s). Ela está em cima, à direita, de 15:46,7 a 15:53,2 (`regencia.json` › `_chamadas`: `comentario`, em s73, `inSec` 946,74, `dur` 6,5), antes da tela final;
- **as fontes** estão na tela, cena a cena ("Sources are shown on screen."), e não vão uma a uma para a descrição, como no vídeo 7. Os donos delas estão em
  `out/australia-animais/_tmp/descricao/creditos-todos.txt` e `fontes-da-tela.txt`. A versão com a citação inteira de cada uma fica para quando o YouTube liberar os links
  ("Pendente");
- **as imagens**: os 49 arquivos de `_media/` que as cenas citam, achados no código das 65 cenas de `graphics/` (fora dos comentários: `_tmp/descricao/inventario.py`,
  `inventario.txt`) e cada um casado com um `aprovado` do `_pesquisa/conferencia-midia.json` (pelo sha256 do `_PROCEDENCIA.json`, ou pela URL do item no footage de banco;
  nenhum ficou sem veredito: `_tmp/descricao/casar-midia.py`, `midia-casada.txt`): 23 fotos, 25 vídeos e 1 página de documento. Nenhum é de pessoa nem de logo, e nenhuma cena usa
  bandeira;
  - **as 23 fotos** são do Wikimedia Commons, 22 de 18 autores com licença Creative Commons e 1 da NASA (domínio público). Vão com o autor e a licença, como o
    `credito_na_tela` do veredito, **agrupadas por licença** para a linha ficar curta: CC BY 4.0 (thebeachcomber, Thomas Mesaglio, Ramit Singal, dreworme), CC BY-SA 4.0
    (Björn Söderlund, Sw3dPix; Jurie.vw; Oliver Neuman; Greg Tasney; Calistemon; Andrew Mercer; hntro), CC BY-SA 3.0 (XLerate; JJ Harrison), CC BY 3.0 (CSIRO; David McClenaghan,
    CSIRO) e CC BY 2.0 (John Tann from Sydney, Australia, em 5 fotos; Ian Sutton from Oberon, Australia; Matt from Melbourne, Australia). Os dois nomes "thebeachcomber" e "Thomas
    Mesaglio" são da mesma conta do iNaturalist (o veredito de s55 diz que ela publica como thebeachcomber), e a tela mostra um em s08 e o outro em s55: a descrição os dá como a tela. "Björn Söderlund, Sw3dPix" e
    "David McClenaghan, CSIRO" trazem vírgula no nome do autor, e por isso a linha separa os autores por ponto e vírgula;
  - **a NASA** (a foto de astronauta do Cooper Creek, 2020, s01 e s02) e o still do Landsat (a mesa de 30 cenas e o fundo de s11) vão como cortesia, no "Public domain": nenhum pede crédito, e a
    linha do Landsat é a do `credito_descricao` da procedência ("Landsat imagery courtesy of the U.S. Geological Survey"), como no vídeo 7;
  - **o vídeo da caixa-medusa (s51)** é o S2 Video da PLOS ONE de 2020 (CC BY 4.0), da James Cook University. Vai com o que a procedência pede em `para_a_descricao_do_youtube`: os autores (Rowley,
    Courtney, Browning e Seymour; Bianchi é o editor, não autor), o título do artigo, o veículo, o DOI do vídeo, a licença com o endereço e a nota "cropped and enlarged"
    (a CC BY 4.0 pede a indicação das mudanças; Lucas, 20/11/2026, 13:38: "o link da licença e a nota 'recortado e ampliado' na descrição");
  - **a página do artigo da PLOS Neglected Tropical Diseases (s37)**: a p. 17 de Ainsworth et al. (2026, CC BY 4.0) aparece inteira, e o trecho ampliado ao lado é refeito na letra do canal. A linha traz "Ainsworth et al." (a forma da tela e da licença do artigo, "© 2026 Ainsworth et al."; os cinco autores estão no veredito), o
    título principal (sem o subtítulo, que tem 130 caracteres no total), o veículo, o DOI e a licença, e a nota "page 17; excerpt retyped" (a mudança). A licença cobre o texto do artigo, não o logo da
    PLOS NTD, que ficou fora do recorte da página (procedência, `licenca_exclusoes`);
- **o footage dos bancos pagos**: 25 vídeos nas cenas, 13 do Shutterstock, 6 da Storyblocks, 5 da Motion Array e o da PLOS (acima). A Storyblocks e a Motion Array não pedem crédito (`marca/midia.md` §3.2 e §3.3).
  **O Shutterstock pede a linha** `Image(s) and/or video used under license from Shutterstock.com` (`marca/midia.md` §3.4), na faixa de crédito da última cena (s74, VT-433, conferida) e na descrição, e **sem o nome
  do artista** (o Lucas, 19/11/2026, 14:18, à pergunta do crédito do Shutterstock: "Sim e opção B"; nenhuma cena leva `<artista>/Shutterstock.com`, como o laudo de tela confirmou em todos os 433 textos). Os 13 clipes:
  s03 (a taipan), s09 e s66 (a rodovia, o mesmo arquivo), s12 (a placa do cais), s65 (o tubarão), s15 (as formigas, a lagarta e a água-viva), s18 (o crocodilo), s25 (a naja), s30 (o coala), s42 (o gado), s51 (a rede e o mangue);
- **os dados**: a licença que pede atribuição também na descrição entra (`marca/midia.md` §7.3 e a procedência), numa linha só: o Australian Bureau of Statistics (Causes of Death, Australia, 2025,
  o Censo de 2021 e os contornos do ASGS Edition 3; a atribuição é a "Material obtained from this website is to be attributed to this department" do `abs-copyright.html`), o National Coronial Information System
  (a ficha de 2024 sobre mortes por animais: "Attribution must be provided to the National Coronial Information System (NCIS)", `pauta-documentos.md`) e o Department of Climate Change, Energy, the Environment and Water
  (o IBRA 7.1, o Channel Country: "Users must attribute the Australian Government Department of Climate Change, Energy, the Environment and Water as the data provider"). A tela marca as contas como "Alpha Point calculation",
  e a descrição diz "with calculations by Alpha Point" (a mudança). O modelo de placas (Müller et al. 2022, Solid Earth, CC BY 4.0) vai na mesma linha, com o DOI do artigo, o do Zenodo e a mudança que o
  `credito_descricao` da procedência pede (`_pesquisa/pauta-geo.json`: "Changes: present-day Natural Earth coastlines rotated by Alpha Point with the model's rotations" e,
  na camada das costas do GPlates, "the model's coastlines rotated by Alpha Point with the model's rotations, and simplified"), juntadas em "coastlines rotated (some
  simplified) by Alpha Point with the model's rotations". A CC BY 4.0 pede que a mudança seja dita, e a 1ª versão desta linha não a trazia (a Sala acrescentou, 20/11/2026, 21:05). O Natural Earth, o Wikidata (a coordenada do
  parque) e as linhas calculadas são domínio público ou CC0 e não pedem crédito (`out/australia-animais/_creditos-mapa.md`, "De onde veio cada linha");
- **os mapas**, **a música** e **as miniaturas**: os mapas e a música são os blocos de `_creditos-mapa.md` (a linha do MapTiler e da OSM; o perfil do canal repete a mesma em `publicacao-youtube.json` › `descricao.rodape`) e
  `_creditos-trilha.md` (Epidemic Sound, "<Artista> / <Música> / courtesy of Epidemic Sound" e o endereço, 5 faixas, copiadas linha a linha, sem o "https://"). A música não passou por ferramenta nenhuma: só os créditos em texto. Para
  as miniaturas, a linha "Thumbnail imagery" é a do vídeo 7, um pouco encurtada (o reconhecimento da NASA GIBS, o ASTER GDEM, a Blue Marble e o Natural Earth: `roteiros/australia-animais/miniatura/RELATO-r2.md`, "As fontes, as licenças e o crédito"). O ABS (as
  fronteiras da r3-n1 e da r3-n2) e o IBRA (o vermelho da r3-n1, "a r2-n1 leva o crédito do IBRA (DCCEEW) na descrição", Lucas, 18/11/2026, ~15:3x) já estão na linha dos dados, que vale para as cenas e para as duas miniaturas;
  a n2 (as rodovias do Natural Earth) não pede crédito.

**Os 36 créditos de foto do laudo de tela são 24 nas cenas.** O `fatos-tela.laudo.md` ("Os créditos de foto e de vídeo") conta os 36 textos de crédito de foto do `textos-tela.json`; os `graphics/` mostram 24 (de 22 fotos com crédito: a de John Tann em s12 e s46 e a
de dreworme em s56 e s70 aparecem duas vezes). Os 12 que faltam são de fotos que a arte trocou por footage depois do texto de tela: Ramit Singal em s03, Sylvain Dubey e o CSIRO em s15, JJ Harrison (CC BY 3.0) em s18, Jayendra Chiplunkar e Peter Paplanus em s25, Diego Delso em s30,
Kgbo em s42 e em s51, John Pons em s61, Christian Ferrer em s62, e o 2º crédito de Björn Söderlund em s12. No código das cenas essas fotos só aparecem em comentário `pauta-recusa` (`_tmp/descricao/uso-por-nome.py`), e o `extrair-creditos.py` não acha esses nomes no texto delas
(Ramit Singal e o CSIRO continuam na descrição, pelas fotos de s36 e s35). **Os autores que só vinham dessas fotos (Dubey, Chiplunkar, Paplanus, Delso, Kgbo, Pons e Ferrer) ficam de fora**, porque a descrição credita o que as cenas mostram. Se uma cena voltar a usar uma foto delas, o crédito entra.

**Pendente (antes de publicar):**
- **As miniaturas:** feitas e escolhidas (abaixo, "As miniaturas do teste"). Para subir no Studio, as de 1280 × 720.
- **Os voláteis:** relidos em 20/11/2026, todos valendo (a tabela do topo). Se a publicação passar de alguns dias, o laudo diz o que reler.
- **Os links:** como no Peru, no Atlântico, no Big Sur e no vídeo 7, vai primeiro a versão SEM LINKS. O perfil do canal (`publicacao-youtube.json`) não diz nada sobre links, e nenhum arquivo do canal registra que o YouTube os liberou
  depois de 17/11: **a Sala confere com o Lucas ao publicar**. Quando liberar, a Sala faz a versão completa, com o endereço de cada fonte e de cada licença: a MapTiler e a OSM pedem os links na descrição (`_creditos-mapa.md`), a Epidemic pede o do
  site, as licenças Creative Commons pedem o endereço de cada uma (BY 2.0 e 3.0; BY-SA 3.0 e 4.0; BY 4.0, a da PLOS está no texto) e o ABS manda ler "Attributing ABS material" para o texto exato da atribuição (essa página não está em nenhum arquivo do canal: conferir na
  origem). Se o YouTube recusar a SEM LINKS por causa dos endereços em texto, a Sala decide com o Lucas; crédito de licença nunca sai.
- **Os tempos dos capítulos** se conferem no vídeo exportado (981,87 s, 29.456 quadros, igual ao XML): a montagem não muda o relógio (a vinheta, a inscrição e o comentário são chamadas na V3, por cima), mas um corte mudaria.

## A versão SEM LINKS, a que vai agora

```text
Out on the cracked floodplains of the Australian outback lives the inland taipan, the land snake with the most potent venom on Earth. That ranking comes from a test on lab mice. But the inland taipan isn't even the snake that kills the most Australians. And it has plenty of relatives. By our count, about two in three of Australia's snake species belong to the same venomous family it does. Now look at the official death records of a country famous for its deadly animals. Over ten years, from 2016 to 2025, every venomous animal in Australia combined killed 85 people. Spiders killed none. Australia's roads killed more people in an average month of 2025 than venom did in that whole decade. So how does a country with so many venomous snakes end up with so few deaths?

Which animal on the list worries you most? Answer in the comments.

0:00 The story of Australia's venom
0:54 The dangerous animals and the short death toll
3:09 Where the snakes came from
5:25 The inland taipan's address
7:38 The brown snake, and why few die of snakebite
10:10 Box jellyfish, funnel-webs and redbacks
12:32 What does kill Australians?
14:55 The Reptile Park and the funnel-webs

Sources are shown on screen.
Photos via Wikimedia Commons (may have been cropped or resized for the video). CC BY 4.0: thebeachcomber; Thomas Mesaglio; Ramit Singal; dreworme. CC BY-SA 4.0: Björn Söderlund, Sw3dPix; Jurie.vw; Oliver Neuman; Greg Tasney; Calistemon; Andrew Mercer; hntro. CC BY-SA 3.0: XLerate; JJ Harrison. CC BY 3.0: CSIRO; David McClenaghan, CSIRO. CC BY 2.0: John Tann from Sydney, Australia; Ian Sutton from Oberon, Australia; Matt from Melbourne, Australia.
Box jellyfish video: Rowley OC, Courtney RL, Browning SA, Seymour JE (2020), "Bay watch: Using unmanned aerial vehicles (UAV's) to survey the box jellyfish Chironex fleckeri," PLOS ONE, S2 Video, doi.org/10.1371/journal.pone.0241410.s003; cropped and enlarged. Document page: Ainsworth et al. (2026), "Animal models in venom and antivenom research," PLoS Negl Trop Dis, doi.org/10.1371/journal.pntd.0014537; page 17, excerpt retyped. Both CC BY 4.0 (creativecommons.org/licenses/by/4.0).
Public domain: NASA; Landsat imagery courtesy of the U.S. Geological Survey.
Image(s) and/or video used under license from Shutterstock.com
Data: Australian Bureau of Statistics (Causes of Death, Australia, 2025; Census 2021; ASGS Edition 3), National Coronial Information System, and the Australian Government Department of Climate Change, Energy, the Environment and Water (IBRA 7.1), all CC BY 4.0, with calculations by Alpha Point. Plate model: Müller et al. 2022, Solid Earth, doi.org/10.5194/se-13-1127-2022, model files doi.org/10.5281/zenodo.13636799, CC BY 4.0; coastlines rotated (some simplified) by Alpha Point with the model's rotations.
Maps: © MapTiler (www.maptiler.com/copyright) · © OpenStreetMap contributors, data under the Open Database License (www.openstreetmap.org/copyright)
Thumbnail imagery: NASA Blue Marble and ASTER GDEM (a product of METI and NASA), via NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS); Natural Earth.

Music:
Sight of Wonders / A Shade of Steam / courtesy of Epidemic Sound
bomull / gryning / courtesy of Epidemic Sound
Brotin / Broken Home / courtesy of Epidemic Sound
Elm Lake / Time Does Not Matter / courtesy of Epidemic Sound
Megan Wofford / Echoes of Illumination / courtesy of Epidemic Sound
www.epidemicsound.com
```

## O comentário fixado

A pergunta, palavra por palavra (`textos-tela.json` › `_pergunta_cta`; `marca/cta.md`):

```text
Which animal on the list worries you most?
```

## As miniaturas do teste

O teste do YouTube (Test & Compare) vai com 3 pares de título e miniatura (o Lucas, 18/11/2026, ~15:3x: "Uma por título (Recomendado)", e "os consertos de leitura em 168 px entram na publicação"). Para subir no Studio,
as de 1280 × 720 (274 e 332 KB), em `roteiros/australia-animais/miniatura/` (as de 2560 ao lado; o código e as medidas em `r3-*.py` e `r3-*-pontos.json`; o relato, as fontes e as licenças em `RELATO-r3.md` e `RELATO-r2.md`):

| par | título | miniatura | arquivo para subir |
|---|---|---|---|
| 1 | *Australia's Deadliest Snake Isn't Its Most Venomous One* | r3-n1, "NOT THE KILLER" | `r3-n1-1280.jpg` |
| 2 | *Why So Few People Die From Australia's Deadly Animals* | r3-n2, "10 YEARS OF VENOM DEATHS < 1 MONTH" | `r3-n2-1280.jpg` |
| 3 | *Why Does Australia Have So Many Dangerous Animals?* (o do Lucas) | r3-n1, "NOT THE KILLER" | `r3-n1-1280.jpg` (a mesma) |

A r3-n3 ("SNAKES 35 / BEES & WASPS 42", `r3-n3-1280.jpg`) é a reserva.
- **r3-n1, "NOT THE KILLER"**: o Channel Country (IBRA 7.1) em vermelho sobre a Austrália em amarelo, a pílula "INLAND TAIPAN / SNAKE" (o conserto da rodada 3: agora diz que é cobra) e a caixa "NOT THE KILLER" com a seta ao vermelho. A voz paga a promessa em 11,96–14,52 s
  ("isn't even the snake that kills the most Australians"). Com o T1 ela repete a virada do título (o que o leitor Mia apontou, e a ideia da miniatura); com o T3 nada se repete;
- **r3-n2, "10 YEARS OF VENOM DEATHS < 1 MONTH"**: as rodovias do tronco do Natural Earth em vermelho sobre a Austrália em amarelo, a pílula "ROADS" e a caixa de três linhas. A voz paga a promessa em 34,2–44,5 s (os 85 mortos e "Australia's roads killed more people in an
  average month of 2025 than venom did in that whole decade"). **Ela envelhece com o ABS:** o 85 e o mês médio de 2025 (preliminar) são dos voláteis da tabela do topo; se o ABS revisar, troca-se junto;
- **as bases:** o ABS (os contornos de ASGS Edition 3, CC BY 4.0), o relevo ASTER GDEM e a Blue Marble, pela NASA GIBS (a linha "Thumbnail imagery"), o Natural Earth (as rodovias e os vizinhos, domínio público) e, na n1, o IBRA 7.1 do DCCEEW (CC BY). Os créditos estão na descrição.
  Nada do OpenStreetMap, nada de MapTiler.

## As tags

Separadas por vírgula, para colar no campo de tags do YouTube. "Alpha Point" é a última. A do assunto vem primeiro ("dangerous animals in Australia", a palavra do T3) e as de bicho são as que a voz ou a tela nomeiam (a taipan-do-interior,
a cobra-marrom, a água-viva, o funnel-web, a redback, o soro). Nenhuma diz o que o vídeo revela no fim (o parque do veneno e as poucas mortes são o desfecho; "Australian Reptile Park" ficou de fora por isso) e nenhuma afirma fato: as de assunto
("venomous animals", "antivenom", "Australian wildlife") só dizem do que o vídeo trata. A contagem está em "A conferência", abaixo.

```text
dangerous animals in Australia, deadly animals, venomous animals, venomous snakes, inland taipan, most venomous snake, Australian snakes, Australian animals, eastern brown snake, funnel-web spider, redback spider, box jellyfish, antivenom, snake venom, elapids, Channel Country, Gondwana, Australian wildlife, Australia geography, geography documentary, map documentary, Alpha Point
```

## A categoria, o idioma e o resto do Studio

Pelo perfil do canal (`estudio/marcas/alpha-point/publicacao-youtube.json`, com as decisões do Lucas de 24 e 25/10/2026), como no vídeo 7:
- **Categoria:** Education (27). **Idioma do vídeo e do áudio:** English (en).
- **Feito para crianças:** não. **Licença:** padrão do YouTube. **Incorporação:** permitida.
- **Conteúdo alterado ou sintético:** desmarcado (Lucas, 24/10/2026: "Deixar desmarcado (Recomendado)").
- **E-mail de contato na descrição:** nenhum (Lucas, 25/10/2026: "Nenhum, como hoje").
- **Monetização:** como o Lucas tiver no Studio (em 25/10/2026, o canal ainda não estava no Programa de Parcerias).
- **Os capítulos** entram pela própria descrição (o primeiro em 0:00, 8 capítulos, cada um com 54 s ou mais). Nenhum card de capítulo na tela (Lucas, 26/09/2026).
- **A tela final:** os 20 s sem voz, de 16:01,9 (o quadro 00:16:01:26) ao fim (16:21,9; 00:16:21:25), sobre o mapa que anoitece (a proposta B, "Anoitece nos dois endereços", do Lucas, 19/11/2026), com a metade direita livre para os elementos finais do YouTube. O
  pedido de comentário não está nela: está em cima, à direita, de 15:46,7 a 15:53,2 (`regencia.json` › `_chamadas`; 00:15:46:22 no XML), por 6,5 s, antes da tela final. A inscrição falada (7:33) tem a peça embaixo, de 7:32,8 a 7:37,3, e a vinheta entra em 0:49,8.

## A conferência

Rodada em 20/11/2026, 20:53, por `out/australia-animais/_tmp/descricao/medir.py` (só lê; a saída está em `medir.txt`, ao lado; "FALHAS: nenhuma"), e de novo pela Sala às 21:06,
depois do crédito completo do modelo de placas ("FALHAS: nenhuma"):
- **A versão SEM LINKS: 3.469 caracteres** (3.497 se o YouTube contar a quebra de linha como dois), abaixo dos 5.000 do limite e acima dos 3.167 do vídeo 7 (+302; 124 deles são o
  DOI do artigo e a mudança do modelo de placas, que a licença pede). O resumo é menor (772 contra 859), mas os créditos são
  maiores: 18 autores de foto Creative Commons (contra 10), o vídeo e a página da PLOS (CC BY 4.0), os dados do ABS, do NCIS e do DCCEEW e a linha do Shutterstock, que o vídeo 7 não tinha. O bloco de "Sources are shown on screen." até o
  fim (créditos e música) tem 2.175. Já encurtei o que a licença deixa: "Ainsworth et al." (a forma da tela), o DOI no lugar do volume, os dados sem o título das fichas, a linha "Thumbnail imagery" sem "shaded relief", as fotos agrupadas por
  licença. **Se a Sala quiser mais curta**, os cortes são: (1) no resumo, as 2 frases "And it has plenty of relatives. By our count, … it does." (138 caracteres; levam junto o volátil da Reptile Database); (2) a linha "Thumbnail imagery" só com
  "NASA GIBS (Blue Marble; ASTER GDEM, a product of METI and NASA); Natural Earth" (uns 120 a menos; o reconhecimento da GIBS com o nome do ESDIS sairia). Os dois juntos dão uns 3.210. Nenhum `<` nem `>`, nenhum endereço com "http", nenhuma
  hashtag (por isso o texto "< 1 MONTH" da miniatura não está no bloco).
- **O resumo:** as 10 frases estão palavra por palavra no `roteiro-narrador.md`, todas no gancho (antes do ato 1); a assinatura fica de fora. Termina em "So how does a country with so many venomous snakes end up with so few deaths?".
- **Os capítulos:** 8, os tempos batem com o `espelho.json` e com a 1ª palavra de cada parte no `words.json` (`064f54a0`), o 1º em 0:00, o mais curto com 54 s (o gancho; o 2º com 135 s); a origem de cada título no roteiro, conferida (8 de 8).
- **A pergunta:** igual à do `textos-tela.json` na descrição e no comentário fixado, palavra por palavra, com o "Answer in the comments." depois, só na descrição.
- **A música:** as 5 faixas e o endereço do `_creditos-trilha.md`, linha a linha e na mesma ordem (sem o "https://").
- **As tags:** 22, 382 caracteres no texto (399 pela conta do YouTube, com aspas nas que têm espaço; o limite é 500), nenhuma repetida, a do assunto primeiro e "Alpha Point" por último.
- **Os créditos:** 49 arquivos de `_media/` citados pelas cenas (23 fotos, 25 vídeos, 1 página de documento), 0 sem veredito `aprovado`. Das 23 fotos, as 22 com crédito têm o autor e a licença do `credito_na_tela` no texto, nem um a menos nem um a mais (18 autores,
  em 5 grupos de licença), e a 23ª (NASA) está no "Public domain". Os 13 clipes do Shutterstock têm a linha e nenhum `<artista>/Shutterstock.com`; a PLOS ONE (o vídeo) e a PLOS NTD (a página) estão com o autor, o DOI e a licença (o DOI e o artigo de
  s51 batem com a procedência); o Landsat, os dados (ABS, NCIS, DCCEEW, Müller), a OSM, o MapTiler, a Epidemic e a "Thumbnail imagery" estão no texto.
- **Os títulos do topo:** os três, com 55, 53 e 50 caracteres, iguais aos da decisão do Lucas de 18/11.
