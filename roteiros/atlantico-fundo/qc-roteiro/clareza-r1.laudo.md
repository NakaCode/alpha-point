# Laudo · crítico de clareza · rodada 1

Revisão julgada: `4694e58092c2` · data-base 2026-10-26

VEREDITO: RESSALVA

NOTA: 7.3/10

Conferi o sha: `node roteiros/atlantico-fundo/_ferramentas/gate.mjs` saiu 0 (PASSA) e imprimiu
`4694e58092c24ffe94b23e8fd1ec5ce56907d6163906f39874adc836571a594d`, o sha256 do texto falado. São 2.089 palavras, 30 parágrafos
e 166 frases, ~11:21 a 184 palavras/min; média de 12,6 palavras por frase, a maior com 29; o gancho tem 159 palavras até a
assinatura (~52 s), com o "But" na palavra 49. É o mesmo sha que o `roteiro-editor.md` e a `pronuncia.md` declaram (`--derivados`,
só leitura). Taxas todas abaixo do teto, autoplágio vazio. Dos 8 alertas, um é desta lente: "anomaly" (p3), que o achado 2 tira
junto com o jargão; os de "never", "first" e "Milwaukee Deep" são de fato e de forma, e não mexem na compreensão.

Por que RESSALVA e não FAIL: nenhum achado é GRAVE. A janela de abertura avança do primeiro ao último tempo, paga os dois títulos
na primeira frase e abre uma dívida concreta (os peixes de 1964 que não estavam lá em 2019) que o vídeo paga no fim. Por que não
PASS: (1) em 2.089 palavras ninguém fala, e o ofício não deixa roteiro sem voz de gente chegar a 8 (achado 4); (2) a única pergunta
explícita do corpo, "Why is the trench so deep?", recebe pistas sem pouso (achados 1 e 2); (3) a apuração vai à voz em três pontos
onde o ouvido vira planilha ou faz uma conta que o engana (achados 6, 7 e 10), e o trecho de nomes de p7 é o maior deserto do vídeo
(achado 9). As onze trocas com redação (achados 2 a 10) foram provadas pelo `ferramentas/aplicar-lista.mjs`: o `--seco` sobre o
roteiro de verdade saiu SECO_OK (11 itens, 12 diferenças, nenhuma frase sem item, numerais e aspas declarados), e, aplicadas juntas
numa cópia fora do canal, o portão dá PASSA com 2.037 palavras (−52; ~11:04), 29 parágrafos (os pedidos à voz entre 41 e 105
palavras), 161 frases, média 12,7, maior frase com 29, o gancho intacto (159 palavras, "But" na 49), autoplágio vazio e um alerta a
menos ("anomaly"). O sha da cópia é `3736943c4569`. A inscrição ("Soon after, a problem with the robot cut this one short.") cai na
palavra ~1.062 de 2.037 (~52 %), dentro da janela do cta. O PEDIR do achado 1 fica com o roteirista, com folga de palavras dos dois
lados (a cópia está 87 acima do piso e 113 abaixo do teto). Com as onze trocas e o PEDIR resolvido, esta lente sai de RESSALVA para
PASS. O roteiro não foi tocado.

JANELA DE ABERTURA:
- **A primeira frase paga os dois títulos e é sobre o lugar da foto.** "About 83 miles off Puerto Rico, a U.S. island, lies the
  deepest point in the Atlantic Ocean." tem o lugar, a ilha dos EUA, o número e o superlativo; não é ideia geral. A escala vem logo
  em imagem, não em cifra: o Everest de pé no fundo com o topo de fora. A inversão (o Everest sobra, e não some) é a forma honesta
  (N02) e, de quebra, a mais estranha de ouvir: fica.
- **O "But" (palavra 49, ~0:16) é o do contrato** ("But that's the Pacific, about 9,500 miles away."). Ele não cria contradição
  sobre o lugar (o ouvinte não estava confuso), só põe a Marianas no lugar dela. A contradição concreta do gancho é a do segundo
  parágrafo, a 2,7–4,1 % (~0:19–0:30): "reported a crowd of fish" → "went back to the exact same spot" → "It found no fish at all."
  É ali que a dívida abre, dentro da janela, e é ela que o vídeo paga no fim. Não é troca desta lente: a forma da Marianas é decisão
  da Sala.
- **O gancho avança, não se descreve.** As duas frases seguintes (a primeira pessoa só em 2018; a lista ~1.200 pés funda demais
  "even after sonar showed otherwise") são viradas, não ficha do objeto: cada uma é um atraso ou um erro que pede explicação.
- **A pergunta junta dois fios** ("So what is really down there, and how did anyone find out?"): o ouvinte sai com um feixe (os
  peixes, quem desceu, o número errado) e não com UMA pergunta. O "what" puxa os peixes, que é o fio mais forte, e o "how" puxa o
  resto; o vídeo paga as duas metades. Fica como observação: o portão exige a pergunta, e o tom foi fixado pela Sala.
- **Abaixo do corte, na janela:** oito cifras em 159 palavras (83 mi, 5 mi, 1.500 ft, 9.500 mi, 1964, 2019, 2018, 1.200 ft). As
  datas são âncoras; as que competem são "1,500 feet" (o Everest) e "1,200 feet" (a lista), duas cifras do mesmo tamanho em pés a
  ~25 s uma da outra, que o ouvido pode trocar. Nenhuma é troca: as duas fazem imagem, e a tela as separa (a cota do Everest e o vão
  no medidor).

ACHADOS:
1. [MÉDIO · 4 salto lógico · a pergunta sem pouso] "Along the trench, the North American plate and the Caribbean plate mostly
   slide past each other, with only a little of one sinking under the other." → Ouvi "Why is the trench so deep?" e a primeira
   resposta foi que as placas deslizam uma pela outra. Para mim, placas que andam de lado não cavam nada: não sei se isso é a causa
   ou o enigma. Depois vêm a velocidade, a gravidade, uma laje de calcário que "starts more than 4,000 feet above sea level" e blocos
   girados, cada um uma pista sem "portanto". Saio de p3 sem uma frase que eu consiga repetir sobre por que é fundo, e com o USGS
   como sujeito quatro vezes em 60 palavras ("By the USGS's measure", "The agency", "The USGS also reads" e, com o achado 2, "To the
   USGS"). → TROCA (PEDIR): os dois parágrafos de p3 que começam em "Why is the trench so deep?" precisam ser reescritos por quem
   escreve. Falta: (a) o contraste que faz do deslizamento o enigma, e não a resposta. O USGS o diz (S27,
   `midia/atlantico-fundo/fontes/fa-usgs-ofr2006-1210-introduction.txt`, l. 13): "Trenches in the Pacific are located in places
   where one tectonic plate subducts or slides under another one. The Puerto Rico trench, in contrast, is located at a boundary
   between two plates that slide past each other with only a small component of subduction", com a profundidade "comparable to the
   deep trenches in the Pacific"; (b) o que a laje inclinada mostra, numa oração: o USGS (S28, `fb-usgs-seafloor-map.txt`, l. 57) lê
   a profundidade, a gravidade baixa e a plataforma inclinada como "manifestations of large vertical movements of a segment of the
   Puerto Rico Trench, its forearc, and the island of Puerto Rico" (os 3,3 milhões de anos ficam fora, como o plano cortou); (c) uma
   frase de pouso: o fundo está sendo puxado para baixo e afunda (os blocos girados "indicate trench subsidence", l. 25; a gravidade,
   achado 2); se a fala quiser dizer que o porquê exato ainda se estuda, é o USGS que o diz ("the maps are used to investigate the
   causes of the subsidence", l. 27), atribuído. Uma atribuição ao USGS na abertura do bloco basta para as pistas. Limites: N39
   (nunca "one plate dives under the other here"), R02 (um número por frase), F43 e F44 atribuídos. O contraste (a) planta, de graça,
   o "where one plate dives under another" de p7: a Sandwich do Sul passa a ser o caso típico, e mesmo assim mais rasa. A redação é
   do roteirista; o bloco cabe em ±20 palavras. → RAIZ: PONTUAL
2. [MÉDIO · 2 jargão + 4 salto lógico] "By the USGS's measure, the trench has the most negative gravity anomaly on Earth. Gravity there
   falls further below normal than anywhere else." → "Most negative gravity anomaly" é o primeiro termo de física do vídeo; a
   frase seguinte o traduz, mas não me diz o que a gravidade tem a ver com a fossa ser funda. Fico com um recorde solto no meio da
   resposta a "why". → TROCA (DA-FONTE): "By the USGS's measure, gravity over the trench falls further below normal than anywhere else
   on Earth. To the USGS, that points to a force pulling the trench down." (+5; as frases ficam com 16 e 12). Fonte: S27,
   `fa-usgs-ofr2006-1210-introduction.txt`, l. 13: "the most negative free-air gravity anomaly on earth, -380 mGal , which
   indicates the presence of an active downward force." A primeira frase é a glosa que já estava (o mesmo F43, sem o termo), com
   "over the trench" no lugar do "there", que ficaria sem antecedente. Sai junto o único "anomaly" do vídeo (alerta do portão; pauta
   §3: nada de "anomalia"). O verificador confere "a force pulling the trench down" contra "an active downward force". Se o PEDIR do
   achado 1 reescrever o bloco inteiro, esta é a pista (b) já escrita. → RAIZ: PONTUAL
3. [MÉDIO · 1 nó + 6 samba] "That quake wasn't behind the deadly tsunami of 1918, either." → Um terremoto dos anos 1380 não causou
   um tsunami de 1918: claro que não. Paro para achar o que perdi, e o "either" me pergunta "além de quê?". O que a frase quer dizer
   (F57: as fontes possíveis do tsunami medieval não explicam o de 1918) já foi dito, para o que importa, a 39 % ("It wasn't in the
   trench."). → TROCA (CORTAR) (−10; sai um "1918"). "They think quakes like that come thousands of years apart." passa a seguir
   direto "The scientists who dated the coral call it…", e o "They" ganha o antecedente na frase anterior. A reserva da inscrição
   (a frase "They think…") não muda. → RAIZ: PONTUAL
4. [MÉDIO · presença §3 · ninguém fala] "He was the first person to reach the deepest point of the Atlantic." → Em 2.089 palavras ninguém
   fala. O homem no centro do vídeo chega a 58 % como um nome completo sem dizer quem ele é (cientista? militar? turista?), desce,
   chega e sobe em silêncio. → TROCA (DA-FONTE), em dois pontos: (a) "He made the trip alone, in a sub built to reach the bottom of
   any ocean." → "He made the trip alone, in his own sub, built to reach the bottom of any ocean." (+1; o release o chama de "his
   private submersible", `fb-fivedeeps-release-2018-12-21.txt`, p. 1, e a Popular Science, de "self-funded", l. 39): eu passo a
   saber que é um particular com o próprio submersível; (b) logo depois de "He was the first person to reach the deepest point of
   the Atlantic.", a frase nova: "When he climbed out, a reporter on board heard him say: "One down!"" (+13; uma citação nova e o
   numeral "one"). Fonte: S05, `fb-popsci-2018-12-21-vescovo.txt`, l. 33: "“One down!” Those were Victor Vescovo’s first words after
   climbing out of the hatch of the DSV Limiting Factor."; o repórter estava a bordo do Pressure Drop (l. 35). "Heard him say", e não
   "his first words": a reportagem ressalva "the first intelligible words", e "first" seria mais um alerta do portão. A fala só se
   entende inteira com o achado 5 (uma de cinco). Opcional, se o verificador preferir dizer o ofício dele: "Victor Vescovo, a Dallas
   investor who paid for the expedition himself," (PopSci, l. 39 e 43; +9, a frase fica com 31). → RAIZ: INSTRUÇÃO (o plano não
   previu fala de gente; o dossiê tem a S05 e não tirou dela uma voz)
5. [MÉDIO · 2 nome sem tradução · promessa interna] "In December 2018, the Five Deeps Expedition came to map the trench with a
   modern multibeam sonar, on a ship called the Pressure Drop." → "Five Deeps" diz o que a expedição queria, mas eu não decifro:
   cinco o quê? Mais adiante não entendo por que ela foi "to the other end of the Atlantic", nem por que mergulhou no Factorian e
   não no Meteor, que é o mais fundo de lá. → TROCA (DA-FONTE): depois dessa frase, "The expedition's goal was to reach the deepest
   point of each of the five oceans." (+15; o numeral "five"). Fonte: `fb-popsci-2018-12-21-vescovo.txt`, l. 31 ("the deepest point
   in all five oceans") e l. 35 ("an attempt to become the first person to reach the lowest point in all five oceans"); o release:
   "the first dive in the Five Deeps Expedition to the bottom of the Atlantic Ocean". Paga três vezes: o "One down!" (achado 4), a
   ponte de p6 ("to the other end of the Atlantic") e o Factorian, o ponto mais fundo do Oceano Austral, em p7 (o Meteor é do
   Atlântico, que já estava feito: o ouvinte deduz sozinho por que não houve mergulho lá). A conferir: a meta fala de cinco oceanos
   em 2018, e p7 diz "In 2023, the International Hydrographic Organization recognized the Southern Ocean"; um ouvido atento pode
   perguntar se em 2018 eram quatro. A frase é a meta da expedição, não da IHO (N20 veta "the fifth ocean" atribuído à IHO); se o
   verificador achar o choque forte, "of every ocean on Earth" diz o mesmo sem o número, e o "One down!" continua legível. → RAIZ:
   PONTUAL
6. [MÉDIO · carga §4 · a ata de método] "The scientists give that margin with 95 percent confidence. They built their map as a grid of
   squares about 250 feet across. The results were published in 2021." → Acabei de ouvir o número do vídeo, "about 27,500 feet down",
   e o "Give or take about 16 feet", que me impressiona. Aí vêm 95 %, uma grade de 250 pés, 2021, 83 milhas e três milhões, em
   frases curtas: virou ata de método, e o homem que desce sozinho fica para depois dela. → TROCA (CORTAR) (−28; saem 95, 250 e um
   "2021"). O 95 % e a grade vão à tela (o "8,378 ± 5 M" do editor já os carrega); "published in 2021" volta em p6, onde a data
   trabalha ("Their study came out before the expedition's own results"). Ficam o 16 pés (a precisão em imagem, que conversa com os
   7 pés dos medidores e com os 1.200 da lista) e as 83 milhas (o título). O beat humano chega 28 palavras antes: o institucional
   deixa de abri-lo. → RAIZ: INSTRUÇÃO (o plano levou o F11 inteiro à voz)
7. [MÉDIO · 1 nó por conta que o ouvinte faz] "U.S. waters, in that sense, means the exclusive economic zone: a band of sea up to about 230 miles
   out, where the U.S. controls the resources." → Uma frase antes ouvi que o ponto fica "about 100 miles from the Dominican
   Republic". Agora ouço que as águas de um país vão até 230 milhas. Faço a conta: 100 é menos que 230, então o ponto também estaria
   nas águas da República Dominicana? A definição que devia me tranquilizar abre a dúvida (o limite entre as duas zonas é a linha do
   meio, que o vídeo não diz nem precisa dizer). → TROCA (ESTREITAR): "U.S. waters, in that sense, means the exclusive economic zone:
   the band of sea where the U.S. controls the resources." (−6; sai o 230). A definição fica (o porquê do roteirista, N32: "U.S.
   waters" ouvido como território), e o 230 vai à tela (EXCLUSIVE ECONOMIC ZONE · UP TO 200 NMI (230 MI) · NOAA), onde o mapa mostra
   as duas zonas e a fronteira entre elas. → RAIZ: PONTUAL
8. [LEVE · 4 salto lógico · a ordem] "Their study also put the deepest point somewhere else." → Há um minuto vi Vescovo chegar ao ponto
   mais fundo e os medidores baterem com o sonar. Agora ouço que um estudo de 2019 pôs o ponto 36 milhas a oeste, em águas da
   República Dominicana, e por duas frases acho que ele desceu no lugar errado, até ouvir que o estudo saiu antes dos resultados da
   expedição. → TROCA (REORDENAR) (−4): "Their study came out before the expedition's own results, and it put the deepest point
   somewhere else. Working from public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot,
   in waters claimed by the Dominican Republic. The expedition's results, published in 2021, placed it in U.S. waters off Puerto
   Rico, about 100 miles from the Dominican Republic." Os mesmos fatos e números (eight, 36, 2021, 100); a data vem antes da
   surpresa. → RAIZ: PONTUAL
9. [MÉDIO · 5 deserto + nomes demais] "The expedition had wanted to call it Pressure Deep, after its own ship, the Pressure Drop." →
   Depois que o sonar decide a disputa (o Meteor, 370 pés mais raso, a 83 %), eu já tenho a resposta da parte, e os peixes ainda não
   voltaram. Por quase um minuto só ouço nomes: Meteor, Pressure Deep, Pressure Drop, a organização hidrográfica, 60 graus, Argentina,
   Factorian, Limiting Factor, Limiting Deep. É o trecho em que eu pegaria o celular. → TROCA (CORTAR), em dois pontos: (a) "The
   expedition had wanted to call it Pressure Deep, after its own ship, the Pressure Drop." (−16) e, para o pedido à voz não cair a 32
   palavras, o parágrafo "The name Meteor Deep is old, … about 30 miles from where older books put it." junta-se ao anterior ("…The
   expedition mapped it but didn't dive there."), que fica com 105; (b) "Its neighbor, about 20 miles away, got the other half of the
   name: Limiting Deep." (−15; saem o 20 e o "half"). Ficam "about 30 miles from where older books put it" (é a tese do vídeo, os
   livros contra o sonar, outra vez) e "that's where the odd name comes from" (paga o nome do submersível, que o ouvinte já conhece).
   O vídeo nomeia cinco "Deeps" e deixa o ponto principal sem nome (por decisão, N08 e N09, que não toco); estes dois são os que
   menos servem. O Pressure Drop continua nomeado uma vez, em p5, para o mapa. → RAIZ: INSTRUÇÃO (os opcionais de p7 entraram
   todos; `_trabalho/escrita-notas.md` §1 e §7.5)
10. [LEVE · 2 termo + ordem · a fila de profundidades] "The trench itself had been found eight years earlier, by the British
    research ship HMS Challenger, under Captain Nares, far to the east." → É a primeira vez que o corpo do vídeo diz "the trench", e o
    que vem é quem a achou, o capitão e uma sondagem de 23.000 pés ("sounding" é definido e nunca mais volta). Só na terceira frase sei
    o que a fossa é e onde fica, e saio do parágrafo com mais uma profundidade na fila. → TROCA (REORDENAR, com CORTAR) (−8; sai o
    23,000): "The trench is a long, narrow valley in the seafloor. It runs for hundreds of miles, almost parallel to Puerto Rico's north
    coast. It had been found eight years earlier, by the British research ship HMS Challenger, far to the east." "Under Captain Nares"
    é o 2º corte do próprio plano; o 23,250 FT · 1875 fica no medidor da tela. A glosa "a long, narrow valley in the seafloor" é a
    definição do termo na primeira vez (voz §1); o USGS dá a régua (a fossa com centenas de quilômetros e o setor mais fundo com
    10–15 km de largura, `fb-usgs-seafloor-map.txt`, l. 21 e 25), e o verificador confere "narrow". → RAIZ: PONTUAL

MAPA DE RETENÇÃO (posições sobre as ~2.089 palavras do texto falado; tempos a 184 palavras/min):
- 0 % (0:00): o lugar e o número, os dois títulos numa frase; 1,1 %: o Everest com o topo de fora
- 2,3 % (0:16): o "But" do contrato, a Marianas no Pacífico
- 2,7–4,1 % (0:19–0:30): a dívida do vídeo: "a crowd of fish" em 1964, "no fish at all" em 2019
- 4,4 % e 5,1 %: a primeira pessoa só em 2018; a lista ~1.200 pés funda demais "even after sonar showed otherwise"
- 6,2 % (0:43): a pergunta dupla; a assinatura a 6,8 %
- 7,6–18,7 %: o arame de 1883, o lodo marrom, o Challenger, o eco de 1939 e o nome; re-gancho a 18,4 % ("A sound could give a
  number. It couldn't show anyone what was down there.")
- 22,7 % (2:35): "Keep those fish in mind.": a dívida replantada
- 27,7 % (3:09): "That took a different kind of sonar." (ponte; ver abaixo do corte)
- 30,6 % (3:29): "That was 15 years before anyone reached the deepest point.": a primeira parcela do "even after sonar"
- 31,1 % (3:32): "Why is the trench so deep?": a única pergunta explícita do corpo; de 31 a 37 % ela não pousa (achados 1 e 2). É nó, não
  deserto
- 36,9 % (4:12): "On the trench's walls, its maps showed something else.": re-gancho
- 41,1 % (4:40): "Farther east, an island holds a sign of what the trench itself can do.": re-gancho forte
- 47,5 % (5:24): o nó do "either" (achado 3)
- 48,5 % e 51,4 % (5:30–5:50): a câmera; a pausa da inscrição depois de "Soon after, a problem with the robot cut this one short."
- 54,7 % (6:13): o número do vídeo, "about 27,500 feet down", pago; 55–57 %: a ata de método (achado 6)
- 58,4 % (6:38): Vescovo, sozinho, quarta-feira, 19/12/2018: o beat humano, pagando a 4ª frase do gancho
- 61,9 % (7:02): "That number was not the one in the official list.": ponte que planta p6
- 63,2 % e 67,7 %: o número da lista "almost exactly what the newspapers reported in 1939"; a crista no lugar do ponto da lista: os
  dois melhores pagamentos do vídeo
- 68,6–73,2 %: o ponto em águas da República Dominicana e depois nas dos EUA (achados 7 e 8)
- 75,9 % (8:37): "The expedition also took its sonar, and its sub, to the other end of the Atlantic.": ponte
- 76,7 % (8:42): a outra candidata (pergunta nova, concreta); paga a 83,1 % (9:26): "about 370 feet shallower"
- maior deserto: de 84,3 % a 91,6 % (palavras 1.762 a 1.913, ~49 s, de ~9:35 a ~10:24), de "The name Meteor Deep is old" a
  "Limiting Deep.": a disputa de p7 já foi decidida, e os peixes ainda não voltaram. São nomes (Meteor, Pressure Deep, Pressure
  Drop, a IHO, 60°S, Argentina, Factorian, Limiting Factor, Limiting Deep) e uma linha que resolve uma dúvida que o ouvinte não tinha.
  O conserto é de forma, não de acréscimo: o achado 9 tira 31 palavras de nome; a linha de 60°S fica (decisão da Sala), e o achado 5
  lhe dá um porquê (o Oceano Austral era um dos cinco)
- 91,6 % (10:24): "Off Puerto Rico, the French crew's fish were waiting for a second look.": o re-gancho mais forte do vídeo
- 93,8–98 % (10:39–11:08): o pagamento: pepinos-do-mar onde se contaram peixes; a conclusão atribuída com o limite; Vescovo de
  volta, como autor: a âncora volta nomeada
- 98,3–100 % (11:10–11:21): o fecho num lugar do mapa: a borda da vida dos peixes, a rede de 1970 de volta e "about 83 miles off
  Puerto Rico". Não repete a pergunta nem responde em lista (voz §1): reordena, e o ouvinte sai com uma lente (o fundo do Atlântico
  é a fronteira de onde os peixes param), não com um eco

CENSO DE PRESENÇA: 0 fala direta de gente. Em discurso indireto: os cientistas do coral ("call it the only known sign", "They think…",
46–48 %; "The authors suspect…", 45 %), "The expedition's scientists write that…" (74,8 %), Stewart e Jamieson ("They wrote that…",
67 %) e "The scientists who went back concluded…" (95,7 %). Com nome, lugar e hora: Brownson (palavra 188, 9 %, ~1:01; 27/01/1883,
ao norte de Porto Rico), que só comanda e nunca volta; Nares (13,6 %), só um nome; Vescovo (palavra 1.220, 58,4 %, ~6:38; quarta,
19/12/2018, sozinho, duas horas e meia), o beat humano do vídeo, que volta nomeado a 98 %; Heather Stewart e Alan Jamieson (65,5 %),
com a ação deles (conferir) e as palavras deles em paráfrase. Sem nome: a tripulação francesa (gancho e 19 %). As instituições: o
USGS 6 vezes (com "the agency"), a NOAA 6, a lista oficial 3, o Survey de 1883 2, a IHO 2, mais o Australian Museum, a National
Geographic Society e o Seabed 2030. A distância até a primeira voz humana é infinita; com o achado 4, ela cai na palavra ~1.257 de
2.037 (~62 %, ~6:50): tarde, mas é o lugar em que a pessoa mais forte do vídeo está. O conserto inteiro do §3 (abrir com uma pessoa
num lugar e numa hora) esbarra na regra do gancho do vídeo 5 (a primeira frase é o fato sobre o lugar da foto); o gancho tem gente
mesmo assim (a tripulação de 1964, "the first person"), e o fecho já volta a Vescovo pelo nome. A hierarquia estava errada no beat
mais forte (em p5, a ata do sonar abria o mergulho; o achado 6 a corta) e está certa em p8 (quem voltou abre; o artigo explica; o
nome de Vescovo fecha).

DESTINO DAS CIFRAS:
- ficam (as que merecem a memória), as mesmas cinco do editor: "about 83 miles" (gancho, p5 e a última frase); "more than five
  miles down" / "about 27,500 feet" (gancho, p5 e o fecho, pela borda da NOAA); "about 1,200 feet too deep" (gancho e p6); "about 200
  fish" (gancho, p2 e p8); "about 370 feet shallower" (p7)
- imagem ou comparação, já na forma certa: o topo de 1.500 pés do Everest; "about 9,500 miles away"; "about a century before
  Columbus"; "three to four times the pace"; a rede "nearly as deep as the deepest point"; "Give or take about 16 feet" e "within
  about 7 feet", que fazem par com os 1.200 da lista (a precisão do sonar contra o erro do livro); "the top of a ridge" (o 24.400
  pode ficar, mas é a crista que o ouvido leva); "about nine-tenths" sem mapa; "about 30 miles from where older books put it"
- tela: os 23.000 pés de 1875 (achado 10); o 95 % e a grade de 250 pés (achado 6); as 230 milhas (achado 7); as 20 milhas do
  Limiting Deep (achado 9); o 4.000 e o 13.000 da laje (o PEDIR do achado 1 decide se um fica); a magnitude 7.1 (o próprio
  roteirista a oferece à tela); "a dozen dives"; "eight older surveys"; "five authors"; o 28.000 do release de 2011 (fica na voz se o
  roteirista quiser o exemplo concreto do número que circulou, mas é a quarta cifra de p6 em 30 s)
- corte: nenhuma além das dos achados
- a fila de profundidades: ao longo do vídeo, o ouvido recebe dez profundidades em pés (23.000, mais de 28.000, 24.000, 27.300,
  20.000, 27.500, 28.700, 28.000, 24.400 e, no fecho, de novo 27.500), mais o 4.000 e o 13.000 da laje. As da história (a que encolhe) são a tese e a tela as
  empilha no medidor; a voz precisa só das que mudam a história. Com os achados 6 e 10, saem duas; o 27.300 do USGS fica, porque é o
  "sonar que já sabia" (que ele soe quase igual ao 27.500 é o ponto)
- o recorte casa com a tese em quase todos os números falados: o 27.300 é o do setor, não o do ponto, e a frase diz "the deepest
  part of the trench"; o 1918 entra com a ressalva "It wasn't in the trench."; Anegada entra com "far from its deepest point". A
  exceção é de vizinhança, não de número: o limite dos peixes da NOAA (p8) vem logo depois da conclusão dos pepinos-do-mar, e o
  ouvido pode juntar as duas ("os peixes de 1964 estavam fundo demais para ser peixe"). O sítio de 1964 fica a uns 24.000 pés (dito a
  21 %, esquecido a 98 %), acima do limite. A quebra de parágrafo e "The deepest point in the Atlantic…" levam o limite de volta ao
  ponto, e o medidor da tela, com as duas marcas, desfaz a leitura errada; fica como observação

O QUE O LEIGO GANHOU: Aprendi que o ponto mais fundo do Atlântico fica a umas 83 milhas de Porto Rico e a mais de cinco milhas de
profundidade (o Everest, de pé lá, deixaria só o topo de fora); que por décadas a lista oficial deu a ele um número uns 1.200 pés
fundo demais, quase o mesmo dos jornais de 1939, mesmo depois que o sonar do governo dos EUA mostrou o fundo mais raso em 2003; que
só em dezembro de 2018 alguém chegou lá, sozinho, e os medidores do submersível bateram com o sonar a 7 pés; que os "peixes" que os
franceses contaram em 1964 eram, pela conclusão de quem voltou em 2019, pepinos-do-mar; e que esse ponto fica bem na borda de onde
os peixes deixam de viver. Não ouvi a voz de ninguém (com o achado 4: ouvi Vescovo dizer "One down!").

O QUE ESTÁ FORTE: A espinha é uma fila de visitas, e cada uma corrige a anterior: o arame, o eco, a tripulação, a rede, o multifeixe,
o robô, o sonar e o homem sozinho, a conferência, a volta. O fio dos peixes abre a 2,7 %, é replantado a 22,7 % ("Keep those fish in
mind.") e pago a 92–96 %, e a âncora de 1970 (a rede) volta no fecho. As pontes ligam em um sintagma e plantam o bloco seguinte ("A
sound could give a number. It couldn't show anyone what was down there.", "A crew could see only a small patch of the trench, and a
net could only bring something up. Neither could map the floor.", "That number was not the one in the official list.", "Off Puerto
Rico, the French crew's fish were waiting for a second look."). Os termos chegam definidos na hora (bathyscaphe, cusk-eel, NOAA,
multibeam, plates, sounding, a zona econômica). A honestidade está na voz sem pesar ("Exactly how deep, the sources disagree.", "How
deep the fish was when it swam in, no one knows.", "It wasn't in the trench.", "Computer models put it at magnitude 8 or more.",
"It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again."), que é o
contrário da prateleira que a pauta pediu, sem perder a tensão. Os dois pagamentos do número da lista ("That's almost exactly what the
newspapers reported in 1939." e "At the spot the old listing pointed to, their study found about 24,400 feet, the top of a ridge.")
são o que um leigo conta no jantar. O fecho termina num lugar do mapa, sem "So", sem lista e sem a pergunta. E as decisões da Sala
estão cumpridas: "more than three million people", a linha de 60°S sem "not ratified" nem "for the first time", Anegada na parte
leste e longe do ponto mais fundo, a magnitude dos modelos, 19/12/2018, o Archimède a "more than four miles down", o 8.740 lado a lado
com os jornais sem dizer que houve cópia, o Milwaukee a "more than 28,000 feet", e o Brownson Deep fora da fala.

NÃO TOCAR:
- "About 83 miles off Puerto Rico, a U.S. island, lies the deepest point in the Atlantic Ocean.": os dois títulos e a regra da
  primeira frase
- "It's more than five miles down." e "Stand Mount Everest on the bottom, and its top 1,500 feet would stick out of the water."
- "When you think "deepest ocean," you think Mariana. But that's the Pacific, about 9,500 miles away.": a forma do contrato
- "In 1964, a French crew dove into the Puerto Rico Trench and reported a crowd of fish. In 2019, a submersible went back to the exact
  same spot. It found no fish at all.": a dívida do vídeo
- "And for decades, the official list of undersea features gave that point a number about 1,200 feet too deep, even after sonar
  showed otherwise.": a forma do F09
- a pergunta e a assinatura: "So what is really down there, and how did anyone find out? You're at Alpha Point, and this is where the
  story of the bottom of the Atlantic begins."
- "A sound could give a number. It couldn't show anyone what was down there."
- "Exactly how deep, the sources disagree. It never reached the deepest point, though."
- "Keep those fish in mind."
- "How deep the fish was when it swam in, no one knows." e "A crew could see only a small patch of the trench, and a net could only
  bring something up. Neither could map the floor."
- "multibeam sonar, a ship's sonar that maps the seafloor in a wide strip" e "Earth's outer shell is made of giant slabs called
  plates.": as definições na hora
- "That was 15 years before anyone reached the deepest point."
- "It wasn't in the trench." e "Farther east, an island holds a sign of what the trench itself can do."
- "That's about a century before Columbus reached the Caribbean." e "They think quakes like that come thousands of years apart.": a
  comparação e o tom (a segunda é também a reserva da inscrição)
- "Soon after, a problem with the robot cut this one short.": a frase da inscrição
- "To get the sonar right, the ship lowered instruments to measure how fast sound travels at every depth, from the surface to the
  floor.": o método em termos de gente
- "Give or take about 16 feet." e "The sub's own gauges confirmed the sonar's number, within about 7 feet."
- o parágrafo do mergulho (com as trocas do achado 4): "On Wednesday, December 19, 2018, … He was the first person to reach the
  deepest point of the Atlantic." e a ponte "That number was not the one in the official list."
- "That's almost exactly what the newspapers reported in 1939.": a comparação sem a cópia (N23)
- "At the spot the old listing pointed to, their study found about 24,400 feet, the top of a ridge."
- "The two scientists had asked for that name to fall out of use."
- "The sonar settled that." e "The trench's deepest point, the Meteor Deep, is about 370 feet shallower than the one off Puerto Rico."
- o parágrafo da linha de 60°S, na forma da Sala
- "The Limiting Factor reached its bottom in 2019, and that's where the odd name comes from."
- "Off Puerto Rico, the French crew's fish were waiting for a second look."
- p8 inteira, com "Where the French had counted about 200 fish, it found none.", "It's a conclusion drawn from the count and the look,
  and the animals the French saw that day can't be checked again." (N45) e "One of them was Vescovo." (a âncora volta nomeada)
- o fecho: "By NOAA's estimate, no fish lives much deeper than about 27,500 feet. The net that brought up the cusk-eel in 1970 had gone
  down nearly that far. The deepest point in the Atlantic, about 83 miles off Puerto Rico, sits right at that edge."

PADRÕES: Três. O primeiro é a apuração na boca do narrador: margem com nível de confiança, tamanho da grade, número de levantamentos,
de mergulhos e de autores, o nome de cada navio e de cada robô (Blake, Challenger, Milwaukee, Archimède, Ron Brown, Okeanos Explorer,
Deep Discoverer, Pressure Drop, Limiting Factor), e três instituições que só confirmam o que outra já disse (Australian Museum,
National Geographic Society, Seabed 2030). Cada um está certo; juntos, fazem a fila que o ouvido não segura. A tela é o lugar deles,
e o editor já os tem lá (achados 6, 9 e 10; abaixo do corte). A raiz é de INSTRUÇÃO: o plano marcou como "crescer" e como opcional o
que a voz devia deixar à tela, e o texto usou quase todos. O segundo é a pista sem "portanto": a gravidade, a laje e o robô aparecem
como fatos, sem a oração que diz o que eles mostram (achados 1 e 2; o robô abaixo do corte). O terceiro é a voz que falta: o dossiê
tem a reportagem a bordo (S05), com as palavras de Vescovo, e o roteiro fala SOBRE as pessoas, nunca COM elas (achado 4).

Abaixo do corte (não são achados; ficam para o roteirista pesar; todas as redações casam uma vez no roteiro):
- "The earthquake behind it struck the eastern part of this trench": o "it" abre o bloco, e o nome mais perto é "the coral" (do fim
  do parágrafo anterior). "The earthquake behind that tsunami struck…" (REDIZER, +1).
- "the international list of undersea feature names" (p6): é a mesma lista que o gancho e p6 chamam de "the official list of undersea
  features"; dois nomes soam como duas listas. "the official list of undersea features" (REDIZER, 0).
- "That took a different kind of sonar.": diferente de qual? O eco de 1939 nunca foi chamado de "sonar" (o editor evitou de
  propósito), e os dois "sonar" que o ouvinte ouviu antes são o moderno. "That took a different way of using sound." (REDIZER, +1)
  liga de volta a "A sound could give a number." e ao "bounced sound" de 1939, e o "multibeam sonar" de p3 passa a ser o nome dessa
  outra maneira.
- "described them as snailfish, a family of fish.": eu não sei por que 200 peixes numa milha é estranho; só o fecho me diz que peixe
  rareia lá embaixo. Depois dessa frase, "Decades later, scientists called that an extraordinarily high density of fish for such
  depths." (DA-FONTE, +14; `fa-nora-528113-dsr1-2020.txt`, l. 7: "an extraordinarily high-density of fish for hadal depths") dá o
  porquê do "Keep those fish in mind." O 1º parágrafo de p2 fica com ~95.
- "The Australian Museum lists the same catch.": segundo dono do mesmo fato, no meio do maior pedido à voz (105); uma instituição de
  outro continente que o ouvinte não sabe pôr no mapa. CORTAR (−7).
- "who had taken charge of the ship a few months earlier": Brownson é presença (nome, lugar e hora) e fica; a biografia dele não
  serve a nada e o nome nunca volta. CORTAR a oração (−11): "Its commander was a Navy officer named Brownson."
- "The authors suspect the coral died in summer or fall.": um palpite dos autores que não muda nada do que vem. CORTAR (−10).
- "in a bulletin from the National Geographic Society": a terceira instituição de p1; o que p6 cobra é "newspapers". "That summer,
  newspapers printed the news." (CORTAR o trecho, −8).
- "on a NOAA ship, the Ron Brown": o "crescer" do plano; o nome do navio não volta. "on a NOAA ship" (CORTAR, −3).
- "the project to map the whole ocean floor by 2030": o Seabed 2030 inteiro ("The expedition's scientists write that all of its sonar
  data went to Seabed 2030, the project to map the whole ocean floor by 2030.") fecha um fio (o dado ficou público) que o ouvinte não
  estava seguindo. CORTAR a frase (−24), se o piso deixar.
- "The islands there are a chain of small volcanoes, with no one living on them.": "far to the south" não pousa num lugar que o
  ouvinte conheça. "The islands there are a chain of small volcanoes, closer to Antarctica than to South America, with no one living
  on them." (DA-FONTE, +7; NASA EO 149160, `fb-nasa-eo-149160-mount-michael-2021.txt`, l. 50: "about 1,600 kilometers (1,000) miles
  from Antarctica and 2,400 kilometers (1,500 miles) from South America"). A frase do "far to the south" passaria de 34 com o
  acréscimo; por isso ele vai nesta.
- "In 2023, the International Hydrographic Organization recognized the Southern Ocean.": a organização chega sem dizer o que é. Uma
  glosa curta, se o verificador aceitar a forma (a IHO é o órgão das cartas náuticas e publica os limites dos oceanos e mares, a
  S-23). Não proponho redação: a forma do parágrafo é da Sala.
- "Argentina, for one, disagrees.": oito segundos antes ouvi "Both Britain and Argentina claim them", e logo depois de "no political
  meaning" o ouvido liga a discordância à disputa das ilhas. Discorda de quê? Da linha. É forma da Sala; fica como observação.
- "About 24,000 feet down, the French crew reported a crowd of fish.": duas frases depois de "Exactly how deep, the sources
  disagree.", um número exato soa como resposta à disputa. São coisas diferentes (a disputa é de quão fundo o batiscafo foi; o
  24.000 é onde o relato põe os peixes), e o "reported" segura. Observação.
- "More than three million people live in Puerto Rico.": fato sem tarefa no lugar em que está (entre o ponto e o mergulho). Paga o
  "U.S. island" com gente; não proponho troca.
- O robô de 2015: a voz conta a papelada (o nome do robô, o do navio, "a dozen dives", a falha) sobre a única imagem real da própria
  fossa, e não diz o que a câmera mostra; a ponte "To see the trench's walls, you need a camera down there." prometeu as paredes.
  Para o verificador: o relatório da expedição diz que o ROV "came back to the surface without exploring the seafloor at this dive
  location" (`fa-noaa-ir-10424-ex1502l3-relatorio.txt`, p. 13), e o dossiê (F68) e a pauta §6 dizem que o vídeo mostra a parede a
  6.000 m. Se a regência confirmar o que o vídeo mostra, meia frase do que se vê pagaria a ponte; se não, "a camera" da ponte promete
  mais do que o vídeo entrega.
- "From the outside, the two look a lot alike: similar color, similar texture, similar shape.": o pepino-do-mar nunca é descrito, e o
  ouvinte imagina uma lesma no chão, não um animal que nada; o "similar" três vezes é a fonte ("similar exterior colour, texture and
  morphology"). O desenho resolve; observação.
- "When you think "deepest ocean," you think Mariana.": "Mariana" sozinho pode soar como nome de gente; o rótulo do globo (MARIANA
  TRENCH · PACIFIC) resolve. Forma do contrato; observação.
- O piso: com as onze trocas, a cópia fica com 2.037 palavras; todos os cortes acima juntos tirariam mais ~63 e os acréscimos poriam
  ~23, e a cópia ficaria perto de 2.000, ainda acima de 1.950. O PEDIR do achado 1 tem folga para os dois lados.
- A prova das trocas: a lista (`lista-clareza-r1.json`, os 11 itens com os numerais e a citação declarados), a saída do
  `aplicar-lista.mjs --seco` sobre o roteiro de verdade (SECO_OK) e a cópia com as trocas aplicadas (sha `3736943c4569`, PASSA) estão
  fora do canal, na pasta temporária da sessão. As posições deste laudo saíram de
  `pautas/atlantico-fundo/_trabalho/scripts/clareza-posicoes.py`, que só lê.

VEREDITO: RESSALVA (com as trocas dos achados 2 a 10 e o PEDIR do achado 1 resolvido, PASS nesta lente)
