# MARCA — as chamadas (CTA)

> Como o Alpha Point pede inscrição e comentário dentro do vídeo. Vale do vídeo 2 em diante; o Juneau fica como está.
> Aprovado pelo Lucas em 01/10/2026 (§3). As peças moram em `marca/cta/pecas/`, e a regra de uso está em §4 a §8.

## 1 · O que o Lucas pediu (01/10/2026)

- **O pedido:** "Uma coisa a ser construída para os próximos vídeos são artes de CTA".
- **A pergunta:** "Quais peças de chamada você quer no kit dos próximos vídeos?" (escolha múltipla).
  - **A resposta:** "Inscrição no meio do vídeo" e "Pedido de comentário".
  - As opções diziam:
    - "Uma faixa animada curta (4 a 5 s) no rodapé, com o logo do canal e o botão "Subscribe", que entra num momento
      calmo do vídeo e sai sem cobrir mapa nem crédito";
    - "Uma pergunta curta na tela, ligada ao assunto do vídeo (por exemplo, "Where would you have put the capital?"),
      perto do fim, para puxar comentários".
  - Ficaram de fora, por ora: a tela final padrão e a chamada para o próximo vídeo.
- **A pergunta:** "O narrador fala a chamada, ou ela fica só na tela?"
  - **A resposta:** "Decidir depois". A opção dizia: "Desenho primeiro as peças da tela, e a voz fica para quando você
    vir como ficam."
  - Até ele decidir, a chamada é só de tela, e `marca/voz.md` não muda.

## 2 · O estilo: a faixa mínima (Lucas, 01/10/2026)

- Três estilos foram desenhados sobre o logo "A agulha" (§8 da identidade), cada um com as duas peças, e julgados por
  três lentes (marca e áreas reservadas; leitura do espectador; técnica e reuso). As propostas ficam em
  `marca/cta/propostas/`, fora do git: as prévias usam quadros do vídeo com satélite e footage licenciados.
- **A pergunta:** "Qual estilo de chamada (inscrição e comentário) vira o do canal? As prévias estão aqui no chat."
  - **A resposta (01/10/2026, 19:4x de Brasília):** "C, a faixa mínima". A opção dizia: "Uma faixa de rodapé com "ALPHA
    POINT" e o "Subscribe" claro, e a pergunta numa linha larga. Ficou em 2º (6,5): parece mais com os rótulos de lugar."
  - As outras opções eram "A, a agulha" (o 1º dos juízes, recomendado), "B, o cartão da mesa" e "Nenhum, nova rodada".
- **O estilo:** a peça escura com a agulha em uma cor e ALPHA POINT em Barlow Condensed 800, presa por um vão inclinado
  a 12° (o corte do símbolo) à peça clara, o botão "Subscribe" em --tinta, que entra em contorno e se enche. O
  comentário é da mesma família: a pergunta grande na peça escura e "Answer in the comments" na peça clara.
- **O refino:** o que os juízes apontaram nele (parecer rótulo de lugar, a pergunta longa larga demais, a saída com
  estalo, o símbolo copiado no código, as entradas-limite) foi corrigido mantendo o visual que o Lucas escolheu, em duas
  rodadas, com três juízes no meio (notas 8,5, 7,5 e 7,5, as três com "o visual do Lucas mantido"). O registro está em
  `marca/cta/propostas/c-faixa-minima/_resultado-refino.json`, fora do git.

## 3 · A aprovação (Lucas, 01/10/2026, 20:3x de Brasília)

Ele viu a folha com a inscrição sobre o mapa e a mesa e o comentário com a pergunta curta e a longa, e as duas peças em
movimento.
- **"A faixa mínima refinada (as prévias estão no chat) vira a chamada do canal a partir do vídeo 2?"**
  - **A resposta:** "Aprovo (Recomendado)". A opção dizia: "Vira regra em marca/cta.md e na identidade. O regente põe
    as chamadas, o redator escreve a pergunta de cada vídeo e o qc confere."
- **"O tamanho da pergunta do comentário: a de 192 px, que você viu, ocupa ~16 % da tela. A de 176 px tem a mesma cara e
  ocupa ~14 %. Qual fica?"**
  - **A resposta:** "176 px, um pouco menor". A opção dizia: "A mesma faixa, cobrindo um pouco menos da cena."
  - A outra opção era "192 px, a que vi (Recomendado)".
- **"Quantas vezes a chamada entra em cada vídeo?"**
  - **A resposta:** "Uma de cada (Recomendado)". A opção dizia: "A inscrição uma vez no meio (entre 35 e 60 % do vídeo,
    nunca no 1º minuto) e o comentário perto do fim, saindo antes da tela final. Em vídeo com menos de 5 min, só o
    comentário."
- O giro da agulha ao entrar estava nas prévias que ele aprovou: fica. A voz continua "Decidir depois" (§1).

## 4 · As peças

- **Onde moram:** `marca/cta/pecas/`, no git. `inscricao.html` é a inscrição, `comentario.html` é o comentário, e
  `_perguntas.mjs` testa a pergunta. O gravador é `marca/cta/_capturar.mjs`.
  - São a versão 3 da proposta com duas mudanças: o alvo da pergunta a 176 px (§3) e os caminhos das fontes e do
    símbolo, que subiram um nível. O cabeçalho de cada peça diz o que mudou.
  - A proposta, as prévias e os fundos ficam em `marca/cta/propostas/`, fora do git: as prévias têm quadros do vídeo
    com satélite e footage licenciados.
- **As caixas**, medidas em 01/10/2026 nas gravações das peças de `marca/cta/pecas/`. A caixa é a união do alfa de todos
  os quadros, com a subida de 24 px e o contorno, no palco 4K:

| peça | como se chama | duração | caixa (x e y, em px) |
|---|---|---|---|
| inscrição, embaixo | `inscricao.html` | 4,5 s | x 2029–3626, y 1457–1746 |
| inscrição, em cima | `inscricao.html?lugar=cima` | 4,5 s | x 2029–3626, y 195–484 |
| comentário padrão, embaixo (2 linhas a 176) | `comentario.html` | 6 s | x 1525–3626, y 1094–1746 |
| comentário padrão, em cima | `comentario.html?lugar=cima` | 6 s | x 1525–3626, y 200–852 |
| comentário longo, embaixo (3 linhas a 160) | `comentario.html?q=<pergunta>` | 8 s | x 1422–3626, y 965–1746 |

- **A caixa do comentário muda com a pergunta.**
  - Embaixo, a placa da pergunta cresce para cima a partir de y 1532. Em cima, ela começa em y 200 e cresce para
    baixo. Ela nunca passa de x 1340 para a esquerda.
  - A peça clara, "Answer in the comments", fica sempre em x 2190–3622: embaixo, em y 1550–1718; em cima, logo abaixo
    da placa.
  - A caixa exata de cada pergunta está no `__info()` da página (`placa` e `clara`, sem a subida nem o contorno) e,
    depois da gravação, no `.medidas.json` › `uniao`.
- **O tamanho na tela.** Com o 176, a placa da pergunta padrão mede 2.096 × 437 px (a 192 eram 2.280 × 477). Com a
  peça clara, o comentário padrão cobre uns 13,9 % do quadro (eram 16,0 %). A inscrição cobre uns 5 %.
- **A folga.** Toda peça fica a 12 px ou mais da zona proibida da identidade §4.2: x < 200, x ≥ 3640, y < 160,
  y ≥ 1880 e o canto do YouTube (x ≥ 3440 com y ≥ 1760). Nas gravações de 01/10, sobram 13 px livres em todas. O
  gravador avisa abaixo de 10 px: um retoque (contorno mais grosso, sombra, subida maior) não pode comer a folga sem
  que se veja.
- **Os parâmetros** vão na URL da página, ou no gravador com o mesmo nome (`--lugar=cima`):
  - `?lugar=cima`: a mesma peça presa em cima à direita, com o topo em y 200. O padrão é embaixo;
  - `?gira=0`: tira o giro da agulha das duas peças. O giro fica (§3): `?gira=0` só com uma decisão do Lucas;
  - `?q=<pergunta>`: a pergunta do comentário (§7). Sem ela, vale "Where would you have put the capital?";
  - `?dur=<s>`: força a duração, e a saída se ancora no fim. A inscrição tem 4,5 s; o comentário tira a dele da
    pergunta (§7), e o `__info()` avisa se ela ficar abaixo do tempo de leitura;
  - `?corpo=160`: só para comparar. O 192 da proposta não vale mais, e a página o recusa;
  - `?t=<s>`: o instante mostrado ao abrir a página no navegador.
- **O que a página recusa.** A promessa `__pronto` rejeita, o `render()` lança erro, e o gravador sai 1 com a mensagem
  da página, sem montar nada:
  - a fonte ou o símbolo que não carregou ("a página saiu da pasta dela?"), e o símbolo com outra caixa;
  - na pergunta: caractere fora da lista (tag, emoji, outra escrita), letra que a Barlow do canal não desenha, palavra
    mais larga que a linha, mais de 3 linhas a 160 px, mais de 3 linhas forçadas com `|`, e a pergunta que só caberia
    partindo a oração no meio. A mensagem diz "encurte a pergunta" ou "reescreva a pergunta";
  - `?corpo=` que não seja 176 nem 160.
- **O que a página só avisa** (no `__info().aviso`, que o gravador imprime): a quebra que parte um sintagma porque
  nenhuma outra coube; a duração abaixo do tempo de leitura; e, na inscrição, a duração curta em que o botão fica cheio
  menos de 1,5 s.
- **O que o gravador reprova** (sai 1, sem montar e sem deixar quadros): pixel fora da zona; conteúdo no primeiro ou
  no último quadro do clipe; pixel laranja ou vermelho; e estalo, o 1º ou o último quadro visível acima de 5 % de
  opacidade.

## 5 · O momento

**Quem escolhe é o `regente-de-imagem`, na regência. Quem confere é o `qc-visual`, no quadro.** A chamada entra num
trecho em que as três coisas abaixo valem durante toda a permanência dela.

1. **O canto está livre.**
   - Nenhum rótulo de lugar, pílula, número, legenda de mapa, crédito, ponto ou anel do protagonista a menos de
     **~80 px** da caixa da peça (§4).
   - **Nem na mesma faixa de altura de uma pílula ou de um rótulo, no mesmo terço do quadro**, mesmo a mais de 80 px.
     Duas placas escuras alinhadas voltam a ler como dois rótulos. No registro do s01 do Juneau, a inscrição
     (y 1462–1718) e a pílula "Juneau, Alaska" (y ~1380–1570) ficariam na mesma linha do terço de baixo: ali, não.
   - Embaixo é o padrão. Com o canto de baixo ocupado, `?lugar=cima`. Com os dois ocupados (no s03 do Juneau, o
     rótulo "Juneau" embaixo e a legenda em cima), **não é ali**: procura-se outro momento, e nunca se empurra a peça.
   - Em cima, o card do YouTube mostra o aviso no canto de cima à direita: nenhum card no mesmo trecho.
2. **A cena está calma.** De preferência um respiro (identidade §4.3: beat de 6 s ou mais com movimento lento), um
   registro ou uma foto parada, ou a mesa. **Nunca** durante:
   - um número-herói, um território acendendo, o anel do ponto ou a viagem de câmera do mapa;
   - uma fala citada, uma folha de documento ou uma legenda longa sendo lidas. O comentário é bloco de leitura: conta
     nos 3 blocos e nos 6 elementos da identidade §4.2. A inscrição conta como 1 elemento;
   - um corte: a peça inteira cabe num beat só, sem atravessar a troca de regime.
3. **A fala não depende da tela.** A chamada é só de tela (§1). Ela não entra enquanto o narrador aponta para algo na
   tela ("here", "this line"), nem sobre a frase-chave do bloco. De preferência, num trecho de fala curta ou de pausa,
   por causa da legenda automática (§8); com fala densa no trecho escolhido, `?lugar=cima`.

**Onde se grava.** O contrato da regência não tem campo para a chamada. O regente a grava em `regencia.json` ›
`_chamadas`, um item por chamada:
- `peca` (`inscricao` ou `comentario`) e `lugar` (`baixo` ou `cima`);
- `inSec`, o início no relógio do `out/<proj>/words.json`: o fim (`end`) da última palavra da frase depois da qual a
  chamada entra; e `depois_de`, essas últimas palavras, na grafia do `words.json`;
- `dur`, a duração da peça (4,5 s na inscrição; no comentário, a do `__info()` da pergunta, §7);
- `cena`, o id da cena que fica por baixo, e `porque`: por que o trecho é calmo e o canto está livre, com o que fica
  mais perto da caixa e a que distância.

**Como se mede.**
- A caixa da chamada é a da tabela do §4, ou, para outra pergunta, a `uniao` do `.medidas.json` da gravação
  (`out/<proj>/cta/<nome>.medidas.json`, §8).
- A caixa de cada rótulo da cena, no mesmo instante, sai do `scripts/probe-elemento.mjs <cena.html> <t> --ids=<ids>`,
  com `REGIE_MOTOR` na mesma chamada (CLAUDE.md, "Os scripts do canal"). O `t` é o da cena: o `inSec` da chamada menos
  o `inSec` da cena.
- O `qc-visual` compara as duas no começo, no meio e no fim da permanência. Menos de 80 px, ou a mesma faixa de altura
  de uma pílula no mesmo terço, reprova o momento.
- Ele também olha o quadro: tira esses três quadros do clipe da cena para `out/<proj>/_tmp/` e grava a peça por cima
  deles com o `--fundos=` do gravador (§8), com a saída em `out/<proj>/_tmp/cta/`. As prévias saem em 1080p. Essa
  gravação é só de conferência: nunca vai a `out/<proj>/cta/`, que guarda a peça da montagem, nem a `_media/` (§8).
- Ainda não há portão que faça essa comparação sozinho, e ela ainda não foi feita numa cena de verdade com a chamada.

## 6 · Quantas vezes

**"Uma de cada"** (Lucas, 01/10/2026; §3):
- **No máximo duas chamadas por vídeo:** uma inscrição e um comentário. Nunca as duas no mesmo minuto.
- **A inscrição, uma vez, no meio:** entre 35 % e 60 % da duração do vídeo, e nunca no 1º minuto. Num vídeo de 10:00,
  entre 3:30 e 6:00.
- **O comentário, uma vez, perto do fim:** depois do último fato, quando a pergunta da abertura já foi respondida. Ele
  sai **antes da cauda da tela final** (`canal.json` › `narracao.cauda_tela_final_s`, 20 s hoje): a peça termina pelo
  menos 1 s antes de a cauda começar, porque na cauda a metade direita é dos elementos do YouTube. Num vídeo de 10:00,
  a cauda começa em 9:40, e o comentário sai até 9:39.
- **Vídeo com menos de 5 min:** só o comentário.
- **Quando não há trecho antes da cauda: o comentário na tela final, à esquerda** (Lucas, 07/10/2026, no vídeo 2). A
  pergunta: "A chamada de comentário (a pergunta grande "Answer in the comments") precisa vir depois de o vídeo responder à pergunta do título e sair antes da tela final. No vídeo 2, esse trecho é só a conclusão (12:03 a 12:09), quando a voz diz a frase principal ("The strip was never a road to the sea...") e o canal do porto acende no mapa. Como fazemos?" A resposta: "Na tela final, à esquerda (Recomendado)". A opção dizia: "A pergunta entra nos 20 s finais, sem narração, na metade esquerda (a direita é dos botões do YouTube), sobre o mapa escurecendo. Pede uma posição nova da peça, à esquerda, e muda a regra do cta só nesse ponto." As outras eram "Na conclusão, em cima" e "Sem
  comentário na tela".
  - No vídeo 2, o comentário entra na cauda (os 20 s sem voz), **na metade esquerda**, sobre o mapa final escurecendo, e
    sai antes do fim; a metade direita e o canto de 400 × 400 px continuam livres para os elementos do YouTube.
  - A peça ganha uma posição nova, à esquerda (`?lugar=esquerda` em `marca/cta/pecas/comentario.html`): quem a faz é o
    `editor-de-arte`, no `art`, com a mesma família e os mesmos tamanhos; a caixa se mede como as outras (§5).
  - Nos próximos vídeos, o comentário continua antes da cauda (acima). A tela final só se usa quando nenhum trecho antes
    dela cumprir o §5, e isso volta ao Lucas.
- **O Juneau fica como está**, sem chamada.

## 7 · A pergunta do comentário

- **Quem escreve é o `redator-de-tela`**, a cada vídeo, na mesma passada dos outros textos de tela. O contrato do
  `textos-tela` não tem campo para ela: a pergunta, o corpo, as linhas e a duração vão no report dele.
- **Como ela é:** em inglês dos EUA, calma, em segunda pessoa, ligada ao assunto do vídeo e respondível por quem acabou
  de assistir. Um lugar, uma escolha, uma hipótese: "Where would you have put the capital?".
- **Nunca:** pedir like ou inscrição na pergunta; "smash", "let me know below!!!", emoji; opinião sobre partido,
  político ou eleição de hoje, nem "who's right?" entre dois lados (voz §2); "recently", "this week" (voz §2;
  identidade §7).
- **Antes de entregar**, o redator roda `node marca/cta/pecas/_perguntas.mjs --q="<pergunta>"` e lê o `corpo`, as
  `linhas`, a `duracao` e o `aviso`. Quem decide o corpo, as linhas e a duração é a página, não a contagem de
  caracteres.
  - Saiu erro ("encurte a pergunta", "reescreva a pergunta"): ele reescreve.
  - Saiu aviso de quebra que parte um sintagma: ele reescreve, ou força a quebra com `|`. O `|` é exceção, e a
    pergunta se confere no quadro.
- **O tamanho** (Lucas, 01/10/2026: "176 px, um pouco menor"):
  - o corpo é **176 px**. Ele desce a 160 só quando a pergunta não cabe em 2 linhas a 176 com uma quebra boa;
  - 3 linhas, só a 160 e só quando 2 não cabem. Uma linha, só a 176. Assim, o corpo nunca cresce com o número de
    linhas: 1 linha a 176; 2 linhas a 176 ou a 160; 3 linhas a 160;
  - **a contagem de caracteres não garante o corpo.** O que decide é a largura das palavras e onde a quebra boa cai. No
    conjunto abaixo, as perguntas de 28 a 47 caracteres saíram a 176 (a placa de 437 px de altura em 2 linhas), menos
    uma: "Which border would you erase from the map?", com 42, desce a 160, porque a 176 ela não cabe em 2 linhas com
    uma quebra boa. As de 48 a 53 saíram a 160 em 2 linhas (397 px), e as de 55 em diante, em 3 linhas a 160 (566 px).
    Isso é ordem de grandeza, não régua: o corpo de cada pergunta só se sabe rodando o `--q`;
  - não há teto fixo de caracteres nem de palavras. O que não cabe em 3 linhas a 160, ou só cabe partindo a oração, a
    página recusa.
- **A quebra é automática:** de preferência depois de pontuação, ou antes de palavra que abre um sintagma; nunca
  depois de artigo, preposição, conjunção, modal ou "not". Ela só parte um sintagma ("a new / capital", "Alaska’s /
  capital") se nenhuma outra couber, e aí avisa.
- **Os caracteres:** só letras latinas, algarismos e pontuação comum. Aspas e apóstrofo saem curvos (‘Willow’,
  Alaska’s, ’70s).
- **A duração** sai da pergunta: ela fica inteira na tela por max(5,0 s; 1,6 s + 0,3 s por palavra, contando as 4 de
  "Answer in the comments"), e a peça arredonda para o meio segundo de cima. São 6 s na padrão e 8 s na longa.
- **Fato na pergunta:** se a pergunta afirmar um fato, ele passa pelo `verificador-de-fatos`, como qualquer texto de
  tela, antes de ir à peça. O que a pergunta pressupõe também conta: "Why did Alaska never move its capital?" afirma
  que a capital nunca mudou. A pergunta que só oferece uma escolha ("Juneau or Willow?") não afirma nada.
- **A mesma pergunta vai também na descrição e no comentário fixado** do vídeo, palavra por palavra: a legenda
  automática e o leitor de tela não leem a tela (§8).

O conjunto fixo do `_perguntas.mjs`, medido em 01/10/2026 com o 176: 30 casos, todos como o esperado. A saída fica em
`marca/cta/propostas/c-faixa-minima/final/perguntas.json`, fora do git. Rode o conjunto inteiro a cada mudança da
quebra, do corpo ou da largura: `node marca/cta/pecas/_perguntas.mjs`.

| pergunta, com a quebra | caracteres | corpo | linhas | duração | placa (px) |
|---|---|---|---|---|---|
| Was ‘Willow’ the right call? | 28 | 176 | 1 | 6 s | 2.095 × 272 |
| Have you ever / been to Juneau? | 29 | 176 | 2 | 6 s | 1.471 × 437 |
| Which capital / would you pick? | 29 | 176 | 2 | 6 s | 1.442 × 437 |
| Where would you have put / the capital? (a padrão) | 37 | 176 | 2 | 6 s | 2.096 × 437 |
| Which city should be / Alaska’s capital? | 38 | 176 | 2 | 6 s | 1.738 × 437 |
| Where would you move / Washington, D.C.? | 38 | 176 | 2 | 6 s | 1.888 × 437 |
| Should a state capital / be easy to reach? | 40 | 176 | 2 | 6,5 s | 1.804 × 437 |
| Have you driven the road / north of Juneau? | 41 | 176 | 2 | 6,5 s | 2.005 × 437 |
| What did the ’70s get right / about Alaska? | 41 | 176 | 2 | 6,5 s | 2.101 × 437 |
| Which border would you erase / from the map? | 42 | 160 | 2 | 6,5 s | 2.150 × 397 |
| Which one would you pick: / Juneau or Willow? | 43 | 176 | 2 | 6,5 s | 2.124 × 437 |
| What would a capital / in Willow have changed? | 44 | 176 | 2 | 6,5 s | 1.995 × 437 |
| Could the capital move / to Prince William Sound? | 47 | 176 | 2 | 6,5 s | 2.009 × 437 |
| Which country has / the strangest border you know? | 48 | 160 | 2 | 6,5 s | 2.256 × 397 |
| If you could redraw one border, / which would it be? | 50 | 160 | 2 | 7 s | 2.213 × 397 |
| Where would you build / a new capital for your country? | 53 | 160 | 2 | 7 s | 2.224 × 397 |
| Would you have moved / Alaska’s capital / away from Juneau? | 55 | 160 | 3 | 7 s | 1.772 × 566 |
| Do you think Alaska / will ever move its capital / out of Juneau? | 61 | 160 | 3 | 7,5 s | 1.909 × 566 |
| Juneau, Willow or Anchorage: / where would you have put / Alaska’s capital, and why? | 80 | 160 | 3 | 8 s | 2.200 × 566 |

As perguntas acima são de teste: a de cada vídeo é do redator. O conjunto também confere o que a página tem de
recusar: tag, emoji, outra escrita, palavra larga demais, pergunta longa demais e `?corpo=192`.

## 8 · Os comandos e a montagem

- **O que precisa nesta máquina:** o npm do molde (`playwright-core` e `sharp` em `node_modules/`, desde 01/10/2026),
  o `ffmpeg` no PATH e o Chrome em `C:/Program Files/Google/Chrome/Application/chrome.exe` (o caminho está fixo no
  gravador e no `_perguntas.mjs`). O Chrome roda sem a rasterização por GPU: a mesma peça sai igual, bit a bit, em
  qualquer gravação (`node marca/cta/pecas/_perguntas.mjs --determinismo`).
- **Os comandos**, da raiz do canal. Toda opção com valor vai com "=": sem ele, o gravador recusa.
  - a pergunta, antes: `node marca/cta/pecas/_perguntas.mjs --q="<pergunta>"`;
  - a inscrição: `node marca/cta/_capturar.mjs marca/cta/pecas/inscricao.html 4.5 out/<proj>/cta`, com
    `--lugar=cima --nome=inscricao-cima` para a de cima;
  - o comentário: `node marca/cta/_capturar.mjs marca/cta/pecas/comentario.html auto out/<proj>/cta
    --q="<pergunta>"`, com `--lugar=cima --nome=comentario-cima` se for o caso;
  - `--fundos=a.jpg,b.jpg` faz as prévias 1080p sobre quadros da cena. O `.mov` e o `.medidas.json` saem sempre. A
    prévia com quadro da cena é conferência: vai a `out/<proj>/_tmp/cta/` (§5), não a `out/<proj>/cta/`.
- **O que sai:** o `.mov` (ProRes 4444 com alfa, 3840×2160, 30 fps, BT.709), o `.medidas.json` (a caixa, a folga e o
  `__info()`) e as prévias. O `.medidas.json` é texto e vai ao git com o vídeo; o `.mov`, as prévias e os quadros, não
  (`out/**/*.mov`, `*.mp4` e `*.png` no `.gitignore`).
- **Por que `out/<proj>/cta/`, e nunca `out/<proj>/_media/`.** A chamada é peça construída da marca, como as cenas:
  não é mídia de acervo nem de banco, e não leva `_PROCEDENCIA.json`. Dois scripts do canal varrem `_media/` inteira,
  e lá a chamada seria tratada como mídia baixada (medido em 01/10/2026 numa raiz de canal falsa, fora de `out/`, com
  o `.mov`, o `.medidas.json` e uma prévia da inscrição, e uma foto declarada ao lado):
  - o `scripts/qc-procedencia.mjs` reprova o projeto: com a chamada em `_media/cta/`, "2 arquivo(s) de acervo SEM
    procedência declarada", exit 1; com ela em `out/<proj>/cta/`, PASS, exit 0. Nenhuma das isenções dele casa com
    `cta`;
  - o `scripts/normalizar-footage.mjs` a pegaria como footage: no `--dry`, o `.mov` sai como "prores: o Chrome NÃO
    decodifica", na fila de conversão para H.264, que descarta o alfa inteiro. Em `out/<proj>/cta/`, "0 arquivo(s)".
  O `qc-footage-seekavel` também só varre `_media/`. Na mesma raiz falsa, a inscrição e o comentário gravados pelos
  comandos acima em `out/<proj>/cta/`, e a conferência do comentário com `--fundos=` em `out/<proj>/_tmp/cta/`, saíram
  com os mesmos bytes das gravações do §4, e os três scripts passaram (PASS; "0 arquivo(s)"; "nenhum footage").
- **A montagem, no Premiere:**
  - o `.mov` (`out/<proj>/cta/<nome>.mov`) vai numa trilha acima das cenas;
  - o início é o `inSec` que o regente gravou (§5), tirado do `words.json`;
  - confira o fim contra a cauda: o início mais a duração termina pelo menos 1 s antes de a cauda começar (§6);
  - a peça não se corta nem se estica. Para outra duração, grave de novo.
- **O que NÃO foi testado**, e por isso não se promete:
  - **a legenda automática do YouTube.** A legenda fica centrada embaixo no player. Com a barra do player à mostra,
    ela sobe e, numa fala longa, pode chegar a uns y 1700 e passar de x 2029 no palco 4K: aí encostaria no pé da
    inscrição e da peça clara do comentário. É estimativa, não medida. Medir pede um envio não listado (no celular, em
    pé e em tela cheia, com os controles à mostra), e o envio é decisão do Lucas. Até lá, vale a preferência por fala
    curta ou pausa (§5). A legenda e a tradução automáticas não tocam no texto da peça: ele é desenho, em inglês;
  - **o `.mov` no Premiere.** O alfa está reto no arquivo, como o ProRes 4444 espera, mas ninguém o abriu no Premiere
    ainda;
  - **o XML do motor.** O `finalizar.mjs` da pré-v1 tem um plano de CTA (`src/finalize/planejar-ctas.mjs`) que lê a
    regra de `marca/finalizacao.json` › `ctas_regra`, arquivo que este canal não tem, e um `.mov` de CTA de outro
    canal. Ninguém conferiu como ele receberia estas peças. Até conferir, a chamada entra à mão no Premiere, por cima
    do que o XML montar.

## O que falta
- A voz (§1), quando o Lucas decidir.
- Medir a faixa com a legenda automática do YouTube ligada (pede um envio, decisão do Lucas) e abrir o `.mov` no
  Premiere pela primeira vez (no vídeo 2).
- Conferir como o XML do motor recebe as chamadas (§8).
- Um portão que meça o momento (§5) sozinho: hoje a comparação das caixas é à mão, pelo `qc-visual`.
