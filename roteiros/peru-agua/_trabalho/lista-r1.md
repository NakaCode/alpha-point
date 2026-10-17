# Lista fechada · rodada 1 · peru-agua

Revisão julgada: `87ea57b0abe5`

> O doutor de roteiro, 17/10/2026, sobre os cinco laudos da bancada da r1 (`qc-roteiro/roteiro-r1`, `clareza-r1`, `locucao-r1`,
> `fatos-r1`, `subtracao-r1`; todos com "Revisão julgada: `87ea57b0abe5`"). A lista que o aplicador lê é `lista-r1.json`; o pedido
> ao escritor, `pedidos-r1.json`. Nada foi aplicado ao roteiro. Conferido nas cópias locais das fontes (sem rede): a KULTURAUSTAUSCH
> (Virginia em Siempre Unidos de Villa Verde; as 42 famílias, o caminhão e Tula em Los Condes), Medina García (as 180 famílias da
> invasão; "ubicar alrededor de 7,000 familias") e a AFP ("bring water for free once a week").

## O resultado

- **26 trocas** (L01–L26), de 55 achados das cinco lentes (roteiro 18, clareza 10, locução 10 em 14 trocas, fatos 9, subtração 7 + 1
  suspeita). Entram os 3 GRAVE (roteiro 1–3) e os 9 de fatos (A01–A09), todos; dos médios, os que têm troca segura; dos leves, os
  que não custam nada. Ops do aplicador: CORRIGIR → DA-FONTE (com a fonte no porquê) ou ESTREITAR (régua); QUALIFICAR → ESTREITAR,
  ou DA-FONTE quando o qualificador traz fato da fonte (L10, L13); DATAR → ESTREITAR ou DA-FONTE (a data da leitura, L18). A op da
  lente fica em `op_lente`.
- **1 pedido ao escritor** (`pedidos-r1.json`): P01 (clareza:4, p2, 1º parágrafo: o elo entre o ar que desce, o mar frio e a tampa).
  O PEDIR do roteiro (achado 4, o fecho de p7) ficou fora: conflito 1.
- **`aplicar-lista.mjs peru-agua --lista=roteiros/peru-agua/_trabalho/lista-r1.json --seco`: exit 0** (SECO_OK), 26 itens, 20
  diferenças, nenhuma frase sem item, 0 recusas, 0 avisos, as provas do editor casando uma vez (58 pares); texto falado
  `87ea57b0abe5` → `c803b5cf5e0b`.
- **O portão na cópia** (`_trabalho/_tmp-lista-r1.md`, as mesmas trocas aplicadas por script): **PASSA**, sha `c803b5cf5e0b` (o mesmo
  do aplicador), 2.019 palavras (−20; ≈10:58), 27 parágrafos, 128 frases, média 15,8, maior 31; gancho intacto (166 palavras até a
  assinatura, "But" na palavra 44); um alerta, o mesmo "still", agora em "As of late August 2026, that tunnel still had no
  construction date." (aceito: estado datado e volátil); taxas todas abaixo do teto (abre_and 2, abre_so 3, perguntas 2,
  frases_curtas 2, antítese 0); autoplágio vazio. Parágrafos de 46 a 110 palavras (a regra é 40 a 110; o de 110 é o das barriadas,
  p4, 4º). Sobram 69 palavras acima do piso de 1.950: P01 pede de +5 a +20 e cabe.

## As trocas

### L01 · DA-FONTE (lente: CORRIGIR) · roteiro:1 GRAVE, fatos:A03, locucao:A9b

- SAI: "a German magazine visited a cooperative of 42 families without water, sewers or electricity, in January 2024. There, Virginia Martínez Morales, 30, a mother of three, ran a hose from a tank up the hill down to her door. After a tanker truck slid down the slope and took three houses with it, drivers stopped going up the steepest streets. Another resident, Tula"
- ENTRA: "a German magazine described two cooperatives in a January 2024 report. In one, a 30-year-old mother of three, Virginia Martínez Morales, could pipe water from a tank to her front door. The other had 42 families without water, sewers or electricity. After a tanker truck slid down the slope there and took three houses with it, drivers stopped going up the steepest streets. A resident, Tula"
- Numerais: entram ['two', 'one']; saem —
- Por quê: Na KULTURAUSTAUSCH (gen-23, cópia local), Virginia é da Siempre Unidos de Villa Verde ('now I can at least pipe the water to my front door'); as 42 famílias, o caminhão e Tula são de Los Condes. O 'There' a punha na cooperativa errada (risco 13). 26/01/2024 é a data da edição, não da visita: 'in a January 2024 report'. Some a direção 'up the hill down' que a fonte não dá. O 'there' do caminhão o prende a Los Condes (fatos). A ordem 'a 30-year-old mother of three, <nome>' tira o 2º molde 'Nome, idade,' (locução A9b). 'Another resident' → 'A resident': Tula não é vizinha de Virginia. A ponte de saída ('Most of the families there…') fica intacta e agora cola em Los Condes, que é onde a revista a põe.
- editor: 7 par(es)

### L02 · DA-FONTE (lente: CORRIGIR) · roteiro:2 GRAVE, fatos:A02, locucao (abaixo do corte: o 'to' longe do 'moved')

- SAI: "In May 1971, the government moved 180 families who had taken over a plot of land to a vast, semi-desert stretch of sand south of the city."
- ENTRA: "In 1971, 180 families took over a plot of land, and more followed. The government set out to resettle about 7,000 families on a vast, semi-desert stretch of sand south of the city."
- Numerais: entram ['7,000']; saem —
- Por quê: Medina García (gen-17, pucp-debates-6875.txt, l. 32 e 199): 180 é o número das famílias que começaram a invasão; depois veio 'una movilización casi incontenible', e 'Se trato, entonces de ubicar alrededor de 7,000 familias' (l. 63), no 'extenso arenal semi-desértico' (l. 57). O governo não moveu 180 famílias. 'May' sai: a fonte põe em maio de 1971 o nascimento de Villa El Salvador, não a invasão (as invasões são 'del año 1971', l. 28); a frase seguinte ('That ground became Villa El Salvador.') fica. 'set out to resettle' é o 'Se trató de ubicar'. A regra de grupo: as 7.000 famílias e o reassentamento estão juntos na l. 63.
- editor: 4 par(es)

### L03 · ESTREITAR (lente: CORRIGIR) · roteiro:3 GRAVE

- SAI: "It did not put most of its people there."
- ENTRA: "It did not put most of its people on the coast."
- Por quê: O 'there' é o lado seco da linha (régua de bacia); p4 prova a frase com a Costa do censo de 1940 (régua de distrito), e a Sierra inclui a encosta oeste, que drena para o Pacífico (tr-15, R12, riscos 4). A gente por vertente só existe para 2012. É a ponte de saída de p3 (sagrada): a ponte nova vai inteira nesta troca, com a 1ª metade intacta ('That put Peru's capital on the dry side of the line.'), e continua levando a p4 ('In 1940, Peru's census found most of them in the highlands').
- editor: 2 par(es)

### L04 · DA-FONTE (lente: CORRIGIR) · fatos:A01, roteiro:12

- SAI: "is also one of its least populated."
- ENTRA: "is also one of its most thinly populated."
- Por quê: Em população, o INEI desmente (883.510 em 2017, 3,0 %, no grupo intermediário); só a densidade (2,4 hab./km², gen.afi-26) está entre as menores. 'Least populated' se ouve como 'com menos gente'. As duas lentes propõem a mesma redação.
- editor: 1 par(es)

### L05 · ESTREITAR (lente: QUALIFICAR) · fatos:A04, roteiro:11

- SAI: "but only high up, from December to March."
- ENTRA: "but mostly high up, and most of it from December to March."
- Por quê: Dois universais na mesma frase: 'only high up' não vale para a costa do extremo norte (Lavado et al., 2012: 'except in the extreme north'), e 'only … from December to March' não vale para o ano (mec.afi-12: 'quase toda'; doc.num-17: 'alrededor del 80%'). A troca junta as duas lentes. 'That summer rain runs off fast' segue certo.
- editor: 3 par(es)

### L06 · ESTREITAR (lente: QUALIFICAR) · fatos:A05

- SAI: "In El Niño years, the high pressure and the trade winds ease, the cold water stops rising, the sea warms, and the desert coast gets heavy rain and floods."
- ENTRA: "In El Niño years, the high pressure and the trade winds ease, and the cold water slows or stops rising. The sea warms, and the desert coast gets heavy rain and floods, mostly in the north."
- Por quê: SENAMHI: 'disminución o desaparición de los afloramientos', com as chuvas na costa norte; NOAA: 'reduced the efficiency of upwelling'. A redação da lente numa frase só dava 35 palavras (acima do teto de 34): parte-se em duas, sem mudar nada além do que a lente pediu.
- editor: 2 par(es)

### L07 · ATRIBUIR (lente: ATRIBUIR) · fatos:A06

- SAI: "Rómulo Cárhuaz, a watershed analyst at the utility, said in a 2024 interview that the releases run from May 1 to November 30."
- ENTRA: "In remarks reported in 2024, Rómulo Cárhuaz, a watershed analyst at the utility, told its press office that the releases run from May 1 to November 30."
- Por quê: A Infobae (06/09/2024, gen-21) diz que a entrevista foi feita pela área de Comunicações da própria SEDAPAL, sem data; 2024 é o ano da matéria. A redação da lente ('told the utility's own press office, in remarks reported in 2024,') repetia 'utility' e punha o aposto no meio; aqui a data vai antes, o dono continua dito ('its press office' = a empresa), e o 'own' não volta (a locução contou 4).
- editor: 1 par(es)

### L08 · DA-FONTE (lente: REDIZER) · fatos:A07

- SAI: "A canal about 50 miles long once supplied it."
- ENTRA: "A canal about 50 miles long once watered the land around it."
- Por quê: A UNESCO diz que o canal de ~80 km abastecia a irrigação que sustentava a região em volta de Chan Chan, não a cidade. DA-FONTE porque muda o objeto do verbo pela fonte.
- editor: 2 par(es)

### L09 · ESTREITAR (lente: QUALIFICAR) · fatos:A08

- SAI: "and each one leaves a strip of green across the desert."
- ENTRA: "and their valleys run as strips of green across the desert."
- Por quê: 'Each one' é universal sem fonte, e o INEA diz que esses rios ficam praticamente secos no inverno: o verde é do vale, não do rio. A redação é a da lente.
- editor: 1 par(es)

### L10 · DA-FONTE (lente: QUALIFICAR) · fatos:A09, roteiro:13, locucao:A6 (parte)

- SAI: "In 2022, Lima and Callao alone produced about two-fifths of Peru's economic output,"
- ENTRA: "In 2022, the Lima region, with Callao, produced more than 40 percent of Peru's economic output,"
- Numerais: entram ['40']; saem ['two']
- Por quê: Os 41,9 % do INEI são do departamento de Lima com o Callao ('Lima incluye la Provincia Constitucional del Callao', inei-lib1940-parte01.txt, l. 1416), não da cidade da frase anterior. 'The Lima region' é o nome que p1 já deu ao departamento (roteiro 13); 'with Callao' é a forma da lente de fatos. 'More than 40 percent' no lugar de 'about two-fifths' (locução A6: forma rara na fala, depois de dez frações): 41,9 % é mais de 40 %. A outra metade de A6 (partir a frase de Lima e Callao) fica fora: a frase está no NÃO TOCAR de fatos.
- editor: 5 par(es)

### L11 · REDIZER (lente: REDIZER) · roteiro:9, locucao (abaixo do corte)

- SAI: "A large share were newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else."
- ENTRA: "The city drew newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere else."
- Por quê: Depois do PIB, 'A large share' soa como parte do PIB (referência órfã). 'The city drew newcomers' diz o mesmo e prende o 'newcomers' à cidade, não ao PIB. A redação da lente ('of its people') o aplicador recusa (grupo 'people' novo em REDIZER), e 'of its residents had been born' casaria 6 palavras com a Zona do Canal no autoplágio: fica 'of Lima's residents', como estava. Mesmos numerais, mesmo dono (o censo de 1993, na tela).
- editor: 1 par(es)

### L12 · REORDENAR (lente: REORDENAR) · locucao:A8

- SAI: "By 1981, about one in four people in Lima lived in informal settlements, which Peruvians call barriadas, by census figures Peru's truth commission cites."
- ENTRA: "Census figures cited by Peru's truth commission put about one in four of Lima's people in informal settlements by 1981. Peruvians call them barriadas."
- Por quê: Duas caudas seguidas ('barriadas, by census figures' cola o termo à fonte; 'figures Peru's truth commission cites' é relativa sem 'that'), e a fonte chegava depois do número. A forma da R16/tr-04 ('by 1981, about one in four') fica, com o dono na frente. Mesmos numerais.
- editor: 1 par(es)

### L13 · DA-FONTE (lente: QUALIFICAR) · roteiro:5

- SAI: "each family in the parts of the district without pipes."
- ENTRA: "each family in the parts of the district without pipes. AFP reported that those deliveries were free."
- Por quê: Logo depois de 'about six times what connected homes pay' (Sunass), o ouvido conclui que Catalina paga seis vezes. A AFP (gen-22, l. 39): 'Blue tanker trucks bring water for free once a week, sometimes less, to parts of San Juan de Miraflores' (a regra de grupo: as entregas, o lugar e o 'free' na mesma linha). 'The agency' da frase anterior ganha o nome logo depois.
- editor: 2 par(es)

### L14 · ESTREITAR (lente: DATAR) · roteiro:16

- SAI: "She washes clothes once a week,"
- ENTRA: "She said she washed clothes once a week,"
- Por quê: Presente sobre pessoa real, tirado de uma reportagem de março de 2025 (gen-22, l. 45). A frase fica atribuída e no passado.
- editor: 1 par(es)

### L15 · CORTAR (lente: CORTAR) · roteiro:6, clareza:8, subtracao:nao_tocar (vencido), locucao:A5 (vencido)

- SAI: "Peru's weather service calls that sinking air the main cause of the coast's dryness."
- ENTRA: (nada; corte)
- Por quê: A mesma atribuição, com o mesmo dono e a mesma causa, 10 s depois da ponte de saída de p1 ('Peru's weather service says the main reason the coast is so dry lies out over the Pacific.'). A locução (A5) cortaria a ponte, que é sagrada; a subtração protege esta frase por ser o único lugar que diz que a causa principal é o ar que desce (R14). Fica o corte desta: a ponte, colada à ponte de entrada de p2 ('Over the South Pacific sits a vast high-pressure system, and under it, the air sinks.'), já diz que a causa principal está sobre o Pacífico, e o que está lá é o ar que desce; L16 põe o mar frio como 'three things' que vêm depois; e P01 pede que o elo entre o ar que desce e a tampa deixe a hierarquia explícita, sem uma 2ª atribuição.
- editor: 1 par(es)

### L16 · REORDENAR (lente: REDIZER) · locucao:A1

- SAI: "Off the shore, the cold Humboldt Current, water rising from the deep and a blanket of low cloud keep the sea unusually cold for its latitude."
- ENTRA: "Off the shore, three things keep the sea unusually cold for its latitude: the cold Humboldt Current, water rising from the deep, and a blanket of low cloud."
- Numerais: entram ['three']; saem —
- Por quê: Dito sem vírgula antes do 'and', 'the cold Humboldt Current, water rising from the deep' soa como aposto, e 'cloud keep' como erro de concordância. O 'three' só conta os três itens já ditos (o dossiê, mec.afi-02: 'as três coisas juntas'); a ordem muda, por isso REORDENAR, com o 'three' declarado.
- editor: 1 par(es)

### L17 · CORTAR (lente: CORTAR) · roteiro:7

- SAI: "It does not stop at the border: with Chile's Atacama, it forms a desert belt more than 2,000 miles long."
- ENTRA: (nada; corte)
- Numerais: entram —; saem ['2,000']
- Por quê: O 4º parágrafo de p2 empilhava quatro números pesados no trecho de maior risco de abandono (~3:15); o cinturão leva a câmera para fora do Peru e não volta no fio; é também uma das negações-contraste. Nada depois o usa (teste da dívida): 'And yet people built a city on that coast' cola em 'at the border with Chile'.
- editor: 5 par(es)

### L18 · DA-FONTE (lente: DATAR) · roteiro:8, clareza (abaixo do corte), o alerta do portão

- SAI: "In 2026, it still had no construction date."
- ENTRA: "As of late August 2026, that tunnel still had no construction date."
- Por quê: 'In 2026', no passado, fala de um ano que não acabou quando o vídeo sai; a leitura é a da Gestión de 30/08/2026 (lim-10, com a ProInversión; lim.afi-17). O 'it' colava em 'Lima', o sujeito mais perto: 'that tunnel'. A frase continua (NÃO TOCAR de locução e subtração: o que elas protegem é a frase datada, e ela fica mais datada). O 'still' continua o alerta do portão, aceito: estado datado e volátil, que a Sala relê na semana da gravação.
- editor: 2 par(es)

### L19 · CORTAR (lente: CORTAR) · clareza:6, roteiro:18, subtracao:3

- SAI: "A weather station there, at Marcapomacocha, sits about 65 miles from downtown Lima in a straight line."
- ENTRA: (nada; corte)
- Numerais: entram —; saem ['65']
- Por quê: Três lentes. P1 pôs a linha a 'less than 70 miles' do centro, e as lagoas, do outro lado dela, ficavam a 'about 65 miles': ao ouvido, as lagoas antes da linha. A estação não é a boca do túnel nem as lagoas (R44) e não volta. Emenda: '…which drains toward the Amazon. ▸ The water travels about 14 miles by canal and tunnel to cross the divide.' A reta pode ir ao mapa.
- editor: 3 par(es)

### L20 · CORTAR (lente: CORTAR) · clareza:7, subtracao:1, roteiro:10 (vencido), locucao:A2 (vencido)

- SAI: "Lima's is not the only tunnel across the line. In the north, a tunnel about 12 miles long carries water from the Amazon side to farmland on the coast."
- ENTRA: (nada; corte)
- Numerais: entram —; saem ['12']
- Por quê: O único desvio do fio, a 91 %, entre o risco do túnel único e a pergunta que volta; um 3º túnel em cinco frases, que o leigo pode ouvir como o 2º túnel de Lima já pronto. Roteiro (10) e locução (A2) o redizem; clareza e subtração o cortam. Fica o corte: resolve também o reflexo da antítese (roteiro 10) e o 'Lima's is' (locução A2), e nada depois o usa. A R20 diz como falar de Olmos, não obriga a falar dele; o texto que fica não diz que o túnel de Lima é o único a cruzar a linha ('the utility calls the tunnel the only way to bring that stored water across' é da água guardada de Lima). Olmos pode ir ao mapa de p5 (clareza).
- editor: 6 par(es)

### L21 · REORDENAR (lente: REORDENAR) · roteiro:15, locucao:A10, subtracao:2 (vencido)

- SAI: "In the south, near Nazca, underground channels called puquios, commonly attributed to the Nazca culture, carry water to some fields, a 2012 study reports."
- ENTRA: "In the south, near Nazca, a 2012 study reports that underground channels called puquios carry water to some fields. They are commonly attributed to the Nazca culture."
- Por quê: O aposto separava sujeito e verbo por 13 palavras, e a atribuição só chegava no fim. Roteiro e locução reordenam (a do roteiro põe a atribuição antes, que é o que a locução também pede); a subtração corta. Fica a ordem: com as outras subtrações o texto já desce perto do piso de 1.950, o termo é definido na 1ª vez, e o roteiro o marca como o 1º corte de p3 se a extensão pedir. Mesmos numerais.
- editor: 2 par(es)

### L22 · REDIZER (lente: REDIZER) · roteiro:14

- SAI: "which UNESCO calls the largest earthen city"
- ENTRA: "which UNESCO describes as the largest earthen city"
- Por quê: 'X calls Y Z' aparece oito vezes entre 1:45 e 7:20. 'UNESCO calls it the oldest…' fica (R42).
- editor: 1 par(es)

### L23 · REDIZER (lente: REDIZER) · clareza:5(a), locucao (abaixo do corte: 'a smaller third region' soa fração)

- SAI: "A smaller third region, in the south, drains into Lake Titicaca."
- ENTRA: "A small part of the south drains into Lake Titicaca instead."
- Numerais: entram —; saem ['third']
- Por quê: 'Region' tinha três sentidos (bacia, departamento, censo), e 'a smaller third region' se ouve como fração entre tantas. A bacia do Titicaca é 3,81 % do país (doc.num-02): 'a small part'. Sai o ordinal 'third'.
- editor: 1 par(es)

### L24 · DA-PAUTA (lente: REDIZER) · clareza:5(c)

- SAI: "The coast became the largest of the three census regions between 1961 and 1972."
- ENTRA: "The coast overtook the highlands as the most populous census region between 1961 and 1972."
- Numerais: entram —; saem ['three']
- Por quê: O leigo não sabe quais são 'the three census regions' (e 'largest' pode soar como área). doc.num-27: Costa 39,0 → 46,1 contra Sierra 52,3 → 44,0 de 1961 a 1972, a mesma R13. DA-PAUTA porque 'overtook the highlands' diz de quem a Costa tomou o 1º lugar. Sai o 'three'.
- editor: 1 par(es)

### L25 · DA-PAUTA (lente: QUALIFICAR) · clareza:1, roteiro:3 (a mesma régua)

- SAI: "Fewer than three in ten lived in the region the census calls the coast."
- ENTRA: "Fewer than three in ten lived in the region the census calls the coast, which covers only part of the dry side."
- Por quê: O gancho deu 'more than three in five' no lado seco em 2012; p4 dá 'nearly six in ten' na Costa em 2025, e o ouvido iguala as duas e ouve o lado seco encolher. A Costa do INEI é corte por distrito, e a vertente é corte por bacia (riscos 4, tr-15, R12): a Costa é parte do lado seco. A redação da clareza ('a lower, narrower strip') comparava áreas de réguas diferentes; esta só diz a relação de partes, sem número. Na 1ª menção, a régua fica dita uma vez.
- editor: 1 par(es)

### L26 · REDIZER (lente: REDIZER) · clareza:10, locucao:A7

- SAI: "Later, the violence of the 1980s and '90s pushed many more."
- ENTRA: "The political violence of the 1980s and '90s pushed many more."
- Por quê: Clareza: 'violence' soa como crime para quem não conhece o Peru. Locução: 'Later' se prende a 'a 1995 study' e soa 'depois de 1995'. 'Political violence' é termo da CVR ('violencia política', no tomo 6 da cópia local), guarda o 'violence' da R18 e da R43, e não nomeia grupo (nunca 'terrorist', nunca 'Shining Path'). Fica o '90s da R43 (a pronúncia já o confere); o 'armed conflict' da clareza mudaria a palavra da regra.
- editor: 1 par(es)

## Os conflitos entre lentes, e como ficaram

1. **O fecho de p7 (roteiro 4, PEDIR) × clareza, locução e subtração (NÃO TOCAR).** O roteiro pede a resposta sem a pergunta repetida e
   sem o molde "Not because / First, … Then … Then … / tríptico", por ser o 4º fecho da casa no mesmo esqueleto (Juneau, Los Angeles,
   Zona do Canal; conferido nos três roteiros). As outras três lentes protegem o parágrafo (a resposta em camadas "reordena, não
   resume"; a fala sai de primeira), e o ofício do doutor (§5) põe o fio (a pergunta que volta) e o pagamento da promessa no sagrado.
   O tríptico do fecho foi também um enxerto escolhido pelo juiz (`juiz.md`). **O PEDIR fica fora**, como no vídeo 3 (lista-r1 da Zona,
   conflito 10, que já deixava a pergunta "para o vídeo 4, decisão da Sala"). A queixa é de marca, não de fato: o molde do fecho, pela
   4ª vez, vai à Sala como pergunta ao Lucas (abaixo, "À Sala").
2. **A dupla atribuição ao SENAMHI.** Roteiro 6 e clareza 8 cortam a frase de p2 ("calls that sinking air the main cause"); a locução
   (A5) cortaria a ponte de saída de p1; a subtração protege a frase de p2 por ser o único lugar que diz que a causa principal é o ar
   que desce (R14). A ponte é sagrada, então sai a de p2 (L15). A hierarquia da R14 fica: a ponte de p1 ("the main reason … lies out
   over the Pacific") cola na ponte de entrada de p2 ("Over the South Pacific … the air sinks"), o mar frio vem depois como "three
   things" (L16), "The mountains help." fica, e o P01 pede que o elo deixe a principal das peças explícita, sem 2ª atribuição.
3. **Olmos (p7).** Clareza 7 e subtração 1 cortam; roteiro 10 e locução A2 o redizem. Fica o corte (L20): é o único desvio do fio, no
   clímax; o corte também resolve o reflexo da antítese (roteiro 10) e o "Lima's is" (locução A2). A R20 diz como falar de Olmos,
   não obriga; o texto que fica não diz que o túnel de Lima é o único a cruzar a linha. O editor guarda a tela de Olmos para o mapa
   de p5, se o regente quiser (clareza).
4. **Os puquios (p3).** Subtração 2 corta; roteiro 15 e locução A10 reordenam. Fica a ordem do roteiro (L21), que põe a atribuição
   antes (o que a locução também pede): o texto já desce perto do piso com os cortes, e o roteiro o marca como o 1º corte de p3 se a
   extensão pedir.
5. **Puente Piedra.** Roteiro 1 e fatos A03 corrigem o mesmo erro com redações diferentes; locução A9b reordena o nome. L01 usa a
   estrutura do roteiro (duas cooperativas, "In one", "The other"), o verbo da própria Virginia na revista ("pipe the water to my front
   door"), o "there" de fatos no caminhão (que o prende a Los Condes) e a ordem da locução ("a 30-year-old mother of three, <nome>").
   A forma de fatos ("pipes water … down to her door", no presente) punha pessoa real no presente e guardava a direção que a fonte não
   dá.
6. **Villa El Salvador.** Roteiro 2 e fatos A02: as duas dizem o mesmo; L02 usa a do roteiro ("set out to resettle about 7,000
   families", o "Se trató de ubicar" da fonte). A de fatos ("the government moved them") afirmava a mudança das milhares, que a fonte
   não diz. O "May" sai: maio de 1971 é o nascimento de Villa El Salvador, não a invasão.
7. **O PIB (p4).** Fatos A09 ("the Lima region, with Callao"), roteiro 13 ("the Lima region and Callao together") e locução A6 ("more
   than 40 percent"). L10 junta: a régua de fatos, o nome que p1 já dá ao departamento (roteiro) e o percentual da locução. A clareza
   (5b) cortaria "through the Lima region itself" de p1, para "region" ter menos sentidos; fica, porque é o nome que o PIB agora usa.
   Os outros dois sentidos de "region" saem (L23, a bacia do Titicaca; L24, as "three census regions").
8. **A violência dos anos 1980–90.** Clareza 10 ("armed conflict") e locução A7 (sem o "Later"). L26: "The political violence…", o
   termo da CVR que guarda a palavra da R18 e da R43, e sem o "Later".
9. **"In 2026, it still had…".** Roteiro 8 data; locução e subtração a põem no NÃO TOCAR. O que elas protegem é a frase datada e
   volátil, e ela fica, mais datada (L18).
10. **A frase do censo de 2025 (clareza 1).** A redação da lente ("a lower, narrower strip than the whole dry side") compara áreas de
    réguas diferentes, o que o dossiê veta (tr-15). L25 diz só a relação de partes ("which covers only part of the dry side"), que
    é a da própria régua (riscos 4, R12), e combina com a ponte corrigida (L03).

## Os achados que ficaram de fora, e por quê

- **roteiro 4 (PEDIR, o fecho de p7):** conflito 1.
- **roteiro 17 ("built in the early 1960s" → "in service since the early 1960s", no gancho):** LEVE e opcional; a frase está no NÃO
  TOCAR de fatos e o gancho, no de três lentes.
- **clareza 2 (pôr Catalina antes do regulador em p6):** a frase do regulador é a ponte de entrada de p6 no plano (sagrada), e ela
  responde direto à ponte de saída de p5 ("many homes are not on the network at all"). A justaposição que pesava (Catalina e as
  "six times") L13 desfaz.
- **clareza 3 (as palavras da ordem de Pizarro entre aspas):** a frase-chave está no NÃO TOCAR do roteiro, e as aspas poriam em inglês,
  como citação, a tradução do "muy buen puerto"; a tela já leva "MUY BUEN PUERTO" com o dono.
- **clareza 5 (b) (cortar "through the Lima region itself"):** conflito 7.
- **clareza 9 (cortar "The water Lima keeps on the far side of those mountains has only one way through."):** é a ponte de entrada de
  p7 (sagrada).
- **locução A3 (a, b, c) ("the water that Lima stores", duas vezes, e "the river that Lima drinks from"):** são formas literais da
  Sala (17/10) e da R09, no NÃO TOCAR de roteiro e de fatos, e A3a está no gancho. A troca só põe um "that" e não muda fato: vai à
  Sala ("À Sala", abaixo).
- **locução A4 ("about 2 percent of the water", no gancho):** a frase está no NÃO TOCAR de roteiro e de fatos, na forma da Sala; vai
  à Sala.
- **locução A5 (cortar a ponte de saída de p1):** conflito 2.
- **locução A6, a 1ª metade (partir "Lima and Callao grew from … to about a third."):** a frase está no NÃO TOCAR de fatos. A 2ª metade
  ("two-fifths" → "more than 40 percent") entrou em L10.
- **locução A9a ("59-year-old Catalina Naupa told AFP…"):** abriria a frase com numeral, e, com L01, o molde "Nome, idade," fica uma vez
  só (Catalina).
- **subtração 4 (cortar a citação do INEI de "predominantly Andean" a "mostly coastal"):** a locução a põe no NÃO TOCAR, é uma das
  poucas falas de fonte com aspas, e o orçamento já desce com os outros cortes.
- **subtração 5, 6 e 7 (as reservas):** a própria lente diz que, com elas, o portão reprova no piso; não há orçamento devolvido.
- **subtração S1 (a frase da fundação sozinha num parágrafo, para a pausa da inscrição):** um parágrafo de 17 palavras fica abaixo do
  piso de 40 por pedido à voz; a pausa da inscrição é do regente (`cta.md`), e o editor já diz onde a peça entra ("As chamadas", item
  1).
- **Os itens "abaixo do corte" das lentes** (o "told the agency", "department" sem tradução, "puts the two sides in a single table",
  "for its latitude", "firm up", o nome de Tula, "own" quatro vezes, "letting out its high lakes"): polimento sem achado; nenhum entra
  como troca. "The agency" ganha o nome na frase seguinte (L13).
- **O alerta do portão** ("still"): continua, aceito (L18; estado datado, volátil, relido pela Sala na semana da gravação).

## À Sala (não é desta lista)

- **O molde do fecho** (conflito 1): é a 4ª vez que a casa fecha com "So why/what…? + resposta em lista paralela". Se vira pergunta ao
  Lucas, ou regra da marca para o vídeo 5, é decisão da Sala. Até lá, o fecho do Peru fica como o juiz o escolheu.
- **O "that" nas formas literais** (locução A3a, A3b, A3c) e **o "of the water" do gancho** (locução A4): o ouvido monta "the water
  Lima stores" como "as lojas de Lima" e "the river Lima" como nome de rio, e "about 2 percent" sozinho pode soar do território. São
  formas da Sala: com A3a e A4, o gancho iria a 170 palavras, no teto; só A4, a 169.

## O que a aplicação deixa por fazer (não é desta lista)

- **Os carimbos.** Depois do `aplicar-lista` sem `--seco`, o sha do texto falado passa a `c803b5cf5e0b` (antes do P01). O
  `roteiro-editor.md` (a linha "Revisão do roteiro", "A medida do portão" e o quadro "As partes", com palavras e tempos por parte), a
  `pronuncia.md` e a cópia para a voz continuam citando `87ea57b0abe5` até alguém os refazer; o `gate.mjs --derivados` vai apontá-los.
- **A folha de pronúncia.** Saem da voz Marcapomacocha (L19), Olmos (L20) e o Atacama (L17); o resto dos nomes fica.
- **O editor** recebe 58 pares (todos casam uma vez nas provas do aplicador). O parágrafo histórico depois do quadro "As partes"
  ("Todos os opcionais do plano ficaram…", com a estação de Marcapomacocha e Olmos) descreve a 1ª versão e não foi tocado; o quadro
  e a medida se refazem com o portão depois da rodada.
- **`escrita-notas.md`:** o item 2 (o "a plot of land" de 1971, e a frase dos 180) e o item dos puquios citam as formas antigas.
- **O P01** se aplica depois desta lista, sobre `c803b5cf5e0b`, e o texto volta à bancada na r2.
