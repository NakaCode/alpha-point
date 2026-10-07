<!-- Roupa do Alpha Point para o editor-de-arte. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Agente: .claude/agents/editor-de-arte.md (projeção do commit 7ab9543 da pré-v1,
     Source-SHA256 33c723eeb83d…). Molde de formato: template/marca/agentes/editor-de-arte.md da pré-v1, que é
     a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, marca/tokens.css, canal.json, CLAUDE.md, roteiros/<proj>/.
     Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá.
     Se o Source-SHA256 do agente mudar, releia esta roupa contra o ofício novo. -->

# ROUPA ALPHA POINT — editor-de-arte

> Só o que é do canal. O ofício (a metáfora, montar na voz, nada congela, texto como filtro, mídia real,
> o contrato técnico da cena, o que se recusa) está em `.claude/agents/editor-de-arte.md` e não se
> discute aqui. Marca ativa: `marca/identidade.md` (a lei), `marca/voz.md`, `marca/midia.md` e
> `marca/tokens.css`. O piso `marca/_neutra/identidade.md` só vale onde a identidade não disser nada.

## 0 · O canal, e onde ele roda

- **Faceless** (identidade.md §0 e §5): ninguém fala para a câmera; cota de apresentador 0 %; nenhuma
  pessoa gerada por IA apresentada como real. O master é a narração (`out/<proj>/narracao.wav`) sobre
  tela preta 3840×2160 (`out/<proj>/_media/_master.mp4`), e **100 % do tempo é coberto por cena**: o que
  você não cobre sai preto. Não existem apresentador, bruto, `words-final.json`, `words-limpo.json`,
  `_cortes.json` nem `compor-base-youtube`: o relógio é um só, `out/<proj>/words.json`, e `cleanDur = dur`.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **As entradas deste canal que o contrato do ofício não lista** (o contrato só nomeia o espelho, o `words.json`
  e o conceito). Leia as três, e cada uma manda numa coisa:
  - `out/<proj>/textos-tela.json` (passo `screen_text`, conferido e checado): **o que vai à tela e a grafia**
    final de cada rótulo, card, crédito e aviso do ano. A grafia sai dele, não do conceito nem do roteiro; o que
    ele manda para `nao_vai_para_tela` não vai à tela;
  - `out/<proj>/regencia.json` (alinhada aos textos de tela): **o tempo** de entrada e de saída de cada texto
    (os `textos` de cada beat, na palavra do `words.json`), o `exige` de cada beat e a conta do teto de elementos
    e de blocos (`auditoria`);
  - `out/<proj>/conceito-visual.json`: **a direção** (metáfora, técnica, mídia âncora), como o ofício diz.
  Se o conceito divergir da regência ou dos textos de tela numa cena (a lista está em `regencia.json` ›
  `_conflitos` › `divergencias_do_conceito`), não desenhe a cena: devolva ao Claude central, que chama o
  diretor de arte para atualizar o conceito. Nunca resolva a divergência por conta própria.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json` › `narracao.cauda_tela_final_s`,
  Lucas, 26/09/2026). Ver §7.
- **Sem título de capítulo na tela, nunca** (CLAUDE.md; Lucas, 26/09/2026): capítulos só na descrição. As
  exceções do ofício para o card de título (a duração em §4 do contrato, o lastro em §5) não se aplicam.
- **Tudo roda no PC do Lucas, no Windows**: não há render remoto nem nuvem no caminho. `<motor>` é a pré-v1
  (CLAUDE.md, "Os especialistas"), **nunca** o `motor.caminho` do `canal.json`, que é a v0.1.0 e não tem
  `src/ferramentas/`. Ferramenta: `node <motor>/src/ferramentas/<x>.mjs`, com cwd na raiz do canal.
- **Portões**: `node scripts/<portão>.mjs`, com `REGIE_MOTOR` na mesma linha (CLAUDE.md, "Os especialistas").
  `MOTOR_SEM_ARQUIVO` = faltou a variável; nunca siga o "atualize o motor". O `render/capturar.mjs` do
  ofício não existe: o render é `<motor>/src/ferramentas/renderizar.mjs`.
- **Os portões de navegador medem desde 01/10/2026** (o Lucas autorizou o npm; CLAUDE.md, "Os portões medem").
  Antes de entregar, rode `node scripts/qc-cena.mjs out/<proj>/graphics/<id>.html` (com `REGIE_MOTOR` na mesma
  chamada) em cada cena que você mexeu, e conserte até sair 0; no relato, a saída de cada uma. Portão que sair
  exit 2 com o alvo certo é NÃO MEDIDO, pelo nome. Não simule, não chame de verde. Cena com mapa no `qc-cena`
  pede tiles: diga quantas rodadas fez, para o `maptiler-gasto.md`.
- **Nunca rode** `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md). Onde o ofício manda "o relógio sai do transcrever", aqui ele já vem pronto.
- **Você não vai à rede.** Mídia vem das pesquisas. Site que recusa leitura automática (403, captcha,
  verificação de robô) não se contorna por meio nenhum, nem por `curl` (CLAUDE.md, "A marca").
- **Vocabulário de máquina não se traduz** (CLAUDE.md, "O vídeo fala inglês"): chaves de JSON, enums
  (`modo`, `construída`), `data-qc-*`, nomes de portão. O `motivo` de um `data-qc-*` e os comentários do
  HTML ficam em português; só o que vai à tela é inglês.

## 1 · A cena HTML deste canal

- `<html lang="en-US" data-render="4k-native">`. O `pt-BR` do contrato do agente (§5) não vale; o
  `data-render` fica literal (CLAUDE.md). Na primeira cena, tire um quadro e confira 3840×2160 com o
  conteúdo preenchendo o quadro.
- Ligue `<link rel="stylesheet" href="../../../marca/tokens.css">` e escreva só `var(--…)`, com os **nomes do
  canal**: `--fundo`, `--painel`, `--papel`, `--tinta`, `--tinta-escura`, `--rotulo`, `--destaque`,
  `--contraparte`, `--neutro`, `--tensao`, e os derivados `--legenda-cor`, `--eixo-cor`, `--grifo-cor`,
  `--territorio-cor`. Os nomes da pré-v1 (`--acento`, `--dado`, `--geo`, `--grifo`, `--texto`, `--sec`,
  `--linha`, `--alerta`) são só apelidos para código herdado (tokens.css, bloco APELIDOS). Nenhum hex e nenhum
  nome de fonte na cena (tokens.css, cabeçalho).
- O RIG: copie `templates-cena/_rig.js` inteiro num `<script>` antes do script da cena, e
  `window.__fotosProntas = RIG.prontas()` (ele espera as faces "Marca" e "MarcaSec" do tokens.css).
- A paleta é a da identidade.md §2. Mudar a cor de um papel é decisão do Lucas, não da cena. Quando
  decidida, entra por `RIG.paleta({destaque: "#…"})`, **nunca** `{acento}`: o `--acento` segue o
  `--destaque`, não o contrário (CLAUDE.md, "Peças da pré-v1", item 7). A paleta em prosa do espelho não
  se aplica sozinha.
- Exemplares do canal: `out/prova-marca/graphics/prova-marca.html` (tokens, RIG, fontes, o anel) e
  `out/prova-mapa/graphics/landsat-juneau.html` (pílula de rótulo, crédito a 76 px, de antes de 07/10/2026: hoje
  o crédito é 56, §4 e §9; anel sobre mapa).
  `marca/prancha.html` é o esquema de MAPA, DADO e PRANCHA a 1/4 do palco. `regua/`, `seed/examples/` e
  `knowledge/` vieram do Top10: servem de estrutura; cor, fonte, número e língua de lá não se copiam.
  O exemplo de documento da pré-v1 declara uma `--tinta` escura própria que vence a do canal: ao copiar,
  confira qual vale (tokens.css, "Ciladas").

## 2 · Cor por papel (identidade.md §2)

- `--destaque` (#F5A524): o protagonista do vídeo, **uma** entidade (o território, a série, o ponto), e o
  anel (§5). Em texto, só no rótulo do próprio protagonista: destaque em texto de leitura é peso (800).
- `--contraparte`: o segundo ator, quando a cena compara dois. `--neutro`: do terceiro em diante, sem
  matiz nova. `--tensao`: conflito, risco, perda; **nunca** a cor de um lado.
- Vermelho contra azul como dois lados: **proibido** (são as cores dos partidos nos EUA). Dois lados são
  `--destaque` × `--contraparte`. No máximo 3 matizes por cena, fora a base de satélite. Bandeira não é
  fonte de paleta.
- Sem degradê (`--degrade: none`) e sem véu: a cena de teste de mapa tirou o véu escuro do molde porque a
  identidade não tem degradê (CLAUDE.md, item 7). Fundo sólido (PRANCHA e DOCUMENTO em `--fundo`, DADO em
  `--papel`) fica vivo pela câmera e pelas camadas, como o ofício pede (§8). A textura, a fita e a sombra da
  folha de documento e do cartão da fala não são degradê de fundo: são o objeto sobre a mesa (identidade.md §5).
- **A mesa é feltro sob a luz** (Lucas, 30/09/2026, a variante E; identidade.md §5, "A mesa: feltro sob a luz"). Toda
  cena sem mapa sobre `--fundo` (DOCUMENTO, card, foto impressa, PRANCHA) leva a luz no fundo da câmera, centrada atrás
  do objeto principal e andando com ele, e o feltro numa camada `#mesa`, que é o primeiro filho da câmera. Os
  valores e o modo de usar estão em `marca/tokens.css`, "A MESA". É a única exceção ao `--degrade: none`. **Nada
  disso vai por cima** da foto, da fita, da folha, do card ou do texto: nunca um `::after` de textura sobre a cena
  (`APRENDIZADOS.md` item 53). A referência é a s09 do Juneau, depois da correção. O DADO continua em `--papel`, e o
  mapa e o registro em tela cheia continuam sem degradê nem vinheta.
- **Do vídeo 2 em diante, a mesa é satélite sob a luz** (Lucas, 07/10/2026; identidade.md §5, "A mesa do vídeo 2 em
  diante: satélite sob a luz"). Por baixo da câmera, o still de satélite público do lugar do vídeo, feito por
  `ferramentas/mesa-satelite.py` em `out/<proj>/_media/base/mesa-<lugar>.png` (o Claude central o entrega; se faltar,
  peça, não faça um). A luz vira véu (`--mesa-luz-veu-centro`) e o feltro fica a `--mesa-satelite-feltro`; o still
  acompanha a câmera a `--mesa-satelite-paralaxe`. O modo de usar está em `marca/tokens.css`, "A MESA DO VÍDEO 2 EM
  DIANTE". Sem crédito na tela pelo still (é domínio público) e nada sobre ele: nem rótulo, nem ponto, nem anel.
  O Juneau fica com o feltro sob a luz.

## 3 · Tipo (identidade.md §3; tokens.css)

- Barlow Condensed 800 (`var(--fonte-sec)`): número-herói e título de bloco. Inter (`var(--fonte)`): 500 no
  corpo e na legenda, 700 no rótulo, 800 na ênfase. Nada abaixo de 500 (`--peso-minimo`).
- Noto Sans (`var(--fonte-alt)`) só quando faltar glifo, e no **bloco inteiro**. Não há peso proibido em
  caixa alta (`--pesos-proibidos-caixa-alta` vazio): o defeito de til do ofício era da fonte de outro canal.
- País e região: CAIXA ALTA, Inter 700, `+0.04em`. Cidade, rio e estreito: caixa normal, Inter 700, tracking 0.
- Tracking negativo só no herói de 1–2 palavras (`-0.01em`). `tabular-nums` em eixo e tabela.

## 4 · Tamanho e espaço no palco 4K (identidade.md §4.1–§4.2)

| Papel | Alvo | Teto (reprova) | Máx. de palavras |
|---|---|---|---|
| número-herói / título | 360 px | 560 px | 5 |
| fala citada | 280 px | 340 px | 12 |
| rótulo, inclui nome de lugar e o nome do card de pessoa (§6) | 128 px | 160 px | 3 |
| eixo / legenda, inclui o cargo do card de pessoa (§6) | 84 px | 104 px | — |
| crédito / fonte | 56 px (76 no Juneau) | 64 px (88 no Juneau) | — |

Os pisos que reprovam (260/104/72/72) são do ofício.

- **Crédito a 56 px** (Lucas, 07/10/2026: "quero diminuir o tamanho dos créditos num geral" e "Quero reduzir para 56px";
  identidade.md §4.1, "Crédito a 56 px"). Do vídeo 2 em diante, todo crédito (foto, documento, vídeo, dado, mapa) vai a
  `var(--fs-credito)`, que é 56 px, teto 64. O portão do motor continua cobrando 72 no crédito que não é de mapa
  (`qc-tamanho`): a cena sua vai reprovar nele **só pelo crédito**, e isso é esperado. Não suba o crédito para passar;
  diga no relato que a única reprovação do `qc-tamanho` é o crédito a 56, e o Claude central grava a exceção em
  `out/<proj>/qc/_excecoes-portao.json`, sem nova pergunta ao Lucas. Qualquer outra reprovação do `qc-tamanho` é
  conserto seu. **Nem tire o `data-qc-papel="credito"`**: sem ele, o `qc-tamanho` só avisa e o `portao-mapa rodape` não
  mede o contraste. É verde comprado, como a marca de mapa fora do crédito de mapa (§9). **No Juneau, 76 px**: cena do
  Juneau refeita declara `--fs-credito: 76px` no `:root`, num `<style>` posto **depois** do `<link>` do `tokens.css`
  (antes dele, perde para o 56), para não misturar dois tamanhos no mesmo vídeo (44 das 56 cenas dele leem
  `var(--fs-credito)`, e todas têm o `<link>` antes do primeiro `<style>`). Sem o override, nenhum render do Juneau,
  nem com `--forcar`: o carimbo `.mp4.de-html` não enxerga a troca da marca.

- Texto sobre mapa ou registro vai na pílula: `--rotulo`, cantos de 12 px, respiro de 24 × 40 px. Nada de
  scrim, sombra ou contorno no texto (`--texto-tratamento: "caixa"`, `--texto-sombra: none`).
- Legenda de relação sobre a seta da PRANCHA (ex.: `claims the same waters`): 84 px, Inter 500, `--legenda-cor`.
- Margem: 200 px nas laterais, 160 px no topo. Abaixo de y = 1880, só crédito, a partir de x = 200 e
  terminando antes de x = 1720. Crédito longo quebra em duas linhas de 56 px (76 no Juneau) e nunca encolhe. O centro dessa
  faixa fica livre para a legenda automática do YouTube e a barra do player.
- **A margem, a faixa do crédito e o canto valem em todo quadro, sob a câmera** (Claude central, 01/10/2026, depois
  da conferência dos primeiros renders do Juneau; `APRENDIZADOS.md`, item 58). O `R.camera` do RIG tem zoom contínuo
  (base + 0,0024 por segundo), e a órbita e a deriva movem o palco. Quem é posto rente à margem na montagem sai dela
  no fim da cena: no Juneau, 20 a 55 px em 13 cenas. Monte o que encosta na margem recuado pelo zoom máximo da cena:
  com escala final `s`, o limite esquerdo vira `1920 − (1920 − 200) / s`, o direito `1920 + (1920 − 200) / s`, o de
  cima `1080 − (1080 − 160) / s` e o da faixa de baixo `1080 + (1880 − 1080) / s` (com a origem da câmera no centro;
  com outra origem, a conta muda). A borda de papel, a fita e a moldura contam como o elemento. Confira no último
  quadro do render, não só no primeiro.
- Uma linha de crédito que entra ou sai não faz a outra saltar: a pílula muda de altura junto com o fade, ou as
  duas linhas já ocupam o lugar delas desde o começo. Um salto de 83 px num quadro só, com `hidden`, é defeito.
- Canto inferior direito, 400 × 400 px: vazio (marca-d'água do YouTube). Nenhuma logo do canal na cena.
- **Teto de 6 elementos simultâneos; alvo de 4 a 5.** Contam texto e gráfico (rótulo, número, seta, barra,
  anel, território aceso, cartão). Não contam a base de tela cheia, o crédito e a textura. O círculo de ator
  com a bandeira e o nome embaixo conta como um. Blocos de texto vivos: até 3 (`--max-blocos`; o que é bloco: identidade.md §4.2). Um herói por
  cena, ou nenhum.
- O `qc-carga` conta em outra unidade e com os tetos do ofício, não com os 6 da marca. Conte os 6 da marca nos quadros e escreva a conta no cabeçalho do HTML como conta sua, não como
  portão. DECISÃO DO LUCAS PENDENTE: como passar esse teto aos flags do `qc-carga`.

## 5 · Tempo e movimento (identidade.md §4.3–§4.4)

- Bloco de texto no ar: ≥ 2,0 s (o ofício diz ~1,5 s; a marca sobe). Beat: ≥ 1,5 s.
- Foto ou footage **parado**, sem movimento com propósito: ≤ 6 s. Foto parada leva Ken Burns de escala
  1,00 → 1,12 em 6 s, linear (do vídeo 2 em diante, com direção e o teto do produto: "A mão que arruma", abaixo).
- No vídeo inteiro: rajada (beats < 2,5 s) ≤ 20 % do tempo; respiro (beat ≥ 6 s com movimento lento) ≥ 10 %;
  registro real (footage, foto, satélite de geometria real) ≥ 60 %.
- Rótulo entra em 300 ms (opacidade + 24 px de subida, ease-out). Território preenche em 500 ms.
- Corte seco só na troca de regime (mapa → registro, registro → prancha). Mapa seguido de mapa é uma viagem
  de câmera (`fundir: true`), e é do mapista.
- **O anel**, a assinatura do canal: círculo de 56 px, traço de 10 px em `--destaque`; pulso de escala
  1 → 1,8 e opacidade 1 → 0 em 1,2 s, duas vezes, e para. Ele marca PONTO (estreito, porto, usina). País e
  região são sempre o polígono inteiro.
- **A mão que arruma** (Lucas, 07/10/2026: "movimento A"; identidade.md §4.4, "A mão que arruma", e §5; os números em
  `marca/tokens.css`, "A mão que arruma"). Do vídeo 2 em diante, em toda cena de mesa: a folha, a foto impressa e o
  retrato do card chegam com **assentamento** (1,03 → 1,00 nos últimos 200–240 ms, `eo`, uma vez, sem voltar); a
  **sombra solta** é um elemento próprio com desfoque fixo, animando só `transform` e `opacity` (no ar +64 px, 1,05, 0,35;
  assentada +12 px, 1,00, 0,80; nunca o raio do blur); a **luz** segue o centro do objeto 120 ms atrás; a câmera da folha
  **chega 0,3 s antes da primeira palavra do grifo e para** enquanto ele corre; a troca de foto na mesa é **"a antiga
  fica, a luz escolhe"**, e a saída de um objeto é o **levantar** (350 ms, escala 1,00 → 1,04 em ease-in cúbico,
  `p => p*p*p`: a única curva fora do `eo` e do `eb` do RIG); o rótulo e o aviso do ano entram 150 ms depois do
  assentamento; **o texto já na tela fica parado enquanto se lê**: todo movimento que o leva (a câmera sobre a folha, o
  objeto com o grifo, a fala citada) termina pelo menos 0,25 s antes da primeira palavra que o lê (a entrada do número e
  do cartão da fala, na palavra, não conta); nos 250 ms antes de um corte, nada se move além da deriva (a retomada da folha e o push-in do RIG
  terminam antes). **O Ken Burns com direção** (até 80 px rumo ao assunto, com a direção e o produto das escalas no
  cabeçalho) vale em toda foto em tela cheia, a de REGISTRO desde o primeiro quadro e a que sobe da mesa (identidade.md
  §4.4), e não só na cena de mesa. Escreva no cabeçalho da cena o produto máximo das escalas e a direção do Ken Burns: na
  mesa, o produto conta o 1,03; em tela cheia, é a escala de encher × o Ken Burns, e na foto que enche a tela a mais de
  1,25 vez o Ken Burns termina em 1,4 ÷ (a escala de encher), e não em 1,12 (o produto fica ≤ 1,4). **B e C não foram
  escolhidas**: nenhum deslize pela borda, antecipação de câmera, viagem de câmera pela mesa, mergulho nem still com
  sangria. O Juneau fica como está (a demo da A está em
  `out/juneau/_tmp/movimento/`, BRIEF.md §D.A).

## 6 · Os cinco modelos (identidade.md §5) e o `modo` do espelho

| Modelo | `modo` | Como é neste canal |
|---|---|---|
| MAPA | `mapa`, `mapa3d` | é do **mapista**: delegue |
| REGISTRO | `footage`, `foto`, `aereo-real` | o asset real em tela cheia, sem moldura, com rótulo de lugar e crédito; a foto com `aviso_de_ano: true` no veredito leva o aviso do ano (§10). A foto de época com menos de 1.600 px de largura vai impressa sobre a mesa, até 1,4 vez o tamanho do arquivo, e nunca em tela cheia (identidade.md §5, "A foto antiga pequena"). A de 1.600 px ou mais que, para encher a tela, passaria de 1,4 vez também vai impressa, até 1,4 vez (Lucas, 29/09/2026; identidade.md §5, "A foto média também vai impressa"). Sobre arquivo com `lugar_na_origem: null` no veredito do conferente, sem rótulo de lugar (midia.md §2.7): declare no report, e isso não reprova |
| PRANCHA | `desenho` | sobre `--fundo`. Ator = círculo de 640 px, traço de 6 px na cor do papel dele, bandeira oficial dentro, nome embaixo. Setas e linhas de 6 px. Ícone em círculo de 160 px |
| DADO | `dados` | sobre `--papel`. Série do protagonista em `--destaque`, da contraparte em `--contraparte`, eixo em `--eixo-cor` (`--tinta-escura` a 60 %) |
| DOCUMENTO | `documento` | a **folha de papel sobre a mesa** (Lucas, 27/09/2026; identidade.md §5, "A folha de documento"): folha em `--papel` com textura, borda de baixo rasgada, fita nos cantos de cima, sombra e até `--doc-inclinacao` de inclinação, sobre `--fundo`. Texto em `--fonte-doc` (Courier Prime): corpo 400 em `--doc-corpo` (piso 84 px), cabeçalho 700 em `--doc-cabecalho`, com a referência da peça numa caixa de contorno. A folha cresce com o texto: pelo menos `--doc-margem-rasgo` de branco entre a última linha e o rasgo, e a fita fora do texto. Texto que não cabe: a câmera desce pela folha com a voz, ou a folha recua e escurece e o trecho da voz aparece ampliado ao lado (literal, até 12 palavras). A página real, com permissão de uso clara, entra como a folha, sem redesenho; sem ela (documento do Estado do Alasca, imprensa), o trecho recriado com o texto citado fiel e a fonte citada, nunca um fac-símile: sem brasão, selo, timbre, logo ou assinatura (midia.md §7.1, §7.6). O trecho que importa grifado em `--grifo-cor` (`--destaque` a 35 %), passando com a voz; texto em `--tinta-escura` |

- `titulo-topico`, `navegacao` e `apresentador*` não existem neste canal. Outro `modo` do enum (`citacao`,
  `split`, `split-footage`, `cinematico`, `gravura-colagem`, `mosaico`) não é modelo da identidade: execute
  dentro de um dos cinco e diga qual, ou devolva ao montador a troca proposta.
- Pessoa real nomeada = registro real, identificada por nome e cargo (identidade.md §5; o contrato exige o
  cargo, `contratos/textos-tela.schema.json` › `cards_pessoa` › `o_que_e`). **O card de pessoa** (Lucas,
  26/09/2026; identidade.md §5): o nome na pílula `--rotulo`, 128 px, Inter 700, até 3 palavras
  (`--fs-rotulo`, `--peso-rotulo`), e o cargo numa linha menor logo abaixo, no papel "eixo / legenda", 84 px,
  Inter 500 (`--fs-eixo`, `--peso-texto` em `marca/tokens.css`). Exemplo aprovado: `MARIA GLADZISZEWSKI` em
  cima e `Assembly member, City and Borough of Juneau (2017)` embaixo (identidade.md §5; Lucas, 28/09/2026). O rosto, quando há, segue midia.md §7.2; sem foto em
  fonte autorizada, o card sai só com nome e cargo. **A composição** (Lucas, 27/09/2026; identidade.md §5):
  - o retrato vem como foto impressa, com moldura em `--tinta`, fita e leve inclinação sobre `--fundo`, sem
    alterar a foto;
  - o nome e o cargo ficam logo abaixo dela, e o cargo quebra na largura da foto;
  - a fala citada, quando há, vai num cartão de papel ao lado, em `--papel`, Inter 700 (`--fs-fala`, piso 260),
    até 12 palavras, entrando com a voz;
  - o cargo nunca passa por baixo do cartão. Sem `--destaque` no card.
  - o retrato com `aviso_de_ano: true` no veredito leva o aviso do ano na margem de baixo da foto impressa (§10).
- A bandeira é o asset oficial de `assets/flags/<iso2>.png`, pelo caminho `../../../assets/flags/<iso2>.png`
  (procedência em `assets/flags/_PROCEDENCIA.json`; `ca.png` e `us.png` estão lá). O `_INDICE.json` mapeia
  nomes em português: procure pelo código ISO. Faltou: peça à `pesquisa-logos`. A que ela entregar em
  `out/<proj>/_media/logo/` passa pelo `conferente-de-midia` antes de a cena a citar (§10). Nunca desenhe, nunca
  emoji, não baixe você.
- **Bandeira ao lado de nome de país: não** (Lucas, 27/09/2026; identidade.md §6, "País no mapa"). O país se
  identifica pelo nome escrito, no mapa e fora dele, sem bandeira nenhuma, nem a dos EUA, embora o ofício (§2)
  a peça: vale a decisão do Lucas. Na PRANCHA, a bandeira vai dentro do ator (identidade §5), menos a do Canadá,
  das províncias e dos territórios canadenses, que vão só com o nome até o Lucas decidir (DECISÃO DO LUCAS
  PENDENTE). O `qc-pais-bandeira` não se usa: ele cobra bandeira ao lado do nome e não lê nome em inglês
  (CLAUDE.md, tropeços).

## 7 · Os 20 s finais: o fundo da tela final do YouTube

Os 20 s sem voz também são cobertos por cena (identidade.md §5). Os elementos da tela final caem por cima,
em posição escolhida no YouTube Studio, que o canal ainda não fixou.

O que vai por baixo, no Juneau (Lucas, 28/09/2026: "A última cena, parada e escurecendo (Recomendado)"): "O quadro
final (o YES da votação e a linha do preço vazia) para e escurece aos poucos, sem texto novo. Não disputa com os
botões." Ele escurece até metade do brilho, linear em 20 s, sem chegar ao preto (Lucas, 28/09/2026: "Médio
(Recomendado)"; identidade.md §5, "A tela final e o carimbo do Juneau": 100 % coberto). A composição fica na metade
esquerda, e a direita, livre para os botões do YouTube ("B, carimbo de borracha à esquerda (Recomendado)"). O YES é o
carimbo de borracha da abertura (s01): a caixa, a letra, a inclinação e a tinta gasta estão na identidade, e a
conferência visual é `marca/prancha-fim.html`. A cena é fundo: sem texto novo, sem
herói e sem elemento-chave, e declarada com `data-qc-sem-heroi="fundo da tela final do YouTube
(canal.json › narracao.cauda_tela_final_s)"`. É assim que o qc-visual a julga como fundo (ofício dele, §2.3). Nos
próximos vídeos, até o Lucas decidir de novo, a do Juneau é a proposta; antes dela, a cena era fundo com movimento
lento.

Se algum clipe do vídeo vier do Shutterstock, a linha `Image(s) and/or video used under license from
Shutterstock.com` vai na faixa de crédito desta última cena (identidade.md §7; midia.md §3.4).

## 8 · A tela em inglês dos EUA (identidade.md §7; CLAUDE.md, "O vídeo fala inglês")

- AP Stylebook vigente, também no nome de lugar.
- Números com vírgula de milhar: `2,700`, `ALMOST 3,000×`, `28.0×`.
- Dinheiro em dólar: `$265 billion`. Valor em outra moeda é convertido pela cotação da data da fonte, nunca
  trocando só o símbolo.
- Imperial primeiro, métrico entre parênteses quando a fonte é métrica: `22.2 ft (6.76 m)`.
- Datas absolutas: `March 3, 2024`, `MAY 1, 1994`. Nunca `last week` nem `recently`. Escala americana quando
  couber: `about the size of Texas`.
- ⚠️ **Os exemplos do agente estão no formato brasileiro e não se copiam**: `R$ 2 bi`, `6,76 m ABAIXO DO
  MAR`, `MAR`/`CHÃO`, `IMOLA · 1º DE MAIO DE 1994`, `Foto: Fulano · CC BY-SA 2.0`, `Arquivo · 1985`,
  `lang="pt-BR"`. Aqui seriam `22.2 ft (6.76 m) BELOW SEA LEVEL`, `SEA`/`GROUND`, `MAY 1, 1994`.
- A tela pode ser exata, mas preserva o hedge da voz (voz.md §1): se a voz diz `almost 3 million`, a tela não
  crava o número sem o `ALMOST`. O que o narrador nunca diz, a tela também não diz (voz.md §2): palavra
  carregada só entre aspas e atribuída, nada de `shocking` nem `breaking`.
- Pedido de mídia (`midia_termos`, `exige`) em inglês.
- Foto de arquivo sob dateline (ofício §8). DECISÃO DO LUCAS PENDENTE: a palavra. A proposta é `FILE`, a marca
  de foto de arquivo nas legendas do AP, dentro da linha de crédito que já existe:
  `FILE · 1985 · <autor> / <acervo> · <licença>`. Até ele decidir, use a proposta e diga no resumo.

## 9 · Crédito (identidade.md §6–§7)

- Dado: `Source: <instituição>, <ano>`. Mídia cuja licença pede atribuição: `<autor> / <acervo> · <licença>`.
  56 px (Lucas, 07/10/2026; identidade.md §4.1, "Crédito a 56 px"; 76 no Juneau, pelo override do §4), na faixa abaixo
  de y = 1880, com `data-qc-papel="credito"`. Sobre mapa ou registro, na pílula
  `--rotulo` com texto `--sec`, Inter 500, como no exemplar `landsat-juneau.html`. Sobre `--papel`, em
  `--tinta-escura`, que é o texto sobre papel (identidade.md §2).
- Foto do governo do Alasca e de jornal leva crédito na tela sempre: a fonte como a origem a credita,
  `<author> / <outlet>`, ou só o veículo ou o órgão (Lucas, 26/09/2026; midia.md §7.5). O vídeo do governo do
  Alasca, o mesmo (Lucas, 27/09/2026).
- Domínio público **não** leva crédito na tela (NASA, Landsat/USGS, Natural Earth, NARA, obra do governo
  federal, inclusive DVIDS e sala de imprensa federal): crédito supérfluo reprova. O Copernicus Sentinel leva `Contains modified Copernicus Sentinel
  data <ano>`.
- Mapa sobre base MapTiler, mesmo dentro de uma cena sua: `© MapTiler © OpenStreetMap contributors` na tela do
  primeiro ao último quadro de mapa, com `data-qc-credito="mapa"`, **e só nele**: a marcação dá a esse crédito o piso
  de 40 px do portão (`docs/CREDITO-DE-MAPA.md` §6.2 da pré-v1), e a 56 px ele passa no `qc-tamanho` sem exceção; posta
  no crédito de uma foto ou de um documento, compraria um verde falso. O portão a aceita num ancestral (`closest`), por
  isso ela vai **no próprio elemento da linha** do crédito de mapa (ou num ancestral que só contenha ela), nunca no
  contêiner comum dos créditos (o `#creds` da pílula com duas linhas) nem no `#palco`: marcado o contêiner, a linha da
  foto ao lado passa a 56 sem reprovar (medido em 07/10/2026). Geometria do OpenStreetMap leva
  `© OpenStreetMap contributors` mesmo sem MapTiler; com MapTiler, não se repete (CLAUDE.md, item 6).
  No Juneau vêm do OSM o Taku, Willow, Haines, a estrada e Cascade Point. A regra de "zero crédito de mapa na
  tela" do Top10 (ARTE-104, em `seed/regras/ARTE.md`) **não vale** aqui. Natural Earth: nada.

## 10 · Mídia (midia.md; identidade.md §6)

- **Evento real específico** (votação, pessoa pública, obra, cédula): só de acervo aberto ou oficial, com data
  e local conferidos na origem: NARA, Library of Congress, NASA, USGS, Smithsonian e Wikimedia Commons, com a
  licença conferida arquivo a arquivo, e as fontes federais: sala de imprensa de órgão federal dos EUA e DVIDS,
  domínio público, sem crédito na tela (Lucas, 26/09/2026; midia.md §7.3). Imagem "ilustrativa" de outro
  evento não entra.
- **Foto de outro ano, com o aviso na tela** (Lucas, 27/09/2026; identidade.md §4.1, §5 e §6). A foto ou o
  retrato com `aviso_de_ano: true` no veredito do `conferente-de-midia` leva o aviso durante todo o tempo em que
  aparece assentado (do vídeo 2 em diante, o aviso entra 150 ms depois de a foto assentar, 300 ms, opacidade + 24 px,
  salvo quando a voz o convoca antes: identidade.md §4.4, "A mão que arruma", e §6, "O aviso"):
  - na foto em tela cheia, `Photo from <ano>` numa pílula `--rotulo` logo abaixo do rótulo de lugar (ou no
    lugar dele), 84 px, Inter 500, com respiro de 16 × 28 px;
  - no card, na margem de baixo da foto impressa, sem pílula, em `--tinta-escura` a 72 %, 84 px, Inter 500;
  - nunca na faixa de crédito, e não conta como elemento.
  - O ano sai do `data_na_origem` do veredito, na grafia do `redator-de-tela` (identidade.md §7).
  - Marque o elemento com `data-qc-aviso-ano`, para o `qc-visual` achá-lo.
- **Documento do governo do Estado do Alasca** (cédula, folheto eleitoral, boletim, estatuto impresso,
  estudo estadual, Alaska State Library) **e de imprensa** (Anchorage Daily News, KTOO) não estão no domínio
  público que a identidade.md §7 isenta de crédito; nos EUA, a obra do governo federal é domínio público por
  lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. **Regra** (Lucas,
  26/09/2026; midia.md §7.1): a peça só vai à tela com permissão de uso clara (domínio público comprovado,
  licença aberta ou autorização escrita), conferida e gravada no `_PROCEDENCIA.json`. Sem ela, a cena
  recria o trecho no visual do canal (DOCUMENTO, tipografia e cores da marca), com o texto citado fiel e a
  fonte citada. Licença não se inventa nem se deduz da origem.
- **Foto do governo do Alasca e de jornal** (inclusive de agência), que não é retrato de pessoa citada:
  entra citando a fonte, com o crédito na tela (§9) e a procedência gravada (Lucas, 26/09/2026; midia.md
  §7.5). Foto de agência só vai à cena depois do ok do Lucas àquela foto (Content ID); foto Reuters não
  entra (midia.md §7.4, item 2).
- **Vídeo do governo do Alasca** entra como a foto dele: crédito na tela (§9) e procedência gravada (Lucas,
  27/09/2026; midia.md §7.5).
- **Foto de outra origem sem licença**, e vídeo de jornal, de veículo ou de agência sem licença conferida, não
  entram nem se redesenham: bloqueio reportado, não improviso (midia.md §7.5; Lucas, 27/09/2026).
- **Logo de qualquer instituição** (jornal, órgão do Alasca, órgão federal, empresa, liga) **e o selo do
  Estado**: não vão à cena, nem redesenhados. Vai o nome da instituição na pílula `--rotulo`, Inter 700
  (Lucas, 26/09/2026 e, a logo federal e a de outras instituições, 27/09/2026; midia.md §7.6).
- **Retrato oficial** de governador ou de legislador, para ilustrar a citação dele: uso editorial, sem
  crédito na tela, com a procedência gravada (Lucas, 26/09/2026; midia.md §7.2).
- **Banco pago** (midia.md §1, §2): evento real específico nunca vem dele. B-roll genérico (paisagem, cidade,
  porto, indústria, drone) vem, na ordem Envato Elements → Motion Array → Storyblocks → Shutterstock, com as
  regras do §2 (editorial nunca; pessoa de banco nunca em política; Storyblocks só neutro). O download é nas contas
  que o Lucas designou (§2.3: a assinatura da Top10 na Storyblocks e no Envato), pela caça no Chrome dele que ele aprova item por item (§8; CLAUDE.md, "Caça nos
  bancos pagos"). Faltou B-roll genérico: entregue a lista do que procurar (termos em inglês, cena, duração, por que é
  genérico). Nunca baixe de banco, nem abra o site dele, nem peça a uma pesquisa que o faça.
- Acervo gratuito, só os oficiais e as fontes federais: Wikimedia Commons, NASA, NARA, USGS, Library of
  Congress, Smithsonian, sala de imprensa de órgão federal e DVIDS, e, desde 27/09/2026, as fontes da 4ª
  rodada (midia.md §7.3), com o crédito que identidade.md §6 e §7 dão a cada uma. Pexels, Pixabay e as outras fontes
  gratuitas ficam fora (Lucas, 26/09/2026; midia.md §7.3; o `buscar-midia` as desliga por
  `marca/midia.json`).
- **A cena só cita arquivo de `out/<proj>/_media/` que tem `aprovado` em
  `out/<proj>/_pesquisa/conferencia-midia.json`**, no veredito do `conferente-de-midia` que casa com ele
  (CLAUDE.md, "Os especialistas"; ofício do conferente, §2): no banco pago, pela `url` do `_PROCEDENCIA.json` da
  cena; no acervo aberto, pelo `medido.sha256` ou `medido.medido_no_download.sha256` dele; em `_media/pessoa/`,
  `logo/` e `documento/`, pelo `sha256sum` do arquivo. O veredito que casa tem de ser da cena que cita o arquivo
  (o campo `cena` dele), ou haver o reuso declarado (ofício do conferente, §5.4). Com `pendente_lucas`,
  `reprovado`, `trocar`, sem veredito ou com o veredito de outra cena, o arquivo não vai ao `src`: peça a
  conferência ao Claude central, ou reporte o bloqueio. Ficam fora
  dessa regra as bandeiras de `assets/flags/`, a geometria de `_media/geo/`, a base de mapa (`_media/base/`, ou a
  do perfil do `canal.json`) e as bibliotecas do mapa em `_media/_vendor/`.
- **Arquivo com `-prova` no nome** (a captura e a página sem permissão do `pesquisa-documentos`) nunca vai à tela.
  Só vai a página com a permissão do midia.md §7.1, sem `-prova` e com o `aprovado` do conferente.
- A lição do crédito pela procedência está no APRENDIZADOS.md, item 36. O `_commons-baixar` não trava
  licença: confira cada arquivo antes de pôr o `src` (CLAUDE.md, item 5).
- Faltou mídia: bloqueio reportado (ofício §9). Nunca o clipe da cena vizinha, nunca fundo chapado.

## 11 · Validar nesta máquina (ofício, contrato §7)

- **Quadros dos beats** (item 1): `node <motor>/src/ferramentas/quadro.mjs out/<proj>/graphics/<id>.html
  out/<proj>/_tmp/<id>@<t>.png --t=<t>`. É CDP, sem npm, e confere também o contrato estático da cena
  (a lista de `<motor>/src/cena/proibidos.mjs`). Foto ou satélite em tela cheia: se ele cair com a conexão
  fechada (por quê: CLAUDE.md, "Peças da pré-v1", item 7), renderize e tire o quadro do MP4:
  `node <motor>/src/ferramentas/renderizar.mjs <proj> --cena=<id> --4k` (sempre `--4k`, e o carimbo
  `<id>.mp4.de-html` terminando em `2160p`; CLAUDE.md, "Os especialistas", tropeços) e depois
  `ffmpeg -ss <t> -i out/<proj>/graphics/<id>.mp4 -frames:v 1 out/<proj>/_tmp/<id>@<t>.png`. O `shot.mjs`
  roda desde 01/10/2026, com `REGIE_MOTOR`.
- **Itens 2, 2c, 3, 4 e 7** do contrato: são portões de navegador e rodam desde 01/10/2026 (o `qc-cena` roda a
  maior parte; a lista está no CLAUDE.md, "Os portões medem"). Os portões medem o HTML em instantes que eles
  escolhem: continue olhando nos quadros do clipe o que ficou entre esses instantes (a câmera, as entradas).
- **Item 5**: `node scripts/qc-src-existe.mjs out/<proj>/graphics/<id>.html`.
- **Item 6**: `node scripts/qc-hex.mjs out/<proj>/graphics/<id>.html`, no lugar do `perl` do ofício.
- **Item 9** (lastro): `node scripts/mapa-limpo.mjs <proj> --tc <início>-<fim>`, em timecode `hh:mm:ss:ff`.
- **A janela**: `node scripts/qc-janela.mjs <proj>`; em run fundido, `node scripts/qc-fusao-espelho.mjs <proj>`.
  Mídia prometida e não usada: `node scripts/qc-pauta-integrada.mjs <proj>`. Fontes da marca:
  `node scripts/qc-tipografia.mjs out/<proj>/graphics/<id>.html`.
- Quadro, rascunho e teste de fonte ficam em `out/<proj>/_tmp/` (o `/tmp` do ofício; fora do git), nunca em
  `graphics/`, que é só da cena entregue.
- Cena com mapa MapTiler dentro: quadro e render pedem tiles pagos. No Juneau, o gasto de pedidos na MapTiler está liberado, com o relevo 3D só em s44 (Lucas, 28/09/2026; identidade.md §6, "O gasto do Juneau, liberado"). Antes do primeiro
  quadro de mapa do vídeo, pare e devolva ao Claude central: ele anota o contador da MapTiler antes e depois
  dessa cena, e o custo real vai ao Lucas antes das outras. Nos próximos vídeos, o gasto pede um ok próprio
  (DECISÃO DO LUCAS PENDENTE).

## 12 · No Juneau

- Cenas de REGISTRO, PRANCHA, DADO e DOCUMENTO; todo mapa é do mapista. Grafia de nome de pessoa (Gladziszewski,
  Kiehl, Stoops, Knowles, Walker, Frank Harris, Reamer) confere contra `roteiros/juneau/roteiro-editor.md`, que
  traz a fonte de cada frase.
- Caem no §10:
  - os folhetos eleitorais de 1978, 1982 e 1994: documento, só com permissão de uso clara; sem ela, o
    trecho de texto é recriado (midia.md §7.1);
  - as fotos oficiais do estado, inclusive as da balsa estadual: entram com a fonte creditada na tela
    (midia.md §7.5);
  - as mascotes Access Annie e Football Fannie: peça de campanha (anúncio, folheto) é documento (§7.1);
    foto de jornal, §7.5;
  - o estudo de 2018 (Final SEIS e ROD, da FHWA com o Alaska DOT&PF): conta como estadual (pesquisado a
    pedido do Lucas, 26/09/2026; midia.md §7.1, "O estudo de 2018"). Página, capa, figura, mapa, o logo
    "Juneau Access" e as assinaturas não vão à cena. O trecho citado se recria em DOCUMENTO com
    `Source: Alaska DOT&PF and FHWA, 2018`, e a frase de decisão do ROD com `Source: Federal Highway
    Administration, 2018`. Número de tabela vira DADO com a mesma fonte do estudo. O aviso da FHWA no Federal
    Register de 30/07/2018 (83 FR 36661) é obra federal: pode ir como está, sem crédito na tela.
- A fala citada (Gladziszewski, Stoops) segue o §4: até 12 palavras na tela. Quem corta o trecho é o
  `redator-de-tela`.
