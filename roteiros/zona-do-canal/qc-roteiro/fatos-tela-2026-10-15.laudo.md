Gravado pelo setor Texto e fatos, tarefa `zona-do-canal-texto-2`, em 15/10/2026. Os laudos e as reconferências abaixo são do `verificador-de-fatos` (`claude-opus-5-5`, conferido no transcript de cada lote), sem mudança, tirados das mensagens de cada subagente. Só esta cabeça e as linhas `# …` são do setor.

COBERTURA: 723 de 725 na rodada 1 (lote A: 384 de 385; lote B: 339 de 340), sobre `out/zona-do-canal/textos-tela.json` `f0597c71…0077b`. Os itens que os consertos mudaram foram reconferidos por inteiro: lote A, 8 de 8; lote B, 15 de 15, depois 4 de 4. O objeto final é o `textos-tela.json` `ee9c74a02c41e0a68fb1aee5aa34880e41ed83fa492221063af3881161c05d8c`, e o contrato `textos-tela` sai 0.

- **A soma é do setor.** Os ids TA e TB não se repetem, e cada lote diz de quais seções do arquivo derivou a lista.
- **Os lotes:**
  - **A:** s01–s36, os cards, os rótulos de dado e os avisos do ano dessas cenas, e o glossário inteiro;
  - **B:** s37–s68, o mesmo dessas cenas, e as seções gerais (regras de série, instruções para a arte, a pergunta do comentário e os textos que esperam o Lucas).
- **Os consertos, em três voltas ao `redator-de-tela`:**
  - **na tela:** s28, s16, s67 (a condição), s49 (a ponte), s52, s65 e s59;
  - **fora da tela:** os ids no glossário e na nota da s22, e a nota e a instrução da s16 (a EO 5880 e o Decreto 43).
- **O que continua aberto depois deles:**
  - TA385, NÃO FOI CHECADO: o footage s01-a não existe ainda, e a condição do redator barra o rótulo dele;
  - TA383 e TA384, NÃO ACHEI: a posição dos pinos de 1912 e de Red Tank;
  - o TB340, que era o mesmo caso na s67, passou a NADA A CHECAR com a condição.
- **Imagens:** lote A, 0; lote B, 4 de 10, todas em itens NÃO FOI CHECADO do laudo da pesquisa que foram à tela (B074, B109, B113).
- **As notas:**
  - lote A: 8.8 na rodada 1 e 9.3 depois do conserto;
  - lote B: 9.1 na rodada 1 e 9.6 na reconferência 1, depois PASS nas reconferências 2 e 3.
  - O setor não as junta.
- **O veredito:**
  - lote A: RESSALVA, pela cobertura parcial em TA385, sem DIVERGE nem REFUTADA;
  - lote B: PASS.

VEREDITO: RESSALVA

---

# Lote A

COBERTURA: 384 de 385 (lote A). Um item ficou NÃO FOI CHECADO: o clipe s01-a, que não está no disco nem tem veredito (TA385). A regra do próprio redator já impede o rótulo dele de ir à tela.

- **Como a lista foi derivada: à mão, por script, sem amostra.** O canal não tem extrator para texto de tela. Um script em `%TEMP%` (`C:/Users/zangp/AppData/Local/Temp/claude/vf-tela-A/scr/`) leu o `out/zona-do-canal/textos-tela.json` (sha256 `f0597c711a58524b6fdeae6853cd5da3e8efeb2a3c98d19d9e529560dd50077b`, o mesmo no começo e no fim). Ele tirou:
  - de `_textos_por_cena`, as 241 entradas de s01 a s36;
  - de `cards_pessoa`, 3 entradas;
  - de `rotulos_dado`, 32 entradas;
  - de `_avisos_do_ano`, 19 entradas, todas de s01 a s36 (nos campos com duas cenas valeu a primeira);
  - o `glossario` inteiro, com 85 entradas.
  - Isso dá 380 itens. Somei 5 que a forma não denuncia: o contorno de 1947 usado como a Zona de 1912 (TA381), as posições dos pinos de 1947 e de 1912 que vão à tela (TA382 a TA384) e o ramo do footage s01-a (TA385). O total é 385.
- **O que já estava conferido** (marcado HERDADA, com o id de lá):
  - `roteiros/zona-do-canal/qc-roteiro/fatos.laudo.md` (`38f51e4d…`, ids F…);
  - `fatos-pesquisa-2026-10-15.laudo.md` (`0b4fbb8a…`, ids A… e B…).
- **Entradas de contexto** (sha256):
  - `regencia.json` `e40adc83…`, `espelho.json` `9eba39d5…`, `conceito-visual.json` `6c938683…`;
  - `pauta-geo.json` `b6473532…`; `roteiro-narrador.md` `9828291d…`;
  - camadas de geo: `lugares-1947.json` `c708fe10…`, `cidades-obra-1912.json` `f1ce27c0…`, `pontos-osm-hoje.json` `1c6c4ae5…`, `pontos-osm-atlantico.json` `7876ec2a…`, `lugares-1936.json` `e36add78…`;
  - fontes locais: 1915 `d0db383e…`, 1920 `27f52c22…`, 1930 `3ea40c57…`, 1940 `228a5226…`, 1950 `cdd00085…`, `stat-50-558.txt` `8e26dca8…`, `census-history-2024-08.txt` `5a06e19b…`, `acp-en-torrijos-carter-treaty.txt` `c407b01b…`, `departmentofstatd7979unit.txt` `da63ff09…`.
- **O delta da mídia.** O `conferencia-midia.json` está agora em `5299ddb5…`; o laudo da pesquisa leu `58197f2e…`, do commit `7056205`. Comparei registro a registro. No meu lote há 5 vereditos novos ou mudados:
  - o aviso da foto de 1908 da s22 passou de `false` para `true`;
  - o clube "silver" de Cristóbal de 1948 (s22) é novo;
  - as duas fotos 84-D e 84-E de 1909 (s23) são novas;
  - o reuso das duas fotos da s03 na s04 é novo.
  - Conferi os quatro itens da NARA (100998772, 202799387, 100996836 e 100996838) na API v2, com o User-Agent do canal, um pedido por vez. Todos deram 200.

NOTA: 8.8/10. O redator aplicou todos os consertos de tela dos dois laudos que tocam s01–s36, e as quatro folhas recriadas batem letra a letra com a fonte. A nota cai por três coisas: um cartão de 1940 tira o grupo que a fonte nomeia (s28); o contorno de 1947 é enchido como a Zona de 1912 (s16); e há dois conjuntos de pinos sem posição independente (Gorgona, Empire e Culebra; Red Tank).

Data-base: 15/10/2026, 07:08 (Brasília).

Imagens abertas: **0**. Dos 16 itens NÃO FOI CHECADO do laudo da pesquisa, só o B127 (as posições de `lugares-1947`) vai à tela neste lote. Resolvi a parte que vai à tela sem imagem, comparando os pontos com referências independentes (TA382 e TA384).

## A TABELA

| id | cena | campo/t0 | texto de tela | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|---|
| TA001 | s01 | t0 0.5 · rotulo | Balboa | CONFIRMADA (no fallback de mapa); o ramo do footage: NÃO FOI CHECADO (o clipe s01-a não está no disco nem tem veredito; a _condicao já barra o rótulo) | OSM way/1312270821 "Estadio de Balboa", dentro da cidade (a 301 m do Balboa Clubhouse da folha de 1936) | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA002 | s01 | t0 2.1 · rotulo | Balboa Heights | CONFIRMADA (no fallback de mapa); o ramo do footage: NÃO FOI CHECADO (o clipe s01-a não está no disco nem tem veredito; a _condicao já barra o rótulo) | "Administration Building, Balboa Heights, Canal Zone" (NARA 202800733); OSM way/370341568 | https://catalog.archives.gov/id/202800733 |
| TA003 | s01 | t0 6.2 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA004 | s01 | t0 6.4 · rotulo | BALBOA, 1960 | HERDADA (A001, F002) | — | — |
| TA005 | s01 | t0 6.4 · credito | Source: U.S. Census Bureau, 1960 | HERDADA (A007) | — | — |
| TA006 | s01 | t0 8.5 · cota | 3,139 RESIDENTS | HERDADA (F002, A001) | Table 28, Balboa (cidade) | fontes/mecanismo/census1960-p57-33-table28.png |
| TA007 | s01 | t0 11.0 · cota | 1,580 BORN IN THE U.S. | HERDADA (F002, F094, A002) | — | — |
| TA008 | s03 | t0 0.0 · rotulo | Balboa Central Police Station | HERDADA (B301) | "Balboa Central Police Station, Balboa, Canal Zone. August 17, 1943." | https://catalog.archives.gov/id/202800161 |
| TA009 | s03 | t0 0.0 · rotulo | Balboa Elementary School | HERDADA (B304) | "Balboa Elementary School, Canal Zone. December, 1954." | https://catalog.archives.gov/id/202800569 |
| TA010 | s03 | t0 0.7 · aviso_ano | Photo from 1943 | HERDADA (B302; o reuso na s04 tem veredito novo, aprovado, com aviso) | — | — |
| TA011 | s03 | t0 0.85 · aviso_ano | Photo from 1954 | HERDADA (B305; o reuso na s04 tem veredito novo, aprovado, com aviso) | — | — |
| TA012 | s03 | t0 1.0 · rotulo | 1903 | HERDADA (F002c) | — | — |
| TA013 | s03 | t0 6.4 · rotulo | OCT. 1, 1979 | HERDADA (F003, F120) | "Came into force on 1 October 1979" | fontes/documento/unts-1280-I-21086-en.txt |
| TA014 | s05 | t0 0.0 · heroi | BORN IN BALBOA | HERDADA (F004) | o fio que para em "didn't" diz o que a voz diz | — |
| TA015 | s05 | t0 0.0 · heroi | AN AMERICAN | HERDADA (F004) | — | — |
| TA016 | s06 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA017 | s06 | t0 0.0 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa", dentro da cidade (a cidade, nunca o distrito; T06) | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA018 | s06 | t0 2.4 · legenda | Canal Zone (1947 map) | HERDADA (B107; conserto A4 do lote B aplicado) | — | — |
| TA019 | s06 | t0 6.55 · rotulo | Caribbean Sea | HERDADA (F005) | "from the Caribbean to the Pacific" | — |
| TA020 | s06 | t0 7.25 · rotulo | Pacific Ocean | HERDADA (F005) | — | — |
| TA021 | s06 | t0 9.49 · rotulo | Paraíso | CONFIRMADA | o nome: Table 28 de 1960 (F006). O ponto lugares-1947 › Paraiso fica a 185 m do Paraíso do OSM e a 381 m do da Wikipedia (TA382) | out/zona-do-canal/_media/geo/lugares-1947.json |
| TA022 | s06 | t0 10.3 · cota | 7 OF 3,113 | HERDADA (F006, F095, A008) | — | — |
| TA023 | s06 | t0 10.3 · legenda | born in the U.S., 1960 | HERDADA (F006, F009) | "Born in the United States", Table 28, 1960 | — |
| TA024 | s06 | t0 10.3 · credito | Source: U.S. Census Bureau, 1960 | HERDADA (A007) | — | — |
| TA025 | s06 | t0 16.57 · rotulo | Rainbow City | HERDADA (F097, B128; conserto A13 do lote B aplicado) | "Rainbow City town reported as Silver City town prior to 1960"; o pino fica a 525 m de Mount Hope (OSM) (TA382) | pautas/zona-do-canal/fundamento.json (esc-11, esc-12) |
| TA026 | s06 | t0 17.533 · cota | 3 OF 3,688 | HERDADA (F007, F096, A009) | — | — |
| TA027 | s06 | t0 17.533 · legenda | born in the U.S., 1960 | HERDADA (F007, F009) | — | — |
| TA028 | s07 | t0 0.0 · rotulo | U.S. CENSUS, 1960 | HERDADA (B201, B034) | — | — |
| TA029 | s07 | t0 0.0 · credito | Source: U.S. Census Bureau, censuses of 1920–1970 | HERDADA (A016, A017; conserto A018 aplicado) | seis censos, 1920 a 1970 | fontes/census-1940-canal-zone.pdf |
| TA030 | s07 | t0 7.133 · grifo_na_pagina | Born in the United States | HERDADA (B035, F009) | linha do bloco COUNTRY OF BIRTH | — |
| TA031 | s07 | t0 7.133 · trecho_ampliado | Born in the United States | HERDADA (B035, F009) | linha do bloco COUNTRY OF BIRTH | — |
| TA032 | s08 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA033 | s08 | t0 0.0 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa" | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA034 | s08 | t0 11.7 · cota | NOV. 3 → NOV. 18, 1903 · 15 DAYS | HERDADA (A019, A020, A021, F012m) | — | — |
| TA035 | s08 | t0 11.7 · credito | Sources: U.S. Department of State, Foreign Relations of the United States, 1903; Isthmian Canal Convention, 1903 | HERDADA (A022) | o 03/11 é do FRUS 1903, doc. 229; o 18/11, do tratado | https://history.state.gov/historicaldocuments/frus1903/d229 |
| TA036 | s08 | t0 12.8 · rotulo | PANAMA | HERDADA (F012) | — | — |
| TA037 | s08 | t0 12.8 · rotulo | COLOMBIA | HERDADA (F012) | — | — |
| TA038 | s08 | t0 12.8 · legenda | Present-day border | HERDADA (B102; conserto A5 do lote B aplicado) | a linha é a do tratado de 1924; nunca "1903" | https://cancilleria.gov.co/politica-exterior/asuntos-bilaterales/frontera-terrestre-colombia-panama |
| TA039 | s10 | t0 0.167 · rotulo | NOV. 18, 1903 | HERDADA (F013b) | — | — |
| TA040 | s10 | t0 0.7 · aviso_ano | Photo from 1902 | HERDADA (A196, B216) | — | — |
| TA041 | s10 | t0 2.367 · card_nome | JOHN HAY | HERDADA (F013, A194) | — | — |
| TA042 | s10 | t0 2.367 · card_cargo | Secretary of State (1903) | HERDADA (F013c, A194, A195) | "John Hay, Secretary of State"; 30/09/1898 a 01/07/1905 | https://history.state.gov/departmenthistory/people/hay-john-milton |
| TA043 | s10 | t0 5.067 · card_nome | PHILIPPE BUNAU-VARILLA | HERDADA (F013, A197) | — | — |
| TA044 | s10 | t0 5.067 · card_cargo | Envoy Extraordinary and Minister Plenipotentiary of the Republic of Panama (1903) | HERDADA (A197) | literal no preâmbulo | fontes/documento/stat-33-2234-tratado-1903.txt |
| TA045 | s11 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA046 | s11 | t0 2.4 · legenda | "in perpetuity" · to build, run and protect the canal | HERDADA (F014, F120d) | Art. II: "in perpetuity … for the construction, maintenance, operation, sanitation and protection of said Canal"; só "in perpetuity" entre aspas | fontes/mecanismo/avalon-pan001.txt |
| TA047 | s11 | t0 2.4 · credito | Source: Isthmian Canal Convention, 1903, Art. II | HERDADA (A027) | — | — |
| TA048 | s11 | t0 4.233 · legenda | Art. II, 1903 treaty (schematic) | HERDADA (B121, B120) | — | — |
| TA049 | s11 | t0 5.6 · cota | 5 MILES | HERDADA (F014b, A023) | "five miles on each side of the center line"; sem km | — |
| TA050 | s11 | t0 10.533 · rotulo | Panama City | HERDADA (F015) | "shall not be included within this grant" | — |
| TA051 | s11 | t0 12.5 · rotulo | Colón | HERDADA (F015) | — | — |
| TA052 | s11 | t0 12.5 · legenda | Boundary as mapped in 1947 | HERDADA (B107; conserto A4 do lote B (condicional)) | — | — |
| TA053 | s12 | t0 0.0 · legenda | ART. III · NOV. 18, 1903 · 33 STAT. 2235 | HERDADA (B001; conserto A10 aplicado) | — | — |
| TA054 | s12 | t0 3.667 · grifo_na_pagina | all the rights, power and authority | HERDADA (B002, F016) | — | — |
| TA055 | s12 | t0 3.667 · trecho_ampliado | all the rights, power and authority | HERDADA (B002, F016) | — | — |
| TA056 | s12 | t0 6.533 · grifo_na_pagina | would possess and exercise if it were the sovereign of the territory | HERDADA (B003, F016b) | — | — |
| TA057 | s12 | t0 6.533 · trecho_ampliado | …would possess and exercise if it were the sovereign of the territory… | HERDADA (B003) | literal; as reticências marcam o corte | — |
| TA058 | s13 | t0 0.0 · legenda | 1912 ACT OF CONGRESS · 37 STAT. 560–561 | HERDADA (B008, B011, A028) | — | — |
| TA059 | s13 | t0 5.767 · grifo_na_pagina | government of the Canal Zone | HERDADA (B009, F017) | — | — |
| TA060 | s13 | t0 5.767 · trecho_ampliado | government of the Canal Zone | HERDADA (B009, F017) | — | — |
| TA061 | s13 | t0 7.233 · grifo_na_pagina | The governor of the Panama Canal shall be appointed by the President | HERDADA (B012, F018b) | literal, Sec. 4; 12 palavras | — |
| TA062 | s13 | t0 7.233 · trecho_ampliado | The governor of the Panama Canal shall be appointed by the President | HERDADA (B012, F018b) | literal, Sec. 4; 12 palavras | — |
| TA063 | s14 | t0 0.0 · rotulo | District Court, Ancón | HERDADA (B307) | "District Court Building, Ancon, Canal Zone."; a forma curta não passa da origem | https://catalog.archives.gov/id/202800691 |
| TA064 | s14 | t0 0.7 · aviso_ano | Photo from 1958 | HERDADA (B308) | — | — |
| TA065 | s14 | t0 1.833 · legenda | 1912 ACT OF CONGRESS · 37 STAT. 565 | HERDADA (B013) | — | — |
| TA066 | s14 | t0 2.9 · grifo_na_pagina | jurors from among the citizens of the United States | HERDADA (B015, F019) | "compensation of jurors from among the citizens of the United States" | — |
| TA067 | s14 | t0 2.9 · trecho_ampliado | jurors from among the citizens of the United States | HERDADA (B015, F019) | "compensation of jurors from among the citizens of the United States" | — |
| TA068 | s15 | t0 0.167 · legenda | EXECUTIVE ORDER 1885 · JAN. 27, 1914 | HERDADA (A033, F020b; conserto A203 aplicado) | — | — |
| TA069 | s15 | t0 0.3 · rotulo | Empire | HERDADA (B310) | "Empire Police Station - Dec 1904" | https://catalog.archives.gov/id/100995370 |
| TA070 | s15 | t0 0.45 · aviso_ano | Photo from 1904 | HERDADA (B311, B314, B317) | 1904 na origem; a cena é de 1914 | — |
| TA071 | s15 | t0 0.5 · rotulo | San Pablo | HERDADA (B313) | "Canal Zone Free Public School San Pablo, 1904" | https://catalog.archives.gov/id/100995360 |
| TA072 | s15 | t0 0.65 · aviso_ano | Photo from 1904 | HERDADA (B311, B314, B317) | 1904 na origem; a cena é de 1914 | — |
| TA073 | s15 | t0 0.8 · rotulo | La Boca | HERDADA (B316) | "Canal Zone Post Office - La Boca, 1904" | https://catalog.archives.gov/id/100995348 |
| TA074 | s15 | t0 0.95 · aviso_ano | Photo from 1904 | HERDADA (B311, B314, B317) | 1904 na origem; a cena é de 1914 | — |
| TA075 | s16 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA076 | s16 | t0 2.733 · legenda | Canal Zone (1947 map) | CONFIRMADA | o rótulo é verdadeiro (folha AMS de 1947, B107); a cena enche esse contorno em "every acre" de 1912: ver TA381 | https://commons.wikimedia.org/wiki/File:Canal_Zone_and_vicinity,_1-100,000._LOC_83694755.jpg |
| TA077 | s16 | t0 2.733 · legenda | NECESSARY TO THE CANAL · 1912 ACT | HERDADA (F021) | o Sec. 3 da lei de 1912 | — |
| TA078 | s16 | t0 6.033 · rotulo | Gorgona | CONFIRMADA | o nome e a época: 1912: "Gorgona shops", "Gorgona plant"; a folha da ICC é de 1911–1912 (Commons: "Ancon ... January 26, 1912", Public domain). A posição não tem confirmação independente: TA383 | fontes/documento/annualreportofgo1915cana.txt (l. 7620–7622); fontes/annualreportofis1912isth.txt (l. 1058); https://commons.wikimedia.org/wiki/File:Property_map_of_the_Canal_Zone_showing_property_belonging_to_the_United_States_of_America,_Panama_R._R._Co.,_and_lands_claimed_by_private_persons_LOC_82690127.jpg |
| TA079 | s16 | t0 6.033 · rotulo | Empire | CONFIRMADA | o nome e a época: 1915: "military camps were established at Empire and at Culebra", depois que "the towns on the west side of the canal were depopulated"; a folha da ICC é de 1911–1912 (Commons: "Ancon ... January 26, 1912", Public domain). A posição não tem confirmação independente: TA383 | fontes/documento/annualreportofgo1915cana.txt (l. 7620–7622); fontes/annualreportofis1912isth.txt (l. 1058); https://commons.wikimedia.org/wiki/File:Property_map_of_the_Canal_Zone_showing_property_belonging_to_the_United_States_of_America,_Panama_R._R._Co.,_and_lands_claimed_by_private_persons_LOC_82690127.jpg |
| TA080 | s16 | t0 6.033 · rotulo | Culebra | CONFIRMADA | o nome e a época: 1915: "at Empire and at Culebra"; a folha da ICC é de 1911–1912 (Commons: "Ancon ... January 26, 1912", Public domain). A posição não tem confirmação independente: TA383 | fontes/documento/annualreportofgo1915cana.txt (l. 7620–7622); fontes/annualreportofis1912isth.txt (l. 1058); https://commons.wikimedia.org/wiki/File:Property_map_of_the_Canal_Zone_showing_property_belonging_to_the_United_States_of_America,_Panama_R._R._Co.,_and_lands_claimed_by_private_persons_LOC_82690127.jpg |
| TA081 | s16 | t0 10.8 · heroi | 3,988 HOUSES | HERDADA (F021b, A036; conserto A038 aplicado) | "Since the beginning of this work a total of 3,988 houses have been destroyed or removed." | fontes/documento/annualreportofgo1915cana.txt |
| TA082 | s16 | t0 10.8 · legenda | DESTROYED OR REMOVED (BY JUNE 30, 1915) | CONFIRMADA | o relatório é "for the fiscal year ended June 30, 1915" (folha de rosto); o total é "since the beginning of this work", no relatório desse ano | fontes/documento/annualreportofgo1915cana.txt (l. 85959–85963) |
| TA083 | s16 | t0 10.8 · legenda | Houses, not people. | CONFIRMADA | a conta é de casas ("houses have been destroyed or removed"); a legenda diz o que o número mede (conserto A039 aplicado) | fontes/documento/annualreportofgo1915cana.txt |
| TA084 | s16 | t0 10.8 · credito | Source: Annual Report of the Governor of the Panama Canal, 1915 | HERDADA (A041) | folha de rosto: "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL FOR THE FISCAL YEAR ENDED JUNE 30 1915" | https://archive.org/download/annualreportofgo1915cana/annualreportofgo1915cana_djvu.txt |
| TA085 | s16 | t0 13.0 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa", na entrada do Pacífico (F040) | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA086 | s16 | t0 15.933 · citacao | “the permanent gold site at Balboa” | HERDADA (F022, A042) | — | — |
| TA087 | s16 | t0 15.933 · legenda | Annual report, 1914 | HERDADA (F022c, A044) | — | — |
| TA088 | s16 | t0 15.933 · credito | Source: Annual Report of the Isthmian Canal Commission and The Panama Canal, 1914 | HERDADA (A044) | "…for the fiscal year ended June 30, 1914" | fontes/evento/annualreportofis1914isth_djvu.txt |
| TA089 | s16 | t0 18.4 · rotulo | La Boca | CONFIRMADA | o ponto de hoje (OSM node/7785928698), a 235 m da La Boca da folha de 1936; ressalva B125 mantida | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA090 | s16 | t0 19.867 · citacao | “the permanent silver settlement” | HERDADA (F022b, A043) | — | — |
| TA091 | s16 | t0 19.867 · legenda | Annual report, 1914 | HERDADA (F022c, A044) | — | — |
| TA092 | s18 | t0 0.0 · rotulo | Administration Building, Balboa Heights | HERDADA (B319) | "Administration Building, Balboa Heights, Canal Zone. November 27, 1957."; nenhum nome de órgão | https://catalog.archives.gov/id/202800733 |
| TA093 | s18 | t0 0.167 · rotulo | 1914 | HERDADA (F023, A047) | — | — |
| TA094 | s18 | t0 0.7 · aviso_ano | Photo from 1957 | HERDADA (B320) | — | — |
| TA095 | s19 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA096 | s19 | t0 1.4 · rotulo | Balboa | CONFIRMADA (no fallback de mapa); o ramo do footage: NÃO FOI CHECADO (o clipe s01-a não está no disco nem tem veredito; a _condicao já barra o rótulo) | OSM "Estadio de Balboa" | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA097 | s19 | t0 3.233 · rotulo | Balboa Heights | CONFIRMADA (no fallback de mapa); o ramo do footage: NÃO FOI CHECADO (o clipe s01-a não está no disco nem tem veredito; a _condicao já barra o rótulo) | NARA 202800733; OSM way/370341568 | https://catalog.archives.gov/id/202800733 |
| TA098 | s20 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA099 | s20 | t0 0.3 · legenda | BOUNDARY CONVENTION · SEPT. 2, 1914 | HERDADA (A049, A052, F025b) | — | — |
| TA100 | s20 | t0 0.3 · rotulo | Panama City | HERDADA (F025) | — | — |
| TA101 | s20 | t0 7.6 · legenda | Line as mapped in 1936 | HERDADA (B114, B116; conserto A6 do lote B aplicado) | a folha é de "October 1936" (NARA 192812325); o rótulo não diz que é a linha de 1914 | https://commons.wikimedia.org/wiki/File:Road_Map_of_Ancon_Balboa_and_Panama_-_DPLA_-_b7b2563167e5395c4f00f91b538503aa.jpg |
| TA102 | s20 | t0 14.0 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa" (F040) | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA103 | s20 | t0 14.0 · rotulo | La Boca | CONFIRMADA | o ponto de hoje, a 235 m da La Boca de 1936 (B125) | out/zona-do-canal/_media/geo/lugares-1936.json |
| TA104 | s20 | t0 16.933 · rotulo | "gold" | HERDADA (F027, F022) | — | — |
| TA105 | s20 | t0 17.9 · rotulo | "silver" | HERDADA (F027, F022b) | — | — |
| TA106 | s21 | t0 4.267 · rotulo | "GOLD ROLL" | HERDADA (F029, A057) | — | — |
| TA107 | s21 | t0 5.4 · rotulo | "SILVER ROLL" | HERDADA (F029, A057) | — | — |
| TA108 | s21 | t0 5.867 · cota | 4,608 | HERDADA (A053) | "The force for the month of June, 1920, consisted of 4,608 employees on the gold roll and 17,023 on the silver roll." | fontes/annualreportofgo1920cana.txt (l. 2381–2382) |
| TA109 | s21 | t0 5.867 · cota | 17,023 | HERDADA (A054) | — | — |
| TA110 | s21 | t0 5.867 · rotulo | JUNE 1920 | CONFIRMADA | "The force for the month of June, 1920, consisted of…" (e a Table No. 1, de 23/06/1920, A059) | fontes/annualreportofgo1920cana.txt (l. 2381) |
| TA111 | s21 | t0 5.867 · legenda | canal and Panama Railroad workforce | HERDADA (A058) | — | — |
| TA112 | s21 | t0 5.867 · credito | Source: Annual Report of the Governor of the Panama Canal, 1920 | HERDADA (A060) | — | — |
| TA113 | s22 | t0 0.0 · rotulo | Culebra Cut | HERDADA (B322) | "Crowd Waiting for Pay Car, Culebra Cut, January 1908" (API NARA, 15/10/2026) | https://catalog.archives.gov/id/100998772 |
| TA114 | s22 | t0 0.41 · rotulo | ANNUAL REPORT, 1940 | HERDADA (F030b) | — | — |
| TA115 | s22 | t0 0.7 · aviso_ano | Photo from 1908 | CONFIRMADA | MUDOU na versão 5299ddb5: aviso_de_ano true (antes false); "January 1908" (API NARA); a fala passa a 1940 em "By then" | https://catalog.archives.gov/id/100998772 |
| TA116 | s22 | t0 6.933 · folha_cabecalho | ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL · 1940 · P. 63 | CONFIRMADA | o trecho recriado vem logo depois do cabeçalho "REPORT OF GOVERNOR OF THE PANAMA CANAL 63" | fontes/annualreportofgo1940cana.txt (l. 13329–13339) |
| TA117 | s22 | t0 6.933 · folha_texto | …in silver coin, while skilled craftsmen and those occupying executive, professional, and similar positions were paid in gold coin, the l… | CONFIRMADA | letra a letra (a frase começa na p. 62, "…workers employed in the Tropics", e a reticência marca o corte) | fontes/annualreportofgo1940cana.txt (l. 13334–13339) |
| TA118 | s22 | t0 6.933 · credito | Source: Annual Report of the Governor of the Panama Canal, 1940 | HERDADA (F030b, A064) | — | — |
| TA119 | s22 | t0 7.13 · grifo_na_pagina | skilled craftsmen and those occupying executive, professional, and similar positions were paid in gold coin, the latter group being recru… | HERDADA (F030, A061) | trecho literal da p. 63 | — |
| TA120 | s22 | t0 7.13 · trecho_ampliado | skilled craftsmen … were paid in gold coin | HERDADA (F030) | literal com reticência | — |
| TA121 | s22 | t0 12.133 · grifo_na_pagina | all employees are now paid in United States currency | HERDADA (F031, A063) | — | — |
| TA122 | s22 | t0 12.133 · trecho_ampliado | all employees are now paid in United States currency | HERDADA (F031, A063) | — | — |
| TA123 | s22 | t0 16.7 · rotulo | Gold Quarters, Balboa | HERDADA (B325) | "Four-Family Type, Gold Quarters, Balboa, C.Z. September 1944." | https://catalog.archives.gov/id/202800899 |
| TA124 | s22 | t0 16.7 · rotulo | Silver Commissary, Curundu | HERDADA (B331) | "Curundu Silver Commissary, Ancon, Canal Zone."; "Curundu" está na origem | https://catalog.archives.gov/id/202799485 |
| TA125 | s22 | t0 16.85 · aviso_ano | Photo from 1944 | HERDADA (B326) | — | — |
| TA126 | s22 | t0 16.85 · aviso_ano | Photo from 1947 | HERDADA (B332) | — | — |
| TA127 | s22 | t0 20.233 · rotulo | Gold Clubhouse, Balboa | CONFIRMADA | origem: "Panama Canal Clubhouse for gold employees at Balboa" (B337); "gold clubhouse" é forma do relatório de 1920: "the gold clubhouse at Pedro Miguel", "the various gold clubhouses". Responde ao _nao_conferido | fontes/annualreportofgo1920cana.txt (l. 58260–58264); https://catalog.archives.gov/id/100995304 |
| TA128 | s22 | t0 20.233 · rotulo | Silver Clubhouse, Cristóbal | CONFIRMADA | NOVO na versão 5299ddb5: "Exterior view, Cristobal Silver Clubhouse, … Camp Bierd, C.Z., September 15, 1948." (API NARA, 200). Camp Bierd fica em Cristóbal: "Camp Bierd, Cristobal" (1920); o rótulo não passa da origem | https://catalog.archives.gov/id/202799387; fontes/annualreportofgo1920cana.txt (l. 41335–41339) |
| TA129 | s22 | t0 20.383 · aviso_ano | Photo from 1915 | HERDADA (B338) | — | — |
| TA130 | s22 | t0 20.383 · aviso_ano | Photo from 1948 | CONFIRMADA | NOVO: "September 15, 1948" (API NARA); a frase é de 1940 | https://catalog.archives.gov/id/202799387 |
| TA131 | s23 | t0 0.0 · rotulo | Cristóbal | CONFIRMADA | NOVO: "Arrival at Cristobal of SS Ancon with 1500 Laborers from Barbados Deck Scene Sept 2, 1909" (84-D e 84-E; API NARA, 200) | https://catalog.archives.gov/id/100996836; https://catalog.archives.gov/id/100996838 |
| TA132 | s23 | t0 0.7 · aviso_ano | Photo from 1909 | CONFIRMADA | NOVO: "Sept 2, 1909" (API NARA); a frase é de 1920 e 1930 | https://catalog.archives.gov/id/100996836; https://catalog.archives.gov/id/100996838 |
| TA133 | s23 | t0 0.85 · aviso_ano | Photo from 1909 | CONFIRMADA | NOVO: "Sept 2, 1909" (API NARA); a frase é de 1920 e 1930 | https://catalog.archives.gov/id/100996836; https://catalog.archives.gov/id/100996838 |
| TA134 | s23 | t0 3.9 · citacao | “labor force of West Indians (known as silver roll force)” | HERDADA (F032, A065) | letra a letra | fontes/annualreportofgo1920cana.txt (l. 56325) |
| TA135 | s23 | t0 3.9 · legenda | Annual report, 1920 | HERDADA (F032c) | — | — |
| TA136 | s23 | t0 3.9 · credito | Source: Annual Report of the Governor of the Panama Canal, 1920 | HERDADA (F032c, A067) | — | — |
| TA137 | s24 | t0 0.0 · folha_cabecalho | ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL · 1940 · P. 63 | HERDADA (B043) | o parágrafo inteiro está na p. 63 | fontes/annualreportofgo1940cana.txt (l. 13341–13349) |
| TA138 | s24 | t0 0.0 · folha_texto | The gold employees — that is, those carried on the gold pay roll — are, with a few exceptions, citizens of the United States and comprise… | CONFIRMADA | letra a letra (desfeitas só as quebras do OCR: "exec- utive", "Pana- manians") | fontes/annualreportofgo1940cana.txt (l. 13341–13349) |
| TA139 | s24 | t0 0.0 · credito | Source: Annual Report of the Governor of the Panama Canal, 1940 | HERDADA (F033c, A070) | — | — |
| TA140 | s24 | t0 4.1 · grifo_na_pagina | with a few exceptions, citizens of the United States | HERDADA (B044, F033) | — | — |
| TA141 | s24 | t0 4.1 · trecho_ampliado | with a few exceptions, citizens of the United States | HERDADA (B044, F033) | — | — |
| TA142 | s24 | t0 9.1 · grifo_na_pagina | a considerable number of whom are Panamanians | HERDADA (B045, F033b) | — | — |
| TA143 | s24 | t0 9.1 · trecho_ampliado | a considerable number of whom are Panamanians | HERDADA (B045, F033b) | — | — |
| TA144 | s25 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA145 | s25 | t0 0.0 · legenda | Canal Zone (1947 map) | HERDADA (B107; conserto A4 do lote B aplicado) | — | — |
| TA146 | s25 | t0 2.1 · credito | Source: Annual Report of the Governor of the Panama Canal, 1920 | HERDADA (F035b, A073) | — | — |
| TA147 | s25 | t0 3.5 · rotulo | Balboa | HERDADA (F035, A071) | "Clubhouses were operated for gold employees at Balboa, Ancon, Pedro Miguel, Gatun, and Cristobal"; o ponto é o Balboa Clubhouse de 1936 | fontes/annualreportofgo1920cana.txt (l. 58232) |
| TA148 | s25 | t0 3.5 · rotulo | "gold" clubhouse · 1920 | HERDADA (F035, A071) | — | — |
| TA149 | s25 | t0 3.85 · rotulo | Ancón | HERDADA (F035, A071) | idem; ponto ancon-1936 (±300 m) | — |
| TA150 | s25 | t0 4.2 · rotulo | Pedro Miguel | HERDADA (F035, A071) | idem; o ponto fica a 484 m do Pedro Miguel do OSM (TA382) | — |
| TA151 | s25 | t0 4.55 · rotulo | Gatún | HERDADA (F035, F036, A071) | idem; o ponto fica a 26 m do centro das eclusas de Gatún e a 1,0 km do Gatún da Wikipedia (TA382) | — |
| TA152 | s25 | t0 4.9 · rotulo | Cristóbal | HERDADA (F035, F036, A071) | idem; ponto OSM node/2606132098 | — |
| TA153 | s25 | t0 9.1 · rotulo | La Boca | HERDADA (F035, A072) | "Clubhouses for silver employees were operated at La Boca, Red Tank, Paraiso, Gatun, and Cristobal" | — |
| TA154 | s25 | t0 9.1 · rotulo | "silver" clubhouse · 1920 | HERDADA (A072) | — | — |
| TA155 | s25 | t0 9.45 · rotulo | Red Tank | HERDADA (A072) | idem; sem coordenada independente de Red Tank (TA384) | — |
| TA156 | s25 | t0 9.8 · rotulo | Paraíso | HERDADA (A072) | idem; ponto a 185 m do Paraíso do OSM (TA382) | — |
| TA157 | s26 | t0 0.0 · folha_cabecalho | ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL · 1920 · P. 247 | HERDADA (B047) | — | — |
| TA158 | s26 | t0 0.0 · folha_texto | White schools   Colored schools / Net enrollment 2,004 1,481 /… | CONFIRMADA | rótulos e valores da coluna 1920 da tabela da p. 247 ("Net enrollment … 3,485 2,004 1,481"; "Average daily attendance … 2,453.4 1,588.5 864.9"; "$158. 46 $76. 00"). A página real tem os anos em colunas (de anos anteriores até 1920) e White/Colored em linhas: a recriação gira a tabela e mostra só 1920 (observação O1) | fontes/annualreportofgo1920cana.txt (l. 59230–59460) |
| TA159 | s26 | t0 0.0 · credito | Source: Annual Report of the Governor of the Panama Canal, 1920 | HERDADA (F091b, A080) | — | — |
| TA160 | s26 | t0 0.5 · grifo_na_pagina | White schools | HERDADA (B048, F091) | — | — |
| TA161 | s26 | t0 1.733 · grifo_na_pagina | Colored schools | HERDADA (B048, F091) | — | — |
| TA162 | s27 | t0 0.0 · rotulo | "WHITE" SCHOOLS | HERDADA (F091) | — | — |
| TA163 | s27 | t0 2.6 · cota | $158.46 A MONTH | HERDADA (F037, F037m, A074) | — | — |
| TA164 | s27 | t0 2.6 · credito | Source: Annual Report of the Governor of the Panama Canal, 1920 | HERDADA (A080) | — | — |
| TA165 | s27 | t0 4.067 · rotulo | "COLORED" SCHOOLS | HERDADA (F091) | — | — |
| TA166 | s27 | t0 4.967 · cota | $76.00 A MONTH | HERDADA (F037, A075) | — | — |
| TA167 | s28 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA168 | s28 | t0 0.0 · legenda | Canal Zone (1947 map) | HERDADA (B107; conserto A4 do lote B aplicado) | — | — |
| TA169 | s28 | t0 0.0 · rotulo | Panama City | HERDADA (F038) | "the cities of Panama and Colon" | — |
| TA170 | s28 | t0 0.0 · rotulo | Colón | HERDADA (F038) | — | — |
| TA171 | s28 | t0 1.633 · cota | 1930 · MORE THAN 60% OF "SILVER" EMPLOYEES LIVED IN PANAMA CITY AND COLÓN | HERDADA (F038, A082) | "Over 60 per cent of the silver employees are required to live in the cities of Panama and Colon" | fontes/annualreportofgo1930cana.txt (l. 8343–8344) |
| TA172 | s28 | t0 1.633 · credito | Source: Annual Report of the Governor of the Panama Canal, 1930 | HERDADA (F038b, A086) | — | — |
| TA173 | s28 | t0 9.3 · cota | FREE SCHOOLS · ONLY IF THE FAMILY LIVED INSIDE (1940) | DIVERGE (o grupo) | "Free school privileges are granted to children of silver employees of the Panama Canal and the Panama Railroad Co. only when such employees reside on the Canal Zone." A regra é dos filhos dos "silver"; o cartão a estende a todos. A voz diz "their children" (F039); o relatório não traz regra igual para os outros | fontes/annualreportofgo1940cana.txt (l. 16602–16607, pp. 92–93) |
| TA174 | s28 | t0 9.3 · credito | Source: Annual Report of the Governor of the Panama Canal, 1940 | HERDADA (F039b) | — | — |
| TA175 | s28 | t0 13.3 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa" | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA176 | s28 | t0 13.3 · rotulo | "gold site" | HERDADA (F040, F022) | — | — |
| TA177 | s28 | t0 15.1 · rotulo | La Boca | CONFIRMADA | o ponto de hoje, a 235 m da La Boca de 1936 | out/zona-do-canal/_media/geo/lugares-1936.json |
| TA178 | s28 | t0 15.1 · rotulo | "silver settlement" | HERDADA (F040, F022b) | — | — |
| TA179 | s28 | t0 19.533 · rotulo | Panama City | HERDADA (F040) | "with Panama City across the line" | — |
| TA180 | s29 | t0 0.0 · legenda | 1936 TREATY · 53 STAT. 1807 | HERDADA (B019) | — | — |
| TA181 | s29 | t0 1.783 · grifo_na_pagina | Signed at Washington March 2, 1936 | HERDADA (B020, F043) | — | — |
| TA182 | s29 | t0 1.783 · cota | SIGNED 1936 · IN FORCE 1939 | HERDADA (F043, F043b, A087, A088; A7 respeitado (a tela não cita artigo)) | — | — |
| TA183 | s29 | t0 3.523 · grifo_na_pagina | ratifications exchanged at Washington July 27, 1939 | HERDADA (B021 (o grifo)) | — | — |
| TA184 | s29 | t0 5.867 · legenda | ART. III(2), 1936 TREATY | HERDADA (B022; conserto A1 do lote B aplicado) | — | — |
| TA185 | s29 | t0 7.426 · grifo_na_pagina | No person who is not comprised within the following classes shall be entitled to reside within the Canal Zone | HERDADA (B023) | — | — |
| TA186 | s29 | t0 9.903 · grifo_na_pagina | (a) Officers, employees, workmen or laborers in the service or employ of the United States of America, the Panama Canal or the Panama Rai… | HERDADA (B024) | letra a letra | — |
| TA187 | s29 | t0 15.173 · grifo_na_pagina | (b) Members of the armed forces of the United States of America and members of their families actually residing with them; | HERDADA (B025) | letra a letra | — |
| TA188 | s29 | t0 19.093 · grifo_na_pagina | (c) Contractors operating in the Canal Zone and their employees, workmen and laborers during the performance of contracts; | HERDADA (B026) | letra a letra | — |
| TA189 | s29 | t0 20.093 · grifo_na_pagina | (d) Officers, employees, or workmen of companies entitled under Section 5 of this Article to conduct operations in the Canal Zone; | HERDADA (B027; conserto A1 aplicado (nada de "licensed businesses")) | letra a letra | — |
| TA190 | s29 | t0 21.763 · grifo_na_pagina | (e) Persons engaged in religious, welfare, charitable, educational, recreational and scientific work exclusively in the Canal Zone; | HERDADA (B028) | letra a letra | — |
| TA191 | s29 | t0 22.6 · legenda | Notes exchanged the same day also allowed truck gardeners, vegetable sellers and licensed farm settlers (53 Stat. 1831–1833) | HERDADA (B073) | nota de 02/03/1936: "settlers engaged in the cultivation of truck gardens …; hucksters …"; "settlers … under agricultural licenses … will continue to reside"; Hull: "I have the honor to confirm the understanding" | — |
| TA192 | s29 | t0 25.118 · grifo_na_pagina | (f) Domestic servants of all the beforementioned persons and members of the families of the persons in classes (c), (d) and (e) actually … | HERDADA (B029) | letra a letra | — |
| TA193 | s30 | t0 0.667 · heroi | WORKS OR SERVES | HERDADA (F048, F130) | as notas do mesmo dia somam hortelões e lavradores licenciados, que também trabalham (B073) | — |
| TA194 | s30 | t0 1.4 · cota | CITIZENSHIP | HERDADA (F048) | — | — |
| TA195 | s30 | t0 3.3 · heroi | WANTS TO LIVE HERE | HERDADA (F049) | — | — |
| TA196 | s31 | t0 0.0 · rotulo | Balboa | HERDADA (B340) | "Four-family quarters on Las Cruces Street, Balboa, Canal Zone. November 7, 1951." | https://catalog.archives.gov/id/202800907 |
| TA197 | s31 | t0 0.7 · aviso_ano | Photo from 1951 | HERDADA (B341) | — | — |
| TA198 | s31 | t0 2.0 · folha_cabecalho | ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL · 1950 · P. 43 | HERDADA (B050) | o trecho vem antes de "44 REPORT OF THE GOVERNOR…"; o crédito anacrônico (Panama Canal Company) saiu | — |
| TA199 | s31 | t0 2.0 · folha_texto | For U. S.-rate employees.— … Under existing regulations, employees are required to have an assignment to family quarters before permissio… | CONFIRMADA | letra a letra; a reticência pula os parágrafos de obras e pedidos entre o subtítulo e a frase | fontes/annualreportofgo1950cana.txt (l. 4841–4866) |
| TA200 | s31 | t0 2.0 · credito | Source: Annual Report of the Governor of the Panama Canal, 1950 | HERDADA (F051c, A093) | — | — |
| TA201 | s31 | t0 6.667 · grifo_na_pagina | employees are required to have an assignment to family quarters before permission is granted for their families to come to the Canal Zone | HERDADA (B051, F051) | — | — |
| TA202 | s31 | t0 6.667 · trecho_ampliado | an assignment to family quarters before permission is granted for their families | HERDADA (B051) | literal; 12 palavras | — |
| TA203 | s32 | t0 0.0 · card_nome | MARY AND HERBERT KNAPP | HERDADA (F052, A095) | — | — |
| TA204 | s32 | t0 0.0 · card_cargo | Teachers in the Canal Zone schools (1979) | HERDADA (A094, F052) | — | — |
| TA205 | s32 | t0 3.033 · folha_cabecalho | THE PANAMA CANAL REVIEW | HERDADA (B054) | — | — |
| TA206 | s32 | t0 3.033 · rotulo | OCT. 1, 1979 | HERDADA (F053c, B055) | — | — |
| TA207 | s32 | t0 3.033 · credito | Source: Mary and Herbert Knapp, The Panama Canal Review, Oct. 1, 1979 | HERDADA (A098; conserto 8 aplicado) | — | — |
| TA208 | s32 | t0 9.167 · rotulo | Balboa Commissary | HERDADA (B343) | "Sale of Panama-made shirts, Balboa Commissary, Canal Zone. August 19, 1954." | https://catalog.archives.gov/id/202799537 |
| TA209 | s32 | t0 9.32 · aviso_ano | Photo from 1954 | HERDADA (B344) | August 19, 1954 (o comissário de Balboa) | — |
| TA210 | s32 | t0 9.785 · citacao | “everyone lived in rented quarters … shopping at the ‘commy.’” | HERDADA (F053, F053b, B057) | "everyone lived in rented quarters and did most of his shopping at the "commy."": a reticência tira "and did most of his"; as aspas internas viram simples | fontes/experiencia/panamacanalrevie1979pana.txt |
| TA211 | s33 | t0 0.0 · rotulo | Balboa Post Office | HERDADA (B346) | "in front of new Balboa Post Office - March 13, 1938" | https://catalog.archives.gov/id/100996124 |
| TA212 | s33 | t0 0.0 · aviso_ano | Photo from 1938 | HERDADA (B347) | — | — |
| TA213 | s33 | t0 0.0 · rotulo | Fort Clayton | HERDADA (B349) | "33rd Inf. pack train loading up. Fort Clayton, C.Z. 1928" | https://catalog.archives.gov/id/329582950 |
| TA214 | s33 | t0 0.0 · aviso_ano | Photo from 1928 | HERDADA (B350) | — | — |
| TA215 | s33 | t0 8.833 · rotulo | U.S. CENSUS, 1970 | HERDADA (B036, B208) | — | — |
| TA216 | s33 | t0 8.833 · cota | CANAL ZONE, 1970 · 44,198 RESIDENTS | HERDADA (F060, A099) | — | — |
| TA217 | s33 | t0 8.833 · credito | Source: U.S. Census Bureau, 1970 | HERDADA (A101) | — | — |
| TA218 | s33 | t0 9.8 · grifo_na_pagina | PLACE OF BIRTH | HERDADA (B037, F059) | — | — |
| TA219 | s34 | t0 0.0 · credito | © MapTiler © OpenStreetMap contributors | CONFIRMADA | crédito exigido pela base MapTiler e pelo OSM (ODbL) das camadas da cena (identidade §6; B106) | https://www.openstreetmap.org/copyright |
| TA220 | s34 | t0 0.0 · legenda | Canal Zone (1947 map) | HERDADA (B107; conserto A4 do lote B aplicado) | — | — |
| TA221 | s34 | t0 1.867 · cota | CANAL ZONE, 1970 · 23,559 OF 44,198 BORN IN THE U.S. · 8,569 IN THE ARMED FORCES | HERDADA (F060, F057, A102, A104) | 8,494 + 75 = 8,569 | — |
| TA222 | s34 | t0 1.867 · legenda | Armed forces: service members 16 and over, not their families | HERDADA (F057, A105) | — | — |
| TA223 | s34 | t0 1.867 · credito | Source: U.S. Census Bureau, 1970 | HERDADA (A101) | — | — |
| TA224 | s34 | t0 4.267 · rotulo | Fort Clayton | CONFIRMADA | Fort Clayton "(1920 - 1999)", "Headquarters U.S. Army, Panama"; 1940: Fort Clayton (3,898) no Census. O ponto lugares-1947 fica a 654 m do da Wikipedia (TA382) | https://www.northamericanforts.com/East/cz.html; fontes/evento/census-history-2024-08.txt |
| TA225 | s34 | t0 4.267 · rotulo | Fort Amador | CONFIRMADA | Fort Amador "(1911 - 1979/1996)": "Most of the post was turned over to Panama in 1979"; 1940: "Fort Amador Military Reservation (2,655)". Responde ao _nao_conferido e ao "conferido: false" do glossário. O ponto fica a 635 m do da Wikipedia (TA382) | https://www.northamericanforts.com/East/cz.html; fontes/evento/census-history-2024-08.txt |
| TA226 | s34 | t0 4.267 · rotulo | Albrook Air Force Base | CONFIRMADA | 1965: "at Albrook and Howard Air Force bases"; 1979: "his remarks made October 1 at Al- brook Air Force Base"; "(1924 - 1997)". O ponto "Albrook Field" de 1947 fica a 876 m do da Wikipedia (TA382) | fontes/annualreportpana1965pana.txt (l. 24652); fontes/experiencia/departmentofstatd7979unit.txt (l. 29256–29258); https://www.northamericanforts.com/East/cz.html |
| TA227 | s34 | t0 4.267 · rotulo | Fort Davis | CONFIRMADA | Fort Davis "(1919 - 1995)"; 1958: "the post of Fort Davis"; 1965: "The new elementary school located at Fort Davis". O ponto fica a 556 m do da Wikipedia (TA382) | fontes/annualreportpana1958pana.txt (l. 22358–22360); fontes/annualreportpana1965pana.txt (l. 1769); https://www.northamericanforts.com/East/cz.html |
| TA228 | s34 | t0 9.933 · rotulo | Balboa | CONFIRMADA | OSM "Estadio de Balboa" | out/zona-do-canal/_media/geo/pontos-osm-hoje.json |
| TA229 | s34 | t0 12.4 · rotulo | BALBOA, 1960 | HERDADA (A001) | — | — |
| TA230 | s34 | t0 12.4 · cota | 1,580 BORN IN THE U.S. | HERDADA (F094, A002) | — | — |
| TA231 | s34 | t0 12.4 · credito | Source: U.S. Census Bureau, 1960 | HERDADA (A007) | — | — |
| TA232 | s34 | t0 17.067 · cota | 1,041 BORN IN THE CANAL ZONE | HERDADA (F063, A117) | o 517 fica fora (A106) | — |
| TA233 | s35 | t0 0.0 · legenda | ACT OF AUG. 4, 1937 · 50 STAT. 558 | HERDADA (B016) | — | — |
| TA234 | s35 | t0 4.767 · grifo_na_pagina | any person born in the Canal Zone on or after February 26, 1904 | CONFIRMADA | letra a letra, Sec. 1: "That any person born in the Canal Zone on or after February 26, 1904, and whether…" | fontes/documento/stat-50-558.txt (l. 22–23) |
| TA235 | s35 | t0 10.933 · grifo_na_pagina | whose father or mother or both at the time of the birth of such person was or is a citizen of the United States | HERDADA (B018, F067) | — | — |
| TA236 | s35 | t0 10.933 · trecho_ampliado | father or mother… was or is a citizen of the United States | HERDADA (B018) | literal com reticência; 12 palavras | — |
| TA237 | s36 | t0 1.233 · rotulo | AUG. 4, 1937 | HERDADA (F068, B016) | — | — |
| TA238 | s36 | t0 1.233 · credito | Sources: Act of Aug. 4, 1937; Isthmian Canal Convention, 1903 | HERDADA (A110, A112) | — | — |
| TA239 | s36 | t0 4.6 · rotulo | FEB. 26, 1904 | HERDADA (F068b, A111, A112) | — | — |
| TA240 | s36 | t0 7.633 · rotulo | 1903 TREATY | HERDADA (F068c, A112) | — | — |
| TA241 | s36 | t0 7.633 · cota | BACK TO 1904 | HERDADA (F068b, F070b, B064) | — | — |
| TA242 | s10 | cards_pessoa | JOHN HAY · Secretary of State (1903) · Photo from 1902 | HERDADA (F013c, A194, A195, A196) | "John Hay, Secretary of State"; 1898–1905; retrato de 1902 (J. E. Purdy) | https://history.state.gov/departmenthistory/people/hay-john-milton |
| TA243 | s10 | cards_pessoa | PHILIPPE BUNAU-VARILLA · Envoy Extraordinary and Minister Plenipotentiary of the Republic of Panama (1903) | HERDADA (A197) | sem retrato; sem nacionalidade (I10) | — |
| TA244 | s32 | cards_pessoa | MARY AND HERBERT KNAPP · Teachers in the Canal Zone schools (1979) | HERDADA (F052, A094, A095, A198) | — | — |
| TA245 | s01 (s02) | rotulos_dado | 3,139 RESIDENTS | HERDADA (F002) | — | — |
| TA246 | s01 (s02) | rotulos_dado | 1,580 BORN IN THE U.S. | HERDADA (F002, F094) | — | — |
| TA247 | s01 (s02) | rotulos_dado | BALBOA, 1960 | HERDADA (A001) | — | — |
| TA248 | s03 | rotulos_dado | 1903 | HERDADA (F002c) | — | — |
| TA249 | s03 (s04) | rotulos_dado | OCT. 1, 1979 | HERDADA (F003, B055) | — | — |
| TA250 | s06 | rotulos_dado | 7 OF 3,113 | HERDADA (F006) | — | — |
| TA251 | s06 | rotulos_dado | 3 OF 3,688 | HERDADA (F007) | — | — |
| TA252 | s08 (s09) | rotulos_dado | NOV. 3 → NOV. 18, 1903 · 15 DAYS | HERDADA (A019–A021) | — | — |
| TA253 | s10 | rotulos_dado | NOV. 18, 1903 | HERDADA (F013b) | — | — |
| TA254 | s11 | rotulos_dado | 5 MILES | HERDADA (F014b) | — | — |
| TA255 | s15 | rotulos_dado | EXECUTIVE ORDER 1885 · JAN. 27, 1914 | HERDADA (A033) | — | — |
| TA256 | s16 | rotulos_dado | 3,988 HOUSES DESTROYED OR REMOVED (BY JUNE 30, 1915) | HERDADA (A036; conserto A038 aplicado) | sem "privately owned"; o "almost" da voz não é contradito | — |
| TA257 | s16 (s17) | rotulos_dado | 1914 | HERDADA (A044 / F023, A047) | — | — |
| TA258 | s18 | rotulos_dado | 1914 | HERDADA (A044 / F023, A047) | — | — |
| TA259 | s20 | rotulos_dado | BOUNDARY CONVENTION · SEPT. 2, 1914 | HERDADA (A049) | — | — |
| TA260 | s21 | rotulos_dado | 4,608 | HERDADA (A053) | — | — |
| TA261 | s21 | rotulos_dado | 17,023 | HERDADA (A054) | — | — |
| TA262 | s21 | rotulos_dado | JUNE 1920 | CONFIRMADA | "The force for the month of June, 1920" | fontes/annualreportofgo1920cana.txt (l. 2381) |
| TA263 | s26, s27 | rotulos_dado | $158.46 A MONTH | HERDADA (F037) | — | — |
| TA264 | s26, s27 | rotulos_dado | $76.00 A MONTH | HERDADA (F037) | — | — |
| TA265 | s28 | rotulos_dado | 1930 · MORE THAN 60% OF "SILVER" EMPLOYEES LIVED IN PANAMA CITY AND COLÓN | HERDADA (F038, A082) | — | — |
| TA266 | s28 | rotulos_dado | FREE SCHOOLS · ONLY IF THE FAMILY LIVED INSIDE (1940) | DIVERGE (o grupo) | o "only when such employees reside" da fonte fala dos "silver employees" da mesma frase; o rótulo perde o grupo (a mesma linha da s28, t0 9.3) | fontes/annualreportofgo1940cana.txt (l. 16602–16607) |
| TA267 | s29 | rotulos_dado | SIGNED 1936 · IN FORCE 1939 | HERDADA (F043, B021) | — | — |
| TA268 | s32 | rotulos_dado | OCT. 1, 1979 | HERDADA (F003, B055) | — | — |
| TA269 | s33 | rotulos_dado | CANAL ZONE, 1970 · 44,198 RESIDENTS | HERDADA (F060) | — | — |
| TA270 | s34 | rotulos_dado | 23,559 OF 44,198 BORN IN THE U.S. | HERDADA (F060, A102, A103) | — | — |
| TA271 | s34 | rotulos_dado | 8,569 IN THE ARMED FORCES | HERDADA (F057, A104) | — | — |
| TA272 | s34 | rotulos_dado | 1,580 BORN IN THE U.S. | HERDADA (F002, F094) | — | — |
| TA273 | s34 | rotulos_dado | 1,041 BORN IN THE CANAL ZONE | HERDADA (F063) | — | — |
| TA274 | s36 | rotulos_dado | AUG. 4, 1937 | HERDADA (B016) | — | — |
| TA275 | s36 | rotulos_dado | FEB. 26, 1904 | HERDADA (F068b, A112) | — | — |
| TA276 | s36, s37 | rotulos_dado | BACK TO 1904 | HERDADA (B064, F068b) | — | — |
| TA277 | s03 (e s04) | _avisos_do_ano | balboa-central-police-station-1943-nara-202800161.jpg → Photo from 1943 | HERDADA (B302) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA278 | s03 (e s04) | _avisos_do_ano | balboa-elementary-school-1954-nara-202800569.jpg → Photo from 1954 | HERDADA (B305) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA279 | s10 | _avisos_do_ano | hay-john-1902-purdy-loc-commons.jpg → Photo from 1902 | HERDADA (A196, B216) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA280 | s14 | _avisos_do_ano | district-court-building-1958-nara-202800691.jpg → Photo from 1958 | HERDADA (B308) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA281 | s15 | _avisos_do_ano | empire-police-station-1904-commons.jpg → Photo from 1904 | HERDADA (B311/B314/B317) | sha256 casa com o aprovado | — |
| TA282 | s15 | _avisos_do_ano | free-public-school-san-pablo-1904-nara-100995360.jpg → Photo from 1904 | HERDADA (B311/B314/B317) | sha256 casa com o aprovado | — |
| TA283 | s15 | _avisos_do_ano | post-office-la-boca-1904-nara-100995348.jpg → Photo from 1904 | HERDADA (B311/B314/B317) | sha256 casa com o aprovado | — |
| TA284 | s18 | _avisos_do_ano | admin-building-1957-nara-202800733.jpg → Photo from 1957 | HERDADA (B320) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA285 | s22 | _avisos_do_ano | crowd-waiting-pay-car-culebra-1908-nara-100998772.jpg → Photo from 1908 | CONFIRMADA | aviso_de_ano true na versão nova; "January 1908" (API NARA); sha256 casa com o aprovado | https://catalog.archives.gov/id/100998772 |
| TA286 | s22 | _avisos_do_ano | four-family-gold-quarters-nara-202800899.jpg → Photo from 1944 | HERDADA (B326) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA287 | s22 | _avisos_do_ano | curundu-silver-commissary-1947-nara-202799485.jpg → Photo from 1947 | HERDADA (B332) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA288 | s22 | _avisos_do_ano | clubhouse-gold-employees-balboa-1915-nara-100995304.jpg → Photo from 1915 | HERDADA (B338) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA289 | s22 | _avisos_do_ano | cristobal-silver-clubhouse-exterior-1948-nara-202799387.jpg → Photo from 1948 | CONFIRMADA | "September 15, 1948" (API NARA); sha256 ba518869… casa com o aprovado | https://catalog.archives.gov/id/202799387 |
| TA290 | s23 | _avisos_do_ano | barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84d-nara-100996836.jpg → Photo from 1909 | CONFIRMADA | "Sept 2, 1909" (API NARA); sha256 casa com o aprovado | https://catalog.archives.gov/id/100996836 |
| TA291 | s23 | _avisos_do_ano | barbados-laborers-arrive-ss-ancon-deck-cristobal-1909-84e-nara-100996838.jpg → Photo from 1909 | CONFIRMADA | "Sept 2, 1909" (API NARA); sha256 casa com o aprovado | https://catalog.archives.gov/id/100996838 |
| TA292 | s31 | _avisos_do_ano | four-family-quarters-las-cruces-balboa-1951-nara-202800907.jpg → Photo from 1951 | HERDADA (B341) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA293 | s32 | _avisos_do_ano | balboa-commissary-shirt-sale-1954-nara-202799537.jpg → Photo from 1954 | HERDADA (B344) | sha256 casa com o aprovado | — |
| TA294 | s33 | _avisos_do_ano | postal-employees-families-balboa-1938-nara-100996124.jpg → Photo from 1938 | HERDADA (B347) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA295 | s33 | _avisos_do_ano | 33rd-infantry-fort-clayton-1928-nara-329582950.jpg → Photo from 1928 | HERDADA (B350) | sha256 casa com o veredito aprovado da versão 5299ddb5 | — |
| TA296 | glossário | glossario | John Hay | HERDADA (F013c) | "John Hay, Secretary of State" | — |
| TA297 | glossário | glossario | Philippe Bunau-Varilla | HERDADA (F013, A197) | — | — |
| TA298 | glossário | glossario | Mary Knapp | HERDADA (F052, A095) | "By Mary and Herbert Knapp" | — |
| TA299 | glossário | glossario | Herbert Knapp | HERDADA (F052, A095) | — | — |
| TA300 | glossário | glossario | Jimmy Carter | CONFIRMADA | "Signed by Jimmy Carter", "President of the United States of America" | fontes/documento/unts-1280-I-21086-en.txt (l. 790–804) |
| TA301 | glossário | glossario | Omar Torrijos | CONFIRMADA | "Signed by Omar Torrijos Herrera", "Head of Government of the Republic of Panama"; a forma curta é a do roteiro | fontes/documento/unts-1280-I-21086-en.txt (l. 797, 805) |
| TA302 | glossário | glossario | Walter Mondale | CONFIRMADA | DSB: "Vice President Mondale"; o retrato aprovado: "U.S. Senate: Walter F. Mondale of Minnesota" | fontes/experiencia/departmentofstatd7979unit.txt (l. 29252); https://commons.wikimedia.org/wiki/File:Walter_Mondale_1977_vice_presidential_portrait.jpg |
| TA303 | glossário | glossario | Balboa | HERDADA (F001, F002, T06) | a cidade da Table 28 | — |
| TA304 | glossário | glossario | Balboa Heights | HERDADA (F001, F024, B319) | — | — |
| TA305 | glossário | glossario | Canal Zone | HERDADA (F018) | "shall be known and designated as the Canal Zone" | — |
| TA306 | glossário | glossario | PANAMA (Panama) | HERDADA (F012) | — | — |
| TA307 | glossário | glossario | COLOMBIA (Colombia) | HERDADA (F012) | — | — |
| TA308 | glossário | glossario | Panama City | HERDADA (F015, F038) | — | — |
| TA309 | glossário | glossario | Colón | HERDADA (F015) | grafia do texto aprovado | — |
| TA310 | glossário | glossario | Cristóbal | HERDADA (F036) | grafia do texto aprovado | — |
| TA311 | glossário | glossario | Gatún | HERDADA (F036) | grafia do texto aprovado | — |
| TA312 | glossário | glossario | Paraíso | HERDADA (F006) | grafia do texto aprovado | — |
| TA313 | glossário | glossario | Rainbow City | HERDADA (F007, F097) | — | — |
| TA314 | glossário | glossario | Silver City | HERDADA (F097) | — | — |
| TA315 | glossário | glossario | La Boca | HERDADA (F022b, F040) | — | — |
| TA316 | glossário | glossario | Ancón | CONFIRMADA | o nome em espanhol: OSM "Cerro Ancón"; MINSA, "corregimiento de Ancón" (F137); a NARA escreve "Ancon". O acento segue a regra do texto aprovado (Colón, Cristóbal, Gatún, Paraíso) | out/zona-do-canal/_media/geo/pontos-osm-hoje.json; fontes/evento/minsa-paraiso-asis-2009-2014.txt |
| TA317 | glossário | glossario | Pedro Miguel | HERDADA (F035, A071) | — | — |
| TA318 | glossário | glossario | Red Tank | HERDADA (A072) | — | — |
| TA319 | glossário | glossario | Empire | HERDADA (B310) | — | — |
| TA320 | glossário | glossario | San Pablo | HERDADA (B313) | — | — |
| TA321 | glossário | glossario | Gorgona | CONFIRMADA | "Gorgona shops", "Gorgona plant" (1912); a folha da ICC de 1911–1912 | fontes/annualreportofis1912isth.txt (l. 1058, 1070) |
| TA322 | glossário | glossario | Culebra | CONFIRMADA | 1915: "military camps were established at Empire and at Culebra" | fontes/documento/annualreportofgo1915cana.txt (l. 7621–7622) |
| TA323 | glossário | glossario | Curundu | HERDADA (B331) | — | — |
| TA324 | glossário | glossario | Fort Clayton | HERDADA (B349, B123) | — | — |
| TA325 | glossário | glossario | Fort Amador | CONFIRMADA | "Fort Amador Military Reservation (2,655)" em 1940 (Census Bureau, 2024); "Fort Amador (1911 - 1979/1996)"; o tratado de 1977 nomeia "Fort Amador". Era "conferido: false": agora conferido (ver a s34) | fontes/evento/census-history-2024-08.txt (l. 118); https://www.northamericanforts.com/East/cz.html; fontes/evento/acp-en-torrijos-carter-treaty.txt (l. 617) |
| TA326 | glossário | glossario | Fort Davis | HERDADA (B126) | — | — |
| TA327 | glossário | glossario | Albrook Air Force Base | CONFIRMADA | DSB, nov. 1979: "at Al- brook Air Force Base"; 1965: "Albrook and Howard Air Force bases"; "Albrook Field" só no tempo antigo | fontes/experiencia/departmentofstatd7979unit.txt (l. 29256–29258); fontes/annualreportpana1965pana.txt (l. 24652) |
| TA328 | glossário | glossario | Shaler Triangle | HERDADA (F101b, F102) | CIJ: "Shaler Triangle, a square in Panama City, which forms part of the territory of the Zone" | — |
| TA329 | glossário | glossario | Bridge of the Americas | HERDADA (A146, B124) | "since October 12, 1962, at the Bridge of the Americas (Thatcher Ferry Bridge)" | — |
| TA330 | glossário | glossario | Fourth of July Avenue | HERDADA (F110b) | CIJ: "4th of July Avenue"; por extenso no texto aprovado (AP: Fourth) | — |
| TA331 | glossário | glossario | Miraflores Locks | HERDADA (B388) | — | — |
| TA332 | glossário | glossario | President Kennedy Avenue | HERDADA (B379) | — | — |
| TA333 | glossário | glossario | Washington | NADA A CHECAR na tela | não vai à tela (_na_tela vazio); na voz, F012b e F118 | — |
| TA334 | glossário | glossario | Caribbean Sea | HERDADA (F005) | — | — |
| TA335 | glossário | glossario | Pacific Ocean | HERDADA (F005) | — | — |
| TA336 | glossário | glossario | Culebra Cut | HERDADA (B322) | — | — |
| TA337 | glossário | glossario | The Panama Canal (o órgão de 1914 a 1951) | HERDADA (A203) | EO 1885, "a Permanent Organization for the Operation and Government of the Panama Canal"; folhas de rosto de 1915 a 1950: "Governor of The Panama Canal" | — |
| TA338 | glossário | glossario | Canal Zone Government | HERDADA (A203) | — | — |
| TA339 | glossário | glossario | Panama Canal Company | HERDADA (A204) | — | — |
| TA340 | glossário | glossario | Panama Canal Commission | HERDADA (A201, F123b) | — | — |
| TA341 | glossário | glossario | Panama Canal Authority | HERDADA (F136, A202 (volátil)) | — | — |
| TA342 | glossário | glossario | U.S. Census Bureau | HERDADA (A007, A101) | — | — |
| TA343 | glossário | glossario | U.S. Department of State | HERDADA (A022, A210) | — | — |
| TA344 | glossário | glossario | U.S. National Archives | HERDADA (F112, A172, A206) | — | — |
| TA345 | glossário | glossario | International Commission of Jurists | HERDADA (B059, A205) | "International Commission of Jurists Geneva, Switzerland"; sem a sigla (que se lê como a Corte) | — |
| TA346 | glossário | glossario | U.S. Senate | HERDADA (F119, A176) | — | — |
| TA347 | glossário | glossario | Congress | HERDADA (F018, mec-03) | — | — |
| TA348 | glossário | glossario | Department of Defense | HERDADA (F123, A207) | — | — |
| TA349 | glossário | glossario | National Institute | HERDADA (F107, A208) | "Panamanian National Institute"; sem "public" (A208) | — |
| TA350 | glossário | glossario | Balboa High School | HERDADA (F106, A209) | — | — |
| TA351 | glossário | glossario | Balboa Elementary School | HERDADA (B304, B352) | — | — |
| TA352 | glossário | glossario | Balboa Central Police Station | HERDADA (B301) | — | — |
| TA353 | glossário | glossario | Balboa Commissary | HERDADA (B343, B355, B358) | — | — |
| TA354 | glossário | glossario | Balboa Post Office | HERDADA (B346) | — | — |
| TA355 | glossário | glossario | Administration Building | HERDADA (F136, B319) | — | — |
| TA356 | glossário | glossario | The Panama Canal Review | HERDADA (B054, B055) | — | — |
| TA357 | glossário | glossario | Department of State Bulletin | HERDADA (A210, B052) | — | — |
| TA358 | glossário | glossario | Foreign Affairs Manual | HERDADA (A210, F069) | — | — |
| TA359 | glossário | glossario | Foreign Relations of the United States | HERDADA (A022, A120) | — | — |
| TA360 | glossário | glossario | Congressional Record | HERDADA (B038, A176) | — | — |
| TA361 | glossário | glossario | Annual Report of the Governor of the Panama Canal | CONFIRMADA | folhas de rosto: 1915, 1920 e 1940 "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL FOR THE FISCAL YEAR ENDED JUNE 30"; 1930 idem; 1950 "… OF THE GOVERNOR OF THE PANAMA CANAL" | fontes/documento/annualreportofgo1915cana.txt; fontes/annualreportofgo1920cana.txt; fontes/annualreportofgo1930cana.txt; fontes/annualreportofgo1940cana.txt; fontes/annualreportofgo1950cana.txt |
| TA362 | glossário | glossario | Annual Report of the Isthmian Canal Commission and The Panama Canal | HERDADA (A044) | — | — |
| TA363 | glossário | glossario | Federal Judicial Center | HERDADA (A188) | — | — |
| TA364 | glossário | glossario | Isthmian Canal Commission | HERDADA (F121) | — | — |
| TA365 | glossário | glossario | Isthmian Canal Convention, 1903 (Tratado de 1903) | HERDADA (A027, B001) | — | — |
| TA366 | glossário | glossario | 1912 Act of Congress (Lei de 1912) | HERDADA (A028, B008) | — | — |
| TA367 | glossário | glossario | Executive Order 1885 | HERDADA (A033, A035) | — | — |
| TA368 | glossário | glossario | Boundary Convention, 1914 (Convenção de limites de 1914) | HERDADA (A049, A052) | — | — |
| TA369 | glossário | glossario | 1936 treaty (Tratado de 1936) | HERDADA (B019, A091; A7 (Art. XII)) | — | — |
| TA370 | glossário | glossario | Act of Aug. 4, 1937 (Lei de 04/08/1937) | HERDADA (B016, A110) | — | — |
| TA371 | glossário | glossario | U.S.–Panama treaty of 1955 (Tratado de 1955) | HERDADA (F085c, A134) | — | — |
| TA372 | glossário | glossario | Public Law 85-550 | HERDADA (A128, B030) | — | — |
| TA373 | glossário | glossario | Panama Canal Treaty, 1977 (Tratado de 1977) | HERDADA (A175, F116c) | — | — |
| TA374 | glossário | glossario | Joint Declaration of April 3, 1964 | HERDADA (F116, B039) | — | — |
| TA375 | glossário | glossario | 8 FAM 302.4 | HERDADA (B061, A116 (volátil: CT:CITZ-135)) | — | — |
| TA376 | glossário | glossario | "gold roll" / "silver roll" | HERDADA (F029, F098) | "the terms “gold roll” and “silver roll”" | — |
| TA377 | glossário | glossario | "U.S." rates / "local" rates | HERDADA (F084) | — | — |
| TA378 | glossário | glossario | commy | HERDADA (F053b) | — | — |
| TA379 | glossário | glossario | Alpha Point | NADA A CHECAR | nome do canal (canal.json › titulo); não é afirmação de fato | — |
| TA380 | glossário | glossario | U.S. | CONFIRMADA | AP Stylebook: "U.S." com pontos; a forma do texto aprovado | roteiros/zona-do-canal/roteiro-narrador.md |
| TA381 | s16 | t0 2.733 · forma não denuncia | o contorno de 1947 enchido em "every acre" como a Zona de 1912–1915 | DIVERGE (periférica) | a Zona de 1947 tem terras somadas depois de 1912: a EO 5880 (09/07/1932) cita a faixa da Madden Road e "the additional land acquired by the United States on the left bank of the Rio Chagres in the vicinity of the Madden Dam", cedidas pelo "Decree No. 43 of October 27, 1928"; o relatório de 1940 mede a área "inclusive of Madden Lake to + 260-foot contour"; a pauta-geo fala de uma extensão de 1935 (B111). O rótulo "(1947 map)" é verdadeiro, mas a cena o enche como a área da lei de 1912 | https://www.presidency.ucsb.edu/documents/executive-order-5880-delimiting-canal-zone-judicial-districts; fontes/annualreportofgo1940cana.txt |
| TA382 | s06, s25, s34 | posições (B127) | os pinos de lugares-1947 na tela: Paraíso, Silver City (Rainbow City), Pedro Miguel, Gatún, Fort Clayton, Fort Amador, Albrook, Fort Davis | CONFIRMADA (na escala da Zona; sem abrir imagem) | distância a referência independente: Paraíso 185 m (OSM) e 381 m (Wikipedia); Silver City 525 m de Mount Hope (OSM); Pedro Miguel 484 m (OSM); Gatún 26 m das eclusas (OSM) e 1,0 km do ponto da Wikipedia; Fort Clayton 654 m; Fort Amador 635 m; Albrook 876 m; Fort Davis 556 m (Wikipedia). Nenhum passa de ~1 km | out/zona-do-canal/_media/geo/lugares-1947.json (c708fe10…); pontos-osm-hoje.json (1c6c4ae5…); https://en.wikipedia.org/wiki/Fort_Davis,_Panama; https://en.wikipedia.org/wiki/Fort_Clayton; https://en.wikipedia.org/wiki/Fort_Amador; https://en.wikipedia.org/wiki/Albrook_Air_Force_Station |
| TA383 | s16 | posições (cidades-obra-1912) | os pinos de Gorgona, Empire e Culebra (folha da ICC, 1911–1912) | NÃO ACHEI (fonte independente da posição) | camada nova (3ª rodada), que nenhum laudo leu; as cidades não têm coordenada na Wikipedia nem na busca. Só a sanidade: Gorgona a 324 m do eixo do canal (hoje sob o lago), Empire e Culebra a 741 m, dentro da faixa da obra. Não é refutação | out/zona-do-canal/_media/geo/cidades-obra-1912.json (f1ce27c0…); eixo-do-canal.json |
| TA384 | s25 | posição (B127) | o pino de Red Tank (lugares-1947) | NÃO ACHEI (fonte independente da posição) | sem coordenada independente; o pino fica a 573 m do Pedro Miguel do OSM, compatível com a lista de 1920 | out/zona-do-canal/_media/geo/lugares-1947.json |
| TA385 | s01, s19 | _nao_conferido | os rótulos sobre o footage s01-a | NÃO FOI CHECADO (o clipe não está no disco e não tem veredito: caça pendente) | a _condicao do redator já barra o rótulo sem lugar_na_origem; no fallback de mapa, ver as linhas da s01 e da s19 | — |

**Placar:**

| veredito | itens |
|---|---|
| HERDADA | 313 |
| CONFIRMADA | 64 (4 delas, TA001, TA002, TA096 e TA097, só no ramo de mapa) |
| DIVERGE | 3 (TA173, TA266, TA381) |
| NÃO ACHEI | 2 (TA383, TA384) |
| NADA A CHECAR | 2 (TA333, TA379) |
| REFUTADA | 0 |
| NÃO FOI CHECADO | 1 (TA385) |
| **total** | **385** |

## CONSERTOS DE TELA

- **[MÉDIO] s28 · t0 9.3 (cota) e `rotulos_dado` (TA173, TA266)**
  - Texto atual: `FREE SCHOOLS · ONLY IF THE FAMILY LIVED INSIDE (1940)`
  - Texto novo: `1940 · FREE SCHOOL FOR CHILDREN OF "SILVER" EMPLOYEES · ONLY IF THEY LIVED IN THE ZONE`
  - Por quê: a fonte diz "Free school privileges are granted to children of silver employees … only when such employees reside on the Canal Zone". Sozinho na tela, o cartão estende a regra a todas as famílias. A voz não erra, porque diz "their children" logo depois dos "silver"; o defeito é só da tela.
  - RAIZ: INSTRUÇÃO. Quando o pronome da voz vira cartão, o grupo tem de ir escrito.
- **[LEVE] s16 · t0 2.733 (legenda) (TA076, TA381)**
  - Texto atual: `Canal Zone (1947 map)`
  - Texto novo: `Canal Zone as mapped in 1947 (larger than in 1912)`
  - Por quê: a cena enche o contorno de 1947 em "every acre" da lei de 1912. A Zona de 1947 tem terras somadas depois disso: a EO 5880, de 1932, cita a área cedida pelo Decreto 43, de 27/10/1928, junto à represa Madden; o relatório de 1940 mede a Zona "inclusive of Madden Lake to + 260-foot contour".
  - Quem constrói pode também não encher o vale do Chagres e do Madden, mas isso é decisão da arte, não do texto.
  - RAIZ: PONTUAL.
- **Sem conserto de texto em TA383 e TA384.** O NÃO ACHEI ali é sobre a posição dos pinos, não sobre o nome. Os rótulos ficam como estão; a posição só se confirma abrindo as folhas de 1912 e de 1947 (ver "O que vai à Sala").

Observações sem achado:
- **O1 · s26, a tabela recriada.** Os valores são os da coluna 1920 da p. 247. O original tem os anos em colunas e White/Colored em linhas; a recriação gira a tabela e mostra só 1920. Nada fica falso. Se a Sala quiser que a folha não pareça fac-símile do layout, a primeira linha pode levar `1920` como título da coluna (opcional).
- **O2 · s16, `NECESSARY TO THE CANAL · 1912 ACT`.** A lei autorizou o presidente a declarar ("the President is authorized to declare by Executive order that all land … is necessary"), e a declaração saiu na ordem de 05/12/1912 (A040). O rótulo comprime isso, mas não erra.
- **O3 · s16, voz contra tela.** A voz diz "almost four thousand privately owned houses" (A038, NÃO ACHEI literal); a tela diz só `3,988 HOUSES`. Uma não contradiz a outra. O roteiro e a narração não foram mexidos.

## LISTA DE NOMES

Nenhum anônimo na tela deste lote: as atribuições da tela são a instituições, com o documento e o ano, e os Knapp já vão nomeados.

Para quem for reforçar os créditos, os governadores que assinam os relatórios creditados:
- **1915:** Geo. W. Goethals (`fontes/documento/annualreportofgo1915cana.txt`, l. 5118);
- **1920:** Chester Harding (`fontes/annualreportofgo1920cana.txt`, l. 3688);
- **1930:** não lido;
- **1940:** Glen E. Edgerton (`fontes/annualreportofgo1940cana.txt`, l. 459);
- **1950:** F. K. Newcomer (`fontes/annualreportofgo1950cana.txt`, l. 71).

**Os 2 padrões mais vistos:**
1. **O grupo some quando a voz usa pronome.** Na s28, "their children" virou um cartão sem os "silver". É o mesmo padrão que o laudo da pesquisa chamou de "a legenda endurece a fonte" (A005, A118).
2. **A geometria de um ano cobre a cena de outro.** O contorno de 1947 está na cena de 1912. Os pinos de 1947 e de 1912 vêm de folhas que nenhum laudo pôde abrir. O rótulo é verdadeiro ("1947 map"); o que pode enganar é a justaposição.

## O QUE VAI À SALA

**NÃO FOI CHECADO.** TA385, os rótulos sobre o footage s01-a. O clipe não está no disco e não tem veredito; a caça está pendente. Não há URL. Quando o clipe chegar, a Sala manda conferir de novo TA001, TA002, TA096 e TA097 contra o `lugar_na_origem` do veredito.

**Sem leitura independente de posição (NÃO ACHEI, não refutação).** Para fechar, é preciso abrir as folhas:
- TA383: Gorgona, Empire e Culebra, na folha da ICC de 1912 (https://commons.wikimedia.org/wiki/File:Property_map_of_the_Canal_Zone_showing_property_belonging_to_the_United_States_of_America,_Panama_R._R._Co.,_and_lands_claimed_by_private_persons_LOC_82690127.jpg);
- TA384: Red Tank, na folha AMS de 1947 (https://commons.wikimedia.org/wiki/File:Canal_Zone_and_vicinity,_1-100,000._LOC_83694755.jpg).

**Os 16 NÃO FOI CHECADO do laudo da pesquisa, item a item.**
- **Não vão à tela neste lote** (não abri nada para eles):
  - A004: a legenda "in the 50 states" saiu;
  - A006, A013, A084 e A085: nenhum texto do lote os usa;
  - A078: a folha da s26 traz só 1920;
  - A106: o 517 está fora da s34.
- **Fora deste lote:** A140, A141, A142 e A144 (s48) e B074 (s59).
- **Não são texto de tela:** B109 e B115. O B113 só aparece sob a legenda condicional `Boundary as mapped in 1947`, que é verdadeira pela procedência (B107).
- **B127 vai à tela** (s06, s25, s34). Foi refeito sem imagem: TA382 confirmada, TA384 NÃO ACHEI.

**Respostas ao `_nao_conferido` do redator.**
- "Fort Amador como base em 1970": CONFIRMADA (TA225, TA325). O glossário pode passar a `"conferido": true`, e isso é do redator.
- "'Gold Clubhouse, Balboa'": CONFIRMADA (TA127).
- "as posições de lugares-1947": TA382 e TA384, acima.
- O cargo de Torrijos é do lote B.

**A rede.**
- API v2 da NARA: 4 registros, todos 200, com o User-Agent do canal (saída em `C:/Users/zangp/AppData/Local/Temp/claude/vf-tela-A/nara/nara.json`).
- API da Wikipedia: 1 consulta de coordenadas e 5 buscas. API do Commons: 1 consulta.
- WebFetch: en.wikipedia.org (Fort Amador, Fort Clayton, Fort Davis, Albrook Air Force Station), northamericanforts.com (https://www.northamericanforts.com/East/cz.html) e presidency.ucsb.edu (EO 5880).
- WebSearch: 3 buscas.
- Nenhum site recusou robô. O web.archive.org não foi usado.

**Voláteis.**
- TA375, 8 FAM 302.4: a versão lida é CT:CITZ-135, de 01/09/2026. Cresce se o manual mudar de versão; zera se a página continuar dizendo o mesmo. Reconferir antes de publicar, se a tela citar a versão.
- TA341, o endereço da Panama Canal Authority: vai à tela na s67, do lote B. Reconferir na véspera.
- Os pontos do OSM são de 15/10/2026 e não vão à tela com data.

**DECISÕES DO LUCAS PENDENTES que tocaram esta checagem.**
- O "privately owned" da voz na s16 (A038). Regravar é gasto e decisão dele; a tela já não o repete.
- Pergunta 13: recriar as folhas das s22, s24, s26 e s31. Conferi as recriações letra a letra; se ele escolher a página real, os grifos são o mesmo texto.
- Pergunta 12: a capa recriada da Review (s32).
- Pergunta 15: Panama City e Colón sem polígono (s11, s20, s28).
- A caça do footage s01-a.
- Onde gravar os laudos dos próximos vídeos (roupa §2).

VEREDITO: RESSALVA

# Lote A · reconferência depois do conserto

## Reconferência (lote A, `textos-tela.json` `238bd36b…caff`, data-base 15/10/2026, 0 imagens)

COBERTURA: 8 de 8 itens mudados.

**Como achei o que mudou.** Refiz a mesma extração no arquivo novo e comparei com a do arquivo antigo (`f0597c71…`), campo a campo. Nas s01–s36, nos cards, nos rótulos de dado e nos avisos do ano só mudaram os itens abaixo. O glossário passou de 85 para 86 grafias. Uma mudança não estava no seu pedido: a grafia "Bridge of the Americas" (TA329).

| id | o que mudou | veredito |
|---|---|---|
| TA173 | s28 · t0 9.3: `1940 · FREE SCHOOL FOR CHILDREN OF "SILVER" EMPLOYEES · ONLY IF THEY LIVED IN THE ZONE` | CONFIRMADA. A fonte diz "Free school privileges are granted to children of silver employees … only when such employees reside on the Canal Zone" (relatório de 1940, l. 16602–16607). O grupo voltou à tela. |
| TA266 | o `rotulos_dado` da s28, mesmo texto, com a fonte citada na íntegra | CONFIRMADA |
| TA076 | s16 · t0 2.733: `Canal Zone as mapped in 1947 (larger than in 1912)` | CONFIRMADA. A EO 5880 (1932) e o relatório de 1940 ("inclusive of Madden Lake") mostram terras somadas depois de 1912. |
| TA381 | o contorno de 1947 enchido em "every acre" | CONFIRMADA no texto: a legenda agora declara que a Zona de 1947 é maior. Encher ou não o vale do Chagres fica com a arte, como a instrução nova diz. |
| TA325 | glossário "Fort Amador", agora `conferido: true` | CONFIRMADA na grafia. **A citação está errada:** vale TA225 e TA325; TA127 é o clube "gold", não Fort Amador. |
| TA386 (novo) | glossário "Gold Clubhouse, Balboa", `conferido: true` | CONFIRMADA na grafia (NARA 100995304; relatório de 1920, "the gold clubhouse at Pedro Miguel"). **A citação está errada:** vale só TA127. |
| TA127 | s22 · t0 20.233: o texto de tela não mudou; mudou só a nota | O rótulo continua CONFIRMADA. **A nota cita errado:** vale só TA127. |
| TA329 | glossário "Bridge of the Americas": "then Thatcher Ferry Bridge" passou a "also called Thatcher Ferry Bridge" (fora do seu pedido) | CONFIRMADA. A CIJ de 1964 dá os dois nomes ("Bridge of the Americas (Thatcher Ferry Bridge)"). A tela é da s49, do lote B. |

**Consertos que ainda faltam.** Nenhum é texto de tela; os três primeiros são da mesma família.
- **[LEVE] Ids trocados.** No glossário "Fort Amador", `TA225, TA325 e TA127` passa a `TA225 e TA325`. No glossário "Gold Clubhouse, Balboa" e na nota da s22 (t0 20.233), `TA225, TA325 e TA127` passa a `TA127`.
- **[LEVE] Nota da s16 e instrução para a arte, sobre o Decreto 43.** O texto atual é "a área do lago Madden (Decreto 43 de 1928)". Passa a: "terras junto à represa Madden e a faixa da Madden Road (Decreto 43 de 1928, citado pela EO 5880); o relatório de 1940 mede a Zona 'inclusive of Madden Lake'". Pela EO 5880, o decreto cedeu essas terras, não a área do lago, que só uma fonte secundária data em 1924. A instrução fica em `_instrucoes_para_a_arte`, seção do lote B.

**O que continua aberto, sem mudança.** TA383 e TA384 (NÃO ACHEI: a posição dos pinos de 1912 e de Red Tank) e TA385 (NÃO FOI CHECADO: o footage s01-a, que não existe ainda e que a condição do redator já barra). Não sobra nenhum DIVERGE nem REFUTADA. O lote não sai PASS porque a cobertura continua parcial em TA385.

NOTA: 9.3/10 (era 8.8): as duas DIVERGE saíram, e sobram ids trocados em notas e no glossário e as posições sem fonte independente.

VEREDITO: RESSALVA

---

# Lote B

COBERTURA: 339 de 340 (lote B). CHECADO PARCIALMENTE: 1 item ficou NÃO FOI CHECADO por falta de insumo. É o TB340, a âncora dos rótulos da s67 sobre o footage s01-a, que não está no disco.

- **Como a lista foi derivada: à mão, pelo arquivo inteiro.** O canal não tem extrator para o texto de tela. Entraram:
  - de `out/zona-do-canal/textos-tela.json` (sha256 `f0597c711a58524b6fdeae6853cd5da3e8efeb2a3c98d19d9e529560dd50077b`): as 238 entradas de `_textos_por_cena` das cenas s37 a s68 (TB001–TB238, na ordem do arquivo); os 3 `cards_pessoa` (TB239–TB241), os 45 `rotulos_dado` (TB242–TB286) e os 10 `_avisos_do_ano` (TB287–TB296) cuja primeira cena está entre s37 e s68; e as seções gerais inteiras: 12 `_regras_de_serie` (TB297–TB308), 11 `_instrucoes_para_a_arte` (TB309–TB319), 1 `_pergunta_cta` (TB320) e 12 `_espera_o_lucas` (TB321–TB332). São 332 itens.
  - O sha256 da seleção, em JSON canônico (`sort_keys`, sem espaços), é `f3d1271e3e3fbdc6979cee6efc2ccb4c031bc214f8aba8d6b760d2da186caf64`.
  - **Mais 8 itens que a forma não denuncia** (TB333–TB340): a geometria e a âncora que vão à tela sem texto próprio. São o contorno de 1947, a divisa de Colón, as posições de `lugares-1947`, o ponto da comissaria de 1936, o ponto da Balboa High School, o anel da ponte, as datas impressas na página real de 1903 e a âncora da s67.
- **Entradas lidas, com sha256 (12 primeiros caracteres):**
  - contexto: `regencia.json` e40adc8314a5 · `espelho.json` 9eba39d5e4c8 · `conceito-visual.json` 6c9386834428 · `pauta-geo.json` b647353293c6 · `pauta-geo.md` dae03ed6903f · `conferencia-midia.json` 5299ddb52f64 (a versão anterior, 58197f2e0b9a, tirada do commit 7056205 para o diff) · `roteiro-narrador.md` 9828291d9248;
  - laudos herdados: `fatos.laudo.md` 38f51e4db53e · `fatos-pesquisa-2026-10-15.laudo.md` 0b4fbb8a75ab;
  - geo: `zona-do-canal-1947.json` 2e6ab112fef5 · `divisa-zona-1947.json` 771273f120cd · `lugares-1947.json` c708fe102d3d · `lugares-1936.json` e36add78cb1d · `pontos-osm-hoje.json` 1c6c4ae58bc5 · `pontos-osm-atlantico.json` 7876ec2a280c · `balboa-high-school.json` 9ff24f379cd9 · `eixo-do-canal.json` e708d77cc615;
  - fontes locais (`fontes/` = `midia/zona-do-canal/fontes/`):
    - FRUS: `mecanismo/frus1946v11-d927.txt` de8381d93e6f · `-d931` 8670d16cf346 · `frus1948v09-d490` 1277af39ddb6 · `frus1955-57v07-d161` e1760e56beee · `frus1915-d1732` a6be1544b475 · `experiencia/frus1977-80v29-d239.html` f54321398e71;
    - relatórios anuais: `annualreportofgo1920cana` 27f52c22f71f · `…1940…` 228a5226e3ca · `…1950…` cdd00085ee8c · `annualreportpana1958pana` 63d86faa8c26 · `…1965…` b92b6a0206f5 · `pcc-1968_djvu` 3a79fe2743d8 · `escala_humana/pcc1980_djvu` 3297f721150e · `documento/annualreportofgo1915cana` d0db383e3ba7 · `evento/annualreportofis1914isth_djvu` 511e70caf36a;
    - os demais: `experiencia/icj-1964-panama.txt` d80a44c542f7 · `departmentofstat501964unit` f56e48a0ee54 · `departmentofstatd7979unit` da63ff0910e6 · `documento/unts-1280-I-21086-en.txt` 77ece349a76e · `fam-8-302-4.txt` 55596a3475c6 · `stat-33-2234-tratado-1903.txt` c9a6838f42ec · `evento/acp-en-history.txt` f4e1211a7b1d.
- **Rede, só pela porta oficial**, com o User-Agent do canal (`contato.naka@hotmail.com`), um pedido por vez:
  - a API do Commons, 1 pedido (o retrato de Mondale), resposta 200;
  - a API da Wikipedia, 3 pedidos (coordenadas de Paraíso, da Balboa High School e de um estádio em Arco Iris), resposta 200;
  - WebFetch na Wikipedia (Bridge of the Americas) e na La Estrella de Panamá (2018);
  - 1 WebSearch.
  - Nenhum site recusou robô. Não usei o web.archive.org.
- **O diff do conferente:** dos vereditos `aprovado` das cenas s37–s68, só dois são novos depois do laudo da pesquisa: s50, a Balboa High School de 1953 reusada, e s61, o retrato de Mondale. Os outros estão iguais nos campos de lugar, data, aviso e crédito.

NOTA: 9.1/10. Os grifos e as folhas recriadas são literais, os consertos dos dois laudos chegaram à tela, e os dois vereditos novos do conferente batem com a origem. A nota cai por quatro âncoras mais firmes que a fonte: o "then" da ponte, o dia sobre a foto da s52, o "local rates" preso a La Boca e o rótulo da s67 sem condição. Cai também pelo item NÃO FOI CHECADO.

Data-base: 15/10/2026, 07:09 (Brasília).

Imagens abertas: 4 de 10, cada uma uma vez, sem releitura nem recorte, todas para itens NÃO FOI CHECADO que vão à tela:
1. `midia/zona-do-canal/fontes/documento/stat-33-2234-p1-datas.png` (2d14d438…), para o B074;
2. `out/zona-do-canal/_tmp/pesquisa-geo/r3/v-r3-zona-nova.jpg` (7e349f30…), para o B109;
3. `out/zona-do-canal/_tmp/pesquisa-geo/v-zona.jpg` (5f06079a…), para o B109 e o B113;
4. `out/zona-do-canal/_tmp/pesquisa-geo/r2/v1947-colon.jpg` (caea677f…), para o B113.

## TABELA

Abreviatura: `fontes/` = `midia/zona-do-canal/fontes/`.

| id | cena | campo/t0 | texto de tela | veredito | o que a fonte diz | URL ou arquivo local |
|---|---|---|---|---|---|---|
| TB001 | s37 | folha_cabecalho · t0 0.0 | 8 FAM 302.4-2 · U.S. DEPARTMENT OF STATE · FOREIGN AFFAIRS MANUAL | CONFIRMADA | "8 FAM 302.4-2 Birth in Panama AND PANAMA CANAL ZONE Special Provisions (CT:CITZ-135; 01-09-2026)"; volátil (B061) | fontes/documento/fam-8-302-4.txt; https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| TB002 | s37 | folha_texto · t0 0.0 | c. Until August 4, 1937, there was no special law relating to U.S. citizens born i … ian Canal Convention." | CONFIRMADA | literal: c. (caput), c.(2) e d. ("…this Act was retroactive to February 26, 1904 "Isthmian Canal Convention.""); as elipses marcam cortes | fontes/documento/fam-8-302-4.txt; https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| TB003 | s37 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Affairs Manual, 8 FAM 302.4 | HERDADA (A116) | — | — |
| TB004 | s37 | grifo_na_pagina · t0 5.22 | Acquisition of U.S. citizenship was governed by Section 1993, Revised Statutes | HERDADA (B062) | — | — |
| TB005 | s37 | grifo_na_pagina · t0 11.833 | never resided in the United States previous to the birth of such child | HERDADA (B063) | — | — |
| TB006 | s37 | trecho_ampliado · t0 11.833 | never resided in the United States previous to the birth | CONFIRMADA | literal de c.(2): "…never resided in the United States previous to the birth of such child" (9 palavras, sem aspas) | fontes/documento/fam-8-302-4.txt; https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| TB007 | s37 | grifo_na_pagina · t0 16.467 | this Act was retroactive to February 26, 1904 | HERDADA (B064) | — | — |
| TB008 | s37 | cota · t0 16.467 | BACK TO 1904 | HERDADA (F068b) | — | — |
| TB009 | s38 | folha_cabecalho · t0 0.0 | 8 FAM 302.4-2 · U.S. DEPARTMENT OF STATE · FOREIGN AFFAIRS MANUAL | CONFIRMADA | o a. está em 8 FAM 302.4-2 | fontes/documento/fam-8-302-4.txt; https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| TB010 | s38 | folha_texto · t0 0.0 | a. The Panama Canal Zone, (also known as the Canal Zone and the Isthmian Canal Zon … t (INA) Section 301: … | HERDADA (B065) | literal: "a. The Panama Canal Zone, (also known as … Isthmian Canal Zone), was never considered part of the United States … INA Section 301:" | fontes/documento/fam-8-302-4.txt; https://fam.state.gov/FAM/08FAM/08FAM030204.html |
| TB011 | s38 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Affairs Manual, 8 FAM 302.4 | HERDADA (A116) | — | — |
| TB012 | s38 | grifo_na_pagina · t0 5.867 | was never considered part of the United States | HERDADA (B065) | — | — |
| TB013 | s38 | rotulo · t0 5.867 | FOR CITIZENSHIP LAW | HERDADA (F072) | — | — |
| TB014 | s38 | trecho_ampliado · t0 5.867 | was never considered part of the United States | HERDADA (B065) | — | — |
| TB015 | s38 | legenda · t0 8.867 | ART. III · NOV. 18, 1903 · 33 STAT. 2235 | HERDADA (B001) | — | — |
| TB016 | s38 | grifo_na_pagina · t0 13.233 | if it were the sovereign | HERDADA (B004) | — | — |
| TB017 | s38 | trecho_ampliado · t0 13.233 | if it were the sovereign | HERDADA (B004) | — | — |
| TB018 | s39 | rotulo · t0 0.0 | Balboa Elementary School | HERDADA (B352) | — | — |
| TB019 | s39 | aviso_ano · t0 0.7 | Photo from 1954 | HERDADA (B353) | — | — |
| TB020 | s39 | rotulo · t0 0.733 | BALBOA, 1960 | HERDADA (F063, F094: a cidade, não o distrito) | — | — |
| TB021 | s39 | cota · t0 0.733 | 1,041 BORN IN THE CANAL ZONE | HERDADA (F063, A117) | — | — |
| TB022 | s39 | legenda · t0 0.733 | Place of birth only; the census did not tabulate their citizenship. | HERDADA (A118: o conserto do laudo, aplicado) | — | — |
| TB023 | s39 | credito · t0 0.733 | Source: U.S. Census Bureau, 1960 | CONFIRMADA | Census of Population 1960, Part 57, Table 28 (F063) | fontes/mecanismo/census1960-p57-33-table28.png |
| TB024 | s39 | rotulo · t0 9.233 | "GOLD ROLL" | HERDADA (F029) | — | — |
| TB025 | s39 | rotulo · t0 9.233 | "SILVER ROLL" | HERDADA (F029) | — | — |
| TB026 | s40 | folha_cabecalho · t0 0.0 | FOREIGN RELATIONS OF THE UNITED STATES, 1946, VOL. XI · DOC. 927 · PANAMA, MAY 16, 1946 | CONFIRMADA | "Foreign Relations of the United States, 1946, The American Republics, Volume XI, Document 927 … No. 1596 Panama, May 16, 1946" (B066) | fontes/mecanismo/frus1946v11-d927.txt; https://history.state.gov/historicaldocuments/frus1946v11/d927 |
| TB027 | s40 | folha_texto · t0 0.0 | Sir: I have the honor to submit the following progress report in connection with t … ion in the Canal Zone. | CONFIRMADA | literal: "Sir : I have the honor to submit the following progress report in connection with the Department’s instruction No. 71 of February 21, 1946, concerning racial discrimination in the Canal Zone." | fontes/mecanismo/frus1946v11-d927.txt; https://history.state.gov/historicaldocuments/frus1946v11/d927 |
| TB028 | s40 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Relations of the United States, 1946 | HERDADA (A120) | — | — |
| TB029 | s40 | rotulo · t0 3.4 | FEB. 21, 1946 | HERDADA (A119) | — | — |
| TB030 | s40 | grifo_na_pagina · t0 8.667 | concerning racial discrimination in the Canal Zone | HERDADA (B067) | — | — |
| TB031 | s40 | trecho_ampliado · t0 8.667 | concerning racial discrimination in the Canal Zone | HERDADA (B067) | — | — |
| TB032 | s41 | folha_cabecalho · t0 0.0 | FOREIGN RELATIONS OF THE UNITED STATES, 1946, VOL. XI · DOC. 931 · BALBOA HEIGHTS, SEPT. 18, 1946 | CONFIRMADA | "Volume XI, Document 931 … Balboa Heights, September 18, 1946" (B068) | fontes/mecanismo/frus1946v11-d931.txt; https://history.state.gov/historicaldocuments/frus1946v11/d931 |
| TB033 | s41 | folha_texto · t0 0.0 | …it is safe to say that the mass of the silver employees will not be completely sa … lver roll, will agree. | CONFIRMADA | literal, sem o marcador "[Page 1162]"; a elipse do meio corta a frase do "first of these objectives" | fontes/mecanismo/frus1946v11-d931.txt; https://history.state.gov/historicaldocuments/frus1946v11/d931 |
| TB034 | s41 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Relations of the United States, 1946 | CONFIRMADA | FRUS 1946, vol. XI | fontes/mecanismo/frus1946v11-d931.txt; https://history.state.gov/historicaldocuments/frus1946v11/d931 |
| TB035 | s41 | grifo_na_pagina · t0 5.633 | the complete abolition of any segregation in the Canal Zone | HERDADA (B069) | — | — |
| TB036 | s41 | trecho_ampliado · t0 5.633 | the complete abolition of any segregation in the Canal Zone | HERDADA (B069) | — | — |
| TB037 | s41 | grifo_na_pagina · t0 11.967 | without wrecking the Panama Canal and Panama Railroad organizations | HERDADA (B070) | — | — |
| TB038 | s41 | trecho_ampliado · t0 11.967 | without wrecking the Panama Canal and Panama Railroad organizations | HERDADA (B070) | — | — |
| TB039 | s41 | folha_cabecalho · t0 14.8 | ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL · 1940 · P. 63 | HERDADA (B043) | — | — |
| TB040 | s41 | folha_texto · t0 14.8 | The division of labor between the two classes of employees is a matter of long cus … o this general custom. | CONFIRMADA | literal: "The division of labor between the two classes of employees is a matter of long custom in tropical countries and Panama Canal practice conforms to this general custom." | fontes/annualreportofgo1940cana.txt |
| TB041 | s41 | credito · t0 14.8 | Sources: U.S. Department of State, Foreign Relations of the United States, 1946; A … the Panama Canal, 1940 | CONFIRMADA | títulos: FRUS 1946; "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL, 1940" | fontes/annualreportofgo1940cana.txt |
| TB042 | s41 | grifo_na_pagina · t0 17.967 | a matter of long custom in tropical countries | HERDADA (B046) | — | — |
| TB043 | s41 | trecho_ampliado · t0 17.967 | a matter of long custom in tropical countries | HERDADA (B046) | — | — |
| TB044 | s42 | folha_cabecalho · t0 0.0 | FOREIGN RELATIONS OF THE UNITED STATES, 1948, VOL. IX · DOC. 490 · DEC. 8, 1948 | CONFIRMADA | "Volume IX … Memorandum … (Bennett) … [Washington,] December 8, 1948" | fontes/mecanismo/frus1948v09-d490.txt; https://history.state.gov/historicaldocuments/frus1948v09/d490 |
| TB045 | s42 | folha_texto · t0 0.0 | The Panama Canal has announced that the terms “gold roll” and “silver roll” have b … een recently removed … | CONFIRMADA | literal (sem o marcador da nota 1): "The Panama Canal has announced that the terms “gold roll” and “silver roll” have been eliminated … The last “gold” and “silver” signs in public places have been recently removed" | fontes/mecanismo/frus1948v09-d490.txt; https://history.state.gov/historicaldocuments/frus1948v09/d490 |
| TB046 | s42 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Relations of the United States, 1948 | CONFIRMADA | FRUS 1948, vol. IX | fontes/mecanismo/frus1948v09-d490.txt; https://history.state.gov/historicaldocuments/frus1948v09/d490 |
| TB047 | s42 | rotulo · t0 1.667 | NOVEMBER 1948 | HERDADA (F083) | — | — |
| TB048 | s42 | grifo_na_pagina · t0 1.667 | the terms “gold roll” and “silver roll” have been eliminated from the new salary and wage schedules | HERDADA (F098, F083) | — | — |
| TB049 | s42 | grifo_na_pagina · t0 3.937 | The last “gold” and “silver” signs in public places have been recently removed | HERDADA (F083b) | — | — |
| TB050 | s42 | trecho_ampliado · t0 3.937 | the last “gold” and “silver” signs in public places … removed | CONFIRMADA | literal com elipse ("The last" em minúscula no recorte; 10 palavras) | fontes/mecanismo/frus1948v09-d490.txt; https://history.state.gov/historicaldocuments/frus1948v09/d490 |
| TB051 | s42 | rotulo · t0 5.367 | DECEMBER 1948 | HERDADA (F083b, A124) | — | — |
| TB052 | s43 | rotulo · t0 0.167 | 1950 | HERDADA (F084c) | — | — |
| TB053 | s43 | credito · t0 0.167 | Source: Annual Report of the Governor of the Panama Canal, 1950 | CONFIRMADA | "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL FOR THE FISCAL YEAR 1950" | fontes/annualreportofgo1950cana.txt |
| TB054 | s43 | rotulo · t0 3.167 | "U.S." RATES | HERDADA (F084) | — | — |
| TB055 | s43 | rotulo · t0 4.533 | "LOCAL" RATES | HERDADA (F084) | — | — |
| TB056 | s44 | legenda · t0 0.0 | Quoted in Public Law 85-550, 1958 | HERDADA (B211) | — | — |
| TB057 | s44 | credito · t0 0.0 | Sources: U.S.–Panama treaty of 1955; Public Law 85-550, 1958 | HERDADA (A130: o conserto do laudo, aplicado) | — | — |
| TB058 | s44 | grifo_na_pagina · t0 2.5 | The basic wage for any given grade level will be the same | HERDADA (B032) | — | — |
| TB059 | s44 | trecho_ampliado · t0 2.5 | The basic wage for any given grade level will be the same | HERDADA (B032) | — | — |
| TB060 | s44 | grifo_na_pagina · t0 4.933 | without regard to whether he is a citizen of the United States or of the Republic of Panama | HERDADA (B032) | — | — |
| TB061 | s44 | trecho_ampliado · t0 4.933 | …a citizen of the United States or of the Republic of Panama | HERDADA (B032) | 12 palavras, literal do item 1(a) | — |
| TB062 | s44 | legenda · t0 8.933 | PUBLIC LAW 85-550 · 1958 | HERDADA (A128) | — | — |
| TB063 | s45 | rotulo · t0 0.0 | Balboa Commissary | HERDADA (B355) | — | — |
| TB064 | s45 | aviso_ano · t0 0.7 | Photo from 1955 | HERDADA (B356) | — | — |
| TB065 | s45 | rotulo · t0 2.6 | FROM 1939 | HERDADA (A131, F087c) | — | — |
| TB066 | s45 | credito · t0 2.6 | Source: U.S.–Panama treaty of 1936 | HERDADA (F086, F087) | — | — |
| TB067 | s45 | rotulo · t0 3.9 | Balboa Commissary | HERDADA (B358) | — | — |
| TB068 | s45 | aviso_ano · t0 4.05 | Photo from 1956 | HERDADA (B359) | — | — |
| TB069 | s46 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal (identidade §6) e ODbL (B106) | https://www.openstreetmap.org/copyright |
| TB070 | s46 | rotulo · t0 0.0 | Balboa Commissary | CONFIRMADA | nome: NARA 202799541 "Balboa Commissary, Canal Zone" (B355); o ponto de lugares-1936 fica a ≥ 0,9 km a oeste da linha-1914 (lado da Zona). Ver TB336 | _media/geo/lugares-1936.json (e36add78…) |
| TB071 | s46 | rotulo · t0 0.0 | Panama City | HERDADA (F015) | — | — |
| TB072 | s46 | cota · t0 0.6 | FROM DEC. 31, 1956 | HERDADA (A132) | — | — |
| TB073 | s46 | credito · t0 0.6 | Source: U.S.–Panama treaty of 1955 | HERDADA (A134) | — | — |
| TB074 | s46 | citacao · t0 12.433 | “unjust and unfair competition with the economy of Panama” | CONFIRMADA | literal: "…constituted an unjust and unfair competition with the economy of Panama." (no "[Enclosure] Report to the President", anexo ao memorando) | fontes/mecanismo/frus1955-57v07-d161.txt; https://history.state.gov/historicaldocuments/frus1955-57v07/d161 |
| TB075 | s46 | legenda · t0 12.433 | State Department memo, Sept. 28, 1956 | CONFIRMADA | "161. Memorandum From the Secretary of State to the President, Washington, September 28, 1956"; a frase está no relatório anexo ("along the lines of the attached report. JFD") | fontes/mecanismo/frus1955-57v07-d161.txt; https://history.state.gov/historicaldocuments/frus1955-57v07/d161 |
| TB076 | s46 | credito · t0 12.433 | Sources: U.S.–Panama treaty of 1955; U.S. Department of State, Foreign Relations o … ited States, 1955–1957 | CONFIRMADA | FRUS 1955–1957, vol. VII; tratado de 1955, Art. XII (A134) | fontes/mecanismo/frus1955-57v07-d161.txt; https://history.state.gov/historicaldocuments/frus1955-57v07/d161 |
| TB077 | s47 | rotulo · t0 0.0 | Ancón | HERDADA (B361) | origem "Public School, Ancon C.Z."; o acento é o do nome oficial (corregimiento de Ancón) | — |
| TB078 | s47 | rotulo · t0 0.0 | La Boca | HERDADA (B364) | — | — |
| TB079 | s47 | aviso_ano · t0 0.7 | Photo from 1918 | HERDADA (B362) | — | — |
| TB080 | s47 | aviso_ano · t0 0.85 | Photo from 1921 | HERDADA (B365) | — | — |
| TB081 | s47 | rotulo · t0 4.133 | "white" schools | HERDADA (B391) | — | — |
| TB082 | s47 | legenda · t0 4.133 | the Zone's 1920 report | CONFIRMADA | 1920: "The net enrollment for the year was 2,004 at the white schools and 1,481 at the colored schools" | fontes/annualreportofgo1920cana.txt |
| TB083 | s47 | credito · t0 4.133 | Source: Annual Report of the Governor of the Panama Canal, 1920 | CONFIRMADA | "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL FOR THE FISCAL YEAR ENDED JUNE 30 1920" | fontes/annualreportofgo1920cana.txt |
| TB084 | s47 | rotulo · t0 5.433 | "colored" schools | HERDADA (B394) | — | — |
| TB085 | s47 | rotulo · t0 7.6 | Balboa High School | HERDADA (B367) | — | — |
| TB086 | s47 | rotulo · t0 7.6 | Paraíso | HERDADA (B370; A2 aplicado: só o lugar) | — | — |
| TB087 | s47 | aviso_ano · t0 7.75 | Photo from 1953 | HERDADA (B368) | — | — |
| TB088 | s47 | aviso_ano · t0 7.75 | Photo from 1953 | HERDADA (B371) | — | — |
| TB089 | s47 | legenda · t0 9.4 | 1960s reports: "U.S. citizen schools" · "Latin American schools" | HERDADA (F092, F092b; A2 aplicado) | 1965: "U.S. citizen schools 10,353 … Latin American schools 3,459"; 1968: "the U.S. citizen schools and Latin American schools" | fontes/annualreportpana1965pana.txt; fontes/pcc-1968_djvu.txt; https://archive.org/details/annualreportpana1968pana |
| TB090 | s47 | credito · t0 9.4 | Sources: Panama Canal Company and Canal Zone Government, annual reports, 1965 and 1968 | CONFIRMADA | "PANAMA CANAL COMPANY CANAL ZONE GOVERNMENT ANNUAL REPORT FISCAL YEAR ENDED JUNE 30, 1965" e "…1968" | fontes/annualreportpana1965pana.txt; fontes/pcc-1968_djvu.txt; https://archive.org/details/annualreportpana1968pana |
| TB091 | s48 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal; ODbL (B106) | https://www.openstreetmap.org/copyright |
| TB092 | s48 | legenda · t0 0.0 | Canal Zone (1947 map) | CONFIRMADA | B107 (AMS 1947, LOC 83694755); A4 aplicado; o contorno da 3ª rodada: TB333 | https://commons.wikimedia.org/wiki/File:Canal_Zone_and_vicinity,_1-100,000._LOC_83694755.jpg |
| TB093 | s48 | legenda · t0 1.39 | U.S. CENSUS, 1960 · BORN IN THE U.S. | HERDADA (F093) | — | — |
| TB094 | s48 | credito · t0 1.39 | Source: U.S. Census Bureau, 1960 | CONFIRMADA | Table 28 de 1960 (F093) | fontes/mecanismo/census1960-p57-33-table28.png |
| TB095 | s48 | rotulo · t0 3.767 | Balboa | HERDADA (F001, F094) | — | — |
| TB096 | s48 | cota · t0 5.9 | 1,580 OF 3,139 | HERDADA (F094) | — | — |
| TB097 | s48 | rotulo · t0 10.5 | Paraíso | HERDADA (F095); posição: TB335 | — | — |
| TB098 | s48 | cota · t0 12.533 | 7 OF 3,113 | HERDADA (F095) | — | — |
| TB099 | s48 | rotulo · t0 15.58 | Rainbow City | HERDADA (F096, B128); posição: TB335 | — | — |
| TB100 | s48 | cota · t0 17.967 | 3 OF 3,688 | HERDADA (F096) | — | — |
| TB101 | s48 | rotulo · t0 23.0 | Silver City | HERDADA (F097, A143; A13 aplicado) | — | — |
| TB102 | s48 | legenda · t0 23.0 | its name in the 1950 census | HERDADA (F097, A143) | — | — |
| TB103 | s48 | credito · t0 23.0 | Source: U.S. Census Bureau, 1950 and 1960 | CONFIRMADA | Census 1950, Table 19 (A143) e 1960, Table 28 (F094–F096) | fontes/cz-1950-vol2-p51-54ch8.pdf |
| TB104 | s48 | rotulo · t0 30.9 | FROM 1960 | HERDADA (F101) | — | — |
| TB105 | s48 | legenda · t0 30.9 | Panama's flag at chosen sites | HERDADA (F101) | — | — |
| TB106 | s48 | credito · t0 37.3 | Source: International Commission of Jurists, 1964 | HERDADA (A153) | — | — |
| TB107 | s48 | rotulo · t0 38.26 | Shaler Triangle | HERDADA (F101b, F102) | CIJ §17: "Shaler Triangle, a square in Panama City, which forms part of the territory of the Zone" | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf |
| TB108 | s48 | rotulo · t0 38.26 | SEPT. 7, 1960 | HERDADA (A145) | — | — |
| TB109 | s48 | legenda · t0 38.26 | approximate location | CONFIRMADA | não há ponto lido do triângulo (regência › _geo.falta); declarar é o certo | — |
| TB110 | s48 | rotulo · t0 42.62 | Bridge of the Americas | CONFIRMADA | CIJ §18: "at the Bridge of the Americas (Thatcher Ferry Bridge)"; OSM "Puente de las Américas" | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf |
| TB111 | s48 | legenda · t0 42.62 | then Thatcher Ferry Bridge · Oct. 12, 1962 | DIVERGE (o "then"; a data está CONFIRMADA) | a CIJ (1964) dá os dois nomes ao mesmo tempo: "Bridge of the Americas (Thatcher Ferry Bridge)". Inaugurada em 12/10/1962: "fue inaugurado el Puente de las Américas"; Washington difundiu "Thatcher Ferry Bridge", e os zonians o usaram "hasta 1981" (La Estrella, 2018). Wikipedia: "The inauguration of the bridge took place on October 12, 1962" | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf; https://www.laestrella.com.pa/panama/nacional/nombre-puente-batalla-americas-CPLE40664; https://en.wikipedia.org/wiki/Bridge_of_the_Americas |
| TB112 | s48 | rotulo · t0 44.5 | Balboa Heights | HERDADA (F102b) | — | — |
| TB113 | s48 | legenda · t0 44.5 | Administration Building · October 1962 | HERDADA (F102b, A147) | CIJ §18: "since the end of that month at the Administration Buildings at Balboa Heights (Panama City) and Cristobal (Colon)" | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf |
| TB114 | s48 | rotulo · t0 44.5 | Cristóbal | HERDADA (F102b) | — | — |
| TB115 | s48 | legenda · t0 44.5 | Administration Building · October 1962 | HERDADA (F102b, A147) | — | — |
| TB116 | s48 | legenda · t0 44.5 | Boundary as mapped in 1947 | CONFIRMADA | A4/B112 (o Art. VI de 1955); o traçado: TB334 | — |
| TB117 | s48 | rotulo · t0 46.16 | JAN. 10, 1963 | HERDADA (F103c) | — | — |
| TB118 | s48 | legenda · t0 46.16 | Agreement between the two governments | HERDADA (F103, F103b) | — | — |
| TB119 | s48 | rotulo · t0 54.767 | DEC. 30, 1963 | HERDADA (F104) | — | — |
| TB120 | s48 | cota · t0 56.0 | 17 SITES | HERDADA (A150; A151 aplicado: sem o 16) | — | — |
| TB121 | s48 | legenda · t0 61.833 | At schools: indoors only | HERDADA (F105) | CIJ §19: "for the United States flag to continue to be displayed in classrooms or elsewhere within the schools" | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf |
| TB122 | s48 | rotulo · t0 61.833 | Balboa High School | CONFIRMADA | OSM way/609527463; a 45 m da coordenada da Wikipedia (8.95899, -79.55735); ver TB337 | https://en.wikipedia.org/wiki/Balboa_High_School_(Panama) |
| TB123 | s50 | rotulo · t0 0.0 | Balboa High School | CONFIRMADA | veredito novo da s50: lugar_na_origem "Balboa High School and Canal Zone Junior College, Balboa, Canal Zone."; NARA "13-N-6(37) … October 5, 1953" | https://catalog.archives.gov/id/202800567 |
| TB124 | s50 | rotulo · t0 0.3 | JAN. 7, 1964 | HERDADA (A154) | — | — |
| TB125 | s50 | aviso_ano · t0 0.7 | Photo from 1953 | CONFIRMADA | veredito novo da s50: data_na_origem "October 5, 1953", aviso_de_ano true | https://catalog.archives.gov/id/202800567 |
| TB126 | s50 | folha_cabecalho · t0 6.6 | DEPARTMENT OF STATE BULLETIN · FEB. 3, 1964 · P. 152 | HERDADA (B052, A155) | — | — |
| TB127 | s50 | folha_texto · t0 6.6 | On January 7, 1964, students at Balboa High School hoisted a flag on their own in  …  and disorders ensued. | CONFIRMADA | literal: "On January 7, 1964, students at Balboa High School hoisted a flag on their own in defiance of the Governor's orders. Two days later Pan- amanian students attempted to display their flag, and disorders ensued." | fontes/experiencia/departmentofstat501964unit.txt |
| TB128 | s50 | credito · t0 6.6 | Source: U.S. Department of State, Department of State Bulletin, Feb. 3, 1964 | HERDADA (A156) | — | — |
| TB129 | s50 | grifo_na_pagina · t0 6.603 | in defiance of the Governor's orders | HERDADA (B053) | — | — |
| TB130 | s50 | trecho_ampliado · t0 6.603 | in defiance of the Governor's orders | HERDADA (B053) | — | — |
| TB131 | s51 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal; ODbL | https://www.openstreetmap.org/copyright |
| TB132 | s51 | rotulo · t0 1.8 | JAN. 9, 1964 | HERDADA (F107) | — | — |
| TB133 | s51 | rotulo · t0 4.22 | National Institute | HERDADA (F107; B118) | — | — |
| TB134 | s51 | legenda · t0 4.22 | a high school in Panama City | HERDADA (A208: o conserto do laudo, aplicado) | — | — |
| TB135 | s51 | rotulo · t0 4.22 | Balboa High School | HERDADA (A209) | — | — |
| TB136 | s51 | cota · t0 5.067 | ABOUT 200 STUDENTS | HERDADA (A158) | — | — |
| TB137 | s51 | credito · t0 5.067 | Source: International Commission of Jurists, 1964 | HERDADA (A160) | — | — |
| TB138 | s51 | rotulo · t0 10.367 | International Commission of Jurists | HERDADA (A205, B059) | — | — |
| TB139 | s51 | legenda · t0 10.367 | Report on the Events in Panama, January 9–12, 1964 · Geneva | HERDADA (B059) | — | — |
| TB140 | s52 | rotulo · t0 0.0 | At the flagpole | HERDADA (B376; A8 aplicado) | — | — |
| TB141 | s52 | rotulo · t0 0.0 | JAN. 9, 1964 | NÃO ACHEI (o dia, na origem da foto) | NARA 218517740: productionDates 1964-01 (só o mês), série 535455; o conferente: data_na_origem "January 1964 (… a data do item é a da série)". O dia 9 vem da CIJ, não da foto | https://catalog.archives.gov/id/218517740 |
| TB142 | s53 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal; ODbL | https://www.openstreetmap.org/copyright |
| TB143 | s53 | rotulo · t0 0.0 | National Institute | HERDADA (B118) | — | — |
| TB144 | s53 | rotulo · t0 0.0 | Balboa High School | HERDADA (A209) | — | — |
| TB145 | s53 | cota · t0 1.833 | ABOUT 7 P.M. | HERDADA (A162) | — | — |
| TB146 | s53 | credito · t0 1.833 | Source: International Commission of Jurists, 1964 | HERDADA (A160) | — | — |
| TB147 | s53 | rotulo · t0 2.8 | Fourth of July Avenue | HERDADA (F110b, B119) | — | — |
| TB148 | s53 | legenda · t0 2.8 | its name in 1964 | CONFIRMADA | CIJ 1964: "the National Institute on the Panamanian side of 4th of July Avenue"; hoje Avenida de los Mártires (B119) | fontes/experiencia/icj-1964-panama.txt; https://www.icj.org/wp-content/uploads/1964/01/Panama-disturbances-fact-finding-mission-report-1964-eng.pdf; fontes/mecanismo/laestrella-2018-cicatriz.txt |
| TB149 | s54 | rotulo · t0 0.0 | President Kennedy Avenue | HERDADA (B379) | — | — |
| TB150 | s54 | rotulo · t0 0.0 | JANUARY 1964 | HERDADA (B380) | — | — |
| TB151 | s54 | cota · t0 2.933 | 4 U.S. SOLDIERS | HERDADA (F112, A164) | — | — |
| TB152 | s54 | credito · t0 2.933 | Source: U.S. National Archives, 2014 | HERDADA (A206) | — | — |
| TB153 | s54 | cota · t0 4.3 | 24 PANAMANIANS KILLED | HERDADA (F112, A164) | — | — |
| TB154 | s54 | legenda · t0 6.767 | ACCORDING TO THE U.S. NATIONAL ARCHIVES | HERDADA (A164) | — | — |
| TB155 | s54 | legenda · t0 8.767 | OTHER COUNTS DIFFER | HERDADA (F113, A171) | — | — |
| TB156 | s54 | legenda · t0 10.0 | JAN. 10, 1964 · PANAMA BREAKS OFF RELATIONS WITH THE UNITED STATES | HERDADA (F114) | — | — |
| TB157 | s54 | credito · t0 10.0 | Source: U.S. Department of State, Office of the Historian | HERDADA (F114) | — | — |
| TB158 | s56 | legenda · t0 0.0 | Treaty text as printed in the Congressional Record, Sept. 8, 1977 | HERDADA (B212) | — | — |
| TB159 | s56 | grifo_na_pagina · t0 2.3 | Acting in the spirit of the Joint Declaration of April 3, 1964 | HERDADA (B039) | — | — |
| TB160 | s56 | trecho_ampliado · t0 2.3 | in the spirit of the Joint Declaration of April 3, 1964 | HERDADA (B039) | — | — |
| TB161 | s56 | legenda · t0 6.4 | APRIL 3, 1964 · RELATIONS RESTORED | HERDADA (F116b) | — | — |
| TB162 | s57 | rotulo · t0 0.0 | SEPT. 7, 1977 | HERDADA (F118, B383, B386) | — | — |
| TB163 | s57 | card_nome · t0 4.0 | JIMMY CARTER | CONFIRMADA | "Signed by Jimmy Carter" | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB164 | s57 | card_cargo · t0 4.0 | President of the United States (1977) | CONFIRMADA | "President of the United States of America", no bloco de assinatura de 07/09/1977 | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB165 | s57 | card_nome · t0 5.5 | OMAR TORRIJOS | CONFIRMADA | "Signed by Omar Torrijos Herrera" | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB166 | s57 | card_cargo · t0 5.5 | Head of Government of the Republic of Panama (1977) | CONFIRMADA | "Head of Government of the Republic of Panama" / "Jefe de Gobierno de la República de Panamá", no bloco de assinatura | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB167 | s58 | cota · t0 0.0 | TWO-THIRDS · 67 | CONFIRMADA | CR: "Two-thirds of the Senators present and voting"; 68 + 32 = 100 votantes; 2/3 × 100 = 66,7, e 67 é o mínimo inteiro | https://www.govinfo.gov/content/pkg/GPO-CRECB-1978-pt8/pdf/GPO-CRECB-1978-pt8-5-2.pdf |
| TB168 | s58 | legenda · t0 2.233 | U.S. SENATE · APRIL 18, 1978 | HERDADA (A177) | — | — |
| TB169 | s58 | credito · t0 2.233 | Source: Congressional Record, April 18, 1978 | HERDADA (A176; conserto 13 aplicado) | — | — |
| TB170 | s58 | cota · t0 3.667 | 68 | HERDADA (A176) | — | — |
| TB171 | s58 | cota · t0 4.567 | 32 | HERDADA (A176) | — | — |
| TB172 | s59 | heroi · t0 0.0 | OCT. 1, 1979 | HERDADA (F120) | — | — |
| TB173 | s59 | legenda · t0 3.367 | Treaty text as printed in the Congressional Record, Sept. 8, 1977 | HERDADA (B213) | — | — |
| TB174 | s59 | grifo_na_pagina · t0 4.567 | this Treaty terminates and supersedes | HERDADA (B040) | — | — |
| TB175 | s59 | trecho_ampliado · t0 4.567 | terminates and supersedes | HERDADA (B040) | — | — |
| TB176 | s59 | legenda · t0 5.8 | Art. I(1): the treaties of 1903, 1936 and 1955 | CONFIRMADA | Art. I(1): "(a) The Isthmian Canal Convention … November 18, 1903; (b) The Treaty of Friendship and Cooperation signed at Washington, March 2, 1936, and the Treaty of Mutual Understanding and Cooperation … January 25, 1955" | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB177 | s59 | legenda · t0 8.033 | ART. II · NOV. 18, 1903 · 33 STAT. 2234 | HERDADA (B006) | — | — |
| TB178 | s59 | grifo_na_pagina · t0 9.267 | in perpetuity | HERDADA (B007) | — | — |
| TB179 | s59 | trecho_ampliado · t0 9.267 | in perpetuity … construction, maintenance, operation, sanitation and protection of said Canal | CONFIRMADA | literal do Art. II: "…in perpetuity the use, occupation and control of a zone of land and land underwater [p. 2235] for the construction, maintenance, operation, sanitation and protection of said Canal"; a 2ª metade está na p. 2235 | fontes/documento/stat-33-2234-tratado-1903.txt (.pdf) |
| TB180 | s60 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal; ODbL | https://www.openstreetmap.org/copyright |
| TB181 | s60 | legenda · t0 0.0 | Canal Zone (1947 map) | CONFIRMADA | = TB092 | — |
| TB182 | s60 | cota · t0 0.8 | 1904–1979 · 75 YEARS | HERDADA (F121, F121m) | — | — |
| TB183 | s60 | credito · t0 0.8 | Sources: Isthmian Canal Commission, 1905; Panama Canal Treaty, 1977 | HERDADA (A183: o conserto do laudo, aplicado) | — | — |
| TB184 | s60 | rotulo · t0 5.433 | OCT. 1, 1979 | HERDADA (F120) | — | — |
| TB185 | s60 | citacao · t0 5.433 | “plenary jurisdiction over the former Canal Zone” | CONFIRMADA | literal: "The Republic of Panama shall reassume plenary jurisdiction over the former Canal Zone upon entry into force of this Treaty" | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB186 | s60 | legenda · t0 5.433 | 1977 treaty, Art. XI | CONFIRMADA | "Article XI. PROVISIONS FOR THE TRANSITION PERIOD" (o OCR lê "XL") | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB187 | s60 | rotulo · t0 11.94 | Albrook Air Force Base | HERDADA (F125b) | — | — |
| TB188 | s60 | card_nome · t0 14.0 | WALTER MONDALE | HERDADA (F125, A184) | — | — |
| TB189 | s60 | card_cargo · t0 14.0 | Vice President of the United States (1979) | CONFIRMADA | "Vice President Mondale visited Panama September 30-October 2, 1979" | fontes/experiencia/departmentofstatd7979unit.txt |
| TB190 | s60 | aviso_ano · t0 14.15 | Photo from 1977 | CONFIRMADA | Commons (API, 15/10/2026): DateTimeOriginal "1977", "Walter Mondale 1977 vice presidential portrait", Public domain; veredito novo da s61, aviso_de_ano true | https://commons.wikimedia.org/wiki/File:Walter_Mondale_1977_vice_presidential_portrait.jpg |
| TB191 | s60 | citacao · t0 15.033 | “a proud day” | HERDADA (F125) | — | — |
| TB192 | s60 | legenda · t0 15.033 | Department of State Bulletin, Nov. 1979 | HERDADA (A185) | — | — |
| TB193 | s60 | credito · t0 15.033 | Source: U.S. Department of State, Department of State Bulletin, November 1979 | HERDADA (A185) | — | — |
| TB194 | s62 | folha_cabecalho · t0 0.0 | FOREIGN RELATIONS OF THE UNITED STATES, 1977–1980, VOL. XXIX · DOC. 239 · WASHINGTON, AUG. 14, 1979 | HERDADA (B071) | "Volume XXIX, Panama, Document 239 … Washington, August 14, 1979" | fontes/experiencia/frus1977-80v29-d239.html; https://history.state.gov/historicaldocuments/frus1977-80v29/d239 |
| TB195 | s62 | folha_texto · t0 0.0 | —It will serve to reassure American Canal employees that the U.S. is not abandoning them. | HERDADA (B072) | literal, com o travessão do original: "—It will serve to reassure American Canal employees that the U.S. is not abandoning them." | fontes/experiencia/frus1977-80v29-d239.html; https://history.state.gov/historicaldocuments/frus1977-80v29/d239 |
| TB196 | s62 | credito · t0 0.0 | Source: U.S. Department of State, Foreign Relations of the United States, 1977–1980 | CONFIRMADA | FRUS 1977–1980, vol. XXIX | fontes/experiencia/frus1977-80v29-d239.html; https://history.state.gov/historicaldocuments/frus1977-80v29/d239 |
| TB197 | s62 | rotulo · t0 0.0 | AUG. 14, 1979 | HERDADA (F126, B071) | — | — |
| TB198 | s62 | legenda · t0 0.0 | From the Secretary of State to the Vice President | HERDADA (B071) | — | — |
| TB199 | s62 | grifo_na_pagina · t0 6.767 | is not abandoning them | HERDADA (F126) | — | — |
| TB200 | s62 | trecho_ampliado · t0 6.767 | is not abandoning them | HERDADA (F126) | — | — |
| TB201 | s63 | rotulo · t0 0.0 | OCT. 1, 1979 | HERDADA (F120) | — | — |
| TB202 | s63 | rotulo · t0 0.233 | MARCH 31, 1982 | HERDADA (A188) | — | — |
| TB203 | s63 | cota · t0 0.233 | 30 MONTHS | HERDADA (F122) | Art. XI(1): "shall remain in effect for thirty calendar months"; 01/10/1979 + 30 meses fecha em 31/03/1982 | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB204 | s63 | credito · t0 0.233 | Sources: Panama Canal Treaty, 1977, Art. XI; Federal Judicial Center | CONFIRMADA | Art. XI (F122) e FJC (A188) | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf; https://www.fjc.gov/history/courts/us-court-appeals-fifth-circuit-legislative-history |
| TB205 | s63 | rotulo · t0 8.6 | THE ZONE'S SCHOOLS | HERDADA (F123) | — | — |
| TB206 | s63 | rotulo · t0 8.6 | DEPARTMENT OF DEFENSE | HERDADA (F123, A207) | — | — |
| TB207 | s63 | credito · t0 9.6 | Source: Panama Canal Commission, Annual Report, 1980 | CONFIRMADA | "PANAMA CANAL COMMISSION ANNUAL REPORT / FISCAL YEAR ENDED SEPTEMBER 30, 1980"; "the transfer of organizations to the Department of Defense; e.g., schools, hospitals" | fontes/escala_humana/pcc1980_djvu.txt |
| TB208 | s64 | rotulo · t0 0.0 | Miraflores Locks | HERDADA (B388) | — | — |
| TB209 | s64 | aviso_ano · t0 0.7 | Photo from 1988 | HERDADA (B389; A9 aplicado) | — | — |
| TB210 | s64 | rotulo · t0 1.567 | Panama Canal Commission | HERDADA (F123b, A201) | — | — |
| TB211 | s64 | cota · t0 3.867 | UNTIL DEC. 31, 1999 | HERDADA (A190) | — | — |
| TB212 | s64 | credito · t0 3.867 | Source: Panama Canal Treaty, 1977 | HERDADA (A175) | — | — |
| TB213 | s65 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal; ODbL | https://www.openstreetmap.org/copyright |
| TB214 | s65 | rotulo · t0 0.0 | Balboa | HERDADA (F001) | — | — |
| TB215 | s65 | legenda · t0 4.1 | A TREATY · 1903 · 10 MILES WIDE | HERDADA (F014, F128b) | — | — |
| TB216 | s65 | legenda · t0 11.1 | A LAW · 1912 · A GOVERNOR · JURIES OF U.S. CITIZENS | HERDADA (F129; B012, B015) | — | — |
| TB217 | s65 | legenda · t0 11.1 | Canal Zone (1947 map) | CONFIRMADA | = TB092 | — |
| TB218 | s65 | legenda · t0 16.667 | A SECOND TREATY · 1936 · WHO COULD LIVE INSIDE | HERDADA (F130, B023; A1 e A3 aplicados: sem ONLY) | — | — |
| TB219 | s65 | rotulo · t0 16.667 | Panama City | HERDADA (F015) | — | — |
| TB220 | s65 | rotulo · t0 22.9 | La Boca | HERDADA (F022b, F040) | — | — |
| TB221 | s65 | rotulo · t0 27.033 | "gold" | HERDADA (F022, F040) | — | — |
| TB222 | s65 | rotulo · t0 27.033 | "silver" | HERDADA (F022b, F040) | — | — |
| TB223 | s65 | rotulo · t0 28.633 | "U.S." rates | HERDADA (F084, F131) | os termos; Balboa como cidade de "U.S." rates se apoia nas escolas "U.S." de Balboa (1965) e nos 1,580 de 3,139 (F094) | fontes/annualreportpana1965pana.txt |
| TB224 | s65 | rotulo · t0 28.633 | "local" rates | NÃO ACHEI (o rótulo preso a La Boca) | os termos são do relatório de 1950 (F084), que fala de folha de pagamento; ele põe em La Boca o comissário e o colégio normal "of the colored schools", mas não chama a cidade de "local-rate" | fontes/annualreportofgo1950cana.txt |
| TB225 | s66 | legenda · t0 0.0 | ART. III · NOV. 18, 1903 · 33 STAT. 2235 | HERDADA (B001) | — | — |
| TB226 | s66 | grifo_na_pagina · t0 6.4 | if it were the sovereign | HERDADA (B005) | — | — |
| TB227 | s66 | trecho_ampliado · t0 6.4 | if it were the sovereign | HERDADA (B005) | — | — |
| TB228 | s66 | folha_cabecalho · t0 8.067 | PANAMA CANAL TREATY, 1977 · ART. I(2) | HERDADA (B041) | — | — |
| TB229 | s66 | folha_texto · t0 8.067 | 2. In accordance with the terms of this Treaty and related agreements, the Republi … ugh the Panama Canal … | CONFIRMADA | literal do Art. I(2) (a UNTS traz "for the duration of, this Treaty", vírgula do OCR) | fontes/documento/unts-1280-I-21086-en.txt; https://treaties.un.org/doc/Publication/UNTS/Volume%201280/volume-1280-I-21086-English.pdf |
| TB230 | s66 | credito · t0 8.067 | Source: Panama Canal Treaty, 1977 | HERDADA (A175) | — | — |
| TB231 | s66 | grifo_na_pagina · t0 11.2 | as territorial sovereign | HERDADA (B041) | — | — |
| TB232 | s66 | trecho_ampliado · t0 11.2 | the Republic of Panama, as territorial sovereign | HERDADA (B041) | — | — |
| TB233 | s67 | credito · t0 0.0 | © MapTiler © OpenStreetMap contributors | CONFIRMADA | regra do canal (só no fallback) | — |
| TB234 | s67 | credito · t0 0.0 | Image(s) and/or video used under license from Shutterstock.com | CONFIRMADA | identidade §7: "Image(s) and/or video used under license from Shutterstock.com" (literal; só se houver clipe do Shutterstock) | marca/identidade.md §7 |
| TB235 | s67 | rotulo · t0 3.933 | Panama Canal Authority | HERDADA (A202, F136) | — | — |
| TB236 | s67 | legenda · t0 3.933 | Administration Building, Balboa · 2026 | HERDADA (F136; volátil) | "Panama Canal Authority. Administration Building. Balboa, Ancon. Republic of Panama." (cópia de 14/10/2026); a âncora sobre o footage: TB340 | fontes/evento/acp-en-history.txt |
| TB237 | s67 | credito · t0 3.933 | Source: Panama Canal Authority, 2026 | CONFIRMADA (volátil) | rodapé: "© 2026. Panama Canal Authority." | fontes/evento/acp-en-history.txt |
| TB238 | s67 | pergunta_cta · t0 12.633 | Where would you draw the line? | NADA A CHECAR | pergunta ao público, sem afirmação (30 caracteres, contados) | — |
| TB239 | s57 | cards_pessoa | Jimmy Carter · President of the United States (1977) · data_do_cargo 1977-09-07 | CONFIRMADA | "President of the United States of America" / "Signed by Jimmy Carter" | fontes/documento/unts-1280-I-21086-en.txt |
| TB240 | s57 | cards_pessoa | Omar Torrijos · Head of Government of the Republic of Panama (1977) · data_do_cargo 1977-09-07 | CONFIRMADA | "Head of Government of the Republic of Panama" / "Signed by Omar Torrijos Herrera" (resolve o `_nao_conferido` do cargo) | fontes/documento/unts-1280-I-21086-en.txt |
| TB241 | s60 (s61) | cards_pessoa | Walter Mondale · Vice President of the United States (1979) · aviso "Photo from 1977" | CONFIRMADA | DSB, nov. 1979: "Vice President Mondale … remarks made October 1 at Albrook Air Force Base"; Commons: DateTimeOriginal "1977" | fontes/experiencia/departmentofstatd7979unit.txt; https://commons.wikimedia.org/wiki/File:Walter_Mondale_1977_vice_presidential_portrait.jpg |
| TB242 | s39 | rotulos_dado | 1,041 BORN IN THE CANAL ZONE | HERDADA (F063) | = TB021 | — |
| TB243 | s40 | rotulos_dado | FEB. 21, 1946 | HERDADA (A119) | = TB029 | — |
| TB244 | s42 | rotulos_dado | NOVEMBER 1948 | HERDADA (F083) | nota 1 do doc. 490: "The announcement was made on November 20, 1948" | fontes/mecanismo/frus1948v09-d490.txt |
| TB245 | s42 | rotulos_dado | DECEMBER 1948 | HERDADA (F083b, A124) | = TB051 | — |
| TB246 | s43 | rotulos_dado | 1950 | HERDADA (F084c) | = TB052 | — |
| TB247 | s44 | rotulos_dado | PUBLIC LAW 85-550 · 1958 | HERDADA (A128) | = TB062 | — |
| TB248 | s45 | rotulos_dado | FROM 1939 | HERDADA (A131) | = TB065 | — |
| TB249 | s46 | rotulos_dado | FROM DEC. 31, 1956 | HERDADA (A132) | = TB072 | — |
| TB250 | s48 | rotulos_dado | 1,580 OF 3,139 | HERDADA (F094) | = TB096; 1,580/3,139 = 50,3 % ("about half") | — |
| TB251 | s48 | rotulos_dado | 7 OF 3,113 | HERDADA (F095) | = TB098 | — |
| TB252 | s48 | rotulos_dado | 3 OF 3,688 | HERDADA (F096) | = TB100 | — |
| TB253 | s48 | rotulos_dado | Silver City · its name in the 1950 census | HERDADA (F097, A143) | = TB101–TB102 | — |
| TB254 | s48 (s49) | rotulos_dado | FROM 1960 | HERDADA (F101) | = TB104 | — |
| TB255 | s48 (s49) | rotulos_dado | SEPT. 7, 1960 | HERDADA (A145) | = TB108 | — |
| TB256 | s48 (s49) | rotulos_dado | then Thatcher Ferry Bridge · Oct. 12, 1962 | DIVERGE (o "then"; a data está CONFIRMADA) | = TB111 | ver TB111 |
| TB257 | s48 (s49) | rotulos_dado | Administration Building · October 1962 | HERDADA (F102b) | = TB113; o `_forma` ("a tela fica no mês") está certo | — |
| TB258 | s48 (s49) | rotulos_dado | JAN. 10, 1963 | HERDADA (F103c) | = TB117 | — |
| TB259 | s48 (s49) | rotulos_dado | DEC. 30, 1963 | HERDADA (F104) | = TB119 | — |
| TB260 | s48 (s49) | rotulos_dado | 17 SITES | HERDADA (A150) | = TB120; o `_divergencia_de_fonte` (16 do Gen. O'Meara, FRUS 1964–68, vol. XXXI, doc. 367) está certo (A151) | https://history.state.gov/historicaldocuments/frus1964-68v31/d367 |
| TB261 | s50 | rotulos_dado | JAN. 7, 1964 | HERDADA (A154) | = TB124 | — |
| TB262 | s51 | rotulos_dado | JAN. 9, 1964 | HERDADA (F107) | = TB132 | — |
| TB263 | s51 | rotulos_dado | ABOUT 200 STUDENTS | HERDADA (A158) | = TB136 | — |
| TB264 | s52 | rotulos_dado | JAN. 9, 1964 | NÃO ACHEI (o dia, na origem da foto) | = TB141; a fonte do próprio campo ("CIJ; NARA série 535455 (janeiro de 1964)") dá o dia pela CIJ e só o mês pela foto | https://catalog.archives.gov/id/218517740 |
| TB265 | s53 | rotulos_dado | ABOUT 7 P.M. | HERDADA (A162) | = TB145; o `_hedge` cobre o "6.45 to 7 p.m." | — |
| TB266 | s54 | rotulos_dado | JANUARY 1964 | HERDADA (B380) | = TB150 | — |
| TB267 | s54 | rotulos_dado | 4 U.S. SOLDIERS | HERDADA (F112) | = TB151 | — |
| TB268 | s54 | rotulos_dado | 24 PANAMANIANS KILLED | HERDADA (F112) | = TB153 | — |
| TB269 | s54 | rotulos_dado | JAN. 10, 1964 | HERDADA (F114) | = TB156 | — |
| TB270 | s56 | rotulos_dado | APRIL 3, 1964 | HERDADA (F116, B039) | = TB161 | — |
| TB271 | s57 | rotulos_dado | SEPT. 7, 1977 | HERDADA (F118) | = TB162 | — |
| TB272 | s58 | rotulos_dado | TWO-THIRDS · 67 | CONFIRMADA | = TB167; `valor_exato` 66.7 e o `por_que_diverge` estão certos | ver TB167 |
| TB273 | s58 | rotulos_dado | 68 | HERDADA (A176) | = TB170 | — |
| TB274 | s58 | rotulos_dado | 32 | HERDADA (A176) | = TB171 | — |
| TB275 | s58 | rotulos_dado | U.S. SENATE · APRIL 18, 1978 | HERDADA (A177) | = TB168 | — |
| TB276 | s59 | rotulos_dado | OCT. 1, 1979 | HERDADA (F120) | = TB172 | — |
| TB277 | s60 | rotulos_dado | 1904–1979 · 75 YEARS | HERDADA (F121, F121m) | 04/05/1904 → 01/10/1979 = 75 anos e 4 meses | — |
| TB278 | s60 | rotulos_dado | OCT. 1, 1979 | CONFIRMADA | = TB185 (Art. XI) | ver TB185 |
| TB279 | s62 | rotulos_dado | AUG. 14, 1979 | HERDADA (B071) | = TB197 | — |
| TB280 | s63 | rotulos_dado | 30 MONTHS | CONFIRMADA | Art. XI(4)(b), como o campo cita: "Within thirty calendar months from the date of entry into force of this Treaty, governmental services such as: (i) Police; (ii) Courts"; e XI(1): "thirty calendar months" | fontes/documento/unts-1280-I-21086-en.txt |
| TB281 | s63 | rotulos_dado | MARCH 31, 1982 | HERDADA (A188) | = TB202 | — |
| TB282 | s64 | rotulos_dado | UNTIL DEC. 31, 1999 | HERDADA (A190) | = TB211 | — |
| TB283 | s65 | rotulos_dado | A TREATY · 1903 · 10 MILES WIDE | HERDADA (F014) | = TB215 | — |
| TB284 | s65 | rotulos_dado | A LAW · 1912 · A GOVERNOR · JURIES OF U.S. CITIZENS | HERDADA (B011, B012, B015) | 37 Stat. 561 (Sec. 4) e 565 (Sec. 8), como o campo cita | — |
| TB285 | s65 | rotulos_dado | A SECOND TREATY · 1936 · WHO COULD LIVE INSIDE | HERDADA (B023) | 53 Stat. 1811, Art. III(2) | — |
| TB286 | s67 | rotulos_dado | Administration Building, Balboa · 2026 | HERDADA (F136; volátil) | = TB236 | fontes/evento/acp-en-history.txt |
| TB287 | s39 | _avisos_do_ano | Photo from 1954 | HERDADA (B353) | = TB019 | — |
| TB288 | s45 | _avisos_do_ano | Photo from 1955 | HERDADA (B356) | = TB064 | — |
| TB289 | s45 | _avisos_do_ano | Photo from 1956 | HERDADA (B359) | = TB068 | — |
| TB290 | s47 | _avisos_do_ano | Photo from 1918 | HERDADA (B362) | = TB079 | — |
| TB291 | s47 | _avisos_do_ano | Photo from 1921 | HERDADA (B365) | = TB080 | — |
| TB292 | s47 | _avisos_do_ano | Photo from 1953 (Balboa High School) | HERDADA (B368) | = TB087 | — |
| TB293 | s47 | _avisos_do_ano | Photo from 1953 (Paraíso) | HERDADA (B371) | = TB088 | — |
| TB294 | s50 | _avisos_do_ano | Photo from 1953 | CONFIRMADA | = TB125 (veredito novo) | https://catalog.archives.gov/id/202800567 |
| TB295 | s60 (s61) | _avisos_do_ano | Photo from 1977 | CONFIRMADA | = TB190 (veredito novo) | https://commons.wikimedia.org/wiki/File:Walter_Mondale_1977_vice_presidential_portrait.jpg |
| TB296 | s64 | _avisos_do_ano | Photo from 1988 | HERDADA (B389) | = TB209 | — |
| TB297 | geral | _regras_de_serie [1] | lugar e data em AP ('NOV. 18, 1903', 'SEPT. 2, 1914', 'FEB. 21, 1946', 'DEC. 31, 1956', 'APRIL 18, 1978', 'MARCH 31, 1982') | CONFIRMADA | as datas dos exemplos batem com as fontes; 1914: "Done at the City of Panama, the second day of September, in the year of our Lord, nineteen hundred and fourteen" | fontes/mecanismo/frus1915-d1732.txt |
| TB298 | geral | _regras_de_serie [2] | acentos: Colón, Cristóbal, Gatún, Paraíso, Ancón | CONFIRMADA | as quatro primeiras estão no roteiro; "Ancón" não aparece no roteiro, mas é o nome oficial (corregimiento de Ancón, OSM relation/11382233; F137). Sem efeito na tela | roteiros/zona-do-canal/roteiro-narrador.md |
| TB299 | geral | _regras_de_serie [3] | 'Canal Zone (1947 map)'; nunca 1960 nem 1964; 'Boundary as mapped in 1947' | HERDADA (A4, B112) | — | — |
| TB300 | geral | _regras_de_serie [4] | linha-1914-panama sem ano; só na s20 'Line as mapped in 1936' | HERDADA (A6, B116) | — | — |
| TB301 | geral | _regras_de_serie [5] | crédito de mapa '© MapTiler © OpenStreetMap contributors' a 56 px; cumpre o OSM | CONFIRMADA | identidade §6; CLAUDE.md (56 px, Lucas, 07/10/2026); ODbL (B106) | https://www.openstreetmap.org/copyright |
| TB302 | geral | _regras_de_serie [6] | documento federal real sem 'Source:'; folha recriada, número e cartão com 'Source: <instituição>, <ano>' | CONFIRMADA | domínio público federal, sem crédito obrigatório (B201–B215) | https://www.govinfo.gov/about/policies |
| TB303 | geral | _regras_de_serie [7] | títulos dos relatórios anuais (1915–1950; 1914; 1958–1968) | CONFIRMADA | lidos: "ANNUAL REPORT OF THE GOVERNOR OF THE PANAMA CANAL" (1915, 1920, 1940, 1950); "…ISTHMIAN CANAL COMMISSION AND THE PANAMA CANAL … 1914"; "PANAMA CANAL COMPANY CANAL ZONE GOVERNMENT ANNUAL REPORT" (1958, 1965, 1968) | fontes/ (os txt da tabela de entradas) |
| TB304 | geral | _regras_de_serie [8] | FRUS sempre por extenso | CONFIRMADA | é o nome da publicação (A210) | — |
| TB305 | geral | _regras_de_serie [9] | aviso do ano; s52, s54, s57 sem aviso; data do fato nunca sobre foto de outro dia | CONFIRMADA | vereditos: aviso_de_ano false em s52, s54, s57 e true nos 10 de `_avisos_do_ano`. Ver TB141: a própria regra pede o que a s52 não cumpre no dia | out/zona-do-canal/_pesquisa/conferencia-midia.json |
| TB306 | geral | _regras_de_serie [10] | palavras da folha entre aspas; 'white' e 'colored' atribuídos | HERDADA (F029, F084, F091) | — | — |
| TB307 | geral | _regras_de_serie [11] | Balboa 1960 = a cidade; 'BORN IN THE U.S.', nunca 'Americans' nem 'citizens' | HERDADA (F094; laudo herdado, T06) | — | — |
| TB308 | geral | _regras_de_serie [12] | 'Source: International Commission of Jurists, 1964', sem sigla | CONFIRMADA | A153, A205 | — |
| TB309 | geral | _instrucoes [1] s33 | nenhum '1970' antes de 'census' | NADA A CHECAR | ordem de tela, sem afirmação | — |
| TB310 | geral | _instrucoes [2] s08 | tempos da vinheta | NADA A CHECAR | tempo, sem afirmação | — |
| TB311 | geral | _instrucoes [3] s29 | a legenda de 1936 é opcional; nenhuma tira do caput | NADA A CHECAR | forma; coerente com B021–B029 | — |
| TB312 | geral | _instrucoes [4] s44 | duas tiras obrigatórias ("a página tem 950 px") | NADA A CHECAR | medida técnica, não vai à tela | — |
| TB313 | geral | _instrucoes [5] s16 | '3,988 HOUSES DESTROYED OR REMOVED (BY JUNE 30, 1915)' | HERDADA (A038, A039; conserto 4 do lote A) | — | — |
| TB314 | geral | _instrucoes [6] s22 | 'Photo from 1908' do pouso à saída da foto | CONFIRMADA | veredito atual: data_na_origem "January 1908", aviso_de_ano true (o B323 antigo dizia "sem aviso"; vale o veredito de hoje) | out/zona-do-canal/_pesquisa/conferencia-midia.json; https://catalog.archives.gov/id/100998772 |
| TB315 | geral | _instrucoes [7] s47 | a legenda do par entre as fotos, nunca presa à de Paraíso | HERDADA (A2) | — | — |
| TB316 | geral | _instrucoes [8] s48/s49 | 'Shaler Triangle' sem anel, 'approximate location'; 'Bridge of the Americas' + 'then Thatcher Ferry Bridge · Oct. 12, 1962' | DIVERGE (só o "then"; o resto HERDADA F102, A145) | = TB111 | ver TB111 |
| TB317 | geral | _instrucoes [9] s57 | nenhum lugar sobre as fotos; o cargo de Torrijos | CONFIRMADA | B382/B385 (lugar_na_origem null); UNTS (TB166) | — |
| TB318 | geral | _instrucoes [10] s60 (s61) | retrato de Mondale sem rótulo de lugar e sem crédito; 'Photo from 1977' | CONFIRMADA | veredito novo: lugar_na_origem null, crédito "nenhum (retrato oficial…)"; Commons 1977 | https://commons.wikimedia.org/wiki/File:Walter_Mondale_1977_vice_presidential_portrait.jpg |
| TB319 | geral | _instrucoes [11] s01, s19, s67 | rótulos sobre o footage s01-a só com o lugar_na_origem do clipe | CONFIRMADA (a regra) | coerente com midia §2.7 e roupa §5; a s67 não carrega a condição na entrada (TB340) | — |
| TB320 | geral | _pergunta_cta | "Where would you draw the line?" (30 caracteres; sem data relativa) | NADA A CHECAR | pergunta, sem afirmação; a conta dos 30 caracteres fecha | — |
| TB321 | geral | _espera_o_lucas [1] p. 3, 6, 8 | 'Where would you draw the line?' | NADA A CHECAR | = TB238 | — |
| TB322 | geral | _espera_o_lucas [2] p. 4 | 'SEPT. 7, 1977', cards de Carter e Torrijos; 'Miraflores Locks', 'Photo from 1988', 'Panama Canal Commission', 'UNTIL DEC. 31, 1999' | CONFIRMADA | = TB162–TB166, TB208–TB211 | — |
| TB323 | geral | _espera_o_lucas [3] p. 5, 11 | 'OTHER COUNTS DIFFER'; os 21 e 22 da imprensa panamenha não vão | HERDADA (F113, A168) | — | — |
| TB324 | geral | _espera_o_lucas [4] p. 7 | 'Miraflores Locks' só se a origem do clipe nomear as eclusas | CONFIRMADA (a regra) | o clipe s64-a não tem veredito; nada a afirmar até ele | — |
| TB325 | geral | _espera_o_lucas [5] p. 9 | 'Balboa High School', 'Photo from 1953', 'JAN. 7, 1964' na mesa | CONFIRMADA | = TB123–TB125 | — |
| TB326 | geral | _espera_o_lucas [6] p. 12 | 'THE PANAMA CANAL REVIEW' e 'OCT. 1, 1979' (s32) | HERDADA (B054, B055, F053c) | — | — |
| TB327 | geral | _espera_o_lucas [7] p. 13 | as folhas recriadas | CONFIRMADA | os folha_texto do lote, conferidos letra a letra: TB027, TB033, TB040, TB045, TB127, TB229 (e TB002, TB010, TB195) | — |
| TB328 | geral | _espera_o_lucas [8] p. 15 | 'Panama City' e 'Colón' do lado de fora da linha | HERDADA (F015) | — | — |
| TB329 | geral | _espera_o_lucas [9] p. 16 | 'FROM 1960' / 'Panama's flag at chosen sites', sem bandeira | HERDADA (F101) | — | — |
| TB330 | geral | _espera_o_lucas [10] p. 18 | 'A SECOND TREATY · 1936 · WHO COULD LIVE INSIDE' | HERDADA (F130, B073; A3) | — | — |
| TB331 | geral | _espera_o_lucas [11] p. 1 | relevo 3D: nenhum texto muda | NADA A CHECAR | — | — |
| TB332 | geral | _espera_o_lucas [12] p. 2 | paleta: nenhum texto muda | NADA A CHECAR | — | — |
| TB333 | s48, s60, s65 | geometria | o contorno `zona-do-canal-1947` (3ª rodada) sob "Canal Zone (1947 map)" | CONFIRMADA à escala da Zona inteira (B109 resolvido) | área de 547,55 mi² contra 552,95 do relatório de 1940 (−1,0 %); vistos o contorno sobre a folha (v-zona.jpg: o polígono segue o traço "— · —" da folha) e o recorte de Madden (v-r3-zona-nova.jpg: o lago e a cota de 260 pés, pela nota da própria folha, "Where the Boundary Line is omitted it follows the continuous 260' contour around Madden Lake"). O vão de ~200 m e a fita estreita do Chagres, já declarados, não aparecem nessa escala | out/zona-do-canal/_tmp/pesquisa-geo/v-zona.jpg; …/r3/v-r3-zona-nova.jpg; fontes/annualreportofgo1940cana.txt |
| TB334 | s48 | geometria | `divisa-zona-1947` perto de Colón (só com "Boundary as mapped in 1947") | CONFIRMADA à escala da Zona (B113 resolvido) | os traços acompanham o "— · —" da folha entre Colón e Cristóbal (v-zona.jpg; v1947-colon.jpg mostra a tinta da folha nesse trecho). Close na divisa não foi conferido, e a regência o proíbe | out/zona-do-canal/_tmp/pesquisa-geo/v-zona.jpg; …/r2/v1947-colon.jpg |
| TB335 | s48 | geometria | posições de `lugares-1947` › Paraiso e › Silver City (rótulos "Paraíso" e "Rainbow City") | CONFIRMADA à escala de cidade (B127 resolvido, sem imagem) | Paraíso: a 185 m do hamlet do OSM (node/5866636842) e a 381 m da coordenada da Wikipedia (9.0333, -79.625). Silver City: a 318 m do Estadio Armando Dely Valdés, "en la comunidad de Arco Iris" (es.wikipedia, 9.344049, -79.89584) | https://en.wikipedia.org/wiki/Para%C3%ADso,_Panam%C3%A1_Province; https://es.wikipedia.org/wiki/Estadio_Armando_Dely_Vald%C3%A9s |
| TB336 | s46 | geometria | o ponto `lugares-1936` › Balboa Commissary | CONFIRMADA (lado da Zona); a posição exata NÃO ACHEI em fonte independente | a ≥ 0,9 km a oeste da linha-1914; a leitura da folha de 1936 (±95 m, declarada) não muda nada na escala da s46 | _media/geo/lugares-1936.json |
| TB337 | s48, s51, s53 | geometria | o ponto `balboa-high-school` | CONFIRMADA | centro do OSM way/609527463 a 45 m da coordenada da Wikipedia (8.95898611, -79.55735278) | https://en.wikipedia.org/wiki/Balboa_High_School_(Panama) |
| TB338 | s48 | geometria | o anel na ponte (OSM ways 147612377 e 863696429) | CONFIRMADA | OSM "Puente de las Américas" / "Bridge of the Americas" (B122) | https://www.openstreetmap.org/way/147612377 |
| TB339 | s59 | página real | as datas impressas no cabeçalho de 33 Stat. 2234, à vista na página | CONFIRMADA (B074 resolvido) | a imagem diz "ratification advised by the Senate, February 23, 1904; ratified by the President, February 25, 1904; … proclaimed, February 26, 1904". O "1905" era do OCR, que lê o "4" itálico como "5": a página não tem erro | fontes/documento/stat-33-2234-p1-datas.png |
| TB340 | s67 | âncora | "Panama Canal Authority" / "Administration Building, Balboa · 2026" apontando o prédio no footage s01-a | NÃO FOI CHECADO (o clipe s01-a não está no disco: caça pendente, sem veredito nem lugar_na_origem) | o texto está certo (TB235–TB237); falta saber se o footage mostra o prédio | — |

## CONSERTOS DE TELA

- **[MÉDIO]** s67 · t0 3.933 (rótulo `Panama Canal Authority`, legenda `Administration Building, Balboa · 2026` e crédito `Source: Panama Canal Authority, 2026`).
  - Texto atual, sem `_condicao` → acrescentar nas três entradas: `"_condicao": "sobre o footage s01-a: o rótulo só aponta o prédio se o lugar_na_origem do veredito aprovado do clipe nomear o Administration Building (Balboa Heights); sem isso, o texto entra como cartão, sem seta nem anel; no fallback de mapa, preso a pontos-osm-hoje › administration-building-balboa-heights"`.
  - Por quê: é rótulo de lugar sobre mídia real sem veredito (midia §2.7; roupa §5). As entradas da s01 têm a condição, e as da s67 não.
  - O texto está certo. RAIZ: PONTUAL.
- **[LEVE]** s48 (s49) · t0 42.62 · `then Thatcher Ferry Bridge · Oct. 12, 1962` → `also called Thatcher Ferry Bridge · Oct. 12, 1962`.
  - Por quê: a CIJ (1964) usa os dois nomes ao mesmo tempo, "Bridge of the Americas (Thatcher Ferry Bridge)". O Panamá a inaugurou como Puente de las Américas em 12/10/1962, e "Thatcher Ferry Bridge" era o nome dado por Washington, usado pelos zonians até 1981 (La Estrella, 2018). O "then" põe o nome de um lado como o nome da época.
  - Mesma troca no `rotulos_dado` da s48 (s49) e na `_instrucoes_para_a_arte` s48/s49.
  - A data fica. RAIZ: INSTRUÇÃO: o "THEN" veio do conserto 6 do laudo da pesquisa (A146), e o erro é do verificador.
- **[LEVE]** s52 · t0 0.0 · `JAN. 9, 1964` → `JANUARY 1964`, sobre a foto, como na s54.
  - A outra saída: manter `JAN. 9, 1964` na mesa, fora da foto, como na s50.
  - Por quê: a origem (NARA 218517740, série 535455) data o item só em janeiro de 1964, e o dia 9 é da CIJ, não da foto.
  - Mesma troca no `rotulos_dado` da s52. RAIZ: PONTUAL.
- **[LEVE]** s65 · t0 28.633 · `"U.S." rates` / `"local" rates` no lugar de `"gold"` / `"silver"`, presos a Balboa e La Boca. A troca sai das cidades e vai para a etiqueta da folha de pagamento: `THEN "U.S." RATES · "LOCAL" RATES`, sem prender `"local"` a La Boca.
  - Por quê: o relatório de 1950 dá os termos da folha de pagamento, não das cidades. Ele não chama La Boca de cidade "local-rate". O `"gold"` e o `"silver"` presos às cidades ficam, porque o relatório de 1914 nomeia o "gold site at Balboa" e o "silver settlement".
  - RAIZ: PONTUAL.
- **[LEVE, opcional]** s59 · t0 8.033 · `ART. II · NOV. 18, 1903 · 33 STAT. 2234` → `ART. II · NOV. 18, 1903 · 33 STAT. 2234–2235`.
  - Por quê: a tira ampliada de 9.267 traz a finalidade ("construction, maintenance, operation, sanitation and protection of said Canal"), que está no topo da p. 2235, não na página à vista.
  - RAIZ: PONTUAL.

A tela não diverge da voz em nada: nenhum conserto pede regravação.

## LISTA DE NOMES

O texto de tela deixa sem nome, de propósito, quem a voz não nomeia. Para referência:
- "State Department memo, Sept. 28, 1956" (s46) → John Foster Dulles, Secretário de Estado: "Memorandum From the Secretary of State to the President", assinado "JFD". A frase está no relatório anexo. FRUS 1955–1957, vol. VII, doc. 161: https://history.state.gov/historicaldocuments/frus1955-57v07/d161
- O memorando de 08/12/1948 (s42) → W. Tapley Bennett, "Acting Assistant Chief of the Division of Central America and Panama Affairs". FRUS 1948, vol. IX, doc. 490: https://history.state.gov/historicaldocuments/frus1948v09/d490
- "From the Secretary of State to the Vice President" (s62) → Cyrus Vance a Walter Mondale (herdado, B071).
- "the Governor's orders" (s50) → Maj. Gen. Robert J. Fleming Jr., "the Governor of the Canal Zone" (CIJ §5; herdado).
- s40 e s41 → o embaixador Frank T. Hines e o governador Maj. Gen. J. C. Mehaffey (FRUS 1946, vol. XI, docs. 927 e 931; herdado).
- "U.S. National Archives, 2014" (s54) → Patrice Brown, Senior NDC Archivist, NDC Blog, 03/11/2014 (herdado).
- "International Commission of Jurists" (s51) → o Investigating Committee: Prof. A. D. Belinfante, Judge Gustaf Petrén e Navroz Vakil (herdado).

## Os 2 padrões mais vistos

1. **Os consertos dos laudos chegaram à tela.** No lote, estão aplicados A2, A4, A6, A8, A9, A13, A118, A130, A151, A183, A208 e o conserto 13. O redator usou o `lugar_na_origem` do conferente, nunca o da pauta.
2. **A âncora mais firme que a fonte:** o dia sobre a foto que só tem o mês (s52), o "then" que escolhe o nome de um lado (s49), o termo de folha de pagamento preso a uma cidade (s65) e o rótulo sobre footage sem veredito (s67).

## O que vai à Sala

- **NÃO FOI CHECADO:** TB340, a âncora da s67 sobre o footage s01-a. Falta insumo: a caça está pendente, e o clipe não tem veredito. Nenhum item ficou sem veredito por recusa de robô.
- **Os 16 NÃO FOI CHECADO do laudo da pesquisa:**
  - foram à tela neste lote e estão resolvidos:
    - B074, pela imagem: a página diz 1904;
    - B109, por 2 imagens e pela área;
    - B113, à escala da Zona;
    - B127, pela conta, sem imagem;
  - não vão à tela neste lote: A004, A006, A013, A078, A084, A085, A106 (cenas do lote A, ou fora da tela), A140, A141, A142, A144 (opcionais da s48 que o redator não usou) e B115 (o autor da folha de 1936, que vai à descrição).
- **Para o lote A:** a instrução da s22 ("Photo from 1908") segue o veredito de hoje do conferente (`aviso_de_ano: true`), que mudou depois do B323 antigo ("sem aviso"). O texto da s22 é do lote A.
- **Voláteis:**
  - A folha recriada do 8 FAM 302.4-2 (s37 e s38) está na versão CT:CITZ-135, de 01-09-2026. Muda se o Departamento revisar a subseção, e fica se a versão continuar. Reconferir na véspera de publicar.
  - A ACP no Administration Building de Balboa, "© 2026" (s67): reconferir na véspera. Muda se a sede ou o rodapé mudarem. Se o vídeo sair em 2027, o "2026" continua verdadeiro como data da leitura.
  - Os pontos do OSM são de 15/10/2026 e não vão à tela com data.
- **DECISÕES DO LUCAS PENDENTES que tocaram esta checagem:**
  - perguntas 3, 6 e 8: a tela final e o comentário (s67/s68);
  - pergunta 4: as fotos de época abaixo de 4K (s57, s64);
  - perguntas 5 e 11: as contagens da imprensa panamenha (s54);
  - pergunta 7: o B-roll de hoje de Miraflores;
  - pergunta 9: as fotos do Departamento de Estado (s50);
  - pergunta 13: as páginas do Internet Archive, recriadas (s41, s50);
  - pergunta 15: Panama City e Colón sem polígono (s46, s65);
  - pergunta 16: as bandeiras sobre o mapa (s49);
  - pergunta 18: o "only" da voz da s65;
  - onde gravar os laudos dos próximos vídeos (roupa §2).

VEREDITO: RESSALVA

# Lote B · reconferência 1

## Reconferência (lote B, textos-tela.json sha256 `238bd36b…3caff`, 15/10/2026)

COBERTURA: 15 de 15. Os itens mudados saem de um diff do arquivo novo contra a extração que eu tinha lido (sha256 `4b27e7dd5fbf`, com as cenas s37–s68 e as seções gerais). Fora o que a Sala listou, só mudaram três coisas: uma instrução nova para a arte, a da s16 (TB342), e dois itens que saíram do `_nao_conferido`, que são do lote A. Imagens abertas nesta rodada: 0, e o total do lote continua em 4.

- **TB111** · s48 (s49) · t0 42.62 · `also called Thatcher Ferry Bridge · Oct. 12, 1962` → CONFIRMADA. A CIJ dá os dois nomes ao mesmo tempo, e a inauguração foi em 12/10/1962.
- **TB256** · o `rotulos_dado` da s48 (s49), com a mesma forma → CONFIRMADA.
- **TB316** · a instrução para a arte s48/s49, com o `also called` → CONFIRMADA.
- **TB343** · o glossário › "Bridge of the Americas" (`fonte` e `_variante_confere` com o `also called`) → CONFIRMADA, pela CIJ e pelo OSM. O pedido à regência da s49 também já traz o `also called`: não vai à tela, e está coerente.
- **TB141** · s52 · t0 0.0 · `JANUARY 1964` → CONFIRMADA. A NARA 218517740 data a foto só em janeiro de 1964.
- **TB264** · o `rotulos_dado` da s52, `JANUARY 1964` / `1964-01`, com a fonte "NARA 218517740, série 535455" → CONFIRMADA.
- **TB177** · s59 · t0 8.033 · `ART. II · NOV. 18, 1903 · 33 STAT. 2234–2235` → CONFIRMADA. O Art. II começa na p. 2234 e a finalidade está no topo da p. 2235.
- **TB223 e TB224** · s65 · t0 28.633 · os dois rótulos presos a Balboa e a La Boca → saíram (conserto aplicado).
- **TB341** (novo) · s65 · t0 28.633 · legenda `THEN "U.S." RATES · "LOCAL" RATES` → HERDADA (F084, F131). São termos da folha de pagamento, agora soltos das cidades. Os `"gold"` e `"silver"` de t0 27.033 continuam presos às cidades: HERDADA (F022, F022b).
- **TB306** · a regra de série das palavras da folha de pagamento, ajustada → CONFIRMADA. Ela diz que na s65 os dois termos vão só na etiqueta da folha.
- **TB235, TB236 e TB237** · s67 · t0 3.933 · as três entradas com o `_condicao` → CONFIRMADA. O texto da condição é literal, igual ao conserto, e é o mesmo nas três. O texto de tela não mudou: HERDADA (F136; volátil).
- **TB340** · a âncora da s67 sobre o footage s01-a → deixa de ser NÃO FOI CHECADO. Agora a condição segura o rótulo: ele só aponta o prédio se o veredito do clipe nomear o Administration Building. Até lá, NADA A CHECAR.
- **TB342** (novo, não anunciado) · instrução para a arte da s16: "a folha de 1947 soma a área do lago Madden (Decreto 43 de 1928)" → NÃO ACHEI (o "Decreto 43 de 1928").
  - A pauta-geo (3ª rodada) cita para a área de Madden a EO 5704, de 02/09/1931 (https://www.presidency.ucsb.edu/node/361387).
  - A busca de hoje não achou nenhum decreto 43 de 1928. Ela também não confirma que a EO 5704 transferiu a terra: a ordem trata dos distritos judiciais e cita uma área de ~26 sq mi (https://www.presidency.ucsb.edu/documents/executive-order-5880-delimiting-canal-zone-judicial-districts).
  - O resto da instrução se sustenta: o relatório de 1940 mede a Zona "inclusive of Madden Lake".
  - O texto não vai à tela. O texto de tela da s16 ("Canal Zone as mapped in 1947 (larger than in 1912)") é do lote A.

**O conserto que ainda falta:** [LEVE] na instrução para a arte da s16 e na `nota` da s16 · t0 2.733, trocar "(Decreto 43 de 1928)" por "(o relatório de 1940 mede a Zona 'inclusive of Madden Lake')". Por quê: o decreto não se acha, e o instrumento que juntou a área de Madden à Zona não está conferido. Nada na tela muda.

**Para a Sala:** do `_nao_conferido` saíram "Fort Amador como base em 1970" e "'Gold Clubhouse, Balboa'", que são das cenas s34 e s22, do lote A. A saída deles é com o lote A.

NOTA: 9.6/10. Os quatro consertos chegaram à tela com o texto pedido, e o único item que sobra (o "Decreto 43") está numa instrução e numa nota, fora da tela.

VEREDITO: PASS

# Lote B · reconferência 2

## Reconferência 2 (textos-tela.json sha256 `f1eadd10…3958dd`, 15/10/2026)

COBERTURA: 3 de 6. Os itens 2a, 2b e 2c ficaram NÃO FOI CHECADO: não guardei cópia da versão 238bd36b, e os três são do lote A. A cópia de agora está em `%TEMP%/claude/vf-tela-B/textos-f1eadd.json`. Abri 0 imagens.

- **1a. A nota da s16 · t0 2.733 → DIVERGE** (fora da tela, periférica). Abri a EO 5880, de 09/07/1932: https://www.presidency.ucsb.edu/documents/executive-order-5880-delimiting-canal-zone-judicial-districts.
  - O "Decree No. 43" cobre só a faixa da Madden Road: "The area hereinabove described is that in which jurisdiction was ceded to the Government of the United States by the Government of the Republic of Panama, in Decree No. 43 of October 27, 1928, … during the period of construction of the Madden Dam." A "área descrita acima" é a faixa: "A strip of land 200 ft. in width … from the center line of the Madden Road".
  - "the additional land acquired by the United States on the left bank of the Rio Chagres in the vicinity of the Madden Dam" só aparece como marco do traçado da estrada. A ordem não diz por qual instrumento essa terra foi adquirida.
  - Pelo decreto, o que se cedeu foi a jurisdição, não a terra.
  - A citação de 1940 está CONFIRMADA (B108): "Water area of the Canal Zone (inclusive of Madden Lake to + 260-foot contour) 190. 94".
- **1b. A instrução para a arte da s16** (o mesmo texto) → DIVERGE, pelo mesmo motivo.
- **2a, 2b e 2c → NÃO FOI CHECADO, pelos dois motivos acima:** o glossário "Fort Amador" (TA225 e TA325), o glossário "Gold Clubhouse, Balboa" (TA127) e a nota da s22 · t0 20.233 (TA127). Pelo que se lê hoje, mudaram só os campos `fonte` e `nota`, que registram a confirmação do lote A. O texto de tela de cada um é "Fort Amador" e "Gold Clubhouse, Balboa".
- **3. O diff do meu escopo (s37–s68 e as seções gerais) → CHECADO E LIMPO.** Comparei contra a minha extração original, sha256 `4b27e7dd5fbf`. As diferenças são só os consertos da Reconferência 1 e o texto novo da instrução da s16. Nenhum texto de tela do lote B mudou.

**O conserto que falta** · [LEVE] · a nota da s16 · t0 2.733 e a instrução para a arte da s16:
- texto atual: `terras junto à represa Madden e a faixa da Madden Road, cedidas pelo "Decree No. 43 of October 27, 1928", como a EO 5880 (09/07/1932) as cita`;
- texto novo: `a faixa da Madden Road, onde o Panamá cedeu a jurisdição "in Decree No. 43 of October 27, 1928, … during the period of construction of the Madden Dam" (EO 5880, 09/07/1932), e "the additional land acquired by the United States on the left bank of the Rio Chagres in the vicinity of the Madden Dam", que a mesma EO cita sem dar o instrumento`;
- o resto (a medida de 1940) fica;
- por quê: a EO põe o decreto só na faixa da estrada, e fala de jurisdição, não de terra. Nada na tela muda.

VEREDITO: RESSALVA

# Lote B · reconferência 3

## Reconferência 3 (textos-tela.json sha256 `ee9c74a0…1c05d8c`, 15/10/2026)

COBERTURA: 4 de 4. Abri 0 imagens.

- **1a. A nota da s16 · t0 2.733 → CONFIRMADA.** O texto é igual, letra a letra, ao conserto da Reconferência 2. As duas citações batem com a EO 5880, de 09/07/1932: "in Decree No. 43 of October 27, 1928, … during the period of construction of the Madden Dam" e "the additional land acquired by the United States on the left bank of the Rio Chagres in the vicinity of the Madden Dam" (https://www.presidency.ucsb.edu/documents/executive-order-5880-delimiting-canal-zone-judicial-districts). A medida de 1940 continua CONFIRMADA (B108).
- **1b. O item da s16 em `_instrucoes_para_a_arte` → CONFIRMADA.** O trecho trocado é o mesmo da nota, e o resto ficou igual.
- **2. O diff contra a cópia f1eadd10, campo a campo → CHECADO E LIMPO.** Só mudaram `_textos_por_cena[75].nota` (a s16 · t0 2.733) e `_instrucoes_para_a_arte[4]`. Nenhum texto de tela mudou.
- **3. Os ids do glossário, só lidos → CONFIRMADA a citação.** "Fort Amador" cita "TA225 e TA325", e "Gold Clubhouse, Balboa" e a nota da s22 · t0 20.233 citam "TA127". O veredito sobre esses ids é do lote A.

Não falta conserto no lote B.

VEREDITO: PASS

---

# Fecho do setor

O PASS acima é só do lote B. O laudo inteiro fica como a cabeça diz: o lote A continua em RESSALVA, pela cobertura parcial em TA385.

VEREDITO: RESSALVA
