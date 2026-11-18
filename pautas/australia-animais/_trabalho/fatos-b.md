# Vídeo 8 (`australia-animais`): a base de fatos, leitor B (o perigo real em números e a medida nossa)

Lido em 18/11/2026, entre ~11:54 e ~12:50 pelo relógio da máquina. Escopo: as mortes por animal na Austrália (a fonte primária), a comparação que vira o
paradoxo, os soros, a medida nossa (dado aberto, com script) e os voláteis de 2026. O leitor A (o porquê: a geografia e a evolução) é de outro agente.

Convenções: trecho literal em inglês (até 25 palavras) entre aspas; **[S]** = o dado só aparece em resumo de busca (WebSearch) ou em matéria de segunda
mão, nunca lido na origem (a Sala relê antes de ir à fala ou à tela); **[R]** = lido no resumo (abstract) do artigo pelo Europe PMC, sem o texto completo.
Nenhum WebFetch foi usado: tudo o que está entre aspas foi baixado com `curl` ou pela API do Europe PMC e procurado no arquivo. Os baixados estão em
`midia/australia-animais/fontes/b/` (fora do git); os scripts, em `pautas/australia-animais/_trabalho/scripts/b_*.py`; a tabela da medida nossa,
em `pautas/australia-animais/_trabalho/medida-b.csv`. User-Agent do canal, um pedido por vez, robots.txt lido antes do primeiro pedido a cada site.
Cópia arquivada (web.archive.org) não foi usada.

## Resumo dos vereditos

| # | Afirmação | Veredito |
|---|---|---|
| 1 | Todos os animais e plantas venenosos juntos (CID-10 X20–X29) mataram **85 pessoas em dez anos (2016–2025)**, 8,5 por ano; **6 em 2025** | **CONFIRMADO** (ABS, Causes of Death 2025, lido hoje; 2025 é preliminar) |
| 2 | **Aranhas: zero mortes** em cada um dos dez anos (X21 = 0, 2016–2025) | **CONFIRMADO** (ABS). O que os médicos dizem do fim das mortes (soros) está no item 12 |
| 3 | Cobras (X20, "snakes and lizards"): 35 em dez anos (3,5/ano; 3 em 2025; **9 em 2018**) | **CONFIRMADO** (ABS). A faixa honesta é "duas a três e meia por ano" (itens 4 e 5) |
| 4 | "Thirty five deaths (2.2 per year)" por cobra, 2000–2016 | **CONFIRMADO** [R] (Welton, Toxicon 2017); a conta do artigo (35/17 anos = 2,06) não bate com o "2,2" |
| 5 | Austrália 2005–2015: 23 mortes por cobra, 17 de cobra-marrom, 4 de tigre, 2 desconhecidas | **CONFIRMADO** [R] (Johnston et al., MJA 2017, ASP-20) |
| 6 | Mortes por envenenamento 2000–2013: 64; cobras 27, abelhas e vespas 27 (25 + 2), aranhas 0, carrapatos e formigas 5, marinhos 3, desconhecido 2 | **CONFIRMADO** nas somas; tabela de segunda mão (comunicado da University of Melbourne sobre o artigo de Welton, Intern Med J 2017). O artigo em si: só o resumo [R] |
| 7 | Internações 2001–2013: aranhas **11.994 com zero mortes**; cobras 6.123 com 27 mortes (1 a cada 227); abelhas e vespas 12.351 com 27 | **EM PARTE**: a tabela soma 39.424, e o texto do mesmo comunicado diz "almost 42,000" (não bate); os percentuais do artigo (31/30/15 %) batem com a tabela |
| 8 | Estrada: 1.276 mortes em acidente de veículo a motor em 2025 (preliminar); **213 vezes** os venenosos do mesmo ano; 174 vezes em 2021–2025 | **CONFIRMADO** (ABS Table 15.4 + conta nossa) |
| 9 | Mais gente morreu **caindo da cama (118, W06) em 2025** que de todos os animais venenosos em dez anos (85) | **CONFIRMADO** (ABS; conta nossa; ressalva de definição abaixo) |
| 10 | Tubarão: média de **2,7 mortes por ano** nos últimos 10 anos; **5 em 2025**; 5 em 2026 até 18/09 | **CONFIRMADO** (Taronga ASID, lido hoje); a contagem de 2026 foi lida hoje na AP (18/09/2026) |
| 11 | NCIS 2001–2021: 713 mortes por animal (34 por ano): cavalo 222, gado 92, cão 82, canguru 53 (todas em trânsito), cobra 50, abelha 45, tubarão 39, crocodilo 25, aranha 0 | **NÃO CONFERIDO** na origem (ncis.org.au recusou); número de segunda mão **[S]** (ScienceAlert, 21/08/2025), mas cruza com o ABS (tabela do item 8 da medida) |
| 12 | Funnel-web: 13 mortes, **todas antes do soro (1980/1981)**, nenhuma confirmada desde então | **CONFIRMADO** (MJA 2005, lido hoje na origem; Winkel et al. 2006 dá 1980 como o ano da liberação) |
| 13 | Redback: pelo menos 14 mortes antes do soro; sem morte registrada desde 1955/56, "até uma fatalidade presumida" em 2004 e um caso de 2016 não confirmado | **EM PARTE** (AFP 2004, lido na origem; o ano do soro varia: 1955, 1956; o caso de 2016, só em notícia [S]) |
| 14 | Os soros: tigre 1930; taipan 1955; marrom 1956; naja-da-morte 1958; polivalente 1962; água-viva-caixa 1970 (e peixe-pedra 1956); funnel-web 1980 | **CONFIRMADO** [R] (Winkel, Mirtschin, Pearn, Toxicon 2006) |
| 15 | A medida nossa: a chance de morrer por animal venenoso é **1 em 3 milhões por ano** (0,033 por 100.000); **1 em ~38 mil numa vida de 80 anos** | **MEDIDO** (ABS + população do ABS; conta e script abaixo) |
| 16 | A medida nossa 2: a Austrália mata **1,4 vez** mais por animal (venenoso + não venenoso, mesmo código CID-10) que os EUA: 9,3 contra 6,4 por 10 milhões por ano; abelhas e vespas quase iguais (1,6 contra 1,9) | **MEDIDO**, com ressalvas (períodos e classificação diferentes; o lado dos EUA vem de resumo [R]) |
| 17 | Voláteis 2026: soro da cobra-preta (black snake) **indisponível** de 23/02 a 31/12/2026 (TGA); parque de répteis com **metade** da capacidade de funnel-web (13/01/2026); 5 mortes por tubarão em 2026 até 18/09 | **CONFIRMADO** nos três (lidos hoje); o soro da cobra-marrom e o do funnel-web no TGA: **NÃO CONFERIDO** (o site deu erro 500) |

## O que ficou NÃO CONFERIDO (para a Sala ler no navegador do app)

1. **O relatório do NCIS "Animal-related deaths in Australia" (FS24-09, 2001–2021)**: o ncis.org.au respondeu **403** (nem o robots.txt saiu), e a cópia do
   National Library of Australia pediu a prova "Making sure you're not a bot!". Ler em https://www.ncis.org.au/node/296 e https://nla.gov.au/nla.obj-3501396346/view.
   Os 713 mortos, o cavalo (222), o gado (92), o cão (82), o canguru (53, "todas em trânsito"), a cobra (50), a abelha (45), o tubarão (39) e o crocodilo (25) são
   **[S]** (ScienceAlert, 21/08/2025). Há versões em conflito na busca: uma matéria diz que a ficha de 2020 cobria 2001–2017, com **541** mortes. Conferir o PDF.
2. **O AIHW** (internações por mordida e picada, "Injury in Australia"): www.aihw.gov.au respondeu **403 com o desafio da Cloudflare** ("Just a moment..."). Ler em
   https://www.aihw.gov.au/reports/injury/injury-in-australia. As internações vieram só de Welton (via comunicado da University of Melbourne).
3. **O texto completo de Welton, Williams e Liew (Intern Med J 2017, 47:170–176)**, https://doi.org/10.1111/imj.13297 (assinatura obrigatória): só o resumo [R]. Confirmar no
   artigo se os "0,16 / 0,13 / 0,01 por 100.000" são **acumulados** no período 2000–2013 (a conta indica que sim: 0,13 por 100.000 × ~20 milhões ≈ 26 mortes ≈ as 27 da tabela).
4. **As mortes por crocodilo, números oficiais de Queensland e do Território do Norte**: o qld.gov.au deu o desafio da Cloudflare; a busca [S] diz "16 fatal and 28 non-fatal
   crocodile attacks" entre jul/2001 e dez/2025 em Queensland (https://www.qld.gov.au/environment/plants-animals/animals/living-with/crocodiles/crocodile-sightings/crocodile-attacks).
   O que ficou lido: ABS W58 (13 em dez anos) e o NCIS [S] (25 em 21 anos).
5. **Soros de cobra-marrom e de funnel-web no banco de escassez do TGA** (https://apps.tga.gov.au/Prod/msi/Search/Details/Brown%20snake%20antivenom e `.../Funnelweb%20spider%20antivenom`):
   o servidor respondeu 500 ("Runtime Error") três vezes, não é recusa. A busca [S] disse "limited availability" até 31/08/2026 (marrom) e "resolved" em 10/04/2026 (funnel-web).
6. **O ano do soro do redback** (1955 ou 1956): as duas fontes lidas se contradizem (AFP 2004: "Since 1955"; a busca [S]: "1956"); o Winkel 2006 [R] não o lista. Ver
   Museums Victoria (https://collections.museumsvictoria.com.au/articles/14955, desafio da Cloudflare) e o Australian Prescriber de 2012
   (https://www.safetyandquality.gov.au/assets/d8e2c03ef26ab358-bfbb182adb75-Antivenom-update-corrected-article-Oct-2012.pdf, sem resposta: timeout nas duas tentativas).
7. **A página da Australian Museum sobre o funnel-web** (13 mortes antes do soro; picadas por ano): https://australian.museum/ deu 403. O MJA 2005 já cobre as 13 mortes.
8. **Mortes por canguru em colisão**: só o NCIS [S] (53, 2001–2021) e o relatório da NRMA (NSW). Não há fonte nacional lida. Ver o NCIS (item 1).
9. **Mortes por cobra e por crocodilo em 2026**: a busca não achou nenhum caso datado e confirmado de 2026 (um caso em Mackay, Queensland, "homem na casa dos 60", sem data legível). O
   Dave Hogbin e o crocodilo do rio Annan são de **agosto de 2024**, não de 2026. Ler as listas de incidentes do governo de Queensland e do Território do Norte.
10. **Mortes por tubarão depois de 18/09/2026**: o Taronga só publica o resumo do ano em fevereiro; a contagem de 2026 (cinco) é da AP (18/09/2026).
11. **A morte de redback de 2016**: o comunicado da University of Melbourne diz "first spider bite death in more than 30 years", mas a notícia a dá como causa **não confirmada**, e o
    ABS tem X21 = 0 para 2016 e para todos os anos. Não usar "a última morte por aranha foi em 2016".
12. **A licença do comunicado da Pursuit (University of Melbourne)**, do Banco Mundial (população dos EUA) e dos resumos do Europe PMC: **não lida**. A do ABS **foi lida** (CC BY 4.0).
    **A do Taronga foi lida e restringe**: "must contain appropriate accreditation ... and cannot be used for commercial purposes without express permission from Taronga". O canal
    monetiza: **pedir permissão ao Taronga ou citar só o fato, sem a tabela deles**, e creditar "Australian Shark Incident Database, Taronga Conservation Society Australia".
13. **Os EUA, por categoria** (cobras e aranhas separadas): o resumo de Forrester et al. só dá o total de animais (1.610) e a fatia dos himenópteros (29,7 %). A tabela por categoria exige o CDC WONDER
    (que pede o aceite dos termos de uso e não foi acessado aqui). Ler o artigo (Wilderness Environ Med 2018, https://doi.org/10.1016/j.wem.2017.10.004).
14. **Uma consulta fora das regras, a declarar**: antes de ler o robots.txt do `eutils.ncbi.nlm.nih.gov` (que diz `Disallow: /`, "back-end server version - no robots!"), fiz **um** pedido de busca (esearch)
    para achar o número do artigo de Welton no PubMed. Parei ali. O resto do PubMed (a página do artigo) deu um desafio de cookies e não foi contornado. Daí em diante usei só o Europe PMC
    (`www.ebi.ac.uk/europepmc/webservices/rest`), cujo robots.txt permite, com 12 s entre pedidos (o robots dele pede `Crawl-Delay: 10`; o primeiro pedido saiu 3 s depois do anterior).

## Os 5 fatos mais fortes para o vídeo

1. **Dez anos, 85 mortes, e nenhuma por aranha.** ABS (Causes of Death, Australia, 2025): animais e plantas venenosos, **85 mortes de 2016 a 2025** (6 em 2025); aranhas,
   **zero em cada um dos dez anos**; escorpiões, zero. No mesmo 2025, **1.276** mortes no trânsito e **118** de queda da cama.
2. **11.994 internações por aranha, 0 mortes.** Welton e colegas, 2001–2013: aranhas são 30 % de todas as internações por bicho venenoso e **nenhuma morte**; o que mais mata é a alergia a abelha
   e vespa (27) e a cobra (27, uma morte a cada 227 internações). Total: 64 mortes em 13 anos.
3. **Os soros mudaram o jogo.** Funnel-web: **13 mortes, todas antes do soro de 1980/81, nenhuma confirmada depois** (MJA 2005). Redback: **pelo menos 14 mortes antes do soro** (1955/56),
   e nenhuma confirmada depois, a não ser uma presumida em 2004 que não foi tratada. O primeiro soro, o da tigre, é de 1930.
4. **Não é a taipan-do-interior que mata, é a cobra-marrom.** Das 23 mortes por cobra de 2005 a 2015, **17 foram de cobra-marrom** e 4 de tigre; no estudo das taipans do mesmo projeto (ASP-25, período
   que o resumo não dá), **cinco** pacientes foram mordidos por taipan-do-interior (e o soro tirou todo o veneno medido). A conta: ~2 mortes por ano; na Índia, 4,1 por 100.000 (≈ 45.900 por ano) contra 0,014 por 100.000 na Austrália.
5. **A medida nossa: a Austrália mata por animal só 1,4 vez mais que os EUA.** Com o mesmo código CID-10 (W53–W59 + X20–X29): **9,3 por 10 milhões por ano** na Austrália (ABS 2016–2025)
   contra **6,4** nos EUA (CDC, 2008–2015); abelhas e vespas **1,6 contra 1,9**. A chance de morrer por bicho venenoso na Austrália: **1 em 3 milhões por ano**.
   (Reservas: o cavalo, "222 de 713" [S]; o tubarão, 2,7 por ano e 5 em 2025 e em 2026; e o hoje: soro da cobra-preta em falta e o parque de répteis com metade das aranhas.)

---

## 1. As mortes por animal na Austrália, pela fonte primária

### 1.1 O ABS, causas de morte (a fonte que serve de espinha dorsal)

Baixado hoje de https://www.abs.gov.au/statistics/health/causes-death/causes-death-australia/2025/2025_01%20Underlying%20causes%20of%20death%20%28Australia%29.xlsx (lançado em
**27/10/2026**, "Causes of Death, Australia, 2025"; a página "latest-release" lida hoje confirma a data). Licença: Creative Commons Attribution 4.0 (lida em
https://www.abs.gov.au/website-privacy-copyright-and-disclaimer: "All material presented on this website is provided under a Creative Commons Attribution 4.0 International licence"; o crédito
na tela é "Australian Bureau of Statistics").

- **Definição:** "Underlying cause of death", CID-10 (ICD-10), por **data de registro**, não de ocorrência. **X20–X29 = contato com animais e plantas venenosos**: X20 cobras e lagartos
  venenosos, X21 aranhas venenosas, X22 escorpiões, X23 marimbondos, vespas e abelhas, X24 centopeias, X25 outros artrópodes, X26 animais e plantas marinhos, X27 outros animais, X28 plantas, X29 não especificado.
- **Ressalva do próprio ABS:** a nota (a) da tabela: "Causes of death data for recent years is preliminary ... final data for 2016-2022, revised data for 2023, preliminary revised data for 2024
  and preliminary data for 2025." O número de 2025 ainda muda.
- **Os cubos por estado não servem:** a nota (d) de cada cubo estadual diz "Small values are randomly assigned to protect the confidentiality of individuals", ou seja, os números pequenos
  são **sorteados**. Prova: no cubo do Território do Norte, X20–X29 em 2018 vem como 4 homens, 0 mulheres e **3 pessoas** (a soma não bate). **Não há "medida por estado" confiável a partir do ABS.**

**A série (pessoas, ano de registro; `b_abs_serie.py`, tabela 1.2):**

| Código | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | Soma | Média/ano |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **X20–X29, venenosos (todos)** | 4 | 10 | 19 | 6 | 9 | 6 | 6 | 8 | 11 | **6** | **85** | **8,5** |
| X20, cobras e lagartos | 2 | 2 | 9 | 1 | 6 | 2 | 3 | 2 | 5 | 3 | 35 | 3,5 |
| X21, aranhas | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | **0** | 0 |
| X22, escorpiões | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| X23, marimbondos, vespas e abelhas | 2 | 7 | 10 | 4 | 2 | 3 | 2 | 6 | 4 | 2 | 42 | 4,2 |
| X25, outros artrópodes (carrapatos, formigas) | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 2 | 1 | 6 | 0,6 |
| X26, marinhos (água-viva etc.) | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 2 | 0,2 |

Os dez anos de X20–X29 somam **85**, e quase metade é marimbondo, vespa e abelha (X23 = 42; a causa costuma ser a alergia, segundo Welton), não cobra. O "X26" não diz qual animal foi (o artigo de Welton dá 0,01 por 100.000 para água-viva-caixa em 2000–2013).

### 1.2 O que o ABS registra dos animais NÃO venenosos (CID-10 W53–W59, V80), mesma tabela

| Código | 2016–2025 | Média/ano | 2025 |
|---|---|---|---|
| W54, mordida ou golpe de **cão** | 42 | 4,2 | 6 |
| W55, mordida ou golpe de **outros mamíferos** (cavalo, gado, canguru fora do trânsito) | 63 | 6,3 | 11 |
| V80, **cavaleiro** (ou carroça de animal) em acidente de transporte | 64 | 6,4 | 5 |
| W56, contato com **animal marinho** (tubarão e outros) | 32 | 3,2 | 6 |
| W58, **crocodilo** ou jacaré | 13 | 1,3 | 3 |
| W57, inseto não venenoso; W59, outros répteis; W53, rato | 2; 1; 1 | — | 0 |
| **W53–W59 somados** | **154** | **15,4** | 26 |

Nota: o canguru **em colisão de carro** entra como acidente de trânsito (V), não aparece separado no ABS. O ABS não tem "cavalo" como categoria: W55 + V80 (127 em dez anos) é um **proxy**
que mistura cavalo, gado, canguru fora do trânsito e outros mamíferos com cavaleiros.

### 1.3 Os estudos de mortes (as fontes que os médicos usam)

| Estudo | O que diz (trecho literal em inglês) | Fonte (lida em 18/11/2026) |
|---|---|---|
| **Welton, Williams, Liew. Intern Med J 2017;47:170-176** (dados nacionais de internação e de mortalidade, 2000–2013) | "deaths occurred due to an anaphylactic event (0.16 per 100 000), snake envenoming (0.13 per 100 000) or box jellyfish envenoming (0.01 per 100 000)" · "Causes of death were led by anaphylaxis subsequent to an arthropod bite or sting, followed by death from snake envenoming." · "Only 44% of cases involving anaphylaxis reached medical care prior to death, compared to 74% of those envenomed by snakes." · "Over half of all deaths (52%) occurred at home" **[R]** | Resumo no Europe PMC (PMID 27749012): https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=EXT_ID:27749012%20AND%20SRC:MED&resultType=core&format=json; DOI https://doi.org/10.1111/imj.13297 |
| O mesmo estudo, **em números** (comunicado da University of Melbourne, 17/01/2017) | "In all, 64 people were killed by a venomous sting or bite" · "There were no spider bite fatalities." · "Tasmania was the only state or territory where no deaths were recorded." · "Western Australia and South Australia recorded the highest number of recorded fatal stings and bites" | https://pursuit.unimelb.edu.au/articles/venomous-stings-and-bites-lie-close-to-home (robots.txt permite). A tabela do comunicado: item 1.4 |
| **Welton, Liew, Braitberg. Toxicon 2017;131:11-15** (NCIS, 2000–2016) | "Thirty five deaths (2.2 per year) were ascribed or antecedent to a snake bite." · "Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years." **[R]** | Europe PMC, PMID 28288937; DOI https://doi.org/10.1016/j.toxicon.2017.03.008 |
| **Johnston et al. MJA 2017;207:119-125** (Australian Snakebite Project 2005–2015) | "There were 23 deaths (median, two per year), attributed to brown (17), tiger (four) and unknown (two) snakes" · "835 envenomed patients (median, 87 per year)" · "Snake envenoming is uncommon in Australia, but is often severe." **[R]** | Europe PMC, PMID 28764620; DOI https://doi.org/10.5694/mja17.00094 |
| **Sutherland, Leonard. MJA 1995** (1992–1994) | "Twelve deaths attributed to snakebite were reported in 1992-1994." (4 por ano; "brown snakes ... were involved in six of the deaths") **[R]** | Europe PMC, PMID 8538559 |
| **Peachey, Lower. J Agromedicine 2023** (NCIS, mortes por animal **em fazenda**, 2001–2020) | "The majority of incidents (81%) involved horses ( n = 75) and cattle ( n = 31)." · "mean 6.5" mortes por ano, "a 35% reduction on an earlier 1989-92 assessment" **[R]** | Europe PMC, PMID 36691767; DOI https://doi.org/10.1080/1059924X.2023.2171523 |

**Duas contagens por cobra que o vídeo não pode misturar:** NCIS (2000–2016) 2,2 por ano; ASP-20 (2005–2015) mediana de 2 por ano; ABS X20 (2016–2025) 3,5 por ano, com 9 só em 2018; e Sutherland e Leonard
(1992–1994) 4 por ano. Para a fala: **"two to three a year"**.

### 1.4 A tabela de Welton, mortes (2000–2013) e internações (2001–2013), pelo comunicado da University of Melbourne

Trecho do comunicado: "Creature Deaths (2000-2013) Hospitalisations (2001-2013)" (a tabela, copiada abaixo; o comunicado diz que a base é o AIHW para as internações e o NCIS para as mortes):

| Animal | Mortes | Internações | Uma morte a cada |
|---|---|---|---|
| Cobras | 27 | 6.123 | **227** internações |
| Marimbondos, vespas e abelhas | 27 (25 abelhas, 2 vespas) | 12.351 | 457 |
| **Aranhas** | **0** | **11.994** | nenhuma |
| Carrapatos e formigas | 5 | 4.533 | 907 |
| Animais marinhos | 3 | 3.707 | 1.236 |
| Escorpiões | 0 | 61 | — |
| Centopeias e piolhos-de-cobra | 0 | 119 | — |
| Desconhecido | 2 | 536 | 268 |
| **Total** | **64** | **39.424** | **616** |

Atenção: o texto do mesmo comunicado diz "Including fatalities, venomous stings and bites resulted in almost 42,000 hospitalisations", e a soma da tabela é 39.424; os percentuais do resumo do artigo
(abelhas e vespas 31 %, aranhas 30 %, cobras 15 %) batem com a **tabela**. Usar 39.424, ou "about 40,000". A conta: 64 / 39.424 = 0,16 % (uma morte a cada 616).

---

## 2. A comparação que vira o paradoxo

Todos os números são do ABS (mesma fonte, mesma definição, ano de registro; 2025 preliminar), lidos hoje; as razões são contas nossas (`b_medida.py`).

| O quê | 2025 | Dez anos (2016–2025) | Contra os venenosos |
|---|---|---|---|
| **Animais e plantas venenosos (X20–X29)** | **6** | **85** | 1× |
| Acidentes de veículo a motor (V01–V79, V89.2; tabela 15.4) | 1.276 | 6.441 só em 2021–2025 | **213×** (2025); **174×** (2021–2025: 6.441 / 37) |
| Queda envolvendo **cama** (W06) | **118** | 864 | **19,7×** (2025); **10,2×** (dez anos) |
| Queda em escada (W10) | 103 | 947 | 17×; 11× |
| Queda de **escada de mão** (W11) | 36 | 316 | 6×; 3,7× |
| Afogamento em água natural (W69) | 103 | 1.010 | 17×; 12× |
| Afogamento e submersão (W65–W74) | 225 | 2.077 | 38×; 24× |
| Calor natural excessivo (X30) | 19 | 202 | 3,2×; 2,4× |
| Mordida de **cão** (W54) | 6 | 42 | **1×** (2025); 0,5× |
| **Cavalo, gado e outros mamíferos** (W55 + V80, proxy) | 16 | **127** | — ; **1,5×** os venenosos |
| Mar (W56, "animal marinho") | 6 | 32 | 1×; 0,4× |
| Crocodilo (W58) | 3 | 13 | 0,5×; 0,15× |

**A frase mais forte e verificável:** "In 2025, 118 Australians died in falls involving a bed. All the venomous animals combined killed 85 in ten years." Ressalva: W06 é "Fall involving bed", e a
maioria é de idosos (o ABS não abre a idade nessa linha; **não afirmar a idade**).

**O cruzamento com o NCIS [S] (outra fonte, outros anos):**

| Animal | NCIS 2001–2021 [S] | por ano | ABS 2016–2025 | por ano | Taronga 2001–2021 |
|---|---|---|---|---|---|
| Cão | 82 | 3,9 | W54: 42 | 4,2 | — |
| Crocodilo | 25 | 1,2 | W58: 13 | 1,3 | — |
| Cobra | 50 | 2,4 | X20: 35 (inclui lagartos) | 3,5 | — |
| Abelha | 45 | 2,1 | X23: 42 (abelha, vespa, marimbondo) | 4,2 | — |
| Tubarão | 39 | 1,9 | W56: 32 (todo animal marinho) | 3,2 | 44 fatais, 2,1 por ano |
| Aranha | **0** | 0 | X21: **0** | 0 | — |

Os três grupos batem na ordem de grandeza e em "zero aranhas". Onde divergem (abelha e tubarão), o ABS e o Taronga são mais altos, por definição e por período; o NCIS [S] fica como pista.

**A estrada, pela outra ponta:** o Taronga cita na página "Over 2024-2025, Surf Life Saving Australia reported 357 coastal drowning deaths and there were 1,314 fatalities on Australian roads"
(o 1.314 é o do ABS para **2024**, revisado: a nota do ABS de 2024 dizia 1.295 preliminar; o de 2025 é 1.276). **Não usar 1.314 como "dois anos".**

**Canguru e trânsito:** nenhuma fonte nacional lida. O NCIS [S] diz 53 mortes por canguru em 2001–2021, "every single one of them was a traffic accident". A NRMA, a partir dos dados do Centre for Road Safety de NSW,
dá **16 acidentes fatais com animais (canguru, gado e outros) de 2015 a 2020, só em NSW** (2015: 2; 2016: 3; 2017: 3; 2018: 2; 2019: 5; 2020: 1; no ano de 2020, 1 fatal de canguru ou wallaby): "16 fatal crashes have occurred in the five years ending 31 December 2020"
(https://mynrma.com.au/-/media/unsorted-items/wildlife-road-safety-report--final.pdf, publicado em nov/2022; um acidente fatal não é igual a uma morte).

**Cobra: o que o mundo vê.** Na Índia, o inquérito nacional de mortalidade deu "an annual age-standardised rate of 4.1/100,000" por picada de cobra, "about 45,900 annual snakebite deaths nationally" (Mohapatra et al., PLoS NTD 2011, 2001–2003; **[R]**,
Europe PMC, PMID 21532748). Austrália, ABS X20 (35 em dez anos): 35 / 257,9 milhões de pessoas-ano = **0,0136 por 100.000**. É uma razão de ~300 vezes, mas **as duas medidas são diferentes**
(a indiana é padronizada por idade e vem de inquérito; a australiana é bruta e do registro): dizer "hundreds of times", não "300×".

---

## 3. Os soros: quando chegou cada um, e o que aconteceu com as mortes

| Soro | Ano | Fonte (trecho literal) |
|---|---|---|
| **Tigre** (o primeiro) | **1930** | "Commercial antivenom manufacture began in Australia in 1930 with the tiger snake antivenom." Winkel, Mirtschin, Pearn, *Toxicon* 2006, **[R]** (Europe PMC, PMID 17030053; https://doi.org/10.1016/j.toxicon.2006.08.001) |
| Taipan; cobra-marrom; naja-da-morte; cobra-preta-de-Papua; cobra-marinha; **polivalente** | 1955; 1956; 1958; 1959; 1961; 1962 | mesmo resumo: "1955: taipan; 1956: brown snake; 1958: death adder; 1959: Papuan black snake; 1961: sea snake; 1962: polyvalent" |
| **Peixe-pedra** (stonefish) e **água-viva-caixa** (box jellyfish) | 1956 e **1970** | "including the first marine antivenoms in the world (1956: stonefish antivenom; 1970: box jellyfish)" |
| **Funnel-web** | **1980** (liberação) / **1981** (introdução clínica) | "culminating, in 1980, with the release of the funnel web spider antivenom" (Winkel 2006) · "13 deaths (all before the introduction of antivenom in 1981)" (MJA 2005) |
| **Redback** | **1955 ou 1956** (as fontes divergem) | "Before the introduction of redback spider antivenom in Australia, at least 14 deaths had been reported." · "Since 1955, no deaths had been reported until a recent fatality following presumed redback spider bite" (Australian Family Physician, vol. 33 n. 3, mar/2004, arquivo `20040311winkel.pdf`; https://www.racgp.org.au/getattachment/c01fb190-92d3-4596-beef-f9007668b97c/20040311winkel.pdf) |

(O resumo de Winkel 2006 não cita o redback.)

**O que aconteceu com as mortes:**

- **Funnel-web (o caso mais limpo).** O MJA 2005, lido na origem (https://www.mja.com.au/journal/2005/182/8/funnel-web-spider-bite-systematic-review-recorded-clinical-cases): "The 77 cases comprised: 13 deaths (all before the
  introduction of antivenom in 1981), seven in children" e "We found no confirmed deaths after funnel-web spider bite since the antivenom was introduced." O estudo achou **198** possíveis picadas e **77** casos graves,
  com "a median number of cases of severe envenoming for 1981–2004 [of] 2 per year", e **o soro reverteu totalmente o quadro em 97 %** dos casos de aranha identificada. Antes do soro, o mesmo estudo conta 16 picadas não fatais
  e 13 mortes entre os graves. O ensaio de 1984 do MJA (Hartman e Sutherland, **[R]**, PMID 6503783) diz: "There have been no deaths since the antivenom has been used". E uma revisão de 2025 (BMC Ecol Evol, aberto,
  https://doi.org/10.1186/s12862-024-02332-0, **[R]**) repete: "no human fatalities have occurred since the development of antivenom in the 1980s".
- **Redback.** "At least 14 deaths" antes do soro; depois, o AFP de 2004 fala numa "recent fatality following presumed redback spider bite" no norte de NSW, **não tratada** com o soro. Uma revisão de 1997
  (Jelinek, Wilderness Environ Med, **[R]**, PMID 11990169) diz que no país "intramuscular antivenin has been used liberally for more than 40 years ... and no deaths recorded since its introduction". O caso de abril de 2016
  (um homem de 22 anos de NSW, dito "first spider bite death in more than 30 years" no comunicado da University of Melbourne) **nunca teve a causa confirmada** em nenhuma fonte lida, e o ABS tem X21 = 0 em 2016.
  **Dizer "no confirmed death since the antivenom", não "since 1956".**
- **Cobras.** Não achei a comparação "mortes por cobra antes e depois do soro de 1930" em fonte lida (**NÃO CONFERIDO**). O que há: 4 por ano em 1992–1994 (Sutherland e Leonard), 2,2 por ano em 2000–2016
  (Welton), mediana de 2 em 2005–2015 (ASP-20). **O soro não fez as mortes irem a zero**: dez das 23 mortes de 2005–2015 vieram depois de parada cardíaca fora do hospital (ASP-20: "ten followed out-of-hospital cardiac arrests"),
  e o tempo até o soro foi de **4,3 horas** (mediana, sem mudança: "Median time to first antivenom was unchanged (4.3 hours; IQR, 2.7-6.3 hours)"; ASP-20).
- **Água-viva-caixa.** Soro de 1970; Welton dá 0,01 por 100.000 (≈ 2 mortes) em 2000–2013; o ABS tem X26 = 2 em dez anos. Não achei a contagem anterior a 1970.
- **Anafilaxia:** o que mais mata não tem soro: "Only 44% of cases involving anaphylaxis reached medical care prior to death" (Welton [R]).
- **O polvo-de-anéis-azuis e os cones:** sem número de mortes lido (**NÃO CONFERIDO**). Um relato de caso (Queensland, menino de 4 anos) mostra que a vítima foi **ventilada por 17 horas** e sobreviveu
  (PMID 19238736, **[R]**): o tratamento é o suporte, não o soro.

---

## 4. A medida nossa (dado aberto, script, licença, números)

**Fontes:** (a) ABS, Causes of Death, Australia, 2025, cubo 2025_01, tabela 1.2 (CC BY 4.0), e a tabela 15.4 do cubo 2025_15; (b) ABS, National, state and territory population, março/2026, tabela 310101
(`https://www.abs.gov.au/statistics/people/population/national-state-and-territory-population/mar-2026/310101.xlsx`, CC BY 4.0; "Estimated Resident Population", série A2133251W, de 30 de junho de cada
ano); (c) Welton e colegas pela tabela da University of Melbourne; (d) Taronga ASID, resumo 2025; (e) Forrester et al. 2018 [R] e a população dos EUA do Banco Mundial (SP.POP.TOTL, API pública;
`api.worldbank.org` não tem robots.txt (404); licença **não lida** hoje). Scripts: `b_xlsx.py`, `b_abs_serie.py`, `b_medida.py` (em `pautas/australia-animais/_trabalho/scripts/`);
saída em `medida-b.csv`. Os arquivos de origem estão em `midia/australia-animais/fontes/b/` (`abs-2025_01.xlsx`, `abs-2025_15.xlsx`, `abs-pop-310101.xlsx`, `wb-pop-usa.json` etc.).

### 4.1 A chance de morrer por animal venenoso na Austrália

- População: ERP de 30/jun, de 24,19 milhões (2016) a 27,60 milhões (2025); **soma de pessoas-ano 2016–2025 = 257.890.800** (ABS 310101). Em 31/03/2026: 27.921.150 pessoas.
- **85 mortes / 257,9 milhões de pessoas-ano = 0,033 por 100.000 por ano**, ou **1 em 3.034.009 por ano**.
- Em 2025: 6 mortes sobre 27,60 milhões = 1 em 4.600.283.
- **Numa vida de 80 anos** (conta ilustrativa nossa: 80 × a taxa anual, supondo a taxa constante): **1 em ~37.900**.
- Cobras sozinhas: 35 / 257,9 milhões = **0,0136 por 100.000 por ano** (1 em 7,4 milhões por ano); aranhas: **0**.
- **Limites:** o ABS conta a causa **básica** (CID-10 X20–X29); morte de anafilaxia por picada pode ser registrada com outro código; o NCIS [S] conta menos abelhas por ano (2,1) que o ABS (4,2); 2025 é
  preliminar; a vida de 80 anos e a taxa constante são ilustração.

### 4.2 A Austrália contra os EUA, com o mesmo código CID-10

Código: W53–W59 (mordida, golpe ou contato de animais não venenosos) + X20–X29 (venenosos), que é o que Forrester et al. (Wilderness Environ Med 2018, [R], PMID 29373216) usam: "There were 1610 animal-related
fatalities, with the majority from nonvenomous animals (4.8 deaths per 10 million persons annually)." (CDC WONDER, 2008–2015). Fica **fora** dos dois: cavaleiro (V80) e colisão de carro com animal.

| | Mortes | Anos | População (soma de pessoas-ano) | **Por 10 milhões por ano** |
|---|---|---|---|---|
| EUA (CDC, via Forrester) | 1.610 | 2008–2015 | 2,504 bilhões (Banco Mundial; média de 313,0 milhões) | **6,43** |
| Austrália (ABS) | 239 (154 não venenosos + 85 venenosos) | 2016–2025 | 257,9 milhões | **9,27** |
| EUA, só himenópteros (29,7 % de 1.610 = ~478) | ~478 | 2008–2015 | — | 1,91 (~60 por ano) |
| Austrália, só himenópteros (X23) | 42 | 2016–2025 | — | **1,63** (4,2 por ano) |

**A razão: 9,27 / 6,43 = 1,44.** A Austrália mata por animal (todos os tipos) uma vez e meia o que mata nos EUA, e **as abelhas e vespas matam quase igual** (1,6 contra 1,9 por 10 milhões por ano).
Ressalvas: períodos diferentes (2008–2015 contra 2016–2025); a versão australiana da CID-10 (ICD-10-AM) e o código W56 (que no ABS inclui o tubarão) não são idênticos aos do CDC; **o lado dos EUA vem de um
resumo [R] e a conta dele (1.610) não foi conferida na tabela**; o próprio resumo diz 4,8 por 10 milhões por ano para os não venenosos, o que somado ao 1,9 dos himenópteros já dá ~6,7, **acima** do 6,43 que sai dos 1.610
(o resumo usa a população de 2011, 311,8 milhões no Banco Mundial; o nosso denominador é a soma 2008–2015); o resumo não fecha por inteiro, e só o artigo dirime (NÃO CONFERIDO 13). Chamar de **"about one and a half times"**, nunca "the same".

### 4.3 As internações contra as mortes (a razão que ninguém mostra)

Com a tabela de Welton: **39.424 internações e 64 mortes em 13 anos: uma morte a cada 616 internações**. Aranhas, a maior fonte de internações depois das abelhas, deram **11.994 internações e nenhuma morte**.
Cobras: 227 internações por morte. Ver item 1.4. Fonte (comunicado), licença **não lida**; o AIHW (a base real das internações) **recusou** (NÃO CONFERIDO 2).

### 4.4 Tubarões, a série de 26 anos (Taronga ASID)

Resumo 2025 baixado de https://taronga.org.au/siteassets/wildlife--conservation/tisl/shark-incident-database/asid-2025-summary-1.pdf (criado em 18/02/2026; robots.txt só tem `User-agent: *`). Fatais por ano, 2016–2025:
2, 1, 1, 0, 8, 4, 1, 4, 1, **5** = **27 em dez anos (2,7 por ano)**, o que bate com a página do Taronga: "There were on average 2.7 fatalities each year". Média por década:
**1,4 (2000–2009), 2,1 (2010–2019), 3,8 (2020–2025)**: **as mortes por tubarão estão subindo**, e o vídeo não pode dizer o contrário. Em 2025, 25 casos, 5 fatais (NSW 2, QLD 1, SA 1, WA 1). Por 10 milhões por ano: **1,05**.
**Licença: restrita ao crédito e sem uso comercial sem permissão** (item 12 do NÃO CONFERIDO).

### 4.5 O que a medida por estado diria, e por que não sai

O ABS aleatoriza os números pequenos nos cubos por estado (item 1.1). O que há por estado é a frase do comunicado de Welton: "Western Australia and South Australia recorded the highest number of recorded fatal
stings and bites over the decade, while Tasmania was the only state or territory where no deaths were recorded" (2000–2013, **[R]**/comunicado). **É contagem, não taxa** (o resumo não dá a população de cada estado).
Se o Lucas quiser a medida por estado, a rota é o NCIS (pedido de dados) ou o AIHW (internações por estado, NÃO CONFERIDO 2).

---

## 5. O que é atual (os voláteis), lido hoje (18/11/2026)

| O quê | O que a fonte diz | Fonte | Lida em |
|---|---|---|---|
| **Soro da cobra-preta (black snake) indisponível** | "BLACK SNAKE ANTIVENOM (equine) 18000U injection vial ... From 23 Feb 2026 to 31 Dec 2026 Shortage status: Current Availability: Unavailable Reason: Manufacturing"; "Healthcare professionals to consider alternative treatment options." Fornecedor: Seqirus. | TGA, Medicine Shortages Information Initiative: https://apps.tga.gov.au/Prod/msi/Search/Details/Black%20snake%20antivenom | 18/11/2026 |
| **Soro da cobra-marrom** ("limited availability" até 31/08/2026) e **funnel-web** ("resolved" em 10/04/2026) | **[S]** só em resumo de busca; as páginas do TGA deram erro 500 | https://apps.tga.gov.au/Prod/msi/Search/Details/Brown%20snake%20antivenom e `.../Funnelweb%20spider%20antivenom` | NÃO CONFERIDO |
| **O soro do funnel-web depende de um parque** | "the Australian Reptile Park is now operating at around half of its usual funnel-web spider capacity, one of the lowest numbers seen in the Park's history." · "The Australian Reptile Park is the sole supplier of funnel-web spider venom for antivenom production in Australia" · "approximately 150 individual venom milkings to produce a single vial of antivenom" · "up to 13 vials have been required to save one patient's life". Causa: o lockdown de 2020 (poucas aranhas doadas). | Australian Reptile Park, "Covid Aftershock Impacts Life-Saving Funnel Web Venom Program", publicada **13/01/2026**: https://www.reptilepark.com.au/about/zoo-news/covid-aftershock-venom-program (robots.txt permite). O texto vem do **próprio parque** (parte interessada) | 18/11/2026 |
| **Tubarão, 2026** | "There have been five fatal shark attacks in Australia this year." · "Three spearfishing divers were killed by sharks off the Australian coast in four weeks over May and June." · "In January, a 12-year-old boy died in a hospital days after he was mauled by a bull shark in Sydney Harbour." · "Australia has averaged between two and three fatal shark attacks a year since 2000, according to the Australian Shark Incident Database". Uma morte de nadador em Sorrento Beach, Perth, em 18/09/2026. | The Associated Press (via CP24), "Shark kills swimmer off Australian beach as beachgoers watch in horror", 18/09/2026 (a vítima: "a man in his 60s"): https://www.cp24.com/news/world/2026/09/18/shark-kills-swimmer-off-australian-beach-as-beachgoers-watch-in-horror/ | 18/11/2026 |
| **A contagem de 2025 (Taronga)** | "In 2025 there were five fatal shark bites in Australia." | https://taronga.org.au/conservation-and-science/australian-shark-incident-file/resources | 18/11/2026 |
| **O que mudou nos dados oficiais** | O ABS lançou o "Causes of Death, Australia, 2025" em **27/10/2026**; os dados de 2025 são preliminares; a série de 2024 foi revisada (acidentes de veículo a motor 2024: 1.295 → **1.314**). | https://www.abs.gov.au/statistics/health/causes-death/causes-death-australia/latest-release | 18/11/2026 |

**Mortes por cobra e crocodilo em 2026:** NÃO CONFERIDO (item 9). **Cuidado com datas:** o Dave Hogbin e o crocodilo do rio Annan (Queensland) são de **agosto de 2024**; o inquérito do menino Tristian Frahm (cobra-marrom, Queensland)
teve os achados em 15/10/2025 (só por busca [S]); nenhum é de 2026.

---

## 6. Discrepâncias que a Sala deve conhecer antes de a fala sair

1. **"Almost 42,000" contra 39.424** (internações de Welton, no mesmo comunicado). Usar a tabela.
2. **2,2 por ano contra 35 em 17 anos (2,06)** no Toxicon 2017: o "(2.2 per year)" do resumo parece contar 16 anos. Dizer "about two a year".
3. **Aranhas: zero** no ABS (2016–2025), no estudo de Welton (2000–2013) e no NCIS [S] (2001–2021), mas o caso de 2016 (redback) e a morte "presumida" de 2004 existem em fontes de segunda mão. **"No confirmed death"**.
4. **Funnel-web: 1980 ou 1981.** Liberação (1980, Winkel) e uso clínico (1981, MJA 2005 e "1 February 1981" em outra fonte [S]). Dizer "since 1981" com o MJA, ou "around 1980".
5. **Redback: 1955 ou 1956.** Idem.
6. **NCIS: 713 mortes (2001–2021) contra 541 (2001–2017)**: duas fichas diferentes; só o PDF dirime.
7. **Tubarão: 44 mortes fatais (Taronga, 2001–2021) contra 39 (NCIS [S])**: o Taronga conta provocados e não provocados; o NCIS, só o que a perícia classifica.
8. **Estrada: 1.314 (2024, revisado), 1.295 (2024, preliminar), 1.276 (2025, preliminar).** O Taronga mistura 2024–2025 na mesma frase.
9. **O ABS não tem canguru nem cavalo como categoria.** Os "cavalos matam mais que tubarão" são do NCIS [S]; o ABS só mostra o proxy W55 + V80 (127 em dez anos contra 85 dos venenosos).

## 7. Arquivos e scripts

- `midia/australia-animais/fontes/b/` (fora do git): `abs-2025_01.xlsx`, `abs-2025_15.xlsx`, `abs-2025_08-NT.xlsx` (só para provar a aleatorização dos cubos estaduais), `abs-pop-310101.xlsx`, `abs-cod-latest.html`, `abs-ext-2024.html`,
  `abs-copyright.html`, `taronga-resources.html`, `taronga-asid-2025.pdf`, `pursuit-venomous.html`, `mja-funnel2005.html`, `racgp-winkel2004.pdf`, `nrma-wildlife.pdf`, `sciencealert-deadliest.html`, `rp-covid.html`, `tga-1.html`
  (a única página do TGA que abriu), `cp24-shark.html`, `wb-pop-usa.json`, `epmc-*.json` (resumos), mais os `robots-*.txt` de cada site.
- `pautas/australia-animais/_trabalho/scripts/`: `b_texto.py` (limpa HTML e mostra o contexto de um termo), `b_pdf.py` (idem para PDF, PyMuPDF), `b_xlsx.py` (leitor de .xlsx com a biblioteca padrão), `b_abs_serie.py` (a série
  CID-10 do ABS), `b_epmc.py` (Europe PMC, um pedido por vez, 12 s), `b_medida.py` (a medida nossa e o `medida-b.csv`).
- **Sites que recusaram e não foram contornados:** ncis.org.au (403), aihw.gov.au (403 Cloudflare), qld.gov.au (403 Cloudflare), australian.museum (403), witness.esrc.unimelb.edu.au (403),
  collections.museumsvictoria.com.au (Cloudflare), lighthouse.mq.edu.au (Cloudflare), pubmed.ncbi.nlm.nih.gov (desafio de cookies), nla.gov.au (prova de robô), `eutils.ncbi.nlm.nih.gov` (robots `Disallow: /`; um pedido feito, ver
  NÃO CONFERIDO 14). Sem resposta (timeout): safetyandquality.gov.au. Erro 500: três páginas do TGA.
