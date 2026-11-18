# Vídeo 8 (`arizona-strip`): o cético da pauta v1 · 18/11/2026

Este arquivo julga `pautas/2026-11-18-video-8-arizona-strip.md` (a pauta v1) e o resumo `…-fatos.md`, contra `fatos-a.md`, `fatos-b.md`,
`leituras-sala.md` e o cético da escolha (`out/_pautas/video-8/cetico-arizona-strip.md`, K1 a K9). Ele não reescreve a pauta: diz o que cai e o que
muda, do mais grave ao menos.

**O que li** (18/11/2026, ~05h10 a ~05h45 pelo relógio da máquina, um pedido por vez):
- **no disco:**
  - a pauta v1 inteira, o resumo, `fatos-a.md`, `fatos-b.md`, `leituras-sala.md` (com "Antes do cético da v1") e o cético da escolha;
  - o cético do vídeo 7 (o molde); `marca/voz.md`, `marca/embalagem.md`, `marca/cta.md` §5–6; as memórias `feedback-arriscar-existente`,
    `feedback-titulo-unico`, `feedback-roteiro-engessado`, `ritmo-duracao`, `publico-vs-assunto` e `arizona-strip-estado`;
  - a miniatura 1 (`out/_pautas/video-8/miniaturas/arizona-strip-1280.jpg`). A 2 e a 3 ainda não existem em imagem: julguei pelo §8;
- **nas cópias locais** (`midia/arizona-strip/fontes/a|b/`, só lidas, com `python -I`):
  - **na imagem da página:** o memorial do Arizona de 1903 (`crec-1903-p2686.jpg`; recortei e ampliei os "whereas" em
    `midia/arizona-strip/fontes/c/crec-1903-p2686-memorial.png`) e a petição de Fredonia de 1905 (`crec-1906-p1341.jpg`);
  - no texto: o memorial do Arizona de 1866 (`arizona-acts-1866.txt`, pp. 67–68); a lei de Nevada de 1866 (`statute-14-43.txt`); a Lei Habilitante de
    1910 (`statute-36-557.txt`); a NPS "Explorers" (`nps-grca-explorers.txt`); McKoy/NPS (`nps-pisp-adhi.txt`: o título de Whitmore, a batida de
    1953, as notas 1546–1552); a página do caso no DOJ (`doj-case-page.txt`); a KUTV, o hospital e a JEMS sobre a ambulância (`fontes/b/`);
- **as contas, refeitas:** `p_contas.py --pauta=…` e `b_horario.py` (rodei de novo) e um script novo, `cetico_contas.py` (abaixo);
- **na web** (cada site com o robots.txt lido antes; nada recusou; nada contornado; nenhuma cópia arquivada):
  - **a NPS** (`nps.gov/robots.txt` veta só `/ns/`, `/search/` e `loader.cfm`): a página do Pearce Ferry Scenic Overlook (atualizada em
    09/09/2024) e a foto "Pearce Ferry Arizona, December 1963" do museu virtual de Lake Mead. A "Overview of Lake Mead" e a página de estruturas
    do museu deram **404** (as duas guardadas como 404); não insisti;
  - **o artigo de Gary Cascio e Bryan Brown**, *The Other Lee's Ferry: The Historic River Crossing at Pearce Ferry, 1876 to 1938* (do site dos
    autores, `southwestferryproject.com`; o robots.txt veta só `/wp-admin/`), `swfp-pearce-ferry-paper.pdf`, sha256 `3b41762b…`. É secundária,
    com notas que citam o Mohave County Miner, a expedição do USGS de 1923 e as atas do condado de Mohave;
  - **o USGS**, *Boundaries of the United States and the Several States* (Van Zandt, Professional Paper 909, 1976; `pubs.usgs.gov`, o robots.txt
    veta só `/archive/`), `usgs-pp909.pdf`, sha256 `3f6a7b83…`;
  - **os Arquivos Nacionais**, a transcrição da Constituição (`archives.gov/founding-docs/constitution-transcript`; o robots.txt não veta a página);
  - **3 buscas** (WebSearch) só para achar os endereços acima; o que veio só delas está marcado [S].
- **O vidIQ: 20 créditos**, 4 buscas de 5 (`vidiq_youtube_search`), um pedido por vez. **Saldo antes: 4.866; depois: 4.846.** As buscas:
  1. "Why Arizona kept the land beyond the Grand Canyon" (vídeo, EUA, relevância);
  2. "Utah kept asking for part of the Grand Canyon" (idem);
  3. "Grand Canyon cut off" (vídeo, EUA, desde 01/08/2026);
  4. "Arizona Strip" (vídeo, EUA, por data, desde 01/09/2026).

Não usei o navegador, banco pago, `SendMessage` nem o git. Os baixados estão em `midia/arizona-strip/fontes/c/`, fora do git.

**Os scripts novos** estão em `pautas/arizona-strip/_trabalho/scripts/`, todos sem rede e com `python -I -X utf8 -B`, da raiz do canal:
- `cetico_contas.py`: a sobra da I-15 do Arizona ao norte de 37° N, a rota refeita por estado, o ponto de virada ao longo da AZ 389, a gente da Strip
  por rota e o rio sem estrada;
- `cetico_texto.py <html> [termos] [--ctx=N]`, `cetico_pdf.py <pdf> [termos] [--saida=]` e `cetico_recorte.py <imagem> x0 y0 x1 y1 <saída>`: o texto de
  um HTML ou PDF baixado, e o recorte ampliado de uma página.

---

## Os achados, do mais grave ao menos

### [K1] O "não" do Arizona, como a pauta o conta, é só orgulho; o memorial de 1903 dá primeiro o valor da terra (grave; muda o §3, o §4.4, o §7, ato 4, e a "resposta, com os donos")

**O problema.** A pauta faz do "endowment" "a frase-chave do ato" e fecha o ato 4 com "Arizona's lawmakers called the canyon their 'endowment'". Na
imagem da página (`crec-1903-p2686.jpg`, recortada), o memorial tem três "whereas", e o do cânion é o último. Antes dele, o argumento do Arizona é
dinheiro e terra:
- a área pedida "comprises an area nearly as large as the State of Massachusetts; that it is rich in mineral resources, containing vast areas of
  valuable timber and grazing lands", com terra irrigável;
- "that said tract is of inestimable value and importance to the Territory of Arizona as a source of revenue and a field of industry and
  husbandry";
- só então o cânion, "which has always been peculiarly and exclusively an Arizona endowment";
- e o "não", nas palavras do próprio Arizona: os moradores do Território "are unalterably opposed to the annexation of any portion of said tract to
  the State of Utah".

Contar só o cânion faz a voz escolher a razão mais simpática de um lado (`voz.md` §1: "cada ator nos próprios termos") e deixa o ato 4 sem
discussão: vira "Utah pediu, o Arizona disse não", sete vezes. E o "one inch", que a pauta põe como o "não" de 1897, é a fala de **Lund, o comissário
de Utah**, sobre o "sentiment" que achou (S1, OCR). O "não" firme, lido na imagem e nas palavras do Arizona, é o "unalterably opposed" de 1903.

**O que a base já tem para o ato 4 virar uma discussão, e não uma lista:**
- **Utah:** "Geographically it belongs to the northern state" (Millennial Star, 1903; A10, FIRME); e, na boca dos comissários de 1897 (S1, OCR), a
  Strip custa ao Arizona mais do que rende: os moradores "pay their taxes, but return no net income" aos condados, e um caso de assassinato custou
  "not less than $10,000";
- **a gente da Strip:** a petição de 1905 (A11, na imagem), que tem uma linha melhor do que a que a pauta usa (K11);
- **o Arizona:** o valor ("inestimable value", "a source of revenue"), o cânion ("endowment") e o "unalterably opposed";
- **o contraste que a pauta não viu:** em 1858, Ives chamou o planalto ao **sul** do rio de "altogether valueless"; em 1903, o Arizona chamou a terra
  ao **norte** dele de "of inestimable value". São lados diferentes do rio, e a frase tem de dizer isso.

**O que muda:**
- **a frase segura de 1903 (EN; A12, na imagem):**
  > In 1903, Arizona's territorial lawmakers answered in a memorial to Congress. The land Utah wanted, they wrote, was "rich in mineral resources,"
  > with timber, grazing land and farmland, "of inestimable value" to Arizona "as a source of revenue." And it was "traversed from east to west by
  > the Grand Canyon," which "has always been peculiarly and exclusively an Arizona endowment." Arizona, they said, was "unalterably opposed."
- **o contraste, se o roteiro quiser (EN):**
  > Forty-five years earlier, an Army explorer had called the plateau south of the canyon "altogether valueless." Now Arizona's lawmakers called the
  > land north of it "of inestimable value."
- **o ato 4 em três tempos, cada um com uma pergunta** (a direção de 02/11): o governo de Utah pede, com o argumento da geografia e do custo (1865,
  1897, 1903); a gente da Strip pede ela mesma (1905, e o eco de 1866); a lei e o estado fecham a porta (1910, 1912, 1919; K4);
- **a "resposta, com os donos"** troca "Arizona's motto" (é a leitura de Lund: "The motto of Arizonans was…") e "called the canyon their
  'endowment'" por: o Arizona achava a terra valiosa e o cânion dele, e disse "unalterably opposed"; o Congresso não agiu (S4, OCR);
- **o "one inch"** fica, depois da imagem, com o dono certo: "Utah's commissioners came home reporting 'a decided sentiment against ceding one inch.'"

### [K2] A promessa de 1919 segura o fim do ato 4, a abertura do ato 5 e o fecho, e quem prometeu, a quem, está no OCR; a NPS não decide a ponte, mas a história da travessia dá uma frase melhor (grave; muda o §4.4, o §4.5, o §5, o §7, atos 4 e 5 e fecho, e o §11, item 2)

**A pergunta da Sala** ("a NPS de Lake Mead permite dizer 'was never built', ou só 'there's no bridge there today'?"). **Nenhuma das duas.**
- O que li da NPS de Lake Mead (a página do Pearce Ferry Scenic Overlook e a foto de 1963) não fala de ponte; duas páginas deram 404.
- "There's no bridge there today" é **medida nossa** (B1e: nenhuma estrada cruza o eixo do rio entre a Navajo Bridge e a Hoover Dam), não da NPS.
- "Was never built" não tem fonte que o diga.

**O que a história da travessia dá** (Cascio e Brown, 2019, secundária com notas; lido hoje):
- "Pearce Ferry was the first feasible crossing downriver of Grand Canyon and the Grand Wash Cliffs";
- em 1923, quatro anos depois da promessa, a expedição do USGS de Claude Birdseye "stopped at Pearce Ferry … and reported that it was abandoned"
  (a foto de E. C. La Rue, de 15/10/1923, na Photographic Library do USGS, "no ferryboat was to be seen");
- em 1933, o condado de Mohave deu a concessão de uma balsa "for the benefit of travel over said Mt. Trumbull-Chloride highway" (a estrada que ligava
  a Strip ao lado de Kingman passava por uma balsa);
- "The rising level of Lake Mead inundated the Pearce Ferry area in 1938, which was probably the last year of ferry operations";
- e a frase que fecha o vídeo sozinha: "by which time Lee's Ferry was no longer in operation due to the construction of Navajo Bridge … in 1929".
- Nenhuma menção a ponte no Grand Wash. Com a balsa até 1938 e o lago depois, a ponte não ter vindo é inferência forte, mas é inferência.
- [S] Uma busca mostrou um resumo do museu virtual da NPS (Hamblin em 1863, Pearce até 1891, uma concessão de barcos nos anos 1940) que não consegui abrir
  (404). Não uso.

**O outro problema: quem prometeu, a quem.** O que a Sala leu é o OCR do Washington County News de 27/02/1919: "a road connecting st george utah with
kingman ariz together with a bridge across the colorado river near the mouth of the grand wash **would be built**". O sujeito não está no trecho.
Pode ser o Legislativo do Arizona, o governador, alguns deputados, ou a comissão de Utah relatando o que ouviu. A pauta e o fecho dizem "Arizona
promised Utah a bridge": o "promised" e o "Utah" (uma estrada de St. George a Kingman serve, antes de tudo, aos moradores da Strip) são leituras a
conferir na imagem.

**E uma frase que o §5 proíbe e o §7 deixou entrar:** "One of those bridges came. What about the other one?" (a ponte do ato 4) põe a Navajo Bridge
entre as promessas de 1919. Em 1919, quem falou de Lees Ferry foi um senador do Arizona, que "believed the federal government could be interested"
(S6, OCR). Não é a mesma coisa que prometer.

**O que muda:**
- **a frase de 1919 (EN), depois da imagem, com o sujeito que ela der:**
  > Utah tried once more in 1919. Arizona said no again, and, a Utah newspaper reported, offered something in return: a road from St. George to
  > Kingman, with "a bridge across the Colorado River near the mouth of the Grand Wash."
- **o fecho (EN), sem "never" e com fonte para cada parte:**
  > The crossing near the mouth of the Grand Wash stayed what it had been since the 1870s: a ferry, when anyone ran one. In 1923, a government survey
  > party stopped there and found it abandoned. A ferry ran again in the 1930s, until the water rising behind Hoover Dam covered the landing in 1938.
  > Upriver, at Lees Ferry, the ferry was replaced by a bridge. Down here, it was replaced by a lake.

  (Cascio e Brown, 2019; a NPS, Navajo Bridge, 1929; B1e para "today". Se o verificador aceitar o artigo e a medida juntos, "The bridge never came"
  pode abrir o parágrafo.)
- **a ponte do ato 4** vira: "That same year, an Arizona state senator suggested the federal government might pay for a bridge at Lees Ferry. Ten years
  later, one opened near there." (S6, OCR, depois da imagem.) Sem "one of those bridges" e sem "because".
- **a foto de 1923** (La Rue 771, USGS) entra na lista do §6, item 8, com a licença a ler: é a imagem do fecho.
- **o fecho de hoje** ("in Colorado City, the quickest road to the county seat still starts by leaving the state") fica: é literal (a AZ 389 chega a Utah em
  1,4 milha).

### [K3] O isolamento da Strip virou onda do enxame nos últimos dez dias, e "CUT OFF" é a palavra dele e da enchente; a embalagem tem de vender a história, não o isolamento (grave para a embalagem; muda o §2, o §8 e o §9)

**O que a busca por data mostrou** (vidIQ, "Arizona Strip" desde 01/09/2026, e "Grand Canyon cut off" desde 01/08/2026). Depois da lista do Arizona Revealed
(09/11, hoje 28,1 mil, outlier 9,8), vieram em cinco dias:
- *8 Weirdest and Most Isolated Towns in Arizona Most Arizonans Don't Know About* (Forgotten USA, 14 inscritos, 12/11, 161 views): "the closed compounds
  of Colorado City in the Arizona Strip";
- *Arizona's isolated Strip, next to Utah #Shorts* (Atlas Flick, 6 inscritos, 12/11, 222 views): "many residents rely on those states for services";
- *11 Weirdest and Most Isolated Towns in Northern Arizona…* (Forgotten USA, 13/11, 56 views), com Tuweep;
- *9 Weirdest Arizona Towns in the Middle of Nowhere* (Splot, 382 inscritos, 14/11, 490 views): "#5 Littlefield: The Arizona Town Separated from
  Arizona", "a community nearly cut off from its own state";
- e, antes, um que ninguém tinha listado: *Why There's No Bridge Across the Grand Canyon* (Mapnitude, 1 inscrito, 27/10/2026, 18 views, 8:07), com o
  capítulo "The Land the Canyon Cut Off" e a descrição que abre como o nosso gancho: "The North Rim and South Rim of the Grand Canyon are only about 10
  miles apart, yet driving between them takes more than four hours and over 200 miles of road."

E a enchente fala a mesma língua: *URGENT: Grand Canyon Cut Off as Historic Flash Flood Destroys Key Bridge* (World Map Decoded, 12/09/2026, 1,6 mil);
*The Grand Canyon Is CLOSED… Now What?* (Kelly Hays, 212 mil inscritos, 16/11/2026, 93,8 mil).

**Pela régua do Lucas** ("Desde que não seja atual"): é a onda que ela descreve, pequena (nenhum passa de 490 views, fora o original), logo depois de
um viral, e sobre **o isolamento** da Strip. Nenhum conta **o porquê**: as retas de 1850, os pedidos de Utah, o "não" do Arizona, a promessa de 1919. Não
derruba a pauta, porque o ângulo dela é o porquê. Mas o isolamento, que é o gancho e o ato 1, passou a ser do enxame, e cada semana traz mais.

**O que muda:**
- **a miniatura 1, "CUT OFF", cai como está.** É a palavra do Futbolencia (que o §2 da própria pauta tira do título), do Mapnitude, do Splot e da manchete
  da enchente: no feed de dezembro, sobre o Grand Canyon, lê "a enchente isolou o cânion". A arte fica; o texto troca:
  - **"STILL ARIZONA"** (13 caracteres), o paradoxo nas palavras do gancho (frase 3, aos 7,0 s), que nenhum vizinho usa;
  - e o rótulo "GRAND CANYON" ao longo do rio, que a própria pauta propõe: na imagem de hoje, o cânion é só uma linha azul;
- **a miniatura 3, "UTAH WANTED IT", sobe a primeira** (K6): é a única que vende o que só nós temos;
- **a miniatura 2, "265 MILES",** vende o isolamento (o ângulo do enxame), mostra como exato um número que a voz arredonda (266,2 nas rodovias; 267,9 de
  centro a centro) e escreve "COLORADO CITY" na imagem (K9). Fica de reserva;
- **o gancho:** as frases 1 e 2 (10 contra 212) são a abertura de todos (a NPS, o Mapnitude). Ficam, porque são a imagem mais forte; mas a medida nossa
  (346 milhas sem estrada) pode entrar como terceiro tempo do gancho, ou a estrada (265) fica onde está e o 346 abre o ato 1, como a pauta já faz;
- **a pressa** (o K6 do cético da escolha) pesa mais: se o vídeo levar quatro semanas, conte com mais listas tocando a Strip;
- **no teste dos leitores**, a pergunta "lembra alguma notícia recente do Grand Canyon?" vale também para as miniaturas.

### [K4] A primeira metade da resposta tem um "because" que as leis não dão, e falta o mecanismo que segura a linha desde 1912 (médio-grave; muda o §3, o §4.2, o §7, atos 2 e 4)

**O problema.**
- A pauta diz, com razão, que "as leis não dão motivo" (§5). Mas a primeira metade da resposta é "So the border didn't stop at the canyon **because**,
  when the line was drawn, in 1850, nobody in Washington had mapped a canyon to stop at". O "because" é nosso: o mapa em branco e a linha reta são
  verdade, e a causa ligando um ao outro não tem fonte. O motivo do paralelo 37 está no Congressional Globe de 1850, que ninguém leu, e é a leitura
  que um vídeo "Why" mais precisa.
  - O USGS (Van Zandt, PP 909) não dá motivo: cita as leis.
- A segunda metade ("Utah pediu, o Arizona disse não") explica por que a linha **ficou**, mas não diz o que mudou em 1912. Antes de 1912 o Arizona era
  Território, e quem decidia era o Congresso: a Constituição (Art. IV, §3, cl. 2) dá ao Congresso o poder de "make all needful Rules and Regulations
  respecting the Territory". Ele já tinha tirado terra do Arizona uma vez, em 1866, e não a devolveu, apesar dos dois pedidos de revogação (A5). Depois de 1912, a cl. 1 pede "the
  Consent of the Legislatures of the States concerned as well as of the Congress". O "não" do Arizona em 1919 é o primeiro que **decide** sozinho.
  A leitura de que a cl. 1 vale para passar terra de um estado a outro é corrente, mas é interpretação: conferir no Constitution Annotated (a Sala; o
  congress.gov recusa robô).
- **E um fato firme que a pauta tem e não usa:** em 1866, o Congresso **usou o rio como divisa**. A lei de Nevada (14 Stat. 43, lida hoje) leva a linha
  "to the middle of the river Colorado of the West; thence down the middle of said river to the eastern boundary of the State of California". Abaixo do
  cânion, o Colorado é divisa de estado até hoje. Aqui em cima, não.
- **Dois fatos do USGS (PP 909, lido hoje):** a divisa Utah–Arizona só foi medida e marcada no chão em 1901, com um poste de arenito escrito "NEVADA",
  "UTAH", "ARIZONA" e "37 N L 1901" (o marco de 1870 estava "1 mile 31.51 chains too far north"); e a admissão do Arizona "was declared in effect by
  proclamation dated February 14, 1912" (o item 6 do §11 sai da lista, com o USGS como fonte secundária oficial).

**O que muda:**
- **a primeira metade (EN), sem "because":**
  > When the line was drawn, in 1850, the canyon was still barely on any map. The line simply followed a parallel, as so many lines in the West do.
  > And when Congress made Arizona, it kept that line.
- **o rio que virou divisa (EN), no ato 2:**
  > Three years later, Congress did use the river as a border. When it gave Nevada the corner of Arizona to the west, it ran the new line "down the
  > middle of said river." Below the canyon, the Colorado became a state line. Up here, the straight line stayed.
- **1912, no ato 4 (EN), depois da conferência da interpretação:**
  > Until 1912, Arizona was a territory, and its borders were Congress's to change. After 1912, it was a state, and moving its land to another state
  > would take the consent of its own legislature.
- **o 1901** vai à tela (o poste), ou a uma frase do ato 2.
- **a ler antes do roteiro:** o Congressional Globe de 1850 (o paralelo 37 entre Utah e o Novo México) e de 1862–63 (a Lei Orgânica), pela Sala.

### [K5] A medida é verdadeira como está, mas usa o denominador que encolhe o paradoxo: são oito em cada dez moradores, não "Colorado City e a exceção" (médio; muda o §4.1, a frase segura da estrada, o §10.1, item 1)

**A conta, refeita** (`cetico_contas.py`, dos arquivos do leitor B e do cético da escolha):
- **A I-15 do Arizona no HPMS** tem 1,73 mi ao norte de 37,000° N (o vértice mais ao norte em 37,0222° N): a correção de 1,72 mi que o leitor B fez à
  mão confere. Com ela: **266,2 mi**; Arizona 100,6, Utah 47,8, Nevada 117,9; **Utah + Nevada 165,7 (62 %)**; com os centros das cidades, 267,9.
- **Ao longo da AZ 389**, a rota por Utah e Nevada até Kingman é mais curta que a rota só pelo Arizona em **toda** a rodovia: as duas só empatariam no
  marco 56,6, e a AZ 389 acaba no 32,6, em Fredonia. Do marco 0 ao 32,6, a rota por Utah tem de 264,8 a 297,4 mi; a só pelo Arizona, de 378,0 a 345,4.
- **A gente** (Censo 2020, 9.955 nos dois CCDs):

  | Rota mais curta até a sede do condado | Lugares | Gente | % |
  |---|---|---:|---:|
  | por Utah e Nevada (até Kingman) | Colorado City, Centennial Park, Cane Beds, Moccasin, Kaibab | 4.715 | 47,4 |
  | só por Nevada (até Kingman) | Beaver Dam, Littlefield, Scenic | 3.129 | 31,4 |
  | sem sair do Arizona (até Flagstaff) | Fredonia, Greenehaven | 1.704 | 17,1 |
  | fora de lugar nomeado | | 407 | 4,1 |

  O CCD de Mohave inteiro tem 8.017 (80,5 %). Para Beaver Dam, Littlefield e Scenic, nenhuma rodovia leva a Kingman sem sair do Arizona (a I-15 do
  Arizona só liga Utah a Nevada).

**O que isso diz:**
- "Not every town up here has it this bad. Fredonia's county seat is Flagstaff" é honesto, mas deixa o espectador achando que Colorado City é o caso
  extremo. É o contrário: **a exceção é Fredonia**, com 17 % da gente;
- "fastest" ainda vem do tempo do OSRM de demonstração (o K7 da escolha pediu outra conferência). As rodovias do HPMS provam "shortest", e para os
  lugares da AZ 389 a rota mais curta é quase toda interestadual: "fastest" é quase certo, mas se confere num mapa (a Sala);
- "about 265" fica 1 % abaixo do medido (266,2; 267,9 de centro a centro). Na voz passa; na miniatura, "265 MILES" sem "about" não (K3).

**O que muda (EN), a frase segura da estrada, depois da de Colorado City:**
> And it isn't just Colorado City. About eight in ten people on the strip live in the part that belongs to Mohave County, and from every town there,
> the shortest highway route to Kingman leaves Arizona. The exception is the east side, around Fredonia, which belongs to a different county.

(Os 80,5 % são do CCD; "every town there" são os oito lugares nomeados de Mohave. Não é o "every town on the strip" que o K1 da escolha derrubou:
Fredonia está dita. Na tela: "Alpha Point calculation: FHWA HPMS 2025; U.S. Census Bureau, 2020".)

### [K6] Os títulos: o 2 cai pela regra da casa, o 3 é o mais fraco, e o par que eu levaria ao teste é o título 1 com a miniatura 3 (médio; muda o "Lado a lado", o §2 e o §8)

**O 1, *Why Arizona Didn't Stop at the Grand Canyon* (43).** Fica o principal.
- Promete o porquê de o Arizona ter terra do outro lado; é literal (a divisa é a reta); paga aos 7,0 s.
- Não colide (a Sala no vidIQ e o cético da escolha o buscaram; nas minhas quatro buscas ele também não aparece), e é o único da família que não usa
  o vocabulário do enxame (isolated, cut off, separated, can't reach, nobody).
- O risco que o teste mede: "Didn't Stop" a frio pode ler "o Arizona não parou (de fazer algo) no Grand Canyon", e, com a enchente no feed, "não parou a
  água". Com a miniatura de mapa embaixo, lê divisa. A pergunta A do teste ("o que você acha que vai ver?") pega isso.

**O 2, *Why Utah Wanted Part of the Grand Canyon and Arizona Said No* (60), cai pela `embalagem.md` §2**, que nomeia o molde: "Uma causa só, nunca,
se o vídeo diz que a causa é disputada. 'The Real Reason…' e 'Why X said no' caem aqui". E a mesma seção pede data no fato histórico, que ele não tem.
Ele ainda entrega metade da resposta e encosta no teto de caracteres.
- **No lugar, para o teste:** *Why Utah Spent Decades Asking for Part of the Grand Canyon* (58, a reserva da pauta): "Spent Decades" marca história, tira
  a leitura de notícia e não diz o "não". Ou a forma curta, *Why Utah Kept Asking for Part of the Grand Canyon* (49). Busquei a curta no vidIQ: nada
  colide (viagem, um guia, uma travessia de carro de St. George à North Rim).
- "Part of the Grand Canyon" é literal o bastante: em 1910 o plano era "making Utah's southern boundary the Grand canyon" (S4, OCR), e o próprio Arizona
  respondeu que a terra pedida levava o cânion (A12).

**O 3, *Why Is Arizona on Both Sides of the Grand Canyon?* (49).** Para quem não é dos EUA, o cânion é "do Arizona" e ponto: a pergunta só intriga quem
espera que o cânion seja divisa, e o título não cria essa expectativa (o 1 cria, com "Didn't Stop at"). E a família "North Rim vs South Rim" é a de
viagem. Ele ocupa uma vaga de quatro leitores para medir pouco.
- **No lugar:** *Why Arizona Kept the Land Beyond the Grand Canyon* (49). "Kept" diz que alguém quis a terra sem dizer quem, e "the land beyond the
  canyon" é o tema da assinatura. Busquei no vidIQ: nada colide (Supai, um guia de cidades do Arizona Revealed de 17/11, mistérios). Paga aos 26,5 s
  (gancho A, frase 8), não aos 7 s: é o risco dele.

**As miniaturas** (K3): a 3 ("UTAH WANTED IT") vende a única história nossa e não repete o título 1, que já dá o paradoxo; é a virada que a
`embalagem.md` §2 pede ("aponta a virada sem dar a resposta"). O risco dela (notícia de agora) cai com o título 1 embaixo, no passado. A 1 vai ao teste
como "STILL ARIZONA", com o rótulo do cânion. A 2 fica de reserva.

**O que eu levaria ao teste:** **o título 1 com a miniatura 3**, contra o título 1 com a miniatura 1 ("STILL ARIZONA"); e, na rodada de títulos, o 1, o
"Spent Decades" e o "Kept the Land Beyond".

### [K7] O gancho faz a pergunta do título depois de dar metade da resposta (médio; muda o §3 e o §8)

**O problema.** É o K3 do vídeo 7, mais brando. Antes da pergunta, o gancho diz "For decades, Utah asked for this land. Arizona said no." e "the line
that keeps it in Arizona isn't the canyon. It's a straight line on the map." Aí pergunta "So why didn't Arizona's border stop at the Grand Canyon?". O
espectador já tem um porquê: "porque o Arizona disse não, e a linha é reta". A pergunta que o gancho de fato abre é outra: quem traçou uma reta ali, e
por que o Arizona brigaria por uma terra que mal alcança.

E a frase 11, "the line that keeps it in Arizona isn't the canyon", embaralha: o cânion não "mantém" a terra no Arizona.

**O que muda (EN), as três últimas frases antes da assinatura:**
> And Arizona's border up here isn't the canyon. It's a straight line. So who drew a straight line across canyon country, and why did Arizona fight
> to keep the land on the other side?

Um fio só (a terra do outro lado e a linha); as duas metades da resposta moram nos atos 2 e 4. O roteiro escreve; o teste D mede.

### [K8] A ordem dos atos 3 e 4 tropeça na própria cronologia, e o espectador cansa no meio se os atos 2 e 4 forem leis e datas (médio-leve; muda o §3 e o §7)

**A cronologia.**
- O ato 3 conta a chegada de 1863 a 1885 e fecha com "It didn't take long for Utah to ask the obvious question." O ato 4 abre com **1865**: o primeiro
  pedido veio **antes** da maior parte da chegada, e por um porto no rio (A9), não pelos colonos. A ponte do ato 3 cria uma causa que a base desmente.
- O resumo do ato 3 diz "na mesma primavera em que o Congresso criou o Arizona": a Lei Orgânica é de 24/02/1863, inverno. O certificado de Whitmore é
  de 13/04/1863. "That spring" só vale se a frase anterior for de fevereiro.
- **O que muda:** o 1865 vai ao fim do ato 2 ("Two years after Arizona was created, Utah was already asking for the land north and west of the river. Not for
  the canyon: for a river port."), e o ato 4 abre em 1897, com os colonos. A ponte do ato 3 fica verdadeira.

**Onde cansa.**
- **O ato 2 (3:12–5:53):** seis datas de lei em 480 palavras. Segura se cada lei for um gesto no mapa (a reta se desenhando, o Novo México acendendo,
  a linha de Nevada descendo **pelo rio**, K4), e não uma leitura de estatuto.
- **O ato 4 (7:49–11:16):** sete anos e 12 números em 620 palavras. Segura como discussão em três tempos (K1), não como fila de "In 19xx".
- **O ato 5 (11:16–14:17):** BLM, ambulância, cidade, relógio, Short Creek e três opcionais: é a outra lista. Três tempos bastam (a estrada, a
  ambulância, o relógio), o BLM numa frase, Short Creek numa (K9), e os opcionais saem (o desvio de Zion é volátil; a North Rim no inverno é do parque).
- **A duração:** com o K1, o K2 e o K4 (o rio de 1866, 1912, a balsa e o lago) entrando, e os opcionais do ato 5, o "2017" e o Powell em oração curta
  saindo, os 15 minutos se sustentam. Os 16 a 17, não, como a pauta diz.

### [K9] Short Creek: a regra do K5 está cumprida na letra; duas coisas a escapam (médio-leve; muda o §4.5 e o §8)

- **Cumprido:** duas frases, fontes primárias (o diário de 26/07/1953 pela NPS; a página do caso no DOJ), nada no título, nenhuma foto de gente, sem
  nomes de líderes nem a igreja pelo nome.
- **A segunda frase (2017)** é a mais perto do true crime e não serve ao fio (a linha, o relógio, a vida virada para Utah). E o enxame já pôs a cidade
  nesse lugar: "the closed compounds of Colorado City" (Forgotten USA, 12/11). **Proposta:** fica só a primeira frase, com 1953; o 2017 sai. A
  pauta já põe isso ao Lucas; eu recomendo.
- **"over polygamy"** é paráfrase da pauta. A NPS diz "Many of its residents were living in polygamous households" e o diário fala de "charges of
  conspiracy and white slavery and other state charges". A frase segura: "In 1953, Arizona's governor ordered a raid on the town, where many families
  were living in polygamous households."
- **A miniatura 2** escreve "COLORADO CITY" na imagem. O §2 tira o nome do título; o espírito do K5 tira da miniatura também. Se a 2 voltar, vai com um
  ponto sem nome.
- O gancho dizer "Colorado City" aos 12 s é geografia e passa: a medida só é verdadeira com a cidade nomeada.

### [K10] O que o Lucas pediu para os roteiros, e os números (leve-médio; muda o §3, o §7 e as frases seguras)

**O que a pauta já prepara:** a voz em segunda pessoa, uma pergunta abrindo cada ato, a fonte na tela, só milhas, a inscrição entre dois atos aos 51 %
(dentro da janela de 5:19 a 9:07, numa pausa, sem citação colada: passa, com o K8 mantendo a ponte do ato 3 verdadeira).

**O que falta:**
- **o público de qualquer país:** "county seat" e "territory" precisam de uma oração na primeira vez (`voz.md` §1): "the county seat, the town where the
  county's courts and offices are"; "a territory, run by Congress until it became a state". Os dois carregam a medida e o K4. A comparação com Nova
  Jersey vem com o número (passa); uma segunda, de fora dos EUA, ajudaria: o País de Gales tem cerca de 8 mil mi², a 2 % da Strip (a conferir no ONS
  antes de ir à voz);
- **a fonte, uma vez:** a NPS tem dono na voz três vezes ("in the Park Service's words", "The Park Service calls it", "very strong ties"). Uma basta; as
  outras vão ao crédito;
- **menos nomes:** o ato 4 lista "Morris e Johnson (A10)" e o rio "near Page and Marble Canyon". Na voz, "Utah's commissioners" e "at the canyon's upper
  end" bastam. Os nomes de lugar já são uns 16;
- **o ritmo calmo pelo texto:** o K1 e o K8 são o ritmo: uma discussão em três tempos respira; uma fila de sete anos, não.

**Os números** (o §7 conta 41; a meta é 45). Os cortes e as entradas:

| Sai da voz | Por quê | Entra | Por quê |
|---|---|---|---|
| "911" | "called for help" diz o mesmo | "1912" | o mecanismo (K4) |
| "1885" (Fredonia) | vai à tela | "eight in ten" | o denominador (K5) |
| "seven" (anos depois de 1850) | "a few years later" | "1938" | o lago (K2) |
| "1929" | "a few months later", depois da balsa | "1923" (opcional) | a travessia abandonada (K2) |
| "2017" | K9 | | |
| "one" (inch) | o "não" passa a ser o "unalterably opposed" (K1) | | |

Fica em ~38 a 39. O "three hundred" do eco fica (K11: ele só funciona inteiro).

### [K11] Os pequenos, cada um no seu lugar

- **A petição de 1905** (A11, na imagem) tem uma linha que é a medida de hoje em 1905, e a pauta não a usa: "even our communication with Territorial
  officials must be made over Utah routes". E uma de justiça com o Arizona: "we beg to acknowledge the courtesies extended us by Arizona". As duas
  são melhores para a voz que "Our business and our social contact is necessarily with Utah".
- **"the people on the strip wrote to Congress themselves"**: são "the undersigned citizens and taxpayers", em número desconhecido (os nomes não foram
  impressos). "People on the strip wrote to Congress themselves" (sem "the").
- **O eco de 1866:** a citação sem "in Nevada" inverte o sentido. O original: "while it is a comparatively short and easy journey from any part of the
  territory in question to the county seats or the capital of Arizona, it is a tedious and perilous one of three hundred miles to the nearest county
  seat in Nevada". A frase segura cita "three hundred miles to the nearest county seat in Nevada" inteiro.
- **150 e 250:** o xerife de 1897 (S1, OCR) vai a Fredonia em "150 miles"; a petição de 1905 diz "250 miles from our county seat". As duas na voz soam
  contraditórias. Só a de 1905 vai à voz.
- **Os espanhóis:** "They were right about the rim" é nosso. A NPS dá o palpite (8 a 10 milhas) e diz que o rio era "much wider" que os 6 pés; não diz
  que acertaram a borda. "Their guess at the rim was close to the Park Service's average today. Their guess at the river was not." E a NPS conta que os
  Hopi levaram os soldados por um caminho "exaggerate" e "volunteer no information of value": é um fato bom, e justo com os Hopi.
- **A ambulância:** "In July 2025, Arizona's health department turned down…" A recusa veio antes, e a parada de 01/07 seguiu uma "Notice of
  Investigation" depois de uma queixa dos bombeiros de Page (o hospital; a KUTV). "In 2025, after Arizona's health department turned down that
  hospital's application…, the service stopped on July 1." O "more than 40 years" tem a KUTV como segundo dono ("For more than four decades").
- **O "motto"** de 1897 é a leitura de Lund (K1).
- **1912 e 1901** têm fonte agora (USGS, PP 909; K4).
- **"At the canyon's upper end, near Page"**: a Glen Canyon Bridge fica 15,9 mi acima de Lees Ferry, fora do Grand Canyon. "Near the canyon's upper end"
  passa; "near Page" sai (menos nomes).
- **A NPS diz "never"?** Não leio nada da NPS que diga "never" sobre o Grand Wash (K2). E "never" envelhece: a forma do fecho do K2 não usa.
- **Pipe Spring e Utah:** a NPS (McKoy) fala de "a prolonged effort by Utah officials to have the Arizona Strip **returned** to Utah" e põe Pipe Spring sob
  condados de Utah até 1883. A pauta está certa em que a Strip nunca foi de Utah pela lei (A2), mas um espectador de Utah vai citar a NPS. A voz diz
  "on paper": "On paper, this land was never Utah's. In practice, for years, it was run from Utah."

---

## O que passou

- **As contas da pauta conferem**, refeitas hoje:
  - `p_contas.py`: os títulos (43, 60, 49); o gancho A com 142 palavras e 47,6 s, o título 1 aos 7,0 s, a pergunta aos 38,5 s; o B com 143 e 47,9 s;
    o orçamento de 2.718 palavras e 15:11; a inscrição aos 7:43, 51 %, na janela de 5:19 a 9:07;
  - `b_horario.py`: 238 dias em 2025, 2026 e 2027. **São sempre 238**: do 2º domingo de março ao 1º de novembro são 34 semanas exatas, todo ano. O
    "for 238 days a year" vale enquanto a lei federal não mudar;
  - `cetico_contas.py`: a correção da I-15 (1,73 mi), a rota (266,2; 165,7; 62 %), o rio (556,62 km = **345,9 mi**; da barragem Glen Canyon, 366,2) e a
    gente (9.955; Mohave 80,5 %);
  - a Strip (7.851,22 mi²; +6,75 % sobre Nova Jersey; 6,91 % da terra e 0,139 % da gente), pelos números do leitor B.
- **Lido de novo e confere:** o "endowment" e o "traversed from east to west" na imagem de 1903; a petição de 1905 na imagem ("250 miles", "Signed this
  14th day of December, 1905, at Fredonia, Ariz."); o eco de 1866 no texto; o "literally a blank space on maps" (NPS, sobre 1857); a citação de Ives
  como o relatório a dá ("The region last explored…"); Whitmore como "the first white man to lay claim to Pipe Spring", com o certificado do condado de
  Washington, Utah; a batida de 1953 "under orders of Arizona's Governor Howard Pyle" (NPS, com o diário); a frase do DOJ de 18/04/2017.
- **O §5 é rigoroso**, e quase tudo nele fica: "Ives called the Strip worthless", "the map was blank", "the strip was taken from Utah", "Congress voted it
  down", "800 miles for decades", "51,300", "Massachusetts" e as palavras proibidas. O que pede ajuste está no K2 (a ponte do ato 4) e no K11 ("on
  paper").
- **A pauta acertou em pôr o OCR como OCR**: cada citação de jornal marcada e com a imagem a conferir. O artigo de Cascio e Brown cita o mesmo St. George
  Union de 13/03/1897 para a viagem do xerife de Mohave "crossing the Colorado at Pierce's Ferry": a página de S1 existe, e o trecho do xerife bate.
- **Justo com os dois estados:** nenhum título diz "took", "stole" ou "lost", e o §2 proíbe "Wrong". O K1 é o único lugar em que a pauta pende.
- **Short Creek:** a regra do K5 está cumprida na letra (K9).
- **O tom e a cena:** as perguntas que abrem os atos, o "Let's drive it", a mesa com o mapa de Ives e as leis, a reta em traço de engenheiro, e nenhum
  humor perto da balsa nem de Short Creek.
- **O ângulo** fica de pé pela régua do Lucas: o tema do momento é o isolamento e a enchente, não o porquê; nenhum vídeo achado conta as retas, os
  pedidos de Utah ou a promessa de 1919 (com a ressalva do K3, a ler).

## O que falta ler antes do roteiro, em ordem de risco

1. **A imagem do Washington County News de 27/02/1919** (S6): quem diz que a estrada e a ponte "would be built", e a quem. Decide o "promised", o "Utah"
   do fecho e a ponte do ato 4 (K2). Junto, as imagens de 1897 (o "one inch", o "net income", os US$ 10.000) e de 1910 (S4), do §11, item 1.
2. **Os vídeos novos da onda** (K3): o capítulo "The Land the Canyon Cut Off" do Mapnitude (27/10), o "#5 Littlefield" do Splot (14/11), o curto da Atlas
   Flick (12/11) e os dois da Forgotten USA (12 e 13/11): se algum conta os pedidos de Utah ou 1919. Pela pauta (§12), isso a faz cair.
3. **A rota mais rápida num mapa** (o K7 da escolha, ainda aberto): Colorado City → Kingman, Moccasin → Kingman e Beaver Dam → Kingman, com o tempo.
   Decide "fastest" ou "shortest" (K5).
4. **O Constitution Annotated, Art. IV, §3, cl. 1** (a passagem de terra entre estados pede o consentimento das assembleias): decide a frase de 1912 (K4).
5. **O Congressional Globe** de 1850 e de 1862–63: o motivo do paralelo 37, se houver. É a leitura que mais fortalece um título "Why" (K4).
6. **A licença da foto de La Rue (1923)** na Photographic Library do USGS, e onde o artigo de Cascio e Brown foi publicado (o simpósio de 2019 da Grand
   Canyon Historical Society, pelo título da busca [S]), para o crédito de tela.
7. **O resto do §11 da pauta** (itens 3 a 5 e 7 a 10), sem mudança; o item 6 (1912) sai, com o USGS.

## Para a Sala ler no navegador do app

Nada aqui foi contornado: nenhuma destas páginas foi tentada por mim, salvo onde digo.
1. **O Utah Digital Newspapers** (a imagem): 27/02/1919, p. 5 (S6), primeiro; depois 13/03/1897, p. 1 (S1), e 05/12/1910, p. 12 (S4).
2. **O YouTube**, os cinco vídeos do K3: o `/watch` e, se houver, os capítulos e a descrição inteira.
3. **Um mapa** (Google ou Apple Maps): as três rotas do item 3 acima, com o tempo.
4. **O constitution.congress.gov** (o congress.gov recusa robô): Art. IV, §3, cl. 1.
5. **O memory.loc.gov** ("A Century of Lawmaking"; o loc.gov recusa robô): o Congressional Globe, setembro de 1850, os projetos de Utah e do Novo México.
6. **A Photographic Library do USGS**: La Rue 771 (15/10/1923), a licença.
7. O resto da lista da pauta (itens 3 a 6), sem mudança.

---

## A nota: 6,0 · DE PÉ COM AJUSTE

O ângulo fica de pé, e o miolo é nosso e primário: as retas de 1850 com a Strip nascendo no Novo México, o memorial de 1903 e a petição de 1905 na
imagem, o eco de 1866, os jornais de Utah. Ganhou hoje três peças firmes: o rio que virou divisa em 1866, logo abaixo do cânion; a travessia do Grand
Wash, que continuou balsa até o lago cobri-la em 1938; e a medida, que vale para oito em cada dez moradores, não só para Colorado City.

O que está errado se conserta sem pesquisa nova, menos uma leitura:
- **o "não" do Arizona está contado pela metade** (K1): o memorial dá primeiro o valor, e o "não" firme é o "unalterably opposed";
- **a promessa de 1919 segura três momentos e tem o sujeito no OCR** (K2);
- **o isolamento virou onda do enxame** nos últimos dez dias, e "CUT OFF" é a palavra dele e da enchente (K3);
- **a primeira metade da resposta tem um "because" sem fonte**, e falta 1912 (K4).

Desço meio ponto da nota da pauta (6,5) pelo K3 e pelo K2 juntos: a embalagem recomendada caiu, e o fecho depende de uma imagem não lida.

- **Para subir a 7,0:**
  - a imagem de 1919 com o Arizona (o Legislativo, o governador ou deputados dele) oferecendo a estrada e a ponte;
  - os cinco vídeos do K3 lidos, sem os pedidos de Utah;
  - o título 1 com a miniatura 3 lido pelos leitores como história (não notícia, não viagem, não enchente);
  - o Congressional Globe, ou uma fonte secundária firme, dando o motivo do paralelo 37.
- **Para cair a 5,0 (RESSALVA):**
  - se um vídeo da onda (ou outro, antes de nós) contar os pedidos de Utah e a promessa de 1919;
  - ou se a imagem de 1919 mostrar que a estrada e a ponte eram o desejo da comissão de Utah, e não uma oferta do Arizona: aí o ato 4 perde o fim e o
    vídeo perde o fecho;
  - ou se os leitores lerem "UTAH WANTED IT" e os títulos novos como notícia.
