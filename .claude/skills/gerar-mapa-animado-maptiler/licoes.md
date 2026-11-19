# Lições: gerar-mapa-animado-maptiler

Os erros desta etapa, um bloco cada, registrados pela `registrar-aprendizado-como-skill` (catálogo §1.4 e §1.5). Leia antes
de entregar a cena e quando algo der errado. Estas são de julgamento: nenhum portão as mede. O mapa parado, a câmera
brusca, a viagem curta, o "·" na quebra e o campo em branco ficam com o portão de movimento; a sobreposição de texto sobre
texto e o tamanho da letra, com os portões de cena. O tamanho de foto e de símbolo e a pílula sobre uma peça do mapa nenhum
portão mede: são lições (L5 a L7). A peça que volta de outra cena volta com o rótulo que a identificava: a L2 daqui e a
`escrever-textos-de-tela`, L1.

### L1 · O par antes/depois não mostra o que a voz afirma
- **Sintoma:** "o par Landsat julho → abril não mostra que o lago baixou: julho some depressa, nada diz qual data é a
  cheia, e a única prova é a tira de chão no braço norte, pequena no celular" (s41, 0–4,7 s). O que mais mudava entre as
  duas imagens era a neve, não a água.
- **Causa:** julho ficava sozinho só até 0,39 s e o cruzamento acabava em ~1,6 s; o chão exposto era uma faixa de 40–70 px
  no 1080p, e nada marcava o contorno do lago cheio. A legenda do par sozinha não bastou.
- **O que resolveu:** consertos-1 (ESP-7, `out/rio-columbia/graphics/s41.html`): julho sozinho até "every" (0,8 s), o
  cruzamento em 0,8 s, e a faixa de chão exposto (entre o contorno do lago cheio e a água de abril) hachurada em
  `--destaque`, a mesma do "KEPT EMPTY".
- **Como evitar:** em todo par antes/depois, pergunte nos quadros de 1080p: a diferença que a voz afirma é a que mais salta
  à vista? Se outra coisa muda mais (neve, nuvem, luz, estação), marque o que mudou (hachura ou contorno no estado de
  antes) e deixe o "antes" sozinho na tela tempo de ser visto (~0,8 s), antes de cruzar.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s41, t 0, ESP-7); vídeo 7 (`rio-columbia`), revisão
  de 13/11/2026, conserto de 16/11/2026. Destino a): julgamento, nenhum portão mede.

### L2 · Peça nova na tela sem nome enquanto a voz fala de outra coisa
- **Sintoma:** "barra branca grossa, sem rótulo, da fronteira até o rio no lado americano, parada por uns 8,5 s; parece
  haste de etiqueta sem etiqueta" (s55; medido: 6,45 a ~10,8 s sem nome).
- **Causa:** o cabo da energia (24 px) entrava em 5,85–6,45 s e só ganhava sentido quando "CANADA'S SHARE" entrava, em
  ~10,8 s; a voz não falava do cabo antes de 11,3 s. O espectador o tinha visto 7 minutos antes, na s30, com 6 px e com o
  rótulo, e não o reconheceu.
- **O que resolveu:** consertos-1 (ESP-12 e ESP-13, `s55.html`): em "each side" o cabo e o pino de Oliver pulsam uma vez,
  em "gave something up" as 11 barragens americanas pulsam, e a pílula entra em "Canada" (9,37 s), não em "smaller".
- **Como evitar:** peça que volta de outra cena conta como nova: o espectador não a reconhece pela forma, ainda menos com
  outro tamanho. Ela entra com o nome, ou na palavra da voz que a explica, ou pulsa nessa palavra; nenhum trecho fica mais
  de ~1 s com uma peça sem sentido na tela (o número do conserto da ESP-13; a marca não dá número: identidade §5, "Espaço
  vazio esperando a voz incomoda").
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s55, t 6,5, ESP-12); vídeo 7, revisão de 13/11/2026,
  conserto de 16/11/2026. Destino a): julgamento, nenhum portão mede.

### L3 · A tela tira a cor do lugar que a voz nomeia
- **Sintoma:** "em 'The big sites for storing water are in Canada', o preenchimento dourado do Canadá some e os três lagos
  viram fios laranja finos, sem nome. O bloco verde-água dos EUA continua dominando a tela" (s19, 38–43,1 s).
- **Causa:** em "storing" (37,777 s) a bacia canadense se apagava; os lagos tinham 5 px de largura no 1080p (0,067 % da
  tela), e a bacia americana, a 35 %, ocupava quase metade do quadro. A hachura de 45° dentro de um fio de 5 px não se
  separa no 1080p, e o fecho "The other has the room" ficou sem gesto visível.
- **O que resolveu:** consertos-2 (R2-3, `s19.html`, b6): em "storing" os três lagos enchem em `--destaque` a 40 %, com
  contorno de 12 px e brilho; a bacia canadense fica a 25 % e a americana cai a 18 %; a câmera sobe aos lagos; em "room."
  o lado canadense pulsa uma vez. A hachura saiu, e o pulso ficou no lugar dela.
- **Como evitar:** o peso visual (cor, área, luz) segue o sujeito da frase: quando a voz nomeia um lugar, ele não perde cor
  nem tamanho na tela, e o que é contexto cai. Textura (hachura, listra) só em área que se separa no 1080p; em peça fina,
  o gesto é o pulso.
- **Origem:** `out/rio-columbia/_tmp/espectador-r2/mantidos.json` (s19, t 38, R2-3); vídeo 7, revisão de 17/11/2026,
  conserto de 17/11/2026. Destino a): julgamento, nenhum portão mede.

### L4 · A imagem que encolhe com a câmera na troca mostra a borda
- **Sintoma:** "na troca do par Landsat (julho) para a base da MapTiler, com o recuo do vale ao Noroeste ao mesmo tempo,
  aparece um retângulo mais claro com borda dura dentro de uma moldura escura: parece erro de carga" (s61, ~11,9–12,1 s).
- **Causa:** no `par(t)`, o PNG de julho, ainda a uns 40 % de opacidade, escalava com a câmera do recuo, que começava no
  mesmo 11,6 s do fade de 500 ms; a borda reta entrava no quadro por uns 6 quadros a 30 fps, na cena-pico 5.
- **O que resolveu:** consertos-1 (ESP-18, `s61.html`): o `#parBox` ganhou, de `T_MAPA` em diante, uma máscara de borda
  suave nos quatro lados (`mask-image` com uma rampa de 300 px do PNG); o fade, o recuo e o rótulo não mudaram.
- **Como evitar:** toda imagem sem moldura (satélite, PNG de base, recorte) que escala com a câmera enquanto some ganha
  borda suave (máscara), ou some antes de a borda entrar no quadro. A miniatura com moldura (identidade §5, "Nome de lugar
  com a foto") some inteira, sem máscara. Confira os quadros da troca um a um, a 30 fps, no MP4: nenhuma borda reta dentro
  do quadro. Quadro solto não mostra.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s61, t 11,5, ESP-18); vídeo 7, revisão de 13/11/2026,
  conserto de 16/11/2026. Destino a): nenhum portão mede borda de imagem na troca.

### L5 · O símbolo que carrega a frase não se lê como o que é
- **Sintoma:** "as notas de dinheiro que sobem o rio são retângulos pálidos de ~22 × 12 px no quadro 1080p, sem símbolo de
  dinheiro: no celular parecem poeira sobre o satélite" (s28, 4,6–13 s); e na s30, no fecho "So American money helped
  build Canada's dams", "o maço em The Dalles parece uma pilha de papel sem rótulo" e nada na tela diz "dinheiro".
- **Causa:** `var NOTA = { w: 44, h: 24 }` no 4K, a mesma peça copiada da s28 para a s30, com um retângulo interno cinza no
  lugar do símbolo; ampliada parecia cédula, no tamanho do quadro era mancha.
- **O que resolveu:** consertos-1 (ESP-3 e ESP-4, `s28.html` e `s30.html`): a cédula a 120 × 64 px no 4K, borda de 4 px e
  o "$" impresso; na s30, no máximo 3 cédulas à vista por monte, em leque.
- **Como evitar:** o ícone que leva a ideia da frase (dinheiro, barragem, navio) se lê pelo que é, no celular, sem a voz:
  com o símbolo dele, não só a silhueta. O tamanho também é julgamento, até a marca ter um número e um portão o medir. Hoje
  nenhum mede: o `qc-tamanho` é só de letra, e o `portao-movimento.mjs` deixa foto e símbolo com o `qc-visual`. No quadro
  de 1080p, o símbolo que carrega a frase não fica menor que o que se leu depois do conserto (a cédula a 60 × 32 px no
  1080p, 120 × 64 no 4K). Pergunte: "sem o som, isto é dinheiro?". Peça repetida em várias cenas muda em todas juntas.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s28, t 5, ESP-3; s30, t 24, ESP-4); vídeo 7, revisão
  de 13/11/2026, conserto de 16/11/2026. Destino a): a forma e o tamanho.

### L6 · A pílula sobre o mapa cobre o marcador ou o rio que a voz conta
- **Sintoma:** "A pílula 'Photo from 2009' da miniatura de Rocky Reach cobre o 3º marcador de barragem (Rock Island) e o
  trecho do rio logo abaixo do 2º; com a foto na tela só 4 anéis se veem, e o 5º surge do nada quando ela sai" (s57,
  8,5–14 s).
- **Causa:** a pílula ia de x ~1165 a ~1515 e de y ~458 a ~518 no 1080p, por cima do anel de Rock Island (~1482, 479). Ela
  estava presa à miniatura, e ninguém conferiu o que ela cobria com a câmera andando. O `check-overlap` só compara texto com
  texto.
- **O que resolveu:** consertos-1 (ESP-16, `out/rio-columbia/graphics/s57.html`): o aviso [369] com a borda direita na da
  miniatura, crescendo para a esquerda sobre a mata, fora do rio e do anel.
- **Como evitar:** a regra já existe para as linhas (identidade §6, "Nenhum rótulo sobre a divisa": a pílula não fica sobre
  a divisa, a malha, a estrada nem a rota; a roupa do `mapista` §3). Ela vale também para o rio e para o anel: nenhuma
  pílula, aviso do ano ou miniatura cobre um marcador ou um trecho que a voz conta, em nenhum instante do movimento. Nenhum
  portão mede peça do mapa sob texto: confira nos quadros da prova.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s57, t 8,5, ESP-16); vídeo 7, revisão de 13/11/2026,
  conserto de 16/11/2026. Destino a): regra que existia e não foi lida, e o anel, que ela não nomeava.

### L7 · A única foto da frase entra pequena demais para se ler no celular
- **Sintoma:** "A miniatura da pesca de salmão de 1938 (Kettle Falls), única imagem da frase do salmão, entra no alto à
  direita com uns 180 × 114 px no 1080p, menor que o próprio aviso 'Photo from 1938'" (s53, 32–34,2 s).
- **Causa:** 360 × 228 px no 4K. A identidade §5, "Nome de lugar com a foto", fala de uma "moldura pequena", sem número, e a
  miniatura de nome de lugar foi usada como a imagem que carrega a frase.
- **O que resolveu:** consertos-1 (ESP-11, `out/rio-columbia/graphics/s53.html`): 720 × 456 no 4K, presa às quedas,
  crescendo sobre a mata vazia, com o aviso logo abaixo.
- **Como evitar:** a foto que é a única imagem do que a voz diz não é miniatura de nome de lugar. No 1080p, a pessoa e o
  objeto dela se reconhecem (no vídeo 7, 360 × 228 px no 1080p bastou, e 180 × 114 não), e o aviso do ano nunca é maior que
  a foto. Até a marca ter um número, é julgamento.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s53, t 32, ESP-11); vídeo 7, revisão de 13/11/2026,
  conserto de 16/11/2026. Destino a): nenhum portão mede tamanho de foto.

### L8 · O conserto do mapa parado cobriu só o trecho achado, e o resto da mesma pose ficou parado
- **Sintoma:** o portão de movimento, rodado em 18/11/2026 sobre as 57 cenas do vídeo 7 aprovado, reprova cinco de mapa parado:
  a s19 (3,0 s, 15,9–18,9), a s28 (3,2 s na abertura e 3,1 s em 17,5–20,6), a s36 (2,5 + 7,2 + 5,6 s, de 25,8 a 41,9), a s46
  (2,4 + 2,1 + 3,4 s, além do trecho aceito) e a s48 (2,2 s, 7,0–9,2), todas com a câmera abaixo de 12 px/s no 4K.
- **Causa:** o lote de consertos deu movimento ao trecho que o revisor apontou (a s19 em 9,7–15,1 s; a s36 só no P3, até 22,3 s;
  a s48 em 0–4,2 s; a s46, a abertura pelo aceito) e deixou a mesma pose parada no resto, no ritmo lento de antes. O cético mediu
  o fluxo no clipe 4K entregue: 1,9 a 6,3 px/s nesses trechos, contra 31,7 no trecho consertado da s36.
- **O que resolveu:** nada nas cenas (o vídeo 7 está no ar desde 17/11); o portão de movimento (`ferramentas/portao-movimento.mjs`,
  v2), que a peça roda antes de entregar, agora pega a pose inteira, e a roupa do `mapista` §6 diz que o conserto vale para ela.
- **Como evitar:** quando o portão ou a revisão acusa um mapa parado, conserte a pose inteira (a aproximação suave e contínua do
  começo ao fim da pose, não um pulso no trecho apontado) e rode o portão na cena toda, não só na janela listada.
- **Origem:** `out/_tmp/portao-movimento/cetico.md` (K10 e a resposta 4); `out/_tmp/portao-movimento/RELATO.md` §5; vídeo 7,
  18/11/2026. Destino a), com a trava c) já no portão: a lição diz o que o portão não diz, que o remédio é a pose inteira.
