# Laudo · conferência do delta da rodada 3 · zona-do-canal

Revisão julgada: `58db12762030` · data-base 2026-10-14

VEREDITO: PASS

O que este laudo julga: só o delta de `d98d50f9c55c` para `58db12762030`, as três trocas de `_trabalho/lista-r3.json`, aplicadas
pela Sala com `ferramentas/aplicar-lista.mjs` (saída em `_trabalho/aplicado-r3.saida.txt`). O resto do texto é idêntico, byte a byte,
ao que as lentes da r2 julgaram; os laudos delas foram renomeados para `qc-roteiro/*-r3-antigo.laudo.md` (roteiro, clareza, locucao,
escuta-fria), porque citam `d98d50f9c55c`. O laudo de fatos (`fatos.laudo.md`) foi posto em dia na mesma tarefa e julga `58db12762030`.

## O portão

`node roteiros/zona-do-canal/_ferramentas/gate.mjs`: PASSA, sha256 do texto falado
`58db12762030ccaf4d5c63ad4a6d81a5449d5dbf3a2daae1795fd7c5bcd50c36`. 2.129 palavras (eram 2.150, o teto: −21), 28 parágrafos, 153
frases (eram 154), média 14, maior 32, gancho com 166 palavras até a assinatura e o "But" na 49ª (intactos), 0 problemas. 20 alertas
de palavra (eram 22: saíram o `citizens` de "they were citizens if a parent…" e o `citizenship` de "left citizenship to the parents");
nenhuma taxa em alerta (abre_so cai de 7 para 6: R3-03 tira um "So", R3-02 tira um e põe outro); autoplágio vazio.

## 1. Só as três frases mudaram, e cada uma é a troca proposta

`diff _trabalho/roteiro-r3.antes.md roteiro-narrador.md`: três linhas, os parágrafos 6, 12 e 16 (p1, p3 e p4). Nada mais mudou.
O `aplicado-r3.saida.txt` diz o mesmo: 3 blocos, 0 frases sem item, as provas de aspas (51 = 51), numerais (sai só o "one" declarado),
parágrafos (28 = 28) e REDIZER passando, e as cópias de antes conferidas pelo sha256.

| item | laudo que pediu | a troca proposta, palavra por palavra | aplicada igual? |
|---|---|---|---|
| R3-01 · REDIZER | `locucao-r3-antigo.laudo.md`, achado 1 (MÉDIO) | "The Zone's 1950 report says its employees on "U.S." rates had to be assigned family quarters before their families got permission to come at all." | sim, literal |
| R3-02 · REDIZER | `clareza-r3-antigo.laudo.md`, C01 (MÉDIO) | "So for the thousand or so residents of Balboa born in the Zone, the answer came from their parents, not from where they were born." (as duas frases por uma) | sim, literal; as duas frases antigas saíram inteiras |
| R3-03 · CORTAR | `roteiro-r3-antigo.laudo.md`, R1 (MÉDIO) | CORTAR "So " → "When Balboa was planned as a permanent town, the plan already had two words in it: "gold" and "silver."" | sim, literal |

**O que está em volta, conferido:**
- **R3-03 (fim de p1).** "From now on, that is the line." / "When Balboa was planned…": sem o "So", a frase não sai mais da Convenção
  de setembro de 1914 (Balboa foi planejada desde 1913, e o relatório de 1914 é anterior à Convenção). O "already" fica preso ao próprio
  plano e diz que ele veio antes. A ponte para p2 continua: "Those two words were payrolls." retoma "two words" e "gold"/"silver".
  "The line" fica só a divisa, como a lista-r2 (L15, L16) quis.
- **R3-01 (p3, 12º parágrafo).** "employees on "U.S." rates" desfaz o particípio que o ouvido fechava como oração ("its employees paid
  at…"); o resto da frase é o mesmo, e as frases seguintes ("Mary and Herbert Knapp…", "The job came first. Then the house. Then the
  family.") não dependem da forma. Fica, igual a antes, o risco de pausa depois do ponto de "U.S."" com as aspas (`pronuncia.md`, a
  linha "U.S." rates, com a reserva sem aspas), e a ressalva do ouvinte a frio de que "U.S." rates aparece antes de explicado (abaixo).
- **R3-02 (p4, 16º parágrafo).** O "So for the thousand…" novo resume e não repete a regra: a regra com a condição está no 14º parágrafo
  ("you were one if your father or mother was a citizen… at the time of your birth"), e a frase nova só a aplica aos nascidos em Balboa,
  sem "the rule was the same" (que pedia uma comparação que não havia). Não contradiz o 14º ("didn't, by itself"): para quem nasceu na
  Zona o lugar é o mesmo, e o que decide são os pais. "the answer" se prende à pergunta do fim de p3 ("in the eyes of American law?"),
  que o 14º abre com "The answer is one sentence of law": o referente é certo e fecha a parte. A frase seguinte continua presa: "The
  sorting was done elsewhere: on the payroll." contrasta "elsewhere" com "their parents" e "where they were born", e "And in 1946,
  Washington asked about it." segue para p5 como antes. O "the law that ran the ground" (o "não sei o que é" da clareza) saiu.
  Observação sem achado: "So for the thousand or so" junta "So" e "or so" na mesma frase; dito, não confunde, e a lente que a propôs a
  mediu no portão.
- **A escala:** nenhum número mudou de valor; o "one" que saiu era pronome ("had been one"). Os 3.139, 1.580 e 1.041 de Balboa, o
  "about half" e o "more than a thousand" do 15º continuam como estavam.

## 2. Os fatos das frases novas

Conferidas contra o dossiê e as cópias locais, como o verificador independente (`.claude/agents/verificador-de-fatos.md`,
`marca/agentes/verificador-de-fatos.md`); o detalhe está em `fatos.laudo.md`, seção "A rodada 3":
- **R3-03:** CONFIRMADA (F027, F027m): "Planning of the permanent town of Balboa" e "the permanent gold site" / "the permanent silver
  settlement" (relatório de 1914, `evt-13`); a contagem das duas palavras (M05).
- **R3-01:** CONFIRMADA (F051, F051b, F051c): a regra está na seção "For U. S.-rate employees" do relatório de 1950, p. 43 (`mec-12`);
  "employees on U.S. rates" é o mesmo grupo, que o relatório chama "Employees Paid at U.S. Rates" (Table 48). Nenhum fato novo.
- **R3-02:** CONFIRMADA (F074, F074m, F075): "the thousand or so" = 1.041 de 3.139 (Table 28, 1960; M12); "came from their parents" =
  8 U.S.C. § 1403(a), o grupo (os nascidos na Zona) e o fato no mesmo trecho; "not from where they were born" = 8 FAM 302.4-2 a., a
  Zona "was never considered part of the United States" para a seção 201 NA / INA 301 (a regra do nascimento no território). Antes de
  1937 a regra geral também ia pelos pais (F069, F070). Sem universal sem fonte, sem ano derivado, sem presente.
- A tabela mudou só nessas linhas (218 linhas, todas confirmadas). `node ferramentas/portao-fatos.mjs zona-do-canal`: **exit 0, PASSA**
  (sha12 58db12762030, igual ao do gate; COBERTURA 218 de 218; VEREDITO PASS; só os avisos de sempre, das 17 linhas conferidas na imagem).

## O que os laudos da r2 deixaram sem aplicar (motivo dado pela Sala)

O motivo que a Sala deu, para todos: são LEVES, ou MÉDIOS do ouvinte a frio que pedem mais texto num roteiro que estava no teto, ou que o
dossiê não sustenta. O total hoje está a 21 palavras do teto: a folga é pouca para os que pedem frase nova.

| laudo (hoje `*-r3-antigo`) | item | gravidade | operação e custo | por que fica |
|---|---|---|---|---|
| locucao | 2 · "That day, seventy-five years after…" → "In 1979, …" | LEVE | DATAR, 0 palavras | LEVE; a própria lente diz que o "seventy-five years after" desfaz a dúvida logo depois |
| locucao | 3 · "Granting that soon" → "Granting it soon" | LEVE | REDIZER, 0 palavras | LEVE |
| clareza | C02 · os centavos de $158.46 e $76.00 na voz | LEVE | REDIZER, +1 palavra | LEVE; os centavos vão à tela de todo modo |
| roteiro | R2 · "It counted where they were born." → "Each counted…" | LEVE | REDIZER, 0 palavras | LEVE |
| roteiro | R3 · os dois "Four" de 1964 (a atribuição na frente) | LEVE (dose) | REORDENAR, 0 palavras | dose; a forma de hoje é a da decisão da Sala (T03) |
| roteiro | R4 · cortar duas costuras ("And in 1946, Washington asked about it." e "And the next fight was about a flag.") | LEVE (dose) | CORTAR, −15 | dose; o próprio crítico diz que o texto não cai se o roteirista as guardar |
| roteiro | R5 · cortar a frase dos comissários de 1939 | LEVE (dose, opcional) | CORTAR, −17 | dose, opcional |
| escuta-fria | (a) as pessoas das cidades "silver" sem nome; nenhuma voz de quem viveu lá | MÉDIO | pede texto novo | o dossiê não sustenta: a voz de época do lado "silver" é um vazio declarado (`fundamento.md`: "Declarado vazio: a voz de época de quem viveu do lado 'silver'… não inventa a experiência") |
| escuta-fria | (b) o parágrafo jurídico da cidadania (15º) difícil de seguir de ouvido | MÉDIO | pede reescrita | pede mais texto ou um pedido ao escritor, com o roteiro no teto; a R3-02 aliviou o fim de p4, não o 15º |
| escuta-fria | (c) o corredor de 1912–1914 (p1) | MÉDIO | pede reescrita | idem: mais texto ou reordenação com o roteiro no teto |
| escuta-fria | (d) a tese "americana sem ser território dos EUA" nunca dita numa frase plana | MÉDIO | pede frase nova | pede texto, e o I01 do dossiê veda o narrador dizer o negativo ou o positivo por conta própria: o par de citações (o FAM e o Art. III) é a forma escolhida |
| escuta-fria | (e) "U.S." rates antes de explicado | MÉDIO | pede texto | a R3-01 mexeu na mesma frase só pelo ouvido (o particípio); explicar a folha em p3 pede palavras que o teto não tinha |
| escuta-fria | as menores: Bunau-Varilla, o porquê de 1979, "wreck", "Nobody…", "never enough", "him" de Vance, a ACP no fim, "Zonian" | — | — | sem gravidade dada; os de fato ("Nobody", "never enough") estão confirmados no laudo de fatos |

Nota: três dos LEVES (locução 2 e 3, roteiro R2) custam 0 palavras; o teto não é o motivo deles, e sim a gravidade. Ficam com a Sala e
com quem escreve, se quiserem uma rodada só de LEVES.

## Conclusão

As três trocas são as propostas, palavra por palavra; nenhuma ponte, escala ou referente quebrou; os fatos fecham nas cópias locais;
os dois portões passam. Os três MÉDIOS que as lentes da r2 pediram com troca pronta estão resolvidos. O que fica aberto é o que a tabela
acima diz, com o motivo da Sala, e não é defeito do delta.
