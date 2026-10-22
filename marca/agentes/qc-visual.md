<!-- Roupa do Alpha Point para o qc-visual. Escrita em 26/09/2026, na instalação dos especialistas da pré-v1 da
     Régie. Agente: .claude/agents/qc-visual.md (projeção do commit 7ab9543 da pré-v1, Source-SHA256
     7fb1a88c95…). Molde de formato: template/marca/agentes/qc-visual.md da pré-v1, que é a roupa do Canal Top10
     — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal: marca/identidade.md, marca/voz.md,
     marca/midia.md, marca/tokens.css, canal.json, CLAUDE.md, APRENDIZADOS.md, roteiros/<proj>/. Onde o canal
     ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. Se o Source-SHA256 do
     agente mudar, releia esta roupa contra o ofício novo. -->

# ROUPA ALPHA POINT — qc-visual

> Só o que é do canal. O ofício (as 14 lentes, a régua 0–10, reprovar × sinalizar, os frames olhados, o que se
> recusa) está em `.claude/agents/qc-visual.md` e não se discute aqui. Você julga; não conserta. O laudo é em
> português; os nomes de lente e as chaves de JSON ficam como estão.

## 0 · O canal, e onde ele roda

- **Faceless** (identidade.md §0 e §5): cota de apresentador 0 %. O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo tem de estar coberto por cena. O relógio é um só, `out/<proj>/words.json`: não há
  `_cortes.json`, retake, `words-final` nem mídia na nuvem. O ⚠️⚠️ do ofício sobre corte bruto (contrato §4)
  não tem objeto aqui.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **O texto na tela se julga contra o `out/<proj>/textos-tela.json`** (passo `screen_text`, conferido e checado),
  que o contrato do ofício não lista: é ele que diz o que vai à tela e a grafia final de cada rótulo, card,
  crédito e aviso do ano, e o que fica fora (`nao_vai_para_tela`). O tempo de cada texto e a conta do teto
  (`auditoria`) estão na `out/<proj>/regencia.json`, que o contrato lista. Texto na cena que não está no
  textos-tela, grafia diferente dele, ou texto do `nao_vai_para_tela` na tela: reprova na lente **factual**.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json` › `narracao.cauda_tela_final_s`).
  Ver §6.
- **Sem título de capítulo na tela** (CLAUDE.md; Lucas, 26/09/2026). O gate duro do card de título (ofício §2)
  fica sem objeto; card de capítulo na tela reprova (§5).
- **Tudo roda no PC do Lucas, no Windows.** `<motor>` é a pré-v1 (CLAUDE.md, "Os especialistas"), nunca o
  `motor.caminho` do `canal.json`. Portões: `node scripts/<portão>.mjs`, com `REGIE_MOTOR` na mesma linha.
- **Nunca rode** `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio.
- **Você não vai à rede.** Se um dia for: site que recusa leitura automática (403, captcha, verificação de
  robô) não se contorna por meio nenhum; pare e diga no laudo (CLAUDE.md, "A marca").
- **Vocabulário de máquina não se traduz**: `espaco`, `factual`… no laudo, chaves de JSON, enums, `data-qc-*`
  (CLAUDE.md, "O vídeo fala inglês").

## 1 · A rubrica deste canal

- **Julgue com**: as 14 lentes do ofício; os números de `marca/identidade.md`, `marca/voz.md` e
  `marca/midia.md` (§4 abaixo); e as decisões do Lucas no `CLAUDE.md`. Essas são as leis da casa, e reprovar
  por elas cita o arquivo e a seção (ex.: "identidade.md §4.2, teto de 6 elementos").
- **O acervo do Top10 é outra coisa.** `knowledge/qc/lentes.md`, `seed/regras/` (ARTE, SIS, PESQ…) e `regua/`
  vieram do molde, com os números, a fonte e a língua do Top10.
  - Servem como ofício, quando o fundamento vale em qualquer canal: geometria real, crédito-fantasma, asset
    correto.
  - **Nunca** reprove por uma lei que é gosto de lá: zero crédito de mapa na tela (ARTE-104), 3D por padrão
    (ARTE-43), peso 600 (ARTE-148), e a paleta, a fonte e a régua de motion de lá.
  - Onde um número de lá diverge da identidade, vale a identidade.

## 2 · Os quadros, nesta máquina (ofício, contrato §4)

- **Cena sem mapa**: `node <motor>/src/ferramentas/quadro.mjs out/<proj>/graphics/<cena>.html
  out/<proj>/_tmp/qc-<cena>@<t>.png --t=<t>`. Ele usa CDP, sem npm. O `shot.mjs` roda desde 01/10/2026 (o npm
  foi autorizado), com `REGIE_MOTOR` na mesma chamada.
- Se o `quadro.mjs` cair com a conexão fechada (foto ou satélite em tela cheia; por quê: CLAUDE.md, "Peças da
  pré-v1", item 7), use o clipe renderizado, desde que ele valha (abaixo):
  `ffmpeg -ss <t> -i out/<proj>/graphics/<cena>.mp4 -frames:v 1 out/<proj>/_tmp/qc-<cena>@<t>.png`.
- **O clipe vale** só se o `<cena>.mp4.de-html` tem as duas linhas certas: a primeira igual ao `sha1sum` do HTML
  (o clipe é deste HTML) e a segunda `2160p` (o render foi `--4k`). Com `1080p` no carimbo, é clipe velho, renderizado
  sem `--4k` (CLAUDE.md, "Os especialistas", tropeços): ele não vale, e o que vale para a cena sem clipe vale para ele.
- **O quadro reduzido não é o clipe de 1080p.** O quadro em 1080p de um clipe que vale, ou de um HTML 4K (o do verbo
  `quadros` da linha do tempo, o do ffmpeg com `scale`, a folha de contato), serve a todas as lentes, menos às medidas
  em px: o rótulo de 128 px, o crédito de 56 px (76 no Juneau), a margem de 200 px e a distância da chamada vêm do
  portão (a margem, do `portao-margens`, §3) e do `probe-elemento` (§3 e §5), não do olho num quadro reduzido. Um quadro 4K lido inteiro também chega a
  você reduzido (com no máximo 2.000 px de lado, medido nas transcrições do vídeo 2): para ver um crédito ou uma borda
  de perto, só o recorte do quadro 4K mostra o detalhe (§2.1, a folga).
- **Cena de mapa**: a prova é o clipe, não o `quadro.mjs` (por quê: CLAUDE.md, "Peças da pré-v1", item 7). O
  `maprender.mjs` do ofício não existe aqui.
  - Se o clipe vale, tire os quadros dele com o ffmpeg. Não custa nada.
  - Sem clipe, ou com clipe velho, **não renderize**: o render pede tiles pagos da MapTiler e é do
    `editor-de-arte` ou do `mapista` (no Juneau, o gasto de pedidos na MapTiler está liberado, com o relevo 3D só em s44 (Lucas, 28/09/2026; identidade.md §6, "O gasto do Juneau, liberado"), com o
    contador anotado pelo Claude central). A cena fica **não julgada** (bloqueio): diga isso ao Claude
    central. Nunca aprove cena de mapa sem quadro.
- Os quadros saem do `quadro.mjs` ou, na cena de satélite, do MP4 renderizado, com o ffmpeg: o `quadro.mjs`
  não fotografa satélite nesta máquina (acima). A medida sai do `ffprobe`. Os quadros ficam em
  `out/<proj>/_tmp/`, fora do git.

## 2.1 · O orçamento de imagens (M11, em teste no vídeo 3)

> A decisão: o Lucas, 14/10/2026, sobre a M11 da auditoria de tokens (`auditoria-tokens.html`), depois da explicação da
> "mesa que só cabe um tanto de fotos": "Sim", para ver o texto final; e, ao texto final (com a pergunta de quantas cenas
> sem mapa por rodada), "Aplicar, até 4 (Recomendado)", às 12:2x de Brasília. Em teste no vídeo 3; se não funcionar, volta como estava antes (CLAUDE.md, "Os portões medem").

- **Por quê.** Quando as imagens de uma conversa passam de uns 25 MB, o Claude Code tira as mais antigas, e a conversa
  inteira se regrava. A peça reabre o que sumiu, e o laço recomeça (CLAUDE.md, "A revisão de espectador, antes do
  Lucas"). No vídeo 2, 5 execuções do qc-visual caíram nele (Q4, Q5, Q9, Q11 e Q12, em 08/10, lotes de 4 a 8 cenas, 4 a
  8 delas de mapa, com quadros a cada 0,5 s): 1.297 das 1.687 imagens lidas foram releitura, e as 5 custaram US$ 116 dos US$ 189 do
  qc-visual. A Q11 foi cortada pelo limite da sessão sem deixar laudo. Os 15 lotes de 3 a 6 cenas da r4 e da r4b
  (09/10) não tiveram nenhuma regravação.

1. **O teto: 25 imagens por execução.**
   - Conta toda imagem que volta a você: cada `Read` de PNG ou JPG, inclusive a releitura do mesmo arquivo, o recorte,
     o zoom e a folha de contato. A folha conta como 1, por maior que seja.
   - Umas 20 vão para as cenas do lote, e 5 ficam de folga para o recorte: o crédito, a borda, os 250 ms antes do corte
     (§4, "A mão que arruma").
   - Você conta imagens, não MB: você não vê o peso do que chega a você. Os 17,6 MB são a régua do medidor, depois (no
     pior caso medido, 25 imagens dão 17,1 MB).
   - Planeje antes de abrir. Para cada cena, escolha os instantes (início, cada beat, fim e um a cada ~4 s para a
     cadência; ofício, contrato §4), e prefira a folha de contato para composição e movimento; o quadro cheio e o recorte
     ficam para o que a folha não mostra. Anote o que viu na primeira vez: reabrir para conferir o que já anotou gasta o
     teto.
   - Cada quadro e cada recorte com nome próprio (a cena, o instante e o que é, como `qc-<cena>@<t>-credito.png`): o
     medidor conta como releitura o mesmo caminho aberto de novo, mesmo com outro conteúdo. No vídeo 2, a Q6 e a Q10
     regravaram `c_s15_tl.png` e `mos-02.jpg` por cima.
   - No report, diga quantas imagens leu, cena por cena e no total.
2. **O lote é pelo tipo**, e quem despacha o monta:
   - até 2 cenas de mapa por execução; só 1, se ela passa de 30 s ou é rejulgamento com passo de 0,5 s;
   - ou até 4 cenas sem mapa: no vídeo 2, a cena sem mapa pediu de 4,6 a 5,8 imagens, e 4 dão de 18 a 23, perto das ~20.
     A ficha dizia 6, que só cabiam com uma folha de contato por cena; o Lucas escolheu 4 (acima). Se uma cena pedir mais,
     a última volta como no item 3;
   - um tipo só por lote. Lote maior que isso você não parte sozinho: julga na ordem do pedido, até o teto, e devolve o
     resto como no item 3.
3. **No teto, pare.** Chegou a 25 imagens com cena por julgar, ou o que sobra não cobre os instantes que a próxima cena
   pede:
   - a cena fica **não julgada**, nunca aprovada. É um bloqueio a mais, do canal, além dos três do ofício (contrato §6,
     "Reportar bloqueio é entrega válida"): aprovar cena que você não olhou é o que o ofício recusa (§7). Nada de nota
     chutada nem de lente julgada sem quadro;
   - não grave laudo dela. O laudo de uma rodada anterior, se existe, fica como está (o ofício não deixa apagar laudo,
     contrato §2.1), mas não vale para esta versão: no report, diga que ele existe, se diz `aprovado: true` ou `false`, e
     que a cena só sai do bloqueio com laudo novo;
   - no report, uma linha por cena não julgada: "não julgada: orçamento de imagens", com o que faltou olhar (os
     instantes e as lentes) e quantas imagens ela pediria;
   - quem despachou redespacha só ela. Você não abre outra execução nem passa do teto para terminar.
4. **As emendas.** Os lotes rodam em paralelo, e a cena vizinha de outro lote ainda não tem laudo. Por isso, depois dos
   lotes, quem despacha manda um passo curto só nas trocas de cena entre lotes, até 25 imagens por execução. Nele:
   - para cada troca da lista, olhe o último segundo da cena que sai e o primeiro da que entra: o corte seco entre dois
     mapas (§4, `motion`), a chamada que atravessa o corte (§5) e a entrada da tela final (§6);
   - o defeito vai ao laudo da cena em que está, na lente dele (o corte seco entre mapas, na cena que sai; a chamada, na
     cena por baixo, §5; a tela final, na cena de fundo, §6), e o `aprovado` dela segue o §3. Só essa lente muda;
   - troca sem defeito não muda laudo nenhum. O report lista as trocas olhadas;
   - defeito numa cena sem laudo desta rodada (a não julgada do item 3): não grave nada nela; vai ao report, para o
     redespacho dela;
   - o que não coube no teto fica não julgado, como no item 3.
5. **O quadro feito por ferramenta vale como quadro.** O ofício manda: "Gere os frames você mesmo… não aceite frame
   que outro agente disse estar bom" (§6, "Método"). O quadro que uma ferramenta determinística da Sala de controle
   gerou (o verbo `quadros` da linha do tempo; a r4 do vídeo 2 já foi assim) não é o "outro agente" do ofício: ninguém
   disse que ele está bom. É a leitura do canal sobre o ofício, que não se edita. Ele vale se não for mais velho que o HTML da cena (compare as datas); o juízo continua seu, e
   o quadro, olhado por você. Faltou um instante que o lote não trouxe: gere-o você mesmo (§2), dentro do teto.

## 3 · Os portões: o que rodou, o que não rodou, e o `aprovado`

- **Os portões medem desde 01/10/2026**: o Lucas autorizou o npm ("Instalar o npm (Recomendado)"; CLAUDE.md, "Os
  portões medem"). O `playwright-core` e o `sharp` estão no canal.
- **Quem roda**: o Claude central roda o `qc-cena` (contrato, carga, colisão, tamanho, til, src-existe, fora do
  quadro e crédito-fantasma) em toda cena e grava o resultado em `out/<proj>/_tmp/qc-cena-*.txt` e o carimbo em
  `out/<proj>/_portao.json`; o `qc-rodape-contraste` e o `qc-video-avanca` rodam à parte. Você lê o resultado, com
  a contagem de itens, e pode rodar um portão você mesmo numa cena (com `REGIE_MOTOR` na mesma chamada). O
  `qc-janela`, o `qc-src-existe` e o `qc-hex` seguem como antes.
- O `mapa-vivo` não veio do estúdio: o `qc-cena` avisa que ele fica fora. Ele não é NÃO MEDIDO de cena; não
  vai ao laudo como problema.
- **Cena de mapa** (CLAUDE.md, "Os portões medem", 04/10/2026). Os portões só medem o mapa de verdade com a pré-carga
  `ferramentas/chaves-nos-portoes.mjs`; sem ela, mediram uma página parada, e o verde deles não vale. O til e o
  contraste do crédito de cena de mapa são os do `ferramentas/portao-mapa.mjs` (`out/<proj>/_tmp/portao-mapa.jsonl`),
  não os do `_audit-til` e do `qc-rodape-contraste` do molde, que a pré-carga dá como NÃO MEDIDO ali. O `til-glifo`
  indefinido do carimbo de cena de mapa, com o `portao-mapa til` passando na mesma marca e no mesmo HTML, não vai
  a `gatesDuros`. E o `conferir` da pré-carga tem de ter saído 0 para a rodada que você lê: o Claude central diz.
- **A margem é do `ferramentas/portao-margens.mjs`** (M6 da auditoria de tokens, "Medir antes de entregar"; o Lucas,
  14/10/2026: "M6 pode ser aplicada"). Ele mede, na tela, sob a câmera, a cada 0,1 s, do primeiro ao último quadro, a
  margem (200 nas laterais, 160 no topo), a faixa do crédito (abaixo de y 1880, só crédito), o crédito de x 200 até x 1720
  e o canto de 400 × 400, para todo texto, pílula, cartão, foto, borda de papel e fita, também na cena de mapa (sem tile).
  O editor e o mapista o rodam antes de entregar, e o Claude central na rodada de portões. Você lê a saída, como lê os
  portões:
  - a linha da cena em `out/<proj>/_tmp/portao-margens.jsonl` é a última com o `sha1` do HTML de hoje e o `marca` igual
    ao sha1 do `marca/tokens.css` de hoje (`sha1sum`); a de outro sha1 é de outra versão, ou de outra marca, e não vale;
  - `veredito` 0 passa. `veredito` 1 vai a `gatesDuros`, item por item: `portao-margens: <lado> <medida> (limite
    <limite>) <elemento> @<t>s`. `veredito` 2, ou nenhuma linha com o sha1 de hoje, é NÃO MEDIDO pelo nome
    (`portao-margens`), e a cena fica `aprovado: false` até ele rodar;
  - **menos a cena com relevo 3D**: ela sai sempre `veredito` 2, com o `motivo` "a cena usa relevo 3D" (o relevo do
    portão é plano, e a pílula presa ao mapa muda de lugar: até 19 px na s44 do Juneau). Ela fica fora do alcance dele,
    como o `mapa-vivo` (acima): esse 2 não é NÃO MEDIDO de cena e não segura o `aprovado`. A margem dela é sua, como antes
    da M6, no recorte do quadro 4K do clipe, dentro do orçamento (§2.1), e o laudo diz "margem: relevo 3D, olhada no
    clipe". Os `itens_indicativos` da linha dizem onde olhar;
  - **não remeça no olho o que ele mede**: margem, faixa do crédito, fim do crédito, canto e fita. Não abra quadro nem
    recorte para isso. Se um quadro que você já abriu mostrar, claro, algo fora da margem e a linha dele diz 0, é o
    portão que está em xeque: escreva no laudo, com o instante e o quadro, e deixe a cena `aprovado: false` com o motivo
    "portao-margens contestado"; o Claude central confere e decide;
  - os `avisos` (o crédito com uma palavra sozinha na última linha, ou com 3 linhas) vão à lente `espaco` como
    sinalização, sem reprovar;
  - continua com você o que ele não mede: a palavra da página escaneada lavada pela fita ou cortada pelo recorte, o
    texto que entra antes da voz, o tempo no ar, o que é camada do mapa (território, linha, o quadrado de uma área), a
    geometria e o satélite;
  - a reprovação dele que a triagem dá como limitação vai ao Lucas pelo caminho de qualquer portão (abaixo, "A exceção
    do Lucas").
- **O `aprovado`** segue o ofício: todas as lentes ≥ 7 **e** `gatesDuros` vazio, com os portões rodados. Portão
  que mediu e reprovou vai a `gatesDuros`. Portão que não rodou numa cena (exit 2 com o alvo certo) segue NÃO
  MEDIDO, pelo nome, e a cena fica `aprovado: false` até ele rodar.
- **A exceção do Lucas** (CLAUDE.md, "Os portões medem", 01/10/2026). Uma reprovação que a triagem deu como limitação
  do portão vai ao Lucas, cena por cena. Se ele manda manter, ela fica em `out/<proj>/qc/_excecoes-portao.json`, com a
  cena, o portão, o sha1 do HTML e a mensagem dele.
  - Essa reprovação, e só ela, sai de `gatesDuros`. Ela vai à lente `fonte` ou `espaco` como problema citado:
    "exceção do Lucas: <portão>, <mensagem>, <hora>".
  - Só vale com o sha1 do HTML igual ao da exceção. Qualquer outra reprovação na cena continua em `gatesDuros`.
  - Sem a exceção no arquivo, a reprovação fica em `gatesDuros`, mesmo que a triagem diga que é limitação.
- **A exceção do crédito a 56 px** (Lucas, 07/10/2026: "Quero reduzir para 56px"; identidade.md §4.1, "Crédito a 56
  px"; do vídeo 2 em diante). O `qc-tamanho` cobra 72 px no crédito que não é de mapa, e o canal escreve o crédito a 56:
  a reprovação dele que é **só** o crédito (o texto do crédito, com `data-qc-papel="credito"`, medido entre 56 e 71 px;
  outro item reprovado na mesma cena continua em `gatesDuros`, pelo caminho normal, e não impede esta exceção) vira
  exceção em `out/<proj>/qc/_excecoes-portao.json`, gravada pelo Claude central cena a cena, com a cena, o portão, o
  sha1 do HTML, a reprovação (o texto e o px medido), a mensagem literal e a hora (07/10/2026, 11:3x), **sem triagem e
  sem nova pergunta ao Lucas**: a decisão dele já cobre todas. Vale para aquele sha1: se o HTML mudar, o Claude central
  confere que a reprovação continua sendo só o crédito e grava o sha1 novo. Com ela no arquivo e o sha1 igual, você
  aprova citando-a na lente `espaco` ("exceção do Lucas: qc-tamanho, crédito a 56 px, 07/10/2026"), como a de cima. Sem
  ela no arquivo, a reprovação fica em `gatesDuros`, como qualquer outra. A exceção só vale para a reprovação **com o
  papel declarado**: crédito sem `data-qc-papel="credito"` reprova (`fonte`), porque sem ele o `qc-tamanho` só avisa e o
  `portao-mapa rodape` não mede o contraste; um aviso de legibilidade do `qc-tamanho` sobre texto de crédito é crédito
  sem o papel, e reprova até ser marcado. O crédito de mapa (`data-qc-credito="mapa"`) tem piso de 40 no portão e passa
  a 56 sem exceção; a marca de mapa num crédito que não é de mapa reprova (`fonte`): é verde comprado. O portão a aceita
  num ancestral (`closest`): um elemento com `data-qc-credito="mapa"` que contenha outro crédito (foto, documento, dado,
  vídeo) reprova em `fonte` como verde comprado, porque esse outro crédito passou a 56 sem o piso de 72 (medido em
  07/10/2026). Crédito abaixo de 56 ou acima de 64 reprova pela §4, e nenhum portão mede isso. O `qc-tamanho` tem piso
  de 40 no crédito de mapa, não lê o `--teto-credito` e não lista o tamanho do que passa: um crédito de mapa a 46, o
  tamanho do molde, sai verde (medido em 07/10/2026), e qualquer crédito a 76, o dos exemplares do Juneau, também (76
  passa os pisos de 40 e de 72, e o teto ninguém lê). A conta é sua, como a da chamada (§5): meça cada crédito pelo
  `probe-elemento <html> <t> --ids=<id>` (com `REGIE_MOTOR`), dividindo a altura da caixa de uma linha pela line-height
  da cena. Confira também no HTML que o tamanho vem de `var(--fs-credito)`, sem px fixo. O laudo diz o número. No
  Juneau, 76 e 88 continuam.
- **Os 12 laudos do 1º lote** (escritos antes da instalação, com os portões NÃO MEDIDO) se refazem com o
  resultado do `qc-cena`: as lentes não mudam, e o `aprovado` passa a valer pela regra acima.

## 4 · Os números da marca, por lente

- **espaco** (identidade.md §4.1–§4.2):
  - alvo e teto: herói e título 360 e 560 px, até 5 palavras; fala citada 280 e 340 px, até 12; rótulo e nome
    de lugar 128 e 160 px, até 3; eixo e legenda 84 e 104 px; crédito 56 e 64 px (Lucas, 07/10/2026; identidade.md
    §4.1, "Crédito a 56 px"; no Juneau, 76 e 88). O teto reprova como o piso;
  - card de pessoa (Lucas, 26/09/2026; identidade.md §5): o nome é rótulo (128 e 160 px, Inter 700, até 3
    palavras) e o cargo é legenda (84 e 104 px, Inter 500, sem teto de palavras). Valem os números acima: o
    nome com mais de 3 palavras reprova como rótulo, menos o nome próprio de 4 (identidade.md §4.1, "Nome próprio de 4 palavras"). O cargo que passa por baixo do cartão da fala reprova
    (composição de 27/09/2026);
  - folha de documento (Lucas, 27/09/2026; identidade.md §5): **palavra cortada reprova**, pelo rasgo, pela
    fita, pela moldura ou pela borda do quadro. Também reprovam o branco menor que 240 px entre a última linha e o
    rasgo, o corpo abaixo de 84 px, e a letra da folha que não seja a Courier Prime: meça no primeiro quadro;
    fallback de fonte reprova. Brasão, selo, timbre, logo ou assinatura na folha recriada reprova (midia.md §7.1
    e §7.6). A Inter continua nunca abaixo de 500; o piso de 400 do `--peso-minimo` é só para a Courier Prime;
  - margem de 200 px nas laterais e 160 px no topo;
  - abaixo de y = 1880, só crédito, de x = 200 até antes de x = 1720;
  - o canto inferior direito, 400 × 400 px, vazio; nenhuma logo;
  - esses três números vêm do `portao-margens` (§3), não do olho; a logo no canto, você olha;
  - um herói por cena, ou nenhum. Nome de lugar como herói reprova.
    - O herói desta regra é o número-herói ou o título (identidade.md §4.1, a linha "número-herói / título").
    - A fala citada leva `data-qc-papel="heroi"` só porque é o único papel do `qc-tamanho` com piso de 260 (Sala,
      22/10/2026; roupa do editor-de-arte, §4). Ela não conta neste "um herói": é bloco, e o teto dela é o de 3 blocos
      vivos (§4.2).
    - Duas citações ao mesmo tempo numa cena de "de → para" (a s32 do Peru) não são dois heróis.
- **poluicao** (identidade.md §4.2): teto de 6 elementos simultâneos, alvo de 4 a 5.
  - Contam texto e gráfico. Não contam a base de tela cheia, o crédito e a textura. O ator com bandeira e nome
    conta como um.
  - Até 3 blocos de texto vivos (`--max-blocos`; o que é bloco: identidade.md §4.2: texto de leitura, não rótulo curto).
  - Cena que encosta no teto está no pior extremo: sinalize.
- **tema** (identidade.md §2):
  - cor por papel no vídeo inteiro. `--destaque` só no protagonista (uma entidade) e no anel;
  - `--tensao` nunca é a cor de um lado. Vermelho contra azul como dois lados reprova;
  - no máximo 3 matizes, fora a base de satélite. Território pintado com as cores da bandeira reprova;
  - sem degradê, com uma exceção: a mesa das cenas sem mapa sobre `--fundo` (DOCUMENTO, card, foto impressa,
    PRANCHA) leva o feltro e a luz (Lucas, 30/09/2026; identidade.md §5, "A mesa: feltro sob a luz"; tokens "A MESA").
    Reprove a mesa lisa, sem o feltro e a luz. Reprove também a textura ou a luz por cima da foto, da fita, da folha,
    do card ou do texto: é filtro sobre a foto. Para provar, compare um recorte dentro da foto com a mesma cena sem
    textura (`APRENDIZADOS.md` item 53). Degradê, véu ou vinheta no mapa, no registro ou no DADO continuam reprovando.
- **motion** (identidade.md §4.4):
  - mapa seguido de mapa é uma viagem, e o corte seco entre dois mapas reprova;
  - viagem de 1,5 a 3 s, cúbica;
  - rótulo entra em 300 ms; território em 500 ms;
  - foto parada com Ken Burns de 1,00 a 1,12 em 6 s; do vídeo 2 em diante, na foto que enche a tela a mais de 1,25 vez,
    ele termina em 1,4 ÷ (a escala de encher), e o Ken Burns menor que 1,12 por isso não reprova (identidade.md §4.4);
  - o anel pulsa duas vezes e para.
  - **A mão que arruma** (Lucas, 07/10/2026: "movimento A"; identidade.md §4.4, "A mão que arruma", e §5; do vídeo 2
    em diante, e no Juneau não se julga). Nas cenas de mesa, você julga a linguagem A, nos quadros do clipe; o Ken
    Burns com direção (abaixo) você julga também na foto de REGISTRO em tela cheia, desde o primeiro quadro:
    - o **assentamento** acontece **uma vez** (a escala chega a 1,03 e assenta em 1,00 nos últimos 200–240 ms da
      chegada) e **não oscila**: na chegada, um segundo retorno, um bounce ou uma escala que passa de 1,03 reprova (o
      levantar, 1,00 → 1,04, e o número, 1,04 → 1,00, são outros gestos e não entram nesta conta);
    - a **câmera da folha está parada durante o grifo** (só a deriva do RIG), e chegou pelo menos 0,3 s antes da
      primeira palavra do trecho: câmera andando enquanto o grifo corre reprova;
    - **o texto já na tela fica parado enquanto se lê**: movimento que leva texto (a câmera sobre a folha, o objeto
      com o grifo, a fala citada) e ainda anda a menos de 0,25 s da primeira palavra que o lê reprova; a entrada do
      número e do cartão da fala, na palavra, não conta;
    - **nada se move nos 250 ms antes do corte**, fora a deriva (a retomada da folha, 1,08 → 1,10, e o push-in do RIG
      terminam antes): objeto, câmera ou rótulo em movimento no último quarto de segundo da cena reprova;
    - a **sombra solta** tem desfoque fixo (o raio não muda entre dois quadros) e fica por baixo do objeto, sem tocar
      a foto; a **luz** segue o objeto 120 ms atrás, e no Juneau sem atraso;
    - o **Ken Burns** de toda foto em tela cheia, de mesa ou de REGISTRO, anda até 80 px rumo ao assunto, e a direção
      está no cabeçalho; o produto (escala de encher × Ken Burns) fica ≤ 1,4, e o Ken Burns menor que 1,12 por causa
      dele não reprova; na foto na mesa, o produto conta o 1,03 do assentamento;
    - **deslize pela borda, antecipação ou viagem de câmera pela mesa, mergulho na foto ou na folha, still com
      sangria** são as linguagens B e C, que o Lucas não escolheu: reprova (`motion`).
  - DECISÃO DO LUCAS PENDENTE: norte para cima ou órbita. Até lá, julgue pelo ofício (deslocamento contínuo),
    sem reprovar a falta de giro quando a rota ou o território carregam o quadro o tempo todo.
- **cadencia** (identidade.md §4.3):
  - foto ou footage parado sem movimento com propósito: teto de 6 s;
  - texto no ar ≥ 2,0 s; beat ≥ 1,5 s;
  - no vídeo: rajada ≤ 20 %, respiro ≥ 10 %.
- **abordagem** (identidade.md §5): os cinco modelos são MAPA, REGISTRO, PRANCHA, DADO e DOCUMENTO. Diga qual
  deveria ser. Registro real ≥ 60 % do tempo do vídeo (identidade.md §4.3). Pessoa real nomeada é registro
  real, identificada por nome e cargo (identidade.md §5; `contratos/textos-tela.schema.json` ›
  `cards_pessoa` › `o_que_e`).
  - **O card de pessoa** (Lucas, 26/09/2026; identidade.md §5): o nome no rótulo (pílula `--rotulo`, até 3
    palavras) e o cargo numa linha menor logo abaixo, no papel "eixo / legenda" (84 px, Inter 500;
    `--fs-eixo` e `--peso-texto` em `marca/tokens.css`). Exemplo aprovado: `MARIA GLADZISZEWSKI` em cima e
    `Assembly member, City and Borough of Juneau (2017)` embaixo (identidade.md §5; Lucas, 28/09/2026). Card sem o cargo, ou com nome e cargo juntos no rótulo,
    reprova; o nome com mais de 3 palavras reprova na lente **espaco**, menos o nome
    próprio de 4 (identidade.md §4.1, "Nome próprio de 4 palavras"). A composição de 27/09/2026:
    - o retrato vem como foto impressa com fita, com o nome e o cargo embaixo;
    - a fala vai num cartão de papel;
    - a foto não se altera; recorte que muda o sentido, ou filtro no rosto, reprova.
  - **O DOCUMENTO** é a folha de papel sobre `--fundo` (identidade.md §5, "A folha de documento"). Documento
    chapado em tela cheia de `--papel` é a versão anterior a 27/09/2026 e reprova na **abordagem**.
  - **A foto de época pequena** (Lucas, 27/09/2026; identidade.md §5, "A foto antiga pequena"): com menos de
    1.600 px de largura, vai impressa sobre a mesa. Reprova:
    - ela em tela cheia;
    - ela ampliada acima de 1,4 vez o tamanho do arquivo;
    - upscale ou filtro nela.
  - **A foto média** (Lucas, 29/09/2026; identidade.md §5, "A foto média também vai impressa"): a de 1.600 px ou mais que, em tela cheia,
    passaria de 1,4 vez vai impressa sobre a mesa, e reprova pelas mesmas três coisas.
  - **A foto pequena na lacuna**, do vídeo 2 em diante (Lucas, 30/09/2026; identidade.md §5, "A foto pequena preenche a lacuna"): de hoje ou de época, uma ou mais na mesma
    mesa. Reprova pelas mesmas três coisas e também quando uma foto cobre a parte que importa de outra ou quando
    uma delas vai sem o crédito dela.
  - O rosto, quando há, vem de fonte autorizada, com a procedência gravada (midia.md §7.2). O retrato oficial
    em uso editorial vai sem crédito na tela. Rosto gerado ou alterado por IA reprova.
- **acessibilidade** (identidade.md §0; voz.md §1): o espectador é norte-americano, de 25 a 60 anos, e não
  acompanha geopolítica. Ele entende a cena em 2 segundos sem saber o vocabulário?
- **factual**, grafia (identidade.md §7; CLAUDE.md):
  - inglês dos EUA, pela forma que a imprensa dos EUA usa agora (AP Stylebook vigente);
  - imperial primeiro; datas absolutas;
  - número com vírgula de milhar e dinheiro em dólar convertido pela cotação da data da fonte;
  - a tela preserva o hedge da voz (voz.md §1);
  - nome de pessoa e de lugar confere contra a fonte da frase, no dossiê do roteiro
    (`roteiros/<proj>/roteiro-editor.md`);
  - o rótulo de lugar sobre um arquivo de `_media/` confere também contra o `lugar_na_origem` do veredito do
    `conferente-de-midia` que casa com ele (§5): lugar mais específico que o da origem, ou rótulo sobre arquivo
    com `lugar_na_origem: null`, reprova (midia.md §2.7). O REGISTRO sem rótulo de lugar sobre esse arquivo não
    reprova pela falta dele (identidade.md §5 pede o rótulo, mas a origem não o sustenta): declare no laudo.
  - **o aviso do ano da foto** (Lucas, 27/09/2026; identidade.md §6): a foto ou o retrato com `aviso_de_ano: true`
    no veredito do conferente que casa com ele leva `Photo from <ano>` durante todo o tempo em que aparece assentado.
    Do vídeo 2 em diante, o aviso entra 150 ms depois de a foto assentar (identidade.md §4.4, "A mão que arruma", e
    §6, "O aviso"), salvo quando a voz o convoca antes: o quadro da chegada sem o aviso não reprova; no Juneau, com a
    foto. O ano é o do `data_na_origem`, o texto tem 84 px ou mais e fica fora da faixa de crédito
    (`data-qc-aviso-ano`). Reprova:
    - a foto assentada sem o aviso;
    - o aviso com outro ano;
    - o aviso só no crédito;
    - o aviso sobre foto com `aviso_de_ano: false`, porque é afirmação falsa.
  - ⚠️ **Os exemplos do ofício estão no formato brasileiro e não se copiam**. Formato brasileiro na tela
    (`R$`, vírgula decimal, `1º DE MAIO`) reprova. O certo é `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`,
    `MAY 1, 1994`, `$265 billion`.
- **fonte**: §5.
- **autoria**, **cobertura**, **camadas** e **círculo** são do ofício. A marca só soma, na **cobertura**, que o
  evento real vem de acervo aberto ou oficial, nunca de banco pago, e que o B-roll genérico de banco é só o
  que o Lucas baixou e registrou (§5; midia.md §1, §2.3).

## 5 · O que reprova neste canal em particular (lente)

- **Mapa sem `© MapTiler © OpenStreetMap contributors` na tela**, em qualquer quadro em que o mapa apareça
  (`fonte`).
  - É o contrário da roupa do Top10, e o próprio ofício concorda: atribuição segue a licença.
  - O crédito: 56 px (76 no Juneau), na faixa abaixo de y = 1880, legível, com `data-qc-credito="mapa"` (identidade.md
    §6 e §4.1, "Crédito a 56 px"; CLAUDE.md). A marca de mapa só nele, na própria linha, nunca no contêiner que guarda
    também o crédito de uma foto (§3).
  - Geometria do OpenStreetMap sem `© OpenStreetMap contributors` reprova. Com a linha da MapTiler, já está
    coberta.
- **Crédito na tela para domínio público** (NASA, Landsat/USGS, NARA, Natural Earth, obra do governo federal):
  supérfluo, reprova (`fonte`; identidade.md §7).
- Formatos do crédito: `Source: <instituição>, <ano>` e `<autor> / <acervo> · <licença>`. O Copernicus Sentinel
  leva a própria linha (identidade.md §6).
- **Documento do governo do Estado do Alasca, ou documento de imprensa** (Anchorage Daily News, KTOO): não estão
  no domínio público que a identidade.md §7 isenta de crédito, e nos EUA a obra do governo federal é domínio
  público por lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. **Regra**
  (Lucas, 26/09/2026; midia.md §7.1): a peça só vai à tela com permissão de uso clara (domínio público
  comprovado, licença aberta ou autorização escrita), conferida e gravada no `_PROCEDENCIA.json`; sem ela, a
  cena recria o trecho no visual do canal, com o texto citado fiel e a fonte citada:
  - **a peça real sem permissão gravada** (`licenca` vazia ou `"a_confirmar"`, que é o que a pré-v1 grava
    quando não mediu a licença na fonte), ou com uma "permissão" que não é nenhuma das três, reprova
    (`fonte`). Não invente licença nem a deduza da origem;
  - **com a permissão gravada**, o crédito segue o que ela pede (identidade.md §7);
  - **a recriação** sem a fonte citada na tela reprova (`fonte`); fora do visual do canal (outra tipografia,
    outras cores, imitação do original), reprova (`abordagem`);
  - o retrato oficial de pessoa citada segue midia.md §7.2, não esta regra;
  - **o estudo de 2018** (Final SEIS e ROD, da FHWA com o Alaska DOT&PF) conta como estadual (pesquisado a
    pedido do Lucas, 26/09/2026; midia.md §7.1, "O estudo de 2018"): página, capa, figura, mapa, o logo
    "Juneau Access" ou as assinaturas dele na tela, sem autorização escrita do DOT&PF gravada, reprovam
    (`fonte`). A recriação leva `Source: Alaska DOT&PF and FHWA, 2018`, ou `Source: Federal Highway
    Administration, 2018` na frase de decisão do ROD. O aviso da FHWA no Federal Register (83 FR 36661) é
    obra federal: crédito na tela para ele é supérfluo.
- **Foto do governo do Estado do Alasca ou de jornal**, inclusive de agência (AP, Getty), que não é retrato
  de pessoa citada: entra citando a fonte (Lucas, 26/09/2026; midia.md §7.5).
  - **Sem o crédito na tela**, reprova (`fonte`). O crédito é a fonte como a origem a credita:
    `<author> / <outlet>`, ou só o veículo ou o órgão, em 56 px (76 no Juneau) na faixa de crédito.
  - Sem a procedência (URL, data, autor e veículo ou órgão, o que a origem diz sobre uso), reprova
    (`fonte`). Foto de agência sem o aviso de Content ID na procedência também.
  - Foto Reuters reprova (`fonte`): o portão de procedência a veta (midia.md §7.4, item 2).
  - Foto de qualquer outra origem sem licença conferida reprova (`fonte`; midia.md §7.5). Vídeo de jornal, de
    veículo ou de agência sem licença conferida, também (Lucas, 27/09/2026; midia.md §7.5).
  - **Vídeo do governo do Alasca** entra como a foto dele (Lucas, 27/09/2026; midia.md §7.5): sem o crédito na
    tela ou sem a procedência, reprova (`fonte`), pelos mesmos itens acima.
- **Logo de qualquer instituição**: jornal ou veículo (Anchorage Daily News, KTOO), órgão do Estado do Alasca
  (Division of Elections, DOT&PF, Alaska Marine Highway), órgão federal (FHWA, tribunais federais, Federal
  Register) ou outra instituição (NFL, Dittman Research), **ou o selo do Estado**, como elemento gráfico da
  cena, real ou redesenhado, reprova (`fonte`). O certo é o nome da instituição escrito na pílula `--rotulo`,
  Inter 700 (Lucas, 26/09/2026 e, a logo federal e a de outras instituições, 27/09/2026; midia.md §7.6).
- **Mídia de banco pago sem registro** (sem a linha no `manifest.jsonl` da caça e a entrada no `_PROCEDENCIA.json`
  da cena, ou baixada fora das contas que o Lucas designou: a individual dele no Shutterstock e no Motion Array, a
  assinatura da Top10 na Storyblocks e no Envato, desde 30/09/2026; midia.md §2.3, "A exceção da Top10", §2.8 e §8)
  reprova
  (`fonte`). Evento real específico vindo de banco pago também (midia.md §1).
  - Acervo gratuito, só os oficiais e as fontes federais: Commons, NASA, NARA, USGS, Library of Congress,
    Smithsonian, sala de imprensa de órgão federal dos EUA e DVIDS (Lucas, 26/09/2026; midia.md §7.3), e as
    fontes da 4ª rodada (Lucas, 27/09/2026; midia.md §7.3). Mídia de Pexels, Pixabay, Openverse, Met, Europeana
    ou Internet Archive reprova (`fonte`), e a de fonte que a 4ª rodada pôs em "não servem" também. Ter a
    chave delas na máquina não as libera.
  - O crédito das fontes da 4ª rodada segue identidade.md §6 e §7: nenhum na tela para órgão federal e mapa
    antigo em domínio público; o crédito de mídia na tela para os outros governos (CC0 ou CC BY) e a linha da
    licença canadense. O do Google Earth fica na tela a cena inteira: movido, coberto ou cortado, reprova.
  - Sala de imprensa federal e DVIDS são domínio público federal: crédito na tela para elas reprova como
    supérfluo (acima). Foto "courtesy" ou de terceiro dentro delas não é obra federal: sem licença, reprova
    (`fonte`; midia.md §7.3). A foto da sala de imprensa do governo do Alasca é foto do Estado (acima).
- **Arquivo de `out/<proj>/_media/` na cena sem `aprovado` do `conferente-de-midia`** reprova (`fonte`). Cada `src`
  de `_media/` tem de casar com um veredito `aprovado` de `out/<proj>/_pesquisa/conferencia-midia.json` (CLAUDE.md,
  "Os especialistas"; ofício do conferente, §2): no banco pago, pela `url` do `_PROCEDENCIA.json` da cena; no
  acervo aberto, pelo `medido.sha256` ou `medido.medido_no_download.sha256` dele; em `_media/pessoa/`, `logo/` e
  `documento/`, pelo `sha256sum` do arquivo. O veredito que casa tem de ser da cena julgada (o campo `cena` dele),
  ou haver o reuso declarado (ofício do conferente, §5.4). `pendente_lucas`, `reprovado`, `trocar`, nenhum
  veredito ou só o de outra cena: reprova.
  Ficam fora as bandeiras de `assets/flags/`, a geometria de `_media/geo/`, a base de mapa (`_media/base/`, ou a
  do perfil do `canal.json`) e as bibliotecas do mapa em `_media/_vendor/`.
- **Arquivo com `-prova` no nome na tela** reprova (`fonte`): é prova do `pesquisa-documentos`, e só vai à tela a
  página com a permissão do midia.md §7.1, sem `-prova` e com o `aprovado` do conferente.
- **A chamada (CTA), do vídeo 2 em diante** (Lucas, 01/10/2026; `marca/cta.md`). O Juneau não tem. Você confere cada
  item de `regencia.json` › `_chamadas`, no laudo da cena que fica por baixo dele:
  - o momento (`cta.md` §5 e §6): a inscrição entre 35 % e 60 % do vídeo e fora do 1º minuto; o comentário terminando
    pelo menos 1 s antes da cauda; nunca as duas no mesmo minuto; cena calma, sem corte e sem número-herói, território
    acendendo, anel, viagem de câmera, fala citada ou folha sendo lidas;
  - a distância: a caixa da peça (`cta.md` §4, ou a `uniao` de `out/<proj>/cta/<nome>.medidas.json`) contra a de cada
    rótulo da cena, pelo `probe-elemento` (com `REGIE_MOTOR`), no começo, no meio e no fim. Menos de ~80 px, ou a mesma
    faixa de altura de uma pílula no mesmo terço, reprova (`espaco`). Não há portão que meça isso: a conta é sua, e o
    laudo diz os números;
  - o quadro: a peça gravada por cima desses três quadros (`--fundos=` do gravador), com o gravador saindo 0. Os
    quadros e essa gravação vão a `out/<proj>/_tmp/` e `out/<proj>/_tmp/cta/`, nunca a `out/<proj>/cta/` (a peça da
    montagem) nem a `_media/`, onde o `qc-procedencia` a contaria como acervo sem procedência (`cta.md` §5 e §8). O
    comentário conta nos 3 blocos e nos 6 elementos, e a inscrição, como 1 (`poluicao`). A pergunta na peça é a que o
    `redator-de-tela` entregou, palavra por palavra (`factual`).
- **Card de capítulo, título de tópico ou navegação na tela** reprova (`abordagem`; CLAUDE.md).
- **Apresentador, ou pessoa gerada por IA apresentada como real**, reprova (`abordagem`; identidade.md §5).
- **Cena sem `<html lang="en-US" data-render="4k-native">`** reprova (`espaco`): sem a marca, o render cai no
  caminho legado e a cena sai num canto do quadro. O `pt-BR` do contrato dos agentes não vale (CLAUDE.md).
- **Satélite escurecido** não reprova por si: 65 % de brilho e 70 % de saturação são da marca (identidade.md §1
  e §6). Véu, scrim ou vinheta empilhados por cima reprovam. Rótulo ou relevo ilegível: sinalize, citando o
  quadro.
  - DECISÃO DO LUCAS PENDENTE: os 65 % contra o piso de ~0,90 do ofício. Eles só foram vistos sobre Landsat.
- **Bandeira**: nenhuma ao lado de nome de país, no mapa ou fora dele (Lucas, 27/09/2026; identidade.md §6, "País
  no mapa"). Bandeira ali reprova (`fonte`), e a falta dela não sinaliza nada. Na PRANCHA, a bandeira vai no ator,
  menos a do Canadá, das províncias e dos territórios canadenses, que reprova (`fonte`) até o Lucas decidir
  (condição de uso; DECISÃO DO LUCAS PENDENTE). Bandeira errada ou desenhada reprova sempre (`factual`, asset
  correto).
- **Rota que nunca foi construída** (Lucas, 27/09/2026; identidade.md §6): linha tracejada com o aviso
  `Approximate route` na tela todo o tempo da linha. Sem o aviso, ou decalcada de figura sem permissão, reprova
  (`fonte`).
- **Peça construída que não se sustenta** (do vídeo 2 em diante; Lucas, 07/10/2026, "Sim, com a física"; identidade.md
  §4.4, "O ilustrador, com a física"; roupa do `editor-de-arte`, §5): fio que não chega ao furo, objeto que gira fora do
  ponto de contato, oclusão trocada, mão que não toca o que segura, ou balanço que não amortece reprova (`factual`).
  Objeto que quase não se move para o texto ficar parado na leitura NÃO é achado: foi a escolha do Lucas. A prova do
  contato é a medida do DOM ou dos quadros; o número que só repete a fórmula do código não vale como prova
  (sinalize, `factual`).

## 6 · A cena que é fundo da tela final

- Os 20 s finais sem voz são o fundo dos elementos da tela final do YouTube, que chegam depois, no YouTube
  Studio. Julgue a cena **como fundo** (ofício §2.3). Ela vem declarada com `data-qc-sem-heroi` e o motivo.
  Nunca reprove pela falta desses elementos.
- O que vai por baixo, no Juneau (Lucas, 28/09/2026: "A última cena, parada e escurecendo (Recomendado)"): o
  quadro final da cena anterior, parado e escurecendo aos poucos, sem texto novo, até metade do brilho, linear em
  20 s (Lucas, 28/09/2026: "Médio (Recomendado)"), com a composição na metade esquerda e a direita livre para os
  botões do YouTube ("B, carimbo de borracha à esquerda (Recomendado)"; identidade.md §5, "A tela final e o carimbo do Juneau"; a conferência visual é `marca/prancha-fim.html`). No Juneau, o último
  quadro com o brilho longe de 50 % sinaliza, e elemento na metade direita, onde caem os botões, também. Nos próximos
  vídeos, até o Lucas decidir de novo, a do Juneau é a proposta. Texto novo ou herói nesses 20 s **sinaliza** (os elementos do YouTube
  vão cobrir). Buraco preto reprova, inclusive o escurecer que chega ao preto (identidade.md §5: 100 % coberto).
- Se o vídeo usa Shutterstock, a linha `Image(s) and/or video used under license from Shutterstock.com` tem de
  estar na faixa de crédito desta última cena (identidade.md §7). Sem ela, reprova (`fonte`).
- Nenhuma outra camada chega depois neste canal. O canal não tem `marca/finalizacao.json`.

## 7 · O laudo

- `out/<proj>/qc/<cena>.laudo.json`, um por cena julgada, inclusive a aprovada.
- Valide com:
  - `node scripts/validar-contrato.mjs laudo-qc out/<proj>/qc/<cena>.laudo.json`;
  - `node scripts/qc-laudo.mjs out/<proj>/graphics/<cena>.html`.
- Sem `contratos/laudo-qc.schema.json` no disco, o validador sai NÃO MEDIDO: diga isso.
- No report, por cena:
  - o veredito e as notas;
  - os portões que rodaram, com a contagem de itens, e os NÃO MEDIDO pelo nome;
  - os quadros que você olhou;
  - a correção acionável de cada problema, com o arquivo e a seção da marca. Correção que pede mídia nova traz
    os termos de busca em inglês (CLAUDE.md, "O vídeo fala inglês").
