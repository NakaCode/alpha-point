# Cético · Mongólia: "Why Half of Mongolia Lives in One City"

16/10/2026. Cético do 3º finalista do curador (`curador.md`, "### 3º · Mongólia"). Missão: derrubar a pauta. Créditos do vidIQ
gastos: 10 (duas buscas de 5).

## Veredito: de pé, com ajuste. Nota 6/10

O fato central, que nenhum gerador tinha lido, **está de pé pela fonte oficial**: pelo Instituto Nacional de Estatística da Mongólia
(NSO), em 2025, Ulaanbaatar tem 1.796.045 de 3.591.120 habitantes, **50,0 %**. Pela população residente (a outra série do NSO),
48,9 %. "Half" se sustenta.

O que cai é o **"não saturado"**. O curador escreveu que não havia "nenhum longo explicativo" em inglês. Há dois, de canais
gigantes, no mesmo território ("a Mongólia vazia"):
- RealLifeLore, *Why 99.7% of Mongolia is Completely Empty* (26/05/2023, 33:34, **8,7 mi** de views);
- Gaurav Thakur, *Why 99.7% of MONGOLIA is Completely Empty* (15/02/2024, 18:45, **5,9 mi**). Gaurav é um dos canais de
  referência que o próprio Lucas mandou.

E, só nas últimas seis semanas, saíram pelo menos cinco vídeos com **o nosso título quase literal**, de canais pequenos. A pauta
fica de pé porque o fato é forte e os dois grandes já passaram de 2 anos. Mas o título de trabalho virou mercadoria, e o vídeo
precisa de um ângulo próprio (abaixo, "O ajuste").

## 1. O número, lido na fonte oficial

**Como se leu.** O `www.1212.mn` abre normalmente pelo TLS do Windows, com a verificação ligada (200). O "erro de certificado" dos
geradores era do buscador deles, que não completa a cadeia do certificado. Mas o site carrega os números por `/api`, e o
`robots.txt` dele diz `Disallow: /api`: não usei. O banco de dados oficial do NSO é o PxWeb em `data.1212.mn`
(https://data.1212.mn/pxweb/en/NSO/, ligado no próprio site). O `robots.txt` dele não existe (404), e a API do PxWeb é a porta que
o software abre para programas. Um pedido por vez, com pausa. Nenhum contorno.

### 1.1 A série principal: "POPULATION OF MONGOLIA, by region, aimags and the Capital, urban and rural"

Tabela `DT_NSO_0300_004V1`
(https://data.1212.mn/api/v1/en/NSO/Population,%20household/1_Population,%20household/DT_NSO_0300_004V1.px).
- Fonte, lida no próprio JSON: "National Statistical office of Mongolia, Population annual report, XA-3".
- A definição, lida no JSON: "Population of Mongolia is the total number of Mongolian citizens usually residing (for more than
  183 days or 6 months) in Mongolia and Mongolian citizens residing in abroad. Based on the 2025 Population and Housing
  Intercensal Survey, the data for 2020–2024 have been interpolated."
- Conferido: o total é a soma exata das 4 regiões mais a capital (426.062 + 607.553 + 529.919 + 231.541 + 1.796.045 =
  3.591.120).

| Ano | Mongólia | Ulaanbaatar | Parte de UB |
|---|---:|---:|---:|
| 1963 | 1.017.158 | 223.695 | 22,0 % |
| 1969 | 1.197.595 | 267.375 | 22,3 % |
| 1979 | 1.595.006 | 402.283 | 25,2 % |
| 1990 | 2.153.466 | 586.228 | 27,2 % |
| 2000 | 2.403.105 | 794.730 | 33,1 % |
| 2010 | 2.760.968 | 1.244.449 | 45,1 % |
| 2020 | 3.367.257 | 1.603.243 | 47,6 % |
| 2023 | 3.514.456 | 1.740.801 | 49,5 % |
| 2024 | 3.554.550 | 1.774.104 | 49,9 % |
| **2025** | **3.591.120** | **1.796.045** | **50,0 %** |

As porcentagens são conta minha sobre os números lidos. Na mesma tabela, 2025: população urbana 2.557.864 (71,2 %). Ulaanbaatar é
70,2 % de todo o urbano do país.

### 1.2 A série residente: "RESIDENT POPULATION IN MONGOLIA, by sex, bag, khoroo, and by year"

Tabela `DT_NSO_0300_068V2`. Definição lida: "Resident population of Mongolia is the total number of usual residents of Mongolia that
include Mongolian citizens, foreign citizens and stateless persons usually residing in Mongolia for more than 183 days or 6
months."
- 2025: 3.425.162 no país, 1.673.279 em Ulaanbaatar: **48,9 %**.
- 2024: 3.448.838 e 1.682.010 (48,8 %); 2020: 3.260.523 e 1.503.278 (46,1 %).

### 1.3 A pegadinha da fronteira da "cidade"

A capital, como unidade do NSO, tem 9 distritos. Três são **enclaves fora da cidade**: Baganuur (28.949 residentes em 2025),
Bagakhangai (4.249) e Nalaikh (40.824), lidos na mesma tabela `068V2`. Sem eles, os 6 distritos do núcleo têm 1.599.257
residentes: **46,7 %** do país. A distância desses enclaves até a cidade está **a confirmar** (Baganuur fica a mais de 100 km,
pela memória, não lido).

**O que isso faz com o título:** "Half" vale pela série principal (50,0 %) e "almost half" vale em qualquer recorte. A tela tem de
dizer qual número e de qual série: "1.8 million of 3.6 million (NSO, 2025)". O roteiro não pode dizer "more than half" (é 50,01 %,
na série que inclui os cidadãos no exterior), e o mapa de UB tem de mostrar a capital administrativa, não só a mancha urbana, ou
dizer que mostra só a mancha.

### 1.4 "O país de menor densidade do mundo": de pé

- NSO, tabela `DT_NSO_0300_034V1` ("DENSITY, by aimags and the Capital"), 2025: **2,3 hab/km²** no país e 382,1 na capital.
- Banco Mundial, indicador `EN.POP.DNST`, 2022, lido na API (https://api.worldbank.org/v2/country/all/indicator/EN.POP.DNST?format=json&date=2022):
  a Groenlândia tem 0,14, a Mongólia 2,2, a Austrália 3,38, a Namíbia 3,51 e a Islândia 3,79. A Mongólia é a menor **entre os
  países independentes**: a Groenlândia não é um. O roteiro tem de dizer "country", não "place".

### 1.5 Uma camada que só o mapa mostra (lida no NSO)

Na tabela `004V1`, por aimag, de 2000 a 2025: Ulaanbaatar **+126 %**; Zavkhan −17,6 %, Govi-Altai −10 %, Dundgovi −8 %, Tuv −3,5 %
e Arkhangai −4,5 %. O Umnugovi (o aimag de Oyu Tolgoi) cresceu +65 %. O maior aimag, o Khuvsgul, tem 137.878 habitantes: Ulaanbaatar
é 13 vezes maior. É um mapa coroplético de verdade: o país esvaziando em volta de um ponto. Que o Umnugovi cresce pela mina é
**a confirmar**, porque o NSO não diz o porquê.

## 2. A concorrência (vidIQ, 16/10/2026)

**Mesmo território, canais grandes:**

| Canal | Vídeo | Data | Duração | Views |
|---|---|---|---|---:|
| RealLifeLore (7,9 mi de inscritos) | Why 99.7% of Mongolia is Completely Empty | 26/05/2023 | 33:34 | 8.712.904 |
| Gaurav Thakur (7,4 mi) | Why 99.7% of MONGOLIA is Completely Empty | 15/02/2024 | 18:45 | 5.898.739 |
| Geo All Day (389 mil) | Why 99% Of Mongolia Is Empty? 🤔 (Short) | 13/09/2024 | 0:55 | 2.007.710 |
| RealLifeLore | Why the World's Largest City is in… Mongolia!? (Short) | 24/12/2024 | 0:55 | 1.553.806 |
| World Tour (150 mil) | MONGOLIA: How People Live in 'The Emptiest Country on Earth' | 17/08/2025 | 41:33 | 1.856.831 |

- O ângulo deles é **"vazia"**; o nosso é **"lotada"**, o outro lado da mesma moeda. Os dois longos quase certamente mostram que
  metade mora em UB. **A confirmar**: não vi nem li a transcrição (custaria créditos além do teto).
- Os dois passaram da janela de ~2 anos (3,4 e 2,7). Mas o do Gaurav é de um canal que o Lucas usa como referência: o público é o
  mesmo.

**O nosso título, quase literal, nas últimas 6 semanas** (canais pequenos, vários com narração e imagem de IA):
- Blink Then Wonder, *Why Half of Mongolia Lives in One Frozen City*, 09/10/2026, 14:53, 75 views. É o nosso vídeo: o mesmo título,
  as mesmas camadas (o frio, o *dzud*, os bairros de *ger*, o ar, o carvão e o cobre);
- FARPLACE STORIES, *Living in Mongolia | Why Half the Country Crowds Into One Frozen Capital*, 26/09/2026, 52:51, 10.420;
- Atlas and Glue, *Half of Mongolia Lives in One City* (Short), 03/10/2026, 243, já citando a mesma tabela do NSO;
- Atlas Tilt, *Mongolia Is Empty. Half the Country Lives in One City* (Short), 06/10/2026, 4.065;
- Stone Also Write History, *Why Half of Mongolia Now Lives in Tents on a Mountain…*, 01/09/2026, 22:09, 130;
- Antes: The Cultural Travels, *Why Half of Mongolia Lives in Ulaanbaatar 🇲🇳*, 01/09/2025, 9:23, 692.

**Leitura:** nenhum canal grande fez o "lotada" nos últimos 2 anos. Mas a pergunta "por que metade mora numa cidade" está sendo
produzida em série por canais automáticos. O título genérico não diferencia, e o público do Gaurav e do RLL já viu "a Mongólia
vazia".

## 3. As outras perguntas

- **O título paga no primeiro minuto?** Sim. "Half" é verdade (50,0 %), e a resposta curta (o *dzud* e o fim do coletivo em 1990
  empurram o pastor para a única cidade com emprego, escola e hospital) cabe no primeiro minuto. O que o *dzud* matou e quantos
  migraram fica **a confirmar** (nada lido aqui).
- **O mapa é a explicação?** Em parte. No gancho (o país vazio e um ponto) e na camada dos aimags (1.5), sim. O porquê é sobretudo
  história e dinheiro (o socialismo, 1990, o rebanho, o emprego), e boa parte do vídeo tende a ser foto, ilustração e dado, não
  mapa. A ferrovia transmongol e o vale do Tuul ajudam, mas não carregam o "por quê". Nota de mapa: média-alta.
- **Risco político e fato volátil.**
  - A política nacional está instável, segundo resumos de busca (**não lidos, a confirmar**): o primeiro-ministro caiu em junho de
    2025 depois de protestos em Ulaanbaatar, e o sucessor teria renunciado em março de 2026. O tema não é político, mas o vídeo
    não deve citar governo nem protesto.
  - O plano de uma capital nova em Kharkhorum: **a confirmar**, e volátil; se entrar, como plano anunciado, com data.
  - O número é volátil no detalhe: 2020–2024 foram interpolados depois da pesquisa intercensitária de 2025, e a próxima revisão
    pode pôr 2025 em 49,9 %. Por isso, "about half" ou "1 in 2" na fala, e o número exato com a data na tela.
- **A miniatura:** a do molde das Maldivas continua a se desenhar sozinha (a Mongólia pintada, um círculo vermelho). Mas "HALF
  LIVES HERE" é o que os Shorts de outubro já usam.

## 4. O ajuste

1. **Trocar o motor do vídeo, do "por quê" genérico para a virada no tempo**, que é só nossa e está lida no NSO: **em 1963, 1 em
   cada 5 mongóis morava na capital; em 2025, 1 em cada 2**, e cinco aimags perderam gente desde 2000. Título sugerido (a testar):
   "Mongolia Is the Emptiest Country on Earth. Half of It Lives in One City" ou "How Half of Mongolia Moved Into One City". A
   miniatura pode ser o país pintado com o ponto e "1 IN 2".
2. **O mapa como prova, não só como gancho:** o coroplético dos aimags de 1990 a 2025 (1.5) e o crescimento da mancha de UB, de
   satélite (Landsat de 1990 e de hoje; imagem **a confirmar**).
3. **O número na tela**, "1.8 million of 3.6 million · NSO 2025", e a nota da capital administrativa (1.3).
4. **Antes do roteiro:** ver o vídeo do RealLifeLore e o do Gaurav (ou as transcrições) para não repetir a estrutura deles. E ler
   na fonte (Banco Mundial, ONU-Habitat ou o NSO) o *dzud* de 2009–10 e o de 2023–24, a migração depois de 1990 e os bairros de *ger*.

Se o Lucas não quiser disputar com o RLL e o Gaurav no mesmo país, esta pauta cai para reserva.

## Fontes lidas (16/10/2026)

- NSO Mongólia, PxWeb: https://data.1212.mn/pxweb/en/NSO/ e a API dele, tabelas `DT_NSO_0300_004V1`, `DT_NSO_0300_068V2`
  e `DT_NSO_0300_034V1` (títulos, notas, fonte e valores citados acima).
- `https://www.1212.mn/robots.txt` (`Disallow: /api`) e `https://www.1212.mn/en` (200 pelo TLS do Windows; os números vêm por JS).
- Banco Mundial, `EN.POP.DNST` (2022): https://api.worldbank.org/v2/country/all/indicator/EN.POP.DNST?format=json&date=2022
- Secundária, só para conferência: citypopulation.de (https://citypopulation.de/en/mongolia/admin/), "Source: Mongolian
  National Statistical Office": UB 1.499.140 de 3.253.283 em 2020 (46,1 %), que bate com a série residente do NSO.
- vidIQ `youtube_search`: "why half of Mongolia lives in Ulaanbaatar" (relevância, 25) e "Mongolia empty Ulaanbaatar geography
  explained" (views, médio).

Não usados como fato: os resumos de busca (o "46 %" do censo de 2020 atribuído a uma notícia, a crise política) e a página do
theubposts, que redirecionava para outro domínio sem relação, e não segui.
