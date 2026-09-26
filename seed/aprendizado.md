> **[porte Regie]** Origem: `top10-estudio/seed/aprendizado.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> É o índice das fatias de lei por agente. Os caminhos `cerebro/agentes/`, `marcas/<marca>/agentes/` e `seed/aprendizado.auto.md` são do estúdio; neste canal os agentes estão em `.claude/agents/` e as roupas em `marca/agentes/`. O agente `roteirista-narracao` do Top10 é o `roteirista` aqui.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# LEIS DO ESTÚDIO — índice

> Regras destiladas de feedback REAL do Mateus. **Não são sugestões: foram erros que aconteceram.**
> Cada lei tem ID `PREFIXO-NN`. Dentro de um domínio, **a de número MAIOR vence**.

## ⚠️ Não leia este arquivo inteiro. Leia a SUA fatia.

Carregar as 357 leis (02/ago) para aplicar ~15 é o defeito que a partição de 22/jul resolveu
(medido: os agentes pesados engoliam ~41k tokens cada; agora 6–13k — a coluna `~tokens` abaixo é
de 22/jul e não foi re-medida desde, então leia-a como ordem de grandeza).

A fatia é derivada dos IDs que o agente **de fato cita** na sua doutrina (`.claude/agents/<n>.md` +
`cerebro/agentes/<n>/*.md` + `marcas/<marca>/agentes/<n>.md`) — revisada por grep em 22/jul.

> **[porte Regie] COMO LER A SUA FATIA — nunca o arquivo inteiro.** Os arquivos de lei são enormes (medido no porte:
> ARTE ~10,5 mil linhas, SIS ~12,6 mil mesmo depois do filtro, FIN ~7,2 mil), e a coluna ~tokens abaixo é de 22/jul, quando
> eles eram muito menores. O Read do Claude Code lê 2.000 linhas por vez: «abrir o arquivo» lê só o começo, e como a
> lei de número MAIOR vence, as que ficam de fora são justamente as que ganham. Então: busque pelo ID com a busca do
> Claude Code (Grep, ex.: `ARTE-213`), leia a lei, e busque pelo ASSUNTO as leis posteriores do mesmo tema — a mais
> nova vence. Nunca diga que leu a fatia se só abriu o arquivo.

| Você é… | Leia (`regras/SIS.md` vai SEMPRE junto) | ~tokens em 22/jul (**[porte Regie]** VELHO: hoje cada arquivo é dezenas de vezes maior) |
|---|---|---|
| roteirista-narracao · critico-de-roteiro · tradutor-de-narracao · curador-titulos-thumbs | `regras/ROT.md` | 12,2k |
| editor-de-arte · diretor-de-arte · regente-de-imagem | `regras/ARTE.md` | 13,4k |
| mapista · qc-visual | `regras/ARTE.md` + `regras/PESQ.md` | 18,6k |
| revisor-criativo | `regras/ARTE.md` + `regras/PESQ.md` + `regras/REND.md` | 25,5k |
| tradutor-de-tela | `regras/ARTE.md` + `regras/FIN.md` | 19,8k |
| pesquisa-imagens/-dados/-geo/-logos/-pessoas/-documentos · tecnico-stock | `regras/PESQ.md` | 6,3k |
| montador · decupador | `regras/FIN.md` + `regras/PESQ.md` | 12,7k |
| qa-montagem · curador-de-acervo | `regras/FIN.md` | 7,5k |
| quem dispara render/frota | `regras/REND.md` | 8,2k |
| atendente-email | só `regras/SIS.md` — não há lei de domínio pra atendimento | 1,2k |
| editor-chefe (a sessão) | o índice + a fatia do que for fazer | — |

`regras/SIS.md` é **transversal**: vale em todo ofício. Sempre junto.

> ⚠️ **A FATIA É O PISO, NÃO O TETO.** Citou um ID de FORA dela? Abra o arquivo daquele domínio e leia o
> **texto literal** antes de aplicar — foi assim que o `tradutor-de-tela` passou semanas citando a ARTE-27
> sem nunca carregar `ARTE.md`, e que o `mapista` seguiu prescrevendo ESRI depois da PESQ-21 (a própria
> PESQ-21 narra o caso). Cruzamentos de UMA lei só, conhecidos e já glosados na doutrina do agente —
> não justificam carregar o domínio inteiro, mas justificam abrir a lei: `montador`→ARTE-106/107/108
> (quantos PLANOS a cena pede, regime híbrido por dentro, e a unidade da repetição) **+ ARTE-198** (o
> `modo` é o campo que ROTEIA molde×invenção: declarar card de título só na prosa da tese manda molde
> para a cota mais escassa) **+ ARTE-183** (o `_grafias` do espelho é lido pela arte como ordem, e o
> montador não carrega `ARTE.md`: em 12/ago ele prescreveu trocar a família da marca por um defeito de
> Ç que a ARTE-183 mediu como inexistente) **+ ARTE-314** (`needs.geo[].tipo` é enum FECHADO de seis
> valores; oceano, estreito e região entram como `outro` com o nome no `rotulo` — em 11/set dois
> montadores descreveram melhor do que o contrato permite e reprovaram 258 segmentos por isso) ·
> `decupador`→ARTE-35/36/37/38 ·
> `diretor-de-arte`→PESQ-17 · `editor-de-arte`→FIN-06 · `roteirista-narracao`→FIN-11 ·
> `qa-montagem`/`tradutor-de-tela`→REND-10 · `curador-titulos-thumbs`/`qc-visual`/`tradutor-de-tela`→REND-15 ·
> `tecnico-stock`→REND-07 · `pesquisa-logos`→ARTE-09 · `pesquisa-pessoas`→ARTE-10 · `curador-de-acervo`→ARTE-48
> (o `titulo_novo`/`assunto` explicativo + capitalizado é dele).

## Os domínios

⚠️ A coluna `leis` é **medida**, não digitada: quem a atualiza é o rodapé de `node scripts/regras-todas.mjs` **[porte Regie: não veio — `regras-todas.mjs`, sem substituto: não há `_TODAS.md`; ache o maior ID com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md`]**
(contagem · maior ID, quando há buraco de lei arquivada). Números abaixo = execução de **13/ago/2026, 01:3x** —
contagem velha faz agente escolher ID já gasto ([SIS-62]).
⚠️ **Com várias sessões destilando em paralelo, esta linha envelhece em MINUTOS, não em dias.** Em 12/ago
dois vídeos escreveram uma `ARTE-238` cada um, com uma hora de intervalo, ambos lendo um rodapé que dizia
`max237` e que estava correto quando foi lido. Não confie na tabela para escolher número: rode
`node scripts/regras-todas.mjs` **depois** de escrever — o gate de ID repetido é o único árbitro, e a **[porte Regie: não veio — `regras-todas.mjs`, sem substituto: não há `_TODAS.md`; ache o maior ID com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md`]**
regra de desempate é [SIS-62] (quem commitou primeiro fica com o número; a outra renumera com nota 🔀).

> ⚠️ **E o contador já mentiu por sintaxe, duas vezes.** Ele nasceu vendo só `**DOM-NN.`, ganhou
> `### DOM-NN ·` em 26/jul, e em 04/ago descobriu-se que **7 leis escritas como `## DOM-NN —` eram
> invisíveis**: o rodapé anunciava `SIS=94/max95` com a `SIS-99` no arquivo, e quem lesse "próximo livre
> = 96" colidiria com quatro leis vivas. Corrigido em `scripts/regras-todas.mjs` (`#{2,}`, qualquer **[porte Regie: não veio — `regras-todas.mjs`, sem substituto: não há `_TODAS.md`; ache o maior ID com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md`]**
> profundidade de título). **Emenda a uma lei NÃO se intitula com o ID dela** (`### FIN-74 · emenda…`) —
> isso é lido como uma segunda lei de mesmo número e trava a geração; escreva `### Emenda à FIN-74 · …`.

| domínio | o que cobre | leis (21/ago) |
|---|---|---|
| **ROT** | roteiro e narração — voz, storytelling, locução, estrutura de tópico, **revisão de laudo** | 96 |
| **ARTE** | execução de cena — layout, tipografia, motion, cor, word-lock, carga, **ritmo/densidade**, **densidade de PLANOS dentro da cena**, **regime híbrido**, **lastro de rótulo**, **mapa vivo**, roteamento, **a faixa que só existia como `else`** | 288 (maior ID **296**) |
| **REND** | render, encode, captura, quota, a VM L4 sob demanda, **rede da máquina**, **os quatro eixos do insumo que o motor lê** | 124 (maior ID **124**) |
| **PESQ** | mídia real — footage, foto, geo, logo, pessoa, documento, stock, produto, **adjacência conferida na geometria**, **a cadeia da procedência até o crédito na tela**, **a porta que se mede é aquela por onde o trabalho passa**, **o insumo é lista com id, não prosa em três artefatos**, **a política de uso do símbolo institucional**, **o ativo pago que o código não procura onde a doutrina manda** | 71 (maior ID **120**) |
| **FIN** | montagem, finalização, **XML de 5 camadas (PT-BR)**, composto (dublados), entrega, overlays, trilha, cards, **compilado**, **decupagem (silêncio · retake · falso início)**, **gravação**, **o relógio de cada artefato (BRUTO · LIMPO · FINAL)** | 204 (maior ID **207**) |
| **SIS** | sistema e processo — git, custo, agentes, memória, disciplina, destilação, orquestração, cronograma, agendamento, contratos entre agentes, medição honesta, derivados órfãos, cascata de cota, duplicado que compete, **veredito calibrado**, **prova por artefato**, **trabalho que sobrevive à sessão**, **decisão que não desce ao código**, **julgamento de modelo sem medidor**, **um artefato por etapa e o relógio declarado**, **o achado que viaja no dossiê de quem executa**, **o recurso que uma ponta cria e a outra bloqueia**, **o lock que só falta quando o recurso vira um**, **o ruído que a ferramenta escreve depois do agente**, **o conserto portado pela metade**, **o estado terminal que vira ralo**, **a evidência que o cache deixa vencer**, **a encomenda que sobrevive ao defeito** | 419 (maior ID **424**) |

🔀 **O XML VOLTOU, e é a entrega PT-BR (FIN-45, 30–31/jul — supera a FIN-33).** A lápide anterior dizia
que ele havia saído do domínio em 24/jul; ficou três dias desatualizada e despachou sessão de finalização
para auditar o artefato errado (ver FIN-54). Hoje: **PT-BR = XML de 5 camadas** (o Mateus faz a pós no
Premiere) · **dublados = composto** (não há humano do outro lado, e é o que faz todos os idiomas saírem no
mesmo horário). O `finalizar.mjs` pula composto/finalização no PT-BR por desenho — a ausência do
`<slug>-YT-4k.mp4` nessa rota **não é falha**. O material da rota antiga segue em
`arquivo-morto/2026-07-xml-premiere/` (`LEIA.md`).

## Como citar
Sempre pelo ID (`ARTE-12`), nunca por número solto. Citação legada → `seed/DE-PARA-LEIS.md`.

## Como adicionar
Lei nova = próximo número livre **do domínio** (nunca reusar), no arquivo da fatia.
Se supera outra, **nomeie qual** e marque a antiga. `regras/_TODAS.md` é o corpo completo
para busca e **é GERADO** — depois de destilar, rode `node scripts/regras-todas.mjs` **[porte Regie: não veio — `regras-todas.mjs`, sem substituto: não há `_TODAS.md`; ache o maior ID com a busca do Claude Code (Grep) em `seed/regras/<DOM>.md`]**
(em 24/jul ele estava 30 leis atrás dos arquivos de domínio, mantido à mão).
