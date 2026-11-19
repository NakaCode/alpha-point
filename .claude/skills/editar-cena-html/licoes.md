# Lições: editar-cena-html

Os erros desta etapa, um bloco cada, registrados pela `registrar-aprendizado-como-skill` (catálogo §1.4 e §1.5). Leia antes
de entregar a cena e quando algo der errado. Estas são de julgamento: nenhum portão as mede. O "·" na quebra, o campo em
branco e o movimento ficam com o portão de movimento; a sobreposição de texto sobre texto e o tamanho da letra, com os
portões de cena. O tamanho de foto e de símbolo nenhum portão mede: veja a `gerar-mapa-animado-maptiler`, L5 e L7, que valem
também na mesa. A peça que volta de outra cena volta com o rótulo que a identificava: `escrever-textos-de-tela`, L1, e
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
