# Los Angeles · research · pesquisa-dados (08/10/2026)

Executado pelo pesquisa-dados a partir do ofício (`.claude/agents/pesquisa-dados.md`) e da roupa
(`marca/agentes/pesquisa-dados.md`), com o CLAUDE.md por cima. Pedido do Claude central: a entrega do ofício para as 42 cenas
com `needs.dados` no `espelho.json` e uma conferência a mais. O despacho chegou tarde: o vídeo já tem textos de tela, laudo de
fatos e cenas construídas. A conferência compara cada número da tela (`textos-tela.json` › `_textos_por_cena`) e da voz
(`roteiros/los-angeles/roteiro-narrador.md`) com a fonte: valor, unidade, ano e arredondamento. Não consertei nada.

Objeto conferido: `out/los-angeles/textos-tela.json`, sha1 `db65751718a5` (a rodada 4 do redator, que só mudou a pergunta da
s55 desde o adendo do laudo), e `roteiros/los-angeles/roteiro-narrador.md`, sha1 `a90f7b2ff5c3` (r3a). Pelo
`transcricao.json` › `alinhamento.conteudo`, a voz gravada não troca nenhum número do texto: as trocas aceitas são de grafia
do transcritor ("Mendel", "$200 ,000", "15 ,000").

## Entrega

- **O dado, por cena:** `out/los-angeles/_dados/<cena>.json`, 42 arquivos, um para cada cena com `needs.dados`. As cenas
  filhas de uma fusão (s08, s32, s34, s50, s51) têm arquivo próprio e apontam para o HTML da mãe (s07, s31, s33, s49).
  Cada arquivo traz:
  - os `valores` numéricos com unidade (sem string formatada), a `fonte` que produz o dado, a `url`, o `dataDoDado`, o
    `dataConsulta` (08/10/2026), a `legenda` e o `texto_para_tela` em inglês, e a `nota` em português;
  - a voz da cena (`narracao`), os textos de tela do HTML (`na_tela`) e o pedido do espelho (`needs_dados`);
  - a conferência item a item (tela, voz, fonte, página, trecho), as divergências e as fontes, com a cópia local, o sha256
    e a leitura de hoje.
- **Procedência:** `out/los-angeles/_dados/_PROCEDENCIA.json`: as 42 fontes, com a URL, a cópia local, o sha256, a licença e
  a leitura de hoje.
- **Pauta:** `out/los-angeles/_pesquisa/pauta-dados.json`, 42 itens.
  `REGIE_MOTOR=C:/projetos/regie-v1 node scripts/validar-contrato.mjs pauta-pesquisa out/los-angeles/_pesquisa/pauta-dados.json`
  deu **✓ válido** (exit 0).
- **Checagens do contrato (§3):** os 43 JSON abrem; todos os valores são números e têm unidade; a ordem de grandeza bate com
  a voz em todas as cenas (nenhum fator 1000); a classe inteira está nos superlativos e nas comparações (a junta de cinco
  em s25, os vizinhos da faixa em s40 e s48, os 14 pontos de amostra); a fonte é primária, menos onde a voz e a tela já
  atribuem (Willard, o Times, o porto sobre si mesmo).
- **O fact store entre vídeos** não recebeu nada: decisão do Lucas pendente (roupa, §6).
- Nenhum arquivo fora de `_dados/`, `pauta-dados.json` e deste relato. O script que gerou os arquivos ficou fora do canal
  (scratchpad da sessão), porque o despacho só autoriza gravar aqui.

## De onde vieram os números

Do que já estava verificado, como manda o ofício: `pautas/los-angeles/fundamento.json` (números, afirmações, divergências e
voláteis, com as fontes e as cópias locais de 07/10), `roteiros/los-angeles/qc-roteiro/fatos-tela.laudo.md` e
`out/los-angeles/_pesquisa/pauta-geo.md` (as medidas sobre a folha de Hamlin). Reconferi cada número contra o texto da cópia
local que o dossiê baixou: o OCR ou o texto das fontes em `midia/los-angeles/fontes/`. Onde o OCR falha, valeu a imagem lida
pelo dossiê e pelo verificador, e o arquivo diz isso:
- o "5½ fathoms" do SD18 (a camada de texto lê "54");
- o "2,500 feet" do relatório de 1888 (o OCR lê "2,100");
- o 213 do Times de 20/11/1906;
- o "15,000 and 20,000" do Times de 1899.

**Lido hoje na web**, um pedido por URL, com o User-Agent do canal (`AlphaPointBot/1.0 (contato.naka@hotmail.com)`):
- **os voláteis, com GET:**
  - o TEU de 2024 do porto (10,297,352.25, igual ao do dossiê);
  - a página Facts and Figures do porto ("26 consecutive years (2000-2025)" e "-53' Main Channel water depth");
  - a camada 19 do condado (OF_AREA_SM 468.852);
  - a camada 21 do condado: 28.01 (1850), 43.26 (1899), 18.64 → 61.9 (26/12/1906), 9.93 → 71.83 e 4.61 → 76.44
    (28/08/1909), e as incorporações de Long Beach, Torrance, Gardena, Lomita e Carson.
- **o resto, com HEAD (todos 200):** as fontes federais do govinfo (o relatório de 1888, o SD18, o H. Ex. Doc. 41 e as leis
  de 1871, 1890 e 1896), os itens do archive.org (os seis números do Times, Willard e os relatórios do Corpo de 1892, 1899–1906,
  1905, 1910 e 1915), o cartão de 2024 e o transmittal de 2013 do porto, o army.mil, o Census (Gazetteer e Vintage 2025), os
  LA0007, LA0008 e LB0005 do condado, o estatuto da Califórnia de 1889 e o Gutenberg.
- **Recusaram, e parei nelas (não tentei de novo nem por outro cliente):**
  - `https://www.loc.gov/item/2006627663/` (o mapa de Hamlin de 1916): 403. Os números do quadro valem pela pauta-geo e batem
    com a camada 21, relida hoje;
  - `https://www.bts.gov/archive/publications/americas_freight_transportation_gateways/2009/glossary`: 403;
  - `https://www.unescwa.org/sd-glossary/teu-twenty-foot-equivalent-unit`: 403.

  Os dois últimos eram para a frase "a forty-foot box counts as two" (s52).
- O glossário do UNCTAD (`sdgpulse.unctad.org/glossary/containerised-transport/`) abriu, mas só nomeia TEU e FEU, sem a conta.
- Nenhuma ferramenta de navegador e nenhuma cópia arquivada.

## Muda a tela ou a voz

**Nenhuma divergência de número com a fonte.** Todo número da tela e da voz nas 42 cenas confere com a fonte que o sustenta,
dentro do hedge que a tela e a voz já dão ("about", "more than", "almost", "just over"). A tabela abaixo lista tudo o que não
é igual letra a letra, por menor que seja, e nada ali pede troca de texto. Quem decide é o Claude central (e o Lucas, na
divergência de número). A roupa (§5) não deixa escrever "corrija para X".

Dois pontos ficam para quem decide, por serem de forma e não de número:
- **s47, a voz:** "in 1912, the Corps of Engineers called the breakwater finished". A fonte é o USACE de 31/07/2026
  ("Completed in 1912 by Army engineers"). O índice do Corpo de 1915 põe o último trecho no ano fiscal 1911–12. Nenhum
  documento do Corpo de 1912 foi aberto, e a voz sugere uma declaração daquele ano. A substância se sustenta, e a tela está
  na medida da fonte ("breakwater completed, per the Corps of Engineers").
- **s37, o áudio, não o texto:** o recorte curto do Whisper no laudo da transcrição ouviu "Sunday, November 12, 1906"
  (trecho 23, 497,94–498,26 s). A transcrição inteira ouviu "Monday", e 12/11/1906 foi mesmo segunda-feira. O recorte começa
  no meio da palavra. Vale confirmar na escuta do Lucas.

## Não muda (todas as divergências, por cena)

| Cena | A tela ou a voz diz | A fonte diz | Fonte e página | Por que não muda |
|---|---|---|---|---|
| s01, s53 | "2000–2024" e "every year from 2000 through 2024" | a página do porto, lida hoje: "No. 1 container port in Western Hemisphere for 26 consecutive years (2000-2025)" | Port of Los Angeles, Facts and Figures (página viva); o cartão de 2024 diz "(2000-2024)" | Verdadeiro e preso ao cartão de 2024, que o crédito cita. Há ano mais recente. Volátil: reconferir na véspera |
| s51 (s49 na tela) | "In 2024 … about 10.3 million TEU" | 10,297,352.25 em 2024; o ano civil de 2025 tem 10,239,318.40 (−0,56 %) | Port of Los Angeles, Historical TEU Statistics 2024 (lida hoje) e 2025 | Arredondamento certo; o ano está dito, e o de 2024 casa com o 2000–2024. Volátil |
| s48 | "ABOUT 469 SQ MI" (crédito "Los Angeles County, 2026") | condado: 468.852 (relido hoje); Census Gazetteer 2025: 470.518 de terra e 31.486 de água | LA County eGIS, MapServer/19, OF_AREA_SM; Census, 2025_gaz_place_06 | Definições diferentes (esc.div-08); a tela credita o condado |
| s40 | "18.64 SQ MI", "more than eighteen square miles" | registro do condado e quadro de Hamlin: 18,64 (11.931 acres); geometria do condado: 18,59; medida sobre a folha de Hamlin corrigida: 18,43 | LA County, MapServer/21 (SHOESTRING ANNEXATION); pauta-geo.md | A tela dá o registro, com duas casas, e o credita; a medida fica 1,1 % abaixo, ainda acima de 18 |
| s40 | "ABOUT 15 MILES (1906)" | 14,81 mi (folha de Hamlin corrigida); 14,88 (condado) | pauta-geo.md; medidas.json › fio_1906 | Arredondamento no "about" |
| s03, s48, s42, s55 | "ABOUT 9 MILES (TODAY)", "ABOUT HALF A MILE" | 8,66 mi; largura inscrita mediana de 0,54 mi (0,45 a 0,64 hoje; 0,49 a 0,60, p05–p95, em 1906) | medidas.json (TIGER 2025 e camadas do condado) | Arredondamento no "about". Volátil (contorno de hoje) |
| s26 | "MORE THAN 20 MILES" | Plaza → Point Fermin: 24,43 a 24,48 mi | medidas.json (pontos GNIS) | Arredondamento conservador: o número é 24 |
| s05, s10, s33, s34, s55 | "ABOUT 19 MILES", "Los Angeles, nineteen miles away", "a city nineteen miles from the harbor towns" | 19,10–19,15 mi da Plaza ao ponto GNIS de Wilmington | medidas.json | A medida é do centro antigo, não da divisa (em 1906 a divisa sul ficava mais perto). É a convenção do vídeo desde s05 ("From the Plaza") |
| s05 | crédito "Source: Los Angeles County annexation records" junto de ABOUT 14 MILES e ABOUT 19 MILES | o registro sustenta o 28 SQ MI (28.01); as distâncias são medição do canal | MapServer/21; medidas.json | Nota de atribuição, sem número errado |
| s05 | "exposed to the southeast and south" | "It is entirely exposed to the southeast"; o "south" vem dos relatos dos temporais (de sudeste girando para sul e sudoeste, mec.afi-03) | Senate Document 18 (1897), p. 6 | Sustentado pelo dossiê, em outra fonte |
| s06 | "anchored about three miles out" | "at a distance of three or three and a half miles from shore" | Dana, *Two Years Before the Mast*, cap. XIV | Arredondamento para o limite de baixo, com "about" |
| s07 | "2 OR 3 MILES EACH WAY" | "a distance of 2 or 3 miles" (costa ↔ fundeadouro, por barcaça, em 1886) | Annual Report of the Chief of Engineers 1888, p. 2122 | O "each way" é leitura fiel; a cena não traz linha de fonte para o número |
| s08 (arquivo s07) | "LESS THAN 2 FT (BEFORE 1871)" | "less than 2 feet at the entrance … at mean low tide" (1892); o próprio Exército dá também "about 1 foot" (1888) e "about 2 feet" (1892) | Report of the Chief of Engineers 1892, App. RR, p. 2626 | As fontes divergem entre si (T04); a tela segue a do Chief of Engineers |
| s12 | "MORE THAN A MILE" | 6.700 pés lineares (1,27 mi) do **projeto** de 1871 | Meyler (1899), p. 244 do registro de Borax v. Los Angeles | Fica aquém, como deve; é o comprimento do projeto, não da obra medida |
| s19 | "4,300 FT", "more than three quarters of a mile" | SD18: 4.300 pés (0,81 mi); Hood (1892, em obra): 4.500; nota de jornal no SD18: 4.700; o traço da folha USGS de 1903 mede 0,74 mi (~3.900 pés) | Senate Document 18, p. 6 (imagem); mec.div-08; pauta-geo.md | A tela e a voz citam o relatório de 1897; a régua sobre o traço do USGS já saiu (A4 do laudo) |
| s19 | "Southern Pacific pier, finished by 1894" | só Willard, fonte de parte: 1893 e "about completed" no começo de 1894. O SD18, que a cena credita, não dá data | Willard (1899), cap. XI; mec.div-09 | O dossiê aceita "by 1894". É ressalva de atribuição: a linha de fonte da cena não cobre a data |
| s19 | "ABOUT 33 FT" | 5½ braças = 33 pés exatos, sem plano de referência | SD18, p. 6 | O "about" fica |
| s31/s32 | "21 FT (1906)", "the bar had twenty-one feet at low tide" | "the minimum draft that could be carried over the bar on June 30, 1906, was 21 feet at mean lower low water" | Report of the Chief of Engineers 1906, p. 716 | É o calado que passava (a água é pelo menos isso), em MLLW; o número não passa da fonte |
| s50 e a série de s07, s12, s31, s49 | "LESS THAN 2 · 10 · 11 · ABOUT 14 · 21 · 53 FT"; "Mendell expected eighteen or twenty feet … The port's Main Channel is fifty-three" | planos diferentes: maré baixa média (1871–1892), maré baixa média mais baixa (1906 e hoje), maré alta (o teto de Mendell) | relatórios do Corpo de 1888, 1892, 1902 e 1906; transmittal do porto de 2013 | Mudança de definição dentro da série (mec.afi-11). No contraste da voz, o teto está em maré alta e o 53 em MLLW: na mesma régua a distância seria maior, não menor. A tela rotula "AT HIGH WATER" e "at low tide", não o MLLW. A diferença entre os planos em Los Angeles não foi medida aqui |
| s33 | "DECEMBER 1905" | LA0008: "December 26, 1905" no texto; "Reincorporated Dec. 27, 1905" no cabeçalho anotado (dossiê) | LA0008 (OCR local) | Um dia de diferença dentro da mesma fonte; o mês é o mesmo |
| s39 | "DEC. 26, 1906" | camada 21 e quadro de Hamlin: 26/12/1906; LA0007: "November 16, 1906" | MapServer/21 (relido hoje); LA0007 | Vigência contra data de anexação; o dossiê registra (X04 do laudo) |
| s42 | "ALMOST 3 MORE YEARS" | 2 anos, 8 meses e 2 dias (26/12/1906 → 28/08/1909) | MapServer/21 | Arredondamento com "almost" |
| s48 | "almost three years before the wall was done" | de 28/08/1909 ao fim do ano fiscal 1911–12: no máximo 2 anos e 10 meses | índice do Corpo de 1915; USACE 2026 | Arredondamento com "almost" |
| s46 | "Two weeks earlier" | 15 dias (vigência em 13/08/1909 contra 28/08/1909); o voto foi em 30/07 | MapServer/21 (Long Beach), LB0005 | Arredondamento |
| s47 | "JUST OVER 2 MILES" | 2,109 mi (9.250 + 1.887 pés, conta do dossiê); 2,11 (porto, 1921); "two-mile-long" (USACE, 2026); 2,09 medidos na pauta-geo | índice do Corpo de 1915, pp. 1549–1550 | Dentro do "just over" |
| s47 | "in 1912, the Corps of Engineers called the breakwater finished" | "Completed in 1912" (USACE, 31/07/2026); a obra acabou no ano fiscal 1911–12 (índice de 1915) | army.mil/article/294312 | Ver "Muda a tela ou a voz": a substância fica, e a forma é mais forte que a fonte |
| s52 | "a forty-foot box counts as two"; "40 FT · = 2 TEU" | nenhuma fonte primária lida escreve a equivalência; ela decorre do nome da unidade ("Twenty-Foot Equivalent Units", do porto). O BTS e a UN ESCWA recusaram hoje (403) | Port of Los Angeles (o nome da unidade); UNCTAD (TEU e FEU, sem a conta) | Achado de fonte, não de número: NÃO CONFERIDO na fonte |
| s37 (áudio) | o texto diz "Monday" | o recorte curto do Whisper ouviu "Sunday"; a transcrição inteira, "Monday"; o calendário, segunda-feira | transcricao.json › alinhamento.conteudo, trecho 23 | Ver "Muda a tela ou a voz": confirmar na escuta |

## Por cena (o que confere)

Cada linha está inteira, com a página e o trecho, em `_dados/<cena>.json` › `conferencia`.

- **s01:**
  - "2000–2024" e o nº 1 do Hemisfério Ocidental, pela conta do porto: cartão Facts & Figures 2024;
  - "America's second-largest city": Census Vintage 2025. Los Angeles tem 3.869.089, atrás de Nova York (8.584.629) e à
    frente de Chicago (2.731.585). O número não estava no `needs.dados`, mas é da voz.
- **s03:** 8,66 mi; 0,54 mi; UNTIL 1909 (consolidações em 28/08/1909).
- **s05:** 28,01 mi² em 04/04/1850; 13,99–14,09 mi até Playa del Rey; 19,10–19,15 mi até Wilmington. Mendell, 08/11/1886,
  p. 2122: "no harbor for deep-sea vessels on the California coast, except that of San Francisco … and that of San Diego".
- **s06, s07, s08:** a tabela acima.
- **s09:** "$200,000" (16 Stat. 538, de 03/03/1871, "For construction of breakwater at Wilmington harbor"). Dólares correntes,
  sem correção pela inflação. "First": a lei de 1870 não tem verba para o porto.
- **s10:** 19 mi. **s11:** 01/07/1871 (Report 1902, p. 523).
- **s12:** "MORE THAN A MILE", como na tabela; 10 pés obtidos em 1881 (Report 1902, p. 523); 11 pés em fevereiro de 1888
  (ARCE 1888, p. 2124).
- **s13:** 12 a 14 pés de calado e "If 18 or 20 feet at high water" (p. 2123); a data, 08/11/1886, em San Francisco
  (p. 2122).
- **s14:** "at least 30 feet" e "26 to 28 feet are now common" (SD18, p. 4); "worthy of improvement" (ARCE, p. 2123).
- **s15:** 3.300 + 1.000 + 2.500 pés (p. 2124, imagem); 13/02/1888; "well conceived" (p. 2126).
- **s17:** três oficiais (26 Stat. 426); San Pedro em 08/12/1891 (Report 1892, pp. 2631 e 2638).
- **s18:** 1891, só como atribuição a Willard, como a voz já faz.
- **s19:** a tabela acima.
- **s21:** a sessão final começou em 25/10/1892 e o relatório foi "unanimously adopted"; "two harbors where one would answer
  the purpose" (H. Ex. Doc. 41).
- **s23:** sem número; as duas citações são atribuídas.
- **s24:** "two million nine hundred thousand dollars" e "the decision of a majority of which shall be final" (29 Stat. 213);
  "in favor of San Pedro", 01/03/1897 (SD18, p. 24).
- **s25:** "signed by four members"; a minoria de Morgan é de 15/03/1897, 14 dias depois. Classe inteira: cinco membros.
- **s26:** 24,43 mi (a tabela acima).
- **s28:** "between 15,000 and 20,000", pelo Times de 27/04/1899, p. 10.
- **s29:** "at least 9,000 feet", com autorização de 11/01/1905 (Report 1905, p. 2412); 1899 → 1912.
- **s31:** a draga San Pedro em serviço desde 01/04/1905 (Report 1905, p. 2414).
- **s32:** "about 14 feet at mean low water" em 1892 (H. Ex. Doc. 41, p. 4); 21 pés em 30/06/1906 (a tabela acima).
- **s33:** "San Pedro city" no censo de 1890 (1.240 habitantes; 1.787 em 1900); Wilmington em 26/12/1905 (LA0008).
- **s34:** 43,26 mi², relido hoje.
- **s37:**
  - 12/11/1906 foi segunda-feira; o Times de 13/11 diz "Annexation won yesterday";
  - a lei de 1889 exige maioria nos dois.
- **s38:**
  - na cidade, 6.612 a 914, ou seja, 7,23 para 1 (Times, 21/11/1906);
  - no território, 208 a 202 na noite (Times, 13/11/1906), e 213 a 203 na apuração oficial, com 416 votos (Times, 20/11/1906).
- **s39, s40, s42:** a tabela acima. Em s40:
  - a faixa fina é 46 % do total;
  - os anos dos vizinhos foram relidos hoje: Torrance em 12/05/1921, Gardena em 11/09/1930, Lomita em 30/06/1964 e Carson em
    20/02/1968;
  - Long Beach é de 1897 e não encosta na faixa.
- **s44:**
  - 107 a 61 em Wilmington e 13.661 a 221 em Los Angeles, este sobre Wilmington (Times, 05/08/1909);
  - 726 a 227 em San Pedro (Times, 13/08/1909);
  - 76,44 mi² em 28/08/1909, relido hoje.
- **s46:** 0,97 mi² de Terminal Island, com voto em 30/07/1909 e vigência em 13/08/1909.
- **s47:**
  - "about 15,000 feet of undeveloped water front" (Bureau of Corporations, 26/09/1910);
  - o resto, na tabela acima.
- **s48:** 468,852 mi²; os 14 pontos de amostra: 8 em cidade e 6 em terra do condado, nenhum em Long Beach (2,08 mi).
- **s49:**
  - "-45-foot-deep main channel … to a depth of -53 feet MLLW" (relatório do Chief of Engineers);
  - "the Main Channel Deepening project now provides -53 ft. depths" (porto, 21/02/2013);
  - "-53' Main Channel water depth" (página do porto, relida hoje);
  - o 78 do BTS é a aproximação e a entrada, não o Main Channel.
- **s50, s51, s52, s53:** a tabela acima.
- **s55:** recapitulação de s25, s05, s40 e s49, sem número novo.

## Para quem vem depois

- **`redator-de-tela` e `verificador-de-fatos`:** nada pede troca de texto. Se o Claude central quiser fechar as ressalvas
  de atribuição, são três:
  - em s19, a data do píer sem fonte na cena;
  - em s05, o crédito do condado ao lado de distâncias que são medição do canal;
  - em s07, o número sem linha de fonte.
- **`editor-de-arte` e `mapista`:** se a série de profundidade de s49 for desenhada como régua única, ela junta três planos de
  referência (a tabela acima).
- **Voláteis, na véspera de publicar:** o hemisfério (s01, s53), o TEU (s51), a área de hoje (s48), o contorno e as medidas
  de hoje (s03, s48) e o Main Channel (s49, s55). As URLs estão em `fundamento.json` › `volateis` e nos `_dados`.
- **A escuta do Lucas:** o "Monday" de s37 (trecho 23).
- **DECISÃO DO LUCAS PENDENTE** que tocou esta entrega:
  - se o canal guarda fatos verificados entre vídeos (roupa, §6): nada foi gravado em `assets/dados/`;
  - a licença da camada do condado (laudo de fatos da tela, §6): na tela só vão o número e o crédito.
