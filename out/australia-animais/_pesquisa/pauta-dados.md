# Pauta de dados — australia-animais (vídeo 8), passo research

Gerada em 2026-11-19 pelo `pesquisa-dados`, a partir do espelho r2 (sha256 `833aaa75bf30…`): 73 cenas com pedido, 208 pedidos, 239 códigos F/N citados (contando as faixas). Cada cena em `out/australia-animais/_dados/<cena>.json`; as tabelas, as séries e a gente como pontos no fim. Unidades de tela: milhas e milhas quadradas; o métrico entre parênteses quando a fonte é métrica (identidade §7). Quem decide a tela é o redator, com o verificador; quem decide divergência é o Lucas.

**Os números:** 83 de 87 conferidos na fonte primária (relidos na cópia de quem produz o dado, ou refeitos do dado oficial); 4 atribuídos a fonte secundária (os 11,994 e o zero de Welton, pela página da universidade; os 73 % da abelha, pela revisão de Turner; o 1822, pelo Bee Aware). A lista está no JSON (`numeros.lista`).

## Contagem (por pedido)

| Status | Pedidos | O que quer dizer |
|---|---|---|
| conferido_primario | 66 | relido nesta tarefa na cópia local de quem produz o dado (o artigo, o órgão, a planilha oficial) |
| qualitativo_conferido | 54 | afirmação sem número; trecho relido na cópia |
| calculado_conferido | 34 | conta do canal refeita do zero hoje (conferir.py, gente_pontos.py) sobre o dado oficial |
| derivado | 34 | linha L da tabela: conclusão de outras linhas, sem trecho próprio |
| atribuido_imprensa | 9 | fala do cientista à imprensa (Live Science): vai atribuído, com o nome; trecho relido |
| atribuido_conferido | 5 | a fonte diz isso e não é quem mede (citação científica, página da universidade, associação): vai atribuído; trecho relido |
| leitura_da_sala | 5 | lido pela Sala no navegador do app (o site recusa robô); não relido por mim |
| fora_decisao_do_lucas | 1 | fora até a decisão do Lucas (o Taronga) |

Conferência: 344 checagens OK, 0 falhas (`conferir.log`). Os 141 trechos citados que têm cópia foram achados na minha extração das cópias originais (não nos .txt do verificador); 50 linhas de conta foram refeitas do zero; 40 são L; 6 são leituras da Sala.

## Os sete pendentes de checagem (achados os sete)

Registrados palavra por palavra. Quem os libera para a tela é o `verificador-de-fatos`, com o `redator-de-tela`.

- **f117 · s45 · 81,410–137,880 mortes por cobra por ano, no mundo** — OMS, ficha 'Snakebite envenoming' de 17/09/2026 (cópia que o verificador baixou em 18/11/2026).
  > Around 81 410 to 137 880 people die each year because of snake bites, and around three times as many amputations and other permanent disabilities are caused by snakebites annually.
  (A ficha não dá ano nem referência para o intervalo (as refs. 1 a 8 são de outros números). Suraweera et al. 2020 cita a OMS com '81,000–138,000'. Na tela: '81,410–137,880 A YEAR · WORLD (WHO ESTIMATE)', com 'Source: World Health Organization'.)
- **f125 · s47 · 1955 (taipan), 1956 (marrom), 1958 (death adder), 1962 (polivalente)** — Winkel, Mirtschin & Pearn, Toxicon 48:738–754 (2006), resumo no Europe PMC (PMID 17030053).
  > Commercial antivenom manufacture began in Australia in 1930 with the tiger snake antivenom. This was followed by other antivenoms for the other important species (1955: taipan; 1956: brown snake; 1958: death adder; 1959: Papuan black snake; 1961: sea snake; 1962: polyvalent) including the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish) culminating, in 1980, with the release of the funnel web spider antivenom.
  (A classe inteira tem seis anos: 1959 (Papuan black snake) e 1961 (sea snake) também. E o soro da funnel-web é 'released' em 1980 aqui, 'first used' em 1981 em Isbister 2005 (a voz segue 1981). Tabela: _dados/tabela-soros.csv.)
- **f114 · s44 · as dez paradas cardíacas fora do hospital** — Johnston et al., MJA 2017;207(3):119–125 (ASP-20), texto integral (mja.com.au) e resumo.
  > There were 23 deaths (median, two per year), attributed to brown (17), tiger (four) and unknown (two) snakes; ten followed out-of-hospital cardiac arrests and six followed intracranial haemorrhages.
  > Out-of-hospital cardiac arrest was the most common cause of death (ten cases), followed by intracranial haemorrhage (six cases).
  (Julho de 2005 a junho de 2015; as 23 mortes juntam o ASP e o NCIS (Box 3). Na tela, se for: '10 OF 23 AFTER CARDIAC ARREST OUTSIDE HOSPITAL', com o crédito do ASP-20.)
- **f131 · s49 · o 'held steady' (Welton, Liew & Braitberg 2017)** — Welton, Liew & Braitberg, TOXICON 2017;131:11–15 (NCIS, jan/2000 a dez/2016), resumo no Europe PMC (PMID 28288937). NÃO é o Intern Med J, como o pedido diz.
  > Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years.
  > Thirty five deaths (2.2 per year) were ascribed or antecedent to a snake bite.
  (O Intern Med J 2017 é de Welton, Williams & Liew (os artrópodes, os 44 %). Os 35 de 2000–2016 dão 2,06 por ano em 17 anos (o '2.2' do resumo supõe 16): se for à tela, '35 IN 17 YEARS'. Não confundir com os 35 do X20 do ABS (2016–2025).)
- **f180 · s66 · 2.077 afogamentos (W65–W74), 2016–2025** — ABS, Causes of Death, Australia, 2025, Table 1.2 (abs-2025_01.xlsx).
  > Accidental drowning and submersion (W65-W74): 208, 161, 181, 200, 209, 193, 236, 222, 242, 225 (2016 a 2025; soma 2,077)
  (A voz diz 'drowning in rivers, lakes and the sea … more than a thousand': é o W69 (1,010). O W65–W74 inclui banheira e piscina. A Table 15.4 tem outro 'Total accidental drowning' (301 em 2025), com transporte e quedas: não misturar.)
- **f137 · s51 · '1 IN 225': uma morte em 225 picadas confirmadas de caixa-medusa** — Currie & Jacups, MJA 2005;183(11):631–636 (cópia de mja.com.au).
  > Of 606 jellyfish stings documented, 225 were confirmed to have been caused by C. fleckeri.
  > Cardiorespiratory arrest occurred within several minutes of the sting in the one fatal case, involving a 3-year-old girl with only 1.2 m of visible tentacle contact.
  > All patients with jellyfish sting details recorded between 1 April 1991 and 30 May 2004.
  > 225 were stung in Darwin Harbour or the Tiwi Islands and were thus classified as C. fleckeri envenoming.
  (1 em 225 = 0,44 %: letalidade entre os picados que chegaram ao serviço (Royal Darwin Hospital e as clínicas da costa do NT), não risco por banhista.)
- **f160 · s59 · o estudo pequeno de 2003 sobre o soro do redback** — Isbister & Gray, MJA 2003;179(2):88–91 (resumo no Europe PMC, PMID 12864719; texto em fontes/b/mja-latrodectism2003.html). O arquivo que o pedido aponta, fontes/a/mja2003-redback.*, é a CARTA de Wiener (MJA 179(8):455–456) sobre esse estudo.
  > 68 people with definite redback spider bites in which the spider was immediately collected and expertly identified (1 February 1999 to 30 April 2002).
  > One of six patients treated with intramuscular antivenom (17%) had no pain at 24 hours, compared with two of 17 untreated patients (12%) (difference, 5%; 95% CI, -36% to +64%; P = 0.95).
  > Intramuscular antivenom appears to be less effective than previously thought and its use by this route needs review.
  (No texto: 'redback spider antivenom was introduced without controlled studies to demonstrate efficacy or safety'. Seis tratados contra 17 não tratados.)

## O que diverge (a voz primeiro)

- **s58 · f158 · TOCA A VOZ** — voz/tela: "Redback bites killed at least 14 people before that antivenom arrived, in 1956, and there's been no confirmed death since.". Fonte: Universidade de Melbourne (Pursuit, 17/01/2017): 'A man died from a red back spider bite in April 2016, the first spider bite death in more than 30 years'. Winkel et al., AFP 2004: 'Since 1955, no deaths had been reported until a recent fatality following presumed redback spider bite in northern New South Wales'. O ABS: X21 = 0 em todos os anos de registro de 2016 a 2025.. A voz se sustenta pelo 'confirmed' (Wiener 2003; o ABS não registra morte por aranha); mas duas fontes lidas falam de mortes presumidas, uma delas afirmada sem ressalva pela universidade. A tela nunca tira o 'CONFIRMED'. Se a Sala quiser fechar, ler no navegador o desfecho do caso de abril de 2016 (o NCIS recusa robô). E o ano do soro: Winkel 2004 diz 'Since 1955'; Wiener, 1956 (a base escolheu 1956, com razão: é de quem o fez).
- **s46 · f124 · TOCA A VOZ** — voz/tela: "That same national study found fewer than a hundred bites a year that injected venom". Fonte: ASP-20: 'Systemic envenoming occurred in 835 patients (54%; median, 87 patients per year; IQR, 62–102 per year'. Verdade na média (83,5) e na mediana (87); o quartil de cima é 102, então em parte dos anos passou de 100. A tela pode levar 'ON AVERAGE'.
- **s71 · f199 · TOCA A VOZ** — voz/tela: "In January 2026, the park said it was down to about half its usual supply.". Fonte: Australian Reptile Park, 13/01/2026: 'the Australian Reptile Park is now operating at around half of its usual funnel-web spider capacity'. O parque fala das ARANHAS do programa, não do estoque de soro. A voz, no contexto ('the park needs spiders'), fica; a tela diz aranhas, não 'SUPPLY' sozinho.
- **s57 s72 (a régua dos soros) · f153** — voz/tela: "That year [1981], an antivenom came into use.". Fonte: Isbister et al. 2005: 'Funnel-web spider antivenom was first used in 1981'. Winkel et al. 2006: 'culminating, in 1980, with the release of the funnel web spider antivenom'.. A voz é fiel a Isbister. Na régua, '1981 · FIRST USED'; o 1980 de Winkel só com 'RELEASED'.
- **s47 · f125** — voz/tela: "(tela) os anos dos soros além de 1930". Fonte: Winkel 2006: 1955, 1956, 1958, 1959, 1961, 1962. A classe inteira tem seis anos, não quatro. A régua leva os seis, ou diz 'SELECTED'.
- **s06 s07 s14 s63 s66 · f7** — voz/tela: "(tela) '2016–2025 · 2025 PRELIMINARY'". Fonte: ABS, nota (a): 'final data for 2016-2022, revised data for 2023, preliminary revised data for 2024 and preliminary data for 2025'. 2024 também é provisório. Sugestão: '2024–2025 PRELIMINARY'.
- **s49 · f131** — voz/tela: "(tela, pendente) o 'held steady'". Fonte: Welton, Liew & Braitberg é da Toxicon (131:11–15), não do Intern Med J. Corrigir o crédito, se for à tela. O '2.2 per year' do resumo não fecha com 35 em 17 anos.
- **s59 · f160** — voz/tela: "(tela, pendente) o estudo de 2003". Fonte: Isbister & Gray, MJA 2003;179(2):88–91. O arquivo do pedido (fontes/a/mja2003-redback.*) é a carta de Wiener, não o estudo.
- **s02 s33 s37 · f1 f73 f87** — voz/tela: "(tela) 'Source: Government of South Australia, SA Arid Lands NRM Board, 2009'". Fonte: A ficha não tem data impressa; 23/12/2009 é a data de criação do PDF (metadados). Crédito sem ano, ou 'c. 2009' (o redator decide).
- **s02 s36 · f2 f83** — voz/tela: "the land snake with the most potent venom on Earth; the inland taipan's came out on top". Fonte: O artigo de 1979 (Toxicon 17:661–664) não está em cópia: só o título. O resultado vem de Paz et al. 2025 e Jackson et al. 2016, que citam Broad 1979, e da ficha da Austrália do Sul. Atribuído, não medido por mim. Para fechar na fonte que mede, a Sala leria a tabela do artigo de 1979 no navegador (a ScienceDirect recusou robô).
- **s09 · f9** — voz/tela: "Australia's roads killed more people in an average month of 2025 than venom did in that whole decade.". Fonte: ABS Table 15.4: 'Total motor vehicle accidents (V01-V79, V89.2)' = 1,276 em 2025, com acidentes fora da via; sem suicídio, agressão e intenção indeterminada. A frase passa com folga (o limiar é 1,020 no ano). A contagem policial de mortes nas estradas (BITRE) não foi lida: o datahub não respondeu a programa.
- **s64 · f174** — voz/tela: "(fora da tela) os 81 %, 75 cavalos e 31 bois". Fonte: Peachey & Lower 2023, resumo: 86 homens (66 %) e 54 mulheres somam 140; 106/140 = 76 %, não 81 % (86/0,66 = 130). O resumo não fecha consigo mesmo. Nenhum número dele vai à tela (DF-13): só registro.

## As séries dos gráficos e as tabelas

- `out/australia-animais/_dados/serie-abs-mortes-2016-2025.csv` (25 linhas; s07, s08, s14, s15, s16, s60, s61, s63, s64, s65, s66): ABS, Causes of Death, Australia, 2025, Table 1.2 (pessoas, por ano de registro; 2016–2022 finais; 2023 revisado; 2024 preliminar revisado; 2025 preliminar (nota (a) da Table 1.2)). Cada linha relida na planilha (abs-2025_01.xlsx); a W53–W59 é a soma do canal. CC BY 4.0. Vale para s07, s08, s14, s15, s16, s60, s61, s63, s64, s65, s66.
- `out/australia-animais/_dados/tabela-estrada-2021-2025.csv` (5 linhas; s09): s09. ABS, Table 15.4 do cubo 2025_15 ('Total motor vehicle accidents (V01-V79, V89.2)'), por ano de registro; 2025 preliminar, 2024 preliminar revisado. Sem suicídio, agressão e intenção indeterminada (nota (c)). Os 85 venenosos de 2016–2025 = 24,3 dias de 2025.
- `out/australia-animais/_dados/tabela-chance-2016-2025.csv` (11 linhas; s17): s17. ERP de 30 de junho (ABS 3101.0, série A2133251W, em milhares × 1.000) e as mortes X20–X29 (Table 1.2). 257,890,800 / 85 = 3,034,009: 1 em 3 milhões por ano. Conta do canal.
- `out/australia-animais/_dados/tabela-medida-censo.csv` (5 linhas; s39, s43): s39, s43. A medida do Censo refeita do zero: o CHC (IBRA 7.1, DCCEEW; 30,409,436.976 ha) com a gente pelo centroide de área dos mesh blocks (o shapefile nacional do ABS, baixado em 19/11/2026); os estados pelo QuickStats 2021 e pelo AREASQKM21 do ABS. Razão de densidade: 2,133× (central); a menor de todas as variantes, 1,256× (1,732 pessoas). 1 mi² = 2.589988 km². Crédito: 'Alpha Point calculation: ABS Census 2021 (mesh block counts); IBRA 7.1 (DCCEEW)'.
- `out/australia-animais/_dados/tabela-reptile-database-2026-11-18.csv` (2 linhas; s05, s22, s28): s05, s22, s28. The Reptile Database, busca avançada, as seis páginas que o verificador baixou em 18/11/2026 ('Species found: N'), recontadas hoje. Crédito: 'Alpha Point count: The Reptile Database, searched Nov. 18, 2026'.
- `out/australia-animais/_dados/tabela-india-australia.csv` (2 linhas; s45): s45. Razão por pessoa = 4.711 / 0.0136 = 347× ('hundreds of times'; tela '≈ 350×'). Períodos e métodos diferentes: estimativa (autópsia verbal) contra registro de óbito. Conta do canal.
- `out/australia-animais/_dados/tabela-soros.csv` (12 linhas; s47, s52, s57, s58, s72): s47, s52, s57, s58, s72. A régua dos soros, cada linha relida na cópia. A classe inteira de Winkel 2006 tem 1959 e 1961, além dos quatro do pedido. O soro da funnel-web: LANÇADO em 1980 (Winkel 2006), USADO pela primeira vez em 1981 (Isbister 2005; a voz segue este).
- `out/australia-animais/_dados/tabela-estudos.csv` (18 linhas; s16, s44, s46, s49, s51, s57, s58, s59, s61, s62, s64): Os números de estudo, cada um com o período do estudo e o trecho relido na cópia local. Nunca no mesmo quadro que a série do ABS de 2016–2025 (DF-04).
- `out/australia-animais/_dados/gente-pontos-2021.geojson` (60677 linhas; s39, s43, s68, s74): A gente como pontos (Censo 2021): o país em SA1 (60,411 pontos) e o retângulo do Channel Country em mesh block (266 pontos), cada ponto no centroide de área do seu polígono, na Albers; 25,365,959 pessoas; o CHC dá 1,020 (os 29 blocos com 'chc': true). CC BY 4.0. O nacional em mesh block (279,803 pontos, 34 MB) fica fora do git: out/australia-animais/_tmp/pesquisa-dados/rede/gente-pontos-mb-2021-nacional.geojson.

## A gente como pontos

`out/australia-animais/_dados/gente-pontos-2021.geojson` (7,394,004 bytes; sha256 `68ffd96497c3…`): 60,677 pontos, 25,365,959 pessoas. Granularidade: o país em SA1 (60,411 pontos), o retângulo do Channel Country em mesh block (266 pontos). Cada ponto é o centroide de área do polígono, na Albers (EPSG:3577), devolvido em graus. Por quê: o país inteiro em mesh block são 279,803 pontos (34 MB), grande demais para o git e para a cena, e na escala do continente um SA1 e os seus blocos caem no mesmo pixel; mas no sertão o SA1 erra o lugar da gente (em SA1, o CHC teria 1,343 pessoas em 5 pontos, contra os 1,020 da medida). No CHC, 1,020 pessoas em 29 blocos (com `chc: true`), igual à medida. Os 52,463 moradores dos 12 mesh blocks sem polígono (sem endereço, migratórios) ficam fora. O nacional em mesh block está fora do git, em `out/australia-animais/_tmp/pesquisa-dados/rede/gente-pontos-mb-2021-nacional.geojson`. Crédito: `Alpha Point calculation: ABS Census 2021 (mesh block counts); IBRA 7.1 (DCCEEW)`; licença CC BY 4.0.

## Os voláteis

| O quê | Lido em | Data do dado | Muda quando | Cenas |
|---|---|---|---|---|
| ABS, Causes of Death, Australia, 2025 (todas as séries do registro) | 18/11/2026 (cópia); relido nesta tarefa em 19/11/2026 | lançamento de 27/10/2026; 2025 preliminar, 2024 preliminar revisado | o próximo lançamento (o ABS dá 'Next release Unknown') revisa 2024 e 2025 | s06 s07 s09 s14 s15 s16 s17 s45 s60 s61 s63 s64 s65 s66 |
| ABS, ERP (3101.0) | 18/11/2026 (cópia) | lançamento de 17/09/2026 (até 31/03/2026) | 17/12/2026 (junho de 2026); revisões de anos recentes | s17 |
| OMS, ficha 'Snakebite envenoming' | 18/11/2026 (o verificador) | 17/09/2026 | uma revisão da ficha | s45 |
| healthdirect, 'Snake bites' | 18/11/2026 (cópia) | revisto em outubro de 2024 | a página mudar | s47 s48 |
| Australian Reptile Park (o programa da funnel-web) | 18/11/2026 (cópia) | 13/01/2026 | nova nota do parque | s68–s74 |
| The Reptile Database (as contagens) | 18/11/2026 (o verificador) | busca de 18/11/2026 | novas espécies e revisões | s05 s22 s28 |
| Queensland Museum (a marrom-oriental) | 18/11/2026 (a Sala, no navegador) | página do museu | a página mudar | s40 s42 |
| NCIS (o resumo da FS24-09) | 18/11/2026 (a Sala, no navegador) | FS24-09 | nova ficha | s06 s63 |
| 'no confirmed death' (funnel-web e redback) | 19/11/2026 (MJA 2005; Wiener 2003; ABS X21 2016–2025; o parque, 13/01/2026) | até 2025 no ABS | uma morte confirmada | s57 s58 s72 |

## Para a Sala ler no navegador do app

1. O desfecho do caso de abril de 2016 (o homem que a Universidade de Melbourne diz ter morrido de picada de redback, 'outside the study period'): se houve achado do legista. Toca a voz de f158 ('no confirmed death since'). O NCIS recusa robô; uma fonte oficial ou a imprensa de referência, como pista.
2. O boletim de dezembro de 2025 do BITRE/Office of Road Safety (datahub.roadsafety.gov.au/…/Road_deaths_Australia_Monthly_Bulletin_Dec2025.pdf): o total de mortes nas estradas em 2025 (uma busca diz 1,314; NÃO conferido). O datahub não respondeu a programa (robots.txt e PDF, 120 s cada). Opcional: s09 já passa pelo ABS.
3. O artigo de 1979 (Broad, Sutherland & Coulter, Toxicon 17:661–664), a tabela com a taipan-do-interior no topo, se a Sala quiser a fonte que mede, e não a citação (a ScienceDirect recusou robô na pauta). Opcional.
4. A tabela de Welton et al. no próprio Internal Medicine Journal (Wiley), se a Sala quiser os 11,994 na revista, e não na página da universidade. Opcional; não tentei a Wiley por programa.
5. Os voláteis da lista, antes da gravação de tela e de novo antes de publicar (a releitura é da Sala).

## Não conferido por mim

- F010, F191, F192 (NCIS) e N005, F112, F113 (Queensland Museum): leituras da Sala no navegador do app; os sites recusam robô; não relidos por mim.
- o resultado do teste de 1979: só o título está em cópia; vai atribuído (Paz 2025, Jackson 2016, a ficha da Austrália do Sul).
- as mortes nas estradas pela contagem policial (BITRE): o datahub não respondeu; s09 usa a categoria do ABS.

## A rede (um pedido por vez, User-Agent do canal)

- {"url": "https://www.abs.gov.au/robots.txt", "status": 200, "bytes": 641, "sha256": "2de3e3cc8eed16090dd838b5daa903af5cd3156212ae0ae065274cf6be12d892", "quando": "2026-11-19T03:52:17Z"}
- {"url": "https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/access-and-downloads/digital-boundary-files/MB_2021_AUST_SHP_GDA2020.zip", "status": 200, "bytes": 228000896, "sha256": "d855af24e898d355610cba930df7291f29d2d29eab83245e962c49dcf15a1895", "quando": "2026-11-19T03:52:29Z"}
- {"url": "https://datahub.roadsafety.gov.au/robots.txt", "status": "erro", "quando": "2026-11-19T04:04:38Z", "erro": "The read operation timed out"}
- {"url": "https://datahub.roadsafety.gov.au/sites/default/files/documents/Road_deaths_Australia_Monthly_Bulletin_Dec2025.pdf", "status": "erro", "quando": "2026-11-19T04:06:40Z", "erro": "The read operation timed out"}
- {"busca": "WebSearch 'BITRE road deaths Australia 2025 calendar year total monthly bulletin' (só para achar o endereço; o número dela não foi usado)", "quando": "2026-11-19"}

## As cenas

| Cena | Status | Pedidos | Tela (sugestão) | Crédito |
|---|---|---|---|---|
| s01 | qualitativo_conferido | 1 | CHANNEL COUNTRY (rótulo de lugar; sem número) |  |
| s02 | atribuido_conferido | 1 | CHANNEL COUNTRY · MOST POTENT VENOM OF ANY LAND SNAKE (pequeno) | Source: Government of South Australia, SA Arid Lands NRM Board | IBRA 7.1 (DCCEEW) |
| s03 | qualitativo_conferido | 1 | (nada por cima da taipan; o 1979 vai a s36) |  |
| s04 | calculado_conferido | 2 | NOT THE KILLER | Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20) |
| s05 | calculado_conferido | 2 | ≈ 2 IN 3 · 150 OF 229 SNAKE SPECIES · ONE VENOMOUS FAMILY | Alpha Point count: The Reptile Database, searched Nov. 18, 2026 |
| s06 | leitura_da_sala | 2 | CAUSES OF DEATH, AUSTRALIA, 2025 | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) |
| s07 | calculado_conferido | 2 | 85 · 2016–2025 · 2025 PRELIMINARY | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) |
| s08 | conferido_primario | 1 | (nenhum número obrigatório; o zero vai a s16 e s60) |  |
| s09 | calculado_conferido | 1 | ROADS · AN AVERAGE MONTH OF 2025 ≈ 106 · VENOM · 2016–2025: 85 (opcional: ≈ 24 DAYS OF 2025 ROADS) | Alpha Point calculation: ABS, Causes of Death 2025 (preliminary) |
| s10 | derivado | 1 | (a pergunta; a forma é do redator) |  |
| s12 | derivado | 1 | (nenhum texto sobre a footage) |  |
| s13 | qualitativo_conferido | 1 | COUNTED | Source: Australian Bureau of Statistics (ABS) |
| s14 | calculado_conferido | 2 | VENOMOUS SNAKES AND LIZARDS (X20): 35 · BEES & WASPS (X23): 42 · 2016–2025 | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) |
| s15 | calculado_conferido | 6 | OTHERS: 8 · 6 · OTHER VENOMOUS ARTHROPODS (X25) · ANTS, CATERPILLARS · 2 · VENOMOUS MARINE ANIMALS (X26) · JEL | Source: ABS, Causes of Death, Australia, 2025 (CC BY 4.0); WHO, ICD-10 (2019) |
| s16 | atribuido_conferido | 3 | P1: SPIDERS (X21): 0 · 2016–2025 · P4: ≈ 12,000 HOSPITAL ADMISSIONS (SPIDERS) · ONE STUDY · 0 DEATHS | P1: Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)  |
| s17 | calculado_conferido | 3 | 1 IN 3 MILLION A YEAR | Alpha Point calculation: ABS, Causes of Death 2016–2025; estimated resident population |
| s18 | derivado | 1 |  |  |
| s19 | atribuido_imprensa | 3 | KEVIN ARBUCKLE · "FOR THE MOST PART THIS IS OVERSTATED" | Kevin Arbuckle, Swansea University, to Live Science, 2023 |
| s20 | atribuido_imprensa | 1 |  | Kevin Arbuckle, Swansea University, to Live Science, 2023 |
| s21 | atribuido_imprensa | 3 | (sem número; o 13 é de s65) |  |
| s22 | calculado_conferido | 1 | (sem número) |  |
| s23 | calculado_conferido | 2 | 85–80 MILLION YEARS AGO · GONDWANA · ANTARCTICA | Source: Geoscience Australia |
| s24 | calculado_conferido | 4 | ≈ 45 MILLION YEARS AGO | Source: Hall, Journal of Limnology, 2013; Scher et al., Nature, 2015 |
| s25 | atribuido_imprensa | 2 | ELAPIDS · FRONT-FANGED SNAKES | Source: Lee et al., Royal Society Open Science, 2016 |
| s26 | calculado_conferido | 4 | 30–25 MILLION YEARS AGO · MOLECULAR ESTIMATE (o 23 só em s29) | Source: Lee et al., Royal Society Open Science, 2016 (molecular estimate); Hall, 2013 |
| s27 | conferido_primario | 5 | NO VIPERS · RATTLESNAKE · A VIPER | Source: Jackson et al., Toxins, 2016; Lee et al., 2016 |
| s28 | calculado_conferido | 5 | WORLD: 414 ELAPIDS + 412 VIPERS = 826 OF 4,252 (≈ 1 IN 5) · AUSTRALIA: 150 OF 229 SNAKE SPECIES ARE ELAPIDS ·  | Alpha Point count: The Reptile Database, searched Nov. 18, 2026 |
| s29 | conferido_primario | 3 | ≈ 23 MILLION YEARS AGO (WALLACEA, opcional) | Source: Hall, Journal of Limnology, 2013; Rowe et al., 2019; Skeels et al., Science, 2023 |
| s30 | qualitativo_conferido | 1 |  | Source: ABS, Measuring Australia's Progress, 2002 (se for) |
| s31 | qualitativo_conferido | 1 |  |  |
| s32 | calculado_conferido | 2 | ≈ 15 MILLION YEARS AGO · THE PAST FEW MILLION YEARS | Source: Byrne et al., Molecular Ecology, 2008 |
| s33 | calculado_conferido | 2 | Diamantina River · Cooper Creek · CHANNEL COUNTRY | Source: Government of South Australia, SA Arid Lands NRM Board; IBRA 7.1 (DCCEEW) |
| s34 | qualitativo_conferido | 2 |  | Source: Government of South Australia, SA Arid Lands NRM Board; Rowe et al., Journal of Bi |
| s35 | qualitativo_conferido | 2 | PROBABLY (se houver texto) | Source: Jackson et al., Toxins, 2016 |
| s36 | atribuido_conferido | 3 | "THE LETHALITY IN MICE OF DANGEROUS AUSTRALIAN AND OTHER SNAKE VENOM" · 1979 · LD50 · THE DOSE THAT KILLS HALF | Source: Broad, Sutherland & Coulter, Toxicon, 1979; Ainsworth et al., PLOS Neglected Tropi |
| s37 | qualitativo_conferido | 3 | MOUSE TESTS: CRITICIZED · "USUALLY QUITE SHY" | Source: Ainsworth et al., PLOS Neglected Tropical Diseases, 2026; Government of South Aust |
| s38 | calculado_conferido | 3 | ≈ 12 DOCUMENTED CASES · BY 2017 · 3 IN THE WILD | Source: Weinstein et al., Toxicon, 2017 |
| s39 | calculado_conferido | 5 | CHANNEL COUNTRY · ≈ 117,000 SQ MI · ≈ 1,000 PEOPLE (2021 CENSUS) · ≈ 1 PERSON PER 100 SQ MI | Alpha Point calculation: ABS Census 2021 (mesh block counts); IBRA 7.1 (DCCEEW) |
| s40 | leitura_da_sala | 4 | (nenhum número; NUNCA 'BROWN SNAKES LIVE ONLY IN THE EAST') |  |
| s41 | conferido_primario | 2 | BROWN SNAKE · NEAR THE TOP · SAME 1979 TEST | Source: Jackson et al., Toxins, 2016 |
| s42 | leitura_da_sala | 5 | EASTERN BROWN SNAKE · FOUND OVER MOST OF QUEENSLAND, NEW SOUTH WALES AND VICTORIA | Source: Queensland Museum; ASGS 2021 boundaries (CC BY 4.0) |
| s43 | calculado_conferido | 5 | ≈ 19.7 MILLION PEOPLE (2021 CENSUS) · > 1,000× PER SQ MI | Source: ABS, Census 2021 QuickStats; ASGS 2021 boundaries (CC BY 4.0) | Alpha Point calcul |
| s44 | conferido_primario | 6 | 23 DEATHS · JULY 2005–JUNE 2015 · 17 BROWN SNAKES · 0 INLAND TAIPAN | Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20) |
| s45 | calculado_conferido | 4 | INDIA ≈ 58,000 A YEAR (2000–2019) · AUSTRALIA ≈ 3.5 A YEAR (2016–2025) · ≈ 350× PER PERSON · different periods | Source: WHO, citing Suraweera et al., eLife, 2020 | Source: Australian Bureau of Statistic |
| s46 | calculado_conferido | 3 | < 100 BITES A YEAR THAT INJECTED VENOM · 2005–2015 (sugestão: 'ON AVERAGE') | Source: Johnston et al., Medical Journal of Australia, 2017 (ASP-20) |
| s47 | conferido_primario | 3 | SINCE 1930 | Source: Johnston et al., MJA, 2017 (ASP-20); healthdirect Australia |
| s48 | conferido_primario | 4 | AUSTRALIA'S FIRST AID FOR SNAKEBITE · NOT A TREATMENT | Source: ANZCOR Guidelines 9.4.1 and 9.4.8; healthdirect Australia |
| s49 | conferido_primario | 6 | NO FIELD COMPARISON OF THE BANDAGE · NO CONTROLLED ANTIVENOM TRIAL PUBLISHED · AS OF 2017 | Source: ANZCOR Guideline 9.4.8; Johnston et al., MJA, 2017 (ASP-20) |
| s50 | derivado | 1 | TROPICAL NORTH (se for rótulo) |  |
| s51 | conferido_primario | 4 | ≈ 70 DEATHS · AS OF 2005 · STINGER SEASON · OCT. 1–JUNE 1 | Source: Currie & Jacups, Medical Journal of Australia, 2005 |
| s52 | atribuido_imprensa | 2 | 1970 · THE WORLD'S FIRST ANTIVENOM FOR A JELLYFISH | Source: Winkel et al., Toxicon, 2006 |
| s53 | atribuido_imprensa | 2 | Sydney |  |
| s54 | conferido_primario | 3 | 150–200 MILLION YEARS AGO · 85–80 MILLION YEARS AGO (o rifte) | Source: Herzig et al., PNAS, 2020; Geoscience Australia |
| s55 | qualitativo_conferido | 5 | "AN UNFORTUNATE EVOLUTIONARY COINCIDENCE" · INSENSITIVE | Source: Herzig et al., PNAS, 2020 |
| s56 | qualitativo_conferido | 3 | NOVEMBER–MARCH · SEVERE CASES RECORDED · NEW SOUTH WALES · southern Queensland | Source: Herzig et al., PNAS, 2020; Isbister et al., MJA, 2005 |
| s57 | conferido_primario | 5 | AT LEAST 13 DEATHS BEFORE 1981 · 1981 · ANTIVENOM · NO CONFIRMED DEATH SINCE · 97% (28 OF 29) | Source: Isbister et al., Medical Journal of Australia, 2005 |
| s58 | conferido_primario | 4 | 590 REDBACK SPIDERS · 1955–1957 · AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE | Source: Wiener, Medical Journal of Australia, 2003; Winkel et al., Australian Family Physi |
| s59 | conferido_primario | 3 | "DID NOT SIGNIFICANTLY IMPROVE PAIN OR SYSTEMIC EFFECTS" | Source: Isbister et al., Annals of Emergency Medicine, 2014 (RAVE-II) |
| s60 | conferido_primario | 1 | SPIDERS (X21): 0 · 2016–2025 | Source: ABS, Causes of Death, Australia, 2025 (CC BY 4.0) |
| s61 | conferido_primario | 4 | P1: BEES & WASPS: 42 · P3: < HALF REACHED MEDICAL CARE · ONE STUDY · ANAPHYLAXIS · A SEVERE ALLERGIC REACTION | P1: Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0)  |
| s62 | atribuido_conferido | 3 | HONEYBEE: MOST FATAL STING ALLERGIES · ONE STUDY, 1997–2013 (opcional) · 1822 | Source: Turner et al., J Allergy Clin Immunol Pract, 2017; Bee Aware (Plant Health Austral |
| s63 | leitura_da_sala | 2 | VENOMOUS: 85 · NO VENOM: 154 · 2016–2025 (MARINE ANIMALS (W56): 32 · 2016–2025, condicional) | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) | So |
| s64 | conferido_primario | 3 | DOGS · OTHER MAMMALS · MARINE ANIMALS · CROCODILES | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) | So |
| s65 | calculado_conferido | 5 | CROCODILES (W58): 13 · 2016–2025 · SRI LANKA · NORTHERN TERRITORY · PROTECTED IN 1971 | Source: Australian Bureau of Statistics, Causes of Death, Australia, 2025 (CC BY 4.0) | So |
| s66 | calculado_conferido | 4 | VENOM: 85 · HEAT: 202 · DROWNING (NATURAL WATER): 1,010 · 2016–2025 (≈ 2.4× · ≈ 12×, só com 'Alpha Point calcu | Source: ABS, Causes of Death, Australia (2025 preliminary) | razões: Alpha Point calculati |
| s67 | atribuido_imprensa | 2 | HE HAS WONDERED · "SCIENTIFIC CAPITAL" · "EXCELLENT INFRASTRUCTURE" · A THOUGHT, NOT A FINDING | Kevin Arbuckle, Swansea University, to Live Science, 2023 |
| s68 | calculado_conferido | 6 | ONLY PART (ou nada) |  |
| s69 | conferido_primario | 2 | THE ONLY SUPPLIER OF FUNNEL-WEB VENOM FOR ANTIVENOM IN AUSTRALIA | Source: Australian Reptile Park, Jan. 13, 2026 |
| s70 | qualitativo_conferido | 2 | ADULT MALES ONLY | Source: Australian Reptile Park, Jan. 13, 2026 |
| s71 | conferido_primario | 5 | ≈ 150 MILKINGS PER VIAL · JANUARY 2026: ABOUT HALF ITS USUAL FUNNEL-WEB SPIDERS (sugestão) | Source: Australian Reptile Park, Jan. 13, 2026 |
| s72 | conferido_primario | 2 | 1981 · ANTIVENOM · NO ONE HAS DIED, THE PARK SAYS | Source: Australian Reptile Park, Jan. 13, 2026; Isbister et al., MJA, 2005 |
| s73 | conferido_primario | 2 | (15 DROP-OFF POINTS, opcional; sem a lista dos lugares) | Source: Australian Reptile Park, Jan. 13, 2026 |
| s74 | calculado_conferido | 3 | (nenhum texto novo obrigatório) |  |
