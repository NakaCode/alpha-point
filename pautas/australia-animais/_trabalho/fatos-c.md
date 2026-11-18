# Vídeo 8 (`australia-animais`): as últimas leituras antes do roteiro, leitor C

Lido em 18/11/2026, entre ~15:58 e ~16:35 pelo relógio da máquina. Pedido: `pautas/australia-animais/_trabalho/pedido-fatos-c.md`. A base anterior está em
`fatos-a.md` e `fatos-b.md` (não repeti o que já tem fonte lá: os soros de 1930 a 1980 [Winkel 2006, R], a tabela do ABS, Welton, o ASP-20 em resumo).

**Convenções** (as da base): trecho literal em inglês, de até 25 palavras, entre aspas; **FIRME** = lido na origem, no texto da fonte;
**[R]** = só o resumo (abstract) do artigo, pelo Europe PMC; **EM PARTE** = a fonte diz parte do que o roteiro quer, ou o elo é de duas fontes;
**NÃO CONFERIDO** = não consegui ler; **[S]** = só em resumo de busca (WebSearch), nunca lido na origem: não vai à fala. Nenhum WebFetch.
O WebSearch (10 consultas) só serviu para achar o endereço da fonte; tudo o que está entre aspas foi baixado por script (`urllib`, User-Agent do canal,
`AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`, **um pedido por vez**, robots.txt lido antes de cada site, `Crawl-delay: 10` do ebi.ac.uk cumprido
no `c_epmc.py`) e procurado no arquivo. Cópia arquivada (web.archive.org): não usei. Navegador, vidIQ, banco pago e crédito: não usei.
Site que recusou (403, desafio, timeout repetido) ficou para o navegador do app: está em §8.

Cópias em `midia/australia-animais/fontes/c/` (fora do git); scripts em `scripts/c_*.py` (`c_baixar`, `c_epmc`, `c_epmc_info`, `c_texto`, `c_pdf`,
`c_india_tabela`, `c_india_conta`, `c_sha`); o log de cada pedido (host, status, URL), em `fontes/c/_log-c.txt`. Os sha256 abaixo são do arquivo inteiro.

## Resumo

| # | O que o roteiro quer | Grau | Em uma linha |
|---|---|---|---|
| 1a | A orientação oficial: bandagem de pressão com imobilização | **FIRME** | ANZCOR (ex-Australian Resuscitation Council) 9.4.1 e 9.4.8 e o healthdirect (governo): ambulância, parado, bandagem firme no membro todo; **a própria diretriz diz que não há comparação em campo e "no clear benefit"** |
| 1b | Quem criou e quando | **[R]** | Sutherland SK, Coulter AR, Harris RD, *Lancet* 1979: em macacos, uma bandagem firme + tala **atrasa** o veneno; não "cura" |
| 1c | O soro hoje | **FIRME** (existir) / **EM PARTE** (a lista por espécie) | "available for all venomous snakes native to Australia" (ANZCOR; healthdirect); há **um polivalente** (CSL, no registro de remédios); a página da CSL Seqirus não abriu |
| 1d | Por que tão pouca gente morre | **EM PARTE** | nenhuma fonte diz "a razão". O que dizem: o envenenamento é **raro** (835 casos em 10 anos num estudo nacional), o soro existe desde 1930, o primeiro socorro conta; **mas a taxa de morte não mudou em 20 anos e não há ensaio controlado do soro** |
| 2a | Ano da abelha-europeia | **FIRME** (1 fonte) | **1822**, "aboard the Isabella" (Bee Aware); a página do departamento federal deu timeout |
| 2b | "Most bee deaths come from European honeybees" | **EM PARTE** | a abelha-de-mel é a **maior causa** das mortes por picada de inseto (73 %, Mullins 2016, via a revisão de Turner 2017); que ela é a europeia vem de **outra** fonte (Bee Aware). Duas fontes, um elo |
| 2c | A vespa europeia | **[R]** | "introduced into Australia in 1959" (resumo, *J Econ Entomol* 2006); a fonte oficial **NÃO CONFERIDO** (os 3 sites de governo deram 403) |
| 3 | Ano do soro do redback | **FIRME** | **1956**, dito por quem o fez (Wiener, carta ao *MJA*, 2003); a ressalva: "nenhuma morte *confirmada*" |
| 4a | O que X25 e X26 cobrem | **FIRME** | CID-10 da OMS: X25 = "other venomous arthropods" (exemplos: formiga, lagarta); X26 = "venomous marine animals and plants" (água-viva, coral, anêmona, pepino e ouriço-do-mar). **O código não nomeia o carrapato** |
| 4b | Formiga jack jumper e carrapato como causa de morte | **FIRME** (formiga) / **EM PARTE** (carrapato) | ASCIA e três resumos nomeiam a formiga (4 a 6 mortes em 1980–1999, quase todas na Tasmânia); o carrapato aparece nas mortes por anafilaxia (9 % das mortes por inseto/carrapato) numa revisão |
| 5 | A Índia por habitante | **MEDIDO**, com ressalvas | Índia ~4,7 por 100.000 por ano (eLife, 2000–2019) contra 0,0136 da Austrália (ABS, 2016–2025): **cerca de 350 vezes** (de 350 a 490 conforme a Austrália que se use). A conta se sustenta como ordem de grandeza ("hundreds of times"), não como número fino |
| 6 | AIHW | **NÃO LIDO** | o robots.txt do aihw.gov.au deu **403**; parei com 1 pedido; a Sala lê pelo navegador do app |

---

## 1. Por que as 35 mortes por cobra não são 350

### 1.1 A orientação oficial de primeiros socorros (bandagem de pressão e imobilização)

- **Quem publica:** o **ANZCOR** (Australian and New Zealand Committee on Resuscitation), que hoje hospeda as diretrizes do Australian Resuscitation Council: o endereço
  `resus.org.au/guidelines/` **redireciona** para `anzcor.org`. As diretrizes de envenenamento são a **9.4.1** (cobra), a **9.4.8** (a técnica) e a 9.4.3 (carrapato, abelha, vespa, formiga). Também o **healthdirect Australia**
  (serviço de saúde do governo).
- **Lido em:** 18/11/2026. URLs:
  - https://www.anzcor.org/home/first-aid/guideline-9-4-1-first-aid-management-of-australian-snake-bite (sha256 `caeb17dea49849b5c7ec8891b8b53d18ea0f4493a186fa703341c3cebedbdbe3`; "Approved: April 2021");
  - https://www.anzcor.org/home/first-aid/guideline-9-4-8-envenomation-pressure-immobilisation-technique (sha256 `9202d6cc3ccc2b568de2ae3b2668ebb7e55c6656ac30c9699d4714b43ddf3019`; "Approved: 2011");
  - https://www.healthdirect.gov.au/snake-bites → `…/accidents-and-injuries/bites-and-stings/snake-bites` (sha256 `5def6bbd826dadae17cebdb9758ebf675e2684808d4430842435b2e1a5abb8ff`; "Last reviewed: October 2024").
- **Licença:** nenhuma aberta. ANZCOR: "users may view, download, and print … for personal or educational use only … Reproduction of part or all of the contents of this web site in any form is prohibited"
  (`anzcor-copyright.html`, sha256 `5153da22…bd3`). healthdirect: "may not be reproduced, altered, adapted, stored and/or distributed in any form … without the prior written permission"
  (`healthdirect-terms.html`, sha256 `aa3b1f6e…351`). **Nenhum dos dois textos vai à tela**: só o fato, na voz, com o nome do órgão.

**O que a orientação manda** (ANZCOR 9.4.1, "Management"; o healthdirect repete os passos):
- "Send for an ambulance for any person with a suspected snake bite"; "Keep the person immobilised (still), reassured and under constant observation"; "Apply pressure bandaging with immobilisation".
- A técnica (9.4.8): bandagem larga sobre a picada, outra do dedo até o alto do membro, tala. "The bandage should be firm and tight, you should not be able to easily slide a finger between the bandage and the skin."
- **O que não fazer:** "DO NOT cut or incise the bite"; "DO NOT use an arterial tourniquet"; "DO NOT wash or suck the bite". (healthdirect: não lavar, "venom left on the skin and clothing can help identify the snake".)
- **O que ela faz, nas palavras da diretriz** (9.4.8): "The PIT retards the flow of lymph by which venoms gain access to the circulation." E (9.4.1, "Rationale"): "very little venom reaches the circulation, even after several hours, if the pressure bandaging with immobilisation (PIB) is applied immediately and maintained."
  **Ela retarda; não cura.** E: "The correct application of the pressure bandage is difficult to achieve."
- **Quando surgiu** (9.4.8): "was introduced for the treatment of Australian snake bites", com a referência 1 = Sutherland, Coulter, Harris, *Lancet* 1979 (§1.2).

**A ressalva que a diretriz faz sobre si mesma** (9.4.8, "Use of the PIT"), **FIRME e essencial para o roteiro:**
- "The evidence for PIT evolved from small-scale animal studies, and tracer studies in humans."
- "No field based direct comparisons of first aid techniques in humans affected by snakebite exist."
- "Where field based studies have reported outcomes after application of PIT no clear benefit has been shown." (A diretriz atribui isso, em parte, à técnica mal aplicada no campo: "most observational studies report inadequately applied PIT in the field".)
- O ASP-20 (§1.4) diz o mesmo: "despite a lack of strong evidence that it improves outcomes, it remains a safe first aid approach."

**Frase segura em inglês (a bandagem):**
> "If a snake bites you in Australia, the official advice is simple: call an ambulance, stay still, and wrap the whole limb firmly, like a sprain. The point is to slow the venom on its way to your blood. It buys time. It doesn't cure you."

**O que não afirmar:** que a bandagem "é a razão" de serem 35 e não 350; que ela é "provada em humanos no campo" (a diretriz diz o contrário); que ela "neutraliza" o veneno (a diretriz fala de uma "inactivation of certain venoms … when … trapped in the tissues", e só de "certain");
que "todo mundo na Austrália" a faz certo (a diretriz: difícil de aplicar bem).

### 1.2 Quem a criou e quando

- **Fonte:** Sutherland SK, Coulter AR, Harris RD. "Rationalisation of first-aid measures for elapid snakebite." *The Lancet* 1979; 1(8109): 183–185. PMID 84206, DOI 10.1016/s0140-6736(79)90580-4.
  Lido no **resumo** do Europe PMC (`epmc-sutherland1979.json`, sha256 `d0f4e9f7f65b816ce24843b8becdf6fcbdd3680ab655658e8ce74cd01610c5d8`); lido em 18/11/2026. Licença do resumo: não lida (não vai à tela).
- **O que o resumo diz** (**[R]**): "The plasma of monkeys envenomated with tiger snake (Notechis scutatus) venom was monitored by radioimmunoassay for both crude venom and a neurotoxin." Com o membro imobilizado e pressão de 55 mm Hg, "only very low levels of circulating venom or neurotoxin were detectable".
  A frase central: "venom movement can be effectively delayed for long periods by the application of a firm crepe bandage" (ao longo do membro mordido, mais tala). E: "Pressure alone or immobilisation alone did not delay venom movement."
  **É experimento em macacos, com veneno de tigre injetado; não é resultado em gente.** O resumo diz "delayed", nunca "cured".
- **O nome "Struan":** o resumo traz só "Sutherland SK". O primeiro nome vem do pedido da Sala, não de uma fonte que li: se "Struan Sutherland" for à tela ou à fala, falta uma fonte (um obituário, o museu). O ANZCOR 9.4.8 cita este artigo como a origem da técnica.
- **Frase segura:**
  > "The bandage trick comes from experiments in 1979 by an Australian researcher, Sutherland, and his colleagues. They injected monkeys with tiger snake venom and found that a firm bandage and a splint kept it from spreading — for a while."
- **Não afirmar:** "invented in 1979 and saved thousands" (nenhuma fonte conta vidas); "proved in people" (o ANZCOR cita estudos de rastreador em humanos, não ensaio de desfecho); a data exata do número da *Lancet* (o Europe PMC dá só 1979).

### 1.3 O soro: desde quando, e para quais cobras há hoje

- **Desde 1930:** a base já tem (Winkel, Mirtschin, Pearn, *Toxicon* 2006, **[R]**, `fatos-b.md` §3): "Commercial antivenom manufacture began in Australia in 1930 with the tiger snake antivenom." Agora também **FIRME**, no texto do ASP-20 (*MJA* 2017, lido inteiro):
  "Antivenom has been available in Australia from the Commonwealth Serum Laboratories since 1930 (since 2015: from Seqirus)." Arquivo `mja-asp20.html`, sha256 `564dc59c8d1fdf4c89ae1a9b216b65053feba66e68d61804900179d0e64042bb`,
  https://www.mja.com.au/journal/2017/207/3/australian-snakebite-project-2005-2015-asp-20 (publicado em 31/07/2017). Quem publica: AMPCo/MJA; licença: não aberta (não vai à tela).
- **Para quais cobras hoje:** as duas fontes oficiais lidas dizem a mesma frase:
  - ANZCOR 9.4.1: "Antivenom is available for all venomous snakes native to Australia, but must be given under health professional supervision in a properly equipped medical facility."
  - healthdirect: "Antivenom is available for all snakes that are native to Australia."
  - **FIRME para "existe soro para toda cobra nativa"**; as duas dizem "para todas", **nenhuma lista as espécies**.
- **Se há um polivalente:** **sim**. O healthdirect, no registro de remédios (dados do ARTG, "Last updated on 4 November 2026"), lista o "**Polyvalent Snake Antivenom (Australia and Papua New Guinea) (CSL)**", ingrediente "Polyvalent Australian snake antivenom".
  Uso: "…in all states except Victoria and Tasmania who exhibit manifestations of systemic envenoming and the snake has not been identified." E: "In Tasmania, Tiger snake antivenom should be used rather than polyvalent whilst in Victoria a combination of Tiger snake antivenom and brown snake antivenom is the preferred treatment."
  https://www.healthdirect.gov.au/medicines/brand/snomed/22131000168107/polyvalent-snake-antivenom-australia-and-papua-new-guinea-csl (sha256 `8b6d500cad44b6d15fc337ff3b6d3f78e974b3b8a26e79ee337201816d3cf65a`). **A composição do polivalente** (cinco soros misturados) só apareceu em resumo de busca **[S]**: não usar.
  O Winkel 2006 [R] (base) dá o ano do polivalente: 1962.
- **A fabricante (CSL Seqirus):** o `seqirus.com.au` **não respondeu** (a conexão caiu duas vezes, já no robots.txt). Quem fabrica hoje: só o que o ASP-20 diz ("since 2015: from Seqirus"). A lista de produtos da CSL: **NÃO CONFERIDO**.
- **O que o ASP-20 diz do soro** (importante, FIRME): "No controlled clinical trials of Australian snake antivenoms have been published." O ASP-20 conta, de 1.548 pacientes com suspeita de picada, **755 que receberam soro**; a dose mediana caiu de quatro frascos para um; "median time to first antivenom was unchanged (4.3 hours; IQR, 2.7–6.3 hours)".
- **Aviso para o roteiro (a escassez de 2026, já na base, `fatos-b.md` §5):** o soro monovalente da cobra-preta (*black snake*) está indisponível no TGA de 23/02 a 31/12/2026. "Antivenom for all native snakes" continua a frase oficial, mas "sem falta nenhuma" não.
- **Frase segura:**
  > "And when someone does reach a hospital, there's antivenom. Australia has been making it since 1930 — the first one was for the tiger snake — and the health services say there's one for every dangerous native snake."
  (Trocar "dangerous" por "venomous", que é a palavra da fonte.)
- **Não afirmar:** "the antivenom is why people survive" (não há ensaio; ASP-20); "most people bitten get antivenom" (o healthdirect diz "About 5 in 100 people bitten by a snake will be given antivenom", e o ASP-20 recrutou 755 de 1.548, com viés para casos graves: **os dois números não se conciliam**, não usar nenhum como "chance de receber soro");
  nomes de espécie com soro específico hoje (lista não lida).

### 1.4 O que as fontes dizem sobre por que tão pouca gente morre (para o "part of why")

**Nenhuma fonte lida diz "a razão".** Dizem partes, e duas delas empurram contra a ideia fácil de "o soro e a bandagem explicam tudo":

1. **O envenenamento é raro.** ASP-20 (*MJA* 2017), FIRME: "Snake envenoming is infrequent in Australia, and much less common than previous annual estimates suggested." O estudo nacional enrolou **1.548 pacientes com suspeita de picada em dez anos, 835 envenenados (mediana de 87 por ano)**
   e diz que isso é "a very large proportion of the estimated total number of snakebites in Australia". Antes se estimava "up to 3000 people were bitten by snakes in Australia each year", mas "this number is not based on any reported epidemiological study".
   Mortes: "There were 23 deaths (median, two per year)" (2005–2015); o healthdirect: "Each year in Australia, between 1 to 4 people die from snake bites."
2. **A medicina e o primeiro socorro contam, segundo quem estudou as mortes:**
   - Sutherland, *MJA* 1992 (1981–1991, **[R]**, `epmc-mortalidade-historica.json`, sha256 `c8fe0af930d8c0729bbe08cdd5812c0cab1666bbf21b38c744a5c8cc215406ed`): "Had venom absorption from the bitten area been delayed by correct first aid, some of the patients might have survived."
   - Sutherland e Leonard, *MJA* 1995 (1992–1994, **[R]**, `epmc-cobras-quatro.json`, sha256 `3a4bc93ffa751ff6469e929af0a0545add5355223845e5f012ed121f81796e29`): "Twelve deaths attributed to snakebite were reported in 1992-1994. … In no case was prompt effective first aid applied."
   - ASP-20 (FIRME): "In seven of 11 deaths by cardiac arrest, PBI had not been applied before the patient collapsed", com tempo mediano até a ressuscitação de 15 minutos; entre os que sobreviveram a uma parada, "PBI was applied to 10 of 12 … with a median time to CPR of one minute".
     **É observação, não prova de causa** (quem recebe bandagem e CPR cedo é quem estava com testemunha).
   - Winkel 2006 (**[R]**, base): o soro e a toxinologia "revolutionise the medical management of those victims who in the past had died in Australia from our venomous and toxic fauna" (opinião histórica dos autores, sem número).
3. **Mas a taxa de morte não caiu**, e o soro não zera as mortes:
   - Welton et al., *Toxicon* 2017 (2000–2016, **[R]**, `epmc-cobras-quatro.json`): "Death from snake bite remains rare in Australia, and has maintained a steady rate for over 20 years."
   - ASP-20: "the annual death rate did not change during the ten years assessed by the study"; das 23 mortes, "ten followed out-of-hospital cardiac arrests and six followed intracranial haemorrhages" (a base já tinha); "17 deaths attributed to brown snakes".
4. **O que NÃO achei:** nenhuma fonte que compare mortes antes e depois do soro de 1930 ou da bandagem de 1979 (**NÃO CONFERIDO**: uma busca no Europe PMC por queda de mortalidade com o soro deu zero resultado, `epmc-queda-mortalidade.json`). **Nenhuma fonte estima quantos morreriam sem o soro e sem a bandagem.**
   Portanto "35, not 350" **não pode ser dito como contrafactual**.

**Uma conta nossa, grosseira, que muda a ordem das causas** (só para o enquadramento; **não vai à voz com número**; script `c_india_conta.py`, anexo, saída em `fontes/c/saida-c_india_conta.txt`):
a diferença Índia–Austrália em mortes por habitante (~350×, §5) vem **mais da exposição que da letalidade**: a Índia tem, segundo o eLife, "1.11–1.77 million bites in 2015, of which 70% showed symptoms of envenomation" (59 a 93 envenenados por 100.000 habitantes por ano),
e a Austrália, 87 envenenados por ano num estudo hospitalar (0,4 por 100.000): **150 a 240 vezes mais envenenados por habitante na Índia**. Já a mortalidade entre os envenenados é de **5 a 8 %** na Índia (62,3 mil mortes em 2015) contra **~2,8 %** no ASP-20 (23 de 835; denominadores diferentes): **uns 2 vezes**.
Ressalvas: o número da Austrália é de um estudo com consentimento e viés para casos graves; o da Índia é modelo "more crudely". **A direção é clara; o número, não.** Se o roteiro quiser dizer "part of why", esta é a metade honesta: **poucas pessoas são mordidas e envenenadas**.

**Frase segura (o "part of why", sem a conta):**
> "So why do so few people die? Part of it is the medicine: antivenom since 1930, an ambulance, a bandage that slows the venom down. But the doctors who study it are careful. They say the proof for the bandage in real life is thin, and the number of deaths hasn't changed in twenty years. And part of it is simpler: far fewer people actually get envenomed than anyone used to think. A national study found 835 cases in ten years."

**Não afirmar:** "the reason" / "because of" (a pauta já proíbe); "the soro cut deaths" (sem comparação); "most Australians who are bitten are saved by the hospital" (10 das 23 mortes foram parada cardíaca **fora** do hospital); "35 would be 350 without it".

**Um erro numa fonte oficial, para não copiar:** o ANZCOR 9.4.1 diz "In the 16 years to 2016, 16 Australians were recorded as dying of snake bite in Australia." O artigo que ele cita (Welton 2017) diz **35 mortes "ascribed or antecedent to a snake bite" (2,2 por ano), das quais 16 "attributed to snake bite/envenoming as leading directly to death"**. O "16" do ANZCOR parece uma confusão entre os dois números. **Usar 35 (ABS: 35 em 2016–2025) e não o "16" do ANZCOR.**

---

## 2. A abelha europeia, trazida de fora

### 2.1 O ano em que chegou

- **Fonte:** Bee Aware (`beeaware.org.au`), o portal de biossegurança de apicultura da Austrália; a página inicial diz: "BeeAware was funded by the Australian honey bee industry, pollinator-reliant plant industries, Plant Health Australia, governments and R&D agencies." (Não é página de departamento: é fonte **financiada pelo governo e pela indústria**.)
- **Lido em:** 18/11/2026, https://beeaware.org.au/industry/ (`beeaware-industry.html`, sha256 `5629af48d0c6c7fa6f8bdb49e1ea8b5bef8052a46947fd37738d22196f513283`; a home, `beeaware-home.html`, sha256 `b6c0006d2834ba90336e748c165d39c8f067492c63b17857d19f06e74f6300dc`).
- **Frase:** "The first recorded surviving introduction of European honey bees (Apis mellifera) into Australia occurred in 1822 aboard the Isabella." E: "Since that time, honey bees have established widely throughout Australia."
- **Licença:** a página não traz aviso de direitos (não achei "©" nem licença): **não vai à tela**; o fato (1822) vai na voz com "Bee Aware" só se a Sala quiser dono.
- **Grau: FIRME** para o ano (uma fonte lida na origem, que diz "first recorded surviving": introduções anteriores podem ter morrido; "1822" é o primeiro registro que sobreviveu).
- **A página do departamento federal NÃO CONFERIDO:** o `agriculture.gov.au` (FAQ "Honey bees, crop pollination and varroa mite", `…/pests-diseases-weeds/bees/honeybees-faqs`) deu **timeout** duas vezes, já no robots.txt. Pelo resumo de busca **[S]**, ele diz "introduced to Australia around 1822". A Sala confirma pelo navegador do app.
  As outras tentativas ficaram sem leitura (`agrifutures.com.au`: a conexão caiu; `extensionaus.com.au`: 403; `museumsvictoria.com.au`: 403; a CSIRO Publishing: timeout e 503).
- **Frase segura:**
  > "The honeybee isn't Australian. It came from England on a ship called the Isabella, in 1822."
- **Não afirmar:** o mês, os "seven hives" (só de resumo de busca [S]); "the first bees ever brought" (a fonte diz "first recorded surviving").

### 2.2 As mortes por picada de abelha são da abelha-europeia? (a frase proibida pela pauta)

**Veredito: a frase "Most bee deaths come from European honeybees" se sustenta em substância, mas por duas fontes encadeadas, e com a ressalva da alergia. EM PARTE.** O que cada fonte diz:

1. **A abelha-de-mel é a maior causa das mortes por inseto.** Mullins et al., *Clin Exp Allergy* 2016 (ABS 1997–2013 e NCIS 2000–2013), resumo no Europe PMC **[R]**: "insect stings/tick bites (n = 41)" das 324 mortes por anafilaxia; "sting/bite fatalities remained unchanged"
   (`epmc-mullins2016.json`, sha256 `1930052cb80fb8476d7a1cce4d4ef81ddbc93f85abd44217f73b14fbcd2682d0`). O resumo **não** divide por inseto.
   A divisão vem da **revisão de Turner et al., *J Allergy Clin Immunol Pract* 2017** ("This is an open access article under the CC BY-NC-ND license"; PMC5589409; `turner2017-fulltext.xml`, sha256 `f484df1f0f5d481eb20b3f71bd41d2463df3833c1babe37a74dc40bacec9e28e`), Tabela III, linha da Austrália:
   "Australian Bureau of Statistics and National Coronial Information System (NCIS) 1997-2013 324 (119 with known cause) 41 (13%) insect X23, X25 0.09 … 90% male **Honeybee 73% Ants 9% Ticks 9% Wasp 6%** …
   Squeezing tick bites associated with death in all tick cases". E no texto: "Mullins et al reported honeybee to be the dominant cause of fatal insect venom anaphylaxis, although this may relate to the relatively high prevalence of allergy to this insect in Australia."
   (**Fonte secundária**; o artigo de Mullins está atrás de paywall; os denominadores do "73 %" não estão no que li: **não converter em número de mortes**. A taxa, "0.09" por milhão por ano, é a do conjunto de picadas e mordidas de inseto.)
2. **A abelha-de-mel, na Austrália, é a europeia.** Bee Aware (§2.1): "European honey bees (Apis mellifera)" é a abelha-de-mel que chegou em 1822. Dois resumos de artigo nomeiam a espécie das picadas e das mortes:
   Riches, Gillis e James, *Pathology* 2002 (**[R]**, `epmc-abelha-anafilaxia.json`, sha256 `068ee3ec02c479d9c8374bb6ff46f1c0d3c6b604f28a38c3a9d262eedcc0d958`): "the common honey bee (Apis mellifera)"; "reported deaths are uncommon, with the estimated mortality varying from one to four persons each year";
   Brown et al., *J Allergy Clin Immunol* 2003 (**[R]**, mesmo arquivo): "honeybee (Apis mellifera)".
3. **O ASCIA** (a sociedade australiana de alergia), FAQ "Allergic Reactions to Bites and Stings", **"Content updated July 2025"** (`ascia-bites-stings-2025.pdf`, sha256 `8a6a20fabe9ee78fd3d88e90d3f6db70aa4e973bf4cd1fa7abe705218fb7ba8d`;
   https://www.allergy.org.au/images/pc/ASCIA_PC_Allergic_Reactions_Bites_Stings_2025.pdf):
   - "Bee stings are currently Australia's most common cause of insect sting anaphylaxis";
   - "Anaphylaxis from stinging insect allergy results in an average of three deaths per year in Australia.";
   - **uma nota que pesa contra "a abelha é a vilã":** "The Paper Wasp is responsible for the most serious stings and the European Wasp is becoming an increasing problem in Australia." (gravidade da picada, não contagem de mortes);
   - "Native Australian Bees and the Green Ant of Queensland also cause allergic reactions."
   - Licença: © ASCIA 2025; o `robots.txt` do ASCIA traz "Content-Signal: search=yes, ai-train=no, use=reference": li só como **referência** (conferir fato), nada de treino. Nada vai à tela.
4. **Welton** (2000–2013, base, `fatos-b.md` §1.4, comunicado da University of Melbourne, secundário): marimbondos, vespas e abelhas 27 mortes, "25 abelhas, 2 vespas".
5. **Liew et al., *J Allergy Clin Immunol* 2009** (1997–2005, **[R]**, `epmc-liew2009.json`, sha256 `c6e7d7f4cf63213050ef6a246912ceb94326fb654b3abf4a75645d71f1b103da`): "insect stings, 20 (18%)" das 112 mortes por anafilaxia; "Most insect sting-induced anaphylaxis deaths occurred between 35 and 84 years almost exclusively in male subjects".

**O que isso permite dizer, e o que não:**
- **Pode:** o inseto que mais mata por picada na Austrália é a abelha-de-mel (cerca de três em quatro das mortes por picada de inseto ou carrapato de um estudo de 1997–2013), e a abelha-de-mel é a europeia, trazida em 1822.
- **A morte é por alergia (anafilaxia), não por veneno forte.** O ASCIA e o ANZCOR 9.4.3 dizem: "The major immediate risk to the health of persons bitten or stung by insects is anaphylaxis (severe allergic reaction), although this is rare."
- **Não pode:** "European honeybees kill more Australians than snakes" (o ABS tem X23 = 42 contra X20 = 35 em 2016–2025, mas X23 junta abelha, vespa e marimbondo; o número só de abelha não está lido); "most bee deaths" sem dizer que são **mortes por alergia**; contar "73 % de 42" (o 73 % é de outro período e outro conjunto).

**Frase segura:**
> "The honeybee is the real killer here. It came over from Europe in 1822, and in one study of Australian deaths from 1997 to 2013, it was behind roughly three in four of the fatal insect-sting reactions. Not because its venom is strong — because some people are severely allergic."
(Mais curta, sem número: "…the honeybee, an import from Europe, is the insect behind most of Australia's fatal sting allergies.")

### 2.3 A vespa europeia (*Vespula germanica*) e o código X23

- **O código:** OMS CID-10, X23 "Contact with hornets, wasps and bees", "Incl.: yellow jacket" (§4). Por isso o 42 do ABS junta abelha, vespa e marimbondo.
- **Quando chegou:** Wood, Hopkins e Schellhorn, *J Econ Entomol* 2006; 99(2): 263–267, PMID 16686122, resumo (**[R]**, `epmc-vespula.json`, sha256 `7ec02a988e86e39aec68b3afaf3c59d60f03a4da8c1c2722e5dd2e82598635ab`):
  "The German yellowjacket, Vespula germanica (F.) (Hymenoptera: Vespidae), was introduced into Australia in 1959 and has established throughout southern Australia."
- **Fonte oficial: NÃO CONFERIDO.** `agriculture.vic.gov.au`, `dpi.nsw.gov.au` e o DPIRD da Austrália Ocidental deram **403 já no robots.txt**; `legacy.pbcrc.com.au` não resolveu. Pelos resumos de busca **[S]**: a Agriculture Victoria diria 1959 na Tasmânia e 1977 em Melbourne,
  e uma revisão cita 1954 em Sydney (rainhas em hibernação numa carga de madeira da Nova Zelândia). **A data tem conflito entre as fontes de busca**; o único texto que li diz 1959.
- **Frase segura:** "…the European wasp, which turned up in Tasmania in 1959" (só se a Sala confirmar a data com o departamento; senão: "which arrived in the second half of the twentieth century").
- **Não afirmar:** que a vespa mata mais que a abelha (Welton: 2 de 27); que ela "mata mais a cada ano" (o ASCIA a chama de "increasing problem", sem número).

---

## 3. O ano do soro do redback

- **Fonte:** Wiener S. (o cientista da CSL que o fez), carta ao editor, *Med J Aust* 2003; 179(8): 455–456, "Published online: 20 October 2003", sobre o estudo de Isbister e Gray. Lida na origem, https://www.mja.com.au/journal/2003/179/8/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders
  (`mja-2003-179-8-letters.html`, sha256 `1450ab794315b4b798b81417be93e7bf08e734d0ffb5239a681ff6cd415d682d`). Licença: do periódico (não aberta); não vai à tela.
- **Frases:** "No fatalities have occurred from redback spider bite since antivenom became available in 1956". E, sobre a feitura: "Between 1955 and 1957, I dissected the venom glands of 590 redback spiders for the production of antivenom."
  Ele cita o próprio artigo de 1956: Wiener S, *Med J Aust* 1956; 1: 739–742, "Preparation of antiserum by the use of venom adsorbed on aluminium phosphate" (PMID 13321231; no Europe PMC com data de 1956-05-01; `epmc-wiener-1956-1961.json`, sha256 `dc6eb53c1914d5decc07e5cc1f79e85ec6e63abd45fb6c8b2a09fc2d21fedc08`). Esse artigo é sobre o **preparo** do soro, em maio de 1956.
- **Grau: FIRME para "1956"** (a data é de quem o fez, na revista médica da Austrália). O "1955" da base (o AFP de 2004: "Since 1955, no deaths…") parece ser o início da pesquisa; o Wiener dá 1955–1957 para a coleta do veneno. **A pauta pode trocar "in the 1950s" por "in 1956".**
- **A ressalva sobre "nenhuma morte":** o próprio Wiener diz "no fatalities"; o AFP 2004 (base) cita "a recent fatality following presumed redback spider bite" (não tratada com soro), e o caso de 2016 nunca foi confirmado. Dizer **"no confirmed death since"**.
- **A ressalva sobre o crédito ao soro (importante):** o estudo que provocou a carta, Isbister e Gray, *MJA* 2003; 179(2): 88–91 (cópia do leitor B, `fontes/b/mja-latrodectism2003.html`, sha256 `c04b281efa7f65a3f466b9ef3e8a4b80e58d5160e0b58b5c7d8fbd0c06b32930`), diz:
  "redback spider antivenom was introduced without controlled studies to demonstrate efficacy or safety" e "intramuscular antivenom was no better than no treatment when all patients were followed up over a week". Eles mesmos ressalvam a amostra pequena
  ("the study lacked power to definitively demonstrate no difference"), e as conclusões: "Intramuscular antivenom appears to be less effective than previously thought". O Wiener, na carta, defende o soro.
  **Portanto "o soro acabou com as mortes de redback" é inferência, não resultado**: as mortes antes do soro eram "at least 14" (base), e as picadas de redback raramente matam.
- **Frase segura:**
  > "The redback has its own antivenom, made in 1956 by a Melbourne scientist who dissected the venom glands of hundreds of spiders to do it. There hasn't been a confirmed death from a redback bite since. Though doctors still argue about how much of that is the antivenom."
- **Não afirmar:** "no one has died of a redback since 1956" sem "confirmed"; "the antivenom saved everyone" (o ensaio é contestado); "the last redback death was 2016" (a base já proíbe).

---

## 4. Quem são os outros 8 mortos: X25 = 6 e X26 = 2

### 4.1 O que cada código cobre, "nas palavras do código"

- **Fonte:** OMS, CID-10 (ICD-10), navegador da classificação, a versão que a página traz no cabeçalho: "WHO Version for ;2019-covid-expanded". Lido pelo endereço que o próprio navegador da OMS chama:
  `https://icd.who.int/browse10/2019/en/GetConcept?ConceptId=X25` (o `robots.txt` de `icd.who.int` deu **404**: não há regras; 1 pedido), em 18/11/2026. `icd10-2019-X25.html`, sha256 `5061aaa34863106a09c5a29e74ec0e01ed0dacf8fd014c9f67c522f2d73f56e2`.
  **Quem publica:** a Organização Mundial da Saúde. **Licença:** não lida (a página da OMS não a traz no fragmento): a **lista** de códigos vai na voz, com "the World Health Organization's classification"; texto na tela, só depois de ler a licença.
- **O bloco X20–X29**, "Contact with venomous animals and plants", "Incl.: … release of venom through fangs, hairs, spines, tentacles and other venom apparatus; venomous bites and stings". Os códigos, no que a OMS escreve:

| Código | Título (OMS) | "Incl." / "Excl." |
|---|---|---|
| X20 | Contact with venomous snakes and lizards | cobra, fer de lance, **Gila monster**, krait, rattlesnake, **sea snake**, snake (venomous), viper; Excl.: lizard (nonvenomous), snake, nonvenomous (W59) |
| X21 | Contact with venomous spiders | black widow spider, tarantula |
| X22 | Contact with scorpions | |
| X23 | Contact with hornets, wasps and bees | yellow jacket |
| X24 | Contact with centipedes and venomous millipedes (tropical) | |
| **X25** | **Contact with other venomous arthropods** | **ant, caterpillar** |
| **X26** | **Contact with venomous marine animals and plants** | **coral, jellyfish, nematocysts, sea anemone, sea cucumber, sea urchin**; Excl.: nonvenomous marine animals (W56), sea snakes (X20) |
| X27 | Contact with other specified venomous animals | |
| X28 | Contact with other specified venomous plants | |
| X29 | Contact with unspecified venomous animal or plant | sting (venomous) NOS, venomous bite NOS |

- **O que disso o roteiro pode dizer:** o X25 é "other venomous arthropods", e os exemplos que o código dá são **formiga e lagarta (caterpillar)**; o X26 é "venomous marine animals and plants", com **água-viva, coral, anêmona-do-mar, pepino-do-mar e ouriço-do-mar**.
  **O código não nomeia o carrapato.** A base pôs "carrapatos, formigas" e "água-viva etc." como glosa do leitor: **a de X26 se sustenta** (jellyfish é o exemplo da OMS); **a de X25 se sustenta só em parte**: "formigas" sim (OMS); **"carrapatos" vem de outras fontes** (Welton, a tabela "Carrapatos e formigas", 5 mortes em 2000–2013, secundária; a Tabela III de Turner, que lista "X23, X25" para as mortes por inseto/carrapato, com "Ticks 9%"), não do texto do código.
- **O que o código não diz:** **qual animal** matou cada uma das 8 pessoas (o ABS só dá o código): os "6 de X25" e os "2 de X26" **não se desdobram** em formiga, carrapato, lagarta, água-viva-caixa. O X20 inclui "sea snake" e "Gila monster", então as 35 mortes por "cobra" são "venomous snakes and lizards" (a base já avisa).
  O ABS declara usar CID-10 (cada tabela do ABS traz "ICD-10 code"), mas **a lista de códigos do próprio ABS não foi lida** (`abs-cod-latest.html` é da base): se o ABS usa uma versão com diferenças locais nos X20–X29, não sei; a definição acima é a da OMS.
- **Frase segura:**
  > "The other eight? Two died from marine animals — the official category lists jellyfish, coral and sea anemones. Six died from what the death codes call 'other venomous arthropods' — which means things like ants and caterpillars. The records don't say which animal it was."
  (Se a Sala quiser o carrapato: "…and, in the research on these deaths, ticks too." com a fonte da §4.2.)
- **Não afirmar:** "6 tick deaths" ou "2 box jellyfish deaths" (o código não diz); "spiders" (X21 = 0); que a "cobra" de X20 é só cobra.

### 4.2 A formiga jack jumper e o carrapato-da-paralisia, como causa de morte por anafilaxia

- **A formiga (jack jumper, *Myrmecia pilosula*): FIRME, por fonte oficial australiana e três resumos.**
  - **ASCIA**, artigo para profissionais "Jack Jumper Ant Allergy: a uniquely Australian problem", "Content updated July 2016" (`ascia-jja-hp.html`, sha256 `90d4694c30145e2daca096cbd5571962796f62de34f07647348213114496f23f`;
    https://www.allergy.org.au/hp/papers/jack-jumper-ant-allergy-a-uniquely-australian-problem): "Deaths from JJA sting anaphylaxis have occurred in Australia, with several recorded cases in recent years." E: "it is conceivable that JJA sting-related deaths are under-reported, listed instead as heart attacks or unexplained death."
    (Licença: © ASCIA; não vai à tela.) O FAQ de 2025 (§2.2): "the major cause of anaphylaxis from ant stings in Australia is the Australian Jack Jumper Ant (Myrmecia Pilosula)".
  - McGain e Winkel, *Toxicon* 2002 (**[R]**, `epmc-mcgain2002.json`, sha256 `21ee5b715fb85926f4b8152e10ed5da1eaa1c89938da7460bbc597894a159d1c`): "Six ant sting-related fatalities were identified, five in Tasmania and one in New South Wales." (1980–1999, todos homens de 40 a 80 anos, "most (5/6) had prior histories of jumper or bull ant (Myrmecia spp.) venom allergy", "none … carried injectable adrenaline").
  - Brown et al., *MJA* 2001 (**[R]**, `epmc-brown2001.json`, sha256 `1f5dc5dfa5a94d2b1fe2d4f85fa910053f61f9bdc391e0645ee95444058b8ff3`): "We describe four deaths attributed to stings by this ant between 1980 and 1999." (sul da Tasmânia).
  - Brown et al., *JACI* 2003 (**[R]**): "The jack jumper ant (Myrmecia pilosula) is responsible for greater than 90% of Australian ant venom allergy. However, deaths have only been recorded in the island of Tasmania." (**conflito de detalhe** com o McGain e Winkel de 2002, que contam uma morte em NSW: dizer "mostly in Tasmania".)
  - **O governo da Tasmânia** (o pedido citava): não li (nenhuma página estadual abriu; o `dpi.nsw.gov.au` e outros deram 403).
- **O carrapato-da-paralisia (*Ixodes holocyclus*): EM PARTE.**
  - Como **causa de morte por anafilaxia**, sim, mas o elo é da revisão de Turner 2017, Tabela III: "Ticks 9%" das mortes por inseto/carrapato (Mullins 2016), e "Squeezing tick bites associated with death in all tick cases" (ou seja: apertar o carrapato). O espécime não é nomeado na tabela.
  - **ANZCOR 9.4.3** (`anzcor-9-4-3-tick-bee.html`, sha256 `7fb8205cf96d05bd2fafd135e19c66dc72cf743da56b83ca190aeec107fac82e`): "In susceptible people, a tick bite may cause a severe allergic reaction or anaphylaxis, which can be life threatening." E: "by far the majority of medically important tick bites are due to allergic reactions"; e só "in rare cases" a paralisia neurotóxica "due to the venom of the Australian paralysis tick (genus Ixodes)".
  - **ASCIA FAQ 2025:** "Anaphylaxis can occur from the Australian paralysis tick, Ixodes holocyclus when the tick is disturbed".
  - **Não achei** fonte que conte morte humana por **paralisia** de carrapato (o caso recente). Os resumos de busca no Europe PMC (`epmc-tick-paralysis.json`) tratam de cães, gatos e morcegos. A revisão de Hall-Mendelin 2011 (PMC4084664) não abriu (a API do Europe PMC devolveu 500).
- **Frase segura:**
  > "The ants and ticks in that category can kill too — not with venom, but with allergy. Researchers have documented deaths from the jack jumper ant, mostly in Tasmania, and from tick bites."
- **Não afirmar:** que a formiga jack jumper matou alguém "este ano" ou "nos 6 do ABS" (o ABS não nomeia); "ticks paralyse and kill Australians" (a morte documentada é por alergia); o número de mortes por formiga depois de 1999 (não li).

---

## 5. A régua de fora: a Índia por habitante

### 5.1 O estudo que a OMS cita

- **Fonte:** Suraweera W, Warrell D, Whitaker R, Menon G, Rodrigues R, Fu SH, Begum R, Sati P, Piyasena K, Bhatia M, Brown P, Jha P. "Trends in snakebite deaths in India from 2000 to 2019 in a nationally representative mortality study." ***eLife* 2020; 9: e54076** (publicado em 07/07/2020; DOI 10.7554/eLife.54076; PMID 32633232; PMCID PMC7340498).
  Lido o resumo (`epmc-suraweera2020.json`, sha256 `363ad9361bab939f4639e6f740fc7873bd6064ec49c0382cf60232ce8041bc42`) e o **texto completo**, pelo XML do Europe PMC (`suraweera2020-fulltext.xml`, sha256 `59d24495543d56f1b0ee9fce7f3fdf273a4dba2df6321436cc2a6c21dd80a4d4`; 361 KB), em 18/11/2026.
- **Licença: FIRME, aberta.** No XML: "© 2020, Suraweera et al … https://creativecommons.org/licenses/by/4.0/ This article is distributed under the terms of the Creative Commons Attribution License, which permits unrestricted use and redistribution provided that the original author and source are credited."
  **O texto e as tabelas podem ir à tela, com o crédito "Suraweera et al., eLife, 2020 (CC BY 4.0)".**
- **O resumo:** "We analyzed 2833 snakebite deaths from 611,483 verbal autopsies in the nationally representative Indian Million Death Study from 2001 to 2014, and conducted a systematic literature review from 2000 to 2019 covering 87,590 snakebites."
  "We estimate that India had 1.2 million snakebite deaths (average 58,000/year) from 2000 to 2019." "The risk of an Indian dying from snakebite before age 70 is about 1 in 250". "More crudely, we estimate 1.11–1.77 million bites in 2015, of which 70% showed symptoms of envenomation."
  É a mesma figura que a OMS cita ("1.2 million … average of 58 000/year").
- **Como o número é feito** (do texto): a **autópsia verbal** (um médico lê o relato da família sobre a morte, em 611.483 mortes de uma amostra nacional) dá a proporção de mortes por cobra por ano (2001–2014); essa proporção é aplicada ao total de mortes da ONU (UN Population Division) para cada ano.
  Os anos de fora do estudo (2000 e 2015–2019) são **extrapolados** ("Deaths for 2000-2019 were calculated by extrapolating these annual deaths"). Mortes estimadas por ano, em milhares (Tabela 1 e texto): 54,0 (2000), 55,0, 55,3, 55,8, 55,6, 60,8, 62,7, 61,0, 57,4, 53,8, 52,4, 54,9, 59,2, 62,3, 61,2 (2014), 62,3 (2015), 62,0, 61,4, 60,3, 59,8 (2019); soma **1.167,2 mil** (a Tabela 2: 1.167).
  Faixa plausível de 2001–2014: 738,2 a 833,4 mil (807,5 no ponto central). **A incerteza principal, segundo os autores, é a classificação da causa, não os totais.**
- **A taxa que o próprio estudo dá:** "the average age-standardized snakebite death rate (using the Indian census population of 2001 …) was **4.8 per 100,000** population" (2001–2014; plausível 4,4 a 5,0), caindo 0,8 % ao ano.
- **O registro oficial indiano não serve de régua:** a Tabela 4 compara as notificações hospitalares do governo (15,5 mil mortes, 2003–2015) com as estimativas do inquérito: o governo cobre **10 %** ("% Government coverage 10%") das mortes em hospital que o inquérito estima; em Bihar, 1 %. Ou seja: **se a Índia só contasse o registro, a taxa seria uma fração da real.**

### 5.2 A conta, por habitante

Script `c_india_conta.py` (saída em `fontes/c/saida-c_india_conta.txt`, sha256 `f4b677b5b268215713429824dce38b5ed56ca0aed493869ae3d90f5ad8843af2`). Entradas gravadas: o eLife acima, a população do Banco Mundial e a base da Austrália.

- **População: Banco Mundial, indicador SP.POP.TOTL** (`wb-pop-ind-aus.json`, sha256 `7b15072913ac268836b2ec8ba8b5767320fe0cb199bd3a769f5710d6c342a0a0`; "lastupdated 2026-11-11"; 1 pedido à API, `api.worldbank.org/v2/country/IND;AUS/indicator/SP.POP.TOTL?date=2000:2025`;
  o robots.txt do host deu 502 duas vezes e 404 na terceira: sem regras). **Licença:** a página do catálogo do Banco Mundial diz "licenses datasets under the Creative Commons Attribution 4.0 International license (CC-BY 4.0). Many datasets are available under other licenses"
  (`wb-public-licenses.html`, sha256 `f7106582fe705d8ea31c2bd7ef726636942b870104a88d882563b16bcece3910`): **a licença do indicador em si não li**; a população só entra em conta, não vai à tela como tabela. (A base da Austrália usa a ERP do ABS, 257.890.800 pessoas-ano; a do Banco Mundial dá 257.903.579, a mesma até 0,005 %.)
- **Índia, 2000–2019:** população do Banco Mundial 1.057.922.733 (2000) a 1.389.030.312 (2019); **24,62 bilhões de pessoas-ano**; 1.167,2 mil mortes → **4,74 por 100.000 por ano** (taxa bruta; ano a ano: 5,10 em 2000, 4,21 em 2010, 4,31 em 2019). Com os 58.000 redondos: 4,71. A padronizada do eLife: 4,8. **Uma morte por cobra a cada ~21.000 indianos por ano.**
- **Austrália:**
  - **ABS X20 = 35 em 2016–2025** (a base) sobre 257,9 milhões de pessoas-ano = **0,0136 por 100.000 por ano** (1 em 7,4 milhões por ano). O X20 inclui lagartos venenosos e cobras-marinhas.
  - **Período mais perto do da Índia** (Welton, *Toxicon* 2017, NCIS 2000–2016, 35 mortes "ascribed or antecedent to a snake bite", base): 35 sobre 363,6 milhões de pessoas-ano (Banco Mundial) = **0,0096 por 100.000** (1 em 10,4 milhões).
- **A razão:** Índia bruta / Austrália (ABS 2016–2025) = **349 vezes**; Índia bruta / Austrália (Welton 2000–2016) = **492 vezes**; com a padronizada de 4,8: 354 e 499. Contando só as 16 mortes que Welton atribui diretamente à picada, ~1.080 vezes. **A faixa honesta: de 350 a 500 vezes; "hundreds of times" é seguro; "more than 300 times" é seguro.**

### 5.3 A conta se sustenta? Com as ressalvas ditas

**Sim, como ordem de grandeza.** O resultado não muda de ordem com: o período (2000–2019 contra 2016–2025 ou 2000–2016); a Austrália pelo ABS (registro de óbito) ou pelo NCIS (coronial); a Índia bruta ou padronizada; a fonte da população.
As ressalvas, para a voz ou a tela:
1. **Períodos diferentes** (a Índia, 2000–2019; a Austrália, 2016–2025 ou 2000–2016).
2. **Métodos diferentes:** a Índia é um **modelo** (inquérito de autópsia verbal, extrapolado ao total da ONU, com 2000 e 2015–2019 extrapolados); a Austrália é **registro** de óbito (ABS, certidão) ou **coronial** (NCIS).
   Se fosse só o registro, a Índia ficaria ~10 vezes menor (Tabela 4); então a razão **não é inflada** pelo método: a Austrália tem registro bom (o ABS e o NCIS dão 35 nos dois períodos).
3. **O lado da Austrália é um número pequeno** (35 mortes): uma morte a mais ou a menos muda a razão em cerca de 3 %. É por isso que a faixa (350 a 500) pesa mais que o ponto.
4. **Não prova que a medicina australiana é 350 vezes melhor:** a conta mistura o que morde (víboras e kraits na Índia; elapídeos na Austrália), quanta gente é mordida (§1.4: 150 a 240 vezes mais envenenados por habitante, conta grosseira), onde se vive e o acesso ao soro.
5. **Os dois números mudam a cada revisão** (o ABS 2025 é preliminar; o eLife tem faixa de 10 %).

**A frase segura, COM a conta** (a pauta §4.6 pôs a Índia fora; com a leitura, entra numa frase só, com os dois donos):
> "Snakebite kills somewhere between 81,000 and 138,000 people a year worldwide, the World Health Organization estimates, and India alone loses about 58,000 of them. Do the math per person and it's roughly one in 21,000 Indians every year. In Australia, it's about one in seven million."
(Em tela: "India, ~4.7 per 100,000 per year (Suraweera et al., eLife, 2020 · World Bank)"; "Australia, 0.014 (ABS, 2016–2025)". Dizer "roughly"/"estimates" e chamar de "our math".)

**A frase segura SEM a conta** (só a OMS: o intervalo do mundo e os ~58.000):
> "The World Health Organization estimates that snakes kill between 81,000 and 138,000 people every year, and that India alone lost around 58,000 a year between 2000 and 2019. Australia counts about three or four."
(O "three or four": ABS 3,5 por ano em 2016–2025; healthdirect "between 1 to 4".) A ficha da OMS, lida pela Sala em 17/09/2026: "Around 81 410 to 137 880 people die each year because of snake bites".

**Não afirmar:** "350 times" como número exato ou sem "roughly"; "Indians are 350 times more likely to die *of Australian-style* bites"; que a diferença é "o soro" (§1.4); "1.2 million Indians died" sem "estimated"; "per year" para o 58.000 do mundo todo (é da Índia).

---

## 6. O AIHW (*Injury in Australia*)

- **Tentei uma vez, como pedido.** O `robots.txt` de `www.aihw.gov.au` respondeu **HTTP 403** a 18/11/2026 (o leitor B, mais cedo, tinha recebido o desafio da Cloudflare, "Just a moment…", no mesmo arquivo). **Parei ali**, sem tentar outro cliente nem cabeçalho.
- **NÃO LIDO.** A Sala lê pelo navegador do app: https://www.aihw.gov.au/reports/injury/injury-in-australia (as internações por mordida e picada de animal; a base só tem a tabela de Welton, via comunicado da University of Melbourne, "EM PARTE"; os "about 12,000 times" das aranhas dependem dessa tabela).

---

## 7. O que a Sala precisa saber antes de o roteiro sair (resumo das mudanças)

1. **O "part of why" tem de incluir a exposição.** A metade que a leitura sustenta com mais força é "poucas pessoas são envenenadas" (835 em 10 anos, ASP-20), não "o soro". O soro e a bandagem entram como "part of why", com a ressalva dos próprios médicos (sem ensaio controlado; "no clear benefit" em campo; a taxa não mudou em 20 anos).
2. **Redback: 1956** (Wiener, 2003), com "no confirmed death" e a dúvida sobre o crédito ao soro (Isbister e Gray).
3. **A abelha:** a frase que a pauta (§5) proíbe ("Most bee deaths come from European honeybees") **pode voltar, reformulada e dita como alergia**: "honeybee, an import from Europe (1822), behind roughly three in four of fatal insect-sting reactions (1997–2013)". O 73 % é de segunda mão (Turner 2017 sobre Mullins 2016).
4. **X25 não é "carrapatos":** o código dá "formiga e lagarta". Carrapato e jack jumper entram por outras fontes (§4.2), e a formiga é principalmente Tasmânia.
5. **A Índia entra**, com "hundreds of times" (350 a 500) e as ressalvas de §5.3, ou só com a frase da OMS.
6. **Um erro de fonte oficial:** o "16 Australians … in the 16 years to 2016" do ANZCOR 9.4.1 não bate com o Welton que ele cita (35, das quais 16 diretas). Não usar.
7. **Dois números do governo que não se conciliam:** healthdirect "About 5 in 100 people bitten by a snake will be given antivenom" contra os 755 de 1.548 do ASP-20. Não usar nenhum como "chance de receber soro".
8. **Licenças:** ANZCOR, healthdirect, ASCIA e MJA são direitos reservados: **só o fato**, nunca o texto na tela. **Pode ir à tela com crédito:** o eLife (CC BY 4.0). A Turner 2017 é CC BY-NC-ND: nada de texto na tela (o canal é comercial); os fatos, sim.
9. **Para a Sala ler pelo navegador do app** (§8): o FAQ do `agriculture.gov.au` (1822); o `aihw.gov.au`; a página de produtos da CSL Seqirus; a data da vespa em `agriculture.vic.gov.au` ou `dpi.nsw.gov.au`; o Museums Victoria "antivenom" (redback e a lista de soros, que a base já tinha como Cloudflare).

## 8. O que ficou sem leitura, e por quê

| O que | O que tentei | Por quê ficou |
|---|---|---|
| Página do departamento federal (agricultura) sobre a abelha: o ano | `agriculture.gov.au`, robots.txt, 2 tentativas | **timeout** nas duas, já no robots.txt; parei. Só resumo de busca [S] ("around 1822") |
| CSL Seqirus: a lista de soros e do polivalente | `seqirus.com.au`, robots.txt, 2 tentativas | a **conexão caiu** nas duas; parei |
| *Australian Prescriber* ("Antivenom update", `nps.org.au`) e o *Safety and Quality* (`safetyandquality.gov.au`) | `nps.org.au`, robots.txt, 2 tentativas | **timeout** nas duas (o leitor B já tinha timeout no segundo site) |
| AIHW, internações | `aihw.gov.au`, robots.txt, 1 tentativa | **403** (item 6, pedido) |
| A vespa, fonte oficial (Agriculture Victoria, DPI NSW, DPIRD WA) | os três robots.txt | **403** nos três; `legacy.pbcrc.com.au` não resolveu o endereço |
| Museums Victoria (redback 1956; a lista de soros) | `museumsvictoria.com.au`, robots.txt | **403**; o `collections.museumsvictoria.com.au` já era Cloudflare no leitor B |
| eXtensionAUS (a abelha, 1822) | robots.txt | **403** |
| AgriFutures (a abelha) | robots.txt | a conexão caiu |
| CSIRO Publishing (`PC21064`, a abelha e as nativas) | robots.txt ok; a página | timeout e **503** |
| A tese do Newcastle ("Antivenom update") | robots.txt e página | **HTTP 202 com corpo vazio**: um desafio de robô; não contornei |
| O guia clínico da CSL (Julian White, 2013, no `biomedicalsciences.unimelb.edu.au`) | robots.txt | **403** |
| O Queensland Poisons Information Centre (o polivalente) | robots.txt | **403** |
| O governo da Tasmânia (formiga jack jumper) | não tentei outro host depois dos 403 | sem página estadual lida |
| Texto completo do Mullins 2016 (as 41 mortes por inseto, por espécie) | só o resumo (Europe PMC) e a revisão de Turner | paywall (Wiley) |
| Hall-Mendelin 2011 (carrapato-da-paralisia, mortes humanas) | texto completo, API do Europe PMC | **500** (o servidor, não recusa); sem tentar de novo |
| O texto completo do PLOS ONE 2017 sobre o nicho da vespa (PMC5513550; poderia dar o ano da chegada) | idem (1 timeout, 1 erro) | **500** |
| A comparação das mortes por cobra antes e depois do soro (1930) e da bandagem (1979) | EPMC, 2 consultas | **não existe nas fontes lidas** (zero resultado na segunda) |
| O primeiro nome "Struan" de Sutherland | — | só "Sutherland SK" no resumo |
| O texto de licença do indicador SP.POP.TOTL do Banco Mundial | página geral do catálogo | só a regra geral (CC-BY 4.0 com exceções) |

## 9. Pedidos feitos e arquivos

**75 pedidos de rede** no total (cada um no `_log-c.txt`), um por vez, a **26 hosts**: `www.ebi.ac.uk` (Europe PMC: 17 consultas da API, 3 textos completos, 1 robots.txt), `www.anzcor.org` (1 robots + 5 páginas), `www.resus.org.au` (1 + 1),
`www.healthdirect.gov.au` (1 + 3), `www.allergy.org.au` (1 + 2), `www.mja.com.au` (1 + 2), `icd.who.int` (1 + 1), `beeaware.org.au` (1 + 2), `api.worldbank.org` (3 robots + 1), `www.worldbank.org` e `datacatalog.worldbank.org` (1 + 1 cada),
e os que **recusaram ou não responderam** (só o robots.txt, ou a página): `www.aihw.gov.au` (403), `agriculture.vic.gov.au` (403), `www.dpi.nsw.gov.au` (403), `museumsvictoria.com.au` (403), `extensionaus.com.au` (403), `dpird-web.matrix.squiz.cloud` (403),
`biomedicalsciences.unimelb.edu.au` (403), `www.poisonsinfo.health.qld.gov.au` (403), `www.agriculture.gov.au` (timeout ×2), `www.nps.org.au` (timeout ×2), `www.seqirus.com.au` (conexão ×2), `agrifutures.com.au` (conexão),
`legacy.pbcrc.com.au` (DNS), `www.publish.csiro.au` (timeout e 503), `openresearch.newcastle.edu.au` (202 vazio ×2). Mais **10 consultas de WebSearch** (só para achar endereços).
O robots.txt de `api.worldbank.org` deu 502 duas vezes; um 502 é erro do servidor, não recusa (o leitor B tinha recebido 404 no mesmo arquivo mais cedo): tentei de novo mais tarde (3ª vez: 404 = sem regras) e segui.

Scripts: `scripts/c_baixar.py` (um pedido, lê o robots.txt, registra e para em 403/desafio), `c_epmc.py` e `c_epmc_info.py` (API do Europe PMC, com a espera de 10 s), `c_texto.py` e `c_pdf.py` (texto e trechos, sem rede),
`c_india_tabela.py` (a Tabela 1 e a 4 do eLife), `c_india_conta.py` (a conta da §5 e o anexo da §1.4), `c_sha.py` (os sha256 e o resumo do log). Os dados e as cópias: `midia/australia-animais/fontes/c/` (os `epmc-*.json` com prefixo meu são de §1 a §5; `epmc-abelhas*.json`, `livescience-*` e `censo/` são de outros agentes).
