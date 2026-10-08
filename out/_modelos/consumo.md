# Consumo de tokens por agente e por modelo (medição de 08/10/2026)

Medido por leitura dos registros em `C:/Users/zangp/.claude/projects/C--projetos-alpha-point/` (duas sessões: `f42bc036` e `6abb9076`), na foto das **2026-10-08 17:02:58 (Brasília)**. Só leitura; nada do canal foi alterado. A tabela por agente está em `out/_modelos/consumo.csv` (uma linha por agente, mais uma por conversa central); o script que gera tudo é `out/_modelos/medir-consumo.py` (+ `medir-consumo-relatar.py`).

## 1. Leitura rápida

- **1.709 agentes** (subagentes de workflow ou do `Agent`) e **2 conversas centrais**, no período 2026-09-23 13:52 a 2026-10-08 17:02 (Brasília). Chamadas ao modelo: 71.095 nos agentes e 8.240 nas conversas centrais.
- **Total medido: 18,68 bilhões de tokens** processados, dos quais 96,2 % são **leitura de cache** (o mesmo contexto relido a cada volta do agente). Sem a leitura de cache: 702 M (entrada nova 0,22 M + escrita de cache 611 M + saída 91,6 M).
- **Os agentes são 84,4 % do total e o central 15,6 %**. Em saída (o que o modelo escreve), agentes 83,5 M e central 8,0 M.
- Participação de cada modelo nos agentes (total / saída / total sem leitura de cache): Opus 5.5 91,2 % / 88,3 % / 83,3 %; Fable 5.1 3,1 % / 6,5 % / 7,1 %; Sonnet 5.5 5,7 % / 5,2 % / 9,7 %.
- **O que pesa na conta do agente**: (a) cada um começa com ~95 mil tokens de contexto (mediana), relidos a cada volta; (b) 34,4 % da escrita de cache dos agentes são reescritas totais do contexto (leitura de cache < 30 % do contexto), mais 20,4 % na primeira volta; (c) o resto é contexto novo incremental. A saída (o que o modelo escreve) é só 0,5 % do total dos agentes (seção 5.5).
- O "totalTokens" que o painel dos workflows mostra (por exemplo os 10,4 milhões da revisão de espectador de hoje) **não é o consumo real**: é, aproximadamente, a soma do pico de contexto de cada agente (seção 9). Cada volta do agente relê o contexto inteiro, então o consumo real é uma ordem de grandeza maior.

## 2. Método, período e limites

**Como se contou.** Em cada registro `.jsonl`, cada resposta do modelo aparece várias vezes (um registro por bloco de conteúdo, com o mesmo `message.id`); contei **uma vez por `message.id`**, com o maior `output_tokens` visto (o último registro traz a saída final). Colunas:

- **entrada nova** = `input_tokens` (o que não veio de cache);
- **escrita de cache** = `cache_creation_input_tokens` (contexto novo gravado no cache; o CSV traz à parte a fração de 1 hora);
- **leitura de cache** = `cache_read_input_tokens` (contexto relido a cada volta);
- **saída** = `output_tokens`, que **já inclui o pensamento** (`saida_pensamento` é a parte dele);
- **total** = as quatro somadas; **total sem leitura de cache** = entrada + escrita + saída;
- **pico de contexto** = o maior (entrada + escrita + leitura) de uma única volta do agente, isto é, o tamanho da janela de contexto que ele chegou a usar.

**O CSV** (`consumo.csv`, UTF-8, separador vírgula, uma linha por agente e uma por conversa central): `sessao, tipo, agent_id, despacho, workflow_id, workflow, fase, agent_type, rotulo, grupo, familia, subfamilia, modelo, modelos, modelo_pedido, chamadas, entrada_nova, escrita_cache, leitura_cache, saida, saida_pensamento, escrita_cache_1h, total, total_sem_leitura_cache, pico_contexto, contexto_inicial, escrita_cache_inicial, reescritas_cache, escrita_cache_reescritas, primeira_brt, ultima_brt, duracao_min, em_andamento, janela_chamadas, janela_saida, janela_total, janela_total_sem_leitura_cache, arquivo_mb`. `rotulo` é o texto do despacho, `modelo` o que aparece nas mensagens (`modelo_pedido`, o que o despacho pediu, vem vazio quando o agente herda o da sessão), `janela_*` são as mensagens de 08/10 entre 12:30 e o corte, em Brasília.

**Período coberto** (horas em Brasília, UTC-3):

| sessão | primeira (qualquer) | última (qualquer) | primeira da conversa central | última da conversa central | primeira dos agentes | última dos agentes |
| --- | --- | --- | --- | --- | --- | --- |
| 6abb9076 | 2026-09-30 16:48 | 2026-10-08 04:08 | 2026-09-30 16:48 | 2026-10-08 04:02 | 2026-09-30 16:53 | 2026-10-08 04:08 |
| f42bc036 | 2026-09-23 13:52 | 2026-10-08 17:02 | 2026-09-23 13:52 | 2026-10-08 17:01 | 2026-09-23 15:04 | 2026-10-08 17:02 |

A foto foi cortada às 2026-10-08 17:02:58: mensagens depois disso ficam de fora, para a conta ser coerente enquanto outros agentes ainda escrevem. A sessão `f42bc036` é a desta conversa; a `6abb9076` é a do vídeo 2 e do fim do Juneau, parada em 08/10 às 04:08 (limite semanal).

**Em andamento na hora da foto**: 8 agentes tinham mensagem nos últimos 5 minutos (espectador-los-angeles-r3 4, agua-escura-custo 3, diretor-de-arte 1). O consumo deles está parcial e marcado `em_andamento=1` no CSV. Os 3 agentes `medir:*` do workflow `modelos-economia` (esta medição) aparecem no CSV com o grupo "medição desta tarefa" e **ficam fora de todos os totais**: 78 chamadas, 12,5 M no total até o corte.

## 3. Total por modelo

Agentes (sem a medição desta tarefa) e conversas centrais. O modelo é o que consta nas mensagens, não o pedido no despacho.

| linha | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Agentes: Opus 5.5 | 1.437 | 64.608 | 0,13 | 471,9 | 13.833,8 | 73,78 | 14.379,6 | 545,8 | 96,2 % |
| Agentes: Fable 5.1 | 76 | 2.191 | 0,06 | 40,8 | 443,3 | 5,40 | 489,5 | 46,3 | 90,5 % |
| Agentes: Sonnet 5.5 | 185 | 4.296 | 0,01 | 59,0 | 827,4 | 4,35 | 890,7 | 63,4 | 92,9 % |
| Central: Opus 5.5 | 2 | 8.240 | 0,02 | 38,8 | 2.873,3 | 8,03 | 2.920,1 | 46,8 | 98,4 % |
| **Agentes, total** | 1.709 | 71.095 | 0,20 | 571,7 | 15.104,4 | 83,53 | 15.759,9 | 655,5 | 95,8 % |
| **Central, total** | 2 | 8.240 | 0,02 | 38,8 | 2.873,3 | 8,03 | 2.920,1 | 46,8 | 98,4 % |
| **Tudo** | 1.711 | 79.335 | 0,22 | 610,5 | 17.977,7 | 91,56 | 18.680,0 | 702,3 | 96,2 % |

Por sessão:

| linha | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 6abb9076 agentes | 567 | 24.396 | 0,07 | 200,4 | 5.324,2 | 27,67 | 5.552,4 | 228,2 | 95,9 % |
| 6abb9076 central | 1 | 4.123 | 0,01 | 11,9 | 1.492,7 | 3,08 | 1.507,7 | 15,0 | 99,0 % |
| f42bc036 agentes | 1.142 | 46.699 | 0,13 | 371,3 | 9.780,2 | 55,85 | 10.207,5 | 427,3 | 95,8 % |
| f42bc036 central | 1 | 4.117 | 0,01 | 26,8 | 1.380,6 | 4,96 | 1.412,4 | 31,8 | 97,7 % |

## 4. Soma por grupo e por família, com o modelo

"Grupo" é a categoria funcional (as que você listou, mais as que os dados pediram); "família" é o grupo, ou, nos especialistas, o especialista. Um agente entra em uma só família. A regra de classificação, pelo rótulo do despacho, está no apêndice (seção 11) e o rótulo original de cada agente está no CSV, para reclassificar se discordar.

### 4.1 Por grupo (todos os modelos)

| grupo | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| especialista | 388 | 17.376 | 0,09 | 165,4 | 3.933,6 | 22,76 | 4.121,8 | 188,3 | 95,4 % |
| verificador independente | 352 | 14.608 | 0,03 | 73,4 | 3.046,8 | 15,99 | 3.136,2 | 89,4 | 97,1 % |
| conferidor de passo | 197 | 10.073 | 0,02 | 48,9 | 2.110,8 | 10,33 | 2.170,0 | 59,3 | 97,3 % |
| consertos e construção (cena, arquivo, ferramenta) | 131 | 6.765 | 0,01 | 46,2 | 1.615,2 | 9,97 | 1.671,4 | 56,2 | 96,6 % |
| revisor de espectador | 40 | 5.632 | 0,01 | 133,2 | 1.378,3 | 4,22 | 1.515,8 | 137,5 | 90,9 % |
| cético | 286 | 6.875 | 0,01 | 44,8 | 1.213,5 | 7,01 | 1.265,4 | 51,8 | 95,9 % |
| leitor/levantamento | 120 | 6.301 | 0,01 | 28,7 | 1.216,6 | 6,76 | 1.252,1 | 35,5 | 97,2 % |
| juízes, bancas e síntese | 115 | 1.969 | 0,00 | 16,4 | 343,4 | 3,57 | 363,3 | 19,9 | 94,5 % |
| redação (roteiro, pauta, título) | 45 | 1.202 | 0,01 | 10,9 | 208,9 | 2,24 | 222,1 | 13,1 | 94,1 % |
| montagem de lista | 5 | 134 | 0,00 | 1,8 | 25,7 | 0,29 | 27,9 | 2,1 | 92,4 % |
| consertos de texto | 30 | 160 | 0,00 | 2,0 | 11,5 | 0,38 | 13,9 | 2,4 | 83,0 % |
| **agentes, total** | 1.709 | 71.095 | 0,20 | 571,7 | 15.104,4 | 83,53 | 15.759,9 | 655,5 | 95,8 % |

### 4.2 Por família e modelo

| família / modelo | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| verificador independente / Opus 5.5 | 352 | 14.608 | 0,03 | 73,4 | 3.046,8 | 15,99 | 3.136,2 | 89,4 | 97,1 % |
| conferidor de passo / Opus 5.5 | 197 | 10.073 | 0,02 | 48,9 | 2.110,8 | 10,33 | 2.170,0 | 59,3 | 97,3 % |
| consertos e construção (cena, arquivo, ferramenta) / Opus 5.5 | 130 | 6.748 | 0,01 | 45,9 | 1.611,8 | 9,92 | 1.667,7 | 55,9 | 96,7 % |
| consertos e construção (cena, arquivo, ferramenta) / Fable 5.1 | 1 | 17 | 0,00 | 0,3 | 3,4 | 0,05 | 3,7 | 0,3 | 91,6 % |
| revisor de espectador / Opus 5.5 | 40 | 5.632 | 0,01 | 133,2 | 1.378,3 | 4,22 | 1.515,8 | 137,5 | 90,9 % |
| cético / Opus 5.5 | 275 | 6.875 | 0,01 | 44,8 | 1.213,5 | 7,01 | 1.265,4 | 51,8 | 95,9 % |
| cético / (sem chamadas) | 11 | 0 | 0,00 | 0,0 | 0,0 | 0,00 | 0,0 | 0,0 | - |
| leitor/levantamento / Opus 5.5 | 119 | 6.289 | 0,01 | 28,4 | 1.214,4 | 6,69 | 1.249,6 | 35,2 | 97,2 % |
| leitor/levantamento / Fable 5.1 | 1 | 12 | 0,00 | 0,3 | 2,2 | 0,07 | 2,6 | 0,3 | 87,0 % |
| especialista qc-visual / Sonnet 5.5 | 185 | 4.296 | 0,01 | 59,0 | 827,4 | 4,35 | 890,7 | 63,4 | 92,9 % |
| especialista mapista / Opus 5.5 | 19 | 1.959 | 0,00 | 24,4 | 484,0 | 1,92 | 510,3 | 26,3 | 94,8 % |
| especialista montador / Opus 5.5 | 12 | 1.427 | 0,00 | 9,5 | 436,4 | 2,57 | 448,5 | 12,1 | 97,3 % |
| especialista pesquisa-imagens / Opus 5.5 | 12 | 1.311 | 0,00 | 5,7 | 383,4 | 1,36 | 390,5 | 7,1 | 98,2 % |
| juízes, bancas e síntese / Opus 5.5 | 114 | 1.957 | 0,00 | 15,6 | 340,7 | 3,49 | 359,8 | 19,1 | 94,7 % |
| juízes, bancas e síntese / Fable 5.1 | 1 | 12 | 0,00 | 0,7 | 2,7 | 0,08 | 3,5 | 0,8 | 76,5 % |
| especialista conferente-de-midia / Opus 5.5 | 25 | 1.413 | 0,00 | 10,4 | 325,4 | 2,95 | 338,8 | 13,4 | 96,1 % |
| especialista regente-de-imagem / Opus 5.5 | 24 | 1.500 | 0,00 | 7,9 | 320,9 | 1,64 | 330,5 | 9,6 | 97,1 % |
| especialista editor-de-arte / Fable 5.1 | 29 | 1.151 | 0,03 | 20,1 | 253,1 | 2,60 | 275,8 | 22,8 | 91,8 % |
| redação (roteiro, pauta, título) / Opus 5.5 | 34 | 1.096 | 0,00 | 6,0 | 185,9 | 1,63 | 193,5 | 7,6 | 96,1 % |
| redação (roteiro, pauta, título) / Fable 5.1 | 11 | 106 | 0,00 | 4,9 | 23,0 | 0,61 | 28,6 | 5,6 | 80,6 % |
| especialista redator-de-tela / Opus 5.5 | 18 | 983 | 0,00 | 5,0 | 190,1 | 0,72 | 195,9 | 5,7 | 97,1 % |
| especialista diretor-de-arte / Fable 5.1 | 30 | 853 | 0,03 | 13,0 | 150,9 | 1,78 | 165,7 | 14,8 | 91,1 % |
| especialista pesquisa-geo / Opus 5.5 | 7 | 584 | 0,00 | 2,0 | 139,9 | 0,68 | 142,6 | 2,7 | 98,1 % |
| especialista pesquisa-documentos / Opus 5.5 | 6 | 525 | 0,00 | 1,8 | 124,7 | 0,53 | 127,1 | 2,3 | 98,2 % |
| especialista pesquisa-pessoas / Opus 5.5 | 6 | 438 | 0,00 | 1,9 | 102,2 | 0,44 | 104,6 | 2,4 | 97,7 % |
| especialista verificador-de-fatos / Opus 5.5 | 10 | 509 | 0,00 | 2,2 | 96,1 | 0,63 | 99,0 | 2,9 | 97,1 % |
| especialista pesquisa-dados / Opus 5.5 | 3 | 285 | 0,00 | 1,8 | 66,8 | 0,43 | 69,0 | 2,2 | 96,8 % |
| especialista pesquisa-logos / Opus 5.5 | 2 | 142 | 0,00 | 0,5 | 32,2 | 0,17 | 32,9 | 0,7 | 97,8 % |
| montagem de lista / Opus 5.5 | 3 | 106 | 0,00 | 0,8 | 19,9 | 0,16 | 20,8 | 0,9 | 95,6 % |
| montagem de lista / Fable 5.1 | 2 | 28 | 0,00 | 1,1 | 5,9 | 0,13 | 7,1 | 1,2 | 83,0 % |
| consertos de texto / Opus 5.5 | 29 | 148 | 0,00 | 1,5 | 9,5 | 0,30 | 11,3 | 1,8 | 83,9 % |
| consertos de texto / Fable 5.1 | 1 | 12 | 0,00 | 0,5 | 2,0 | 0,08 | 2,6 | 0,5 | 78,9 % |

## 5. As 15 maiores famílias

### 5.1 Por tokens de saída

| # | família | agentes | chamadas | saída (M) | % da saída dos agentes | total (M) | modelos (pela saída) |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | verificador independente | 352 | 14.608 | 15,99 | 19,1 % | 3.136,2 | Opus 5.5 100 % |
| 2 | conferidor de passo | 197 | 10.073 | 10,33 | 12,4 % | 2.170,0 | Opus 5.5 100 % |
| 3 | consertos e construção (cena, arquivo, ferramenta) | 131 | 6.765 | 9,97 | 11,9 % | 1.671,4 | Opus 5.5 100 %, Fable 5.1 <1 % |
| 4 | cético | 286 | 6.875 | 7,01 | 8,4 % | 1.265,4 | Opus 5.5 100 % |
| 5 | leitor/levantamento | 120 | 6.301 | 6,76 | 8,1 % | 1.252,1 | Opus 5.5 99 %, Fable 5.1 1 % |
| 6 | especialista qc-visual | 185 | 4.296 | 4,35 | 5,2 % | 890,7 | Sonnet 5.5 100 % |
| 7 | revisor de espectador | 40 | 5.632 | 4,22 | 5,1 % | 1.515,8 | Opus 5.5 100 % |
| 8 | juízes, bancas e síntese | 115 | 1.969 | 3,57 | 4,3 % | 363,3 | Opus 5.5 98 %, Fable 5.1 2 % |
| 9 | especialista conferente-de-midia | 25 | 1.413 | 2,95 | 3,5 % | 338,8 | Opus 5.5 100 % |
| 10 | especialista editor-de-arte | 29 | 1.151 | 2,60 | 3,1 % | 275,8 | Fable 5.1 100 % |
| 11 | especialista montador | 12 | 1.427 | 2,57 | 3,1 % | 448,5 | Opus 5.5 100 % |
| 12 | redação (roteiro, pauta, título) | 45 | 1.202 | 2,24 | 2,7 % | 222,1 | Opus 5.5 73 %, Fable 5.1 27 % |
| 13 | especialista mapista | 19 | 1.959 | 1,92 | 2,3 % | 510,3 | Opus 5.5 100 % |
| 14 | especialista diretor-de-arte | 30 | 853 | 1,78 | 2,1 % | 165,7 | Fable 5.1 100 % |
| 15 | especialista regente-de-imagem | 24 | 1.500 | 1,64 | 2,0 % | 330,5 | Opus 5.5 100 % |

### 5.2 Por tokens totais

| # | família | agentes | chamadas | total (M) | % do total dos agentes | sem leitura de cache (M) | saída (M) | modelos (pela saída) |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | verificador independente | 352 | 14.608 | 3.136,2 | 19,9 % | 89,4 | 15,99 | Opus 5.5 100 % |
| 2 | conferidor de passo | 197 | 10.073 | 2.170,0 | 13,8 % | 59,3 | 10,33 | Opus 5.5 100 % |
| 3 | consertos e construção (cena, arquivo, ferramenta) | 131 | 6.765 | 1.671,4 | 10,6 % | 56,2 | 9,97 | Opus 5.5 100 %, Fable 5.1 <1 % |
| 4 | revisor de espectador | 40 | 5.632 | 1.515,8 | 9,6 % | 137,5 | 4,22 | Opus 5.5 100 % |
| 5 | cético | 286 | 6.875 | 1.265,4 | 8,0 % | 51,8 | 7,01 | Opus 5.5 100 % |
| 6 | leitor/levantamento | 120 | 6.301 | 1.252,1 | 7,9 % | 35,5 | 6,76 | Opus 5.5 99 %, Fable 5.1 1 % |
| 7 | especialista qc-visual | 185 | 4.296 | 890,7 | 5,7 % | 63,4 | 4,35 | Sonnet 5.5 100 % |
| 8 | especialista mapista | 19 | 1.959 | 510,3 | 3,2 % | 26,3 | 1,92 | Opus 5.5 100 % |
| 9 | especialista montador | 12 | 1.427 | 448,5 | 2,8 % | 12,1 | 2,57 | Opus 5.5 100 % |
| 10 | especialista pesquisa-imagens | 12 | 1.311 | 390,5 | 2,5 % | 7,1 | 1,36 | Opus 5.5 100 % |
| 11 | juízes, bancas e síntese | 115 | 1.969 | 363,3 | 2,3 % | 19,9 | 3,57 | Opus 5.5 98 %, Fable 5.1 2 % |
| 12 | especialista conferente-de-midia | 25 | 1.413 | 338,8 | 2,1 % | 13,4 | 2,95 | Opus 5.5 100 % |
| 13 | especialista regente-de-imagem | 24 | 1.500 | 330,5 | 2,1 % | 9,6 | 1,64 | Opus 5.5 100 % |
| 14 | especialista editor-de-arte | 29 | 1.151 | 275,8 | 1,8 % | 22,8 | 2,60 | Fable 5.1 100 % |
| 15 | redação (roteiro, pauta, título) | 45 | 1.202 | 222,1 | 1,4 % | 13,1 | 2,24 | Opus 5.5 73 %, Fable 5.1 27 % |

### 5.3 Perfil de cada família: tamanho de contexto e de trabalho

O que importa para saber se um modelo menor aguenta o serviço: o **pico de contexto** (a janela que o agente chegou a usar) e quantas voltas ele dá. Valores por agente.

| família | agentes com chamadas | contexto da 1ª volta, mediana (mil) | pico de contexto, mediana (mil) | pico, p90 (mil) | pico > 100 mil | pico > 200 mil | voltas, mediana | voltas, p90 | saída por agente, mediana | saída por agente, p90 |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| verificador independente | 352 | 95 | 221 | 389 | 87,8 % | 56,5 % | 38 | 80 | 37.878 | 91.460 |
| conferidor de passo | 197 | 111 | 251 | 366 | 95,9 % | 73,1 % | 47 | 90 | 47.279 | 90.049 |
| consertos e construção (cena, arquivo, ferramenta) | 131 | 105 | 263 | 435 | 99,2 % | 65,6 % | 50 | 98 | 65.388 | 160.097 |
| revisor de espectador | 40 | 111 | 289 | 346 | 100,0 % | 90,0 % | 84 | 347 | 51.608 | 244.449 |
| cético | 275 | 112 | 159 | 291 | 98,2 % | 31,3 % | 19 | 52 | 13.291 | 60.976 |
| leitor/levantamento | 120 | 60 | 201 | 372 | 90,8 % | 51,7 % | 41 | 120 | 38.887 | 124.162 |
| especialista qc-visual | 185 | 79 | 164 | 218 | 98,4 % | 16,2 % | 14 | 29 | 14.684 | 31.789 |
| especialista mapista | 19 | 76 | 333 | 565 | 94,7 % | 63,2 % | 75 | 227 | 86.438 | 259.794 |
| especialista montador | 12 | 79 | 485 | 561 | 100,0 % | 100,0 % | 84 | 180 | 161.004 | 303.036 |
| especialista pesquisa-imagens | 12 | 80 | 401 | 565 | 100,0 % | 75,0 % | 86 | 236 | 92.932 | 217.841 |
| juízes, bancas e síntese | 115 | 64 | 103 | 278 | 50,4 % | 30,4 % | 6 | 45 | 21.840 | 72.678 |
| especialista conferente-de-midia | 25 | 89 | 232 | 524 | 100,0 % | 72,0 % | 40 | 122 | 61.389 | 334.225 |
| especialista regente-de-imagem | 24 | 68 | 212 | 427 | 79,2 % | 62,5 % | 55 | 114 | 38.331 | 122.587 |
| especialista editor-de-arte | 29 | 82 | 289 | 558 | 100,0 % | 79,3 % | 25 | 83 | 63.801 | 209.823 |
| redação (roteiro, pauta, título) | 45 | 99 | 207 | 358 | 75,6 % | 51,1 % | 12 | 74 | 50.011 | 91.557 |
| especialista redator-de-tela | 18 | 69 | 190 | 365 | 94,4 % | 50,0 % | 45 | 103 | 31.515 | 73.160 |
| especialista diretor-de-arte | 30 | 70 | 228 | 436 | 90,0 % | 70,0 % | 24 | 47 | 50.690 | 119.383 |
| especialista pesquisa-geo | 7 | 67 | 309 | 455 | 85,7 % | 71,4 % | 76 | 146 | 91.388 | 173.734 |
| especialista pesquisa-documentos | 6 | 69 | 311 | 463 | 100,0 % | 83,3 % | 83 | 142 | 88.774 | 146.280 |
| especialista pesquisa-pessoas | 6 | 78 | 283 | 440 | 100,0 % | 83,3 % | 73 | 113 | 75.282 | 124.837 |

### 5.4 Detalhe: as 25 maiores subfamílias (grupo + prefixo do rótulo)

| grupo / prefixo | agentes | chamadas | saída (M) | total (M) | total sem leitura de cache (M) |
| --- | ---: | ---: | ---: | ---: | ---: |
| conferidor de passo / `conferir` | 160 | 8.386 | 8,52 | 1.817,9 | 46,6 |
| verificador independente / `verificar` | 185 | 7.359 | 7,09 | 1.564,4 | 43,8 |
| revisor de espectador / `espectador` | 39 | 5.587 | 4,17 | 1.506,3 | 137,1 |
| cético / `cetico` | 207 | 5.189 | 5,37 | 930,5 | 39,5 |
| leitor/levantamento / `pesquisa` | 22 | 1.986 | 1,61 | 454,3 | 9,2 |
| especialista / `montador` | 12 | 1.427 | 2,57 | 448,5 | 12,1 |
| especialista / `pesquisa-imagens` | 10 | 1.155 | 1,25 | 355,7 | 6,5 |
| especialista / `qc-visual` | 171 | 2.551 | 2,51 | 345,8 | 27,0 |
| especialista / `mapista` | 15 | 1.218 | 1,03 | 295,8 | 13,3 |
| especialista / `qc dos mapas, lote qn` | 3 | 674 | 0,90 | 239,2 | 22,2 |
| consertos e construção (cena, arquivo, ferramenta) / `conserto` | 5 | 588 | 0,91 | 207,2 | 11,7 |
| especialista / `conferente` | 11 | 765 | 2,05 | 199,1 | 8,5 |
| verificador independente / `verificacao` | 5 | 691 | 0,54 | 197,2 | 2,5 |
| consertos e construção (cena, arquivo, ferramenta) / `ferramentas` | 7 | 586 | 0,97 | 196,0 | 4,2 |
| especialista / `mapas, lote mn` | 3 | 666 | 0,80 | 194,7 | 11,4 |
| especialista / `regente` | 16 | 862 | 0,64 | 176,0 | 3,8 |
| consertos e construção (cena, arquivo, ferramenta) / `desenhar` | 12 | 585 | 1,01 | 137,1 | 5,1 |
| especialista / `qc` | 5 | 458 | 0,31 | 131,1 | 10,1 |
| verificador independente / `verifica` | 20 | 862 | 0,97 | 125,0 | 3,7 |
| consertos e construção (cena, arquivo, ferramenta) / `consertar` | 9 | 518 | 0,84 | 119,9 | 3,6 |
| especialista / `diretor` | 19 | 618 | 1,02 | 119,8 | 8,3 |
| verificador independente / `textos-rn` | 8 | 449 | 0,57 | 117,3 | 3,2 |
| especialista / `redator` | 12 | 632 | 0,40 | 114,2 | 2,9 |
| cético / `triagem-cetico` | 5 | 409 | 0,41 | 107,3 | 2,0 |
| consertos e construção (cena, arquivo, ferramenta) / `preparo` | 8 | 487 | 0,57 | 106,7 | 2,7 |

### 5.5 De onde vem a escrita de cache, e o peso do contexto inicial

Dois fatos medidos que explicam por que o total é tão maior que a saída:

1. **Todo agente começa com um contexto grande.** Na primeira volta, a mediana é de 95 mil tokens (instruções do sistema, ferramentas, o `CLAUDE.md` do canal, a lista de skills e o pedido). Esse bloco é relido a cada volta.
2. **O cache é reescrito por inteiro de tempos em tempos.** Chamo de "reescrita" a volta (depois da primeira) em que a leitura de cache é menor que 30 % do contexto: o contexto todo volta a ser gravado como escrita de cache. Isso acontece quando o contexto encolhe no meio da conversa (por exemplo, quando resultados antigos de ferramenta são descartados) ou quando passam uns minutos sem chamada e o cache expira. Não consigo, só pelo `usage`, dizer qual das duas causas foi cada vez; no agente `espectador:lote1` os eventos coincidem com quedas do contexto (ele encolhe, e a leitura de cache cai para o prefixo fixo de ~35 mil tokens).

| grupo | escrita de cache (M) | na 1ª volta | em reescritas totais | incremental (resto) | reescritas por agente (média) | contexto da 1ª volta, mediana (mil) | peso fixo estimado (% do total) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| especialista | 165,4 | 15,1 % | 40,1 % | 44,8 % | 0,6 | 78 | 32,7 % |
| verificador independente | 73,4 | 31,7 % | 1,0 % | 67,3 % | 0,0 | 95 | 43,8 % |
| conferidor de passo | 48,9 | 30,9 % | 10,0 % | 59,0 % | 0,1 | 111 | 50,4 % |
| consertos e construção (cena, arquivo, ferramenta) | 46,2 | 22,6 % | 28,1 % | 49,3 % | 0,3 | 105 | 39,1 % |
| revisor de espectador | 133,2 | 2,7 % | 75,0 % | 22,2 % | 10,8 | 111 | 40,4 % |
| cético | 44,8 | 46,7 % | 4,6 % | 48,7 % | 0,0 | 112 | 59,3 % |
| leitor/levantamento | 28,7 | 21,6 % | 16,2 % | 62,2 % | 0,1 | 60 | 40,1 % |
| juízes, bancas e síntese | 16,4 | 45,5 % | 7,5 % | 47,0 % | 0,1 | 64 | 54,7 % |
| redação (roteiro, pauta, título) | 10,9 | 27,8 % | 28,9 % | 43,3 % | 0,2 | 99 | 48,7 % |
| montagem de lista | 1,8 | 32,0 % | 33,9 % | 34,1 % | 0,4 | 108 | 56,4 % |
| consertos de texto | 2,0 | 44,2 % | 12,9 % | 43,0 % | 0,0 | 57 | 71,7 % |
| **agentes, total** | 571,7 | 20,4 % | 34,4 % | 45,2 % | 0,4 | 95 | 42,3 % |
| **central, total** | 38,8 | 0,3 % | 40,7 % | 59,0 % | 27,0 | 95 | 26,9 % |

Da escrita de cache, a parte com validade de 1 hora (a outra tem 5 minutos): agentes 0,0 %, central 100,0 %. "Peso fixo estimado" = (contexto da 1ª volta × número de voltas) ÷ total do agente, limitado a 100 %: é uma ordem de grandeza do quanto do total é só o contexto inicial sendo relido.

## 6. Quanto o central gastou

A conversa central é a que o Lucas vê (Opus 5.5). Ela também lança os workflows e os agentes, mas o gasto deles está nos agentes, não aqui.

| conversa | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| f42bc036 (Opus 5.5) | 1 | 4.117 | 0,01 | 26,8 | 1.380,6 | 4,96 | 1.412,4 | 31,8 | 97,7 % |
| 6abb9076 (Opus 5.5) | 1 | 4.123 | 0,01 | 11,9 | 1.492,7 | 3,08 | 1.507,7 | 15,0 | 99,0 % |
| **as duas** | 2 | 8.240 | 0,02 | 38,8 | 2.873,3 | 8,03 | 2.920,1 | 46,8 | 98,4 % |

Relação com os agentes: o central fez 10,4 % das chamadas, 8,8 % da saída e 15,6 % do total. Cada chamada do central relê em média 348.695 tokens de cache (contexto longo e único), contra 212.454 nos agentes.

Por dia (Brasília), central e agentes, em milhões de tokens:

| dia | central: chamadas | central: saída | central: sem leitura de cache | central: total | agentes: chamadas | agentes: saída | agentes: sem leitura de cache | agentes: total | central / (central+agentes) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 2026-09-23 | 298 | 0,49 | 2,4 | 98,0 | 3.640 | 4,41 | 18,8 | 594,9 | 14,1 % |
| 2026-09-24 | 743 | 0,76 | 2,6 | 239,7 | 1.812 | 2,18 | 13,9 | 183,3 | 56,7 % |
| 2026-09-25 | 364 | 0,41 | 3,0 | 124,0 | 1.689 | 1,92 | 10,0 | 219,9 | 36,1 % |
| 2026-09-26 | 361 | 0,41 | 1,7 | 120,1 | 4.719 | 6,51 | 34,0 | 1.037,0 | 10,4 % |
| 2026-09-27 | 569 | 0,83 | 4,6 | 209,2 | 6.856 | 9,15 | 42,4 | 1.906,7 | 9,9 % |
| 2026-09-28 | 735 | 0,95 | 4,8 | 254,8 | 3.226 | 5,96 | 28,4 | 791,9 | 24,3 % |
| 2026-09-29 | 275 | 0,21 | 1,6 | 91,6 | 1.538 | 1,79 | 10,9 | 310,1 | 22,8 % |
| 2026-09-30 | 874 | 0,58 | 2,5 | 319,9 | 459 | 0,59 | 4,8 | 84,1 | 79,2 % |
| 2026-10-01 | 1.496 | 1,06 | 4,9 | 551,9 | 13.041 | 13,38 | 81,5 | 2.703,5 | 17,0 % |
| 2026-10-02 | 212 | 0,27 | 2,6 | 72,7 | 4.751 | 5,02 | 64,0 | 1.031,2 | 6,6 % |
| 2026-10-03 | 75 | 0,12 | 1,6 | 27,0 | 4.050 | 4,15 | 40,4 | 864,8 | 3,0 % |
| 2026-10-04 | 58 | 0,09 | 2,0 | 23,3 | 3.424 | 3,89 | 30,8 | 851,4 | 2,7 % |
| 2026-10-05 | 210 | 0,21 | 2,7 | 76,3 | 5.361 | 5,94 | 48,0 | 1.181,0 | 6,1 % |
| 2026-10-06 | 99 | 0,07 | 0,8 | 30,9 | 274 | 0,26 | 2,2 | 40,2 | 43,4 % |
| 2026-10-07 | 1.574 | 1,31 | 6,9 | 576,8 | 8.004 | 11,23 | 77,9 | 1.975,1 | 22,6 % |
| 2026-10-08 | 297 | 0,28 | 2,1 | 104,0 | 8.251 | 7,16 | 147,4 | 1.984,9 | 5,0 % |

## 7. A janela de hoje: 08/10, das 12:30 às 17:02 (Brasília)

É a janela em que o medidor semanal "all models" foi de 2 % para 27 % (12:3x a 16:5x). Só as mensagens dentro dela.

Na janela: **1,18 bilhões** de tokens no total (82 M sem leitura de cache; saída 4,6 M), 5.195 chamadas, 92 agentes com atividade. Central: 3,1 % do total da janela.

| linha | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| agentes: Opus 5.5 | 5.059 | 0,01 | 76,8 | 1.055,6 | 4,47 | 1.136,9 | 81,3 | 92,9 % |
| agentes: Fable 5.1 | 12 | 0,00 | 0,3 | 1,9 | 0,04 | 2,2 | 0,4 | 83,8 % |
| central: Opus 5.5 | 124 | 0,00 | 0,7 | 36,0 | 0,12 | 36,9 | 0,8 | 97,7 % |

Famílias dentro da janela (agentes), por total:

| família | chamadas | saída (M) | sem leitura de cache (M) | total (M) | % do total da janela |
| --- | ---: | ---: | ---: | ---: | ---: |
| revisor de espectador | 2.218 | 1,55 | 62,5 | 597,1 | 50,8 % |
| cético | 2.096 | 2,24 | 14,6 | 388,4 | 33,0 % |
| conferidor de passo | 453 | 0,36 | 2,0 | 91,9 | 7,8 % |
| leitor/levantamento | 150 | 0,09 | 0,8 | 28,9 | 2,5 % |
| especialista pesquisa-dados | 79 | 0,11 | 0,8 | 18,0 | 1,5 % |
| montagem de lista | 63 | 0,10 | 0,6 | 12,7 | 1,1 % |
| especialista diretor-de-arte | 12 | 0,04 | 0,4 | 2,2 | 0,2 % |

Workflows dentro da janela, por total:

| workflow | chamadas | saída (M) | sem leitura de cache (M) | total (M) | % do total da janela |
| --- | ---: | ---: | ---: | ---: | ---: |
| espectador-los-angeles-r3 | 3.808 | 3,30 | 74,4 | 882,5 | 75,0 % |
| linha-los-angeles-conferir | 856 | 0,71 | 4,0 | 172,9 | 14,7 % |
| (Agent direto) | 154 | 0,26 | 1,8 | 32,9 | 2,8 % |
| agua-escura-custo | 150 | 0,09 | 0,8 | 28,9 | 2,5 % |
| trilha-los-angeles-cetico | 103 | 0,15 | 0,7 | 21,9 | 1,9 % |

Por hora de Brasília (agentes e central juntos; a janela abre às 12:30 e fecha no corte):

| hora | chamadas | saída (M) | sem leitura de cache (M) | total (M) | % da janela |
| --- | ---: | ---: | ---: | ---: | ---: |
| 12h | 2.388 | 1,85 | 30,9 | 523,8 | 44,5 % |
| 13h | 2.065 | 2,20 | 41,6 | 512,0 | 43,5 % |
| 14h | 0 | 0,00 | 0,0 | 0,0 | 0,0 % |
| 15h | 0 | 0,00 | 0,0 | 0,0 | 0,0 % |
| 16h | 625 | 0,47 | 8,1 | 109,6 | 9,3 % |
| 17h | 117 | 0,11 | 1,9 | 30,5 | 2,6 % |

**Referência para o medidor semanal** (uma amostra, não uma conversão): nesta janela o "all models" subiu de 2 % para 27 % (25 pontos), e as duas sessões medidas processaram 1,18 bilhões de tokens (82 M sem leitura de cache; 4,6 M de saída). Isso dá, por ponto percentual, cerca de 47 M no total, 3,3 M sem leitura de cache ou 0,19 M de saída. Não sei como o plano pondera cada tipo de token nem o que mais (outras conversas, o claude.ai) subiu o medidor no mesmo período; trate como ordem de grandeza.

## 8. A revisão de espectador de hoje, duas rodadas

| rodada | agentes | chamadas | entrada nova (M) | escrita de cache (M) | leitura de cache (M) | saída (M) | total (M) | total sem leitura de cache (M) | leitura de cache / total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| rodada 1 (12:33 a 13:58) | 41 | 3.247 | 0,01 | 63,0 | 715,4 | 2,88 | 781,3 | 65,9 | 91,6 % |
| rodada 2 (16:51 em diante, em andamento) | 28 | 561 | 0,00 | 8,0 | 92,8 | 0,42 | 101,2 | 8,5 | 91,6 % |

O painel do workflow mostra `totalTokens = 10.384.808` para a rodada 1 (41 agentes), os "~10,4 milhões" citados na pergunta.

Na rodada 1 medi **65,9 M sem leitura de cache** e **781 M no total** (2,88 M de saída), em 3.247 chamadas. Os 6 agentes `espectador:loteN` sozinhos fazem 69,2 % do total da rodada; os 35 céticos, o resto.

| agente | início (BRT) | fim (BRT) | chamadas | saída (M) | escrita de cache (M) | leitura de cache (M) | total (M) | pico de contexto (mil) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| espectador:lote1 | 10-08 12:33 | 10-08 13:46 | 461 | 0,277 | 14,84 | 115,1 | 130,3 | 402 |
| espectador:lote6 | 10-08 12:33 | 10-08 13:21 | 279 | 0,211 | 6,48 | 66,1 | 72,8 | 332 |
| espectador:lote4 | 10-08 12:33 | 10-08 13:58 | 379 | 0,388 | 14,37 | 99,5 | 114,2 | 416 |
| espectador:lote2 | 10-08 12:33 | 10-08 13:13 | 233 | 0,173 | 5,55 | 53,7 | 59,4 | 331 |
| espectador:lote5 | 10-08 12:33 | 10-08 13:19 | 345 | 0,181 | 7,44 | 81,2 | 88,8 | 334 |
| espectador:lote3 | 10-08 12:33 | 10-08 13:17 | 278 | 0,179 | 7,10 | 67,7 | 74,9 | 344 |
| espectador:lote4 | 10-08 16:51 | 10-08 17:02 | 86 | 0,054 | 1,29 | 18,7 | 20,1 | 302 |
| espectador:lote5 | 10-08 16:51 | 10-08 17:02 | 72 | 0,043 | 1,68 | 14,7 | 16,4 | 287 |
| espectador:lote6 | 10-08 16:51 | 10-08 17:02 | 85 | 0,048 | 2,19 | 18,0 | 20,2 | 290 |

## 9. Workflows

### 9.1 Os 15 maiores workflows (e o `Agent` direto) por total

| workflow | sessão | agentes | chamadas | saída (M) | sem leitura de cache (M) | total (M) | o que pesa (grupos) |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| (Agent direto) | 6abb | 52 | 4.514 | 6,36 | 70,2 | 1.233,5 | especialista 100 % |
| (Agent direto) | f42b | 44 | 3.543 | 6,53 | 30,3 | 958,3 | especialista 70 %, leitor/levantamento 19 % |
| espectador-los-angeles-r3 | f42b | 69 | 3.808 | 3,30 | 74,4 | 882,5 | revisor de espectador 68 %, cético 32 % |
| juneau-research-acervo | f42b | 21 | 2.150 | 2,61 | 11,6 | 597,4 | especialista 42 %, verificador independente 36 % |
| video2-dossie-los-angeles | 6abb | 12 | 1.723 | 1,68 | 9,7 | 518,1 | leitor/levantamento 53 %, verificador independente 38 % |
| juneau-ajustes-revisao-4 | f42b | 27 | 1.791 | 1,50 | 37,6 | 512,7 | revisor de espectador 72 %, especialista 18 % |
| juneau-5c-portoes-do-mapa-e-consertos | f42b | 41 | 2.015 | 2,28 | 16,3 | 500,0 | consertos e construção (cena, arquivo, ferramenta) 39 %, especialista 35 % |
| juneau-5b-portoes-com-chave | f42b | 41 | 2.110 | 2,21 | 17,0 | 486,4 | especialista 42 %, conferidor de passo 22 % |
| juneau-marcas-linha-do-tempo | f42b | 34 | 1.765 | 1,82 | 20,9 | 410,8 | especialista 59 %, revisor de espectador 24 % |
| instalar-especialistas | f42b | 16 | 1.297 | 1,42 | 6,5 | 319,9 | verificador independente 48 %, leitor/levantamento 37 % |
| juneau-5d-cores-e-fecho | f42b | 23 | 1.303 | 1,37 | 13,6 | 314,5 | especialista 40 %, conferidor de passo 20 % |
| juneau-research-ano-da-foto | f42b | 8 | 921 | 1,14 | 5,4 | 287,4 | especialista 67 %, verificador independente 27 % |
| espectador-los-angeles | 6abb | 44 | 1.270 | 0,72 | 20,5 | 271,8 | revisor de espectador 90 %, cético 10 % |
| juneau-espelho-fechar | f42b | 11 | 957 | 1,12 | 5,3 | 267,8 | verificador independente 59 %, especialista 41 % |
| juneau-conferencia-render | 6abb | 14 | 1.015 | 0,76 | 4,3 | 226,3 | conferidor de passo 70 %, verificador independente 30 % |

### 9.2 O que o "totalTokens" do painel mede

Comparei o `totalTokens` do JSON de cada workflow concluído (159 workflows em que o número de agentes no disco bate com o do JSON) com três somas dos meus números:

- contra a **soma do pico de contexto** de cada agente: razão mediana **1,00** (p10 1,00, p90 1,00);
- contra a soma de entrada + escrita + saída: razão mediana 0,88 (p10 0,54, p90 1,10);
- contra o total com leitura de cache: razão mediana 0,031 (p10 0,018, p90 0,079).

Ou seja, o `totalTokens` acompanha o tamanho da janela que cada agente alcançou, não o que foi processado ao longo das voltas. Serve para comparar workflows entre si, não para estimar o consumo contra o limite do plano.

## 10. O que não deu para atribuir, e outros limites

- **Agentes sem nenhuma resposta registrada**: 11; 0 deles começaram nos 10 minutos antes do corte (ainda não tinham respondido), os outros 11 foram interrompidos antes da primeira volta. Estão no CSV com zeros.
- **Agentes sem `meta.json`**: 0.
- **Workflows sem JSON de resultado** (ainda rodando na foto): 1; o nome vem do arquivo do script. O consumo deles é parcial.
- **Workflow com duas rodadas na mesma pasta** (`espectador-los-angeles-r3`): os agentes das duas rodadas aparecem juntos; separei na seção 8 pela hora de início.
- **A conversa central não se divide por tarefa**: o `.jsonl` principal é um bloco só, então o gasto dela por tipo de trabalho (escrever roteiro, orquestrar, responder ao Lucas) não é atribuível sem ler o conteúdo turno a turno. Fica como "central".
- **Os tokens de saída incluem o pensamento** e o `usage` não separa o que foi texto do que foi uso de ferramenta; `saida_pensamento` no CSV é a parte do pensamento onde o registro a traz.
- **O que o `usage` não diz**: como o plano Max pondera cada tipo de token (leitura de cache, escrita, saída, e cada modelo) contra os limites de 5 horas e semanal. As colunas estão separadas justamente para isso; este documento **não** converte tokens em porcentagem do limite.
- **Não coberto**: as outras sessões da pasta do projeto (`8775ef82`, `89efa900` e as de 28/09 a 01/10, que não eram o alvo) e os outros projetos do `~/.claude/projects`, que também contam no medidor semanal "all models". Para a janela de 08/10 isso não muda a leitura: nenhum outro `.jsonl` dessa pasta recebeu mensagem depois das 12:30 de hoje (só a `f42bc036`, com seus subagentes). O que **não dá para ver** por aqui é o uso fora do Claude Code (conversa do claude.ai e do app, Claude in Chrome), que também sobe o medidor.
- **Agentes aninhados**: todos os `meta.json` têm `spawnDepth` 1; não há subagente de subagente a somar.

## 11. Apêndice: regra de classificação

Pelo `agentType` e pelo prefixo do rótulo do despacho (o texto antes do primeiro `:`), nesta ordem:

1. `agentType` de especialista (diretor-de-arte, editor-de-arte, mapista, qc-visual, redator-de-tela, regente-de-imagem, verificador-de-fatos, montador, pesquisa-*, conferente-de-midia) → **especialista <id>**. Inclui agente geral ou de workflow cujo rótulo é o nome do especialista ("Diretor de arte: …", "Pesquisa-imagens: …", "Montador: …", "Regente: …", "Conferente: …").
2. `espectador*`, "Viewer review" → **revisor de espectador**.
3. `cetico*`, `cético`, `critico`/`criticar`, `skeptic`, `triagem-cetico`, `refutar`, `contestar`, `achar`, e `pre-carga`/`portao-mapa` com "cetico" no rótulo → **cético**.
4. `lista*`, "Montar lista…", "Aplicar consertos da lista…" → **montagem de lista**.
5. `conferir*`, `conferencia*`, `conferente*`, `portoes*`, `triagem*`/`triar*`, `gate*`, `pre-carga*`, `portao-mapa*` (os que não são céticos) → **conferidor de passo**.
6. `verificar*`, `verifica*`, `verificador*`, `fatos*`, `completude`, `auditoria`, `revisar*`/`revisa*`/`rev`, e os verificadores despachados como agente geral (`textos*`, `regencia*`, `curto*`, `fecho*`, `conceito*`, `final*`), `rN`/`bN` com "fatos" → **verificador independente** (`revisao*` nos workflows de roteiro → juízes).
7. `redator`/`editor`/`polidor`/`enxugador`/`correcao` e `conserto*`/`consertar*`/`corrigir*`/`ajustar*`/`aplicar*`, quando o workflow é de texto (nome com roteiro, reescrita, enxugar, polir, conversa, textos, título, pronúncia) → **consertos de texto**; fora de workflow de texto → **consertos e construção**.
8. `parte`, `plano`, `escrita`, `gancho`, `viab*`, `propostas`, `titulos`, `gerador`, `ideias`, `rascunho`, `versao-final`, `redator-da-marca`, `desenhar` → **redação**.
9. `julgar`, `juiz`, `juri`, `banca*`, `bancada*`, `compara*`, `lente`, `leitura`, `leitor`, `prova`, `sintese`/`sintetizar`, `rN`/`bN` restantes → **juízes, bancas e síntese**.
10. `ler`, `levantar`/`levanta`, `entender`, `pesquisa`, `mapa`, `repo`, `motor`, `oficios`, `roupas`, `dossie`, `buscar`, acervos e documentação → **leitor/levantamento**.
11. `refazer`, `maquete`, `render`, `preparo`/`preparar`, `construir`/`construtor`, `fazer`, `ferramenta*`, `instalar`, `gravar`, `registrar`, `fechar`, `piloto` → **consertos e construção**.
12. O resto → **outros**.

