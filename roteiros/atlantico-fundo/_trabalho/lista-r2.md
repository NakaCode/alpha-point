# Lista fechada · rodada 2 · atlantico-fundo

Revisão julgada: `04ae6bfbeb60`

> O doutor de roteiro, 26/10/2026, sobre os cinco laudos da bancada final da rodada 1 (`qc-roteiro/roteiro-r2`, `clareza-r2`,
> `locucao-r2`, `fatos-r2` e `escuta-fria-r2`, todos com "Revisão julgada: `04ae6bfbeb60`"; nenhum GRAVE, as cinco lentes em
> RESSALVA), sobre as decisões da Sala depois dessa bancada (os itens 1 a 8 do pedido, que não se reabrem) e sobre o dossiê corrigido
> na raiz (`pautas/atlantico-fundo/fundamento.json`: C28 e N51, com as `como_dizer` novas de R03, R14, F09, F37, F38 e F43; as fontes
> S72 e S73, com os fatos F92 e F93). A lista que o aplicador lê é `lista-r2.json` (montada por
> `pautas/atlantico-fundo/_trabalho/scripts/lista-r2-montar.py`); o arquivo de pedidos ao escritor, `pedidos-r2.json`, vai vazio
> ("Os pedidos", abaixo). Nada foi aplicado ao roteiro. É a última lista: o crítico de roteiro diz retorno decrescente (três achados
> desta bancada nasceram das trocas da r1 e do P01), e nenhuma troca traz fato novo à voz. Conferido nas cópias locais das fontes, sem
> rede: o USGS (a página do mapa do fundo, S28, `fb-usgs-seafloor-map.txt`: o "we suggest", os blocos girados e a legenda com a
> "southern edge on land"), o resumo de 2020 (S06, `fa-nora-528113-dsr1-2020.txt`: "was reported in 1965", a densidade, a cor, a textura
> e a forma), Stewart & Jamieson 2019 (S02: o 8.408 m e o "from eight surveys") e o relatório de 1883 (S11: "No record is known of any
> sounding…").

## O resultado

- **24 trocas** (L43–L66; a numeração continua a da r1, L01–L42, para cada id valer nos dois relatos e no editor). Dos 41 achados das
  cinco lentes (roteiro 8, clareza 8, locução 5 com três subitens no A4, fatos 5, escuta fria 15), entram: os 3 MÉDIOS e os 5 LEVES do
  roteiro; 7 dos 8 da clareza (fica de fora a A1, por trazer fato e citação novos); os 5 da locução (o A1 na forma da clareza); os 3 de
  fatos que pedem troca (A1, A2 e A5; o A3 e o A4 fecharam com as fontes S72 e S73, e as duas frases ficam, decisão (b) da Sala); e,
  pelas mesmas trocas, 5 dos 15 da escuta fria (EF-05, EF-06, EF-08, EF-11 e o "it" de p7). A op do aplicador fica em `op`; a da lente,
  em `op_lente`.
- **As três regras novas do portão** (o roteiro de hoje sai 1, com 6 problemas, todos delas): [gancho-1200] na L43 ("more than 1,000
  feet", a `como_dizer` da R03 corrigida); [porque-sem-dono] na L52 ("That, the agency suggests, is why the trench is so deep.", a forma
  da Sala); [tripulacao-francesa] nos quatro lugares que ele reprova, o gancho (L44), p2 (L47, a `como_dizer` do F37), a ponte de p7
  (L61) e a ponte de entrada de p8 (L62), e, pela ESCALA, nos três ecos de p8 que o padrão não pega ("the French had counted", "the fish
  the French had reported", "the animals the French saw": L63, L64, L66). Depois da lista, "French" na voz só qualifica o batiscafo ("a
  French bathyscaphe", p2; "a French deep-diving craft", o gancho).
- **0 pedidos ao escritor** (`pedidos-r2.json`, `itens: []`).
- **`node ferramentas/aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r2.json --seco`: exit 0**
  (SECO_OK): 24 itens, 20 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, 0 pendentes; as provas (a) aspas (3 → 3), (b)
  numerais (110 → 111, o saldo de cada item igual ao declarado), (c) parágrafos e (d) REDIZER passando; os 49 pares do editor casando
  uma vez cada. Texto falado `04ae6bfbeb60` → `432dcb4041d4`; o portão antes, REPROVADO (2.038 palavras, 6 problemas); depois, PASSA.
- **O portão na cópia** (`_trabalho/_tmp-lista-r2.md`, as mesmas trocas aplicadas por
  `pautas/atlantico-fundo/_trabalho/scripts/lista-r1-aplicar-copia.py`, o aplicador de cópia genérico da r1, sobre a `lista-r2.json`):
  **PASSA**, exit 0, sha `432dcb4041d4` (o mesmo do aplicador), 2.026 palavras (−12; ≈ 11:01 a 184 palavras/min), 29 parágrafos (de 44
  a 109 palavras; a regra é 40 a 110), 160 frases, média 12,7, maior 28; gancho com 166 palavras até a assinatura (teto 170), "But" na
  palavra 49, a pergunta antes da assinatura. 0 problemas; os mesmos 8 alertas, todos já decididos ("Os alertas do portão", abaixo);
  taxas abaixo do teto (abre_and 2, abre_so 1, perguntas 2, frases curtas 2; abre_but, travessões, imperativo de mapa, "here's" e
  antítese 0); autoplágio vazio contra Juneau, Los Angeles, Zona do Canal e Peru.
- **Os pedidos à voz que mudam de tamanho** (pela contagem do portão): o 2º do gancho, 104 → 109; p1, 1º, 73 → 62; p2, 1º, 85 → 84; p3,
  3º, 75 → 78 (o teto de 75 era do P01, não do texto); p4, 3º, 72 → 61; p6, 1º, 49 → 55; p6, 2º, 66 → 60; p6, 3º, 83 → 82; p7, 4º, 67
  → 71; p8, 1º, 76 → 75; p8, 2º, 47 → 48. Os outros 18 não mudam.
- **As chamadas** (`marca/cta.md`), depois da lista, pela contagem do portão
  (`pautas/atlantico-fundo/_trabalho/scripts/lista-r2-chamadas.py`): a reserva da inscrição, "They think quakes like that come
  thousands of years apart.", que agora fecha p4, nas palavras 1.026–1.035 (≈ 5:34, 49 %); a inscrição, na pausa depois de "Soon after,
  a problem with the robot cut this one short.", nas 1.080–1.090 (≈ 5:51, 52 % com a cauda; dentro de 35–60 %); o comentário a partir
  da 1.983 (≈ 10:46, 95 %). Nenhuma muda de frase.

## As trocas

### L43 · DO-DOSSIE (lente: ENFRAQUECER) · roteiro:2 MÉDIO, fatos:A2 LEVE (corrigir, F022), portão [gancho-1200], dossiê R03, F09, C28, N51, clareza: NÃO TOCAR (vencido pela Sala, decisão (a) e item 2)

- SAI: "still had the Atlantic about 1,200 feet too deep"
- ENTRA: "still had the Atlantic more than 1,000 feet too deep"
- Numerais: entram ['1,000']; saem ['1,200']
- Por quê: Os ~1.200 ft são 8.740 − 8.378 = 362 m = 1.188 ft, e o 8.378 é o sonar da expedição, publicado em 2021; o estudo de 2019 foi feito antes dela, e o fundo que ele achou foi 8.408 m (Stewart & Jamieson 2019, cópia 01-04-stewart-jamieson-2019-earscirev.txt, l. 243–247 e 983): pela régua dele, a lista passava 332 m = 1.089 ft. 'More than 1,000' vale nas duas réguas, e é a como_dizer da R03 corrigida (C28, N51); o portão novo reprova o 1.200 dentro da frase do estudo [gancho-1200]. O 1.200 fica em p6, na frase que compara com o sonar da expedição ('The floor the sonar found is about 1,200 feet shallower.'): o gancho dá o piso, p6 a medida. Sai um '1,200', entra um '1,000'. +1 palavra (gancho 162 antes da L44).
- editor: 6 par(es)

### L44 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (nao_conferida, F014), portão [tripulacao-francesa], dossiê F36, F37, R14, A19, C28, N51, locução:A4a LEVE (o homógrafo 'dove'), clareza e roteiro: NÃO TOCAR do gancho (vencidos pela Sala, decisão (a) e item 2)

- SAI: "In 1964, a French crew dove into the Puerto Rico Trench and reported a crowd of fish."
- ENTRA: "In 1964, a crew in a French deep-diving craft descended into the Puerto Rico Trench and reported a crowd of fish."
- Numerais: entram —; saem —
- Por quê: Nenhuma fonte lida diz quem estava a bordo do Archimède em 1964 nem quem escreveu o relato de 1965: as cópias dizem 'the French submersible Archimede' (S04) e 'the 1964 Archimède bathyscaphe' (S06). O francês é o batiscafo (F36), e a tripulação vai sem nacionalidade (F37, R14, A19, C28, N51); o portão novo reprova 'French crew' [tripulacao-francesa]. Na mesma troca sai o 'dove' (DOHV, passado de dive, com a grafia de dove, a ave), que a escuta automática do motor não pega (locução A4a). A forma é a que a Sala deu, com 'descended' (o verbo da locução A4a) no lugar de 'went down': uma palavra a menos, e o 'went down' de p2 ('people went down into the trench themselves') não se repete. 'Deep-diving craft' é a glosa que p2 usa ('a French bathyscaphe, a deep-diving craft'), e 'bathyscaphe' fica para p2, onde se define. A frase vem depois do 'But' (palavra 49): a 1ª frase, o 'But', a pergunta e a assinatura não mudam. +4 palavras; o gancho fica com 166 até a assinatura (teto 170), e o pedido à voz com 109 (a regra é 40 a 110).
- editor: 5 par(es)

### L45 · CORTAR (lente: CORTAR) · roteiro:8 LEVE, clareza:A6 LEVE, escuta fria:EF-11 LEVE

- SAI: "Its commander was a Navy officer named Brownson, who had taken charge of the ship a few months earlier."
- ENTRA: "Its commander was a Navy officer named Brownson."
- Numerais: entram —; saem —
- Por quê: Três lentes. O nome de Brownson é a presença de p1 (o plano a pede) e fica; a oração relativa (o mês em que ele assumiu o navio) não volta, não serve a nenhuma camada e alonga o minuto mais frágil do vídeo, logo depois de um gancho que prometeu peixes, uma primeira pessoa e uma lista errada (roteiro 8; clareza A6: 'a 2ª data da frase anterior a pesar sem imagem'; EF-11). O fato está certo (Brownson no comando desde 01/10/1882, S11) e fica no card de pessoa ('IN COMMAND OF THE BLAKE SINCE OCT. 1882'). Os três testes: não é a única vez de explicação nenhuma; não é degrau (nada adiante usa a data); sem dívida (nada se refere a 'a few months earlier'). As quatro checagens: fronteira de frase (o corte vai da vírgula ao ponto, e 'named Brownson.' fica frase inteira); conectivo ok (a frase seguinte abre com 'The wire'); referência ok; respiração no fim de frase. Emenda: '…a Navy officer named Brownson. ▸ The wire went down more than five miles before it touched bottom.' −11 palavras; o pedido à voz fica com 62.
- editor: 1 par(es)

### L46 · REDIZER (lente: REDIZER) · roteiro:5 LEVE, clareza:A2 MÉDIO, locução:A1 MÉDIO (propunha 'no ship'; vencida, conflito 2)

- SAI: "At the time, no sounding was known to have brought back"
- ENTRA: "At the time, no one was known to have brought back"
- Numerais: entram —; saem —
- Por quê: 'Sounding' chegava aqui sem glosa, e a glosa só vem na frase seguinte, noutro parágrafo ('Its sounding there, the depth it measured,…'): dito, 'no sounding was known' soa como 'som', logo antes do eco de 1939 (clareza A2), ou como gerúndio de 'sound' (locução A1); a voz §1 quer o termo definido na primeira vez. A palavra entrou na r1 (L04) com o recorde da fonte. A troca tira o termo desta frase sem mudar o recorde: 'No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this' (relatório de 1883, S11, cópia 04-uscgs-relatorio-1883-CSC-0082.txt, l. 3516–3518), datado por 'At the time'; a 1ª vez do termo passa a ser a da Challenger, onde a glosa já está. Saldo 0 palavra.
- editor: 2 par(es)

### L47 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (nao_conferida, F062), portão [tripulacao-francesa], dossiê F37 (como_dizer), R14, A19, C28, N51

- SAI: "About 24,000 feet down, the French crew reported a crowd of fish."
- ENTRA: "About 24,000 feet down, its crew reported a crowd of fish."
- Numerais: entram —; saem —
- Por quê: A forma do F37 corrigido, palavra por palavra ('About 24,000 feet down, its crew reported a crowd of fish.'): o 'its' é o Archimède das frases de antes ('It went more than four miles down.' … 'It never reached the deepest point, though.'). O francês continua no batiscafo, duas frases acima ('a French bathyscaphe'). −1 palavra.
- editor: 1 par(es)

### L48 · REDIZER (lente: REDIZER) · locução:A4b LEVE

- SAI: "NOAA, the U.S. ocean and weather agency, records that in 1970 a net brought back a small cusk-eel."
- ENTRA: "NOAA, the U.S. ocean and weather agency, reports that in 1970 a net brought back a small cusk-eel."
- Numerais: entram —; saem —
- Por quê: Depois da vírgula, 'agency, records' pode ser lido como o composto 'agency records' (REC-ords, os registros da agência), e a escuta automática do motor não pega homógrafo: a grafia transcrita casa com o texto. 'Reports' tem a mesma pronúncia como substantivo e verbo, e a atribuição é a mesma (a página da NOAA, S31: 'In 1970, a deep-sea cusk eel was caught in a net…'). Saldo 0 palavra. A frase está na amostra da folha de pronúncia (o pedido 5), que se refaz com o sha novo de qualquer jeito.
- editor: 1 par(es)

### L49 · REDIZER (lente: REDIZER) · locução:A2 MÉDIO

- SAI: "The agency says that points to an active force pulling down on the area."
- ENTRA: "The agency says this points to an active force pulling down on the area."
- Numerais: entram —; saem —
- Por quê: Dito, 'says that' é quase sempre 'diz que': o ouvido espera uma oração, recebe 'points to' sem sujeito e volta para ler o 'that' como demonstrativo. 'This' tira a ambiguidade, com o mesmo número de palavras; a fonte continua dita (S27, l. 13: 'which indicates the presence of an active downward force'). A frase entrou na r1 (L10).
- editor: 2 par(es)

### L50 · REDIZER (lente: REDIZER) · locução:A4c LEVE, Sala: item 1 (no mesmo parágrafo do pouso)

- SAI: "To the USGS, that tilt records big vertical shifts"
- ENTRA: "To the USGS, that tilt reflects big vertical shifts"
- Numerais: entram —; saem —
- Por quê: 'That tilt records' se lê também como 'that' + 'tilt records' (REC-ords), e p1 já usou 'a record for the Atlantic' como substantivo; a escuta do motor não pega homógrafo. 'Reflects' traduz o 'manifestations of' da fonte tão bem quanto 'records' (S28, l. 57: 'we suggest that these features are manifestations of large vertical movements of a segment of the Puerto Rico Trench, its forearc, and the island of Puerto Rico') e não repete o 'show' das frases vizinhas. Saldo 0 palavra. O achado da clareza sobre a laje (a voz não diz onde fica a ponta alta) entra só no editor, na ilustração da laje: a fonte dá a 'southern edge on land' na legenda do mapa (S28, l. 31), mas o dossiê não tem esse fato, e esta rodada não traz fato novo à voz (conflito 9).
- editor: 4 par(es)

### L51 · REORDENAR (lente: REORDENAR) · locução:A3 MÉDIO, Sala: item 1 (no mesmo parágrafo do pouso)

- SAI: "Rotated blocks of rock under the trench point to a sinking floor."
- ENTRA: "Under the trench, rotated blocks of rock point to a sinking floor."
- Numerais: entram —; saem —
- Por quê: 'Point' é substantivo umas vinte vezes no roteiro ('the deepest point'), e aqui é verbo logo depois de 'the trench': dito, 'under the trench point' se ouve como nome de lugar, e 'to a sinking floor' fica sem verbo; o 'Rotated' no começo ainda pode soar como verbo. As mesmas palavras, em outra ordem: o adjunto vai à frente, e 'point to' fica colado ao sujeito. A fonte não muda (S28, l. 25: 'underlain by rotated blocks of the NOAM plate that indicate trench subsidence'). Saldo 0 palavra.
- editor: 1 par(es)

### L52 · ATRIBUIR (lente: ATRIBUIR) · roteiro:1 MÉDIO, fatos:A1 MÉDIO (F098, F099; propunha 'That, to the USGS,'; vencida pela Sala, item 1), portão [porque-sem-dono], dossiê S28, N51, escuta fria:EF-05 MÉDIO (o 'That is why' que 'finge fechar')

- SAI: "That is why the trench is so deep."
- ENTRA: "That, the agency suggests, is why the trench is so deep."
- Numerais: entram —; saem —
- Por quê: O pouso da pergunta da parte fechava como certo, na voz do narrador e sem dono, o que o USGS sugere: 'The Puerto Rico trench exhibits great water depth, extremely low gravity anomaly, and a tilted carbonate platform […] we suggest that these features are manifestations of large vertical movements' (S28, cópia fb-usgs-seafloor-map.txt, l. 57), com os mapas usados 'to investigate the causes of the subsidence' (l. 27). O portão novo reprova o pouso sem dono [porque-sem-dono]. A forma é a da Sala: o verbo da fonte ('suggests'), com 'the agency' (o USGS do bloco), e o eco da pergunta ('is why the trench is so deep') fica, palavra por palavra. O teto de 75 era do pedido P01, não do texto: o pedido à voz vai a 78 (a regra é 40 a 110). +3 palavras.
- editor: 4 par(es)

### L53 · CORTAR (lente: CORTAR) · roteiro:3 MÉDIO (com a prova de órfão), escuta fria:EF-06 MÉDIO, Sala: item 3 (cortar, sem ponte nova), clareza: NÃO TOCAR (vencido pela Sala), locução: notas (o lugar calmo da inscrição; vencido, conflito 3)

- SAI: "To see the trench's walls, you need a camera down there."
- ENTRA: (nada)
- Numerais: entram —; saem —
- Por quê: É a `ponte_saida` de p4 no plano, e a Sala mandou cortar sem ponte nova. As sete partes acabavam numa ponte que promete a próxima; aqui o molde se denuncia: a quarta ponte em quatro partes, a segunda seguida sobre 'the trench's walls' (a de p3 abriu p4 com as paredes, 70 s antes), depois de um bloco que não tratou de parede, e o 'you need a camera down there' é a única segunda pessoa genérica do texto (roteiro 3). O ouvinte a frio ouviu nela uma promessa que p5 não paga: o robô filma e o texto não diz o que a câmera mostrou (EF-06). A prova de órfão (cético, item 1: no vídeo 2, cortar a ponte deixou um 'wall' órfão): p5 abre com a `ponte_entrada` dela, que não depende de nada de p4 ('In 2015, a NOAA robot filmed the trench's south wall, almost 20,000 feet down.'). Os três testes: a frase não explica nada (é promessa, não explicação); não é degrau (p5 se sustenta sozinho); sem dívida (nenhuma frase adiante se refere a ela). As quatro checagens: fronteira de frase inteira, com o espaço antes dela; conectivo ok (p5 abre com 'In 2015'); referência ok ('the trench's south wall' é sintagma inteiro); respiração no fim de parte. Emenda: '…They think quakes like that come thousands of years apart. ▸ [¶ p5] In 2015, a NOAA robot filmed the trench's south wall…'. p4 passa a fechar na frase que segura o tom, que já é a reserva da inscrição. −11 palavras; o pedido à voz de p4 fica com 61.
- editor: 2 par(es)

### L54 · REORDENAR (lente: REORDENAR) · clareza:A3 MÉDIO, escuta fria:EF-08 MÉDIO ('2019' são quatro coisas; o '2019 study' misturado com o '2019 return'), roteiro: NÃO TOCAR de p6 (o que ele protege fica: o lado a lado da R06 e a lista)

- SAI: "A 2019 study found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- ENTRA: "In 2019, two scientists, Heather Stewart and Alan Jamieson, found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- Numerais: entram ['two']; saem —
- Por quê: p6 abria com 'A 2019 study', e o parágrafo seguinte com 'In 2019, two scientists, Heather Stewart and Alan Jamieson, checked…': o ouvinte ouvia duas coisas de 2019 sem saber se eram a mesma; o estudo aparecia sem dono, e os donos, como outro assunto (clareza A3, EF-08). Os dois autores sobem para a ponte de entrada, reescrita na mesma troca: a atribuição é a mesma (o 8.740 ao estudo, pelos dois autores; C27), e a ponte continua colada a 'That number was not the one in the official list.' e paga o gancho com as palavras dele ('found that the official list of undersea features had…'). O que o roteiro protegia (a lista, o 28,700 e o lado a lado com 1939 na frase seguinte, R06) fica. A frase volta a abrir com data, sozinha (a de antes não abre). Entra um 'two'; o '2019' fica. +6 palavras; vai junto com a L55, que tira 6.
- editor: 2 par(es)

### L55 · REDIZER (lente: REDIZER) · clareza:A4 MÉDIO (o par da A3)

- SAI: "In 2019, two scientists, Heather Stewart and Alan Jamieson, checked the published depths"
- ENTRA: "Stewart and Jamieson checked the published depths"
- Numerais: entram —; saem ['2019', 'two']
- Por quê: Com a L54, os dois já foram apresentados na ponte de entrada, com o ano; apresentá-los de novo faria o ouvinte achar que é outro trabalho. O pedido à voz abre retomando pelos sobrenomes, sem pronome solto no começo do parágrafo (o defeito que a r1 consertou em L03 e L16). Saem um '2019' e um 'two' (os dois ficam na L54). −6 palavras. Só com a L54.
- editor: 3 par(es)

### L56 · REDIZER (lente: REDIZER) · roteiro:7 LEVE

- SAI: "Working from public data from eight older surveys"
- ENTRA: "Using public data from eight older surveys"
- Numerais: entram —; saem —
- Por quê: 'From … from' a quatro palavras de distância, numa frase de 27, tropeça, e o segundo 'from' soa como origem do 'working'. A fonte: 'from eight surveys between 1996 and 2015' (Stewart & Jamieson 2019). −1 palavra.
- editor: 1 par(es)

### L57 · ATRIBUIR (lente: ATRIBUIR) · roteiro:4 LEVE, escuta fria:EF-08 MÉDIO (o '2019' de quatro coisas)

- SAI: "The same 2019 study noted the depth most often published"
- ENTRA: "Stewart and Jamieson's study noted the depth most often published"
- Numerais: entram —; saem ['2019']
- Por quê: A frase anterior acabou de dizer 'The expedition mapped this trench with its sonar in 2019'; 'the same 2019 study', logo depois, se ouve como o levantamento da expedição, e não o estudo de p6, 1:40 antes; com essa leitura, 'It was deeper than the sonar's number for Puerto Rico' e 'The sonar settled that.' perdem o sentido. A troca diz a fonte pelos nomes que p6 já deu (F77, S02: 'The most commonly reported depth for the Meteor Deep is 8428 m'): nenhum nome novo para o ouvinte, nenhuma palavra a mais, e um '2019' a menos. ATRIBUIR, não REDIZER: os sobrenomes não estavam no 'de'.
- editor: 2 par(es)

### L58 · REDIZER (lente: REDIZER) · clareza:A5 LEVE, escuta fria (Onde me perdi, 10: o 'it' de p7), Sala: item 6 (os consertos baratos de clareza)

- SAI: "Since 2021, it has officially belonged to the spot the sonar found"
- ENTRA: "Since 2021, that name has officially marked the spot the sonar found"
- Numerais: entram —; saem —
- Por quê: O 'it' logo depois de 'a German research ship': o ouvinte pergunta se o navio pertence a um lugar e volta para entender que 'it' é o nome; e nome não 'pertence' a um ponto. A r1 guardou a frase de propósito (o eco da tese, L39): ela fica, só com o sujeito dito. O mesmo F76 (o nome aprovado em 07/06/2021 para o ponto do sonar). +1 palavra.
- editor: 2 par(es)

### L59 · REORDENAR (lente: REORDENAR) · clareza:A7 LEVE, Sala: item 6 (os consertos baratos de clareza), roteiro: NÃO TOCAR do bloco austral 'palavra por palavra' (as palavras ficam; só a ordem muda)

- SAI: "It begins at 60 degrees south. The organization says the line carries no political meaning, and not every country uses it. Argentina, for one, disagrees. By that line, the Meteor Deep, well to the north, is in the Atlantic."
- ENTRA: "It begins at 60 degrees south. By that line, the Meteor Deep, well to the north, is in the Atlantic. The organization says the line carries no political meaning, and not every country uses it. Argentina, for one, disagrees."
- Numerais: entram —; saem —
- Por quê: A 86 %, no trecho mais cheio de nomes, o ouvinte ouvia que uma organização reconheceu um oceano, ouvia as ressalvas e a Argentina discordando, e só na quinta frase sabia por que aquilo importava; e a Argentina, a 170 palavras de 'Both Britain and Argentina claim them', fazia pensar que a linha tinha a ver com as ilhas (clareza A7). O porquê vem logo depois da linha. As ressalvas da Sala ficam inteiras, palavra por palavra ('by that line', sem 'official border' nem 'every country agrees'), e o parágrafo seguinte ('The trench's southern tip crosses the line.') continua ligado a 'the line'. Saldo 0 palavra.
- editor: 2 par(es)

### L60 · REDIZER (lente: REDIZER) · clareza:A8 LEVE (+3: 'The expedition's sub, the Limiting Factor,'), locução:A5 LEVE (+1: 'the bottom there'), Sala: item 6 (os consertos baratos de clareza)

- SAI: "The Limiting Factor reached its bottom in 2019"
- ENTRA: "The expedition's sub, the Limiting Factor, reached the bottom there in 2019"
- Numerais: entram —; saem —
- Por quê: Duas lentes na mesma frase, uma troca só. A clareza: o nome do submersível foi dito uma vez, a 60 % ('a submersible called Limiting Factor'), e depois ele é 'his own sub', 'the sub', 'its sub'; quando 'The Limiting Factor' volta, a 90 %, o ouvinte não sabe mais o que é, e o 'odd name' não paga (Factorian ← Limiting Factor), nem o 'Limiting Deep' que a r1 guardou para pagar o mesmo nome. 'The expedition's sub' é o 'its sub' da ponte de p6, sem dizer quem pilotava (F79, F80: o dossiê não o tem). A locução: o 'its' se prende ao sujeito da própria frase ('o submersível chegou ao próprio fundo'); 'the bottom there' volta ao Factorian Deep da frase anterior, e o 'Its neighbor' seguinte fica com ele. +4 palavras.
- editor: 1 par(es)

### L61 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (o eco de F014/F062), portão [tripulacao-francesa], dossiê N51, R14, A19, Sala: item 4, roteiro e clareza: NÃO TOCAR da ponte (ela continua ponte)

- SAI: "Off Puerto Rico, the French crew's fish were waiting for a second look."
- ENTRA: "Off Puerto Rico, the 1964 crew's fish were waiting for a second look."
- Numerais: entram ['1964']; saem —
- Por quê: A `ponte_saida` de p7 no plano: continua ponte, e só saem as palavras que o portão reprova [tripulacao-francesa] (N51: nenhuma fonte diz quem estava a bordo). 'The 1964 crew' é a forma que a Sala deu: o ano marca a volta ao relato de p2, sete minutos depois, sem nacionalidade. Entra um '1964'. Saldo 0 palavra.
- editor: 2 par(es)

### L62 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (o eco), portão [tripulacao-francesa], dossiê N51, Sala: item 4, clareza: NÃO TOCAR de p8 (vencido no que o portão reprova)

- SAI: "the spot where the French crew had reported their fish."
- ENTRA: "the spot where that crew had reported their fish."
- Numerais: entram —; saem —
- Por quê: A `ponte_entrada` de p8 no plano, reescrita na mesma troca: só sai a nacionalidade (N51). 'That crew' é a '1964 crew' da ponte de p7, a frase imediatamente anterior (L61). −1 palavra.
- editor: 1 par(es)

### L63 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (o eco), dossiê N51, Sala: item 4, roteiro e clareza: NÃO TOCAR da frase (o que eles protegem fica)

- SAI: "Where the French had counted about 200 fish, it saw no snailfish."
- ENTRA: "Where the 1964 crew had counted about 200 fish, it saw no snailfish."
- Numerais: entram ['1964']; saem —
- Por quê: 'The French had counted' diz que os franceses estavam a bordo, o que nenhuma fonte diz (N51). O ano ancora de novo a tripulação depois de 'the year before' (2018), na frase do meio; 'counted' continua, e o alerta [200-peixes] não dispara. O que o roteiro e a clareza protegiam ('it saw no snailfish', a fonte: 'No snailfish were observed') fica. Entra um '1964'. +1 palavra.
- editor: 1 par(es)

### L64 · ESTREITAR (lente: ESTREITAR) · fatos:A5 LEVE (o eco), dossiê N51 (F38: a como_dizer não seguida, conflito 8), Sala: item 4

- SAI: "spread about as thickly as the fish the French had reported."
- ENTRA: "spread about as thickly as the fish the crew had reported."
- Numerais: entram —; saem —
- Por quê: Sem a nacionalidade (N51). 'The crew' é a '1964 crew' da frase anterior. Não 'the fish reported in 1964', a como_dizer do F38 corrigido: o resumo de 2020 diz que o relato é de 1965 ('The first direct observations … was reported in 1965 from depths of 7300 m', S06, cópia fa-nora-528113-dsr1-2020.txt, l. 7), e p2 já diz 'Their account, published the next year'. A densidade continua a da L41 ('in a density similar to that reported originally for the snailfish'). Saldo 0 palavra.
- editor: 1 par(es)

### L65 · REDIZER (lente: REDIZER) · roteiro:6 LEVE

- SAI: "From the outside, the two look a lot alike: similar color, similar texture, similar shape."
- ENTRA: "From the outside, the two look a lot alike in color, texture and shape."
- Numerais: entram —; saem —
- Por quê: 'Similar' três vezes em série é o paralelismo empilhado (ofício do crítico §4.1), a única tríade retórica do texto, no parágrafo do payoff. A fonte dá os três numa lista só ('a similar exterior colour, texture and morphology', S06, l. 7). O mesmo dito. A razão da r1 para deixá-la (a L41 mexia no mesmo parágrafo) já passou. −1 palavra.
- editor: 1 par(es)

### L66 · DO-DOSSIE (lente: ESTREITAR) · fatos:A5 LEVE (o eco), dossiê N51, Sala: item 4, roteiro, clareza e locução: NÃO TOCAR da frase (o porquê e o limite ficam)

- SAI: "and the animals the French saw that day can't be checked again."
- ENTRA: "and the animals the 1964 crew saw that day can't be checked again."
- Numerais: entram ['1964']; saem —
- Por quê: Sem a nacionalidade (N51). O parágrafo é outro pedido à voz, e a frase de antes fala da volta de 2019 ('that return visit'): 'the 1964 crew', e não 'the crew', para o ouvido não pôr a tripulação na volta (nunca se diz quem estava no submersível em 2019, F91, A02). O que as três lentes protegiam (a conclusão com o porquê e o limite, N45) fica. Entra um '1964'. +1 palavra.
- editor: 1 par(es)

## Os conflitos entre lentes, e como ficaram

1. **O gancho (L43 e L44).** A clareza e o roteiro punham o gancho no NÃO TOCAR (o texto do plano, palavra por palavra); fatos (A2, A5),
   o roteiro 2, a locução A4a e o portão novo pedem a troca. A Sala decidiu (decisão (a) e item 2): "more than 1,000 feet too deep" e a
   tripulação sem nacionalidade, com o "dove" resolvido na mesma troca. Da forma que a Sala deu, só o verbo muda: "descended" (o da
   locução) no lugar de "went down", uma palavra a menos e sem repetir o "went down" de p2. A 1ª frase, o "But" (palavra 49), a
   pergunta e a assinatura não foram tocados; o gancho vai de 161 a 166 palavras (teto 170).
2. **"Sounding" (L46).** O roteiro 5 e a clareza A2 trocam por "no one"; a locução A1, por "no ship". Fica "no one": duas lentes, e é o
   mais perto do universal da fonte ("No record is known of any sounding…"), que fala de qualquer sondagem, não de um navio. O que a
   locução queria (o termo só depois da glosa) está nas duas formas, e as duas passam pela prova do REDIZER.
3. **A ponte de p4 (L53).** O roteiro 3 a corta, com a prova de órfão; a clareza a punha no NÃO TOCAR, e a locução a apontava como o
   lugar mais calmo para a inscrição. Vence o corte, por decisão da Sala (item 3), sem ponte nova. A inscrição continua onde o editor a
   pôs, na pausa depois de "Soon after, a problem with the robot cut this one short." (52 %); a reserva, "They think quakes like that
   come thousands of years apart.", passa a fechar p4, e continua reserva.
4. **A abertura de p6 (L54 e L55).** A clareza A3 e A4 põe os dois autores na ponte de entrada; o roteiro guardava "A 2019 study found
   that the official list … at about 28,700 feet. That's almost exactly what the newspapers reported in 1939." no NÃO TOCAR, pela R06 (o
   lado a lado, sem dizer que houve cópia). O que ele protege fica: a lista, o 28.700 e a frase de 1939, intactos; muda só o dono do
   achado, de "a 2019 study" para os seus dois autores (a atribuição do C27 é a mesma, ao estudo). A ponte continua a pagar o gancho com
   as palavras dele ("found that the official list of undersea features"). A L57 (o "same 2019 study" de p7) usa os mesmos nomes, e o
   gancho continua com "a 2019 study" (a R03).
5. **O pouso de p3 (L52).** Fatos A1 propunha "That, to the USGS, is why…"; o roteiro 1, "That, the agency suggests, is why…". A Sala
   escolheu a do roteiro (item 1): o verbo é o da fonte ("we suggest"), e "the agency" é o USGS do bloco. O parágrafo vai a 78 palavras:
   o teto de 75 era do pedido P01, não do texto.
6. **O bloco do Oceano Austral (L59).** O roteiro o punha no NÃO TOCAR "palavra por palavra" (R08, F82, F83); a clareza A7 muda a ordem.
   A Sala permitiu os consertos baratos de clareza em p7 (item 6), e nenhuma palavra muda: o porquê ("By that line, the Meteor Deep, well
   to the north, is in the Atlantic.") vem logo depois da linha, e as ressalvas ("no political meaning", "not every country uses it",
   "Argentina, for one, disagrees.") seguem inteiras, na forma decidida.
7. **O Limiting Factor (L60).** A clareza A8 ("The expedition's sub, the Limiting Factor, reached its bottom…") e a locução A5 ("reached
   the bottom there…") pedem a mesma frase: uma troca só, com as duas. Com a da clareza sozinha, o "its" continuaria preso ao sujeito.
8. **p8 (L62–L66) e a `como_dizer` do F38.** A clareza e o roteiro punham p8 no NÃO TOCAR; o portão e o N51 vencem só no que é
   nacionalidade, e o resto (o "no snailfish", o porquê e o limite, o laço de Vescovo) fica. O F38 corrigido diz "spread about as thickly
   as the fish reported in 1964"; a L64 diz "as the fish the crew had reported", porque o resumo de 2020 data o relato de 1965 ("was
   reported in 1965", S06, l. 7), e p2 já diz "Their account, published the next year". Na L66, "the 1964 crew" e não "the crew": a frase
   de antes fala da volta de 2019 ("that return visit"), e "the crew" poria a tripulação na volta, que nenhuma fonte diz quem fez (F91,
   A02).
9. **A laje (L50, no editor).** A clareza (abaixo do corte) e a escuta fria (EF-05) não sabem onde fica a ponta alta da laje; a Sala
   mandou a troca da clareza entrar se fosse segura (item 1). A fonte dá o lugar só na legenda do mapa ("northern edge of tilted
   carbonate platform and southern edge on land", S28, l. 31), e o dossiê não o tem (F44): na voz, seria fato novo, que esta rodada não
   traz (item 7), e a própria clareza não propôs a palavra. Entra no editor, na ilustração do corte (a ponta alta do lado da ilha), com a
   citação. Com o pouso atribuído (L52), o "That is why" deixa de fechar como certo o que o ouvinte não acompanhou.
10. **Os homógrafos (L48 e L50).** A locução A4b e A4c entram as duas; a L48 mexe numa frase da amostra da folha de pronúncia (o pedido
    5), que se refaz com o sha novo de qualquer jeito.

## As ESCALAS (o mesmo referente, no texto todo e no editor)

- **A tripulação de 1964:** o gancho ("a crew in a French deep-diving craft", L44), p2 ("its crew", L47), a ponte de p7 ("the 1964 crew's
  fish", L61) e p8 ("that crew", L62; "the 1964 crew", L63 e L66; "the crew", L64). Nenhum "French" fala mais de gente. No editor: o
  livro-razão (S6, S7–S8), "As partes" (o gancho), a espinha (a pergunta longa e "o que a tese não diz") e a linha de cada frase.
- **O número da lista:** o gancho dá o piso ("more than 1,000 feet too deep", L43), e p6 a medida contra o sonar ("about 1,200 feet
  shallower", que fica). No editor: o livro-razão (S10), o destino das cifras (n.º 3), "As partes" (o gancho), a tese e a tela do medidor
  no gancho ("MORE THAN 1,000 FT"; o "≈ 1,200 FT" só em p6).
- **O estudo de 2019 e os seus autores:** p6 os apresenta na ponte de entrada (L54) e os retoma pelos sobrenomes (L55); p7 diz "Stewart
  and Jamieson's study" (L57); o gancho continua "a 2019 study". Os cards dos dois sobem para a abertura de p6. O "2019" sai duas vezes
  da voz (de 8 para 6).
- **O pouso de p3:** o livro-razão (p3), "As partes" (p3) e a linha do pouso dizem "That, the agency suggests, is why…" (L52); a nota que
  deixava a atribuição à Sala saiu.
- **"Sounding":** a 1ª vez na voz passa a ser a da Challenger, com a glosa (L46); a linha do 23.000 o registra.
- **A ponte de p4:** riscada no editor (L53), e as "Decisões de escrita" (n.º 4) dizem que a de p4 saiu.

## Os alertas do portão (na cópia)

Os mesmos 8 de antes, todos já decididos: "never" ×2 (o F36 e o ~91 % de Bongiovanni), "first" ×2 (a forma do F39, sem "bottom"),
"Milwaukee Deep" ×3 (o nome de 1939, a entrada da lista atribuída aos dois autores, agora pela L54, e a ausência de outubro de 2026) e o
"still" do gancho (o passado da R03, dentro de 2019). Nenhum alerta novo: "descended", "reflects", "reports", "this points", "that name",
"the expedition's sub" e "1964 crew" não acendem nada; o [200-peixes] não dispara ("counted" fica na L63); o [archimede] também não
(nenhuma frase com "1964" tem medida).

## Os achados que ficaram de fora, e por quê

- **clareza A1 (a voz de Brownson, "I trust it may soon be investigated"):** é fato e citação novos na voz (+28 palavras), que a Sala
  vetou nesta rodada (item 7: nada de fato novo; esta é a última lista), e o verificador de fatos não os julgou. A falta que ela aponta (a
  primeira voz de gente só a 63 %) é real; vai à Sala. A A6, que a clareza ligava a ela, entrou sozinha (L45), como a própria clareza
  previa.
- **fatos A3 e A4:** fechados pelas fontes S72 e S73 (F92 e F93); as duas frases ficam (decisão (b)).
- **EF-01 ("You're at Alpha Point" ouvido como nome de lugar):** a assinatura é regra da marca, e a vinheta com o logo entra nesse
  instante (item 5).
- **EF-02 (quem mantém a lista; como o ponto se chama):** o nome do ponto não entra no vídeo ("Brownson Deep" não está no gazetteer, e a
  origem do nome não foi lida: N08, N09). Quem mantém a lista está no dossiê (o gazetteer IHO-IOC da GEBCO, F28), mas dizê-lo põe duas
  instituições no trecho mais denso de p6, e a IHO volta em p7 por outro ato (o Oceano Austral): na dúvida, fica de fora (item 7). A tela
  já leva "GEBCO GAZETTEER".
- **EF-03 (o que Vescovo viu no fundo):** o dossiê não tem fato conferido sobre o que ele viu (as "four new species" do release são
  vetadas, F72 e o [especies] do portão): fica de fora (item 7).
- **EF-04 e EF-10 (o tsunami e o fim de p7 fora do fio):** são camadas da pauta e do plano (item 6); em p7 entraram só os consertos
  baratos de clareza (L58–L60).
- **EF-07 (quatro nomes para a operação de Vescovo):** "his own sub" e a meta da expedição (r1, L21 e L25) já os ligam; dizer que ele a
  liderava seria fato a mais em p5. O card de pessoa leva "FIVE DEEPS EXPEDITION".
- **EF-09, EF-12, EF-13, EF-14 e EF-15:** decididos na r1 ou no dossiê (a ordem de p6, L30; "More than three million" longe do bloco do
  risco, R12; o "Keep those fish in mind.", o "built to reach the bottom of any ocean" e o superlativo da gravidade, que são re-gancho e
  fatos atribuídos; as atribuições, que são a regra de fato do canal; a fila de pés, que vai ao medidor da tela).
- **A segunda seção em prosa do roteiro (a ponte de p2):** o próprio crítico não a pede como troca (ela carrega a passagem do ver para o
  mapear, que dá nome a p3).
- **Os itens "abaixo do corte" da clareza e "abaixo da linha" da locução** (Nares, o Okeanos com "a dozen dives", "on that island", o
  nome da lista em p6, o "up … coast", a frase de 28 palavras do USGS, o "left them to", as aspas do "fish", o "lives" do fecho, o
  "didn't get there until"): não são achados, ou já foram decididos na r1; a lista fica curta.
- **A alternativa de fatos para o P01** (tirar "big" e "itself" para caber em 75): o teto era do pedido, não do texto.

## Os pedidos

Nenhum. O único achado que pediria texto novo, a voz de Brownson (clareza A1), traz fato novo e ficou de fora; o resto se resolve com as
operações da lista. `pedidos-r2.json` vai com `itens: []`.

## À Sala (não é desta lista)

- **O dossiê:** a `como_dizer` do F38 diz "spread about as thickly as the fish reported in 1964", e o resumo de 2020 data o relato de 1965
  ("was reported in 1965", S06, l. 7): a L64 usa "the fish the crew had reported" (conflito 8). Se um dia a voz precisar do lugar da
  ponta alta da laje, o F44 pode ganhar a legenda do USGS ("southern edge on land", S28, l. 31).
- **A voz de gente antes da metade** (clareza A1): o relatório de 1883 tem as palavras de Brownson (S11, l. 5833 e 5839–5842).
- **A folha de pronúncia:** a L44 tira "dove" da voz, a L50 tira o "records" do 11º pedido, e a L48 troca "records" por "reports" no pedido
  5 da amostra. Nenhum nome entra ou sai ("Heather Stewart" e "Alan Jamieson" mudam de parágrafo; "Stewart and Jamieson" volta duas vezes,
  em p6 e em p7).

## O que a aplicação deixa por fazer (não é desta lista)

- **Os carimbos.** Depois do `aplicar-lista` sem `--seco`, o sha do texto falado passa a `432dcb4041d4`. O `roteiro-editor.md` (a linha
  "Revisão do roteiro", "A medida do portão", "As partes" com palavras e tempos, e as posições das chamadas) e a `pronuncia.md` continuam
  citando `04ae6bfbeb60` até alguém os refazer; o `gate.mjs --derivados` os aponta.
- **O editor** recebe 49 pares (todos casam uma vez na prova do aplicador): a ponte de p4 fica riscada, com a marca "saiu da voz na r2,
  lista-r2 L53", e o bloco do 60°S muda de ordem como a voz.
- **A conversão para o motor** (`node ferramentas/roteiro-motor.mjs converter atlantico-fundo`) roda sobre o texto aplicado, depois do
  "sim" do Lucas.
