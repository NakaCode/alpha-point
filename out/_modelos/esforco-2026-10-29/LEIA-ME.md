# O consumo por esforço e as voltas mecânicas (29/10/2026)

A medida que a Sala fez em 29/10/2026 para responder ao Lucas:
- quanto consome cada nível de esforço;
- o que muda se os agentes voltarem ao high;
- a Sala em máx contra o ultracode;
- quanto do trabalho dos agentes um script poderia fazer.

Tudo aqui só lê: nada mexe nas conversas. O documento para o Lucas é "Scripts no lugar das voltas mecânicas"
(https://claude.ai/artifact/HRasnQysVLoDBNNpbY88zE).

## Como rodar

Rode da raiz do canal e grave a saída numa pasta **fora do git**: os dados trazem trechos das conversas.

1. `python -X utf8 -B out/_modelos/esforco-2026-10-29/extrair-esforco.py <saida>`
   - Lê todos os `.jsonl` de `C:/Users/zangp/.claude/projects/C--projetos-alpha-point/`: sessões, setores, subagentes e workflows.
   - Grava `<saida>/msgs.csv`, uma linha por resposta com o campo `effort` dela, e `<saida>/arquivos.json`.
   - Cada resposta conta uma vez por `message.id`, com o maior `output_tokens`, como no `out/_modelos/medir-consumo.py`.
2. `python -X utf8 -B out/_modelos/esforco-2026-10-29/por-esforco.py <saida>`
   - Grava `<saida>/por-agente.json`.
   - Imprime o esforço dos agentes por dia e a tabela de papel × modelo × esforço.
3. Os outros scripts leem `<saida>`:
   - `sala-e-calibracao.py <saida>`: a conversa da Sala por esforço, a Sala por dia, a calibração em US$ por ponto do semanal
     (as leituras do painel estão no topo do script) e as marcas do ultracode;
   - `ultracode-e-dia.py <saida>`: os avisos do app sobre o ultracode e o consumo de 29/10 por dono e por papel;
   - `peru-x-atlantico.py <saida>`: o mesmo papel no Peru, no esforço do frontmatter, e no Atlântico, em xhigh;
   - `voltas-por-tarefa.py <saida> [desde-ISO-Z]`: cada volta pela ferramenta que ela chamou;
   - `comandos-por-papel.py <saida> <desde-ISO-Z> <papel,papel>`: os comandos de shell mais comuns de cada papel;
   - `voltas-ate-construir.py <saida> <desde-ISO-Z>`: as voltas e o custo antes da primeira edição do que o agente entrega;
   - `voltas-por-classe.py <saida> <desde-ISO-Z>`: cada volta numa classe (procurar dado da cena, montar quadros, portões,
     construir…), ponderada pelo semanal (Fable ×2,09, Sonnet ×1,52 por dólar);
   - `partes-do-custo.py <saida> <desde-ISO-Z>`: o custo dos agentes em partes (reler, gravar o novo, gravar a largada,
     regravar depois que o cache venceu, a resposta), o prazo do cache (5 min ou 1 h) e a pausa antes de cada regravação;
   - `releitura-fixos.py <saida> <desde-ISO-Z> [chars/token do .md] [chars/token das leituras]`: quanto do custo dos agentes
     é reler texto fixo (o CLAUDE.md que o app põe em todo agente, o ofício, a roupa, a marca);
   - `razao-tokens.py <saida> <desde-ISO-Z>`: quantos caracteres do texto do canal cabem num token (deu uns 2,0 em 86 leituras);
   - `dados-pagina.py <saida> <desde-ISO-Z> <fim do caminho do .jsonl de um agente>`: os dados da página "Dois caminhos para
     a cota" (as seções do CLAUDE.md, as regravações por pausa e a pilha de um agente, volta a volta). Grava
     `pagina-dados.json` na pasta acima de `<saida>`.

Os preços estão escritos nos scripts. São os da tabela de 08/10 (`out/_modelos/peso.md`).

## Os arquivos

- `rascunho-esforco.md`: as 11 afirmações (C1–C11) que a conferência julgou.
- `pagina-dois-caminhos.html`: a página "Dois caminhos para a cota" (https://claude.ai/artifact/KchScGBo3Bq5rpM71QnKzf), que
  compara os scripts com o jeito de hoje com a releitura resolvida. Ela corrige o documento num ponto: o que ele chamava de
  "reler a conversa" são três partes (reler 35 %, gravar 23 % e regravar 11 % do custo dos agentes).
- `conferencia/vereditos.md`: o que disseram o recontador (Sonnet), o cético (Opus) e o leitor da documentação oficial
  (workflow `wf_91b9488b-39e`). Ele é gerado por `conferencia/gerar-vereditos.py` a partir do journal do workflow.
- `conferencia/recontador/`: os scripts do recontador, que refez C2, C4 e C6 direto dos `.jsonl`, e o `resultado.json` dele.
- `conferencia/cetico-esforco/`: os scripts do cético, de `c1.py` a `c11.py`. Eles apontam para a pasta temporária da sessão
  de 29/10: para rodar de novo, troque o caminho no topo.

## O que ficou de fora

Nada disso vai ao git:
- `msgs.csv`, `arquivos.json` e `por-agente.json`: são grandes e trazem trechos das conversas;
- os `c6a-*.json` e os `.txt` do cético: trazem os pedidos dos despachos;
- os `.pkl` do recontador.
