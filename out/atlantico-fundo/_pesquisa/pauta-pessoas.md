# Pauta de pessoas: atlantico-fundo (vídeo 4), 28/10/2026

O `pesquisa-pessoas`, no passo `research`. O espelho é `out/atlantico-fundo/espelho.json` (sha256 `8899a33b…`, 75 cenas). Os dados completos
estão em `pauta-pessoas.json`, e a procedência de cada arquivo está no `_PROCEDENCIA.json` da pasta dele.

**Atualizada às 21:1x (4ª rodada, depois do `conferente-de-midia`, lote 4).** O conferente aprovou Brownson (s14) e Jamieson (s56) na
reconferência do lote 4 (20:59), com as buscas feitas, e o Vescovo (s52), que era arquivo novo do lote. Os dois voltaram de
`_media/_caca/_retirado/pessoa/` para `_media/pessoa/s14/` e `…/s56/`, cada um com o `_PROCEDENCIA.json` dele, sem mudar um byte do
retrato. A procedência só ganhou o campo `volta`. Os quatro retratos em `_media/pessoa/` têm `aprovado` casado pelo sha256. O espelho
desta rodada é o r3b (sha256 `2d411782…f468`).

Às 15:3x (2ª rodada, depois do lote 1), o conferente tinha aprovado Nares (s17) e reprovado Brownson e Jamieson. Os dois saíram então
para `_media/_caca/_retirado/pessoa/`. A retirada e a volta de cada um estão no item dele em `pauta-pessoas.json` (`retirada` e `volta`).

## Os retratos em `_media/pessoa/`

| Cena | Pessoa | Arquivo | Medida | Licença | Crédito na tela | Aviso do ano | Conferente |
|---|---|---|---|---|---|---|---|
| s14 | W. H. Brownson | `_media/pessoa/s14/willard-h-brownson-harris-ewing-1907-nh57975-commons.jpg` (NH 57975) | 3284×5322, 17,5 MP | domínio público nos EUA (Harris & Ewing, 1907) | nenhum | sim: a faixa da origem, 1900–1909 (o veredito sugere `Photo from about 1900–1909`; a forma é do redator) | aprovado (lote 4) |
| s17 | George Nares | `_media/pessoa/s17/george-nares-lock-whitfield-rijksmuseum-commons.jpg` | 7214×4534, 32,7 MP (a página dupla) | domínio público (Rijksmuseum; CC0) | nenhum | `Photo from the 1870s` (recomendado) | aprovado (lote 1) |
| s52 | Victor Vescovo | `_media/pessoa/s52/victor-vescovo-varcoe-2018-commons.jpg` | 2048×1152, 2,4 MP | CC BY-SA 4.0 (Caladan Oceanic, VRT) | o veredito dá `Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0` (ressalva 3) | nenhum (a foto é de 2018) | aprovado (lote 4) |
| s56 | Alan J. Jamieson | `_media/pessoa/s56/alan-j-jamieson-gnangcomapp-2022-commons.jpg` | 3000×4000, 12 MP | CC BY-SA 4.0 (Gnangcomapp) | `Gnangcomapp / Wikimedia Commons · CC BY-SA 4.0` | `Photo from 2022` | aprovado (lote 4) |

As medidas são do ffprobe. Nenhum retrato foi ampliado, e todos ficam abaixo de 40 MP.

| Cena | sha256 do retrato (antes e depois da volta) | sha256 da procedência (antes → depois da volta) |
|---|---|---|
| s14 | `fa90788bd1294a3ce5cce721d269218c5527f3f8f697da0ecdca41c61fd78c62` | `68ef2b0d…e7a8` → `bcb6691bfe31d79296ae0619297aac3df7bb6d80219168e9eb19f041f04c82b3` |
| s56 | `679f2962b235745684ee66c56409d145602c6ff1e003e8a617d3434cea1794b8` | `fceb0a29…a36d` → `7afa0f4d23866ea369a58c17bd545110314da1c60d3570f4418e166e653c598c` |

O `id` dos dois vereditos do lote 4 ainda é o caminho em `_retirado`, de quando eles foram julgados. No retrato, o veredito casa pelo
sha256 do arquivo, que é o mesmo.

## Os retirados

Nenhum. `_media/_caca/_retirado/pessoa/` ficou vazia.

## A janela de cada card (o quadro de 932 × 932 px)

| Cena | Janela | Escala | O que fica fora |
|---|---|---|---|
| s14 | x 400–2900, y 300–2800 | 0,37x | a dragona de contra-almirante e a legenda impressa ("REAR-ADMIRAL…"), que o card não mostra porque diz o cargo de 1883 |
| s17 | x 1450–2750, y 1250–2550 | 0,72x | a página de texto, à direita. Nos cantos aparece o passe-partout creme do oval |
| s52 | x 800–1952, y 0–1152 | 0,81x | — (uma gota d'água pendurada no alto entra na janela) |
| s56 | x 1000–1950, y 600–1550 (a de cima dos bolsos, que o conferente recomenda) | 0,98x | o brasão da UWA e o distintivo da Minderoo. A janela da 1ª rodada (x 1025–2125, y 650–1750, 0,85x) os mostra |

Olhei de novo as janelas de s14 e s56 nesta rodada, feitas do próprio arquivo (`_tmp/pesquisa-pessoas/ver/r4-*`). Nas duas, o rosto
fica inteiro.

## Nome e cargo, como a fonte os dá

O cargo é o da época do fato. A forma final do texto é do `redator-de-tela`.

- **s14: W. H. BROWNSON**, Lieutenant-Commander, U.S. Navy (1883).
  - **A fonte do comando do Blake passou a ser a primária**: a nota biográfica do NHHC, lida pela Sala no navegador do app em
    28/10/2026, às 15:2x (`_tmp/pesquisa-pessoas/nhhc-brownson-2026-10-28.md`, §3), em
    <https://www.history.navy.mil/content/history/nhhc/research/archives/Collections/personal-donated-collections/pd-b/brownson-willard-h.html>:
    "In 1881, he was ordered to the Coast and Geodetic Survey as a Lieutenant Commander where he commanded the ship Blake until 1884."
  - O relatório do USC&GS de 1883 (S11) apoia: "Lieut. Commander W. H. Brownson, U. S. N.", no comando do Blake desde 01/10/1882.
  - A Wikipedia fica só como apoio.
  - Nunca "Rear Admiral" nem "Captain": são os postos das fotos.
- **s17: Capt. George Nares**, Captain, Royal Navy, no comando do HMS Challenger em 1872–1874.
  - A fonte é a página impressa ao lado do retrato, no próprio arquivo: "From 1872 down to the end of 1874 Captain Nares was in command of Her Majesty's ship 'Challenger'".
  - O "Sir" e o "K.C.B." são de 1876 e não vão à tela.
- **s52: VICTOR VESCOVO**, explorer, Five Deeps Expedition (release de 21/12/2018: "explorer Victor Vescovo").
- **s56: ALAN J. JAMIESON**, School of Natural and Environmental Sciences, Newcastle University (2019), pela afiliação do artigo (S02).
  O release da Newcastle de 17/04/2019 o chama de "Chief Scientist on the Five Deeps Expedition and a senior lecturer at Newcastle University".
- **s56: HEATHER A. STEWART**, British Geological Survey (2019), pela afiliação do artigo (S02). **Sem retrato** (abaixo).

## s14: o NH 64332, procurado no Commons

A Sala leu o NHHC no navegador do app (`nhhc-brownson-2026-10-28.md`). O retrato com data mais perto de 1883 é o **NH 64332**:
- o título é "Captain Willard H. Brownson, USN", com a legenda "Commanding Officer USS ALABAMA, 1898.";
- a data na origem é 1890–1899;
- o NHHC oferece "Med (JPEG, 1280x1280px, 161KB)" e "High (TIFF, 5052x6168px, 30MB)";
- a página é
  <https://www.history.navy.mil/content/history/nhhc/our-collections/photography/numerical-list-of-images/nhhc-series/nh-series/NH-64000/NH-64332.html>.

**Ele não está no Wikimedia Commons.** Procurei pela API:
- `insource:"64332"`: 124 resultados, nenhum da Marinha;
- `"NH 64332"`: 0;
- `intitle:64332`: 40, nenhum;
- `"Willard H. Brownson"`: 150, com os mesmos retratos da 1ª rodada (LoC, NavSource e o NH 57975), nenhum de capitão nem dos anos 1890;
- `Brownson Alabama`: nenhum retrato;
- a Category:Willard H. Brownson: os mesmos.

Os dois retratos do NavSource no Commons (`Whbrownson.jpg` e `Willard H. Brownson.jpg`) são de contra-almirante, com a data "Sometime prior to
Brownson's 1907 retirement". Não são o NH 64332.

**Não tentei o NHHC por programa.** O download é da Sala, pelo navegador do app, com o "sim" do Lucas a uma lista:
- o TIFF de 30 MB chegaria cortado no navegador do app;
- o "Med" (161 KB) cabe. Se a foto for vertical, na proporção do TIFF, ele terá uns 1048×1280 px. A janela quadrada chega a uns 1048 px,
  acima dos 932 do card. É estimativa pela proporção, NÃO MEDIDA;
- a licença se lê na página do NHHC. Não a li. A página declara "Copyright Owner: Naval History and Heritage Command", e o autor está em branco;
- o aviso do ano sai de 1890–1899. A forma é do `redator-de-tela` (ex.: `Photo from the 1890s`).

Outras cópias abertas do NH 64332 (a conta do NHHC no Flickr, por exemplo) não procurei, porque estão fora das portas deste pedido.

### O "Med" baixado (3ª rodada, 16:0x): é ele, mas não enche o card

- **O download:** o Lucas respondeu "Sim, baixar (Recomendado)", e a Sala baixou o arquivo pelo navegador do app às 15:52. Ele está em
  `_tmp/navegador/nh64332/NH-64332-med-1280.jpg`, onde a Sala o pôs, e não foi movido.
  - sha256 `75e34edaf98978bdaef69fb463bf6390634b7ad4be282e8f7a2a544f4e8e7a62`, o mesmo que a Sala deu;
  - 1048×1280, 165.687 bytes, medido por ffprobe.
- **A licença:** a regra do NHHC diz "Most of the photos found in our collection are in the public domain and may be downloaded and used
  without permissions or special requirements (those which are not will be noted in the copyright section of the image description)", e a
  ficha não anota restrição. Domínio público, sem crédito na tela. Quem julga é o conferente.
- **A identidade, por visão: confere.** A legenda da origem o nomeia. O rosto bate com o NH 57975: o mesmo bigode de pontas viradas, o
  nariz, os olhos, as orelhas e o colarinho, uns 10 anos mais novo. Ele está de uniforme de capitão, no convés.
- **O tamanho: não enche o card sem ampliar.**
  - O retrato é de **corpo inteiro**, dentro de uma margem branca.
  - A foto ocupa uns 750×1190 px, e a cabeça tem uns 135–165 px.
  - A maior janela quadrada sem a margem tem uns 750 px. No quadro de 932, ela iria ampliada 1,24×, do boné até abaixo das mãos.
  - Um busto pediria uns 3×.
  - A minha estimativa anterior ("encher o card de 932 sem ampliar") estava errada: supunha um retrato de busto.
- **Não entreguei** em `_media/pessoa/s14/`.
  - A regra do tamanho (identidade §5; roupa §5) diz que recorte que pede ampliação não é grande.
  - A exceção da foto pequena pede que nenhuma foto grande sirva. O NH 57975 é grande e, nas palavras do conferente, "serve".
- **Os caminhos**, que são da Sala:
  1. O TIFF "High" da mesma ficha (5052×6168, 30 MB). Um busto de uns 2000 px encheria o card a uns 0,47×. O navegador do app corta
     arquivo acima de uns 1,8 MB, então pede outro caminho de download.
  2. O NH 57975 (1900–1909) de volta pelo reconferir, com o texto do NHHC que a Sala copiou.
  3. O "Med" pela exceção da foto pequena (1,24×), só com decisão do Lucas.

### O caminho seguido (4ª rodada, 21:1x)

- **Foi o 2.** O conferente aprovou o NH 57975 no lote 4, e ele voltou a `_media/pessoa/s14/`.
- **O NH 64332 fica fora da entrega.**
  - O "Med" continua em `_tmp/navegador/nh64332/`, onde a Sala o pôs, e não se move.
  - No lote 4, o conferente o olhou só como prova da busca, sem julgá-lo.
- **O TIFF do NH 64332 só entra se o Lucas o baixar ele mesmo**, e aí com conferência nova (espelho r3b, s14; veredito do lote 4).

## s56: a busca do retrato de Jamieson de 2018–2019

Nenhum retrato dele de 2018–2019 serve. O detalhe está em `pauta-pessoas.json`, `retirados` › Alan J. Jamieson › `busca_do_ano`.

- **As fotos da Caladan Oceanic no Commons** (o Lucas as liberou às 15:0x):
  - são 13 arquivos (Richard Varcoe on behalf of Caladan Oceanic, CC BY-SA 4.0, VRT), achados por `insource:"Caladan"`,
    `insource:"Varcoe"` e o bilhete VRT do Vescovo;
  - nenhum nomeia Jamieson;
  - o único com gente além do Vescovo é "Skaf and Closp shortly before a launch.jpg", de 16/12/2018. A descrição não dá nome. Olhei a
    miniatura: três tripulantes de capacete, de costas ou vistos de cima, sem rosto. Não serve de retrato.
- **Newcastle University:**
  - achei um release de 17/04/2019, "Deep sea scientist breaks British depth record"
    (<https://www.ncl.ac.uk/press/articles/archive/2019/04/fivedeepsexpedition/>), com uma foto legendada "Dr Alan Jamieson";
  - a página a declara com 1200×686 px, sem autor e sem a data da foto;
  - a licença, lida na página legal (<https://www.ncl.ac.uk/info/legal/>): "Individuals are allowed to download or copy such materials for
    their own personal use only" e "Images must not be reproduced without permission being granted in advance";
  - sem licença para ir ao ar, e com 686 px de altura iria ampliada 1,36x no card. Não baixei;
  - o perfil de pessoal dele na Newcastle (ele saiu em 2021) não apareceu na busca.
- **UWA, notícia de 07/08/2019:** a imagem tem "PHOTO CREDIT:" em branco. Sem autor, sem data e sem licença. Não baixei.
- **O resto do Commons:** só as duas fotos de 29/09/2022 e as figuras do artigo.

**Conclusão:** o retrato de 2022 é, das fotos que servem, a do ano mais perto de 2019. Ele volta ao conferente em conferência nova, com esta
busca. Nada ficou sem conferir por recusa de site.

**4ª rodada:** o conferente o aprovou no lote 4 ("a busca pela de 2018–2019 (Caladan, Newcastle, UWA) não achou nenhuma que sirva"), e
ele voltou a `_media/pessoa/s56/`.

## Sem retrato: Heather A. Stewart (s56)

O card dela sai só com nome e cargo. A busca foi esta:

- **No Commons:**
  - a busca pelo nome trouxe só homônimas;
  - a categoria "Heather A. Stewart" tem só as duas figuras de batimetria do artigo.
- **No Wikidata:** a ficha Q56551098 não tem imagem.
- **Na BGS:**
  - o robots.txt libera tudo;
  - o perfil, no endereço que testei, deu 404;
  - a busca do site não traz resultado no HTML.
- **NÃO CONFERIDO:** o perfil da equipe da BGS, pelo navegador do app. Mesmo achado, o retrato só entra com data na origem (midia.md §7.2).

## As ressalvas, para o conferente e a Sala

1. **Brownson.** O retrato não é obra federal: entra por prazo vencido nos EUA (Harris & Ewing, 1907). Fora dos EUA, não conferi.
   Ele mostra o uniforme de contra-almirante, uns 24 anos depois de 1883.
   - O aviso diz a faixa que a origem dá, 1900–1909. Não vale o `Photo from the 1900s` que a procedência gravou na 1ª rodada (se lê
     como o século), nem `Photo from 1907` (é o ano do copyright impresso). A procedência guarda os dois textos antigos, e a `volta`
     dela diz que vale o veredito.
2. **Nares.** O Rijksmuseum está entre os acervos "não perguntados" de midia.md §7.3. O retrato de pessoa histórica entra pelo §7.2 ("museu, Wikimedia Commons com licença conferida"). O conferente aprovou.
3. **Vescovo.**
   - A pauta (§6) diz "Fora: a Five Deeps, que não é livre". Este arquivo é a própria Caladan Oceanic licenciando o retrato em CC BY-SA 4.0, com bilhete VRT (2019022710007903).
   - Desde 28/10/2026, 15:0x, o Lucas liberou o que a Caladan licenciou no Commons com VRT: "Pode usar, com crédito (Recomendado)".
   - O crédito da decisão do Lucas é "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0". Ele difere do que eu propus
     (`Richard Varcoe / Wikimedia Commons · CC BY-SA 4.0`). A forma final é do `redator-de-tela`.
4. **Jamieson.**
   - O retrato de 2022 é o fallback do ofício: Commons com licença explícita, e é a imagem P18 do Wikidata dele.
   - O logo da UWA aparece na camisa. A foto é de 2022, e o cargo do card é o de 2019 (Newcastle). Na janela de cima dos bolsos, que o
     conferente recomenda, o logo fica fora.
   - O arquivo foi girado conforme o EXIF e regravado. O sha256 do download original está na procedência.
