# Laudo-delta da pesquisa · verificador de fatos · atlantico-fundo (vídeo 4) · 29/10/2026

Setor Texto e fatos, tarefa `atlantico-fundo-texto-1`, passo `screen_text`, com data-base de 29/10/2026.

**O que foi julgado:** toda afirmação nova que a pesquisa trouxe e que pode ir à tela. Isso inclui número, data, nome, cargo, lugar, citação,
grifo de documento, e o rótulo de lugar e de ano das fotos aprovadas. A checagem foi por cobertura, em dois lotes de `verificador-de-fatos`, em
paralelo:
- **o lote A,** de s01 a s37 do espelho;
- **o lote B,** de s38 a s75, mais o que não tem cena.

**O que não se refez:** o que o laudo do roteiro (`fatos.laudo.md`, PASS, 285 de 285) já tinha confirmado. Isso se cita pelo id e fica fora da
conta.

**Os vereditos de mídia:** o `conferencia-midia.json` mudou durante a tarefa, de `0764c529…` para `a9565fb8…` (o lote 7 do conferente, commit
`c8ec95a`, às 03:40).
- **O lote A** releu a versão nova e pôs os itens dela no próprio laudo.
- **O lote B** foi retomado pelo setor para um acréscimo só com o lote 7 (PB130 a PB160), no fim do arquivo dele. O setor conferiu que o que
  vinha antes não mudou: os primeiros 62.243 bytes continuam com o sha256 `b67bbb6a…`.

## A soma (o setor, dos dois lotes)

| lote | cobertura | CONFIRMADA | DIVERGE | NÃO ACHEI | REFUTADA | citados do roteiro | nota | veredito |
|---|---|---|---|---|---|---|---|---|
| A (s01–s37) | 59 de 59 | 46 | 7 | 6 | 0 | 62 | 8,2 | RESSALVA |
| B (s38–s75, sem cena; com o acréscimo do lote 7) | 147 de 147 | 130 | 14 | 3 | 0 | 12 (e 1 NADA A CHECAR) | 8,5 | RESSALVA |
| **total** | **206 de 206** | **176** | **21** | **9** | **0** | **74** | | **RESSALVA** |

- **Divergência da voz:** nenhuma, nos dois lotes. Nada a regravar.
- **Cada lote vai abaixo como o verificador o gravou,** copiado sem mudar uma letra:
  - A: `%TEMP%/claude/vf-atl-A/laudo.md`, sha256 `f7c732804e2692d5fb4375cc2f3adaf317d610d18b700dcc5587c959cfc1c4ac`;
  - B: `%TEMP%/claude/vf-atl-B/laudo.md`, sha256 `1bf585e42443e614e87c3e52fa686ca3cf13267e5fecd2f07e99c712fb18e1ba`.
- **O que é de quem:**
  - o que vai à tela, nas seções "Para o redator-de-tela";
  - o que é da Sala, nas seções "Para a Sala": os NÃO FOI CHECADO, com as URLs.

---

# Lote A (s01–s37), como o verificador gravou

COBERTURA: 59 de 59 (lote A, s01 a s37; lista derivada à mão, pela leitura integral das entradas; 62 itens só citam o laudo do roteiro e ficam fora da conta)

# Laudo-delta da pesquisa · verificador-de-fatos · atlantico-fundo (vídeo 4) · lote A (s01–s37) · passo screen_text

- **Data-base:** 29/10/2026 (verificação feita entre 03:00 e 03:40, hora de Brasília).
- **Tarefa:** `atlantico-fundo-texto-1`, lote A. O lote B (s38–s75 e o que não tem cena) roda em paralelo, com outro agente.
- **Como a lista foi derivada:** à mão, sem script de lista. Li inteiras, para as cenas s01 a s37:
  - os `_grafias`, `needs.dados`, `needs.geo` e `_planos` do espelho;
  - os `_dados/sNN.json` (`texto_para_tela`, `credito_sugerido`, `legenda`, `valores`, `nota`);
  - as 6 pautas e os `.md` delas (a de logos está vazia; os nomes escritos dela entram como um item);
  - os vereditos `aprovado` do `conferencia-midia.json` (lugar, data, aviso do ano e crédito);
  - os `nao_conferido` e `bloqueios` da `pauta-geo` que caem no lote;
  - a verificação do research e as notas para os passos seguintes.
  - Cada texto que pode ir à tela virou uma linha. Quem já tinha veredito no laudo do roteiro (`F…`) foi para a tabela de citados (C01–C62) e não entra na conta.
- **O que li, com o sha256:**
  - `out/atlantico-fundo/_pesquisa/conferencia-midia.json`: li `0764c529c261c10fa35ceb6bed823b2737f751c21810ccb5d804fd189ef4e88f` (lotes 1 a 6, `conferido_em` 2026-10-29T01:27:32-03:00) para o trabalho inteiro.
    - No fim da tarefa, o arquivo tinha mudado: `a9565fb8d84aca3a335f51ca4d766119ed5f7ae5d102c57bccc3b42e759a8c41` (lote 7, `conferido_em` 2026-10-29T03:40:27-03:00).
    - Reli as cenas s01–s37 dele: nos vereditos que já existiam, nada mudou em lugar, data, aviso, crédito nem veredito (só as janelas, agora pela regência).
    - O lote 7 traz dois vereditos novos no lote A: o reuso da ISS071-E-1036 na s02 (o mesmo lugar, a mesma data e o mesmo crédito da s01) e a ISS071-E-1042 como reserva da s10 (PA059).
  - `out/atlantico-fundo/espelho.json`: `1f51c82ff85cb652094aa7716131ede436ddb65298d8fa0ee710b1d6cfcb0b5f` (montado em 2026-10-29T05:18:06Z, depois das fusões do diretor).
  - As pautas: dados `8a90ddae…`, documentos `02a44557…`, geo `871c0262…`, imagens `1a0cfcb5…`, logos `3b7d3f87…`, pessoas `e421a807…`.
  - O roteiro `ca4ac18d…`, a tabela de fatos `1aa0713f…`, o dossiê `378ddfad…` e as notas `7cd32bf9…`.
- **Rede:** WebSearch e WebFetch, um pedido por vez:
  - Wikipedia (Brownson, Denson Seamount);
  - Commons, as páginas de arquivo (s19, s24, s32);
  - OMAO/NOAA (Ronald H. Brown);
  - buscas pelo boletim de 1939 e pelo Challenger de 1873.
  - O history.navy.mil recusou a conexão (ECONNREFUSED), e não insisti.
  - Imagens abertas: 0.

NOTA: 8.2/10 · a pesquisa sustenta quase tudo o que propõe para a tela.
- Os números, as conversões e as distâncias fecham (refiz as contas).
- O que falha é a passagem da fonte para o rótulo curto: um qualificador da origem some ("in or before", "reconstructed", "more than", "reported in 1965"), ou a geometria do mapa afirma mais que a fonte.
- Nenhuma REFUTADA. Os 7 DIVERGE são periféricos e têm conserto de uma frase.

## Contagem

| veredito | itens |
|---|---|
| CONFIRMADA | 46 |
| DIVERGE | 7 (PA013, PA015, PA026, PA037, PA047, PA051, PA054) |
| NÃO ACHEI | 6 (PA006, PA007, PA009, PA023, PA036, PA057) |
| REFUTADA | 0 |
| **total com veredito** | **59 de 59** |
| citados do laudo do roteiro (fora da conta) | 62 (C01–C62) |

Fora do denominador, declarado:
- **NÃO FOI CHECADO, sem objeto:** o rótulo de lugar sobre o aéreo de banco da s10. O clipe não existe: a caça não rodou. O texto "Aguadilla, Puerto Rico" foi checado (PA012). O casamento dele com um clipe, não. A reserva aprovada no lote 7, a ISS071-E-1042, foi checada (PA059).
- **NÃO FOI CHECADO, fora das ferramentas desta tarefa:** o polígono da área do multifeixe de 2002–2003 (`pauta-geo`, `nao_conferido` 3). As trilhas e o texto da fonte foram checados (PA047, PA048).

## A tabela (uma linha por item do lote)

| id | cena | afirmação (o que pode ir à tela) | veredito | o que a fonte diz | fonte (URL ou arquivo local) |
|---|---|---|---|---|---|
| PA001 | s01, s02 (o reuso do lote 7) | A foto da ISS: Porto Rico inteiro, tirada em 6/4/2024; sem aviso do ano (a fala está no presente); rótulo de lugar no máximo "Puerto Rico" | CONFIRMADA | "These astronaut photographs were acquired on April 6, 2024, with a Nikon Z9 digital camera using a focal length of 50 millimeters for ISS071-E-1036"; "The top image offers a wide view of the island"; o EOL: "Date taken \| 2024.04.06" | `midia/atlantico-fundo/fontes/fb-nasa-eo-puerto-rico-from-above.txt` l. 50 e 72; `fb-nasa-eol-iss071-e-1036.txt` l. 18; science.nasa.gov/earth/earth-observatory/puerto-rico-from-above/ |
| PA002 | s02, s09 | Crédito "Source: Bongiovanni et al., 2021" | CONFIRMADA | "Cassandra Bongiovanni \| Heather A. Stewart \| Alan J. Jamieson"; "Accepted: 7 April 2021"; "© 2021 The Authors. Geoscience Data Journal". O volume é o 9, de 2022 ("Geosci. Data J. 2022;9:108–123"); o artigo é de 2021, como diz F193 | `02-bongiovanni-2021-gdj3.122.txt` l. 1–19; doi:10.1002/gdj3.122 |
| PA003 | s02, s04, s05, s07, s09, s13, s15, s18, s20, s23, s25, s28, s30, s31, s33, s35, s37 | Crédito do fundo: "GEBCO Compilation Group (2026) GEBCO 2026 Grid" | CONFIRMADA | A documentação que vem no zip: "Data set reference / GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)" | `out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/GEBCO_Grid_documentation.txt` l. 131–133; `fa-gebco-terms-of-use.txt` l. 33 |
| PA004 | s03 | A legenda "about 1,545 ft would stay above the sea" e o crédito "Source: China & Nepal survey, 2020; Bongiovanni et al., 2021" | CONFIRMADA | AP: "China and Nepal jointly announced a new official height for Mount Everest"; "8,848.86 meters (29,031.7 feet)". A conta: 8.848,86 − 8.378 = 470,86 m = 1.544,8 ft | `sala-01-ap-everest-2020.txt` l. 3 e 5 |
| PA005 | s05, s26 | "REPORTED · 1964" (s05) e "REPORTED 1964, PUBLISHED 1965" (s26) | CONFIRMADA, com ressalva | A fala ("In 1964, a crew… reported a crowd of fish") já foi confirmada (F014, F016, F069). Mas a fonte data o relato de 1965: "The first direct observations … was reported in 1965 from depths of 7300 m in the Puerto Rico Trench". Nenhuma fonte lida diz que a tripulação relatou em 1964 | `fa-nora-528113-dsr1-2020.txt` l. 7 |
| PA006 | s05 p1, s30 p3 | A posição do batiscafo de 1964 e do "retalho" da tripulação no mapa ("longe do anel e fora do trecho mais fundo") | NÃO ACHEI | Nenhuma fonte lida dá o sítio do mergulho: o resumo de 2020 não tem coordenada. A profundidade está em disputa: 7.300 m no artigo de 2020; "approximately 8,300 meters" no release da Five Deeps. Com 8.300 m, o batiscafo estaria dentro do trecho de 8.000 m. A Wikipedia (citando o NYT, não lido) diz que ele desceu no que "was then thought to be the deepest part". "Fora do trecho mais fundo" não se sustenta, e qualquer ponto no mapa vira sítio inventado | `fa-nora-528113-dsr1-2020.txt` l. 3 e 7; `fb-fivedeeps-release-2018-12-21.txt` l. 19; dossiê F36 e N28 |
| PA007 | s05 p2, s06 p1, s26 p1 | No corte, os "peixes" ao longo de uma linha na parede, a ~24,000 ft, "com o fundo bem abaixo dela" | NÃO ACHEI | A fonte diz que o relato é de "benthic epifauna", a 7.300 m: o transecto foi sobre o fundo do mar àquela profundidade. A profundidade do fundo da fossa sob o sítio não está em fonte nenhuma. Ela é inferência do dossiê (C08), feita com o setor mais fundo do USGS, que fica noutro lugar | `fa-nora-528113-dsr1-2020.txt` l. 7; dossiê C08 |
| PA008 | s07 | Crédito "Source: Popular Science, 2018" | CONFIRMADA | "By Josh Dean / Published Dec 21, 2018 10:15 PM EST" | `fb-popsci-2018-12-21-vescovo.txt` l. 9, 23 e 25; popsci.com/victor-vescovo-five-deeps-submarine |
| PA009 | s08 | "(UNTIL AT LEAST 2019)" ao lado de "GEBCO GAZETTEER" | NÃO ACHEI | Nenhuma fonte data a ficha do gazetteer. A Tabela 1 e o §2.1.2 do estudo dizem "as published in the IHO-IOC GEBCO Gazetteer". O estudo foi recebido em 18/07/2018 e revisto em 05/07/2019, e não diz quando consultou a lista. O §5 do mesmo estudo diz que "only Challenger, Horizon and Scholl are recognised in the IHO-IOC GEBCO Gazetteer". O "até pelo menos 2019" é do dossiê (C10), não da fonte | `01-04-stewart-jamieson-2019-earscirev.txt` l. 90, 496, 591 e 1209–1212 |
| PA010 | s08 | O número da lista em pés: 28,675 FT (8,740 M) | CONFIRMADA | 8.740 m ÷ 0,3048 = 28.674,5 ft → 28,675. O espelho põe "8,740 M" primeiro, como se fosse o texto impresso. O impresso é a linha da Tabela 1 ("… \| 8740 \| GEBCO Gazetteer"). O rótulo do canal leva pés primeiro (identidade §7) | `01-04-stewart-jamieson-2019-earscirev.txt` (Tabela 1); conta refeita |
| PA011 | s08 | A nota da Tabela 1 (grifo opcional) e a legenda "GEBCO Gazetteer = the official list of undersea feature names (IHO–IOC)" | CONFIRMADA | "Note 'GEBCO Gazetteer' refers to the IHO-IOC GEBCO Gazetteer of Undersea Feature Names." O "official list" é o termo que F022 confirmou | `01-04-stewart-jamieson-2019-earscirev.txt` l. 496 |
| PA012 | s10 | O texto "Aguadilla, Puerto Rico" | CONFIRMADA, só o texto | Aguadilla é município de Porto Rico (Census, GEOID 72005), na costa noroeste, de frente para o ponto (F154). Sobre que clipe o rótulo pode ir não foi checado: o aéreo não existe (fora do denominador, acima) | `out/atlantico-fundo/_media/geo/aguadilla-municipio.json`; F154 |
| PA013 | s12 | O aviso das duas pranchas: "PHOTO: BEFORE 1880" (a pauta-imagens) | DIVERGE | A origem diz "ca. 1870 – in of voor 1880", isto é, "in or before 1880": o 1880 entra. São pranchas do livro de Sigsbee, de 1880. A categoria do Commons citada no veredito, "Blake (ship, 1874)", põe o navio a partir de 1874: "about 1870" também não serve | `conferencia-midia.json`, os vereditos s12 (`data_na_origem` e `criterios.contexto`); laudo da verificação do research, L08 |
| PA014 | s12 | As duas pranchas mostram o "Blake" da fala (o vapor e a máquina de sondagem a bordo dele) | CONFIRMADA | A inscrição da prancha 1: "The United States coast survey steamer 'G. S. Blake,' 350 tons, fitted for deep-sea sounding and dredging". A prancha 13: "Gezicht op de Sigsbee-sondeermachine op de George S. Blake". O relatório de 1883 chama o navio de "the steamer Blake" (F028). O sha1 do Commons foi conferido pela verificação do research | `conferencia-midia.json`, vereditos s12 (`fonte.titulo`); commons.wikimedia.org/wiki/File:1870s_United_States_Coast_and_Geodetic_Survey_steamer_George_S._Blake_(cropped).jpg |
| PA015 | s13 | A faixa "north of Puerto Rico" acesa, com o alfinete "1883 · BLAKE" | DIVERGE | A faixa é DECLARADA: vai da costa norte à borda sul da fossa de 7.000 m, com o topo em 19,419°N. O alfinete fica em 19,681°N, 66,394°W, dentro da fossa e fora da faixa. Medi ponto em polígono, sobre os próprios arquivos. A fonte põe a sondagem "about seventy-five miles to the northward of Porto Rico". A região acesa exclui o lugar de que a fala trata | `_media/geo/mar-ao-norte-de-porto-rico.json`, `sondagem-blake-1883.json`; `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3514–3515 |
| PA016 | s14 | O nome "Willard H. Brownson" e a ligação dele com o comando do Blake | CONFIRMADA | A nota biográfica do NHHC, lida pela Sala no navegador do app em 28/10/2026, às 15:2x: "In 1881, he was ordered to the Coast and Geodetic Survey as a Lieutenant Commander where he commanded the ship Blake until 1884." A Wikipedia diz o mesmo e é derivada do NHHC (não é independente): "Rear-Admiral Willard Herbert Brownson (July 8, 1845 – March 16, 1935)". A tabela de oficiais do relatório de 1883: "LIEUTENANT-COMMANDERS … W. H. Brownson … Aug. 11, 1881 … Still in service". O history.navy.mil recusou a minha conexão (ECONNREFUSED) | `out/atlantico-fundo/_tmp/pesquisa-pessoas/nhhc-brownson-2026-10-28.md` §3; en.wikipedia.org/wiki/Willard_H._Brownson; `04-uscgs-relatorio-1883-CSC-0082.txt` l. 7637–7640 |
| PA017 | s14 | "in command of the Blake since Oct. 1882" | CONFIRMADA, com ressalva | O Apêndice 5, p. 113: Bartlett "was relieved October 1, 1882, by Lieut. Commander W. H. Brownson". O corpo do relatório diz que a chefia do grupo hidrográfico do Blake passou a ele "in August, 1882", e que em 2 de agosto ele "reported on board for duty in anticipation of taking command of the Blake". O comando é de 01/10/1882 | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3961–3962, 4095–4096, 4212–4214 e 11455 |
| PA018 | s14 | O cargo no card: "Lieutenant-Commander, U.S. Navy", nunca "Rear Admiral" nem "Captain" | CONFIRMADA | O cargo de 1883 sai do relatório do próprio ano: "under command of Lieutenant Commander W. H. Brownson, U. S. N., Assistant Coast Survey" (a viagem de dez./1882 a fev./1883). A forma com hífen é a do relatório: "Lieutenant-Commander Brownson left Hamilton"; "LIEUTENANT-COMMANDERS". O índice tem uma linha "BROWNSON, W. H., COMMANDER", que destoa do texto e da tabela de oficiais. "Rear Admiral" é o posto da foto, de 1900–1909 | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 5804–5805, 5809, 7637–7640 (o índice, l. 629) |
| PA019 | s14 | O retrato NH 57975 é do comandante do Blake | CONFIRMADA | O veredito faz a ligação. O NH 57975 se intitula "Rear Admiral Willard H. Brownson, USN (1845-1935)", e a nota biográfica do mesmo NHHC põe esse Willard H. Brownson no comando do Blake até 1884. O relatório de 1883 dá "W. H. Brownson". A cadeia fecha pelo NHHC | `conferencia-midia.json`, veredito s14 (`criterios.contexto`, 1º motivo; `conferido_no_navegador_do_app`) |
| PA020 | s14 | O aviso "Photo from about 1900–1909" | CONFIRMADA | "After this Year: 1900 · Before this Year: 1909". O título do Commons: "… circa 1900-1909". "1907" é o ano do copyright impresso e o da legenda do cargo, não a data da foto. "The 1900s" se lê como o século | `conferencia-midia.json`, veredito s14 (`data_na_origem`) |
| PA021 | s12, s14, s15, s16 | A referência e o crédito "U.S. Coast and Geodetic Survey, 1883" | CONFIRMADA, com ressalva | A folha de rosto: "REPORT OF THE SUPERINTENDENT OF THE U. S. COAST AND GEODETIC SURVEY SHOWING THE PROGRESS OF THE WORK DURING THE FISCAL YEAR ENDING WITH JUNE, 1883. WASHINGTON: GOVERNMENT PRINTING OFFICE. 1884." O Tesouro o mandou ao Congresso em 18/12/1883. É o relatório de 1883, impresso em 1884 | `04-uscgs-relatorio-1883-CSC-0082.txt` p. 1 e p. 4 (l. 1–60) |
| PA022 | s15 | A legenda "Fathom = 6 feet, the unit of old depth soundings." | CONFIRMADA | A própria fonte de 1936 converte: "3,875 fathoms = 7,087 metres", ou 1,8289 m = 6,0003 ft por braça. O relatório de 1883 e a revista de 1936 sondam em braças | `04-ihr-1936-naming-nares-puerto-rico-deeps.txt` l. 6; conta refeita |
| PA023 | s15 | A temperatura de 1883 como número na tela ("36¼ °F", a leitura da pauta-documentos) | NÃO ACHEI | No texto legível o número sai corrompido: "36fO" na p. 8 e "3tif°" na p. 46. A pauta-documentos diz que o leu na imagem; eu não abro imagem nesta tarefa. A fala só diz "a reading of the water temperature" | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3516 e 5828 |
| PA024 | s16 | Grifo 1 (p. 8): "and the specimen-cup brought up brown ooze." | CONFIRMADA | p. 8: "The temperature at this depth was found to be 36?° Fahr., and the specimen·cup brought up brown ooze." O "·" é o hífen no OCR, como em "Geo· detic" | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3516 (PDF p. 35) |
| PA025 | s16 | Grifo 2: "No record is known of any sounding from which bottom specimen and temperature have been obtained at a depth equaling this." | CONFIRMADA, letra a letra | "No record / is known of any sounding from which bottom specimen and temperature have been obtained at a / depth equaling this." Está na p. 8, logo depois do grifo 1 | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3516–3518 (PDF p. 35); F039 |
| PA026 | s16 | A página dos dois grifos, como o espelho a descreve: "A p. 46 … e o trecho das l. 3516–3518" | DIVERGE | As l. 3516–3518 são da p. 8 (PDF p. 35), não da p. 46. A p. 46 (PDF p. 73) tem "finding the bottom to be brown ooze" e a frase irmã, "This is believed to be the greatest depth from which bottom specimens and temperature have been obtained.", mas não tem o "No record is known…". Só a p. 8 tem os dois grifos da fala | `04-uscgs-relatorio-1883-CSC-0082.txt` l. 3478–3518 e 5826–5829; `pauta-documentos.md`, divergência 1 |
| PA027 | s16 | '"BROWN OOZE" · 1883' | CONFIRMADA | "brown ooze", literal, nas duas páginas (p. 8 e p. 46) | idem, l. 3516 e 5828 |
| PA028 | s17 | "Capt. George Nares" | CONFIRMADA | A revista de 1936: "H.M.S. Challenger, Captain Sir George S. Nares". A página impressa ao lado do retrato (Men of Mark), lida pelo conferente: "SIR GEORGE STRONG NARES, K.C.B." e "From 1872 down to the end of 1874 Captain Nares was in command of Her Majesty's ship 'Challenger'". Sem "Sir" na tela | `04-ihr-1936-naming-nares-puerto-rico-deeps.txt` l. 4; `conferencia-midia.json`, veredito s17 (retrato), `o_que_viu` |
| PA029 | s17 | "Engraving, 1872" | CONFIRMADA | Commons: "Illustration for The Illustrated London News, 14 December 1872"; o conferente viu o "traço de gravura em madeira". A gravura entra por exceção do Lucas: "Pode usar a gravura (Recomendado)", 28/10, 17:5x | `conferencia-midia.json`, veredito s17 (gravura); commons.wikimedia.org/wiki/File:HMS_Challenger_(1858).jpg |
| PA030 | s17 | O aviso do retrato de Nares: "Photo from the 1870s" | CONFIRMADA | A origem: "ca. 1873 - in of voor 1878", isto é, ca. 1873 – em ou antes de 1878, dentro da década. A fotografia é um woodburytype, impresso no livro Men of Mark (1881) | `conferencia-midia.json`, veredito s17 (retrato), `data_na_origem` e `fonte.autor` |
| PA031 | s18 | Crédito "Source: International Hydrographic Review, 1936" | CONFIRMADA | A procedência: "'The Naming of Nares and Puerto Rico Deeps', The International Hydrographic Review XIII(1), 1936". O texto cita as edições de 1934 e 1935 | `midia/atlantico-fundo/fontes/_PROCEDENCIA.md` l. 12; `04-ihr-1936-…txt` l. 151–166; journals.lib.unb.ca/index.php/ihr/article/view/27837 |
| PA032 | s18 | A fossa acesa ("hundreds of miles"), com o alfinete do Challenger dentro dela | CONFIRMADA | A isóbata de 7.000 m tem 791 km de leste a oeste, e o ponto 19,7°N, 65,1167°W cai dentro dela (ponto em polígono, medido por mim). O USGS diz "the entire 770-km-long trench". F047 dá ~810 km | `_media/geo/fossa-porto-rico.json`, `sondagem-challenger.json`; `fb-usgs-seafloor-map.txt` l. 21 |
| PA033 | s19 | O aviso da foto do cruzador: "Photo from 1942" | CONFIRMADA | O Commons, que copia o NARA: "off the New York Naval Shipyard, New York City (USA), on 7 January 1942"; "Date: 7 January 1942"; 19-N-27088. Ressalva: o DANFS diz que o Milwaukee partiu de Nova York em 31/12/1941. O aviso segue a origem da foto | commons.wikimedia.org/wiki/File:USS_Milwaukee_(CL-5)_off_the_New_York_Naval_Shipyard_on_7_January_1942_(19-N-27088).jpg; `fb-ibiblio-danfs-milwaukee-cl5.txt` l. 33 |
| PA034 | s20 | "MILWAUKEE DEEP (1939)" como rótulo de região sobre a fossa, sem alfinete; o marcador do medidor "MORE THAN 28,000 FT (REPORTED)" | CONFIRMADA | The Sun: "The new depression has been named the Milwaukee Deep, from the United States cruiser". O DANFS dá só "north of Hispaniola and Puerto Rico", sem coordenada. As duas posições da lista ficam uma de cada lado do anel: a do gazetteer a 53,6 mi a leste, a de Lyman a 66,0 mi a oeste. No medidor, os 30.246 ft do DANFS passam do fim da régua (~28,700): o marcador é faixa ou seta acima de 28,000, nunca um ponto | `fb-thesun-1939-07-28-p3-ocr.txt` l. 28–33; `fb-ibiblio-danfs-milwaukee-cl5.txt` l. 27; `pauta-geo.md` (pontos) |
| PA035 | s20 | Crédito "Source: U.S. Navy; National Geographic Society, 1939" | CONFIRMADA | O DANFS ("DANFS: USS Milwaukee (CL-5)") e o boletim "Prepared by National Geographic Society, Washington. D. C.—WNU Service." | `fb-ibiblio-danfs-milwaukee-cl5.txt` l. 6; `fb-thesun-1939-07-28-p3-ocr.txt` l. 18–19 |
| PA036 | s21 | "28,680 FT · NEWSPAPERS, 1939" | NÃO ACHEI (o plural) | O número confere: "nearly five and a half miles (28,680 feet)" (F050). Mas só um jornal foi lido, The Sun (Newberry, S.C.), 28/07/1939. O "WNU Service" mostra distribuição a jornais e não prova outra impressão. Duas buscas por um segundo jornal não acharam nenhum | `fb-thesun-1939-07-28-p3-ocr.txt` l. 18–24; historicnewspapers.sc.edu/lccn/sn93067784/1939-07-28/ed-1/seq-3/ |
| PA037 | s21 | O `needs.dados` do espelho: "F29 (S09): 4.780 braças = 28.680 ft nos jornais de 1939" | DIVERGE | O jornal não traz braças: só "nearly five and a half miles (28,680 feet)" e "the new Milwaukee deep, 28,680 feet". As 4.780 braças são conta do canal (28.680 ÷ 6). O `_dados/s21.json` já o diz: "O jornal NÃO dá braças" | `fb-thesun-1939-07-28-p3-ocr.txt` l. 20–24 e 188–189 |
| PA038 | s21 | O título e a linha do boletim, para o grifo ou a recriação: "New Method Used to Map Ocean Floor"; "Prepared by National Geographic Society, Washington, D. C.—WNU Service." | CONFIRMADA | O OCR: "New Method / Used to Map / Ocean Floor"; "Record Soundings Made / In Atlantic Near / Puerto Rico."; "Prepared by National Geographic Society, / Washington. D. C.—WNU Service." O ponto em "Washington." deve ser vírgula na página. Na recriação, a pontuação se confere na imagem | `fb-thesun-1939-07-28-p3-ocr.txt` l. 11–19 |
| PA039 | s24 | A foto do Archimède: o crédito "Raimond Spekking / Wikimedia Commons · CC BY-SA 4.0", sem aviso do ano, e o rótulo de lugar no máximo "Cité de la Mer, Cherbourg" | CONFIRMADA | Commons: "French deep-sea submersible 'Archimède' at the Cité de la Mer museum, Cherbourg"; "27 December 2021"; "Author: Raimond Spekking"; CC BY-SA 4.0. A atribuição pedida: "© Raimond Spekking / CC BY-SA 4.0 (via Wikimedia Commons)". Vai sem aviso do ano pela regra da peça de acervo (identidade §6) | commons.wikimedia.org/wiki/File:Archim%C3%A8de_-_Cit%C3%A9_de_la_Mer-7939.jpg |
| PA040 | s25 | No medidor, a faixa sem número das fontes que discordam | CONFIRMADA | 7.300 m = 23,950 ft e 8.300 m = 27,231 ft (contas refeitas). A faixa fica entre esses dois valores e não toca o anel (27,487) | `fa-nora-528113-dsr1-2020.txt` l. 3; `fb-fivedeeps-release-2018-12-21.txt` l. 19 |
| PA041 | s27 | O rótulo de lugar "Denson Seamount, Alaska" | CONFIRMADA, com ressalva | A origem (a legenda gravada no clipe): "Site: Denson Seamount; Expedition: Seascape Alaska 5". O monte fica em mar aberto, a 54°03′N, 137°25′W, "near the Canada–United States border" (Wikipedia; infobox: United States). "Alaska" é a região, não um lugar dentro do estado | `conferencia-midia.json`, veredito s27 (`lugar_na_origem`); en.wikipedia.org/wiki/Denson_Seamount |
| PA042 | s27 | A profundidade e o ano do clipe: "4,480 FT (1,365 M) · 2023" | CONFIRMADA | NOAA: "spotted at a depth of 1,365 meters (4,480 feet) during dive 8 of NOAA Ocean Exploration's 2023 Seascape Alaska 5 expedition" (1.365 m = 4.478,3 ft, arredondado pela NOAA) | `fb-noaa-oer-deepest-fish.txt` l. 22 |
| PA043 | s28 | Crédito "Source: NOAA Ocean Exploration" | CONFIRMADA | A página "What is the deepest living fish?", "Published January 14, 2026": "In 1970, a deep-sea cusk eel was caught in a net that descended to 8,370 meters (27,460 feet)" | `fb-noaa-oer-deepest-fish.txt` l. 26 e 30 |
| PA044 | s29 | "CUSK-EEL (OPHIDIIDAE)" sobre a foto do peixe vivo de Salmon Bank (2015), com o lugar no máximo o da origem e nada de "Puerto Rico Trench" sobre a foto | CONFIRMADA | A origem: "PMNM - Ophidiid Fish off Salmon Bank"; o lugar: "off Salmon Bank, Papahānaumokuākea Marine National Monument (PMNM), Northwestern Hawaiian Islands". Ophidiidae são os cusk-eels (F073; o museu: "cuskeel (family Ophidiidae)") | `conferencia-midia.json`, veredito s29; `fb-australian-museum-deepest-fish.txt` l. 28 |
| PA045 | s29 | O registro do museu, recriado: "Puerto Rico Trench · 8,370 m (27,455 feet)" | CONFIRMADA | "This 20 cm long fish has been collected from the Puerto Rico Trench at a depth of 8,370 m (27,455 feet)." Para os mesmos 8.370 m, a NOAA (s30) escreve 27,460 ft; a conta dá 27.460,6 ft | `fb-australian-museum-deepest-fish.txt` l. 28 |
| PA046 | s29 | Crédito "Source: Australian Museum, 2020" | CONFIRMADA | "Author(s) Mark McGrouther / Updated 30/03/20". A página foi publicada em 2014-12-23 e atualizada em 2020 | `fb-australian-museum-deepest-fish.txt` l. 8–20 |
| PA047 | s31 p1 | "o mapa multifeixe do USGS pousa sobre a parte oeste da fossa", com "USGS MULTIBEAM · 2002–2003" | DIVERGE | "the morphology of the entire 770-km-long trench from the Dominican Republic in the west to Anguilla in the east was mapped with multibeam echosounder during three cruises in 2002 and 2003". As trilhas dos 3 cruzeiros vão de 69,27°W a 62,04°W: a fossa inteira (medido nas trilhas). Só a parte oeste diz menos que a fonte | `fb-usgs-seafloor-map.txt` l. 21; `_media/geo/levantamento-usgs-2002-2003.json` |
| PA048 | s31 | As datas dos cruzeiros nas trilhas: 24–30/09/2002, 18/02–07/03/2003, 28/08–04/09/2003 | CONFIRMADA | "USGS cruise 02051, NOAA cruise RB0208, September 24 to 30, 2002; USGS cruise 03008, NOAA cruise RB0303, February 18 to March 7, 2003; and USGS cruise 03032, NOAA cruise RB0305, August 28 to September 4, 2003" | `fa-usgs-ofr2006-1210-introduction.txt` l. 11 |
| PA049 | s32 | "NOAA Ship Ronald H. Brown" | CONFIRMADA | O OFR: "All three cruises were carried out aboard the NOAA ship Ronald H. Brown". A OMAO: "NOAA Ship Ronald H. Brown was built by Halter Marine, Inc." O nome ESTÁ em fonte lida (S27, F082): a nota 14 de `para-passos-seguintes.json` estava errada nesse ponto | `fa-usgs-ofr2006-1210-introduction.txt` l. 17; omao.noaa.gov/mo/ships/ronald-h-brown |
| PA050 | s32 | A foto do navio: o crédito "NOAA Photo Library / Wikimedia Commons · CC BY 2.0", sem aviso do ano, e o lugar no máximo "Gulf of Mexico" | CONFIRMADA | Commons: "NOAA SHIP RONALD H. BROWN … Location: Gulf of Mexico"; "27 September 2003, 19:06:38"; "Author: NOAA Photo Library"; "CC BY 2.0". O ano é o mesmo dos cruzeiros | commons.wikimedia.org/wiki/File:NOAAS_Ronald_H._Brown_in_the_Gulf_of_Mexico.jpg |
| PA051 | s33 | Crédito "Source: U.S. Geological Survey, 2003" (o `_dados`) | DIVERGE | Nenhuma publicação do USGS de 2003 foi lida. O "8300-8340 m deep" está na página do USGS de 22/08/2018 ("By Woods Hole Coastal and Marine Science Center August 22, 2018"), e os cruzeiros estão no OFR 2006-1210. 2002–2003 é o ano dos levantamentos, não da fonte | `fb-usgs-seafloor-map.txt` l. 15 e 25; `fa-usgs-ofr2006-1210-introduction.txt` l. 5 |
| PA052 | s35 | A legenda "mGal (milligal) = a unit of gravity; −380 means gravity there falls below normal." | CONFIRMADA | "the most negative free-air gravity anomaly on earth, -380 mGal, which indicates the presence of an active downward force". Uma anomalia negativa é gravidade abaixo do valor normal esperado; a fala diz o mesmo ("falls further below normal") | `fa-usgs-ofr2006-1210-introduction.txt` l. 13 |
| PA053 | s35 | Crédito "Source: DeMets et al., 2010 (via Stewart & Jamieson, 2019); USGS, 2006" | CONFIRMADA | "The Caribbean plate is drifting eastward at approximately 20 mm per year relative to the North American plate (DeMets et al., 2010)." O −380 mGal está no OFR 2006-1210 | `01-04-stewart-jamieson-2019-earscirev.txt` l. 554–556; `fa-usgs-ofr2006-1210-introduction.txt` l. 5 e 13 |
| PA054 | s36 | A cota "+4,000 FT" na ponta alta da camada | DIVERGE | "between (reconstructed) elevations of +1300 m and -4000 m". +1.300 m = +4.265,1 ft. A fala diz "more than 4,000 feet". "+4,000" sozinho arredonda para baixo | `fb-usgs-seafloor-map.txt` l. 57; conta refeita |
| PA055 | s36 | A cota "−13,000 FT" na ponta baixa | CONFIRMADA | −4.000 m = −13.123,4 ft; a fala diz "about 13,000 feet below the surface" (F098). Fiel com "≈" | idem |
| PA056 | s36 | "+4,265 FT / −13,123 FT (+1,300 M / −4,000 M) · USGS" | CONFIRMADA, com ressalva | As contas fecham. Mas a fonte qualifica os dois números como "(reconstructed)", e a linha da tela não diz isso | idem |
| PA057 | s36 | A legenda "Reconstructed = the agency's estimate of where the layer once stood." | NÃO ACHEI | A fonte só diz "(reconstructed) elevations", sem explicar o que foi reconstruído. "Where the layer once stood" é interpretação: diz que a camada não está mais ali, e a página não diz isso | `fb-usgs-seafloor-map.txt` l. 57 |
| PA058 | s08, s12, s14, s16, s21, s29, s30, s31, s33, s35, s36 | Os nomes escritos das instituições (pauta-logos): U.S. Coast and Geodetic Survey, U.S. Navy, National Geographic Society, The Sun (Newberry, S.C.), Australian Museum, NOAA, U.S. Geological Survey / USGS, GEBCO Gazetteer, Earth-Science Reviews | CONFIRMADA | Cada nome bate com a cópia local: "U. S. COAST AND GEODETIC SURVEY" (folha de rosto); "U. S. N."; "Prepared by National Geographic Society"; "THE SUN. NEWBERRY. S. C-"; "The Australian Museum" (o título da página); "National Oceanic and Atmospheric Administration (NOAA)"; "U.S. Geological Survey (USGS)"; "IHO-IOC GEBCO Gazetteer of Undersea Feature Names"; "Earth-Science Reviews 197 (2019)" | as cópias locais citadas acima |
| PA059 | s10 (a reserva) | Sobre a ISS071-E-1042, a reserva da s10 aprovada no lote 7 do conferente: o rótulo de lugar é "San Juan, Puerto Rico", nunca "Aguadilla, Puerto Rico"; sem aviso do ano | CONFIRMADA | NASA EO: "the bottom image provides a detailed view of the San Juan metropolitan area"; "290 millimeters for ISS071-E-1042"; "acquired on April 6, 2024". O veredito: `lugar_na_origem` "San Juan metropolitan area", "com o rótulo San Juan". O rótulo não passa disso (midia §2.7), e nada ali põe o ponto mais fundo ao largo de San Juan, que fica a 116,7 mi do anel (N26) | `fb-nasa-eo-puerto-rico-from-above.txt` l. 50 e 72; `conferencia-midia.json` (lote 7), veredito s10 |

## Os citados do laudo do roteiro (fora da conta; não os refiz, menos as contas marcadas)

| id | cena | o que vai à tela | F do laudo do roteiro |
|---|---|---|---|
| C01 | s01 | "Puerto Rico" | F002, F003 |
| C02 | s02 | "27,487 FT · MORE THAN 5 MI" (refiz: 8.378 m = 27.486,9 ft = 5,206 mi) | F006, F007 |
| C03 | s02 | "≈ 83 MI · AGUADILLA" (refiz por Vincenty: 83,46 mi) | F005, F154 |
| C04 | s03 | "Mount Everest" | F008 |
| C05 | s03 | "≈ 1,500 FT" | F009 |
| C06 | s04 | "Mariana Trench" | F010, F011 |
| C07 | s04 | "PACIFIC" | F011 |
| C08 | s04 | "≈ 9,500 MI" (refiz por Vincenty: 15.269,55 km = 9.488,06 mi) | F012, F013 |
| C09 | s05, s23 | "Puerto Rico Trench" | F001, F014 |
| C10 | s05, s06, s25, s26 | crédito "Source: Jamieson et al., 2020" | F268 |
| C11 | s06 | "NONE OF THOSE FISH" | F018 |
| C12 | s06 | "2019" | F017 |
| C13 | s07 | "DEC. 2018" | F019, F158 |
| C14 | s08 | "MILWAUKEE DEEP · 8,740 · GEBCO GAZETTEER" (a linha da Tabela 1) | F175, F176 |
| C15 | s08, s09 | crédito "Stewart & Jamieson, Earth-Science Reviews, 2019" | F021 |
| C16 | s09 | "28,700 FT" | F178 |
| C17 | s09 | "27,500 FT" | F151 |
| C18 | s09 | "MORE THAN 1,000 FT" | F026, F183 |
| C19 | s12 | "JAN. 27, 1883" | F027 |
| C20 | s12 | "Blake" | F027, F028 |
| C21 | s12, s16 | "U.S. Coast and Geodetic Survey" | F027, F028 |
| C22 | s13, s15 | o alfinete "1883 · BLAKE" (19°40'50"N, 66°23'40"W) | F034 |
| C23 | s14 | "W. H. BROWNSON" e o posto de tenente-comandante, U.S. Navy | F031 |
| C24 | s15 | "4,561 FATHOMS" | F032 |
| C25 | s15 | "27,366 FT" | F033 |
| C26 | s15 | "60 MI EAST" e "≈ 60 MI" (refiz: 96,16 km = 59,75 mi) | F035 |
| C27 | s15 | "WIRE" (a sondagem por arame) | F030 |
| C28 | s15 | a amostra do fundo e a leitura da temperatura, sem número | F036 |
| C29 | s17 | "HMS Challenger" | F042 |
| C30 | s18 | "23,250 FT · 3,875 FATHOMS" | F045, F046 |
| C31 | s18 | o alfinete "HMS CHALLENGER" (19°42'N, 65°07'W), sem o ano | F044, F045 |
| C32 | s19 | "USS Milwaukee" | F048 |
| C33 | s19, s20 | "1939" | F048 |
| C34 | s20 | "NORTH OF PUERTO RICO" | F048, F050 |
| C35 | s20 | "MORE THAN 28,000 FT · REPORTED, 1939" | F050, F051 |
| C36 | s20 | "Milwaukee Deep" (o nome de 1939) | F052 |
| C37 | s21 | "The Sun (Newberry, S.C.), July 28, 1939" | F054 |
| C38 | s21 | "National Geographic Society" | F053 |
| C39 | s23 | "1964" | F014 |
| C40 | s24 | "Archimède" | F014, F057 |
| C41 | s25 | "MORE THAN 4 MI · 1964" | F061, F063, F064 |
| C42 | s26 | "~24,000 FT" | F065, F067 |
| C43 | s26 | "~200 · ALONG ~1 MI" | F068 |
| C44 | s26 | "PUBLISHED 1965" | F069 |
| C45 | s27 | "SNAILFISH (LIPARIDAE)" e a legenda | F070, F070a |
| C46 | s28 | "1970 · NET" | F071 |
| C47 | s29 | "cusk-eel" e a legenda ("eel-like, not a true eel") | F073 |
| C48 | s29 | "~8 IN" (no contorno desenhado) | F074, F075 |
| C49 | s29 | "Australian Museum" (o mesmo exemplar, pela profundidade) | F076 |
| C50 | s30 | "~27,460 FT (8,370 M) · THE NET, 1970 · SOURCE: NOAA" | F071, F077, F078 |
| C51 | s31 | "U.S. Geological Survey" / "USGS MULTIBEAM · 2002–2003" | F080 |
| C52 | s31 | "3 CRUISES" | F080, F082 |
| C53 | s31 | a legenda do multifeixe ("a wide strip") | F081 |
| C54 | s33 | "~27,300 FT (8,300–8,340 M) · USGS, 2002–2003" | F083, F084 |
| C55 | s33 | "15 YEARS" e "2003 · USGS SONAR" | F085, F086 |
| C56 | s33, s35 | "NORTH AMERICAN PLATE" / "CARIBBEAN PLATE" | F089 |
| C57 | s34 | a citação do USGS sobre o Pacífico (não vai à tela) | F088 |
| C58 | s35 | as placas que deslizam, com pouca subducção (o desenho) | F090 |
| C59 | s35 | "≈ ¾ IN/YR (20 MM)" | F091, F092 |
| C60 | s35 | "−380 mGal · USGS" | F093 |
| C61 | s35 | a seta da "active downward force" | F094 |
| C62 | s37 | os grandes movimentos verticais (sem texto na tela) | F099 |

## ACHADOS (com o conserto pronto)

- **[MÉDIO] PA047 · s31 p1.** O espelho põe o mapa do USGS só na parte oeste. A fonte diz que os três cruzeiros mapearam a fossa inteira, de 770 km, da República Dominicana a Anguilla. As trilhas do canal vão de 69,27°W a 62,04°W.
  - **CONSERTO:** "o mapa multifeixe do USGS pousa sobre a fossa inteira, da República Dominicana a Anguilla: USGS MULTIBEAM · 2002–2003". Sem polígono de cobertura lido, mostram-se as trilhas do navio ou a faixa da fossa inteira, declarada.
  - **RAIZ:** PONTUAL (o plano do espelho).
- **[MÉDIO] PA009 · s08.** "(UNTIL AT LEAST 2019)" não está em fonte. O estudo de 2019 não data a consulta à lista, e o §5 dele diz que só Challenger, Horizon e Scholl estão no gazetteer.
  - **CONSERTO:** "MILWAUKEE DEEP · 28,675 FT (8,740 M) · GEBCO GAZETTEER, AS LISTED IN STEWART & JAMIESON (2019)", ou só "MILWAUKEE DEEP · 28,675 FT (8,740 M) · GEBCO GAZETTEER", com a fonte na linha de crédito.
  - **RAIZ:** INSTRUÇÃO (o "até pelo menos 2019" vem do dossiê, C10, e passou à pauta e ao espelho).
- **[MÉDIO] PA054 + PA056 + PA057 · s36.** A cota "+4,000 FT" arredonda para baixo um "more than". A linha da fonte perde o "(reconstructed)" da origem, e a legenda interpreta além da página.
  - **CONSERTO:** as cotas "+4,265 FT" e "≈ −13,000 FT"; a linha "RECONSTRUCTED: +4,265 FT / −13,123 FT (+1,300 M / −4,000 M) · USGS"; a legenda "Reconstructed: the agency's estimate where erosion or the sea hides the layer", ou sem legenda. Se o redator preferir o "more than" da fala, "MORE THAN +4,000 FT" também é fiel.
  - **RAIZ:** PONTUAL.
- **[MÉDIO] PA006 · s05 p1, s30 p3.** Nenhuma fonte dá o sítio de 1964, e com os ~8.300 m do release o batiscafo estaria dentro do trecho mais fundo. Pôr o batiscafo ou o retalho num lugar do mapa inventa uma posição.
  - **CONSERTO:** o batiscafo desce "na fossa" sem ponto (no corte ou num quadro à parte), e o retalho entra como ESCALA (o tamanho do que uma tripulação vê), fora do eixo da fossa ou numa caixa de legenda, nunca sobre um ponto dela. Se ficar sobre o mapa, a tela diz que a posição é ilustrativa.
  - **RAIZ:** INSTRUÇÃO (a nota da verificação do espelho pede "fora do trecho mais fundo", o que é posição sem fonte).
- **[LEVE] PA013 · s12.** O aviso "PHOTO: BEFORE 1880" exclui o 1880 que a origem inclui.
  - **CONSERTO:** "Photo from 1880 or earlier", nas duas pranchas. Nunca "about 1870": o navio é de 1874.
  - **RAIZ:** PONTUAL (a pauta-imagens; o veredito já tem a forma certa).
- **[LEVE] PA015 · s13.** A faixa acesa "north of Puerto Rico" não contém o alfinete do Blake, que fica 0,26° ao norte dela.
  - **CONSERTO:** acender o mar ao norte da ilha até além da fossa (até ~20°N, nas longitudes da ilha), com o alfinete dentro. Ou acender só o entorno do alfinete.
  - **RAIZ:** PONTUAL (`mar-ao-norte-de-porto-rico.json`).
- **[LEVE] PA026 · s16.** O espelho manda a p. 46 com as l. 3516–3518, que são da p. 8. Só a p. 8 tem os dois grifos da fala.
  - **CONSERTO:** "A p. 8 (PDF p. 35) do relatório de 1883: grifo 1 em 'and the specimen-cup brought up brown ooze.', grifo 2 em 'No record is known … equaling this.'"
  - **RAIZ:** PONTUAL.
- **[LEVE] PA037 · s21.** O `needs.dados` diz "4.780 braças … nos jornais de 1939", e o jornal não dá braças.
  - **CONSERTO:** "F29 (S09): 28.680 ft nos jornais de 1939 (as 4.780 braças são conta do canal, fora da tela)."
  - **RAIZ:** PONTUAL.
- **[LEVE] PA036 · s21.** "NEWSPAPERS" no plural sobre um jornal lido.
  - **CONSERTO:** "28,680 FT · THE SUN (NEWBERRY, S.C.), JULY 28, 1939", ou "28,680 FT · NATIONAL GEOGRAPHIC SOCIETY BULLETIN, 1939".
  - **RAIZ:** PONTUAL.
- **[LEVE] PA051 · s33.** O crédito "U.S. Geological Survey, 2003" dá à fonte um ano que ela não tem.
  - **CONSERTO:** "Source: U.S. Geological Survey" (a linha do número já diz "USGS, 2002–2003").
  - **RAIZ:** PONTUAL.
- **[LEVE] PA007 · s05, s06, s26.** "O fundo bem abaixo" da linha dos peixes não está em fonte.
  - **CONSERTO:** desenhar a linha sobre o fundo em declive, sem cota nem marca do fundo da fossa abaixo dela.
  - **RAIZ:** PONTUAL.
- **[LEVE] PA023 · s15.** A temperatura não tem leitura confirmada no texto.
  - **CONSERTO:** a leitura da temperatura vai sem número (um termômetro, ou "TEMPERATURE"). O número só vai se a Sala o ler na imagem da página e ele for "36¼ °F" nas duas.
  - **RAIZ:** PONTUAL.
- **[LEVE] PA005 · s05, s26.** A fonte data o relato de 1965.
  - **CONSERTO opcional, mais seguro:** s05 "1964 · REPORTED"; s26 "~24,000 FT · 1964 DIVE, REPORT PUBLISHED 1965".
  - **RAIZ:** PONTUAL.
- **[LEVE] PA041 · s27.**
  - **CONSERTO:** "DENSON SEAMOUNT, OFF ALASKA · 4,480 FT (1,365 M) · 2023".
  - **RAIZ:** PONTUAL.
- **[LEVE] PA045 · s29/s30.** 27,455 ft (o museu) e 27,460 ft (a NOAA) para os mesmos 8.370 m, em cenas seguidas.
  - **CONSERTO:** na recriação do registro do museu, o texto literal dele ("8,370 m (27,455 feet)"). No medidor da s30, "~27,460 FT (8,370 M) · SOURCE: NOAA". Ou, no registro do museu, só "8,370 m".
  - **RAIZ:** PONTUAL.
- **[LEVE] PA010 · s08.** O rótulo do canal vai em pés primeiro.
  - **CONSERTO:** "28,675 FT (8,740 M)". O "8740" fica em metros só na linha impressa da tabela, se a página aparecer.
  - **RAIZ:** PONTUAL.
- **[LEVE] PA017 · s14.** A chefia do grupo hidrográfico passou a Brownson em agosto de 1882; o comando, em 01/10/1882.
  - **CONSERTO opcional:** "COMMANDING THE BLAKE, 1883", que não depende da data. "IN COMMAND OF THE BLAKE SINCE OCT. 1882" também é fiel ao Apêndice 5.
  - **RAIZ:** PONTUAL.
- **[LEVE] PA021 · s12, s14, s15, s16.**
  - **CONSERTO opcional:** "U.S. Coast and Geodetic Survey, report for 1883". O "…, 1883" também é fiel: o relatório é do ano fiscal de 1883 e foi entregue em dezembro de 1883, embora impresso em 1884.
  - **RAIZ:** PONTUAL.

## LISTA DE NOMES (anônimo → pessoa nomeável)

| como está no texto | pessoa | credencial | de onde |
|---|---|---|---|
| "a Navy officer named Brownson" (s14) | Willard H. (Herbert) Brownson | Lieutenant Commander, U.S. Navy, Assistant do Coast and Geodetic Survey; no comando do Blake de 01/10/1882 a 1884 | o relatório de 1883 (l. 5804–5805, 11455; tabela de oficiais, l. 7637–7640); a nota biográfica do NHHC, lida pela Sala (`out/atlantico-fundo/_tmp/pesquisa-pessoas/nhhc-brownson-2026-10-28.md` §3); en.wikipedia.org/wiki/Willard_H._Brownson |
| "Captain Nares" (s17) | George Strong Nares | Captain, Royal Navy, no comando do HMS Challenger "from 1872 down to the end of 1874" | `04-ihr-1936-…txt` l. 4; a página do Men of Mark no arquivo do Rijksmuseum (veredito s17) |
| "a crew" (1964) e "the report, published the next year" (s05, s26, s27) | NÃO ACHEI | nenhuma fonte lida nomeia quem estava a bordo nem o autor do relato de 1965. "J.-M. Pérès (1965)" é hipótese minha, sem fonte lida: não usar | buscas de 29/10/2026, sem resultado que o confirme |
| "a net" (1970) (s28, s30) | NÃO ACHEI | de quem era a rede e de que navio, nenhuma fonte lida diz (a NOAA não diz) | `fb-noaa-oer-deepest-fish.txt` l. 26 |
| "the agency" / "By the agency's reconstruction" (s36, s37) | não é anônimo: é o USGS (Woods Hole Coastal and Marine Science Center) | a página não dá autores | `fb-usgs-seafloor-map.txt` l. 15 |

## PADRÕES (os 2 mais vistos)

1. **O qualificador da origem cai no rótulo curto.**
   - "in or before 1880" virou "BEFORE 1880".
   - "(reconstructed) elevations" virou cota sem "reconstructed".
   - "more than 4,000" virou "+4,000".
   - "reported in 1965" virou "REPORTED 1964".
   - "as published", sem data, virou "UNTIL AT LEAST 2019".
   - "a newspaper + WNU" virou "NEWSPAPERS".
   - Antes de fechar o texto da tela, conferir que o qualificador da frase da fonte sobreviveu ao encurtamento.
2. **A geometria do mapa afirma mais do que a fonte.**
   - A faixa "north of Puerto Rico" exclui o alfinete de que a fala trata.
   - O multifeixe "só na parte oeste", quando a fonte diz a fossa inteira.
   - O batiscafo e o retalho com posição, sem fonte de sítio.
   - O "fundo bem abaixo" da linha dos peixes.
   - Desenho de mapa é afirmação de lugar: tudo o que se acende ou se põe num ponto precisa da fonte desse lugar, ou da palavra "ilustrativo".

## Para o redator-de-tela (o que a tela pode e não pode dizer, por cena)

- **s01:** "PUERTO RICO". Sem aviso do ano, sem crédito na tela (domínio público federal). O rótulo de lugar não passa de "Puerto Rico".
- **s02:** "27,487 FT · MORE THAN 5 MI" e "≈ 83 MI · AGUADILLA". A linha sai da costa de Aguadilla, nunca de San Juan. O crédito "Source: Bongiovanni et al., 2021".
- **s03:** "≈ 1,500 FT" (são 1.545). Nunca "deeper than Everest is tall".
- **s04:** "MARIANA TRENCH", "PACIFIC", "≈ 9,500 MI".
- **s05:** "PUERTO RICO TRENCH" e "REPORTED · 1964" (mais seguro: "1964 · REPORTED"). Sem número, sem "BOTTOM", sem ponto de sítio para o batiscafo.
- **s06:** "NONE OF THOSE FISH". Nunca "NO FISH".
- **s07:** "DEC. 2018".
- **s08:** "MILWAUKEE DEEP · 28,675 FT (8,740 M) · GEBCO GAZETTEER", com "Source: Stewart & Jamieson, Earth-Science Reviews, 2019".
  - Sem "(UNTIL AT LEAST 2019)", ou trocado por "AS LISTED IN STEWART & JAMIESON (2019)".
  - Nunca "Brownson Deep" na tabela: ela não tem esse nome.
- **s09:** "28,700 FT", "27,500 FT", "MORE THAN 1,000 FT".
- **s10:** "Aguadilla, Puerto Rico" só sobre um clipe cujo `lugar_na_origem` diga Aguadilla. Sobre a reserva aprovada (ISS071-E-1042), o rótulo é "San Juan, Puerto Rico", e nada diz que o ponto mais fundo fica ao largo de San Juan.
- **s12:** "JAN. 27, 1883", "Blake", "U.S. Coast and Geodetic Survey". Nas duas pranchas, o aviso "Photo from 1880 or earlier". Nunca "BEFORE 1880" nem "about 1870". Sem rótulo de lugar: a origem não dá lugar.
- **s13:** "1883 · BLAKE". A região acesa tem de conter o alfinete.
- **s14:**
  - o nome: "W. H. BROWNSON" (ou "WILLARD H. BROWNSON");
  - o cargo: "LIEUTENANT-COMMANDER, U.S. NAVY";
  - "IN COMMAND OF THE BLAKE SINCE OCT. 1882" (ou "COMMANDING THE BLAKE, 1883");
  - o aviso: "Photo from about 1900–1909";
  - nunca "Rear Admiral", "Captain", "Photo from 1907" nem "the 1900s".
- **s15:**
  - "1883 · WIRE · 27,366 FT · 60 MI EAST", "4,561 FATHOMS" e "≈ 60 MI";
  - a legenda do fathom;
  - nenhum número de temperatura (PA023);
  - o marcador de 1883 leva "60 MI EAST" toda vez que volta.
- **s16:**
  - a página é a p. 8 (PDF p. 35), com os dois grifos (PA024, PA025);
  - a referência "U.S. Coast and Geodetic Survey, 1883" (ou "…, report for 1883");
  - '"BROWN OOZE" · 1883'.
- **s17:**
  - "HMS Challenger", "Capt. George Nares" e "Engraving, 1872" (gravura, nunca "photo");
  - o aviso do retrato: "Photo from the 1870s";
  - sem o ano da descoberta e sem "Sir";
  - se houver rótulo de lugar sobre a gravura, no máximo "Sheerness".
- **s18:**
  - o alfinete "HMS CHALLENGER", sem ano;
  - "23,250 FT · 3,875 FATHOMS";
  - "Source: International Hydrographic Review, 1936";
  - nenhum número de comprimento da fossa.
- **s19:**
  - "USS Milwaukee";
  - o aviso "Photo from 1942";
  - o "1939" não pode ficar como legenda da foto;
  - o lugar, se houver, no máximo "off the New York Naval Shipyard".
- **s20:** "NORTH OF PUERTO RICO", "MORE THAN 28,000 FT · REPORTED, 1939" e "MILWAUKEE DEEP (1939)". O nome vai como região sobre a fossa, nunca no anel nem no alfinete da lista. No medidor, faixa ou seta acima de 28,000, nunca um ponto.
- **s21:**
  - "The Sun (Newberry, S.C.), July 28, 1939" e "National Geographic Society";
  - "28,680 FT" com "THE SUN, 1939" ou "NATIONAL GEOGRAPHIC SOCIETY BULLETIN, 1939", não "NEWSPAPERS";
  - nunca braças.
- **s23:** "PUERTO RICO TRENCH", "1964".
- **s24:** "Archimède", com o crédito "Raimond Spekking / Wikimedia Commons · CC BY-SA 4.0". Sem aviso do ano. O lugar, no máximo "Cité de la Mer, Cherbourg".
- **s25:** "MORE THAN 4 MI · 1964". A faixa sem número entre 23,950 e 27,231 ft, sem tocar o anel.
- **s26:**
  - "~24,000 FT · REPORTED 1964, PUBLISHED 1965" (mais seguro: "1964 DIVE · REPORT PUBLISHED 1965");
  - "~200 · ALONG ~1 MI";
  - nenhuma cota de fundo abaixo da linha.
- **s27:** "SNAILFISH (LIPARIDAE)" e a legenda "DENSON SEAMOUNT, OFF ALASKA · 4,480 FT (1,365 M) · 2023". Nada diz que é a fossa.
- **s28:** "1970 · NET", com "Source: NOAA Ocean Exploration".
- **s29:**
  - "CUSK-EEL (OPHIDIIDAE)" sobre a foto; "~8 IN" só no contorno desenhado;
  - o registro recriado: "Puerto Rico Trench · 8,370 m (27,455 feet)", com "Source: Australian Museum, 2020";
  - nada de "Puerto Rico Trench" sobre a foto;
  - o lugar da foto, se houver, no máximo "off Salmon Bank, Northwestern Hawaiian Islands".
- **s30:** "~27,460 FT (8,370 M) · THE NET, 1970 · SOURCE: NOAA". O retalho é escala, sem posição.
- **s31:** "USGS MULTIBEAM · 2002–2003" e "3 CRUISES", sobre a fossa inteira, não só a oeste.
- **s32:**
  - "NOAA Ship Ronald H. Brown";
  - o crédito "NOAA Photo Library / Wikimedia Commons · CC BY 2.0";
  - sem aviso do ano;
  - o lugar, no máximo "Gulf of Mexico".
- **s33:** "~27,300 FT (8,300–8,340 M) · USGS, 2002–2003" e "15 YEARS". O crédito "Source: U.S. Geological Survey", sem "2003".
- **s35:** "NORTH AMERICAN PLATE", "CARIBBEAN PLATE", "≈ ¾ IN/YR (20 MM/YR)" (o "/YR" também no métrico) e "−380 mGal · USGS", com a legenda.
- **s36:** "+4,265 FT" (ou "MORE THAN +4,000 FT"), "≈ −13,000 FT" e "RECONSTRUCTED · USGS". Nunca "+4,000 FT" sozinho, e a legenda sem "once stood".
- **s11, s22, s34, s37:** sem texto checável na tela.

## Para a Sala

**NÃO FOI CHECADO, com as URLs:**
- **history.navy.mil (NHHC):** recusou a minha conexão (ECONNREFUSED; https://history.navy.mil/research/histories/ship-histories/danfs/b/brownson-i.html).
  - Não insisti.
  - O item (PA016) fecha pela leitura que a Sala fez da nota biográfica do NHHC em 28/10/2026, às 15:2x, mais a Wikipedia. Nada pendente.
- **O rótulo de lugar sobre o aéreo de banco da s10:** sem arquivo, porque a caça não rodou. Só vai à tela depois do veredito do conferente sobre o clipe. Sem caça, a reserva do lote 7 (ISS071-E-1042) leva "San Juan, Puerto Rico" (PA059).
- **A temperatura de 1883 (PA023):** pede olhar a imagem da p. 8 (PDF p. 35) e da p. 46 (PDF p. 73) de https://library.oarcloud.noaa.gov/docs.lib/htdocs/rescue/cgs/002_pdf/CSC-0082.PDF. Só se o redator quiser o número.
- **O polígono da área do multifeixe de 2002–2003** (`pauta-geo`, `nao_conferido` 3): pede código novo sobre a grade combinada do OFR. O que a tela afirma (a fossa inteira) está checado pelo texto e pelas trilhas.
- **Um segundo jornal de 1939 com o boletim** (PA036): a Chronicling America é da Library of Congress, que recusa robô (CLAUDE.md). Se a Sala quiser o plural na tela, a busca é pelo navegador do app. Sem ela, a tela fica no singular.

**Divergências da voz:** nenhuma REFUTADA nem DIVERGE na voz do lote A. Duas observações, sem pedido de regravação:
- **"That summer, newspapers printed the news in a bulletin from the National Geographic Society."** O plural se apoia num jornal lido e no "WNU Service" (F053, confirmada no laudo do roteiro). É sustentação frágil, não erro.
- **"under Captain Nares"** só vale com a travessia de março de 1873.
  - A revista de 1936 (a única cópia com data exata) diz "26th March 1875".
  - Mas a página do Men of Mark põe Nares no comando "from 1872 down to the end of 1874".
  - Em 1875 o navio estava no Pacífico (a busca de 29/10 aponta St. Thomas em 16/03/1873).
  - Tudo favorece 1873, e a fala, que não diz o ano, fica certa. O ano continua fora da tela (N52).

**Notas para os outros passos:**
- **`para-passos-seguintes.json`, item 14, estava errado em dois dos três nomes.**
  - "NOAA Ship Ronald H. Brown" está na S27, l. 17 ("the NOAA ship Ronald H. Brown"; F082).
  - "Capt. George Nares" está na revista de 1936 ("Captain Sir George S. Nares").
  - Só o "Willard H." não estava em cópia local: está no registro da Sala sobre o NHHC.
- **s19:** o DANFS diz que o Milwaukee partiu de Nova York em 31/12/1941, e o NARA data a foto de 7/1/1942 ao largo do New York Naval Shipyard. O aviso segue a origem ("Photo from 1942"). O conflito fica registrado.
- **Fora da tela, na descrição:**
  - A linha "Image courtesy of the Earth Science and Remote Sensing Unit, NASA Johnson Space Center" (s01) não está na página da NASA nem no HTML dela. A página diz: "The images are provided by the ISS Crew Earth Observations Facility and the Earth Science and Remote Sensing Unit, Johnson Space Center." Na descrição, a forma literal: "Astronaut photograph ISS071-E-1036, provided by the ISS Crew Earth Observations Facility and the Earth Science and Remote Sensing Unit, Johnson Space Center."
  - A `pauta-geo.md` propõe para a descrição "GEBCO Bathymetric Compilation Group 2026 (2026). The GEBCO_2026 Grid", que é a forma de 2022. A documentação de 2026 dá "GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)".

**Voláteis na tela do lote A:** nenhum. Os textos do lote são passado datado ou medida.

**DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** a caça dos aéreos de banco (s10, s11), que segura o rótulo da s10. As decisões usadas e conferidas no veredito:
- a gravura da s17 (28/10, 17:5x: "Pode usar a gravura (Recomendado)");
- o HD da s27 (28/10, 17:38: "Pode usar, com o lugar real (Recomendado)");
- o NH 64332 da s14, que ficou fora da entrega (28/10, 15:4x: "Sim, baixar (Recomendado)").

## O fecho

- **COBERTURA: 59 de 59.** Itens do lote A com veredito, fora os 62 que só citam o laudo do roteiro. A lista foi derivada à mão, pela leitura integral das entradas.
- **Do laudo do roteiro:** 62 itens citados (C01–C62), com 77 linhas F diferentes. As contas de C02, C03, C08 e C26 foram refeitas e fecham.
- **NOTA: 8.2/10**
- **CHECADO, com DIVERGE periférico:** nenhum DIVERGE nem REFUTADA em afirmação de tese. Os 7 DIVERGE e os 6 NÃO ACHEI caem em rótulo, aviso, crédito, legenda ou composição de mapa, e cada um tem conserto de uma frase acima.

VEREDITO: RESSALVA

---

# Lote B (s38–s75 e sem cena, com o acréscimo do lote 7), como o verificador gravou

COBERTURA: 116 de 116 (lote B: s38–s75 do espelho + 1 item de pesquisa sem cena; denominador DERIVADO À MÃO, ver §1). Fora do M: 12 itens que só citam o laudo do roteiro e 1 item NADA A CHECAR, declarados na tabela.

# Laudo de fatos — delta da pesquisa, lote B · `atlantico-fundo` (vídeo 4) · passo `screen_text`

- Tarefa: `atlantico-fundo-texto-1`, lote B. Peça: `verificador-de-fatos`.
- Data-base da verificação: **29/10/2026, 03:35 (hora de Brasília, `date` sem TZ)**. Fato volátil está marcado; a consulta ao gazetteer (PB084) foi refeita hoje.
- `conferencia-midia.json` lido: sha256 `0764c529c261c10fa35ceb6bed823b2737f751c21810ccb5d804fd189ef4e88f`.
- Imagens abertas: 0. Tudo foi conferido em texto, metadado e fonte.
- Nada foi gravado no canal. O apoio está em `C:/Users/zangp/AppData/Local/Temp/claude/vf-atl-B/` (scripts, dumps e o PDF de Stewart & Jamieson 2018, em pasta própria, lido com `python -I`).
- Abreviações: `FONTES/` = `midia/atlantico-fundo/fontes/`; `ORIG/` = `out/atlantico-fundo/_tmp/verificar-research/origens/`; LR = laudo do roteiro (`roteiros/atlantico-fundo/qc-roteiro/fatos-tabela.json`, ids F095–F290).

## 1 · Como a lista foi construída (o denominador)

O canal não tem script que derive as afirmações de tela. Por isso o denominador foi **derivado à mão**, com leitura integral destas fontes do lote B:
1. `out/atlantico-fundo/espelho.json`, s38–s75: o texto, a tese, os planos e as `GRAFIAS`. Dump em `espelho-B.txt` e `espelho-B-compacto.txt`.
2. `out/atlantico-fundo/regencia.json`, as cenas s38–s75 e as listas `_para_o_redator_e_a_arte`, `_para_passos_seguintes`, `_espera_o_lucas`, `_perguntas_a_sala` e `_decisoes_da_regencia`. Entram a pílula, a legenda, o crédito, o rótulo de lugar e a descrição que pode virar texto. Dump em `reg-B.txt`.
3. `out/atlantico-fundo/_pesquisa/conferencia-midia.json`, os vereditos das mídias de s41 a s73: `lugar_na_origem`, `data_na_origem`, `aviso_de_ano`, `credito_na_tela` e `credito_na_descricao`. Dump em `conf-B.txt`.
4. `pauta-dados.json` (o `texto_para_tela` das cenas ≥ s38 e as `divergencias`) e `pauta-geo.json` (as camadas das cenas ≥ s38, o `nao_conferido` e os `avisos_para_a_sala`).
5. `pauta-pessoas.json`, `pauta-logos.json` (`linhas_que_explicam`) e `pauta-documentos.json`. Delas saiu o único item sem cena: o ponto de Lyman 1954.

**Unidade:** uma afirmação que vai à tela ou que governa o que a tela mostra. Isso inclui número, data, nome e cargo, lugar, crédito, citação e grifo de documento, e o rótulo de lugar e de ano das fotos aprovadas. A camada de geo também entra quando afirma um lugar (uma faixa acesa, uma linha rotulada).

**O limite do detector, declarado:**
- A lista foi feita à mão e pega o que a forma mostra e o que a leitura acha: mecanismo, primazia, fronteira desenhada.
- Ela não refaz a voz. A fala do lote já tem veredito no LR, e eu só a reabri onde o despacho pediu (s47, s74) ou onde a tela depende dela.
- Escala de desenho (PB127) não tem fonte a conferir: é NADA A CHECAR, fora do M.

**Contagem:** 129 itens na tabela. Saem do M os 12 marcados `LR`, que só citam o laudo do roteiro (o número já tem veredito lá, e eu não abri fonte nova), e o PB127. Ficam **M = 116**, todos com veredito: **N = 116**.
- CONFIRMADA: 102.
- DIVERGE: 12, todos periféricos (instrução de geo e de regência, grifo, linha de crédito, grafia velha do espelho).
- NÃO ACHEI: 2.
- REFUTADA: 0.

**NOTA: 8,5/10.** Nenhum número, data, nome ou crédito de tela está errado. Os defeitos estão onde a instrução de mapa ou de documento afirma mais do que a fonte: grifo em palavra que não está no documento (s69, s73), faixa e área rotuladas além do que são (s40, s45, s61, s63, s67).

## 2 · A tabela (uma linha por item)

| id | cena · afirmação (tela ou instrução) | veredito | o que a fonte diz (trecho literal) | URL / arquivo local |
|---|---|---|---|---|
| PB001 | s38 · "≈ 27,300 FT · USGS · 2002–2003" | CONFIRMADA | "This sector is 10-15 km wide and 8300-8340 m deep"; "mapped with multibeam echosounder during three cruises in 2002 and 2003". 8.300–8.340 m = 27.231–27.362 ft: ≈ 27,300 | https://www.usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map · `FONTES/fb-usgs-seafloor-map.txt` l. 21, 25 |
| PB002 | s38 · blocos girados só sob o setor mais fundo; a causa atribuída ("suggests") | CONFIRMADA | "Seismic profiles show it to be underlain by rotated blocks of the NOAM plate that indicate trench subsidence"; no leste, "the descending blocks are not rotated" (também LR F100–F103) | idem, l. 25 |
| PB003 | s39 · pílula "APPEARS TO BE HIGH" · USGS (com aspas) | CONFIRMADA (literal) | "Tsunami hazard to the northern coast of Puerto Rico and the Virgin Islands from submarine slope failures appears to be high." | idem, l. 27 |
| PB004 | s39 · as cicatrizes de deslizamento acesas nas paredes | CONFIRMADA (como região) | "numerous retrograde slope failures at various scales at the edge of the carbonate platform north of Puerto Rico and the Virgin Islands". Não há camada georreferenciada das cicatrizes no disco (pauta-geo): a regência já prevê "the walls lit as a region, declared" | idem, l. 93 |
| PB005 | s40 (s39 › beats[3]) · "Mona Passage" e outubro de 1918 | CONFIRMADA | NCEI, evento 1458: data 1918-10-11; "PUERTO RICO: MONA PASSAGE" | https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/events/1458/info · `FONTES/fa-ncei-tsunami-evento-1458.txt` |
| PB006 | s40 · "1918 · NOT IN THE TRENCH" | CONFIRMADA | Epicentro NCEI em 18,7°N, 67,189°W, ~1° ao sul do eixo da fossa (~19,6–19,8°N); a falha normal do Cânion de Mona (LR F109) | idem |
| PB007 | s40 · "M 7.1 · NOAA NCEI" | CONFIRMADA | eqMagnitude 7.1. O mesmo banco cita "A 1918 M 7.5 earthquake" (ref. 1591): por isso a atribuição na pílula é obrigatória, e está lá | idem |
| PB008 | s40 · geo passagem-de-mona (faixa declarada) com o marcador de 1918 dentro dela | **DIVERGE** (geo) | A faixa declarada vai de 17,95 a 18,6°N (68,75–67,15°W). O epicentro do NCEI (18,7°N, 67,189°W) fica FORA dela, ~11 km ao norte. Teste de ponto em polígono: `scripts/geo_check.py` | `out/atlantico-fundo/_media/geo/passagem-de-mona.json` × NCEI 1458 |
| PB009 | s40 · o nome "Dominican Republic" no contexto | CONFIRMADA | A oeste da Passagem de Mona (Natural Earth, republica-dominicana); sem tinta no plano da costa oeste (regência) | `pauta-geo.json` |
| PB010 | s41 (s39 › beats[5]) · "UP TO 20 FT (6.1 m) · NOAA NCEI", só no mapa da costa oeste | CONFIRMADA | maxWaterHeight 6.1; "runup heights reaching 6 m … western and northern coasts". 6,1 m = 20,01 ft. Fica só no mapa, nunca sobre a foto (LR F111–F113) | NCEI 1458, idem |
| PB011 | s41 · "MORE THAN 100" (sobre a foto) | CONFIRMADA | "official death toll … 116"; em Mayagüez, "more than 100"; deaths 140, deathsTotal 144. "More than 100" vale para todas as contagens (LR F114) | idem |
| PB012 | s41 · rótulo "Mayagüez, Puerto Rico" sobre a foto do El Mundo | CONFIRMADA | lugar_na_origem: "The US Post Office and Casino in Mayagüez, Puerto Rico after the Earthquake of San Firmín in 1918". A foto é de 1918, o ano do fato: sem aviso | https://commons.wikimedia.org/wiki/File:Correo_y_Casino_de_Mayag%C3%BCez_luego_del_terremoto_de_1918.jpg |
| PB013 | s41 · crédito "El Mundo / Universidad de Puerto Rico" (60 px) | CONFIRMADA | Commons, Artist: "Colección de Fotos del Periódico El Mundo: 1918"; Credit: "Universidad de Puerto Rico, Recinto de Río Piedras", com o link do registro (bibliotecadigital.uprrp.edu, coleção fotoselmund, id 2159). O crédito nomeia a fonte certa: a coleção de fotos do jornal El Mundo, guardada pela UPR, Río Piedras | idem (API, extmetadata) |
| PB014 | s41 · credito_na_descricao: "Colección de Fotos del Periódico El Mundo, Universidad de Puerto Rico, Recinto de Río Piedras, via Wikimedia Commons" | CONFIRMADA (contra o Commons) | Bate com o Artist e o Credit da página. A página do registro da UPR não foi lida (ver "Para a Sala") | idem |
| PB015 | s41 · a licença está registrada no veredito? | CONFIRMADA (registrada) | O veredito vigente registra o PD-1923, a publicação antes de 1931 que não se provou, e o risco aceito pela exceção do Lucas: "Usar, com crédito (Recomendado)", 29/10/2026, 01:1x. O veredito antigo, sem crédito na tela, está em substituidos | `conferencia-midia.json` (s41) |
| PB016 | s42 · pílula "Anegada", a leste ao longo da fossa | CONFIRMADA | "Anegada, 125 km south of the trench" (Wei et al. 2024); "the low-lying island of Anegada" (LR F116) | https://repository.library.noaa.gov/view/noaa/61168 · FONTES/fa-noaa-ir-61168-wei-2024-jgr.txt |
| PB017 | s43 · pílula "Anegada, British Virgin Islands" | CONFIRMADA | lugar_na_origem: "Anegada Island, part of the British Virgin Islands"; nunca "U.S." (LR F117) | https://commons.wikimedia.org/wiki/File:Anegada_Island,_part_of_the_British_Virgin_Islands_-_panoramio.jpg |
| PB018 | s43 · crédito "David Broad / Wikimedia Commons · CC BY 3.0" | CONFIRMADA | Autor David Broad (Panoramio); "Creative Commons Attribution 3.0 Unported". A data é a do envio (5 January 2012), e a geografia está no presente: sem aviso | idem |
| PB019 | s43 · regência: "the window moving toward the island's east tip" | **DIVERGE** (instrução) | O conferente: "a metade oeste de Anegada de perto … sem a ponta leste"; a câmera estava "a sudoeste da ponta oeste da ilha". A ponta leste não está na foto | conferencia-midia.json (s43, a foto de 2012) |
| PB020 | s44 · pílula "Anegada" (L04) | CONFIRMADA | A legenda da foto diz "stands 750 feet inland in the British Virgin Islands", e a notícia do USGS de 20/03/2017 que a publica diz "found in the British Virgin Islands at Anegada". "Anegada" vale; "north shore", não (a origem não diz) | https://www.usgs.gov/media/images/brain-coral-boulder-brought-ashore-large-waves · ORIG/s44-usgs-foto.txt |
| PB021 | s44 · L03: "February 14, 2015" | CONFIRMADA (é a data da página) | "By Office of Communications February 14, 2015": a data da página, não da foto. A foto não tem data (data_na_origem: null), e o bloco continua lá hoje ("lie"): o aviso_de_ano false se sustenta | idem |
| PB022 | s44 · descrição (~8 ft, 750 ft para dentro), sem crédito na tela | CONFIRMADA | "A brain coral boulder eight feet in diameter stands 750 feet inland"; "Sources/Usage Public Domain." ATENÇÃO: a mesma legenda diz "between the years 1200 and 1480". Isso nunca vai à tela, porque conflita com 1381–1391 (PB025) | idem |
| PB023 | s45 · geo anegada-costa-norte aceso em "six miles" | **DIVERGE** (geo) | A linha mede 19,94 km (12,39 mi). Os blocos datados ocupam "a shore-parallel distance of nearly 10 km from Bones Bight and Windlass Bight in the west, through an area south of Soldier Point, to Warner" (Kilbourne, l. 412–414). A voz está certa (LR F120–F121); a linha acesa tem o dobro | out/atlantico-fundo/_media/geo/anegada-costa-norte.json × FONTES/03-kilbourne-2025-grl-hal-05463233.txt |
| PB024 | s45 · "LESS THAN 80 MI SOUTH OF THE TRENCH" | CONFIRMADA | "Anegada, 125 km south of the trench"; 125 km = 77,7 mi | Wei 2024, idem PB016 |
| PB025 | s45 · "1381–1391 · U-Th DATING · KILBOURNE ET AL. 2025" | CONFIRMADA | "These dates imply coral death in 1381–1390 or 1386–1391 CE—ranges we combine"; o método é "U-series" (238U-234U-230Th), a datação urânio-tório. Geophysical Research Letters, 2025 | https://hal.science/hal-05463233v1 · FONTES/03-kilbourne-2025-grl-hal-05463233.txt l. 446 |
| PB026 | s45 · "1492 · COLUMBUS" | CONFIRMADA | "almost exactly one century before Columbus" (LR F125); a notícia do USGS se chama "Enormous Caribbean Waves Before 1492" | Kilbourne; ORIG/s44-usgs-foto.txt |
| PB027 | s45 · "EASTERN PUERTO RICO TRENCH" | CONFIRMADA | "the only reported sign that the eastern Puerto Rico Trench has produced a great earthquake" | Kilbourne |
| PB028 | s45 · "M 8+ · COMPUTER MODELS" | CONFIRMADA | "magnitudes of 8.0 or more", das simulações do tsunami; Wei 2024 traz os cenários M8.45 e M8.17 | Kilbourne; Wei 2024 |
| PB029 | s45 · as rupturas (rupturas-wei-2024), com o crédito "Wei et al. (2024)" | CONFIRMADA | Wei et al. 2024 (JGR), CC BY, com os cenários de ruptura da parte leste | Wei 2024, idem PB016 |
| PB030 | s46 · "THOUSANDS OF YEARS" (e o "only known sign") | CONFIRMADA | "The average recurrence interval in either case probably spans thousands of years"; "the only reported sign…" (LR F130–F131) | Kilbourne |
| PB031 | s47 · alfinete "2015 · NOAA ROBOT · SOUTH WALL" em 19°09'N 65°24'W | CONFIRMADA | Resumo do mergulho 09: "Puerto Rico Trench- South Wall"; ROV Deep Discoverer; na água em 2015-04-26; 19°09.053'N 065°24.430'W | https://repository.library.noaa.gov/view/noaa/21287 · FONTES/fa-noaa-ir-21287-ex1502l3-dive09.txt |
| PB032 | s47 · "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015" | CONFIRMADA | Max depth 5999.7 m = 19.684 ft: ~19,700. Do alfinete ao anel são ~209 km = ~130 mi a leste (LR F137). É a profundidade do robô, não a do fundo | idem |
| PB033 | s47 · "Deep Discoverer", "Okeanos Explorer" | CONFIRMADA | "ROV Deep Discoverer"; "NOAA Ship Okeanos Explorer"; "12 dives" na expedição (LR F138–F140) | idem; https://repository.library.noaa.gov/view/noaa/10424 |
| PB034 | s47 · legenda da foto "DEEP DISCOVERER · OKEANOS EXPLORER · APRIL 2015"; nenhum lugar além de "off Puerto Rico"; sem crédito | CONFIRMADA | Commons: "NOAAS Okeanos Explorer (R 337) deploys Deep Discoverer off Puerto Rico April 2015", data 2015-04-10, PD-NOAA. É outro mergulho que o 09: a legenda não diz SOUTH WALL | https://commons.wikimedia.org/wiki/File:NOAAS_Okeanos_Explorer_(R_337)_deploys_Deep_Discoverer_off_Puerto_Rico_April_2015.png |
| PB035 | s47/s48 · "DEC. 2018 · FIVE DEEPS EXPEDITION" | CONFIRMADA (LR) | LR F144 (18–19/12/2018) e F146 | LR |
| PB036 | s48 · pílula "PRESSURE DROP"; foto de 17/12/2018, sem aviso | CONFIRMADA | Commons: data 17 December 2018, 13:00:50; "to be prepared for a dive into the Atlantic Ocean"; o lugar é só "im Atlantischen Ozean": nenhum rótulo de lugar | https://commons.wikimedia.org/wiki/File:Limiting_Factor_to_be_prepared_for_a_dive_into_the_Atlantic_Ocean.jpg |
| PB037 | s48 · crédito "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA | Artist: "Richard Varcoe on behalf of Caladan Oceanic"; CC BY-SA 4.0, VRT 2019022510006855 | idem |
| PB038 | s48 · regência: "the Pressure Drop … with the Limiting Factor on deck" | **DIVERGE** (instrução) | A origem diz "submersible Limiting Factor hanging on the crane of its mothership Pressure Drop", e o conferente viu o submersível pendurado no pórtico, "quase encostado na água". Não está no convés | conferencia-midia.json (s48) |
| PB039 | s48 · "FIVE OCEANS", "Five Deeps Expedition" | CONFIRMADA (LR) | LR F146–F147 | LR |
| PB040 | s49 · "SPEED OF SOUND, MEASURED AT EVERY DEPTH" | CONFIRMADA | Bongiovanni: as sondas CTD do submersível e dos landers foram "used to calculate full-ocean sound velocity profiles"; a BGS chama isso de medida direta (LR F148–F149). Rigor: o perfil é calculado a partir do CTD medido em cada profundidade. "Measured" vale | FONTES/02-bongiovanni-2021-gdj3.122.txt; https://www.bgs.ac.uk/news/deepest-points-of-the-indian-ocean-and-southern-ocean-revealed/ |
| PB041 | s50 · "SURVEYED DEC. 18–19, 2018" | CONFIRMADA (LR) | LR F144 | LR |
| PB042 | s50 · "27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021" (e "± 16 FT" na lupa) | CONFIRMADA | 8.378 ± 5 m a 19,712°N, 67,311°W, com 95 % de confiança; 8.378 m = 27.486,9 ft; 5 m = 16,4 ft. Aceito em 7 April 2021, "© 2021"; o fascículo é Geosci. Data J. 2022;9:108–123: "2021" vale (é a data da publicação on-line) | https://doi.org/10.1002/gdj3.122 · FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB043 | s50 · "19.712°N 67.311°W" (pauta-dados, se for à tela) | CONFIRMADA | idem | idem |
| PB044 | s50 · "≈ 83 MI · AGUADILLA" | CONFIRMADA (LR) | LR F154–F155 (134,3 km = 83,47 mi; nunca de San Juan) | LR |
| PB045 | s50 · "INSIDE THE U.S. EXCLUSIVE ECONOMIC ZONE" | CONFIRMADA | Marine Regions: o anel cai na MRGID 33179, "United States Exclusive Economic Zone (Puerto Rico)". Nuance (pauta-geo): o anel fica a 2,6 km (1,6 mi) da área "Overlapping claim: United States (Puerto Rico) / Dominican Republic" (MRGID 48982). "Inside" continua certo; "deep inside" ou "far from" não | FONTES/fa-vliz-eez-brownson-2021.txt; https://www.marineregions.org |
| PB046 | s51 · pílula "Puerto Rico"; "MORE THAN 3 MILLION" (se o redator quiser) | CONFIRMADA | Censo 2020: 3.285.874; estimativa de 01/07/2025: 3.184.835 (as duas passam de 3 milhões; LR F156–F157). A pílula vale para o aéreo da caça; com o fallback da ISS071-E-1042, "San Juan, Puerto Rico" é o lugar_na_origem (com conferência nova) | FONTES/07-census-apportionment-2020-table02.txt; FONTES/07-census-NST-EST2025-ALLDATA.csv l. 67 |
| PB047 | s52 · "VICTOR VESCOVO" e o cargo "Five Deeps Expedition · Dec. 19, 2018" | CONFIRMADA | Release: "Victor Vescovo", Five Deeps Expedition; o mergulho em 19/12/2018 (LR F158–F161) | https://fivedeeps.com/wp-content/uploads/2019/01/PRT-Five-Deeps-Dive-Release-FINAL1221-1.pdf |
| PB048 | s52 · "WEDNESDAY, DEC. 19, 2018" | CONFIRMADA (LR) | LR F158, F161 (19/12/2018 foi uma quarta-feira) | LR |
| PB049 | s52 · crédito do retrato; retrato de 24/10/2018, sem aviso | CONFIRMADA | Commons, Artist: "Richard Varcoe on behalf of Caladan Oceanic LLC"; CC BY-SA 4.0; VRT 2019022710007903; data 24 October 2018, 09:20:24, o mesmo ano do fato | https://commons.wikimedia.org/wiki/File:Victor_Lance_Vescovo.jpg |
| PB050 | s53 · pílula "Limiting Factor" | CONFIRMADA | Release; LR F163 | idem PB047 |
| PB051 | s53 · L05: a foto do submersível sob a água é de 2018, sem aviso, e nunca é o mergulho na fossa | CONFIRMADA | Commons: "during the test phase near in 2018". O campo date (2019-02-21) é o do envio. O Credit aponta "fivedeeps.com/wp-content/uploads/2018/10/LF-Bahamas-Highlight…": a foto é de outubro de 2018 ou antes, dos testes nas Bahamas. Nenhum rótulo de lugar (lugar_na_origem: null) | https://commons.wikimedia.org/wiki/File:Limiting_Factor_floating_on_the_water_surface.jpg |
| PB052 | s53 · "≈ 2 H 30 MIN" | CONFIRMADA | "after an approximate two-and-a-half hour descent" (LR F165) | idem PB047 |
| PB053 | s53 · "FIRST PERSON · DEC. 19, 2018" | CONFIRMADA | "the first person to reach the absolute nadir of the Atlantic Ocean"; o título: "First Human Reaches the Deepest Point in the Atlantic Ocean" (LR F166–F167) | idem PB047 |
| PB054 | s54 · "One down!" (o cartão, entre aspas) | CONFIRMADA (literal) | Popular Science: "“One down!” Those were Victor Vescovo’s first words…" | https://www.popsci.com/victor-vescovo-five-deeps-submarine · FONTES/fb-popsci-2018-12-21-vescovo.txt |
| PB055 | s54 · "Victor Vescovo · Dec. 19, 2018" e "heard him say" (nunca "first words") | CONFIRMADA | A fala é da saída do mergulho de 19/12/2018, ouvida pelo repórter a bordo do Pressure Drop (LR F168–F169). "Heard him say" é a forma mais fraca e fiel do "first words" da fonte | idem |
| PB056 | s54 · "Source: Popular Science, 2018" | CONFIRMADA | O artigo é de 21/12/2018 | idem |
| PB057 | s55 · "SUB GAUGES · WITHIN ~7 FT OF THE SONAR" | CONFIRMADA | O submersível deu 8.376 ± 5 m, e o sonar 8.378 ± 5 m: 2 m = 6,56 ft, "~7 ft". "Confirmed", nunca "corrected" (LR F170–F172) | FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB058 | s56 · card "HEATHER A. STEWART" e o cargo | CONFIRMADA | "Heather Stewart, British Geological Survey marine geologist based at the Lyell Centre, Edinburgh" (BGS, 2021); no artigo de 2019, a afiliação é "British Geological Survey, Lyell Centre". Em 2018, a PopSci a chama de "a consulting marine geologist". Cargo: "Marine geologist, British Geological Survey" | https://www.bgs.ac.uk/news/deepest-points-of-the-indian-ocean-and-southern-ocean-revealed/ · FONTES/01-04-stewart-jamieson-2019-earscirev.txt |
| PB059 | s56 · card "ALAN J. JAMIESON" e o cargo | CONFIRMADA | 2019: "School of Natural and Environmental Sciences, Newcastle University"; o release: "Dr. Alan Jamieson of Newcastle University, the expedition’s lead scientist"; PopSci: "leader of the Five Deeps science team". O retrato de 2022 é da Minderoo-UWA (Commons): o cargo do card é o de 2019 ou o da expedição, nunca o de hoje sem data | FONTES/01-04-…txt; idem PB047; https://commons.wikimedia.org/wiki/File:Alan_Jamieson_gn.jpg |
| PB060 | s56 · "Photo from 2022" e o crédito "Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0" | CONFIRMADA | data_na_origem: "29 September 2022 (according to Exif data)"; obra própria de Gnangcomapp, CC BY-SA 4.0; aviso_de_ano: true | idem |
| PB061 | s56 · a linha do título e "Earth-Science Reviews, 2019"; o crédito "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0" | CONFIRMADA | Título: "The five deeps: The location and depth of the deepest place in each of the world's oceans"; "This is an open access article under the CC BY license (http://creativecommons.org/licenses/BY/4.0/)" | https://doi.org/10.1016/j.earscirev.2019.102896 · FONTES/01-04-…txt l. 95–96 |
| PB062 | s56 · "~28,675 FT (8,740 M) · GEBCO GAZETTEER · UNTIL AT LEAST 2019" e o grifo na linha da Tabela 1 | CONFIRMADA (literal na linha) | Tabela 1: "Milwaukee Deep (Puerto Rico Trench) 19.58333° N 66.5° W 8740 GEBCO Gazetteer"; §2.1.2: "8740 m as published in the IHO-IOC GEBCO Gazetteer of Undersea Feature Names". 8.740 m = 28.674,5 ft | idem |
| PB063 | s56 · "28,680 FT · NEWSPAPERS, 1939" | CONFIRMADA (LR) | LR F179–F181 | LR |
| PB064 | s55/s57 · "28,700 FT · THE LIST", "27,500 FT", "≈ 1,200 FT" | CONFIRMADA (LR) | LR F178, F151, F183 | LR |
| PB065 | s57 · o marcador "2003 · USGS" | CONFIRMADA | "three cruises in 2002 and 2003"; "8300-8340 m deep", mais raso que os 8.740 da lista (LR F184–F185) | idem PB001 |
| PB066 | s58 · as barras "PUBLISHED" e "SONAR" | CONFIRMADA | §3.2: "The available data reveal depth soundings consistently shallower than those published"; "publically available multibeam echosounder data coincides with all three of these published geographic locations" | FONTES/01-04-…txt l. 958–974 |
| PB067 | s58 · par THE LIST: 8.740 → 7.450 m (28,675 → 24,442 ft) | CONFIRMADA | "the deepest of those being 8740 m. This study report a significantly shallower depth of 7450 m for that coincident location, a median ridge within the trench axis" | idem l. 960–962 |
| PB068 | s58 · par LYMAN 1954: 8.710 → 8.370 m (28,576 → 27,461 ft) | CONFIRMADA | "Lyman (1954) reports a depth of 8710 m, whereas this study reports a coincident depth of 8370 m"; as sondagens são do Theodore N. Gill, 1952 | idem l. 962–964, 969 |
| PB069 | s58 · par STEWART & JAMIESON 2018: 8.526 → 8.300 m (27,972 → 27,231 ft). Decisão 8,526 × 8,536 | CONFIRMADA (8,526) | A fonte primária, a Tabela 1 de Stewart & Jamieson 2018, coluna "Max depth (m)": "Puerto-Rico Atlantic 19.7734° N 66.9276° W 8526". A Tabela 1 e o §2.1.2 do artigo de 2019 dizem 8526. O "8536 m" do §3.2 de 2019 é erro de digitação. Diferença: 741 ft (226 m) | https://storre.stir.ac.uk/bitstream/1893/27792/1/1-s2.0-S0079661117302768-main.pdf (doi 10.1016/j.pocean.2018.01.007), sha256 6d402945…34aa7f; FONTES/01-04-…txt l. 350, 592, 965 |
| PB070 | s58 · "SHALLOWER EVERY TIME" | CONFIRMADA | "consistently shallower than those published": os três pares são mais rasos (−4.232, −1.115 e −741 ft, nos valores exatos) | idem |
| PB071 | s58 · a fonte "Source: Stewart & Jamieson, Earth-Science Reviews, 2019, Table 1" | **DIVERGE** (parcial) | A Tabela 1 só tem os números PUBLICADOS (8740, 8710, 8526). Os números do SONAR (7450, 8370, 8300) estão no texto, §3.2, e não na Tabela 1. A Tabela 1 real fica por baixo como prova, e mostra só metade do gráfico | idem l. 341–350 × 958–966 |
| PB072 | s59 · o grifo "propagated uncorrected through online sources and the scientific literature" e o crédito CC BY 4.0 | CONFIRMADA (literal) | Resumo: "…propagated uncorrected through online sources and the scientific literature" (no PDF, "scientiﬁc" com ligadura; na tela, "scientific"). CC BY 4.0, idem PB061 (LR F189) | idem |
| PB073 | s59 · o crédito "Stewart & Jamieson, Earth-Science Reviews, 2019" na folha | CONFIRMADA | idem PB061 | idem |
| PB074 | s60 · alfinete "MILWAUKEE DEEP · LISTED" em 19°35'N 66°30'W | CONFIRMADA | Tabela 1: "19.58333° N 66.5° W 8740 GEBCO Gazetteer". O ponto cai na zona dos EUA (MRGID 33179), 53,6 mi a leste do anel. ATENÇÃO: a Marine Regions tem "Milwaukee Depth" em outro ponto (19,583°N, 68,342°W, MRGID 30109, perto do ponto de Lyman). O alfinete LISTED é o da lista antiga (o GEBCO Gazetteer), e está certo | FONTES/01-04-…txt l. 341; FONTES/fa-mr-30109-milwaukee.txt |
| PB075 | s60 · "~24,442 FT (7,450 M) · A RIDGE" | CONFIRMADA | "7450 m for that coincident location, a median ridge within the trench axis"; 7.450 m = 24.442,3 ft | idem PB067 |
| PB076 | s60 · o colchete "2019 → 2021" | CONFIRMADA (LR) | LR F192–F193 | LR |
| PB077 | s60 · "27,585 FT (8,408 M) · 2019 ESTIMATE" e o ponto 19,613°N, 67,847°W | CONFIRMADA | Resumo de 2019: "Puerto Rico Trench (Atlantic Ocean; 8408 m 19.613° N/67.847° W)"; 8.408 m = 27.585,3 ft. O ponto cai na zona dominicana (MRGID 8409) | FONTES/01-04-…txt l. 23; FONTES/fa-vliz-eez-estimativa-2019.txt |
| PB078 | s60 · "≈ 36 MI" | CONFIRMADA (LR) | LR F198 (57,3 km = 35,58 mi) | LR |
| PB079 | s60 · o nome da zona dominicana (s60 › beats[3]) | CONFIRMADA (com forma) | Marine Regions, MRGID 8409: "Dominican (Republic) Exclusive Economic Zone". Na tela: "DOMINICAN REPUBLIC EEZ" ou "DOMINICAN REPUBLIC · EXCLUSIVE ECONOMIC ZONE" (nunca "Dominican waters" como fronteira, nem "territorial") | FONTES/fa-vliz-eez-estimativa-2019.txt |
| PB080 | s61 · "2021" e "≈ 100 MI" | CONFIRMADA (LR) | LR F193, F199, F201 (160,4 km = 99,68 mi até La Altagracia) | LR |
| PB081 | s61 · "EXCLUSIVE ECONOMIC ZONE · UP TO ~230 MI (200 NMI) · NOAA" | CONFIRMADA | NOAA: "The U.S. Exclusive Economic Zone (EEZ) extends no more than 200 nautical miles from the territorial sea baseline … including the Commonwealth of Puerto Rico"; 200 nmi = 230,2 mi | https://oceanservice.noaa.gov/facts/eez.html · FONTES/sala-04-noaa-eez.txt |
| PB082 | s61 · regência: "the boundary (zee-limites-eua-rd) lit" ao lado do anel | **DIVERGE** (geo/instrução) | Na camada, a linha ao lado do anel é a 3602, uma "Unsettled median line" (fonte: Limits in the Seas No. 130). Ela é a borda da área "Overlapping claim: United States (Puerto Rico) / Dominican Republic" (MRGID 48982), e não a fronteira da zona dominicana. A "Median line" (3344) só existe ao sul de 18,88°N | pauta-geo.json (zee-limites-eua-rd, zee-sobreposicao-eua-rd) |
| PB083 | s61 · crédito "Maritime boundaries: MarineRegions.org (VLIZ)" e a citação na descrição | CONFIRMADA | "Marine Regions’ products have been licensed under CC-BY since Maritime Boundaries version 11 (2019)"; citação: "Flanders Marine Institute (2026): MarineRegions.org. Available online at www.marineregions.org. Consulted on 2026-10-29." (a data de consulta muda com o dia) | https://www.marineregions.org/disclaimer.php (lida hoje) |
| PB084 | s62 · a consulta ("MILWAUKEE"), a resposta e "AS OF OCT. 2026" | CONFIRMADA (volátil) | API do GEBCO Gazetteer (NOAA NCEI), nameContains=Milwaukee: {"items":[],"page":1,"totalPages":0,"totalItems":0,"itemsPerPage":50}. Consultada em 26/10 e 28/10 (pesquisa) e de novo HOJE, 29/10/2026. "SEARCHED OCT. 26, 2026" (regência) e "OCT. 2026" valem os dois | https://www.ngdc.noaa.gov/gazetteer/api/v1/feature?nameContains=Milwaukee · FONTES/fa-gazetteer-milwaukee.txt |
| PB085 | s62 · "GEBCO Gazetteer" e a linha "the official list of undersea feature names" | CONFIRMADA | O nome oficial: "IHO-IOC GEBCO Gazetteer of Undersea Feature Names" (2019, §2.1.2). ATENÇÃO: o nome "Milwaukee Depth" ainda existe em OUTRO gazetteer, o da Marine Regions (MRGID 30109, "status: standard"). A tela nomeia o GEBCO Gazetteer; nunca "no list" nem "not recognized" | FONTES/01-04-…txt l. 591; FONTES/fa-mr-30109-milwaukee.txt |
| PB086 | s63 · pílula "Seabed 2030"; os dados foram ao Seabed 2030 | CONFIRMADA | "All bathymetric data collected by Caladan Oceanic were submitted to Seabed 2030" (outubro de 2020; LR F207–F208) | FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB087 | s63 · a máscara "medido" (gebco-mundo-medido.png, gebco-atlantico-medido.png = TID 10–17 e 44) | **DIVERGE** (geo) | A documentação da GEBCO põe 10–17 em "Direct measurements" e o 44 em "Indirect measurements": "Depth value at this location is based on bathymetric depths from multiple sources including measured and derived data … where interpolation between sounding points is guided by satellite-derived gravity data". O 44 não é medido | out/atlantico-fundo/_tmp/pesquisa-geo/baixado/gebco-cesta-1/GEBCO_Grid_documentation.txt (tabela 2, TID) |
| PB088 | s63 (e s67, s75) · crédito "GEBCO Compilation Group (2026) GEBCO 2026 Grid", com o DOI na descrição | CONFIRMADA | "we ask that you acknowledge the source. This should be of the form: … GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi: 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa)". A forma longa do WMS ("Imagery reproduced from…") é da pauta-geo e não foi lida por mim; a forma curta basta | idem, §6.0; https://www.gebco.net/data-products/gridded-bathymetry/terms-of-use |
| PB089 | s63 › beats[1] (condicional) · a foto do Limiting Factor na Geórgia do Sul, 31/01/2019, crédito Varcoe/Caladan | CONFIRMADA (metadado; só com veredito do conferente) | Commons: DateTimeOriginal "2019-01-31 03:21:06"; Artist "Richard Varcoe on behalf of Caladan Oceanic LLC"; CC BY-SA 4.0, VRT 2019022510006855; o título diz "Cumberland East Bay (South Georgia Island)". O rótulo "South Georgia" vale; nunca "South Sandwich" | https://commons.wikimedia.org/wiki/File:Limiting_Factor_at_the_Cumberland_East_Bay_(South_Georgia_Island).jpg (API, lida hoje) |
| PB090 | s64 · "South Sandwich Trench" | CONFIRMADA | Bongiovanni: a fossa vai de 54°40′S a 60°40′S (LR F209–F210) | FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB091 | s64 · "≈ 5,700 MI" (anel → Meteor). Decisão 9.170 × 9.195 km | CONFIRMADA | Geodésica WGS84 (Vincenty): 9.170,3 km = 5.698 mi; esférica (haversine, R = 6.371 km, a do dossiê): 9.195 km = 5.714 mi. "≈ 5,700 MI" vale nas duas | cálculo sobre 19,712°N 67,311°W → 55,230°S 26,173°W (Bongiovanni) |
| PB092 | s64 · "≈ 3 IN / YEAR (65–78 MM)" e "≈ ¾ IN" | CONFIRMADA (LR) | LR F213–F216 (65–78 mm = 2,56–3,07 in; Porto Rico ~20 mm = 0,79 in; ×3,25–3,9) | LR |
| PB093 | s65 (s63 › beats[5]) · "SOUTH SANDWICH ISLANDS" (e, se usado, "A CHAIN ~220 MI LONG") | CONFIRMADA | NASA EO: "Saunders Island is one of the South Sandwich Islands"; "a string of small volcanic peaks about 350 kilometers (220 miles) long"; sem bandeira nem dono | https://science.nasa.gov/earth/earth-observatory/a-bright-spot-at-mount-michael/ · ORIG/s66-nasa-eo.txt |
| PB094 | s65 · pílula "Mount Michael" no centro da ilha Saunders (nao_conferido da geo: o cume) | CONFIRMADA (como centro) | NASA EO: "Mount Michael, the stratovolcano at the center of Saunders Island": a pílula no centro, declarada, se sustenta. O cume preciso NÃO foi lido. A Wikipedia dá 57°48′13″S 26°28′52″W, a ~3 km do centro declarado (-57,7804, -26,448), e o GVP não foi lido. Nenhum alfinete fino na cratera | idem; mount-michael-saunders.json |
| PB095 | s66 · "Landsat · Aug. 24, 2026", a pílula "Mount Michael" e o crédito na descrição | CONFIRMADA | "acquired with the OLI (Operational Land Imager) on Landsat 8 on August 24, 2026"; "natural-color image is overlaid with an infrared signal (OLI bands 7-6-5), shown in red"; o crédito: "NASA Earth Observatory images by Michala Garrison, using Landsat data from the U.S. Geological Survey". Se a tela falar de cor: cor natural com o infravermelho por cima | idem |
| PB096 | s67 · a área TID acesa como "the 2019 survey" (levantamento-fossa-sandwich-tid) | **DIVERGE** (geo) | A camada é o que ficou medido "de novo depois de 2019": 23.323 km², de TODOS os levantamentos entregues à GEBCO de 2019 a 2026. Só 15.045 km² são da Five Deeps (Bongiovanni, Tabela 1). A própria pauta-geo diz "nunca rotular a área como 'o levantamento de 2019'" | pauta-geo.json (levantamento-fossa-sandwich-tid) |
| PB097 | s67 · "~9/10" (nunca mapeado antes) | CONFIRMADA | "Prior to the FDE, around 91% of the trench was un-mapped" (LR F224–F225); a GEBCO_2019 dá 89,0 % sem medida direta dentro da fossa de 6.000 m (pauta-geo). As duas dão ~9/10 | FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB098 | s67 · "27,651 FT (8,428 M) · MOST PUBLISHED" (· STEWART & JAMIESON 2019) | CONFIRMADA | "The most commonly reported depth for the Meteor Deep is 8428 m"; 8.428 m = 27.650,9 ft | FONTES/01-04-…txt |
| PB099 | s67 · "Meteor Deep" e "27,116 ± 43 FT (8,265 ± 13 M) · METEOR DEEP" (· BONGIOVANNI ET AL. 2021); o anel em 55,230°S 26,173°W | CONFIRMADA | Bongiovanni: 8.265 ± 13 m, a 55,230°S, 26,173°W; 8.265 m = 27.116,1 ft; 13 m = 42,7 ft | FONTES/02-bongiovanni-2021-gdj3.122.txt |
| PB100 | s67 · "371 FT (113 M) SHALLOWER" e os 164 ft da lupa | CONFIRMADA | 8.378 − 8.265 = 113 m = 370,7 ft; 8.428 − 8.378 = 50 m = 164,0 ft | aritmética sobre PB042, PB098, PB099 |
| PB101 | s67 · o desenho: o submersível passa sobre o Meteor sem descer ("didn't dive there") | CONFIRMADA | Tabela 1 de Bongiovanni: "N/A" na coluna do submersível para o Meteor Deep (LR F233) | idem |
| PB102 | s68 · "International Hydrographic Organization" e "60°S · SOUTHERN OCEAN (IHO, 2023)" | CONFIRMADA | Resolução 02/2023: "the IHO recognizes the Southern Ocean…"; "the northern geographic limit of the Southern Ocean is defined by the parallel of Latitude 60°S" (LR F240–F243) | FONTES/09-iho-M3-E-2026.txt l. 8146–8156 |
| PB103 | s68 · "~330 MI NORTH OF 60°S"; a ponta sul da fossa cruza a linha | CONFIRMADA | 60° − 55,230° = 4,77° ≈ 531 km = 330 mi; a fossa vai até 60°40′S | aritmética; Bongiovanni |
| PB104 | s68/s69 · a linha que explica (pauta-logos): "International Hydrographic Organization — the global body for nautical charts" | NÃO ACHEI | Nenhuma fonte do dossiê define a IHO com essa frase. A M-3 trata de "Nautical Charting World Wide" e diz que a missão é "to create a global environment in which States provide adequate and timely hydrographic data, products and services". A frase sugerida é uma interpretação. A pauta-logos a dá como opcional | FONTES/09-iho-M3-E-2026.txt |
| PB105 | s69 · a fonte "International Hydrographic Organization (IHO)" e a passagem recriada | CONFIRMADA (a passagem existe) | Resolução 02/2023, p. 124: "Since these limits have neither political nor oceanographic or, more generally, environmental significance whatsoever, Hydrographic Offices may continue to adopt their own limits as long as these limits remain technically consistent with the data model of the polygonal demarcation of global sea areas (IHO S-130). Current national reservations and/or comments on the limits … are provided in Appendix 1." A passagem é do corpo da resolução, e as reservas nacionais estão no Apêndice 1 | FONTES/09-iho-M3-E-2026.txt l. 8169–8173 |
| PB106 | s69 · os grifos em "political meaning" e "not every country" | **DIVERGE** | Nenhuma das duas expressões está na passagem. Elas são a paráfrase da voz. Grifar numa folha "fiel" palavras que o documento não tem é pôr na boca da IHO o que ela não escreveu | idem |
| PB107 | s70 · "Equator"; o anel norte a 19,712°N e o sul a 55,230°S | CONFIRMADA | LR F289–F290; Bongiovanni | idem PB042, PB099 |
| PB108 | s71 · "~200 · 1964 (REPORTED) → NO SNAILFISH SEEN · 2019" | CONFIRMADA | NORA (resumo de Jamieson et al. 2020): "observing 200 snailfish (Liparidae) during a one mile transect by the bathyscaphe Archimède"; "In 2019 the submersible DSV Limiting Factor revisited the exact same site … No snailfish were observed." O mergulho é de 1964 (o título) e o relato, de 1965: "(REPORTED)" qualifica a contagem, e está certo | https://nora.nerc.ac.uk/id/eprint/528113/ · FONTES/fa-nora-528113-dsr1-2020.txt |
| PB109 | s71 · o desenho: a linha de ~1 mi a ~24.000 ft, os pepinos-do-mar na mesma densidade, "2019" e a legenda "DEC. 2018" no submersível | CONFIRMADA | "one mile transect"; o título: "dive to 7300 m" = 23.950 ft; "a large number of the holothurian Peniagone sp. were seen in a density similar to that reported originally for the snailfish"; o Limiting Factor levou Vescovo em 12/2018 (LR F257–F265) | idem |
| PB110 | s72 · "COLOR · TEXTURE · SHAPE", palavra a palavra | CONFIRMADA (sem aspas) | "The holothurian has a similar exterior colour, texture and morphology to the snailfish." "SHAPE" está por "morphology": vale sem aspas, e nunca entre aspas | idem PB108 |
| PB111 | s72 · as pílulas "snailfish" e "sea cucumber" | CONFIRMADA | NOAA: "An example of a deep-sea snailfish" (o clipe da s27); a página do pepino-do-mar nadador: "this sea cucumber put on quite a show" | https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ (ORIG/s27-noaa-oer.txt); https://oceanexplorer.noaa.gov/multimedia/sea-cucumber-swimming/ |
| PB112 | s72 · legenda "Denson Seamount, Alaska · 1,365 m · 2023" | CONFIRMADA (com forma) | A legenda gravada: "Site: Denson Seamount; Expedition: Seascape Alaska 5; Depth: 1,365 meters (4,480 feet)"; o cartão final: "Seascape Alaska 5 / August 31, 2023"; a NOAA: "spotted at a depth of 1,365 meters (4,480 feet) during dive 8 of NOAA Ocean Exploration's 2023 Seascape Alaska 5 expedition". O Denson Seamount fica no Golfo do Alasca. Forma do canal: "4,480 FT (1,365 M)" | idem; conferencia-midia.json (s27) |
| PB113 | s72 · legenda "North Tutuila Flank, American Samoa · … · 2026" (o lugar e o ano) | CONFIRMADA | A página da expedição: "2026 American Samoa ROV + Mapping Exploration (EX2606)", NOAA Ship Okeanos Explorer, de 20/08 a 17/09/2026, "Dive 03: North Tutuila Flank". A página do clipe: "During Dive 03 of the 2026 American Samoa ROV + Mapping Exploration expedition" | https://oceanexplorer.noaa.gov/expedition/ex2606/; https://oceanexplorer.noaa.gov/multimedia/sea-cucumber-swimming/ |
| PB114 | s72 · a profundidade "2,300 m" na legenda da Samoa | NÃO ACHEI (em texto) | Nenhuma página de texto da NOAA dá a profundidade do clipe nem do Dive 03 (a da expedição dá a faixa geral, "approximately 2,000 to 6,000 meters"). O único apoio é a legenda gravada no vídeo, "North Tutuila Flank - American Samoa / 2,300 meters (1.4 miles)", transcrita pelo conferente: eu não abro quadro (imagens 0). Um resumo de busca da página de transmissão citou um plano do Dive 03 de ~1.380 a ~1.240 m, que não confirmei (a página mudou): conflito a resolver no quadro | conferencia-midia.json (s72); https://oceanexplorer.noaa.gov/expedition/ex2606/ |
| PB115 | s72 · "St. Croix" (GRAFIAS do espelho) | **DIVERGE** | O clipe aprovado é o da Samoa Americana (EX2606, Dive 03; a exceção do Lucas de 29/10/2026, 00:1x). "St. Croix" é grafia de um clipe antigo e não vai à tela; a regência já pede o alinhamento (para_passos_seguintes, item 13) | regencia.json; conferencia-midia.json (s72) |
| PB116 | s72 · nada diz que é a fossa; sem crédito na tela; os créditos na descrição | CONFIRMADA | Os dois clipes são de outro lugar (o Alasca a 1.365 m e a Samoa). Domínio público federal. A descrição leva "NOAA Ocean Exploration, Seascape Alaska 5 (2023)" e "NOAA Ocean Exploration, 2026 American Samoa ROV + Mapping Exploration", o crédito das páginas | idem |
| PB117 | s73 · "JAMIESON, LINLEY, STEWART, NARGEOLET & VESCOVO · DEEP-SEA RESEARCH I, 2020" e "VICTOR VESCOVO · CO-AUTHOR, JAMIESON ET AL. 2020" | CONFIRMADA | NORA: "Jamieson, Alan J.; Linley, Thomas D.; Stewart, Heather A.; Nargeolet, Paul-Henry; Vescovo, Victor. 2020 … Deep Sea Research Part I: Oceanographic Research Papers, 162, 103336" (LR F268, F274) | idem PB108 |
| PB118 | s73 · a "conclusão fiel" com o grifo em "sea cucumbers" e "\"fish\"" entre aspas | **DIVERGE** | A conclusão que a fonte lida traz é: "It is concluded that the reported hadal snailfish of the Puerto Rico Trench was in fact a misidentification of the holothurian Peniagone sp." Não há "sea cucumbers" nem "fish" entre aspas. O texto integral é pago e não foi lido ("Full text not available from this repository"). Que holotúrio é pepino-do-mar é fato (LR F264–F265), mas não é palavra do artigo | idem |
| PB119 | s73 · o segundo grifo em "count and the look" e "can't be checked again" como frase do artigo | **DIVERGE** | O resumo diz "in a density similar to that reported originally for the snailfish" e "a similar exterior colour, texture and morphology". "Count and the look" é paráfrase, e "can't be checked again" é do narrador. A regência erra ao dizer que o limite "é texto do artigo" | idem |
| PB120 | s74 · "~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE)" | CONFIRMADA | NOAA: "boundary between 8,200 and 8,400 meters deep (27,000 to 28,000 feet)". 8.200 m = 26.902,9 ft e 8.400 m = 27.559,1 ft. Os metros são literais; os pés são a conversão exata (a NOAA arredonda os dela) | https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ · FONTES/fb-noaa-oer-deepest-fish.txt |
| PB121 | s74 · a voz "about 27,500 feet" × a NOAA "about 8,400 meters (28,000 feet)" | CONFIRMADA (é conversão, não divergência de dado) | NOAA: "no fish lives deeper than about 8,400 meters (28,000 feet)". 8.400 m = 27.559 ft: "about 27,500" é a conversão mais próxima do número da NOAA, e o "28,000" é o arredondamento da própria NOAA (LR F276–F277). A voz não muda | idem |
| PB122 | s74/s75 · a rede de 1970 a "~27,460 FT" | CONFIRMADA | NOAA: "8,370 meters (27,460 feet)" (LR F278) | idem |
| PB123 | s74 · "≈ 83 MI" | CONFIRMADA (LR) | LR F282 | LR |
| PB124 | s75 · "DEC. 2018 · SONAR · 27,487 FT" | CONFIRMADA | idem PB042; levantamento de 18–19/12/2018 | idem PB042 |
| PB125 | s75 · "1964 · CREW · ~24,000 FT" | CONFIRMADA | NORA, o título: "Revisiting the 1964 Archimède bathyscaphe dive to 7300 m"; 7.300 m = 23.950 ft | idem PB108 |
| PB126 | s75 · "23,250 FT" (sem ano) | CONFIRMADA (aritmética; a fonte é do lote A) | 3.875 braças × 6 = 23.250 ft: a sondagem do HMS Challenger da s18 (F22 do dossiê). A fonte primária é do lote A | espelho.json (s18) |
| PB127 | s50, s55, s67, s75 · as escalas do desenho: "DETAIL · 100 FT", "DETAIL · 500 FT", "SURFACE · 0 FT" e o exagero vertical ×10 | NADA A CHECAR (fora do M) | São números do próprio desenho, não afirmação sobre o mundo. Têm de bater com a escala desenhada (qc-visual), e o ×10 vai declarado na legenda | — |
| PB128 | s75 · o crédito GEBCO e o perfil real Aguadilla → anel | CONFIRMADA | A forma de PB088. A grade dá 8.373 m no anel, contra 8.378 ± 5 m publicados; a régua usa o número publicado (27,487), e nenhum número de tela sai da grade (pauta-geo) | GEBCO_Grid_documentation.txt; pauta-geo.json |
| PB129 | sem cena · o ponto de Lyman 1954 (milwaukee-deep-lyman-1954.json): 19,6°N, 68,31667°W | CONFIRMADA | Tabela 1 de 2019: "19.6° N 68.31667° W 8710 Lyman (1954)" | FONTES/01-04-…txt l. 345 |

## 3 · Achados acionáveis (formato: [peso] → CONSERTO → RAIZ)

Nenhum achado toca a voz nem a tese: o ponto mais fundo do Atlântico, os 27,487 ft, a lista errada, o Meteor Deep e a linha de 60°S estão todos CONFIRMADOS. Os achados são de instrução de tela e de geo, ainda antes do art.

1. **[MÉDIO] PB106 · s69, os grifos.**
   - → CONSERTO: a folha recriada traz a passagem literal da Resolução 02/2023 (M-3, p. 124), e os grifos caem só em palavras dela.
     - Em "no political meaning": grifar "neither political nor oceanographic or, more generally, environmental significance whatsoever".
     - Em "not every country uses it": grifar "Hydrographic Offices may continue to adopt their own limits".
     - A referência na folha é "IHO Resolution 02/2023".
   - → RAIZ: INSTRUÇÃO. A regência grifa a paráfrase da voz como se fosse o texto do documento. Executado como está escrito, vira citação inventada (GRAVE).
2. **[MÉDIO] PB118 e PB119 · s73, a conclusão e o limite.**
   - → CONSERTO: a folha traz a conclusão literal: "It is concluded that the reported hadal snailfish of the Puerto Rico Trench was in fact a misidentification of the holothurian Peniagone sp."
     - O 1º grifo cai em "misidentification of the holothurian Peniagone sp.". Fora das aspas e fora da folha, uma legenda do canal: "HOLOTHURIAN = SEA CUCUMBER".
     - O 2º grifo, na mesma folha: "in a density similar to that reported originally for the snailfish" e "similar exterior colour, texture and morphology".
     - "Can't be checked again" fica só na voz, nunca na folha nem atribuído ao artigo.
   - → RAIZ: INSTRUÇÃO, a mesma do achado 1.
3. **[MÉDIO] PB096 · s67, a área acesa como "the 2019 survey".**
   - → CONSERTO: a camada TID não leva rótulo de ano nem de autor.
     - Se precisar de rótulo: "MAPPED SINCE 2019 (ALL SURVEYS)", ou nada.
     - "The expedition mapped this trench" é da voz, e o mapa só a acompanha.
   - → RAIZ: PONTUAL (geo).
4. **[MÉDIO] PB087 · s63, a máscara "medido".**
   - → CONSERTO: refazer gebco-mundo-medido.png e gebco-atlantico-medido.png só com TID 10–17 ("Direct measurements").
     - Ou manter o 44 e não dizer "measured" em lugar nenhum: nem na tela nem na descrição da cena.
   - → RAIZ: PONTUAL (geo).
5. **[MÉDIO] PB023 · s45, a costa norte acesa em "six miles".**
   - → CONSERTO: a costa norte acende como "the side that faces the trench", sem medida e sem rótulo "6 MI".
     - O trecho de ~10 km (de Bones Bight e Windlass Bight até Warner) só se desenha depois de localizado (ver "Para a Sala").
     - Até lá, nenhuma tela diz que a linha acesa tem 6 milhas.
   - → RAIZ: PONTUAL (geo).
6. **[MÉDIO] PB082 · s61, "the boundary" ao lado do anel.**
   - → CONSERTO: a linha 3602 sai tracejada e sem rótulo, como a borda de uma área de reivindicação sobreposta.
     - Ou a área MRGID 48982 sai em cinza neutro, sem nome.
     - Nunca "BORDER" nem "BOUNDARY". "U.S. waters" para o anel continua certo (PB045).
   - → RAIZ: PONTUAL (geo).
7. **[LEVE] PB008 · s40, a faixa da Passagem de Mona.**
   - → CONSERTO: estender a faixa declarada ao norte até ~18,8°N, para o epicentro do NCEI (18,7°N, 67,189°W) cair dentro dela.
     - Ou pôr o marcador de 1918 no ponto do NCEI e não dizer que a faixa é o limite da passagem.
   - → RAIZ: PONTUAL.
8. **[LEVE] PB071 · s58, a linha de fonte.**
   - → CONSERTO: "Source: Stewart & Jamieson, Earth-Science Reviews, 2019 (Table 1 and Section 3.2)".
   - → RAIZ: PONTUAL.
9. **[LEVE] PB115 · s72, "St. Croix".**
   - → CONSERTO: tirar "St. Croix" das GRAFIAS. A legenda do clipe é "North Tutuila Flank, American Samoa".
   - → RAIZ: PONTUAL (espelho desalinhado da regência).
10. **[LEVE] PB114 · s72, os 2,300 m.**
    - → CONSERTO: até a Sala reler o quadro da legenda, a legenda sai "North Tutuila Flank, American Samoa · 2026", sem profundidade.
    - Confirmados os 2.300 m: "North Tutuila Flank, American Samoa · ~7,500 FT (2,300 M) · 2026".
    - → RAIZ: PONTUAL.
11. **[LEVE] PB019 · s43, "the island's east tip".**
    - → CONSERTO: "the window moving toward the reef and the salt ponds". Nenhum texto diz "east".
    - → RAIZ: PONTUAL (descrição da regência).
12. **[LEVE] PB038 · s48, "on deck".**
    - → CONSERTO: "the Limiting Factor hanging from the stern A-frame". Nenhum texto diz "on deck".
    - → RAIZ: PONTUAL.
13. **[LEVE] PB104 · a linha "the global body for nautical charts".**
    - → CONSERTO: tirar a linha. A voz diz o nome inteiro, e a pílula "International Hydrographic Organization (IHO)" basta.
    - → RAIZ: PONTUAL.

## 4 · Lista de nomes (anônimo → nomeável)

| como o texto diz | quem é | credencial | onde |
|---|---|---|---|
| "two scientists" (s56) | **Heather A. Stewart** | Geóloga marinha do British Geological Survey, no Lyell Centre, em Edimburgo (BGS, 2021; afiliação no artigo de 2019). Em 2018, "consulting marine geologist" (PopSci) | https://www.bgs.ac.uk/news/deepest-points-of-the-indian-ocean-and-southern-ocean-revealed/ |
| idem | **Alan J. Jamieson** | Newcastle University em 2019 (School of Natural and Environmental Sciences); o cientista-chefe da Five Deeps Expedition ("the expedition’s lead scientist"). Em 2022, na Minderoo-UWA (categoria do retrato no Commons) | https://doi.org/10.1016/j.earscirev.2019.102896; https://fivedeeps.com/wp-content/uploads/2019/01/PRT-Five-Deeps-Dive-Release-FINAL1221-1.pdf |
| "a reporter on board" (s54) | **Josh Dean** | Repórter da Popular Science a bordo do Pressure Drop ("By Josh Dean") | https://www.popsci.com/victor-vescovo-five-deeps-submarine |
| "a 2025 study", "the scientists who dated the coral" (s45, s46) | **K. Halimeda Kilbourne** et al. | Chesapeake Biological Laboratory, University of Maryland Center for Environmental Science. Entre os coautores, Brian F. Atwater (USGS), o autor da foto da s44 | https://hal.science/hal-05463233v1 |
| "computer models" (s45) | **Yong Wei**, Uri S. ten Brink e Brian F. Atwater (2024) | Wei: University of Washington (CICOES) e NOAA Pacific Marine Environmental Laboratory. Ten Brink: USGS Woods Hole Coastal and Marine Science Center | https://repository.library.noaa.gov/view/noaa/61168 |
| "the agency", "the USGS" (s38, s39) | USGS Woods Hole Coastal and Marine Science Center | A página não nomeia autor. Fica institucional | https://www.usgs.gov/centers/whcmsc/science/caribbean-tsunami-and-earthquake-hazards-studies-seafloor-map |
| "five authors" (s73) | Alan J. Jamieson, Thomas D. Linley, Heather A. Stewart, Paul-Henry Nargeolet e Victor Vescovo | Deep-Sea Research I 162:103336 (2020) | https://nora.nerc.ac.uk/id/eprint/528113/ |
| "NOAA's estimate" (s74) | NOAA Ocean Exploration | A página não nomeia autor. Fica institucional | https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ |

## 5 · Os 2 padrões mais vistos

1. **A instrução afirma mais do que a fonte.** Grifo com as palavras da voz numa folha "fiel" (s69, s73). Geometria rotulada além do que é: uma faixa que não contém o epicentro (s40), uma linha com o dobro do trecho (s45), uma linha de reivindicação chamada de fronteira (s61), uma máscara "medida" com dado interpolado (s63), uma área de 2019 a 2026 chamada de "2019" (s67). Os números estão certos; o desenho em volta deles é que exagera.
2. **A descrição da mídia se afasta da origem.** "East tip" (s43), "on deck" (s48), "St. Croix" (s72), "Table 1" para números que estão no texto (s58). Nada disso é fala, mas é o tipo de frase que vira legenda.

## 6 · Fechamento

COBERTURA: 116 de 116 (os itens do lote com fonte aberta neste laudo; o denominador foi derivado à mão, §1). **CHECADO, com divergências periféricas**: não é "limpo" (há 12 DIVERGE e 2 NÃO ACHEI), e não ficou item sem veredito.

Itens que só citam o laudo do roteiro: **12** (PB035, PB039, PB041, PB044, PB048, PB063, PB064, PB076, PB078, PB080, PB092 e PB123), fora do M. Mais 1 NADA A CHECAR (PB127), fora do M.

Placar do M: 102 CONFIRMADA · 12 DIVERGE · 2 NÃO ACHEI · 0 REFUTADA.

NOTA: 8,5/10

### Para o redator-de-tela (por cena)

- **s38:** "≈ 27,300 FT · USGS · 2002–2003" vale. Se quiser o metro: "(8,300–8,340 M)". A causa fica atribuída ("suggests").
- **s39:** a pílula "APPEARS TO BE HIGH" · USGS, com as aspas, é literal. As cicatrizes são uma região declarada (nenhuma camada as desenha uma a uma).
- **s40:**
  - "Mona Passage", "1918 · NOT IN THE TRENCH" e "M 7.1 · NOAA NCEI" valem.
  - A atribuição fica: o mesmo banco cita M 7.5.
  - O marcador de 1918 depende do conserto 7.
- **s41:**
  - "UP TO 20 FT (6.1 M) · NOAA NCEI" só no mapa da costa oeste.
  - Sobre a foto vão só "MORE THAN 100" e "Mayagüez, Puerto Rico", com o trema.
  - O crédito: "El Mundo / Universidad de Puerto Rico", a 60 px.
  - "San Firmín" é a grafia do Commons e não vai à tela.
- **s42 e s43:** "Anegada" e "Anegada, British Virgin Islands" valem (nunca "U.S."). O crédito: "David Broad / Wikimedia Commons · CC BY 3.0".
- **s44:**
  - Só "Anegada" (nunca "north shore"), sem crédito e sem aviso de ano.
  - "February 14, 2015" é a data da página, não da foto.
  - Nunca "1200–1480".
- **s45:**
  - "LESS THAN 80 MI SOUTH OF THE TRENCH" (125 km = 77,7 mi), "1381–1391 · U-Th DATING · KILBOURNE ET AL. 2025" e "1492 · COLUMBUS" valem.
  - "EASTERN PUERTO RICO TRENCH" e "M 8+ · COMPUTER MODELS" também.
  - O termo da fonte é "uranium-series"; "U-Th" é aceitável.
  - Nenhum "6 MI" sobre a linha (conserto 5).
- **s46:** "THOUSANDS OF YEARS" vale.
- **s47:**
  - "2015 · NOAA ROBOT · SOUTH WALL" e "SOUTH WALL DIVE · ~19,700 FT (6,000 M) · FAR EAST OF THE DEEPEST POINT · 2015" valem. A profundidade é a do robô, não a do fundo.
  - A legenda da foto: "DEEP DISCOVERER · OKEANOS EXPLORER · APRIL 2015" (nunca SOUTH WALL nem DIVE 09), sem crédito.
- **s48:**
  - "DEC. 2018 · FIVE DEEPS EXPEDITION", "PRESSURE DROP" e "FIVE OCEANS" valem, sem rótulo de lugar e sem aviso.
  - O crédito: "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0".
- **s49:** "SPEED OF SOUND, MEASURED AT EVERY DEPTH" vale.
- **s50:**
  - "SURVEYED DEC. 18–19, 2018", "27,487 ± 16 FT (8,378 ± 5 M) · BONGIOVANNI ET AL. 2021" e "≈ 83 MI · AGUADILLA" valem.
  - "INSIDE THE U.S. EXCLUSIVE ECONOMIC ZONE" também vale. Nunca "deep inside": o anel fica a 1,6 mi de uma área de reivindicação sobreposta.
- **s51:** "Puerto Rico" e "MORE THAN 3 MILLION" valem (3.285.874 em 2020; 3.184.835 em 2025).
- **s52:**
  - "VICTOR VESCOVO", "Five Deeps Expedition · Dec. 19, 2018" e "WEDNESDAY, DEC. 19, 2018" valem, sem aviso.
  - O crédito: "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0".
- **s53:**
  - "Limiting Factor", "≈ 2 H 30 MIN" e "FIRST PERSON · DEC. 19, 2018" valem.
  - A foto é da fase de testes de 2018, sem aviso, e nunca é dita como o mergulho na fossa.
- **s54:**
  - "One down!", entre aspas, é literal. "Victor Vescovo · Dec. 19, 2018" e "Source: Popular Science, 2018" valem.
  - "Heard him say", nunca "first words".
- **s55:** "SUB GAUGES · WITHIN ~7 FT OF THE SONAR" vale ("confirmed", nunca "corrected").
- **s56:**
  - Stewart: "HEATHER A. STEWART · MARINE GEOLOGIST, BRITISH GEOLOGICAL SURVEY".
  - Jamieson: "ALAN J. JAMIESON · LEAD SCIENTIST, FIVE DEEPS EXPEDITION" ou "· NEWCASTLE UNIVERSITY (2019)". Nunca o cargo de hoje sem data.
  - O retrato de Jamieson leva "Photo from 2022" e "Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0".
  - "~28,675 FT (8,740 M) · GEBCO GAZETTEER · UNTIL AT LEAST 2019" e "28,680 FT · NEWSPAPERS, 1939" valem.
- **s57:** "28,700 FT · THE LIST", "27,500 FT", "≈ 1,200 FT" e "2003 · USGS" valem.
- **s58:**
  - Os três pares, com o rótulo pela fonte e pela data:
    - THE LIST: 28,675 → 24,442 FT (8,740 → 7,450 M);
    - LYMAN 1954: 28,576 → 27,461 FT (8,710 → 8,370 M);
    - STEWART & JAMIESON 2018: 27,972 → 27,231 FT (8,526 → 8,300 M).
  - **8,526, nunca 8,536.** Nunca "Brownson Deep".
  - "SHALLOWER EVERY TIME" vale. A fonte, pelo conserto 8.
- **s59:** o grifo literal é "propagated uncorrected through online sources and the scientific literature". O crédito: "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0".
- **s60:**
  - "MILWAUKEE DEEP · LISTED", "~24,442 FT (7,450 M) · A RIDGE", "27,585 FT (8,408 M) · 2019 ESTIMATE", "≈ 36 MI" e "2019 → 2021" valem.
  - A zona: "DOMINICAN REPUBLIC EEZ" (ou "· EXCLUSIVE ECONOMIC ZONE"), nunca "territorial".
- **s61:**
  - "2021", "≈ 100 MI" e "EXCLUSIVE ECONOMIC ZONE · UP TO ~230 MI (200 NMI) · NOAA" valem.
  - Nunca "BORDER" na linha ao lado do anel (conserto 6).
  - O crédito: "Maritime boundaries: MarineRegions.org (VLIZ)".
- **s62:**
  - A forma: GEBCO GAZETTEER · SEARCHED OCT. 2026 · "MILWAUKEE": NO RESULT, e "AS OF OCT. 2026".
  - O nome certo é o GEBCO Gazetteer (a Marine Regions ainda lista "Milwaukee Depth"). Nunca "Brownson", "not recognized" nem "no list".
- **s63:**
  - "Seabed 2030" vale.
  - O crédito: "GEBCO Compilation Group (2026) GEBCO 2026 Grid", com o DOI na descrição.
  - Nada de "measured" sobre a máscara enquanto ela tiver o TID 44.
  - A foto da Geórgia do Sul, se o conferente aprovar: "South Georgia" (nunca "South Sandwich"), "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0", sem aviso.
- **s64:**
  - "South Sandwich Trench", "≈ 5,700 MI" e "≈ 3 IN / YEAR (65–78 MM)" valem.
  - "≈ ¾ IN" fica melhor como "≈ ¾ IN / YEAR (≈ 20 MM)", com a unidade de tempo (forma).
- **s65 e s66:**
  - "SOUTH SANDWICH ISLANDS", "Mount Michael" (a pílula no centro da ilha, sem alfinete fino) e "Landsat · Aug. 24, 2026" valem, sem crédito na tela.
  - Se citar a cor: "natural color + infrared".
- **s67:**
  - "27,651 FT (8,428 M) · MOST PUBLISHED", "Meteor Deep", "27,116 ± 43 FT (8,265 ± 13 M) · METEOR DEEP", "371 FT (113 M) SHALLOWER" e "~9/10" valem.
  - Nenhum "2019 SURVEY" na área (conserto 3).
- **s68:** "International Hydrographic Organization", "60°S · SOUTHERN OCEAN (IHO, 2023)" e "~330 MI NORTH OF 60°S" valem. Sem a linha "global body for nautical charts".
- **s69:** a passagem literal, e os grifos só no texto dela (conserto 1).
- **s70:** "Equator" vale.
- **s71:** "~200 · 1964 (REPORTED) → NO SNAILFISH SEEN · 2019" vale.
- **s72:**
  - "COLOR · TEXTURE · SHAPE" vale, sem aspas. "snailfish" e "sea cucumber" valem.
  - As legendas: "Denson Seamount, Alaska · 4,480 FT (1,365 M) · 2023" e "North Tutuila Flank, American Samoa · 2026" (a profundidade, pelo conserto 10).
  - Sem "St. Croix". Nada diz "trench".
- **s73:**
  - "JAMIESON, LINLEY, STEWART, NARGEOLET & VESCOVO · DEEP-SEA RESEARCH I, 2020" e "VICTOR VESCOVO · CO-AUTHOR, JAMIESON ET AL. 2020" valem.
  - A folha, pelo conserto 2.
- **s74:** "~26,900–27,560 FT (8,200–8,400 M) · FISH LIMIT (NOAA ESTIMATE)" e "≈ 83 MI" valem. A NOAA escreve os pés como "27,000 to 28,000 feet": os metros entre parênteses são a ponte.
- **s75:**
  - "SURFACE · 0 FT", "23,250 FT" (sem ano), "1964 · CREW · ~24,000 FT", a faixa FISH LIMIT, "1970 · NET · ~27,460 FT" e "DEC. 2018 · SONAR · 27,487 FT" valem.
  - O ×10 vai declarado. O crédito GEBCO, a 60 px.

### Para a Sala

**NÃO FOI CHECADO** (faltou insumo ou a fonte não respondeu). Isto não autoriza afirmar nada além do que a tabela já sustenta.
1. **A página do registro da UPR** da foto do El Mundo: http://bibliotecadigital.uprrp.edu/cdm/singleitem/collection/fotoselmund/id/2159/rec/31.
   - Não respondeu à leitura automática numa tentativa anterior (tempo esgotado), e não insisti.
   - O crédito e a descrição se sustentam pelo Commons (PB013, PB014). A página só confirmaria o registro de origem.
2. **O trecho de ~10 km de Anegada** (de Bones Bight e Windlass Bight até Warner): os quatro nomes não têm coordenada lida.
   - A fonte é a Fig. S1 do material suplementar de Kilbourne et al. 2025 (https://doi.org/10.1029/2024GL114448), ou Atwater et al. 2017.
   - A Wikivoyage italiana dá "Bone Bight" em 18,7361, -64,36671, e não é fonte.
   - Sem isso, vale o conserto 5.
3. **O cume do Mount Michael:** o Global Volcanism Program (https://volcano.si.edu/volcano.cfm?vn=390090) pediu verificação antes (A08 da pauta-geo) e não foi lido. A Wikipedia dá 57°48′13″S 26°28′52″W, a ~3 km do centro declarado.
4. **A profundidade (2.300 m) e a data (29/08/2026) do clipe da Samoa** só existem no quadro: a legenda gravada e o cartão final.
   - A página de texto não as dá, e a pasta WAF do EX2606 na NCEI deu 404.
   - Um resumo de busca da página de transmissão (que mudou) falava num plano de ~1.380 a ~1.240 m para o Dive 03. Pode ser o plano e não o feito, mas conflita.
   - A Sala relê o quadro da legenda (o instante está no conferencia-midia.json, s72). Até lá, a legenda sai sem a profundidade (conserto 10).
5. **O retrato de Heather Stewart:** o perfil da BGS deu 404 antes (laudo L07).
   - Existe uma página https://fivedeeps.com/home/team/crew/heather/ que não abri. A licença de qualquer retrato dali é desconhecida.
   - O card só com nome e cargo continua o caminho.
6. **O texto integral de Jamieson et al. 2020** (https://doi.org/10.1016/j.dsr.2020.103336) é pago e não foi lido.
   - Se a Sala quiser "sea cucumbers" grifado como palavra do artigo, precisa do texto integral.
   - Sem ele, vale o conserto 2.

**Divergências da voz:** nenhuma. A voz do lote B está sustentada pelo LR e pelas fontes reabertas aqui.
- s74 ("about 27,500 feet" × a NOAA "about 8,400 meters (28,000 feet)") é conversão, não divergência de dado: 8.400 m = 27.559 ft. Nada a regravar.
- s45 ("roughly six miles") está certo (LR F120–F121, Kilbourne "nearly 10 km"). O que diverge é a linha do mapa.

**Voláteis, para reconferir antes de publicar:**
- a consulta ao GEBCO Gazetteer (PB084; refeita hoje, 29/10/2026, com 0 itens);
- a página da NOAA sobre a zona econômica (atualizada em 23/09/2026);
- a data de consulta da Marine Regions na descrição;
- a estimativa do Census (safra 2025).

**Para o mapista** (o regente e a pauta-geo): os consertos 3 a 7. Nenhum deles muda a voz.

VEREDITO: RESSALVA

## Acréscimo · o lote 7 do conferente (`a9565fb8`)

- Data-base: **29/10/2026, 03:57 (Brasília)**.
- Lido: `out/atlantico-fundo/_pesquisa/conferencia-midia.json`, sha256 `a9565fb8d84aca3a335f51ca4d766119ed5f7ae5d102c57bccc3b42e759a8c41` (commit `c8ec95a`, regravado às 03:40), e o relato `out/atlantico-fundo/_tmp/setores/atlantico-fundo-pesquisa-4.md`, l. 60–125.
- Nada acima desta seção mudou. O laudo antes do acréscimo tinha o sha256 `b67bbb6a…0953ec`.

**Como a lista do acréscimo foi derivada.** Não a escolhi: saiu de um diff, feito por script, entre `0764c529` (a versão que o laudo leu, tirada do git em `c8ec95a^`) e `a9565fb8`, com a chave id + cena + t0.
- Scripts: `scripts/l7_diff.py`, `l7_novos.py` e `l7_mudados.py`; as cópias estão em `lote7/`.
- O diff dá 9 vereditos NOVOS (53 contra 44) e 26 MUDADOS. Os `substituidos` não mudaram.
- Nas cenas s38–s75 caem 7 novos (s51, s54 duas vezes, s58, s63, s70 e s72) e 13 mudados (s41, s43, s44, s47, s48, s52, s53, s56 três vezes, s59, s66 e s72, a Samoa).
- Nos 13 mudados, só mudou o `frase_coberta` (a janela definitiva da regência), e o `o_que_viu` na s72 da Samoa. O `lugar_na_origem`, o `data_na_origem`, o `aviso_de_ano`, o `credito_na_tela` e o `veredito` estão iguais nos 13: o script compara campo a campo.
- Unidade: o rótulo de lugar, o rótulo de ano ou data e o `aviso_de_ano` de cada veredito. Nos 7 novos, uma linha por aspecto, quando o arquivo vai à tela. Nos 13 mudados, uma linha por veredito, porque os três campos estão iguais aos que o laudo já julgou. A s52 e a s72 (a Samoa) ganham uma linha a mais pelo ponto pedido.
- Imagens abertas: 0.

| id | cena · o que vai à tela | veredito | o que a fonte diz (trecho literal) | URL / arquivo local |
|---|---|---|---|---|
| PB130 | s54 (o reuso do retrato da s52) · rótulo de lugar: nenhum no card | CONFIRMADA | lugar_na_origem: "'on board his ship Pressure Drop' (a origem não dá lugar geográfico)". O lugar não vai ao card, e nada no card diz onde a foto foi feita | https://commons.wikimedia.org/wiki/File:Victor_Lance_Vescovo.jpg |
| PB131 | s54 · a data na legenda do retrato: "Victor Vescovo · Dec. 19, 2018" | **DIVERGE** (forma) | A foto é de "24 October 2018, 09:20:24", e 19/12/2018 é o dia da fala. Uma data logo abaixo do retrato se lê como a data da foto. O próprio conferente: "a legenda … é a data da fala, não a da foto; nada diga que o retrato é daquele dia" | idem; conferencia-midia.json (s54, lote 7) |
| PB132 | s54 · aviso_de_ano: false | CONFIRMADA | A foto e o fato são de 2018. A regra do aviso é a do ano (identidade §6), então não há aviso a pôr | idem |
| PB133 | s52 (mudado: a janela) · rótulo de lugar (nenhum) e aviso_de_ano (false), iguais aos de antes | CONFIRMADA | Os mesmos campos do PB049. A janela definitiva tem 3,9 s, "sem aviso do ano" | idem |
| PB134 | s52 · o cargo sob o retrato: "Five Deeps Expedition · Dec. 19, 2018" | **DIVERGE** (forma) | Pela mesma razão do PB131. A data fica certa como fato (PB047, LR F158, F161), mas não sob o retrato de 24/10/2018 | idem |
| PB135 | s58 (o reuso: a Tabela 1, p. 4, como inset sob o gráfico) · rótulo de lugar, de data e aviso | CONFIRMADA | lugar_na_origem: null; data_na_origem: null; aviso_de_ano: null. É página de documento, sem lugar nem aviso, e o ano dela é o do artigo, que vai na linha da fonte (PB136). "'Brownson' não está na página" | conferencia-midia.json (s58, lote 7); FONTES/01-04-stewart-jamieson-2019-earscirev.txt |
| PB136 | s58 · a linha da fonte, na forma nova: "Source: Stewart & Jamieson, Earth-Science Reviews, 2019 · Table 1 and Section 3.2 · CC BY 4.0" | CONFIRMADA | A Tabela 1 tem os números publicados: "Milwaukee Deep … 8740 GEBCO Gazetteer", "19.6° N 68.31667° W 8710 Lyman (1954)" e "8526 Stewart and Jamieson (2018)" (l. 341–350). A §3.2 tem os do sonar: "7450 m …", "coincident depth of 8370 m" e "coincides with an 8300 m depth" (l. 958–966). A licença: "open access article under the CC BY license (http://creativecommons.org/licenses/BY/4.0/)" | idem, l. 95–96 |
| PB137 | s72 (o reuso do clipe da s27, de 28,9 a 33,4 s) · rótulo de lugar: "Denson Seamount, Alaska" | CONFIRMADA | lugar_na_origem: "Site: Denson Seamount; Expedition: Seascape Alaska 5 …" (a legenda gravada noutro trecho do clipe). Na janela usada não há legenda nem cartão: o rótulo é do redator, e não fica mais específico que a origem | conferencia-midia.json (s72, o reuso); https://oceanexplorer.noaa.gov/ocean-fact/what-is-the-deepest-living-fish/ |
| PB138 | s72 (o reuso) · ano e profundidade: "4,480 FT (1,365 M) · 2023" | CONFIRMADA | A página: "The fish in this video was spotted at a depth of 1,365 meters (4,480 feet) during dive 8 of NOAA Ocean Exploration's 2023 Seascape Alaska 5 expedition". "In this video" cobre o clipe inteiro, inclusive a janela de 28,9 a 33,4 s. O cartão final: "Seascape Alaska 5 / August 31, 2023" | idem; ORIG/s27-noaa-oer.txt |
| PB139 | s72 (o reuso) · aviso_de_ano: false | CONFIRMADA | A fala compara os bichos, sem data ("From the outside, the two look a lot alike…"), e a legenda já leva 2023. Nada diz que é a fossa nem 1964 | idem |
| PB140 | s63 › b1 (a foto do Limiting Factor em Cumberland East Bay, rascunho 768fb8bb…) · rótulo de lugar: "South Georgia" ou "Cumberland East Bay, South Georgia" | CONFIRMADA | ObjectName: "Limiting Factor at the Cumberland East Bay (South Georgia Island)"; a categoria: "South Georgia in the 21st century"; em alemão: "(Süd-Georgien)". O lugar_na_origem também traz "'Southern Ocean, near South Georgia'", mas esse "Southern Ocean" NÃO vai à tela: o vídeo põe o Oceano Austral a partir de 60°S (PB102), e a Geórgia do Sul (~54°S) fica ao norte da linha. Nunca "South Sandwich": a foto não é do lugar do mergulho | https://commons.wikimedia.org/wiki/File:Limiting_Factor_at_the_Cumberland_East_Bay_(South_Georgia_Island).jpg (a API, lida hoje) |
| PB141 | s63 › b1 · rótulo de data, se houver: "Jan. 31, 2019" ou "Jan. 2019" | CONFIRMADA | DateTimeOriginal: "2019-01-31 03:21:06"; data_na_origem: "31 January 2019, 03:21:06" | idem |
| PB142 | s63 › b1 · aviso_de_ano: false | CONFIRMADA | A voz ("The expedition also took its sonar, and its sub, to the other end of the Atlantic") fala da viagem ao sul de 2019: o levantamento das Sandwich do Sul foi de 2 a 9/02/2019 (LR F223), e o submersível mergulhou lá (LR F211). A foto, de 31/01/2019, é da mesma viagem e do mesmo ano: sem aviso. A legenda não diz que é o mergulho nem o lugar do mergulho | idem; LR |
| PB143 | s51 (a ISS071-E-1042, condicional: só sem o clipe da caça s51-a E sem a 1042 na s10) · rótulo de lugar: "San Juan, Puerto Rico" | CONFIRMADA (com uma ressalva de forma) | A descrição da NASA no Commons: "The second photo shows a more detailed view of the San Juan metropolitan area and its surroundings". "San Juan, Puerto Rico" vale, como o lote A deu na s10. Se o recorte pegar Bayamón, Guaynabo ou Cataño, o mais fiel é "San Juan area, Puerto Rico". Nunca "Aguadilla", e nunca bairro (Santurce, Condado) que a origem não aponte no quadro | https://commons.wikimedia.org/wiki/File:Puerto_Rico_From_Above_(154856_-_42_lrg).jpg (a API, lida hoje) |
| PB144 | s51 · rótulo de data, se houver: "April 6, 2024" (ou "From the ISS · April 6, 2024") | CONFIRMADA | DateTimeOriginal: "Taken on 6 April 2024"; "An astronaut aboard the International Space Station took these photos of Puerto Rico"; a 1042 com 290 mm | idem |
| PB145 | s51 · aviso_de_ano: false | CONFIRMADA | A fala está no presente ("More than three million people live in Puerto Rico"), e a foto (2024) fica entre o censo de 2020 e a estimativa de 2025: sem aviso. Com a 1042 na s10, este veredito não vale (a condição), e o fallback é o mapa da ilha, com a pílula "Puerto Rico" | idem; conferencia-midia.json (s51, condicao) |
| PB146 | s54, a alternativa (o submersível boiando, 19/12/2018) · veredito trocar | CONFIRMADA (o registro; nada à tela) | lugar_na_origem: "after a dive into the Puerto Rico Trench"; data: "19 December 2018, 18:19:37". Os campos batem com o nome do arquivo no Commons. Com "trocar", nenhum rótulo dela vai à tela; fica o retrato (PB130–PB132) | https://commons.wikimedia.org/wiki/File:Limiting_Factor_floating_on_the_surface_of_the_water_after_a_dive_into_the_Puerto_Rico_Trench.jpg |
| PB147 | s70 › b1, a reserva (a ISS071-E-1036) · veredito trocar | CONFIRMADA (o registro; nada à tela) | lugar_na_origem: "Puerto Rico (Caribbean)"; "Taken on 6 April 2024"; "The top image offers a wide view of the island". Com "trocar", o beat fica com o mapa e nenhum rótulo dela vai à tela | https://commons.wikimedia.org/wiki/File:Puerto_Rico_From_Above_(154856_-_36_lrg).jpg |
| PB148 | s41 (mudado: a janela, agora o beat 6 da s39) · lugar, ano e aviso iguais | CONFIRMADA | Só "Mayagüez, Puerto Rico", e 1918 sem aviso (PB012). A janela definitiva diz: "rótulo só 'Mayagüez, Puerto Rico'; o crédito 'El Mundo / Universidad de Puerto Rico' e a exceção do Lucas (29/10/2026, 01:1x) continuam" | conferencia-midia.json (s41) |
| PB149 | s43 (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | "Anegada, British Virgin Islands", sem aviso (PB017, PB018) | idem (s43) |
| PB150 | s44 (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | Só "Anegada", sem data e sem aviso (PB020, PB021) | idem (s44) |
| PB151 | s47 (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | "APRIL 2015"; nenhum lugar além de "off Puerto Rico" (PB034) | idem (s47) |
| PB152 | s48 (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | Nenhum rótulo de lugar; 17/12/2018, sem aviso (PB036) | idem (s48) |
| PB153 | s53 (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | Sem lugar; 2018, da fase de testes; sem aviso; nunca a fossa (PB051) | idem (s53) |
| PB154 | s56, o retrato de Jamieson (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | "Photo from 2022" (aviso_de_ano: true; Exif de 29/09/2022). O lugar da origem (a Minderoo-UWA, na Austrália) não vai ao card (PB060) | idem (s56) |
| PB155 | s56, a Tabela 1 (mudado: a janela e a permanência sob o recorte de 1939) · lugar, ano e aviso iguais | CONFIRMADA | Documento: sem lugar, sem aviso; a fonte de 2019 (PB062) | idem (s56, p4) |
| PB156 | s56, a linha do título (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | "Earth-Science Reviews, 2019" (PB061) | idem (s56, título) |
| PB157 | s59, o resumo (mudado: a janela) · lugar, ano e aviso iguais | CONFIRMADA | Documento; o crédito "Stewart & Jamieson / Earth-Science Reviews, 2019 · CC BY 4.0" (PB072) | idem (s59) |
| PB158 | s66, o Landsat (mudado: a janela e a permanência na metade esquerda) · lugar, ano e aviso iguais | CONFIRMADA | "Mount Michael" e "Landsat · Aug. 24, 2026", sem aviso (PB095). Na permanência, a foto é o lugar, ao lado do desenho, e o rótulo continua valendo | idem (s66) |
| PB159 | s72, a Samoa (mudado: a janela e o o_que_viu) · lugar, ano e aviso iguais | CONFIRMADA | "North Tutuila Flank, American Samoa" e 2026, sem aviso (PB113). O o_que_viu novo confirma a janela de 68,6 a 73,1 s, "nenhuma legenda nem cartão" nela | idem (s72, a Samoa) |
| PB160 | s72, a Samoa · a profundidade "2,300 m" na legenda | NÃO ACHEI (em texto; o achado se reforça) | O o_que_viu novo situa a legenda gravada ("Sea Cucumber / North Tutuila Flank - American Samoa / 2,300 meters (1.4 miles)") na 1ª tomada, de ~2 a ~5 s do clipe. A janela usada é a 3ª tomada (68,6–73,1 s), sem legenda. Mesmo lida no quadro, a profundidade é a da 1ª tomada, não medida para a 3ª. Ao contrário do peixe-caracol (PB138), nenhuma página de texto diz que o vídeo inteiro é daquela profundidade | idem; https://oceanexplorer.noaa.gov/multimedia/sea-cucumber-swimming/ |

### Achados do acréscimo

1. **[LEVE] PB131 e PB134 · s52 e s54, a data sob o retrato.**
   - → CONSERTO na s52: o card leva "VICTOR VESCOVO" e só "Five Deeps Expedition". A data fica na cota solta "WEDNESDAY, DEC. 19, 2018", que a regência já põe à parte, longe da foto.
   - → CONSERTO na s54: a data vai presa à fala, dentro do cartão da citação: "\"One down!\" — Victor Vescovo, Dec. 19, 2018". Ou sai, e fica só "Victor Vescovo", porque a data esteve na tela 20 s antes. Sob o retrato, nenhuma data.
   - Sem aviso de ano nas duas cenas: a foto e o fato são de 2018.
   - → RAIZ: INSTRUÇÃO. A regência e o espelho põem a data da fala no lugar da legenda da foto.
2. **[LEVE] PB160 · s72, a profundidade da Samoa.**
   - → CONSERTO: "North Tutuila Flank, American Samoa · Dive 03 · 2026", sem a profundidade. O cartão final, "American Samoa, Dive 03 / August 29, 2026", cobre o clipe inteiro.
   - Se a Sala quiser a profundidade, primeiro relê o quadro de ~2 a 5 s do clipe e decide se a 3ª tomada é do mesmo ponto.
   - → RAIZ: PONTUAL.
3. **PB136 · s58, a linha da fonte.** Fecha o conserto 8 do laudo com a forma fiel e curta: "Source: Stewart & Jamieson, Earth-Science Reviews, 2019 · Table 1 and Section 3.2 · CC BY 4.0". O CC BY vai junto porque a página real (o inset) está na tela.

### Para o redator-de-tela (acréscimo)

- **s52:** "VICTOR VESCOVO" e "Five Deeps Expedition". "WEDNESDAY, DEC. 19, 2018" vai como cota solta, longe do retrato.
- **s54:** "\"One down!\" — Victor Vescovo, Dec. 19, 2018" dentro do cartão, ou só "Victor Vescovo". A fonte: "Source: Popular Science, 2018". Sem aviso.
- **s58:** "Source: Stewart & Jamieson, Earth-Science Reviews, 2019 · Table 1 and Section 3.2 · CC BY 4.0". O inset não leva rótulo de lugar nem aviso.
- **s63 › b1:**
  - "Cumberland East Bay, South Georgia", ou "South Georgia". Se quiser data: "Jan. 31, 2019".
  - O crédito: "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0". Sem aviso.
  - Nunca "Southern Ocean" nem "South Sandwich".
- **s51 (só no fallback):**
  - "San Juan, Puerto Rico" (ou "San Juan area, Puerto Rico", se o recorte pegar os municípios vizinhos). Se quiser data: "April 6, 2024". Sem crédito e sem aviso.
  - Com a 1042 na s10, a s51 vira o mapa da ilha, com "Puerto Rico".
- **s72:**
  - O peixe-caracol: "Denson Seamount, Alaska · 4,480 FT (1,365 M) · 2023".
  - A Samoa: "North Tutuila Flank, American Samoa · Dive 03 · 2026".
  - Sem aviso nas duas, e nada diz "trench".

### Para a Sala (acréscimo)

- **NÃO FOI CHECADO:** nada novo. O item 4 do laudo (a profundidade da Samoa) muda de forma: o quadro da legenda fica em ~2 a 5 s do clipe, e a janela usada é outra tomada (PB160).
- **Fora da minha lente, mas visto:**
  - o conceito ainda chama o inset da s58 de "DECISÃO DO LUCAS PENDENTE" (o relato, Para a Sala, item 3);
  - a permanência da s29 é do lote A.
- **Divergências da voz:** nenhuma no acréscimo.

COBERTURA DO ACRÉSCIMO: 31 de 31 (PB130–PB160; a lista é o diff `0764c529` → `a9565fb8` nas cenas s38–s75: 7 vereditos novos e 13 mudados; 28 CONFIRMADA, 2 DIVERGE, 1 NÃO ACHEI, 0 REFUTADA)

COBERTURA: 147 de 147 (o lote B com o acréscimo; fora do M continuam os 12 itens que só citam o laudo do roteiro e o 1 NADA A CHECAR). Placar: 130 CONFIRMADA · 14 DIVERGE · 3 NÃO ACHEI · 0 REFUTADA.

NOTA: 8,5/10

VEREDITO: RESSALVA

---

## Fecho do setor

COBERTURA: 206 de 206 (lote A 59 de 59; lote B 147 de 147, com o acréscimo do lote 7). 0 REFUTADA, 21 DIVERGE e 9 NÃO ACHEI, todos fora da voz.
Os NÃO FOI CHECADO, fora do denominador, estão declarados em cada lote, com as URLs.

VEREDITO: RESSALVA
