# Conferência de mídia · juneau · fluxo `midia` · despachos 1 a 5 · 28/09/2026, 01:14 (BRT)

**Laudo do arquivo: 25 aprovados de 35 conferidos (1 reprovado, 9 trocar, 0 pendente_lucas); 0 com algo não conferido; recebidos: 35.** São os 18 vereditos do lote 1 que ficam, os 15 do 2º despacho que ficam, o s16 p1 do 4º e a camiseta do s28 p3, regravada no 5º. Os 5 vereditos antigos (os 4 do s16 e o da camiseta do 4º despacho) estão em `substituidos`.

**Laudo deste despacho (o 5º): 1 aprovado de 1 conferido (0 reprovados, 0 trocar, 0 pendente_lucas); 0 com algo não conferido; recebidos: 1.**

- **Quem conferiu:** o Claude central despachou esta conferência como agente geral, no ofício `.claude/agents/conferente-de-midia.md`. O ofício ganhou em 28/09 o item "Peça de acervo fotografada depois" (§5.1).
- **O que o veredito vale:** nenhum veredito aqui é o sim do Lucas.
- **As janelas:** não há regência nem conceito visual, então todas são as do plano no espelho, provisórias. Conferido às 01:0x de 28/09: o espelho ainda é o de 27/09, 10:12, o `words.json` o de 26/09 e o roteiro o de 24/09. O `montador` trabalha no espelho ao mesmo tempo, e não escrevi nele.
- **`out/juneau/_media/` não mudou durante o trabalho**, conferido pelo sha256. As horas estão na nota do fim.

## O veredito deste despacho (o 5º): a camiseta, regravada

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| _caca/s28/jornal-adn/anchorage-stealers-1982-tshirt-back-asm-97-20-1-gelotte-adn.jpg (entregue em _media/foto/s28/) | s28 p3 | Alaska State Museum, pelo Anchorage Daily News (Dave Gelotte) | aprovado | as costas da camiseta 'Anchorage Stealers' de 1982 (Alaska State Museum, pelo ADN, midia.md §7.5), com o 2.84 que é o preço de Willow da fala; a foto do museu, de 2015, é registro da própria peça e vai sem o aviso do ano (identidade §6, peça de acervo; Lucas, 28/09/2026), com o crédito na tela |

A fala do plano (de 290,6 a 293,333 s): "The ad called that about a quarter of the Willow price tag."

### O que mudou: o aviso do ano sai

`aviso_de_ano: false`, pela regra nova do Lucas (identidade §6, "Peça de acervo fotografada depois, sem aviso"; 28/09/2026, 00:4x de Brasília).
- A pergunta nomeava esta camiseta: "A camiseta é de 1982, mas a foto dela foi tirada no museu em 2015. Pela regra de hoje, a tela diria "Photo from 2015". Para foto de objeto de acervo (peça de museu), usamos o aviso do ano?"
- A resposta: "Sem aviso, como documento (Recomendado)". A opção dizia: "A peça mostrada é a de 1982; a data da foto do museu não muda o que se vê. O crédito continua na tela (Dave Gelotte / Alaska State Museum). Vale para peças de acervo nos próximos vídeos."
- **Como se aplica:** a foto é registro da própria peça do fato.
  - É a que o museu deu ao jornal, num manequim sobre fundo cinza de estúdio.
  - A origem dá a camiseta como a peça do acervo, produto do comitê da campanha: "The jersey was a fundraising product produced by the NFL Access Committee. The jersey is collection item at the Alaska State Museum (ASM 97-20-1)."
  - Não é réplica nem uma igual, e não é foto de lugar, pessoa, prédio ou evento.
  - Entra como a página de documento: sem o aviso, com o crédito de sempre.
- O `data_na_origem` fica como a origem o dá (a foto, de 17/07/2015; a peça, de 1982), e não vai à tela. O veredito ganhou `aviso_de_ano_regra`, com a regra, para o `redator-de-tela` e o `qc-visual` não lerem a data de 2015 como pedido de aviso.

### O que não mudou

Abri de novo a entrega (`_media/foto/s28/`), numa cópia reduzida feita dela: o mesmo quadro, com o mesmo sha256 do rascunho e a mesma medida (1440x2156).

**Contexto: passa.**
- O 2.84 domina o quadro. A coluna do ADN diz que o número das costas era "referring to the $2.84 billion estimated cost for the capital move": é o preço que a cédula de 1982 imprimiu (o roteiro, p4, diz "about $2.8 billion").
- A peça é da mesma campanha do anúncio que a voz atribui: eles "sold T-shirts and buttons to fund the campaign" (a coluna). É registro real de 1982, a peça que o espelho pede.
- O "FRANK O. HARRIS" do alto e o bordão de baixo são a sátira do lado contra a mudança, na cena desse lado. A voz atribui o anúncio, e a tela não nomeia Harris sobre a camiseta nem repete o bordão como texto do canal (voz.md §1 e §2).
- O botão "FOR EGAN GOVERNOR" é parte da peça como o museu a fotografou e não desmente a fala. A origem não diz de quando ele é, e Egan não é citado no roteiro. O enquadramento pode tirá-lo (os avisos, abaixo).
- Nenhuma pessoa no quadro, e nenhum logotipo de time ou de liga.

**Licença: passa**, pelo midia.md §7.5.
- É foto do governo do Alasca (o Alaska State Museum, do Estado), dada ao jornal e publicada na coluna. Não é retrato de pessoa citada, nem de agência, nem documento.
- O museu pede permissão escrita, inclusive para "video production", e o ADN manda pedir a imagem ao museu. O §7.5 não faz desse pedido uma trava: o Lucas decidiu o mesmo caso na Alaska State Library, que também pede permissão escrita ("Entra citando a fonte"). O texto de uso do museu e o do ADN estão copiados na procedência, como a regra manda.
- A procedência tem a URL, a data da foto, o autor, o veículo e o órgão, o uso copiado e a base `midia.md §7.5`. A legenda, o crédito, o `takenOn` e o campo de direitos, conferi na cópia local da coluna (o adn.com veta o agente do Claude no robots.txt, e não o abri).
- O "sim" do Lucas foi ao download, não à licença.

**Técnica: passa.**
- Foto do Estado ou de jornal: a maior versão que a origem oferece, sem piso (ofício §5.3). O srcset da coluna vai de 274 a 1440 px de largura, e 1440x2156 é a maior. O original do museu (4912x7360) não está na página.
- Vertical: na altura inteira do 4K vai a 1,0×; na largura inteira, pediria 2,67×. Isso é enquadramento, do `diretor-de-arte` (divergência 11).
- A 100%: a borda dos números limpa, a tinta gasta e a trama do tecido, sem blocos de compressão nem marca d'água (os quatro cantos olhados). Os 2.099 bytes a mais, do caminho pelo celular e pelo chat, não aparecem no quadro.

**Repetição: passa.** O sha256 aparece duas vezes em `_media/`: no rascunho e na entrega da mesma cena e do mesmo plano. É a cópia entregue, não repetição. O item (a peça ASM 97-20-1) só aparece no manifesto do rascunho e na procedência da entrega, e nenhum outro veredito o cita.

### As duas entregas de hoje casam com os aprovados

| entrega | sha256 | casa com |
|---|---|---|
| `_media/foto/s28/anchorage-stealers-1982-tshirt-back-asm-97-20-1-gelotte-adn.jpg` | `0d5b56c3…` | o aprovado do s28 p3 (regravado neste despacho) |
| `_media/foto/s16/fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg` | `993acd16…` | o aprovado do s16 p1 (4º despacho); a procedência dá o plano 1, como o veredito |

- Em cada uma, os quatro sha256 são iguais: o `sha256sum` do arquivo, o `medido.sha256` e o `medido.medido_no_download.sha256` do `_PROCEDENCIA.json` da pasta, e o do veredito.
- A procedência da camiseta já traz `aviso_de_ano: false` e a regra; agora o veredito também.
- A do 550551 traz a base da exceção do DOCUMERICA, o crédito e o aviso `Photo from 1973`, como o veredito.

## O veredito do 4º despacho que fica: o DOCUMERICA (s16 p1)

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| _caca/s16/acervo-livre/fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg (entregue em _media/foto/s16/) | s16 p1 | NARA 550551 (DOCUMERICA), pelo Commons | aprovado | o centro de Fairbanks em agosto de 1973 (DOCUMERICA, NARA 550551, 'Unrestricted' no catálogo), pela exceção do DOCUMERICA; entra no plano 1 de s16, com 'Dennis Cowals / National Archives' e o aviso do ano na tela |

A fala do plano (de 160,067 a 163,367 s): "In Fairbanks, a group wanted to know the price first."

**Licença: passa, pela exceção do DOCUMERICA** (midia.md §7.3; Lucas, 27/09/2026, 23:1x de Brasília: "Sim, abrir exceção (Recomendado)").
- O item 550551 é da série DOCUMERICA (542493, Record Group 412, EPA), de agosto de 1973, e o registro dele no catálogo diz `useRestriction` "Unrestricted" (API v2, 21:55:44Z de 27/09).
- A procedência que a regra pede estava na linha do s16 p1 da `pauta-imagens.json` (`excecao_documerica`) e agora está também no `_PROCEDENCIA.json` da entrega: a URL do item, o `useRestriction`, o texto da NARA copiado (a página flickr-faqs, 23:51:04Z) e a base `midia.md §7.3, exceção do DOCUMERICA (Lucas, 27/09/2026)`.
- A opção que o Lucas escolheu nomeava este caso: "O centro de Fairbanks de 1973 entra na cena 16, com 'Photo from 1973' na tela."

**O resto, como antes.** O arquivo tem o mesmo sha256 (`993acd16…`). Contexto, técnica e repetição continuam passando. A pauta registra onde a foto do ano foi procurada.

**O plano: o 1.** O hotel de Chesi, aprovado no 2º despacho e entregue em `_media/foto/s16/`, fica com o plano 2 (de 163,367 a 167,133 s, com "1977" na tela), como a pauta propõe. São duas fotos diferentes, de pontos de vista diferentes (do alto e da rua), sem repetição em planos seguidos.

O `conferido_no_navegador_do_app` do veredito tem a hora de cada página, e `mensagem: null`, porque o Lucas não acompanhou (o ofício §6 diz isso desde 27/09).

### Os avisos para a cena

| | s28 p3, a camiseta | s16 p1, o DOCUMERICA |
|---|---|---|
| aviso do ano | nenhum: peça de acervo (identidade §6; Lucas, 28/09) | `Photo from 1973` |
| crédito na tela | `Dave Gelotte / Alaska State Museum` | `Dennis Cowals / National Archives` |
| na descrição | `Photo by Dave Gelotte: Alaska State Museum / ASM 97-20-1` (o crédito que o museu pede) | sugestão: `Dennis Cowals, DOCUMERICA (EPA) / U.S. National Archives, NAID 550551` |
| o que pode sair no enquadramento | o botão "FOR EGAN GOVERNOR": um corte logo abaixo do 2.84, antes de y≈1285 no original, o tira sem mudar o sentido. Se ficar, a tela não o nomeia nem o explica | a moldura preta do diapositivo, nos cantos |
| o que a tela não diz | o nome de Harris sobre a camiseta, e o bordão como texto do canal | nada do oleoduto, de que a legenda da origem fala e a foto não mostra |
| rótulo de lugar | a origem só diz "collection item at the Alaska State Museum": se houver rótulo, não passa disso | no máximo "Downtown Fairbanks" (a origem: "DOWNTOWN FAIRBANKS, VIEW SOUTHWEST") |
| medida | 1440x2156, vertical: 1,0× na altura inteira; não vai em tela cheia na largura | 3000x2022: tela cheia a 1,28× |

- **Os textos da tela no s28 p3:** o "$800 million" (em "that", 291,292 s) e o "ABOUT A QUARTER" (de 291,46 a 293,333 s) vão sobre a foto. O 2.84 continua à vista, porque é o que liga a foto à fala. O conflito entre os dois textos, que o espelho aponta, é do regente.
- **As duas foram entregues hoje**, e as procedências casam com estes vereditos:
  - **o 550551:** o `_PROCEDENCIA.json` de `_media/foto/s16/` leva a base da exceção, o `useRestriction`, o texto da NARA, o crédito e o aviso. O `pesquisa-imagens` corrigiu o "Public domain" que o `entregar` copiou do Commons;
  - **a camiseta:** o `_PROCEDENCIA.json` de `_media/foto/s28/` tem os campos do §7.5, `aviso_de_ano: false` e a regra. O crédito vem deste veredito.

## Os vereditos do 2º despacho que ficam

- Estes 15 vereditos são os mesmos da conferência de 20:30.
- O do s16 p1 foi julgado de novo no 3º e no 4º despachos, e os antigos estão em `substituidos`.
- O hotel de Chesi ("s16 p2 ou p1" no veredito) fica com o plano 2, desde o 4º despacho.

Quem entregou:
- os três primeiros blocos (o s16 e o s35), o `pesquisa-imagens`, como rascunhos em `_media/_caca/`;
- os retratos, o `pesquisa-pessoas`;
- os documentos, o `pesquisa-documentos`.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| fairbanks-university-toward-city-1973-08-documerica-cowals-550557.jpg | s16 p2 | Commons (NARA, DOCUMERICA) | reprovado | licença: a série DOCUMERICA é obra de fotógrafos contratados pela EPA, sem licença; e o campus domina o quadro, com a cidade ao fundo |
| fairbanks-downtown-international-hotel-1972-08-chesi.jpg | s16 p2 ou p1 | Commons (Piergiuliano Chesi) | aprovado | o centro de Fairbanks em agosto de 1972 (Commons, CC BY 3.0), a cidade que a fala nomeia, com o aviso do ano; cobre um dos dois planos de foto de s16 |
| fairbanks-rose-building-dollar-day-rentals-1972-08-chesi.jpg | s16 p2 ou p1 | Commons (Piergiuliano Chesi) | trocar | o quadro é um prédio, com a placa 'DOLLAR DAY RENTALS' em destaque: sob a fala do preço, vira trocadilho, e a cidade não domina |
| wasilla-lake-chugach-2010-06-06-foubister.jpg | s35 p1 | Commons (Murray Foubister, Flickr) | aprovado | Wasilla, com o lago, a faixa da cidade e as montanhas, em 6/6/2010 (CC BY-SA 2.0), o lugar que a fala nomeia, numa vista neutra, com o aviso do ano |
| pessoa/s41/kiehl-jesse-senator-2025-01-21-senate-majority.jpg | s41 p1 (card) | Alaska Senate Majority | aprovado | Jesse Kiehl no retrato oficial de 21/01/2025 da página dele na maioria do Senado (uso editorial, midia.md §7.2), do ano da fala; enche o card sem ampliar |
| pessoa/s48/knowles-tony-governor-2002-02-16-elmendorf-nara-517972692.jpg | s48 p1 (card) | NARA (White House Photo Office) | trocar | o recorte só com ele tem 570 px e iria ampliado 1,64× no card; o Lucas decidiu que este não entra, e o card de Knowles sai só com nome e cargo (identidade §5) |
| foto/s55/walker-bill-governor-2016-11-15-togiak.jpg | s55 p1 (card) | Commons (DVIDS) | aprovado | Bill Walker, governador, em 15/11/2016 (DVIDS, domínio público federal), do ano da fala; o recorte do card enche o quadro sem ampliar; a data e o local, que faltam na procedência, vieram do DVIDS |
| pessoa/s57/gladziszewski-maria-assemblymember-2020-09-12-cbj-retrato.jpg | s57 p1 (card) | prefeitura de Juneau | aprovado | Maria Gladziszewski no retrato de 2020 da prefeitura (uso editorial, midia.md §7.2), o do ano mais perto que enche o card sem ampliar, com o aviso do ano |
| pessoa/s57/gladziszewski-maria-2017-cbj-declaracao-candidata.png | s57 p1 (card) | prefeitura de Juneau (declaração de candidata) | trocar | pequena para o card (464x620, iria ampliada 2×) e sem a data da foto na origem; o card de s57 fica com o retrato de 2020, aprovado |
| pessoa/s57/gladziszewski-maria-assembly-2017-10-cbj-foto-oficial-grupo.jpg | s57 p1 (card) | prefeitura de Juneau | trocar | foto de grupo: o rosto dela tem uns 60 px e não enche o card; continua como a prova da identidade (a placa e a legenda), fora da tela |
| documento/s07/stat-31-321-1900-p1.jpg | s07 p1 | govinfo (Statutes at Large) | aprovado | a página original da lei de 1900 (31 Stat. 321, domínio público federal), com a Sec. 1 que faz de Juneau a sede temporária; a página real até 1,4×, e mais perto que isso, a recriação |
| documento/s07/stat-37-512-1912-p1.jpg | s07 p4 | govinfo (Statutes at Large) | aprovado | a página original da lei de 1912 (37 Stat. 512, domínio público federal), com a Sec. 2 que a voz cita; a página real até 1,4×, e mais perto que isso, a recriação |
| documento/s52/ca9-2011-seacc-p04.jpg | s52 p1 | Nono Circuito | aprovado | a página da opinião de 2011 do Nono Circuito (domínio público federal) em que o tribunal diz que a corte distrital anulou a decisão, e confirma; entra com o rótulo 'upheld on appeal, 2011' |
| documento/s52/ca9-2011-seacc-p01.jpg | s52 p1 | Nono Circuito | trocar | a capa mostra o tribunal e as partes, não a anulação; a página 4, aprovada, é a que diz o que a fala diz |
| documento/s58/federal-register-2018-16263-p1.jpg | s58 p1 | govinfo (Federal Register) | aprovado | o aviso oficial da FHWA no Federal Register (domínio público federal): 'The selected alternative was the No Action Alternative', com o Record of Decision de 18/6/2018 |

## Os vereditos do lote 1 que ficam

- Estes 18 vereditos são os mesmos da conferência de 19:07.
- Os arquivos estão em `out/juneau/_media/_caca/<cena>/<origem>/`, e foi o `pesquisa-imagens` que os entregou.
- As 14 fotos aprovadas já foram entregues em `_media/foto/`. Casam com estes vereditos pelo sha256 da procedência.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| alaska-highway-1942-06-02-corduroy-charlie-lake.jpg | s10 p1 | Commons (USACE) | aprovado | a obra da Alaska Highway em 2/6/1942 (USACE, domínio público federal), com o dia e o lugar na origem; cobre o plano 1 de s10 |
| alaska-house-chamber-2024-08-15-ifly6.jpg | s37 p1 | Commons (Ifly6) | aprovado | o plenário da Câmara do Alasca, em Juneau (2024, CC BY-SA 4.0), para 'the legislature'; sem aviso, porque a fala é sobre a regra de hoje |
| alaska-senate-floor-session-2020-03-24-brooks.jpg | s37 p2 | Commons (James Brooks, Flickr) | aprovado | senadores em sessão no plenário do Senado, em Juneau (2020, CC BY 2.0), para 'lawmakers could move their sessions' |
| juneau-assembly-2017-01-23-dais-je-penn.jpg | s56 p1 | Juneau Empire (Michael Penn) | aprovado | a Juneau Assembly na sessão de 23/01/2017, a da resolução da estrada (Michael Penn / Juneau Empire, midia.md §7.5) |
| juneau-access-rally-centennial-hall-2014-10-14-ktoo-canfield.jpg | s58 p4 (A) | KTOO (Jennifer Canfield) | trocar | mostra um lado só da briga (o comício contra a estrada), com os argumentos dele legíveis nos cartazes; a frase fala de uma briga que a voz não arbitra |
| juneau-access-rally-materials-centennial-hall-2014-10-14-ktoo-canfield.jpg | s58 p4 (C) | KTOO (Jennifer Canfield) | trocar | o quadro é uma ativista entregando papéis, de um lado só do comício; não mostra a briga que a frase diz |
| juneau-downtown-front-street-ca1987-gillfoto.jpg | s01 p1 | Commons (Gillfoto) | aprovado | o centro de Juneau de circa 1987 (Commons, CC BY-SA 4.0), o lugar que a fala nomeia, pela regra da foto de outro ano, com o aviso na tela |
| juneau-downtown-front-street-ca1987-gillfoto.jpg (o mesmo) | s62 p1 | Commons (Gillfoto) | trocar | a fala de s62 fala do voto de 1974 e não nomeia lugar: a rua de Juneau de ca. 1987 não mostra o voto, e a exceção da foto de outro ano não cobre esta frase |
| juneau-harbor-gastineau-channel-ca1899-pillsbury-cleveland.jpg | s06 p1 | Commons (Seattle Public Library, pela DPLA) | aprovado | Juneau pequena à beira do Gastineau Channel, circa 1899 (domínio público), o lugar que a fala nomeia, com o aviso do ano |
| juneau-city-1887-partridge-smu.jpg | s06 p2 | Commons (SMU Libraries) | aprovado | Juneau City em 1887 (domínio público), a vila que o acampamento de 1880 virou, com o aviso do ano |
| sitka-1906-case-draper-loc-2004672324.jpg | s07 p2 | Commons (Library of Congress) | aprovado | Sitka em 1906 (Case & Draper, domínio público), dentro da janela do plano; foto pequena no caso específico: impressa sobre a mesa, até 1,4×, nunca em tela cheia |
| anchorage-white-city-tent-camp-1915-07-01-pyatt.jpg | s09 p1 | Commons (Anchorage Museum) | aprovado | a cidade de barracas de Ship Creek em 1º/7/1915 (domínio público), o acampamento da ferrovia que virou Anchorage, com o aviso do ano |
| ladd-field-operations-hangar-1943-07-09-nara-204947418.jpg | s09 p2 (Fairbanks) | NARA (API v2) | aprovado | a Ladd Field, a base de Fairbanks, em 9/7/1943 (Força Aérea, domínio público federal), com o aviso do ano; cobre só a parte de Fairbanks do plano 2 |
| ladd-field-lend-lease-apron-1943-07-09-nara-204947416.jpg | s09 p2 (Fairbanks, reserva) | NARA (API v2) | aprovado | o pátio da Ladd Field em 9/7/1943 (domínio público federal), reserva do principal para a parte de Fairbanks do plano 2, com o aviso do ano |
| alaska-house-5th-legislature-1967-68-capitol-steps.jpg | s22 p1 | Commons (State of Alaska; vilda) | aprovado | a Câmara da 5ª Legislatura do Alasca (1967/1968), a instituição que a fala nomeia, com o aviso do ano e o crédito do Estado na tela (midia.md §7.5) |
| juneau-downtown-hillside-homes-aerial-ca1993-gillfoto.jpg | s23 p4 | Commons (Gillfoto) | aprovado | Juneau do alto, com as casas da encosta, circa 1993 (CC BY-SA 4.0), para os moradores que a conta indenizaria, com o aviso do ano |
| wasilla-downtown-2010-09-04-galvin.jpg | s35 p1 | Commons (Jay Galvin, Flickr) | trocar | um centro comercial na chuva sob 'voted no on Wasilla' lê-se como juízo sobre a cidade, e a origem a chama de 'The Red Neck capital of Alaska'; a voz do canal não arbitra |
| juneau-downtown-mount-roberts-1997-04-gillfoto.jpg | s49 p1 | Commons (Gillfoto) | aprovado | Juneau do outro lado do canal, em 21/4/1997 (CC BY-SA 4.0), a cidade dos eleitores que a fala nomeia, com o aviso do ano |

## Substituídos

Os vereditos antigos do s16 e o da camiseta ficam em `substituidos`, sem nenhuma outra mudança.
- Nos três primeiros, o motivo é o mesmo: a reconferência que eles pediam, ou deixavam aberta, foi feita.
- No quarto, veio a regra nova do Lucas que o veredito do 3º despacho dizia que o reabriria.
- No quinto, veio a resposta do Lucas à pergunta opcional do 4º despacho.

| arquivo | cena | veredito antigo | substituído | o que mudou |
|---|---|---|---|---|
| fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg | s16 p1 | reprovado (licença `nao_conferido`), do lote 1 | às 20:30 | a nota da série DOCUMERICA, lida na API da NARA, diz que os fotógrafos eram contratados da EPA: a licença passou a `falha`, e o reconferir fechou |
| fairbanks-university-toward-city-1973-08-documerica-cowals-550557.jpg | s16 p2 | reprovado (licença `nao_conferido`; contexto em falha), do lote 1 | às 20:30 | a mesma nota da série vale para esta foto (o item não foi lido): a licença passou a `falha`, e o veredito continua reprovado, sem reconferir |
| fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg | s16 p1 | reprovado (licença `falha`), do 2º despacho | às 21:15 | a segunda leitura (a página da NARA sobre o DOCUMERICA, a declaração de direitos dela no Flickr e a foto irmã) não diz quem ficou com os direitos dos contratados: continua reprovado, com os motivos refeitos |
| fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg | s16 p1 | reprovado (licença `falha`), do 3º despacho | às 00:10 de 28/09 | a exceção do DOCUMERICA (midia.md §7.3; Lucas, 27/09) e o "Unrestricted" do item no catálogo: a licença passou a `passa`, e o veredito, a aprovado |
| anchorage-stealers-1982-tshirt-back-asm-97-20-1-gelotte-adn.jpg | s28 p3 | aprovado (`aviso_de_ano: true`, `Photo from 2015`), do 4º despacho | às 01:14 de 28/09 | a regra nova do Lucas sobre a peça de acervo (identidade §6): `aviso_de_ano` passou a `false`, e o veredito continua aprovado. Licença, crédito, técnica e avisos de enquadramento não mudaram; a repetição foi refeita com a entrega |

## Para o Lucas pesar

Nada. Nenhum candidato saiu `pendente_lucas`.

- **A pergunta opcional do 4º despacho** (o aviso do ano na foto de peça de acervo) foi feita, e o Lucas respondeu: "Sem aviso, como documento (Recomendado)" (28/09/2026, 00:4x; identidade §6). A camiseta foi regravada neste despacho.
- **As respostas do Lucas de 27/09** que a pauta registra (`quarta_passada`):
  - o download da camiseta: "Sim, pode baixar (Recomendado)". A camiseta entrou pela licença do §7.5, e não por esse "sim", que é ao download;
  - a compra da alta resolução da Alaska State Library: "Não comprar (Recomendado)".

## Para reconferir no navegador do app

Nada.
- Nada ficou `nao_conferido`.
- A busca da foto do ano certo foi feita (`navegador-relato.md`), e o Lucas decidiu não comprar as fotos grandes da ASL. Juneau em 23/09/1905 (s06 p1) e Fort Richardson em 1940 (s09 p2) ficam fora do Juneau.

## Para trocar

**`pesquisa-imagens`**
- **s16:** resolvido.
  - O plano 1 fica com o DOCUMERICA (550551), aprovado no 4º despacho e entregue hoje em `_media/foto/s16/`, com a base da exceção e o crédito.
  - O plano 2 fica com o hotel de Chesi, já entregue.
  - O Rose Building (`trocar`) e o 550557 (`reprovado`) ficam no rascunho, como estão. Nada a retirar.
- **s28 p3:** resolvido pela camiseta, entregue hoje em `_media/foto/s28/`, sem o aviso do ano.
  - O recado da divergência 13 deixa de valer (abaixo). O `pesquisa-imagens` respondeu mesmo assim, no relatório e na pauta.
- **s58 p4** (A e C, do lote 1): continua sem aprovado. A busca pelo navegador não achou nada (alaskapublic.org, khns.org e Flickr), e o plano voltou ao `montador` (4ª passada).
- **s62 p1** (lote 1): "Alaska primary election August 27 1974 voters polling place photograph". O arquivo atual serve em s01 p1, onde está aprovado.
- **s35 p1:** resolvido desde o 2º despacho (Foubister, entregue).

**`pesquisa-pessoas`**: a retirada está feita. O Knowles de 2002 e as duas fotos de 2017 de s57 estão em `_media/_caca/_retirado/pessoa/`, com o `_RETIRADO.json`.
- **s48:** sem foto que encha o card, ele sai só com nome e cargo (identidade §5). O `trocar_por` continua: "Tony Knowles Governor of Alaska portrait photograph, 1995-2002, single subject, head and shoulders, square crop of 932 px or more without enlargement, date at the origin".
- **s57:** o card fica com o retrato de 2020, entregue.

**`pesquisa-documentos`**: a retirada está feita. A capa do ca9 está em `_media/_caca/_retirado/documento/`.
- A página 4 cobre o plano, com o rótulo.
- A decisão de 2009 continua NÃO ACHADA.

**Para o `regie advance` do `research`:**
- Na lista de 01:00 de 28/09, há 25 entregas, fora as provas `-prova` e os `_PROCEDENCIA.json`:
  - 19 em `_media/foto/`;
  - 2 em `_media/pessoa/`;
  - 4 em `_media/documento/`.
- Cada uma casa com um `aprovado` deste arquivo, pelo sha256. O panorama do s06 casa pelo `medido_no_download.sha256`.
- Nenhum `reprovado` nem `trocar` ficou numa pasta de entrega. O arquivo de s01 tem também o `trocar` de s62, e não foi entregue em s62.
- Pela regra do conferente (CLAUDE.md, "Os especialistas"), nenhuma entrega segura o passo.

**Avisos do conjunto da cena**, para o `regente-de-imagem` e o `montador`:
- **Planos de foto sem nenhum aprovado:** o s58 p4 e o s62 p1.
- **s16:** duas fotos aprovadas, entregues e diferentes nos dois planos de foto.
  - O plano 1 tem a aérea de 1973, com 3,3 s. O plano 2 tem a rua de 1972, com 3,766 s. As duas ficam abaixo dos 6 s de foto parada.
  - Na tela, ficam "Photo from 1973" no plano 1 e, no plano 2, o "1977" e o "Photo from 1972". A grafia e a posição são do `redator-de-tela` e do `editor-de-arte`.
- **s28:** o plano 3 tem a camiseta, com 2,733 s, sem aviso do ano. O plano 2, o estádio, está na lista de caça (banco pago), fora deste fluxo.
- **s09 p2** (lote 1): a parte de Anchorage continua NÃO ACHADO. O Lucas decidiu não comprar a foto da ASL (Fort Richardson, 1940).
- **s06 p1** (lote 1): fica o panorama de circa 1899, aprovado e entregue.
- **s56 p2** (lote 1): continua NÃO ACHADO.
- **s52 p1:** coberto pela página 4 do ca9, com o rótulo "upheld on appeal, 2011", que o Lucas aprovou (identidade §5, "Documento de outra data que atesta o fato, com rótulo").
- **s48:** o card de Knowles, sobre o mapa, sai só com nome e cargo.
- **s01 p1** (lote 1): a janela de 6,567 s passa dos 6 s de foto parada. A conta é do plano.
- **s48 p1 e s55 p1:** o card fica no ar 7,433 s e 6,934 s. A foto do card é parte de uma cena de mapa e de desenho, e não foto em tela cheia; a conta do tempo é da cena.
- **Respiro:**
  - Nenhum aprovado do 2º despacho tem movimento: são fotos, retratos e páginas paradas. Recebem mídia dele, com 6 s ou mais, as cenas s07, s16, s35, s41, s48, s52, s55, s57 e s58.
  - Os dois aprovados do 4º despacho também são fotos paradas. A s16 tem 12,133 s, de 160,067 a 172,2, e a s28 tem 9,966 s.
  - Nenhuma dessas cenas ganha respiro por essa mídia.

**Notas do 2º despacho, que continuam valendo, para quem entrega e para a cena:**
- **Aviso do ano na tela:**
  - s16, o hotel (1972-08);
  - s35 (6/6/2010);
  - s57, no card ("Photo from 2020").
  - Ficam sem aviso: Kiehl (2025), Walker (2016) e os documentos.
- **Créditos na tela:**
  - "Piergiuliano Chesi / Wikimedia Commons · CC BY 3.0", em s16;
  - "Murray Foubister / Wikimedia Commons · CC BY-SA 2.0", em s35.
  - Ficam sem crédito:
    - os retratos de Kiehl e de Gladziszewski (uso editorial);
    - o de Walker (domínio público federal);
    - os documentos (domínio público federal).
- **s52 p1:** o rótulo "upheld on appeal, 2011" é condição do veredito. Sem ele, a página se leria como a decisão de 2009, e sairia `trocar`.
- **s07 p1 e p4:** a página real vai à tela até 1,4× (1614x2401 px).
  - A página inteira na altura da tela pede 1,26×.
  - Mais perto que 1,4×, vai a recriação datilografada (identidade §5, "Documento antigo").
- **s58 p1:** o recorte do aviso da FHWA deixa fora o fim do aviso da FAA e o parágrafo de contatos, com nomes, telefones e e-mails de servidores.
  - O cabeçalho diz "July 30, 2018", perto do "JUNE 2018" da tela.
  - Mostre a linha "issued on June 18, 2018", ou deixe o cabeçalho fora.
- **s16, o hotel:** vai a 1,9× em tela cheia.
  - O JPEG é bem comprimido, mas não mostra blocos no tamanho da tela.
  - Os letreiros e o anúncio podem sair no enquadramento.
- **s35:** a cidade é a faixa da margem de lá. O recorte só dela pede uns 1,95×, e o quadro inteiro não amplia.
- **s41:** o rótulo partidário da página ("(D-Juneau)") não vai à tela. A pintura atrás e o broche na lapela são incidentais.
- **s55:**
  - O que tirar no enquadramento: as meias de Natal de papel ao fundo; o recorte pode ir um pouco à direita.
  - Para quem entrega: o `_media/foto/s55/_PROCEDENCIA.json` não tem a data nem o local. Estão neste veredito, lidos no DVIDS: November 15, 2016, em Togiak, Alaska.

**Notas do lote 1, que continuam valendo:**
- **s06 p1:** o arquivo tem 51 MP, e o `entregar` o reduz a 5120x1552. A tela cheia pede 1,39×.
- **s07 p2:** a foto é pequena. Vai impressa sobre a mesa, até 1,4×, nunca em tela cheia.
- **s22:** o crédito na tela é "State of Alaska / Alaska State Library". O `_PROCEDENCIA.json` não o terá, então ele vem do veredito.
- **Aviso do ano na tela:**
  - s01 (circa 1987);
  - s06 p1 (circa 1899) e p2 (1887);
  - s09 p1 (1º/7/1915) e p2 (9/7/1943);
  - s22 (1967/1968);
  - s23 (circa 1993);
  - s49 (21/4/1997).
- **Créditos na tela:**
  - Gillfoto / Wikimedia Commons · CC BY-SA 4.0, em s01, s23 e s49;
  - Ifly6 / Wikimedia Commons · CC BY-SA 4.0, em s37 p1;
  - James Brooks / Wikimedia Commons · CC BY 2.0, em s37 p2;
  - Michael Penn / Juneau Empire, em s56 p1.
- **O que pode sair no enquadramento:**
  - s01: a mulher reconhecível em primeiro plano, os letreiros e o neon de cerveja;
  - s37 p1: as placas de nome e o selo;
  - s56 p1: o "Rep. Justin Parish" da legenda, que um recorte na mesa tira.

## Divergências (ROUPA)

1. **Foto de outro ano.** Vários planos do espelho (sexta revisão) ainda dizem "foto de outro ano não entra".
   - A identidade §6, pela decisão do Lucas de 27/09, deixa entrar com o aviso do ano o lugar, a pessoa, o prédio ou a coisa que a fala nomeia.
   - Segui a marca, e o `montador` precisa refazer esses textos. O s16 é um deles: "sem foto de 1977, o plano muda de regime".
2. **Página do item na NARA.** O ofício §7 pede ler a página de origem de cada item, e o CLAUDE.md proíbe, por programa, as páginas do catálogo da NARA fora da API.
   - Na Ladd Field e no Knowles, valeu a licença medida pela API e gravada no manifesto.
   - No DOCUMERICA, o Claude central leu a API (o item e a série) e, no 3º despacho, o site da NARA pelo navegador do app. A exceção do 4º despacho pede o `useRestriction` do item no catálogo, e ele veio da API (21:55:44Z).
3. **Reconferência sem o Lucas.** O ofício §6 mudou em 27/09 e já diz que a mensagem fica `null` quando o Lucas não acompanhou.
   - O §7, no item "Site que recusa leitura automática", ainda diz "com o Lucas vendo".
   - Vale o CLAUDE.md ("O navegador do app, sem o Lucas acompanhando"): o Claude central lê sozinho.
4. **Crédito do s22.** O `entregar` não leva crédito ao `_PROCEDENCIA.json` da foto do governo do Alasca, então o crédito viaja no veredito, por decisão do Claude central.
   - O autor ("State of Alaska") vem do Commons.
   - "Alaska State Library" vem do midia.md §7.5 e do Claude central, porque o vilda não foi lido.
5. **A reconferência do s16 sem a mensagem do Lucas: resolvida.** O ofício §6 mudou em 27/09: grava-se `mensagem: null` quando o Lucas não acompanhou, e o texto copiado, com a URL e a hora, é o que vale.
   - As duas faltas que o 3º despacho anotou foram corrigidas no `reconferir-s16-documerica.md`: a hora da foto irmã (23:52:13Z) e o texto do The Commons, agora copiado.
6. **Documento antigo na pauta de documentos.** O `pauta-documentos.json` ainda diz que os estatutos de 1900 e 1912, abaixo de 1.600 px, saem `pendente_lucas`.
   - A regra do Lucas de 27/09 (identidade §5, "Documento antigo") já decidiu: a página real até 1,4×, e acima disso a recriação.
   - Segui a marca, e o `pesquisa-documentos` precisa refazer a nota.
7. **O retrato de Kiehl.** O `pauta-pessoas.json` diz que quem decide a régua dele é o Lucas. Ele já decidiu (identidade §5: "O do senador Kiehl entra."), e segui a marca.
8. **O retrato do Walker em `_media/foto/`.** O card de s55 é retrato, mas o arquivo foi entregue em `_media/foto/s55/`, pelo `entregar` do `buscar-midia`, e não em `_media/pessoa/`.
   - O casamento pelo sha256 funciona nas duas pastas.
   - A procedência dele não tem a data nem o local, que li no DVIDS.
9. **O rótulo de documento de outra data: resolvida.** O Lucas decidiu em 27/09 (identidade §5, "Documento de outra data que atesta o fato, com rótulo"): "Sim, com o rótulo (Recomendado)". Sem o rótulo, a página não entra.
10. **O aviso do ano em foto de peça de acervo: resolvida.** O Lucas decidiu em 28/09 (identidade §6, "Peça de acervo fotografada depois, sem aviso"): "Sem aviso, como documento (Recomendado)". A camiseta foi regravada com `aviso_de_ano: false`.
11. **"Grande" em foto vertical.** A identidade §6 chama de grande a foto de 1.600 px de largura ou mais. O ofício §5.3 dá à foto do Estado ou de jornal "a maior versão que a origem oferece, sem piso".
    - A camiseta tem 1440x2156: fica abaixo de 1.600 px na largura, mas tem 2.156 px na altura, que enche a altura do 4K a 1,0×.
    - Segui a tabela do ofício. A régua de largura mede se a foto enche a tela na horizontal, e uma foto vertical não a enche de jeito nenhum.
    - Se o Lucas quiser a régua de largura também aqui, a camiseta sai `trocar`. O plano vira desenho, ou a versão grande pedida ao museu, que pede permissão escrita.
12. **A procedência do DOCUMERICA: resolvida na entrega.** O manifesto do 550551 diz "Public domain" e `exige_credito: false`, a leitura do Commons.
    - O `_PROCEDENCIA.json` de `_media/foto/s16/` leva a base da exceção, o `useRestriction`, o texto da NARA e o crédito, corrigido pelo `pesquisa-imagens` às 03:52Z de 28/09.
    - O manifesto do rascunho continua com a leitura do Commons, e não é ele que a cena cita.
13. **A busca da foto do ano da camiseta: deixa de valer.** A busca que a identidade §6 pede é a da foto de outro ano.
    - Pela regra de 28/09, a foto da peça tirada depois entra como a página de documento, e não como foto de outro ano. A busca de uma foto de 1982 da peça não se aplica a ela.
    - O `pesquisa-imagens` respondeu ao recado mesmo assim (`research-imagens.md`; na pauta, o `onde_a_foto_do_ano_foi_procurada` do item do s28). Não houve busca à parte, e as duas portas onde ela estaria (o museu e o arquivo do jornal) recusam robô.
14. **O ano no plano 1 de s16.** O espelho diz "sem ano na tela neste plano: o 1977 vai ao plano 2". O aviso `Photo from 1973` fica na tela todo o tempo da foto (identidade §6), e a opção que o Lucas escolheu o nomeava.
    - Segui a marca: o aviso não é o "1977" de que o espelho fala.
    - O `montador` pode ajustar o texto.
15. **O `aviso_de_ano` no contrato.** O contrato, §2.1, ainda define o campo só pela data: "`true` quando a foto é de outro ano que o do fato da frase".
    - O ofício, §5.1, e a identidade §6 já tiram dele a peça de acervo fotografada depois.
    - Segui a marca: `false`, com a regra em `aviso_de_ano_regra`. A frase do §2.1 pode ganhar a exceção; o ofício é do canal e se edita aqui.
16. **Como o JSON foi regravado.** O contrato, §5, dá o `Write` para as duas saídas e o `python` só para ler e validar JSON. Mas o `Write` regrava o arquivo inteiro de uma vez, e este JSON tem 248 KB: arriscava sair cortado.
    - Emendei só os trechos que mudam, por um script Python no scratchpad da sessão, fora do canal. Ele gravou só este JSON e uma cópia de segurança do anterior, em `out/juneau/_tmp/conferencia/conferencia-midia.antes-despacho5.json`.
    - Antes de gravar, o script conferiu o sha256 do arquivo e que só o veredito da camiseta mudava. O `.md` foi pelo `Write`.
    - O §5 pode deixar o `python` gravar as duas saídas; é decisão de quem edita o ofício.

**Nota do despacho (o 5º):**
- A lista de `out/juneau/_media/`, pelo sha256 de cada arquivo:
  - ao começar, às 01:00:36 de 28/09 (Brasília), em `_media-antes-despacho5.txt`: 252 arquivos, sha256 da lista `4a6a45a7…`;
  - depois de gravar o JSON, às 01:14:09: os mesmos 252 arquivos e o mesmo sha256 da lista, sem nenhuma diferença (`_media-depois-despacho5.txt`);
  - depois de gravar este `.md`, de novo, em `_media-depois-despacho5-fim.txt`. O resultado vai na resposta do despacho.
- Entre o fim do 4º despacho (00:35) e o começo deste, `_media/` mudou fora de mim, de 249 para 252 arquivos, como a 5ª passada do `pesquisa-imagens` registra:
  - a camiseta e o `_PROCEDENCIA.json` dela, entregues em `_media/foto/s28/`;
  - o 550551, entregue em `_media/foto/s16/`, com o `_PROCEDENCIA.json` de lá regravado.
  - Nada mais.
- As listas dos despachos 3 e 4, relidas: em cada um, a do começo, a do meio e a do fim são iguais (241 e 249 arquivos). A nota do 3º despacho saiu deste `.md` no 4º; o resultado fica no JSON (`media_sem_mudanca.despacho_5`).
- A cópia reduzida que olhei ficou em `out/juneau/_tmp/conferencia/s28-camiseta/`, fora de `_media`.
- O JSON, conferido depois de gravado:
  - é válido, em UTF-8 sem BOM;
  - os 34 vereditos que ficam e os 4 substituídos antigos estão idênticos aos do arquivo do 4º despacho (sha256 `cfb62c0e…`), pela impressão digital do JSON canônico de cada um (`_vereditos-antes-despacho5.tsv`);
  - o veredito da camiseta do 4º despacho está em `substituidos`, idêntico, mais `substituido_em`, `substituido_por` e `razao_da_substituicao`;
  - no veredito novo, mudaram só:
    - `aviso_de_ano`, e `aviso_de_ano_regra`, que é novo;
    - o 2º motivo do contexto e o 1º da repetição;
    - o `motivo` e o `o_que_viu`;
    - os `arquivos_olhados`, com três a mais;
  - o laudo bate com os vereditos, e as checagens do contrato §3 passam.

**Nota do despacho (o 4º):**
- A lista de `out/juneau/_media/`, pelo sha256 de cada arquivo:
  - ao começar, às 23:43:16 de 27/09 (Brasília), gravei a lista em `_media-antes.txt`, o nome que o contrato §3 dá. Ela ficou por cima da lista do 1º despacho (213 arquivos), que o registro dele cita. O 1º despacho registrou o diff limpo, e a lista final dele, `_media-depois.txt` (213 arquivos), continua lá;
  - às 23:44:04, de novo, em `_media-antes-despacho4.txt`: 249 arquivos, sha256 da lista `68ff4e4c…`, igual à de 23:43;
  - depois de gravar o JSON, às 00:27:08 de 28/09: os mesmos 249 arquivos e o mesmo sha256 da lista, sem nenhuma diferença (`_media-depois-despacho4.txt`);
  - depois de gravar o `.md`, de novo, em `_media-depois-despacho4-fim.txt` (00:35:03): sem nenhuma diferença, relida no 5º despacho.
- Entre o fim do 3º despacho e o começo do 4º, `_media/` mudou fora de mim, de 241 para 249 arquivos, como a 4ª passada do `pesquisa-imagens` registra:
  - a camiseta e o manifesto dela;
  - as duas entregas (o hotel de Chesi e a Foubister, com os `_PROCEDENCIA.json`);
  - as quatro retiradas, com dois `_RETIRADO.json`;
  - cinco `_PROCEDENCIA.json` regravados.
- O JSON, conferido depois de gravado:
  - é válido, em UTF-8 sem BOM;
  - os 33 vereditos que ficaram e os 3 substituídos antigos estavam idênticos aos de 21:15, pela impressão digital do JSON canônico de cada um;
  - o veredito do s16 p1 do 3º despacho foi para `substituidos`, idêntico, mais `substituido_em`, `substituido_por` e `razao_da_substituicao`;
  - o laudo batia com os vereditos;
  - as checagens do contrato §3 passavam.
