<!-- Roupa do Alpha Point para o redator-de-tela. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/redator-de-tela.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, marca/pronuncias.md, canal.json, CLAUDE.md,
     roteiros/<proj>/… Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz
     até lá. -->

# ROUPA ALPHA POINT — redator-de-tela

> Só o que é do canal. O ofício (uma grafia por referente, nada na tela que a fonte não sustente, a
> tela não corrige a voz) está em `.claude/agents/redator-de-tela.md` e não se discute aqui. Marca
> ativa: `marca/identidade.md` (§7 é a sua seção), `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera; a tela é sempre mapa, registro real, prancha ou dado
  (identidade.md §0, §5). O master é a narração sintética sobre tela preta 3840×2160
  (`out/<proj>/_media/_master.mp4`). Não há apresentador que improvisa nem take: a divergência possível
  entre texto e voz é a voz pular ou trocar palavra (CLAUDE.md, "Como se gera"). Há um relógio só,
  `out/<proj>/words.json`: sem `words-final`, `words-limpo` nem `_cortes.json`.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Toda a tela em **inglês dos EUA** (`canal.json › idiomas.origem`); não há tradução para
  outros idiomas (`canal.json › idiomas.localizados` vazio). Motivos, notas e report em português.
- **Formato de tela** (identidade.md §7): `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`,
  `$265 billion`. ⚠️ Os exemplos do ofício (`QUASE 3.000×`, `≈2.700×`, `QUASE 30 VEZES`, `28,0×`,
  `ETIÓPIA`, "aportuguesar") estão no formato e na língua do Brasil: **não se copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON (`na_tela`, `valor_exato`, `nao_vai_para_tela`…),
  enums (`pessoa`, `lugar`…), `data-qc-*` (CLAUDE.md, "O vídeo fala inglês"). O que vai em inglês é o
  **valor** que aparece na tela (`na_tela`, `grafia`, `o_que_e`).
- **Cena HTML:** `<html lang="en-US" data-render="4k-native">` (CLAUDE.md).
- **Sem títulos de capítulo na tela** (Lucas, 26/09/2026; CLAUDE.md): nenhum texto de card de título ou
  de capítulo. Os capítulos vão só na descrição.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  Texto ali: nenhum. No Juneau, o Lucas decidiu o fundo (28/09/2026: "A última cena, parada e escurecendo
  (Recomendado)"): o quadro final da cena anterior para e escurece aos poucos, "sem texto novo". Nos próximos vídeos,
  até ele decidir de novo, vale o mesmo.
- **O YES do carimbo** (s01 e s62 no Juneau) é texto de tela como outro qualquer: a grafia é sua. A caixa, a
  inclinação, a tinta gasta e o lugar à esquerda são da marca (Lucas, 28/09/2026: "B, carimbo de borracha à esquerda
  (Recomendado)"; identidade.md §5, "A tela final e o carimbo do Juneau"; a conferência visual é `marca/prancha-fim.html`).
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito e refazem o relógio (CLAUDE.md).
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). Decisão de outro canal citada no ofício ou no
  acervo do Top10 (`knowledge/DICIONARIO.md`, `seed/regras/`) não vale aqui.

## 1 · A regra da rede (você tem `WebFetch`)

Site que recusa leitura automática — **403, 405, captcha, verificação de robô** — não se contorna por
meio nenhum: nem `curl`, nem outro cliente, nem trocando cabeçalho. Pare, escreva no report qual URL
recusou e o que ficou sem conferir, e a sessão central confere no navegador do app com o Lucas vendo
(CLAUDE.md, "A marca"; APRENDIZADOS.md item 14: um subagente levou 403 do Legislativo e contornou por
`curl`).

- Já se sabe que recusam robô: **akleg.gov** (Legislativo do Alasca) e **elections.alaska.gov** (Divisão de
  Eleições; HTTP 405 e verificação humana: `roteiros/juneau/roteiro-editor.md` › "Voláteis";
  `roteiros/juneau/volateis-conferidos.md`). Comece pela cópia local: o trecho que o dossiê já registrou
  em "De onde vem cada frase".
- A cópia pública arquivada (web.archive.org) de **página oficial do Estado do Alasca** que recusou robô, como
  essas duas, **vale como fonte** do que a página dizia (Lucas, 27/09/2026; CLAUDE.md, "A marca"), com a data
  da captura registrada. O crédito na tela é o do órgão (no Juneau, a Divisão de Eleições do Alasca), nunca o
  arquivo. A cópia arquivada de outro site não foi perguntada ao Lucas e não se usa. O que a cópia não resolve
  vai ao navegador do app.

## 2 · De onde vem cada grafia, neste canal

| o ofício pede | neste canal |
|---|---|
| a fala, que é a lei (SE aparece) | `out/<proj>/words.json`: as palavras da cópia que a voz leu (`out/<proj>/roteiro.md`), com o tempo medido no som (`out/<proj>/_pesquisa/ingest-local.py`; o faster-whisper local é o ouvido). O que o Whisper ouviu, na grafia dele, está em `out/<proj>/transcript.txt` |
| o roteiro (COMO se escreve) | `roteiros/<proj>/roteiro-narrador.md`, o texto **aprovado**, com algarismos e grafia certa |
| a cópia que a voz leu | `out/<proj>/roteiro.md`: números por extenso e **aliases de pronúncia**. O mapa das trocas é `roteiros/<proj>/voz/trocas.md` ("nenhuma palavra falada mudou; muda só a grafia") |
| a fonte de cada frase | `roteiros/<proj>/roteiro-editor.md` › "De onde vem cada frase" (documento, data e URL) e "Lista de auditoria" |
| `DECISOES-EDITOR-CHEFE.md` | `roteiros/<proj>/aprovacao.md` (o que o Lucas mandou para a tela) e `roteiro-editor.md` › "Decisões editoriais" |
| `pauta-fundamento` | `pautas/<proj>/fundamento.json` |
| `_nomes-proprios.json` | não existe; não o crie para corrigir a fala (§6) |

- **Alias nunca é grafia de tela.** `marca/pronuncias.md` explica: alias é a grafia que pode ir na cópia
  para a voz. No Juneau, a voz leu `Gladyshevsky`, `Keel`, `Kay-too` e `Mat-Sue`; a tela escreve
  `Gladziszewski`, `Kiehl`, `KTOO` e `Mat-Su`. Em `variantes_ouvidas` entra a grafia que está no
  `words.json`, que é a da cópia para a voz (o próprio alias; número por extenso, nunca em algarismo); o
  que não está lá não entra.
- **O dossiê é escrito em português, com números no formato brasileiro.** No Juneau, "na tela,
  91.049 × 102.083" (`roteiro-editor.md` › "Decisões editoriais") vira `91,049 × 102,083`. Converta
  sempre; nunca copie o número do dossiê como está.

## 3 · A grafia de tela (identidade.md §7; voz.md)

- **AP Stylebook vigente** para nome de lugar, data, número e abreviação; "aportuguesar" não existe aqui.
- Milhar com vírgula (`2,700`), decimal com ponto (`28.0×`), dinheiro em US$ (`$265 billion`). Valor em
  outra moeda se converte pela cotação da data da fonte, nunca trocando só o símbolo.
- **Imperial primeiro**: milhas, milhas quadradas, °F; o métrico só entre parênteses quando a fonte é
  métrica (`22.2 ft (6.76 m)`).
- **Datas absolutas** (`March 3, 2024`); nunca "last week", "recently", "this week" (identidade.md §7;
  voz.md §2).
- **O hedge da voz fica no rótulo**: a voz diz `almost 3 million people`, a tela pode ser exata mas mantém
  o hedge (`ALMOST 3,000×`) (voz.md §1; CLAUDE.md). Quando o exato e o falado divergem, vale o
  `por_que_diverge` do contrato.
- **Número tem dono**: toda cifra na tela tem instituição e ano, na voz ou no crédito (voz.md §2).
- Escala americana quando couber: `about the size of Texas` (identidade.md §7).
- **Tamanho de texto** (identidade.md §4.1): herói até **5** palavras, fala citada até **12**, rótulo
  (inclui nome de lugar e o nome do card de pessoa) até **3**; o cargo do card é legenda, sem teto de
  palavras (§4). Tamanho e posição são do
  `editor-de-arte`; a contagem de palavras é sua.

## 4 · O que cada tipo de texto leva

- **Nome de lugar:** país e região em **CAIXA ALTA**; cidade, rio e estreito em caixa normal
  (identidade.md §3). Nome de lugar é rótulo, nunca herói (identidade.md §4.1).
- **Rótulo de lugar sobre mídia real** (REGISTRO: `footage`, `foto`, `aereo-real`): não nomeia lugar mais
  específico que o `lugar_na_origem` dos vereditos `aprovado` da cena em
  `out/<proj>/_pesquisa/conferencia-midia.json` (o `conferente-de-midia`, ofício §5.1; midia.md §2.7). A origem
  diz "Southeast Alaska": o rótulo não diz `Juneau`. Com `lugar_na_origem: null`, ou sem veredito, o rótulo de
  lugar sobre aquela mídia vai ao report, não à tela. O Claude central leva esse report ao `montador`, que
  decide trocar a mídia (o `trocar_por` ao `pesquisa-imagens`, com conferência nova) ou manter o REGISTRO sem
  rótulo de lugar, o que se declara na cena e no laudo do `qc-visual` (midia.md §2.7).
- **Card de pessoa:** nome completo e cargo (identidade.md §5), com `data_do_cargo`. Político pelo cargo,
  sem rótulo partidário (`roteiro-editor.md` › "Decisões editoriais", no Juneau). **A forma** (Lucas,
  26/09/2026; identidade.md §5): o `nome` vai no rótulo, até 3 palavras, e o cargo numa linha menor logo
  abaixo, como legenda (84 px, Inter 500). Exemplo aprovado: `MARIA GLADZISZEWSKI` em cima e
  `Assembly member, City of Juneau` embaixo. O contrato continua pedindo o cargo
  (`contratos/textos-tela.schema.json` › `cards_pessoa` › `o_que_e`): preencha `nome` e `o_que_e` pelo
  contrato. Nome que passe de 3 palavras não se encurta por conta própria: vai ao report.
- **Fronteira disputada:** rótulo `DISPUTED`, e nunca a reivindicação de um lado (identidade.md §6).
- **Toda instituição** (jornal, órgão do Alasca, o Estado, órgão federal como a FHWA, os tribunais federais e
  o Federal Register, empresa, liga) aparece pelo nome escrito, na pílula `--rotulo`: logo e selo não vão à
  cena (Lucas, 26/09/2026 e, a logo federal e a de outras instituições, 27/09/2026; midia.md §7.6). O texto do
  nome é seu, com o limite de palavras do rótulo (§3); nome maior que isso vai ao report.
- **Palavra que escolhe lado** (`regime` para um governo e `government` para outro): só entre aspas e
  atribuída (voz.md §2). Nada de `shocking`, `crazy`, `World War 3` na tela (voz.md §2).
- **Glossário institucional:** o canal se chama `Alpha Point` (`canal.json › titulo`) e não tem produto,
  clube nem cupom.

## 5 · Créditos na tela

O crédito de cada mídia é desenhado pelo `editor-de-arte`, pela licença que a pesquisa gravou; a forma
do texto é a da casa, e ela tem de casar com o seu glossário.

- **Fonte de dado:** `Source: <institution>, <year>`. **Mídia:** `<author> / <archive> · <license>`
  (identidade.md §7).
- **Domínio público** (NASA, Landsat/USGS, Natural Earth, NARA): **sem crédito na tela** (identidade.md §7).
- **Mapa:** `© MapTiler © OpenStreetMap contributors` na tela durante todo o mapa, e a linha da descrição
  de identidade.md §6. O que vem do OSM (no Juneau: Taku, Willow, Haines, a estrada, Cascade Point) põe
  "© OpenStreetMap contributors" na tela da cena e a URL openstreetmap.org/copyright na descrição
  (CLAUDE.md, pré-v1 item 6). Base do vídeo: MapTiler (`canal.json › mapa.perfil`); o Landsat foi só teste.
- **Copernicus Sentinel**, se um dia entrar: `Contains modified Copernicus Sentinel data <year>`
  (identidade.md §6).
- **Banco pago:** sem crédito na tela, **exceto Shutterstock** — a linha `Image(s) and/or video used under
  license from Shutterstock.com` na última cena e na descrição (identidade.md §7; midia.md §3.4). Banco
  pago só entra como B-roll genérico baixado pelo Lucas (midia.md §1, §2.3).
- **Documento do governo do Estado do Alasca** (cédula, folheto eleitoral, boletim, estatuto impresso,
  Alaska State Library) e **imprensa** (ADN, KTOO) não estão no domínio público que a identidade.md §7
  isenta de crédito, e nos EUA a obra do governo federal é domínio público por lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça.
  **Regra** (Lucas, 26/09/2026; midia.md §7.1): a peça só vai à tela com permissão de uso clara (domínio
  público comprovado, licença aberta ou autorização escrita), conferida e gravada na procedência; com ela,
  o crédito é o que a permissão pede (identidade.md §7). Sem ela, a peça vai em `nao_vai_para_tela`, e a
  cena recria o trecho no visual do canal, com o texto citado fiel e `Source: <institution>, <year>`.
- **Foto do governo do Alasca e de jornal** (inclusive de agência): crédito na tela sempre, a fonte como a
  origem a credita, `<author> / <outlet>`, ou só o veículo ou o órgão; ex.: `Jane Doe / Anchorage Daily
  News` (Lucas, 26/09/2026; midia.md §7.5).
- **Vídeo do governo do Alasca** (no Juneau, a balsa estadual filmada pelo próprio Estado): o mesmo crédito da
  foto do Estado, na tela sempre, a fonte como a origem a credita, ou só o órgão (Lucas, 27/09/2026; midia.md
  §7.5). Vídeo de jornal, de veículo ou de agência só entra com licença conferida, e aí o crédito é o que a
  licença pede.
- **Sala de imprensa federal e DVIDS**: domínio público federal, sem crédito na tela (midia.md §7.3).
- **Retrato oficial** de pessoa citada, em uso editorial: sem crédito na tela (midia.md §7.2).
- **O aviso do ano da foto** não é crédito, mas a forma é sua (Lucas, 27/09/2026; identidade.md §6 e §7).
  - Ele vai toda vez que o veredito `aprovado` que casa com a foto, em
    `out/<proj>/_pesquisa/conferencia-midia.json`, trouxer `aviso_de_ano: true`.
  - O texto: `Photo from 1998`, com o ano do `data_na_origem` desse veredito. A aproximação vai como a origem a
    dá, na forma do AP Stylebook (`Photo from the 1990s`), e nunca vai um ano que a origem não diz.
  - Com `data_na_origem: null`, a foto não devia ter sido aprovada: vai ao report.
  - O contrato `textos-tela` não tem campo para o aviso. A lista dos avisos do vídeo (cena, arquivo, texto) vai
    no seu report.
- O crédito mora na faixa y > 1880, à esquerda, e nunca encolhe: quebra em duas linhas (identidade.md §4.2).

## 6 · Erratas e conserto da fala

- O laudo de fatos deste canal está em `roteiros/<proj>/qc-roteiro/fatos.laudo.md`, e o veredito final de
  cada item, na "Lista de auditoria" de `roteiros/<proj>/roteiro-editor.md` (a da última rodada; o laudo
  também resume rodadas anteriores, que não valem mais). Leia os dois direto: o `erratas-gravadas` não os
  acha aqui (CLAUDE.md, "Os especialistas", tropeços), e a saída dele é **NÃO MEDIDO**.
- **Errata**, neste canal, é o item cujo veredito final é DIVERGE (inclusive "leve"), REFUTADA ou erro de
  aritmética: a mesma régua do `scripts/lib/erratas-gravadas.mjs` (`classificarVeredito`). Cada uma vai para
  `nao_vai_para_tela`, com a frase em `o_que`, o veredito e a fonte em `motivo` e o id do item do laudo em
  `_errata` (no formato do laudo: `f-NNN` ou `ANN`). Não há id `E<n>`: ele só nasce quando o
  `erratas-gravadas` roda, e o "E8" do laudo do Juneau é o nome de uma troca de locução, não uma errata.
- `NÃO ACHEI` não é errata, é sustentação frágil: a tela não repete a frase como afirmação, e o report a
  lista.
- No Juneau, o placar final é 131 CONFIRMADA e 1 CONFIRMADA (para a tela): nenhuma errata.
- **Nunca** corrija o `words.json`, nem pelo `decupagem/corrigir-nomes.mjs`, que aqui não roda (a mesma lista
  de tropeços): o relógio é um só, e a grafia certa vive no glossário.
- A tela não corrige a voz. Se a fala ficou errada, consertar é refazer o parágrafo na ElevenLabs, que é
  **decisão e gasto do Lucas** (CLAUDE.md): sinalize no report com o parágrafo e a frase.

## 7 · Os comandos, neste canal

```bash
node scripts/validar-contrato.mjs textos-tela out/<proj>/textos-tela.json --estrito
grep -n "<variante>" out/<proj>/words.json          # toda variante_ouvida existe mesmo na fala
```

- `scripts/shot.mjs` pede `playwright-core`, e o `npm install` no canal ainda não foi autorizado
  (DECISÃO DO LUCAS PENDENTE): leitura de quadro pelo `shot` = **NÃO MEDIDO**. Para olhar o texto de uma
  cena já desenhada, a sessão central tira o quadro pelo `<motor>/src/ferramentas/quadro.mjs` ou pelo MP4
  do render com o ffmpeg (CLAUDE.md, pré-v1 item 7; `<motor>` é a pré-v1). Cena de **mapa** não se
  captura sem o ok de gasto MapTiler do Lucas: cada quadro pede tiles.
- Não há gate de textos de tela neste canal além do `validar-contrato`: as conferências à mão do
  contrato são suas.

## 8 · O report, além do que o contrato pede

- toda URL que recusou robô e o que ficou sem conferir por isso;
- as peças de documento estadual ou de imprensa sem permissão clara, que a cena recria (§5), e os nomes de
  card de pessoa com mais de 3 palavras (§4);
- as divergências entre a voz e o texto que tocam a tela, com o parágrafo. Elas **não** aparecem no
  `words.json` (ele tem o texto da cópia para a voz, por construção): estão em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo` (cada bloco trocado, palavra pulada ou a mais, com
  a prova e o aceite) e em `out/<proj>/transcript.txt` (o que o Whisper ouviu);
- a lista de **DECISÃO DO LUCAS PENDENTE** que tocou este texto, uma linha cada.
