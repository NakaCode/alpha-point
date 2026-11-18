# Vídeo 8: o gerador estrutural (17/11/2026)

**O pedido.** O Lucas, no chat da Sala, em 17/11/2026, ~20:3x: "Vamos para uma nova pauta"; "Quero que me trata boas pautas, pautas com
potencial real"; "A cota não é um problema. Tenho um reset semanal para uso." O pedido inteiro está em `out/_pautas/video-8/pedido-estrutural.md`.
**O adendo** (o Lucas, ~20:5x, repassado pela Sala): "Um adendo no Big sur é que as views vieram de pesquisa". Por isso cada pauta abaixo
traz as buscas prováveis e a nota pesa as duas portas: a **busca** (o nome do lugar no título) e a **recomendação** (o paradoxo e a miniatura).

**Como foi feito, e os limites.**
- Li as quatro referências do Lucas (`out/rio-columbia/_tmp/miniatura/referencias/ref-1.jpg` a `ref-4.jpg`), as duas miniaturas finais do vídeo 7
  (`roteiros/rio-columbia/miniatura/miniatura-A-1280.jpg` e `-B-1280.jpg`), `marca/embalagem.md`, as pautas de 01/11, 04/11 e 08/11, o
  `cacador.md` de 01/11 e os títulos dos 50 vídeos longos do Geoff (`out/_analises/geography-by-geoff/canal.json`).
- **Fato** é só o trecho lido na origem, com a URL, tudo lido em 17/11/2026 (hora de Brasília). O resto vai **a confirmar**, com a pista e de
  onde ela veio.
- **A concorrência:** busca da web restrita a youtube.com (sem `/results`). Dos vídeos que importavam, li a data, as views e o canal na página
  pública `/watch` (o robots.txt do YouTube não a veta), um pedido por vez, pelo script `out/_pautas/video-8/_trabalho/yt_meta.py`. Os números
  são de 17/11/2026, ~21h-23h. **Nada foi medido no vidIQ**: a busca da web mostra o que existe, não prova o que não existe.
- **Recusaram leitura automática, e não foram contornados** (os fatos deles ficam NÃO CONFERIDO): iid.com (403), saj.usace.army.mil (403),
  tahoe.usgs.gov (403), trpa.gov (403), darenc.gov (403), washingtontimes.com (403), nhc.noaa.gov (403), austlii.edu.au (403, duas URLs),
  aph.gov.au (403), qld.gov.au (403), rmoutlook.com (403), deltaconservancy.ca.gov (403), premier.sa.gov.au (403). Não responderam: banff.ca e
  lakeeyrebasin.gov.au (conexão recusada), dfat.gov.au, dcceew.gov.au e minister.defence.gov.au (tempo esgotado, duas vezes), snwa.com (DNS).
- Os números do Census saíram do arquivo aberto de estimativas dos condados, safra 2025
  (https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/counties/totals/co-est2025-alldata.csv, baixado em 17/11/2026 pelo
  `_trabalho/censo_condados.py`). Os PDFs foram lidos pelo PyMuPDF (`_trabalho/pdf_grep.py`).
- As notas são duras ("na dúvida, derrube"; as melhores pautas do canal tiveram 6,5 a 7,5). Nenhuma passa de 7.

---

## Os 12 desenvolvidos, pela nota

| # | Lugar (`slug`) | Título de trabalho | Car. | Nota |
|---|---|---|---|---|
| 1 | O Vale Imperial e o rio Colorado (`vale-imperial`) | Why One Valley Holds Nearly as Much Colorado River Water as Arizona | 67 | **7,0** |
| 2 | Banff (`banff`) | Why You Can't Just Move to Banff | 32 | **6,5** |
| 3 | O porto de Houston (`houston-porto`) | Why America's Busiest Port Is 50 Miles From the Sea | 51 | **6,5** |
| 4 | Jackson Hole (`jackson-hole`) | Why Jackson Hole Is 97% Land Nobody Can Buy | 43 | **6,5** |
| 5 | Os Outer Banks (`outer-banks`) | Why the Outer Banks Are Moving Toward the Mainland | 50 | **6,0** |
| 6 | O lago Tahoe (`lago-tahoe`) | Why Lake Tahoe Is Split Between Two States | 42 | **6,0** |
| 7 | O lago Okeechobee (`okeechobee`) | Why Florida Hid Its Biggest Lake Behind a 143-Mile Wall | 55 | **6,0** |
| 8 | O lago Eyre (`lago-eyre`) | Why Australia's Biggest Lake Is Usually Empty | 45 | **5,5** |
| 9 | O estreito de Torres (`estreito-torres`) | Why Australia's Border Hugs the Coast of Papua New Guinea | 57 | **5,5** |
| 10 | O Rio Grande e o tratado de 1944 (`rio-grande-tratado`) | Why Mexico Owes Texas Water | 27 | **5,5** |
| 11 | O Red River do Norte (`red-river`) | Why Fargo's River Flows North Into Canada | 41 | **5,0** |
| 12 | O delta do Sacramento-San Joaquin (`delta-california`) | Why California's Water Runs Through Islands Below Sea Level | 59 | **5,0** |

**O que a busca de concorrência mostrou antes de tudo.**
- **A família "no bridge" está quente agora, e tomada.** "The Real Reason Canada Can't Bridge Vancouver Island" (MegaBuilds, 125 mil inscritos)
  fez **449.400 views em dois dias** (15/11/2026). "Why Long Island Is Farther From Connecticut Than It Looks" (Geography Effect) fez 225.661 desde
  02/10/2026. O enxame vai copiar em dias. Por isso as ideias de ponte caíram todas (lista no fim).
- **O curto de geografia dos EUA estoura em canal minúsculo.** "Why Does California's Border Bend? 🤯 Lake Tahoe Explains It" (HistoWhy, 1,43 mil
  inscritos, 22/10/2026) tem **721.957 views**. "The Water the West Legally CAN'T Touch" (Why the Map TV, 1,76 mil inscritos, 27/08/2026, 18 min)
  tem **300.312**. A procura por "geografia dos EUA com um porquê" está provada em 2026, em canal pequeno.
- **O assunto quente com o ângulo livre é o caso do Big Sur, de novo.** Jackson Hole tem dois vídeos de agosto e setembro com 460 mil e 496 mil views,
  ambos de mansão e de turismo; o ângulo da terra (97 % que ninguém compra) está livre. O Outer Banks está na notícia (as casas que caem); o
  porquê da ilha que anda está livre.

---

## 1 · O Vale Imperial e o rio Colorado (`vale-imperial`) · **7,0**

- **Título de trabalho:** "Why One Valley Holds Nearly as Much Colorado River Water as Arizona" (67).
  - Variantes: "Why Imperial Valley Gets 9 Times More Colorado River Water Than Nevada" (70); "The California Valley That Holds a Third of the
    Lower Colorado River" (68).
- **O paradoxo:** um vale de deserto da Califórnia, com uns 180 mil moradores, tem direito a quase tanta água do Colorado quanto o Arizona
  inteiro, e quase 9 vezes a de Nevada, justo no ano em que o Arizona leva o maior corte.
- **O gancho:** "Arizona, with 7.6 million people, has rights to 2.8 million acre-feet of the Colorado River. One desert valley in California, home
  to about 180,000 people, holds rights to 2.6 million. Why does one valley get almost as much as a whole state?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. A lei de 1928 (BCPA) repartiu os 7,5 milhões de acre-pés da Bacia Baixa: "4.4 MAF per year to California, 2.8 MAF to Arizona, and 300,000
     acre-feet (AF) to Nevada". CRS R45546, atualizado em 01/10/2026:
     https://www.everycrsreport.com/files/2026-10-01_R45546_8ab2e2c8fe7b6c010a24bd44490d22952a440b0f.pdf
  2. No mesmo relatório: "California's rights include Imperial Irrigation District rights to 2.6 MAF (priority date of 1901)". Os direitos
     anteriores ao pacto ("present perfected rights") somam "approximately 1.05 MAF in Arizona and .000013 MAF in Nevada".
  3. O Interior fechou as regras de 2027-2028 em 21/08/2026: a Bacia Baixa perde 1,25 milhão de acre-pés por ano, "Arizona: 760,000 acre-feet",
     "California: 440,000 acre-feet", "Nevada: 50,000 acre-feet" (se os estados aplicarem o acordo que propuseram).
     https://www.doi.gov/pressreleases/interior-department-finalizes-plans-2027-2028-colorado-river-operations
  4. O lago que o vale criou por acidente: "Today's Sea originated in 1905 when Colorado River floodwater breached an irrigation canal and flowed
     uncontrolled into the basin for 18 months." California Water Boards, FAQ do Salton Sea (2024):
     https://www.waterboards.ca.gov/saltonsea/docs/2024/salton-sea-faq.pdf
  5. O condado de Imperial: 179.705 moradores na base de 2020 e 181.411 em 2025; Nevada, 3.282.188; Arizona, 7.623.818 (Census, safra 2025, URL no
     topo).
  - **A confirmar:** o teto de 3,1 milhões de acre-pés do IID e a área irrigada (o site do IID recusou, 403); o uso real do IID nos últimos anos
    (Reclamation, "Decree Accounting"); como a Califórnia reparte por dentro os 440 mil do corte; o processo de Nevada contra a decisão (resumo de
    busca); o vale abaixo do nível do mar (a cota de El Centro).
- **A medida nossa** (dado: CRS, Interior, Census; conta minha):
  - 2,6 ÷ 2,8 = **93 % do Arizona**; 2,6 ÷ 0,3 = **8,7 vezes Nevada**; 2,6 ÷ 7,5 = **35 % da Bacia Baixa**.
  - Por morador: 2,6 milhões ÷ 181.411 = **14,3 acre-pés por pessoa** no condado; Nevada, 0,3 milhão ÷ 3.282.188 = 0,09 (**157 vezes menos**).
  - Em 2027-2028, o Arizona cai a 2,04 milhões (2,8 − 0,76). Se o corte da Califórnia não chegar ao IID, o vale passa o Arizona: o número que o
    vídeo mede, quando a Califórnia publicar a divisão.
  - No mapa: a área irrigada do vale contada no Landsat (verde contra o deserto), em milhas quadradas.
- **Os 3 atos** (~15 min):
  1. A física: o rio que corria para o golfo, a bacia do Salton abaixo do mar, a água que desce sozinha pelo canal.
  2. A história: quem chegou primeiro (1901), o acidente de 1905-1907 que fez o Salton Sea, a lei de 1928 e a regra de quem é mais antigo.
  3. O hoje: as regras de 2026, o corte do Arizona, o vale que vende água às cidades, o Salton Sea que seca.
- **A miniatura:** o Sudoeste em relevo amarelo; o Vale Imperial pintado de vermelho; o rio Colorado e o canal em ciano, com uma seta branca grossa do
  rio ao vale; o Arizona com contorno branco fino. Na caixa preta, "≈ ARIZONA" (a B: "9× NEVADA").
- **A procura** (não medido no vidIQ):
  - Achados: notícias e curtos, nenhum explicador de geografia com o ângulo. "Why Farmers Are Not Allowed to Conserve Colorado River Water" (Eric
    Hanson, curto, 04/09/2026, 34.938); "Farming family uses more water than all of Las Vegas valley: report" (8 News Now, 10/11/2023, 4.975);
    "Colorado River in Crisis, Part 5: The Valley" (LA Times Podcasts, 03/02/2023, 269); vídeos do processo do centro de dados contra o IID (2026).
  - O porquê de agora: a decisão de 21/08/2026, o corte de 760 mil acre-pés do Arizona e a briga dos estados.
  - **Buscas prováveis:** "colorado river water rights", "why does imperial valley get so much water", "colorado river cuts arizona",
    "imperial valley water", "salton sea". O título cobre "colorado river" e "arizona"; "imperial valley" vai na descrição (ou na variante 2).
- **Os riscos:** fato volátil (cortes, processos, a divisão interna da Califórnia); o tema da água logo depois do vídeo 7 (pode virar série, ou
  cansar); a palavra "rights" tem de ficar no título (direito não é uso). Sem guerra, sem etnia. Imagem farta (USBR, NASA, Landsat).
- **A nota: 7,0.** As duas portas abertas: "colorado river" é busca de notícia em 2026, e o paradoxo cabe em 2 segundos no mapa. O número é
  primário e nosso. Não sobe mais pela proximidade com o vídeo 7 e pelos números voláteis.

## 2 · Banff (`banff`) · **6,5**

- **Título de trabalho:** "Why You Can't Just Move to Banff" (32).
  - Variantes: "Why Canada Won't Let You Live in Banff" (38); "Why Banff Is the Town You Need Permission to Live In" (52).
- **O paradoxo:** a cidade de montanha mais famosa do Canadá recebe 4,5 milhões de visitas por ano, e a lei federal não deixa ninguém morar lá
  sem provar que precisa.
- **O gancho:** "Banff had about four and a half million visits last year. It's Canada's most famous mountain town. You can buy a home there, but you
  can't move into it unless you prove you need to live there. Why?" (40 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. O regulamento dos arrendamentos nos parques nacionais (SOR/92-25, emendado em 04/12/2024) define o "eligible resident": "(a) an individual
     whose primary employment is in the park", "(b) an individual who operates a business in the park…", os aposentados que trabalharam lá, os
     estudantes, os herdeiros de arrendatários anteriores a 19/05/1911 e as famílias deles.
     https://laws-lois.justice.gc.ca/eng/regulations/SOR-92-25/FullText.html
  2. No mesmo regulamento, s. 4(1)(b): o arrendamento residencial na cidade de Banff traz a cláusula de que, "if the leased public lands are at any
     time occupied by any person who is not an eligible resident", "the Minister may terminate the lease". A terra é pública e arrendada.
  3. A Lei dos Parques Nacionais (atualizada até 29/10/2026), Anexo 4: a área comercial máxima da cidade de Banff é de **361.390 m²**, e o limite da
     cidade é uma planta registrada ("Plan 88090"). https://laws-lois.justice.gc.ca/eng/acts/n-14.01/FullText.html
  4. O relatório anual de 2025 do parque: "a record 4,515,168 visitors", "surpassing 2024 by 7.14%"; "Canada's first national park and a UNESCO
     World Heritage Site". https://parks.canada.ca/pn-np/ab/banff/info/gestion-management/involved/plan/2025
  - **A confirmar:** a população (8.305 no censo de 2021, pelo resumo da busca; o jornal recusou, 403, e a Statistics Canada recusou em 01/11); a
    área do parque e da cidade; a origem na ferrovia (a Canadian Pacific) e nas fontes termais de 1883-1885; a meta de 8.000 moradores do plano de
    manejo (resumo de busca).
- **A medida nossa:**
  - 4.515.168 visitas ÷ 8.305 moradores (a confirmar) = **~544 visitas por morador por ano**.
  - O teto comercial em pés: 361.390 m² × 10,764 = **3,89 milhões de pés quadrados**, o tamanho de uns 68 campos de futebol americano (conta minha, 1,32
    acre cada com as zonas finais, a conferir).
  - A cidade como fração do parque: o limite da cidade (OSM) contra o do parque (dados abertos da Parks Canada), em milhas quadradas: o número que se
    espera é bem abaixo de 1 %.
- **Os 3 atos:**
  1. A geografia: o vale do Bow, a passagem das Rochosas que a ferrovia precisava, as fontes quentes.
  2. A história: o parque que nasceu da ferrovia (1885), a cidade de hotel dentro dele, a lei que fechou o limite e o teto comercial.
  3. O hoje: o recorde de visitas, a regra de quem pode morar, o aluguel e os trabalhadores que vivem em Canmore.
- **A miniatura:** as Rochosas em relevo amarelo; o parque de Banff pintado de vermelho com contorno branco; a cidade como um ponto ciano, com uma
  seta branca grossa; na caixa preta, "NOT ALLOWED" (a B: "PERMIT ONLY").
- **A procura** (não medido no vidIQ):
  - Achados: só vídeos de viagem ("Banff National Park Isn't What You Think", Topo Traveler, 05/12/2025, 125.680, sobre trilhas) e um de corretor de
    imóveis ("Banff Residency Requirements", 25/08/2021, 2.915). **Nenhum explicador do porquê em inglês achado.**
  - O porquê de agora: o recorde de 2025 e os 140 anos do parque (novembro de 2025); o Lucas pediu o Canadá ("quero arriscar em um lugar mais
    conhecido como canadá ou austrália").
  - **Buscas prováveis:** "can you live in banff", "banff need to reside", "why is banff so expensive", "living in banff", "banff housing". O título
    cobre "banff" e a frase "live in banff" (variante 1); "need to reside" vai na descrição.
- **Os riscos:** é mais lei de parque que geografia física (o mapa precisa carregar o porquê: o vale, a ferrovia, o limite); a população é de 2021;
  o tema da moradia pode puxar política local. Imagem: Parks Canada, Commons e acervo da ferrovia (licenças a conferir).
- **A nota: 6,5.** A busca é enorme e o ângulo está livre em inglês. O paradoxo é forte e se prova com a letra da lei. Não sobe porque o "porquê" é
  menos geográfico que os outros e o lugar é pequeno para 14 minutos sem a história da ferrovia.

## 3 · O porto de Houston (`houston-porto`) · **6,5**

- **Título de trabalho:** "Why America's Busiest Port Is 50 Miles From the Sea" (51).
  - Variantes: "Why Houston Built Its Port 50 Miles From the Gulf" (49); "Why Texas's Biggest Port Isn't on the Coast" (43).
- **O paradoxo:** o maior porto dos EUA em tonelagem fica a 52 milhas do mar, no fim de um canal cavado num riacho, enquanto o melhor porto natural
  do Texas está na costa.
- **O gancho:** "America's busiest port isn't on the ocean. To reach it, ships leave the Gulf and sail another 52 miles inland, up a channel dug
  through a bayou. A better natural harbor sits right on the coast. So why is the port in Houston?" (44 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "the eight public facilities along the 52-mile Houston Ship Channel". Port Houston: https://porthouston.com/about/our-port/
  2. O canal "is by far the nation's largest port for waterborne tonnage and busiest in terms of vessels"; 8.099 chegadas de navios em 2025. Port
     Houston, 30/01/2026: https://porthouston.com/wp-content/uploads/2026/01/Port-Houston-Celebrates-Best-Year-Yet.pdf
  3. O Handbook of Texas (revisto em 22/03/2017): o canal fundo "was completed on September 7, 1914"; Galveston era "the best natural port in
     Texas"; os comerciantes de Houston, nos anos 1850, "chafed at the policies of the Galveston Wharf Company"; "by 1909 the channel had been
     dredged to only 18½ feet". https://www.tshaonline.org/handbook/entries/houston-ship-channel
  4. Galveston: "the port shipped $585 million in foreign tonnage … as late as 1923", e depois "the port declined as shippers moved to Houston"
     (Handbook of Texas, condado de Galveston, revisto em 07/04/2021). https://tshaonline.org/handbook/online/articles/hcg02
  5. O furacão de 1900: "At least 8,000 people died when hurricane storm tides (the surge plus the astronomical tide)" de 8 a 15 pés cobriram a
     cidade. NWS: https://www.weather.gov/phi/stormsurge
  6. Hoje: o condado de Harris tem 5.045.026 moradores e o de Galveston, 372.207 (Census, 2025).
  - **A confirmar:** que a liderança vale na tabela do Corpo de Engenheiros (é a afirmação do próprio porto); a população de Houston e de Galveston
    em 1900; Spindletop (1901) e o petróleo; a obra de alargamento ("Project 11") e a profundidade de hoje. O Handbook diz que o furacão **não**
    fechou o porto de Galveston (reaberto em duas semanas, resumo de busca): o roteiro não pode dizer que a tempestade "deu" o porto a Houston.
- **A medida nossa:** o comprimento do canal no OSM, do Bolivar Roads ao Turning Basin (espera-se ~52 mi); o perfil de altitude do Golfo a Houston
  (DEM do USGS), mostrando a ilha de Galveston baixa e Houston mais alta; a razão de hoje, Harris ÷ Galveston = **13,6 vezes** (conta minha); a
  profundidade de 18,5 pés em 1909 contra a de hoje.
- **Os 3 atos:**
  1. A geografia: a ilha-barreira, a baía rasa, o riacho (Buffalo Bayou) e a costa sem abrigo contra o furacão.
  2. A história: a rivalidade com Galveston, o furacão de 1900, o canal de 1914, o petróleo.
  3. O hoje: o maior complexo petroquímico do país, o canal estreito e o alargamento.
- **A miniatura:** a costa do Texas em relevo amarelo; a baía de Galveston em azul; o canal pintado de vermelho como uma linha grossa do Golfo até
  Houston; Galveston num anel ciano; seta branca grossa ao longo do canal; na caixa preta, "50 MILES INLAND".
- **A procura** (não medido no vidIQ):
  - Achados: em inglês, só vídeos institucionais ("Why the Port of Houston is so important", KHOU, 2019, 6.240) e listas ("Busiest Ports in the
    U.S.", Geography King, 21/01/2024, 54.890); em espanhol, "¿Por qué Houston es el puerto marítimo más importante de EEUU y el MUNDO?" (GeoIsis,
    06/06/2023, 19.530). **Nenhum explicador do "50 milhas para dentro" em inglês achado.**
  - O porquê de agora: o melhor ano do porto (2025); o alargamento; o tema é perene.
  - **Buscas prováveis:** "houston ship channel", "why is the port of houston inland", "port of houston history", "galveston vs houston",
    "galveston hurricane 1900". O título não diz "Houston": a variante 1 diz, e vale testar as duas.
- **Os riscos:** a palavra "busiest" depende da régua (tonelagem; em contêiner, não); a poluição do canal petroquímico puxa comentário; a
  temporada de furacões. Imagem: NOAA (1900, domínio público), Biblioteca do Congresso (fotos de 1914), Landsat.
- **A nota: 6,5.** O paradoxo se vê no mapa e o ângulo está livre. Não sobe porque a busca pelo porto é menor que a de um destino turístico, e
  porque há portos para dentro em outros lugares (o espectador pode achar normal).

## 4 · Jackson Hole (`jackson-hole`) · **6,5**

- **Título de trabalho:** "Why Jackson Hole Is 97% Land Nobody Can Buy" (43).
  - Variantes: "Why America's Richest County Is 97% Land You Can't Build On" (59); "Why Jackson Hole Is So Expensive (It's Not Just the
    Billionaires)" (65).
- **O paradoxo:** o condado mais rico dos EUA por pessoa tem 97 % da terra nas mãos do governo; o dinheiro todo se espreme nos 3 % que sobram.
- **O gancho:** "Teton County, Wyoming, has the highest income per person in America: over half a million dollars. Yet more than 97 percent of its
  land is owned or managed by the government. How does the richest county sit on land almost nobody can buy?" (44 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Over 97 percent of the 2,697,000 acres of land in Teton County are federally or state owned or managed." Advisory Council on Historic
     Preservation: https://www.achp.gov/node/9807
  2. A renda pessoal por pessoa do condado de Teton em 2024: **US$ 532.903** (2023: 500.556). BEA, pela série PCPI56039 do FRED:
     https://fred.stlouisfed.org/data/PCPI56039
  3. O condado tem 23.330 moradores na base de 2020 e 23.333 em 2025; o Wyoming, 588.753 (Census, 2025).
  - **A confirmar:** que é o 1º dos EUA em 2024 (o jornal Cowboy State Daily, 28/02/2026, pelo resumo da busca; a tabela da BEA de 05/02/2026 não
    mostra a ordem); a compra secreta de Rockefeller (~35.000 acres, anos 1920; a página do NPS deu 404); a divisão parques 45 % e florestas 51 %
    (Niskanen, resumo de busca).
- **A medida nossa** (conta minha, sobre os fatos acima):
  - 2.697.000 acres = **4.214 mi²**; 23.333 moradores ÷ 4.214 = **5,5 por mi²**, mais vazio que o Wyoming (5,9 no censo de 2020, o número do Big Sur).
  - Nos 3 % privados: no máximo 80.910 acres (126 mi²), **~185 moradores por mi²**, uma densidade de subúrbio.
  - A terra privada exata pelo PAD-US (USGS), em mapa: o vale estreito acesso no meio do vermelho.
- **Os 3 atos:**
  1. A geografia: o vale cercado de montanhas, a neve, o rio Snake e o que só o fundo do vale permite.
  2. A história: os parques (Yellowstone, Grand Teton), Rockefeller comprando o vale e dando ao governo, o refúgio dos alces.
  3. O hoje: a renda de meio milhão, a casa que custa milhões, os trabalhadores que moram em Idaho.
- **A miniatura:** o Wyoming em relevo amarelo; o condado de Teton em vermelho; os 3 % privados em ciano no fundo do vale; seta branca grossa; na
  caixa preta, "ONLY 3%" (a B: "$532,903" com "per person, 2024" pequeno).
- **A procura** (não medido no vidIQ):
  - Achados: "Why Nobody Wants to Visit Jackson Hole, Wyoming Anymore" (Paul McAllister, 126 mil, 08/08/2026, **460.461**); "Jackson Hole's $30M
    Mountain Estates Are Sliding Off the Hillside…" (Falling Mansions, 14/09/2026, **495.702**). Os dois são do enxame de turismo e de mansão; a
    descrição deles já cita os 97 %. Nenhum com o ângulo da terra como eixo.
  - O porquê de agora: o 1º lugar renovado em fevereiro de 2026; o lugar está quente no YouTube (dois vídeos de quase meio milhão em 2026).
  - **Buscas prováveis:** "why is jackson hole so expensive", "jackson hole public land", "richest county in america", "teton county wyoming",
    "jackson hole housing". O título principal cobre "jackson hole"; a variante 3 cobre "so expensive".
- **Os riscos:** é o mesmo truque do Big Sur (o Wyoming como régua; pode parecer repetição, ou virar assinatura); renda e bilionários puxam
  política; o "97 %" inclui terra estadual (o título diz "Nobody Can Buy", e o estado às vezes vende: trocar por "Can't Build On" se a conferência
  pedir). Imagem: NPS, USGS, Landsat.
- **A nota: 6,5.** As duas portas abertas e um assunto provado em 2026. Não sobe porque o enxame já orbita o lugar e porque o paradoxo é de terra
  pública, uma resposta que o espectador adivinha em parte.

## 5 · Os Outer Banks (`outer-banks`) · **6,0**

- **Título de trabalho:** "Why the Outer Banks Are Moving Toward the Mainland" (50).
  - Variantes: "Why the Outer Banks Keep Losing Houses to the Ocean" (51); "Why This Lighthouse Had to Be Moved Half a Mile Inland" (54).
- **O paradoxo:** o farol mais famoso dos EUA teve de ser arrastado meia milha para não cair no mar, e as casas da ilha caem uma por uma: a
  ilha inteira está andando.
- **O gancho:** "In 1870, the Cape Hatteras Lighthouse stood about 1,500 feet from the ocean. By 1970, the water was 120 feet away. Since 2020, 31
  houses on the same island have fallen into the Atlantic. Why is this coast moving?" (40 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "In 1999, the Cape Hatteras Light Station … was successfully relocated 2,900 feet"; construído "a safe 1,500 feet from the ocean"; em 1970,
     "just 120 feet from the ocean's edge". NPS: https://www.nps.gov/caha/learn/historyculture/movingthelighthouse.htm
  2. Em 02/02/2026, mais quatro casas caíram: "They join 27 other homes that have collapsed since 2020 on Hatteras Island" (31). A causa citada:
     "stronger storms and rising seas". WHRO: https://www.whro.org/environment/2026-02-02/snowicane-on-the-outer-banks-sends-4-more-homes-crashing-into-the-atlantic
  3. O USGS (2007): o litoral entre Rodanthe e o cabo Hatteras "may migrate on the order of 2.5 times more rapidly than at present" se o mar subir
     até 0,88 m em 2100. https://www.usgs.gov/publications/modeling-barrier-island-response-sea-level-rise-outer-banks-north-carolina
  4. O condado de Dare: 38.245 moradores em 2025 (Census).
  - **A confirmar:** a contagem oficial do NPS (o condado de Dare e o Washington Times recusaram, 403); as 32 casas e a FEMA (título de um vídeo de
    07/11/2026); os 10 a 15 pés por ano de erosão em Rodanthe (um pesquisador, citado pela WTKR); o mecanismo do "overwash" numa página atual do
    USGS (a lida é um arquivo de 2012).
- **A medida nossa:** o recuo da praia do farol, 1.380 pés em 100 anos (1.500 − 120): **13,8 pés por ano** (conta minha, sobre o NPS). O recuo
  medido no Landsat (1984-2026) em Buxton e em Rodanthe, em pés por ano, e as casas caídas no mapa, ponto a ponto.
- **Os 3 atos:**
  1. A física: a ilha-barreira que rola para trás (a onda que passa por cima e leva a areia para o lado do estuário).
  2. A história: os 200 anos de naufrágios, o farol de 1870, a estrada e as casas na beira, o farol arrastado em 1999.
  3. O hoje: as casas que caem desde 2020, a estrada NC 12 e o que fazer com uma ilha que anda.
- **A miniatura:** a costa da Carolina do Norte em relevo amarelo; os Outer Banks em vermelho, finos; o estuário (Pamlico Sound) em ciano; setas
  brancas grossas empurrando a ilha para oeste; na caixa preta, "MOVING".
- **A procura** (não medido no vidIQ):
  - Achados: notícia e enxame das casas: "Outer Banks Houses Keep Falling Into the Ocean | 32 Homes Gone, FEMA Finally Steps In" (Daily Weather
    Report, 07/11/2026, **83.979**) e dezenas de notícias locais. Nenhum explicador do "por que a ilha anda" achado.
  - O porquê de agora: as casas de 2025-2026 e o vídeo de dez dias atrás.
  - **Buscas prováveis:** "outer banks houses collapsing", "rodanthe houses falling into ocean", "are the outer banks disappearing", "cape hatteras
    lighthouse move", "outer banks erosion". O título cobre "outer banks".
- **Os riscos:** fato volátil (mais casas a cada tempestade); clima puxa comentário; o enxame já está na notícia. Imagem farta (NPS, USGS, NOAA,
  domínio público).
- **A nota: 6,0.** A busca é grande e o farol dá a virada. Não sobe porque o lugar está na notícia agora e o enxame chega antes de nós.

## 6 · O lago Tahoe (`lago-tahoe`) · **6,0**

- **Título de trabalho:** "Why Lake Tahoe Is Split Between Two States" (42).
  - Variantes: "Why Nevada's Casinos Stop at a Line in Lake Tahoe" (49); "Why Lake Tahoe Is Two-Thirds California and One-Third Nevada" (60).
- **O paradoxo:** o lago alpino mais famoso dos EUA tem uma linha de estado que dobra no meio da água, e de um lado da linha há cassinos, do
  outro, não.
- **O gancho:** "Lake Tahoe is 1,645 feet deep, and a state line runs straight through it. On one shore, it's quiet. On the other, casinos stand a
  few steps from the line. Why is America's most famous alpine lake split in two?" (42 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "Greatest Depth - 501.4 m (1,645 ft)"; "Total Surface Area - 307.4 km (191 sq miles)"; "The Truckee River, its only outlet flow east through Reno
     and drains into Pyramid Lake in Nevada." NASA JPL: https://laketahoe.jpl.nasa.gov/site-description/morefacts.html
  2. O decreto da Suprema Corte de 01/06/1982 (a decisão é de 10/06/1980): "the only angle point of the true California-Nevada state boundary
     within the waters of Lake Tahoe", tido como a interseção do meridiano 120 com o paralelo 39 das constituições dos dois estados.
     https://caselaw.findlaw.com/court/us-supreme-court/456/867.html
  3. Em 19/03/1931, o governador Fred Balzar sancionou o A.B. 98, que devolveu o jogo "wide open" a Nevada (UNLV, "My Nevada 5"):
     https://www.unlv.edu/news/article/my-nevada-5-days-changed-gaming-world
  - **A confirmar:** a fração do lago em cada estado (a TRPA e o USGS recusaram, 403); o pacto dos dois estados de 1969, a primeira agência
    ambiental de duas unidades da federação (a TRPA recusou); o erro de quase uma milha da linha de Von Schmidt (1873) e a nova medição de 1893-1899
    (resumo de busca); a proibição do jogo na Califórnia.
- **A medida nossa:** a área do lago de cada lado da linha (NHD do USGS e o limite dos estados do Census): espera-se perto de 2/3 na Califórnia; a
  distância de cada cassino à linha (OSM), em pés; a linha de Von Schmidt contra a de hoje, desenhadas no mapa.
- **Os 3 atos:**
  1. A geografia: a falha que fez o lago, a profundidade, o único rio que sai e vai morrer num lago de Nevada.
  2. A história: a linha que as constituições puseram no papel e que ninguém achou no chão; as medições que erraram; a Suprema Corte em 1980.
  3. O hoje: os cassinos colados na linha, o pacto dos dois estados, quem decide sobre o lago.
- **A miniatura:** a Sierra em relevo amarelo; o lago em azul; o lado de Nevada pintado de vermelho e o da Califórnia neutro; a linha branca
  que dobra no meio da água; os cassinos como pontos ciano; na caixa preta, "SPLIT".
- **A procura** (não medido no vidIQ):
  - Achados: o curto "Why Does California's Border Bend? 🤯 Lake Tahoe Explains It" (HistoWhy, 1,43 mil inscritos, 22/10/2026, **721.957**): a
    procura do ângulo está provada, e o ângulo já tem dono em curto. Os longos são de viagem.
  - O porquê de agora: o curto viral de outubro; Tahoe é busca perene.
  - **Buscas prováveis:** "lake tahoe california nevada border", "why does california's border bend", "lake tahoe casinos", "which state is lake
    tahoe in", "lake tahoe depth". O título cobre "lake tahoe"; a variante 2 cobre "casinos".
- **Os riscos:** colisão com o curto de 722 mil (o tema é o mesmo; o título longo tem de ser outro, e é); o enxame pode fazer o longo antes;
  14 minutos pedem as três camadas (falha, linha, jogo). Imagem: NASA, USGS, Biblioteca do Congresso.
- **A nota: 6,0.** A busca é enorme e a procura do ângulo foi provada há 26 dias. Cai pela mesma razão: o curto chegou primeiro.

## 7 · O lago Okeechobee (`okeechobee`) · **6,0**

- **Título de trabalho:** "Why Florida Hid Its Biggest Lake Behind a 143-Mile Wall" (55).
  - Variantes: "Why You Can't See Lake Okeechobee From Most of Its Shore" (56); "Why Florida Dumps Lake Okeechobee Into the Ocean" (48).
- **O paradoxo:** o maior lago do Sudeste dos EUA está cercado por um muro de terra de 143 milhas, e quando enche, a Flórida manda a água para o
  mar pelos dois lados, em vez de para o sul, para onde ela corria.
- **O gancho:** "Florida's biggest lake covers 730 square miles. Yet from most of the towns around it, you can't even see it: a 143-mile wall of earth
  stands in the way. And when it fills up, Florida sends the water out to sea. Why?" (45 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "With a surface area of 730 square miles, it is the largest lake in the southeastern United States"; "an average depth of only 9 feet".
     SFWMD: https://www.sfwmd.gov/our-work/lake-okeechobee
  2. "The Herbert Hoover Dike is a 143-mile earthen dam that surrounds Lake Okeechobee"; nos anos 1920, "flooding from hurricanes killed thousands";
     reforma desde 2005, abaixo de US$ 1,8 bilhão, concluída em 25/01/2023. Corpo de Engenheiros (DVIDS):
     http://www.dvidshub.net/news/437213/usace-celebrates-completion-herbert-hoover-dike-restoration-project
  3. Em 16/09/1928, o vento "piled the water up at the south end of the lake, ultimately topping the levee"; "More than 2,500 people drowned".
     NWS Miami: https://www.weather.gov/mfl/okeechobee
  4. O reservatório da área agrícola (EAA) "will hold 240,000 acre-feet", agora para 2029 (era 2034), para reduzir as descargas "to the
     Caloosahatchee and St. Lucie estuaries" e mandar a água para o sul. SFWMD: https://www.sfwmd.gov/our-work/cerp-project-planning/eaa-reservoir
  5. O lago em volta: Glades, 13.270; Hendry, 48.276; Palm Beach, 1.575.726 moradores (Census, 2025).
  - **A confirmar:** que não se vê o lago das estradas (um blog de viagem); o fluxo natural para o sul até os Everglades numa fonte oficial; as
    emergências das algas de 2016 e 2018; a página do Corpo de Engenheiros (403).
- **A medida nossa:** o volume médio do lago, 730 mi² × 640 acres × 9 pés ≈ **4,2 milhões de acre-pés**; o reservatório novo guarda **5,7 %**
  disso (conta minha). O caminho da água antes e depois, no mapa (os canais de hoje contra o lençol que corria para o sul), e as descargas medidas
  do SFWMD por ano, para o leste e o oeste.
- **Os 3 atos:**
  1. A geografia: o lago raso que transbordava para o sul e virava os Everglades.
  2. A história: a drenagem, os furacões de 1926 e 1928, o muro.
  3. O hoje: a cana no lugar do rio, as algas nas duas costas, o reservatório de 2029.
- **A miniatura:** a Flórida em relevo amarelo; o lago em ciano dentro de um anel vermelho (o muro); duas setas brancas grossas saindo para leste
  e oeste até o mar; na caixa preta, "WALLED IN" (a B: "WRONG WAY").
- **A procura** (não medido no vidIQ):
  - Achados: "Lake Okeechobee's 143-Mile Dike Is FAILING — Florida's $20 Billion Flood Bomb" (US Weather Alert, 28/06/2026, 8.420; o ângulo do
    medo, com o fato desatualizado: a reforma acabou em 2023) e notícias locais das descargas. Nenhum explicador achado.
  - O porquê de agora: o reservatório antecipado para 2029; as algas do verão de 2026.
  - **Buscas prováveis:** "lake okeechobee", "lake okeechobee dike", "lake okeechobee discharges", "why can't you see lake okeechobee", "1928
    okeechobee hurricane". O título principal não diz o nome: a variante 1 diz, e é ela que a busca acha.
- **Os riscos:** a indústria do açúcar e a política da água (fatos com fonte, sem lado); o "hid" do título é interpretação (o muro foi feito para
  segurar a água, não para esconder). Imagem: NOAA, USACE, Landsat, Florida Memory (licença a conferir).
- **A nota: 6,0.** O paradoxo é concreto e o ângulo está livre. Não sobe porque o "muro" tem resposta curta (os furacões) e a Flórida rendeu pouco
  no canal de referência (o Miami da Geo Lens: 818 views em 4 dias).

## 8 · O lago Eyre (`lago-eyre`) · **5,5**

- **Título de trabalho:** "Why Australia's Biggest Lake Is Usually Empty" (45).
  - Variantes: "Why Lake Eyre Filled Two Years in a Row for the First Time" (58); "Why Australia's Rivers Run Into a Lake That Isn't There" (55).
- **O paradoxo:** o maior lago da Austrália, no ponto mais baixo do continente, quase sempre não tem água; e em 2025-2026 encheu dois anos seguidos,
  o que nunca se tinha registrado.
- **O gancho:** "Australia's biggest lake covers more than 3,700 square miles, at the lowest point on the continent. Most years, it holds almost no
  water at all. Then it flooded in 2025, and again in 2026, something never recorded before. Why?" (43 palavras; o 2026, a confirmar)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "The lowest point in Australia is Kati Thanda-Lake Eyre in South Australia at 15 metres below sea level"; o lago tem 9.690 km² (3.741 mi²,
     conta minha). Geoscience Australia: https://www.ga.gov.au/scientific-topics/national-location-information/landforms/elevations
  2. A NASA, em 02/01/2026, sobre a imagem do Landsat 8 de 15/12/2025: só Belt Bay e Madigan Gulf "still contained some water"; depois das cheias
     completas de 1950, 1974 e 1984, "it took up to two years to dry out again".
     https://science.nasa.gov/earth/earth-observatory/lake-eyre-blushes/
  3. Em 26/02/2026, o lago deveria encher "for the first time in recorded history" pelo segundo ano seguido; "has only filled to near or full
     capacity four times". InDaily: https://www.indailysa.com.au/news/just-in/2026/02/26/record-flooding-to-wash-over-outback-wonder
  - **A confirmar:** a bacia de 1,2 milhão de km², 1/6 da Austrália (o DCCEEW não respondeu); o que de fato aconteceu em 2026 (só li a previsão
    de fevereiro); a medida oficial da cheia.
- **A medida nossa:** a área com água a cada mês de 2016 a 2026, contada no Sentinel-2 ou no Landsat: a curva que sobe em 2025 e de novo em 2026;
  a bacia sem saída para o mar como fração da Austrália, pelo HydroSHEDS (espera-se ~1/6).
- **Os 3 atos:** (1) a física: a bacia que não chega ao mar, o rio que vem de Queensland, o calor que evapora; (2) a história: os povos Arabana, os
  exploradores que procuravam um mar interior, as cheias de 1950 e 1974; (3) o hoje: as duas cheias seguidas, os pássaros, os aviões de turistas.
- **A miniatura:** a Austrália em relevo amarelo; a bacia do Eyre em vermelho; o lago em ciano; as setas brancas dos rios descendo de Queensland e
  parando; na caixa preta, "EMPTY?".
- **A procura** (não medido no vidIQ): notícias ("At Kati Thanda-Lake Eyre, an 'inland tsunami' is making a sea", ABC News Australia, 30/05/2025,
  159.517) e um vídeo minúsculo do enxame ("Why Half of Australia's Rivers Never Reach the Sea", BlameTheMap, 10/10/2026, 57). O porquê de agora: as
  duas cheias seguidas. **Buscas prováveis:** "lake eyre", "lake eyre 2026", "kati thanda lake eyre flood", "why is lake eyre dry", "australia's
  largest lake". O título não diz o nome; a variante 1 diz.
- **Os riscos:** o fato de 2026 está a confirmar; o nome é menos buscado fora da Austrália; a resposta ("é deserto") é adivinhável. Imagem:
  NASA, Landsat, domínio público.
- **A nota: 5,5.** A notícia ajuda e o mapa é bonito; a busca e a surpresa são menores que as dos de cima.

## 9 · O estreito de Torres (`estreito-torres`) · **5,5**

- **Título de trabalho:** "Why Australia's Border Hugs the Coast of Papua New Guinea" (57).
  - Variantes: "Why These Australian Islands Sit Next to Papua New Guinea" (57); "The Australian Islands Where You Can See Another Country" (56).
- **O paradoxo:** ilhas australianas ficam a uns 3 km da praia de Papua-Nova Guiné e a mais de 100 milhas da Austrália continental; o fundo do mar
  em volta delas é de outro país.
- **O gancho:** "Saibai Island is part of Australia. From its northern shore, the coast of another country is less than two miles away. Mainland
  Australia is far to the south. Why does Australia's border run right along Papua New Guinea's beach?" (39 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. Saibai fica "just over three kilometres from Papua New Guinea's southern coastline" (Biblioteca do Estado de Queensland, 30/01/2012):
     https://www.slq.qld.gov.au/blog/life-border-saibai-island
  2. Em 06/10/2025, Austrália e Papua-Nova Guiné assinaram o tratado de defesa mútua: "The Alliance will be Australia's first in more than 70 years,
     and Papua New Guinea's first with any country"; os dois vão "act together to meet the common danger".
     https://www.pm.gov.au/media/australia-and-papua-new-guinea-sign-mutual-defence-treaty
  - **NÃO CONFERIDO (site recusou ou não respondeu):** o tratado de Torres (assinado em 1978, em vigor desde 1985), a linha do fundo do mar e a da
    pesca, as ilhas ao norte da linha do fundo e a Zona Protegida (DFAT não respondeu; AustLII e o Senado recusaram, 403); a entrada em vigor do
    tratado de defesa (08/07/2026) e o recrutamento de papuásios pelas Forças Armadas australianas a partir de 16/11/2026 (a Defesa não respondeu).
  - **A confirmar:** a anexação das ilhas por Queensland em 1879.
- **A medida nossa:** a menor distância de Saibai, Boigu e Dauan à costa de Papua-Nova Guiné e à ponta do cabo York (OSM e Natural Earth): as fontes
  divergem de 3 a 5 km, e o vídeo dá o número dele; a área dos mares territoriais australianos dentro do fundo de Papua-Nova Guiné.
- **Os 3 atos:** (1) a geografia: o estreito raso que já foi ponte de terra, as ilhas e os recifes; (2) a história: Queensland, a independência de
  Papua-Nova Guiné em 1975, o tratado de 1978 e as duas linhas; (3) o hoje: a zona onde os ilhéus cruzam sem passaporte, o tratado de defesa de 2025.
- **A miniatura:** o cabo York e a Nova Guiné em relevo amarelo; as ilhas australianas em vermelho, coladas na costa; o mar em azul com a linha
  da fronteira em branco desenhando o contorno; na caixa preta, "STILL AUSTRALIA" (a B: "3 KM", depois da medida).
- **A procura** (não medido no vidIQ): nenhum explicador achado em inglês (só vídeos de viagem e notícias de segurança). O porquê de agora: a
  aliança de 2025-2026. **Buscas prováveis:** "torres strait islands", "australia papua new guinea border", "saibai island", "closest point
  australia to png", "pukpuk treaty". O título cobre "australia" e "papua new guinea".
- **Os riscos:** os fatos centrais do tratado não foram lidos (sites recusaram); questões indígenas (Mabo, direitos tradicionais) pedem cuidado de
  voz; o nome do lugar é pouco buscado. Imagem: escassa (a conferir no Commons e na NASA).
- **A nota: 5,5.** O mapa é o paradoxo, e o Lucas pediu a Austrália. Cai pelos fatos não lidos e pela busca fraca.

## 10 · O Rio Grande e o tratado de 1944 (`rio-grande-tratado`) · **5,5**

- **Título de trabalho:** "Why Mexico Owes Texas Water" (27).
  - Variantes: "Why Mexico Pays Its Debt to Texas in Water" (42); "Why the Rio Grande Below El Paso Runs on Mexican Water" (54; a confirmar pela
    medida).
- **O paradoxo:** o rio que é a fronteira recebe boa parte da água dele do México, e um tratado de 1944 obriga o México a mandar ao Texas uma parte
  dos rios mexicanos; no último ciclo, faltaram 865 mil acre-pés.
- **O gancho:** "The Rio Grande is the border between Texas and Mexico. Under a 1944 treaty, Mexico must send Texas a share of its own rivers every
  five years, and in the last cycle it came up about 865,000 acre-feet short. Why does Mexico owe Texas water?" (44 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. O México deve "one-third of specified Mexican tributaries flows, which must average at least 0.35 million acre-feet (MAF) per year", em ciclos
     de cinco anos (1,75 MAF); os EUA entregam ao México "1.5 MAF of Colorado River water per year"; no ciclo de 2020-2025, o México entregou 0,88 MAF;
     em fevereiro de 2026, comprometeu-se com 0,35 MAF por ano e um plano para a falta. CRS IF12976, 06/03/2026:
     https://www.everycrsreport.com/files/2026-03-06_IF12976_748e5ea321b862d2e50c43739c84298780785b86.html
  2. Em 26/10/2026, o México disse ter cumprido o piso de 350 mil acre-pés do primeiro ano do ciclo 37; o acordo é de 31/01/2026; no ciclo 36, "884,861
     acre-feet" contra 1,75 milhão, uma falta de ~865 mil. Smart Water Magazine:
     https://smartwatermagazine.com/news/smart-water-magazine/mexico-says-it-met-the-350000-acre-feet-rio-grande-water-delivery-floor-agreed-with-the-us
  - **A confirmar:** a ameaça de tarifa de 5 % de dezembro de 2025 numa fonte oficial (só o título de um vídeo de 09/12/2025); os rios mexicanos do
    tratado (o Conchos e outros) no texto do tratado (IBWC).
- **A medida nossa:** com as vazões abertas da IBWC, a fração da água do Rio Grande abaixo do Conchos que vem do México, contra a que vem de cima de
  Fort Quitman: espera-se a maior parte do México. É o número que o título 3 pede.
- **Os 3 atos:** (1) a geografia: o rio que seca antes de El Paso e renasce com o Conchos; (2) a história: o tratado de 1944, a troca do Colorado
  pelo Rio Grande; (3) o hoje: a falta de 2020-2025, a pressão de 2025, o acordo de 2026.
- **A miniatura:** o Texas e o norte do México em relevo amarelo; a bacia do Conchos em vermelho; o Rio Grande em ciano; setas brancas grossas
  do México para o rio; na caixa preta, "IOU".
- **A procura** (não medido no vidIQ): muita notícia em 2025 (KSAT, CNN-News18, Telemundo) e "What Happens When The Rio Grande Runs Dry?" (KRQE,
  04/08/2025, 3.760); nenhum explicador de geografia achado. **Buscas prováveis:** "mexico water debt", "1944 water treaty", "rio grande water
  texas mexico", "why is the rio grande drying up", "mexico owes texas water". O título cobre a última.
- **Os riscos:** política de fronteira e tarifas; fato volátil; tema de tratado de água logo depois do vídeo 7 (o mais parecido de todos).
- **A nota: 5,5.** A geopolítica é de verdade e o Texas atrai, mas é o vídeo 7 com outro rio, e a busca é de notícia.

## 11 · O Red River do Norte (`red-river`) · **5,0**

- **Título de trabalho:** "Why Fargo's River Flows North Into Canada" (41).
  - Variantes: "Why the Red River Floods by Flowing the Wrong Way" (49); "Why This American River Floods Every Spring" (43).
- **O paradoxo:** um dos poucos rios dos EUA que corre para o norte, para o Canadá, num dos vales mais planos do continente; é por isso que inunda.
- **O gancho:** "Every spring, Fargo braces for the same flood. The Red River crosses one of the flattest landscapes in North America, and unlike
  almost every river in the U.S., it flows north into Canada. Why does that make it so dangerous?" (41 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. "one of the few rivers in the United States to flow directly north into Canada"; "less than 0.5-foot drop in elevation per mile" abaixo de Grand
     Forks; "The basin flood plain lies in a glacial lakebed". USGS:
     https://www.usgs.gov/centers/dakota-water-science-center/science/red-river-basin-flooding
  2. Em Grand Forks, "On April 22 the peak of record stage was 54.35 ft" (1997). USGS:
     https://www.usgs.gov/centers/dakota-water-science-center/red-river-north-grand-forks-north-dakota-129-years
  3. O rio "flows north into Canada and eventually into Hudson Bay"; "the relatively flat slope of the valley". NWS Grand Forks:
     https://www.weather.gov/fgf/AnatomyRedRiverSpringFlood
  4. O condado de Cass (Fargo) tem 201.794 moradores (Census, 2025).
  - **A confirmar:** o assunto exato dos dois vídeos de engenharia de 2026 (abaixo); a abertura do desvio de Fargo; o canal de Winnipeg.
- **A medida nossa:** a queda do rio de Fargo ao lago Winnipeg no DEM, em polegadas por milha, contra o Mississippi; o atraso do degelo do sul ao
  norte (datas da NOAA).
- **Os 3 atos:** (1) o lago glacial Agassiz e o vale plano; (2) as cheias de 1897, 1997 e 2009; (3) o desvio de Fargo e o Canadá rio abaixo.
- **A miniatura:** o vale em relevo amarelo; a bacia do Red River em vermelho; o rio em ciano com uma seta branca grossa para o norte; na caixa
  preta, "WRONG WAY".
- **A procura** (não medido no vidIQ): "America's Most Important Megaproject You've Never Heard Of" (Build Core, 14/08/2026, **1.153.174**) e "How Is
  This $3 Billion Earthmoving Project Saving a City?" (BuildWitt, 08/08/2026, **745.575**), achados na busca do Red River e de Fargo: a procura existe,
  mas o porquê do rio já deve estar dentro deles. **Buscas prováveis:** "red river flows north", "why does fargo flood", "red river flooding",
  "fargo diversion". O título cobre "fargo" e "flows north".
- **Os riscos:** colisão com os dois vídeos de engenharia; o lugar é pouco conhecido fora dos EUA; enchentes trazem perdas (1997).
- **A nota: 5,0.** O paradoxo é claro, mas a procura do lugar já foi colhida em agosto.

## 12 · O delta do Sacramento-San Joaquin (`delta-california`) · **5,0**

- **Título de trabalho:** "Why California's Water Runs Through Islands Below Sea Level" (59).
  - Variantes: "Why California Farms Islands 25 Feet Below Sea Level" (52); "Why the Sacramento Delta Is Sinking" (35).
- **O paradoxo:** a água de milhões de californianos passa por ilhas que afundaram até 26 pés abaixo do mar, seguras por 1.100 milhas de diques.
- **O gancho:** "Much of California's water passes through a maze of islands east of San Francisco. Some of them now sit more than 20 feet below sea
  level, behind 1,100 miles of levees. How did the state's water supply end up below the sea?" (43 palavras)
- **Os fatos-chave** (lidos em 17/11/2026):
  1. As ilhas afundaram "below sea level by 9 to 26 feet or more" quando a turfa secou; "1,100 miles of levees"; o delta "serves as the hub of
     California's freshwater-delivery system". USGS:
     https://www.usgs.gov/centers/land-subsidence-in-california/science/subsidence-sacramento-san-joaquin-delta
  - **NÃO CONFERIDO (site recusou):** "over 150,000 acres of land up to 25 feet below sea level" e os "27 million Californians" (Delta Conservancy,
    403).
  - **A confirmar:** a situação do túnel do delta em 2026.
- **A medida nossa:** a área abaixo do nível do mar no DEM do USGS (3DEP), em milhas quadradas, e a ilha mais funda.
- **Os 3 atos:** (1) o pântano de turfa; (2) a drenagem e os diques desde a corrida do ouro; (3) a água do estado, o sal e o túnel.
- **A miniatura:** a Califórnia central em relevo amarelo; as ilhas abaixo do mar em vermelho; os rios em azul; o delta num anel ciano; na
  caixa preta, "−25 FT".
- **A procura** (não medido no vidIQ): "California's $20 Billion Underground River: The Delta Tunnel Explained" (The Impossible Build, 20/06/2025,
  106.344) e notícias. **Buscas prováveis:** "sacramento delta below sea level", "delta tunnel", "california delta levees", "where does california
  water come from". O título cobre "california water".
- **Os riscos:** o nome ("the Delta") é pouco conhecido fora da Califórnia; o túnel é briga política; dois fatos centrais recusados.
- **A nota: 5,0.**

---

## A lista inteira: 35 candidatos, em uma linha cada

Os 12 de cima, mais 23 que caíram. Todos caíram em 17/11/2026, na busca de concorrência (YouTube pela busca da web e pela página `/watch`).

| # | Candidato | Destino |
|---|---|---|
| 1 | O Vale Imperial e o Colorado | **desenvolvido, 7,0** |
| 2 | Banff | **desenvolvido, 6,5** |
| 3 | O porto de Houston | **desenvolvido, 6,5** |
| 4 | Jackson Hole | **desenvolvido, 6,5** |
| 5 | Os Outer Banks | **desenvolvido, 6,0** |
| 6 | O lago Tahoe | **desenvolvido, 6,0** |
| 7 | O lago Okeechobee | **desenvolvido, 6,0** |
| 8 | O lago Eyre | **desenvolvido, 5,5** |
| 9 | O estreito de Torres | **desenvolvido, 5,5** |
| 10 | O Rio Grande e o tratado de 1944 | **desenvolvido, 5,5** |
| 11 | O Red River do Norte | **desenvolvido, 5,0** |
| 12 | O delta da Califórnia | **desenvolvido, 5,0** |
| 13 | A ponte que falta entre Long Island e Connecticut | caiu: "Why Long Island Is Farther From Connecticut Than It Looks" (Geography Effect, 02/10/2026, 225.661) e Geography 360 (19/08/2025, 229.179) |
| 14 | A ponte que falta para a ilha de Vancouver | caiu: MegaBuilds, "The Real Reason Canada Can't Bridge Vancouver Island" (15/11/2026, 449.400 em dois dias) |
| 15 | A água dos Grandes Lagos que não pode sair (Waukesha) | caiu: "The Water the West Legally CAN'T Touch" (Why the Map TV, 27/08/2026, 300.312), o mesmo ângulo; a procura está provada |
| 16 | A Grande Bacia, onde nenhum rio chega ao mar | caiu: Geoff (27/05/2025, 888.976), Half as Interesting (22/04/2026, 228.510) e o enxame (01/10/2026) |
| 17 | Churchill, o porto ártico sem estrada | caiu: o enxame de 2026 ("Ottawa Sold This Port for $1…", 06/10/2026, 58.849; "Why Canada Picked the Wrong Arctic Port", 16/08/2026) |
| 18 | Nunavut, o território sem estrada | caiu: "Why you CAN'T DRIVE to NUNAVUT" e os vídeos da estrada ártica de 2026 |
| 19 | A Passagem do Noroeste | caiu: o título quase igual do enxame, já visto em 08/11 |
| 20 | Saint-Pierre e Miquelon | caiu: pelo menos quatro "Why France Owns…" e as notícias do mapa de Trump |
| 21 | Point Roberts | caiu: pelo menos seis vídeos, e as tarifas já viraram vídeo |
| 22 | A faixa do Alasca que fecha a costa do Canadá | caiu: pelo menos seis vídeos ("Why Does Alaska Have a Panhandle?"…) |
| 23 | A ponte entre a Europa e a África | caiu: saturado (pelo menos oito títulos "Why There Is No Bridge…") |
| 24 | Snowy 2.0, a bateria debaixo da montanha | caiu: notícia saturada e enxame ("…Turned into a $42 Billion Disaster") |
| 25 | Por que o governo federal é dono de Nevada | caiu: CGP Grey, "Why Nevada Doesn't Own Nevada" e outros |
| 26 | O lago Tulare que voltou | caiu: saturado desde 2023, com enxame |
| 27 | O Hudson que corre para os dois lados | caiu: "The River That Flows Two Ways", "Why the Hudson River Is Not What You Think" |
| 28 | As 18 milhas de costa de New Hampshire e o estaleiro no Maine | caiu: pelo menos três vídeos do tema |
| 29 | Por que 70 % do Havaí mora em Oahu | caiu: "Why Nobody Lives On These Hawaiian Islands" (GlobeHaven, 16/11/2024, 125.978) e curtos |
| 30 | O porto de Darwin arrendado à China | caiu: notícia saturada e política em curso |
| 31 | A ponte que falta para a Tasmânia | caiu: pelo menos três vídeos ("Australia's Insane Plan To Build A Bridge To Tasmania"…) |
| 32 | O Labrador que o Quebec não aceita | caiu: "Why the Parti Québécois Wants to Take Over Labrador" (DylanEDU, 31/08/2026, 13.869) e política em curso |
| 33 | A foz do Murray, aberta por dragas | caiu: ângulo livre, mas o lugar é pouco conhecido fora da Austrália (nota ~4,5) |
| 34 | A reserva de petróleo dos EUA em cavernas de sal | caiu: "America's Secret Salt Caverns…" (YouCanDo TV, 06/07/2026, 153.689) |
| 35 | A base americana nas Galápagos | caiu: risco (o plebiscito de novembro de 2025 e as operações militares americanas na região, ainda em curso) e notícia volátil |

---

## O meu top 3, e por quê

1. **"Why One Valley Holds Nearly as Much Colorado River Water as Arizona" · 7,0.** É o único em que as duas portas estão abertas ao mesmo tempo:
   "colorado river" é busca de notícia em 2026 (a decisão de 21/08 e o corte de 760 mil acre-pés do Arizona), e o paradoxo se vê no mapa em 2 segundos.
   O número é primário (o relatório do Congresso e o Interior) e é nosso: 93 % do Arizona, 8,7 vezes Nevada, 157 vezes mais água por morador. Ninguém
   fez o explicador. O contra: é água de novo, logo depois do Columbia.
2. **"Why You Can't Just Move to Banff" · 6,5.** A maior busca da lista, o Canadá que o Lucas pediu, um paradoxo que se prova com a letra da lei
   (o "eligible resident" e o teto de 361.390 m²) e nenhum vídeo em inglês com o ângulo. O contra: o porquê é mais lei de parque que geografia, e o
   mapa tem de carregar o vale, a ferrovia e o limite.
3. **"Why America's Busiest Port Is 50 Miles From the Sea" · 6,5.** A geografia explicando o poder, no Texas, com uma história que se paga (Galveston,
   o furacão, o canal de 1914) e nenhum concorrente em inglês. Empatou com Jackson Hole (6,5); Houston fica na frente porque Jackson Hole já está
   cercado pelo enxame de mansões, e Houston não tem ninguém.

## O que ficou a confirmar de mais importante

1. **Vale Imperial:** o uso real do IID (não só o direito de 2,6 milhões) e como a Califórnia reparte o corte de 440 mil em 2027-2028; disso depende
   o "nearly as much as Arizona" e a virada "vai passar o Arizona". O site do IID recusou.
2. **Banff:** a população (8.305 é de 2021 e veio de resumo de busca; a Statistics Canada e o jornal recusaram) e a área da cidade contra a do parque.
3. **Houston:** que a liderança em tonelagem vale na tabela do Corpo de Engenheiros (hoje é a palavra do próprio porto), e o papel exato do
   furacão de 1900 (o Handbook diz que o porto de Galveston reabriu em duas semanas).
4. **Concorrência:** nada foi medido no vidIQ. A busca da web não prova ausência. O teste de colisão do título dos três primeiros é a primeira coisa a
   medir.
5. **Torres:** os fatos do tratado de 1978 e a entrada em vigor da aliança não foram lidos (sites recusaram ou não responderam).

---

## Os arquivos de trabalho

- `out/_pautas/video-8/_trabalho/yt_meta.py` e `yt_linha.py`: a leitura das páginas `/watch` (data, views, canal), um pedido por vez.
- `out/_pautas/video-8/_trabalho/lote2.jsonl` a `lote4.jsonl`: as respostas brutas dessas leituras.
- `out/_pautas/video-8/_trabalho/censo_condados.py` e `co-est2025-alldata.csv`: as estimativas dos condados do Census (safra 2025).
- `out/_pautas/video-8/_trabalho/pdf_grep.py`: a leitura dos PDFs (CRS, Port Houston, Water Boards).
- `out/_pautas/video-8/_trabalho/titulos.py`: a contagem de caracteres dos títulos.
