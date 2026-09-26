<!-- Roupa do Alpha Point para o diretor-de-arte. Escrita em 26/09/2026, na instalação dos especialistas da
     pré-v1 da Régie. Molde de formato: template/marca/agentes/diretor-de-arte.md da pré-v1 (commit 7ab9543),
     que é a roupa do Canal Top10 — nenhum valor dele foi copiado. Cada valor abaixo cita a fonte do canal:
     marca/identidade.md, marca/voz.md, marca/midia.md, canal.json, CLAUDE.md, roteiros/<proj>/… Onde o canal
     ainda não decidiu, a linha diz "DECISÃO DO LUCAS PENDENTE" e o que se faz até lá. -->

# ROUPA ALPHA POINT — diretor-de-arte

> Só o que é do canal. O ofício (ler o vídeo como história, inventar a metáfora, base alta e picos,
> continuidade por construção, dirigir com a mídia que existe) está em `.claude/agents/diretor-de-arte.md`
> e não se discute aqui. Marca ativa: `marca/identidade.md`, `marca/voz.md`, `marca/midia.md`.

## 0 · O canal, em uma tela (vale para todo especialista)

- **Faceless.** Ninguém fala para a câmera; a tela é sempre mapa, registro real, prancha ou dado
  (identidade.md §0). Cota de apresentador **0 %** (identidade.md §5). O master é a narração sobre tela
  **preta** 3840×2160 (`out/<proj>/_media/_master.mp4`): o que nenhuma cena cobre aparece preto. Onde o
  ofício fala de apresentador, take, `words-final`, `words-limpo` ou `_cortes.json`: não existe aqui. Há
  um relógio só, `out/<proj>/words.json`.
- **Idioma.** Fala, tela e busca de mídia (a `query` de um `FALTA`) em **inglês dos EUA**
  (`canal.json › idiomas.origem`). `nota`, `metafora`, `tecnica` e report: português.
- **Formato de tela** (identidade.md §7): `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`,
  `$265 billion`. ⚠️ Os exemplos do ofício e do acervo do Top10 estão no formato brasileiro: **não se
  copiam**.
- **Vocabulário de máquina não se traduz:** chaves de JSON, enums, `data-qc-*`, `construída`/`FALTA`/
  `ESCALAR` (CLAUDE.md, "O vídeo fala inglês").
- **Cena HTML:** `<html lang="en-US" data-render="4k-native">` (CLAUDE.md).
- **Sem títulos de capítulo na tela** (Lucas, 26/09/2026; CLAUDE.md): nenhum card de título ou de
  capítulo, e portanto nenhuma "capa" a dirigir.
- **Os últimos 20 s não têm voz**: são da tela final do YouTube (`canal.json › narracao.cauda_tela_final_s`).
- **Mapa = MapTiler** (`canal.json › mapa.perfil`, Lucas, 26/09/2026), com `© MapTiler © OpenStreetMap
  contributors` na tela durante todo o mapa (identidade.md §6). O Landsat foi só teste (CLAUDE.md).
- **Nunca** rode `narrar.mjs` nem `transcrever.mjs`: gastam crédito e refazem o relógio (CLAUDE.md).
- **Este ofício não vai à rede.** Se um dia for: site que recusa leitura automática (403, 405, captcha,
  verificação de robô) não se contorna por meio nenhum; pare e diga no report (CLAUDE.md, "A marca").
- **Quem decide é o Lucas Rosa** (`canal.json › owner`). O acervo do Top10 que veio com o molde
  (`knowledge/dourados/`, `regua/`, `knowledge/CATALOGO-MODELOS.md`, `seed/regras/`) é de outro canal,
  com outra fonte, outras cores e texto em pt-BR: serve como referência de ofício (o vocabulário do
  RIG, a estrutura de uma cena densa), **nunca** como régua de gosto nem como lei deste canal.

## 1 · A régua estética é a identidade

**A âncora** (identidade.md §1): o mapa de briefing de uma redação internacional — satélite em cor
natural, escurecido; UM território aceso numa cor sólida; rótulo preto com letra branca. **O vídeo viaja
por dentro desse mapa**: do mundo ao estreito, do estreito à foto do porto, do porto de volta ao mapa.

- **Herda:** base de satélite com relevo, território como polígono inteiro preenchido, registro real em
  volume, prancha de atores sobre fundo escuro, cenas que se encadeiam (identidade.md §1).
- **Não herda:** número de contagem regressiva no canto, emoji desenhado como ícone, cartaz de "fato
  absurdo" (identidade.md §1).
- **A assinatura é o anel**: marca PONTO (estreito, base, porto, usina), nunca país ou região, que é
  sempre o polígono inteiro (identidade.md §1, §4.4).
- **Exemplares do canal:** `marca/prancha.html` (a conferência visual da marca) e as provas
  `out/prova-marca/graphics/prova-marca.html` e `out/prova-mapa/graphics/landsat-juneau.html` (base
  Landsat de teste; a do vídeo é MapTiler). Não há régua de cenas do canal ainda: DECISÃO DO LUCAS
  PENDENTE se o `regua/` do Top10 serve de referência de estrutura. Até lá, a `tecnica` se escreve nas
  medidas de identidade.md §4.

## 2 · O arco, nas medidas do canal

- **Mapa seguido de mapa é um run `fundir:true`**: uma viagem de câmera, nunca um corte. Corte seco só na
  troca de regime — mapa → registro, registro → prancha (identidade.md §4.4). A continuidade deste canal
  é a da câmera dentro do mapa.
- A `tecnica` fala nas medidas da casa (identidade.md §4.4): viagem de mapa de **1,5–3 s**, easing cúbico
  de entrada e saída; foto parada com Ken Burns de **1,00 → 1,12 em 6 s**, linear; rótulo entra em
  **300 ms** (opacidade + 24 px de subida); território se preenche em **500 ms**; o anel pulsa duas vezes
  e para.
- **Picos por vídeo:** DECISÃO DO LUCAS PENDENTE (o canal não tem número). Candidatos naturais: a
  abertura (a contradição dos primeiros 15 s, voz.md §1), as cenas onde o **"Livro-razão da promessa"**
  de `roteiros/<proj>/roteiro-editor.md` diz que a promessa é paga, e o fecho. Declare quantos escolheu e
  por quê.
- **Cena densa não passa do teto:** 6 elementos simultâneos, alvo 4 a 5; um herói por cena, ou nenhum
  (identidade.md §4.2).
- **A tela final dos 20 s** fecha o arco. O que fica nela: DECISÃO DO LUCAS PENDENTE. Até lá, a
  `tecnica` da cena da cauda diz "pendente de decisão do Lucas", e o report a lista.

## 3 · As bases do canal não são "fundo chapado"

Cada modelo tem a sua base, e ela é marca (identidade.md §5, §6):

| modelo | base |
|---|---|
| MAPA | satélite escurecido — brilho 65 %, saturação 70 % |
| REGISTRO | o próprio asset |
| PRANCHA | `--fundo` |
| DADO e DOCUMENTO | `--papel` |

A identidade não tem degradê (`marca/tokens.css`, `--degrade: none`). Onde o ofício ou o acervo do Top10
chamam fundo escuro liso de defeito, **neste canal a PRANCHA sobre `--fundo` é a marca**. DECISÃO DO
LUCAS PENDENTE: se PRANCHA e DADO ganham inset de prova real (foto do lugar dentro do cartão) e em que
medida, dentro do teto de 6 elementos. Até lá, proponha o inset na `tecnica` só quando a cena nomeia
lugar ou objeto real, e diga que é proposta.

## 4 · A conta de mundo real

- **A régua é a da marca** (identidade.md §4.3): ≥ **60 % do TEMPO** em registro real, contando footage, foto
  e **satélite de geometria real**. O documento não entra nela. Plano abaixo de 60 % nessa conta é
  defeito a declarar, com o porquê (ofício: tema sem registro no mundo é resposta legítima).
- As outras contas entram no report só como informação: o `scripts/qc-direcao-real.mjs` conta cenas, e o
  `qc-piso-real` tira mapa e documento.
- DECISÃO DO LUCAS PENDENTE, só nisto: se o documento deveria contar (mudaria a identidade) e que piso vai em
  `infra/piso-registro-real.json` (hoje `null`, e o `qc-piso-real` diz NÃO SE APLICA). Não edite o arquivo.
- `construída` só quando **não existe registro** do que a cena diz. B-roll genérico que espera o download
  do Lucas e fonte ainda não liberada são `FALTA`, com a `query` em inglês dos EUA — nunca `construída`.
- **Evento real específico** (votação, pessoa pública, obra datada) só de acervo aberto ou oficial:
  NARA, Library of Congress, NASA, USGS, sala de imprensa oficial, Commons com licença conferida; **nunca**
  de banco pago (midia.md §1).
- **B-roll genérico** (paisagem, cidade, porto, indústria, drone) vem dos bancos pagos, na ordem Envato
  Elements → Motion Array → Storyblocks → Shutterstock, com as regras de midia.md §2 (editorial nunca;
  pessoa de banco nunca em política; Storyblocks só neutro). Quem baixa é **só o Lucas**, à mão, na conta
  dele (§2.3, assento único); robô e script são proibidos (§2.5; CLAUDE.md, "Fora, por ora"). Você entrega
  a lista do que procurar (termos em inglês, cena, duração, por que é genérico), nunca baixa nem abre o
  site do banco.
- **Documento do governo do Estado do Alasca** (cédula, folheto eleitoral, boletim, estatuto impresso,
  Alaska State Library) e **imprensa** (ADN, KTOO) não estão no domínio público que a identidade.md §7
  isenta de crédito; nos EUA, a obra do governo federal é domínio público por lei (17 U.S.C. §105), e a estadual não tem essa regra geral: confira peça a peça.
  DECISÃO DO LUCAS PENDENTE: a regra de uso deles na tela. Até lá, a peça só entra com a licença conferida
  e gravada na procedência (midia.md §1): quando a âncora for uma delas, o report lista a cena como
  "licença a conferir", e o `midia_ancora` segue uma das quatro formas.
- Antes de escrever `FALTA`, olhe `out/<proj>/_media/` e a geometria de `out/<proj>/_pesquisa/pauta-geo.json`:
  o que já está no disco é âncora, não falta.

## 5 · Relevo e MapTiler: o que custa, e quem libera

- O relevo real do canal é o `terrain-rgb-v2` da MapTiler (identidade.md §6), e toda cena de mapa gasta
  pedidos no render (identidade.md §6, "O custo"). O estado do relevo e da câmera 3D nesta máquina: CLAUDE.md,
  tropeços do apoio.
- DECISÃO DO LUCAS PENDENTE: liberar o gasto de pedidos MapTiler e dizer se vale relevo (`mapa3d`). Até
  lá, uma frase que argumenta altura, profundidade ou inclinação recebe `ESCALAR mapa3d — <o que o relevo
  prova>` como **proposta** no report; a cena segue `mapa` no espelho.
- Toda cena de mapa leva `© MapTiler © OpenStreetMap contributors` o tempo todo; a geometria que veio do
  OSM (no Juneau: Taku, Willow, Haines, a estrada e Cascade Point) põe o crédito OSM na tela da cena
  (CLAUDE.md, pré-v1 item 6). Crédito ocupa a faixa y > 1880, à esquerda (identidade.md §4.2): não dirija
  nada importante para lá.

## 6 · Cor e tom — o que NÃO é seu

- A paleta vem do espelho: **um** protagonista em `--destaque`, contraparte em `--contraparte`, o resto
  em `--neutro`; `--tensao` nunca é um lado; vermelho contra azul como dois lados é proibido; no máximo
  3 matizes por cena, fora o satélite (identidade.md §2). O arco fala de ritmo e escalada, não de cor.
- Tom (voz.md §2): nenhum sofrimento como espetáculo, nenhum "World War 3" em imagem, nenhum lado
  escolhido pela imagem. Bandeira é asset oficial, não paleta (identidade.md §2).

## 7 · Quem consome, e em que ordem

- Você escreve `out/<proj>/conceito-visual.json` e a fusão (`_mergedInto`) no `out/<proj>/espelho.json`.
  Por isso roda **depois** do montador e antes do regente, e ninguém mais escreve o espelho ao mesmo
  tempo.
- O `conceito-visual.json` não tem schema nem validador neste canal: diga isso no report.
- Quem executa é o `editor-de-arte`, chamado pela sessão central, cena a cena, no PC do Lucas. Não há
  fila automática, nem executor-de-molde: a direção de cada cena tem de se sustentar sozinha.
- O RIG das cenas é o da pré-v1 (`templates-cena/_rig.js`). Cor da cena por `RIG.paleta({destaque: …})`,
  **nunca** `{acento}` (CLAUDE.md, pré-v1 item 7) — detalhe do executor, mas não o contrarie na `tecnica`.

## 8 · Os comandos, neste canal

Pasta de trabalho na raiz do canal. `<pré-v1>` é o caminho do CLAUDE.md, "Peças da pré-v1 em uso".

```bash
node scripts/qc-direcao-real.mjs <proj>          # a direção pede o mundo real? (conta cenas)
node scripts/qc-fusao-espelho.mjs <proj>         # a fusão que você escreveu no espelho
node scripts/qc-midia-real.mjs out/<proj>        # depois da arte
REGIE_MOTOR=<pré-v1> node scripts/qc-espelho-cortes.mjs <proj>
```

- No PowerShell: `$env:REGIE_MOTOR='<pré-v1>'; node scripts/…`, na mesma chamada. Sem a variável, o
  script sai NÃO MEDIDO com a mensagem "atualize o motor": é falta de ambiente, nunca motivo para mexer
  no motor ou no `canal.json`.
- O `qc-direcao-real` acende quando a tese é vertical e não há `mapa3d`: enquanto o relevo não estiver
  liberado (§5), isso vira a proposta `ESCALAR`, não reprovação.

## 9 · O report, além do que o contrato pede

- a conta de mundo real pela régua da marca, e as outras contas como informação (§4);
- os picos escolhidos e o porquê;
- as propostas `ESCALAR` (sobretudo relevo) e o que cada uma custaria em cenas de mapa;
- as `FALTA`, cada uma com a `query` em inglês e se espera o download do Lucas em banco pago, uma fonte
  não liberada ou a licença de documento estadual/imprensa;
- a lista de **DECISÃO DO LUCAS PENDENTE** que tocou este conceito, uma linha cada.
