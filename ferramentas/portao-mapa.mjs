// portao-mapa — os dois portões que o molde não consegue medir em cena de mapa (o til e o contraste do crédito de
// rodapé), com a MESMA régua do molde, mas com o requestAnimationFrame vivo, o mapa carregado e a chave pela pré-carga.
//
// Uso (sempre com a pré-carga da chave; o REGIE_MOTOR, se faltar, vira C:/projetos/regie-v1, o da pré-carga):
//   node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs ferramentas/portao-mapa.mjs <til|rodape> <html|pasta…> [--so=s03,s21] [--passo=0.5] [--piso=3] [--json]
//   No PowerShell, o mesmo comando (o --import vale nos dois). Pasta: as .html dela, como o molde (as _*.html também);
//   out/<proj>: as de graphics/.
//   --so      só estas cenas (pelo nome, sem .html), como o --so do qc-rodape-contraste.
//   --passo   o passo das amostras ao longo da cena, em segundos (padrão 0,5): de 0 até a duração, de passo em passo,
//             MAIS os instantes do portão do molde (o rodapé: 35, 55, 75 e 92 % da duração; o til: 0, 25, 50, 75 e
//             100 %), em ordem de tempo.
//   --piso    o piso de contraste do rodapé, o mesmo do molde (padrão 3). O `conferir` só aceita a medida com o piso 3.
//   --json    no rodapé, a saída em JSON, como a do molde (com o passo e os campos novos).
// Saída: a do molde. 0 = passou · 1 = mediu e reprovou · 2 = NÃO MEDIDO (a régua do molde mudou, o Chrome não subiu,
// a cena não abriu, ou a cena de mapa não foi medida com o mapa: ver abaixo).
// Grava uma linha por cena em out/<proj>/_tmp/portao-mapa.jsonl (fora do git; <proj> é a pasta de out/ onde a cena
// mora, também para uma cópia em out/<proj>/_tmp/): `versao` (3 desde o 3º cético de 04/10; 4 desde o crédito com filhos,
// na noite de 04/10, com `valores.folhas` e `valores.com_filhos` no rodapé; 5 desde o cético da parte D, na madrugada de
// 05/10, com `valores.por_linha` no rodapé: o crédito declarado onde estiver, a letra por linha de cada nó de texto e o
// crédito em flex ou grid; desde a rodada 2 dela, o `portao_sha256`, o sha256 deste arquivo; desde a rodada 3, a sombra
// fechada, a moldura, o <use>, a cor parcial e o "só dela"; desde a rodada 4, o nome por elemento, o overflow-clip-margin,
// o container-type fora do bloco de contenção, o outro texto no "só dela", o nó sem caixa e a raiz dentro de outro papel,
// com `nos_sem_caixa` e `linhas_com_tinta_sem_caixa`; desde a rodada 5, o nó sem caixa deixa o crédito declarado inteiro
// NÃO MEDIDO, e o nó sem tinta, achatado por transform, de corpo 0 ou só de ignoráveis, não se conta), as pré-cargas do processo
// (`pre_cargas`, só os nomes, que a pré-carga lê do process.execArgv e do NODE_OPTIONS), cena, sha1 e hash (os 12 do
// carimbo), hash_marca (o do carimbo do qc-cena), o portão, o veredito (0/1/2), os valores (o pior contraste com o
// instante e a regra que o achou, os três "no ar" e, no rodapé, as fotos do recorte: `fotos` e `fotos_sem_medida`; os
// achados do til e as medidas de cada letra), os mesmos valores só nos instantes do molde (`molde`, para comparar), o
// passo e os instantes, os pedidos e respostas à MapTiler da página (só números: a URL leva a chave e nunca se grava),
// `mapa`, `mapa_no_fonte`, `eh_mapa`, `chave`, `carregou` e o que a pré-carga decidiu da página (`pre_carga_veredito`,
// com as fotos que ela contou e de onde vieram os tiles 2xx: com o endereço de um servidor, ou sem, respondidos por um
// page.route). O `conferir` da pré-carga lê esta linha (ferramentas/chaves-nos-portoes.mjs, partes C e
// B) e só a aceita como prova com a versão 5 no rodapé, medida por este código (o `portao_sha256` igual ao sha256 do
// ferramentas/portao-mapa.mjs de hoje), com a lista dos créditos declarados e todo declarado visto com linha medida (a 3
// em diante no til, que não mudou desde a 3), as pré-cargas
// do canal e nenhuma outra, o mapa, o load, a pré-carga, a
// chave, tile 2xx vindo de servidor (e nenhum sem), nenhum erro, as fotos da pré-carga iguais às daqui, os instantes completos, o piso 3, o passo ≤ 0,5,
// a marca de hoje e a régua do molde de hoje (o topo dela diz cada uma). Com um gancho de prova (uma pré-carga que
// responde ou segura a MapTiler aqui, ou dá a chave a uma cópia), este portão mede e grava a linha, avisa no começo, e o
// `conferir` a recusa.
//
// Por quê (04/10/2026): o scripts/_audit-til.mjs:263 e o scripts/qc-rodape-contraste.mjs:135 trocam o
// requestAnimationFrame por `() => 0` antes de a página abrir (addInitScript), para a cena ficar parada. Sem ele, o
// MapLibre nunca pinta nem pede tile: o "✓ 12.12:1" do rodapé da s03 foi medido sobre o fundo sem o mapa, e o crédito
// sobre neve ou gelo sairia verde. A pré-carga da chave faz esses dois saírem NÃO MEDIDO em cena de mapa
// (out/juneau/_tmp/art/chaves-nos-portoes-relato.md, item 2), e esta é a medida de verdade. O molde não se edita.
//
// A régua é a do molde, copiada e presa pelo sha256 dele (REGUA_MOLDE abaixo): se o arquivo do molde mudar, este
// portão sai 2 sem medir, até alguém reler o molde e atualizar a cópia.
//   rodape (qc-rodape-contraste.mjs, sha256 d3152d3d…): o mesmo achador de crédito (por papel declarado e por
//     vocabulário, no rodapé, nos 45 % de baixo), a mesma caixa que une os créditos visíveis, o mesmo recorte de tela,
//     a mesma medida (fundo = a moda das luminâncias em 40 baldes; texto = o percentil 99 ou 1 do lado oposto), o mesmo
//     "no ar" (opacidade ≥ 80 % da maior e ≥ 0,15), o pior instante, o mesmo piso (3:1), o mesmo "sem crédito" e o
//     mesmo NÃO MEDIDO (sem crédito com erro de JS, página que não abriu), as mesmas linhas e o mesmo conserto.
//     O "no ar" do molde é RELATIVO (80 % da maior opacidade entre as amostras): com mais amostras, uma opacidade
//     maior num instante que o molde não olha tiraria da conta os instantes do molde (o cético de 04/10: o crédito em
//     1 sobre o escuro até 2 s e em 0,7 sobre o claro depois; o molde reprova com 1.02:1, e a 1ª versão daqui
//     aprovava com 18.10:1). Por isso o pior que decide é o pior de TRÊS conjuntos "no ar": (a) o do molde, igual, só
//     nos instantes do molde, que garante que este portão nunca aprova o que o molde reprova; (b) o do molde em todas
//     as amostras (≥ 80 % da maior opacidade da cena), a régua do molde amostrada de passo em passo; e (c) o do
//     PATAMAR: a amostra em que a opacidade fica parada na janela dela (± max(1 s, passo): a menor ≥ 80 % da maior),
//     mesmo com um instante mais opaco noutro ponto da cena. Mais amostras só deixam a medida mais rígida que a do
//     molde. Até o 3º cético (04/10), o (c) era "≥ 80 % da maior da janela", sem exigir a opacidade parada, e contava
//     o meio de um fade lento: num fade de 8 s, o crédito em opacidade 0,50 entrava como "no ar".
//   til (_audit-til.mjs, sha256 0bc31ea8…): a mesma coleta de texto (texto direto do elemento, sem script nem style,
//     com o text-transform), a mesma medida do motor (provar-fonte.mjs: analisarAcento, vaoCedilha e os LIMIAR_*,
//     no mesmo canvas 480 × 480, corpo 200), as mesmas classes (TIL, CEDILHA, GLIFO-RESERVA, FAMILIA-AUSENTE,
//     FORA-DA-MARCA), as mesmas linhas "<arquivo>\t<TIPO>\t<peso>\t<id>\t<texto — detalhe>" e o mesmo rodapé.
//   (aqui, não no molde; versão 4, 04/10/2026) o rodapé acha TAMBÉM o crédito que tem filhos inline. O achador do
//     molde só olha folhas (`if (el.children.length && !soTspan) continue`): um crédito com o ano num <span> filho
//     ("Source: Alaska Division of Elections, <span>1974–1982</span>") não era medido: no Juneau, as s11, s29, s58, s60,
//     s61, s62 e s63 saíam "sem crédito de rodapé", e as s35, s49 e s55 eram medidas só no outro crédito, que era folha.
//     O molde tem a mesma cegueira. O segundo achador (ACHAR_CREDITO_COM_FILHOS) pega o bloco de texto com
//     filhos, todos inline (inline, inline-block, <br>…), com o mesmo vocabulário e o mesmo papel declarado do molde no
//     texto dele e dos filhos (6 a 220 letras), visível, ≥ 40 × 12, e DENTRO DA FAIXA DO CRÉDITO da marca
//     (marca/identidade.md §4.2: y ≥ 1880, x de 200 a 1720, no quadro de 3840 × 2160, com 1 px de folga); de blocos
//     um dentro do outro, só o de fora. De cada bloco, mede com a MESMA régua a letra dele (a caixa dos nós de texto
//     próprios) e a de cada filho com texto (a caixa do filho): uma foto por parte, com o recorte e o arredondamento do
//     molde, e a medida do molde (medir: a moda em 40 baldes e o percentil 99 ou 1), cada parte com a opacidade dela (o
//     produto até a raiz, como no molde), e só a que está acima de 0,05 (o "visível" do molde). Cada parte é uma série no
//     tempo, com os três "no ar" de sempre; o pior que decide é o menor entre o do molde (as folhas) e o de cada parte.
//     O que o molde já media NÃO muda: o achador dele, a caixa, a foto e as amostras dele são os de antes, na mesma ordem
//     (a foto das folhas vem primeiro, igual; as das partes vêm depois); a linha guarda a medida só das folhas em
//     `valores.folhas`, e a de cada parte em `valores.com_filhos` (que lista em `blocos` todo bloco achado em algum
//     instante, mesmo sem parte visível, como um #creds de pílula com os créditos escondidos). `fotos`, `com_credito` e `fotos_sem_medida` contam
//     todas as fotos (as das folhas e as das partes) e fecham como antes (fotos = com_credito + fotos_sem_medida); a
//     pré-carga conta as mesmas.
//   (aqui, não no molde; versão 5, 05/10/2026) o rodapé mede TAMBÉM cada linha de cada nó de texto de todo crédito
//     (ACHAR_CREDITO_POR_LINHA). O cético da parte D mostrou três cegueiras da versão 4: o crédito declarado fora da
//     faixa (a pílula #creditoFonte da s08, de duas linhas, com o topo em y 1798) não era medido por ninguém; a letra
//     apagada passava pela caixa unida (o texto próprio a 1,66:1 dava 21:1 porque o filho claro, na mesma linha, caía
//     na caixa; o neto apagado ao lado do neto claro também); e o crédito em contêiner flex ou grid não era medido. E o
//     cético da rodada 1 da versão 5 mostrou o crédito declarado que aparecia e saía "sem crédito" (o texto numa raiz
//     de sombra, num <input>, num <canvas>, gerado por CSS num crédito sem caixa, sob um pai com display:contents ou
//     num popover com opacidade baixa no pai, ou dentro de um filho com outro papel), a linha que aparecia e nunca se
//     media, e o crédito que nunca chegava ao "no ar". E o da rodada 2 mostrou o crédito declarado que ainda saía verde
//     ou "sem crédito": numa raiz de sombra FECHADA (o host com display:contents, o host 0 × 0, a sombra declarativa
//     <template shadowrootmode="closed">, o slot num popover), numa moldura (iframe), pintado por um <use> de fora dele;
//     a linha que sumia quando as caixas de duas linhas se cobrem (o ::first-line maior); a letra pintada em parte de
//     outra cor (::highlight, ::selection); e a caixa da linha que passava por baixo de uma foto clara fora do recorte de
//     overflow. E o da rodada 3 mostrou o crédito declarado que o recorte apagava e saía "sem crédito" (o container-type
//     contado como bloco de contenção; o overflow-clip-margin ignorado), os dois créditos de mesmo caminho que viravam uma
//     série só (o id repetido), o rótulo claro por cima da letra apagada, o nó de largura 0 que sumia em silêncio e a
//     raiz por vocabulário dentro de um rótulo ou de uma folha (um falso positivo novo). E o cético da rodada 4 (o v5.1)
//     mostrou a tinta do nó sem caixa que o letter-spacing muito negativo levava para fora da zona estimada (o W a -10em
//     sobre a linha #333, que saía verde) e o nó sem tinta que a regra contava (a revelação letra a letra com scale(0) ou
//     scaleX(0), o hífen mole), que segurava a cena sem defeito. O achador da versão 5 anda pelos
//     nós de texto, não pelos filhos:
//     . as raízes de crédito são: todo elemento com papel de crédito declarado (data-qc-papel, a mesma regra do
//       molde), de qualquer tag e display, onde estiver (também numa raiz de sombra aberta ou fechada); a folha que o
//       achador do molde chamaria de crédito (o mesmo vocabulário, ≥ 40 × 12, nos 45 % de baixo); e o bloco com
//       filhos, de qualquer display, com o vocabulário, na faixa do crédito. O elemento que declara OUTRO papel (rotulo,
//       legenda…) não vira raiz pelo vocabulário, e, desde a rodada 4, nem o elemento que mora dentro de um de outro
//       papel sem papel de crédito no meio (a linha flex de um rótulo, o rodapé em grid de uma folha de documento: fp1 e
//       fp2 do cético da rodada 3). Só aqui: o achador da versão 4 continua como era. De raízes uma dentro da outra, só a
//       de fora;
//     . as raízes de sombra FECHADAS (rodada 3): o JavaScript da página não as alcança, e a declarativa nem passa pelo
//       attachShadow. A cada instante, depois das fotos das versões 3 e 4, o portão as lista pelo CDP (DOM.getDocument
//       com pierce) e entrega cada uma do documento à página, por referência, num Set sob o Symbol
//       "alpha-point.portao-mapa.sombras-fechadas"; o achador entra nelas como nas abertas, e acha o slot de uma raiz
//       fechada pelos assignedNodes dele (o assignedSlot é null ali). A sessão CDP que não abre, ou a lista que não vem, é
//       NÃO MEDIDO;
//     . de cada raiz, todos os nós de texto dos descendentes, pela árvore que se pinta (o neto, e o que está numa raiz
//       de sombra ou distribuído num <slot>). Dentro de um crédito declarado, todo nó conta, mesmo dentro de um filho
//       com outro papel (o papel de crédito de fora vence); fora dele, o nó dentro de um elemento com outro papel não
//       conta. De cada nó, cada linha (Range.getClientRects): uma foto por linha, com o recorte e o arredondamento do
//       molde e a medida do molde (medir). Cada letra vai à linha que contém o centro dela; com o centro em mais de uma
//       (rodada 3: a caixa da 1ª linha de 110 px cobre a letra da 2ª), à que mais a cobre. A caixa sem letra (só de
//       espaço, a quebra de linha) não é linha e não entra (a conta fica em `caixas_sem_letra`); a que tem letra sempre
//       entra. A caixa da linha se corta pelo recorte de overflow (rodada 3): o padding box de cada ancestral que corta
//       (overflow diferente de visible, ou contain: paint), menos o que o texto escapa por estar num elemento
//       posicionado (absolute até o bloco de contenção dele; fixed até um ancestral com transform, filter…; o
//       container-type NÃO é bloco de contenção, rodada 4) e menos o que está acima da camada de cima; o <body> cujo
//       overflow vai para a viewport não corta, e no SVG só o <svg> de fora corta. Desde a rodada 4, com os DOIS eixos
//       cortando com clip (o overflow clip, ou o visible com contain: paint), a borda é a caixa do overflow-clip-margin
//       (padding-box, content-box ou border-box) mais a margem dele: o que o Chrome desta máquina pinta (sonda de
//       05/10, r4/sonda/clip-margin.txt; com hidden, auto ou scroll, ou com clip num eixo só, a margem não vale). A opacidade de cada linha é a que o navegador aplica: o produto pela árvore que se pinta, sem o
//       elemento com display:contents (sem caixa, a opacidade dele não vale) e só até o elemento da camada de cima
//       (popover aberto, diálogo modal, tela cheia), que não herda a opacidade de quem está fora dele. A linha é visível
//       com a visibilidade do pai, a opacidade ≥ 0,05, fora de um recipiente do SVG que só se pinta por referência
//       (defs, symbol, pattern, marker, mask, clipPath…) e a caixa cortada dentro do quadro. Cada linha é uma série no
//       tempo, com os três "no ar" de sempre, com o nome do dono do nó (o crédito declarado mais perto, ou a raiz sem
//       ele), o número do nó dentro do dono e o da linha: "#credFonte · nó 1 · linha 0". A linha conta para o dono e
//       para todo crédito declarado em volta dele. O nome é do ELEMENTO (rodada 4): o caminho dele, que para no 1º id,
//       e, para o 2º elemento distinto com o mesmo caminho (o id repetido, o id interno de um componente em sombra igual
//       a um do documento), "(elemento 2)", e assim por diante, com o número fixo por elemento entre os instantes (o
//       elemento que a cena troca por outro igual passa o nome ao novo). O crédito declarado também se chaveia assim;
//     . "só dela" (rodada 3): quando a caixa de outra linha visível cobre a caixa de uma linha no alcance (a entrelinha
//       menor que a fonte, o ::first-line maior, um filho absoluto por cima), a mesma foto se mede também só nos pixels
//       das letras dela (as caixas de cada letra, cortadas) que nenhuma outra caixa de linha cobre: uma série a mais,
//       "… · linha 0 · só dela", com a mesma régua (medir sobre esses pixels; menos de 200, nada). Nenhuma foto a mais.
//       Desde a rodada 4, a caixa de TODO texto visível que cruza a linha também conta (o rótulo branco por cima da letra
//       apagada, x03 do cético da rodada 3; a legenda na mesma pílula), não só a das linhas de crédito;
//     . "o alcance" é a linha com o topo nos 45 % de baixo (y ≥ 55 % da altura, a régua do molde). O crédito DECLARADO
//       que nenhum achador mede deixa a cena NÃO MEDIDO, com o nome dele: nunca some. Os casos: (1) aparece fora do
//       alcance; (2) aparece (a caixa dele ou a de um descendente, visível, com a opacidade ≥ 0,05, cortada pelo
//       overflow e no quadro, ou uma linha dele) e nenhuma linha dele se mede na cena (o texto num <input>, num
//       <canvas>, ou a pílula vazia); (3) tem conteúdo visível que não é nó de texto (canvas, img, input, textarea,
//       select, iframe, frame, object, embed, video, o image do SVG, e o <use> que pinta texto ou vem de um arquivo de
//       fora; o <use> de um ícone só de desenho, não, como um <svg> com <rect>); (4) tem texto gerado por CSS visível
//       (::before, ::after ou ::marker com conteúdo que não é none, normal nem só espaço, ou content no elemento),
//       julgado pela visibilidade e pela opacidade de quem o leva, sem exigir a caixa do crédito; (5) uma linha dele
//       aparece no alcance e nunca se mede (o recorte com menos de 200 pixels); (6) uma linha dele se mede e nunca fica
//       "no ar" (a opacidade sempre abaixo de 0,15); e, desde a rodada 3: (7) um <use> visível o pinta de fora dele (o
//       alvo do <use> é, contém ou está dentro dele, também por outro <use>); (8) ele mora num recurso do SVG que se
//       pinta por referência (pattern, marker, mask, clipPath); (9) a letra dele é pintada em parte de outra cor: um
//       ::highlight registrado ou uma seleção não colapsada que toca um nó dele, ou o background-clip: text num ancestral
//       (o ::first-letter não entra: ele vira caixa própria no getClientRects e se mede sozinho). E a cena também sai
//       NÃO MEDIDO com (10) uma moldura visível (iframe, frame, object ou embed com documento) que tem crédito
//       declarado dentro, ou que não se lê, ou com raiz de sombra fechada dentro de moldura. E, desde a rodada 4: (11) a
//       linha medida sobre a qual cai a tinta de um nó de texto de crédito declarado sem caixa de área positiva (o nó com
//       letter-spacing negativo que zera a largura, x04c do cético da rodada 3). O nó se conta (`nos_sem_caixa`), e a zona
//       em que a tinta dele pode cair (rodada 5: a caixa de área 0 alargada, para os dois lados, pelo que a pena pode andar,
//       cada letra um corpo mais o |letter-spacing|, e o |word-spacing| no espaço, mais um corpo; meia altura do corpo em
//       cima e embaixo, ou o alargamento todo na escrita vertical; cortada pelo overflow) diz que linhas ela toca: cada uma
//       sai NÃO MEDIDO (`linhas_com_tinta_sem_caixa`). E, desde a rodada 5: (12) o crédito declarado que tem um nó desses,
//       em algum instante, sai NÃO MEDIDO inteiro, seja onde for que a tinta caia: o letter-spacing negativo leva a tinta
//       tão longe quanto quiser (p4b1b e p4b1c do cético v5.1), e a zona é só uma estimativa. Não se conta o nó sem tinta:
//       só de espaço e de caracteres ignoráveis por padrão (Default_Ignorable_Code_Point: o hífen mole fora da quebra, os
//       seletores de variação…), de corpo 0, ou achatado por transform (toda caixa dele 0 × 0, ou o elemento de caixa
//       mais perto com tamanho de layout nos dois eixos e a caixa na tela de largura ou altura 0: a revelação letra a
//       letra com scale(0), scaleX(0), rotateY(90deg), p4b7 e p4b8 do cético v5.1).
//       Com uma reprovação medida na mesma cena, vale a reprovação (saída 1), e a linha do jsonl cita o crédito sem medida;
//     . o pior que decide é o menor entre o das folhas, o de cada parte da versão 4, o de cada linha e o de cada "só
//       dela"; no empate, vale o de antes. O que as versões 3 e 4 mediam NÃO muda: os achadores delas são os de antes,
//       ao pé da letra, as fotos delas vêm primeiro, iguais, e as das linhas vêm depois (a rodada 3 lê as sombras
//       fechadas e as molduras depois das fotos delas); `valores.folhas` e `valores.com_filhos` guardam as mesmas
//       medidas, e `valores.por_linha` guarda as raízes, os créditos declarados (vistos, medidos, fora do alcance, sem
//       medida, com texto gerado, com conteúdo que não é texto, pintados por <use>, em recurso do SVG, com cor parcial,
//       as linhas nunca medidas e as nunca no ar), o pior de cada linha e de cada "só dela" (`so_dela: true`), as
//       raízes de sombra fechadas (`sombras_fechadas`, `sombras_fechadas_em_moldura`), as molduras com crédito
//       (`molduras`), as `caixas_sem_letra` e, desde a rodada 4, `nos_sem_caixa` e `linhas_com_tinta_sem_caixa` (e, em
//       cada declarado, `instantes_com_no_sem_caixa`, `no_sem_caixa`, com o `espacamento` negativo do nó desde a rodada 5,
//       e `linhas_com_tinta_sem_caixa`). `fotos`, `com_credito`
//       e `fotos_sem_medida` somam as três famílias e
//       fecham como antes; a pré-carga conta as mesmas. A linha do jsonl leva o `portao_sha256` (o sha256 deste
//       arquivo): o `conferir` só aceita a linha do rodapé medida pelo código que está hoje em
//       ferramentas/portao-mapa.mjs.
//   O que muda, e só isto: (1) a cena abre como o render a abre (renderizar.mjs: o SCRIPT_INICIAL, o __ready com
//   teto de 20 s, os ganchos de prontidão, o __prepararCaptura com teto de 90 s), com o rAF do navegador vivo do
//   começo ao fim em cena de mapa (a pré-carga confere que é o nativo) e congelado depois do preparo nas outras, como
//   no render; (2) cada instante é o quadro do render (o __renderAt(t), o window.__aguardarMapa() em cena de mapa,
//   com teto de 45 s, o quadro de vídeo apresentado, as fontes e duas voltas do rAF); (3) as amostras vão de passo em
//   passo pela cena inteira, mais os instantes do molde; (4) o goto espera o load até 60 s: na cena sem mapa, o
//   estouro é NÃO MEDIDO, como no molde; na de mapa, segue sem ele, como o render (o load da cena de mapa não chega
//   quando um tile falha, e as regras de mapa abaixo pegam a falha); (5) no rodapé, a espera de 160 ms do molde vem
//   depois do quadro, e, na cena de mapa, a foto do recorte espera até 3 s que nenhum pedido à MapTiler esteja em curso;
//   (6) no til, a cena de mapa carrega os vídeos (o molde os aborta: a s03 abre com o clipe aéreo, e sem ele a base
//   declara erro e não cria o mapa); (7) o "no ar" do rodapé, acima.
//   Divergências do molde que ficam, de propósito, e são mais rígidas que ele: o __prepararCaptura que rejeita ou não
//   volta em 90 s é NÃO MEDIDO nos dois portões (o til do molde engole a rejeição e segue; o rodapé do molde também
//   sai NÃO MEDIDO); e a cena que tem mapa na página, mas um HTML que a régua não reconhece como de mapa, é NÃO MEDIDO.
//
// Cena de mapa é a que o HTML carrega a base (_vendor/perfil-mapa.js, _vendor/maplibre-gl.js, maplibre ou
// __aguardarMapa) OU a que tem window.__REGIE_MAPA ou maplibregl na página. Ela sai NÃO MEDIDO quando:
//   - antes de medir (e sem pedir mais nada à MapTiler): rodou sem a pré-carga da chave; a cena declarou erro
//     (window.__erroCena); o rAF não é o do navegador; a credencial do perfil não está na página; o HTML carrega a base,
//     mas a página não criou o mapa (nem __REGIE_MAPA nem maplibregl: o _vendor ausente, como num vídeo novo antes do
//     preparar-cena); ou a página tem mapa e o HTML não carrega a base do jeito que a régua reconhece;
//   - durante: o __aguardarMapa não voltou no teto num instante (a cena para ali, sem pedir os outros instantes); ou,
//     no rodapé, ainda havia pedido à MapTiler em curso 3 s depois do quadro, na hora da foto;
//   - depois: a cena declarou erro em qualquer leitura, até a do fim; o window.__errosMapa passou de 0; alguma resposta
//     da MapTiler veio ≥ 400 ou algum pedido falhou na rede (o cancelado, net::ERR_ABORTED, não conta); nenhum tile
//     chegou com resposta 2xx; a página não se releu no fim; ou a pré-carga da chave decidiu NÃO MEDIDO para a página
//     (as regras dela, inclusive a foto tirada com pedido em curso).
// São as regras da pré-carga, aplicadas aqui também, para a linha do jsonl dizer o mesmo que a saída do processo.
//
// Limites:
//   - o rodapé herda o limite da régua do molde: texto claro sobre fundo MUITO claro (luminância da moda ≥ 0,5) é
//     medido contra o pixel mais escuro da caixa (o percentil 1), que pode ser uma sombra do relevo, e não contra a
//     letra. A régua é a do molde de propósito;
//   - o rodapé é mais rígido que o molde, e de propósito, em dois casos (medidos no 3º cético, 04/10):
//     . o patamar de opacidade baixa que dura mais que a janela conta, mesmo com outro instante da cena mais opaco (é o
//       que o espectador vê nesse patamar);
//     . o fade, de qualquer duração, conta a partir do instante em que passa de 80 % da opacidade máxima: é a régua do
//       molde, que, com 4 instantes, só o vê se um deles cair ali. Num fade de 5 s sobre cinza médio, o molde dá
//       ▲ 3.29 (o patamar) e este dá ✗ 2.68 @ 4 s, opacidade 0,80 (regra "todas");
//     . o meio de um fade NÃO conta como patamar até uns 11 s de fade. Mais lento que isso (um fade de 0 ao máximo em
//       F s), a janela de ±1 s fica parada a partir de 9/F do máximo: num fade de 16 s, a partir de uns 0,56. Se
//       reprovar, olhe a regra e o instante da linha;
//   - `em_curso_no_fim` (os pedidos à MapTiler sem resposta quando a página fechou) é só informação: o que estava em
//     curso no fim não entrou em foto nenhuma. A foto com pedido em curso é regra da pré-carga (mapa_incompleto) e do
//     rodapé (os 3 s antes da foto);
//   - o achador da versão 4 (o crédito com filhos) continua como era, ao pé da letra: só DENTRO da faixa do crédito
//     (y ≥ 1880, x 200–1720, 1 px de folga), só com filhos inline, com a caixa unida (a letra própria na caixa que une
//     as linhas dela, e cada filho na caixa dele), com a opacidade do molde (o produto de todo ancestral) e com o bloco
//     de outro papel que tem o vocabulário (o falso positivo do ct4, o rótulo «Commons Bay, Alaska» na faixa, mede
//     como crédito nele e reprova). Ele fica para as medidas dele não mudarem (na rodada 1 da v5, tirar dele o bloco
//     com outro papel mudou a medida da legenda r16 do cético); o que ele não vê, a versão 5 vê por linha;
//   - o crédito SÓ pelo vocabulário (sem papel declarado) e com filhos, fora da faixa do crédito, continua fora dos
//     achadores (como na versão 4); o filho dele que for folha com o vocabulário cai no achador do molde. As regras do
//     NÃO MEDIDO valem só para o crédito declarado. Toda cena do canal declara o papel do crédito;
//   - o achador do molde (as folhas) continua o do molde, ao pé da letra: a folha com outro papel declarado e o
//     vocabulário ainda entra nele, as folhas se medem na caixa que une todas elas, e a opacidade é a do molde (o
//     crédito sob um pai com display:contents e opacidade baixa, ou num popover, fica invisível para ele). A versão 5
//     mede as mesmas folhas por linha (menos a de outro papel declarado, ou, desde a rodada 4, a que mora dentro de um
//     elemento de outro papel, sem crédito em volta), com a opacidade que o navegador aplica;
//   - A RÉGUA POR LINHA É A DO MOLDE (a moda em 40 baldes e o percentil 99 ou 1 no recorte da linha), e o recorte é a
//     caixa da linha (a caixa do conteúdo da fonte, a mesma altura que o Range dá), cortada pelo overflow. Por isso, o
//     claro que cai DENTRO da caixa da linha e não é a caixa de outra linha entra na medida dela, e a letra apagada passa
//     (medido nesta máquina):
//     . o sublinhado claro (text-decoration) ou uma faixa clara no fundo dentro da caixa da linha: a letra #333 sobre o
//       preto, com o sublinhado branco de 8 px, sai 21,00:1 (r06, r06b). É a régua do molde, que a versão 4 também
//       tinha. Nenhuma cena do Juneau sublinha crédito nem põe faixa clara atrás dele;
//     . um elemento claro que não é texto (uma foto, um bloco) por cima da letra, ou por baixo dela dentro da caixa da
//       linha, sem recorte de overflow entre eles (o b4b do cético reprova desde a rodada 3 porque o recorte do overflow
//       tira a foto branca da caixa da linha); o texto claro por cima, sim, sai pela medida "só dela": o de outra linha
//       de crédito desde a rodada 3 (b3b, r17, b8), e o de qualquer texto visível desde a rodada 4 (o rótulo, x03);
//     . medir só o pixel da letra (uma 2ª foto com a letra transparente, e a medida do que mudou) pegaria os dois, mas
//       muda a régua e mexe na página entre as fotos: fica para quem decide;
//   - a medida "só dela" usa as caixas das letras (a célula de cada letra, da altura da fonte) e tira as caixas das
//     outras linhas visíveis e, desde a rodada 4, as de todo outro texto visível que cruza a linha. A linha toda coberta
//     por outras caixas (menos de 200 pixels das letras dela à mostra) só se mede na caixa inteira; o claro que não é
//     caixa de texto (o sublinhado, a foto) continua dentro dela. A célula de uma letra inclui o letter-spacing dela: com
//     um espaçamento largo, a "só dela" mede também o vão vazio entre as letras (o cético da rodada 3, ponto 7: no x05 a
//     reprovação veio de 1,00 medido num vão do «WW» com letter-spacing de 700 px, e só por esse acaso). Fica como
//     limite, sem conserto (decisão de 05/10): a célula sem o espaçamento pede a largura do glifo, que o Range não dá;
//   - (rodadas 4 e 5) o nó de texto com tinta e sem caixa de área positiva dentro de crédito declarado (o letter-spacing
//     ou o word-spacing negativo que zera a largura, a marca combinante num nó próprio) não se mede, e o crédito declarado
//     em volta dele sai NÃO MEDIDO inteiro (rodada 5), seja onde for que a tinta caia. A zona da tinta (a pena, letra a
//     letra, mais um corpo) só cita as linhas que ela pode tocar: ela não conta o transform que aumenta o nó, o glifo com
//     mais de um corpo de avanço nem o text-transform que acrescenta letras, e a decisão não depende dela. Os limites:
//     . fora do crédito declarado, o nó sem caixa não se conta: o W de largura 0 de um <div> sem papel sobre a linha #333
//       (p4b3 do cético v5.1) não pesa. O nó sem caixa nenhuma (display:none em volta) não se pinta e continua fora;
//     . o nó sem tinta só sai da conta com prova pela geometria (toda caixa 0 × 0, ou o elemento de caixa mais perto de
//       lado). Sem prova, conta, e o crédito sai NÃO MEDIDO sem defeito: o nó dentro de SVG (o <text> com scale(0) não
//       prova nada: o SVG encerra a subida), o plano achatado numa linha diagonal (a caixa na tela não fica com largura
//       nem altura 0), o elemento de caixa com largura de layout 0 (o letter-spacing negativo que zera também ele) e
//       achatado só numa direção, e a marca combinante num nó próprio com a mesma fonte da base (o Chrome a pinta com a
//       letra de base, sem tinta própria: r5f; com outro corpo, família ou peso ela tem tinta própria, e a regra não
//       separa os dois casos: r5/sonda/marcas.txt);
//     . uma fonte feita para enganar, com o glifo de tinta e as métricas e o avanço 0 (a caixa 0 × 0), sai da conta pela
//       prova (a) e não se vê. Toda fonte do canal está em marca/fontes/, com o sha256;
//   - (rodada 4) o nome por elemento vale enquanto o elemento vive: o que sai do documento e volta depois de outro tomar
//     o nome dele ganha um número novo, e a série dele se parte em duas. A cena que troca o crédito por outro igual a cada
//     instante (o antigo sai, o novo entra) mantém o nome, como antes. O número do nó dentro do dono continua contado na
//     ordem do documento, a cada instante;
//   - a cor da letra que muda DENTRO de um nó por outros caminhos que o ::highlight, a ::selection e o
//     background-clip: text não se vê: a máscara em degradê (mask-image, que 13 cenas do Juneau usam em algum elemento), o
//     filter, o ::target-text e os sublinhados de ortografia. A linha se mede inteira, e a parte apagada pode passar;
//   - o texto que a cena gera por CSS (::before, ::after, ::marker, content) não é nó de texto: a versão 5 não o mede.
//     No crédito declarado, a cena sai NÃO MEDIDO, com o nome dele (um `content: url(…)` também cai aí), mesmo que o
//     crédito não tenha caixa (display:contents, 0 × 0) ou esteja escondido com um filho visível. A posição do texto
//     gerado não se lê (o pseudo-elemento não tem caixa no DOM): ele vale em qualquer lugar da tela. No crédito só pelo
//     vocabulário, o molde o mede na caixa do elemento, se ele for folha;
//   - o conteúdo visível que não é nó de texto, dentro do crédito declarado, deixa a cena NÃO MEDIDO, mesmo um ícone
//     (um <img> de 60 px, n02). Não se pegam: o texto numa imagem de fundo (background-image) nem o texto desenhado
//     como contorno no SVG (path, também num ícone de <use>);
//   - as raízes de sombra fechadas se acham pelo CDP desde a rodada 3: as do documento se medem; as de dentro de uma
//     moldura só deixam a cena NÃO MEDIDO quando há moldura visível. A moldura (iframe, frame, object, embed com
//     documento) não se mede por dentro: com crédito declarado dentro, ou sem leitura, a cena sai NÃO MEDIDO; o crédito
//     só pelo vocabulário dentro dela não se acha. A moldura conta como visível pela caixa e pela visibility, sem olhar a
//     opacidade (na dúvida, conta);
//   - o <use> de um arquivo de fora que não está dentro de um crédito declarado não se lê: o crédito declarado que
//     morasse nesse arquivo não se acha. O <use> que pinta só desenho (o ícone de sprite) não pesa;
//   - o crédito declarado num recurso do SVG que se pinta por referência (pattern, marker, mask, clipPath) sai NÃO MEDIDO
//     mesmo que nada o use: o portão não segue a referência (fill: url(#…), marker-start…);
//   - o recorte de overflow segue o bloco de contenção (absolute e fixed) pelo estilo computado (position, transform,
//     filter, perspective, contain, will-change, backdrop-filter; o container-type não, desde a rodada 4, porque no
//     Chrome desta máquina ele não contém nem o absolute nem o fixed) e, desde a rodada 4, o overflow-clip-margin (só com
//     os dois eixos cortando com clip, como o Chrome desta máquina faz; a margem arredondada pelo border-radius conta como
//     retângulo); o que o recorte não cobre: o clip-path, a máscara, o `clip` antigo, o content-visibility (a contenção
//     que ele aplica não aparece no contain computado) e o recorte de um <svg> aninhado ou de um foreignObject. A letra
//     coberta por outro elemento por cima se mede como está na foto. Um crédito escondido por clip-path, máscara ou
//     filter: opacity() com a opacidade alta mede só o fundo e reprova;
//   - A AMOSTRAGEM (o cético da rodada 3, ponto 6, herdado do molde): o portão mede nos instantes de passo em passo (0,5 s)
//     e nos do molde (35, 55, 75 e 92 % da duração). Uma cena feita para enganar, que pinta o crédito legível só nesses
//     instantes e apagado no resto (x10 do cético: no render a 30 fps, 14 de 15 quadros apagados), sai verde, aqui e na
//     versão 4. Fica como limite, sem conserto (decisão de 05/10): pegá-la pede medir quadro a quadro, ou instantes
//     sorteados, e o custo de tile da MapTiler cresce junto. Nenhuma cena do canal muda o crédito pelo instante;
//   - O <q> NO CRÉDITO DECLARADO (o cético da rodada 3, ponto 7): as aspas do <q> vêm do ::before e do ::after dele,
//     texto gerado por CSS, e o crédito legível com um título entre aspas por <q> sai NÃO MEDIDO (x15), o que segura a
//     cena sem defeito. Fica como limite, sem conserto (decisão de 05/10): escreva as aspas no texto (“ ”), não com <q>;
//   - o falso positivo herdado das folhas do molde (o cético da rodada 2, ponto 6; a cópia da v4 dá igual): o crédito
//     legível que entra de baixo (só a borda vazia da caixa no quadro, c1) ou que se revela por clip-path (c2), e o
//     crédito todo cortado por um overflow que o molde não vê (f02, f16b), reprovam com ✗ 1,00 pela régua do molde em
//     todas as amostras: a foto sem letra mede o fundo contra o fundo. A régua não separa "a foto sem a letra" de "a
//     letra da cor do fundo" (as duas dão 1,00), e o achador do molde não muda nesta versão: separar pede a 2ª foto (a
//     letra transparente), que fica para quem decide;
//   - o rótulo que o MapLibre desenha dentro do mapa (canvas) não é texto do DOM: nem o molde nem este o medem;
//   - com o rAF vivo, um vídeo que a cena não segura pelo __renderAt pode andar entre o quadro e a foto (o mesmo do
//     render); o til aborta os vídeos, como o molde, só na cena sem mapa;
//   - "nenhum pedido em curso na hora da foto" quer dizer nenhum pedido sem resposta: a resposta conta quando chegam
//     os cabeçalhos, e o corpo do tile ainda pode estar chegando;
//   - a cena de mapa com o mapa medido pede tile à MapTiler em cada instante novo: conta como render no
//     out/<proj>/_pesquisa/maptiler-gasto.md (os números estão na linha do jsonl).

import { createHash } from "node:crypto";
import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, isAbsolute, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// onde este arquivo mora e onde grava a linha (a bancada da versão 5 troca só estas duas linhas)
const RAIZ = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const JSONL_DE = (proj) => join(proj, "_tmp", "portao-mapa.jsonl");
// a pré-v1 que a pré-carga da chave usa (PERFIS_URL); os scripts do canal a acham pelo REGIE_MOTOR
if (!process.env.REGIE_MOTOR) process.env.REGIE_MOTOR = "C:/projetos/regie-v1";
const NAO_MEDIDO = 2;
// a versão da linha do jsonl: o `conferir` só aceita como prova a linha desta versão em diante (a 1, de antes do
// cético de 04/10, decidia o rodapé só pelo "no ar" relativo e media cena de mapa sem mapa como verde; a 2, de antes do
// 3º cético de 04/10, não gravava as pré-cargas do processo nem as fotos, e contava o meio de um fade lento como
// "no ar" pela janela; a 3, de antes da noite de 04/10, não achava o crédito com filhos inline no rodapé: a cena com o
// ano num <span> saía "sem crédito de rodapé"; a 4, de antes da madrugada de 05/10, não media o crédito declarado fora
// da faixa nem o de flex ou grid, e media a letra na caixa unida, onde o filho claro escondia a letra apagada)
const VERSAO = 5;
const PRE_CARGA = Symbol.for("alpha-point.chaves-nos-portoes");
// o que a pré-carga expõe a este portão: o filtro da chave (que conhece os VALORES, não só o padrão key=) e o veredito
// de cada página que ela vigiou
const PRE_CARGA_SEM_CHAVE = Symbol.for("alpha-point.chaves-nos-portoes.semChave");
const PRE_CARGA_PAGINAS = Symbol.for("alpha-point.chaves-nos-portoes.paginas");
// as pré-cargas do processo, só os nomes (a pré-carga as lê do process.execArgv e do NODE_OPTIONS): o `conferir` só
// aceita a linha cujas pré-cargas são as do canal (um gancho de prova responde ou segura a MapTiler aqui)
const PRE_CARGA_LISTA = Symbol.for("alpha-point.chaves-nos-portoes.preCargas");
const PRE_CARGAS = Array.isArray(globalThis[PRE_CARGA_LISTA]) ? [...globalThis[PRE_CARGA_LISTA]] : null;
const PRE_CARGAS_DO_CANAL = ["ferramentas/chaves-nos-portoes.mjs", "ferramentas/cdp-sem-compressao.mjs"];
const REGUA_MOLDE = {
  til: { arquivo: "scripts/_audit-til.mjs", sha256: "0bc31ea899183bfbce5ba592e9538639caae6d6106ddc46cadb888351d154042" },
  rodape: { arquivo: "scripts/qc-rodape-contraste.mjs", sha256: "d3152d3dc42a1980906af4981bf618591fd3da9eb61d73d2466d38413446f8ff" },
};
const TETO_LOAD_MS = 60_000;
const TETO_MAPA_MS = 45_000;
const TETO_EM_CURSO_MS = 3_000;   // no rodapé da cena de mapa: a foto espera até isto que nenhum pedido esteja em curso
const MAPTILER = /^https?:\/\/(?:[^/?#@]+\.)?maptiler\.com(?::\d+)?(?:[/?#]|$)/i;
const TILE_NO_CAMINHO = /\/\d+\/\d+\/\d+(?:@\d+x)?\.[a-z0-9]+$/i;
const CANCELADO = /^net::ERR_ABORTED\b/i;
// a cena que carrega a base de mapa da pré-v1 (a régua do `conferir`) ou que a régua do molde chama de mapa
// (lib/abrir-cena.mjs › cenaEhDeMapa): nela, o rAF fica o do navegador
const BASE_DE_MAPA_NO_FONTE = /_vendor\/(?:perfil-mapa|maplibre-gl)\.js/;

const ehTile = (u) => { try { return TILE_NO_CAMINHO.test(new URL(u).pathname); } catch { return false; } };
// o filtro da pré-carga troca os VALORES das chaves que ela leu, e o padrão key=; sem a pré-carga, só o padrão (sem
// ela, este processo nunca leu chave nenhuma)
const semChave = (s) => {
  let t = String(s);
  const f = globalThis[PRE_CARGA_SEM_CHAVE];
  if (typeof f === "function") { try { t = String(f(t)); } catch { } }
  return t.replace(/([?&]key=)[^&\s"'#]+/gi, "$1<chave>");
};
// toda saída do processo passa pelo filtro, a do --json também (o cético de 04/10: o --json não passava)
for (const k of ["log", "error", "warn", "info"]) {
  const orig = console[k].bind(console);
  console[k] = (...a) => orig(...a.map((x) => (typeof x === "string" ? semChave(x) : x)));
}
const aviso = (m) => process.stderr.write(semChave(`portao-mapa: ${m}\n`));
const horaBrasilia = (d) => { try { return d.toLocaleString("sv-SE", { timeZone: "America/Sao_Paulo" }); } catch { return d.toISOString(); } };
const somar = (o) => Object.values(o || {}).reduce((s, n) => s + n, 0);
const resumir = (o) => Object.entries(o || {}).map(([k, n]) => `${k} × ${n}`).join(", ");
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");
// (versão 5) o sha256 deste arquivo, na linha do jsonl: o `conferir` só aceita a linha do rodapé medida pelo código que
// está hoje em ferramentas/portao-mapa.mjs (o cético da rodada 1: a linha de um código intermediário também dizia
// versão 5)
const PORTAO_SHA256 = sha256(readFileSync(fileURLToPath(import.meta.url)));
const urlDe = (rel) => pathToFileURL(join(RAIZ, rel)).href;

// ── os argumentos ────────────────────────────────────────────────────────────────────────────────────────────
const argv = process.argv.slice(2);
const PORTAO = argv[0];
const opt = (n, d) => { const a = argv.find((x) => x.startsWith(`--${n}=`)); return a ? a.slice(n.length + 3) : d; };
const USO = "uso: node --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs ferramentas/portao-mapa.mjs <til|rodape> <html|pasta…> [--so=s03,s21] [--passo=0.5] [--piso=3] [--json]";
if (!REGUA_MOLDE[PORTAO]) { console.error(USO); process.exit(2); }
const PASSO = +opt("passo", "0.5");
const PISO = +opt("piso", "3");
const JSONOUT = argv.includes("--json");
// o "no ar" por janela: a maior opacidade que conta para uma amostra é a das amostras a até JANELA_S dela
const JANELA_S = Math.max(1, PASSO);
const SO = new Set(String(opt("so", "")).split(",").map((x) => x.trim().replace(/\.html?$/i, "")).filter(Boolean));
if (!(PASSO > 0) || !(PISO > 0)) { console.error(`✗ --passo e --piso têm de ser números > 0\n${USO}`); process.exit(2); }
// numa pasta, as .html dela, como o molde (as _*.html também); o --so filtra pelo nome, como no molde
const arquivos = argv.slice(1).filter((a) => !a.startsWith("--")).flatMap((a) => {
  try {
    if (!statSync(a).isDirectory()) return [a];
    const pasta = existsSync(join(a, "graphics")) ? join(a, "graphics") : a;
    return readdirSync(pasta).filter((f) => f.endsWith(".html")).sort().map((f) => join(pasta, f));
  } catch { return [a]; }   // inexistente: falha adiante, com o nome
}).filter((f) => !SO.size || SO.has(basename(f).replace(/\.html?$/i, "")));
if (!arquivos.length) { console.error(`✗ nenhum arquivo para medir${SO.size ? ` (o --so=${[...SO].join(",")} não casou com nenhum)` : ""}.\n${USO}`); process.exit(2); }

// ── a régua do molde, presa pelo sha256 ──────────────────────────────────────────────────────────────────────
{
  const r = REGUA_MOLDE[PORTAO];
  let atual = null;
  try { atual = sha256(readFileSync(join(RAIZ, r.arquivo))); } catch (e) { atual = `ilegível (${e.code || e.message})`; }
  if (atual !== r.sha256) {
    console.error(`⚠ portao-mapa ${PORTAO}: NÃO MEDIDO — a régua do molde mudou: ${r.arquivo} tem sha256 ${String(atual).slice(0, 16)}…, e este portão copiou a de ${r.sha256.slice(0, 16)}…`);
    console.error("  Releia o portão do molde, atualize a cópia daqui e o sha256 de REGUA_MOLDE, e prove de novo nas cenas sem mapa (s02, s26) antes de medir.");
    process.exit(NAO_MEDIDO);
  }
}

// ── as peças do canal (depois do REGIE_MOTOR: a marca e o palco importam o motor ao carregar) ─────────────────
const { morrerComoNaoMedido, importarDependencia } = await import(urlDe("scripts/lib/nao-medido.mjs"));
morrerComoNaoMedido(`portao-mapa ${PORTAO}`);
const { lancarChrome } = await import(urlDe("scripts/lib/chrome.mjs"));
const { palcoDaCena, cenaEhDeMapa } = await import(urlDe("scripts/lib/abrir-cena.mjs"));
const { lerJsonSemBom } = await import(urlDe("scripts/lib/qc-cena-gates.mjs"));
const { lerMarca, citarFamilia, hashDependenciasMarca } = await import(urlDe("scripts/lib/marca-tokens.mjs"));
const { importarDoMotor } = await import(urlDe("scripts/lib/motor.mjs"));
const COM_PRE_CARGA = !!globalThis[PRE_CARGA];
const MARCA = lerMarca();
const HASH_MARCA = hashDependenciasMarca(MARCA);

// ── a abertura do render (C:/projetos/regie-v1/src/ferramentas/renderizar.mjs:290-314), em cena de mapa sem trocar o rAF ──
// Em cena sem mapa, o SCRIPT_INICIAL do render, igual: o rAF passa pela trava __rafLive, e o performance.now anda com
// ele. Em cena de mapa, o render deixa o rAF vivo do começo ao fim; aqui ele fica o do navegador, sem a trava (a
// pré-carga da chave confere que é o nativo, e um rAF embrulhado faria a cena sair NÃO MEDIDO).
function INICIAL({ mapa }) {
  window.__PREVIEW = false; window.__tRender = 0;
  try { HTMLMediaElement.prototype.play = function () { return Promise.resolve(); }; } catch (e) { }
  if (mapa) return;
  const r = window.requestAnimationFrame.bind(window);
  window.__rafLive = true; window.__rafRaw = r;
  window.requestAnimationFrame = (cb) => (window.__rafLive ? r(cb) : 0);
  try {
    const pn = performance.now.bind(performance);
    Object.defineProperty(performance, "now", { configurable: true, value: () => (window.__rafLive ? pn() : window.__tRender * 1000) });
  } catch (e) { }
}
// renderizar.mjs › NORMALIZAR_GANCHOS e PREPARAR, iguais
const NORMALIZAR_GANCHOS = `(async()=>{const to=ms=>new Promise(r=>setTimeout(r,ms));
for(const k of ["__fotosProntas","__videoPronto","__logoPronta"]){const v=window[k];
if(v&&typeof v.then==="function"){try{await Promise.race([v,to(12000)])}catch(e){}window[k]=Promise.resolve(true)}}
const fim=Date.now()+15000;while(Date.now()<fim){if(window.__logoPronta!==false&&window.__fotosProntas!==false&&window.__videoPronto!==false)return true;await to(100)}
return false})()`;
const PREPARAR = `(async()=>{if(typeof window.__prepararCaptura!=="function")return 1;
return await Promise.race([Promise.resolve(window.__prepararCaptura()).then(()=>1),new Promise(r=>setTimeout(()=>r(0),90000))])})()`;
// o estado da página, só sim/não e números (o valor da chave nunca sai)
function ESTADO() {
  const P = window.__REGIE_MAPA;
  const cred = P && typeof P.credencial === "string" ? P.credencial : "";
  let chave = false;
  try { chave = !!(cred && window.__chaves && typeof window.__chaves[cred] === "string" && window.__chaves[cred].length > 0); } catch (e) { }
  let rafNativo = false;
  try { rafNativo = /\{\s*\[native code\]\s*\}\s*$/.test(Function.prototype.toString.call(window.requestAnimationFrame)); } catch (e) { }
  return {
    mapa: !!P || typeof window.maplibregl !== "undefined", credencial: cred, chave, rafNativo,
    ready: typeof window.__ready !== "undefined",
    erro: window.__erroCena ? String(window.__erroCena).slice(0, 200) : null,
    errosMapa: Number(window.__errosMapa) || 0,
    duracao: +window.__duracao || 0, renderAt: typeof window.__renderAt === "function",
  };
}
// o quadro do render (renderizar.mjs › quadroJS): posiciona, espera o mapa (com teto), o quadro de vídeo apresentado,
// as fontes e duas voltas do rAF
async function QUADRO({ t, mapa, teto }) {
  window.__tRender = t;
  if (typeof window.__renderAt === "function") { try { await window.__renderAt(t); } catch (e) { } }
  let assentou = null, ms = 0;
  if (mapa) {
    const t0 = Date.now();
    assentou = await Promise.race([
      window.__aguardarMapa ? Promise.resolve(window.__aguardarMapa()).then(() => true, () => false) : new Promise((r) => setTimeout(() => r(true), 240)),
      new Promise((r) => setTimeout(() => r(false), teto)),
    ]);
    ms = Date.now() - t0;
  }
  await new Promise((res) => {
    const vids = [...document.querySelectorAll("video")].filter((v) => v.readyState > 0);
    if (!vids.length) return res();
    let n = vids.length; const done = () => { if (--n <= 0) res(); };
    for (const v of vids) { if (v.requestVideoFrameCallback) v.requestVideoFrameCallback(() => done()); else if (v.seeking) v.addEventListener("seeked", done, { once: true }); else done(); }
    setTimeout(res, 400);
  });
  if (document.fonts) await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 5000))]);
  const raf = window.__rafRaw || window.requestAnimationFrame.bind(window);
  await new Promise((r) => raf(() => raf(() => r())));
  return { assentou, ms, erro: window.__erroCena ? String(window.__erroCena).slice(0, 200) : null };
}

// ── a conta da MapTiler, por contexto (as regras da pré-carga: só a 2xx é servida; o cancelado não é falha) ────
function contarMapTiler(ctx) {
  const c = { pedidos: 0, respostas: 0, respostas_2xx: 0, tiles_2xx: 0, respostas_erro: {}, falhas: {}, cancelados: 0, inicio: null, fim: null, pendentes: new Set() };
  const marcar = () => { const agora = new Date(); c.inicio ??= agora; c.fim = agora; };
  ctx.on("request", (req) => { try { if (MAPTILER.test(req.url())) { c.pedidos++; c.pendentes.add(req); marcar(); } } catch { } });
  ctx.on("response", (res) => {
    try {
      const u = res.url(); if (!MAPTILER.test(u)) return;
      c.pendentes.delete(res.request());
      c.respostas++; marcar();
      const st = res.status();
      if (st >= 200 && st < 300) { c.respostas_2xx++; if (ehTile(u)) c.tiles_2xx++; }
      else if (st >= 400) c.respostas_erro[st] = (c.respostas_erro[st] || 0) + 1;
    } catch { }
  });
  ctx.on("requestfailed", (req) => {
    try {
      if (!MAPTILER.test(req.url())) return;
      c.pendentes.delete(req);
      const t = String(req.failure()?.errorText || "sem descrição").slice(0, 60);
      if (CANCELADO.test(t)) c.cancelados++; else c.falhas[t] = (c.falhas[t] || 0) + 1;
      marcar();
    } catch { }
  });
  return c;
}

// ── a régua do qc-rodape-contraste (scripts/qc-rodape-contraste.mjs:84-175, copiada sem mudança) ──────────────
const lum = (r, g, b) => {
  const f = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
};
const razao = (a, b) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
/** O miolo da letra, não a borda: percentil extremo do lado oposto à moda do fundo. (molde:84-104) */
function medir(px, w, h) {
  const N = w * h;
  if (N < 200) return null;
  const ls = new Float64Array(N);
  const hist = new Map();
  for (let i = 0; i < N; i++) {
    const L = lum(px[i * 4], px[i * 4 + 1], px[i * 4 + 2]);
    ls[i] = L;
    const k = Math.round(L * 40);                       // 40 baldes: agrupa gradiente, separa texto
    hist.set(k, (hist.get(k) || 0) + 1);
  }
  let modaK = 0, modaN = -1;
  for (const [k, n] of hist) if (n > modaN) { modaN = n; modaK = k; }
  const Lfundo = modaK / 40;
  const ord = Array.from(ls).sort((a, b) => a - b);
  // texto claro sobre fundo escuro → p99; texto escuro sobre fundo claro → p1
  const claro = Lfundo < 0.5;
  const Ltexto = claro ? ord[Math.floor(N * 0.99)] : ord[Math.floor(N * 0.01)];
  const cobertura = modaN / N;
  return { Lfundo, Ltexto, razao: razao(Lfundo, Ltexto), coberturaFundo: cobertura };
}
/** O crédito pelo que ele É: texto de atribuição, pequeno, no rodapé. Roda na página. (molde:154-206) */
function ACHAR_CREDITO() {
  const RE = /^\s*(fontes?|cr[ée]ditos?|source|imagens?|fotos?|v[ií]deos?|dados|terra)\s*[:·]/i;
  const cands = [];
  for (const el of document.querySelectorAll("div,span,p,figcaption,small,footer,text")) {
    const soTspan = el.tagName.toLowerCase() === "text" &&
      [...el.children].every((c) => c.tagName.toLowerCase() === "tspan");
    if (el.children.length && !soTspan) continue;
    const t = (el.textContent || "").trim();
    if (t.length < 6 || t.length > 220) continue;
    const declarado = el.dataset && /^cr[ée]dito|fonte$/i.test(el.dataset.qcPapel || "");
    if (!declarado && !RE.test(t) && !/\b(NASA|ESA|NOAA|Reuters|Getty|Shutterstock|CC BY|©|Pexels|Pixabay|DVIDS|NARA|Smithsonian|Europeana|Wikimedia|Commons)\b/.test(t)) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const b = el.getBoundingClientRect();
    if (b.width < 40 || b.height < 12) continue;
    if (b.y < innerHeight * 0.55) continue;              // crédito mora no rodapé
    let op = 1, n = el;
    while (n && n !== document.documentElement) { op *= +getComputedStyle(n).opacity || 0; n = n.parentElement; }
    cands.push({ x: b.x, y: b.y, w: b.width, h: b.height, opacidade: op, texto: t.slice(0, 60) });
  }
  if (!cands.length) return null;
  const vis = cands.filter((c) => c.opacidade >= 0.05);
  if (!vis.length) return { invisivel: true };
  const x0 = Math.min(...vis.map((c) => c.x)), y0 = Math.min(...vis.map((c) => c.y));
  const x1 = Math.max(...vis.map((c) => c.x + c.w)), y1 = Math.max(...vis.map((c) => c.y + c.h));
  return { x: x0, y: y0, w: x1 - x0, h: y1 - y0, opacidade: Math.max(...vis.map((c) => c.opacidade)), texto: vis[0].texto, n: vis.length };
}
// (aqui, não no molde) a faixa do crédito da marca (marca/identidade.md §4.2), no quadro de 3840 × 2160: abaixo de
// y = 1880, de x = 200 até antes de x = 1720; em palco de outro tamanho, na mesma proporção
const FAIXA_CREDITO = { y: 1880, x0: 200, x1: 1720, w: 3840, h: 2160, folga: 1 };
/** (aqui, não no molde) O crédito com filhos inline, que o achador do molde pula por não ser folha: o bloco de texto na
 *  faixa do crédito, com o vocabulário e o papel do molde no texto dele e dos filhos. Devolve, de cada bloco (o de fora,
 *  quando um está dentro do outro), as partes a medir: a letra dele (a caixa dos nós de texto próprios) e cada filho
 *  com texto, com a opacidade de cada uma (o produto até a raiz, como no molde). Roda na página. */
function ACHAR_CREDITO_COM_FILHOS(faixa) {
  const RE = /^\s*(fontes?|cr[ée]ditos?|source|imagens?|fotos?|v[ií]deos?|dados|terra)\s*[:·]/i;
  const VOC = /\b(NASA|ESA|NOAA|Reuters|Getty|Shutterstock|CC BY|©|Pexels|Pixabay|DVIDS|NARA|Smithsonian|Europeana|Wikimedia|Commons)\b/;
  const INLINE = /^(inline|inline-block|inline-flex|inline-grid|inline-table|contents|none)$/;
  const sx = innerWidth / faixa.w, sy = innerHeight / faixa.h;
  const opac = (el) => { let op = 1, n = el; while (n && n !== document.documentElement) { op *= +getComputedStyle(n).opacity || 0; n = n.parentElement; } return op; };
  const caminho = (el) => {
    const ps = [];
    for (let n = el; n && n.nodeType === 1 && n !== document.body && n !== document.documentElement; n = n.parentElement) {
      if (n.id) { ps.unshift(`#${n.id}`); break; }
      ps.unshift(`${n.tagName.toLowerCase()}:nth-child(${[...n.parentElement.children].indexOf(n) + 1})`);
    }
    return ps.join(" > ");
  };
  const limpo = (s) => String(s || "").replace(/\s+/g, " ").trim();
  const blocos = [];
  for (const el of document.querySelectorAll("div,span,p,figcaption,small,footer")) {
    if (!el.children.length) continue;                                       // a folha é do achador do molde
    if (![...el.children].every((c) => /^(BR|WBR)$/.test(c.tagName) || INLINE.test(getComputedStyle(c).display))) continue;
    const t = (el.textContent || "").trim();
    if (t.length < 6 || t.length > 220) continue;
    const declarado = el.dataset && /^cr[ée]dito|fonte$/i.test(el.dataset.qcPapel || "");
    if (!declarado && !RE.test(t) && !VOC.test(t)) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    const b = el.getBoundingClientRect();
    if (b.width < 40 || b.height < 12) continue;
    if (b.y < faixa.y * sy - faixa.folga || b.x < faixa.x0 * sx - faixa.folga || b.right > faixa.x1 * sx + faixa.folga) continue;
    blocos.push(el);
  }
  const fora = blocos.filter((el) => !blocos.some((o) => o !== el && o.contains(el)));
  const partes = [];
  for (const el of fora) {
    const k = caminho(el);
    // a letra dele: a caixa que une as linhas dos nós de texto próprios
    const proprios = [...el.childNodes].filter((n) => n.nodeType === 3 && n.textContent.trim());
    const rs = [];
    for (const n of proprios) {
      const r = document.createRange(); r.selectNodeContents(n);
      for (const q of r.getClientRects()) if (q.width > 0 && q.height > 0) rs.push(q);
    }
    if (rs.length) {
      const x0 = Math.min(...rs.map((q) => q.left)), y0 = Math.min(...rs.map((q) => q.top));
      const x1 = Math.max(...rs.map((q) => q.right)), y1 = Math.max(...rs.map((q) => q.bottom));
      partes.push({ parte: `${k} · texto próprio`, x: x0, y: y0, w: x1 - x0, h: y1 - y0, opacidade: opac(el), texto: limpo(proprios.map((n) => n.textContent).join("")).slice(0, 60) });
    }
    // cada filho com texto, na caixa dele
    [...el.children].forEach((c, i) => {
      const tc = limpo(c.textContent);
      if (!tc) return;
      const cc = getComputedStyle(c);
      if (cc.display === "none" || cc.visibility === "hidden") return;
      const q = c.getBoundingClientRect();
      if (!(q.width > 0 && q.height > 0)) return;
      partes.push({ parte: `${k} > ${c.tagName.toLowerCase()}:nth-child(${i + 1})`, x: q.x, y: q.y, w: q.width, h: q.height, opacidade: opac(c), texto: tc.slice(0, 60) });
    });
  }
  return { blocos: fora.map((el) => ({ bloco: caminho(el), texto: limpo(el.textContent).slice(0, 60) })), partes };
}
/** (aqui, não no molde; versão 5) O crédito por linha de cada nó de texto. As raízes: todo elemento com papel de crédito
 *  declarado (qualquer tag, qualquer display, onde estiver, também numa raiz de sombra aberta ou FECHADA: as fechadas o
 *  portão entrega pelo CDP, num Set sob o Symbol "alpha-point.portao-mapa.sombras-fechadas"); a folha que o achador do
 *  molde chama de crédito pelo vocabulário (≥ 40 × 12, nos 45 % de baixo); e o bloco com filhos de qualquer display, com
 *  o vocabulário, na faixa do crédito. O elemento com OUTRO papel declarado não vira raiz pelo vocabulário. De raízes uma
 *  dentro da outra, só a de fora. De cada raiz, todos os nós de texto dos descendentes, pela árvore que se pinta (o neto,
 *  o que está numa raiz de sombra, o distribuído num <slot>, também o de uma raiz fechada). Dentro de um crédito
 *  declarado, todo nó conta, mesmo dentro de um filho com outro papel (o papel de crédito de fora vence); fora dele, o nó
 *  dentro de um elemento com outro papel não conta. De cada nó, cada linha (Range.getClientRects), com o texto dela (cada
 *  letra vai à linha que contém o centro dela; com o centro em mais de uma, à que mais a cobre: a caixa de uma linha pode
 *  cobrir a letra da outra), a caixa cortada pelo recorte de overflow dos ancestrais que a cortam, a opacidade (o produto
 *  pela árvore que se pinta, sem o elemento com display:contents e só até a camada de cima), se está visível (a
 *  visibilidade do pai, a opacidade ≥ 0,05, fora de um recipiente do SVG que só se pinta por referência e a caixa cortada
 *  dentro do quadro) e se está no alcance (o topo nos 45 % de baixo, a régua do molde). A caixa sem letra (só de espaço)
 *  não é linha e não entra; a que tem letra, sempre entra. A linha visível no alcance que a caixa de outra linha
 *  visível cobre leva `celulas` (as caixas das letras dela, cortadas) e `sobre` (as caixas das outras): a medida também
 *  se faz só nos pixels das letras dela que nenhuma outra caixa cobre. Devolve também todo crédito declarado da página,
 *  com: se aparece agora (a caixa dele ou a de um descendente, visível, ou uma linha dele visível), o conteúdo visível
 *  dele que não é nó de texto (canvas, img, input…, e o <use> que pinta texto ou vem de fora), o texto gerado por CSS
 *  visível nele (::before, ::after, ::marker, content no elemento), o <use> visível que o pinta de fora dele, o recurso
 *  do SVG em que ele mora (pattern, marker, mask, clipPath) e a letra dele pintada em parte de outra cor (::highlight,
 *  ::selection, background-clip: text). Roda na página. */
function ACHAR_CREDITO_POR_LINHA(faixa) {
  const RE = /^\s*(fontes?|cr[ée]ditos?|source|imagens?|fotos?|v[ií]deos?|dados|terra)\s*[:·]/i;
  const VOC = /\b(NASA|ESA|NOAA|Reuters|Getty|Shutterstock|CC BY|©|Pexels|Pixabay|DVIDS|NARA|Smithsonian|Europeana|Wikimedia|Commons)\b/;
  const PAPEL = /^cr[ée]dito|fonte$/i;
  const TAGS_DO_MOLDE = /^(div|span|p|figcaption|small|footer|text)$/i;
  const SVG = "http://www.w3.org/2000/svg", XLINK = "http://www.w3.org/1999/xlink";
  // o conteúdo visível que não é nó de texto (o HTML e o SVG): a medida por linha não o vê. O <use> tem regra própria
  // (rodada 3): o que pinta texto, ou vem de fora, conta aqui; o ícone de sprite só de desenho, não (como um <svg> com
  // <rect> no próprio crédito)
  const NAO_TEXTO = /^(canvas|img|input|textarea|select|iframe|frame|object|embed|video|image|portal|fencedframe)$/i;
  // (rodada 3) os recipientes do SVG que não se pintam sozinhos: o que mora neles só aparece por referência (o <use>, o
  // fill de um pattern, um marker…). O texto de <defs> tem caixa (fantasma), mas não se pinta ali
  const SO_POR_REFERENCIA = /^(defs|symbol|pattern|marker|mask|clippath|lineargradient|radialgradient|filter|title|desc|metadata)$/i;
  const RECURSO = /^(pattern|marker|mask|clippath)$/i;
  const sx = innerWidth / faixa.w, sy = innerHeight / faixa.h;
  const limiteY = innerHeight * 0.55;   // molde: o crédito mora no rodapé, os 45 % de baixo
  const papelDe = (el) => (el && el.nodeType === 1 && el.dataset ? (el.dataset.qcPapel || "") : "");
  const ehCredito = (el) => PAPEL.test(papelDe(el));
  const outroPapel = (el) => !!papelDe(el) && !ehCredito(el);
  // (rodada 3) as raízes de sombra fechadas que o portão entregou pelo CDP, pelo host
  const raizFechada = new Map();
  try {
    const fechadas = window[Symbol.for("alpha-point.portao-mapa.sombras-fechadas")];
    if (fechadas) for (const r of fechadas) { try { if (r && r.host && r.host.isConnected) raizFechada.set(r.host, r); } catch (e) { } }
  } catch (e) { }
  const sombraDe = (el) => el.shadowRoot || raizFechada.get(el) || null;
  // o pai na árvore que se pinta: o slot de um nó distribuído (numa raiz fechada, o assignedSlot é null: o slot se acha
  // pelos assignedNodes dela), o host de uma raiz de sombra
  const paiPlano = (n) => {
    if (!n) return null;
    if (n.assignedSlot) return n.assignedSlot;
    const p = n.parentNode;
    if (p && p.nodeType === 1 && raizFechada.has(p)) {
      for (const s of raizFechada.get(p).querySelectorAll("slot")) { try { if (s.assignedNodes().includes(n)) return s; } catch (e) { } }
    }
    if (p && p.nodeType === 11 && p.host) return p.host;
    return p && p.nodeType === 1 ? p : null;
  };
  const casa = (el, s) => { try { return el.matches(s); } catch { return false; } };
  const naCamadaDeCima = (el) => casa(el, ":popover-open") || casa(el, ":modal") || casa(el, ":fullscreen");
  // a opacidade que o navegador aplica: o produto pela árvore que se pinta, sem o elemento com display:contents (sem
  // caixa, a opacidade dele não se aplica), e só até o elemento da camada de cima (popover aberto, diálogo modal, tela
  // cheia), que não herda a opacidade de quem está fora dele. O <html> fica de fora, como no molde
  const opac = (el) => {
    let op = 1;
    for (let n = el; n && n !== document.documentElement; n = paiPlano(n)) {
      const cs = getComputedStyle(n);
      if (cs.display !== "contents") op *= +cs.opacity || 0;
      if (naCamadaDeCima(n)) break;
    }
    return op;
  };
  // o elemento que se pinta: nenhum display:none nele nem acima dele, pela árvore que se pinta
  const memo = new Map();
  const renderizado = (el) => {
    if (!el || el === document.documentElement) return true;
    if (memo.has(el)) return memo.get(el);
    const r = getComputedStyle(el).display !== "none" && renderizado(paiPlano(el));
    memo.set(el, r);
    return r;
  };
  // (rodada 3) o recipiente do SVG que só se pinta por referência, em volta do elemento (ou ele mesmo)
  const memoRef = new Map();
  const soPorReferencia = (el) => {
    if (!el || el.nodeType !== 1) return null;
    if (memoRef.has(el)) return memoRef.get(el);
    const r = el.namespaceURI === SVG && SO_POR_REFERENCIA.test(el.localName) ? el : soPorReferencia(paiPlano(el));
    memoRef.set(el, r);
    return r;
  };
  const caminho = (el) => {
    const ps = [];
    for (let n = el; n && n.nodeType === 1 && n !== document.body && n !== document.documentElement;) {
      if (n.id) { ps.unshift(`#${n.id}`); break; }
      const p = n.parentNode;
      ps.unshift(`${n.tagName.toLowerCase()}:nth-child(${(p ? [...p.children] : [n]).indexOf(n) + 1})`);
      if (p && p.nodeType === 11 && p.host) { ps.unshift("::shadow"); n = p.host; } else n = n.parentElement;
    }
    return ps.join(" > ");
  };
  // (rodada 4) o NOME de um elemento nas séries e nos créditos declarados: o caminho dele, que para no 1º id; o 2º elemento
  // distinto com o mesmo caminho (um id repetido, o id interno de um componente em sombra igual a um do documento) leva
  // "(elemento 2)", o 3º "(elemento 3)"… O número é fixo por elemento entre os instantes (a página guarda o registro sob
  // um Symbol); o elemento que a cena troca por outro igual (o antigo saiu do documento) passa o nome ao novo. Antes, os
  // dois viravam uma série só, e o "no ar" relativo e o patamar descartavam o crédito mais apagado (x13 do cético)
  const NOMES = Symbol.for("alpha-point.portao-mapa.nomes");
  const registro = window[NOMES] || (window[NOMES] = { porEl: new WeakMap(), dono: new Map() });
  const nomeDe = (el) => {
    const base = caminho(el);
    const tem = registro.porEl.get(el);
    if (tem && tem.base === base) { const d = registro.dono.get(tem.nome); if (d && d.deref() === el) return tem.nome; }
    for (let i = 1; ; i++) {
      const nome = i === 1 ? base : `${base} (elemento ${i})`;
      const d = registro.dono.get(nome), o = d && d.deref();
      if (!o || o === el || !o.isConnected) { registro.dono.set(nome, new WeakRef(el)); registro.porEl.set(el, { base, nome }); return nome; }
    }
  };
  const limpo = (s) => String(s || "").replace(/\s+/g, " ").trim();
  // todo elemento (ou, com `comTexto`, todo nó de texto) de uma raiz, entrando nas raízes de sombra (abertas e fechadas)
  const andar = (raiz, comTexto) => {
    const out = [];
    const ir = (r) => {
      const w = document.createTreeWalker(r, comTexto ? NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT : NodeFilter.SHOW_ELEMENT);
      for (let n = r.nodeType === 1 ? r : w.nextNode(); n; n = w.nextNode()) {
        if (n.nodeType === 3) out.push(n);
        else { if (!comTexto) out.push(n); const s = sombraDe(n); if (s) ir(s); }
      }
    };
    ir(raiz);
    return out;
  };
  const dentro = (a, b) => { for (let n = b; n; n = paiPlano(n)) if (n === a) return true; return false; };
  const todosEls = andar(document, false);
  const raizes = new Map();
  // 1) o crédito declarado, onde estiver e com o display que tiver
  for (const el of todosEls) if (ehCredito(el)) raizes.set(el, "papel declarado");
  // 2) o crédito pelo vocabulário: a folha do molde e o bloco com filhos na faixa do crédito (o que mora num recipiente
  // do SVG que só se pinta por referência, não; e, desde a rodada 4, nem o que mora dentro de um elemento de outro papel,
  // sem papel de crédito no meio: a linha flex de um rótulo, o rodapé em grid de uma folha de documento, fp1 e fp2 do
  // cético da rodada 3)
  const dentroDeOutroPapel = (el) => {
    for (let q = paiPlano(el); q; q = paiPlano(q)) { if (ehCredito(q)) return false; if (outroPapel(q)) return true; }
    return false;
  };
  for (const el of todosEls) {
    if (raizes.has(el) || outroPapel(el) || !TAGS_DO_MOLDE.test(el.tagName)) continue;
    const t = (el.textContent || "").trim();
    if (t.length < 6 || t.length > 220) continue;
    if (!RE.test(t) && !VOC.test(t)) continue;
    if (dentroDeOutroPapel(el)) continue;
    const cs = getComputedStyle(el);
    if (cs.display === "none" || cs.visibility === "hidden") continue;
    if (soPorReferencia(el)) continue;
    const b = el.getBoundingClientRect();
    if (b.width < 40 || b.height < 12) continue;
    const soTspan = el.tagName.toLowerCase() === "text" && [...el.children].every((c) => c.tagName.toLowerCase() === "tspan");
    if (!el.children.length || soTspan) { if (b.y < limiteY) continue; raizes.set(el, "vocabulário, folha"); continue; }
    if (b.y < faixa.y * sy - faixa.folga || b.x < faixa.x0 * sx - faixa.folga || b.right > faixa.x1 * sx + faixa.folga) continue;
    raizes.set(el, "vocabulário, bloco na faixa");
  }
  const todas = [...raizes.keys()];
  const fora = todas.filter((el) => !todas.some((o) => o !== el && dentro(o, el)));
  // (rodada 3) o recorte de overflow que corta o texto de um elemento: o padding box de cada ancestral que corta
  // (overflow diferente de visible, ou contain: paint), pela árvore que se pinta, menos o que o texto escapa por estar num
  // elemento posicionado (absolute: até o ancestral que é o bloco de contenção dele; fixed: até um com transform, filter…,
  // ou nenhum) e menos o que está acima de um elemento da camada de cima. O <body> cujo overflow vai para a viewport (o
  // <html> com overflow visible) não corta; a viewport é o "dentro do quadro" de sempre. No SVG, só o <svg> de fora corta
  // (o viewport dele). Com `proprio` falso, o recorte da CAIXA do elemento (não o do conteúdo dele): começa no pai, com a
  // posição do próprio elemento
  const htmlCs = getComputedStyle(document.documentElement);
  const bodyPropaga = htmlCs.overflowX === "visible" && htmlCs.overflowY === "visible";
  // (rodada 4) o container-type NÃO entra: no Chrome desta máquina ele não é bloco de contenção do absolute nem do fixed
  // (a sonda2 do cético da rodada 3; x02-container-abs e x02c-container-fixed), e contá-lo cortava o crédito que aparece
  const contem = (cs) => cs.transform !== "none" || cs.perspective !== "none" || cs.filter !== "none" ||
    /\b(transform|perspective|filter)\b/.test(cs.willChange || "") || /\b(paint|layout|strict|content)\b/.test(cs.contain || "") ||
    (cs.backdropFilter && cs.backdropFilter !== "none");
  const cbAbs = (cs) => cs.position !== "static" || contem(cs);
  // (rodada 4) o overflow-clip-margin: o Chrome desta máquina o aplica só quando os DOIS eixos cortam com clip (o overflow
  // clip, ou o visible com contain: paint), nunca com hidden, auto ou scroll; a borda do recorte é a caixa que ele diz
  // (padding-box, se não diz; content-box, border-box) mais a margem, nos dois eixos (r4/sonda/clip-margin.txt)
  const tipoDoCorte = (o, pinta) => (o === "clip" || (o === "visible" && pinta) ? "clip" : o === "visible" ? null : "hidden");
  const recorteDe = (pai, proprio = true) => {
    let l = -Infinity, t = -Infinity, r = Infinity, b = Infinity, procura = null, n0 = pai;
    if (!proprio) {
      const cs0 = getComputedStyle(pai);
      if (naCamadaDeCima(pai)) return { l, t, r, b };
      if (cs0.display !== "contents") procura = cs0.position === "absolute" ? "abs" : cs0.position === "fixed" ? "fixed" : null;
      n0 = paiPlano(pai);
    }
    for (let n = n0; n && n.nodeType === 1 && n !== document.documentElement; n = paiPlano(n)) {
      const cs = getComputedStyle(n);
      if (cs.display === "contents") continue;
      if (procura === "abs" ? cbAbs(cs) : procura === "fixed" ? contem(cs) : true) {
        procura = null;
        const svg = n.namespaceURI === SVG;
        const pode = svg ? (n.localName === "svg" && !n.ownerSVGElement) :
          !(n === document.body && bodyPropaga) && !/^(inline|none|table-row|table-row-group|table-column|table-column-group|table-header-group|table-footer-group)$|^ruby/.test(cs.display);
        const pinta = /\b(paint|strict|content)\b/.test(cs.contain || "");
        const cx = pode && (pinta || cs.overflowX !== "visible"), cy = pode && (pinta || cs.overflowY !== "visible");
        if (cx || cy) {
          const q = n.getBoundingClientRect();
          let x0 = q.left, y0 = q.top, x1 = q.right, y1 = q.bottom;
          const margemVale = tipoDoCorte(cs.overflowX, pinta) === "clip" && tipoDoCorte(cs.overflowY, pinta) === "clip";
          const ocm = margemVale ? String(cs.overflowClipMargin || "") : "";
          const caixa = /\bborder-box\b/.test(ocm) ? "border" : /\bcontent-box\b/.test(ocm) ? "content" : "padding";
          const mm = /(-?[\d.]+(?:e[-+]?\d+)?)px/i.exec(ocm);
          const margem = mm ? Math.max(0, +mm[1]) : 0;
          if (!svg) {
            const kx = n.offsetWidth > 0 ? q.width / n.offsetWidth : 1, ky = n.offsetHeight > 0 ? q.height / n.offsetHeight : 1;
            if (caixa !== "border") {
              x0 = q.left + n.clientLeft * kx; x1 = x0 + n.clientWidth * kx;
              y0 = q.top + n.clientTop * ky; y1 = y0 + n.clientHeight * ky;
            }
            if (caixa === "content") {
              x0 += (parseFloat(cs.paddingLeft) || 0) * kx; x1 -= (parseFloat(cs.paddingRight) || 0) * kx;
              y0 += (parseFloat(cs.paddingTop) || 0) * ky; y1 -= (parseFloat(cs.paddingBottom) || 0) * ky;
            }
            x0 -= margem * kx; x1 += margem * kx; y0 -= margem * ky; y1 += margem * ky;
          } else { x0 -= margem; x1 += margem; y0 -= margem; y1 += margem; }
          if (cx) { l = Math.max(l, x0); r = Math.min(r, x1); }
          if (cy) { t = Math.max(t, y0); b = Math.min(b, y1); }
        }
      }
      if (naCamadaDeCima(n)) break;
      if (procura === null) { if (cs.position === "absolute") procura = "abs"; else if (cs.position === "fixed") procura = "fixed"; }
    }
    return { l, t, r, b };
  };
  const cortar = (q, rc) => {
    const l = Math.max(q.left, rc.l), t = Math.max(q.top, rc.t), r = Math.min(q.right, rc.r), b = Math.min(q.bottom, rc.b);
    return { left: l, top: t, width: Math.max(0, r - l), height: Math.max(0, b - t) };
  };
  // (rodada 3) a letra pintada em parte de outra cor: os realces registrados (::highlight) e a seleção (::selection) que
  // tocam o nó, e o background-clip: text (a letra pintada pelo fundo). O ::first-letter não entra: ele vira uma caixa
  // própria no getClientRects, e a letra dele se mede sozinha, como uma linha (o f14 da bancada)
  const realces = [];
  try { if (window.CSS && CSS.highlights && CSS.highlights.size) CSS.highlights.forEach((h, nome) => { for (const r of h) realces.push({ nome, r }); }); } catch (e) { }
  let selecao = null;
  try { const s = getSelection(); if (s && s.rangeCount && !s.isCollapsed) selecao = s; } catch (e) { }
  const tocaRange = (r, n) => {
    try {
      if (r instanceof Range) return r.intersectsNode(n);
      const x = document.createRange(); x.setStart(r.startContainer, r.startOffset); x.setEnd(r.endContainer, r.endOffset);
      return x.intersectsNode(n);
    } catch (e) { return true; }
  };
  const parcialDe = (n, pai) => {
    const out = [];
    for (const { nome, r } of realces) if (tocaRange(r, n)) { out.push(`::highlight(${nome})`); break; }
    if (selecao) {
      let s = false;
      try { s = selecao.containsNode(n, true); for (let i = 0; !s && i < selecao.rangeCount; i++) s = selecao.getRangeAt(i).intersectsNode(n); } catch (e) { s = true; }
      if (s) out.push("::selection");
    }
    for (let a = pai, k = 0; a && a.nodeType === 1 && a !== document.documentElement && k < 16; a = paiPlano(a), k++) {
      const ca = getComputedStyle(a);
      if (/\btext\b/.test(ca.backgroundClip || "") || /\btext\b/.test(ca.webkitBackgroundClip || "")) { out.push(`background-clip: text (${caminho(a) || a.localName})`); break; }
    }
    return out;
  };
  const parciais = new Map();
  const linhas = [], aux = [];
  let caixasSemLetra = 0;
  // (rodada 4) a letra com tinta: nem espaço, nem caractere de largura zero, nem controle de direção
  const TINTA = /[^\s\u200b-\u200f\u2028-\u202f\u2060-\u206f\ufeff]/;
  // (rodada 5) no nó sem caixa de área positiva, a letra com tinta também não é ignorável por padrão (a propriedade
  // Default_Ignorable_Code_Point do Unicode: o hífen mole fora da quebra, os seletores de variação, o CGJ, os
  // preenchimentos do hangul, as tags…): sem glifo, sem tinta (o p4b5 do cético v5.1). O hífen mole NA quebra tem caixa e
  // não passa por aqui. A marca combinante continua letra com tinta: num nó próprio com outro corpo, família ou peso, ela
  // tem tinta própria, e a caixa do nó tem área 0 (r5/sonda/marcas.txt)
  const TINTA_SC = /[^\s\p{Default_Ignorable_Code_Point}]/u;
  // (rodada 5) o nó cuja área 0 vem de um transform que achata o plano dele não tem tinta (a revelação letra a letra com
  // scale(0), scaleX(0) ou rotateY(90deg): o p4b7 e o p4b8 do cético v5.1). Duas provas, as duas pela geometria:
  //   (a) toda caixa do nó é 0 × 0 (com o corpo > 0, a letra tem altura no plano dela; altura e largura 0 na tela querem
  //       dizer que o plano virou uma linha ou um ponto: nenhuma área, nenhuma tinta);
  //   (b) o elemento de caixa mais perto do nó (subindo pelos inline e pelos display:contents, que o transform não pega, e
  //       parando sem prova no primeiro que não é HTML, como o SVG) tem largura e altura de layout > 0 e, na tela, largura
  //       ou altura 0: o plano dele, que é o do nó, está de lado.
  // Sem prova, o nó conta. O critério do cético ("pai.offsetWidth > 0 e a caixa 0") não serve sozinho: o pai bloco tem
  // largura de layout e o nó dele tem área 0 pelo letter-spacing (r5a)
  const semTintaPorTransform = (rs, pai) => {
    if (rs.every((q) => q.width === 0 && q.height === 0)) return true;
    for (let e = pai, k = 0; e && k < 64; e = paiPlano(e), k++) {
      if (!(e instanceof HTMLElement)) return false;
      const d = getComputedStyle(e).display;
      if (d === "inline" || d === "contents") continue;
      if (!(e.offsetWidth > 0 && e.offsetHeight > 0)) return false;
      const q = e.getBoundingClientRect();
      return q.width < 0.01 || q.height < 0.01;
    }
    return false;
  };
  // (rodada 4) o nó de texto com tinta, dentro de um crédito declarado, cujas caixas têm todas área 0
  const semCaixa = [];
  // a série de cada linha leva o nome do DONO do nó: o crédito declarado mais perto (estável de um instante para outro,
  // mesmo quando a raiz de fora muda, como o #creds da pílula que entra e sai da faixa) ou, sem ele, a raiz; o número do
  // nó conta dentro do dono, na ordem do documento. O nome é o do elemento (nomeDe, rodada 4), não só o caminho
  const nosDoDono = new Map();
  for (const r of fora) {
    const kr = nomeDe(r);
    for (const n of andar(r, true)) {
      const txt = n.textContent || "";
      if (!txt.trim()) continue;
      const pai = paiPlano(n);
      if (!pai || pai.closest("script,style,template,noscript,title")) continue;
      // o dono: o crédito declarado mais perto, até a raiz; e todo crédito declarado em volta dele (o de fora também
      // conta a linha como dele). Sem crédito declarado em volta, o nó dentro de um elemento com outro papel não conta
      let dono = null, outro = false;
      const emVolta = [];
      for (let q = pai; q; q = paiPlano(q)) {
        if (ehCredito(q)) { if (!dono) dono = q; emVolta.push(nomeDe(q)); }
        else if (outroPapel(q) && !dono) outro = true;
        if (q === r) break;
      }
      if (!dono && outro) continue;
      const donoEl = dono || r;
      const rg = document.createRange(); rg.selectNodeContents(n);
      const rsTodos = [...rg.getClientRects()];
      const rs = rsTodos.filter((q) => q.width > 0 && q.height > 0);
      if (!rs.length) {
        // (rodada 4) o nó com tinta dentro de um crédito declarado que tem caixa, mas só de área 0 (o letter-spacing
        // negativo que zera a largura: x04c do cético da rodada 3), não some em silêncio: conta-se. O nó sem caixa
        // nenhuma (display:none em volta) não se pinta e continua fora.
        // (rodada 5) a tinta dele existe, e a medida não sabe onde ela cai: o letter-spacing negativo a leva tão longe
        // quanto ele quiser (o p4b1b e o p4b1c do cético v5.1, a -10em e a -30em, punham o W sobre a linha medida, fora da
        // zona da rodada 4). Por isso o crédito declarado em volta dele sai NÃO MEDIDO inteiro (a regra fica no Node, com
        // os outros casos), seja onde for que a tinta caia. Não se conta o nó sem tinta: só de ignoráveis (TINTA_SC), de
        // corpo 0, ou achatado por transform (semTintaPorTransform). A zona continua, só para dizer que linhas a tinta
        // pode tocar (`linhas_com_tinta_sem_caixa`): a caixa de área 0 alargada, para os dois lados, pelo que a pena pode
        // andar (cada letra, um corpo mais o |letter-spacing|, e o |word-spacing| no espaço) mais um corpo (o último
        // glifo), e meia altura do corpo em cima e embaixo (na escrita vertical, o alargamento todo nos dois eixos);
        // cortada pelo overflow
        if (dono && rsTodos.length && TINTA_SC.test(txt) && renderizado(pai)) {
          const cs0 = getComputedStyle(pai);
          const fs = parseFloat(cs0.fontSize) || 0;
          if (cs0.visibility === "visible" && opac(pai) >= 0.05 && !soPorReferencia(pai) && fs > 0 && !semTintaPorTransform(rsTodos, pai)) {
            const ls = parseFloat(cs0.letterSpacing) || 0, ws = parseFloat(cs0.wordSpacing) || 0;
            let h = fs;
            for (const c of txt) h += fs + Math.abs(ls) + (/\s/.test(c) ? Math.abs(ws) : 0);
            const deLado = !/^horizontal/.test(cs0.writingMode || "horizontal-tb");
            const rc0 = recorteDe(pai);
            const zonas = rsTodos.map((q) => {
              const v = deLado ? h : q.height > 0 ? fs * 0.5 : fs;
              return cortar({ left: q.left - h, top: q.top - v, right: q.right + h, bottom: q.bottom + v }, rc0);
            }).filter((z) => z.width > 0 && z.height > 0);
            const espacamento = [ls < 0 ? `letter-spacing ${cs0.letterSpacing}` : "", ws < 0 ? `word-spacing ${cs0.wordSpacing}` : ""].filter(Boolean).join(", ");
            semCaixa.push({ declarados: emVolta, onde: pai === donoEl ? nomeDe(donoEl) : caminho(pai), texto: limpo(txt).slice(0, 30), espacamento, zonas, linhas: [] });
          }
        }
        continue;
      }
      const k = nosDoDono.has(donoEl) ? nosDoDono.get(donoEl) + 1 : 0;
      nosDoDono.set(donoEl, k);
      const kd = donoEl === r ? kr : nomeDe(donoEl);
      const cs = getComputedStyle(pai);
      const op = opac(pai);
      const visto = cs.visibility !== "hidden" && cs.visibility !== "collapse" && op >= 0.05 && !soPorReferencia(pai);
      const rc = recorteDe(pai);
      if (emVolta.length) {
        const pc = parcialDe(n, pai);
        if (pc.length) for (const kv of emVolta) { if (!parciais.has(kv)) parciais.set(kv, new Set()); pc.forEach((x) => parciais.get(kv).add(x)); }
      }
      // o texto de cada linha: cada letra vai à linha que contém o centro dela; com o centro em mais de uma (a caixa de
      // uma linha cobre a outra: o ::first-line maior, a entrelinha menor que a fonte), à que mais a cobre; sem nenhuma,
      // à que mais a cobre, e por fim à de centro mais perto que a contém na horizontal
      const porLinha = rs.map(() => ""), idx = rs.map(() => []);
      let semLinha = 0;
      const unidades = [];
      for (let j = 0; j < txt.length; j++) {
        const c0 = txt.charCodeAt(j);
        const u = c0 >= 0xd800 && c0 <= 0xdbff && j + 1 < txt.length ? 2 : 1;
        unidades.push([j, u]); j += u - 1;
      }
      if (rs.length === 1) { porLinha[0] = txt; for (const [j, u] of unidades) if (/\S/.test(txt.substr(j, u))) idx[0].push([j, u]); }
      else for (const [j, u] of unidades) {
        const ch = txt.substr(j, u);
        const c = document.createRange(); c.setStart(n, j); c.setEnd(n, j + u);
        const q = c.getBoundingClientRect();
        const cx = q.left + q.width / 2, cy = q.top + q.height / 2;
        const cobre = (L) => {
          const ox = Math.min(q.right, L.right + 1) - Math.max(q.left, L.left - 1), oy = Math.min(q.bottom, L.bottom) - Math.max(q.top, L.top);
          return ox > 0 && oy > 0 ? ox * oy : 0;
        };
        const comCentro = [];
        rs.forEach((L, i) => { if (cy >= L.top && cy <= L.bottom && cx >= L.left - 1 && cx <= L.right + 1) comCentro.push(i); });
        let i = -1;
        if (comCentro.length === 1) i = comCentro[0];
        else {
          const cands = comCentro.length ? comCentro : rs.map((_, x) => x);
          let melhor = 0;
          for (const x of cands) { const a = cobre(rs[x]); if (a > melhor) { melhor = a; i = x; } }
          if (i < 0 && comCentro.length) i = comCentro[0];
          if (i < 0) {
            let d = Infinity;
            rs.forEach((L, x) => { if (cx >= L.left - 1 && cx <= L.right + 1) { const dd = Math.abs(cy - (L.top + L.bottom) / 2); if (dd < d) { d = dd; i = x; } } });
          }
        }
        if (i >= 0) { porLinha[i] += ch; if (/\S/.test(ch)) idx[i].push([j, u]); }
        else if (/\S/.test(ch)) semLinha++;
      }
      rs.forEach((q, i) => {
        // a caixa sem letra (só de espaço, a quebra de linha) não é linha; só sai quando toda letra do nó achou a linha
        // dela. A caixa com letra sempre entra
        if (rs.length > 1 && !semLinha && !/\S/.test(porLinha[i])) { caixasSemLetra++; return; }
        const qc = cortar(q, rc);
        const noQuadro = qc.width > 0 && qc.height > 0 && qc.left + qc.width > 0 && qc.top + qc.height > 0 && qc.left < innerWidth && qc.top < innerHeight;
        linhas.push({
          linha: `${kd} · nó ${k} · linha ${i}`, raiz: kr, declarado: dono ? kd : null, declarados: emVolta,
          de: pai === donoEl ? "próprio" : caminho(pai), x: qc.left, y: qc.top, w: qc.width, h: qc.height, opacidade: op,
          visivel: visto && noQuadro, alcance: qc.top >= limiteY, texto: limpo(porLinha[i] || txt).slice(0, 60),
          ...(qc.width !== q.width || qc.height !== q.height ? { cortada: true } : {}),
        });
        aux.push({ n, idx: idx[i], rc });
      });
    }
  }
  // (rodada 4) a tinta do nó sem caixa de área positiva sobre as linhas visíveis no alcance (as que se medem)
  const cruza = (a, q) => a.x < q.x + q.w && a.x + a.w > q.x && a.y < q.y + q.h && a.y + a.h > q.y;
  for (const sc of semCaixa) {
    for (const q of linhas) {
      if (!q.visivel || !q.alcance) continue;
      if (!sc.zonas.some((z) => cruza({ x: z.left, y: z.top, w: z.width, h: z.height }, q))) continue;
      (q.tinta ||= []).push(`${sc.onde} «${sc.texto}»`);
      sc.linhas.push(q.linha);
    }
  }
  // (rodada 4) as caixas do texto visível que NÃO é linha de crédito e cruza uma linha visível no alcance (o rótulo por
  // cima da letra: x03 do cético da rodada 3; a legenda ao lado, na mesma pílula; o nó de outro papel dentro de uma raiz
  // por vocabulário): a medida "só dela" também tira os pixels delas
  const vis = linhas.map((q, i) => i).filter((i) => linhas[i].visivel);
  const noAlcance = vis.map((i) => linhas[i]).filter((q) => q.alcance);
  const outros = [];
  if (noAlcance.length) {
    const nosDeLinha = new Set(aux.map((a) => a.n));
    for (const t of andar(document, true)) {
      if (t.nodeType !== 3 || nosDeLinha.has(t) || !TINTA.test(t.textContent || "")) continue;
      const pai = paiPlano(t);
      if (!pai || pai.closest("script,style,template,noscript,title") || !renderizado(pai)) continue;
      const cs = getComputedStyle(pai);
      if (cs.visibility !== "visible" || soPorReferencia(pai) || opac(pai) < 0.05) continue;
      const rg = document.createRange(); rg.selectNodeContents(t);
      const rc = recorteDe(pai);
      for (const q of rg.getClientRects()) {
        if (!(q.width > 0 && q.height > 0)) continue;
        const c = cortar(q, rc), o = { x: c.left, y: c.top, w: c.width, h: c.height };
        if (o.w > 0 && o.h > 0 && noAlcance.some((L) => cruza(o, L))) outros.push(o);
      }
    }
  }
  // (rodada 3) a linha visível no alcance que a caixa de outra linha visível cobre: as caixas das letras dela (cortadas) e
  // as das outras, para a medida só nos pixels das letras dela que nenhuma outra caixa cobre; desde a rodada 4, também a
  // caixa de todo outro texto visível que a cruza
  for (const i of vis) {
    const q = linhas[i];
    if (!q.alcance) continue;
    const sobre = [...vis.filter((j) => j !== i).map((j) => linhas[j]).filter((o) => cruza(o, q)), ...outros.filter((o) => cruza(o, q))];
    if (!sobre.length) continue;
    const { n, idx: ids, rc } = aux[i];
    const celulas = [];
    for (const [j, u] of ids) {
      const c = document.createRange(); c.setStart(n, j); c.setEnd(n, j + u);
      const r = cortar(c.getBoundingClientRect(), rc);
      if (r.width > 0 && r.height > 0) celulas.push([r.left, r.top, r.width, r.height]);
    }
    q.sobre = sobre.map((o) => [o.x, o.y, o.w, o.h]);
    q.celulas = celulas;
  }
  // cada crédito declarado: se aparece agora pela caixa (a dele ou a de um descendente: visível, opacidade ≥ 0,05, fora de
  // recipiente do SVG que só se pinta por referência e dentro do quadro), o conteúdo visível que não é nó de texto, e o
  // texto gerado por CSS visível (julgado pela visibilidade de quem o leva: também no crédito com display:contents, com
  // caixa 0 × 0 ou escondido com um filho visível). O conteúdo gerado conta quando não é none, normal nem uma string só de
  // espaço
  const gerado = (c) => {
    if (!c || c === "none" || c === "normal") return false;
    const m = /^"((?:[^"\\]|\\.)*)"$/.exec(c) || /^'((?:[^'\\]|\\.)*)'$/.exec(c);
    return m ? /\S/.test(m[1].replace(/\\(.)/g, "$1")) : true;
  };
  // a caixa conta cortada pelo recorte de overflow dos ancestrais (rodada 3: a caixa toda cortada não aparece)
  const caixaVisivel = (x, cs) => {
    if (cs.visibility !== "visible" || opac(x) < 0.05 || soPorReferencia(x)) return false;
    const rc = recorteDe(x, false);
    return [...x.getClientRects()].some((q) => {
      const b = cortar(q, rc);
      return b.width > 0 && b.height > 0 && b.left + b.width > 0 && b.top + b.height > 0 && b.left < innerWidth && b.top < innerHeight;
    });
  };
  // (rodada 3) o <use> visível: o crédito declarado que ele pinta de fora (o alvo é, contém ou está dentro de um crédito
  // declarado, também por outro <use> dentro do alvo), e, dentro de um crédito declarado, o <use> que pinta texto ou vem
  // de fora do documento (o clone não é nó de texto; o conteúdo de fora não se lê)
  const alvoDoUse = (u) => {
    const h = u.getAttribute("href") ?? u.getAttributeNS(XLINK, "href") ?? "";
    if (!h) return {};
    if (!h.startsWith("#")) return { externo: h.slice(0, 80) };
    let alvo = null;
    try { const rn = u.getRootNode(); let id = h.slice(1); try { id = decodeURIComponent(id); } catch (e) { } alvo = rn.getElementById ? rn.getElementById(id) : null; } catch (e) { }
    return { alvo };
  };
  const doUse = (u, visto) => {
    const out = { creds: new Set(), texto: false, externo: null };
    if (visto.has(u)) return out;
    visto.add(u);
    const a = alvoDoUse(u);
    if (a.externo) { out.externo = a.externo; return out; }
    if (!a.alvo) return out;
    for (let q = a.alvo; q; q = paiPlano(q)) if (ehCredito(q)) out.creds.add(q);
    for (const x of andar(a.alvo, false)) {
      if (ehCredito(x)) out.creds.add(x);
      if (x !== u && x.localName === "use" && x.namespaceURI === SVG) {
        const s = doUse(x, visto);
        s.creds.forEach((c) => out.creds.add(c));
        out.texto ||= s.texto; out.externo ||= s.externo;
      }
    }
    if (andar(a.alvo, true).some((t) => t.nodeType === 3 && /\S/.test(t.textContent || "") && !(paiPlano(t) && paiPlano(t).closest && paiPlano(t).closest("title,desc,metadata,style,script")))) out.texto = true;
    return out;
  };
  const porUse = new Map(), useNoCredito = new Map();
  const juntar = (m, el, v) => { if (!m.has(el)) m.set(el, []); m.get(el).push(v); };
  for (const u of todosEls) {
    if (u.localName !== "use" || u.namespaceURI !== SVG || !renderizado(u) || soPorReferencia(u)) continue;
    if (!caixaVisivel(u, getComputedStyle(u))) continue;
    const t = doUse(u, new Set());
    for (const c of t.creds) juntar(porUse, c, caminho(u) || "use");
    if (t.texto || t.externo) for (let q = paiPlano(u); q; q = paiPlano(q)) if (ehCredito(q)) juntar(useNoCredito, q, `${caminho(u) || "use"} (<use> ${t.externo ? `de fora do documento: ${t.externo}` : "que pinta texto"})`);
  }
  const declarados = todosEls.filter(ehCredito).map((el) => {
    let visivel = false;
    const naoTexto = [], geradoEm = [];
    for (const x of andar(el, false)) {
      if (!renderizado(x)) continue;
      const cs = getComputedStyle(x);
      const vis = cs.display !== "contents" && caixaVisivel(x, cs);
      if (vis) visivel = true;
      const nome = x.tagName.toLowerCase();
      if (vis && NAO_TEXTO.test(nome) && !(nome === "input" && String(x.type || "").toLowerCase() === "hidden")) naoTexto.push(caminho(x) || nome);
      if (vis && gerado(cs.content)) geradoEm.push(`${caminho(x)} (content)`);
      for (const ps of ["::before", "::after"]) {
        const p = getComputedStyle(x, ps);
        if (gerado(p.content) && p.display !== "none" && p.visibility === "visible" && opac(x) * (+p.opacity || 0) >= 0.05 && !soPorReferencia(x)) geradoEm.push(`${caminho(x)}${ps}`);
      }
      if (/list-item/.test(cs.display) && (cs.listStyleType !== "none" || cs.listStyleImage !== "none") && cs.visibility === "visible" && opac(x) >= 0.05 &&
        getComputedStyle(x, "::marker").content !== "none") geradoEm.push(`${caminho(x)}::marker`);
    }
    naoTexto.push(...(useNoCredito.get(el) || []));
    const k = nomeDe(el);
    if (linhas.some((q) => q.visivel && q.declarados.includes(k))) visivel = true;
    const rec = soPorReferencia(el);
    return {
      declarado: k, texto: limpo(el.textContent).slice(0, 60), visivel, nao_texto: naoTexto.slice(0, 5), gerado: geradoEm.slice(0, 5),
      por_use: (porUse.get(el) || []).slice(0, 3), em_recurso: rec && RECURSO.test(rec.localName) ? (caminho(rec) || rec.localName) : null,
      parcial: [...(parciais.get(k) || [])].slice(0, 3),
      // (rodada 4) os nós com tinta e sem caixa de área positiva dentro dele, e as linhas que a tinta deles toca; (rodada
      // 5) com o espaçamento negativo que o nó tem, se tiver
      sem_caixa: semCaixa.filter((sc) => sc.declarados.includes(k)).slice(0, 3).map((sc) => ({ onde: sc.onde, texto: sc.texto, ...(sc.espacamento ? { espacamento: sc.espacamento } : {}), linhas: sc.linhas.slice(0, 5) })),
    };
  });
  return {
    raizes: fora.map((el) => ({ raiz: nomeDe(el), por: raizes.get(el), texto: limpo(el.textContent).slice(0, 60) })),
    declarados,
    linhas,
    caixas_sem_letra: caixasSemLetra,
    nos_sem_caixa: semCaixa.length,
  };
}
// (versão 5, rodada 3) as raízes de sombra FECHADAS: o JavaScript da página não as alcança (o shadowRoot é null), nem a
// do attachShadow({mode:"closed"}) nem a declarativa (<template shadowrootmode="closed">, que nem passa pelo
// attachShadow). O CDP as lista (DOM.getDocument com pierce) e cada uma do documento principal vai à página por
// referência, num Set sob este Symbol, que o achador por linha percorre como as abertas. As de dentro de uma moldura
// (iframe…) só se contam: a moldura tem regra própria. Roda a cada instante, depois das fotos das versões 3 e 4
const CHAVE_SOMBRAS = "alpha-point.portao-mapa.sombras-fechadas";
async function sombrasFechadas(cdp) {
  const { root } = await cdp.send("DOM.getDocument", { depth: -1, pierce: true });
  const doc = [], emMoldura = [];
  const andar = (n, moldura) => {
    for (const s of n.shadowRoots || []) { if (s.shadowRootType === "closed") (moldura ? emMoldura : doc).push(s.backendNodeId); andar(s, moldura); }
    for (const c of n.children || []) andar(c, moldura);
    if (n.contentDocument) andar(n.contentDocument, true);
  };
  andar(root, false);
  for (const id of doc) {
    const { object } = await cdp.send("DOM.resolveNode", { backendNodeId: id });
    try {
      await cdp.send("Runtime.callFunctionOn", { objectId: object.objectId, functionDeclaration: `function(){const k=Symbol.for(${JSON.stringify(CHAVE_SOMBRAS)});(window[k]||(window[k]=new Set())).add(this)}` });
    } finally { await cdp.send("Runtime.releaseObject", { objectId: object.objectId }).catch(() => { }); }
  }
  await cdp.send("DOM.disable").catch(() => { });
  return { doc: doc.length, emMoldura: emMoldura.length };
}
// (versão 5, rodada 3) as molduras (iframe, frame, object e embed com documento) visíveis na cena: o crédito declarado
// que mora numa não se mede (o portão não mede dentro de moldura). A moldura conta como visível quando o elemento dela tem
// caixa no quadro e visibility visible (a opacidade não se olha: na dúvida, conta); a que não se consegue ler conta como
// visível e sem leitura
function DECLARADOS_NA_MOLDURA() {
  const PAPEL = /^cr[ée]dito|fonte$/i;
  const out = [];
  const ir = (r) => {
    const w = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT);
    for (let n = r.nodeType === 1 ? r : w.nextNode(); n; n = w.nextNode()) {
      if (n.dataset && PAPEL.test(n.dataset.qcPapel || "")) out.push(String(n.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60));
      if (n.shadowRoot) ir(n.shadowRoot);
    }
  };
  ir(document);
  return out;
}
async function molduras(p) {
  const out = [];
  for (const fr of p.frames()) {
    if (fr === p.mainFrame()) continue;
    let visivel = true, nome = "moldura";
    try {
      const el = await fr.frameElement();
      ({ visivel, nome } = await el.evaluate((e) => ({
        visivel: getComputedStyle(e).visibility === "visible" &&
          [...e.getClientRects()].some((b) => b.width > 0 && b.height > 0 && b.right > 0 && b.bottom > 0 && b.left < innerWidth && b.top < innerHeight),
        nome: `<${e.localName}${e.id ? `#${e.id}` : ""}>`,
      })));
      await el.dispose().catch(() => { });
    } catch { /* não sei se aparece: conta como visível */ }
    if (!visivel) continue;
    let declarados = null, erro = null;
    try { declarados = await fr.evaluate(DECLARADOS_NA_MOLDURA); } catch (e) { erro = String(e?.message || e).replace(/\s+/g, " ").slice(0, 80); }
    let url = "";
    try { const u = new URL(fr.url()); url = u.protocol === "file:" ? `file:…/${u.pathname.split("/").pop()}` : `${u.protocol}${u.host ? `//${u.host}` : ""}${u.protocol === "about:" ? u.pathname : ""}`; } catch { url = "?"; }
    out.push({ moldura: nome, url, declarados, erro });
  }
  return out;
}
// (versão 5, rodada 3) a medida só nos pixels das letras da linha que nenhuma outra caixa de linha visível cobre: o
// recorte da linha (a foto de sempre) com a máscara das células das letras dela, menos as caixas das outras linhas. A
// régua é a do molde (medir), sobre esses pixels; menos de 200, nada
function medirSoDela(data, info, clip, q) {
  const W = info.width, H = info.height;
  const m = new Uint8Array(W * H);
  const pintar = ([x, y, w, h], v) => {
    const x0 = Math.max(0, Math.ceil(x - clip.x - 0.5)), x1 = Math.min(W, Math.ceil(x + w - clip.x - 0.5));
    const y0 = Math.max(0, Math.ceil(y - clip.y - 0.5)), y1 = Math.min(H, Math.ceil(y + h - clip.y - 0.5));
    for (let yy = y0; yy < y1; yy++) m.fill(v, yy * W + x0, yy * W + Math.max(x0, x1));
  };
  for (const c of q.celulas) pintar(c, 1);
  for (const o of q.sobre) pintar(o, 0);
  let n = 0;
  for (let i = 0; i < m.length; i++) n += m[i];
  if (n === m.length) return { m: null, n, inteira: true };   // nada coberto: a medida é a da linha inteira
  const px = new Uint8Array(n * 4);
  for (let i = 0, k = 0; i < m.length; i++) if (m[i]) { px[k++] = data[i * 4]; px[k++] = data[i * 4 + 1]; px[k++] = data[i * 4 + 2]; px[k++] = data[i * 4 + 3]; }
  return { m: medir(px, n, 1), n };
}
/** (aqui, não no molde) O recorte de tela de uma caixa, com o arredondamento do molde (molde:219-223). */
const clipDe = (box, W, H) => ({
  x: Math.max(0, Math.round(box.x)), y: Math.max(0, Math.round(box.y)),
  width: Math.min(Math.round(box.w), W - Math.max(0, Math.round(box.x))),
  height: Math.min(Math.round(box.h), H - Math.max(0, Math.round(box.y))),
});
/** O pior "no ar": opacidade ≥ 80 % da maior e ≥ 0,15, a menor razão. (molde:219-223) */
function piorNoAr(amostras) {
  if (!amostras.length) return null;
  const opMax = Math.max(...amostras.map((a) => a.opacidade));
  const noAr = amostras.filter((a) => a.opacidade >= opMax * 0.8 && a.opacidade >= 0.15);
  let pior = null;
  for (const a of noAr) if (!pior || a.razao < pior.razao) pior = a;
  return pior;
}
/** (aqui, não no molde) O "no ar" do PATAMAR: a amostra conta quando, na janela dela (± janela s), a opacidade fica
 *  parada (a menor ≥ 80 % da maior) e ela mesma ≥ 0,15. É o patamar de opacidade baixa que dura mais que a janela,
 *  mesmo com um instante mais opaco noutro ponto da cena (o que o "no ar" relativo do molde deixa passar). O meio de um
 *  fade não é patamar: nele a opacidade muda mais de 20 % dentro da janela. Num fade linear de 0 ao máximo em F s, a
 *  janela de ±1 s só fica parada a partir de 9/F do máximo (nunca, até F ≈ 11 s), ou já colada no fim do fade (a
 *  partir de 0,8 + 1/F do máximo). Só conta a amostra em que o crédito apareceu (opacidade ≥ 0,05, como o molde). */
function piorNoArPorPatamar(amostras, janela) {
  let pior = null;
  for (const a of amostras) {
    if (!(a.opacidade >= 0.15)) continue;
    const ops = amostras.filter((b) => Math.abs(b.t - a.t) <= janela + 1e-9).map((b) => b.opacidade);
    if (!(Math.min(...ops) >= Math.max(...ops) * 0.8)) continue;
    if (!pior || a.razao < pior.razao) pior = a;
  }
  return pior;
}
/** O pior que decide: o menor de três "no ar". (a) O do molde, igual, só nos instantes dele: este portão nunca aprova
 *  o que o molde reprova. (b) O do molde em TODAS as amostras (≥ 80 % da maior opacidade da cena): a régua do molde,
 *  amostrada de passo em passo; ela pega o instante em que um fade passa de 80 % do máximo, que o molde, com 4
 *  instantes, só vê se um deles cair ali. (c) O do patamar. No empate, vale a primeira. */
function piorQueDecide(amostras, janela) {
  let pior = null;
  for (const [p, regra] of [[piorNoAr(amostras.filter((a) => a.doMolde)), "molde"], [piorNoAr(amostras), "todas"], [piorNoArPorPatamar(amostras, janela), "patamar"]]) {
    if (p && (!pior || p.razao < pior.razao)) pior = { ...p, regra };
  }
  return pior;
}
const NOME_DA_REGRA = { molde: "no ar nos instantes do molde", todas: "no ar pela régua do molde, em todas as amostras" };
const nomeDaRegra = (r) => NOME_DA_REGRA[r] || `num patamar de ±${JANELA_S} s`;

// ── a régua do _audit-til (scripts/_audit-til.mjs:143-245 e 280-360, copiada sem mudança) ────────────────────
let PROVA = null, ACENTUADOS = "", REGUA = null, MEDIDAS_DO_MOTOR = "", FAMILIAS_MARCA = [];
if (PORTAO === "til") {
  if (!MARCA.familia) {
    console.error(`⚠ _audit-til: NÃO MEDIDO — ${MARCA.aviso || "a marca não declara --fonte"}.`);
    process.exit(NAO_MEDIDO);
  }
  FAMILIAS_MARCA = MARCA.familiasMarca.map((f) => f.toLowerCase());
  PROVA = await importarDoMotor("src/ferramentas/provar-fonte.mjs");
  const { PT_BR } = await importarDoMotor("src/marca/fontes.mjs");
  ACENTUADOS = [...new Set([...PT_BR].filter((c) => /\p{L}/u.test(c) && c.normalize("NFD") !== c))].join("");
  REGUA = { corpo: 200, limIou: PROVA.LIMIAR_IOU_AGUDO, limOnda: PROVA.LIMIAR_ONDA, limCedilha: PROVA.LIMIAR_CEDILHA };
  MEDIDAS_DO_MOTOR = `window.__regieAnalisarAcento = ${PROVA.analisarAcento.toString()};\n` +
    `window.__regieVaoCedilha = ${PROVA.vaoCedilha.toString()};`;
}
/** Mede, NA PÁGINA, cada combinação (molde:143-200). */
async function medirNaPagina(page, combos) {
  await page.evaluate(MEDIDAS_DO_MOTOR);
  return page.evaluate(async ({ combos, regua, amostra }) => {
    const GEN = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "emoji", "math", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded"]);
    const primeira = (pilha) => { const m = /^\s*(?:"([^"]+)"|'([^']+)'|([^,]+))/.exec(pilha || ""); return m ? (m[1] || m[2] || m[3]).trim() : ""; };
    const cit = (f) => (GEN.has(f.toLowerCase()) ? f : `"${f.replace(/"/g, '\\"')}"`);
    const cv = document.createElement("canvas"); cv.width = 480; cv.height = 480;
    const cx = cv.getContext("2d", { willReadFrequently: true });
    const glifo = (texto, fonte) => {
      cx.setTransform(1, 0, 0, 1, 0, 0);
      cx.fillStyle = "#fff"; cx.fillRect(0, 0, 480, 480);
      cx.fillStyle = "#000"; cx.font = fonte; cx.textBaseline = "alphabetic";
      cx.fillText(texto, 80, 330);
      const px = cx.getImageData(0, 0, 480, 480).data;
      const d = new Uint8Array(480 * 480);
      for (let i = 0; i < d.length; i++) d[i] = px[i * 4] < 128 ? 1 : 0;
      return { w: 480, h: 480, d };
    };
    const largura = (texto, fonte) => { cx.font = fonte; return cx.measureText(texto).width; };
    const TIL = { "Ã": ["A", "Á"], "Õ": ["O", "Ó"], "ã": ["a", "á"], "õ": ["o", "ó"] };
    const out = {};
    for (const { chave, pilha, peso, estilo, ch } of combos) {
      const fam = primeira(pilha);
      const r = { familia: fam, familiaAusente: false, reserva: false, til: null, cedilha: null };
      const f = (resto) => `${estilo} ${peso} ${regua.corpo}px ${resto}`;
      try { await document.fonts.load(f(pilha), (ch || "") + amostra); } catch { }
      if (fam && !GEN.has(fam.toLowerCase())) {
        const c = cit(fam);
        const mm = largura(amostra, f(`${c}, monospace`)), m = largura(amostra, f("monospace"));
        const ms = largura(amostra, f(`${c}, serif`)), s = largura(amostra, f("serif"));
        if (Math.abs(mm - m) < 0.5 && Math.abs(ms - s) < 0.5) r.familiaAusente = true;
        else if (ch && Math.abs(largura(ch, f(`${c}, monospace`)) - largura(ch, f(`${c}, serif`))) > 0.01) r.reserva = true;
      }
      if (ch && !r.familiaAusente && !r.reserva) {
        const fonte = f(fam ? cit(fam) : pilha);
        if (TIL[ch]) {
          const [b, g] = TIL[ch];
          r.til = window.__regieAnalisarAcento(glifo(b, fonte), glifo(ch, fonte), glifo(g, fonte), regua.corpo, regua.limIou, regua.limOnda);
        }
        if (ch === "Ç" || ch === "ç") r.cedilha = window.__regieVaoCedilha(glifo(ch, fonte), regua.corpo);
      }
      out[chave] = r;
    }
    return out;
  }, { combos, regua: REGUA, amostra: "HAOaoÁÓáó0123" });
}
/** Veredito de uma medição de glifo (molde:203-213). */
function defeito(ch, m) {
  if (!m) return null;
  if (m.familiaAusente) return { tipo: "FAMILIA-AUSENTE", detalhe: `a família "${m.familia}" não carregou — o texto sai na fonte reserva` };
  if (m.reserva) return { tipo: "GLIFO-RESERVA", detalhe: `"${m.familia}" não tem "${ch}" — o Chrome desenha essa letra com outra fonte` };
  if (m.til?.defeito === "sem-acento") return { tipo: "TIL", detalhe: `"${ch}" saiu sem acento` };
  if (m.til?.defeito === "igual-ao-agudo") return { tipo: "TIL", detalhe: `o til de "${ch}" saiu como AGUDO (IoU ${m.til.iou} ≥ ${REGUA.limIou})` };
  if (m.til?.defeito === "sem-onda") return { tipo: "TIL", detalhe: `o acento de "${ch}" não ondula (${m.til.ondulacao} < ${REGUA.limOnda}) — não parece til` };
  if (m.cedilha != null && m.cedilha > REGUA.limCedilha) return { tipo: "CEDILHA", detalhe: `cedilha de "${ch}" descolada: vão de ${m.cedilha}% do corpo (limite ${REGUA.limCedilha}%)` };
  return null;
}
/** A coleta de texto de um instante, na página, sem o __renderAt (o quadro já posicionou). (molde:282-312) */
async function COLETAR_TEXTOS({ ACENTUADOS }) {
  const re = new RegExp(`[${ACENTUADOS}]`, "u");
  const opac = (el) => { let o = 1, n = el; while (n && n.nodeType === 1) { const s = getComputedStyle(n); if (s.display === "none" || s.visibility === "hidden") return 0; o *= parseFloat(s.opacity || "1"); n = n.parentElement; } return o; };
  const out = [];
  let textos = 0;
  for (const el of document.querySelectorAll("body *")) {
    if (/^(SCRIPT|STYLE|TEMPLATE|NOSCRIPT|TITLE)$/.test(el.tagName)) continue;
    const txt = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("");
    if (!txt.trim()) continue;
    textos++;
    const cs = getComputedStyle(el);
    const visto = /uppercase/i.test(cs.textTransform) ? txt.toUpperCase() : /lowercase/i.test(cs.textTransform) ? txt.toLowerCase() : txt;
    const id = el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + (el.className && typeof el.className === "string" && el.className ? "." + el.className.split(/\s+/)[0] : "");
    out.push({
      id, pilha: cs.fontFamily, peso: cs.fontWeight, estilo: cs.fontStyle, visto,
      txt: txt.replace(/\s+/g, " ").trim().slice(0, 60),
      acento: re.test(visto),
      visivel: el.getClientRects().length > 0 && opac(el) > 0.05,
      temLetra: /[\p{L}\p{N}]/u.test(visto),
      livre: !!el.closest("[data-qc-fonte-livre]"),
    });
  }
  return { out, textos };
}
const juntarVistos = (vistos, itens) => {
  for (const it of itens) {
    const k = `${it.id}|${it.visto}|${it.pilha}|${it.peso}|${it.estilo}`;
    const antes = vistos.get(k);
    vistos.set(k, antes ? { ...antes, visivel: antes.visivel || it.visivel } : it);
  }
};
const combosDe = (vistos) => {
  const combos = new Map();
  const juntar = (c) => { if (!combos.has(c.chave)) combos.set(c.chave, c); };
  for (const it of vistos.values()) {
    juntar({ chave: `${it.pilha}|${it.peso}|${it.estilo}|`, pilha: it.pilha, peso: it.peso, estilo: it.estilo });
    if (it.acento) for (const ch of new Set([...it.visto].filter((c) => ACENTUADOS.includes(c)))) {
      juntar({ chave: `${it.pilha}|${it.peso}|${it.estilo}|${ch}`, pilha: it.pilha, peso: it.peso, estilo: it.estilo, ch });
    }
  }
  return combos;
};
/** Os achados de um conjunto de textos vistos, com as medidas (molde:323-345). */
function acharDefeitos(vistos, med) {
  const hits = [];
  const foraDaMarca = new Map();
  for (const it of vistos.values()) {
    const base = med[`${it.pilha}|${it.peso}|${it.estilo}|`];
    const prim = base?.familia || "";
    if (it.visivel && it.temLetra && !it.livre && !FAMILIAS_MARCA.includes(prim.toLowerCase())) {
      const g = foraDaMarca.get(prim) || foraDaMarca.set(prim, { n: 0, it }).get(prim);
      g.n++;
    }
    const tipos = new Set();
    const dBase = base?.familiaAusente && it.temLetra ? defeito("", base) : null;
    if (dBase) { tipos.add(dBase.tipo); hits.push({ tipo: dBase.tipo, w: it.peso, id: it.id, txt: `${it.txt} — ${dBase.detalhe}` }); }
    if (it.acento) for (const ch of new Set([...it.visto].filter((c) => ACENTUADOS.includes(c)))) {
      const d = defeito(ch, med[`${it.pilha}|${it.peso}|${it.estilo}|${ch}`]);
      if (d && !tipos.has(d.tipo)) { tipos.add(d.tipo); hits.push({ tipo: d.tipo, w: it.peso, id: it.id, txt: `${it.txt} — ${d.detalhe}` }); }
    }
  }
  for (const [fam, { n, it }] of foraDaMarca) {
    hits.push({ tipo: "FORA-DA-MARCA", w: it.peso, id: it.id,
      txt: `${it.txt} — ${n} texto(s) em "${fam || it.pilha}", não na fonte da marca (${MARCA.familiasMarca.map(citarFamilia).join(" / ")})` });
  }
  return hits;
}

// ── a cena ───────────────────────────────────────────────────────────────────────────────────────────────────
const ESPELHOS = new Map();
function duracaoDoEspelho(arquivo, id) {
  // a régua do qc-rodape-contraste: o espelho.json da pasta acima de graphics/ (dirname(dirname(html)))
  const esp = join(dirname(dirname(resolve(arquivo))), "espelho.json");
  if (!ESPELHOS.has(esp)) {
    const dur = {};
    try { const e = lerJsonSemBom(esp); for (const s of e.segmentos || e.cenas || []) dur[s.id] = s.dur; } catch { }
    ESPELHOS.set(esp, dur);
  }
  return ESPELHOS.get(esp)[id];
}
function instantesDa(D, fracoes) {
  const molde = fracoes.map((k) => +(D * k).toFixed(2));
  const todos = new Map();
  for (const t of molde) todos.set(t.toFixed(3), t);
  for (let i = 0; ; i++) { const t = +(i * PASSO).toFixed(3); if (t > D + 1e-9) break; todos.set(t.toFixed(3), t); }
  return { molde, todos: [...todos.values()].sort((a, b) => a - b) };
}
function pastaDoProjeto(arquivo) {
  const rel = relative(join(RAIZ, "out"), resolve(arquivo));
  if (!rel || rel.startsWith("..") || isAbsolute(rel)) return null;
  const proj = rel.split(/[\\/]/)[0];
  return /^[a-z0-9][a-z0-9_-]*$/i.test(proj) ? join(RAIZ, "out", proj) : null;
}

// o NÃO MEDIDO que este portão decide no meio da medida (a mensagem vai inteira para a linha)
class NaoMedidoAqui extends Error { }
const naoMedir = (m) => { throw new NaoMedidoAqui(m); };
// pedidos à MapTiler sem resposta, sem falha e sem cancelamento até agora (contados um a um)
const emCurso = (mt) => mt.pendentes.size;
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));
// as regras da cena de mapa que se conferem ANTES de medir: nada se pede à MapTiler à toa
function motivoAntesDeMedir(res, estado) {
  if (!res.mapaNoFonte) return "a página tem mapa, mas o HTML não carrega a base do jeito que a régua reconhece (_vendor/perfil-mapa.js, _vendor/maplibre-gl.js, maplibre ou __aguardarMapa): o rAF foi congelado como numa cena sem mapa";
  if (!COM_PRE_CARGA) return "rodou sem a pré-carga da chave (--import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs), e o HTML carrega a base de mapa: a cena de mapa para no erro da chave";
  if (estado.erro) return `a cena de mapa declarou erro antes da medida (window.__erroCena): "${estado.erro}"`;
  if (!estado.rafNativo) return "o requestAnimationFrame da página não é o do navegador: o mapa não pintaria";
  if (estado.credencial && !estado.chave) return `a cena de mapa abriu sem a chave ${estado.credencial} (fora de out/<proj>/graphics/, ou sem a chave no arquivo da máquina): ela não cria o mapa`;
  if (!estado.mapa) return "o HTML carrega a base de mapa, mas a página não criou o mapa (nem window.__REGIE_MAPA nem maplibregl: o _media/_vendor ausente, ou a base parou antes de nascer)";
  return null;
}
// o que a pré-carga decidiu das páginas desta cena, neste contexto (depois do ctx.close, quando ela já fechou a conta)
function vereditoDaPreCarga(ctx, f) {
  if (!COM_PRE_CARGA) return null;
  const fn = globalThis[PRE_CARGA_PAGINAS];
  if (typeof fn !== "function") return { erro: "a pré-carga carregada não expõe o veredito por página (é de uma versão anterior)" };
  let ps;
  try { ps = fn(ctx) || []; } catch (e) { return { erro: `a pré-carga não deu o veredito das páginas (${e?.code || e?.name || "erro"})` }; }
  const alvo = resolve(f).toLowerCase();
  const daCena = ps.filter((x) => String(x.arquivo || "").toLowerCase() === alvo);
  const nm = daCena.find((x) => x.naoMedido);
  return {
    paginas: daCena.length, mapa: daCena.some((x) => x.mapa), chave: daCena.length ? daCena.every((x) => x.chave !== false) : null,
    capturas: daCena.reduce((s, x) => s + (x.capturas || 0), 0),
    // de onde vieram os tiles 2xx: com o endereço de um servidor, ou sem (respondidos por page.route: gancho de prova)
    tiles_2xx_servidor: daCena.reduce((s, x) => s + (x.tilesServidor || 0), 0),
    tiles_2xx_sem_servidor: daCena.reduce((s, x) => s + (x.tilesSemServidor || 0), 0),
    tiles_2xx_servidor_nao_lido: daCena.reduce((s, x) => s + (x.servidorNaoLido || 0), 0),
    nao_medido: nm ? nm.naoMedido : null, nao_medido_tipo: nm ? nm.tipo : null,
  };
}

async function medirCena(b, f) {
  const id = basename(f).replace(/\.html?$/i, "");
  const res = { f, cena: id, naoMedido: null, erro: null, pior: null, piorMolde: null, piorTodas: null, hits: null, hitsMolde: null, valores: {} };
  let bruto;
  try { bruto = readFileSync(resolve(f)); }
  catch (e) { res.naoMedido = `o arquivo não abriu (${e.code || e.message})`; return res; }
  const fonte = bruto.toString("utf8");
  res.sha1 = createHash("sha1").update(bruto).digest("hex");
  res.mapaNoFonte = BASE_DE_MAPA_NO_FONTE.test(fonte) || cenaEhDeMapa(f, fonte);
  const palco = await palcoDaCena(fonte);
  const ctx = await b.newContext({ viewport: { width: palco.w, height: palco.h }, deviceScaleFactor: 1 });
  res.maptiler = contarMapTiler(ctx);
  // molde:258: o til aborta os vídeos ("vídeo de fundo não importa"). Na cena de mapa, não: a s03 abre com o clipe
  // aéreo, e a base de mapa declara erro e não cria o mapa quando o vídeo não chega (medido em 04/10/2026)
  if (PORTAO === "til" && !res.mapaNoFonte) await ctx.route(/\.(mp4|webm|mov)(\?|$)/, (r) => r.abort());
  const p = await ctx.newPage();
  const errosJS = [];
  p.on("pageerror", (e) => errosJS.push(String(e.message || e).slice(0, 100)));
  const aguardar = { n: 0, max_ms: 0, estourou: [] };
  const erros = [];
  const anotarQuadro = (q, t) => {
    if (!q) return;
    if (q.assentou !== null) { aguardar.n++; aguardar.max_ms = Math.max(aguardar.max_ms, q.ms); if (!q.assentou) aguardar.estourou.push(t); }
    if (q.erro && !erros.includes(q.erro)) erros.push(q.erro);
  };
  // na cena de mapa, o instante que estourou o teto ou que trouxe erro para a cena ali: o resto não se pede à MapTiler
  const pararSeMapaFalhou = (mapaVivo, t, faltam) => {
    if (!mapaVivo) return;
    if (aguardar.estourou.length) naoMedir(`o mapa não assentou em ${TETO_MAPA_MS / 1000} s (window.__aguardarMapa) em t = ${t} s; a cena parou aí, sem pedir os ${faltam} instante(s) seguintes`);
    if (erros.length) naoMedir(`a cena de mapa declarou erro (window.__erroCena) em t = ${t} s: "${erros[0]}"`);
  };
  let estado = null, fim = null, carregou = true;
  let cdp = null;   // (rodada 3) a sessão CDP do rodapé (as raízes de sombra fechadas)
  try {
    await p.addInitScript(INICIAL, { mapa: res.mapaNoFonte });
    try { await p.goto(pathToFileURL(resolve(f)).href, { waitUntil: "load", timeout: TETO_LOAD_MS }); }
    catch (e) {
      if (!/timeout/i.test(String(e?.message || e))) throw e;
      carregou = false;
      // o molde sai NÃO MEDIDO quando o load não chega; a cena de mapa segue sem ele, como no render (o load dela não
      // chega quando um tile falha, e as regras de mapa pegam a falha)
      if (!res.mapaNoFonte) naoMedir(`a página não chegou ao load em ${TETO_LOAD_MS / 1000} s (o molde sai NÃO MEDIDO quando o goto estoura)`);
      await p.waitForLoadState("domcontentloaded").catch(() => { });
    }
    await p.evaluate(() => document.fonts.ready);
    const ready = await p.evaluate(() => typeof window.__ready !== "undefined");
    if (ready) await p.evaluate(() => Promise.race([Promise.resolve(window.__ready), new Promise((r) => setTimeout(r, 20000))]).then(() => 1, () => 1));
    await p.evaluate(NORMALIZAR_GANCHOS);
    if (!(await p.evaluate(PREPARAR))) throw new Error("window.__prepararCaptura() não terminou em 90 s");
    // o render congela o rAF depois do preparo na cena sem __ready; a de mapa fica com ele vivo
    if (!res.mapaNoFonte && !ready) await p.evaluate(() => { window.__rafLive = false; });
    estado = await p.evaluate(ESTADO);
    if (estado.erro) erros.push(estado.erro);
    res.mapa = estado.mapa;
    // cena de mapa: o HTML carrega a base OU a página tem o mapa (o cético de 04/10: a cena cujo mapa não nasceu saía
    // verde, porque as regras só valiam com o mapa na página)
    res.ehMapa = res.mapaNoFonte || estado.mapa;
    if (res.ehMapa) { const m = motivoAntesDeMedir(res, estado); if (m) naoMedir(m); }
    const mapaVivo = res.ehMapa;
    if (PORTAO === "rodape") await p.waitForTimeout(400);   // molde:136

    if (PORTAO === "rodape") {
      const sharp = (await importarDependencia("sharp")).default;
      const D = duracaoDoEspelho(f, id) || estado.duracao || 8;   // molde:150
      const inst = instantesDa(D, [0.35, 0.55, 0.75, 0.92]);
      res.instantes = inst;
      const molde = new Set(inst.molde);
      const amostras = [];   // as do molde (as folhas): as mesmas de antes da versão 4
      let fotos = 0, fotosSemMedida = 0, comCredito = 0;   // as fotos do recorte (a pré-carga conta as mesmas: o `conferir` compara)
      // (aqui, não no molde) o crédito com filhos: uma série de amostras por parte (a letra do bloco, cada filho)
      const porParte = new Map(), blocosVistos = new Map();
      const filhos = { fotos: 0, com_credito: 0, fotos_sem_medida: 0 };
      const folhas = { fotos: 0, com_credito: 0, fotos_sem_medida: 0 };
      // (aqui, não no molde; versão 5) o crédito por linha: uma série por linha de cada nó de texto, as raízes vistas e
      // cada crédito declarado (em que instantes apareceu, quantas linhas dele se mediram, onde ficou fora do alcance)
      const porLinha = new Map(), raizesVistas = new Map(), declarados = new Map();
      // cada linha visível no alcance (pelo nome da série), medida ou não: a linha de crédito declarado que aparece e
      // nunca se mede deixa a cena NÃO MEDIDO (o cético da rodada 1: o «1978» de 7 px passava em silêncio)
      const linhasNoAlcance = new Map();
      const linhasF = { fotos: 0, com_credito: 0, fotos_sem_medida: 0 };
      // (rodada 3) a medida só nos pixels das letras da linha que outra caixa de linha cobre: uma série a mais por linha
      // ("… · só dela"), da mesma foto; as raízes de sombra fechadas (pelo CDP) e as molduras visíveis com crédito declarado
      const porLinhaSo = new Map();
      const sombras = { doc: 0, em_moldura: 0 };
      const moldurasVistas = new Map();
      let caixasSemLetra = 0;
      // (rodada 4) os nós de texto com tinta e sem caixa de área positiva dentro de crédito declarado (somados nos
      // instantes) e as linhas medidas que a tinta deles toca (cada uma sai NÃO MEDIDO)
      let nosSemCaixa = 0;
      const linhasComTinta = new Map();
      try { cdp = await p.context().newCDPSession(p); }
      catch (e) { naoMedir(`não abri a sessão CDP que acha as raízes de sombra fechadas (${String(e?.message || e).slice(0, 80)})`); }
      const W = palco.w, H = palco.h;
      // a foto do recorte só com o mapa inteiro: nenhum pedido à MapTiler em curso (até TETO_EM_CURSO_MS)
      const esperarMapaInteiro = async (t) => {
        if (!mapaVivo) return;
        const ate = Date.now() + TETO_EM_CURSO_MS;
        while (emCurso(res.maptiler) > 0 && Date.now() < ate) await esperar(100);
        const n = emCurso(res.maptiler);
        if (n > 0) naoMedir(`em t = ${t} s, ${n} pedido(s) à MapTiler ainda em curso ${TETO_EM_CURSO_MS / 1000} s depois do quadro: o recorte do crédito podia sair sem o mapa inteiro por baixo`);
      };
      for (const [i, t] of inst.todos.entries()) {
        anotarQuadro(await p.evaluate(QUADRO, { t, mapa: mapaVivo, teto: TETO_MAPA_MS }), t);
        pararSeMapaFalhou(mapaVivo, t, inst.todos.length - i - 1);
        await p.waitForTimeout(160);   // molde:153
        // 1) o crédito do molde (as folhas): o mesmo achador, a mesma caixa, a mesma foto e a mesma medida de antes
        const box = await p.evaluate(ACHAR_CREDITO);
        if (box && !box.invisivel && box.w >= 8 && box.h >= 8) {   // com crédito no ar neste t
          await esperarMapaInteiro(t);
          const clip = clipDe(box, W, H);
          const buf = await p.screenshot({ clip });
          fotos++; folhas.fotos++;
          const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
          const m = medir(data, info.width, info.height);
          if (!m) { fotosSemMedida++; folhas.fotos_sem_medida++; }
          else {
            comCredito++; folhas.com_credito++;
            amostras.push({ ...m, opacidade: box.opacidade, t, texto: box.texto, doMolde: molde.has(t) });
          }
        }
        // 2) (aqui, não no molde) o crédito com filhos inline, na faixa do crédito: depois da foto do molde, uma foto por
        // parte visível (a letra do bloco, cada filho), com a caixa dela, e a mesma medida: o que o molde faz com a caixa
        // das folhas. (Um recorte de uma foto que unisse as partes muda até 1/255 em alguns pixels: medido em 04/10.)
        const cf = await p.evaluate(ACHAR_CREDITO_COM_FILHOS, FAIXA_CREDITO);
        for (const bl of cf.blocos) if (!blocosVistos.has(bl.bloco)) blocosVistos.set(bl.bloco, bl.texto);
        const vis = cf.partes.filter((q) => q.opacidade >= 0.05).map((q) => ({ ...q, clip: clipDe(q, W, H) }))
          .filter((q) => q.clip.width > 0 && q.clip.height > 0);
        for (const q of vis) {
          await esperarMapaInteiro(t);
          const buf = await p.screenshot({ clip: q.clip });
          fotos++; filhos.fotos++;
          const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
          const m = medir(data, info.width, info.height);
          if (!m) { fotosSemMedida++; filhos.fotos_sem_medida++; continue; }
          comCredito++; filhos.com_credito++;
          if (!porParte.has(q.parte)) porParte.set(q.parte, { texto: q.texto, amostras: [] });
          porParte.get(q.parte).amostras.push({ ...m, opacidade: q.opacidade, t, texto: q.texto, doMolde: molde.has(t) });
        }
        // 3) (aqui, não no molde; versão 5) o crédito por linha de cada nó de texto, depois das fotos das versões 3 e 4:
        // uma foto por linha visível no alcance, com a caixa da linha, e a mesma medida
        // (rodada 3) antes: as raízes de sombra fechadas vão à página pelo CDP, e as molduras visíveis se leem
        let sf = null;
        try { sf = await sombrasFechadas(cdp); }
        catch (e) { naoMedir(`em t = ${t} s, não consegui listar as raízes de sombra pelo CDP (${String(e?.message || e).slice(0, 80)}): o crédito numa raiz fechada não se acharia`); }
        sombras.doc = Math.max(sombras.doc, sf.doc); sombras.em_moldura = Math.max(sombras.em_moldura, sf.emMoldura);
        for (const mo of await molduras(p)) {
          if (!(mo.erro || (mo.declarados && mo.declarados.length) || sf.emMoldura)) continue;
          const k = `${mo.moldura} (${mo.url})`;
          if (!moldurasVistas.has(k)) moldurasVistas.set(k, { moldura: mo.moldura, url: mo.url, t: [], declarados: mo.declarados, erro: mo.erro });
          moldurasVistas.get(k).t.push(t);
        }
        const pl = await p.evaluate(ACHAR_CREDITO_POR_LINHA, FAIXA_CREDITO);
        caixasSemLetra += pl.caixas_sem_letra || 0;
        nosSemCaixa += pl.nos_sem_caixa || 0;
        for (const r of pl.raizes) if (!raizesVistas.has(r.raiz)) raizesVistas.set(r.raiz, { por: r.por, texto: r.texto });
        for (const d of pl.declarados) {
          if (!declarados.has(d.declarado)) declarados.set(d.declarado, { texto: d.texto, vistoEm: [], medidas: 0, fora: [], semMedida: [], gerado: [], naoTexto: [], porUse: [], emRecurso: null, parcial: [], semCaixa: [] });
          const dec = declarados.get(d.declarado);
          if (!dec.texto && d.texto) dec.texto = d.texto;   // o texto que a cena põe depois do 1º instante
          // aparece: a caixa dele ou a de um descendente (visível, opacidade ≥ 0,05, no quadro), ou uma linha dele
          if (d.visivel && !dec.vistoEm.includes(t)) dec.vistoEm.push(t);
          if (d.gerado.length) dec.gerado.push({ t, o_que: d.gerado });
          if (d.nao_texto.length) dec.naoTexto.push({ t, o_que: d.nao_texto });
          // (rodada 3) o <use> visível que o pinta de fora dele, o recurso do SVG em que mora, a letra em parte de outra cor
          if (d.por_use && d.por_use.length) dec.porUse.push({ t, o_que: d.por_use });
          if (d.em_recurso) dec.emRecurso ||= d.em_recurso;
          if (d.parcial && d.parcial.length) dec.parcial.push({ t, o_que: d.parcial });
          // (rodada 4) o nó com tinta e sem caixa de área positiva dentro dele
          if (d.sem_caixa && d.sem_caixa.length) dec.semCaixa.push({ t, o_que: d.sem_caixa });
        }
        for (const q of pl.linhas) {
          if (!q.visivel) continue;
          const dec = q.declarado ? declarados.get(q.declarado) : null;
          if (!q.alcance) { if (dec) dec.fora.push({ t, linha: q.linha, y: Math.round(q.y), texto: q.texto }); continue; }
          if (!linhasNoAlcance.has(q.linha)) linhasNoAlcance.set(q.linha, { texto: q.texto, declarado: q.declarado, vista: [], medidas: 0, porque: null });
          const la = linhasNoAlcance.get(q.linha);
          la.vista.push(t);
          const clip = clipDe(q, W, H);
          if (!(clip.width > 0 && clip.height > 0)) { la.porque ||= "recorte vazio"; if (dec) dec.semMedida.push({ t, linha: q.linha, porque: "recorte vazio" }); continue; }
          await esperarMapaInteiro(t);
          const buf = await p.screenshot({ clip });
          fotos++; linhasF.fotos++;
          const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
          const m = medir(data, info.width, info.height);
          if (!m) {
            fotosSemMedida++; linhasF.fotos_sem_medida++;
            const porque = `recorte de ${clip.width} × ${clip.height}, menos de 200 pixels`;
            la.porque ||= porque;
            if (dec) dec.semMedida.push({ t, linha: q.linha, porque });
            continue;
          }
          comCredito++; linhasF.com_credito++;
          la.medidas++;
          // (rodada 4) a tinta de um nó sem caixa de área positiva cai sobre esta linha medida: a medida não a separa
          if (q.tinta && q.tinta.length) {
            if (!linhasComTinta.has(q.linha)) linhasComTinta.set(q.linha, { texto: q.texto, t: [], de: new Set() });
            const lt = linhasComTinta.get(q.linha);
            lt.t.push(t); q.tinta.forEach((x) => lt.de.add(x));
          }
          // a linha conta para o dono e para todo crédito declarado em volta dele
          for (const k of q.declarados) { const d = declarados.get(k); if (d) d.medidas++; }
          if (!porLinha.has(q.linha)) porLinha.set(q.linha, { texto: q.texto, raiz: q.raiz, declarado: q.declarado, de: q.de, amostras: [] });
          porLinha.get(q.linha).amostras.push({ ...m, opacidade: q.opacidade, t, texto: q.texto, doMolde: molde.has(t) });
          // (rodada 3) a caixa de outra linha visível cobre esta: a mesma régua, só nos pixels das letras dela que nenhuma
          // outra caixa cobre (a letra apagada sob o ::first-line maior, sob o filho absoluto claro, na entrelinha apertada)
          if (q.sobre && q.celulas) {
            const so = medirSoDela(data, info, clip, q);
            if (so.m) {
              const k = `${q.linha} · só dela`;
              if (!porLinhaSo.has(k)) porLinhaSo.set(k, { texto: q.texto, raiz: q.raiz, declarado: q.declarado, de: q.de, amostras: [] });
              porLinhaSo.get(k).amostras.push({ ...so.m, opacidade: q.opacidade, t, texto: q.texto, doMolde: molde.has(t), pixels: so.n });
            }
          }
        }
      }
      // o pior que decide: o menor dos três "no ar" (o do molde nos instantes dele, o do molde em todas as amostras e o
      // do patamar), nas folhas e em cada parte de crédito com filhos; cada um fica também na linha. No empate, vale a
      // primeira: as folhas, depois as partes na ordem em que apareceram
      const daSerie = (xs) => ({ pior: piorQueDecide(xs, JANELA_S), piorMolde: piorNoAr(xs.filter((a) => a.doMolde)), piorTodas: piorNoAr(xs), piorPatamar: piorNoArPorPatamar(xs, JANELA_S) });
      const series = [{ origem: "folhas", ...daSerie(amostras) },
        ...[...porParte].map(([parte, s]) => ({ origem: `filhos: ${parte}`, parte, texto: s.texto, n: s.amostras.length, ...daSerie(s.amostras) }))];
      const nFilhos = series.length - 1;
      // (versão 5) as linhas vêm depois: no empate, vale o pior de antes
      series.push(...[...porLinha].map(([linha, s]) => ({ origem: `linha: ${linha}`, parte: linha, linha: true, texto: s.texto, raiz: s.raiz, declarado: s.declarado, de: s.de, n: s.amostras.length, ...daSerie(s.amostras) })));
      // (rodada 3) as séries "só dela" vêm por último: no empate, vale o pior de antes
      series.push(...[...porLinhaSo].map(([linha, s]) => ({ origem: `linha: ${linha}`, parte: linha, linha: true, so: true, texto: s.texto, raiz: s.raiz, declarado: s.declarado, de: s.de, n: s.amostras.length, ...daSerie(s.amostras) })));
      const menor = (campo) => {
        let m = null;
        for (const s of series) if (s[campo] && (!m || s[campo].razao < m.razao)) m = { ...s[campo], origem: s.origem };
        return m;
      };
      res.pior = menor("pior");
      res.piorMolde = menor("piorMolde");
      res.piorTodas = menor("piorTodas");
      res.piorPatamar = menor("piorPatamar");
      const f0 = series[0];
      // (versão 5) a linha de crédito declarado que apareceu no alcance e nunca se mediu, e a que se mediu e nunca ficou
      // "no ar" (nenhuma amostra com opacidade ≥ 0,15: o crédito está na tela e não se lê)
      const nuncaMedidas = [...linhasNoAlcance].filter(([, la]) => la.declarado && la.vista.length && !la.medidas)
        .map(([linha, la]) => ({ linha, declarado: la.declarado, texto: la.texto, t: la.vista[0], n: la.vista.length, porque: la.porque }));
      const nuncaNoAr = series.filter((x) => x.linha && !x.so && x.declarado && x.n && !x.pior)
        .map((x) => ({ linha: x.parte, declarado: x.declarado, texto: x.texto, opMax: Math.max(...porLinha.get(x.parte).amostras.map((a) => a.opacidade)), t: porLinha.get(x.parte).amostras[0].t }));
      res.valores = {
        amostras: inst.todos.length, com_credito: comCredito, fotos, fotos_sem_medida: fotosSemMedida,
        // a medida só do achador do molde: o que a versão 3 media, igual
        folhas: { ...folhas, pior: resumoPior(f0.pior), pior_todas: resumoPior(f0.piorTodas), pior_patamar: resumoPior(f0.piorPatamar), pior_molde: resumoPior(f0.piorMolde) },
        com_filhos: {
          ...filhos, faixa: FAIXA_CREDITO,
          blocos: [...blocosVistos].map(([bloco, texto]) => ({ bloco, texto })),
          partes: series.slice(1, 1 + nFilhos).map((s) => ({ parte: s.parte, texto: s.texto, amostras: s.n,
            pior: resumoPior(s.pior), pior_todas: resumoPior(s.piorTodas), pior_patamar: resumoPior(s.piorPatamar), pior_molde: resumoPior(s.piorMolde) })),
        },
        // (versão 5) o crédito por linha de cada nó de texto
        por_linha: {
          ...linhasF, limite_y: +(H * 0.55).toFixed(2),
          raizes: [...raizesVistas].map(([raiz, r]) => ({ raiz, por: r.por, texto: r.texto })),
          declarados: [...declarados].map(([declarado, d]) => ({ declarado, texto: d.texto, instantes_visto: d.vistoEm.length,
            primeiro_visto: d.vistoEm.length ? d.vistoEm[0] : null, linhas_medidas: d.medidas,
            fora_do_alcance: d.fora.slice(0, 5), n_fora_do_alcance: d.fora.length, sem_medida: d.semMedida.slice(0, 5), n_sem_medida: d.semMedida.length,
            instantes_com_texto_gerado: d.gerado.length, texto_gerado: d.gerado.slice(0, 3),
            instantes_com_conteudo_nao_texto: d.naoTexto.length, conteudo_nao_texto: d.naoTexto.slice(0, 3),
            linhas_nunca_medidas: nuncaMedidas.filter((x) => x.declarado === declarado).map((x) => x.linha).slice(0, 10),
            linhas_nunca_no_ar: nuncaNoAr.filter((x) => x.declarado === declarado).map((x) => x.linha).slice(0, 10),
            instantes_pintado_por_use: d.porUse.length, pintado_por_use: d.porUse.slice(0, 3), em_recurso: d.emRecurso,
            instantes_com_cor_parcial: d.parcial.length, cor_parcial: d.parcial.slice(0, 3),
            instantes_com_no_sem_caixa: d.semCaixa.length, no_sem_caixa: d.semCaixa.slice(0, 3),
            linhas_com_tinta_sem_caixa: [...linhasComTinta.keys()].filter((linha) => d.semCaixa.some((e) => e.o_que.some((o) => o.linhas.includes(linha)))).slice(0, 10) })),
          linhas: series.slice(1 + nFilhos).map((s) => ({ linha: s.parte, raiz: s.raiz, declarado: s.declarado, de: s.de, texto: s.texto, amostras: s.n, ...(s.so ? { so_dela: true } : {}),
            pior: resumoPior(s.pior), pior_todas: resumoPior(s.piorTodas), pior_patamar: resumoPior(s.piorPatamar), pior_molde: resumoPior(s.piorMolde) })),
          // (rodada 3) as raízes de sombra fechadas (o máximo num instante: as do documento, que o achador percorreu, e as
          // de dentro de molduras), as molduras visíveis com crédito declarado ou sem leitura, e as caixas sem letra (só
          // de espaço) que não viraram linha
          sombras_fechadas: sombras.doc, sombras_fechadas_em_moldura: sombras.em_moldura,
          molduras: [...moldurasVistas.values()].map((m) => ({ moldura: m.moldura, url: m.url, instantes: m.t.length, primeiro: m.t[0], declarados: m.declarados, erro: m.erro })),
          caixas_sem_letra: caixasSemLetra,
          // (rodada 4) os nós com tinta e sem caixa de área positiva dentro de crédito declarado (somados nos instantes),
          // e as linhas medidas que a tinta deles tocou
          nos_sem_caixa: nosSemCaixa,
          linhas_com_tinta_sem_caixa: [...linhasComTinta.keys()].slice(0, 10),
        },
      };
      // (versão 5) o crédito declarado que nenhum achador mede: NÃO MEDIDO com o nome dele (nunca some). Com uma
      // reprovação medida na cena, vale a reprovação, e a linha o cita. Os casos:
      //   . aparece fora do alcance (alguma linha visível com o topo acima dos 45 % de baixo);
      //   . aparece (a caixa dele ou a de um descendente, ou uma linha) e nenhuma linha dele se mediu (o texto numa raiz
      //     de sombra fechada, num <input>, desenhado num <canvas>…);
      //   . tem conteúdo visível que não é nó de texto (canvas, img, input…), em algum instante;
      //   . tem texto gerado por CSS visível (::before, ::after, ::marker, content), em algum instante;
      //   . uma linha dele aparece no alcance e nunca se mede (o recorte com menos de 200 pixels);
      //   . uma linha dele se mede e nunca fica "no ar" (opacidade sempre abaixo de 0,15);
      //   . (rodada 5) tem nó de texto com tinta e sem caixa de área positiva, em algum instante.
      const semMedida = [];
      const nomeDe = (k, d) => `o crédito declarado ${k} («${d.texto}»)`;
      for (const [k, d] of declarados) {
        if (d.fora.length) semMedida.push(`${nomeDe(k, d)} aparece fora do alcance do rodapé (topo acima de 55 % da altura, y < ${(H * 0.55).toFixed(0)}) em ${d.fora.length} linha(s), a 1ª em t = ${d.fora[0].t} s, y = ${d.fora[0].y}: «${d.fora[0].texto}»`);
        else if (d.vistoEm.length && !d.medidas) semMedida.push(`${nomeDe(k, d)} aparece em ${d.vistoEm.length} instante(s), a partir de t = ${d.vistoEm[0]} s, e nenhuma linha dele se mediu${d.semMedida.length ? ` (${d.semMedida[0].porque})` : " (nenhum nó de texto dele se pinta: o texto pode estar numa raiz de sombra fechada, num campo de formulário ou num canvas)"}`);
        if (d.naoTexto.length) semMedida.push(`${nomeDe(k, d)} tem conteúdo visível que não é texto (${d.naoTexto[0].o_que.join(", ")}) em ${d.naoTexto.length} instante(s), a partir de t = ${d.naoTexto[0].t} s: a medida por linha não o vê`);
        if (d.gerado.length) semMedida.push(`${nomeDe(k, d)} tem texto gerado por CSS visível (${d.gerado[0].o_que.join(", ")}) em ${d.gerado.length} instante(s), a partir de t = ${d.gerado[0].t} s: esse texto não é nó de texto, e a medida por linha não o vê`);
        // (rodada 3)
        if (d.porUse.length) semMedida.push(`${nomeDe(k, d)} se pinta por um <use> de fora dele (${d.porUse[0].o_que.join(", ")}) em ${d.porUse.length} instante(s), a partir de t = ${d.porUse[0].t} s: o clone do <use> não é nó de texto, e a medida por linha não o vê`);
        if (d.emRecurso) semMedida.push(`${nomeDe(k, d)} mora num recurso do SVG que se pinta por referência (${d.emRecurso}): a medida por linha não vê onde nem como ele se pinta`);
        if (d.parcial.length) semMedida.push(`${nomeDe(k, d)} tem letra pintada em parte de outra cor (${d.parcial[0].o_que.join(", ")}) em ${d.parcial.length} instante(s), a partir de t = ${d.parcial[0].t} s: a medida por linha mede a linha toda, e a parte apagada podia passar`);
        // (rodada 5) o nó de texto com tinta e sem caixa de área positiva dentro dele: a tinta existe, e a medida não sabe
        // onde ela cai (o letter-spacing negativo a leva tão longe quanto quiser: p4b1b e p4b1c do cético v5.1). O crédito
        // inteiro sai NÃO MEDIDO, seja onde for que a tinta caia; a zona só cita as linhas que ela pode tocar
        if (d.semCaixa.length) {
          const o = d.semCaixa[0].o_que[0];
          semMedida.push(`${nomeDe(k, d)} tem nó de texto com tinta e sem caixa de área positiva (${o.onde} «${o.texto}»${o.espacamento ? `, ${o.espacamento}` : ""}) em ${d.semCaixa.length} instante(s), a partir de t = ${d.semCaixa[0].t} s: a tinta dele existe, e a medida não sabe onde ela cai`);
        }
      }
      for (const m of moldurasVistas.values()) {
        semMedida.push(`a moldura ${m.moldura} (${m.url}) aparece em ${m.t.length} instante(s), a partir de t = ${m.t[0]} s, ${m.erro ? `e não se lê (${m.erro})` : m.declarados && m.declarados.length ? `com crédito declarado dentro («${m.declarados[0]}»)` : "e há raiz de sombra fechada dentro de moldura"}: o portão não mede dentro de moldura`);
      }
      for (const x of nuncaMedidas) semMedida.push(`a linha ${x.linha} («${x.texto}») do crédito declarado aparece no alcance em ${x.n} instante(s), a partir de t = ${x.t} s, e nunca se mediu (${x.porque})`);
      for (const x of nuncaNoAr) semMedida.push(`a linha ${x.linha} («${x.texto}») do crédito declarado aparece, a partir de t = ${x.t} s, e nunca fica no ar: a opacidade chega no máximo a ${x.opMax.toFixed(2)}, abaixo de 0,15`);
      // (rodada 4)
      for (const [linha, x] of linhasComTinta) semMedida.push(`a linha ${linha} («${x.texto}») se mediu em ${x.t.length} instante(s), a partir de t = ${x.t[0]} s, com a tinta de um nó de texto de crédito declarado sem caixa de área positiva por cima ou por baixo (${[...x.de].slice(0, 2).join(", ")}): a medida não separa a letra dela dessa tinta`);
      res.declaradosSemMedida = semMedida;
      if (semMedida.length && !(res.pior && res.pior.razao < PISO)) res.naoMedido = semMedida.join("; ");
      else if (!res.pior) {
        if (errosJS.length) res.naoMedido = `nenhum crédito achado E a página tem erro de JS (${errosJS[0]})`;
        else res.erro = "sem crédito de rodapé";
      }
    } else {
      const dur = estado.renderAt && estado.duracao > 0 ? estado.duracao : 0;   // molde:270
      const inst = dur ? instantesDa(dur, [0, 0.25, 0.5, 0.75, 1]) : { molde: [null], todos: [null] };
      res.instantes = inst;
      const molde = new Set(inst.molde);
      const vistosTodos = new Map(), vistosMolde = new Map();
      for (const [i, t] of inst.todos.entries()) {
        if (t != null) {
          anotarQuadro(await p.evaluate(QUADRO, { t, mapa: mapaVivo, teto: TETO_MAPA_MS }), t);
          pararSeMapaFalhou(mapaVivo, t, inst.todos.length - i - 1);
        }
        const itens = await p.evaluate(COLETAR_TEXTOS, { ACENTUADOS });
        juntarVistos(vistosTodos, itens.out);
        if (molde.has(t)) juntarVistos(vistosMolde, itens.out);
        // molde:320
        if (t === inst.todos[0] && !itens.textos && errosJS.length) throw new Error(`página sem texto nenhum e com erro de JS (${errosJS[0]}) — não dá para separar cena sem texto de cena que não montou`);
      }
      const combos = combosDe(vistosTodos);
      const med = combos.size ? await medirNaPagina(p, [...combos.values()]) : {};
      res.hits = acharDefeitos(vistosTodos, med);
      res.hitsMolde = acharDefeitos(vistosMolde, med);
      res.valores = {
        amostras: inst.todos.length, textos: vistosTodos.size, textos_nos_instantes_do_molde: vistosMolde.size, combinacoes: combos.size,
        letras: [...combos.values()].filter((c) => c.ch).map((c) => {
          const m = med[c.chave] || {};
          return { ch: c.ch, familia: m.familia, peso: c.peso, estilo: c.estilo, reserva: !!m.reserva, familia_ausente: !!m.familiaAusente,
            ...(m.til ? { til: { defeito: m.til.defeito ?? null, iou: m.til.iou ?? null, ondulacao: m.til.ondulacao ?? null } } : {}),
            ...(m.cedilha != null ? { cedilha: m.cedilha } : {}) };
        }),
      };
    }
    fim = await p.evaluate(ESTADO).catch(() => null);
    if (fim?.erro && !erros.includes(fim.erro)) erros.push(fim.erro);
  } catch (e) {
    res.naoMedido = e instanceof NaoMedidoAqui ? e.message : String(e.message || e).replace(/\s+/g, " ").slice(0, 160);
  }
  if (cdp) await cdp.detach().catch(() => { });
  await ctx.close().catch(() => { });
  res.carregou = carregou;
  res.aguardar = aguardar;
  res.erroCena = erros[0] || null;
  res.errosMapa = fim?.errosMapa ?? estado?.errosMapa ?? null;
  res.chave = estado ? (estado.credencial ? estado.chave : null) : null;
  res.ehMapa = res.mapaNoFonte || !!estado?.mapa;
  res.emCursoNoFim = emCurso(res.maptiler);
  res.preCarga = vereditoDaPreCarga(ctx, f);
  // a cena de mapa só vale medida com o mapa (as regras da pré-carga, aqui também)
  if (!res.naoMedido && res.ehMapa) {
    const mt = res.maptiler;
    if (!estado) res.naoMedido = "a página não chegou a ser lida";
    else if (motivoAntesDeMedir(res, estado)) res.naoMedido = motivoAntesDeMedir(res, estado);
    else if (res.erroCena) res.naoMedido = `a cena de mapa declarou erro (window.__erroCena): "${res.erroCena}"`;
    else if (res.errosMapa > 0) res.naoMedido = `o MapLibre acusou ${res.errosMapa} erro(s) na cena (window.__errosMapa)`;
    else if (aguardar.estourou.length) res.naoMedido = `o mapa não assentou em ${TETO_MAPA_MS / 1000} s (window.__aguardarMapa) em t = ${aguardar.estourou.join(", ")} s`;
    else if (somar(mt.respostas_erro) || somar(mt.falhas)) res.naoMedido = `a MapTiler não serviu o mapa: ${[somar(mt.respostas_erro) ? `HTTP ${resumir(mt.respostas_erro)}` : "", somar(mt.falhas) ? `falha de rede ${resumir(mt.falhas)}` : ""].filter(Boolean).join(" e ")}, em ${mt.pedidos} pedido(s)`;
    else if (!mt.tiles_2xx) res.naoMedido = `nenhum tile da MapTiler chegou com resposta 2xx (${mt.pedidos} pedido(s)): a cena foi medida sem a base de mapa`;
    else if (!fim) res.naoMedido = "não consegui reler a página no fim da medida";
    else if (res.preCarga?.erro) res.naoMedido = res.preCarga.erro;
    else if (res.preCarga && !res.preCarga.paginas) res.naoMedido = "a pré-carga não vigiou a página desta cena: a medida não tem a conferência dela";
  }
  // o que a pré-carga decidiu da página vale também aqui, com ou sem mapa: a linha diz o mesmo que a saída do processo
  if (!res.naoMedido && res.preCarga?.nao_medido) res.naoMedido = `a pré-carga da chave não aceitou a página (${res.preCarga.nao_medido_tipo}): ${res.preCarga.nao_medido}`;
  return res;
}

// ── a linha do jsonl ─────────────────────────────────────────────────────────────────────────────────────────
function veredito(res) {
  if (res.naoMedido) return { v: NAO_MEDIDO, txt: `NÃO MEDIDO — ${res.naoMedido}` };
  if (PORTAO === "rodape") {
    const regra = (a) => nomeDaRegra(a.regra);
    const filho = deFilhos(res.pior) ? `; crédito com filhos: ${deFilhos(res.pior)}` : deLinha(res.pior) ? `; crédito por linha: ${deLinha(res.pior)}` : "";
    const semMedida = res.declaradosSemMedida?.length ? ` — e NÃO MEDIDO: ${res.declaradosSemMedida.join("; ")}` : "";
    if (res.pior && res.pior.razao < PISO) return { v: 1, txt: `${res.pior.razao.toFixed(2)}:1 @ ${res.pior.t} s (${regra(res.pior)}${filho}), abaixo do piso ${PISO}:1 — “${res.pior.texto}”${semMedida}` };
    if (res.pior) return { v: 0, txt: `${res.pior.razao.toFixed(2)}:1 @ ${res.pior.t} s (${regra(res.pior)}; piso ${PISO}:1${filho})` };
    return { v: 0, txt: res.erro || "sem crédito de rodapé" };
  }
  if (res.hits?.length) return { v: 1, txt: res.hits.map((h) => `${h.tipo}@${h.w} ${h.id}: ${h.txt}`).join(" · ").slice(0, 300) };
  return { v: 0, txt: `nenhum glifo defeituoso nem texto fora da marca em ${res.valores.textos ?? 0} texto(s)` };
}
// `origem` (versão 4): "folhas" (o achador do molde) ou "filhos: <parte>" (o crédito com filhos)
const resumoPior = (a) => a ? { razao: a.razao, Lfundo: a.Lfundo, Ltexto: a.Ltexto, t: a.t, opacidade: a.opacidade, coberturaFundo: a.coberturaFundo, texto: a.texto, ...(a.regra ? { regra: a.regra } : {}), ...(a.origem ? { origem: a.origem } : {}) } : null;
// (versão 4) a parte do crédito com filhos que deu o pior, para a saída; nada quando o pior veio das folhas
const deFilhos = (a) => (a && typeof a.origem === "string" && a.origem.startsWith("filhos: ") ? a.origem.slice(8) : null);
// (versão 5) a linha do crédito por linha que deu o pior; nada quando o pior veio das folhas ou das partes
const deLinha = (a) => (a && typeof a.origem === "string" && a.origem.startsWith("linha: ") ? a.origem.slice(7) : null);
function gravarLinha(res, vd) {
  const proj = pastaDoProjeto(res.f);
  if (!proj) { aviso(`${res.cena}: a cena não está dentro de out/<proj>/, e a linha não foi gravada`); return; }
  const mt = res.maptiler || {};
  const agora = new Date();
  const linha = {
    versao: VERSAO, portao_sha256: PORTAO_SHA256,
    quando: horaBrasilia(agora), quando_utc: agora.toISOString(), fuso: "America/Sao_Paulo", pid: process.pid,
    portao: PORTAO, cena: res.cena, arquivo: relative(RAIZ, resolve(res.f)).split("\\").join("/"),
    sha1: res.sha1 || null, hash: res.sha1 ? res.sha1.slice(0, 12) : null, hash_marca: HASH_MARCA,
    regua_molde: REGUA_MOLDE[PORTAO],
    pre_cargas: PRE_CARGAS,
    passo: PASSO, instantes: res.instantes ? { n: res.instantes.todos.length, molde: res.instantes.molde } : null,
    mapa_no_fonte: !!res.mapaNoFonte, mapa: !!res.mapa, eh_mapa: !!res.ehMapa, chave: res.chave, pre_carga: COM_PRE_CARGA, carregou: res.carregou ?? null,
    veredito: vd.v, veredito_txt: vd.txt,
    // rodapé: `pior` é o que decide (a regra diz qual dos três "no ar" o achou: molde, todas ou patamar); `pior_todas`
    // é o "no ar" do molde aplicado a todas as amostras, e `pior_patamar`, o do patamar
    valores: PORTAO === "rodape"
      ? { ...res.valores, pior: resumoPior(res.pior), pior_todas: resumoPior(res.piorTodas), pior_patamar: resumoPior(res.piorPatamar), janela_patamar_s: JANELA_S, piso: PISO, ...(res.erro ? { erro: res.erro } : {}),
        ...(res.declaradosSemMedida ? { declarados_sem_medida: res.declaradosSemMedida } : {}) }
      : { ...res.valores, achados: res.hits },
    molde: PORTAO === "rodape" ? { pior: resumoPior(res.piorMolde) } : { achados: res.hitsMolde },
    maptiler: {
      pedidos: mt.pedidos ?? 0, respostas: mt.respostas ?? 0, respostas_2xx: mt.respostas_2xx ?? 0, tiles_2xx: mt.tiles_2xx ?? 0,
      cancelados: mt.cancelados ?? 0, respostas_erro: mt.respostas_erro || {}, falhas: mt.falhas || {},
      em_curso_no_fim: res.emCursoNoFim ?? null,
      hora_inicio: mt.inicio ? horaBrasilia(mt.inicio) : null, hora_fim: mt.fim ? horaBrasilia(mt.fim) : null,
    },
    aguardar_mapa: res.aguardar || null,
    erro_cena: res.erroCena || null, erros_mapa: res.errosMapa,
    pre_carga_veredito: res.preCarga ?? null,
    ...(res.naoMedido ? { nao_medido: res.naoMedido } : {}),
  };
  try {
    mkdirSync(join(proj, "_tmp"), { recursive: true });
    appendFileSync(JSONL_DE(proj), semChave(JSON.stringify(linha)) + "\n");
  } catch (e) { aviso(`${res.cena}: não gravei a linha (${e.code || e.message})`); }
}
function linhaDoMapa(res) {
  if (!res.mapa) return `${res.cena} (${PORTAO}) — sem mapa na página${res.mapaNoFonte ? " (o HTML carrega a base, a página não a criou)" : ""}; ${res.instantes ? `${res.instantes.todos.length} instante(s), passo ${PASSO} s` : "nenhum instante medido"}` +
    `${res.maptiler?.pedidos ? `; ${res.maptiler.pedidos} pedido(s) à MapTiler` : ""}${res.naoMedido ? ` — NÃO MEDIDO: ${res.naoMedido}` : ""}`;
  const mt = res.maptiler;
  return `${res.cena} (${PORTAO}) — mapa: ${mt.tiles_2xx} tile(s) 2xx de ${mt.pedidos} pedido(s) à MapTiler` +
    `${somar(mt.respostas_erro) ? `, HTTP ${resumir(mt.respostas_erro)}` : ""}${somar(mt.falhas) ? `, falhas ${resumir(mt.falhas)}` : ""}${mt.cancelados ? `, ${mt.cancelados} cancelado(s)` : ""}; ` +
    `${res.instantes ? `${res.instantes.todos.length} instante(s), passo ${PASSO} s (com os ${res.instantes.molde.length} do molde)` : "não abriu"}; ` +
    `o __aguardarMapa voltou em ${res.aguardar?.n ?? 0} (máx. ${res.aguardar?.max_ms ?? 0} ms${res.aguardar?.estourou?.length ? `, estourou em ${res.aguardar.estourou.join(", ")} s` : ""})` +
    `${res.naoMedido ? ` — NÃO MEDIDO: ${res.naoMedido}` : ""}`;
}

// ── a rodada ─────────────────────────────────────────────────────────────────────────────────────────────────
if (!COM_PRE_CARGA) aviso("rodando sem a pré-carga da chave: a cena de mapa vai sair NÃO MEDIDO (use --import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs)");
else {
  const estranhas = (PRE_CARGAS || []).filter((n) => !PRE_CARGAS_DO_CANAL.includes(n));
  if (estranhas.length) aviso(`rodando com pré-carga que não é do canal (${estranhas.join(", ")}): a medida vale como prova de teste, e o conferir não a aceita como prova da cena`);
}
const b = await lancarChrome();
const resultados = [];
for (const f of arquivos) {
  const res = await medirCena(b, f);
  const vd = veredito(res);
  res.vd = vd;
  gravarLinha(res, vd);
  aviso(semChave(linhaDoMapa(res)));
  resultados.push(res);
}
await b.close();

// ── a saída, a do molde ──────────────────────────────────────────────────────────────────────────────────────
if (PORTAO === "rodape") {
  // molde:236-321
  const linhas = resultados.map((r) => ({ cena: r.cena, ...(r.pior || {}), erro: r.naoMedido ? `NÃO MEDIDO — ${r.naoMedido}` : r.erro, naoMedido: !!r.naoMedido, semMedida: r.declaradosSemMedida || [] }));
  const ruins = linhas.filter((l) => l.razao && l.razao < PISO && !l.naoMedido);
  const naoMedidas = linhas.filter((l) => l.naoMedido);
  const SAIDA = ruins.length ? 1 : naoMedidas.length ? NAO_MEDIDO : 0;
  if (JSONOUT) {
    console.log(JSON.stringify({ piso: PISO, passo: PASSO, linhas: linhas.map((l) => { const { doMolde, ...resto } = l; return resto; }) }, null, 1));
    process.exit(SAIDA);
  }
  console.log(`\n══ CONTRASTE DO CRÉDITO DE RODAPÉ · cenas soltas · ${linhas.length} cena(s) · piso ${PISO}:1 · portao-mapa, passo ${PASSO} s ══\n`);
  for (const l of [...linhas].sort((a, b2) => (a.razao || 99) - (b2.razao || 99))) {
    if (l.erro) { console.log(`  ·  ${l.cena.padEnd(34)} — ${semChave(l.erro)}`); continue; }
    const m = l.razao < PISO ? "✗" : l.razao < PISO * 1.4 ? "▲" : "✓";
    const op = l.opacidade < 0.95 ? ` op=${l.opacidade.toFixed(2)}` : "";
    console.log(`  ${m}  ${l.cena.padEnd(34)} ${l.razao.toFixed(2)}:1  @${String(l.t).padStart(5)}s${op}  “${(l.texto || "").slice(0, 38)}”${l.regra && l.regra !== "molde" ? `  (${nomeDaRegra(l.regra)}, fora dos instantes do molde)` : ""}${deFilhos(l) ? `  [crédito com filhos: ${deFilhos(l)}]` : ""}${deLinha(l) ? `  [crédito por linha: ${deLinha(l)}]` : ""}${l.semMedida?.length ? `  ⚠ e NÃO MEDIDO: ${semChave(l.semMedida.join("; "))}` : ""}`);
  }
  console.log("");
  if (ruins.length) {
    console.log(`  ✗ ${ruins.length} cena(s) ABAIXO de ${PISO}:1 — o crédito não lê sobre o que a arte pôs atrás.\n`);
    for (const l of ruins) {
      const fundoClaro = l.Lfundo > 0.18;
      const textoEscuro = l.Ltexto < l.Lfundo;
      if (fundoClaro && textoEscuro) {
        console.log(`  · ${l.cena} — ${l.razao.toFixed(2)}:1 · fundo L=${l.Lfundo.toFixed(3)} · texto L=${l.Ltexto.toFixed(3)} (TINTA ESCURA sobre papel claro)`);
        console.log(`      NÃO use scrim: escurecer o fundo de um texto escuro PIORA o contraste e mancha o card.`);
        console.log(`      Conserto: subir a opacidade da tinta escura do crédito (ex.: color-mix(in srgb, var(--fundo) 46%, transparent) → 72%),`);
        console.log(`      mantendo a hierarquia do card (manchete 100% > corpo ~92% > crédito ~72%).`);
        console.log(`      (validado nas s63/s69 de galaxia-arco-flecha, 10/ago: 46% → 72% levou 2,87 e 2,92 a 6,27 e 6,38:1)`);
        continue;
      }
      console.log(`  · ${l.cena} — ${l.razao.toFixed(2)}:1 · fundo L=${l.Lfundo.toFixed(3)} · crédito em opacidade ${l.opacidade.toFixed(2)}`);
      if (fundoClaro) {
        console.log(`      FUNDO CLARO passou por baixo de um texto CLARO. O remédio da marca para texto sobre imagem é`);
        console.log(`      background: var(--texto-caixa) (e text-shadow: var(--texto-sombra)), que o tokens.css do canal já traz.`);
        console.log(`      Sem caixa na marca: scrim no \`::before\` do crédito —`);
        console.log(`      inset negativo, z-index:-1, radial-gradient escuro. No ::before para não deslocar o texto e para`);
        console.log(`      herdar de graça a opacidade animada do pai. Sombra NÃO resolve: marca a borda e deixa o miolo igual.`);
        console.log(`      (validado na s24 de dentro-do-sol, 09/ago: 2,85 → 10,01:1 · e nas s31/s34 de galaxia-arco-flecha,`);
        console.log(`      10/ago: 2,43 e 2,24 → 7,83:1 nas duas)`);
      } else {
        console.log(`      O fundo já é escuro — quem está apagado é o TEXTO. Scrim aqui não muda nada. Conserto:`);
        console.log(`      subir o patamar de opacidade (mantendo o fade-in) e/ou clarear a cor para a da paleta.`);
        console.log(`      (validado 09/ago: s29 op .50→.90 = 2,64 → 5,60:1 · s97 op .55→.90 + #5E7890→#9FB8D0 = 2,34 → 8,53:1)`);
      }
    }
    console.log("");
    if (naoMedidas.length) console.log(`  ⚠ e ${naoMedidas.length} cena(s) NÃO MEDIDA(S) (acima, com o motivo).\n`);
    process.exit(1);
  }
  if (naoMedidas.length) {
    console.log(`  ⚠ ${naoMedidas.length} cena(s) NÃO MEDIDA(S) — não abriram, não deu para distinguir de cena quebrada, ou a cena de mapa não foi medida com o mapa. Não medir não é ler.\n`);
    process.exit(NAO_MEDIDO);
  }
  const medidos = linhas.filter((l) => l.razao).length;
  console.log(medidos
    ? `  ✓ todos os ${medidos} crédito(s) medido(s) leem sobre o fundo real.\n`
    : `  ✓ nenhuma das ${linhas.length} cena(s) tem crédito no rodapé (nos 45% de baixo do quadro, nem com filhos na faixa do crédito, nem declarado, em nenhuma linha) — não há contraste de rodapé a medir.\n`);
  process.exit(0);
}

// til — molde:345-371
let afetados = 0;
const naoMedidos = [];
for (const r of resultados) {
  if (r.naoMedido) { console.log(semChave(`${r.f}\tERRO\t\t${r.naoMedido}`)); naoMedidos.push(r.f); continue; }
  if (r.hits.length) { afetados++; for (const h of r.hits) console.log(`${r.f}\t${h.tipo}\t${h.w}\t${h.id}\t${h.txt}`); }
}
console.error(`\n== ${afetados} arquivo(s) com glifo acentuado defeituoso ou fora da marca, de ${resultados.length} candidatos · marca: ${MARCA.familiasMarca.map(citarFamilia).join(" / ")} (${MARCA.origem}) · régua: provar-fonte do motor · portao-mapa, passo ${PASSO} s ==`);
if (naoMedidos.length) {
  console.error(`⚠ portao-mapa til: NÃO MEDIDO em ${naoMedidos.length} de ${resultados.length} — ${naoMedidos.slice(0, 5).join(", ")}${naoMedidos.length > 5 ? "…" : ""}`);
  console.error(`  (exit 2 = não medi. NÃO é reprovação: o arquivo não existe, não carregou, a cena de mapa não foi medida com o mapa, ou o Chrome saturou.)`);
  process.exit(afetados ? 1 : NAO_MEDIDO);
}
if (afetados) {
  console.error(`   TIL → troque o PESO ou a família; prove a fonte peso a peso:  node scripts/_audit-til.mjs --marca`);
  console.error(`   GLIFO-RESERVA / FAMILIA-AUSENTE → a fonte da marca não tem a letra, ou não carregou: confira as`);
  console.error(`        @font-face de marca/tokens.css e se a cena liga ../../../marca/tokens.css.`);
  console.error(`   FORA-DA-MARCA → a cena liga ../../../marca/tokens.css e escreve font-family: var(--fonte) (ou`);
  console.error(`        var(--fonte-sec))? Sem o link, o Chrome desenha na fonte padrão dele. Fonte diferente de`);
  console.error(`        propósito (um documento reproduzido): data-qc-fonte-livre no elemento — quem escreve assume.`);
  console.error(`   CEDILHA → o vão MEDIDO passou de ${REGUA.limCedilha}% do corpo. Troque a família e RE-MEÇA:`);
  console.error(`        a prescrição não é fé — se a família nova der o mesmo vão, o problema é outro.`);
  process.exit(1);
}
process.exit(0);
