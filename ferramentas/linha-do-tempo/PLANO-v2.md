# A linha do tempo v2: o plano de construção

> **Para quem executa:** use a skill `superpowers:subagent-driven-development` (recomendada) ou `superpowers:executing-plans`,
> uma tarefa por vez. Os passos usam caixas (`- [ ]`). Neste canal, quem commita é só a Sala.

**O que constrói:** a mesa de edição da linha do tempo pré-render (a direção A dos rascunhos), com a marca de onde foi cada
comentário, os consertos propostos em destaque, os botões que registram e as chamadas na barra, numa pasta irmã da v1.

**Como:** a v1 inteira se copia para `ferramentas/linha-do-tempo-v2/` e prova que passa como está; depois, uma peça por vez
(os consertos, o clique, o comentário com ponto, a regência, a mesa parada, as interações, os quadros por segundo), cada uma com
as suas checagens `[v2]` no `provar.mjs` da v2. A página nova se chama `mesa.*`, e o servidor a lê uma vez, na partida.

**Tecnologia:** Node 24 (ESM, sem pacote novo), `sharp` e `playwright-core` já instalados, o Chrome instalado (só sem janela,
por `scripts/lib/chrome.mjs › lancarChrome`), o motor pré-v1 em `C:/projetos/regie-v1` (só leitura) e os módulos da galeria do
molde (`scripts/galeria/*`, só leitura).

**Desenho:** `ferramentas/linha-do-tempo/DESENHO-v2.md` (aprovado pelo Lucas em 20/11/2026, 14:25: "Aprovo"). **A seção 13 dele
vale sobre as outras.** Quem executa lê o desenho inteiro antes da tarefa 1; este plano diz só o que o implementador não decide
sozinho.

## Restrições globais

Valem para toda tarefa, sem precisar repetir.

- A v2 mora em `ferramentas/linha-do-tempo-v2/` e `ferramentas/linha-do-tempo-v2.mjs`. **Nenhum arquivo da v1 muda**
  (`ferramentas/linha-do-tempo.mjs` e `ferramentas/linha-do-tempo/`, fora o `DESENHO-v2.md` e este plano, que são da Sala).
- A lista fechada não ganha nenhum caminho: `caminhoPermitido` e `PASTAS_MIDIA` ficam byte a byte como na v1.
- As travas valem para toda rota nova: Host 421, `Origin` 403, `application/json` 415, token da sessão 403, método 405, corpo
  até 64 KB 413, `X-Frame-Options: SAMEORIGIN`, `frame-ancestors 'self'`.
- O Tailscale continua só para o aparelho "lucasrosa-casa"; nada muda no `--tailscale`.
- A conta da `versao` de cada cena, o `registrarVisto`, o `estadoDoProjeto`, o `aprovar` e o `conferir` não mudam.
- As rotas de hoje (`/api/linha`, `/api/versao`, `/api/comentarios`, `/api/comentar`, `/api/visto`, `/api/medida`) só ganham
  campos.
- O molde e o motor não se editam. A fila é `out/_feedback-queue.jsonl`, só pelo `gravarComentario`.
- Nada de fora: nenhum endereço `http(s)://` no `mesa.*`; as fontes são `/marca/fontes/inter/Inter-VF.ttf` e
  `/marca/fontes/barlowcondensed/BarlowCondensed-ExtraBold.ttf`.
- O `mesa.html` não tem a palavra "aprovar". Nenhum botão decide nada.
- As cores: âmbar `#F5A524` (o que é do Lucas), verde-azulado `#2EC4B6` (conserto), verde `#52B07F` (vista), vermelho `#E4572E`
  (não abriu), cinza (fica como está), chão quase preto azulado. Só tema escuro.
- O alvo é a janela do Lucas: 1920 × 911 por dentro, com o vídeo de 960 px de largura ou mais. Também 1440 × 900. Abaixo de
  1100 px de largura, o painel desce para baixo do vídeo.
- O texto que o Lucas lê é português simples: nenhum caminho, nome de função, "lente" ou "P2".
- O `localStorage` continua só o da legenda (2 usos no `mesa.js`).
- O Chrome sem janela só em porta de prova (8791 em diante), com a cópia do Juneau da prova ou um vídeo publicado
  (`rio-columbia` por padrão). Nunca na porta 8790, nunca no `australia-animais`.
- **Nenhum teste envia comentário fora da cópia da prova:** a fila de verdade só aceita acréscimo e vai ao git.
- Um teste que abre a página num vídeo publicado guarda antes, e devolve depois, os arquivos de `_tmp/linha-do-tempo/` daquele
  vídeo (seção "A guarda de teste", na tarefa 6).

## Foco da revisão

Cinco entradas que o desenho deixa implícitas e que mais podem pegar o Lucas. Cada uma tem a sua checagem na tarefa dona do
código.

1. **Vídeo sem regência, sem `modo`, ou com `modo` fora dos oito desenhos** (o `rio-columbia` tem `foto`; o Juneau não tem
   `modo`): a página abre, e o bloco usa o desenho do tipo da linha. Checagem na tarefa 5.
2. **Texto do conserto com aspas tipográficas, acento e travessão** (“HE HAS WONDERED”, "ç", "—"): o `montar` aceita, e a página
   o mostra sem virar HTML. Checagens nas tarefas 2 e 6.
3. **Dois consertos na mesma cena, com janelas sobrepostas e a menos de 10 px na barra** (a s67 do vídeo 8: 0,5 s e 4,5 s): um
   losango só, com o número 2; no painel, os dois, na ordem do §13.4. Checagens na tarefa 6.
4. **O Lucas escrevendo "[", "@3s" ou um colchete parecido com o técnico** no comentário: a fila guarda as marcas como hoje, e o
   cartão mostra o texto dele inteiro. Checagens na tarefa 4.
5. **A lista da Sala mudando com a página aberta** (um texto corrigido, uma cena fundida no espelho): a resposta velha cai (409),
   o item da cena que saiu some, nada dá 500. Checagens na tarefa 3.

## As regras de todo implementador

Esta seção vai inteira em cada pedido a quem executar uma tarefa.

- Não use `SendMessage` nem `send_message`.
- Não use nenhuma ferramenta `mcp__claude-in-chrome__*`, `mcp__Claude_Browser__*` nem `mcp__computer-use__*`. O único navegador
  é o Chrome sem janela, por script, onde a tarefa manda.
- Não toque na v1 (`ferramentas/linha-do-tempo.mjs`, `ferramentas/linha-do-tempo/`), na porta 8790, no Tailscale, nem em nada
  dentro de `out/australia-animais/`.
- Não pare processo pelo nome (`taskkill /IM`, `pkill node`). Servidor de teste se sobe dentro do próprio script e se fecha por
  ele.
- Nenhum pacote npm novo.
- Python só por arquivo: `python -X utf8 -B <arquivo>.py`. Nunca pela entrada (`python -`, heredoc, pipe).
- Não abra o Chrome sem janela com render 4K ou caça rodando: o pedido da Sala diz se está liberado.
- Não commite. Ao fim, o relato: o que fez, a saída do `provar.mjs` (a linha "N de N"), o que não provou, e as quatro linhas de
  cada erro resolvido (o regimento: o que deu errado, a causa, o conserto, como não repetir).
- Divergência entre este plano e o desenho: vale o desenho, e a seção 13 dele sobre o resto. Na dúvida, pare e pergunte à Sala
  no relato.

## Os arquivos

| Arquivo (tudo em `ferramentas/`) | Responsabilidade | Tarefas |
|---|---|---|
| `linha-do-tempo-v2.mjs` | a linha de comando (cópia da v1; `estado` e `servir` ganham linhas) | 1, 3, 6 |
| `linha-do-tempo-v2/linha.mjs` | a linha, os vistos, a fila; ganha o colchete do comentário e a regência | 1, 4, 5 |
| `linha-do-tempo-v2/servidor.mjs` | as rotas e as travas; ganha a mesa, `/api/consertos`, `/api/responder` | 1, 3, 4, 5, 6 |
| `linha-do-tempo-v2/consertos.mjs` (novo) | a lista da Sala: `montar`, `conferir`, `respostas`, e o que o servidor usa | 2, 3 |
| `linha-do-tempo-v2/mesa.html`, `mesa.css`, `mesa.js` (novos) | a página; substituem `pagina.*` na pasta da v2 | 6, 7 |
| `linha-do-tempo-v2/olhar.mjs` (novo) | o Chrome sem janela: a mesa parada, o roteiro de cliques, os quadros por segundo | 6, 7, 8 |
| `linha-do-tempo-v2/provar.mjs` | a prova; acha a própria pasta e ganha as checagens `[v2]` | 1 a 7 |
| `linha-do-tempo-v2/legenda.mjs`, `mapa.mjs` | cópias da v1, sem mudança | 1 |
| `linha-do-tempo-v2/LEIA-ME.md`, `DESENHO.md`, `TROCA.md` (novo) | o uso da v2, o desenho de 02/10 com o ponteiro, o roteiro da troca | 9 |

## A ordem e as dependências

1 → 2 → 3 → 4 → 5 → 6 → **o olhar da Sala** → 7 → 8 → 9. Pelo conteúdo: a 2 pede a 1; a 3 e a 4 pedem a 2; a 5 pede só a 1; a 6
pede a 3, a 4 e a 5; a 7 pede a 6 e o olhar da Sala; a 8 pede a 7; a 9 pede todas. As tarefas 3, 4 e 5 mexem nos mesmos arquivos
(`servidor.mjs`, `linha.mjs`, `provar.mjs`): vão em série, nessa ordem.

**Como ler as checagens:** cada uma é um `checar("<nome>", <afirmação>)` no estilo da prova de hoje. Onde o corpo aparece como
`...`, o nome já é a afirmação inteira, com os valores; o corpo é o óbvio. Toda checagem nova começa com `[v2]` (ou `[remoto]`,
como as do Tailscale). "Rodar e ver falhar" quer dizer: as checagens novas saem com ✗, e as de antes continuam ✓.

---

### Tarefa 1: a cópia da v1 e a prova de partida

**Arquivos:**
- Criar: `ferramentas/linha-do-tempo-v2/` com cópia byte a byte de `linha.mjs`, `servidor.mjs`, `legenda.mjs`, `mapa.mjs`,
  `pagina.html`, `pagina.css`, `pagina.js`, `provar.mjs`, `LEIA-ME.md`, `DESENHO.md` (não copiar `DESENHO-v2.md` nem
  `PLANO-v2.md`: ficam com a Sala e mudam de lugar na troca).
- Criar: `ferramentas/linha-do-tempo-v2.mjs`, cópia de `ferramentas/linha-do-tempo.mjs`.
- Mudar (só caminhos): o CLI importa de `./linha-do-tempo-v2/…` (os três imports: `linha.mjs`, `servidor.mjs`, `mapa.mjs`); o
  `provar.mjs` acha a si mesmo.

**Interfaces:**
- Produz, no `provar.mjs`: `PASTA_CODIGO = dirname(fileURLToPath(import.meta.url))`; `NOME = basename(PASTA_CODIGO)`;
  `CLI = join(RAIZ_CANAL, "ferramentas", NOME + ".mjs")`; `COPIA = join(RAIZ_CANAL, "out", "juneau", "_tmp", NOME, "prova-raiz")`;
  a cópia do motor em `join(RAIZ_CANAL, "out", "juneau", "_tmp", NOME, "prova-motor")`. Assim a prova da v2 não pisa na da v1, e
  depois do `git mv` da troca nada no `provar.mjs` precisa mudar.
- Produz: as constantes `VERSOES_JUNEAU` (12 hex) e `NUCLEO_V1` (16 hex) no `provar.mjs`.

- [ ] **Passo 1: copiar e trocar só os caminhos.** Nenhuma outra linha muda nesta tarefa.
- [ ] **Passo 2: rodar a prova da cópia.**
  Rodar: `node ferramentas/linha-do-tempo-v2/provar.mjs`
  Esperado: `✓ 312 de 312 checagens passaram.` e saída 0 (a v1 deu 312 de 312 em 20/11/2026).
- [ ] **Passo 3: medir a assinatura das versões do Juneau com a v1.**
  Rodar: `node --input-type=module -e "const l=await import('file:///C:/projetos/alpha-point/ferramentas/linha-do-tempo/linha.mjs'); const m=await l.carregarMotor(); console.log(l.assinaturaDe(l.lerLinha(m, l.RAIZ_CANAL, 'juneau').cenas))"`
  Esperado: 12 hex numa linha. Esse é o `VERSOES_JUNEAU`.
- [ ] **Passo 4: medir a impressão do núcleo que não pode mudar**, também com a v1: os 16 primeiros hex do sha256 de
  `[caminhoPermitido, lerLinha, registrarVisto, estadoDoProjeto, aprovar, conferir].map(String).join("\n") + JSON.stringify([...PASTAS_MIDIA])`,
  pelo mesmo `node --input-type=module -e` do passo 3. Esse é o `NUCLEO_V1`.
- [ ] **Passo 5: escrever as checagens.** Na seção 1 da prova:

```js
checar("[v2] a versão das cenas do Juneau é a de antes da v2", assinaturaDe(lerLinha(m, RAIZ_CANAL, "juneau").cenas) === VERSOES_JUNEAU);
checar("[v2] o núcleo da v1 não mudou (caminhoPermitido, PASTAS_MIDIA, lerLinha, registrarVisto, estadoDoProjeto, aprovar, conferir)", impressaoDoNucleo() === NUCLEO_V1);
```

- [ ] **Passo 6: rodar.** Esperado: `✓ 314 de 314 checagens passaram.`
- [ ] **Passo 7: a v1 não mudou.**
  Rodar: `git diff --quiet -- ferramentas/linha-do-tempo.mjs ferramentas/linha-do-tempo/ && echo v1-intacta`
  Esperado: `v1-intacta`. (Este passo se repete no fim de toda tarefa: é "a v1 intacta".)
- [ ] **Passo 8: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 2: a lista da Sala (`consertos.mjs`: `montar` e `conferir`)

**Arquivos:**
- Criar: `ferramentas/linha-do-tempo-v2/consertos.mjs` (módulo e linha de comando, no molde do `legenda.mjs`: o pedido do Lucas
  e o formato do §7.1 no topo).
- Mudar: `provar.mjs` (seção nova `9. os consertos [v2]`; a guarda do fim).

**Interfaces:**
- Consome: `lerLinha`, `pastaLinha`, `RAIZ_CANAL` (`linha.mjs`); `m.lerFila` (o molde, por `carregarMotor()`).
- Produz:
  - `arqEntrada(raiz, proj)`, `arqMontado(raiz, proj)`, `arqRespostas(raiz, proj)` → `out/<proj>/_tmp/linha-do-tempo/`
    `consertos.entrada.json`, `consertos.json`, `respostas.jsonl`;
  - `textoSha(item) → string`: os 16 primeiros hex do sha256 de `JSON.stringify([curto, problema, conserto ?? null, escolhas ?? null])`;
  - `conferirEntrada(m, raiz, proj, entrada, linha) → { itens, problemas: [{ item, motivo }] }`;
  - `montar(m, raiz, proj) → { codigo: 0 | 1, problemas, gravados }` (grava só com `problemas` vazio, por `.tmp` + `renameSync`);
  - `conferirMontado(m, raiz, proj) → { ok, motivos: string[] }`;
  - `lerMontado(raiz, proj) → { estado: "em-dia" | "sem", montado }`, guardado pelo tamanho e pela data, com `readFileSync`;
  - `idsDosConsertos(raiz, proj) → Set<string>`;
  - CLI: `node ferramentas/linha-do-tempo-v2/consertos.mjs montar|conferir <proj> [--raiz=<pasta>] [--json]`, saídas 0, 1, 2.
- Os valores (do §7, mais os que o plano fixa): `formato` 1; `id` `/^[a-z0-9-]{1,24}$/`; estados `responder | combinado | feito |
  fica`; `curto` ≤ 70; `problema` ≤ 400; `conserto` ≤ 400 (obrigatório fora de `fica`); `decisao` ≤ 200 (obrigatória em
  `combinado`, `feito`, `fica`); escolhas 2 a 4, id `/^[a-z0-9-]{1,8}$/`, texto ≤ 120 (valor do plano), exatamente uma
  `sugerida: true`; `area` com `x, y, w, h` de 0 a 100; `0 ≤ t < duração da cena`; `t < ate ≤ duração`; as regras de texto são
  cópias literais das constantes `QUEBRA`, `CONTROLE` e `INVISIVEL` do `legenda.mjs` (sem importar dele); origem
  `espectador` casa `^out/<proj>/_tmp/espectador-[a-z0-9-]+/mantidos\.json$`, sem `..`.

**As fixturas** (a prova as escreve na cópia, em `fixturasConsertos(COPIA)`):
- `out/juneau/_tmp/espectador-r1/mantidos.json`: `[{"cena":"s02","t_ini":1,"mantido":true},{"cena":"s04","t_ini":2,"mantido":false}]`;
- `out/juneau/qc/s04.laudo.json`: `{"cena":"s04","lentes":[{"lente":"cadencia","problemas":["parada"],"correcoes":[]},{"lente":"tema","problemas":[],"correcoes":[]}]}`;
- a entrada válida, três itens: `c01` em s02, t 1.0, `responder`, escolhas `a` (“HE HAS WONDERED”, com "ç" e "—", sugerida) e
  `b`, origem espectador índice 0; `c02` em s04, t 2.0, ate 3.5, `fica`, decisão, origem qc s04 cadencia; `c03` em s01, t 0.5,
  `combinado`, decisão, origem sala com nota.

- [ ] **Passo 1: escrever as checagens.**

```js
checar("[v2] montar: a entrada válida sai 0 e grava 3 itens, cada um com texto_sha de 16 hex", c.codigo === 0 && mont.itens.length === 3 && mont.itens.every((i) => /^[0-9a-f]{16}$/.test(i.texto_sha)));
checar("[v2] montar: aspas tipográficas, ç e travessão passam", mont.itens.find((i) => i.id === "c01").escolhas[0].texto.includes("“HE HAS WONDERED”"));
// Um caso por linha da tabela abaixo: sai 1, a saída cita o item e o motivo, e o consertos.json é byte a byte o de antes.
for (const [nome, estraga] of CASOS) checar(`[v2] montar recusa: ${nome}`, r.codigo === 1 && r.out.includes(idDoCaso) && Buffer.compare(lerMontadoCru(), antes) === 0);
checar("[v2] conferir: 0 logo depois do montar", ...); checar("[v2] conferir: 1 depois de a entrada mudar um byte", ...);
checar("[v2] conferir: 1 com a cena do conserto fundida na anterior no espelho (_mergedInto), e a cita", ...); // o espelho volta depois
checar("[v2] conferir: 1 com a origem qc apagada (o laudo some), e a cita", ...);
checar("[v2] consertos.mjs: 2 sem projeto e com projeto que não existe", ...);
```

  Os `CASOS` (cada um muda uma coisa da entrada válida): `proj` "outro"; `formato` 2; `id` repetido; `id` "C01"; cena "s09"
  (fundida, fora da linha); `t` −1; `t` 4.6 na s02 (a s02 tem 136 quadros, 4,533 s); `ate` igual a `t`; estado "aprovado";
  `curto` com 71 caracteres; `problema` com "\n"; `curto` só com U+200B; `responder` sem `conserto`; `fica` sem `decisao`; 1
  escolha; escolhas sem sugerida; 2 sugeridas; `area.x` 101; `origem` vazia; origem espectador com `../`; índice 5; índice 1
  (`mantido: false`); origem espectador com a cena s04 no item; origem qc com a lente "motion" (não existe); origem qc com a
  lente "tema" (sem problema nem correção); origem comentario com id fora da fila; origem sala com nota "".
- [ ] **Passo 2: rodar e ver falhar.** `node ferramentas/linha-do-tempo-v2/provar.mjs` → as `[v2]` novas com ✗ (o módulo não
  existe).
- [ ] **Passo 3: implementar** as funções e a CLI das Interfaces. A guarda do fim da prova passa a conferir também que nenhum
  `out/*/_tmp/linha-do-tempo/{consertos.entrada.json,consertos.json,respostas.jsonl}` de projeto real mudou (tamanho e data, ou
  ausente).
- [ ] **Passo 4: rodar.** Esperado: `✓ N de N` com N maior que 314, nenhum ✗; e a v1 intacta (tarefa 1, passo 7).
- [ ] **Passo 5: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 3: o clique e a API dos consertos

**Arquivos:**
- Mudar: `consertos.mjs` (as funções do servidor e o verbo `respostas`); `servidor.mjs` (duas rotas, o `via`, o log);
  `linha-do-tempo-v2.mjs` (a linha do `estado`); `provar.mjs`.

**Interfaces:**
- Consome: `lerMontado`, `textoSha`, `arqRespostas` (tarefa 2).
- Produz:
  - `consertosDoProjeto(raiz, linha) → { estado, itens }`. Cada item: os campos do montado, menos `origem`, que vira
    `origem: string[]` com só os rótulos `"qc" | "espectador" | "comentario" | "sala"`; mais `tVideo = cena.ini / 30 + t`,
    `tVideoAte = ate == null ? null : cena.ini / 30 + ate`, `cenaFim = cena.fim / 30`, `resposta: { resposta, escolha, quando } | null`
    (a última linha do id, se o `texto_sha` dela é o de agora e ela não é `retirar`), `respostaVelha: boolean`. Itens na ordem de
    `tVideo`; item de cena fora da linha não vai.
  - `registrarResposta(raiz, linha, d, { via }) → { status, corpo }`, com as recusas do §7.4 (404, 400, 422, 409) e a linha
    `{ proj, id, resposta, escolha, texto_sha, cena, quando, via }` acrescentada em `respostas.jsonl`.
  - `resumoDosConsertos(raiz, linha) → { total, esperam, respondidos, combinadosNaoFeitos: string[] }`.
  - Rotas: `GET /api/consertos` (no-store) e `POST /api/responder` (no bloco do POST de hoje: Origin, JSON, token, 64 KB).
    `via` é `"tailscale"` quando o pedido passou pelo ramo do aparelho remoto, `"local"` no resto. Um `log(...)` por resposta
    gravada, com o id, a cena e a resposta.
  - CLI: `consertos.mjs respostas <proj> [--json]`: as respostas que valem, as que caíram (texto mudou), os comentários com
    `sobre` (da tarefa 4: até lá, nenhum), e a linha `Para o chat: "…"` (o modelo está no §8 do desenho). Sai 0.
  - `estado` (CLI da v2): uma linha `consertos: N propostos · X esperam o Lucas · Y respostas dele a confirmar no chat (consertos.mjs respostas)`
    e, se houver, `combinados ainda não feitos: s…`. O `USO` do CLI cita o `consertos.mjs`.

- [ ] **Passo 1: escrever as checagens** (na cópia, com a entrada válida da tarefa 2 montada):

```js
checar("[v2] /api/consertos sem montado: 200, estado sem, itens []", ...);
checar("[v2] /api/consertos com montado ilegível ou de outro projeto: estado sem, nunca 500", ...);
checar("[v2] /api/consertos em dia: c03, c01, c02 na ordem do vídeo, c01 em 14,6 s", ids.join() === "c03,c01,c02" && Math.abs(c01.tVideo - 14.6) < 1e-9);
checar("[v2] /api/consertos não leva caminho nem nota", !/mantidos\.json|"nota"|"arquivo"/.test(corpo));
// A lista fechada não cresceu (§9.1): caminhoPermitido dá false, e o servidor dá 404, para cada um destes da cópia.
for (const p of ["_tmp/linha-do-tempo/consertos.json", "_tmp/linha-do-tempo/consertos.entrada.json", "_tmp/linha-do-tempo/respostas.jsonl",
  "_tmp/linha-do-tempo/RESPOSTAS.JSONL", "_tmp/espectador-r1/mantidos.json", "qc/s04.laudo.json"])
  checar(`[v2] lista fechada: 404 em out/juneau/${p}`, !caminhoPermitido(`out/juneau/${p}`, ctx) && (await pedir(CP, `/out/juneau/${p}`)).status === 404);
checar("[v2] lista fechada: as mesmas por %2e%2e e %5c dão 403 ou 404", ...);
checar("[v2] responder: as travas (sem token 403, Origin de fora 403, text/plain 415, 70 KB 413, PUT 405, GET 404)", ...);
checar("[v2] responder: id c99 404; resposta talvez 400; concordo sem escolha em c01 400; escolha z 400", ...);
checar("[v2] responder: c02 (fica) e c03 (combinado) 422", ...);
checar("[v2] responder: texto_sha 0000000000000000 dá 409", ...);
checar("[v2] responder: concordo com a escolha a em c01 dá 200 e acrescenta 1 linha, via local", ...);
checar("[v2] responder: vale a última (outro depois de concordo) e retirar volta a nenhuma", ...);
checar("[v2] responder: o texto de c01 mudou e montou de novo: respostaVelha true, resposta null, e o texto_sha velho dá 409", ...);
checar("[v2] /api/consertos: a cena de c01 fundida no espelho some da lista, 200", ...); // o espelho volta depois
checar("[v2] o servidor escreve uma linha de log por resposta gravada, com o id", ...);
checar("[remoto] responder pelo aparelho, com o IP e o login dele: 200 e via tailscale", ...);
checar("[remoto] responder com outro IP: 403; com o Host do tailnet sem a opção: 421", ...);
checar("[v2] consertos.mjs respostas: separa a que caiu, imprime Para o chat:, sai 0", ...);
checar("[v2] estado: a linha dos consertos diz quantos esperam o Lucas", /esperam o Lucas/.test(e.out));
```

- [ ] **Passo 2: rodar e ver falhar.** As `[v2]` novas com ✗.
- [ ] **Passo 3: implementar** as Interfaces.
- [ ] **Passo 4: rodar.** Esperado: `✓ N de N`, nenhum ✗; a v1 intacta.
- [ ] **Passo 5: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 4: o comentário com ponto e `sobre`

**Arquivos:**
- Mudar: `linha.mjs` (`textoDoComentario`, `registrarComentario`, `comentariosDoProjeto`, e a nova `lerColchete`);
  `consertos.mjs` (o verbo `respostas` lista os comentários com `sobre`); `provar.mjs`.

**Interfaces:**
- Consome: `idsDosConsertos(raiz, proj)` (tarefa 2).
- Produz:
  - `textoDoComentario({ t, tVideo, sha1, texto, mudou = false, ponto = null, sobre = null })`. O colchete, nesta ordem:
    `[vídeo MM:SS.S · versão <sha1:8>` + (`mudou` ? ` · a cena mudou depois`) + (`ponto` ? ` · ponto x=<X>% y=<Y>%`) +
    (`sobre` ? ` · sobre o conserto <id>`) + `]`. Sem `ponto` e sem `sobre`, o texto é byte a byte o da v1.
  - `registrarComentario`: `ponto` opcional, objeto com `x` e `y` números finitos de 0 a 100, que viram `Math.round`; fora disso,
    400. `sobre` opcional, id em `idsDosConsertos`; fora disso, 400.
  - `lerColchete(texto) → { limpo, tVideo, versao, mudou, ponto, sobre }`: só o colchete no **fim** do texto, inteiro, conta
    (`/\s*\[vídeo (\d{2,}):(\d{2}\.\d) · versão ([0-9a-f]{8})( · a cena mudou depois)?(?: · ponto x=(\d{1,3})% y=(\d{1,3})%)?(?: · sobre o conserto ([a-z0-9-]{1,24}))?\]$/`);
    sem ele, tudo `null`/`false` e `limpo` é o texto inteiro.
  - `comentariosDoProjeto` ganha, por item: `tVideo, versao, ponto, sobre` de `lerColchete(x.comentario || x.texto)`, e
    `limpo` de `lerColchete(x.texto).limpo`.
  - O `servidor.mjs` não muda: o `POST /api/comentar` já entrega o corpo inteiro ao `registrarComentario`.

- [ ] **Passo 1: escrever as checagens** (na fila da cópia, com a s02 do Juneau, t 1.4, vídeo 15,0 s):

```js
checar("[v2] comentário sem ponto nem sobre: o texto da v1, byte a byte", marca.texto === `teste [vídeo 00:15.0 · versão ${sha02.slice(0, 8)}]` && marca.comentario === `@1.4s teste [vídeo 00:15.0 · versão ${sha02.slice(0, 8)}]`);
checar("[v2] comentário com ponto 57.6 e 44.4: o colchete leva ponto x=58% y=44%", /· ponto x=58% y=44%\]$/.test(comentario));
// quebrarEmMarcas importado só para ler de scripts/galeria/fila.mjs (o objeto do carregarMotor não o traz).
checar("[v2] …e o quebrarEmMarcas do molde ainda dá uma marca só, em 1,4 s", quebrarEmMarcas(comentario).length === 1 && quebrarEmMarcas(comentario)[0].t === 1.4);
checar("[v2] /api/comentarios mantém as chaves da v1 (id, cena, t, texto, status, nota, quando, aberta)", ...);
checar("[v2] comentário com ponto x 101, com x 'a' e com ponto 5: 400", ...);
checar("[v2] comentário com sobre c99: 400; com sobre c01: o colchete termina em · sobre o conserto c01]", ...);
checar("[v2] /api/comentarios devolve ponto {x:58,y:44}, sobre e o texto limpo 'teste'", ...);
checar("[v2] lerColchete: o colchete escrito pelo Lucas no meio fica no texto limpo", lc("a [b] c [vídeo 00:15.0 · versão 0123abcd]").limpo === "a [b] c");
checar("[v2] lerColchete: sem colchete, e com colchete pela metade, tudo nulo e o texto inteiro", ...);
checar("[v2] lerColchete: 'ponto x=1% y=2%' escrito fora do colchete não vira ponto", ...);
checar("[v2] comentário com @3s no meio: duas marcas; a 1ª sem colchete no limpo, e as duas com o ponto do comentario", ...);
checar("[v2] consertos.mjs respostas lista o comentário ligado a c01", ...);
```

- [ ] **Passo 2: rodar e ver falhar.**
- [ ] **Passo 3: implementar** as Interfaces.
- [ ] **Passo 4: rodar.** Esperado: `✓ N de N`, nenhum ✗; a guarda da fila de verdade passa; a v1 intacta.
- [ ] **Passo 5: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 5: a regência na `/api/linha` (as chamadas e o desenho de cada cena)

**Arquivos:**
- Mudar: `linha.mjs` (nova `regenciaDoProjeto`); `servidor.mjs` (`paraPagina`); `provar.mjs`.

**Interfaces:**
- Produz:
  - `regenciaDoProjeto(raiz, proj, totalQuadros) → { chamadas: [{ peca, nome, ini, n }], modos: Map<id, string> }`, lida de
    `out/<proj>/regencia.json`, guardada pelo tamanho e pela data. Substitui o `chamadasDoProjeto` do §8 (uma leitura só, para as
    chamadas e os desenhos, como pede o §13.7). Só `_chamadas[].peca/inSec/dur` e `cenas[].id/modo` se leem.
  - Chamada: `ini = round(inSec × 30)`, `n = round(dur × 30)`; fica de fora se `peca` não é texto, `inSec < 0`, `dur ≤ 0`, número
    não finito ou `ini + n > totalQuadros`. `nome`: `vinheta` → "Vinheta", `inscricao` → "Inscrição", `comentario` → "Pergunta",
    outra → a própria `peca`.
  - Exportados de `linha.mjs`: `DESENHOS = ["aereo-real", "mapa3d", "footage", "mapa", "dados", "documento", "citacao", "desenho"]`
    e `RECUO_DESENHO = { mapa: "mapa", video: "footage", dom: "desenho", falta: "desenho" }` (o desenho pelo tipo da linha).
  - `/api/linha` e `/api/versao`: `chamadas` no topo e `desenho` em cada cena. Nenhum outro campo da regência.

- [ ] **Passo 1: escrever as checagens** (uma `regencia.json` de mentira na cópia: `_chamadas` vinheta 49.83/4.71, inscricao
  452.76/4.5, comentario 600/6, "x" −1/2, "y" 665/5, "z" 10/"4"; `cenas` s01 `mapa3d`, s02 `foto`, s03 `dados` com
  `regime: "segredo-da-regencia"`):

```js
checar("[v2] chamadas: 3, sem as tortas e sem a que passa do fim (o Juneau tem 19982 quadros)", ch.length === 3);
checar("[v2] chamadas: a vinheta em 1495, 141 quadros, nome Vinheta", ch[0].ini === 1495 && ch[0].n === 141 && ch[0].nome === "Vinheta");
checar("[v2] chamadas: a inscrição em 13583 e a pergunta em 18000 com 180", ch[1].ini === 13583 && ch[1].nome === "Inscrição" && ch[2].ini === 18000 && ch[2].n === 180 && ch[2].nome === "Pergunta");
checar("[v2] desenho: s01 mapa3d, s03 dados", ...);
checar("[v2] desenho: s02 com modo foto (fora dos oito) cai no desenho do tipo dela", L.cenas.find((c) => c.id === "s02").desenho === RECUO_DESENHO[tipoS02]);
checar("[v2] a /api/linha mantém as chaves da v1, no topo e em cada cena", CHAVES_V1.every((k) => k in L) && CHAVES_CENA_V1.every((k) => k in L.cenas[0]));
// CHAVES_V1: proj, fps, totalQuadros, duracao, narracao, words, assinatura, cenas, resumo, fundidas, legenda.
// CHAVES_CENA_V1: id, ini, fim, n, tipo, sha1, versao, erro, url, palco, modoMapa, motivoMapa, avisoRelevo, proxy, clipeEmDia, visto, vistoModo, abertos, aprovada.
checar("[v2] desenho: s04, fora da regência, cai no desenho do tipo dela", ...);
checar("[v2] nada mais da regência sai na /api/linha", !/segredo-da-regencia|"regime"|"beats"|"porque"/.test(corpo));
checar("[v2] sem regência, sem _chamadas e com regência ilegível: chamadas [], desenhos do tipo, status 200", ...);
checar("[v2] a regência não se serve como arquivo: 404", (await pedir(CP, "/out/juneau/regencia.json")).status === 404);
```

- [ ] **Passo 2: rodar e ver falhar.**
- [ ] **Passo 3: implementar** as Interfaces.
- [ ] **Passo 4: rodar.** Esperado: `✓ N de N`, nenhum ✗; a v1 intacta.
- [ ] **Passo 5: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 6: a mesa parada (e o ponto de olhar da Sala)

**Arquivos:**
- Criar: `mesa.html`, `mesa.css`, `mesa.js`, `olhar.mjs`. Apagar da pasta da v2: `pagina.html`, `pagina.css`, `pagina.js` (a v1
  continua com os dela).
- Mudar: `servidor.mjs` (a página na partida, as rotas `/lt/mesa.*`); `linha-do-tempo-v2.mjs` (as linhas do `servir`);
  `provar.mjs` (as checagens que liam `pagina.*` passam a ler `mesa.*`, com o mesmo sentido, e as novas).

**Interfaces:**
- Consome: `/api/linha` com `chamadas` e `desenho` (5), `/api/consertos` (3), `/api/comentarios` com `ponto`, `sobre`, `limpo` (4).
- Produz:
  - `criarServidor({ …, pastaPagina = PASTA_PAGINA })`: lê `mesa.html`, `mesa.js`, `mesa.css` dessa pasta uma vez, na chamada.
    Serve `/` (o HTML, com `__TOKEN__` e `__PROJ__` trocados), `/lt/mesa.js`, `/lt/mesa.css`, `/lt/motor.js`; `/lt/pagina.*` dá 404.
  - `servir`: na partida, uma linha `legenda: em dia | sem | de outra versão · consertos: N · chamadas: N`.
  - `mesa.html`, os ids: `topo` (com `stCenas`, `stVistas`, `stComentarios`, `stConsertos`, `soMudou`); `palco` (com `slotA`,
    `slotB`, `marcasImagem`, `legendaPt`, `seloConserto`, `selo`, `aviso`, nessa ordem); `controles` (com `tocar`, `relogio`,
    `cenaAtual`, `proximoBtn`, `legendaBtn` de texto exato "Legenda PT", `comentar`, `telaCheia`); `fala`; `painel` (com
    `abaConsertos`, `abaComentarios`, `caixa`, `secConsertos` com `aqui` e `listaConsertos`, `secComentarios` com
    `listaComentarios`); `faixa`, a barra inteira (com `faixaChamadas`, `faixaConsertos`, `faixaComentarios`, `blocos`, `regua`
    e a `agulha`, que atravessa todas); `pe`; `narracao`. A `caixa` guarda `formComentario`, `caixaTitulo`, `ondeComentario`,
    `caixaPonto`, `texto`, `estadoEnvio`, `cancelar`, `enviar`.
  - `mesa.css`: as classes `.bl` (bloco), `.d-<desenho>` para os oito desenhos (os gradientes `.m-*` dos rascunhos, refeitos),
    a tira `.est` de 4 px com `.e-nao | .e-vista | .e-comentada | .e-rascunho | .e-erro`, `.nova`, `.agora`, `.apagado`;
    `.los.espera | .respondido | .combinado | .fica` (o respondido cheio só na metade de baixo, §13.5); `.anel.aberto | .vendo |
    .resolvido | .fica` e `.ponto` (miolo cheio). O número no bloco: "s39" com 24 px ou mais, "39" com 14 px ou mais, nada abaixo
    (valores do plano). O painel desce abaixo do vídeo com `@media (max-width: 1099px)`.
  - `mesa.js`: o relógio, os palcos, a preparação, o setter do vídeo, as medidas, o visto e a legenda vêm do `pagina.js` sem
    mudar uma linha (as funções extraídas pela prova com o mesmo nome e o mesmo recuo). A medida `tipo: "sessao"` ganha
    `pagina: "mesa"`. A barra e o painel se refazem só quando os dados mudam; nada de `innerHTML` por quadro. Depois do primeiro
    desenho da barra, do painel e da cena (pronta ou com erro à vista), `document.body.dataset.pronta = "sim"`.
  - Os aspectos (usados pelo desenho e pelas funções puras): conserto `espera` (`responder` sem resposta), `respondido`
    (`responder` com resposta que vale), `combinado` (`combinado` e `feito`), `fica`; comentário, pelo status da fila: `pendente`
    → `aberto`, `em_curso` e `recriar` → `vendo`, `ajustada`, `recriada` e `aprovada` → `resolvido`, `preservada` → `fica`. O
    peso, do que mais pede: `espera` 0, `respondido` 1, `combinado` 2, `fica` 3; `aberto` 0, `vendo` 1, `resolvido` 2, `fica` 3.
  - As funções puras do `mesa.js` (no recuo de 2 espaços, extraíveis pela prova):
    - `agruparMarcas(marcas, pxPorSegundo, minPx) → [{ t, itens, aspecto }]`: `marcas` são `{ t, id, aspecto }` de uma faixa;
      junta as que ficam a menos de `minPx` (10) da anterior do grupo; `t` do grupo é o do primeiro; `aspecto` é o de menor peso.
    - `consertoAqui(itens, t) → itens[]`: a janela de cada um é `[tVideo − 0,5, min(tVideoAte ?? tVideo + 4, cenaFim)]`; devolve os
      que contêm `t`, primeiro o de `tVideo` mais recente já passado (`tVideo ≤ t`), depois os outros por `tVideo`; nenhum já
      passado: por `tVideo`.
    - `marcaSeguinte(marcas, agulha, visitado, dir) → marca | null`: `dir` +1 devolve a primeira com `t > max(agulha, visitado)`;
      −1, a última com `t < min(agulha, visitado)`; `visitado` `null` não conta. As marcas vêm ordenadas por `t`, conserto antes de
      comentário no empate, depois por id.
  - O que a mesa parada mostra (§6.1, §6.2, §6.3, §13.4, §13.5, §13.7): o topo e as quatro pílulas; o vídeo e os controles; a fala;
    o painel com as duas abas, o "Aqui, agora" (de `consertoAqui` na agulha, com os comentários dele a até 3 s dali, na mesma cena,
    logo embaixo; fora de trecho, "Nada proposto neste trecho. O próximo: conserto proposto · s63 · 12:59.5 (N)" ou "seu
    comentário · …", por `marcaSeguinte`), a lista dos consertos ("N esperam você") e os cartões dos comentários (o desenho 16:9
    com o anel no ponto, ou "sem clique na imagem"); a barra com as faixas (a de "Chamadas" só com chamadas), os grupos, os traços
    até o bloco, os blocos com desenho, tira e número, a régua e a agulha; o pé com a legenda dos estados e os atalhos. Os botões
    aparecem, mas só ganham ação na tarefa 7.
  - Os textos fixos, em português simples: as pílulas "<N> cenas · <duração>", "<N> de <M> vistas nesta versão", "<X> comentários
    abertos", "<Y> consertos esperam você"; a origem "da revisão de qualidade" (`qc`), "da revisão de espectador" (`espectador`),
    "das duas" (`qc` e `espectador`), "da Sala" (`sala`), "de um comentário seu" (`comentario`); o aspecto "espera você",
    "Você respondeu: Concordo" (ou "Quero outro conserto") com "A Sala confirma com você no chat", "combinado", "refeito: veja de
    novo" (`feito`), "fica como está", sempre com a `decisao` da Sala quando houver; com `respostaVelha`, "o conserto mudou depois
    da sua resposta: responda de novo"; sem lista, "Nenhum conserto proposto para este vídeo"; o comentário "aberto", "o Claude está
    vendo", "resolvido", "fica como está", e a nota como "Claude: …".
  - `olhar.mjs` (rodado com `REGIE_MOTOR=C:/projetos/regie-v1`):
    - `node ferramentas/linha-do-tempo-v2/olhar.mjs mesa <proj> [--porta=8792] [--t=<s>] [--tamanhos=1920x911,1440x900,1080x800] [--raiz=<pasta>] [--sem-consertos]`;
    - recusa, com saída 2 e **antes de abrir o Chrome**, o projeto `australia-animais`, a porta 8790, o verbo desconhecido e o
      projeto que falta;
    - **a guarda de teste:** antes, lê `estadoDoProjeto(...).resumo.vistasAtual` e guarda cópias de `vistos.jsonl`,
      `medidas.jsonl`, `respostas.jsonl`, `consertos.entrada.json` e `consertos.json` de `out/<proj>/_tmp/linha-do-tempo/`; depois
      (mesmo com erro), renomeia os que o teste criou ou mudou para `<nome>.teste-claude-<AAAAMMDD-HHMMSS><ext>`, devolve as cópias
      e confere que `vistasAtual` é o de antes (saída 1 se não for);
    - sem `--sem-consertos`, escreve uma lista de teste gerada da linha do projeto (`consertosDeTeste(linha)`: seis itens nas
      primeiras cenas, com os estados `responder`, `combinado`, `feito` e `fica`, um com escolhas, dois sobrepostos na mesma cena,
      origem `sala`, nota "teste da mesa"), roda `montar` e grava, por `registrarResposta(…, { via: "local" })`, um `concordo` num dos
      `responder` (o aspecto "respondido");
    - sobe o servidor da v2 dentro do próprio processo, na porta pedida; abre o Chrome sem janela por `lancarChrome()`; em cada
      tamanho, abre `/?p=<proj>&t=<t>`, espera `body.dataset.pronta === "sim"`, salva
      `out/_tmp/linha-do-tempo-v2/olhar/<proj>-<L>x<A>.png` e mede para `olhar.json`: `palco` (largura e altura), `painel` (largura),
      `barra` (altura), `rolagemHorizontal` (`scrollWidth > innerWidth`), `empilhado` (o topo do painel abaixo do fim do palco),
      `fontes` (as faces da página com status `loaded`) e `pedidosDeFora` (pedidos a host que não é 127.0.0.1);
    - sai 0 só se: em 1920 × 911, `palco.largura ≥ 960`, sem rolagem horizontal e não empilhado; em 1440 × 900, sem rolagem e não
      empilhado; em 1080 × 800, empilhado e sem rolagem; as duas faces carregadas; `pedidosDeFora` vazio; a faixa "Chamadas"
      visível se e só se a `/api/linha` trouxe chamadas; com `--sem-consertos`, o painel diz "Nenhum conserto proposto para este
      vídeo";
    - não usa `fetch(`, `node:net`, `node:https`, `node:tls` nem `new WebSocket` (a prova varre a pasta) e não envia comentário.

- [ ] **Passo 1: escrever as checagens.**

```js
checar("[v2] página: /lt/mesa.js e /lt/mesa.css 200; /lt/pagina.js e /lt/pagina.css 404", ...);
checar("[v2] página: o servidor lê a página uma vez (o mesa.js mudado na pastaPagina de prova não muda o /lt/mesa.js)", ...);
checar("[v2] página: as faces vêm de /marca/fontes/ (Inter-VF e BarlowCondensed-ExtraBold)", ...);
checar("[v2] página: as quatro cores no mesa.css e os oito .d-<desenho>", ["#F5A524", "#2EC4B6", "#52B07F", "#E4572E"].every((h) => css.toUpperCase().includes(h)) && DESENHOS.every((d) => css.includes(`.d-${d}`)));
checar("[v2] página: toda linha com innerHTML que usa curto, problema, conserto, decisao, limpo, nota ou texto passa pelo esc(", ...);
checar("[v2] agruparMarcas: 10 e 10,05 s a 1,43 px/s viram um grupo de 2, com o aspecto espera; 30 s fica sozinho", g.length === 2 && g[0].itens.length === 2 && g[0].aspecto === "espera");
checar("[v2] agruparMarcas: o peso é espera < respondido < combinado < fica", ...);
checar("[v2] consertoAqui: A em 858,5 e B em 862,5 (cena até 879,133): em 862,3 dá [A, B]; em 862,5 dá [B, A]; em 858,2 dá [A]; em 857,9 dá []", ...);
checar("[v2] consertoAqui: a janela não passa do fim da cena (878,5 com fim 879,133: em 880 dá [])", ...);
checar("[v2] marcaSeguinte: marcas em 10, 20, 20 e 35; N de 0 dá 10; N de 7 com visitado 10 dá 20; N de 17 com visitado 20 dá 35; N de 32 com visitado 35 dá null", ...);
checar("[v2] marcaSeguinte: P de 32 com visitado 35 dá 20; P de 5 sem visitado dá null", ...);
checar("[v2] olhar: australia-animais e --porta=8790 saem 2 sem abrir o Chrome", ...);
```

  E as checagens que já existem sobre a página (o `[legenda]`, "a página não cita endereço de fora", "não define __PREVIEW nem
  tem botão de aprovar") passam lendo `mesa.*`, sem mudar o que afirmam.
- [ ] **Passo 2: rodar e ver falhar.**
- [ ] **Passo 3: implementar** as Interfaces.
- [ ] **Passo 4: rodar a prova.** Esperado: `✓ N de N`, nenhum ✗; a v1 intacta.
- [ ] **Passo 5: rodar a mesa parada.**
  Rodar: `REGIE_MOTOR=C:/projetos/regie-v1 node ferramentas/linha-do-tempo-v2/olhar.mjs mesa rio-columbia --t=60`
  Esperado: saída 0; os três PNG e o `olhar.json` em `out/_tmp/linha-do-tempo-v2/olhar/`; a última linha diz que as vistas do
  `rio-columbia` são as de antes.
- [ ] **Passo 6: rodar a mesa de um vídeo sem regência e sem consertos** (a cópia da prova do Juneau, que o passo 4 deixou).
  Rodar: `REGIE_MOTOR=C:/projetos/regie-v1 node ferramentas/linha-do-tempo-v2/olhar.mjs mesa juneau --raiz=out/juneau/_tmp/linha-do-tempo-v2/prova-raiz --sem-consertos`
  Esperado: saída 0 (as cenas da cópia não abrem, porque a mídia dela é vazia, e isso não conta aqui): sem a faixa "Chamadas", o
  painel com "Nenhum conserto proposto para este vídeo", sem rolagem horizontal.
- [ ] **Passo 7: parar e entregar à Sala** os PNG, o `olhar.json` e as medidas (o palco em cada tamanho). **A tarefa 7 só começa
  depois de a Sala olhar e devolver os defeitos** (§13.2), consertados aqui.
- [ ] **Passo 8: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 7: as interações

**Arquivos:**
- Mudar: `mesa.js`, `mesa.css` (o necessário), `olhar.mjs` (o verbo `roteiro`), `provar.mjs`.

**Interfaces:**
- Consome: as funções puras, os ids e os aspectos da tarefa 6; `POST /api/responder` (3); `POST /api/comentar` com `ponto` e
  `sobre` (4).
- Produz, no `mesa.js`:
  - `pontoDoClique(rect, x, y) → { x, y } | null`: porcentagem inteira (`Math.round`) do quadro; `null` fora do retângulo.
  - **Ir a um ponto** (N, P, clique num losango, num anel, numa linha da lista, num cartão, "Ver de novo"): `irPara(max(0, t − 3))`
    tocando; `visitado = t`. O losango de um grupo leva ao primeiro do grupo, e o painel mostra o grupo (§13.4). O "Aqui, agora"
    mostra esse ponto até a agulha sair da janela dele. ← e o clique na barra zeram o `visitado`. Depois do último, N avisa "Não
    há mais pontos daqui em diante" e não anda.
  - **N, P e F** no tratador de teclas de hoje, depois do filtro (`$("caixa").open`, foco em `TEXTAREA` ou `INPUT`). F põe o
    `#palco` em tela cheia.
  - **A caixa** abre com `show()` (sem bloquear), no painel. Esc no `#texto` fecha sem enviar. Clique no palco: pausa, abre a
    caixa se fechada, põe o anel (`#marcasImagem`) no ponto; outro clique o muda; clique no anel o tira. Sem cena no instante:
    aviso, sem caixa. O `#caixaPonto` diz "Você clicou na imagem: o anel marca o lugar" ou "Se quiser, clique na imagem para
    marcar o lugar". O ponto vai no `POST /api/comentar`.
  - **Os botões** (só no aspecto `espera` ou `respondido`): "Concordo" manda `concordo` com a escolha marcada (a sugerida por
    padrão); "Quero outro conserto" manda `outro`, **para o vídeo no instante exato do conserto** (pausa antes, se tocando), e só
    então abre a caixa com o título "O que você prefere? (opcional)", o instante desse conserto e `sobre = id` (§13.6); fechar a
    caixa sem escrever não desfaz o `outro`; clicar no botão já marcado manda `retirar`. 409: pede `/api/consertos` de novo e diz
    "o conserto mudou: veja de novo e responda". 422: pede de novo.
  - **Sobre a imagem:** o selo "Conserto proposto aqui · <cena> · <tempo> · detalhes ao lado" e o retângulo `area` ("o conserto
    mexe aqui") enquanto a agulha está na janela do conserto; o anel de cada comentário com ponto de 1 s antes a 3 s depois, na
    mesma cena, com "Seu comentário · <tempo>". Atualizam só quando o ponto do momento muda.
  - **"Só o que mudou":** `precisaOlho(c)` é verdade também com conserto em `espera` na cena (§13.4); e o filtro não tira o vídeo
    da cena para onde ele acabou de ir.
  - `olhar.mjs roteiro <proj> [--porta=8792]`, com a guarda da tarefa 6 e a lista de teste dela, que anda pela página sem
    janela: N desde 0:00; N de novo; "Quero outro conserto" num item em `espera`; Esc; "Concordo" com a escolha `a`; clique de
    novo; clique no centro do palco com a caixa aberta. Lê o resultado pelo DOM (`#relogio`, `#aqui [data-id]`, `#caixa.open`, o
    anel) e pelo `respostas.jsonl`. Nunca envia comentário.

- [ ] **Passo 1: escrever as checagens.**

```js
checar("[v2] pontoDoClique: no palco {left 100, top 50, 1086 × 610,875}, os cantos dão 0,0 e 100,100, o centro 50,50", ...);
checar("[v2] pontoDoClique: fora do palco dá null; 0,4 % arredonda para 0 e 0,6 % para 1", ...);
checar("[v2] teclas: N, P e F no mesmo tratador, depois do filtro da caixa e do campo de texto", /if \(tag === "TEXTAREA" \|\| tag === "INPUT"\) return;[\s\S]*?e\.key === "n" \|\| e\.key === "N"/.test(js) && /e\.key === "p" \|\| e\.key === "P"/.test(js) && /e\.key === "f" \|\| e\.key === "F"/.test(js));
checar("[v2] caixa: abre com show(), nunca showModal()", /\$\("caixa"\)\.show\(\)/.test(js) && !/showModal\(/.test(js));
```

  E o `roteiro` imprime, com saída 0 só se todas passarem:
  - `N de 0:00: o Aqui, agora mostra o 1º ponto, e o relógio está até 3 s antes dele`;
  - `N de novo: o 2º ponto (o visitado andou)`;
  - `Quero outro: o relógio é o instante exato do conserto, a caixa está aberta, e o respostas.jsonl ganhou 1 linha outro, via local`;
  - `Esc: a caixa fechou, e a fila de verdade (out/_feedback-queue.jsonl) tem o mesmo tamanho e a mesma data de antes`;
  - `Concordo com a: 1 linha concordo, escolha a; clique de novo: 1 linha retirar`;
  - `clique no centro com a caixa aberta: o anel em 50 %, 50 %`;
  - `as vistas do <proj> são as de antes`.
- [ ] **Passo 2: rodar e ver falhar.**
- [ ] **Passo 3: implementar** as Interfaces.
- [ ] **Passo 4: rodar a prova.** Esperado: `✓ N de N`, nenhum ✗ (o `[legenda]` inteiro passando); a v1 intacta.
- [ ] **Passo 5: rodar o roteiro.**
  Rodar: `REGIE_MOTOR=C:/projetos/regie-v1 node ferramentas/linha-do-tempo-v2/olhar.mjs roteiro rio-columbia`
  Esperado: as sete linhas acima com ✓ e saída 0.
- [ ] **Passo 6: rodar a mesa parada de novo** (tarefa 6, passo 5). Esperado: saída 0 (as interações não estragaram o tamanho).
- [ ] **Passo 7: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 8: os quadros por segundo, v1 contra v2

**Arquivos:**
- Mudar: `olhar.mjs` (o verbo `qps`).

**Interfaces:**
- Consome: o `criarServidor` da v1, importado **só para ler** de `ferramentas/linha-do-tempo/servidor.mjs`; o da v2; a guarda da
  tarefa 6.
- Produz: `REGIE_MOTOR=C:/projetos/regie-v1 node ferramentas/linha-do-tempo-v2/olhar.mjs qps <proj> --cenas=<id>,<id> [--segundos=8]`.
  Sobe a v1 na 8791 e a v2 na 8792, dentro do processo; para cada servidor e cada cena (cena ao vivo, `tipo` `dom`, com pelo menos
  8 s; sem `--cenas`, as duas primeiras assim), abre `/?p=<proj>&t=<início da cena>` em 1920 × 911, sem janela, com
  `--autoplay-policy=no-user-gesture-required`, toca `--segundos`, pausa, e lê a linha `tipo: "toque"` daquela cena que a página
  mandou ao `medidas.jsonl` (`quadrosPorSegundo`). Imprime, por cena, v1, v2 e a razão. Sai 0 só se, em cada cena,
  `v2 ≥ 0,9 × v1` (a régua do §2 e do §13.8); 1 se não; 2 em uso errado (as mesmas recusas da tarefa 6). A v1 vem de
  `--v1=<pasta>`, por padrão `ferramentas/linha-do-tempo`; depois da troca esse caminho é a própria v2, e o `qps` só serve com uma
  v1 tirada do histórico (o LEIA-ME diz isso).

- [ ] **Passo 1: rodar sem o verbo e ver falhar.** `… olhar.mjs qps rio-columbia` → saída 2, "verbo desconhecido".
- [ ] **Passo 2: implementar** o verbo.
- [ ] **Passo 3: rodar.**
  Rodar: `REGIE_MOTOR=C:/projetos/regie-v1 node ferramentas/linha-do-tempo-v2/olhar.mjs qps rio-columbia`
  Esperado: duas linhas `<cena>: v1 <q> · v2 <q> · razão <r>` e saída 0; as vistas do `rio-columbia` são as de antes. Com saída 1,
  o relato diz onde a mesa pesa (o que redesenha por quadro) e a tarefa volta à 7.
- [ ] **Passo 4: rodar a prova.** Esperado: `✓ N de N` (a varredura de rede e de chaves passa no `olhar.mjs`); a v1 intacta.
- [ ] **Passo 5: a Sala revisa e commita** (o implementador não commita).

---

### Tarefa 9: o uso da v2 e o roteiro da troca, para a Sala

A troca em si é da Sala. Esta tarefa só escreve.

**Arquivos:**
- Mudar: `ferramentas/linha-do-tempo-v2/LEIA-ME.md` (o uso da v2); `ferramentas/linha-do-tempo-v2/DESENHO.md` (na lista das
  decisões do Lucas, um item que aponta para o `DESENHO-v2.md`, como o da legenda).
- Criar: `ferramentas/linha-do-tempo-v2/TROCA.md`.

**O que cada um diz:**
- `LEIA-ME.md`: os comandos da v2 (a tabela de hoje, mais `consertos.mjs montar | conferir | respostas` e `olhar.mjs mesa | roteiro |
  qps`); a mesa; os consertos (o formato do §7.1, o `montar`, o `conferir`, o `respostas`, quem muda o estado); os botões que
  registram e a confirmação no chat; o ponto na imagem e o colchete; as chamadas e os desenhos pela regência; "O que a página
  grava" com o `respostas.jsonl`; "A segurança" com as duas rotas novas e a lista fechada igual; "mudar a página pede reiniciar o
  servidor"; a guarda de teste do `olhar.mjs`; "nenhum teste comenta fora da cópia da prova"; o provado (a contagem final) e o não
  provado (o que só a Sala vê no painel do app: a legenda desenhada, a tela cheia, o tempo real com som, o PC do Lucas).
- `TROCA.md`, para a Sala, nesta ordem (o §10 com o §13):
  1. Quando: o Lucas já terminou o vídeo 8 na página de hoje (20/11, 14:27, 64 de 65 cenas vistas, sem comentários) e escolheu
     "Publicar como está", com o lote de consertos já decidido seguindo. A troca vai antes de abrir a r2 desse lote (sem r2, antes
     da revisão do próximo vídeo). A Sala avisa o Lucas no chat antes (§13.3).
  2. Antes: `provar.mjs` da v2 inteiro; um revisor independente leu o código e a prova; a lista do §9.2 olhada pela Sala no
     painel do app, na porta 8791, num vídeo publicado (a mesa em 1920 × 911 e 1440 × 900, a legenda desenhada, N/P/F/C/L/Espaço,
     os botões, a caixa do "Quero outro", "só o que mudou" depois de um salto, nenhum pedido fora de 127.0.0.1), com a guarda de
     teste.
  3. A lista da r2: `out/australia-animais/_tmp/linha-do-tempo/consertos.entrada.json` em português simples (os consertos feitos
     como `feito`, "refeito: veja de novo"; os decididos como `fica` ou `combinado`), `consertos.mjs montar australia-animais` (0) e
     `conferir` (0).
  4. O "antes": `estado australia-animais` (as vistas desta versão).
  5. A mudança: primeiro, `git mv` do `DESENHO-v2.md` e do `PLANO-v2.md` para a pasta da v2; depois, `git rm` da v1
     (`ferramentas/linha-do-tempo.mjs` e `ferramentas/linha-do-tempo/`; ela fica no histórico) e `git mv` da v2 para o lugar dela
     (`ferramentas/linha-do-tempo-v2/` → `ferramentas/linha-do-tempo/`, `ferramentas/linha-do-tempo-v2.mjs` →
     `ferramentas/linha-do-tempo.mjs`); trocar os três imports `./linha-do-tempo-v2/` do CLI e as menções nos textos
     (`grep -rn "linha-do-tempo-v2" ferramentas/` só acha este roteiro); rodar o `provar.mjs` no lugar novo, e ele sai 0 (os caminhos
     dele se acham sozinhos; a cópia da prova volta a `out/juneau/_tmp/linha-do-tempo/prova-raiz`).
  6. Parar o servidor de hoje pelo id (`preview_stop`) e subir `linha-do-tempo-australia-animais-casa` (`preview_start`); o Serve do
     Tailscale não muda. Conferir a linha da partida: legenda em dia, N consertos, 3 chamadas.
  7. O "depois": `estado australia-animais` dá as mesmas vistas do passo 4.
  8. Abrir a página do vídeo 8 no painel do app **sem tocar e sem clicar em botão**: o painel, a barra, as 3 chamadas, os desenhos,
     a legenda ligada.
  9. Avisar o Lucas no chat: o endereço é o mesmo, é só recarregar.
  10. Na r2, a sessão dele dá os quadros por segundo "depois", contra os "antes" do `medidas.jsonl` de 20/11 nas mesmas cenas (§13.8).
  11. O commit (a v2 no lugar, a v1 no histórico, o `TROCA.md` sai ou fica como registro, a critério da Sala) e o aprendizado "o
      servidor lia a página do disco a cada pedido" na `registrar-aprendizado-como-skill`.
  12. Se der errado: parar o servidor novo, guardar a v2 pelas regras de git da Sala, voltar a v1 do histórico, subir de novo; os
      vistos, a fila e a legenda continuam valendo.
- `TROCA.md`, também: o texto pronto para a Sala pôr em `sala/linha-do-tempo.md` (o fluxo com a lista de consertos montada antes
  do aviso ao Lucas; durante a revisão, o log das respostas; ao fim, `consertos.mjs respostas` e `--fila`, a confirmação no chat,
  a lista atualizada; as provas no navegador só em vídeo publicado e com a guarda).

- [ ] **Passo 1: escrever** os três arquivos.
- [ ] **Passo 2: conferir.**
  Rodar: `grep -c "consertos.mjs" ferramentas/linha-do-tempo-v2/LEIA-ME.md && grep -c "git mv" ferramentas/linha-do-tempo-v2/TROCA.md && node ferramentas/linha-do-tempo-v2/provar.mjs | tail -n 2`
  Esperado: os dois números acima de 0; `✓ N de N`; e a v1 intacta.
- [ ] **Passo 3: a Sala revisa e commita** (o implementador não commita).
