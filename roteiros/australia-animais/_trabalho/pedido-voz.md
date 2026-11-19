# Pedido: a cópia para a voz e a folha de pronúncia do vídeo 8 (`australia-animais`) (18/11/2026, ~21:3x)

Você é um subagente da Sala de controle do canal Alpha Point. A pasta de trabalho é a raiz do canal, `C:\projetos\alpha-point`, e todo
comando roda com o cwd nela. O `CLAUDE.md` da raiz é o núcleo das regras do canal: leia-o primeiro. Escreva em português (as notas e os
cabeçalhos); a fala é em inglês dos EUA.

## A tarefa

O roteiro do vídeo 8 está aprovado pelo Lucas ("Pode seguir (Recomendado)", 18/11/2026, ~21:2x; `roteiros/australia-animais/decisoes-lucas.md`):
`roteiros/australia-animais/roteiro-narrador.md`, sha12 do texto falado **`bfd94a54b442`** (é o `sha256` que
`node roteiros/australia-animais/_ferramentas/gate.mjs` imprime; 2.711 palavras, 60 parágrafos). Faça a cópia dele para a voz (ElevenLabs
v4), no molde exato do vídeo 7 (`rio-columbia`), **sem chamar a API e sem gastar crédito**:

1. `roteiros/australia-animais/_ferramentas/preparar-voz.mjs`, derivado de `roteiros/rio-columbia/_ferramentas/preparar-voz.mjs`. Leia o do
   vídeo 7 inteiro antes (o cabeçalho diz o que ele herdou do vídeo 6 e por quê). Mude o projeto (`PROJ`) e reescreva o cabeçalho para este
   vídeo, no mesmo formato: o que muda contra o do vídeo 7, e **a lista inteira dos números deste roteiro com a regra que pega cada um**
   (ano, milhar, decimal, "X million", número solto, faixa de anos, o que já vem por extenso e fica). As regras do molde que não têm caso
   aqui FICAM. A regra do "US" com pontos só fica se o texto tiver a sigla; diga o que achou. Mantenha a prova da volta (desfeitas as
   trocas, o texto volta byte a byte ao revisado) e a recusa de dígito, "$", "%", "×" ou colchete na cópia.
   - **Nenhuma palavra falada muda**: muda só como ela se escreve. Nenhum alias de nome entra (a política de `marca/pronuncias.md`: alias
     só depois de o nome ser confirmado de ouvido e a voz errar). Se um número tiver duas leituras naturais (um ano como "2005" → "two
     thousand five"; "2016" → "twenty sixteen"; um decimal; uma faixa "2016 to 2025"), siga a leitura que os vídeos 6 e 7 já usaram
     (os `voz/trocas.md` deles) e anote a escolha no cabeçalho.
   - Se um número não couber em nenhuma regra, o script para (a recusa); você acrescenta a regra, com o caso no cabeçalho, e roda de novo.
     Prove as regras novas como o vídeo 7 provou as dele: numa cópia de rascunho do roteiro (em `out/australia-animais/_tmp/voz/`), nunca
     no roteiro aprovado.
2. As três saídas que o script escreve: `roteiros/australia-animais/voz/texto-para-voz.md` (com a linha `Revisão do roteiro: \`bfd94a54b442\``),
   `roteiros/australia-animais/voz/trocas.md` (com "sha256 do texto falado `bfd94a54b442`") e `out/australia-animais/roteiro.md` (o que o
   `narrar.mjs` da pré-v1 lê; com `revisao_do_roteiro: bfd94a54b442`; um pedido por parágrafo, parágrafos separados por linha em branco; a
   voz e o modelo saem do `canal.json` › `narracao`, como no vídeo 7). A pasta `out/australia-animais/` ainda não existe: crie-a.
3. `roteiros/australia-animais/pronuncia.md`, no formato de `roteiros/rio-columbia/pronuncia.md`, começando de `marca/pronuncias.md` (a
   folha permanente do canal): a linha `Revisão do roteiro: \`bfd94a54b442\``; os nomes de risco deste roteiro (os nomes próprios e os
   termos que uma voz americana pode errar: o nome do bicho, do lugar, da pessoa citada, do termo científico), cada um com a pronúncia
   de referência e de onde ela vem (uma fonte que se possa citar: dicionário, a instituição, o próprio dono do nome), se já está na folha
   permanente, e em que parágrafo aparece. Nada vira alias: a folha é a lista da escuta do Lucas.
   - Para achar a pronúncia de referência, você pode usar a WebSearch e a WebFetch. Site que recusa leitura automática (403, captcha,
     verificação de robô) não se contorna: nem por `curl`, nem por outro cliente, nem trocando cabeçalho. Anote "não conferido" e siga.

## Feito quando

- `node roteiros/australia-animais/_ferramentas/preparar-voz.mjs` sai 0, com a prova da volta passando, e a cópia não tem dígito, "$", "%",
  "×" nem colchete;
- `node roteiros/australia-animais/_ferramentas/gate.mjs --derivados` sai 0 (PASSA), com os quatro derivados citando `bfd94a54b442`
  (`roteiro-narrador-pt-BR.md`, `voz/texto-para-voz.md`, `voz/trocas.md`, `pronuncia.md`; e o `out/australia-animais/roteiro.md`). Grave a
  saída em `out/australia-animais/_tmp/voz/gate-derivados.txt`;
- o relato curto em `out/australia-animais/_tmp/voz/relato.md`: quantos parágrafos e caracteres a cópia tem (o que a narração vai cobrar),
  a lista das trocas por tipo, as regras novas e a prova delas, os nomes de risco (os 5 a 8 que mais podem dar errado primeiro), e o sha256
  de cada saída;
- termine com um resumo de poucas linhas: as saídas, o `gate --derivados` e os nomes de risco.

## O que você não faz

- Não edita o roteiro aprovado (`roteiro-narrador.md`), a tradução pt-BR, os laudos, a tabela de fatos, o `gate.mjs`, a `marca/` (a folha
  permanente `marca/pronuncias.md` só se lê), nem nada de `rio-columbia/` (é só o molde).
- Não roda o `narrar.mjs` (nem com `--simular`), o `transcrever.mjs`, nem nada que chame a ElevenLabs ou gaste crédito. Nunca lê nem
  imprime o valor de uma chave (`C:\Users\zangp\.regie\chaves.env`).
- Não faz commit nem `regie`. Não usa `SendMessage` nem `send_message`, nem ferramenta de navegador (`mcp__claude-in-chrome__*` ou
  `mcp__Claude_Browser__*`).
- Python: o script num arquivo, rodado com `python -X utf8 -B <arquivo>.py`. A trava do canal recusa `python -`, heredoc e pipe.
- Se algo não casar ou faltar, pare naquele ponto e diga; não invente.
