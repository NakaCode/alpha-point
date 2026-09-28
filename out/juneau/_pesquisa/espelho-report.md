# Espelho do Juneau: o report do montador (§2.3 do contrato)

- **Vídeo:** juneau, "Alaska Voted for a New Capital in 1974. It Was Never Built.", passo `mirror`; a décima primeira revisão
  é o re-espelho do passo `research`, e a décima segunda, no passo `art_direction`, grava as respostas do Lucas ao conceito
  visual (§0i).
- **Montado em:** 26/09/2026. **Revisado em:** 27/09/2026, depois dos três verificadores (tempo, editorial e completude),
  de novo no mesmo dia, depois da segunda rodada deles (§0b), uma terceira vez, depois da terceira rodada (§0c), uma
  quarta, depois da quarta rodada (lentes geo-fato, editorial e tempo; §0d), e uma quinta, depois da quinta rodada (as mesmas
  três lentes; §0e), uma sexta, com as decisões do Claude central sobre o que sobrou (§0f), e uma nona, com as quatro
  decisões do Lucas de 27/09 e uma do Claude central para o regente-de-imagem (§0g). **Revisado de novo em 28/09/2026**, na
  décima primeira revisão: o re-espelho que a pesquisa de mídia devolve, com as decisões do Lucas de 27 e 28/09 (§0h; o
  despacho do research a chama de sétima). **E na décima segunda, também em 28/09**, com as quatro respostas do Lucas ao
  conceito visual do diretor-de-arte e a série diária de s54 (§0i). O corpo do report, do §1 ao Anexo, está atualizado até ela.
  O agente `montador` ainda não carrega nesta sessão. A sessão seguiu o manual inteiro (`.claude/agents/montador.md`:
  ofício e contrato), a roupa `marca/agentes/montador.md` e o `CLAUDE.md` por cima.
- **Estado do material:** 1, do zero, num canal faceless. Não há imagem de origem, então o único veredito é ADICIONAR.
  Todo o tempo está coberto e nenhuma cena tem `anima:false`.
- **Entregue:**
  - `out/juneau/espelho.json` (61 segmentos);
  - `out/juneau/_pesquisa/conferir-espelho.mjs`, o conferente que refaz as provas abaixo lendo só o espelho, as fontes
    e a contagem de quadros do master. Ele não guarda tempo nenhum, então o espelho continua sendo a fonte única de
    timing (ofício §7.1);
  - este report.
- **`_analise/segmentos.json`: não se aplica.** Esse arquivo é a decupagem enriquecida, e ela só existe no fluxo "já editado por
  terceiros" (contrato §2.2). O Juneau não tem gravação de terceiros nem bruto: o master é a narração sobre tela preta. O
  `cut_detect` foi dispensado (`out/juneau/linha.md`), o `decupador` não foi instalado e não há analisador que produza o
  arquivo. Por isso as checagens 2, 3 e 4 do §3 também não se aplicam.
- **Nada foi commitado.** Não rodei `regie advance`, não usei navegador, não busquei mídia e não gastei crédito.

## 0 · A primeira revisão de 27/09: o que os verificadores acharam e o que mudou

Esta seção é o registro da primeira revisão e fica como estava. Onde a segunda revisão mudou alguma coisa, vale o §0b,
e a linha daqui leva a nota "(segunda revisão: …)".

Cada achado foi reproduzido no disco antes do conserto. O conferente novo foi provado contra uma cópia do espelho de 26/09
(`--espelho=<cópia>`): ele reprova a cópia com 117 falhas, entre elas o vão de 1 quadro em s62, e passa o espelho novo.

### 0.1 · Os médios

| # | Achado | Reproduzido | O que mudou |
|---|---|---|---|
| M1 | A borda s62→s63 (646,05) e o fim (666,05) caíam a meio quadro, e o espelho fechava 1/60 s antes do vídeo do master | **Sim.** Com a conta do próprio pipeline (`renderizar.mjs`: `Math.round(dur*30)`; `xml-premiere.mjs`: `Math.round(s*30)`), s62 fechava no quadro 19.381 e s63 abria no 19.382: 1 quadro de vão, o único nas 63 cenas. O ffprobe do master dá 19.982 quadros (666,067 s) | s62 passou a durar 4,2 s (126 quadros). s63 abre em **646,067** (quadro 19.382) e dura 20 s, até **666,067** (quadro 19.982), que é o fim do vídeo do master. As duas têm `_quadros`. A borda nova fica no silêncio: a última palavra acaba em 645,81, e de 645,81 a 646,067 a média é −68,8 dB (ffmpeg). O áudio acaba em 666,05, 1/60 s antes do vídeo, como no master |
| M2 | O report dizia que a frase do FSEIS com "continent" estava no espelho, e não estava | **Sim.** 0 ocorrências de "largest", "North American" e dos ids mec-01.1, doc-21.1 e esc-15.1 | s03 ganhou `_citacao` com o texto literal, a fonte (FSEIS 2018, ES-2) e a nota de que é **opcional** no dossiê: vai, se for, como crédito da paráfrase do narrador, atribuída à fonte e recriada. Entrou também em `needs.dados` e no `motivo`. O §1 abaixo foi corrigido |
| M3 | A semente de s58 ("a segunda conta recusada") põe um recusador que o dossiê descartou | **Sim.** `roteiro-editor.md`, decisões, "descartada": "two bills Alaska refused to pay" | A semente virou **"a estrada também encontra o preço"**, que segue a fala ("the road ran into a price too"). O `motivo` diz por que não há recusador. O conceito da tese já não tinha sujeito que recusa |
| M4 | s54 atribuía ao FSEIS "Alaska North Slope" e pedia uma série mensal que achata os extremos | **Sim.** O fundamento dá "preço diário West Coast" (Graph 2-1, "Daily West Coast Oil Price, 2012-2016"). "North Slope", "ANS" e "EIA" não aparecem no dossiê para 2013–2016 | `needs.dados` reescrito: o preço como a fonte o nomeia; a linha só com a série **diária** do mesmo preço, de fonte primária, reproduzindo os dois extremos (> $116 e pouco mais de $26) e a queda acima de 75%; sem ela, só **os dois pontos com as datas**, sem linha interpolada. O gráfico do FSEIS não vai à tela |
| M5 e M7 | A dispensa de registro real era por rótulo ("placar", "série"); só s17 e s38 escreviam "isto não foi filmado"; as candidatas do laudo do `qc-piso-real` ficaram sem resposta; o report dizia que a fala não nomeava a campanha e a eleição de 1982, e ela nomeia; as balsas de s49, s52 e s55 e o petróleo de s54 ficaram sem pedido | **Sim**, nos três pontos | (1) **Toda cena sem plano de registro tem agora a linha `REGISTRO (§10.1):`**, em uma de quatro formas: "isto não foi filmado" e o porquê (16 cenas), satélite de geometria real (8 mapas), "FALTA DECLARADA" quando pode haver registro e não pedi, com o motivo (4 cenas: s11, s41, s55, s57), ou a peça pedida (s26). O conferente cobra a linha. (2) **Novos planos de registro**, com termos por plano: as eleições de 1978 (s20), 1982 (s29), 1994 (s35) e outubro de 2000 em Juneau (s49); a campanha de 1982 contra a mudança (s31, plano 5); a balsa existente (s52, plano 2); Fairbanks de época (s16) e o legislativo de 1981 (s22). (3) A resposta a cada candidata do laudo está no §5.1 |
| M6 | O aviso da cópia arquivada cobria só os boletins de 8 cenas; os folhetos e o boletim de 1976 ficaram sem aviso | **Sim.** Pelo `fundamento.json`, todas as fontes da Divisão de Eleições (doc-05 a doc-20, doc-28, mec-05 a mec-08, evt-09 a evt-12) têm `url_acessada` no web.archive.org. O `volateis-conferidos.md` conferiu no navegador só o HB 3, o AS 44.06 e as petições | O aviso padronizado ("CÓPIA ARQUIVADA — NÃO CONFERIDO…") está no `needs.dados` (segunda revisão: em `_fonte_arquivada`, §0b B12) de **22 cenas** (s01, s02, s05, s11, s12, s15, s16, s17, s18, s19, s20, s22, s23, s25, s29, s30, s32, s33, s34, s35, s39, s60), e também nas `_citacao` (s05, s18, s34), nas `_pessoas` (s05, s25) e nos `_documentos` dos folhetos. A pendência no §4.3 e em `_decisoes_pendentes` virou "boletins **e** folhetos". O conferente cobra o aviso em toda cena que cita boletim ou folheto (nona revisão: superado; a cópia vale como fonte, e o aviso traz a data da captura, §0g) |
| M8 | s24 usava `split`, fora do cardápio do canal | **Sim.** A roupa do montador §3 não tem `split`; a do editor-de-arte §6 manda devolver | s24 virou **REGISTRO** (`footage`) em dois planos: Willow (do chão), depois o Capitólio (do nível da rua). O binário se faz no corte entre os dois lugares. O conferente reprova `modo` fora do cardápio |
| M9 | O pedido de mídia por plano está em `midia_termos`, e o `pesquisa-imagens.md` §1b diz que esses campos "não existem mais" | **Sim.** `.claude/agents/pesquisa-imagens.md`, linhas 279–281 | O espelho ganhou `_despacho_research`: a lista das 39 cenas com pedido, plano a plano, marcando as 10 que o §1b perde se for lido ao pé da letra (segunda revisão: os retratos saíram para uma lista própria, e as que o §1b perde são 6; §0b M6), e as listas "mesmo lugar, clipes diferentes" e "mesmo arquivo". O §8 abaixo diz à sessão central o que pôr no despacho. Está em `_decisoes_pendentes` como divergência de contrato para o Lucas e o Mateus |

### 0.2 · Os baixos

| # | Achado | O que mudou |
|---|---|---|
| B1 | O conferente isentava a borda da cauda da grade e não conferia o fim | A isenção saiu. O fim da última cena é conferido contra os quadros do master (ffprobe). Entraram a simulação do arredondamento do pipeline, `_quadros` em toda cena, a grade e a pausa nas bordas de plano, `_virada`, semente, `REGISTRO (§10.1)`, aviso da cópia arquivada, cadeia, cardápio de `modo` e termos por plano |
| B2 | s07, s58 (plano 4) e s24 ficavam fora da lista do `pesquisa-imagens` lida ao pé da letra | s24 virou `footage`, que entra. s07 e s58, e outras oito, estão em `_despacho_research` com `fora_do_1b`. A frase do §8 foi corrigida (segunda revisão: são seis, sem os retratos; §0b M6) |
| B3 | A âncora de s63 era prosa, e o `motivo` sugeria um conteúdo | `ancora: ""`. A nota foi para `_borda`. O `motivo` diz que a cena **não se desenha, não se pede e não se renderiza** até o Lucas decidir (segunda revisão: **errado**, deixaria 20 s pretos; a cena agora é fundo provisório renderizado, §0b M1) |
| B4 | Evento datado com imagem que podia ser de outro ano (s22, s16 plano 2, s09) | s22 pede o legislativo de 1981 (a 12ª Legislatura, 1981–1982) e, sem ele, muda de regime num re-espelho. s16 pede duas fotos de época de Fairbanks, e a sigla virou PRANCHA no plano 3. Em s09, a data de cada foto vai no crédito e não se confunde com o 1914 do dado (superado na sexta revisão: a regra do crédito saiu; §0f) |
| B5 | s33 não dizia qual clipe ancora; s03 ancorava o aéreo de s01 com s02 no meio | Em s33, o clipe do plano 2 (Wasilla na Parks Highway) é o que ancora, e "the ballot carried no price" é texto sobre ele. Em s03, `_ancoragem` declara a reaparição da mesma imagem depois de s02 |
| B6 | s52 mostraria a decisão de 2011 sob uma frase sobre 2009 | O plano 1 pede a decisão da corte distrital de 13/02/2009. A de 2011 só entra rotulada "upheld on appeal, 2011" |
| B7 | A promessa E era paga na pergunta (s42) | E abre em s03 e s04, é paga em s44 e fecha em s59 (tabela do §6) |
| B8 | Só 5 cenas tinham `_virada` | `_virada` é sempre uma lista, e está em todas as 18 cenas que viram por dentro (22 viradas) |
| B9 | O palco do Lynn Canal entrava 4 vezes em 71 s | **s44 absorveu s45 e s46**: um palco de 36,1 s, com 7 planos, em que o registro do fiorde entra ancorado no eixo do Lynn Canal e volta para ele. Os ids s45 e s46 morreram e não se reemitem (ofício §8). Nenhum artefato em disco os citava: não há `conceito-visual.json`, `graphics/`, render nem tabela de cenas no banco. s48 (2000) e s50 (2006) continuam cenas próprias, porque mudam de tempo e têm registro ou dado entre elas (§6.7: "muda de lugar, de tempo ou de assunto → cena nova") |
| B10 | s40 cobria três objetos num plano de 8,9 s | Partido em "proposed repealing" (422,733): Anchorage, depois o projeto e a lei que ele revogaria, depois o estado em setembro de 2026 |
| B11 | Figura semântica ausente em s12, s39 e s51 | Declarada nas três (voto; voto; valor monetário e contagem) e em s15 |
| B12 | s19, s23 e s32 diziam "recriado" de saída, sem `_documentos` | Ganharam `_documentos` do folheto (a mesma peça de s02 ou s16) e a regra "original com permissão clara; sem ela, recriado". s36 também |
| B13 | Retratos e mascotes só no nível da cena; a taxa de 54% misturava tudo | O termo do retrato foi para o plano do card em s05, s25, s26, s27, s31, s41, s48, s55 e s57. A composição da taxa está no §4.4 (segunda revisão: os planos de retrato levam `_pedido_a: pesquisa-pessoas` e vão só à lista `retratos`, §0b M6) |
| B14 | Sem `_grafias`; FRANK × Frank | `_grafias` em 42 cenas, só ortografia, tirada do texto aprovado. A prosa do espelho passou a escrever **Frank**, como o texto aprovado; a caixa alta fica com o redator-de-tela. "World War Two" (texto aprovado) × "World War II" (AP) está declarado em s09 |
| B15 | Sementes de 7 palavras em s17 e s30 | "só a conta abre a porta" (s17) e "o impresso não se discute" (s30). O conferente cobra o teto de 6 |
| B16 | s50 e s51 sem marca de cadeia; contagens desencontradas | Toda cena que abre, paga ou fecha uma promessa tem `_cadeia` (o conferente cobra). As viradas estão contadas no §4.1. `_decisoes_pendentes` e o §5.7 têm a mesma lista |
| B17 | O mesmo termo de busca em s42 e s59, e em s01 e s24 | Termos distintos: s42 é a estrada seguindo, s24 é o Capitólio do nível da rua, e o Willow de s24 é do chão, não do ar como o de s21. O conferente reprova termo repetido entre cenas sem repetição declarada |

Além dos achados, s55 foi partido em três planos, um por objeto (Walker e o termo, o significado do termo, a causa).
(Segunda revisão: dois, porque o da causa tinha 1,9 s de texto; §0b B5.)

## 0b · A segunda revisão de 27/09: o que os verificadores acharam e o que mudou

Cada achado foi reproduzido no disco antes do conserto (a prova de cada um está na coluna do meio). Os consertos foram
aplicados por um script que lê o espelho, muda só os campos citados e regrava no mesmo formato. O conferente
(`conferir-espelho.mjs`) ganhou as provas desta rodada e foi provado contra a cópia do espelho de antes dela: reprova a cópia
com **59 falhas** (a cauda, o `convocado_por` de s60, os planos de texto de s12, s30, s55 e s60, os avisos e as figuras em
`needs.dados`, o crédito opcional de s03, a instrução de s54, as bandeiras de s03 e s44) e passa o espelho novo.

Dois pares de achados eram o mesmo defeito visto por duas lentes: M1 e M5 (a cauda) e B5 e B14 (texto no ar); B7 e B10 (s26)
também. Cada par teve um conserto só.

### 0b.1 · Os médios

| # | Achado | Reproduzido | O que mudou |
|---|---|---|---|
| M1 e M5 | s63 "não se desenha, não se pede e não se renderiza", citando a roupa §7 do montador, que não diz isso; os consumidores têm um provisório | **Sim.** Roupa do editor-de-arte §7: "Até lá, a cena é fundo: sem texto novo, sem herói… `data-qc-sem-heroi`". Roupa do regente §0: beat único `continua`, `forca: livre`, "provisório". Roupa do qc-visual §6: julga como fundo, e buraco preto reprova. Roupa do montador §4: "Nunca deixe a janela sem segmento (sai preto)". A roupa do montador §7 fala de transições, CTA e trilha | O `motivo`, a `tese`, o `titulo`, o plano, `_pendente` e `_decisoes_pendentes[0]` dizem agora: o conteúdo definitivo, a trilha e o CTA são DECISÃO DO LUCAS PENDENTE; até lá, a cena é **executada e renderizada como fundo provisório**, nos termos das três roupas. Nenhuma cena fica sem render. `_creditos` guarda a regra da linha do Shutterstock na faixa de crédito desta última cena (identidade §7; midia.md §3.4). O §4.6 e o §5.3 foram corrigidos. O conferente reprova a cauda que não é fundo provisório |
| M2 | s44 paga a promessa E e não pede a estrada nem Cascade Point | **Sim.** O `needs.geo` de s44 tinha 16 camadas, nenhuma delas `estrada-juneau-cascade` ou `cascade-point`, que existem no `pauta-geo.json` e estão em s03 e s59 | s44 pede as duas (`_existe: true`, `© OpenStreetMap contributors`). O plano 1 põe no palco a estrada que existe e o anel de Cascade Point. O plano 3 fazia os dois corredores partirem do fim dela, e isso era **falso** para o Taku (terceira revisão, §0c A1: só o do Lynn Canal segue para o norte a partir do fim da estrada; o do Taku sai de Juneau para o leste, pelo vale do rio). O `motivo` cita o livro-razão ("paga em p6 explica por que ela para ali") e `_repeticao_intencional` declara a volta da imagem de s03 |
| M3 | s59 pedia "Echo Cove", e a estrada acaba em Cascade Point | **Sim.** `fundamento.json` › divergências, "Onde termina a estrada de Juneau": Cascade Point fica 3 milhas além de Echo Cove (FSEIS p. 1-8), e o trecho Echo Cove–Cascade Point só abriu ao tráfego em 2011 (`datas`) | Termos novos: "Cascade Point Juneau end of Glacier Highway footage" e "Glacier Highway end at Cascade Point aerial footage". A `midia_necessidade` exige que a descrição do item nomeie Cascade Point e explica o fim antigo (Echo Cove, antes de 2011). Clipe só de Echo Cove entra rotulado Echo Cove, não ancora no anel, e a virada vira corte seco (`_virada`) |
| M4 | "Lugares no mapa" de p2 ignorado: as rodovias de s09 e a mudança Sitka → Juneau de s07 só em foto | **Sim.** `roteiro.json`, material obrigatório de p2: "Lugares no mapa: Sitka → Juneau; … a Alaska Highway e a Glenn Highway ligam Anchorage à rede". Nenhum `motivo` de s07 ou s09 o citava | **s10 abre agora na frase das rodovias** (a borda s09/s10 foi de 89,267 para 85,167, que já era borda de plano): a foto da obra da Alaska Highway (1,766 s) encolhe para o traçado no mapa (ofício §6.7) em "Anchorage", as rodovias ligam Anchorage à rede do continente (o contraponto de s03), e o dado de população pousa no mesmo palco. O `modo` de s10 virou `foto`, o regime de abertura. A camada pede só a Glenn e a Alaska Highway, e não a `rede-rodoviaria-alasca` de s33, que poria a Parks Highway (1971) numa frase sobre os anos 1940. **s07** tem mapa no plano 3: a foto de Sitka encolhe para o ponto de Sitka e a câmera vai a Juneau ("The governor's office moved to Juneau in 1906"). O registro de Juneau em 1906 saiu: o plano de 3,1 s não comporta mapa e foto, e Juneau de época está em s06. s09 diz por que Ship Creek e as bases ficam em foto: Anchorage e Fairbanks são os pontos que o mapa de s08 acende logo antes e o de s10 retoma logo depois. Os ids s07, s09 e s10 são os mesmos (ofício §8) |
| M6 | Os retratos iam ao pesquisa-imagens e ao pesquisa-pessoas; o §8 inflava a perda do §1b | **Sim.** Roupa do pesquisa-imagens, linha 193: "Retrato de pessoa citada é do `pesquisa-pessoas`"; linha 155: "retrato" está entre as recusas da caça. s05, s27, s41, s48 e s57 só estavam na lista por causa do retrato | Os 13 planos de retrato levam `_pedido_a: "pesquisa-pessoas"` e `_pessoa`. `_despacho_research` tem agora `cenas` (só ao pesquisa-imagens, **sem retrato**: 34 cenas) e `retratos` (só ao pesquisa-pessoas: 10 pessoas, com cenas e planos, cargo da fonte, época, fonte e o **mesmo arquivo** de Harris em s05 e s25 e de Stoops em s26, s27 e s31). As cenas fora do §1b são **6**: s07, s23, s26, s44, s52 e s58. O conferente reprova retrato na lista do pesquisa-imagens e plano com termo fora dela. O §8 foi corrigido |
| M7 | A cadeia de C e de B estava incompleta | **Sim.** Livro-razão: C paga em p6 com "a Justiça, 'No Action' com o petróleo em queda e o voto local dividido"; B paga em p4 com a "estimativa de 1982 impressa na cédula e recusada". s49, s52 a s56 e s29 não tinham `_cadeia` | C › paga: s44, **s49**, s50, s51, **s52**, **s53**, **s54**, **s55**, **s56**, **s57**, s58, com a parcela de cada uma em `nota`. s57 entrou porque é a voz do lado vencido no 6 a 3, e a fala dela é a "estrada até outra balsa". B › paga: s19, s20, s23, **s29**, s30, s35. Todas com `_cadeia`. O §6 foi corrigido |

### 0b.2 · Os baixos

| # | Achado | O que mudou |
|---|---|---|
| B1 | O `convocado_por` do plano 2 de s60 terminava em "In", do plano 3 | **Reproduzido** (In@620,67 é do plano 3). Com a fusão de B5, o plano 2 de s60 começa em "The question changed." e o `convocado_por` é esse. O conferente confere agora, plano a plano, que o `convocado_por` são as primeiras palavras do próprio plano: os 140 passam |
| B2 | s51 dava a base dos $680 milhões como 2015 | **Reproduzido** (`fundamento.json`, escopo "ambígua entre 2015 e 2016"). O `needs.dados` e a `_figura` dizem que a base é ambígua (p. 1-4 × p. 2-8) e não vai à tela sem o verificador-de-fatos |
| B3 | O report tirou da lista a pergunta do número sobre o registro, sem decisão do Lucas | **Reproduzido.** A pergunta voltou a `_decisoes_pendentes` como leitura do montador, a confirmar pelo diretor-de-arte e pelo Lucas, com as oito cenas (s01, s29, s31, s33, s35, s51, s53, s56). O §5.1 não a chama mais de erro resolvido |
| B4 | A paleta, lida na ordem, pintava o SIM com a cor do protagonista | **Reproduzido.** A paleta e o `_nota_cor` de s12 dizem agora: NÃO (a capital fica em Juneau) = `--destaque`; SIM (a mudança) = `--contraparte`, como proposta pendente do Lucas |
| B5 e B14 | Cinco planos de texto abaixo dos 2,0 s de texto no ar | **Reproduzido** (s12 p3 1,634 s; s30 p2 1,6 s; s55 p3 1,866 s; s60 p2 1,7 s e p4 1,9 s). s30 ficou com um plano (a linha impressa, 6,9 s); s55 juntou o significado e a causa num bloco (4,8 s; superado na oitava revisão: a causa entra quando a voz a diz, a 1,853 s do corte, e é conflito para o regente-de-imagem, §0f); s60 ficou com um plano por pergunta (6,5 s e 7,6 s). Em s12, o placar de Fairbanks fica no palco durante o plano 4 (`_texto_no_ar`). O conferente reprova plano de não-registro abaixo de 2,0 s sem `_texto_no_ar`, e o §5.2 mede o item |
| B6 | s23 dispensava o lugar dos moradores de Juneau | **Reproduzido.** s23 tem um plano 4 de registro: Juneau por volta de 1982 em "to compensate Juneau residents" (2,266 s), com a data e o local conferidos; sem registro de época, o plano volta a dado num re-espelho |
| B7 e B10 | s26 plano 2 juntava o card de Stoops e a Football Fannie | **Reproduzido.** Partido no quadro antes de "answered" (267,867): o card de Stoops (3,034 s) e a Football Fannie (3,366 s), cada um com o seu termo |
| B8 | O grifo de s36 caía na paráfrase do narrador | **Reproduzido.** s36 e s61 têm `_citacao` com a frase literal da AS 44.06.055, tirada da cópia local da lei (`midia/juneau/fontes/mecanismo/verif/as4406.html`, a mesma do fundamento, mec-04), e o grifo aponta para ela |
| B9 | O folheto de 1994 não estava em `_documentos`; o de 1982 faltava em s05 | **Reproduzido.** s33 e s34 têm o folheto de 1994 (doc-19) e s05 o de 1982 (doc-18), com a licença a conferir e o aviso da cópia arquivada. s33 diz por que a página não vai à tela ali. A fila de documentos do §4.3 os inclui |
| B11 | O espelho não dizia nada ao pesquisa-logos | **Reproduzido.** `needs.logos` em s03 (EUA e Canadá) e em s44 (e também British Columbia e Yukon). `_nota_logos` em s28 (a NFL não se pede), s43, s52 e s58 (logo federal: pendente). Duas decisões pendentes novas: a bandeira fora da PRANCHA e a logo de órgão federal ou de outra instituição (nona revisão: a logo foi decidida pelo Lucas em 27/09, só o nome escrito, §0g). `_despacho_research` › `logos` e a linha do pesquisa-logos no §4.3 |
| B12 | `needs.dados` misturava pedido com aviso, figura e instrução | **Reproduzido** (97 itens em 48 cenas: 22 avisos, 5 figuras, 2 instruções). Os avisos foram para `_fonte_arquivada`, as figuras para `_figura`, o crédito opcional de s03 ficou só em `_citacao`, e a instrução de desenho de s54 foi para `_figura`. Sobram **71 itens em 45 cenas**, todos pedido de dado. `_despacho_research` › `dados` separa a conferência (70 itens, do dossiê) da única BUSCA NOVA (a série diária de s54) e lista as 22 cenas NÃO CONFERIDAS até o navegador do app (nona revisão: superado; a lista virou `lidas_de_copia_arquivada`, §0g) |
| B13 | O report não media texto no ar | Medido no §5.2 (junto com B5) |
| B15 | As seis `citacao` não diziam em que modelo se executam | **Reproduzido** (roupa do editor-de-arte §6). O `motivo` de cada uma diz o modelo: REGISTRO com card de pessoa e fala em s05, s27, s41 e s57; DOCUMENTO recriado em s18 e s34, porque a declaração é escrita e sem autor. A regra está no §8 (quarta revisão: **errado para s18**. A declaração de 1978 é assinada por Frank Harris, e o roteiro não o nomeia porque a identidade com o Harris de 1982 não está provada. Só a de 1994, s34, não é assinada; §0d G2) |

## 0c · A terceira revisão de 27/09: o que os verificadores acharam e o que mudou

Cada achado foi reproduzido no disco antes do conserto (a coluna do meio). Os consertos foram aplicados por um script que
muda só os campos citados e regrava o espelho no mesmo formato. Toda afirmação nova de lugar, data, pessoa ou número saiu do
dossiê, do texto aprovado ou da geometria em disco, e a referência está escrita ao lado dela no espelho.

O conferente ganhou as provas desta rodada (§2, as linhas marcadas "terceira revisão") e foi provado contra a cópia do
espelho de antes dela: reprova a cópia com **60 falhas** (5 de s44: a origem do Taku em dois textos, o plano 3 sem Juneau e o rótulo de
`cascade-point`; a cadeia B de s02 e a A de s01; as 16 parcelas de pagamento sem a marca de candidata; os três planos com ano
sobre imagem sem época; os 11 números sobre lugar sem `_figura`; as 23 cenas fora do despacho de documentos ou sem
`_documentos`) e passa o espelho novo.

A lente de tempo (#6) já tinha aprovado a segunda revisão. O único baixo dela, o `convocado_por` do plano 2 de s60, está
certo no disco desde a segunda revisão ("The question changed."), e o conferente o confere palavra a palavra.

### 0c.1 · O alto e os médios

| # | Achado | Reproduzido | O que mudou |
|---|---|---|---|
| A1 (alta, editorial) | O conserto de M2 fez os dois corredores de s44 partirem do fim da estrada em Cascade Point; o do Taku não sai dali | **Sim.** s44 › plano 3: "os dois corredores: Taku a leste, Lynn Canal ao norte — a partir do fim da estrada em Cascade Point"; `motivo`: "os corredores do plano 3 partem do fim dela"; o rótulo de `cascade-point`: "diante do campo de gelo e dos dois corredores". A fonte diz o contrário: o FSEIS descreve a alternativa do Taku como "a 118-mile-long highway from the end of Thane Road in Juneau, northeast along the Taku Inlet" (p. 2-2; cópia local `midia/juneau/fontes/triagem/fseis.txt`, linhas 3665–3668). Pelas coordenadas em disco, a foz do `rio-taku-osm` (-133.964, 58.470) fica a 31,5 km do ponto de Juneau do NE, rumo 54°, e a 62,0 km de `cascade-point` | O plano 3 diz agora: o corredor do Taku sai de Juneau para o leste, pelo vale do rio (`rio-taku-osm`), rumo à British Columbia; o do Lynn Canal segue para o norte a partir do fim da estrada, em Cascade Point (a Alternativa 2B partia de Echo Cove e alargava a Glacier Highway até Cascade Point; `fundamento.json` › mec-01). O `motivo` e o rótulo de `cascade-point` ("onde a estrada para; é dali que o corredor do Lynn Canal seguiria para o norte") foram corrigidos. A origem de cada corredor, com as fontes e as contas, está em `s44._geografia`. O fim da Thane Road não está na geometria em disco: a cena parte de Juneau e segue o rio, sem inventar esse ponto. O conferente reprova qualquer texto do espelho que ponha a origem do Taku em Cascade Point ou no fim da estrada, e o plano dos corredores que não diga que o do Taku sai de Juneau. A linha M2 do §0b foi corrigida (quarta revisão: a prova da terceira só pegava a ordem "Taku … sai de / parte de … Cascade Point", e o caminho entre Juneau e a foz não era dito. A prova agora reprova toda frase que cite os dois, sem negação, e o corredor segue o Taku Inlet; §0d G4 e E5) |
| M1 (completude) | O pesquisa-documentos não tinha lista no `_despacho_research`, e a fila do §4.3 não batia com `_documentos` | **Sim.** `Object.keys(_despacho_research)`: nota, cenas, retratos, dados, logos, mesmo_lugar_clipes_diferentes, mesmo_arquivo. Sem `_documentos`: s18, s26, s27, s30, s41, s57, s61 (documento ou citação); s58 só com o Federal Register; s41 com `fonte: "KTOO, 2025"` | `_despacho_research` › `documentos`: **12 peças** (os folhetos de 1982, 1978 e 1994; as leis federais de 1900 e 1912; o parecer do AG de 1993 e Boucher v. Engstrom; o Alaska Economic Trends de 1990; a AS 44.06; o HB 3; o FSEIS e o ROD de 2018; o Federal Register; as decisões federais de 2009 e 2011; as peças de campanha de 1982) e **4 matérias** (ADN em s27 e s31; KTOO em s41; CoastAlaska/KTOO em s57). Cada entrada tem cena, planos (com o tempo e a palavra que o convoca), URL, licença, o papel na tela e os trechos a grifar, tirados literalmente da fonte com o id do claim. Ganharam `_documentos`: s18, s25, s26, s27, s28, s30, s41, s57, s61 e, pelo FSEIS citado na voz, s03, s51, s53 e s55; s31 ganhou a coluna do ADN; s58 ganhou o **ROD de 18/06/2018** (II "Basis for Decision", p. 3: o orçamento e a controvérsia, que a voz cita). A fonte de s41 está completa (Clarise Larson, 13/06/2025, título e URL), e as de s27 e s57 também. O §4.3 e o §8 seguem o campo. O conferente reprova cena documento ou citação sem `_documentos` e cena com `_documentos` fora da lista |
| M2 (completude) e baixo #5 (editorial) | A camiseta "Anchorage Stealers" do Alaska State Museum, que o dossiê marca como registro real, não foi pedida nem dispensada | **Sim.** `fundamento.json`, exp-01.15: "Serve de registro real"; `roteiro.json`, material obrigatório de p4. 0 ocorrências de "Stealers", "camis" ou "museum" no espelho e no report | **Pedida em s28, plano 3** ("The ad called that about a quarter of the Willow price tag"): o plano passou de DADO a foto. O número das costas, 2.84, é o preço de Willow ("referring to the $2.84 billion estimated cost", coluna de Reamer, cópia local `midia/juneau/fontes/evento/adn_reamer.html`), e o "$800 million ≈ about a quarter" pousa sobre ela. A foto vem do museu ou da coluna do ADN (a legenda diz "Provided by Alaska State Museum"), pela regra do midia.md §7.5, com a fonte na tela; de outra origem, sem licença, não entra; sem ela, o plano volta a DADO num re-espelho, com o mesmo id. s26 diz por que ela não entra ali (o plano 3 é a Football Fannie, que a camiseta não mostra). Está no §5.1 |

### 0c.2 · Os baixos

| # | Achado | O que mudou |
|---|---|---|
| E2 (editorial) | A cadeia B era uma lista no `motivo` de s02 e outra em `_cadeia_referencial`; s36 dizia só "PAGA D"; s60 só "FECHA A" | **Reproduzido.** B › paga: s19, s20, s23, s29, s30, s35 e **s36** (livro-razão, p5: "em 1994 a exigência do preço vira lei"; a voz: "its wording is still law"); B › fecha: **s60, s61 e s62** ("Retomada literal em p7": "Both times a price went on the ballot, voters said no"). s36 é "PAGA B · PAGA D"; s60 e s62, "FECHA A · FECHA B". O `motivo` de s02 cita a mesma lista, e o de s01 deixou de pôr s61 no fecho de A ("s60–s62"). O conferente confere a cadeia nos dois sentidos e a lista do `motivo` da cena que abre |
| E3 (editorial) e C5 (completude) | s10 levava a Alaska Highway até Dawson Creek sem pedir o Canadá; "Glenn Highway (Anchorage–Tok)" sem fonte | **Reproduzido** (o recorte `alasca-e-vizinhos` acaba em -125°; "Tok", "Dawson Creek" e "Delta Junction" não aparecem no dossiê, que só diz que as duas rodovias ligaram Anchorage à rede, mec-15.6). s10 pede `eua` e `canada` (`_existe: true`), com a bandeira em `needs.logos` e `_nota_logos`, como s03. A Glenn e a Alaska Highway pedem o traçado com os extremos que a fonte da geometria der, e um ponto novo, `alaska-highway-ligacao-continente`, pede o lugar em que a Alaska Highway encontra a rede do continente, com o nome da fonte. O `motivo` diz até onde o palco vai. Não pus o ponto de Dawson Creek: nem o dossiê nem a geometria em disco o dão |
| E4 (editorial) | s33 punha "1994" sobre um aéreo de Wasilla de hoje | **Reproduzido.** O plano 1 é agora B-roll de lugar, de hoje, **sem rótulo de ano**; o `motivo` declara a escolha: o plano mostra o lugar proposto, não um evento, e o evento datado de 1994 (a eleição) tem registro de época pedido em s35. Não pedi Wasilla por volta de 1994. A mesma regra achou um caso que a lente não citou: o aéreo de Anchorage de s40 (plano 1) dizia "o projeto de 2025"; agora diz que é de hoje e sem rótulo de ano (o 2025 é do documento do plano 2). O conferente reprova plano de registro com ano no objeto e nenhum termo de época |
| E6 (editorial) | O plano 2 de s56 (o 6 a 3) tinha termo genérico | **Reproduzido.** O termo é "Juneau Assembly January 23 2017 road resolution vote photo KTOO", e o plano e a `midia_necessidade` exigem duas fotos diferentes da MESMA sessão de 23/1/2017 (exp-33.4). Foto de outra sessão não entra |
| C3 (completude) | A lista do pesquisa-logos não trazia as entidades de nome escrito; a Dittman Research sem nota | **Reproduzido.** `_despacho_research` › `logos` › `nome_escrito`: 12 entidades (ADN; KTOO e CoastAlaska; Alaska Marine Highway System; Alaska Division of Elections; Alaska DOT&PF; FHWA; o departamento do trabalho; a Juneau Assembly; o Legislativo; a Suprema Corte e o Department of Law; a Dittman Research; o Alaska State Museum), com as cenas, a forma da voz e o que entregar (nome oficial como a instituição o escreve, a URL e a linha curta). Os nomes estão como o dossiê os registra, não conferidos. s29 e s31 têm `_nota_logos` da Dittman (logo de outras instituições: pendente). O conferente reprova entidade com logo pendente sem `_nota_logos` na cena |
| C4 (completude) | O portão não vê as seis cenas fora do §1b; s25 e s55 sinalizam retrato ao pesquisa-imagens | **Reproduzido** (`scripts/qc-midia-real.mjs`: `MODO_EXIGE` não tem documento nem mapa, e o pedido brando só reprova com `--estrito`). A nota do `_despacho_research` e o §8 dizem que a cobertura de s07, s23, s26, s44, s52 e s58 se confere à mão, plano a plano, e que s25 e s55 não são do pesquisa-imagens; o `motivo` das duas diz que o `midia: "foto"` é o retrato do pesquisa-pessoas |
| C6 (completude) | `_candidatas_a_showpiece` (5) contradizia o report ("as novas chegam como candidatas pela `_cadeia`") | **Reproduzido.** Segui o contrato §2 e a roupa do diretor-de-arte ("as cenas onde o Livro-razão diz que a promessa é paga"): **toda cena que paga uma promessa é candidata**, e a `_cadeia` de cada uma diz isso. `_candidatas_a_showpiece` tem as 20 parcelas e s59 (o fecho de C e E); cinco levam a INDICAÇÃO DO MONTADOR (s19, s23, s32, s44, s59). `_nota_showpiece` diz que a escolha é do diretor-de-arte e o número de picos, do Lucas. O conferente reprova parcela sem a marca e desencontro entre os dois campos |
| C7 (completude) | Faltava `_figura` em números sobre lugar | **Reproduzido** (6 cenas com `_figura`). Agora são **18**: as seis e s01, s03, s20, s23, s28, s29, s31, s35, s49, s53, s56 e s59 (voto → placar; valor → US$ com representação monetária; proporção de dinheiro → parte de um todo; distância → a própria estrada medida no mapa). O conferente reprova número na fala, fora data e ano, numa cena com plano de registro ou de mapa sem `_figura` |
| C8 (completude) | s43 pedia a lei 42 U.S.C. §4332 sem plano que a mostrasse | **Reproduzido.** A lei saiu de `_documentos` e do §4.3: a voz a parafraseia ("federal project" × "federal action", ressalva A17), e a página poria na tela uma frase que a voz não diz. A conferência dela continua na pesquisa-dados (`needs.dados`); o `motivo` diz isso |
| T1 (tempo) | O `convocado_por` do plano 2 de s60 terminava em "In" | **Já estava certo no disco** ("The question changed.", desde a segunda revisão). Nada a mudar |

## 0d · A quarta revisão de 27/09: o que os verificadores acharam e o que mudou

Cada achado foi reproduzido no disco antes do conserto (a coluna do meio): o conferente novo, rodado contra o espelho de antes
desta revisão, reprova **24 falhas**. (Quinta revisão: **isto estava errado**. As 24 falhas reproduzem **9 dos 17 achados
únicos** desta rodada: o showpiece, o Taku (G4 e E5), a malha de s03, o asfalto, s18, as contagens de palavras, s06 e s58. Os
outros 8, E2/T1, G5, G6, G8, G9, G11, T3 e T4, foram conferidos à mão, e nenhuma falha os reproduz. A prova do E2/T1 dependia
só do `_pedido_a`: a verificação montou uma cópia sem ele e com s26 de volta na lista `cenas`, e o conferente passou. Desde a
quinta revisão, ele reprova esse caso pela `caca` da peça, com ou sem `_pedido_a`; §0e.) Os consertos foram aplicados por um script que confere,
antes de cada troca, que o texto antigo está lá, muda só os campos citados e regrava o espelho no mesmo formato. Toda afirmação
nova de lugar, data, pessoa ou número tem a referência escrita ao lado dela no espelho: o dossiê (`fundamento.json`,
`roteiro-editor.md`), a cópia local da fonte (`fseis.txt`, `adn_reamer.html`) ou uma conta sobre a geometria em disco.

Para cada conserto, a pergunta foi o que ele poderia quebrar. Três respostas mudaram o conserto:
- **s44:** "de Juneau pela água" seria uma afirmação nova. Antes de escrevê-la, testei a geometria: a reta Juneau → foz corre
  por terra, e o caminho pela água existe no recorte. O nome do canal junto de Juneau vem do dossiê (evt-03.7), não da
  memória, e fica só em `_geografia`, e não no plano.
- **s03:** o texto novo não afirma nada sobre Hyder, que o dossiê não traz.
- **s52:** não nomeia navio nenhum, porque o dossiê não tem a frota de 2009.

Três pares de achados eram o mesmo defeito visto por duas lentes, e cada par teve um conserto só:
- o `_exige` de s03 (alto, geo-fato e editorial);
- as mascotes de s26 em duas listas (médio, editorial e tempo);
- o ROD de s58 (baixo, editorial e tempo).

### 0d.1 · Os altos e os médios

| # | Achado | Reproduzido | O que mudou |
|---|---|---|---|
| G1 e E1 (alta, geo-fato e editorial) | O `_exige` da `rede-rodoviaria-continente` de s03 dizia "basta mostrar que a malha continental para antes do panhandle", e ela entra no panhandle por Haines e Skagway | **Sim.** `espelho.json`, s03 › needs.geo. O dossiê diz o contrário: "The Haines Highway connects Haines with the Alaska Highway at Haines Junction, Yukon Territory. The Klondike Highway links Skagway to the Alaska Highway near Whitehorse" (mec-01.8, FSEIS p. 1-8). Haines (-135.445, 59.236, `cidade-haines-osm`) e Skagway (-135.314, 59.458, `cidades-ne`) caem dentro do bbox do `panhandle-juneau` (-138.5, 56.6, -131, 61). s10 não herda o texto: o `_exige` dele diz "a malha a que a Alaska Highway se liga" | O `_exige` diz agora que basta mostrar que a malha **não chega a Juneau**. Ela chega ao alto do Lynn Canal, em Haines e Skagway, pelo Canadá (mec-01.8; é o palco de s44), e a estrada de Juneau acaba em Cascade Point sem se ligar a ela (mec-01.9, mec-01.1). Também diz para **não cortar a camada antes do panhandle**, porque um mapa sem essas duas ligações contradiz s44. O conferente reprova "para antes do panhandle" em qualquer texto do espelho |
| G2 (alta, geo-fato) | s18 dizia que a declaração de 1978 não tinha autor; ela é assinada por Frank Harris | **Sim.** s18 › `motivo`: "sem autor nomeado", "a declaração escrita e sem autor", "não há pessoa a identificar". `roteiro-editor.md`, f-033: "assinada por 'FRANK HARRIS, Chairman, Taxpayers Capital Relocation Committee'"; doc-17.3. O report repetia o erro nas linhas do §0b (B15), do §5.1 (s18) e do §8 (item 4) | O `motivo` de s18 diz que a declaração é assinada e que o roteiro não nomeia o signatário, porque não há prova de que é o mesmo Frank W. Harris de 1982 (roteiro-editor.md, decisões, citado). Por isso não há card de pessoa. `_citacao.fonte` é "Official Election Pamphlet, 1978 (statement against Ballot Proposition No. 3)", sem "unsigned", e `_citacao.assinatura` guarda o nome e o porquê de ele não ir à tela. As três linhas do report separam agora s18 (assinada, sem nome na voz) de s34 (a de 1994, não assinada). O conferente reprova "sem autor" em s18 e s18 sem `assinatura` |
| G3 (média, geo-fato) | s59 pedia "o fim do asfalto em Cascade Point"; o trecho de Echo Cove a Cascade Point é de cascalho | **Sim.** s59 › plano 1 e `motivo`. FSEIS p. 1-8 (`fseis.txt`:2850-2861): "widen the gravel-surface roadway to 26 feet… completed in 2011" | O plano 1 e o `motivo` falam agora do **fim da estrada (o cascalho da Glacier Highway) em Cascade Point**, com a fonte. A mesma leitura achou a semente de s42, "o asfalto que acaba", que virou "a estrada que acaba". Achou também, em s42, o nome "Veterans Memorial Highway", que não está no dossiê nem no FSEIS (0 ocorrências) e saiu. O conferente reprova "fim do asfalto" e "asfalto que acaba" |
| G4 (média, geo-fato) | O corredor do Taku ia do ponto de Juneau à foz sem dizer por onde; a reta corre por terra | **Sim.** Refiz a conta sobre `panhandle-juneau.json`: dos 41 pontos da reta de Juneau (NE: -134.4007, 58.3034) à foz do `rio-taku-osm` (-133.9640, 58.4699), 39 caem em terra, e só os 2 últimos, junto da foz, caem na água. O FSEIS: "from the end of Thane Road in Juneau, northeast along the Taku Inlet" (`fseis.txt`:3665-3666). Nenhum pedido de Taku Inlet no espelho | O plano 3 de s44 diz que o corredor do Taku **sai de Juneau, segue ao longo do Taku Inlet até a foz e dali sobe o vale do rio** (`rio-taku-osm`), e **nunca é a reta por terra**. Se a arte não traçar esse caminho, marca só o vale do rio e a direção "east", sem linha contínua por terra. Pedido novo: `taku-inlet` (OSM, com crédito, ou NE marine areas). `s44._geografia.caminho_pela_agua` registra a conta: pela água do mesmo recorte, o caminho desce para o sudeste por um canal estreito junto de Juneau, até cerca de 58,20° N, e sobe para o nordeste e o norte pelo braço que chega à foz. O dossiê dá o canal como o lugar de Juneau, o Gastineau Channel (evt-03.7); a geometria não tem o nome. O `motivo` separou as frases do Taku e do Lynn Canal. O conferente reprova s44 sem `taku-inlet` e o plano dos corredores sem "Taku Inlet" (quinta revisão: **o conserto estava errado**. Ele mandava a arte traçar o corredor pela água, e não há GeoJSON desse caminho: o mapista não desenha linha sem geometria real, §6c. Agora o Taku é o rio, uma seta de Juneau rumo ao vale do rio e o Taku Inlet só como contorno e rótulo; a conta pela água ficou como contexto em `_geografia`; §0e A1) |
| E2 e T1 (média, editorial e tempo) | As mascotes de s26 (planos 1 e 3) estavam na lista do pesquisa-imagens e na do pesquisa-documentos, sem dono | **Sim.** `_despacho_research.cenas` › s26, planos 1 e 3, e `documentos.pecas` › "peças de campanha e de imprensa de 1982", s26, planos 1 e 3. A nota do despacho as dava ao pesquisa-imagens ("registro e peças de campanha"), a de `documentos` deixava em `cenas` só a camiseta, e a pendência #20 não citava `documentos` | **Dono único: o pesquisa-documentos.** São peça impressa de campanha e de imprensa (midia.md §7.1). Os dois planos levam `_pedido_a: "pesquisa-documentos"`, e s26 saiu da lista `cenas`, que ficou com **33 cenas**. A peça de campanha em `documentos` ganhou `caca` (só do pesquisa-documentos) e os termos de busca. A nota do despacho, a nota de `documentos`, o `motivo` e a `midia_necessidade` de s26 e a pendência #20 dizem a mesma coisa, e o §4.3 e o §8 também. As cenas `fora_do_1b` são agora **5** (s07, s23, s44, s52, s58). O conferente reprova plano do pesquisa-documentos na lista do pesquisa-imagens e plano com esse `_pedido_a` fora de `documentos`. Ids e tempos não mudaram |

### 0d.2 · Os baixos

| # | Achado | O que mudou |
|---|---|---|
| G5 | s31 dava a Stoops o cargo de "criador da Football Fannie" | **Reproduzido.** A coluna diz "founded the NFL Access Committee" e "Designed by Bob Grogan" (`adn_reamer.html`); exp-01.1: "criou o NFL Access Committee em 1982". O cargo passou a ser "fundador do NFL Access Committee (1982)", em s31 e em `retratos`, com uma nota: a Football Fannie é de Bob Grogan, e nenhum card dá a autoria dela a Stoops |
| G6 | s31 falava em "duas colunas de 2026" | **Reproduzido.** O `motivo` lista agora cada versão com a sua data: a coluna de Reamer (9/2/2026); a entrevista de Stoops por telefone a esse colunista (2/2/2026, da lista de fontes da coluna); a avaliação de Dittman, de antes da votação de 1982 ("Before the vote", texto aprovado), citada na coluna; e a publicação de Rae (1990) |
| G7 | Contagens de palavras erradas em quatro citações | **Reproduzido** (recontadas no verbatim). s05 tem 15, s18 tem 10, s27 tem 27 e s57 tem 28. `_citacao.palavras`, os `motivo` e o §4.7, item 12, foram corrigidos. O conferente reconta o verbatim e os números do `motivo` |
| G8 | s34 atribuía aos opositores de 1994 o número da cédula de 1982 | **Reproduzido.** doc-19.5 (folheto de 1994): "$2,843,000,000"; doc-18.1 (cédula de 1982): "$2,843,147,000". O `needs.dados` diz as duas coisas, cada uma com a sua fonte |
| G9 | O localizador do grifo de s43 apontava o §1.3 | **Reproduzido** (`fseis.txt`:2931 é "1.3 AMHS Service History in Lynn Canal"; :3267 é "1.4.2 Flexibility and Opportunity for Travel"; a frase está em :3321-3323). O `de_onde` diz "§1.4.2, p. 1-16 (mec-01.27, exp-06.4)". O localizador errado vem do mec-01.27 do fundamento, que eu não edito (§4.7, item 19) |
| G10 | s06 punha "1880" sobre uma foto pedida como "1880s" | **Reproduzido.** Vale agora a regra de s09. A data de cada foto vai no crédito, como a origem a dá, e o 1880 é o ano da descoberta e do acampamento (f-011, mec-16.1), não a data da foto. A preferência é por uma foto de 1880. O conferente reprova plano de registro que rotula um ano exato sem termo desse ano e sem a regra do crédito (ou "sem rótulo de ano") (superado na sexta revisão: a regra do crédito saiu; §0f) |
| G11 | s52 ligava um clipe de hoje às balsas de 2009 | **Reproduzido.** O plano 2 é agora B-roll do sistema estadual chegando a Haines, de hoje e sem rótulo de ano, e não afirma que o navio estava na frota em 2009. A `midia_necessidade` diz que esse vínculo só vai à tela se a origem mostrar que o navio já servia a linha naquele ano, porque o dossiê não tem a frota de 2009 |
| E3 e T2 | O ROD de s58 tinha um trecho a grifar no plano 4, que é foto; o plano 2, documento, não tinha peça | **Reproduzido** (a fala de cada plano está no `words.json`; "public" em 605,056 s cai no plano 4, de 604,7 a 609,167). No despacho, o ROD fica com os **planos 2 e 3**. O plano 2 abre a peça recriada: a fonte e a seção "Basis for Decision", sem grifo. O plano 3 grifa só "Declining oil prices have caused the need for cuts to State budgets." A frase da controvérsia foi para `conferir` (plano 4): é só conferência e fonte escrita, e não vai sobre a foto. A `midia_necessidade`, o objeto do plano 2 e a nota de `_documentos` seguem o despacho. O conferente reprova entrada com trecho a grifar que lista plano de registro |
| E4 | `_nota_showpiece` citava a roupa do diretor-de-arte §2 pela metade | **Reproduzido** (a roupa, `marca/agentes/diretor-de-arte.md`, linhas 76-78, cita a abertura, as parcelas e o fecho). Entraram **s01** (a abertura: a contradição e a pergunta estão nos primeiros 13,6 s) e **s60, s61 e s62** (o fecho: as cenas da p7 que fecham as promessas), e agora são **25 candidatas**. Ficam fora s02, que é a promessa e não a contradição, e a cauda s63, que é o fundo provisório. A nota cita a roupa inteira, e a `_cadeia` das quatro diz "candidata a showpiece". O conferente cobra os três critérios |
| E5 | O report prometia que o conferente reprovava "qualquer texto" com a origem do Taku em Cascade Point, e a prova só pegava uma ordem de palavras | **Reproduzido** (a cópia `mut2` do verificador passava com exit 0). A prova ficou mais larga: reprova toda frase que cite o Taku e Cascade Point ou o fim da estrada, fora de `_geografia` e sem negação. Com ela, a mutação do verificador é reprovada. O limite está escrito no §2: frase com negação passa, e duas frases seguidas não se leem juntas. Uma frase de crédito do `motivo` de s44 ("Taku, Haines, a estrada e Cascade Point são OSM") caía na prova nova e foi reescrita em duas orações |
| T3 | O plano 3 de s28 dizia que o "$800 million ≈ about a quarter" pousava em word-lock, mas "eight hundred million dollars" é dito no plano 2 | **Reproduzido** (o `words.json` põe "eight" em 288,327, dentro do plano 2, de 286,5 a 290,6). O texto sobre a camiseta **trava em "about a quarter"** (291,46 s), e o $800 million entra ali como recapitulação. O estádio do plano 2 não leva número. A pendência do número sobre o registro (#16) diz isso, e a lista dela não muda (quinta revisão: travado em "about a quarter", o texto ficava 1,87 s no ar, abaixo dos 2,0 s; agora trava em "The ad called that", 2,72 s; §0e T1) |
| T4 | O conferente não comparava o regime nem a `voz` do despacho de documentos, nem o `_borda` | **Reproduzido** (hoje, 52 de 52 referências batem nos quatro campos, e os 60 `_borda` com fala conferem). O conferente compara agora o `regime` e a `voz` com o `convocado_por`, e confere o `_borda` de cada cena (primeira e última palavra, início e fim da anterior; na cauda, o fim da última palavra) |

**A prova do conferente.** Contra o espelho de antes desta revisão, o conferente reprova com 24 falhas; contra o espelho novo,
passa. (Quinta revisão: as 24 falhas reproduzem 9 dos 17 achados, e não "os defeitos acima"; ver a nota no topo desta seção.) Também testei 16 cópias do espelho novo, cada uma com um defeito posto de propósito, e
todas saem com exit 1:
- o Taku na ordem inversa (a mutação do verificador);
- s44 sem `taku-inlet`;
- "para antes do panhandle";
- "fim do asfalto";
- s18 "sem autor";
- a contagem de s27;
- o 1880 de s06 sem a regra;
- s26 nas duas listas;
- s26 sem dono;
- o grifo no plano de foto;
- o regime e a voz trocados no despacho;
- o `_borda` de s40;
- a abertura, o fecho e a nota do showpiece.

## 0e · A quinta revisão de 27/09: o que os verificadores acharam e o que mudou

Cada achado foi reproduzido no disco antes do conserto (a coluna do meio). Os consertos foram aplicados por um script que confere,
antes de cada troca, que o texto antigo está lá, muda só os campos citados e regrava o espelho no mesmo formato. Toda afirmação
nova de lugar, data, pessoa ou número tem a referência escrita ao lado dela no espelho: o dossiê (`fundamento.json`), a cópia
local da fonte (`fseis.txt`, `adn_reamer.html`, `ktoo_assembly2017.txt`, `ktoo_larson2025.html`), o `words.json` ou o ofício do
mapista.

Para cada conserto, a pergunta foi o que ele poderia quebrar. A rodada anterior criou um erro ao consertar outro: mandou traçar
pela água um caminho sem geometria. As respostas desta vez:
- **s44:** o conserto tira o traçado, e não põe outro no lugar. O `_exige` do `taku-inlet` não diz mais que o braço de mar é
  o Taku Inlet; diz o que a conta em disco mostra, e que o nome e o começo do braço a fonte da geometria confirma.
- **s13:** a regra nova para os juízes não afirma quem compunha a corte em 1974, porque o dossiê não o diz. Ela só exige que a
  foto dos juízes seja datada de 1974 na origem.
- **s28:** "Juneau Empire, 8/10/1982, p. 7" vem da lista de fontes da coluna. A coluna põe o anúncio inaugural no primeiro dia
  dos anúncios, 8/10/1982. Que aquele item da lista seja o anúncio citado é leitura, e o espelho diz que a pesquisa o confere no
  original.
- **Texto no ar:** as palavras novas de trava são da mesma frase da voz e do mesmo plano, e nenhuma borda de cena ou de plano
  mudou.
- **Verbatins:** a mesma leitura achou s07, s31 e s41 com um ponto final que a fonte não tem. Ali a fonte segue com vírgula, e
  os três foram corrigidos.
- **A regra do ano, mais estrita, achou mais dois casos:**
  - s23, plano 4: um termo pede "early 1980s", e a `midia_necessidade` dizia "foto de outro ano não entra";
  - s28, plano 3: um dos termos da camiseta não tem ano.

  Os dois levam agora a regra do crédito. s23 diz também "sem rótulo de ano": o 1982 da tela é o da cédula, no plano 1.
  (Superado na sexta revisão: a regra do crédito saiu; §0f.)

Dois pares de achados eram o mesmo defeito visto por duas lentes, e cada par teve um conserto só:
- o texto no ar (médio da lente de tempo e baixo da editorial);
- o grifo onde o documento não está na tela ou a voz não diz o trecho (s28 e s03, baixo da editorial; s03, baixo da de tempo).

### 0e.1 · Os médios

| # | Achado | Reproduzido | O que mudou |
|---|---|---|---|
| A1 (média, editorial) | O conserto G4 mandava a arte traçar o corredor do Taku pela água, de Juneau pelo Gastineau Channel e pelo Taku Inlet até a foz, sem GeoJSON; "se a arte não traçar" era só a alternativa. O mesmo valia, em menor grau, para o corredor do Lynn Canal "a partir do fim da estrada", que é o traçado da 2B | **Sim.** s44, plano 3: "segue ao longo do Taku Inlet até a foz… Se a arte não traçar o caminho pela água…". `.claude/agents/mapista.md` §6c: "Não há geometria publicada? **Não desenhe a linha**: use seta, halo, hachura ou rótulo com guia curta"; e o check 9 do §7: "Toda linha de feição vem de GeoJSON". `marca/agentes/mapista.md` §10: "Faltou geometria: peça à `pesquisa-geo` e reporte bloqueio. Nunca desenhe." O caminho pela água de `_geografia` era uma busca em grade, não geometria publicada, e `needs.geo` só pedia o contorno e o rótulo do `taku-inlet`. A pendência #9 (esquema declarado) citava só s48 e s50 | O plano 3 diz agora que **os dois corredores entram só com geometria real, sem traçado de corredor**. O do Taku é o vale do rio (`rio-taku-osm`), a leste de Juneau, com uma seta ou um halo de Juneau rumo ao vale do rio (a leste na voz; a foz fica a nordeste, rumo 54°); o contorno e o rótulo do Taku Inlet entram só se a pesquisa-geo trouxer a geometria. O do Lynn Canal é uma seta para o norte a partir do anel de Cascade Point, e o eixo do fiorde só entra como linha se o `lynn-canal` vier como GeoJSON. Nenhum corredor se desenha como linha entre Juneau e o rio. Corredor traçado é esquema declarado, e **s44 entrou na pendência #9**. Outras mudanças em s44: `_geografia.taku` e o `motivo` dizem que o caminho do FSEIS é contexto e não se desenha; `_geografia.caminho_pela_agua` abre com "CONTEXTO, NÃO DESENHO"; o `_exige` do `taku-inlet` não fala mais de corredor ao longo dele; o do `lynn-canal` diz que o eixo só entra como GeoJSON. Pela mesma régua, o plano 5, a primeira `_virada` e o `motivo` ancoram o registro do fiorde no fiorde que o satélite mostra, com o rótulo, e não num eixo que pode não vir. O report foi corrigido no §4.3, no §4.7 (item 17), no §5.5 e no §9, onde dizia "o traçado é do mapista". O conferente reprova: plano de mapa que mande traçar corredor, caminho ou rota sem negação; "Se a arte não traçar" e "caminho pela água" fora de `_geografia`; e o plano dos corredores de s44 que não diga "seta" ou não cite o §6c do mapista |
| T1 (média, tempo) e E1 (baixa, editorial) | Texto travado numa palavra, sobre registro, ficava menos de 2,0 s no ar até o fim da cena, sem `_texto_no_ar`. O caso de s28 foi criado pela quarta revisão, e em s29 a palavra da trava não era dita | **Sim**, no `words.json`: s28, "about" em 291,46 e fim da cena em 293,333 (1,873 s); s31, "more" em 331,048 e fim em 332,5 (1,452 s); s56, "six" em 583,35 e fim em 584,933 (1,583 s); s29, "pousa sobre o registro em word-lock" sem palavra, e "nearly" em 302,388 daria 1,379 s. A cena seguinte a cada uma é outra. O conferente de antes media só a duração do plano e isentava o registro | O texto trava na mesma frase, numa palavra que o deixa ≥ 2,0 s no ar até o fim do plano (identidade §4.3):<br>- s28 plano 3: "The ad called that" (290,61 s), 2,72 s;<br>- s29 plano 2: "the no side won" (300,93 s), 2,84 s;<br>- s31 plano 5: "Reamer adds" (329,52 s), 2,98 s;<br>- s56 plano 2: "January 2017" (581,49 s), 3,44 s.<br><br>A palavra citada antes ("about a quarter", "nearly 53 percent", "more than a million dollars", "six to three") fica **só como ênfase dentro do bloco**, e o objeto diz quanto o texto ficaria no ar se travasse nela. Em s56, a verificação propôs o começo do plano ou "January"; ficou "January 2017", que é a data da votação e deixa o texto 3,44 s no ar. Nenhuma borda nem id mudou. A pendência #16 cita a trava nova de s28. O conferente mede agora **toda trava explícita**, em qualquer regime: a palavra entre aspas tem de ser dita dentro do plano, e dela ao fim do plano vão ≥ 2,0 s, a não ser que o plano declare `_texto_no_ar`. Trava sem palavra, como a de s29, reprova. São 8 travas medidas; a menor fica 2,11 s no ar (s33, plano 2). O §2 e o §5.2 foram corrigidos |

### 0e.2 · Os baixos

| # | Achado | O que mudou |
|---|---|---|
| G1 (geo-fato) | s13 ("a Suprema Corte do Alasca, 1974") e o plano 2 de s16 ("Fairbanks, 1977") cravavam um ano exato sobre foto que um termo aceita de outro ano ("courtroom 1970s"; "1976 1977"), sem a regra de s06 e s09 | **Reproduzido.** O conferente passava porque bastava um termo trazer o ano. Os dois planos e a `midia_necessidade` dizem agora que o ano da tela é o do fato, não o da foto: em s13, o ano da decisão, pelo resumo do procurador-geral (doc-23.2); em s16, o ano em que o comitê se organizou em Fairbanks (doc-17.2, "organized in Fairbanks in early 1977"). A data da foto vai no crédito, como a origem a dá. Em s13, a foto dos juízes só entra se a origem a datar de 1974: em outro ano, a corte pode ter outra composição, e o rótulo diria que foram eles que decidiram. De outro ano da década, só a sala, com a data no crédito. A regra ficou mais estrita: basta **um** termo aceitar outro ano (a década, outro ano, ou nenhum ano) para o plano ter de dizer a regra do crédito ou "sem rótulo de ano". Com ela, o conferente achou s23, plano 4, e s28, plano 3 (ver acima) (superado na sexta revisão: a regra do crédito saiu; §0f) |
| G2 (geo-fato) | O primeiro anúncio da Football Fannie era pedido só com a data (8/10/1982), e as imagens da coluna são outras peças | **Reproduzido** na cópia local da coluna (`adn_reamer.html`). A lista "Key sources" dá "Football Fannie advertisement. Juneau Empire. October 8, 1982, 7". A legenda da imagem de abertura é "A Football Fannie ad from the Oct. 21, 1982 edition of the Anchorage Daily News", e a outra imagem é "An Oct. 18, 1982 Access Annie ad from the Anchorage Daily News". Os pedidos de s28 dão agora "Juneau Empire, 8/10/1982, p. 7, pela lista de fontes da coluna": `_documentos`, `needs.dados`, a `midia_necessidade` e a peça do despacho, com a nota de que a pesquisa confere no original que é a peça inaugural. A peça ganhou `pistas`, com as imagens da coluna e os anúncios do ADN de 25/10 (p. D-3) e 27/10/1982 (p. E-3), da mesma lista. São pistas das mascotes de s26, e nunca o primeiro anúncio |
| G3 (geo-fato) | O `motivo` de s55 dizia que a fonte não diz onde a declaração de Walker foi feita, e cogitava uma entrevista coletiva | **Reproduzido.** evt-23.9: "Governor Bill Walker articulated the State's fiscal circumstances in a press release dated December 15, 2016" (FSEIS, §2.5.3, p. 2-52). O `motivo` diz agora que isto não foi filmado: foi um comunicado à imprensa, e não há evento com data e local a registrar. s55 deixou de ser FALTA DECLARADA, e o §5.1 foi corrigido: agora são 16 cenas "isto não foi filmado" e 3 de falta declarada |
| G4 (geo-fato) | Verbatins com a pontuação da voz: a vírgula de "for me," em s57 e a vírgula final de s18 | **Reproduzido** (`ktoo_assembly2017.txt`:25, "It would be a lot harder for me if it were actually…"; doc-17.3, "…to Willow which the voters have authorized"). O verbatim e o grifo de s57 e o verbatim de s18 estão sem a vírgula, e a nota de cada um diz de onde vem a pontuação. **Mesma classe, achada na mesma leitura:** o ponto final de s07 (1912: "…Juneau, Alaska, and the seat…", evt-05.1), de s31 ("…reject the plans, and…", esc-10.4) e de s41 ("…all the way dead," he said, cópia local da KTOO) não é da fonte. Saiu dos três verbatins e do grifo de s41. O conferente reprova verbatim que termine em vírgula, ponto e vírgula ou dois-pontos. O ponto final ele não pega, porque em s05, s27 e s34 o ponto é da fonte |
| G5 (geo-fato) | A cadeia C dizia "a estrada de 2006 orçada em cerca de US$ 680 milhões" | **Reproduzido.** doc-21.7: "approximately $680.2 million" é a estimativa do FSEIS de 2018; o ROD de abril de 2006 escolheu a Alt. 2B (evt-23.6). A `nota` diz agora "a rota escolhida em 2006 (Alt. 2B; evt-23.6), que o estudo de 2018 orça em cerca de US$ 680 milhões (doc-21.7)", e o §6 também. A frase vem do livro-razão (`roteiro-editor.md`:41), que não é meu e não foi editado. O conferente reprova, fora de aspas, "estrada/rota/versão de 2006 orçada" |
| E2 (editorial) e T4 (tempo) | O despacho do pesquisa-documentos pedia grifo onde o documento não está na tela ou a voz não diz o trecho. Em s28, a frase inteira do anúncio era grifada só no plano 1, e a voz diz "three domed stadiums … eight hundred million dollars" no plano 2, que é foto. Em s03, a frase do FSEIS era grifada no plano 1, que é mapa, e a voz a parafraseia | **Reproduzido** (`words.json`: "three" em 286,513 e "dollars." em 289,24, dentro do plano 2 de s28, de 286,5 a 290,6; s03, plano 1, `regime: mapa`). Em s28, `grifar` ficou com "28 NFL Teams", dito no plano 1. O resto da frase e o "one-fourth" do anúncio foram para `conferir`, nos planos 2 e 3. Em s03, `grifar: []`, e a frase foi para `conferir` como crédito opcional da paráfrase. Toda entrada do despacho ganhou **`voz_do_grifo`**: para cada trecho, as palavras que a voz diz enquanto o marca-texto o varre, na grafia do `words.json`. São 29 trechos em 23 entradas com grifo; as outras 9 entradas levam a lista vazia. O conferente prova que essas palavras são ditas dentro dos planos listados. Também prova que esses planos são de documento, citação ou dado; a PRANCHA só entra declarada, como em s16. A regra vale para todo plano sem documento na tela, e não só para o registro. **A regra de palavras-chave que a verificação sugeriu não foi usada, porque falha nos dois sentidos** (medido):<br>- o grifo antigo de s28 tem 1 das 6 palavras de conteúdo dita no plano 1;<br>- paráfrases legítimas têm 2 de 7 (s13) e 2 de 10 (s61);<br>- os grifos só de número (s19, "$966,000,000"; s23, "$589,323,000") não têm nenhuma.<br><br>Qualquer limiar reprovaria paráfrase certa ou passaria o s28. A palavra declarada da voz é também o que o pesquisa-documentos precisa para o word-lock do grifo |
| E3 (editorial) | s44 pedia "South Klondike Highway (Skagway–Whitehorse)", nome e extremo sem fonte | **Reproduzido** ("South Klondike": 0 ocorrências no dossiê e no `fseis.txt`; FSEIS p. 1-8, mec-01.8: "links Skagway to the Alaska Highway near Whitehorse"). O rótulo é "Klondike Highway (de Skagway até a Alaska Highway, perto de Whitehorse; FSEIS 2018, p. 1-8, mec-01.8)". O `_exige` diz que o nome e os extremos vêm da fonte da geometria, como em s10. O `_exige` da `alaska-highway`, que era "idem" e remetia a esse pedido, ficou escrito por extenso. O conferente reprova "South Klondike" fora de aspas |
| T2 (tempo) | A prova do E2/T1 da quarta revisão (s26 em duas listas) dependia só do `_pedido_a`. O §0d dizia que as 24 falhas eram "exatamente estes defeitos" | **Reproduzido** (a cópia da verificação sem `_pedido_a` e com s26 de volta em `cenas` passava com exit 0). O conferente reprova agora plano que esteja na lista `cenas` e numa peça com `caca`: os planos da peça e os que o texto de `caca` nomeia ("s26 (planos 1 e 3)"), com ou sem `_pedido_a`. O §0d foi corrigido: as 24 falhas reproduzem 9 dos 17 achados, e os outros 8 foram conferidos à mão |
| T3 (tempo) | O conferente não provava a lista `cenas` do despacho (47 planos: tempo, regime, termos) nem os `_capitulos` | **Reproduzido** (as mutações da verificação nos termos, no regime, no `ate` e no `em_s` do capítulo passavam com exit 0; hoje, os dados batem). O conferente compara agora o `modo`, a `midia`, o `de`, o `ate`, o `regime` e os `midia_termos` de cada plano de `cenas` com o espelho. Nos capítulos, lê as marcas `<!-- pN · título -->` do texto aprovado e confere quatro coisas: a parte, o título, que o `em_s` cai dentro da cena citada e que ele é o início da primeira palavra da parte ou a borda da cena que abre nela |

**A prova do conferente.** Contra o espelho de antes desta revisão (a cópia em `scratchpad/r6/antes/`), o conferente novo reprova
**43 falhas**. 24 delas são a falta de `voz_do_grifo`, o campo novo, em cada entrada com grifo. As outras 19 reproduzem 9 dos 11
achados únicos desta rodada:
- s44 (3 falhas);
- o texto no ar de s28, s29, s31 e s56 (4);
- os anos de s13 e s16 (2), mais s23 e s28 pela regra mais estrita (2);
- o primeiro anúncio (2);
- s55 (1);
- as vírgulas de s18 e s57 (2);
- a cadeia C (1);
- a Klondike (1);
- o grifo de s03 no mapa (1).

Os outros dois achados não eram defeito do espelho, e sim pontos cegos do conferente: s26 em duas listas e as cópias de `cenas`
e dos capítulos. O grifo de s28 aparece contra a cópia de antes só pela falta de `voz_do_grifo`. Os três foram provados por
mutação.

Contra o espelho novo, o conferente passa. **29 cópias do espelho novo**, cada uma com um defeito posto de propósito, saem todas
com exit 1:
- a lista `cenas` com os termos, o regime ou o `ate` trocados;
- o capítulo fora da cena, com outro título ou no meio da primeira palavra;
- s26 de volta em `cenas`, com e sem `_pedido_a`;
- as travas antigas de s28, s29, s31 e s56;
- o plano 3 antigo de s44 e o plano sem "seta";
- uma rota traçada no plano de s48;
- o grifo de s03 no mapa;
- o de s28 que invade o plano 2;
- a voz do grifo de s58 fora dos planos;
- s02 sem `voz_do_grifo`;
- os anos antigos de s13, s16 e s23;
- "South Klondike";
- a cadeia C antiga;
- o `motivo` antigo de s55;
- s28 sem o Juneau Empire;
- a peça sem `pistas`;
- as vírgulas de s57 e s18.

**Identidades:** 61 preservadas, 0 morreram, 0 nasceram. Nenhuma borda de cena ou de plano mudou, nenhum plano mudou de regime
e nenhum plano nasceu ou morreu.

## 0f · A sexta revisão de 27/09: as decisões do Claude central sobre o que sobrou

Da quinta rodada sobraram dois médios e seis baixos, das lentes de ofício e de contrato (a de fatos e geografia aprovou, e os
baixos dela, s28, s55, os verbatins e a cadeia C, já estavam resolvidos na quinta, com prova no conferente). O Claude central
decidiu três coisas, aplicadas aqui sem reabrir. Nenhum tempo, regime, `convocado_por`, `_borda` ou `_quadros` mudou, e os 61
ids são os mesmos. Pelo diff campo a campo contra a cópia de antes, 26 cenas ficaram idênticas; as outras 35 mudaram só nos
campos desta tabela.

| Decisão | O que mudou |
|---|---|
| **1. O ano da foto.** A "regra do crédito" (o ano da tela é o do fato, e a data da foto vai no crédito) afrouxava a identidade §6 ("Imagem 'ilustrativa' de outro evento ou de outro ano não entra") e saiu | Cada plano que a usava pede foto do tempo do fato, com a data conferida na origem, e diz no objeto que, sem ela, muda de regime num re-espelho, com o mesmo id: s06 p1 e p2 (Juneau de 1900 a 1906, quando ganhou a capital; o acampamento em 1880), s09 p1 e p2 (Ship Creek em 1914; as bases em 1939–1940, pela linha do tempo do dossiê, mec-15), s10 p1 (a obra da Alaska Highway em 1942; a Glenn Highway saiu do pedido, porque o dossiê não dá o ano da obra dela), s13 p1 (a corte em 1974), s16 p1 e p2 (Fairbanks em 1977), s22 p1 (o legislativo em 1981, sem a sessão de 1982; saiu o "como em s13") e s23 p4 (Juneau em 1982; saiu o "sem rótulo de ano"). A prova nova achou mais um fora do grep: s07 p2 pedia Sitka "1890s"; pede agora Sitka de 1900 a 1906. Os termos pedem o ano exato (14 trocados e 1 retirado, também na lista `cenas` do despacho). s28 p3 é foto da própria peça de 1982, e não de lugar: saiu a data da foto no crédito, e o termo sem ano ganhou 1982. "Sem rótulo de ano" ficou só no B-roll de hoje (s33, s40, s52). **Pergunta ao Lucas** (`_decisoes_pendentes`, 22º item): pode entrar foto do lugar de poucos anos antes ou depois, sem o ano na tela e com a data real no crédito? Ela lista os 11 planos que um sim destravaria (nona revisão: respondida pelo Lucas em 27/09, não; sem foto do ano, mapa ou desenho, §0g) |
| **2. Número antes da voz.** Nenhum texto ou número entra antes de a voz dizê-lo; o piso de 2,0 s se cumpre deixando o texto ficar depois | Em s28, s29, s31 e s56, o número deixou de ser "ênfase" de um bloco travado numa palavra anterior: cada texto entra na palavra que o diz ("six to three", "nearly fifty-three percent", "more than a million dollars", "about a quarter"), e o que a voz não diz entra na palavra que o convoca (o placar em "the no side won"; o $800 million em "that"). Em s01, a data entrava em "approved", 3,38 s depois de dita; entra agora em "August twenty-seventh". A varredura nova do conferente achou 25 planos em que a voz diz o texto a menos de 2,0 s do fim do plano. `_texto_no_ar` virou uma lista de {texto, palavra, de, ate, sobre}: **15 atravessam o plano seguinte da mesma cena** (s05 p1, s07 p3, s10 p3, s11 p1, s12 p1 e p3, s15 p1, s20 p2, s25 p1, s28 p1, s39 p1, s50 p1, s55 p1, s58 p1, s60 p1), e **10 são conflito**, porque o corte para a cena seguinte vem antes de 2,0 s: s10 p4 (0,73 s), s15 p3 (1,95), s20 p3 (1,53), s25 p2 (1,31), s28 p3 (1,87), s29 p2 (1,38), s31 p5 (1,45), s35 p4 (1,66), s38 p2 (0,85) e s56 p2 (1,58). Nenhum foi antecipado: os 10 estão na pendência **PARA O REGENTE-DE-IMAGEM** (21º item, passo conducting). A regra está em `_nota_texto_no_ar`, no topo do espelho. A pendência #16 foi corrigida e ganhou s24 p1 e os 0,33 s do 28 de s28 sobre o estádio |
| **3. Os baixos de uma linha** | **s16:** a sigla da PRANCHA saiu de `grifar` e foi para `conferir`, e o conferente perdeu a exceção da PRANCHA. **Lynn Canal:** a entrada de `mesmo_lugar_clipes_diferentes` exige clipes diferentes entre s43 p1, s44 p5 e s51 p1 e p2, e cita as balsas de s47 e s52; a `midia_necessidade` de s43 e a de s51 dizem o mesmo. **needs.geo:** o `rotulo` é só o nome da tela em inglês ("Klondike Highway", "Cascade Point", "Mat-Su Valley"…), ou vazio onde a feição não tem nome próprio; a descrição, os extremos e a fonte foram para `_exige`, a anotação que o schema do espelho documenta para `needs.geo` (o contrato do pesquisa-geo lê só `{ tipo, id, rotulo }`): 51 rótulos em 12 cenas. **s61:** "State money may be expended" foi para `conferir`, porque a voz o diz depois da condição, e o marca-texto não varre para trás |

**Conhecidos, sem conserto nesta revisão** (s49, s54 e s57 foram consertados na verificação desta revisão, abaixo):
- A varredura não vê texto que o objeto descreve sem número nem aspas. Nesses, vale a regra de `_nota_texto_no_ar`. As falas
  do modo citação não foram varridas (oitava revisão: passaram a ser, parte por parte; abaixo).

**As provas.** Contra a cópia de antes desta revisão, o conferente novo reprova com **117 falhas**, todas das provas novas:
- decisão 1: 11 da regra do crédito, 18 de termo de década ou de outro ano, 1 de "sem rótulo de ano" em foto de época e 1 da
  pergunta que faltava;
- decisão 2: 6 da "ênfase", 24 de texto dito a menos de 2,0 s do fim do plano sem `_texto_no_ar`, e 2 do `_texto_no_ar` de
  s12 em texto solto;
- decisão 3: 1 do grifo na PRANCHA, 1 da ordem de s61, 1 do Lynn Canal e 51 de rótulo.

Contra o espelho novo, passa. **22 mutações** do espelho novo, cada uma com um desses defeitos de volta (ou um `sobre` errado,
um conflito fora da pendência do regente, um conflito onde cabe atravessar, uma trava que leva frase dita depois, a palavra
fora do tempo), saem todas com exit 1, pelo motivo certo. Os portões do §3 deram o mesmo de antes.

**A verificação desta revisão** achou três médios e dois baixos, todos reproduzidos antes do conserto. Nenhum tempo, regime,
id ou borda mudou.

| Achado | Conserto |
|---|---|
| **O conferente não media a entrada** (médio). A decisão 2 só era guardada pelas palavras "ênfase" e pela distância ao fim do plano: as quatro mutações do verificador (o 6 a 3 em "January 2017", o milhão em "Reamer adds", o 53% em "the no side won", a data de s01 em "approved") passavam com exit 0 | Prova nova: em cada cláusula com verbo de entrada e palavra entre aspas, o que ela põe na tela (antes do verbo, e depois da palavra, fora dos parênteses: números, que a voz diz por extenso, "a million" incluído; datas, pelo mês; frases entre aspas; "a data" = as datas do objeto) é dito pela voz, na cena, até o fim da palavra de entrada, e a entrada não vem mais de 1,0 s depois da voz no mesmo plano. A linha de saída e a do §2 dizem agora o que é medido e o que não é |
| **A pergunta ao Lucas errava o custo de um sim** (médio) | Com o sim, 1880 (s06 p2) e 1914 (s09 p1) saem do vídeo inteiro, porque a voz não os diz e nenhum documento os mostra (o 1914 foi para a tela porque saiu da voz, f-015); em s13, o 1974 fica só no "that same year"; só em s16 o ano fica na voz. O conferente cobra que a pergunta nomeie cada ano que a voz da cena não diz (nona revisão: a pergunta foi respondida e saiu, com esta prova, §0g) |
| **Texto dito tarde demais, fora da pendência do regente** (médio) | s54 p1 declara, se a queda for à tela, a entrada em "more than three quarters" e o conflito (1,905 s, plano único), e entrou na pendência PARA O REGENTE-DE-IMAGEM, que passa a ter **11** conflitos. s49 p1 e s57 p1 dizem que a fala não vai à tela: sobre o REGISTRO, só o rótulo de lugar e o crédito; no card, só nome e cargo (identidade §5) |
| **s23 citava s06 como "século XIX"** (baixo) | Agora "s06 (Juneau de 1900 a 1906; o acampamento de 1880)"; o conferente barra a referência velha |
| **O "inflated" de Harris sobre o card de Clark** (baixo) | O `_texto_no_ar` de s25 tem nota: a palavra sai com a atribuição a Harris, nunca solta ao lado do card de Clark, e a forma da saída é do regente. O conferente cobra essa nota em toda travessia sobre o card de outra pessoa |

**As provas desta verificação.** O conferente passa no espelho novo. **13 mutações** do espelho novo saem todas com exit 1, pelo
motivo certo: as quatro do verificador, mais três da mesma classe (o ABOUT A QUARTER em "The ad called that", a data de s56
em "six to three", o "inflated" em "called the figures"), a pergunta antiga, a pergunta sem o 1880, s54 fora da pendência,
s54 sem `_texto_no_ar`, s23 com o "século XIX" e s25 sem a nota. Contra a cópia de antes da sexta revisão, a prova nova da
entrada reprova sozinha s01, s28, s29 e s56 (o s31 de lá punha o número noutra cláusula, e só a prova da "ênfase" o pega).
**Não guardado pelo conferente:** a volta do "split almost evenly" ou do "votou não" sem dizer se vão à tela (nem aspas de
registro, nem português, se varrem); trava escrita sem o vocabulário de entrada ("acende", "aparece com"); o que entra e a
voz não diz na cena (o 57% de s01, o placar de s29).

**A segunda verificação desta revisão (oitava revisão)** achou um médio e cinco baixos, reproduzidos no disco antes do
conserto: o conferente novo, contra a cópia de antes, reprova com 8 falhas (s34, s41, s55 e s57; s06, s09 e s13; s15). Nenhum
tempo, regime, id, borda, `convocado_por` ou termo mudou; pelo diff campo a campo, mudaram só os campos desta tabela, mais
`_nota_texto_no_ar`, `_revisao` e `_revisado_em`.

| Achado | Conserto |
|---|---|
| **A decisão 2 não chegava à fala do modo citação nem ao texto que se soma a um bloco** (médio). Pela regra da própria `_nota_texto_no_ar`, s57 p2 e s55 p2 ficavam abaixo de 2,0 s antes do corte, sem conflito declarado; s34 p2, s41 p2 e s17 p2 não diziam como a fala ou a definição entra | `_nota_texto_no_ar` diz agora o que é "cada um": número e data nas palavras que os dizem; fala citada em partes (cada frase, e cada trecho entre as interrupções do narrador), e o recorte de uma fala na primeira palavra dele; bloco descritivo sem número inteiro, no começo da frase da voz que o diz. Daí **quatro conflitos novos** para o regente-de-imagem, com `_texto_no_ar` e na pendência: s34 p2 ("no price tag is attached", 1,5 s), s41 p2 ("It's never all the way dead", 1,27 s), s55 p2 ("He cited the state's fiscal crisis", 1,853 s; saiu o "no ar 4,8 s", e o §0b, B5, diz que foi superado) e s57 p2 (o recorte, em "but", 1,433 s). A pendência tem agora **15** conflitos. s17 p2 diz que a definição entra inteira em "A bond is money" (3,283 s até o corte), por ser uma frase só da voz, e diz que, partida, a segunda parte ficaria 1,609 s (conflito) |
| **O ano que a voz não diz, sem a palavra de entrada** (baixo): s06 p2 (1880), s09 p1 (1914) e s13 p1 (1974) | Os três objetos nomeiam a palavra que convoca o ano: "The city" (2,153 s até o corte), "A railroad" (2,703 s) e "The state Supreme Court upheld" (3,377 s). s13 diz que o "that same year" deixaria 1,425 s |
| **Dois pontos cegos do conferente** (baixo): o número descrito num plano anterior ao da voz; a regra do crédito com outras palavras | Provas novas, abaixo. As oito mutações do verificador reprovam |
| **§5.2 dizia 10 conflitos** (baixo) | 15, com s54 p1 (sétima) e os quatro desta revisão; também no §2 e no §5.7 |
| **O histórico dava a regra do crédito como vigente** (baixo): §0, B4; §0d, G10; §0e, a regra mais estrita e G1 | Cada um diz agora que foi superado na sexta revisão |
| **O rotulo "Larson Lake, Mount Yenlo"** (baixo), em s15 | Ficou vazio, como nas feições sem rótulo de tela decidido; os dois nomes estão no `_exige`, que pede uma camada para cada |

**O que o conferente passa a medir:**
- a fala do modo citação, parte por parte (as frases e os trechos entre as interrupções do narrador), fora a cláusula que diz
  que a frase não vai à tela; as frases entre aspas vão até 200 caracteres (a fala de s05, com 82, ficava fora);
- texto que "se soma" a um bloco (ou "no mesmo bloco") nomeia a palavra de entrada;
- o ano posto "na tela" que a voz da cena não diz nomeia a palavra que o convoca;
- nenhum objeto põe na tela um número que a voz só diz num plano seguinte da cena;
- a regra do crédito com outras palavras reprova ("o ano da foto", "a data real", a data "na legenda" ou "na procedência",
  ou uma cláusula que aceita foto de um ano fora do fato);
- o `rotulo` de `needs.geo` não tem vírgula.

**As provas.** O conferente passa no espelho novo (exit 0) e reprova a cópia de antes com as 8 falhas acima. **22 mutações** do
espelho novo saem todas com exit 1, pelo motivo certo:
- as oito do verificador: d1c, d1d e d1e (a regra do crédito com outras palavras) e d2a, d2b, d2c, d2j e d2k (número antes
  da voz);
- catorze desta revisão: o `_texto_no_ar` e a pendência de s41 e s57; os objetos antigos de s34, s55 e s57; a crise fiscal
  que "segue no mesmo bloco"; s06 e s09 sem a palavra; s13 em "that same year"; s17 em "pays back" e em duas frases sem
  `_texto_no_ar`; o rotulo antigo; um aceite de 1984 em s23.

`validar-contrato --estrito` e os portões do §3 deram o mesmo de antes, e o `alinhar-timestamps --dry` numa cópia não a mudou.

**Conhecidos, sem conserto nesta revisão:**
- O texto descrito em português, sem número e sem aspas, não se mede: a parte de um bloco que a voz diz noutra frase só a
  leitura acha. Li à mão os planos de desenho, dados, citação e mapa que fecham uma cena. Fora dos quatro acima e dos que já
  declaravam conflito, nenhum fica abaixo de 2,0 s pela regra de `_nota_texto_no_ar`. No documento, a página é a imagem, e o
  grifo segue a voz.
- Rótulos de lugar, no mapa e no registro, não são texto que o objeto dite: entram pelo word-lock do mapista, com a mesma
  regra. Dois ficariam menos de 2,0 s no ar antes do corte se entrassem com a voz: o Yukon em s44 (1,41 s) e Cascade Point
  em s59 (1,03 s). Estão em `_nota_texto_no_ar`, e a saída, se o rótulo for à tela, é do regente-de-imagem.
- A mutação d2e do verificador ("aparece junto com", sem o verbo de entrada que a prova procura) continua passando, como o §2
  declara.

## 0g · A nona revisão de 27/09: as decisões do Lucas e a palavra de entrada

O Lucas respondeu em 27/09 quatro pendências deste espelho, e o Claude central decidiu uma para o regente-de-imagem. As
respostas literais estão onde as regras moram (CLAUDE.md, "A marca"; `marca/midia.md` §7.5 e §7.6; `marca/identidade.md` §6),
e o resumo, em `espelho.json` › `_decisoes_do_lucas`. Nenhum tempo, regime, plano, id, borda, `convocado_por` ou termo mudou.
Pelo diff campo a campo contra a cópia de antes, mudaram só os campos desta tabela, mais `_revisao` e `_revisado_em`.

| Decisão | O que mudou no espelho |
|---|---|
| **1. A cópia arquivada de página oficial do Alasca vale como fonte**, com a data (Lucas: "Vale, com a data (Recomendado)") | As 22 cenas de `_fonte_arquivada` dizem "CÓPIA ARQUIVADA — VALE COMO FONTE" e trazem a data da captura de cada fonte que citam, tirada do `url_acessada` do dossiê (ex.: doc-10, 13/04/2023; doc-18, 18/02/2017). O crédito na tela é o da Divisão de Eleições. O NÃO CONFERIDO saiu das `_citacao` (s05, s18, s34), das `_pessoas` (s05, s25), das `_grafias` (s05, s16, s25), dos 11 `_documentos` e das peças e retratos do despacho. A lista `nao_conferido_ate_o_navegador` da pesquisa-dados virou `lidas_de_copia_arquivada`. A permissão de uso das peças (midia.md §7.1) continua a conferir, na origem de hoje: a cópia vale para o texto e não é licença (décima revisão, §0g.1) |
| **2. Vídeo do governo do Alasca entra; o de jornal, só com licença** (Lucas: "Do Estado sim; de jornal não (Recomendado)") | s47 e s52 (a balsa estadual) aceitam o vídeo do Estado, com a fonte na tela. s41 e s57 citam a regra nova: a gravação de imprensa e a da prefeitura continuam só com licença |
| **3. Logo de órgão federal e de outras instituições: só o nome escrito** (Lucas: "Só o nome escrito (Recomendado)") | As `_nota_logos` de s28, s29, s31, s43, s52 e s58, as notas do despacho do pesquisa-logos e as entidades FHWA e Dittman Research dizem a regra. `needs.logos` só pede bandeira; a pendência da bandeira fora da PRANCHA continua |
| **4. Sem foto do ano, mapa ou desenho** (Lucas: "Não: sem foto do ano, vira mapa ou desenho") | A pergunta saiu das pendências. Os 11 planos que ela listava continuam pedindo foto do ano do fato e, sem ela, mudam de regime num re-espelho com o mesmo id; agora o destino é sabido: mapa ou desenho. s06 cita a confirmação |
| **5. A palavra de entrada é da regência** (Claude central) | A pendência PARA O REGENTE-DE-IMAGEM ganhou a decisão, literal: nenhum texto ou número entra antes de a voz dizê-lo, e a `_nota_texto_no_ar` é proposta do montador. O "bloco descritivo inteiro no começo da frase", o 1974 de s13 em "The state Supreme Court upheld" (antes de "that same year"), s39 (2002) e s49 (79) ficam para o regente. A `_nota_texto_no_ar` ganhou uma frase que aponta para lá |

**As provas.** O conferente trocou as provas que cobravam as pendências, sem afrouxar:
- o aviso de `_fonte_arquivada` diz que a cópia vale e traz, para cada doc-NN ou mec-NN que cita, a data da captura do
  `url_acessada` (o conferente lê agora também `pautas/juneau/fundamento.json`);
- nenhum texto vivo (fora de `_revisao`) chama a cópia arquivada de não conferida ou pendente, nem trata como pendente o vídeo
  do Estado ou a logo de instituição; `needs.logos` só pede bandeira;
- a pergunta sobre foto de outro ano não volta às pendências, a decisão está em `_decisoes_do_lucas`, e os 11 planos que ela
  listava continuam dizendo o re-espelho com o mesmo id (a lista ficou gravada no conferente). As provas da sétima revisão
  sobre o custo de um sim saíram com a pergunta.

O conferente passa no espelho novo (exit 0) e reprova a cópia de antes com **169 falhas**: 148 da cópia arquivada, 14 de logo,
3 de vídeo e 4 da pergunta do ano. **Nove mutações** do espelho novo saem todas com exit 1, pelo motivo certo: a pergunta de
volta, a decisão 4 fora de `_decisoes_do_lucas`, uma data de captura errada, o aviso antigo, uma logo pendente, uma logo em
`needs.logos`, o vídeo do Estado pendente, s13 sem o re-espelho e uma nota com NÃO CONFERIDO. `validar-contrato espelho
--estrito` passa.

### 0g.1 · A décima revisão de 27/09: a verificação da nona

O verificador achou a decisão 1 registrada mais larga do que a pergunta. Mudou isto:
- **O alcance.** A pergunta falava de "páginas oficiais do Alasca". A regra agora diz isso: a cópia arquivada de página
  oficial do Estado do Alasca vale como fonte do texto (CLAUDE.md, "A marca"). A de outros sites (a Library of Congress,
  o eCFR, jornal, empresa) não foi perguntada e não se usa. `_decisoes_do_lucas`[0] foi corrigida.
- **A licença.** A cópia prova o texto, não a licença. As 14 `licenca` de documento (11 `_documentos` e 3 peças do
  despacho) diziam que a permissão se conferia "pela cópia arquivada" e agora dizem: na origem de hoje, pelo navegador
  do app. A nota do despacho dos documentos, também.
- **Os boletins de 1960 e 1962** (s11): a pergunta nomeou os resultados de 1974 a 2002. Eles são do mesmo arquivo
  oficial da Divisão (`elections.alaska.gov/Core/Archive/`) e entram pela primeira frase da pergunta; `_fonte_arquivada`
  de s11 diz isso.
- **O conferente.** A guarda do vídeo ganhou o `/i`, e a da logo lê a oração inteira: logo dada como pendente ou
  deixada entrar reprova. Entraram duas guardas: nenhum texto estende a cópia a "site que recusa robô", e nenhuma
  licença se confere "pela cópia arquivada".

Pelo diff campo a campo, mudaram 17 campos de texto, mais `_revisao` e `_revisado_em`, e nenhum tempo, regime, plano ou id. O conferente passa (exit 0), e
`validar-contrato espelho --estrito` também. Nove mutações saem com exit 1, pelo motivo certo: as três do verificador
(vídeo do Estado "ainda espera o Lucas", logo federal "pendente" e logo que "pode entrar como selo"), o vídeo do Estado
negado, o vídeo e a logo em maiúsculas, a cópia estendida a "site que recusa robô", a licença conferida "pela cópia
arquivada" e o aviso de s11 com "NÃO CONFERIDA". O espelho de antes desta revisão reprova com 15 falhas: 14 de licença
e 1 de alcance.

## 0h · A décima primeira revisão, de 28/09: o re-espelho que a pesquisa de mídia devolve

O despacho do Claude central chama esta revisão de **sétima**: ele conta as do passo `research`, e o `_revisao` do espelho conta
todas, com as de verificação de 27/09 (a sétima à décima). É a mesma revisão. O passo na linha é `research`, e os ids são os
mesmos.

**As entradas, no disco:**
- os vereditos do conferente: `out/juneau/_pesquisa/conferencia-midia.json` e o `.md` (5 despachos, o último de 28/09 às
  01:14; 35 candidatos: 25 aprovados, 9 trocar e 1 reprovado; sha256 `f1f699e3…`);
- as seis pautas (`pauta-*.json`) e os seis relatórios (`research-*.md`) dos pesquisadores, o `navegador-relato.md` e o
  `pauta-geo.json` (40 camadas);
- a lista de `out/juneau/_media/` (só os nomes: o montador não abre mídia) e o `_RETIRADO.json` das bandeiras;
- a marca: `identidade.md` §5 e §6 (a ordem da foto do ano, o aviso, a peça de acervo, o país no mapa, a rota nunca
  construída, o documento antigo e o de outra data) e `midia.md` §7;
- as fontes locais dos trechos novos: `fseis.txt` (ES-4.3, linhas 538-544; §2.2.1, 3665-3668; o ROD, 233-238),
  `ca9_2011.pdf.txt` (87-88 e 120-124) e `cap-boucher.json` (Caselaw Access Project).

Nada foi escrito em `out/juneau/_media/`, nos `conferencia-*.json` nem na `pauta-imagens.json`. O `words.json` (`a8d5ec77…`), o
texto aprovado (`28aa6630…`) e a `narracao.wav` (`468b045b…`) estão intactos.

**Ids e tempos.** Os 61 ids ficam, nenhuma cena nasceu nem morreu, e nenhuma borda de cena mudou: `inSec`, `dur`, `_quadros`,
`_borda`, `ancora` e `_texto_aprovado` são os de antes, cena a cena (conferido por script contra o espelho do commit
`093c9cc`). Uma borda de **plano** é nova: o plano 2 de s09 se partiu em **82,9 s** (quadro 2.487), na pausa entre "bases"
(acaba em 82,89) e "went" (82,922), e a metade de Anchorage virou o plano 3, de mapa. São 141 planos (eram 140).

### 0h.1 · O que mudou, pelos oito pontos do despacho

**1 · País no mapa, sem bandeira** (identidade §6; Lucas, 27/09/2026: "Só o nome escrito (Recomendado)").
- s03, s10 e s44 perderam os pedidos de bandeira. `needs.logos` está vazio no vídeo inteiro, e `_despacho_research` › `logos` ›
  `pedidos` também.
- A `_nota_logos` das três diz a regra e que as 8 bandeiras entregues saíram de `_media/logo/` para
  `_media/_caca/_retirado/logo/` (27/09). Em s44, a regra vale também para a British Columbia e o Yukon.
- Saíram a pendência e as notas do despacho que a davam como pendente. A bandeira dentro do círculo da PRANCHA não foi
  perguntada (identidade §6), e nenhuma cena do Juneau a pede.

**2 · Rota que nunca foi construída, como esquema** (identidade §6; Lucas, 27/09/2026: "Sim, tracejada e com aviso
(Recomendado)").
- s44 plano 3, s48 planos 1 e 2 e s50 planos 1 e 2: esquema tracejado pelo texto da fonte, a partir do ponto de partida real,
  com o aviso `Approximate route` no papel legenda de §4.1, na tela todo o tempo da linha. A figura do estudo de 2018 não se
  decalca (midia.md §7.1).
- Cada cena tem `_esquema`, com a regra e, por rota, os planos, o ponto de partida, o caminho e a fonte entre aspas:

| Rota | Parte de | Por onde | Fonte |
|---|---|---|---|
| s44, o corredor do Lynn Canal | `cascade-point` | para o norte, pela margem leste do fiorde, rumo a Haines e Skagway | FSEIS 2018, p. 1-6 (mec-01.7) e ES-4.3 |
| s44, o corredor do Taku | `thane-road-fim` (**pedido novo**) | para o nordeste ao longo do Taku Inlet, cruzando a fronteira e subindo o vale do rio | FSEIS 2018, p. 2-2, §2.2.1 (fseis.txt:3665-3668) |
| s48, a margem leste (2000) | `cascade-point` | para o norte pela margem leste, até perto do delta do Katzehin | 9º Circuito, 2011, p. 5896 (ca9_2011.pdf.txt:120-124) |
| s50, a Alternativa 2B (2006) | `echo-cove-gnis` | de Echo Cove a Cascade Point, a estrada que existe (traço cheio); dali ao norte do delta do Katzehin (tracejado); a balsa até Haines e Skagway (tracejada) | FSEIS 2018, ES-4.3 (fseis.txt:538-544) |

- O ponto de partida do Taku, o fim da Thane Road, não está em disco. É o único pedido aberto ao pesquisa-geo
  (`thane-road-fim`, `_existe: false`; `_despacho_research` › `geo`). Sem ele, o esquema do Taku não se desenha, e o plano 3 fica
  com o rio, o rótulo do Taku Inlet e a voz (`_esquema.taku.sem_o_ponto`).
- A geometria que os esquemas usam veio do research: o Lynn Canal e o Taku Inlet como pontos do GNIS (`lynn-canal-gnis`,
  `taku-inlet-gnis`), só com o rótulo, porque eixo e contorno não existem em nenhuma fonte (research-geo.md §2); a foz do
  Katzehin (`katzehin-river-gnis`) e Echo Cove (`echo-cove-gnis`), do GNIS; e Cascade Point, do OSM. O terminal previsto e a rota
  2B foram para `_geo_nao_achado` de s50.
- A seta sem linha da quinta revisão (s44) saiu: era a solução provisória até a decisão.

**3 · Foto de outro ano, com o aviso do ano** (identidade §6; Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver
foto pode utilizar com um aviso em tela"), e **peça de acervo fotografada depois, sem aviso** (Lucas, 28/09/2026: "Sem aviso,
como documento (Recomendado)").
- Nenhum texto diz mais que foto de outro ano não entra, nem que o plano sem foto do ano muda de regime (a divergência 1 do
  conferente).
- O ano de cada aviso é o `data_na_origem` do veredito, conferido um a um contra o objeto (tabela do ponto 4).
- A decisão que a nona revisão gravou em `_decisoes_do_lucas` ("Não: sem foto do ano, vira mapa ou desenho") foi reescrita com
  a mensagem que a mudou no mesmo dia, e a de antes fica registrada como superada.
- A camiseta de s28 vai sem aviso. O veredito dela foi regravado assim no 5º despacho do conferente (`aviso_de_ano: false`).

**4 · O que a pesquisa entregou.** Os vereditos `aprovado` do conferente, com os arquivos em `_media/foto/`, `_media/pessoa/` e
`_media/documento/`. Os objetos dizem o arquivo, a origem, o crédito (ou domínio público, sem crédito) e o que o conferente pediu
no enquadramento.

| Plano | Arquivo | Data na origem | Na tela |
|---|---|---|---|
| s01 p1 | `foto/s01/juneau-downtown-front-street-ca1987-gillfoto.jpg` | circa 1987 | aviso do ano; Gillfoto / Wikimedia Commons · CC BY-SA 4.0 |
| s06 p1 | `foto/s06/juneau-harbor-gastineau-channel-ca1899-pillsbury-cleveland.jpg` | circa 1899 | aviso do ano; domínio público |
| s06 p2 | `foto/s06/juneau-city-1887-partridge-smu.jpg` | 1887 | aviso do ano, ao lado do 1880 da tela; domínio público |
| s07 p2 | `foto/s07/sitka-1906-case-draper-loc-2004672324.jpg` | 1906 | sem aviso (o ano do fato); a foto pequena, impressa sobre a mesa, até 1,4× |
| s09 p1 | `foto/s09/anchorage-white-city-tent-camp-1915-07-01-pyatt.jpg` | 1º/7/1915 | aviso do ano, ao lado do 1914; domínio público |
| s09 p2 | `foto/s09/ladd-field-operations-hangar-1943-07-09-nara-204947418.jpg` (e, de reserva, o pátio, `…apron…-204947416.jpg`) | 9/7/1943 | aviso do ano; domínio público federal |
| s10 p1 | `foto/s10/alaska-highway-1942-06-02-corduroy-charlie-lake.jpg` | 2/6/1942 | sem aviso; domínio público federal |
| s16 p1 | `foto/s16/fairbanks-downtown-chena-1973-08-documerica-cowals-550551.jpg` | agosto de 1973 | aviso do ano; Dennis Cowals / National Archives (exceção do DOCUMERICA) |
| s16 p2 | `foto/s16/fairbanks-downtown-international-hotel-1972-08-chesi.jpg` | agosto de 1972 | aviso do ano, no quadro do 1977; Piergiuliano Chesi / Wikimedia Commons · CC BY 3.0 |
| s22 p1 | `foto/s22/alaska-house-5th-legislature-1967-68-capitol-steps.jpg` | 1967/1968 | aviso do ano; State of Alaska / Alaska State Library |
| s23 p4 | `foto/s23/juneau-downtown-hillside-homes-aerial-ca1993-gillfoto.jpg` | circa 1993 | aviso do ano; Gillfoto / Wikimedia Commons · CC BY-SA 4.0 |
| s28 p3 | `foto/s28/anchorage-stealers-1982-tshirt-back-asm-97-20-1-gelotte-adn.jpg` | 2015 (a peça é de 1982) | sem aviso (peça de acervo); Dave Gelotte / Alaska State Museum |
| s35 p1 | `foto/s35/wasilla-lake-chugach-2010-06-06-foubister.jpg` | 6/6/2010 | aviso do ano; Murray Foubister / Wikimedia Commons · CC BY-SA 2.0 |
| s37 p1 | `foto/s37/alaska-house-chamber-2024-08-15-ifly6.jpg` | 15/8/2024 | sem aviso (a regra de hoje); Ifly6 / Wikimedia Commons · CC BY-SA 4.0 |
| s37 p2 | `foto/s37/alaska-senate-floor-session-2020-03-24-brooks.jpg` | 24/3/2020 | sem aviso (a regra de hoje); James Brooks / Wikimedia Commons · CC BY 2.0 |
| s41 p1 | `pessoa/s41/kiehl-jesse-senator-2025-01-21-senate-majority.jpg` | 21/1/2025 (EXIF) | card com retrato, sem aviso |
| s49 p1 | `foto/s49/juneau-downtown-mount-roberts-1997-04-gillfoto.jpg` | 21/4/1997 | aviso do ano; Gillfoto / Wikimedia Commons · CC BY-SA 4.0 |
| s55 p1 | `foto/s55/walker-bill-governor-2016-11-15-togiak.jpg` | 15/11/2016 | card com retrato, sem aviso; domínio público federal |
| s56 p1 | `foto/s56/juneau-assembly-2017-01-23-dais-je-penn.jpg` | 23/1/2017 | sem aviso; Michael Penn / Juneau Empire |
| s57 p1 | `pessoa/s57/gladziszewski-maria-assemblymember-2020-09-12-cbj-retrato.jpg` | 2020 | card com retrato e o aviso Photo from 2020 na margem de baixo |
| s07 p1 e p4 | `documento/s07/stat-31-321-1900-p1.jpg` e `stat-37-512-1912-p1.jpg` | — | originais, até 1,4×; mais perto, a recriação datilografada |
| s52 p1 | `documento/s52/ca9-2011-seacc-p04.jpg` | 4/5/2011 | original, com o rótulo "upheld on appeal, 2011" |
| s58 p1 | `documento/s58/federal-register-2018-16263-p1.jpg` | 30/7/2018 | original, com o recorte do conferente |

**5 · Sem nenhuma foto: o regime novo, com o mesmo id** (identidade §6, "a ordem": sem nenhuma foto, o plano vira mapa ou
desenho). A pesquisa passou pelos acervos abertos e pelo navegador do app antes (research-imagens.md).

| Plano | Era | Agora | Por quê, e o que vai à tela |
|---|---|---|---|
| s09 p3 (a metade de Anchorage do antigo p2, de 82,9 a 85,167 s) | foto | mapa | Fort Richardson (1940) só se compra na Alaska State Library, e o Lucas decidiu não comprar ("Não comprar (Recomendado)"). O mapa acende Anchorage e Fairbanks, e a foto da Ladd Field encolhe para o ponto de Fairbanks (ofício §6.7) |
| s13 p1 | foto | documento | A corte de 1974 não se achou, nem de outro ano. A folha recriada de Boucher v. Engstrom (1974), pelo texto do Caselaw Access Project, sem a página do Pacific Reporter, que é da West. O plano 2 já era documento (o parecer de 1993) |
| s20 p1 | foto | dados | A eleição de 7/11/1978 não se achou. A cédula no DADO: a cena fica em DADO do começo ao fim |
| s29 p2 | foto | dados | A eleição de 2/11/1982 não se achou. O placar no DADO, depois da pesquisa de opinião do plano 1 |
| s31 p5 | foto | desenho | A campanha de 1982 não se achou. O gasto na PRANCHA, como os planos 1 a 3 |
| s56 p2 | foto | dados | A segunda foto da sessão de 23/1/2017 não se achou, e foto de outra sessão não entra. A data e o 6 a 3 no DADO |
| s58 p4 | foto | documento | A briga pública com os dois lados não se achou (as do comício de 2014 da KTOO mostram um lado só; trocar). O ROD recriado segue na tela, com o grifo "Controversy on the JAI Project is high among the public" em "a public fight over the road" |
| s62 p1 | foto | desenho | O voto de 1974 não se achou, e a foto de s01 não cobre esta fala (trocar). O YES da abertura, sem os números, com a linha do preço em branco. Desenho, e não DADO: o placar de s60, 8,8 s antes, já é DADO |

- **s26 também mudou de regime**, fora da lista do despacho: as mascotes se acharam só na coluna do ADN de 2026, sem permissão
  (research-documentos.md §3 e §4), e o retrato de Stoops não se achou. Os três planos passaram de documento a desenho (a
  PRANCHA com os nomes escritos e o card só com nome e cargo).
- **s28 p2**, o estádio, continua na lista da caça nos bancos pagos, como estava.
- **As viradas.** Saíram as de s13, s20, s29 e s58, porque a cena ficou num regime só. Entraram s09 (foto → mapa, em "went") e
  s56 (foto → dados). Em s31, a segunda virada é agora citação → desenho. A de s10 continua foto → mapa e agora é **corte
  seco**: a origem da foto dá o setor de Fort St. John, ao norte do Charlie Lake, e nenhum ponto desse trecho está em
  `needs.geo`. São 22 viradas em 17 cenas (eram 24 em 19).

**6 · Cards de pessoa.**
- Só com nome e cargo (identidade §5): Harris (s05, s25), Clark (s25), Stoops (s26, s27, s31), Reamer, Dittman e Rae (s31) e
  Knowles (s48). Os planos perderam `midia_termos` e `_pedido_a` e ficam com `_pessoa`. s05, s25, s26, s27, s31 e s48 passaram a
  `midia: animacao`.
- Com retrato: Kiehl (s41), Walker (s55, em `_media/foto/s55/`) e Gladziszewski (s57, o de 2020, com o aviso Photo from 2020 na
  margem de baixo da foto impressa).
- `_despacho_research` › `retratos` guarda o `resultado` de cada pessoa.

**7 · Documentos.**
- s07 planos 1 e 4: as leis de 1900 e 1912, originais, como a folha só até 1,4× (a página inteira na altura da tela pede
  1,26×), e o trecho visto mais perto na recriação datilografada (identidade §5, "Documento antigo").
- s13 plano 1: Boucher v. Engstrom recriada (ponto 5). A nota da ordem de 27/06/1974, que confere o "that same year", está em
  `conferir`.
- s31 plano 4: a Trends de junho de 1990 recriada com a fonte, e a página como prova (Lucas: "Recriar com a fonte
  (Recomendado)").
- s52 plano 1: a página 4 da decisão do 9º Circuito de 4/5/2011, com o rótulo "upheld on appeal, 2011" na tela todo o tempo da
  página (identidade §5; Lucas: "Sim, com o rótulo (Recomendado)"). O grifo "The district court vacated the FHWA’s Record of
  Decision (“ROD”)" varre enquanto a voz diz "a federal court threw out that choice" (542,62 s). A de 2009 continua NÃO ACHADA,
  e a capa do acórdão saiu.
- s58 plano 1: o aviso original do Federal Register, com o recorte do conferente (fora o fim do aviso da FAA e os contatos; o
  cabeçalho de July 30, 2018 ou fica fora, ou entra junto com a linha "issued on June 18, 2018"). Plano 4: o grifo da
  controvérsia (ponto 5).
- `_despacho_research` › `documentos` acompanha: 29 trechos a grifar (eram 27), cada um com a voz provada dentro dos planos.

**8 · As pendências.** Saíram as duas que o Lucas decidiu (a bandeira e o esquema). As outras 16 ficaram, cada uma com a data
desta revisão. Mudaram o gasto de render (13 cenas com mapa, com s09), o relevo (as fontes foram aceitas em 27/09; usar em s44
continua pendente), a régua (44,9%), o número sobre registro (saíram s29 p2, s31 p5 e s56 p2) e a divergência do §1b (s26).
`_decisoes_do_lucas` tem 13 decisões: a da foto de outro ano, reescrita, e 9 novas (o país no mapa, a rota, o documento de outra
data, o documento antigo, a Trends, a Alaska State Library, o DOCUMERICA, o download da camiseta e a peça de acervo).

**A geometria.** O research entregou 40 camadas em `_media/geo/` (`pauta-geo.json`; research-geo.md).
- Os pedidos que estavam `_existe: false` e estão em disco passaram a `true`, com a fonte e a licença no `_exige` (s03, s10,
  s12, s15, s33, s39 e s44).
- Ids novos, todos em disco: `estrada-glennallen-tok` (s10: sem ele, a Glenn do OSM não chega à Alaska Highway),
  `limites-sitio-willow-1976`, `larson-lake-gnis` e `mount-yenlo-gnis` (s15), `alaska-highway-trecho-yukon`,
  `haines-junction-osm` e `taku-inlet-gnis` (s44), `lynn-canal-gnis` (s44, s48 e s50), `katzehin-river-gnis` e `cascade-point`
  (s48 e s50) e `echo-cove-gnis` (s50).
- O que não se achou foi para `_geo_nao_achado` da cena, com o que vai no lugar: as áreas de Anchorage e Fairbanks (s10), os
  distritos eleitorais de 1974 (s12), o ponto e o contorno do local de Willow e o contorno de Larson Lake e Mt. Yenlo (s15), e o
  terminal do Katzehin e a rota 2B (s50).
- O único pedido aberto é `thane-road-fim` (s44).

**A pesquisa-dados.** A conferência das 45 cenas voltou sem número que contradiga a voz (research-dados.md, 27/09), e o espelho
não muda por ela. A busca nova de s54, a série diária do preço do petróleo, não se achou por script: ela é do Department of
Revenue, cujo site recusa robô, e a da EIA é mensal e é outra medida. O pedido fica aberto ao Claude central, no navegador do
app, e sem a série a tela mostra os pontos extremos da fonte, sem linha, como a `_figura` já dizia. O `needs.dados`, o
`_despacho_research` › `dados` › `busca_nova`, a `midia_necessidade` e o objeto do plano de s54 dizem isso. O achado da
pesquisa, o título do Graph 2-1 ("Daily ANS West Coast Oil Price 2012-2016"), foi para o `needs.dados` de s54: a sigla tem
fonte, e usá-la é do redator-de-tela.

### 0h.2 · O verificador

As provas que a regra nova deixou velhas mudaram com ela, sem afrouxar, e o cabeçalho do `conferir-espelho.mjs` registra a
mudança (28/09/2026, décima primeira revisão):

| Prova velha | Por que ficou velha | Agora |
|---|---|---|
| País no mapa pede `needs.logos` (a bandeira) ou `_nota_logos` | o Lucas decidiu o nome escrito, sem bandeira | a `_nota_logos` diz "sem bandeira" e a identidade §6; `needs.logos` não pede nada (nem bandeira); a bandeira pendente entrou nas DECIDIDAS |
| s44 pede `taku-inlet` | o contorno não existe em nenhuma fonte; veio o ponto do GNIS | aceita `taku-inlet` ou `taku-inlet-gnis` |
| O plano dos corredores de s44 diz "seta" e cita o mapista §6c | a seta sem linha era a solução provisória até a decisão | diz o esquema tracejado, o aviso Approximate route, a identidade §6 e que não decalca a figura do estudo |
| Plano de mapa não manda traçar corredor ou rota | a identidade §6 manda desenhar a rota nunca construída como esquema | a cláusula que diz o esquema tracejado passa; toda cena com esquema tem `_esquema` (a regra; e, por rota, o plano, o ponto de partida em `needs.geo`, a fonte entre aspas e, com o ponto fora do disco, o que o plano faz sem ele), e os planos dele dizem o aviso; o esquema pendente entrou nas DECIDIDAS |
| A decisão de 27/09 é "sem foto do ano, mapa ou desenho" | o Lucas mudou a resposta no mesmo dia | a decisão vigente cita a mensagem dele, o aviso, "mapa ou desenho" e a identidade §6, e a de antes não volta como vigente |
| Os 11 planos da pergunta continuam de registro e dizem o re-espelho | a foto de outro ano entra com o aviso | os 11 e os 8 sem foto seguem a ordem da identidade §6: registro com o aviso (ou "sem aviso") e a regra, ou, sem nenhuma foto, outro regime, com o re-espelho e o mesmo id no objeto |
| A cláusula que aceita foto de outro ano reprova | idem | passa se diz o aviso |
| A mensagem da regra do crédito dizia "foto de outro ano não entra" | idem | a regra continua proibida (a data não se esconde no crédito nem na legenda), com a mensagem certa |

Provas novas:
- cada foto ou retrato que o conferente aprovou tem, no objeto do plano, o aviso do ano (`aviso_de_ano: true`) ou "sem aviso"
  (`false`). O verificador lê o `conferencia-midia.json` quando ele existe; sem ele, diz NÃO MEDIDOS: **21 conferidos**;
- `_existe` diz o disco: `true` só com `out/<proj>/_media/geo/<id>.json`, e `false` só sem ele: **97 conferidos**.

**A prova contra as duas cópias.**
- O verificador novo, sobre o espelho de antes (o do commit `093c9cc`), sai com exit 1 e **85 falhas**: 3 cenas com país no
  mapa sem a regra, 8 pedidos de bandeira, 13 frases que davam como pendente o que o Lucas decidiu (a bandeira e o esquema), o
  plano dos corredores de s44, 2 na decisão superada, 19 nos planos da ordem, 21 avisos que o objeto não dizia e 18 geometrias
  em disco que o espelho dava como `_existe: false`.
- O verificador de antes (a cópia do início desta revisão), sobre o espelho novo, sai com **13 falhas**, e são exatamente as
  provas velhas da tabela: o `taku-inlet`, a seta com o §6c e os 11 planos da pergunta.
- O verificador novo, sobre o espelho novo: **exit 0, todas as provas passaram**.

### 0h.3 · Os portões e as medidas

Todos com o alvo certo e `REGIE_MOTOR=C:/projetos/regie-v1` onde importa do motor, sobre o espelho final (`8099cbc6…`):

| Medida | Até a décima | Agora |
|---|---|---|
| `conferir-espelho.mjs juneau` | exit 0 | **exit 0** |
| `validar-contrato espelho` (e `--estrito`) | ✓ | **✓** (os dois) |
| `mapa-limpo juneau --conferir` | ✓ | **✓** |
| `checar-plano` | ESPELHO REDONDO | **ESPELHO REDONDO** |
| `alinhar-timestamps --dry` (numa cópia) | 17 sugestões, não aplicadas | **as mesmas 17**, não aplicadas; o sha256 da cópia igual antes e depois |
| `qc-espelho-midia` | PASS, 41/61 = 67,2% | **PASS, 30/61 = 49,2%**; 13 cenas com `needs.geo` |
| `qc-deserto-real` | PASS, 35 s | **PASS, 50 s** |
| `qc-piso-real` (sem `--laudo`) | 49,5%, NÃO SE APLICA | **36,2%, NÃO SE APLICA**; o laudo em disco intacto (`0148a36f…`) |
| `qc-espelho-modelo`, `qc-fusao-espelho`, `qc-respiro` | PASS; nada a cobrar; sem HTML | os mesmos |
| `qc-espelho-cortes` | 1 alerta (s63) | o mesmo alerta |
| `qc-midia-real juneau` | — | **NÃO MEDIDO** (exit 2: "sem out\juneau\graphics/"): é portão da arte |
| Régua do canal (registro + satélite) | 316,8 s = 49,0% da fala | **290,2 s = 44,9% da fala** (43,6% do vídeo) |
| Maior janela sem footage ou foto (por plano) | 40,6 s | **49,9 s** (86,933–136,833, até s13) |
| Maior janela sem registro nem satélite | 40,0 s | **49,3 s** (167,133–216,4, até s20) |
| Rajada (planos < 2,5 s) | 30,2 s = 4,5% | **34,5 s = 5,2%** |
| Respiro candidato | 73,2 s = 11,0% | o mesmo |
| Texto na voz | 29 travas, 104 frases, 30 planos com `_texto_no_ar` | **30 travas, 112 frases**, os mesmos 30 planos (15 atravessam, 15 conflitos para o regente) |

A régua caiu 4,1 pontos: sete planos de registro ficaram sem nenhuma foto (26,7 s), e a metade de Anchorage de s09 (2,3 s)
virou mapa, que continua na régua como satélite. É defeito declarado (§5.1), e nenhuma foto de outro evento entrou no lugar.

### 0h.4 · O que fica para quem

**Para o `diretor-de-arte`** (o conceito visual, no passo `art_direction`):
- o aviso do ano em 11 planos de foto e no card de s57: a pílula `--rotulo` logo abaixo do rótulo de lugar, ou no lugar dele,
  todo o tempo da foto; no card, a margem de baixo da foto impressa (identidade §6);
- os enquadramentos que o conferente pediu, plano a plano, nos objetos: as bordas de cartão e de página que saem (s06, s09, s22,
  s23), as ampliações (s06 p1, 1,39×; s09 p1, 1,54×; s35, sem ampliar o quadro inteiro), a foto vertical da camiseta (s28 p3,
  1440×2156) e o recorte que tira pessoas e marcas (s01 p1, s37, s56 p1);
- s01 p1: 6,567 s de foto parada, acima dos 6 s da identidade §4.3, pede o Ken Burns da identidade §4.4 (conferente);
- as fotos pequenas e os documentos antigos: Sitka (s07 p2) impressa sobre a mesa, até 1,4×; as leis de s07 até 1,4×, com a
  recriação datilografada mais perto;
- os regimes novos: a folha recriada de s13 p1, os DADOs de s20, s29 p2 e s56 p2, a PRANCHA de s26 e de s31 p5, o ROD de s58 p4
  e o fecho de s62 (o YES sem números e a linha do preço em branco);
- os esquemas tracejados de s44, s48 e s50, com o aviso Approximate route na legenda todo o tempo da linha, e o mapa novo de
  s09 (a foto da Ladd Field encolhendo para Fairbanks);
- continua a leitura do número pousado sobre registro (s01, s24, s28, s33, s35, s51 e s53), agora em sete cenas.

**Para o Lucas** (`_decisoes_pendentes`, 16 itens, todos com a data desta revisão: 14 são dele, a 15ª é dele e do Mateus, e a
16ª é do regente-de-imagem): o conteúdo da tela final (s63), a cor do
protagonista, o relevo em s44, o gasto de render na MapTiler (13 cenas com mapa, anotando o contador antes da primeira), a
música, a PRANCHA fora do enum, o catálogo de modelos, se respiro é tela sem texto, a régua (44,9%, abaixo dos 60%; se o
documento original fotografado conta), os pisos da taxa de pedido e da maior janela, o 57% em s11, a autorização do DOT&PF, o
número sobre registro e os picos. Nenhuma pergunta nova.

**Para o Claude central:**
- despachar o pesquisa-geo só com `thane-road-fim` (`_despacho_research` › `geo`);
- se quiser a linha de s54, consultar o formulário do Department of Revenue no navegador do app (`out/juneau/_dados/s54.json` ›
  `busca_nova`); sem ela, a tela fica com os pontos extremos da fonte;
- os 16 textos de licença e de nota do despacho que dizem "no navegador do app, com o Lucas vendo" são de antes da regra de
  27/09, que vale para eles: o Lucas não precisa acompanhar (§9);
- a caça nos bancos pagos continua à espera do pedido do Lucas (`lista-de-caca.json`, 23 itens, com s28 p2);
- o `research-geo.md` (§1, linha 71) ainda diz que o esquema declarado é DECISÃO DO LUCAS PENDENTE: a identidade §6 decidiu
  depois, e o espelho segue a identidade (o arquivo é do pesquisa-geo, e o montador não o edita);
- o `regie advance` do `research` segue a regra do conferente (CLAUDE.md, "Os especialistas"): isso é do Claude central, e esta
  revisão não o roda.

**Para o regente-de-imagem** (passo `conducting`): os mesmos 15 conflitos de texto no ar e, na `_nota_texto_no_ar`, os rótulos
de Anchorage e Fairbanks do mapa novo de s09, que ficariam 1,83 s e 1,25 s no ar se entrassem com a voz.

## 0i · A décima segunda revisão, de 28/09: as quatro respostas do Lucas ao conceito visual, e a série de s54

O passo na linha é `art_direction`. O conceito visual do diretor-de-arte está pronto (`out/juneau/conceito-visual.json`,
`278a26f9…`), e o Lucas respondeu, pelo chat e em múltipla escolha, às quatro perguntas que ele deixou: **28/09/2026, 11:2x de
Brasília** (14:2x UTC; a primeira versão do pedido dizia 14:2x de Brasília, porque o relógio do Git Bash dá UTC). No mesmo dia,
o Claude central leu a série diária de s54 e pediu que ela entrasse nesta revisão.

**As entradas, no disco:**
- as quatro respostas, literais, pelo despacho do Claude central. A regra do gasto e do relevo está na `marca/identidade.md` §6
  ("O gasto do Juneau, liberado"); a da tela final e a da régua, nas roupas do diretor-de-arte (§2 e §4), do editor-de-arte
  (§7), do regente-de-imagem (§0), do qc-visual (§6) e do redator-de-tela;
- o `conceito-visual.json`, só lido: os ESCALAR de s13, s43 e s44 (`midia_ancora`), a técnica de cada cena, os cinco
  `showpiece` e os runs de `fluxo`;
- `out/juneau/_media/geo/thane-road-fim.json` (`678f29bd…`), registrado no `pauta-geo.json` e no research-geo.md §7;
- `out/juneau/_pesquisa/s54-serie-ans-west-coast-dor.json` (`d8d50982…`). Refiz a prova da cópia que o arquivo traz: as 748
  linhas com preço, a soma de 6.265.799 centavos e o sha256 da tabela (`2539e4f1…`) batem com os que a página calculou. O
  máximo é $116.26, em 12/02/2013, e o mínimo, $26.23, em 20/01/2016 (queda de 77,44%);
- no fim, `out/juneau/_dados/s54.json`, só lido: a pesquisa-dados gravou nele a `serie` em paralelo a esta revisão (em disco às
  12:01 de Brasília, com 748 pontos e os mesmos extremos em `serie_meta`).

Nada foi escrito em `out/juneau/_media/`, no `conceito-visual.json`, nos `conferencia-*.json`, nas `pauta-*.json`, nos
`research-*.md` nem em `out/juneau/_dados/`. O `words.json` (`a8d5ec77…`), o texto aprovado (`28aa6630…`) e a `narracao.wav`
(`468b045b…`) estão intactos. O espelho de antes é o do commit `df89f59` (`e1633b3c…`); o de agora é `a0ec7f4b…`. A revisão
se fez por um script que confere cada trecho de antes (uma ocorrência só) e para em qualquer divergência.

**Ids e tempos.** Os 61 ids ficam, e nenhuma borda mudou: `inSec`, `dur`, `_quadros`, `_borda` e as bordas dos 141 planos são
as de antes, cena a cena e plano a plano (conferido por script contra o espelho do commit `df89f59`). A fusão do diretor-de-arte
fica como ele a gravou depois da décima primeira revisão: s08 com `dur` 23,033 e `_quadros` 2265–2956, e s09 e s10 com
`_mergedInto: "s08"`. Este report ainda não a registrava; agora o §3 e o Anexo registram.

### 0i.1 · O que mudou, resposta a resposta

**1 · A tela final.** A pergunta: "Os últimos 20 s do vídeo não têm narração: é onde o YouTube põe os botões de outro vídeo e de
inscrição. O que fica no fundo?" A resposta: "A última cena, parada e escurecendo (Recomendado)". A opção dizia: "O quadro final
(o YES da votação e a linha do preço vazia) para e escurece aos poucos, sem texto novo. Não disputa com os botões."
- Em s63, o título, a tese, o motivo, a `midia_necessidade` e o objeto do plano dizem o fundo decidido: o quadro final de s62 (o
  YES e a linha do preço vazia) parado, escurecendo aos poucos sem chegar ao preto (identidade §5: 100% coberto), sem texto
  novo, sem herói, com `data-qc-sem-heroi`, e **renderizado**. `_pendente` virou `_tela_final`, no mesmo lugar, e entrou
  `_repeticao_intencional`.
- O motivo diz também o que as roupas pedem aos consumidores: o beat único `continua`, `forca: livre`, com o porquê "tela final:
  a última cena, parada e escurecendo (Lucas, 28/09/2026)" (regente §0); o qc-visual reprova o escurecer que chega ao preto
  (§6); e a linha do Shutterstock vai na faixa de crédito, se algum clipe vier de lá.
- O quadro de s62 só se garante por construção (ofício §11): num run fundido s62+s63, que é do diretor-de-arte, ou com a cena
  feita a partir do arquivo de s62. O espelho não promete continuidade entre sessões isoladas.
- A trilha continua na pendência de música e transições. O `modo` `desenho` e a `midia` `animacao` são os de s62.

**2 · A régua.** A pergunta: "O vídeo tem imagem real (foto, vídeo, satélite) em 45 % do tempo, e o alvo da marca é 60 %.
Algumas fotos da história não existem nos acervos abertos. Como seguimos?" A resposta: "Aceitar, com 2 mapas a mais
(Recomendado)". A opção dizia: "Duas cenas que hoje são desenho (s13 e s43) ganham o mapa de satélite, e o vídeo chega a 47 %.
É o máximo sem inventar imagem."

| Plano | Era | Agora | O que vai à tela |
|---|---|---|---|
| s13 p2 (130,967–136,833) | documento | mapa | a folha recriada do parecer do procurador-geral de 1993 sobre o satélite de s12 (`alasca-e-vizinhos`), com os dois raios de 30 milhas (`raio-30mi-anchorage`, `raio-30mi-fairbanks`) e os pontos de Anchorage e Fairbanks (`cidades-ne`) |
| s43 p2 (454,4–463,133) | documento | mapa | a folha recriada do estudo de 2018 sobre o satélite do panhandle (`panhandle-juneau`), no enquadramento em que s44 abre: Juneau (`cidades-ne`), a estrada que existe (`estrada-juneau-cascade`) e o anel em Cascade Point (`cascade-point`), as duas últimas do OSM, com o crédito na tela |

- É o ESCALAR do diretor-de-arte (`midia_ancora` das duas cenas), com o mesmo id e as mesmas bordas. A geometria é só a que já
  está em disco: 5 pedidos em s13 e 4 em s43, todos com `_existe: true`. Nenhum pedido novo.
- O documento continua na tela, como a folha. A peça está em `_documento_na_tela` (um `o_que` de `_documentos`), a nota da peça
  diz a folha sobre o satélite, e o grifo continua com a voz. No despacho, `documentos` lista os dois planos como `mapa`, com
  uma nota.
- s13 ganhou a `_virada` documento → mapa em "As" (130,967 s, palavra 369), e a de s43 passou a footage → mapa. As duas têm
  `_base_mapa` (MapTiler satellite-v2, relevo não pedido) e `_repeticao_intencional` (o palco de s12; o enquadramento de s44).
- **A régua foi de 290,2 s a 304,8 s** (+14,6 s: 5,866 s de s13 e 8,733 s de s43), ou seja, **de 44,9% a 47,2% da fala** (de
  43,6% a 45,8% do vídeo). O "47 %" da opção bate.
- A pendência da régua ficou só com a parte que a resposta não tocou: se o documento original fotografado conta.
- A opção chamava os dois planos de "desenho". No espelho eram documento (a folha recriada), que também não conta na régua, e
  por isso a resposta vale do mesmo jeito.

**3 · O gasto da MapTiler e o relevo.** A pergunta: "As cenas de mapa usam o satélite da MapTiler, que cobra por pedido. São 13
cenas com mapa. Posso gastar?" A resposta: "Sim, e com relevo 3D no campo de gelo". A opção dizia: "Igual, e a cena do campo de
gelo (s44) ganha relevo real. Custa mais pedidos e ainda não foi testado neste PC." O "igual" é o da opção recomendada, "Sim,
medindo na 1ª cena": "Anoto o contador antes e depois da primeira cena de mapa e te conto o custo real antes de fazer as
outras."
- s44 passou a `mapa3d`: o modo e os seis planos de mapa (o plano 5 continua o registro do fiorde). As viradas passaram a
  mapa3d → footage → mapa3d.
- O `_base_mapa` de s44 diz satellite-v2 + terrain-rgb-v2, a resposta e que não há prova nesta máquina: a primeira é o render
  desta cena. O motivo diz por que o relevo prova o que a voz argumenta ("an icefield straddles the border", "a long fjord
  between steep mountains"; mapista §5 e §6; ARTE-31), e que a escala do desnível e o exagero são do mapista, medidos no DEM.
- Nenhuma outra cena pede relevo: s03, s09, s13 e s43 dizem "relevo não pedido" em `_base_mapa`.
- O gasto: os motivos de s07 e s09 deixaram de apontar para a pendência. O contador da MapTiler se anota antes e depois do
  primeiro render de mapa, e o custo real vai ao Lucas antes das outras cenas (identidade §6).
- A pergunta contava 13 cenas. Com a resposta 2, são **15 cenas com mapa** (entraram s13 e s43), e a regra da identidade §6
  cobre "as cenas de mapa do Juneau".

**4 · A proposta do diretor.** A pergunta: "O diretor propôs: 5 momentos de destaque; Juneau na cor de destaque da marca e
Willow/Wasilla na cor de contraparte; números por cima de algumas fotos; e um mapa escurecido atrás de 2 cartões de pessoa.
Seguimos assim?" A resposta: "Sim, tudo como ele propôs (Recomendado)". A opção dizia: "A arte segue esse plano."
- A `paleta` deixou de ser proposta: começa por "DECIDIDA (Lucas, 28/09/2026, 11:2x de Brasília…". A `_nota_cor` de s12 diz o
  mesmo.
- Os picos são os cinco que o diretor-de-arte marcou: s01, s23, s32, s44 e s59 (`conceito-visual.json` › `showpiece`), e a
  `_nota_showpiece` diz isso. As 25 candidatas e a indicação do montador (s19, s23, s32, s44 e s59) ficam como registro. Ele
  trocou s19 por s01.
- O número sobre a foto: os `_figura` de s01, s35 e s53, o motivo de s28, a nota do `_texto_no_ar` do plano 1 e o objeto do
  plano 3 de s28 deixaram de dizer "leitura do montador pendente". A técnica, cena a cena, é do diretor-de-arte ("o
  número-herói pousa sobre registro real em sete cenas", no arco dele).
- O mapa escurecido atrás dos cards de s05 e s57 está na técnica do diretor-de-arte: o satélite do panhandle com o anel em
  Juneau (s05) e o mapa de s50 (s57), com geometria em disco. Não muda tempo, plano nem regime: o card continua sendo o regime,
  e o inset não conta na régua. São renders de satélite a mais, dentro do gasto liberado.

**s54 · A série diária** (pedido do Claude central na mesma revisão).
- O pedido deixou de estar aberto. A série é a do Alaska Department of Revenue, Tax Division, na coluna "ANS West Coast", o
  mesmo nome do Graph 2-1 do FSEIS. O Claude central a leu no navegador do app, com o sim do Lucas para enviar o formulário de
  datas ("Sim, pode consultar (Recomendado)", 28/09/2026, 11:3x de Brasília).
- s54 aponta para o arquivo de `_pesquisa`: a tese, o motivo, a `midia_necessidade`, os dois itens de `needs.dados`, o objeto e
  a `_figura`. A tela mostra **a linha diária entre os dois extremos da fonte**, o pico de $116.26 em 12/02/2013 e o fundo de
  $26.23 em 20/01/2016, e não só os dois pontos. Média mensal ou suavização não servem, e os dias sem preço não ganham valor
  inventado.
- **O número que vai à tela continua sendo o que a voz diz**: os anos e a queda, "more than three quarters", que entra na palavra
  (564,528 s) e fica 1,905 s até o corte, e o conflito para o regente continua. Os valores dos extremos fazem a linha. A série
  dá 77,4%, e as contas arredondadas do FSEIS, 77,6%. Na pendência PARA O REGENTE-DE-IMAGEM, só o parêntese de s54 mudou.
- No despacho da pesquisa-dados, `busca_nova` ficou vazia, e `busca_nova_atendida` guarda o item, o arquivo, o sha256 e onde a
  pesquisa-dados o gravou.

**E mais:**
- **O `thane-road-fim` chegou** (s44): `_existe: true`, com o crédito do OSM e o `_exige` com o ponto (58.2454469, -134.2958702,
  node/5691733230).
  - O esquema do Taku agora sai dele. O objeto do plano 3, `_esquema.taku.sem_o_ponto`, `_geografia.taku` e a
    `midia_necessidade` dizem isso.
  - O despacho do pesquisa-geo ficou com `pedidos: []` e `entregues`, e a decisão da rota em `_decisoes_do_lucas` ganhou a
    linha da chegada.
- Os 16 textos de licença e de nota do despacho dizem agora "no navegador do app, sem o Lucas precisar acompanhar" (CLAUDE.md,
  "A marca", 27/09). O verificador não depende desse texto.
- `_decisoes_pendentes` foi de 16 para 10. Saíram as seis decididas: a tela final, a cor do protagonista, o relevo, o gasto na
  MapTiler, o número sobre REGISTRO e os picos. A da régua ficou só com o documento original fotografado.
- `_decisoes_do_lucas` foi de 13 para 17. As quatro respostas entraram, cada uma com "28/09/2026, 11:2x de Brasília", a pergunta,
  a resposta e a opção literais, e o que mudou no espelho.

### 0i.2 · O verificador

As provas que as respostas deixaram velhas mudaram com elas, sem afrouxar, e o cabeçalho do `conferir-espelho.mjs` registra a
mudança (28/09/2026, décima segunda revisão):

| Prova velha | Por que ficou velha | Agora |
|---|---|---|
| A cauda é "fundo provisório renderizado" (segunda revisão) | o Lucas decidiu o fundo | o motivo cita a resposta e diz o quadro final da cena anterior, parado, escurecendo sem chegar ao preto, sem texto novo e RENDERIZADO; nenhum texto da cauda diz "provisório", DECISÃO DO LUCAS PENDENTE, "não se renderiza" ou "não desenhar" |
| Entrada com grifo só lista plano de documento, citação ou dado (quinta revisão) | s13 p2 e s43 p2 viraram mapa, com o documento na tela como a folha | a exceção vale só para esses dois, e só se o plano é mapa, se `_documento_na_tela` é um `o_que` de `_documentos` e se o objeto diz a folha recriada sobre o satélite; qualquer outro plano de mapa com grifo continua reprovando |

Provas novas:
- s13 p2 e s43 p2 são mapa, com a folha, a peça, a resposta do Lucas e o mesmo id no objeto; nenhum outro plano declara
  `_documento_na_tela`;
- relevo (`mapa3d`) só em s44, com o modo mapa3d e, em `_base_mapa`, o terreno e a resposta;
- as quatro respostas estão em `_decisoes_do_lucas`, com a data e a hora, a pergunta, a resposta e a opção literais;
- sete guardas novas nas DECIDIDAS: a tela final, a paleta, o relevo, o gasto, o número sobre a foto (também "leitura do
  montador pendente"), os picos e a régua abaixo de 60%. Agora são 12.

A prova do `_existe` não mudou: o `thane-road-fim` passou porque chegou. São **107 pedidos com `_existe: true`**, e nenhum
`false`.

**A prova contra as duas cópias.**
- O verificador novo, sobre o espelho de antes (`df89f59`), sai com exit 1 e **37 falhas**:
  - 26 frases que davam como pendente o que o Lucas decidiu: 8 da tela final, 6 do número sobre a foto, 3 da paleta, 3 do
    gasto, 3 do relevo, 2 dos picos e 1 da régua;
  - 2 da cauda e 2 do relevo de s44;
  - os 2 planos que o Lucas aceitou como mapa;
  - o `thane-road-fim` com `_existe: false`;
  - as 4 respostas que faltavam.
- O verificador de antes (o do commit, `10899ae1…`), sobre o espelho novo, sai com **3 falhas**, exatamente as provas velhas da
  tabela: a cauda provisória e os dois grifos em plano de mapa.
- O verificador novo, sobre o espelho novo: **exit 0, todas as provas passaram**.

### 0i.3 · Os portões e as medidas

Todos com o alvo certo e `REGIE_MOTOR=C:/projetos/regie-v1` onde importa do motor. A coluna do meio é a medida do começo desta
revisão, sobre o espelho do commit `df89f59`, já com a fusão do diretor-de-arte; a da direita, sobre o espelho final
(`a0ec7f4b…`).

| Medida | No começo desta revisão | Agora |
|---|---|---|
| `conferir-espelho.mjs juneau` | exit 1 (o `thane-road-fim` chegou ao disco, e o espelho dizia `_existe: false`) | **exit 0** |
| `validar-contrato espelho` (e `--estrito`) | ✓ | **✓** (os dois) |
| `mapa-limpo juneau --conferir` | ✓ | **✓** |
| `checar-plano` | ESPELHO REDONDO | **ESPELHO REDONDO** (modos: mapa×7 e mapa3d×1) |
| `alinhar-timestamps --dry` (numa cópia) | 18 sugestões | **as mesmas 18**, não aplicadas; o sha256 da cópia igual antes e depois (`a0ec7f4b…`). São as 17 de sempre e s08, que o script lê pela `dur` do arquivo fundido (23,033 s) e quer levar a 2,58 s |
| `qc-espelho-midia` | PASS, 30/61 = 49,2%; 13 cenas com `needs.geo` | **PASS, 30/61 = 49,2%; 15 cenas com `needs.geo`** (s13 e s43) |
| `qc-deserto-real` | PASS, 50 s | **PASS, 50 s** |
| `qc-piso-real` (sem `--laudo`) | 35,1%, NÃO SE APLICA | **35,1%, NÃO SE APLICA**; o laudo em disco intacto (`0148a36f…`) |
| `qc-espelho-modelo` | PASS | PASS |
| `qc-fusao-espelho` | PASS, 1 run, 2/2 filhos gravados | o mesmo |
| `qc-respiro` | sem HTML | sem HTML |
| `qc-espelho-cortes` | 1 alerta (s63) | o mesmo alerta |
| `qc-direcao-real` | PASS; mapas no plano 8, 3D 0 | **PASS; 8, e 3D 1** (s44; o portão conta por `modo`) |
| `qc-midia-real juneau` | NÃO MEDIDO (exit 2) | **NÃO MEDIDO** (exit 2: "sem out\juneau\graphics/"); é portão da arte |
| Régua do canal (registro + satélite) | 290,2 s = 44,9% da fala | **304,8 s = 47,2% da fala** (45,8% do vídeo): 155,6 s de registro e 149,1 s de satélite |
| Cenas com plano de mapa | 13 | **15** |
| Viradas | 22 em 17 cenas | **23 em 18** (s13) |
| Maior janela sem footage ou foto | 49,9 s (86,933–136,833) | a mesma |
| Maior janela sem registro nem satélite | 49,3 s (167,133–216,4) | a mesma |
| Respiro candidato | 73,2 s = 11,0% | **81,9 s = 12,3%** (o plano 2 de s43, 8,7 s de satélite) |
| Sem plano de registro | 33: isto não foi filmado 16, satélite 7, falta declarada 10 | 33: 16, **8** e **9** (o verificador conta s13 como satélite pelo plano 2; o motivo dela continua a declarar a foto da corte que falta) |
| Texto na voz | 30 travas, 112 frases, 15 atravessam, 15 conflitos | os mesmos |

**Duas medidas do §0h.3 mudaram antes desta revisão**, com a fusão do diretor-de-arte, e não por ela:
- o `qc-piso-real` foi de 36,2% para 35,1%. Os 240,9 s de MUNDO são os mesmos, mas o denominador foi de 666,1 s para 686,5 s,
  porque o portão soma a `dur` do arquivo fundido de s08 e também as de s09 e s10;
- o `alinhar-timestamps` foi de 17 para 18 sugestões, pelo s08.

O `qc-piso-real` conta por `modo`, e o `modo` de s13 (documento) e o de s43 (footage) não mudaram: por isso os dois mapas novos
não aparecem na parcela dele.

### 0i.4 · O que fica para quem

**Para o diretor-de-arte** (o `conceito-visual.json` é dele, e o montador não o edita):
- **atualizar o conceito com as respostas.** O que ainda fala de antes:
  - s13 e s43 (plano 2) passam de ESCALAR a mapa, e s44 passa a `mapa3d`;
  - s63 deixa de ser "fundo provisório" e "conteúdo definitivo pendente do Lucas";
  - s54 deixa de ser "DADO dos dois pontos" e de ter FALTA: a série chegou, e a tela mostra a linha diária entre os extremos;
  - em s05, s24 e s57, a técnica deixa de dizer "pendente do Lucas" (o inset de mapa e o texto sobre registro);
- **a fusão s12+s13**, que ele deixou condicional a este aceite: o plano a sustenta.
  - As duas cenas são contíguas: 110,633 → 136,833 s, quadros 3.319 → 4.105, 26,2 s.
  - O plano 2 de s13 usa as camadas de s12 (`alasca-e-vizinhos`, `cidades-ne` e os dois raios).
  - O plano 1 de s13 (a folha de Boucher v. Engstrom, 3,4 s) fica entre os dois mapas. Num arquivo só, o palco segue por baixo
    das duas folhas, e o plano 1 continua documento na régua.
  - A fusão se grava como a de s08: `_mergedInto: "s12"` em s13, e a `dur` e o `_quadros.out` de s12. É um render MapTiler a
    menos;
- **s43+s44**: mapa seguido de mapa em 463,133 s, no mesmo enquadramento.
  - A identidade §4.4 pede UMA viagem de câmera (`fundir: true`), e ele deixou s44 em arquivo próprio ("54 s juntos seria um ato
    inteiro"). A janela fundida iria de 445,167 a 499,2 s (quadros 13.355 → 14.976; 54,033 s).
  - Com dois arquivos, a viagem só se garante por construção: o último quadro do plano 2 de s43 igual ao primeiro de s44, que
    tem relevo, e o plano 2 não tem. Casar os dois nesse quadro é do mapista (§5c e §6);
- **s62+s63**: o quadro parado de s62 só se garante por construção, ou num run fundido (641,867 → 666,067 s; quadros 19.256 →
  19.982; 24,2 s);
- s40 plano 2 (a folha do HB 3 sobre Anchorage escurecida) tem a forma que s43 tinha. A resposta nomeou só s13 e s43, e ele
  fica como está.

**Para o redator-de-tela:** o `out/juneau/_dados/s54.json` que a pesquisa-dados gravou traz um `texto_para_tela` com os
extremos ("MORE THAN $116 (FEBRUARY 2013) → JUST OVER $26 (JANUARY 2016) · DOWN MORE THAN THREE QUARTERS") e uma alternativa com
as datas exatas. O pedido desta revisão diz que o número que vai à tela é o que a voz diz, e a voz não diz os dólares. O espelho
segue o pedido. Pôr os extremos na tela seria número que a voz não diz, e a escolha é do redator-de-tela, com o Claude central.

**Para o mapista e o editor-de-arte:**
- o relevo de s44 é a primeira prova de `terrain-rgb-v2` e da câmera 3D nesta máquina;
- antes do primeiro render de mapa, o Claude central anota o contador da MapTiler, e de novo depois dele. Com o relevo, vale
  anotar também em volta do render de s44, que pede mais;
- as folhas recriadas de s13 e s43 ficam sobre o satélite com o crédito `© MapTiler © OpenStreetMap contributors` o tempo todo
  do mapa, e s43 ainda leva o do OSM pela estrada e por Cascade Point.

**Para o Lucas** (`_decisoes_pendentes`, 10 itens): música e transições; a PRANCHA fora do enum; o catálogo de modelos; se
respiro é tela sem texto; se o documento original fotografado conta na régua; os pisos da taxa de pedido e da maior janela; o
57% em s11; e a autorização do DOT&PF. Os dois últimos itens não são dele: um é dele e do Mateus (a divergência do §8, item 1),
e o outro é do regente-de-imagem. Nenhuma pergunta nova.

**Para o Claude central:**
- a roupa do montador (`marca/agentes/montador.md`) ainda diz DECISÃO DO LUCAS PENDENTE em três pontos que o Lucas decidiu no
  Juneau:
  - o que fica sob a tela final (§4, com o motivo "conteúdo pendente de decisão do Lucas");
  - o gasto de render na MapTiler (§5);
  - o protagonista da paleta (§6).

  O espelho segue as respostas. A roupa é do canal, e o montador não a mudou nesta revisão;
- o `regie advance` do `art_direction` é dele, e esta revisão não o roda.

**Para o regente-de-imagem** (passo `conducting`): os mesmos 15 conflitos de texto no ar, e o beat único da cauda que o motivo
de s63 descreve.

## 1 · Entradas lidas

| Arquivo | Para quê | sha256 (início) |
|---|---|---|
| `out/juneau/words.json` (1.836 palavras) | o relógio | `a8d5ec77…` (não foi tocado) |
| `out/juneau/narracao.wav` (666,05 s) e `narracao.json` | a duração e o segmento `pausa` da tela final, de 646,05 a 666,05 | `468b045b…` |
| `out/juneau/_media/_master.mp4` | o fim do vídeo: 19.982 quadros a 30 fps (666,067 s), pelo ffprobe | — |
| `roteiros/juneau/roteiro-narrador.md` | o texto aprovado: grafia de tela e nomes | `28aa6630…` |
| `out/juneau/roteiro.md` e `roteiros/juneau/voz/trocas.md` (82 trocas) | a cópia para a voz, que é a grafia do `words.json` | `459b07ed…` |
| `roteiros/juneau/roteiro-editor.md`, `roteiro.json`, `aprovacao.md`, `volateis-conferidos.md` | o dossiê: o livro-razão da promessa, "De onde vem cada frase", as decisões e os voláteis | — |
| `pautas/juneau/fundamento.json`, `verificacao.json` | o fundamento: os ids `doc-`, `mec-`, `evt-` e a URL de onde cada fonte foi lida | — |
| `out/juneau/_pesquisa/pauta-geo.json` e `_media/geo/` | a geometria já feita (16 camadas; 40 na décima primeira revisão, com a fonte e a licença de cada uma) | — |
| `out/juneau/transcricao.json` › `alinhamento.conteudo` | o que o Whisper ouviu diferente do texto | — |
| `marca/identidade.md`, `voz.md`, `midia.md`, `agentes/montador.md`, `contratos/espelho.schema.json` | a marca ativa e o contrato | — |
| as roupas dos consumidores (`marca/agentes/editor-de-arte.md`, `regente-de-imagem.md`, `qc-visual.md`, `diretor-de-arte.md`, `pesquisa-imagens.md`, `pesquisa-logos.md`, `pesquisa-pessoas.md`) e os contratos do pesquisa-dados, do pesquisa-logos e do pesquisa-pessoas | o que cada estação seguinte espera do espelho (segunda revisão) | — |
| `midia/juneau/fontes/mecanismo/verif/as4406.html` | a cópia local da AS 44.06 que o fundamento cita (mec-04): a frase inteira da AS 44.06.055 para `_citacao` de s36 e s61 | — |
| `midia/juneau/fontes/triagem/fseis.txt` (terceira revisão) | a cópia local do FSEIS 2018: de onde sai o corredor do Taku (p. 2-2, linhas 3665–3668) | — |
| `midia/juneau/fontes/evento/adn_reamer.html` (terceira revisão) | a cópia local da coluna de Reamer (ADN, 2026): a legenda e o texto da camiseta "Anchorage Stealers" (o 2.84) | — |
| `out/juneau/_media/geo/rio-taku-osm.json`, `cidades-ne.json`, `cascade-point.json` (terceira revisão) | as coordenadas das contas de `s44._geografia` (distância e rumo, pela fórmula do grande círculo) | — |
| `out/juneau/_media/geo/panhandle-juneau.json` (quarta revisão) | os polígonos de terra do NE 1:10M: a reta Juneau → foz do Taku (39 de 41 pontos em terra) e o caminho pela água até a foz (`s44._geografia.caminho_pela_agua`); o bbox que põe Haines e Skagway dentro do recorte | — |
| `midia/juneau/fontes/triagem/fseis.txt` (quarta revisão) | o cascalho de Echo Cove a Cascade Point (linhas 2850-2861); os títulos do §1.3 e do §1.4.2 (linhas 2931, 3267 e 3321-3323); o Taku "northeast along the Taku Inlet" (3665-3666) | — |
| `midia/juneau/fontes/evento/adn_reamer.html` (quarta revisão) | "founded the NFL Access Committee", "Designed by Bob Grogan", a entrevista de Stoops (2/2/2026, na lista de fontes) e a avaliação de Dittman | — |
| `roteiros/juneau/roteiro-editor.md`, f-033 e decisões (quarta revisão); `marca/agentes/diretor-de-arte.md` §2 | a assinatura da declaração de 1978 e por que o roteiro não a nomeia; os três critérios de candidata a showpiece | — |
| `.claude/agents/mapista.md` §6c e §7 (check 9), `marca/agentes/mapista.md` §10, `marca/agentes/pesquisa-geo.md` §6 e §7 (quinta revisão) | a régua do traçado: sem GeoJSON não se desenha linha (seta, halo, rótulo); o esquema declarado era DECISÃO DO LUCAS PENDENTE (o Lucas decidiu em 27/09: §0h) | — |
| `midia/juneau/fontes/evento/adn_reamer.html`, "Key sources" e legendas (quinta revisão) | o primeiro anúncio no Juneau Empire de 8/10/1982, p. 7; as imagens da coluna (ADN, 21/10 e 18/10/1982) e os anúncios do ADN de 25/10 e 27/10/1982 | — |
| `midia/juneau/fontes/experiencia/ktoo_assembly2017.txt`:25 e `ktoo_larson2025.html` (quinta revisão) | a pontuação da fonte nas falas de Gladziszewski e de Kiehl | — |
| `pautas/juneau/fundamento.json`, evt-23.9, evt-23.6, doc-21.7, doc-17.2, doc-17.3, doc-23.2, evt-05.1, esc-10.4, mec-01.8 (quinta revisão) | o comunicado à imprensa de Walker; a Alt. 2B escolhida em 2006 e orçada em 2018; o comitê de Fairbanks em 1977; a decisão de 1974 pelo resumo do AG; a pontuação da fonte em s07, s18 e s31; a Klondike Highway | — |
| `roteiros/juneau/roteiro-narrador.md`, marcas `<!-- pN · título -->` (quinta revisão) | as partes, para o conferente provar os capítulos | `28aa6630…` |
| `out/juneau/_pesquisa/conferencia-midia.json` e `.md` (décima primeira revisão) | os vereditos do conferente: 5 despachos, 35 candidatos, 25 aprovados; o `aviso_de_ano`, o `data_na_origem`, o `lugar_na_origem`, o crédito e o que ele pediu no enquadramento | `f1f699e3…` |
| `out/juneau/_pesquisa/research-*.md`, `pauta-*.json` e `navegador-relato.md`, e `out/juneau/_dados/s54.json` › `busca_nova` (décima primeira revisão) | o que cada pesquisador entregou, o que não achou e onde procurou; a série de s54, não achada, e o nome que a fonte dá ao preço | — |
| a lista de `out/juneau/_media/` (`foto/`, `pessoa/`, `documento/`, `geo/`, `_caca/_retirado/`) (décima primeira revisão) | os arquivos entregues, só pelos nomes (o montador não abre mídia), e as 40 camadas de geometria | — |
| `marca/identidade.md` §5 e §6, `marca/midia.md` §7 (décima primeira revisão) | as decisões do Lucas de 27 e 28/09: a ordem da foto do ano e o aviso, a peça de acervo, o país no mapa, a rota nunca construída, o documento antigo e o de outra data | — |
| `midia/juneau/fontes/triagem/fseis.txt` (538-544, 3665-3668 e 233-238), `midia/juneau/fontes/mecanismo/ca9_2011.pdf.txt` (87-88 e 120-124) e `midia/juneau/fontes/documento/pesquisa-documentos/cap-boucher.json` (décima primeira revisão) | a fonte de cada esquema, o grifo de s52, a controvérsia do ROD e a nota da ordem de 27/06/1974 | — |
| `out/juneau/conceito-visual.json` (décima segunda revisão), só lido | os ESCALAR de s13, s43 e s44, a técnica de cada cena, os cinco `showpiece` e os runs de `fluxo` (as fusões) | `278a26f9…` |
| as quatro respostas do Lucas de 28/09, pelo despacho do Claude central; `marca/identidade.md` §6 ("O gasto do Juneau, liberado") e as roupas do diretor-de-arte, do editor-de-arte, do regente-de-imagem, do qc-visual e do redator-de-tela (décima segunda revisão) | a tela final, a régua com dois mapas a mais, o gasto liberado com o relevo só em s44, e a proposta do diretor aprovada | — |
| `out/juneau/_media/geo/thane-road-fim.json` (décima segunda revisão) | o ponto de partida do esquema do Taku, que chegou | `678f29bd…` |
| `out/juneau/_pesquisa/s54-serie-ans-west-coast-dor.json` e, só lido no fim, `out/juneau/_dados/s54.json` › `serie` (décima segunda revisão) | a série diária ANS West Coast do Department of Revenue: a procedência, a autorização do Lucas, a prova da cópia (refeita) e os extremos | `d8d50982…` |

O `roteiro-editor.md` não tem marcações `[IMAGEM SUGERIDA]`. A intenção do autor foi lida no "Livro-razão da promessa", na
tabela das partes e nas decisões (roupa §1). As indicações "para a tela" que ele traz estão no espelho: os 57%, 1880, 1914,
91.049 × 102.083, 26.542 (e não 26.452) e a medida de 43 milhas sem "downtown". A frase literal do FSEIS com "continent",
que o dossiê marca como **opcional** ("pode ir para a tela como crédito"), está em s03 como `_citacao` opcional, com a fonte e a
nota de que a decisão de pôr ou não é do redator-de-tela.

## 2 · Provas do relógio (`node out/juneau/_pesquisa/conferir-espelho.mjs juneau` → exit 0, "todas as provas passaram")

| Prova | Resultado |
|---|---|
| Número de cenas | **61**: 60 com fala e a cauda `s63` |
| Primeira cena | `s01` abre em **0** |
| Última cena | `s63` fecha em **666,067** = 19.982 quadros = o fim do vídeo do master (ffprobe). O áudio acaba em 666,05 |
| Soma das durações | **666,067 s** |
| Maior vão e maior sobreposição entre cenas seguidas | **0 s** e **0 s** (`inSec[n] + dur[n] = inSec[n+1]`, com 3 casas) |
| Arredondamento do pipeline | **0 desencontros.** Para cada cena, `round(inSec×30) + round(dur×30) = round(inSec seguinte×30)`, e a última fecha no quadro 19.982. É a conta do `renderizar.mjs` e do `xml-premiere.mjs` |
| Grade de quadros | **60 de 60 bordas internas na grade, sem isenção**, e o fim também. `_quadros` em todas as 61 cenas confere com o pipeline |
| Bordas e palavras | As 60 bordas internas caem **dentro de uma pausa** do `words.json`, a menos de 1 quadro da palavra seguinte (folga máxima 0,03 s). A borda da cauda (646,067) fica 0,257 s depois do fim da última palavra |
| Regra da borda | O quadro de 30 fps imediatamente anterior ao início da primeira palavra da cena seguinte. A cauda abre no primeiro quadro inteiro do segmento `pausa` da narração |
| Âncora = fala da janela | **61/61**, e as âncoras somam **1.836/1.836 palavras**. A da cauda é vazia, porque a janela não tem fala |
| Texto aprovado ↔ fala | **61/61**. O `_texto_aprovado` de cada cena vira a `ancora` com as 82 trocas de `voz/trocas.md`; somados em ordem, reproduzem o texto aprovado inteiro |
| Planos | 141 planos (décima primeira revisão: o plano 2 de s09 se partiu em 82,9 s), sem vão. O `convocado_por` de cada um são as primeiras palavras do próprio plano, conferidas palavra a palavra no `words.json` (nenhuma do plano seguinte). Bordas de plano na grade; nenhuma corta palavra (onde duas palavras se tocam, a borda é o quadro antes da seguinte). Nenhum plano abaixo do piso de beat de 1,5 s. O `modo` é o regime do primeiro plano em todas as cenas |
| Texto no ar | Nenhum plano de não-registro abaixo de 2,0 s sem `_texto_no_ar` (só s12 plano 3, que declara). Desde a sexta revisão, `_texto_no_ar` é uma lista de {texto, palavra, de, ate, sobre}: a palavra é dita no plano em `de`; sem conflito, o texto fica ≥ 2,0 s, dentro da cena, e `sobre` lista os planos que ele atravessa; com conflito, a cena corta antes de 2,0 s, e o plano está na pendência do regente-de-imagem |
| Texto na voz (sexta a oitava revisões; na quinta, "Texto travado numa palavra") | O que se mede (décima primeira revisão: 30 travas e 112 frases; os mesmos 30 planos com `_texto_no_ar`): (1) as **29 travas explícitas** (verbo de entrada e palavra entre aspas) nomeiam a palavra, dita dentro do plano, e nenhuma leva na mesma cláusula uma frase citada que a voz diz depois; (2) **desde a sétima**, em cada trava, o que ela põe na tela (números, que a voz diz por extenso, "a million" incluído; datas, pelo mês; frases entre aspas; "a data" = as datas do objeto) contra o momento em que a voz o diz: reprova se a voz o diz depois do fim da palavra de entrada, ou se a entrada vem mais de 1,0 s depois da voz no mesmo plano (9 comparações em 7 planos: s01, s05, s25, s28, s29, s31 e s56); (3) nenhum texto fala em "ênfase" de um bloco que entra antes; (4) a varredura acha **104** números ditos por extenso e frases citadas que o objeto põe na tela e mede da fala ao fim do plano (desde a oitava, também a fala do modo citação, parte por parte: cada frase e cada trecho entre as interrupções do narrador): abaixo de 2,0 s, o plano declara `_texto_no_ar` para aquela palavra (30 planos: 15 atravessam o plano seguinte da cena, e 15 são conflito para o regente-de-imagem; §0f); (5) **desde a oitava**, texto que se soma a um bloco nomeia a palavra de entrada, o ano posto "na tela" que a voz da cena não diz nomeia a palavra que o convoca, e nenhum objeto põe na tela um número que a voz só diz num plano seguinte da cena. **Não se mede:** texto descrito sem verbo de entrada ("acende", "aparece com"), sem número e sem aspas, ou em português (a parte de um bloco que a voz diz noutra frase só a leitura acha); o que entra e a voz não diz na cena, fora o ano posto "na tela" (o 57% de s01, o placar de s29), que entra na palavra que o convoca só pela leitura do objeto; rótulo de lugar no mapa e no registro (word-lock do mapista; `_nota_texto_no_ar`). Na quinta revisão, s28, s29, s31 e s56 cumpriam o piso pondo o número na tela antes da voz |
| Viradas | 23 viradas em 18 cenas (décima segunda revisão: entrou a de s13, documento → mapa em "As", e as de s43 e s44 trocaram documento e mapa por mapa e mapa3d; na décima primeira, 22 em 17: saíram as de s13, s20, s29 e s58, que ficaram num regime só, e entraram as de s09 e s56; até a décima, 24 em 19; 25 até a segunda revisão), todas declaradas em `_virada` (lista), com a palavra e o índice dela no `words.json` |
| Sementes | Todas com até 6 palavras (a cauda não tem) |
| Pedido | 0 pedido mudo; todo plano de registro tem termo; os termos da cena são a união dos termos dos planos; nenhum termo se repete entre cenas sem repetição declarada |
| `needs.dados` | Só pedido de dado: nenhum aviso, figura semântica ou instrução. O aviso da cópia arquivada está em `_fonte_arquivada` nas 22 cenas que usam a Divisão de Eleições |
| Decisões de 27/09 (nona revisão) | O aviso de `_fonte_arquivada` diz que a cópia vale como fonte e traz a data da captura de cada doc-NN e mec-NN citado, conferida contra o `url_acessada` do `fundamento.json`. Nenhum texto vivo trata como pendente a cópia arquivada, o vídeo do Estado ou a logo de instituição; `needs.logos` só pede bandeira; a pergunta do ano da foto não volta, e `_decisoes_do_lucas` tem a decisão (§0g). **Décima primeira revisão:** `needs.logos` não pede nada, nem bandeira; a bandeira e o esquema das rotas, dados como pendentes, reprovam; a decisão vigente da foto de outro ano é a do aviso (§0h.2) |
| Despacho | Nenhum plano de retrato na lista do pesquisa-imagens; todos na lista `retratos`, com `_pessoas` na cena. Nenhum plano do pesquisa-documentos (`_pedido_a: "pesquisa-documentos"`, as mascotes de s26) na lista do pesquisa-imagens; todos em `documentos` (quarta revisão). Desde a quinta, isso vale também sem o `_pedido_a`: nenhum plano de peça com `caca` (os da peça e os que o texto de `caca` nomeia) está na lista `cenas`. Todo outro plano com termo está na lista do pesquisa-imagens. A lista `cenas` (décima primeira revisão: 27 cenas, 40 planos; até a décima, 33 e 47; e nenhum plano leva mais `_pedido_a: "pesquisa-documentos"`, porque s26 virou desenho) bate com o espelho no `modo`, na `midia` e, plano a plano, no `de`, no `ate`, no `regime` e nos `midia_termos` (quinta revisão) |
| Capítulos (quinta revisão) | Os 7 `_capitulos` batem com as marcas `<!-- pN · título -->` do texto aprovado (parte, título e ordem); cada `em_s` cai dentro da cena citada e é a borda da cena que abre na primeira palavra da parte (p1 a p6) ou o início dessa palavra ("In", 598,85 s, dentro de s58, na p7). O texto aprovado trocado para a voz tem as 1.836 palavras do `words.json`, e é por essa conta que a primeira palavra de cada parte se acha |
| Cauda | Décima segunda revisão: s63 é o fundo que o Lucas decidiu em 28/09. O motivo cita a resposta ("A última cena, parada e escurecendo (Recomendado)") e diz o quadro final de s62, parado, escurecendo sem chegar ao preto, sem texto novo e RENDERIZADO; nenhum texto da cauda diz "provisório", DECISÃO DO LUCAS PENDENTE, "não se renderiza" ou "não desenhar". Até a décima primeira, a prova era a do fundo provisório renderizado |
| País no mapa (décima primeira revisão) | As três cenas com país no mapa (s03, s10 e s44) dizem na `_nota_logos` a regra: o nome escrito, sem bandeira (identidade §6). Nenhum `needs.logos` no vídeo. Até a décima, as três pediam a bandeira |
| Cadeia nos dois sentidos (terceira revisão) | Todo "ABRE/PAGA/FECHA X" da `_cadeia` de uma cena está em `_cadeia_referencial`, e vice-versa. O `motivo` de s01 e o de s02, que dizem onde A e B são pagas e fechadas, citam exatamente as cenas de `_cadeia_referencial` |
| Candidatas a showpiece (terceira e quarta revisões) | Pela roupa do diretor-de-arte §2 inteira: a abertura (s01), as 20 cenas que pagam uma promessa e o fecho (toda cena que fecha uma: s59 a s62) têm a marca na `_cadeia`; a cauda não; a marca e a indicação do montador batem com `_candidatas_a_showpiece` (25); `_nota_showpiece` cita os três critérios |
| O corredor do Taku (terceira e quarta revisões) | Nenhuma frase do espelho (entre ponto, ponto e vírgula ou quebra de linha), fora de `_geografia`, cita o Taku e Cascade Point (ou o fim da estrada) sem negação; nenhuma faz "os corredores" partirem do mesmo ponto; o rótulo de `cascade-point` não fala em corredores; o plano 3 de s44 diz que o do Taku sai de Juneau e cita o Taku Inlet, e s44 pede `taku-inlet`. **Limite** (quarta revisão): frase com negação ("não", "nunca", "nem") passa, e duas frases seguidas não se leem juntas; a prova da terceira pegava só a ordem "Taku … sai de … Cascade Point". **Quinta revisão:** nenhum plano de mapa manda traçar corredor, caminho ou rota (frase com corredor, caminho ou rota e traçar, desenhar, linha ou "segue ao longo", sem negação); "Se a arte não traçar" e "caminho pela água" não aparecem fora de `_geografia`; o plano dos corredores de s44 diz "seta" e cita o §6c do mapista. Mesmo limite de negação. **Décima primeira revisão:** o plano dos corredores diz o esquema tracejado pelo texto da fonte, com o aviso Approximate route, a identidade §6 e que não decalca a figura do estudo; o Taku Inlet pode ser o ponto do GNIS; a cláusula de mapa que diz o esquema tracejado não é "traçar sem geometria"; as 4 rotas em esquema têm `_esquema` (o plano, o ponto de partida em `needs.geo`, a fonte entre aspas e, com o ponto fora do disco, o que o plano faz sem ele) |
| A malha e o fim da estrada (quarta revisão) | Nenhum texto diz que a malha continental para antes do panhandle; nenhum fala do fim do asfalto ou do "asfalto que acaba" (o marco é o fim da estrada, em Cascade Point) |
| Ano sobre imagem (terceira e sexta revisões) | Nenhum plano de registro tem ano no objeto sem um termo que peça a época (identidade §6). **Sexta revisão:** a regra do crédito da quarta e da quinta saiu; nenhum texto do espelho a usa, fora o histórico de `_revisao` (a pergunta ao Lucas, que a citava, saiu na nona revisão). Nenhum termo de plano de registro pede a década, e, se algum termo pede ano, todos pedem um ano exato que o objeto dá (o do fato, ou os extremos do intervalo). "Sem rótulo de ano" só no B-roll de hoje (s33, s40, s52). **Nona revisão:** a pergunta ao Lucas foi respondida (não; sem foto do ano, mapa ou desenho) e não volta às pendências; a decisão está em `_decisoes_do_lucas`; os 11 planos que ela listava dizem no objeto o re-espelho com o mesmo id. **Oitava revisão:** a regra com outras palavras também reprova ("o ano da foto", "a data real", a data "na legenda" ou "na procedência", ou uma cláusula que aceita foto de um ano fora do fato). **Não se mede:** a mesma regra escrita sem nenhuma dessas formas. **Décima primeira revisão:** a decisão vigente é a do aviso (foto de outro ano com o aviso na tela; sem nenhuma, mapa ou desenho); os 11 planos da pergunta e os 8 sem foto seguem a ordem (registro com o aviso, ou "sem aviso", e a identidade §6; sem foto, outro regime, com o re-espelho e o mesmo id); a cláusula que aceita foto de outro ano passa se diz o aviso; e as 21 fotos e retratos que o conferente aprovou dizem, no objeto, o aviso ou "sem aviso", como o veredito |
| Fatos da quinta revisão | Nenhum texto, fora de aspas, diz "South Klondike" nem prende a 2006 o orçamento de US$ 680 milhões ("estrada/rota/versão de 2006 orçada"); o `motivo` de s55 dá o comunicado à imprensa (evt-23.9) e não cogita entrevista coletiva; s28 e a peça de campanha dão o primeiro anúncio no Juneau Empire de 8/10/1982, p. 7, e a peça separa as imagens da coluna em `pistas`; nenhum verbatim termina em vírgula, ponto e vírgula ou dois-pontos |
| Figura semântica (terceira revisão) | Toda cena com número na fala (fora data e ano) e plano de registro ou de mapa tem `_figura`: 18 cenas |
| Citações (quarta revisão) | `_citacao.palavras` é a contagem do verbatim em todas as cenas com `_citacao`, e todo "N palavras" do `motivo` (fora "teto de 12") bate com ela. s18 tem `_citacao.assinatura`, e nenhum texto dela diz "sem autor" |
| Documentos (terceira e quarta revisões) | As 17 cenas `documento` ou `citacao` têm `_documentos`; as 29 cenas com `_documentos` estão em `_despacho_research` › `documentos`, e os planos de lá batem com o espelho no tempo e, desde a quarta, no `regime` e na palavra que convoca o plano (`voz` = `convocado_por`). Entrada com trecho a grifar não lista plano de registro (o que só se confere vai em `conferir`). **Quinta revisão:** entrada com grifo lista só planos de documento, citação ou dado, e não mais só "sem registro": o mapa também fica fora (desde a sexta, sem exceção para a PRANCHA). Cada um dos **29 trechos** a grifar (décima primeira revisão: entraram o de s52, na página de 2011, e o da controvérsia de s58, no plano 4; até a décima, 27; 29 até a quinta; o de s16 e o primeiro de s61 foram para `conferir` na sexta) tem em `voz_do_grifo` as palavras da voz, e toda palavra dessa frase cai dentro dos planos listados; desde a sexta, na ordem de `grifar`. **Décima segunda revisão:** s13 p2 e s43 p2 são mapa com o documento na tela, como a folha recriada sobre o satélite (Lucas, 28/09/2026), e o grifo vale neles, e só neles: o plano tem de ser mapa, `_documento_na_tela` tem de ser um `o_que` de `_documentos` e o objeto tem de dizer a folha sobre o satélite, a resposta do Lucas e o mesmo id; nenhum outro plano declara `_documento_na_tela` |
| Mesmo lugar e rótulos (sexta revisão) | O mesmo par de nomes próprios nos termos de planos de registro de cenas diferentes (fora "Alaska") está numa só entrada de `mesmo_lugar_clipes_diferentes` ou de `mesmo_arquivo`, com todas essas cenas (o Capitólio, a balsa, o legislativo, a estrada de Juneau e o Lynn Canal; desde a décima primeira revisão, também Juneau, com as fotos entregues). O `rotulo` de `needs.geo` não tem português, parênteses, dois-pontos, ponto e vírgula nem referência de dossiê, e, desde a oitava, nem vírgula (dois nomes, duas entradas) |
| Geometria em disco (décima primeira revisão) | Os 107 pedidos de `needs.geo` com `_existe: true` têm o arquivo em `out/juneau/_media/geo/`, e não há `_existe: false` (décima segunda revisão: o `thane-road-fim` chegou, e s13 e s43 ganharam 9 pedidos, todos em disco; na décima primeira, 97, e o `thane-road-fim` era o único `false`) |
| Decisões de 28/09 (décima segunda revisão) | As quatro respostas do Lucas estão em `_decisoes_do_lucas`, com "28/09/2026, 11:2x de Brasília", a pergunta, a resposta e a opção literais. O relevo (`mapa3d`) só em s44, com o modo mapa3d e, em `_base_mapa`, o terreno (terrain-rgb-v2) e a resposta. As DECIDIDAS têm 12 guardas: às cinco de antes somam-se a tela final, a paleta, o relevo, o gasto na MapTiler, o número sobre a foto, os picos e a régua abaixo de 60% (§0i.2) |
| `_borda` (quarta revisão) | O `_borda` das 60 cenas com fala confere com o `words.json` (índices da primeira e da última palavra, a primeira palavra, o início dela e o fim da anterior); o da cauda, com o fim da última palavra (645,81) |

## 3 · Os portões do §3 do contrato e da roupa (todos com o alvo certo; `REGIE_MOTOR=C:/projetos/regie-v1` onde importa do motor)

Todos rodaram de novo depois da terceira revisão, de novo depois da quarta, da quinta e da sexta, com os mesmos resultados
abaixo, salvo onde a linha diz outra coisa. Na quarta e na quinta, o `alinhar-timestamps --dry` rodou numa cópia do espelho no
scratchpad, e o sha256 da cópia ficou igual antes e depois (na quinta, `42f9c87a…`; na sexta, `f510a5a9…`, com as mesmas 17 sugestões); o `qc-piso-real` rodou sem `--laudo`, e o
laudo em disco seguiu intacto (`0148a36f…`, conferido antes e depois). **Na décima primeira revisão (28/09)**, todos rodaram de
novo sobre o espelho final (`8099cbc6…`); o que mudou está nas linhas, e o resumo, no §0h.3. **Na décima segunda (28/09)**,
de novo, sobre o espelho final (`a0ec7f4b…`), e também antes dela, sobre o espelho do commit `df89f59`; o resumo está no §0i.3.

| # | Portão | Resultado |
|---|---|---|
| 13 | `mapa-limpo.mjs juneau --conferir` | ✓ o `words.json` foi transcrito DESTE `narracao.wav` (o sha256 confere); o fim da fala (645,81) casa com o áudio (666,05); 0 vão de card |
| 1 | `validar-contrato.mjs espelho out/juneau/espelho.json` | ✓ válido, exit 0; com `--estrito`, ✓ também |
| 2–4 | `validar-contrato decupagem …` e os campos da decupagem | **não se aplica** (sem `_analise/segmentos.json`; ver o topo) |
| 5, 6 | Primeira em 0; zero vão e zero sobreposição | ✓ (seção 2) |
| 7 | Janela de material de origem com 0 < dur < 2 s | ✓ nenhuma: não há `anima:false`, e o `checar-plano` diz "sem tela preta" |
| 8 | `alinhar-timestamps.mjs … --dry` | Rodou só em `--dry`, e o sha256 do espelho é o mesmo antes e depois (também na segunda e na terceira revisão). Sugeriu 17 ajustes do tipo que o CLAUDE.md já prevê no faceless: mover o início ≤ 0,03 s para cima da palavra (tirando a borda da grade) e puxar o fim para o fim da última palavra, o que abriria vãos de 0,09 a 0,35 s. O ofício §7 proíbe esses vãos. **Não aplicados**. Desde a fusão do diretor-de-arte, são 18: o script lê s08 pela `dur` do arquivo fundido (23,033 s) e quer levá-la a 2,58 s, o que desfaria a fusão (décima segunda revisão: as mesmas 18, e o sha256 da cópia igual antes e depois) |
| 9 | `checar-plano.mjs out/juneau/espelho.json` (advisory) | ✓ "ESPELHO REDONDO": sem tela preta, sem 3 modos iguais seguidos, sem buraco > 25 s, sem sobreposição |
| 10 | Interseção de ids num re-espelho | Ver §4.8: correção do primeiro espelho, sem artefato em disco |
| 11 | `qc-espelho-midia.mjs juneau` | ✓ PASS: 30 de 61 cenas pedem registro real (49,2%; até a décima, 41, 67,2%), 0 pedido mudo, 15 cenas com `needs.geo` (na décima primeira, 13, com s09; na décima segunda, entraram s13 e s43) |
| 12 | `qc-deserto-real.mjs juneau` | ✓ PASS: maior janela sem footage/foto/drone de **50 s** (até a décima, 35 s), contada por cena. Os 180 s de padrão são do Top10, e o canal não tem número |
| 14 | Cenas ≥ 10 s × planos | Todas as cenas longas têm um plano por objeto que a fala atravessa. s44 (36,1 s) tem 7; s40 e s55 foram partidas na primeira revisão; na segunda, s26 ganhou o terceiro plano, e s30, s55 e s60 juntaram planos que só separavam uma frase do mesmo objeto (§0b B5) |
| — | `qc-piso-real.mjs juneau --laudo` (roupa §8) | MUNDO 329,4 s = **49,5%**. **NÃO SE APLICA**: `piso: null` em `infra/piso-registro-real.json`. O portão regravou `out/juneau/_laudo-piso-real.json` (candidatas no §5.1). **Terceira revisão:** rodado **sem** `--laudo`, porque esta rodada só pode escrever o espelho, o report e o conferente; deu o mesmo 329,4 s = 49,5% (ele conta por cena, e s28 já contava pelo estádio) e NÃO SE APLICA. O laudo em disco é o da segunda revisão (sha256 `0148a36f…`, intacto). **Quarta revisão:** de novo sem `--laudo`, o mesmo 329,4 s = 49,5% e NÃO SE APLICA; o laudo segue intacto (`0148a36f…`, conferido antes e depois). **Décima primeira revisão:** sem `--laudo`, MUNDO **240,9 s = 36,2%** (os planos de registro que a pesquisa não achou saíram da conta), NÃO SE APLICA; o laudo segue intacto (`0148a36f…`). **Décima segunda revisão:** sem `--laudo`, os mesmos 240,9 s, agora **35,1%**: o denominador foi a 686,5 s com a fusão do diretor-de-arte, porque o portão soma a `dur` do arquivo fundido de s08 e também as de s09 e s10; NÃO SE APLICA; o laudo segue intacto (`0148a36f…`) |
| — | `qc-respiro.mjs juneau` | **Não mediu nesta estação**: "(sem HTML ainda — rode depois da estação ARTE)", com exit 0 |
| — | `qc-fusao-espelho.mjs juneau` | Até a décima primeira revisão: "nenhum run fundido no conceito-visual (nada a cobrar)". **Décima segunda:** ✓ PASS, 1 run, 2/2 filhos gravados (a fusão do diretor-de-arte, s08 ← s09, s10) |
| — | `qc-direcao-real.mjs juneau` (décima segunda revisão) | ✓ PASS: 41 de 61 cenas com registro real por modo (67,2%); 15 cenas com `needs.geo`; mapas no plano: 8, dos quais 3D: 1 (s44). O portão conta por `modo` |
| — | `qc-espelho-modelo.mjs juneau` | ✓ PASS: 0 cenas declaram `modelo` (campo ausente de propósito, roupa §3) |
| — | `qc-midia-real.mjs juneau` (décima primeira revisão) | **NÃO MEDIDO**, exit 2: "sem out\juneau\graphics/ — projeto sem arte local". É portão da arte, e o alvo é o certo (o `<proj>`) |
| — | `qc-espelho-cortes.mjs juneau` | Relógio ÚNICO, 0 cortes. **1 alerta:** "s63 começa a 0,77 s da fronteira de palavra mais próxima". É a cauda: ela abre em 646,067, no silêncio depois da última palavra ("approve.", de 645,30 a 645,81), e o portão mede a distância até o **início** da palavra. A borda é de propósito, e não há tempo copiado de outro relógio |

## 4 · O report que o contrato pede (§2.3)

### 4.1 · Cenas por tipo e cobertura

| `modo` (regime de abertura) | Cenas | Tempo | Cenas |
|---|---|---|---|
| `footage` | 12 | 105,3 s | s04, s14, s21, s24, s33, s40, s42, s43, s47, s51, s53, s59 |
| `documento` | 11 | 127,9 s | s02, s07, s13, s19, s23, s30, s32, s36, s52, s58, s61 |
| `foto` | 10 | 95,4 s | s01, s06, s09, s10, s16, s22, s35, s37, s49, s56 |
| `mapa` | 7 | 76,5 s | s03, s08, s12, s15, s39, s48, s50 |
| `mapa3d` | 1 | 36,1 s | s44 |
| `desenho` (PRANCHA, o fecho e a cauda) | 8 | 98,1 s | s17, s25, s26, s31, s38, s55, s62 e s63 |
| `citacao` | 6 | 60,7 s | s05, s18, s27, s34, s41, s57 |
| `dados` | 6 | 66,0 s | s11, s20, s28, s29, s54, s60 |

Décima primeira revisão: s13 passou de `foto` a `documento`, s20 de `foto` a `dados`, s26 de `documento` a `desenho` e s62 de
`foto` a `desenho` (§0h). Até a décima, eram foto 13, documento 11, desenho 6 e dados 5. Décima segunda: s44 passou de `mapa` a
`mapa3d` (o relevo, Lucas, 28/09/2026). s13 e s43 continuam `documento` e `footage`, que são os regimes de abertura delas: o
mapa novo está no plano 2 de cada uma (§0i). O tempo de s08 é o da janela própria (2,6 s), fora o arquivo fundido.

- **Cobertura:** 666,067 de 666,067 s (100%), sem vão.
- **Modo e regime:** o `modo` é o regime de ABERTURA (ofício §11b). **18 cenas viram por dentro, com 23 viradas**, todas em
  `_virada`: s01, s07 (3), s09, s10, s13, s16, s23 (2), s28, s31 (2), s33, s35, s40, s43, s44 (2), s49, s52, s56 e s59. Em
  s07, s09, s33, s44 e s59 a virada é uma ancoragem de imagem em mapa (ofício §6.7); em s10, desde a décima primeira revisão, é
  corte seco (nenhum ponto do trecho da foto está em `needs.geo`). Em s13 e s43, desde a décima segunda, a folha recriada vai
  para cima do satélite. s03 também ancora, na entrada, mas sem virada de plano: a imagem de s01 reaparece e encolhe para o
  ponto (`_ancoragem`).
- **s09 e s10 abrem em foto e viram mapa**: por isso o `modo` delas é `foto` (o regime de abertura). s10 tem três planos de
  mapa, e s09, desde a décima primeira revisão, um (§5.5).

A tabela das 61 cenas está no fim deste report.

### 4.2 · Material de origem em tela

**0%.** O canal é faceless (identidade §5), e toda janela tem cena (`checar-plano`: "sem tela preta").

### 4.3 · Cenas com necessidade pendente: a fila da pesquisa

**Décima primeira revisão (28/09): a pesquisa correu, e esta seção diz o que voltou e o que continua aberto.** Até a décima
revisão, era a fila inteira, antes do `research`. O que cada revisão mudou nos pedidos está no §0 ao §0h e no `_revisao`.

**Geografia (pesquisa-geo).** O research entregou 40 camadas em `_media/geo/`, registradas no `pauta-geo.json`
(research-geo.md), e em 28/09 o ponto que faltava. Os **107 pedidos** de `needs.geo` têm `_existe: true` e o arquivo em disco,
e o conferente cobra isso. **Não há mais pedido aberto** (décima segunda revisão): o despacho (`_despacho_research` › `geo`)
tem `pedidos: []` e a entrega em `entregues`. Os mapas novos de s13 e s43 (plano 2) usam só geometria que já estava em disco.

| Pedido da décima primeira | Cena | O que veio (28/09) |
|---|---|---|
| `thane-road-fim`, o fim da Thane Road, em Juneau | s44 | o nó OSM node/5691733230 (58.2454469, -134.2958702), a ponta sudeste da via com name=Thane Road, com o crédito do OSM (pauta-geo.json; research-geo.md §7). É o ponto de partida real do esquema do corredor do Taku ("from the end of Thane Road in Juneau, northeast along the Taku Inlet", FSEIS 2018, p. 2-2), que agora se desenha dele (`_esquema`). O caminho do Gastineau Channel ao Taku Inlet não está na fonte: é da arte, dentro do Approximate route |

O que a fila de até a décima pedia, e o que veio:

| Pedido de até a décima | O que veio | Cenas |
|---|---|---|
| rede de rodovias do continente | `rede-rodoviaria-continente` | s03, s10 |
| Glenn Highway, de Anchorage até a Alaska Highway | `glenn-highway` e `estrada-glennallen-tok` (sem ele, a Glenn do OSM não chega à Alaska Highway) | s10 |
| Alaska Highway | `alaska-highway` (s10) e `alaska-highway-trecho-yukon` (s44) | s10, s44 |
| o ponto em que a Alaska Highway encontra a rede do continente | `alaska-highway-ligacao-continente` | s10 |
| as "áreas" de Anchorage e Fairbanks como a AKDOLWD as conta | **NÃO ACHADO**: a fonte não dá limite, e borough de hoje seria anacrônico. O plano 3 acende os pontos das duas cidades, sem polígono | s10 |
| distritos eleitorais de 1974 | **NÃO ACHADO**: só há distritos de 2013 em diante, e o mapa de 1972–74 é figura do Estado. A cena marca as regiões pelos pontos das cidades e pelo panhandle, com os nomes do boletim | s12 |
| raios de 30 milhas em torno de Anchorage e Fairbanks | `raio-30mi-anchorage` e `raio-30mi-fairbanks` | s12 |
| Mat-Su Borough | `matsu-borough` | s15, s33, s39 |
| o terreno da capital em Willow | **NÃO ACHADO** o ponto e o contorno. No lugar, as feições reais que o folheto de 1976 nomeia (`limites-sitio-willow-1976`) e a vila (`cidade-willow-osm`), com o "about five miles east" em texto | s15 |
| Larson Lake e Mount Yenlo | o lago e o cume do GNIS (`larson-lake-gnis`, `mount-yenlo-gnis`); o contorno dos locais, **NÃO ACHADO** (só nos mapas do folheto, figuras do Estado) | s15 |
| estrada Anchorage–Willow | `estrada-anchorage-willow` | s15 |
| rede de rodovias do Alasca | `rede-rodoviaria-alasca` | s33 |
| British Columbia, Juneau Icefield, Yukon | `british-columbia`, `juneau-icefield`, `yukon` | s44 |
| Taku Inlet | o ponto do GNIS (`taku-inlet-gnis`), só com o rótulo: o contorno não existe em nenhuma fonte (research-geo.md §2) | s44 |
| Lynn Canal | o ponto do GNIS (`lynn-canal-gnis`), só com o rótulo: o eixo não existe em nenhuma fonte | s44, s48, s50 |
| Haines Highway, Klondike Highway e Haines Junction | `haines-highway`, `klondike-highway` e `haines-junction-osm` | s44 |
| a rota pela margem leste (2000) | esquema tracejado pelo texto da fonte, de `cascade-point` até perto da foz do Katzehin (`katzehin-river-gnis`) | s48 |
| a rota 2B (2006), o terminal do Katzehin e Echo Cove | a rota, esquema tracejado (`_esquema`); o terminal, **NÃO ACHADO** (fica a foz do rio, que não é o terminal); Echo Cove, `echo-cove-gnis` | s50 |

- O que não se achou está em `_geo_nao_achado` de cada cena (s10, s12, s15 e s50), com o que vai no lugar. Nada foi
  desenhado nem aproximado no lugar da geometria que falta.
- **As rotas que nunca foram construídas** vão como esquema tracejado pelo texto da fonte, a partir do ponto de partida real,
  com o aviso `Approximate route` todo o tempo da linha (identidade §6; Lucas, 27/09/2026). São quatro, em `_esquema` de s44,
  s48 e s50: a tabela está no §0h, ponto 2. A figura do estudo de 2018 não se decalca (midia.md §7.1). A pendência do esquema
  declarado (a #9) e a seta sem linha da quinta revisão saíram.
- O caminho que o FSEIS dá à alternativa do Taku e as contas de `s44._geografia` (a reta por terra, o caminho pela água) são
  contexto: o esquema segue o texto da fonte, não essas contas.

**Dados (pesquisa-dados).** O `needs.dados` só tem pedido de dado: **71 itens em 45 cenas** (segunda revisão; antes, 97 itens
em 48 cenas, misturados com avisos, figuras e instruções). A lista para o despacho está em `_despacho_research` › `dados`.
A pesquisa-dados voltou em 27/09 (`research-dados.md`; `out/juneau/_dados/`, 48 arquivos; `pauta-dados.json`):

- **a conferência**: nenhum número contradiz a voz. As divergências que ela lista (o 26,542 de 1962, o 91,049 de 1982, a base
  monetária dos $680 milhões de s51, as 41,9 milhas da geometria contra as "about 43 miles" da fonte) já estavam tratadas no
  espelho e no dossiê;
- **a busca nova**, a série diária do preço do petróleo "West Coast" de fevereiro de 2013 a janeiro de 2016 (s54): **NÃO ACHADA
  por script**. Ela é do Alaska Department of Revenue, cujo site recusa robô, e a cópia arquivada só guardou o formulário; a da
  EIA é mensal e é outra medida, e não serve. Na décima primeira revisão, o pedido ficou aberto ao Claude central, no navegador
  do app. O achado da pesquisa, o título do Graph 2-1 ("Daily ANS West Coast Oil Price 2012-2016"), foi para o `needs.dados` de
  s54: a sigla tem fonte, e usá-la é do redator-de-tela. **Décima segunda revisão: ATENDIDA em 28/09.** O Claude central leu a
  coluna "ANS West Coast" do Department of Revenue no navegador do app, com o sim do Lucas para enviar o formulário de datas
  (`out/juneau/_pesquisa/s54-serie-ans-west-coast-dor.json`: 748 dias com preço; o pico de $116.26 em 12/02/2013 e o fundo de
  $26.23 em 20/01/2016). A pesquisa-dados a gravou em `out/juneau/_dados/s54.json` › `serie`. A tela mostra a linha diária entre
  os dois extremos, não só os dois pontos, e o número que vai à tela continua sendo o que a voz diz (§0i). `busca_nova` ficou
  vazia no despacho, e o item está em `busca_nova_atendida`;
- **lidas de cópia arquivada** (`lidas_de_copia_arquivada`): as 22 cenas com `_fonte_arquivada` (o parágrafo seguinte). As 16
  cópias arquivadas da Divisão de Eleições abriram, e os números se leram na imagem das páginas.

A figura semântica de cada número sobre lugar está em `_figura`, em **18 cenas** (terceira revisão; antes, 6): s01, s03, s10,
s12, s15, s20, s23, s28, s29, s31, s35, s39, s49, s51, s53, s54, s56 e s59. Em s51, a base monetária dos $680 milhões é
ambígua na fonte (2015 × 2016) e não vai à tela sem o verificador-de-fatos.

**A cópia arquivada.** Tudo o que veio do site da Divisão de Eleições foi lido pelo web.archive.org em 23/09
(`roteiro-editor.md`, "Voláteis"): os **boletins** de 1960, 1962, 1974, 1976, 1978, 1982, 1994 e 2002 **e os folhetos
oficiais** de 1976, 1978, 1982, 1994 e 2002. Deles saem o $966 MILLION de s19, o $2.8 BILLION e a conta de s23, os termos
de s32, o "on the road system" de s33 e as falas de s05, s18 e s34. As 22 cenas que usam essas fontes levam o aviso
"CÓPIA ARQUIVADA — VALE COMO FONTE" em `_fonte_arquivada`: s01, s02, s05, s11, s12, s15, s16, s17, s18, s19, s20, s22, s23,
s25, s29, s30, s32, s33, s34, s35, s39 e s60. O Lucas decidiu em 27/09 que a cópia arquivada de página oficial do Alasca vale
como fonte, com a data (CLAUDE.md, "A marca"; os boletins de 1960 e 1962 entram por serem do mesmo arquivo oficial da
Divisão): cada aviso traz a data da captura de cada fonte, e o crédito na tela é o da Divisão de Eleições do Alasca. A
permissão de uso das peças (midia.md §7.1) continua a conferir, na origem de hoje: a cópia prova o texto, não a licença.

**Mídia (pesquisa-imagens, e o conferente).** A lista `_despacho_research` › `cenas` tem agora **27 cenas e 40 planos** (eram
33 e 47): saíram os sete planos que, sem nenhuma foto, mudaram de regime (s13 p1, s20 p1, s29 p2, s31 p5, s56 p2, s58 p4 e
s62 p1), e o plano 2 de s09 acaba em 82,9 s, só com a Ladd Field (`cenas_nota`). O conferente julgou 35 candidatos em cinco
despachos (`conferencia-midia.json`, `f1f699e3…`): 25 aprovados, 9 trocar e 1 reprovado. Dos 40 planos:

- **17 receberam a foto aprovada** (a tabela do §0h, ponto 4): s01 p1, s06 p1 e p2, s07 p2, s09 p1 e p2, s10 p1, s16 p1 e
  p2, s22 p1, s23 p4, s28 p3, s35 p1, s37 p1 e p2, s49 p1 e s56 p1. O objeto de cada um diz o arquivo, a data na origem, o
  aviso do ano (ou "sem aviso"), o crédito e o que o conferente pediu no enquadramento. Das 17, 11 são de outro ano e levam
  o aviso (identidade §6);
- **23 são B-roll de hoje para a caça nos bancos pagos**, na `lista-de-caca.json` do pesquisa-imagens. A caça espera o pedido
  do Lucas (CLAUDE.md, "Caça nos bancos pagos"), e quem aprova cada arquivo é ele (midia.md §8). A descrição do item tem de
  nomear o lugar (§2.7):
  - s01 planos 2 e 3, o Capitólio e Juneau vista do ar. O plano 3 é o arquivo que reaparece em s03 e ancora no ponto de Juneau;
  - s04, a balsa ou barcaça e o jato em Juneau;
  - s14, detalhe do Capitólio;
  - s21 (do ar) e s24 plano 1 (do chão), Willow;
  - s24 plano 2, o Capitólio do nível da rua;
  - s28 plano 2, estádio coberto sem marca de time nem de liga;
  - s33, Wasilla, em dois clipes; o do plano 2 é o que ancora. São imagens de hoje e não levam rótulo de ano (identidade §6);
  - s40, Anchorage, de hoje e sem rótulo de ano;
  - s42, a Glacier Highway seguindo;
  - s43, a margem leste do Lynn Canal;
  - s44 plano 5, o fiorde do Lynn Canal;
  - s47, a balsa estadual navegando (o vídeo do governo do Alasca também entra, com a fonte na tela; midia.md §7.5);
  - s51, as encostas de avalanche, em dois clipes;
  - s52 plano 2, a balsa chegando a Haines: B-roll do sistema, de hoje, sem rótulo de ano. O plano não afirma que o navio
    estava na frota de 2009, porque o dossiê não tem a frota daquele ano;
  - s53, o oleoduto Trans-Alaska, em dois clipes;
  - s59, o fim da estrada **em Cascade Point**, que é o fim do cascalho e não o do asfalto (FSEIS p. 1-8): a descrição do item
    tem de nomear Cascade Point. Echo Cove é outro lugar (a estrada segue 2,9 milhas além dele) e, antes de 2011, era o fim
    antigo: clipe só de Echo Cove entra rotulado assim, não ancora no anel e a virada vira corte seco.

  Os clipes do mesmo lugar são diferentes, e a exigência está na `midia_necessidade` de cada cena e em
  `_despacho_research` › `mesmo_lugar_clipes_diferentes` (desde esta revisão, com Juneau: as fotos de s01, s06, s23 e s49 e o
  aéreo de s01 são arquivos diferentes).

**Pessoas (pesquisa-pessoas).** Os retratos foram **só** ao pesquisa-pessoas, pela lista `_despacho_research` › `retratos`,
que guarda agora o `resultado` de cada pessoa:

| Pessoa | Cenas (plano) | Resultado |
|---|---|---|
| Frank W. Harris | s05 (1), s25 (1) | não achado em fonte autorizada: card só com nome e cargo |
| Jim Clark | s25 (2) | não achado (a foto da bio do DNR é de ~2013 e não prova o cargo de 1982): card só com nome e cargo |
| Lee Stoops | s26 (2), s27 (1), s31 (1) | não achado: card só com nome e cargo, o mesmo nas três cenas |
| David Reamer | s31 (2); em s27, card opcional | sem licença que sirva (a foto da UAA é CC BY-NC; o retrato do ADN é foto de jornal): card só com nome e cargo |
| Dave Dittman | s31 (3) | não achado: card só com nome e cargo |
| Brian Rae | s31 (4) | não achado (os artigos não têm foto do autor): card só com nome e cargo |
| Jesse Kiehl | s41 (1) | **entregue**: `_media/pessoa/s41/`, de 21/1/2025, sem aviso |
| Tony Knowles | s48 (1) | o de 2000 não se achou; o de 2002 iria ampliado 1,64× no card, e o conferente mandou trocar: card só com nome e cargo |
| Bill Walker | s55 (1) | **entregue**: `_media/foto/s55/`, de 15/11/2016 (DVIDS, domínio público federal), sem aviso |
| Maria Gladziszewski | s57 (1) | **entregue**: `_media/pessoa/s57/`, de 2020, com o aviso Photo from 2020 na margem de baixo da foto impressa |

- Nome e cargo vêm da fonte (`_pessoas`). O nome completo de Harris e os cargos de Harris e Clark vêm do folheto de 1982, lido
  de cópia arquivada, que vale como fonte (Lucas, 27/09/2026; captura de 18/02/2017).
- Os 13 planos de card levam `_pessoa`; só os três com retrato entregue (s41, s55 e s57) levam também
  `_pedido_a: "pesquisa-pessoas"`. Os cards sem retrato perderam os termos (§0h, ponto 6).

**Documentos (pesquisa-documentos).** A lista para o despacho é `espelho.json` › `_despacho_research` › `documentos`: 12 peças
e 4 matérias, com cena, planos, URL, licença, o papel na tela, os trechos a grifar e o que só se confere. Cada trecho a grifar
tem em `voz_do_grifo` as palavras da voz em que o marca-texto o varre, e o conferente prova que elas caem dentro dos planos
listados. São **29 trechos** (eram 27). As **29 cenas com `_documentos`** estão todas na lista, e as 17 cenas `documento` ou
`citacao` têm `_documentos`. O que voltou (research-documentos.md):

- **Federais, em domínio público, originais, sem crédito na tela:**
  - as leis de 1900 e de 1912 (s07, planos 1 e 4): **entregues** (`_media/documento/s07/`). A folha vai só até 1,4×, e o
    trecho visto mais perto vai na recriação datilografada (identidade §5, "Documento antigo");
  - a decisão da corte distrital federal de 13/02/2009 (s52): **NÃO ACHADA**. No lugar, a página 4 da decisão do 9º Circuito
    de 4/5/2011 (`_media/documento/s52/`), com o rótulo "upheld on appeal, 2011" todo o tempo da página (Lucas, 27/09/2026) e
    o grifo "The district court vacated the FHWA’s Record of Decision (“ROD”)" em "a federal court threw out that choice". A
    capa do acórdão saiu;
  - o Federal Register de 30/07/2018 (s58, plano 1): **entregue** (`_media/documento/s58/`), com o recorte do conferente.
- **Do Estado, originais só com permissão clara; sem ela, recriados** (midia.md §7.1), com a licença a conferir na origem de
  hoje:
  - o folheto de 1982, em s02, s05, s23, s30 e s32, e em s25 só como conferência;
  - o folheto de 1978, em s16 (a sigla, como texto de tela), s18 (a declaração contra a Frank, p. 49, assinada por Frank
    Harris, que a tela não nomeia) e s19;
  - o folheto de 1994, em s33 (só conferência) e s34 (a declaração contrária, p. B-24);
  - o parecer do AG de 1993 (s13, plano 2) e, **desde a décima primeira revisão, Boucher v. Engstrom (1974) na folha recriada
    do plano 1 de s13**, pelo texto do Caselaw Access Project, sem a página do Pacific Reporter, que é da West. A nota da ordem
    de 27/06/1974, que confere o "that same year", está em `conferir`. **Desde a décima segunda**, a folha do parecer fica
    sobre o satélite de s12, com os dois raios (o plano 2 é mapa, e a peça está em `_documento_na_tela`);
  - o Alaska Economic Trends de 1990 (s31, plano 4): **sem permissão provada**, recriado com a fonte, e a página fica como prova
    (Lucas, 27/09/2026: "Recriar com a fonte (Recomendado)");
  - AS 44.06 (s36, s61), com o grifo no texto literal da AS 44.06.055, e o HB 3 (s40);
  - o FSEIS e o ROD de 2018, só o texto recriado: s03 (em `conferir`), s43, s51, s53, s55 e s58. Em s58, o ROD entra nos
    planos 2, 3 e, desde a décima primeira revisão, 4, que era a foto da briga pública (não achada): o grifo "Controversy on
    the JAI Project is high among the public" varre em "a public fight over the road". Em s43, desde a décima segunda, a folha
    do estudo fica sobre o satélite do panhandle, no enquadramento em que s44 abre (o plano 2 é mapa, e a peça está em
    `_documento_na_tela`).
- **Imprensa, com a fala citada** (a página só com permissão; sem ela, a fala recriada com a fonte escrita, sem logo): a coluna
  de Reamer no ADN (s27, e s31 como conferência), a matéria da KTOO de 13/06/2025 (s41) e a da CoastAlaska publicada pela KTOO
  em 24/01/2017 (s57).
- **Campanha de 1982:** as mascotes de s26 se acharam só na coluna do ADN de 2026, **sem permissão**. Ficam como prova, fora da
  tela, e s26 virou desenho: a PRANCHA com os nomes escritos e o card de Stoops só com nome e cargo. Os planos perderam o
  `_pedido_a`. O primeiro anúncio da Football Fannie (s28, plano 1) vai recriado no DADO com a fonte; o original do Juneau
  Empire de 8/10/1982 não se achou, e o texto fica NÃO CONFERIDO no original (research-documentos.md §1). A camiseta "Anchorage
  Stealers" (s28, plano 3) é foto de objeto, veio pelo pesquisa-imagens e vai sem aviso (a peça de acervo; Lucas, 28/09/2026).

**Logos e bandeiras (pesquisa-logos).** **Nenhum pedido:** `needs.logos` está vazio no vídeo inteiro, e `_despacho_research`
› `logos` › `pedidos` também. País no mapa vai com o nome escrito, sem bandeira, também nas províncias e nos territórios
(identidade §6; Lucas, 27/09/2026: "Só o nome escrito (Recomendado)"). As 8 bandeiras que o pesquisa-logos tinha entregado
para s03, s10 e s44 saíram de `_media/logo/` para `_media/_caca/_retirado/logo/` em 27/09 (research-logos.md, terceira
entrega).

| Cena | `_nota_logos` |
|---|---|
| s03, s10, s44 | país no mapa: o nome escrito, sem bandeira (em s44, também a British Columbia e o Yukon) |
| s26 | a logo do ADN não se pede, vai o nome escrito (midia.md §7.6) |
| s28 | a logo da NFL e a de times não se pedem (a NFL é só a unidade da paródia, e logo de liga é marca de terceiro) |
| s29, s31 | a logo da Dittman Research (empresa) não vai à cena, só o nome escrito (Lucas, 27/09/2026) |
| s43, s52, s58 | logo de órgão federal (FHWA, as cortes federais, o Federal Register) não vai à cena, só o nome escrito (Lucas, 27/09/2026) |

**Nome escrito:** `_despacho_research` › `logos` › `nome_escrito` lista as 12 entidades que a voz nomeia ou que vão como fonte
escrita, com as cenas e a forma da voz. O pesquisa-logos entregou o nome oficial de cada uma em `pauta-logos.json` ›
`nomes_escritos` (research-logos.md §3). O espelho guarda os nomes como o dossiê os registra, e o redator-de-tela lê os
oficiais de lá.

### 4.4 · Taxa de pedido

**30 de 61 cenas de cobertura = 49,2%** pedem registro real, pelo `qc-espelho-midia` (décima primeira revisão; até a décima,
41 de 61 = 67,2%; antes da primeira revisão, 34 de 63 = 54,0%). A composição:

- **27 cenas têm plano de registro** (footage ou foto do mundo): s01, s04, s06, s07, s09, s10, s14, s16, s21, s22, s23, s24,
  s28, s33, s35, s37, s40, s42, s43, s44, s47, s49, s51, s52, s53, s56 e s59;
- **3 cenas pedem só o retrato do card**: s41, s55 e s57.

A queda é o que a pesquisa não achou: s13, s20, s29, s31, s58 e s62 perderam o único plano de registro, e s56 perdeu um de
dois (§0h, ponto 5); s05, s25, s26, s27 e s48 deixaram de pedir retrato ou peça (pontos 5 e 6). Nenhum pedido ficou mudo. A
mediana do acervo do Top10 é 44,6%, e o canal não tem piso para essa taxa (DECISÃO DO LUCAS PENDENTE, roupa §4).

### 4.5 · A maior janela sem registro real

| Medida | Resultado |
|---|---|
| Por cena, `qc-deserto-real` | **50 s** (até a décima, 35 s) |
| Por plano, só footage e foto (o conferente) | **49,9 s**, de 86,933 a 136,833: os planos de mapa de s10, s11 (dados), s12 (mapa) e s13, que desde a décima primeira revisão não tem foto (a corte de 1974 não se achou). Na décima segunda, o plano 2 de s13 virou mapa: a janela é a mesma, porque satélite não é footage nem foto, mas deixou de ser janela sem satélite |
| Por plano, sem registro **nem satélite** (a régua do canal) | **49,3 s**, de 167,133 a 216,4: o plano 3 de s16 (a sigla), s17, s18, s19 e s20, que desde a décima primeira revisão é DADO do começo ao fim (a eleição de 1978 não se achou) |

As duas janelas cresceram porque os registros que as quebravam (a corte em s13; a eleição de 1978 em s20) não se acharam, nem
de outro ano (research-imagens.md). Até a décima revisão, eram 40,6 s e 40,0 s. O que as quebraria seria outro registro com
fonte, que o dossiê não tem; foto de outro evento no lugar não entra (identidade §6). O canal não tem limite; o padrão do
Top10 é 180 s.

### 4.6 · Trechos sem cobertura

**Nenhum.**

A cauda de 20 s sem voz tem segmento próprio (`s63`) e não sai preta. **O fundo está decidido** (Lucas, 28/09/2026: "A última
cena, parada e escurecendo (Recomendado)"; §0i): o quadro final de s62 (o YES e a linha do preço vazia) parado, escurecendo aos
poucos sem chegar ao preto, sem texto novo, sem herói, `data-qc-sem-heroi` (editor-de-arte §7), e **renderizado**; um beat único
`continua`, `forca: livre` (regente-de-imagem §0); julgada como fundo, e buraco preto reprova, inclusive o escurecer que chega ao
preto (qc-visual §6). A trilha continua pendente (música e transições). O `modo` `desenho` e a `midia` `animacao` são os de s62.
Até a décima primeira revisão, s63 era o fundo provisório. A primeira revisão dizia que a cena "não se desenha, não se pede e não
se renderiza": isso deixaria 20 s pretos no XML e foi corrigido (§0b, M1).

### 4.7 · Divergências factuais e de grafia

1. **O que o Whisper ouviu** (`transcricao.json`). A grafia de tela vem do texto aprovado e está em `_grafias`,
   `_texto_aprovado`, `_pessoas` e `_citacao`:

   | Whisper | Texto aprovado |
   |---|---|
   | "27," | "twenty-seventh" |
   | "Juno" | Juneau |
   | "Fanny" | Fannie |
   | "Ray" | Rae |
   | "Matsu" | Mat-Su |
   | "K2" | KTOO |
   | "Gladoshevsky" | Gladziszewski |
   | "outcross" | "out cross" |

   Os aliases da voz ("Keel", "Kay-too", "Gladyshevsky", "Mat-Sue", "N F L") ficam só na `ancora`.
2. **Frank:** o texto aprovado escreve "the Frank committee" e "the Frank initiative". O espelho de 26/09 escrevia "FRANK" na
   prosa; agora escreve Frank. A caixa alta na tela é decisão do redator-de-tela, conferindo o folheto de 1978.
3. **World War Two:** é a grafia do texto aprovado (s09). A forma do AP Stylebook é "World War II". Divergência declarada em
   `_grafias`; quem crava a grafia de tela é o redator-de-tela.
4. **A estrada:** a fonte e a voz dizem "about 43 miles". A geometria OSM mede 41,9 mi. A tela segue a fonte (CLAUDE.md,
   pré-v1 item 6). No Natural Earth, o ponto de Cascade Point cai na água, a 236 m da costa simplificada; isso está no
   `_exige` de `cascade-point`.
5. **Os 57%** são a parcela dos votos dados à pergunta (46.659/82.342). Sobre todos os 84.585 votantes da primária, o sim foi
   55,2%. Por isso a tela nunca diz "57% of Alaska voters" (aprovacao.md).
6. **1982:** o boletim dá 91.049 sim; o resumo H29 dá 91.249. Vale o boletim.
7. **1962:** o boletim dá 26.542; listas-resumo dão 26.452. Vale o boletim.
8. **O AG de 1993:** "a planned capital away from the big cities" é paráfrase do narrador, não é citação. Na tela só vai texto
   literal da fonte.
9. **Avalanches:** a voz diz 41. A fonte diz "41 dos 43" corredores do lado leste.
10. **O petróleo:** a fonte nomeia o preço como "Daily West Coast". "Alaska North Slope" não está nela para 2013–2016 e não
    vai à tela sem fonte. **Décima primeira revisão:** o título dentro do Graph 2-1 é "Daily ANS West Coast Oil Price 2012-2016"
    (research-dados.md): a sigla ANS tem fonte, e a forma por extenso continua sem (o FSEIS não a expande). Usá-la é do
    redator-de-tela; o `needs.dados` de s54 diz isso.
11. **2009 × 2011:** a voz fala da anulação de 2009 (corte distrital federal). A decisão de 2011 é a do 9º Circuito, que a
    manteve; só entra rotulada assim. **Décima primeira revisão:** a de 2009 não se achou, e a página 4 da de 2011 entra no
    plano 1 de s52 com o rótulo "upheld on appeal, 2011" todo o tempo da página (identidade §5; Lucas, 27/09/2026).
12. **Citações acima do teto de 12 palavras de tela** (identidade §4.1): Harris (15), Stoops (27), Kiehl (14), Gladziszewski
    (28) e a frase opcional do FSEIS (15). O verbatim está em `_citacao`, e o recorte é do `redator-de-tela`. (Até a terceira
    revisão, as contagens eram 14, 26 e 26, e a de 1978 era 9; ela tem 10 e fica abaixo do teto. Todas foram recontadas no
    verbatim na quarta, e o conferente as reconta.)
13. **Atribuição:** a fala de 1978 ("Its true purpose…") e a de 1994 ("This time, no price tag is attached.") não levam nome.
    - A de 1978 **é assinada**: "FRANK HARRIS, Chairman, Taxpayers Capital Relocation Committee" (f-033; doc-17.3). O roteiro
      não o nomeia porque não há prova de que é o mesmo Frank W. Harris de 1982. O nome fica em `_citacao.assinatura` e não
      vai à tela.
    - A de 1994 não é assinada (f-063).

    Até a terceira revisão, o espelho chamava as duas de "sem autor". Jim Clark não deve ser identificado com outro Jim Clark
    sem prova.
14. **O título:** o do texto aprovado, "Alaska Voted to Move Its Capital. Why Is It Still in Juneau?", é o título de trabalho. O
    da linha é "Alaska Voted for a New Capital in 1974. It Was Never Built.". A embalagem é de quem a escreve; nada disso vai à
    tela como card.
15. **Onde a estrada acaba:** Cascade Point, não Echo Cove. O FSEIS usa as duas formas (p. 1-8 × Table 1-3), e o fundamento
    registra a divergência: a estrada segue 2,9 milhas além de Echo Cove, e o trecho de cascalho até Cascade Point abriu em
    2011. O pedido de s59 exige Cascade Point (segunda revisão).
16. **A base dos $680 milhões** (s51): o FSEIS dá dólares de 2015 como regra geral (p. 1-4) e estimativas de 2016 no capítulo das
    alternativas (p. 2-8). A voz diz só "about $680 million"; a base não vai à tela sem o verificador-de-fatos.
17. **De onde sai o corredor do Taku** (terceira revisão): o texto aprovado diz "the Taku River valley to the east"; o FSEIS
    diz "from the end of Thane Road in Juneau, northeast along the Taku Inlet" (p. 2-2); a geometria em disco põe a foz do
    Taku a 54° de Juneau (nordeste). O mapa segue a voz ("a leste") e a fonte (sai de Juneau), e nunca parte de Cascade
    Point, que fica a 62 km da foz. O fim da Thane Road não está na geometria e não se desenha. Na quarta revisão, entrou o
    caminho. A reta Juneau → foz corre por terra (39 de 41 pontos em terra no `panhandle-juneau`), e o corredor segue o Taku
    Inlet, como a fonte diz ("along the Taku Inlet"). Pela água do recorte, o caminho desce para o sudeste junto de Juneau e sobe
    para o nordeste até a foz. **Quinta revisão:** esse caminho é contexto, e não se desenha. Não há GeoJSON dele, e o mapista não
    traça linha sem geometria real (§6c). Na tela, o Taku é o rio, uma seta de Juneau rumo ao vale do rio e, se a geometria vier, o
    contorno e o rótulo do Taku Inlet. **Décima primeira revisão:** o corredor vai como esquema tracejado pelo texto da fonte,
    com o aviso Approximate route (identidade §6; Lucas, 27/09/2026), a partir do fim da Thane Road, que a pesquisa-geo busca
    (`thane-road-fim`). O Taku Inlet é o ponto do GNIS, só com o rótulo: o contorno não existe em nenhuma fonte.
18. **Os extremos das rodovias de s10** (terceira revisão): "Anchorage–Tok", "Dawson Creek" e "Delta Junction" estavam no
    espelho e não estão no dossiê, que só diz que a Alaska e a Glenn ligaram Anchorage à rede (mec-15.6). Saíram; os
    extremos vêm da fonte da geometria, com o nome que ela der.
19. **O localizador de mec-01.27** (quarta revisão): o `fundamento.json` põe a frase da capital isolada no "§1.3 (Purpose and
    Need, flexibilidade de viagem)". No FSEIS, o §1.3 é "AMHS Service History in Lynn Canal" (`fseis.txt`:2931), e a frase
    está no §1.4.2, "Flexibility and Opportunity for Travel" (:3267, :3321-3323), como o exp-06.4 dá. O despacho de s43 usa o
    §1.4.2. O fundamento não é meu e não foi editado.
20. **Stoops e a Football Fannie** (quarta revisão): o `roteiro-editor.md` resume que Stoops "criou a Football Fannie". A
    coluna diz que ele fundou o NFL Access Committee e que a Football Fannie foi desenhada por Bob Grogan. A voz diz
    "answered with a rival", o que não atribui o desenho. O card de s31 diz "fundador do NFL Access Committee (1982)".
21. **O preço lembrado em 1994** (quarta revisão): o folheto de 1994 dá "$2,843,000,000" (doc-19.5); a cédula de 1982,
    "$2,843,147,000" (doc-18.1). A voz diz "about $2.8 billion", que vale para os dois; o número exato na tela de s34, se for,
    é o do folheto de 1994.
22. **O fim da estrada** (quarta revisão): Cascade Point é o fim do cascalho ("gravel-surface roadway", FSEIS p. 1-8), não o
    do asfalto. s59 e a semente de s42 diziam asfalto, e o conferente agora o reprova. Em s42 saiu também "Veterans Memorial
    Highway", que não está no dossiê nem na cópia local do FSEIS. O nome da estrada é Glacier Highway (Alaska Route 7), como no
    FSEIS e na geometria em disco.
23. **O corredor do Taku e o Gastineau Channel** (quarta revisão): o nome do canal junto de Juneau vem do dossiê (evt-03.7:
    "the first post office on Gastineau Channel (and today's state capital)") e da proximidade na geometria. A água mais perto
    do ponto de Juneau fica a 0,4 km, nesse canal. Nem o NE nem o OSM em disco trazem o nome, que está só em `s44._geografia`,
    e não no plano.
24. **O primeiro anúncio da Football Fannie** (quinta revisão): a coluna põe o anúncio inaugural no primeiro dia dos anúncios,
    8/10/1982, e a lista de fontes dela dá "Football Fannie advertisement. Juneau Empire. October 8, 1982, 7". Por isso o espelho
    diz Juneau Empire, 8/10/1982, p. 7. Que seja a peça citada é leitura, e a pesquisa confere no original. As imagens da coluna
    são outras peças: uma Football Fannie do ADN de 21/10/1982 e uma Access Annie do ADN de 18/10/1982. **Décima primeira
    revisão:** o original não se achou, e o texto fica NÃO CONFERIDO no original (research-documentos.md §1); ele vai recriado no
    DADO, com a fonte.
25. **O anúncio de Walker** (quinta revisão): foi um comunicado à imprensa de 15/12/2016 (evt-23.9, "a press release dated
    December 15, 2016"). O `motivo` de s55 dizia que a fonte não dizia onde a declaração foi feita, e cogitava uma entrevista
    coletiva.
26. **A pontuação dos verbatins** (quinta revisão): a fonte não tem a vírgula de "for me," (s57), a vírgula final de "…to
    Willow," (s18) nem o ponto final de s07, s31 e s41, onde ela segue com vírgula. As cinco pontuações eram da voz e saíram
    do verbatim. A voz continua com elas, porque a pontuação da tela é a da fonte.
27. **Os US$ 680 milhões** (quinta revisão): são a estimativa do FSEIS de 2018 (doc-21.7) para a Alt. 2B, escolhida em 2006
    (evt-23.6). O livro-razão do `roteiro-editor.md`:41 diz "estrada de 2006 orçada em cerca de US$ 680 milhões", o que prende
    a 2006 um número de 2018. A cadeia C do espelho e o §6 foram corrigidos; o dossiê não é meu e não foi editado.
28. **A Klondike Highway** (quinta revisão): "South Klondike" e Whitehorse como extremo não têm fonte. O FSEIS diz só que a
    rodovia liga Skagway à Alaska Highway perto de Whitehorse (p. 1-8, mec-01.8).

### 4.8 · Identidades

Esta é a correção do primeiro espelho, feita antes de qualquer consumidor: não há `conceito-visual.json`, pasta `graphics/`,
render nem tabela de cenas no banco (`db/canal.db` não tem tabela de cena). **61 identidades preservadas, 2 morreram, 0
nasceram.** As que morreram são **s45** e **s46**, fundidas em s44 (ofício §8: "cena que morre, morre com o ID dela"); os
números não se reemitem, e a numeração salta de s44 para s47. Nenhum id foi renumerado. A interseção com artefatos em disco é
zero porque não existe artefato; num re-espelho depois da arte, essa conta deixa de ser zero e tem de ser feita.

Em s13 (a corte), s16 (Fairbanks), s20, s29, s35 e s49 (as eleições), s22 (o legislativo de 1981), s23 plano 4 (Juneau em
1982), s28 (o estádio) e s31 plano 5 (a campanha), se a pesquisa não achar o registro, a cena ou o plano muda de regime sem
mudar de id.

**Segunda revisão: 61 identidades preservadas, 0 morreram, 0 nasceram.** Mudou o que é dentro das cenas, não a identidade delas:

- a borda s09/s10 foi de 89,267 para 85,167 (a frase das rodovias passou para s10), e o `modo` de s10 virou `foto`;
- a numeração dos planos mudou em s07 (o plano 3 virou mapa, sem mudar de número), s23 (plano 4 novo), s26 (três planos),
  s30 (um), s55 (dois) e s60 (três). Plano não é identidade, mas é endereço: toda referência a plano no espelho e neste report
  foi conferida contra a numeração nova, e o conferente confere as do `_despacho_research`.

A interseção com artefatos em disco continua zero porque não existe artefato (sem `conceito-visual.json`, `graphics/` nem render).

**Terceira revisão: 61 identidades preservadas, 0 morreram, 0 nasceram.** Nenhuma borda de cena mudou. Mudou por dentro: o
plano 3 de s28 passou de DADO a foto (a camiseta), sem mudar de número nem de tempo; nenhum outro plano mudou de tempo ou de
regime. A interseção com artefatos em disco continua zero pelo mesmo motivo.

**Quarta revisão: 61 identidades preservadas, 0 morreram, 0 nasceram.** Nenhuma borda de cena ou de plano mudou, nenhum plano
mudou de regime e nenhum plano nasceu ou morreu. Mudaram textos, pedidos e a lista do despacho:
- os planos 1 e 3 de s26 ganharam `_pedido_a`, e s26 saiu da lista `cenas`;
- o ROD de s58 passou dos planos 3 e 4 para os planos 2 e 3;
- s44 ganhou o pedido `taku-inlet`.

A interseção com artefatos em disco continua zero.

**Quinta revisão: 61 identidades preservadas, 0 morreram, 0 nasceram.** Nenhuma borda de cena ou de plano mudou, nenhum plano
mudou de regime e nenhum plano nasceu ou morreu. Mudaram textos (objetos, motivos, `_exige`, `_geografia`, verbatins), a
pendência #9 e, no despacho do pesquisa-documentos, os grifos de s03 e s28, o campo `voz_do_grifo` e as `pistas` da peça de
campanha. A interseção com artefatos em disco continua zero.

**Décima primeira revisão (28/09): 61 identidades preservadas, 0 morreram, 0 nasceram.** Nenhuma borda de cena mudou. Uma borda
de plano nasceu: o plano 2 de s09 se partiu em 82,9 s, e o plano 3, de mapa, é novo; nenhum outro plano mudou de número ou de
tempo. Mudaram de regime, com o mesmo número, s13 p1, s20 p1, s29 p2, s31 p5, s56 p2, s58 p4, s62 p1 e os três planos de s26, e
o `modo` mudou em s13, s20, s26 e s62 (§0h). A interseção com artefatos em disco continua zero: não há `conceito-visual.json`,
`graphics/` nem render (o `qc-midia-real` diz "sem out\juneau\graphics/"). As mídias entregues em `_media/` são insumo da arte, e
as pastas delas são por cena; os vereditos do conferente citam planos cujo número não mudou.

## 5 · O que a roupa acrescenta (§9)

### 5.1 · Mundo real pela régua do canal

A régua do canal soma footage, foto e satélite de geometria real, sem documento e sem a cauda (identidade §4.3). No Juneau:

- **304,8 s**: 155,6 s de registro e 149,1 s de satélite (décima segunda revisão; na décima primeira, 290,2 s, com 155,6 s e
  134,5 s; até a décima, 316,8 s, com 184,6 s e 132,3 s; antes da primeira revisão: 298,7 s; antes da segunda: 311,8 s; antes
  da terceira: 314,1 s);
- **= 47,2% dos 646,067 s de fala**, ou **45,8% do vídeo** (na décima primeira, 44,9% e 43,6%; até a décima, 49,0% e 47,6%;
  antes da primeira revisão: 46,2%; antes da segunda: 46,8%; antes da terceira: 48,6% e 47,2%);
- **o alvo é 60%.** O Lucas aceitou em 28/09/2026 que o Juneau fique abaixo dele, com os dois mapas a mais ("Aceitar, com 2
  mapas a mais (Recomendado)"; §0i). Continua abaixo do alvo, agora com a decisão dele.

Na décima segunda revisão, a régua subiu 2,3 pontos: o plano 2 de s13 (5,866 s) e o de s43 (8,733 s) passaram de documento a
mapa, a folha recriada sobre o satélite, o ESCALAR do diretor-de-arte que a resposta aceitou. A opção dizia "o vídeo chega a 47
%", e chegou a 47,2%.

Na décima primeira revisão, a régua caiu 4,1 pontos: sete planos de registro ficaram sem nenhuma foto e mudaram de regime (s13
p1, s20 p1, s29 p2, s31 p5, s56 p2, s58 p4 e s62 p1: 26,7 s), e a metade de Anchorage de s09 (2,3 s) virou mapa, que continua
na régua como satélite. Nenhuma foto de outro evento entrou no lugar (identidade §6).

Na terceira revisão, o registro ganhou 2,7 s: a camiseta "Anchorage Stealers" no plano 3 de s28, o registro real que o dossiê
marca como tal (exp-01.15). Na segunda revisão, o registro caiu 3,2 s (a Juneau de 1906 saiu de s07; a foto das rodovias encurtou de 4,1 s para 1,8 s) e
ganhou 2,3 s (Juneau em 1982, s23), e o satélite subiu 5,5 s (os mapas novos de s07 e s10).

O porquê não é mais um rótulo. Toda cena sem plano de registro (33, fora a cauda, desde a décima primeira revisão; eram 27) diz na linha `REGISTRO (§10.1)` do `motivo`
por que o registro não entra, numa de quatro formas:

| Forma | Cenas |
|---|---|
| **isto não foi filmado**, e o porquê (papel impresso, texto escrito, lei, mecanismo, número) | s02, s05, s17, s18, s19, s25, s27, s30, s32, s34, s36, s38, s54, s55 (o comunicado à imprensa de 15/12/2016, evt-23.9; quinta revisão), s60, s61 |
| **satélite** de geometria real (conta na régua) | s03, s08, s12, s15, s39, s48, s50 e, desde a décima segunda revisão, s13 pelo plano 2 (a linha `REGISTRO` dela continua a declarar a foto da corte de 1974 que falta no plano 1) |
| **FALTA DECLARADA**: pode haver registro, e o motivo de não pedir, ou de não ter | s11 (as votações de 1960 e 1962), s41 (gravação da KTOO), s57 (gravação da sessão) e, desde a décima primeira revisão, o que a pesquisa não achou: s20 (a eleição de 1978), s26 (as mascotes, sem permissão), s29 (a eleição de 1982), s31 (a campanha de 1982), s58 (a briga pela estrada) e s62 (o voto de 1974). s13 (a corte de 1974) estava aqui na décima primeira. Até a quarta revisão, também s55, que cogitava uma entrevista coletiva que a fonte não dá |

s10 e s23 saíram da tabela na segunda revisão: agora têm plano de registro (a obra das rodovias; Juneau em 1982).

O que sobra abaixo dos 60% é o que a fala é: metade dela é voto, lei, citação escrita e dinheiro, e isso é papel ou número. O
documento não conta na régua (identidade §4.3), e os documentos do Estado, sem licença, só podem ser recriados (midia.md §7.1).

**As candidatas do laudo de 26/09** (`qc-piso-real`, sinal "nome próprio na âncora" ou a senha), uma a uma:

| Candidata | O que o espelho faz agora |
|---|---|
| s35 | **Entregue** (décima primeira revisão): Wasilla em 6/6/2010 (o lago, a cidade e as montanhas), com o aviso do ano e o 55% pousando; a foto da eleição de 1994 não se achou |
| s11 | **Falta declarada:** duas votações em 4,8 s num plano só; uma foto seria de uma delas, e a contagem da outra pousaria em imagem de outro ano; a de 1974 já está em s01 e s62. O "nome próprio" é "August" |
| s17 | **Isto não foi filmado:** condição de lei e mecanismo de crédito |
| s29 | **Falta declarada** (décima primeira revisão): a eleição de 1982 não se achou, e o placar vai no DADO do plano 2; a pesquisa de opinião (plano 1) é número |
| s38 | **Isto não foi filmado:** a comissão é uma previsão da lei |
| s18 | **Isto não foi filmado:** a declaração foi escrita no folheto de 1978. É assinada por Frank Harris, que o roteiro não nomeia porque a identidade com o Harris de 1982 não está provada, e por isso não há card de pessoa (quarta revisão: até a terceira, esta linha dizia "sem autor"). O "nome próprio" é "Frank"; Willow está dentro da fala citada, e o registro dela está em s21 e s24 |
| s20 | **Falta declarada** (décima primeira revisão): a eleição de 1978 não se achou, e a cena é DADO do começo ao fim |
| s34 | **Isto não foi filmado:** a declaração foi escrita e não é assinada. O "nome próprio" é "This", a abertura da citação |
| s49 | **Entregue** (décima primeira revisão): Juneau do outro lado do canal, com o Mount Roberts, em 21/4/1997, com o aviso do ano; a foto da votação de outubro de 2000 não se achou. "Better ferries" é a opção da cédula; a balsa está em s47 e em s52 |

O laudo regravado em 27/09 lista outras sete (s18, s34, s60, s11, s17, s38 e s54). Todas têm a linha `REGISTRO (§10.1)`: o
sinal "senha-não-foi-filmado" aparece agora justamente porque o `motivo` escreve a forma que o ofício exige. O laudo é
heurística de ordenação, e nenhuma delas é pedido mudo. O laudo da segunda revisão lista as mesmas sete e a cauda s63 (o
sinal é o mesmo; s63 é o fundo da tela final, sem registro pedido: desde 28/09, o quadro final de s62, parado e escurecendo,
por decisão do Lucas).

**As coisas nomeadas que ficaram sem pedido na revisão anterior:** as balsas de s52 viraram pedido (plano 2); as de s49 e s55,
e o petróleo de s54, dizem por que não (a balsa e o oleoduto estão nas cenas vizinhas, e um clipe a mais reciclaria).

**O que ainda subiria a régua:**

- um registro com fonte para a corte de 1974, as eleições de 1978 e 1982, a campanha de 1982, a segunda foto da sessão de 2017,
  a briga de 2018 ou o voto de 1974: a pesquisa não achou nenhum, nem de outro ano (research-imagens.md);
- **contar o documento original fotografado** é decisão do Lucas, não do montador (mudaria a régua, roupa §4). É a única parte
  da pendência da régua que continua aberta.

Os dois mapas a mais que o diretor-de-arte propôs (s13 e s43, plano 2) já entraram (décima segunda revisão). A opção do Lucas
os chamava de "o máximo sem inventar imagem".

A camiseta "Anchorage Stealers", que até a décima revisão estava nesta lista, foi entregue e aprovada (`_media/foto/s28/`), sem
aviso do ano, pela regra da peça de acervo (Lucas, 28/09/2026): os 2,7 s dela já estão na conta.

**O número pousado sobre o registro está decidido** (décima segunda revisão: o Lucas aprovou a proposta do diretor-de-arte
inteira, "Sim, tudo como ele propôs (Recomendado)", e ela tem "números por cima de algumas fotos"; a técnica, cena a cena, é do
diretor-de-arte). O que segue é o registro de como a pergunta andou. Até a décima primeira, era **pergunta aberta, não erro
resolvido** (segunda revisão, corrigindo a primeira). O espelho pousa número ou texto sobre footage e foto em sete cenas (décima primeira revisão; eram nove, e s29, s31 e s56 saíram, porque o
plano virou DADO ou PRANCHA sem foto): s01 (o 57%, sobre Juneau de circa 1987, com o aviso do ano), s28 plano 3 (o texto sobre
a camiseta, terceira revisão; desde a sexta, o $800 million em "that" e o ABOUT A QUARTER quando a voz o diz; sobre o estádio
do plano 2, só os 0,33 s em que o 28 do plano 1 atravessa), s33 plano 2 (the ballot carried no price), s35 (o 55%, sobre
Wasilla em 2010, com o aviso do ano), s51 ($680 million), s53 (~90%) e s24 plano 1 (winner take all, que faltava na lista até
a sexta). Desde a sexta revisão, cada texto entra na palavra que o diz, nunca antes (§2, "Texto na voz"). A
identidade §5 dá ao DADO a base `--papel` e ao REGISTRO só "rótulo de lugar e crédito"; a roupa do diretor-de-arte diz o
mesmo ("DADO e DOCUMENTO | `--papel`"). Ler o número pousado (ofício §6.7; §10.1, trava 3) como texto sobre o registro, e não
como o modelo DADO, é leitura do montador: o diretor-de-arte confirma ou devolve, e o Lucas decide se isso muda a identidade.
A primeira revisão tirou a pergunta da lista dizendo que o report de 26/09 "errou"; sem decisão do Lucas, ela voltou a
`_decisoes_pendentes`.

Como informação, a parcela do `qc-piso-real` (outra régua: conta por cena, tira mapa e documento, e conta cena com retrato) é
**35,1%** (décima segunda revisão: os mesmos 240,9 s sobre 686,5 s, porque o portão soma o arquivo fundido de s08 e também
s09 e s10; na décima primeira, 36,2%; até a décima, 49,5%; antes da segunda revisão: 48,1%; na terceira não mudou, porque s28
já contava pelo estádio).

### 5.2 · Ritmo

| Medida | Resultado |
|---|---|
| Rajada (planos < 2,5 s) | 34,5 s = **5,2%** (teto 20%; décima primeira revisão: entraram os planos 2 e 3 de s09, de 2,1 s e 2,3 s; até a décima, 30,2 s = 4,5%). Nenhum plano abaixo do piso de beat de 1,5 s |
| Texto no ar ≥ 2,0 s (roupa §4; identidade §4.3) | Medido na segunda revisão. Os cinco planos de texto abaixo de 2,0 s (s12 p3, s30 p2, s55 p3, s60 p2 e p4, na numeração de antes) foram resolvidos: s30, s55 e s60 juntaram o plano ao vizinho do mesmo objeto; em s12, o placar de Fairbanks fica no palco durante o plano 4 (`_texto_no_ar`). Abaixo de 2,0 s sobram só dois planos de registro sem texto além do crédito: s10 p1 (a foto da obra, 1,766 s; desde a décima primeira revisão, com corte seco para o mapa) e s53 p1 (o oleoduto, 1,834 s). O conferente reprova plano de não-registro abaixo de 2,0 s sem `_texto_no_ar`. **Quinta revisão:** a conta acima media só a duração do plano, e o texto posto sobre registro, travado na palavra, ficava abaixo do piso em quatro planos: s28 p3 (1,87 s), s31 p5 (1,45 s), s56 p2 (1,58 s) e s29 p2, que não dizia a palavra (1,38 s se travasse em "nearly"). A quinta resolveu isso antecipando o número, e a sexta desfez: o texto entra quando a voz o diz, e o piso se cumpre deixando o texto ficar depois (`_texto_no_ar`: 15 planos atravessam o seguinte da cena; 15 são conflito para o regente-de-imagem, porque a cena corta antes de 2,0 s: 10 na sexta revisão, s54 p1 na sétima, e s34 p2, s41 p2, s55 p2 e s57 p2 na oitava; §0f) |
| Respiro | Planos ≥ 6 s de registro ou satélite somam 81,9 s = 12,3% (décima segunda revisão: entrou o plano 2 de s43, 8,7 s de satélite; na décima primeira, 73,2 s = 11,0%). **Não medido pela régua do `qc-respiro`**, que precisa de HTML e roda depois da ARTE. Quase todos esses planos carregam texto ou dado. Se respiro tiver de ser tela sem texto (DECISÃO DO LUCAS PENDENTE), a parcela real fica bem abaixo de 10% |
| Foto parada acima de 6 s | Só s01 plano 1 (6,6 s), agora a foto de circa 1987, com o aviso do ano. Ele tem Ken Burns e o dado do 57% entrando em word-lock, o que é movimento com propósito, e o conferente lembra que a janela passa dos 6 s de foto parada (identidade §4.3) e pede o Ken Burns da identidade §4.4. As outras fotos longas estão partidas em planos (s16, s37, s56). Em s56, o segundo plano de foto virou DADO, e em s58 a foto do plano 4 virou documento (décima primeira revisão) |

### 5.3 · A cauda de 20 s

`s63`, de 646,067 a 666,067 (quadros 19.382 a 19.982). **O fundo está decidido** (Lucas, 28/09/2026, 11:2x de Brasília: "A
última cena, parada e escurecendo (Recomendado)"; a opção dizia: "O quadro final (o YES da votação e a linha do preço vazia)
para e escurece aos poucos, sem texto novo. Não disputa com os botões."):
- o quadro final de s62 (o YES e a linha do preço vazia) parado, escurecendo aos poucos **sem chegar ao preto** (identidade §5:
  100% coberto), sem texto novo, sem herói e sem elemento-chave, com `data-qc-sem-heroi` (editor-de-arte §7);
- **renderizado**, e é isso que garante que nada sai preto: um segmento sem render sairia preto do mesmo jeito;
- um beat único `continua`, `forca: livre`, com o porquê "tela final: a última cena, parada e escurecendo (Lucas, 28/09/2026)"
  (regente-de-imagem §0); o qc-visual a julga como fundo e reprova o escurecer que chega ao preto (§6);
- o quadro de s62 só se garante por construção (ofício §11): num run fundido s62+s63, que é do diretor-de-arte, ou com a cena
  feita a partir do arquivo de s62;
- os elementos finais do YouTube caem por cima, no YouTube Studio. A trilha continua pendente (música e transições).

Se algum clipe do vídeo vier do Shutterstock, a linha `Image(s) and/or video used under license from Shutterstock.com` vai na
faixa de crédito desta cena (identidade §7; midia.md §3.4; `_creditos` de s63). Até a décima primeira revisão, o conteúdo era
DECISÃO DO LUCAS PENDENTE, e a cena, o fundo provisório.

### 5.4 · Protagonista em `--destaque` (decidido)

**Juneau**, a capital que ficou: o ponto, a estrada que para, o anel em Cascade Point. A paleta completa:

- `--contraparte`: o destino da mudança (Willow, depois Wasilla);
- `--neutro`: Anchorage, Fairbanks, Sitka, o Canadá e a British Columbia;
- `--tensao`: só para risco (avalanches);
- placar não × sim, na mesma lógica: **NÃO** (a capital fica em Juneau) em `--destaque`, **SIM** (a mudança, Willow ou
  Wasilla) em `--contraparte`, nunca vermelho × azul. A primeira revisão escrevia "sim × não: `--destaque` × `--contraparte`",
  que, lido na ordem, pintava o sim com a cor de Juneau (segunda revisão).

Tudo isso está em `paleta`. Até a décima primeira revisão era proposta, pendente do Lucas. **Decidida em 28/09/2026**: o
diretor-de-arte seguiu esta paleta ("Juneau na cor de destaque da marca e Willow/Wasilla na cor de contraparte"), e o Lucas
aprovou a proposta dele inteira ("Sim, tudo como ele propôs (Recomendado)"; §0i). A execução é do diretor-de-arte.

### 5.5 · Cenas de mapa

São **15 cenas com planos de mapa**: s03, s07, s08, s09, s10, s12, s13, s15, s33, s39, s43, s44, s48, s50 e s59. **s13 e s43
entraram na décima segunda revisão**, cada uma pelo plano 2: a folha recriada sobre o satélite (Lucas, 28/09/2026: "Aceitar,
com 2 mapas a mais (Recomendado)"; §0i). s09 entrou na décima primeira: a metade de Anchorage do antigo plano 2, sem foto,
virou o mapa do plano 3, que acende Anchorage e Fairbanks, e a foto da Ladd Field encolhe para o ponto de Fairbanks (ofício
§6.7). Na primeira revisão eram 11 (s46 foi fundida em s44); na segunda, s07 ganhou o mapa Sitka → Juneau. s10 continua com
três planos de mapa, embora abra em foto. Somam **149,1 s** de satélite MapTiler (na décima primeira, 134,5 s; antes, 132,3 s),
e cada uma custa pedidos no render. **O gasto está liberado** (Lucas, 28/09/2026; identidade §6, "O gasto do Juneau,
liberado"): o contador da MapTiler se anota antes e depois do primeiro render de mapa, e o custo real vai ao Lucas antes das
outras cenas. s08, s09 e s10 são um arquivo só (a fusão do diretor-de-arte), e isso já é um render a menos.

- O crédito `© MapTiler © OpenStreetMap contributors` fica na tela o tempo todo do mapa.
- O que vem do OSM leva o crédito do OSM: a estrada de Juneau e Cascade Point, o Taku, Haines, Haines Junction, Willow e os
  limites do local de 1976, as rodovias com nome (a Glenn, a Alaska Highway, a Haines, a Klondike, a de Glennallen a Tok e a de
  Anchorage a Willow) e, se vier dele, o fim da Thane Road. O Natural Earth (países, províncias, rios, lagos, cidades, o campo
  de gelo e as duas redes de estradas), o GNIS e o TIGER são domínio público. A fonte e a licença de cada camada estão no
  `pauta-geo.json`.
- **As rotas que nunca foram construídas** (identidade §6; Lucas, 27/09/2026) vão como esquema tracejado pelo texto da fonte, a
  partir do ponto de partida real, com o aviso `Approximate route` no papel legenda todo o tempo da linha:
  - s44 plano 3, os dois corredores: o do Lynn Canal sai do anel de Cascade Point para o norte, e o do Taku sai do fim da
    Thane Road, em Juneau, para o nordeste ao longo do Taku Inlet;
  - s48 planos 1 e 2, a margem leste (2000), de Cascade Point até perto da foz do Katzehin;
  - s50 planos 1 e 2, a Alternativa 2B (2006): de Echo Cove a Cascade Point é a estrada que existe, em traço cheio; dali ao
    norte do delta do Katzehin, e a balsa até Haines e Skagway, tracejados.

  A figura do estudo de 2018 não se decalca (midia.md §7.1). O do Taku sai de `thane-road-fim`, que chegou em 28/09 (OSM
  node/5691733230; décima segunda revisão); até ali, o plano 3 de s44 ficaria com o rio (`rio-taku-osm`), o rótulo do Taku
  Inlet (`taku-inlet-gnis`) e a voz. O caminho do Gastineau Channel ao Taku Inlet não está na fonte, e é da arte, dentro do
  Approximate route. Até a décima revisão, nenhum corredor se traçava: s44 tinha a seta sem linha (mapista §6c), e o esquema
  era a pendência #9.
- s10 pede `eua` e `canada` inteiros: o palco vai até onde a Alaska Highway encontra a rede do continente
  (`alaska-highway-ligacao-continente`, agora em disco).
- País no mapa vai com o nome escrito, sem bandeira (s03, s10 e s44; identidade §6).
- **Só s44 pede relevo** (décima segunda revisão; Lucas, 28/09/2026: "Sim, e com relevo 3D no campo de gelo"): `mapa3d` no
  modo e nos seis planos de mapa, com o terreno (terrain-rgb-v2) em `_base_mapa`. O relevo prova o que a voz argumenta, o gelo
  e o fiorde "entre montanhas íngremes" (mapista §5 e §6; ARTE-31). A escala do desnível e o exagero são do mapista, medidos
  no DEM. `mapa3d` não tem prova nesta máquina, e a primeira é o render desta cena. As outras cenas de mapa dizem "relevo não
  pedido" ou não pedem.
- A folha recriada de s13 e a de s43 (plano 2) ficam sobre o satélite, com o crédito do mapa o tempo todo. s13 usa o palco de
  s12 (os dois raios), e s43, o enquadramento em que s44 abre.

**Mapa seguido de mapa**, desde a décima segunda revisão, acontece uma vez: o plano 2 de s43 (mapa) e s44 (`mapa3d`) se tocam
em 463,133 s, no mesmo enquadramento. A identidade §4.4 pede UMA viagem de câmera (`fundir: true`). O diretor-de-arte deixou
s44 em arquivo próprio ("54 s juntos seria um ato inteiro"), e rever isso é dele (§0i.4). Com dois arquivos, a viagem só se
garante por construção, com o último quadro de s43 igual ao primeiro de s44 (ofício §11). s44 continua uma viagem só, com o
registro do fiorde ancorado dentro dela. Entre s12 e o plano 2 de s13 há a folha de 1974 (documento), e o diretor-de-arte
deixou a fusão s12+s13 condicional a este aceite: o plano a sustenta (§0i.4). Entre os outros mapas sempre há outro regime.

### 5.6 · Pedidos que dependem de fonte não liberada ou de licença

- Todo documento do Estado e da imprensa listado em 4.3 (midia.md §7.1): o original só com permissão clara, conferida na origem
  de hoje; sem ela, recriado com a fonte. A Trends de 1990 já tem a decisão: recriada, com a página como prova (Lucas,
  27/09/2026).
- Tudo o que veio da Divisão de Eleições (boletins e folhetos) foi lido de cópia arquivada, que vale como fonte, com a data da
  captura (Lucas, 27/09/2026); mostrar a página original ainda pede permissão clara (midia.md §7.1).
- Os sites da Divisão de Eleições, o BASIS e o do Department of Revenue recusam robô. A conferência do texto vai pela cópia
  arquivada, com a data (página oficial do Alasca). A da licença e o que a cópia não tiver vão ao navegador do app, que só o
  Claude central opera, e desde 27/09 sem o Lucas precisar acompanhar (CLAUDE.md, "A marca"). Desde a décima segunda revisão,
  os 16 textos de licença e de nota do despacho dizem isso. A série de s54 já veio assim, em 28/09, com o sim do Lucas para
  enviar o formulário de datas (§0i).
- As mascotes de 1982 (s26) se acharam sem permissão: nenhuma figura vai à tela sem autorização escrita dos detentores (o NFL
  Access Committee, o Capital Access Committee e o ADN, dono da digitalização), e ninguém a pediu. s26 é desenho.
- O retrato só entra de fonte autorizada (midia.md §7.2). Os que não se acharam, e o de Reamer, que só existe em CC BY-NC ou em
  foto de jornal, saem só com nome e cargo.
- A foto de agência depende do ok do Lucas àquela foto, e a Reuters está fora (§7.4). Nenhuma entrou.
- Vídeo do governo do Alasca (a balsa, em s47 e s52) entra com a fonte na tela; vídeo de jornal, só com licença conferida
  (Lucas, 27/09/2026; midia.md §7.5).
- O original do estudo de 2018 precisa de autorização escrita do DOT&PF, que ninguém pediu (pendência 8; era a 12 até a
  décima primeira revisão). Em s43, a folha recriada fica sobre o satélite desde a décima segunda.
- As fotos fora do domínio público vão com o crédito que o conferente aprovou, copiado para o objeto do plano: CC BY e CC BY-SA
  do Commons, a foto do Estado (s22, State of Alaska / Alaska State Library), a foto de jornal (s56 p1, Michael Penn / Juneau
  Empire), a camiseta de s28 (Dave Gelotte / Alaska State Museum; midia.md §7.5; Lucas: "Sim, pode baixar (Recomendado)") e o
  DOCUMERICA de s16 p1, pela exceção (Lucas, 27/09/2026; midia.md §7.3). O domínio público federal vai sem crédito na tela.
- As fotos da Alaska State Library que só se compram não se compram (Lucas, 27/09/2026): Juneau em 1905 (s06) e Fort Richardson
  em 1940 (s09) ficaram fora.

### 5.7 · DECISÃO DO LUCAS PENDENTE que tocou este espelho

A mesma lista está em `espelho.json` › `_decisoes_pendentes`, na mesma ordem. Cada item leva a data da revisão que o manteve:
os que a décima segunda não tocou continuam "mantida na décima primeira revisão, 28/09"; a da régua e a do regente dizem o que a
décima segunda mudou nelas. Até a décima, este report numerava 20 itens e guardava as decididas no lugar delas; desde a décima
primeira, a numeração é a do espelho, e as decisões ficam em `_decisoes_do_lucas` (abaixo).

1. Música e transições (`marca/finalizacao.json` não existe).
2. A PRANCHA não tem modo no enum: o espelho usa `desenho` + "PRANCHA" no motivo.
3. O catálogo de modelos do canal: o campo `modelo` ficou ausente.
4. Se respiro tem de ser tela sem texto.
5. Se o documento original fotografado deveria contar na régua de mundo real. É o que sobrou da pendência da régua: o Lucas
   aceitou que o Juneau fique abaixo dos 60%, com os dois mapas a mais (28/09), e a régua foi a 47,2% da fala.
6. Os pisos do canal para a taxa de pedido e para a maior janela sem registro.
7. (leve) A sugestão da rodada 6 de mostrar o 57% também em "they approved it" (s11). Não foi aplicada: o espelho segue a
   decisão aprovada da Abertura (57% em s01).
8. Pedir ao DOT&PF a autorização para o original do estudo de 2018.
9. Para o Lucas e o Mateus, não decisão de vídeo: a divergência de contrato do §8, item 1. Desde a décima primeira revisão, a
   linha diz também que as mascotes de s26 se acharam sem permissão, e a cena virou desenho.
10. Para o regente-de-imagem, não para o Lucas: os 15 conflitos de texto no ar (10 na sexta; s54 na sétima; s34, s41, s55 e s57
    na oitava), em que o corte para a cena seguinte vem antes de 2,0 s da palavra (§0f), com a decisão do Claude central de
    27/09: a palavra exata de entrada é da regência, e a `_nota_texto_no_ar` é proposta (§0g). Na décima segunda, o parêntese
    de s54 passou a dizer a queda que a voz diz (a série dá 77,4%, e as contas arredondadas do FSEIS, 77,6%).

**Na décima segunda revisão saíram seis, que o Lucas decidiu em 28/09** (as quatro respostas ao conceito visual; §0i): o
conteúdo da tela final (a #1 da lista de antes), a cor do protagonista (#2), o relevo (#3), o gasto na MapTiler (#4), o número
sobre REGISTRO (#13) e quantos picos (#14). A da régua (#9) ficou só com o documento original fotografado.

Na décima primeira, **saíram duas, que o Lucas decidiu em 27/09**: a #9 da lista de até a décima, o esquema declarado das rotas e
dos corredores ("Sim, tracejada e com aviso (Recomendado)"), e a #17, a bandeira ao lado de nome de país ("Só o nome escrito
(Recomendado)"). As #8, #10, #18 e #20 já eram decididas e só guardavam o número.

**Decididas pelo Lucas** (`_decisoes_do_lucas`, 17 entradas, cada uma com a mensagem literal e o que mudou no espelho):
- em 27/09, na nona revisão (§0g): a cópia arquivada de página oficial do Alasca vale como fonte, com a data; vídeo do governo
  do Alasca entra, o de jornal só com licença; logo de órgão federal e de outras instituições, só o nome escrito;
- em 27/09, e mudada no mesmo dia: foto de outro ano entra com o aviso do ano, e sem nenhuma foto o plano vira mapa ou desenho
  ("Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em tela"). A resposta de antes ("Não: sem foto do
  ano, vira mapa ou desenho"), que a nona revisão tinha gravado, fica registrada como superada;
- em 27/09, novas na décima primeira revisão: país no mapa, o nome escrito, sem bandeira; rota que nunca foi construída,
  esquema tracejado com Approximate route; documento de outra data, com o rótulo; documento antigo, a folha até 1,4× e a
  recriação mais perto; a Trends de 1990, recriada; as fotos da Alaska State Library que só se compram não se compram; a
  exceção do DOCUMERICA; o download da camiseta;
- em 28/09: peça de acervo fotografada depois entra sem aviso do ano, como a página de documento;
- em 28/09, às 11:2x de Brasília, novas na décima segunda revisão (§0i): a tela final, a última cena parada e escurecendo; a
  régua abaixo dos 60%, com dois mapas a mais (s13 e s43); o gasto da MapTiler liberado, com relevo só em s44; e a proposta do
  diretor-de-arte aprovada inteira (a paleta, os cinco picos, o número sobre a foto e o mapa atrás dos cards de s05 e s57). A
  decisão da rota ganhou a linha da chegada do `thane-road-fim`.

E uma divergência de contrato para o Lucas e o Mateus, que não é decisão de vídeo: a do §8, item 1 (a pendência 9).

## 6 · Cadeia referencial e candidatas a showpiece

| Promessa (livro-razão do dossiê) | Abre | Paga | Fecha |
|---|---|---|---|
| A · o que houve com o sim de 1974 | s01 | **s32** (o não de 1982 revoga a lei de 1974) | s60, s62 |
| B · a resposta é o preço, numa linha impressa | s02 | **s19**, s20, **s23**, s29, s30, s35, s36 | s60, s61, s62 |
| C · por que não se chega de carro | s03 | **s44**, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58 | s59 |
| D · o que seria preciso hoje | s02 | s36, s38 | s61 |
| E · a imagem de p1: a estrada que acaba e tudo que chega por ar ou por mar | s03, s04 | **s44** (o mapa explica por que ela para ali) | **s59** |

Em negrito, as cinco que levam a indicação do montador para showpiece (abaixo).

O livro-razão diz que a imagem de p1 é "paga em p6 explica por que ela para ali; p7 fecha na mesma imagem". s42 só retoma a
imagem com a pergunta ("why not just build one?"); quem explica é o mapa de s44, que desde a segunda revisão tem no palco a
estrada que existe e o anel de Cascade Point. Toda cena da tabela diz o seu papel em `_cadeia`.

**B e C completas na segunda revisão**, parcela por parcela do livro-razão (a `nota` de cada promessa em `_cadeia_referencial`):

- B, "p4: estimativa de 1982 impressa na cédula e recusada": a impressa é s23 e s30; a recusada é **s29** ("the no side won").
  Na terceira revisão, B ficou igual em todo lugar: "p5: em 1994 a exigência do preço vira lei" é s35 (a aprovação) e **s36**
  ("its wording is still law"), que agora é "PAGA B · PAGA D"; "Retomada literal em p7" é **s60** ("Both times a price went
  on the ballot, voters said no"), s61 (a lei pergunta o preço primeiro) e **s62** (o sim nunca veio com um preço aprovado),
  que fecham B. O `motivo` de s02 cita a mesma lista, e o de s01 deixou de pôr s61 no fecho de A.
- C, "paga em p6": campo de gelo, dois corredores e o Taku recusado (s44); avalanches e a rota escolhida em 2006 (Alt. 2B;
  evt-23.6), que o estudo de 2018 orça em cerca de US$ 680 milhões (doc-21.7) e que ainda terminava numa balsa (s50, s51; quinta
  revisão: até a quarta, esta linha repetia o livro-razão, que prende o número de 2018 a 2006); **a Justiça (s52)**; **"No Action" com o petróleo em queda (s53, s54, s55**; s58
  a torna definitiva); **o voto local dividido (s49**, os 79 votos; **s56**, o 6 a 3; **s57**, a voz do lado vencido, que
  também diz "a road to another ferry").

**As candidatas a showpiece são as três da roupa do diretor-de-arte §2, inteira** (linhas 76-78: "a abertura (a contradição
dos primeiros 15 s, voz.md §1), as cenas onde o 'Livro-razão da promessa' … diz que a promessa é paga, e o fecho"):
- **a abertura, s01**, que tem o sim de 1974, a capital que ficou e a pergunta, de 0 a 13,6 s. s02, que entra aos 13,6 s, é a
  promessa, não a contradição, e fica fora;
- **as 20 cenas que pagam** (s19, s20, s23, s29, s30, s32, s35, s36, s38, s44, s49 a s58). É também o que manda o contrato do
  montador §2: "marque essas cenas: elas são as candidatas naturais a showpiece";
- **o fecho**: as cenas da p7 que fecham as promessas. s59 fecha C e E na imagem de p1, s60 fecha A e B, s61 fecha B e D, e
  s62 fecha A e B. s58, onde a p7 começa, já é candidata como parcela de C.

A cauda s63 não é candidata, porque é o fundo da tela final. São **25** em `_candidatas_a_showpiece`, e a `_cadeia` de cada uma
diz "candidata a showpiece". Até a quarta revisão eram 21: a nota citava a roupa pela metade, e a abertura e s60 a s62
ficavam de fora (§0d E4). Cinco levam a **indicação do
montador**, nos dois campos: **s19** (1978: o preço chega à cédula), **s23** (o preço impresso de 1982), **s32** (a
revogação), **s44** (o problema no mapa, com o fiorde e a saída pelo Canadá) e **s59** (a estrada ainda para em Cascade
Point). Quem escolhe os picos, entre as indicadas ou não, e marca `showpiece` é o diretor-de-arte. **Ele marcou cinco: s01,
s23, s32, s44 e s59** (`conceito-visual.json` › `showpiece`; trocou s19 pela abertura), e o Lucas aprovou a proposta dele
inteira em 28/09/2026 ("Sim, tudo como ele propôs (Recomendado)"; décima segunda revisão). O número de picos era pendência da
roupa dele e saiu. `_nota_showpiece` diz isso. (Terceira revisão: até a segunda, só as cinco estavam em
`_candidatas_a_showpiece`, as outras parcelas diziam só "PAGA", e este parágrafo dizia que elas chegavam como candidatas pela
`_cadeia`, o que o campo não dizia.)

As repetições são intencionais e declaradas em `_repeticao_intencional`:

- a linha do preço, em s02, s23 e s30;
- o mapa da estrada, em s03 e s59, e a estrada com o anel de Cascade Point dentro do palco de s44;
- a lei, em s36 e s61, com o grifo no texto literal da AS 44.06.055;
- o YES do voto de 1974, no placar de s01 e no fecho de s62, sem os números (décima primeira revisão; até a décima, a mesma
  foto nas duas, e o conferente mandou trocar a de s62);
- Juneau do ar, de s01 (plano 3) reaparecendo na entrada de s03;
- os cards de Harris (s05, s25) e de Stoops (s26, s27, s31): o mesmo card, só com nome e cargo, porque os retratos não se
  acharam (décima primeira revisão; `_despacho_research` › `retratos`, com o resultado);
- a foto que ancora no mapa dentro da mesma cena: Sitka em s07 (plano 2 → plano 3) e, desde a décima primeira revisão, a Ladd
  Field em s09 (plano 2 → plano 3). A obra da rodovia de s10 deixou de ancorar: a virada é corte seco, porque nenhum ponto do
  trecho da foto está em `needs.geo`;
- desde a décima segunda revisão: o palco de s12 (o satélite com os dois raios) sob a folha do parecer de 1993, no plano 2 de
  s13; o enquadramento em que s44 abre (Juneau, a estrada e o anel em Cascade Point) sob a folha do estudo de 2018, no plano 2
  de s43; e o quadro final de s62, parado e escurecendo, em s63.

Os mesmos lugares em cenas diferentes pedem clipes diferentes: o Capitólio, Willow, a balsa, o Lynn Canal, o legislativo, a
estrada, Fairbanks, Wasilla e, desde a décima primeira revisão, Juneau (`_despacho_research` › `mesmo_lugar_clipes_diferentes`).

## 7 · Capítulos (só para a descrição; nada disso vai à tela)

| Parte | Tempo | Cena |
|---|---|---|
| p1 · O sim de 1974, a cidade sem estrada e quem queria sair | 0:00 | s01 |
| p2 · Uma capital cedo demais, um estado que foi para o norte | 0:46 | s06 |
| p3 · Willow e a primeira conta | 2:23 | s15 |
| p4 · 1982: tudo ou nada | 3:39 | s22 |
| p5 · 1994: sem preço, o preço vira lei, e a pergunta mudou | 5:40 | s33 |
| p6 · A estrada: a outra conta | 7:19 | s42 |
| p7 · Fecho: as duas contas, a pergunta respondida e Cascade Point | 9:58 | dentro de s58 |

A p7 começa dentro de s58 porque a decisão de 2018 é um objeto só (§11b). Os títulos estão em português, como no dossiê. A
versão em inglês é de quem escreve a embalagem.

## 8 · Divergências de contrato encontradas (para o Lucas e o Mateus), e o que pôr no despacho do research

1. **O pedido de mídia.** O `pesquisa-imagens.md` §1b diz que `midia_termos` e `midia_necessidade` "não existem mais" e monta
   a lista de trabalho só por três sinais: `needs.midia`, `modo` footage/foto/drone/split-footage, e `midia` real em modo
   desenho, dados ou cinemático. O contrato do montador e o portão `qc-espelho-midia` dizem o contrário: o pedido é
   `midia_termos` + `midia_necessidade`, por plano, e `needs.midia` sozinho é pedido fingido.
   - O espelho seguiu o montador e o portão: termos e necessidade preenchidos, por plano, e `needs.midia` vazio.
   - **Lido ao pé da letra, o §1b perde 5 cenas com pedido**, todas `documento` ou `mapa` com registro dentro: s07 (Sitka),
     s23 (Juneau em 1982), s44 (o fiorde), s52 (a balsa em Haines) e s58 (a briga de 2018). A primeira revisão contava 10
     porque punha os retratos na mesma lista: s05, s27, s41, s48 e s57 só estavam nela pelo retrato, e retrato não é do
     pesquisa-imagens (segunda revisão, §0b M6). A segunda e a terceira contavam 6, com s26. Na quarta, as mascotes de s26
     ficaram só com o pesquisa-documentos, e s26 saiu da lista do pesquisa-imagens (§0d E2).
   - **O portão também não as vê** (terceira revisão): o `qc-midia-real` conta essas cenas só como pedido brando
     (`scripts/qc-midia-real.mjs`: `MODO_EXIGE` não tem `documento` nem `mapa`), e o brando só reprova com `--estrito`. Se o
     fiorde de s44, a balsa de s52, Juneau em 1982 (s23) ou Sitka (s07) não chegarem, o portão fica calado: **a cobertura
     dessas cinco se confere à mão**, plano a plano, contra `_despacho_research` › `cenas`. A das mascotes de s26 se confere
     contra `documentos`.
   - **No sentido inverso, s25 e s55** (modo `desenho`, `midia: "foto"`) aparecem ao §1b pelo terceiro sinal, mas o `midia` delas
     é só o retrato do pesquisa-pessoas: não são do pesquisa-imagens, não estão em `cenas`, e o `motivo` das duas diz isso.
   - **No despacho do research, a sessão central passa as listas de `espelho.json` › `_despacho_research`**:
     - ao **pesquisa-imagens**, `cenas` (33 cenas, plano a plano, **sem retrato e sem as mascotes de s26**, com `fora_do_1b`
       nas cinco acima), dizendo,
       com estas palavras ou parecidas: "neste canal o pedido é `midia_termos` + `midia_necessidade` + `_planos[].midia_termos`;
       a exigência de clipe diferente para o mesmo lugar está na `midia_necessidade` de cada cena e em
       `mesmo_lugar_clipes_diferentes`; retrato de pessoa citada não é seu";
     - ao **pesquisa-pessoas**, e **só a ele**, `retratos` (10 pessoas, 13 planos, com o mesmo arquivo de Harris e de Stoops);
     - à **pesquisa-dados**, `dados` (a conferência, a única busca nova e as cenas que só o navegador do app confere);
     - ao **pesquisa-logos**, `logos` (os pedidos de `needs.logos`, as notas do que não se pede e, desde a terceira revisão,
       `nome_escrito`: as 12 entidades que vão com o nome escrito, com o que entregar de cada uma);
     - ao **pesquisa-documentos**, e **só a ele**, `documentos` (terceira revisão): as 12 peças e as 4 matérias, com cena,
       planos, URL, licença, o papel na tela, os trechos a grifar e, desde a quarta, o que só se confere (`conferir`, no ROD de
       s58; desde a quinta, também em s03 e s28). Desde a quinta, cada trecho a grifar vem com `voz_do_grifo`, as palavras da
       voz em que o marca-texto o varre, e a peça de campanha vem com `pistas`: as imagens da coluna, que são outras peças. Até a segunda revisão ele não tinha lista, e a sessão central que despachasse pelas listas deste item o deixaria
       sem trabalho. **As mascotes de s26 (planos 1 e 3) são dele e só dele** (quarta revisão; `_pedido_a` no espelho, `caca`
       na peça). Dizendo: "o `_documentos` de cada cena é o registro dela; a lista é a fila; as mascotes de s26 são suas, e o
       pesquisa-imagens não as caça; os folhetos e boletins da Divisão de Eleições foram lidos de cópia arquivada, que vale como
       fonte, com a data da captura (Lucas, 27/09/2026); site que recusa robô não se contorna".
   - **Décima primeira revisão (28/09):** o research correu com estas listas e voltou. Lido ao pé da letra, o §1b perde agora
     4 cenas com pedido (s07, s23, s44 e s52): s58 saiu, porque o plano 4 virou documento. No sentido inverso, só s55: s25 deixou
     de pedir retrato. As listas de hoje: `cenas`, com 27 cenas e 40 planos; `retratos`, com o `resultado` de cada pessoa;
     `documentos`, com 29 trechos a grifar; `logos`, sem pedido; e `geo`, nova, com o único pedido aberto (`thane-road-fim`).
   - **Décima segunda revisão (28/09):** `geo` ficou sem pedido (o `thane-road-fim` chegou; `entregues`), e `dados` sem busca
     nova (a série de s54 chegou; `busca_nova_atendida`). Em `documentos`, os planos 2 de s13 e de s43 estão como `mapa`, com o
     documento na tela como a folha recriada sobre o satélite; em `cenas`, s44 está como `mapa3d`.
2. `drone` não é `modo`: vale só em `midia` (roupa §3). Não foi usado.
3. O enum não tem prancha. O `desenho` cobre a PRANCHA e o fundo da cauda (desde 28/09, o quadro final de s62, parado e
   escurecendo).
4. **`citacao` não é modelo da identidade** (roupa do editor-de-arte §6: "execute dentro de um dos cinco e diga qual"). A
   regra do espelho, desde a segunda revisão: o `motivo` de cada cena `citacao` diz o modelo em que ela se executa.
   - **REGISTRO**, com card de pessoa e a fala recriada com a fonte, quando há pessoa real identificada (identidade §5): s05
     (Harris), s27 (Stoops), s41 (Kiehl) e s57 (Gladziszewski). Desde a décima primeira revisão, os cards de s05 e s27 saem só
     com nome e cargo (os retratos não se acharam), e os de s41 e s57, com o retrato.
   - **DOCUMENTO recriado**, com o texto fiel e a fonte, quando a declaração é escrita e a voz não nomeia quem a fez. São dois
     casos diferentes:
     - s18 (folheto de 1978) é assinada por Frank Harris, mas o roteiro não o nomeia, porque a identidade com o Harris de 1982
       não está provada;
     - s34 (folheto de 1994) não é assinada.

     Nas duas não há card de pessoa: numa, o nome não vai à tela, e na outra não há nome. Até a terceira revisão, esta linha
     chamava as duas de "sem autor" (§0d G2).

## 9 · O que NÃO está provado

- **O que a pesquisa não achou** (décima primeira revisão). O voto de 1974 (s62), a corte de 1974 (s13), as eleições de 1978
  (s20) e 1982 (s29), a campanha de 1982 (s31), a segunda foto da sessão de 2017 (s56), a briga pública de 2018 (s58) e a
  metade de Anchorage de s09 ficaram NÃO ACHADO pelo pesquisa-imagens, nos acervos abertos e no navegador do app
  (research-imagens.md). O NÃO ACHADO é dele: o montador não buscou nada. Que não exista foto é o que a pesquisa diz, não prova.
  Se uma aparecer com a origem conferida, o plano volta a registro num re-espelho, com o mesmo id.
- **Os clipes da caça.** Os 23 planos de B-roll de hoje (a lista do §4.3) ainda não têm arquivo: a caça espera o pedido do
  Lucas, e cada clipe passa pelo conferente. Continua sem prova, da segunda revisão: o clipe do fim da estrada **em Cascade
  Point** (não em Echo Cove), o de Willow e o da balsa em Haines com a descrição nomeando o lugar.
- **As fotos entregues.** O montador não abriu nenhuma. Arquivo, data e lugar na origem, crédito, aviso e enquadramento vêm do
  `conferencia-midia.json` (`f1f699e3…`) e dos research-*.md. O conferente do espelho prova que cada foto ou retrato aprovado
  tem, no objeto, o aviso do ano ou "sem aviso", como o veredito (21); o ano escrito em cada aviso foi conferido à mão contra o
  `data_na_origem`, e o verificador não o compara.
- **A geometria nova.** O conferente prova só que o arquivo existe em `_media/geo/` (`_existe`, 107 pedidos). O conteúdo, os
  extremos de cada rodovia e a licença de cada camada vêm do `pauta-geo.json` e do research-geo.md, sem conferência minha. O
  `thane-road-fim` chegou em 28/09: as coordenadas e o nó do OSM no `_exige` são os do pauta-geo.json e do research-geo.md §7,
  e o montador não abriu o arquivo além de saber que ele existe.
- **Os esquemas.** O caminho de cada esquema é o texto da fonte, entre aspas em `_esquema`. Que a linha tracejada o siga é do
  mapista, e nenhuma geometria o prova: é esquema, declarado como aproximado na tela. Que o corredor do Taku sai do fim da Thane
  Road vem do FSEIS ("from the end of Thane Road in Juneau, northeast along the Taku Inlet", p. 2-2).
  - A reta por terra (39 de 41 pontos) e o caminho pela água de `s44._geografia` são contas minhas sobre os polígonos do NE
    1:10M, numa busca em grade de 0,004° × 0,002°: não são rota, nem distância de estrada, nem o traçado do esquema. São
    contexto, e não se desenham.
  - O nome Gastineau Channel para o canal junto de Juneau vem do dossiê (evt-03.7) e da proximidade, não da geometria.
  - As distâncias e rumos de `_geografia` são contas minhas sobre as coordenadas em disco (grande círculo), sem outra
    conferência.
  - O Taku Inlet e o Lynn Canal são pontos do GNIS: o rótulo fica onde o GNIS põe o ponto, não num contorno.
- **A frota de 2009** (quarta revisão). Quais navios serviam o Lynn Canal em 2009 não está no dossiê. Por isso s52 não liga o
  clipe a 2009.
- **O despacho de documentos.** Os trechos a grifar foram copiados das passagens do `fundamento.json` e, nesta revisão, das
  cópias locais (`ca9_2011.pdf.txt`, linhas 87-88; `fseis.txt`, o ROD, linhas 233-238). Nenhuma URL foi aberta. O conferente prova que a voz de cada
  grifo cai nos planos, não que a página entregue traga o trecho no lugar em que a arte o grifará.
- **Boucher v. Engstrom** (s13, plano 1). O texto vem do Caselaw Access Project (`cap-boucher.json`), pela pesquisa-documentos.
  Que a nota da ordem de 27/06/1974 confirma o "that same year" da voz é leitura minha, em `conferir`, para o
  verificador-de-fatos.
- **A decisão de 2009.** Continua NÃO ACHADA, e o nome e o número do caso da corte distrital não estão no dossiê. A tela mostra a
  de 2011, com o rótulo "upheld on appeal, 2011".
- **O primeiro anúncio da Football Fannie** (s28). O texto só existe, em fonte aberta, na citação da coluna do ADN; o original
  do Juneau Empire de 8/10/1982 não se achou, e o texto fica NÃO CONFERIDO no original (research-documentos.md §1). Que esse
  item da lista de fontes seja a peça inaugural que a coluna cita continua leitura minha.
- **Os nomes escritos.** As 12 entidades estão no espelho como o dossiê as registra; o nome oficial está na `pauta-logos.json`,
  e o montador não o conferiu.
- **O número pousado sobre o registro** (§5.1) está decidido desde 28/09 (a proposta do diretor-de-arte, aprovada inteira), e
  a técnica é dele. Que cada número entre na palavra que o diz e fique legível sobre a foto é da arte, e só o quadro
  renderizado prova.
- **O relevo de s44.** `terrain-rgb-v2` e a câmera 3D não têm prova nesta máquina (CLAUDE.md, tropeços do apoio); a primeira é
  o render desta cena. Que o relevo mostre o que a voz argumenta, e em que exagero, é do mapista, medido no DEM.
- **A cauda.** O espelho diz o quadro final de s62, parado, escurecendo sem chegar ao preto. Que o arquivo de s63 repita o
  quadro de s62 e que o escurecer pare antes do preto, só o render prova, e o qc-visual julga.
- **As fusões e a continuidade.** A fusão s12+s13 é do diretor-de-arte, e o plano a sustenta (§0i.4), mas ninguém a testou.
  Sem fusão, a viagem de s43 (plano 2) para s44 e o quadro de s62 em s63 só se garantem por construção, entre arquivos que o
  espelho não une (ofício §11).
- **As folhas sobre o satélite** (s13 e s43, plano 2). Que a folha recriada caiba sobre o mapa com o crédito da MapTiler e o
  do OSM na tela, e que o grifo continue legível, é da arte.
- **Texto no ar.** O espelho declara os tempos; que o texto fique no ar 2,0 s é da arte, e só o quadro renderizado prova. O
  conferente mede a trava que o objeto do plano escreve (a palavra entre aspas), e não o que a arte fará. A varredura reconhece
  número dito por extenso e frase citada entre aspas no objeto; texto de tela descrito sem número nem aspas ela não vê. Os
  rótulos de Anchorage e de Fairbanks do mapa novo de s09 (1,83 s e 1,25 s no ar, se entrarem com a voz) estão só na
  `_nota_texto_no_ar`, como os outros rótulos de lugar: o conferente não os mede.
- **A voz de cada grifo.** `voz_do_grifo` é a leitura do montador de qual trecho da fala cita cada peça; o conferente prova que
  essas palavras são ditas nos planos listados, não que a paráfrase seja fiel. A fidelidade é do verificador-de-fatos.
- **A série de s54** chegou em 28/09, lida pelo Claude central no navegador do app. Refiz a prova da cópia que o arquivo traz
  (748 linhas, a soma em centavos e o sha256 da tabela), mas não abri a página nem a tabela: que os números sejam os da página
  é o que essa prova e a leitura do Claude central dizem. Que o FSEIS tenha desenhado o Graph 2-1 com esta série é o que o
  nome e os extremos indicam, não prova. O `_dados/s54.json` da pesquisa-dados foi só lido, no fim, e o espelho não depende
  dele.
- **Licenças.** O montador não conferiu licença nenhuma. As marcações vêm do dossiê, do midia.md e, desde esta revisão, dos
  vereditos do conferente, que julga licença e fonte, e dos research-*.md. Os 16 textos de licença e de nota do despacho que
  diziam "no navegador do app, com o Lucas vendo" eram de antes da regra de 27/09 ("O navegador do app, sem o Lucas
  acompanhando", CLAUDE.md, "A marca"). Na décima segunda revisão, com o pedido do Claude central, passaram a "no navegador do
  app, sem o Lucas precisar acompanhar".
- **As fontes da Divisão de Eleições.** Boletins e folhetos foram lidos de cópia arquivada, que vale como fonte desde a decisão do
  Lucas de 27/09. A pesquisa-dados reabriu as 16 cópias em 27/09 (research-dados.md); o montador não as reabriu.
- **O research-geo.md** (§1, linha 71) dizia, até a décima primeira revisão, que o esquema declarado era DECISÃO DO LUCAS
  PENDENTE. Na entrega do `thane-road-fim` (28/09), o pesquisa-geo o corrigiu: a linha diz agora que o Lucas decidiu em 27/09.
  O espelho seguia a identidade §6 desde antes; o arquivo é do pesquisa-geo.
- **Escuta.** Ninguém ouviu as bordas. Elas foram provadas contra o `words.json`, que foi verificado pelo som em 26/09 (CLAUDE.md,
  pré-v1 item 3). A borda nova de plano em s09 (82,9 s) cai na pausa entre "bases" (acaba em 82,89) e "went" (82,922), pelo
  `words.json`, sem escuta. O silêncio da borda da cauda foi medido (−68,8 dB), não ouvido.
- **O pipeline.** A conta de quadros reproduz as duas linhas do `renderizar.mjs` e do `xml-premiere.mjs`; nenhum dos dois rodou.
- **s44 numa sessão só.** Que o mapista consiga executar o palco de 36 s, agora com os esquemas, o fiorde ancorado e, desde a
  décima segunda revisão, o relevo, numa sessão só é suposição do ofício (§11), não medida.
- **Respiro:** não medido (sem HTML).

## Anexo · As 61 cenas

| id | início (s) | dur (s) | modo | midia | planos | título |
|---|---|---|---|---|---|---|
| s01 | 0 | 13,600 | foto | footage | foto › footage › footage | Abertura: o sim de 1974 e a capital que ficou |
| s02 | 13,600 | 4,533 | documento | animacao | documento | A promessa: uma linha nas cédulas seguintes, o preço |
| s03 | 18,133 | 8,034 | mapa | animacao | mapa › mapa | Sem estrada para o continente: 43 milhas e fim |
| s04 | 26,167 | 8,500 | footage | footage | footage › footage | Tudo chega por ar ou por mar |
| s05 | 34,667 | 11,733 | citacao | animacao | citacao › citacao | Harris, 1982: caro e demorado demais |
| s06 | 46,400 | 6,733 | foto | foto | foto › foto | Juneau, capital cedo; a cidade nasceu do ouro |
| s07 | 53,133 | 22,367 | documento | foto | documento › foto › mapa › documento | A capital em etapas: 1900, Sitka, 1906, 1912 |
| s08 | 75,500 | 2,600 (o arquivo fundido: 23,033) | mapa | animacao | mapa | A população vai para o norte (a mãe do run s08 ← s09, s10 do diretor-de-arte) |
| s09 | 78,100 | 7,067 | foto | foto | foto › foto › mapa | Ferrovia e guerra: o norte cresce (fundida em s08) |
| s10 | 85,167 | 13,366 | foto | foto | foto › mapa › mapa › mapa | As rodovias ligam Anchorage ao continente; Anchorage e Fairbanks: de 15% a mais da metade (fundida em s08) |
| s11 | 98,533 | 12,100 | dados | animacao | dados › dados | Não, não, sim: 1960, 1962 e 1974 |
| s12 | 110,633 | 16,934 | mapa | animacao | mapa › mapa › mapa › mapa | O voto de 1974 no mapa e a regra das 30 milhas |
| s13 | 127,567 | 9,266 | documento | animacao | documento › mapa | A Suprema Corte mantém; o procurador resume a premissa |
| s14 | 136,833 | 6,567 | footage | footage | footage › footage | Decidido sair; faltava o lugar e o preço |
| s15 | 143,400 | 16,667 | mapa | animacao | mapa › mapa › mapa | 1976: três locais, Willow vence |
| s16 | 160,067 | 12,133 | foto | foto | foto › foto › desenho | Fairbanks: o comitê que queria o preço primeiro |
| s17 | 172,200 | 11,033 | desenho | animacao | desenho › desenho | A regra da Frank e o que é um título |
| s18 | 183,233 | 9,400 | citacao | animacao | citacao › citacao | 1978: "o verdadeiro objetivo é impedir a ida para Willow" |
| s19 | 192,633 | 14,467 | documento | animacao | documento › documento | Novembro de 1978: a Frank e o dinheiro na mesma cédula |
| s20 | 207,100 | 9,300 | dados | animacao | dados › dados › dados | As duas escolhas: sim à Frank, não aos títulos |
| s21 | 216,400 | 2,933 | footage | footage | footage | Willow: um lugar e nenhum dinheiro |
| s22 | 219,333 | 5,634 | foto | foto | foto | 1981: o legislativo reescreve as regras |
| s23 | 224,967 | 20,066 | documento | foto | documento › documento › dados › foto | 1982: a pergunta e o preço impresso |
| s24 | 245,033 | 6,400 | footage | footage | footage › footage | Tudo ou nada: Willow ou Juneau |
| s25 | 251,433 | 9,667 | desenho | animacao | desenho › desenho | Harris × Clark no folheto de 1982 |
| s26 | 261,100 | 10,133 | desenho | animacao | desenho › desenho › desenho | Access Annie contra Football Fannie |
| s27 | 271,233 | 12,134 | citacao | animacao | citacao › citacao | Stoops, 2026: "fazer piada do processo inteiro" |
| s28 | 283,367 | 9,966 | dados | foto | dados › foto › foto | 28 times da NFL e 3 estádios: um quarto do preço |
| s29 | 293,333 | 10,434 | dados | animacao | dados › dados | A pesquisa dava sim; a urna deu não |
| s30 | 303,767 | 6,933 | documento | animacao | documento | O porquê se discute; o objeto do não, não |
| s31 | 310,700 | 21,800 | desenho | animacao | desenho › desenho › desenho › citacao › desenho | Por que o não venceu: cada versão com dono |
| s32 | 332,500 | 8,300 | documento | animacao | documento | O não de 1982 revoga todas as leis da mudança |
| s33 | 340,800 | 13,267 | footage | footage | footage › footage › mapa | 1994: Wasilla, sem preço, na rede de estradas |
| s34 | 354,067 | 9,033 | citacao | animacao | citacao › citacao | "Desta vez, sem etiqueta de preço" |
| s35 | 363,100 | 16,700 | foto | foto | foto › dados › dados › dados | 1994: não a Wasilla, sim ao direito de saber o custo |
| s36 | 379,800 | 12,100 | documento | animacao | documento › documento | A lei em vigor: títulos para 12 anos de custos |
| s37 | 391,900 | 6,567 | foto | foto | foto › foto | A regra vale para o legislativo também |
| s38 | 398,467 | 9,566 | desenho | animacao | desenho › desenho | Nove membros para somar a conta; o direito de saber |
| s39 | 408,033 | 10,400 | mapa | animacao | mapa › mapa | 2002: as sessões para o Mat-Su? Não, 2 a 1 |
| s40 | 418,433 | 13,334 | footage | footage | footage › documento › documento | 2025: um projeto para levar as sessões a Anchorage |
| s41 | 431,767 | 8,033 | citacao | foto | citacao › citacao | Kiehl: "como um filme de zumbi" |
| s42 | 439,800 | 5,367 | footage | footage | footage | E a estrada? Por que não construir uma? |
| s43 | 445,167 | 17,966 | footage | footage | footage › mapa | O estudo ambiental e a capital isolada |
| s44 | 463,133 | 36,067 | mapa3d | footage | mapa3d › mapa3d › mapa3d › mapa3d › footage › mapa3d › mapa3d | O problema no mapa: gelo, fronteira, dois corredores e a saída pelo Canadá |
| s47 | 499,200 | 6,367 | footage | footage | footage | A rodovia oficial de Juneau é uma balsa |
| s48 | 505,567 | 12,533 | mapa | animacao | mapa › mapa | 2000: Knowles escolhe a margem leste, mas não a leva adiante |
| s49 | 518,100 | 6,833 | foto | foto | foto › dados | Juneau dividida: 79 votos |
| s50 | 524,933 | 9,334 | mapa | animacao | mapa › mapa | 2006: a estrada que terminava numa balsa |
| s51 | 534,267 | 7,000 | footage | footage | footage › footage | 41 corredores de avalanche e 680 milhões |
| s52 | 541,267 | 7,266 | documento | footage | documento › footage | 2009: a Justiça federal anula a escolha |
| s53 | 548,533 | 11,100 | footage | footage | footage › footage | O dinheiro acabou: o petróleo pagava 90% |
| s54 | 559,633 | 6,800 | dados | animacao | dados | O petróleo cai mais de três quartos |
| s55 | 566,433 | 11,700 | desenho | foto | desenho › desenho | 2016: Walker prefere "No Action" |
| s56 | 578,133 | 6,800 | foto | foto | foto › dados | Janeiro de 2017: a Assembleia de Juneau ainda apoia, 6 a 3 |
| s57 | 584,933 | 10,400 | citacao | foto | citacao › citacao | Gladziszewski: "é uma estrada até outra balsa" |
| s58 | 595,333 | 13,834 | documento | animacao | documento › documento › documento › documento | 2018: No Action definitiva; a estrada também esbarrou num preço |
| s59 | 609,167 | 6,533 | footage | footage | footage › mapa | A estrada ainda para em Cascade Point |
| s60 | 615,700 | 17,367 | dados | animacao | dados › dados › dados | A pergunta mudou: se sair, depois quanto |
| s61 | 633,067 | 8,800 | documento | animacao | documento › documento | Desde 1994, a lei pergunta o preço primeiro |
| s62 | 641,867 | 4,200 | desenho | animacao | desenho | O sim foi real |
| s63 | 646,067 | 20,000 | desenho | animacao | desenho | Tela final do YouTube (20 s sem voz): a última cena, parada e escurecendo |
