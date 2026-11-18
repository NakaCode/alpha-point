# O cético: Jackson Hole (`jackson-hole`), vídeo 8 (17/11/2026)

**Veredito: DERRUBADO. Nota: 4,0** (a do `estrutural.md` era 6,5).

**Por quê, em uma linha:** o paradoxo (97 % de terra pública, 3 % privada, o condado mais rico do país) não é a nossa descoberta. É a
explicação de praxe do lugar, e em 2026 ela já foi contada como eixo por um vídeo longo de 460 mil views (os nossos 3 atos, na mesma
ordem), por um de 2,2 milhões e por pelo menos sete canais do enxame. Um deles saiu **hoje**, com o nosso método: canal de geografia,
medidas próprias, NASA GIBS. E o título de trabalho erra em duas palavras: "Jackson Hole" (é o condado, e um terço dele é Yellowstone)
e "Nobody Can Buy" (o Estado vendeu uma milha quadrada de dentro do parque por US$ 100 milhões em 2024).

- **Título que defendo, se a Sala insistir no lugar:** "Why One Square Mile of Jackson Hole Cost $100 Million" (53 car.). É outro
  ângulo, e a colisão dele **não foi medida** (os 30 créditos acabaram antes). Detalhe na seção 6.
- **O ponto mais grave (K1):** o ângulo está ocupado. "Why Nobody Wants to Visit Jackson Hole, Wyoming Anymore" (Paul McAllister,
  126 mil inscritos, 08/08/2026, 38 min, **460.461 views**) conta exatamente Rockefeller, os 97 %, os 3 %, a renda e os trabalhadores
  que vêm de Idaho. E "Why America's Richest County Is in Its Emptiest State" (8-Bit Atlas, publicado hoje, 17/11/2026) faz o mesmo
  com mapas e medidas próprias, como nós.

Como foi feito: leituras de 17/11/2026, das 20:55 às 21:25 (hora de Brasília). Os scripts estão em
`out/_pautas/video-8/_trabalho/cetico-jackson-hole/`. Python só em arquivo. Nenhum navegador, nenhum crédito pago fora do vidIQ.
Fontes e APIs abertas, um pedido por vez, com o User-Agent do canal. O que o robots.txt veta não foi lido (seção 1, nota).

---

## 1 · Os fatos que seguram o paradoxo e o gancho

| # | Fato | Fonte (lida em 17/11/2026) | Veredito |
|---|---|---|---|
| F1 | O condado de Teton tem 4.216,5 mi². **Privado: 116,6 mi² (2,77 %).** Florestas nacionais (USFS): 2.134,1 (50,6 %). NPS: 1.907,7 (45,2 %). USFWS (o refúgio dos alces): 38,6. BLM: 4,1. Estado: 7,4 + 1,3 (Game & Fish). Governo local: 1,1. "Outro": 5,6. **Público: 97,1 %.** | Teton County Community Wildfire Protection Plan, ago/2014, p. 14, tabela "Land ownership": https://gacc.nifc.gov/gbcc/dispatch/wy-tdc/documents/information/education-prevention/2014_CWPP_May20.pdf | **CONFERE** (o dado é de 2014; a venda do Kelly, F7, só passou terra estadual para federal, e o total público não muda) |
| F1b | "Over 97 percent of the 2,697,000 acres of land in Teton County are federally or state owned or managed." | Advisory Council on Historic Preservation (federal; página sem data): https://www.achp.gov/node/9807 | **CONFERE** |
| F1c | "97% of land in Teton County is preserved by federal agencies: 45% National Park Service, 51% National Forest Service, 1% National Elk Refuge"; "42% of all deeded land is under a conservation easement". A mesma apresentação diz "97% **of the valley**" noutra folha. | Apresentação a uma comissão do Legislativo do Wyoming, 2024 (autor não identificado no PDF): https://wyoleg.gov/InterimCommittee/2024/S37-202405298-06JacksonHoleWorkingPresentationupdated.pdf | **CONFERE** o 45/51/1. Os 42 % sob servidão ficam **a confirmar** (sem fonte primária). A troca de "condado" por "vale" mostra de onde vem a confusão (K3). |
| F1d | **Um terço do "97 %" é Yellowstone**, que não fica em Jackson Hole: 1.388,8 mi² = **32,9 % do condado**. O Grand Teton, o parque de Rockefeller: 484,4 mi² = 11,5 %. A Parkway JDR: 0,9 %. Os três juntos: 45,3 %, que bate com o NPS da tabela F1 (45,2 %). | Conta nossa: os limites oficiais do NPS (Land Resources Division, FeatureServer) cruzados com o condado (TIGERweb, Census), em Albers equivalente. O condado deu 4.217,3 mi², igual ao Gazetteer 2024 (F9). Script: `geo_areas.py` | **CONFERE** (medida nossa) |
| F2 | Renda pessoal por pessoa (PCPI) do condado em 2024: **US$ 532.903** (2023: 500.556; 2022: 440.019). Renda pessoal total: US$ 12,4 bi. | BEA, pela série PCPI56039 do FRED: https://fred.stlouisfed.org/graph/fredgraph.csv?id=PCPI56039. O release da BEA de 05/02/2026 cita "$12.4 billion (Teton County, WY)": https://www.bea.gov/sites/default/files/2026-02/lagdppi0226.pdf | **CONFERE** |
| F2b | "1º dos EUA": entre os rivais de praxe, o seguinte é Summit, UT (US$ 280.510). Depois vêm Pitkin, CO (275.044), Manhattan (217.075), Blaine, ID (202.612) e Marin, CA (190.891). Teton tem 1,9 vez o segundo. | FRED/BEA, séries PCPI de Teton e de 10 rivais (`fred_pcpi.py`) | **CONFERE EM PARTE.** A tabela nacional inteira não foi lida: o robots.txt de apps.bea.gov veta o `/regional/zip/` e o `/regionalcore/` do BEARFACTS, e não foram contornados. |
| F2c | **A renda mediana dos domicílios** do condado em 2024 é **US$ 151.604** (EUA: 81.604). Os "mais de meio milhão por pessoa" são uma média, puxada pela renda de capital de quem declara residência lá. | Census SAIPE, pelo FRED: https://fred.stlouisfed.org/graph/fredgraph.csv?id=MHIWY56039A052NCEN | **CONFERE**, e enfraquece o gancho (K4) |
| F3 | População: 23.330 (base de 2020) e **23.333 em 2025, +3 pessoas em 5 anos**. Saldo migratório doméstico de 2021 a 2025: **−1.267**. No mesmo período, Teton, ID (Driggs e Victor, do outro lado do passo), foi de 11.637 a 13.254 (**+13,9 %**), e Lincoln, WY, cresceu 8,2 %. | Census, estimativas de condados, safra 2025: https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv (`pop_serie.py`) | **CONFERE** (estimativa, com margem) |
| F4 | Dos 19.241 empregos principais com local de trabalho no condado em 2024, **52,9 % são de quem mora fora dele**: 21,2 % em Idaho (13,5 % só em Teton, ID) e 18,2 % noutro condado do Wyoming. Em 2013 eram 41,7 %. Os empregos cresceram 39 % de 2013 a 2024; os trabalhadores que moram no condado, 12 %. | LEHD LODES 8 (Census, JT01), arquivos `wy_od_main` e `wy_od_aux`: https://lehd.ces.census.gov/data/lodes/LODES8/wy/od/ (`lodes_teton.py`) | **CONFERE** (medida nossa). Limites: o endereço é o do registro administrativo, e o sazonal com endereço em outro estado conta como "fora". Emprego federal (NPS, USFS) não entra no JT01. |
| F5 | Rockefeller visitou o vale em 1926 com Horace Albright, e "Over the next two decades, he amassed 35,000 acres through the Snake River Land Company". O parque de 1929 protegia "the Teton Range and several lakes at the foot of the mountains"; FDR criou o monumento nacional em 1943; em 1950 o Congresso juntou o parque, o monumento e as terras de Rockefeller. | NPS, "Cultural History" (atualizada em 02/09/2026): https://nps.gov/grte/learn/historyculture/cultural.htm | **CONFERE.** A área doada ficou **a confirmar**: os PDFs do NPS citados pela busca falam em ~32 mil acres. |
| F6 | A lei de 1950 proíbe criar ou ampliar monumento nacional no Wyoming sem o Congresso: "No extension or establishment of national monuments in Wyoming may be undertaken except by express authorization of Congress." | 54 U.S.C. § 320301(d), derivado do Act of Sept. 14, 1950, ch. 950, 64 Stat. 849. Lido na reprodução do LII/Cornell: https://www.law.cornell.edu/uscode/text/54/320301 (o uscode.house.gov deu 404 nesta URL) | **CONFERE** (pouco conhecido; bom para o ato 2) |
| F7 | **A terra do Estado se vende.** Em 30/12/2024, o Interior comprou do Wyoming o "640-acre Kelly parcel", terra escolar estadual dentro do Grand Teton, por **US$ 100 milhões**: US$ 62,4 mi do Land and Water Conservation Fund e US$ 37,6 mi de doações da Grand Teton National Park Foundation. | Release do Departamento do Interior, 30/12/2024: https://www.doi.gov/pressreleases/interior-department-announces-permanent-protections-critical-land-and-wildlife | **CONFERE.** O "Nobody Can Buy" do título é falso para a terra estadual (K3). |
| F8 | O passo de Teton (WY 22) "suffered a critical failure at milepost 12.8 the weekend of June 8" de 2024. O tráfego médio diário é de "almost 10,000 vehicles per day", com picos de 15.000 no verão, e a estrada reabriu por um desvio provisório em 28/06. | WYDOT, media kit: https://www.dot.state.wy.us/home/news_info/media-kits/wyo-22-teton-pass-collapse-media-kit.html | **CONFERE** |
| F9 | Área do condado: 3.996,8 mi² de terra e 220,4 de água, **4.217,3 mi²** no total (≈ 2,70 milhões de acres). | Census Gazetteer 2024: https://www2.census.gov/geo/docs/maps-data/data/gazetteer/2024_Gazetteer/2024_Gaz_counties_national.zip (`gaz.py`) | **CONFERE** |
| F10 | "Average home price over $7 million" (citado pelos concorrentes e pela CBS) | Relatórios de corretoras; nenhum órgão oficial publica o número | **NÃO CONFERIDO** (fonte privada) |
| F11 | "1º lugar pelo 21º ano seguido" (citado pela UNINSURABLE e por Duncan Reid) | O ranking nacional da BEA não pôde ser lido (o robots.txt de apps.bea.gov, F2b) | **NÃO CONFERIDO** |

**O paradoxo, na frase verdadeira.** O de trabalho ("Jackson Hole is 97% land nobody can buy") erra em dois lugares:
- **"Jackson Hole"**: os 97 % são do **condado de Teton**, e um terço dele é Yellowstone. O vale de Jackson Hole é outra área, menor,
  e nele a fatia privada é bem maior que 3 % (a medir, seção 4).
- **"Nobody Can Buy"**: os 0,2 % estaduais estão à venda por lei (é terra escolar), e o Kelly saiu por US$ 100 milhões.

A frase que se sustenta: *"About 97 percent of Teton County, home of Jackson Hole, is federal or state land. Less than 3 percent is
private."* No gancho, "highest income per person" precisa de "average", e o vídeo tem de dizer que a mediana dos domicílios é
US$ 151.604.

---

## 2 · A colisão (vidIQ)

**O gasto:** 6 buscas × 5 = **30 créditos**, o teto. Uma voltou vazia: "jackson hole 97% public land only 3% private", por views (o "%"
parece quebrar a busca). O saldo foi de 5.601 a 5.546. A diferença de 55 inclui outros agentes rodando ao mesmo tempo; as minhas
são 30. Conferi três vídeos na página pública `/watch`, um pedido por vez (`yt_meta_saida.jsonl`).

**As buscas:**
1. "why is jackson hole so expensive", sem data, por relevância;
2. a busca vazia acima;
3. "jackson hole wyoming", nos últimos 12 meses, por views;
4. "richest county in america teton county", sem data, por views;
5. o título de trabalho literal, nos últimos 12 meses, por relevância;
6. "jackson hole public land housing", antes de 17/11/2025, por views.

**Os 5 mais próximos:**

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Why Nobody Wants to Visit Jackson Hole, Wyoming Anymore | Paul McAllister (126 mil) | **460.461** (`/watch`, 17/11) | 08/08/2026 | 38:29 | **No ângulo, inteiro.** A descrição: Rockefeller comprou 35 mil acres, isso "locked up 97% of Teton County as public land — and turned the remaining 3% into the most expensive real estate in America"; a renda de US$ 530 mil; os trabalhadores que atravessam o passo vindos de Idaho; o desabamento de 2024. São os nossos 3 atos. |
| 2 | Why America's Richest County Is in Its Emptiest State | 8-Bit Atlas (1) | 0 (`/watch`, 17/11) | **17/11/2026 (hoje)** | 8:36 | **No ângulo e no método.** Capítulos "Never for sale" e "$532,903 a person"; "Teton County is 97% public land"; "77% of Teton County's personal income is dividends, interest and rent"; medidas próprias em dado aberto (WorldPop, PRISM, NASA GIBS). E **quase colide com a variante 1** do estrutural ("Why America's Richest County Is 97%…"). |
| 3 | We Went To The Richest Town In America. It's Not Where You Think. | More Perfect Union (4,26 mi) | **2.225.498** (`/watch`, 17/11) | 17/07/2026 | 20:42 | No ato 3: "America's richest county", e "Half commute an hour through a canyon". |
| 4 | Why Wyoming is so Weirdly Wealthy | Wendover Productions (4,92 mi) | **1.992.657** | 11/06/2024 | 19:55 | Na riqueza (impostos e trusts do Wyoming). Ocupa "why … wealthy". Não li a transcrição para saber se cita os 97 %. |
| 5 | Jackson Hole's $27M Mansions Are Running Out of Buildable Land — And Demand Keeps Surging | Luxury Under Siege (1) | 41 | 12/09/2026 | 18:49 | **No ângulo exato** (97 %, "a sliver of private valley floor, maybe 3%", Rockefeller, escassez → preço), com canal minúsculo. É o enxame. |

**Os outros que ocupam a busca:**
- **Grandes, sobre riqueza e preço:**
  - "Jackson Hole: Billionaires, Cowboys, and the Wild West of Wealth" (Bloomberg Television, 1.236.734 views, 22/08/2025);
  - "I Make $20/Hour And I'm Still Homeless" (AJ+, 1.420.585, 01/12/2022);
  - "The new land rush in Wyoming" (CBS Sunday Morning, 946.333, 03/09/2023);
  - "Why This Small Town In Wyoming Is So Rich" (Meridian, 28,2 mil inscritos, 608.759, 15/09/2023, 6:57);
  - "Jackson Hole's $30M Mountain Estates Are Sliding Off the Hillside…" (Falling Mansions, 8,29 mil inscritos, 495.702,
    14/09/2026), com um capítulo "The Three Percent Choke Point".
- **O enxame em 2026, com os 97 % na descrição:**
  - Simon Hammer (21/09, 3.605 views; "a 1930s land deal… locked 97% of Teton County");
  - Simon Uncovered (17/09, 4.252);
  - Duncan Reid (13/09, 416; "Ninety-seven percent of Teton County… can never be developed");
  - Vicio Oculto, em espanhol (20/10).
- **Mais enxame, no mesmo lugar sem os 97 % na descrição:**
  - UNINSURABLE (13/10; a renda de US$ 532.903);
  - Vault & Status (11/11; Rockefeller e "why even the wealthiest Americans cannot simply buy their way into more land");
  - Atlas Noir, um curto de geografia (11/11);
  - "Paul McAllister Docs" (13 inscritos, 04/10) e The American Stories (46 inscritos, 02/10), **as duas com o título copiado**
    ("How America's Wild West Paradise Became a Billionaire Playground: Jackson Hole, Wyoming").
- **Curtos de corretor:** "Why is Jackson WY so Expensive? … Only 3% is Privately Owned" (Alexander Lexington, 10/04/2026) e
  "Revealing why home prices in Jackson Hole are so high!" (Diana Dragancea, 15/10/2024), os dois com os 97 % na descrição.

**Conclusão.** O título não colide: nenhum igual ou quase igual a "Why Jackson Hole Is 97% Land Nobody Can Buy" nos últimos 12 meses.
O ângulo colide de ponta a ponta (**GRAVE**). Os 97/3 % são o argumento de corretor do lugar, e o vídeo longo bem feito sobre ele já
existe (o nº 1). Para a porta da busca, o nosso vídeo disputaria "jackson hole", "richest county" e "why so expensive" com
2,2 milhões, 2 milhões, 1,4 milhão, 1,2 milhão e 460 mil views. O Big Sur pegou a busca porque o ângulo estava vago, e aqui não está.

---

## 3 · O potencial real, pela régua

1. **A busca.** "jackson hole" ≈ 9,3 mil/mês, concorrência 35, +96,2 % (medido pela Sala). A busca está **poluída**: das 25 mais
   vistas dos últimos 12 meses (busca 3), 6 são o simpósio do Fed (Warsh, agosto de 2026), 6 são webcams, 3 são esqui, 7 são viagem e
   só 3 são de riqueza e terra. O +96 % provavelmente é o simpósio de agosto (**não medido**: falta a série mensal). Passa, com ressalva.
2. **A prova de interesse.** Sim, forte e recente: 2,2 milhões (jul/2026), 496 mil (set/2026), 460 mil (ago/2026), 1,2 milhão
   (ago/2025). Passa.
3. **O lugar vago no vídeo longo.** **Não passa.** O nº 1 da tabela é o nosso vídeo, com 38 min e 126 mil inscritos. O enxame
   chegou em semanas: dois títulos copiados em 2 meses e um canal de geografia com o nosso método hoje.
4. **O paradoxo em 3 frases e no mapa.** Cabe, mas o mapa honesto **o enfraquece**. Pintar 97 % do condado de "público" é pintar um
   terço de Yellowstone (F1d), e quem procura "jackson hole" já ouviu a explicação.
5. **A geografia explica?** Em parte. O vale é fechado por montanhas, o solo de cascalho glacial dá pouca lavoura, os ranchos foram
   fracos, e foi isso que deixou a terra barata para Rockefeller; o inverno e os alces também contam. Mas os 97 % são **política de
   terra pública** (parques, florestas, áreas selvagens), e a riqueza é **lei tributária** do Wyoming (assunto do Wendover).
6. **Uma medida nossa, de dado aberto.** Possível (seção 4). Só que a mais "vendável" (metade dos trabalhadores mora fora) já foi dita
   pela More Perfect Union, e a 8-Bit Atlas cita os commuters do Housing Supply Plan de 2023.

**13 a 16 min em 3 atos, sem encher linguiça?** Sim, sobra material. Ato 1: o vale, a falha do Teton, os ranchos que não vingaram. Ato
2: 1929, a compra secreta, o monumento de 1943 e a revolta dos fazendeiros, a lei de 1950 com a cláusula do Wyoming (F6). Ato 3: os
97/3 %, o Kelly a US$ 100 mi, a renda média contra a mediana, o passo que caiu. O problema não é a duração. É que o espectador já viu
este filme.

---

## 4 · A nossa versão: a medida própria

Conta preliminar, com os scripts em `out/_pautas/video-8/_trabalho/cetico-jackson-hole/`:

- **Yellowstone é 32,9 % do condado; o Grand Teton, 11,5 %** (`geo_areas.py`). O "97 % de Jackson Hole" é, em boa parte, um parque
  que não fica no vale. É a medida mais original que achei, mas **desmente o título** em vez de sustentá-lo.
- **De 2013 a 2024, a fatia dos empregos do condado ocupados por quem mora fora dele foi de 41,7 % a 52,9 %** (LODES, `lodes_teton.py`):
  - em 2019, 51,8 %;
  - empregos: 13.861 → 19.241 (+39 %);
  - quem trabalha e mora no condado: 8.077 → 9.070 (+12 %);
  - em Idaho: 21,2 %.
- **O condado mais rico do país ganhou 3 moradores em 5 anos** (23.330 → 23.333), com saldo migratório doméstico de −1.267, enquanto
  Teton, ID, cresceu 13,9 % (`pop_serie.py`). Medida simples e forte. É estimativa do Census, com margem.
- **A renda média contra a mediana**: US$ 532.903 por pessoa contra US$ 151.604 por domicílio (F2, F2c).
- **A próxima, se a pauta voltar:** a fatia privada do **fundo do vale**, e não do condado. Sai do PAD-US 4 (USGS) e do relevo 3DEP,
  com o vale definido por altitude e declividade. Não foi feita: o PAD-US é pesado, e o resultado não salva o ângulo.

---

## 5 · O material

- **Geometria real:** o condado (TIGER), os parques (NPS Land Resources Division, já baixados aqui), as florestas (USFS), o refúgio
  (USFWS), o PAD-US, o relevo 3DEP e o rio Snake (NHD). Sobra.
- **Satélite aberto:** Landsat e Sentinel-2 do vale; NASA GIBS.
- **Fotos de acervo livre:**
  - Commons (uma consulta à API, `commons_cats.py`): Grand Teton National Park, 1.128 arquivos; National Elk Refuge, 497; Jackson
    Hole, 98; Jackson, Wyoming, 34; Teton Pass, só 4;
  - NPS (domínio público) e USFWS;
  - a foto histórica (Rockefeller, Albright, o protesto de 1943) fica a procurar no NPS, na LoC e no American Heritage Center;
  - as fotos do passo da WYDOT: a licença fica a conferir.
- Dá folgado 13 a 16 min. O material não é o problema.

---

## 6 · O título e o gancho que defendo

**Para a pauta como veio** (97 % / ninguém compra), não defendo título nenhum: o ângulo está tomado (K1).

**Se a Sala quiser manter o lugar, o único ângulo que achei sem dono** (atenção: a colisão dele **não foi medida no vidIQ**, os 30
créditos acabaram; precisa de uma busca por "kelly parcel" e pelo título antes de qualquer passo):

- **Título:** "Why One Square Mile of Jackson Hole Cost $100 Million" (53 car.). O fato está em F7.
- **Alternativa 1:** "Why Jackson Hole Added Just 3 Residents in 5 Years" (50). O fato está em F3. Ressalva: o dado é do condado, não
  do vale.
- **Alternativa 2, a versão correta do título de trabalho:** "Why Only 3% of Jackson Hole's County Is Private" (47). Mesmo corrigida,
  ela colide no ângulo.
- **O gancho** (37 palavras, sem dar a resposta): *"In December 2024, the U.S. government paid $100 million for one square mile of open land in Jackson
  Hole, Wyoming. The land was already inside a national park. So why was one empty square mile worth that much?"*
- **A miniatura:**
  - o vale em relevo amarelo e o Snake em azul;
  - **em vermelho**, o quadrado de 640 acres do Kelly;
  - **em ciano**, a terra privada do fundo do vale;
  - seta branca grossa no quadrado;
  - na caixa preta, **"$100M"**.

---

## 7 · O veredito e os pontos

**DERRUBADO, 4,0.** A demanda existe e o material sobra. Mas o ângulo que dava a nota de 6,5 ("o ângulo da terra está livre") não está
livre: é o eixo do vídeo de 460 mil views e o argumento de dez outros, e o enxame chegou com o nosso método no dia de hoje.

- **K1, GRAVE: o ângulo ocupado.** Os 97/3 %, o Rockefeller e os trabalhadores de fora já são o eixo de "Why Nobody Wants to Visit
  Jackson Hole, Wyoming Anymore" (460.461 views, ago/2026, 38 min). A More Perfect Union (2,2 mi), a Bloomberg (1,2 mi), o Wendover
  (2,0 mi), a AJ+ (1,4 mi) e a CBS (946 mil) cobrem a riqueza e a moradia. A régua, item 3, cai.
- **K2, GRAVE: o enxame já está no lugar, com o nosso método.**
  - "Why America's Richest County Is in Its Emptiest State" (8-Bit Atlas, hoje): mapas, dado aberto, "Never for sale", os 97 %.
  - Pelo menos 7 canais pequenos de set. a nov. de 2026 com os 97 % na descrição, e dois títulos copiados em 2 meses.
  - A variante 1 do estrutural ("Why America's Richest County Is…") quase colide com o título da 8-Bit Atlas.
- **K3, MÉDIO: o título erra em duas palavras.** "Jackson Hole": os 97 % são do condado, e Yellowstone é 32,9 % dele (F1d).
  "Nobody Can Buy": o Estado vendeu o Kelly por US$ 100 mi (F7), e a terra estadual existe para ser vendida ou arrendada. A frase
  verdadeira está no fim da seção 1.
- **K4, MÉDIO: a renda do gancho é uma média.** Os US$ 532.903 por pessoa são a PCPI da BEA, puxada pela renda de capital; a mediana
  dos domicílios é US$ 151.604 (F2c). O "1º dos EUA" só foi conferido contra 10 rivais: a tabela nacional da BEA está vetada pelo
  robots.txt (F2b).
- **K5, MÉDIO: a busca está poluída.** "jackson hole" mistura o simpósio do Fed, o resort de esqui, webcams e viagem. O +96 % é
  provavelmente agosto (não medido). Os 9,3 mil/mês não são 9,3 mil pessoas querendo saber da terra.
- **K6, MÉDIO: a geografia explica pouco** (régua, item 5). A escassez é política de terra pública, e a riqueza é lei tributária. O
  vale fechado e o solo pobre só explicam por que a terra estava barata em 1927.
- **K7, LEVE: a fórmula do Big Sur repetida.** Terra preservada, pouca gente e o Wyoming como régua. A 8-Bit Atlas usou hoje a mesma
  régua ("Emptiest State").
- **K8, LEVE: a medida nossa não salva o ângulo.** A mais forte ("metade dos trabalhadores mora fora") já foi dita. As originais
  (Yellowstone é um terço; o condado ganhou 3 moradores) desmontam o título ou pedem outro vídeo.

**Notas para a Sala:**
- Os scripts baixam de novo o que precisam. Apaguei os brutos grandes que tinha baixado (os dois PDFs do condado e do Legislativo, ~41
  MB, e os LODES, ~6,5 MB): a pasta não está no `.gitignore` e não deveria ir ao git com eles.
- Ficaram os dois GeoJSON (~0,5 MB), o `gaz2024.zip` (140 KB) e os scripts.
- O `pdf_trecho.py` e o `pdf_paginas.py` pedem o PDF baixado de novo pela URL da tabela.
