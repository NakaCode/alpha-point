# Alpha Point — canal da Régie

**Você está na pasta de um canal**, não no motor. O motor — o framework que criou
este canal — está em `C:\projetos\regie`, no repositório `top10-company/regie`.

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

## O que a Régie faz — e o que ainda não faz

A linha começa num vídeo **já editado** (o passo `ingest` transcreve o master) e
entrega a camada visual como XML de 5 camadas. Não gera vídeo do zero. E não há
automação que rode os passos sozinha: quem faz o trabalho de cada passo é você,
junto com a pessoa; a Régie guarda estado, ordem e histórico. Não prometa mais que isso.

## A marca

`marca/identidade.md` (cor, tipo, alvos, cenas), `marca/voz.md` (o narrador e o que ele
nunca diz) e `marca/midia.md` (de onde vem cada imagem e o que as licenças deixam fazer).
Todo passo que pede "a marca ativa" lê os três. `marca/prancha.html` é a conferência visual.

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
