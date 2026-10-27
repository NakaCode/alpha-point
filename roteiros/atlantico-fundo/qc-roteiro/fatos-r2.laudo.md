# Laudo · verificador de fatos (independente, da Sala de controle) · rodada final · atlantico-fundo

Revisão julgada: `04ae6bfbeb60` · data-base 2026-10-26 (sha256 do texto falado `04ae6bfbeb6048c8993ece4150945de28cb81e5a6b9a2e906c4e803a16b0438c`)

COBERTURA: 241 de 248 linhas da tabela com veredito "confirmada" (afirmações checáveis em 136 das 146 frases do texto falado; o portão conta 161 porque parte "U.S." e "7.1" em pedaços; as outras 10 são pontes, perguntas e a assinatura, listadas em "As frases sem afirmação checável"). As 7 linhas fora de "confirmada": 1 corrigir, 2 atribuir, 4 nao_conferida. CHECADO POR INTEIRO: nenhuma frase checável ficou sem linha.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md`. `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`: exit 0, **PASSA**, sha256 `04ae6bfbeb60…`, 2.038 palavras, 29 parágrafos, 161 frases, média 12,7, maior 28, gancho de 161 palavras, "But" na palavra 49; problemas: nenhum; autoplágio: vazio. Os 8 alertas, todos conferidos aqui: "never" ×2 ("It never reached the deepest point, though." — S04; "had never been mapped" — S01, 91 % da Fossa das Sandwich do Sul, não do ponto de Porto Rico, N40 respeitado), "first" ×2 (o gancho e o p5: "the first person to reach the deepest point", nunca "at the bottom", N03 e R15 respeitados — S04, S05), "Milwaukee Deep" ×3 (o nome de 1939, a lista de 2019 e a ausência de 2026: nenhum é nome oficial de hoje, N08), e o "still" do gancho (o achado A2, abaixo).
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. Li as 161 frases do portão uma a uma (a regex de frases parte "U.S." em pedaços; na tabela, a frase vai inteira, como se fala). Toda frase com número, data, nome, superlativo, causa, atribuição ou universal virou uma linha ou mais; as frases-ponte também foram lidas, e as que afirmam algo (o eco de 1939, o transecto de uma milha) têm linha.
- **O diff desta rodada:** `_trabalho/aplicado-r1.md` (`4694e58092c2 → 0081efb271f0`: as 42 trocas L01–L42 da `lista-r1.json`, 35 diferenças, 30 → 29 parágrafos) e `_trabalho/pedidos-r1-feito.md` (`0081efb271f0 → 04ae6bfbeb60`: o P01 do escritor, só o 11º parágrafo, +20 palavras). Toda frase que entrou foi lida de novo contra a cópia local, inteira; a tabela cobre o texto inteiro de hoje, não só o diff. O que as trocas mudaram e que pesou aqui: L02 (a frase do gancho que vira o achado A2), L04, L10, L17/L18, L26 ("One down!"), L27, L30–L33, L36, L39–L42; o P01 trouxe as três frases novas do 11º parágrafo (o achado A1).
- **Contra o quê:** o dossiê (`pautas/atlantico-fundo/fundamento.json`: `fatos`, `nao_se_diz` N01–N50, `correcoes` C01–C27, `abertos` A01–A20, `nomes`, `regras_de_pauta` R01–R32) como mapa, e a cópia local em texto de cada fonte (`midia/atlantico-fundo/fontes/`, índices `fontes-local-a.json`, `-b.json` e `-sala.json`) como prova. Nenhum trecho veio do dossiê: todos saíram da cópia.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, 248 linhas (F001–F248), no formato do Peru; as 42 linhas de medição apontam para `roteiros/atlantico-fundo/qc-roteiro/fatos-medidas.txt` (M01–M47), com os termos de cada conta e a fonte de cada termo.
- **As contas** (refeitas nesta tarefa, nenhuma copiada do dossiê): `pautas/atlantico-fundo/_trabalho/scripts/verificador-final-medidas.py` (Vincenty no WGS84 sobre o Natural Earth 10m da máquina; conversões; datas) e `pautas/atlantico-fundo/_trabalho/scripts/verificador-final-aguadilla.py` (o município da costa mais perto, pelo Census `cb_2025_us_county_500k`, que já estava em `out/juneau/_tmp/geo-fontes/`). Sem rede, sem crédito.
- **O portão de fatos do canal** (`node ferramentas/portao-fatos.mjs atlantico-fundo`): a saída final está no fim deste laudo.
- **Citações aspadas:** uma só na voz, "One down!", letra a letra igual à PopSci (S05: "“One down!” Those were Victor Vescovo’s first words after climbing out of the hatch of the DSV Limiting Factor."), dita por quem estava a bordo ("had I not been on the Pressure Drop for a week by then"). As aspas de "deepest ocean," e de "fish" não são citação de fonte.

NOTA: 8.5/10 · toda afirmação checável da revisão `04ae6bfbeb60` tem veredito, e 241 das 248 linhas estão confirmadas pela cópia local, com as contas refeitas nesta tarefa. Não chega a 9 por um MÉDIO (A1: o pouso causal do 11º parágrafo sem atribuição, a armadilha do mecanismo) e por um LEVE de composição no gancho (A2: a régua do sonar de 2021 posta na boca do estudo de 2019). A3, A4 e A5 são lacunas de fonte de risco baixo (glossário e nacionalidade da tripulação), não defeitos provados. Nenhum GRAVE, nenhuma afirmação refutada pela fonte, nenhum item do "O que não se diz" na voz.

## A aritmética (as que a voz usa; o detalhe em `fatos-medidas.txt`)

| Na voz | A conta | Fonte dos termos |
|---|---|---|
| about 83 miles (×3) | 19.712N 67.311W → costa: 133,5 km = 82,93 mi (NE 10m); 134,3 km = 83,47 mi (Census 2025, em Aguadilla; Isabela a 7,5 m a mais) | S01; NE; Census |
| more than five miles | 8.378 m ÷ 1.609,344 = 5,206 mi | S01 |
| its top 1,500 feet | 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft | S26 (AP); S01 |
| about 9,500 miles | Vincenty até o Challenger Deep (11.369N 142.587E) = 9.488,06 mi | S01 |
| about 1,200 feet (p6) | 8.740 − 8.378 = 362 m = 1.187,7 ft | S02; S01 |
| about 1,200 feet (gancho, "a 2019 study found") | contra o 8.408 m do próprio estudo: 332 m = 1.089,2 ft (about 1,100; 1,200 fica a 10,2 %) | S02 — achado A2 |
| more than five miles (1883) | 4.561 braças × 6 = 27.366 ft = 5,183 mi | S11 |
| about 60 miles east | 19°40'50"N 66°23'40"W → ponto: 59,75 mi, a leste | S11; S01 |
| eight years | 1883 − 1875 = 8 | S12 |
| about 23,000 feet | 3.875 braças × 6 = 23.250 ft | S12 |
| more than 28,000 feet | 28.680 ft (The Sun) e 30.246 ft (DANFS): os dois passam | S09; S08 |
| more than four miles | 7.300 m = 4,536 mi; ~8.300 m = 5,157 mi | S06; S04 |
| about 24,000 feet | 7.300 m = 23.950 ft | S06 |
| about eight inches | 20 cm = 7,874 in | S30 |
| about 27,300 feet | 8.300–8.340 m = 27.231–27.362 ft; o meio, 27.297 | S28 |
| 15 years | 2018 − 2003 | S28; S53 |
| about three-quarters of an inch | ~20 mm = 0,787 in | S02 |
| more than 4,000 / about 13,000 feet | +1.300 m = 4.265 ft; −4.000 m = 13.123 ft | S28 |
| as high as 20 feet | 6,1 m = 20,0 ft | S29 |
| more than 100 people | 116 oficiais (140, 144 e "greater than 200" noutras contas do mesmo registro) | S29 |
| roughly six miles | nearly 10 km = 6,214 mi | S17 |
| about a century | 1492 − 1391 = 101; 1492 − 1381 = 111 | S17 ("almost exactly one century before Columbus") |
| almost 20,000 feet | 5.999,7 m = 19.684 ft | S32 |
| a dozen dives | 12 | S33 |
| about 27,500 / about 16 / about 7 feet | 8.378 m = 27.487 ft; 5 m = 16,4 ft; 8.378 − 8.376 = 2 m = 6,56 ft | S01 |
| more than three million | 3.285.874 (2020); 3.184.835 (2025) | S46; S47 |
| about two and a half hours | "approximate two-and-a-half hour descent" | S04 |
| Wednesday, December 19, 2018 | 19/12/2018 foi uma quarta | S05; S53 |
| about 28,700 feet | 8.740 m = 28.674,5 ft; o jornal de 1939, 28.680 ft (5,5 ft de diferença) | S02; S09 |
| about 24,400 feet | 7.450 m = 24.442 ft | S02 |
| about 36 miles west | 19.613N 67.847W → ponto: 35,58 mi | S02; S01 |
| about 100 miles | ponto → costa dominicana (La Altagracia, NE 10m): 99,68 mi | S01; NE |
| about three inches; three to four times | 65–78 mm = 2,56–3,07 in; 65/20 = 3,25, 78/20 = 3,90 | S02 |
| about nine-tenths | ~91 % | S01 |
| about 370 feet | 8.378 − 8.265 = 113 m = 370,7 ft | S01 |
| about 30 miles | gazetteer → Zhivago 2002: 31,80 mi; → Allaby 2009: 31,98 mi | S15; S02 |
| well to the north / just south | Meteor a 330,1 mi ao norte de 60°S; Factorian a 33,2 mi ao sul | S01 |
| about 20 miles | Factorian → Limiting (gazetteer): 20,85 mi | S15 |
| about 27,500 feet (o limite dos peixes) | ~8.400 m = 27.559 ft, arredondado para baixo (R32) | S31 |

## As decisões da Sala, conferidas na voz

- **Oceano Austral, Res. 02/2023 a 60°S:** "In 2023, the International Hydrographic Organization recognized the Southern Ocean. It begins at 60 degrees south." — S21 (A-3, PRO 3.3) e S20 (M-3, "02/2023 A-3"; "defined by the parallel of Latitude 60°S"). Sem "ratified", "first time" ou "official border" (N20, R28).
- **População, "more than three million", nunca quatro:** "More than three million people live in Puerto Rico." — S46 e S47; "people", não "citizens" (N12, R12).
- **Tsunami medieval:** na parte leste da fossa, "far from its deepest point" (Anegada a 205,9 mi do ponto, M20); magnitude "8 or more" atribuída aos modelos ("Computer models put it…"; S17: as "numerical tsunami simulations" que "give parent earthquake magnitudes of 8.0 or more"); recorrência "thousands of years" atribuída aos autores. Sem 8,2/8,5, sem "in 1385" (N24, R11).
- **Meteor Deep 8.265 ± 13 m; Factorian 7.432 m pelo sonar; Brownson 8.378 ± 5 (sonar) e 8.376 (submersível):** a voz usa só diferenças e o 27.500/16/7 ft; os números conferem com S01 (Tabela 1 e §3.1–3.2).
- **O mergulho em 19/12/2018:** "On Wednesday, December 19, 2018" — S05 (o prazo das 19 h de "Wednesday, December 19", com Vescovo de volta às 17h45) e S53 (o levantamento de 18–19/12/2018); nunca o 21/12 do release (N06).
- **Archimède "more than four miles down":** sim, e "The sources disagree on exactly how deep" (7.300 × ~8.300 m); sem data, sem "landed on the bottom", sem "French Navy" (N28, R05).
- **8.740 m e 1939 lado a lado:** "That's almost exactly what the newspapers reported in 1939." — comparação, sem dizer que um saiu do outro (N23, R06); sem "for decades" (N50, C27).
- **1939, "more than 28,000 feet":** sim (R04; C09: 28.680 e 8.750 m contra 30.246 ft).
- **O nome Brownson não se explica:** "Its commander was a Navy officer named Brownson…" — não diz que o Deep homenageia ele (N09, R07). O IHR de 1936 atribui a sondagem a Sigsbee; vale o relatório de 1883, que diz Brownson no comando e faz dele quem sondou ("Lieutenant-Commander Brownson inferred … he sounded in four thousand five hundred and sixty-one fathoms") (C13).

## O "O que não se diz", conferido

Os 50 itens (N01–N50) foram procurados no texto falado de hoje: nenhum aparece. Os que mais perto passam: N03/R15 ("the first person to reach the deepest point", nunca "at the bottom"); N05/R02 (nenhuma frase com duas profundidades; o submersível só como "within about 7 feet"); N22/R21 (o arame de 1883 "about 60 miles east of the deepest point"); N26/N35 (as 83 mi da costa mais perta, de Aguadilla, nunca de San Juan nem de Isabela); N32/R17 ("U.S. waters" definidas como a zona econômica exclusiva, nunca território); N39 (Porto Rico desliza; o mergulho de placa é dito do Pacífico e das Sandwich do Sul); N40 (o "never been mapped" é das Sandwich do Sul); N45 (a troca de peixes por pepinos-do-mar é "concluded" pelos cinco autores, com a ressalva "can't be checked again"); N47 (nenhum km ou metro na fala); N50 ("saw no snailfish", não "no fish at all"; "the same sub", não "Vescovo went back").

## As armadilhas de fato, uma a uma

- **Universais:** "no sounding was known to have brought back a sample and a temperature from that deep" (atribuído ao tempo e ao relatório: "This is believed to be the greatest depth from which bottom specimens and temperature have been obtained"); "a record for the Atlantic at the time" (DANFS e Sverdrup); "the only known sign" (atribuído aos autores de 2025: "the only reported sign"); "no permanent residents" (NASA 2021); "further below normal than anywhere else on Earth" (atribuído ao USGS: "the most negative free-air gravity anomaly on earth"); "no fish lives much deeper" (atribuído à NOAA); "every time" (S02: "consistently shallower than those published"). Todos com fonte e atribuição. Nenhum universal solto.
- **Composição:** (1) o gancho atribui ao estudo de 2019 uma diferença que só sai do número do sonar de 2021 (achado A2); (2) "Hundreds of coral boulders … along roughly six miles of its north shore": os ~10 km (6,2 mi) são o vão dos sete blocos datados (S17, "They span a shore‐parallel distance of nearly 10 km"), e as centenas de blocos estão no mesmo campo; como o campo não é menor que o vão dos datados, "roughly six miles" não exagera — confirmada, com a nota; (3) "as high as 20 feet up Puerto Rico's west coast": o máximo de 6,1 m é do registro inteiro (S29), e o próprio registro põe as ondas de 5,5 a 6 m em Punta Agujereada, na ponta noroeste, e o estrago "along the western and northern coasts"; Kilbourne (S17) diz "the deadly 1918 tsunami in western Puerto Rico" — confirmada, com a nota; (4) "off Aguadilla": pelo Census 2025, o ponto de costa mais perto está em Aguadilla, mas o de Isabela fica só 7,5 m mais longe (83,47 mi os dois) — confirmada ("off Isabela" também caberia; "off Aguadilla" é o mais perto, por 7,5 m).
- **As réguas trocadas:** sonar × submersível (só "within about 7 feet"); a lista (8.740) × o sonar (8.378) × a estimativa de 2019 (8.408); o 1939 (28.680 ft) × a lista (28.674,5 ft); o Archimède (7.300 × ~8.300 m); o USGS (8.300–8.340 m) × o OFR 2006 ("water depths of 8,400 meters", número redondo da introdução, dentro da faixa); o limite dos peixes (8.400 m = 27.559 ft, "about 27,500" para baixo, R32). Nenhuma troca de régua na voz, fora o A2.
- **O mecanismo de por que a fossa é funda:** o 10º parágrafo está certo e atribuído (o contraste com o Pacífico, S27; o deslizamento com pouca subducção, S02 e S27; a gravidade e a força para baixo, "According to the USGS" e "The agency says"). No 11º, a laje e os blocos estão atribuídos ("By the agency's reconstruction", "To the USGS"), e "limestone" traduz "carbonate platform" por decisão do dossiê (F44). O pouso "That is why the trench is so deep." dá a leitura do USGS como fato, sem atribuição, enquanto a fonte "suggest[s]" e ainda "investigate[s] the causes of the subsidence" (achado A1).
- **Datas e nomes:** 27/01/1883 (S12; o relatório de 1883 diz "the 27th of January", no ano fiscal que termina em junho de 1883); Brownson no comando desde 01/10/1882 (o grupo hidrográfico desde agosto de 1882: "a few months earlier", 118 dias); o Challenger em 26/03/1875; o Milwaukee em 14/02/1939 e o boletim do The Sun em 28/07/1939 ("That summer"); 1964 e o relato de 1965 ("published the next year"); 1970; 2002–2003; 11/10/1918; 1381–1391; 26/04/2015; 18–19/12/2018; fevereiro de 2019; 2020; 2021 (o artigo e o gazetteer de 16/06/2021); 02/2023; 24/08/2026. Nomes: Brownson, Nares, Archimède, Deep Discoverer, Okeanos Explorer, Pressure Drop, Limiting Factor, Victor Vescovo, Heather Stewart, Alan Jamieson, Meteor, Factorian, Limiting Deep, Mount Michael, Aguadilla, Anegada, Ron Brown — grafias conferidas nas cópias.

## A varredura "estado do mundo" (still / today / now / as of / o presente)

- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." — a API do gazetteer (S15) deu `totalItems: 0` para "Milwaukee" em 26/10/2026. Vale hoje; volátil.
- "More than three million people live in Puerto Rico." — 3.285.874 (Censo de 2020) e 3.184.835 (estimativa de 01/07/2025): vale hoje.
- "Both Britain and Argentina claim them." — Marine Regions (S16): "Overlapping claim … United Kingdom / Argentina". Vale hoje.
- "The organization says the line carries no political meaning, and not every country uses it. Argentina, for one, disagrees." — o M-3 de 2026 (S20) ainda traz a frase e a reserva da Argentina. Vale hoje.
- "Since 2021, it has officially belonged to the spot the sonar found" — o gazetteer de 26/10/2026 (S15) dá ao Meteor Deep o ponto 55.23069S, 26.17294W, "that of the deepest point" (o do sonar, S01: 55.230°S, 26.173°W). Vale hoje.
- "The islands there are a chain of small volcanoes, with no permanent residents." — NASA 2021 (S39) e 2026 (S40). Vale hoje.
- "By NOAA's estimate, no fish lives much deeper…" — a página da NOAA (S31) lida em 26/10/2026.
- O presente de "the deepest point of the Atlantic is about 27,500 feet down" e de "That point lies about 83 miles…" é o do artigo de 2021, sem medida mais nova nas cópias.
- O "still" do gancho é de 2019 ("a 2019 study found that the official list … still had"), não de hoje.

## ACHADOS

- **A1 · MÉDIO · ATRIBUIR · p3, 11º parágrafo (linhas F098 e F099):** "That is why the trench is so deep." A frase pousa a pergunta da parte ("Why is the trench so deep?") com a leitura do USGS dita como fato do narrador. A fonte não afirma a causa: "we suggest that these features [a grande profundidade, a gravidade baixa, a plataforma inclinada] are manifestations of large vertical movements" e "the maps are used to investigate the causes of the subsidence and deformation of this unusually deep part of the Atlantic Ocean" (S28). É a armadilha do mecanismo. O próprio escritor deixou a forma atribuída para este verificador (pedidos-r1-feito.md, "O que não coube").
  - **Troca exata:** "That is why the trench is so deep." → "That, to the USGS, is why the trench is so deep." (+3 palavras; nenhum número, data ou nome novo; o 11º parágrafo passa de 75 para 78 palavras — se a Sala quiser chegar perto do teto de 75, o corte que não mexe em fato é tirar "big" e "itself" da frase de cima: "To the USGS, that tilt records vertical shifts in this part of the trench and in Puerto Rico.", −2, e o parágrafo fica em 76, que a fonte ainda sustenta com "large vertical movements of a segment of the Puerto Rico Trench, its forearc, and the island of Puerto Rico"; ou aceitar 78).
- **A2 · LEVE · ENFRAQUECER · gancho, 2º parágrafo (linha F022, corrigir):** "And a 2019 study found that the official list of undersea features still had the Atlantic about 1,200 feet too deep, even after sonar showed otherwise." O verbo "found" põe no estudo de 2019 uma diferença que ele não achou: as about 1,200 feet saem do número do sonar de 2021 (8.740 − 8.378 = 362 m = 1.188 ft); o estudo de 2019 tinha como ponto mais fundo 8.408 m (S02), e a diferença dele é 332 m = 1.089 ft (about 1,100). Pela régua de arredondamento do canal, "about 1,200" não arredonda 1.089 (10,2 %). O resto da frase está confirmado (o estudo, a lista a 8.740 m, o sonar do USGS de 2002–2003). Em p6, "The floor the sonar found is about 1,200 feet shallower." está certa (é a régua do sonar) e não muda.
  - **Troca exata:** "about 1,200 feet too deep" → "more than 1,000 feet too deep" (vale para as duas réguas: 1.089 e 1.188 ft; mesmo número de palavras; o gancho continua pagando o p6 sem trocar a régua).
  - (A outra forma, se a Sala preferir manter o número do sonar: tirar o "found" do estudo — ex.: "And the official list of undersea features still had the Atlantic about 1,200 feet too deep in 2019, even after sonar showed otherwise." — REDIZER, que mexe no gancho "palavra por palavra" do plano e por isso fica como segunda opção.)
- **A3 · LEVE · PEDIR (nao_conferida) · p3, 10º parágrafo (linha F084):** "Earth's outer shell is made of giant slabs called plates." É glossário (a definição de placa tectônica), certo no conteúdo, mas nenhuma cópia local o diz; o dossiê não tem fonte para ele. Não pede mudança no texto: a Sala ou anexa uma fonte (uma página do USGS sobre placas, em texto) ou aceita como glossário, registrado. (O escritor notou "slab" para duas coisas a uma frase de distância; não é fato, fica com a clareza.)
- **A4 · LEVE · DA-FONTE (nao_conferida) · p2, 8º parágrafo (linha F071):** "A cusk-eel is a fish shaped like an eel, and this one was about eight inches long." O "shaped like an eel" não está em nenhuma cópia (o Australian Museum diz "a species of cuskeel (family Ophidiidae)"; a NOAA, "a deep-sea cusk eel"). Os 20 cm (= 7,87 in, "about eight inches") estão confirmados.
  - **Troca exata, se a Sala não anexar fonte:** "A cusk-eel is a fish shaped like an eel," → "A cusk-eel is a deep-sea fish," (a NOAA, S31: "a deep-sea cusk eel"; −2 palavras). Ou anexar uma fonte em texto da família Ophidiidae e manter.
- **A5 · LEVE · PEDIR (nao_conferida) · gancho, 2º parágrafo, e p2, 7º parágrafo (linhas F014 e F062):** "a French crew" / "the French crew reported a crowd of fish" (e, por eco, "the French crew's fish", "the French had counted", "the animals the French saw"). As cópias dizem que o veículo era francês ("the French submersible Archimede", S04; "the 1964 Archimède bathyscaphe", S06), não quem estava a bordo nem quem relatou; o dossiê deixa aberto de quem era o Archimède (A19) e veta "French Navy" (N28); a forma "French crew" vem do próprio dossiê (F37, como_dizer). Provavelmente certa, mas sem fonte local.
  - **O pedido:** a Sala anexa uma fonte em texto que nomeie o autor do relato de 1965 ou a tripulação de 1964 (a referência do relato no DSR I 2020, que só tem o resumo na cópia). Sem ela, a troca mínima no gancho é "In 1964, a French crew dove into the Puerto Rico Trench" → "In 1964, a crew in a French bathyscaphe dove into the Puerto Rico Trench" (+3 palavras; "French bathyscaphe" é a forma de R05 e de S06) e, no 7º parágrafo, "the French crew reported a crowd of fish" → "its crew reported a crowd of fish" (o "its" é o Archimède da frase de antes); os ecos de p7 e p8 ("the French crew's fish", "the French had counted", "the animals the French saw") passam a ler como "os do batiscafo francês" e podem ficar.

Nenhum achado GRAVE. Nenhuma afirmação refutada pela fonte.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

"Why is the trench so deep?" · "So what is really down there, and how did anyone find out?" · "You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins." (a assinatura) · "Keep those fish in mind." · "Neither could map the floor." · "That took a different kind of sonar." · "On the trench's walls, the agency's maps showed something else." · "To see the trench's walls, you need a camera down there." · "The sonar settled that." (o resultado está nas frases vizinhas, F-linhas de 8.428 × 8.378 e 8.265) · "Off Puerto Rico, the French crew's fish were waiting for a second look.". São 10 das 146 frases; as partes que a regex do portão corta em "U.", "S." e "7."/"1." estão cobertas pela frase inteira.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Nenhuma pessoa anônima que devesse ter nome: "a Navy officer named Brownson" (W. H. Brownson, S11), "Captain Nares" (S12), "Victor Vescovo" (S04, S05), "a reporter on board" (o autor da reportagem da PopSci, S05; a voz não precisa do nome), "two scientists, Heather Stewart and Alan Jamieson" (S02), "five authors" (Jamieson, Linley, Stewart, Nargeolet e Vescovo, S06), "The scientists who dated the coral" (Kilbourne et al. 2025, S17), "the French crew" (sem nome em cópia nenhuma: A5).

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." — refazer o GET do gazetteer (`nameContains=Milwaukee`) antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." — a próxima estimativa do Census (vintage 2026) sai no fim do ano; só muda se cair abaixo de 3 milhões.
- "In August 2026, a Landsat satellite caught the heat…" — fato datado, não muda.
- "Argentina, for one, disagrees." — a reserva no M-3; reconferir se sair edição nova do M-3.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- A1: a atribuição no pouso, e o teto de 75 palavras do parágrafo (decisão da Sala).
- A2: "more than 1,000" × tirar o "found" (o gancho é "palavra por palavra" do plano final).
- A3, A4, A5: anexar fonte ou aceitar como glossário/forma do dossiê.

## PADRÕES

- O pouso de parágrafo é onde a atribuição cai: a frase-resposta ("That is why…") herda a fonte do bloco no ouvido, mas não no papel (A1).
- O gancho reescrito por lista (L02) juntou uma régua de 2021 a um verbo de 2019 (A2): quando uma frase troca o sujeito ("for decades, the list" → "a 2019 study found"), o número tem de ser refeito na régua do sujeito novo.
- Glossários de uma oração (placas, cusk-eel, "French crew") passam sem fonte porque "todo mundo sabe": entram como nao_conferida até a Sala anexar a cópia (A3–A5).

## NÃO FOI CHECADO

- **F084 (A3):** a definição de placa tectônica (10º parágrafo). Falta uma cópia local que a traga; não é recusa de robô, é falta de insumo. É o AC16 da rodada 1, ainda aberto.
- **F071 (A4):** "shaped like an eel" (8º parágrafo). Nenhuma cópia descreve a forma do cusk-eel.
- **F014 e F062 (A5):** a nacionalidade da tripulação de 1964 (gancho e 7º parágrafo). As cópias dão a do veículo, não a de quem estava a bordo.
- Nenhuma frase ficou sem veredito por recusa de robô: esta tarefa não usou rede. Os sites que já tinham recusado (a API do Census, a página da OGL no nationalarchives.gov.uk, os webapps da BGS) não foram tentados de novo.
- O que o dossiê deixou aberto (A01–A20) e a voz toca vai na forma que o dossiê manda: A01/A02 ("the sources disagree", "the exact same spot", sem número nem dia); A03/A04 ("A 2019 study found…", "more than 28,000 feet"); A05 (o nome Brownson não se explica); A07 (nada sobre a GEBCO mostrar o ponto); A08 (o Mount Michael sem altura); A10 ("more than 100 people", sem causa, magnitude atribuída à base da NOAA); A11 ("hundreds of miles"); A14 ("magnitude 8 or more", dos modelos); A15 ("far from its deepest point", sem número); A17 (as "four new species" fora); A18 ("in 2019"); A19 ("a French bathyscaphe" — e o "French crew" do A5).

## Comparação com a rodada 1 (`fatos-r1.laudo.md`, lida depois de escrever este laudo)

A rodada 1 julgou `4694e58092c2` (151 frases, 291 linhas, nota 7.5 de 10, veredito RESSALVA) e deu 16 achados, AC01–AC16. A lista fechada da r1 (L01–L42) e o P01 do escritor resolveram 15; um continua aberto; dois achados desta rodada nasceram das trocas.

| r1 | O que era | Hoje (`04ae6bfbeb60`) | Estado |
|---|---|---|---|
| AC01 · MÉDIO | "for decades" sobre a lista oficial (gancho) | L02: "And a 2019 study found that the official list … still had the Atlantic about 1,200 feet too deep…" — o "for decades" saiu | resolvido; a troca criou o A2 (o "found" põe no estudo de 2019 a régua do sonar de 2021) |
| AC02 · MÉDIO | "Until at least 2019, the official list…" (a fonte única se contradiz) | L27: "A 2019 study found that the official list … had the Milwaukee Deep at about 28,700 feet." | resolvido |
| AC03 · MÉDIO | "no longer includes" | L32/L33: "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." | resolvido |
| AC04 · MÉDIO | "It found no fish at all." | L01: "It saw none of those fish." | resolvido |
| AC05 · MÉDIO | "In their check, … every time" | L29: "Off Puerto Rico, the real floor came out shallower every time." | resolvido |
| AC06 · MÉDIO | a laje sem "reconstructed" | L11: "By the agency's reconstruction, a tilted slab of limestone…" | resolvido |
| AC07 · MÉDIO | "The scientists who went back concluded…" | L42: "In a 2020 paper on that return visit, five authors concluded…"; "One of the five was Vescovo." | resolvido |
| AC08 · LEVE | "a net hauled up from the trench" (a NOAA não nomeia a fossa) | L07: "a net brought back a small cusk-eel"; "The Australian Museum lists the same catch, from the Puerto Rico Trench." | resolvido |
| AC09 · LEVE | "in the eastern part of the trench" (o Dive 09) | L19: "That's a long way east of its deepest point." | resolvido |
| AC10 · LEVE | "the ship lowered instruments" | L21–L23: "the team measured how fast sound travels…" | resolvido |
| AC11 · LEVE | "low, flat island" | L13: "a low island" | resolvido |
| AC12 · LEVE | "it found none" | L40: "it saw no snailfish" | resolvido |
| AC13 · LEVE | "about as many as" (contagem × densidade) | L41: "spread about as thickly as the fish the French had reported" | resolvido |
| AC14 · LEVE | "one other contender" | L34: "another contender" | resolvido |
| AC15 · LEVE | "older books" | L39: "older sources" | resolvido |
| AC16 · LEVE | a definição de placa sem cópia | a frase não mudou e nenhuma cópia entrou | **aberto: é o A3** |

- **Novos nesta rodada:** A1 (o pouso do P01, "That is why the trench is so deep.", que a r1 não tinha porque a frase não existia) e A2 (nasceu da L02). Os dois tocam frases do diff, como o pedido manda olhar.
- **Mais estrito que a r1:** A4 e A5. A r1 confirmou "a French crew" pelo "French submersible" do release e o "shaped like an eel" pelo nome comum. Aqui as duas ficam nao_conferida, porque nenhuma cópia diz uma nem outra; são lacunas de fonte de risco baixo, não defeitos provados, e o texto só muda se a Sala não anexar a fonte.
- **Confirmado de novo pelo caminho próprio:** as 83 mi (a r1 refez a conta do cético sobre o Census 2023; aqui, Natural Earth 10m, 82,93 mi, e Census 2025, 83,47 mi, com o município conferido: Aguadilla, Isabela a 7,5 m a mais).
- **A tabela:** a r1 tinha 291 linhas sobre 151 frases; esta tem 248 sobre as 146 frases de hoje (as frases cortadas e juntadas pela lista saíram, e as linhas por frase foram reagrupadas). Nenhuma linha foi copiada da r1: cada trecho foi tirado da cópia local de novo.
- **A nota:** de 7.5 para 8.5; o veredito, RESSALVA nas duas.

## A tabela (uma linha por afirmação; o trecho literal de cada uma está em `fatos-tabela.json`)

| id | § | veredito | classe | fonte | afirmação |
|---|---|---|---|---|---|
| F001 | 1 | confirmada | texto | S01 | O ponto mais fundo do Atlântico é o Brownson Deep, na Fossa de Porto Rico (8.378 ± 5 m). |
| F002 | 1 | confirmada | texto | S49 | Porto Rico é território dos EUA. |
| F003 | 1 | confirmada | medicao | conta do verificador (M01) | Do ponto mais fundo à costa mais perto de Porto Rico: 82,93 mi (NE 10m) e 83,47 mi (Census 2025): about 83. |
| F004 | 1 | confirmada | medicao | conta do verificador (M02) | 8.378 m = 5,206 mi: mais de cinco milhas. |
| F005 | 1 | confirmada | texto | S01 | O número do sonar: 8.378 ± 5 m. |
| F006 | 1 | confirmada | imprensa | S26 | O Everest tem 8.848,86 m (China e Nepal, 2020). |
| F007 | 1 | confirmada | medicao | conta do verificador (M03) | 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft acima da água: o topo de 1.500 ft fica de fora. |
| F008 | 1 | confirmada | texto | S25 | O ponto mais fundo do oceano é o Challenger Deep, na Fossa das Marianas, no Pacífico. |
| F009 | 1 | confirmada | texto | S01 | O Challenger Deep fica na Fossa das Marianas, no Pacífico. |
| F010 | 1 | confirmada | medicao | conta do verificador (M04) | Do ponto mais fundo do Atlântico ao Challenger Deep: 9.488 mi. |
| F011 | 2 | confirmada | texto | S06 | O mergulho do batiscafo Archimède na Fossa de Porto Rico foi em 1964. |
| F012 | 2 | confirmada | texto | S06 | O relato contou 200 peixes-caracol num transecto de uma milha. |
| F013 | 2 | confirmada | imprensa | S04 | O Archimède era francês. |
| F014 | 2 | nao_conferida | texto | F37 (dossiê); S06 e S04 dizem só que o submersível era francês | A tripulação (ou o observador que relatou os peixes) era francesa: nenhuma cópia local nomeia quem estava a bordo em 1964; as cópias dizem só 'French submersible' e 'bathyscaphe Archimède'. A forma vem do dossiê (F37, como_dizer). |
| F015 | 2 | confirmada | texto | S06 | Em 2019 o Limiting Factor voltou ao mesmo lugar. |
| F016 | 2 | confirmada | texto | S06 | Nenhum peixe-caracol foi visto. |
| F017 | 2 | confirmada | imprensa | S04 | O primeiro humano chegou ao ponto mais fundo do Atlântico. |
| F018 | 2 | confirmada | texto | S53 | O levantamento e o mergulho foram em 18 e 19 de dezembro de 2018. |
| F019 | 2 | confirmada | texto | S02 | O estudo de 2019 (Stewart e Jamieson) achou o Milwaukee Deep a 8.740 m no GEBCO Gazetteer, a lista oficial. |
| F020 | 2 | confirmada | texto | S02 | O estudo é de 2019. |
| F021 | 2 | confirmada | texto | S28 | O sonar do USGS (2002–2003) já mostrava 8.300–8.340 m, mais raso. |
| F022 | 2 | corrigir | medicao | conta do verificador (M05) | Composição: as 'about 1,200 feet' saem do número do sonar de 2021 (8.740 − 8.378 = 362 m = 1.188 ft); contra o ponto mais fundo do próprio estudo de 2019 (8.408 m), a diferença é 332 m = 1.089 ft (about 1,100), e 1,200 fica a 10,2 % dela. Atribuídas ao estudo de 2019 ('found'), as about 1,200 feet não são o que ele achou. |
| F023 | 3 | confirmada | texto | S12 | A sondagem do Blake, navio do U.S. Coast and Geodetic Survey, em 27 de janeiro de 1883. |
| F024 | 3 | confirmada | texto | S11 | O Blake era um vapor (steamer). |
| F025 | 3 | confirmada | texto | S11 | O fio de aço com um peso de chumbo de 36 libras. |
| F026 | 3 | confirmada | texto | S11 | A sondagem foi ao norte de Porto Rico ('Porto Rico' na grafia de 1883). |
| F027 | 3 | confirmada | texto | S11 | Brownson, da Marinha dos EUA (U.S.N.), assumiu o comando do Blake em 1º de outubro de 1882 (e o grupo hidrográfico em agosto de 1882); a sondagem foi dele, em janeiro de 1883. O IHR de 1936 nomeia Sigsbee, mas o relatório de 1883 (fonte primária) diz Brownson. |
| F028 | 3 | confirmada | texto | S11 | Bartlett foi substituído no comando do navio em 1º de outubro de 1882 por Brownson. |
| F029 | 3 | confirmada | texto | S11 | A sondagem deu 4.561 braças. |
| F030 | 3 | confirmada | medicao | conta do verificador (M06) | 4.561 braças = 27.366 ft = 5,183 mi: mais de cinco milhas. |
| F031 | 3 | confirmada | texto | S11 | A posição da sondagem: 19°40'50"N, 66°23'40"W. |
| F032 | 3 | confirmada | medicao | conta do verificador (M07) | Da sondagem do Blake ao ponto do sonar: 59,75 mi, a leste. |
| F033 | 4 | confirmada | texto | S11 | A sondagem trouxe amostra do fundo e temperatura. |
| F034 | 4 | confirmada | texto | S11 | O relatório do ano fiscal de 1883 descreve o fundo como lodo marrom. |
| F035 | 4 | confirmada | texto | S11 | Nenhum registro conhecido de amostra e temperatura de tal profundidade. |
| F036 | 5 | confirmada | texto | S07 | O Challenger achou a fossa em 1875. |
| F037 | 5 | confirmada | texto | S12 | O HMS Challenger, do capitão Nares, em março de 1875. |
| F038 | 5 | confirmada | texto | S12 | Oito anos antes da sondagem do Blake. |
| F039 | 5 | confirmada | texto | S11 | A sondagem do Challenger fica 142,95 mi a leste do ponto mais fundo (M09). |
| F040 | 5 | confirmada | texto | S12 | A sondagem do Challenger: 3.875 braças. |
| F041 | 5 | confirmada | medicao | conta do verificador (M08) | 3.875 braças = 23.250 ft: about 23,000. |
| F042 | 5 | confirmada | texto | S01 | A zona de subducção tem uns 810 km (503 mi) e corre quase paralela à costa norte de Porto Rico. |
| F043 | 6 | confirmada | texto | S08 | O Milwaukee, ao norte de Hispaniola e Porto Rico, em 14 de fevereiro de 1939. |
| F044 | 6 | confirmada | imprensa | S10 | A sondagem foi sônica (eco). |
| F045 | 6 | confirmada | imprensa | S09 | O Milwaukee era um cruzador. |
| F046 | 6 | confirmada | imprensa | S09 | O recorde de 28.680 ft (o boletim de 1939); o DANFS dá 30.246 ft; os dois passam de 28.000. |
| F047 | 6 | confirmada | texto | S08 | Era a maior profundidade já achada no Atlântico. |
| F048 | 6 | confirmada | imprensa | S09 | O nome Milwaukee Deep vem do cruzador. |
| F049 | 6 | confirmada | imprensa | S09 | O boletim saiu no The Sun de 28 de julho de 1939. |
| F050 | 6 | confirmada | imprensa | S09 | O boletim foi preparado pela National Geographic Society e distribuído pelo WNU Service (Western Newspaper Union). |
| F051 | 6 | confirmada | imprensa | S09 | A sondagem por eco mede o tempo de volta do som: dá a distância, não uma imagem. |
| F052 | 7 | confirmada | texto | S06 | O mergulho do Archimède na Fossa de Porto Rico, em 1964. |
| F053 | 7 | confirmada | texto | S06 | O Archimède era um batiscafo. |
| F054 | 7 | confirmada | imprensa | S04 | O Archimède era francês. |
| F055 | 7 | confirmada | texto | S06 | 7.300 m (Jamieson et al. 2020). |
| F056 | 7 | confirmada | medicao | conta do verificador (M10) | 7.300 m = 4,536 mi; 8.300 m = 5,157 mi: mais de quatro milhas. |
| F057 | 7 | confirmada | texto | S06 | Jamieson et al. dão 7.300 m. |
| F058 | 7 | confirmada | imprensa | S04 | O release da Five Deeps dá uns 8.300 m. |
| F059 | 7 | confirmada | imprensa | S04 | O Archimède não chegou ao ponto mais fundo. |
| F060 | 7 | confirmada | texto | S06 | O relato: 200 peixes-caracol, a 7.300 m. |
| F061 | 7 | confirmada | medicao | conta do verificador (M11) | 7.300 m = 23.950 ft: about 24,000. |
| F062 | 7 | nao_conferida | texto | F37 (dossiê); S06 e S04 dizem só que o submersível era francês | A tripulação que relatou os peixes era francesa (ver a linha do parágrafo 2): nenhuma cópia local nomeia a tripulação nem o observador de 1964. |
| F063 | 7 | confirmada | texto | S06 | 200 peixes-caracol num transecto de uma milha. |
| F064 | 7 | confirmada | texto | S06 | O relato saiu em 1965; peixes-caracol (família Liparidae). |
| F065 | 7 | confirmada | texto | S06 | Liparidae é uma família de peixes. |
| F066 | 8 | confirmada | texto | S31 | A NOAA registra o cusk-eel de 1970, pescado numa rede. |
| F067 | 8 | confirmada | texto | S28 | A NOAA é a National Oceanic and Atmospheric Administration. |
| F068 | 8 | confirmada | imprensa | S30 | O peixe tem 20 cm. |
| F069 | 8 | confirmada | medicao | conta do verificador (M12) | 20 cm = 7,874 in: about eight. |
| F070 | 8 | confirmada | imprensa | S30 | O cusk-eel é um peixe (família Ophidiidae). |
| F071 | 8 | nao_conferida | texto | nenhuma cópia local | O cusk-eel tem forma de enguia: nenhuma cópia local descreve a forma (o Australian Museum diz 'cuskeel (family Ophidiidae)'; a NOAA, 'a deep-sea cusk eel'). |
| F072 | 8 | confirmada | imprensa | S30 | O Australian Museum lista o mesmo peixe, da Fossa de Porto Rico, a 8.370 m. |
| F073 | 8 | confirmada | texto | S31 | A rede desceu a 8.370 m. |
| F074 | 8 | confirmada | texto | S01 | O ponto mais fundo: 8.378 m; a rede ficou 8 m acima. |
| F075 | 8 | confirmada | texto | S31 | Não se sabe se o peixe foi pego no fundo da rede. |
| F076 | 8 | confirmada | texto | S06 | O Archimède viu um transecto de uma milha. |
| F077 | 9 | confirmada | texto | S28 | O USGS mapeou a fossa com multifeixe em 2002 e 2003. |
| F078 | 9 | confirmada | texto | S01 | O multifeixe cobre uma faixa larga (2–3 vezes a profundidade, ~15–20 km). |
| F079 | 9 | confirmada | texto | S28 | Três cruzeiros. |
| F080 | 9 | confirmada | texto | S28 | O navio Ron Brown, da NOAA. |
| F081 | 9 | confirmada | texto | S28 | O setor mais fundo: 8.300–8.340 m. |
| F082 | 9 | confirmada | medicao | conta do verificador (M13) | 8.320 m = 27.297 ft: about 27,300. |
| F083 | 9 | confirmada | medicao | conta do verificador (M14) | 2018 − 2003 = 15. |
| F084 | 10 | nao_conferida | texto | nenhuma cópia local | Definição de placa tectônica (a casca externa da Terra em placas gigantes): nenhuma cópia local a define; é glossário. |
| F085 | 10 | confirmada | texto | S27 | No Pacífico, as fossas ficam onde uma placa mergulha sob outra. |
| F086 | 10 | confirmada | texto | S02 | Na Fossa de Porto Rico as placas deslizam lado a lado, com pouca subducção. |
| F087 | 10 | confirmada | texto | S27 | O mesmo, pelo USGS. |
| F088 | 10 | confirmada | texto | S02 | A placa do Caribe vai para leste a uns 20 mm por ano. |
| F089 | 10 | confirmada | medicao | conta do verificador (M15) | 20 mm = 0,787 in: about three-quarters. |
| F090 | 10 | confirmada | texto | S27 | A anomalia de gravidade mais negativa da Terra (−380 mGal). |
| F091 | 10 | confirmada | texto | S27 | O que indica uma força ativa para baixo. |
| F092 | 11 | confirmada | texto | S28 | Uma plataforma carbonática inclinada entre +1.300 m e −4.000 m (cotas reconstruídas); 'limestone' traduz 'carbonate platform' (dossiê). |
| F093 | 11 | confirmada | medicao | conta do verificador (M16) | +1.300 m = 4.265 ft: mais de 4.000. |
| F094 | 11 | confirmada | texto | S28 | −4.000 m (reconstruída). |
| F095 | 11 | confirmada | medicao | conta do verificador (M17) | 4.000 m = 13.123 ft: about 13,000. |
| F096 | 11 | confirmada | texto | S28 | O USGS sugere grandes movimentos verticais de um segmento da fossa e da ilha. |
| F097 | 11 | confirmada | texto | S28 | Blocos rotacionados indicam subsidência da fossa. |
| F098 | 11 | atribuir | texto | S28 | O USGS só 'sugere' que a grande profundidade e as outras feições são manifestações de movimentos verticais, e diz que os mapas servem para investigar as causas da subsidência: a frase dá a explicação do USGS como fato, sem atribuição. |
| F099 | 11 | atribuir | texto | S28 | A sugestão do USGS liga a grande profundidade a movimentos verticais. |
| F100 | 12 | confirmada | texto | S28 | Numerosos escorregamentos submarinos na borda da plataforma. |
| F101 | 12 | confirmada | texto | S28 | O risco de tsunami por escorregamento parece alto. |
| F102 | 12 | confirmada | texto | S29 | Terremoto de 11 de outubro de 1918 na Passagem de Mona, a oeste de Porto Rico. |
| F103 | 12 | confirmada | texto | S29 | A falha foi no Mona Canyon, não na fossa. |
| F104 | 12 | confirmada | texto | S17 | Nenhuma das fontes do tsunami medieval explica o de 1918. |
| F105 | 12 | confirmada | texto | S29 | Magnitude 7,1 na base da NCEI/NOAA. |
| F106 | 12 | confirmada | texto | S29 | Altura máxima da água: 6,1 m; ondas de até 6 m nas costas oeste e norte (Aguadilla, Punta Agujereada). |
| F107 | 12 | confirmada | medicao | conta do verificador (M18) | 6,1 m = 20,0 ft. |
| F108 | 12 | confirmada | texto | S29 | 116 mortes oficiais (outras contas passam de 140 e de 200). |
| F109 | 13 | confirmada | texto | S17 | O tsunami de Anegada é o único sinal de um grande terremoto na parte leste da fossa. |
| F110 | 13 | confirmada | texto | S17 | Anegada é uma ilha baixa. |
| F111 | 13 | confirmada | texto | S17 | Anegada fica nas Ilhas Virgens Britânicas. |
| F112 | 13 | confirmada | texto | S17 | Centenas de blocos de coral a centenas de metros terra adentro. |
| F113 | 13 | confirmada | texto | S17 | Os blocos datados ladeiam a costa norte, que dá para a fossa, por quase 10 km. |
| F114 | 13 | confirmada | medicao | conta do verificador (M19) | Quase 10 km = 6,21 mi: roughly six (é o vão dos sete blocos datados; o campo de blocos não é menor que ele). |
| F115 | 13 | confirmada | texto | S17 | O tsunami data de 1381–1391 d.C. |
| F116 | 13 | confirmada | texto | S17 | O estudo é de 2025 (Geophysical Research Letters). |
| F117 | 13 | confirmada | texto | S17 | Datação por urânio nos corais (U-series). |
| F118 | 13 | confirmada | texto | S17 | Quase exatamente um século antes de Colombo (1492 − 1391 = 101). |
| F119 | 14 | confirmada | texto | S17 | Na parte leste da fossa; Anegada fica a 205,9 mi do ponto mais fundo (M20). |
| F120 | 14 | confirmada | texto | S17 | As simulações numéricas dão magnitude 8,0 ou mais. |
| F121 | 14 | confirmada | texto | S17 | Magnitude 8,0 ou mais. |
| F122 | 14 | confirmada | texto | S17 | O único sinal relatado de um grande terremoto na parte leste da fossa. |
| F123 | 14 | confirmada | texto | S17 | Recorrência de milhares de anos. |
| F124 | 15 | confirmada | texto | S32 | O Dive 09 do Okeanos Explorer, na parede sul da fossa. |
| F125 | 15 | confirmada | texto | S32 | Profundidade máxima: 5.999,7 m. |
| F126 | 15 | confirmada | texto | S32 | Em 26 de abril de 2015. |
| F127 | 15 | confirmada | medicao | conta do verificador (M21) | 5.999,7 m = 19.684 ft: almost 20,000. |
| F128 | 15 | confirmada | texto | S32 | Posição do Dive 09 (19°09'N, 65°24'W): 130 mi a leste do ponto mais fundo (M22). |
| F129 | 15 | confirmada | texto | S32 | O ROV Deep Discoverer, do Okeanos Explorer. |
| F130 | 15 | confirmada | texto | S33 | Doze mergulhos na perna 3 da EX1502. |
| F131 | 15 | confirmada | texto | S32 | O mergulho foi abortado logo depois, por um defeito no D2. |
| F132 | 16 | confirmada | texto | S53 | A Five Deeps mapeou a parte oeste da fossa. |
| F133 | 16 | confirmada | texto | S53 | Em 18 e 19 de dezembro de 2018. |
| F134 | 16 | confirmada | texto | S01 | Multifeixe Kongsberg EM 124, de última geração. |
| F135 | 16 | confirmada | texto | S01 | A bordo do DSSV Pressure Drop. |
| F136 | 16 | confirmada | texto | S01 | O ponto mais fundo de cada um dos cinco oceanos. |
| F137 | 16 | confirmada | texto | S01 | Perfis de velocidade do som de toda a coluna, de medição direta. |
| F138 | 17 | confirmada | texto | S01 | 8.378 ± 5 m. |
| F139 | 17 | confirmada | medicao | conta do verificador (M23) | 8.378 m = 27.487 ft: about 27,500. |
| F140 | 17 | confirmada | texto | S01 | Margem de 95 % de confiança. |
| F141 | 17 | confirmada | medicao | conta do verificador (M24) | 5 m = 16,4 ft. |
| F142 | 17 | confirmada | medicao | conta do verificador (M01) | 83 mi até a costa de Aguadilla (Census 2025: o ponto de Isabela fica 7,5 m mais longe). |
| F143 | 17 | confirmada | texto | S29 | Aguadilla fica na costa noroeste. |
| F144 | 17 | confirmada | texto | S46 | Censo de 2020: 3.285.874. |
| F145 | 17 | confirmada | medicao | conta do verificador (M25) | Estimativa de 2025: 3.184.835. |
| F146 | 18 | confirmada | imprensa | S05 | Quarta-feira, 19 de dezembro: o prazo do navio no dia do mergulho. |
| F147 | 18 | confirmada | texto | S53 | O levantamento de 18 e 19 de dezembro de 2018. |
| F148 | 18 | confirmada | imprensa | S04 | No submersível dele, o Limiting Factor. |
| F149 | 18 | confirmada | imprensa | S04 | Mergulho solo. |
| F150 | 18 | confirmada | imprensa | S04 | Submersível dele. |
| F151 | 18 | confirmada | imprensa | S05 | Construído para chegar a qualquer ponto dos oceanos. |
| F152 | 18 | confirmada | imprensa | S04 | Descida de umas duas horas e meia. |
| F153 | 18 | confirmada | imprensa | S05 | O primeiro a chegar ao fundo do Atlântico. |
| F154 | 18 | confirmada | imprensa | S05 | As primeiras palavras ao sair: 'One down!' |
| F155 | 18 | confirmada | imprensa | S05 | O repórter estava a bordo do Pressure Drop. |
| F156 | 18 | confirmada | texto | S01 | O submersível mediu 8.376 ± 5 m. |
| F157 | 18 | confirmada | medicao | conta do verificador (M26) | 2 m = 6,56 ft: about 7. |
| F158 | 18 | confirmada | texto | S02 | A lista oficial (GEBCO Gazetteer) tinha 8.740 m. |
| F159 | 19 | confirmada | texto | S02 | O Milwaukee Deep a 8.740 m no GEBCO Gazetteer. |
| F160 | 19 | confirmada | texto | S02 | O estudo é de 2019. |
| F161 | 19 | confirmada | medicao | conta do verificador (M27) | 8.740 m = 28.674,5 ft: about 28,700. |
| F162 | 19 | confirmada | imprensa | S09 | Os jornais de 1939: 28.680 ft. |
| F163 | 19 | confirmada | imprensa | S09 | O jornal é de 28 de julho de 1939. |
| F164 | 19 | confirmada | medicao | conta do verificador (M05) | 8.740 − 8.378 = 362 m = 1.187,7 ft. |
| F165 | 19 | confirmada | texto | S28 | O USGS: 8.300–8.340 m, mapeado em 2002 e 2003. |
| F166 | 19 | confirmada | texto | S28 | 8.300–8.340 m, mais raso que 8.740. |
| F167 | 20 | confirmada | texto | S02 | O estudo revisa os dados batimétricos de repositórios públicos. |
| F168 | 20 | confirmada | texto | S02 | Publicado em 2019. |
| F169 | 20 | confirmada | medicao | conta do verificador (M28) | Dois autores: Stewart e Jamieson. |
| F170 | 20 | confirmada | texto | S02 | As sondagens são consistentemente mais rasas que as publicadas. |
| F171 | 20 | confirmada | texto | S02 | Dados errados se propagaram sem correção. |
| F172 | 20 | confirmada | texto | S02 | 7.450 m no lugar listado, numa crista mediana. |
| F173 | 20 | confirmada | medicao | conta do verificador (M29) | 7.450 m = 24.442 ft: about 24,400. |
| F174 | 21 | confirmada | texto | S02 | O estudo é de 2019. |
| F175 | 21 | confirmada | texto | S01 | Os resultados da expedição são de 2021. |
| F176 | 21 | confirmada | texto | S02 | O estudo pôs o ponto mais fundo em 19,613°N, 67,847°W (8.408 m). |
| F177 | 21 | confirmada | texto | S02 | Oito levantamentos de 1996 a 2015. |
| F178 | 21 | confirmada | texto | S16 | Na ZEE da República Dominicana. |
| F179 | 21 | confirmada | medicao | conta do verificador (M30) | 35,58 mi a oeste. |
| F180 | 21 | confirmada | texto | S01 | Publicado em 2021. |
| F181 | 21 | confirmada | texto | S16 | Na ZEE dos EUA (Porto Rico). |
| F182 | 21 | confirmada | medicao | conta do verificador (M31) | 99,68 mi até a costa da República Dominicana. |
| F183 | 21 | confirmada | texto | S69 | A ZEE é a zona onde os EUA têm jurisdição sobre os recursos naturais. |
| F184 | 21 | confirmada | texto | S69 | Uma faixa de até 200 milhas náuticas. |
| F185 | 22 | confirmada | texto | S15 | A API do gazetteer não devolve nenhum Milwaukee. |
| F186 | 22 | confirmada | medicao | conta do verificador (M32) | Lida em 26/10/2026. |
| F187 | 22 | confirmada | texto | S01 | Todos os dados foram ao Seabed 2030. |
| F188 | 22 | confirmada | texto | S01 | O mapa do fundo do oceano até 2030. |
| F189 | 22 | confirmada | texto | S53 | O sonar na Fossa das Sandwich do Sul. |
| F190 | 22 | confirmada | imprensa | S37 | O mergulho no Oceano Austral, na Fossa das Sandwich do Sul. |
| F191 | 23 | confirmada | texto | S02 | A profundidade mais citada do Meteor Deep (8.428 m) passava a de Porto Rico. |
| F192 | 23 | confirmada | texto | S02 | A placa Sul-Americana mergulha sob a das Sandwich do Sul a 65–78 mm por ano. |
| F193 | 23 | confirmada | medicao | conta do verificador (M33) | 65–78 mm = 2,56–3,07 in: about three. |
| F194 | 23 | confirmada | medicao | conta do verificador (M34) | 65/20 = 3,25; 78/20 = 3,9. |
| F195 | 23 | confirmada | texto | S40 | Uma fileira de pequenos picos vulcânicos. |
| F196 | 23 | confirmada | texto | S39 | Sem moradores permanentes. |
| F197 | 23 | confirmada | texto | S16 | Reivindicação sobreposta Reino Unido / Argentina. |
| F198 | 23 | confirmada | texto | S40 | Landsat 8, 24 de agosto de 2026; lago de lava na cratera do Mount Michael. |
| F199 | 23 | confirmada | texto | S40 | O calor do lago de lava. |
| F200 | 24 | confirmada | texto | S53 | O levantamento das Sandwich do Sul: 2 a 9 de fevereiro de 2019. |
| F201 | 24 | confirmada | texto | S01 | Uns 91 % da fossa não estavam mapeados. |
| F202 | 24 | confirmada | medicao | conta do verificador (M35) | 91 % = 9,1 décimos: about nine-tenths. |
| F203 | 24 | confirmada | texto | S02 | A profundidade mais citada: 8.428 m. |
| F204 | 24 | confirmada | texto | S02 | O estudo de 2019. |
| F205 | 24 | confirmada | texto | S02 | 8.428 m > 8.378 m (M36). |
| F206 | 24 | confirmada | texto | S01 | O número do sonar em Porto Rico: 8.378 m. |
| F207 | 24 | confirmada | texto | S01 | O Meteor Deep: 8.265 ± 13 m. |
| F208 | 24 | confirmada | medicao | conta do verificador (M37) | 8.378 − 8.265 = 113 m = 370,7 ft. |
| F209 | 24 | confirmada | texto | S01 | Na Tabela 1, o mergulho no Meteor Deep: N/A. |
| F210 | 24 | confirmada | texto | S01 | Descoberto em 1926. |
| F211 | 24 | confirmada | texto | S15 | O nome vem do navio de pesquisa alemão Meteor. |
| F212 | 24 | confirmada | texto | S14 | A proposta do Meteor Deep foi aceita no SCUFN34; o gazetteer foi atualizado em 16/06/2021. |
| F213 | 24 | confirmada | texto | S15 | A posição do gazetteer é a do ponto mais fundo. |
| F214 | 24 | confirmada | medicao | conta do verificador (M38) | 31,80 e 31,98 mi das posições antigas: about 30. |
| F215 | 25 | confirmada | texto | S21 | A Assembleia aprovou a resolução do Oceano Austral. |
| F216 | 25 | confirmada | texto | S20 | Resolução 02/2023, da A-3. |
| F217 | 25 | confirmada | texto | S20 | O limite norte é o paralelo de 60°S. |
| F218 | 25 | confirmada | texto | S20 | Os limites não têm significado político, e os serviços hidrográficos podem usar os próprios. |
| F219 | 25 | confirmada | texto | S20 | A reserva da Argentina. |
| F220 | 25 | confirmada | texto | S01 | O Meteor Deep fica no Atlântico, não no Austral (330 mi ao norte de 60°S, M39). |
| F221 | 26 | confirmada | texto | S01 | A fossa vai de 54°40'S a 60°40'S e cruza 60°S. |
| F222 | 26 | confirmada | texto | S01 | O ponto mais fundo do Austral: 7.432 ± 13 m, a 60,479°S (33 mi ao sul de 60°S, M40). |
| F223 | 26 | confirmada | texto | S15 | É o Factorian Deep. |
| F224 | 26 | confirmada | texto | S15 | Nome dado em relação ao submersível Limiting Factor, que chegou ao fundo. |
| F225 | 26 | confirmada | imprensa | S37 | A missão do Austral: fevereiro de 2019. |
| F226 | 26 | confirmada | texto | S15 | O Limiting Deep, segundo ponto mais fundo do Austral, também nomeado pelo submersível. |
| F227 | 26 | confirmada | medicao | conta do verificador (M41) | 20,85 mi do Factorian: about 20. |
| F228 | 27 | confirmada | texto | S06 | Em 2019 o Limiting Factor voltou ao mesmo lugar. |
| F229 | 27 | confirmada | imprensa | S04 | O Limiting Factor levou Vescovo ao ponto mais fundo em dezembro de 2018. |
| F230 | 27 | confirmada | texto | S06 | 200 peixes-caracol no relato. |
| F231 | 27 | confirmada | texto | S06 | Nenhum peixe-caracol em 2019. |
| F232 | 27 | confirmada | texto | S06 | Holotúrias Peniagone sp. numa densidade parecida com a relatada para os peixes. |
| F233 | 27 | confirmada | texto | S33 | Holotúria (elasípode) é pepino-do-mar. |
| F234 | 27 | confirmada | texto | S06 | Cor, textura e forma externas parecidas. |
| F235 | 27 | confirmada | medicao | conta do verificador (M42) | Os dois animais comparados. |
| F236 | 28 | confirmada | texto | S06 | Os cinco autores, o ano de 2020 e o mergulho de 1964. |
| F237 | 28 | confirmada | texto | S06 | A conclusão: era um erro de identificação da holotúria. |
| F238 | 28 | confirmada | medicao | conta do verificador (M43) | Cinco autores. |
| F239 | 28 | confirmada | texto | S06 | A conclusão vem da densidade e da aparência. |
| F240 | 28 | confirmada | texto | S06 | E da aparência externa. |
| F241 | 28 | confirmada | texto | S06 | Vescovo é um dos autores. |
| F242 | 28 | confirmada | medicao | conta do verificador (M43) | Cinco autores. |
| F243 | 29 | confirmada | texto | S31 | A NOAA: nenhum peixe vive abaixo de uns 8.400 m. |
| F244 | 29 | confirmada | medicao | conta do verificador (M44) | 8.400 m = 27.559 ft: about 27,500. |
| F245 | 29 | confirmada | texto | S31 | A rede de 1970 desceu a 8.370 m (27.460 ft). |
| F246 | 29 | confirmada | texto | S31 | A fronteira entre 8.200 e 8.400 m; o ponto mais fundo tem 8.378 m. |
| F247 | 29 | confirmada | texto | S01 | 8.378 m. |
| F248 | 29 | confirmada | medicao | conta do verificador (M01) | 83 mi. |

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo`, rodado depois de gravar este laudo e a tabela (a saída final, inteira):

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: 04ae6bfbeb60 (igual ao do gate.mjs) · 29 parágrafos
  laudo: Revisão julgada 04ae6bfbeb60 · COBERTURA 241 de 248 · VEREDITO RESSALVA
  tabela: 241 confirmada(s) de 248
exit=0
```

A tabela não precisou de conserto depois da primeira rodada do portão. O que só se conserta mudando o roteiro está nos ACHADOS (A1–A5).

VEREDITO: RESSALVA
