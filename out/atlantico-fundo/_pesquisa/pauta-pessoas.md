# Pauta de pessoas: atlantico-fundo (vídeo 4), 28/10/2026

O `pesquisa-pessoas`, no passo `research`. O espelho é `out/atlantico-fundo/espelho.json` (sha256 `8899a33b…`, 75 cenas). Os dados completos
estão em `pauta-pessoas.json`, e a procedência de cada arquivo está no `_PROCEDENCIA.json` da pasta dele.

**Atualizada às 15:3x (2ª rodada, depois do `conferente-de-midia`, lote 1).** O conferente aprovou Nares (s17) e reprovou Brownson (s14)
e Jamieson (s56). Os dois reprovados saíram de `_media/pessoa/` para `_media/_caca/_retirado/pessoa/s14/` e `…/s56/`, cada um com o
`_PROCEDENCIA.json` dele, sem mudar um byte. Vescovo (s52) ficou fora do lote 1 e ainda espera o conferente. Nenhuma cena cita um
arquivo sem `aprovado` casado pelo sha256.

## Os retratos em `_media/pessoa/`

| Cena | Pessoa | Arquivo | Medida | Licença | Crédito na tela | Aviso do ano | Conferente |
|---|---|---|---|---|---|---|---|
| s17 | George Nares | `_media/pessoa/s17/george-nares-lock-whitfield-rijksmuseum-commons.jpg` | 7214×4534, 32,7 MP (a página dupla) | domínio público (Rijksmuseum; CC0) | nenhum | `Photo from the 1870s` (recomendado) | aprovado (lote 1) |
| s52 | Victor Vescovo | `_media/pessoa/s52/victor-vescovo-varcoe-2018-commons.jpg` | 2048×1152, 2,4 MP | CC BY-SA 4.0 (Caladan Oceanic, VRT) | `Richard Varcoe / Wikimedia Commons · CC BY-SA 4.0` | nenhum (a foto é de 2018) | ainda não conferido |

As medidas são do ffprobe. Nenhum retrato foi ampliado, e todos ficam abaixo de 40 MP.

## Os retirados (em `_media/_caca/_retirado/pessoa/`)

| Cena | Arquivo | sha256 (antes e depois de mover) | Veredito | O que falta |
|---|---|---|---|---|
| s14 | `s14/willard-h-brownson-harris-ewing-1907-nh57975-commons.jpg` (NH 57975, 1900–1909) | `fa90788bd1294a3ce5cce721d269218c5527f3f8f697da0ecdca41c61fd78c62` | reprovado: o NHHC não tinha sido visto | o NH 64332 (1890–1899) baixado em "Med" não enche o card sem ampliar (abaixo): falta o TIFF, a volta deste ou uma decisão do Lucas |
| s56 | `s56/alan-j-jamieson-gnangcomapp-2022-commons.jpg` (29/09/2022) | `679f2962b235745684ee66c56409d145602c6ff1e003e8a617d3434cea1794b8` | reprovado: a busca de 2019 não tinha sido feita | nada: a busca foi feita e não achou foto de 2018–2019 que sirva. Este arquivo volta ao conferente com ela |

Os `_PROCEDENCIA.json` foram junto, sem mudança: o de s14 tem sha256 `68ef2b0d…e7a8`, e o de s56, `fceb0a29…a36d`.

## A janela de cada card (o quadro de 932 × 932 px)

| Cena | Janela | Escala | O que fica fora |
|---|---|---|---|
| s17 | x 1450–2750, y 1250–2550 | 0,72x | a página de texto, à direita. Nos cantos aparece o passe-partout creme do oval |
| s52 | x 800–1952, y 0–1152 | 0,81x | — (uma gota d'água pendurada no alto entra na janela) |

As janelas dos retirados, se eles voltarem:
- s14: x 400–2900, y 300–2800 (0,37x);
- s56: x 1025–2125, y 650–1750 (0,85x). O conferente sugere parar acima dos bolsos (950 px, y 600–1550), para tirar os logos da UWA e da Minderoo.

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

1. **Brownson.** O retrato retirado não é obra federal: entra por prazo vencido nos EUA (Harris & Ewing, 1907). Fora dos EUA, não conferi.
   Ele mostra o uniforme de contra-almirante, uns 24 anos depois de 1883.
2. **Nares.** O Rijksmuseum está entre os acervos "não perguntados" de midia.md §7.3. O retrato de pessoa histórica entra pelo §7.2 ("museu, Wikimedia Commons com licença conferida"). O conferente aprovou.
3. **Vescovo.**
   - A pauta (§6) diz "Fora: a Five Deeps, que não é livre". Este arquivo é a própria Caladan Oceanic licenciando o retrato em CC BY-SA 4.0, com bilhete VRT (2019022710007903).
   - Desde 28/10/2026, 15:0x, o Lucas liberou o que a Caladan licenciou no Commons com VRT: "Pode usar, com crédito (Recomendado)".
   - O crédito da decisão do Lucas é "Richard Varcoe, Caladan Oceanic / Wikimedia Commons · CC BY-SA 4.0". Ele difere do que eu propus
     (`Richard Varcoe / Wikimedia Commons · CC BY-SA 4.0`). A forma final é do `redator-de-tela`.
4. **Jamieson.**
   - O retrato de 2022 é o fallback do ofício: Commons com licença explícita, e é a imagem P18 do Wikidata dele.
   - O logo da UWA aparece na camisa. A foto é de 2022, e o cargo do card é o de 2019 (Newcastle).
   - O arquivo foi girado conforme o EXIF e regravado. O sha256 do download original está na procedência.
