# Laudo · verificador de fatos · rodada da F132 (28/10/2026), por diff · atlantico-fundo

Revisão julgada: `ddd4567309e3` · data-base 2026-10-28 (a conferência anterior, agora `fatos-r3c.laudo.md`, julgou `7b965eecdb7c`. Depois, a reverificação da F132 refutou a 1ª frase do §15, o Lucas mandou corrigir, com "Corrigir a frase (Recomendado)", em 28/10, às 15:0x, e a Sala trocou a frase)

COBERTURA: 285 de 285 linhas da tabela com veredito "confirmada" (afirmações checáveis em 145 das 154 frases do texto falado; as outras 9 não afirmam nada checável e são as mesmas das rodadas anteriores, declaradas abaixo). A única frase mudada, a 1ª do §15, foi CHECADA POR INTEIRO nesta rodada, com as 5 linhas dela (F132 a F136), e o §15 inteiro (F137 a F141) foi relido no contexto novo. As outras 153 frases são idênticas, caractere por caractere, às que a rodada anterior julgou, e as linhas delas vêm de lá pelo diff, byte a byte. Nenhuma linha entrou nem saiu: continuam 285. Nenhuma linha ficou sem veredito.

- **O que foi julgado:** o texto falado inteiro de `roteiros/atlantico-fundo/roteiro-narrador.md` (arquivo `ca4ac18db548…`), com sha256 do texto falado `ddd4567309e3ed8fdd354ef283c930a8eaa3e6952440d9bc3d60b42c47e11d14`.
  - `node roteiros/atlantico-fundo/_ferramentas/gate.mjs`, rodado antes de tudo: exit 0, PASSA, 0 problemas, autoplágio vazio, todas as taxas abaixo do teto.
  - As medidas: 1.954 palavras (≈ 10,62 min a 184 por minuto; o piso é 1.950), 28 parágrafos, 154 frases, média de 12,7 palavras por frase, maior frase com 28, gancho com 166 palavras até a assinatura e o "But" na 49ª.
  - Os 8 alertas são os de antes, idênticos na saída do gate ("never" ×2, "first" ×2, "Milwaukee Deep" ×3 e o "still" do gancho). Nenhum cai na frase mudada.
- **O diff, conferido por este verificador e não pelo relato:** o texto de antes é o `git show HEAD:roteiros/atlantico-fundo/roteiro-narrador.md`. É o arquivo `61f500f3e810…`, o mesmo que a rodada anterior julgou, e o texto falado dele dá `7b965eecdb7c`, recalculado aqui pelo próprio `gate.mjs`. Contra o texto de hoje (`ddd4567309e3`):
  - o `diff` dos dois arquivos muda uma linha só, a 50 (o 15º parágrafo falado);
  - o `git diff --word-diff` dá uma troca só, `filmed` → `descended along`. A frase "In 2015, a NOAA robot filmed the trench's south wall, almost 20,000 feet down." virou "In 2015, a NOAA robot descended along the trench's south wall, almost 20,000 feet down.";
  - os outros 27 parágrafos são idênticos, e no 15º as outras 3 frases também. Continuam 28 parágrafos e 154 frases, com uma palavra a mais (1.953 → 1.954);
  - é a troca que o Lucas aprovou ("Troco só esse trecho, para dizer que o robô desceu quase 20.000 pés junto à parede sul, sem dizer que a filmou"; `decisoes-lucas.md`, "Depois da pesquisa"), e nada mais.
- **A tabela:**
  - a de antes é a do HEAD (sha256 `0bd310f489ea…`), saída do mesmo commit `4783c03` que o laudo da rodada anterior e o roteiro que ele julgou;
  - a de hoje (`1aa0713f3d4d…`), pelo `git diff`, difere só nas F132 a F136: a `frase` das cinco, que é a nova, a `afirmacao` da F132 e o campo `reverificacao` na F132 e na F134;
  - trecho, fonte, arquivo, classe e veredito das cinco ficam como estavam. A frase velha não sobra em linha nenhuma.
- **Contra o quê:** o dossiê `pautas/atlantico-fundo/fundamento.json` (F68, já posto em dia pela Sala) como mapa, e a cópia local de cada fonte como prova:
  - o resumo oficial do mergulho (S32, `midia/atlantico-fundo/fontes/fa-noaa-ir-21287-ex1502l3-dive09.txt`);
  - o relatório da expedição (S33, `midia/atlantico-fundo/fontes/fa-noaa-ir-10424-ex1502l3-relatorio.txt`);
  - a página dos mergulhos na NCEI (S35, `midia/atlantico-fundo/fontes/fa-ncei-waf-ex1502l3.txt`).

  A prova inteira de cada trecho está em `f132-reverificacao-2026-10-28.laudo.md`, nesta pasta. **Rede: não usei.**

NOTA: 9.6/10 · sem regressão no texto.
- A frase nova diz menos que a antiga, e tudo o que diz está nas fontes, até o verbo ("As the ROV descended and reached 6,000 m", S33).
- Uma correção honesta sobre a rodada anterior: a 9.6 da r3c não via a F132. Medida com o que se sabe hoje, a revisão `7b965eecdb7c` teria saído FAIL, com uma REFUTADA (`f132-reverificacao-2026-10-28.laudo.md`).
- Não chega a 10 pelos mesmos apoios leves das rodadas anteriores (O1–O4, O6–O8, O12 e O13, que continuam) e pela O15, nova, que é anotação da tabela e não da voz.

## O que foi checado nesta rodada, e o que veio da anterior pelo diff

| | o quê | como |
|---|---|---|
| checado agora | a 1ª frase do §15 ("…descended along the trench's south wall, almost 20,000 feet down."), elemento por elemento | contra a cópia local de S32, S33 e S35 (abaixo); 5 linhas, todas confirmadas |
| relido agora | o §15 inteiro, com a frase nova no lugar: "That's a long way east of its deepest point." (F137), "The robot, Deep Discoverer, worked from the ship Okeanos Explorer, on one of a dozen dives it made on that voyage." (F138–F140) e "Soon after, a problem with the robot cut this one short." (F141) | leitura no contexto novo, contra as mesmas cópias; nenhuma linha precisou mudar |
| veio da anterior pelo diff | as outras 153 frases e as 280 linhas delas, sem nenhuma mudança | identidade caractere por caractere do texto e linha a linha da tabela (acima); o julgamento delas é o de `fatos-r3c.laudo.md` e das rodadas anteriores |

## A frase nova (§15), elemento por elemento

"In 2015, a NOAA robot descended along the trench's south wall, almost 20,000 feet down."

| elemento | linha | veredito | o que a cópia local diz |
|---|---|---|---|
| "In 2015" | F133 | CONFIRMADA | S32, p. 1, linha 56: "2015-04-26T10:46:07.296000" (In Water at); S35, linha 371: "Date: \| April 26, 2015" |
| "a NOAA robot" | F132 (a afirmação: "O ROV da NOAA") | CONFIRMADA | S33, p. 10, linhas 547–548: "using NOAA’s custom-built, dual-body, 6,000-meter- rated ROVs Deep Discoverer (D2) and Seirios" (o mesmo elemento da frase antiga, sem linha própria na tabela: H1 da reverificação) |
| **"descended"** | **F132** | **CONFIRMADA** | S33, p. 18, linha 1081: "As the ROV descended and reached 6,000 m". O verbo é o da fonte |
| **"along the trench's south wall"** | **F132** | **CONFIRMADA** | S32, p. 2, linha 131, o trecho da linha: "Today we conducted a 6,000 m ROV dive along the southern wall of the Puerto Rico Trench". O nome do lugar: "Puerto Rico Trench- South Wall" (S32, linha 5). O relatório: "headed to the south wall of the Puerto Rico Trench" (S33, p. 13, linha 724). Como apoio, a posição (19°09,053′N, 65°24,430′W, S32, linha 60) cai na encosta do lado sul da fossa, pela GEBCO 2026 (o perfil está na reverificação) |
| "almost 20,000 feet down" | F135, F136 | CONFIRMADA | S32, p. 1, linha 80: "5999.7 m" (Max. depth); `fatos-medidas.txt`, V24: "= 19,684.1 ft, almost 20,000 feet" (refeito na reverificação: 5.999,7 ÷ 0,3048 = 19.684,1). O "down" prende o número à descida do robô |
| (as câmeras HD) | F134 | CONFIRMADA, sem papel na fala | S32, p. 1, linhas 36–38: "HD Camera 1 / HD Camera 2 / ROV HD 2". A frase nova não fala de câmera nem de filmagem: a linha fica certa e sobra (O15) |

**O que a frase não diz, e a fonte nega:** que o robô filmou, viu ou chegou à parede ou ao fundo. As fontes:
- "came back to the surface without exploring the seafloor at this dive location" (S33, p. 14, linhas 738–739);
- "Bottom Time: N/A" (S32, linha 76);
- "Observations in the water column during descent and ascent" (S32, linhas 132–133).

O "along" é a palavra da fonte para um mergulho feito ao lado da encosta, e não diz contato.

## O §15 relido com a frase nova

- **"That's a long way east of its deepest point." (F137):** continua certa.
  - O "That" segue caindo no lugar do mergulho, como antes, porque a cauda ", almost 20,000 feet down." não mudou.
  - O lugar fica a 209,4 km, ou 130,09 mi, a leste do ponto mais fundo (65,407°W contra 67,311°W; refeito na reverificação).
- **"The robot, Deep Discoverer, worked from the ship Okeanos Explorer, on one of a dozen dives it made on that voyage." (F138–F140):** sem mudança. "ROV Deep Discoverer (D2) completed 12 dives" (S33, p. 13, linhas 710–711).
- **"Soon after, a problem with the robot cut this one short." (F141):** continua certa, e agora na ordem da fonte.
  - "As the ROV descended and reached 6,000 m, the ROV pilots noticed a problem with the mineral oil levels in the high voltage compensator system on D2. The vehicles were recovered early" (S33, p. 18, linhas 1081–1083).
  - Com o "filmed", o "Soon after" deixava entender que a filmagem da parede veio antes do problema. Com o "descended", a sequência da voz é a da fonte: desceu, chegou a ~6.000 m e, "shortly thereafter" (S32, linha 132), o mergulho foi abortado.

## ACHADOS

Nenhum no texto de hoje. Nenhuma frase pede CORTAR, ESTREITAR, ENFRAQUECER, ATRIBUIR, REORDENAR, DA-PAUTA, DO-DOSSIE, DA-FONTE, REDIZER nem PEDIR por fato. A frase nova é verdadeira elemento por elemento e diz menos que a de antes, que estava REFUTADA.

## Observações (não são achados: ficam registradas para a Sala)

- **O1–O4, O6–O8 e O12**, das rodadas anteriores, continuam como estavam, em frases que não mudaram (o texto delas está em `fatos-r3c.laudo.md` e em `fatos-r3b.laudo.md`).
- **O13 continua (nota do editor, fora da voz).** A linha 139 do `roteiro-editor.md`, que antes desta rodada era a 110, ainda diz "A emenda L80 ('the other end of the ocean') devolve o eco da ponte."
- **O14 · a F132, que todas as rodadas confirmaram, está resolvida.**
  - Da r2b à r3c (antes delas, a numeração das linhas era outra), a F132 saiu "confirmada" com o trecho do mergulho "along the southern wall", para uma frase que dizia "filmed".
  - A reverificação de hoje a refutou (`f132-reverificacao-2026-10-28.laudo.md`), e a troca a resolve.
  - O trecho da linha continua o mesmo, e agora sustenta o que a frase diz.
- **O15 · as anotações da tabela, fora da voz.** Nenhuma muda veredito, número nem fala.
  - A F134 ("Com câmeras HD.") ficou sem papel na frase nova, como o próprio campo `reverificacao` dela diz: está certa e sobra.
  - A `afirmacao` da F136 ainda diz "(a parede, nunca o fundo, F68)". Os 5.999,7 m são a profundidade do robô, não a da parede; pelo apoio da reverificação, o fundo ali fica uns 90 m abaixo. A leitura certa seria "(a profundidade do robô, nunca a do fundo)".
- **O16 · a tela, fora desta tabela.** O que ainda depende da frase está na reverificação (`f132-reverificacao-2026-10-28.laudo.md`, "Rodada 2"):
  - o rótulo "SOUTH WALL DIVE · …" não pode ser legenda da foto do lançamento de 10/04/2015;
  - o `out/atlantico-fundo/espelho.json` ainda traz a frase antiga e o rótulo antigo.

## As decisões do Lucas, conferidas na voz

- **A frase do robô de 2015** (28/10/2026, 15:0x, no chat da Sala).
  - A resposta: "Corrigir a frase (Recomendado)". A opção dizia: "Troco só esse trecho, para dizer que o robô desceu quase 20.000 pés junto à parede sul, sem dizer que a filmou."
  - A voz de hoje faz exatamente isso: troca só o trecho (`filmed` → `descended along`), diz "desceu", "junto à parede sul" e "quase 20.000 pés", e não diz que filmou.
  - A escolha do verbo entre as trocas que a reverificação confirmou (T1 a T3) é de estilo (`out/atlantico-fundo/_tmp/frase-2015/escrita.md`). O que aquele arquivo diz do AP Stylebook ("dived" e "dove") não é afirmação do vídeo e fica fora desta lente.
- **As outras decisões** (a de 27/10, 02:40, que aprovou o roteiro, e as que as rodadas anteriores conferiram) ficam como estavam, em frases que não mudaram.

## As armadilhas de fato, na frase nova

- **Verbo de ação** (a armadilha que derrubou a frase antiga): "descended" é o que a fonte diz que o robô fez (S33, linha 1081). Não há verbo de ver, filmar, tocar nem chegar.
- **Universal, ano derivado, período:** nenhum. O "2015" é a data do mergulho (26/04/2015).
- **Composição de trechos:** a frase junta "along the southern wall" (S32, linha 131), "Max. depth 5999.7 m" (S32, linha 80) e "descended" (S33, linha 1081). Os três falam do mesmo mergulho, o Dive 09 de 26/04/2015, nos dois documentos oficiais dele. Não é justaposição de fatos diferentes.
- **Réguas trocadas:** o número é a profundidade do robô, e a frase o amarra a "down".
  - Quem ouvir "the trench's south wall, almost 20,000 feet down" como a parede a quase 20.000 pés também ouve uma coisa certa: a encosta passa por ~6.000 m ali.
  - O apoio é a GEBCO 2026: −5.027 m a 2 km ao sul do ponto, −6.179 m no ponto e −7.441 m a 5 km ao norte.
  - O que a frase não pode, e não faz, é pôr o fundo a 19.684 pés.
- **Conversão:** 5.999,7 m ÷ 0,3048 = 19.684,1 ft, 1,6 % abaixo de 20.000, o que cabe no "almost". É a mesma conta da V24.
- **Mecanismo, citação, fonte "não aberta":** nenhum. As fontes da frase foram abertas na cópia local em texto.

## A varredura "estado do mundo", na frase mudada

- **"In 2015, a NOAA robot descended along the trench's south wall, almost 20,000 feet down."**: passado, com data. Não envelhece. Confirmada, sem data-base.

## As frases sem afirmação checável (NADA A CHECAR, declarado)

As 9 das rodadas anteriores, nenhuma delas mudada:
- a pergunta e a assinatura do gancho;
- "A sound could give a number.";
- "It couldn't show anyone what was down there.";
- "Keep those fish in mind.";
- as três frases-ponte do §8: "A crew could see only a small patch of the trench, and a net could only bring something up.", "Neither could map the floor." e "That took a different kind of sonar.";
- "Why is the trench so deep?".

## Não conferido

Nada na voz. A frase nova se apoia só em cópias locais em texto (S32, S33 e S35). A GEBCO e os quadros do trailer entram só como apoio, sem sustentar veredito.

## VOLÁTEIS na fala (reconferir na véspera da gravação)

Sem mudança desta rodada (a frase nova não é volátil):
- "As of October 2026, the official list of undersea features doesn't include the Milwaukee Deep." (a API do gazetteer, `totalItems: 0` em 26/10/2026): refazer o GET antes de gravar; se o mês da gravação mudar, o "October 2026" muda junto.
- "More than three million people live in Puerto Rico." (Censo 2020, 3.285.874; estimativa de 01/07/2025, 3.184.835): só muda se uma estimativa nova cair abaixo de três milhões.
- "not every country uses it" (a M-3 de 2026, apêndice 1: a Argentina e a Austrália): reconferir se sair edição nova da M-3.

## LISTA DE NOMES (anônimo → pessoa nomeável)

Sem mudança: a troca não tira nem põe nome. Para o mergulho de 2015, se um dia o texto quiser um nome, a reverificação lista os da S32 (o chefe do ROV, o coordenador e os chefes da equipe científica).

## DECISÃO DO LUCAS / DA SALA PENDENTE que tocou esta checagem

- **A narração do §15, refeita** (o Lucas aprovou na mesma resposta: "A voz refaz só esse parágrafo (menos de 500 créditos). Você ouve o trecho novo"). Até lá, a narração gravada ainda diz "filmed". Depois dela vêm o relógio, o `espelho.json` e a escuta do Lucas.
- **Da Sala e do `redator-de-tela`:** o lugar do rótulo "SOUTH WALL DIVE · …" (O16; a reverificação, "Rodada 2").
- **O12 e O13**, da Sala, como na rodada anterior.

## PADRÕES

1. **O verbo de ação é a afirmação.**
   - A frase antiga, no texto desde a r1, passou confirmada por todas as rodadas porque a linha da tabela conferia o mergulho ("dive along the southern wall"), e a frase dizia outra coisa ("filmed").
   - A troca põe na voz o verbo que a própria fonte usa ("descended").
   - Quando uma frase diz o que alguém ou algo fez, a linha que a sustenta tem de citar o ato, não o lugar nem o equipamento.

## O portão de fatos

`node ferramentas/portao-fatos.mjs atlantico-fundo` (da raiz do canal), rodado sobre esta tabela e este laudo:

```
portão de fatos — atlantico-fundo: PASSA
  sha12 do texto falado: ddd4567309e3 (igual ao do gate.mjs) · 28 parágrafos
  laudo: Revisão julgada ddd4567309e3 · COBERTURA 285 de 285 · VEREDITO PASS
  tabela: 285 confirmada(s) de 285
```

- Saída 0 (exit 0), sem problema nem aviso (`--json`: `problemas: []`, `avisos: []`), na primeira rodada sobre a tabela que a Sala pôs em dia. Nenhum conserto de trecho, frase, número, piso ou cobertura foi preciso.
- O portão confere a estrutura (o sha, a cobertura, as frases inteiras, os trechos literais, as medições e os números), não a verdade.
- A verdade da frase nova está na tabela de elementos acima e na reverificação. Este portão também passava sobre a frase antiga, que estava refutada.

```
node roteiros/atlantico-fundo/_ferramentas/gate.mjs --derivados
veredito PASSA, exit 0, problemas [], derivados_velhos []
derivados: qc-roteiro/f132-reverificacao-2026-10-28.laudo.md cita ddd4567309e3 (ok); qc-roteiro/fatos.laudo.md cita ddd4567309e3 (ok);
roteiro-editor.md cita ddd4567309e3 (ok); pronuncia.md cita ddd4567309e3 (ok); voz/texto-para-voz.md cita ddd4567309e3 (ok)
```

Os laudos com sufixo de rodada (`fatos-r3c.laudo.md` e os de antes) ficam fora do `--derivados`, como o portão manda: julgaram o texto de antes.

## A tabela

As linhas que esta rodada julgou de novo (a frase inteira e o trecho literal de cada uma estão na `fatos-tabela.json`). A `frase` das cinco é a nova; a `afirmacao` da F132 foi reescrita pela Sala, e a F132 e a F134 ganharam o campo `reverificacao`. As outras 280 linhas ficam linha a linha como estavam (a listagem inteira, com a afirmação de cada uma, está em `fatos-r3b.laudo.md`, "A tabela", com as mudanças da `fatos-r3c.laudo.md`).

| id | § | afirmação | veredito | fonte | classe |
|---|---|---|---|---|---|
| F132 | 15 | O ROV da NOAA desceu junto à parede sul da fossa, a 6.000 m (sem filmá-la: voltou sem explorar o fundo). | confirmada | S32 | texto |
| F133 | 15 | Em 26/04/2015. | confirmada | S32 | texto |
| F134 | 15 | Com câmeras HD. (sem papel na frase nova: O15) | confirmada | S32 | texto |
| F135 | 15 | Profundidade máxima: 5.999,7 m. | confirmada | S32 | texto |
| F136 | 15 | 5.999,7 m = 19.684,1 ft: quase 20.000 ft (a anotação "a parede" é a O15). | confirmada | medicao | medicao |

## Comparação com a rodada anterior (`fatos-r3c.laudo.md`, sobre `7b965eecdb7c`)

A conferência anterior deu PASS, nota 9.6, COBERTURA 285 de 285, sem achado. A reverificação de 28/10/2026 (`f132-reverificacao-2026-10-28.laudo.md`, rodada 1) refutou a 1ª frase do §15, que aquela conferência tinha dado por confirmada. O Lucas mandou corrigir, e a Sala trocou uma palavra por duas. Nada mais mudou no texto falado.

| linha | antes (`7b965eecdb7c`) | agora (`ddd4567309e3`) |
|---|---|---|
| F132 | a frase "…robot filmed the trench's south wall…"; afirmação "mergulhou na parede sul"; confirmada, mas a frase dizia mais que a linha (REFUTADA na reverificação) | a frase "…robot descended along the trench's south wall…"; afirmação "desceu junto à parede sul (sem filmá-la)"; confirmada, e agora a linha sustenta a frase inteira |
| F133, F135, F136 | a frase antiga | a frase nova; afirmação, trecho e veredito de antes |
| F134 | a frase antiga; as câmeras como apoio do "filmed" | a frase nova; as câmeras ficam certas e sem papel (O15) |

A nota fica em 9.6. Sobre o texto que a r3c julgou, ela não se manteria: a F132 estava refutada. O veredito fica em PASS: zero DIVERGE e zero REFUTADA, e toda linha da tabela confirmada.

VEREDITO: PASS
