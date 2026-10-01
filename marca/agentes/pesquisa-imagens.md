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
- **O `words.json` tem a grafia da cópia para a voz**, não a do roteiro: aliases de pronúncia e números por
  extenso (no Juneau, `Kay-too` = KTOO, `Keel` = Kiehl, `Mat-Sue` = Mat-Su, `N F L` = NFL, `Gladyshevsky` =
  Gladziszewski, `nineteen seventy-four` = 1974, `nine hundred sixty-six million dollars` = $966 million). A
  lista de cada vídeo é `roteiros/<proj>/voz/trocas.md`. Entidade, grafia de tela, número de tela e termo de
  busca saem de `roteiros/<proj>/roteiro-narrador.md`; do `words.json` sai o tempo, e uma âncora se procura
  nele na grafia da voz (`KTOO` não está lá; `Kay-too`, sim). O que a voz disse diferente do texto está em
  `out/<proj>/transcricao.json` › `alinhamento.conteudo`. Como ele se faz: CLAUDE.md, "Peças da pré-v1 em
  uso", item 3.
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
- **Gate que pede `sharp` ou `playwright-core` roda desde 01/10/2026**: o Lucas autorizou o npm (CLAUDE.md, "Os
  portões medem"), com `REGIE_MOTOR` na mesma chamada. Gate que sai exit 2 com o alvo certo é NÃO MEDIDO, pelo nome. Gate que não está no disco, também. Não simule gate.
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito da ElevenLabs e refazem o relógio
  (CLAUDE.md).
- **Site que recusa leitura automática** (403, 405, captcha, verificação de robô, página "Just a
  moment…"): pare nele. Não tente de novo por `curl`, por outro programa, trocando o User-Agent nem
  qualquer outro cabeçalho. Diga no relatório a URL e o que ela respondeu; o Claude central confere no
  navegador do app, com o Lucas vendo (CLAUDE.md, "A marca"; APRENDIZADOS.md, item 14). Se o site é
  **página oficial do Estado do Alasca**, a cópia pública arquivada (web.archive.org) dela **vale como fonte**
  do que a página dizia (Lucas, 27/09/2026; CLAUDE.md, "A marca"): data, local, autor e crédito. Registre a URL
  da cópia, a original e a data da captura; o crédito na tela é o do órgão, nunca o arquivo. Ler essa cópia não
  é contorno. Ela não prova licença, permissão, "courtesy" nem o que a origem diz sobre uso: isso se lê na
  origem de hoje. A cópia arquivada de outro site (a Library of Congress, jornal, empresa) não foi perguntada ao
  Lucas e não se usa. O que a cópia não resolve vai ao navegador do app.
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
| **evento real específico, pessoa pública, registro histórico** | só acervo aberto ou oficial, com data e local conferidos na origem: NARA, NASA, USGS, Smithsonian, Wikimedia Commons (licença conferida arquivo a arquivo), Library of Congress (só pelo navegador, §3), e as fontes federais: sala de imprensa de órgão federal dos EUA e DVIDS (Lucas, 26/09/2026; midia.md §7.3), e as fontes da 4ª rodada (Lucas, 27/09/2026; midia.md §7.3: o acervo de qualquer órgão federal dos EUA, os mapas históricos e os outros governos que ela nomeia, com o crédito que a licença pede; o `buscar-midia` não as conhece, e o "Como se busca" de lá diz o caminho). Nenhum outro acervo gratuito. Foto do governo do Alasca e de jornal entra com a fonte creditada na tela (midia.md §7.5; §5 abaixo). O retrato de pessoa citada segue midia.md §7.2. **Nunca banco pago.** Imagem "ilustrativa" de outro evento não entra; foto de outro ano do mesmo assunto, só com o aviso do ano (§9) |
| **B-roll genérico**: paisagem, cidade, porto, indústria, balsa, drone | bancos pagos, nesta ordem: Envato Elements → Motion Array → Storyblocks → Shutterstock, baixado nas contas que o Lucas designou (midia.md §2.3), pela caça no Chrome dele, que ele aprova item por item (midia.md §8); você entrega a lista (§4) |
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
node <motor>/src/ferramentas/buscar-midia.mjs <proj> buscar "<1-3 words in English>" --cena=<id>
node <motor>/src/ferramentas/buscar-midia.mjs <proj> baixar --cena=<id> --indice=<n>
node <motor>/src/ferramentas/buscar-midia.mjs <proj> entregar --cena=<id> --arquivo=<rascunho> --nome=<descriptive-name>
```

- **Entre o `baixar` e o `entregar`, o `conferente-de-midia` julga o rascunho**, e só se entrega o `aprovado`
  (§10).

- **As fontes ligadas vêm de `marca/midia.json`** (campo `fontes_desligadas`), com a decisão do Lucas de
  26/09/2026: acervo gratuito, só os oficiais e as fontes federais (midia.md §7.3). O `buscar-midia` consulta
  `commons`, `nasa`, `nara`, `smithsonian` e `dvids`, e registra as outras (Openverse, Met, Europeana,
  Internet Archive, Pexels, Pixabay, Library of Congress) como desligadas. Não passe `--fontes=` para ligar
  uma delas: ela continua desligada, e o `baixar` a recusa. O `--fontes=` só estreita a busca dentro das
  ligadas. A NARA e o Smithsonian só devolvem imagem e pedem chave; o DVIDS devolve imagem e vídeo e pede a
  chave `DVIDS_API_KEY`; vídeo se pede a Commons, NASA e DVIDS.
- **DVIDS**: o `buscar-midia` grava em cada item a política dele (obra de servidor federal) e as ressalvas:
  material de terceiro pode vir sem aviso, e insígnia ou selo militar pode ser marca registrada. Confira o
  crédito que o item declara: foto "courtesy" ou de terceiro não é obra federal (midia.md §7.3).
- **USGS e sala de imprensa de órgão federal** não têm adaptador na ferramenta: busque no site do órgão, com
  a regra de robô do §0, e registre a origem com a mesma prova que o `entregar` grava (URL, licença,
  sha256), mais o órgão autor, a data e o local.
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

## 4 · Banco pago: você entrega a lista, o conferente julga, o Lucas aprova, o Claude central caça

B-roll genérico vem dos bancos pagos; evento real específico, nunca (midia.md §1).
- **A caça é pelo Chrome do Lucas, feita pelo Claude central** (Lucas, 26/09/2026; midia.md §8; CLAUDE.md, "Caça
  nos bancos pagos"). Os candidatos passam pelo `conferente-de-midia`, e a lista de aprovação do Lucas vem antes de
  cada download.
  - O Shutterstock e o Motion Array são contas individuais dele, de assento único. A Storyblocks e o Envato são a
    assinatura da Top10, que ele designou em 30/09/2026 (midia.md §2.3, "A exceção da Top10").
  - Você não abre o site do banco, não baixa e não roda o registrador: é uma caça por vez, no Chrome dele.
  - Você não usa nenhuma ferramenta `mcp__claude-in-chrome__*` nem do painel de navegador do app: só o Claude
    central opera o Chrome (skill `cacar-no-chrome`, §0).
- A sua entrega são dois arquivos:
  - `out/<proj>/_pendencias-banco-pago.md`, para o Lucas ler. Por cena: 3 ou 4 buscas em inglês, a duração, por
    que é genérico, o que **tem de aparecer**, o que se **recusa** (midia.md §2), e o banco na ordem Envato →
    Motion Array → Storyblocks → Shutterstock. As outras cenas seguem;
  - `out/<proj>/_pesquisa/lista-de-caca.json`, para a caça, no formato do §1 da skill
    `.claude/skills/cacar-no-chrome/SKILL.md` (a cópia adaptada do canal): `proj`, e por item `id`, `cena`,
    `tipo` (`video` ou `foto`; música fica fora), `plataformas`, `buscas` (inglês, de 2 a 4 palavras),
    `tem_de_aparecer`, `recusa`, `quantos` e `nome_final`.
- Na lista de caça:
  - `plataformas` na ordem `envato`, `motionarray`, `storyblocks`, `shutterstock`;
  - sem `storyblocks` em cena sobre ator político ou conflito (midia.md §3.3);
  - o `envato` pode ir na lista: enquanto o Lucas não entrar nele e confirmar o *Always ask*, o Claude central
    o pula e segue para a plataforma seguinte (skill, §0);
  - só B-roll genérico: item que nomeia evento, pessoa pública ou data não entra (midia.md §1);
  - **separe antes** (Lucas, 30/09/2026: "Separar antes (Recomendado)"). A opção dizia: "Ao montar a lista, a
    pesquisa manda lugar muito específico (um prédio, uma cidade pequena, um terminal) direto para acervo aberto,
    foto do Estado ou mapa. Só B-roll genérico e cidades grandes vão aos bancos. É o maior ganho, sem risco novo."
    - Na caça 2 do Juneau, 18 dos 23 itens não tinham vídeo nos bancos: o Capitólio, Willow, Wasilla, a estrada,
      o Lynn Canal, a balsa estadual, Haines, Cascade Point e o aeroporto. Anchorage e o oleoduto tinham.
    - Por isso, esse lugar vai direto ao §3 (acervo aberto), à foto do Estado (midia.md §7.5) ou, como NÃO ACHADO,
      ao mapa. Na lista de caça, só entra o que um banco tem chance real de ter.
  - a `recusa` diz sempre: editorial; pessoa reconhecível em primeiro plano; pessoa falando para a câmera; marca
    ou logotipo de terceiro legível; propriedade privada identificável como assunto do quadro; gerado por IA;
    lugar diferente do rótulo; retrato; abaixo de 3840×2160 (midia.md §2.1, §2.2, §2.6, §2.7 e §3.1; skill
    `cacar-no-chrome`, §2.3; `conferente-de-midia`, §5.1 e §5.2);
  - se a cena rotula um lugar, o `tem_de_aparecer` diz que a descrição do item tem de nomear esse lugar;
  - `quantos` é o que a cena usa, não mais (midia.md §2.5).
  O `tem_de_aparecer` e a `recusa` são também o que o `conferente-de-midia` lê ao julgar os candidatos: escreva-os
  para a cena e para a fala dela, não para a busca.
- **O Shutterstock entra na caça, em último** (Lucas, 26/09/2026): o plano dele é o de downloads ilimitados
  (midia.md §3.4). Cada download vale para um uso, e nada se baixa para estocar. Um clipe dele na tela pede a
  linha de crédito do Shutterstock na última cena e na descrição (midia.md §3.4).
- **Não se rodam** `scripts/stock/api-oficial.mjs`, `chrome-daemon.mjs`, `setup-login.mjs`, `sessao-conferir.mjs`,
  `sessao-veredito.mjs` e `antibot.mjs` (CLAUDE.md, "Caça nos bancos pagos"). O `registrar-download.mjs` e o
  `_instalar-lote.mjs` são do Claude central, dentro da caça.
- **Tetos**: Motion Array, 150 downloads por dia (midia.md §3.2); Shutterstock, 100 por dia, contados pelo
  registrador como guarda (midia.md §3.4).
- **Registro**: cada arquivo caçado é registrado com banco, ID, URL, data, conta, busca, cena e sha256 (midia.md
  §2.8). A prova de licença vai para `…/<banco>/licencas/`, e a confirmação da conta, para o relato da caça.

## 5 · Licença: o que não é domínio público automático

- **Documento e foto do Estado do Alasca** (inclusive o acervo digital da Alaska State Library),
  **jornal** (ex.: Anchorage Daily News) e **rádio** (ex.: KTOO) **não são domínio público automático**.
  Registre autor, URL e o que a origem diz sobre direitos.
- **Documento** do Estado e de imprensa **só entra com permissão de uso clara** (domínio público comprovado,
  licença aberta ou autorização escrita), conferida e gravada; o crédito é o que a permissão pede (Lucas,
  26/09/2026; midia.md §7.1). Sem permissão, o documento não entra na pasta de mídia da cena: vai ao
  relatório como candidato, com o motivo, e a cena recria o trecho de texto no visual do canal.
- **Foto** do governo do Alasca e de jornal, que não é retrato de pessoa citada, **entra citando a fonte**
  (Lucas, 26/09/2026; midia.md §7.5):
  - `credito_na_tela` com a fonte como a origem a credita (§7);
  - na procedência: URL, data da foto e da conferência, autor e veículo ou órgão, e o que a origem diz sobre
    uso, copiado. A `licenca` leva esse texto e `midia.md §7.5 (Lucas, 26/09/2026)`, nunca `a_confirmar`;
  - foto de agência (AP, Getty): registre também que agência costuma reivindicar direitos no YouTube
    (Content ID), e deixe a foto para o Lucas pesar (o conferente a dá `pendente_lucas`); a `excecao_autorizada`
    só se escreve depois do ok dele, a partir da `excecao_lucas` que o conferente gravou.
    Foto Reuters não entra: o portão a veta (midia.md §7.4, item 2);
  - o **vídeo do governo do Alasca** segue esta mesma regra (Lucas, 27/09/2026; midia.md §7.5): crédito na tela
    e a procedência acima, com a base `midia.md §7.5 (Lucas, 27/09/2026)`. A medida é a do footage (§6);
  - vídeo de jornal, de veículo ou de agência não é esta regra: só com licença conferida na origem, porque os
    jornais costumam reivindicar direitos no YouTube; sem ela, fica fora (Lucas, 27/09/2026; midia.md §7.5).
- **Foto de outra origem sem licença** (prefeitura, empresa, particular, site de terceiro) não entra: procure
  outro registro nos acervos do §3 (midia.md §7.5).
- **Retrato de pessoa citada** é do `pesquisa-pessoas` (midia.md §7.2).
- Obra do governo federal dos EUA (NARA, NASA, USGS, DVIDS, sala de imprensa de órgão federal) é domínio
  público **nos Estados Unidos**, e o registro diz assim. Material "courtesy" de terceiro dentro de acervo federal não é: confira.
- Commons: licença arquivo a arquivo (identidade.md §6). Licença "desconhecida" não entra.

## 6 · Formato, resolução, taxa

- Palco **3840×2160**, paisagem (identidade.md §4; `marca/tokens.css`). O master sai em 3840×2160 a
  **30 fps** (CLAUDE.md, peça 2 da pré-v1).
- B-roll genérico abaixo de 3840×2160 se rejeita (ofício §8), de banco ou de acervo. O footage de registro real
  recente abaixo de 4K (um evento que o DVIDS só tem em 1080p) não se rejeita sozinho: fica no rascunho, com a
  medida, e o `conferente-de-midia` o leva ao Lucas (`pendente_lucas`; ofício dele, §5.3).
- **Registro histórico** quase sempre é SD ou foto pequena.
  - **Foto de época** (Lucas, 27/09/2026; identidade.md §5, "A foto antiga pequena"): de 1.600 px de largura
    para cima, vai em tela cheia se a enche sem passar de 1,4 vez (2.743 px ou mais); a de 1.600 a 2.742 px vai
    impressa sobre a mesa, até 1,4 vez (Lucas, 29/09/2026; identidade.md §5, "A foto média também vai impressa"). A prioridade é a foto grande e com qualidade (Lucas: "A prioridade ainda deve ser fotos grandes e com qualidade, a exceção deve ser para casos MUITO específicos").
  - A pequena, impressa sobre a mesa, até 1,4 vez o tamanho e **a partir de 800 px no lado maior**, é exceção de
    caso muito específico (identidade.md §5): o registro daquilo que a fala nomeia, sem foto grande que sirva,
    nem de outro ano com o aviso, e com qualidade. Escreva no relatório por que o caso é específico. Nunca a
    amplie (upscale: CLAUDE.md, tropeços do apoio), e entregue com a medida.
  - **A lacuna**, do vídeo 2 em diante; no Juneau, não (Lucas, 30/09/2026; identidade.md §5, "A foto pequena preenche a lacuna"): item que ficou sem foto grande e sem vídeo que sirva (o NÃO ACHADO) pode ser
    preenchido por foto pequena, de hoje ou de época, impressa sobre a mesa, **uma ou mais** do mesmo assunto na
    mesma composição. Ela mostra o que a fala nomeia, tem qualidade, 800 px ou mais no lado maior e data na origem.
    Não precisa escrever o caso específico: a lacuna é o caso. Entregue o conjunto (até 3 ou 4 fotos) no rascunho,
    e diga na pauta que são para a mesma mesa.
  - Busque sempre primeiro as grandes, com o `buscar` sem opção. Só no caso específico e na lacuna, rode o `buscar` com
    `--min-w=800`: sem ele, o `buscar-midia` tira da lista o que tem menos de 1.600 px (§3). Candidato abaixo de
    800 px fica listado com link, medida e licença, sem entrega.
  - **Vídeo de época** abaixo de 4K: DECISÃO DO LUCAS PENDENTE. Até lá, não o rejeite só pela resolução e não o
    amplie. Entregue no rascunho com a medida, e o `conferente-de-midia` o leva ao Lucas.
- **Medir:** largura e altura de foto e de vídeo se leem com `ffprobe`, e o relatório diz "medido por
  ffprobe" (`identify` e `medir-imagem`: CLAUDE.md, "Os especialistas").
- Clipe fora de 30 fps: registre a taxa. `scripts/normalizar-footage.mjs <proj> --dry` (pede
  `REGIE_MOTOR`) mostra o que faria. A exigência nasceu no render do Top10 e não foi medida contra o
  `renderizar.mjs` da pré-v1: diga o resultado, não conclua.

## 7 · O crédito que você escreve (identidade.md §7, §4.1, §4.2)

- `credito_na_tela` em inglês, no formato `<author> / <archive> · <license>`. Ex.:
  `Jane Doe / Wikimedia Commons · CC BY-SA 4.0`.
- **Foto do governo do Alasca e de jornal** (midia.md §7.5): crédito na tela sempre, a fonte como a origem
  a credita, `<author> / <outlet>`; sem autor nomeado, só o veículo ou o órgão. Ex.:
  `Jane Doe / Anchorage Daily News`.
- **Domínio público** (NASA, Landsat/USGS, Natural Earth, NARA, DVIDS, sala de imprensa federal…) vai
  **sem crédito na tela**. Escreva isso
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
- **Foto de outro ano, com o aviso na tela** (Lucas, 27/09/2026: "Quando não houver foto do ano, mas houver foto pode utilizar com um aviso em tela"; identidade.md §6).
  - Busque primeiro a foto do ano do fato.
  - Sem ela, entregue a melhor foto do **mesmo assunto** de outro ano: o mesmo lugar, prédio ou coisa, e nunca
    outro evento no papel do evento nomeado.
  - A data vem da página de origem: o ano, ou a aproximação que ela dá (`ca. 1900`, `1990s`). Ela vai para a
    procedência e para a pauta. Foto sem data na origem não entra.
  - A ordem inteira (identidade.md §6, "A ordem"): a grande e com qualidade do ano do fato; a grande e com
    qualidade de outro ano, a do ano mais perto, com o aviso; a pequena, no caso muito específico e na lacuna, uma ou
    mais na mesma mesa (§6 acima);
    e, sem nenhuma, NÃO ACHADO, que leva o plano a mapa ou desenho.
  - A de outro ano não pode desmentir a fala: a cidade de hoje numa fala sobre o povoado de 1900 não entra.
  - O aviso na tela é do `editor-de-arte`, com a grafia do `redator-de-tela`. **Vídeo** de outro ano continua
    fora.

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
- **O que você traz passa pelo `conferente-de-midia`** (`.claude/agents/conferente-de-midia.md`, do canal)
  antes da lista do Lucas e da cena: o candidato da caça em `out/<proj>/_pesquisa/conferencia-caca.json`, o
  arquivo do acervo aberto em `conferencia-midia.json`. O `aprovado` dele não dispensa a sua validação por visão
  (ofício §4).
- **No acervo aberto, o conferente julga o rascunho, e você só entrega o que ele aprovou.** A ordem:
  1. `buscar` e `baixar` (§3): o arquivo fica no rascunho, `out/<proj>/_media/_caca/<cena>/acervo-livre/`. Não
     rode o `entregar` ainda. A sua resposta termina com a lista do que ficou no rascunho, cena por cena;
  2. o Claude central despacha o conferente no fluxo `midia` sobre esse rascunho;
  3. você volta, num despacho novo, e roda o `entregar` só dos arquivos que estão com `veredito: aprovado` em
     `out/<proj>/_pesquisa/conferencia-midia.json`. Leia o veredito no disco: o relato não vale.
  - O `reprovado` e o `trocar` não se entregam: ficam no rascunho, como estão, e vão ao seu relatório com o
    `motivo`. O `trocar` volta a você com o que faltou (`trocar_por`), e é busca nova, que passa de novo pelo
    conferente. O `reprovado` com `reconferir` espera a conferência no navegador do app, com o Lucas vendo.
  - O `pendente_lucas` também fica no rascunho, até o Lucas responder à pergunta do conferente e ele regravar o
    veredito como `aprovado`, com a `excecao_lucas`. Só então se entrega.
  - A cena só cita o que tem `aprovado` no veredito que casa com o arquivo (CLAUDE.md, "Os especialistas"). O
    `entregar` guarda o sha256 do rascunho no `_PROCEDENCIA.json` da cena: é por ele que o veredito casa.
  - **Arquivo já entregue** (de antes desta regra, ou de outra via) que o conferente reprovou ou mandou trocar:
    retire-o de `out/<proj>/_media/<tipo>/<cena>/` pelo ofício, §3.6 (as citações dele viram `FALTA — <pedido>`
    ou apontam o substituto). Mova-o para `out/<proj>/_media/_caca/<cena>/_retirado/`, nunca o apague, e diga
    no relatório o que saiu e por quê.
  - O `regie advance` do `research` só se faz sem `reprovado` nem `trocar` em arquivo que continua em
    `_media/<tipo>/<cena>/` (CLAUDE.md, "Os especialistas").
- Não há ledger de insumos nem seção "A ESCADA" neste canal. A devolução é a **última linha da sua
  resposta**: a cena, o degrau em que você parou e quem decide agora — `montador` (o que entra e onde),
  `regente-de-imagem` (o que a frase exige da tela), `diretor-de-arte` (se mexe no arco) e o Lucas, quando
  for licença, gasto ou banco pago.
