# Laudo · verificador de fatos (independente, da Sala de controle) · rodada 1 · atlantico-fundo

Revisão julgada: `4694e58092c2` · data-base 2026-10-26

COBERTURA: 275 de 291 linhas da tabela com veredito "confirmada". As outras 16 são os achados abaixo: 14 "corrigir", 1 "atribuir" e 1 "nao_conferida". As 291 linhas cobrem as afirmações checáveis de 143 das 151 frases do texto falado de `4694e58092c2`. As 8 restantes não afirmam nada checável (NADA A CHECAR, declaradas uma a uma abaixo). O texto foi CHECADO POR INTEIRO. Saíram 15 trocas de uma frase e 1 item NÃO CONFERIDO em cópia local (AC16).

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md`, com sha256 `4694e58092c24ffe94b23e8fd1ec5ce56907d6163906f39874adc836571a594d`.
  - `node roteiros/atlantico-fundo/_ferramentas/gate.mjs` dá 2.089 palavras, 30 parágrafos, 166 frases pela regex, média de 12,6 palavras e maior frase de 29.
  - O gancho tem 159 palavras até a assinatura, com o "But" na 49ª palavra.
  - O portão do roteiro dá 0 problemas e 8 alertas de palavra. Cada um foi julgado aqui:
    - "never", duas vezes: "It never reached" é a forma da fonte, e "had never been mapped" é o "un-mapped" de 91 % do artigo;
    - "first", duas vezes: "the first person to reach the deepest point" é a forma do dossiê (R15, N03);
    - "Milwaukee Deep", três vezes: AC02 e AC03, abaixo;
    - "anomaly", uma vez: R20, atribuída ao USGS.
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações.
  - As frases são as do `frasesDe` do portão de fatos: 166 pela regex, que parte em "U.S." e em "7.1". Juntadas essas partições falsas, ficam 151 frases reais.
  - Cada frase foi lida inteira e partida em afirmações: número, data, nome, atribuição, causa, universal e presente.
  - Cada afirmação ganhou pelo menos uma linha na tabela, com o trecho literal da cópia local. O `roteiro-editor.md` serviu de mapa das fontes, e o dossiê, de mapa das decisões.
- **Contra o quê:**
  - o dossiê `pautas/atlantico-fundo/fundamento.json`: 71 fontes, `fatos`, `nao_se_diz` N01–N49, `correcoes`, `abertos` A01–A20 e `regras_de_pauta` R01–R32;
  - o `roteiros/atlantico-fundo/roteiro-editor.md`;
  - a cópia local de cada fonte em `midia/atlantico-fundo/fontes/`, pelos índices `fontes-local-a.json`, `-b.json` e `-sala.json`. A cópia é a prova.
  - Rede: não usei. Nenhum site que recusa robô foi tocado.
- **A tabela:** `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, com 291 linhas de três classes:
  - **texto:** 216;
  - **imprensa:** 21, cada trecho com até 20 palavras (S04, S05, S09, S26);
  - **medição:** 54, que apontam para `qc-roteiro/fatos-medidas.txt`.
  - Os ids vão de F001 a F291; o `fonte_id` é o do dossiê (S01–S69), e `medicao` nas contas.
- **As contas:** `pautas/atlantico-fundo/_trabalho/scripts/fatos-medidas.py`, refeitas nesta tarefa, sem rede. Usam Vincenty inverso no WGS84, 1 ft = 0,3048 m, 1 mi = 1.609,344 m, 1 milha náutica = 1.852 m, 1 braça = 6 ft e 1 in = 25,4 mm. O resultado é `qc-roteiro/fatos-medidas.txt` (M01–M65), copiado inteiro em "As contas", abaixo.
  - Todas fecham com o número dito na voz.
  - Duas distâncias usam o ponto de costa que o cético da checagem achou: M01 (Aguadilla, linha de costa do Census 2023) e M47 (La Altagracia, Natural Earth 10m). Refiz a distância até esses pontos, não a busca do ponto mais perto: a linha de costa não está nesta máquina.
- **Citações aspadas:** nenhuma citação de fonte vai entre aspas na voz.
  - As únicas aspas são "deepest ocean" (retórica, R01) e "fish" (ironia, a conclusão atribuída aos autores).
  - A paráfrase "had spread, uncorrected, through online sources and the scientific literature" segue letra a letra o resumo de Stewart & Jamieson 2019 ("have propagated uncorrected through online sources and the scientific literature"). Não vai entre aspas, e está atribuída ("They wrote").
- **O portão de fatos do canal** (`node ferramentas/portao-fatos.mjs atlantico-fundo`): a saída final está em "O portão de fatos", no fim deste laudo.

NOTA: 7.5/10 · O esqueleto numérico está todo de pé, conferido contra a cópia e com a conta à mostra:
- as 83 mi, as mais de cinco milhas e o Everest;
- 1883, 1875, 1939, 1964, 1970, 2002–2003, 2015, 2018, 2019, 2021 e 2023;
- as conversões de metro e braça para pé e milha.
Nenhum número dito está errado. O que tira pontos são quatro problemas de formulação:
- um universal do gancho que a fonte não sustenta (AC04, "no fish at all");
- a lista oficial apoiada numa só fonte, que se contradiz no próprio artigo e que o dossiê não pegou (AC01–AC03);
- duas generalizações de régua (AC05, "every time"; AC09, "eastern part");
- um laço de justaposição que o próprio dossiê veta (AC07, Vescovo "went back").
Cada um tem conserto de uma frase pronto. Nenhum toca o número que sustenta a tese.

## ACHADOS

São sete MÉDIOS e nove LEVES, sem nenhum GRAVE. Nenhuma afirmação é REFUTADA.
- Os sete MÉDIOS são DIVERGE em afirmação periférica ou de enquadramento, cada um com conserto de uma frase.
- O AC01 está no gancho, que é o texto do plano do juiz palavra por palavra. A troca proposta é a menor que o deixa verdadeiro.
- As operações são da lista fechada do `ferramentas/aplicar-lista.mjs`.

**AC01 [MÉDIO] · P2 (gancho) · F019 · ESTREITAR**
- **A frase:** "And for decades, the official list of undersea features gave that point a number about 1,200 feet too deep, even after sonar showed otherwise."
- **O problema:** "for decades" não está em fonte nenhuma, para a lista oficial (o gazetteer IHO-IOC GEBCO).
  - A única prova de que o gazetteer tinha 8.740 m é Stewart & Jamieson 2019 (S02, Tabela 1 e §2.1.2), que o datam por volta de 2018–2019.
  - O dossiê sabe disso: C10 diz "até pelo menos 2019", e A03 diz que a origem e a saída do número não se conhecem.
  - O "for decades" vem das regras de pauta R03 e R06, que ficaram com a forma de antes da correção C10.
  - As décadas valem para o número de referência em geral (1939, 1942, 2011), não para "the official list".
- **CONSERTO:** "And until at least 2019, the official list of undersea features gave that point a number about 1,200 feet too deep, even after sonar showed otherwise."
- **RAIZ:** INSTRUÇÃO. As `como_dizer` de R03 e R06 contradizem C10, e o dossiê deve pô-las em dia.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/524544/ (cópia `01-04-stewart-jamieson-2019-earscirev.txt`, linhas 590–592 e Tabela 1).

**AC02 [MÉDIO] · P19 · F178 · ATRIBUIR**
- **A frase:** "Until at least 2019, the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- **O problema:** a fonte única se contradiz.
  - Stewart & Jamieson 2019 dão o 8.740 m "as published in the IHO-IOC GEBCO Gazetteer of Undersea Feature Names" (§2.1.2, linhas 590–592) e põem "GEBCO Gazetteer" como fonte do Milwaukee Deep na Tabela 1.
  - No §5 (linhas 1199–1211), o mesmo artigo diz, da Fossa de Porto Rico "with Brownson and Milwaukee deeps": "of all the deeps mentioned in this paragraph, only Challenger, Horizon and Scholl are recognised in the IHO-IOC GEBCO Gazetteer".
  - O número pode ter estado no gazetteer sob outro nome (a fossa, por exemplo), e a ficha antiga não se lê mais (A03).
  - O dossiê leu só a Tabela 1 (F28, C10).
- **CONSERTO:** "By a 2019 study, the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
  - Se a Sala preferir manter a abertura de data: "Until at least 2019, by a study published that year, the official list of undersea features had the Milwaukee Deep at about 28,700 feet."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/524544/.

**AC03 [MÉDIO] · P22 · F214 · ESTREITAR**
- **A frase:** "As of October 2026, the international list of undersea feature names no longer includes the Milwaukee Deep."
- **O que está certo:** a parte de hoje está datada e confirmada. A API do gazetteer da NCEI, consultada em 26/10/2026, devolve `totalItems: 0` para "Milwaukee" (S15, `fa-gazetteer-milwaukee.txt`).
- **O problema:** "no longer" pressupõe que o nome esteve na lista, e essa prova é a mesma fonte que se contradiz (AC02).
- **CONSERTO:** "As of October 2026, the international list of undersea feature names doesn't include the Milwaukee Deep." É a forma do próprio dossiê, F28: "doesn't include it".
- **RAIZ:** PONTUAL.
- **Fonte:** https://www.ngdc.noaa.gov/gazetteer/api/v1/feature.

**AC04 [MÉDIO] · P2 (gancho) · F016 · ESTREITAR**
- **A frase:** "It found no fish at all."
- **O problema:** a fonte (Jamieson et al. 2020, o resumo; o texto é pago, A02) diz "No snailfish were observed." "No fish at all" é universal que ela não sustenta. O dossiê (C26) diz "nenhum peixe-caracol".
- **CONSERTO:** "It found none of those fish."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/528113/.

**AC05 [MÉDIO] · P20 · F194 · ESTREITAR**
- **A frase:** "In their check, the real floor came out shallower every time."
- **O problema:** a frase anterior fala da conferência inteira ("checked the published depths"). Nela, nem sempre saiu mais raso.
  - O resumo de Stewart & Jamieson 2019 diz que a Fossa da Sandwich do Sul e o Molloy Hole "are deeper (8183 and 5669 m respectively), than the depths cited".
  - O "consistently shallower" está no §3.2, sobre os três pontos da Fossa de Porto Rico (linhas 957–960).
- **CONSERTO:** "Off Puerto Rico, the real floor came out shallower every time."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/524544/.

**AC06 [MÉDIO] · P11 · F099 · ATRIBUIR**
- **A frase:** "The agency found a tilted slab of limestone that starts more than 4,000 feet above sea level."
- **O problema:** o USGS dá a cota como reconstruída: "a tilted carbonate platform between (reconstructed) elevations of +1300 m and -4000 m".
  - A frase a diz como cota de hoje.
  - A conta está certa: 1.300 m = 4.265 ft e 4.000 m = 13.123 ft.
  - "Limestone" é glosa do roteiro para "carbonate platform". É aceitável, mas não está na cópia.
- **CONSERTO:** "By the agency's reconstruction, a tilted slab of limestone starts more than 4,000 feet above sea level."
  - A forma mais estrita troca também "limestone" por "carbonate rock".
  - A frase seguinte ("It ends about 13,000 feet below the surface.") fica, presa à primeira.
- **RAIZ:** PONTUAL.
- **Fonte:** https://www.usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map.

**AC07 [MÉDIO] · P29 · F280 · REDIZER**
- **A frase:** "The scientists who went back concluded that the "fish" of 1964 were sea cucumbers."
- **O problema:** a frase iguala os autores do artigo aos que voltaram ao sítio. Duas frases depois vem "One of them was Vescovo", e o ouvinte conclui que Vescovo voltou ao sítio em 2019.
  - Nenhuma fonte lida diz quem estava no submersível na volta de 2019 (A02).
  - O dossiê veta essa forma: F91 diz "nunca 'Vescovo went back'".
  - A forma vem da `como_dizer` de R14, que colide com F91 quando o fecho nomeia Vescovo.
- **CONSERTO:** "The scientists who studied the return visit concluded that the "fish" of 1964 were sea cucumbers."
- **RAIZ:** INSTRUÇÃO. R14 × F91.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/528113/.

**AC08 [LEVE] · P8 · F075 · REORDENAR**
- **A frase:** "NOAA, the U.S. ocean and weather agency, records that in 1970 a net hauled up from the trench brought back a small cusk-eel."
- **O problema:** a página da NOAA (S31) não nomeia fossa nenhuma: diz só "In 1970, a deep-sea cusk eel was caught in a net that descended to 8,370 meters".
  - Quem diz Fossa de Porto Rico é o Australian Museum (S30: "collected from the Puerto Rico Trench at a depth of 8,370 m").
  - O fato está certo; a atribuição do lugar à NOAA, não.
- **CONSERTO:** mudar as duas frases:
  - P8, frase 1: "NOAA, the U.S. ocean and weather agency, records that in 1970 a net brought back a small cusk-eel."
  - P8, frase 3: "The Australian Museum lists the same catch, from the Puerto Rico Trench."
- **RAIZ:** PONTUAL.
- **Fontes:** https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ e https://australian.museum/learn/animals/fishes/what-is-the-deepest-living-fish/.

**AC09 [LEVE] · P15 · F141 · ESTREITAR**
- **A frase:** "That's in the eastern part of the trench, a long way from its deepest point."
- **O problema:** o Dive 09 começa a 65°24,430'W (S32).
  - O USGS divide a fossa "at about 65-66W": o ponto cai dentro da faixa de divisão.
  - Stewart & Jamieson põem a parte estreita do leste a leste de ~65°W, e então o mergulho estaria na parte oeste.
  - "A long way from its deepest point" está certo: são 209 km = 130 mi (M29).
- **CONSERTO:** "That's a long way east of its deepest point."
- **RAIZ:** PONTUAL.
- **Fontes:** https://repository.library.noaa.gov/view/noaa/21287 e a página do USGS acima.

**AC10 [LEVE] · P16 · F151 · ESTREITAR**
- **A frase:** "To get the sonar right, the ship lowered instruments to measure how fast sound travels at every depth, from the surface to the floor."
- **O problema:** Bongiovanni et al. 2021 dizem que os perfis até o fundo vieram de "a total of five CTD probes (two on the DSV Limiting Factor and one on each lander system)".
  - Os landers saem do navio, mas em queda livre.
  - As sondas lançadas do navio (XBT) só chegam a 1.800 m.
- **CONSERTO:** "To get the sonar right, the expedition measured how fast sound travels at every depth, from the surface to the floor."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/530930/.

**AC11 [LEVE] · P13 · F120 · ESTREITAR**
- **A frase:** "Anegada is a low, flat island in the British Virgin Islands."
- **O problema:** as cópias dizem "a low island" e "the low‐lying island of Anegada" (Kilbourne et al. 2025). "Flat" não está em cópia nenhuma.
- **CONSERTO:** "Anegada is a low island in the British Virgin Islands."
- **RAIZ:** PONTUAL.
- **Fonte:** https://hal.science/hal-05463233/document.

**AC12 [LEVE] · P28 · F272 · ESTREITAR**
- **A frase:** "Where the French had counted about 200 fish, it found none."
- **O problema:** é o mesmo de AC04. A fonte diz que não se viu peixe-caracol nenhum, e não peixe nenhum.
- **CONSERTO:** "Where the French had counted about 200 fish, it found no snailfish."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/528113/.

**AC13 [LEVE] · P28 · F275 · REDIZER**
- **A frase:** "It found sea cucumbers instead, about as many as the fish the French had counted."
- **O problema:** a fonte compara densidades ("in a density similar to that reported originally for the snailfish"), não contagens. O resumo não dá quantos pepinos-do-mar foram vistos.
- **CONSERTO:** "It found sea cucumbers instead, about as thick on the seafloor as the fish the French had reported."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/528113/.

**AC14 [LEVE] · P23 · F225 · ESTREITAR**
- **A frase:** "The Atlantic has one other contender for its deepest point: the South Sandwich Trench, …"
- **O problema:** "one other" é universal, e nenhuma fonte lida diz que só há uma outra candidata.
- **CONSERTO:** "The Atlantic has another contender for its deepest point: the South Sandwich Trench, far to the south, where one plate dives under another about three inches a year."
- **RAIZ:** PONTUAL.

**AC15 [LEVE] · P25 · F251 · REDIZER**
- **A frase:** "Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older books put it."
- **O problema:** a posição antiga vem de Allaby 2009, que é livro, e de Zhivago 2002, que é um resumo de congresso ("In: VII International Congress"). "Books", no plural, não se sustenta.
- **CONSERTO:** "Since 2021, it has officially belonged to the spot the sonar found, about 30 miles from where older sources put it."
- **RAIZ:** PONTUAL.
- **Fonte:** https://nora.nerc.ac.uk/id/eprint/524544/ (Tabela 1 e referências).

**AC16 [LEVE] · P10 · F092 · PEDIR (NÃO CONFERIDO em cópia)**
- **A frase:** "Earth's outer shell is made of giant slabs called plates."
- **O problema:** é definição de manual, e nenhuma cópia local a traz. As cópias só falam das placas na fronteira (USGS, NOAA).
  - A frase é verdadeira e de saber comum. Fica NÃO CONFERIDA por falta de insumo, não por defeito.
- **CONSERTO:** a Sala junta ao dossiê uma página de glossário de órgão público (USGS ou NOAA, "tectonic plates") e grava a cópia local. A frase fica como está.
- **RAIZ:** PONTUAL.

## As decisões do dossiê e da Sala, conferidas na voz

Conferi as `regras_de_pauta` R01–R32 na voz, uma a uma. Todas cumpridas, menos três:
- R03 e R06 ("For decades…"), que deram AC01. A forma delas é anterior a C10.
- R14 ("The scientists who went back…"), que deu AC07, porque colide com F91.

As cumpridas:
- **Gancho e marca:**
  - R01: Marianas uma vez, na forma honesta;
  - R24: o Everest, cujo topo fica de fora: 470,86 m = 1.544,8 ft (M03);
  - R30: as 83 mi de Aguadilla, não de San Juan.
- **Números e medidas:**
  - R02: o sonar e o submersível em frases separadas;
  - R04: 1939 como "more than 28,000";
  - R05: o Archimède sem data, sem "landed" e com a disputa dita;
  - R16: as 83 mi "about", até Aguadilla;
  - R21: 1883 "about 60 miles east" e nunca "got it right";
  - R23: "hundreds of miles";
  - R32: "about 27,500 feet" pela conta, atribuído à NOAA.
- **Atribuições e disputas:**
  - R07: "a Navy officer named Brownson", sem "named after";
  - R08: o Oceano Austral em 2023, com 60°S, "no political meaning" e "not every country";
  - R09: "Both Britain and Argentina claim them";
  - R10: 1918 na Passagem de Mona, "It wasn't in the trench", "more than 100";
  - R11: a magnitude dos modelos, a parte leste e os milhares de anos;
  - R12: "people", datado pelo Census;
  - R13: a enguia com a ressalva da rede;
  - R15: "the first person to reach the deepest point";
  - R17: a zona econômica, com a definição;
  - R20: "anomaly" só aqui, atribuída.
- **Fora da voz e ordem:**
  - R18: o dado de 75 m não está na voz como mapa;
  - R19: o Mount Michael sem altura;
  - R25: sem "four new species";
  - R26: "far inland";
  - R27: "didn't dive there";
  - R28: sem "for the first time";
  - R29: "had wanted";
  - R31: a ordem 2019 → 2021 respeitada.

O 2º título em teste ("… Is Only 83 Miles From a U.S. Island") se apoia em M01 e na linha de Porto Rico como território (S69, S46).

## O "O que não se diz", conferido

Nada do que o dossiê veda (N01–N49) está na voz. Os pontos mais perto da linha:
- **N03:** "the first person to reach the deepest point", e não "at the bottom".
- **N05:** nenhuma frase traz duas profundidades do mesmo ponto. A do submersível vai só como "within about 7 feet".
- **N06:** a quarta-feira, 19 de dezembro.
- **N07:** todo número antigo vai datado: 1939, 2011 e "Until at least 2019".
- **N23:** "almost exactly what the newspapers reported in 1939" é a justaposição que o dossiê permite (R06), sem dizer cópia.
- **N28:** "About 24,000 feet down, the French crew reported…" é a profundidade do relato (7.300 m no resumo), não do fundo.
- **N32:** "U.S. waters, in that sense, means the exclusive economic zone", com a definição.
- **N45:** a troca dos peixes por pepinos-do-mar vai como conclusão dos autores, com a ressalva ("can't be checked again").
- **N47:** nenhum km nem m na fala.
- **N48:** o Meteor no Atlântico e o Factorian no Austral.

## As armadilhas de fato, uma a uma

- **Universal:**
  - "no fish at all" (AC04), "found none" (AC12), "every time" (AC05) e "one other contender" (AC14);
  - "the only known sign" vai atribuído aos autores ("call it");
  - "further below normal than anywhere else" é a glosa de "most negative … on earth", atribuída ao USGS;
  - "had never been mapped" vem com "about nine-tenths" (91 %, com altimetria por satélite antes);
  - "It never reached the deepest point" é a forma da fonte ("did not reach the deepest point").
- **Ano derivado:** todos fecham.
  - "eight years earlier": 1883 − 1875 (M09);
  - "15 years before": 2018 − 2003 (M19);
  - "the next year": 1964 → 1965 (M15);
  - "the year before": 2018 → 2019 (M60);
  - "about a century": de 101 a 111 anos (M26), com o "almost exactly one century before Columbus" do artigo;
  - "Since 2021": gazetteer atualizado em 16/06/2021 (S14);
  - "In 2023": IHO, A-3, Res. 02/2023 (S20, S21);
  - "a few months earlier": o Blake passou a Brownson em agosto de 1882 (S11), e a sondagem é de 27/01/1883.
- **Composição:**
  - AC01 (as décadas do número de referência postas na lista), AC07 (os autores e os que voltaram) e AC08 (o lugar do Museu dado à NOAA);
  - "the same catch" (P8) é dedução pela profundidade, pela família e pelo lugar, e a declaro aqui: nenhuma das duas páginas cita a outra;
  - "off Aguadilla" depende do ponto de costa do cético (M01).
- **Justaposição:**
  - P19, o número da lista ao lado do de 1939, sem dizer cópia (cumpre N23);
  - P29, Vescovo depois de "went back" (AC07).
- **Período errado:**
  - AC06 (cota reconstruída dita como de hoje);
  - AC03 ("no longer");
  - "More than three million people live in Puerto Rico" vale com o censo de 2020 e a estimativa de 01/07/2025 (M35).
- **Réguas trocadas:**
  - AC05 (a conferência inteira × Porto Rico);
  - AC09 (a divisão do USGS × a de Stewart & Jamieson);
  - o comprimento (770 km no USGS × 810 km na Five Deeps) e 1939 (28.680 × 30.246 ft) vão com hedge, que cobre as duas réguas.
- **Mecanismo:**
  - as placas que "mostly slide past each other" (USGS e S02) e a placa que "dives under another" na Sandwich do Sul (subducção, S02) batem com as fontes;
  - os blocos girados como sinal de afundamento vão atribuídos;
  - o risco de tsunami por deslizamento vai atribuído ("appears to be high");
  - "By measuring the uranium in that coral" simplifica a datação por série do urânio (o urânio que vira tório), e serve;
  - o som medido em toda profundidade: AC10.

## A varredura "estado do mundo" (o presente, e still / today / now / remains)

Não há "still", "today" nem "now" na voz. O presente que afirma estado do mundo:
- **"lies the deepest point in the Atlantic Ocean"** (gancho) e "By the expedition's survey, the deepest point of the Atlantic is about 27,500 feet down": atribuído ao levantamento de 2018, publicado em 2021.
- **"More than three million people live in Puerto Rico":** estimativa de 01/07/2025 (S47, a linha do CSV) e censo de 2020 (S46).
- **"the international list … no longer includes":** datado, "As of October 2026", com a consulta de 26/10/2026 (e AC03).
- **"The islands there are a chain of small volcanoes, with no one living on them":** NASA, 2021 ("no permanent human residents nearby").
- **"Both Britain and Argentina claim them":** Marine Regions, "Overlapping claim".
- **"not every country uses it. Argentina, for one, disagrees":** a M-3 com capa "Updated September 2026" (S20).
- **"The Caribbean plate moves east about three-quarters of an inch a year":** DeMets et al. 2010, por Stewart & Jamieson 2019.
- **"By the USGS's measure, the trench has the most negative gravity anomaly on Earth":** USGS OFR 2006-1210, atribuído.
- **"By NOAA's estimate, no fish lives much deeper than…":** a página da NOAA, atribuído.
- **"Since 2021, it has officially belonged…":** o gazetteer (S15), e a SCUFN-34 (S14).
- **"NOAA … records" e "The Australian Museum lists":** as páginas, nas cópias de 26/10/2026.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

São 8 das 151:
1. "So what is really down there, and how did anyone find out?" (P2, a pergunta do gancho);
2. "You're at Alpha Point, and this is where the story of the bottom of the Atlantic begins." (P2, a assinatura);
3. "A sound could give a number." (P6, ponte);
4. "It couldn't show anyone what was down there." (P6, ponte);
5. "Keep those fish in mind." (P7, ponte);
6. "Neither could map the floor." (P8, ponte: a tripulação e a rede não mapeiam);
7. "Why is the trench so deep?" (P10, pergunta que pressupõe a fossa funda, apoiada em P9);
8. "To see the trench's walls, you need a camera down there." (P14, ponte).

As outras frases de ponte que afirmam algo levam linha na tabela: "When you think…", "A crew could see only…", "That took a different kind of sonar.", "On the trench's walls…", "Off Puerto Rico, the French crew's fish…".

## NÃO FOI CHECADO

- **AC16:** a definição de placa tectônica (P10, frase 2). Falta uma cópia local que a traga. Não é recusa de robô: falta insumo.
- Nenhuma frase ficou sem veredito por recusa de robô: não usei rede.
- O que o dossiê deixou aberto (A01–A20) e a voz toca vai com a forma que o dossiê manda:
  - A01, A02: "the sources disagree" e "the exact same spot", sem número;
  - A04: "more than 28,000";
  - A10: "more than 100";
  - A11: "hundreds of miles";
  - A14: "magnitude 8 or more";
  - A18: "in 2019".

## LISTA DE NOMES (anônimo → pessoa nomeável)

**Os nomeados:**
- **Brownson (P3):** Lieutenant Commander W. H. Brownson, U.S.N., Assistant Coast and Geodetic Survey. Relatório do Superintendente, ano fiscal até junho de 1883 (S11): https://library.oarcloud.noaa.gov/docs.lib/htdocs/rescue/cgs/002_pdf/CSC-0082.PDF.
- **Captain Nares (P5):** Captain Sir George S. Nares, H.M.S. Challenger (S12): https://journals.lib.unb.ca/index.php/ihr/article/view/27837.
- **Victor Vescovo (P18, P28, P29):** explorador, dono e piloto do Limiting Factor (S04, S05).
- **Heather Stewart e Alan Jamieson (P20):** autores de Stewart & Jamieson 2019, Earth-Science Reviews 197:102896 (S02): https://nora.nerc.ac.uk/id/eprint/524544/.

**Os anônimos e quem são:**
- **"a French crew" (P2, P7):** a tripulação do batiscafo Archimède. Nenhuma cópia local nomeia quem estava a bordo (A19), e a voz não precisa do nome.
- **"The authors" e "The scientists who dated the coral" (P13, P14):** Kilbourne et al. 2025, Geophysical Research Letters (S17): https://hal.science/hal-05463233/document.
- **"The scientists who went back" (P29; AC07) e "five authors":** Jamieson, Linley, Stewart, Nargeolet e Vescovo, Deep-Sea Research I, 2020 (S06): https://nora.nerc.ac.uk/id/eprint/528113/.
- **"The expedition's scientists" (P22) e "The scientists" (P17):** Bongiovanni et al. 2021, Geoscience Data Journal (S01): https://nora.nerc.ac.uk/id/eprint/530930/.
- **"a press release for a planned deep-diving sub" (P19):** o anúncio de 2011 da Virgin Oceanic, por Stewart & Jamieson 2019. A voz não nomeia a empresa.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

- **"As of October 2026, … doesn't/no longer include the Milwaukee Deep" (P22):** a API do gazetteer em 26/10/2026.
  - Muda se o nome voltar à lista.
  - Zera se a voz trocar a data.
- **"More than three million people live in Puerto Rico" (P17):** estimativa de 01/07/2025 (3.184.835). Só muda se cair abaixo de três milhões.
- **"In August 2026, a Landsat satellite caught the heat of a lava lake…" (P23):** datado, NASA, 24/08/2026. Não muda: é um evento.
- **"with no one living on them" (P23):** NASA, 2021. Muda com uma ocupação permanente.
- **"Argentina, for one, disagrees" e "not every country uses it" (P26):** a M-3 de setembro de 2026. Muda com a retirada da reserva argentina.
- **"Both Britain and Argentina claim them" (P23):** Marine Regions. Muda com um acordo.
- **"By the expedition's survey, the deepest point … is about 27,500 feet" (P17):** muda com um levantamento novo que ache ponto mais fundo.

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- **Qual forma de AC02 a Sala quer** ("By a 2019 study…" ou "Until at least 2019, by a study published that year…"). Decisão da Sala, de uma frase.
- **AC01 está no gancho**, que é o texto do plano do juiz. A troca é de duas palavras ("for decades" vira "until at least 2019") e não muda a contagem do gancho de forma relevante.
- **O dossiê pede conserto em três pontos:** R03 e R06 contra C10, R14 contra F91, e a contradição interna de S02 (§2.1.2 e Tabela 1 × §5), que F28 e C10 não registram.

## PADRÕES

- **A regra de pauta que sobrevive à correção.** R03, R06 e R14 guardam `como_dizer` de antes de C10 e F91, e o roteiro as seguiu ao pé da letra. A correção de um fato tem de varrer as `como_dizer` que o usam.
- **O universal do resumo.** "No snailfish were observed" virou "no fish at all" e "none". E "consistently shallower", dito da Fossa de Porto Rico, virou "every time" para a conferência inteira. O resumo diz menos do que a frase.

## As contas (`qc-roteiro/fatos-medidas.txt`, cada conversão com a conta à mostra)

Refeitas nesta tarefa por `pautas/atlantico-fundo/_trabalho/scripts/fatos-medidas.py` (sem rede). Cada linha diz o número da voz, os termos e a fonte de cada termo; o trecho literal de cada termo está numa linha de texto da tabela, na mesma frase.

- M01 · about 83 miles: from the sonar point 19.712°N 67.311°W (Bongiovanni 2021) to the Puerto Rico coast point 18.5130°N 67.1145°W in Aguadilla (the skeptic's nearest coast, Census 2023 1:500,000; checagem, 'A distância, refeita') = 134.3 km = 83.46 mi, about 83 miles.
- M02 · more than five miles: 8,378 m (Bongiovanni 2021) = 27,487 ft = 5.21 mi, more than five miles.
- M03 · its top 1,500 feet: Everest 8,848.86 m (AP, 2020) - 8,378 m (Bongiovanni 2021) = 470.86 m = 1,544.8 ft; the top 1,500 feet stick out of the water (1,544.8 > 1,500).
- M04 · about 9,500 miles: from 19.712°N 67.311°W to the Challenger Deep at 11.369°N 142.587°E (Bongiovanni 2021, Table 1) = 15,270 km = 9,488 mi, about 9,500 miles.
- M05 · about 1,200 feet too deep: 8,740 m (GEBCO Gazetteer, Stewart & Jamieson 2019, Table 1) - 8,378 m (Bongiovanni 2021) = 362 m = 1,187.7 ft, about 1,200 feet.
- M06 · January 27, 1883: the Blake left New York on the 9th of December, 1882 (USC&GS report for the fiscal year ending June 1883, p. 46); the 27th of January that follows is January 27, 1883.
- M07 · more than five miles: 4,561 fathoms (USC&GS report 1883) x 6 = 27,366 ft = 8,341 m = 5.18 mi, more than five miles.
- M08 · about 60 miles east: from the Blake sounding 19°40'50"N 66°23'40"W (USC&GS report 1883) to the sonar point 19.712°N 67.311°W = 96.2 km = 59.8 mi; the Blake point lies east of it (66.39°W vs 67.31°W): about 60 miles east.
- M09 · eight years earlier: the Challenger sounding of 26 March 1875 (IHR 1936) and the Blake sounding of 27 January 1883: 1883 - 1875 = 8 years, eight years earlier.
- M10 · far to the east: from the Challenger sounding 19°42'N 65°07'W (IHR 1936) to the sonar point = 230 km = 143 mi to the east.
- M11 · about 23,000 feet: 3,875 fathoms (IHR 1936) x 6 = 23,250 ft (7,087 m = 23,251 ft), about 23,000 feet.
- M12 · more than 28,000 feet: 28,680 feet (The Sun, 1939) and 30,246 feet (DANFS) are both more than 28,000 feet; 8,750 m (The Oceans, 1942) = 28,707 ft.
- M13 · more than four miles: 7,300 m (Jamieson et al. 2020, title) = 23,950 ft = 4.54 mi; approximately 8,300 meters (Five Deeps release 2018) = 27,231 ft = 5.16 mi; both are more than four miles.
- M14 · About 24,000 feet: 7300 m (Jamieson et al. 2020) = 23,950 ft, about 24,000 feet.
- M15 · the next year: the dive of 1964 (Jamieson et al. 2020, title) and the account reported in 1965 (abstract): 1965 = 1964 + 1, the next year.
- M16 · about eight inches: 20 cm (Australian Museum) = 7.87 in, about eight inches.
- M17 · nearly as deep: the 1970 net descended to 8,370 meters (NOAA) and the sonar point is 8,378 m (Bongiovanni 2021): 8 m = 26 ft shallower, nearly as deep.
- M18 · about 27,300 feet: 8300-8340 m (USGS, 2002-2003) = 27,231-27,362 ft, about 27,300 feet.
- M19 · 15 years: the USGS cruises ended in 2003 (August 28 to September 4, 2003, USGS OFR 2006-1210) and the dive was on December 19, 2018 (Popular Science): 2018 - 2003 = 15 years.
- M20 · about three-quarters of an inch a year: 20 mm per year (Stewart & Jamieson 2019, citing DeMets et al. 2010) = 0.787 in, about three-quarters (0.75) of an inch a year.
- M21 · more than 4,000 feet: +1300 m (USGS, reconstructed elevation) = 4,265 ft, more than 4,000 feet.
- M22 · about 13,000 feet: -4000 m (USGS, reconstructed elevation) = 13,123 ft, about 13,000 feet.
- M23 · as high as 20 feet: maxWaterHeight 6.1 m (NCEI, event 1458) = 20.01 ft, 20 feet.
- M24 · more than 100 people: 116 lives were lost (NCEI, Ref #1128) and deathsTotal 144 (NCEI): both more than 100.
- M25 · about six miles: nearly 10 km (Kilbourne et al. 2025) = 6.21 mi, about six miles.
- M26 · about a century: 1381-1391 (Kilbourne et al. 2025) to Columbus in the Caribbean in 1492: 1492 - 1391 = 101 and 1492 - 1381 = 111 years, about a century ('almost exactly one century before Columbus', Kilbourne et al. 2025).
- M27 · magnitude 8 or more: 'magnitudes of 8.0 or more' (Kilbourne et al. 2025, citing the simulations) = magnitude 8 or more.
- M28 · almost 20,000 feet: Max. depth 5999.7 m (NOAA, EX1502L3 Dive 09) = 19,684 ft, almost 20,000 feet.
- M29 · a long way from its deepest point: from the Dive 09 start 19°09.053'N 065°24.430'W (NOAA) to the sonar point 19.712°N 67.311°W = 209 km = 130 mi; the dive site (65.41°W) lies east of the sonar point (67.31°W).
- M30 · a dozen dives: the vehicles conducted 12 dives (NOAA, EX1502 Leg 3) = a dozen dives.
- M31 · Most of the seafloor: 3,845 km2 mapped, 540 km2 new (Bongiovanni 2021, Table 1) = 14% new (Table 2): 86% had been mapped before, most of it.
- M32 · about 27,500 feet: 8,378 m (Bongiovanni 2021) = 27,486.9 ft, about 27,500 feet.
- M33 · about 16 feet: ± 5 m (Bongiovanni 2021) = 16.4 ft, about 16 feet.
- M34 · about 250 feet: gridded to 75 m (Bongiovanni 2021) = 246 ft, about 250 feet.
- M35 · More than three million: 3,285,874 (2020 Census, Table 2) and 3,184,835 (POPESTIMATE2025, July 1, 2025, NST-EST2025-ALLDATA): both more than three million (3,000,000).
- M36 · Wednesday, December 19, 2018: 'Wednesday, December 19' (Popular Science, on board) and the survey of December 18-19, 2018 (BGS NGDC); December 19, 2018 was a Wednesday (calendar).
- M37 · about two and a half hours: an approximate two-and-a-half hour descent (Five Deeps release, 2018) = about 2.5 hours, about two and a half hours.
- M38 · within about 7 feet: 8,378 ± 5 m (sonar) - 8,376 ± 5 m (submersible CTD), Bongiovanni 2021 = 2 m = 6.6 ft, within about 7 feet.
- M39 · about 28,700 feet: 8740 m (GEBCO Gazetteer, Stewart & Jamieson 2019) = 28,674.5 ft, about 28,700 feet.
- M40 · almost exactly: 28,680 feet (The Sun, 1939) vs 8740 m = 28,674.5 ft (gazetteer): 5.5 ft apart, almost exactly.
- M41 · about 1,200 feet shallower: 8740 m (gazetteer) - 8,378 m (sonar) = 362 m = 1,187.7 ft, about 1,200 feet.
- M42 · more than 28,000 feet: 8605 m (Virgin Oceanic press release, 2011, per Stewart & Jamieson 2019) = 28,232 ft, more than 28,000 feet.
- M43 · two scientists: Stewart & Jamieson 2019 has two authors, Heather A. Stewart and Alan J. Jamieson.
- M44 · about 24,400 feet: 7450 m (Stewart & Jamieson 2019) = 24,442 ft, about 24,400 feet.
- M45 · eight older surveys: data from eight surveys between 1996 and 2015 (Stewart & Jamieson 2019), older than the expedition's survey of December 2018.
- M46 · about 36 miles west: from the sonar point 19.712°N 67.311°W to the 2019 estimate 19.613°N 67.847°W (Stewart & Jamieson 2019) = 57.3 km = 35.6 mi, about 36 miles; the 2019 point lies west (67.847°W vs 67.311°W).
- M47 · about 100 miles from the Dominican Republic: from the sonar point to the coast point 18.6566°N 68.3562°W in La Altagracia (the skeptic's nearest Dominican coast, Natural Earth 10m; checagem) = 160.4 km = 99.7 mi, about 100 miles.
- M48 · up to about 230 miles out: no more than 200 nautical miles (NOAA, What is the EEZ?) = 200 x 1,852 m = 230.2 mi, up to about 230 miles.
- M49 · As of October 2026: the gazetteer API of the NCEI, searched for 'Milwaukee' on 26/10/2026, returned totalItems: 0 (copy of 26/10/2026).
- M50 · Seabed 2030 ... by 2030: 'the definitive map of the world's ocean floor by 2030' (Bongiovanni 2021).
- M51 · about three inches a year: 65-78 mm per year (Stewart & Jamieson 2019, citing Smalley et al. 2007) = 2.56-3.07 in, about three inches a year.
- M52 · three to four times: 65/20 = 3.25 and 78/20 = 3.90 (65-78 mm vs 20 mm per year, Stewart & Jamieson 2019) = three to four times.
- M53 · about nine-tenths: around 91% of the trench was unmapped (Bongiovanni 2021) = 0.91, about nine-tenths (0.9).
- M54 · deeper than the sonar's number for Puerto Rico: 8428 m (most commonly reported for the Meteor Deep, Stewart & Jamieson 2019) = 27,651 ft > 8,378 m = 27,487 ft (Bongiovanni 2021).
- M55 · about 370 feet shallower: 8,378 m - 8,265 m (Bongiovanni 2021, Table 1) = 113 m = 370.7 ft, about 370 feet.
- M56 · about 30 miles: from the older books' position 55.67°S 25.92°W (Allaby 2009; Zhivago 2002 at 55.6667°S 25.9167°W, Stewart & Jamieson 2019, Table 1) to the approved Meteor Deep point -55.23069, -26.17294 (gazetteer) = 51.5 km = 32.0 mi (51.2 km = 31.8 mi from Zhivago's), about 30 miles.
- M57 · well to the north: the Meteor Deep at 55.230°S (Bongiovanni 2021) to the 60°S line = 531 km = 330 mi north of it.
- M58 · Just south of the line: the Factorian Deep at 60.479°S (Bongiovanni 2021) = 53 km = 33 mi south of 60°S.
- M59 · about 20 miles away: Factorian Deep -60.47934, -25.54475 to Limiting Deep -60.61564, -26.0899 (gazetteer single points) = 33.5 km = 20.8 mi, about 20 miles.
- M60 · the year before: Vescovo's dive to the deepest point in December 2018 and the return in 2019 (Jamieson et al. 2020): 2019 - 2018 = 1, the year before.
- M61 · five authors: Jamieson, Linley, Stewart, Nargeolet and Vescovo (Deep-Sea Research I, 2020) = five authors.
- M62 · about 27,500 feet: no fish deeper than about 8,400 meters (NOAA) = 27,559 ft, about 27,500 feet; the NOAA boundary is 8,200-8,400 m = 26,903-27,559 ft.
- M63 · nearly that far: the 1970 net, 8,370 meters (NOAA) = 27,461 ft, against about 27,500 feet (8,400 m = 27,559 ft): nearly that far.
- M64 · right at that edge: 8,378 m (Bongiovanni 2021) lies between 8,200 and 8,400 m (NOAA), 22 m = 72 ft above the 8,400 m line.
- M65 · the two: the snailfish of the 1965 account and the holothurian Peniagone sp. (Jamieson et al. 2020) = two animals compared by exterior colour, texture and morphology.

## As fontes usadas (id do dossiê → URL → cópia local)

- **S01** · High-resolution multibeam sonar bathymetry of the deepest place in each ocean · https://nora.nerc.ac.uk/id/eprint/530930/ · `02-bongiovanni-2021-gdj3.122.txt` (34 linhas)
- **S02** · The five deeps: the location and depth of the deepest place in each of the world's oceans · https://nora.nerc.ac.uk/id/eprint/524544/ · `01-04-stewart-jamieson-2019-earscirev.txt` (28 linhas)
- **S04** · Release da Five Deeps sobre o mergulho na Fossa de Porto Rico (21/12/2018) · https://fivedeeps.com/wp-content/uploads/2019/01/PRT-Five-Deeps-Dive-Release-FINAL1221-1.pdf · `fb-fivedeeps-release-2018-12-21.txt` (11 linhas)
- **S05** · Reportagem a bordo do mergulho de Vescovo na Fossa de Porto Rico · https://www.popsci.com/victor-vescovo-five-deeps-submarine · `fb-popsci-2018-12-21-vescovo.txt` (3 linhas)
- **S06** · Revisiting the 1964 Archimède bathyscaphe dive to 7300 m in the Puerto Rico trench… · https://nora.nerc.ac.uk/id/eprint/528113/ · `fa-nora-528113-dsr1-2020.txt` (27 linhas)
- **S07** · Exploration of the Puerto Rico Trench in the mid-twentieth century… · https://nora.nerc.ac.uk/id/eprint/528111/ · `fa-nora-528111-endeavour-2020.txt` (1 linhas)
- **S08** · Dictionary of American Naval Fighting Ships, a entrada do USS Milwaukee (CL-5) · https://ibiblio.org/hyperwar/USN/ships/dafs/CL/cl5.html · `fb-ibiblio-danfs-milwaukee-cl5.txt` (3 linhas)
- **S09** · The Sun (Newberry, S.C.), 28/07/1939, p. 3: boletim da National Geographic Society · https://historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/ocr/ · `fb-thesun-1939-07-28-p3-ocr.txt` (6 linhas)
- **S11** · Report of the Superintendent of the U.S. Coast and Geodetic Survey … fiscal year ending with June, 1883 · https://library.oarcloud.noaa.gov/docs.lib/htdocs/rescue/cgs/002_pdf/CSC-0082.PDF · `04-uscgs-relatorio-1883-CSC-0082.txt` (14 linhas)
- **S12** · The Naming of Nares and Puerto Rico Deeps · https://journals.lib.unb.ca/index.php/ihr/article/view/27837 · `04-ihr-1936-naming-nares-puerto-rico-deeps.txt` (4 linhas)
- **S14** · SCUFN-34 Report v1.1 (05/01/2022) · https://iho.int/uploads/user/Inter-Regional%20Coordination/GEBCO/SCUFN/SCUFN34/SCUFN34_2021_P_EN_Report_v1.1_5Jan2022.pdf · `04-iho-scufn34-2021-relatorio.txt` (1 linhas)
- **S15** · IHO-IOC GEBCO Gazetteer of Undersea Feature Names, pela API da NCEI · https://www.ngdc.noaa.gov/gazetteer/api/v1/feature · `fa-gazetteer-milwaukee.txt`, `fa-gazetteer-meteor.txt`, `fa-gazetteer-factorian.txt`, `fa-gazetteer-limiting.txt` (6 linhas)
- **S16** · Marine Regions: o gazetteer e a camada eez · https://www.marineregions.org/ · `fa-vliz-eez-estimativa-2019.txt`, `fa-vliz-eez-brownson-2021.txt`, `fa-mr-8383-eez-georgia-sandwich.txt` (3 linhas)
- **S17** · Dating a Medieval Tsunami With Uranium-Series Techniques on Caribbean Corals · https://hal.science/hal-05463233/document · `03-kilbourne-2025-grl-hal-05463233.txt` (18 linhas)
- **S20** · Publication M-3, Resolutions of the IHO (capa 'Updated September 2026'): Resolution 02/2023, Recognition of the Southern Ocean and consequences on the limits of some global sea areas · https://iho.int/uploads/user/pubs/misc/M3-E-2026.pdf · `09-iho-M3-E-2026.txt` (6 linhas)
- **S21** · Decisions of the 3rd Session of the IHO Assembly (2023), decisão 19 (PRO 3.3) · https://iho.int/uploads/user/About%20IHO/Assembly/Assembly3/DOCUMENTS/DECISIONS_3rd_SESSION_OF_ASSEMBLY_Proceedings.pdf · `09-iho-A3-decisoes.txt` (1 linhas)
- **S25** · How deep is the ocean? · https://oceanservice.noaa.gov/facts/oceandepth.html · `fb-noaa-nos-oceandepth.txt` (2 linhas)
- **S26** · China, Nepal say Everest a bit higher than past measurement · https://www.clickondetroit.com/news/world/2020/12/08/china-nepal-say-everest-a-bit-higher-than-past-measurements/ · `sala-01-ap-everest-2020.txt` (1 linhas)
- **S27** · USGS Open-File Report 2006-1210 (ten Brink, Danforth e Polloni), Introduction · https://pubs.usgs.gov/of/2006/1210/html/introduction.html · `fa-usgs-ofr2006-1210-introduction.txt` (8 linhas)
- **S28** · Caribbean Tsunami and Earthquake Hazards Studies - Seafloor Map · https://www.usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map · `fb-usgs-seafloor-map.txt` (16 linhas)
- **S29** · Global Historical Tsunami Database, evento 1458 (Porto Rico, 1918) · https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/events/1458/info · `fa-ncei-tsunami-evento-1458.txt` (8 linhas)
- **S30** · What is the deepest-living fish? · https://australian.museum/learn/animals/fishes/what-is-the-deepest-living-fish/ · `fb-australian-museum-deepest-fish.txt` (4 linhas)
- **S31** · What is the deepest living fish? · https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ · `fb-noaa-oer-deepest-fish.txt` (6 linhas)
- **S32** · Okeanos Explorer ROV dive summary, EX1502L3, Dive 9 · https://repository.library.noaa.gov/view/noaa/21287 · `fa-noaa-ir-21287-ex1502l3-dive09.txt` (5 linhas)
- **S33** · EX1502 Leg 3 (Océano Profundo 2015), relatório da expedição · https://repository.library.noaa.gov/view/noaa/10424 · `fa-noaa-ir-10424-ex1502l3-relatorio.txt` (4 linhas)
- **S37** · Southern Ocean Expedition Blog (posts de 04 e 09/02/2019) e 'Southern Ocean Sonar Images' · https://fivedeeps.com/?p=2915 · `fb-fivedeeps-southern-live.txt` (4 linhas)
- **S39** · Mount Michael, Volcano Track or Plume? · https://science.nasa.gov/earth/earth-observatory/mount-michael-volcano-track-or-plume-149160/ · `fb-nasa-eo-149160-mount-michael-2021.txt` (1 linhas)
- **S40** · A Bright Spot at Mount Michael · https://science.nasa.gov/earth/earth-observatory/a-bright-spot-at-mount-michael/ · `fb-nasa-eo-bright-spot-mount-michael-2026.txt` (4 linhas)
- **S46** · 2020 Census Apportionment Results, Table 2: Resident Population for the 50 States, the District of Columbia, and Puerto Rico · https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf · `07-census-apportionment-2020-table02.txt` (2 linhas)
- **S53** · Five Deeps Expedition to map the western Puerto Rico Trench (Atlantic Ocean) [Dataset]; e o da South Sandwich Trench · https://doi.org/10.5285/7df163a1-30c6-40b6-844d-20fa0acffd18 · `fa-bgs-ngdc-porto-rico-7df163a1.txt` (3 linhas)
- **S69** · What is the EEZ? · https://oceanservice.noaa.gov/facts/eez.html · `sala-04-noaa-eez.txt` (3 linhas)

## A tabela (uma linha por afirmação)

A tabela inteira, com o trecho literal de cada linha, está em `roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json` (291 linhas; 275 confirmadas). Resumo por linha (o § é o parágrafo falado, contado de 1; o achado, quando há, está na coluna do veredito):

| id | § | afirmação | veredito | fonte | classe |
|---|---|---|---|---|---|
| F001 | 1 | O ponto mais fundo do Atlântico fica na Fossa de Porto Rico (Bongiovanni et al. 2021, resumo). | confirmada | S01 | texto |
| F002 | 1 | Porto Rico é território dos EUA ('a U.S. island'): a NOAA o põe entre os territórios da zona econômica dos EUA. | confirmada | S69 | texto |
| F003 | 1 | O Census conta Porto Rico ao lado dos 50 estados e do Distrito de Colúmbia (território, não estado). | confirmada | S46 | texto |
| F004 | 1 | Do ponto do sonar ao ponto de costa de Aguadilla que o cético achou: 134,3 km = 83,46 mi (Vincenty, refeito); 'about 83'. | confirmada | medicao | medicao |
| F005 | 1 | O ponto mais fundo tem 8.378 ± 5 m pelo sonar. | confirmada | S01 | texto |
| F006 | 1 | 8.378 m = 5,21 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F007 | 1 | O Everest tem 8.848,86 m (China e Nepal, AP, 08/12/2020). | confirmada | S26 | imprensa |
| F008 | 1 | 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft: os 1.500 ft do topo ficam de fora. | confirmada | medicao | medicao |
| F009 | 1 | O ponto mais fundo do oceano é o Challenger Deep, na Fossa das Marianas (NOAA). A frase não atribui crença sobre o Atlântico ao público (N01). | confirmada | S25 | texto |
| F010 | 1 | A Marianas fica no Pacífico (NOAA). | confirmada | S25 | texto |
| F011 | 1 | A posição do Challenger Deep pelo sonar da Five Deeps (Tabela 1). | confirmada | S01 | texto |
| F012 | 1 | Do ponto mais fundo do Atlântico ao Challenger Deep: 15.270 km = 9.488 mi (Vincenty); 'about 9,500'. | confirmada | medicao | medicao |
| F013 | 2 | Em 1964, o Archimède, francês, desceu na Fossa de Porto Rico (release da Five Deeps, 2018). | confirmada | S04 | imprensa |
| F014 | 2 | O relato conta uns 200 peixes-caracol, uma densidade extraordinária de peixes ('a crowd of fish'), com verbo de relato. | confirmada | S06 | texto |
| F015 | 2 | Em 2019, o Limiting Factor voltou ao mesmo sítio (Jamieson et al. 2020, resumo). | confirmada | S06 | texto |
| F016 | 2 | A frase diz que a volta não achou peixe NENHUM. A fonte (o resumo; o texto é pago) diz só que nenhum peixe-caracol foi visto. 'No fish at all' é universal que a fonte não sustenta: ESTREITAR para os peixes do relato. | corrigir (AC04) | S06 | texto |
| F017 | 2 | Vescovo foi o primeiro a chegar ao ponto mais fundo do Atlântico (reivindicação da expedição; a Popular Science, a bordo, concorda). | confirmada | S04 | imprensa |
| F018 | 2 | O feito é de dezembro de 2018 (o release é de 21/12/2018; o mergulho, de 19/12). | confirmada | S04 | imprensa |
| F019 | 2 | 'For decades' com 'the official list': nenhuma fonte lida diz desde quando o gazetteer tinha 8.740 m; a única prova (Stewart & Jamieson 2019, Tabela 1 e §2.1.2) o data só por volta de 2018-2019, e o mesmo artigo, §5, diz que 'Milwaukee' não é reconhecido no gazetteer (ver F171). As 'décadas' valem para o número de referência em geral (1939, 1942, 2011), não para a lista. ESTREITAR. | corrigir (AC01) | S02 | texto |
| F020 | 2 | 8.740 − 8.378 = 362 m = 1.187,7 ft: 'about 1,200 feet'. | confirmada | medicao | medicao |
| F021 | 2 | O sonar multifeixe do USGS mostrou outra coisa desde 2002–2003 ('even after sonar showed otherwise'). | confirmada | S28 | texto |
| F022 | 3 | A sondagem foi em 27 de janeiro (relatório do Survey de 1883, p. 46; o OCR tem 'Ou the'). | confirmada | S11 | texto |
| F023 | 3 | A viagem saiu de Nova York em 09/12/1882: o 27 de janeiro seguinte é de 1883. | confirmada | medicao | medicao |
| F024 | 3 | O Blake era um vapor ('steamer') do Survey. | confirmada | S11 | texto |
| F025 | 3 | O órgão é o U.S. Coast and Geodetic Survey. | confirmada | S11 | texto |
| F026 | 3 | No Blake, a sondagem era com arame de aço e um peso de chumbo ('weighted wire'): a descrição é do cruzeiro anterior do mesmo navio, sob Bartlett. | confirmada | S11 | texto |
| F027 | 3 | A sondagem foi ao norte de Porto Rico ('Porto Rico', na grafia de 1883). | confirmada | S11 | texto |
| F028 | 3 | O comandante era o tenente-comandante W. H. Brownson, U.S.N. (Marinha). | confirmada | S11 | texto |
| F029 | 3 | Brownson assumiu o Blake em 1882 (agosto, a equipe; 1º de outubro, o comando): poucos meses antes de janeiro de 1883. | confirmada | S11 | texto |
| F030 | 3 | O arame tocou o fundo a 4.561 braças. | confirmada | S11 | texto |
| F031 | 3 | 4.561 braças = 27.366 ft = 5,18 mi: mais de cinco milhas. | confirmada | medicao | medicao |
| F032 | 3 | A posição da sondagem de 1883. | confirmada | S11 | texto |
| F033 | 3 | A posição do ponto mais fundo pelo sonar. | confirmada | S01 | texto |
| F034 | 3 | 96,2 km = 59,8 mi, a leste: 'about 60 miles east'. | confirmada | medicao | medicao |
| F035 | 4 | O arame trouxe amostra do fundo e temperatura. | confirmada | S11 | texto |
| F036 | 4 | O relatório do ano fiscal de 1883 descreve o fundo como lodo marrom. | confirmada | S11 | texto |
| F037 | 4 | É o relatório do ano fiscal que termina em junho de 1883. | confirmada | S11 | texto |
| F038 | 4 | Acreditava-se então ser a maior profundidade de onde se tirara amostra do fundo (crença datada: 'At the time'). | confirmada | S11 | texto |
| F039 | 5 | A fossa foi descoberta pela expedição do HMS Challenger em 1875 (H.M.S.: navio da Marinha Real britânica). | confirmada | S07 | texto |
| F040 | 5 | A sondagem do Challenger é de 26/03/1875, sob o capitão Sir George S. Nares (o OCR espaça as letras do nome). | confirmada | S12 | texto |
| F041 | 5 | Nares comandava o Challenger. | confirmada | S12 | texto |
| F042 | 5 | Oito anos antes da sondagem do Blake, e a leste dela. | confirmada | S12 | texto |
| F043 | 5 | A sondagem de 1883 ficava 71 mi a oeste da do Challenger: a do Challenger, longe a leste (fatos-medidas M10: 230 km = 143 mi a leste do ponto mais fundo). | confirmada | S11 | texto |
| F044 | 5 | 1883 − 1875 = 8 anos. | confirmada | medicao | medicao |
| F045 | 5 | O Challenger achou 3.875 braças. | confirmada | S12 | texto |
| F046 | 5 | 3.875 braças = 23.250 ft: 'about 23,000'. | confirmada | medicao | medicao |
| F047 | 5 | A fossa tem ~810 km (503 mi) e corre quase paralela à costa norte; o comprimento está em disputa (F20), e 'hundreds of miles' vale para as réguas lidas (770–810 km). | confirmada | S01 | texto |
| F048 | 5 | O USGS dá 770 km: também centenas de milhas. | confirmada | S28 | texto |
| F049 | 6 | Em 14/02/1939, o Milwaukee sondou ao norte de Hispaniola e de Porto Rico (DANFS). | confirmada | S08 | texto |
| F050 | 6 | O cruzador tinha sondador sônico ('bounced sound'). | confirmada | S08 | texto |
| F051 | 6 | O método da época: o eco de um som (The Sun, 1939). | confirmada | S09 | imprensa |
| F052 | 6 | 28.680 ft, recorde (The Sun, 1939). | confirmada | S09 | imprensa |
| F053 | 6 | 30.246 ft na história da Marinha; o número está em disputa (F26), e 'more than 28,000' vale para os três. | confirmada | S08 | texto |
| F054 | 6 | Os dois números passam de 28.000 ft. | confirmada | medicao | medicao |
| F055 | 6 | O lugar foi batizado Milwaukee Deep pelo cruzador (The Sun, 1939). | confirmada | S09 | imprensa |
| F056 | 6 | A notícia saiu num boletim da National Geographic Society distribuído pelo serviço WNU (Western Newspaper Union) a jornais; só um jornal (The Sun, Newberry) está em mão. | confirmada | S09 | imprensa |
| F057 | 6 | A edição é de 28/07/1939: verão no hemisfério norte. | confirmada | S09 | imprensa |
| F058 | 7 | Em 1964, um batiscafo tripulado desceu na Fossa de Porto Rico. | confirmada | S06 | texto |
| F059 | 7 | O Archimède era francês (release da Five Deeps). | confirmada | S04 | imprensa |
| F060 | 7 | Era um batiscafo. | confirmada | S06 | texto |
| F061 | 7 | 7.300 m no artigo de 2020. | confirmada | S06 | texto |
| F062 | 7 | ~8.300 m no release de 2018. | confirmada | S04 | imprensa |
| F063 | 7 | 4,54 e 5,16 mi: os dois passam de quatro milhas. | confirmada | medicao | medicao |
| F064 | 7 | Uma fonte dá 7.300 m. | confirmada | S06 | texto |
| F065 | 7 | A outra dá ~8.300 m. | confirmada | S04 | imprensa |
| F066 | 7 | O Archimède não chegou ao ponto mais fundo (release da Five Deeps; 'never' é a forma da fonte). | confirmada | S04 | imprensa |
| F067 | 7 | O relato é de 7.300 m. | confirmada | S06 | texto |
| F068 | 7 | 7.300 m = 23.950 ft: 'About 24,000'. | confirmada | medicao | medicao |
| F069 | 7 | O relato de observação vem do mergulho do Archimède ('the French crew reported'). | confirmada | S06 | texto |
| F070 | 7 | 200 peixes num transecto de uma milha. | confirmada | S06 | texto |
| F071 | 7 | O relato saiu em 1965, o ano seguinte ao mergulho de 1964 (fatos-medidas M15). | confirmada | S06 | texto |
| F072 | 7 | Descritos como peixes-caracol (Liparidae, uma família). | confirmada | S06 | texto |
| F073 | 8 | A NOAA registra que em 1970 uma rede trouxe uma enguia-cusk. | confirmada | S31 | texto |
| F074 | 8 | NOAA é a National Oceanic and Atmospheric Administration (a glosa 'ocean and weather agency'). | confirmada | S28 | texto |
| F075 | 8 | A página da NOAA NÃO diz a fossa: quem diz Fossa de Porto Rico é o Australian Museum. 'from the trench' atribuído à NOAA é composição de fontes. REORDENAR o lugar para a frase do Australian Museum. | corrigir (AC08) | S30 | texto |
| F076 | 8 | O peixe tem 20 cm (Australian Museum). A glosa 'shaped like an eel' é do nome comum; a fonte diz 'a species of cuskeel (family Ophidiidae)'. | confirmada | S30 | texto |
| F077 | 8 | 20 cm = 7,87 in: 'about eight inches'. | confirmada | medicao | medicao |
| F078 | 8 | O Australian Museum registra a enguia-cusk do recorde. | confirmada | S30 | texto |
| F079 | 8 | Na Fossa de Porto Rico, a 8.370 m: a mesma profundidade da rede de 1970 da NOAA (a identidade é por profundidade, família e lugar; nenhuma das duas cita a outra). | confirmada | S30 | texto |
| F080 | 8 | A rede desceu a 8.370 m: 8 m (26 ft) mais raso que os 8.378 m do sonar (fatos-medidas M17), 'nearly as deep'. | confirmada | S31 | texto |
| F081 | 8 | Não se sabe a que profundidade o peixe entrou na rede (NOAA: 'hard to know for sure'). | confirmada | S31 | texto |
| F082 | 8 | O que a tripulação viu cobriu um transecto de uma milha: um pedaço pequeno da fossa (ponte). | confirmada | S06 | texto |
| F083 | 8 | Mapear o fundo coube ao sonar multifeixe (ponte; o termo vem no parágrafo seguinte). | confirmada | S28 | texto |
| F084 | 9 | Em 2002 e 2003, o USGS mapeou a fossa com multifeixe (página do USGS). | confirmada | S28 | texto |
| F085 | 9 | Batimetria de faixa ('swath'): o multifeixe mapeia uma faixa larga do fundo. | confirmada | S27 | texto |
| F086 | 9 | Três cruzeiros. | confirmada | S28 | texto |
| F087 | 9 | No navio Ronald H. Brown, da NOAA. | confirmada | S27 | texto |
| F088 | 9 | O setor mais fundo tem 8.300–8.340 m. | confirmada | S28 | texto |
| F089 | 9 | 27.231–27.362 ft: 'about 27,300'. | confirmada | medicao | medicao |
| F090 | 9 | O último cruzeiro foi em 2003. | confirmada | S27 | texto |
| F091 | 9 | 2018 − 2003 = 15 anos. | confirmada | medicao | medicao |
| F092 | 10 | Definição de manual (placas tectônicas). Nenhuma cópia local a traz: só a menção às placas na fronteira (NOAA, EX1502L3: 'this region lies at the boundary between two tectonic plates'). NÃO CONFERIDA em cópia; a Sala pode juntar um glossário do USGS ou da NOAA. | nao_conferida (AC16) | S33 | texto |
| F093 | 10 | As placas Norte-Americana e do Caribe (Stewart & Jamieson 2019). | confirmada | S02 | texto |
| F094 | 10 | Deslizam uma pela outra, com pouca subducção (USGS). | confirmada | S27 | texto |
| F095 | 10 | 20 mm por ano para leste, em relação à Norte-Americana (citando DeMets et al. 2010). | confirmada | S02 | texto |
| F096 | 10 | 20 mm = 0,787 in: 'about three-quarters of an inch'. | confirmada | medicao | medicao |
| F097 | 10 | A anomalia de gravidade de ar livre mais negativa da Terra, −380 mGal (USGS, atribuído). | confirmada | S27 | texto |
| F098 | 10 | A glosa de 'most negative gravity anomaly'. | confirmada | S27 | texto |
| F099 | 11 | O USGS dá +1.300 m como cota RECONSTRUÍDA da plataforma de carbonato inclinada; a frase a diz como cota de hoje ('starts more than 4,000 feet above sea level'). E 'limestone' é tradução de 'carbonate platform' que a fonte não usa. ATRIBUIR a reconstrução. | corrigir (AC06) | S28 | texto |
| F100 | 11 | 1.300 m = 4.265 ft: 'more than 4,000' (a conta está certa; o reparo é a reconstrução). | confirmada | medicao | medicao |
| F101 | 11 | A outra ponta, −4.000 m (também reconstruída: vale o conserto da frase anterior). | confirmada | S28 | texto |
| F102 | 11 | 4.000 m = 13.123 ft: 'about 13,000'. | confirmada | medicao | medicao |
| F103 | 11 | Blocos girados que indicam o afundamento da fossa (USGS). | confirmada | S28 | texto |
| F104 | 11 | Os mapas mostraram deslizamentos nas paredes (ponte). | confirmada | S28 | texto |
| F105 | 12 | Muitos deslizamentos submarinos nas paredes (USGS). | confirmada | S28 | texto |
| F106 | 12 | Deslizamentos ao longo do tempo ('old'). | confirmada | S27 | texto |
| F107 | 12 | O risco de tsunami por deslizamento 'appears to be high' (USGS, atribuído; a fonte diz para a costa norte de Porto Rico e as Ilhas Virgens). | confirmada | S28 | texto |
| F108 | 12 | 11/10/1918. | confirmada | S29 | texto |
| F109 | 12 | Na Passagem de Mona, a oeste de Porto Rico (NCEI). | confirmada | S29 | texto |
| F110 | 12 | A falha é a do Cânion de Mona, na Passagem de Mona, não na fossa. | confirmada | S29 | texto |
| F111 | 12 | O banco de tsunamis da NOAA (NCEI) dá M 7,1 (atribuído; o mesmo registro cita 7,5 noutra referência). | confirmada | S29 | texto |
| F112 | 12 | O tsunami subiu até ~6 m (máximo de 6,1 m) nas costas oeste e norte. | confirmada | S29 | texto |
| F113 | 12 | Altura máxima 6,1 m. | confirmada | S29 | texto |
| F114 | 12 | 6,1 m = 20,01 ft. | confirmada | medicao | medicao |
| F115 | 12 | 116 mortos numa referência; 144 no total do banco: 'more than 100' vale para os dois (F48). | confirmada | S29 | texto |
| F116 | 12 | 116 e 144 passam de 100. | confirmada | medicao | medicao |
| F117 | 13 | Anegada guarda o sinal (Kilbourne et al. 2025). | confirmada | S17 | texto |
| F118 | 13 | Anegada é das Ilhas Virgens Britânicas. | confirmada | S17 | texto |
| F119 | 13 | Anegada é baixa. | confirmada | S17 | texto |
| F120 | 13 | 'Flat' não está em nenhuma cópia lida (as fontes dizem 'low' e 'low-lying'). ESTREITAR. | corrigir (AC11) | S17 | texto |
| F121 | 13 | Centenas de blocos de coral, centenas de metros para dentro. | confirmada | S17 | texto |
| F122 | 13 | A costa norte, a que dá para a fossa. | confirmada | S17 | texto |
| F123 | 13 | Os blocos datados se espalham por quase 10 km da costa (a medida é dos blocos datados). | confirmada | S17 | texto |
| F124 | 13 | 10 km = 6,21 mi: 'about six miles'. | confirmada | medicao | medicao |
| F125 | 13 | 1381–1391. | confirmada | S17 | texto |
| F126 | 13 | O método: o urânio do coral. | confirmada | S17 | texto |
| F127 | 13 | O estudo é de 2025. | confirmada | S17 | texto |
| F128 | 13 | Quase exatamente um século antes de Colombo (o artigo); 1492 − 1391 = 101 e 1492 − 1381 = 111 anos (fatos-medidas M26). | confirmada | S17 | texto |
| F129 | 13 | Provavelmente no verão ou no outono (palpite dos autores: 'We speculate'). | confirmada | S17 | texto |
| F130 | 14 | O terremoto foi na parte leste da fossa. | confirmada | S17 | texto |
| F131 | 14 | O setor mais fundo fica na parte oeste: longe da parte leste. | confirmada | S28 | texto |
| F132 | 14 | Magnitude 8 ou mais, pelas simulações numéricas (atribuído aos modelos). | confirmada | S17 | texto |
| F133 | 14 | São simulações de computador. | confirmada | S17 | texto |
| F134 | 14 | O único exemplo conhecido (os autores). | confirmada | S17 | texto |
| F135 | 14 | Nenhuma das duas fontes do tsunami medieval explica 1918. | confirmada | S17 | texto |
| F136 | 14 | Recorrência de milhares de anos (os autores, citando ten Brink & Geist 2025 e Wei et al. 2024). | confirmada | S17 | texto |
| F137 | 15 | O ROV da NOAA mergulhou ao longo da parede sul. O resumo registra 'Bottom Time: N/A' e observações na coluna d'água; que o vídeo mostra a parede vem da pauta (§6), conferir na regência. | confirmada | S32 | texto |
| F138 | 15 | 26/04/2015. | confirmada | S33 | texto |
| F139 | 15 | Profundidade máxima 5.999,7 m. | confirmada | S32 | texto |
| F140 | 15 | 19.684 ft: 'almost 20,000'. | confirmada | medicao | medicao |
| F141 | 15 | O mergulho (65°24'W) cai na faixa da divisão do USGS (65–66°W), e a oeste dos ~65°W de Stewart & Jamieson ('East of ~65° W the trench is narrower'): 'the eastern part of the trench' não se sustenta. 'A long way from its deepest point' (209 km) se sustenta. ESTREITAR. | corrigir (AC09) | S28 | texto |
| F142 | 15 | O ROV era o Deep Discoverer. | confirmada | S32 | texto |
| F143 | 15 | Do navio Okeanos Explorer, da NOAA. | confirmada | S32 | texto |
| F144 | 15 | 12 mergulhos na viagem (EX1502, Leg 3). | confirmada | S33 | texto |
| F145 | 15 | Logo depois, um problema no compensador de óleo encerrou o mergulho. | confirmada | S32 | texto |
| F146 | 16 | O levantamento foi em 18 e 19/12/2018. | confirmada | S53 | texto |
| F147 | 16 | Pela Five Deeps Expedition. | confirmada | S53 | texto |
| F148 | 16 | Com multifeixe de última geração. | confirmada | S01 | texto |
| F149 | 16 | No navio Pressure Drop. | confirmada | S01 | texto |
| F150 | 16 | As profundidades foram corrigidas com a velocidade do som medida da superfície ao fundo. | confirmada | S01 | texto |
| F151 | 16 | Quem mediu até o fundo foram as sondas do submersível e dos landers ('Full-ocean depth sound velocity profiles were determined after the deep submersible dives'); as do navio (XBT) só chegam a 1.800 m. 'The ship lowered instruments' não é o que a fonte diz. ESTREITAR. | corrigir (AC10) | S01 | texto |
| F152 | 16 | Só 14 % da área era nova (Tabela 2): 86 % já tinha mapa (fatos-medidas M31). | confirmada | S01 | texto |
| F153 | 17 | 8.378 ± 5 m pelo sonar (atribuído ao levantamento da expedição). | confirmada | S01 | texto |
| F154 | 17 | 27.486,9 ft: 'about 27,500'. | confirmada | medicao | medicao |
| F155 | 17 | A margem é ± 5 m. | confirmada | S01 | texto |
| F156 | 17 | 5 m = 16,4 ft. | confirmada | medicao | medicao |
| F157 | 17 | 95 % de confiança. | confirmada | S01 | texto |
| F158 | 17 | Grade de 75 m. | confirmada | S01 | texto |
| F159 | 17 | 75 m = 246 ft: 'about 250'. | confirmada | medicao | medicao |
| F160 | 17 | Publicado em 2021 (online; o número impresso é de 2022). | confirmada | S01 | texto |
| F161 | 17 | 134,3 km = 83,46 mi até o ponto de costa de Aguadilla (a busca do ponto mais perto é do cético, com a costa do Census 2023). | confirmada | medicao | medicao |
| F162 | 17 | Aguadilla fica no noroeste da ilha. | confirmada | S29 | texto |
| F163 | 17 | 3.285.874 residentes no Censo de 2020. | confirmada | S46 | texto |
| F164 | 17 | 3.184.835 na estimativa de 01/07/2025 (a linha 67 do CSV do Census, a de Porto Rico, STATE 72, coluna POPESTIMATE2025): o presente 'live' vale com a data-base de 2025; os dois passam de três milhões. | confirmada | medicao | medicao |
| F165 | 18 | Quarta-feira, 19 de dezembro (Popular Science, a bordo). | confirmada | S05 | imprensa |
| F166 | 18 | O sonar mapeou o lugar em 18 e 19/12/2018 ('had just mapped'). | confirmada | S53 | texto |
| F167 | 18 | O submersível era o Limiting Factor. | confirmada | S04 | imprensa |
| F168 | 18 | 19/12/2018 foi uma quarta-feira. | confirmada | medicao | medicao |
| F169 | 18 | Sozinho (Popular Science). | confirmada | S05 | imprensa |
| F170 | 18 | Um submersível de profundidade oceânica total, para o fundo de cada oceano. | confirmada | S01 | texto |
| F171 | 18 | Descida de cerca de duas horas e meia (release). | confirmada | S04 | imprensa |
| F172 | 18 | 2,5 horas. | confirmada | medicao | medicao |
| F173 | 18 | O primeiro a chegar ao ponto mais fundo do Atlântico (a reivindicação é da expedição; o Archimède 'did not reach the deepest point'). | confirmada | S04 | imprensa |
| F174 | 18 | A Popular Science, a bordo, concorda. | confirmada | S05 | imprensa |
| F175 | 18 | Os sensores do submersível deram 8.376 ± 5 m (confirmação). | confirmada | S01 | texto |
| F176 | 18 | 2 m = 6,6 ft: 'within about 7 feet'. | confirmada | medicao | medicao |
| F177 | 18 | A lista (pela Tabela 1 de Stewart & Jamieson 2019) dava 8.740 m, não 8.378 (o reparo sobre a lista está nas linhas da frase 'Until at least 2019'). | confirmada | S02 | texto |
| F178 | 19 | Até pelo menos 2019, o gazetteer IHO-IOC GEBCO dava 8.740 m ao Milwaukee Deep: é o que Stewart & Jamieson 2019 dizem na Tabela 1 e no §2.1.2. Mas o mesmo artigo, no §5, diz que, entre as fossas que cita (a de Porto Rico 'with Brownson and Milwaukee deeps'), só Challenger, Horizon e Scholl são reconhecidas no gazetteer; o registro antigo não se lê mais (A03). A única fonte se contradiz: ATRIBUIR ao estudo de 2019. | atribuir (AC02) | S02 | texto |
| F179 | 19 | 8.740 m = 28.674,5 ft: 'about 28,700'. | confirmada | medicao | medicao |
| F180 | 19 | O artigo é de 2019. | confirmada | S02 | texto |
| F181 | 19 | Os jornais de 1939 deram 28.680 ft (o boletim da NGS, pelo serviço WNU; só o The Sun está em mão). A fala não diz que um número saiu do outro (N23). | confirmada | S09 | imprensa |
| F182 | 19 | 5,5 ft de diferença: 'almost exactly'. | confirmada | medicao | medicao |
| F183 | 19 | O sonar: 8.378 m. | confirmada | S01 | texto |
| F184 | 19 | 362 m = 1.187,7 ft: 'about 1,200'. | confirmada | medicao | medicao |
| F185 | 19 | O USGS: 8.300–8.340 m, mais raso que 8.740. | confirmada | S28 | texto |
| F186 | 19 | Desde 2003. | confirmada | S27 | texto |
| F187 | 19 | Em 2011, o anúncio de um submersível planejado (a empresa não se nomeia na fala). | confirmada | S02 | texto |
| F188 | 19 | O release dava 8.605 m. | confirmada | S02 | texto |
| F189 | 19 | 8.605 m = 28.232 ft. | confirmada | medicao | medicao |
| F190 | 20 | Stewart e Jamieson, 2019. | confirmada | S02 | texto |
| F191 | 20 | Conferiram contra dados públicos. | confirmada | S02 | texto |
| F192 | 20 | Dois autores. | confirmada | medicao | medicao |
| F193 | 20 | Em Porto Rico, os três pontos publicados saíram mais rasos. | confirmada | S02 | texto |
| F194 | 20 | Na conferência inteira (cinco oceanos), nem sempre: a Sandwich do Sul e o Molloy saíram MAIS FUNDOS que os números do release de 2011. 'Every time' só vale para Porto Rico. ESTREITAR. | corrigir (AC05) | S02 | texto |
| F195 | 20 | A frase do resumo (atribuída: 'They wrote'). | confirmada | S02 | texto |
| F196 | 20 | 7.450 m no ponto da lista, uma crista mediana. | confirmada | S02 | texto |
| F197 | 20 | 7.450 m = 24.442 ft. | confirmada | medicao | medicao |
| F198 | 21 | O ponto mais fundo deles: 19,613°N, 67,847°W. | confirmada | S02 | texto |
| F199 | 21 | Oito levantamentos, de 1996 a 2015. | confirmada | S02 | texto |
| F200 | 21 | Na zona econômica da República Dominicana (as conclusões). | confirmada | S02 | texto |
| F201 | 21 | A Marine Regions confirma o ponto na zona dominicana. | confirmada | S16 | texto |
| F202 | 21 | 57,3 km = 35,6 mi, a oeste. | confirmada | medicao | medicao |
| F203 | 21 | Mais velhos que o levantamento de 2018. | confirmada | medicao | medicao |
| F204 | 21 | Stewart & Jamieson saiu em 09/07/2019. | confirmada | S02 | texto |
| F205 | 21 | Bongiovanni et al., aceito em 2021. | confirmada | S01 | texto |
| F206 | 21 | Publicado em 2021. | confirmada | S01 | texto |
| F207 | 21 | O ponto do sonar cai na zona econômica dos EUA (Porto Rico), pela camada da Marine Regions. | confirmada | S16 | texto |
| F208 | 21 | 160,4 km = 99,7 mi até a costa dominicana que o cético achou. | confirmada | medicao | medicao |
| F209 | 21 | Até 200 milhas náuticas da linha de base (NOAA). | confirmada | S69 | texto |
| F210 | 21 | Onde os EUA têm jurisdição sobre os recursos. | confirmada | S69 | texto |
| F211 | 21 | 200 mi náuticas = 230,2 mi. | confirmada | medicao | medicao |
| F212 | 22 | A API do gazetteer (NCEI), em 26/10/2026, não tem 'Milwaukee' (datado: 'As of October 2026'). | confirmada | S15 | texto |
| F213 | 22 | Conferido em 26/10/2026. | confirmada | medicao | medicao |
| F214 | 22 | 'No longer' pressupõe que o nome esteve na lista; a prova (S02, Tabela 1) é contradita pelo próprio artigo, §5. ESTREITAR para 'doesn't include', a forma do dossiê (F28). | corrigir (AC03) | S02 | texto |
| F215 | 22 | Pediram que 'Brownson' e 'Milwaukee' saíssem de uso. | confirmada | S02 | texto |
| F216 | 22 | 'The name simply falls into abeyance'. | confirmada | S02 | texto |
| F217 | 22 | Todos os dados foram entregues ao Seabed 2030 (atribuído aos cientistas). | confirmada | S01 | texto |
| F218 | 22 | O projeto quer o mapa do fundo do oceano inteiro até 2030. | confirmada | S01 | texto |
| F219 | 22 | O sonar foi à Sandwich do Sul. | confirmada | S01 | texto |
| F220 | 22 | O submersível também. | confirmada | S01 | texto |
| F221 | 22 | A Sandwich do Sul fica no extremo sul do Atlântico. | confirmada | S01 | texto |
| F222 | 23 | A Sandwich do Sul é candidata: o número mais publicado do Meteor passa o de Porto Rico. | confirmada | S02 | texto |
| F223 | 23 | Uma placa mergulha sob a outra a 65–78 mm por ano. | confirmada | S02 | texto |
| F224 | 23 | 2,56–3,07 in: 'about three inches'. | confirmada | medicao | medicao |
| F225 | 23 | 'One other contender' é universal: nenhuma fonte lida diz que só há uma outra candidata no Atlântico. ESTREITAR ('another contender'). | corrigir (AC14) | S01 | texto |
| F226 | 23 | 20 mm por ano em Porto Rico. | confirmada | S02 | texto |
| F227 | 23 | 3,25 a 3,9 vezes. | confirmada | medicao | medicao |
| F228 | 23 | Uma fileira de pequenos vulcões (NASA, 2026). | confirmada | S40 | texto |
| F229 | 23 | Sem moradores permanentes (NASA, 2021). | confirmada | S39 | texto |
| F230 | 23 | Reivindicação sobreposta, Reino Unido e Argentina. | confirmada | S16 | texto |
| F231 | 23 | Landsat 8, 24/08/2026 (datado). | confirmada | S40 | texto |
| F232 | 23 | O calor do lago de lava na cratera. | confirmada | S40 | texto |
| F233 | 23 | O Mount Michael fica numa das ilhas. | confirmada | S40 | texto |
| F234 | 24 | A expedição mapeou a fossa inteira. | confirmada | S37 | texto |
| F235 | 24 | Em 2019. | confirmada | S37 | texto |
| F236 | 24 | ~91 % sem mapa antes ('never' = o 'un-mapped' do artigo; havia altimetria por satélite). | confirmada | S01 | texto |
| F237 | 24 | 0,91: 'about nine-tenths'. | confirmada | medicao | medicao |
| F238 | 24 | O número mais publicado: 8.428 m (Stewart & Jamieson 2019). | confirmada | S02 | texto |
| F239 | 24 | O mesmo estudo de 2019. | confirmada | S02 | texto |
| F240 | 24 | 8.428 > 8.378 m. | confirmada | medicao | medicao |
| F241 | 24 | O sonar deu 8.265 m ao Meteor. | confirmada | S01 | texto |
| F242 | 24 | 8.265 ± 13 m. | confirmada | S01 | texto |
| F243 | 24 | 113 m = 370,7 ft. | confirmada | medicao | medicao |
| F244 | 24 | Na Tabela 1, 'N/A' na coluna do submersível: sem mergulho. | confirmada | S01 | texto |
| F245 | 25 | O nome vem do navio de pesquisa alemão Meteor (gazetteer). | confirmada | S15 | texto |
| F246 | 25 | O nome é antigo (1926). | confirmada | S01 | texto |
| F247 | 25 | Aprovado na SCUFN-34 (07/06/2021); gazetteer atualizado em 16/06/2021. | confirmada | S14 | texto |
| F248 | 25 | A posição oficial é a do ponto mais fundo do sonar. | confirmada | S15 | texto |
| F249 | 25 | A posição antiga (Allaby 2009; Zhivago 2002). | confirmada | S02 | texto |
| F250 | 25 | 51,5 km = 32,0 mi: 'about 30 miles'. | confirmada | medicao | medicao |
| F251 | 25 | 'Older books' (plural): Allaby 2009 é livro; Zhivago 2002 é um resumo de congresso. REDIZER. | corrigir (AC15) | S02 | texto |
| F252 | 25 | A expedição propôs 'Pressure Deep' (blog, 09/02/2019); que o ponto é o Meteor de hoje é dedução consistente (R29). | confirmada | S37 | texto |
| F253 | 26 | A IHO reconhece o Oceano Austral (Res. 02/2023, na M-3 de 2026). | confirmada | S20 | texto |
| F254 | 26 | Resolução 02/2023, da 3ª Assembleia. | confirmada | S20 | texto |
| F255 | 26 | A Assembleia aprovou em 2023 (decisão PRO 3.3). | confirmada | S21 | texto |
| F256 | 26 | O limite norte é 60°S. | confirmada | S20 | texto |
| F257 | 26 | Sem significado político; cada serviço pode manter os seus. | confirmada | S20 | texto |
| F258 | 26 | A Austrália usa os próprios limites (apêndice 1). | confirmada | S20 | texto |
| F259 | 26 | A Argentina discorda. | confirmada | S20 | texto |
| F260 | 26 | Pela linha de 60°S, o Meteor (55,230°S) fica no Atlântico, 531 km (330 mi) ao norte da linha (fatos-medidas M57). | confirmada | S01 | texto |
| F261 | 27 | A fossa vai até 60°40'S: cruza a linha. | confirmada | S01 | texto |
| F262 | 27 | O Factorian Deep é o ponto mais fundo do Oceano Austral (gazetteer). | confirmada | S15 | texto |
| F263 | 27 | A 60,479°S: 53 km (33 mi) ao sul da linha (fatos-medidas M58). | confirmada | S01 | texto |
| F264 | 27 | O nome vem do Limiting Factor, que chegou ao fundo dele. | confirmada | S15 | texto |
| F265 | 27 | Em 2019 (o blog da expedição: o mergulho ao ponto mais fundo do Oceano Austral, post de 04/02). | confirmada | S37 | texto |
| F266 | 27 | O vizinho é o Limiting Deep, do mesmo submersível. | confirmada | S15 | texto |
| F267 | 27 | 33,5 km = 20,8 mi. | confirmada | medicao | medicao |
| F268 | 27 | A segunda olhada aconteceu em 2019 (ponte). | confirmada | S06 | texto |
| F269 | 28 | Em 2019, o Limiting Factor voltou ao sítio do relato. | confirmada | S06 | texto |
| F270 | 28 | O Limiting Factor levou Vescovo ao ponto mais fundo em dezembro de 2018, o ano antes da volta de 2019 (fatos-medidas M60). | confirmada | S04 | imprensa |
| F271 | 28 | O relato contou 200. | confirmada | S06 | texto |
| F272 | 28 | 'It found none' (peixe nenhum): a fonte diz que nenhum peixe-caracol foi visto. ESTREITAR. | corrigir (AC12) | S06 | texto |
| F273 | 28 | Pepinos-do-mar (holotúria elasipódida Peniagone sp.). | confirmada | S06 | texto |
| F274 | 28 | Os elasipódidos são pepinos-do-mar (NOAA). | confirmada | S33 | texto |
| F275 | 28 | A fonte compara DENSIDADES, não contagens: 'about as many as the fish the French had counted' diz uma contagem que a fonte não dá. REDIZER. | corrigir (AC13) | S06 | texto |
| F276 | 28 | Cor, textura e forma parecidas por fora. | confirmada | S06 | texto |
| F277 | 28 | 'The two' são o peixe-caracol do relato e a holotúria (dois animais). | confirmada | medicao | medicao |
| F278 | 29 | A conclusão dos autores (atribuída). | confirmada | S06 | texto |
| F279 | 29 | Os 'peixes' de 1964. | confirmada | S06 | texto |
| F280 | 29 | 'The scientists who went back' iguala os autores aos que voltaram; com 'One of them was Vescovo' logo depois, o ouvinte conclui que Vescovo voltou ao sítio em 2019, o que nenhuma fonte lida diz (A02; F91: nunca 'Vescovo went back'). REDIZER. | corrigir (AC07) | S06 | texto |
| F281 | 29 | A conclusão vem da densidade ('count')... | confirmada | S06 | texto |
| F282 | 29 | ...e da aparência ('look'); o de 1964 é um relato ('an account of observing'), sem o animal para rever. | confirmada | S06 | texto |
| F283 | 29 | O artigo é de 2020. | confirmada | S06 | texto |
| F284 | 29 | Cinco autores. | confirmada | medicao | medicao |
| F285 | 29 | Vescovo é um dos autores. | confirmada | S06 | texto |
| F286 | 30 | A NOAA estima que nenhum peixe vive abaixo de ~8.400 m (atribuído; a NOAA escreve '28,000 feet', a fala converte os 8.400 m). | confirmada | S31 | texto |
| F287 | 30 | 8.400 m = 27.559 ft: 'about 27,500'. | confirmada | medicao | medicao |
| F288 | 30 | A rede de 1970 desceu a 8.370 m. | confirmada | S31 | texto |
| F289 | 30 | 27.461 ft, quase os ~27.500. | confirmada | medicao | medicao |
| F290 | 30 | A fronteira da NOAA: 8.200–8.400 m; os 8.378 m do sonar caem dentro dela, 22 m (72 ft) acima da linha de 8.400 m (fatos-medidas M64). | confirmada | S31 | texto |
| F291 | 30 | As 83 mi (M01). | confirmada | medicao | medicao |

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo`, rodado em 26/10/2026, às 19:07 (horário de Brasília), da raiz do canal. Saída final:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: 4694e58092c2 (igual ao do gate.mjs) · 30 parágrafos
  laudo: Revisão julgada 4694e58092c2 · COBERTURA 275 de 291 · VEREDITO RESSALVA
  tabela: 275 confirmada(s) de 291
```

- **Exit 0**, com 0 problemas e 0 avisos (a mesma rodada com `--json`).
- **O sha** é igual ao do `gate.mjs`. Todo parágrafo tem pelo menos 4 linhas fora de L: o piso vai de 4 (P4) a 15 (P7).
- **Como rodou:** o portão lê `qc-roteiro/fatos.laudo.md`, e esta tarefa grava `fatos-r1.laudo.md`. Para a rodada, copiei este laudo, sem mudança, para `fatos.laudo.md`, rodei o portão e apaguei a cópia logo depois. Na pasta ficam só `fatos-r1.laudo.md`, `fatos-tabela.json` e `fatos-medidas.txt`.
- **As rodadas antes da final** foram feitas num espelho, com `--raiz` no scratchpad. Nelas, o portão reprovou 13 linhas da tabela, todas consertadas só na tabela:
  - 10 linhas de medição numa frase sem número, ou sem o número da frase. A conta foi para a `afirmacao` de uma linha de texto da mesma frase;
  - 2 trechos com menos de 4 palavras, alargados com a cópia;
  - o "the two" de P28, que ganhou a linha M65 nas contas.
- **O portão confere a forma, não o sentido:** que o trecho existe na cópia e que o número da frase está num trecho confirmado. Se o trecho sustenta a frase é o juízo deste laudo, linha a linha.

VEREDITO: RESSALVA
