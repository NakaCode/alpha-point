# A conferência do consumo por esforço (29/10/2026)

Saída dos três agentes do workflow `conferir-consumo-esforco` (wf_91b9488b-39e), rodado pela Sala em 29/10/2026, às 10:4x,
sobre o `rascunho-esforco.md` desta pasta: um recontador (Sonnet), um cético (Opus) e um leitor da documentação oficial.
Todos em esforço xhigh. Os scripts de cada um estão em `conferencia/`.

## O recontador

Recontei direto dos .jsonl com um script próprio (extrair.py e analisar.py) e todos os números conferem, dentro dos 5 % de tolerância. Li 3.316 arquivos de transcrição (o rascunho tinha 3.312) e 145.427 respostas, contadas uma vez por message.id. Nenhum message.id aparece em mais de um arquivo, então não há dupla contagem entre a Sala e os subagentes. Os modelos são Opus, Sonnet, Fable, 69 '<synthetic>' e 32 Haiku. Os Haiku e os synthetic não caem na janela da conta (b).

(a) C4, a Sala em max e em xhigh, só Opus, nos dois arquivos de topo: bate.
- Em max, são 2.439 respostas (o rascunho dizia 2.451, uma diferença de 0,5 % que não sei explicar), saída média de 1.431 tokens e US$ 0,1516 por resposta.
- Em xhigh, são 12.312 respostas, saída média de 872 tokens e US$ 0,1300 por resposta, idênticos ao rascunho.
- Com contexto de 150 a 350 mil, a saída em max é +64 % (o rascunho dizia +65 %) e o custo por resposta é +20,2 % (o rascunho dizia +21 %).
- Atenção: sem esse filtro de contexto, o custo por resposta é só +16,6 %, porque os dois esforços têm contexto médio quase igual (364 mil). O "+21 %" vale só para o recorte de contexto.

(b) C2, a janela de 04:35Z a 12:25Z de 29/10, todas as respostas: bate.
- O custo é US$ 766,73 (o rascunho dizia 767), e dividido por 37 dá US$ 20,72 por ponto (o rascunho dizia 20,7).
- O 37 vem do painel, que não está nas transcrições e eu não pude conferir. Como o painel só mostra porcentagem inteira, ±1 ponto muda o custo por ponto em cerca de ±2,7 %.

(c) C6, a mediana por despacho no Peru e no Atlântico: bate exatamente nos 12 números. Medianas e contagens de despachos, Peru e Atlântico:
- mapista: 33 e 13 despachos, US$ 4,64 e US$ 16,17;
- editor-de-arte Fable: 16 e 7 despachos, US$ 12,13 e US$ 16,44;
- qc-visual: 84 e 10 despachos, US$ 1,57 e US$ 4,14.
Os esforços das respostas confirmam os rótulos do rascunho: o mapista em medium no Peru e todos os outros em high, e xhigh em todos no Atlântico.

Limites do que fiz: o custo usa só message.usage, sem as iterações do advisor, e os preços informados. Os arquivos estão em C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/conferencia/recontador/. Os principais são extrair.py, analisar.py, checa_max.py e resultado.json.

| Afirmação | Rascunho | Recontado | Bate | Nota |
| --- | --- | --- | --- | --- |
| C4: Sala em max (só Opus), número de respostas | 2.451 | 2.439 | sim | Diferença de 12 (0,5 %). Pelos dois arquivos de topo, contando message.id uma vez, dá 1.447 + 992 = 2.439 ids com effort 'max'. Não sei de onde vêm os 12 do rascunho. Fora da tolerância não está. |
| C4: Sala em max, saída média por resposta (message.usage.output_tokens) | 1.434 tokens (mediana 685) | 1.431 tokens (mediana 684) | sim |  |
| C4: Sala em max, custo médio por resposta (preço de tabela Opus) | US$ 0,152 | US$ 0,1516 | sim | Mediana do custo por resposta: US$ 0,1135. Contexto médio relido: ~364 mil tokens. |
| C4: Sala em xhigh (só Opus), número de respostas | 12.312 | 12.312 | sim | 7.613 no arquivo f42bc036 + 4.699 no 6abb9076. As 15 respostas '<synthetic>' (sem effort) ficaram de fora. |
| C4: Sala em xhigh, saída média por resposta | 872 tokens (mediana 490) | 872,4 tokens (mediana 490) | sim |  |
| C4: Sala em xhigh, custo médio por resposta | US$ 0,130 | US$ 0,1300 | sim | Mediana US$ 0,1043. Contexto médio ~365 mil, igual ao do max (364 mil). |
| C4: com contexto parecido (150–350 mil), max tem saída maior que xhigh | +65 % | +64 % (1.399 contra 853 tokens; 1.077 respostas em max e 5.203 em xhigh) | sim | Sem o filtro de contexto, a saída é +64 % (1.431 contra 872). |
| C4: com contexto parecido (150–350 mil), max custa mais por resposta que xhigh | +21 % | +20,2 % (US$ 0,1272 contra US$ 0,1058) | sim | Sem o filtro de contexto, a diferença é menor: +16,6 % (0,1516 contra 0,1300), porque o contexto médio é quase igual (364 mil nos dois). Só o recorte de 150–350 mil dá +20 %. |
| C2: custo a preço de tabela de todas as respostas (topo e subagentes) de 29/10 das 04:35Z às 12:25Z (01:35 a 09:25 BRT) | US$ 767 | US$ 766,73 | sim | 5.439 respostas: Opus US$ 564,01 (4.434 respostas), Fable US$ 165,04 (360), Sonnet US$ 37,69 (645). Topo US$ 91,63 e subagentes US$ 675,11. Nenhuma resposta ficou sem preço. Mover a janela 1 s nas bordas não muda o valor. |
| C2: custo por ponto do semanal (US$ 766,73 divididos por 37 pontos) | US$ 20,7 por ponto | US$ 20,72 por ponto | sim | A divisão está certa. O 37 vem das leituras do painel (3 % às 01:35, 40 % às 09:2x), que não está nas transcrições e não pude conferir. O painel só mostra porcentagem inteira, então ±1 ponto muda o resultado em cerca de ±2,7 %. |
| C6: mapista (Opus), Peru, despachos e mediana de custo por despacho | 33 despachos, US$ 4,64 | 33 despachos, US$ 4,64 | sim | Esforço medium em todas as 2.184 respostas, como o rascunho diz. Média US$ 8,32. |
| C6: mapista (Opus), Atlântico, despachos e mediana de custo por despacho | 13 despachos, US$ 16,17 | 13 despachos, US$ 16,17 | sim | Esforço xhigh em todas as 1.641 respostas. Mediana de 109 respostas por despacho (46 no Peru). |
| C6: editor-de-arte (só Fable), Peru, despachos e mediana de custo por despacho | 16 despachos, US$ 12,13 | 16 despachos, US$ 12,13 | sim | Esforço high em todas as 630 respostas. Todos os 16 despachos são só Fable. |
| C6: editor-de-arte (só Fable), Atlântico, despachos e mediana de custo por despacho | 7 despachos, US$ 16,44 | 7 despachos, US$ 16,44 | sim | Esforço xhigh em todas as 290 respostas. |
| C6: qc-visual (Sonnet), Peru, despachos e mediana de custo por despacho | 84 despachos, US$ 1,57 | 84 despachos, US$ 1,57 | sim | Esforço high em todas as 3.111 respostas. |
| C6: qc-visual (Sonnet), Atlântico, despachos e mediana de custo por despacho | 10 despachos, US$ 4,14 | 10 despachos, US$ 4,14 | sim | Esforço xhigh em todas as 645 respostas. Mediana de 69,5 respostas por despacho (35 no Peru). |

## O cético

### C1. O campo effort de cada resposta registra o esforço com que ela rodou

**Veredito:** fica

c1.py: perTurnEffort é igual a effort em 100 % das 145.327 respostas, então não serve de prova independente. O meta.json só traz effort em 92 arquivos (os Agent depois de 24/10), e nos 92 o campo bate. Os de workflow nunca o têm. O teste que decide é outro: antes de 24/10 os especialistas aparecem com o esforço do frontmatter (mapista e pesquisas em medium, os outros em high) enquanto a conversa-mãe estava em xhigh (setor) ou max. Portanto o campo não herda o esforço da mãe. Depois de 24/10, um verificador despachado sem effort aparece em high, o que mostra que o campo segue o despacho. Ressalva: o campo é o nível pedido, não o pensamento medido. O pensamento, porém, acompanha: no Opus e no Sonnet ele quase dobra de high para xhigh (c6d.py).

### C2. Calibração: US$ 20,7 por ponto do semanal em 29/10 (contra 24,7 em 08/10)

**Veredito:** fica

c2.py reproduz US$ 767 em 37 pontos entre 01:35 e 09:25. Não há conta reserva nem outro projeto ativo nessa janela: a 6abb9076 parou às 00:xx BRT, e a única pasta de projeto com atividade em 29/10 é a do alpha-point. A memória também tem a leitura das 05:4x (14 %), que o rascunho não usou. Com ela, os intervalos vão de 17,8 a 26,4 por ponto. O arredondamento de ±1 ponto nas pontas dá de 19,7 a 21,9. A diferença para 24,7 vem da mistura de modelos: o cético de 08/10 mediu o Fable a ~2,09× e o Sonnet a ~1,52× o preço de tabela no semanal. Em equivalente Opus (564 + 2,09×165 + 1,52×38 = US$ 967), dá US$ 26,1 por ponto, coerente com 08/10. Por isso a conta em pontos tem de pesar o Fable em dobro.

**Corrigido:** US$ 20,7/ponto em dólar misto (faixa 19,7–21,9); US$ 26/ponto em equivalente Opus. 1 dólar de Fable gasta ~2× os pontos de 1 dólar de Opus

### C3. 29/10 01:00–10:40: US$ 824; agentes ~85 %, Sala 5 %, setores 12 %; mapista 26 %, editor Fable 14 %…

**Veredito:** fica

c3.py reproduz os valores em dólar: agentes xhigh 83,2 %, conversas xhigh 11,4 %, Sala em max 5,4 %. Nenhum agente rodou fora do xhigh nessa janela. Pesados pelo semanal, os números mudam: o editor-de-arte em Fable vira o maior gasto, com 24 % dos pontos contra 20 % do mapista, e o diretor-de-arte (Fable) vai a 11 %. Os agentes ficam com 86,5 % dos pontos, e a conversa da Sala com 4,3 %.

**Corrigido:** Em pontos: agentes 86,5 %, editor Fable 24 %, mapista 20 %, diretor Fable 11 %, Sala (conversa) 4 %, ~42 pontos ponderados

### C4. A Sala por resposta: max 2.451 resp, saída 1.434, US$ 0,152; xhigh 12.312 resp, saída 872, US$ 0,130

**Veredito:** fica

c4.py reproduz as contagens: 1.447 + 992 + 12 respostas em max e 7.613 + 4.699 em xhigh. O pensamento por resposta vai de ~300–330 em xhigh a ~770–850 em max, cerca de 2,5×. O contexto é igual nos dois (~365 mil). Fica um confundidor: em max a Sala coordena os setores, e em xhigh ela operava sob o ultracode, que no app sempre vinha junto com o xhigh (C9). A tarefa não é a mesma nos dois períodos.

### C5. Passar a Sala de max para xhigh economizaria ~1 % do total

**Veredito:** fica

Em 29/10 a conversa da Sala foi 5,4 % do dólar e 4,3 % dos pontos. O custo por resposta cai 15–21 % de max para xhigh. A economia fica entre 0,7 e 1,1 % do total.

**Corrigido:** ~0,7–1 % do total (menos de meio ponto num dia de 40)

### C6. Peru (frontmatter) x Atlântico (xhigh) por despacho: ~2× em vários papéis

**Veredito:** enfraquece

As medianas se reproduzem, mas comparam tarefas diferentes. No Peru, 23 dos 33 despachos do mapista são consertos de 1–2 cenas, com 17–58 respostas, enquanto o Atlântico só tem 1ª construção. O verificador do Atlântico é o laudo-delta (206 itens, cobertura total), e a mediana do Peru inclui os textos de tela. Comparando a mesma tarefa (c6b.py, com as cenas pela regência: Peru 43, Atlântico 67): mapista na 1ª construção US$ 4,65 → 8,42 por cena (+81 %); qc-visual qualidade-1 de mapa US$ 1,53 → 2,28 por cena (+49 %); verificador laudo-delta US$ 0,12 → 0,33 por item (121 → 206 itens, ×2,7); editor na 1ª construção, Fable +6 % e Opus +7 % por cena; regência US$ 0,28 → 0,26 por cena; conceito US$ 0,45 → 0,45 por cena; redator dos textos do vídeo US$ 69,9 → 28,4 (−74 % por cena); pesquisa-imagens, mediana US$ 5,63 → 3,25. Parte do crescimento do contexto é esforço: o pensamento fica no contexto do agente (c6c.py: o contexto cresce pelo menos a saída inteira em 99 % dos pares de respostas seguidas). Pelo cálculo, isso explica ~30 % do salto do mapista (265 → 330 mil); o resto são laços mais longos e pedidos maiores (o gancho, a GEBCO, o crédito a 60 px).

**Corrigido:** Efeito por unidade, na mesma tarefa: de −74 % a +170 %; mediana dos 7 pares ≈ +6 %. Só o mapista, o qc-visual e o verificador sobem muito

### C7. Custo por cena da arte do Atlântico (US$ 387/57) não é maior que o do Peru com consertos (US$ 514/43); a razão por despacho exagera e a por resposta subestima

**Veredito:** enfraquece

A conta compara a 1ª passada de um vídeo com o total do outro, consertos incluídos (no Peru, os consertos custaram ~US$ 300 em cima de US$ 214 da construção). Na 1ª passada dos dois vídeos: Peru US$ 214 para 44 HTML (US$ 4,87 por cena); Atlântico US$ 387 para 57 (US$ 6,78 por cena), +39 %. Desses +39 %, o mapista responde por quase tudo (+81 %), e o editor por +6–7 %. Fica de pé a parte que diz que a razão por despacho (~2×) exagera.

**Corrigido:** 1ª passada da Arte: +39 % por cena (US$ 4,87 → 6,78), e isso é teto: inclui o escopo novo

### C8. Todos os agentes de volta a high: agentes −30–50 %, total −25–45 %; 40 pontos → 22–30

**Veredito:** cai

Piso (c8.py): mesmo número de turnos, com o pensamento na razão high/xhigh medida por papel (Opus ~0,54; Sonnet 0,47; Fable editor 0,69). Entram a saída, a escrita de cache e a leitura do pensamento nos turnos seguintes, porque ele fica no contexto. Resultado: −11 % no custo dos agentes, −9,2 % do total em dólar e −8,9 % em pontos em 29/10. De 24 a 29/10 dá −8,4 %. O piso é baixo porque 62–88 % do custo é contexto, não saída. Teto: supor que todo o aumento por unidade das tarefas comparáveis (C6) é esforço. Mapista +81 % (contando de medium; a high, ~2/3 disso), qc +49 %, verificador ×2,7, editor +6 %, regente, diretor e redator ~0. Pesado pelos pontos de 29/10, isso dá de −16 a −19 % do total. O mapista e as pesquisas vinham em medium, então voltar a high economiza menos neles do que voltar a medium.

**Corrigido:** Total −9 a −19 % (agentes −10 a −22 %); dos ~40 pontos de 29/10 sairiam ~32–36, não 22–30

### C9. Máx e ultracode são eixos diferentes; o aviso aparece na Sala de 23/09 a 24/10 14:45 BRT; hoje a Sala está em Máx sem ultracode

**Veredito:** enfraquece

As datas da Sala estão certas (c9c.py e c9d.py): o último ultra_effort_enter na f42bc036 é de 24/10 às 17:45Z, a troca para max veio às 18:58Z, e depois disso não há mais nenhum aviso. Não existe um ultra_effort_exit gravado na f42bc036. Na reserva, a saída foi às 26/10 18:47:40Z, 5 s antes da primeira resposta em max. O esquema diz 'at any effort level', mas no app as duas coisas andam juntas: toda entrada no ultracode veio com xhigh (os setores passaram de medium a xhigh às 04:00Z de 12/10, no minuto do enter; a Sala, idem em 28/09 e 30/09), e toda saída veio com max. Na prática, a escolha do Lucas é entre 'Ultracode = xhigh + Workflow em toda tarefa' e 'Máx sem Workflow obrigatório'. O ultracode continua LIGADO nos cinco setores: há avisos em 29/10 em todos (Arte às 11:27Z, Qualidade às 10:42Z, Direção às 08:37Z).

### C10. Workflows da Sala com ultracode custaram US$ 150–1.500/dia (01/10 1.129; 08/10 1.521; 14/10 545; 22/10 210) contra 0–321 depois de 24/10

**Veredito:** enfraquece

c10.py mostra que a conta soma as duas contas e soma produção com sobrecarga. O dia 01/10 é quase todo da conta reserva (6abb9076, US$ 1.106), que não pesa no semanal da principal. Em 08/10, US$ 1.317 foram da Sala e US$ 204 da reserva. Antes de 12/10 a Sala rodava ela mesma os especialistas (wf-especialistas US$ 150–207 por dia), e em 08/10 entrou a revisão de espectador com lotes grandes demais (CLAUDE.md, M10: US$ 751 de regravação). Na era dos setores, de 15 a 24/10 e com o ultracode ligado, os agentes gerais da Sala custaram US$ 6–183 por dia. Depois do ultracode desligado, a reserva gastou US$ 302 em 26/10 na bancada do roteiro (W1–W8), que são workflows planejados. A medida direta da sobrecarga está no CLAUDE.md, de 14/10: ~US$ 169 (céticos US$ 95 + versões alternativas US$ 74) de ~US$ 600 no dia. A direção da conclusão se mantém: a sobrecarga do ultracode passa do custo de max contra xhigh na conversa da Sala, que fica em ~US$ 5–10 por dia. Os números do rascunho, porém, estão inflados de 5 a 10×.

**Corrigido:** Sobrecarga do ultracode na Sala: ~US$ 50–180/dia nos dias de trabalho da era dos setores (~28 % do workflow em 14/10), não US$ 150–1.500

### C11. Os setores rodam em xhigh desde 12/10, e não em high como diz o CLAUDE.md

**Veredito:** fica

c11.py: cada setor tem 3 respostas em medium às 03:39–03:41Z de 12/10 e, a partir de 04:00Z, só xhigh: Arte 1.155, Direção 914, Qualidade 747, Texto 741, Pesquisa 393, até 29/10. A causa é o ultracode, ligado às 04:00Z de 12/10 e ainda ligado hoje (C9). O set_session_effort para xhigh em 24/10 não mudou nada. O CLAUDE.md erra nos setores, mas acerta nos especialistas despachados por eles: antes de 24/10, rodaram em high ou medium pelo frontmatter (C1).

### A faixa de economia, se os agentes voltarem ao high

Os agentes de volta a high economizam de 9 a 19 % do consumo total (de 10 a 22 % do consumo dos agentes). Nos ~40 pontos do semanal de 29/10, isso dá de 4 a 8 pontos a menos, e o dia sairia por ~32–36 pontos, não por 22–30. O piso de ~9 % vale com o mesmo número de turnos: é só o pensamento a menos, contando que ele fica no contexto. O teto supõe que todo o aumento por unidade nas tarefas comparáveis é do esforço: mapista +81 % por cena, qc-visual +49 %, verificador ×2,7 por item. Como esse aumento também traz o escopo novo do Atlântico, o efeito real deve ficar mais perto do piso. No Fable, a economia é pequena (~6–7 %): o xhigh quase não muda o pensamento dele. Fora disso, a Sala de max para xhigh tira ~1 %, e os setores fora do ultracode (xhigh → high) ~1 %.

### Outros achados

- O ultracode está LIGADO hoje nos cinco setores: há avisos 'Ultracode is on' em 29/10 em todos eles. Como o regimento proíbe Workflow aos setores e não há nenhuma pasta de workflow neles, o efeito ali se resume ao xhigh da conversa e ao recado 'token cost is not a constraint'. A frase do CLAUDE.md 'O ultracode continua ligado na sessão' vale para os setores, não para a Sala.
- No app, ultracode e Máx são posições do mesmo seletor. Toda entrada no ultracode veio com xhigh, e toda saída com max. Para o Lucas, a diferença real é: o ultracode responde em xhigh (menos pensamento por resposta que o Máx, ~300 contra ~800 tokens) e manda usar Workflow em toda tarefa. O Máx pensa mais por resposta e não obriga a montar equipe.
- O pensamento fica no contexto do agente: em 99 % de 2.318 pares de respostas seguidas, o contexto cresce pelo menos a saída inteira (c6c.py). O esforço custa também em leitura de cache, mas mesmo assim pesa pouco, porque de 62 a 88 % do custo é contexto.
- Na mesma tarefa, o xhigh nem sempre custou mais. Os textos de tela do vídeo custaram US$ 69,9 no Peru (high, 43 cenas) e US$ 28,4 no Atlântico (xhigh, 67 cenas). A regência e o conceito ficaram no mesmo custo por cena, e a pesquisa-imagens ficou mais barata. Quem sobe de verdade é o mapista, o qc-visual e o verificador.
- No Fable, o xhigh quase não aumenta o pensamento. Nas tarefas comparáveis, o editor foi de 1.634 a 1.409 tokens por resposta e o diretor de 2.137 a 1.938. Em todos os despachos, o editor Fable foi de 974 a 1.409 (+45 %), contra ~2× no Opus e no Sonnet. Voltar os agentes Fable a high economiza pouco.
- Um verificador-de-fatos despachado depois de 24/10 rodou em high, sem effort no despacho: a regra do xhigh não pegou em todos.
- A memória tem uma leitura do semanal às 05:4x (14 %) que o rascunho não usou. Com ela, os intervalos vão de US$ 17,8 a 26,4 por ponto.
- Os scripts e as saídas desta conferência estão em C:/Users/zangp/AppData/Local/Temp/claude/C--projetos-alpha-point/806a2100-003e-43df-8f44-a59619def589/scratchpad/conferencia/cetico-esforco/ (c1.py, c2.py, c3.py, c4.py, c6a.py, c6b.py, c6c.py, c6d.py, c8.py, c9.py, c9b.py, c9c.py, c9d.py, c10.py, c11.py).

## A documentação oficial

- **Q1: O que os níveis low, medium, high, xhigh e max mudam?** O esforço controla o raciocínio adaptativo: o modelo decide se e quanto pensar em cada passo, conforme a complexidade. A página indica o uso de cada nível: low para trocas rápidas em que você revisa cada resultado (brainstorming, rascunho, renomear); medium para trabalho sensível a custo que pode abrir mão de alguma inteligência; high para trabalho em que a verificação importa ou há casos-limite; xhigh para raciocínio mais profundo a mais tokens; max para problemas difíceis que você quer que o Claude resolva sem você, com risco de overthinking. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level e Choose an effort level)) Trecho: "Effort levels control adaptive reasoning, which lets the model decide whether and how much to think on each step based on task complexity."
- **Q1: O que muda em chamadas de ferramenta e no tamanho da resposta?** A documentação descreve o efeito em verificação, não em número. Em níveis mais altos o Claude testa mais casos-limite, verifica mais do próprio trabalho antes de responder e toma mais decisões por conta própria; em níveis mais baixos devolve um ponto de partida mais cedo. Não há número de chamadas de ferramenta nem variação de tamanho de resposta por nível. (https://code.claude.com/docs/en/model-config.md (seção Choose an effort level) e https://code.claude.com/docs/en/best-practices.md (seção Change the model and effort)) Trecho: "Claude then checks more edge cases and verifies more of its work before answering, which is where the extra time and tokens go."
- **Q1: Qual o padrão de esforço por modelo (Opus 5.5, Sonnet 5.5, Fable 5.1)?** Regra geral: high em todo modelo que suporta effort, exceto Opus 5.5, Sonnet 5.5 e Haiku 5.5, que usam medium, e Opus 4.7, que usa xhigh. Logo, Opus 5.5 e Sonnet 5.5 têm medium por padrão. Fable 5.1 não aparece nominalmente nas exceções, então cai na regra geral (high); a página não o cita diretamente. Opus 4.6 e Sonnet 4.6 não têm xhigh (no Opus 4.6, xhigh roda como high). A página de melhores práticas diz que o Claude Code inicia com Opus 5.5 em medium na maioria dos planos e provedores. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level, ordem de resolução) e https://code.claude.com/docs/en/best-practices.md (seção Change the model and effort)) Trecho: "`high` on every model that supports effort, except that Opus 5.5, Sonnet 5.5, and Haiku 5.5 default to `medium`, Opus 4.7 defaults to `xhigh`..."
- **Q2: Subagente com effort no frontmatter: o que ele sobrepõe?** O campo effort no frontmatter de um subagente vale enquanto ele estiver ativo e sobrepõe o nível da sessão, mas não a variável de ambiente CLAUDE_CODE_EFFORT_LEVEL. Valores: low, medium, high, xhigh, max; os níveis disponíveis dependem do modelo. (https://code.claude.com/docs/en/sub-agents.md (seções Choose an effort level e Frontmatter reference, linha effort)) Trecho: "Effort level when this subagent is active. Overrides the session effort level, but not the `CLAUDE_CODE_EFFORT_LEVEL` environment variable."
- **Q2: Se o despacho (Agent) passa outro effort, qual vence?** Quando o Claude manda rodar um subagente que não é fork com um nível específico, pode passar um parâmetro effort só para aquela chamada. Esse parâmetro sobrepõe o campo effort do frontmatter e continua valendo quando o subagente é retomado. Exige Claude Code v2.1.292 ou superior. (https://code.claude.com/docs/en/sub-agents.md (seção Choose an effort level)) Trecho: "The parameter overrides the `effort` field and stays in effect when the subagent is resumed."
- **Q2: Ordem completa de precedência para um subagente (Agent)** Pela documentação: (1) CLAUDE_CODE_EFFORT_LEVEL, que vence tudo; (2) o parâmetro effort da chamada; (3) o campo effort do frontmatter; (4) o nível da sessão (/effort, --effort, configurações salvas); (5) o padrão do modelo. Consequência prática: se CLAUDE_CODE_EFFORT_LEVEL estiver definido no ambiente, trocar o frontmatter ou o despacho para high não tem efeito. Um teto (maxEffortLevel) também corta o nível que vier de frontmatter, chamada ou sessão, e vale o teto mais baixo. (https://code.claude.com/docs/en/sub-agents.md; https://code.claude.com/docs/en/model-config.md (seção Adjust effort level, ordem de resolução); https://code.claude.com/docs/en/settings-reference.md (seção Model and responses, maxEffortLevel)) Trecho: "The `CLAUDE_CODE_EFFORT_LEVEL` environment variable takes precedence over both. / Any higher level runs at the cap instead, including one from `/effort`, the `/model` picker, `--effort`, `CLAUDE_CODE_EFFORT_LEVEL`, a skill's or subagent's `effort` frontmatter, or the model's own default."
- **Q2: Workflow (agent()) e o effort de cada agente** A página de workflows não documenta uma opção effort em agent() nem uma ordem de prevalência para o effort dos agentes de workflow. Documenta a ordem de escolha de modelo (parâmetro da chamada, definição, variável de ambiente, modelo da conversa) e diz que agentes com o mesmo modelo, effort e tipo compartilham cache. A documentação do Agent SDK tem effort em Options e em AgentDefinition, sem ordem de prevalência. (https://code.claude.com/docs/en/workflows.md (seções Cost e Prompt caching in a fan-out); https://code.claude.com/docs/en/agent-sdk/typescript.md (tipos Options e AgentDefinition)) Trecho: "effort?: "low" | "medium" | "high" | "xhigh" | "max" | number (AgentDefinition: Reasoning effort level for this agent. Accepts a named level or an integer)"
- **Q3: O que é o ultracode: nível de esforço ou chave à parte?** Ultracode é uma configuração do Claude Code, não um nível de esforço: com ele ligado, o Claude orquestra workflows dinâmicos em tarefas substantivas, no nível de esforço em que a sessão estiver. Ligar ou desligar pelo /effort ou pela chave ultracode não muda o nível. Se a variável CLAUDE_CODE_EFFORT_LEVEL ou um teto definir o nível, o ultracode fica nesse nível. Ele também fica indisponível quando os workflows estão desligados ou o modelo não suporta xhigh. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level); https://code.claude.com/docs/en/workflows.md (seção Let Claude decide with ultracode)) Trecho: "Ultracode is a Claude Code setting rather than a model effort level: with it on, Claude orchestrates dynamic workflows for substantive tasks, at whichever effort level the session runs at."
- **Q3: Como liga e desliga o ultracode?** Liga: /effort ultracode (só nesta sessão); claude --effort ultracode (sobe a sessão para xhigh); a chave ultracode: true em um arquivo de configurações (as sessões começam com ele ligado; o Claude Code lê a chave e nunca a escreve); no slider do /effort, Tab alterna o toggle Ultracode e Enter aplica. Desliga: /effort ultracode off, que exige v2.1.284 ou superior. Antes da v2.1.284, /effort ultracode definia xhigh. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level); https://code.claude.com/docs/en/settings-reference.md (seção Model and responses, ultracode); https://code.claude.com/docs/en/workflows.md (seção Let Claude decide with ultracode)) Trecho: "`/effort ultracode` turns ultracode on for one session without this key, and `/effort ultracode off` turns it off for one session when this key is `true`."
- **Q3: Escolher Máx no seletor de esforço desliga o ultracode?** Não, pela documentação. Escolher um nível no slider do /effort ou no seletor do /model deixa o ultracode como estava. Isso vale a partir da v2.1.284, pois só então o ultracode continua ligado em níveis diferentes de xhigh. Antes dela, escolher outro nível desligava o ultracode. A página do app desktop não repete essa regra: cita o atalho que abre o menu de esforço (Cmd+Shift+E no macOS; no Windows, Ctrl) e não diz nada sobre ultracode no app. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level); https://code.claude.com/docs/en/desktop.md (seção Keyboard shortcuts)) Trecho: "Picking a level in the `/effort` slider or the `/model` picker leaves ultracode as it was. / Cmd Shift E | Open effort menu"
- **Q3: A diferença entre o controle em Máx e o Ultracode (o que muda ao ligar um e outro)** Máx é o nível de raciocínio de cada passo. Ultracode é a configuração que faz o Claude planejar workflows para cada tarefa substantiva, no nível em que a sessão estiver. São independentes: pode haver Máx sem ultracode, ou ultracode em high. Pela documentação, /effort ultracode liga o ultracode e mantém o nível (na v2.1.284 ou superior; antes, o nível sobe para xhigh). Ao contrário, escolher Máx não liga nem desliga o ultracode. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level)) Trecho: "Turning ultracode on or off with `/effort` or the `ultracode` setting leaves the effort level unchanged."
- **Q3: Quanto tempo vale o max?** max é o nível mais profundo. A menos que venha da variável CLAUDE_CODE_EFFORT_LEVEL, ele vale só para a sessão atual. O Enter do slider e o do seletor do /model salvam apenas low, medium, high e xhigh; effortLevel e modelSettings também não aceitam max. Para manter max em todas as sessões, a documentação indica a variável de ambiente. (https://code.claude.com/docs/en/model-config.md (seção Adjust effort level); https://code.claude.com/docs/en/settings-reference.md (seção Model and responses, effortLevel e modelSettings)) Trecho: "`max` is the deepest reasoning level. Unless you set it through the `CLAUDE_CODE_EFFORT_LEVEL` environment variable, Claude Code applies `max` to the current session only."
- **Q3: /clear e a sessão (ponto que afeta quem limpa a conversa)** A página de custos diz que /clear inicia uma nova sessão e zera os totais da sessão. A regra de que max vale só para a sessão atual não diz se ele sobrevive a um /clear; isso não está documentado. (https://code.claude.com/docs/en/costs.md (seção Using the /usage command)) Trecho: "These totals reset when `/clear` starts a new session, so the next session's total cost starts at $0."
- **Q4: Média de consumo do limite do plano por nível de esforço** Não documentado. Nenhuma das páginas lidas dá média, percentual ou tabela de consumo por nível (low, medium, high, xhigh, max). O que a documentação diz é qualitativo: níveis mais altos gastam mais tempo e tokens porque verificam mais; low é mais rápido e barato em tarefas simples; medium reduz o uso de tokens em trabalho sensível a custo; max pode custar mais por uma resposta que não seria melhor do que high. (https://code.claude.com/docs/en/best-practices.md (seção Change the model and effort); https://code.claude.com/docs/en/model-config.md (seção Choose an effort level e Adjust effort level); https://code.claude.com/docs/en/costs.md (seção Adjust extended thinking)) Trecho: "On ordinary tasks it tends to overthink, so you pay more for an answer that may be no better than `high` would have given you."
- **Q4: Consumo do limite com ultracode ligado** Com ultracode, cada pedido usa mais tokens e demora mais do que o mesmo pedido sem workflow. Em plano de assinatura esses tokens contam no limite de uso, então uma sessão com ultracode ligado chega antes ao limite de sessão ou semanal do que o mesmo trabalho com ele desligado. A página não dá número. (https://code.claude.com/docs/en/workflows.md (seção Let Claude decide with ultracode)) Trecho: "On a subscription plan those tokens draw on your usage limits, so a session with ultracode on reaches a session or weekly limit sooner than the same work with it off."
- **Q4: Subagentes e workflows no consumo; como medir** Cada subagente, e cada agente que um workflow dispara, envia as próprias requisições além das da conversa principal. O /usage mostra a participação de skills, subagentes, plugins e servidores MCP no uso do plano e pode recomendar trocas, como uma linha de exemplo 'Switch from max to high effort · /effort high'. A página não separa o consumo por nível de esforço. (https://code.claude.com/docs/en/costs.md (seções Why usage climbs in a long session, Plan usage breakdown e Apply recommendations with the fix shortcut)) Trecho: "every agent a dynamic workflow spawns, sends its own requests on top of the main conversation's."
- **Q4: Plano Max e limites semanais (Fable)** Segundo a página de ajuda do Claude Code com plano Pro ou Max, o Max tem um limite semanal separado para o Fable, e todas as atividades nas duas ferramentas (chat e Claude Code) contam para os mesmos limites. A página não traz tabela nem número por nível de esforço. O trecho abaixo veio pelo WebFetch, que resume a página; confirme a frase exata antes de citar literalmente. (https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan) Trecho: "Max plans also have a separate weekly limit for Fable."
- **Fonte e limites desta resposta** Usei só documentação oficial (code.claude.com e support.claude.com). Os trechos vieram pelo WebFetch, que resume a página: as aspas são o texto devolvido pela ferramenta, não cópia byte a byte. A página do artigo 11014257 (Max plan usage) deu 404. A busca web trouxe apenas blogs de terceiros, que descartei. Não usei navegador nem rodei o regie. (https://code.claude.com/docs/llms.txt (índice das páginas consultadas))

**Não documentado:**

- Média de consumo do limite (tokens ou porcentagem) por nível de esforço, por modelo ou com ultracode: não há número em nenhuma página lida. O que existe é só qualitativo.
- Número de chamadas de ferramenta e tamanho de resposta por nível de esforço: a documentação fala em mais casos-limite testados e mais verificação, sem número.
- Quanto o ultracode aumenta o consumo em número: não documentado.
- Padrão de effort do Fable 5.1 citado nominalmente: não aparece; o valor high vem da regra geral, por inferência.
- Herança do effort quando o frontmatter do subagente não define effort e a chamada não passa parâmetro: a página não diz literalmente. A frase 'Overrides the session effort level' sugere que vale o nível da sessão.
- Subagente em fork: como o effort se resolve não está documentado (o parâmetro por chamada vale só para subagente que não é fork).
- Workflow, agent(): se existe opção effort por agente e como ela se ordena frente ao nível da sessão e à variável de ambiente: não documentado.
- Se o max (ou qualquer nível escolhido com /effort) sobrevive a um /clear, que a página de custos diz iniciar uma nova sessão: não documentado.
- Escolher Máx no seletor do app desktop: a regra 'deixa o ultracode como estava' está escrita para o slider do /effort e o seletor do /model. A página do desktop não a repete, e não diz o que o seletor do app faz com o ultracode.
- Ultracode no app desktop: a página do desktop não documenta o toggle nem o comportamento do ultracode; só menciona o card de aprovação de workflow.
- Multiplicadores de uso dos planos Max 5x e 20x e limites por mensagem: não encontrados em página oficial acessível (o artigo 11014257 deu 404).
