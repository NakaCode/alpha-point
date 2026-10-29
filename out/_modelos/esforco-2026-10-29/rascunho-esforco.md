# Rascunho: o consumo por esforço (29/10/2026, 10:4x, a Sala)

Pergunta do Lucas: "Qual a média de consumo em cada esforço? Se voltarmos os agentes para High, por exemplo e também a diferença do
controle hoje estar em Máx e não Ultracode".

## De onde vêm os números
- Pasta: `C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/`.
- `extrair-esforco.py` leu os 3.312 `.jsonl` de `C:/Users/zangp/.claude/projects/C--projetos-alpha-point/` (sessões, setores,
  subagentes, workflows) e gravou `consumo-esforco/msgs.csv` (uma linha por resposta, contada uma vez por `message.id` com o maior
  `output_tokens`; 145.327 respostas; corte 13:35Z) e `consumo-esforco/arquivos.json`.
- O esforço é o campo `effort` do topo de cada linha `"type":"assistant"` (há também `perTurnEffort` e `thinkingDurationMs`).
- Preço de tabela por milhão (`out/_modelos/peso.md`, lido em 08/10 na página oficial): Fable 10 / 12,5 / 20 / 0,25 / 50; Opus 4 / 5 / 8 /
  0,20 / 20; Sonnet 2 / 2,5 / 4 / 0,10 / 10 (entrada, escrita 5 min, escrita 1 h, leitura de cache, saída).
- `por-esforco.py` → `consumo-esforco/por-agente.json` (um registro por arquivo: dono, papel, modelo, esforço, n, custo…).
- `sala-e-calibracao.py`, `ultracode-e-dia.py` e `peru-x-atlantico.py` fazem as contas abaixo.
- Quem é quem: `f42bc036…` é a conversa da Sala (conta principal); `6abb9076…` é a Sala na conta reserva; `806a2100…` é a Sala depois
  da limpeza de hoje; `8b49bdf9` Pesquisa, `dd3c4500` Direção, `97895d01` Texto e fatos, `90213555` Arte, `0540596a` Qualidade.
- Os especialistas têm `effort:` no frontmatter (`.claude/agents/*.md`): `mapista` e os `pesquisa-*` em `medium`; os outros em `high`.
  Desde 24/10 o despacho passa `effort: 'xhigh'` (CLAUDE.md, "O esforço em extra").

## As afirmações (numeradas, para conferir)

**C1.** O campo `effort` de cada resposta registra o esforço com que ela rodou (o da sessão, ou o do despacho do agente). Indícios: o
`meta.json` do agente traz o mesmo `effort`; a Sala passa a `max` em 24/10; o `mapista` aparece em `medium` antes de 24/10, como no
frontmatter.

**C2.** Calibração do semanal "all models" em 29/10 (leituras do painel anotadas na memória do vídeo: 01:35 → 3 %, 04:36 → 11 %,
06:4x → 25 %, 07:3x → 28 %, 09:2x → 40 %; e 10:32 → 40 % pelo `get_usage`): das 01:35 às 09:25 BRT foram 37 pontos e US$ 767 a preço de
tabela nas transcrições → **US$ 20,7 por ponto** (intervalos de 19,6 a 24,5). Em 08/10 o levantamento deu US$ 24,7.

**C3.** Em 29/10, das 01:00 às 10:40 BRT, US$ 824 (uns 40 pontos):
- agentes dos setores e da Sala, todos em xhigh: ~85 % (Arte 47 %, Direção 15 %, Texto 12 %, Qualidade 5 %, Pesquisa 3 %, Sala 3 %);
- a conversa da Sala, em max: 5 %; as conversas dos setores, em xhigh: 12 %;
- por papel: mapista (Opus) 26 %, editor-de-arte (Fable) 14 %, verificador-de-fatos 8 %, editor (Opus) 7 %, diretor-de-arte (Fable)
  7 %, regente 5 %, qc-visual (Sonnet) 5 %.

**C4.** A conversa da Sala, por resposta (só Opus): **max** 2.451 respostas, saída média 1.434 tokens (mediana 685), US$ 0,152 por
resposta; **xhigh** 12.312 respostas, saída média 872 (mediana 490), US$ 0,130. Com contexto parecido (150–350 mil): saída +65 %, custo
por resposta +21 %. O contexto relido (~360 mil por resposta) pesa mais que a saída.

**C5.** Passar a Sala de max para xhigh economizaria ~1 % do total (5 % × ~20 %).

**C6.** O mesmo processo dos setores, Peru (19–24/10, esforço do frontmatter) x Atlântico (28–29/10, xhigh), mediana por despacho:

| papel | modelo | Peru (esforço) | Atlântico (xhigh) | saída/resp | resp/despacho | US$/despacho |
|---|---|---|---|---|---|---|
| montador | Opus | high, 6 | 4 | 1.491 → 1.873 | 41 → 40 | 5,12 → 5,31 |
| diretor-de-arte | Fable | high, 7 | 4 | 2.600 → 4.508 | 12 → 18 | 3,88 → 8,55 |
| regente-de-imagem | Opus | high, 13 | 4 | 1.063 → 1.894 | 47 → 82 | 3,92 → 9,87 |
| verificador-de-fatos | Opus | high, 4 | 2 | 1.188 → 1.443 | 84 → 272 | 8,24 → 34,46 |
| editor-de-arte | Fable | high, 16 | 7 | 1.943 → 3.490 | 34 → 40 | 12,13 → 16,44 |
| editor-de-arte | Opus | high, 15 | 4 | 740 → 2.004 | 83 → 102 | 8,43 → 14,09 |
| mapista | Opus | **medium**, 33 | 13 | 811 → 1.523 | 46 → 109 | 4,64 → 16,17 |
| qc-visual | Sonnet | high, 84 | 10 | 1.086 → 1.588 | 35 → 70 | 1,57 → 4,14 |
| conferente-de-midia | Opus | high, 13 | 3 | 1.163 → 1.534 | 40 → 61 | 3,71 → 5,54 |
| pesquisa-imagens | Opus | medium, 3 | 4 | 968 → 1.178 | 53 → 34 | 5,63 → 3,25 |

O contexto por resposta também cresceu (mapista 174 → 328 mil; editor ~232 → ~310 mil; qc-visual 184 → 293 mil).

**C7.** Mas o custo por cena da arte, na 1ª passada do Atlântico (US$ 387 dos agentes da Arte para 57 cenas), não é maior que o do
Peru com os consertos (US$ 514 para 43 cenas). O despacho do Atlântico pode cobrir mais cenas. Então a razão por despacho (~2×)
exagera o efeito, e a razão por resposta (+50–80 % de saída) o subestima.

**C8.** Projeção: com todos os agentes de volta ao high (o mapista e as pesquisas em high, não em medium), o consumo dos agentes cai
~30–50 %, e o total ~25–45 %. Os ~40 pontos de hoje sairiam por ~22–30.

**C9.** Máx e ultracode são eixos diferentes. O esforço é o quanto cada resposta pensa. O ultracode é a orquestração permanente: o
aviso do app dizia "Ultracode is on: optimize for the most exhaustive, correct answer — not the fastest or cheapest. Use the Workflow
tool on every substantive task; token cost is not a constraint", e o esquema das configurações diz "Enable ultracode for the session:
standing dynamic-workflow orchestration at any effort level". Esse aviso aparece na conversa da Sala de 23/09 até 24/10, 14:45 BRT, e não
depois: hoje a Sala está em Máx sem ultracode (o CLAUDE.md ainda diz "O ultracode continua ligado na sessão").

**C10.** O custo do ultracode: os agentes de workflow da Sala custaram, nos dias ativos com ultracode, de US$ 150 a 1.500 por dia
(01/10 US$ 1.129; 08/10 US$ 1.521; 14/10 US$ 545; 22/10 US$ 210), contra US$ 0–321 por dia depois de 24/10. Ligar o ultracode pesa
muito mais que a diferença entre Máx e Extra na conversa da Sala.

**C11.** As conversas dos setores rodam em xhigh desde 12/10 (campo `effort` nas respostas delas), e não em high, como o CLAUDE.md diz
("Os agentes e os setores rodavam em "alto" (high) antes de 24/10").
