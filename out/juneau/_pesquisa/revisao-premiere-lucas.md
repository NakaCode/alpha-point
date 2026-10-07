# Juneau: a revisão do Lucas no Premiere (01/10/2026)

O Lucas abriu o XML (`Juneau.xml` do pacote `C:\Juneau-Premiere`, commit cbb9168) no outro computador e foi mandando
notas por cena, com print do Premiere. Cada nota fica aqui com a mensagem literal, o diagnóstico pelo código da cena e
a proposta. Nada se conserta antes de ele terminar a revisão e decidir a lista: o conserto vai em uma rodada só, pela
conversa do `editor-de-arte` (e do `mapista`, se tocar cena de mapa), depois render, portões, `qc-visual`, XML e pacote.

## s01 (0,000–13,600 do master)

- **O Lucas:** "São muitas informações na tela (s01) e os créditos estão muito grandes" (print em 00:00:05:23).
- **O que se vê nesse quadro:** a data `AUG. 27, 1974` (0,2→6,567), o carimbo YES, o placar `57% · 46,659 to 35,683`
  (3,967→6,567), o rótulo `Juneau, Alaska`, o aviso `Photo from circa 1987` e duas linhas de crédito numa pílula (a
  da foto e a da fonte do placar). Seis blocos de leitura ao mesmo tempo, mais o crédito. O cabeçalho da cena conta 4
  elementos porque a régua da marca não conta crédito nem aviso do ano (identidade §4.2 e §6).
- **O tamanho do crédito:** 76 px no 4K (38 px no 1080p do Premiere), o alvo da marca (identidade §4.1, tokens
  `--fs-credito`). O piso do ofício é 72 px e não desce pela marca (`scripts/lib/marca-tokens.mjs`, "Descer, não");
  o crédito de mapa declarado (`data-qc-credito="mapa"`) tem piso próprio de 40 px. Abaixo de 72, o `qc-tamanho`
  reprova toda cena com crédito: só passa com a exceção do Lucas registrada (`qc/_excecoes-portao.json`).

## s02 (13,600–18,133)

- **O Lucas:** "s02 aparece uma marcação que não marca texto algum".
- **Por quê:** foi de propósito, e não funciona na tela. A cédula termina em `total $`, e o número fica em branco
  porque a voz só o diz em s23 (a regra "nenhum número antes da voz"). Em "price" (4,0 s), o grifo sublinha a lacuna
  vazia. Sem nada que mostre que ali é um campo em branco, o grifo parece um erro.

## s05 (34,667–46,400)

- **O Lucas:** "s05 não entendi muito bem o conceito dessa cena" e "Ao final ela é complementada com uma carta sobre a
  mesa, mas o inicio fica muito vago".
- **O que a cena faz:** nos primeiros 6 s ("One of them, Harris, chaired a committee pushing the move. He made the
  case in the official voter pamphlet of 1982."), só o card de nome (FRANK W. HARRIS, sem retrato, porque não há
  retrato em fonte autorizada) e um satélite do sudeste do Alasca, num canto, sem nome nenhum, com um anel pequeno
  em Juneau. O mapa não diz que lugar é, e nada mostra "a mudança" nem o "folheto oficial". O cartão da fala só
  pousa em 6,7 s.

## s23 (224,967–245,033)

- **O Lucas:** "s23 tem o campo para ser preenchido e logo em seguida aparece o número grande. Acredito que não precise
  desse campo antes, deixe o número só aparecer" (print da folha em b1).
- **O que a cena faz:** em b1 (0–7,567), a folha da cédula com o literal da pergunta, o número do literal em branco
  (`(estimated to total            )`, o "$2,843,147,000" fora) e, abaixo, a linha do preço vazia: o `$` e um traço
  laranja de 1.180 px. Em "about" (9,767), o herói ABOUT $2.8 BILLION pousa nessa linha, o `$` e o traço saem, e o
  número do literal entra.
- **O pedido:** tirar a linha do preço vazia; o número grande só aparece, em "about".
- **Junto com s02:** é o mesmo recurso (o campo em branco esperando o número da voz), e nas duas o Lucas o leu como
  sobra. O vão no literal da pergunta (`total            )`) é o mesmo campo em branco, dentro do texto.

## s40 (418,433–431,767)

- **O Lucas:** "o final da s40 fica muito tempo sem "nada", apenas com o fundo da marca".
- **O que a cena faz:** em b3, a folha do HB 3 entra na gaveta desenhada de 8,9 a 10,5 s e some. De 10,5 ao corte
  (13,334), quase 3 s, sobra a mesa vazia com o contorno da gaveta e a etiqueta AS OF SEPTEMBER 2026, enquanto a voz
  diz "the bill hadn't left its first committee" (10,967–12,597) e depois respira (12,6–13,3).
- **Ideia:** a folha não some. Entra devagar, até "committee", e fica com o topo para fora da gaveta (o cabeçalho
  HOUSE BILL NO. 3 · 2025 à vista): o projeto parado na gaveta, e não uma mesa vazia.

## s56 (578,133–584,933)

- **O Lucas:** "s56", com o print do b1 (a foto da Assembleia como uma faixa fina sobre a mesa). Ele não disse o
  quê; a leitura do Claude central, a confirmar com ele: a foto virou uma tira estreita, com as pessoas pequenas.
- **O que a cena faz:** em b1 (0–2,233), a foto do Juneau Empire (2048×1089, Michael Penn, sessão de 23/01/2017)
  recortada à faixa de cima do arquivo, y 0→196: só os nove membros até o peito, com a geleira da parede, a 1,4× (o
  teto da marca), 2.867 × 274 na tela, uma tira de 10:1. O editor cortou para deixar fora o homem de barba que serve
  água no primeiro plano, o público de costas e as placas com os nomes.
- **Ideia:** a foto inteira, impressa sobre a mesa (a 1,25×, 2.560 × 1.361, cabe na área segura), com a pílula Juneau
  Assembly sobre a mesa: a sessão com o público, como o jornal a publicou. O recorte não muda o sentido nos dois
  casos. As placas ficam pequenas (uns 12 px de letra no 1080p), e os nomes nelas são os dos membros de verdade.

## s62 e s63 (641,867–666,067, o fim e a tela final)

- **O Lucas:** "s62 e s63 ficaram apenas assim" (print: o carimbo YES e, embaixo, o `$` com a linha do preço vazia,
  na metade esquerda da mesa, e mais nada).
- **O que as cenas fazem:** s62 (4,2 s, "That yes vote was real. It just never came with a price voters would
  approve.") bate o YES e risca a linha do preço vazia; s63 (os 20 s sem voz, para os botões do YouTube) é o último
  quadro de s62 parado, escurecendo até metade do brilho.
- **De onde veio:** é o que o Lucas escolheu em 28/09/2026 (identidade §5, "A tela final e o carimbo do Juneau": "A
  última cena, parada e escurecendo", "B, carimbo de borracha à esquerda", "Médio"), numa página com três caminhos
  animados. Visto no vídeo inteiro, ficou pobre para ele. E a linha do preço vazia é o mesmo campo em branco que ele
  pediu para tirar de s02 e de s23: sem ela lá, o fim perde a rima com o começo.
- **Mudar o fim muda uma decisão dele registrada na identidade §5**: a pergunta vai com a lista final, e a regra da
  identidade se reescreve com a resposta.

## A voz (o vídeo inteiro)

- **O Lucas:** "A voz sofreu diversas mudanças de tom com o decorrer do vídeo. Alguns trechos tiveram uma transição
  abrupta também na fala. Talvez utilizar uma voz padrão melhore isso".
- **Como a narração foi feita** (26/09/2026, `canal.json` › `narracao`): ElevenLabs eleven_v3, voz "Alpha Point -
  Narrator (conversational, calm)" (um Remix feito pela API), `stability: 0` (o "Criativo"), um pedido por parágrafo
  (36 parágrafos), pausa de 0,07 s entre eles. O v3 não tem "request stitching": cada pedido é uma leitura nova, e no
  "Criativo" cada leitura varia mais. O Lucas aprovou essa narração em 26/09 ("pode seguir com o master"), ouvindo só o
  áudio; a nota de agora vem do vídeo montado.
- **O que pesa:** o relógio do vídeo inteiro (`words.json`) sai dessa narração. Narração nova muda o tempo de toda
  palavra, e com ele as 55 cenas (todas presas à palavra), o espelho, a regência, os textos de tela, os renders, os
  portões, os laudos e o XML.
- **A medida** (em curso, 01/10/2026, 23:xx): o tom por parágrafo e o salto em cada fronteira, por dois caminhos
  independentes, com recortes de áudio das fronteiras mais fortes em `out/juneau/_tmp/revisao-premiere/voz/`.
- **A decisão** (Lucas, 02/10/2026): "Sim, a mudança seria realmente apenas para o vídeo 2". O Juneau fica com a
  narração de 26/09. A medida serve para escolher a voz e o ajuste do vídeo 2 (registrado no CLAUDE.md, item 4 da
  narração).

## As decisões (02/10/2026)

A página de decisão: https://claude.ai/artifact/1BoBN1mGM7nbx3YUjsxbyi (as maquetes e os conferentes no workflow
`wf_7d09bfb0-51e`; `out/juneau/_tmp/revisao-premiere/resultado-workflow.json`).

- **A resposta do Lucas, no chat** (02/10/2026, de manhã): "Revisão do Juneau: 1 troca, 2 76 px, 3 A, 4 A, 5 B, 6 C,
  7 inteira, 8 A".
  - **s01:** a troca. A data sai quando o YES bate, e "Juneau, Alaska" sai quando o placar entra.
  - **O crédito:** fica com 76 px. A marca não muda.
  - **s02:** A. O literal termina em "spend the money necessary", e o grifo passa por essas palavras em "price".
  - **s05:** A. O nome Juneau no inset, e a página do folheto de 1982 pousa em "pamphlet", com o cartão da fala saindo
    dela.
  - **s23:** B. Sai a linha do preço vazia, e o literal traz o $2,843,147,000 impresso desde o começo. É a exceção do
    Lucas à regra "nenhum número antes da voz", só nesta cena e na s19.
  - **s40:** C. A gaveta embaixo, e a folha para com o cabeçalho para fora, no centro, com a câmera.
  - **s56:** a foto inteira, impressa sobre a mesa.
  - **s62 e s63:** A. O YES e os dois preços recusados, riscados em "price". Muda a decisão de 28/09 (identidade §5).
- **Três perguntas depois**, sobre o que os conferentes levantaram:
  - **s19.** A pergunta: "A s19 (3:13) usa o mesmo campo vazio da s23 […] Aplico nela a mesma solução que você escolheu
    para a s23? (A s35 continua como está: lá a linha vazia quer dizer "sem preço na cédula".)" A resposta: "Sim, como
    na s23 (Recomendado)". A opção dizia: "Sem a linha vazia. A cédula de 1978 aparece com o $966,000,000 já impresso,
    e o número grande entra quando a voz diz "up to"."
  - **s56.** A pergunta: "Na foto inteira da s56, as placas com os nomes ficam legíveis em 4K, mas, pela perspectiva,
    algumas caem embaixo da pessoa ao lado […] Como seguimos?" A resposta: "Foto inteira mesmo assim (Recomendado)".
  - **s05.** A pergunta: "o conferente sugeriu que a folha do folheto mostre só a primeira linha ("Juneau is
    isolated, and travel to and from Juneau …") […] Pode?" A resposta: "Só a primeira linha (Recomendado)".
- **O que se refaz:** s01, s02, s05, s19, s23, s40, s56, s62 e s63 (9 cenas), sem mudar a narração nem o tempo de
  nenhuma palavra.
- **Quem faz:** as peças rodam daqui ("A autonomia do vídeo 2 em diante"; o Lucas soube que valeria também para estes
  ajustes, e não se opôs).
- **A ordem:**
  1. o texto de tela (`redator-de-tela`, depois `verificador-de-fatos`);
  2. as cenas (`editor-de-arte`);
  3. o render, os portões e o `qc-visual`;
  4. a revisão de espectador;
  5. o conceito e a regência alinhados às cenas;
  6. o XML e o pacote.

## A 4ª pergunta: a s36 (02/10/2026, 17:5x)

A verificação independente da 3ª leva (`out/juneau/_tmp/art/revisao-lucas-workflow-3.json` › alinhamento.ver) aplicou a
regra de identidade §5 ("campo em branco esperando a voz não vai à tela, nem como lacuna no meio de um literal") ao
vídeo inteiro e achou a s36: o "twelve" de AS 44.06.055 em branco por 10 s, até a voz.
- **A pergunta:** "Na s36 (6:20), a lei AS 44.06.055 aparece com a palavra "twelve" em branco ("over the ______-year
  period") por 10 s, até a voz dizer "twelve". É o mesmo campo vazio que você tirou da s23. Como fica?"
- **A resposta:** "Twelve impresso (Recomendado)". A opção dizia: "A lei aparece inteira desde o começo, como as
  cédulas da s19 e da s23. Quando a voz diz "twelve", o grifo e a régua de 12 traços entram nele. Vira a 3ª exceção à
  regra "nenhum número antes da voz"."
- **O resto do que a verificação e a revisão de espectador acharam** segue a regra sem mudá-la, e vai ao `editor-de-arte`
  e ao `mapista` como defeito: as molduras tracejadas vazias da s11; o cartão da fala nascido com a 2ª parte em branco
  (s34 e s05); o espaço reservado do ano no cabeçalho do papel da s12 (o trecho da s13) e a ponta laranja do Sudeste que
  escapa sob o papel; e a pílula do crédito mais larga que o texto quando ele quebra (s14, s37 e as que o editor achar).

## A linha do tempo (02 e 03/10/2026)

O Lucas testou a linha do tempo pré-render no Juneau (`ferramentas/linha-do-tempo.mjs`), viu 52 das 55 cenas e deixou
10 marcas na fila `out/_feedback-queue.jsonl` (o texto literal de cada uma está lá, com a cena, o instante e a versão).
As cenas da lista da verificação que ele viu e não marcou (s11, s12, s20, s23 e s34) ficam como estão; a pergunta sobre
elas ele não entendeu ("Não entendi muito bem, já fiz outras marcações"), e as marcas dele valeram como resposta.

As decisões (03/10/2026, 01:xx, AskUserQuestion):
- **s15** ("Mapa parado por muito tempo sem "nada""). Das opções câmera e data, só a câmera ou nomes nos pontos, ele
  respondeu: "1. Nomes de lugar que tenham fotos seria interessante ter uma "miniatura" (a foto) acompanhando".
- **s18** ("Muito tempo sem "nada" na cena"): "Texto real na folha (Recomendado)": as primeiras linhas da declaração do
  folheto de 1978 impressas na folha, com o trecho citado grifado na voz.
- **s31** ("Muito tempo sem o "elemento principal" ou algo central"): "Rae no centro até a frase (Recomendado)": o nome e
  o cargo de Brian Rae no centro até a citação; o cartão entra inteiro, já com a frase.
- **s35** ("Demora para entrar informações dando a sensação de "vazio""): "Cartão cresce (Recomendado)": o cartão nasce
  só com o título, o NO e a linha do preço, e cresce com RIGHT TO KNOW (adiantado para "a second initiative") e com o
  YES e o placar.
- **s60** ("Animação um tanto parada e sem graça, não agregou muito valor"): "Linha 1974 → 1978 → 1982 (Recomendado)":
  os três votos numa linha do tempo, entrando com a voz, e a câmera andando por ela.
- **s63** ("Tela final um pouco vazia, parada"): "Câmera lenta nos 20 s (Recomendado)".
- **s50** ("mapa muito parado, utilizar mais movimento de câmera (suave)"): "Em todo mapa parado (Recomendado)": a s50 e
  todo mapa do Juneau parado por mais de 2 s ganham uma aproximação suave e contínua.
- **s42** ("um dos territórios (talvez o principal da cena) pode sempre estar "marcado" com alguma cor"): "1. Mas na
  verdade todos territórios que fizerem parte do contexto do vídeo, cada um com uma cor (com baixa opacidade) como no
  exemplo do print que irei anexar". O print veio em seguida (descrito em `marca/identidade.md` §5, "As marcações do
  Lucas na linha do tempo").
- **s01** ("Sempre uma imagem aérea ou abrangente (do lugar) no início"): "Vídeo aéreo ou do mapa já neste vídeo".
- **s44** ("Usar mais desses movimentos de câmera e dos mapas com relevo 3D como esse"): direção para os próximos
  vídeos; a s44 fica.
As regras que ficam estão na identidade §5, "As marcações do Lucas na linha do tempo".

Depois do print da África, ainda em 03/10/2026, durante a 5ª leva (`wf_3e66cbc9-1fb`):
- "A imagem foi um exemplo, às cores devem seguir a paleta do canal": a cor de cada território (s42) e a das
  miniaturas sai da paleta do canal (`marca/tokens.css`), nunca do print.
- "E este é um exemplo de foto sobre o mapa que citei", com um print de outro canal: o Brasil sobre satélite, SALVADOR
  numa etiqueta com ponta para o ponto na costa e, logo abaixo, a foto de época numa moldura pequena da mesma cor, sobre
  o mar. É a forma das miniaturas da s15 (descrita na identidade §5, "Nome de lugar com a foto").
Os dois prints vieram colados no chat e não ficaram no disco: valem as descrições.

A s31, depois da 5ª leva (03/10/2026). A parte A deixou a Rae no centro até a frase, mas de 0 a 10 s e de 19 a 22 s o centro
mostrava só o círculo vazio da "cadeira", que o espectador e o cético leram como foto que não carregou. A pergunta: "s31: você
marcou "Muito tempo sem o elemento principal". Agora a Rae fica no centro até a frase dela. Mas antes (0–10 s) e no fim (19–22 s)
o centro mostra só um círculo vazio, que parece foto que não carregou. Como fica?" A resposta: "Cada um no centro (Recomendado)".
A opção dizia: "O círculo vazio sai, e cada pessoa vai ao centro na vez dela, como a Rae: Stoops, Reamer e Dittman. O centro nunca
fica vazio."

As cores dos territórios da s42 (04/10/2026). Na parte B, os vizinhos saíram no --neutro a 35 %, como a regra da marca manda do
terceiro ator em diante, e o cinza sumia sobre o gelo. A pergunta: "s42: você pediu cada território com uma cor, na paleta do canal.
Mas a paleta só tem duas cores de lado: laranja (o protagonista, Juneau) e verde-água (o segundo). Do terceiro em diante a marca manda
cinza, e o cinza some sobre o gelo: Haines e a Colúmbia Britânica só aparecem pelo nome. Como fica?" A resposta: "Uma cor nova por
território". A opção dizia: "A paleta ganha cores próprias de território, uma para cada vizinho, em baixa opacidade. É a sua frase ao
pé da letra, mas muda a marca para todos os vídeos." As outras eram os vizinhos em verde-água e a Colúmbia Britânica em verde-água com o
resto em cinza.

As cores de contexto, aprovadas (04/10/2026, 20:5x). A primeira proposta do diretor-de-arte (cinco cores, de anil a ameixa) foi
reprovada pelos dois juízes (Haines e Skagway, que se tocam, ficavam quase iguais; os vizinhos pesavam mais que Juneau); a segunda
passou na cor e foi ajustada no texto da regra. Com o quadro da s42 antes e depois, as perguntas: "As cores novas de território
(imagem acima): azul para o país vizinho (Colúmbia Britânica), lavanda e violeta para os vizinhos do Alasca, em baixa opacidade, e
Juneau mais forte. Foi a única faixa de cor testada que não se confunde com o laranja e o verde-água, inclusive para daltônicos. Mas é
o tom do print da África, e a marca hoje diz que o roxo do print não entra. Aprova?" A resposta: "Aprovo assim (Recomendado)". E: "A
s44 (a que você elogiou) pinta a Colúmbia Britânica e o Yukon em cinza. Com a regra nova, o país vizinho é azul em todos os mapas. Mudo
a s44 também?" A resposta: "Muda junto (Recomendado)", cuja opção dizia: "Colúmbia Britânica e Yukon em azul também na s44, como na
s42. O resto da cena fica igual. Pede um render novo da s44, com relevo, na MapTiler." A regra está na identidade §2, §4.1, §5 e §6, e
nos tokens.

Decisões do Claude central na 5ª leva (04/10/2026), para o Lucas ver na linha do tempo:
- O relevo 3D na s01 (o voo de abertura), sob "Vídeo aéreo ou do mapa já neste vídeo" e a marca da s44 ("Usar mais desses
  movimentos de câmera e dos mapas com relevo 3D como esse"); registrado na identidade §6.
- A regra "Mapa nunca fica parado" vale para o mapa, não para a mesa: na s07, de 2 a 7,25 s e de 8,25 a 10,25 s a tela é a mesa com
  a folha de 1900 sendo lida e a foto de Sitka, sem mapa à vista, e fica como está.
- Os portões do molde que medem o til e o contraste do crédito não conseguem medir cena de mapa (matam o requestAnimationFrame e o
  mapa não carrega). Nas 17 cenas de mapa, quem mede os dois é o portão do canal ferramentas/portao-mapa.mjs, com a mesma régua,
  aceito por um cético depois de três voltas.

Decisões do Claude central na parte E da 5ª leva (05/10/2026, 06:2x). Na s42, duas folgas medidas ficam, declaradas no cabeçalho da cena:
o vão de ~0,33 s (2,567–2,9 s) em que o território de Juneau está pintado entre a pílula "Juneau" e o nome JUNEAU (abaixo do piso de beat, na troca
cidade→município logo depois de a pílula nomear Juneau; a outra saída afastaria a pílula do ponto desde o 1º quadro), e os ~0,4–0,6 s (13,33–13,9 s) em
que o azul da British Columbia entra antes de o nome se ler (escalonamento de revelação, na pausa da voz; o cético o derrubou). E, para fechar a leva sem
laço: depois de um conserto, confere-se o conserto e a janela dele, sem uma revisão de espectador inteira nova da mesma cena.

Decisões do Claude central no fecho da 5ª leva (05/10/2026, 11:4x), depois da verificação final (`out/juneau/_tmp/art/revisao-lucas-workflow-5ec.json`):
- s33: o Mat-Su pintado de ~4,6 a ~8,6 s sem o nome no quadro fica, declarado. A regra "Território sem nome no quadro não leva tinta" é da seção
  "Os territórios do contexto" (identidade §6, 04/10); o Mat-Su é a contraparte, regra própria (01/10, 35 %), nomeado na s15 e na s39, com Wasilla no quadro.
- s32: o cabeçalho "BALLOT MEASURE NO. 8 · NOVEMBER 1982" desde 0,0 s é texto do próprio documento, reaparição da folha da s23/s30: declarado como antes da voz.
- s27: o cartão da fala pousava vazio ~0,4 s antes de "make": é campo vazio esperando a voz (a regra do Lucas), e se conserta (o cartão chega com o texto).
- Ficam como estão, já conhecidos: os 11 laudos de 01/10 sem o sha1 escrito (s06 s17 s20 s25 s26 s27 s28 s30 s41 s53 s54; os HTML não mudaram desde o commit d978141),
  o comentário velho do cabeçalho da s03 ("s01 p3"; o espelho declara o reuso certo, e mudar o comentário pediria render novo do mapa), e os casos da 4ª leva que o
  conceito mantém (s56, s38, o campo de gelo da s44).

## A 6ª vista na linha do tempo (05/10/2026, 12:2x a 12:3x)

O Lucas viu o vídeo de novo na linha do tempo e escreveu no chat: "Terminei, está bem melhor. Para os próximos vídeos gostaria de tratar
do plano de fundo dos vídeos, mas por esse pode manter". Os comentários dele na fila (`out/_feedback-queue.jsonl`), literais:
- s20 @7,3 s (muvedkvd-47b1a2, versão 69518ae7): "As barras de "gráfico" aparecem vazias, parecendo não haver sentido".
- s35 @10,9 s (muvehdt9-54fe90, versão 5a9a84e2): "camo de $ vago" (o traço do preço vazio, que a cena usa para dizer "sem preço na cédula").
- s31 @3,8 s (muvei9c2-175029, versão 8c27fe45): "Pouco criativo e vazio, somente com textos no centro da tela. Mudar apenas para os próximos vídeos".
- s42 @9,9 s (muveneyz-53e904 e muvennlg-d243c8, versão 7ee642d4): "A marca~~" e "A marcação está correta?". Conferido pelo Claude central:
  a lavanda é o Haines Borough do Census 2025 (`haines-borough`), e as divisas desenhadas sobre o quadro de 9,9 s do clipe caem nas bordas
  pintadas (`out/juneau/_tmp/comentarios-6/s42@9.9-divisas.png`). Sobre a neve, a lavanda a 25 % quase some.
- s60 @9,4 s (muves55e-937358, versão 7b134a18): "Para os próximos vídeos usar elementos com "interação" desde o início".

Para o vídeo 2 (no Juneau, nada muda por eles; as duas marcas fecham como "preservada"):
- **O plano de fundo** dos vídeos: o Lucas quer tratar disso no vídeo 2. O que ele imagina ainda não foi perguntado.
- **A s31**: tela só com textos no centro lê como pouco criativa e vazia.
- **A s60**: os elementos interagem desde o começo da cena, e não só depois.

Ainda não vistas na versão de hoje: s57, s58 e s59 (vistas antes numa versão anterior) e a s63.

As escolhas do Lucas (05/10/2026, 12:42, perguntas de múltipla escolha no chat; o quadro da s42 com as divisas e os quadros da s20 e da
s35 foram mandados antes):
- "s20 (3:34): as barras ao lado da cédula não dizem o que são. Como fica?" → "NO e YES nas barras (Recomendado)" ("A palavra NO na ponta
  da barra maior e YES na menor. As barras continuam mostrando o quase 3 a 1.").
- "s35 (6:14): o traço do preço vazio quer dizer "não havia preço na cédula", mas lê como um campo esquecido. Como fica?" → "Escrever no
  traço (Recomendado)" ("Um texto curto sobre o traço dizendo que não havia preço (algo como NOT LISTED). A grafia final passa pelo redator e
  pelo verificador de fatos.").
- "s42 (7:29): a marcação de Haines está certa, mas quase some na neve. Como fica?" → "Manter (Recomendado)".
- "As 9 decisões da régua de texto nos mapas (a tabela que te mandei às 12:1x): como ficam?" → "Minha sugestão (Recomendado)" ("s12 mapa e
  s59 mudam (a câmera da s12 deixa de parecer parada; o item Border da legenda da s59 entra com a fronteira). As outras 7 ficam como
  estão."). As 7 exceções de carga (s03, s05, s07, s12 texto, s42, s44, s50) estão em `out/juneau/qc/_excecoes-portao.json`, presas ao sha1
  de hoje; a da s12 se confere de novo depois da câmera nova.
- A s29, levantada pelo `redator-de-tela` (as barras da pesquisa e do resultado de 1982 sem dizer qual lado é qual): a pergunta "O redator
  notou que a s29 tem o mesmo tipo de barra da s20 [...] Como fica?" teve a resposta "Manter (Recomendado)" (05/10/2026, 12:5x). Nada muda nela.
- A regra da linha vazia (`marca/identidade.md` §5, "A regra que fica") ganhou a nota de que a s35 agora leva NOT LISTED.
- Decisão do Claude central (05/10/2026, 13:3x): na s12, os trechos de 17,25–20,5 s e 21–26 s que a régua de mapa parado ainda vê são as
  folhas de 1974 e de 1993 no ar, com o grifo andando com a voz. Ficam como estão, declarados: o pacote que o Lucas viu tratava do mapa de
  0 a 14 s ("O mapa quase parado de 0 a 14 s da s12"), as folhas são o assunto ali, e é o caso da mesa da s07 (a regra é do mapa à vista,
  não da folha sobre ele). Se ele marcar esses trechos na linha do tempo, voltam a ele.
- A revisão de espectador das 4 cenas mudadas (05/10/2026, 13:4x; `out/juneau/_tmp/espectador-6a/achados.json`): as quatro mudanças passam.
  Os 4 achados são de antes de hoje, em cenas que o Lucas viu na 5ª e na 6ª vista sem marcar: a s12 sem nome de cidade no mapa de 0 a 16 s
  (a voz nomeia cada uma quando o placar entra), a divisa vertical da s12 que termina na fita da folha de 17 a 26 s (de 15,4 s em diante o
  quadro é idêntico ao de antes, pelo mapista), o piscar da estrada da s59 em ~4,0 s e o canto de créditos da s35 de 2,5 a 5,5 s. Decisão do
  Claude central: ficam, pela regra das 06:2x (depois de um conserto, confere-se o conserto e a janela dele); a s12 sem nomes vai ao Lucas
  como nota, e volta se ele marcar.

## A trilha (06/10/2026)

O Lucas escolheu as músicas da lista `out/juneau/_tmp/trilha/lista-trilha-juneau.md` (assinatura `1dc658a211e9`), às 22:1x: "às músicas...
Trecho 1 = música 1, trecho 2 = música 7, trecho 3 = música 3, trecho 4 = música 11". Pedido o "sim" escrito, que a ferramenta exige, ele
respondeu às 22:18: "Sim, 1, 3, 7 e 11". Duas reservas (7 e 11) entraram no lugar das preferidas 2 e 4. As quatro baixaram pelo
`ferramentas/epidemic.mjs` (duração, canais e título conferidos; a biblioteca passou pela pré-v1), e o plano `out/juneau/_trilha-plano.json`
foi montado à mão pelos `_capitulos` (trilha.mjs --conferir: as 4 com licença válida). Os créditos para a descrição estão em
`out/juneau/_creditos-trilha.md`. A chave do Epidemic tinha sido trocada pelo Lucas no mesmo dia, às 22:1x.

A cena 20 e o portão de carga (06/10/2026, 22:27). Com o NO e o YES nas barras, o `qc-carga` reprova por média (0,97 entradas/s, teto 0,9 do Top10).
A triagem e o cético deram limitação (`out/juneau/_tmp/triagem-portoes-6a.json`). A pergunta, com o trecho marcado: "Cena 20 (3:27 a 3:36): [...] Como
fica?" A resposta: "Manter (Recomendado)". A exceção está em `out/juneau/qc/_excecoes-portao.json`, presa ao sha1 29d5b979.
- Decisão do Claude central (06/10/2026, 22:3x), no fecho da 6ª vista (`wf_cb3babd2-7e8` e `wf_9856fb58-1fa`): ficam, por serem só citação, sem efeito na tela
  nem nos tempos, duas sobras que a conferência achou: o `_conflitos.da_6a_vista_05_10[0]` da regência (de1221f1) sem a marca RESOLVIDO, embora o
  conceito 20c5450b já alinhe as 4 cenas; e o textos-tela (17fee941) chamando de "hoje" os sha1 anteriores da s20 (69518ae7) e da s35 (5a9a84e2), com os
  tempos e a letra iguais aos dos HTML do disco. Mexer nelas de novo mudaria o sha256 de um arquivo que os outros citam, num ciclo sem fim.
