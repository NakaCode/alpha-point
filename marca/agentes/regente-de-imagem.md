<!-- Roupa do Alpha Point para o regente-de-imagem. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/regente-de-imagem.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, canal.json, CLAUDE.md, roteiros/<proj>/… Onde o canal
     ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — regente-de-imagem

> Só o que é do canal. O ofício (quebrar a fala em sintagmas, julgar o que cada trecho exige, decidir
> registro real × desenho, reger o ritmo) está em `.claude/agents/regente-de-imagem.md` e não se discute
> aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera; a tela é sempre mapa, registro real, prancha ou dado
  (identidade.md §0). Cota de apresentador **0 %** (identidade.md §5). O master é a narração sobre tela
  **preta** 3840×2160 (`out/<proj>/_media/_master.mp4`), e 100 % do tempo é coberto por cena. Há um
  relógio só, `out/<proj>/words.json`: sem `words-final`, `words-limpo` nem `_cortes.json`, e por isso
  o fim de cada cena é o próprio `dur` do espelho.
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
- **Idioma.** Fala, tela e busca de mídia em **inglês dos EUA** (`canal.json › idiomas.origem`): o
  `exige` e todo termo de busca vão em inglês; `porque`, `regime_porque` e report, em português.
- **Formato de tela** (identidade.md §7): `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`,
  `$265 billion`. ⚠️ Os exemplos do ofício ("Pescadores peruanos", `4,3 s`, "banco central") estão em
  português e no formato brasileiro: **não se copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums (`tipo`, `forca`, `regime`),
  `data-qc-*` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML:** `<html lang="en-US" data-render="4k-native">` (CLAUDE.md).
- **Sem títulos de capítulo na tela** (Lucas, 26/09/2026; CLAUDE.md): não há vão de card a cobrir.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  O que cobre esse trecho: DECISÃO DO LUCAS PENDENTE. Até lá, a cena da cauda leva um beat único
  `continua`, `forca: livre`, com o `porque` "provisório: tela final pendente de decisão do Lucas".
- **Mapa = MapTiler** (`canal.json › mapa.perfil`, Lucas, 26/09/2026), com `© MapTiler © OpenStreetMap
  contributors` na tela durante todo o mapa (identidade.md §6). O Landsat foi só teste (CLAUDE.md).
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito e refazem o relógio (CLAUDE.md).
- **Este ofício não vai à rede.** Se um dia for: site que recusa leitura automática (403, 405, captcha,
  verificação de robô) não se contorna por meio nenhum; pare e diga no report (CLAUDE.md, "A marca").
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). O acervo do Top10 que veio com o molde
  (`knowledge/CATALOGO-MODELOS.md`, `knowledge/referencias/`, `seed/regras/`) é de outro canal: serve
  como referência de ofício, nunca como número nem lei deste canal.

## 1 · Os números do canal

| régua | valor | fonte |
|---|---|---|
| piso de um beat | **1,5 s** | identidade.md §4.3 |
| footage ou foto **parada** (sem movimento com propósito), sem trocar | ≤ **6 s** | identidade.md §4.3 |
| rajada = beats < 2,5 s | ≤ **20 %** do tempo do vídeo | identidade.md §4.3 |
| respiro = beat ≥ 6 s com movimento lento | ≥ **10 %** do tempo do vídeo | identidade.md §4.3 |
| bloco de texto no ar | ≥ **2,0 s** | identidade.md §4.3 |
| elementos simultâneos na tela | teto **6**, alvo 4 a 5 | identidade.md §4.2 |

- Use as **definições** do canal ao classificar: respiro e rajada aqui se medem pela duração do beat, como
  acima, e é assim que `proporcao_respiro` e o censo se calculam.
- DECISÃO DO LUCAS PENDENTE: plano médio, teto de footage **em movimento** e duração do plano em rajada.
  Até lá, não use número de outro canal: justifique cada rajada em prosa, como o ofício pede.
- Footage com movimento que passa de 6 s é permitido pela identidade (o teto é da imagem **parada**);
  diga no `porque` qual é o movimento com propósito.

## 2 · O `tipo` do beat, no vocabulário do canal

Os cinco modelos são os de identidade.md §5.

| a fala… | `tipo` | modelo do canal |
|---|---|---|
| situa lugar, rota, fronteira, distância | `mapa` | MAPA: território aceso sobre satélite. Do vídeo 2 em diante é a primeira escolha para essa fala, antes de B-roll genérico e de prancha (Lucas, 27/09/2026; identidade.md §5, "Mais mapa") |
| argumenta altura, profundidade, inclinação | `mapa_relevo` | MAPA com relevo — só com o ok do Lucas (§4) |
| afirma que algo aconteceu, existe, é assim; nomeia coisa que se move | `footage_real` · `foto_real` | REGISTRO |
| cita lei, cédula, tratado, folheto, manchete | `documento_real` | DOCUMENTO, em `--papel` |
| dá número, série, comparação | `grafico` | DADO, em `--papel` |
| relaciona atores, causa → efeito | `desenho`, com `PRANCHA` no `porque` | PRANCHA, em `--fundo` |
| a ideia continua e a tela já a serve | `continua` | — |

- **Mapa seguido de mapa não é troca de plano**: é a mesma viagem de câmera (identidade.md §4.4). Beat
  de mapa que só move a câmera para o próximo lugar é `mapa`, e o `porque` diz "a câmera anda".
- **Pessoa nomeada** → `foto_real` com nome completo e cargo (identidade.md §5), de acervo aberto ou
  oficial. **Evento real específico** → registro daquele evento, com data e local conferidos, nunca de
  banco pago (midia.md §1).
- **País ou região** é o polígono inteiro; o **anel** marca ponto (estreito, porto, base, fim de
  estrada), e é a assinatura do canal (identidade.md §1, §4.4). Diga no `exige` qual dos dois a frase pede.
- `tipografia`: o texto que vai à tela é do `redator-de-tela`; você só marca que o beat pede texto.

## 3 · O `exige` e a busca

- Em **inglês dos EUA**, com assunto, lugar e época, no idioma da busca: `Juneau Alaska waterfront
  1970s archival photo`, não "orla de Juneau".
- O `palavras` é o literal do `words.json`, que tem a grafia da cópia para a voz: número por extenso
  (`nineteen seventy-four`, nunca `1974`) e o alias de pronúncia que a voz leu (`Gladyshevsky`, `Mat-Sue`
  no Juneau; `roteiros/<proj>/voz/trocas.md`).
  O `exige` usa a grafia **aprovada** (`roteiros/<proj>/roteiro-narrador.md`: `Gladziszewski`, `Mat-Su`).
- Os sintagmas que não se partem, as adversativas e os números por extenso são os do inglês (CLAUDE.md):
  `but`, `yet`, `however`; `central bank`; `nineteen seventy-four` = 1974.
- O que a fonte de cada frase já achou está em `roteiros/<proj>/roteiro-editor.md` ("De onde vem cada
  frase", com URL) e em `pautas/<proj>/fundamento.json`: quando a frase cita um documento que está lá,
  o `exige` o nomeia.
- **Banco pago** (midia.md §1, §2): só para B-roll genérico, na ordem Envato Elements → Motion Array →
  Storyblocks → Shutterstock; editorial nunca, pessoa de banco nunca em política, Storyblocks nunca sobre
  ator político ou conflito (§2.1, §2.2, §3.3). O download é na conta do Lucas, pela caça no Chrome dele que ele
  aprova item por item (§2.3, §8; os termos proíbem robô, §2.5, e a exceção é dele). No `exige` de um beat genérico, diga por que ele é genérico.
- **Documento do governo do Estado do Alasca** (cédula, folheto eleitoral, boletim, estatuto impresso,
  Alaska State Library) e **imprensa** (ADN, KTOO) não estão no domínio público que a identidade.md §7
  isenta de crédito. Só vão à tela com permissão de uso clara (domínio público comprovado, licença aberta ou
  autorização escrita), conferida e gravada na procedência; sem ela, a cena recria o trecho no visual do
  canal, com o texto citado fiel e a fonte citada (Lucas, 26/09/2026; midia.md §7.1). Enquanto a permissão
  não estiver conferida, marque no `porque` "licença a conferir".
- **Foto do governo do Alasca e de jornal**, que não é retrato de pessoa citada, entra citando a fonte
  (Lucas, 26/09/2026; midia.md §7.5); sala de imprensa federal e DVIDS entram como domínio público
  (midia.md §7.3). O `exige` pode pedi-las. O **vídeo do governo do Alasca** (no Juneau, a balsa estadual
  filmada pelo próprio Estado) também, com a fonte na tela; o vídeo de jornal, de veículo ou de agência, só com
  licença conferida na origem (Lucas, 27/09/2026; midia.md §7.5).
- **Logo de qualquer instituição** (jornal, órgão do Alasca, órgão federal como a FHWA e os tribunais federais,
  empresa, liga) **e o selo do Estado**, não: o nome escrito, na pílula `--rotulo` (Lucas, 26/09/2026 e, a
  logo federal e a de outras instituições, 27/09/2026; midia.md §7.6). O `exige` não pede logo.

## 4 · Relevo e mapa custam pedidos

- `mapa_relevo` roda sobre o `terrain-rgb-v2` da MapTiler (identidade.md §6; o estado dele nesta máquina:
  CLAUDE.md, tropeços do apoio). Todo beat de mapa gasta pedidos no render.
- DECISÃO DO LUCAS PENDENTE: o gasto de pedidos MapTiler e o uso de relevo. Até lá, o beat que argumenta
  altura sai `mapa` com `forca: recomendado`, e o `porque` diz que o relevo provaria a frase: o report
  junta esses beats numa lista.
- A geometria real já pronta está em `out/<proj>/_pesquisa/pauta-geo.json` e `out/<proj>/_media/geo/`.
  O que veio do OSM (no Juneau: Taku, Willow, Haines, a estrada e Cascade Point) leva "© OpenStreetMap
  contributors" na tela da cena (CLAUDE.md, pré-v1 item 6).

## 5 · O censo e a régua de mundo real

`auditoria.censo_registro` é fração do **tempo**. Grave-o como o ofício pede: o seu `registro_real` soma
também `documento_real`.

- **A régua do canal é a da marca** (identidade.md §4.3): footage, foto e **satélite de geometria real**
  (`footage_real`, `foto_real`, e `mapa` ou `mapa_relevo` sobre satélite com geometria real), sem
  `documento_real`, em ≥ **60 %** do tempo.
  Partitura abaixo de 60 % nessa conta é defeito a declarar no report, com o porquê.
- As outras contas vão ao report como informação: o `registro_real` do ofício e a parcela do `qc-piso-real`
  (do montador), que tira mapa e documento.
- DECISÃO DO LUCAS PENDENTE, só nisto: se o documento deveria contar (mudaria a identidade) e que piso vai em
  `infra/piso-registro-real.json`.

## 6 · Insumos que o ofício cita e o canal não tem

- `_regencia-insumo.json` (com `arco_cobertura`): ninguém o produz. Meça você a cobertura do arco:
  ids do `conceito-visual.json` × ids do `espelho.json`, e diga quantos batem.
- Não há schema nem validador de `regencia.json` neste canal: diga isso no report.
- O único relógio é o `words.json`. Para conferir a janela de uma cena: `node scripts/mapa-limpo.mjs
  <proj> --tc A-B`. O `qc-espelho-cortes` só roda com `REGIE_MOTOR=<pré-v1>` (caminho no CLAUDE.md,
  "Peças da pré-v1 em uso"), e aqui sempre responde "um relógio só".
- Pendência de mídia se confere no disco (`out/<proj>/_media/`) antes de ser escrita.

## 7 · O report, além do que o contrato pede

- as parcelas de respiro e rajada pelas definições do canal (§1);
- a parcela de mundo real pela régua do canal e, como informação, as outras duas contas (§5);
- os beats que pediriam relevo (§4) e quantos beats de mapa o vídeo tem;
- os beats `imprescindivel` que esperam a caça em banco pago (aprovada pelo Lucas), uma fonte não liberada ou a
  licença de documento estadual/imprensa;
- a lista de **DECISÃO DO LUCAS PENDENTE** que tocou esta partitura, uma linha cada.
