<!-- Roupa do Alpha Point para o montador. Escrita em 26/09/2026, na instalação dos especialistas da pré-v1
     da Régie. Molde de formato: template/marca/agentes/montador.md da pré-v1 (commit 7ab9543), que é a roupa
     do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal: marca/identidade.md,
     marca/voz.md, marca/midia.md, canal.json, CLAUDE.md, roteiros/<proj>/… Onde o canal ainda não decidiu,
     a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — montador

> Só o que é do canal. O ofício (julgar, cravar o timing, preservar identidade, entregar semente) está
> em `.claude/agents/montador.md` e não se discute aqui. Marca ativa: `marca/identidade.md`,
> `marca/voz.md`, `marca/midia.md` (CLAUDE.md, "A marca").

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera; a tela é sempre mapa, registro real, prancha ou dado
  (identidade.md §0). Cota de apresentador **0 %**, sem veredito `manter` (identidade.md §5). O master é
  a narração sobre tela **preta** 3840×2160 (`out/<proj>/_media/_master.mp4`), e 100 % do tempo é
  coberto por cena. Onde o ofício fala de apresentador, rosto, take, decupagem, `words-final`,
  `words-limpo` ou `_cortes.json`: não existe aqui. Há um relógio só, `out/<proj>/words.json`.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Fala, tela e busca de mídia (`midia_termos`, `exige`, `query`) em **inglês dos EUA**
  (`canal.json › idiomas.origem`). Notas, `motivo`, `tese`, report: português.
- **Formato de tela** (identidade.md §7): `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`,
  `$265 billion`. ⚠️ Os exemplos do ofício (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`, `1º DE MAIO`, "X
  Maracanãs") estão no formato brasileiro: **não se copiam**. Escala americana: `about the size of Texas`.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums (`modo`, `midia`), `data-qc-*`,
  `construída`/`FALTA`/`ESCALAR` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML:** `<html lang="en-US" data-render="4k-native">` (CLAUDE.md).
- **Sem títulos de capítulo na tela** (Lucas, 26/09/2026; CLAUDE.md): capítulos só na descrição do YouTube.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
- **Mapa = MapTiler** (`canal.json › mapa.perfil`, Lucas, 26/09/2026), com `© MapTiler © OpenStreetMap
  contributors` na tela durante todo o mapa (identidade.md §6). O Landsat foi só teste (CLAUDE.md).
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito e refazem o relógio. Gasto na
  ElevenLabs só com o ok do Lucas (CLAUDE.md).
- **Este ofício não vai à rede.** Se um dia for: site que recusa leitura automática (403, 405, captcha,
  verificação de robô) não se contorna por meio nenhum; pare e diga no report (CLAUDE.md, "A marca").
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). Decisão de outro canal citada no ofício ou no
  acervo do Top10 (`knowledge/`, `seed/regras/`, `regua/`) não vale aqui: aquele acervo é referência
  de ofício; valor (cor, fonte, número, lei) vem de `marca/`.

## 1 · Onde as coisas moram neste canal

| o ofício pede | neste canal |
|---|---|
| a transcrição que vai ao ar | `out/<proj>/words.json`, feito por `out/<proj>/_pesquisa/ingest-local.py`, nunca pelo Scribe (CLAUDE.md, pré-v1 item 3). As palavras são as da **cópia para a voz** (`out/<proj>/roteiro.md`, a que a voz leu), com o tempo medido no som: alinhamento da ElevenLabs, pausas do áudio e o faster-whisper local (large-v3, `language="en"`) como ouvido. O que o Whisper ouviu, na grafia dele, está em `out/<proj>/transcript.txt`; as divergências entre a voz e o texto, em `out/<proj>/transcricao.json` › `alinhamento.conteudo` |
| o roteiro de origem (grafia canônica) | `roteiros/<proj>/roteiro-narrador.md` — o texto **aprovado**. ⚠️ `out/<proj>/roteiro.md` é a **cópia para a voz**: números por extenso e aliases de pronúncia (`Gladyshevsky`, `Keel`, `Kay-too`, `Mat-Sue` no Juneau). O mapa das trocas está em `roteiros/<proj>/voz/trocas.md`; a regra dos aliases, em `marca/pronuncias.md` |
| `roteiro-editor.md` | `roteiros/<proj>/roteiro-editor.md` (fora de `out/`, e sem `[IMAGEM SUGERIDA]`/`[FONTE]`). O papel da `## Cadeia referencial` é do **"Livro-razão da promessa"** (onde cada promessa é paga); a fonte de cada frase está em **"De onde vem cada frase"**, com URL por documento |
| `pauta-fundamento.json` | `pautas/<proj>/fundamento.json` (e `fundamento.md`) |
| o que o dono mandou para a tela | `roteiros/<proj>/aprovacao.md` (no Juneau: os 57 % da abertura, 1880 e 1914 saíram da voz e vão para a tela) |
| geometria real já pronta | `out/<proj>/_pesquisa/pauta-geo.json` e `out/<proj>/_media/geo/` (CLAUDE.md, pré-v1 item 6) |

## 2 · O relógio

- Antes de uma linha do espelho: `node scripts/mapa-limpo.mjs <proj> --conferir`. Sem `words.json`, ou com
  o gate reprovando, é **bloqueio**: reporte e pare. Transcrever não é seu; a transcrição do canal é
  local e quem a roda é a sessão central.
- Se o `transcricao.json` não traz `audio.sha256`, o gate só confere a duração (▲): diga isso no report.
- A cauda de 20 s só passa no gate se o `narracao.json` a marcar como segmento que **não** é fala. Se
  reprovar por causa da cauda, é bloqueio a reportar, não a contornar.
- Não há vãos de ~3 s de card na narração deste canal: a pausa entre parágrafos é de ~0,14 s
  (`canal.json › narracao.pausa_paragrafo_s` mais o silêncio da API; CLAUDE.md). Nenhum silêncio vira
  fronteira de tópico nem card.
- A `ancora` vem do `words.json`, que tem a grafia da cópia para a voz: número **por extenso**
  (`nineteen seventy-four`; `1974` não está lá e dá `ancora-fora-da-fala`) e o alias de pronúncia
  (`Gladyshevsky`, `Kay-too`, `Keel`, `Mat-Sue`, `N F L` no Juneau). Isso fica na âncora; a grafia de tela vai em
  `_grafias`, tirada do `roteiro-narrador.md` (§6).
- Tempos se fecham **à mão**. `alinhar-timestamps` só com `--dry`: no faceless ele deixa vãos e
  sobreposições (CLAUDE.md, pré-v1 item 4).

## 3 · O cardápio do canal → `modo`

Os cinco modelos são os de identidade.md §5. O enum é o de `contratos/espelho.schema.json`.

| modelo do canal | `modo` | nota |
|---|---|---|
| **MAPA** — território aceso sobre satélite; a viagem de câmera | `mapa` | `mapa3d` (relevo) só com o ok do Lucas (§5) |
| **REGISTRO** — footage ou foto real em tela cheia | `footage` · `foto` · `aereo-real` | discurso ou entrevista de fonte real é REGISTRO, com nome completo e cargo (identidade.md §5). `drone` não é `modo` (o `validar-contrato` reprova): vale só no campo `midia` |
| **PRANCHA** — atores e relações, causa → efeito, sobre `--fundo` | `desenho`, com `PRANCHA` escrito no `motivo` | DECISÃO DO LUCAS PENDENTE: o enum não tem prancha; até lá, `desenho` + `motivo` |
| **DADO** — gráfico, série do protagonista em `--destaque` | `dados` | |
| **DOCUMENTO** — tratado, lei, cédula, manchete real, grifado | `documento` | |
| fala citada de pessoa real | `citacao` | até **12 palavras** na tela (identidade.md §4.1); o verbatim sai do `roteiro-narrador.md` |

- **Mais mapa, quando a fala pede** (Lucas, 27/09/2026, do vídeo 2 em diante; identidade.md §5): fala de
  lugar, distância, rota, território, fronteira ou posição relativa vai a `mapa` antes de REGISTRO genérico e
  de PRANCHA. Fala que não é sobre espaço não vira mapa forçado, e evento nomeado continua pedindo o registro
  real. O report diz quantas cenas e quantos segundos são mapa.
- **Animação para explicar** (Lucas, 27/09/2026, do vídeo 2 em diante; identidade.md §5): o mecanismo, o
  processo ou a regra que não tem imagem real vai a `desenho`, com a semente do que animar (§9 e §10 do ofício).
  O que a fala nomeia de concreto continua pedindo registro real. A animação não conta na régua de mundo real:
  o report diz quantos segundos são animação.
- **Nunca** `titulo-topico`, `navegacao`, `apresentador*` nem `anima:false` (que aqui é tela preta).
- **Mapa seguido de mapa é UMA viagem de câmera** (`fundir`), nunca corte; corte seco só na troca de
  regime, mapa → registro, registro → prancha (identidade.md §4.4).
- O campo `modelo` (códigos `Mxx`) fica **ausente**: o catálogo em `knowledge/CATALOGO-MODELOS.md` é do
  Top10. DECISÃO DO LUCAS PENDENTE: adotar aquele catálogo ou escrever um do canal com os cinco modelos.
- Viradas de parte do dossiê (p1…p7) vão no `motivo` da primeira cena de cada parte, com o tempo: é daí
  que saem os capítulos da **descrição**. Na tela, nada.

## 4 · Cobertura e números da casa

- **100 % coberto**, inclusive os **20 s finais sem voz**. **Um segmento próprio** cobre a cauda. O que fica sob
  a tela final do YouTube, no Juneau (Lucas, 28/09/2026, 11:2x de Brasília: "A última cena, parada e escurecendo
  (Recomendado)"): o quadro final da cena anterior para e escurece aos poucos, sem chegar ao preto e sem texto
  novo. Está no espelho do Juneau, em s63 › `_tela_final`. Nos próximos vídeos, a do Juneau é a proposta, e o
  report a lista até o Lucas decidir de novo. Nunca deixe a janela sem segmento (sai preto), nem estique a última
  cena sem dizer.
- Ritmo (identidade.md §4.3): beat ≥ **1,5 s**; footage ou foto **parada** ≤ **6 s**; rajada (beats
  < 2,5 s) ≤ **20 %** do tempo; respiro (beat ≥ 6 s com movimento lento) ≥ **10 %**; texto no ar
  ≥ **2,0 s**.
- **Mundo real** ≥ **60 % do tempo**, contando footage, foto e **satélite de geometria real**, sem o
  documento (identidade.md §4.3). Esta é a régua do canal: espelho abaixo dela é defeito a declarar no
  report, com o porquê. O `qc-piso-real` mede outra coisa (tira `mapa`, `mapa3d` e `documento`) e, com
  `infra/piso-registro-real.json › piso` em `null`, diz NÃO SE APLICA: a parcela dele vai ao report como
  informação. DECISÃO DO LUCAS PENDENTE, só nisto: se o documento deveria contar (mudaria a identidade) e que
  piso vai nesse arquivo. Não edite o arquivo.
- Teto de tempo por `modo`, taxa de pedido de mídia e maior janela sem registro real: o canal não tem
  número (DECISÃO DO LUCAS PENDENTE). Meça e reporte; não reprove com número de outro canal. O
  `qc-deserto-real` traz 180 s de padrão, medido no Top10: se ele acusar, reporte a janela, sem chamar
  isso de reprovação.
- Respiro é beat longo com movimento lento; se ele também tem de ser **tela sem texto**, como o
  `qc-respiro` supõe: DECISÃO DO LUCAS PENDENTE.

## 5 · Mídia: o que se pede, e de onde vem

- `midia_termos` em **inglês dos EUA**, com assunto, lugar e época (`Juneau waterfront 1970s archival
  photo`), nunca em português.
- **Evento real específico** (votação, pessoa pública, obra datada): só de acervo aberto ou oficial, com
  data e local conferidos — NARA, Library of Congress, NASA, USGS, Smithsonian, Wikimedia Commons (midia.md
  §1, §7.3; identidade.md §6), e as fontes federais: sala de imprensa de órgão federal dos EUA e DVIDS
  (Lucas, 26/09/2026; midia.md §7.3). Nunca de banco pago. O retrato de pessoa citada segue midia.md §7.2.
- **Sem foto do ano do fato** (Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em tela"; identidade.md §6):
  - o plano continua pedindo foto, e a de outro ano do mesmo assunto entra com o aviso do ano na tela;
  - o plano só muda de regime (mapa ou desenho, num re-espelho com o mesmo id) quando não há foto nenhuma do
    assunto, ou só há foto sem data na origem;
  - vídeo de outro ano não entra.
- **B-roll genérico** (paisagem, cidade, porto, indústria, drone): dos bancos pagos, na ordem Envato
  Elements → Motion Array → Storyblocks → Shutterstock (midia.md §1), com as regras do §2: editorial nunca,
  pessoa de banco nunca em política, e Storyblocks só em cena neutra (§3.3). O download é na conta do Lucas
  (§2.3, assento único), pela caça no Chrome dele que ele aprova item por item (§8; CLAUDE.md, "Caça nos
  bancos pagos"). O pedido é a lista do que procurar: termos em inglês, cena, duração e por que é genérico.
- **Acervo gratuito, só os oficiais e as fontes federais** (Lucas, 26/09/2026; midia.md §7.3): Wikimedia
  Commons, NASA, NARA, USGS, Library of Congress, Smithsonian, sala de imprensa de órgão federal e DVIDS.
  Desde 27/09/2026, também as fontes da 4ª rodada (midia.md §7.3).
  Openverse, Met, Europeana, Internet Archive, Pexels e Pixabay ficam fora: não os peça (o `buscar-midia`
  já os desliga, por `marca/midia.json`). Item da Library
  of Congress, só pelo navegador do app, com o Lucas vendo (por quê: CLAUDE.md, tropeços do apoio).
- **Documento do governo do Estado do Alasca** (cédula, folheto eleitoral, boletim, estatuto impresso,
  Alaska State Library) e **imprensa** (ADN, KTOO) só vão à tela com permissão de uso clara (domínio
  público comprovado, licença aberta ou autorização escrita), conferida e gravada na procedência; sem ela,
  a cena recria o trecho no visual do canal, com o texto citado fiel e a fonte citada (Lucas, 26/09/2026;
  midia.md §7.1). Peça o documento e marque no `midia_necessidade` "licença a conferir" até a pesquisa
  gravar a permissão, ou dizer que não há.
- **Foto do governo do Alasca e de jornal** (inclusive de agência), que não é retrato de pessoa citada:
  pode ser pedida; entra com a fonte creditada na tela (Lucas, 26/09/2026; midia.md §7.5). Foto de agência
  espera o ok do Lucas àquela foto (Content ID); Reuters não entra (midia.md §7.4, item 2). O vídeo do
  governo do Alasca também pode ser pedido, com a fonte na tela; o de jornal, só com licença conferida
  (Lucas, 27/09/2026; midia.md §7.5).
- **Logo de qualquer instituição** (jornal, órgão do Alasca, órgão federal, empresa, liga) **e o selo do
  Estado** não se pedem: vai o nome da instituição escrito na pílula `--rotulo` (Lucas, 26/09/2026 e, a logo
  federal e a de outras instituições, 27/09/2026; midia.md §7.6).
- `needs.geo`: quando a geometria já existe, o `id` é o slug registrado no `pauta-geo.json`, e o `tipo`
  é o que cabe no enum (`estado_mundo`, `cidade`, `outro` para rio, estrada e canal). `uf_br` e
  `circuito_f1` nunca.
- Toda cena `mapa`/`mapa3d` custa pedidos MapTiler no render e leva o crédito MapTiler/OSM o tempo todo;
  o que vem do OSM (no Juneau: Taku, Willow, Haines, a estrada e Cascade Point) põe "© OpenStreetMap
  contributors" na tela da cena (CLAUDE.md, pré-v1 item 6). Planejar não gasta. O gasto de render do Juneau
  está liberado, com o relevo só em s44 (Lucas, 28/09/2026; identidade.md §6, "O gasto do Juneau, liberado").
  Nos próximos vídeos, ele é DECISÃO DO LUCAS PENDENTE, pedida antes da primeira cena de mapa renderizada.

## 6 · Paleta e grafia

- `paleta`: **um** protagonista por vídeo em `--destaque`, o segundo ator em `--contraparte`, do terceiro
  em diante `--neutro`; `--tensao` nunca é a cor de um lado; vermelho contra azul como dois lados é
  proibido (identidade.md §2). Nome de token, nunca cor escrita. Proponha o protagonista a partir da tese
  do dossiê; quem confirma é o Lucas. No Juneau, ele confirmou Juneau em `--destaque` e Willow/Wasilla em
  `--contraparte` (28/09/2026: "Sim, tudo como ele propôs (Recomendado)").
- `_grafias`: en-US pelo **AP Stylebook** vigente, nome próprio e sigla como estão no
  `roteiro-narrador.md`, nunca como o alias da voz ou a transcrição (`Gladziszewski`, `Kiehl`, `KTOO`,
  `Mat-Su`). O dossiê é escrito em português com números no formato brasileiro (`91.049 × 102.083`): na
  tela é `91,049 × 102,083`. Milhas antes de quilômetros (identidade.md §7).

## 7 · O que o espelho NÃO reserva neste canal

- Card de capítulo, card de título, card de progresso: nenhum (§0).
- `marca/finalizacao.json` **não existe**: transições, CTA e trilha saem pelo padrão desligado de
  `<motor>/src/ferramentas/finalizar.mjs`, que roda primeiro com `--sem-trilha` (CLAUDE.md, pré-v1 item 8). O roteiro não tem CTA
  falado, e não se pede um. DECISÃO DO LUCAS PENDENTE: transições, CTA e trilha com mix. A trilha, quando
  vier, entra numa faixa própria (midia.md §5).
- Clube de membros, cupom, publi, agência de notícias por contrato: o canal não tem.
- Quem despacha cada estação é a sessão central, no PC do Lucas, cena a cena (CLAUDE.md, "O que a Régie
  faz"). Não há fila automática nem executor-de-molde.

## 8 · Os comandos, neste canal

Sempre com a pasta de trabalho na raiz do canal. `<motor>` é a **pré-v1** (caminho no CLAUDE.md, "Peças
da pré-v1 em uso"), não o `canal.json › motor.caminho`.

```bash
node scripts/mapa-limpo.mjs <proj> --conferir                  # primeiro, sempre
node scripts/mapa-limpo.mjs <proj> --tc A-B                     # a fala exata de uma janela
node scripts/validar-contrato.mjs espelho out/<proj>/espelho.json
node scripts/qc-espelho-midia.mjs <proj>
node scripts/qc-fusao-espelho.mjs <proj>
node scripts/alinhar-timestamps.mjs out/<proj>/espelho.json out/<proj>/words.json --dry
REGIE_MOTOR=<pré-v1> node scripts/checar-plano.mjs out/<proj>/espelho.json
REGIE_MOTOR=<pré-v1> node scripts/qc-piso-real.mjs <proj> --laudo
REGIE_MOTOR=<pré-v1> node scripts/qc-deserto-real.mjs <proj>
REGIE_MOTOR=<pré-v1> node scripts/qc-respiro.mjs <proj>
```

- No PowerShell a variável vai na **mesma** chamada: `$env:REGIE_MOTOR='<pré-v1>'; node scripts/…`.
- Sem `REGIE_MOTOR`, esses scripts saem NÃO MEDIDO (exit 2) ou quebram com pilha, com a mensagem
  "atualize o motor". Isso é **falta de ambiente**, não reprovação: nunca mexa no motor, no
  `canal.json` nem em `git` por causa dela.
- `qc-espelho-modelo` fica sem objeto enquanto o campo `modelo` estiver ausente (§3).

## 9 · O report, além do que o contrato pede

- a parcela de mundo real pela régua do canal e, como informação, a do `qc-piso-real` (§4); as de respiro e
  rajada;
- a cena da cauda de 20 s e o que ficou pendente nela;
- o protagonista proposto para `--destaque`;
- as cenas de mapa (quantas, e quais pedem relevo), porque cada uma custa pedidos MapTiler no render;
- a lista de B-roll genérico para a caça em banco pago (o `pesquisa-imagens` a escreve; o Lucas aprova), e os pedidos que dependem de fonte ainda
  não liberada ou da licença de documento estadual/imprensa;
- a lista de **DECISÃO DO LUCAS PENDENTE** que tocou este espelho, uma linha cada.
