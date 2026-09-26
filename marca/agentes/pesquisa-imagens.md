<!-- Roupa do Alpha Point para o pesquisa-imagens. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/pesquisa-imagens.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/midia.md, marca/voz.md, marca/tokens.css, canal.json, CLAUDE.md. Onde o canal
     ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — pesquisa-imagens

> Só o que é do canal. O ofício (a busca como produto, o leque de buscas, a validação por visão, evento
> nomeado = registro real, o gate de codec) está em `.claude/agents/pesquisa-imagens.md` e não se discute
> aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`. Quando o assunto é de onde
> vem a imagem e o que a licença deixa, manda `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera (identidade.md §0). O master é a narração sobre tela preta
  3840×2160, e 100 % do tempo é coberto por cena (identidade.md §5). Há um relógio só,
  `out/<proj>/words.json`.
- **Idioma.** Tela e **busca de mídia em inglês dos EUA** (`canal.json › idiomas.origem`). Relatório e
  notas, em português.
- **Formato de tela** (identidade.md §7): `2,700`, `$2.8 billion`, `ALMOST 3,000×`, `28.0×`,
  `22.2 ft (6.76 m)`, `MAY 1, 1994` (em caixa normal, `March 3, 2024`). ⚠️ Os exemplos do ofício estão no
  formato brasileiro (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`, `1º DE MAIO DE 1994`): **não se copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON (`credito_na_tela`, `licenca`,
  `validado_por_visao`…), enums, `data-qc-*`, `NÃO MEDIDO`, `FALTA` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML**, se alguma entrega sua virar uma: `<html lang="en-US" data-render="4k-native">`, ligando
  `marca/tokens.css` (CLAUDE.md). A cena é do `editor-de-arte`; você não mexe no HTML.
- **`<motor>` nesta roupa é a pré-v1 da Régie**, clonada só para leitura (CLAUDE.md, "Peças da pré-v1 em
  uso"). **Não** é o `motor.caminho` do `canal.json`, que aponta a v0.1.0, sem `src/ferramentas/`.
  Ferramenta dela: `node <motor>/src/ferramentas/<x>.mjs`, com a pasta atual na raiz do canal.
- **`scripts/`, `contratos/`, `knowledge/` e `seed/`** vieram do molde da pré-v1, sem edição. Script que
  importa do motor pede a variável `REGIE_MOTOR` apontando para a pré-v1, na mesma chamada
  (Git Bash: `REGIE_MOTOR=<motor> node scripts/<x>.mjs …`; PowerShell: `$env:REGIE_MOTOR='<motor>';
  node scripts/<x>.mjs …`). Sem ela, ele diz `MOTOR_SEM_ARQUIVO` e "atualize o motor": isso quer dizer só
  que faltou a variável. Nunca mexa no motor nem no `canal.json` por causa dessa mensagem.
- **Gate que pede `sharp` ou `playwright-core` sai NÃO MEDIDO**, com o nome: o `npm install` não foi
  autorizado pelo Lucas. Gate que não está no disco, também. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, trocando o User-Agent nem
  qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central confere no
  navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). A cópia arquivada
  (web.archive.org e afins) de um site que recusou robô também não se usa: DECISÃO DO LUCAS PENDENTE se vale
  como cópia ou conta como contorno (CLAUDE.md, "A marca"). Até lá, o item fica NÃO CONFERIDO.
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). As leis `[PESQ-NN]` que o agente cita
  (`seed/regras/PESQ.md`) e os guias `knowledge/MIDIA-REAL.md` e `knowledge/FONTES-MIDIA.md` vieram do
  Top10: valem como ofício. Onde falam de dono, conta, banco, norte editorial, formato ou exemplo, vale
  esta roupa.

## 1 · O que a tela é, e o que isso pede da mídia

- Os modelos de cena são cinco (identidade.md §5): MAPA, **REGISTRO**, PRANCHA, DADO e DOCUMENTO. O seu é
  o REGISTRO: footage ou foto real em tela cheia, com rótulo de lugar e crédito.
- **Régua de mundo real: ≥ 60 %** do tempo em registro real (footage, foto, satélite de geometria real;
  identidade.md §4.3). O canal herda das referências o registro real em volume: drone, arquivo, foto de
  agência (identidade.md §1).
- O norte editorial do canal é **o mapa de briefing de uma redação internacional**, e o vídeo viaja por
  dentro dele: do mapa à foto do porto, do porto de volta ao mapa (identidade.md §1). O norte e os
  "pilares" de `knowledge/MIDIA-REAL.md` são do Top10.
- Footage ou foto **parado** fica no máximo **6 s**; foto leva Ken Burns de 1,00 a 1,12 em 6 s, linear
  (identidade.md §4.3, §4.4). Cena longa pede várias mídias.
- No quadro, o assunto não cai no **canto inferior direito de 400 × 400 px** (marca-d'água do YouTube)
  nem na faixa abaixo de y = 1880, que é do crédito (identidade.md §4.2).

## 2 · De onde vem cada imagem (midia.md §1 e §2; identidade.md §6)

| A cena pede | De onde vem |
|---|---|
| **evento real específico, pessoa pública, registro histórico** | só acervo aberto ou oficial, com data e local conferidos na origem: NARA, NASA, USGS, Wikimedia Commons (licença conferida arquivo a arquivo), sala de imprensa oficial, Library of Congress (só pelo navegador, §3). **Nunca banco pago.** Imagem "ilustrativa" de outro evento ou de outro ano não entra |
| **B-roll genérico**: paisagem, cidade, porto, indústria, balsa, drone | bancos pagos, nesta ordem: Envato Elements → Motion Array → Storyblocks → Shutterstock. **Quem baixa é só o Lucas**; você entrega a lista (§4) |
| **mapa, satélite** | não é seu: as bases de identidade.md §6, com o `mapista` |

Vale sempre (midia.md §2):
- "Editorial use only" nunca entra.
- Nada gerado por IA entra como registro real.
- O clipe é do lugar que o rótulo diz: se a tela diz `Lynn Canal`, a origem do arquivo diz Lynn Canal.
- Pessoa de banco só entra como paisagem humana (feira, porto, rua), nunca como rosto de um lado, nem em
  cena de política, conflito ou assunto sensível.
- Storyblocks só em B-roll neutro.
- Baixar para a cena, não para estocar.

## 3 · O acervo aberto: a porta que é sua

```
node <motor>/src/ferramentas/buscar-midia.mjs <proj> buscar "<1-3 words in English>" --cena=<id> --fontes=commons,nasa,nara
node <motor>/src/ferramentas/buscar-midia.mjs <proj> baixar --cena=<id> --indice=<n>
node <motor>/src/ferramentas/buscar-midia.mjs <proj> entregar --cena=<id> --arquivo=<rascunho> --nome=<descriptive-name>
```

- **Passe sempre `--fontes=commons,nasa,nara`**, as fontes da doutrina do canal (identidade.md §6). O que o
  `buscar-midia` faz sem `marca/midia.json`, e por que a lista vai explícita: CLAUDE.md, tropeços do apoio.
  Vídeo se pede a Commons e NASA. **DECISÃO DO LUCAS PENDENTE: quais fontes ficam ligadas** (um
  `marca/midia.json` do canal, com `fontes_desligadas`) **e se Pexels e Pixabay entram.**
- **USGS** não tem adaptador na ferramenta: busque no site do USGS, com a regra de robô do §0, e registre
  a origem com a mesma prova que o `entregar` grava (URL, licença, sha256).
- **Library of Congress:** não se consulta por script (por quê: CLAUDE.md, tropeços do apoio); peça ao
  Claude central a conferência no navegador do app.
- O User-Agent das buscas leva o `contato` do `canal.json`. Não troque.
- Em registro histórico, o `abaixo_do_minimo` do relato do `buscar-midia` vai para o relatório (§6): são os
  candidatos que ficaram fora pela largura.
- Commons por busca ou por categoria: `scripts/stock/_commons.mjs`, `scripts/stock/_commons-cat.mjs` e
  `scripts/stock/_commons-baixar.mjs` (pedem `REGIE_MOTOR`). O `_commons-baixar` não trava licença: confira
  item por item (CLAUDE.md, "Os especialistas").
- **Não se rodam `scripts/stock/_phil.mjs` nem `scripts/stock/_contato.mjs`**: os dois mandam cabeçalho
  de navegador (`Mozilla/5.0…`) para o site aceitar, e isso é trocar cabeçalho para passar (§0; CLAUDE.md,
  "Os especialistas"). Para olhar candidatos lado a lado, use o que já está no disco:
  `scripts/stock/_grade-fotos.mjs` (fotos) e `scripts/stock/_frames-de-clipe.mjs` (quadros de clipe), os
  dois com `REGIE_MOTOR`.

## 4 · Banco pago: você entrega a lista, o Lucas baixa

B-roll genérico vem dos bancos pagos; evento real específico, nunca (midia.md §1).
- **Quem baixa é o Lucas, à mão, na conta dele**: as quatro licenças são de assento único (midia.md §2.3).
  Robô e script são proibidos pelos termos dos quatro (midia.md §2.5), e a caça automatizada em banco pago
  está fora do canal (CLAUDE.md, "Fora, por ora"). Você não baixa de banco nem abre o site dele.
- A sua entrega é a lista, em `out/<proj>/_pendencias-banco-pago.md`: por cena, 3 ou 4 buscas em inglês, a
  duração, por que é genérico, o que **tem de aparecer**, o que se **recusa** (midia.md §2), e o banco na
  ordem Envato → Motion Array → Storyblocks → Shutterstock. As outras cenas seguem.
- **DECISÃO DO LUCAS PENDENTE: qual é o plano do Shutterstock dele (cota ou Unlimited).** O midia.md §1 o
  dá como plano com cota; o §3.4 mostra o que muda no Unlimited (um uso por download, nada de estocar).
- Não se rodam: `scripts/stock/api-oficial.mjs`, `scripts/stock/registrar-download.mjs`,
  `scripts/stock/chrome-daemon.mjs`, `scripts/stock/setup-login.mjs` e `scripts/stock/sessao-conferir.mjs`.
  São a caça por Chrome ou API em banco pago.
- Tetos, para a lista do Lucas: Motion Array, 150 downloads por dia (midia.md §3.2); Shutterstock
  conforme o plano (midia.md §3.4). Cada download dele é registrado com banco, ID, URL, data, vídeo, prova
  de licença e hash (midia.md §2.8).

## 5 · Licença: o que não é domínio público automático

- **Documento e foto do Estado do Alasca** (inclusive o acervo digital da Alaska State Library),
  **jornal** (ex.: Anchorage Daily News) e **rádio** (ex.: KTOO) **não são domínio público automático**.
  Registre autor, URL e o que a origem diz sobre direitos. Sem licença clara, o item não entra na pasta
  de mídia da cena: vai ao relatório como candidato. **DECISÃO DO LUCAS PENDENTE: se entram, com que
  crédito e sob que justificativa.**
- Obra do governo federal dos EUA (NARA, NASA, USGS) é domínio público **nos Estados Unidos**, e o
  registro diz assim. Material "courtesy" de terceiro dentro de acervo federal não é: confira.
- Commons: licença arquivo a arquivo (identidade.md §6). Licença "desconhecida" não entra.

## 6 · Formato, resolução, taxa

- Palco **3840×2160**, paisagem (identidade.md §4; `marca/tokens.css`). O master sai em 3840×2160 a
  **30 fps** (CLAUDE.md, peça 2 da pré-v1).
- B-roll genérico abaixo de 3840×2160 se rejeita (ofício §8).
- **Registro histórico** quase sempre é SD ou foto pequena. **DECISÃO DO LUCAS PENDENTE: a resolução
  mínima do arquivo histórico, se ele entra em tela cheia no REGISTRO, e se há upscale.** Até lá: não o
  rejeite só pela resolução e não o amplie (upscale: CLAUDE.md, tropeços do apoio). Entregue com a medida
  no relatório. O enquadramento é do `diretor-de-arte`, com o Lucas. Candidato abaixo da largura mínima do
  `buscar-midia` (§3) fica listado com link, medida e licença, sem entrega na cena.
- **Medir:** largura e altura de foto e de vídeo se leem com `ffprobe`, e o relatório diz "medido por
  ffprobe" (`identify` e `medir-imagem`: CLAUDE.md, "Os especialistas").
- Clipe fora de 30 fps: registre a taxa. `scripts/normalizar-footage.mjs <proj> --dry` (pede
  `REGIE_MOTOR`) mostra o que faria. A exigência nasceu no render do Top10 e não foi medida contra o
  `renderizar.mjs` da pré-v1: diga o resultado, não conclua.

## 7 · O crédito que você escreve (identidade.md §7, §4.1, §4.2)

- `credito_na_tela` em inglês, no formato `<author> / <archive> · <license>`. Ex.:
  `Jane Doe / Wikimedia Commons · CC BY-SA 4.0`.
- **Domínio público** (NASA, Landsat/USGS, Natural Earth, NARA…) vai **sem crédito na tela**. Escreva isso
  no registro, com a licença, para ninguém deduzir um crédito depois. O registro na pauta continua
  obrigatório.
- Banco pago não leva crédito na tela, exceto Shutterstock: a linha `Image(s) and/or video used under
  license from Shutterstock.com` na faixa de crédito da última cena e na descrição (midia.md §3.4).
- O crédito entra em 76 px, de x = 200 até antes de x = 1720, e quebra em duas linhas sem encolher.

## 8 · Antes de buscar: o que o canal já leu

O canal não tem `out/<proj>/pauta-fundamento.json`. O equivalente:
- `pautas/<proj>/fundamento.json` › `fontes` (agrupadas por dimensão, com `canonical_url`, `url_acessada`
  e `arquivo_local`), `datas` e `lacunas`;
- `roteiros/<proj>/roteiro-editor.md`: de onde vem cada frase;
- `midia/<proj>/fontes/`: as cópias locais (o bruto não sai desta máquina);
- `out/<proj>/_media/` e `out/<proj>/_pesquisa/`: mídia já baixada é ativo; reuse antes de buscar.

## 9 · Decisões do Lucas que mudam a sua lista

- **Sem título de capítulo na tela**; capítulo só na descrição (CLAUDE.md). Pedido de mídia para card de
  capítulo é engano: devolva ao `montador`.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
  O que vai ali é do `montador`; sem pedido no espelho, não busque mídia para eles.
- **Mapa = MapTiler** (`canal.json › mapa.perfil`): nunca peça tile. O plano cobra por pedido, e o gasto
  espera o ok do Lucas (identidade.md §6). A cena de mapa leva `© MapTiler © OpenStreetMap contributors`
  na tela o tempo todo; isso é do `mapista`. O Landsat foi só teste (CLAUDE.md).

## 10 · Os portões, e a quem devolver

```
node scripts/validar-contrato.mjs pauta-pesquisa out/<proj>/_pesquisa/pauta-imagens.json
node scripts/qc-midia-real.mjs out/<proj>
node scripts/qc-pauta-integrada.mjs <proj>
REGIE_MOTOR=<motor> node scripts/qc-procedencia.mjs <proj>
```

- Os três primeiros rodam só com Node; o `qc-midia-real` precisa do `espelho.json`. O `qc-procedencia` e
  o `scripts/procedencia-reconciliar.mjs` pedem `REGIE_MOTOR`. O `_brief-arte.mjs` (ofício §3.7) não
  existe: NÃO MEDIDO.
- Em lote, a pauta é `pauta-imagens-<lote>.json`, para um lote não apagar o outro.
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco) e o Lucas, quando
  for licença, gasto ou banco pago.
