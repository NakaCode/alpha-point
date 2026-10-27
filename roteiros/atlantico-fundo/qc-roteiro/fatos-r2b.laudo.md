# Laudo · verificador de fatos (independente, da Sala de controle) · bancada final da rodada 2 · atlantico-fundo

Revisão julgada: `432dcb4041d4` · data-base 2026-10-26 (a bancada anterior julgou `04ae6bfbeb60`, nos laudos `-r2`)

COBERTURA: 282 de 282 linhas da tabela com veredito "confirmada" (afirmações checáveis em 136 frases do texto falado de `432dcb4041d4`; ficam sem linha 9 frases que não afirmam fato: a pergunta e a assinatura do gancho, "A sound could give a number.", "It couldn't show anyone what was down there.", "Keep those fish in mind.", as três pontes de p2 para p3 e "Why is the trench so deep?"). CHECADO POR INTEIRO.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md`, sha256 `432dcb4041d4f0e31fab934bdd956370fca43cffcefe3d17e537b2af01f3dfb5`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: PASSA, 2.026 palavras, 29 parágrafos, 160 frases, média 12,7, maior 28, gancho com 166 palavras até a assinatura e o "But" na 49ª, 0 problemas, autoplágio vazio. Os 8 alertas são os de antes, já decididos: "never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho (o passado do estudo de 2019).
- **Como a lista foi derivada: à mão, por cobertura, não por amostra.** O canal não tem extrator de afirmações. Li as 160 frases do portão (a regex de `frasesDe`; "U.S." e "HMS" partem frases ao meio, e por isso a tabela as junta: 145 frases de verdade), uma a uma, e para cada afirmação checável (número, data, nome, atribuição, citação, causa, comparação, estado do mundo) achei a frase da cópia local que a sustenta. Não reaproveitei veredito da bancada anterior: a tabela inteira foi refeita sobre o texto de hoje, e o laudo `fatos-r2.laudo.md` só foi lido depois de esta tabela e este laudo estarem escritos ("Comparação com a bancada anterior", no fim).
- **O diff:** `_trabalho/roteiro-r2.antes.md` (`04ae6bfbeb60`) contra o texto de hoje dá as 20 diferenças de `_trabalho/aplicado-r2.md` (24 itens da `lista-r2.json`, L43–L66; não há `pedidos-r2-feito.md`, e o `pedidos-r2.json` tem `itens: []`). Conferi cada diferença palavra a palavra: fora dos 24 itens, o texto é idêntico ao que a bancada anterior leu. As frases mudadas foram verificadas por inteiro, com o que mudou em volta ("## O delta da rodada 2", abaixo); as que não mudaram foram verificadas de novo do mesmo jeito, porque a tabela é de hoje.
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (`fatos`, `nao_se_diz`, `correcoes` com a C28, `nomes` com a N51, `abertos`, `regras_de_pauta`; S72 e S73 para os glossários) como mapa, e a cópia local de cada fonte (`midia/atlantico-fundo/fontes/`, pelos índices `pautas/atlantico-fundo/fontes-local-a.json`, `-b.json` e `-sala.json`) como prova. Cada `trecho` da tabela é literal da cópia (≥ 4 palavras, sem reticências; imprensa com até 20 palavras), conferido com as funções do próprio portão antes de rodá-lo. Rede: não usei. Nenhum site que recusa robô foi tocado (o Census API, a página da OGL dos National Archives e os webapps da BGS ficam como estavam: nenhuma frase depende deles).
- **As decisões da Sala que este laudo não reabre:** (a)–(c) e 1–8 da tarefa: a C28 e a N51 corrigidas na raiz do dossiê; "more than 1,000 feet" no gancho; "its crew"; "spread about as thickly"; o F43 sem "anomaly"; os glossários S72/S73; as regras [gancho-1200], [tripulacao-francesa] e [porque-sem-dono]; o pouso de p3 ("That, the agency suggests, is why the trench is so deep."); a ponte de p4 cortada; "1964 crew"/"that crew" em p7 e p8; a assinatura, p4 e p7 como estão; nenhum fato novo. Conferi só que o texto de hoje as cumpre, e cumpre.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, 282 linhas, todas `confirmada`, em três classes: **texto (221)**, **imprensa (14: a Popular Science de 21/12/2018, o The Sun de 28/07/1939 e a AP do Everest; cada trecho com até 20 palavras)** e **medição (47, `qc-roteiro/fatos-medidas.txt`)**.
- **As medidas, refeitas por este verificador, com a conta à vista:** `qc-roteiro/fatos-medidas.txt` foi regravado por `pautas/atlantico-fundo/_trabalho/scripts/verificador-r3-medidas.py` (Vincenty inverso no WGS84, escrito à mão, sem biblioteca de geodésia; a costa mais perto por varredura de segmentos, nas duas réguas: Natural Earth 10m e o `cb_2025_us_county_500k` do Census). As 50 linhas (V01–V50) trazem cada conversão m → ft (÷ 0,3048), m → mi (÷ 1.609,344), braça → pé (× 6), mm → in (÷ 25,4), cada diferença e cada distância. As que a voz usa: 83 mi (134,3 km = 83,47 mi até Aguadilla; 82,93 mi pela costa do Natural Earth); 8.378 m = 27.486,9 ft = 5,206 mi; 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft; 15.269,6 km = 9.488 mi até o Challenger Deep; 8.740 − 8.408 = 332 m = 1.089,2 ft e 8.740 − 8.378 = 362 m = 1.187,7 ft (as duas réguas da C28); 4.561 × 6 = 27.366 ft = 5,183 mi; 96,2 km = 59,75 mi da sondagem do Blake; 3.875 × 6 = 23.250 ft; 7.300 m = 4,536 mi = 23.950 ft; 20 cm = 7,87 in; 8.320 m = 27.297 ft; 2018 − 2003 = 15; 20 mm = 0,787 in; +1.300 m = 4.265 ft; −4.000 m = 13.123 ft; 6,1 m = 20,0 ft; 10 km = 6,21 mi; 5.999,7 m = 19.684 ft; 5 m = 16,4 ft; 2 m = 6,56 ft; 8.740 m = 28.674,5 ft (5,5 ft do 28.680 do jornal); 7.450 m = 24.442 ft; 57,3 km = 35,58 mi; 160,4 km = 99,68 mi; 65–78 mm = 2,56–3,07 in; 65/20 = 3,25 e 78/20 = 3,90; 91 % = 9,1 em 10; 8.378 − 8.265 = 113 m = 370,7 ft; 51,2 km = 31,8 mi; 33,5 km = 20,85 mi; 8.400 m = 27.559 ft; 19/12/2018 = quarta-feira.
- **Citações aspadas:** as três da voz, letra a letra contra a cópia: "deepest ocean" (é a fala do espectador, não citação de fonte); "One down!" (Popular Science, 21/12/2018: "“One down!” Those were Victor Vescovo’s first words after climbing out of the hatch"); "fish" (as aspas de "the "fish" of 1964", a palavra do relato de 1965, que o artigo de 2020 conclui ter sido holotúria).
- **As armadilhas, varridas frase a frase:** universais ("no one", "never", "the first", "only", "every time", "all of its sonar data", "no fish"): cada um com a fonte que o diz, no mesmo alcance (o "never reached the deepest point" e o "never been mapped" com o "did not reach" e o "un-mapped" das fontes; "every time" com o "consistently shallower"; "No one knows" com o "hard to know for sure" da NOAA, na forma da R13); anos derivados ("eight years earlier", "the next year", "15 years before", "a century before", "Since 2021"): todos com a conta ou a fonte; composição e justaposição (O1–O4, abaixo, todas declaradas no dossiê ou leves); confusão de período ("By the end, those surveys showed" = os três cruzeiros de 2002–2003; "had the Atlantic … still" = o que a lista dizia em 2019; "The sonar settled that" = o sonar de 2019, publicado em 2021); governantes ou titulares trocados (o comando do Blake é do relatório de 1883, Brownson, e não o Sigsbee do IHR de 1936: C13); mecanismo que a fonte não dá (o "why the trench is so deep" vem atribuído e com o verbo da fonte, "suggests"; o "active force pulling down" é o "active downward force" do OFR; nada de subducção típica: N39). **Estado do mundo** (present/still/today/now/remains/as of): "As of October 2026, the official list … doesn't include the Milwaukee Deep" (a API do gazetteer, 26/10/2026, `totalItems: 0`: volátil, a Sala relê na véspera da gravação); "More than three million people live in Puerto Rico" (Censo 2020, 3.285.874, e a estimativa de 01/07/2025, 3.184.835: passa nas duas); "Both Britain and Argentina claim them" (a reivindicação sobreposta da Marine Regions, MRGID 8383); "not every country uses it" e "Argentina, for one, disagrees" (a M-3 de 2026, edição vigente); "The islands … with no permanent residents" (NASA 2021); o presente de "lies", "sits", "runs" é geografia.

NOTA: 9.5/10 · toda afirmação da revisão `432dcb4041d4` tem fonte local conferida, cada número tem a conta à vista, e as 24 trocas da rodada 2 não quebraram fato em volta. Não chega a 10 por quatro apoios de composição, todos leves e declarados abaixo (O1–O4), nenhum deles um defeito que peça troca.

## Achados

Nenhum. Nenhuma frase do texto de hoje pede CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DO-DOSSIE, DA-FONTE, REDIZER ou PEDIR.

## Observações (não são achados: ficam registradas para a Sala)

- **O1 · composição pela profundidade (§8, F076, "The Australian Museum lists the same catch, from the Puerto Rico Trench.").** O Australian Museum não diz 1970 nem "net": diz o *Abyssobrotula galatheae*, 20 cm, coletado na Fossa de Porto Rico a 8.370 m. A NOAA diz o cusk-eel de 1970, numa rede que desceu a 8.370 m. A identidade das duas é pela profundidade e pela família (Ophidiidae), na forma do dossiê. Leve: nenhuma fonte dá outro peixe de 8.370 m em Porto Rico.
- **O2 · "a reporter on board heard him say" (§18, F168–F169).** A Popular Science dá a fala como as "first words after climbing out of the hatch", e o repórter diz em primeira pessoa que estava no Pressure Drop. O "heard" é a leitura direta disso, não um fato à parte. Leve.
- **O3 · "newspapers" no plural (§6, F053–F054).** A cópia em mão é uma (The Sun, Newberry, 28/07/1939); o plural vem do "WNU Service", o sindicato que distribuía o boletim da National Geographic a vários jornais. Leve.
- **O4 · "along roughly six miles of its north shore" (§13, F118–F121).** Os "nearly 10 km" de Kilbourne et al. 2025 são a extensão dos blocos datados ao longo da costa norte; as "hundreds of coral boulders" são o campo inteiro. A frase junta as duas, e o "roughly" a cobre. Leve.
- **O5 · "to the other end of the Atlantic" (§22, F209–F211).** O sonar levantou a Fossa das Sandwich do Sul inteira (54°40'S a 60°40'S, no Atlântico e cruzando 60°S); o submersível mergulhou no Factorian Deep, ao sul de 60°S, que pela IHO de 2023 é Oceano Austral. O §23 em diante (p7 inteiro) diz isso com todas as letras, e a voz nunca põe o Factorian no Atlântico (N48). Fica.
- **O6 · "That, the agency suggests, is why the trench is so deep." (§11, F101–F103).** Junta duas frases do mesmo resumo do USGS: "The Puerto Rico trench exhibits great water depth, extremely low gravity anomaly, and a tilted carbonate platform" e "we suggest that these features are manifestations of large vertical movements", com os blocos girados que "indicate trench subsidence". É a decisão 1 da Sala ([porque-sem-dono]), e o verbo é o da fonte.

## O delta da rodada 2 (as 24 trocas da `lista-r2.json`, L43–L66)

| item | a frase de hoje | veredito | o que eu conferi |
|---|---|---|---|
| L44 (§2, gancho) | "In 1964, a crew in a French deep-diving craft descended into the Puerto Rico Trench and reported a crowd of fish." | CONFIRMADA (F014–F016) | o título do artigo de 2020 ("the 1964 Archimède bathyscaphe dive … in the Puerto Rico trench"); o release, "the French submersible Archimede in 1964"; o relato de 200 peixes-caracol, "an extraordinarily high-density of fish". A nacionalidade fica no barco, não na tripulação (N51, regra [tripulacao-francesa]) |
| L43 (§2, gancho) | "And a 2019 study found that the official list of undersea features still had the Atlantic more than 1,000 feet too deep, even after sonar showed otherwise." | CONFIRMADA (F021–F026) | 8.740 m no gazetteer, pelo estudo; 8.740 − 8.408 = 332 m = 1.089,2 ft (o número do próprio estudo) e 8.740 − 8.378 = 362 m = 1.187,7 ft (o sonar da expedição): "more than 1,000 feet" vale nas duas réguas (C28). "even after sonar showed otherwise": o "consistently shallower" do estudo e o USGS de 2002–2003 |
| L45 (§3, p1) | "Its commander was a Navy officer named Brownson." | CONFIRMADA (F031) | "command of Lieutenant Commander W. H. Brownson, U. S. N." (relatório de 1883). O corte tira o "a few months earlier", que não estava na cópia |
| L46 (§4, p1) | "At the time, no one was known to have brought back a sample and a temperature from that deep." | CONFIRMADA (F039) | "No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this." "no one was known" é o mesmo alcance: a frase é sobre o que se sabia em 1883, não sobre quem |
| L47 (§7, p2) | "About 24,000 feet down, its crew reported a crowd of fish." | CONFIRMADA (F065–F067) | 7.300 m = 23.950 ft; "reported in 1965 from depths of 7300 m"; "its crew" é a tripulação do Archimède da frase de antes |
| L48 (§8, p2) | "NOAA, the U.S. ocean and weather agency, reports that in 1970 a net brought back a small cusk-eel." | CONFIRMADA (F071–F072) | a página da NOAA (OER), no presente, sobre a rede de 1970 a 8.370 m |
| L49 (§10, p3) | "The agency says this points to an active force pulling down on the area." | CONFIRMADA (F094) | "which indicates the presence of an active downward force" (OFR 2006-1210) |
| L50 (§11, p3) | "To the USGS, that tilt reflects big vertical shifts in this part of the trench and in Puerto Rico itself." | CONFIRMADA (F099) | "we suggest that these features are manifestations of large vertical movements of a segment of the Puerto Rico Trench, its forearc, and the island of Puerto Rico" |
| L51 (§11, p3) | "Under the trench, rotated blocks of rock point to a sinking floor." | CONFIRMADA (F100) | "underlain by rotated blocks of the NOAM plate that indicate trench subsidence" |
| L52 (§11, p3) | "That, the agency suggests, is why the trench is so deep." | CONFIRMADA (F101–F103) | a decisão 1 da Sala; a "great water depth" é um dos traços que o USGS lê como movimento vertical, com "we suggest" (O6) |
| L53 (§14, p4) | (sai "To see the trench's walls, you need a camera down there.") | — | corte de ponte; a frase de antes ("the risk … appears to be high") e a de depois (1918) não mudam de sentido |
| L54 (§19, p6) | "In 2019, two scientists, Heather Stewart and Alan Jamieson, found that the official list of undersea features had the Milwaukee Deep at about 28,700 feet." | CONFIRMADA (F174–F178) | Earth-Science Reviews 197 (2019), dois autores; a Tabela 1 e o §2.1.2 com os 8.740 m do gazetteer; 8.740 m = 28.674,5 ft |
| L55 (§20, p6) | "Stewart and Jamieson checked the published depths against sonar data that was already public." | CONFIRMADA (F186) | "reviews and assesses the best resolution bathymetric datasets currently available from public repositories" |
| L56 (§21, p6) | "Using public data from eight older surveys, it placed that point about 36 miles west of the sonar's spot, in waters claimed by the Dominican Republic." | CONFIRMADA (F195–F198) | "from eight surveys between 1996 and 2015"; a ZEE da República Dominicana (o estudo e a Marine Regions); 57,3 km = 35,58 mi, a oeste |
| L57 (§24, p7) | "Stewart and Jamieson's study noted the depth most often published for its deepest point." | CONFIRMADA (F226) | "The most commonly reported depth for the Meteor Deep is 8428 m" |
| L58 (§24, p7) | "Since 2021, that name has officially marked the spot the sonar found, about 30 miles from where older sources put it." | CONFIRMADA (F236–F239) | a SCUFN-34 aceitou o Meteor Deep ("Gazetteer updated 16 Jun 2021"); o ponto do gazetteer (55,23069°S, 26,17294°W) é o ponto mais fundo do sonar; da posição de Zhivago 2002, 51,2 km = 31,8 mi (de Allaby 2009, 31,98 mi) |
| L59 (§25, p7) | "It begins at 60 degrees south." / "By that line, the Meteor Deep, well to the north, is in the Atlantic." | CONFIRMADA (F243, F244) | só a ordem: o limite norte do Oceano Austral em 60°S (M-3, Res. 02/2023), e o Meteor Deep "within the waters of the southernmost Atlantic Ocean", a ~330 mi ao norte da linha |
| L60 (§26, p7) | "The expedition's sub, the Limiting Factor, reached the bottom there in 2019, and that's where the odd name comes from." | CONFIRMADA (F251, F252) | o gazetteer: "Named in relation to the full ocean depth submersible ‘Limiting Factor’ that successfully reached the bottom of this feature"; a missão, "February 2019" |
| L61 (§26, p7) | "Off Puerto Rico, the 1964 crew's fish were waiting for a second look." | CONFIRMADA (F255, F256) | o mergulho de 1964 e a volta de 2019 |
| L62 (§27, p8) | "In 2019, the same sub went back to the spot where that crew had reported their fish." | CONFIRMADA (F257) | "In 2019 the submersible DSV Limiting Factor revisited the exact same site in the Puerto Rico Trench" |
| L63 (§27, p8) | "Where the 1964 crew had counted about 200 fish, it saw no snailfish." | CONFIRMADA (F260–F262) | os 200 peixes-caracol de 1964; "No snailfish were observed" |
| L64 (§27, p8) | "It found sea cucumbers instead, spread about as thickly as the fish the crew had reported." | CONFIRMADA (F263–F265) | "a large number of the holothurian Peniagone sp. were seen in a density similar to that reported originally for the snailfish"; o Peniagone é holotúria elasipodídea, e o relatório do EX1502 chama os elasipodídeos de "sea cucumbers" |
| L65 (§27, p8) | "From the outside, the two look a lot alike in color, texture and shape." | CONFIRMADA (F266, F267) | "The holothurian has a similar exterior colour, texture and morphology to the snailfish" |
| L66 (§28, p8) | "It's a conclusion drawn from the count and the look, and the animals the 1964 crew saw that day can't be checked again." | CONFIRMADA (F271–F273) | a densidade e a aparência são as duas bases da conclusão do artigo de 2020; os animais de 1964 não foram coletados (F38 do dossiê) |

## Não conferido

Nada na voz. Nenhuma frase depende de página que recusou leitura automática, de PDF sem cópia em texto nem de resumo.

## Voláteis na fala (reconferir na véspera da gravação)

- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." A API do gazetteer (`nameContains=Milwaukee`) deu `totalItems: 0` em 26/10/2026 (V36). Refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." O Censo de 2020 (3.285.874) e a estimativa de 01/07/2025 (3.184.835). Só muda se uma estimativa nova cair abaixo de três milhões.
- "Argentina, for one, disagrees." e "not every country uses it." A reserva da Argentina e os limites próprios da Austrália na M-3 de 2026. Reconferir se sair edição nova da M-3.
- "In August 2026, a Landsat satellite caught the heat…" é fato datado e não muda.

## Nomes

Nenhuma pessoa anônima que devesse ter nome. Brownson (W. H. Brownson, relatório de 1883), Nares (IHR 1936), Victor Vescovo (release e Popular Science), Heather Stewart e Alan Jamieson (Earth-Science Reviews 197), os cinco autores de 2020 (Jamieson, Linley, Stewart, Nargeolet e Vescovo), "The scientists who dated the coral" (Kilbourne et al. 2025). "a reporter on board" fica sem nome, como a fonte o deixa. A tripulação de 1964 fica sem nome nem nacionalidade (N51). Grafias conferidas nas cópias: Archimède, Deep Discoverer, Okeanos Explorer, Pressure Drop, Limiting Factor, Ron Brown, Meteor, Factorian, Limiting Deep, Mount Michael, Aguadilla, Anegada, Mona Passage.

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo, na primeira rodada, sem conserto nenhum na tabela:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: 432dcb4041d4 (igual ao do gate.mjs) · 29 parágrafos
  laudo: Revisão julgada 432dcb4041d4 · COBERTURA 282 de 282 · VEREDITO PASS
  tabela: 282 confirmada(s) de 282
```

Saída 0. Rodado de novo depois de a comparação com a bancada anterior entrar neste laudo: a mesma saída, exit 0. `gate.mjs --derivados`: este laudo cita `432dcb4041d4` (ok); os cinco laudos `-r2` citam `04ae6bfbeb60`, a revisão que eles julgaram, e ficam como estão (é da Sala, como o `aplicado-r2.md` §5 já diz). Antes de rodar o portão, cada `trecho` foi procurado na cópia local com o `normTrecho`/`normFonte`/`acharNaFonte` do próprio portão, e cada `frase` no parágrafo dela: 0 faltas em 282.

## A tabela

`§` é o parágrafo falado (de 1 a 29, a numeração do portão); a frase inteira e o trecho literal de cada linha estão na `fatos-tabela.json`.

| id | § | afirmação | veredito | fonte | classe |
|---|---|---|---|---|---|
| F001 | 1 | O ponto mais fundo do Atlântico fica na Fossa de Porto Rico (Bongiovanni et al. 2021: o Brownson Deep, 8.378 ± 5 m pelo sonar da Five Deeps). | confirmada | S01 | texto |
| F002 | 1 | Porto Rico é uma ilha, e a fossa fica ao norte dela. | confirmada | S02 | texto |
| F003 | 1 | Porto Rico é dos EUA: o ponto cai na zona econômica exclusiva dos Estados Unidos (Porto Rico), pela Marine Regions. | confirmada | S16 | texto |
| F004 | 1 | O Censo dos EUA conta Porto Rico ao lado dos 50 estados e do Distrito de Colúmbia (território, nunca 'state'). | confirmada | S46 | texto |
| F005 | 1 | Do ponto do sonar à costa mais perto de Porto Rico: 134,3 km = 83,47 mi (Census, em Aguadilla) e 82,93 mi (Natural Earth): 'about 83 miles'. | confirmada | medicao | medicao |
| F006 | 1 | 8.378 ± 5 m pelo sonar da Five Deeps. | confirmada | S01 | texto |
| F007 | 1 | 8.378 m = 27.486,9 ft = 5,206 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F008 | 1 | O Everest tem 8.848,86 m (China e Nepal, 08/12/2020, pela AP). | confirmada | S26 | imprensa |
| F009 | 1 | 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft fora d'água: o topo de 1.500 ft fica de fora (não 'deeper than Everest is tall', N02). | confirmada | medicao | medicao |
| F010 | 1 | O ponto mais fundo de todos os oceanos é o Challenger Deep, na Fossa das Marianas (NOAA). Sem crença do público sobre o Atlântico (N01). | confirmada | S25 | texto |
| F011 | 1 | A Fossa das Marianas fica no Pacífico ocidental (NOAA). | confirmada | S25 | texto |
| F012 | 1 | A posição do Challenger Deep usada na conta (BGS, 2021). | confirmada | S03 | texto |
| F013 | 1 | Do ponto mais fundo do Atlântico ao Challenger Deep: 15.269,6 km = 9.488 mi (Vincenty). | confirmada | medicao | medicao |
| F014 | 2 | Em 1964 o batiscafo Archimède mergulhou na Fossa de Porto Rico (o título do artigo de 2020). | confirmada | S06 | texto |
| F015 | 2 | O Archimède era francês ('the French submersible Archimede'); a tripulação vai sem nacionalidade (N51, A19). | confirmada | S04 | texto |
| F016 | 2 | O relato: 200 peixes-caracol num transecto de uma milha, densidade 'extraordinariamente alta' para a zona hadal ('a crowd of fish'). | confirmada | S06 | texto |
| F017 | 2 | Em 2019 o submersível Limiting Factor revisitou o mesmo sítio. | confirmada | S06 | texto |
| F018 | 2 | Nenhum peixe-caracol foi visto (a fonte diz 'snailfish', e 'those fish' são os peixes-caracol do relato, N50). | confirmada | S06 | texto |
| F019 | 2 | Vescovo, a primeira pessoa a chegar ao ponto mais fundo do Atlântico (nunca 'the first human at the bottom', N03). | confirmada | S05 | imprensa |
| F020 | 2 | O release da Five Deeps, de 21/12/2018, sobre o mergulho de 19/12/2018. | confirmada | S04 | texto |
| F021 | 2 | O estudo de 2019: Stewart & Jamieson, Earth-Science Reviews 197. | confirmada | S02 | texto |
| F022 | 2 | A lista oficial (o gazetteer IHO-IOC GEBCO de nomes de feições submarinas) dava 8.740 m ao Milwaukee Deep, pelo estudo (Tabela 1 e §2.1.2; o §5 do mesmo estudo se contradiz, e por isso a voz atribui ao estudo, C27). | confirmada | S02 | texto |
| F023 | 2 | Para o estudo, o Milwaukee Deep era tido como a parte mais funda do Atlântico ('had the Atlantic'). | confirmada | S02 | texto |
| F024 | 2 | Os dados de sonar públicos davam o fundo sempre mais raso que o publicado ('even after sonar showed otherwise'). | confirmada | S02 | texto |
| F025 | 2 | O sonar multifeixe do USGS dava 8.300–8.340 m desde 2002–2003. | confirmada | S28 | texto |
| F026 | 2 | 8.740 − 8.408 = 332 m = 1.089,2 ft (pelo número do próprio estudo); 8.740 − 8.378 = 362 m = 1.187,7 ft (pelo sonar da expedição): 'more than 1,000 feet' nas duas réguas (C28). | confirmada | medicao | medicao |
| F027 | 3 | A data: 27/01/1883, o navio Blake, do U.S. Coast and Geodetic Survey (o IHR de 1936 dá a data e o ano; ele atribui o comando a Sigsbee, e vale o relatório de 1883, C13). | confirmada | S12 | texto |
| F028 | 3 | O relatório do próprio Survey: o vapor (steamer) Blake. | confirmada | S11 | texto |
| F029 | 3 | Ao norte de Porto Rico. | confirmada | S11 | texto |
| F030 | 3 | A sondagem era por arame (a mesma viagem perdeu 'wire and thermometers'); 'weighted' é a forma da leitura 04. | confirmada | S11 | texto |
| F031 | 3 | Sob o comando do tenente-comandante W. H. Brownson, U. S. N. (Marinha dos EUA); sem 'named after him' (N09). | confirmada | S11 | texto |
| F032 | 3 | 4.561 braças. | confirmada | S11 | texto |
| F033 | 3 | 4.561 × 6 = 27.366 ft = 8.341,2 m = 5,183 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F034 | 3 | A posição da sondagem: 19°40'50"N, 66°23'40"W. | confirmada | S11 | texto |
| F035 | 3 | Da sondagem ao ponto do sonar: 96,2 km = 59,75 mi, a leste (outro lugar, N22). | confirmada | medicao | medicao |
| F036 | 4 | O arame trouxe amostra do fundo (lodo marrom) e a temperatura. | confirmada | S11 | texto |
| F037 | 4 | O relatório descreve o fundo como 'brown ooze'. | confirmada | S11 | texto |
| F038 | 4 | É o relatório do ano fiscal que terminou em 30/06/1883. | confirmada | S11 | texto |
| F039 | 4 | 'No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this.' | confirmada | S11 | texto |
| F040 | 5 | A fossa foi descoberta pela expedição do HMS Challenger em 1875. | confirmada | S07 | texto |
| F041 | 5 | Oito anos antes da sondagem do Blake. | confirmada | S12 | texto |
| F042 | 5 | O H.M.S. (navio de Sua Majestade, britânico) Challenger, sob o capitão Nares, em 26/03/1875. | confirmada | S12 | texto |
| F043 | 5 | Nares era o comandante do Challenger. | confirmada | S12 | texto |
| F044 | 5 | 1883 − 1875 = 8 anos. E 'far to the east': a sondagem do Challenger (19°42'N, 65°07'W) fica a 142,95 mi a leste do ponto mais fundo e a 83,26 mi da do Blake (V11). | confirmada | medicao | medicao |
| F045 | 5 | 3.875 braças = 7.087 m. | confirmada | S12 | texto |
| F046 | 5 | 3.875 × 6 = 23.250 ft: cerca de 23.000 ft. | confirmada | medicao | medicao |
| F047 | 5 | Uns 810 km (503 mi; o comprimento está em disputa, F20, e 'hundreds of miles' vale para as duas réguas), quase paralela à costa norte. | confirmada | S01 | texto |
| F048 | 6 | Em 1939, o cruzador Milwaukee, ao norte de Hispaniola e de Porto Rico (DANFS). | confirmada | S08 | texto |
| F049 | 6 | A sondagem era sônica (eco). | confirmada | S08 | texto |
| F050 | 6 | O jornal de 1939: novo recorde de 28.680 ft ao norte de Porto Rico. | confirmada | S09 | imprensa |
| F051 | 6 | A história da Marinha dá 30.246 ft, 'the greatest depth yet discovered in the Atlantic': em disputa (F26), e 'more than 28,000 feet' vale para os três números. | confirmada | S08 | texto |
| F052 | 6 | 'has been named the Milwaukee Deep, from the United States cruiser' (o nome de 1939, não oficial hoje, N08). | confirmada | S09 | imprensa |
| F053 | 6 | O boletim da National Geographic Society, distribuído pelo WNU Service (o sindicato de jornais) e impresso no The Sun. | confirmada | S09 | imprensa |
| F054 | 6 | A data: sexta, 28/07/1939 (verão no Norte). | confirmada | S09 | imprensa |
| F055 | 7 | O mergulho de 1964 do batiscafo Archimède na Fossa de Porto Rico. | confirmada | S06 | texto |
| F056 | 7 | Observação direta, de dentro do batiscafo ('the first direct observations'). | confirmada | S06 | texto |
| F057 | 7 | O Archimède, um batiscafo. | confirmada | S06 | texto |
| F058 | 7 | Francês (de quem era, não está em fonte: nunca 'French Navy', A19). | confirmada | S04 | texto |
| F059 | 7 | 7.300 m (o artigo de 2020). | confirmada | S06 | texto |
| F060 | 7 | ~8.300 m (o release da Five Deeps). | confirmada | S04 | texto |
| F061 | 7 | 7.300 m = 4,536 mi; 8.300 m = 5,157 mi: mais de quatro milhas pelas duas. | confirmada | medicao | medicao |
| F062 | 7 | 7.300 m no artigo de 2020. | confirmada | S06 | texto |
| F063 | 7 | ~8.300 m no release de 2018. | confirmada | S04 | texto |
| F064 | 7 | 'but it did not reach the deepest point' (o release; nunca 'landed on the bottom', C08). | confirmada | S04 | texto |
| F065 | 7 | O relato, de 7.300 m. | confirmada | S06 | texto |
| F066 | 7 | Uma densidade de peixes 'extraordinariamente alta'. | confirmada | S06 | texto |
| F067 | 7 | 7.300 m = 23.950,1 ft: cerca de 24.000 ft. | confirmada | medicao | medicao |
| F068 | 7 | 200 peixes-caracol num transecto de uma milha. | confirmada | S06 | texto |
| F069 | 7 | Publicado em 1965, o ano seguinte ao mergulho de 1964. | confirmada | S06 | texto |
| F070 | 7 | Os peixes-caracol (Liparidae, uma família). | confirmada | S06 | texto |
| F071 | 8 | A NOAA: em 1970, um cusk-eel pego numa rede que desceu a 8.370 m. | confirmada | S31 | texto |
| F072 | 8 | A NOAA é a National Oceanic and Atmospheric Administration. | confirmada | S28 | texto |
| F073 | 8 | Os cusk-eels têm aparência de enguia, mas não são enguias verdadeiras (S73, F93). | confirmada | S73 | texto |
| F074 | 8 | A família é a Ophidiidae, e o peixe tem 20 cm. | confirmada | S30 | texto |
| F075 | 8 | 20 cm = 7,874 in: cerca de oito polegadas. | confirmada | medicao | medicao |
| F076 | 8 | O Australian Museum: o cusk-eel Abyssobrotula galatheae, coletado na Fossa de Porto Rico a 8.370 m: a mesma profundidade da rede de 1970 da NOAA (a identidade é por ela). | confirmada | S30 | texto |
| F077 | 8 | A rede desceu a 8.370 m. | confirmada | S31 | texto |
| F078 | 8 | O ponto mais fundo: 8.378 m (8 m a mais). | confirmada | S01 | texto |
| F079 | 8 | A NOAA: 'it's hard to know for sure whether the cusk eel was caught at the trawl's deepest point' (a forma da R13). | confirmada | S31 | texto |
| F080 | 9 | O USGS mapeou a fossa inteira com multifeixe em três cruzeiros, em 2002 e 2003. | confirmada | S28 | texto |
| F081 | 9 | Batimetria em faixa ('swath') por sistema multifeixe do navio. | confirmada | S28 | texto |
| F082 | 9 | Três cruzeiros a bordo do navio Ronald H. Brown, da NOAA. | confirmada | S27 | texto |
| F083 | 9 | O setor mais fundo, a oeste: 8.300–8.340 m. | confirmada | S28 | texto |
| F084 | 9 | 8.300–8.340 m = 27.231–27.362 ft; o meio, 8.320 m = 27.296,6 ft: cerca de 27.300 ft. | confirmada | medicao | medicao |
| F085 | 9 | O último cruzeiro do USGS terminou em 04/09/2003. | confirmada | S27 | texto |
| F086 | 9 | 2018 − 2003 = 15 anos (o mergulho de 19/12/2018). | confirmada | medicao | medicao |
| F087 | 10 | A litosfera, a camada rígida de fora, está partida em placas que se movem e carregam continentes e oceanos (S72, F92). | confirmada | S72 | texto |
| F088 | 10 | 'Trenches in the Pacific are located in places where one tectonic plate subducts or slides under another one.' | confirmada | S27 | texto |
| F089 | 10 | As placas Norte-Americana e do Caribe. | confirmada | S02 | texto |
| F090 | 10 | Deslizam uma pela outra, com só um pouco de subducção (nunca a subducção típica, N39). | confirmada | S27 | texto |
| F091 | 10 | A placa do Caribe anda para leste ~20 mm/ano em relação à Norte-Americana. | confirmada | S02 | texto |
| F092 | 10 | 20 mm = 0,787 in: cerca de três quartos de polegada. | confirmada | medicao | medicao |
| F093 | 10 | 'the most negative free-air gravity anomaly on earth, -380 mGal' (atribuído; sem 'anomaly' na voz, C28). | confirmada | S27 | texto |
| F094 | 10 | 'which indicates the presence of an active downward force'. | confirmada | S27 | texto |
| F095 | 11 | Uma plataforma de carbonato inclinada, entre cotas reconstruídas de +1.300 m e −4.000 m (USGS). | confirmada | S28 | texto |
| F096 | 11 | +1.300 m = 4.265,1 ft: mais de 4.000 ft. | confirmada | medicao | medicao |
| F097 | 11 | A ponta baixa, −4.000 m (cota reconstruída). | confirmada | S28 | texto |
| F098 | 11 | −4.000 m = 13.123,4 ft abaixo do nível do mar: cerca de 13.000 ft. | confirmada | medicao | medicao |
| F099 | 11 | O USGS sugere que esses traços (a profundidade, a gravidade baixa e a plataforma inclinada) são manifestações de grandes movimentos verticais de um segmento da fossa, do antearco e da ilha. | confirmada | S28 | texto |
| F100 | 11 | 'underlain by rotated blocks of the NOAM plate that indicate trench subsidence'. | confirmada | S28 | texto |
| F101 | 11 | A grande profundidade é um dos traços que o USGS lê como manifestação de movimento vertical ('we suggest'): o afundamento, dito com o verbo da fonte (N51). | confirmada | S28 | texto |
| F102 | 11 | 'we suggest that these features are manifestations of large vertical movements'. | confirmada | S28 | texto |
| F103 | 11 | Os blocos girados 'indicate trench subsidence' (o 'sinking floor' da frase anterior). | confirmada | S28 | texto |
| F104 | 11 | Os mapas multifeixe do USGS mostram deslizamentos nas encostas. | confirmada | S28 | texto |
| F105 | 12 | Muitos deslizamentos submarinos ('numerous retrograde slope failures') na borda da plataforma ao norte de Porto Rico, a parede da fossa. | confirmada | S28 | texto |
| F106 | 12 | Antigos: o desmoronamento contínuo ao longo do tempo e deslizamentos gigantes nas duas paredes. | confirmada | S27 | texto |
| F107 | 12 | O risco de tsunami por deslizamento 'appears to be high' (atribuído, sem data nem probabilidade, N11). | confirmada | S28 | texto |
| F108 | 12 | 11/10/1918, na Passagem de Mona, a oeste de Porto Rico (NCEI, evento 1458). | confirmada | S29 | texto |
| F109 | 12 | Numa falha normal do Cânion de Mona, não na fossa (N10). | confirmada | S29 | texto |
| F110 | 12 | O banco do NCEI (NOAA) dá M 7,1 (outra referência do mesmo banco, 7,5: por isso atribuído, N29). | confirmada | S29 | texto |
| F111 | 12 | Runup de até ~6 m nas costas oeste e norte de Porto Rico. | confirmada | S29 | texto |
| F112 | 12 | A altura máxima: 6,1 m. | confirmada | S29 | texto |
| F113 | 12 | 6,1 m = 20,0 ft. | confirmada | medicao | medicao |
| F114 | 12 | O total oficial: 116 (o banco também dá 144 e mais de 200: em disputa, e 'more than 100' vale para todos, F48). | confirmada | S29 | texto |
| F115 | 13 | O tsunami medieval de Anegada é 'the only known example of a tsunami caused by faulting in the Puerto Rico Trench'. | confirmada | S17 | texto |
| F116 | 13 | 'the low-lying island of Anegada'. | confirmada | S17 | texto |
| F117 | 13 | Anegada, Ilhas Virgens Britânicas (nunca 'U.S. island', N24). | confirmada | S17 | texto |
| F118 | 13 | Centenas de blocos de coral a centenas de metros para dentro ('far inland', R26). | confirmada | S17 | texto |
| F119 | 13 | Na costa norte, a que dá para a fossa. | confirmada | S17 | texto |
| F120 | 13 | Ao longo de quase 10 km (o trecho dos blocos datados). | confirmada | S17 | texto |
| F121 | 13 | Quase 10 km = 6,214 mi: 'roughly six miles'. | confirmada | medicao | medicao |
| F122 | 13 | A datação pelo urânio (série do urânio) dos blocos de coral. | confirmada | S17 | texto |
| F123 | 13 | Entre 1381 e 1391 (nunca 'in 1385', N24). | confirmada | S17 | texto |
| F124 | 13 | O artigo é de 2025 (Geophysical Research Letters 52). | confirmada | S17 | texto |
| F125 | 13 | 'almost exactly one century before Columbus' (1492 − 1391 = 101; V23). | confirmada | S17 | texto |
| F126 | 14 | Foi a parte leste da fossa (Kilbourne et al. 2025; nunca ligado ao ponto mais fundo, N24). | confirmada | S17 | texto |
| F127 | 14 | O ponto mais fundo fica na parte oeste da fossa (Anegada fica a ~201 mi dele, V22). | confirmada | S28 | texto |
| F128 | 14 | As simulações numéricas do tsunami. | confirmada | S17 | texto |
| F129 | 14 | 'they give parent earthquake magnitudes of 8.0 or more' (os autores não estimam uma, F54). | confirmada | S17 | texto |
| F130 | 14 | 'The tsunami is important as the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake'. | confirmada | S17 | texto |
| F131 | 14 | 'The average recurrence interval in either case probably spans thousands of years'. | confirmada | S17 | texto |
| F132 | 15 | O ROV da NOAA mergulhou na parede sul da fossa, a 6.000 m. | confirmada | S32 | texto |
| F133 | 15 | Em 26/04/2015. | confirmada | S32 | texto |
| F134 | 15 | Com câmeras HD. | confirmada | S32 | texto |
| F135 | 15 | Profundidade máxima: 5.999,7 m. | confirmada | S32 | texto |
| F136 | 15 | 5.999,7 m = 19.684,1 ft: quase 20.000 ft (a parede, nunca o fundo, F68). | confirmada | medicao | medicao |
| F137 | 15 | A posição: 19°09,053'N, 65°24,430'W, a 130 mi a leste do ponto mais fundo (V25). | confirmada | S32 | texto |
| F138 | 15 | O ROV Deep Discoverer. | confirmada | S32 | texto |
| F139 | 15 | Do navio Okeanos Explorer. | confirmada | S32 | texto |
| F140 | 15 | Doze mergulhos na expedição EX1502 Leg 3. | confirmada | S33 | texto |
| F141 | 15 | O mergulho foi abortado logo depois, por um problema no compensador de óleo do D2. | confirmada | S32 | texto |
| F142 | 16 | O conjunto de dados da Five Deeps sobre a fossa. | confirmada | S53 | texto |
| F143 | 16 | Levantado com um Kongsberg EM 124 no DSSV Pressure Drop. | confirmada | S53 | texto |
| F144 | 16 | Em 18 e 19/12/2018. | confirmada | S53 | texto |
| F145 | 16 | Um multifeixe de última geração, de profundidade total. | confirmada | S01 | texto |
| F146 | 16 | A meta: levar o submersível ao ponto mais fundo de cada um dos cinco oceanos (a meta é da expedição, N20). | confirmada | S03 | texto |
| F147 | 16 | 'the first person to reach the lowest point in all five oceans'. | confirmada | S05 | imprensa |
| F148 | 16 | As profundidades corrigidas com dados de CTD da superfície ao fundo. | confirmada | S01 | texto |
| F149 | 16 | Os sensores do submersível e dos landers deram os perfis de velocidade do som até o fundo, por medida direta. | confirmada | S03 | texto |
| F150 | 17 | 8.378 ± 5 m, a 19,712°N, 67,311°W. | confirmada | S01 | texto |
| F151 | 17 | 8.378 m = 27.486,9 ft: cerca de 27.500 ft. | confirmada | medicao | medicao |
| F152 | 17 | A margem, ± 5 m, com 95 % de confiança. | confirmada | S01 | texto |
| F153 | 17 | 5 m = 16,4 ft: cerca de 16 ft. | confirmada | medicao | medicao |
| F154 | 17 | 134,3 km = 83,47 mi até a costa de Aguadilla, no noroeste (Census 2025; a de Isabela fica 7,4 m mais longe). | confirmada | medicao | medicao |
| F155 | 17 | 'about 83 miles', da costa mais perto, nunca de San Juan (N26, N35). | confirmada | medicao | medicao |
| F156 | 17 | Censo de 2020: 3.285.874 residentes (a estimativa de 01/07/2025, 3.184.835, também passa de três milhões: V28). | confirmada | S46 | texto |
| F157 | 17 | Mais de três milhões nas duas contagens. | confirmada | medicao | medicao |
| F158 | 18 | Quarta-feira, 19 de dezembro (a reportagem a bordo; nunca 21/12, a data do release, N06). | confirmada | S05 | imprensa |
| F159 | 18 | Vescovo, no submersível Limiting Factor, ao ponto mais fundo do Atlântico. | confirmada | S04 | texto |
| F160 | 18 | O sonar tinha levantado o lugar em 18–19/12/2018. | confirmada | S53 | texto |
| F161 | 18 | 19/12/2018 foi uma quarta-feira. | confirmada | medicao | medicao |
| F162 | 18 | Mergulho solo. | confirmada | S04 | texto |
| F163 | 18 | No submersível particular dele, o Limiting Factor. | confirmada | S04 | texto |
| F164 | 18 | Um veículo feito para chegar a qualquer ponto dos oceanos. | confirmada | S05 | imprensa |
| F165 | 18 | 'after an approximate two-and-a-half hour descent'. | confirmada | S04 | texto |
| F166 | 18 | 'the first person to reach the absolute nadir of the Atlantic Ocean' (R15). | confirmada | S05 | imprensa |
| F167 | 18 | O título do release: 'First Human Reaches the Deepest Point in the Atlantic Ocean'. | confirmada | S04 | texto |
| F168 | 18 | A citação, letra a letra: "One down!", ao sair pela escotilha (a reportagem a bordo). | confirmada | S05 | imprensa |
| F169 | 18 | O repórter estava no Pressure Drop. | confirmada | S05 | imprensa |
| F170 | 18 | O submersível confirmou: 8.376 ± 5 m (o sonar é o número; o submersível, a confirmação, N34). | confirmada | S01 | texto |
| F171 | 18 | Os sensores (CTD) do submersível. | confirmada | S01 | texto |
| F172 | 18 | 8.378 − 8.376 = 2 m = 6,56 ft: cerca de 7 ft. | confirmada | medicao | medicao |
| F173 | 18 | A lista dava 8.740 m, pelo estudo de 2019. | confirmada | S02 | texto |
| F174 | 19 | Stewart & Jamieson, 2019. | confirmada | S02 | texto |
| F175 | 19 | O Milwaukee Deep, 8.740 m, no GEBCO Gazetteer (Tabela 1). | confirmada | S02 | texto |
| F176 | 19 | '8740 m as published in the IHO-IOC GEBCO Gazetteer of Undersea Feature Names' (§2.1.2). | confirmada | S02 | texto |
| F177 | 19 | Dois autores. | confirmada | medicao | medicao |
| F178 | 19 | 8.740 m = 28.674,5 ft: cerca de 28.700 ft. | confirmada | medicao | medicao |
| F179 | 19 | O jornal de 1939: 28.680 ft (a comparação é fato; a cópia, não, N23). | confirmada | S09 | imprensa |
| F180 | 19 | A data do jornal, 1939. | confirmada | S09 | imprensa |
| F181 | 19 | 28.680 contra 28.674,5 ft: 5,5 ft de diferença. | confirmada | medicao | medicao |
| F182 | 19 | O sonar: 8.378 m. | confirmada | S01 | texto |
| F183 | 19 | 8.740 − 8.378 = 362 m = 1.187,7 ft: cerca de 1.200 ft (a régua do sonar da expedição, publicado em 2021, C28). | confirmada | medicao | medicao |
| F184 | 19 | O USGS, 2002 e 2003. | confirmada | S28 | texto |
| F185 | 19 | 8.300–8.340 m, mais raso que os 8.740 m da lista. | confirmada | S28 | texto |
| F186 | 20 | O estudo confere os dados batimétricos de repositórios públicos. | confirmada | S02 | texto |
| F187 | 20 | Os três pontos publicados em Porto Rico. | confirmada | S02 | texto |
| F188 | 20 | 'consistently shallower than those published'. | confirmada | S02 | texto |
| F189 | 20 | 'have propagated uncorrected through online sources and the scientific literature'. | confirmada | S02 | texto |
| F190 | 20 | 7.450 m no ponto da lista, uma crista no eixo da fossa. | confirmada | S02 | texto |
| F191 | 20 | 7.450 m = 24.442,3 ft: cerca de 24.400 ft. | confirmada | medicao | medicao |
| F192 | 21 | O estudo é de 2019. | confirmada | S02 | texto |
| F193 | 21 | Os resultados da expedição saíram em 2021 (aceito em 07/04/2021). | confirmada | S01 | texto |
| F194 | 21 | O ponto do estudo: 8.408 m, 19,613°N, 67,847°W. | confirmada | S02 | texto |
| F195 | 21 | Oito levantamentos, de 1996 a 2015. | confirmada | S02 | texto |
| F196 | 21 | Na zona econômica da República Dominicana. | confirmada | S02 | texto |
| F197 | 21 | A camada eez confirma a zona dominicana. | confirmada | S16 | texto |
| F198 | 21 | 57,3 km = 35,58 mi, a oeste. | confirmada | medicao | medicao |
| F199 | 21 | O artigo da expedição, 2021. | confirmada | S01 | texto |
| F200 | 21 | Na zona econômica dos EUA (Porto Rico). | confirmada | S16 | texto |
| F201 | 21 | 160,4 km = 99,68 mi até a costa dominicana (La Altagracia). | confirmada | medicao | medicao |
| F202 | 21 | A zona: até 200 milhas náuticas da linha de base (nunca 'territorial waters', N32). | confirmada | S69 | texto |
| F203 | 21 | Os EUA têm direitos soberanos sobre os recursos. | confirmada | S69 | texto |
| F204 | 21 | Inclui Porto Rico. | confirmada | S69 | texto |
| F205 | 22 | A API do gazetteer, consultada em 26/10/2026: nenhum item com 'Milwaukee'. | confirmada | S15 | texto |
| F206 | 22 | Datado: outubro de 2026. | confirmada | medicao | medicao |
| F207 | 22 | 'All bathymetric data collected by Caladan Oceanic were submitted to Seabed 2030' (em outubro de 2020). | confirmada | S01 | texto |
| F208 | 22 | O Seabed 2030: o mapa definitivo do fundo do oceano até 2030 (nunca que o mapa já o mostra, N49). | confirmada | S01 | texto |
| F209 | 22 | O sonar do Pressure Drop levantou a Fossa das Sandwich do Sul. | confirmada | S53 | texto |
| F210 | 22 | A fossa vai de 54°40'S a 60°40'S: o extremo sul do Atlântico, cruzando 60°S. | confirmada | S01 | texto |
| F211 | 22 | O submersível mergulhou lá (no Factorian, ao sul de 60°S, como p7 diz). | confirmada | S37 | texto |
| F212 | 23 | A fossa tem a maior profundidade publicada do Sul, no Meteor Deep (8.428 m, a mais publicada: passaria a de Porto Rico). | confirmada | S02 | texto |
| F213 | 23 | A placa Sul-Americana mergulha sob a das Sandwich do Sul a 65–78 mm por ano. | confirmada | S02 | texto |
| F214 | 23 | 65–78 mm = 2,559–3,071 in; o meio, 2,815 in: cerca de três polegadas. | confirmada | medicao | medicao |
| F215 | 23 | Porto Rico: ~20 mm por ano. | confirmada | S02 | texto |
| F216 | 23 | 65/20 = 3,25 e 78/20 = 3,90. | confirmada | medicao | medicao |
| F217 | 23 | Uma fileira de pequenos picos vulcânicos de ~350 km. | confirmada | S40 | texto |
| F218 | 23 | Sem moradores permanentes (a NASA o diz da ilha Saunders e arredores). | confirmada | S39 | texto |
| F219 | 23 | Reivindicação sobreposta, Reino Unido e Argentina (nunca 'British islands', N15). | confirmada | S16 | texto |
| F220 | 23 | Landsat 8, 24/08/2026. | confirmada | S40 | texto |
| F221 | 23 | O calor do lago de lava na cratera do cume. | confirmada | S40 | texto |
| F222 | 23 | O Mount Michael fica na ilha Saunders, uma das Sandwich do Sul (sem altura, N30). | confirmada | S40 | texto |
| F223 | 24 | Levantada de 2 a 9/02/2019. | confirmada | S53 | texto |
| F224 | 24 | 'Prior to the FDE, around 91% of the trench was un-mapped'. | confirmada | S01 | texto |
| F225 | 24 | 91 % = 9,1 em 10: cerca de nove décimos. | confirmada | medicao | medicao |
| F226 | 24 | 'The most commonly reported depth for the Meteor Deep is 8428 m'. | confirmada | S02 | texto |
| F227 | 24 | 8.428 m (o número mais publicado do Meteor). | confirmada | S02 | texto |
| F228 | 24 | Contra 8.378 m do sonar de Porto Rico (50 m mais fundo; V40; a comparação é fora da atribuição, porque o sonar só saiu em 2021). | confirmada | S01 | texto |
| F229 | 24 | O sonar deu o Meteor Deep a 8.265 ± 13 m. | confirmada | S01 | texto |
| F230 | 24 | O Meteor Deep: 8.265 ± 13 m pelo sonar. | confirmada | S01 | texto |
| F231 | 24 | A BGS: o Meteor Deep, 8.265 m, é o ponto mais fundo da fossa. | confirmada | S03 | texto |
| F232 | 24 | 8.378 − 8.265 = 113 m = 370,7 ft: cerca de 370 ft (nunca 'deeper', N14). | confirmada | medicao | medicao |
| F233 | 24 | Tabela 1: 'N/A' na coluna do submersível para o Meteor Deep (nunca 'Vescovo dove the Meteor Deep', N21). | confirmada | S01 | texto |
| F234 | 24 | O nome vem do navio de pesquisa alemão Meteor. | confirmada | S15 | texto |
| F235 | 24 | O Meteor Deep foi descoberto em 1926. | confirmada | S01 | texto |
| F236 | 24 | A SCUFN aceitou o nome Meteor Deep na reunião de 07/06/2021; o gazetteer foi atualizado em 16/06/2021. | confirmada | S14 | texto |
| F237 | 24 | O ponto do gazetteer é o ponto mais fundo do sonar (55,23069°S, 26,17294°W). | confirmada | S15 | texto |
| F238 | 24 | A posição antiga (Zhivago 2002). | confirmada | S02 | texto |
| F239 | 24 | 51,2 km = 31,8 mi (Zhivago) e 31,98 mi (Allaby): cerca de 30 mi. | confirmada | medicao | medicao |
| F240 | 25 | A Resolução 02/2023 (A-3). | confirmada | S20 | texto |
| F241 | 25 | 'the IHO recognizes the Southern Ocean' (nunca 'not ratified' nem 'for the first time', N20). | confirmada | S20 | texto |
| F242 | 25 | A 3ª Assembleia a aprovou (decisão 19). | confirmada | S21 | texto |
| F243 | 25 | O limite norte no paralelo de 60°S. | confirmada | S20 | texto |
| F244 | 25 | O Meteor Deep fica em águas do Atlântico, não do Oceano Austral (a ~330 mi ao norte de 60°S, V43). | confirmada | S01 | texto |
| F245 | 25 | Sem significado político; os serviços hidrográficos podem manter os limites deles. | confirmada | S20 | texto |
| F246 | 25 | A Austrália usa os limites próprios. | confirmada | S20 | texto |
| F247 | 25 | A Argentina não vê base técnica para um Oceano Austral separado. | confirmada | S20 | texto |
| F248 | 26 | A fossa vai até 60°40'S, cruzando 60°S. | confirmada | S01 | texto |
| F249 | 26 | O Factorian Deep, o ponto mais fundo do Oceano Austral (nunca 'in the Atlantic', N48). | confirmada | S15 | texto |
| F250 | 26 | Em 60,479°S (53,4 km = 33,2 mi ao sul de 60°S, V44). | confirmada | S03 | texto |
| F251 | 26 | O nome vem do submersível Limiting Factor, que chegou ao fundo do Factorian. | confirmada | S15 | texto |
| F252 | 26 | Em 2019 (a missão do Oceano Austral, fevereiro de 2019). | confirmada | S37 | texto |
| F253 | 26 | O Limiting Deep, também nomeado pelo Limiting Factor, o segundo mais fundo do Oceano Austral. | confirmada | S15 | texto |
| F254 | 26 | 33,5 km = 20,85 mi entre os dois pontos do gazetteer. | confirmada | medicao | medicao |
| F255 | 26 | Os peixes do relato do mergulho de 1964. | confirmada | S06 | texto |
| F256 | 26 | A segunda olhada veio em 2019. | confirmada | S06 | texto |
| F257 | 27 | O Limiting Factor revisitou o mesmo sítio em 2019 (sem profundidade nem dia, A02). | confirmada | S06 | texto |
| F258 | 27 | O Limiting Factor levou Vescovo ao ponto mais fundo em dezembro de 2018. | confirmada | S04 | texto |
| F259 | 27 | O release de dezembro de 2018. | confirmada | S04 | texto |
| F260 | 27 | 200 peixes-caracol no relato do mergulho de 1964. | confirmada | S06 | texto |
| F261 | 27 | O mergulho é de 1964. | confirmada | S06 | texto |
| F262 | 27 | 'No snailfish were observed.' | confirmada | S06 | texto |
| F263 | 27 | Muitos holotúrios Peniagone sp., numa densidade parecida com a relatada para os peixes. | confirmada | S06 | texto |
| F264 | 27 | O Peniagone é um holotúrio elasipodídeo. | confirmada | S06 | texto |
| F265 | 27 | Os elasipodídeos são pepinos-do-mar (sea cucumbers). | confirmada | S33 | texto |
| F266 | 27 | 'The holothurian has a similar exterior colour, texture and morphology to the snailfish.' | confirmada | S06 | texto |
| F267 | 27 | Os dois animais comparados. | confirmada | medicao | medicao |
| F268 | 28 | O artigo de 2020, com os cinco autores, sobre o mergulho de 1964. | confirmada | S06 | texto |
| F269 | 28 | A conclusão dos autores (nunca 'it was proven', N45). | confirmada | S06 | texto |
| F270 | 28 | Cinco autores. | confirmada | medicao | medicao |
| F271 | 28 | A base: a densidade parecida ('the count'). | confirmada | S06 | texto |
| F272 | 28 | E a aparência parecida ('the look'). | confirmada | S06 | texto |
| F273 | 28 | Os animais de 1964 (ninguém os viu de novo, F38). | confirmada | S06 | texto |
| F274 | 28 | Vescovo é um dos cinco autores (F91; nunca 'Vescovo went back', A02). | confirmada | S06 | texto |
| F275 | 28 | Cinco autores. | confirmada | medicao | medicao |
| F276 | 29 | A NOAA: provavelmente nenhum peixe vive abaixo de uns 8.400 m (atribuído). | confirmada | S31 | texto |
| F277 | 29 | 8.400 m = 27.559,1 ft: cerca de 27.500 ft (a NOAA arredonda para 28.000; R32). | confirmada | medicao | medicao |
| F278 | 29 | A rede de 1970 desceu a 8.370 m (27.460 ft). | confirmada | S31 | texto |
| F279 | 29 | 27.460 contra cerca de 27.500 ft: quase. | confirmada | medicao | medicao |
| F280 | 29 | A fronteira da NOAA: entre 8.200 e 8.400 m. | confirmada | S31 | texto |
| F281 | 29 | O ponto mais fundo, 8.378 m, cai dentro dela. | confirmada | S01 | texto |
| F282 | 29 | A cerca de 83 milhas de Porto Rico. | confirmada | medicao | medicao |

## Comparação com a bancada anterior (`fatos-r2.laudo.md`, sobre `04ae6bfbeb60`, lida depois de escrever esta tabela e este laudo)

A bancada anterior deu RESSALVA, nota 8.5, COBERTURA 241 de 248 (1 corrigir, 2 atribuir, 4 nao_conferida), com cinco achados, A1–A5. A rodada 2 (a `lista-r2.json`, L43–L66, e as correções na raiz do dossiê: a C28, a N51, a S72 e a S73) resolveu os cinco. Nenhum achado novo.

| achado de lá | o que era | o que está no texto de hoje | aqui |
|---|---|---|---|
| A1 · MÉDIO · ATRIBUIR | "That is why the trench is so deep." (o pouso causal do §11 sem dono) | L52: "That, the agency suggests, is why the trench is so deep." (o verbo da fonte, "we suggest") | **resolvido** (F101–F103 confirmadas; O6 registra a composição) |
| A2 · LEVE · ENFRAQUECER | "about 1,200 feet too deep" na boca do estudo de 2019 (1.089 ft pelo número dele; 1.188 pelo sonar de 2021) | L43: "more than 1,000 feet too deep" (a C28): vale nas duas réguas | **resolvido** (F021–F026) |
| A3 · LEVE · PEDIR | "Earth's outer shell is made of giant slabs called plates." sem cópia local | a S72 (USGS, *This Dynamic Earth*, `sala-07-usgs-dynamic-earth-inside.txt`): "the lithosphere has been broken up into the moving plates" | **resolvido** (F087, classe texto) |
| A4 · LEVE · DA-FONTE | "a fish shaped like an eel" sem cópia | a S73 (`sala-08-fgom-ophidiidae.txt`): "eel-like in appearance, but they differ very obviously from the true eels" | **resolvido** (F073) |
| A5 · LEVE · PEDIR | "a French crew", "the French crew", "the French" (a nacionalidade de quem estava a bordo, sem cópia) | L44, L47, L61–L66 e a N51: a nacionalidade fica no barco ("a French deep-diving craft", "a French bathyscaphe"), e a tripulação é "a crew", "its crew", "the 1964 crew", "that crew" | **resolvido** (F014–F016, F057–F058, F065–F067, F255–F273) |

O que mais mudou de lá para cá, sem ter sido achado: a frase do Brownson perdeu o "who had taken charge of the ship a few months earlier" (L45; lá estava confirmada pelos 118 dias); o "no sounding was known" virou "no one was known" (L46, o mesmo alcance); "records" → "reports" (L48); "that points" → "this points" (L49); "records" → "reflects" (L50); a ponte "To see the trench's walls, you need a camera down there." saiu (L53); os dois cientistas subiram para a frase da lista de 2019 (L54, L55); "Working from" → "Using" (L56); "The same 2019 study" → "Stewart and Jamieson's study" (L57); "it has officially belonged to" → "that name has officially marked" (L58, mais preciso: é o nome que marca o ponto); a ordem de "By that line…" (L59); "The Limiting Factor reached its bottom" → "The expedition's sub, the Limiting Factor, reached the bottom there" (L60); "similar color, similar texture, similar shape" → "in color, texture and shape" (L65). Todas confirmadas. A anotação de lá sobre "Anegada a 205,9 mi do ponto" (M20) e a minha (200,96 mi até o ponto de costa de Anegada mais perto, V22) medem coisas diferentes; nenhuma das duas vai à voz ("far from its deepest point", A15).

A nota sobe de 8.5 para 9.5, e o veredito, de RESSALVA para PASS.

VEREDITO: PASS
