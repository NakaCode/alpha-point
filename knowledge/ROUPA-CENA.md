> **[porte Regie]** Origem: `top10-estudio/knowledge/ROUPA-CENA.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Os exemplares `seed/examples/dourados/<Mxx>/` citados aqui: neste canal, as 6 cenas que já nasceram 4K estão em `regua/<Mxx>/` (M06, M10, M11, M12, M21, M24 — leia `regua/LEIA-ME.md`); as demais não vieram.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# ROUPA-CENA — o padrão OBRIGATÓRIO pra criar qualquer cena (v5, 02/jul/2026)

Este doc é a "roupa" completa que QUALQUER Claude (Mac, Windows, subagente) veste antes de criar/refazer uma cena.
Exemplar canônico: `seed/examples/dourados/M02/paladar-altitude-processo.html` — **LEIA ELE INTEIRO antes da primeira cena.** (Vive na biblioteca versionada, com o `.brief.json` ao lado; o caminho antigo `out/avioes-linha-reta/graphics/` **não existe mais** — a produção foi entregue e limpa. Há mais dourados em `seed/examples/dourados/M01|M02|M07|M08|M09/`.) ⚠️ Todos eles são do palco LEGADO 1920×1080: copie a ESTRUTURA e o rigor, não os números — cena nova nasce em 3840×2160 (ver abaixo).

> ⭐ **LEITURA OBRIGATÓRIA ANTES DE CRIAR: `knowledge/dourados/README.md`** — o manual da EDIÇÃO DINÂMICA (destilado do eua-china, que o Mateus amou), com a LEI-MÃE (montar na voz + re-coreografar os mesmos objetos), as 7 TRAVAS, o RIG de código (easing/word-lock/motor de footage/kit de acabamento) e os exemplares dourados **atuais** em `seed/examples/dourados/<Mxx>/` (cenas de `lugar-mais-frio` e `3i-atlas` — a régua vigente; o `eua-china/` foi aposentado como padrão visual em 22/jul e vale só como acervo de TÉCNICAS). É o que separa "vídeo dinâmico" de "slide". As ARTE-35/36/37 + FIN-03 do aprendizado resumem; o README tem os snippets.
O MODELO da cena vem do cardápio `knowledge/CATALOGO-MODELOS.md` (apontado pelo `modo` do espelho);
recursos (mídia/dados/logos/pessoas/documentos/geo) vêm dos departamentos (`knowledge/DEPARTAMENTOS.md`).
Regras completas: `seed/aprendizado.md` (leis numeradas — a mais NOVA vence). Este doc condensa o essencial; em conflito, o aprendizado mais novo manda.

> ⚠️ **ANTES de decidir desenhar: leia `knowledge/MIDIA-REAL.md` (OBRIGATÓRIA).** Se a cena tem `midia:"footage"/"foto"/"drone"` (ou é sobre lugar/pessoa/evento/objeto real ou HISTÓRICO), o certo é MÍDIA REAL 4K — não desenhar o que existe. O pesquisa-imagens entrega os arquivos em `out/<proj>/_media/footage/<cena>/`. Duas formas de inserir: **(A) footage EMBUTIDO na cena** — `<video>` + `video.currentTime=f(t)` no `__renderAt` (NUNCA `play()` solto; gate `__fotosProntas` no `loadeddata`). ⚠️ **O seek TEM de esperar o frame ser APRESENTADO, não só posicionado** — ver §2-bis; **(B) footage STANDALONE** — a cena é o clipe puro (fundo transparente com só os textos/elementos por cima, no mesmo inSec). Desenho (SVG) segue sendo o padrão pra CONCEITO/DADO/MECANISMO (ARTE-18/ARTE-19/ARTE-20).

> ⚠️ **E O INVERSO — ABSTRAÇÃO/CONCEITO = DESENHO NATIVO, NUNCA FOOTAGE/SCREENSHOT (ARTE-42).** Se a cena é sobre algo ABSTRATO (órbita, trajetória, mecânica, dados, diagrama, esquema, fluxo), você DESENHA (SVG/canvas na paleta do canal) — é PROIBIDO colar um screenshot/JPG de "visualização" da web como fundo. Erro real (provado por experimento controlado): a cena de mecânica orbital veio do espelho como `midia:"footage"` / `midia_termos:["solar system orbits NASA visualization"]`, e a obediência colou um JPG feio da NASA (marca "NASA/JPL-Caltech"); o MESMO trecho DESENHADO livre virou um sistema solar lindo navy+âmbar estilo Kurzgesagt, em effort MENOR. Mídia real (ARTE-36) é SÓ pra SUJEITO REAL fotografável (lugar/pessoa/evento/objeto) — abstração é sempre desenho. Se o espelho marcou `footage`/`midia_termos` numa cena claramente abstrata, IGNORE o termo, DESENHE, e sinalize o erro de classificação do montador.


## §2-bis · O SEEK DE VÍDEO — esperar o frame APRESENTADO (o defeito que travou 4 vídeos)

Toda cena com `<video>` precisa deste `seekTo`. Copie-o como está:

```js
function seekTo(v, tt) {
  if (window.__PREVIEW) return Promise.resolve();          // na galeria o vídeo toca normal
  if (!v) return Promise.resolve();
  if (Math.abs(v.currentTime - tt) < 0.004) return Promise.resolve();
  return new Promise(function (res) {
    var done = false, tGraca = 0, tGuarda = 0, GRACA_RVFC = 300;
    function fin() { if (!done) { done = true; clearTimeout(tGraca); clearTimeout(tGuarda); v.removeEventListener('seeked', pos); res(); } }
    function pos() { if (v.requestVideoFrameCallback) { v.requestVideoFrameCallback(fin); tGraca = setTimeout(fin, GRACA_RVFC); } else fin(); }
    v.addEventListener('seeked', pos);
    tGuarda = setTimeout(fin, 2600);
    try { v.currentTime = tt; } catch (e) { fin(); }
  });
}
```

**Por que assim, e não do jeito antigo** (27/jul/2026, defeito que o Mateus reportou cinco vezes):

- **`seeked` não basta.** Ele dispara quando o browser POSICIONOU o vídeo, não quando o frame novo
  foi APRESENTADO. Entre um e outro há um intervalo, e o screenshot do render caía nele — capturava
  o frame ANTERIOR. Medido no clipe entregue: **24,1% dos frames ficavam mais próximos do frame N−2
  que do N−1**, em ciclo periódico de 4 em 4. O vídeo ia e voltava.
  Palavras dele: *"a imagem fica indo e voltando, repetindo o mesmo frame passado e o próximo"*.
- **`requestVideoFrameCallback` é a API certa** — só dispara com um frame de fato apresentado.
- **O limiar era 0,02 s e passou a 0,004.** A 30 fps meio frame vale 0,0167 s: o limiar antigo era
  MAIOR que isso e mandava pular seeks legítimos.

⛔ **E é por isso que o rVFC tem PRAZO (`GRACA_RVFC`), e não pode ser o único fim de linha**
(21/ago/2026, medido em 3 projetos). A mesma virtude que o torna certo para o render o torna
uma armadilha no gate: ele **só dispara quando o compositor APRESENTA um quadro**, e no Chrome
headless de um gate — que não desenha, porque ninguém pede screenshot — ele **nunca chega**.
Medido em 8 amostras: `seeked` = 285–537 ms em **8/8**; rVFC = **~1 de 8**. Sem prazo, o único
fim de linha vira o guarda de 2600 ms, pago INTEIRO em cada amostra.

A conta que decide tudo é a **DURAÇÃO da cena, não a máquina**: a ~2,5 s por amostra, cena de
footage acima de **~11 s** não cabe no teto de 180 s do `qc-cena.mjs` e volta `[NÃO MEDIDO]` em
colisão / fora-do-quadro / crédito-fantasma / carga. **A cena está SÃ; o gate é que é cego** — e
como *indefinido barra render* desde 05/ago, a cena boa trava o lote na VM paga. Medido:
`uruguai-despovoado` s88 (16,2 s) **208,3 s → 51,7 s**; `especies-humanas` n072 fechou em 58,7 s
com 120/120 amostras.

**Não arrisca o render**, e essa é a razão de o prazo ser seguro: quem captura não confia nesta
espera. `render/capturar.mjs` faz a própria (rVFC-ou-`seeked`, teto 400 ms) + 2 ciclos de
composição + `RENDER_SETTLE_MS` 350 ms, e o `shot.mjs` espera os mesmos 350 ms. Os 2600 ms só
seguravam gate. Quando o compositor está desenhando, o rVFC chega **35–55 ms** depois do
`seeked` — os 300 ms são ~6× a latência real, e o `seeked` continua sendo a garantia dura.

*Passivo já escrito no disco se cura com* `node scripts/qc-graca-rvfc.mjs <proj> --aplicar` **[porte Regie: não veio — `qc-graca-rvfc.mjs`, sem substituto]**
*(determinístico, não toca em arte, pula cena com carimbo verde para não invalidar medição paga).*

⚠️ **E o footage tem de estar na cadência do render (30 fps).** Stock vem em 25, 24 ou 60. A cena
não compensa cadência no `fClip`: um `fClip` é por CENA, e uma cena usa vários footages com cadências
diferentes. **Durante a ARTE, não rode `normalizar-footage.mjs` e não reencodifique mídia.** **[porte Regie]** No Top10 a
normalização rodava na VM de render sob demanda. Aqui ela roda no PC do dono, DEPOIS da arte e ANTES do
render: `node scripts/normalizar-footage.mjs <proj>` (reencoda cada clipe para 30 fps exatos, guarda o
original em `_fps-original/`), e a prova é `node scripts/qc-footage-seekavel.mjs <proj>`. Clipe fora de
30 fps que chega ao render é defeito a consertar por esse passo, não a declarar.


## 0. Contrato técnico (inviolável)
- **Palco 3840×2160 NATIVO** (REND-13, 21/jul — o padrão de toda cena NOVA): `<html lang="pt-BR" data-render="4k-native">` + palco `width:3840px;height:2160px`, centro em `(1920,1080)`, TODAS as coords e fontes em 4K (o dobro do que era em 1080p), `<canvas width="3840" height="2160">` SEM `ctx.setTransform` (buffer = saída, 1:1). Cena LEGADO sem a marca continua em 1920×1080 com canvas HiDPI — não misture os dois. `window.__duracao` = dur do segmento; `window.__renderAt(t)` determinístico e **NUNCA pode dar erro de JS** (proteja TODO acesso: `var e=E('id'); if(e){...}`); `window.__prepararCaptura=function(){window.__renderAt(0);}`.
- Fonte **[porte Regie]**: `font-family:var(--fonte)`, com `<link rel="stylesheet" href="../../../marca/tokens.css">` na cena; família e pesos são da marca do canal. No Top10 era a Neue Haas cravada pelo nome (fonte proprietária, não vai para outro canal), e o defeito de Ã/Õ no Bold ([ARTE-213]) é dela. Com a fonte do canal, confira a cobertura de acentos com `node <motor>/src/cena/fonte-cobertura.mjs`.
- **NADA de emoji como elemento visual** — desenhe SVG. Sem entidade HTML (&nbsp;) em SVG `<text>`.
- ⚠️ CSS: se tiver regra global `svg{width:1920px...}` ela EXPLODE ícones inline — escope (`.cam > svg`) e dimensione ícones à parte.
- ⚠️ Depois de escrever o arquivo, confira os HEX: **`node scripts/qc-hex.mjs <arquivo>`** (já houve
  corrupção de cor tipo `#4A6residual580`, `#071late827` e `#050F２8`). ⛔ **O comando `perl` que ficava
  aqui está APOSENTADO** ([ARTE-134], proibido pela [ARTE-153]): ele acusava seletor de id como se fosse
  cor, e **não pega caractere não-ASCII** — largura total e homóglifo cirílico quebram a cor igual e são
  invisíveis na releitura ([ARTE-190]). O hook de escrita de cena já roda o `qc-hex` sozinho.

## 1. Processo (nesta ordem, sem pular)
1. **Segmento**: leia `out/<proj>/espelho.json` (produções antigas: `plano-roteirista.json` — aceite os dois ao ler) → seu `id, modo, inSec, dur, tese, ancora, needs`. A TESE é a ideia visual; o MODO manda na abordagem. A `paleta` do espelho manda nas cores.
   **E leia `out/<proj>/biblia-visual.json` se existir** — os MUNDOS compartilhados do vídeo (sua cena pertence a
   um deles: use o MESMO cenário-base/motivos das cenas irmãs, não invente um mundo novo por cena).
2. **Narração + word-lock**: extraia as palavras da janela e os timestamps das âncoras:
   `node -e 'const w=JSON.parse(require("fs").readFileSync("out/<proj>/words.json","utf8"));const a=Array.isArray(w)?w:(w.words||[]);const IN=<inSec>,OUT=IN+<dur>;a.filter(x=>(x.start??x.s)>=IN-0.05&&(x.start??x.s)<OUT).forEach(x=>console.log(((x.start??x.s)-IN).toFixed(1)+"s",(x.word??x.w??x.text)))'`
   Cada elemento entra no tempo EXATO da palavra que o ancora (t local = start − inSec). Número conta quando a voz fala o número.

   ⚠️ **E AGORA A CENA DECLARA ISSO — `data-ancora` + `data-entra` (contrato de 21/ago/2026).**
   Todo elemento que entra por causa de uma palavra carrega os dois atributos:
   ```html
   <div class="beat" data-ancora="ferramentas" data-entra="3.22">…</div>
   ```
   `data-ancora` é a palavra (ou o trecho: `data-ancora="parte da gente"`) e `data-entra` é o
   instante LOCAL em que ele aparece. **O script da cena tem de LER `data-entra`** — não copiar o
   número para dentro do código:
   ```js
   // no __renderAt: cada beat aparece a partir do que ELE declara
   document.querySelectorAll('[data-entra]').forEach((el) => {
     el.style.opacity = t >= parseFloat(el.dataset.entra) ? 1 : 0;
   });
   ```
   **Por que os dois juntos, e por que o script LÊ o atributo:** um atributo que só *descreve* o que
   o código faz vira mentira na primeira edição — é a doença que esta casa já conhece pela
   `biblia-visual.json` (a instrução manda toda cena lê-la, nenhum agente a escreve, e como o texto
   diz "se existir", a ausência nunca deu erro). Lendo o atributo, corrigir o número corrige a cena,
   e não existe estado em que um diga uma coisa e a tela mostre outra.
   **O que isso destrava:** a lente `wordlock` do QC visual carregava sozinha **15% da fila de
   correção** (62 de 403 achados pendentes, medidos em 20/ago/2026) e nenhum gate determinístico
   conseguia medi-la — para saber se "a lâmina entra em 'ferramentas'" era preciso saber qual
   elemento é a lâmina, e nada no HTML dizia. Com a declaração, o instante certo sai do `words.json`
   por conta: **`node scripts/qc-ancoras.mjs <proj>`** mede, e
   **`node scripts/consertar-deterministico.mjs <proj> --aplicar`** reposiciona. **[porte Regie: não veio — `consertar-deterministico.mjs`, sem substituto: o `qc-ancoras.mjs` mede, e o conserto é à mão]**
   ⚠️ **Âncora ausente ainda NÃO reprova** — o contrato é novo e quase nenhuma cena do disco o
   cumpre. O que reprova é âncora que MENTE: declarada e fora do tempo, ou apontando para uma fala
   que não existe na janela da cena.
3. **Desenhe o CENÁRIO, não um slide** (ver §2). Escreva o HTML.
4. **Auto-QA obrigatório** (ver §3). Corrija e repita até passar TUDO.

## 2. As leis do padrão v5 (o que o Mateus cobra — feedback real)
- **CENÁRIO VÍVIDO INTEGRADO**: construa o MUNDO da narração (avião voando com janelinhas+passageiros, mar embaixo, cabine clara com janela, aeroporto, pneu na pista…) e componha o dado DENTRO dele. Céu azul VIVO/luz do dia quando o tema permite. Gráfico-slide solto sobre fundo escuro = REPROVADO.
- **FUNDO = MÍDIA REAL, NUNCA NAVY CHAPADO (ARTE-36 — a mais nova, vence)**: TODA explicação/dado/infográfico lidera com FOOTAGE ou IMAGEM REAL de fundo ilustrando o tema; o gráfico entra POR CIMA com scrim/gradiente SÓ atrás dele (o footage fica visível nas bordas e em movimento). Navy sólido chapado como fundo inteiro = REPROVADO (=slide genérico). Se for navy (raro), tem que estar VIVO (câmera + starfield + embers + glow que respira). Modelos: dourados `dados-china-ascensao`/`dados-saida-economia`/`dados-chips-ia`.
- **⚠️ FUNDO-COLETÂNEA: ~8 FOTOS REAIS QUE TROCAM COM A NARRAÇÃO — a capacidade existe e estava sem porta.**
  Quando o sujeito da cena é uma PESSOA ou um assunto com acervo fotográfico (não um lugar, não um dado), o
  fundo pode ser uma **sequência** de fotos reais em crossfade + Ken Burns, em vez de uma imagem parada. É a
  ARTE-36 levada ao limite: fundo real que também se MOVE, e que resolve de graça o problema da mídia
  repetida (ARTE-60) — a cena não escolhe *uma* foto, ela roda um acervo.
  **Como usar** (58 linhas, autocontido, sem dependência):
  ```js
  import { bgColetaneaScript, montarSeq } from "./templates/bg-coletanea.mjs";
  const seq = montarSeq(fotos, dur, { overlap: 0.8 });   // fotos = [{src, tipo:"foto"}]
  // bgColetaneaScript({ fade: 0.6, kenBurns: 0.09 }) devolve o script de runtime
  ```
  Dedup de acervo por **dHash perceptual** (`src/agent/dhash.mjs`) — md5 não serve, porque o upscale muda o
  byte e a foto é a mesma.
  **⚠️ POR QUE ISTO ESTÁ ESCRITO AQUI (26/jul):** a técnica nasceu no `senna` de 24/jun e o Mateus lembra as
  cenas daquela versão como **melhores** que as da versão nova. O motivo é medível: o único chamador de
  `bg-coletanea.mjs` era um script de uso único, hardcoded numa cena (`aplicar-bg-abertura.mjs`), e ele foi
  para `arquivo-morto/2026-07-scripts-orfaos/`. O template ficou no repo **sem nenhuma porta viva**, e a
  versão nova do senna saiu com **6 mídias repetidas sem gancho** — cada cena escolhendo uma foto só. Ver
  [SIS-36]. `docs/10-estilo-cinematografico.md` tem o contexto de estilo.
- **MONTAR NA VOZ (ARTE-35)**: cada elemento nasce/muda na PALAVRA exata que o ancora (word-lock, §1.2); re-coreografe os MESMOS objetos conforme a narração reinterpreta (não crie elemento novo a cada beat). Reuse o RIG do `dourados/README.md`.
- **CARDS navegação/CTA = OVERLAY transparente (FIN-03)**, nunca full-frame de fundo sólido — mas título de tópico é capa com footage (exceção).
- **LINHA DE MARCA** **[porte Regie]**: toda barra/régua/sublinhado decorativo NOVO (kicker, título, cota, tarja de card) usa a linha de marca DESTE canal — `var(--acento)`, ou o gradiente que `marca/tokens.css` declarar — e nunca uma cor inventada na cena. *Exemplo, não regra:* no Top10 era o gradiente frio→quente `linear-gradient(90deg,#3EC8FF,#FFB13D)` (azul-ciano → laranja/âmbar), no lugar de cor sólida — padrão adotado 07/jul (origem: título de tópico do escudo-do-mundo). Vale pra cena nova ou cena que por outro motivo JÁ vai ser re-renderizada — **não é motivo pra reabrir/re-renderizar cena pronta só por causa disso** (Mateus corrigiu 07/jul: acelerar > polish retroativo). Não aplica a elementos SEMÂNTICOS (verde=confirmado/ok, vermelho=risco, marcas de eixo/tempo em gráfico) — só ao puramente decorativo.
- **TAKES**: cena longa = SEQUÊNCIA EDITADA de planos do MESMO cenário (wide → close → detalhe), cross-dissolve ~0.35s, e **push-in de câmera dentro de cada take** (`cam()` no exemplar).
- **MOVIMENTO CONTÍNUO**: nenhum elemento entra e congela — agulha treme, barra respira, nuvem deriva, ícone gira, vapor sobe. Frame parado = reprovado.
- **⚠️ MAS RITMO TEM RESPIRO (ARTE-55)**: "nada congela" fala do MOVIMENTO, **não** da taxa de entrada de conteúdo. A câmera e a textura não param nunca; **informação nova entra devagar**. Mateus, 24/jul: *"tem várias animações que ficaram MUITO rápidas, que é algo que eu NÃO gosto"*. Piso: **cada bloco de texto ≥1,5 s no ar**, **≥1,2 s entre estreias de texto** na mesma região, nunca estreando a <1 s do corte. Word-lock (§1.2) diz *quando* a coisa entra — **não** obriga a pôr um elemento por palavra (fala corrida = 2,5–3 palavras/s; um elemento por palavra é a receita da cena que ninguém acompanha). Antes de criar elemento novo, veja se um que já está na tela não faz o trabalho (re-coreografar > acrescentar).
- **GUARD-RAIL ≤3** (blocos marcados): no máx ~3 blocos-de-info simultâneos; cada bloco se APOSENTA (fade-out) antes do próximo. Marque blocos contáveis com `class="lbl"`.
- **⚠️ DENSIDADE REAL = `qc-carga`, e ela conta O QUE VOCÊ NÃO MARCOU (ARTE-56)**. O `qc-carga` só olha `.lbl,#hero` — o que o autor lembrou de marcar —, e regra que depende de lembrar é regra morta: medido em `ascensao-anti-imigracao-europa`, ele imprimiu **"PICO: 3 ✓"** com **26 blocos de texto e 140 elementos gráficos** na tela ao mesmo tempo. Mateus, 24/jul: *"tiveram várias que ficaram POLUÍDAS, com muita informação ao mesmo tempo, o espectador fica cansado/sobrecarregado (…) quando deveria ser o essencial"*. Rode **`node scripts/qc-carga.mjs <html>`**: conta TODO elemento de informação — texto **e** gráfico (barra, ícone, card, seta, pino, foto), marcado ou não. **Partícula/grão/starfield não contam** (é textura, é o "nada congela"). Tetos = o máximo já visto num dourado. **O teto não é o alvo — a mediana dourada é: ~4 blocos de texto / ~18 elementos.** Cada elemento tem de responder *"por que EU preciso estar aqui agora?"*; "pra não ficar vazio" ou "porque o dado tinha 8 linhas" = sai. Tabela inteira na tela não é cena densa, é cena que não decidiu. E **"densidade máxima" no showpiece é densidade de INVENÇÃO e MOVIMENTO — nunca de quantidade simultânea**.
- **BANDEIRA COLADA NO NOME DO PAÍS (ARTE-57 — obrigatória, qualquer modo)**: Mateus, 24/jul: *"eu quero que os nomes dos países **SEMPRE** tenham as bandeiras ao lado acompanhando"*. Todo nome de país escrito na tela (mapa, ranking, comparação, timeline, legenda) leva a bandeira oficial **ao lado, alinhada pelo centro**, altura ≈ a da caixa-alta do texto. Acervo: **`assets/flags/<iso2>.png`** (flagcdn, domínio público; `assets/flags/_PROCEDENCIA.json`; OTAN em `assets/flags/nato/`). Faltou: `https://flagcdn.com/w320/<iso2>.png` **e salve no acervo**, ou peça ao `pesquisa-logos`. **Nunca** desenhar bandeira à mão, **nunca** emoji. Continente/oceano/região não têm bandeira — não invente. Gate: `node scripts/qc-pais-bandeira.mjs <html>`.
- **NOME DE PAÍS É RÓTULO, NÃO HERÓI — teto 180px (ARTE-58)**: Mateus, 24/jul: *"elas ficaram meio grandes também os nomes dos países, pode diminuir"*. Nome de lugar diz ONDE; o herói é o dado/a tese. Piso 104px, **teto 180px** (palco 4K; metade no legado), alvo ~130–150px. ⚠️ **Nunca** marque `data-qc-papel="heroi"` num nome de lugar: isso faz o `qc-tamanho` **exigir** ≥260px dele — foi o que produziu IRÃ a 300px. Cena pode não ter herói — mas **declare no HTML, nunca na flag**: `data-qc-sem-heroi="<motivo com 12+ caracteres>"` no `#palco`. ⚠️ `qc-tamanho.mjs --sem-heroi` passa verde na sua mão e **não vale nada no portão**: o `qc-cena` (e o `_portao.json` que barra o render) chama o gate **sem flag nenhuma**, elege o maior texto do palco como herói e cobra 260px. Medido em 14/set/2026 na `s025-plano-quinquenal` do `compilado-poder-militar-china-eua`: a cena explicava em comentário que "roda com `--sem-heroi`", nasceu `ok:false` e ficou **órfã** — cena com HTML some do `--listar` e com `ok:false` o render a pula, então **nenhuma fila a recupera**. Motivo com menos de 12 caracteres é ignorado **em silêncio**.
- **COMPLEXIDADE PROPORCIONAL À DURAÇÃO (ARTE-42)**: cena curta (~4s) = UMA ideia clara e legível; detalhe rico só nos beats LONGOS. Um conceito que se desenvolve por vários beats (ex.: arco de mecânica orbital ~40s) é UM SHOWPIECE CONTÍNUO que se CONSTRÓI ao longo da narração (transição contínua, ARTE-40) — não uma pilha de cortes desconexos.
- **ANTI-ECO**: NÃO escreva o que a narração fala. Texto = rótulo/número/nome curto. Sem kicker/título de slide, sem subtítulo.
- **TEXTO GIGANTE (TV)** — **no palco 4K-nativo os números DOBRAM**: herói 400px+ (piso 260), rótulo ≥104px, legenda/eixo ≥72px. (Cena LEGADO 1920: herói 200px+ (piso 130), rótulo ≥52px, legenda/eixo ≥36px.) Menos palavras, MUITO maiores. O px é o mesmo, mas a tela tem o dobro de pixels — piso de 1080p aplicado em 4K deixa passar texto pela METADE.
- **DUAS HIERARQUIAS = DOIS ELEMENTOS — `::first-line` é invisível para os gates (ARTE-58)**: o kicker pequeno em cima do número gigante ("MAIS DE" sobre "370") é composição legítima, mas **não o faça com `::first-line` num bloco só**. O `qc-tamanho` mede o ELEMENTO e lê a linha PEQUENA: medido em 14/set/2026 na `s102-frota-370-navios`, um herói real de 440px foi reprovado como `[heroi] "MAIS DE370" 119<260`, e de quebra a caixa inflada do bloco colidiu com o rótulo de baixo — **um defeito de markup aparecendo como dois defeitos de arte**. A forma certa preserva a pintura *e* a coreografia: um **shell** (que o JS anima por `opacity`/`transform`) com um **filho por corpo**, e o `data-qc-papel="heroi"` no filho do número, nunca no shell.
- **ZERO COLISÃO** em qualquer frame; canto superior DIREITO livre (logo).
- **ÍCONE INEQUÍVOCO**: teste a leitura ("o que isso parece?"). Fatia de cítrico solta pareceu RODA DE LEME; suco = copo+canudo+gomo na borda.
- **DADO REAL**: use os números do brief/narração; NUNCA invente. Dado atribuível → `Fonte: …` ≥36px discreta (e só se houver dado).
- **FOTO real**: rosto/cabeça inteiros, upscale 4K local (Real-ESRGAN), NUNCA fabricar rosto.

## 3. Auto-QA (rode e cole o resultado no teu report)
```
node scripts/shot.mjs <html> <t> /tmp/s_<t>.png   # 3-5 beats espalhados (olhe TODOS; sem "PAGEERROR")
                                                  # ⚠️ cena de MAPA: maprender.mjs, nunca shot.mjs
node scripts/qc-carga.mjs <html> --passo=0.5      # ARTE-55/56: densidade REAL + ritmo (conta o que
                                                  # você NÃO marcou; é ele que julga poluição)
                                                  # ⚠️ o --passo=0.5 NÃO é opcional em cena com footage
                                                  # 4K ou mapa: no passo padrão (0,1s) o gate TRAVA, e
                                                  # travado ele conta "não medido" como aprovado — o
                                                  # laudo sai verde sem ter medido nada
node scripts/qc-pais-bandeira.mjs <html>          # ARTE-57/58: bandeira ao lado de todo nome de país
                                                  # + rótulo de país no teto de 180px
node scripts/qc-tamanho.mjs <html>                # pisos de texto. Cena sem herói: declare
                                                  # data-qc-sem-heroi="<motivo 12+ chars>" NO HTML —
                                                  # a flag --sem-heroi só vale na sua mão, e o
                                                  # portão chama o gate SEM flag (ver ARTE-58)
                                                  # ⚠️ o gate mede o ELEMENTO, não o ::first-line:
                                                  # duas hierarquias num bloco só = ele lê a linha
                                                  # PEQUENA. Corpo diferente pede elemento próprio
node scripts/qc-hex.mjs <html>                    # hex corrompido (ARTE-190: lê TODAS as paradas de
                                                  # gradiente e pega lixo não-ASCII no meio da cor)
node scripts/_audit-til.mjs <html>                # ARTE-213: Ã/Õ em CAIXA ALTA no peso 600-749 (a
                                                  # Neue Haas quebra o glifo). Nenhum outro gate vê:
                                                  # não é colisão, corte, carga, contraste nem hex.
                                                  # Cura: peso 900 ou trocar a família do BLOCO —
                                                  # e re-medir check-overlap + qc-fora-do-quadro,
                                                  # que a família nova é mais larga. O Ç está CERTO
                                                  # em todo peso: não troque fonte por causa dele.
```
Depois olhe os frames DE VERDADE (visão) e critique nos 9 focos do painel (`knowledge/qc/lentes.md`): espaço/TV, factual, word-lock/anti-eco, abordagem, clareza-2s, poluição, motion, fonte, tema/cor. Só entregue com tudo ok.
