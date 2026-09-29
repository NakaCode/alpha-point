<!-- Roupa do Alpha Point para o pesquisa-documentos. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-documentos.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, marca/tokens.css, canal.json, CLAUDE.md, roteiros/<proj>/…
     Onde o canal ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-documentos

> Só o que é do canal. O ofício (achar a fonte primária, confirmar a citação, recriar sem falsificar,
> grifo sincronizado, gate de tamanho) está em `.claude/agents/pesquisa-documentos.md` e não se discute
> aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera (identidade.md §0). O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo é coberto por cena (identidade.md §5). Há um relógio só,
  `out/<proj>/words.json`: é dele que saem os tempos do grifo.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Tela e busca em **inglês dos EUA** (`canal.json › idiomas.origem`). Relatório e notas, em
  português.
- **Formato de tela** (identidade.md §7): `2,700`, `$2.8 billion`, `ALMOST 3,000×`, `28.0×`,
  `22.2 ft (6.76 m)`, `MAY 1, 1994` (em caixa normal, `March 3, 2024`). ⚠️ Os exemplos do ofício estão no
  formato brasileiro (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`, `1º DE MAIO DE 1994`, "Fonte:"): **não se
  copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums, `data-qc-*`, `data-in`/`data-dur`,
  `NÃO MEDIDO`, `FALTA` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css` (CLAUDE.md). Neste canal a cena é do `editor-de-arte` (§2).
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"), e **não** o `motor.caminho` do `canal.json` (a v0.1.0). Script de `scripts/` que importa do motor
  pede `REGIE_MOTOR=<motor>` na mesma chamada; `MOTOR_SEM_ARQUIVO` ou "atualize o motor" quer dizer só que
  faltou a variável. Nunca mexa no motor nem no `canal.json` por causa disso.
- **Gate que pede `sharp` ou `playwright-core` sai NÃO MEDIDO**, com o nome: o `npm install` não foi
  autorizado pelo Lucas. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, por Chrome sem cabeça, trocando
  o User-Agent nem qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude
  central confere no navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14).
  Já aconteceu aqui: o `akleg.gov` deu 403 a um subagente, e o `elections.alaska.gov` pediu verificação
  humana (`roteiros/juneau/volateis-conferidos.md`). A cópia pública arquivada (web.archive.org) de **página
  oficial do Estado do Alasca** que recusou robô, como essas duas, **vale como fonte** do que a página dizia
  (Lucas, 27/09/2026; CLAUDE.md, "A marca"): leia-a antes, e registre a URL da cópia, a original e a data da
  captura; o crédito na tela é o do órgão (no Juneau, a Divisão de Eleições do Alasca), nunca o arquivo. Ler
  essa cópia não é contorno. O dossiê do Juneau leu as eleições e os folhetos assim em 23/09, e eles valem (a
  data de cada captura está em `url_acessada`, no `pautas/juneau/fundamento.json`). A permissão de uso de cada
  peça (midia.md §7.1) é outra coisa: a cópia não a prova, e ela se confere na origem de hoje, pelo navegador do
  app quando o site recusa robô. A cópia arquivada de outro site (federal, jornal, empresa) não foi perguntada ao
  Lucas e não se usa. O que a cópia não resolve vai ao navegador do app.
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). As leis `[PESQ-NN]` (`seed/regras/PESQ.md`)
  vieram do Top10: valem como ofício; onde falam de dono, formato ou exemplo, vale esta roupa.

## 1 · O modelo DOCUMENTO (identidade.md §5, §2)

- Recorte de tratado, mapa histórico ou manchete real, sobre `--papel` (`#ECE8DF`), com texto em
  `--tinta-escura` (`#14181F`), e o trecho que importa grifado em `--destaque` a 35 % (o `--grifo` de
  `marca/tokens.css`).
- O registro é o do mapa de briefing de uma redação internacional (identidade.md §1), sóbrio: nada de
  estética de telejornal.
- Quando o objeto em si é o assunto (a cédula, o folheto oficial, a página do boletim de apuração), ele é
  REGISTRO real tratado, não recriação (ofício §4), **se houver permissão de uso clara**; sem ela, a cena
  recria o trecho no visual do canal (§4 abaixo; midia.md §7.1).
- **O grifo.** O ofício pede cor fixa, que não muda com a paleta. No canal, o `--grifo` segue o
  `--destaque`, e o `RIG.paleta({destaque})` o arrasta junto (`marca/tokens.css`). **DECISÃO DO LUCAS
  PENDENTE: se o grifo fica fixo em `#F5A524` a 35 % quando a cena troca o `--destaque`.** Você não
  pinta: entrega o trecho e os tempos, e quem desenha declara a cor que usou.

## 2 · Sem molde de clipping no canal

- `seed/examples/documento/documento-grifado.html` veio do molde, mas é do Top10: `lang="pt-BR"` e uma
  `--tinta` escura própria, que vence a do canal (`marca/tokens.css`, bloco dos apelidos). Não o clone
  como cena.
- Entregue **dados e prova**: título exato, órgão ou veículo, data, autor, URL, os trechos a grifar com
  os tempos do `words.json`, e a página rasterizada. A cena fica com o `editor-de-arte`.
- **O nome do arquivo diz se ele vai à tela.** O `conferente-de-midia` e o portão do `research` se guiam por
  ele (CLAUDE.md, "Os especialistas"):
  - prova e referência, que não vão à tela, levam `-prova`: `<slug>-prova.png` (a captura, ofício §2.1) e
    `<slug>-prova-p<N>.jpg` (a página rasterizada sem permissão de uso, §4);
  - a página que vai à tela como registro, só com permissão clara (§4), é `<slug>-p<N>.jpg` (ofício §2.1,
    "quando o objeto importa"), e passa pelo conferente (§8).

## 3 · A tela, em inglês (identidade.md §7, §4.1)

- Atribuição: `Source: <institution>, <year>`, na faixa de crédito, em 76 px (x = 200 até antes de
  x = 1720, abaixo de y = 1880; identidade.md §4.2). Data: `March 3, 2024`; em caixa alta, `MAY 1, 1994`.
- Título e números como a fonte imprime. Na tela, o hedge da voz fica (voz.md §1).
- Fonte em outra língua: tradução natural para o inglês dos EUA. **DECISÃO DO LUCAS PENDENTE: o texto,
  em inglês, da nota de tradução** (a do ofício está em português). Até lá, original e tradução vão no
  relatório, e a nota fica para o `redator-de-tela`.
- **Tamanhos.** O canal não tem papel "manchete". Os que existem: título 360 px (teto 560, até 5
  palavras), fala citada 280 (teto 340, até 12), legenda 84, crédito 76 (identidade.md §4.1). **DECISÃO
  DO LUCAS PENDENTE: em que papel entram a manchete e o trecho citado.** A manchete não se encurta para
  caber (ofício §5): se passar do papel, diga no relatório.
- Teto de carga: 3 blocos de texto e 6 elementos por cena, alvo de 4 a 5 (`marca/tokens.css`;
  identidade.md §4.2, que diz o que é bloco). O documento conta como um bloco.

## 4 · Licença do que vai à tela

- **Documento do Estado do Alasca** (folheto eleitoral oficial, boletim de apuração escaneado, página do
  Legislativo), **jornal** (ex.: Anchorage Daily News) e **rádio** (ex.: KTOO) **não são domínio público
  automático**: a identidade.md §7 só isenta de crédito o domínio público que nomeia, e nos EUA a obra do
  governo federal é domínio público por lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça. Registre autor, URL e o que a origem diz sobre
  direitos.
- **A regra** (Lucas, 26/09/2026; midia.md §7.1): a imagem da peça só vai à tela com **permissão de uso
  clara** (domínio público comprovado, licença aberta ou autorização escrita), conferida e gravada na
  procedência. Com ela, o crédito é o que a permissão pede, no formato de identidade.md §7. Licença não se
  inventa nem se deduz da origem.
- **Sem permissão clara, a cena recria o trecho** no visual do canal (DOCUMENTO como folha de papel sobre
  `--fundo`, em Courier Prime, identidade.md §5; não um fac-símile), com o texto citado fiel e a fonte citada, `Source: <institution>,
  <year>`. Você entrega o texto exato, os trechos a grifar com os tempos e a prova; a captura fica como
  prova, fora da tela.
- Obra do governo federal dos EUA: declare o órgão autor. Só é federal o que se prova escrito por
  funcionário federal no serviço (17 U.S.C. §101); aprovar, assinar ou publicar não basta. Documento de
  autoria conjunta com o Estado conta como estadual no que não se prova federal (midia.md §7.1, "O estudo de
  2018"; pesquisado a pedido do Lucas, 26/09/2026).
- **O estudo de 2018 da estrada de Juneau** (Final SEIS e ROD, da FHWA com o Alaska DOT&PF) **conta como
  estadual**: foi preparado pelo DOT&PF e escrito sobretudo pela HDR, e o Estado reserva os direitos. Página,
  capa, figura e mapa dele só com autorização escrita do DOT&PF. O texto citado se recria (`Source: Alaska
  DOT&PF and FHWA, 2018`; a frase de decisão do ROD, `Source: Federal Highway Administration, 2018`). O
  original federal que pode ir à tela é o aviso da FHWA no Federal Register de 30/07/2018 (83 FR 36661).
- Sem crédito na tela, pela identidade, só o domínio público que ela nomeia: NASA, Landsat/USGS, Natural
  Earth, NARA (identidade.md §7).
- Logo de qualquer instituição ao lado do recorte (o veículo, o órgão do Alasca, o órgão federal, outra
  instituição), e o selo do Estado, não vão à cena: vai o nome da instituição escrito na pílula `--rotulo`,
  Inter 700 (Lucas, 26/09/2026 e, a logo federal e a de outras instituições, 27/09/2026; midia.md §7.6).
- Foto do governo do Alasca e de jornal não é documento: entra citando a fonte, pela regra do
  `pesquisa-imagens` (midia.md §7.5).

## 5 · Antes de buscar: o que o canal já leu

O canal não tem `out/<proj>/pauta-fundamento.json`. O equivalente:
- `pautas/<proj>/fundamento.json` › `fontes` (agrupadas por dimensão, com `canonical_url`, `url_acessada`
  e `arquivo_local`);
- `roteiros/<proj>/roteiro-editor.md`: a checagem de cada frase, com o trecho da fonte que a sustenta —
  é o que o seu grifo cobre;
- `roteiros/<proj>/volateis-conferidos.md`: o que foi reconferido depois da gravação, e onde;
- `midia/<proj>/fontes/`: as cópias locais. A prova sai daqui quando o site recusa robô.

Busque do zero só o que falta.

## 6 · Ferramentas nesta máquina

- `identify`, o `medir-imagem` e os portões de navegador: o estado deles está no CLAUDE.md ("Os
  especialistas" e os tropeços do apoio), e o que eles mediriam sai NÃO MEDIDO.
- PDF: o `pdftoppm` não existe aqui; o PyMuPDF importa no Python da máquina, sem teste de rasterização
  (CLAUDE.md, "Os especialistas"). Diga no relatório com que ferramenta a página saiu. A medida da imagem sai
  do `ffprobe`, e o relatório diz "medido por ffprobe".
- `scripts/_capturar-pagina.mjs` **não se roda**: manda cabeçalho de navegador (CLAUDE.md, "Os
  especialistas"; §0), e ainda pede `playwright-core`. A captura da página sai da cópia local ou do
  navegador do app, pelo Claude central.
- `scripts/_audit-til.mjs` não se aplica: a fonte do canal é a Inter, e o teste de glifos passou
  (CLAUDE.md).

## 7 · Decisões do Lucas que tocam o ofício

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md). Pedido de documento para card
  de capítulo é engano: devolva ao `montador`.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  Nada de grifo nem de clipping ali.
- **Mapa = MapTiler** (`canal.json › mapa.perfil`), com `© MapTiler © OpenStreetMap contributors` na tela
  durante todo o mapa. Mapa histórico escaneado é DOCUMENTO, não base de mapa; tile não é seu, e o gasto
  na MapTiler espera o ok do Lucas.
- **Banco pago** serve só a B-roll genérico, baixado pelo Lucas (midia.md §1, §2.3), e aqui não serve em
  caso nenhum: o documento citado é o documento real, nunca imagem de banco (ofício §9).

## 8 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-documentos.json
REGIE_MOTOR=<motor> node scripts/qc-procedencia.mjs <proj>
```

- O `qc-procedencia` e o `scripts/procedencia-reconciliar.mjs` pedem `REGIE_MOTOR`. Rascunho de trabalho
  vai em `out/<proj>/_tmp/`, não em `/tmp`.
- **A página que vai à tela passa pelo `conferente-de-midia`** (`.claude/agents/conferente-de-midia.md`, do
  canal; ofício dele, §2) antes de uma cena citá-la, em qualquer passo (no `research` ou no `art`). O ofício grava
  direto em `out/<proj>/_media/documento/`, sem rascunho, e a cena só cita a página com `aprovado` no veredito
  que casa com o sha256 dela. Os `-prova` (§2) ficam fora do conferente e nunca vão à tela. A ordem, entrega →
  conferente → cena:
  1. entregue e registre na pauta, como o ofício manda: fonte, URL e o texto da permissão (midia.md §7.1). A sua
     resposta lista os arquivos entregues, com o `-prova` separado do que vai à tela;
  2. o Claude central despacha o conferente no fluxo `midia` sobre eles. O veredito fica em
     `out/<proj>/_pesquisa/conferencia-midia.json`;
  3. num despacho novo, você retira o `reprovado` e o `trocar`. Leia o veredito no disco: o relato não vale. O
     `pendente_lucas` fica onde está, fora da cena, até o Lucas responder e o conferente regravar o veredito.
     - Mova o arquivo para `out/<proj>/_media/_caca/_retirado/documento/`, nunca o apague.
     - Reconcilie quem o cita (ofício do `pesquisa-imagens`, §3.6): a linha da pauta aponta o substituto ou
       diz `FALTA — <pedido>`.
     - Sem a página aprovada, a cena recria o trecho (§4). O texto e a prova continuam valendo.
  - O `trocar` volta com o que faltou (`trocar_por`), e a busca nova passa de novo pelo conferente. O
    `reprovado` com `reconferir` espera a conferência no navegador do app, com o Lucas vendo.
  - O `aprovado` dele não dispensa a sua confirmação da citação (ofício §3).
  - O `regie advance` do `research` só se faz sem `reprovado` nem `trocar` em arquivo que continua em
    `_media/documento/`, e sem arquivo sem veredito (CLAUDE.md, "Os especialistas").
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco) e o Lucas, quando
  for licença ou uso de documento de terceiro.
