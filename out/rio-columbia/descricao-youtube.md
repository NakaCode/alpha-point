# Vídeo 7 (`rio-columbia`): a descrição do YouTube e o resto da publicação (rascunho de 17/11/2026)

**O título do vídeo:** *Why the U.S. Pays Canada to Keep Part of a Lake Empty* (53 caracteres), o título 1 da pauta aprovada pelo Lucas
(09/11/2026; `pautas/2026-11-09-video-7-rio-columbia.md` §2, e `roteiros/rio-columbia/roteiro-narrador.md`, l. 1). A voz o paga nas 2 primeiras
frases do gancho: o lago esvaziado de propósito (F1, "part of the Arrow Lakes Reservoir … is emptied on purpose") e o pagamento (F2, "the
United States pays Canada for that empty space: 37.6 million dollars a year"). O título é um só, e o teste do YouTube (Test & Compare) vai com
duas miniaturas (abaixo, "As miniaturas do teste").

## Os voláteis: as frases da descrição que dependem deles

**Relidos em 17/11/2026 pelo `verificador-de-fatos`:** os 11 grupos de voláteis da tela continuam valendo (11 `vale`, 0 `mudou`, 0 `não
conferido`; `roteiros/rio-columbia/qc-roteiro/volateis-2026-11-17.laudo.md`, NOTA 9/10, PASS), e o "Pays" do título e o "$37.6M A YEAR" da miniatura
também. A descrição diz o que a tela diz. Se um deles mudar antes de publicar, troque a frase que vem com ele. Todas estão no 1º parágrafo da
descrição:

| a frase da descrição | o volátil (ids do laudo de tela) | o que a tela diz hoje | o que a muda |
|---|---|---|---|
| "starting with the 2025 flood season, the United States pays Canada … $37.6 million a year, adjusted for inflation" | `$37.6M A YEAR` (VT-014, VT-183, VT-244); `STARTING WITH THE 2025 FLOOD SEASON` (VT-013) | $37.6M A YEAR, "starting value, adjusted for inflation" (PL 118-272, 2025) | o fim da autorização (31/08/2027) ou uma lei nova. A miniatura A ("$37.6M A YEAR") envelhece junto |
| "a deal that runs out after the spring of 2027, unless both countries agree on something new" | `SPRING 2027 · UP TO 3 FLOOD SEASONS · JULY 31, 2027` (VT-029, VT-395, VT-396, VT-426) | a primavera de 2027 é a 3ª e última temporada do acordo interino | o tratado modernizado em vigor antes (o interino acaba antes); a prorrogação do acordo |
| "Talks to update the Columbia River Treaty between them have been paused since March 2025" | `TALKS PAUSED · SINCE MARCH 2025` (VT-033, VT-034, VT-388, VT-389); `NOT RESUMED · AS OF AUG. 17, 2026` (VT-390) | pausadas desde março de 2025; a tela de p5 data a leitura: não retomadas em 17/08/2026 | a retomada das conversas |
| "that treaty already promises Canada's help in a big flood, if the United States asks" | `STILL IN FORCE` / `IN FORCE` (VT-191, VT-410); `NO NOTICE GIVEN` (VT-273) | em vigor, sem aviso de denúncia achado | só um aviso de denúncia (Art. XIX(2)) |

**Não entram na descrição, de propósito:** o projeto de lei S. 4949 ("as of Nov. 12, 2026", VT-403 a VT-406), o prazo de 31/08/2027 (VT-401), o
acordo das PUDs, o corte de 37 % e as datas de leitura. Eles ficam só na tela e na voz, e a descrição não os repete. O "runs out after the
spring of 2027" fala do acordo interino (a tela de p5: "the spring of 2027 is the third"), não da data da lei. A pergunta do comentário
("a lake that drops every winter") se apoia no `confirmado` de VT-Q01: o nível de novembro caiu até o mínimo de dezembro a abril em 54 dos 55
invernos completos de 1969 a 2024 (Nakusp, WSC 08NE104), e não é volátil.

Se a Sala quiser um aviso de data na descrição, a frase pronta é "Status of the payment, the talks and the treaty: as of November 2026."
Não está no bloco para colar (o molde do Big Sur não tem linha assim, e a tela só data 3 desses fatos).

## O que entra, e de onde veio

Escrita na forma da do Big Sur (`out/big-sur/descricao-youtube.md`), já na medida curta que o Lucas pediu no Atlântico ("A descrição está MUITO
grande, não?", 30/10/2026). As ferramentas são as de `out/big-sur/_tmp/descricao/`, copiadas e adaptadas para `out/rio-columbia/_tmp/descricao/`.
- **o resumo** segue o molde do Geoff (o gancho falado quase palavra por palavra; `out/_analises/geography-by-geoff/relatorio.md` §4). As frases são
  as 4 do gancho de `roteiros/rio-columbia/roteiro-narrador.md` (a assinatura "You're at Alpha Point…" não entra, como no Big Sur), com duas
  mudanças de forma, sem fato novo:
  - "37.6 million dollars" virou "$37.6 million" (a tela diz "$37.6M A YEAR");
  - "the treaty between them" ganhou o nome, "the Columbia River Treaty between them", na 1ª vez que o tratado aparece: a voz nunca o nomeia,
    mas a tela nomeia (a folha do tratado em s10 e s26, "Text: Columbia River Treaty, 1961 (U.N. Treaty Series)", e as linhas de fonte "Columbia
    River Treaty, 1961"). Sem o nome, quem lê sem a imagem não sabe de que tratado se fala, e é a busca que mais importa.
  O parágrafo termina na pergunta do gancho ("So why pay for empty space, when the United States can already call on Canada in a flood?"), sem
  dar a resposta do título. Sem venda: nenhuma linha de comunidade, loja ou patrocínio. O texto da voz passou pelo `verificador-de-fatos` (224
  de 224, PASS; `roteiros/rio-columbia/qc-roteiro/fatos.laudo.md`) e o de tela também (562 de 562, PASS; `fatos-tela.laudo.md`), e nada novo
  entrou aqui: por isso a descrição não teve laudo próprio, como no Big Sur;
- **os capítulos** são os `_capitulos` do `espelho.json`, cada um conferido contra a primeira palavra da parte no `words.json` (`be4b6460…`;
  `out/rio-columbia/_tmp/descricao/capitulos.py`), com o tempo arredondado para baixo: 59,44 → 0:59 ("Put your finger on the map"); 204,71 → 3:24
  ("That spring, the river came up"); 371,02 → 6:11 ("Maybe you've already decided"); 659,47 → 10:59 ("That room came from somewhere"); 743,90 → 12:23
  ("So that is the room, and what it cost"); 863,13 → 14:23 ("It starts with snow"). O primeiro em 0:00, 7 capítulos, o mais curto com 59 s
  (o gancho), o último com 66,8 s até o fim (929,97 s, 15:29,97, a duração da exportação do Lucas; a fala acaba em 909,76 s, e os 20 s finais são a
  tela final);
  - **a inscrição falada** (365,21 s, 6:05, "If you're enjoying the trip downriver…") não é capítulo: dura 6 s, e o YouTube pede 10 s no mínimo.
    Ela cai no fim do capítulo "The flood and the bargain", e o capítulo seguinte começa em 6:11, onde a voz volta ao assunto;
  - **os títulos** são os do espelho, palavra por palavra, em 5 dos 7. O do gancho é o da assinatura ("this is where the story of the lake that waits
    for the flood begins"), como no Big Sur. O do fecho é meu: o espelho o traz em português ("uma volta do ano do lago"), e o texto do fecho vai
    da neve ao degelo e ao inverno seguinte ("It starts with snow … Then the melt comes … Next winter, the lake will drop again"). Se a Sala
    preferir outro, troque só essa linha;
- **a pergunta** é a `_pergunta_cta` do `textos-tela.json`, "Would you live by a lake that drops every winter?", palavra por palavra, na descrição e no
  comentário fixado (`marca/cta.md` §7: "a mesma pergunta vai também na descrição e no comentário fixado, palavra por palavra"), com o "Answer in the
  comments." da peça clara;
- **as fontes** estão na tela, cena a cena ("Sources are shown on screen."), e não vão uma a uma para a descrição, como no Big Sur. Os donos delas
  (`out/rio-columbia/_tmp/descricao/creditos-todos.txt`): a Public Law 118-272 (2025), o Corpo de Engenheiros do Exército e a Bonneville Power
  Administration (2009), a nota diplomática dos EUA ao Canadá (22/11/2024), o governo da Colúmbia Britânica (2012, 2013, 2017, 2024 e 25/03/2025), o
  tratado de 1961 (Série de Tratados da ONU), o Congressional Research Service (2024), o USGS (1949, 1981 e 2026), a BC Hydro (2026), o Senado dos EUA (S. 4949, em
  12/11/2026), a Canadian Press (25/03/2025), a Suprema Corte do Canadá (R. v. Desautel, 2021), o U.S. Bureau of Reclamation (2023), a American Public Power
  Association e o The Star (2026), o Global Affairs Canada (28/05/2025) e a Canadian Geographic (17/08/2026). A versão com a citação inteira de cada uma fica para
  quando o YouTube liberar os links ("Pendente");
- **as imagens**: os 30 arquivos de `_media/` que as cenas citam (25 fotos, 1 retrato e 4 páginas de lei), cada um casado com um `aprovado` do
  `_pesquisa/conferencia-midia.json` (pelo sha256 do `_PROCEDENCIA.json`; nenhum ficou sem veredito; `out/rio-columbia/_tmp/descricao/midia-casada.txt`).
  Nenhum é de banco pago: nenhum footage, e a linha "used under license from Shutterstock.com" não entra.
  - **as 14 fotos do Commons com licença Creative Commons** (10 autores, fora o do retrato) vão com o autor e a licença, como o `credito_na_tela` do veredito: Shawn from Airdrie, Canada
    (duas, CC BY-SA 2.0), Murray Foubister (CC BY-SA 2.0), Kevstan (CC BY-SA 3.0), Electron2.0 (CC BY-SA 4.0), Jürgen Regel, Marian… (CC BY 3.0),
    Alan Cressler, USGS (CC BY 2.0), Bonneville Power Administration (CC BY 2.0), Adam Jones (quatro, CC BY 2.0), David Brodbeck (CC BY 2.0) e David (CC BY 2.0).
    O autor do Panoramio vem cortado na própria origem ("Jürgen Regel, Marian…"), e a descrição o escreve como a tela;
  - **o retrato de Adrian Dix (s45)** vai com tudo o que a procedência propõe em `credito_nota`: o autor, o Commons, a licença com o endereço e "cropped"
    (a CC BY-SA 4.0 pede a mudança e o link da licença). Na SEM LINKS, o endereço vai como texto, sem "https://", como o da Nepenthe no Big Sur;
  - as de domínio público ou CC0 vão como cortesia, pelo nome da instituição (nenhuma pede crédito): a U.S. Navy (as duas fotos de Vanport, 1948, pelo
    National Archives, da Harry S. Truman Library), o U.S. Army Corps of Engineers (as três fotos de Libby, John Day e The Dalles, de Nicole Celestine, Benjamin
    Rogers e Amber Tilton, pelo DVIDS), o National Park Service (Kettle Falls, 1938), o U.S. Bureau of Reclamation (Grand Coulee, pela Library of Congress),
    a Library of Congress (o Capitólio, de Shawn Miller, CC0), o Revelstoke Museum and Archives (Arrowhead, por volta de 1910), RockyGoat (Kinbasket Lake,
    PD-self) e Dwong33 (a Suprema Corte, CC0);
  - o still de satélite do Arrow e da mesa (`_media/base/arrow-largo`, `arrow-perto` e `mesa`, Landsat do USGS) vai como "Landsat imagery courtesy of the U.S.
    Geological Survey", a linha do `credito_descricao` da procedência, como no Big Sur (a lista das cenas Landsat fica na procedência, pelo tamanho);
- **os dados canadenses**: a Water Survey of Canada (Environment and Climate Change Canada: os medidores e a estação de Birchbank) e o Natural Resources
  Canada (o Canadian Geographical Names Database: Boat Encampment e Arrowhead) vêm pela Open Government Licence – Canada, que pede a linha
  "Contains information licensed under the Open Government Licence – Canada." na tela (está, 12 vezes) e na descrição (`marca/midia.md` §7.3; o
  `_creditos-mapa.md` repete a atribuição). O cálculo "Alpha Point calculation" da tela também usa o USGS (a estação de The Dalles, domínio público);
- **a geometria**: só a OpenStreetMap pede atribuição (o rio Columbia, os lagos, as barragens de Mica, Duncan e Keenleyside, Castlegar, Trail e o resto; ODbL), e
  ela já está na linha dos mapas, com o endereço de openstreetmap.org/copyright. O Census (as fronteiras e as estradas), o USGS (a bacia, o GNIS e o NWIS), a USACE
  (o National Inventory of Dams) e o Natural Earth são domínio público e não pedem crédito (`out/rio-columbia/_creditos-mapa.md`, "De onde veio cada linha");
  o contorno da bacia (USGS Watershed Boundary Dataset) entra numa linha curta, porque a bacia é o centro do gancho ("only about 15 percent of the land");
- **os mapas** e **a música** são os blocos de `_creditos-mapa.md` (MapTiler e OSM, com a ODbL) e `_creditos-trilha.md` (Epidemic Sound, "<Artista> / <Música> /
  courtesy of Epidemic Sound" e o endereço, 5 faixas), copiados. A música não passou por ferramenta nenhuma: só os créditos em texto.

**Pendente (antes de publicar):**
- **As miniaturas:** feitas (abaixo, "As miniaturas do teste"); a escolha é do Lucas.
- **Os voláteis:** relidos em 17/11/2026, todos valendo (a tabela do topo).
- **Os links:** como no Peru, no Atlântico e no Big Sur, vai primeiro a versão SEM LINKS. Quando o YouTube liberar os links, a Sala faz a versão completa, com a
  citação e o endereço de cada fonte e de cada licença: a MapTiler e a OSM pedem os links na descrição (`_creditos-mapa.md`), a Epidemic pede o do site, as
  licenças Creative Commons pedem o endereço de cada uma (BY 2.0 e 3.0; BY-SA 2.0, 3.0 e 4.0) e a Open Government Licence – Canada pede o da dela (esse
  endereço não está em nenhum arquivo do canal: conferir na origem). Se o YouTube recusar a SEM LINKS por causa dos endereços em texto, a Sala decide com o Lucas; crédito de
  licença nunca sai.
- **Os tempos dos capítulos** se conferem no vídeo exportado (929,97 s, igual ao XML): a montagem não muda o relógio (a vinheta, a inscrição e o comentário são
  chamadas na V3, por cima), mas um corte mudaria.

## A versão SEM LINKS, a que vai agora

```text
Every year, before the spring snowmelt, part of the Arrow Lakes Reservoir, on the Columbia River in British Columbia, is emptied on purpose. And starting with the 2025 flood season, the United States pays Canada for that empty space: $37.6 million a year, adjusted for inflation. But this river is mostly American: only about 15 percent of the land it drains lies in Canada. A much bigger share of its water comes down through British Columbia. The payment is temporary: part of a deal that runs out after the spring of 2027, unless both countries agree on something new. Talks to update the Columbia River Treaty between them have been paused since March 2025. And the strange part: that treaty already promises Canada's help in a big flood, if the United States asks. So why pay for empty space, when the United States can already call on Canada in a flood?

Would you live by a lake that drops every winter? Answer in the comments.

0:00 The lake that waits for the flood
0:59 The river that starts up north
3:24 The flood and the bargain
6:11 The trigger and the tap
10:59 What the room was before
12:23 What each side puts on the scale
14:23 The lake's year, from snow to melt

Sources are shown on screen.
Photos via Wikimedia Commons (may have been cropped or resized for the video): Shawn from Airdrie, Canada (CC BY-SA 2.0); Murray Foubister (CC BY-SA 2.0); Kevstan (CC BY-SA 3.0); Electron2.0 (CC BY-SA 4.0); Jürgen Regel, Marian… (CC BY 3.0); Alan Cressler, USGS (CC BY 2.0); Bonneville Power Administration (CC BY 2.0); Adam Jones (CC BY 2.0); David Brodbeck (CC BY 2.0); David (CC BY 2.0).
Adrian Dix photo: Aeger eger / Wikimedia Commons, CC BY-SA 4.0 (creativecommons.org/licenses/by-sa/4.0), cropped.
Public domain or CC0: U.S. Navy (via the National Archives, Harry S. Truman Library); U.S. Army Corps of Engineers (photos by Nicole Celestine, Benjamin Rogers and Amber Tilton, via DVIDS); National Park Service; U.S. Bureau of Reclamation (via the Library of Congress); Library of Congress (Shawn Miller); Revelstoke Museum and Archives; RockyGoat; Dwong33; Landsat imagery courtesy of the U.S. Geological Survey.
Data: Environment and Climate Change Canada, Water Survey of Canada, and U.S. Geological Survey (river gauges); Natural Resources Canada, Canadian Geographical Names Database (place names). Contains information licensed under the Open Government Licence – Canada.
Maps: © MapTiler (www.maptiler.com/copyright) · © OpenStreetMap contributors, data under the Open Database License (www.openstreetmap.org/copyright)
Basin boundary: USGS Watershed Boundary Dataset
Thumbnail imagery: NASA Blue Marble and ASTER GDEM shaded relief (ASTER GDEM is a product of METI and NASA), provided by NASA's Global Imagery Browse Services (GIBS), part of NASA's Earth Science Data and Information System (ESDIS); Natural Earth.

Music:
Blue Saga / Helt stilla / courtesy of Epidemic Sound
Lennon Hutton / Fragment / courtesy of Epidemic Sound
Parallax Deep / Northern Lights / courtesy of Epidemic Sound
Hanna Lindgren / I Would Give Anything / courtesy of Epidemic Sound
Gavin Luke / Would You Remember / courtesy of Epidemic Sound
www.epidemicsound.com
```

## O comentário fixado

A pergunta, palavra por palavra (`textos-tela.json` › `_pergunta_cta`; `marca/cta.md`):

```text
Would you live by a lake that drops every winter?
```

## As miniaturas do teste

O teste do YouTube (Test & Compare) vai com o título único e duas miniaturas, no mesmo mapa (o teste mede só o texto). A 1ª versão (a A
"$37.6M A YEAR" e a B "EMPTY ON PURPOSE" da pauta §8, commit `ce3538b`) o Lucas achou "muito fracas"; à pergunta, escolheu "Eu mando uma referência" e
mandou 4 prints do YouTube (o Geography by Geoff e a The Geo Lens; `decisoes-lucas.md`, 17/11, ~19:0x). As duas foram refeitas nesse estilo, em
`roteiros/rio-columbia/miniatura/` (`miniatura-A-1280.jpg` e `miniatura-B-1280.jpg` para subir; as de 2560 ao lado; o código comum em `mapa.py`; as
fontes e as licenças em `A-RELATO.md` e `B-RELATO.md`):
- **o mapa:** a terra em relevo amarelo, o mar e os lagos em azul, a bacia canadense do Columbia em vermelho (31 % da imagem), o reservatório de Arrow em
  ciano, a fronteira numa linha branca e "CANADA" / "U.S." pequenos. As cores são as das referências, não o laranja do canal (variáveis no topo do
  `mapa.py`). As bases: o relevo ASTER GDEM em cinza e a Blue Marble, pela NASA GIBS; a terra e os lagos do Natural Earth; o Arrow e os lagos da bacia do
  OSM (o crédito na descrição);
- **A, "$37.6M A YEAR"**: o número numa caixa preta, em vermelho, com a seta branca até o Arrow. Leva, pequena, dentro da caixa, "Starting value,
  indexed to inflation" (o K9 da pauta; `MINI_K9=0` no `base-A.py` a tira). A voz paga a promessa aos 6,0 s (gancho, frase 2). Envelhece com o título:
  se o acordo interino vencer, troca-se junto;
- **B, "WHY?"**: a palavra numa caixa preta, em vermelho, com duas setas brancas abraçando o Arrow (o molde da de Washington, da The Geo Lens).

## As tags

Separadas por vírgula, para colar no campo de tags do YouTube. "Columbia River Treaty" é a primeira; "Alpha Point" é a última, como no Peru, no Atlântico e no
Big Sur. Nenhuma diz o que o vídeo revela no fim, e nenhuma afirma fato: as de lugar, barragem e órgão nomeiam o que a voz ou a tela nomeiam (o Hugh Keenleyside,
o Mica e o Duncan estão no mapa de s28; "Bonneville Power Administration" está na linha de crédito de s18; "Columbia River Basin", na folha do tratado), e as de
assunto ("flood control", "hydropower", "water treaty", "Canada US relations") só dizem do que o vídeo trata. A contagem está em "A conferência", abaixo.

```text
Columbia River Treaty, Columbia River, Arrow Lakes Reservoir, Arrow Lakes, British Columbia, Canada, United States, flood control, hydropower, Hugh Keenleyside Dam, Mica Dam, Duncan Dam, Libby Dam, Grand Coulee Dam, BC Hydro, Bonneville Power Administration, Vanport flood, Sinixt, Columbia River Basin, Canada US relations, water treaty, geography documentary, map documentary, Alpha Point
```

## A categoria, o idioma e o resto do Studio

Pelo perfil do canal (`estudio/marcas/alpha-point/publicacao-youtube.json`, com as decisões do Lucas de 24 e 25/10/2026), como no Big Sur:
- **Categoria:** Education (27). **Idioma do vídeo e do áudio:** English (en).
- **Feito para crianças:** não. **Licença:** padrão do YouTube. **Incorporação:** permitida.
- **Conteúdo alterado ou sintético:** desmarcado (Lucas, 24/10/2026: "Deixar desmarcado (Recomendado)").
- **E-mail de contato na descrição:** nenhum (Lucas, 25/10/2026: "Nenhum, como hoje").
- **Monetização:** como o Lucas tiver no Studio (em 25/10/2026, o canal ainda não estava no Programa de Parcerias).
- **Os capítulos** entram pela própria descrição (o primeiro em 0:00, 7 capítulos, cada um com 59 s ou mais). Nenhum card de capítulo na tela (Lucas, 26/09/2026).
- **A tela final:** os 20 s sem voz, de 15:10 ao fim (15:30), sobre o mapa da bacia, com a metade direita livre para os elementos finais do YouTube. O
  pedido de comentário não está nela: está no fecho, em cima, de 14:24,3 a 14:31,3 (`regencia.json` › `_chamadas`).

## A conferência

Rodada em 17/11/2026 por `out/rio-columbia/_tmp/descricao/medir.py` (só lê; a saída está em `medir.txt`, ao lado):
- **A versão SEM LINKS: 3.167 caracteres** (3.194 se o YouTube contar a quebra de linha como dois; 2.919 antes da linha "Thumbnail imagery", que a Sala pôs em 17/11 com as bases das miniaturas), abaixo dos 5.000 do limite e acima dos
  2.142 que a mesma conta dá para o Big Sur (o molde fala em ~2.086): o resumo tem 859 caracteres (o do Big Sur tinha 513),
  e os créditos ficaram maiores (10 autores Creative Commons e o retrato, contra 8 fotos no Big Sur). Se a Sala quiser a descrição mais
  curta, o corte natural é o resumo: "But this river is mostly American…" e "A much bigger share…" (2 frases, 164 caracteres) podem sair sem quebrar o raciocínio, e as
  frases que o volátil toca (a tabela do topo) ficam. Nenhum `<` ou `>`, nenhum endereço com "http", nenhuma hashtag.
- **O resumo:** 6 das 8 frases estão palavra por palavra no `roteiro-narrador.md`. As 2 adaptadas são as duas mudanças de forma de "O que entra" ("$37.6 million" e
  o nome do tratado). Termina em "So why pay for empty space, when the United States can already call on Canada in a flood?".
- **Os capítulos:** 7, os tempos batem com o `espelho.json` e com o `words.json`, o 1º em 0:00, o mais curto com 59 s; 5 dos 7 títulos são os do espelho, palavra por palavra.
- **A pergunta:** igual à do `textos-tela.json` e ao comentário fixado, palavra por palavra.
- **A música:** as 5 faixas e o endereço do `_creditos-trilha.md`, linha a linha e na mesma ordem (sem o "https://", como no Big Sur).
- **As tags:** 24, 390 caracteres no texto (409 pela conta do YouTube, com aspas nas que têm espaço; o limite é 500), nenhuma repetida.
- **Os créditos:** os 10 autores Creative Commons das fotos que as cenas usam, mais o do retrato, estão no texto. Dois autores com veredito `aprovado` ficaram de
  fora de propósito: Marek Ślusarczyk (CC BY 2.5, a foto do Kinbasket) e Martin Falbisoner (CC BY-SA 3.0, as duas do Capitólio). Os arquivos deles estão em
  `_media/foto/s14`, `s57` e `s59`, mas nenhuma cena os cita (o casamento por cena, `midia-casada.txt`, e um `grep` nos 114 HTML de `graphics/`). Se uma cena passar a
  usá-los, o crédito entra.
