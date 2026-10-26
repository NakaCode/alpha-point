# Leitura 07 · A população de Porto Rico e das Ilhas Virgens dos EUA

Item 7 do §9 da pauta do vídeo 5 (`pautas/2026-10-24-video-5.md`). Lido em **26/10/2026**, por um leitor da Sala, todo no U.S.
Census Bureau.

## Por onde se leu

- **A API do Census (api.census.gov) recusou.** O primeiro pedido, ao `https://api.census.gov/robots.txt`, voltou com a página
  "Request Rejected" do filtro do site (HTTP 200, com um número de suporte). Parei naquele endereço, sem tentar de novo nem trocar
  nada no pedido.
- **Segui pelo servidor de arquivos e pelo site do Census.**
  - O robots.txt do `www2.census.gov` não veta agente genérico, e o do `www.census.gov` só veta a página de busca.
  - Do www2 baixei três arquivos, um pedido por vez, com o User-Agent do canal. Os três estão em `midia/atlantico-fundo/fontes/`,
    com as linhas no `_PROCEDENCIA.md`.
  - Do www li o texto de dois comunicados.
- **A Sala não precisa abrir nada.** Os números saíram de arquivos e páginas oficiais. A única porta que ficou fechada é a do
  International Database (a nota da pergunta 3).

---

## 1 · Porto Rico no Censo de 2020

**Resposta:** **3.285.874** residentes em **1º de abril de 2020**.

**A fonte** (lida inteira, uma página): U.S. Census Bureau, 2020 Census Apportionment Results, "Table 2. Resident Population for the
50 States, the District of Columbia, and Puerto Rico: 2020 Census", de 26/04/2021. URL:
https://www2.census.gov/programs-surveys/decennial/2020/data/apportionment/apportionment-2020-table02.pdf

**A ressalva do próprio Census**, no comunicado da Pesquisa Pós-Censo (PES), de 16/08/2022 (CB22-CN.12), lido inteiro em
https://www.census.gov/newsroom/press-releases/2022/2020-post-enumeration-survey-results-puerto-rico.html:
- o Censo de 2020 contou gente demais em Porto Rico, uns 5,7 %;
- a diferença para os 4,5 % a mais de 2010 não é estatisticamente significativa;
- a sobra está nos adultos de 30 anos ou mais e nos donos de casa.

> "According to the PES, the 2020 Census overcounted the Puerto Rico population by 5.7% or 174,000 people." (Census, 16/08/2022)

**Grau:** **confirmado**. É o número oficial, e a sobrecontagem também é oficial: as duas coisas valem juntas.

---

## 2 · Porto Rico: a estimativa anual mais recente

**Resposta:** **3.184.835** residentes em **1º de julho de 2025**. É a safra 2025 (*Vintage 2025*) das estimativas, publicada em
janeiro de 2026.
- **É a mais recente.** Em 26/10/2026, a pasta mais nova das estimativas no servidor do Census é a `2020-2025`.
- **A mesma série, ano a ano** (sempre em 1º de julho, todos pela safra 2025):

  | Ano | População |
  |---|---|
  | 2020 | 3.281.591 |
  | 2021 | 3.262.731 |
  | 2022 | 3.220.148 |
  | 2023 | 3.203.794 |
  | 2024 | 3.202.521 |
  | 2025 | 3.184.835 |

- **A base de 2020** da série é igual à contagem do Censo: 3.285.874.
- **Conta minha:** de abril de 2020 a julho de 2025, a estimativa caiu **101.039 pessoas (3,1 %)**.
- **Cada safra refaz os anos anteriores.** Use os números de uma safra só. O de 2024 que aparece acima é o da safra 2025, não o
  publicado na safra 2024, que não li.
- **A série parte da contagem de 2020**, que a PES diz ser alta (pergunta 1). O Census não corrigiu a estimativa pela PES.

**A fonte:**
- U.S. Census Bureau, Population Division, `NST-EST2025-ALLDATA.csv` (arquivo de 27/01/2026), lido inteiro:
  https://www2.census.gov/programs-surveys/popest/datasets/2020-2025/state/totals/NST-EST2025-ALLDATA.csv
- O dicionário do arquivo, lido inteiro: ele define `POPESTIMATE2025` como a estimativa de 1º de julho de 2025, e dá a publicação em
  janeiro de 2026.
  https://www2.census.gov/programs-surveys/popest/technical-documentation/file-layouts/2020-2025/NST-EST2025-ALLDATA.pdf

> "File: 7/1/2025 National and State Population Estimates … Release date: January 2026" (dicionário do NST-EST2025-ALLDATA)

**Grau:** **confirmado**.

---

## 3 · As Ilhas Virgens dos EUA no Censo de 2020

**Resposta:** **87.146** residentes em **1º de abril de 2020**, 18,1 % a menos que os 106.405 de 2010.

**A fonte** (lida inteira): U.S. Census Bureau, "Census Bureau Releases 2020 Census Population and Housing Unit Counts for the U.S.
Virgin Islands", comunicado CB21-TPS.74, de 28/10/2021:
https://www.census.gov/newsroom/press-releases/2021/2020-census-us-virgin-islands.html

> "As of April 1, 2020, the U.S. Virgin Islands' population was 87,146, representing a decrease of 18.1% from the 2010 Census" (Census, 28/10/2021)

**Não há estimativa anual das Ilhas Virgens no programa de estimativas.** O arquivo da safra 2025 cobre só os EUA, os estados, o
Distrito de Colúmbia e Porto Rico, como diz o título dele. O Census tem um banco internacional (o International Database), que talvez
traga uma projeção para as ilhas. Não o consultei: ele é servido pela mesma api.census.gov que recusou. Se a Sala quiser esse número,
a página é https://www.census.gov/data-tools/demo/idb/, no navegador do app. Ela abre (HTTP 200 em 26/10/2026), mas monta os dados
por script.

**Grau:** **confirmado** para a contagem. A projeção de hoje está **não conferida**, pelo motivo acima, e o roteiro não precisa dela.

---

## 4 · O que muda na pauta, e como a fala diz

**O "about four million" acabou.** Esse número é o do USGS de 2006, e o vídeo do Infographics o repete. As contas de hoje:
- Porto Rico em 2025 mais as Ilhas Virgens em 2020: **3.271.981**. A conta junta uma estimativa de 2025 com uma contagem de 2020.
- As duas contagens de 2020: **3.373.020**.
- Com a sobrecontagem da PES, o número real de Porto Rico pode ser menor que o oficial.

"More than three million" vale em todos os casos.

**A linha nova do §4** (a checagem §2.5 dizia "não usar: número de 2006"):

| O fato | Como se diz | De onde |
|---|---|---|
| Quem vive lá | **Porto Rico: 3.184.835** em 01/07/2025 (estimativa do Census, safra 2025, publicada em janeiro de 2026). No Censo de 2020, 3.285.874, e a pesquisa pós-censo do próprio Census diz que essa contagem saiu uns 5,7 % alta. **Ilhas Virgens dos EUA: 87.146** (Censo de 2020; não há estimativa anual). Na fala, "more than three million people". Nunca "four million", nem "U.S. citizens" (o Census conta residentes), nem as Ilhas Virgens Britânicas (Anegada) nessa conta | Census: Table 2 da repartição de 2020; NST-EST2025-ALLDATA; CB21-TPS.74; CB22-CN.12 |

**Na fala** (um número por frase):
- "More than three million people live in Puerto Rico and the U.S. Virgin Islands."
- Se a fala quiser só Porto Rico: "About 3.2 million people live in Puerto Rico, by the Census Bureau's latest estimate." A
  atribuição é o que segura o número, por causa da sobrecontagem.
- Fora: "four million"; "U.S. citizens" no lugar de "people"; "all of them in the path of a tsunami" (é a moldura do alarme, e a
  pauta a proíbe); somar Anegada, que é britânica.
