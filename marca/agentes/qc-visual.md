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
  out/<proj>/_tmp/qc-<cena>@<t>.png --t=<t>`. Ele usa CDP, sem npm. O `shot.mjs` sai NÃO MEDIDO.
- Se o `quadro.mjs` cair com a conexão fechada (foto ou satélite em tela cheia; por quê: CLAUDE.md, "Peças da
  pré-v1", item 7), use o clipe renderizado, desde que ele valha (abaixo):
  `ffmpeg -ss <t> -i out/<proj>/graphics/<cena>.mp4 -frames:v 1 out/<proj>/_tmp/qc-<cena>@<t>.png`.
- **O clipe vale** só se o `<cena>.mp4.de-html` tem as duas linhas certas: a primeira igual ao `sha1sum` do HTML
  (o clipe é deste HTML) e a segunda `2160p` (o render foi `--4k`). Com `1080p`, os quadros saem em meia
  escala, e as medidas da §4 (rótulo de 128 px, crédito de 76 px, margem de 200 px) não se julgam neles:
  clipe velho (CLAUDE.md, "Os especialistas", tropeços).
- **Cena de mapa**: a prova é o clipe, não o `quadro.mjs` (por quê: CLAUDE.md, "Peças da pré-v1", item 7). O
  `maprender.mjs` do ofício não existe aqui.
  - Se o clipe vale, tire os quadros dele com o ffmpeg. Não custa nada.
  - Sem clipe, ou com clipe velho, o render pede tiles pagos da MapTiler, e esse gasto ainda não foi
    liberado. **Não renderize.** A cena fica **não julgada** (bloqueio): diga isso ao Claude central, que
    pergunta ao Lucas. Nunca aprove cena de mapa sem quadro.
- Os quadros saem do `quadro.mjs` ou, na cena de satélite, do MP4 renderizado, com o ffmpeg: o `quadro.mjs`
  não fotografa satélite nesta máquina (acima). A medida sai do `ffprobe`. Os quadros ficam em
  `out/<proj>/_tmp/`, fora do git.

## 3 · Os portões: o que rodou, o que não rodou, e o `aprovado`

- **Rodam sem npm**: `qc-janela`, `qc-src-existe` e `qc-hex`. Quem desenhou os roda e manda o veredito no
  resumo; você lê, com a contagem de itens.
- **Saem NÃO MEDIDO** enquanto o npm não for autorizado (DECISÃO DO LUCAS PENDENTE): os portões de navegador
  da lista do CLAUDE.md ("Os especialistas"). O `qc-cena` não dá carimbo a nenhuma cena por causa deles. Isso
  **não** é verde e **não** é reprova. No laudo, cada um vai pelo nome.
- Com os quadros na mão, você ainda olha o que eles mediriam: colisão, tamanho, fora do quadro. Olhar não é
  medir. No laudo, a frase é "olhado; portão NÃO MEDIDO", nunca "passou".
- **O `aprovado`, até o Lucas decidir se cena vai ao 4K sem esses portões** (DECISÃO DO LUCAS PENDENTE):
  - as 14 lentes são julgadas normalmente;
  - na lente em que cada portão mediria (`espaco` para colisão, tamanho e borda; `poluicao` para carga;
    `fonte` para crédito-fantasma e contraste do rodapé), vai um problema `"NÃO MEDIDO: <portão>
    (sem playwright-core)"`;
  - `gatesDuros` lista só portão que mediu e reprovou;
  - `aprovado` fica `false`, porque "zero portão duro vivo" não foi provado. No report: "lentes ≥ 7; aguarda
    portões NÃO MEDIDO".
  - O `qc-laudo` barra. Quem destrava é o Lucas: com a decisão dele, o laudo ganha `"resolvido": true` e um
    `motivo` com a data e as palavras dele. Não é você que marca `resolvido`.

## 4 · Os números da marca, por lente

- **espaco** (identidade.md §4.1–§4.2):
  - alvo e teto: herói e título 360 e 560 px, até 5 palavras; fala citada 280 e 340 px, até 12; rótulo e nome
    de lugar 128 e 160 px, até 3; eixo e legenda 84 e 104 px; crédito 76 e 88 px. O teto reprova como o piso;
  - card de pessoa: DECISÃO DO LUCAS PENDENTE (lente **abordagem**, abaixo). A contagem de palavras dele
    sinaliza, não reprova;
  - margem de 200 px nas laterais e 160 px no topo;
  - abaixo de y = 1880, só crédito, de x = 200 até antes de x = 1720;
  - o canto inferior direito, 400 × 400 px, vazio; nenhuma logo;
  - um herói por cena, ou nenhum. Nome de lugar como herói reprova.
- **poluicao** (identidade.md §4.2): teto de 6 elementos simultâneos, alvo de 4 a 5.
  - Contam texto e gráfico. Não contam a base de tela cheia, o crédito e a textura. O ator com bandeira e nome
    conta como um.
  - Até 3 blocos de texto vivos (`--max-blocos`).
  - Cena que encosta no teto está no pior extremo: sinalize.
- **tema** (identidade.md §2):
  - cor por papel no vídeo inteiro. `--destaque` só no protagonista (uma entidade) e no anel;
  - `--tensao` nunca é a cor de um lado. Vermelho contra azul como dois lados reprova;
  - no máximo 3 matizes, fora a base de satélite. Território pintado com as cores da bandeira reprova;
  - sem degradê. DECISÃO DO LUCAS PENDENTE: se fundo sólido (`--fundo`, `--papel`) sem vinheta basta. Até lá,
    não reprove o fundo liso vivo pela câmera; reprove o parado.
- **motion** (identidade.md §4.4):
  - mapa seguido de mapa é uma viagem, e o corte seco entre dois mapas reprova;
  - viagem de 1,5 a 3 s, cúbica;
  - rótulo entra em 300 ms; território em 500 ms;
  - foto parada com Ken Burns de 1,00 a 1,12 em 6 s;
  - o anel pulsa duas vezes e para.
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
  - **DECISÃO DO LUCAS PENDENTE: como o card de pessoa cabe na identidade.** Nome e cargo passam das 3
    palavras do rótulo (identidade.md §4.1): "Assembly member Maria Gladziszewski" tem 4. Proposta do
    verificador, ainda não aprovada: o nome no rótulo (até 3 palavras) e o cargo logo abaixo como legenda,
    84 px, Inter 500 (o papel "eixo / legenda" de identidade.md §4.1; `--fs-eixo` e `--peso-texto` em
    `marca/tokens.css`). Até a decisão, sinalize o card e **não** reprove a contagem de palavras dele.
- **acessibilidade** (identidade.md §0; voz.md §1): o espectador é norte-americano, de 25 a 60 anos, e não
  acompanha geopolítica. Ele entende a cena em 2 segundos sem saber o vocabulário?
- **factual**, grafia (identidade.md §7; CLAUDE.md):
  - inglês dos EUA, pela forma que a imprensa dos EUA usa agora (AP Stylebook vigente);
  - imperial primeiro; datas absolutas;
  - número com vírgula de milhar e dinheiro em dólar convertido pela cotação da data da fonte;
  - a tela preserva o hedge da voz (voz.md §1);
  - nome de pessoa e de lugar confere contra a fonte da frase, no dossiê do roteiro
    (`roteiros/<proj>/roteiro-editor.md`).
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
  - O crédito: 76 px, na faixa abaixo de y = 1880, legível, com `data-qc-credito="mapa"` (identidade.md §6;
    CLAUDE.md).
  - Geometria do OpenStreetMap sem `© OpenStreetMap contributors` reprova. Com a linha da MapTiler, já está
    coberta.
- **Crédito na tela para domínio público** (NASA, Landsat/USGS, NARA, Natural Earth, obra do governo federal):
  supérfluo, reprova (`fonte`; identidade.md §7).
- Formatos do crédito: `Source: <instituição>, <ano>` e `<autor> / <acervo> · <licença>`. O Copernicus Sentinel
  leva a própria linha (identidade.md §6).
- **Documento ou foto do governo do Estado do Alasca, ou de imprensa** (Anchorage Daily News, KTOO): não estão
  no domínio público que a identidade.md §7 isenta de crédito, e nos EUA a obra do governo federal é domínio
  público por lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. DECISÃO DO LUCAS PENDENTE: a regra de uso deles na tela. Até lá, a peça só
  entra com a licença conferida e gravada no `_PROCEDENCIA.json` (midia.md §1):
  - **sem licença gravada** (`licenca` vazia ou `"a_confirmar"`, que é o que a pré-v1 grava quando não mediu
    a licença na fonte), reprova (`fonte`). Não invente licença nem a deduza da origem;
  - **com a licença gravada**, **sinalize** (`fonte`), citando a licença que a procedência grava e "regra de uso
    na tela: aguarda o Lucas".
- **Mídia de banco pago que não foi baixada pelo Lucas nem registrada** (midia.md §2.3 e §2.8) reprova
  (`fonte`). Evento real específico vindo de banco pago também (midia.md §1).
  - As fontes do `buscar-midia` que midia.md não cita (Pexels, Pixabay e outras): DECISÃO DO LUCAS PENDENTE.
    Ter a chave delas na máquina não as libera.
- **Card de capítulo, título de tópico ou navegação na tela** reprova (`abordagem`; CLAUDE.md).
- **Apresentador, ou pessoa gerada por IA apresentada como real**, reprova (`abordagem`; identidade.md §5).
- **Cena sem `<html lang="en-US" data-render="4k-native">`** reprova (`espaco`): sem a marca, o render cai no
  caminho legado e a cena sai num canto do quadro. O `pt-BR` do contrato dos agentes não vale (CLAUDE.md).
- **Satélite escurecido** não reprova por si: 65 % de brilho e 70 % de saturação são da marca (identidade.md §1
  e §6). Véu, scrim ou vinheta empilhados por cima reprovam. Rótulo ou relevo ilegível: sinalize, citando o
  quadro.
  - DECISÃO DO LUCAS PENDENTE: os 65 % contra o piso de ~0,90 do ofício. Eles só foram vistos sobre Landsat.
- **Bandeira**: DECISÃO DO LUCAS PENDENTE fora da PRANCHA (o ofício a pede ao lado do nome de país; a identidade
  só a põe no ator). Até ele decidir, a falta dela fora da PRANCHA **sinaliza**, não reprova. Bandeira errada ou
  desenhada reprova sempre (`factual`, asset correto).

## 6 · A cena que é fundo da tela final

- Os 20 s finais sem voz são o fundo dos elementos da tela final do YouTube, que chegam depois, no YouTube
  Studio. Julgue a cena **como fundo** (ofício §2.3). Ela vem declarada com `data-qc-sem-heroi` e o motivo.
  Nunca reprove pela falta desses elementos.
- DECISÃO DO LUCAS PENDENTE: o que vai por baixo. Até lá, texto novo ou herói nesses 20 s **sinaliza** (os
  elementos do YouTube vão cobrir). Buraco preto reprova (identidade.md §5: 100 % coberto).
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
