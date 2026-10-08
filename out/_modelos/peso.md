# O peso de cada modelo no uso do plano (08/10/2026)

Levantamento só de leitura. Pergunta do Lucas: dá para mandar etapas ao Sonnet ou ao Haiku e economizar sem perder qualidade? Este arquivo cuida da primeira metade: quanto cada modelo pesa, o que é público, o que é medido neste PC e o que ninguém sabe.

## Resumo

1. **Preço de tabela da API (público, em dólar por milhão de tokens).** Sonnet 5.5 custa exatamente metade do Opus 5.5 em todas as colunas. Haiku 4.5 custa um quarto na entrada, na escrita de cache e na saída, e metade na leitura de cache. Haiku 5.5 custa 1/40 até 100 mil tokens de prompt e 1/8 acima disso. Fable 5.1 custa 2,5 vezes o Opus 5.5 na entrada, na escrita e na saída, e 1,25 vez na leitura de cache.
2. **Peso no plano Max: não publicado.** A Anthropic só diz, sem número, que o Fable gasta o limite mais rápido que os outros e tem barra semanal própria (teto de 50 % do semanal). Para Opus, Sonnet e Haiku só há uma ordem qualitativa (Haiku mais leve, Sonnet moderado, Opus pesado, Fable o mais pesado). Nenhuma página diz "1 token de Sonnet = X tokens de Opus".
3. **Medida deste PC (08/10, Opus 5.5 quase puro).** O semanal "all models" foi de 2 % para 27 % entre duas leituras do painel (15:30:31Z e 19:51:38Z). Nesse intervalo o canal gastou 1.035 milhões de tokens, 93 % deles leitura de cache. Em média, **1 ponto percentual do semanal equivale a cerca de 41 milhões de tokens (faixa 40–43 milhões), a cerca de US$ 24,7 ao preço de tabela, ou a cerca de 162 mil tokens de saída.**
4. **Atenção.** Um segundo evento do mesmo PC (o limite de 5 horas de 08/10, 06:05Z, com Opus, Sonnet e Fable misturados) não bate com "peso proporcional ao preço de tabela". Por isso a economia de trocar para o Sonnet fica entre 0 e 50 % dos pontos, e só um teste controlado fecha a conta (seção 7).
5. **Onde o peso está.** 83,5 % dos 25 pontos foram de um único workflow (`espectador-los-angeles-r3`, 6 revisores e 35 céticos). Mais da metade do custo ao preço de tabela (55 %) é escrita de cache de 5 minutos dos agentes de workflow. O prompt das mensagens medidas tem mediana de 234 mil tokens e máximo de 416 mil, o que afasta o Haiku 4.5 (janela de 200 mil).

---

## 1. Preços da API (público)

Fonte única: página de preços da Claude Platform, lida em 08/10/2026. Endereço consultado: https://docs.anthropic.com/en/docs/about-claude/pricing, que redireciona (301) para **https://platform.claude.com/docs/en/about-claude/pricing**. A página manda conferir também https://claude.com/pricing, e a leitura de claude.com/pricing devolveu os mesmos valores de entrada, saída, leitura e escrita de 5 minutos para Opus 5.5, Fable 5.1, Sonnet 5.5 e Haiku 4.5, e os mesmos de entrada e saída do Haiku 5.5. Os números abaixo são os da linha de cada modelo na tabela "Model pricing" da página; a coluna é a da própria tabela.

| Modelo | Entrada | Escrita de cache 5 min | Escrita de cache 1 h | Leitura de cache | Saída |
|---|---|---|---|---|---|
| Fable 5.1 | US$ 10 | US$ 12,50 | US$ 20 | US$ 0,25 | US$ 50 |
| Opus 5.5 | US$ 4 | US$ 5 | US$ 8 | US$ 0,20 | US$ 20 |
| Sonnet 5.5 | US$ 2 | US$ 2,50 | US$ 4 | US$ 0,10 | US$ 10 |
| Haiku 5.5, prompt até 100 mil tokens | US$ 0,10 | US$ 0,125 | US$ 0,20 | US$ 0,01 | US$ 0,50 |
| Haiku 5.5, prompt acima de 100 mil | US$ 0,50 | US$ 0,625 | US$ 1 | US$ 0,05 | US$ 2,50 |
| Haiku 4.5 | US$ 1 | US$ 1,25 | US$ 2 | US$ 0,10 | US$ 5 |

Pontos da mesma página que importam aqui (paráfrase, mesma URL):
- Na leitura de cache o múltiplo normal é 0,1 vez a entrada, mas o Fable 5.1 usa 0,025 vez e o Opus 5.5 e o Sonnet 5.5 usam 0,05 vez (notas 1 e 2 da tabela e a tabela "Prompt caching"). A escrita de 5 minutos é 1,25 vez a entrada, e a de 1 hora é 2 vezes.
- Os modelos 4.7 em diante usam um tokenizador novo que gera cerca de 30 % mais tokens para o mesmo texto. Sonnet 4.6 e anteriores usam o antigo. O Haiku 4.5 é do tokenizador antigo, então o mesmo texto vira menos tokens nele; esse efeito não foi aplicado nas contas abaixo.
- O modo rápido do Opus 5.5 custa US$ 8 de entrada e US$ 40 de saída por milhão. Nos registros deste PC todo uso é `speed: standard` (ou campo vazio), então não entra.
- Janela de contexto, de https://platform.claude.com/docs/en/build-with-claude/context-windows: Fable 5.1, Opus 5.5, Sonnet 5.5 e Haiku 5.5 têm 1 milhão de tokens; os demais, incluindo o Haiku 4.5, têm 200 mil. A mesma página diz que, no Haiku 5.5, prompt acima de 100 mil tokens custa mais.

### Razão de preço contra o Opus 5.5 (calculada das linhas acima)

| Modelo | Entrada | Escrita 5 min | Escrita 1 h | Leitura de cache | Saída | Na mistura medida (seção 4) |
|---|---|---|---|---|---|---|
| Sonnet 5.5 | 0,50 | 0,50 | 0,50 | 0,50 | 0,50 | **0,500** |
| Haiku 4.5 | 0,25 | 0,25 | 0,25 | 0,50 | 0,25 | **0,328** |
| Haiku 5.5 (até 100 mil) | 0,025 | 0,025 | 0,025 | 0,05 | 0,025 | |
| Haiku 5.5 (acima de 100 mil) | 0,125 | 0,125 | 0,125 | 0,25 | 0,125 | **0,164** (99,8 % das mensagens medidas têm prompt acima de 100 mil) |
| Fable 5.1 | 2,5 | 2,5 | 2,5 | 1,25 | 2,5 | **2,111** |

Isso é razão de **preço de API**, não de peso no plano.

---

## 2. Como o plano conta modelos diferentes (o que a central de ajuda diz)

Páginas lidas em 08/10/2026. Onde há aspas, é citação curta; o resto é paráfrase.

- https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan (artigo de 02/09/2026). No Max, o Fable 5 e o 5.1 estão incluídos; dá para usar até 50 % do limite semanal neles sem custo extra; eles saem do mesmo limite semanal regular e "use them faster than other Claude models". Passado o teto do Fable, é preciso usar créditos de uso ou trocar de modelo. A pergunta frequente do artigo confirma que o Fable não dá 50 % a mais: o uso dos outros modelos tira do mesmo limite, e dá para acompanhar as duas barras nas configurações de uso. Ou seja, o uso de Fable conta na barra "all models" e na barra "Fable".
- https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan. Pro e Max têm limite de sessão de 5 horas e limite semanal; o Max tem um limite semanal separado para o Fable; os limites são compartilhados entre o Claude e o Claude Code. Isso bate com o painel lido neste PC (plano "Max", janelas "5-hour limit", "Weekly · all models" e "Weekly · Fable").
- https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work. O consumo depende do tamanho e da complexidade das conversas, dos recursos usados, do modelo escolhido e do nível de esforço. O artigo **não** diz que modelos diferentes consomem em taxas diferentes e **não** dá número por modelo. Também diz que ferramentas e conectores gastam muitos tokens.
- https://support.claude.com/en/articles/9797557-usage-limit-best-practices. Lista a escolha do modelo e o nível de esforço entre os fatores de uso, e diz que conteúdo em cache pesa menos contra o limite do que conteúdo novo. Não dá fator.
- https://academy.claude.com/tutorials/choosing-the-right-claude-model. Única fonte com ordem relativa entre os quatro: Haiku é o mais leve, Sonnet moderado, Opus pesado e Fable o que mais consome. **Sem nenhum fator numérico.**
- https://code.claude.com/docs/en/costs. Os pedidos de um subagente, e de cada agente de um workflow, contam no uso do plano além do pedido da conversa principal. Para gastar menos, a página manda escolher um modelo menor para o subagente. Sobre o cache: o Claude Code relê o histórico à taxa de cache, e uma pergunta de uma linha numa sessão aberta o dia todo ainda consome pelo histórico inteiro. Isso sugere, sem provar, que o peso da leitura de cache se aproxima do preço de cache.
- https://code.claude.com/docs/en/workflows (seção Cost). O workflow escolhe o modelo de cada agente na mesma ordem do subagente; um modelo nomeado pelo script vale como modelo da invocação, e sem nada o agente roda no modelo da sessão. A página sugere pedir um modelo menor para etapas que não precisam do mais forte.
- https://code.claude.com/docs/en/model-config. Existem os apelidos `fable`, `opus`, `sonnet`, `haiku` e `opusplan`; a variável `CLAUDE_CODE_SUBAGENT_MODEL` define o modelo-padrão de subagentes e de agentes de workflow sem modelo atribuído.

**Não publicado:** o fator de peso de cada modelo no limite do plano (Opus contra Sonnet, Sonnet contra Haiku, Fable contra Opus), o peso de cada tipo de token (leitura de cache, escrita, saída) e o tamanho absoluto do semanal do Max 5x ou 20x. Nada disso foi inventado aqui.

---

## 3. A medida deste PC: método

- **Leituras do painel de uso** (resultado da ferramenta de uso, gravado na conversa principal `f42bc036….jsonl`, linhas 37982 e 38830 contadas a partir de 0). Plano "Max". Às **15:30:31Z** (12:30 em Brasília): limite de 5 horas 4 %, semanal "all models" 2 %, semanal "Fable" 0 %, semanal reinicia em 15/10 02:00Z. Às **19:51:38Z** (16:51): limite de 5 horas 0 % (já reiniciado), semanal "all models" 27 %, semanal "Fable" 0 %.
- **Janela somada: 15:30:31Z a 19:51:38Z**, exatamente entre as duas leituras. A janela pedida na tarefa (15:30Z a 19:55Z) inclui 4 minutos depois da segunda leitura, em que o workflow `espectador-los-angeles-r3` voltou a rodar (o limite de 5 horas tinha reiniciado às 19:50Z) e um `diretor-de-arte` em Fable do levantamento; isso não pode ter entrado nos 27 %. Os dois conjuntos estão na seção 5.
- **O que foi somado:** todo registro `assistant` com `usage` na conversa principal (`f42bc036-….jsonl`) e em todos os `agent-*.jsonl` de `f42bc036-…/subagents/` (inclusive `subagents/workflows/<wf>/`), 96 arquivos com data de modificação dentro da janela. Cada mensagem da API aparece em vários registros (um por bloco de conteúdo); fica um por `message.id`, o de maior `output_tokens`. Não houve mensagem repetida entre arquivos. Nenhuma outra sessão do Claude Code (nenhum outro projeto de `~/.claude/projects`) tem registro na janela.
- **Arredondamento do painel.** Os dois valores são inteiros, então o salto real está entre 24 e 26 pontos. Usei 25 como centro e mostro 24 e 26.
- **Cache.** Agentes de workflow escrevem cache de 5 minutos (68,0 milhões de tokens); a conversa principal escreve de 1 hora (0,54 milhão). Isso confere com a página de workflows, que diz que o cache de agente de workflow dura 5 minutos por padrão.
- **Esforço e raciocínio.** 98,4 % das mensagens de Opus (4.739 de 4.818, janela pedida) rodaram com esforço `xhigh`, e os tokens de raciocínio foram 59 % da saída (2,55 de 4,29 milhões). `iterations` só traz o tipo `message` (sem chamada de "advisor" escondida), e o campo `service_tier` é `standard`, sem o multiplicador de 1,1 vez da residência de dados.

---

## 4. Resultado: o que 25 pontos do semanal custaram

Janela 15:30:31Z a 19:51:38Z. **Todas as 4.449 mensagens foram de Opus 5.5** (60 agentes de workflow ou soltos, mais a conversa principal). Não houve Sonnet, Haiku nem Fable (a barra Fable continuou em 0 %).

| Tipo de token | Total na janela | 1 ponto do semanal (÷ 25) | Faixa (÷ 26 a ÷ 24) |
|---|---|---|---|
| Entrada nova | 8.908 | 356 | 343 a 371 |
| Escrita de cache 5 min | 68.042.448 | 2.721.698 | 2.617.017 a 2.835.102 |
| Escrita de cache 1 h | 540.323 | 21.613 | 20.782 a 22.513 |
| Leitura de cache | 962.750.547 | 38.510.022 | 37.028.867 a 40.114.606 |
| Saída | 4.047.744 | 161.910 | 155.682 a 168.656 |
| **Todos somados** | **1.035.389.970** | **41.415.599** | **39.822.691 a 43.141.249** |

Equivalente em dólar ao preço de tabela do Opus 5.5: **US$ 618,08 no total, US$ 24,72 por ponto** (US$ 23,77 a 25,75). Partes do dólar: escrita de cache 55,7 % (US$ 344,53), leitura de cache 31,2 % (US$ 192,55), saída 13,1 % (US$ 80,95), entrada nova praticamente zero. A taxa de acerto do cache foi 93,3 %.

**Três maneiras de ler "1 %"**, porque o plano não publica o peso de cada tipo de token:
- se todos os tokens pesassem igual: 41,4 milhões por ponto;
- se o plano seguisse o preço de tabela: US$ 24,7 por ponto (escrita de cache US$ 13,8, leitura US$ 7,7, saída US$ 3,2);
- se só a saída contasse: 162 mil tokens de saída por ponto.

Pelo que o painel mostrou, **96 % de uma sessão de 5 horas (entre 15:30:31Z e 16:58:51Z, quando o limite bateu) correspondeu a 25 pontos do semanal: 1 ponto do semanal ≈ 3,8 pontos da sessão, e uma sessão cheia ≈ 26 pontos do semanal**. Nesse ritmo de Opus, a semana cabe em cerca de 3,8 sessões cheias.

### Peso por workflow e fase (mesma janela, pontos a US$ 24,7 cada)

| Workflow / fase | Agentes | Mensagens | US$ de tabela | Pontos do semanal | Prompt mediana / p90 / máx (mil tokens) | Saída (milhões) |
|---|---|---|---|---|---|---|
| `espectador-los-angeles-r3` · Espectador | 6 | 1.975 | 403,7 | 16,3 | 271 / 334 / 416 | 1,41 |
| `espectador-los-angeles-r3` · Cético | 35 | 1.272 | 112,2 | 4,5 | 187 / 244 / 292 | 1,48 |
| `linha-los-angeles-conferir` · Conferir | 7 | 453 | 33,6 | 1,4 | 201 / 263 / 324 | 0,36 |
| `linha-los-angeles-conferir` · Cético | 7 | 403 | 30,8 | 1,2 | 198 / 259 / 305 | 0,34 |
| Conversa principal (Claude central) | 1 | 101 | 11,8 | 0,5 | 268 / 370 / 385 | 0,09 |
| `trilha-los-angeles-cetico` · Cético | 2 | 103 | 9,9 | 0,4 | 214 / 275 / 300 | 0,15 |
| `pesquisa-dados` (solto) | 1 | 79 | 9,1 | 0,4 | 239 / 351 / 370 | 0,11 |
| `general-purpose` (soltos) | 2 | 63 | 7,0 | 0,3 | 205 / 240 / 265 | 0,10 |

Leituras diretas da tabela:
- Seis revisores de espectador fizeram 1.975 mensagens (uns 330 turnos cada) relendo um contexto de ~270 mil tokens: só essa fase pesou 16 pontos, 65 % do episódio.
- O prompt de todas as mensagens tem mediana de 234 mil tokens, p90 de 310 mil e máximo de 416 mil; 3.041 das 4.449 mensagens (68 %) passam de 200 mil. Logo, **o Haiku 4.5 (janela de 200 mil) não comporta esses agentes como estão desenhados**. Sonnet 5.5 e Haiku 5.5 têm janela de 1 milhão.
- O custo está em contexto grande reescrito e relido, mais do que em texto gerado: saída é 13 % do dólar. Reduzir contexto (menos quadros por agente, mais agentes curtos) economiza independentemente do modelo.

---

## 5. Sensibilidade à janela escolhida

| Janela | Mensagens | Tokens (soma de todos) | US$ de tabela | Tokens por ponto (÷ 25) |
|---|---|---|---|---|
| **15:30:31Z a 19:51:38Z (entre as duas leituras, usada acima)** | 4.449 | 1.035.389.970 | 618,08 | 41,4 milhões |
| 15:30:00Z a 19:55:00Z (pedida na tarefa) | 4.826 | 1.093.065.701 | 656,33 | 43,7 milhões |
| 15:40Z a 19:50Z | 3.823 | 911.721.923 | 549,33 | 36,5 milhões |

A janela pedida inclui o Fable do levantamento (8 mensagens, 1,06 milhão de tokens, US$ 3,34) e o retorno do workflow depois das 19:51:38Z. Não há atividade nenhuma entre 17:00Z e 19:50Z.

---

## 6. Conferência cruzada com outros eventos de limite do mesmo PC

Todas as contas por `usage` dos registros, ao preço de tabela de cada modelo. São eventos em que o Claude Code registrou a mensagem de limite atingido.

| Evento | Janela somada | Mistura (US$ de tabela) | Resultado |
|---|---|---|---|
| Limite de 5 h em 08/10 16:58:51Z (a sessão deste levantamento) | 14:50:00Z a 16:58:52Z | Opus US$ 645 (30,1 antes das 15:30:31, 615,3 depois) | 100 % da sessão; calibra: US$ 641 por sessão cheia, US$ 6,4 por ponto de sessão |
| Limite de 5 h em 08/10 06:05:20Z (conversa 6abb9076) | 02:00:00Z a 06:05:20Z | Opus 205,0 + Fable 100,9 + Sonnet 151,2 = US$ 457 | 100 % da sessão. **O preço de tabela prevê só 71 %**, abaixo dos 100 % observados |
| Limite semanal em 08/10 07:08:25Z (6abb9076) | 07/10 01:00Z a 08/10 07:08Z | Opus 1.125,6 + Fable 527,1 + Sonnet 160,7 = US$ 1.813 | 100 % do semanal; dá cerca de US$ 18,1 por ponto, contra US$ 24,7 na medida principal (menos, se o 100 % foi atingido antes das 07:08Z; mais, se há uso fora dos registros) |

Três observações honestas:
1. **O preço de tabela não explica sozinho o evento de 06:05Z.** Se o excesso (US$ 184, 29 %) fosse todo do Sonnet 5.5, ele pesaria 1,1 vez o Opus por token (2,2 vezes o seu preço de tabela). Se fosse todo do Fable 5.1, ele pesaria 2,8 vezes o seu preço de tabela, uns 6 vezes o Opus por token. Também pode haver uso que não está nos registros (outro dispositivo, o app de conversa). Uma só equação não separa as três hipóteses.
2. Os dois pontos de calibração semanal diferem em 36 % (US$ 18,1 contra US$ 24,7 por ponto). A janela semanal de 07/10 tem âncora estranha (a mensagem de limite diz que reinicia em 13/10 às 22h de Brasília, enquanto o painel de 15:30Z dá reinício em 15/10 02:00Z): provavelmente houve reinício ou ajuste da janela entre 07:08Z e 15:30Z, o que explicaria o semanal em 2 % às 15:30Z apesar do limite semanal ter batido de manhã (não confirmado). Por isso a medida usa só a **diferença** entre as duas leituras, e não o acumulado.
3. A medida só vale para um uso dominado por Opus 5.5 com cache de 93 %. Nada nela mede o peso real do Sonnet, do Haiku ou do Fable.

---

## 7. O que isso diz sobre a economia (e o que falta provar)

**Cenário A: o plano pesa pelo preço de tabela.** Aí a economia por ponto movido é a razão da seção 1:
- Sonnet 5.5 no lugar do Opus: −50 % dos pontos daquela etapa. A fase Espectador (16,3 pontos) cairia para 8,2; os céticos do espectador (4,5) para 2,3. Todo o episódio de 25 pontos cairia para 12,5 se tudo fosse ao Sonnet com os mesmos tokens.
- Haiku 5.5: −84 % nas mesmas contas, com o prompt na faixa acima de 100 mil. Haiku 4.5: −67 %, mas só onde o prompt cabe em 200 mil tokens (menos de um terço das mensagens medidas).

**Cenário B: o plano pesa o Sonnet perto do Opus** (o evento de 06:05Z permite essa leitura): economia perto de zero ao trocar Opus por Sonnet.

Entre A e B fica uma faixa de 0 a 50 % para o Sonnet 5.5. Os dados atuais **não escolhem** um cenário. Também não medem qualidade: trocar de modelo muda o número de turnos e de tokens para o mesmo trabalho, e esta análise supõe os mesmos tokens.

**Teste de calibração barato que fecharia a conta** (precisa do ok do Lucas, só vale rodar de propósito):
1. Ler o painel de uso, rodar uma etapa de tamanho conhecido (por exemplo, um lote de revisor ou os céticos de uma cena) em Sonnet 5.5, ler o painel de novo e registrar a diferença do "all models" e da sessão de 5 horas, junto com os tokens do registro.
2. Repetir com a mesma etapa em Opus 5.5 (ou comparar com a medida acima, de US$ 24,7 de tabela por ponto).
3. Fazer o mesmo com Haiku 5.5 em uma etapa curta. Por usar pontos inteiros, o teste precisa de tamanho que mova pelo menos uns 3 pontos para ser lido.

Isto não foi feito: este levantamento é só de leitura e não gastou nada.

---

## 8. Limites desta medida

- O plano é "Max", mas o painel não diz se é 5x ou 20x. Os números são deste PC e desta semana.
- Pode haver uso fora dos registros desta máquina (outro dispositivo, claude.ai, Cowork). Se houve, o "1 ponto" real tem menos tokens que o calculado.
- O painel mostra inteiros; o centro de 25 pontos tem incerteza de ±1.
- Os pesos relativos entre tipos de token (leitura, escrita, saída) não são publicados; as três leituras da seção 4 são hipóteses, e a de preço de tabela é só a que mais se aproxima do que a documentação diz sobre cache.
- Não há dado empírico do Haiku, nem do Fable na janela principal (a barra Fable ficou em 0 %).
- O preço de tabela ignora o efeito do tokenizador antigo do Haiku 4.5 e qualquer desconto de plano.

## 9. Como refazer

Os scripts de leitura que geraram os números estão no diretório temporário da sessão (fora do repositório e podem sumir):
`C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/f42bc036-0fdc-43ca-af3a-3895cd6017bd/scratchpad/` — `soma.py` (soma por mensagem na janela, com deduplicação por `message.id`), `analysis.py`, `final.py`, `calib.py` e `calib2.py` (eventos de limite).
Dados de origem: `C:/Users/zangp/.claude/projects/C--projetos-alpha-point/f42bc036-0fdc-43ca-af3a-3895cd6017bd.jsonl` e `…/f42bc036-…/subagents/`.
