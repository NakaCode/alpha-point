# Laudo · verificador de fatos (independente, da Sala de controle) · rodada 1 · peru-agua

Revisão julgada: `87ea57b0abe5` · data-base 2026-10-17

COBERTURA: 199 de 210 linhas da tabela com veredito "confirmada" (afirmações checáveis em 122 das 127 frases do texto falado de `87ea57b0abe5`; as outras 5 frases não afirmam nada checável e estão listadas abaixo). As 11 linhas fora de "confirmada" são 9 "corrigir" e 2 "datar", todas nos ACHADOS. Nenhuma "nao_conferida".

- **O que foi julgado:** o texto falado inteiro de `roteiros/peru-agua/roteiro-narrador.md`, sha256 `87ea57b0abe551676e18c3347454c08c1cdc7a8501c51b49ad650791fcd4a5a0`. `node roteiros/peru-agua/_ferramentas/gate.mjs`: exit 0, PASSA, 2.039 palavras, 27 parágrafos, 127 frases, média 16,1, maior 31, 0 problemas, 1 alerta, autoplágio 0.
- **Como a lista foi derivada: à mão.** O canal não tem extrator de afirmações. Li as 127 frases, uma a uma, e parti cada uma nas afirmações que ela faz (número, data, nome, lugar, atribuição, mecanismo). Cada afirmação virou uma linha em `fatos-tabela.json`, com a frase inteira e literal do roteiro.
- **Contra o quê:** o dossiê (`pautas/peru-agua/fundamento.json` e `.md`, com "nomes", "regras_de_pauta", "correcoes_pos_sintese", os laudos `_dimensoes/*.verificado.json` e o `transversal.json`) como mapa, e a cópia local de cada fonte (`midia/peru-agua/fontes/`) como prova. **Rede: não usei**; tudo fechou nas cópias locais. Não toquei em www.gob.pe, cdn.www.gob.pe nem peru21.pe.
- **Três tipos de linha, declarados:**
  - **texto:** o trecho é literal da cópia `.txt` da fonte, como ela está, com o OCR e a hifenização de fim de linha ("ha- bitable", "migrato- rios", "semi-de- cértico", "ocum6", "invasi6n").
  - **imprensa:** o trecho é literal da cópia da matéria (AFP, KULTURAUSTAUSCH, Gestión, Infobae, ProActivo, Andina), com até 20 palavras pela contagem do portão.
  - **medição:** `roteiros/peru-agua/qc-roteiro/fatos-medidas.txt`, gravado nesta tarefa (Python), M01 a M45, uma linha por conta, com a fonte de cada termo: distâncias por haversine (R = 6.371,0088 km) de Campo de Marte (SENAMHI 2020) à estação de Marcapomacocha (OMM 83406) e a Caral (UNESCO); conversões (mm → pol., m → pés, km → mi, ha → sq mi, m³ → galões); razões (157/282, 189 167,18/1 815,61, 7,8/30, 14/7,8, 1'171,800/4'608,010, 22,11/3,20); a série do censo por região natural; e as leituras de palavra-número ("three in five", "two-fifths", "the 1980s and '90s").
- **Seis contas sem linha própria:** o portão não aceita linha de medição em frase sem numeral contável ("mostly", "more than half", "less than a quarter", "more than doubled", "a quarter", "nearly twice"). Essas frases têm a linha de texto da fonte, e a conta está no `fatos-medidas.txt`: M04 (64,9 % de deserto costeiro), M07 (157/282 = 55,7 %), M02 (21,67 % < 25 %), M17 (6,7 → 14,6 % = 2,18×), M23 (7,8/30 = 0,26), M26 (14/7,8 = 1,79).
- **O portão de fatos** (`node ferramentas/portao-fatos.mjs peru-agua`) roda sobre `fatos.laudo.md`, nome fixo. Este laudo é o `fatos-r1`; conferi-o numa raiz temporária (cópias do roteiro, do `gate.mjs`, da tabela, das medidas e de `midia/peru-agua/fontes/`, com este laudo como `fatos.laudo.md`): **PASSA, exit 0**, sha12 igual ao do `gate.mjs`, COBERTURA 199 de 210, VEREDITO RESSALVA. Todo trecho foi achado na cópia, todo número de frase confirmada está num trecho dela.
- **Aritmética refeita:** 62,53 % > 60 %; 74,53 % ≈ ¾; 97,91 % > 97 %; 1,76 % ≈ 2 %; 21,67 % < 25 %; 189 167,18/1 815,61 = 104,2; 8 mm = 0,315 pol.; 9 600 724 + 1 042 857 = 10 643 581 (32,5 % de 32 706 028); 157/282 = 55,7 %; 107,7 km = 66,9 mi; 5.000 m = 16.404 pés; 2.013 mm = 6,6 pés; 71 073 km² = 27 442 sq mi; 3.500 km = 2.175 mi; 141,1 km = 87,7 mi; 80 km = 49,7 mi; 645.172 e 10,4 %; 41,9 %; 38,8 %; 25,4 %; maio–novembro = 7 meses; 0,26; 4.445–4.500 m = 14.583–14.764 pés; 22,0 km = 13,7 mi; 1,79×; 1 m³ = 264,2 galões; 6,9×; 20 km = 12,4 mi. Tudo fecha.

NOTA: 8.4/10 · a tese inteira (o lado seco com ~2 % da água e mais de três em cinco peruanos; a reserva de Lima do outro lado; o túnel único; a série do censo) está confirmada letra a letra nas cópias, e todas as decisões da Sala estão na voz. Ficam três desvios médios em afirmações periféricas (Loreto, Villa El Salvador, Puente Piedra) e seis leves.

## As decisões da Sala, conferidas na voz

| decisão | na voz | veredito |
|---|---|---|
| "more than three in five Peruvians" (62,53 %, PNRH 2012), nunca "two in three" ou "two-thirds" | P1: "In 2012, by the national water plan's figures, more than three in five did." Nenhum "two in three" nem "two-thirds" no texto (grep) | CONFIRMADA (PNRH, Cuadro 2.3; M01) |
| "about 2 percent" e "more than 97 percent" | P1, as duas | CONFIRMADA (1,76 % e 97,91 %, Cuadro 2.3) |
| o túnel: "more than half of the water Lima stores for the dry season" (157 ÷ 282) | P2 e P18 (P18 com "By its 2007 figures") | CONFIRMADA (SEDAPAL 2007; M07) |
| 1958–1962, em operação desde 1963 | P20: "It was built between 1958 and 1962, and the system has been in service since 1963." P2 e P26: "early 1960s" | CONFIRMADA (SENAMHI 2016; Defensoría 2025; M38) |
| "built first to power a hydroelectric plant", atribuído ao SENAMHI | P20: "Peru's weather service says it was built first to power a hydroelectric plant, and also to firm up the river Lima drinks from." | CONFIRMADA ("La finalidad del proyecto fue cubrir la demanda del servicio eléctrico… además de afianzar el caudal de río Rímac") |
| o PIB pelo INEI de 2022 (41,9 %), com o ano | P16: "In 2022, Lima and Callao alone produced about two-fifths…, by the statistics institute's estimate." | CONFIRMADA (o "Lima" do INEI inclui o Callao); nota de régua no achado A09 |
| a mina Ariana fora | nenhuma menção (grep "Ariana": vazio) | CUMPRIDA |
| o presente no mínimo, datado | os presentes de fato que muda estão datados: "In figures reported in March 2026" (P22), "In 2026, it still had no construction date" (P25), "told AFP in March 2025" (P23), "in January 2024" (P24), "In 2025, Peru's ombudsman" (P25). Ficam sem data na frase: "it is home to more than ten million people" (P2; datado em P16, censo de 2025), "carries water" de Olmos (P25; Andina, 02/2025) e o "sits" da reserva (P2; datado em P18) | CUMPRIDA, com os voláteis abaixo |

## As armadilhas de fato, uma a uma

- **Universais:** "only high up" (P8) e "each one leaves a strip of green" (P10) são universais que a fonte não sustenta (A04, A08). "the only way to bring that stored water across" (P21) e "a single tunnel" (P2) estão na fonte ("el único medio", SEDAPAL 2021; "un solo túnel", Defensoría 2025). "most Peruvians" (P1, P26) é 62,53 %, datado em 2012.
- **Ano derivado:** "2024 interview" (P21) é o ano da matéria, não da entrevista (A06). "visited … in January 2024" (P24) é a data de publicação, não da visita (A03). "since the 1990s" vem do estudo definitivo de 1996 (M32). "the mid-1700s" é "the middle of the 18th century" (M42).
- **Grupos:** "the government moved 180 families" troca o grupo: 180 iniciaram a invasão, e o reassentamento foi de ~7.000 famílias (A02). Virginia Martínez Morales está posta na cooperativa errada (A03). "Lima's residents … born somewhere else" é a "población total metropolitana… de origen migrante" (CVR, censo de 1993): o grupo bate.
- **Composição:** "Lima and Callao" de 1940 é a "Lima Metropolitana" do INEI 1995, que o próprio texto chama "Area Metropolitana de Lima y Callao": bate. A de 2025 soma a província de Lima e o Callao: bate. A do PIB é o departamento de Lima com o Callao, uma régua maior (A09).
- **Réguas trocadas:** "least populated" (P4) troca densidade por população (A01). O "per person" (P5) é m³/hab/ano do mesmo quadro: bate.
- **Período errado:** "From December to April" e "From May to November" (P18) batem com a Defensoría; "from December to March" (P8) bate com a ANA 2009 (80 % da chuva); "May 1 to November 30" (P21) bate com a Infobae.
- **Mecanismo:** o anticiclone, a subsidência, o mar frio e a inversão (P5, P6) estão na ordem e com o peso do SENAMHI ("el causante principal"). O El Niño (P7) exagera: "stops rising" e a costa toda (A05).
- **Reticências:** nenhuma citação com reticências na voz. As aspas ("predominantly Andean", "mostly coastal", "There are worms in the bottom of the tank") batem; as duas primeiras são tradução fiel do INEI, e a tela deve marcar a tradução.

## A varredura "estado do mundo"

- População de Lima e Callao (censo de 2025, INEI 2026): 10 643 581. Fonte de 2026, a mais recente que existe.
- Mais de 700 mil sem rede (Sunass, pela Gestión de 25/03/2026): a mais recente na cópia.
- O segundo túnel sem data (Gestión, 30/08/2026): "depende de la planificación". A mais recente na cópia.
- Olmos em operação (Andina, 18/02/2025): "permite la irrigación en más de 30,000 hectáreas".
- A reserva acima da metade: SEDAPAL 2007 (157/282) na fala; o dossiê (R07) a dá também para 2021 e 2025.
- Nenhum fato da fala foi superado por fonte mais nova na pasta de cópias.

## ACHADOS

**A01 · MÉDIO · CORRIGIR (P4).** Trecho: "There, Loreto, Peru's largest department, is also one of its least populated." Em população, o INEI desmente: Loreto tem 883.510 habitantes (censo de 2017), 3,0 % do país, no grupo de "participación intermedia". O que é verdade é a densidade: 2,4 hab./km², a segunda menor (só Madre de Dios, 1,7, é menor). A frase do Harvard Growth Lab ("one of the least populated") é a mesma imprecisão, e a fonte primária vence. Troca: "There, Loreto, Peru's largest department, is also one of its most thinly populated."

**A02 · MÉDIO · CORRIGIR (P17).** Trecho: "In May 1971, the government moved 180 families who had taken over a plot of land to a vast, semi-desert stretch of sand south of the city." Medina García (1982): "180 familias iniciaron lo que sería la primera 'oleada' de la invasión", e depois, "se trató, entonces de ubicar alrededor de 7,000 familias" no areal semidesértico a 50 km ao sul. O governo não moveu as 180: moveu os milhares que vieram atrás delas. Troca: "In May 1971, 180 families took over a plot of state land. Thousands more followed, and the government moved them to a vast, semi-desert stretch of sand south of the city."

**A03 · MÉDIO · CORRIGIR + REORDENAR + DATAR (P24).** Trechos: "a German magazine visited a cooperative of 42 families … in January 2024." e "There, Virginia Martínez Morales, 30, a mother of three, ran a hose from a tank up the hill down to her door." Na KULTURAUSTAUSCH, Virginia mora na cooperativa Siempre Unidos de Villa Verde; as 42 famílias são da Los Condes, outra cooperativa do mesmo distrito, e o "There" a põe na errada. E janeiro de 2024 é a data da publicação (26/01/2024); a visita não tem data, e o acidente que ela conta foi "Last August". Troca das duas primeiras frases: "On the city's northern edge, in Puente Piedra, Virginia Martínez Morales, 30, a mother of three, pipes water from a tank on the hill down to her door, a German magazine reported in January 2024. Nearby, a cooperative of 42 families had no water, sewers or electricity." A terceira passa a "After a tanker truck slid down the slope there and took three houses with it, drivers stopped going up the steepest streets." Ficam a quarta e a quinta. Na linha da Virginia, o "up the hill" sai: a revista põe os tanques "on the flattest sections of the hill".

**A04 · LEVE · QUALIFICAR (P8).** Trecho: "The dry side gets real rain too, but only high up, from December to March." Lavado et al. (2012): "almost no rainfall in the basins of the Pacific coast, except in the extreme north", e "rainfall is more abundant along the northern coast". O "only" não vale para o extremo norte. Troca: "The dry side gets real rain too, but mostly high up, from December to March."

**A05 · LEVE · QUALIFICAR (P7).** Trecho: "the cold water stops rising, the sea warms, and the desert coast gets heavy rain and floods." O SENAMHI diz "disminución o desaparición de los afloramientos" e põe a tropicalização e as chuvas "en la costa norte"; a NOAA diz "reduced the efficiency of upwelling". Troca: "In El Niño years, the high pressure and the trade winds ease, the cold water slows or stops rising, the sea warms, and the desert coast, mostly in the north, gets heavy rain and floods."

**A06 · LEVE · ATRIBUIR + DATAR (P21).** Trecho: "Rómulo Cárhuaz, a watershed analyst at the utility, said in a 2024 interview that the releases run from May 1 to November 30." A Infobae (06/09/2024) diz que a entrevista foi feita "por el área de Comunicaciones de Sedapal", sem data; 2024 é o ano da matéria. Troca: "Rómulo Cárhuaz, a watershed analyst at the utility, told the utility's own press office, in remarks reported in 2024, that the releases run from May 1 to November 30."

**A07 · LEVE · REDIZER (P11).** Trecho: "A canal about 50 miles long once supplied it." A UNESCO: o canal de ~80 km abastecia "an intricate irrigation system … sustaining the region around Chan Chan", não a cidade. Troca: "A canal about 50 miles long once watered the land around it."

**A08 · LEVE · QUALIFICAR (P10).** Trecho: "…and each one leaves a strip of green across the desert." É um universal sem fonte, e o INEA diz que esses rios ficam "prácticamente secos en invierno". Troca: "Rivers like the Supe come down from the mountains near the line, and their valleys run as strips of green across the desert."

**A09 · LEVE · QUALIFICAR, opcional (P16; a linha fica confirmada).** Trecho: "In 2022, Lima and Callao alone produced about two-fifths of Peru's economic output". O 41,9 % do INEI é o departamento de Lima com o Callao, que inclui as províncias de fora da área metropolitana. Não é a régua da frase anterior (a área metropolitana). O número e o ano estão certos. Troca, se a Sala quiser a régua exata: "In 2022, the Lima region, with Callao, produced about two-fifths of Peru's economic output, by the statistics institute's estimate."

## As 5 frases sem afirmação checável (NADA A CHECAR, declarado)

- P2 e P26: "So why do most Peruvians live on the dry side of that line?" (a pergunta; o "most" está checado em P1).
- P2: "You're at Alpha Point, and this is where the story of Peru's water divide begins." (a assinatura).
- P7: "You can see the system by what happens when it weakens." (a ponte).
- P21: "The water makes it across the line." (a ponte; o fato está em P19 e P27).

## LISTA DE NOMES (anônimo → pessoa nomeável)

Os nomeados na voz, todos com a fonte: Francisco Pizarro (Cobo; UNESCO), Rómulo Cárhuaz (Infobae), Catalina Naupa (AFP), Virginia Martínez Morales e Tula Tinoco Espinoza (KULTURAUSTAUSCH). O anônimo nomeável: "An official at the utility" (P23) é Nicolas Reyes, da SEDAPAL, na AFP. Pode ficar anônimo; nomear não muda o fato.

## VOLÁTEIS na fala (reconferir na semana da gravação)

- "In 2026, it still had no construction date." (o segundo túnel; Gestión, 30/08/2026).
- "more than 700,000 people … without a connection" (Sunass, 03/2026).
- "In the north, a tunnel about 12 miles long carries water…" (Olmos em operação; Andina, 02/2025).
- "it is home to more than ten million people" (censo de 2025).
- "more than half of the water Lima stores … sits" (SEDAPAL 2007, no presente de P2).

## DECISÃO DA SALA PENDENTE que tocou esta checagem

Nenhuma. As decisões dadas estão todas na voz (tabela acima). A09 é escolha de redação da Sala.

## PADRÕES

- Fonte de imprensa que conta outra fonte: o ano da matéria virou ano do fato duas vezes (A03, A06). Na rodada 2, toda data de matéria com "visited", "said in" ou "interview" se confere contra o corpo da matéria.
- Personagem de reportagem posto no lugar de outro personagem da mesma matéria (A03): quando uma frase junta duas pessoas ou dois lugares de uma reportagem, vale reler o parágrafo de cada um.
- A fonte secundária repete a imprecisão (Harvard, A01). A primária (INEI) vence.

VEREDITO: RESSALVA
