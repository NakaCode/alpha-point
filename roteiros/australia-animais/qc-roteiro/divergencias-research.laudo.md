# Laudo do `verificador-de-fatos`: as divergências do research que tocam a voz gravada (`australia-animais`, vídeo 8)

COBERTURA: 7 de 7 — a lista é fechada pelo pedido da Sala (`out/australia-animais/_tmp/verificar-divergencias/pedido.md`): as três frases
marcadas "TOCA A VOZ" em `out/australia-animais/_pesquisa/pauta-dados.md` (f158, f124, f199), partidas à mão em 7 afirmações checáveis
(número, data, termo). Não é releitura do roteiro inteiro: o resto do texto está no laudo de antes (`fatos.laudo.md`, 244 de 244), que este
não substitui nem edita.

NOTA: 8.5/10 — as três frases se sustentam na fonte; duas pedem precisão na tela, e uma (f199) usa um termo ("supply") que a fonte não usa.

Revisão julgada: `bfd94a54b442`

> O carimbo acima foi posto pela Sala em 19/11/2026, ~02:5x, para o `gate.mjs --derivados`: o pedido deste laudo citava o texto falado
> `bfd94a54b442`, e as três frases julgadas são dele.

- **Data-base:** 19/11/2026, ~01h30 (Brasília). Fontes: as cópias locais de `midia/australia-animais/fontes/` e quatro leituras de hoje pela
  rede (abaixo), cada uma depois do robots.txt do host, um pedido por vez, com o User-Agent do canal. Cópias de trabalho em
  `out/australia-animais/_tmp/verificar-divergencias/`.
- **Sem gasto, sem commit, sem `regie`.** Nada foi editado além deste arquivo e da pasta de trabalho.

## A tabela

| id | afirmação (voz) | veredito | o que a fonte diz | fonte |
|---|---|---|---|---|
| f158a | "Redback bites killed at least 14 people before that antivenom arrived" | CONFIRMADA | "Before the introduction of redback spider antivenom in Australia, at least 14 deaths had been reported." (cita Wiener 1961) | Winkel et al., *Aust Fam Physician* 33(3), mar. 2004, p. 154 — `midia/australia-animais/fontes/b/racgp-winkel2004.pdf`; https://www.racgp.org.au/getattachment/c01fb190-92d3-4596-beef-f9007668b97c/20040311winkel.pdf |
| f158b | "…arrived, in 1956" | CONFIRMADA | Wiener, quem fez o soro: "No fatalities have occurred from redback spider bite since antivenom became available in 1956". O artigo dele sobre o preparo do soro é de maio de 1956 (*MJA* 1956;1:739–742, PMID 13321231). Winkel 2004 **não dá o ano do soro**: "Since 1955" é o ano desde o qual não houve morte relatada, o que fecha com um soro de 1956. | `midia/australia-animais/fontes/a/mja2003-redback.txt` (https://www.mja.com.au/journal/2003/179/8/latrodectism-prospective-cohort-study-bites-formally-identified-redback-spiders); Europe PMC, consulta de hoje (`out/australia-animais/_tmp/verificar-divergencias/epmc-wiener1956.json`) |
| f158c | "…and there's been no confirmed death since" | CONFIRMADA (com ressalva, no item 1) | Winkel 2004, a frase inteira: "Since 1955, no deaths had been reported until a recent fatality following presumed redback spider bite in northern New South Wales that was not treated with antivenom. **In this case, however, the cause of death occurred a week after the bite and was not clearly related to the envenomation syndrome.**" O caso de abril de 2016: "the exact cause of the young man's death is not known, reports the Sydney Morning Herald. It would only be known after several weeks." ABS: X21 (aranhas) = 0 em 2016 (dado final) e em todos os anos até 2025. NCIS 2001–2021, de segunda mão: "Not a single death from a spider bite was recorded in the timeframe the report covers". | Winkel 2004 (acima), p. 154–155; IBTimes Australia, 13/04/2016, https://www.ibtimes.com.au/redback-spider-back-kills-22-year-old-aussie-man-1512451 (lido hoje; cópia em `out/australia-animais/_tmp/verificar-divergencias/ibtimes-burleigh.html`); `out/australia-animais/_dados/serie-abs-mortes-2016-2025.csv`; ScienceAlert, 21/08/2025 (`midia/australia-animais/fontes/b/sciencealert-deadliest.html`) |
| f124a | "That same national study found fewer than a hundred bites a year that injected venom" | CONFIRMADA na média e na mediana · imprecisa ano a ano | "Systemic envenoming occurred in 835 patients (54%; median, 87 patients per year; IQR, 62–102 per year; Box 1)". 835 ÷ 10 = 83,5 por ano; mediana 87. O quartil de cima é 102: em cerca de um quarto dos anos (2 ou 3 de 10) o estudo passou de 100. | Johnston et al., *MJA* 2017;207(3) (ASP-20), `midia/australia-animais/fontes/c/mja-asp20.txt`; https://www.mja.com.au/journal/2017/207/3/australian-snakebite-project-2005-2015-asp-20 |
| f124b | "…far fewer than earlier estimates had suggested" | CONFIRMADA | "Snake envenoming is infrequent in Australia, and much less common than previous annual estimates suggested." E antes: "It was previously estimated that up to 3000 people were bitten by snakes in Australia each year." | ASP-20 (acima), Conclusion e Introduction |
| f199a | "In January 2026, the park said…" | CONFIRMADA | "Date Published: January 13, 2026" | Australian Reptile Park, "Covid Aftershock Impacts Life-Saving Funnel Web Venom Program", `midia/australia-animais/fontes/b/rp-covid.html`; https://www.reptilepark.com.au/about/zoo-news/covid-aftershock-venom-program |
| f199b | "…it was down to about half its usual supply" | DIVERGE (no termo; periférica) | "the Australian Reptile Park is now operating at around half of its usual funnel-web spider capacity, one of the lowest numbers seen in the Park's history." O "half" é de **aranhas**. Do veneno, o parque diz só "the amount of venom that can be collected is currently limited", sem fração; do estoque de soro, nada. | idem |

## Item 1 · f158 (s58, p48.3 · 11:37,2–11:43,9)

> "Redback bites killed at least 14 people before that antivenom arrived, in 1956, and there's been no confirmed death since."

**A voz: FICA.** Não precisa de troca.

- **O "confirmed" se sustenta, e mais do que a pesquisa achou.** A frase de Winkel 2004 que o pedido citou está cortada: a seguinte diz que
  a morte "presumed" do norte de NSW não foi tratada com soro, veio uma semana depois da picada e "was not clearly related to the
  envenomation syndrome". A própria fonte da ressalva a desfaz.
- **O caso de abril de 2016** é o de um homem de 22 anos de Sydney, picado numa caminhada no litoral norte de NSW, tratado de um abscesso no
  hospital de Nambour e morto dois dias depois da alta. A cobertura de 13/04/2016 dá a causa como **não conhecida** ("the exact cause of
  the young man's death is not known", atribuído ao *Sydney Morning Herald*; a família disse que ela só se saberia em semanas).
  - Em nenhuma fonte achei confirmação posterior: nem achado de legista, nem revisão médica.
  - O ABS, que codifica a causa pelo atestado e pelo legista, tem X21 = 0 em 2016 (dado final) e em 2017.
  - O NCIS, o sistema dos legistas, dá zero morte por aranha de 2001 a 2021 (de segunda mão, pela ScienceAlert).
  - Quem afirma a morte sem ressalva é só o comunicado da Universidade de Melbourne (Pursuit, 17/01/2017: "A man died from a red back
    spider bite in April 2016"). É texto de divulgação, sem fonte citada, e o caso está fora do período do estudo que ele divulga. É a
    frase que um comentarista pode citar contra o vídeo, e é o que o "confirmed" já cobre.
- **1956 ou 1955:** não há conflito. 1956 é o ano de quem fez o soro (Wiener 2003) e do artigo dele sobre o preparo (maio de 1956). O
  "Since 1955" de Winkel conta as mortes e não dá o ano do soro. A voz fica com 1956.
- **O que a tela diz:** "AT LEAST 14 DEATHS BEFORE 1956 · NO CONFIRMED DEATH SINCE", com `Source: Winkel et al., Australian Family
  Physician, 2004; Wiener, MJA, 2003`. **O "CONFIRMED" nunca sai.** Se a régua quiser o lastro de hoje, com o crédito do ABS:
  "SPIDER DEATHS, 2016–2025: 0". Nada do caso de 2016 na tela, nem nome nem data: é um caso não confirmado, e a vítima não é espetáculo.
- **É volátil:** o "since" muda se um legista confirmar uma morte por redback. Reconferir o ABS antes de publicar.
- **Pergunta ao Lucas:** nenhuma.

## Item 2 · f124 (s46, p38.5 · 8:48,5–8:55,8)

> "That same national study found fewer than a hundred bites a year that injected venom, far fewer than earlier estimates had suggested."

**A voz: IMPRECISA, MAS DEFENSÁVEL.** A precisão na tela basta.

- **É verdade como número típico:** a média é 83,5 e a mediana 87, as duas abaixo de 100. **Não é verdade ano a ano:** o intervalo
  interquartil (62–102) põe uns 2 ou 3 dos 10 anos acima de 100. Quem ouve "a year" entende "por ano, em geral", e a imprecisão não muda a
  tese ("rare to begin with"): mesmo o pior ano fica na casa de 100, contra as "up to 3000" picadas das estimativas antigas.
- **Uma segunda nuance, só de registro:** o ASP-20 conta os pacientes **recrutados** (171 hospitais, participação voluntária). Os autores
  dizem que ele cobre "a very large proportion" das picadas do país e que "some patients may have been missed". O "found" da voz já põe o
  número no estudo, e isso basta.
- **O que a tela diz** (no lugar de "< 100 ENVENOMINGS A YEAR · 2005–2015"): **"UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY
  2005–JUNE 2015)"**, ou, mais curto, **"AVERAGE: UNDER 100 A YEAR · MEDIAN 87"**. Crédito `Source: Johnston et al., Medical Journal of
  Australia, 2017 (ASP-20)`. O "ON AVERAGE" ou o "MEDIAN" tem de estar no rótulo.
- **Troca de voz, se o Lucas quiser regravar** (+2 palavras; o que vem antes e depois, igual):
  "That same national study found, **on average,** fewer than a hundred bites a year that injected venom, far fewer than earlier estimates
  had suggested." Não recomendo regravar só por isso.
- **Pergunta ao Lucas:** "A voz diz 'fewer than a hundred bites a year'. O estudo dá 87 por ano na mediana, mas em 2 ou 3 dos 10 anos passou
  de 100. Ponho 'ON AVERAGE' na tela e não regravo?"

## Item 3 · f199 (s71, p58.4 · 14:55,5–15:00,5)

> "In January 2026, the park said it was down to about half its usual supply."

**A voz: IMPRECISA, MAS DEFENSÁVEL NO CONTEXTO.** A tela tem de dizer **aranhas**.

- **No parágrafo 58, "supply" tem referente:** "the park needs spiders, and it gets them from its neighbors" → "catch the funnel-webs…
  and bring them in" → "almost no spiders were donated" → "down to about half its usual supply". Lida em sequência, a frase fala do
  suprimento de aranhas, e é isso que a fonte diz ("around half of its usual funnel-web spider capacity").
- **O risco é a frase solta.** A frase p58.1 fala de "a single vial", e o p57 diz "the only supplier of funnel-web venom for antivenom". Quem
  pega a frase isolada (um corte, uma legenda, um comentário) ouve "metade do soro", e isso a fonte não diz: o parque fala de aranhas, diz
  que o veneno colhido "is currently limited", sem número, e não fala do estoque de soro. Seria um alarme sobre um remédio, numa marca que
  não faz sensacionalismo (`marca/voz.md` §2).
- **O que a tela diz** (no lugar de "JAN. 2026: ABOUT HALF THE USUAL SUPPLY"): **"JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS"**,
  com `Source: Australian Reptile Park, Jan. 13, 2026`. **Nunca "SUPPLY" sozinho, nem "ANTIVENOM" ou "VENOM" junto do "HALF".**
- **Troca de voz, se o Lucas quiser regravar** (a frase de antes e a de depois, iguais):
  - "In January 2026, the park said it was down to about half its usual **number of spiders**." (+2 palavras; a recomendada, se regravar);
  - "In January 2026, the park said it was down to about half its usual **spiders**." (mesmo número de palavras, menos natural).
  Com a tela ancorada em aranhas, não recomendo regravar só por isso.
- **Pergunta ao Lucas:** "A voz diz 'half its usual supply'. O parque fala de metade das aranhas, não do soro, e no parágrafo a frase vem
  logo depois das aranhas doadas. Ponho 'FUNNEL-WEBS' na tela e não regravo?"

## Achados acionáveis

1. **[MÉDIO] f199, a tela** → CONSERTO: "JAN. 2026: ABOUT HALF THE USUAL NUMBER OF FUNNEL-WEBS", no lugar de "…THE USUAL SUPPLY" (o dossiê,
   f199, e o `textos-tela.json` quando nascer). Voz, opcional: "…about half its usual number of spiders." → RAIZ: PONTUAL (o "supply"
   resumiu o "spider capacity" da fonte num termo mais largo que ela).
2. **[LEVE] f124, a tela** → CONSERTO: "UNDER 100 A YEAR ON AVERAGE · 835 IN 10 YEARS (JULY 2005–JUNE 2015)". Voz, opcional: "found, on
   average, fewer than a hundred bites a year…" → RAIZ: INSTRUÇÃO (número "por ano" tirado de média ou mediana leva o "on average" ao
   menos na tela; o intervalo interquartil estava na mesma frase da fonte).
3. **[LEVE] f158, o registro** → CONSERTO: nada na voz nem na tela. No dossiê e na pauta de dados, a citação de Winkel 2004 leva a frase
   seguinte ("In this case, however, the cause of death occurred a week after the bite and was not clearly related to the envenomation
   syndrome"), para a ressalva não voltar na próxima rodada → RAIZ: INSTRUÇÃO (citação usada como ressalva se lê até o fim do parágrafo).

## A lista de nomes (para as atribuições)

- **Saul Wiener** (1923–2010), oficial de pesquisa dos Commonwealth Serum Laboratories (1952–1958), quem fez o soro do redback; AM em 2010
  "for service to science, and to medical research through contributions to the development of the Redback Spider and Stonefish
  antivenom". Encyclopedia of Australian Science, https://eoas.info/biogs/P005952b.htm (lido hoje; cópia em
  `out/australia-animais/_tmp/verificar-divergencias/eoas-wiener.html`). A página dá só "in the 1950s", sem o ano.
- **Kenneth D. Winkel**, Australian Venom Research Unit, Universidade de Melbourne: primeiro autor do AFP 2004 (as 14 mortes) e do *Toxicon*
  2006 (os anos dos soros).
- **Ronelle Welton**, Australian Venom Research Unit, Universidade de Melbourne: a pesquisadora do Pursuit de 17/01/2017. A frase da morte
  de 2016 é do texto da página, não dela entre aspas.
- **Christopher I. Johnston e Geoffrey K. Isbister** (ASP-20, *MJA* 2017): primeiro e último autor do estudo nacional das cobras.

## Não conferido (para a Sala, no navegador do app, se quiser trocar a fonte de segunda mão do caso de 2016)

- **The Guardian**, abril de 2016 ("Sydney man dies after redback spider bite, although not yet clear bite to blame"): o robots.txt de
  `www.theguardian.com` veta `anthropic-ai`, `ClaudeBot`, `Claude-SearchBot` e `Claude-User` (`Disallow: /`). Não li a página nem a
  republicação dela em outro site.
- **The Conversation** ("The truth about spider bites in Australia", 2017): o robots.txt de `theconversation.com` veta os agentes da
  Anthropic. Não li.
- **O *Sydney Morning Herald*** de 12–13/04/2016, a fonte primária do "exact cause … not known" (li a frase citada pela IBTimes). Não tentei.
- **O achado do legista**, se houve, no tribunal de legistas do estado onde ele morreu. O NCIS e os governos estaduais já recusaram neste
  vídeo; não tentei.
- **National Archives of Australia** (`www.naa.gov.au`, a página dos soros da CSL): o robots.txt não respondeu em 30 s. Não insisti; não faz
  falta para o 1956.
- Nada disso muda o veredito: o "confirmed" se sustenta sem eles.

## Os voláteis

- f158, "no confirmed death since": não cresce (é zero); zera com um achado de legista ou um ABS futuro com X21 > 0. Reconferir o ABS antes
  de publicar.
- f199: datado na voz ("In January 2026"). A data protege a frase, e a tela leva a data.

## Os dois padrões

1. **A ressalva lida pela metade.** A divergência de f158 nasceu de uma citação cortada antes da frase que a desfaz (Winkel 2004). Em f124,
   o intervalo que pede o "on average" estava na mesma frase da fonte.
2. **O termo da fonte trocado por um mais largo.** "Spider capacity" virou "supply"; "median, 87 per year" virou "fewer than a hundred a
   year". Nos dois, a voz se sustenta no contexto, e quem devolve o termo estreito é a tela.

## DECISÃO DO LUCAS PENDENTE que tocou esta checagem

- Regravar ou não f124 e f199. A recomendação deste laudo é **não regravar**: consertar os dois na tela e deixar f158 como está.

VEREDITO: RESSALVA
