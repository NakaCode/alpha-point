# Lista fechada · rodada 1 · atlantico-fundo

Revisão julgada: `4694e58092c2`

> O doutor de roteiro, 26/10/2026, sobre os cinco laudos da bancada da r1 (`qc-roteiro/roteiro-r1`, `clareza-r1`, `locucao-r1`,
> `fatos-r1`, `subtracao-r1`; todos com "Revisão julgada: `4694e58092c2`") e sobre o dossiê corrigido depois da bancada
> (`pautas/atlantico-fundo/fundamento.json`: C27 e N50, com as `como_dizer` novas de R03, R06, R14, F29, F38 e F44). A lista que o
> aplicador lê é `lista-r1.json`; o pedido ao escritor, `pedidos-r1.json`. Nada foi aplicado ao roteiro. Conferido nas cópias locais
> das fontes (sem rede): Kilbourne et al. 2025 (o tsunami de 1381–1391 e o "only reported sign"), o USGS (a introdução do OFR
> 2006-1210, com o contraste do Pacífico e a força para baixo; a página do mapa do fundo, com os blocos girados e a laje), a Popular
> Science a bordo (o "One down!") e o release da Five Deeps (as cinco fossas).

## O resultado

- **42 trocas** (L01–L42), dos achados das cinco lentes: roteiro 23 (5 GRAVE), clareza 10, locução 10 (com subitens em A2, A3,
  A5, A6 e A9), fatos 16 (AC01–AC15, mais o AC16, que é NÃO FOI CHECADO), subtração 8 no pacote, 4 na reserva e 6
  suspeitas. Entram os 5 GRAVE do roteiro (1–5) e os 15 achados de fatos (AC01–AC15), todos; dos médios, os que têm troca segura;
  dos leves, os que não custam nada. A op do aplicador fica em `op`; a da lente, em `op_lente`.
- **As três reprovações novas do portão** saem na forma das `como_dizer` novas do dossiê: [nenhum-peixe] na L01 ("It saw none of
  those fish.", F38/R06, C27), com a escala em p8 na L40; [lista-decadas] na L02 ("And a 2019 study found that the official list
  of undersea features still had the Atlantic about 1,200 feet too deep…", R03, C27 e N50), paga em p6 pela L27 com as mesmas
  palavras; [vescovo-voltou] na L42 ("In a 2020 paper on that return visit, five authors concluded…", R14/F38, C27; F91).
- **1 pedido ao escritor** (`pedidos-r1.json`): P01 (clareza:1, partes (b) e (c): o que a laje de calcário mostra e o pouso de "Why
  is the trench so deep?", p3, 3º parágrafo, 11º pedido à voz depois da lista).
- **`aplicar-lista.mjs atlantico-fundo --lista=roteiros/atlantico-fundo/_trabalho/lista-r1.json --seco`: exit 0** (SECO_OK), 42
  itens, 35 diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, as provas (a) a (d) passando e os 89 pares do editor casando
  uma vez cada; texto falado `4694e58092c2` → `0081efb271f0`; o portão depois, PASSA.
- **O portão na cópia** (`_trabalho/_tmp-lista-r1.md`, as mesmas trocas aplicadas por script,
  `pautas/atlantico-fundo/_trabalho/scripts/lista-r1-aplicar-copia.py`): **PASSA**, sha `0081efb271f0` (o mesmo do aplicador),
  2.018 palavras (−71; ≈10:58 a 184 palavras/min), 29 parágrafos (de 44 a 107 palavras; a regra é 40 a 110), 159 frases, média 12,7,
  maior 28; gancho com 161 palavras até a assinatura, "But" na palavra 49, a pergunta antes da assinatura. 0 problemas. 8 alertas,
  todos conferidos (abaixo, "Os alertas do portão"); o "anomaly" saiu (L10). Taxas abaixo do teto (abre_and 2, abre_so 1, perguntas 2,
  frases_curtas 2, antítese 0, travessões 0); autoplágio vazio. Sobram 68 palavras acima do piso de 1.950: o P01 pede de +5 a +20.
- **As chamadas** (`marca/cta.md`), depois da lista: a reserva da inscrição termina na palavra 1.019 e a inscrição na 1.085 (≈5:54,
  52 % com a cauda; dentro de 35–60 %); o comentário começa na 1.975.

## As trocas

### L01 · DO-DOSSIE (lente: ESTREITAR) · roteiro:2 GRAVE, fatos:AC04, portão [nenhum-peixe], clareza: NÃO TOCAR (vencido)

- SAI: "It found no fish at all."
- ENTRA: "It saw none of those fish."
- Numerais: entram —; saem —
- Por quê: O resumo do DSR I 2020 (S06, cópia fa-nora-528113-dsr1-2020.txt, l. 7) diz só "No snailfish were observed"; 'no fish at all' é universal que a fonte não sustenta, e o portão novo o reprova [nenhum-peixe]. A redação é a do F38 corrigido (C27, N50). Mesmo número de palavras (6): o gancho continua com o 'But' na 49 e a assinatura no lugar. A escala em p8 é a L40.
- editor: 3 par(es)

### L02 · DO-DOSSIE (lente: ESTREITAR) · roteiro:1 GRAVE, fatos:AC01, portão [lista-decadas], clareza: NÃO TOCAR (vencido)

- SAI: "And for decades, the official list of undersea features gave that point a number about 1,200 feet too deep, even after sonar showed otherwise."
- ENTRA: "And a 2019 study found that the official list of undersea features still had the Atlantic about 1,200 feet too deep, even after sonar showed otherwise."
- Numerais: entram ['2019']; saem —
- Por quê: Dois defeitos na mesma frase. (1) 'For decades' com 'the official list': nenhuma fonte data a entrada do gazetteer; a única prova (Stewart & Jamieson 2019, Tabela 1 e §2.1.2) a põe por volta de 2019, e o mesmo artigo se contradiz no §5 (fatos AC01, AC02); o portão novo reprova [lista-decadas]. (2) 'gave that point': o 'that point' é o ponto de Vescovo, e a entrada da lista ficava ~60 mi a leste, numa crista (roteiro 1); o 1.200 compara as profundidades máximas. A troca é a como_dizer da R03 corrigida pela Sala (C27, N50), palavra por palavra, com o 'And' do texto. +2 palavras (gancho 161, abaixo de 170). Entra um '2019' e um alerta 'still' do portão: decidido, é o passado da R03, dentro de 2019, não estado do mundo. A ponte com p6 continua: L27 paga com as mesmas palavras ('A 2019 study found that the official list…').
- editor: 4 par(es)

### L03 · REDIZER (lente: REDIZER) · locucao:A2a

- SAI: "It came back up with a sample of the seafloor"
- ENTRA: "The wire came back up with a sample of the seafloor"
- Numerais: entram —; saem —
- Por quê: O parágrafo é um pedido à voz, e a entonação recomeça nele: o 'It' tinha o dono (o arame) duas frases e uma pausa de parágrafo atrás, e os nomes mais perto eram 'the deepest point' e 'the sonar'. +1 palavra.
- editor: 1 par(es)

### L04 · DA-FONTE (lente: DA-FONTE) · roteiro:16 LEVE, subtracao:S06 (vencida)

- SAI: "At the time, that was believed to be the greatest depth a sample had ever been brought up from."
- ENTRA: "At the time, no sounding was known to have brought back a sample and a temperature from that deep."
- Numerais: entram —; saem —
- Por quê: O relatório de 1883 (S11, cópia 04-uscgs-relatorio-1883-CSC-0082.txt, l. 3516–3518): "No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this." O recorde é da amostra e da temperatura juntas; só da amostra é mais do que a fonte diz. Conflito com a subtração (S06 cortava 'and a reading of the water temperature down there', que prometia um valor que o vídeo nunca dá): com esta troca a temperatura ganha função (é metade do recorde), e a S06 fica de fora. +1 palavra.
- editor: 1 par(es)

### L05 · REORDENAR (lente: REORDENAR) · locucao:A5a, roteiro:15 LEVE, clareza: NÃO TOCAR (o conteúdo fica)

- SAI: "Exactly how deep, the sources disagree."
- ENTRA: "The sources disagree on exactly how deep."
- Numerais: entram —; saem —
- Por quê: O tópico deslocado: o v4 tende a subir o tom em 'Exactly how deep', como pergunta, e o resto chega solto. Na ordem corrente, a frase muda também de molde em relação à ressalva da rede (L08), o que o roteiro pedia. O 'It never reached…' seguinte continua com o 'It' no Archimède ('sources' é plural).
- editor: 1 par(es)

### L06 · REDIZER (lente: REDIZER) · locucao:A9a LEVE

- SAI: "Some 200 of them, along about a mile of seafloor."
- ENTRA: "They counted some 200 of them along roughly a mile of seafloor."
- Numerais: entram —; saem —
- Por quê: A única frase sem verbo do miolo, e o 'along about', que na fala americana é outra expressão ('along about noon'). 'Counted' é o verbo de relato que p8 já usa ('Where the French had counted about 200 fish'); sem 'fish' na frase, o [200-peixes] não dispara. +2 palavras, sem custo.
- editor: 1 par(es)

### L07 · REORDENAR (lente: REORDENAR) · fatos:AC08, locucao:A1

- SAI: "records that in 1970 a net hauled up from the trench brought back a small cusk-eel. A cusk-eel is a fish shaped like an eel, and this one was about eight inches long. The Australian Museum lists the same catch."
- ENTRA: "records that in 1970 a net brought back a small cusk-eel. A cusk-eel is a fish shaped like an eel, and this one was about eight inches long. The Australian Museum lists the same catch, from the Puerto Rico Trench."
- Numerais: entram —; saem —
- Por quê: A página da NOAA (S31) não nomeia fossa nenhuma; quem diz Fossa de Porto Rico é o Australian Museum (S30, cópia fb-australian-museum-deepest-fish.txt: "collected from the Puerto Rico Trench at a depth of 8,370 m"). O lugar passa à frase do Museu (fatos AC08), e some de quebra a relativa reduzida que a voz lia como oração inteira ('a net hauled up from the trench' + 'brought back': locução A1). As duas lentes ficam atendidas numa troca só. Saldo 0 palavra; o parágrafo de 105 fica em 105 (com a L08).
- editor: 2 par(es)

### L08 · REORDENAR (lente: REORDENAR) · locucao:A5b, roteiro: NÃO TOCAR (vencido: a forma nova é a da R13), clareza: NÃO TOCAR (vencido, idem)

- SAI: "How deep the fish was when it swam in, no one knows."
- ENTRA: "No one knows how deep the fish was when it swam in."
- Numerais: entram —; saem —
- Por quê: O mesmo tópico deslocado da L05, em pedidos seguidos (a voz sobe o tom em 'How deep the fish was'). A ordem nova é a da R13 do dossiê ('But no one knows how deep the fish was when it swam in'), sem o 'But'. O roteiro e a clareza a punham em NÃO TOCAR pelo conteúdo (a ressalva da rede, R13), que fica inteiro.
- editor: 1 par(es)

### L09 · DA-FONTE (lente: DA-FONTE) · roteiro:7, clareza:1 (a parte (a) do PEDIR)

- SAI: "Along the trench, the North American plate"
- ENTRA: "In the Pacific, deep trenches lie where one plate sinks under another. Along this trench, the North American plate"
- Numerais: entram ['one']; saem —
- Por quê: 'Why is the trench so deep?' pede uma causa, e a frase do deslize, logo depois da definição de placa, era ouvida como a resposta. Na fonte é o contraste (S27, USGS OFR 2006-1210, cópia fa-usgs-ofr2006-1210-introduction.txt, l. 13): "Its depth is comparable to the deep trenches in the Pacific Ocean. Trenches in the Pacific are located in places where one tectonic plate subducts or slides under another one. The Puerto Rico trench, in contrast, is located at a boundary between two plates that slide past each other with only a small component of subduction." O deslize vira o enigma. N39 vale para Porto Rico, não para o Pacífico; o Pacífico já está no gancho. Planta o 'one plate dives under another' de p7. Entra um 'one' (numeral). +12 palavras.
- editor: 2 par(es)

### L10 · DA-FONTE (lente: DA-FONTE) · clareza:2, locucao:A6a, roteiro:7 (a 2ª troca), roteiro: NÃO TOCAR (vencido)

- SAI: "By the USGS's measure, the trench has the most negative gravity anomaly on Earth. Gravity there falls further below normal than anywhere else."
- ENTRA: "According to the USGS, gravity over the trench falls further below normal than anywhere else on Earth. The agency says that points to an active force pulling down on the area."
- Numerais: entram —; saem —
- Por quê: Três lentes na mesma dupla de frases. A clareza: 'most negative gravity anomaly' é o primeiro termo de física do vídeo, e a glosa não diz o que a gravidade tem a ver com a fossa ser funda; o recorde fica solto no meio da resposta a 'why'. O roteiro: a fonte diz o que ela indica (S27, l. 13: "the most negative free-air gravity anomaly on earth, -380 mGal, which indicates the presence of an active downward force"). A locução: o possessivo de sigla 'USGS's'. A troca junta as três: a glosa do F43 sem o termo (o mesmo fato, atribuído), 'According to the USGS', e a frase do que o USGS lê nela, que pousa a pergunta da parte. Sai o único 'anomaly' do vídeo (um alerta a menos; pauta §3, o tom). O roteiro punha a 1ª frase em NÃO TOCAR para guardar o recorde atribuído, que fica. +9 palavras.
- editor: 3 par(es)

### L11 · DO-DOSSIE (lente: ESTREITAR) · roteiro:4 GRAVE, fatos:AC06

- SAI: "The agency found a tilted slab of limestone that starts more than 4,000 feet above sea level."
- ENTRA: "By the agency's reconstruction, a tilted slab of limestone starts more than 4,000 feet above sea level."
- Numerais: entram —; saem —
- Por quê: A página do USGS (S28, cópia fb-usgs-seafloor-map.txt, l. 57) diz "a tilted carbonate platform between (reconstructed) elevations of +1300 m and -4000 m": as cotas são de uma reconstrução, e 'found … that starts' as dizia achadas e de hoje. A redação é a do F44 corrigido pela Sala (C27); o roteiro propunha o condicional ('would start'), e o dossiê fixou o presente com a atribuição à reconstrução, que vence. A frase seguinte ('It ends about 13,000 feet below the surface.') fica presa a esta. O que a laje mostra continua sem dizer: é o P01 (pedidos-r1.json). Saldo 0 palavra.
- editor: 2 par(es)

### L12 · REDIZER (lente: REDIZER) · locucao:A2b, roteiro:12 (cortava a ponte; vencido)

- SAI: "On the trench's walls, its maps showed something else."
- ENTRA: "On the trench's walls, the agency's maps showed something else."
- Numerais: entram —; saem —
- Por quê: Colado a 'the trench's walls', o 'its' se ouve como da fossa, e os mapas são do USGS. É a ponte de saída de p3 (sagrada): fica, só com o dono dito. O roteiro (12, o metrônomo das pontes) a cortava; ficou de fora (ver 'Conflitos').
- editor: 1 par(es)

### L13 · ESTREITAR (lente: ESTREITAR) · fatos:AC11

- SAI: "Anegada is a low, flat island"
- ENTRA: "Anegada is a low island"
- Numerais: entram —; saem —
- Por quê: As cópias dizem 'a low island' e 'the low-lying island of Anegada' (Kilbourne et al. 2025, S17); 'flat' não está em cópia nenhuma.
- editor: 1 par(es)

### L14 · REDIZER (lente: REDIZER) · locucao:A9b LEVE

- SAI: "along about six miles of its north shore"
- ENTRA: "along roughly six miles of its north shore"
- Numerais: entram —; saem —
- Por quê: O mesmo 'along about' da L06, que a voz cola. Sem custo.
- editor: 1 par(es)

### L15 · CORTAR (lente: CORTAR) · roteiro:21 LEVE, subtracao:S05, clareza (abaixo do corte)

- SAI: "The authors suspect the coral died in summer or fall."
- ENTRA: (nada)
- Numerais: entram —; saem —
- Por quê: Palpite dos autores (F58: 'We speculate') que não volta no fio, entre a data (1381–1391, Colombo) e o terremoto; é o 1º corte de p4 no plano. Três lentes o pedem. Emenda: '…before Columbus reached the Caribbean. ▸ [¶] The earthquake behind that wave struck…' (L16). −10 palavras.
- editor: 1 par(es)

### L16 · REDIZER (lente: REDIZER) · roteiro:13, locucao:A2c (propunha "that tsunami"), clareza (abaixo do corte), subtracao (suspeita)

- SAI: "The earthquake behind it struck"
- ENTRA: "The earthquake behind that wave struck"
- Numerais: entram —; saem —
- Por quê: O 'it' abria o pedido à voz com o dono (o tsunami) três frases e uma pausa de parágrafo atrás; com a L15, a última coisa dita é Colombo. 'That wave' (roteiro) e não 'that tsunami' (locução): com 'trench' na frase, 'tsunami' dispararia o alerta [1918-fossa] duas vezes seguidas no bloco do risco; 'wave' para um tsunami é a glosa natural, logo depois de 'dated the tsunami that left them', e não soa como outro objeto (o defeito da A8 era o de duas listas). +1 palavra.
- editor: 1 par(es)

### L17 · DA-FONTE (lente: DA-FONTE) · roteiro:13, locucao:A2d (propunha "those boulders"), subtracao (suspeita)

- SAI: "call it the only known sign that this stretch of the trench can do that."
- ENTRA: "call the wave the only known sign that this stretch of the trench has produced a quake that big."
- Numerais: entram —; saem —
- Por quê: Três 'it' seguidos com dois donos: dito, 'call it' pega o último, o terremoto, e a frase fica circular. A fonte (Kilbourne et al. 2025, resumo, l. 54–55): "The tsunami is important as the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake." O sinal é o tsunami ('the wave', como na L16), e 'has produced a quake that big' retoma o 'magnitude 8 or more' da frase anterior no lugar do 'can do that', que ficava sem objeto. +4 palavras.
- editor: 1 par(es)

### L18 · CORTAR (lente: CORTAR) · roteiro:5 GRAVE (com outra troca: DA-FONTE + REORDENAR; vencida), clareza:3, subtracao:S10, locucao (abaixo do corte)

- SAI: "That quake wasn't behind the deadly tsunami of 1918, either."
- ENTRA: (nada)
- Numerais: entram —; saem ['1918']
- Por quê: Dita como está, a frase afirma que um terremoto de 1381–1391 não causou um tsunami de 1918 (anacronismo que todo ouvinte percebe), e o 'either' a cola a 'It wasn't in the trench.', dez frases antes. O F57 é outra coisa: nenhuma das duas fontes possíveis do tsunami medieval explica 1918. O roteiro propunha reescrever com o F57 inteiro ('Neither of the two kinds of quake the models point to explains the deadly tsunami of 1918, or any other in five centuries…'); a clareza, a subtração e a locução pedem o corte. Fica o corte: o que o espectador precisa de 1918 já está dito com o dono ('It wasn't in the trench.'), a calma do bloco fica com 'They think quakes like that come thousands of years apart.' (o F56), e a reescrita traria um conceito novo ('two kinds of quake') ao fim do bloco do risco. Emenda: '…has produced a quake that big. ▸ They think quakes like that come thousands of years apart.' O 'They' ganha o antecedente na frase de cima ('The scientists who dated the coral'). Sai um '1918' (fica o de 'In October 1918'). −10 palavras.
- editor: 2 par(es)

### L19 · ESTREITAR (lente: ESTREITAR) · fatos:AC09, locucao (abaixo do corte: a repetição com "far from its deepest point")

- SAI: "That's in the eastern part of the trench, a long way from its deepest point."
- ENTRA: "That's a long way east of its deepest point."
- Numerais: entram —; saem —
- Por quê: O Dive 09 começa a 65°24,430'W (S32): cai na faixa em que o USGS divide a fossa ('at about 65-66W') e a oeste dos ~65°W em que Stewart & Jamieson põem a parte leste. 'A long way from its deepest point' se sustenta (209 km = 130 mi, M29), e o mergulho fica a leste do ponto. De quebra, some a fórmula 'far from its deepest point' / 'a long way from its deepest point' em frases quase seguidas. A escala vai ao rótulo da tela e ao resumo do editor. −6 palavras.
- editor: 4 par(es)

### L20 · REDIZER (lente: REDIZER) · locucao:A6c

- SAI: "worked from NOAA's ship Okeanos Explorer,"
- ENTRA: "worked from the ship Okeanos Explorer,"
- Numerais: entram —; saem —
- Por quê: 'NOAA's', dito como palavra (NOH-uh), é 'Noah's': 'Noah's ship', num vídeo de mar. A NOAA já é a dona do robô na 1ª frase do parágrafo ('a NOAA robot'), e a tela pode levar a do navio. Os outros dois possessivos ficaram (ver 'Fora').
- editor: 1 par(es)

### L21 · DA-FONTE (lente: DA-FONTE) · clareza:5

- SAI: "on a ship called the Pressure Drop. To get the sonar right,"
- ENTRA: "on a ship called the Pressure Drop. The expedition's goal was to reach the deepest point of each of the five oceans. To get the sonar right,"
- Numerais: entram ['five']; saem —
- Por quê: 'Five Deeps' não se decifra (cinco o quê?), e mais adiante o ouvinte não entende por que a expedição foi 'to the other end of the Atlantic' (a ponte de p6) nem por que mergulhou no Factorian e não no Meteor (p7). A fonte: a Popular Science, a bordo (S05, cópia fb-popsci-2018-12-21-vescovo.txt, l. 31 e 35: "the deepest point in all five oceans"; "an attempt to become the first person to reach the lowest point in all five oceans"); o release (S04: "the first dive in the Five Deeps Expedition"). A meta é da expedição, não da IHO (N20 veta 'the fifth ocean' atribuído à IHO); a linha de 2023 de p7 diz que a IHO reconheceu, não que antes não havia. Paga o 'One down!' (L26), a ponte de p6 e o Factorian. Entra um 'five'. +15 palavras.
- editor: 2 par(es)

### L22 · ESTREITAR (lente: ESTREITAR) · fatos:AC10, roteiro:8, clareza: NÃO TOCAR (vencido: o método continua em termos de gente)

- SAI: "the ship lowered instruments to measure how fast sound travels"
- ENTRA: "the team measured how fast sound travels"
- Numerais: entram —; saem —
- Por quê: Bongiovanni et al. 2021 (S01, cópia 02-bongiovanni-2021-gdj3.122.txt, l. 236–275): o navio lançou XBTs até 1.800 m; o perfil até o fundo veio dos CTDs do Limiting Factor e de três landers, "Full-ocean depth sound velocity profiles were determined after the deep submersible dives". Nenhum instrumento foi baixado pelo navio da superfície ao fundo. 'The team' (roteiro) e não 'the expedition' (fatos): com a L21, seria o terceiro 'expedition' em três frases; o sentido é o mesmo. −3 palavras.
- editor: 2 par(es)

### L23 · CORTAR (lente: CORTAR) · subtracao:S11

- SAI: "Most of the seafloor it covered had been mapped before."
- ENTRA: (nada)
- Numerais: entram —; saem —
- Por quê: A volta do meio de uma ideia que tem origem e pagamento: p3 conta que o USGS mapeou a fossa em 2002–2003, e p6 paga ('And the USGS sonar had shown a shallower floor since 2003.'). Entre as duas, esta não traz peso novo, e depois da L22 o 'it' ficaria sem dono ('the team … it covered'). O N40 continua sem ser dito (p3 diz o contrário). −10 palavras; o parágrafo fica com 60 (com a L21).
- editor: 2 par(es)

### L24 · CORTAR (lente: CORTAR) · roteiro:14, clareza:6, locucao:A3, subtracao:S01

- SAI: "The scientists give that margin with 95 percent confidence. They built their map as a grid of squares about 250 feet across. The results were published in 2021."
- ENTRA: (nada)
- Numerais: entram —; saem ['95', '250', '2021']
- Por quê: O parágrafo que paga o título carregava sete números em 76 palavras: 27,500, 16, 95, 250, 2021, 83 e três milhões. O nível de confiança e a grade servem à apuração (o F11 dá à voz só 'give or take about 16 feet, only if needed'); a grade é o 1º corte do plano em p5. 'The results were published in 2021' é samba distante de p6 ('…published in 2021'), onde o ano é degrau da ordem das publicações (R31): fica o de p6. Quatro lentes concordam (o roteiro e a locução tiravam só as duas primeiras; a clareza e a subtração, as três). Fica 'Give or take about 16 feet.'; o 95 % vai à tela. Emenda: '…Give or take about 16 feet. ▸ That point lies about 83 miles…'. −27 palavras; o parágrafo fica com 49.
- editor: 6 par(es)

### L25 · DA-FONTE (lente: DA-FONTE) · clareza:4a, roteiro: NÃO TOCAR do parágrafo (o que ele protege fica)

- SAI: "He made the trip alone, in a sub built to reach the bottom of any ocean."
- ENTRA: "He made the trip alone, in his own sub, built to reach the bottom of any ocean."
- Numerais: entram —; saem —
- Por quê: O homem no centro do vídeo chega como um nome sem dizer quem é. O release (S04, cópia fb-fivedeeps-release-2018-12-21.txt, l. 17: "in his private submersible") e a Popular Science (S05, l. 39: "This audacious, self-funded mission"): o ouvinte passa a saber que é um particular com o próprio submersível. O roteiro punha o parágrafo de Vescovo em NÃO TOCAR para guardar a quarta-feira, o 'alone', as 2 h 30, o 'first person' e os 7 pés: tudo fica. +1 palavra.
- editor: 1 par(es)

### L26 · DA-FONTE (lente: DA-FONTE) · clareza:4b

- SAI: "He was the first person to reach the deepest point of the Atlantic. The sub's own gauges"
- ENTRA: "He was the first person to reach the deepest point of the Atlantic. When he climbed out, a reporter on board heard him say: "One down!" The sub's own gauges"
- Numerais: entram ['one']; saem —
- Aspas novas: ['One down!']
- Por quê: Em 2.089 palavras ninguém fala (clareza, presença §3). A fonte: a Popular Science, com o repórter a bordo do Pressure Drop (S05, cópia fb-popsci-2018-12-21-vescovo.txt, l. 33 e 35): "“One down!” Those were Victor Vescovo’s first words after climbing out of the hatch of the DSV Limiting Factor." 'Heard him say', e não 'his first words': a reportagem ressalva "the first intelligible words", e 'first' seria mais um alerta do portão. Só se entende inteira com a L21 (uma de cinco). Citação nova (aspas_novas) e um 'one' (numeral). O parágrafo vai a 97 palavras. Fato novo na voz: o verificador o confere na r2. +13 palavras.
- editor: 2 par(es)

### L27 · ATRIBUIR (lente: ATRIBUIR) · fatos:AC02, dossiê C27 (o 8.740 da lista atribuído ao estudo de 2019)

- SAI: "Until at least 2019, the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- ENTRA: "A 2019 study found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- Numerais: entram —; saem —
- Por quê: A fonte única se contradiz: Stewart & Jamieson 2019 dão o 8.740 m do gazetteer ao Milwaukee Deep (Tabela 1, §2.1.2) e, no §5, dizem que, das fossas citadas, só Challenger, Horizon e Scholl estão no gazetteer; a ficha antiga não se lê mais (A03). O dossiê corrigido (C27, F28) manda atribuir ao estudo. É a ponte de entrada de p6 (sagrada), reescrita na mesma troca: continua colada à ponte de saída de p5 ('That number was not the one in the official list.') e paga o gancho (L02) com as palavras dele. O '2019' sai e entra (saldo 0). +1 palavra; a frase deixa de abrir com data.
- editor: 2 par(es)

### L28 · CORTAR (lente: CORTAR) · subtracao:S09, locucao (abaixo do corte: a fila de números de p6), clareza (destino das cifras: a 4ª cifra de p6 em 30 s)

- SAI: "As late as 2011, a press release for a planned deep-diving sub listed more than 28,000 feet."
- ENTRA: (nada)
- Numerais: entram —; saem ['2011', '28,000']
- Por quê: A terceira volta da família dos 28.000 ft ('more than 28,000' em 1939, 'about 28,700' na lista, 'more than 28,000' em 2011): dito logo depois do 28.700, soa como um terceiro número, menor, e embaça os dois que importam. A ideia que ele ilustra (o número velho circulou sem correção) está dita duas frases depois, com o dono ('They wrote that numbers like these had spread, uncorrected…'); e 'a planned deep-diving sub' abre uma pergunta que o vídeo não fecha. É o 2º corte do plano em p6. Com o 'for decades' fora do gancho (L02), nada mais depende dele. Emenda: '…since 2003. ▸ [¶] In 2019, two scientists…'. −17 palavras; o parágrafo fica com 49 (com a L27).
- editor: 3 par(es)

### L29 · ESTREITAR (lente: ESTREITAR) · fatos:AC05

- SAI: "In their check, the real floor came out shallower every time."
- ENTRA: "Off Puerto Rico, the real floor came out shallower every time."
- Numerais: entram —; saem —
- Por quê: Na conferência inteira de Stewart & Jamieson 2019 nem sempre saiu mais raso: o resumo diz que a Sandwich do Sul e o Molloy Hole "are deeper (8183 and 5669 m respectively), than the depths cited". O "consistently shallower" é do §3.2, sobre os três pontos da Fossa de Porto Rico (l. 957–960). Saldo 0 palavra.
- editor: 2 par(es)

### L30 · REORDENAR (lente: REORDENAR) · clareza:8 LEVE, roteiro: NÃO TOCAR da R31 (a frase fica, na frente), locucao (abaixo do corte: a fôrma "Their study" quatro vezes)

- SAI: "Their study also put the deepest point somewhere else. Working from public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic. Their study came out before the expedition's own results. Those were published in 2021, and they placed the deepest point in U.S. waters off Puerto Rico, about 100 miles from the Dominican Republic."
- ENTRA: "Their study came out before the expedition's own results, and it put the deepest point somewhere else. Working from public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic. The expedition's results, published in 2021, placed it in U.S. waters off Puerto Rico, about 100 miles from the Dominican Republic."
- Numerais: entram —; saem —
- Por quê: Um minuto depois de ver Vescovo chegar ao ponto e os medidores baterem com o sonar, o ouvinte ouve que um estudo pôs o ponto 36 milhas a oeste, em águas da República Dominicana, e por duas frases acha que ele desceu no lugar errado, até ouvir a ordem das datas. A data passa para antes da surpresa. Os mesmos fatos e números (eight, 36, 2021, 100), a mesma ordem das publicações (R31: o NÃO TOCAR do roteiro protege a frase, que fica, na frente), e uma 'Their study' a menos. −4 palavras.
- editor: 3 par(es)

### L31 · ESTREITAR (lente: ESTREITAR) · locucao:A7, clareza:7

- SAI: "U.S. waters, in that sense, means the exclusive economic zone: a band of sea up to about 230 miles out, where the U.S. controls the resources."
- ENTRA: "Those U.S. waters are the exclusive economic zone, a band of sea where the U.S. controls the resources."
- Numerais: entram —; saem ['230']
- Por quê: Dois tropeços na definição. Dito, sem aspas, 'U.S. waters … means' soa como erro de concordância (locução). E a frase anterior acabou de dizer 'about 100 miles from the Dominican Republic': ao ouvir 'up to about 230 miles out', o ouvinte faz a conta e estranha que o ponto não caia também nas águas dominicanas (a linha entre as zonas é mediana, e a voz não tem como explicar). A definição fica (N32: sem ela, 'U.S. waters' se ouve como território), com o dono e o que ele controla; as ~230 mi vão só à tela (EXCLUSIVE ECONOMIC ZONE · UP TO 200 NMI (230 MI) · NOAA), onde o mapa mostra as duas zonas e a fronteira. Redação da locução. Sai o '230'. −6 palavras.
- editor: 4 par(es)

### L32 · ESTREITAR (lente: ESTREITAR) · fatos:AC03, locucao:A8, roteiro:19 LEVE, clareza (abaixo do corte)

- SAI: "As of October 2026, the international list of undersea feature names no longer includes the Milwaukee Deep."
- ENTRA: "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep."
- Numerais: entram —; saem —
- Por quê: Duas coisas. (1) 'No longer' pressupõe que o nome esteve na lista, e a prova disso é a mesma fonte que se contradiz (L27); 'doesn't include' é a forma do F28 (fatos AC03). A parte de hoje está datada e confirmada (a API da NCEI em 26/10/2026, totalItems: 0). (2) O gancho e p6 chamam o gazetteer de 'the official list of undersea features'; na 4ª menção ele virava 'the international list of undersea feature names', e o ouvinte podia achar que era outra lista (locução A8, roteiro 19). −2 palavras. Volátil: a Sala relê na semana da gravação.
- editor: 2 par(es)

### L33 · CORTAR (lente: CORTAR) · roteiro:9, clareza: NÃO TOCAR (vencido), subtracao:S08 (cortava a frase vizinha; um corte só por parágrafo)

- SAI: "The two scientists had asked for that name to fall out of use."
- ENTRA: (nada)
- Numerais: entram —; saem ['two']
- Por quê: Colada a 'As of October 2026, the official list … doesn't include the Milwaukee Deep.', a frase faz o ouvido concluir que o nome saiu porque os dois pediram; quando e por que saiu não está conferido (A03, F28), e, com a L27 e a L32, nem que esteve lá. E o artigo não pede: diz que o local "requires correction, or rather the name simply falls into abeyance" (S02). É o 3º corte do plano. A clareza a punha em NÃO TOCAR; o risco de fato vence. A subtração (S08) cortava a vizinha, a do Seabed 2030: as duas juntas deixariam o pedido à voz com 25 palavras, e fica um corte só; o do risco de fato. Emenda: '…doesn't include the Milwaukee Deep. ▸ The expedition's scientists write that all of its sonar data went to Seabed 2030…'. Sai um 'two' ("The two scientists"). −12 palavras; o parágrafo fica com 55.
- editor: 1 par(es)

### L34 · ESTREITAR (lente: ESTREITAR) · fatos:AC14

- SAI: "The Atlantic has one other contender for its deepest point:"
- ENTRA: "The Atlantic has another contender for its deepest point:"
- Numerais: entram —; saem ['one']
- Por quê: 'One other' é universal: nenhuma fonte lida diz que só há uma outra candidata no Atlântico. É a ponte de entrada de p7 (sagrada), reescrita na mesma troca: continua colada à ponte de saída de p6. Sai um 'one' (numeral). −1 palavra.
- editor: 2 par(es)

### L35 · ESTREITAR (lente: ESTREITAR) · roteiro:23 LEVE

- SAI: "with no one living on them."
- ENTRA: "with no permanent residents."
- Numerais: entram —; saem —
- Por quê: A NASA (S39, cópia fb-nasa-eo-149160-mount-michael-2021.txt, l. 50) diz "there are no permanent human residents nearby" (2021). 'No one living' é o universal; 'no permanent residents' é o que a fonte sustenta. −2 palavras.
- editor: 2 par(es)

### L36 · ESTREITAR (lente: ESTREITAR) · roteiro:6, locucao:A4 (outra redação, vencida)

- SAI: "The depth most often published for its deepest point, the same 2019 study found, was deeper than the sonar's number for Puerto Rico."
- ENTRA: "The same 2019 study noted the depth most often published for its deepest point. It was deeper than the sonar's number for Puerto Rico."
- Numerais: entram —; saem —
- Por quê: O 'the same 2019 study found' governava a frase inteira: o estudo de 2019 teria achado que o número mais publicado do Meteor passava 'the sonar's number for Puerto Rico', que só saiu em 2021 (o próprio p6 diz que o estudo saiu antes). O estudo diz só "The most commonly reported depth for the Meteor Deep is 8428 m" (S02, p. 11); a comparação é a conta do F77, e fica fora da atribuição. A locução (A4) propunha só pôr a atribuição na frente ('The same 2019 study found that the depth … was deeper than the sonar's number…'), o que mantinha o defeito de fato; a divisão do roteiro resolve as duas coisas (a atribuição entalada e o escopo). +1 palavra.
- editor: 1 par(es)

### L37 · REDIZER (lente: REDIZER) · fatos:AC15

- SAI: "from where older books put it."
- ENTRA: "from where older sources put it."
- Numerais: entram —; saem —
- Por quê: A posição antiga vem de Allaby 2009, que é livro, e de Zhivago 2002, que é resumo de congresso: 'books', no plural, não se sustenta. Saldo 0 palavra.
- editor: 2 par(es)

### L38 · REDIZER (lente: REDIZER) · locucao:A10 LEVE

- SAI: "The name Meteor Deep is old, after a German research ship."
- ENTRA: "The name Meteor Deep is old, taken from a German research ship."
- Numerais: entram —; saem —
- Por quê: O verbo de 'named after' foi cortado para caber: dito, 'is old, after a German research ship' pode ser o 'after' de tempo. +1 palavra; o parágrafo juntado (L39) fica abaixo de 110.
- editor: 1 par(es)

### L39 · CORTAR (lente: CORTAR) · subtracao:S02, clareza:9a, roteiro:22 (o próximo corte de p7, se pesasse)

- SAI: "didn't dive there. ¶ The name Meteor Deep is old, taken from a German research ship. Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older sources put it. The expedition had wanted to call it Pressure Deep, after its own ship, the Pressure Drop."
- ENTRA: "didn't dive there. The name Meteor Deep is old, taken from a German research ship. Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older sources put it."
- Numerais: entram —; saem —
- Por quê: p7 é a parte mais longa e mais cheia de nomes (Meteor, Pressure Deep, Pressure Drop, a IHO, 60°S, Argentina, Factorian, Limiting Factor, Limiting Deep): o maior deserto do vídeo, pela clareza (de ~9:35 a ~10:24). O apelido que não pegou não serve a nada adiante; é o 3º corte do plano em p7. Ficam a origem do nome Meteor e as ~30 milhas (o eco da tese: o sonar corrigindo os livros). Sem a frase, o parágrafo do nome cairia para 33 palavras (abaixo dos 40 de um pedido à voz): ele se junta ao anterior, que fala do mesmo Meteor (o 'de' atravessa a linha em branco). O Pressure Drop continua nomeado em p5, para o mapa. Emenda: '…didn't dive there. ▸ The name Meteor Deep is old…' e '…older sources put it. ▸ [¶] In 2023, the International Hydrographic Organization…' (duas frases seguidas abrindo com data, o máximo da voz §1). −16 palavras.
- editor: 3 par(es)

### L40 · ESTREITAR (lente: ESTREITAR) · fatos:AC12, roteiro:2 GRAVE (a escala do gancho em p8), clareza: NÃO TOCAR (vencido)

- SAI: "Where the French had counted about 200 fish, it found none."
- ENTRA: "Where the French had counted about 200 fish, it saw no snailfish."
- Numerais: entram —; saem —
- Por quê: A escala da L01: 'found none' é 'nenhum peixe', e a fonte diz "No snailfish were observed". A forma é a do fatos (AC12), com 'saw' (o verbo do F38 corrigido, o mesmo do gancho). 'Snailfish' já está definido em p2 ('described them as snailfish, a family of fish'), e deixa claro o 'the two' de duas frases adiante. 'Counted' segura o alerta [200-peixes]. A escala vai à tela (o '0 FISH' some). +1 palavra.
- editor: 4 par(es)

### L41 · DA-FONTE (lente: DA-FONTE) · fatos:AC13, roteiro:17 LEVE, locucao (abaixo do corte: "the French had counted" em frases seguidas)

- SAI: "It found sea cucumbers instead, about as many as the fish the French had counted."
- ENTRA: "It found sea cucumbers instead, spread about as thickly as the fish the French had reported."
- Numerais: entram —; saem —
- Por quê: O resumo (S06) diz "a large number of the holothurian Peniagone sp. were seen in a density similar to that reported originally for the snailfish": compara densidades, não contagens, e o tamanho do transecto de 2019 não está em fonte lida (A02). A afirmação do F38 diz 'numa densidade parecida'; a como_dizer do dossiê ainda traz 'about as many as' (o laudo de fatos é posterior a ela, e a afirmação vence a sugestão de redação). 'Reported' no lugar do segundo 'counted' (a locução notou o 'the French had counted' duas vezes seguidas). +1 palavra.
- editor: 2 par(es)

### L42 · DO-DOSSIE (lente: REDIZER) · roteiro:3 GRAVE, fatos:AC07, portão [vescovo-voltou], dossiê R14, F38, F91, C27

- SAI: "The scientists who went back concluded that the "fish" of 1964 were sea cucumbers. It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again. The paper that reported it came out in 2020, with five authors. One of them was Vescovo."
- ENTRA: "In a 2020 paper on that return visit, five authors concluded that the "fish" of 1964 were sea cucumbers. It's a conclusion drawn from the count and the look, and the animals the French saw that day can't be checked again. One of the five was Vescovo."
- Numerais: entram ['five']; saem —
- Por quê: Lidas juntas, 'The scientists who went back concluded…' e, duas frases depois, 'One of them was Vescovo.' dizem, por lógica, que Vescovo voltou ao sítio em 2019, o que o F91 veta (quem estava no submersível na volta não está em fonte lida, A02); o portão novo reprova [vescovo-voltou]. 'Who went back' também põe os autores no sítio, e o resumo não diz isso. A R14 corrigida dá 'In a 2020 paper, the scientists concluded…'; aqui 'five authors' no lugar de 'the scientists', porque dos cinco (Jamieson, Linley, Stewart, Nargeolet e Vescovo, S06) nem todos são cientistas (Vescovo é investidor e explorador; regra de grupo: a ficha do NORA traz os cinco e o artigo juntos). O ano e o número de autores sobem para a 1ª frase, e a frase 'The paper that reported it…' sai (o roteiro propôs esta redação; o fatos, 'The scientists who studied the return visit…'). Ficam a ressalva (N45) e o laço do fecho ('One of the five was Vescovo.'). Entra um 'five'. −7 palavras; o parágrafo fica com 47.
- editor: 6 par(es)

## Os conflitos entre lentes, e como ficaram

1. **O gancho: a lista "for decades" (L02).** Roteiro 1 (GRAVE: o ponto da lista não é o ponto mais fundo, e "for decades" não tem
   fonte) e fatos AC01 (datar: "until at least 2019") pedem a troca; a clareza põe o gancho no NÃO TOCAR, e o gancho é texto do plano
   do juiz. O portão novo reprova [lista-decadas], e o dossiê, corrigido depois da bancada (C27, N50), dá a forma: a L02 é a
   `como_dizer` da R03, palavra por palavra, com o "And" do texto. A forma de fatos guardava o "gave that point", que é o defeito de
   régua do roteiro. O gancho fica com 161 palavras e o "But" na 49; a 1ª frase, os dois títulos (pagos nas 3 primeiras frases), a
   pergunta e a assinatura não foram tocados.
2. **"It found no fish at all." (L01 e L40).** Roteiro 2 (GRAVE), fatos AC04 (o resumo de 2020 diz só "No snailfish were observed") e
   o portão [nenhum-peixe]; a clareza punha a frase no NÃO TOCAR (vencida). No gancho, a forma do F38 corrigido (C27): "It saw none of
   those fish." (o "those" a amarra aos peixes do relato francês). Em p8, fatos AC12 pede "no snailfish": a L40 diz "it saw no
   snailfish", com o mesmo verbo de ver. ESCALA: no editor, a tela "0 FISH" vira "NO SNAILFISH SEEN", e as linhas de fonte e o
   livro-razão (S7–S8) acompanham.
3. **Vescovo e "the scientists who went back" (L42).** Roteiro 3 (GRAVE), fatos AC07 e o portão [vescovo-voltou] pedem a troca, com
   redações diferentes ("In a 2020 paper…"; "The scientists who studied the return visit…"). Vence a do dossiê (R14/F38, C27), com
   "five authors" no lugar de "the scientists" (regra de grupo: a ficha de S06 traz os cinco e o artigo juntos, e nem todos são
   cientistas) e o fecho "One of the five was Vescovo.". A fala não diz quem estava no submersível em 2019 (F91).
4. **O 1918 dito de novo (L18).** O roteiro 5 (GRAVE: a frase leu a fonte no período errado) a reescrevia (DA-FONTE + REORDENAR);
   clareza 3 e subtração S10 a cortam, e a locução a tinha abaixo do corte. Vence o corte: a frase repetia o 1918 (samba) e, reescrita,
   ainda poria 1918 ao lado da fossa (o alerta [1918-fossa]). Com ela sai também a leitura errada que o roteiro apontou.
5. **A laje de calcário (L11).** Roteiro 4 (GRAVE: cota reconstruída dita como achada) e fatos AC06 concordam no defeito; a redação do
   roteiro passava ao condicional. Vence a do dossiê corrigido (F44, C27: "By the agency's reconstruction, … starts …").
6. **A gravidade (L10).** O roteiro punha a frase do F43 no NÃO TOCAR, mas o próprio roteiro 7 (a 2ª troca), clareza 2 e locução A6a a
   mexem. Vence a troca: sai o "anomaly" (o alerta do portão; a pauta veta "anomalia"), sai o "USGS's" (A6a), e a frase diz o que a
   gravidade indica ("an active downward force", S27, l. 13). A `como_dizer` do F43 no dossiê ainda tem "anomaly" ("À Sala").
7. **O método do sonar (L22).** Fatos AC10 e roteiro 8 (a fonte não diz que o navio "lowered instruments") × a clareza no NÃO TOCAR
   (vencida). O que a clareza protegia, o método em termos de gente, fica: "the team measured how fast sound travels at every depth".
   "The team" evita o 3º "expedition" seguido.
8. **p6, 4º parágrafo: a L33 × a S08.** O roteiro 9 corta "The two scientists had asked for that name to fall out of use." (conclusão
   por justaposição); a clareza a punha no NÃO TOCAR (vencida). A subtração S08 cortava a frase vizinha (o Seabed 2030, −24). Com os
   dois cortes, o pedido à voz cairia a 31 palavras, abaixo de 40: fica um só, o de fato (L33). O S08 continua disponível para a r2,
   com uma junção.
9. **O P01 × o roteiro 7.** O roteiro diz que, com a gravidade e os blocos girados, a pergunta de p3 "já tem resposta atribuída", e
   deixa a laje como está; a clareza (1, MÉDIO) pede o que a laje mostra e um pouso. A lista fez o que as duas pedem em comum (L09, o
   contraste com o Pacífico; L10, a força que puxa para baixo), e o resto vai ao escritor com orçamento curto (+5 a +20) e um mínimo
   (só a oração da laje). Se a fonte não sustentar nada que caiba, fica como o roteiro quer.
10. **O recorde de 1883 (L04 × S06).** Roteiro 16 (a fonte diz mais estreito) corrige; a subtração S06 tirava a temperatura (meia
    informação, sem valor). Fica o roteiro: com a L04, a temperatura passa a fazer parte do recorde ("a sample and a temperature from
    that deep"), e deixa de ser meia informação. O parágrafo fica com 51 palavras.
11. **"Wave" (L16 e L17).** Roteiro 13 ("that wave"; "call the wave the only known sign…") × locução A2c e A2d ("that tsunami"; "those
    boulders"). Vence o roteiro: com "trench" na mesma frase, "tsunami" dispararia o [1918-fossa] duas vezes no bloco do risco, e
    "wave" vem logo depois de "dated the tsunami that left them", sem soar como outro objeto. "Those boulders" punha o sinal nos blocos;
    a fonte o põe no tsunami ("The tsunami is important as the only reported sign…", Kilbourne et al. 2025, l. 54–55).
12. **As pontes de saída (L12).** O roteiro 12 (o metrônomo: as sete partes fecham numa ponte-promessa) cortaria e rediria as pontes;
    elas são do plano e sagradas. Entra só o pronome da locução A2b ("its maps" → "the agency's maps"). O padrão vai à Sala.
13. **O parágrafo de Vescovo (L25 e L26).** O roteiro põe o parágrafo no NÃO TOCAR; a clareza 4 (ninguém fala em 2.089 palavras) pede
    a voz dele. O que o roteiro protege (o "first person", os medidores, a ponte para p6) fica palavra por palavra; entram "in his own
    sub, built to reach the bottom of any ocean" e o "One down!" que o repórter a bordo ouviu (Popular Science, S05). O parágrafo vai a
    97 palavras.
14. **As reordenações de p2 (L05 e L08).** A locução A5 (o tópico deslocado que a voz entoa como pergunta) × roteiro e clareza no NÃO
    TOCAR. O que elas protegem é o conteúdo (a ressalva da profundidade; o não saber da rede), e ele fica; a L08 é a forma da R13 do
    dossiê ("no one knows how deep the fish was when it swam in").
15. **O Meteor (L36).** Roteiro 6 (a frase do período errado: o estudo de 2019 não podia comparar com o número de 2021) × locução A4 (só
    pôr a atribuição na frente). Vence o roteiro, que resolve as duas coisas.
16. **A densidade dos pepinos-do-mar (L41).** Fatos AC13 e roteiro 17 (a fonte compara densidade, não contagem) × a `como_dizer` do
    F38 corrigido pela Sala ("about as many as the fish the French had counted"). Entra o de fatos ("spread about as thickly as the fish
    the French had reported"); a `como_dizer` do dossiê fica desatualizada ("À Sala").
17. **p7: Pressure Deep ou Limiting Deep (L39).** Subtração S02 e clareza 9a cortam o Pressure Deep; roteiro 22 e clareza 9b, o Limiting
    Deep (o roteiro dá o Pressure Deep como o corte seguinte; a subtração, no "Quase cortei", guarda o Limiting Deep por pagar o "odd
    name"). Fica um corte só, o do Pressure Deep (duas lentes, 3º corte do plano em p7, e o apelido não volta), com a junção dos dois
    parágrafos do Meteor (o "de" atravessa a linha em branco; a prova (c) do aplicador a aceitou). O Pressure Drop continua nomeado em
    p5, para o mapa.
18. **A enguia (L07 × a reserva S12).** A S12 cortaria "The Australian Museum lists the same catch."; fatos AC08 põe nessa frase o lugar
    da pesca ("from the Puerto Rico Trench"), que a frase da NOAA perdeu com o conserto da locução A1. Fica a frase, com o lugar; a S12
    era reserva.
19. **A ordem de p6 (L30).** A clareza 8 (LEVE) põe primeiro que o estudo saiu antes dos resultados da expedição; o roteiro guarda a
    frase da R31 no NÃO TOCAR. A frase fica, na frente. O roteiro 20 (os dois cientistas entre os autores de 2021) ficou de fora
    (abaixo).

## As ESCALAS (o mesmo referente, no texto todo e no editor)

- **Os peixes de 1964:** gancho (L01, "none of those fish") e p8 (L40, "no snailfish"); no editor, as linhas de fonte, a ilustração e a
  tela do gancho e de p8, o livro-razão (S7–S8) e o resumo das partes.
- **A lista oficial:** gancho (L02, o estudo de 2019 e "had the Atlantic … too deep"), p6 (L27, a mesma atribuição; L32, "the official
  list of undersea features", o mesmo nome, no lugar de "the international list…"); no editor, as linhas de fonte, a nota da R03, o
  livro-razão (S10) e o resumo das partes.
- **Os cinco autores:** p8 (L42) e o fecho "One of the five was Vescovo."; no editor, as linhas de fonte e o resumo de p8.
- **O leste da fossa:** p5 (L19, "a long way east of its deepest point"); no editor, o rótulo "EASTERN TRENCH" vira "FAR EAST OF THE
  DEEPEST POINT", e a espinha diz "parede sul, longe a leste".
- **O tsunami medieval:** p4 (L16 e L17, "wave"), sem "tsunami" ao lado de "trench".

## Os alertas do portão (na cópia)

- **"still"** (1, novo, L02): "…still had the Atlantic about 1,200 feet too deep…". Aceito: é o passado da R03, dentro do estudo de
  2019 (o sonar já mostrava outro número desde 2003), não estado do mundo.
- **"Milwaukee Deep"** (3): o nome em 1939; a L27 ("A 2019 study found that the official list … had the Milwaukee Deep at about 28,700
  feet"), atribuída; a L32 ("As of October 2026, the official list … doesn't include the Milwaukee Deep."), datada e volátil: a Sala a
  relê na véspera da gravação.
- **"never"** (2) e **"first"** (2): já estavam na r1; a locução os ouviu limpos, e fatos não os apontou.
- **"anomaly"**: saiu (L10).

## Os achados que ficaram de fora, e por quê

- **roteiro 10 (o "about 27,500" atribuído à NOAA, no fecho):** a forma é a `como_dizer` da R32 e do F70 ("By NOAA's estimate, no
  fish lives much deeper than about 27,500 feet."), que o dossiê decidiu ("ou a conta, ou o número da NOAA atribuído"), e fatos não a
  apontou. A queixa do roteiro (a rima de números) vai à Sala.
- **roteiro 11 ("Keep those fish in mind."):** a subtração a guarda como re-gancho ("Quase cortei"), e a ponte de p7 a retoma; a clareza
  não a aponta. Fica.
- **roteiro 12 (o metrônomo das pontes):** as pontes são sagradas; entrou só o pronome (conflito 12). O padrão vai à Sala.
- **roteiro 18 (a tríade "similar color, similar texture, similar shape"):** LEVE; a fonte tem os três ("a similar exterior colour,
  texture and morphology"), a locução não a aponta, e a frase fecha o parágrafo que a L41 já mexe.
- **roteiro 20 (os dois cientistas entre os autores de 2021):** LEVE e não é de graça: +8 palavras e mais uma relação de nomes no
  parágrafo mais denso de p6, que a L30 já reordenou. Volta na r2 se a revisão de espectador ouvir rivalidade entre o estudo e a
  expedição.
- **roteiro 22 e clareza 9b (o Limiting Deep):** conflito 17.
- **clareza 10 (abrir p1 pela definição da fossa e cortar o 23,000):** LEVE; a subtração guarda o 23,000 como o 1º degrau da régua de
  profundidades ("Quase cortei"), e a glosa nova ("a long, narrow valley") pediria conferência de fatos.
- **locução A4:** conflito 15.
- **locução A6b ("NOAA puts it at magnitude 7.1 in its tsunami database."):** criaria "…in its tsunami database. Its tsunami ran…", o
  mesmo "its tsunami" em frases seguidas, numa frase que o roteiro protege.
- **locução A6d ("NOAA estimates that…", no fecho):** LEVE pela própria lente; a frase é a forma da R32, sob a pergunta de comentário.
- **subtração S06:** conflito 10. **S08:** conflito 8.
- **subtração S03, S04, S07 e S12 (a reserva):** só com orçamento devolvido; a lista já tira 71 palavras, o P01 devolve até 20, e o piso
  fica a 68. A S12 também colide com a L07 (conflito 18).
- **As suspeitas da subtração:** o "it" do coral foi a L17; o 1918 foi cortado (L18); o Pressure Drop fica sem pagamento em p7, mas
  nomeado em p5 para o mapa (conflito 17); a junção do S02 passou na prova (c) (L39); a margem de p1 ficou em 51 palavras (a S06 não
  entrou) e a de p7 em 107; o editor leva os 89 pares.
- **fatos AC16 (a definição de placa tectônica, NÃO FOI CHECADO):** falta insumo (uma cópia local que a traga), não troca; a frase
  ("Earth's outer shell is made of giant slabs called plates.") fica e vai à Sala.
- **As sugestões fora da rubrica do roteiro** (Aguadilla em 1918, o NCEI; os invertebrados abaixo da faixa dos peixes, a NOAA): não estão
  no dossiê como F, e por isso não são troca. Vão à Sala.
- **Os itens "abaixo do corte" das lentes** que não entraram em nenhuma troca: polimento sem achado.

## À Sala (não é desta lista)

- **O dossiê** a pôr em dia com a lista: a `como_dizer` do F43 ainda diz "anomaly" (L10 a tirou da fala); a do F38 ainda diz "about as
  many as the fish the French had counted" (L41, a régua da densidade); a R14 e o F38 podem levar "five authors" (L42).
- **O metrônomo das pontes** (roteiro 12): as sete partes fecham numa frase que anuncia a seguinte. É padrão de casa, não troca desta
  rodada.
- **A rima de números do fecho** (roteiro 10): o "about 27,500" da NOAA é conversão arredondada para baixo, até coincidir com o ponto
  mais fundo; a R32 a decidiu, e a página da NOAA dá "between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)".
- **AC16** e as duas sugestões fora da rubrica (Aguadilla em 1918; os invertebrados).

## O que a aplicação deixa por fazer (não é desta lista)

- **Os carimbos.** Depois do `aplicar-lista` sem `--seco`, o sha do texto falado passa a `0081efb271f0` (antes do P01). O
  `roteiro-editor.md` (a linha "Revisão do roteiro", "A medida do portão", o quadro "As partes" com palavras e tempos por parte, e as
  posições das chamadas) e a `pronuncia.md` continuam citando `4694e58092c2` até alguém os refazer; o `gate.mjs --derivados` os aponta.
- **A folha de pronúncia.** Sai da voz o "Pressure Deep" (L39); o "Pressure Drop" fica (p5). Entra a fala "One down!" (L26), sem nome
  novo.
- **O editor** recebe 89 pares (todos casam uma vez nas provas do aplicador): as frases cortadas ficam riscadas, com a marca "saiu da voz
  na r1, lista-r1 Lxx".
- **O P01** se aplica depois desta lista, sobre `0081efb271f0`, e o texto volta à bancada na r2.
