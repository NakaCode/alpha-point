# Cético: `acre-ferrovia` ("The Railroad Brazil Built to Pay for a Piece of the Amazon"), 18/11/2026

**Veredito: DERRUBADO. Nota: 3,0 / 10.**

A pauta cai pela régua nova. O ângulo não está só no enxame minúsculo que a Sala viu: ele **viralizou em português** nos últimos 2 meses, e os
nove dias de vídeos minúsculos são o rabo dessa onda.
- **Os curtos virais:** dois curtos passaram de 100 mil sobre exatamente "o Brasil comprou o Acre":
  - "Por que o Acre é do Brasil?", com **622.385 views em 27/10/2026**;
  - "O Brasil comprou o Acre", com **431.252 views em 02/10/2026**.
- **A ferrovia, em espanhol:** o nosso ângulo da ferrovia já saiu num curto de 38 mil views, "Bolivia cambió el Acre por un tren… que nunca
  entró a Bolivia" (04/11).
- **Os vídeos longos com público desde 23/09** passam de 3 nas duas metades do ângulo: são 4 sobre o Acre (em PT e em ES) e 4 sobre a
  Madeira-Mamoré (em PT, de 5 mil a 54 mil views).
- **O inglês:** a cópia já começou, com cinco curtos e dois longos minúsculos de 01/10 a 13/11. Um deles usa "piece of the Amazon"; outro,
  "…With a Railway".

Notícia quente não achei: a onda nasceu no próprio YouTube, e o aniversário do tratado (17/11) a empurrou.

**A régua derruba sozinha, e há mais dois problemas, de mérito:**
- **A ferrovia não foi o "pagamento" que o título diz.** O próprio Rio Branco, na exposição de motivos do tratado, diz que a ferrovia era uma
  promessa de 1867, renovada em 1882 "sem que pedíssemos por isso qualquer compensação territorial". Diz também que ela seria construída em
  território brasileiro e que era "de maior proveito para nós".
- **A pauta não responde à pergunta do Lucas.** O Acre é 2 % do Brasil. Quem clica em "por que o Brasil ficou tão grande" ganha a história dos
  últimos 2 %, e a parte que responde (a linha de 1494) é justamente a da onda que derrubou a pauta 6.

Lido entre ~11:24 e ~11:40 de 18/11/2026. Os scripts, as leituras e as respostas brutas estão em
`out/_pautas/video-8-brasil/_trabalho/cetico-acre-ferrovia/`:
- `vidiq.tsv`: as 8 chamadas;
- `watch-a.jsonl`, `watch-b.jsonl` e `watch-c.jsonl`: 25 páginas `/watch` conferidas;
- `conta_acre.py` e `conta-acre-saida.txt`: a conta refeita;
- `leituras/`: os textos lidos;
- `robots/`: os robots.txt lidos.

Os arquivos grandes estão em `midia/_pautas/video-8-brasil/cetico-acre-ferrovia/`, fora do git:
- o volume V das Obras do Barão do Rio Branco (FUNAG, 2012; sha256 `2891ead0…c4e0b`);
- as áreas territoriais 2022 do IBGE (sha256 `2aa31290…7fb14`).

## 1. Os fatos

| # | Fato | Fonte (lida em 18/11/2026) | Veredito |
|---|---|---|---|
| F1 | O Brasil paga "£ 2.000.000 (dois milhões de libras esterlinas)", "em duas prestações de um milhão de libras cada uma", e o motivo escrito é "Por não haver equivalência nas áreas dos territórios permutados". | Tratado de Petrópolis, art. III, promulgado pelo Decreto 5.161, de 10/03/1904: https://www2.camara.leg.br/legin/fed/decret/1900-1909/decreto-5161-10-marco-1904-583837-publicacaooriginal-106599-pe.html | **CONFERE**. O tratado chama o arranjo de permuta com indenização, não de compra. |
| F2 | O Brasil se obriga "a construir em território brasileiro" uma ferrovia de Santo Antônio, no Madeira, a Guajará-Mirim, no Mamoré, com um ramal até Villa Bella (Bolívia), e "se esforçará por concluir no prazo de quatro anos". | Mesmo decreto, art. VII | **CONFERE**. A ferrovia corre inteira dentro do Brasil, e o ramal boliviano não aparece em nenhuma fonte como construído (o curto do Ñerd é sobre isso). |
| F3 | Os 191 mil km² são "142.900 km2 de terra que lhe disputávamos e … 48.100 km2 de terra que era reconhecidamente sua". O Brasil dá à Bolívia 2.296 + 723 + 116 + 20,3 + 8,2 km², ou seja, **3.163,5 km²**. E "não se tratava precisamente de cessão, mas de permuta de territórios". | Rio Branco, exposição de motivos de 27/12/1903, em *Obras do Barão do Rio Branco V* (FUNAG, 2012), p. 58–59: https://funag.gov.br/biblioteca-nova/pdf/mostraPdf/6/128/… | **CONFERE**. O "mais de 3.000 km²" do gerador está certo. Mas três quartos da terra eram reivindicados pelo próprio Brasil: o que se pagou foi, em grande parte, o fim de uma disputa. |
| F4 | **A ferrovia "É execução de promessa feita à Bolívia no artigo 9o do Tratado de 1867 e renovada solenemente no de 15 de março de 1882 … sem que pedíssemos por isso qualquer compensação territorial"**, e ela vem "com a feliz circunstância de ser ainda de maior proveito para nós". | Mesma exposição, p. 60 | **CONFERE** como palavra de Rio Branco. Os textos de 1867 e 1882 não foram lidos. **Isto derruba o título** (K3). |
| F5 | A renda do Acre "garante de sobra o sacrifício do nosso Tesouro e promete, mesmo em breve tempo, amortizar totalmente o desembolso". | Mesma exposição, p. 61 | **CONFERE** como previsão de 1903. Se ela se cumpriu, não foi medido. |
| F6 | Em 1909, 39.000 km² foram ao Peru, e "o Acre diminuía seu território de 191.000 km2 para 152.000 km2". O estado do Acre tem hoje **164.173,429 km²** (o Brasil, 8.510.417,771). | Synesio Sampaio Goes Filho, introdução ao mesmo volume, p. 27 (secundária, na edição oficial); IBGE, Áreas Territoriais 2022 (`AR_BR_RG_UF_RGINT_MES_MIC_MUN_2022.ods`, aba UF) | **CONFERE**. O "bigger than Uruguay" só vale para o número de 1903, e o Acre de 1909 e o de hoje são menores que o Uruguai (K4). |
| F7 | O Alasca custou "$7.2 million". A Gadsden custou "$10 million for a 29,670 square mile portion of Mexico", e "provided the land necessary for a southern transcontinental railroad". | State Dept, Office of the Historian: https://history.state.gov/milestones/1866-1898/alaska-purchase e …/1830-1860/gadsden-purchase | **CONFERE**. Os 586.412 sq mi do Alasca vêm da en.wikipedia (o gerador). |
| F8 | A paridade era de "$4.8665635 per pound sterling". O CPI (base 1967 = 100) era 25 em 1853, 42 em 1867 e 27 em 1903, e antes de 1913 é estimativa. | EH.Net, "Gold Standard": https://eh.net/encyclopedia/gold-standard/; Minneapolis Fed, CPI 1800–: https://www.minneapolisfed.org/about-us/monetary-policy/inflation-calculator/consumer-price-index-1800- | **CONFERE** |
| F9 | A ferrovia custou "US$33 million"; "At least 3,600 men died"; o sindicato recebeu £110 mil; o último trecho foi aberto em 15/07/1912. | en.wikipedia (Treaty of Petrópolis; Acre War) | **NÃO CONFERIDO** na origem. A própria Wikipedia diverge: a página da ferrovia diz "There are no accurate figures", com 6.000 pela estimativa do governo, 7.000 a 10.000 (Uys) e mais de 30.000 (Picoli), e dá 30/04/1912 para o último trecho. Os curtos falam em 1.552 mortos registrados no hospital, 110 mil ou 114 mil libras e "um morto por dormente" (lenda). A exposição de Rio Branco não dá o valor do sindicato. |
| F10 | De 64 % a 88 % do Brasil fica a oeste da linha de 1494, conforme a leitura da linha. | O script e a saída do gerador (`tordesilhas_medida.py`), relidos | **CONFERE** a conta (a área a leste vai de 12,3 % a 36,2 %). As longitudes vêm da en.wikipedia. |

**As palavras fortes demais:**
- **"to Pay for"**, no título: o tratado põe a ferrovia entre as concessões, mas Rio Branco a apresenta como promessa antiga e vantagem
  brasileira. A frase verdadeira: "Brazil also promised a railroad, one it had already promised twice before".
- **"bought"**: o próprio tratado fala de permuta com indenização. "Paid" é seguro; "bought" pede ressalva na voz.
- **"Bigger Than Uruguay"**: vale só para os 191 mil km² de 1903, uma estimativa da época. O que ficou com o Brasil depois de 1909 (152 mil) e o
  estado de hoje (164 mil) são menores que o Uruguai (177 mil no Natural Earth).
- **"48 times Alaska, with the railroad"**: soma o custo inteiro, não conferido, de uma ferrovia brasileira e de uso brasileiro. Não vai à tela.

## 2. A onda e a colisão

O vidIQ foi usado em 6 buscas e 2 pesquisas de palavra, **40 créditos**. Os números de views vêm do vidIQ, e as linhas marcadas com `/watch`
foram conferidas na página pública às ~11:27–11:31.

**A resposta à pergunta da Sala: é onda, não só pressa.** O enxame minúsculo de 9 dias que a Sala viu (18, 37, 174 e 240 views) é o rabo de dois
curtos virais em português. Em volta deles há uns 25 curtos de 1,5 mil a 45 mil views, em PT e em ES, e vídeos longos com público nas duas
metades do ângulo.

### A régua 1: o curto viral sobre o ângulo nos últimos 2 meses (desde 18/09/2026). **Derruba.**

| Título | Canal (inscritos) | Views | Data | Duração |
|---|---|---|---|---|
| Por que o Acre é do Brasil? (`/watch`) | História Não Oficial (35,2 mil) | **622.385** | 27/10/2026 | 1:13 |
| O Brasil comprou o Acre 😳 A Guerra do Acre no tabuleiro (`/watch`) | Tabuleiro da História (13,9 mil) | **431.252** | 02/10/2026 | 1:20 |
| ¿Por qué el Acre es de Brasil si era de Bolivia? (`/watch`) | El Porqué del Mapa (2,06 mil) | 51.885 | 15/10/2026 | 2:56 |
| O Brasil invadiu o que ele mesmo dizia ser da Bolívia (`/watch`) | História Não Oficial (35,2 mil) | 49.770 | 03/11/2026 | 1:13 |
| Como o Brasil comprou o Acre? (`/watch`) | Olha o Mapa (29,9 mil) | 44.860 | 23/10/2026 | 1:06 |
| **Bolivia cambió el Acre por un tren… que nunca entró a Bolivia** (`/watch`) | Ñerd (29,1 mil) | 38.126 | 04/11/2026 | 2:44 |
| O Brasil comprou este pedaço do mapa em 1903 (`/watch`) | Atlas Inquieto (808; 41 vezes a média do canal) | 25.810 | 06/11/2026 | 1:15 |
| ¿Cómo Brasil le arrebató el Acre a Bolivia…? (`/watch`) | GeoBitácoras (8,9 mil) | 15.274 | 29/10/2026 | 2:51 |

E mais, de 1,5 mil a 10 mil views, de 07/10 a 17/11, todos curtos. Três deles já trazem o nosso chamariz:
- "O Brasil comprou o Acre. E pagou com uma ferrovia" (3.817, 11/11);
- "O Brasil Comprou o Acre? E Pagou Duas Vezes", com "a ferrovia custou mais caro que o próprio Acre" (5.680, 07/10);
- "O Mato Grosso pagou pelo Acre?" (2.341, 10/11).

### A régua 2: a notícia quente sobre o ângulo. **Não achada.**

- **O que procurei:** notícia de outubro e novembro de 2026 sobre o Acre, o Tratado de Petrópolis ou a Madeira-Mamoré, e um filme da Netflix
  sobre a ferrovia (o "trailer" que o gerador viu). Não achei nenhuma das duas coisas; o "trailer" parece falso.
- **O que empurra:** o aniversário do tratado (17/11; vários curtos saíram nesse dia, como "O Brasil comprou o Acre. Literalmente.") e a
  restauração de locomotivas em Porto Velho (sem data firme).
- **O fio de fundo:** a ponte binacional Guajará-Mirim–Guayaramerín, "prevista em acordo de compra do Acre" (CNN Brasil, 2024).
  - Foi autorizada em agosto de 2025, a supervisão da obra foi prorrogada em 17/07/2026, e a entrega está prevista para 2027 (pela busca, não
    lido na origem).
  - Já virou vídeo: "Brasil le debía a Bolivia un tren. Lo cambió por un puente. El puente no existe" (Obras Olvidadas, 452 views, 22 min,
    01/11).
  - Quando a ponte abrir, o tema volta à notícia.

### A régua 3: 3 ou mais vídeos longos com público no ângulo desde 23/09/2026. **Derruba, nas duas metades.**

| Título | Canal (inscritos) | Views | Data | Duração | Metade |
|---|---|---|---|---|---|
| 🔥 A AMAZÔNIA ESCONDEU ISSO POR DÉCADAS, E ELA VOLTOU! (`/watch`) | Fora do Mapa (95) | 53.822 | 09/10/2026 | 8:21 | a ferrovia |
| A História Completa do Rio Madeira (`/watch`) | Era Extinta (992) | 35.293 | 29/10/2026 | 22:53 | a ferrovia e o tratado |
| A Ferrovia do Diabo Madeira Mamoré Brasil Bolívia (`/watch`) | HistoriasPerdidas (205) | 30.256 | 04/11/2026 | 44:27 | a ferrovia e o tratado |
| Cómo Bolivia perdió el ACRE (y no fue por un caballo) (`/watch`) | Por Algo Será History (93) | 10.142 | 26/10/2026 | 14:43 | o Acre, "dos millones y unos rieles" |
| O Acre: o estado que o Brasil comprou (`/watch`) | Segredos do Mapa (5,2 mil) | 9.533 | 11/10/2026 | 28:56 | o Acre e a ferrovia |
| MADEIRA-MAMORÉ: OS MISTÉRIOS DO MAIOR CEMITÉRIO DE TRILHOS DO MUNDO (`/watch`) | Minuciosa Mente (2,5 mil) | 5.303 | 20/10/2026 | 13:16 | a ferrovia |
| Cómo Bolivia perdió el Acre… y quién se quedó con el caucho (`/watch`) | El Maravedí (106) | 4.490 | 01/11/2026 | 16:52 | o Acre, o trem e a borracha |
| Bolivia Vendió el Acre a Brasil, 190.000 km² por 2 Millones de Libras (`/watch`) | Fronteras de América (206) | 3.126 | 27/10/2026 | 30:08 | o Acre e a ferrovia |

São canais minúsculos com vídeos que andaram (os outliers de 1.195, 570 e 82 vezes a média do canal, segundo o vidIQ). É o sinal de tema
quente, não de nicho morto.

### Em inglês: o enxame chegou

| Título | Canal (inscritos) | Views | Data | Duração |
|---|---|---|---|---|
| How Brazil Bought Acre from Bolivia 🇧🇴🤯 The Acre Purchase (`/watch`) | GeoMapify (957) | 2.034 | 01/10/2026 | 0:57 |
| Brazil Bought This State From Bolivia… With a Railway 🚂 (`/watch`) | Zoomed Out (76) | 637 | 22/10/2026 | 0:51 |
| Why did Brazil pay Bolivia for this huge piece of the Amazon? (`/watch`) | MapWhys? (23) | 426 | 25/10/2026 | 0:41 |
| Bolivia Gave Brazil 191,000 km² of Jungle for £2 Million and a Railway | continentalreport (110) | 231 | 13/11/2026 | 1:33 |
| How Brazil Bought a Piece of Bolivia for £2 Million (`/watch`) | Noviterra Docs (5) | 6 | 13/11/2026 | 11:29 |
| How Brazil Bought an Entire State: The Rubber War for Acre | Brazilian History (18) | 52 | 13/07/2026 | 32:22 |

E, em português, saiu ontem (17/11) "O Brasil Comprou o Acre. Mas o Preço Foi Muito Maior Que Dinheiro" (O Brasil Contado, 6 views, `/watch`). A
descrição dele é o chamariz desta pauta, quase palavra por palavra: "um território maior que o Uruguai, e uma parte do preço foi uma ferrovia no meio
da selva".

O ritmo é o da Terra do Fogo: o viral em outro idioma saiu em 02/10 e 27/10, e as cópias em inglês, de 01/10 a 13/11.

### A colisão de título (12 meses)

- **"The Railroad Brazil Built to Pay for a Piece of the Amazon":** não há título igual. Mas "…piece of the Amazon" (MapWhys, 25/10) e "…With a
  Railway" (Zoomed Out, 22/10) somam as duas metades dele em curtos de 4 semanas atrás.
- **A variante "How Brazil Bought a Piece of the Amazon Bigger Than Uruguay"** é quase igual a "How Brazil Bought a Piece of Bolivia for £2
  Million" (13/11, 11 min) e a "Why did Brazil pay Bolivia for this huge piece of the Amazon?" (25/10). Pela régua, **colide**.
- **A variante "Why Brazil Paid for Part of the Amazon With a Railroad"** é quase igual ao título do Zoomed Out (22/10). **Colide.**
- **O Acre contra o Alasca:** nenhum vídeo achado (uma busca, ruidosa).

### Os 5 mais próximos

| # | Título | Canal (inscritos) | Views | Data | Duração | Colide? |
|---|---|---|---|---|---|---|
| 1 | Bolivia cambió el Acre por un tren… que nunca entró a Bolivia | Ñerd (29,1 mil) | 38.126 | 04/11/2026 | 2:44 | **sim, no ângulo da ferrovia** (onda; espanhol) |
| 2 | Por que o Acre é do Brasil? | História Não Oficial (35,2 mil) | 622.385 | 27/10/2026 | 1:13 | **sim, no ângulo** (onda; português) |
| 3 | O Acre: o estado que o Brasil comprou | Segredos do Mapa (5,2 mil) | 9.533 | 11/10/2026 | 28:56 | **sim, no ângulo**, em vídeo longo |
| 4 | Brazil Bought This State From Bolivia… With a Railway | Zoomed Out (76) | 637 | 22/10/2026 | 0:51 | **quase, no título**, em inglês (pequeno) |
| 5 | Why did Brazil pay Bolivia for this huge piece of the Amazon? | MapWhys? (23) | 426 | 25/10/2026 | 0:41 | **quase, no título**, em inglês (pequeno) |

Os grandes antigos que a Sala viu (Elementar, 992 mil, há 1 ano; Canal H1, 316 mil, 03/02/2026) pesam na nota, mas não derrubam: a onda é que
derruba.

## 3. O potencial real

1. **A busca é nula em inglês.** "acre brazil" tem volume 0 e menos de 750 buscas por mês (concorrência 20), e "madeira mamore railway" também
   (concorrência 19). "Acre", em inglês, é também a unidade de área: o nome do lugar não se busca e ainda se confunde. A pauta vive só de
   curiosidade. O Big Sur, o melhor do canal, veio da pesquisa.
2. **A prova de interesse existe, mas é a onda.** Dois curtos acima de 400 mil e oito longos com público, todos em PT e ES, nos últimos 47 dias.
3. **O lugar vago no longo em inglês** ainda existe, mas o enxame já entrou: há dois longos minúsculos, de 13/07 e 13/11.
4. **O paradoxo cabe em 3 frases e no mapa?** Cabe: um canto vermelho da Amazônia, um preço por acre e o Alasca ao lado. Mas a frase do gerador
   ("a ferrovia custou mais que o dinheiro") já é a de três curtos.
5. **A geografia explica?** Em parte: as corredeiras do Madeira e a borracha. O resto (Gálvez, o sindicato, Plácido de Castro, Rio Branco) é
   história, e os 13 a 16 minutos se enchem dela.
6. **A medida nossa** é a do preço por acre (§4). Ela é nossa, mas a âncora do Alasca é escolhida a dedo (K6).

**Ela responde à pergunta do Lucas ("Por que o Brasil se tornou tão grande?")? Não.**
- O Acre de 1903 é **2,24 % do Brasil de hoje**; o estado atual, **1,93 %**.
- Quem clica esperando o "por que tão grande" ganha a história de como entrou a última peça. É uma boa história, mas sobre 2 %.
- O que responde à pergunta é o ato 1 (a linha de 1494: 64 % a 88 % do Brasil a oeste dela). Esse é o ângulo da onda que derrubou a pauta 6: a
  pauta ou não responde, ou responde entrando na onda.

**Sustenta 13 a 16 min de narrativa calma?** Sim, com folga, mas como história. Os concorrentes de 15 a 44 min mostram que há matéria.

## 4. A medida nossa (refeita)

`conta_acre.py`, com os números da §1. A conta do gerador **confere** (10,7 vezes o Alasca; 48 vezes com a ferrovia). Por acre, com as £2
milhões a US$ 4,8665 (US$ 9,73 milhões):

| Área tomada como "comprada" | km² | US$ por acre | × Alasca (nominal) | × Alasca (dólar de 1903) | × Gadsden (nominal) |
|---|---|---|---|---|---|
| 191 mil (o que a Bolívia cedeu, 1903) | 191.000 | 0,206 | 10,7 | **16,7** | **0,39** |
| líquido (menos os 3.163,5 km² dados à Bolívia) | 187.836 | 0,210 | 10,9 | 17,0 | 0,40 |
| só os 48.100 "reconhecidamente" bolivianos | 48.100 | 0,819 | 42,7 | 66,4 | 1,55 |
| 152 mil (o que ficou depois do Peru, 1909) | 152.000 | 0,259 | 13,5 | 21,0 | 0,49 |
| 164.173 (o estado hoje, IBGE 2022) | 164.173 | 0,240 | 12,5 | 19,5 | 0,46 |

- **O achado mais forte é outro, e mais simples: em dinheiro do dia, o Brasil pagou mais pelo Acre (US$ 9,73 milhões) do que os EUA pelo Alasca
  inteiro (US$ 7,2 milhões)**, por um oitavo da área (73.746 contra 586.412 sq mi). Em dólar de 1903, o Alasca vale US$ 4,6 milhões, e o Acre
  custou 2,1 vezes isso. Nenhum dos concorrentes achados usa o Alasca.
  - A conta nominal supõe que os dois pagamentos foram em ouro: as libras de 1903 eram ouro pela paridade, e o Alasca, até onde sei, foi pago "in
    gold" (art. VI do tratado de 1867, **não lido**). A conferir antes da tela; em dólar de 1903 a frase vale de qualquer jeito.
- **O contraponto que um comentário vai trazer:** a Gadsden (1853), comprada para passar uma ferrovia, custou US$ 0,53 por acre, **2,6 vezes o
  preço por acre do Acre**. O Alasca é a pechincha famosa, e por isso a comparação impressiona. Na voz, a Gadsden entra como a ressalva honesta.
- **A ferrovia não entra na conta da tela:** o custo (US$ 33 milhões) não foi conferido, e Rio Branco a trata como promessa antiga e vantagem
  brasileira (F4).

## 5. O material

- **Os textos:** o tratado (Câmara) e a exposição de motivos de Rio Branco (FUNAG, PDF de domínio público do Itamaraty) dão citações de tela
  fortes e com página.
- **Os mapas:**
  - limites e áreas: IBGE e Natural Earth;
  - o desenho do Acre de 1903 não existe pronto. Tem de ser traçado pelo art. I do tratado (coordenadas escritas) ou tirado do Cliopatria
    (CC BY 4.0, que um concorrente usou). O mapa de fronteira de 1903 da BnF está no Commons, em domínio público, pela descrição de um
    concorrente; não conferi.
- **As fotos:** o Commons tem 16 categorias da Madeira-Mamoré (uma busca na API). As fotos de Dana Merrill (Museu Paulista, domínio público)
  aparecem nos créditos de vários concorrentes; não conferi uma a uma.
- **O satélite:** o Landsat das corredeiras do Madeira. Hoje elas estão sob as represas de Santo Antônio e Jirau, o que seria um fecho nosso (não
  medido).
- **Em resumo:** material há de sobra para 13 a 16 minutos. Não é ele que segura a pauta.

## 6. O título e o gancho que eu defenderia (só se a onda passar; a partir de fevereiro de 2027)

- **Título:** "Brazil Paid More for This Jungle Than America Paid for Alaska" (61 caracteres).
  - É a medida nossa, sem o "bought", sem o "to Pay for" e sem o Uruguai.
  - Falta o nome buscado do lugar, mas nenhum nome do ângulo é buscado em inglês ("Acre" fica fora de propósito).
- **Alternativas:**
  - "Why Brazil Paid for Amazon Land It Already Claimed" (50);
  - "Why Brazil Paid More for a Corner of the Amazon Than Alaska Cost" (64).
- **O gancho** (39 palavras): "In 1903, Brazil paid more for a corner of the Amazon than America paid for all of Alaska. Most of that land, Brazil
  already claimed as its own. So why pay at all, and why throw in a railroad?"
- **A miniatura:** relevo amarelo da Amazônia ocidental, **o Acre de 1903 em vermelho** e **o Alasca em ciano**, na mesma escala, num quadro ao
  lado. Uma seta branca grossa liga os dois, e a caixa preta diz **"PAID MORE"**.
- **O título de trabalho não serve:** "The Railroad Brazil Built to Pay for a Piece of the Amazon" afirma o que F4 desmente e soma as duas metades de
  títulos de outubro.

## 7. Os pontos

- **K1 · GRAVE · A onda (régua 1 e régua 3).**
  - Os dois curtos virais em português, de 622 mil (27/10) e 431 mil (02/10), são sobre exatamente "o Brasil comprou o Acre".
  - Em espanhol, a ferrovia como preço do Acre já saiu em 38 mil (04/11).
  - Os vídeos longos com público desde 23/09 são 4 sobre o Acre (PT e ES) e 4 sobre a Madeira-Mamoré (até 54 mil).
  - O enxame minúsculo que a Sala viu é o rabo disso. Sozinho, derruba.
- **K2 · MÉDIO · O inglês já começou, e os títulos encostam.**
  - Cinco curtos e dois longos minúsculos, de 13/07 a 13/11.
  - "…piece of the Amazon" (25/10) e "…With a Railway" (22/10) colidem com o título de trabalho e com as duas variantes do gerador.
- **K3 · GRAVE · A ferrovia não foi o pagamento.**
  - Rio Branco escreve que ela cumpre promessa de 1867 e 1882, feita "sem que pedíssemos por isso qualquer compensação territorial", e que ela é
    "de maior proveito para nós". Ela corre inteira no Brasil, e o ramal até a Bolívia não aparece como construído.
  - O título de trabalho e o "48 vezes o Alasca com a ferrovia" se apoiam nisso, e o custo de US$ 33 milhões não foi conferido.
- **K4 · MÉDIO · "Bigger than Uruguay" e "bought" escorregam.**
  - Os 191 mil km² de 1903 são, em três quartos, terra que o próprio Brasil reivindicava.
  - O que ficou depois de 1909 (152 mil) e o estado de hoje (164.173) são menores que o Uruguai.
  - O tratado fala de permuta com indenização.
- **K5 · MÉDIO · Não responde à pergunta do Lucas.**
  - É a história de 2 % do Brasil.
  - A parte que responde (1494) é a da onda.
- **K6 · MÉDIO · A âncora do Alasca é escolhida a dedo.**
  - A Gadsden custou 2,6 vezes mais por acre.
  - O honesto é dizer as duas, e a do preço total (mais que o Alasca inteiro) é a mais forte e a mais limpa.
- **K7 · MÉDIO · Busca nula.** "acre brazil" e "madeira mamore railway" ficam abaixo de 750 por mês; "Acre" é palavra comum em inglês.
- **K8 · LEVE · Os números da ferrovia estão sem fonte primária.** Mortos (1.552 registrados a mais de 30 mil estimados), custo, sindicato
  (110 mil ou 114 mil libras) e data de abertura (30/04 ou 15/07/1912) divergem entre as próprias páginas da Wikipedia.

**O que salvaria a pauta, para 2027:** a medida do preço total contra o Alasca (nenhum concorrente achado a usa), a frase de Rio Branco de que o
Acre "promete … amortizar totalmente o desembolso" e a ponte de 2027 como fecho ("o último pedaço do preço ainda está sendo pago"). Ainda assim,
ela não responde ao "por que o Brasil é tão grande".

**Créditos do vidIQ:** 40 (8 chamadas de 5). O saldo foi de 4.846 a 4.761: depois da 7ª chamada estava em 4.811, e a queda seguinte inclui os
outros céticos em paralelo. Sem navegador, sem `SendMessage`, sem commit, sem crédito pago. O Python rodou sempre de arquivo. Os robots.txt foram
lidos antes do primeiro pedido a cada site novo:
- Câmara, history.state.gov (Crawl-delay 20, respeitado), EH.Net (Crawl-delay 10), Minneapolis Fed;
- FUNAG: o robots.txt dá 404 (sem regras);
- IBGE geoftp: robots.txt lido pelo gerador;
- Commons: só a API, com o User-Agent do canal.
