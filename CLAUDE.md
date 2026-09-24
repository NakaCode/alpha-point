# Alpha Point — canal da Régie

**Você está na pasta de um canal**, não no motor. O motor — o framework que criou
este canal — está em `C:\projetos\regie`, no repositório `top10-company/regie`. Esse caminho é
de quando o canal nasceu: se ele não existir mais, pergunte à pessoa onde está o clone do
regie antes de rodar qualquer comando, e atualize `motor.caminho` no `canal.json`.

## Quem está do outro lado

Lucas Rosa, o dono deste canal. Pode não ser pessoa técnica: trate git, banco e linha
de comando como coisas que você opera POR ela, explicando em português claro o que
está fazendo. Não devolva comando para ela digitar — rode e conte o que aconteceu.

## O que você pode, e o que não pode

- **Pode e deve:** criar e editar qualquer coisa nesta pasta — roteiros, prompts,
  scripts, anotações, ferramentas do nicho — e commitar e dar push no repositório
  DESTE canal. O canal cresce com o que vocês constroem aqui; esse é o ponto.
- **Não pode:** alterar o motor. Nada em `C:\projetos\regie` é para editar nem commitar: ele é
  mantido por Lucas e Mateus e compartilhado por todos os canais.
- Se algo que você construiu serviria a QUALQUER canal, registre em `APRENDIZADOS.md`
  — o problema, o que resolveu, por que serviria a outros — e diga à pessoa que vale
  avisar o Lucas. A régua: "se eu montasse um canal de culinária amanhã, isso
  continuaria verdadeiro?"

## Como rodar o motor

```
node C:\projetos\regie\bin\regie <verbo>
```

Sempre de dentro desta pasta: o banco é `db/canal.db`, relativo ao diretório atual.
Verbos: `doctor` (confere tudo, sem custo), `graph` (a linha), `open <slug> [título]`
(começa um vídeo), `queue` (o que está parado, e há quanto tempo),
`advance <slug> [gatilho]` (move pela linha), `drive-preparar <slug>` (liga as entregas).

No Windows, se `npm` responder que "npm.ps1 não pode ser carregado", use `npm.cmd`.
Não altere a política de execução do PowerShell da pessoa para contornar isso.

## Versão do motor, e como atualizar

Este canal nasceu com a Régie antes da primeira versão marcada (commit `ffb3ec0`) e foi
atualizado para a **v0.1.0** em 23/09/2026, com `regie init`. A versão instalada agora:
`node C:\projetos\regie\bin\regie version`.

O motor é clonado numa VERSÃO marcada, não na ponta do desenvolvimento — o que Lucas e
Mateus mudarem no meio do caminho não cai no trabalho da pessoa. Quando eles avisarem de
versão nova (por exemplo v0.2.0), faça por ela:

```
git -C C:\projetos\regie fetch --tags
git -C C:\projetos\regie checkout v0.2.0
```

Depois, dentro desta pasta: `node C:\projetos\regie\bin\regie init` (atualiza a linha de produção no banco
sem perder produção nem histórico) e `node C:\projetos\regie\bin\regie doctor`. Nunca atualize no meio de uma
entrega sem avisar a pessoa.

## O que a Régie faz — e o que ainda não faz

A linha começa num vídeo **já editado** (o passo `ingest` transcreve o master) e
entrega a camada visual como XML de 5 camadas. Não gera vídeo do zero. E não há
automação que rode os passos sozinha: quem faz o trabalho de cada passo é você,
junto com a pessoa; a Régie guarda estado, ordem e histórico. Não prometa mais que isso.

**Na v0.1.0, as estações determinísticas continuam vazias.** `ingest` (transcrever), `render`
(Chrome + ffmpeg) e `finalize` (o XML de 5 camadas) não têm ofício nem código. Transcrição, render e
XML são trabalho que o canal faz aqui, até o motor os ter (`APRENDIZADOS.md` item 9). E nada na Régie
produz o master. O deste canal nasce assim:

1. pauta;
2. pesquisa com fontes;
3. roteiro em inglês (`marca/voz.md`);
4. narração: ElevenLabs, modelo eleven_v3 (decidido pelo Lucas em 24/09/2026; `canal.json` › `narracao`).
   - **A voz** (escolhida pelo Lucas em 24/09/2026): "Alpha Point - Narrator (anchor, mid-30s)",
     `OjaLccTyGvBFh7nx0y4s`. Foi desenhada no Voice Design a partir da The Trusted News Anchor, a que ele mais
     gostou, mas que soava velha. Como foi feita, e as vozes que ficaram para trás: `marca/vozes.html`.
   - A conta compartilhada da ElevenLabs serve a vários canais. O Lucas entra nela pelo navegador do app, e o
     Claude opera o site com ele vendo; nunca digite a senha dele.
   - Nesta máquina ainda não há o arquivo de chaves da API (`C:\Users\zangp\.regie\chaves.env`, que o Mateus
     entrega).
   - Gastar crédito pede o ok do Lucas. Gasto em 24/09: 717 (Max no v3, 2 versões), 717 (Max no v2) e 282
     (Voice Design). A narração inteira pede um ok próprio;
5. master = a narração sobre tela preta 3840×2160 (`marca/identidade.md` §5).

Transcrição local disponível nesta máquina: `faster-whisper` (modelo large-v3, `word_timestamps=True`,
`language="en"`). Editor: Premiere Pro.

## A marca

`marca/identidade.md` (cor, tipo, alvos, cenas), `marca/voz.md` (o narrador e o que ele
nunca diz) e `marca/midia.md` (de onde vem cada imagem e o que as licenças deixam fazer).
Todo passo que pede "a marca ativa" lê os três. `marca/prancha.html` é a conferência visual.
`marca/pronuncias.md` é a folha permanente de pronúncias do canal: a folha de cada vídeo começa dela.
`marca/embalagem.md` é como o canal faz título e miniatura: os moldes das referências, as regras e a receita da miniatura.

Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por
`curl`, nem por outro cliente, nem trocando cabeçalho. Vale para você e para todo subagente, e o
pedido a ele tem de dizer isso. Use a cópia local, ou confira pelo navegador do app com o Lucas vendo,
e pare se o site pedir verificação.

## O vídeo fala inglês; a casa fala português

A narração e o texto de tela são em **inglês dos EUA** (`canal.json` → `idiomas.origem: en-US`).
A conversa com o Lucas, as notas, os laudos e o vocabulário de máquina seguem em português.
Os ofícios foram escritos para vídeo em pt-BR, então, ao rodar os passos:

- **`ingest`**: passe o idioma ao transcritor explicitamente (`en`). Não confie em autodetecção
  num master cheio de topônimos estrangeiros.
- **Cena HTML**: `<html lang="en-US" data-render="4k-native">`. O contrato do editor-de-arte
  mostra `pt-BR`; aqui é `en-US`, e o `data-render` fica literal. Na primeira cena, capture 1 frame e
  confira que ele sai 3840×2160 **com o conteúdo preenchendo o quadro**. O caminho legado (1920 × DPR 2)
  também dá 3840×2160, mas com a cena no canto: é isso que denuncia que o capturador não reconheceu a
  marca.
- **Não traduza vocabulário de máquina**: chaves de JSON (`na_tela`, `valor_exato`…), enums,
  classes de corte, nomes de lente, `data-qc-*`, `construída`/`FALTA`/`ESCALAR`. Vai para inglês
  o que é fala, tela ou busca de mídia (`midia_termos`, `exige`). No decupador, o `motivo` de span de título leva a palavra
  "título" em português: consumidores legados a procuram por regex.
- **Os exemplos dos ofícios estão em formato brasileiro** (`QUASE 3.000×`, `28,0×`, `R$ 2 bi`,
  `6,76 m`, `1º DE MAIO DE 1994`). Não copie. O formato de tela é o de `marca/identidade.md` §7:
  `ALMOST 3,000×`, `28.0×`, `22.2 ft (6.76 m)`, `MAY 1, 1994`. Dinheiro vai em US$. Valor em reais
  é convertido pela cotação da data da fonte antes de ir à tela, nunca trocando só o símbolo.
- **Heurísticas em português viram inglês**:
  - despedida → `thanks for watching`;
  - adversativas → `but`, `yet`, `however`;
  - sintagmas que não se partem → `central bank`, `thirty-seven percent`;
  - número por extenso → `nineteen` = 19.
  "A norma de grafia de hoje" é o AP Stylebook vigente.
- **O que os ofícios citam e não existe aqui**: os scripts de gate (`qc-*`, `render/capturar.mjs`)
  e o `tradutor-de-tela`. Se o canal escrever um gate, as listas de fala que ele procura
  (despedida, mic-check, número por extenso) nascem em inglês. As chaves, enums, classes, nomes
  de lente e o "título" que ele procura no `motivo` continuam em português.

## As regras deste canal

1. **Um dono só: Lucas Rosa.** Se outra pessoa quiser produzir aqui, o caminho é passar
   o canal, não operar junto — dois operadores geram dois relatos que se contradizem.
2. **Esta pasta nunca vai para nuvem sincronizada** — Google Drive, OneDrive, iCloud,
   Dropbox, e nem Área de Trabalho ou Documentos, que o OneDrive costuma engolir. O
   banco corrompe. Só as ENTREGAS vão para o Drive.
3. **O bruto não viaja.** `midia/` fica nesta máquina.
4. **O artefato vence o relato.** Antes de dizer que algo ficou pronto, confira no
   disco. "Não sei provar" é resposta melhor do que um sim otimista.
