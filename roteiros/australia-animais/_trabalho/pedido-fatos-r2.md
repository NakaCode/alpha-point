# Pedido da Sala: o verificador de fatos no r2 do vídeo 8 (`australia-animais`) · 18/11/2026

**Quem:** o especialista `verificador-de-fatos`, esforço high, despachado pela Sala de controle.

## O que julga

O r2 (`roteiros/australia-animais/roteiro-narrador.md`, no sha12 do texto falado que a Sala der no despacho), **por cobertura e não por amostra**,
como no r1. O r1 foi julgado por você mesmo papel: `qc-roteiro/fatos-r1.laudo.md` e `qc-roteiro/fatos-tabela-r1.json` (225 de 229, RESSALVA, 8).
O r2 aplicou a lista da Sala (`_trabalho/lista-r1.md`), e as notas do escritor (`_trabalho/escrita-notas-r2.md`) dizem, item a item, o que mudou, com
as frases novas que tocam em fato. O r1 está em `_trabalho/roteiro-r1.antes.md`.

**Como derivar a lista**, no molde de `roteiros/rio-columbia/qc-roteiro/fatos-r2.laudo.md` (leia a forma dele): a tabela do r1, casada frase a frase
com o r2 por script (a frase do r1 só vale se está inteira num parágrafo do r2, a regra do `portao-fatos`), mais a leitura integral, à mão, do r2:
- as linhas levadas do r1 (a frase não mudou: o veredito, o trecho e a fonte do r1, com o parágrafo do r2);
- as linhas rejulgadas (a frase mudou): entre elas, as 4 que o r1 deu como `corrigir` ou `datar` (a colisão de Hall, "lives where far more people
  do", o sujeito de Arbuckle, o ensaio dos soros datado), e se cada troca foi aplicada com a letra da lista;
- as linhas novas, para as frases novas e para o que as mexidas passaram a afirmar. **Olhe com cuidado**: o estudo de 2005 a 2015 (o ASP-20); as 70
  mortes da água-viva com a conta de 2005; o primeiro-socorro "da Austrália, para cobras"; o "held steady" com a conclusão da fonte (se ficou); a
  comparação do calor e do afogamento com o veneno (os 202 e os 1.010 contra os 85); os 32 de animal marinho com "sharks among them" (se entrou);
  "Neither are the roads we started with"; a frase que soma o "tão poucas mortes" no P55; "None of those bites killed anyone" (ou a forma que ficou) contra
  Welton 2017; "Very few mammals ever made it across them"; a meia citação do NCIS; "they write" no P44; o "puff adders" (se entrou); e a frase sobre a
  datação que não diz como as cobras cruzaram (se entrou);
- as linhas do r1 que saíram com as frases delas (diga quais).

**As fontes, nesta ordem:** as cópias em texto que você fez no r1 (`out/_tmp/bancada-australia-animais/texto/` e `web/`), as cópias locais
(`midia/australia-animais/fontes/`), a base (`pautas/australia-animais/_trabalho/fatos-a.md`, `fatos-b.md`, `fatos-c.md`, `medida-censo.md`) e, só se a
cópia não bastar, a origem na web. A pauta não é fonte: ela aponta a fonte. Na web: o robots.txt antes de cada site, um pedido por vez, o User-Agent
`AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`, e site que recusa leitura automática (403, captcha, Cloudflare, verificação de robô) não se
contorna, nem por outro cliente, nem trocando cabeçalho, nem pela cópia arquivada: o item fica NÃO CONFERIDO, e a Sala lê pelo navegador do app.

**As contas:** refaça por script as que o r2 tocou (a razão do calor e do afogamento contra o veneno, e o que mais mudou), em
`qc-roteiro/fatos-medidas-r2.py`, com a saída em `qc-roteiro/fatos-medidas-r2.txt`.

## A saída

- `roteiros/australia-animais/qc-roteiro/fatos.laudo.md` (novo, do r2), com "Revisão julgada: `<sha12>`", "COBERTURA: N de M", "VEREDITO: …" e a nota
  (comparada à do r1: subiu, caiu, regrediu em quê); os itens que pedem troca, cada um com o peso, o parágrafo, a frase de agora, a troca em uma frase
  e o porquê com o trecho da fonte; o que vai à tela, só o que mudou desde o r1;
- `roteiros/australia-animais/qc-roteiro/fatos-tabela.json` (nova, do r2), uma linha por afirmação;
- no fim, rode `node ferramentas/portao-fatos.mjs australia-animais` e diga a saída no laudo.
- **Não toque** nos arquivos do r1 (`fatos-r1.laudo.md`, `fatos-tabela-r1.json`, `fatos-medidas.py`, `fatos-medidas.txt`).

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. Não use navegador (nenhuma ferramenta `mcp__claude-in-chrome__*` nem
  `mcp__Claude_Browser__*`), vidIQ, banco pago nem crédito. A trava do Python vale (script só em arquivo, `python -X utf8 -B`; nunca `python -`,
  heredoc ou pipe).
- Não edite o roteiro. Escreva só em `roteiros/australia-animais/qc-roteiro/` (os arquivos acima) e, para rascunhos, em
  `out/_tmp/bancada-australia-animais/r2/`.
- Grave antes de responder, e responda com um resumo curto em português: o veredito, a nota, a cobertura (N de M), os itens que pedem troca em uma
  linha cada, e a saída do `portao-fatos`.
