COBERTURA: 15 de 15 (6 textos de tela, mudados ou novos, e 9 entradas do topo que mudaram; a lista foi derivada à mão: a diferença de entradas entre o textos-tela.json d6e57810… e o 9fc965e2…, feita por script, que acha só [155] e [295]–[298] mudados e o [380] novo, mais as entradas do topo que o setor listou e as duas que a diferença também achou, o _espera_a_sala[10] e o _instrucoes_para_a_arte[28])

# Laudo de fatos, delta da big-sur-texto-5: a foto do Nepenthe na s52 e o t1 do "Illustrative" da s31

- **Quem:** o verificador-de-fatos (Opus, esforço high), despachado pelo setor Texto e fatos, a mando da Sala de controle.
- **Data-base:** 06/11/2026, 15:3x de Brasília. A API do Commons e o comunicado da Caltrans foram lidos nesse horário.
- **Objeto:** out/big-sur/textos-tela.json, sha256 9fc965e2351106d2fcd285e52a1b8338169e9cb4e6b9027ca679bccde710292c (conferido). O arquivo de antes, d6e578108630…08d8, está em out/big-sur/_tmp/redator/t5-antes/ (conferido).
- **O que li inteiro:**
  - o ofício (.claude/agents/verificador-de-fatos.md);
  - a roupa (marca/agentes/verificador-de-fatos.md), que existe;
  - o pedido da Sala (pedido-sala-big-sur-texto-5.md);
  - o relato do redator (texto-5-relato.md);
  - o relato da pesquisa-4;
  - o veredito candidatos[63] do conferencia-midia.json (0a87de20…, conferido).
- **O que li em parte:**
  - da marca, identidade §4.1, §6 (a foto de outro ano e o aviso) e §7, e midia §2.7;
  - a linha da s52 no decisoes-lucas.md;
  - os laudos de antes, pelas linhas da s52 e da s31;
  - o s31.html (ea79a281…) e o s52.html (80a3ff23…, gravado pela Arte às 15:34), lidos como texto;
  - o words.json (f6055f41…), na janela da s52.
- **A foto:** não a abri. O sha256 do arquivo entregue é 95dcd3a1ad3c9b7a1a1ac2e5c16edc4be7721a57095cbb110833ee8556da6822, igual ao do veredito e ao do cobre da excecao_lucas. O sha1 é 5c5d9e6d…, igual ao da versão atual na API do Commons.
- **A rede:**
  - foram 3 pedidos, um por vez, com o User-Agent do canal (AlphaPointBot/1.0, com o contato), e todos deram 200:
    - a API do MediaWiki, com o imageinfo, o extmetadata e o wikitexto (commons-api.json, 3506b6f7…);
    - a API do MediaWiki, com os metadados EXIF das duas versões (commons-api-metadata.json, 43c26440…);
    - o código legal da CC BY-SA 3.0 (cc-by-sa-3.0-legalcode.html, c33d7ebd…).
  - O comunicado da Caltrans foi lido ao vivo pelo WebFetch e na cópia local (0ce05a20…).
  - Nenhum site recusou robô.
- **As ferramentas:** Bash, Read, Grep e WebFetch. Nenhum navegador, nenhum SendMessage ou send_message e nenhum crédito gasto. O Python rodou só de arquivos.
- **Os scripts e as saídas** estão em out/big-sur/_tmp/vf-bs-F/. Os itens em JSON estão em laudo-s52.json (5bb3eab7…).

**NOTA: 10/10.** Os seis textos de tela batem com o veredito, com a página do Commons e com o comunicado da Caltrans. A aritmética de tempo fecha, e a data da origem, que não vai à tela, ficou provada como a da digitalização pelo EXIF do scanner.

## A contagem

| veredito | quantos |
|---|---|
| confirmada | 14 (os 6 textos de tela e 8 entradas do topo) |
| corrigir | 0 |
| nao_conferida | 0 |
| nada a checar | 1 (o _ritmo_max) |

O resultado é **CHECADO E LIMPO**: a lista inteira tem veredito. Há uma nota LEVE numa nota interna, o nao_vai_para_tela[37], que não vai à tela.

## A tabela

| [n] | cena | texto | veredito | o que a fonte diz | URL |
|---|---|---|---|---|---|
| [155] | s31 | Illustrative (t1 10,3 → 13,3) | confirmada | Pela cobertura da legenda. No s31.html de hoje, CENA.casas.sai = 13.3, e o aplicarCasas apaga as casas de sai − 0,3 a sai, de 13,0 a 13,3. O vidaTexto apaga a legenda de t1 − 0,3 a t1, então com o t1 em 13,3 ela sai de 13,0 a 13,3, no mesmo tempo das casas. Com o t1 de antes, as casas ficavam 3 s na tela sem a legenda. O texto não muda. A linha dele no fatos-tela.laudo.md (l. 205, desenho declarado) continua valendo | — (o HTML e a regra de série [8]) |
| [295] | s52 | Jerrye and Roy Klotz MD / Wikimedia Commons⏎CC BY-SA 3.0 | confirmada | É igual, caractere a caractere, ao credito_na_tela do veredito, com a quebra no lugar do " · " (regra [13]). Pela API, hoje: Artist "Jerrye and Roy Klotz MD", Credit "Own work", LicenseShortName "CC BY-SA 3.0", AttributionRequired true, e no wikitexto o modelo self com cc-by-sa-3.0. Segue a forma da identidade §7, "autor / acervo · licença" | https://commons.wikimedia.org/wiki/File:NEPENTHE_-_BIG_SUR_COAST_OF_CALIFORNIA.jpg |
| [296] | s52 | Nepenthe (t0 1,033 → 0,167) | confirmada | O lugar_na_origem é "NEPENTHE - BIG SUR COAST OF CALIFORNIA" (o ObjectName), com a descrição "Nepenthe: A restaurant…" e a categoria Nepenthe; a API dá o mesmo hoje. O rótulo não é mais específico que a origem: sem "terrace" e sem "Highway 1". O t0 novo não muda a afirmação, porque a foto do lugar está na tela desde 0,0 e o rótulo entra 150 ms depois, pela regra [10] e pela identidade §6. Os ids de antes, VP-A-294 e VP-A-326, eram do ponto no mapa e não se aplicam mais: a sustentação agora é a origem da foto | https://commons.wikimedia.org/wiki/File:NEPENTHE_-_BIG_SUR_COAST_OF_CALIFORNIA.jpg |
| [297] | s52 | KIRK GAFILL (agora 6,133–11,133, no P2) | confirmada | Caltrans District 5, "Tourism on Big Sur is Surging Since Reopening of Highway 1", May 15, 2026: "said Kirk Gafill, owner of Nepenthe restaurant in Big Sur." A cópia local diz isso literalmente, e a página ao vivo, lida hoje, diz o mesmo. É o VP-A-307. O card entra em "he" (6,153 s da cena no words.json, 597,22 s do vídeo) | https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 |
| [298] | s52 | Owner, Nepenthe (2026) (agora 6,267–11,133, no P2) | confirmada | A mesma frase da nota de 15/05/2026, "owner of Nepenthe restaurant in Big Sur" (VP-A-308, VP-A-209). O "(2026)" casa com o cabeçalho [299] e com o crédito [302] do mesmo P2 | https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 |
| [380] | s52 | Older photo, date unknown (novo, 0,167–3,267) | confirmada | O veredito dá aviso_de_ano true e ano_na_tela null, e o primeiro dos exemplos_do_sentido é "Older photo, date unknown". A excecao_lucas cobre o 95dcd3a1…, que é o arquivo entregue. O data_na_origem (2008-02-01 12:16:04) é a data do scan: o EXIF da 1ª versão (5782 × 3946), que a API devolve, dá Make "Nikon", Model "Nikon SUPER COOLSCAN 4000 ED" (um scanner de filme) e DateTimeDigitized 2008:02:01 12:16:04. "Older" vale em qualquer leitura: a foto é de 2008 ou de antes, e a voz fala de 2026. "Date unknown" vale para a data em que a foto foi tirada, que nenhuma fonte dá. O aviso não tem ano nem década | https://commons.wikimedia.org/wiki/File:NEPENTHE_-_BIG_SUR_COAST_OF_CALIFORNIA.jpg |
| _avisos_do_ano[22] | s52 | o registro do aviso sem ano | confirmada | O texto, o t0, o t1, o sha256_julgado e o data_na_origem casam com o [380] e com o candidatos[63], campo a campo | (o veredito) |
| cards_pessoa[0] | s52 | o card no P2, sem retrato | confirmada | O nome, o cargo, o vínculo e a data do cargo não mudam, e a fonte é a mesma. O _sem_retrato novo descreve o lugar_do_card.preferido do veredito | https://dot.ca.gov/caltrans-near-me/district-5/d5-news/d5-news-5-15-2026-2 |
| _regras_de_serie[8] | s31 | a s31 até 13,3 | confirmada | Confere com o HTML de hoje. A s07 [32] e a s48 [266] não mudaram: entre os 380 textos de antes, só mudaram o [155] e os de [295] a [298] | — |
| _regras_de_serie[10] | s52 | a s52 P1 na regra da foto real | confirmada | O crédito entra em 0,0, e o rótulo e o aviso em 0,167, os três até 3,267. "O único aviso sem ano" se confirma: a lista tem 23 aviso_ano, e só o [380] não tem algarismo | — |
| _regras_de_serie[13] | s52 | o [295] entra na regra da quebra | confirmada | Contei de novo: eram 89 textos com "·" ou quebra, e agora são 90. As larguras em px são do redator: não são fato e não as refiz | — |
| nao_vai_para_tela[37] | s52 | a pílula sobre a folha continua fora | confirmada | A pílula não está na lista, e o acréscimo do T5 está certo. Há uma nota LEVE, abaixo | — |
| _ritmo_max | s52 | 2 → 3 | nada a checar | É medida de ritmo, não afirmação de fato. Conferi só que, das chaves, apenas a da s52 mudou, no medido e no vigente | — |
| _espera_a_sala[10] | s52 | a atribuição na descrição | confirmada | A página do arquivo, os autores, a licença com o link e a mudança batem com a API de hoje e com o o_que_a_licenca_pede do veredito | https://creativecommons.org/licenses/by-sa/3.0/legalcode.en |
| _instrucoes_para_a_arte[28] | s52, s31 | a foto, os textos do P1, o card no P2 e o t1 da s31 | confirmada | O recorte (x 0, y 400, 5318 × 2991, a 0,7221×), o Ken Burns de 1,00 a 1,12 em 6 s (no corte, 1 + 0,12 × 3,267 / 6 = 1,065, refeito), o rumo do empurrão, a zona da pessoa de pé, o teto de 1,0× e o card no P2 são os do veredito. A parte (c) casa com o [155] | — |

## A aritmética, refeita

O script é o conta.py, e a saída está em conta.txt.
- **Os _abs:** cada um é a base da cena mais o t0 ou o t1, e todos fecham. A base é 591,067 na s52 e 289,0 na s31.
  - [155]: 289,0–302,3;
  - [295]: 591,067–594,334;
  - [296] e [380]: 591,234–594,334;
  - [297]: 597,2–602,2;
  - [298]: 597,334–602,2.
- **A grade de 30 fps:** 0,167 cai no quadro 5, 3,267 no 98, 6,133 no 184, 6,267 no 188, 11,133 no 334 e 13,3 no 399.
- **A folga entre a foto e o card:** são 2,866 s, de 3,267 (o corte seco) a 6,133.
- **As contagens:** 381 textos, 9 deles na s52; 23 aviso_ano; 90 textos com "·" ou quebra, contra 89 antes.

## As perguntas do pedido

1. **O crédito [295] cumpre o que a licença pede na tela?** Sim.
   - A CC BY-SA 3.0, no §4(c), pede o seguinte: "provide, reasonable to the medium or means You are utilizing: (i) the name of the Original Author … (ii) the title of the Work if supplied; (iii) to the extent reasonably practicable, the URI … (iv) … in the case of an Adaptation, a credit identifying the use of the Work in the Adaptation". Diz também que "The credit required by this Section 4(c) may be implemented in any reasonable manner".
   - O §4(a) pede "a copy of, or the Uniform Resource Identifier (URI) for, this License with every copy".
   - Na tela, o crédito leva o autor, como a página o dá, e o nome da licença. Isso é o que cabe no meio, e segue a forma da identidade §7.
   - Vão à descrição do YouTube, como o _espera_a_sala[10] e o veredito já dizem:
     - o título "NEPENTHE - BIG SUR COAST OF CALIFORNIA" e a página do arquivo;
     - os autores;
     - o link da licença (https://creativecommons.org/licenses/by-sa/3.0/);
     - a mudança ("cropped; text added").
   - Nada na tela sugere endosso dos autores.
   - A leitura do compartilha-igual (§4(b)) é a do veredito, não a minha, e não é fato de tela.
2. **Algo na tela da s52 data a foto?** Não.
   - Os três textos do P1, o [295], o [296] e o [380], não têm ano, década nem algarismo de data.
   - O "(2026)" do cargo, o "May 15, 2026" do cabeçalho e o do crédito da Caltrans ficam no P2, depois do corte seco, e não dividem quadro com a foto.
   - O nome do arquivo ("…page-date-2008-02-01…") e o title do HTML não vão à tela.
3. **O rótulo [296]:** "Nepenthe" é o nome que a origem dá, sem nada mais específico. O t0 novo não muda o que ele afirma.
4. **O card no P2 pode sugerir que alguém da foto é o Kirk Gafill?** Não, pelos textos.
   - A foto sai num corte seco em 3,267, e o card só entra 2,866 s depois, em "he".
   - Ele entra sobre a mesa, ao lado da folha que traz a frase "said Kirk Gafill, owner of Nepenthe restaurant in Big Sur.", sem nenhuma mídia de registro sob ele. Nenhum quadro tem, juntos, uma pessoa da foto e o nome.
   - O que sobra não é texto: no P1, a voz diz "Kirk Gafill owns the Nepenthe restaurant in Big Sur." sobre a foto com gente. Isso estava na frase que o conferente julgou (frase_coberta), e o veredito aprovou com o empurrão rumo às mesas, nunca rumo à pessoa de pé. Fica com a Arte e o qc-visual, no quadro (PARA A SALA, item 3).
5. **O [155]:** é "confirmada" pela cobertura da legenda, e não "nada a checar". A legenda afirma que o desenho é ilustrativo, e a afirmação só é verdade enquanto cobre o tempo todo do desenho. Com o t1 em 13,3, cobre.
6. **O topo do arquivo:** nenhuma entrada afirma algo que o veredito ou a fonte desmintam.

## Os achados acionáveis

Nenhum **corrigir**: nenhum texto de tela volta ao redator.

- **[LEVE] nao_vai_para_tela[37], o motivo** (uma nota interna, que não vai à tela).
  - A 1ª frase ainda diz "O card do beat 0 já identifica", e o acréscimo do T5 diz que o card passou ao beat 1. As duas frases se contradizem.
  - O CONSERTO, opcional: o motivo passa a começar com "O card do beat 1 (em "he", 6,133 s) já identifica, e a folha traz …".
  - RAIZ: PONTUAL. O redator emendou a nota em vez de reescrevê-la.

## A lista de nomes

Nenhum anônimo a transformar em nome:
- "Jerrye and Roy Klotz MD" é o autor como a página o escreve (User:KLOTZ, own work);
- o Kirk Gafill é nomeado pela fonte primária, a Caltrans.

## Os 2 padrões mais vistos

1. **Mudança só de tempo que muda a verdade do texto.** O [155] não mudou uma letra, mas a legenda só é verdadeira se durar o tempo todo do desenho. O HTML de hoje ainda tem o t1 em 10,3.
2. **A data da origem que não é a data da foto.** O campo date do Commons é o do scan. O EXIF do scanner prova isso, e a tela fez certo em não usá-lo.

## Os voláteis

- **"Owner, Nepenthe (2026)"** é fraco: muda se o restaurante mudar de dono, e o "(2026)" já ancora a data. A página da Caltrans, lida hoje, ainda o dá como dono.
- **A licença CC** é irrevogável para o que já foi licenciado. Se a página do Commons for apagada ou mudar, vale o que foi lido hoje, e a resposta da API fica gravada em commons-api.json.

## DECISÃO DO LUCAS PENDENTE

Nenhuma tocou estes textos. O aviso sem ano é coberto pela excecao_lucas de 06/11/2026 ("Usar a do terraço (Recomendado)"), só para o arquivo 95dcd3a1….

## PARA A SALA

1. **O HTML ainda não tem os textos, e os vereditos valem para o textos-tela.json 9fc965e2.**
   - O s52.html de hoje (80a3ff23…, 15:34) ainda esconde os textos do P1, que esperam esta tarefa. Ele ainda tem o #credMapa, vazio, e o código do MapLibre no cabeçalho, e diz isso no próprio comentário.
   - O s31.html (ea79a281…) ainda tem CENA.legenda.t1 = 10.3, na l. 160. Até a Arte aplicar a instrução [28](c), as casas ficam de 10,3 a 13,3 sem o "Illustrative".
   - Quem confere no quadro, depois do render, é o qc-visual. Vale olhar que o crédito sai num elemento só, sem "·" na ponta, e que o aviso fica abaixo do rótulo.
2. **A descrição do YouTube** leva a atribuição da foto: o título do arquivo, a página https://commons.wikimedia.org/wiki/File:NEPENTHE_-_BIG_SUR_COAST_OF_CALIFORNIA.jpg, os autores Jerrye and Roy Klotz MD, a licença com o link https://creativecommons.org/licenses/by-sa/3.0/ e "cropped; text added". É o §4(a) e o §4(c) da licença, e já está no _espera_a_sala[10].
3. **A voz do P1 nomeia uma pessoa sobre uma foto com gente.** Nenhum texto liga o nome a alguém da foto. O empurrão rumo às mesas, nunca rumo à pessoa de pé junto ao balcão, é o que impede a leitura "este é ele", e quem o confere no quadro é o qc-visual. Isso não é achado de texto.
4. **Uma prova a mais para o "date unknown", que o veredito pode citar.**
   - O EXIF da 1ª versão do arquivo, pela API do Commons, dá Make "Nikon", Model "Nikon SUPER COOLSCAN 4000 ED" e DateTimeDigitized 2008:02:01 12:16:04.
   - O veredito diz que os 4000 dpi foram medidos pelo pesquisa-imagens. O modelo do scanner fecha a questão.
   - A resposta está em out/big-sur/_tmp/vf-bs-F/commons-api-metadata.json (43c26440…). O conferencia-midia.json eu não editei.
5. **A nota LEVE do nao_vai_para_tela[37]** é opcional e não segura nada.
6. **A regência ainda descreve o card no beats[0] da s52.** O redator e o conferente já levaram isso à Direção. Não é fato de tela, e não o julguei.

Nenhum site recusou robô. Não abri a foto nem nenhuma imagem, e não editei o textos-tela.json, as cenas, o _media/, a regência, o espelho, o conceito nem o conferencia-midia.json.

NOTA: 10/10

VEREDITO: PASS
