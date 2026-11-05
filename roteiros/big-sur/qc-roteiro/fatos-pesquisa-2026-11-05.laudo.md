# Laudo-delta da pesquisa · big-sur · 05/11/2026

Tarefa `big-sur-texto-1` (passo `screen_text`), da Sala de controle ao setor Texto e fatos. Este arquivo foi montado pelo SETOR com
os dois laudos do `verificador-de-fatos` (Opus, esforço alto), que vão LITERAIS abaixo. O cabeçalho e o resumo são do setor. O resumo
foi gerado por script a partir dos dois JSON, sem julgamento novo. Os vereditos são do verificador.

## COBERTURA: 467 de 467

CHECADO POR INTEIRO, nos dois lotes, cada um com a cobertura "X de X":

| veredito | lote A | lote B | total |
|---|---|---|---|
| confirmada | 312 | 97 | 409 |
| corrigir | 15 | 8 | 23 |
| nao_conferida | 4 | 2 | 6 |
| nada a checar | 11 | 18 | 29 |
| **total** | **342** | **125** | **467** |

- **As notas:** lote A 8.5, lote B 9.0. O veredito dos dois é RESSALVA / RESSALVA. O setor não faz média.
  - Nenhuma afirmação foi refutada, e nenhuma divergência toca a tese.
- **A data-base:** 05/11/2026, das 03h às 03:58 de Brasília (lote A, das 03h às 03h40; lote B, das 03:41 às 03:58).

## Como o escopo se dividiu (o setor)

Dois lotes, um depois do outro, sem sobreposição de arquivo:
- **Lote A** (`out/big-sur/_tmp/vf-bs-A/`, md `5e93bfcb…`, json `ab9ae973…`):
  - `pauta-dados`, `pauta-geo`, `pauta-pessoas` e `pauta-logos`, com os `.md`;
  - os 60 arquivos de `out/big-sur/_dados/` (55 `.json` e 5 `.csv`);
  - as notas 9, 10, 11, 12 e 14 do `para-passos-seguintes.json`;
  - o volátil do Timber Fire.
  - Os 5 CSV não ganharam linha própria: cada número deles que vai à tela já está noutra linha (o laudo A, "Como a lista foi construída", 3).
- **Lote B** (`out/big-sur/_tmp/vf-bs-B/`, md `03f877b9…`, json `b40f5a91…`):
  - `pauta-documentos` e `pauta-imagens`, com os `.md`;
  - os 20 vereditos `aprovado` do `conferencia-midia.json` (`985816e5…`), com o lugar, o ano e o crédito;
  - os VR do `verificar-research/laudo.md` (`e116f6d7…`) que tocam a tela;
  - as notas 5, 7, 8, 15, 17 e 22.
  - O lote B leu o JSON do lote A antes de julgar. 36 dos itens dele citam um `VP-A`: são ocorrências da mesma afirmação em outro
    arquivo do escopo B, com o veredito do lote A citado e não refeito.
- **O que já estava confirmado** no laudo do roteiro (`fatos.laudo.md` `4ea910e8…`, 231 de 232) se cita pelo id `R…` na coluna do
  laudo do roteiro, e não se refaz.

## O que o setor leva à Sala

1. **A cópia de terceiro não vale como fonte.** O folheto da California State Parks sobre Pfeiffer recusou a conexão nas duas tentativas
   (https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf). O lote A leu o texto numa cópia de terceiro
   (icoat.de) e o marcou NÃO CONFERIDO. Pela regra da tarefa, essa cópia não sustenta nada. O conserto da s38 (VP-A-143 e VP-A-312: tirar a
   área da pílula) se sustenta sem ela, pela divergência entre o plano de 1986 (706 acres, 1934) e a Wikipedia (700 acres, 1933). O "680 acres"
   fica sem fonte válida. O lote B foi avisado no pedido e não usou cópia de terceiro.
2. **A voz:** nada a regravar sem o Lucas, e nenhuma divergência refutada. São três notas para ele:
   - **s38, o p19 "In 1934":** a Wikipedia e o folheto (o folheto lido só na cópia de terceiro) dizem 1933. Não está refutado, porque nenhuma
     escritura foi lida (VP-A-311). Se ele quiser uma frase que sirva às duas datas, "In the early 1930s, …".
   - **s51, "expect occasional full closures"** contra o "may encounter" da Caltrans: a paráfrase está confirmada (VP-B-024 e VP-B-025,
     nota 7). O fechamento de Regent's Slide depois de 14/01 está em VP-B-026 (nota 17).
   - **s36, San Quentin na voz** contra Folsom na legenda da NOAA: a voz está confirmada pela FHWA (cópia local do canal). Sobre a foto, o
     rótulo não nomeia prisão (VP-B-113 a VP-B-115, nota 15).
3. **Para o laudo do roteiro**, só o apoio muda, e a frase da voz fica:
   - a R028 se apoia no Ventana Double Cone, que fica fora do distrito (VP-A-265 e a seção "PARA A SALA" do lote A);
   - a R008, a R137 e a R138 se apoiam na "capa", e o 1986 está na folha de rosto (VP-B-125).
4. **Ao conferente-de-midia:** as datas (`data_na_origem`) da s37, da s48, da s20 e da s53 (VP-B-082, VP-B-085, VP-B-059, VP-B-094). A s48
   perde o motivo "no dia seguinte ao deslizamento".
5. **Os voláteis**, com a hora da leitura (a Sala relê antes de publicar):
   - o Timber Fire, na página do CAL FIRE, às 03:23 (desta vez ela abriu): 25,352 acres, 97 % de contenção, 661 estruturas ameaçadas, sem
     atualização desde 20/10;
   - a Highway 1, na roads.dot.ca.gov, às 03:24: nenhum fechamento total, as três mãos únicas;
   - a nota da Caltrans de 17/02/2026 (Regent's Slide, 6,8 mi fechadas), relida às 03:4x;
   - a galeria e as Conditions of Use da Caltrans, às 03:4x e 03:5x.
6. **Os NÃO CONFERIDOS** estão na tabela abaixo e nas seções "PARA A SALA" dos dois lotes, com as URLs. Os sites que recusaram:
   - parks.ca.gov e demo2.parks.ca.gov (ECONNREFUSED);
   - inciweb.wildfire.gov (403), que não fez falta, porque a página do CAL FIRE abriu;
   - bigsurcalifornia.org (recusou robô);
   - noaa.gov/media/49652 (405). Lá se parou, e a legenda vale como o Commons a reproduz.

## RESUMO: os 29 itens a corrigir ou não conferidos (gerado dos JSON)

| id | cena | veredito | afirmação | conserto |
|---|---|---|---|---|
| VP-A-081 | s21 | corrigir | NACIMIENTO–FERGUSSON ROAD · 1986 | NACIMIENTO-FERGUSSON ROAD · 1986 (hífen, como o plano escreve: The Nacimiento-Fergusson Road) |
| VP-A-107 | s27 | corrigir | MUD CREEK · JULY 19, 2017 | Se a s27 não usar o vídeo de 19/07/2017 (o conferente o mandou trocar; vale a aérea do USGS de 27/05/2017 aprovada em s26), a data sai da etiqueta: MUD CREEK · 2017, ou a data que o veredito da aérea dá em data_na_origem. JULY 19, 2017 só vai sobre o vídeo daquele dia. |
| VP-A-118 | s30 | corrigir | Tanbark: oak bark used to make tannic acid for tanning leather. | Tanbark: bark used to make tannic acid. |
| VP-A-143 | s38 | corrigir | 1934 · 706 ACRES SOLD TO THE STATE | Tirar a área da etiqueta e prender o ano ao plano: 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986), com o nome do parque como rótulo do lugar. Se a cena quiser a área, ela vai como número do plano: 706 ACRES, PER THE 1986 PLAN. |
| VP-A-146 | s38 | nao_conferida | Land John Pfeiffer sold to the State in 1934 = 706 acres |  |
| VP-A-212 | s53 | corrigir | TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES · CAL FIRE | TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES (sem o · CAL FIRE na pílula; o dono dos números vai no crédito) |
| VP-A-213 | s53 | corrigir | 661 STRUCTURES THREATENED · CAL FIRE | 661 STRUCTURES THREATENED · LISTED BY CAL FIRE |
| VP-A-214 | s53 | corrigir | Source: CAL FIRE, 2026 | Source: CAL FIRE incident page, updated Oct 20, 2026 · Los Padres National Forest fire |
| VP-A-269 | s24 s43 (nota 14) | corrigir | terra-publica-costa-big-sur: 105.850 acres, 72 % da área do plano (USFS 82.592, Estado 20.392, condado e distritos 2.866) | Os números estão certos. O rótulo PUBLIC LAND sobre esta camada é terra de HOJE (PAD-US 4.1, 72 %): em s43, sob '≈ HALF THE COASTAL ZONE PUBLIC · 1986', a camada leva 'TODAY' no rótulo ('PUBLIC LAND TODAY') ou não acende sob a pílula de 1986. |
| VP-A-274 | s21 | corrigir | reserva-hunter-liggett: o limite de proclamação de HOJE (160.691 acres) com o rótulo do ano do plano | HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN (o nome do plano, ligado ao ano do texto), ou só HUNTER LIGGETT sem o ano. |
| VP-A-277 | s21 | corrigir | estrada-nacimiento-fergusson: 24,21 mi, da Highway 1 (Kirk Creek) a Fort Hunter Liggett, traçado de hoje | NACIMIENTO-FERGUSSON ROAD (hífen) |
| VP-A-284 | s44 s45 s46 s59 s60 (nota 14) | corrigir | mirantes-nomeados-1986 tem 7 dos 9 lugares do P [230]; faltam o Abalone Cove Vista Point e a Cooper Beach | A contagem confere. Se os rótulos forem à tela como os lugares nomeados no plano, dois seguem a grafia dele: 'Hurricane Point Overlook' e 'Upper Sycamore Canyon Road'. |
| VP-A-287 | s22 s23 s34 | corrigir | riachos-costa-big-sur: 59 fozes de Carmel à divisa, 55 do Malpaso Creek para o sul, 36 com nome; três nomes do TIGER trocados pelos do GNIS (Mal Paso → Malpaso… | Os números conferem (e a tela fica com o 'NEARLY 50' do plano). Se algum riacho for rotulado, só os 31 com nome_gnis; os 9 rótulos que vêm só do TIGER, com a abreviatura expandida pelo canal (San Jose Creek, Jobernales Stream, Granite Creek, Castro Arroyo, Boronda Ridge Creek, Torres Canyon Creek, … |
| VP-A-290 | s19 | corrigir | cone-peak: o ponto do GNIS 270577, fora do distrito (San Ardo CCD), a ~3,3 km da borda dele | a ~2,7 km da borda (fora da tela) |
| VP-A-300 | — | nao_conferida | aviso 4 da pauta geo: a ponta norte da Highway 1 da camada fica a 25 m do PM 73,9 da Caltrans |  |
| VP-A-306 | camadas do PAD-US | corrigir | PAD-US 4.1: domínio público, e a citação da descrição é 'U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2024, … PAD-US 4.1, https://doi.org/10.5066/… | Na descrição: 'U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2025, Protected Areas Database of the United States (PAD-US) 4.1: U.S. Geological Survey data release, https://doi.org/10.5066/P96WBCHS' |
| VP-A-309 | s52 (nota 9) | nao_conferida | Reportagens antigas o chamam de 'general manager' do Nepenthe e de presidente da Big Sur Chamber of Commerce |  |
| VP-A-311 | s38 (nota 9) | nao_conferida | O ano da venda de Pfeiffer ao Estado: 1934 (plano) contra 1933 (Wikipedia) |  |
| VP-A-312 | s38 (nota 9) | corrigir | A área vendida: 706 acres (plano) contra 700 (Wikipedia) e 680 (folheto da State Parks) | A tela sem área (a voz não a diz): '1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986)'. Se a área ficar, 'PER THE 1986 PLAN' na própria pílula. |
| VP-B-008 | s39 P2 | corrigir | 'A way of life had ended, and a new era began.' com ponto final, como se a frase acabasse ali | Na folha ou em qualquer etiqueta entre aspas: 'A way of life had ended, and a new era began for the beautiful country.' ou o corte marcado: '…a way of life had ended, and a new era began…'. |
| VP-B-010 | s43 P1 | corrigir | 'LOCAL COASTAL PROGRAM 1986 MONTEREY COUNTY, CALIFORNIA' como texto da capa | Capa recriada: 'BIG SUR COAST LAND USE PLAN · LOCAL COASTAL PROGRAM · MONTEREY COUNTY, CALIFORNIA', sem ano. O ano vai no crédito, na pílula da linha do tempo e na linha da certificação (VP-B-013). |
| VP-B-012 | s43 P1 | nao_conferida | O dia da certificação: '10' riscado à mão e '9' escrito embaixo | Se a linha for à folha recriada: 'Certification Acknowledged by the California Coastal Commission on April […], 1986', com o dia omitido e marcado; ou a linha fica fora e o ano vai no crédito. |
| VP-B-059 | s20 | corrigir | data_na_origem None; aviso_de_ano None | data_na_origem: '2026-08-15 (Date taken, DVIDS)'; aviso_de_ano: false (filmado em 2026; a voz fala da costa de hoje). |
| VP-B-070 | s30 | nao_conferida | 'This cabin was built in the late 1800s.' (descrição do uploader); o motivo do veredito: 'a cabana do colono John Pfeiffer, do fim do século XIX' | Rótulo: 'JOHN PFEIFFER'S CABIN, PFEIFFER BIG SUR STATE PARK' + 'Photo from 2023', sem ano de construção. |
| VP-B-082 | s37 | corrigir | data_na_origem '1932 (no título do arquivo…)'; aviso_de_ano false | data_na_origem: 'sem ano na legenda da NOAA; 1932 só no título do envio; a obra, 1931–1932'. Se a tela quiser um ano: 'BIXBY CREEK BRIDGE UNDER CONSTRUCTION, 1931–32'. Tirar o 'Photo from 1932' da pauta-imagens (aviso_de_ano_proposto) e da procedência. |
| VP-B-085 | s48 | corrigir | data_na_origem '2024-02-10 (no nome do arquivo)'; aviso false; motivo 'no dia seguinte ao deslizamento' | data_na_origem: 'EXIF 2024-02-12 13:43; o nome do arquivo diz february-10-2024'. Rótulo de data, se houver: 'FEB 2024'. Tirar 'no dia seguinte ao deslizamento' do motivo. |
| VP-B-094 | s53 | corrigir | data_na_origem None; aviso_de_ano None | data_na_origem: '2026-08-13 (Date taken, DVIDS)'; aviso_de_ano: false (do mês do fato). Rótulo possível: 'TIMBER FIRE · AUG 13, 2026'. |
| VP-B-116 | s36 P1 | corrigir | 'Photo from 1930–1936' proposto pela pesquisa | Se a foto voltar: aviso_de_ano false (como em s37), e o ano, se for à tela, '1930s' dentro do rótulo. |
| VP-B-125 | s06 s43 | corrigir | A R008 apoia 'Monterey County's 1986 plan' no trecho da 'capa' 'LOCAL COASTAL PROGRAM 1986 MONTEREY COUNTY, CALIFORNIA'; a R137 e a R138 dão 'P (capa)' como fo… | Trocar o apoio da R008 por 'Certification Acknowledged by the California Coastal Commission on April […], 1986' (folha de rosto) e 'Cover Photograph: Hurricane Point, 1986'; nas R137 e R138, a fonte é a folha de rosto (PDF p. 3), não a capa. |

---

# LOTE A, literal (`out/big-sur/_tmp/vf-bs-A/laudo-pesquisa-A.md`)

COBERTURA: 342 de 342 (lista derivada por script dos 55 _dados + à mão das pautas geo, pessoas e logos; ver abaixo)

# Laudo-delta da pesquisa · lote A · verificador-de-fatos · big-sur (vídeo 5) · screen_text

Tarefa `big-sur-texto-1`, lote A, despachada pelo setor Texto e fatos. Data-base: **05/11/2026**, das 03:0x às 03:4x de Brasília
(as leituras na rede com a hora, abaixo). Escrito para ser lido sem a conversa que o produziu.

## A cobertura, e como a lista foi derivada

A lista é FECHADA e foi derivada assim (o canal não tem extrator para a pesquisa):

1. **Por script** (`out/big-sur/_tmp/vf-bs-A/gerar_laudo_itens.py`), dos 55 `out/big-sur/_dados/s*.json`: cada trecho de
   `texto_para_tela` (separado por ` | `), o `credito_sugerido`, a `legenda` e cada entrada de `valores`. São **262 itens**.
   O script confere a si mesmo: as 36 chaves de veredito especial casam todas com um item ("chaves sem item: []").
2. **À mão, por leitura integral** das outras fontes do lote: `pauta-geo.json` e `.md` (rótulo de cada camada, os números das
   notas 11 e 14 do para-passos, os avisos 1–12, os créditos e licenças), `pauta-pessoas.json` e `.md` (grafias, cargos, as
   duas divergências), `pauta-logos.json` e `.md` (os 12 nomes oficiais, as 3 linhas que explicam, os estados), e as
   afirmações das notas (`nota`) dos `_dados` que mudam o que a tela pode dizer. São **80 itens**.
3. As 5 tabelas `.csv` e o `costa-e-lugares.json` não ganharam linha própria: cada número deles que vai à tela já está num
   `valores` de cena (os 50 estados entram pela nota de s16; as 25 metrópoles, pela nota de s02; a lista cênica, por s41;
   as vagas da ACS, por s56; o censo dos distritos, por s03, s11, s15, s55). Reconferi as cinco contra a fonte primária
   (v_censo.log, v_xlsx.py), e as linhas que nenhuma cena usa não podem ir à tela sem passar por aqui de novo.

Limites declarados do detector: os campos `nota`, `grafias_do_espelho`, `fontes` e `pedidos` dos `_dados` não viraram linha
por script (as `grafias_do_espelho` são do espelho, não da pesquisa; das notas, entraram à mão só as afirmações que mudam a
tela). Os rótulos repetidos de uma camada (os 51 estados, os 13 distritos, os 40 riachos, as 30 pontes) são UMA linha por
camada. O laudo PODE ter mais linhas que o script achou (os 80 manuais); não tem menos.

**COBERTURA: 342 de 342.** CHECADO POR INTEIRO: 312 confirmadas, 15 corrigir, 4 nao_conferida, 11 nada a checar. Nenhum
item ficou sem veredito.

**NOTA: 8.5/10.** A pesquisa é sólida e quase toda reproduzível no disco: refiz por outro caminho todos os números do Census
(PL 94-171, apportionment, CBSA, ACS, Gazetteer, co-est2025), achei 83 de 83 trechos citados nas cópias (7 só com a
formatação diferente: hifenização de linha no plano e as quebras de tabela da leitura do CAL FIRE) e refiz as medidas da
geo em área igual (146.508 contra 146.534 acres; 73,75 contra 73,72 mi; 6,09 contra 6,1 mi). Os 15 "corrigir" são de forma
de tela ou de rótulo, todos com conserto pronto; o único fato que não fecha (a venda de Pfeiffer: ano e área) não é tese.
A nota é a primeira deste lote (não há rodada anterior para comparar).

## Como se verificou (o que foi aberto)

Sem rede, nas cópias do disco, com os scripts em `out/big-sur/_tmp/vf-bs-A/` (os `.log` ao lado):
- `v_censo.py` → `v_censo.log`: o PL 94-171 (`midia/big-sur/fontes/ca2020pl.zip`), o `apportionment.csv`, o `cbsa-est2025`,
  o `co-est2025`, o Gazetteer 2020 e o B25004 da ACS 2020–2024 (com a fórmula de margem do Census para proporção).
- `v_citacoes.py` → `v_citacoes.log`: cada `citacoes_relidas` dos `_dados` procurado letra a letra (sem tags, espaço
  normalizado) na cópia local, mais 70 trechos de tela e de nome.
- `v_geo.py`, `v_geo2.py`, `v_cumes.py`, `v_mini.py` → `v_geo.log`, `v_geo2.log`: as camadas de `out/big-sur/_media/geo/`
  com shapely (área em Lambert azimutal de área igual na esfera autálica; comprimento por haversine), o GNIS e o PL.
- `v_xlsx.py`: a planilha cênica da Caltrans lida no XML do próprio .xlsx. `v_pdf.py`: o texto do PDF da Caltrans de
  14/01/2026 (cópia da pesquisa geo; texto, não imagem).

Na rede (WebFetch e WebSearch, um pedido por vez, nenhum contorno):

| quando (BRT, 05/11/2026) | o quê | resultado |
|---|---|---|
| 03:23 | fire.ca.gov, página do Timber Fire | **abriu** (na pesquisa de 04/11, o robots.txt dava 403): 25,352 Acres; 97% Contained; Date Started 08/08/2026 8:35 PM; Last Updated 10/20/2026 8:41 PM; Not a CAL FIRE Incident; jurisdição Los Padres National Forest; '661 structures remain listed as threatened' |
| 03:23 | inciweb.wildfire.gov/incident-information/calpnf-timber-fire | **403**: parei, sem segunda tentativa |
| 03:24 | roads.dot.ca.gov/roadscell.php?roadnumber=1 | 'as of Wednesday, November 4th, 2026 at 10:22 PM': nenhum fechamento total no condado; as três mãos únicas |
| 03:2x | en.wikipedia.org, Pfeiffer Big Sur State Park | 'sold 700 acres … to the state of California in 1933' (cita Heid 2013, guia de trilhas) |
| 03:2x | www.parks.ca.gov e demo2.parks.ca.gov (o folheto do parque) | **ECONNREFUSED** nas duas: não lido na origem |
| 03:2x | icoat.de/pocketmaps (cópia do folheto da State Parks, '© 2013 California State Parks (Rev. 2015)') | 'sold 680 acres … to the State of California in 1933' |
| 03:2x | bigsurlodge.com/about-us/history | **403**: parei |
| 03:3x | api.openstreetmap.org, node 3123173777 | 36.3724406, -121.9026761, name=Bixby Creek Bridge Viewpoint, tourism=viewpoint |
| 03:3x | catalog.data.gov, CZMA Boundary | License CC0 1.0; 'This boundary is unofficial.' |
| 03:3x | o serviço PAD-US (Manager_Name_PADUS, ?f=pjson) | copyrightText com '2025' e o DOI 10.5066/P96WBCHS |
| 03:2x | WebSearch: Kirk Gafill; a venda de Pfeiffer; tanbark | ver as linhas da tabela |

Nenhum crédito gasto, nenhuma imagem aberta, nada do navegador.


## Os achados acionáveis

Nenhum GRAVE. Nenhuma REFUTADA. Nenhum DIVERGE em afirmação de tese.

**MÉDIO**
1. **s38 · a venda de Pfeiffer (VP-A-143, VP-A-146, VP-A-311, VP-A-312).** Três fontes, três áreas e dois anos: o plano de
   1986 (do condado) diz 706 acres em 1934; o folheto da California State Parks (o dono do parque, lido numa cópia de
   terceiro) diz 680 acres em 1933; a Wikipedia diz 700 acres em 1933. A voz não diz área; a tela a acrescentaria.
   → CONSERTO: `1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986)`, com `PFEIFFER BIG SUR STATE PARK` como rótulo do
   lugar; se a área ficar, `706 ACRES, PER THE 1986 PLAN` na própria pílula. → RAIZ: PONTUAL (a pesquisa seguiu a única
   fonte do dossiê). O ano da voz vai à Sala (abaixo).
2. **s27 · a data do vídeo sob outra imagem (VP-A-107).** `MUD CREEK · JULY 19, 2017` é a data do vídeo de drone do USGS,
   que o conferente mandou trocar; a cena vai com a aérea do USGS de 27/05/2017. → CONSERTO: sobre a aérea, `MUD CREEK ·
   2017` (ou a data do `data_na_origem` do veredito dela); `JULY 19, 2017` só sobre o vídeo daquele dia. → RAIZ: INSTRUÇÃO
   (a etiqueta com data nasceu presa a uma mídia que saiu; vale para toda pílula datada).
3. **s43 (e s24) · a camada de hoje sob a pílula de 1986 (VP-A-269).** `terra-publica-costa-big-sur` é a terra pública de
   2024–2025 (PAD-US 4.1): 72 % da área do plano. Sob `≈ HALF THE COASTAL ZONE PUBLIC · 1986`, o mapa mostraria quase
   três quartos acesos. → CONSERTO: rótulo `PUBLIC LAND TODAY` na camada, ou ela não acende sob a pílula de 1986. Em s24 a
   floresta (56 %) casa com o 'approximately half'. → RAIZ: INSTRUÇÃO (camada de hoje com número de 1986).
4. **s53 · o crédito do Timber Fire (VP-A-212, VP-A-213, VP-A-214; nota 12).** Os números conferem hoje; a etiqueta
   `· CAL FIRE` colada ao nome do fogo lê-se como fogo do CAL FIRE, e a página diz 'Not a CAL FIRE Incident' (jurisdição:
   Los Padres National Forest). → CONSERTO: `TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES` / `661 STRUCTURES
   THREATENED · LISTED BY CAL FIRE` / crédito `Source: CAL FIRE incident page, updated Oct 20, 2026 · Los Padres National
   Forest fire` (curto: `Source: CAL FIRE incident page, Oct 20, 2026`). → RAIZ: PONTUAL.

**LEVE**
5. s21 e a camada da estrada (VP-A-081, VP-A-277): `NACIMIENTO-FERGUSSON ROAD` com hífen, como o plano e o OSM. → PONTUAL.
6. s21 · `HUNTER LIGGETT · 1986` sobre o limite de hoje (VP-A-274): `HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN`, ou
   sem o ano. → PONTUAL.
7. s30 · a legenda do tanbark (VP-A-118): `Tanbark: bark used to make tannic acid.` ('oak' e 'leather' não estão no
   dossiê). → PONTUAL.
8. Os mirantes (VP-A-284): se forem à tela como os lugares do plano, `Hurricane Point Overlook` e `Upper Sycamore Canyon
   Road`. → PONTUAL.
9. Os riachos (VP-A-287): se algum for rotulado, só os 31 com nome do GNIS. → PONTUAL.
10. Cone Peak (VP-A-290, fora da tela): a 2,7 km da borda do distrito, não 3,3. → PONTUAL.
11. A citação do PAD-US na descrição (VP-A-306): o ano é 2025 no próprio serviço. → PONTUAL.

## As respostas às notas do para-passos (9, 10, 11, 12 e 14)

**9 · s52 P1 e s38 P1.**
- O cargo de Kirk Gafill: **confirmado** `KIRK GAFILL · OWNER, NEPENTHE · CALTRANS, MAY 15, 2026` (VP-A-209, VP-A-308) pela
  nota da Caltrans ('said Kirk Gafill, owner of Nepenthe restaurant in Big Sur'). O 'general manager' e a presidência da
  Chamber ficam NÃO CONFERIDOS e fora da tela (VP-A-309).
- A venda de Pfeiffer: a tela **não** pode usar `1934 · 706 ACRES SOLD TO THE STATE` como fato seco. Pode usar `1934 · SOLD
  TO THE STATE · MONTEREY COUNTY PLAN (1986)` (achado 1). A Wikipedia não é a única outra fonte: o folheto da própria State
  Parks diz 680 acres em 1933.

**10 · as formas de tela sugeridas.**
- Wyoming pela contagem do censo de 2020: **confirmado**, 576,851 (apportionment.csv); os 576.872 são o ESTIMATESBASE2020 do
  co-est2025 (VP-A-016, VP-A-056). A densidade com duas casas é 5,94 nas duas bases.
- `WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020`: **confirmado**, as duas na forma do Census (VP-A-056).
- `CONE PEAK · ≈ 5,200 FT`: **confirmado** com o ≈ e o crédito do plano (P [53]: 5,200 feet; USGS 3DEP, no ponto do GNIS,
  5.139,9 ft) (VP-A-072). Nunca `5,200 FT` seco.
- `1934 · 706 ACRES SOLD TO THE STATE`: **corrigir** (achado 1).
- `4,600+`: **confirmado** ('Over 4,600 steel bars, up to 60 feet long', Caltrans 14/01/2026) (VP-A-198).
- Os nomes oficiais das metrópoles: **confirmados**, `Los Angeles-Long Beach-Anaheim, CA` (CBSA 31080: Los Angeles e Orange)
  e `San Francisco-Oakland-Fremont, CA` (CBSA 41860: Alameda, Contra Costa, San Francisco, San Mateo, Marin), no arquivo
  Vintage 2025 do Census (VP-A-001, VP-A-004, VP-A-005, VP-A-296). Nunca 'the two largest' (VP-A-331).

**11 · s14.**
- O Ventana Double Cone: **confirmado** que fica fora, no Carmel Valley CCD, a 13 m da borda (VP-A-265). Isso tira o apoio
  da linha **R028** do laudo do roteiro ('o Ventana Double Cone cai nele'), mas não a frase da voz: 'and the mountains
  behind it' continua de pé por 28 cumes do GNIS dentro do distrito (Pico Blanco, Ventana Cone, South Ventana Cone…).
- O ~36,011 N: **confirmado** (a terra do distrito acaba em 36,0105–36,0111 N; a foz do Limekiln, a 608 m, já é de San
  Ardo) (VP-A-266). O 35,9921 N do dossiê não serve ao mapa.
- O 'roughly two-thirds': **confirmado** em quatro réguas, de 0,61 a 0,64 (VP-A-267).

**12 · s53.** A forma de crédito está no achado 4.

**14 · s07, s14, s17, s24, s25, s43, s45, s49, s59.**
- A área derivada do plano: **confirmada** (146.508 acres refeitos contra 146.534; −2,3 % contra os 150.000; +0,5 % contra a
  camada do condado; IoU 0,988) (VP-A-268).
- Os 72 % e 56 %: **confirmados** (72,2 % e 55,7 %) (VP-A-269, VP-A-270). Os 72 % levam o conserto do achado 3.
- 'Over seventy miles': **confirmado** pela estrada, 73,75 mi no OSM e 72,3 mi na lista da Caltrans (VP-A-276, VP-A-070);
  a linha da costa (85,9 mi no TIGER, 72,8 no 1:500k) depende da escala e não serve de conferência (VP-A-043, VP-A-071).
- PM 21.7 e 27.8: **confirmados** no PDF da Caltrans de 14/01/2026; 6,09 mi pela estrada, 'six miles' confere (VP-A-281).
- O mirante de Bixby: **confirmado** o node/3123173777 pela API do OSM, na cabeceira norte; o 'lado do mar' é coerente, mas a
  4 m do eixo a medida não decide (VP-A-283).
- Os 7 de 9 mirantes: **confirmado** contra o P [230] (VP-A-284; o conserto leve é de grafia).


## Os voláteis do lote A (a Sala relê antes de publicar)

| volátil | lido em (BRT) | o que diz hoje | o que o faz crescer | o que o zera |
|---|---|---|---|---|
| Timber Fire: 25,352 acres, 97 %, 661 estruturas ameaçadas (s53; VP-A-216 a VP-A-220, VP-A-341) | 05/11/2026 03:23, fire.ca.gov | igual à leitura da Sala de 02/11; 'Last Updated 10/20/2026 8:41 PM' | uma atualização nova de área (improvável, 97 % desde 14/10) | nada zera o '25,352' datado; a tela leva a data da página no crédito |
| A Highway 1: aberta, sem fechamento total, com três mãos únicas (s54; VP-A-222, VP-A-228, VP-A-229, VP-A-280, VP-A-342) | 05/11/2026 03:24, roads.dot.ca.gov ('as of … November 4th, 2026 at 10:22 PM') | Mud Creek (dias úteis, 6:30–12:00, até 13/11); 0,9 mi junto ao farol de Point Sur (até 31/12); Rocky Creek Bridge (até 30/11) | — | um fechamento total novo antes da publicação torna falsa a frase 'By November 2026, the road was open…'; o fim das obras não |
| Kirk Gafill, dono do Nepenthe (s52; VP-A-308) | nota de 15/05/2026 (cópia local) | 'owner of Nepenthe restaurant in Big Sur' | — | muda só se o restaurante mudar de dono; o crédito data o cargo |

## PARA A SALA

**NÃO CONFERIDOS, com a URL**
- **A venda de Pfeiffer, ano e área** (VP-A-146, VP-A-311): a fonte que decidiria é a California State Parks. As duas portas
  do folheto recusaram a conexão (ECONNREFUSED, 05/11/2026, 03:2x):
  https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf e
  https://demo2.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf. Li o texto numa cópia de terceiro
  (https://icoat.de/pocketmaps/ca/brochure/ca-pfei-guide/index.html: '680 acres', '1933', '© 2013 California State Parks
  (Rev. 2015)'). A Sala pode abrir o PDF oficial no navegador do app; se ele disser 1933, a voz diverge da fonte do dono.
- **O 'general manager' e a presidência da Chamber de Kirk Gafill** (VP-A-309): só resumos de busca; a página da Chamber
  (https://www.bigsurcalifornia.org/chamber-of-commerce/) recusou robô à pesquisa (403, ALTCHA). Não vai à tela, e não
  precisa ir: nada a fazer, salvo se a Sala quiser o retrato.
- **O PM 73,9 da ponta norte da estrada** (VP-A-300): a cópia dos post miles da pesquisa está truncada. Fora da tela.
- **O InciWeb do Timber Fire** (https://inciweb.wildfire.gov/incident-information/calpnf-timber-fire): 403 ao WebFetch. Não
  faz falta: a página do CAL FIRE abriu e é a fonte que a tela cita.
- **bigsurlodge.com/about-us/history**: 403. Era só uma terceira fonte da venda de 1933.

**A voz que diverge (não se mexe; regravar é decisão do Lucas)**
- **p19: "In 1934, while the road was under construction, John Pfeiffer sold land to the state for a park."** O laudo do
  roteiro confirmou o 1934 pelo plano (R124). A pesquisa trouxe outra data: o folheto da California State Parks (o dono do
  parque; lido em cópia de terceiro) e a Wikipedia dizem **1933**. Não é REFUTADA (nenhuma escritura lida; pode ser o
  acordo num ano e a escritura no outro), é NÃO ACHEI do lado da voz. Afirmação periférica, não de tese. Se o Lucas quiser
  regravar, o conserto de uma frase que serve às duas datas: **"In the early 1930s, while the road was under construction,
  John Pfeiffer sold land to the state for a park."** (a frase seguinte, a do condado, fica igual). Se a Sala confirmar 1933
  no PDF oficial: **"In 1933, while the road was under construction, …"**.

**A correção de apoio no laudo do roteiro (sem mexer na voz)**
- **R028** diz que o Ventana Double Cone cai no distrito. Não cai: fica no Carmel Valley CCD, a 13 m da borda (GNIS 255838 ×
  TIGER 2020). A frase da voz ('and the mountains behind it') continua confirmada por 28 cumes do GNIS dentro do distrito.
  O setor pode trocar o apoio da R028 na próxima rodada do laudo do roteiro.

**Para o redator-de-tela e o mapista, com dono**
- s53: a forma do crédito (achado 4). s27: a data presa à mídia (achado 2). s43: a camada de hoje sob a pílula de 1986
  (achado 3). s38: a pílula sem área (achado 1). s21, s30, mirantes, riachos: grafias (achados 5 a 9).

**O que depende do Lucas**
- Regravar ou não o '1934' do p19 (acima).
- Onde gravar os laudos de fatos (DECISÃO DO LUCAS PENDENTE, da roupa): este vai onde a tarefa mandou,
  `out/big-sur/_tmp/vf-bs-A/`.

## A lista de nomes

A pesquisa do lote A não tem fonte anônima. Os nomes que podem ir à tela ou ao crédito, com a credencial que a fonte dá:
- **Kirk Gafill**, 'owner of Nepenthe restaurant in Big Sur' (Caltrans District 5, nota de 15/05/2026,
  https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2).
- **John Pfeiffer**, quem vendeu ao Estado a terra do parque (plano de 1986, P [1235],
  https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm).
- **Shawn Harrison**, 'USGS Mendenhall researcher', autor do vídeo de drone de 19/07/2017 (USGS,
  https://www.usgs.gov/news/video-shot-drones-yields-details-about-changing-landslide-californias-big-sur-coast): só se a
  cena usar o vídeo dele.
- **Colin Trohig**, 'General Manager of the Big Sur River Inn' (a mesma nota da Caltrans): não vai à tela.

## Os 2 padrões mais vistos

1. **A etiqueta herda uma data ou um dono que não é da imagem nem do fato** (s27, s43, s53, a Hunter Liggett): a data do
   vídeo que saiu; o ano de 1986 sobre a terra de hoje; o órgão que publicou colado ao fogo que não é dele. Quem escreve a
   pílula confere de quem é cada pedaço dela, contra a mídia e a camada que ela cobre.
2. **Fonte única do dossiê para fato antigo** (a venda de Pfeiffer): o plano de 1986 é ótimo para o que o condado decidiu,
   e fraco para o que aconteceu meio século antes. Um fato histórico com número preciso pede a fonte de quem guarda o
   registro (aqui, a State Parks) antes de virar pílula.

## Respostas de seção (os três sentidos do "nada")

- **CHECADO E LIMPO:** os 262 itens dos `_dados`, menos os 7 "corrigir" e o 1 "nao_conferida" deles; os nomes oficiais e
  as linhas que explicam da pauta de logos; os números das notas 11 e 14.
- **NADA A CHECAR (11, declarados):** os 7 "(sem número)" e "(sem texto…)" de s10, s20, s29, s32, s42, s46 e s48; a
  instrução de crédito de s14; os avisos de processo 11 e 12 da geo; a falta de retrato de Charlie Bixby; os estados sem
  bandeira.
- **NÃO FOI CHECADO:** nada ficou sem veredito. Os 4 "nao_conferida" têm veredito, com o motivo e a URL.


## A TABELA (uma linha por item da lista)

Contagem: confirmada 312, corrigir 15, nada a checar 11, nao_conferida 4. A coluna 'laudo do roteiro' lista linhas da `fatos-tabela.json` que têm o mesmo número (cruzamento por termo, não por sentido; anos não contam); onde a pesquisa diz a mesma coisa, a linha é a do roteiro, reconferida.

| id | cena | classe | afirmação | forma de tela | veredito | fonte aberta | conserto / nota | laudo do roteiro |
|---|---|---|---|---|---|---|---|---|
| VP-A-001 | s02 | tela | 17 MILLION+ | 17 MILLION+ | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log | 12.844.441 + 4.630.041 = 17.474.482 (2025). Os nomes oficiais no arquivo do Census: Los Angeles-Long Beach-Anaheim, CA e San Francisco-Oakland-Fremont, CA (Metropolitan Statistical Area). |  |
| VP-A-002 | s02 | crédito | Source: U.S. Census Bureau, 2025 estimates | Source: U.S. Census Bureau, 2025 estimates | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-003 | s02 | legenda | Two official metro areas: Los Angeles–Orange counties, and the five-county San Francisco area. | Two official metro areas: Los Angeles–Orange counties, and the five-county San Francisco area. | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-004 | s02 | valor | Los Angeles-Long Beach-Anaheim, CA metro area, July 1, 2025 = 12844441 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-005 | s02 | valor | San Francisco-Oakland-Fremont, CA metro area, July 1, 2025 = 4630041 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-006 | s02 | valor | Both metro areas, July 1, 2025 = 17474482 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-007 | s02 | valor | Both metro areas, April 1, 2020 (estimates base) = 17958344 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; co-est2025-alldata.csv — v_censo.log |  |  |
| VP-A-008 | s03 | tela | 1,474 · CENSUS DISTRICT · 2020 | 1,474 · CENSUS DISTRICT · 2020 | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R004, R013, R032 |
| VP-A-009 | s03 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-010 | s03 | legenda | A census district: an area the Census Bureau draws inside a county to tally its numbers. | A census district: an area the Census Bureau draws inside a county to tally its numbers. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-011 | s03 | valor | Big Sur CCD, total population (POP100), Census Day 2020 = 1474 people |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R004, R011, R012 |
| VP-A-012 | s04 | tela | (sem número; os dois quadrados com ~6 pontos) | (sem número; os dois quadrados com ~6 pontos) | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log | Os dois quadrados com ~6 pontos: distrito 5,864/mi² e Wyoming 5,941/mi² (contagem 576.851 ÷ 97.088,8 mi²), refeitos em v_censo.log. Os dois arredondam a 6. |  |
| VP-A-013 | s04 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-014 | s04 | legenda | People per square mile of land, 2020. | People per square mile of land, 2020. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-015 | s04 | valor | Big Sur CCD, people per square mile of land, 2020 = 5.86 people/sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R005, R022, R030 |
| VP-A-016 | s04 | valor | Wyoming, people per square mile of land, 2020 (2020 Census count over 2020 land area) = 5.94 people/sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R005, R035, R036 |
| VP-A-017 | s04 | valor | Wyoming, people per square mile, 2020, as published by the Census Bureau = 5.9 people/sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; apportionment.csv — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R005, R026, R035 |
| VP-A-018 | s06 | tela | Big Sur Coast Land Use Plan · Monterey County · 1986 (a linha 'The climate in Big Sur is mild' grifada na folha) | Big Sur Coast Land Use Plan · Monterey County · 1986 (a linha 'The climate in Big Sur is mild' grifada na folha) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | P [65] literal. O 1986 do rótulo é o ano do plano (certificado em abril de 1986, M18); a capa do condado não tem ano (nota 5 do para-passos, lote B): o ano vai no rótulo, não na capa recriada. |  |
| VP-A-019 | s06 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-020 | s06 | legenda | The county's 1986 plan for the Big Sur coast. | The county's 1986 plan for the Big Sur coast. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-021 | s07 | tela | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R012, R022, R092 |
| VP-A-022 | s07 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-023 | s07 | legenda | The plan's estimate, for the whole coast it covers. | The plan's estimate, for the whole coast it covers. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-024 | s07 | valor | People living on the Big Sur coast by the 1880s, per the 1986 plan ('nearly 1000') = 1000 people (approx.) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R011, R012, R013 |
| VP-A-025 | s10 | tela | (sem texto da regra aqui; a regra entra em s44) | (sem texto da regra aqui; a regra entra em s44) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-026 | s10 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-027 | s10 | legenda | The 1986 plan's viewshed rule. | The 1986 plan's viewshed rule. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-028 | s11 | tela | 2020 CENSUS | 2020 CENSUS | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-029 | s11 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-030 | s11 | legenda | Homes counted on Census Day, April 1, 2020. | Homes counted on Census Day, April 1, 2020. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-031 | s11 | valor | Big Sur CCD, housing units, 2020 = 887 housing units |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R202 |
| VP-A-032 | s11 | valor | Occupied = 542 housing units |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R204 |
| VP-A-033 | s11 | valor | Vacant on Census Day = 345 housing units |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R204 |
| VP-A-034 | s11 | valor | Vacant share = 38.9 % |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R204 |
| VP-A-035 | s13 | tela | CENSUS DISTRICT · BIG SUR CCD · MONTEREY COUNTY | CENSUS DISTRICT · BIG SUR CCD · MONTEREY COUNTY | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; glossário do Census (cópia local) — v_citacoes.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-036 | s13 | crédito | Source: U.S. Census Bureau | Source: U.S. Census Bureau | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; glossário do Census (cópia local) — v_citacoes.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-037 | s13 | legenda | CCD: census county division, a statistical area with no government of its own. | CCD: census county division, a statistical area with no government of its own. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; glossário do Census (cópia local) — v_citacoes.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-038 | s14 | tela | (sem número; Carmel e ANOTHER CENSUS DISTRICT) | (sem número; Carmel e ANOTHER CENSUS DISTRICT) | **confirmada** | TIGER 2020 (ccds-condado-monterey) × GNIS — v_geo.log, v_mini.py | Carmel-by-the-Sea cai no Carmel-by-the-Sea CCD e a costa sul no San Ardo CCD (Limekiln Creek, Cone Peak, Mud Creek): ANOTHER CENSUS DISTRICT vale para os dois lados. |  |
| VP-A-039 | s14 | crédito | (medição do canal sobre geometria do Census: sem crédito de fonte; a base do mapa leva o dela) | (medição do canal sobre geometria do Census: sem crédito de fonte; a base do mapa leva o dela) | **nada a checar** | TIGER 2020 (camadas ccd) — v_geo.log; cb_2025 500k; GNIS CA (02/11/2026) × camadas — v_geo.log | instrução de crédito (medição do canal sobre geometria de domínio público), sem afirmação de fato |  |
| VP-A-040 | s14 | legenda | Roughly two-thirds of the coast lies in this census district. | Roughly two-thirds of the coast lies in this census district. | **confirmada** | TIGER 2020 (camadas ccd) — v_geo.log; cb_2025 500k; GNIS CA (02/11/2026) × camadas — v_geo.log |  |  |
| VP-A-041 | s14 | valor | Share of the coast, Carmel to the county line, inside the Big Sur CCD (Census 1:500,000 coastline) = 0.643 fraction |  | **confirmada** | medida do canal (CB 500k) — refeita por outro método em v_geo.log | Não refiz a medida na linha de costa 1:500k. Por outros dois caminhos: 0,630 pela Highway 1 (46,49 de 73,75 mi) e 0,608 pela costa do TIGER 2020; o laudo do roteiro tem 0,64 pela latitude (R029). Roughly two-thirds vale nas três réguas. |  |
| VP-A-042 | s14 | valor | Coastline inside the Big Sur CCD = 46.8 mi |  | **confirmada** | medida do canal (CB 500k) — por outro método em v_geo.log | Fora da tela. Comprimento de costa depende da escala (no TIGER, 52,2 mi dentro do distrito): nunca vai à tela como número. |  |
| VP-A-043 | s14 | valor | Coastline from Carmel-by-the-Sea to the Monterey/San Luis Obispo county line = 72.8 mi |  | **confirmada** | medida do canal (CB 500k) — por outro método em v_geo.log | Fora da tela. No TIGER 2020 a mesma costa dá 85,9 mi: o número depende da escala do arquivo, e só a estrada (72,3 mi na Caltrans; 73,75 no OSM) serve de conferência dos over seventy miles. |  |
| VP-A-044 | s14 | valor | Same share, by latitude only = 0.626 fraction |  | **confirmada** | conta do canal — refeita com os números de costa-e-lugares.json | (36,4895 − 36,0099) ÷ (36,5552 − 35,7890) = 0,626. |  |
| VP-A-045 | s14 | valor | District's northern tip, south of Carmel-by-the-Sea (latitude only) = 5.0 mi |  | **confirmada** | costa-e-lugares.json (36,5552 − 36,48228 = 0,0729° ≈ 5,04 mi) | a few miles south of Carmel vale. | R026, R068 |
| VP-A-046 | s14 | valor | Farthest the district's land reaches inland from the coast = 10.4 mi |  | **confirmada** | v_geo2.log (10,5 mi pela costa do TIGER) | Fora da tela. |  |
| VP-A-047 | s15 | tela | 1,474 · CENSUS DISTRICT · 2020 | 1,474 · CENSUS DISTRICT · 2020 | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R004, R013, R032 |
| VP-A-048 | s15 | tela | 251.4 SQ MI OF LAND | 251.4 SQ MI OF LAND | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R033 |
| VP-A-049 | s15 | tela | ≈ 6 PEOPLE / SQ MI · 2020 | ≈ 6 PEOPLE / SQ MI · 2020 | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-050 | s15 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-051 | s15 | legenda | Density: residents divided by land area, water excluded. | Density: residents divided by land area, water excluded. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-052 | s15 | valor | Big Sur CCD, population, 2020 = 1474 people |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-053 | s15 | valor | Big Sur CCD, land area = 251.4 sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R033 |
| VP-A-054 | s15 | valor | Big Sur CCD, water area (off screen) = 195.2 sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-055 | s15 | valor | People per square mile of land = 5.86 people/sq mi |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; TIGER 2020 (camadas ccd) — v_geo.log |  | R005, R022, R030 |
| VP-A-056 | s16 | tela | WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020 | WYOMING 5.9 · CALIFORNIA 253.7 / SQ MI · 2020 | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log | apportionment.csv (2020): Wyoming 576,851, densidade 5.9; California 39,538,223, 253.7. Os 576.872 do dossiê são o ESTIMATESBASE2020 (co-est2025, v_censo.log); a densidade com duas casas é 5,94 nos dois. A forma do Census (uma casa) é a certa para a tela. | R005, R026, R035 |
| VP-A-057 | s16 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-058 | s16 | legenda | People per square mile of land, 2020 Census. | People per square mile of land, 2020 Census. | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-059 | s16 | valor | Wyoming, people per square mile, 2020 (Census) = 5.9 people/sq mi |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R005, R026, R035 |
| VP-A-060 | s16 | valor | Wyoming, same, to two decimals (count ÷ 2020 land) = 5.94 people/sq mi |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R005, R035, R036 |
| VP-A-061 | s16 | valor | Alaska, people per square mile, 2020 (Census) = 1.3 people/sq mi |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-062 | s16 | valor | Montana, people per square mile, 2020 (Census) = 7.4 people/sq mi |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R003, R036, R234 |
| VP-A-063 | s16 | valor | California, people per square mile, 2020 (Census) = 253.7 people/sq mi |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R038 |
| VP-A-064 | s16 | valor | California, resident population, 2020 = 39538223 people |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  |  |
| VP-A-065 | s16 | valor | California density ÷ Big Sur CCD density = 43.3 × |  | **confirmada** | apportionment.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log; 2020_Gaz_counties_national.txt — v_censo.log |  | R038 |
| VP-A-066 | s17 | tela | MORE THAN 70 MI · MONTEREY COUNTY PLAN (1986) | MORE THAN 70 MI · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k |  |  |
| VP-A-067 | s17 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k |  |  |
| VP-A-068 | s17 | legenda | The coast the 1986 plan covers, from Carmel to San Luis Obispo County. | The coast the 1986 plan covers, from Carmel to San Luis Obispo County. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k |  |  |
| VP-A-069 | s17 | valor | Length of the Big Sur coast, per the 1986 plan ('over seventy miles') = 70 mi (more than) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k |  |  |
| VP-A-070 | s17 | valor | Highway 1, San Luis Obispo county line to Carmel River (Caltrans post miles) = 72.3 mi |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k |  |  |
| VP-A-071 | s17 | valor | Census 1:500,000 coastline from Carmel-by-the-Sea to the county line (canal's check) = 72.8 mi |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; scenic_highway_data_oct-2025.xlsx — v_xlsx.py; cb_2025 500k | Fora da tela. A medida existe, mas não serve de conferência dos 70 mi: no TIGER a mesma costa dá 85,9 mi (v_geo.log). A conferência certa é a estrada (72,3 mi Caltrans, 73,75 mi OSM). |  |
| VP-A-072 | s19 | tela | CONE PEAK · ≈ 5,200 FT | CONE PEAK · ≈ 5,200 FT | **confirmada** | plano P [53] (5,200 feet) — v_citacoes.log; USGS EPQS 5.139,9 ft no ponto do GNIS 270577 | Com o ≈ e o dono do número (crédito do plano), a forma vale: 5.140 ft (USGS, num ponto) e 5.200 (plano); a voz diz about 5,200 feet. Nunca 5,200 FT seco. | R044, R045, R047 |
| VP-A-073 | s19 | tela | 'DROP PRECIPITOUSLY TO THE SEA' · MONTEREY COUNTY PLAN (1986) | 'DROP PRECIPITOUSLY TO THE SEA' · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; USGS EPQS, epqs-cone-peak.json (5.139,9 ft); TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-074 | s19 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; USGS EPQS, epqs-cone-peak.json (5.139,9 ft); TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-075 | s19 | legenda | Cone Peak, in the Santa Lucia Mountains. | Cone Peak, in the Santa Lucia Mountains. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; USGS EPQS, epqs-cone-peak.json (5.139,9 ft); TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-076 | s19 | valor | Cone Peak elevation, per the 1986 plan = 5200 ft |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; USGS EPQS, epqs-cone-peak.json (5.139,9 ft); TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-077 | s19 | valor | Ground elevation at the GNIS summit point of Cone Peak (USGS 3DEP, 1 m) = 5140 ft |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; USGS EPQS, epqs-cone-peak.json (5.139,9 ft); TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-078 | s20 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-079 | s20 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-080 | s21 | tela | HIGHWAY 1 | HIGHWAY 1 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-081 | s21 | tela | NACIMIENTO–FERGUSSON ROAD · 1986 | NACIMIENTO–FERGUSSON ROAD · 1986 | **corrigir** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | CONSERTO: NACIMIENTO-FERGUSSON ROAD · 1986 (hífen, como o plano escreve: The Nacimiento-Fergusson Road) · LEVE: a grafia da fonte (P [1293]) e a do OSM são com hífen; o travessão é estilo, não nome. |  |
| VP-A-082 | s21 | tela | HUNTER LIGGETT | HUNTER LIGGETT | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-083 | s21 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-084 | s21 | legenda | In 1986, the only other road onto this coast from inland. | In 1986, the only other road onto this coast from inland. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-085 | s22 | tela | NEARLY 50 STREAMS | NEARLY 50 STREAMS | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-086 | s22 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-087 | s22 | legenda | Streams counted by the 1986 plan. | Streams counted by the 1986 plan. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-088 | s22 | valor | Separate streams flowing down the mountains to the sea ('nearly fifty') = 50 streams (nearly) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-089 | s23 | tela | WATER · DIFFICULT ACCESS · UNSTABLE SOILS ON STEEP SLOPES · FIRE · FLOOD | WATER · DIFFICULT ACCESS · UNSTABLE SOILS ON STEEP SLOPES · FIRE · FLOOD | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-090 | s23 | tela | MONTEREY COUNTY PLAN (1986) | MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-091 | s23 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-092 | s23 | legenda | The plan's own list of natural limits to building. | The plan's own list of natural limits to building. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-093 | s24 | tela | ≈ HALF FEDERAL LAND · MONTEREY COUNTY PLAN (1986) | ≈ HALF FEDERAL LAND · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-094 | s24 | tela | U.S. FOREST SERVICE | U.S. FOREST SERVICE | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-095 | s24 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-096 | s24 | legenda | National forest and wilderness, run by the U.S. Forest Service. | National forest and wilderness, run by the U.S. Forest Service. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-097 | s24 | valor | Planning area = 150000 acres |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-098 | s24 | valor | Land owned by the U.S. Forest Service in the planning area = 75000 acres |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-099 | s24 | valor | Share owned by the Forest Service = 50 % |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-100 | s25 | tela | VENTANA WILDERNESS | VENTANA WILDERNESS | **confirmada** | 16 U.S.C. cap. 23 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-101 | s25 | tela | STATE PARKS (sem número) | STATE PARKS (sem número) | **confirmada** | 16 U.S.C. cap. 23 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-102 | s25 | valor | State Park System land in the planning area (off screen) = 9000 acres (nearly) |  | **confirmada** | 16 U.S.C. cap. 23 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-103 | s26 | tela | MUD CREEK · 2017 | MUD CREEK · 2017 | **confirmada** | USGS, nota de Mud Creek (cópia local) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-104 | s26 | tela | OUTSIDE THE CENSUS DISTRICT | OUTSIDE THE CENSUS DISTRICT | **confirmada** | USGS, nota de Mud Creek (cópia local) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-105 | s26 | valor | Date the Mud Creek landslide buried Highway 1 = 2017-05-20 date |  | **confirmada** | USGS, nota de Mud Creek (cópia local) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-106 | s26 | valor | Width of the mass over the highway = 0.33 mi (a third of a mile) |  | **confirmada** | USGS, nota de Mud Creek (cópia local) — v_citacoes.log; GNIS CA (02/11/2026) × camadas — v_geo.log; TIGER 2020 (camadas ccd) — v_geo.log |  |  |
| VP-A-107 | s27 | tela | MUD CREEK · JULY 19, 2017 | MUD CREEK · JULY 19, 2017 | **corrigir** | USGS, nota de Mud Creek: took this video … on July 19, 2017 — v_citacoes.log; para-passos item 19 (5) | CONSERTO: Se a s27 não usar o vídeo de 19/07/2017 (o conferente o mandou trocar; vale a aérea do USGS de 27/05/2017 aprovada em s26), a data sai da etiqueta: MUD CREEK · 2017, ou a data que o veredito da aérea dá em data_na_origem. JULY 19, 2017 só vai sobre o vídeo daquele dia. · MÉDIO: a data é do vídeo, não do lugar. Sob outra imagem, a etiqueta data a imagem errada. A voz (That July, a researcher… flew a drone) não muda. |  |
| VP-A-108 | s27 | valor | Date of the USGS drone video = 2017-07-19 date |  | **confirmada** | USGS, nota de Mud Creek (cópia local) — v_citacoes.log |  |  |
| VP-A-109 | s28 | tela | PAUL'S SLIDE | PAUL'S SLIDE | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-110 | s28 | tela | REGENT'S SLIDE (as datas vão a s49) | REGENT'S SLIDE (as datas vão a s49) | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-111 | s28 | crédito | Source: Caltrans, 2026 | Source: Caltrans, 2026 | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-112 | s28 | legenda | Caltrans: California's state highway department. | Caltrans: California's state highway department. | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-113 | s28 | valor | Paul's Slide closure, start = 2023-01-14 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-114 | s28 | valor | Paul's Slide closure, end = 2024-06-23 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-115 | s28 | valor | Regent's Slide = 2024-02-09 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-116 | s29 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-117 | s30 | tela | tanbark (sem número) | tanbark (sem número) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-118 | s30 | legenda | Tanbark: oak bark used to make tannic acid for tanning leather. | Tanbark: oak bark used to make tannic acid for tanning leather. | **corrigir** | plano P [1205] (used in the manufacture of tannic acid) — v_citacoes.log; fora do dossiê: Wikipedia Tanbark e o registro de catálogo de Jepson (USDA, The California tanbark oak. Part I. Tanbark oak and the tanning industry) | CONSERTO: Tanbark: bark used to make tannic acid. · LEVE: oak e for tanning leather não estão no plano nem na voz; as fontes fora do dossiê que os sustentam são secundárias (o texto de Jepson não foi lido). A forma do plano e da voz não precisa de fonte nova. |  |
| VP-A-119 | s31 | tela | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | NEARLY 1,000 PEOPLE · 1880s · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R012, R022, R092 |
| VP-A-120 | s31 | tela | PFEIFFER | PFEIFFER | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-121 | s31 | tela | BIXBY CREEK | BIXBY CREEK | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-122 | s31 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-123 | s31 | legenda | The plan's count, for the whole coast it covers. | The plan's count, for the whole coast it covers. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-124 | s31 | valor | People living on the Big Sur coast by the 1880s, per the 1986 plan ('nearly 1000') = 1000 people (approx.) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R011, R012, R013 |
| VP-A-125 | s32 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-126 | s33 | tela | 'THE HAZARDOUS ROAD' · CLOSED PART OF THE YEAR | 'THE HAZARDOUS ROAD' · CLOSED PART OF THE YEAR | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-127 | s33 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-128 | s34 | tela | 1919 · FHWA | 1919 · FHWA | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-129 | s34 | crédito | Source: Federal Highway Administration | Source: Federal Highway Administration | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-130 | s34 | legenda | FHWA: the federal highway agency. | FHWA: the federal highway agency. | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-131 | s34 | valor | Year construction on Highway One began (FHWA) = 1919 year |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-132 | s34 | valor | Year the highway was completed (the plan) = 1937 year |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-133 | s34 | valor | Years of construction = 18 years |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-134 | s34 | valor | Bridges built with Highway One (FHWA; off screen) = 33 bridges |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-135 | s35 | tela | Bixby Creek (sem ano nem construtor) | Bixby Creek (sem ano nem construtor) | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-136 | s36 | tela | SAN QUENTIN · 3 TEMPORARY CAMPS · 35¢ A DAY · SENTENCES REDUCED · FHWA | SAN QUENTIN · 3 TEMPORARY CAMPS · 35¢ A DAY · SENTENCES REDUCED · FHWA | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log | FHWA, literal: San Quentin Prison set up three temporary prison camps; Inmates were paid 35 cents per day and their prison sentences reduced. A FHWA não diz Folsom (v_citacoes.log): o conflito com a legenda da foto da NOAA é do lote B (item 15). |  |
| VP-A-137 | s36 | crédito | Source: Federal Highway Administration | Source: Federal Highway Administration | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-138 | s36 | legenda | Wages in the dollars of the time. | Wages in the dollars of the time. | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-139 | s36 | valor | Temporary prison camps set up by San Quentin = 3 camps |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-140 | s36 | valor | Inmates' pay = 35 US cents per day (nominal) |  | **confirmada** | FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-141 | s37 | tela | 'ENRAGED' · MONTEREY COUNTY PLAN (1986) | 'ENRAGED' · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-142 | s37 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-143 | s38 | tela | 1934 · 706 ACRES SOLD TO THE STATE | 1934 · 706 ACRES SOLD TO THE STATE | **corrigir** | plano P [1235] (1934, 706 acres); California State Parks, folheto do parque (cópia em icoat.de, © 2013 California State Parks (Rev. 2015): sold 680 acres … to the State of California in 1933); Wikipedia Pfeiffer Big Sur State Park (sold 700 acres … in 1933, citando um guia de trilhas de 2013) | CONSERTO: Tirar a área da etiqueta e prender o ano ao plano: 1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986), com o nome do parque como rótulo do lugar. Se a cena quiser a área, ela vai como número do plano: 706 ACRES, PER THE 1986 PLAN. · MÉDIO: três fontes, três áreas (706 / 700 / 680) e dois anos (1934 / 1933). A voz não diz área: a tela acrescentaria o número que as fontes não fecham. O ano 1934 está na voz (p19): ver PARA A SALA. | R124 |
| VP-A-144 | s38 | tela | FINISHED JUNE 27, 1937 | FINISHED JUNE 27, 1937 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-145 | s38 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-146 | s38 | valor | Land John Pfeiffer sold to the State in 1934 = 706 acres |  | **nao_conferida** | o mesmo da linha da tela de s38 | Fato contestado: o plano (1986, do condado) diz 706 acres em 1934; o folheto da California State Parks (o dono do parque; lido numa cópia de terceiro, porque parks.ca.gov recusou a conexão duas vezes) diz 680 acres em 1933; a Wikipedia diz 700 acres em 1933. Nenhuma escritura lida. Não é refutação do plano: é sustentação frágil. | R124 |
| VP-A-147 | s38 | valor | Pfeiffer Big Sur State Park, size given in the 1986 plan = 822 acres |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-148 | s38 | valor | Highway completed = 1937-06-27 date |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-149 | s39 | tela | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-150 | s39 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-151 | s39 | legenda | In the dollars of the time. | In the dollars of the time. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-152 | s39 | valor | Cost of the highway, per the 1986 plan ('approximately $8,000,000') = 8000000 US$ (nominal, 1937) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R109, R127 |
| VP-A-153 | s40 | tela | LESS THAN A DAY'S DRIVE · 1986 PLAN | LESS THAN A DAY'S DRIVE · 1986 PLAN | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-154 | s40 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-155 | s41 | tela | FIRST STATE SCENIC HIGHWAY · 1965 | FIRST STATE SCENIC HIGHWAY · 1965 | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-156 | s41 | tela | PEAK SUMMER: 95% RECREATIONAL TRIPS · 1986 PLAN | PEAK SUMMER: 95% RECREATIONAL TRIPS · 1986 PLAN | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-157 | s41 | crédito | Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Caltrans; Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-158 | s41 | legenda | Share of all trips on Highway 1 in the summer peak. | Share of all trips on Highway 1 in the summer peak. | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-159 | s41 | valor | Official designation date, Route 1 from the San Luis Obispo county line to Carmel River (Caltrans) = 1965-06-07 date |  | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-160 | s41 | valor | Caltrans designation number of that segment = 1 order (1 = first) |  | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-161 | s41 | valor | Officially designated scenic segments with a date, all of California = 70 segments |  | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py (70 linhas com data; a menor, 07/06/1965, só uma) | Fora da tela. São 70 linhas de trecho, não 70 designações (há números repetidos). |  |
| VP-A-162 | s41 | valor | Recreational share of trips in the peak summer months (1986 plan) = 95 % |  | **confirmada** | scenic_highway_data_oct-2025.xlsx — v_xlsx.py; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-163 | s42 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-164 | s43 | tela | 1986 | 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-165 | s43 | tela | ≈ HALF THE COASTAL ZONE PUBLIC · 1986 | ≈ HALF THE COASTAL ZONE PUBLIC · 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | P [1514] literal (Approximately half of the Big Sur coastal zone is in public ownership). Atenção ao mapa sob a etiqueta: a camada terra-publica-costa-big-sur é a terra pública de HOJE (72 %), não a de 1986 (ver o item da camada PUBLIC LAND). |  |
| VP-A-166 | s43 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-167 | s43 | valor | Share of the Big Sur coastal zone in public ownership ('approximately half') = 50 % (approx.) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-168 | s44 | tela | 'THE CRITICAL VIEWSHED' · MONTEREY COUNTY PLAN (1986) | 'THE CRITICAL VIEWSHED' · MONTEREY COUNTY PLAN (1986) | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-169 | s44 | tela | ILLUSTRATIVE | ILLUSTRATIVE | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-170 | s44 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-171 | s44 | legenda | Everything in sight of Highway 1 and major public viewpoints. | Everything in sight of Highway 1 and major public viewpoints. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-172 | s45 | tela | BIXBY CREEK TURNOUT | BIXBY CREEK TURNOUT | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-173 | s45 | tela | 'normal, unaided vision in any direction for any amount of time at any season' | 'normal, unaided vision in any direction for any amount of time at any season' | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-174 | s45 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-175 | s46 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-176 | s47 | tela | ≈ 2.9 MILLION A YEAR · 1986 | ≈ 2.9 MILLION A YEAR · 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  | R156 |
| VP-A-177 | s47 | tela | EXPECTED TO DOUBLE IN 20–25 YEARS | EXPECTED TO DOUBLE IN 20–25 YEARS | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-178 | s47 | tela | 85% FOR RECREATION, VISITORS & OTHER PRIORITY USES · 1986 PLAN | 85% FOR RECREATION, VISITORS & OTHER PRIORITY USES · 1986 PLAN | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-179 | s47 | tela | NEW HOMES ≤ 15% · 1986 PLAN | NEW HOMES ≤ 15% · 1986 PLAN | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-180 | s47 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-181 | s47 | legenda | Shares of Highway 1's capacity, as the 1986 plan allotted it. | Shares of Highway 1's capacity, as the 1986 plan allotted it. | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-182 | s47 | valor | Visitors to the Big Sur coast per year, estimate in the plan = 2900000 people per year |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-183 | s47 | valor | Years over which demand was expected to double, low end = 20 years |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-184 | s47 | valor | Years over which demand was expected to double, high end = 25 years |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-185 | s47 | valor | Highway 1 capacity reserved for recreation, visitors and other priority uses = 85 % |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-186 | s47 | valor | Highway 1 capacity all future homes may use, at buildout = 15 % |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log |  |  |
| VP-A-187 | s48 | tela | (sem número) | (sem número) | **nada a checar** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; Caltrans 14/01/2026 (cópia local) — v_citacoes.log | instrução de tela, sem afirmação |  |
| VP-A-188 | s48 | valor | Housing units in the plan area, 1976 mid-decade census (off screen) = 800 housing units (approx.) |  | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  | R162 |
| VP-A-189 | s49 | tela | PAUL'S SLIDE · JAN 14, 2023 – JUN 23, 2024 | PAUL'S SLIDE · JAN 14, 2023 – JUN 23, 2024 | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-190 | s49 | tela | REGENT'S SLIDE · FEB 9, 2024 · 6 MI NORTH | REGENT'S SLIDE · FEB 9, 2024 · 6 MI NORTH | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-191 | s49 | tela | ALMOST THREE YEARS | ALMOST THREE YEARS | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-192 | s49 | crédito | Source: Caltrans, 2026 | Source: Caltrans, 2026 | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-193 | s49 | valor | Paul's Slide closure, start = 2023-01-14 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-194 | s49 | valor | Paul's Slide closure, end = 2024-06-23 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-195 | s49 | valor | Regent's Slide = 2024-02-09 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-196 | s49 | valor | Distance between the two slides = 6 mi |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-197 | s49 | valor | Days from Paul's Slide closure to the Regent's Slide reopening = 1096 days |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-198 | s50 | tela | 4,600+ STEEL BARS · UP TO 60 FT · CALTRANS | 4,600+ STEEL BARS · UP TO 60 FT · CALTRANS | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log | Caltrans 14/01/2026, literal: Over 4,600 steel bars, up to 60 feet long. O + guarda o over. A reabertura é fato da nota, nunca data da foto (VR-09). | R175 |
| VP-A-199 | s50 | tela | REOPENED JAN 14, 2026 · NOON | REOPENED JAN 14, 2026 · NOON | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-200 | s50 | crédito | Source: Caltrans, 2026 | Source: Caltrans, 2026 | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-201 | s50 | valor | Steel bars drilled and grouted into the slope ('over 4,600') = 4600 bars (more than) |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  | R175 |
| VP-A-202 | s50 | valor | Length of the bars, maximum = 60 ft |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-203 | s50 | valor | Reopening = 2026-01-14T12:00 date and time |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-204 | s50 | valor | Estimated reopening date = 2026-03-30 date |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-205 | s50 | valor | Days ahead of the estimate = 75 days |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-206 | s51 | tela | $82.6 MILLION (EST.) · CALTRANS | $82.6 MILLION (EST.) · CALTRANS | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  | R178 |
| VP-A-207 | s51 | crédito | Source: Caltrans, 2026 | Source: Caltrans, 2026 | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-208 | s51 | valor | Estimated cost of the Regent's Slide project = 82600000 US$ |  | **confirmada** | Caltrans 14/01/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-209 | s52 | tela | KIRK GAFILL · OWNER, NEPENTHE · CALTRANS, MAY 15, 2026 | KIRK GAFILL · OWNER, NEPENTHE · CALTRANS, MAY 15, 2026 | **confirmada** | Caltrans 15/05/2026 (cópia local): said Kirk Gafill, owner of Nepenthe restaurant in Big Sur — v_citacoes.log | O cargo é o da fonte do fato, datado pelo próprio crédito. General manager e presidente da Chamber são de reportagens antigas que ninguém leu na origem: não entram. |  |
| VP-A-210 | s52 | crédito | Source: Caltrans, May 15, 2026 | Source: Caltrans, May 15, 2026 | **confirmada** | Caltrans 15/05/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-211 | s52 | valor | Date of the Caltrans release = 2026-05-15 date |  | **confirmada** | Caltrans 15/05/2026 (cópia local) — v_citacoes.log |  |  |
| VP-A-212 | s53 | tela | TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES · CAL FIRE | TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES · CAL FIRE | **corrigir** | CAL FIRE, página do incidente (WebFetch 05/11/2026 03:23 BRT): 25,352 Acres; Date Started 08/08/2026 8:35 PM; Last Updated 10/20/2026 8:41 PM; Not a CAL FIRE Incident; Agency Having Jurisdiction: Los Padres National Forest | CONSERTO: TIMBER FIRE · STARTED AUG 8, 2026 · 25,352 ACRES (sem o · CAL FIRE na pílula; o dono dos números vai no crédito) · Os números conferem hoje. Só a etiqueta: · CAL FIRE colado ao nome do fogo lê-se como o fogo do CAL FIRE, e a página diz o contrário. | R187, R188, R191 |
| VP-A-213 | s53 | tela | 661 STRUCTURES THREATENED · CAL FIRE | 661 STRUCTURES THREATENED · CAL FIRE | **corrigir** | CAL FIRE (WebFetch 05/11/2026): 661 structures remain listed as threatened (atualização de setembro); leituras-sala §1: 661 / Structures Threatened / Residential, Commercial and Other | CONSERTO: 661 STRUCTURES THREATENED · LISTED BY CAL FIRE · O listed by é o verbo da voz (CAL FIRE … listed hundreds of homes…) e diz o que o CAL FIRE fez: publicou a lista, não comandou o fogo. | R189 |
| VP-A-214 | s53 | crédito | Source: CAL FIRE, 2026 | Source: CAL FIRE, 2026 | **corrigir** | a mesma página do CAL FIRE | CONSERTO: Source: CAL FIRE incident page, updated Oct 20, 2026 · Los Padres National Forest fire · Forma curta, se a faixa não couber: Source: CAL FIRE incident page, Oct 20, 2026. Em nenhuma forma Source: CAL FIRE, 2026 sozinho ao lado de TIMBER FIRE … · CAL FIRE. |  |
| VP-A-215 | s53 | legenda | CAL FIRE: California's state fire agency. | CAL FIRE: California's state fire agency. | **confirmada** | fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-216 | s53 | valor | Timber Fire, date started = 2026-08-08T20:35 date and time |  | **confirmada** | fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-217 | s53 | valor | Timber Fire, area burned = 25352 acres |  | **confirmada** | fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 | VOLÁTIL: igual em 05/11/2026 03:23 BRT. |  |
| VP-A-218 | s53 | valor | Same, in square miles (canal's conversion; off screen) = 39.6 sq mi |  | **confirmada** | conta: 25.352 ÷ 640 = 39,61 mi² | Fora da tela. |  |
| VP-A-219 | s53 | valor | Structures threatened (residential, commercial and other) = 661 structures |  | **confirmada** | fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 | VOLÁTIL: 661 continua listado (05/11/2026). | R189 |
| VP-A-220 | s53 | valor | Containment at the last update (Oct 20, 2026) = 97 % |  | **confirmada** | fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 | VOLÁTIL: 97 % desde 14/10; a página não mudou desde 20/10 (lida em 05/11/2026 03:23 BRT). Fora da tela. |  |
| VP-A-221 | s54 | tela | CLOSED · AUG 2026 · CALTRANS | CLOSED · AUG 2026 · CALTRANS | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-222 | s54 | tela | NOV 1, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS | NOV 1, 2026: OPEN · ONE-WAY AT WORK ZONES · CALTRANS | **confirmada** | roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM') | VOLÁTIL. Relido em 05/11/2026 03:24 BRT: nenhum fechamento total no condado de Monterey; as três mãos únicas (Mud Creek até 13/11; from 7.5 mi north /at Point Sur Lighthouse/ to 8.4 mi north of Big Sur até 31/12; Rocky Creek Bridge até 30/11). A forma datada NOV 1, 2026 continua verdadeira; a de hoje seria NOV 4, 2026. |  |
| VP-A-223 | s54 | crédito | Source: Caltrans, 2026 | Source: Caltrans, 2026 | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-224 | s54 | valor | Timber Fire closure of Highway 1, in effect = 2026-08-11T14:00 date and time |  | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-225 | s54 | valor | Northern closure lifted = 2026-09-03T06:00 date and time |  | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-226 | s54 | valor | Days between the two notes = 23 days |  | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  |  |
| VP-A-227 | s54 | valor | Closed stretch, Aug 11 (PM 37.5 to PM 47) = 9.5 mi (post miles) |  | **confirmada** | Caltrans 11/08/2026 (cópia local) — v_citacoes.log; Caltrans 02/09/2026 (cópia local) — v_citacoes.log; roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM'); fire.ca.gov/incidents/2026/8/8/timber-fire, WebFetch 05/11/2026 03:23 BRT + leituras-sala §1 |  | R192 |
| VP-A-228 | s54 | valor | Full closures in Big Sur on Nov 4, 2026, 1:16 PM (Caltrans) = 0 closures |  | **confirmada** | roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM') | VOLÁTIL: relido em 05/11/2026 03:24 BRT (página de 04/11, 10:22 PM Pacific). |  |
| VP-A-229 | s54 | valor | One-way controls in Big Sur on Nov 4, 2026 = 3 work zones |  | **confirmada** | roads.dot.ca.gov SR 1, WebFetch 05/11/2026 03:24 BRT ('as of Wednesday, November 4th, 2026 at 10:22 PM') | VOLÁTIL: idem. A zona de Point Sur tem 0,9 mi junto ao farol, não entre Point Sur e o norte de Big Sur (o resumo da pauta de dados). |  |
| VP-A-230 | s55 | tela | 887 HOMES · 2020 CENSUS | 887 HOMES · 2020 CENSUS | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R202 |
| VP-A-231 | s55 | tela | 345 EMPTY ON CENSUS DAY · 2020 CENSUS | 345 EMPTY ON CENSUS DAY · 2020 CENSUS | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R204 |
| VP-A-232 | s55 | crédito | Source: U.S. Census Bureau, 2020 Census | Source: U.S. Census Bureau, 2020 Census | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-233 | s55 | legenda | 'Empty' here means vacant on Census Day, April 1, 2020. | 'Empty' here means vacant on Census Day, April 1, 2020. | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-234 | s55 | valor | Big Sur CCD, housing units, 2020 = 887 housing units |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R202 |
| VP-A-235 | s55 | valor | Vacant on Census Day = 345 housing units |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R020, R201, R204 |
| VP-A-236 | s55 | valor | Vacant share = 38.9 % |  | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log |  | R204 |
| VP-A-237 | s56 | tela | SEASONAL, RECREATIONAL OR OCCASIONAL USE · ACS 2020–2024 | SEASONAL, RECREATIONAL OR OCCASIONAL USE · ACS 2020–2024 | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-238 | s56 | tela | CENSUS DISTRICT ≈ 93% (WIDE MARGINS) | CENSUS DISTRICT ≈ 93% (WIDE MARGINS) | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-239 | s56 | tela | CALIFORNIA ≈ 33% · ACS 2020–2024 | CALIFORNIA ≈ 33% · ACS 2020–2024 | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-240 | s56 | crédito | Source: U.S. Census Bureau, American Community Survey, 2020–2024 | Source: U.S. Census Bureau, American Community Survey, 2020–2024 | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-241 | s56 | legenda | A Census Bureau survey run every year; small areas carry wide margins. | A Census Bureau survey run every year; small areas carry wide margins. | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-242 | s56 | valor | Big Sur CCD, vacant homes held for seasonal, recreational or occasional use = 265 housing units |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  | R021, R207, R220 |
| VP-A-243 | s56 | valor | Big Sur CCD, all vacant homes = 285 housing units |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  | R021, R207 |
| VP-A-244 | s56 | valor | Big Sur CCD, seasonal share of vacant homes = 93.0 % |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-245 | s56 | valor | Same, margin of error (90%) = 11.3 percentage points |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-246 | s56 | valor | California, seasonal share of vacant homes = 32.6 % |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-247 | s56 | valor | California, margin of error (90%) = 0.8 percentage points |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-248 | s56 | valor | Monterey County, seasonal share of vacant homes (off screen) = 54.2 % |  | **confirmada** | acsdt5y2024-b25004.dat — v_censo.log; census.gov/acs/about (cópia local) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-249 | s57 | tela | 'TOURISTS ARE RETURNING IN CONSIDERABLE NUMBERS' · CALTRANS, MAY 15, 2026 | 'TOURISTS ARE RETURNING IN CONSIDERABLE NUMBERS' · CALTRANS, MAY 15, 2026 | **confirmada** | Caltrans 15/05/2026 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-250 | s57 | crédito | Source: Caltrans, May 15, 2026 | Source: Caltrans, May 15, 2026 | **confirmada** | Caltrans 15/05/2026 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-251 | s57 | valor | Date of the Caltrans release = 2026-05-15 date |  | **confirmada** | Caltrans 15/05/2026 (cópia local) — v_citacoes.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; regra de residência 2020 (cópia local) — v_citacoes.log |  |  |
| VP-A-252 | s58 | tela | WYOMING (sem número novo) | WYOMING (sem número novo) | **confirmada** | ca2020pl.zip (PL 94-171) — v_censo.log; acsdt5y2024-b25004.dat — v_censo.log; plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; apportionment.csv — v_censo.log |  |  |
| VP-A-253 | s58 | valor | ACS seasonal homes over the 2020 census homes (two rulers; off screen) = 29.9 % |  | **confirmada** | conta: 265 (ACS) ÷ 887 (censo) = 29,9 % | A conta mistura duas réguas: nunca na tela, como a pesquisa diz. |  |
| VP-A-254 | s59 | tela | BIXBY CREEK TURNOUT · NAMED IN THE 1986 PLAN | BIXBY CREEK TURNOUT · NAMED IN THE 1986 PLAN | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-255 | s59 | crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | plano de 1986 (bigsur-lup-1986-govinfo.htm) — v_citacoes.log; FHWA back0403 (cópia local) — v_citacoes.log |  |  |
| VP-A-256 | s60 | tela | 17 MILLION+ | 17 MILLION+ | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-257 | s60 | tela | 1,474 · CENSUS DISTRICT · 2020 | 1,474 · CENSUS DISTRICT · 2020 | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  | R004, R013, R032 |
| VP-A-258 | s60 | crédito | Source: U.S. Census Bureau, 2020 Census and 2025 estimates | Source: U.S. Census Bureau, 2020 Census and 2025 estimates | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-259 | s60 | valor | Both metro areas, July 1, 2025 = 17474482 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-260 | s60 | valor | Both metro areas, April 1, 2020 (estimates base) = 17958344 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-261 | s60 | valor | Big Sur CCD, population, 2020 = 1474 people |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log; ca2020pl.zip (PL 94-171) — v_censo.log |  |  |
| VP-A-262 | s03 s07 s11 s13 s14 s15 s16 s17 s19 s24 s26 s29 s31 s53-s57 s60 s61 | geo | ccd-big-sur: rótulo BIG SUR CCD; a terra vai de 36,4823 N a 36,0105 N na costa; 251,57 mi² medidos contra ALAND 251,36 | BIG SUR CCD | **confirmada** | PL 94-171 (NAME Big Sur CCD; AREALAND 651.025.601 m² = 251,36 mi²) — v_censo.log; a camada: bbox 36,01052–36,48228, 251,56 mi² — v_geo.log |  |  |
| VP-A-263 | s14 s26 | geo | ccd-san-ardo: rótulo SAN ARDO CCD; ALAND 1.416,0 mi² | SAN ARDO CCD | **confirmada** | PL 94-171: San Ardo CCD, terra 1.416,04 mi² — v_censo.log |  |  |
| VP-A-264 | s13 | geo | ccds-condado-monterey: os 13 nomes de CCD do condado | Big Sur CCD … Toro Park CCD | **confirmada** | PL 94-171, SUMLEV 060, condado 053: 13 nomes, iguais aos da camada — v_mini.py |  |  |
| VP-A-265 | s14 (nota 11) | geo | O Ventana Double Cone fica na divisa, do lado do Carmel Valley CCD: não leva rótulo de dentro do distrito |  | **confirmada** | GNIS 255838 (36,2971096, -121,7146594) × TIGER 2020: Carmel Valley CCD, a 13 m da borda do Big Sur CCD — v_geo.log | Corrige o APOIO da linha R028 do laudo do roteiro ('o Ventana Double Cone cai nele'), não a voz: 'and the mountains behind it' continua de pé por 28 cumes do GNIS dentro do distrito (Pico Blanco, Ventana Cone, South Ventana Cone, Marble Peak, Manuel Peak, Anderson Peak…; v_cumes.py). |  |
| VP-A-266 | s14 (nota 11) | geo | A terra do distrito só toca a costa até ~36,011 N, uns 600 m a noroeste da foz do Limekiln Creek; o 35,9921 N do dossiê é o ponto onde a divisa legal sai para o mar |  | **confirmada** | camada ccd-big-sur: latitude mínima 36,01052; foz do Limekiln (GNIS 272042, 36,0088) no San Ardo CCD, a 608 m da borda — v_geo.log; costa-e-lugares.json: terra_bs_lat_sul 36,0111 | Para o mapista: o distrito aceso na costa termina em ~36,011 N, não em 35,99. |  |
| VP-A-267 | s14 s05 (nota 11) | geo | roughly two-thirds: 63 % pela Highway 1 (46,5 de 73,7 mi), 61 % pela costa do TIGER, 64 % pela costa 1:500k e pela latitude |  | **confirmada** | v_geo.log: 46,49 de 73,75 mi = 0,630; costa TIGER 52,20 de 85,92 mi = 0,608; R029 do laudo do roteiro (latitude, 0,64) | A voz ('roughly two-thirds') vale nas quatro réguas. |  |
| VP-A-268 | s07 s14 s17 s24 s25 s43 s45 s49 s59 (nota 14) | geo | costa-do-plano-1986: 146.534 acres; −2,3 % contra os 150.000 do plano; +0,5 % contra os 145.837 da camada do condado; sobreposição IoU 0,989 | BIG SUR COAST · 1986 PLAN | **confirmada** | refeito em área igual (Lambert azimutal, esfera autálica): 146.508 acres (−2,3 %); camada do condado 145.816 acres (+0,5 %); IoU 0,988 — v_geo.log, v_geo2.log; plano P [79]: 'the planning area's 150,000 acres' | Diferenças de 0,02 % (projeção). O rótulo '· 1986 PLAN' sobre o polígono derivado vale porque ele casa com a camada do condado a 98,8 %; os números da tela continuam os do plano. |  |
| VP-A-269 | s24 s43 (nota 14) | geo | terra-publica-costa-big-sur: 105.850 acres, 72 % da área do plano (USFS 82.592, Estado 20.392, condado e distritos 2.866) | PUBLIC LAND | **corrigir** | v_geo.log: 105.829 acres (72,2 %); por dono 82.584 / 20.393 / 2.862 | CONSERTO: Os números estão certos. O rótulo PUBLIC LAND sobre esta camada é terra de HOJE (PAD-US 4.1, 72 %): em s43, sob '≈ HALF THE COASTAL ZONE PUBLIC · 1986', a camada leva 'TODAY' no rótulo ('PUBLIC LAND TODAY') ou não acende sob a pílula de 1986. · MÉDIO: o mapa mostraria quase três quartos acesos sob uma etiqueta que diz metade. A voz de s43 ('By then, much of this coast was already public land') fala de 1986. |  |
| VP-A-270 | s24 (nota 14) | geo | floresta-nacional-los-padres: 81.694 acres, 56 % da área do plano | LOS PADRES NATIONAL FOREST | **confirmada** | v_geo.log: 81.677 acres (55,7 %) | 56 % de hoje casa com o 'approximately half' de 1986 da pílula de s24 (P [79]) na leitura de um mapa. |  |
| VP-A-271 | s25 (nota 14) | geo | terra-privada-que-sobra: 40.684 acres, 28 % (inclui terra de ONG e servidões) | WHAT'S LEFT | **confirmada** | v_geo.log: 40.668 acres (27,8 %); pública + privada = 146.497 de 146.508 | O rótulo é o 'what's left' da voz (p11, no presente): a camada de hoje serve. Não leva 'PRIVATE': inclui terra de ONG. |  |
| VP-A-272 | s25 | geo | parques-estaduais-big-sur: 7 unidades, 12.024 acres hoje (11.598 dentro da área do plano); os sete nomes | GARRAPATA STATE PARK … LIMEKILN STATE PARK | **confirmada** | v_geo.log: 12.024 acres, por unidade 2.840 / 99 / 4.695 / 1.356 / 2.269 / 23 / 743; v_geo2.log: 11.590 dentro da área do plano | A tela não leva número (s25); o do plano é 'Nearly 9,000 acres' (P [80]). |  |
| VP-A-273 | s31 s38 | geo | pfeiffer-big-sur-state-park: o parque de hoje tem 1.357 acres; os 706 de 1934 nunca vão à área do polígono | PFEIFFER BIG SUR STATE PARK | **confirmada** | v_geo.log: 1.356 acres | Três tamanhos do parque nas fontes (822 no plano de 1986; ~1.006 na Wikipedia; 1.357 no PAD-US): nenhum vai à tela. |  |
| VP-A-274 | s21 | geo | reserva-hunter-liggett: o limite de proclamação de HOJE (160.691 acres) com o rótulo do ano do plano | HUNTER LIGGETT · 1986 | **corrigir** | v_geo.log: 160.715 acres; PAD-US Unit_Nm 'Fort Hunter Liggett'; plano P [1293]: 'Hunter-Liggett Military Reservation' | CONSERTO: HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN (o nome do plano, ligado ao ano do texto), ou só HUNTER LIGGETT sem o ano. · LEVE: 'HUNTER LIGGETT · 1986' sobre o polígono de hoje lê-se como 'o limite em 1986', que ninguém leu. |  |
| VP-A-275 | s24 s25 | geo | area-selvagem-ventana: a designação inteira (USFS 236.192 + BLM 731), 238.537 acres | VENTANA WILDERNESS | **confirmada** | v_geo.log: 238.625 acres; o nome está no plano e no 16 U.S.C. cap. 23 |  |  |
| VP-A-276 | s10 s21 s23 s26 s28 … s60 | geo | highway-1-big-sur: 73,72 mi de Carmel à divisa; bate com 'over seventy miles' (P [51]); a linha da costa no mesmo trecho tem 85,98 mi | HIGHWAY 1 | **confirmada** | v_geo.log: 73,75 mi pela estrada; 85,92 mi pela costa do TIGER; Caltrans (lista cênica): PM 0,000–72,321 até o Carmel River |  |  |
| VP-A-277 | s21 | geo | estrada-nacimiento-fergusson: 24,21 mi, da Highway 1 (Kirk Creek) a Fort Hunter Liggett, traçado de hoje | NACIMIENTO–FERGUSSON ROAD | **corrigir** | v_geo.log: 24,20 mi; plano P [1293] e OSM: 'Nacimiento-Fergusson Road' | CONSERTO: NACIMIENTO-FERGUSSON ROAD (hífen) · LEVE: a medida confere; só a grafia do rótulo (travessão em vez do hífen da fonte). |  |
| VP-A-278 | s54 | geo | fechamento-pm37-5-pm47-ago-2026: a Highway 1 entre os PM 37,5 e 47, 9,43 mi ('a 10-mile stretch'), dentro do distrito | CLOSED · AUG 2026 | **confirmada** | Caltrans 11/08/2026 (cópia local), literal — v_citacoes.log; v_geo.log: 9,43 mi, todos dentro do distrito |  |  |
| VP-A-279 | s54 | geo | fechamento-plaskett-2026: PM 16 (Pacific Valley) a PM 0,0, 15,85 mi, fora do distrito | PLASKETT FIRE | **confirmada** | Caltrans 02/09/2026 (cópia local): 'The southern closure supporting Plaskett Fire … from Pacific Valley at Post Mile 16 to Post Mile 0.0' — v_citacoes.log; v_geo.log: 15,85 mi, 0 dentro do distrito |  |  |
| VP-A-280 | s54 | geo | one-way-nov-2026: três lugares (Mud Creek; Point Sur, 0,9 mi para o norte a partir do farol; Rocky Creek Bridge no PM 60,0) | ONE-WAY (×3) | **confirmada** | ROADS (05/11/2026 03:24 BRT): 'from 7.5 mi north /at Point Sur Lighthouse/ to 8.4 mi north of Big Sur'; PDF da Caltrans 14/01/2026: 'Rocky Creek Viaduct — Hwy. 1 at PM 60.0' — v_pdf.py; v_geo.log: a linha de Point Sur tem 0,90 mi | VOLÁTIL: Mud Creek até 13/11, Rocky Creek até 30/11, Point Sur até 31/12/2026. Relê-se antes de publicar. |  |
| VP-A-281 | s28 s49 (nota 14) | geo | Paul's Slide no PM 21,7 e Regent's Slide no PM 27,8; 6,1 mi pela estrada (5,2 mi em linha reta); 'six miles' confere | PAUL'S SLIDE / REGENT'S SLIDE | **confirmada** | PDF da Caltrans 'Big Sur Highway 1 Emergency Projects', 'Updated January 14, 2026' (cópia local, sha256 e3569406…): 'Regent's Slide — Hwy. 1 at PM 27.8', 'Paul's Slide — Hwy. 1 at PM 21.7' — v_pdf.py; v_geo.log: 6,09 mi pela estrada, 5,17 em linha reta, Regent's ao norte | A nota da Caltrans de 14/01/2026 diz 'Paul's Slide, six miles to the south' (v_citacoes.log): fecha com a medida. |  |
| VP-A-282 | s01 s02 s03 s13 s14 s31 s35 s45 s59 s60 s61 | geo | ponte-bixby: o ponto do L1 (36,3715 N, 121,9020 W), a 11 m do meio do way 120270844 do OSM, dentro do distrito | BIXBY CREEK BRIDGE | **confirmada** | v_geo.log (o ponto cai no Big Sur CCD); a distância ao way não refeita (o way não está no disco) | A posição dentro do distrito é a que importa para a tela (R002 do laudo do roteiro). |  |
| VP-A-283 | s45 s59 s60 (nota 14) | geo | bixby-creek-turnout: o node/3123173777 do OSM, 'Bixby Creek Bridge Viewpoint', na cabeceira norte da ponte, do lado do mar, a 116 m do meio dela — escolha declarada | BIXBY CREEK TURNOUT | **confirmada** | API do OSM (05/11/2026): node 3123173777, 36.3724406, -121.9026761, name=Bixby Creek Bridge Viewpoint, tourism=viewpoint; v_geo.log: 121 m do ponto L1 da ponte, ao norte, 4 m a oeste do eixo da Highway 1 | O nome e o lugar conferem. O 'lado do mar' é coerente (a oeste do eixo), mas a 4 m do eixo a medida não distingue a pista do acostamento: o conferente julga as tomadas de s45 P3 e s59 P1 pelo que elas mostram (a ponte vista do norte). O plano não localiza o mirante (P [230]): é escolha declarada. |  |
| VP-A-284 | s44 s45 s46 s59 s60 (nota 14) | geo | mirantes-nomeados-1986 tem 7 dos 9 lugares do P [230]; faltam o Abalone Cove Vista Point e a Cooper Beach | Soberanes Point · Hurricane Point · Pfeiffer Beach · Sycamore Canyon Road · Old Coast Road · Bixby Creek Turnout · Garrapata Beach | **corrigir** | plano P [230], literal: 'Soberanes Point, Garrapata Beach, Abalone Cove Vista Point, Bixby Creek Turnout, Hurricane Point Overlook, Upper Sycamore Canyon Road (Highway 1 to Pais Road), Pfeiffer Beach/Cooper Beach, and specific views from Old Coast Road' — v_citacoes.log; a camada tem os 7 — v_geo.log | CONSERTO: A contagem confere. Se os rótulos forem à tela como os lugares nomeados no plano, dois seguem a grafia dele: 'Hurricane Point Overlook' e 'Upper Sycamore Canyon Road'. · LEVE: o resto dos rótulos é a grafia do plano. |  |
| VP-A-285 | s07 s32 s48 | geo | desembarcadouros-1880: Notley's Landing, Bixby Creek, Big Sur River, Partington Landing, Rockland Landing (declarado na foz do Limekiln Creek) | os 5 rótulos | **confirmada** | plano: 'Godfrey Notley's landing', 'another at the mouth of the Big Sur river', 'Partington Landing', 'The Rockland Cement Company chose Limekiln Canyon … Rockland Landing', e 'BIXBY LANDING' no mapa do plano — v_citacoes.log e grep da cópia | Rockland no Limekiln é declarado (o plano dá o cânion, não o ponto). |  |
| VP-A-286 | s36 | geo | acampamentos-san-quentin: Little Sur River, Kirk Creek e Anderson Creek, nas fozes do GNIS (declarado) | Little Sur River · Kirk Creek · Anderson Creek | **confirmada** | FHWA, literal: 'one was set up by Little Sur River, one at Kirk Creek and later one was established at Anderson Creek' — v_citacoes.log | O ponto na foz é declarado: o rótulo nomeia o riacho, não diz 'o acampamento era aqui'. |  |
| VP-A-287 | s22 s23 s34 | geo | riachos-costa-big-sur: 59 fozes de Carmel à divisa, 55 do Malpaso Creek para o sul, 36 com nome; três nomes do TIGER trocados pelos do GNIS (Mal Paso → Malpaso Creek; McWay Canyon Stream → McWay Creek; a foz do Burns Creek → Anderson Creek) | rótulos de riacho (40) | **corrigir** | a camada: 59 feições, 55 com ao_sul_do_mal_paso, 36 nomes únicos ao sul — v_geo2.log; as três trocas e os pontos do GNIS (245412, 1703256, 1873475) — v_mini.py | CONSERTO: Os números conferem (e a tela fica com o 'NEARLY 50' do plano). Se algum riacho for rotulado, só os 31 com nome_gnis; os 9 rótulos que vêm só do TIGER, com a abreviatura expandida pelo canal (San Jose Creek, Jobernales Stream, Granite Creek, Castro Arroyo, Boronda Ridge Creek, Torres Canyon Creek, Hot Springs Creek, Lime Creek, Dolan Canyon Creek Arroyo), não vão à tela. · LEVE. |  |
| VP-A-288 | s22 s23 s34 | geo | big-sur-river: o leito do OSM (26,47 km), foz e nascente a 38 m e 15 m dos pontos do GNIS | Big Sur River | **confirmada** | GNIS 269851 (nome); a medida do leito não refeita (fora da tela) |  |  |
| VP-A-289 | s34 | geo | travessias-highway-1: 30 pontes no OSM de Carmel à divisa, 6 com nome; a FHWA conta 33 construídas com a estrada; a voz diz 'dozens' | Granite Canyon · Rocky Creek · Bixby Creek · Pfeiffer Canyon · Burns Creek · Villa Creek Bridge | **confirmada** | a camada: 30 feições, 6 rótulos — v_geo.log, v_rotulos.txt; FHWA: 'From the 33 bridges constructed with Highway One' — v_citacoes.log | Os nomes são os do OSM (a fonte declarada); nenhum número de ponte vai à tela. |  |
| VP-A-290 | s19 | geo | cone-peak: o ponto do GNIS 270577, fora do distrito (San Ardo CCD), a ~3,3 km da borda dele | CONE PEAK | **corrigir** | v_geo.log: San Ardo CCD, a 2.664 m da borda do Big Sur CCD | CONSERTO: a ~2,7 km da borda (fora da tela) · LEVE, fora da tela. O que importa à voz ('in the southern part of this coast') e ao rótulo confere. |  |
| VP-A-291 | s08 s10 s14 s19 … s53 | geo | serra-santa-lucia: o ponto do GNIS da Santa Lucia Range; o rótulo é SANTA LUCIA MOUNTAINS | SANTA LUCIA MOUNTAINS | **confirmada** | plano P [53]: 'The western slopes of the Santa Lucia Mountains' — v_citacoes.log; GNIS 273555 'Santa Lucia Range' — v_mini.py | O rótulo segue o plano e a voz; o GNIS chama de Range. Os dois nomes são do mesmo acidente. |  |
| VP-A-292 | s07 s14 s17 s33 | geo | carmel-by-the-sea (rótulo CARMEL), monterey (MONTEREY) e vale-do-big-sur (BIG SUR VALLEY, no lugar povoado Big Sur do GNIS) | CARMEL · MONTEREY · BIG SUR VALLEY | **confirmada** | GNIS 1658224, 1659762, 269849 — v_mini.py; plano P [1486]: 'The Big Sur Valley could be reached by stage from Monterey' — v_citacoes.log | BIG SUR VALLEY sobre o ponto do povoado vale (o povoado fica no vale do rio; dentro do distrito, a 35 m da estrada). |  |
| VP-A-293 | s09 s26 s27 s28 | geo | mud-creek: o ponto do L1 (35,8655 N, 121,4305 W), a ~250 m da foz do GNIS, fora do distrito | MUD CREEK | **confirmada** | v_geo.log: San Ardo CCD; GNIS 246320 |  |  |
| VP-A-294 | s52 | geo | nepenthe: o node/1362592945 do OSM (amenity=restaurant), a 101 m da Highway 1, dentro do distrito | Nepenthe | **confirmada** | v_geo.log: Big Sur CCD, 101 m da estrada | O endereço do OSM (48510 Cabrillo Highway) não foi relido; não vai à tela. |  |
| VP-A-295 | s53 | geo | timber-fire-origem: 36.224857, -121.72983 (CAL FIRE), dentro do distrito | TIMBER FIRE | **confirmada** | leituras-sala §1: '[36.224857,-121.72983]', 'Southeast of Loma Vista' — v_citacoes.log; v_geo.log: Big Sur CCD, a 1,8 km da estrada | R186 do laudo do roteiro (o ponto no distrito). |  |
| VP-A-296 | s02 s03 s40 s60 s61 | geo | metro-los-angeles (Los Angeles + Orange, 12.669 km²) e metro-san-francisco (5 condados, 6.624 km²), com os rótulos LOS ANGELES e SAN FRANCISCO; a de SF NÃO é a Bay Area | LOS ANGELES · SAN FRANCISCO | **confirmada** | cbsa-est2025: CBSA 31080 = Los Angeles + Orange; CBSA 41860 = Alameda, Contra Costa, San Francisco, San Mateo, Marin — v_censo.log; áreas 12.680 e 6.623 km² — v_geo.log |  |  |
| VP-A-297 | s16 | geo | estados-eua (51 rótulos, sem Porto Rico), alaska, california, wyoming | ALASKA · CALIFORNIA · WYOMING … | **confirmada** | a camada: 51 feições — v_geo.log; nomes do cb_2025 |  |  |
| VP-A-298 | s07 s17 | geo | divisa-monterey-san-luis-obispo: a ponta oeste da divisa, a 100 m do PM 0,0 | SAN LUIS OBISPO COUNTY | **confirmada** | plano P [51] ('south to the San Luis Obispo County line') — v_citacoes.log; o primeiro ponto da Highway 1 da camada coincide com o PM 0,0 da Caltrans (35,7952 N) — v_geo.log |  |  |
| VP-A-299 | s24 s25 s43 | geo | aviso 2 da pauta geo: o plano diz 'Approximately half … within the Los Padres National Forest and the Ventana Wilderness', 'Nearly 9,000 acres' de parques, 'Approximately 55,000 acres are in private ownership' e 'approximately half of the Big Sur coastal zone is in public ownership'; hoje a parte pública é maior |  | **confirmada** | plano P [79]–[80] e P [1514], relidos (P [79] tem 'Ventana Wilder-ness' com hifenização de linha) — v_citacoes.log; hoje 72 % público — v_geo.log |  |  |
| VP-A-300 | — | geo | aviso 4 da pauta geo: a ponta norte da Highway 1 da camada fica a 25 m do PM 73,9 da Caltrans |  | **nao_conferida** | a cópia local dos post miles (pm-route1-mon.geojson) está truncada ('exceededTransferLimit'): o PM 73,9 não está nela | Fora da tela. Os 73,72 mi da estrada conferem pelo comprimento (v_geo.log). |  |
| VP-A-301 | — | geo | aviso 5 da pauta geo: a mesma folha da Caltrans dá Rocky Creek Viaduct PM 60,0, Saint Francis PM 47,8, Dolan Point PM 29,5 e Shale Point PM 7,2/7,9 |  | **confirmada** | PDF da Caltrans de 14/01/2026 (cópia local) — v_pdf.py |  |  |
| VP-A-302 | — | geo | avisos 11 e 12 da pauta geo: o Overpass respondeu 502/504 e o ScienceBase pediu verificação de robô |  | **nada a checar** | — | relato de processo, sem afirmação que vá à tela |  |
| VP-A-303 | camadas do OSM | crédito | As camadas do OSM exigem '© OpenStreetMap contributors' na tela (já no crédito da base MapTiler) e openstreetmap.org/copyright na descrição | © MapTiler © OpenStreetMap contributors | **confirmada** | licença ODbL 1.0 do OSM (openstreetmap.org/copyright); CLAUDE.md, item 6 das peças da pré-v1 |  |  |
| VP-A-304 | camadas do Census e do GNIS | crédito | TIGER/Line, Cartographic Boundary e GNIS são domínio público, sem crédito obrigatório na tela | (sem crédito de geometria) | **confirmada** | 17 U.S.C. §105 (obra do governo federal); os _dados citam o pedido do Census de 'Source: U.S. Census Bureau', que vai no crédito do DADO, não da geometria |  |  |
| VP-A-305 | costa-do-plano-1986 | crédito | A zona costeira da NOAA (CZMA Boundary, InPort 53132) é CC0 1.0 no catálogo federal, e a NOAA avisa 'This boundary is unofficial' | (sem crédito na tela; na descrição, se quiser, 'Coastal zone: NOAA Office for Coastal Management') | **confirmada** | catalog.data.gov/dataset/coastal-zone-management-act-boundary (WebFetch 05/11/2026): License https://creativecommons.org/publicdomain/zero/1.0/; Access Level public; Publisher Office for Coastal Management; 'This boundary is unofficial.' |  |  |
| VP-A-306 | camadas do PAD-US | crédito | PAD-US 4.1: domínio público, e a citação da descrição é 'U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2024, … PAD-US 4.1, https://doi.org/10.5066/P96WBCHS' | (sem crédito na tela; citação na descrição) | **corrigir** | o próprio serviço (Manager_Name_PADUS/FeatureServer/0?f=pjson, WebFetch 05/11/2026), copyrightText: 'U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2025, Protected Areas Database of the United States (PAD-US) 4.1: U.S. Geological Survey data release, https://doi.org/10.5066/P96WBCHS'; histórico: 'Revised - March 2025 (Version 4.1)' | CONSERTO: Na descrição: 'U.S. Geological Survey (USGS) Gap Analysis Project (GAP), 2025, Protected Areas Database of the United States (PAD-US) 4.1: U.S. Geological Survey data release, https://doi.org/10.5066/P96WBCHS' · LEVE, só a descrição. A frase 'This content describes the PAD-US dataset which is in the public domain' não está no JSON da camada (talvez na página do item, não lida); o domínio público vale de todo modo pela autoria federal do USGS (17 U.S.C. §105). |  |
| VP-A-307 | s52 (nota 9) | pessoa | A grafia KIRK GAFILL | KIRK GAFILL | **confirmada** | Caltrans 15/05/2026 (cópia local): 'said Kirk Gafill, owner of Nepenthe restaurant in Big Sur' — v_citacoes.log | R180 do laudo do roteiro. |  |
| VP-A-308 | s52 (nota 9) | pessoa | O cargo para o card: Owner, Nepenthe | Owner, Nepenthe | **confirmada** | Caltrans 15/05/2026 (cópia local), literal 'owner of Nepenthe restaurant in Big Sur'; de apoio, uma página derivada da Wikipedia (cavac.at, verbete Nepenthe) diz que o restaurante é 'owned and operated by the grandson of the founders, Kirk Gafill' | A tela pode usar 'OWNER, NEPENTHE', datado pelo crédito 'CALTRANS, MAY 15, 2026'. VOLÁTIL fraco: muda só se o restaurante mudar de dono. |  |
| VP-A-309 | s52 (nota 9) | pessoa | Reportagens antigas o chamam de 'general manager' do Nepenthe e de presidente da Big Sur Chamber of Commerce |  | **nao_conferida** | só resumos de busca; nenhuma reportagem lida na origem (nem pela pesquisa, nem por mim); a página da Chamber recusou robô à pesquisa (HTTP 403, ALTCHA) | Não vai à tela, e não precisa: o card usa o cargo da fonte do fato. |  |
| VP-A-310 | s38 (nota 9) | pessoa | A grafia JOHN PFEIFFER | JOHN PFEIFFER | **confirmada** | plano P [1235]: 'initiated by John Pfeiffer in 1934' — v_citacoes.log |  |  |
| VP-A-311 | s38 (nota 9) | pessoa | O ano da venda de Pfeiffer ao Estado: 1934 (plano) contra 1933 (Wikipedia) | 1934 | **nao_conferida** | plano P [1235] (1934); folheto da California State Parks, '© 2013 California State Parks (Rev. 2015)', numa cópia em icoat.de/pocketmaps (1933); Wikipedia (1933, citando Heid 2013, guia de trilhas). parks.ca.gov: ECONNREFUSED duas vezes (05/11/2026) | O dono do parque (State Parks) e a Wikipedia dizem 1933; o plano do condado diz 1934. Sem escritura, nenhum lado fica provado, e a voz diz 'In 1934' (ver PARA A SALA). Pode ser o acordo num ano e a escritura no outro: não lido. |  |
| VP-A-312 | s38 (nota 9) | pessoa | A área vendida: 706 acres (plano) contra 700 (Wikipedia) e 680 (folheto da State Parks) | 706 ACRES | **corrigir** | as mesmas três | CONSERTO: A tela sem área (a voz não a diz): '1934 · SOLD TO THE STATE · MONTEREY COUNTY PLAN (1986)'. Se a área ficar, 'PER THE 1986 PLAN' na própria pílula. · MÉDIO. |  |
| VP-A-313 | — | pessoa | Colin Trohig, 'General Manager of the Big Sur River Inn', na mesma nota da Caltrans; não vai à tela |  | **confirmada** | Caltrans 15/05/2026 (cópia local): 'said Colin Trohig, General Manager of the Big Sur River Inn' — v_citacoes.log | Fora da tela. |  |
| VP-A-314 | s31 | pessoa | Charlie Bixby, nomeado pela voz, sem retrato no Commons |  | **nada a checar** | — | O nome já está confirmado no laudo do roteiro (P [1203]); a falta de retrato não é afirmação de tela. |  |
| VP-A-315 | s06 s07 s13 … s59 | nome | Monterey County: o plano se intitula 'Monterey County, California Big Sur Coast land use plan local coastal program' (1986) | MONTEREY COUNTY PLAN (1986) | **confirmada** | cópia do govinfo: 'Big Sur Coast land use plan local coastal program', 'BIG SUR COAST LAND USE PLAN' |  |  |
| VP-A-316 | s03 s11 s13 s14 s15 s26 s55 s56 s60 | nome | United States Census Bureau ('the U.S. Census Bureau' no corpo) | Census Bureau / 2020 CENSUS | **confirmada** | glossário do Census (cópia local): 'United States Census Bureau' |  |  |
| VP-A-317 | s56 | nome | American Community Survey (ACS), do Census Bureau, 'an ongoing survey that provides vital information on a yearly basis' | ACS 2020–2024 | **confirmada** | census.gov/acs/about (cópia local) — v_citacoes.log |  |  |
| VP-A-318 | s24 | nome | U.S. Forest Service (plano); 'the Forest Service', sob o Secretary of Agriculture (16 U.S.C. cap. 23) | U.S. FOREST SERVICE | **confirmada** | plano (cópia local); 16 U.S.C. cap. 23 (cópia local): 'the Forest Service', 'Secretary of Agriculture' |  |  |
| VP-A-319 | s27 (voz) | nome | U.S. Geological Survey (USGS) |  | **confirmada** | título da página da notícia: '… / U.S. Geological Survey' (cópia local) |  |  |
| VP-A-320 | s28 s50 s51 s52 s54 s57 | nome | California Department of Transportation (Caltrans); 'Caltrans District 5', 'Caltrans Central Coast (District 5)' | CALTRANS | **confirmada** | plano: 'California Department of Transportation'; nota de 14/01/2026: 'Caltrans District 5', 'Caltrans Central Coast (District 5)' (cópias locais) |  |  |
| VP-A-321 | s34 s36 | nome | Federal Highway Administration (FHWA), do U.S. Department of Transportation | FHWA | **confirmada** | cabeçalho da página da FHWA (cópia local): 'U.S. Department of Transportation Federal Highway Administration' |  |  |
| VP-A-322 | s53 | nome | CAL FIRE, como o órgão se escreve na página do incidente; a página diz 'Not a CAL FIRE Incident' e 'Agency Having Jurisdiction: Los Padres National Forest' | CAL FIRE | **confirmada** | CALFIRE (WebFetch 05/11/2026 03:23 BRT): 'Not a CAL FIRE Incident. Updates will be made as they become available.'; 'Agency having jurisdiction: Los Padres National Forest' | Base da forma de crédito da s53 (nota 12). |  |
| VP-A-323 | s36 | nome | San Quentin Prison (a grafia da FHWA); a voz diz 'San Quentin, a California state prison' | SAN QUENTIN | **confirmada** | FHWA (cópia local) — v_citacoes.log |  |  |
| VP-A-324 | s25 s38 | nome | California Department of Parks and Recreation (no plano também 'the State Department of Parks and Recreation' e 'California State Parks') | STATE PARKS | **confirmada** | plano (cópia local), grep: 'California Department of Parks and Recreation' |  |  |
| VP-A-325 | s21 | nome | Hunter-Liggett Military Reservation (plano, 1986); Fort Hunter Liggett (FHWA, sem data lida; e o Unit_Nm do PAD-US) | HUNTER LIGGETT | **confirmada** | plano P [1293] e FHWA ('San Antonio de Padua Mission is located at Fort Hunter Liggett'), cópias locais — v_citacoes.log |  |  |
| VP-A-326 | s52 | nome | Nepenthe restaurant (Caltrans, 2026); 'Nepenthe Restaurant' no plano de 1986 | NEPENTHE | **confirmada** | Caltrans 15/05/2026 e plano (cópias locais) — v_citacoes.log |  |  |
| VP-A-327 | s34 s36 | linha que explica | Federal Highway Administration — part of the U.S. Department of Transportation | Federal Highway Administration — part of the U.S. Department of Transportation | **confirmada** | cabeçalho da página da FHWA (cópia local) | Opcional ao redator. |  |
| VP-A-328 | s21 | linha que explica | HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN | HUNTER-LIGGETT MILITARY RESERVATION · 1986 PLAN | **confirmada** | plano P [1293], literal: 'crossing the Hunter-Liggett Military Reservation' | É também o conserto do rótulo 'HUNTER LIGGETT · 1986' da camada. |  |
| VP-A-329 | s56 | linha que explica | American Community Survey — the Census Bureau's ongoing survey | American Community Survey — the Census Bureau's ongoing survey | **confirmada** | census.gov/acs/about (cópia local): 'an ongoing survey' | Dispensável (a voz já diz). |  |
| VP-A-330 | s04 s16 s56 s58 | nome | Wyoming, Alasca e Califórnia só com o nome escrito, sem bandeira | WYOMING · ALASKA · CALIFORNIA | **nada a checar** | — | regra de marca, não fato |  |
| VP-A-331 | s02 s60 | nota | Nunca 'the two largest': em 2025, Riverside-San Bernardino-Ontario (4.769.007) passa San Francisco-Oakland-Fremont (4.630.041) |  | **confirmada** | cbsa-est2025-alldata.csv — v_censo.log | Regra para o redator: nenhuma tela diz que são as duas maiores. |  |
| VP-A-332 | s13 | nota | Nenhum lugar (SUMLEV 160, que inclui os CDPs) tem 'Big Sur' no nome no PL de 2020; o distrito é 'Big Sur CCD' |  | **confirmada** | PL 94-171, geo da Califórnia: 0 lugares — v_censo.log |  |  |
| VP-A-333 | s13 | nota | As CCDs 'have no legal function and are not governmental units' |  | **confirmada** | glossário do Census (cópia local): 'CCDs have no legal function and are not governmental units' | Sustenta a legenda de s13 ('a statistical area with no government of its own'). |  |
| VP-A-334 | s16 | nota | Só o Alasca (1.3) fica abaixo do Wyoming (5.9); depois vêm Montana 7.4 e as Dakotas (11.3, 11.7); a Califórnia é o estado mais populoso |  | **confirmada** | apportionment.csv 2020 — v_censo.log; tabela-densidade-estados-2020.csv (Califórnia 39.538.223, a maior) | Igual a R036/R037 do laudo do roteiro, agora com a contagem do censo. |  |
| VP-A-335 | s41 | nota | O trecho da Highway 1 de Big Sur é a designação nº 1, de 07/06/1965, a única dessa data; a seguinte é de 1968 | FIRST STATE SCENIC HIGHWAY · 1965 | **confirmada** | scenic_highway_data_oct-2025.xlsx: 'SLO CL/Carmel River', data 23900 (= 07/06/1965), nº 1; a seguinte, 22/01/1968 — v_xlsx.py |  |  |
| VP-A-336 | s41 | nota | Os 5 % que sobram do tráfego de verão são de morador, comércio e agricultura |  | **confirmada** | plano P [1301]: 'The remaining 5% consists of residential traffic and a small volume of commercial and agricultural traffic' |  |  |
| VP-A-337 | s34 | nota | O 1921 da FHWA é o ano em que os eleitores aprovaram verba, não o começo da obra (1919) |  | **confirmada** | FHWA (cópia local): 'Construction on Highway One began in 1919 … in 1921 voters approved additional state funds' |  |  |
| VP-A-338 | s39 | nota | A FHWA dá outra régua de custo: 'The initial $1.5 million estimate … became $10 million nineteen years later'; fica fora da tela |  | **confirmada** | FHWA (cópia local), literal | Duas réguas (US$ 8 milhões no plano; US$ 10 milhões na FHWA): a tela fica com a do plano, atribuída, como está. |  |
| VP-A-339 | s53 | nota | Nenhuma estrutura destruída na página do CAL FIRE |  | **confirmada** | leituras-sala §1 (Damage Assessment: 661 ameaçadas e 3 bombeiros feridos, sem número de destruídas); a leitura de 05/11 não achou seção de destruídas | A voz não diz 'destroyed' (decisão da Sala). |  |
| VP-A-340 | s56 | nota | O intervalo de 90 % do distrito vai de ~82 % a 100 %: 'nearly all' é a estimativa pontual | CENSUS DISTRICT ≈ 93% (WIDE MARGINS) | **confirmada** | B25004 (cópia local): 265±94 de 285±95 → 93,0 % ± 11,3 — v_censo.log | O '(WIDE MARGINS)' é o que deixa o 93 % honesto. |  |
| VP-A-341 | s53 s54 (nota 4) | nota | Volátil: o Timber Fire continua em 25.352 acres e 97 % de contenção, 'Last Updated 10/20/2026 8:41 PM' |  | **confirmada** | CALFIRE (WebFetch 05/11/2026 03:23 BRT). O InciWeb (inciweb.wildfire.gov/incident-information/calpnf-timber-fire) respondeu 403 ao WebFetch: não serviu de segunda fonte | A página do CAL FIRE abriu ao WebFetch desta vez (na pesquisa de 04/11, o robots.txt dava 403). A Sala relê antes de publicar. |  |
| VP-A-342 | s54 (nota 4) | nota | Volátil: a Highway 1 em Big Sur sem fechamento total, com as três mãos únicas |  | **confirmada** | ROADS (05/11/2026 03:24 BRT; a página diz 'as of Wednesday, November 4th, 2026 at 10:22 PM') | O que zera a frase da voz ('By November 2026, the road was open…'): um fechamento total novo antes de 30/11. O fim das obras não a zera. |  |

NOTA: 8.5/10

VEREDITO: RESSALVA

---

# LOTE B, literal (`out/big-sur/_tmp/vf-bs-B/laudo-pesquisa-B.md`)

COBERTURA: 125 de 125 (lista derivada à mão, por leitura integral de pauta-documentos, conferencia-midia (os 20 aprovados) e pauta-imagens, com as notas 5, 7, 8, 15, 17 e 22 do para-passos; ver abaixo)

# Laudo-delta da pesquisa · lote B · verificador-de-fatos · big-sur (vídeo 5) · screen_text

Tarefa `big-sur-texto-1`, lote B, despachada pelo setor Texto e fatos. Data-base: **05/11/2026**, das 03:41 às 03:58 de Brasília
(as leituras na rede, com a hora, abaixo). Escrito para ser lido sem a conversa que o produziu. Os ids `VP-B-NNN` casam com o
`laudo-pesquisa-B.json` ao lado; os do lote A (`VP-A-NNN`), do laudo do roteiro (`RNNN`) e do verificador do research (`VR-NN`)
vão na coluna de referências.

## A cobertura, e como a lista foi derivada

A lista é FECHADA e foi derivada **à mão, por leitura integral** (o canal não tem extrator para a pesquisa), destas fontes e campos:

1. `out/big-sur/_pesquisa/pauta-documentos.json` e `.md` (13 itens): de cada item, `fonte` (título, autor, datas da folha de
   rosto, data), `licenca` (o texto citado e o `credito_na_tela`), `recriacao.titulo_da_folha` e, de cada trecho, o
   `texto_literal_da_fonte`, o `grifo` e a `voz_do_grifo`; mais as quatro divergências do `.md`. São **39 itens** (VP-B-001 a 039).
2. `out/big-sur/_pesquisa/conferencia-midia.json` (`985816e5…`): os **20 vereditos `aprovado`** (18 arquivos; s14 e s17 são o mesmo
   arquivo, retirado pelo veto; s56 tem dois recortes). De cada um, três linhas: o `lugar_na_origem`, o `data_na_origem` com o
   `aviso_de_ano`, e o `credito_na_tela` (só o que vem antes do parêntese). Mais as afirmações que os vereditos fazem fora desses
   campos (a idade da cabana de s30; o recorte do HABS, declarado fora do escopo). São **59 itens** (VP-B-040 a 098).
3. `out/big-sur/_pesquisa/pauta-imagens.json` e `.md` (32 arquivos): os 14 arquivos sem `aprovado` ganham uma linha cada,
   declarada "nada a checar" (o rótulo deles não existe sem aprovação); a foto da NOAA de s36 ganha as linhas da nota 15; e as
   afirmações de fato das lacunas e dos avisos que podem tocar a tela. São **27 itens** (VP-B-099 a 125).
4. As notas 5, 7, 8, 15, 17 e 22 do `para-passos-seguintes.json` (`1fbaf1b7…`), o `navegador-sala.md` e os VR do
   `verificar-research/laudo.md` (`e116f6d7…`) que tocam afirmação de tela estão DENTRO dos itens acima (cada nota tem a sua linha,
   e o VR vai na referência). A nota 22 (3) é visual e está declarada fora do escopo (VP-B-074).

Limites declarados: as afirmações das pautas que o lote A já julgou (a venda de Pfeiffer na p. 59, os números dos `_dados`, as
pílulas de s36, s50, s51, s53) não ganharam linha nova quando a pesquisa diz a mesma coisa: vão citadas pelo id. Os campos de
processo das pautas (tempos do grifo, sha256, tratamento, caminhos) não são afirmação de tela e não viraram linha. O denominador
pode crescer; não pode encolher.

**COBERTURA: 125 de 125.** CHECADO POR INTEIRO: 97 confirmadas, 8 corrigir, 2 nao_conferida, 18 nada a checar. Nenhum item ficou
sem veredito.

**NOTA: 9.0/10.** A pesquisa deste lote é fiel às fontes: todas as citações de documento conferem letra a letra (o plano pelo OCR
do govinfo, as notas da Caltrans e a página do Census relidas hoje, o questionário pelo texto do PDF), e todo lugar, data e crédito
das 20 aprovações bate com a origem. Os 8 "corrigir" são de rótulo e de campo de veredito, todos periféricos e com conserto pronto:
datas tiradas do nome do arquivo ou do título do envio (s37, s48, a capa de s43), datas que a origem dá e o veredito deixou vazias
(s20, s53), um ponto final que fecha uma citação antes da hora (s39), um aviso de ano proposto para foto do tempo do fato (s36) e o
apoio de três linhas do laudo do roteiro. Nenhum toca a voz. É a primeira nota deste lote.

## Como se verificou (o que foi aberto)

Sem rede, no disco (scripts em `out/big-sur/_tmp/vf-bs-B/`):
- `ocr-achar.py`, `ocr2.py`: as citações do plano de 1986 no OCR do govinfo (`midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm`).
  O PDF escaneado não tem camada de texto (`pdf-texto.py`), e nenhuma imagem foi aberta (teto 0).
- `acs-texto.py`: o texto das 20 páginas do questionário da ACS 2024 (`quest24.pdf`, sha256 `de57122d…`).
- `htm-achar.py`: as cópias locais das notas da Caltrans (14/01 e 15/05/2026), da página About do Census, da FHWA e das
  Conditions of Use.
- `exif.py`: o EXIF das três fotos da Caltrans, por script, sem abrir a imagem.
- `rede/czic-mods.xml` da pesquisa: o registro de catálogo do govinfo.

Na rede (um pedido por vez, nenhum contorno):

| quando (BRT, 05/11/2026) | o quê | resultado |
|---|---|---|
| 03:4x | dot.ca.gov, nota de 17/02/2026 | abriu: 'A 6.8-mile segment of Highway 1 near Regent's Slide remains closed…'; 'no estimated time for a full reopening' |
| 03:4x | dot.ca.gov, notas de 14/01/2026 e 15/05/2026 | abriram: título, data e os trechos citados conferem |
| 03:4x | census.gov, About the ACS | abriu: 'an ongoing survey that provides vital information on a yearly basis' |
| 03:4x | dot.ca.gov, galeria de Regent's Slide | abriu: os alt de `february-10-202403…`, `img_4919` e `img_5061`; nenhum crédito de terceiro; sem datas ao lado das fotos |
| 03:4x | usgs.gov, a aérea de Mud Creek | abriu: 'taken on May 27, 2017'; 'Photographer: USGS'; 'Public Domain.' |
| 03:4x | dvidshub.net, vídeos 1019795 e 1019831 | abriram: PUBLIC DOMAIN, Video by Andrew Avitt, Forest Service, sem 'Courtesy'; Date taken 08.15.2026 e 08.13.2026 |
| 03:47 | API do Commons (um pedido, 12 títulos, User-Agent do canal) | descrição, data, autor e licença das 11 fotos aprovadas do Commons e da foto da NOAA de s36 |
| 03:48 | API do Commons (um pedido) | 'Big Sur Pauls Curve Slide May 2017.jpg': sha1 igual ao da aérea do USGS de s26 |
| 03:4x | noaa.gov/media/49652 | **405**: parei, sem segunda tentativa |
| 03:4x | en.wikipedia.org (Big Sur Coast Highway; Bixby Bridge); cambriahistoricalsociety.com | as frases sobre os presos e as datas da ponte |
| 03:4x | govinfo.gov/about/policies | abriu: 'However, Government publications may contain copyrighted material…' |
| 03:5x | dot.ca.gov/conditions-of-use | abriu: o OWNERSHIP e 'dated July 19, 2021' |
| 03:4x | WebSearch (presos de San Quentin e Folsom; datas da ponte de Bixby; a cabana de Pfeiffer) | ver as linhas da tabela |

Nenhum crédito gasto, nenhuma imagem aberta, nada do navegador.


## Os achados acionáveis

Nenhum GRAVE. Nenhuma REFUTADA. Nenhum DIVERGE em afirmação de tese. Nenhum achado toca a voz.

**MÉDIO**
1. **s37 · o ano da foto da ponte em obra (VP-B-082; VR-08; nota 22 (1)).** O veredito dá `data_na_origem` '1932 (no título do
   arquivo)'. A legenda da NOAA não tem ano; o '1932' é do título que o uploader deu em 2011. A obra foi de 24/08/1931 a
   15/10/1932 (VP-B-120). → CONSERTO: `data_na_origem`: 'sem ano na legenda da NOAA; 1932 só no título do envio; a obra,
   1931–1932'; se a tela quiser um ano, `BIXBY CREEK BRIDGE UNDER CONSTRUCTION, 1931–32`; tirar o `Photo from 1932` proposto da
   pauta-imagens e da procedência (o `aviso_de_ano` false do veredito está certo). → RAIZ: INSTRUÇÃO.
2. **s48 · a data da aérea de Regent's Slide (VP-B-085; VR-09; nota 22 (2)).** O veredito data a foto pelo nome do arquivo
   (`february-10-2024`) e o motivo diz 'no dia seguinte ao deslizamento'. O EXIF dá 12/02/2024, 13:43:28; o deslizamento foi em
   09/02/2024 (VP-A-190). → CONSERTO: `data_na_origem`: 'EXIF 2024-02-12 13:43; o nome do arquivo diz february-10-2024'; tirar
   'no dia seguinte' do motivo; rótulo de data, se houver, `FEB 2024`. → RAIZ: INSTRUÇÃO.
3. **s43 · o 1986 da capa (VP-B-009, VP-B-010, VP-B-125; nota 5).** A capa recriada não leva ano: o '1986' que o `needs.dados`
   juntou ao título é a cota do acervo (o próprio ID do pacote do govinfo é a cota). O mesmo engano está no APOIO das linhas R008,
   R137 e R138 do laudo do roteiro, que citam a 'capa'. A voz continua confirmada pela folha de rosto. → CONSERTO: capa
   `BIG SUR COAST LAND USE PLAN · LOCAL COASTAL PROGRAM · MONTEREY COUNTY, CALIFORNIA`, sem ano; o ano no crédito, na pílula
   `1986` e na linha da certificação sem o dia; nas R008, R137 e R138, o apoio passa à folha de rosto (PDF p. 3) e ao crédito da
   foto da capa ('Hurricane Point, 1986'). → RAIZ: PONTUAL.

**LEVE**
4. s39 P2 · a citação fechada antes da hora (VP-B-008): entre aspas, `'A way of life had ended, and a new era began for the
   beautiful country.'` ou `'…a way of life had ended, and a new era began…'`, nunca com ponto depois de 'began'. → PONTUAL.
5. s20 e s53 · a data que a origem dá e o veredito deixou vazia (VP-B-059, VP-B-094): `data_na_origem` '2026-08-15 (Date taken,
   DVIDS)' e '2026-08-13 (Date taken, DVIDS)'; `aviso_de_ano` false nos dois. → INSTRUÇÃO.
6. s36 P1 · o aviso de ano proposto para a foto do acampamento (VP-B-116): a foto é do tempo da obra (1919–1937); se voltar,
   `aviso_de_ano` false, como em s37. → PONTUAL.
7. s12 · o lugar truncado (VP-B-046): a origem continua 'about one mile north of Ragged Point, near the southern end of the Big
   Sur region' (fora do distrito). Completar o campo; rótulo, se houver, `HIGHWAY 1, BIG SUR`. → PONTUAL.
8. s30 · a idade da cabana (VP-B-070): 'built in the late 1800s' só tem o uploader do Commons como fonte; a tela não data a cabana.
   → PONTUAL.
9. s43 · o dia da certificação (VP-B-012): fica fora da tela; na folha recriada, `April […], 1986`. → PONTUAL.


## As respostas às notas do para-passos (5, 7, 8, 15, 17 e 22)

**5 · s43 P1, o ano do plano.** CONFIRMADA a voz 'took final form in 1986' (R137, VP-A-164): a folha de rosto diz 'Certification
Acknowledged by the California Coastal Commission on April [10, riscado, 9], 1986' (o OCR lê 'April I-Cr, 1986'), e a capa traz
'Cover Photograph: Hurricane Point, 1986'. O rótulo de ano que a tela pode usar é **1986**, em três lugares: a pílula da linha do
tempo de s43; o crédito `Source: Monterey County, Big Sur Coast Land Use Plan, 1986`; e, se a linha da certificação for à folha de
rosto recriada, `April […], 1986`, sem o dia (VP-B-011 a VP-B-013). Não pode: dentro do título recriado da capa (VP-B-010), nem
`APRIL 10` ou `APRIL 9`. O registro do govinfo ('April 1981') é de outra versão e não data o plano (VP-B-016).

**7 · s51 P2, 'expect' contra 'may encounter'.** CONFIRMADA a paráfrase (VP-B-025; R179): 'warned drivers to expect occasional
full closures' endurece de leve o 'may encounter', e o 'occasional' segura o tom; o fechamento total de 6,8 milhas em fevereiro
mostra que o aviso se cumpriu. Não é divergência para regravar. O grifo PODE marcar `may encounter` · `occasional full closures` ·
`while crews remove debris`, sempre com o 'may'. Nenhuma tela põe 'expect' entre aspas.

**8 · s56 P2, 'ongoing' e 'year after year'.** CONFIRMADO: as duas palavras não estão no questionário (zero ocorrências nas 20
páginas; VP-B-033), e estão na página About do Census, relida hoje (VP-B-034; R206). A tela NÃO pode grifá-las sobre o
questionário: sobre ele, o grifo marca só 'The American Community Survey is conducted by the U.S. Census Bureau.' (VP-B-032), com
'The Census Bureau also runs'. Se quiser 'ongoing' na tela, é texto recriado da página About, com a fonte (census.gov).

**15 · s36, San Quentin e Folsom.** A voz 'San Quentin, a California state prison, set up three temporary camps along the route'
fica CONFIRMADA pela fonte dela, a FHWA ('San Quentin Prison set up three temporary prison camps…'; R118, VP-A-136), repetida pela
Cambria Historical Society (VP-B-114). A legenda da NOAA ('Convicts from Folsom Prison were used to build Highway 1…', lida no
Commons; a página da NOAA deu 405) diz outra coisa, de onde vinham os presos daquele acampamento, e não refuta a voz: presos de mais
de uma prisão são compatíveis com os três acampamentos montados por San Quentin. O rótulo possível sobre a foto, se ela voltar:
`CONVICT CAMP ON HIGHWAY 1 · 1930s`, sem nome de prisão; a pílula do lote A (San Quentin, FHWA) não fica sobre ela (VP-B-115).

**17 · s51, o fechamento depois de janeiro.** CONFIRMADO, lido por mim em 05/11/2026, 03:4x de Brasília, na própria Caltrans
(https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-2-17-2026): 'A 6.8-mile segment of Highway 1 near Regent's Slide
remains closed due to ongoing debris cleanup', 'closed from two miles north of Lucia, to one mile south of the Esalen Institute',
'no estimated time for a full reopening' (VP-B-026). Nenhuma tela pode dizer ou sugerir que a estrada ficou aberta sem interrupção
desde janeiro. A situação de hoje é a leitura do lote A (03:24, VP-A-280).


**22 · s37, s48, s50, s30, s20, s53 e os créditos.**
- (1) s37: CORRIGIR o `data_na_origem` (achado 1; VP-B-082). O ano, se for à tela, vem da obra: `1931–32`.
- (2) Caltrans: o EXIF confere com o VR-09. s48: 12/02/2024, 13:43:28 (achado 2; VP-B-085). s50: img_4919 com DateTimeOriginal
  26/01/2026 12:56:58 e img_5061 com 26/01/2026 13:29:23, as duas com edição em 15/01/2026, antes da captura: o relógio da câmera
  está errado e o EXIF não data a foto (VP-B-088, VP-B-091). `REOPENED JAN 14, 2026 · NOON` vai como fato da reabertura (VP-B-027,
  VP-A-199), nunca como data da foto.
- (3) s30, o recorte do PNG do HABS: visual, fica com o `qc-visual`; fora do meu escopo (VP-B-074).
- (4) s20 e s53: CONFIRMADO o domínio público pela autoria federal, agora também pelo rótulo da própria página do DVIDS ('PUBLIC
  DOMAIN', 'Video by Andrew Avitt', Forest Service, sem 'Courtesy'), o que fecha o VR-14 (VP-B-060, VP-B-095).
- (5) Os créditos sem o parêntese: CONFIRMADOS (VP-B-124): s01 `Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0`; s05 `David
  Iliff / Wikimedia Commons · CC BY-SA 3.0`; s12 `Fred Moore / Wikimedia Commons · CC BY 2.0`; s19 `Natecation / Wikimedia Commons ·
  CC BY-SA 4.0`; s25 `S. Rae / Wikimedia Commons · CC BY 2.0`; s30 e s33 `Marty Aligata / Wikimedia Commons · CC BY-SA 4.0`; s35
  `Jav72 / Wikimedia Commons · CC BY-SA 4.0`; s48 e s50 `Caltrans`; nada na tela em s14, s17, s20, s26, s30 (HABS), s37, s53 e s56.

Dos itens que não são meus: o 19 (a leitura das Conditions of Use) está confirmado no texto relido hoje e na galeria (VP-B-037,
VP-B-123), com a ressalva do VR-04; o 21 (o link da licença na descrição) vale para os créditos acima; o 27 (VC-11) está nas linhas
de s50 P2 e s30 P3 (VP-B-071, VP-B-087).

## Os voláteis do lote B (a Sala relê antes de publicar)

| volátil | lido em (BRT) | o que diz hoje | o que o faz mudar | o que o zera |
|---|---|---|---|---|
| A Highway 1 junto de Regent's Slide depois de janeiro (s51; VP-B-026) | 05/11/2026 03:4x, nota da Caltrans de 17/02/2026 | o fechamento de 6,8 mi em fevereiro, sem previsão de reabertura naquela data | — (é fato datado) | nada: a nota é de 17/02/2026; a estrada de hoje é a do lote A (03:24, VP-A-280) |
| A galeria de Regent's Slide: os alt e a falta de crédito de terceiro (s48, s50; VP-B-084 a VP-B-092, VP-B-123) | 05/11/2026 03:4x | os três alt copiados; nenhum crédito de fotógrafo | a Caltrans pôr crédito de terceiro numa foto | um crédito de terceiro tira a foto da regra geral das Conditions of Use |
| As Conditions of Use da Caltrans (VP-B-037) | 05/11/2026 03:5x | 'dated July 19, 2021'; o OWNERSHIP igual ao de 04/11 | 'subject to change without notice' | uma versão nova que tire o domínio público |
| A Highway 1 de hoje, a contenção do Timber Fire, o cargo de Gafill | lote A (03:23–03:24) | ver o laudo do lote A | — | — |

## PARA A SALA

**NÃO CONFERIDOS, com a URL**
- **O dia da certificação do plano** (VP-B-012): '10' riscado e '9' escrito, segundo a pauta, que olhou a imagem; o OCR lê
  'I-Cr'. Eu não abri a imagem (teto 0). A página é a PDF p. 3 de
  https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/pdf/CZIC-hd211-c2-m67-1986.pdf. Não faz falta: a recomendação é não
  levar o dia à tela.
- **A idade da cabana de Pfeiffer** (VP-B-070): 'built in the late 1800s' é do uploader do Commons; resumos de busca dão 1884. A
  fonte do dono, o folheto da California State Parks, recusou a conexão ao lote A (ECONNREFUSED):
  https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf. Não faz falta: a tela não data a cabana.
- **A legenda da foto do acampamento na própria NOAA** (VP-B-113): https://noaa.gov/media/49652 respondeu **405** ao WebFetch;
  parei. A legenda vale como o Commons a reproduz. A foto está `trocar`.

**A voz que diverge (não se mexe; regravar é decisão do Lucas)**
- **Nenhuma divergência da voz contra a fonte dela neste lote.** Duas notas para o Lucas saber, sem pedido de regravação:
  - p27, 'it warned drivers to expect occasional full closures': a nota diz 'may encounter'. Paráfrase fiel (VP-B-025).
  - p18, 'San Quentin, a California state prison, set up three temporary camps along the route': confirmada pela FHWA; a legenda
    de uma foto da NOAA dos anos 1930 fala em presos de Folsom (VP-B-114). Não é refutação. Se o Lucas um dia quiser uma frase que
    sirva às duas fontes: **"California sent state prisoners to three temporary camps along the route."** Não recomendo regravar
    por isso.

**Para o conferente-de-midia e a pesquisa (pela Sala), com dono**
- s20 e s53: preencher `data_na_origem` (VP-B-059, VP-B-094). s37: reescrever `data_na_origem` e tirar o `Photo from 1932`
  proposto (VP-B-082). s48: `data_na_origem` pelo EXIF e o motivo sem 'no dia seguinte' (VP-B-085). s12: completar o
  `lugar_na_origem` (VP-B-046). s36: o aviso de ano proposto sai, se a foto voltar (VP-B-116).

**Para o redator-de-tela e o editor-de-arte, com dono**
- s39: a citação inteira ou o corte marcado (VP-B-008). s43: a capa sem ano e o dia fora (VP-B-010, VP-B-012). s51: o grifo com o
  'may' (VP-B-025). s56: nada de 'ongoing' grifado sobre o questionário (VP-B-033). s36: sem nome de prisão sobre a foto da NOAA
  (VP-B-115). s30: a cabana sem ano de construção (VP-B-070); os fornos sem 'Limekiln State Park' (VP-B-071). s50 P2: `HIGHWAY 1,
  BIG SUR` (VP-B-087).

**Para o setor, no laudo do roteiro**
- As linhas R008, R137 e R138 citam a 'capa' como apoio do 1986 e das datas; o apoio é a folha de rosto (VP-B-125). A voz não muda.

**O que depende do Lucas**
- A exceção para a aérea de Carmel (s14, s17), se a Sala a levar: os campos dela conferem (VP-B-049 a VP-B-054), e o VR-02 diz o
  que vai junto.
- Onde gravar os laudos de fatos (DECISÃO DO LUCAS PENDENTE, da roupa): este vai onde a tarefa mandou, `out/big-sur/_tmp/vf-bs-B/`.


## A lista de nomes

A pesquisa do lote B não tem fonte anônima ("analistas", "um pesquisador"). Os nomes que vão ao crédito ou à folha, com a
credencial que a fonte dá:
- **Floyd Risvold**, United States Coast & Geodetic Survey: autor das fotos da NOAA de s37 e s36 (Commons, {{PD-USGov-NOAA}};
  https://commons.wikimedia.org/wiki/File:Bixby_Creek_Bridge_1932..jpg). Não vai ao crédito (domínio público federal).
- **Andrew Avitt**, Forest Service: autor dos vídeos de s20 e s53 (https://www.dvidshub.net/video/1019795,
  https://www.dvidshub.net/video/1019831). Não vai ao crédito.
- **James W. Rosenthal**: autor da foto do HABS de s30 (HABS CA-2734-10). Não vai ao crédito.
- **Kirk Gafill**, 'owner of Nepenthe restaurant in Big Sur' (Caltrans, 15/05/2026): já no lote A (VP-A-209).
- **Steve A. Early**: a foto da capa do plano ('Hurricane Point, 1986'); não vai à tela (sem permissão).
- Os autores do Commons que vão ao crédito, pelo nome que a página dá: Mavic of Steel, David Iliff (a página pede 'DAVID ILIFF'),
  Fred Moore, Natecation, S. Rae, Marty Aligata, Jav72.

## Os 2 padrões mais vistos

1. **A data que mora no nome do arquivo ou no título do envio vira data da foto** (s37 '1932', s48 'february-10-2024', o '1986'
   da cota na capa de s43). O nome de arquivo e o título que um uploader dá não são a origem: a data sai do que a origem afirma (a
   legenda, o campo de data, o EXIF lido) ou fica sem data.
2. **O campo do veredito vazio ou cortado quando a origem diz mais** (s20 e s53 sem data, com 'Date taken' na página; s12 sem
   'about one mile north of Ragged Point'). O redator escreve o rótulo dentro do teto que o veredito dá; um teto vazio ou cortado
   esconde o que a origem já resolvia.

## Respostas de seção (os três sentidos do "nada")

- **CHECADO E LIMPO:** as citações e títulos de documento (menos os 2 "corrigir" de forma de tela e o dia da certificação); os
  lugares e os créditos das 20 aprovações; as datas e os avisos das aprovações, menos os de s20, s37, s48 e s53.
- **NADA A CHECAR (18, declarados):** os 14 arquivos da pauta de imagens sem `aprovado`; o recorte do HABS (visual, do
  `qc-visual`); o lugar e a data dos dois recortes da ACS (documento); a licença de Leipelt (não é tela, e a foto está retirada);
  o que a nota de 15/05 deixa fora da folha.
- **NÃO FOI CHECADO:** nada ficou sem veredito. Os 2 "nao_conferida" têm veredito, com o motivo e a URL.


## A TABELA (uma linha por item da lista)

Contagem: confirmada 97, corrigir 8, nao_conferida 2, nada a checar 18. Na coluna de referências: as linhas do laudo do roteiro (RNNN) que dizem a mesma coisa, os itens do lote A (VP-A-NNN) e os achados do verificador do research (VR-NN) e da direção (VC-NN).

| id | cena | classe | afirmação | forma de tela | veredito | fonte aberta | conserto / nota | referências |
|---|---|---|---|---|---|---|---|---|
| VP-B-001 | s06 P1 | citação | 'The climate in Big Sur is mild.' (p. 2 impressa, PDF p. 7, 1º parágrafo, 1ª frase) | grifo na folha recriada ('mild' ou a frase) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Letra a letra no OCR. | R010, VP-A-018 |
| VP-B-002 | s06 P1 | citação | 'Although the winters bring some of the heaviest rainfall in California, the summers are long and dry.' (a frase seguinte, se for à folha sem grifo) | texto da folha, sem grifo | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) |  | R007 |
| VP-B-003 | s06 s39 s43 s45 | título | O título do plano: capa 'BIG SUR COAST / LAND USE PLAN / LOCAL COASTAL PROGRAM / MONTEREY COUNTY, CALIFORNIA'; folha de rosto 'MONTEREY COUNTY, CALIFORNIA / BIG SUR COAST LAND USE PLAN / LOCAL COASTAL PROGRAM' | BIG SUR COAST LAND USE PLAN · LOCAL COASTAL PROGRAM · MONTEREY COUNTY, CALIFORNIA | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | O OCR lê 'BIG SURCOAST' (sem espaço), defeito de leitura. | VP-A-018 |
| VP-B-004 | s06 s17 s19 s39 s43 s45 | crédito | A autoria do condado ('Prepared by the Monterey County Planning Department', folha de rosto) e o crédito | Source: Monterey County, Big Sur Coast Land Use Plan, 1986 | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm); o ano: VP-B-011 e VP-B-017 | Vale só o que vem antes do parêntese '(a forma do espelho; a decisão é do redator)'. | VP-A-019, VP-A-067, VP-A-074, VP-A-142, VP-A-150, VP-A-166, VP-A-174 |
| VP-B-005 | s39 P1 | citação | 'On June 27,1937, the highway was completed at a cost of approximately $8,000,000.' (p. 59, 5º parágrafo; sem espaço depois da vírgula na fonte) | grifo 'at a cost of approximately $8,000,000' com 'cost at about eight million dollars,' | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Se o redator não quiser a falha tipográfica '27,1937', a folha começa em 'the highway was completed…'; nunca se corrige a fonte dentro das aspas. | R127, VP-A-152 |
| VP-B-006 | s39 P1 | forma de tela | ≈ $8 MILLION, atribuído ao plano | ≈ $8 MILLION · MONTEREY COUNTY PLAN (1986) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Dinheiro nominal de 1937. | VP-A-149, VP-A-151 |
| VP-B-007 | s39 P2 | citação | 'A way of life had ended, and a new era began for the beautiful country.' (p. 59, 5º parágrafo, última frase) | grifo em 'A way of life had ended,' + 'and a new era began' | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | O OCR lê 'began for. the beautiful' com um ponto a mais, que a pauta diz não estar na imagem. Não abri a imagem (teto 0): a frase sem o ponto é a leitura da pauta, coerente com o OCR menos o ponto solto. | R128 |
| VP-B-008 | s39 P2 | forma de tela | 'A way of life had ended, and a new era began.' com ponto final, como se a frase acabasse ali | etiqueta ou folha entre aspas | **corrigir** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | CONSERTO: Na folha ou em qualquer etiqueta entre aspas: 'A way of life had ended, and a new era began for the beautiful country.' ou o corte marcado: '…a way of life had ended, and a new era began…'. A voz pode encurtar (sem aspas na fala). O ponto final depois de 'began' entre aspas afirma um texto que a fonte não tem. | R128 |
| VP-B-009 | s43 P1 | documento | A capa impressa pelo condado não tem ano: o '1986' junto do título é a etiqueta de catálogo do acervo ('HD 211 .C2 M67 1986') | folha recriada da capa sem ano | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm); o ID do pacote do govinfo, CZIC-hd211-c2-m67-1986, é essa cota | No OCR, 'HD / 211 / -c2 / M67 / 1986' é um bloco à parte, à esquerda; o título vem à direita. Não vi a imagem. |  |
| VP-B-010 | s43 P1 | forma de tela | 'LOCAL COASTAL PROGRAM 1986 MONTEREY COUNTY, CALIFORNIA' como texto da capa | capa recriada com 1986 | **corrigir** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | CONSERTO: Capa recriada: 'BIG SUR COAST LAND USE PLAN · LOCAL COASTAL PROGRAM · MONTEREY COUNTY, CALIFORNIA', sem ano. O ano vai no crédito, na pílula da linha do tempo e na linha da certificação (VP-B-013). | R008 |
| VP-B-011 | s43 P1 | data de documento | 'Certification Acknowledged by the California Coastal Commission on April [dia], 1986': o mês e o ano | APRIL 1986 | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) (lê 'April I-Cr, 1986') | O OCR confirma 'April' e '1986'; o dia sai ilegível ('I-Cr'), o que casa com a correção à mão que a pauta descreve. | R137 |
| VP-B-012 | s43 P1 | data de documento | O dia da certificação: '10' riscado à mão e '9' escrito embaixo | (o dia não vai à tela) | **nao_conferida** | a pauta (olhado na imagem); o OCR dá 'I-Cr'; eu não abri a imagem (teto 0) | CONSERTO: Se a linha for à folha recriada: 'Certification Acknowledged by the California Coastal Commission on April […], 1986', com o dia omitido e marcado; ou a linha fica fora e o ano vai no crédito. Nunca APRIL 10 nem APRIL 9. |  |
| VP-B-013 | s43 P1 | nota 5 | A voz 'The county's answer took final form in 1986' e o rótulo de ano que a tela pode usar | 1986 (pílula da linha do tempo); 'Source: Monterey County, Big Sur Coast Land Use Plan, 1986' (crédito); 'April […], 1986' na linha da certificação, se ela for à folha | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm); o crédito da foto da capa 'Hurricane Point, 1986, Steve A. Early' (VP-B-017) data a edição | Onde o ano pode ir: (1) a pílula 1986 da linha do tempo; (2) o crédito; (3) a linha da certificação na folha de rosto recriada, sem o dia. Onde não pode: dentro do título recriado da capa. 'Final form' é a certificação; a adoção pelo condado é de 05/11/1985 (VP-B-014), e não há contradição. | R137, VP-A-164 |
| VP-B-014 | s43 | data de documento | 'Adopted by the Monterey County Board of Supervisors 11/5/85' = 5 de novembro de 1985 (data americana) | NOV 5, 1985 (se for à tela) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Leitura americana mês/dia: nunca MAY 11, 1985. | R138 |
| VP-B-015 | s43 | data de documento | 'Adopted by the Monterey County Planning Commission 2/11/81' = 11 de fevereiro de 1981 | FEB 11, 1981 (se for à tela) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Fora da voz. Nunca NOV 2, 1981. |  |
| VP-B-016 | s43 | data de documento | O registro de catálogo do govinfo diz 1981, 'April 1981.', '96 p., [9] leaves': é de uma versão anterior, e não data o escaneado (152 páginas) | (não vai à tela) | **confirmada** | out/big-sur/_tmp/pesquisa-documentos/rede/czic-mods.xml (dateIssued 1981; note 'April 1981.'; extent '96 p., [9] leaves'); o PDF local tem 152 páginas | Nenhuma tela usa 1981 como data do plano. |  |
| VP-B-017 | s43 | documento | 'Cover Photograph: Hurricane Point, 1986, Steve A. Early' (foto de terceiro, sem permissão) | (não vai à tela) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | Confirma também que a edição escaneada é de 1986. |  |
| VP-B-018 | s45 P4 | citação | 'Visibility will be considered in terms of normal, unaided vision in any direction for any amount of time at any season.' (p. 13, §3.2.3 B.1) | grifo palavra a palavra; na folha, a pontuação da fonte (só a vírgula depois de 'normal') | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) |  | R145, VP-A-173 |
| VP-B-019 | s45 P2 | nome de lugar | A definição do critical viewshed (p. 11, §3.2.2, item 1) nomeia 'Soberanes Point, Garrapata Beach, Abalone Cove Vista Point, Bixby Creek Turnout, Hurricane Point Overlook, upper Sycamore Canyon Road (Highway 1 to Pais Road), Pfeiffer Beach/Cooper Beach' | BIXBY CREEK TURNOUT (e os outros nomes na grafia do plano) | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) |  | R144, VP-A-172, VP-A-284 |
| VP-B-020 | s44 | citação | §3.2.1 Key Policy: 'to prohibit all future public or private development visible from Highway 1 and major public viewing areas (the critical viewshed)' | citação na folha, se for | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) |  | R141 |
| VP-B-021 | s43 P2 | citação | 'Approximately half of the Big Sur coastal zone is in public ownership by the U. S. Forest Service, the State Department of Parks and Recreation, the U. S. Navy, the U. S. Coast Guard, and the University of California.' (p. 73) | ≈ HALF THE COASTAL ZONE PUBLIC · 1986 | **confirmada** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | O 60 % da frase seguinte é projeção do plano e fica fora. A camada de hoje sob a pílula: achado 3 do lote A. | R139, VP-A-165, VP-A-167 |
| VP-B-022 | s51 P1 | citação | 'The contractor for this estimated $82.6 million project is Papich Construction of Arroyo Grande, CA, which was recently acquired by Granite Construction Inc.' | $82.6 MILLION (EST.) · CALTRANS | **confirmada** | Caltrans D5, 14/01/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 (relida 05/11 03:4x; cópia local de 02/11) |  | R178, VP-A-206, VP-A-208 |
| VP-B-023 | s51 | documento | Título e data da nota: 'Highway 1 to Reopen Today at Regent's Slide' · 'Published: Jan 14, 2026' · 'Date: January 14, 2026' | cabeçalho da folha recriada; crédito 'Source: Caltrans, 2026' | **confirmada** | Caltrans D5, 14/01/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 (relida 05/11 03:4x; cópia local de 02/11) |  | VP-A-207 |
| VP-B-024 | s51 P2 | citação | 'Over the next months, travelers on Highway 1 at Regent's Slide and other locations may encounter occasional full closures while crews remove debris following seasonal weather events and intermittent delays due to ongoing construction.' | texto da folha | **confirmada** | Caltrans D5, 14/01/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 (relida 05/11 03:4x; cópia local de 02/11) (o WebFetch devolveu o trecho 'may encounter occasional full closures while crews remove debris'; a frase inteira está na cópia local) |  | R179, R018 |
| VP-B-025 | s51 P2 | nota 7 · paráfrase da voz | A voz 'it warned drivers to expect occasional full closures while crews cleared debris', contra a nota 'may encounter occasional full closures while crews remove debris' | grifo: 'may encounter' · 'occasional full closures' · 'while crews remove debris' | **confirmada** | Caltrans D5, 14/01/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 (relida 05/11 03:4x; cópia local de 02/11); a nota de 17/02/2026 (VP-B-026) registra um fechamento total de fato | Paráfrase fiel, com endurecimento leve ('expect' por 'may encounter') que o 'occasional' segura; o fechamento de 6,8 mi em fevereiro aconteceu. Não é divergência para regravar. O grifo pode marcar o trecho, sempre com o 'may'. Nenhuma tela põe 'expect' entre aspas nem escreve 'EXPECT FULL CLOSURES' atribuído à Caltrans. | R179 |
| VP-B-026 | s51 | nota 17 · volátil | Depois da reabertura de 14/01/2026, a Caltrans fechou de novo 6,8 milhas junto de Regent's Slide: 'A 6.8-mile segment of Highway 1 near Regent's Slide remains closed due to ongoing debris cleanup' (17/02/2026), 'at present there is no estimated time for a full reopening' | (nenhuma tela sugere a estrada aberta sem interrupção desde janeiro) | **confirmada** | Caltrans D5, 17/02/2026, 'Highway 1 on Big Sur Coast Remains Closed Near Regent's Slide': https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-2-17-2026 (lida por mim em 05/11/2026, 03:4x BRT) | A nota diz também 'Highway 1 is currently closed from two miles north of Lucia, to one mile south of the Esalen Institute.' e 'The slope above the roadway at Regent's Slide remains stable.' A situação de hoje (aberta, três mãos únicas) é a leitura do lote A às 03:24 (VP-A-280). Nenhuma frase da voz diz que a estrada ficou aberta desde janeiro (p29: 'open from end to end again'). | VP-A-280 |
| VP-B-027 | s50 s51 | data | A reabertura 'starting at noon on Wednesday, January 14, months earlier than the estimated reopening date of March 30' | REOPENED JAN 14, 2026 · NOON | **confirmada** | Caltrans D5, 14/01/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-1-14-26 (relida 05/11 03:4x; cópia local de 02/11) | Fato da nota, nunca data de foto (VP-B-088, VP-B-091). | VP-A-199, VP-A-203, VP-A-204 |
| VP-B-028 | s52 P2 | documento | Título e data: 'Tourism on Big Sur is Surging Since Reopening of Highway 1' · 'Published: May 15, 2026' · 'Date: May 15, 2026' | grifo opcional 'May 15, 2026'; crédito 'Source: Caltrans, May 15, 2026' | **confirmada** | Caltrans D5, 15/05/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 (relida 05/11 03:4x; cópia local de 02/11) |  | R182, R183, VP-A-210, VP-A-211 |
| VP-B-029 | s52 P2 | citação | '“The robust and sustained increase in visitation is allowing our business, employees, and larger community to recover rapidly from the three-year closure,” said Kirk Gafill, owner of Nepenthe restaurant in Big Sur.' | a frase inteira na folha, entre as aspas da fonte | **confirmada** | Caltrans D5, 15/05/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 (relida 05/11 03:4x; cópia local de 02/11) (o WebFetch resumiu por limite de citação; a frase literal está na cópia local) |  | R181, VP-A-209 |
| VP-B-030 | s52 P2 | paráfrase da voz | 'he said his business, his staff and the community were recovering from those years' | nunca entre aspas | **confirmada** | Caltrans D5, 15/05/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 (relida 05/11 03:4x; cópia local de 02/11) | Não infla ('recover rapidly' na fonte). | R181 |
| VP-B-031 | s57 P2 | citação | O lead: 'tourists are returning in considerable numbers from Carmel to Cambria—fueling a revitalized regional economy in the months after Caltrans fully reopened the iconic corridor.' | 'TOURISTS ARE RETURNING IN CONSIDERABLE NUMBERS' · CALTRANS, MAY 15, 2026 | **confirmada** | Caltrans D5, 15/05/2026: https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 (relida 05/11 03:4x; cópia local de 02/11) |  | R211, VP-A-249 |
| VP-B-032 | s56 P2 | citação | No formulário: 'Your response is required by law. The American Community Survey is conducted by the U.S. Census Bureau.' | grifo em 'The American Community Survey is' · 'conducted by the U.S. Census Bureau.' | **confirmada** | texto do PDF local quest24.pdf (sha256 de57122d…), p. 1; https://www2.census.gov/programs-surveys/acs/methodology/questionnaires/2024/quest24.pdf |  |  |
| VP-B-033 | s56 P2 | nota 8 | 'ongoing' e 'year after year' não estão no questionário da ACS | (o grifo não marca 'ongoing' nem 'year after year' sobre o formulário) | **confirmada** | texto das 20 páginas de quest24.pdf: 'ongoing' 0, 'year after year' 0, 'yearly' 0, 'every year' 0 | CONSERTO: Sobre o formulário, o grifo marca só 'The American Community Survey is conducted by the U.S. Census Bureau.' (com 'The Census Bureau also runs'). Se a tela quiser 'ongoing', é texto recriado da página About, com a fonte: 'an ongoing survey that provides vital information on a yearly basis' · census.gov. | R206 |
| VP-B-034 | s56 P2 | citação | Página About: 'The American Community Survey (ACS) is an ongoing survey that provides vital information on a yearly basis about our nation and its people.' | (recriada, se for à tela) | **confirmada** | https://www.census.gov/programs-surveys/acs/about.html (relida em 05/11 03:4x); cópia local de 02/11 | A voz 'an ongoing survey, year after year' confere. | R206, VP-A-317, VP-A-329 |
| VP-B-035 | s56 P2 | documento | O formulário é o 'Form ACS-1(INFO)(2024)', versão '(05-15-2023)', marca d'água 'INFORMATIONAL COPY' | ACS QUESTIONNAIRE · 2024 (se houver rótulo) | **confirmada** | texto e metadados do PDF local (Author 'US Census Bureau', Subject 'ACS-1(INFO)(2024)') | Rótulo nunca 'the 2020–2024 form': é o formulário de 2024, um dos cinco anos da ACS 2020–2024. |  |
| VP-B-036 | s56 P2 | licença | Domínio público federal (17 U.S.C. §105), sem crédito obrigatório na tela | (sem crédito de mídia) | **confirmada** | PDF local (autor US Census Bureau); govinfo policies, relida 05/11 03:4x |  |  |
| VP-B-037 | s51 s52 s57 | licença | Conditions of Use, OWNERSHIP: 'In general, information presented on this website, unless otherwise indicated, is considered in the public domain. It may be distributed or copied as permitted by law.' (datadas de 19/07/2021) | folhas recriadas com o texto fiel; crédito 'Source: Caltrans, 2026' | **confirmada** | out/big-sur/_tmp/pesquisa-documentos/rede/caltrans-conditions-of-use.html (lida pela pesquisa em 04/11 18:16) e relida por mim em 05/11 03:5x: https://dot.ca.gov/conditions-of-use |  | VR-04, VP-A-207 |
| VP-B-038 | s06 s39 s43 s45 | licença | govinfo: o domínio público é só da obra federal; 'Government publications may contain copyrighted material…'; o GPO só imprime e distribui e manda consultar o órgão de origem: o plano é do condado e vai RECRIADO | folhas recriadas | **confirmada** | https://www.govinfo.gov/about/policies (relida 05/11 03:4x) |  |  |
| VP-B-039 | s52 s57 | fora da tela | O '900%' (Visit California), os números de hotel e a 2ª frase de Gafill ('a 45 percent increase') ficam fora da folha | (fora da tela) | **nada a checar** | — | Instrução de recorte, sem afirmação na tela. |  |
| VP-B-040 | s01 | lugar da foto | Bixby Bridge | rótulo de lugar que não passe de: Bixby Bridge | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | GPS do arquivo 36.3734, −121.9039, junto da ponte. | VR-05 |
| VP-B-041 | s01 | data e aviso | 2023-06-24 (EXIF 17:06:21); aviso_de_ano true → 'Photo from 2023' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | A foto é de antes do Timber Fire e a voz fala no presente (DF-17). | VR-05 |
| VP-B-042 | s01 | crédito | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-05 |
| VP-B-043 | s05 | lugar da foto | Central Californian coastline looking south, with the McWay Rocks (with arch) and McWay Cove | rótulo de lugar que não passe de: Central Californian coastline looking south, with the McWay Rocks | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-05, VR-15 |
| VP-B-044 | s05 | data e aviso | May 2013 (título do arquivo, do próprio autor; o campo de data está vazio); aviso true → 'Photo from 2013' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | O ano vem do título que o autor deu; o mês não vai à tela. | VR-05, VR-15 |
| VP-B-045 | s05 | crédito | David Iliff / Wikimedia Commons · CC BY-SA 3.0 (comentário entre parênteses) | David Iliff / Wikimedia Commons · CC BY-SA 3.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | A página pede a atribuição a 'DAVID ILIFF' (VR-05); a descrição do YouTube leva o link da licença e 'resized/cropped' (para-passos item 21). | VR-05, VR-15 |
| VP-B-046 | s12 | lugar da foto | Highway 1 in Big Sur, California, on the coastal cliffs | rótulo de lugar que não passe de: Highway 1 in Big Sur, California, on the coastal cliffs | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | CONSERTO: Completar o lugar_na_origem com 'about one mile north of Ragged Point, near the southern end of the Big Sur region'. Rótulo, se houver: 'HIGHWAY 1, BIG SUR'. A descrição da origem continua: 'This view looking south is about one mile north of Ragged Point, near the southern end of the Big Sur region.' (GPS 35.7956, −121.3459): fora do distrito do censo, a ~0,7 km da divisa de San Luis Obispo. O lugar_na_origem omitiu esse trecho; nenhum rótulo sobre esta foto diz ou sugere o distrito. | VR-15 |
| VP-B-047 | s12 | data e aviso | 2012-07-29 (EXIF 11:58); aviso true → 'Photo from 2012' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-15 |
| VP-B-048 | s12 | crédito | Fred Moore / Wikimedia Commons · CC BY 2.0 (comentário entre parênteses) | Fred Moore / Wikimedia Commons · CC BY 2.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | A origem escreve 'Fred Moore from Morro Bay, CA, USA' (formato do Flickr); 'Fred Moore' basta. | VR-15 |
| VP-B-049 | s14 | lugar da foto | Carmel-by-the-Sea, United States | rótulo de lugar que não passe de: Carmel-by-the-Sea, United States | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json); navegador-sala.md | APROVADA mas RETIRADA pelo veto 'unsplash' do canal: não vai à cena sem a excecao_autorizada do Lucas (VR-02). | VR-02 |
| VP-B-050 | s14 | data e aviso | 2016-10-24 (campo Date; o EXIF dá 22/10/2016; publicada no Unsplash em 25/10/2016, leitura da Sala); aviso true → 'Photo from 2016' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json); navegador-sala.md | As três datas caem em outubro de 2016: o ano do aviso não muda. | VR-02 |
| VP-B-051 | s14 | crédito | nenhum (CC0; identidade §7) | nenhum | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json); navegador-sala.md | CC0 pelo {{Unsplash}} do Commons; a data de publicação é a do navegador da Sala (04/11 19:27), não refeita. | VR-02 |
| VP-B-052 | s17 | lugar da foto | Carmel-by-the-Sea, United States | rótulo de lugar que não passe de: Carmel-by-the-Sea, United States | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | Reuso declarado (DF-18); a mesma retirada pelo veto de s14. | VR-02 |
| VP-B-053 | s17 | data e aviso | 2016-10-24; aviso true → 'Photo from 2016' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-02 |
| VP-B-054 | s17 | crédito | nenhum (CC0; identidade §7) | nenhum | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-02 |
| VP-B-055 | s19 | lugar da foto | Cone Peak (center), visto da Vicente Flat Trail | rótulo de lugar que não passe de: Cone Peak | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | O Cone Peak fica fora do distrito (VP-A-290); o rótulo 'CONE PEAK' não diz distrito. | VP-A-072, VP-A-075 |
| VP-B-056 | s19 | data e aviso | 2022-11-12; aviso true → 'Photo from 2022' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VP-A-072, VP-A-075 |
| VP-B-057 | s19 | crédito | Natecation / Wikimedia Commons · CC BY-SA 4.0 | Natecation / Wikimedia Commons · CC BY-SA 4.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VP-A-072, VP-A-075 |
| VP-B-058 | s20 | lugar da foto | central California's coastline near Big Sur, California (BIG SUR, CALIFORNIA, US) | rótulo de lugar que não passe de: central California's coastline near Big Sur, California | **confirmada** | DVIDS, https://www.dvidshub.net/video/1019795 (lida 05/11 03:4x) | A legenda começa: 'B-roll footage shows central California's coastline and Pacific Ocean during the Timber Fire near Big Sur'. | VR-14, VR-01 |
| VP-B-059 | s20 | data e aviso | data_na_origem None; aviso_de_ano None |  | **corrigir** | DVIDS, https://www.dvidshub.net/video/1019795 (lida 05/11 03:4x) | CONSERTO: data_na_origem: '2026-08-15 (Date taken, DVIDS)'; aviso_de_ano: false (filmado em 2026; a voz fala da costa de hoje). A origem dá a data: 'Date taken 08.15.2026' (VIRIN 260815-P-NM884-3708; postado em 08.20.2026). | VR-14, VR-01 |
| VP-B-060 | s20 | crédito | nenhum (domínio público federal; identidade §7) | nenhum | **confirmada** | DVIDS, https://www.dvidshub.net/video/1019795 (lida 05/11 03:4x) | A página mostra 'PUBLIC DOMAIN', 'Video by Andrew Avitt', unidade Forest Service, sem 'Courtesy': resolve o VR-14 e a nota 22 (4). | VR-14, VR-01 |
| VP-B-061 | s25 | lugar da foto | Bottchers Gap, Big Sur, California (título do autor: 'Ventana wilderness') | rótulo de lugar que não passe de: Bottchers Gap, Big Sur, California | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | Um rótulo 'VENTANA WILDERNESS' se apoia no título que o próprio autor deu; a forma que não passa da origem é 'VENTANA WILDERNESS, FROM BOTTCHERS GAP'. | VR-15, VP-A-100 |
| VP-B-062 | s25 | data e aviso | 2012-06-21 (13:29); aviso true → 'Photo from 2012' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-15, VP-A-100 |
| VP-B-063 | s25 | crédito | S. Rae / Wikimedia Commons · CC BY 2.0 (comentário entre parênteses) | S. Rae / Wikimedia Commons · CC BY 2.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | A origem escreve 'S. Rae from Scotland, UK'. | VR-15, VP-A-100 |
| VP-B-064 | s26 | lugar da foto | Mud Creek landslide | rótulo de lugar que não passe de: Mud Creek landslide | **confirmada** | USGS, https://www.usgs.gov/media/images/usgs-air-photo-mud-creek-landslide-taken-may-27-2017 (lida 05/11 03:4x) |  | VP-A-103, VP-A-107 |
| VP-B-065 | s26 | data e aviso | May 27, 2017; aviso false (é do ano do fato) |  | **confirmada** | USGS, https://www.usgs.gov/media/images/usgs-air-photo-mud-creek-landslide-taken-may-27-2017 (lida 05/11 03:4x) | Sobre esta foto, a data é 27/05/2017 ou só 2017; JULY 19, 2017 é do vídeo que saiu (achado 2 do lote A). | VP-A-103, VP-A-107 |
| VP-B-066 | s26 | crédito | nenhum (domínio público federal; identidade §7) | nenhum | **confirmada** | USGS, https://www.usgs.gov/media/images/usgs-air-photo-mud-creek-landslide-taken-may-27-2017 (lida 05/11 03:4x) | 'Photographer: USGS'; 'Sources/Usage: Public Domain.' | VP-A-103, VP-A-107 |
| VP-B-067 | s30 | lugar da foto | John Pfeiffer's cabin located in Pfeiffer Big Sur State Park, Monterey County, California | rótulo de lugar que não passe de: John Pfeiffer's cabin located in Pfeiffer Big Sur State Park, Monterey County, California | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-068 | s30 | data e aviso | July 2023 (Date '7-11-2023'; 'Photograph taken in July 2023'); aviso true → 'Photo from 2023' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-069 | s30 | crédito | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-070 | s30 | fato sobre a foto | 'This cabin was built in the late 1800s.' (descrição do uploader); o motivo do veredito: 'a cabana do colono John Pfeiffer, do fim do século XIX' | (a tela não data a cabana) | **nao_conferida** | só a descrição do Commons; resumos de busca dão 1884, e um diz que a cabana foi reconstruída; a fonte do dono (California State Parks) recusou a conexão ao lote A (https://www.parks.ca.gov/pages/570/files/PfeifferBigSurSPFinalWebLayout012016.pdf, ECONNREFUSED) | CONSERTO: Rótulo: 'JOHN PFEIFFER'S CABIN, PFEIFFER BIG SUR STATE PARK' + 'Photo from 2023', sem ano de construção. |  |
| VP-B-071 | s30 | lugar da foto | Four Lime Kilns, 63025 Highway 1, Big Sur, Monterey County, CA (HABS CA-2734) | rótulo de lugar que não passe de: Four Lime Kilns, 63025 Highway 1, Big Sur, Monterey County, CA | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | VC-11 (para-passos item 27): o rótulo não diz 'Limekiln State Park'; vai o nome da origem ('FOUR LIME KILNS, BIG SUR') ou 'BIG SUR'. | VC-11 |
| VP-B-072 | s30 | data e aviso | 2002 (HABS); aviso true → 'Photo from 2002' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | O título diz 'replication of historic view': é foto de 2002 que repete um ângulo antigo, e nenhuma tela a apresenta como foto histórica. | VC-11 |
| VP-B-073 | s30 | crédito | nenhum (domínio público federal; identidade §7) | nenhum | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | HABS, {{PD-USGov-NPS}}; autor James W. Rosenthal. | VC-11 |
| VP-B-074 | s30 | fora do escopo | O recorte do PNG do HABS (os 250 px de cima e a borda da direita, com 'D 30' e o número à mão) | — | **nada a checar** | — | Visual: fica com o qc-visual, no quadro. Declaro fora do meu escopo (e o teto de imagens desta tarefa é 0). | VR-10 |
| VP-B-075 | s33 | lugar da foto | Coast Redwood near Redwood Deck Loop, Pfeiffer Big Sur State Park, CA | rótulo de lugar que não passe de: Coast Redwood near Redwood Deck Loop, Pfeiffer Big Sur State Park, CA | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-076 | s33 | data e aviso | 2023-07-13 (título 'July 2023'); aviso true → 'Photo from 2023' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-077 | s33 | crédito | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | Marty Aligata / Wikimedia Commons · CC BY-SA 4.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  |  |
| VP-B-078 | s35 | lugar da foto | Bixby Bridge, Big Sur | rótulo de lugar que não passe de: Bixby Bridge, Big Sur | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | GPS 36.3712, −121.9048. | VP-A-135 |
| VP-B-079 | s35 | data e aviso | 2025-02-28; aviso true → 'Photo from 2025' |  | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VP-A-135 |
| VP-B-080 | s35 | crédito | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | Jav72 / Wikimedia Commons · CC BY-SA 4.0 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VP-A-135 |
| VP-B-081 | s37 | lugar da foto | Bixby Canyon Bridge under construction on California Coast Highway 1 (a legenda original da NOAA) | rótulo de lugar que não passe de: Bixby Canyon Bridge under construction on California Coast Highway 1 | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) |  | VR-08 |
| VP-B-082 | s37 | data e aviso | data_na_origem '1932 (no título do arquivo…)'; aviso_de_ano false |  | **corrigir** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | CONSERTO: data_na_origem: 'sem ano na legenda da NOAA; 1932 só no título do envio; a obra, 1931–1932'. Se a tela quiser um ano: 'BIXBY CREEK BRIDGE UNDER CONSTRUCTION, 1931–32'. Tirar o 'Photo from 1932' da pauta-imagens (aviso_de_ano_proposto) e da procedência. O false está certo (a foto é do tempo da obra de que a voz fala). O '1932' NÃO é da origem: a legenda da NOAA não dá ano, e o título 'Bixby Creek Bridge 1932.' é do envio de 2011 (Btphelps). A obra da ponte foi de 24/08/1931 a 15/10/1932 (VP-B-120). | VR-08 |
| VP-B-083 | s37 | crédito | nenhum (domínio público federal; identidade §7) | nenhum | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) | Autor 'Floyd Risvold, United States Coast & Geodetic Survey', {{PD-USGov-NOAA}}. A página da NOAA não abriu (VR-08: 301; noaa.gov/media/49652 deu 405 nesta tarefa). | VR-08 |
| VP-B-084 | s48 | lugar da foto | Regent's Slide (alt 'Photo showing extent of Regent's Slide') | rótulo de lugar que não passe de: Regent's Slide | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py |  | VR-09, VR-04, VR-15 |
| VP-B-085 | s48 | data e aviso | data_na_origem '2024-02-10 (no nome do arquivo)'; aviso false; motivo 'no dia seguinte ao deslizamento' |  | **corrigir** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py | CONSERTO: data_na_origem: 'EXIF 2024-02-12 13:43; o nome do arquivo diz february-10-2024'. Rótulo de data, se houver: 'FEB 2024'. Tirar 'no dia seguinte ao deslizamento' do motivo. O EXIF dá 12/02/2024 13:43:28 (Hasselblad L1D-20c); o deslizamento foi em 09/02/2024 (VP-A-190): três dias depois, não 'no dia seguinte'. A galeria não mostra datas ao lado das fotos. O aviso false está certo (foto do mês do fato). | VR-09, VR-04, VR-15 |
| VP-B-086 | s48 | crédito | Caltrans (comentário entre parênteses) | Caltrans | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py | A galeria não credita fotógrafo nem terceiro (lida 05/11 03:4x); a autoria é inferida (VR-04, para-passos item 19). | VR-09, VR-04, VR-15 |
| VP-B-087 | s50 | lugar da foto | Highway 1 in Big Sur (alt 'Photo showing first cars driving through the newly re-opened highway 1 in Big Sur') | rótulo de lugar que não passe de: Highway 1 in Big Sur | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py | VC-11 (para-passos item 27): em s50 P2 o rótulo é 'HIGHWAY 1, BIG SUR', não 'Regent's Slide, Highway 1'. | VR-09, VC-11, VR-04 |
| VP-B-088 | s50 | data e aviso | a galeria não data a foto; o alt diz 'newly re-opened'; aviso false |  | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py | EXIF: DateTimeOriginal 26/01/2026 12:56:58 e DateTime (edição) 15/01/2026 16:06:39, anterior à captura: o relógio da câmera está errado, e o EXIF não data a foto. 'REOPENED JAN 14, 2026 · NOON' vai como fato da reabertura (VP-B-027), nunca como data da foto. | VR-09, VC-11, VR-04 |
| VP-B-089 | s50 | crédito | Caltrans (comentário entre parênteses) | Caltrans | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py |  | VR-09, VC-11, VR-04 |
| VP-B-090 | s50 | lugar da foto | Highway 1 next to Regent's Slide (alt 'Photo showing reopened Highway 1 next to Regent's slide.') | rótulo de lugar que não passe de: Highway 1 next to Regent's Slide | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py |  | VR-09, VR-04 |
| VP-B-091 | s50 | data e aviso | a galeria não data a foto; o alt diz 'reopened'; aviso false |  | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py | EXIF: DateTimeOriginal 26/01/2026 13:29:23, edição 15/01/2026 16:06:56 (o mesmo relógio errado). | VR-09, VR-04 |
| VP-B-092 | s50 | crédito | Caltrans (comentário entre parênteses) | Caltrans | **confirmada** | galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x); EXIF lido por script (Pillow), sem abrir a imagem: out/big-sur/_tmp/vf-bs-B/exif.py |  | VR-09, VR-04 |
| VP-B-093 | s53 | lugar da foto | near Big Sur, California (BIG SUR, CALIFORNIA, US) | rótulo de lugar que não passe de: near Big Sur, California | **confirmada** | DVIDS, https://www.dvidshub.net/video/1019831 (lida 05/11 03:4x) | A legenda: 'B-roll footage shows a smoke column and a hand crew clearing brush during suppression operations on the Timber Fire'. | VR-14, VR-01 |
| VP-B-094 | s53 | data e aviso | data_na_origem None; aviso_de_ano None |  | **corrigir** | DVIDS, https://www.dvidshub.net/video/1019831 (lida 05/11 03:4x) | CONSERTO: data_na_origem: '2026-08-13 (Date taken, DVIDS)'; aviso_de_ano: false (do mês do fato). Rótulo possível: 'TIMBER FIRE · AUG 13, 2026'. A origem dá 'Date taken 08.13.2026' (VIRIN 260813-P-NM884-7853; postado em 08.21.2026). | VR-14, VR-01 |
| VP-B-095 | s53 | crédito | nenhum (domínio público federal; identidade §7) | nenhum | **confirmada** | DVIDS, https://www.dvidshub.net/video/1019831 (lida 05/11 03:4x) | 'PUBLIC DOMAIN', 'Video by Andrew Avitt', Forest Service, sem 'Courtesy' (resolve o VR-14). | VR-14, VR-01 |
| VP-B-096 | s56 P2 | lugar e data | lugar_na_origem, data_na_origem e aviso_de_ano None (documento) | — | **nada a checar** | — | A data do formulário está em VP-B-035. |  |
| VP-B-097 | s56 P2 | crédito | nenhum (domínio público federal; identidade §7) | (sem crédito de mídia) | **confirmada** | PDF local (Author 'US Census Bureau'); 17 U.S.C. §105 |  |  |
| VP-B-098 | s56 P2 | crédito | nenhum (domínio público federal; identidade §7); o recorte é o texto 'American Community Survey', sem a logo | (sem crédito de mídia) | **confirmada** | PDF local |  |  |
| VP-B-099 | s05 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-100 | s09 s27 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui. A data 19/07/2017 só vale sobre este vídeo (VP-A-107). |  |
| VP-B-101 | s12 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'sem veredito (descartada)' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-102 | s14 s17 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-103 | s25 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-104 | s26 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui. O 'July 2011 (approx.)' da página é erro da origem; a foto não vai à tela. |  |
| VP-B-105 | s30 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'reprovado' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-106 | s30 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-107 | s32 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'reprovado' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-108 | s36 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'reprovado' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-109 | s50 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-110 | s50 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-111 | s50 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'trocar' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-112 | s53 | foto fora da tela | lugar_na_origem, data_na_origem e aviso proposto de uma imagem com veredito 'sem veredito (descartada)' | (não vai à tela) | **nada a checar** | conferencia-midia.json | Sem 'aprovado', o rótulo não existe. Se a imagem voltar por conferência nova, o rótulo dela passa por aqui.  |  |
| VP-B-113 | s36 | legenda da foto | A legenda da NOAA reproduzida no Commons: 'Convicts from Folsom Prison were used to build Highway 1 along the California coast between Pfeiffer, Big Sur, and San Simeon to the south. The camps were fenced in and under guard.'; data 'between 1930 and 1936'; autor Floyd Risvold, USC&GS | — | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json) (a página da NOAA não abriu: https://noaa.gov/media/49652 respondeu 405; o endereço antigo da photolib dá 301, VR-08) | É o texto que o Commons traz como a legenda; a legenda na própria NOAA ficou NÃO CONFERIDA (405). | VR-08 |
| VP-B-114 | s36 P2 | nota 15 · a voz | 'San Quentin, a California state prison, set up three temporary camps along the route.' | SAN QUENTIN · 3 TEMPORARY CAMPS · 35¢ A DAY · SENTENCES REDUCED · FHWA (lote A) | **confirmada** | FHWA, cópia local midia/big-sur/fontes/web/fhwa-back0403-2026-11-02.htm: 'San Quentin Prison set up three temporary prison camps to provide the labor for the road. One was set up by Little Sur River, one at Kirk Creek and later one was established at Anderson Creek.'; a Cambria Historical Society diz o mesmo (https://www.cambriahistoricalsociety.com/highway.html, lida 05/11 03:4x) | A legenda da NOAA (Folsom) é outra afirmação: de que prisão vinham os presos do acampamento da foto. Não refuta que San Quentin montou os três acampamentos. Ressalva: a Cambria repete a frase da FHWA quase palavra por palavra, então as duas valem como uma linha de fonte; a Wikipedia traz as duas prisões, sem referência nessas frases. A voz fica de pé pela fonte dela; não é divergência para regravar. | R116, R118, R227, VP-A-136, VP-A-323 |
| VP-B-115 | s36 P1 | nota 15 · o rótulo | O rótulo de tela da foto do acampamento da NOAA, se ela voltar por conferência nova | CONVICT CAMP ON HIGHWAY 1 · 1930s (sem nome de prisão) | **confirmada** | a legenda da foto (Folsom) e a voz (San Quentin) não concordam | CONSERTO: Nunca 'SAN QUENTIN' nem 'FOLSOM' sobre esta foto; a pílula do lote A (San Quentin, FHWA) não fica sobre ela. Hoje a foto está 'trocar' e s36 P1 vai desenhado; a regra vale se ela voltar. | VP-A-136 |
| VP-B-116 | s36 P1 | data e aviso | 'Photo from 1930–1936' proposto pela pesquisa | — | **corrigir** | a obra é de 1919–1937 (voz p17 e FHWA); a foto está dentro do tempo do fato | CONSERTO: Se a foto voltar: aviso_de_ano false (como em s37), e o ano, se for à tela, '1930s' dentro do rótulo. O aviso do ano é para foto de outro ano que o do fato (identidade §6). |  |
| VP-B-117 | s26 s28 s49 | afirmação da lacuna | A foto do Commons 'Big Sur Pauls Curve Slide May 2017.jpg' é a aérea do USGS de Mud Creek, com o título errado | (ninguém a usa como Paul's Slide) | **confirmada** | API do Commons, 05/11 03:48: sha1 c052c0128d046b6ff60e90eb5a1b52437d824a5d, 1500×992, 512.854 bytes, idêntico byte a byte ao arquivo de s26 (USGS, 27/05/2017) | A descrição do Commons diz 'at Paul's Slide' e '2 million cubic feet': as duas coisas são do uploader, não do USGS. |  |
| VP-B-118 | s28 s49 | data | Paul's Slide reabriu em 23/06/2024 | (linha do tempo) | **confirmada** | Caltrans 14/01/2026 (cópia local), conferido pelo lote A |  | VP-A-114, VP-A-194 |
| VP-B-119 | s48 | data | 'o deslizamento foi em 09/02/2024' | REGENT'S SLIDE · FEB 9, 2024 (lote A) | **confirmada** | Caltrans 14/01/2026, conferido pelo lote A |  | VP-A-190 |
| VP-B-120 | s37 | data | 'a ponte foi construída em 1931–1932' | 1931–32 | **confirmada** | Wikipedia, Bixby Bridge (https://en.wikipedia.org/wiki/Bixby_Bridge, lida 05/11 03:4x): 'Construction began on August 24, 1931' (ref. Vitousek) e 'The bridge was completed on October 15, 1932' (ref. California Views) | Fonte de segundo nível; a abertura ao tráfego aparece como 27/11/1932 (sem referência). Nenhum registro do HAER nem da Caltrans foi lido (o HAER está na Library of Congress, que recusa robô). |  |
| VP-B-121 | s20 | contexto da imagem | 'filmado durante o Timber Fire' (15/08/2026) | (não vai à tela sobre a falésia) | **confirmada** | DVIDS 1019795 (lida 05/11 03:4x): 'during the Timber Fire near Big Sur' | A névoa do horizonte pode ser fumaça (aviso da pesquisa): nenhum rótulo de s20 fala do fogo nem do ar limpo. |  |
| VP-B-122 | s14 s17 | licença | A aérea de Leipelt saiu no Unsplash em 25/10/2016 (antes de 05/06/2017), o que sustenta a CC0 do Commons | — | **nada a checar** | — | Licença, não tela, e a foto está retirada pelo veto. Leitura da Sala no navegador, que não refaço. | VR-02 |
| VP-B-123 | s48 s50 | licença e crédito | As fotos da galeria da própria Caltrans, sem crédito de terceiro, entram pela regra geral das Conditions of Use, com o crédito 'Caltrans' | Caltrans | **confirmada** | Conditions of Use (cópia de 04/11) e galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x): nenhum crédito de fotógrafo ou terceiro na galeria; uma legenda cita a KSBW como assunto da foto, não como crédito | A ressalva do VR-04 continua: a autoria de cada foto é inferida, não declarada. | VR-04 |
| VP-B-124 | todas | crédito | O credito_na_tela vale só até o parêntese | s05 'David Iliff / Wikimedia Commons · CC BY-SA 3.0'; s12 'Fred Moore / Wikimedia Commons · CC BY 2.0'; s25 'S. Rae / Wikimedia Commons · CC BY 2.0'; s48 e s50 'Caltrans'; s01 'Mavic of Steel / Wikimedia Commons · CC BY-SA 4.0'; s19 'Natecation / …'; s30 e s33 'Marty Aligata / …'; s35 'Jav72 / …'; 'nenhum (…)' = nada na tela (s14, s17, s20, s26, s30 HABS, s37, s53, s56) | **confirmada** | API do Commons, um pedido, User-Agent do canal, 05/11/2026 03:47 (out/big-sur/_tmp/vf-bs-B/commons-vivo.json); DVIDS; USGS; galeria de Regent's Slide, https://dot.ca.gov/caltrans-near-me/district-5/district-5-current-projects/05-1r640/regents-slide-media-gallery (lida 05/11 03:4x) |  | VR-15 |
| VP-B-125 | s06 s43 | apoio do laudo do roteiro | A R008 apoia 'Monterey County's 1986 plan' no trecho da 'capa' 'LOCAL COASTAL PROGRAM 1986 MONTEREY COUNTY, CALIFORNIA'; a R137 e a R138 dão 'P (capa)' como fonte das datas | — | **corrigir** | OCR do govinfo, cópia local midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm (https://www.govinfo.gov/content/pkg/CZIC-hd211-c2-m67-1986/html/CZIC-hd211-c2-m67-1986.htm) | CONSERTO: Trocar o apoio da R008 por 'Certification Acknowledged by the California Coastal Commission on April […], 1986' (folha de rosto) e 'Cover Photograph: Hurricane Point, 1986'; nas R137 e R138, a fonte é a folha de rosto (PDF p. 3), não a capa. A frase da voz continua confirmada: só o apoio estava no lugar errado (o 1986 da 'capa' é a cota do acervo). | R008, R137, R138 |

NOTA: 9.0/10

VEREDITO: RESSALVA

---

## Fecho (o setor)

- **A cobertura total é 467 de 467:** 409 confirmadas, 23 a corrigir, 6 não conferidas e 29 sem
  nada a checar.
- **O modelo das duas peças**, pelo transcript dos subagentes: `claude-opus-5-5`.
- **O JSON ao lado** (`fatos-pesquisa-2026-11-05.laudo.json`) junta os 467 itens dos dois lotes, cada um com o campo `lote`.
