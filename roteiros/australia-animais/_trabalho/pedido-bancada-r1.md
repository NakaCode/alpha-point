# Pedidos da Sala: a bancada do roteiro r1 do vídeo 8 (`australia-animais`) · 18/11/2026

Dois agentes, em paralelo, sobre o mesmo texto (`roteiros/australia-animais/roteiro-narrador.md`, no sha12 que a Sala der no despacho). Nenhum dos dois edita
o roteiro.

## A · O verificador de fatos (o especialista `verificador-de-fatos`, esforço high)

**O que julga:** toda afirmação checável do texto falado do r1, por cobertura e não por amostra (o seu ofício): cada frase com número, data, nome, citação,
atribuição, superlativo, causa ou mecanismo recebe pelo menos uma linha; as frases sem nada checável vão listadas uma a uma no fim (NADA A CHECAR).

**As fontes, nesta ordem:** as cópias locais (`midia/australia-animais/fontes/a/`, `b/`, `c/` e `c/censo/`, com os índices e os sha256 que os leitores
gravaram), a base (`pautas/australia-animais/_trabalho/fatos-a.md`, `fatos-b.md`, `fatos-c.md`, `medida-censo.md`, `medida-b.csv` e os scripts de
`pautas/australia-animais/_trabalho/scripts/`), a pauta v2 (`pautas/2026-11-18-video-8-australia-pauta.md`, §4 e §5, com os graus), o registro
(`pautas/2026-11-18-video-8-australia.md`, "As leituras da Sala") e, quando a cópia local não bastar, a origem na web. **A pauta não é fonte**: ela aponta a
fonte. Na web: o robots.txt antes de cada site, um pedido por vez, o User-Agent do canal (`AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`), e **site que
recusa leitura automática (403, captcha, Cloudflare, verificação de robô) não se contorna**: nem por outro cliente, nem trocando cabeçalho, nem pela cópia
arquivada. O item fica NÃO CONFERIDO, e a Sala lê pelo navegador do app. Os que já recusaram: o NCIS, o AIHW, o Australian Museum, o AVRU, o
`agriculture.vic.gov.au`, o `dpi.nsw.gov.au` e o Museums Victoria.

**As contas:** refaça cada conta nossa por script (a chance de 1 em 3 milhões, os 24 dias da estrada, os 106 por mês, a Índia por habitante, a medida do
Censo, as frações das cobras) e grave as saídas em `roteiros/australia-animais/qc-roteiro/fatos-medidas.txt`, com os scripts ao lado
(`qc-roteiro/fatos-medidas*.py`).

**A saída** (o formato que o `ferramentas/portao-fatos.mjs` lê; leia o topo dele, e use como molde `roteiros/rio-columbia/qc-roteiro/fatos-r1.laudo.md` e
`fatos-tabela-r1.json`):
- `roteiros/australia-animais/qc-roteiro/fatos.laudo.md`, com "Revisão julgada: `<sha12>`", "COBERTURA: N de M", "VEREDITO: …" e a nota; os itens que pedem
  troca, cada um com o peso (GRAVE, MÉDIO, LEVE), o parágrafo, a frase de agora, **a troca em uma frase** (para a Sala aplicar sem reescrever o parágrafo) e
  o porquê com o trecho da fonte; e o que vai à tela (o crédito e a forma de cada número de tela);
- `roteiros/australia-animais/qc-roteiro/fatos-tabela.json`, uma linha por afirmação;
- no fim, rode `node ferramentas/portao-fatos.mjs australia-animais` e diga a saída no laudo.

**O que não é seu:** o estilo, o ritmo e a clareza (isso é do ouvinte); o que os leitores pediram e não é fato.

## B · O ouvinte a frio (um agente Sonnet, esforço xhigh)

**Quem você é:** um espectador que fala inglês, mora fora da Austrália, gosta de vídeos de geografia e nunca viu este texto. Você ouve o roteiro uma vez, na
ordem, parágrafo por parágrafo, sem voltar. **Leia só o `roteiros/australia-animais/roteiro-narrador.md`** (ignore as linhas `>` e as marcas `<!-- -->`); não
leia a pauta, o briefing nem as notas de escrita, e declare qualquer contaminação (o contexto automático da sessão pode trazer mensagens de commits).

**As perguntas:**
1. **Comunica? (0 a 10) Clareza? (0 a 10)** O fio se segue? Onde você se perdeu?
2. **O gancho:** você continuaria depois dos 30 s? Em que frase o polegar pula? **Os três títulos foram pagos, e quando** (minuto e frase)? *Australia's
   Deadliest Snake Isn't Its Most Venomous One*; *Why So Few People Die From Australia's Deadly Animals*; *Why Does Australia Have So Many Dangerous Animals?*.
   E as duas miniaturas ("NOT THE KILLER", com a pílula "INLAND TAIPAN SNAKE"; "10 YEARS OF VENOM DEATHS < 1 MONTH")?
3. **O que os leitores a frio da pauta pediram, e se veio:** quem são os outros 8 mortos; uma régua de fora (poucos comparado a quê?); por que as mortes por
   cobra não são dez vezes mais; os bichos famosos nomeados; a redback; a abelha trazida de fora; as amostras pequenas ditas em voz alta; uma pergunta só no
   fim do gancho; menos números em fila.
4. **O tom:** soa engessado (lista lida, atribuição em série, frases picadas)? É justo com a Austrália (nem "tudo mata", nem "é tudo mito")? Há humor perto das
   mortes?
5. **A inscrição falada** ("subscribe to Alpha Point"): soa natural ali, ou interrompe?
6. **O fecho:** fecha o vídeo, ou só para?
7. **Onde a atenção cai:** as frases (cite-as) em que você se distraiu, e por quê; números em fila; nomes demais; palavras que um não australiano não conhece.

**A saída:** `roteiros/australia-animais/qc-roteiro/ouvinte.laudo.md`, no molde de `roteiros/rio-columbia/qc-roteiro/ouvinte-r1.laudo.md` (leia só a forma
dele): "Revisão julgada: `<sha12>`"; o VEREDITO (APROVA, RESSALVA ou REFAZ) com as duas notas; as respostas; os achados por gravidade (A1, A2…, cada um GRAVE,
MÉDIO ou LEVE, com o parágrafo, a frase e a troca sugerida); as contas por script (palavras, minutos a 179/min, frases, números).

## Para os dois

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push. Não use navegador (nenhuma ferramenta `mcp__claude-in-chrome__*` nem
  `mcp__Claude_Browser__*`), vidIQ, banco pago nem crédito. A trava do Python vale (script só em arquivo, `python -X utf8 -B`; nunca `python -`, heredoc ou
  pipe). O ouvinte não usa a web.
- Escreva só em `roteiros/australia-animais/qc-roteiro/` (os seus arquivos) e, para rascunhos, em `out/_tmp/bancada-australia-animais/`.
- Grave antes de responder, e responda com um resumo curto em português (o veredito, as notas, a cobertura no verificador, os GRAVE e os MÉDIOS em uma linha
  cada).
