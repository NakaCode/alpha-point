> **[porte Regie]** Origem: `top10-estudio/knowledge/CATALOGO-MODELOS.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador. Pexels/Pixabay: a [PESQ-126] (14/09) os tirou do veto; as linhas deste arquivo que ainda diziam «vetados» foram marcadas. Os exemplares `seed/examples/dourados/<Mxx>/` citados aqui: neste canal, as 6 cenas que já nasceram 4K estão em `regua/<Mxx>/` (M06, M10, M11, M12, M21, M24 — leia `regua/LEIA-ME.md`); as demais não vieram.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# CATÁLOGO DE MODELOS DE CENA — o cardápio oficial da edição (02/jul/2026)

TODO agente que cria cena escolhe UM modelo daqui (o montador marca o `modo` no plano; o editor-de-arte executa).
Regras transversais SEMPRE: `knowledge/ROUPA-CENA.md` (v5: cenário vívido integrado, takes, movimento contínuo,
carga visual dentro dos tetos, word-lock, anti-eco, texto gigante, profundidade universal) + paleta do vídeo + auto-QA.

## ⚠️ COMO SE ESCREVE O MODO — o contrato, não esta prosa

A autoridade sobre o vocabulário é **`contratos/espelho.schema.json`**, e o enum dele é de **NOMES DE
FAMÍLIA** (`mapa`, `dados`, `footage`…), *nunca* do código `Mxx`. O código vai no campo **opcional
`modelo`**. Os dois juntos são a forma correta E precisa:

```jsonc
{ "modo": "mapa", "modelo": "M03" }   // ✅ schema-válido e sem perda de informação
{ "modo": "M03" }                     // ✗ viola o enum — o código está no campo errado
{ "modo": "dados" }                   // ✅ válido, porém LOSSY: "dados" cobre 7 modelos
```

Isso existe porque família é **um-para-muitos**: `dados` → M09 M10 M11 M13 M15 M18 M23 · `desenho` →
M02 M10 M13 M17 M21 M22 · `foto` → M07 M12 M16 M19 M20 · `mapa` → M03 M16. Escrever só a família não
diz **qual** modelo é, e o `editor-de-arte` acaba lendo a régua de sete modelos para desenhar um.
Verificação: `node scripts/qc-modo-regua.mjs <proj>`. **[porte Regie: não veio — `qc-modo-regua.mjs`, sem substituto: a régua 4K deste canal é `regua/<Mxx>/` (leia `regua/LEIA-ME.md`), e o `qc-espelho-modelo.mjs` confere modelo × modo]**

## Status — **gerado, não escrito à mão**

> A coluna abaixo é um retrato datado de **05/ago/2026**. Ela já apodreceu uma vez: 11 modelos estavam
> marcados 💡 ("proposto", isto é: ideia que ainda não existe) **enquanto rodavam em produção** — M22
> usado 14×, M17 e M24 10× cada. Um agente que lê 💡 entende "não tem template, evite" e desvia de um
> modelo que o estúdio já usou catorze vezes.
>
> **Não atualize esta coluna à mão. Rode o censo:** `node scripts/qc-modo-regua.mjs --censo` **[porte Regie: não veio — `qc-modo-regua.mjs`, sem substituto: a régua 4K deste canal é `regua/<Mxx>/` (leia `regua/LEIA-ME.md`), e o `qc-espelho-modelo.mjs` confere modelo × modo]**
> — ele varre todos os espelhos, conta o uso DIRETO de cada modelo e mede o estado da régua.

Legenda: ✅ em uso, com régua (exemplar em `dourados/<Mxx>/` ou `LEIA.md` apontando a régua viva) ·
🔨 **em uso e SEM régua** — o agente desenha às cegas, é dívida a fechar · 💡 nunca usado.
*Medido em 05/ago: nenhum modelo está em 💡 — não há capacidade morta para arquivar. E a dívida de
régua caiu de **17 modelos sem exemplar para 1** (só o M19) no mesmo dia; `top10 doctor` confere.*

| # | Modelo | `modo` roteirista | Status |
|---|--------|-------------------|--------|
| M01 | Abertura com nicho | cinematico | ✅ |
| M02 | Desenho explicativo (cenário integrado) | desenho | ✅ |
| M03 | Mapa animado 2D HD | mapa | ✅ |
| M04 | Mapa 3D "drone" (Google-Earth-like) | mapa3d | ✅ |
| M05 | Reportagem/documento grifado | documento | ✅ |
| M06 | Citação de pessoa real | citacao | ✅ |
| M07 | Footage/imagem real full-bleed | footage / foto / aereo-real | ✅ |
| M08 | Split comparativo (esq × dir) | split | ✅ |
| M09 | Cartão de número-herói | dados | ✅ |
| M10 | Linha do tempo | dados/desenho | ✅ |
| M11 | Ranking de barras (top-N) | dados | ✅ |
| M12 | Montagem histórica (fotos de época) | foto/cinematico | ✅ |
| M13 | Medidor cênico (manômetro/velocímetro) | dados/desenho | ✅ |
| M14 | Print social re-criado (post/tweet/zap) | documento | ✅ |
| M15 | Pictograma estatístico (1 ícone = N) | dados | ✅ |
| M16 | Mapa de ÉPOCA (cartografia histórica real) | mapa/foto | ✅ |
| M17 | Comparação de ESCALA (X Everests, Y Maracanãs) | desenho/dados | ✅ |
| M18 | Cronômetro/contagem (tempo real, contagem regressiva) | dados | ✅ |
| M19 | Antes → Depois (wipe deslizante na MESMA imagem/lugar) | foto/split | 🔨 |
| M20 | Zoom-de-detalhe (lupa progressiva em foto/documento real) | foto | ✅ |
| M21 | Processo em etapas (stepper 1→2→3 com ícones no cenário) | desenho | ✅ |
| M22 | Anatomia/raio-X (corte com camadas rotuladas) | desenho | ✅ |
| M23 | Custo visual (dinheiro/quantidade proporcional empilhada) | dados | ✅ |
| M24 | Pergunta-retórica (pergunta na tela → revelação; retenção) | cinematico | ✅ |
| M25 | Split de footage (N painéis, só vídeo, SEM texto) | split-footage | ✅ |
| M26 | Card de navegação/progresso + CARD DE TÍTULO DE TÓPICO (mesmo template) | navegacao / titulo-topico | ✅ |
| M27 | **Colagem editorial em gravura** (monocromia de tema + recorte de papel + silhueta + serif com sombra dura) | gravura-colagem | ✅ |
| M28 | **Apresentador + informação** (ele CEDE o espaço, o texto ocupa — nunca atrás dele) | apresentador-info | ✅ |
| M29 | **Mosaico de territórios** (N painéis: registro real + nome + cor por lugar) | mosaico | ✅ |
| M30 | **Placar de votação** (dois totais, a diferença em destaque) | dados | ✅ |
| M31 | **Galeria de pessoas** (retratos reais com nome e vínculo, em sequência) | foto | ✅ |
| M32 | **Apresentador puro** (a tela é ele, e é isso — reação, respiro, virada) | apresentador | ✅ |
| M33 | **Apresentador + registro real** (ele ao lado da foto/vídeo do que está falando; texto só se somar) | apresentador-midia | ✅ |
| — | **APRESENTADOR em tela** (10–15% do vídeo, PICADO) | apresentador | ✅ regra |

> **Por que `titulo-topico` está na linha do M26** (fechado em 05/ago): o valor é válido no enum do
> schema desde 22/jul e era o **único** do contrato sem linha no catálogo — o `qc-modo-regua` o
> reportava como "régua impossível" em todo projeto que o usa. Não é invenção de doutrina: a própria
> especificação do M26 (fim deste arquivo) já dizia que *"o card de título de tópico usa o MESMO
> template do título do conteúdo novo"*, e **16 das 32 cenas `titulo-topico` medidas já declaravam
> `modelo:"M26"`** por conta própria. O catálogo só passou a admitir o que a produção já fazia.

## Especificação por modelo

**M01 · Abertura com nicho** — TODA abertura carrega o kicker do canal com o nicho (kicker com acento; **[porte Regie]** exemplo: no Top10, "TOP 10 · <NICHO>" — o deste canal sai de `marca/voz.md`) + tipografia
cinética + motivo do tema. Exemplar: `seed/examples/dourados/M01/abertura-cinematica.html`.

**M02 · Desenho explicativo** — conceito/processo/mecanismo DENTRO do cenário da narração (avião voando,
cabine, fábrica…), dado tecido no mundo, takes wide→close. **Exemplar canônico do canal:**
`seed/examples/dourados/M02/paladar-altitude-processo.html` (o caminho antigo em `out/avioes-linha-reta/`
não existe mais — a produção foi entregue e limpa do disco).

**M03 · Mapa 2D** — posicionamento geográfico (localização, rota, fronteira, comparação de área) com
**maplibre CDN + MapTiler `satellite-v2` — a BASE ÚNICA de todo mapa do canal (PESQ-21)**, tile 512.
Agente: `mapista`. Validação: `scripts/maprender.mjs` (o `shot.mjs` fotografa tile cru). **[porte Regie: não veio — `maprender.mjs`]**
⛔ nunca desenhar país à mão; geometria real via `pesquisa-geo`. ⛔ Blue Marble estático e template mapa
APOSENTADOS. Nunca zoom top-down linear reto (ARTE-43) — deriva + bearing sutil sempre.

**M04 · Mapa 3D "drone"** — a câmera passeia como drone ao redor de endereço/rua/cidade (Google-Earth-like);
**é o DEFAULT quando o relevo importa** (ARTE-43). Mesma base do M03 + **terreno DEM REAL obrigatório**
(MapTiler `terrain-rgb-v2` + `setTerrain`, `exaggeration` dinâmico — ARTE-31): satélite drapejado sem DEM é foto
plana inclinada = reprovado. Agente: `mapista`. Motor alternativo pra clipe solto em
`~/www/_arquivo/repos-2026-07/mapas-animados/engine` (mesma base MapTiler + câmera **flyTo van Wijk, órbita bearing-loop, Drone Oblíqua
rente ao chão**, labels travados, preview `?play=1`, render próprio → mp4 como clipe da timeline ou fundo de
cena). Upgrade futuro: `~/www/_arquivo/repos-2026-07/animacoes-com-google-maps` (Cesium + Google 3D Tiles; exige key GMP).
⚠️ Cena de mapa é WebGL: sem GPU o Chrome cai no renderizador de software e a captura pode começar ANTES de a geometria existir. **[porte Regie]** No Top10 isso se resolvia numa VM com GPU ligada à mão; aqui o render é no PC do dono. Sem GPU que o Chrome use, confira o quadro capturado antes de aprovar: a geometria pode não ter chegado.

**M05 · Reportagem/documento grifado** — matéria, estudo, relatório, lei: clipping LIMPO re-criado (logo real
do veículo via `pesquisa-logos` + manchete + data), **grifo progressivo na cor `var(--grifo)` da marca** (**[porte Regie]** exemplo: no Top10, amarelo #F4D03F) word-locked, tradução
PT-BR estilo JN/Fantástico. Template: `seed/examples/documento/documento-grifado.html`. Agente:
`pesquisa-documentos` — cobre imprensa E **fontes técnicas: ResearchGate, Google Scholar, PubMed, arXiv, SciELO,
IEEE Xplore, Nature/Science, DOI direto** (print de prova → clipping limpo com "Fonte: <journal>, <ano>").

**M06 · Citação de pessoa** — foto REAL (LinkedIn/site oficial/gov, verificada por visão, upscale 4K, nunca
rosto fake) + nome em caixa de acento + cargo + fala com trecho-chave grifado. Template:
`seed/examples/citacao/citacao-pessoa.html`. Agente: `pesquisa-pessoas`.

**M07 · Footage/imagem real full-bleed** — o assunto EXISTE em vídeo/foto real: mídia on-tema como herói
(coletânea que TROCA com a narração, dedup dHash; hotlink via Referer), scrim mínimo, texto essencial.
Fontes **[porte Regie]**: `node <motor>/src/ferramentas/buscar-midia.mjs` (PD/institucional e Pexels/Pixabay, que a [PESQ-126]
tirou do veto em 14/set — este parágrafo ainda dizia «vetados») e, se o dono assinar, stock pago. A biblioteca do bucket e a
caça no Mac eram do Top10. Ver `knowledge/FONTES-MIDIA.md`. Upscale 4K toda foto.

**M08 · Split comparativo** — tela dividida ESQ × DIR com divisor animado: vídeo×vídeo, antes×depois,
X×Y (Heathrow×Guarulhos, carro×avião). Cada lado com rótulo grande; o contraste É a mensagem. Template:
`seed/examples/split/split-comparativo.html`.

**M09 · Cartão de número-herói** — UM número que carrega a cena (200px+), contexto mínimo, DENTRO de cenário
(não flutuando no vazio). Template base: `usar_template("cartao")` + regras v5.

**M10 · Linha do tempo** — sequência temporal com EIXO DE DATAS obrigatório, marco "estamos aqui", varredura
animada. Template base: `usar_template("linha")` + cenário.

**M11 · Ranking de barras** — superlativo/comparação contra classe = top-N REAL (dados verificados), barras
DENTRO do cenário, a barra-herói esmaga as outras no word-lock.

**M12 · Montagem histórica** — lugar/época/evento/pessoa real: VÁRIAS fotos/gravuras DA ÉPOCA, upscale 4K,
Ken Burns alternado, nome/data âncora. Nunca foto moderna pra época antiga. **Fontes de época (chaves no .env,
todas testadas 05/jul):** Wikimedia Commons · **Europeana** (acervos europeus; 2.692 itens só "Rio 1900") ·
**NYPL Digital Collections** · **Smithsonian Open Access** · DVIDS (militar EUA). LoC/Gallica: acessar via
navegador headless (playwright), a API bloqueia curl.

**M16 · Mapa de ÉPOCA** — quando a narração fala de território/rota/fronteira NUM TEMPO PASSADO, usar
CARTOGRAFIA HISTÓRICA REAL da época (nunca mapa moderno anacrônico, nunca desenhar): caçar o mapa de época em
**Commons ("old map <lugar> <ano>", categorias "Old maps of …")** · Europeana · NYPL · David Rumsey/LoC (via
navegador headless). Upscale 4K (Real-ESRGAN) + tratamento v5 (Ken Burns lento, vinheta, rótulos-pill ancorados,
setas/rotas animadas POR CIMA do mapa antigo, word-lock). Se precisar sobrepor precisão moderna (rota exata),
desenhar o overlay sobre o mapa histórico georreferenciado à mão livre — a REFERÊNCIA visual é o documento real.

**M13 · Medidor cênico** 💡 — velocidade/pressão/temperatura como INSTRUMENTO desenhado dentro do cenário
(cockpit, painel), agulha tremendo, zona vermelha. Exemplar embrionário: take 2 da paladar (manômetro).

**M14 · Print social re-criado** 💡 — post/tweet/mensagem: re-criação LIMPA do print (avatar real, handle,
data), grifo progressivo na frase citada, moldura da plataforma. Mesma filosofia do M05 (nunca print cru).

**M15 · Pictograma estatístico** ✅ — proporção/contagem com ícones repetidos (1 ícone = N unidades),
preenchimento word-locked, "quantos de 100" visual.

**M17–M24 — as specs curtas de 05/jul. ⚠️ "o template nasce no primeiro uso" JÁ ACONTECEU:** em
05/ago/2026 cada um destes ganhou exemplar em `seed/examples/dourados/<Mxx>/`, promovido de cena
entregue/postada (16 dos 17 modelos que estavam sem régua). **Leia o exemplar antes da spec** — a
spec diz o que a cena É, o exemplar mostra a régua de execução. A única exceção é o **M19**, que
segue sem exemplar: o HTML da única cena que o usou não existe mais em disco, nem na entrega, nem
no backup. Quem desenhar o próximo M19 bom, promova-o.
- **M17 Escala** — o número abstrato vira comparação física (profundidade = N Everests empilhados, peso = N Maracanãs); desenhe os objetos-referência REAIS em silhueta, empilhando word-locked.
- **M18 Cronômetro** — tempo/prazo como relógio/cronômetro cênico varrendo (atraso de 30min, contagem p/ evento).
- **M19 Antes→Depois** — MESMO enquadramento com divisor deslizante (wipe) revelando a mudança (cidade 1900→hoje, antes/depois de desastre). Par de fotos reais alinhadas ou cenário desenhado 2-estados. **↓ spec longa abaixo — é o único modelo sem exemplar, e por isso a régua precisa estar escrita.**
- **M20 Zoom-de-detalhe** — foto/documento REAL + lupa/push-in progressivo até o DETALHE que prova a frase (assinatura, data, objeto no canto) com anel no alvo.
- **M21 Etapas** — processo em 3–5 passos DENTRO do cenário (não bullet): o objeto avança por estações word-locked.
- **M22 Anatomia** — corte/raio-X com camadas rotuladas acendendo uma a uma (motor, vulcão, corpo, edifício).
- **M23 Custo visual** — dinheiro/quantidade como pilhas proporcionais desenhadas (nota/moeda/contêiner 1=N).
- **M24 Pergunta-retórica** — pergunta GRANDE na tela (gancho de retenção) → pausa → revelação visual; usar nas viradas de bloco.
- **M25 Split de footage** — enumeração rápida word-locked: a tela divide em N faixas (2–4), cada uma com FOOTAGE REAL rodando e ZERO texto; cada painel ENTRA (wipe de baixo p/ cima) exatamente na sua palavra ("…incêndio | choque | dólares"). Divisórias finas pretas, grade unificado (contraste+dessat leve) p/ os clipes casarem, Ken Burns por painel, vinheta+grão. Contrato de render: gate `__fotosProntas` **false→true** (o `capturar.mjs` espera `!== false`), `video.currentTime=f(t)` (NUNCA `play()`), seek clampado na duração real. Footage do stock ASSINADO (`scripts/stock/baixar.mjs`, caça **no Mac**) ou da biblioteca premium do bucket — **[porte Regie: não veio — `stock/baixar.mjs`]**
**[porte Regie]** Pexels/Pixabay saíram do veto na [PESQ-126]; genérico sob afirmação específica segue proibido em qualquer fonte (`knowledge/FONTES-MIDIA.md`). Exemplar: `seed/examples/dourados/M25/triptico-incendio-choque-bilhoes.html` (resgatado do bucket em 22/jul).
- **M27 Colagem editorial em gravura** — o registro visual de uma revista impressa: **monocromia de UMA cor de tema + creme + preto de impressão**, recorte de mídia REAL com borda de papel rasgado entrando por fora do quadro, silhueta chapada como massa de base, serif display com **sombra dura deslocada** (sem blur — é o gesto tipográfico do modelo), ícone linear como pontuação, grão de papel e vinheta costurando tudo no mesmo plano. ⚠️ **A cor vem do TEMA da cena, não do modelo**: o verde-dólar do vídeo de referência era do assunto (dinheiro); economia pede verde, guerra pede outro, arqueologia outro. Trocar as três variáveis CSS (`--tema`, `--tema-medio`, `--papel`) reveste a cena inteira. **Três armadilhas medidas ao escrever o exemplar, e todas passam pelos gates sem serem vistas:** (1) silhueta com cabeça redonda sobre ombro curvo lê como **espuma**, não como gente — a proporção humana (cabeça ≈ 1/7,2 da figura), o pescoço existir, o ombro descer em diagonal e as fileiras se **ocluírem** é o que faz virar multidão; (2) recorte da cor do tema sobre fundo da cor do tema **some** — o recorte é papel, sempre; (3) sombra dura escura sobre fundo escuro vira borrão — sobre a cor do tema a sombra é **clara**. Origem: análise do canal *Resenha Rentável* (05/ago/2026), trazido pelo Mateus como estilo a incorporar. Exemplar: `seed/examples/dourados/M27/gravura-colagem-exemplar.html` — 4K nativo, determinismo provado (dois renders do mesmo `t` com md5 idêntico), silhueta por gerador congruente de **semente fixa** e grão por `feTurbulence` com `seed` fixo (nunca `Math.random()`).

**M26 (novo, 23/jul — sistema de orientação na tela, dono = `designer-de-navegacao`):**
- **M26 Card de navegação/progresso** — o overlay **sem-bg** "onde você está", pro espectador que entra no meio de um vídeo de 30 min. Mostra o **assunto atual** e o **próximo**, cada um com um **relógio**: um anel onde o arco **laranja ANDA de 0 até a posição atual** nos primeiros ~1,6s (o espectador *vê* avançar) — **SEM número percentual** (feedback do Mateus 23/jul: é a cor andando que comunica, não o dígito). O atual tem o arco laranja; o próximo fica com o anel vazio. O **rótulo é um título EXPLICATIVO** ("Como seria morrer em cada planeta do Sistema Solar"), nunca etiqueta vaga ("planetas"), em até 2 linhas. Navy + acento, discreto (público 35+, nada de piscar). **Você NÃO desenha o card à mão:** o `designer-de-navegacao` desenha o TEMPLATE (`templates-cena/navegacao/card-progresso.html`) uma vez (decisão de sistema, afeta todo vídeo), e o gerador `scripts/navegacao/gerar.mjs` lê o `_reaproveitamento.json` do `curador-de-acervo`, calcula a posição-alvo de cada assunto (`relogio(a,t)=0 | (t−ini)/(fim−ini) | 1`), injeta `window.__NAV` e registra na V4 (sem-bg) — **≥2 inserções por assunto**, nas viradas. Contrato de render normal (`__renderAt`/`__duracao`, palco 4K). O card de **título de tópico** (reaproveitado do acervo) usa o MESMO template do título do conteúdo novo — o espectador não sente a costura.

**M19 · Antes → Depois — a spec longa, porque este é o único modelo sem exemplar (07/ago/2026)**

Os outros modelos desta seção têm spec curta **de propósito**: o exemplar dourado é a régua, e prosa
duplicando HTML é doutrina que apodrece em paralelo. O M19 é a exceção declarada — o HTML da única
cena que o usou não existe mais em disco, nem na entrega, nem no backup. Enquanto não houver
exemplar, **esta é a régua**, e quem desenhar o próximo M19 bom promove-o para
`seed/examples/dourados/M19/` e encurta este texto de volta a uma linha.

**O que a cena É:** um lugar, um objeto ou uma cena, **no mesmo enquadramento**, em dois tempos — e
um divisor que desliza revelando um por baixo do outro. O assunto não é nenhuma das duas imagens: é
a DIFERENÇA entre elas, e é por isso que o enquadramento tem de ser o mesmo. Duas fotos parecidas do
mesmo lugar em ângulos diferentes não são um M19: são duas fotos, e o espectador gasta a cena
tentando descobrir o que mudou em vez de vendo o que mudou.

**Quando usar:** a fala compara explicitamente dois momentos do MESMO referente — "a cidade que hoje
aparece no noticiário entrou na história como…", "antes da represa, aqui era…", "em 1900 isso era um
campo". Se a fala compara duas COISAS (não dois tempos), o modelo é o M08 (split comparativo).

**A mecânica, e é onde ele quebra:**

1. **O alinhamento é o trabalho, não o wipe.** As duas imagens precisam casar em ponto de fuga,
   horizonte e escala antes de qualquer animação. Uma gravura de época quase nunca casa com uma foto
   moderna de primeira: escolhe-se o par pelo ALINHAMENTO possível, não pela beleza de cada peça.
   Se não houver par alinhável, o modelo está errado para aquela cena — troque, não force.
2. **O divisor entra no word-lock da palavra que vira o tempo** ("hoje", "antes", "em 1415"), e
   atravessa em um gesto contínuo. Nada de vai-e-volta: o olho lê a ida como informação e a volta
   como indecisão.
3. **Os dois estados ficam legíveis nas pontas.** A cena começa com o "antes" inteiro e termina com o
   "depois" inteiro, cada um com pelo menos um segundo sozinho. Wipe que começa em t=0 rouba a
   primeira imagem, e o espectador não tem contra o que comparar.
4. **A data-âncora fica fixa em cada lado**, pequena, no mesmo canto dos dois — é ela que diz que a
   cena é sobre tempo. Sem as duas datas, o wipe é só um efeito.

**Variante desenhada (cenário de 2 estados):** quando não há registro real dos dois tempos, o
cenário da narração é desenhado uma vez e re-vestido — mesma câmera, mesma luz, o que muda é o que a
fala diz que mudou. ⚠️ Isto NÃO autoriza fabricar registro: cenário desenhado é declaradamente
ilustração, e não pode ter cara de fotografia de época.

⚠️ **Não confundir com o M20 (zoom-de-detalhe).** O M20 tem uma imagem só e vai FUNDO nela; o M19
tem duas e vai de uma À OUTRA. Os dois usam push-in e por isso se parecem em movimento — mas o M20
prova um detalhe e o M19 prova uma mudança.

## APRESENTADOR em tela (regra de edição, não-modelo)
O apresentador aparece em **10–15% do vídeo (alvo 12%, máximo 15% — FIN-47), PICADO**: gancho de
abertura, viradas de bloco, punchlines/reações,
patrocínio e CTA. Cortes de 2–8s (máx 20s exceto patrocínio/CTA), 1 corte a cada ~60–120s, nunca 3+min sem o rosto.
O montador marca `modo:"apresentador"`; **`scripts/checar-plano.mjs <proj>` valida** (% em tela overlap-aware,
janelas longas, buracos, variedade de modos). Rodar SEMPRE após gerar/revisar um plano.

## Recursos transversais (qualquer modelo pode chamar)
- **Logos oficiais** → agente `pesquisa-logos` (órgão nacional, agência, empresa privada — logo REAL, alta
  resolução, contraste certo; regra 15: fundo escuro→logo branca, claro→azul/colorida).
- **Upscale 4K** → Real-ESRGAN local (`upscale-tools.mjs`). **Visão** → Claude (`confereImagem`).
- **Dados reais** → `cacador-de-dados` / agente `pesquisa-dados`. **Geo real** → `pesquisa-geo`/`pesquisa-geo`.
- **QA** → `scripts/shot.mjs` + `scripts/qc-carga.mjs` + 9 críticos + gates duros.

**M32 · Apresentador puro** — a tela é ele, e é isso. Sem arte, sem texto, sem overlay além do
branding: o corte mostra o bruto V1 e o que sustenta a cena é o que ele está dizendo e como.

**Por que este modelo existe (07/ago/2026):** por um ano ele não existiu, e a consequência foi
medida — **365 cenas de 1.393 usam `modo:"apresentador"`, o modo MAIS USADO de todos, e nenhuma
delas tinha modelo no catálogo.** O `qc-modo-regua` as contava como "sem modelo declarado" e a §6.6
do montador ("toda cena declara `modelo`") era impossível de cumprir para mais de um quarto da
produção. *Uma regra que uma classe inteira de cenas não pode obedecer não é rigor: é ruído que
ensina a ignorar o laudo.*

O raciocínio que faltava era simples: **não ter arte é uma decisão de arte.** A cena de respiro
existe, tem duração, tem função narrativa e concorre com as outras pela atenção — ela só não tem
HTML. Um modelo sem arte a desenhar continua sendo um modelo.

**Quando é o certo** (a régua vem da §6.9 do montador, pelo avesso): ele **reage**, ironiza,
respira, ou **vira de assunto**. Nesses quatro casos, texto na tela é ruído — o que o espectador
precisa é olhar para a pessoa.

**Quando NÃO é** — e aí o modelo é o [M28]: a fala TRADUZ, DEFINE, NOMEIA um termo, dá número, data
ou proporção, ou enumera de 2 a 4 itens curtos. Aí a tela pode mostrar enquanto ele diz, e deixá-la
vazia é desperdício.

**O que o M32 não é:** não é "cena sem plano". Ele carrega `anima:false` (o palco é o master),
`midia:"apresentador"` (não pede material nenhum à pesquisa — declarar `footage` aqui manda o
`pesquisa-imagens` caçar vídeo para 31 cenas em que a tela é o rosto dele, e isso aconteceu) e uma
`tese` que diz **o que aquele trecho faz na narrativa**, não o que se desenha.

**Régua:** o próprio master. Não há exemplar em `dourados/` porque não há HTML — o que se confere é
o enquadramento e o corte, e isso é o `qa-montagem`, não o `qc-visual`.

⚠️ **Cena de apresentador também tem piso de duração.** Abaixo de ~2 s não é respiro, é piscada:
funde com a vizinha ([ARTE-144]). E a soma de todas elas responde pela faixa de 10–15 % da
[FIN-47] — o M32 e o M28 contam juntos, porque nos dois ele está em tela.

**M28 · Apresentador + informação** — a explicação acontece **junto** com o apresentador, não em vez
dele. Ele cede espaço na tela e o texto (ou o elemento gráfico) ocupa o que sobrou.

**Pedido do Mateus (06/ago/2026):** *"nas cenas em que o apresentador aparece, ter elementos de textos
ou outros elementos de ilustração em tela, pra não ficar totalmente seco. Não que TODA vez que ele
aparecer tenha que ter isso, e sim quando faz sentido com o roteiro."*

### ⛔ A REGRA DURA — ele fica AO LADO da informação, NUNCA na frente

Isto não é preferência de estilo: é a lição de uma cena que foi feita, renderizada e descartada.

Em 04/ago o pedido era "texto ATRÁS do apresentador", como a Ferramenta de Mascaramento de Objeto do
Premiere. Foi executado com matting de verdade — segmentação quadro a quadro, ProRes 4444 com alfa —
e **tecnicamente funcionava**. Na leitura, não: o QC mediu que @5,5 s a tela dizia `= TERRAS` e
@8,25 s dizia `= TERRA`, porque o corpo dele cobria exatamente **BAIXAS**, a palavra que a cena
existia para mostrar. Efeito bonito, mensagem perdida.

Ele mesmo reviu: *"o vídeo do apresentador deve ser movido pra direita, pra que os textos estejam
acontecendo no lado esquerdo dele… o texto não deve ficar atrás do apresentador mesmo, não tem por
quê."*

*Corpo humano em movimento é máscara imprevisível: o que a palavra vai perder muda a cada quadro.*

### A técnica — por que funciona sem máscara nenhuma

**O estúdio tem fundo preto.** Medido no `ceuta` (06/ago), em 5 pontos ao longo de 25 min: a
luminância das bordas fica entre **4,5 e 6,1 de 255**, e o pico nunca passa de 11. Deslocar o vídeo
para um lado abre, do outro, uma faixa que **não é buraco** — é o mesmo preto do cenário.

```
#vid { object-fit: cover; }                    → o vídeo cobre o palco inteiro
vid.style.transform = `translateX(${dx}px)`    → e desliza
```

**A vinheta que acompanha o deslocamento** é a única peça técnica que a cena precisa. Não é correção
de cor (não há o que corrigir — 4,5/255 é 1,8%): é para dissolver a **linha reta** que a borda do
vídeo desenha ao entrar na tela. O olho pega linha reta mesmo com contraste quase zero.

```html
<linearGradient id="fadeL">  #000 opaco → #000 transparente  </linearGradient>
<rect id="vL" x="0" width="300" height="2160" fill="url(#fadeL)" opacity="0"/>
<rect id="vR" x="3540" width="300" height="2160" fill="url(#fadeR)" opacity="0"/>
```
```js
vL.setAttribute("opacity", 0.85 * (1 - v));    // acende o lado de onde ele SAIU
vR.setAttribute("opacity", 0.85 * v);
```

Largura 300 px, opacidade **máxima 0,85 — nunca 1,0**: em 100% vira barra chapada, e barra chapada
tem borda, que é a única coisa que o degradê existe para não ter.

⚠️ **A vinheta mora na CENA, nunca no master.** Queimada no V1 ela deslocaria junto com o vídeo, e a
faixa escura apareceria no meio da tela — o oposto do efeito. A cena sabe para que lado ele foi; o
master não.

### As quatro variantes — ponto de partida, não gaiola

O Mateus foi explícito: *"não quero limitar a criatividade do Fable 5"*. Estas são as arrumações
resolvidas, para que a invenção seja gasta no que a cena diz e não em redescobrir a mecânica.

| | arrumação | quando serve |
|---|---|---|
| **A · Cede o lado** | ele a um lado, texto ao outro; opcionalmente a "viagem de câmera" troca os lados no meio | explicação de duas partes (o nome **e** a tradução) |
| **B · Cerco** | ele ao centro em plano fechado, elementos orbitando nas margens | enumeração — 3, 4 itens que pertencem ao mesmo conjunto |
| **C · Recuo** | ele encolhe e sobe para um canto; a informação toma o palco | quando o dado é maior que quem o conta |
| **D · Chegada** | a informação entra de fora do quadro e ele reage a ela | revelação, contraste com o que acabou de ser dito |

**A viagem de câmera** (variante A, da `s07b`) é o que dá o beat: em vez de trocar de lado por corte,
ele *desliza* — *"como se tivesse movendo a nossa câmera"*. Ritmo medido que funcionou:

```
0    → 6,05s   ele à DIREITA   ·  texto à ESQUERDA
6,05 → 6,60s   a câmera viaja (550 ms)
6,60 → fim     ele à ESQUERDA  ·  texto à DIREITA
```

### Quando NÃO usar

- Quando a fala não explica nada — reação, respiro, virada de assunto. Texto ali é ruído.
- Quando o que precisa ser visto é registro real (lugar, pessoa, documento): a cena é do registro, e
  o apresentador não disputa espaço com ele.
- Em sequência. Duas ou três seguidas e o recurso vira maneirismo.

### Exemplar
`seed/examples/dourados/M28/paises-baixos-terras-baixas.html` — a cena da Holanda, com o cabeçalho
que conta a mudança de ideia inteira. Leia antes de desenhar.

**M33 · Apresentador + registro real** — ele em tela **ao lado do que está falando**: a foto ou o
vídeo do lugar, da pessoa, do objeto, do documento. O texto entra **só se somar** — não é obrigatório.

**Pedido direto do Mateus (15/ago/2026):** *"queria também que criasse um modo de cena onde houvesse
apresentador + foto/vídeo e info de texto — se necessário info de texto, não obrigatório."*
Este é o segundo modo a nascer pelo caminho que dispensa recorrência: **o dono pedir** (o primeiro
foi o M29).

### O que ele supera, e é preciso dizer em voz alta

O [M28] traz esta linha na lista de quando NÃO usá-lo:

> *"Quando o que precisa ser visto é registro real (lugar, pessoa, documento): a cena é do registro,
> e o apresentador não disputa espaço com ele."*

**O M33 abre exatamente essa porta** — e ela continua fechada para o M28. A diferença não é de grau,
é de composição: no M28 o apresentador cede espaço para TEXTO, que é leitura e exige o olho parado;
aqui ele divide a tela com IMAGEM, que se lê de relance. Duas coisas que competem pela leitura brigam;
uma que se lê e outra que se olha, não.

*Regra que fica de pé:* quando o registro é o ASSUNTO da cena — o documento que precisa ser lido, o
rosto que precisa ser reconhecido, o mapa que precisa ser percorrido —, ele merece a tela inteira e o
modo é o do registro (M03, M12, M31…). O M33 é para quando o registro **acompanha** a fala em vez de
ser ela.

### Quando usar

- A fala nomeia um lugar/pessoa/objeto concreto **de passagem**, e mostrá-lo enriquece sem virar o
  assunto: *"…como aconteceu em Fukushima"* — Fukushima aparece ao lado dele, ele segue falando.
- O trecho seria M32 (apresentador puro) e ficaria seco: há registro real disponível e a tela pede
  companhia.
- A explicação precisa do rosto dele conduzindo **e** de uma âncora visual concreta ao mesmo tempo.

### Quando NÃO usar

- **Sem registro REAL disponível.** Sem foto/vídeo verdadeiro isto não é M33 — é M28 (com texto) ou
  M32 (puro). Nunca se preenche o lado com ilustração genérica: o modo existe para trazer o mundo
  para junto dele, e mídia decorativa não traz nada.
- Em sequência. Duas ou três seguidas e o recurso vira maneirismo — a mesma régua do M28.
- Quando a mídia exige leitura demorada (documento com texto miúdo, gráfico com eixos). Isso é M13 ou
  M07, com a tela toda.

### A técnica — a mesma do M28, e pelo mesmo motivo

O estúdio tem **fundo preto** (luminância de borda medida entre 4,5 e 6,1 de 255 no `ceuta`).
Deslocar o vídeo do apresentador para um lado abre, do outro, uma faixa que **não é buraco** — é o
mesmo preto do cenário. A mídia entra nessa faixa.

```
#vid { object-fit: cover; }                    → o vídeo cobre o palco inteiro
vid.style.transform = `translateX(${dx}px)`    → e desliza para abrir o lado
```

⛔ **A mídia NUNCA passa por trás dele** — é a lição que o M28 pagou com uma cena renderizada e
descartada: o corpo em movimento é máscara imprevisível, e o que ele cobre muda a cada quadro. Ao
lado, sempre.

⚠️ **O texto, quando existe, é o terceiro elemento — e é o primeiro a sair.** Se a composição ficar
apertada, tira-se o texto, não a mídia: quem tem o texto e não tem a imagem já é o M28.

### O que ele NÃO muda: a cota

**O M33 conta na faixa de 10–15% da [FIN-47], junto com o M28 e o M32** — nos três ele está em tela,
e a régua é tempo de apresentador, não quantidade de companhia. *Este modo existe para que o tempo
que ele JÁ tem renda mais, nunca para comprar tempo a mais.* Um espelho que use M33 para esticar a
presença dele reprova no `qc-tempo-apresentador` igual, e deve reprovar mesmo.

### Contrato

`modelo: "M33"` · `modo: "apresentador-midia"` (derivado) · `anima: true` (há HTML: a mídia e o
texto são desenhados sobre o palco) · `midia`: `"foto"` ou `"footage"`, **nunca vazio** ·
`needs.midia` com o termo de busca — sem ele a pesquisa não caça e a cena nasce com o lado vazio.

## Como o catálogo CRESCE — a proposta de modo (07/ago/2026)

**A pergunta que definiu o desenho** (Mateus): *"essa proposta de modo vai ser aprovada
automaticamente sempre? Quem vai aprovar? Quem vai ser o gate?"*

**Resposta: a CENA nunca espera; o CATÁLOGO espera prova; quem promove é o dono.**

Quando o montador não encontra modelo que sirva, ele escreve `modelo: "proposta"` +
`proposta_de_modo` com **quatro campos obrigatórios**: nome-candidato · quando-usar · o desenho ·
**por que nenhum dos existentes serve** (o quarto campo existe para matar a preguiça de não
consultar o catálogo — descrever em prosa o que já tem template foi medido 21× em 22 projetos).

1. **A cena segue imediatamente.** A proposta é o brief dela: diretor-de-arte a trata como conceito
   livre, a arte executa, o QC julga. Nada trava — *"aprovação não deve ser um gate que trave o
   fluxo"* (decisão de 29/jul).
2. **Gate de forma, determinístico** (`qc-contrato`, na validação do espelho): proposta sem os 4
   campos reprova ali mesmo.
3. **Prova de vida + recorrência, derivadas do estado real**: a promoção só entra em pauta quando a
   cena executada passou no QC **e** o mesmo desenho apareceu em **2+ projetos** (padrão de 1 uso é
   cena única, não modo — régua medida: o placar de votação tinha 5 usos em prosa, o mosaico 3,
   antes de virarem M30/M29). A fila é **derivada por script** dos espelhos — nunca um arquivo
   mantido à mão, que apodrece.
4. **A promoção é AUTOMÁTICA quando os três gates passam** (decisão do Mateus, 07/ago/2026:
   *"colocar o gate em mim não é o ideal — se a cena foi aprovada e chegou ao estágio final é porque
   ela foi boa, logo pode virar catálogo sem problemas"*). O editor-chefe escreve a entrada +
   exemplar no ato em que o script de recorrência acusa "pronta", e o Mateus é **avisado** — não
   consultado. O veto dele é a posteriori e também é fluxo: modelo removido vai para o arquivo
   morto com o motivo, nunca some. A aprovação que o vídeo já recebeu no fluxo não se repete na
   porta do catálogo.

**modo × modelo — o que fica (contrato v2):** o campo que o montador ESCREVE é `modelo` (o código `Mxx` da tabela acima,
obrigatório). `modo` — a família (dados, mapa, desenho…) — vira **derivado** da coluna "modo" desta
tabela; ninguém mais o escreve à mão. Foi assim que 20 cenas acabaram com `modo:"M03"` e 2 com
`"hibrido"`: dois campos escritos para a mesma decisão divergem, é questão de tempo.

⚠️ **Acúmulo é defeito, nas duas direções:** o `doctor` acusa proposta parada sem triagem (vira
ruído) e modelo oficial sem uso em N projetos (candidato a sair — o catálogo também emagrece).

**M29 · Mosaico de territórios** — N painéis simultâneos (3 a 6), cada um com **registro real do
lugar + nome + cor própria**. O conjunto se lê como conjunto e cada célula continua identificável.

**Pedido direto do Mateus** (07/ago/2026), lembrando do vídeo de Nova York: *"tinha uma cena que eu
tinha pedido que mostrava os 5 bairros/distritos de Nova York em tela dividida em 5 lados, cada uma
com foto do bairro + texto com nome e cor do bairro embaixo do nome — esse seria um exemplo a seguir
em tornar um modo real."* Este é o único caminho de promoção que dispensa recorrência: **o dono
pedir**. Os outros dois (M30, M31) vieram do uso medido.

Serve quando a fala apresenta um CONJUNTO de lugares **como conjunto** — os 5 distritos, as 3
regiões, os 4 países do bloco. Não serve para comparar dois (isso é M08, split) nem para localizar um
(M03).

⚠️ **Cada painel exige registro REAL do lugar**, não ilustração — é o que separa este modelo de uma
grade de cartões coloridos. A cor por painel é identidade, e ela **persiste**: se o vídeo voltar a
falar do Brooklyn depois, o Brooklyn continua sendo aquela cor. Cor que muda entre cenas ensina o
espectador a não confiar nela.
⚠️ O nome vai **no painel**, não numa legenda de canto: legenda obriga o olho a ir e voltar.

**M30 · Placar de votação** — dois totais em barras que crescem lado a lado até o resultado final; a
**diferença** ganha destaque quando é apertada; data e fonte do resultado sempre na tela.

**Promovido por recorrência medida** (07/ago/2026): 8 cenas em **5 projetos publicados** —
`new-york` (referendo do Brooklyn de 1894, 277 votos de diferença; emancipação de Staten Island 1993),
`simpsons-copa`, `avioes-pequenos`, `eua-china-tucidides`, `ira-lider`. Cada um reinventou o mesmo
desenho do zero.

O beat é a **diferença**, não os totais: votação apertada é o formato dramático, e o número que o
espectador lembra é a margem. Barras que crescem juntas até parar; a margem aparece por último.

⚠️ Placar é dado com fonte — **data, órgão e resultado oficial obrigatórios** ([PESQ-*]). Nunca
arredondar votos: 64.744 × 64.467 é a história; "cerca de 65 mil cada" não é.

**M31 · Galeria de pessoas** — sequência de retratos REAIS com nome e vínculo, cada um entrando na
palavra que o nomeia (word-lock); ancorados num mapa ou numa linha quando a origem importa.

**Promovido por recorrência medida** (07/ago/2026): 4 cenas em 4 projetos, 3 publicados — `new-york`
(Jordan, Tyson, Jay-Z, Biggie com o Brooklyn marcando cada origem), `lugar-mais-frio`,
`terras-raras-rs`, `lago-peigneur`.

Diferente do **M06 (citação)**, que é UMA pessoa com o que ela disse; aqui são VÁRIAS e o que
importa é o conjunto — a lista de quem veio daquele lugar, quem assinou aquilo, quem morreu naquilo.

⚠️ Rosto real via `pesquisa-pessoas`, verificado por visão. **Nunca fabricar rosto**, nunca usar
"pessoa genérica" no lugar de quem não foi encontrado — quem não tem foto real sai da galeria, e a
galeria encolhe.

