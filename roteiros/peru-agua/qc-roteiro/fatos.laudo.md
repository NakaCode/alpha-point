# Laudo · verificador de fatos (independente, da Sala de controle) · rodada final, posta em dia na rodada 2 da Sala (o delta) · peru-agua

Revisão julgada: `40905ef8ecdc` · data-base 2026-10-17 (este verificador julgou `d406515a8aa9`; a Sala pôs em dia a r2c: "## A rodada 2c", abaixo)

COBERTURA: 263 de 263 linhas da tabela com veredito "confirmada" (afirmações checáveis em 128 das 129 frases do texto falado de `40905ef8ecdc`; eram 265 em `d406515a8aa9`; a 129ª é a assinatura do canal, "You're at Alpha Point…", que não afirma nada). CHECADO POR INTEIRO.

- **O que foi julgado:** o texto falado inteiro de `roteiros/peru-agua/roteiro-narrador.md`, sha256 `d406515a8aa9eed74ca8c06201f72cc1b0cca167533a40f4b7caa3fcdef533f5`. `node roteiros/peru-agua/_ferramentas/gate.mjs`: PASSA, 2.069 palavras, 27 parágrafos, 129 frases, média 16, maior 33, gancho 166 palavras com o "But" na 44ª, 0 problemas, um alerta de palavra ("still" em "As of late August 2026, that tunnel still had no construction date.", datado: aceito, como antes).
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. A lista é a da rodada anterior (as 129 frases do portão, pela regex de `frasesDe`, lidas uma a uma sobre `44ec6a38887f`), posta em dia pelo diff: as frases que mudaram foram lidas de novo, inteiras, contra a cópia local da fonte, e ganharam as linhas que a mudança pedia; as outras ficam com o veredito da rodada anterior, porque o texto delas é idêntico.
- **O diff:** `diff` entre `_trabalho/roteiro-r2.antes.md` (`44ec6a38887f`) e o texto de hoje mostra 14 linhas mudadas (os parágrafos de p1 a p7 que levam as trocas), e cada mudança é uma das 19 trocas de `_trabalho/lista-r2.json` (F01–F19; o aplicador em `_trabalho/aplicado-r2.txt`: 19 itens, 14 diferenças, "frases sem item: 0") ou a correção F09b de `_trabalho/lista-r2b.json` (a data de 1940 ao fim da primeira frase). Conferi palavra a palavra cada linha do diff contra o `para` dos itens: fora deles, o texto é idêntico ao que verifiquei. O número de frases não muda (129): o F09 parte uma em duas e o F16 junta duas em uma.
- **Contra o quê:** o dossiê (`pautas/peru-agua/fundamento.json`, com `nomes`, `regras_de_pauta`, `correcoes_pos_sintese`; as decisões da Sala no topo de `fundamento.md` e `roteiros/peru-agua/decisoes-lucas.md`) como mapa, e a cópia local de cada fonte (`midia/peru-agua/fontes/`) como prova. Rede: não usei. Nenhum site que recusa robô foi tocado.
- **A tabela:** `roteiros/peru-agua/qc-roteiro/fatos-tabela.json`, 265 linhas (eram 253): as 44 linhas das frases mudadas têm a `frase` igual ao texto novo (e 5 delas a `afirmacao` ajustada), e entraram 12 linhas (F042b, F051b, F073b, F129b, F145b, F145c, F158b, F188b, F204b, F214b, F244b, F244c) com o trecho literal da cópia local que a frase nova pede. As outras 209 linhas ficam como estavam. Três tipos: **texto (177)**, **imprensa (46, cada trecho com até 20 palavras)** e **medição (42, `qc-roteiro/fatos-medidas.txt`, sem mudança: nenhuma frase mudada trouxe número novo nem conta nova)**.
- **O portão de fatos do canal** (`node ferramentas/portao-fatos.mjs peru-agua`): PASSA, sha12 `d406515a8aa9` igual ao do gate, 265 confirmadas de 265, nenhum problema.
- **Citações aspadas:** as três da voz, sem mudança de letra: "predominantly Andean" e "mostly coastal" (tradução fiel do INEI, doc-10) e "There are worms in the bottom of the tank" (AFP, 20/03/2025, letra a letra). A troca F16 mexeu só fora das aspas.
- **Aritmética:** nenhuma conta nova. As do F09/F09b continuam: 645.172 ÷ 6.207.967 = 10,4 % ("about one in ten", 1940); 10.643.581 ÷ 32.706.028 = 32,5 % ("about a third", 2025); 9.600.724 + 1.042.857 = 10.643.581 ("more than ten and a half million", 2025).

NOTA: 9.5/10 · toda afirmação da revisão `d406515a8aa9` tem fonte local conferida, e nada do que a lista-r2 e a r2b mudaram quebrou fato em volta. Não chega a 10 pelos mesmos três apoios de composição declarada da rodada anterior (Tacna na fronteira com o Chile; "three things", na leitura corrigida do dossiê, mec.afi-02; o "less than 70 miles" medido do Campo de Marte) e por um quarto, novo e leve: "those utility deliveries" junta duas frases do mesmo despacho da AFP (O1, abaixo). Sem regressão: a nota é a mesma.

## A rodada 2c (posta em dia pela Sala de controle, não por este verificador)

Depois deste laudo, a Sala aplicou com `ferramentas/aplicar-lista.mjs` as cinco trocas de `_trabalho/lista-r2c.json` (saída em
`_trabalho/aplicado-r2c.txt`), pedidas por `r2-delta.laudo.md` (A1, D2, D3, D4) e pela observação O1 deste laudo:
`d406515a8aa9 → 40905ef8ecdc`. Nenhuma traz número, data, nome ou afirmação nova:
- **G01 · CORTAR (p4):** sai a frase "The city drew newcomers: in 1993, almost four in ten of Lima's residents had been born somewhere
  else." (`gen.num-17`); a seguinte vira "The city drew newcomers, and many of them built their own homes at the city's edge.", com a
  mesma fonte de antes (`gen.afi-18`). As 2 linhas da frase que saiu foram tiradas da tabela (265 → 263).
- **G02 · REDIZER (p5):** "The releases" → "The dry-season releases" (o 1º de maio a 30 de novembro é a estiagem que p5 já disse).
- **G03 · REDIZER (p6):** a fala da Catalina volta a duas frases: a citação, "she said."; o hábito, "To save water, she added, she
  washed clothes…". A mesma atribuição (`gen.afi-30`, `gen-22`).
- **G04 · CORTAR (p6):** sai o "utility" da F18 (a O1 acima): volta a frase que a bancada final verificou, "AFP reported that those
  deliveries were free."
- **G05 · REORDENAR (p7):** as mesmas palavras do F19, com o motivo no fim da frase.
A tabela foi posta em dia por script (`frase` = o texto de hoje nas 13 linhas dessas frases; nenhum `trecho` mudou), e
`node ferramentas/portao-fatos.mjs peru-agua` foi rodado sobre ela. A tabela em markdown abaixo ("## A tabela") é a de
`d406515a8aa9`, com as frases de antes nessas linhas; a de hoje é a `fatos-tabela.json`. Fora dessas frases, o texto é idêntico
(`diff _trabalho/roteiro-r2c.antes.md roteiro-narrador.md`).

## A rodada 2 da Sala (o delta)

Cada frase mudada, com o veredito e o que eu conferi na cópia local. "Em volta" quer dizer o que a mudança toca nas frases vizinhas.

| item | a frase de hoje | veredito | o que eu conferi |
|---|---|---|---|
| F01 (p1, §4) | "There, Loreto, Peru's largest region, is also one of its most thinly populated." | CONFIRMADA (F042, F042b, F043) | O dossiê chama Loreto de departamento (`nomes`: "o departamento amazônico"), e o HKS, de "the largest department in Peru"; o mesmo texto do HKS chama os departamentos vizinhos de regiões ("the capitals of its neighboring regions in Peru - San Martin and Ucayali") e fala da "economy of the region". "Region" é o nome de uso do departamento (o texto já diz "the Lima region" em p1 e p4, sempre no sentido de departamento), e "largest" segue sendo por área, como o HKS. Em volta: a única outra "region" de sentido diferente é a "census region" de p4, que vem nomeada ("the region the census calls the coast"); não há troca de régua |
| F02 (p1, §5) | "The country's water authority calls that imbalance a paradox." | CONFIRMADA (F051, F051b) | "that imbalance" retoma a frase de antes (por pessoa, o lado do Amazonas tem cerca de cem vezes a água). A ANA 2009 (doc-01, p. 1 impressa) diz que as três vertentes "desequilibran su distribución espacial" e põe o "paradójicamente" na população que se concentra na vertente do Pacífico, a de 1,8 % da água: o desequilíbrio por pessoa é exatamente essa combinação. Só a palavra vai à voz, sem o 65 % nem o 80,4 % (R05, R23). "The country's" = a mesma ANA de "Peru's own" |
| F03 (p2, §6) | "It stays as fog, low cloud and drizzle." | CONFIRMADA (F061, F062) | o corte de "not rain" não muda fato: SENAMHI 2021, "nieblas y neblinas costeras", "nubes estratos y estratocúmulos"; a garoa em F067 ("en forma de lloviznas") |
| F04 (p2, §8) | "On the eastern slopes, that air rises, and its moisture falls as rain." | CONFIRMADA (F073, F073b) | a frase nova é o mecanismo da fonte: "El ascenso del aire húmedo es favorecido por las cordilleras andinas … (efecto de forzamiento orográfico)" e "El aire húmedo presente en la cuenca amazónica es movilizado de manera horizontal y vertical, formando nubes productoras de lluvias" (mec-01, p. 12–13); as vertentes "favorecen la formación de nubes productoras de precipitaciones orográficas". O ar sobe, a umidade dele vira chuva: o que cai é a umidade, não o ar (a forma antiga, "rises and falls as rain", era a imprecisa) |
| F05 (p2, §8) | "That rain runs off fast, down short rivers." | CONFIRMADA (F079) | "That rain" retoma a chuva do lado seco, "mostly high up, and most of it from December to March": ANA 2009, "las lluvias que caen en la época del verano austral sobre la vertiente occidental de Los Andes, dan nacimiento a pequeños ríos de régimen torrencial". O "summer" que saiu era o verão austral; a estação continua dita pelos meses |
| F06 (p2, §9) | "In 2009, Peru's water authority said that, for lack of storage, about half of the flood water from the wetter part of the Pacific side runs back into the sea unused." | CONFIRMADA (F081, F082) | só a ordem mudou: "desperdiciándose alrededor del 50% (17 542 MMC) que retornan directamente al mar por la escasa regulación" (ANA 2009, 24/04/2009). A régua não muda: a metade é da cheia ("período de avenidas") da "cuenca húmeda de la vertiente del Pacífico", e o ano é o do documento. "for lack of storage" verte "por la escasa regulación" como antes; o ano continua no começo da frase, e o presente "runs back" fica preso ao "said" de 2009 |
| F07 (p3, §13) | "It did not put most of the country's people on the coast." | CONFIRMADA (F118) | "the country's" tira a ambiguidade do "its" (a capital ou o país): em 1940 a Costa tinha 28,3 % e a Sierra 65,0 % (INEI, doc-10 e doc-14) |
| F08 (p4, §14) | "By 2025, nearly six in ten lived in that coastal region." | CONFIRMADA (F129, F129b, F130, F131) | "that coastal region" é a Costa do censo da frase "the region the census calls the coast": a série do INEI de 2026 é uma só, de 1940 a 2025 ("Región natural: Comprende las regiones Costa, Sierra y Selva, definidas en base a distrito"), com a Costa em 58,7 % em 2025 (M20: quase seis em dez). Não vira "the dry side" nem "the Pacific side" (R12) |
| F09 + F09b (p4, §16) | "Lima and Callao had about 650,000 people in 1940, about one in ten Peruvians." / "By 2025, they had more than ten and a half million, about a third." | CONFIRMADA (1ª: F142, F143, F144, F146 · 2ª: F145, F145b, F145c, F147, F148) | cada número com o seu ano, na mesma frase: 1940, Lima Metropolitana 645.172 (INEI 1995, gen-03; "Comprende la Provincia de Lima y la Provincia del Callao", gen-04), de 6.207.967 = 10,4 %; 2025, Lima Metropolitana 9.600.724 + Callao 1.042.857 = 10.643.581 (INEI 2026, doc-14), de 32.706.028 = 32,5 %. O "they" da 2ª frase é Lima e o Callao, a mesma soma: a régua de 1940 inclui o Callao, e a de 2025 também (na tabela de 2025, "Lima Metropolitana" é só a província, e o Callao vem na sua linha: as duas linhas novas o mostram). O "about one in ten" ficou com 1940 e o "about a third" com 2025; nenhum número trocou de ano (o aviso do aplicador sobre a ordem dos numerais está resolvido) |
| F10 (p4, §17) | "In 1971, a group of 180 families took over a plot of land, and more followed." / "The government then set out to resettle about 7,000 families on a vast, semi-desert stretch of sand south of the city." | CONFIRMADA (F156, F157 · F158, F158b, F159) | "a group of 180 families" = "la invasión de 180 familias a un terreno de propiedad del Estado" e "180 familias iniciaron lo que sería la primera 'oleada'" (PUCP); "more followed" = a "oleada" e a "movilización casi incontenible". O "then": no PUCP, a ordem é invasão → repressão → "Todos estos hechos provocaron la acción inmediata del Gobierno para que aquella población tuviera un lugar de reubicación" → "Luego de todos esos acontecimientos … Se trato, entonces de ubicar alrededor de 7,000 familias". O "entonces" é consequência e sequência ao mesmo tempo, e o "then" inglês cobre as duas leituras sem afirmar mais que a fonte: o governo agiu depois da invasão e por causa dela. O "set out to resettle" continua verter o "se trató de ubicar" (intenção, não reassentamento consumado) |
| F11 (p5, §20) | "Peru's weather service says it was built first to power a hydroelectric plant, and also to steady the flow of the river Lima drinks from." | CONFIRMADA (F186, F187) | "además de afianzar el caudal de río Rímac aguas abajo" (SENAMHI 2016): "afianzar el caudal" é garantir a vazão, e a obra o faz pelo trasvase das lagoas "en épocas de estiaje" (o mesmo parágrafo). "steady the flow" é tradução fiel, até mais exata que "firm up the river": fala da vazão, não do rio. A ordem ("first… and also") é a da fonte (R09) |
| F12 (p5, §20) | "The power plant, at Huinco, opened in 1964." | CONFIRMADA (F188, F188b) | "la Central Hidroeléctrica Huinco cuya potencia es de 247.3 Mw" (SENAMHI 2016) e a tabela 3-2 ("AÑO DE INICIO": 1964). "power plant" desfaz o risco de ouvir "plant" como estação de tratamento, que o texto nomeia depois ("Lima's main treatment plant", §19) |
| F13 (p5, §21) | "The releases run from May 1 to November 30, Rómulo Cárhuaz, a watershed analyst at the utility, told its press office in remarks reported in 2024." | CONFIRMADA (F193–F196) | o conteúdo é o mesmo: "Del 1 de mayo al 30 de noviembre es el período de descarga", na "entrevista realizada por el área de Comunicaciones de Sedapal", página da Infobae de 06/09/2024. O presente "run" fica preso, na mesma frase, à fala e ao ano ("told… in remarks reported in 2024"): não é presente sem data, e é o calendário de 2024 dito em presente habitual, como a fonte o diz. Volátil, como antes (ver Voláteis). A ordem nova põe a data no fim, mas a frase não termina sem ela |
| F14 (p6, §22) | "In the districts it studied, almost all of the homes without a connection bought water from tanker trucks, at about six times what connected homes pay." | CONFIRMADA (F204, F204b, F205, F206) | Sim: o 94,7 % é dos lares sem conexão. A Gestión (25/03/2026): "En 2015, el 88% de los hogares sin conexión obtenía agua por esta vía; en 2025, esta cifra alcanza el 94.7%", no estudo da Sunass "en 16 distritos del ámbito periurbano de Lima y Callao". "the homes without a connection" é o grupo da fonte, e "In the districts it studied" mantém o recorte: os 94,7 % não valem para os 700.000 de Lima e do Callao inteiros, e a frase não o diz. "about six times" segue R17 |
| F15 (p6, §23) | "In San Juan de Miraflores, in southern Lima, Catalina Naupa, 59, told the news agency AFP in March 2025 that her water comes by truck." | CONFIRMADA (F207–F209) | "the news agency" só descreve a AFP: o dossiê registra gen-22 como despacho da Agence France-Presse (Carlos Mandujano e Lena Cloarec, 20/03/2025), republicado pela eNCA, e a cópia traz as fotos "AFP \| ERNESTO BENAVIDES". Nada mais mudou |
| F16 (p6, §23) | "'There are worms in the bottom of the tank,' she said, and to save water, she washed clothes once a week, or every two weeks." | CONFIRMADA (F210, F211) | a citação continua letra a letra. A 2ª metade saiu do "She said" e ficou na voz do narrador, dentro do parágrafo que a AFP abre; é como a própria AFP o diz, na voz dela, não em aspas: "said Naupa, who washes her clothes only once a week or even every two weeks to conserve water". O passado "washed" fica preso ao "March 2025" da frase de antes |
| F17 (p6, §23) | "An official at the utility told the news agency it brings about 260 gallons of water a week to each family in the parts of the district without pipes." | CONFIRMADA (F212, F213) | só "the news agency" em lugar de "the agency": "Nicolas Reyes, who works for the city's water utility Sedapal, says it brings in a cubic meter (260 gallons) of water per family per week" |
| F18 (p6, §23) | "AFP reported that those utility deliveries were free." | CONFIRMADA, com composição declarada (F214, F214b) | A AFP não diz com essas palavras que as entregas gratuitas são da empresa. Ela diz "Blue tanker trucks bring water for free once a week, sometimes less, to parts of San Juan de Miraflores" e, três frases depois, que a SEDAPAL "brings in a cubic meter (260 gallons) of water per family per week"; o "per week" casa com o "once a week". A ligação é do próprio despacho (as duas frases, no mesmo texto, sobre as mesmas partes do distrito), e o dossiê a lê do mesmo jeito (gen.num-35: "partes de San Juan de Miraflores atendidas de graça pela SEDAPAL", verificado). O "utility" só torna explícito o que o "those deliveries" já dizia (o referente era a frase da empresa). Não é DIVERGE; é leve, e vai como O1 |
| F19 (p7, §26) | "Then the people: in the 20th century, pushed in part by a shortage of farmland and later by violence, the country came down from the mountains, to the coast and to that capital." | CONFIRMADA (F244, F244b, F244c, F245) | O resumo é aceitável sem atribuição na frase. (1) Não cria fato: o INEI 1995, sozinho, dá as duas causas ("El deterioro de la estructura productiva agraria, la escasez de tierras de cultivo y la violencia terrorista, entre otros, explican… su voluntad de emigrar"); a CVR data a violência (1980–2000); o "later" sai das datas, porque a descida já vinha de quatro décadas (a Costa de 28,3 % em 1940 a 49,8 % em 1981). Não é composição que junta pedaços para dizer o que nenhuma fonte diz: é a síntese de dois trechos que dizem cada um a sua parte, na mesma relação. (2) "in part" mantém a violência e a terra como causas entre outras (o "entre otros" do INEI; R18, R43). (3) A regra de pauta 12 ("A violência… entra só atribuída… e como uma das causas… depois da terra") está cumprida: a violência entrou em p4, atribuída à CVR, e a terra ao INEI de 1995; o fecho só retoma, na ordem da regra (terra, depois violência), e não usa "terrorist". (4) O fecho inteiro é recapitulação (o vale, o porto, a gente): nenhuma das três partes leva dono ali, e todas o levaram antes. Troca, nenhuma. Vai como O2, para registro |

Em volta: as trocas não deixam órfã nenhuma frase vizinha. O "Peru's weather service says the main reason…" (§5) segue F02 sem mudança; "Some of these rivers run dry for part of the year." (§8) segue o "That rain"; o "That ground became Villa El Salvador." (§17) segue o "then" (o areal do PUCP); "The utility regulates 19 lakes and three large reservoirs, he said." (§21) continua com o "he" em Cárhuaz, nomeado na frase de antes; "In one, a 30-year-old mother…" (§24) não depende de nada do §23. Nenhum universal novo, nenhum período trocado, nenhuma régua trocada (o F08 e o F09 mantêm a Costa do censo e Lima com o Callao), nenhum mecanismo contradito (o F04 o deixa mais perto da fonte), nenhum presente sem data (o F13 o mantém preso à fala de 2024).

## As decisões da Sala (17/10/2026), conferidas na voz

Sem mudança desde a rodada anterior: "more than three in five Peruvians" (§1, PNRH 62,53 %), nunca "two in three" nem "two-thirds"; "about 2 percent" e "more than 97 percent", do mesmo Cuadro 2.3; o túnel com "more than half of the water Lima stores for the dry season" (157 ÷ 282, 2007), "early 1960s", "between 1958 and 1962… in service since 1963" e "built first to power a hydroelectric plant", atribuído ao SENAMHI; o PIB pelo INEI de 2022 ("more than 40 percent… by the statistics institute's estimate"), sem o 80,4 %; nenhuma mina Ariana; o presente só onde precisa, datado. Todas cumpridas em `d406515a8aa9`.

## O "O que não se diz", conferido

Nada do que o dossiê veda está na voz: nenhum "two-thirds", nenhum "60 %" do túnel, nenhum 80,4 % do PIB, nenhuma Ariana, nenhum cinturão de deserto com o Atacama, nenhum número da estação de Marcapomacocha, nenhum túnel do norte, nenhuma "contagem" de 2012, nenhuma origem nasca dada como certa, nenhum número ao lado do "paradox" da ANA (F02 continua sem o 65 %), nenhum "terrorist" na voz do narrador (F19), nenhuma "poverty" atribuída ao INEI.

## As armadilhas de fato, uma a uma

- **Universal:** "almost all of the homes without a connection" vale para os 16 distritos do estudo, e a frase o diz ("In the districts it studied"). "Peru's largest region" é por área, como o HKS.
- **Grupo:** o 94,7 % é dos lares sem conexão (F14); "that coastal region" é a Costa do censo (F08); "they" (F09b) é Lima com o Callao, como em 1940.
- **Composição:** F18 (O1) e F19 (O2), declaradas acima; Tacna na fronteira com o Chile (§9), como antes.
- **Período errado:** cada número do F09/F09b com o seu ano; o 2009 do F06 é o ano do documento; o 2024 do F13 é o da página.
- **Réguas trocadas:** Lima Metropolitana com o Callao em 1940 e em 2025 (F09/F09b); a Costa do censo em toda a série (F08).
- **Mecanismo contradito pela fonte:** nenhum; o F04 aproxima a frase do "ascenso del aire húmedo" do SENAMHI.
- **Presente sem data:** "The releases run from May 1 to November 30" (F13) preso à fala de 2024, na mesma frase; o resto como antes.

## A varredura "estado do mundo" (still / today / now / remains / continues e o presente)

Como na rodada anterior, com uma linha mudada: "The releases run from May 1 to November 30, … told its press office in remarks reported in 2024." (§21): presente habitual, preso à fala de 2024 na mesma frase. O resto: o "home to more than ten million" do gancho (censo de 2025); "more than half… sits in lakes" (com "By its 2007 figures" no §18); "a single tunnel" / "the only way" / "only one way through" (SEDAPAL 2021 e Defensoría 2025; sem 2º túnel em 30/08/2026); "carry water to some fields" (datado por "a 2012 study reports"); "The utility regulates 19 lakes and three large reservoirs, he said" (2024, atribuído); "Lima has been planning a second tunnel since the 1990s"; o único "still", datado ("As of late August 2026"); "Every May 1…" (o calendário de 2024); "From May to November, part of its capital's water comes from the other one." O presente do mecanismo (p2) é clima normal, não estado do mundo.

## ACHADOS

Nenhum achado que peça troca. Nenhuma afirmação DIVERGE nem é REFUTADA; nenhuma linha fora de "confirmada".

Observações, que não são defeito de fato:
- **O1 [LEVE, sem troca] · F18, §23 · composição dentro do mesmo despacho.** "AFP reported that those utility deliveries were free." A AFP diz "Blue tanker trucks bring water for free once a week… to parts of San Juan de Miraflores" e põe a entrega semanal na conta da SEDAPAL ("Nicolas Reyes, who works for the city's water utility Sedapal, says it brings in a cubic meter (260 gallons) of water per family per week"), sem dizer numa frase só que os caminhões gratuitos são os da empresa. A ligação é do próprio despacho, e o dossiê (gen.num-35) a lê igual. Fica. Se a Sala quiser zero composição, a troca exata, sem mudar número nem pessoa (REDIZER): "AFP reported that those utility deliveries were free." → "AFP reported that the tanker trucks there delivered for free." (o trecho de F214, "Blue tanker trucks bring water for free once a week", sustenta a frase nova sozinho). → RAIZ: PONTUAL.
- **O2 [registro, sem troca] · F19, §26 · o fecho sem atribuição.** Aceitável, pelas quatro razões da tabela do delta (o INEI 1995 dá as duas causas; o "later" sai das datas da CVR e do censo; "in part" mantém as duas como causas entre outras; a regra de pauta 12 está cumprida em p4, onde as duas causas entram atribuídas). Não é composição de trechos que crie fato novo. → RAIZ: PONTUAL.
- Continuam, de antes: as aspas do INEI (§15) são tradução, e a tela as marca; Tacna na fronteira com o Chile (§9), composição declarada; "three things" (§6) simplifica o SENAMHI, na leitura de mec.afi-02; "for lack of storage" (§9) verte "por la escasa regulación".

## As frases sem afirmação checável (NADA A CHECAR, declarado)

Só uma: "You're at Alpha Point, and this is where the story of Peru's water divide begins." (a assinatura do canal). As duas perguntas retóricas (o fim do gancho e o começo de §26, a mesma frase) levam linha: pressupõem que a maioria mora no lado seco, e isso está apoiado.

## LISTA DE NOMES (anônimo → pessoa nomeável)

- Francisco Pizarro (§12, §13): Cobo 1639 e UNESCO 500.
- Rómulo Cárhuaz (§21): Infobae, 06/09/2024, analista de Manejo de Cuencas da SEDAPAL.
- Catalina Naupa, 59 (§23): AFP, 20/03/2025.
- "An official at the utility" (§23): Nicolas Reyes, "who works for the city's water utility Sedapal" (AFP, 20/03/2025); a voz não precisa do nome (o card o leva).
- Virginia Martínez Morales, 30, e Tula Tinoco Espinoza (§24): KULTURAUSTAUSCH, 26/01/2024 (a reportagem de Elizabeth Salazar Vega).

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- O 2º túnel (§25): Gestión 30/08/2026, sem data de obra. Cresce com uma convocatória da Fase 2; zera com a obra iniciada.
- Os mais de 700.000 sem rede e os 94,7 % por caminhão (§22): Sunass, divulgado em 25/03/2026. Mudam com um estudo novo da Sunass.
- "a single tunnel" / "the only way" / "only one way through" e "more than half… stores": zeram com um 2º túnel ou uma represa nova do lado do Pacífico.
- Lima com o Callao acima de dez milhões e meio (gancho, §16): censo de 2025.
- O calendário de descarga, de 1º de maio a 30 de novembro (§21, §27): a fala de 2024; muda se a SEDAPAL mudar o calendário.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

Nenhuma. (Se a Sala quiser a troca opcional de O1, ela é de uma frase e não mexe em número.)

## PADRÕES

- Ano de relatório e número dito sempre num trecho da própria frase (o portão de fatos o pede); a partição do F09 manteve cada número no trecho da sua frase.
- Imprensa sempre atribuída e datada na voz; a troca de "AFP" por "the news agency AFP" não mudou a atribuição.

## A tabela (uma linha por afirmação)

A tabela inteira, com o trecho literal de cada linha, está em `roteiros/peru-agua/qc-roteiro/fatos-tabela.json` (265 linhas, todas "confirmada"). Resumo por frase (o § é o parágrafo falado, contado de 1):

| Linha | § | Afirmação | Veredito | Fonte | Classe |
|---|---|---|---|---|---|
| F001 | 1 | A divisória de águas pelos Andes reparte o território do Peru em regiões hidrográficas (Pacífico, Amazonas e Titicaca), agrupadas pela 'línea divisoria mayor de las aguas'. | confirmada | doc-03 | texto |
| F002 | 1 | Os rios do lado do Pacífico nascem na alta cordilheira Ocidental dos Andes: a linha corre pelos Andes. | confirmada | mec-01 | texto |
| F003 | 1 | A região hidrográfica do Amazonas tem 74,53 % do território e 97,91 % da água (PNRH, Cuadro 2.3). | confirmada | doc-03 | texto |
| F004 | 1 | 74,53 % = cerca de três quartos; 97,91 % = mais de 97 %. | confirmada | medicao | medicao |
| F005 | 1 | 97,91 % é mais de 97 %. | confirmada | medicao | medicao |
| F006 | 1 | A região hidrográfica do Pacífico tem 1,76 % da água (PNRH, Cuadro 2.3). | confirmada | doc-03 | texto |
| F007 | 1 | 1,76 % arredonda para cerca de 2 %. | confirmada | medicao | medicao |
| F008 | 1 | A maioria dos peruanos mora no lado do Pacífico: 62,53 % em 2012 (PNRH); no presente, o piso é a Costa do censo de 2025 (58,7 %), toda no lado do Pacífico. | confirmada | doc-03 | texto |
| F009 | 1 | O piso de hoje: a Costa do INEI (por distrito) com 58,7 % da população censada em 2025. | confirmada | doc-14 | texto |
| F010 | 1 | O número é a projeção do INEI para 2012 que o PNRH distribuiu por AAA ('figures', não 'count'; R01). | confirmada | doc-03 | texto |
| F011 | 1 | 62,53 % é mais de três em cinco. | confirmada | medicao | medicao |
| F012 | 2 | O desierto costero (MINAM 2019) ocupa uns 65 % da área natural da região costeira (conta do canal; o mapa exclui cidades e lavouras). | confirmada | doc-20 | texto |
| F013 | 2 | Lima recebe 8 mm de chuva por ano (SENAMHI, Campo de Marte, normal do documento 1981–2010). | confirmada | mec-01 | texto |
| F014 | 2 | 8 mm = 0,315 pol. = cerca de um terço de polegada. | confirmada | medicao | medicao |
| F015 | 2 | Província de Lima 9.600.724 e Callao 1.042.857 censados em 2025. | confirmada | doc-14 | texto |
| F016 | 2 | Callao 1.042.857 em 2025. | confirmada | doc-14 | texto |
| F017 | 2 | 10.643.581 = mais de dez milhões. | confirmada | medicao | medicao |
| F018 | 2 | O Callao é o porto vizinho de Lima ('el vecino puerto'). | confirmada | gen-19 | texto |
| F019 | 2 | Na lâmina da SEDAPAL (2007), a capacidade de armazenamento para Lima é 282 MMC, 157 deles na bacia de Marcapomacocha, desenhada sob 'VERTIENTES DEL ATLANTICO' (lagoas). | confirmada | mec-19 | texto |
| F020 | 2 | O lado: as 4 lagoas e a represa Antacoto sob 'VERTIENTES DEL ATLANTICO'. | confirmada | mec-19 | texto |
| F021 | 2 | O presente se sustenta: em 2025 a Defensoría ainda dá ao Mantaro mais de 60 % das reservas (medida que conta o Huascacocha parado; sem ele, ~56 %). | confirmada | lim-01 | texto |
| F022 | 2 | A água guardada do lado do Atlântico só cruza por um túnel ('único medio de trasvase', SEDAPAL 2021, pela ProActivo). | confirmada | lim-06 | imprensa |
| F023 | 2 | A Defensoría (2025) repete: 'un solo túnel trasandino'. | confirmada | lim-01 | texto |
| F024 | 2 | A 1ª etapa, com o túnel, foi feita entre 1958 e 1962 (SENAMHI 2016, adaptado da SEDAPAL). | confirmada | lim-02 | texto |
| F025 | 2 | 1958–1962 e 1963 = começo dos anos 1960. | confirmada | medicao | medicao |
| F026 | 2 | A pergunta pressupõe que a maioria mora no lado seco (ver 1.4): 62,53 % em 2012. | confirmada | doc-03 | texto |
| F027 | 3 | A linha é a divisória continental ('divortium acuarium o línea divisoria mayor de las aguas'), que forma as três vertentes. | confirmada | mec-11 | texto |
| F028 | 3 | Os rios do lado ocidental descem ao Pacífico. | confirmada | mec-01 | texto |
| F029 | 3 | Os rios do lado oriental drenam ao Atlântico pelo Amazonas. | confirmada | mec-01 | texto |
| F030 | 3 | A terceira região, a do Titicaca, tem 3,81 % do território e fica no sudeste. | confirmada | doc-03 | texto |
| F031 | 3 | O Titicaca fica no extremo sul andino (INEA). | confirmada | doc-07 | texto |
| F032 | 3 | A divisória corre pela cordilheira Ocidental (os rios do Pacífico nascem nela). | confirmada | mec-01 | texto |
| F033 | 3 | Dentro do departamento de Lima: a maioria das geleiras vai ao Pacífico e 2 % ao Atlântico (Mantaro). | confirmada | mec-09 | texto |
| F034 | 3 | ... e 2 % ao Atlântico. | confirmada | mec-09 | texto |
| F035 | 3 | Campo de Marte (ponto de Lima do SENAMHI). | confirmada | mec-03 | texto |
| F036 | 3 | A reta até a estação de Marcapomacocha (lado atlântico) mede 66,92 mi e cruza a divisória: menos de 70 milhas. | confirmada | medicao | medicao |
| F037 | 4 | O lado do Pacífico tem 62 bacias de rios curtos, de forte pendente, que descem ao mar ('dozens'). | confirmada | mec-01 | texto |
| F038 | 4 | Rios curtos, de forte pendente (ANA 2009). | confirmada | mec-11 | texto |
| F039 | 4 | O Rímac é um dos principais rios que desembocam no Pacífico. | confirmada | mec-11 | texto |
| F040 | 4 | ... a lista inclui o Rímac. | confirmada | mec-11 | texto |
| F041 | 4 | Os rios do lado atlântico são mais longos e caudalosos e drenam pelo Amazonas. | confirmada | mec-01 | texto |
| F042 | 4 | Loreto é o maior departamento do Peru (Harvard Growth Lab); 'region' é o nome que o mesmo texto dá aos departamentos (F042b). | confirmada | gen-18 | texto |
| F043 | 4 | Loreto tem uma das menores densidades (2,4 hab./km², 2017). | confirmada | gen-01 | texto |
| F042b | 4 | O HKS chama os departamentos vizinhos de Loreto de 'regions' (San Martín e Ucayali): 'Peru's largest region' = o maior departamento. | confirmada | gen-18 | texto |
| F044 | 4 | Atribuído: 'Iquitos can only be reached by air or river' (HKS, 2023). | confirmada | gen-18 | texto |
| F045 | 4 | Iquitos é a capital de Loreto. | confirmada | gen-18 | texto |
| F046 | 5 | O PNRH dá território, gente e água por região hidrográfica num quadro só (Cuadro 2.3). | confirmada | doc-03 | texto |
| F047 | 5 | Dois lados: o do Pacífico e o do Amazonas (as linhas do Cuadro 2.3). | confirmada | medicao | medicao |
| F048 | 5 | O Pacífico tem 21,67 % do território: menos de um quarto. | confirmada | doc-03 | texto |
| F049 | 5 | Água por habitante: 1.815,61 m³/ano no Pacífico contra 189.167,18 no Amazonas. | confirmada | doc-03 | texto |
| F050 | 5 | 189.167,18 ÷ 1.815,61 = 104,2: cerca de cem vezes. | confirmada | medicao | medicao |
| F051 | 5 | A ANA chama o arranjo de paradoxal ('paradójicamente'), sem número ao lado (R05, R23). | confirmada | doc-01 | texto |
| F051b | 5 | 'that imbalance': a ANA diz que as três vertentes desequilibram a distribuição espacial da água, e chama de paradoxal ('paradójicamente') a população concentrada na vertente do Pacífico, a de menos água. | confirmada | doc-01 | texto |
| F052 | 5 | Para o SENAMHI, o anticiclone sobre o Pacífico é 'el causante principal de la aridez de la Costa peruana'. | confirmada | mec-01 | texto |
| F053 | 6 | O anticiclone do Pacífico Sul é um sistema de alta pressão permanente sobre o oceano, que cria subsidência. | confirmada | mec-01 | texto |
| F054 | 6 | ... e ele cria subsidência (o ar desce). | confirmada | mec-01 | texto |
| F055 | 6 | A corrente de Humboldt, os afloramentos (ressurgência) e a capa de nuvens baixas mantêm o mar anomalamente frio para a latitude (com os alísios como agente: mec.afi-02 corrigido). | confirmada | mec-01 | texto |
| F056 | 6 | ... 'anómalamente baja, en relación a su media latitudinal'. | confirmada | mec-01 | texto |
| F057 | 6 | Três coisas no mar. | confirmada | medicao | medicao |
| F058 | 6 | O mar frio esfria o ar que circula sobre ele. | confirmada | mec-01 | texto |
| F059 | 6 | A subsidência mantém a camada de inversão (o ar mais quente por cima). | confirmada | mec-05 | texto |
| F060 | 6 | O mar frio, a subsidência e a inversão limitam a subida do ar para formar nuvens de chuva. | confirmada | mec-01 | texto |
| F061 | 6 | Formam-se nevoeiros e nuvens baixas (estratos) e garoa. | confirmada | mec-01 | texto |
| F062 | 6 | Nevoeiros e neblinas costeiras. | confirmada | mec-01 | texto |
| F063 | 7 | O sistema se vê quando enfraquece: no El Niño o anticiclone se debilita. | confirmada | mec-01 | texto |
| F064 | 7 | No El Niño, os alísios se debilitam e os afloramentos diminuem ou desaparecem. | confirmada | mec-01 | texto |
| F065 | 7 | A água quente substitui a fria sobretudo no extremo norte; a TSM sobe até 10 °C, com chuvas intensas e inundações. | confirmada | mec-01 | texto |
| F066 | 7 | ... 'generándose lluvias intensas e inundaciones'. | confirmada | mec-01 | texto |
| F067 | 7 | 8 mm por ano, 'en forma de lloviznas' (normal). | confirmada | mec-01 | texto |
| F068 | 7 | 8 mm = cerca de um terço de polegada. | confirmada | medicao | medicao |
| F069 | 7 | Citação atribuída, letra a letra em espanhol: 'una de las ciudades más grandes del mundo ubicada en un desierto'. | confirmada | mec-01 | texto |
| F070 | 8 | A cordilheira contribui ('contribuyendo') para a aridez da costa. | confirmada | mec-01 | texto |
| F071 | 8 | Até uns 5.000 m, as cordilheiras do centro e do sul bloqueiam o ar úmido amazônico. | confirmada | mec-01 | texto |
| F072 | 8 | 5.000 m = 16.404 pés: cerca de 16.000. | confirmada | medicao | medicao |
| F073 | 8 | As vertentes favorecem as nuvens de chuva orográfica. | confirmada | mec-01 | texto |
| F073b | 8 | O ar úmido amazônico sobe forçado pela cordilheira ('efecto de forzamiento orográfico') e forma nuvens de chuva: o ar sobe, e a umidade dele cai como chuva. | confirmada | mec-01 | texto |
| F074 | 8 | Satipo: 2.013 mm por ano (normal OMM 1991–2020), a leste dos Andes (R58). | confirmada | mec-02 | texto |
| F075 | 8 | Total anual 2.013,00 mm. | confirmada | mec-02 | texto |
| F076 | 8 | 2.013 mm = 6,6 pés: mais de seis pés. | confirmada | medicao | medicao |
| F077 | 8 | A chuva do lado do Pacífico cai no verão austral sobre a vertente ocidental (no alto). | confirmada | mec-11 | texto |
| F078 | 8 | Uns 80 % da chuva da bacia úmida do Pacífico caem de dezembro a março. | confirmada | mec-11 | texto |
| F079 | 8 | Essa chuva dá nascimento a rios pequenos de regime torrencial. | confirmada | mec-11 | texto |
| F080 | 8 | Os rios do Pacífico são 'prácticamente secos en invierno' (SINIA; o Lavado mostra que não todos: 'some'). | confirmada | mec-13 | texto |
| F081 | 9 | ANA 2009: na bacia úmida do Pacífico, cerca de 50 % (17.542 MMC) da cheia volta direto ao mar pela escassa regulação. | confirmada | mec-11 | texto |
| F082 | 9 | O documento é de 2009 (24/04/2009). | confirmada | mec-11 | texto |
| F083 | 9 | Desierto costero: 7.107.338,20 ha (MINAM 2019). | confirmada | doc-20 | texto |
| F084 | 9 | 7.107.338,20 ha = 27.442 mi²: cerca de 27.000. | confirmada | medicao | medicao |
| F085 | 9 | Distribuição do deserto costeiro: de Piura a Tacna (MINAM 2018). | confirmada | doc-19 | texto |
| F086 | 9 | A costa vai da fronteira do Equador à do Chile; Tacna, o último departamento da lista, é o da fronteira com o Chile (composição declarada: nenhuma cópia diz a vizinhança com essas palavras). | confirmada | doc-07 | texto |
| F087 | 9 | Caral tem 5.000 anos e fica num terraço de deserto (UNESCO). | confirmada | gen-11 | texto |
| F088 | 9 | 5000-year-old = cerca de 5.000 anos. | confirmada | medicao | medicao |
| F089 | 10 | Caral fica num terraço de deserto sobre o vale verde do Supe. | confirmada | gen-11 | texto |
| F090 | 10 | Coordenada da UNESCO: S10 53 30 W77 31 17. | confirmada | gen-11 | texto |
| F091 | 10 | Campo de Marte → Caral = 87,65 mi em linha reta: cerca de 90. | confirmada | medicao | medicao |
| F092 | 10 | Atribuído à UNESCO: 'the oldest centre of civilization in the Americas'. | confirmada | gen-11 | texto |
| F093 | 10 | As chuvas da vertiente ocidental dão rios torrenciais que originam os vales costeiros, separados por planícies desérticas. | confirmada | mec-11 | texto |
| F094 | 10 | A faixa desértica é interrompida por vales de rios da cordilheira Ocidental. | confirmada | mec-01 | texto |
| F095 | 11 | No vale do Moche, o território árido foi feito cultivável ao longo dos séculos por canais e irrigação. | confirmada | gen-16 | texto |
| F096 | 11 | O território descrito é o da costa norte, entre os vales do Moche e do Chicama. | confirmada | gen-16 | texto |
| F097 | 11 | Chan Chan, capital chimú, no vale do Moche; para a UNESCO, 'the largest earthen city of pre-Columbian America'. | confirmada | gen-12 | texto |
| F098 | 11 | Capital do reino Chimu, no vale do Moche. | confirmada | gen-12 | texto |
| F099 | 11 | Um canal de uns 80 km sustentava a região em volta de Chan Chan (no passado). | confirmada | gen-12 | texto |
| F100 | 11 | 80 km = 49,7 mi: cerca de 50. | confirmada | medicao | medicao |
| F101 | 11 | Estudo de 2012 (Springer): puquios, aquedutos subterrâneos do vale do Nasca, alguns ainda em uso. | confirmada | gen-15 | texto |
| F102 | 11 | O estudo é de 2012. | confirmada | gen-15 | texto |
| F103 | 11 | A origem é atribuída ao período nasca (Middle Nasca), pela arqueologia citada; a datação é contestada (R54: 'commonly attributed'). | confirmada | gen-15 | texto |
| F104 | 12 | Auto do cabildo de Jauja de 28/11/1534 (Cobo). | confirmada | gen-19 | texto |
| F105 | 12 | Os vizinhos opinam que o povoado principal vá ao mar (o auto começa pela opinião de Pizarro: R15, R27). | confirmada | gen-19 | texto |
| F106 | 12 | Os motivos: terra fria, de muita neve, a 40 léguas do mar, caminho despovoado. | confirmada | gen-19 | texto |
| F107 | 12 | ... 40 léguas do mar e o caminho muito despovoado. | confirmada | gen-19 | texto |
| F108 | 12 | Muitos indígenas carregados com mantimentos morreram por isso. | confirmada | gen-19 | texto |
| F109 | 12 | ... carregados com mantimentos para os vizinhos. | confirmada | gen-19 | texto |
| F110 | 12 | Ordem de Pizarro em Pachacamac, 06/01/1535: o sítio 'por estar como está junto á él muy buen puerto' (uma das razões: 'partly'). | confirmada | gen-19 | texto |
| F111 | 12 | Data: 6 de janeiro de 1535. | confirmada | gen-19 | texto |
| F112 | 12 | A mesma ordem: 'está en comedio de tierra donde los dichos indios puedan servir con poco trabajo'. | confirmada | gen-19 | texto |
| F113 | 13 | Lima foi fundada por Pizarro em janeiro de 1535, no vale do Rímac (UNESCO). | confirmada | gen-14 | texto |
| F114 | 13 | O porto do Callao, vizinho de Lima (Cobo). | confirmada | gen-19 | texto |
| F115 | 13 | UNESCO: até meados do século XVIII, capital e cidade mais importante dos domínios espanhóis na América do Sul. | confirmada | gen-14 | texto |
| F116 | 13 | Meados do séc. XVIII = mid-1700s. | confirmada | medicao | medicao |
| F117 | 13 | Lima fica no lado do Pacífico (o Rímac é rio do Pacífico). | confirmada | mec-11 | texto |
| F118 | 13 | Em 1940 a Sierra tinha 65,0 % da população; a Costa, 28,3 %. | confirmada | doc-10 | texto |
| F119 | 14 | Censo de 1940: Sierra 65,0 %, a maioria. | confirmada | doc-14 | texto |
| F120 | 14 | Os censos começam em 1940. | confirmada | doc-14 | texto |
| F121 | 14 | Costa 28,3 % em 1940. | confirmada | doc-14 | texto |
| F122 | 14 | 28,3 % < três em dez. | confirmada | medicao | medicao |
| F123 | 14 | A Costa do censo vai só até os contrafortes (até 2.000 m, na página antiga do censo de 1993): parte do lado seco. | confirmada | gen-04 | texto |
| F124 | 14 | A série censo a censo: Costa 28,3 · 39,0 · 46,1 · 49,8 · 52,4 · 54,6 · 58,0 · 58,7. | confirmada | doc-14 | texto |
| F125 | 14 | 1961: Costa 39,0, Sierra 52,3; 1972: Costa 46,1, Sierra 44,0 (passou a maior, sem maioria). | confirmada | doc-14 | texto |
| F126 | 14 | Anos dos censos. | confirmada | doc-14 | texto |
| F127 | 14 | 1993: Costa 52,4 %, mais da metade. | confirmada | doc-14 | texto |
| F128 | 14 | Ano do censo. | confirmada | doc-14 | texto |
| F129 | 14 | 2025: Costa 58,7 %. | confirmada | doc-14 | texto |
| F130 | 14 | 58,7 % = quase seis em dez. | confirmada | medicao | medicao |
| F131 | 14 | Ano do censo. | confirmada | doc-14 | texto |
| F129b | 14 | 'that coastal region': a série de 1940 a 2025 é uma só, a da região natural do censo, definida por distrito; a Costa de 2025 é a mesma 'region the census calls the coast'. | confirmada | doc-14 | texto |
| F132 | 15 | Movimentos migratórios para a Selva ('selvatización', INEI 1995). | confirmada | gen-03 | texto |
| F133 | 15 | Citação atribuída ao INEI (2017/2018), tradução fiel: 'de ser predominantemente andina ha pasado a ser mayoritariamente costeña'. | confirmada | doc-10 | texto |
| F134 | 15 | INEI 1995: a escassez de terras de cultivo (com o deterioro agrário e a violência) explica a vontade de emigrar da serra. | confirmada | gen-03 | texto |
| F135 | 15 | INEI 1995: a Costa, principal receptor dos fluxos migratórios andinos. | confirmada | gen-03 | texto |
| F136 | 15 | O estudo é de setembro de 1995. | confirmada | gen-03 | texto |
| F137 | 15 | A violência de 1980–2000 levou ao deslocamento de ~meio milhão (CVR); as rotas incluem Lima. | confirmada | gen-08 | texto |
| F138 | 15 | 1980–2000 = os anos 1980 e '90. | confirmada | medicao | medicao |
| F139 | 15 | CVR: 'alrededor de medio millón de personas abandonaron sus localidades'. | confirmada | gen-08 | texto |
| F140 | 15 | Muitos migraram para Lima fugindo da violência. | confirmada | gen-08 | texto |
| F141 | 15 | Medio millón = meio milhão. | confirmada | medicao | medicao |
| F142 | 16 | 1940: Lima Metropolitana 645.172 (INEI 1995), de 6.207.967. | confirmada | gen-03 | texto |
| F143 | 16 | Lima Metropolitana compreende a província de Lima e a do Callao. | confirmada | gen-04 | texto |
| F144 | 16 | 645.172 = cerca de 650.000 (e o ano 1940). | confirmada | medicao | medicao |
| F145 | 16 | 2025: Lima 9.600.724 + Callao 1.042.857 = 10.643.581 = mais de dez milhões e meio. | confirmada | medicao | medicao |
| F146 | 16 | 645.172 ÷ 6.207.967 = 10,4 %: cerca de um em dez. | confirmada | medicao | medicao |
| F147 | 16 | 32,5 % em 2025: cerca de um terço. | confirmada | medicao | medicao |
| F148 | 16 | Ano do censo de 2025 (provincias). | confirmada | doc-14 | texto |
| F145b | 16 | 2025: Lima Metropolitana (a província) 9.600.724 censados. | confirmada | doc-14 | texto |
| F145c | 16 | 2025: Callao 1.042.857 censados. | confirmada | doc-14 | texto |
| F149 | 16 | 2022: o departamento de Lima teve a maior participação no PIB, 41,9 % (a preços correntes; 2022 é estimativa, '2022E/'). | confirmada | doc-17 | texto |
| F150 | 16 | O ano e a estimativa. | confirmada | doc-17 | texto |
| F151 | 16 | Lima inclui o Callao no documento. | confirmada | doc-17 | texto |
| F152 | 16 | 41,9 % = mais de 40 %. | confirmada | medicao | medicao |
| F153 | 17 | Censo de 1993: 38,8 % da população metropolitana era de origem migrante (CVR). | confirmada | gen-07 | texto |
| F154 | 17 | 38,8 % = quase quatro em dez. | confirmada | medicao | medicao |
| F155 | 17 | A população imigrante organiza invasões de terras na periferia e constrói moradias precárias. | confirmada | gen-07 | texto |
| F156 | 17 | 1971: invasões de terrenos em Pamplona. | confirmada | gen-17 | texto |
| F157 | 17 | 180 famílias iniciaram a primeira 'oleada' da invasão. | confirmada | gen-17 | texto |
| F158 | 17 | Tratou-se de reassentar umas 7.000 famílias num areal ao sul de Lima (OCR: 'semi-de- cértico' = semi-desértico). | confirmada | gen-17 | texto |
| F159 | 17 | A zona da reubicação: um extenso areal ao sul de Lima. | confirmada | gen-17 | texto |
| F158b | 17 | 'then': a ação do governo veio depois da invasão e por causa dela ('Todos estos hechos provocaron la acción inmediata del Gobierno'; 'Luego de todos esos acontecimientos', 'Se trato, entonces de ubicar'). | confirmada | gen-17 | texto |
| F160 | 17 | O pueblo joven Villa El Salvador nasceu em maio de 1971. | confirmada | gen-17 | texto |
| F161 | 17 | 1981: 1'171,800 de 4'608,010 nos pueblos jóvenes = 25,5 % (INEI 1996, na tabela da CVR). | confirmada | gen-07 | texto |
| F162 | 17 | Fonte da tabela: INEI, Lima Metropolitana, perfil sociodemográfico, 1996. | confirmada | gen-07 | texto |
| F163 | 17 | 25,5 % = cerca de um em quatro. | confirmada | medicao | medicao |
| F164 | 17 | Os assentamentos se chamam barriadas. | confirmada | gen-07 | texto |
| F165 | 17 | O Rímac fica baixo de maio a novembro (7 meses). | confirmada | lim-01 | texto |
| F166 | 17 | Maio a novembro = sete meses. | confirmada | medicao | medicao |
| F167 | 18 | Cheia de dezembro a abril, ~30 m³/s (Defensoría 2025). | confirmada | lim-01 | texto |
| F168 | 18 | Estiagem de maio a novembro: 7,8 m³/s (Defensoría 2025). | confirmada | lim-01 | texto |
| F169 | 18 | A SEDAPAL capta, armazena e conduz a água das lagoas altoandinas. | confirmada | lim-06 | imprensa |
| F170 | 18 | A reserva é para uso nos meses de estiagem (maio a novembro). | confirmada | lim-06 | imprensa |
| F171 | 18 | Lâmina da SEDAPAL de 2007: 157 de 282 MMC na bacia de Marcapomacocha (lado atlântico). | confirmada | mec-19 | texto |
| F172 | 18 | O arquivo é de 2007 (o gráfico vizinho: 'A Febrero 2007'). | confirmada | mec-19 | texto |
| F173 | 19 | As lagoas do Marca I ficam acima de 4.500 m; a represa Antacoto a 4.445 m. | confirmada | lim-01 | texto |
| F174 | 19 | Antacoto, 4.445 msnm (SEDAPAL 2007). | confirmada | mec-19 | texto |
| F175 | 19 | 4.445–4.500 m = 14.583–14.764 pés: quase 15.000. | confirmada | medicao | medicao |
| F176 | 19 | A bacia do Mantaro é da vertente do Atlântico, ou amazônica. | confirmada | lim-01 | texto |
| F177 | 19 | A parte alta do Mantaro. | confirmada | lim-02 | texto |
| F178 | 19 | Canal Marcapomacocha–Cuevas de 11,9 km e túnel Cuevas–Milloc de 10,1 km (JICA, 2002). | confirmada | lim-05 | texto |
| F179 | 19 | 22,0 km = 13,67 mi: cerca de 14. | confirmada | medicao | medicao |
| F180 | 19 | A água chega à cabeceira do Santa Eulalia, afluente do Rímac, na vertente do Pacífico. | confirmada | lim-05 | texto |
| F181 | 19 | A captação no Rímac: as bocatomas de La Atarjea. | confirmada | lim-01 | texto |
| F182 | 19 | La Atarjea faz 70 % da produção: a planta principal. | confirmada | lim-01 | texto |
| F183 | 19 | Capacidade do canal e do túnel: 14 m³/s (contra 7,8 m³/s do Rímac na estiagem). | confirmada | lim-05 | texto |
| F184 | 20 | 1ª etapa, com o túnel, entre 1958 e 1962 (SENAMHI 2016). | confirmada | lim-02 | texto |
| F185 | 20 | O Marca I entrou em operação em 1963 (Defensoría 2025). | confirmada | lim-01 | texto |
| F186 | 20 | Atribuído ao SENAMHI: a finalidade foi cobrir a demanda elétrica (Huinco), 'además de afianzar el caudal de río Rímac' (R09); 'steady the flow' verte 'afianzar el caudal'. | confirmada | lim-02 | texto |
| F187 | 20 | ... a segunda finalidade. | confirmada | lim-02 | texto |
| F188 | 20 | A Central Hidroeléctrica Huinco: ano de início 1964 (SENAMHI 2016, tabela 3-2). | confirmada | lim-02 | texto |
| F188b | 20 | Huinco é uma central hidrelétrica: 'the power plant'. | confirmada | lim-02 | texto |
| F189 | 21 | A SEDAPAL: o túnel é o único meio de trasvase da água armazenada nas lagoas do Atlântico (2021, pela ProActivo). | confirmada | lim-06 | imprensa |
| F190 | 21 | Chillón, Lurín e Rímac dão água a Lima e Callao. | confirmada | lim-01 | texto |
| F191 | 21 | 442 poços. | confirmada | lim-01 | texto |
| F192 | 21 | Dois outros rios: o Chillón e o Lurín. | confirmada | medicao | medicao |
| F193 | 21 | Infobae (atualizada em 06/09/2024): Rómulo Cárhuaz, analista de Manejo de Cuencas da SEDAPAL. | confirmada | gen-21 | imprensa |
| F194 | 21 | ... numa entrevista feita pela área de Comunicações da SEDAPAL. | confirmada | gen-21 | imprensa |
| F195 | 21 | Período de descarga: de 1º de maio a 30 de novembro. | confirmada | gen-21 | imprensa |
| F196 | 21 | Data da página. | confirmada | gen-21 | imprensa |
| F197 | 21 | 19 lagoas reguladas e três grandes represas (fala de Cárhuaz). | confirmada | gen-21 | imprensa |
| F198 | 21 | 'tres grandes represas' = three large reservoirs. | confirmada | medicao | medicao |
| F199 | 21 | O túnel transvasa a água ao Rímac. | confirmada | lim-06 | imprensa |
| F200 | 21 | Mais de 700 mil pessoas sem conexão à rede em Lima e Callao (Sunass, pela Gestión, 03/2026). | confirmada | lim-14 | imprensa |
| F201 | 22 | Sunass, pela Gestión: mais de 700 mil pessoas sem conexão em Lima e Callao. | confirmada | lim-14 | imprensa |
| F202 | 22 | Estudo da Sunass (o regulador), divulgado em 25/03/2026. | confirmada | lim-14 | imprensa |
| F203 | 22 | 700 mil = 700.000. | confirmada | medicao | medicao |
| F204 | 22 | Nos 16 distritos periurbanos estudados, 94,7 % dos lares sem conexão se abasteciam por caminhão-pipa (2025). | confirmada | lim-14 | imprensa |
| F205 | 22 | O estudo em 16 distritos periurbanos. | confirmada | lim-14 | imprensa |
| F206 | 22 | Pagam 6 vezes mais que os conectados ('about six times', R17). | confirmada | lim-14 | imprensa |
| F204b | 22 | O 94,7 % é dos lares SEM conexão (a mesma medida deu 88 % em 2015), nos 16 distritos do estudo: 'the homes without a connection'. | confirmada | lim-14 | imprensa |
| F207 | 23 | AFP, 20/03/2025: Catalina Naupa, 59 anos, moradora de San Juan de Miraflores, ao sul da cidade, onde a água chega por caminhão. | confirmada | gen-22 | imprensa |
| F208 | 23 | Caminhões-pipa levam água a partes de San Juan de Miraflores, ao sul. | confirmada | gen-22 | imprensa |
| F209 | 23 | Data do despacho. | confirmada | gen-22 | imprensa |
| F210 | 23 | Citação letra a letra. | confirmada | gen-22 | imprensa |
| F211 | 23 | Ela lava roupa uma vez por semana ou a cada duas, para poupar água. | confirmada | gen-22 | imprensa |
| F212 | 23 | Nicolas Reyes, que trabalha na SEDAPAL: um metro cúbico (260 galões) por família por semana. | confirmada | gen-22 | imprensa |
| F213 | 23 | ... às partes do distrito sem rede. | confirmada | gen-22 | imprensa |
| F214 | 23 | Os caminhões levam a água de graça. | confirmada | gen-22 | imprensa |
| F214b | 23 | 'utility deliveries': a AFP põe a entrega na conta da SEDAPAL ('it brings in a cubic meter', por família por semana), logo depois dos caminhões que levam a água de graça uma vez por semana; ligação do próprio despacho, declarada (o dossiê, gen.num-35, lê igual: 'atendidas de graça pela SEDAPAL'). | confirmada | gen-22 | imprensa |
| F215 | 24 | KULTURAUSTAUSCH (revista do ifa, alemã), 26/01/2024: duas cooperativas em Puente Piedra, ao norte de Lima. | confirmada | gen-23 | imprensa |
| F216 | 24 | Data da reportagem. | confirmada | gen-23 | imprensa |
| F217 | 24 | A revista é alemã (o ifa e o 'German debate'). | confirmada | gen-23 | imprensa |
| F218 | 24 | Duas cooperativas: Siempre Unidos de Villa Verde e Los Condes. | confirmada | gen-23 | imprensa |
| F219 | 24 | ... e Los Condes. | confirmada | gen-23 | imprensa |
| F220 | 24 | Duas cooperativas. | confirmada | medicao | medicao |
| F221 | 24 | Virginia Martínez Morales, 30 anos, três filhos, canaliza a água até a porta. | confirmada | gen-23 | imprensa |
| F222 | 24 | ... 'now I can at least pipe the water to my front door'. | confirmada | gen-23 | imprensa |
| F223 | 24 | Los Condes: 42 famílias, sem água, esgoto nem eletricidade. | confirmada | gen-23 | imprensa |
| F224 | 24 | Um caminhão-pipa deslizou e levou três casas; desde então os motoristas evitam as partes mais íngremes de Los Condes. | confirmada | gen-23 | imprensa |
| F225 | 24 | ... os motoristas evitam as partes mais íngremes. | confirmada | gen-23 | imprensa |
| F226 | 24 | Tula Tinoco Espinoza agora carrega baldes. | confirmada | gen-23 | imprensa |
| F227 | 24 | A maioria veio das regiões andinas em busca de trabalho melhor. | confirmada | gen-23 | imprensa |
| F228 | 25 | A água guardada do outro lado só cruza pelo túnel ('único medio'). | confirmada | lim-06 | imprensa |
| F229 | 25 | Defensoría (2025), citando a SEDAPAL 2019: depender de um só túnel, com potencial risco de colapso em sismos de alta intensidade. | confirmada | lim-01 | texto |
| F230 | 25 | SEDAPAL 2019 é o Plano Mestre Otimizado da empresa. | confirmada | lim-01 | texto |
| F231 | 25 | A edição é de fevereiro de 2025. | confirmada | lim-01 | texto |
| F232 | 25 | O estudo definitivo do novo túnel foi feito em 1996 (SENAMHI 2016). | confirmada | lim-02 | texto |
| F233 | 25 | 1996 = desde os anos 1990. | confirmada | medicao | medicao |
| F234 | 25 | Gestión, 30/08/2026: o túnel de 10 km está na Fase 2. | confirmada | lim-10 | imprensa |
| F235 | 25 | A convocatória da Fase 2 depende do planejamento: sem data. | confirmada | lim-10 | imprensa |
| F236 | 25 | Data da matéria. | confirmada | lim-10 | imprensa |
| F237 | 25 | 30/08/2026 = fim de agosto de 2026. | confirmada | medicao | medicao |
| F238 | 26 | A maioria mora no lado seco (ver 1.4). | confirmada | doc-03 | texto |
| F239 | 26 | O lado seco tem menos de 2 % da água. | confirmada | doc-03 | texto |
| F240 | 26 | Caral, há 5.000 anos, num terraço sobre o vale do Supe. | confirmada | gen-11 | texto |
| F241 | 26 | 5.000 anos. | confirmada | medicao | medicao |
| F242 | 26 | 1535: a capital junto a um muy buen puerto (Cobo). | confirmada | gen-19 | texto |
| F243 | 26 | ... 'muy buen puerto'. | confirmada | gen-19 | texto |
| F244 | 26 | No século XX, a Costa foi de 28 % a 52 % (1940–1993): a descida da serra, com a Costa como principal receptor. | confirmada | gen-03 | texto |
| F244b | 26 | 'pushed in part by a shortage of farmland': o INEI 1995 dá a escassez de terras de cultivo, com o deterioro agrário e a violência, 'entre otros', para a vontade de emigrar da serra. | confirmada | gen-03 | texto |
| F244c | 26 | 'and later by violence': a violência é de 1980 a 2000 (CVR), depois de quatro décadas de descida (a Costa já tinha 49,8 % em 1981). | confirmada | gen-08 | texto |
| F245 | 26 | Século XX. | confirmada | medicao | medicao |
| F246 | 26 | Canais nos vales (Moche, Chan Chan). | confirmada | gen-16 | texto |
| F247 | 26 | O túnel desde o começo dos anos 1960. | confirmada | lim-02 | texto |
| F248 | 26 | Começo dos anos 1960. | confirmada | medicao | medicao |
| F249 | 26 | Na borda da cidade, por caminhão. | confirmada | gen-22 | imprensa |
| F250 | 27 | A descarga vai de 1º de maio a 30 de novembro (Cárhuaz). | confirmada | gen-21 | imprensa |
| F251 | 27 | A água guardada do lado atlântico cruza ao Rímac pelo túnel. | confirmada | lim-06 | imprensa |
| F252 | 27 | O Peru mora no lado seco (62,53 % em 2012; a Costa com 58,7 % em 2025). | confirmada | doc-14 | texto |
| F253 | 27 | De maio a novembro, a reserva do outro lado é usada. | confirmada | lim-06 | imprensa |

## Comparação com a rodada anterior

O laudo anterior (`fatos-r2-antigo.laudo.md`, sobre `44ec6a38887f`) deu PASS, com 253 de 253 linhas confirmadas, nota 9,5 e nenhum achado. Esta rodada mexe só nas frases das 20 trocas da Sala (F01–F19 e F09b): todas CONFIRMADAS, com 12 linhas novas de apoio. A nota fica em 9,5: entra uma composição leve (O1), e a imprecisão do mecanismo em §8 ("that air rises and falls as rain") sai com o F04. Nada que a rodada anterior confirmou virou defeito aqui.

VEREDITO: PASS
