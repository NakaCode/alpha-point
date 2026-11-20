# Lições: editar-cena-html

Os erros desta etapa, um bloco cada, registrados pela `registrar-aprendizado-como-skill` (catálogo §1.4 e §1.5). Leia antes
de entregar a cena e quando algo der errado. Nenhum portão mede estas: as de julgamento, e as de código e de montagem (L2 a L4). O "·" na
quebra, o campo em branco (a caixa que pousa vazia) e o mapa parado ficam com o portão de movimento; a mesa vazia depois do
corte, não (L5). A sobreposição de texto sobre texto e o tamanho da letra ficam com os portões de cena; o crédito sem o objeto
dele, com nenhum (L6). O tamanho de foto e de símbolo nenhum portão mede: veja a `gerar-mapa-animado-maptiler`, L5 e L7, que
valem também na mesa. A peça que volta de outra cena volta com o rótulo que a identificava: `escrever-textos-de-tela`, L1, e
`gerar-mapa-animado-maptiler`, L2.

### L1 · A troca de destaque chega no fim da frase, e o segundo estado quase não se vê
- **Sintoma:** "a fileira do BC Hydro fica em cinza (a 40 %) de 25,5 a 29,6 s, enquanto a voz diz 'Beside the Canadian
  one, for a single year of calls'. O destaque só passa para ela em 'cheap.', quando a frase já acabou" (s42).
- **Causa:** a troca de luz estava em "cheap." (29,585 s) e terminava em 29,985 s; com o corte em 30,267 s, o segundo
  estado da comparação (o lado canadense aceso) ficava inteiro na tela uns 0,28 s. O próprio cabeçalho da cena já
  registrava isso, e ninguém o tratou como defeito.
- **O que resolveu:** consertos-1 (ESP-8, `out/rio-columbia/graphics/s42.html`): a troca de luz passou para a palavra
  "Canadian" (26,52 s), com os mesmos 0,40 s; o estado novo fica uns 3,3 s até o corte. Nenhum texto mudou.
- **Como evitar:** numa comparação em dois estados, a luz troca na palavra da voz que nomeia o lado novo, não no fim da
  frase; e cada estado fica na tela tempo de ser lido antes do corte (o texto no ar ≥ 2,0 s, identidade §4.3). Se o
  cabeçalho da cena precisa avisar que um estado dura menos que isso, é defeito: mude o tempo.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s42, t 25,5, ESP-8); vídeo 7 (`rio-columbia`),
  revisão de 13/11/2026, conserto de 16/11/2026. Destino a): julgamento (qual palavra nomeia o lado), nenhum portão mede.

### L2 · O texto criado por script é medido com a fonte de reserva, e o conjunto sai do lugar
- **Sintoma:** nas propostas E e F do banner do canal, o nome "Alpha Point" saiu uns 150 px fora do centro do bloco da
  marca. Na imagem final, a fonte era a certa: a posição é que tinha sido calculada com outra largura.
- **Causa:**
  - o nome e a frase eram `<text>` de SVG criados por script e medidos (`getComputedTextLength`, `measureText`) logo depois do
    `document.fonts.ready`;
  - essa promessa só espera a fonte que algum elemento já pediu. Nenhum usava ainda a face de peso 800 da "MarcaSec": ela não
    estava pedida, a promessa resolveu na hora, e a medida saiu com a fonte de reserva;
  - a face certa carregou depois e desenhou o texto com outra largura.

  A prova é o conserto: com a carga antes da medida, o nome voltou ao centro nas duas.
- **O que resolveu:** em `marca/logo/propostas-3-banner/_trabalho/comum.js`, a função `marca`, que as propostas D, E e F usam,
  passou a esperar `Promise.all([document.fonts.load('800 <tamanho>px "MarcaSec"'), document.fonts.load('500 <tamanho>px
  "Marca"')])` antes de medir.
- **Como evitar:** antes de medir texto por script, carregue cada face que a medida usa, com o peso e o tamanho.
  - A medida inclui `measureText`, `getComputedTextLength`, `getBBox` e a caixa de um texto criado ou mostrado depois do
    carregamento.
  - Na cena, use `await RIG.prontas()`, que carrega todas as faces "Marca" e "MarcaSec" (roupa §1).
  - Fora do RIG, use `await document.fonts.load('<peso> <tamanho>px "<família>"')`.
  - O `document.fonts.ready` sozinho não basta.
  - Confira no primeiro quadro que o texto medido está no lugar que a conta deu.
  - Vale também na miniatura e no banner, que ainda não têm skill.
- **Origem:** o banner do canal, propostas E e F (`marca/logo/propostas-3-banner/`, fora do git), 19/11/2026, ~00:2x.
  - Corrige o "depois do `document.fonts.ready`" do `APRENDIZADOS.md`, item 59.
  - Destino a): a peça HTML que mede texto é a desta etapa. Nenhum portão mede a ordem entre a carga da fonte e a medida: o
    render só confere que as faces carregaram (`window.__fontesFaltando`).

### L3 · A opacidade posta por atributo no SVG perde para a da classe no CSS, e o traço nunca some
- **Sintoma:** na s48, uma linha de chamada aparecia fora de hora (um traço no alto em P1, uma linha horizontal em P2), e na
  s47 o rolo mostrava também as geratrizes de trás. Os portões passaram; o defeito apareceu nas folhas do 1º render da s47 e
  nas folhas de contato da s48.
- **Causa:** o script apagava o elemento com `setAttribute("opacity", …)`, e a classe dele fixava `opacity` no CSS
  (`.ar-fina { … opacity: .62; }`, `.ar-oculta { … opacity: .45; }`). O atributo de apresentação do SVG perde para qualquer
  regra do CSS, e o elemento fica com a opacidade da classe. Pela mesma regra do CSS, vale para os outros atributos de
  apresentação (`fill`, `stroke`, `display`, `visibility`…); no vídeo 8, só a opacidade foi vista.
- **O que resolveu:** a função `op(e, v)`, que escreve `e.style.opacity` (o estilo no elemento vence a regra da classe), em
  todo lugar das três cenas: `out/australia-animais/graphics/s47.html` (linha 238), `s48.html` (255) e `s49.html` (218), sem
  nenhum `setAttribute` de opacidade (conferido em 20/11/2026).
- **Como evitar:** no SVG, anime a opacidade (e todo estilo) pelo `style`, ou deixe a classe sem a propriedade que o script
  muda. Antes de entregar, rode `grep -n -E "setAttribute\(['\"](fill-|stroke-)?opacity" out/<proj>/graphics/<id>.html`; para
  cada linha, confira que a classe do elemento não fixa a mesma propriedade no CSS, ou troque pelo `style`. Nos quadros,
  olhe o instante em que cada peça devia sumir. O primo deste erro é o filho com `visibility: visible` que fura o pai
  escondido (`APRENDIZADOS.md`, item 102).
- **Origem:** `out/australia-animais/_tmp/arte-1/EO1.md`, "As lições do meu erro", 1; vídeo 8 (`australia-animais`),
  19/11/2026, entre o 1º render da s47 (21:24) e o 2º (21:44). Destino a): o script da cena é desta etapa, e nenhum portão
  mede o elemento que não some (o `check-overlap` e os outros olham texto).

### L4 · A cena montada de uma fonte se conserta na fonte, não no HTML entregue
- **Sintoma:** no vídeo 8, 13 dos 23 lotes da arte (39 cenas) montam o `graphics/<id>.html` por um `montar.py` ou
  `montar.mjs`, a partir de uma fonte em `out/<proj>/_tmp/arte-1/<lote>/` (`<id>.fonte.html` ou `src/<id>.src.html`) e
  das partes que voltam em outras cenas, copiadas byte a byte. Nas palavras do EF1, editar o HTML direto "desfaz a igualdade
  dos blocos entre as cenas", e a próxima montagem apaga a edição. E a s28 copiou a grade das 229 da s05 no sha1
  `ee69d445`, de antes do conserto do EF1 (a entregue é `96c25144`); a Sala deu a igualdade ao `qc-visual` conferir.
- **Causa:** a cena entregue é saída de um script, e quem conserta depois (outra peça, no `qc`) só vê o HTML. O
  `montar28.py` do M3 lê a origem do disco sem conferir o sha1 dela; o do EF10 e o do EF12 conferem e param ("PARE: … mudou").
- **O que resolveu:** cada relato de lote diz onde está a fonte e o comando (`EF1.md`, o fim; `EF3.md`, "As ferramentas e as
  fontes do lote"; `EF10.md`, o começo), e os consertos da arte foram feitos na fonte (a s62, conserto 1, em
  `EF10/src/s62.src.html`). Medido em 20/11/2026: a montagem das fontes do EF1, do EF3 e do EF10 dá, byte a byte, os 10 HTML
  entregues, e o bloco da grade da s28 é igual ao da s05 entregue.
- **Como evitar:** antes de consertar, procure a fonte (`ls out/<proj>/_tmp/arte-1/*/montar.*` e o relato do lote);
  conserte a fonte ou a parte e monte de novo. Parte mudada: monte de novo toda cena que a inclui, também a de outro lote que
  a copia, e rode os portões em todas. Bloco copiado de outra cena: copie da versão entregue, com o sha1 dela conferido no
  script, como o `montar.py` do EF10. Quem monta deixa no relato o caminho da fonte e o comando.
- **Origem:** `out/australia-animais/_tmp/arte-1/EF1.md` (o fim), `EF3.md`, `EF10.md` e `M3.md` (o sha1 lido da s05);
  vídeo 8, 19 e 20/11/2026. Destino a): quem monta e quem conserta são desta etapa (até a `consertar-cena` existir, o
  conserto passa por esta skill), e nenhum portão confere a fonte contra o HTML entregue.

### L5 · A mesa vazia depois do corte, esperando o papel, lê como espera, e o portão de movimento não a vê
- **Sintoma:** "O quadro de 1,0 s: a mesa escura com a poça de luz e nada sobre ela, que lê como espera" (s19, `ab6b335a`,
  0–1,98 s; o andamento do `plano-da-sala.md`). Na s36 (`05826fde`), 2,05 s de mesa só com o crédito antes de a folha de 1979
  pousar: "sim, leem" como espera (`EF6.md`). No Juneau, o Lucas achou "quase 3 s de mesa vazia" na s40 (`APRENDIZADOS.md`,
  item 61). O `portao-movimento` deu 0 nas duas.
- **Causa:**
  - o conserto do campo em branco atrasou o pouso e passou a espera do cartão para a mesa. Na s19, o cartão pousava vazio em
    "scientist" (0,262 s), e o portão reprovou ("campo-em-branco 1.9"); com o pouso em "words." (1,983 s), a mesa ficou vazia
    antes dele. Na s36, a folha pousava em 0,95 s e esperava 1,3 s em branco; descendo em 2,05 s, a espera foi para a mesa;
  - o portão não vê a mesa. O "mapa parado" só conta com o mapa do MapLibre na tela, e o "campo em branco" é a caixa que pousa
    vazia e "não é de tela cheia" (o cabeçalho de `ferramentas/portao-movimento.mjs`, itens 1 e 4). A cena de mesa sai com
    `eh_mapa: false` e sem trecho parado (`out/australia-animais/_tmp/portao-movimento.jsonl`).
- **O que resolveu:** no vídeo 8, por decisão da Sala ("regra que fica para o vídeo", o andamento, 23:4x), a luz anda até o
  lugar do papel nos 2 primeiros segundos e chega com o pouso: s19 `34f6d032` (de (1000, 1380) a (1920, 836), 0,12–2,12 s;
  `alvoLuz`, linhas 513–524) e s36 `ba149eba` (de (2040, 1400) ao lugar da folha); a s38 a usa da foto até a pasta. Nas folhas
  do render, "a luz andando tira a cara de espera" (EF5 e EF6).
- **Como evitar:** depois de cada corte para a mesa, olhe o quadro de 1,0 s. A mesa vazia esperando o papel é defeito,
  mesmo com o portão em 0 (identidade §5, "Espaço vazio esperando a voz incomoda"; a revisão de espectador pergunta se há
  "mais de 2 s sem nada que acompanhe a fala"). Ao consertar um campo em branco atrasando o pouso, olhe o que fica antes dele.
  A luz andando é decisão da Sala para o vídeo 8, e muda "a luz chega um instante depois" (identidade §4.4, "A mão que
  arruma"). Fora dele, leve as saídas à Sala, como o EF5 e o EF6 fizeram: a luz andando, o papel que pousa com o que já pode
  entrar, ou o corte, que é do espelho.
- **Origem:** `out/australia-animais/_tmp/arte-1/EF5.md` ("A mesa vazia dos 2 primeiros segundos" e "O conserto 4"),
  `EF6.md` (os consertos de s36) e o andamento do `plano-da-sala.md`; vídeo 8, 19/11/2026, 22:5x a 23:4x. Destino a):
  julgamento; a trava (c) seria uma medida nova no portão de movimento, proposta à Sala.

### L6 · O crédito na tela sem o objeto que ele credita, ou o objeto sem o crédito
- **Sintoma:**
  - na s36, o crédito [170] ficava "sozinho na mesa por 2,05 s" antes de a folha de 1979 pousar;
  - na s65, os créditos de Lloyd-Jones et al. e de Fukuda et al. entravam antes do dado que creditam (o redator dá 9,500 e
    15,333 s; a pincelada entra em 12,85 s, e PROTECTED IN 1971, em 19,20 s);
  - na s16, o contrário: a folha do ABS ficava até 12,333 s, e "os zeros ficavam 7,3 s sem a linha do ABS".
- **Causa:** a peça pôs o crédito no t0 e no t1 do `textos-tela.json`, que o redator escreve pela janela do plano, sem olhar
  quando o objeto entra e sai na cena. Na s16, a regência ("the sheet stays") e o `textos-tela` (o crédito fecha em 5,067 s)
  divergiam, e a folha seguiu a regência, e o crédito, o `textos-tela`. A regra existia: o crédito "entra em 300 ms no
  primeiro quadro em que o asset aparece e fica até o último" (identidade §4.2). Nenhum portão mede: o `qc-credito-fantasma`
  só pergunta se há alguma mídia de `_media/` no quadro, e a mesa de satélite é uma; ele não casa crédito com objeto (o
  cabeçalho dele, "TRÊS COISAS QUE ELE DE PROPÓSITO NÃO FAZ").
- **O que resolveu:** s36 `aaf797e1` (o [170] entra com a folha, em 2,050 s; hoje `ba149eba`); s65 `68e0954a` (Lloyd-Jones
  entra e sai com a pincelada, 12,85–15,333 s; Fukuda entra com PROTECTED IN 1971, 19,20 s); s16 `accfb63a` (a folha levanta
  em 4,717 s e sai inteira em 5,067 s com o crédito do ABS; hoje `f6efbfbb`).
- **Como evitar:** o crédito e o objeto que ele credita (a foto, a folha, a camada de dado no mapa) entram e saem juntos. O
  t0 e o t1 do crédito no `textos-tela` são a janela do plano; na cena valem os do objeto. O crédito de mapa segue o mapa
  inteiro, do primeiro ao último quadro (identidade §4.2). Quando a regência e o `textos-tela` divergem sobre o tempo do
  objeto, não separe o par: leve à Sala. Antes de entregar, olhe nos quadros a entrada e a saída de cada objeto creditado, com
  o crédito no mesmo quadro.
- **Origem:** `out/australia-animais/_tmp/arte-1/EF6.md` (s36), `EF11.md` (s65), `EF4.md` (s16, "O que pediram e não fiz como
  estava escrito") e o andamento do `plano-da-sala.md`; vídeo 8, 19 e 20/11/2026. Destino a): a regra existia e não foi
  aplicada, e nenhum portão casa o crédito com o objeto.
