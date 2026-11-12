COBERTURA: 10 de 10 — a lista fechada é a do pedido da Sala (`out/rio-columbia/_tmp/verificar-divergencias/pedido.md`): itens 1, 2 e 3, e os 7 subitens do item 4. Não saiu de script: foi derivada à mão do pedido, um item por subitem. Todos os 10 têm veredito.

# Laudo do verificador de fatos: as divergências do research · `rio-columbia` (vídeo 7)

- **Data-base:** 12/11/2026, hora de Brasília. Fontes lidas hoje; os voláteis não foram relidos nesta tarefa.
- **Objeto:** `roteiros/rio-columbia/roteiro-narrador.md`, sem mudança no git desde o commit aprovado (`c4eae16`). O sha256 do arquivo
  (LF, como no git) é `51ca194a9bdf…`. Não consegui reproduzir a conta do rótulo `c4788c7ab3be` que o pedido e o dossiê usam, mas o texto
  é o aprovado: `git status` limpo. A voz conferida é `out/rio-columbia/roteiro.md`. Lá estão, por extenso, as frases dos itens 1, 2 e 3.
- **Rede:** 6 pedidos, um por vez, com o User-Agent do canal: 3 buscas, a ficha da OSTI, o PDF da OSTI e as médias mensais do USGS
  14191000. A `corpora.tika.apache.org` não resolveu o DNS; não tentei de novo. Não tentei state.gov, CBC, congress.gov, NPCC nem YouTube.
- **Confissão de trabalho:** o meu `extrair.py` gravou, por engano, a cópia em texto do estudo da BC **dentro da pasta do `pesquisa-dados`**
  (`_tmp/pesquisa-dados/rede/bc/US-Benefits-from-CRT-June-20-13-2.pdf.txt`). Refiz o arquivo com o próprio script dele
  (`pdf_para_texto.py`, mesmo PyMuPDF, mesmo formato, cabeçalho com a data de hoje), sobre o mesmo PDF (sha256 `7564d2e7…`, que não
  mudou). Os trechos que o `conferir.py` dele procura estão lá. O PDF e as outras saídas dele não foram tocados.

NOTA: 7/10 — dos três itens que estão na voz, um está errado (o p25, "a year" e "which is per year", na conta que sustenta o porquê do
título), um está impreciso mas tem dono (o p8, os 60 %) e um está confirmado (o p37). Os 7 de tela têm conserto pronto.

## A tabela

| id | afirmação | veredito sobre a voz | o que a fonte diz | fonte |
|---|---|---|---|---|
| 1 | p8: "About 60 percent of the water that runs off the whole basin in a year comes down in May, June and July." | **IMPRECISA, MAS DEFENSÁVEL** (com dono na tela). Pelo ofício: CONFIRMADA nas duas fontes federais, DIVERGE da medida oficial | BPA, Reclamation e USACE, 2001, p. 4: "about 60 percent of the natural runoff in the basin occurs during May, June, and July". USGS 14105700, medido: 51,4 % (1879–1967), 53,2 % (1879–1900). Bacia inteira: menos que isso | OSTI, abaixo; `_dados/tabela-ano-do-rio-the-dalles.csv`; USGS |
| 2 | p25: "…40 to 150 million dollars a year in lost power" / "…the Canadian one, which is per year…" | **ERRADA** (DIVERGE do original) | BC 2013, p. 11: "(in a Called Upon year) … approximately 1,300-3,000 gigawatt hours with an estimated value of $40 to $150 million". Na mesma página: "expected to be used infrequently". O "per year" é do resumo do CRS | engage.gov.bc.ca, PDF de 25/06/2013, p. 11 |
| 3 | p37: "The cut was more than a third." | **FICA** (CONFIRMADA pela leitura da Sala) | Departamento de Estado, nota de 25/11/2024: "Beginning on August 1, the Canadian Entitlement decreased by 37%." | 2021-2025.state.gov, lida pela Sala no navegador do app |
| 4a | tela: o fim do Art. IV(3) | só tela: **"flood period"** | UNTS 542, p. 254: "…for the duration of the flood period for which the call is made." A CSG West diz "flood control period" | PDF da ONU, p. 6; conferido na imagem |
| 4b | tela: a folha de s53 | só tela: a frase inteira, desde "By 1930" | Desautel, §6: "By 1930, only one person remained on the rolls of the Arrow Lakes Band, and after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct, and the reserve lands reverted to the provincial Crown." | 2021 SCC 17, §6 ([2021] 1 S.C.R., p. 549) |
| 4c | tela: as médias diárias de The Dalles (s37) | só tela: **1961–2008**; a voz fica | código 1 do USGS ("Discharge is a Maximum Daily Average") em 48 anos, de 1961 a 2008 | `midia/rio-columbia/fontes/c/usgs-pico-14105700.rdb` |
| 4d | tela: 434,3 m e 439,5 m do Arrow (s32, s61) | só tela: **é PREVISÃO para 2018**, não medida de 2017; a voz fica | BC Hydro: "expected to refill … by the end of April 2018, 434.3 metres (1,425 feet) by end of May and 439.5 metres (1,442 feet) by the end of June". Medido em 2017 (WSC 08NE104): 435,14 m em 31/05, 438,94 m em 30/06, 439,52 m em 27/07 | `a__bchydro-ops-summary.pdf.txt`; `_tmp/pesquisa-dados/rede/eccc/wsc-diario-08NE104-2017.json` |
| 4e | tela: o valor-base de 1964 (s30) | só tela: **$254,400,000**, nunca $254,000,000; a voz ("about 254 million dollars") fica | UNTS 542, p. 306: "The purchase price of the entitlement shall be $254,400,000, in United States funds as of October 1, 1964"; p. 316: "$ 253,929,534.25, being the equivalent of the sum of $ 254,400,000" | PDF da ONU, p. 32 e 37; conferido na imagem |
| 4f | tela: os US$ 29,9 milhões das PUDs (s57) | só tela: **fora da tela**, ou atribuído à APPA; a voz não diz o número | APPA e The Star têm o mesmo texto, então valem por **uma** fonte: "a one-time payment totaling $29.9 million". O comunicado das PUDs não foi achado (a busca de hoje também não o achou) | `midia/rio-columbia/fontes/web/appa-2026-09-25-puds.txt`, `star-2026-09-30-puds.txt` |
| 4g | tela: o cartão da CBC (f117) | só tela: **CBC NEWS · FEB. 17, 2025**; a voz fica | YouTube, canal CBC News, "Could ending a water treaty help Canada fight U.S. tariffs?", uploadDate 2025-02-17 | `out/rio-columbia/_pesquisa/navegador-sala.md` (leitura da Sala; eu não reli) |

---

## Item 1 · p8, os "about 60 percent" em maio–julho

**A fonte primária existe, com base declarada só em parte.** O documento é *The Columbia River System: Inside Story*, 2.ª edição, abril de
2001, DOE/BP-3372. Os editores são a Bonneville Power Administration, o U.S. Bureau of Reclamation e o U.S. Army Corps of Engineers, as três
agências que operam o sistema. Está na p. 4 impressa (p. 7 do PDF):

> "The moisture that is stored during the winter in the snowpack is released in the spring and early summer, and about 60 percent of the
> natural runoff in the basin occurs during May, June, and July."

- URL: https://www.osti.gov/servlets/purl/1132870 (ficha: https://www.osti.gov/biblio/1132870). A cópia está em
  `out/rio-columbia/_tmp/verificar-divergencias/baixado/osti/inside-story-2001.pdf` (sha256 `678f41b9…`), e o texto, ao lado (`.txt`).
- **A base:** declara "natural runoff", isto é, o escoamento sem regulação, e "in the basin". **Não declara o período nem o ponto de
  medida.** É quase certamente de onde vem o "Approximately 60% of this runoff" do CRS, que não tem nota própria.
- A mesma página diz "about 25 percent of the Columbia River flow comes from Canada". Isso não colide com os 39 % da voz (p9), que são
  Birchbank sobre The Dalles: 39 % de ~195 mil cfs dá ~76 mil cfs, que sobre os 275 mil cfs da foz (CRS) dão ~28 %.

**A medida não reproduz os 60 % para "the whole basin".** Refiz as contas do zero (`conta60.py`, `conta60b.py`, `conta60c.py`, `birch2.py`),
com o volume de cada mês pesado pelos dias:

| ponto e período | maio–julho | abril–julho |
|---|---|---|
| The Dalles (USGS 14105700), 1879–1900, quase sem regulação nem irrigação | 53,2 % | 61,4 % |
| The Dalles, 1879–1967 (o número da pesquisa) | 51,4 % | 59,8 % |
| Willamette em Salem (USGS 14191000; baixado hoje), 1910–1967 | 15,5 % | — |
| The Dalles + Willamette, 1910–1967 (soma simples dos volumes) | ~47 % | — |
| Birchbank, B.C. (WSC 08NE049, bruto em `midia/…/a/wsc-mensal-08NE049.json`), 1938–1967, 30 anos completos | **58,9 %** | 63,0 % |

- The Dalles drena cerca de 9/10 da área da bacia. O que entra abaixo dela (o Willamette, o Cowlitz, o Lewis) é rio de chuva de inverno.
  Por isso, **a bacia inteira tem uma parte de maio–julho MENOR que a de The Dalles**: algo entre ~41 % e ~50 %, pela média de 275 mil cfs
  da foz (CRS). É estimativa minha, declarada como tal; não há medidor longo na foz antes das barragens.
- **O que a medida sustenta:**
  - "about half" do rio em The Dalles;
  - "about 60 percent" na parte canadense (Birchbank: 58,9 %);
  - "about 60 percent" em abril–julho em The Dalles.

  Ela **não** sustenta 60 % "of the whole basin" em maio–julho.

**O veredito sobre a voz:** IMPRECISA, MAS DEFENSÁVEL.
- A frase repete, com o "whole" a mais, o número das próprias agências federais (2001) e do CRS (2024). Nenhuma fonte diz o contrário em
  palavras: não é REFUTADA.
- Mas o dado oficial que o próprio vídeo usa no p9 e no p40 dá outro número. Quem baixar a série do USGS chega a "metade".
- É frase de cenário, não da tese. Fica de pé **só com o dono na tela**.

**A tela (s16, s17, s60):**
- texto: `≈ 60% OF THE BASIN'S NATURAL RUNOFF · MAY–JULY`;
- crédito: `Source: Bonneville Power Administration, Bureau of Reclamation & U.S. Army Corps of Engineers, 2001; Congressional Research
  Service, 2024`;
- **nunca** as barras de The Dalles sob o "≈ 60%", nem `MEASURED`.

**A troca mínima, se a Sala regravar o p25 (item 2) e quiser levar o p8 junto:** "the whole basin" (3 palavras) vira **"those mountains"**
(2 palavras), sem mexer no resto:

> "About 60 percent of the water that runs off those mountains in a year comes down in May, June and July."

- "those mountains" são as da frase de antes ("The Canadian part of the basin … is mountain country"). A medida é Birchbank, 58,9 %,
  1938–1967, antes das grandes barragens de armazenamento.
- A frase seguinte ("Most of the river's year arrives in one season") continua certa: em The Dalles, 51–53 % em maio–julho e 60 % em
  abril–julho.
- Com a troca, a tela vira `≈ 60% IN MAY–JULY · COLUMBIA AT BIRCHBANK, B.C., 1938–1967`, com o crédito `Alpha Point calculation: Water
  Survey of Canada (station 08NE049). Contains information licensed under the Open Government Licence – Canada.`
- **Uma precisão só na tela basta?** Basta para não mentir, porque a tela dá o dono. Não basta para a frase ficar exata.
- **Recomendação:** regravar o p8 só se o p25 for regravado. O custo maior é o relógio: regravar o p8 move tudo do p8 em diante, e não
  só do p25.

## Item 2 · p25, os US$ 40–150 milhões "a year" e "which is per year"

**O original**, lido no PDF do governo da BC: BC Ministry of Energy and Mines, *U.S. Benefits from the Columbia River Treaty – Past, Present
and Future: A Province of British Columbia Perspective*, June 25, 2013, p. 11 impressa (p. 17 do PDF). A URL é
https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/US-Benefits-from-CRT-June-20-13-2.pdf, e a cópia está em
`out/rio-columbia/_tmp/pesquisa-dados/rede/bc/…pdf` (sha256 `7564d2e7…`).

> "BC Hydro analysis estimated U.S. energy losses due to effective use at these facilities (in a Called Upon year) to be approximately
> 1,300-3,000 gigawatt hours with an estimated value of $40 to $150 million."

Na mesma seção, p. 10 impressa: "Called Upon Flood Control is expected to be used infrequently and only in very large snow pack years". O
CRS (R43287, nota 40, que aponta "British Columbia U.S. Benefits Study, p. 11") resume assim: "$40 million to $150 million per year in
lost benefits". **O "per year" é do resumo; o original fala do valor num ano em que o Canadá é chamado, e a BC espera que esses anos sejam
raros.**

**O veredito sobre a voz:** ERRADA, nas duas frases.
- "…40 to 150 million dollars **a year** in lost power": um ouvinte entende custo de todo ano, e o original diz "num ano de chamada".
- "Beside the Canadian one, **which is per year**, it looks cheap": é a base explícita da comparação, e ela é falsa. Os dois números são por
  evento: os US$ 4–34 milhões americanos são "per request" (CRS, nota 41), e os canadenses, "in a Called Upon year".
- Este parágrafo é a conta do porquê do título ("Why the U.S. Pays…"). Conta como afirmação de tese, não como periférica.

**Uma precisão só na tela não basta.** A voz diz "per year" com todas as letras, e uma tela com `IN A CALLED-UPON YEAR` contradiria a voz na
mesma cena.

**A troca mínima** (o resto do p25 fica igual, e a conclusão sobrevive, porque 37,6 é menor que 40, o piso de um único ano de chamada):

> "British Columbia's estimate is that relying on those calls would cost the United States 40 to 150 million dollars in lost power **in any
> year it calls**. Beside the American figure, which is per call, 37.6 million a year looks steep. Beside the Canadian one, **for a single
> year of calls**, it looks cheap."

As trocas:
- "a year in lost power" vira "in lost power in any year it calls": +3 palavras;
- "which is per year" vira "for a single year of calls": +2 palavras.

O "looks" protege o juízo: pagar 37,6 milhões todo ano sai mais barato que **um** ano de chamada pela conta da BC, e mais caro que uma chamada
pela conta americana.

**A tela de s42:**
- `PER CALL: $4–34 MILLION · U.S. ENTITY`;
- `$40–150 MILLION IN LOST POWER · IN A CALLED-UPON YEAR · BC HYDRO ANALYSIS, 2013`;
- `$37.6M PER YEAR`;
- crédito: `Source: Congressional Research Service, 2024; Government of British Columbia, June 25, 2013; U.S. Public Law 118-272`.

Nunca `PER YEAR` ao lado dos 40–150.

**A pergunta ao Lucas:** "A voz diz que a estimativa da BC (US$ 40 a 150 milhões) é 'por ano'. O original diz 'num ano em que os EUA
chamam o Canadá', e a BC espera que isso seja raro. Regravo o p25 com duas trocas curtas? Custa uma chamada na ElevenLabs (por volta de 240
créditos, estimativa por 0,48 por caractere) e refaz o relógio do p25 em diante."
- "Regravar o p25 (Recomendado)";
- "Regravar o p25 e o p8 juntos" (o item 1; o relógio se refaz do p8 em diante);
- "Não regravar": o vídeo sai com a frase errada na voz, e a tela não pode corrigir sem contradizê-la.

## Item 3 · p37, "The cut was more than a third"

**O veredito sobre a voz:** FICA, pela fonte que o pedido manda usar.
- A nota do Departamento de Estado de 25/11/2024 ("MEDIA NOTE · OFFICE OF THE SPOKESPERSON"), lida pela Sala no navegador do app em
  12/11/2026, diz: "Beginning on August 1, the Canadian Entitlement decreased by 37%."
- URL: https://2021-2025.state.gov/interim-measures-to-continue-columbia-river-treaty-coordination. A leitura está registrada em
  `out/rio-columbia/_pesquisa/navegador-sala.md`.
- Eu não reli: o state.gov recusa leitura automática.
- 37 % é mais que 33,3 %, então "more than a third" está certo.

**A tela:**
- `−37%` com `U.S. STATE DEPARTMENT, NOV. 25, 2024`.
- Os MW (1.141 → 660 → 550) e os aMW (454 → 305 → 225) **não** vão ao lado do −37 % como a conta dele. Pela tabela, são −42,2 % na
  capacidade e −32,8 % na energia, e a nota não diz qual medida usou. A média simples dos dois dá 37,5 %, mas isso é palpite meu e não vai
  à tela.

Não há troca nem pergunta.

## Item 4 · só de tela

**4a · o fim do Art. IV(3).**
- A tela diz **"for the duration of the flood period for which the call is made"**.
- Fonte: o texto oficial registrado na ONU, *United Nations Treaty Series*, vol. 542, No. 7894, p. 254 (p. 6 do PDF; conferido por mim na
  imagem, `unts-p6-topo.png`).
- A CSG West (`midia/…/a/crt-protocol-documents-csgwest.pdf`, que o laudo antigo usou) diz "flood control period" no IV(3), e "flood period"
  no IV(2)(b). É erro de transcrição dela.
- Crédito: `Source: Columbia River Treaty, Art. IV(3) (UN Treaty Series, vol. 542)`.
- A voz não cita o IV(3). As linhas F011 e F092 do laudo antigo param antes desse pedaço.

**4b · a folha de s53.**
- A folha leva a frase inteira do §6, para o "her" ter antecedente: "By 1930, only one person remained on the rolls of the Arrow Lakes Band,
  and after her death in 1956, the government of Canada declared the Arrow Lakes Band extinct …". O corte depois de "extinct" vai marcado
  com "…", porque o original continua: ", and the reserve lands reverted to the provincial Crown."
- Nunca "one Sinixt" nem "the last Sinixt": a Corte diz "one person … on the rolls of the Arrow Lakes Band".
- Crédito: `Source: Supreme Court of Canada, R. v. Desautel, 2021 SCC 17, para. 6`.
- A voz ("In 1956, the government of Canada declared the Arrow Lakes Band extinct.") confere.

**4c · s37, as médias diárias.**
- O rótulo é `1961–2008: DAILY AVERAGES`, e não 1974–2008.
- Refiz a conta no arquivo do USGS (`picos.py`): o código 1 ("Discharge is a Maximum Daily Average") aparece em 48 anos, de 1961 a 2008.
- Os 40 de 89 (1879–1967) também se recontam: dá 40.
- A média diária nunca passa do pico instantâneo. Os 3 anos de 1961–1967 acima de 600 mil cfs continuam acima; os outros 4 precisariam de
  80 a 204 mil cfs a mais num só dia. "40 of 89 years" fica, e a voz fica.
- Crédito: `USGS annual peak streamflow, The Dalles (14105700). 1961–2008: daily averages.`

**4d · s32 e s61, o nível do Arrow.**
- Os 434,3 m e 439,5 m são **previsão da BC Hydro para 2018**, não medida e não de 2017.
- A voz (p18 e p43, "the lakes caught part of it", "the river rises") só diz a forma da subida, e a forma está certa. A voz fica.
- Se pontos forem à tela, vão os **medidos de 2017** na estação aberta: `MAY 31, 2017: 1,427.6 FT (435.14 M)`, `JUNE 30, 2017: 1,440.1 FT
  (438.94 M)` e o máximo, `JULY 27, 2017: 1,442.0 FT (439.52 M)`.
- Conferi no JSON bruto da ECCC (`arrow.py`). O crédito é `Data: Environment and Climate Change Canada, Water Survey of Canada (station
  08NE104). Contains information licensed under the Open Government Licence – Canada.` Indicar a BC Hydro como contribuinte, "if possible".
- A série do site da BC Hydro não se usa: a licença dela não é aberta (`pauta-dados.md`).
- Se a previsão de 2018 for à tela, vai com `BC HYDRO FORECAST FOR 2018`, nunca como 2017.

**4e · s30, o valor de 1964.**
- A voz ("about 254 million dollars") e a tela `≈ $254 MILLION` ficam.
- Se a cifra exata for à tela, ela sai do oficial: `$254,400,000 AS OF OCT. 1, 1964 · PAID: $253,929,534.25 ON SEPT. 16, 1964`. Fonte: UN
  Treaty Series, vol. 542, p. 306 (as notas de 22/01/1964, 3(a)) e p. 316 (a nota de 16/09/1964, item 5). Conferi as duas na imagem
  (`unts-p32.png`, `unts-p37.png`).
- A aritmética fecha: 254.400.000 × (1 − 0,045 × 15/365) = 253.929.534,25 exatos. Com 254.000.000, a CSG West daria 253.530.273,97, e não
  bate com o pago.
- Nunca `$254,000,000`.

**4f · s57, os US$ 29,9 milhões.**
- A voz não diz o número ("in September 2026 they settled with the federal government"), e fica.
- Na tela, o recomendado é **deixar o número fora**. Ele só existe na APPA e no The Star, com o mesmo texto, que é o do comunicado das PUDs
  (25/09/2026), não alcançado. Duas cópias do mesmo texto valem por uma fonte.
- Se o redator quiser o número, ele vai atribuído: `$29.9 MILLION · ONE-TIME PAYMENT · MID-COLUMBIA PUDS, VIA AMERICAN PUBLIC POWER
  ASSOCIATION, SEPT. 25, 2026`.
- É volátil: relê-se antes do render.
- Para a Sala, no navegador do app: o comunicado nos sites da Chelan, da Douglas ou da Grant PUD. A busca de hoje só achou a APPA e o texto
  do Grant PUD de 2024.

**4g · f117, o cartão da CBC.**
- O cartão é `CBC NEWS · FEB. 17, 2025`, com o título "Could ending a water treaty help Canada fight U.S. tariffs?".
- A data é a de publicação no YouTube (uploadDate 2025-02-17), lida pela Sala nos metadados. A matéria da cbc.ca não foi lida (403), e a
  data dela pode ser outra. Se o cartão imitar a cbc.ca, a data continua sendo a do vídeo, e o crédito diz `CBC News (YouTube), Feb. 17,
  2025`.
- A ordem da voz confere: a CBC pergunta em fevereiro, e o ministro responde "In March 2025".

## Achados acionáveis

1. **[GRAVE] p25:** "a year" e "which is per year" contra "(in a Called Upon year)" → **CONSERTO:** "…40 to 150 million dollars in lost
   power in any year it calls. … Beside the Canadian one, for a single year of calls, it looks cheap." Na tela de s42, `IN A CALLED-UPON
   YEAR`. → **RAIZ: INSTRUÇÃO.** A frase foi checada no resumo do CRS, e não na p. 11 que ele cita. Número de estudo citado por resumo se
   confere no estudo.
2. **[MÉDIO] p8:** os 60 % "of the whole basin" sem base de período nem de ponto, e o dado oficial dá ~metade → **CONSERTO:** na tela, o
   dono e `NATURAL RUNOFF`, sem as barras de The Dalles. Na voz, se houver regravação, "those mountains" no lugar de "the whole basin". →
   **RAIZ: INSTRUÇÃO.** Proporção sazonal se mede na série antes de se afirmar sem dono.
3. **[MÉDIO] s30 e 4a:** a CSG West erra duas vezes o tratado ($254,000,000; "flood control period") → **CONSERTO:** toda folha e todo
   número do tratado saem da UNTS 542. → **RAIZ: INSTRUÇÃO.** A cópia de terceiro não é o documento (ofício §3.1).
4. **[MÉDIO] s53:** a folha só com a frase de 1956 deixa o "her" solto → **CONSERTO:** a frase de 1930 inteira (4b). → **RAIZ: PONTUAL.**
5. **[LEVE] s37, s32/s61, s57, f117:** rótulo de período, previsão tomada por medida, número de uma fonte só e data do cartão → **CONSERTO:**
   4c, 4d, 4f e 4g. → **RAIZ: PONTUAL.**

## A lista de nomes

| anônimo ou genérico | quem é | credencial | URL |
|---|---|---|---|
| "about 60 percent" (sem dono na voz) | Bonneville Power Administration, U.S. Bureau of Reclamation e U.S. Army Corps of Engineers | as três agências que operam o sistema federal do Columbia; *Inside Story*, 2.ª ed., abr. 2001, DOE/BP-3372, p. 4 | https://www.osti.gov/servlets/purl/1132870 |
| "British Columbia's estimate" | BC Ministry of Energy and Mines; a análise é da BC Hydro (a Canadian Entity) | estudo da província, 25/06/2013, p. 11 | https://engage.gov.bc.ca/app/uploads/sites/6/2012/07/US-Benefits-from-CRT-June-20-13-2.pdf |
| "The American agencies that run the treaty" | a U.S. Entity: o administrador da BPA e o comandante da Divisão Noroeste do USACE | o "per request" vem do CRS R43287, nota 41 | https://www.everycrsreport.com/reports/R43287.html |
| "The cut" (p37) | U.S. Department of State, Office of the Spokesperson | media note, 25/11/2024 | https://2021-2025.state.gov/interim-measures-to-continue-columbia-river-treaty-coordination |

## Os dois padrões

1. **O resumo no lugar do original.** O CRS foi a ponte das duas falhas da voz: tirou o "in a Called Upon year" do estudo da BC e repetiu os
   60 % das agências sem a palavra "natural". Toda afirmação que o laudo antigo apoiou só no CRS, com nota apontando outro documento, merece
   a mesma volta ao original.
2. **A cópia de terceiro no lugar do documento.** A transcrição da CSG West diverge da UNTS duas vezes. Atributo de documento se confirma
   no texto de quem o guarda.

## A lista de DECISÃO DO LUCAS PENDENTE que esta checagem tocou

- Regravar o p25 (item 2): sim ou não.
- Regravar o p8 junto (item 1): sim ou não.
- Enquanto ele não responde, a tela segue as linhas acima, que valem com a voz de hoje e com a voz trocada. A única diferença é o texto de
  s17 no item 1.

## Os voláteis desta checagem

- O −37 % é fato fechado (nota de 2024): não muda.
- Os US$ 29,9 milhões das PUDs crescem se sair o comunicado e se zeram se o acordo for desfeito. Relê-se antes do render.
- O cartão da CBC só muda se o vídeo sair do ar. Relê-se antes da publicação.

VEREDITO: FAIL — DIVERGE na conta que sustenta o porquê do título (p25, "a year" e "which is per year", contra "in a Called Upon year"). Ele
passa a PASS com a regravação do p25 na troca acima. Sem ela, continua FAIL: erro factual não vira ressalva por prazo, e publicar assim é
decisão do Lucas, registrada como tal.
