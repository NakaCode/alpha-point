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
