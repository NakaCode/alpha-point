# Conferência de mídia: peru-agua, fluxo `midia`, 23/10/2026, tarefa `peru-agua-pesquisa-8` às 01:4x (Brasília)

Quatro rascunhos do `pesquisa-imagens`, ainda não entregues, para duas escolhas do Lucas de 23/10, 00:4x: **s46**, "Foto do bairro na
mesa (Recomendado)", e **s51**, "Gravura de 1717 (Recomendado)". Passo `art`; despachada pelo setor Pesquisa e mídia. O `entregar` só
roda sobre o `aprovado`, e casa pelo sha256.

**O laudo desta tarefa:** 4 vereditos novos, **4 aprovados**. Nenhum veredito anterior mudou.
**O laudo do arquivo inteiro:** 32 aprovados de 41 vereditos (2 reprovados, 7 trocar, 0 pendente_lucas); 1 com algo não conferido (de antes); recebidos: 41.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_media/_caca/s46/acervo-livre/s46-sjm-viviendas-laderas-2022-commons.jpg` (`87d60be0…`) | s46 b0 | Commons, Isabel Mamani, CC BY-SA 4.0 | **aprovado** | os morros de San Juan de Miraflores (a origem nomeia só o distrito), abril de 2022, 3840×2160; impressa na mesa ao lado do card, com "Photo from 2022"; nada a liga à casa dela |
| `_media/_caca/s46/acervo-livre/s46-sjm-viviendas-bloques-2022-commons.jpg` (`0fad36c3…`) | s46 b0 | Commons, Isabel Mamani, CC BY-SA 4.0 | **aprovado** | casas sobre a encosta de pedra do distrito, abril de 2022, 3840×2160; reserva ou 2ª foto na mesma mesa, com "Photo from 2022"; o cartaz e a faixa ao fundo não se leem |
| `_media/_caca/s51/acervo-livre/s51-frezier-rade-callao-1717-jcb-commons.jpg` (`c9a32c92…`) | s51 b2 | Commons, John Carter Brown Library, domínio público | **aprovado** | a carta gravada da baía do Callao de Frézier, edição de Londres de 1717; atesta o porto bom pelo sim do Lucas; recorte de 1052×603, miniatura de ~900 px, rótulo "Engraved chart, 1717" |
| `_media/_caca/s51/acervo-livre/s51-frezier-rade-callao-1713-bnf-commons.jpg` (`8a085a21…`) | s51 b2 | Commons, BnF/Gallica, domínio público | **aprovado** | a mesma gravura, a cópia mais nítida; a origem a data de 1713, então o rótulo leva 1713, nunca 1717; reserva da JCB, com o carimbo fora do recorte |

**As frases.**
- **s46** (`words.json` 564,16–574,6 s; `roteiro-narrador.md`, linha 66): "Catalina Naupa, 59, told the news agency AFP in March 2025
  that her water comes by truck. "There are worms in the bottom of the tank," she said." A foto pousa no beat 0 (0–7,9 s), ao lado do
  card, e recua no beat 1, quando entra o cartão da fala. A janela de 7,9 s é **provisória**: a regência (sha256 `679d2809…`) ainda
  diz "card sem foto".
- **s51** (`words.json` 663,6–669,4 s; linha 74): "Then the port: in 1535, the Spanish put their capital near a very good one." A
  miniatura entra em "port:" (664,22 s) e fica até o fim do beat 2: 5,2 s, **provisória**, porque a regência ainda diz "NO thumbnail".

**s46, o que vale para as duas fotos.**
- **Contexto: passa.** A origem nomeia o distrito do card, e o quadro mostra os morros: casas de tijolo subindo a areia e a pedra,
  escadarias amarelas, neblina. Nada no quadro contradiz o sul de Lima.
  - **Não é a casa dela.** São encostas inteiras, sem casa em destaque, e a origem não nomeia nada abaixo do distrito.
  - **Ninguém no papel dela.** Na laderas não há ninguém; na bloques, gente só em vultos de poucos pixels.
  - **O ano.** As duas são de 9 de abril de 2022; a fala é de março de 2025. Entram com "Photo from 2022" (identidade §6). São as mais
    perto de 2025 entre as que mostram o assunto. A de 2024, descartada, é mata na neblina, sem casa, e nomeia Pamplona.
- **Licença: passa.** CC BY-SA 4.0, obra da própria autora, lida na página pela API do Commons. O sha1 de cada arquivo é o do
  original da página.
- **Técnica: passa.** 3840×2160 cada, a única versão da origem. Vão impressas na mesa, até 1,4×.
- **Repetição: passa.** sha256 e URL únicos. Juntas na mesma mesa, é composição: a mesma autora e o mesmo dia, mas outra encosta e
  outro enquadramento.
- **A tela pode dizer:** a etiqueta "San Juan de Miraflores", se houver; "Photo from 2022"; o crédito `Isabel Mamani / Wikimedia
  Commons · CC BY-SA 4.0`.
- **A tela não pode dizer:**
  - nada que ligue a foto à casa, à rua ou ao bairro dela: nem "her home" ou "where she lives", nem seta ou círculo numa casa;
  - Pamplona, Pamplona Alta ou qualquer nome abaixo do distrito;
  - nenhum zoom que isole uma casa ou um tanque (a fala do beat 1 é "the tank"; na bloques há um tanque preto num telhado, miúdo).
- **Na bloques,** um cartaz com dois rostos e um número, e uma faixa com um peixe azul, não se leem nem em resolução cheia. Na mesa
  ficam com poucas dezenas de pixels; o editor não aproxima a câmera deles.

**s51, as duas cópias da carta.** São a mesma gravura, a "planche XXVI" da "pag. 173" do livro de Frézier: só uma das duas vai à
cena. As duas juntas, ou uma delas noutra cena, seriam repetição.
- **Contexto: passa.** É o Callao, o porto da fala. A carta atesta o "very good one": o ancoradouro, com âncoras e sondagens, fechado
  pela Isla San Lorenzo e pela Isla del Callao. É documento de outra data, e entra pela regra do documento que atesta o fato, com o
  rótulo na tela todo o tempo (identidade §5), pelo sim do Lucas a esta carta.
- **A data e o rótulo.**
  - O levantamento é de 1713: o cartucho traz "Frezier 1713" gravado. A edição francesa é de 1716, e a inglesa, de 1717.
  - **JCB:** a origem dá 1717 (Londres, 1717), e "Engraved chart, 1717" é exato. O recorte tira o cartucho com o 1713.
  - **BnF:** a origem dá só 1713, sem a edição. A folha tem "pag. 173", então foi impressa em 1716 ou depois, mas o rótulo só pode
    levar o ano que a origem diz: 1713 (ex.: "Chart by Frézier, 1713"; a grafia é do redator e do verificador). Se a cena usar esta
    cópia, a Sala avisa o Lucas que a tela diz 1713, e não o 1717 da opção que ele escolheu.
  - Nenhuma das duas pode dizer 1535, "Spanish chart" ou "Photo from".
- **Licença: passa.** Domínio público nas duas: PD-old-100 na JCB, PD-France e PD-US-expired na BnF. Não é da coleção Rumsey. O
  crédito na tela é **nenhum** (identidade §7); o que vai à tela é o rótulo.
- **Técnica: passa.**
  - **JCB:** 1784×1207. O recorte proposto tem 1052×603 px; na miniatura do tamanho da de Caral (900 px no palco 4K), vai a 0,86×, e o
    teto é 1.473 px (1,4×).
  - **BnF:** 5984×4119; o recorte tem uns 3231×1730 px. O carimbo vermelho e as cotas a lápis ficam fora dele.
- **Ela se lê pequena?** A 900 px, sim: a costa curva, a vila, a ponta e as duas ilhas fechando o ancoradouro. A 450 px (o 1080p),
  a forma ainda se reconhece, mas o texto não, e o sépia sobre sépia da JCB tem pouco contraste. A BnF, traço preto sobre cinza-claro,
  lê-se melhor. Para quem monta: não abaixo de ~900 px no palco 4K.

## Para o Lucas pesar

Nada nesta tarefa. A escolha das duas cenas já é dele (23/10, 00:4x). Só um aviso, se a cena usar a cópia da BnF: a tela dirá 1713,
e não 1717.

## Para reconferir no navegador do app

Nada nesta tarefa.

## Para trocar

Nada nesta tarefa. Ficaram fora da conferência, por descarte da pesquisa (não julgados, sem veredito, não vão à cena):
- **s46:** `s46-pamplona-sjm-2020-commons.jpg`, `s46-lomas-de-pamplona-2024-commons.jpg` e `s46-cerros-sjm-2019-commons.jpg`;
- **s51:** `s51-frezier-rade-callao-1717-planche-xxvi-gray-commons.jpg` e `s51-frezier-planche-xxvii-callao-1717-gray-commons.jpg`.

**Avisos do conjunto da cena** (para o `regente-de-imagem` e o `editor-de-arte`, não são critério):
- **s46:** a foto parada fica 7,9 s no beat 0, acima dos 6 s do plano parado (identidade §4.3). A câmera derivando, ou a 2ª foto
  pousando na mesma mesa, resolve.
- **s51:** o trecho de "port:" já tem três textos (Callao, 1535, Lima). Com a miniatura e o rótulo, são quatro, o teto. As entradas
  têm de ser escalonadas (fotos-cetico.json).
- **s51:** como na s46, a regência das duas cenas ainda não tem esta mídia. Quando tiver, o Claude central me despacha de novo sobre
  estes `aprovado` de janela provisória.

## Divergências entre a marca e o ofício

Nenhuma nesta tarefa.

## Contas desta tarefa

- **Imagens abertas: 5 de 7.**
  - as cópias de 1920 px das duas fotos da s46;
  - um recorte em resolução cheia do cartaz e da faixa da bloques;
  - a folha com as duas cartas inteiras, lado a lado;
  - a folha com os dois recortes da s51, a 900 e a 450 px.

  Tudo em `out/peru-agua/_tmp/conferencia/p8/`.
- **Rede:** 4 pedidos à API do Commons, um por vez, com o User-Agent do canal, todos respondidos com 200. As respostas estão em
  `out/peru-agua/_tmp/conferencia/p8-api-{1..4}.json`. Nenhum `WebFetch`.
- **Olhos novos:** não. O despacho mandou ler antes o relato, o `fotos-cetico.json` e a decisão do Lucas.
- **A emenda** está em `out/peru-agua/_tmp/conferencia/p8/emenda.py` e conferiu o sha256 de antes (`9837bd9c…` e `0fa37bcc…`). As
  cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.{json,md}.antes-pesquisa-8`.
- **Checagem 6:** `_media-antes-pesquisa-8.txt` e `_media-depois-pesquisa-8.txt`, em `out/peru-agua/_tmp/conferencia/`.

# Histórico: a conferência até a tarefa `peru-agua-reuso-s38-4333181`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-reuso-s38-4333181` às 16:5x (Brasília))

O mesmo arquivo do Motion Array 4333181, já julgado para a s37 (`trocar`), agora numa janela nova: a s38 b0. Pedido da Sala, no
passo `art`; a conferência própria que o veredito da s37 pediu em `serviria_em`.

**O laudo desta tarefa:** 1 veredito novo, **`trocar`**, com `mesmo_item: true`. Nenhum veredito anterior mudou (o da s37 fica como
está).
**O laudo do arquivo inteiro:** 28 aprovados de 37 vereditos (2 reprovados, 7 trocar, 0 pendente_lucas); 1 com algo não conferido
(de antes); recebidos: 37.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_media/_caca/s37/motionarray/Lima_Skyline_…_uhd_4333181.mp4` (`cf1debbf…`) | s38 b0 (444,2–447,467 s) | Motion Array 4333181, conta do Lucas | **trocar** | o rio está a meio leito: corre barrento, mas a barra de cascalho seco ocupa metade do leito em todo o clipe, e o palácio e a ponte dominam o quadro; não sustenta “runs high” |

**A frase**, no `words.json` (444,21–446,9 s; “runs high” em 446,3–446,9 s) e no `roteiro-narrador.md` (linha 54): “From December to
April, the Rímac runs high.” A janela é o b0 da regência (sha256 `111cafe5…`): 3,267 s. Hoje o b0 é o mapa, com o `rio-rimac` aceso,
`DECEMBER–APRIL` e a pílula “Rímac”; o clipe entraria no lugar dele.

**Os quatro critérios:**
- **Contexto: falha.**
  - **Não é um rio cheio.** A água corre barrenta, com cristas brancas à esquerda e a soleira em espuma à direita. Mas a barra larga
    de cascalho seco ocupa a metade de baixo do leito, à esquerda, e há ilhas de cascalho à mostra logo abaixo da soleira. Isso está
    em todos os quadros, de 0 a 5,5 s. Com a tela parada em “runs high”, a coisa mais clara do rio é o leito seco.
  - O clipe mostra um estado intermediário: não sustenta “runs low” (s37) nem “runs high” (s38).
  - “Corre forte, mas metade do leito está seca à vista” é ressalva, e ressalva conta como falha.
  - **O assunto não domina.** O Palacio de Gobierno, a catedral e a ponte com a fila de carros pretos e motos de polícia ocupam os
    dois terços de cima e o centro. O rio fica no terço de baixo, partido pela ponte.
  - **A data.** A origem não diz o mês nem o ano, e o quadro não o mostra. O B-roll sem data é honesto enquanto não afirma nada, mas
    aqui a frase dá o período e diz o estado do rio nele. Sozinha, a falta de data não reprovaria um rio visivelmente cheio; somada à
    barra seca, nada sustenta “high”.
  - **O lugar não mente:** é o Rímac atrás do Palacio de Gobierno. Mas a origem nomeia só Lima.
  - Recortar o quadro para esconder a barra seca faria a imagem afirmar mais do que o clipe mostra, e abaixo da soleira também há
    cascalho à mostra. Não é saída.
- **Licença e fonte: passa.** O mesmo da s37: Motion Array, conta individual do Lucas, procedência completa, sem editorial nem IA
  marcada. Nenhum rosto reconhecível nem marca legível. A s38 é sobre água, não cena de política: a fila de carros oficiais não pesa
  na licença, só no contexto.
- **Técnica: passa.** 3840×2160 h264, 29,97 fps, 166 quadros, 5,5055 s, sem áudio, útil inteiro. Cobre os 3,267 s a 1,0×.
- **Repetição: passa.** O arquivo não está em cena nenhuma, e o sha256 é único em `_media/`. O Rímac no satélite (s29 b0, s37 b0,
  s38 b0) é outro material. O voo do s29-a (Plaza de Armas, 4330946) é outra tomada: a catedral volta 130 s depois, de outro ângulo.

**O trecho**, se servisse: o fim, de 2,24 a 5,5055 s, em que a câmera recua o bastante para mostrar a soleira inteira em espuma. Mas
é também o que mais mostra a barra seca, a via expressa e o parquinho. Nenhum trecho de 3,267 s tira a barra do quadro.

**O rótulo** (gravado no veredito, em `rotulo`):
- o lugar, no máximo “Lima” (o `lugar_na_origem` é o título do item, que não nomeia o Rímac);
- a pílula “Rímac” não entra sobre este clipe;
- o `DECEMBER–APRIL`: **sobre o mapa, como hoje, fica.** É o período do dado (Defensoría del Pueblo, 2025), e o satélite não afirma
  data. Sobre um clipe real, a mesma legenda seria lida como o mês da filmagem, que a origem não dá. Com este clipe, não poderia
  ficar.

## Para o Lucas pesar

Nada nesta tarefa.

## Para reconferir no navegador do app

Nada nesta tarefa.

## Para trocar

- **s38 b0**, de 444,2 a 447,467 s, recado ao `pesquisa-imagens`: `Rimac river flood Lima Peru rainy season, brown water filling the
  channel bank to bank, no dry gravel bars, aerial 4K`.
  - A caça de 22/10 já não achou esse clipe (o item s38-a). Sem ele, fica o que a regência tem: o satélite com o `rio-rimac` aceso,
    o `DECEMBER–APRIL` e a pílula “Rímac”, com a falta declarada.
- **Não instalar.** O arquivo continua em `_media/_caca/s37/motionarray/` como chegou, sem `aprovado` em cena nenhuma.
- **Onde mais serviria:** em nenhuma frase sobre o volume do rio. Fora delas, só como B-roll de Lima com o centro histórico, e com
  conferência própria.
- **Aviso ao `regente-de-imagem`:** sem o clipe, o mesmo `rio-rimac` aceso no satélite abre a s29 (b0), a s37 (b0) e a s38 (b0).
  A s37 e a s38 vêm em seguida: são 8,6 s do mesmo mapa, só com a legenda trocando de `MAY–NOVEMBER` para `DECEMBER–APRIL`. Não é
  repetição de arquivo e não é critério meu, mas o conjunto pede a atenção dele e do `montador`.

## Divergências entre a marca e o ofício

Nenhuma nesta tarefa.

## Contas desta tarefa

- **Imagens abertas: 6.** Os quadros de 0, 2,24, 3,27 e 5,47 s, em 1920 px, e 2 recortes em resolução cheia de 4,4 s (o rio à
  esquerda e a soleira). Tudo em `out/peru-agua/_tmp/conferencia/s38-4333181/`.
- **Rede:** nenhuma.
- **Olhos novos:** não. O meu veredito da s37 e o pedido da Sala foram lidos antes.
- **A emenda** está em `out/peru-agua/_tmp/conferencia/s38-4333181/emenda_a.py`, com os textos em `textos.json` e `textos2.json`.
  Ela conferiu o sha256 de antes (`9100fff0…`). As cópias de antes estão em
  `out/peru-agua/_tmp/conferencia/conferencia-midia.json.antes-s38-4333181` (e `.md.antes-s38-4333181`).
- **Checagem 6:** `_media-antes-s38.txt` e `_media-depois-s38.txt`, em `out/peru-agua/_tmp/conferencia/`.

# Histórico: a conferência até a tarefa `peru-agua-caca-s37-faseB`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-caca-s37-faseB` às 16:4x (Brasília))

O arquivo baixado do s37-a-2 (a caça curta da s37), antes do `_instalar-lote`. Pedido da Sala.

**O laudo desta tarefa:** 1 veredito novo, **`trocar`**, com `mesmo_item: true`. Nenhum veredito anterior mudou.
**O laudo do arquivo inteiro:** 28 aprovados de 36 vereditos (2 reprovados, 6 trocar, 0 pendente_lucas); 1 com algo não conferido
(de antes); recebidos: 36.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_media/_caca/s37/motionarray/Lima_Skyline_…_uhd_4333181.mp4` (`cf1debbf…`) | s37 b0 (438,833–444,2 s) | Motion Array 4333181, conta do Lucas | **trocar** | é o item da prévia, mas no 4K o rio corre barrento e forte em mais da metade do leito, com a soleira toda em corredeira: não é o rio baixo de "runs low" |

**A frase**, no `words.json` (438,85–443,72 s; "runs low" em 442,13–442,695 s) e no `roteiro-narrador.md`: "A city that size needs
water all year, and its river runs low for seven months of it." A janela é o b0 da regência (sha256 `111cafe5…`): 5,367 s.

**É o item da prévia (`mesmo_item: true`).** As prévias caíram em 0:04, 0:02 e 0:04 do player, não nos pontos de 15, 50 e 85 %. Por
isso a comparação foi pelo quadro do arquivo no instante que cada prévia mostra. A p15 e a p85 são o quadro de ~4,3 s, com a van
branca, o carro vermelho, o parquinho e o mesmo enquadramento; a p50 cai entre 2,2 e 4,3 s, com o mesmo urubu no céu. Os quadros de
15, 50 e 85 % do arquivo são o mesmo voo, e o nome traz o ID 4333181.

**Os quatro critérios:**
- **Contexto: falha.** No 4K, a metade de cima do leito, à esquerda, é água barrenta correndo forte, com cristas brancas de muro a
  muro. À direita, a soleira ocupa o leito inteiro, em corredeira e espuma. O seco é só a barra de cascalho de baixo, à esquerda.
  - Com a tela parada em "runs low", o espectador vê um rio cheio de água em movimento.
  - É o motivo que tirou o Envato dd0d70ab (s37-a) da caça. O conceito-visual da s37 chama "o mesmo Rímac cheio e barrento na
    estação das chuvas" de "o contrário exato de s37".
  - "Mostra a barra seca, mas a água corre forte no resto" é ressalva, e ressalva conta como falha.
- **Licença e fonte: passa.** Motion Array, conta individual do Lucas, com a procedência completa. No 4K, nenhum rosto
  reconhecível, nenhuma marca legível e nenhuma propriedade privada como assunto.
- **Técnica: passa.** 3840×2160 h264, 29,97 fps, 166 quadros, 5,5055 s, sem áudio, 28,45 MiB.
  - As duas condições do veredito de caça se cumprem: a duração real é 5,5055 s, e o clipe é útil inteiro, sem fade nem cartela. O
    primeiro e o último quadro são imagem cheia, e a luma média fica entre 123,7 e 126,5 nos 166 quadros.
  - **A velocidade:** a 1,0×, o clipe cobre os 5,367 s com 0,14 s de folga, e os 0,93× deixam de ser precisos. Isso tira a única
    condição técnica do veredito de caça, mas não muda o contexto.
- **Repetição: passa.** O sha256 é único em `_media/`, e o ID não está em outro veredito.

**A divergência com o meu veredito de caça.** Na caça, eu aprovei este item (preferência 1). A prévia tinha 547 px, e nela a faixa
escura da esquerda parecia "areia ou lama, sem correnteza". No arquivo 4K, ela é água correndo. Vale o que se vê no arquivo. O
`conferencia-caca.json` não foi tocado: é de outro fluxo. O "sim" do Lucas à lista `563edcd07bc5` foi dado sobre aquele aprovado.

## Para o Lucas pesar

Nada nesta tarefa. A Sala diz a ele que o clipe que ele aprovou para baixar não vai à s37, e por quê.

## Para reconferir no navegador do app

Nada nesta tarefa.

## Para trocar

- **s37 b0**, de 438,833 a 444,2 s, recado ao `pesquisa-imagens`: `Rimac river dry season Lima Peru, a thin stream over a wide dry
  stone riverbed, aerial 4K`.
  - Sem clipe, fica o que a regência já tem: o satélite com o `rio-rimac` aceso e o "MAY–NOVEMBER" da Defensoría, com a falta
    declarada.
- **Não instalar.** Sem `aprovado`, o `_instalar-lote` não roda sobre este arquivo. Ele fica em `_media/_caca/s37/motionarray/` como
  chegou, e como nunca foi entregue a `_media/footage/s37/`, não há retirada a fazer.
- **Onde talvez sirva:** a s38 ("From December to April, the Rímac runs high"), só com conferência própria. A água barrenta e a
  corredeira dizem cheia, mas a barra de cascalho seca pesa contra "high". E a origem nomeia Lima, não o Rímac: o rótulo seria no
  máximo "Lima".

## Divergências entre a marca e o ofício

Nenhuma nesta tarefa.

## Contas desta tarefa

- **Imagens abertas: 17.**
  - as 3 prévias;
  - os 3 quadros da régua;
  - 2 quadros nos instantes das prévias;
  - o primeiro e o último quadro;
  - 6 recortes em resolução cheia (o rio à esquerda em 0 e 4,3 s, a soleira, a via, a ponte e o casario);
  - a prévia s08-a-p15, para a coerência com o veredito do Envato.

  Tudo está em `out/peru-agua/_tmp/conferencia/s37-a-2-faseB/`.
- **Rede:** nenhuma.
- **Olhos novos:** não. O meu veredito de caça e o pedido da Sala foram lidos antes.
- **A emenda** está em `out/peru-agua/_tmp/conferencia/s37-a-2-faseB/emenda.py`. Ela conferiu o sha256 de antes (`70793a59…`), e as
  cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.json.antes-s37-faseB` (e `.md.antes-s37-faseB`).
- **Checagem 6:** `_media-antes-s37-faseB.txt` e `_media-depois-s37-faseB.txt`, em `out/peru-agua/_tmp/conferencia/`.

# Histórico: a conferência até a tarefa `peru-agua-pesquisa-5`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-pesquisa-5` às 16:0x (Brasília))

A foto de Caral numa janela nova da s22, o b0: a caça terminou sem o clipe aéreo de Caral (o item s22-a). Pedido do setor Pesquisa e
mídia.

**O laudo desta tarefa:** 1 veredito novo, **`trocar`**. Nenhum veredito anterior mudou.
**O laudo do arquivo inteiro:** 28 aprovados de 35 vereditos (2 reprovados, 5 trocar, 0 pendente_lucas); 1 com algo não conferido
(de antes); recebidos: 35.

| arquivo | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_media/foto/s22/s22-caral-piramide-mayor-2022-commons.jpg` (`ee444c12…`) | s22 b0 (225,5–233,033 s) | Commons, Soto Caldaa Cesar, CC BY-SA 4.0 | **trocar** | a Pirámide Mayor de Caral vista do chão, sem o terraço, o vale verde nem o Supe que a frase afirma; e quase a mesma vista da frontal que entra logo depois, no b1. O b0 fica no satélite sobre Caral com o Supe aceso |

**A frase**, conferida no `words.json` (palavras 694–718, de 225,5 a 232,45 s) e no `roteiro-narrador.md`: "It is called Caral, and
it sits on a desert terrace above the green valley of the Supe River, about 90 miles north of Lima." A janela é a do b0 da regência
(sha256 `1875d0c1…`), de 225,5 a 233,033 s do master: 7,533 s.

**Os quatro critérios:**
- **Contexto: falha.** A foto foi tirada do chão, dentro do sítio: a pirâmide de terraços de pedra, a praça circular, os monólitos e,
  na metade de baixo, areia. Não se vê terraço sobre nada, nem vale, nem verde, nem rio. Na borda direita, só morros nus na névoa, e a
  contagem não acha nenhum pixel esverdeado na foto inteira. Com a tela parada em "green valley of the Supe River", o espectador veria
  uma pirâmide na areia. A foto cobre "It is called Caral" e o "desert", não o resto, e a ressalva conta como falha (ofício §5.1).
- **Licença e fonte: passa.** CC BY-SA 4.0, relida na API do Commons às 16:0x. É "Own work", e o sha1 da página é o do arquivo.
- **Técnica: passa.** 3264×2448 é a maior versão da origem; enche a tela a 1,176×. O Ken Burns de 1,00 → 1,12 em 6 s chega a 1,151 em
  7,533 s: produto de 1,354×, dentro de 1,4×. O teto do Ken Burns neste arquivo é 1,19.
  Para a cena: uma foto só em 7,533 s passa do teto de 6 s da foto parada (identidade §4.3).
- **Repetição: falha.** No corte de 233,033 s entra a frontal do b1: o mesmo prédio, do mesmo lado da praça, 11 minutos depois e com
  o mesmo céu. Seriam 11,8 s de quase a mesma imagem, com um salto no meio, e o "mais perto" do b1 deixaria de existir.

**O que a tela pode e não pode dizer sobre esta foto** (no b1, onde ela continua reserva aprovada):
- O lugar: o rótulo pode dizer "Caral" ou "Pirámide Mayor, Caral". A origem nomeia o sítio, e a localização da câmera na página
  (-10,891, -77,522) cai nele. O GPS do iPad em Lima é o da **outra** foto, a frontal: esta foi tirada num Samsung, com o GPS em Caral.
- O que a origem não nomeia: o vale do Supe, o rio, o terraço e Lima. Nenhum rótulo sobre a foto os nomeia como se ela os mostrasse.
- O ano: a foto é de 27/11/2022. Na fala no presente, não leva aviso (`aviso_de_ano: false`). Se a data do fato
  ("3000–1800 B.C.") ficar sobre ela, leva "Photo from 2022" (identidade §6).
- O crédito, enquanto ela estiver na tela: `Soto Caldaa Cesar / Wikimedia Commons · CC BY-SA 4.0`.

## Para o Lucas pesar

Nada nesta tarefa.

## Para reconferir no navegador do app

Nada nesta tarefa.

## Para trocar

- **s22 b0**, de 225,5 a 233,033 s: o caminho já escrito na regência (`fallback_se_negado: "mapa"`). É o satélite sobre Caral
  (`pontos-fontes › caral`), com o `rio-supe` (OSM) aceso e aproximação lenta: ele mostra o terraço, o vale e o rio de uma vez.
  - Com ele, o crédito da foto ("only in the fallback with the reserve photo") sai do b0.
  - Entram o `© MapTiler © OpenStreetMap contributors` e o "© OpenStreetMap contributors" do Supe.
  - Em busca, o que a frase pede é o próprio s22-a: `Caral archaeological site aerial, pyramids on the dry terrace with the green
    Supe River valley below, Peru`. Vai a `pesquisa-imagens`, só como recado.
- **O arquivo não sai da pasta.** O `trocar` vale só para a janela b0. O veredito do mesmo sha256 para o b1 continua `aprovado`, e o
  arquivo fica em `_media/foto/s22/`.
  - Para o portão do `research` ("sem `trocar` em arquivo que continua lá"): este `trocar` é de janela, num arquivo com outro
    veredito aprovado na mesma cena. Não é arquivo a retirar.
- **O conjunto da cena**, para a Direção: com o satélite no b0, a s22 continua com o respiro em movimento (o mapa anda) e com o corte
  a foto no b1, como o espelho pensou: de cima e depois de perto.

## Divergências entre a marca e o ofício

Nenhuma nesta tarefa.

## Contas desta tarefa

- **Imagens abertas: 3 de 25.**
  - a foto inteira reduzida a 1600 px;
  - um recorte do canto direito (os morros);
  - a frontal do b1, reaberta da pasta `pesquisa-3/`, para a repetição.

  Um recorte 16:9 foi gerado e não foi aberto. Tudo está em `out/peru-agua/_tmp/conferencia/pesquisa-5/`.
- **Rede:** 1 pedido à API do Commons (`imageinfo`, com o User-Agent do canal), lido sem recusa. Nenhum `WebFetch`, nenhuma busca nova.
- **Olhos novos:** não. O veredito anterior e a regência foram lidos antes de olhar, para achar a janela, e o `o_que_viu` diz isso.
- **A emenda do JSON** está em `out/peru-agua/_tmp/conferencia/pesquisa-5/emenda.py`. Ela conferiu o sha256 de antes (`20385bbb…`),
  e a cópia de antes ficou em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-pesquisa-5.json` (e `.md`). Os 34 vereditos e
  os 22 substituídos anteriores estão iguais, conferidos campo a campo. O `fora_desta_tarefa` da s22 b0 ganhou só a chave
  `julgado_depois`.
- **Checagem 6:** `_media-antes-pesquisa-5.txt` e `_media-depois-pesquisa-5.txt`, em `out/peru-agua/_tmp/conferencia/` (205
  arquivos), com o `diff` vazio.

# Histórico: a conferência até a tarefa `peru-agua-excecao-s03c`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-excecao-s03c` às 15:5x (Brasília))

A resposta do Lucas sobre as marcas no clipe do Callao (s03-c), trazida pela Sala.

**O laudo desta tarefa:** 1 veredito regravado. O s03-c passou de `reprovado` a **`aprovado`**, com a `excecao_lucas`. O
veredito das 15:35 está em `substituidos`.
**O laudo do arquivo inteiro:** 28 aprovados de 34 vereditos (2 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não
conferido (de antes); recebidos: 34.

| arquivo (em `_media/_caca/`) | cena | fonte | mesmo_item | veredito | motivo |
|---|---|---|---|---|---|
| `s03/envato/callao-sea-port-peru-…-utc.mp4` | s03 (beat 2) | Envato b142d057 | true | **aprovado** | é o item da prévia: o porto do Callao, em 4K, com 40 s. As marcas ao fundo entram pela exceção do Lucas, só na s03 |

**A resposta do Lucas** (no chat da Sala, 22/10/2026, às 15:40 de Brasília):
- **A pergunta:** "O clipe do porto de Callao (s03, linha 5) é o item certo, mas no 4K dá para ler as marcas nos contêineres
  (Maersk, Hapag-Lloyd) e o logo da APM Terminals por uns 10 s. A regra da marca recusa marca de terceiro legível. O que faço?"
- **A resposta**, a opção que ele escolheu: **"Usar com as marcas"**. A opção dizia: "Vale como exceção só desta cena: o
  conferente registra a sua resposta e aprova. As marcas aparecem ao fundo, não são o assunto."
- **A outra opção** era "Fica fora (Recomendado)".
- **Ela cobre o item:** a linha 5 da lista `22d59fbd75d8` é o s03-c (preferida, Envato b142d057). Conferi isso no
  `lista-caca-aprovacao.json`.
- **O arquivo não mudou:** ainda está em `_caca/`, sem instalar, com o mesmo sha256 (`c05046fd…`) e a mesma medida que eu julguei
  às 15:35. A exceção vale para o que o Lucas pesou.
- **Gravado em `excecao_lucas`:** a mensagem, a hora, a pergunta, o texto da opção e o escopo. O critério `licenca_fonte` passa
  citando a exceção. O `mesmo_item: true`, os quadros, o `o_que_viu` e a medida ficam como estavam.

**A regra da marca não mudou.** Nos outros clipes, marca ou logotipo de terceiro legível continua falhando (`midia.md` §3.1; ofício
§5.2). A exceção vale só para este arquivo e só nesta cena. Nada na marca impede a aprovação: o §3.1 diz que, no Envato, "quem avalia
é o licenciado" a autorização de propriedade. O Lucas é o licenciado, e foi ele quem avaliou.

**O escopo: a s03 sim, a s51 não.**
- **Vale:** cena s03, beat 2 da regência, de 7,2 a 11,6 s da cena (29,667 a 34,067 s do master), na frase "With its port, Callao,
  it is home to more than ten million people."
- **A s51 está declarada, mas a exceção não a cobre.**
  - A regência (s51, beat 2, "Then the port: in fifteen thirty-five…", de 663,6 a 669,4 s) pede a miniatura deste mesmo clipe, com
    a condição "ONLY if approved for this phrase". O espelho também declara a volta (s51 › `_reuso_declarado`).
  - A opção que o Lucas escolheu diz "só desta cena", e a exceção vale na medida em que ele a deu (ofício §6.1). Por isso, na s51
    este arquivo não tem veredito e não vai à cena: até lá, só a pílula do Callao.
  - Para usar o clipe na s51, são duas coisas:
    - uma conferência própria contra a frase de lá. Atenção: a frase fala de 1535, e o clipe é o porto de hoje. Pela identidade
      §6, vídeo de outro ano não entra;
    - se as marcas se lerem na miniatura, a pergunta de novo ao Lucas.

## Para o Lucas pesar

Nada.

## Para reconferir no navegador do app

Nada.

## Para trocar

Nada novo. O recado das 15:35 sobre o s03-c (a busca de outro aéreo do Callao) caiu com o aprovado. A s03 tem agora um aprovado por
beat: o s03-a, o s03-b e o s03-c.

## Divergências entre a marca e o ofício

Nenhuma. Uma nota de método: o ofício (§6.1) descreve a `excecao_lucas` como a volta de um `pendente_lucas`. Aqui ela veio sobre um
`reprovado` que dependia só de uma régua que o próprio ofício (§5.2) diz ser do canal: "se o Lucas a mudar, vale a dele". Gravei a
exceção do mesmo jeito, com o veredito antigo em `substituidos`.

## Contas desta tarefa

- **Nada olhado de novo:** o arquivo é o mesmo das 15:35.
- **Rede:** nenhum `WebFetch` e nenhuma ferramenta de navegador.
- **A emenda do JSON** foi feita pelo `python`, porque o arquivo tem mais de 300 KB.
  - Ela conferiu o sha256 do JSON antes de gravar (`d1e1e672…`). Mudaram só o veredito do s03-c, o laudo, a `tarefa` e o
    `conferido_em`.
  - As cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-excecao-s03c.json` e `.md`.
- **Checagem 6:** veja o relato do despacho (as listas `_media-antes-excecao-s03c-s01a4.txt` e `_media-depois-excecao-s03c-s01a4.txt`,
  em `out/peru-agua/_tmp/conferencia/`).
  - Uma correção: a primeira lista desta tarefa saiu com o nome `_media-antes.txt` e regravou a lista dos lotes 1 e 2 que tinha
    esse nome. Renomeei a minha, mas a de antes se perdeu.
  - A checagem daqueles lotes continua registrada abaixo, no histórico, com o `diff` vazio. A `_media-depois.txt` ficou intacta.

---

# Histórico: a conferência até a tarefa `peru-agua-caca-faseB`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-caca-faseB` às 15:1x–15:3x (Brasília))

Os 10 arquivos que a caça baixou na Fase B (14:58–15:16), antes do `_instalar-lote` (skill `cacar-no-chrome`, §3, passo 5).

**O laudo desta tarefa:** 9 aprovados de 10 conferidos (1 reprovado, 0 trocar, 0 pendente_lucas); 0 com algo não conferido;
recebidos: 10. Todos com `mesmo_item: true`.
**O laudo do arquivo inteiro:** 27 aprovados de 34 vereditos (3 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não conferido
(de antes); recebidos: 34.

| arquivo (em `_media/_caca/`) | cena | fonte | mesmo_item | veredito | motivo |
|---|---|---|---|---|---|
| `s03/motionarray/Drone_Aerial_View_…_Paracas_National_Peru_03_uhd_2.mp4` | s03 | Motion Array 2556702 | true | aprovado | é o item da prévia (penhasco, ilhotas e nuvens iguais; o nome traz o ID): deserto de Paracas contra o Pacífico, 4K, 40 s |
| `s03/envato/miraflores-skyline-at-lima-…-utc.MOV.mov` | s03 | Envato a42e7496 | true | aprovado | as três prévias estão no arquivo (11,5, 4,0 e 14,0 s, pelo laço do player): Lima sobre a Costa Verde, 4K, 17 s |
| `s03/envato/callao-sea-port-peru-…-utc.mp4` | s03 | Envato b142d057 | true | **reprovado** | é o item da prévia, mas no 4K se leem os armadores nos contêineres (Hapag-Lloyd, ONE, MAERSK, CMA CGM) e "APM TERMINALS" nos silos: marca de terceiro legível |
| `s09/motionarray/Aerial_View_Of_Amazon_River_…_Iquitos_City_And.mp4` | s09 | Motion Array 4074338 | true | aprovado | mesmos barcos, fumaça e ilha (o nome traz o ID): o Amazonas em Iquitos ao pôr do sol, 4K, 13 s |
| `s15/envato/aerial-view-of-costa-verde-cliffs-…-utc.mov` | s15 | Envato daf75d35 | true | aprovado | as três prévias estão no arquivo, pelo laço: neblina grossa sobre a Costa Verde, 4K ProRes, 27 s |
| `s15/envato/foggy-hyperlapse-aerial-over-miraflores-…-utc.mp4` | s15 | Envato c3538aaf | true | aprovado | as três prévias estão no arquivo, pelo laço: o céu cinza sobre Miraflores, hyperlapse 4K, 15 s |
| `s17/storyblocks/aerial-cityscape-over-the-la-molina-…-san.mov` | s17 | Storyblocks SBV-339018031 | true | aprovado | os três pontos batem no ponto (o nome traz o SBV): La Molina entre morros de areia, 4K ProRes, 34 s |
| `s19/envato/colca-canyon-river-valley-…-utc.mov` | s19 | Envato 762de3d9 | true | aprovado | mesmo enquadramento, terraços e rio (câmera parada): o Colca com corredeiras, 4K ProRes, 7,7 s |
| `s29/motionarray/Plaza_De_Armas_In_Lima_…_4330946.mp4` | s29 | Motion Array 4330946 | true | aprovado | a mesma ave e as mesmas torres (o nome traz o ID): a catedral e a Plaza de Armas do ar, 4K, 19 s |
| `s33/envato/drone-reversing-above-red-valley-…-utc.mp4` | s33 | Envato 0c62893f | true | aprovado | as três prévias estão no arquivo, pelo laço: a serra perto de Vinicunca com as parcelas, 4K, 15 s |

**A comparação com as prévias.**
- O laço do player do Envato (o aviso da Fase A) se confirmou: nos seis do Envato, as prévias de 15, 50 e 85 % não caem nos
  pontos do arquivo. Por isso, além dos quadros de 15, 50 e 85 %, eu procurei cada prévia no arquivo inteiro, de meio em meio
  segundo (cada `lado-a-lado.png` mostra a prévia, o quadro do arquivo em que ela está e o quadro do ponto nominal).
- Nos seis, as três prévias estão no arquivo, quadro por quadro, com as mesmas coisas nos mesmos lugares (barcos, prédios,
  guindaste, pintura da pista). Isso prova mais que o ponto: o `mesmo_item` saiu `true` em todos, e nenhum `null`.
- No Motion Array, as prévias também saíram atrasadas (de 1 a 7 s), e o nome traz o ID nos três.
- Na Storyblocks, os três pontos batem no ponto, e o nome traz o `SBV-339018031`.
- O campo `id_na_fonte` do manifest do s17-a saiu `null`: a URL da Storyblocks não traz o SBV. O ID está na mesma linha, no
  `arquivo_baixado`. Não é falha de quem baixou, e eu não completo o manifest.

## Para o Lucas pesar

Nada. Nenhum `pendente_lucas`.

Uma escolha de régua, se ele quiser outra: o s03-c caiu pela leitura conservadora do ofício (§5.2): marca ou logotipo de terceiro
legível, mesmo sem ser o assunto do quadro. É a mesma régua do Los Angeles (o Motion Array 4239434 na s51, e os três candidatos do
porto na caça de lá). Os nomes dos armadores só se leem no 4K em tamanho cheio. O "APM TERMINALS" dos silos, entre ~15 e ~25 s, se
lê até no quadro reduzido a 1920 px. Se o Lucas preferir a régua mais branda (marca só falha quando é o assunto), o veredito muda,
mas isso é decisão dele.

## Para reconferir no navegador do app

Nada.

## Para trocar

Ao `pesquisa-imagens`, sobre o reprovado:
- **s03, beat 2** ("With its port, Callao…", 4,4 s): busca `Callao bay aerial with fishing boats, La Punta or the Callao waterfront,
  container terminal out of frame or too far for any brand to read, 4K`.
  - Sem clipe, vale o fallback da regência: o satélite da baía do Callao.
  - A reserva da lista (`s03-c-2`) já tinha, na Fase A, o mesmo aviso dos contêineres. No 4K, ela pode cair pelo mesmo motivo:
    antes de baixá-la, vale olhar a página com isso em mente.
- **s51**: a volta declarada do porto (miniatura) cai junto com o s03-c.

Os avisos do conjunto das cenas, para o `regente-de-imagem` e o `montador`:
- A s03 fica com o s03-a (2,6 s) e o s03-b (4,6 s). O beat 2, de 4,4 s, fica sem clipe, e cai no fallback da regência.
- As outras cenas com aprovado têm o beat coberto: cada arquivo dura mais que a janela dele.

Para quem monta (não é critério):
- **s15-b:** os últimos ~3 s (12–15 s) chegam ao Parque del Amor: a escultura do beijo num canto, com uma pequena multidão. O beat,
  de 3,1 s, cabe no trecho de 0 a 11 s, que é o das prévias.
- **s19-a:** um reflexo de lente aparece no céu, à direita, por volta dos 6 s.
- **s03-a:** o arquivo traz uma faixa de áudio AAC; o clipe vai à cena sem o áudio.
- **O MOV do s03-b** traz duas trilhas de dados e uma miniatura mjpeg.
- **Fora de 30 fps:** o s15-a, o s19-a e o s17-a vêm em ProRes 10 bits; o s15-a e o s09-a-2 em 23,976 fps, e o s19-a em 25 fps.
  O `_instalar-lote` trata disso.

## Divergências entre a marca e o ofício

Nenhuma nova.

## Contas desta tarefa

- **Quadros:** os de 15, 50 e 85 % pelo `_frames-de-clipe.mjs`, em `out/peru-agua/_tmp/conferencia/faseB/<id>/`. Ao lado:
  - as folhas lado a lado com as prévias;
  - as folhas de 1 s (s03-b e s15-b), de 2 s (s03-c) e de 0,5 s (s19-a);
  - os recortes 1:1 do 4K onde podia haver letreiro: os contêineres e os silos do Callao, os prédios de Miraflores, a ponte da
    Costa Verde, o fim do s15-b, a praça de Lima, o golfe de La Molina e a aldeia do s33-a.
- **O casamento das prévias:** procurei cada prévia no arquivo de meio em meio segundo, pela diferença média dos tons de cinza, com o
  quarto de baixo fora por causa da barra do player e do cursor. Nas prévias recortadas do Motion Array, testei também o
  deslocamento vertical.
  - É ajuda ao olho, não prova. A prova é a folha lado a lado, olhada.
  - Os dois scripts são de uso único, fora do canal, na pasta de rascunho da sessão (`casar.py`, `casar2.py` e `lado.py`).
- **WebFetch:** nenhum. Nenhum site de banco aberto; nenhuma ferramenta de navegador.
- **A emenda do JSON** está em `out/peru-agua/_tmp/conferencia/faseB/emenda.py`. A cópia de antes (o JSON e o `.md`) está ao lado,
  com `.antes-faseB`. O sha256 foi conferido antes de gravar, e os 24 vereditos antigos ficaram como estavam.
- **Checagem 6:** `out/peru-agua/_tmp/conferencia/_media-antes-faseB.txt` (15:16) e `_media-depois-faseB.txt` (15:32), com os
  mesmos 188 arquivos e o `diff` vazio. Nada mudou em `out/peru-agua/_media/` durante a conferência.

# Histórico: a conferência até a tarefa `peru-agua-pesquisa-3`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-pesquisa-3` às 04:0x (Brasília))

As janelas da regência, no passo `conducting`. A regência é `out/peru-agua/regencia.json`, sha256 `cf443768…`, com a lista
`_conferencia_de_janelas` e o relato do regente (`out/peru-agua/_tmp/setores/peru-agua-direcao-4.md`, "Os usos de mídia por cena").
O JSON está em `out/peru-agua/_pesquisa/conferencia-midia.json`.

**Laudo:** 18 aprovados de 24 vereditos (2 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não conferido (o JPL da s16, já
reprovado); recebidos: 23 arquivos e 1 uso novo.
- Nesta tarefa, 17 usos da regência: 13 com a janela definitiva, 2 em conferência nova (os dois aprovados) e 2 fora, de propósito.
- 14 vereditos refeitos, com os antigos em `substituidos`, e 1 veredito novo (a Caral frontal na s51).

## Os 13 usos com veredito aprovado: a janela definitiva

Todos cabem na janela provisória que eu tinha julgado, e nenhum muda de veredito. Cada arquivo casa com o veredito pelo sha256:
- o retrato, as páginas e o Landsat, pelo sha256 do arquivo;
- as fotos de acervo, pelo `medido.sha256` do `_PROCEDENCIA.json`;
- as duas de Cantalloc, pelo `medido_no_download.sha256`, porque o `entregar` as reduziu para 5120 px.

| Uso na regência | Arquivo | Janela definitiva (s) | Muda? |
|---|---|---|---|
| s06 b3 | Puno e o Titicaca | 64,133–67,867 (3,73) | não. A miniatura pousa em "Lake". |
| s13 b3 | MODIS de 2018 | 135,933–138,033 (2,1) | não |
| s16 b2 | Landsat 5 de 03/06/1998 | 161,867–165,867 (4,0) | sim, para dentro. Começa em "the desert coast"; o "The sea warms, and" passou à NOAA. |
| s18 b2 | Satipo | 186,2–190,833 (4,63) | não |
| s22 b1 | Caral frontal | 233,033–237,267 (4,23) | não. Ken Burns até 1,12, que dá 1,07× o arquivo. |
| s23 b5 (a janela da s25) | Cantalloc, a espiral | 264,767–266,9 (2,13) | sim, para dentro. Só em "underground channels called puquios". |
| s23 b6 (a janela da s25) | Cantalloc, o poço | 266,9–268,9 (2,0) | sim, para dentro. Só em "carry water to some fields". |
| s26 b0 | Pizarro, "Painting, 1835" | 271,667–275,667 (4,0) | não |
| s27 b0 | Cobo, p. 10 | 279,833–290,7 (10,87) | não |
| s28 b1 | Cobo, p. 14 | 296,833–302,867 (6,03) | não |
| s36 b1 | a barriada de 1997, impressa até 1,4× | 436,3–438,833 (2,53) | não. Leva "Photo from 1997". |
| s39 b3 (a janela da s40) | o rio Santa Eulalia | beat 480,033–487,1; miniatura de 482,533 a 484,8 (2,27) | sim, para dentro. A miniatura só aparece de "Santa" a "reaches". |
| s52 b0–b1 | a lagoa Marcapomacocha | tela cheia 689,933–695,167 (5,23); miniatura até 697,5 | sim, para dentro. Resolve a nota da foto parada de 7,57 s. |

**Onde o número da cena difere.** A regência fundiu algumas cenas do espelho, e conferi pelo tempo e pela frase que a janela é a mesma
que eu julguei:
- **s23 b5 e b6 são a janela da s25.** A fusão é s23←s24+s25. O beat começa em 237,267 + 27,5 = 264,767 s, que é o plano 2 da s25 no
  espelho. As palavras do `words.json` batem: "underground channels called puquios" vai de 264,79 a 266,64 s, e "carry water to some
  fields." de 266,9 a 268,4 s.
- **A ordem das duas de Cantalloc é a da fala.** A espiral, o canal que desce, entra no nome "puquios". O poço, com a água no fundo, entra
  em "carry water". Cada uma fica 2 s ou mais, acima do piso de 1,5 s.
- **s39 b3 é a janela da s40.** A fusão é s39←s40, e 461,3 + 18,733 = 480,033 s, o plano 2 da s40. A frase é a mesma, de 480,05 a
  486,45 s.
- **Os vereditos continuam com a cena do espelho** (s25 e s40). A cena da regência vai em `janela_definitiva.beats[].cena_regencia`.

**O Landsat da s16, o que a tela pode e não pode dizer:**
- Pode: "JUNE 1998" como legenda, e Piura só como o ponto da camada `cidades-peru-ne`, que fica seco no quadro.
- Não pode:
  - "Piura flooded", ou qualquer coisa que ligue a cidade à água;
  - o nome "La Niña" e o tamanho da lagoa;
  - "El Niño 1997–98", sem o `verificador-de-fatos`;
  - "Sechura" como rótulo. A origem não nomeia lugar, então o nome só entra por uma camada geo com procedência, na coordenada dela;
  - o realce da água desenhado à mão;
  - a borda da cena emendada sem costura no satélite de hoje.
- O exige da regência está de acordo com isso.

**A lagoa da s52 em tela cheia.** O arquivo tem 4056×2144 e enche a tela 4K pela altura a 1,0075×. Com o Ken Burns até 1,12, ele chega a
1,13× o arquivo, abaixo de 1,4×. Olhei de novo e a foto está nítida. Ela fica 5,23 s na tela, com movimento, abaixo dos 6 s. O plano
`aereo-real` vai em foto porque não há footage da lagoa nomeada, como já dizia o veredito.

**Pizarro.** Pela decisão da Sala de 22/10, o retrato pintado não conta como registro na régua de mundo real. Isso está anotado no
veredito. Para a Sala: o relato do regente conta o card como foto, 4,0 s, nos 74,96 %. Não mexi na régua.

## As 2 conferências novas

1. **s16 b1: o mapa de anomalia da NOAA, de 157,6 a 161,867 s (4,27 s). Aprovado.**
   - A janela começa em "and the cold water" e vai até "The sea warms, and".
   - Olhei de novo. A língua vermelha, de +3 a +5 °C, encostada na costa do Peru em JUN, JUL e AUG é, no próprio quadro, "The sea warms".
     O azul que some junto à costa é o "slows or stops rising".
   - A imagem parada fica agora 4,27 s na tela; antes eram 6,5 s.
   - A licença foi relida na API do Commons: domínio público, NOAA.
   - Para quem monta, do veredito anterior:
     - nada do logo da NOAA nem da escala em °C sem o °F;
     - "aligned to the coast" vai até 1,4× o arquivo. Um painel tem uns 930 px, então uns 1.300 px na tela.
   - O "In El Niño years… ease," fica no mapa do b0.
2. **s51 b1: o reuso declarado da Caral frontal, de 657,9 a 663,6 s. Aprovado, com o aviso "Photo from 2022" (`aviso_de_ano: true`).**
   - O reuso está declarado no espelho (s51 › `_reuso_declarado`), e a aparição vem 420,6 s depois da s22.
   - A fala é "about 5,000 years ago, people built a city above one of them": fala da construção, e a foto é de 27/11/2022. É o mesmo
     prédio, com a data na origem, e não existe foto do ano do fato. Pela identidade §6, a foto de outro ano de um prédio leva o aviso.
   - O quadro não desmente a fala: é a ruína do que foi construído.
   - **A regência não põe o aviso no s51 b1.** O `redator-de-tela` o escreve a partir deste veredito, junto da miniatura e fora da faixa do
     crédito. Sem o aviso, a miniatura não vai à cena.
   - Na miniatura, o recorte fica na pirâmide, porque o terço de baixo da foto é areia.
   - Na s22 b1, a fala está no presente e o aviso não entra. Mas a legenda "CARAL · c. 3000–1800 BC" do b0 não pode ficar sobre a foto:
     com a data do fato sobre ela, a foto pediria o aviso.

## Fora desta tarefa, de propósito

Os dois são fallback da caça. A Sala pediu que fiquem para depois da caça, e só se ela não trouxer o clipe. Até lá, nenhum dos dois
arquivos entra nessas janelas. Os dois continuam aprovados só na cena em que foram julgados, com a janela provisória.
- **s15 b0:** a reserva MODIS de 2015, aprovada na s13.
- **s22 b0:** a reserva de Caral, em 225,5–233,033 s.

A p. 9 de Cobo continua aprovada, com janela provisória e sem uso na regência. A página é opcional, e a decisão é do redator.

## Para o Lucas pesar

Nada.

## Para reconferir no navegador do app

Nada novo.

## Para trocar

Nada novo. O aviso do conjunto, para a Sala, o `regente-de-imagem` e o `redator-de-tela`: a s51 b1 precisa do "Photo from 2022" junto da
miniatura de Caral.

## Divergências entre a marca e o ofício

Nenhuma.

O olhar não foi de olhos novos: a regência e os vereditos anteriores foram lidos antes, e o `o_que_viu` diz isso.

## Contas desta tarefa

- **Imagens abertas: 5 de 25.** As 5 são cópias a 1600 px dos arquivos entregues, em `out/peru-agua/_tmp/conferencia/pesquisa-3/`: a
  NOAA, a Caral frontal, as duas de Cantalloc e a lagoa da s52.
- **Rede: 2 pedidos à API do Commons**, pelo `Bash`, com o User-Agent do canal, um por vez, com 2 s de pausa. Os dois responderam 200: a
  NOAA e a Caral frontal. Nenhum `WebFetch` e nenhuma busca nova.
- **A emenda do JSON** foi feita pelo `python`, porque o arquivo tem 147 KB.
  - O script está em `out/peru-agua/_tmp/conferencia/pesquisa-3/emenda.py`.
  - Antes de gravar, ele conferiu o sha256 do JSON e o da regência, e que o arquivo que a regência cita casa com cada veredito.
  - As cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-pesquisa-3.json` (sha256 `b375878d…`) e em
    `.antes-pesquisa-3.md`.
- **Checagem 6:** `out/peru-agua/_media/` não mudou. O sha256 dos 145 arquivos, antes e depois, está em
  `out/peru-agua/_tmp/conferencia/_media-antes-pesquisa-3.txt` e `_media-depois-pesquisa-3.txt`, e o `diff` saiu vazio.

---

# Histórico: a conferência até a tarefa `peru-agua-pesquisa-2`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, lote 1 às 01:2x, lote 2 às 01:4x e tarefa `peru-agua-pesquisa-2` às 02:4x (Brasília))

Tarefas `peru-agua-pesquisa-1` (lotes 1 e 2) e `peru-agua-pesquisa-2` (os acertos da verificação do research, no passo `art_direction`).
O JSON está em `out/peru-agua/_pesquisa/conferencia-midia.json`.

**Laudo:** 17 aprovados de 23 conferidos (2 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não conferido; recebidos: 23.
- Lote 1: 9 aprovados de 11 (1 reprovado, 1 trocar).
- Lote 2: 7 aprovados de 11 (1 reprovado, 3 trocar, 0 pendente_lucas).
- Tarefa `peru-agua-pesquisa-2`: 1 arquivo novo, aprovado (o Landsat 5 de 1998, s16); 7 vereditos regravados, todos ainda aprovados, com
  os antigos em `substituidos` (s40; s06 e as duas da s25; Cobo p. 9, 10 e 14).
- Ficou fora da conferência, sem veredito: `_media/_caca/s26/acervo-livre/s26-jauja-panoramic-commons.jpg`. O próprio `pesquisa-imagens`
  o descartou (a Jauja de hoje numa fala de 1534, identidade §6) e não vai entregá-lo. Sem veredito, ele não vai à cena.

| id | cena | veredito | motivo |
|---|---|---|---|
| `_media/documento/cobo-1882-p9.jpg` | s27 | aprovado | p. 9 do Cobo de 1882 (o começo do auto de Jauja), domínio público lido no Commons, fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar"); cobre 'Their town council's record' na s27 (página opcional) |
| `_media/documento/cobo-1882-p10.jpg` | s27 | aprovado | p. 10 do Cobo de 1882, com o frio, a neve, a estrada e os carregadores mortos; domínio público lido no Commons; cobre os dois planos da s27; o Commons é fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar") |
| `_media/documento/cobo-1882-p14.jpg` | s28 | aprovado | p. 14 do Cobo de 1882, com a ordem de Pizarro ('comedio de tierra', 'poco trabajo', 'muy buen puerto'); domínio público lido no Commons; cobre o plano 2 da s28; o Commons é fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar") |
| `_media/pessoa/s26/francisco-pizarro-coutan-1835-commons.jpg` | s26 | aprovado | retrato pintado de Pizarro por Coutan (1835, Versailles), domínio público lido no Commons, 2900 px; card da s26 com 'Painting, 1835' |
| `_media/_caca/s06/acervo-livre/s06-puno-titicaca-bay-2015-commons.jpg` | s06 | aprovado | o Titicaca aberto visto de Puno (a origem nomeia Puno e o lago), CC BY-SA 4.0, 8593 px; miniatura do lago na s06 |
| `_media/_caca/s06/acervo-livre/s06-titicaca-totora-puno-2015-commons.jpg` | s06 | trocar | o quadro é um morro com um hotel atrás do juncal; o lago aberto não aparece, e a frase nomeia o Titicaca |
| `_media/_caca/s13/acervo-livre/s13-modis-low-clouds-peru-coast-2018-06-24.jpg` | s13 | aprovado | manta de nuvem baixa parando na costa do Peru (MODIS/Terra, 20/06/2018), domínio público da NASA; cobre 'a blanket of low cloud' na s13 |
| `_media/_caca/s13/acervo-livre/s13-modis-low-clouds-peru-coast-2015-06-18.jpg` | s13 | aprovado | a nuvem baixa ao longo de toda a costa do Peru (MODIS, junho de 2015), domínio público da NASA; reserva para 'a blanket of low cloud' na s13 |
| `_media/_caca/s16/acervo-livre/s16-noaa-avhrr-sst-anomalies-mar-aug-1997.jpg` | s16 | aprovado | anomalia de TSM da NOAA, mar.–ago. de 1997, o mar esquentando junto ao Peru; domínio público; cobre o plano 1 da s16 (sem o logo da NOAA) |
| `_media/_caca/s16/acervo-livre/s16-jpl-ssta-1997-12-26.png` | s16 | reprovado | a origem credita o JPL (Caltech, contratado), não é obra federal; a licença do JPL não está conferida para este item do SVS |
| `_media/base/s16/landsat5-1998-06-03-piura-sechura.png` | s16 | aprovado | Landsat 5 de 03/06/1998 (USGS, domínio público): o deserto do norte com água na depressão de Sechura, no mesmo El Niño de 1997–98; cobre o plano 2 da s16 com 'JUNE 1998' na tela, e nunca 'Piura alagada' |
| `_media/_caca/s18/acervo-livre/s18-satipo-aerial-2018-commons.jpg` | s18 | aprovado | Satipo no vale verde sob nuvens (a origem nomeia Satipo), CC BY-SA 4.0; miniatura junto ao nome na s18 |
| `_media/_caca/s22/acervo-livre/s22-caral-piramide-mayor-frontal-2022-commons.jpg` | s22 | aprovado | a Pirámide Mayor de Caral de frente, CC BY-SA 4.0, 4032 px; cobre "UNESCO calls it" (plano 2 da s22) |
| `_media/_caca/s22/acervo-livre/s22-caral-piramide-mayor-2022-commons.jpg` | s22 | aprovado | a Pirámide Mayor de Caral (GPS no sítio), CC BY-SA 4.0, 3264 px; reserva da pauta para o plano 2 da s22 |
| `_media/_caca/s25/acervo-livre/s25-cantalloc-puquio-spiral-2015-commons.jpg` | s25 | aprovado | um puquio de Cantalloc (a espiral), Diego Delso, CC BY-SA 4.0, 8688 px; cobre "underground channels called puquios" (plano 2 da s25) |
| `_media/_caca/s25/acervo-livre/s25-cantalloc-puquio-well-2015-commons.jpg` | s25 | aprovado | a água no fundo de um puquio de Cantalloc, Diego Delso, CC BY-SA 4.0; a 2ª foto do plano 2 da s25 ("carry water") |
| `_media/_caca/s26/acervo-livre/s26-mantaro-valley-from-concepcion-2024-commons.jpg` | s26 | trocar | a origem não nomeia Jauja, e a cidade de hoje domina o quadro numa fala de 1534 (identidade §6) |
| `_media/_caca/s36/acervo-livre/s36-lima-pueblo-joven-1997-commons.jpg` | s36 | aprovado | barriada de Lima em abril de 1997, CC BY 2.5; impressa sobre a mesa (até 1,4×), com "Photo from 1997"; cobre "Peruvians call them barriadas" |
| `_media/_caca/s36/acervo-livre/s36-lima-pueblo-joven-ancon-2004-commons.jpg` | s36 | reprovado | o domínio público foi declarado por quem enviou (Altiplano), e o autor é Maurice Chédel: a licença não está provada; e a de 1997 está mais perto de 1981 |
| `_media/_caca/s40/acervo-livre/s40-santa-eulalia-river-2021-commons.jpg` | s40 | aprovado | o rio Santa Eulalia nomeado na origem, CC BY-SA 4.0 dada pelo autor (Txolo liga 'Johnattan Rupire' à conta dele), 4000 px; miniatura junto ao nome (plano 2 da s40) |
| `_media/_caca/s40/acervo-livre/s40-santa-eulalia-valley-2010-commons.jpg` | s40 | trocar | o rio Santa Eulalia não aparece: é o vale verde com a encosta seca |
| `_media/_caca/s52/acervo-livre/s52-laguna-marcapomacocha-2018-commons.jpg` | s52 | aprovado | a Laguna Marcapomacocha nomeada na origem, CC BY-SA 4.0, 4056 px; cobre "its high lakes" (plano 1 da s52), como foto parada |
| `_media/_caca/s52/acervo-livre/s52-laguna-en-marcapomacocha-2025-commons.jpg` | s52 | trocar | a origem nomeia só o distrito, "Laguna en Marcapomacocha", não a lagoa do sistema que a decisão do Lucas pede |

**Os créditos na tela** vão no `credito_na_tela` de cada veredito, no formato `<autor> / Wikimedia Commons · <licença>`:
- **Diego Delso, desde a tarefa `peru-agua-pesquisa-2`:** `Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0` (s06 e as duas
  da s25);
- JOSE MORALES CIENCIA POLITICA UNMSM, Soto Caldaa Cesar, Johnattan Rupire, Mr AndrewHolmes e Sichuancay, com CC BY-SA 4.0;
- Håkan Svensson, com CC BY 2.5;
- sem crédito na tela: NASA, NOAA, o Landsat/USGS, o Pizarro de 1835 e o Cobo de 1882 (domínio público).

## Tarefa `peru-agua-pesquisa-2` (22/10/2026, 02:3x–02:4x): o que mudou

As decisões da Sala estão em `out/peru-agua/_tmp/verificar-research/consolidado.json` (`decisoes_da_sala`). Aqui ficam registradas, não
rediscutidas.

### 1. s40, o rio Santa Eulalia de 2021: continua aprovado, agora com a prova do autor

Pela API do MediaWiki, em 5 pedidos, um por vez:
- **Río Santa Eulalia.jpg.** Enviado por Txolo em 03/10/2021, às 21:42 UTC, com o comentário "Uploaded using [[COM:MOA|Commons Mobile
  App]]". O texto do arquivo traz `{{own}}`, `|author=[[User:Johnattan Rupire|Johnattan Rupire]]` e `{{self|cc-by-sa-4.0}}`.
- **Frutillada cusqueña.jpg** (02/10/2021) e **Iglesia Matriz del Callao 2.jpg** (05/10/2021). Os dois foram enviados por Txolo pelo
  mesmo app, na mesma versão (Android 3.1.1), com o mesmo autor e a mesma licença.
- **A prova mais forte, a mais do que a Sala citou.** Na Iglesia Matriz, 13 minutos depois de enviar (07:45:33 UTC), **o próprio Txolo
  trocou o link do autor** para `[[User:Txolo|Johnattan Rupire]]`. As revisões de 07:36 e 07:38 ainda tinham o link antigo. O dono
  da conta liga o nome "Johnattan Rupire" à conta dele: é o nome de autor que ele escolheu no app, não um terceiro. A licença
  `{{self}}` foi dada pelo próprio autor.
- **Por que não é o caso da reserva de 2004 da s36.** Lá, o autor e a fonte eram "Maurice Chédel", sem "Own work", e quem enviou
  (Altiplano) declarou o domínio público por outra pessoa. Aqui há `{{own}}` e `{{self}}`, e quem enviou se diz o autor.
- **O crédito não muda:** `Johnattan Rupire / Wikimedia Commons · CC BY-SA 4.0`. Base: midia §7.3.

### 2. Diego Delso: o crédito que ele pede (s06 e as duas da s25)

- O `credito_na_tela` passa a `Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0`.
- **Por quê:** o modelo `{{User:Poco a poco/credit}}` pede "Diego Delso, delso.photo, License CC BY-SA" ao lado da imagem. Reli o
  modelo pela API, na revisão de 26/10/2024. A CC BY-SA 4.0, §3(a)(1)(A)(i), manda dar o crédito do jeito que o autor pede.
- O aviso por e-mail que o modelo pede é cortesia, não condição.

### 3. Cobo, p. 9 e p. 10 (s27) e p. 14 (s28): o motivo cita a resposta do Lucas

- **A resposta:** em Los Angeles, em 07/10/2026, às 12:03, o Lucas respondeu "Outra cópia, senão recriar (Recomendado)". A opção dizia:
  "Os pesquisadores procuram a mesma página numa fonte aprovada (Commons, governo). O que não aparecer, a cena recria". Lida em
  `out/los-angeles/_pesquisa/conferencia-midia.md`, "A resposta do Lucas aos 10 do Internet Archive"; o JSON de lá grava a hora
  `2026-10-07T12:03:00-03:00`.
- **O que ela quer dizer aqui:** por ela, o arquivo do Commons vem de fonte aprovada, mesmo nascido no Internet Archive. É o mesmo caso
  dos PDFs do Fæ que o conferente de Los Angeles aprovou depois dela.
- O `motivo` das três e o critério de licença agora citam essa resposta.

### 4. NOVO: o Landsat 5 de 03/06/1998 para a s16, plano 2. Aprovado

- **O arquivo:** `_media/base/s16/landsat5-1998-06-03-piura-sechura.png`, 2840 × 4766, RGBA, sha256 `8fde207d…`. O veredito casa por
  esse sha256.
- **O que olhei:** a prévia, a máscara de água e três recortes do próprio arquivo (a depressão reduzida; Piura e a borda leste a 100 %).
  - O deserto do norte tem uma rede grande de água verde-oliva, lisa, na depressão a leste da península de Illescas, e uma lagoa escura
    no meio dela.
  - O rio leva água ao estuário, e há uma faixa verde atrás da praia do sul.
  - Piura aparece seca: a mancha cinza da cidade dos dois lados do rio, sem água parada.
- **O contexto passa:** é o registro real do mesmo El Niño de 1997–98 do plano 1, com a data e a pegada na origem. Ele cobre "the desert
  coast gets … floods, mostly in the north". A água está no quadro, e não há gente.
- **A licença passa:** é USGS, domínio público. A página de citação do EROS diz "may be used, transferred, or reproduced without copyright
  restriction". É uma base aceita da identidade §6.
  - Não leva crédito na tela. A linha da descrição está na procedência: "Landsat imagery courtesy of the U.S. Geological Survey".
  - Veio pelo Planetary Computer, sem conta, como a identidade manda, e o robots.txt dele não veta nada.
- **A técnica passa:** são 45 m Mercator por pixel. Com a área da água enchendo a altura do quadro 4K, sai a ~1,07×. O arquivo aguenta
  até 1,4×, com pelo menos ~1.540 px dele na altura (uns 69 km).
  - A nuvem cobre 1,18 % da terra, sem cobrir o miolo da água.
  - A janela do plano é de 5,27 s, abaixo dos 6 s.
- **A repetição passa:** o still da mesa é outro Landsat (Landsat 8, de 2022).
- **`lugar_na_origem`:** a origem não nomeia lugar por nome; dá a pegada em coordenadas (bbox −82,31 a −80,21 de longitude e −6,74 a
  −4,84 de latitude).

**O que a tela pode dizer:**
- "JUNE 1998": o ano na tela que o espelho pede. Não é aviso de foto de outro ano, e o `aviso_de_ano` fica `false`.
- O nome de um lugar só por camada geo com procedência, na coordenada dela. "Piura", do Natural Earth, vai no ponto da cidade, que está
  seco no quadro.

**O que a tela não pode dizer:**
- "Piura alagada", nem nada que ligue a cidade à água.
- Que toda a água é a enchente: parte pode ser lagoa permanente, e a faixa verde atrás da praia entra na máscara.
- O nome da lagoa ("La Niña").
- O tamanho dela: nem os ~145 km da Wikipedia nem os ~978 km² medidos, sem o verificador-de-fatos.
- "El Niño 1997–98" na tela, só com o verificador-de-fatos.

**Para quem monta** (o `mapista`; não é critério):
1. Enquadrar a depressão de Sechura e o estuário, não a cena inteira com o mar e a nuvem do sul. Em cor natural, a água sai verde-oliva e,
   de longe, pode passar por vegetação.
2. Realçar a água só a partir de uma camada medida, com procedência, nunca com contorno à mão. Seria a máscara do `pesquisa-geo` em
   `_media/geo/`, que é a pergunta 2 dele à Sala.
3. A borda leste da cena corta a água. Não emende o Landsat de 1998 sem costura no satélite de hoje da MapTiler: a água de 1998
   terminaria numa linha reta sobre o chão de outra data. A borda da imagem fica à vista, como recorte de 1998, ou o quadro fica
   dentro da faixa da cena.
4. O PNG tem 30,6 % de área transparente, fora da faixa da cena.

## Para o Lucas pesar

Nada.

## Para reconferir no navegador do app

Nada novo. Ficam os itens da tarefa anterior (abaixo): a reserva de 2004 da s36 e a do JPL da s16, só se a Sala as quiser.

## Para trocar

Nada novo nesta tarefa. Os recados da tarefa anterior (abaixo) continuam.

O aviso do conjunto da cena, para o `regente-de-imagem` e o `montador`:
- **s16** tem agora um `aprovado` por plano: a NOAA no plano 1 (6,5 s) e o Landsat no plano 2 (5,27 s).
- As duas são imagens paradas sobre um mapa que se move, e nenhum dos dois planos passa de 6 s.
- A mudança do plano 2 de "foto" para satélite já está no espelho (direcao-3).

## Divergências entre a marca e o ofício

Nenhuma. Três notas de método:
- **A régua de técnica do Landsat.** O §5.3 do ofício não tem linha para base de satélite usada como registro. Julguei a resolução contra o
  uso (até 1,4×, como a foto de época), e não pela regra "a maior versão da origem", que é de foto de página. A origem tem 30 m nativos,
  1,5 vez o arquivo, se um quadro mais perto pedir.
- **O User-Agent.** Os pedidos ao Commons e ao USGS saíram pelo `WebFetch`, a única ferramenta de rede do contrato §5. Ele não leva o
  User-Agent do canal.
- **O olhar.** Nenhum olhar foi de olhos novos: o pedido, o espelho e o relato foram lidos antes, e o `o_que_viu` diz isso.

## Contas desta tarefa

- **Imagens abertas: 5 de 25:**
  - a prévia do Landsat;
  - a máscara de água;
  - três recortes do arquivo, em `out/peru-agua/_tmp/conferencia/pesquisa-2/`: `s16-depressao.jpg`, reduzido, e `s16-piura-100.jpg` e
    `s16-borda-leste-100.jpg`, a 100 %.
- **WebFetch: 7 pedidos, um por vez, nenhum recusado:**
  - 6 à API do MediaWiki, todos da s40 e de Delso:
    - a s40;
    - a Frutillada e a Iglesia juntas;
    - a 1ª revisão da Iglesia;
    - a lista de revisões dela;
    - as três revisões de 07:36–07:45;
    - o modelo de Delso;
  - 1 à página de citação do USGS EROS.
- **A emenda do JSON** foi feita pelo `python`, porque o arquivo tem mais de 95 KB.
  - O script, com o veredito novo ao lado, está em `out/peru-agua/_tmp/conferencia/pesquisa-2/`: `emenda.py` e `landsat-s16.json`.
  - Ele conferiu o sha256 do JSON antes de gravar, e também que o sha256 de cada um dos 7 arquivos regravados continua o do veredito.
  - As cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-pesquisa-2.json` (sha256 `2968601e…`) e em
    `.antes-pesquisa-2.md`.
  - Os 7 vereditos antigos estão em `substituidos`, com `substituido_em`.
- **Checagem 6:** `out/peru-agua/_media/` não mudou.
  - O sha256 dos 144 arquivos, antes e depois, está em `out/peru-agua/_tmp/conferencia/_media-antes-pesquisa-2.txt` e
    `_media-depois-pesquisa-2.txt`, e o `diff` saiu vazio.
  - As listas dos lotes anteriores ficaram como estavam.

---

# Histórico: a tarefa `peru-agua-pesquisa-1` (lotes 1 e 2), como estava

O aviso do ano: no lote 2, só a barriada da s36 leva aviso (`Photo from 1997`; a fala é de 1981). As outras fotos aprovadas cobrem falas
no presente (Caral, os puquios, o Santa Eulalia, a lagoa) e vão sem aviso (`aviso_de_ano: false`).

## Os pontos da Sala, um por um

- **s52, a lagoa nomeada.** A **Laguna Marcapomacocha de 2018 passa**. A origem a nomeia ("Laguna Marcapomacocha en el departamento de
  Junín, Perú"), e a câmera está em 11° 24′ S, 76° 20′ W. O rótulo pode dizer "Laguna Marcapomacocha", e nunca "uma das 19 lagoas".
  - **A reserva de 2025 vai a `trocar`.** A origem diz "Laguna en Marcapomacocha. Foto 2025.": é uma lagoa do distrito, sem dizer
    qual, e não tem coordenada. A linha das montanhas parece a da foto de 2018, mas o olho não nomeia lugar (midia §2.7).
  - Se a Sala quiser, a pergunta ao Lucas é: "Uma foto do Commons diz só 'Laguna en Marcapomacocha' (o distrito), sem nomear a lagoa,
    e as montanhas parecem as da Laguna Marcapomacocha. Ela entra na s52 como 'Marcapomacocha', ou fica só a foto que nomeia a lagoa?"
    Com o "sim" dele, ela volta a mim com a mensagem literal.
  - Nota para a pauta: os "tubos de condução" que a pauta descreve no primeiro plano da foto de 2018 são troncos de madeira deitados no
    capim, e não tubulação. O rótulo e a fala não dependem disso.
- **s26, o vale do Mantaro de Concepción.** O veredito é **trocar**.
  - A miniatura junto ao nome "Jauja" diria que a foto é Jauja, e a origem só nomeia o vale do Mantaro visto de Concepción (midia §2.7).
  - A cidade de hoje, com galpões e ruas, domina o primeiro plano numa fala de 1534. O aviso do ano não conserta uma foto que desminta a
    fala (identidade §6).
  - Pela marca, a saída é a miniatura não entrar: ela já estava "se couber" (diretor-de-arte), e o verificador sugeria tirá-la. A
    pergunta do relato ("Tirar a miniatura?") não precisa ir ao Lucas por esta foto.
- **s36, a barriada.** A foto de **1997 passa**, com o aviso "Photo from 1997".
  - A licença foi lida na página: licença tripla, e o canal fica com a CC BY 2.5.
  - A data também: "April 1997".
  - A busca pela foto de 1981 passou pelo Commons e pela NARA (`_pesquisa/tentativas-midia.jsonl`).
  - É foto média (1788 px): vai "impressa sobre a mesa, até 1,4×".
  - Os painéis pintados no morro (letras vermelhas, quase todos ilegíveis) não se leem no tamanho de tela.
  - **A reserva de 2004 foi reprovada.** Quem declarou o domínio público foi o usuário que enviou (Altiplano), e o autor e a fonte são
    "Maurice Chédel", sem "Own work". Além disso, a de 1997 está mais perto de 1981.
- **s22, Caral:** as duas fotos da Pirámide Mayor passam. A preferida tem, na página, a localização de câmera em Lima. É o GPS do iPad,
  e o próprio prédio a desmente: é o mesmo da outra foto, do mesmo dia, com GPS no sítio. O rótulo segue o texto da origem, Caral.
- **s25, os puquios:** a espiral e a água no fundo passam, as duas de Diego Delso. Os dois arquivos têm 50 MP, e o `entregar` reduz
  abaixo de 40 MP.
- **s40, o Santa Eulalia:** o rio de 2021 passa. A reserva de 2010 vai a `trocar`, porque mostra o vale, não o rio.
- **Pessoa e violência:** nenhum dos 11 arquivos tem gente reconhecível nem violência. Na água do puquio, há o vulto do reflexo de quem
  fotografa, sem rosto.
- **As fontes peruanas:** nenhum dos 11 arquivos vem da Andina, do gob.pe nem da SEDAPAL. Todos são "Own work" de pessoa física no
  Commons, menos a reserva do Santa Eulalia, que veio do Panoramio, com a licença revisada pelo robô do Commons. A UNMSM aparece só no
  nome de um usuário.
- **A foto pequena:** nenhuma foto do lote está abaixo de 1.600 px de largura. A regra "A foto pequena preenche a lacuna" não foi usada.

## Para o Lucas pesar (tarefa 1)

Nada no lote 2. A única pergunta possível é a da reserva da s52, acima, e ela só vai ao Lucas se a Sala a quiser.

## Para reconferir no navegador do app (tarefa 1)

- **s36, a reserva de 2004**, só se a Sala a quiser (a de 1997 está aprovada). Página: https://commons.wikimedia.org/wiki/File:Pueblo_joven_%28Lima%29.JPG.
  O que falta conferir: se o usuário Altiplano, que liberou o arquivo, é Maurice Chédel (pela página do usuário no Commons ou por um
  ticket VRT). O Commons não recusou leitura: é só uma página que não é a de origem do item, e por isso ficou fora desta conferência.
- Do lote 1: a reserva da s16, nas mesmas condições de lá.

## Para trocar (tarefa 1)

Do lote 2, tudo ao `pesquisa-imagens`:
- **s26:** a miniatura de Jauja sai. Busca, se a Direção quiser mesmo uma: `Jauja, Mantaro Valley, Peru, photograph naming Jauja,
  without the modern town`. O caminho mais simples é ficar sem miniatura (a Sala decidiu assim em 22/10/2026).
- **s40**, a reserva: `Santa Eulalia River, Huarochirí, Peru, photograph with the river water in frame`. A preferida, aprovada, já
  cobre o plano. A reserva serviria na **s23** ("their valleys run as strips of green"), com conferência nova, se o montador quiser.
- **s52**, a reserva: `Antacoto or Huascacocha lagoon, Junín, Peru, photograph with the lake named in the item`.
- **s36**, a reserva reprovada: quando o `entregar` rodar, ela não vai para `_media/foto/`.

Do lote 1: s06 (a reserva do totora) e s16 (a reserva do JPL), como lá.

Os avisos do conjunto das cenas, para o `regente-de-imagem` e o `montador`:
- **s52, plano 1** (689,9–697,5 s, 7,57 s): no espelho é aéreo, e tem uma só foto aprovada, parada. A foto fica até 6 s (identidade
  §4.3), e o resto do plano vai ao satélite das lagoas (o caminho que a decisão do Lucas já dá) ou a movimento com propósito. É também
  janela de 6 s ou mais sem nenhum `aprovado` com movimento, onde caberia respiro.
- **s40, plano 2** (7,07 s): a miniatura do Santa Eulalia fica sobre o mapa com relevo, que se move. A janela do plano não é tempo
  de foto em tela cheia.
- **s25, plano 2** (4,13 s): as duas fotos de Delso dividem o plano, 2,07 s cada, acima do piso de 1,5 s.
- **s22, plano 2** (4,23 s) e **s36, plano 2** (2,53 s): uma foto cada, dentro dos 6 s.
- **s26, plano 2:** sem miniatura aprovada; só o nome de Jauja no mapa.
- Para quem monta (não é critério):
  - na foto da barriada (s36), a bandeira do Peru e os painéis pintados do morro ficam pequenos;
  - no rio de 2021 (s40), a placa e o prédio branco da borda esquerda saem no recorte da miniatura.

## Notas de método e contas (tarefa 1)

- O despacho mandou ler a pauta e o relato antes de olhar, para achar a cena e o plano. Por isso, nenhum olhar foi de olhos novos, e
  cada `o_que_viu` diz isso.
- Neste lote, o que vi divergiu da pauta em dois pontos: os "tubos" da s52 são troncos de madeira, e a reserva do Santa Eulalia não
  mostra o rio.
- **Imagens abertas no lote 2: 12 de 25.** Onze cópias reduzidas, uma por arquivo, e um recorte do morro da s36 de 1997, todas em
  `out/peru-agua/_tmp/conferencia/olhar/` (prefixo `l2-`).
- **WebFetch no lote 2: 11 pedidos**, um por vez, todos lidos sem recusa: a página do Commons de cada um dos 11 arquivos.
- **A emenda do JSON do lote 2** está em `out/peru-agua/_tmp/conferencia/lote2/emenda.py`, com a cópia de antes em
  `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-lote2.json`.
- **Checagem 6 dos lotes 1 e 2:** `_media-antes.txt` e `_media-depois.txt`, `_media-antes-lote2.txt` e `_media-depois-lote2.txt`, com o
  `diff` vazio.
