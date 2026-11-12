# Rio Columbia (`rio-columbia`, o vídeo 7): a folha de pronúncia

> Revisão do roteiro: `955d5210c444`
>
> **Carimbo levado pela Sala em 12/11/2026, ~13:0x**: as três frases trocadas depois do research ("those mountains", "in any year it
> calls", "for a single year of calls", "a settlement"; `decisoes-lucas.md`) não trazem nome novo; a folha não muda. A regravação dos
> trechos 8, 25 e 33 saiu sem alias, como a de antes.

> **Rascunho de 12/11/2026**, feito por um subagente da Sala de controle sobre o texto final (`roteiro-narrador.md`, o r2 com o laudo
> de fatos fechado; o Lucas delegou a aprovação deste roteiro aos conferentes, `decisoes-lucas.md`; 44 parágrafos, 2.677 palavras pelo
> `gate.mjs`). Os parágrafos (§) contam de 1 a 44, na ordem em que vão à voz (um pedido por parágrafo). Se o texto mudar, a cópia para a
> voz se refaz sozinha (`_ferramentas/preparar-voz.mjs`), mas esta folha não: os § e os minutos se conferem, e o carimbo acima troca
> (o `gate.mjs --derivados` acusa a folha com o sha velho).
>
> Começa de `marca/pronuncias.md`, que não tem nenhum nome deste vídeo (a folha permanente só tem o Alasca). A cópia para a voz
> (`voz/texto-para-voz.md`, sha256 `1c57e258863b`, 15.492 caracteres, 2.746 palavras) vai **sem alias**, pela política da folha do
> canal: alias só depois de o nome ser confirmado de ouvido **e** a voz errar com a grafia normal. A coluna do alias diz **reserva** em
> tudo. A única troca de grafia fora dos números é o **US** do roteiro, escrito "U.S." na cópia (3 vezes): é a sigla com os pontos,
> como nas cópias dos vídeos 2 e 4, não um alias (`voz/trocas.md`; o porquê no topo do script).
>
> **A forma.** O nome se diz como o lugar o diz. Aqui quase tudo é nome inglês, dos EUA ou do Canadá, e a voz americana já está em
> casa; o que pede cuidado é a grafia que engana (The Dalles, Coulee), o nome de povo (Sinixt) e o nome curto sem contexto (Renata).
> - **Confirmado (o lugar)** = um dicionário ou a Wikipedia dá a pronúncia do próprio lugar.
> - **Confirmado (a palavra)** = a fonte é da palavra de que o nome é feito (*coulee*, o nome de mulher *Renata*), não do lugar.
> - **Escrito, uma fonte** = uma só fonte dá a forma, e ela deixa dúvida (o Sinixt).
> - **Hipótese** = sem fonte; a forma sai da palavra inglesa comum.
> Nada foi ouvido de gente do lugar: nenhum nome sobe a `marca/pronuncias.md` por esta folha.
>
> As fontes foram lidas em 12/11/2026: Wikipedia (inglesa), Dictionary.com e Wiktionary. Nenhuma recusou a leitura (a The Canadian
> Encyclopedia deu 404 no endereço do Sinixt: não há o artigo ali). A Wikipedia não dá pronúncia para Renata (British Columbia), Vanport,
> Trail, a Libby Dam, a Grand Coulee Dam nem a Grand Coulee; o Wiktionary não dá para Sinixt.
>
> "Onde" é o parágrafo da cópia para a voz e o minuto **estimado** (as palavras da cópia a 179 por minuto, mais 0,47 s por troca de
> parágrafo; o total dá ~15:41). Depois da narração, o minuto se troca pelo da `out/rio-columbia/narracao.wav`, como no Cassino.

## Os nomes a ouvir (pedem teste de ouvido)

| Termo | Vezes e onde | Como o narrador diz | IPA | Estado e fonte | Risco na voz | Alias de reserva |
|---|---|---|---|---|---|---|
| The Dalles ("far downstream at The Dalles", "past The Dalles every second", "the yearly peak at The Dalles"…) | 5: §9 2:34 e 2:51; §21 7:12; §22 7:50; §28 10:12 | the DALZ, uma sílaba, rima com *pals* | /ðə ˈdælz/ | Confirmado (o lugar). Wikipedia, *The Dalles, Oregon*: "/ˈdælz/", "DALZ". Dictionary.com, *Dalles*: "[dalz]", "/ dælz /", "a city in N Oregon". | **Alto.** A grafia francesa leva a "DAL-uhs", "DAL-eez" ou "dahlz". É o lugar onde o vídeo mede o rio: 5 vezes em 4 pedidos, conferir que sai igual em todos. | The **Dals** |
| Sinixt ("the traditional territory of the Sinixt", "a successor group of the Sinixt") | 2: §34 12:18 e 12:30 | sin-AYKST, tônica na 2ª sílaba, o "ay" de *bait* | /sɪˈneɪkst/ (da grafia de apoio da Wikipedia; ela não dá IPA) | Escrito, uma fonte. Wikipedia, *Sinixt*: "sin-AYKST"; no guia de grafia de apoio da Wikipedia, "ay" é o /eɪ/ de *bait*. O mesmo artigo lista as grafias "Sin-Aikst" e "Sin Aikst", que deixam aberto o /aɪ/ de *eye* ("sin-EYEKST"). Wiktionary, *Sinixt*: sem pronúncia. | **Alto.** A grafia leva a "SIN-ikst", tônica no começo e sem o "ay": é o erro mais provável do vídeo, e é o nome de um povo. Antes de um alias, a política pede o ouvido: alguém do próprio povo dizendo o nome (o Lucas ouve; a Sala acha o trecho). | **Sin-AYKST** (se o ouvido der o /aɪ/: **Sin-EYEKST**) |
| Renata ("Renata no longer exists.") | 1: §33 11:57 | ruh-NAH-tuh | /rəˈnɑːtə/ | Confirmado (a palavra: o nome de mulher). Wiktionary, *Renata* (inglês): "/ɹəˈnɑːtʌ/". A Wikipedia, *Renata, British Columbia* (o antigo povoado de pomares na margem do Lower Arrow Lake, inundado pela represa), não dá pronúncia. | **Médio.** "reh-NAY-tuh" ou "REN-uh-tuh". A frase tem 4 palavras e abre com o nome, sem contexto que ajude: erro ali se ouve. | **Ruh-NAH-tuh** |
| Grand Coulee ("Grand Coulee Dam, built by the United States far downstream") | 1: §35 12:37 | grand KOO-lee | /ɡrænd ˈkuːli/ | Confirmado (a palavra). Dictionary.com, *coulee*: americano "[koo-lee]", "/ ˈku li /"; britânico "/ ˈkuːleɪ, -lɪ /". A Wikipedia, *Grand Coulee Dam* e *Grand Coulee*, não dá pronúncia. | **Médio.** "koo-LAY" ou "KOO-lay", a forma britânica e a do francês *coulée*. | Grand **KOO-lee** |
| Oregon ("on its way to Oregon", "a place on the river in Oregon", "Portland, Oregon") | 3: §7 1:21; §9 2:37; §12 3:47 | OR-ih-gun | /ˈɔːrɪɡən/ | Confirmado (o lugar). Wikipedia, *Oregon*: "/ˈɒrɪɡən, -ɡɒn/", "ORR-ih-ghən, -gon". Dictionary.com, *Oregon*: "awr-i-guhn, -gon, or-", "ˈɔr ɪ gən, -ˌgɒn, ˈɒr-". | **Baixo a médio.** "or-ee-GONE", com a tônica no fim. O "-gon" final está nos dois como variante: só a tônica fora do lugar é erro. | **OR-ih-gun** |
| U.S. (na cópia; "US" no roteiro: "by the U.S. Geological Survey's account", "by the U.S. Congressional Research Service's account", "That's how the U.S. Congressional Research Service describes") | 3: §12 3:55; §14 4:36; §21 7:34 | YOO-ESS, as duas letras | /ˌjuːˈɛs/ | Confirmado (a sigla soletrada): `roteiros/atlantico-fundo/pronuncia.md` (o vídeo 4) cita o Wiktionary (*U.S.*, grafia alternativa de *US*) e a voz do canal dizendo "U.S." na Zona do Canal; a cópia do vídeo 4 tem "U.S." 7 vezes, uma delas "the U.S. Geological Survey". | **Baixo** com os pontos, que a cópia já põe (regra "sigla" do script); conferir só que o ponto não vira pausa de fim de frase. **Médio** sem eles: "the us Geological Survey". | (a cópia já escreve **U.S.**; se a Sala tirar a regra, a amostra decide) |
| acre-foot / acre-feet ("three point six million acre-feet of room", "An acre-foot is enough water to cover an acre of land") | 2: §23 8:17 e 8:22 | AY-ker-foot, AY-ker-feet | /ˈeɪkərˌfʊt/ | Confirmado. Dictionary.com, *acre-foot*: "[ay-ker-foot]", "/ ˈeɪ kərˈfʊt /", "the amount covering one acre to a depth of one foot". | **Baixo a médio.** O som é o de duas palavras comuns; o risco é o hífen dar uma pausa ("acre… feet") no meio da unidade, que é nova para o ouvinte. | **acre feet** / **acre foot** (sem hífen: a mesma fala; o Juneau tirou os hífens de "winner-take-all" pelo mesmo motivo) |

## Risco baixo (a voz deve ler certo sem nada; conferir na escuta)

| Termo | Vezes e onde | Como se fala | IPA | Estado e fonte | Nota |
|---|---|---|---|---|---|
| Columbia (o rio: "the Columbia River", "the upper Columbia", "turn the Columbia off"; e "Columbia Lake") | 8 sozinho: §1 0:05; §6 1:03 e 1:15 (Columbia Lake); §7 1:41; §13 4:21; §14 4:41; §28 10:27; §35 12:47. Mais 15 em "British Columbia" | kuh-LUM-bee-uh | /kəˈlʌmbiə/ | Confirmado. Dictionary.com, *Columbia*: "[kuh-luhm-bee-uh]", "/ kəˈlʌm bi ə /", e o 1º sentido é o rio. | — |
| Vanport ("all the way to Vanport", "At Vanport") | 2: §12 3:44 e 3:47 | VAN-port | /ˈvænpɔːrt/ | Hipótese (as duas palavras inglesas). A Wikipedia, *Vanport, Oregon*, não dá pronúncia; diz que o nome junta *Vancouver* e *Portland*. | Conferir só que a tônica fica no "VAN". |
| Trail ("from Trail, in British Columbia") | 1: §12 3:41 | TRAYL | /treɪl/ | Hipótese (a palavra inglesa). A Wikipedia, *Trail, British Columbia*, não dá pronúncia (a cidade fica nas duas margens do Columbia). | O risco não é o som: é a voz não dar ao nome o peso de um nome ("from trail"). Se soar como palavra comum, não há grafia que ajude; a pausa da vírgula já está no texto. |
| Libby ("the one it had asked for, Libby.") | 1: §15 4:58 | LIB-ee | /ˈlɪbi/ | Hipótese (o nome inglês comum). A Wikipedia, *Libby Dam*, não dá pronúncia. | Nome curto no fim da frase, depois da vírgula: conferir que não some. |
| Edgewood e Burton ("Some, like Edgewood and Burton, were relocated.") | 1 cada: §33 11:55 e 11:56 | EJ-wood; BUR-tn | /ˈɛdʒwʊd/; /ˈbɜːrtn/ | Hipótese (palavras e nome inglês comuns); nenhuma fonte lida. | Vão na mesma linha da amostra que a Renata. |
| Arrow Lakes / Arrow ("the Arrow Lakes Reservoir", "Arrow, the lake at the start of this story", "the Arrow Lakes Band") | 7: §1 0:03; §16 5:30; §23 8:21; §32 11:27; §34 12:15 e 12:21; §42 14:50 | AIR-oh | /ˈæroʊ/ | Palavra comum. | — |
| BC Hydro ("BC Hydro, the power company…", "BC Hydro says") | 2: §10 3:07; §30 11:07 | BEE-SEE HY-droh | /ˌbiːˈsiː ˈhaɪdroʊ/ | Sigla soletrada (B.C., British Columbia); sem fonte lida. | Conferir que a voz soletra o "BC" e não o junta ao "Hydro". |
| CBC ("CBC News asked whether…") | 1: §27 9:43 | SEE-BEE-SEE | /ˌsiːbiːˈsiː/ | Sigla soletrada; sem fonte lida. | — |
| cubic feet per second ("A flood on this river is measured in cubic feet per second") | 1: §21 7:09 | KYOO-bik feet per SEK-und | — | Palavras comuns. | O risco é de ritmo, não de som: a unidade longa e nova, e logo depois dois números sem unidade ("between four hundred fifty thousand and six hundred fifty thousand"); conferir que a voz não acrescenta nada a eles. |
| Aboriginal ("an Aboriginal people of Canada") | 1: §34 12:32 | ab-uh-RIJ-uh-nl | /ˌæbəˈrɪdʒənəl/ | Palavra comum. | Vai na linha do Sinixt. |

**Lidos sem folha** (nomes e palavras comuns, risco nenhum): Alpha Point, British Columbia, Canada, Canadian, United States, America,
Portland, Washington State, Congress, Senate, Supreme Court of Canada, First Nations, Canadian Geographic, Geological Survey,
Congressional Research Service, hydropower, snowmelt, gauge, dike, embankment, tariff, salmon. Os números saem por extenso na cópia
(`voz/trocas.md`): o "two thousand nine" (2009) e os "four hundred fifty thousand"/"six hundred thousand" são as formas americanas de
sempre e não pedem folha; vão na amostra só porque estão em linhas que já iam.

## Fora da fala (reserva, se o roteiro mudar)

A pauta e o briefing têm estes nomes, e o texto de `c4788c7ab3be` não os diz (são de tela e de mapa): Keenleyside (a represa Hugh
Keenleyside), Kinbasket, Mica, Duncan, Koocanusa, Kootenay e Kootenai, Birchbank (a régua canadense), Revelstoke, Nakusp, Castlegar,
Desautel. **Nenhum foi pesquisado.** Se um deles entrar na fala, entra nesta folha com a fonte, antes da narração; Kootenay, Kootenai e
Koocanusa são os de grafia mais traiçoeira.

## A amostra que esta folha pede (proposta; nada foi gerado)

Antes da narração inteira, uma amostra no v4, com a voz e os ajustes do `canal.json` › `narracao`, **um pedido por linha** (como na
produção, um pedido por parágrafo), **sem nenhum alias**, com as frases literais da cópia para a voz (os números já por extenso; tiradas
do arquivo por script, frase a frase). As linhas 1 a 10 somam **1.704 caracteres**; com as duas leves (11 e 12), **1.957**. A 0,48
crédito por caractere (o preço do Cassino, 08/11/2026: `out/praia-do-cassino/_pesquisa/narracao-conferencia.md`), dá ~820 e ~940; a
conta vale pelo `character-cost` do dia. No Cassino, a Sala pôs depois de cada linha outra com a grafia de reserva, o que dobra o
gasto; aqui, quem decide é a Sala.

1. (§9: The Dalles, Oregon) The other is far downstream at The Dalles, a place on the river in Oregon where the United States government measures it.
2. (§34: Sinixt, duas vezes) The Arrow Lakes lie in the traditional territory of the Sinixt. It found that a successor group of the Sinixt, based in Washington State, is an Aboriginal people of Canada.
3. (§33: Edgewood, Burton, Renata) Some, like Edgewood and Burton, were relocated. Renata no longer exists.
4. (§35: Grand Coulee) Grand Coulee Dam, built by the United States far downstream and finished in nineteen forty-one, stopped the natural migratory runs of fish, salmon among them, on the upper Columbia.
5. (§12: Trail, Vanport, Oregon, U.S.) That spring, the river came up over its banks, and the damage ran from Trail, in British Columbia, all the way to Vanport, a town on the edge of Portland, Oregon. It broke on a Sunday afternoon, and within an hour, by the U.S. Geological Survey's account, the town was completely destroyed.
6. (§23: acre-feet, acre-foot) It pays for reserving three point six million acre-feet of room a year behind the dam that holds back the Arrow Lakes. An acre-foot is enough water to cover an acre of land one foot deep.
7. (§21: cubic feet per second, The Dalles, os números sem unidade) A flood on this river is measured in cubic feet per second: how much water goes past The Dalles every second. American planners projected that Canadian storage would come into play once the river's peak landed somewhere between four hundred fifty thousand and six hundred fifty thousand.
8. (§1: o número do gancho) And starting with the twenty twenty-five flood season, the United States pays Canada for that empty space: thirty-seven point six million dollars a year, adjusted for inflation.
9. (§10: BC Hydro) BC Hydro, the power company that runs Canada's side of the treaty, describes the river this way.
10. (§27: CBC) As a tariff fight between the two countries grew, CBC News asked whether ending this treaty could help Canada fight back.
11. (leve, se houver folga; §22: "two thousand nine") Since two thousand nine, with the space reserved upstream, it hasn't passed it once, and six springs have peaked in the gap: high enough for the American range, too low for the Canadian line.
12. (leve, se houver folga; §15: Libby) The United States would build the one it had asked for, Libby.

The Dalles vai em dois pedidos (1 e 7) e o Oregon em dois (1 e 5), para ver se a voz os diz igual. O Sinixt vai duas vezes no mesmo
pedido.

## Como se fecha

1. A amostra acima (ou, se a Sala preferir, a narração inteira sem alias: `narrar.mjs rio-columbia`, um pedido por parágrafo).
2. Quem julga a pronúncia é a escuta do Lucas (`sala/narracao.md`); o ouvido da máquina (`conferir-paragrafos.py`) confere as palavras e
   escreve o nome por expectativa, sem julgar a pronúncia. Neste vídeo o Lucas delegou a aprovação do roteiro aos conferentes; a escuta
   da pronúncia não foi delegada nesta folha: se ele não puder ouvir, a Sala decide e diz como.
3. Nome que ele ouvir errado ganha alias em `_ferramentas/preparar-voz.mjs` (`ALIASES`, com o motivo; a reserva desta folha é o ponto
   de partida), a cópia se refaz, e na narração só aquele parágrafo se refaz (`narrar.mjs rio-columbia --refazer=N`).
4. O Sinixt pede, antes do alias, o ouvido de alguém do próprio povo dizendo o nome (a política de `marca/pronuncias.md`): a Wikipedia é
   uma fonte só, e a grafia de apoio dela não fecha entre /eɪ/ e /aɪ/.
5. O nome confirmado de ouvido, com a fonte anotada, sobe para `marca/pronuncias.md`.
