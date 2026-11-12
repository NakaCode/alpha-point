# Pauta de logos: rio-columbia (vídeo 7)

Passo `research`, 12/11/2026, despacho da Sala. O JSON é `out/rio-columbia/_pesquisa/pauta-logos.json` e passa no contrato
`pauta-pesquisa` (saída 0, com `REGIE_MOTOR`). O espelho lido foi a r2 (sha256 `28f6121b…2c83d2`), com 64 cenas e 148 planos.

## Resumo

**Pedidos de logo: 0. Entregues: 0.** Nenhuma cena pede logo, selo, brasão, emblema, insígnia nem bandeira:

- nenhum segmento tem `needs.logos` (só `geo` e `dados`);
- nenhuma cena nem plano é PRANCHA, e por isso não há círculo de ator com bandeira;
- **o cartão `CBC NEWS` de s45 P1 é texto**, como a Sala leu: o espelho diz "SÓ O TEXTO, sem o quadro do vídeo da CBC e SEM data";
- s20 P2 já diz "BC HYDRO · CANADIAN ENTITY, só o nome escrito (midia §7.6)";
- as folhas recriadas vão sem brasão, selo nem timbre (s10, no espelho; as outras, pela identidade §5).

As instituições do vídeo aparecem como nome escrito ou crédito, e a regra do canal para elas é o nome escrito
(`marca/midia.md` §7.6; roupa §4). **Nada foi buscado nem gravado em `out/rio-columbia/_media/logo/`**, e a pasta não foi criada.
Nenhum pedido foi à rede: os nomes oficiais saíram das cópias locais do dossiê (`midia/rio-columbia/fontes/`).

## Nomes escritos: o nome oficial de cada instituição

Todos vão em Inter 700 na pílula `--rotulo`, sem logo nem selo. As URLs e os sha256 das cópias estão no JSON.

| Entidade | Nome oficial (de onde saiu) | Cenas na tela | Cenas na voz |
|---|---|---|---|
| BC Hydro | British Columbia Hydro and Power Authority, ou BC Hydro (CRS R43287, 03/12/2024: 'the Canadian Entity (the British Columbia Hydro and Power Authority, or BC Hydro)'); a troca de notas de 16/09/1964 a designa 'as the Canadian Entity' | s04, s15, s20, s24, s38, s46, s47, s48, s50, s56, s58, s60, s61 | s20, s48 |
| U.S. Army Corps of Engineers | U.S. Army Corps of Engineers (USACE); no tratado, a Northwestern Division, metade da U.S. Entity (CRS R43287, 2024) | s05, s19, s22, s26, s27, s28, s30, s33, s36, s41 | — |
| Bonneville Power Administration | Bonneville Power Administration (BPA); o BPA Administrator preside a U.S. Entity (CRS R43287, 2024) | s05, s19, s22, s26, s27, s28, s30, s33 | — |
| U.S. Entity (o papel, não um órgão) | a U.S. Entity é a BPA e a Northwestern Division do USACE, juntas ('the U.S. Entity (BPA and the Northwestern Division of the U.S. Army Corps of Engineers [USACE], jointly, with the BPA Administrator as Chair and USACE as a member)', CRS R43287, 2024) | s36, s42, s56 | — |
| Canadian Entity (o papel, não um órgão) | a Canadian Entity é a BC Hydro e, para a venda do direito canadense, a Província (revisão de 2012 do governo da BC); 'the Canadian Entity (the British Columbia Hydro and Power Authority, or BC Hydro)' (CRS R43287, 2024) | s20, s36, s42, s56 | s20 |
| Congressional Research Service | Congressional Research Service (CRS), da Library of Congress ('This document was prepared by the Congressional Research Service (CRS). CRS serves as nonpartisan shared staff to congressional committees and Members of Congress', R43287) | s13, s16, s17, s20, s25, s35, s36, s41, s42, s45, s55, s56, s58 | s25, s36 |
| U.S. Geological Survey | U.S. Geological Survey (USGS) (título das páginas do usgs.gov: '… / U.S. Geological Survey') | s13, s14, s18, s19, s22, s23, s37, s46 | s23 |
| Government of British Columbia | Government of British Columbia (assim no nome do site do tratado: 'Columbia River Treaty / Government of British Columbia', engage.gov.bc.ca) | s08, s09, s34, s39, s45, s51, s52, s55 | s45, s52, s58 |
| BC Geographical Names | BC Geographical Names (título da página oficial de topônimos da província, apps.gov.bc.ca) | s14, s51 | — |
| Water Survey of Canada (Environment and Climate Change Canada) | Water Survey of Canada, do Environment and Climate Change Canada ('Established in 1908, EC's Water Survey of Canada is the designated branch responsible for water resource monitoring…', canada.ca) | s18, s19, s21, s46, s47 | — |
| Red Cross | 'the Red Cross', como o USGS de 1949 o escreve ('The Red Cross reported the following figures', Water-Supply Paper 1080) | s23 | — |
| U.S. Department of State | U.S. Department of State (CRS R43287, 2024: 'the U.S. Department of State') | s55 | — |
| CBC News | CBC News, como a Sala registrou o título do vídeo em concorrencia.md (F095 do dossiê); a cbc.ca deu 403 e não se tenta de novo (LEIA-ME.md, 'Não lidos, e não se usam') | s45 | s45 |
| The Canadian Press (via CFJC Today) | The Canadian Press ('This report by The Canadian Press was first published March 25, 2025'), publicado pela CFJC Today Kamloops | s45 | — |
| OPB | Oregon Public Broadcasting (OPB) (o texto alternativo da logo na página: 'Oregon Public Broadcasting') | s45 | — |
| Supreme Court of Canada | Supreme Court of Canada (título da página da decisão: 'Supreme Court of Canada / R. v. Desautel') | s53 | s53 |
| Lakes Tribe of the Colville Confederated Tribes | 'the Lakes Tribe of the Colville Confederated Tribes' (Supreme Court of Canada, Case in Brief de R. v. Desautel); o governo tribal se chama 'Confederated Tribes of the Colville Reservation' (Bureau of Reclamation, Grand Coulee FAQ) | s53 | s53 |
| Bureau of Reclamation | Bureau of Reclamation (título da página: 'Grand Coulee Dam FAQ / Bureau of Reclamation'); 'the U.S. Bureau of Reclamation (part of the Department of the Interior)' (CRS) | s54 | — |
| U.S. Congress (e o Senado) | Congress; o Senate (a voz: 'Congress authorized it', 'unless Congress extends it', 'a Senate bill') | — | s38, s57, s59 |
| Chelan PUD, Grant PUD e Douglas PUD | Chelan PUD, Douglas PUD e Grant PUD, como as três se escrevem na nota conjunta ('Chelan, Douglas and Grant PUDs', APPA, 25/09/2026). O nome jurídico por extenso de cada distrito não está nas cópias locais e não se buscou: a tela não precisa dele | s57 | s57 |
| Global Affairs Canada | Global Affairs Canada ('Organization: Global Affairs Canada', na nota de 28/05/2025) | s58 | — |
| Canadian Geographic | Canadian Geographic (título da página: '… / Canadian Geographic') | s58 | s58 |
| Government of Canada | Government of Canada (o texto alternativo da assinatura federal no canada.ca: 'Government of Canada') | s40, s53 | s53 |

## As linhas que explicam a entidade, para o `redator-de-tela` (roupa §5)

- **U.S. Entity** (s36, s42, s56): `U.S. Entity — the two federal agencies that run the treaty for the U.S.`. Opcional, ao redator-de-tela (roupa §5): só se 'U.S. ENTITY' ficar na tela. Lastro: CRS R43287, 2024 ('the U.S. Entity (BPA and the Northwestern Division of the U.S. Army Corps of Engineers [USACE], jointly…)'); a voz diz 'The American agencies that run the treaty' (s42, s56). O verificador-de-fatos dá o veredito.
- **Congressional Research Service** (s25, s36): `Congressional Research Service — nonpartisan research staff for Congress`. Opcional: a voz diz 'the US Congressional Research Service's account' (s25, s36), sem dizer o que é. Lastro: 'CRS serves as nonpartisan shared staff to congressional committees and Members of Congress' (R43287). O verificador dá o veredito.
- **Water Survey of Canada** (s18): `Water Survey of Canada — the Canadian government's river-gauging service`. Opcional: o rótulo 'BIRCHBANK · WATER SURVEY OF CANADA 08NE049' cai sob 'A gauge is just a station on the bank…', e a voz já explica o medidor. Lastro: 'EC's Water Survey of Canada is the designated branch responsible for water resource monitoring' (canada.ca). Dispensável se o rótulo ficar só com o lugar.

A voz já explica: BC Hydro ('the power company that runs Canada's side of the treaty', s20), Canadian Geographic ('the magazine Canadian Geographic', s58), as PUDs ('utilities along the river. Three of them, in Washington State', s57), o USGS ('the US Geological Survey', por inteiro, s23), a Suprema Corte do Canadá (por inteiro, s53) e CBC News (s45: a voz e o cartão dizem quem perguntou). O USACE, a BPA, o Bureau of Reclamation, a Global Affairs Canada, o BC Geographical Names, a Canadian Press e a OPB só aparecem como dono de número ou crédito: não pedem linha.

## Nações e povos

- **Sinixt** (tela: s53; voz: s53): 'SINIXT · TRADITIONAL TERRITORY' sobre o lago, sem contorno (s53 P1). Símbolo: nenhum: nem bandeira, nem emblema, nem arte de nação. É povo, não instituição, e o espelho já manda só o nome e nenhuma geometria.
- **Ktunaxa, Syilx-Okanagan, Secwépemc** (tela: s58; voz: s58): 'KTUNAXA · SYILX-OKANAGAN · SECWÉPEMC', na grafia da nota da GAC, com o acento (s58 P2). Símbolo: nenhum: os conselhos e alianças dessas nações têm emblemas e bandeiras próprios, e nenhum se pede. A grafia é a da nota de 28/05/2025 ('the Ktunaxa, the Syilx-Okanagan and the Secwépemc Nations'); a página do governo da BC escreve 'Syilx Okanagan' e 'Syilx/Okanagan', sem hífen: a escolha já está feita no espelho.

## Países, província, estados e bandeiras

Nenhuma bandeira foi entregue. Canada e United States, British Columbia, Oregon, Montana e Washington vão só com o nome escrito
(identidade §6: "País no mapa: o nome escrito, sem bandeira"; "Vale para todo mapa e para toda bandeira, a dos EUA também"). O espelho
repete "o nome escrito, SEM bandeira" em cada `needs.geo` de país.

## Fora desta pauta

- Columbia River Treaty, o Protocolo de 1964, a troca de notas e a Public Law 118-272: documentos, não instituições (pesquisa-documentos).
- Arrow Lakes, Hugh Keenleyside, Mica, Duncan, Libby, Grand Coulee, The Dalles, Vanport, Birchbank: lugares e obras, rótulos de mapa ou de foto (pesquisa-geo e pesquisa-imagens).
- s12, a vinheta do canal: peça do próprio canal (identidade §8), posta pela Sala no XML. Nenhuma logo de terceiro cai no canto de 400 × 400 px (roupa §6).
- MapTiler e OpenStreetMap: crédito em texto, '© MapTiler © OpenStreetMap contributors' (identidade §6: 'O plano pago dispensa o logo, não o crédito'); do mapista.
- HydroSHEDS/HydroBASINS, Copernicus DEM, Landsat e a geometria: créditos de dado e de base, da pesquisa-geo.
- 'Alpha Point calculation': a conta do próprio canal, em texto.

## Para outros passos

- **s45 P1 (o cartão CBC NEWS)** (`redator-de-tela, editor-de-arte, qc-visual`). É texto, não logo: 'CBC NEWS' e o título do vídeo na tipografia do canal (o nome na pílula --rotulo, Inter 700; midia §7.6). Nem a gema da CBC, nem o letreiro no desenho da CBC, nem a miniatura ou um quadro do vídeo, que trazem a logo. A data segue fora até a Sala a ler no navegador do app (para-passos-seguintes.json, f117).
- **s10, s26 P1, s38 P1, s40, s43 P1, s45 P3, s52, s53 P2, s59 P4 (as folhas)** (`pesquisa-documentos, editor-de-arte`). Recriação, nunca fac-símile: sem brasão, selo, timbre, logo nem assinatura (identidade §5; midia §7.1 e §7.6). Neste vídeo, isso quer dizer: o tratado sem armas nem selo de nenhum dos dois governos; a lei (Public Law 118-272) sem o selo de autenticação do GPO (o que o govinfo põe nos PDFs) e sem o Great Seal; a folha da BC (s52) sem a logo do governo da BC; o acórdão (s53 P2) sem o emblema da Suprema Corte. O dono vai escrito, como o espelho já manda. Não é pedido de logo.
- **s18, s19, s21, s46, s47 (os dados do Water Survey of Canada)** (`mapista, editor-de-arte, redator-de-tela`). A Open Government Licence – Canada, pela qual o dado entra, diz: 'This licence does not grant you any right to use: … the names, crests, logos, or other official symbols of the Information Provider' e, em 'Non-endorsement', 'This licence does not grant you any right to use the Information in a way that suggests any official status or that the Information Provider endorses you or your use of the Information' (midia/rio-columbia/fontes/d/ogl-canada.html, sha256 0174688a…). A linha de atribuição que o espelho já traz ('Contains information licensed under the Open Government Licence – Canada.') é texto e é a que a licença pede; nenhum símbolo do ECCC, nem a assinatura 'Canada', vai à cena, e nada sugere que o governo endossa o cálculo do canal ('ALPHA POINT CALCULATION' já diz de quem é a conta).
- **s45 P2 (o card de Adrian Dix)** (`pesquisa-pessoas, conferente-de-midia`). Se o retrato oficial trouxer ao fundo a logo do governo da BC ou uma bandeira, é parte da foto (registro). Nada se acrescenta ao card, e o recorte que a tira, se o editor quiser, é do editor-de-arte.
- **s07, s50, s54, s57 P2–P3, s59 P2, s53 P3 (as fotos de barragens, do Capitólio e da Suprema Corte)** (`pesquisa-imagens, conferente-de-midia`). A placa ou a logo pintada no lugar (a da BC Hydro numa barragem, a de uma PUD, as armas na fachada da Corte) é registro real. Logo ou marca d'água sobreposta à foto não vira elemento da cena: prefira a versão sem ela. A BC Hydro, os BC Archives e o governo da BC não estão nas fontes aprovadas (o espelho, s07): a foto deles é pergunta da Sala ao Lucas, não desta peça.
- **s01, s07, s12, s14, s16, s18, s32, s43 P4, s46 P3, s50, s60 (onde o espelho admite B-roll de banco)** (`pesquisa-imagens (lista de caça), conferente-de-midia`). O espelho já pede 'sem marca legível'. A logo da BC Hydro numa placa de barragem, se legível no B-roll, é marca: vale a régua do conferente.
- **s36, s42, s56 ('U.S. ENTITY')** (`redator-de-tela, verificador-de-fatos`). A voz nunca diz 'U.S. Entity' ('American planners', 'The American agencies that run the treaty'). Se a tela mantiver 'U.S. ENTITY', vale a linha que explica (linhas_que_explicam); ou a tela diz 'U.S. AGENCIES', como a voz. Decide o redator; o verificador confere.

## NÃO MEDIDO / não se aplica

O `_svg-para-png`, o gate de 40 MP, o `qc-procedencia` e o `conferente-de-midia` não se aplicam: esta peça não entregou
nenhum arquivo.
