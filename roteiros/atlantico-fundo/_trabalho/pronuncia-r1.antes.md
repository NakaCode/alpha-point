# Folha de pronúncia

Revisão do roteiro: `4694e58092c2`

> Para o passo de voz do vídeo 5 (o ponto mais fundo do Atlântico, na Fossa de Porto Rico). Feita em 26/10/2026 sobre o texto
> falado de `roteiros/atlantico-fundo/roteiro-narrador.md` (sha256 do texto falado pelo `gate.mjs`: `4694e58092c2…`, 30
> parágrafos, 2.089 palavras, PASSA). Os parágrafos se contam de 1 a 30, na ordem em que vão à voz (um pedido por parágrafo), e a
> parte (`gancho`, `p1` a `p8`) é a marca `<!-- pN -->` do roteiro: gancho = 1º e 2º; p1 = 3º a 6º; p2 = 7º e 8º; p3 = 9º a
> 11º; p4 = 12º a 14º; p5 = 15º a 18º; p6 = 19º a 22º; p7 = 23º a 27º; p8 = 28º a 30º. As contagens saem de
> `pautas/atlantico-fundo/_trabalho/scripts/pronuncia-contar.py` (a saída em `pautas/atlantico-fundo/_trabalho/pronuncia-contagem.json`).
> Se o texto mudar, esta folha se refaz com o sha novo.
>
> Os termos saem da tabela `nomes` de `pautas/atlantico-fundo/fundamento.json` (52 nomes; as pronúncias de lá são hipótese do
> dossiê) cruzada com o que a narração de agora diz de fato. Começa de `marca/pronuncias.md`: de lá não vem nenhum nome (a folha
> permanente só tem o Alasca). Entraram também nomes e palavras que a narração diz e a tabela não tem: Nares, Jamieson, Caribbean,
> bathyscaphe (a tabela só o cita na nota do Archimède), snailfish, multibeam, HMS e USS; e, da tabela, Geodetic, Meteor e Sandwich
> foram lidos como palavra à parte.
>
> **Confirmado** = há fonte escrita confiável (dicionário, guia oficial) ou alguém ouviu. **Hipótese** = sem fonte; a forma sai
> da regra da grafia ou da hipótese do dossiê. "Confirmado (a palavra)" = a fonte é da palavra de que o nome vem (o nome francês
> de Arquimedes, o titã grego), não do navio nem da pessoa. "Confirmado (o sobrenome)" = a fonte é do sobrenome, não de como a
> pessoa o diz.
>
> **O alias só entra na cópia para a voz quando o nome foi confirmado de ouvido e a amostra mostra a voz errando** (a política
> da folha permanente). Nada aqui foi ouvido: a coluna do alias diz **reserva** em tudo.
>
> **Neste vídeo a voz é a do motor sem rosto** (`estudio/canal-motor.json` › `narracao`): a mesma voz do canal
> (`829pig94w9GefZ9jJQYl`), o `eleven_v4`, `stability` 0,5 e `language_code: "en"`, a mesma configuração do `canal.json` com que
> a voz narrou os vídeos 3 e 4. Duas diferenças pesam para esta folha (`out/_maquina/motor-sem-rosto/requisitos.md`, "O texto vai
> à voz como está"):
> - o motor não tem cópia para a voz: ele lê o texto que entra no portão "roteiro". Um alias, se entrar, entra nesse texto (pela
>   `ferramentas/roteiro-motor.mjs converter atlantico-fundo --de=voz`, a partir de `voz/texto-para-voz.md`), e o redator de tela
>   do motor o lê como roteiro gravado (a roupa dele manda a tela escrever pela grafia do AP, nunca pelo alias);
> - o ouvido do motor (o faster-whisper) confere o que a voz disse contra o texto, e o trecho reprovado se refaz pago, até 2
>   tentativas (`limites.tentativas_por_trecho`). Um alias como "Ah-gwah-DEE-ya" pode ser ouvido como "Aguadilla" e não casar
>   com o texto. **Não medido**: como o ouvido do motor trata um alias não foi lido nesta folha. A Sala confere isso antes de
>   pôr qualquer alias no texto do portão.
>
> As fontes foram lidas em 26/10/2026, um pedido por vez, com o User-Agent do canal: a Wikipedia e o Wiktionary pela API da
> Wikimedia, o Dictionary.com (Random House Unabridged; o `robots.txt` deixa `/browse/`) e a página do navio na NOAA Ocean
> Exploration (`oceanexplorer.noaa.gov/okeanos/about/`; o `robots.txt` só veta `/map/`). As cópias estão em
> `midia/atlantico-fundo/fontes/pronuncia-2026-10-26/` (`wp/`, `wikt/`, `dictionary-com/`, `noaa/`). Nenhum site recusou a leitura.
> Sem entrada: o Dictionary.com para Anegada, multibeam, Okeanos, Jamieson e Vescovo (as páginas devolveram fanegada, multiform,
> kernos, Jameson e Muscovy) e sem pronúncia para NOAA; o Wiktionary sem página para GEBCO, Peniagone e "Nares" (o sobrenome), e
> sem pronúncia para Aguadilla, Brownson, multibeam, Landsat, cusk-eel, snailfish, USGS e IHO; a Wikipedia sem pronúncia para
> Victor Vescovo, o navio Okeanos Explorer, a Mona Passage e a Mariana Trench. A página do navio na NOAA não diz como se fala o nome.
>
> **Hipóteses do dossiê que a leitura corrige ou abre** (o dossiê não se edita aqui; a correção vale para a voz):
> - **Okeanos**: o dossiê diz "oh-kee-AH-nohs". O Wiktionary dá ao nome do titã, em inglês, /əʊˈkeɪənɒs/: oh-KAY-uh-nos, tônica
>   no KAY. Como a NOAA diz o nome do navio não foi lido nem ouvido. Vale oh-KAY-uh-nohs, com a do dossiê como tolerada.
> - **Vescovo**: o dossiê diz "ves-KOH-voh". A palavra italiana é *véscovo*, tônica no VES (Wiktionary). Como o próprio Victor
>   Vescovo diz o nome não foi lido nem ouvido: fica hipótese, e é o nome que mais pede o ouvido do Lucas (3 vezes, 2 delas no fim).
> - **Mariana**: o dossiê diz "mair-ee-AN-uh". O Dictionary.com dá mair-ee-AHN-uh (e mar-, mah-ree-AH-nah), e a Wikipedia
>   MARR-ee-AH-nuh: o "AN" com o *a* de *cat* não está nas fontes lidas. Vale mair-ee-AHN-uh.
> - **Nares**: o dossiê não o tem. A Wikipedia (George Nares) dá NAIR-eez, com uma fonte fraca (o site SayItVid, consultado em
>   21/10/2026, isto é, posta na página há dias); o Dictionary.com dá NAIR-eez para *nares*, o plural anatômico de *naris*
>   (narinas), não para o sobrenome. A leitura de sobrenome inglês de uma sílaba, NAIRZ, não tem fonte lida. Fica hipótese.

## Os que pedem atenção

| Termo | Vezes | Como se fala | IPA | Estado | Fonte | Risco na voz | Alias para a voz |
|---|---|---|---|---|---|---|---|
| Archimède ("a French bathyscaphe, a deep-diving craft, called Archimède") | 1 (p2, 7º parágrafo) | ar-shee-MED, à francesa; o "ch" é o som de "sh" | /ˌɑrʃiˈmɛd/; francês /aʁ.ʃi.mɛd/ | Confirmado (a palavra) | Wiktionary, *Archimède*, francês: "/aʁ.ʃi.mɛd/", "Archimedes" (o nome francês de Arquimedes, de que o batiscafo tira o nome). A Wikipedia (*Archimède*) chama o batiscafo assim, com o acento, sem dar pronúncia. | **Alto.** "AR-kih-meed" à inglesa, ou "Archimedes" (ar-kuh-MEE-deez), outra palavra. O acento pode levar o v4 a um timbre francês só nessa palavra: a amostra mostra. | reserva: **Ar-shee-MED** |
| Aguadilla ("off Aguadilla, in the island's northwest") | 1 (p5, 17º parágrafo) | ah-gwah-DEE-yah (o espanhol) ou ah-gwuh-DEE-uh (o americano); o "ll" é o som de "y" ou some | /ˌɑɡwɑˈdijɑ/, /ˌɑɡwəˈdiə/; espanhol [aɣwaˈðiʝa] | Confirmado | Dictionary.com, *Aguadilla*: "[ah-gwuh-dee-uh, ah-gwah-thee-yah] / ˌɑ gwəˈdi ə, ˌɑ gwɑˈði jɑ /". Wikipedia, *Aguadilla, Puerto Rico*: espanhol "[aɣwaˈðiʝa]", e o local "[awaˈðiʝa]". A hipótese do dossiê (ah-gwah-DEE-yah) bate. | **Alto.** "AG-wuh-dil-uh" ou "ah-gwah-DILL-uh", com o "ll" dito "l". É a costa das 83 milhas, dita uma vez só. | reserva: **Ah-gwah-DEE-ya** |
| Vescovo (Victor Vescovo; "Vescovo") | 3 (p5, 18º; p8, 28º e 29º) | ves-KOH-voh | /vɛsˈkoʊvoʊ/; a palavra italiana /ˈveskovo/ | **Hipótese** (a do dossiê) | Wiktionary, *vescovo* (italiano, "bispo"): "véscovo", tônica no VES. A Wikipedia (*Victor Vescovo*; *Vescovo*, o sobrenome italiano) não dá pronúncia. Como ele diz o próprio nome não foi lido nem ouvido. | **Médio a alto.** "VES-kuh-voh", à italiana, ou "ves-KAH-voh". Conferir que sai igual nos três parágrafos. | reserva: **Ves-KOH-vo** (o Lucas confirma ouvindo o próprio Vescovo dizer o nome numa entrevista) |
| Okeanos ("NOAA's ship Okeanos Explorer") | 1 (p5, 15º parágrafo) | oh-KAY-uh-nohs | /oʊˈkeɪənoʊs/; britânico /əʊˈkeɪənɒs/ | Confirmado (a palavra) | Wiktionary, *Okeanos*, inglês: "/əʊˈkeɪənɒs/", "synonym of Oceanus" (o titã grego). A página do navio na NOAA (`oceanexplorer.noaa.gov/okeanos/about/`) não diz como se fala. A hipótese do dossiê, oh-kee-AH-nohs, não está nas fontes lidas. | **Médio a alto.** "oh-KEE-uh-nos" ou "OH-kee-AN-os". O ouvinte entende qualquer uma. | reserva: **Oh-KAY-uh-nos** |
| bathyscaphe ("a French bathyscaphe, a deep-diving craft") | 1 (p2, 7º parágrafo) | BATH-uh-skayf ou BATH-uh-skaf | /ˈbæθəˌskeɪf/, /ˈbæθəˌskæf/ | Confirmado | Dictionary.com, *bathyscaphe*: "[bath-uh-skayf, -skaf] / ˈbæθ əˌskeɪf, -ˌskæf /". Wikipedia, *Bathyscaphe*: "/ˈbæθɪˌskeɪf, -ˌskæf/". O Wiktionary dá também, no britânico, /ˈbæθɪˌskeɪv/. | **Médio a alto.** "bath-ISS-kuh-fee" ou "BATH-ee-scape". O roteiro já define a palavra logo depois ("a deep-diving craft"). | reserva: **BATH-uh-skayf** |
| Anegada ("Anegada is a low, flat island") | 1 (p4, 13º parágrafo) | an-uh-GAH-duh | /ˌænəˈɡɑdə/ | Confirmado | Wiktionary, *Anegada*: "/ˌænəˈɡɑː.də/", "An island in the British Virgin Islands". Wikipedia, *Anegada*: "/ˌænəˈɡɑːdə/". A hipótese do dossiê bate. | **Médio.** "uh-NEG-uh-duh" ou "ah-nay-GAH-dah", à espanhola (também serviria). | reserva: **An-uh-GAH-da** |
| NOAA (e "NOAA's") | 6 (p2, 8º; p3, 9º; p4, 12º, "NOAA's"; p5, 15º, duas, uma "NOAA's"; p8, 30º, "NOAA's") | NOH-uh, dito como palavra, como o nome Noah | /ˈnoʊə/ | Confirmado | Wikipedia, *National Oceanic and Atmospheric Administration*: "/ˈnoʊ.ə/ NOH-ə". O Wiktionary dá as duas formas, "/ˌɛn oʊ eɪ ˈeɪ/" (soletrada) e "/ˈnoʊə/"; a agência se diz como palavra. | **Médio.** Soletrar "N-O-A-A" numa vez e dizer "NOH-uh" noutra, nos 6 pedidos. A 1ª vez (8º parágrafo) já vem com a explicação ("the U.S. ocean and weather agency"). | reserva: **Noah** e **Noah's** (só nos parágrafos em que a voz soletrar) |
| Factorian ("the Factorian Deep") | 1 (p7, 27º parágrafo) | fak-TOR-ee-uhn, como *Victorian* | /fækˈtɔriən/ | **Hipótese** (a do dossiê; nome inventado, de *Factor* com o sufixo *-ian*, que puxa a tônica para a sílaba de antes, como em *Victorian* e *historian*) | Sem entrada em dicionário. O nome vem do submersível Limiting Factor (o roteiro diz isso logo depois). | **Médio.** "FAK-tor-ee-an", tônica no começo, ou "fak-tor-EE-un". | reserva: **Fak-TOR-ee-un** |
| Geodetic ("the U.S. Coast and Geodetic Survey") | 1 (p1, 3º parágrafo) | jee-uh-DET-ik | /ˌdʒiəˈdɛtɪk/ | Confirmado | Dictionary.com, *geodetic*: "[jee-uh-det-ik] / ˌdʒi əˈdɛt ɪk /". Wiktionary: "/ˌd͡ʒiː.əˈdɛt.ɪk/". | **Médio.** "jee-OH-det-ik" ou "GEE-oh-det-ik", com o "g" duro. | reserva: **Jee-uh-DET-ik** |
| Nares ("under Captain Nares") | 1 (p1, 5º parágrafo) | NAIR-eez (a da Wikipedia) ou NAIRZ (sobrenome de uma sílaba) | /ˈnɛəriz/, /nɛərz/ | **Hipótese** (em disputa) | Wikipedia, *George Nares*: "/ˈnɛəriːz/ NAIR-eez", com a fonte "How to pronounce Nares in English" (SayItVid), consultada em 21/10/2026. Dictionary.com, *nares*: "[nair-eez] / ˈnɛər iz /", mas é o plural de *naris* (narina), não o sobrenome. Nenhuma fonte lida dá NAIRZ. | Baixo a médio. A voz deve dizer NAIR-eez (é a palavra que ela conhece); as duas formas se entendem. | — (a decisão é do Lucas, de ouvido; sem alias) |
| USGS (e "USGS's"; "the U.S. Geological Survey", 1, no 9º) | 4 (p3, 10º, "USGS's", e 11º; p4, 12º; p6, 19º) | YOO-ES-JEE-ES, as quatro letras; o possessivo, YOO-ES-JEE-ES-iz | /ˌjuˌɛsˌdʒiˈɛs/ | Confirmado (a sigla soletrada) | Wiktionary, *USGS*: "initialism of United States Geological Survey" (sem IPA: é sigla que se soletra). A nota do dossiê diz o mesmo ("a sigla se soletra U-S-G-S"). | **Médio no possessivo** (10º parágrafo, "By the USGS's measure"): a voz pode engolir o "'s" ou dizer "U-S-G-esses". Nas outras três, baixo. | reserva: **U-S-G-S's** (só no 10º, se errar) |

## Risco baixo (a voz deve ler certo sem nada)

| Termo | Vezes | Como se fala | IPA | Estado | Fonte | Alias para a voz |
|---|---|---|---|---|---|---|
| Puerto Rico (e "Puerto Rico's"; "the Puerto Rico Trench", 1, no 2º) | 15, em 12 parágrafos (gancho, 1º e 2º; p1, 3º, 5º e 6º; p4, 12º, duas; p5, 17º, duas; p6, 21º; p7, 23º, 24º, duas, e 27º; p8, 30º) | PWAIR-tuh REE-koh ou POR-tuh REE-koh | /ˈpwɛrtə ˈrikoʊ/, /ˈpɔrtə ˈrikoʊ/ | Confirmado | Dictionary.com, *Puerto Rico*: "[pwer-tuh ree-koh, pwer-toh, pawr-tuh, pwer-taw ree-kaw]". Wikipedia: "POR-toh REE-koh, PWAIR-toh -, -tə -"; espanhol "[ˈpweɾto ˈriko]". Vai à 1ª frase. | — (conferir que a voz não alterna as duas formas entre os pedidos, nem passa ao "rr" espanhol só numa vez) |
| U.S. ("a U.S. island"; "U.S. waters"; "the U.S. controls") | 7 (gancho, 1º; p1, 3º; p2, 8º; p3, 9º; p6, 21º, três) | YOO-ES, as duas letras | /ˌjuˈɛs/ | Confirmado (a sigla soletrada) | Wiktionary, *U.S.*: grafia alternativa de *US* (sigla). A voz do canal já a disse 6 vezes na narração da Zona do Canal (14/10/2026), vídeo publicado em 16/10. Vai à 1ª frase. | — (conferir que o ponto de "U.S." não vira pausa de fim de frase em "a U.S. island" e "where the U.S. controls") |
| Mariana ("you think Mariana") | 1 (gancho, 1º parágrafo) | mair-ee-AHN-uh ou mah-ree-AH-nuh | /ˌmɛəriˈɑnə/, /ˌmæriˈɑnə/ | Confirmado | Dictionary.com, *Mariana Islands*: "[mair-ee-ahn-uh ahy-luhndz, mar-, mah-ree-ah-nah] / ˈmɛər iˌɑn ə …, ˌmɑ riˈɑ nɑ /". Wikipedia, *Mariana Islands*: "/ˌmæriˈɑːnə/ MARR-ee-AH-nə". | — |
| Mount Everest | 1 (gancho, 1º parágrafo) | EV-er-ist | /ˈɛvərɪst/ | Confirmado | Dictionary.com, *Everest*: "[ev-er-ist, ev-rist] / ˈɛv ər ɪst, ˈɛv rɪst /". | — |
| Milwaukee ("the cruiser USS Milwaukee"; "the Milwaukee Deep", 3) | 4 (p1, 6º, duas; p6, 19º e 22º) | mil-WAW-kee | /mɪlˈwɔki/ | Confirmado | Wiktionary, *Milwaukee*: "/mɪlˈwɔk.i/" (EUA), "/mɪlˈwɑ.ki/" (EUA sem distinção *cot-caught*); em Milwaukee, "[məˈwɑki]". | — |
| Brownson ("a Navy officer named Brownson") | 1 (p1, 3º parágrafo) | BROWN-suhn | /ˈbraʊnsən/ | **Hipótese** (a grafia: *Brown* + *-son*) | Wiktionary, *Brownson*: só "surname", sem pronúncia. | — |
| HMS ("the British research ship HMS Challenger") | 1 (p1, 5º parágrafo) | AYCH-EM-ES, as três letras | /ˌeɪtʃˌɛmˈɛs/ | Confirmado (a sigla soletrada) | Wiktionary, *HMS*: "initialism of His/Her Majesty's Ship". | — |
| USS ("the cruiser USS Milwaukee") | 1 (p1, 6º parágrafo) | YOO-ES-ES, as três letras | /ˌjuˌɛsˈɛs/ | Confirmado (a sigla soletrada) | Wiktionary, *USS*: "initialism of United States ship". | — |
| Mona ("the Mona Passage") | 1 (p4, 12º parágrafo) | MOH-nuh | /ˈmoʊnə/ | Confirmado | Dictionary.com, *Mona Passage*: "[moh-nuh, maw-nah] / ˈmoʊ nə, ˈmɔ nɑ /", "a strait between Hispaniola and Puerto Rico". | — |
| Caribbean ("the Caribbean plate", 2; "reached the Caribbean") | 3 (p3, 10º, duas; p4, 13º) | kar-uh-BEE-uhn ou kuh-RIB-ee-uhn | /ˌkærəˈbiən/, /kəˈrɪbiən/ | Confirmado | Wiktionary, *Caribbean*: "/ˌkæɹɪˈbiːən/, /kəˈɹɪbiən/" (EUA). Dictionary.com, lido para o vídeo 3 (`roteiros/zona-do-canal/pronuncia.md`). As duas valem; a voz já a disse no vídeo 3. | — (conferir que não alterna as duas no 10º e no 13º) |
| Jamieson (Alan Jamieson) | 1 (p6, 20º parágrafo) | JAY-mih-suhn | /ˈdʒeɪmɪsən/ | Confirmado (o sobrenome) | Wiktionary, *Jamieson*: "/ˈd͡ʒeɪmɪsən/", "surname". Como ele, escocês (Wikipedia), diz o nome não foi ouvido. | — |
| Meteor ("the Meteor Deep") | 3 (p7, 24º, 25º e 26º) | MEE-tee-er | /ˈmitiər/ | Confirmado (a palavra) | Wiktionary, *meteor*: "/ˈmi.tiɚ/", também "/ˈmi.tioɹ/" (EUA). O navio era alemão ("after a German research ship"); o nome inglês da fossa se diz em inglês. | — |
| Sandwich ("the South Sandwich Trench") | 1 (p7, 23º parágrafo) | SAND-wich ou SAN-wich | /ˈsæn(d)ˌwɪtʃ/ | Confirmado (a palavra) | Wiktionary, *sandwich*: "/ˈsænˌ(d)wɪt͡ʃ/" (EUA). | — |
| snailfish ("described them as snailfish") | 1 (p2, 7º parágrafo) | SNAYL-fish | /ˈsneɪlˌfɪʃ/ | Confirmado | Dictionary.com, *snailfish*: "/ ˈsneɪlˌfɪʃ /". | — |
| cusk-eel ("a small cusk-eel"; "A cusk-eel is…") | 3 (p2, 8º, duas; p8, 30º) | KUSK-eel | /ˈkʌsk ˌil/ | Confirmado (*cusk*) | Wiktionary, *cusk*: "/kʌsk/"; *cusk-eel*: "Any fish of the family Ophidiidae", sem pronúncia. | — |
| multibeam ("multibeam sonar"; "a modern multibeam sonar") | 2 (p3, 9º; p5, 16º) | MUL-tee-beem ou MUL-tye-beem | /ˈmʌltiˌbim/ | **Hipótese** (a grafia: *multi-* + *beam*) | Wiktionary, *multibeam*: "Involving multiple beams", sem pronúncia; sem entrada no Dictionary.com. O 9º parágrafo a define logo depois. | — |
| Landsat ("a Landsat satellite") | 1 (p7, 23º parágrafo) | LAND-sat | /ˈlændˌsæt/ | Confirmado | Dictionary.com, *Landsat*: "[land-sat] / ˈlændˌsæt /". | — |

**Lidos sem folha** (nomes e palavras comuns, risco nenhum): Alpha Point, Atlantic Ocean, Pacific, the Puerto Rico Trench, Blake,
the Navy, Challenger, the National Geographic Society, French, the Australian Museum, the Ron Brown, the North American plate,
anomaly, limestone, brown ooze, the British Virgin Islands, uranium, Columbus, Deep Discoverer, the Five Deeps Expedition, Pressure
Drop, Pressure Deep, Limiting Factor, Limiting Deep, Victor, Heather Stewart, the Dominican Republic, exclusive economic zone,
Seabed 2030 (o número, na cópia: abaixo), Britain, Argentina, Mount Michael, German, the International Hydrographic Organization
(o Wiktionary não dá pronúncia para *hydrographic*; palavra comum, hy-druh-GRAF-ik), the Southern Ocean, sea cucumbers, Wednesday.

## Da tabela do dossiê e do pedido, fora do texto de agora (reserva, se o roteiro mudar)

O pedido desta folha citou Hispaniola, Peniagone, GEBCO e IHO, e o dossiê tem os outros; a narração de `4694e58092c2` não os diz
(a lista oficial vai como "the official list of undersea features", a organização pelo nome inteiro, os bichos como "sea cucumbers",
e San Juan só na foto da abertura).

| Termo | Como se fala | IPA | Estado | Fonte | Risco, se entrar |
|---|---|---|---|---|---|
| Hispaniola | his-puhn-YOH-luh | /ˌhɪspənˈjoʊlə/ | Confirmado | Dictionary.com, *Hispaniola*: "[his-puhn-yoh-luh, ees-pahn-yaw-lah] / ˌhɪs pənˈjoʊ lə … /". Wikipedia: "/ˌhɪspənˈjoʊlə/". | Baixo a médio: "hiss-PAN-ee-oh-luh" (o britânico, também no Wiktionary). |
| Peniagone | pen-ee-AG-uh-nee | /ˌpɛniˈæɡəni/ | Hipótese (a do dossiê) | Sem página no Wiktionary nem entrada no Dictionary.com. O dossiê manda dizer "sea cucumbers"; o gênero só na tela, se a tela o pedir. | Alto: "PEN-ee-uh-gohn", como *gone*. Reserva: **Pen-ee-AG-uh-nee**. |
| GEBCO | GEB-koh, dito como palavra, com o "g" de *get* | /ˈɡɛbkoʊ/ | Hipótese (a do dossiê) | Sem página no Wiktionary. O dossiê prefere, na fala, "the official list of undersea feature names" ou "the global map of the ocean floor". | Médio: soletrada, ou "JEB-koh". |
| IHO | I-H-O, as três letras | /ˌaɪˌeɪtʃˈoʊ/ | Confirmado (a sigla soletrada) | Wiktionary, *IHO*: "initialism of International Hydrographic Organization". A nota do dossiê diz o mesmo. | Baixo. |
| San Juan | san WAHN | /sæn ˈwɑn/ | Hipótese (a do dossiê) | Não lido nesta folha. A folha do vídeo 4 anota que a voz o sabe (`roteiros/peru-agua/pronuncia.md`, San Juan de Miraflores). | Baixo. Nunca com as 83 milhas (o dossiê, N26). |
| Zavodovski (Zavodovski Island) | zav-uh-DOF-skee | /ˌzævəˈdɔfski/ | Hipótese (a do dossiê, zah-voh-DOF-skee) | Não lido nesta folha. | Médio a alto: "zuh-VOD-uv-skee". Reserva: **Zah-vo-DOF-skee**. |
| Caladan (Caladan Oceanic) | KAL-uh-dan | /ˈkæləˌdæn/ | Hipótese (a do dossiê) | Não lido nesta folha. | Médio: "kuh-LAY-dun". |
| Iain M. Banks | EE-uhn em BANKS | /ˈiən/ | Hipótese (não lido nesta folha; é a leitura escocesa corrente de *Iain*) | — | Médio: "EYE-an". |

Outros nomes da tabela que a narração não diz (the Mariana Trench e o Challenger Deep, que vão só como "Mariana"; Saunders Island,
Theodore N. Gill, Dolphin, the U.S. Virgin Islands, the U.S. Census Bureau, the International Space Station, Antarctica) são
palavras comuns ou nomes que a voz já sabe: ficam sem pesquisa. Se entrarem numa revisão do roteiro, esta folha se refaz com o sha novo.

## A amostra que esta folha pede (proposta, nada foi gerado)

Antes do portão "roteiro" do motor, uma amostra no v4, com a voz e os ajustes do `canal.json` › `narracao` (os mesmos do motor) e
**um pedido por linha abaixo** (como na produção, um pedido por parágrafo), **sem nenhum alias e com o acento do roteiro**, para o
Lucas ouvir. Nos vídeos 3 e 4 a narração inteira serviu de amostra, e o nome errado se refazia por parágrafo com o `narrar.mjs
--refazer=N`; no motor, a narração e a retentativa são dele, e o que ele permite refazer depois do portão não foi lido nesta folha.
Por isso a escuta antes do portão é o único ponto seguro para decidir um alias. São frases do roteiro de `4694e58092c2`, literais,
com os números já por extenso (a forma proposta para a cópia, abaixo). Vescovo vai em dois pedidos (11 e 14) e NOAA em três (5, 7 e
9), para ver se a voz os diz igual.

1. About eighty-three miles off Puerto Rico, a U.S. island, lies the deepest point in the Atlantic Ocean. When you think "deepest ocean," you think Mariana.
2. On January twenty-seventh, eighteen eighty-three, a steamer called the Blake, from the U.S. Coast and Geodetic Survey, lowered a weighted wire into the sea north of Puerto Rico. Its commander was a Navy officer named Brownson, who had taken charge of the ship a few months earlier.
3. The trench itself had been found eight years earlier, by the British research ship HMS Challenger, under Captain Nares, far to the east. In nineteen thirty-nine, the cruiser USS Milwaukee bounced sound off the bottom north of Puerto Rico.
4. They rode in a French bathyscaphe, a deep-diving craft, called Archimède. Their account, published the next year, described them as snailfish, a family of fish.
5. NOAA, the U.S. ocean and weather agency, records that in nineteen seventy a net hauled up from the trench brought back a small cusk-eel.
6. Along the trench, the North American plate and the Caribbean plate mostly slide past each other, with only a little of one sinking under the other. By the USGS's measure, the trench has the most negative gravity anomaly on Earth.
7. In October nineteen eighteen, an earthquake struck the Mona Passage, west of Puerto Rico. NOAA's tsunami database puts it at magnitude seven point one.
8. Anegada is a low, flat island in the British Virgin Islands. By measuring the uranium in that coral, a twenty twenty-five study dated the tsunami that left them to sometime between thirteen eighty-one and thirteen ninety-one. That's about a century before Columbus reached the Caribbean.
9. The robot, Deep Discoverer, worked from NOAA's ship Okeanos Explorer, on one of a dozen dives it made on that voyage.
10. That point lies about eighty-three miles from the nearest coast of Puerto Rico, off Aguadilla, in the island's northwest.
11. On Wednesday, December nineteenth, twenty eighteen, Victor Vescovo took a submersible called Limiting Factor down to the spot the sonar had just mapped.
12. In twenty nineteen, two scientists, Heather Stewart and Alan Jamieson, checked the published depths against sonar data that was already public.
13. The trench's deepest point, the Meteor Deep, is about three hundred seventy feet shallower than the one off Puerto Rico. Just south of the line lies the deepest point of the Southern Ocean, the Factorian Deep.
14. It was the craft that had carried Vescovo to the deepest point the year before. One of them was Vescovo.

São 2.481 caracteres (contados sobre as 14 linhas acima). Pelo saldo das narrações do vídeo 3 (4.794 créditos por 13.339
caracteres) e do vídeo 4 (5.678 por 11.790), uns 900 a 1.200 créditos, dentro do teto de 15.000 do vídeo (do vídeo 3 em diante, até o Lucas dizer outra coisa). A conta seria a do
canal (a chave do `chaves.env`), não a do Top10 que o motor usa. Se Archimède, Aguadilla, Vescovo, Okeanos, bathyscaphe ou NOAA
saírem errados, vale gerar o mesmo pedido com o alias de reserva, para o Lucas comparar os dois. O gasto e a rodada são da Sala de
controle.

**O que o Lucas responde depois de ouvir:** Archimède (à francesa?), Aguadilla (o "ll" como "y" ou mudo?), Vescovo (tônica no KOH?
igual nos pedidos 11 e 14?), Okeanos, bathyscaphe, Anegada, Factorian (tônica no TOR?), Geodetic, NOAA (como palavra nas três
vezes?), o "USGS's" do pedido 6, Puerto Rico e Caribbean (a mesma forma em todos os pedidos?) e o par "thirteen eighty-one and
thirteen ninety-one" (lido como anos, não como quantidade). E uma decisão que é dele, não erro da voz: Nares em uma sílaba (NAIRZ)
ou em duas (NAIR-eez). Cada erro que ele ouvir, com o nome confirmado de ouvido, põe o alias de reserva no texto que vai ao portão
(com a ressalva do ouvido do motor, no topo); cada acerto deixa a grafia normal.

**O acento de Archimède fica no texto**, como no roteiro e no dossiê ("a forma francesa, com o acento"). O risco é o v4 trocar de
timbre só nessa palavra (o mesmo risco que o vídeo 4 correu com Rímac e Chillón; lá o Lucas aceitou a narração inteira: "A
narração está ok", 18/10/2026). Se a
amostra errar, o caminho é o alias, não tirar o acento (sem ele, a voz tende a "Archimedes").

## O que a cópia para a voz vai trocar (para o passo seguinte)

Não é pronúncia de nome, mas é onde a voz costuma errar (`marca/pronuncias.md`, "Leituras que a voz costuma errar"). A forma é a
do `_ferramentas/preparar-voz.mjs` dos vídeos 3 e 4; o vídeo 5 ainda não tem o dele.

- **Os anos do século XIV não passam pelo preparar-voz de hoje:** a regra de ano dele só pega 1500 a 2099
  (`/\b(1[5-9]\d\d|20\d\d)\b/`). "between 1381 and 1391" (13º parágrafo) sobraria em algarismo, e o script para com "ficou dígito".
  O do vídeo 5 precisa da regra para 13xx: thirteen eighty-one and thirteen ninety-one. É também um par de anos com o mesmo verbo:
  conferir de ouvido que a voz não o lê como quantidade.
- **Datas com dia** (o ordinal): "On January 27, 1883" (3º) → On January twenty-seventh, eighteen eighty-three; "On Wednesday,
  December 19, 2018" (18º) → December nineteenth, twenty eighteen.
- **Anos**: 1883 → eighteen eighty-three; 1918 (12º e 14º), 1939 (6º e 19º), 1964 (2º, 7º e 29º), 1970 (8º e 30º) → nineteen …;
  2002 e 2003 (9º; 2003 também no 19º) → two thousand two and two thousand three (a forma do preparar-voz para 2001–2009); 2011,
  2015, 2018, 2019, 2020, 2021, 2023, 2025, 2026 → twenty eleven … twenty twenty-six; "December 2018" (2º e 16º), "October 1918"
  (12º), "August 2026" (23º), "As of October 2026" (22º) e "since 2003" (19º) só com o ano trocado.
- **Seabed 2030 e "by 2030"** (22º) → Seabed twenty thirty, by twenty thirty (o nome do projeto e a data, a mesma forma).
- **Pares de anos**, a conferir de ouvido: "In 2002 and 2003" (9º), "between 1381 and 1391" (13º); e os anos que podem soar como
  quantidade: "a 2025 study" (13º), "the same 2019 study" (24º), "the "fish" of 1964" (29º, com as aspas).
- **Medidas e contagens**: 83 miles (1º, 17º e 30º) → eighty-three; 1,500 feet (1º) e 1,200 feet (2º e 19º) → o preparar-voz dá one
  thousand five hundred e one thousand two hundred; a forma americana corrente é fifteen hundred e twelve hundred (a decidir na
  cópia); 9,500 miles (1º) → nine thousand five hundred; 60 miles (3º); 23,000 (5º); 28,000 (6º e 19º); 24,000 (7º); 200 (7º e 28º)
  → two hundred; 27,300 (9º); 15 years (9º); 4,000 e 13,000 (11º); 20 feet e 100 people (12º); 20,000 (15º); 27,500 (17º e 30º); 16
  feet, 95 percent, 250 feet (17º); 7 feet (18º); 28,700 (19º); 24,400 (20º); 36 miles, 100 miles, 230 miles (21º); 370 feet (24º);
  30 miles (25º); 60 degrees south (26º) → sixty degrees south; 20 miles (27º).
- **Magnitude**: "magnitude 7.1" (12º) → magnitude seven point one; "magnitude 8 or more" (14º) → magnitude eight or more.
- O resto já está por extenso no roteiro (more than five miles, three-quarters of an inch, eight inches, a dozen dives, two and a half
  hours, nine-tenths, three inches, three to four times, more than three million, a century, thousands of years, five authors).
- As siglas ficam como estão no texto (U.S., HMS, USS, USGS, NOAA): a voz as lê, e o alias de NOAA e de USGS's é só de reserva.

## O que pode subir para a folha permanente

Depois da escuta, os nomes que tendem a voltar em outros vídeos do canal, que é de lugar e de mar (o vídeo 6, a Passagem de Drake,
é no Oceano Austral): NOAA, USGS, U.S., HMS, USS, IHO, GEBCO, bathyscaphe, multibeam, Puerto Rico, Caribbean, Mariana, Everest,
Hispaniola, Vescovo e o Limiting Factor (se a escuta confirmar a forma), Okeanos e Meteor. Quem sobe é o Claude central, com a fonte e
o que o Lucas ouviu. Os outros (Aguadilla, Anegada, Mona, Archimède, Factorian, Nares, Brownson, Geodetic, Jamieson, Milwaukee,
Sandwich, snailfish, cusk-eel, Landsat) ficam só nesta folha.
