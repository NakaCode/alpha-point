> **[porte Regie]** Origem: `top10-estudio/seed/DE-PARA-LEIS.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> É o mapa das numerações antigas para os IDs `PREFIXO-NN`; vale como está. Uma lei que ele aponta pode ter ficado de fora da SIS ou da REND filtradas — confira o apêndice delas.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# DE-PARA DAS LEIS — numeração antiga → ID por domínio (22/jul/2026)

A numeração corrida 1–132 de `seed/aprendizado.md` foi aposentada: **147 entradas dividiam apenas 132 números**,
porque duas séries paralelas (roteiro × técnica) colidiram em **73–77, 108 e 111–120**. Com número duplicado a regra
da casa ("a lei de número MAIOR vence") ficava indecidível — "lei 118" queria dizer *anáfora proibida* (roteiro) E
*frota Spot morre por capacidade* (técnica) ao mesmo tempo.

O esquema novo é `PREFIXO-NN`, contador próprio por DOMÍNIO, em ordem cronológica dentro de cada um:

| prefixo | domínio | leis NA MIGRAÇÃO |
|---|---|---|
| `ROT-` | voz, storytelling, locução, estrutura de tópico, packaging, retenção. | 46 |
| `ARTE-` | layout, tipografia, motion, cor, word-lock, carga visual, composição de mídia na tela. | 47 |
| `REND-` | captura, codec, quota, paralelismo, prontidão de mídia no render. | 14 |
| `PESQ-` | footage, foto, geo, logo, pessoa, documento, stock — o que SOURCEAR e como validar. | 20 |
| `FIN-` | decupagem, timeline/XML, overlays, trilha, cards de branding, gate de entrega. | 17 |
| `SIS-` | git, custo, agentes, memória, disciplina transversal. | 5 |

**Total NA MIGRAÇÃO: 149 leis** — as 147 entradas numeradas + **2 blocos que eram REGRA mas viviam sem número**
e agora têm ID: o `### RENDER — SEMPRE Mac+Windows em paralelo` (→ `REND-02`) e o `### Lei 108 — os 5 REFORÇOS
competitivos` (→ `ROT-27`, que era justamente metade da colisão do 108). Precedência: dentro do MESMO prefixo,
o NN maior (mais novo) vence.

⚠️ Os números desta tabela são o **retrato de 22/jul**, congelado de propósito — é o que esta ponte documenta.
A **contagem VIVA** (que só cresce, porque lei nova entra pelo fim do domínio) está em `seed/aprendizado.md`
§"Os domínios"; hoje são **152**.

Esta tabela é a **ponte para qualquer citação legada** ("lei 61", "leis 97–104", "lei 108-E"). A coluna *linha
original* é a linha em que a lei começava no `aprendizado.md` antes da reforma (commit `b2f1d6b`).

## Tabela

| nº antigo | linha original | novo ID | resumo |
|---|---|---|---|
| 1 | 3 | `ARTE-01` | fundo real em 95% (revogada) |
| 2 | 8 | `PESQ-01` | mapa nunca desenhado à mão |
| 3 | 15 | `PESQ-02` | logo real da agência citada |
| 4 | 19 | `ARTE-02` | sem título/subtítulo superior por padrão |
| 5 | 25 | `ARTE-03` | clareza em 2 segundos é lei |
| 6 | 29 | `ARTE-04` | realismo na representação do fenômeno |
| 7 | 33 | `ARTE-05` | série temporal precisa eixo de datas |
| 8 | 35 | `ARTE-06` | use o quadro inteiro, equilibrado |
| 9 | 38 | `ARTE-07` | uma explicação, um cenário contínuo |
| 10 | 48 | `PESQ-03` | cena histórica leva imagem histórica real |
| 11 | 58 | `PESQ-04` | asset histórico exatamente a entidade citada |
| 12 | 62 | `PESQ-05` | receita de caça de mídia |
| 13 | 72 | `ARTE-08` | texto bem grande pra TV |
| 14 | 80 | `PESQ-06` | várias imagens de época, upscale 4K |
| 15 | 87 | `ARTE-09` | logo por contraste, canto direito livre |
| 16 | 91 | `ARTE-10` | pessoa citada ganha nome em tela |
| 17 | 96 | `ARTE-11` | rótulo grudado no elemento certo |
| 18 | 101 | `ARTE-12` | font-size que pega + piso |
| 19 | 107 | `ARTE-13` | fundo único por cena, sem repetir |
| 20 | 111 | `ARTE-14` | colisão de texto é veto duro |
| 21 | 119 | `ARTE-15` | word-lock pelo timestamp real da fala |
| 22 | 126 | `ARTE-16` | cenário vívido integrado com profundidade universal |
| 23 | 137 | `ARTE-17` | dividir a cena em takes |
| 25 | 143 | `PESQ-07` | footage de essência, nunca ilustração literal |
| 24 | 154 | `REND-01` | cor sem banding: 10-bit + grão |
| 26 | 161 | `ARTE-18` | documentário de quatro pilares visuais |
| 27 | 174 | `ARTE-19` | informação no tempo exato da fala |
| 28 | 180 | `ARTE-20` | não duplicar beat entre gráficos |
| 29 | 186 | `ARTE-21` | rotular só o ponto, um texto |
| 30 | 195 | `PESQ-08` | pessoa citada sempre com rosto real |
| 31 | 200 | `PESQ-09` | logo/símbolo sempre o real oficial |
| 32 | 206 | `ARTE-22` | não duplicar a narração em texto |
| 33 | 212 | `PESQ-10` | mesmo enquadramento, muitas variações, sujeito focado |
| 34 | 220 | `ARTE-23` | não repetir informação já absorvida |
| 35 | 224 | `PESQ-11` | vídeo é prioridade, foto é secundária |
| 36 | 231 | `PESQ-12` | footage landscape 4K de plataforma assinada |
| 37 | 240 | `PESQ-13` | validação por visão, fonte por tipo |
| 38 | 252 | `ARTE-24` | selo de categoria só no card-tema |
| 39 | 264 | `ARTE-25` | apresentador recortado na frente da animação |
| 40 | 298 | `ARTE-26` | footage puro, zero sombra, tela cheia |
| 41 | 306 | `PESQ-14` | Reuters: um a dois por vídeo |
| (s/n) RENDER Mac+Windows | 312 | `REND-02` | render paralelo, nunca oversubscrever a máquina |
| 42 | 321 | `ARTE-27` | texto progressivo com tempo de leitura |
| 43 | 337 | `FIN-01` | decupagem exige veredito ativo, detecta repetição |
| 44 | 354 | `PESQ-15` | query de stock: sujeito+ação+atmosfera |
| 45 | 370 | `REND-03` | bloco escuro é corrupção de GPU |
| 46 | 401 | `REND-04` | path absoluto do Mac some no Windows |
| 47 | 424 | `ARTE-28` | overlay glass translúcido sobre o apresentador |
| 48 | 435 | `ARTE-29` | card de título é capa real |
| 49 | 452 | `ARTE-30` | destaque por peso, nunca por cor |
| 50 | 465 | `PESQ-16` | asset nomeado no espelho é obrigatório |
| 51 | 476 | `ARTE-31` | mapa3d drone exige terreno DEM real |
| 52 | 490 | `ARTE-32` | membro animado não invade o lockup |
| 53 | 502 | `ARTE-33` | não centralize por dois mecanismos |
| 54 | 507 | `PESQ-17` | evento real nomeado exige registro real |
| 55 | 522 | `REND-05` | cena com img implementa __fotosProntas |
| 56 | 538 | `REND-06` | master do YouTube tem que ser h264+aac |
| 57 | 551 | `ARTE-34` | card de título nunca com fundo abstrato |
| 58 | 565 | `FIN-02` | card de membro novo com QR |
| 59 | 572 | `REND-07` | Chrome headed não coexiste com render |
| 60 | 596 | `ARTE-35` | lei-mãe: montar na voz, re-coreografar |
| 61 | 610 | `ARTE-36` | fundo é mídia real, nunca navy |
| 62 | 622 | `ARTE-37` | texto é dado ou destilação |
| 63 | 632 | `FIN-03` | card de navegação/CTA é overlay alpha |
| 64 | 643 | `ARTE-38` | inset de prova real na cena |
| 65 | 657 | `ARTE-39` | montador dá semente, Fable inventa metáfora |
| 66 | 677 | `ARTE-40` | motion design Kurzgesagt, transições contínuas |
| 67 | 703 | `ROT-01` | tópico 1 entrega o título prometido |
| 68 | 713 | `ROT-02` | proibida a dramatização por adjetivo |
| 69 | 723 | `ROT-03` | introdução de 20 a 30 segundos |
| 70 | 731 | `ROT-04` | voz falada, nunca texto lido |
| 71 | 751 | `ROT-05` | roteiro é história, não relatório |
| 72 | 770 | `ROT-06` | jogue a isca, segure o veredito |
| 73 (técnica, 11/jul) | 783 | `REND-08` | qualidade primeiro, nunca rebaixar resolução calado |
| 74 | 794 | `ARTE-41` | crédito só se a licença exige |
| 75 (técnica, 12/jul) | 808 | `FIN-04` | sync dual-system é parte da decupagem |
| 76 (técnica, 12/jul) | 823 | `FIN-05` | timeline sem sobreposição dentro da trilha |
| 77 (técnica, 12/jul) | 845 | `REND-09` | mídia quebrada aborta barulhento no render |
| 73 (roteiro, 12/jul) | 866 | `ROT-07` | exemplo de módulo é postura, não texto |
| 74 (roteiro, 12/jul) | 876 | `ROT-08` | norma de locução: uma leitura só |
| 75 (roteiro, 12/jul) | 883 | `ROT-09` | auditoria com lastro, volátil classe 1 |
| 76 (roteiro, 12/jul) | 891 | `ROT-10` | paráfrase não escapa: gate mede molde |
| 77 (roteiro, 12/jul) | 905 | `ROT-11` | gancho não é promessa de espera |
| 78 | 919 | `ROT-12` | a transição se faz, não se anuncia |
| 79 | 927 | `ROT-13` | base de duas mil palavras |
| 80 | 932 | `ROT-14` | contextualize o tema do zero |
| 81 | 946 | `ROT-15` | palavra simples sempre vence a rebuscada |
| 82 | 957 | `ROT-16` | tempo à prova de publicação |
| 83 | 976 | `ARTE-42` | abstração é desenho nativo, não footage |
| 84 | 997 | `SIS-01` | link pro Bôco é a pasta |
| 85 | 1004 | `SIS-02` | effort do Fable é medium |
| 86 | 1012 | `ROT-17` | cold open entrega na primeira frase |
| 87 | 1020 | `ROT-18` | o título é um contrato |
| 88 | 1030 | `ROT-19` | fio único vence o listão |
| 89 | 1039 | `ROT-20` | inscrito vem de pull temático |
| 90 | 1052 | `SIS-03` | lei nova re-julga o backlog validado |
| 91 | 1062 | `SIS-04` | sincronizar o Drive antes do link |
| 92 | 1069 | `ROT-21` | anáfora de negação empilhada é tenebroso |
| 93 | 1077 | `ROT-22` | máximo de quatro tópicos por roteiro |
| 94 | 1084 | `ROT-23` | público maduro, clareza total, nomear sujeito |
| 95 | 1095 | `ROT-24` | comprimento-alvo 2.100 a 2.500 palavras |
| 96 | 1102 | `ROT-25` | data com ano, número em algarismo |
| 97 | 1120 | `FIN-06` | título de tópico nunca sai narrado |
| 98 | 1132 | `FIN-07` | trilha por capítulo, amena, com ducking |
| 99 | 1141 | `FIN-08` | zero flash acidental do Bôco |
| 100 | 1152 | `FIN-09` | entrega em ProRes 422 LT |
| 101 | 1164 | `FIN-10` | transições T1 e T2 nas fronteiras |
| 102 | 1175 | `FIN-11` | CTA na intro, menções e fim |
| 103 | 1185 | `FIN-12` | card de membros fresco no fim |
| 104 | 1195 | `FIN-13` | finalização é gate visual obrigatório |
| 105 | 1205 | `ROT-26` | listão dez-X é exceção deliberada |
| 106 | 1214 | `REND-10` | render de lote vai pra frota |
| 107 | 1225 | `FIN-14` | áudio do master ripplado como vídeo |
| 108 (técnica, 18/jul) | 1235 | `FIN-15` | decupagem vira master físico ProRes |
| 108 (roteiro, 18/jul — os 5 reforços) | 1253 | `ROT-27` | cinco reforços competitivos contra o concorrente |
| 109 | 1270 | `PESQ-18` | mídia baixada passa gate de compatibilidade |
| 110 | 1280 | `SIS-05` | varredura mecânica não substitui bancada visual |
| 111 (roteiro, 19/jul) | 1297 | `ROT-28` | auditar o sujeito do número |
| 112 (roteiro, 19/jul) | 1305 | `ROT-29` | fato que caduca entra como piso |
| 113 (roteiro, 19/jul) | 1311 | `ROT-30` | honestidade dosada, ato final firme |
| 114 (roteiro, 19/jul) | 1317 | `ROT-31` | desmonte devolve maravilha, título sobrevive |
| 115 (roteiro, 19/jul) | 1322 | `ROT-32` | máximo dois números pesados por parágrafo |
| 116 (roteiro, 19/jul) | 1328 | `ROT-33` | uma âncora-analogia por grandeza |
| 117 (roteiro, 19/jul) | 1335 | `ROT-34` | sotaque 8 vale dentro do roteiro |
| 118 (roteiro, 19/jul) | 1341 | `ROT-35` | anáfora proibida dispara a dois membros |
| 119 (roteiro, 19/jul) | 1345 | `ROT-36` | CTA do meio na dobradiça neutra |
| 120 (roteiro, 19/jul) | 1349 | `ROT-37` | packaging no grau de certeza do veredito |
| 121 | 1354 | `ROT-38` | arquitetura anti-vazamento do clímax |
| 122 | 1363 | `ROT-39` | todo vídeo carrega um rosto |
| 123 | 1367 | `ROT-40` | listão v2: fio leve, ordem curada |
| 124 | 1373 | `ROT-41` | dramatização por escopo e registro |
| 125 | 1380 | `ROT-42` | pesquisa blindada contra simetria e paráfrase |
| 126 | 1389 | `ROT-43` | compilado e dublagem: mecanismo e âncora |
| 127 | 1397 | `ROT-44` | contexto que avança versus trivia |
| 128 | 1406 | `ROT-45` | anúncio enfático de importância é veto |
| 129 | 1416 | `ROT-46` | clareza da intro exige nexo explícito |
| 111 (técnica, 19/jul) | 1429 | `PESQ-19` | geografia sem geometria real é bloqueio |
| 112 (técnica, 20/jul) | 1444 | `ARTE-43` | mapa de lugar é 3D bearing-loop |
| 113 (técnica, 20/jul) | 1455 | `FIN-16` | WhisperX em bruto suprime retakes |
| 114 (técnica, 20/jul) | 1464 | `FIN-17` | master em blocos por capítulo |
| 115 (técnica, 20/jul) | 1481 | `REND-11` | canvas HiDPI backing 2× (legado) |
| 117 (técnica, 20/jul) | 1496 | `ARTE-44` | asset documentado tem que ser produzido |
| 116 (técnica, 20/jul) | 1516 | `ARTE-45` | footage de fundo próprio, contínuo, variado |
| 130 | 1534 | `ARTE-46` | país destacado acende o território inteiro |
| 131 | 1545 | `ARTE-47` | comentário não fechado mata o CSS |
| 132 | 1553 | `PESQ-20` | pente fino é editorial, não bug |
| 118 (técnica, 21/jul) | 1564 | `REND-12` | frota morre por capacidade e quota |
| 119 (técnica, 21/jul) | 1577 | `REND-13` | viewport 3840 nativo é o padrão |
| 120 (técnica, 21/jul) | 1592 | `REND-14` | frota v2: frame-parallel, imagem custom |

## Os 16 números que colidiam

| nº antigo | as duas leis que dividiam o número | IDs novos |
|---|---|---|
| 73 | qualidade primeiro (técnica, 11/jul) × exemplo é postura (roteiro, 12/jul) | `REND-08` × `ROT-07` |
| 74 | crédito de footage (11/jul) × norma de locução (12/jul) | `ARTE-41` × `ROT-08` |
| 75 | sync dual-system (12/jul) × auditoria com lastro (12/jul) | `FIN-04` × `ROT-09` |
| 76 | timeline sem sobreposição (12/jul) × paráfrase não escapa (12/jul) | `FIN-05` × `ROT-10` |
| 77 | mídia quebrada aborta (12/jul) × gancho ≠ promessa de espera (12/jul) | `REND-09` × `ROT-11` |
| 108 | decupagem = master ProRes (18/jul) × os 5 reforços competitivos (18/jul) | `FIN-15` × `ROT-27` |
| 111 | auditar o sujeito do número (roteiro) × geografia sem geometria real (técnica) | `ROT-28` × `PESQ-19` |
| 112 | fato que caduca (roteiro) × mapa 3D bearing-loop (técnica) | `ROT-29` × `ARTE-43` |
| 113 | honestidade dosada (roteiro) × WhisperX suprime retakes (técnica) | `ROT-30` × `FIN-16` |
| 114 | desmonte devolve maravilha (roteiro) × master em blocos (técnica) | `ROT-31` × `FIN-17` |
| 115 | carga numérica no ouvido (roteiro) × canvas HiDPI (técnica) | `ROT-32` × `REND-11` |
| 116 | uma âncora-analogia (roteiro) × footage de fundo por-cena (técnica) | `ROT-33` × `ARTE-45` |
| 117 | sotaque 8 no roteiro (roteiro) × asset documentado ≠ produzido (técnica) | `ROT-34` × `ARTE-44` |
| 118 | anáfora a 2 membros (roteiro) × frota Spot = capacidade (técnica) | `ROT-35` × `REND-12` |
| 119 | CTA na dobradiça neutra (roteiro) × viewport 3840 nativo (técnica) | `ROT-36` × `REND-13` |
| 120 | packaging no grau do veredito (roteiro) × frota v2 (técnica) | `ROT-37` × `REND-14` |

## Contradições resolvidas na mesma passada

| conflito | quem vence | o que ficou escrito |
|---|---|---|
| ex-106 (`--machine=c2d-standard-8`) × ex-118-técnica (c2d proibido) | **os dois, com a medida real** | `REND-10` e `REND-12`: `e2-standard-8` é o DEFAULT (capacidade ampla), mas a quota **E2_CPUS=24 dá teto de 3 nós**; lote grande usa `--machine=c2d-standard-8` (**C2D_CPUS=100 → 12 nós**) ou pede aumento de E2_CPUS. Quota é REGIONAL — trocar de zona não resolve. |
| ex-115-técnica ("não mude o palco pra 4K") × ex-119-técnica (viewport 3840 nativo) | **`REND-13`** | `REND-11` virou nota histórica + rede de segurança do LEGADO 1920; cena nova nasce 4K-nativa. |
| ex-108-técnica (master contínuo) × ex-114-técnica (master em blocos) | **`FIN-17`** | `FIN-15` virou o FALLBACK (vídeo sem títulos de tópico lidos). |
| ex-1 (fundo real em ~95%) × ex-22 (cenário vívido integrado) | **`ARTE-16`** | `ARTE-01` marcada **REVOGADA**, mantida só como histórico. |
| ex-117-técnica trazia uma "ATUALIZAÇÃO" sobre `hidpi-bake`/canvas 4K | — | bloco **movido** para `REND-11` (canvas HiDPI), que é o assunto dele. `ARTE-44` ficou só com o gate `src`-existe. |

## ⚠️ Citações legadas que apontavam pro NADA (achadas 22/jul, DEPOIS da migração)

A tabela acima traduz *bem* toda citação legada — mas ela não conserta citação que **já nascia errada**. Estas
resolviam pela tabela e caíam numa lei de OUTRO assunto, o que é pior que o link morto: o agente lia uma lei
plausível e agia com confiança na regra errada. Todas já foram trocadas na doutrina viva; ficam aqui porque
sobrevivem em artefato congelado (`out/`, `REFORMA.md`, branches antigas).

| citação legada | pra onde a tabela manda | o que ela QUERIA dizer | escreva |
|---|---|---|---|
| "leis 96–99" / "lei 97" / "lei 98" (publicação: rotas, upload privado, gate humano de título/thumb, `contato@`, publi≠capítulo) | `ROT-25`, `FIN-06`, `FIN-07`, `FIN-08` — **nenhuma é de publicação** | a cadeia de gates da publicação, que existia em `docs/17`+`docs/13` mas **não tinha lei** | **`FIN-18`** (escrita em 22/jul justamente pra fechar este buraco) |
| "lei 96" em `montador.md` (publi/CTA não conta como presença do Bôco) | `ROT-25` (data com ano) — nada a ver | a distribuição/janela de rosto do apresentador | **`FIN-08`** |
| "lei 99" (disco enxuto, bucket como storage) | `FIN-08` (flash do Bôco) — nada a ver | bucket é a fonte, local é temporário | **`REND-14`** (a cláusula final dela) + `REND-10` pro lote |
| "lei 15" (canto do logo, usado pra posicionar o QR) | `ARTE-09` ✅ | — | `ARTE-09` (a tabela acerta; só faltava usar o ID) |
| "lei 106" / "lei 118" em `.claude/skills/producao/SKILL.md` | `REND-10` / `REND-12` ✅ | — | `REND-10` / `REND-12` |

## Como citar daqui pra frente

- Em agente/knowledge/código: `(ARTE-27)`, `(leis FIN-06 … FIN-13)` — nunca "lei 42" solto.
- Lei nova: entra no FIM do seu domínio em `seed/aprendizado.md` com o próximo NN. **Nunca renumerar as existentes.**
- Citação antiga encontrada em artefato congelado (`out/`, `knowledge/dourados/*.html`, `archive/`, `testes/`,
  `REFORMA.md`, `docs/registro/`): resolver por esta tabela, **não** reescrever o artefato — a citação velha ali
  é evidência datada, não instrução viva.
- ⚠️ **Uma string de código NÃO foi renumerada de propósito:** o marcador literal `HiDPI-CANVAS (lei 115)` em
  `scripts/hidpi-canvas.mjs` e no regex de `scripts/hidpi-bake.mjs`. Ele já está GRAVADO dentro de HTMLs no **[porte Regie: não veio — `hidpi-canvas.mjs`]**
  disco; renomear pra `REND-11` faria o bake parar de limpar as cenas antigas. Os comentários em volta foram
  atualizados e explicam isso.
- ⚠️ **`knowledge/design-laws.md` e `knowledge/review-panel/*` NÃO fazem parte deste esquema.** As "Lei 1–12"
  citadas lá são as **Leis de Design** (outro conjunto, outro arquivo) — não confundir com as leis do
  `aprendizado.md` e não converter.

---

## 🔀 Fusão Mac × VM — 05/ago/2026

O Mac e a VM `estudio-top10` destilaram leis **em paralelo** desde 03/ago, e cada lado
continuou a mesma sequência numérica sem saber do outro. Resultado: 65 leis DISTINTAS
disputando o mesmo ID.

**Quem manteve o número:** o lado já CITADO fora de `seed/` — medido antes de decidir
(`ARTE-106` em 25 arquivos, `ARTE-108` em 22, `ARTE-107` em 18). Renumerar o lado citado
quebraria documentação, prompt de agente e código de uma vez. **Antiguidade não decide;
alcance decide.**

⚠️ **Se você viu um destes IDs num texto ESCRITO NA VM antes de 05/ago, ele significa a lei da
coluna da direita.** Cada lei renumerada carrega a própria procedência no corpo.

| era, na VM | virou | assunto |
|---|---|---|
| `ARTE-99` | **`ARTE-124`** | A DURAÇÃO DA CENA VIVE EM DOIS RELÓGIOS — quem briefa a arte apl |
| `ARTE-100` | **`ARTE-125`** | CANVAS COM BUFFER INTERMEDIÁRIO RECORTA EM SILÊNCIO — o buffer é |
| `ARTE-101` | **`ARTE-126`** | O `seekTo` DA DOUTRINA FALHAVA EM 4K — três agentes independente |
| `ARTE-102` | **`ARTE-127`** | RUN FUNDIDO SÓ EXISTE SE ESTIVER NO ESPELHO — `_mergedInto` é o  |
| `ARTE-103` | **`ARTE-128`** | TEXTO QUE SE DATILOGRAFA É UM BLOCO — a chave do `qc-carga` é co |
| `ARTE-104` | **`ARTE-129`** | A CENA PODE ESTAR PERFEITA E NO LUGAR ERRADO — todo gate julgava |
| `ARTE-105` | **`ARTE-130`** | TRÂNSITO É RÁPIDO — a peneira "saiu inteiro, logo estava passand |
| `ARTE-106` | **`ARTE-131`** | COMPARAÇÃO DE ESCALA É MEDIÇÃO, NÃO FIGURA DE LINGUAGEM — quem e |
| `ARTE-107` | **`ARTE-132`** | CÂMERA COM PUSH-IN REDEFINE O QUADRO — compor no sistema LOCAL d |
| `ARTE-108` | **`ARTE-133`** | DOIS GATES DISCORDANDO DA MESMA CENA APONTAM UM TERCEIRO ARTEFAT |
| `ARTE-109` | **`ARTE-134`** | GATE QUE SEMPRE ACUSA É GATE QUE NINGUÉM OBEDECE — E CONVIDA A " |
| `ARTE-110` | **`ARTE-135`** | O `qc-janela` MEDE DURAÇÃO CONTRA A `dur` BRUTA — é cego para o  |
| `ARTE-111` | **`ARTE-136`** | `qc-tamanho` COLETA OS CANDIDATOS ANTES DO LOOP DE TEMPO — texto |
| `ARTE-112` | **`ARTE-137`** | O QUE OCUPA O MESMO RETÂNGULO SE SUCEDE, NÃO COEXISTE (dois caso |
| `ARTE-113` | **`ARTE-138`** | CRÉDITO CORTADO PELA BORDA — O DEFEITO QUE NENHUM GATE VÊ (medid |
| `REND-53` | **`REND-66`** | O teto de 1800 s é um relógio CEGO calibrado em máquina vazia —  |
| `REND-54` | **`REND-67`** | Consertar o `.sh` que está RODANDO mata o loop em execução — o b |
| `REND-55` | **`REND-68`** | O vigia de shard mata durante o WARM-UP, quando matar custa TUDO |
| `REND-56` | **`REND-69`** | Re-render de cena PRONTA destrói o clipe antes de saber se conse |
| `REND-57` | **`REND-70`** | Rota especial que depende de alguém LEMBRAR é rota que não exist |
| `REND-58` | **`REND-71`** | Render pode chegar com a ARTE ainda de pé — cruze a fila de cons |
| `REND-59` | **`REND-72`** | "ESTOUROU O TETO" é o rótulo que o loop dá a QUALQUER morte por  |
| `REND-60` | **`REND-73`** | Clipe que sumiu do disco pode estar VIVO no bucket — procure ant |
| `REND-61` | **`REND-74`** | Conserto commitado pode ser APAGADO por quem consertou outra coi |
| `REND-62` | **`REND-75`** | Antes de disparar o render, procure o loop que já está de pé — e |
| `REND-63` | **`REND-76`** | Rode os gates de ELEGIBILIDADE antes dos de PREPARO — normalizar |
| `REND-64` | **`REND-77`** | O carimbo `.de-html` prova que o HTML não mudou — e é cego para  |
| `PESQ-32` | **`PESQ-42`** | Arquivo em `_media/` não é mídia entregue — só o HTML põe na tel |
| `PESQ-37` | **`PESQ-43`** | QUEM ESCREVE O BRIEFING ENTREGA A LEI JUNTO — e memória velha vi |
| `PESQ-38` | **`PESQ-44`** | QUEM TIRA MÍDIA DO DISCO RECONCILIA QUEM A CITA — apagar não é n |
| `FIN-56` | **`FIN-100`** | O MASTER PODE ESTAR NUM RELÓGIO E O RESTO DO XML NOUTRO — e a co |
| `FIN-57` | **`FIN-101`** | UM ARQUIVO TEM VÁRIAS DURAÇÕES, E A DO MIC NÃO É A DO VÍDEO (03/ |
| `FIN-58` | **`FIN-102`** | A ROTA NOVA HERDOU A DOCUMENTAÇÃO DA ANTIGA SEM HERDAR O CÓDIGO  |
| `FIN-59` | **`FIN-103`** | O AVANÇO DE UMA FAIXA DE TRILHA NÃO É A DURAÇÃO DELA (03/ago/202 |
| `FIN-60` | **`FIN-104`** | O LUGAR ONDE A ÂNCORA BATE 100% PODE SER JUSTAMENTE O LUGAR QUE  |
| `FIN-61` | **`FIN-105`** | O BURACO TEM TAMANHO FIXO E A PEÇA QUE O TAPA, NÃO (03/ago/2026, |
| `FIN-62` | **`FIN-106`** | A ARTE FOI DESENHADA CONTRA UM RELÓGIO QUE A TIMELINE NÃO TOCA ( |
| `FIN-63` | **`FIN-107`** | PEÇA WORD-LOCKED CUJA PALAVRA FOI CORTADA SE DESCARTA — DESLOCAR |
| `FIN-64` | **`FIN-108`** | `--corrigir` NUM ESPELHO QUE JÁ TEM ARTE É OPERAÇÃO DESTRUTIVA — |
| `FIN-67` | **`FIN-109`** | O overlay POSICIONAL conta os segundos do zero do BRUTO — e o ví |
| `FIN-68` | **`FIN-110`** | A transcrição regerada DEPOIS do espelho desalinha o gate — e o  |
| `FIN-69` | **`FIN-111`** | Overlay alpha renderizado em H.264 vira TELA OPACA por cima do a |
| `FIN-70` | **`FIN-112`** | Casamento de SUBSTRING vira rótulo falso — e o rótulo falso apag |
| `FIN-71` | **`FIN-113`** | Aviso que só aparece quando o passo FALHA não é aviso — e o suce |
| `FIN-74` | **`FIN-114`** | DECUPAR DEPOIS DE RENDERIZAR deixa a arte com a janela BRUTA — e |
| `FIN-72` | **`FIN-115`** | A PROVA REPROVOU O PRÓPRIO TRABALHO — três vezes, e nenhuma era  |
| `FIN-73` | **`FIN-116`** | A estação relatou um estado que não era o dela — CSV de outro do |
| `FIN-75` | **`FIN-117`** | Laudo mais VELHO que a peça não certifica a peça — o gate lia o  |
| `FIN-76` | **`FIN-118`** | Âncora posicional é do relógio do ESPECTADOR — 12 s no bruto vir |
| `FIN-77` | **`FIN-119`** | A música do capítulo começava DEPOIS do card — e o card de abert |
| `FIN-84` | **`FIN-120`** | `_cards-titulo.json` só existe na rota pré-editada — na edição d |
| `FIN-85` | **`FIN-121`** | O que variava não era o sufixo do id, era a POSIÇÃO do número —  |
| `FIN-86` | **`FIN-122`** | Lei implementada em UM ramo é lei que vale por acaso — quem esco |
| `SIS-72` | **`SIS-104`** | O gate chamava um binário que não existe na VM, e o catch transf |
| `SIS-75` | **`SIS-105`** | Gate AUTO-DECLARADO não é gate — e lei nova não conserta o acerv |
| `SIS-76` | **`SIS-106`** | "NÃO MEDIU" E "PASSOU" SÃO A MESMA COR NO RODAPÉ — e o rodapé é  |
| `SIS-77` | **`SIS-107`** | SESSÃO FILHA NÃO ESCREVE EM SYMLINK QUE SAI DO REPO — e o "sem-m |
| `SIS-78` | **`SIS-108`** | DIAGNÓSTICO NO DIÁRIO NÃO MOVE A ESTAÇÃO — o despachante lê a FI |
| `SIS-79` | **`SIS-109`** | DUAS FILAS COM NOMES PARECIDOS: a estação despacha o conserto nu |
| `SIS-90` | **`SIS-110`** | Avançar a partir de ONDE O REGISTRO ESTÁ cria ciclo — e apaga bl |
| `SIS-91` | **`SIS-111`** | Conserto no disco não vale para processo VIVO — o motor 24/7 rod |
| `SIS-92` | **`SIS-112`** | Veredito verde precisa de POPULAÇÃO atrás dele — "OK em 0 arquiv |
| `SIS-93` | **`SIS-113`** | Campo criado para desambiguar que ninguém LÊ reprova o acervo in |
| `SIS-94` | **`SIS-114`** | O carimbo do portão grava "passou" sobre uma medição que não aco |
| `SIS-95` | **`SIS-115`** | Gate que lê o ARQUIVO em vez do CÓDIGO pune quem documentou o co |

### Entraram com o número original (a vaga estava livre)

`ARTE-114` · `ARTE-115` · `ARTE-116` · `ARTE-117` · `ARTE-118` · `ARTE-119` · `ARTE-120` · `ARTE-121` · `ARTE-122` · `ARTE-123` · `PESQ-39` · `PESQ-40` · `PESQ-41` · `FIN-65` · `FIN-66` · `FIN-78` · `FIN-79` · `FIN-80` · `FIN-81` · `FIN-82` · `FIN-83` · `FIN-87` · `FIN-88` · `FIN-89` · `FIN-90` · `FIN-91` · `FIN-92` · `FIN-93` · `FIN-94` · `FIN-95` · `FIN-96` · `FIN-97` · `FIN-98` · `FIN-99`

### ⚠️ Pendentes de fusão HUMANA — **RESOLVIDAS em 05/ago**

As seis foram abertas uma a uma e comparadas linha a linha. O resultado desmonta a suposição de que
"cada lado tinha um pedaço":

| lei | veredito | por quê |
|---|---|---|
| `ROT-68` | Mac **contém** a VM | o Mac tem 13 linhas a mais — o corolário de 03/ago (*"é o padrão do formato" é o que mantém a promessa exagerada de pé*) |
| `ARTE-89` | Mac **contém** a VM | o Mac carrega o aviso de que foi **superada pela [ARTE-106]**; a VM ainda prescrevia o teto de ~8 s como régua ativa |
| `ARTE-93` | 🔀 **FUNDIDA** | a VM tinha 12 linhas que o Mac não tinha: a **quarta raiz** achada em 03/ago no `o-acre` — o `qc-janela` lia a lei ao CONTRÁRIO, reprovando os dois cards certos e absolvendo o único frágil |
| `FIN-48` | Mac **contém** a VM | o Mac registra que a lei **falhou quatro dias depois de escrita** e aponta a [FIN-76], que crava o objeto da medição |
| `FIN-55` | idênticas | diferiam só num separador `---` |
| `SIS-67` | idênticas | idem |

**A régua que sobra disto:** o lado que tem a lei mais LONGA não é o mais completo — é o que registrou
o que deu errado depois. Cinco das seis já traziam a correção posterior no Mac, e a única que faltava
era um caso em que a VM viu o defeito primeiro. Comparar por tamanho teria trocado quatro leis
corrigidas por quatro leis ingênuas.

---

## 🔀 Colisão do merge de 08/ago/2026 — 14 números com DUAS leis cada

Os merges `488efef` (*"une VM e Mac — leis por união"*) e `ed014e8` (*"Mac e VM finalmente na mesma
linha"*) juntaram os **textos** e não resolveram os **números**. Resolvido em 08/ago.

⚠️ **Esta tabela NÃO tem o formato "era → virou" da fusão de 05/ago, e a diferença importa.** Lá o ID
antigo ficava VAGO; aqui **nenhum ficou**. Cada número da primeira coluna continua vivo e passou a
significar outra coisa — que é o caso que este documento já descreve como *pior que o link morto: o
agente lê uma lei plausível e age com confiança na regra errada*. A coluna da direita diz apenas
para onde foi a lei que **perdeu** o número.

**Quem manteve o número:** o lado do Mac (`d21eaf7`/`39e6f2c`), decidido por **alcance de citação**,
a mesma régua de 05/ago (*antiguidade não decide; alcance decide*) — medido antes de escolher: as
citações vivas de `SIS-125`, `SIS-128`, `SIS-130`, `SIS-131`, `REND-80`, `REND-81`, `FIN-129` e das
quatro `ARTE-` apontavam para o lado do Mac. Em `SIS-125`, `SIS-126`, `REND-80` e `REND-81` a
antiguidade concorda: o Mac é de 06/ago e a VM, de 07/ago.

| o número CONTINUA sendo… (lado Mac) | …e esta lei PERDEU o número (lado VM) | virou |
|---|---|---|
| `ARTE-150` em cena de mapa, o gate mede uma cena que NÃO vai ao ar | a declaração de composição nasce COM a cena, não no QC *(era `ARTE-148` na VM)* | **`ARTE-159`** |
| `ARTE-151` gate que lê HTML estático numa casa que monta DOM por script | julgar arte contra um plano no meio da linha condena o que está certo *(era `ARTE-149`)* | **`ARTE-160`** |
| `ARTE-155` a URL identifica a FONTE, não o item | a fonte errada não era o PESO, era a FAMÍLIA *(era `ARTE-153`)* | **`ARTE-161`** |
| `ARTE-156` `variantes_ouvidas` guarda duas espécies opostas | marcação sobre mídia real: a coordenada se MEDE, nunca se estima *(era `ARTE-154`)* | **`ARTE-162`** |
| `REND-80` o preto do estúdio vai a ZERO no encode (06/ago) | na estação de render, reprovação de gate se re-mede isolada | **`REND-91`** |
| `REND-81` a GPU não acelera o master (06/ago) | o `normalizar-footage.mjs` foi consertado — o defeito que faltava era o que APROVAVA | **`REND-92`** |
| `FIN-129` contar o clipe que o XML CITA não é contar a cena que o espelho PEDE | o gap do card tem UM dono — e o master novo virou o segundo | **`FIN-139`** |
| `SIS-125` o relógio de um arquivo é o próprio arquivo (06/ago) | a PASTA sobrevive à régua, e por isso o ponteiro morto não parece morto | **`SIS-183`** |
| `SIS-126` cache sem chave de RECEITA mente (06/ago) | o conserto de código na VM morre no próximo `reset --hard` | **`SIS-184`** |
| `SIS-127` `node --check` prova que parseia, não que roda | seletor morto falha alto; seletor vivo no alvo errado falha calado | **`SIS-185`** |
| `SIS-128` duas listas do mesmo objeto | o BLOQUEIO estava no laudo, não na fila | **`SIS-186`** |
| `SIS-129` a prova de uma estação não mora em pasta que outra estação povoa | devolver uma estação não basta: o despachante a promove de volta | **`SIS-187`** |
| `SIS-130` mudar vocabulário de contrato tem dois lados | instrução que aponta para arquivo inexistente não falha — ela é improvisada | **`SIS-188`** |
| `SIS-131` daemon-reload derruba timer static | a trava existia, e morava no loop do RELATÓRIO | **`SIS-189`** |

### O caso `FIN-129`, que não era colisão de duas leis — era uma lei partida ao meio

Na VM o `FIN-129` estava escrito **duas vezes de propósito**: a lei (`## FIN-129 · O gap do card tem
UM dono`) e o adendo dela (`### FIN-129 · adendo do qa-montagem — a linha exata e o terceiro
estado`). O renumerador do merge só reconhecia `### `, então **renumerou o adendo para `FIN-139` e
deixou a lei em `FIN-129`** — partindo em duas o que era um texto só, e roubando o número do Mac.
Os dois voltaram a ser uma coisa só sob **`FIN-139`**; o adendo perdeu o cabeçalho de lei e voltou a
ser adendo, com o título original restaurado.

### As duas cegueiras de cabeçalho que produziram tudo isto

O renumerador do merge e o §2ac do `doctor` conhecem sintaxes DIFERENTES de cabeçalho de lei, e
nenhum dos dois conhece as três que o disco usa (a definição única está em `scripts/lib/leis.mjs`): **[porte Regie: não veio — `lib/leis.mjs`]**

- **`### ` só** — o renumerador do merge. Por isso passaram intactos o `## FIN-129 ·` e os
  `**REND-80.**`/`**REND-81.**`, que ficaram em cima de números do Mac.
- **`#{2,4}` só** — o §2ac do `doctor`. Ele **não vê o estilo negrito antigo**, e por isso as
  colisões `REND-80` e `REND-81` não apareciam no laudo: das 14, ele enxergava 12. Os dois
  cabeçalhos em negrito foram convertidos para `###` ao serem renumerados, para que a próxima
  colisão no mesmo lugar seja vista.

### Citações atualizadas junto (as que apontavam para a lei que mudou de número)

| arquivo | era | virou |
|---|---|---|
| `seed/regras/SIS.md` (5 pontos, no corpo das próprias leis) | `[SIS-126]` ×3 · `[SIS-128]` ×4 · `[SIS-129]` | `[SIS-184]` · `[SIS-186]` · `[SIS-187]` |
| `seed/regras/REND.md` (corpo da `REND-78`) | `[REND-81]` ×2 | `[REND-92]` |
| `seed/regras/FIN.md` (corpo da `FIN-140`) | `[FIN-129]` | `[FIN-139]` |
| `scripts/estudio/estacoes/qc.md` | `[SIS-128]` | `[SIS-186]` |
| `scripts/normalizar-footage.mjs` | `[REND-81]` | `[REND-92]` |
| `.claude/agents/pesquisa-imagens.md` | `[REND-81]` | `[REND-92]` |

**Não foram tocadas**, e é deliberado: as citações que já apontavam para o lado do Mac (as de
`scripts/decupagem/*.mjs`, `knowledge/ARQUITETURA.md`, `PEDIDOS-MATEUS.md`, `NOITE-07AGO.md`) —
elas estavam certas antes e continuam certas. E `docs/registro/AUDITORIA-DOUTRINA-2026-08-08.md`, que é
**registro datado do passado**, não doutrina viva: retrato não se reescreve.

---

## 🔀 Colisão do merge de 08/ago/2026 — 2ª rodada, o ramo `vm-estudio-top10-2026-08-08`

**É a terceira vez que o mesmo defeito volta** (05/ago, 08/ago de manhã, e agora). A VM seguiu
commitando sozinha depois do merge anterior e, sem enxergar o `main`, deu às leis novas números que já
estavam ocupados do outro lado. Foram **19 commits da VM** contra **22 do remoto**, merge-base `488efef`.

Duas espécies de colisão — e a segunda é nova neste ciclo:

- **13 números colidiam com o `main`**: `SIS-163`…`SIS-170`, `ARTE-152/153/161/162`, `FIN-144`.
- **5 leis colidiam DENTRO do próprio arquivo da VM.** `SIS-163`, `SIS-164`, `SIS-165` e `PESQ-60`
  aparecem **duas vezes cada** no ramo da VM, com leis diferentes, porque commits distintos reservaram
  o mesmo número sem se enxergar. Essa metade não é culpa do merge: já estava errada na origem.
- Um caso à parte: a VM escreveu uma lei nova reusando `ARTE-139`, número de uma lei de 06/ago que
  continua viva no `main` (*o apresentador fica AO LADO da informação*).

**Quem manteve o número: o `main`, em todos os casos** — não por antiguidade, mas por **alcance**:
é o que as outras máquinas leem e citam. A `FIN-144` do remoto (o gap de card, decisão do Mateus)
manteve o número por decisão explícita.

**Nenhuma lei foi FUNDIDA, e isso foi conferido, não presumido:** busquei no `main` a frase
distintiva de cada descoberta da VM e nenhuma já existia lá. O caso mais próximo de fusão era a lei
da cena-filha de run fundido, vizinha da `ARTE-127` (*run fundido só existe se estiver no espelho*) —
são discobertas distintas: uma diz onde o run fundido se declara, a outra que o despachante de arte
não sabia disso. Ficaram separadas.

| a lei da VM | era | virou | por quê |
|---|---|---|---|
| O gate mede a CAIXA; o espectador vê a TINTA | `SIS-163` | **`SIS-199`** | número ocupado no `main` |
| Bloqueio declarado por engano custa mais caro que bloqueio real | `SIS-164` | **`SIS-200`** | número ocupado no `main` |
| Palavra solta na prosa não vence sinal deliberado — a cota carimbava por cima | `SIS-165` | **`SIS-201`** | número ocupado no `main` |
| Gate que acusa a maioria não é rigoroso — é cego, e ensina a ignorar a lista | `SIS-163` | **`SIS-202`** | número ocupado no `main` |
| Classificador de gate tem de exigir a PROVA do PASS — silêncio não é aprovação | `SIS-164` | **`SIS-203`** | número ocupado no `main` |
| "Todos os gates verdes" só vale para os gates que você RODOU — a lista está em | `SIS-165` | **`SIS-204`** | número ocupado no `main` |
| O ImageMagick não existe na VM — e a armadilha de portabilidade tem MÃO DUPLA | `SIS-166` | **`SIS-205`** | número ocupado no `main` |
| O DOSSIÊ DETERMINÍSTICO É ONDE UM BUG DE CÓDIGO VIRA DECISÃO EDITORIAL — E ELE | `SIS-167` | **`SIS-206`** | número ocupado no `main` |
| A heurística que filtra o ruído CEGA para a troca — pergunte se o DECLARADO é | `SIS-168` | **`SIS-207`** | número ocupado no `main` |
| O `find` da VM não é o GNU find — e o binário trocado quebrou três guarda-corp | `SIS-169` | **`SIS-208`** | número ocupado no `main` |
| Escrever o veredito no campo certo não é o mesmo que o campo ser LIDO — a [SIS | `SIS-170` | **`SIS-209`** | número ocupado no `main` |
| A `ancora` do espelho é o ROTEIRO — quem diz o que foi FALADO é o `words-fina | `ARTE-152` | **`ARTE-163`** | número ocupado no `main` |
| Declarar não basta: tem de declarar ONDE o gate olha — a janela de contexto é | `ARTE-153` | **`ARTE-164`** | número ocupado no `main` |
| No `qc-carga`, cada `<span class="grifo">` conta como um BLOCO DE TEXTO própr | `ARTE-161` | **`ARTE-165`** | número ocupado no `main` |
| Multiplicador na tela usa a PALAVRA da voz, não o resultado da conta (08/ago/ | `ARTE-162` | **`ARTE-166`** | número ocupado no `main` |
| A CENA-FILHA DE RUN FUNDIDO NÃO SE DESENHA, E O DESPACHANTE DE ARTE NÃO SABIA | `ARTE-139` | **`ARTE-167`** | número ocupado no `main` |
| espelho sujo não é montagem quebrada — simule a lista antes de devolver o víde | `FIN-144` | **`FIN-147`** | número ocupado no `main` |
| Filtro de orientação na URL é uma DECLARAÇÃO; o `ffprobe` no arquivo é a MEDID | `PESQ-60` | **`PESQ-61`** | **duplicado na própria VM** |

### Entraram com o número original (a vaga estava livre)

- `FIN-145` — o caminho da RETOMADA tem de fazer tudo que o caminho longo faz
- `FIN-146` — o gap de card tem DOIS donos, e os dois o abrem — o buraco sai em dobro e fora
- `PESQ-58` — A categoria "sem procedência declarada" ESCONDE a violação — declare primeiro,
- `PESQ-59` — Dividir um `pesquisa-*` em lotes duplica o NOME do shard — e o segundo a salva
- `PESQ-60` — "Conferido em 1:1" não diz ONDE — declaração de identidade nacional nomeia os

### Citações atualizadas junto

Três referências cruzadas dentro do texto acrescentado apontavam para números que mudaram, e foram
remapeadas na mesma passada. Duas delas eram **ambíguas** por causa da duplicata interna — `[SIS-163]`
e `[SIS-164]` podiam significar duas leis cada — e se resolveram pelo que a própria frase diz:
*"lá o gate acusava demais"* só cabe no gate que acusa a maioria (→ `SIS-202`), e *"lá o classificador
absolvia por silêncio"* só cabe no classificador que exige a prova do PASS (→ `SIS-203`).

*Renumeração feita por script, não à mão* — 23 leis, 18 renumeradas, referências cruzadas incluídas.

### ⚠️ Mais DUAS, achadas depois — e o motivo de terem escapado

| era (na VM) | virou | lei |
|---|---|---|
| `ARTE-159` | **`ARTE-168`** | `line-height` menor que a métrica da fonte colide sem a tinta encostar |
| `ARTE-160` | **`ARTE-169`** | O número que o gate acusa pode não estar escrito em lugar nenhum |

A renumeração acima cobriu 23 leis e declarou "zero IDs duplicados". Estas duas passaram, e o
diagnóstico importa mais que o conserto: **os dois lados escrevem cabeçalho de lei em estilos
diferentes** — o main usa `### ARTE-159 · …` e a `estudio-top10` usa `## [ARTE-159] …`. O regex
canônico (`scripts/lib/leis.mjs`) aceitava colchete só no estilo **negrito**, nunca no de **[porte Regie: não veio — `lib/leis.mjs`]**
**cabeçalho**: depois de `#{2,}\s+` ele exigia a letra do domínio e encontrava `[`.

Consequência: o `regras-todas.mjs` **tem** gate de ID repetido desde a [SIS-62] e mesmo assim deu
PASS no merge — *ele não conta o que não vê, e um gate cego não acusa, ABSOLVE*. O verde saiu de
uma contagem que ignorava as duas leis.

Raiz consertada no regex canônico, com os dois lados medidos antes (6 domínios: só ARTE muda,
167 → 169, zero falso positivo). Com o conserto, o gate acusou as duas na hora.

## Renumeração de 08/ago/2026 — colisão Mac × VM (merge da auditoria de gargalos)

As leis abaixo nasceram na `estudio-top10` sem commit enquanto o Mac numerava as suas. Ao fundir,
dois pares tinham o MESMO número com conteúdo diferente. Quem citar o número antigo, leia aqui:

| citado como | virou | lei |
|---|---|---|
| ARTE-163 (cena-filha de run fundido) | **ARTE-167** | era a MESMA lei, escrita nas duas máquinas com números diferentes |
| ARTE-164 (o `modelo` do espelho decide a régua) | **ARTE-168** | colidia com a ARTE-164 do Mac (declarar ONDE o gate olha) |
| ARTE-165 (o motor de mapa obedece pela metade) | **ARTE-169** | colidia com a ARTE-165 do Mac (`grifo` conta como bloco) |

*Causa: numeração de lei é um contador global e cada máquina tinha o seu. Duas árvores sem troca
diária produzem o mesmo número para leis diferentes — e o merge automático não vê, porque os
parágrafos não se tocam.*

---

### As QUATRO leis de PESQ da mesma noite, que ficaram fora desta tabela até 04/set/2026

O mesmo merge renumerou `PESQ-50` a `PESQ-53` para `PESQ-54` a `PESQ-57`, e isso **nunca foi
escrito aqui**. As leis carregam a marca no próprio cabeçalho (`### PESQ-56 · [renumerado de PESQ-52
no merge de 08/ago — colisão entre Mac e VM]`), mas o cabeçalho da lei NOVA não é onde quem cita a
VELHA vai procurar — quem cita o número velho procura nesta tabela, e ela estava muda.

| citado como | virou | lei |
|---|---|---|
| `PESQ-50` | **`PESQ-54`** | "sem prova" ≠ "sem declaração": 218 arquivos "? SEM PROVA" e ZERO proibidos (`o-acre`) |
| `PESQ-51` | **`PESQ-55`** | o gate de relevância do `baixar.mjs` reprovava TODA busca de `--tipo=foto` (`dentro-do-sol`) |
| `PESQ-52` | **`PESQ-56`** | quem declara falta, MEDE a falta — pendência é ordem de compra, e refazer trabalho pago é o custo |
| `PESQ-53` | **`PESQ-57`** | recaça que substitui take já escolhido editorialmente (`especies-humanas`) |

⚠️ **`PESQ-50` e `PESQ-51` foram REOCUPADOS por leis novas** (07 e 08/ago), então esses dois números
são AMBÍGUOS em texto antigo: leia a data da citação antes de resolver por esta tabela. `PESQ-52` e
`PESQ-53` estão VAGOS — citação a eles é sempre ponteiro para o vazio.

**Por que isto ficou dois meses invisível, e é a lição:** os dois lados sabiam, e nenhum era a
tabela. O `pesquisa-imagens` já registrava, em prosa, que `[PESQ-52]` era *"número renumerado no
merge de 08/ago e nunca reatribuído, ou seja, um ponteiro para o vazio"* — conhecimento certo, no
lugar errado. *Um assunto, um dono, um lugar:* quem é dono de "para onde foi este número" é esta
tabela, e o que mora só na prosa de um agente não chega a quem lê outro.

⚠️ **E ATENÇÃO AO FORMATO DA LINHA.** O `doctor` §5 só reconhece a ponte quando os dois lados vêm
como <code>| \`DOM-NN\` | **\`DOM-NN\`** |</code> — com crase nos dois e negrito no segundo. As levas de
08/ago escritas sem crase (`| PESQ-45 | **PESQ-62** |`, logo abaixo) **não entram** no índice de
82 pontes que o doctor imprime: estão escritas para gente e invisíveis para o gate.

---

## Renumeração de 08/ago/2026 (2ª leva) — o `stash pop` que virou commit

**Causa, e ela é diferente da leva acima.** O commit `b4bd76a` ("casa limpa na VM") registrou um
`git stash pop` **conflitado sem resolver**: 35 blocos `<<<<<<< Updated upstream` / `>>>>>>> Stashed
changes` em 17 arquivos, empurrados para o remoto. Em `seed/regras/` o conflito era **aditivo** — os
dois lados traziam leis DIFERENTES, não versões do mesmo texto —, então resolver foi **manter os
dois** e renumerar quem chegou por cima de número ocupado. Descartar um lado teria apagado 437
linhas de doutrina.

**O desempate não foi palpite:** para 11 das 13, a lei que veio do lado `Stashed changes` é a que
renumera (provado contra `git show 07152c4:` e contra o lado preservado em
`arquivo-morto/2026-08-conflito-stash-pop/`). Para `ARTE-168`/`ARTE-169`, em que os dois lados já
vinham do pai, o critério foi o ESTILO do cabeçalho — `## [ARTE-NNN]` é o formato da VM, renumerado
por engano para número ocupado; `### ARTE-NNN ·` é o da casa. A tabela da leva anterior confirma
isso por fora: ela já registrava `ARTE-168` = *o modelo do espelho decide a régua* e `ARTE-169` = *o
motor de mapa obedece pela metade*, que são exatamente as duas que ficaram.

| citado como | virou | lei |
|---|---|---|
| ARTE-139 | **ARTE-170** | INSTRUMENTO DE ROLAGEM: meça o glifo mais largo contra a janela |
| ARTE-140 | **ARTE-171** | TRAMA NÃO É INFORMAÇÃO — declare `data-qc-ornamento` |
| ARTE-141 | **ARTE-172** | a partitura pode chegar no eixo errado — confira com uma subtração |
| ARTE-142 | **ARTE-173** | o gate de carga te dá o PICO, não a lista |
| ARTE-168 | **ARTE-174** | `line-height` menor que a métrica da fonte colide sem a tinta encostar |
| ARTE-169 | **ARTE-175** | o número que o gate acusa pode não estar escrito em lugar nenhum |
| PESQ-45 | **PESQ-62** | o formato da prova só existia dentro do gate |
| PESQ-47 | **PESQ-63** | a trava de caça serializa a CONTA; o perfil do Chrome serializa o resto |
| PESQ-48 | **PESQ-64** | cota diária esgotada é a TERCEIRA causa |
| FIN-123 | **FIN-149** | áudio encodado em PEDAÇOS estala em cada emenda |
| FIN-123 | **FIN-150** | são TRÊS arquivos de fala, não dois |
| FIN-127 | **FIN-151** | a nota da estação envelhece e manda ligar o antecessor |
| FIN-128 | **FIN-152** | capítulo longo é bimodal, e o picker só infere um mood |

⚠️ **`FIN-123` aparece duas vezes porque tinha TRÊS leis**, não duas — a de `graphics/ guarda FONTE`
manteve o número. Colisão tripla é invisível para quem lê "duas leis com o mesmo ID" e conta pares.

*A lição não é sobre numeração: é que **um conflito de merge commitado cru não dá erro em Markdown**.
Nos 5 `.mjs` do mesmo commit o defeito gritou na hora (`SyntaxError`, o despachante parou de rodar);
nas leis ele ficou mudo, e um agente leria `<<<<<<< Updated upstream` como se fosse doutrina.*

### 3ª leva, mesma noite — `SIS-208` (08/ago/2026)

| citado como | virou | lei |
|---|---|---|
| SIS-208 (a lista de "o que ainda falta" de um laudo vence em minutos) | **SIS-217** | colidia com a SIS-208 do `find` da VM, que é a estabelecida (citada no `CLAUDE.md`) |

⚠️ **Esta colisão nasceu DEPOIS das outras 13, num `git pull` de rotina** — outra sessão destilou
uma SIS-208 na VM enquanto o Mac já tinha a sua. É a mesma causa da leva anterior e vai se repetir
enquanto o contador de leis for global e cada máquina tiver o seu: *duas árvores sem troca diária
produzem o mesmo número para leis diferentes, e o merge automático não vê, porque os parágrafos não
se tocam.* O que muda é que agora o gate ACUSA — antes ele absolvia, por ver só um dos dois estilos
de cabeçalho.

---

### 4ª leva — `PESQ-75` (11/ago/2026), e a previsão acima se cumprindo

| citado como | virou | lei |
|---|---|---|
| PESQ-75 (o laudo do QC RECOMENDA arquivo, e recomendação não passa por gate — `s107` do `mamute-de-volta`, 11/ago) | **PESQ-76** | colidiu com a PESQ-75 do Mac (a exceção do dono à proibição de acervo, `senna`, 10/ago), que é a mais ANTIGA e por isso ficou com o número |

⚠️ **A frase da leva anterior — *"vai se repetir enquanto o contador de leis for global e cada
máquina tiver o seu"* — se cumpriu em três dias, e desta vez com o intervalo medido.** O Mac estava
**56 commits atrás** da VM, com 43 arquivos modificados que nunca tinham sido commitados; a VM se
mantinha em dia sozinha, por um timer de 20 em 20 minutos que este lado nunca teve. Duas máquinas
destilaram lei no mesmo dia sem que nenhuma pudesse ver o que a outra escrevia.

**O conserto desta vez foi na causa, não no sintoma:** o Mac ganhou o relógio que faltava
(`com.top10.sincronizar-codigo`, 15 em 15 min, `scripts/estudio/sincronizar-codigo-mac.sh`). Ele não
elimina a possibilidade de colisão — duas leis destiladas no mesmo quarto de hora ainda colidem —,
mas reduz a janela de dias para minutos, e é a janela que produz o estrago. *A colisão de numeração
não é um defeito do contador: é o preço de duas cabeças escrevendo no mesmo ramo, e o que se pode
comprar é a distância entre elas.*

⚠️ **Renumeração é PERDA DE RASTRO se não for registrada aqui.** Quem ler um commit anterior a
11/ago citando "PESQ-75" sobre o laudo do QC precisa achar a lei — e ela agora tem outro número. Por
isso a lei renumerada carrega, no próprio corpo, a nota de onde veio, e o
`scripts/qc-agentes-regressao.mjs` lê ESTA TABELA para não acusar de "lei perdida" quem apenas **[porte Regie: não veio — `qc-agentes-regressao.mjs`]**
seguiu a renumeração.

---

### 5ª leva — `ARTE-204` e `ARTE-205` (11/ago/2026), na RECUPERAÇÃO de 24 leis apagadas

| citado como | virou | lei |
|---|---|---|
| ARTE-204 (crédito no ar antes da mídia que ele credita — a [ARTE-179] lida pela metade) | **ARTE-209** | colidia com a ARTE-204 do mesmo dia ("clipe substituto se julga varrendo o arquivo inteiro"), que veio primeiro no arquivo |
| ARTE-205 (a máscara de dígito do `qc-carga` não cobre o count-up que termina em PALAVRA) | **ARTE-210** | colidia com a ARTE-205 do mesmo dia ("crédito ilegível tem TRÊS causas"), que veio primeiro no arquivo |

⚠️ **Estas duas colisões são de origem diferente das quatro levas acima, e o padrão é pior:** as
anteriores nasceram de DUAS MÁQUINAS sem troca diária. Estas nasceram na MESMA máquina
(`estudio-top10`), no MESMO dia — duas sessões paralelas destilando lei sem ver uma à outra, cada
uma perguntando ao disco qual era o próximo número livre e recebendo a mesma resposta.

*Sincronizar as máquinas não resolve isto.* O contador continua sendo "o maior que existe no
arquivo agora", e duas sessões que leem no mesmo minuto leem o mesmo número. `top10 lei
--proximo=DOM` responde, mas responde a mesma coisa para as duas. **A janela encolheu de dias para
segundos; ela não fechou.**

⚠️ **E as duas só foram encontradas porque estavam APAGADAS.** Elas sumiram do repositório em
`d5a9837` (10/ago, 22:52) junto com outras 22 leis, e voltaram na recuperação de 11/ago — que foi
quando a duplicata apareceu. Ver o commit da recuperação para o mecanismo do apagamento.

---

### 6ª leva — as 16 leis RECUPERADAS de 10/ago que voltaram por outro número (11/ago/2026)

| citado como | virou | por quê |
|---|---|---|
| ARTE-198 (O cabeçalho da cena descreve o conserto DAQUELE dia e envelhece calado — e na irmã de RUN FUNDIDO el) | **ARTE-216** | recuperada de `d5a9837^`; o número 198 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-199 (Anel fechado desenhado como SETOR: o arco de ~360° não tem centro, e o fechamento deixa costura (10/) | **ARTE-217** | recuperada de `d5a9837^`; o número 199 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-200 (Gradiente em `objectBoundingBox` dentro de elemento que CRESCE repinta a rampa a cada frame (10/ago/) | **ARTE-218** | recuperada de `d5a9837^`; o número 200 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-201 (Câmera que RECUA precisa de sangria: abaixo de 1× o SVG expõe a própria borda (10/ago/2026, estação ) | **ARTE-219** | recuperada de `d5a9837^`; o número 201 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-202 (`__prepararCaptura` sem `return` deixa o `.then` do t=0 repintar por cima do instante pedido (10/ago) | **ARTE-220** | recuperada de `d5a9837^`; o número 202 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-203 (O gate que delega ao humano a medição que a máquina sabe fazer não é um gate) | **ARTE-221** | recuperada de `d5a9837^`; o número 203 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-204 (Clipe substituto se julga varrendo o ARQUIVO INTEIRO — o defeito costuma ser o offset, não a mídia () | **ARTE-222** | recuperada de `d5a9837^`; o número 204 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-205 (Crédito ilegível tem TRÊS causas, não duas — e a do meio é o texto ESCURO sobre papel claro (10/ago/) | **ARTE-223** | recuperada de `d5a9837^`; o número 205 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-206 (Gate que acha por VOCABULÁRIO e ignora a declaração da cena diz "isento" onde devia dizer "reprovado) | **ARTE-224** | recuperada de `d5a9837^`; o número 206 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-207 (O rodapé do palco 4K não cabe TRÊS níveis de texto — o rótulo da mídia vai para o alto (10/ago/2026,) | **ARTE-225** | recuperada de `d5a9837^`; o número 207 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-208 (Zoom de câmera com origem descentrada tem TETO calculável — acima dele, come DADO nas pontas (10/ago) | **ARTE-226** | recuperada de `d5a9837^`; o número 208 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-209 (Crédito no ar antes da mídia que ele credita — a [ARTE-179] lida pela metade) | **ARTE-227** | recuperada de `d5a9837^`; o número 209 foi reutilizado pela VM enquanto ela esteve fora |
| ARTE-210 (A máscara de dígito do `qc-carga` não cobre o count-up que termina em PALAVRA) | **ARTE-228** | recuperada de `d5a9837^`; o número 210 foi reutilizado pela VM enquanto ela esteve fora |
| SIS-292 (O formato de saída de um agente é contrato implícito — e o parser rígido o quebra em silêncio, sempr) | **SIS-297** | recuperada de `d5a9837^`; o número 292 foi reutilizado pela VM enquanto ela esteve fora |
| SIS-293 (Laço de conserto sem escopo declarado NÃO CONVERGE — ele move o defeito, e a prova é a aprovação que) | **SIS-298** | recuperada de `d5a9837^`; o número 293 foi reutilizado pela VM enquanto ela esteve fora |
| SIS-294 (Contar o que existe não prova a propriedade que importa — cinco gates caíram nisso no mesmo dia) | **SIS-299** | recuperada de `d5a9837^`; o número 294 foi reutilizado pela VM enquanto ela esteve fora |
⚠️ **Esta leva tem uma causa que as cinco anteriores não têm: as leis estiveram FORA do repositório
por um dia inteiro.** Elas foram escritas em 10/ago, apagadas horas depois pelo commit `d5a9837`
(que removeu 2.028 linhas de doutrina de uma vez), e recuperadas em 11/ago do estado anterior.

**No intervalo, a `estudio-top10` reutilizou os números vagos para leis NOVAS** — e com toda a
razão: para ela, `ARTE-197` estava livre, porque o apagamento tinha deixado o buraco. Quando as
originais voltaram, o número já tinha dono legítimo, e quem cede é quem chegou depois.

*Um número de lei não é reciclável, e a régua não é "o maior que existe no arquivo": é o maior que
JÁ EXISTIU.* Enquanto o contador for lido do disco, todo apagamento vira um lote de números
zumbis — livres para a próxima sessão e ocupados no histórico.

## Renumerações de 12/ago/2026 (colisão de três sessões paralelas)

| citado como | leia agora | assunto |
|---|---|---|
| `SIS-313` (degrau sem dono) | **SIS-322** | a decupagem fechava no 6 porque o 7 fora revogado com o mesmo número |
| `SIS-314` (worktree nu) | **SIS-323** | o agente vestia doutrina REVOGADA |
| `SIS-315` (driver de arte) | **SIS-324** | falta lock entre sessões no driver de arte |
| `SIS-311` (render que não subiu) | **SIS-325** | artefato que ficou no disco da VM efêmera |

⚠️ Os números 313, 314 e 315 **continuam existindo** e pertencem às leis da outra sessão (painel de
produção, `video_publicado` como série temporal, e a terceira). Não é que sumiram — mudaram de dono.
*Três sessões escrevendo leis na mesma madrugada colidem no contador, e o merge preserva as duas;
quem renumera é quem chega depois.*

## Segunda leva de 12/ago/2026 — achada pelo `qc-sessoes-paralelas.mjs`

| citado como | leia agora | assunto |
|---|---|---|
| `SIS-325` (trava de segurança) | **SIS-327** | trava que dispara em rotina, calibrada pela recuperabilidade |
| `SIS-308` (registra defeito) | **SIS-328** | o sistema registra defeito e não registra qualidade |

⚠️ Os números `SIS-308` e `SIS-325` **continuam existindo** — pertencem às leis que chegaram
primeiro (a pasta × o registro, e o render que não subiu). Não sumiram: têm outro dono.

*Esta leva foi encontrada por ferramenta, não por leitura.* O `qc-sessoes-paralelas.mjs` compara os
CABEÇALHOS de lei por domínio e acusa qualquer número com mais de uma definição — citação no corpo
não conta, senão toda lei que menciona outra viraria alarme falso.

---

## 12/ago/2026 · ARTE-241 → ARTE-248 (a isenção `data-qc-composicao`)

| citação antiga | vale hoje | assunto |
|---|---|---|
| `ARTE-241` (a de 23:17 UTC) | **`ARTE-248`** | a isenção `data-qc-composicao` mora no elemento do `src`, não no contêiner pai |

⚠️ **`ARTE-241` continua existindo** e é a lei que chegou onze horas antes: *o nome do país caía no
país vizinho e os quatro gates de cena aplaudiam.* Não sumiu — tem outro dono.

**Esta colisão já tinha produzido dano quando foi encontrada**, e é o dano exato que a [SIS-245]
descreve: `.claude/agents/editor-de-arte.md` citava `[ARTE-241]` querendo dizer a isenção, e
`.claude/agents/mapista.md` citava `[ARTE-241]` querendo dizer o rótulo de território. **Cada agente
lia a lei errada sem ter como perceber** — o número existe, o texto é plausível, e o assunto é só um
pouco diferente do que ele esperava encontrar. A citação do `editor-de-arte` foi corrigida junto; a do
`mapista` já estava certa e ficou como estava.

*Renumera quem chegou depois* — a lei mais antiga tem mais chance de já estar citada em outros
lugares, e mudar o endereço dela espalharia o erro em vez de o conter.

---

## 13/ago/2026 · SIS-343 → SIS-345 (o conselho da própria ferramenta)

| citação antiga | vale hoje | assunto |
|---|---|---|
| `SIS-343` (a minha, de 01:45 UTC) | **`SIS-345`** | medir o que uma operação destrutiva renderia antes de seguir o conselho da ferramenta |

⚠️ **`SIS-343` continua existindo** e é a lei da outra sessão, 44 minutos anterior: *ancorar o laudo e
a evidência não fecha o laço — quem gasta o agente é a ENCOMENDA*.

⚠️ **E o `git blame` MENTIU sobre qual chegou antes.** A dela aparecia como `13/08 01:01`, a minha como
`12/08 22:45` — a dela commitada na VM (UTC), a minha no Mac (−03). Lidas como estão, a minha parecia
anterior, e eu teria renumerado a lei errada. Quem responde é o **epoch absoluto**
(`git show -s --format='%at'`). *Comparar carimbo de duas máquinas em fusos diferentes é comparar duas
réguas com o zero em lugares distintos* — e neste repositório as duas máquinas SEMPRE estão em fusos
diferentes.

⚠️ **E ela colidiu DUAS vezes.** Renumerei de 343 para 344 e, no intervalo entre escrever e empurrar,
outra sessão publicou a SIS-344 (*proteção que é FLAG não protege*). A lição operacional é de ORDEM:
**junte o remoto ANTES de escolher o número novo.** Renumerar sobre um estado desatualizado é repetir
a mesma corrida com outro número — o `maiorNumero` que você leu já era passado quando você escreveu.

---

## 🪦 Leis REVOGADAS — o texto saiu por decisão, não por acidente

> Lei retirada com o motivo escrito é **decisão**; lei que evapora em silêncio é **defeito**. O
> `qc-leis-sumidas.mjs` lê esta seção e isenta o que estiver aqui — sem ela, o `top10 doctor` ficaria
> em FAIL permanente pedindo de volta um texto que foi mandado apagar.
>
> Formato (o gate casa por ele): `- <ID> — REVOGADA · <motivo, com data e quem decidiu>`

- SIS-240 — REVOGADA em 14/ago/2026 por ordem do Mateus: *"Desative o alarme e apague da tua memória
  essa tarefa programada, para as demais sessões não ligarem mais (eu disse apagar, não parar e dizer
  que não é pra usar)."* Ela regulava como conferir os relógios de sessão antes de ligá-los
  (`CronList` antes de `CronCreate`); com os relógios de sessão extintos, a regra não tem objeto.
- SIS-241 — REVOGADA em 14/ago/2026, mesma ordem. Descrevia por que alarme introspectivo fabrica o
  sintoma que vem medir — o argumento que levou o Mateus a cortar de sete relógios para um, e depois
  para nenhum. **A conclusão dela sobreviveu na prática** (a sessão não agenda nada para si), o texto
  é que saiu junto com a capacidade.

⚠️ **Nenhuma das duas foi substituída por lei nova** — a capacidade inteira deixou de existir. Quem
encontrar citação a esses IDs em texto antigo deve LER esta lápide, nunca reconstruir a regra: o
material original está em `arquivo-morto/2026-08-14-relogios-de-sessao-desligados/`.

---

## 03/set/2026 · a colisão TRIPLA no `FIN-211` (duas worktrees × a main)

| citado como | leia agora | assunto |
|---|---|---|
| `FIN-211` (a do `ate-que-altura-construir`, 04:35 UTC) | **`FIN-213`** | escada de `if(t<X)` não é remap: só é congelamento se o valor virar TEMPO |
| `FIN-211` (a do `piramide-porta-secreta`, 05:12 UTC) | **`FIN-214`** | o hold congelado é derivado do clipe — retomada nele exige `mtime`, não existência |

⚠️ **O `FIN-211` continua existindo, e é de uma TERCEIRA lei** — *promover para camada de cima NÃO é
dedup*, do `brasil-portugues`, que chegou pelo commit e levou junto o `FIN-212`. As duas worktrees não
colidiram só entre si: colidiram com uma lei que **já estava commitada na main** enquanto elas
escreviam. Quem renumera é quem chega depois ([SIS-62]), e aqui as duas chegaram depois.

⚠️ **E o `FIN-211` da main é LASTREADO POR TESTE:** `scripts/testes/cta-nao-cobre-membros.test.mjs` e **[porte Regie: não veio — `testes/cta-nao-cobre-membros.test.mjs`]**
`cta-ativo-por-tipo.test.mjs` casam o cabeçalho pelo TEXTO (`/^### FIN-211 · Promover para camada de
cima NÃO é dedup/m`). Renumerar o lado errado não daria conflito de merge nenhum — daria teste
vermelho num arquivo que ninguém tinha tocado. *Antes de escolher qual lado renumera, pergunte quem já
tem CÓDIGO apontando para o número;* o lado com lastro é o que fica.

**O desempate entre as duas worktrees foi por `mtime` do arquivo**, não por `git blame`: nenhuma das
duas estava commitada, então não havia carimbo de commit para comparar. As duas moram na MESMA máquina
e no mesmo relógio, então a comparação é legítima — a ressalva de fuso que derrubou a renumeração da
`SIS-343` (duas máquinas, dois fusos) não se aplica aqui. A mais antiga levou o número menor, para que
a regra da casa continue verdadeira: *dentro do domínio, o NN maior é o mais novo.*

*Três sessões paralelas, três leis, um número.* O aviso da leva de 13/ago — **junte o remoto ANTES de
escolher o número novo** — se cumpriu ao contrário desta vez: o remoto estava em dia (0 atrás), e a
corrida foi toda LOCAL, entre worktrees da mesma máquina que não se enxergam. `git fetch` não protege
disso; quem protege é medir o `maiorNumero` no arquivo da main no instante de escrever.
