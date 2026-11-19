COBERTURA: 605 de 605

# Laudo do `verificador-de-fatos`: o texto de tela inteiro (`australia-animais`, vídeo 8, passo `screen_text`)

Revisão julgada: `bfd94a54b442`

- **O objeto:** `out/australia-animais/textos-tela.json`, sha256 `6939147cca009f34e7b028a208d22082a05a82884182df36c55f6eb54210aa18`
  (conferido antes e depois), com o relato do redator (`out/australia-animais/_tmp/redator/relato.md`). Data-base: 19/11/2026, ~18h55–19h30
  (Brasília). Só cópias locais; nenhuma rede nesta passada (a única consulta do dia, ao Europe PMC, é a do pré).
- **O denominador, por script** (`out/australia-animais/_tmp/verificar-tela/numerar.mjs` → `lista-tela.json`/`.txt`): os 433 textos de
  `_textos_por_cena` (nenhum com `_vai_a_tela: false`), na ordem do arquivo, `VT-001`…`VT-433`; mais, com id próprio, os 2 cards (`CARD-1`, `CARD-2`),
  os 36 `rotulos_dado` (`RD-01`…`RD-36`), o aviso do ano (`AV-1`, lista vazia), a pergunta do comentário (`PQ-1`), as 10 escalas e réguas que
  as notas declaram (`E-01`…`E-10`) e as 122 grafias do glossário (`G001`…`G122`). **605 itens, 605 com veredito.**
- **Como cada um foi julgado** (`montar-tela.mjs` → `laudo-tela.json`): por id, citando a linha que já tinha veredito (F/N do laudo da voz;
  f do laudo das divergências; P/S/A/C do pré) e conferindo número, unidade, arredondamento, período, dono e ano; as folhas e citações
  letra a letra por script (`literais.mjs`); os créditos de foto casados por sha256 com o veredito `aprovado` da própria cena
  (`fotos.mjs` → `fotos-casamento.json`). A regra por padrão (`regras-a.mjs`) só cobre os créditos repetidos (MapTiler, ABS, IBRA…); todo
  o resto tem veredito próprio (`over-1…5.mjs`, `extras.mjs`).
- **Placar:** 584 `confirmado` · **13 `corrigir`** · **1 `NÃO CONFERIDO`** · 7 `nada a checar`. Nenhuma REFUTADA; nenhum número de tela
  diverge da fonte. CHECADO POR INTEIRO.

NOTA: 8.5/10 — os números, as folhas e as citações conferem; os 13 `corrigir` são de forma: oito créditos sem o ano que a fonte tem
(identidade §7), um "ON AVERAGE" que falta, um cabeçalho de folha que não é o título do artigo e três registros atrasados.

## Os `corrigir` (o texto exato que vai à tela)

| id | cena | hoje | conserto |
|---|---|---|---|
| VT-109 | s22 P2 | `Source: Geoscience Australia` | `Source: Geoscience Australia, 2011` (a fonte de F044/F045 é a AusGeo News 104, dez. 2011) |
| VT-286 | s54 | `Source: Herzig et al., PNAS, 2020; Geoscience Australia` | `Source: Herzig et al., PNAS, 2020; Geoscience Australia, 2011` |
| VT-252, VT-256 | s47, s48 P2 | `Source: healthdirect Australia` | `Source: healthdirect Australia, 2024` ("Last reviewed: October 2024") |
| VT-255, VT-257 | s48 P1, P3 | `Source: ANZCOR Guidelines 9.4.1 and 9.4.8` | `Source: ANZCOR Guidelines 9.4.1 (2021) and 9.4.8 (2011)` ("Approved: April 2021"; "Approved: 2011") |
| VT-260 | s49 P1 | `Source: ANZCOR Guideline 9.4.8` | `Source: ANZCOR Guideline 9.4.8, 2011` |
| VT-342 | s61 P3 | `Source: Welton et al., Internal Medicine Journal, 2017;` / `ANZCOR Guideline 9.4.3` | `Source: Welton et al., Internal Medicine Journal, 2017;` / `ANZCOR Guideline 9.4.3, 2021` ("Approved: 12 November 2021") |
| VT-241 | s45 P2 | `3 OR 4 A YEAR · 2016–2025` / `2023 REVISED · 2024–2025 PRELIMINARY` | `3 OR 4 A YEAR ON AVERAGE · 2016–2025` / `2023 REVISED · 2024–2025 PRELIMINARY` (X20 por ano: 2, 2, 9, 1, 6, 2, 3, 2, 5, 3; média 3,5, mediana 2,5; em 8 dos 10 anos não foram 3 nem 4: a regra do f124, que s46 já segue) |
| VT-324 | s59 P1 | `Annals of Emergency Medicine · 2014` / `RAVE-II: Randomized controlled trial of intravenous antivenom versus placebo for latrodectism` | `Annals of Emergency Medicine · 2014` / `Randomized controlled trial of intravenous antivenom versus placebo for latrodectism: the second Redback Antivenom Evaluation (RAVE-II) study` (o título real, Europe PMC 24999282; a folha recriada não reordena o título) |
| RD-19 | registro (s45) | `na_tela: 3 OR 4 A YEAR · 2016–2025 / 2024–2025 PRELIMINARY` | igual ao VT-241 consertado |
| RD-26 | registro (s58) | `fonte: … Winkel et al., AFP 2004 …` | `Wiener, MJA 2003; Nimorakiotakis & Winkel, Aust Fam Physician 2004; F174, F175` (a tela, VT-322, já está certa) |
| G035 | glossário | `Guidelines 9.4.1 (2021), 9.4.3 e 9.4.8 (2011)` | `9.4.1 (abr/2021), 9.4.3 (12/11/2021), 9.4.8 (2011)` |

As larguras: os créditos ganham de 6 a 18 caracteres; quem mede a linha (≤ 1.520 px, quebra no "·") é o redator.

## O `NÃO CONFERIDO`

- **VT-212** (s42 P2), `Source: Queensland Museum · IBRA 7.1 (DCCEEW)`: o dono confere (F112, N005, lido pela Sala), mas o **ano** da página não
  se conhece, e a identidade §7 o pede. O site recusa robô: https://collections.qm.qld.gov.au/topics/136/eastern-brown-snake (403). A Sala lê
  a data no navegador do app, ou o crédito fica sem ano por exceção declarada (como a ficha da Austrália do Sul e o Bee Aware, que não têm
  data impressa).

## Os seis `corrigir` do pré, na tela (`fatos-tela-pre.laudo.md`)

| pré | onde | na tela | confere |
|---|---|---|---|
| P08 | s63 P2 | `ANIMAL-RELATED DEATHS, 2001–2021:` / `HORSES 222 · CATTLE 92 · DOGS 82` (VT-357), com `Source: National Coronial Information System` / `(NCIS), 2024 · CC BY 4.0` (VT-358) | sim |
| A01 | s07 e créditos do ABS | `2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY` (VT-024; e em VT-082, VT-241, VT-331) e `CC BY 4.0 · 2023 revised · 2024–2025 preliminary` nos créditos | sim |
| C01 | s25 P3 | `Source: Lee et al., 2016; Jackson et al., Toxins, 2016` (VT-128) sob `ELAPIDS · FRONT-FANGED SNAKES` | sim |
| C07 | s58 P3 | `Source: Nimorakiotakis & Winkel,` / `Australian Family Physician, 2004` (VT-322) e `Source: Wiener, MJA, 2003` (VT-321) | sim (o registro RD-26 ficou para trás) |
| C15 | s16 P3 | `≈ 12,000 HOSPITAL ADMISSIONS` / `FOR SPIDER BITES (2001–2013) · ONE STUDY`, `0 DEATHS (2000–2013)`, `Source: University of Melbourne (Pursuit), Jan. 17, 2017` (VT-078–080) | sim |
| P06 | registro | nenhum texto de tela diz "todas em acidente de veículo" | sim |

## O que a Sala pediu para olhar

- **`Kevin Arbuckle, to Live Science, 2023`** (VT-091 s19, VT-095 s20, VT-277 s51 P5, VT-388 s67): os quatro cobrem fala ou paráfrase dele.
  s19: as duas aspas (F037, F038, letra a letra, com a reticência no lugar de "yet" e do começo). s20 e s51 P5: os trópicos e a água-viva, a
  paráfrase de "Arbuckle emphasized that these creatures populate tropical and subtropical waters, not just those Down Under" (F039, F153).
  s67: "He wondered if…" e as aspas "scientific capital" e "excellent infrastructure" (F206, F207). Nenhum cobre o F053 (s25 credita Lee e
  Jackson) nem o F156 (s53 sem crédito).
- **As formas da voz:** `ALMOST 20 MILLION` (19.731.792, F115) e `HUNDREDS OF TIMES, PER PERSON` (347×, F128, com "DIFFERENT PERIODS AND
  METHODS") conferem. `3 OR 4 A YEAR` é a média (3,5, F127) e pede `ON AVERAGE` (VT-241, acima).
- **`97%` + `WHERE AN EXPERT IDENTIFIED THE SPIDER`** (s57): Isbister 2005, "A complete response to the antivenom was reported in 28 of 29
  patients (97%) with expertly identified funnel-web spider bites". Confere; a voz diz o que o 97 mede ("worked completely"), e a cartela de
  100 casas (E-06) com 97 cheias é a mesma razão.
- **`SINCE 1930`** (s47): ASP-20, "available in Australia from the Commonwealth Serum Laboratories since 1930" (F134); Winkel 2006, "began
  in Australia in 1930 with the tiger snake antivenom". Confere, com o crédito do ASP-20.
- **`1970` / `THE WORLD'S FIRST ANTIVENOM` / `FOR A JELLYFISH`** (s51 P6, VT-279): Winkel 2006 põe o de 1970 entre "the first marine
  antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish)". É o único de água-viva nessa lista dos primeiros soros marinhos:
  "o primeiro para uma água-viva" se deduz dela, e é a frase da voz (F154, confirmada). Confere; mais seguro, se a Sala quiser trocar sem
  custo: `AMONG THE WORLD'S FIRST MARINE ANTIVENOMS`.
- **O `(2023)` no cargo** (CARD-1, CARD-2, VT-088, VT-384): o cargo é o da Live Science de 26/11/2023; a identidade (o ano do cargo) pede o ano
  quando o cargo é datado. Confere. Volátil só no sentido de que hoje ele pode ter outro cargo: o "(2023)" já protege.
- **O crédito de s61** (VT-342): o que a cena diz vem do resumo do IMJ (Welton, Williams & Liew 2017, PMID 27749012: "Only 44% of cases
  involving anaphylaxis reached medical care prior to death"; "Causes of death were led by anaphylaxis") e da ANZCOR 9.4.3 ("anaphylaxis
  (severe allergic reaction)"), não da página da Pursuit. O dono confere; falta o ano da diretriz (`, 2021`).

## As folhas e as citações, letra a letra (`literais.mjs`)

- A nota (a) do ABS (VT-022, VT-030): igual, caractere a caractere, à célula A1956 do xlsx.
- O NCIS (VT-353): o "However…" igual; o "Thousands…" igual à página do site (sem o "(1)" do PDF), o que o pré permite. Os três grifos são
  trechos literais.
- A ficha da Austrália do Sul (VT-180, VT-181), Herzig (VT-292–294), o RAVE-II (VT-325–327), o título de 1979 (VT-167, VT-175, VT-390),
  Ainsworth (VT-177, VT-178), Arbuckle (VT-089, VT-090, VT-386, VT-387): achados nas cópias. O único cabeçalho que não é literal é o do
  RAVE-II (VT-324, `corrigir`).

## Os créditos de foto e de vídeo

- Os 36 créditos de foto casam, pelo sha256 do arquivo, com um veredito `aprovado` da própria cena em `conferencia-midia.json`
  (`72e9260b…`); autor e licença iguais ao `credito_na_tela` (antes do parêntese), nos dois formatos (`<autor> / Wikimedia Commons ·
  <licença>` e o compacto `<autor> (<licença>)` de s12 P2–P4 e s55 P3, decisão 3 da Sala). Três têm, além do `aprovado` atual, um veredito
  antigo `pendente_lucas` substituído (VT-072, VT-164, VT-315): vale o `aprovado`. Nenhum pede aviso do ano (AV-1).
- Os rótulos de lugar sobre registro (VT-214, VT-215, VT-217, VT-264, VT-270) não passam do `lugar_na_origem`.
- A linha do Shutterstock só em s74 (VT-433); nenhuma `<artista>/Shutterstock.com` nos 433 textos.

## Os voláteis (data-base de cada leitura)

- O ABS (lançamento de 27/10/2026; o xlsx lido em 19/11/2026): o 85, os 35 e 42, o 8 (6 + 2), o zero das aranhas (VT-075, VT-331), os 154,
  os 13, os 202 e 1.010, a estrada de 2025 e o 3,5 por ano. 2023 revisado, 2024–2025 provisórios. **Reler antes do render e antes de publicar.**
- O "NO CONFIRMED DEATH SINCE" do funnel-web e do redback (VT-311, VT-320): seguro hoje pelo NCIS (2001–2021, ficha de nov/2024) e pelo ABS
  (2016–2025). Zera com um achado de legista ou um X21 > 0.
- O Australian Reptile Park (nota de 13/01/2026): "about half", "≈ 150", "the only supplier", "no one has died" (VT-401–420). A data vai na tela.
- A ficha da OMS (17/09/2026; cópia de 18/11): os ≈ 58.000 (VT-239).
- The Reptile Database (busca de 18/11/2026): 150 de 229; 414 + 412 de 4.252.
- O cargo de Arbuckle (2023).

## A lista de nomes

Nenhum anônimo novo na tela: todo número tem dono no crédito, e os donos são os do pré (Nimorakiotakis e Winkel; Michael Lee; Jane Gardner e
Ronelle Welton; Currie e Jacups; Isbister e Gray; Turner; Müller) e do laudo da voz.

## Os dois padrões

1. **O crédito sem o ano que a fonte tem.** Oito créditos de instituição (Geoscience Australia, healthdirect, ANZCOR) saíram do dossiê sem
   o ano, onde a fonte o dá; os de artigo levam o ano todos.
2. **A palavra da voz sem a palavra que a qualifica.** "3 OR 4 A YEAR" é média; o "ON AVERAGE" que s46 recebeu no item 14 faltou aqui.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Nenhuma nova. (Regravar f124 e f199 continua a decisão de antes; a tela já tem o conserto dos dois.)

## A tabela de todos os ids

| id | cena | texto | veredito | linha / fonte | nota |
|---|---|---|---|---|---|
| VT-001 | s02 P1 | CHANNEL COUNTRY | confirmado | F079–F082, F100, F106; G002 | IBRA 7.1, região CHC |
| VT-002 | s02 P1 | MOST POTENT VENOM OF ANY LAND SNAKE | confirmado | F001 | SA Arid Lands: 'the most potent venom of any land snake on earth' |
| VT-003 | s02 P1 | Vertical exaggeration 1.5× | confirmado | regencia.json, s02 ('O relevo 3D (exagero 1,5)') | CONDICIONAL: vale só se o HTML de s02 usar exagero 1,5 (o qc-visual confere o valor gravado pelo mapista; outro valor, outro número) |
| VT-004 | s02 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-005 | s02 P1 | Source: Government of South Australia, / SA Arid Lands NRM Board · IBRA 7.1 (DCCEEW) | confirmado | F001, F002, F079–F087, F095; item 21 | a ficha não tem ano impresso (o 2009 é só metadado do PDF): sem ano, por decisão do redator (pauta-dados, item 21) |
| VT-006 | s03 P1 | Ramit Singal / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-007 | s04 P1 | INLAND TAIPAN / SNAKE | confirmado | F001, F065 | nome do bicho; sem número |
| VT-008 | s04 P1 | NOT THE KILLER | confirmado | F005, F122 | ASP-20: 17 marrom, 4 tigre, 2 desconhecidas; 0 inland taipan (jul/2005–jun/2015) |
| VT-009 | s04 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-010 | s04 P1 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-011 | s04 P1 | Source: Johnston et al., MJA, 2017 (ASP-20) | confirmado | F005, F119–F122, F131–F134, F145; pré C08 | Med J Aust 2017;207(3):119–125 |
| VT-012 | s05 P1 | ≈ 2 IN 3 | confirmado | F007 | 150/229 = 65,5 %; 'about two in three' = ≈ |
| VT-013 | s05 P1 | 150 OF 229 SNAKE SPECIES · ONE VENOMOUS FAMILY | confirmado | F007, F008, N003 | The Reptile Database, busca de 18/11/2026 (volátil) |
| VT-014 | s05 P1 | Alpha Point count: The Reptile Database, / searched Nov. 18, 2026 | confirmado | F008 | a contagem do canal com a data da busca |
| VT-015 | s06 P1 | Causes of Death, Australia, 2025 | confirmado | xlsx A3 ('Causes of Death, Australia, 2025') | o título da publicação |
| VT-016 | s06 P1 | Source: Australian Bureau of Statistics (ABS), / Causes of Death, Australia, 2025 · CC BY… | confirmado | pré A01; abs-2025_01.xlsx | o 1º crédito por extenso; a nota da revisão vai no rótulo ou no crédito seguinte do quadro |
| VT-017 | s07 P1 | 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 | confirmado | xlsx linha 4 | os anos de registro 2016–2025 |
| VT-018 | s07 P2 | Causes of Death, Australia, 2025 | confirmado | xlsx A3 | idem VT-015 |
| VT-019 | s07 P2 | 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 | confirmado | xlsx linha 4 | idem VT-017 |
| VT-020 | s07 P2 | Contact with venomous animals and plants (X20-X29) | confirmado | xlsx A1764 | letra a letra |
| VT-021 | s07 P2 | 4 10 19 6 9 6 6 8 11 6 | confirmado | xlsx linha 1764 (Persons); F011 | 4 10 19 6 9 6 6 8 11 6 |
| VT-022 | s07 P2 | (a) Causes of death data for recent years is preliminary and subject to a revisions proce… | confirmado | xlsx A1956 | a nota (a), letra a letra |
| VT-023 | s07 P2 | = 85 | confirmado | pré A02; F011 | 4+10+19+6+9+6+6+8+11+6 = 85; o lápis do canal fora do corpo da tabela, nunca 'Total' do ABS (a Table 1.2 não tem coluna de total) |
| VT-024 | s07 P2 | 2016–2025 · 2023 REVISED · 2024–2025 PRELIMINARY | confirmado | pré A01 (aplicado) | a forma certa do A01 |
| VT-025 | s07 P1 | Source: Australian Bureau of Statistics (ABS), / Causes of Death, Australia, 2025 · CC BY… | confirmado | pré A01; abs-2025_01.xlsx | o 1º crédito por extenso; a nota da revisão vai no rótulo ou no crédito seguinte do quadro |
| VT-026 | s08 P1 | Causes of Death, Australia, 2025 | confirmado | xlsx A3 | idem VT-015 |
| VT-027 | s08 P1 | 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 | confirmado | xlsx linha 4 |  |
| VT-028 | s08 P1 | Contact with venomous animals and plants (X20-X29) | confirmado | xlsx A1764 |  |
| VT-029 | s08 P1 | 4 10 19 6 9 6 6 8 11 6 | confirmado | xlsx linha 1764 |  |
| VT-030 | s08 P1 | (a) Causes of death data for recent years is preliminary and subject to a revisions proce… | confirmado | xlsx A1956 | a nota (a), letra a letra |
| VT-031 | s08 P1 | = 85 | confirmado | pré A02 | idem VT-023 |
| VT-032 | s08 P1 | thebeachcomber / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-033 | s08 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-034 | s09 P2 | ROADS · AN AVERAGE MONTH OF 2025 | confirmado | F014 | ABS Table 15.4, estradas 2025 (preliminar) |
| VT-035 | s09 P2 | ≈ 106 | confirmado | F014 | 1.276 ÷ 12 = 106,3 |
| VT-036 | s09 P2 | VENOM · 2016–2025 | confirmado | F011 |  |
| VT-037 | s09 P2 | 85 | confirmado | F011 |  |
| VT-038 | s09 P2 | Alpha Point calculation: ABS, Causes of Death, / Australia, 2025 (CC BY 4.0) / 2023 revis… | confirmado | F014; pré A01 | a conta do canal com a nota da revisão |
| VT-039 | s10 P1 | How does a country with / so many venomous snakes / end up with so few deaths? | confirmado | F015 (pressupõe F007 e F011) | a pergunta pressupõe 'so many venomous snakes' (150 de 229) e 'so few deaths' (85 em dez anos): ambos confirmados |
| VT-040 | s12 P1 | Björn Söderlund, Sw3dPix / Wikimedia Commons / CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-041 | s12 P1 | John Tann from Sydney, Australia (CC BY 2.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-042 | s12 P2 | Ian Sutton from Oberon, Australia (CC BY 2.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-043 | s12 P2 | Björn Söderlund, Sw3dPix (CC BY-SA 4.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-044 | s13 P1 | Causes of Death, Australia, 2025 | confirmado | xlsx A3 |  |
| VT-045 | s13 P1 | COUNTED | confirmado | F017 | 'That part has been counted.' |
| VT-046 | s13 P2 | A CAUSE | confirmado | F018 | 'filed under a cause' |
| VT-047 | s13 P2 | AUSTRALIAN BUREAU OF STATISTICS | confirmado | F018; G023 | o nome do órgão |
| VT-048 | s13 P1 | Source: Australian Bureau of Statistics (ABS), / Causes of Death, Australia, 2025 · CC BY… | confirmado | pré A01; abs-2025_01.xlsx | o 1º crédito por extenso; a nota da revisão vai no rótulo ou no crédito seguinte do quadro |
| VT-049 | s14 P1 | 2016–2025 | confirmado | F011 | o período |
| VT-050 | s14 P1 | VENOMOUS SNAKES | confirmado | F019 | X20 é 'venomous snakes and lizards'; a voz diz 'venomous snakes' (o laudo da voz aceitou) |
| VT-051 | s14 P1 | 35 | confirmado | F019 |  |
| VT-052 | s14 P1 | BEES & WASPS | confirmado | F020 | X23 'hornets, wasps and bees' |
| VT-053 | s14 P1 | 42 | confirmado | F020 |  |
| VT-054 | s14 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-055 | s15 P1 | OTHERS: 8 | confirmado | F021 | 85 − 35 − 42 = 8 |
| VT-056 | s15 P1 | 6 · OTHER VENOMOUS ARTHROPODS (X25) | confirmado | F022, F023 | X25 = 6 |
| VT-057 | s15 P3 | 6 · OTHER VENOMOUS ARTHROPODS (X25) | confirmado | F022, F023 |  |
| VT-058 | s15 P3 | 2 · VENOMOUS MARINE ANIMALS (X26) | confirmado | F024, F025 | X26 = 2 |
| VT-059 | s15 P6 | 6 · OTHER VENOMOUS ARTHROPODS (X25) | confirmado | F022, F023 |  |
| VT-060 | s15 P6 | 2 · VENOMOUS MARINE ANIMALS (X26) | confirmado | F024, F025 |  |
| VT-061 | s15 P4 | JELLYFISH, CORAL, / SEA ANEMONES | confirmado | F024 | CID-10: X26 'Incl.: coral, jellyfish, nematocysts, sea: anemone…' (a lista da tela é parcial, como a voz) |
| VT-062 | s15 P4 | 2 · VENOMOUS MARINE ANIMALS (X26) | confirmado | F024, F025 |  |
| VT-063 | s15 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-064 | s15 P1 | Codes: WHO, ICD-10 (2019) | confirmado | F022, F024; dossiê ('só o rótulo do código') | a CID-10 de 2019, só os códigos |
| VT-065 | s15 P3 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-066 | s15 P3 | Codes: WHO, ICD-10 (2019) | confirmado | F022, F024; dossiê ('só o rótulo do código') | a CID-10 de 2019, só os códigos |
| VT-067 | s15 P6 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-068 | s15 P6 | Codes: WHO, ICD-10 (2019) | confirmado | F022, F024; dossiê ('só o rótulo do código') | a CID-10 de 2019, só os códigos |
| VT-069 | s15 P4 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-070 | s15 P4 | Codes: WHO, ICD-10 (2019) | confirmado | F022, F024; dossiê ('só o rótulo do código') | a CID-10 de 2019, só os códigos |
| VT-071 | s15 P2 | Sylvain Dubey / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-072 | s15 P2 | CSIRO / Wikimedia Commons · CC BY 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-073 | s16 P1 | 2016 2017 2018 2019 2020 2021 2022 2023 2024 2025 | confirmado | xlsx linha 4 |  |
| VT-074 | s16 P1 | Contact with venomous spiders (X21) | confirmado | xlsx A1766 | letra a letra |
| VT-075 | s16 P1 | 0 0 0 0 0 0 0 0 0 0 | confirmado | xlsx linha 1766; F013, F027 | 0 nos dez anos |
| VT-076 | s16 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-077 | s16 P1 | John Tann from Sydney, Australia / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-078 | s16 P3 | ≈ 12,000 HOSPITAL ADMISSIONS / FOR SPIDER BITES (2001–2013) · ONE STUDY | confirmado | pré C15 (aplicado); F029, F030 | Pursuit: 'Hospitalisations (2001-2013) … Spiders … 11,994' |
| VT-079 | s16 P3 | 0 DEATHS (2000–2013) | confirmado | pré C16; F031 | Pursuit: 'Deaths (2000-2013) … Spiders 0' |
| VT-080 | s16 P3 | Source: University of Melbourne (Pursuit), Jan. 17, 2017 | confirmado | pré C15 (aplicado) | Jane Gardner, University of Melbourne, 17/01/2017 |
| VT-081 | s17 P2 | ≈ 1 IN 3 MILLION | confirmado | F032 | 85 ÷ 257.890.800 pessoas-ano = 1 em 3,03 milhões por ano |
| VT-082 | s17 P2 | A YEAR · 2016–2025 / 2023 REVISED · 2024–2025 PRELIMINARY | confirmado | F032; pré A01 |  |
| VT-083 | s17 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-084 | s17 P1 | ABS Census 2021 (CC BY 4.0) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-085 | s17 P2 | Alpha Point calculation: ABS, Causes of Death, Australia, / 2025, ABS population and Cens… | confirmado | F032, F033 | a conta do canal (ERP 310101 e Censo) |
| VT-086 | s18 P1 | JJ Harrison / Wikimedia Commons · CC BY 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-087 | s19 P1 | KEVIN ARBUCKLE | confirmado | F036; card | Live Science, 26/11/2023 |
| VT-088 | s19 P1 | Associate professor of evolutionary bioscience, / Swansea University (2023) | confirmado | F036; identidade (o ano do cargo) | 'an associate professor of evolutionary bioscience at Swansea University in the U.K.'; (2023) porque o cargo é datado |
| VT-089 | s19 P2 | "…for the most part this is overstated." | confirmado | F037 | '…yet for the most part this is overstated.' (a reticência tira o 'yet') |
| VT-090 | s19 P3 | "…not unusual at all for a largely tropical area." | confirmado | F038 | 'Its venomous animal diversity is not unusual at all for a largely tropical area,' |
| VT-091 | s19 P2 | Kevin Arbuckle, to Live Science, 2023 | confirmado | F036–F039, F042, F153, F206, F207; pré C02 | cobre fala ou paráfrase do próprio Arbuckle na Live Science (26/11/2023) |
| VT-092 | s20 P1 | Tropic of Cancer | confirmado | G018 | linha geográfica |
| VT-093 | s20 P1 | Tropic of Capricorn | confirmado | G019 | linha geográfica |
| VT-094 | s20 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-095 | s20 P1 | Kevin Arbuckle, to Live Science, 2023 | confirmado | F036–F039, F042, F153, F206, F207; pré C02 | cobre fala ou paráfrase do próprio Arbuckle na Live Science (26/11/2023) |
| VT-096 | s21 P1 | Jurie.vw / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-097 | s21 P2 | Oliver Neuman / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-098 | s22 P1 | AUSTRALIA | confirmado | G001 |  |
| VT-099 | s22 P1 | TODAY | nada a checar | — | a ponta da régua do tempo |
| VT-100 | s22 P2 | ANTARCTICA | confirmado | F043, F044 |  |
| VT-101 | s22 P2 | 85–80 MILLION YEARS AGO | confirmado | F043, F044 | GA, AusGeo News 104 (2011): 'some 85 to 80 Ma' |
| VT-102 | s22 P4 | 85–80 MILLION YEARS AGO | confirmado | F044 |  |
| VT-103 | s22 P3 | GONDWANA | confirmado | F045 |  |
| VT-104 | s22 P4 | ≈ 45 MILLION YEARS AGO | confirmado | F046, F047 | Hall 2013: 'at about 45 Ma Australia began to move north' |
| VT-105 | s22 P6 | ≈ 45 MILLION YEARS AGO | confirmado | F047 |  |
| VT-106 | s22 P7 | SOUTHEAST ASIA | confirmado | G012 |  |
| VT-107 | s22 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-108 | s22 P1 | Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) | confirmado | pré C19 | o registro do Zenodo 13636799 (v1.2.4, CC BY 4.0, Solid Earth 13, 1127–1159) |
| VT-109 | s22 P2 | Source: Geoscience Australia | corrigir | F044, F045 (fonte: Geoscience Australia, AusGeo News 104, dez. 2011) | → Source: Geoscience Australia, 2011 · identidade §7: 'Source: <instituição>, <ano>'; a fonte tem ano |
| VT-110 | s22 P4 | Source: Hall, Journal of Limnology, 2013 | confirmado | F046, F047, F057, F070 | Hall 2013 |
| VT-111 | s25 P1 | SOUTHEAST ASIA | confirmado | G012 |  |
| VT-112 | s25 P1 | TODAY | nada a checar | — | a régua |
| VT-113 | s25 P1 | 85–80 MILLION YEARS AGO · ≈ 45 MILLION YEARS AGO | confirmado | F044, F047 |  |
| VT-114 | s25 P3 | TODAY | nada a checar | — |  |
| VT-115 | s25 P3 | 85–80 MILLION YEARS AGO · ≈ 45 MILLION YEARS AGO | confirmado | F044, F047 |  |
| VT-116 | s25 P3 | ELAPIDS · FRONT-FANGED SNAKES | confirmado | F052, F053, F059; pré C01 | 'front-fanged' coberto por Jackson et al. no crédito (VT-128) |
| VT-117 | s25 P3 | 30–25 MILLION YEARS AGO · MOLECULAR ESTIMATE | confirmado | F055, F056 | Lee 2016: 'between 30 and 25 Ma' |
| VT-118 | s25 P4 | AUSTRALIA MEETS ASIA | confirmado | F057, F070 | sem número; Hall 2013 |
| VT-119 | s25 P8 | NO VIPERS | confirmado | F060 | Jackson 2016: 'viperid snakes are absent' |
| VT-120 | s25 P10 | INLAND TAIPAN | confirmado | F065, F082 |  |
| VT-121 | s25 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-122 | s25 P3 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-123 | s25 P8 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-124 | s25 P1 | Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) | confirmado | pré C19 | o registro do Zenodo 13636799 (v1.2.4, CC BY 4.0, Solid Earth 13, 1127–1159) |
| VT-125 | s25 P3 | Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) | confirmado | pré C19 | o registro do Zenodo 13636799 (v1.2.4, CC BY 4.0, Solid Earth 13, 1127–1159) |
| VT-126 | s25 P1 | Source: Hall, Journal of Limnology, 2013 | confirmado | F046, F047, F057, F070 | Hall 2013 |
| VT-127 | s25 P1 | Source: Lee et al., Royal Society Open Science, 2016 | confirmado | F052, F054 | R. Soc. Open Sci. 2016;3:150277 |
| VT-128 | s25 P3 | Source: Lee et al., 2016; Jackson et al., Toxins, 2016 | confirmado | pré C01 (aplicado) | Lee (elapídeos) + Jackson ('front-fanged') |
| VT-129 | s25 P4 | Source: Lee et al., 2016; Hall, Journal of Limnology, 2013 | confirmado | F055, F057, F070 |  |
| VT-130 | s25 P5 | Source: Jackson et al., Toxins, 2016; Lee et al., 2016 | confirmado | F059–F062 |  |
| VT-131 | s25 P8 | Source: Jackson et al., Toxins, 2016; Lee et al., 2016 | confirmado | F060 |  |
| VT-132 | s25 P10 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-133 | s25 P1 | Jayendra Chiplunkar / Wikimedia Commons / CC BY-SA 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-134 | s25 P7 | Peter Paplanus / Wikimedia Commons · CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-135 | s28 P1 | ELAPIDS | confirmado | F052; G118 |  |
| VT-136 | s28 P2 | WORLD: 414 ELAPIDS + 412 VIPERS / = 826 OF 4,252 SNAKE SPECIES (≈ 1 IN 5) | confirmado | F067, F068, N002 | 826/4.252 = 19,4 % (≈ 1 em 5); busca de 18/11/2026 (volátil) |
| VT-137 | s28 P3 | AUSTRALIA: 150 OF 229 SNAKE SPECIES ARE ELAPIDS | confirmado | N003, F007 | 150 de 229 |
| VT-138 | s28 P3 | 0 VIPERS | confirmado | F069 | 0 víboras na Austrália |
| VT-139 | s28 P1 | Alpha Point count: The Reptile Database, / searched Nov. 18, 2026 | confirmado | F008 |  |
| VT-140 | s28 P3 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-141 | s28 P4 | AUSTRALIA MEETS ASIA | confirmado | F070 |  |
| VT-142 | s28 P4 | ≈ 23 MILLION YEARS AGO | confirmado | F070 | Hall 2013: 'about 23 million years ago' |
| VT-143 | s28 P4 | TODAY | nada a checar | — |  |
| VT-144 | s28 P4 | Plate model: Müller et al., Solid Earth, 2022 (CC BY 4.0) | confirmado | pré C19 | o registro do Zenodo 13636799 (v1.2.4, CC BY 4.0, Solid Earth 13, 1127–1159) |
| VT-145 | s28 P4 | Source: Hall, Journal of Limnology, 2013 | confirmado | F070 |  |
| VT-146 | s28 P5 | Source: Rowe et al., Journal of Biogeography, 2019; / Skeels et al., Science, 2023 | confirmado | F071–F073, F085 |  |
| VT-147 | s30 P2 | Diego Delso / Wikimedia Commons · CC BY 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-148 | s31 P1 | NO VIPERS | confirmado | F060 |  |
| VT-149 | s31 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-150 | s31 P1 | Source: Jackson et al., Toxins, 2016; Lee et al., 2016 | confirmado | F060, F075 |  |
| VT-151 | s31 P2 | TODAY | nada a checar | — | a régua |
| VT-152 | s31 P2 | ≈ 15 MILLION YEARS AGO | confirmado | F077, F078 | Byrne 2008: 'around 15 million years' |
| VT-153 | s31 P2 | THE PAST FEW MILLION YEARS | confirmado | F077, F078 | os desertos plenos de 1 a 4 milhões de anos |
| VT-154 | s31 P2 | Source: Byrne et al., Molecular Ecology, 2008 | confirmado | F077, F078 | Mol. Ecol. 2008 |
| VT-155 | s31 P3 | Diamantina River | confirmado | F079, F080; G003 |  |
| VT-156 | s31 P3 | Cooper Creek | confirmado | F079, F080; G004 |  |
| VT-157 | s31 P5 | CHANNEL COUNTRY | confirmado | F106; G002 |  |
| VT-158 | s31 P5 | INLAND TAIPAN | confirmado | F082 |  |
| VT-159 | s31 P5 | Source: Government of South Australia, / SA Arid Lands NRM Board · IBRA 7.1 (DCCEEW) | confirmado | F001, F002, F079–F087, F095; item 21 | a ficha não tem ano impresso (o 2009 é só metadado do PDF): sem ano, por decisão do redator (pauta-dados, item 21) |
| VT-160 | s34 P1 | Source: Government of South Australia, / SA Arid Lands NRM Board | confirmado | F001, F002, F079–F087, F095; item 21 | a ficha não tem ano impresso (o 2009 é só metadado do PDF): sem ano, por decisão do redator (pauta-dados, item 21) |
| VT-161 | s34 P2 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-162 | s34 P2 | Source: Rowe et al., Journal of Biogeography, 2019 | confirmado | F085 | J. Biogeogr. 2019 |
| VT-163 | s34 P2 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-164 | s35 P2 | CSIRO / Wikimedia Commons · CC BY 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-165 | s36 P1 | Toxicon. 1979;17(6):661–664. | confirmado | F090; Europe PMC 524395 (vol 17, nº 6, 661–664) | a citação da folha recriada |
| VT-166 | s36 P1 | Broad AJ, Sutherland SK, Coulter AR. | confirmado | Europe PMC 524395 | 'Broad AJ, Sutherland SK, Coulter AR.' |
| VT-167 | s36 P1 | The lethality in mice of dangerous Australian and other snake venom | confirmado | Europe PMC 524395 | o título, letra a letra (sem o ponto final) |
| VT-168 | s36 P1 | LAB MICE · 1979 | confirmado | F003, F090 |  |
| VT-169 | s36 P2 | THE DOSE THAT KILLS HALF THE MICE IN A TEST | confirmado | F091 | LD50 = a dose que mata metade |
| VT-170 | s36 P2 | LD50 | confirmado | F091; G111 |  |
| VT-171 | s36 P1 | Source: Broad, Sutherland & Coulter, Toxicon, 1979 | confirmado | F003, F090 | Toxicon 1979;17(6):661–664 (PMID 524395) |
| VT-172 | s36 P3 | Ramit Singal / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-173 | s37 P1 | Toxicon. 1979;17(6):661–664. | confirmado | idem VT-165 |  |
| VT-174 | s37 P1 | Broad AJ, Sutherland SK, Coulter AR. | confirmado | idem VT-166 |  |
| VT-175 | s37 P1 | The lethality in mice of dangerous Australian and other snake venom | confirmado | idem VT-167 |  |
| VT-176 | s37 P1 | LAB MICE · 1979 | confirmado | F090 |  |
| VT-177 | s37 P2 | The mouse lethality assays … have been criticised | confirmado | F093; Ainsworth 2026, Box (a__ainsworth2026-fulltext.xml.txt) | 'The mouse lethality assays (median lethal dose and median effective dose) have been criticised…': a reticência tira o parêntese; 'criticised' é a grafia da fo… |
| VT-178 | s37 P2 | do not reflect the actual circumstances of snakebite envenoming | confirmado | F093 | '…and do not reflect the actual circumstances of snakebite envenoming' |
| VT-179 | s37 P4 | INLAND TAIPAN / Oxyuranus microlepidotus / Student FACT SHEET / South Australian Arid Lan… | confirmado | F095; a ficha (a__sa-inland-taipan.pdf.txt) | 'INLAND TAIPAN Oxyuranus microlepidotus', 'Student FACT SHEET' e o nome do Board estão na ficha (o cabeçalho recriado junta p. 1 e p. 2) |
| VT-180 | s37 P4 | The Inland Taipan has the most potent venom of any land snake on earth, but fortunately i… | confirmado | F001, F095 | letra a letra |
| VT-181 | s37 P4 | usually quite shy | confirmado | F095 |  |
| VT-182 | s37 P1 | Source: Broad, Sutherland & Coulter, Toxicon, 1979 | confirmado | F003, F090 | Toxicon 1979;17(6):661–664 (PMID 524395) |
| VT-183 | s37 P2 | Source: Ainsworth et al., / PLOS Neglected Tropical Diseases, 2026 (CC BY 4.0) | confirmado | veredito aprovado de s37 (ainsworth-2026-plosntd-p17.jpg) | 'Source: Ainsworth et al., PLOS Neglected Tropical Diseases, 2026 · CC BY 4.0' |
| VT-184 | s37 P3 | Source: Government of South Australia, / SA Arid Lands NRM Board | confirmado | F001, F002, F079–F087, F095; item 21 | a ficha não tem ano impresso (o 2009 é só metadado do PDF): sem ano, por decisão do redator (pauta-dados, item 21) |
| VT-185 | s38 P1 | XLerate / Wikimedia Commons · CC BY-SA 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-186 | s38 P2 | ≈ 12 DOCUMENTED CASES · BY 2017 | confirmado | F097, F098 | Weinstein 2017: 11 bem documentados + o caso = 12 (≈ a dozen) |
| VT-187 | s38 P2 | 3 IN THE WILD | confirmado | F099 | 2 + 1 = 3 |
| VT-188 | s38 P2 | Source: Weinstein et al., Toxicon, 2017 | confirmado | F097 | Toxicon 2017;137 |
| VT-189 | s39 P1 | CHANNEL COUNTRY | confirmado | F100; G002 |  |
| VT-190 | s39 P1 | ≈ 117,000 SQ MI | confirmado | F100 | 304.094 km² = 117.411 mi² |
| VT-191 | s39 P2 | ≈ 1,000 PEOPLE (2021 CENSUS) | confirmado | F101 | 1.020 no Censo 2021 |
| VT-192 | s39 P3 | ≈ 1 PERSON PER 100 SQ MI | confirmado | F102 | ≈ 1 por 115 mi² |
| VT-193 | s39 P4 | INLAND TAIPAN | confirmado | F082 |  |
| VT-194 | s39 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-195 | s39 P1 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-196 | s39 P1 | Alpha Point calculation: ABS, Census 2021 / mesh block counts · IBRA 7.1 (DCCEEW) | confirmado | F100–F102 | a conta do canal |
| VT-197 | s39 P4 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-198 | s41 P1 | BROWN SNAKES | confirmado | F107, F109; G116 |  |
| VT-199 | s41 P2 | BROWN SNAKES | confirmado | F109 |  |
| VT-200 | s41 P2 | TAIPANS | confirmado | F109; G117 |  |
| VT-201 | s41 P1 | Greg Tasney / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-202 | s41 P2 | Source: Jackson et al., Toxins, 2016 | confirmado | F107–F109 |  |
| VT-203 | s42 P1 | INLAND TAIPAN | confirmado | F082 |  |
| VT-204 | s42 P1 | BROWN SNAKE | confirmado | F107 |  |
| VT-205 | s42 P1 | EASTERN BROWN SNAKE | confirmado | F111; G115 |  |
| VT-206 | s42 P2 | FOUND OVER MOST OF QUEENSLAND, / NEW SOUTH WALES AND VICTORIA | confirmado | F112, N005 (leitura da Sala, 18/11) | 'Found over most of Queensland, New South Wales and Victoria' (QM) |
| VT-207 | s42 P2 | QUEENSLAND | confirmado | F112; G005 |  |
| VT-208 | s42 P2 | NEW SOUTH WALES | confirmado | F112; G006 |  |
| VT-209 | s42 P2 | VICTORIA | confirmado | F112; G007 |  |
| VT-210 | s42 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-211 | s42 P1 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-212 | s42 P2 | Source: Queensland Museum · IBRA 7.1 (DCCEEW) | NÃO CONFERIDO | F112, N005 | o dono confere; o ANO da página do Queensland Museum não se conhece (o site recusou robô: https://collections.qm.qld.gov.au/topics/136/eastern-brown-snake, 403… |
| VT-213 | s42 P2 | Boundaries: ABS, ASGS 2021 (CC BY 4.0) | confirmado | dossiê; pauta-geo | ASGS 2021, CC BY 4.0 |
| VT-214 | s42 P3 | New South Wales | confirmado | veredito aprovado s42 (shutterstock_4053202953): 'uma paisagem rural em Nova Gales do Sul' | não mais específico que a origem |
| VT-215 | s42 P3 | Queensland | confirmado | veredito aprovado s42 (Oxley Creek, Rocklea, Queensland) | o estado, menos específico que a origem |
| VT-216 | s42 P3 | Kgbo / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-217 | s42 P4 | Mornington Peninsula, Victoria | confirmado | veredito aprovado s42 P5: 'Mornington Peninsula Suburban Bushland' | Victoria é o lugar maior |
| VT-218 | s43 P1 | QUEENSLAND | confirmado | F115 |  |
| VT-219 | s43 P1 | NEW SOUTH WALES | confirmado | F115 |  |
| VT-220 | s43 P1 | VICTORIA | confirmado | F115 |  |
| VT-221 | s43 P1 | ALMOST 20 MILLION PEOPLE · 2021 CENSUS | confirmado | F115 | 19.731.792 = almost 20 million |
| VT-222 | s43 P2 | ALMOST 20 MILLION PEOPLE · 2021 CENSUS | confirmado | F115 |  |
| VT-223 | s43 P2 | CHANNEL COUNTRY | confirmado | F106 |  |
| VT-224 | s43 P2 | THE THREE STATES | confirmado | F115, F116 |  |
| VT-225 | s43 P2 | MORE THAN 1,000× PER SQ MI | confirmado | F116 | no mínimo 1.256× por milha quadrada |
| VT-226 | s43 P3 | INLAND TAIPAN | confirmado | F082 |  |
| VT-227 | s43 P3 | EASTERN BROWN SNAKE | confirmado | F111 |  |
| VT-228 | s43 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-229 | s43 P1 | ABS Census 2021 and ASGS 2021 (CC BY 4.0) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-230 | s43 P1 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-231 | s43 P2 | Alpha Point calculation · IBRA 7.1 (DCCEEW) | confirmado | F116 |  |
| VT-232 | s43 P3 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-233 | s44 P1 | 23 DEATHS · JULY 2005–JUNE 2015 | confirmado | F119, F120 | 23 mortes, jul/2005–jun/2015 |
| VT-234 | s44 P1 | 17 BROWN SNAKES | confirmado | F121 |  |
| VT-235 | s44 P1 | 0 INLAND TAIPAN | confirmado | F122 |  |
| VT-236 | s44 P1 | Source: Johnston et al., MJA, 2017 (ASP-20) | confirmado | F005, F119–F122, F131–F134, F145; pré C08 | Med J Aust 2017;207(3):119–125 |
| VT-237 | s44 P2 | Calistemon / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-238 | s45 P1 | INDIA | confirmado | F125; G015 |  |
| VT-239 | s45 P1 | ≈ 58,000 SNAKEBITE DEATHS A YEAR · 2000–2019 | confirmado | F125, F126 | OMS (17/09/2026): '1.2 million … between 2000–2019 (average of 58 000/year)'. Recomendado, não obrigatório: 'ON AVERAGE', como em VT-241 |
| VT-240 | s45 P2 | AUSTRALIA | confirmado | G001 |  |
| VT-241 | s45 P2 | 3 OR 4 A YEAR · 2016–2025 / 2023 REVISED · 2024–2025 PRELIMINARY | corrigir | F127 | → 3 OR 4 A YEAR ON AVERAGE · 2016–2025 / 2023 REVISED · 2024–2025 PRELIMINARY · a média é 3,5 (35 ÷ 10), mas os anos foram 2, 2, 9, 1, 6, 2, 3, 2, 5, 3: em 8 d… |
| VT-242 | s45 P2 | HUNDREDS OF TIMES, PER PERSON / DIFFERENT PERIODS AND METHODS | confirmado | F128 | 347× por pessoa (conta do canal); 'DIFFERENT PERIODS AND METHODS' é o aviso honesto |
| VT-243 | s45 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-244 | s45 P1 | Source: WHO, citing Suraweera et al., eLife, 2020 | confirmado | F125, F126 | a ficha da OMS cita Suraweera et al. (eLife 2020) |
| VT-245 | s45 P2 | Source: WHO, citing Suraweera et al., eLife, 2020; / ABS, Causes of Death, Australia, 202… | confirmado | F125–F127; pré A01 |  |
| VT-246 | s45 P2 | Alpha Point calculation: WHO; Suraweera et al., 2020; / ABS, Causes of Death, Australia, … | confirmado | F128 | a conta do canal (OMS, Suraweera, ABS, World Bank) |
| VT-247 | s46 P2 | John Tann from Sydney, Australia / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-248 | s46 P3 | FEWER THAN 100 BITES A YEAR / THAT INJECTED VENOM, ON AVERAGE / JULY 2005–JUNE 2015 | confirmado | pré C08 (aplicado); F132 | 835 em 10 anos = 83,5; mediana 87; 'ON AVERAGE' presente |
| VT-249 | s46 P3 | Source: Johnston et al., MJA, 2017 (ASP-20) | confirmado | F005, F119–F122, F131–F134, F145; pré C08 | Med J Aust 2017;207(3):119–125 |
| VT-250 | s47 P1 | SINCE 1930 | confirmado | F134 | ASP-20: 'available in Australia from the Commonwealth Serum Laboratories since 1930'; Winkel 2006: 'began in Australia in 1930' |
| VT-251 | s47 P1 | Source: Johnston et al., MJA, 2017 (ASP-20) | confirmado | F005, F119–F122, F131–F134, F145; pré C08 | Med J Aust 2017;207(3):119–125 |
| VT-252 | s47 P1 | Source: healthdirect Australia | corrigir | F135 (healthdirect, 'Last reviewed: October 2024') | → Source: healthdirect Australia, 2024 · identidade §7: o crédito leva o ano da fonte |
| VT-253 | s48 P1 | AUSTRALIA'S FIRST AID FOR SNAKEBITE | confirmado | F138, N007 | ANZCOR 9.4.1 'First Aid Management of Australian Snake Bite' |
| VT-254 | s48 P3 | NOT A TREATMENT | confirmado | F141, F142 | 9.4.8: a bandagem 'retards the flow of lymph'; é primeiro-socorro, não tratamento |
| VT-255 | s48 P1 | Source: ANZCOR Guidelines 9.4.1 and 9.4.8 | corrigir | N007, N008, F138, F139 (9.4.1 'Approved: April 2021'; 9.4.8 'Approved: 2011') | → Source: ANZCOR Guidelines 9.4.1 (2021) and 9.4.8 (2011) · identidade §7: o ano da fonte |
| VT-256 | s48 P2 | Source: healthdirect Australia | corrigir | F135 | → Source: healthdirect Australia, 2024 · idem VT-252 |
| VT-257 | s48 P3 | Source: ANZCOR Guidelines 9.4.1 and 9.4.8 | corrigir | idem VT-255 | → Source: ANZCOR Guidelines 9.4.1 (2021) and 9.4.8 (2011) · idem VT-255 |
| VT-258 | s49 P1 | NO FIELD COMPARISON OF THE BANDAGE | confirmado | F144 | 9.4.8: 'no field based direct comparisons' |
| VT-259 | s49 P2 | NO CONTROLLED ANTIVENOM TRIAL PUBLISHED · AS OF 2017 | confirmado | F145 | ASP-20 (2017): 'No controlled clinical trials … have been published' |
| VT-260 | s49 P1 | Source: ANZCOR Guideline 9.4.8 | corrigir | F144 (9.4.8, 'Approved: 2011') | → Source: ANZCOR Guideline 9.4.8, 2011 · idem |
| VT-261 | s49 P2 | Source: Johnston et al., MJA, 2017 (ASP-20) | confirmado | F145 |  |
| VT-262 | s50 P1 | Tropic of Capricorn | confirmado | G019 |  |
| VT-263 | s50 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-264 | s51 P1 | Port Douglas, Queensland | confirmado | veredito aprovado s51 P1 (clipe: 'Jellyfish warning sign in Port Douglas, Australia'; fot… | não mais específico que a origem |
| VT-265 | s51 P1 | Kgbo / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-266 | s51 P2 | Tropic of Capricorn | confirmado | G019 |  |
| VT-267 | s51 P2 | ≈ 70 DEATHS · AS OF 2005 | confirmado | F151, N009 | 'around 70', dado em 2005 |
| VT-268 | s51 P2 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-269 | s51 P2 | Source: Currie & Jacups, MJA, 2005 | confirmado | F150, F151, N009; pré C12 | Med J Aust 2005;183(11):631–636 |
| VT-270 | s51 P3 | Daintree River, Queensland | confirmado | veredito aprovado s51 P4: 'ao longo do rio Daintree … Queensland' |  |
| VT-271 | s51 P4 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-272 | s51 P4 | STINGER SEASON | confirmado | F150, F152 |  |
| VT-273 | s51 P4 | OCT. 1–JUNE 1 | confirmado | F150 | '1 October to 1 June' |
| VT-274 | s51 P4 | Source: Currie & Jacups, MJA, 2005 | confirmado | F150, F151, N009; pré C12 | Med J Aust 2005;183(11):631–636 |
| VT-275 | s51 P5 | Tropic of Cancer | confirmado | G018 |  |
| VT-276 | s51 P5 | Tropic of Capricorn | confirmado | G019 |  |
| VT-277 | s51 P5 | Kevin Arbuckle, to Live Science, 2023 | confirmado | F036–F039, F042, F153, F206, F207; pré C02 | cobre fala ou paráfrase do próprio Arbuckle na Live Science (26/11/2023) |
| VT-278 | s51 P6 | 1930 | confirmado | F134; pré S10 |  |
| VT-279 | s51 P6 | 1970 / THE WORLD'S FIRST ANTIVENOM / FOR A JELLYFISH | confirmado | F154; pré S11 | Winkel 2006: 'the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish)'. É o único de água-viva entre os primeiros soros marin… |
| VT-280 | s51 P6 | Source: Winkel et al., Toxicon, 2006 | confirmado | F154; pré S01–S11 | Winkel, Mirtschin & Pearn, Toxicon 2006;48(7):738–754 |
| VT-281 | s53 P1 | Sydney | confirmado | F156; G009 | sem crédito, como o item 3 permite |
| VT-282 | s53 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-283 | s54 P1 | TODAY | nada a checar | — |  |
| VT-284 | s54 P1 | 85–80 MILLION YEARS AGO | confirmado | F159 |  |
| VT-285 | s54 P1 | 150–200 MILLION YEARS AGO | confirmado | F158 | Herzig 2020: '150 to 200 million y ago' |
| VT-286 | s54 P1 | Source: Herzig et al., PNAS, 2020; Geoscience Australia | corrigir | F158, F159 (GA: AusGeo News 104, dez. 2011) | → Source: Herzig et al., PNAS, 2020; Geoscience Australia, 2011 · identidade §7: o ano da fonte |
| VT-287 | s55 P1 | Thomas Mesaglio / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-288 | s55 P3 | JJ Harrison (CC BY-SA 3.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-289 | s55 P3 | Andrew Mercer (CC BY-SA 4.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-290 | s55 P3 | John Tann from Sydney, Australia (CC BY 2.0) | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-291 | s55 P4 | PNAS · 2020 · Herzig et al. | confirmado | F163 | PNAS 2020 |
| VT-292 | s55 P4 | …with their lethal effects on humans being an unfortunate evolutionary coincidence. | confirmado | F163 | letra a letra (o resumo) |
| VT-293 | s55 P4 | lethal effects on humans | confirmado | F163 |  |
| VT-294 | s55 P4 | an unfortunate evolutionary coincidence | confirmado | F163 |  |
| VT-295 | s55 P3 | Source: Herzig et al., PNAS, 2020 | confirmado | F158–F165 | PNAS 2020;117:24920–24928 |
| VT-296 | s55 P5 | INSENSITIVE | confirmado | F164 | 'dogs and cats are insensitive' |
| VT-297 | s55 P5 | Source: Herzig et al., PNAS, 2020 | confirmado | F158–F165 | PNAS 2020;117:24920–24928 |
| VT-298 | s56 P1 | dreworme / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-299 | s56 P2 | NOVEMBER–MARCH | confirmado | F166 | 'between November and March' |
| VT-300 | s56 P3 | SEVERE CASES RECORDED | confirmado | F167 |  |
| VT-301 | s56 P3 | NEW SOUTH WALES | confirmado | F167 |  |
| VT-302 | s56 P3 | southern Queensland | confirmado | F167 | 'NSW and southern Queensland' |
| VT-303 | s56 P2 | Source: Isbister et al., MJA, 2005 | confirmado | F165–F172; pré S08, C04 | Med J Aust 2005;182(8):407–411 |
| VT-304 | s56 P3 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-305 | s56 P3 | Boundaries: ABS, ASGS 2021 (CC BY 4.0) | confirmado | dossiê; pauta-geo | ASGS 2021, CC BY 4.0 |
| VT-306 | s57 P1 | hntro / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-307 | s57 P2 | BEFORE 1981 | confirmado | F169 |  |
| VT-308 | s57 P2 | AT LEAST 13 DEATHS | confirmado | F169; pré C04 | 13 mortes entre os casos registrados |
| VT-309 | s57 P3 | 1930 1970 | confirmado | pré S10, S11 |  |
| VT-310 | s57 P3 | 1981 · FIRST USED | confirmado | F170; pré S08 | 'first used in 1981' |
| VT-311 | s57 P3 | NO CONFIRMED DEATH SINCE | confirmado | F171; pré P07, A03 | Isbister 2005 (até 2004); NCIS 2001–2021 e ABS X21 2016–2025 seguram o 'since' até hoje. VOLÁTIL |
| VT-312 | s57 P4 | 97% | confirmado | F172 | 28 de 29 = 96,6 % ≈ 97 % ('complete response … in 28 of 29 patients (97%)') |
| VT-313 | s57 P4 | WHERE AN EXPERT IDENTIFIED THE SPIDER | confirmado | F172 | 'expertly identified cases'; a voz diz o que o 97 mede ('worked completely') |
| VT-314 | s57 P2 | Source: Isbister et al., MJA, 2005 | confirmado | F165–F172; pré S08, C04 | Med J Aust 2005;182(8):407–411 |
| VT-315 | s58 P1 | David McClenaghan, CSIRO / Wikimedia Commons / CC BY 3.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-316 | s58 P2 | 590 REDBACK SPIDERS · 1955–1957 | confirmado | F174; pré C05 | 'Between 1955 and 1957, I dissected the venom glands of 590 redback spiders' |
| VT-317 | s58 P3 | 1930 1970 1981 | confirmado | pré S08, S10, S11 |  |
| VT-318 | s58 P3 | AT LEAST 14 DEATHS BEFORE 1956 | confirmado | F175, F176; pré C06 |  |
| VT-319 | s58 P3 | 1956 | confirmado | F176; pré S09 |  |
| VT-320 | s58 P3 | NO CONFIRMED DEATH SINCE | confirmado | F176; pré C06, P07, A03 | VOLÁTIL |
| VT-321 | s58 P2 | Source: Wiener, MJA, 2003 | confirmado | F174, F176 | carta, MJA 2003;179(8):455–456 |
| VT-322 | s58 P3 | Source: Nimorakiotakis & Winkel, / Australian Family Physician, 2004 | confirmado | pré C07 (aplicado) | Nimorakiotakis & Winkel, Aust Fam Physician 2004;33(3):153–157 (PMID 15054982) |
| VT-323 | s59 P1 | 1930 1956 1970 1981 | confirmado | pré S08–S11 |  |
| VT-324 | s59 P1 | Annals of Emergency Medicine · 2014 / RAVE-II: Randomized controlled trial of intravenous… | corrigir | F177; Europe PMC 24999282 | → Annals of Emergency Medicine · 2014 / Randomized controlled trial of intravenous antivenom versus placebo for latrodectism: the second Redback Antivenom Eval… |
| VT-325 | s59 P1 | Conclusion / The addition of antivenom to standardized analgesia in patients with latrode… | confirmado | F177 | 'Conclusion The addition of antivenom to standardized analgesia in patients with latrodectism did not significantly improve pain or systemic effects.' letra a … |
| VT-326 | s59 P1 | antivenom | confirmado | F177 |  |
| VT-327 | s59 P1 | did not significantly improve pain or systemic effects | confirmado | F177 |  |
| VT-328 | s59 P1 | Source: Isbister et al., / Annals of Emergency Medicine, 2014 (RAVE-II) | confirmado | F177 | Ann Emerg Med 2014;64(6):620–628 |
| VT-329 | s59 P2 | John Tann from Sydney, Australia / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-330 | s60 P1 | INLAND TAIPAN | confirmado | F082 |  |
| VT-331 | s60 P1 | SPIDERS (X21): 0 · 2016–2025 / 2023 REVISED · 2024–2025 PRELIMINARY | confirmado | pré A03 (aplicado); F179 | VOLÁTIL |
| VT-332 | s60 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-333 | s60 P1 | IBRA 7.1 (DCCEEW) | confirmado | dossiê, 'Os créditos da tela'; pauta-geo | o crédito que a licença do IBRA pede (DCCEEW); a versão 7.1 identifica o dado |
| VT-334 | s60 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · IBRA 7.1 (DCCEEW) | confirmado | pré A01/A03 | a nota da revisão vai no rótulo do quadro (VT-331) |
| VT-335 | s61 P1 | 2016–2025 | confirmado | F011 |  |
| VT-336 | s61 P1 | VENOMOUS SNAKES: 35 | confirmado | F019 |  |
| VT-337 | s61 P1 | BEES & WASPS: 42 | confirmado | F020 |  |
| VT-338 | s61 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-339 | s61 P2 | John Pons / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-340 | s61 P3 | ANAPHYLAXIS / A SEVERE ALLERGIC REACTION | confirmado | F182, F183 | ANZCOR 9.4.3: 'anaphylaxis (severe allergic reaction)' |
| VT-341 | s61 P3 | FEWER THAN HALF REACHED MEDICAL CARE / ONE STUDY | confirmado | F184 | IMJ, resumo: 'Only 44% of cases involving anaphylaxis reached medical care prior to death' (2000–2013); não é da página da Pursuit |
| VT-342 | s61 P3 | Source: Welton et al., Internal Medicine Journal, 2017; / ANZCOR Guideline 9.4.3 | corrigir | F182, F184 (IMJ, resumo, PMID 27749012); F183 (ANZCOR 9.4.3, 'Approved: 12 November 2021') | → Source: Welton et al., Internal Medicine Journal, 2017; / ANZCOR Guideline 9.4.3, 2021 · o dono confere: o 44 % e a anafilaxia vêm do resumo do IMJ (Welton, … |
| VT-343 | s62 P1 | Source: Turner et al., J Allergy Clin Immunol Pract, 2017 | confirmado | F186, F187; pré C17 | J Allergy Clin Immunol Pract 2017;5(5):1169–1178 |
| VT-344 | s62 P1 | Christian Ferrer / Wikimedia Commons · CC BY-SA 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-345 | s62 P2 | EUROPE | confirmado | F189; G017 |  |
| VT-346 | s62 P2 | 1822 | confirmado | F189; pré C18 | 'first recorded surviving introduction … in 1822' |
| VT-347 | s62 P2 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-348 | s62 P2 | Source: Bee Aware (Plant Health Australia) | confirmado | F188, F189; pré C18 | a página não tem data: sem ano |
| VT-349 | s63 P1 | VENOMOUS: 85 | confirmado | F011 |  |
| VT-350 | s63 P1 | NO VENOM: 154 · 2016–2025 | confirmado | F190 | W53–W59 = 154 (soma do canal) |
| VT-351 | s63 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-352 | s63 P2 | National Coronial Information System (NCIS) / Animal-related deaths in Australia | confirmado | pré P09; a ficha FS24-09, p. 2 | o nome do sistema e o título da ficha |
| VT-353 | s63 P2 | Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, s… | confirmado | pré P10, P11; F191, F192 | as duas frases letra a letra; sem o '(1)' do PDF, como na página do site (o que o pré permite: nenhuma palavra muda) |
| VT-354 | s63 P2 | deaths as a result of these interactions | confirmado | pré P10 | trecho literal |
| VT-355 | s63 P2 | remain relatively rare | confirmado | pré P10; F191 |  |
| VT-356 | s63 P2 | particularly in comparison to deaths associated with other species | confirmado | pré P10 |  |
| VT-357 | s63 P2 | ANIMAL-RELATED DEATHS, 2001–2021: / HORSES 222 · CATTLE 92 · DOGS 82 | confirmado | pré P08 (aplicado), P02–P04 | a forma do pré, letra a letra |
| VT-358 | s63 P2 | Source: National Coronial Information System / (NCIS), 2024 · CC BY 4.0 | confirmado | pré P09 (aplicado) |  |
| VT-359 | s64 P1 | Matt from Melbourne, Australia / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-360 | s64 P2 | DOGS | confirmado | F194 | W54 |
| VT-361 | s64 P2 | OTHER MAMMALS | confirmado | F195 | W55 |
| VT-362 | s64 P2 | MARINE ANIMALS | confirmado | F196 | W56 (sem número; nunca SHARKS) |
| VT-363 | s64 P2 | CROCODILES | confirmado | F198 | W58 |
| VT-364 | s64 P2 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-365 | s64 P2 | Source: Peachey & Lower, J Agromedicine, 2023 | confirmado | F199 | Peachey & Lower, J Agromedicine 2023 (os montes do ABS não levam número deles) |
| VT-366 | s65 P2 | DOGS | confirmado | F194 |  |
| VT-367 | s65 P2 | OTHER MAMMALS | confirmado | F195 |  |
| VT-368 | s65 P2 | MARINE ANIMALS | confirmado | F196 |  |
| VT-369 | s65 P2 | CROCODILES (W58): 13 · 2016–2025 | confirmado | F200 | W58 = 13; xlsx igual |
| VT-370 | s65 P2 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-371 | s65 P3 | SRI LANKA | confirmado | F201; G016 |  |
| VT-372 | s65 P3 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-373 | s65 P3 | Source: Lloyd-Jones et al., / Evolutionary Applications, 2023 | confirmado | F201 | Evol. Appl. 2023 |
| VT-374 | s65 P4 | NORTHERN TERRITORY | confirmado | F202; G008 |  |
| VT-375 | s65 P4 | PROTECTED IN 1971 | confirmado | F202 | 'were protected in 1971' |
| VT-376 | s65 P4 | Source: Fukuda et al., J Wildl Manage, 2011 | confirmado | F202, F203 | J Wildl Manage 2011 |
| VT-377 | s65 P4 | Boundaries: ABS, ASGS 2021 (CC BY 4.0) | confirmado | dossiê; pauta-geo | ASGS 2021, CC BY 4.0 |
| VT-378 | s66 P1 | 2016–2025 | confirmado | F205 |  |
| VT-379 | s66 P1 | VENOM: 85 | confirmado | F011, F204 |  |
| VT-380 | s66 P1 | EXTREME NATURAL HEAT: 202 | confirmado | F205 | X30 = 202 |
| VT-381 | s66 P1 | DROWNING IN NATURAL WATER: 1,010 | confirmado | F205; pré C13 | W69 = 1.010 (nunca 2.077) |
| VT-382 | s66 P1 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-383 | s67 P1 | KEVIN ARBUCKLE | confirmado | idem VT-087 |  |
| VT-384 | s67 P1 | Associate professor of evolutionary bioscience, / Swansea University (2023) | confirmado | idem VT-088 |  |
| VT-385 | s67 P2 | HE HAS WONDERED | confirmado | F206 | 'He wondered if…' |
| VT-386 | s67 P2 | "scientific capital" | confirmado | F207 | aspas literais da Live Science |
| VT-387 | s67 P2 | "excellent infrastructure" | confirmado | F207 |  |
| VT-388 | s67 P1 | Kevin Arbuckle, to Live Science, 2023 | confirmado | F036–F039, F042, F153, F206, F207; pré C02 | cobre fala ou paráfrase do próprio Arbuckle na Live Science (26/11/2023) |
| VT-389 | s67 P3 | Causes of Death, Australia, 2025 | confirmado | xlsx A3 | a folha do ABS volta (L1) |
| VT-390 | s67 P3 | The lethality in mice of dangerous Australian and other snake venom | confirmado | Europe PMC 524395 | o título de 1979 volta (L1) |
| VT-391 | s67 P3 | Source: ABS, Causes of Death, Australia, 2025 / CC BY 4.0 · 2023 revised · 2024–2025 prel… | confirmado | pré A01; xlsx, nota (a) | a forma do A01 (2023 revisado; 2024–2025 provisórios) |
| VT-392 | s67 P3 | Source: Broad, Sutherland & Coulter, Toxicon, 1979 | confirmado | F003, F090 | Toxicon 1979;17(6):661–664 (PMID 524395) |
| VT-393 | s67 P4 | A THOUGHT, NOT A FINDING | confirmado | F209 | 'It's a thought, not a finding.' (a leitura do canal, marcada como leitura) |
| VT-394 | s68 P2 | INLAND TAIPAN | confirmado | F082, N016 |  |
| VT-395 | s68 P2 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-396 | s68 P2 | ABS Census 2021 (CC BY 4.0) · IBRA 7.1 (DCCEEW) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-397 | s68 P3 | John Tann from Sydney, Australia / Wikimedia Commons / CC BY 2.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-398 | s69 P1 | Sydney | confirmado | F211; G009 |  |
| VT-399 | s69 P1 | Central Coast | confirmado | F211; G011 |  |
| VT-400 | s69 P1 | Australian Reptile Park | confirmado | F211 | Somersby, NSW (Central Coast) |
| VT-401 | s69 P2 | THE ONLY SUPPLIER OF FUNNEL-WEB VENOM / FOR ANTIVENOM IN AUSTRALIA | confirmado | F213 | 'the sole supplier of funnel-web spider venom for antivenom production in Australia' |
| VT-402 | s69 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-403 | s69 P1 | Boundaries: ABS, ASGS 2021 (CC BY 4.0) | confirmado | dossiê; pauta-geo | ASGS 2021, CC BY 4.0 |
| VT-404 | s69 P1 | Source: Australian Reptile Park, Jan. 13, 2026 | confirmado | F211–F222; pré C09 | 'Date Published: January 13, 2026' (parte interessada; atribuído) |
| VT-405 | s70 P1 | ADULT MALES ONLY | confirmado | F214 | 'Only adult male Sydney funnel-web spiders are milked' |
| VT-406 | s70 P1 | dreworme / Wikimedia Commons · CC BY 4.0 | confirmado | conferencia-midia.json (72e9260b…): veredito aprovado da própria cena, casado por sha256 … | autor e licença iguais ao credito_na_tela do veredito (só o que vem antes do parêntese); aviso_de_ano false |
| VT-407 | s70 P1 | Source: Australian Reptile Park, Jan. 13, 2026 | confirmado | F211–F222; pré C09 | 'Date Published: January 13, 2026' (parte interessada; atribuído) |
| VT-408 | s71 P1 | Australian Reptile Park | confirmado | F211 |  |
| VT-409 | s71 P1 | ≈ 150 MILKINGS PER VIAL | confirmado | F216 | 'approximately 150 individual venom milkings to produce a single vial' |
| VT-410 | s71 P2 | Sydney | confirmado | F218 |  |
| VT-411 | s71 P2 | Central Coast | confirmado | F218 |  |
| VT-412 | s71 P2 | Newcastle | confirmado | F218 |  |
| VT-413 | s71 P4 | JANUARY 2026: ABOUT HALF / THE USUAL NUMBER OF FUNNEL-WEBS | confirmado | F220, F221; pré C09 (aplicado) | 'around half of its usual funnel-web spider capacity'; data da nota 13/01/2026 |
| VT-414 | s71 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-415 | s71 P1 | Source: Australian Reptile Park, Jan. 13, 2026 | confirmado | F211–F222; pré C09 | 'Date Published: January 13, 2026' (parte interessada; atribuído) |
| VT-416 | s71 P2 | ABS Census 2021 and ASGS 2021 (CC BY 4.0) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-417 | s72 P1 | 1930 1956 1970 | confirmado | pré S09–S11 |  |
| VT-418 | s72 P1 | 1981 · FIRST USED | confirmado | F170; pré S08 |  |
| VT-419 | s72 P1 | AT LEAST 13 DEATHS BEFORE 1981 | confirmado | F169 |  |
| VT-420 | s72 P1 | NO ONE HAS DIED, THE PARK SAYS | confirmado | F222 | 'not a single person has died from a funnel-web spider bite' desde o programa (mais de 40 anos); dono na frase. VOLÁTIL |
| VT-421 | s72 P1 | Source: Australian Reptile Park, Jan. 13, 2026 | confirmado | F211–F222; pré C09 | 'Date Published: January 13, 2026' (parte interessada; atribuído) |
| VT-422 | s72 P1 | Source: Isbister et al., MJA, 2005 | confirmado | F169, F170 |  |
| VT-423 | s73 P1 | Which animal on the list / worries you most? | confirmado | F016, F035 (a 'lista famosa' que o vídeo nomeia) | a pergunta não afirma fato; pressupõe só a lista do vídeo |
| VT-424 | s73 P1 | Sydney | confirmado | G009 |  |
| VT-425 | s73 P1 | Newcastle | confirmado | G010 |  |
| VT-426 | s73 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-427 | s74 P1 | Sydney | confirmado | G009 |  |
| VT-428 | s74 P1 | Newcastle | confirmado | G010 |  |
| VT-429 | s74 P1 | Australian Reptile Park | confirmado | F211 |  |
| VT-430 | s74 P1 | © MapTiler © OpenStreetMap contributors | confirmado | identidade §6 | o crédito da base de mapa da marca, em toda cena de mapa |
| VT-431 | s74 P1 | ABS Census 2021 (CC BY 4.0) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-432 | s74 P4 | ABS Census 2021 (CC BY 4.0) · IBRA 7.1 (DCCEEW) | confirmado | dossiê; F101, F115 | Censo 2021 e ASGS 2021, CC BY 4.0 |
| VT-433 | s74 P1 | Image(s) and/or video used under license from / Shutterstock.com | confirmado | identidade §7; midia.md §3.4; Lucas 19/11/2026 14:18 | a linha da licença, só na última cena (s74); nenhuma '<artista>/Shutterstock.com' em cena alguma (conferido em todos os 433) |
| CARD-1 | s19 | KEVIN ARBUCKLE / Associate professor of evolutionary bioscience, Swansea University (2023) | confirmado | F036; identidade (o ano do cargo) | nome e cargo da Live Science (26/11/2023), '(2023)' porque o cargo é datado; sem retrato, sem logo |
| CARD-2 | s67 | KEVIN ARBUCKLE / Associate professor of evolutionary bioscience, Swansea University (2023) | confirmado | idem CARD-1 | o card volta inteiro (L1) |
| RD-01 | s05 | ≈ 2 IN 3 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-02 | s07 | = 85 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-03 | s09 | ≈ 106 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-04 | s16 | ≈ 12,000 HOSPITAL ADMISSIONS / FOR SPIDER BITES (2001–2013) · ONE STUDY; 0 DEATHS (2000–2… | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-05 | s17 | ≈ 1 IN 3 MILLION | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-06 | s22–s24 | 85–80 MILLION YEARS AGO · ≈ 45 MILLION YEARS AGO | confirmado | F044, F047 | a fonte do GA é AusGeo News 104 (2011): o crédito na tela leva 2011 (VT-109, VT-286) |
| RD-07 | s26 | 30–25 MILLION YEARS AGO · MOLECULAR ESTIMATE | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-08 | s28 | WORLD: 414 ELAPIDS + 412 VIPERS = 826 OF 4,252 SNAKE SPECIES (≈ 1 IN 5) | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-09 | s29 | ≈ 23 MILLION YEARS AGO | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-10 | s32 | ≈ 15 MILLION YEARS AGO | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-11 | s38 | ≈ 12 DOCUMENTED CASES · BY 2017 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-12 | s39 | ≈ 117,000 SQ MI | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-13 | s39 | ≈ 1,000 PEOPLE (2021 CENSUS) | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-14 | s39 | ≈ 1 PERSON PER 100 SQ MI | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-15 | s43 | ALMOST 20 MILLION PEOPLE · 2021 CENSUS | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-16 | s43 | MORE THAN 1,000× PER SQ MI | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-17 | s44 | 23 DEATHS · JULY 2005–JUNE 2015 / 17 BROWN SNAKES / 0 INLAND TAIPAN | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-18 | s45 | ≈ 58,000 SNAKEBITE DEATHS A YEAR · 2000–2019 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-19 | s45 | 3 OR 4 A YEAR · 2016–2025 / 2024–2025 PRELIMINARY | corrigir | F127; VT-241 | → na_tela: 3 OR 4 A YEAR ON AVERAGE · 2016–2025 / 2023 REVISED · 2024–2025 PRELIMINARY · o registro está atrasado: diz '2024–2025 PRELIMINARY', e a tela (VT-24… |
| RD-20 | s45 | HUNDREDS OF TIMES, PER PERSON / DIFFERENT PERIODS AND METHODS | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-21 | s46 | FEWER THAN 100 BITES A YEAR / THAT INJECTED VENOM, ON AVERAGE / JULY 2005–JUNE 2015 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-22 | s51 | ≈ 70 DEATHS · AS OF 2005 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-23 | s51 | STINGER SEASON · OCT. 1–JUNE 1 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-24 | s54 | 150–200 MILLION YEARS AGO | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-25 | s57 | 97% / WHERE AN EXPERT IDENTIFIED THE SPIDER | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-26 | s58 | 590 REDBACK SPIDERS · 1955–1957 / AT LEAST 14 DEATHS BEFORE 1956 | corrigir | F175; pré C07 | → fonte: Wiener, MJA 2003; Nimorakiotakis & Winkel, Aust Fam Physician 2004; F174, F175 · a fonte do registro ainda diz 'Winkel et al., AFP 2004'; a tela (VT-3… |
| RD-27 | s60 | SPIDERS (X21): 0 · 2016–2025 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-28 | s61 | FEWER THAN HALF REACHED MEDICAL CARE / ONE STUDY | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-29 | s62 | 1822 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-30 | s63 | NO VENOM: 154 · 2016–2025 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-31 | s63 | ANIMAL-RELATED DEATHS, 2001–2021: / HORSES 222 · CATTLE 92 · DOGS 82 | confirmado | pré P08 | a forma do pré |
| RD-32 | s65 | CROCODILES (W58): 13 · 2016–2025 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-33 | s66 | EXTREME NATURAL HEAT: 202 / DROWNING IN NATURAL WATER: 1,010 | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-34 | s71 | ≈ 150 MILKINGS PER VIAL | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-35 | s71 | JANUARY 2026: ABOUT HALF / THE USUAL NUMBER OF FUNNEL-WEBS | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| RD-36 | s72 | NO ONE HAS DIED, THE PARK SAYS | confirmado | igual ao VT da cena | o valor exato e a fonte casam com o texto de tela e com a linha da voz citada no próprio registro |
| AV-1 | — | (lista vazia) | nada a checar | conferencia-midia.json: todos os vereditos casados com aviso_de_ano false (fotos-casament… | lista vazia, conferida: nenhuma foto de outro ano na tela |
| PQ-1 | s73 | Which animal on the list worries you most? | confirmado | F016, F035 | 'Which animal on the list worries you most?': pressupõe só a 'lista famosa' que o vídeo nomeia; não afirma fato (cta §7) |
| E-01 | — | E-01 | confirmado | xlsx Table 1.2 | s07, s08, s16: a régua dos anos da folha = os dez anos de registro 2016–2025, na ordem do ABS |
| E-02 | — | E-02 | confirmado | F019, F020 | s14 e s61: as barras de 35 e 42 na mesma escala (42/35 = 1,20); o qc-visual mede a razão no quadro |
| E-03 | — | E-03 | confirmado | F011, F190 | s63: as barras de 85 e 154 'na mesma escala' (154/85 = 1,81); o qc-visual mede |
| E-04 | — | E-04 | confirmado | F044, F047, F055, F070, F158 | a régua do tempo (s22, s25, s28, s31, s54): TODAY · 30–25 · ≈ 23 · ≈ 45 · 85–80 · 150–200 milhões de anos. A ordem confere; se a régua for linear, as distância… |
| E-05 | — | E-05 | confirmado | pré S08–S11 | a régua dos soros: 1930, 1956, 1970, 1981 (só os anos que a voz nomeia, com 1930 de partida). Os seis anos de Winkel não vão (item 18: 'os que a voz nomeia'); … |
| E-06 | — | E-06 | confirmado | F172 | s57: a cartela de 100 casas com 97 cheias = 97 % (28 de 29, 96,6 %) |
| E-07 | — | E-07 | confirmado | F102, F116 | s39 e s43: o quadrado de cem milhas quadradas tem de ter 10 mi de lado na escala do mapa da cena (o mapista grava, o qc-visual confere) |
| E-08 | — | E-08 | confirmado | F194–F198, F200 | s64 e s65: se os montes têm tamanho, o tamanho é o do ABS (W54 42, W55 63, W56 32, W58 13); nenhum número além do 13 vai escrito |
| E-09 | — | E-09 | confirmado | F011, F205 | s66: as três pilhas na mesma unidade (85 · 202 · 1.010). A nota diz 'o bloco de 10 × 9' para o 85: são 85 fichas num bloco de 10 colunas e 9 linhas (a última c… |
| E-10 | — | E-10 | confirmado | F014, F011 | s09: as duas colunas na mesma escala (≈ 106 contra 85) |
| G001 |  | AUSTRALIA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); AP Stylebook | a grafia confere com a fonte e com o texto de tela |
| G002 |  | CHANNEL COUNTRY | confirmado | IBRA 7.1 (DCCEEW), região CHC; out/australia-animais/_pesquisa/pauta-geo.json | a grafia confere com a fonte e com o texto de tela |
| G003 |  | Diamantina River | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado) ("the Diamantina"); Nat… | a grafia confere com a fonte e com o texto de tela |
| G004 |  | Cooper Creek | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth; out/aus… | a grafia confere com a fonte e com o texto de tela |
| G005 |  | QUEENSLAND | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS ASGS 2021 (STE); o… | a grafia confere com a fonte e com o texto de tela |
| G006 |  | NEW SOUTH WALES | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS ASGS 2021; out/aus… | a grafia confere com a fonte e com o texto de tela |
| G007 |  | VICTORIA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS ASGS 2021; out/aus… | a grafia confere com a fonte e com o texto de tela |
| G008 |  | NORTHERN TERRITORY | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS ASGS 2021; out/aus… | a grafia confere com a fonte e com o texto de tela |
| G009 |  | Sydney | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth (o ponto… | a grafia confere com a fonte e com o texto de tela |
| G010 |  | Newcastle | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth; out/aus… | a grafia confere com a fonte e com o texto de tela |
| G011 |  | Central Coast | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS ASGS 2021, LGA 116… | a grafia confere com a fonte e com o texto de tela |
| G012 |  | SOUTHEAST ASIA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); AP Stylebook ("Southea… | a grafia confere com a fonte e com o texto de tela |
| G013 |  | ANTARCTICA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth | a grafia confere com a fonte e com o texto de tela |
| G014 |  | GONDWANA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Geoscience Australia (… | a grafia confere com a fonte e com o texto de tela |
| G015 |  | INDIA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth | a grafia confere com a fonte e com o texto de tela |
| G016 |  | SRI LANKA | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Lloyd-Jones et al. 202… | a grafia confere com a fonte e com o texto de tela |
| G017 |  | EUROPE | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Natural Earth | a grafia confere com a fonte e com o texto de tela |
| G018 |  | Tropic of Cancer | confirmado | out/australia-animais/_pesquisa/pauta-geo.json (tropicos.json, linhas matemáticas, domíni… | a grafia confere com a fonte e com o texto de tela |
| G019 |  | Tropic of Capricorn | confirmado | out/australia-animais/_pesquisa/pauta-geo.json (tropicos.json) | a grafia confere com a fonte e com o texto de tela |
| G020 |  | Port Douglas, Queensland | confirmado | conferencia-midia.json, s51 (lugar_na_origem do clipe e da foto da saída) | a grafia confere com a fonte e com o texto de tela |
| G021 |  | Daintree River, Queensland | confirmado | conferencia-midia.json, s51 P4 (lugar_na_origem do clipe) | a grafia confere com a fonte e com o texto de tela |
| G022 |  | Mornington Peninsula, Victoria | confirmado | conferencia-midia.json, s42 P5 (lugar_na_origem: "Mornington Peninsula Suburban Bushland") | a grafia confere com a fonte e com o texto de tela |
| G023 |  | Australian Bureau of Statistics | confirmado | abs.gov.au (Causes of Death, Australia, 2025; o nome do órgão) | a grafia confere com a fonte e com o texto de tela |
| G024 |  | Causes of Death, Australia, 2025 | confirmado | o título da publicação do ABS (27/10/2026) | a grafia confere com a fonte e com o texto de tela |
| G025 |  | World Health Organization | confirmado | who.int, ficha "Snakebite envenoming" (17/09/2026) | a grafia confere com a fonte e com o texto de tela |
| G026 |  | National Coronial Information System | confirmado | ncis.org.au, ficha FS24-09 (2024) | a grafia confere com a fonte e com o texto de tela |
| G027 |  | Queensland Museum | confirmado | collections.qm.qld.gov.au ("Eastern Brown Snake"), lido pela Sala no navegador do app | a grafia confere com a fonte e com o texto de tela |
| G028 |  | Australian Reptile Park | confirmado | reptilepark.com.au, nota de 13/01/2026 (parte interessada) | a grafia confere com a fonte e com o texto de tela |
| G029 |  | Swansea University | confirmado | Live Science, 26/11/2023 ("Swansea University in the U.K.") | a grafia confere com a fonte e com o texto de tela |
| G030 |  | Live Science | confirmado | livescience.com, 26/11/2023 (Elana Spivack) | a grafia confere com a fonte e com o texto de tela |
| G031 |  | Geoscience Australia | confirmado | F044 | Geoscience Australia: o crédito leva 2011 (AusGeo News 104) |
| G032 |  | IBRA 7.1 (DCCEEW) | confirmado | out/australia-animais/_pesquisa/pauta-geo.json (channel-country.json, CC BY 4.0) | a grafia confere com a fonte e com o texto de tela |
| G033 |  | SA Arid Lands NRM Board | confirmado | a ficha "Inland Taipan" (PDF p. 2; Government of South Australia) | a grafia confere com a fonte e com o texto de tela |
| G034 |  | healthdirect Australia | confirmado | healthdirect.gov.au, "Snake bites" (revisto em 10/2024) | a grafia confere com a fonte e com o texto de tela |
| G035 |  | ANZCOR | corrigir | anzcor-9-4-3: 'Approved: 12 November 2021' | → ANZCOR: 9.4.1 (abr/2021), 9.4.3 (12/11/2021), 9.4.8 (2011) · o registro diz '9.4.1 (2021), 9.4.3 e 9.4.8 (2011)', que lê a 9.4.3 como de 2011 |
| G036 |  | Bee Aware (Plant Health Australia) | confirmado | beeaware.org.au/industry | a grafia confere com a fonte e com o texto de tela |
| G037 |  | University of Melbourne | confirmado | pursuit.unimelb.edu.au (Jane Gardner, 17/01/2017) | a grafia confere com a fonte e com o texto de tela |
| G038 |  | CSIRO | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G039 |  | The Reptile Database | confirmado | reptile-database.org (busca de 18/11/2026) | a grafia confere com a fonte e com o texto de tela |
| G040 |  | Wikimedia Commons | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G041 |  | © MapTiler © OpenStreetMap contributors | confirmado | marca/identidade.md §6; canal.json (mapa.perfil maptiler) | a grafia confere com a fonte e com o texto de tela |
| G042 |  | Shutterstock.com | confirmado | marca/midia.md §3.4; identidade §7; Lucas, 19/11/2026, 14:18 ("Sim e opção B") | a grafia confere com a fonte e com o texto de tela |
| G043 |  | Alpha Point | confirmado | canal.json › titulo | a grafia confere com a fonte e com o texto de tela |
| G044 |  | Medical Journal of Australia | confirmado | mja.com.au | a grafia confere com a fonte e com o texto de tela |
| G045 |  | Internal Medicine Journal | confirmado | Welton et al. 2017 (PMID 27749012) | a grafia confere com a fonte e com o texto de tela |
| G046 |  | Toxicon | confirmado | Broad, Sutherland & Coulter 1979; Weinstein et al. 2017; Winkel et al. 2006 | a grafia confere com a fonte e com o texto de tela |
| G047 |  | Toxins | confirmado | Jackson et al., Toxins 8:309 (2016) | a grafia confere com a fonte e com o texto de tela |
| G048 |  | PNAS | confirmado | Herzig et al., PNAS 117:24920 (2020) | a grafia confere com a fonte e com o texto de tela |
| G049 |  | Royal Society Open Science | confirmado | Lee et al., R. Soc. Open Sci. 3:150277 (2016) | a grafia confere com a fonte e com o texto de tela |
| G050 |  | Journal of Limnology | confirmado | Hall 2013 | a grafia confere com a fonte e com o texto de tela |
| G051 |  | Journal of Biogeography | confirmado | Rowe et al. 2019 | a grafia confere com a fonte e com o texto de tela |
| G052 |  | Science | confirmado | Skeels et al. 2023 | a grafia confere com a fonte e com o texto de tela |
| G053 |  | Molecular Ecology | confirmado | Byrne et al. 2008 | a grafia confere com a fonte e com o texto de tela |
| G054 |  | PLOS Neglected Tropical Diseases | confirmado | Ainsworth et al., 27/07/2026 (CC BY 4.0) | a grafia confere com a fonte e com o texto de tela |
| G055 |  | Annals of Emergency Medicine | confirmado | Isbister et al. 2014 (RAVE-II) | a grafia confere com a fonte e com o texto de tela |
| G056 |  | Australian Family Physician | confirmado | Nimorakiotakis & Winkel, AFP 33(3), 2004 | a grafia confere com a fonte e com o texto de tela |
| G057 |  | J Allergy Clin Immunol Pract | confirmado | Turner et al. 2017 (PMC5589409) | a grafia confere com a fonte e com o texto de tela |
| G058 |  | J Agromedicine | confirmado | Peachey & Lower 2023 (PMID 36691767) | a grafia confere com a fonte e com o texto de tela |
| G059 |  | Evolutionary Applications | confirmado | Lloyd-Jones et al. 2023 | a grafia confere com a fonte e com o texto de tela |
| G060 |  | J Wildl Manage | confirmado | Fukuda et al. 2011 | a grafia confere com a fonte e com o texto de tela |
| G061 |  | eLife | confirmado | Suraweera et al. 2020, citado pela OMS | a grafia confere com a fonte e com o texto de tela |
| G062 |  | Solid Earth | confirmado | Müller et al. 2022 (MULLER2022 v1.2.4, CC BY 4.0) | a grafia confere com a fonte e com o texto de tela |
| G063 |  | KEVIN ARBUCKLE | confirmado | Live Science, 26/11/2023: "Kevin Arbuckle, an associate professor of evolutionary bioscie… | a grafia confere com a fonte e com o texto de tela |
| G064 |  | Johnston et al. | confirmado | MJA 2017;207(3) (ASP-20) | a grafia confere com a fonte e com o texto de tela |
| G065 |  | Isbister et al. | confirmado | MJA 2005;182:407 e Ann Emerg Med 2014 (RAVE-II) | a grafia confere com a fonte e com o texto de tela |
| G066 |  | Wiener | confirmado | carta, MJA 2003;179:455 | a grafia confere com a fonte e com o texto de tela |
| G067 |  | Winkel et al. | confirmado | Winkel, Mirtschin & Pearn, Toxicon 2006 | a grafia confere com a fonte e com o texto de tela |
| G068 |  | Nimorakiotakis & Winkel | confirmado | Aust Fam Physician 2004;33(3):153–157 (PMID 15054982; o PDF, p. 153): dois autores, Nimor… | a grafia confere com a fonte e com o texto de tela |
| G069 |  | Welton et al. | confirmado | Intern Med J 2017 | a grafia confere com a fonte e com o texto de tela |
| G070 |  | Herzig et al. | confirmado | PNAS 2020 | a grafia confere com a fonte e com o texto de tela |
| G071 |  | Broad, Sutherland & Coulter | confirmado | Toxicon 1979;17(6):661–664 (MEDLINE) | a grafia confere com a fonte e com o texto de tela |
| G072 |  | Lee et al. | confirmado | R. Soc. Open Sci. 2016 | a grafia confere com a fonte e com o texto de tela |
| G073 |  | Hall | confirmado | J. Limnol. 2013 | a grafia confere com a fonte e com o texto de tela |
| G074 |  | Jackson et al. | confirmado | Toxins 2016 | a grafia confere com a fonte e com o texto de tela |
| G075 |  | Rowe et al. | confirmado | J. Biogeogr. 2019 | a grafia confere com a fonte e com o texto de tela |
| G076 |  | Skeels et al. | confirmado | Science 2023 | a grafia confere com a fonte e com o texto de tela |
| G077 |  | Byrne et al. | confirmado | Mol. Ecol. 2008 | a grafia confere com a fonte e com o texto de tela |
| G078 |  | Ainsworth et al. | confirmado | PLOS NTD 2026 | a grafia confere com a fonte e com o texto de tela |
| G079 |  | Weinstein et al. | confirmado | Toxicon 2017;137:15 | a grafia confere com a fonte e com o texto de tela |
| G080 |  | Currie & Jacups | confirmado | MJA 2005;183:631 | a grafia confere com a fonte e com o texto de tela |
| G081 |  | Turner et al. | confirmado | J Allergy Clin Immunol Pract 2017 | a grafia confere com a fonte e com o texto de tela |
| G082 |  | Peachey & Lower | confirmado | J Agromedicine 2023 | a grafia confere com a fonte e com o texto de tela |
| G083 |  | Lloyd-Jones et al. | confirmado | Evol. Appl. 2023 | a grafia confere com a fonte e com o texto de tela |
| G084 |  | Fukuda et al. | confirmado | J. Wildl. Manage. 2011 | a grafia confere com a fonte e com o texto de tela |
| G085 |  | Müller et al. | confirmado | Solid Earth 2022 (o modelo de placas) | a grafia confere com a fonte e com o texto de tela |
| G086 |  | Suraweera et al. | confirmado | eLife 2020, pela ficha da OMS | a grafia confere com a fonte e com o texto de tela |
| G087 |  | Ramit Singal | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G088 |  | thebeachcomber | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G089 |  | Björn Söderlund, Sw3dPix | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G090 |  | John Tann from Sydney, Australia | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G091 |  | Ian Sutton from Oberon, Australia | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G092 |  | Sylvain Dubey | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G093 |  | JJ Harrison | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G094 |  | Jurie.vw | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G095 |  | Oliver Neuman | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G096 |  | Jayendra Chiplunkar | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G097 |  | Peter Paplanus | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G098 |  | Diego Delso | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G099 |  | XLerate | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G100 |  | Greg Tasney | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G101 |  | Kgbo | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G102 |  | Calistemon | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G103 |  | Thomas Mesaglio | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G104 |  | Andrew Mercer | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G105 |  | dreworme | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G106 |  | hntro | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G107 |  | David McClenaghan, CSIRO | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G108 |  | John Pons | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G109 |  | Christian Ferrer | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G110 |  | Matt from Melbourne, Australia | confirmado | out/australia-animais/_pesquisa/conferencia-midia.json (credito_na_tela do veredito) | a grafia confere com a fonte e com o texto de tela |
| G111 |  | LD50 | confirmado | Ainsworth et al. 2026 ("the median lethal dose (LD50)"); roteiro-narrador.md | a grafia confere com a fonte e com o texto de tela |
| G112 |  | SQ MI | confirmado | AP Stylebook; identidade §7 (só milhas) | a grafia confere com a fonte e com o texto de tela |
| G113 |  | X20, X21, X25, X26, W58 | confirmado | WHO, ICD-10 (2019); ABS, Causes of Death | a grafia confere com a fonte e com o texto de tela |
| G114 |  | INLAND TAIPAN | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); The Reptile Database (… | a grafia confere com a fonte e com o texto de tela |
| G115 |  | EASTERN BROWN SNAKE | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Queensland Museum | a grafia confere com a fonte e com o texto de tela |
| G116 |  | BROWN SNAKES | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Johnston et al. 2017 (… | a grafia confere com a fonte e com o texto de tela |
| G117 |  | TAIPANS | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Jackson et al. 2016 (O… | a grafia confere com a fonte e com o texto de tela |
| G118 |  | ELAPIDS | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Lee et al. 2016; The R… | a grafia confere com a fonte e com o texto de tela |
| G119 |  | VIPERS | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Jackson et al. 2016 ("… | a grafia confere com a fonte e com o texto de tela |
| G120 |  | FUNNEL-WEB | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado) ("funnel-web", com hífe… | a grafia confere com a fonte e com o texto de tela |
| G121 |  | REDBACK | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); Wiener 2003 | a grafia confere com a fonte e com o texto de tela |
| G122 |  | BEES & WASPS | confirmado | roteiros/australia-animais/roteiro-narrador.md (o texto aprovado); ABS X23 ("hornets, was… | a grafia confere com a fonte e com o texto de tela |

VEREDITO: RESSALVA
