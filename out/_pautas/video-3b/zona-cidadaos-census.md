# Zona do Canal · quantos americanos o Census contou

Data: 09/10/2026. Pedido: o número de cidadãos americanos na Zona, que o cético (`cetico-zona-do-canal.md`) não achou.
Só conta o que foi aberto: as páginas de census.gov (WebFetch) e os PDFs do Census baixados para `_fontes/` e lidos
na imagem (são escaneados, sem camada de texto; cada número foi lido em recorte ampliado e as somas conferidas).
Sem navegador, sem vidIQ. Nenhum site recusou.

## A resposta curta

**O Census nunca publicou "cidadãos americanos" da Zona como um total.** Ele perguntou cidadania só aos nascidos no
estrangeiro (1930 e 1970). Para os outros, deu o **lugar de nascimento**: nos EUA, na própria Zona, num território,
no estrangeiro. Por isso, o número mais forte e honesto para o vídeo é **"nascidos nos Estados Unidos"**, que o Census
dá em todos os censos de 1930 a 1970, e mais a divisão **civil × militar** (1920, 1930) ou as **Forças Armadas**
(1950, 1960, 1970).

| Ano | Total na Zona | Nascidos nos EUA (continente) | Nascidos na Zona | Militares |
|---|---|---|---|---|
| 1920 | 22.858 | (não dado; "native white" 10.753) | (não dado) | 4.894 moram em reserva militar ou naval |
| 1930 | 39.467 | **15.166** | 6.274 | 11.785 moram em reserva militar ou naval |
| 1940 | 51.827 | **29.835** | 6.974 | (não lido nesta rodada) |
| 1950 | 52.822 | **24.792** | 9.685 | 9.645 nas Forças Armadas (14 anos ou mais) |
| 1960 | 42.122 | **19.577** | 10.389 | 6.543 nas Forças Armadas (14 anos ou mais) |
| 1970 | 44.198 | **23.559** | (dentro de 9.076 "born in a U.S. territory") | 8.569 nas Forças Armadas (16 anos ou mais) |

**O pico dos nascidos nos EUA, nos censos lidos, é 1940: 29.835 de 51.827** (o ano da guerra, com a guarnição cheia:
37.528 homens para 14.299 mulheres). Em 1960, os nascidos nos EUA eram menos da metade dos moradores (19.577 de 42.122).

**1970 é o único ano em que dá para cercar o número de cidadãos**, pela conta do canal (não do Census):
- pelo menos **28.112**: 23.559 nascidos nos EUA + 1.178 nascidos em Porto Rico + 2.037 nascidos no estrangeiro de pais
  americanos + 1.338 naturalizados;
- no máximo **37.188**: os 28.112 mais os 9.076 nascidos num território dos EUA (quase todos na própria Zona), dos quais
  só uma parte é americana (8 U.S.C. § 1403 exige pai ou mãe americano; o Census não lhes perguntou a cidadania);
- com certeza **não** cidadãos: **7.010** estrangeiros (3.066 "permanent alien" + 3.944 "temporary alien").

Para o roteiro, a frase defensável é do tipo: "In 1970, the Census counted 44,198 people in the Zone; 23,559 of them
had been born in the United States." Não escrever "44,198 Americans".

## Número a número

### 1920 e 1930 · Census de 1930, *Outlying Territories and Possessions*, Panama Canal Zone

Fonte: página https://www.census.gov/library/publications/1932/dec/1930i-territories.html ; PDF
https://www2.census.gov/library/publications/decennial/1930/territories/00476569ch8.pdf (em
`_fontes/cz-1930-territories-ch8.pdf`, 19 págs., págs. impressas 319–338).

- **Table 1, p. 328** ("POPULATION OF THE CANAL ZONE: 1930 AND 1920"):
  - 1930 (1º de abril): 39.467; "Civilian population" 27.682; "Military and naval population" 11.785; "Per cent
    military and naval" 29.9.
  - 1920 (1º de janeiro): 22.858; civil 17.964; militar e naval 4.894; 21.4 %.
  - O que conta "military and naval population" (p. 325, "Civilian and military and naval population"): "all
    inhabitants residing on military or naval reservations have been enumerated as 'military and naval population.'"
    É quem **mora em reserva militar**, inclusive famílias, não só soldados. Em 1930, desses 11.785: 11.441 brancos,
    10.634 "native white" (Table 2), 10.442 homens e 1.343 mulheres.
- **Table 2, p. 328** ("COLOR, NATIVITY, AND SEX, FOR THE CANAL ZONE AND FOR CIVILIAN AND MILITARY AND NAVAL
  POPULATION: 1930 AND 1920"), a Zona inteira:
  - 1930: "Native white" 16.773 (civil 6.139, militar e naval 10.634); "Foreign-born white" 2.041 (naturalized 926,
    first papers 275, alien 796, unknown 44); "Native Negro" 5.284; "Foreign-born Negro" 15.101 (naturalized 22,
    first papers 8, alien 15.028, unknown 43); "Other colored" 208.
  - 1920: "Native white" 10.753 (civil 6.660, militar e naval 4.093); "Foreign-born white" 1.617; "Native Negro"
    2.757; "Foreign-born Negro" 7.672. Cidadania de 1920: "Data not available".
  - O que conta "native": nascido nos EUA **ou num território, inclusive a própria Zona**. "Native" não é cidadão.
  - Cidadania (p. 325, "Citizenship"): perguntada só aos nascidos no estrangeiro; "first papers" é quem fez a
    "formal declaration of intention to become a citizen of the United States".
- **Table 13, p. 335** ("PLACE OF BIRTH OF THE NATIVE POPULATION, FOR THE CANAL ZONE: 1930"): total de nativos
  22.106; "Panama Canal Zone" 6.274 (brancos 550 + 565; "Negro and other colored" 2.630 + 2.514); Puerto Rico 115;
  Philippine Islands 66; Hawaii 16; "Other outlying possessions" 46; **"United States, exclusive of outlying
  possessions" 15.166** (brancos 12.136 + 2.984); "All other" 423, nota 1: "Comprises persons born at sea under the
  United States flag and American citizens born abroad."
  - Conta do canal, não do Census: cidadãos certos em 1930 são pelo menos 16.668 (15.166 + 115 de Porto Rico + 16 do
    Havaí + 423 + 948 naturalizados). Os 6.274 nascidos na Zona e os 112 das Filipinas e outras posses ficam fora: a
    tabela não diz se eram cidadãos (filipino era "nacional", não cidadão, em 1930).
  - Estrangeiros ("alien") em 1930: 15.824 (796 + 15.028). Quase 4 em 10 moradores.

### 1940 e 1950 · Census de 1950, Vol. II, Partes 51–54, cap. 8 (Canal Zone)

Fonte: página https://www.census.gov/library/publications/1953/dec/population-vol-02.html ; PDF
https://www2.census.gov/library/publications/decennial/1950/population-volume-2/41601749v2p51-54ch8.pdf (em
`_fontes/cz-1950-vol2-p51-54ch8.pdf`; a Zona vai das págs. 54-19 a 54-35).

- **Table 28, p. 54-33** ("COUNTRY OF BIRTH, BY COLOR AND SEX, FOR THE CANAL ZONE: 1950 AND 1940"):
  - 1950, total 52.822: "Canal Zone" 9.685; **"Continental United States" 24.792** (brancos 15.817 + 8.638; não
    brancos 242 + 95); "Territories and possessions of the United States" 1.360; Europe 541; "Republic of Panama"
    9.714; "Other Central America and Mexico" 836; South America 786; "British West Indies" 4.551; "Other West
    Indies" 287; Asia 82; "All other and not reported" 188. A soma bate.
  - 1940, total 51.827: "Canal Zone" 6.974; **"Continental United States" 29.835** (homens 25.195, mulheres 4.640);
    territórios 166; Europe 909; Panamá e outra América Central e México, agrupados por chave, 6.684; South America
    385; Antilhas britânicas e outras, agrupadas, 6.343; Asia 97; "All other and not reported" 434. A soma bate (as
    chaves de agrupamento estão no escaneado; a leitura dos dois agrupados é minha).
  - O texto (p. 54-19) diz como os militares entram: "Persons in the armed forces quartered on military
    installations were enumerated as residents of the area in which their installations were located."
- **Forças Armadas de 1950**: 9.645 (Table 19 do relatório de 1960, abaixo; pessoas de 14 anos ou mais).

### 1960 · Census de 1960, Vol. I, Parte 57 (Canal Zone)

Fonte: página https://www.census.gov/library/publications/1961/dec/population-vol-01.html ; PDF
https://www2.census.gov/library/publications/decennial/1960/population-volume-1/32111904v1p54-57ch4.pdf (em
`_fontes/cz-1960-vol1-p57.pdf`, 52 págs.).

- **Table 28, p. 57-33** ("SOCIAL CHARACTERISTICS OF THE POPULATION, FOR COURT DISTRICTS AND PLACES OF 2,500 OR
  MORE: 1960"), "COUNTRY OF BIRTH":
  - Distrito de Balboa, total 30.623: "Born in Canal Zone" 6.969; "Born in other outlying area of the U.S." 665;
    "Born in the United States" 15.543; "Born in other country" 7.446.
  - Distrito de Cristóbal, total 11.499: 3.420; 396; 4.034; 3.649.
  - **Zona inteira (soma dos dois distritos, que cobrem a Zona; 30.623 + 11.499 = 42.122): nascidos nos EUA 19.577;
    na Zona 10.389; noutra área externa 1.061; noutro país 11.095.** A Table 7 (Country of birth, Zona inteira) está
    na p. 57-11, que **falta no PDF escaneado** (a seq. pula de 57-10 para 57-12); por isso a soma.
  - Como contrapeso nas cidades "silver": Paraíso, 3.113 moradores, 7 nascidos nos EUA; Rainbow City, 3.688
    moradores, 3 nascidos nos EUA. Balboa (a cidade), 3.139 moradores, 1.580 nascidos nos EUA.
  - O que conta (p. 57-X, "COUNTRY OF BIRTH"): "the population born in the United States, in the Canal Zone, in other
    outlying areas of the United States, and in selected foreign countries. The small number of persons whose country
    of birth was not reported on the schedule are assumed to have been born in the United States." Não há pergunta
    de cidadania em 1960 (lista de assuntos, p. 57-III).
- **Table 19, p. 57-23** ("EMPLOYMENT STATUS, BY COLOR AND SEX, FOR THE CANAL ZONE: 1960 AND 1950"), "Armed Forces",
  pessoas de 14 anos ou mais: **1960: 6.543** (brancos 5.916, não brancos 627; homens 6.535, mulheres 8);
  **1950: 9.645** (brancos 9.482). Não conta as famílias dos militares.

### 1970 · Census de 1970, Vol. I, Partes 54–58 (Outlying Areas), Canal Zone

Fonte: página https://www.census.gov/library/publications/1973/dec/population-volume-1.html ; PDF
https://www2.census.gov/library/publications/decennial/1970/population-volume-1/00496492v1p54-58ch4.pdf (em
`_fontes/cz-1970-vol1-ch4.pdf`, 37 págs., a Parte 57) e o apêndice
https://www2.census.gov/library/publications/decennial/1970/population-volume-1/00496492v1p54-58ch6.pdf (em
`_fontes/cz-1970-vol1-ch6-apendice.pdf`).

- **Table 7, p. 57-16** ("Ethnic Characteristics: 1970"), "PLACE OF BIRTH", Zona inteira: "Total population" 44.198;
  "Native" 33.813 = "Born in a U.S. territory" 9.076 + **"Born in United States" 23.559** + "Born in Puerto Rico"
  1.178; "Foreign born" 10.385 (dos quais "Republic of Panama" 6.219). Por distrito: Balboa 32.552 (nascidos nos EUA
  18.006), Cristóbal 11.646 (5.553).
- **Table 8, p. 57-17** ("Citizenship Status and Year of Immigration of the Foreign Born: 1970"), só os 10.385 nascidos
  fora: "Naturalized" 1.338; "Permanent alien" 3.066; "Temporary alien" 3.944; "Born abroad of American parents"
  2.037. A soma bate.
- **Table 12, pág. 23 do PDF (57-26 pela sequência; o rodapé não foi lido)** ("Employment Status: 1970"), "Armed Forces": homens de 16 anos ou mais 8.494, mulheres de 16
  anos ou mais 75: **8.569**. Não conta as famílias.
- O que conta (Apêndice B, App-4):
  - "PLACE OF BIRTH AND COUNTRY OF ORIGIN": todos foram perguntados se nasceram "in a U.S. territory, in the United
    States, in Puerto Rico, or in a foreign country"; quem nasceu fora disso é "foreign born", e "the small number of
    persons born abroad of American parents are also included in this category".
  - "CITIZENSHIP AND YEAR OF IMMIGRATION": "Persons born in a foreign country were asked to report whether they were
    naturalized or alien." Ou seja, **o Census de 1970 não perguntou cidadania a quem nasceu na Zona**.

## O que não achei

- **Um total de cidadãos americanos**, em qualquer ano: o Census não publica. Só bordas (1930 e 1970, acima).
- **1912**: o censo do governo da Zona (62.810) não foi aberto; sem nativo/estrangeiro nesta rodada.
- **1940 civil × militar** e as Forças Armadas de 1940: não lidos (a Table 29 de 1950 só tem 1950).
- **Civil empregado da Panama Canal Company / Canal Zone Government, e famílias**: o Census separa "Government workers"
  (1960, Table 22: 6.137 homens e 1.835 mulheres empregados fora da agricultura), mas não por cidadania nem por órgão.
  O número de empregados americanos ("U.S.-rate") está nos relatórios anuais da Panama Canal Company, não abertos.
- **Statistical Abstract of the United States**: não aberto nesta rodada (o teto de páginas foi para os volumes
  decenais, que são a fonte do Abstract).
- **A p. 57-11 do Census de 1960** (Table 7, Country of birth da Zona inteira): falta no PDF escaneado da census.gov.
- A página de história `census.gov/history/pdf/1970canalzone-oct2016.pdf` que o cético leu hoje redireciona para a
  página inicial de história (302); não é recusa, a página saiu do ar. Usei o volume de 1970 da biblioteca.

## Como usar no roteiro

- Diga **"born in the United States"**, não "Americans", e sempre com o total ao lado.
- Os números mais limpos: **1960: 19,577 of 42,122 born in the U.S.**; **1970: 23,559 of 44,198**; **o pico, 1940:
  29,835 of 51,827**.
- O contraste que o canal pode mostrar no mapa, com fonte: em 1960, a cidade de Balboa tinha 1.580 nascidos nos EUA em
  3.139 moradores; Rainbow City, 3 em 3.688 (Census 1960, Table 28).
- Militares: 6.543 nas Forças Armadas em 1960 (14 anos ou mais), sem as famílias; em 1930, 11.785 moravam em reserva
  militar ou naval (com as famílias).
- O "pelo menos 28.112 cidadãos em 1970" é conta do canal sobre duas tabelas do Census: se for à tela, como "at least",
  e com a conta registrada.

## Arquivos e páginas abertos (09/10/2026)

1. https://www.census.gov/library/publications/1961/dec/population-vol-01.html (2 leituras)
2. https://www2.census.gov/library/publications/decennial/1960/population-volume-1/32111904v1p54-57ch4.pdf
3. https://www.census.gov/history/pdf/1970canalzone-oct2016.pdf (302 para census.gov/about/history.html; nada baixado)
4. https://www.census.gov/library/publications/1973/dec/population-volume-1.html (2 leituras)
5. https://www2.census.gov/library/publications/decennial/1970/population-volume-1/00496492v1p54-58ch4.pdf
6. https://www2.census.gov/library/publications/decennial/1970/population-volume-1/00496492v1p54-58ch6.pdf
7. https://www.census.gov/library/publications/1953/dec/population-vol-02.html
8. https://www2.census.gov/library/publications/decennial/1950/population-volume-2/41601749v2p51-54ch8.pdf
9. https://www.census.gov/library/publications/1932/dec/1930i-territories.html
10. https://www2.census.gov/library/publications/decennial/1930/territories/00476569ch8.pdf

Buscas web (não contam como leitura): duas, para achar os volumes.
Os recortes de imagem lidos estão em `_fontes/img/` (fora do roteiro; só conferência).
