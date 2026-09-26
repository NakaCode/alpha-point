> **[porte Regie]** Origem: `top10-estudio/seed/regras/ARTE.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Este domínio veio INTEIRO (ARTE): lei é citada por ID e o agente precisa achá-la. Onde a lei manda usar VM, bucket, Mac, cascata ou Reuters, vale o princípio, não o comando. `seed/regras/SIS.md` e `seed/regras/REND.md` vieram FILTRADAS (o que é só infra do Top10 está listado por ID no apêndice de cada uma). Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador. E-mails de conta e caminhos pessoais do Top10 viraram `<e-mail>` e `<usuário>`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# ARTE — execução de cena

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**ARTE-01.** ⛔ **REVOGADA** (superada pela ARTE-16 em 02/jul/2026, e de novo pela ARTE-36 em 11/jul — mantida só
   como histórico; NÃO aplicar). A regra era "fundo real em ~95% das cenas, nunca só gradiente". HOJE vale a
   ARTE-16 (cena constrói o CENÁRIO da narração — desenhado, vívido, com profundidade — OU usa mídia real
   genuinamente ON-TEMA; footage genérico/off-tema é PROIBIDO) somada à ARTE-36, que REVOGOU o "gradiente de
   profundidade como fallback basta": o fundo de explicação/dado é MÍDIA REAL + scrim, nunca navy chapado.
   Precedência: dentro do MESMO domínio, o ID de NN MAIOR (mais novo) sempre vence.

**ARTE-02.** SEM TÍTULO/SUBTÍTULO SUPERIOR POR PADRÃO (regra FORTE, enfática do Mateus). A NARRAÇÃO já dá o contexto;
   o DESENHO + os rótulos PRESOS a ele já explicam. NÃO ponha bloco de orientação superior (kicker+título+
   subtítulo) — título superior desnecessário SÓ CONFUNDE. Só inclua um título se for ESTRITAMENTE necessário
   pra não confundir (raro). Mantenha apenas os rótulos que acompanham o desenho (ex.: H/L num mapa, "+8°C"
   na massa quente, nome de uma região). Fonte: só quando há dado atribuível, DISCRETA no rodapé (padrão único).

**ARTE-03.** CLAREZA EM 2s = LEI. Se a cena ficou CONFUSA ("não entendi nada"), está ERRADA — refaça. Explique o
   MECANISMO REAL conforme o roteiro (ex.: são as ÁGUAS do oceano esquentando — deixe claríssimo o quê
   esquenta e por quê). Diagramas (corte transversal, etapas) precisam de rótulos claros + progressão óbvia.

**ARTE-04.** REALISMO na representação: vento = fluxo/correntes de vento de verdade (linhas que sopram), não abstração;
   oceano = imagem real de água; calor = escala térmica sobre o real. Cenas só-desenho (cisalhamento) devem
   explicar SÓ com desenho claro, sem depender de texto.

**ARTE-05.** SÉRIE TEMPORAL precisa de EIXO DE DATAS/tempo ("onde estamos?"). Marque o presente e o projetado.

**ARTE-06.** USE O QUADRO: nada de gráfico pequeno com espaço vazio gigante. Ocupe bem, equilibrado; elementos no
   tamanho certo (grande quando é o herói).

**ARTE-07.** CONTINUIDADE = UM BLOCO, UM CENÁRIO (lei do Mateus). Uma explicação grande/complexa tem que acontecer
   DENTRO DO MESMO cenário, num bloco contínuo — pra descomplexar ao máximo. NÃO corte pra outro cenário/
   metáfora no meio da MESMA explicação (confunde: "falou de uma temperatura e já mete outra do nada?").
   Pra aprofundar SEM cortar, use recursos no mesmo palco: ZOOM/PUSH-IN, FOCO num elemento (escurece o
   entorno), PAN, destaque, recolorir, revelar números no próprio lugar. Erro canônico corrigido: corte
   transversal do oceano (água a 50-250m) + cena SEPARADA de termômetros pra dizer a temperatura da MESMA
   água → virou UM bloco (push-in na faixa revela a temperatura ali mesmo). O agente de continuidade
   (agente aposentado; hoje a fusão de run é decidida no conceito-visual) roda após o roteirista e FUNDE cenas consecutivas que são a mesma
   entidade/dado/processo fragmentado. Ao construir um bloco com `_fundido`, faça TODA a explicação nele.

**ARTE-08.** TEXTO BEM GRANDE PRA TV (lei FORTE do Mateus, 20/jun — vale p/ TODAS as cenas, é o que ele MAIS odeia): o vídeo é
   visto em TV de LONGE; texto pequeno = ILEGÍVEL = REPROVADO. Eleve MUITO o tamanho (alvo do Mateus: ~5× o que parece
   "normal"). Referências num palco 1920×1080 (ESCALA ÚNICA do canal) — ALVOS (mire alto): NÚMERO-herói gigante (200px+);
   TÍTULO ≥ ~150px (EMPILHE em 2 linhas quando a palavra é longa, pra caber ENORME sem estourar a borda); rótulo/apoio
   ≥ ~70px; eixo/legenda ≥ ~44px; crédito/legenda de rodapé ≥ ~40px. PISO que o painel/gate REPROVA abaixo: herói/título
   130px; rótulo 52px; eixo/legenda 36px; crédito 36px. Regra de ouro: MENOS palavras, MUITO MAIORES. Na dúvida, aumente.
   (literal ×5 não cabe em palavra longa → empilhe/encurte, nunca deixe pequeno nem deixe estourar.)

**ARTE-09.** LOGO POR CONTRASTE (regra fixa, erro real 25/jun): fundo ESCURO → logo BRANCA; fundo CLARO → logo AZUL.
   NUNCA o contrário (some/suja a marca). A marca "Top" fica no canto superior DIREITO — manter SEMPRE livre de
   texto/gráfico (kicker chegou a ficar atrás da logo). No render escolher branca|azul pela cor do fundo.

**ARTE-10.** PESSOA CITADA = NOME EM TELA, SEMPRE (lei do Mateus, 25/jun). Toda pessoa citada/mostrada ganha o NOME
   animado (Neue Haas) em caixa de fundo AZUL FORTE junto ao corpo + SUBTÍTULO só da FUNÇÃO (ex.: "Químico
   nuclear", "Física") — SEM anos de vida (confundem com tempo de cargo). Pessoa icônica citada (ex.: Einstein)
   → inserir a FOTO dela. Rotular sempre a pessoa CERTA que aparece na imagem.

**ARTE-11.** ASSOCIAÇÃO POSICIONAL (factual, reprova na hora — erro real 25/jun "1986 na arma"): todo RÓTULO/DATA/NÚMERO/
   nome tem de estar grudado no ELEMENTO CERTO que descreve. Ex.: "1986/Chernobyl" no REATOR (jamais na bomba);
   nome sobre a pessoa certa; a COR do rótulo = cor do ramo/elemento a que pertence. O espectador lê a POSIÇÃO,
   não a intenção. (Reforçado no crítico `factual`.)

**ARTE-12.** FONTE QUE REALMENTE SE APLICA + PISO (reforço da 13, erro real 25/jun — textos microscópicos): nenhum texto
   pode cair no default ~16px. Causa recorrente: `font-size` num seletor CSS que NÃO casa com o markup
   (ex.: `#bal .line1` enquanto o HTML usa `.row`; `#quest` sem regra) → vira 16px. CONFERIR que o font-size
   pega no elemento. Piso (ESCALA ÚNICA do canal, ver ARTE-08): eixo/legenda ≥36px, rótulo/leitura ≥52px,
   herói/título ≥130px. Vale p/ TODO texto, inclusive caption de card pequeno (o card do Einstein saiu a 21px).

**ARTE-13.** FUNDO ÚNICO POR CENA — NUNCA repetir footage/imagem (erro real 25/jun: o MESMO cc0 em 5+ gráficos, "vídeo
   repetindo 50x"). Cada cena tem fundo TEMÁTICO próprio. O caçador faz dedup por vídeo (footage-tools: evitar/
   chave + Set no orquestrador) e o REVISOR FINAL REPROVA fundo repetido entre cenas.
   ⚰️ **O `scripts/qa-final.mjs` citado aqui NÃO EXISTE MAIS** (conferido em 07/ago/2026 pelo `doctor`,
   lente `caminho-morto`). Ele era da era-2, lia artefato que o pipeline não produz mais, e sete
   documentos o descreviam sem ninguém o chamar. **A LEI continua valendo** — fundo repetido é
   defeito —, o que morreu foi o runner. Quem cobra hoje é `qc-clipe-repetido.mjs` ([ARTE-108]).
   *Lei viva com runner morto é lei que ninguém aplica: o nome do executor é parte da regra.*

**ARTE-14.** COLISÃO DE TEXTO É VETO, NÃO NOTA (gate duro não-diluível — erro real 26/jun: cesio entregue com 7 textos
   sobrepostos). A colisão é MEDIDA por bbox (não é opinião): se há texto-sobre-texto em qualquer frame, a cena
   NÃO sai, ainda que os outros 9 críticos deem nota alta — a média NÃO perdoa um defeito determinístico (era o
   bug: 9×nota8 + colisão0 = média 7,2 ≥ 7 → entregava colidido). Pra texto MUITO denso num canto (ranking,
   ficha), a regra de layout: máx ~3 textos simultâneos, separação ≥70px, OU escalonar no tempo; e PAINEL não
   invade a área do GRÁFICO (empurre o eixo/curvas pra longe da coluna de números). RANKING/lista: cada item na
   SUA linha (erro real: 2 barras no mesmo `top` → rótulos um sobre o outro). [criticos.mjs gatesDuros + qa-final exit 1]

**ARTE-15.** WORD-LOCK PELO TIMESTAMP REAL DA FALA (erro real 26/jun: rbmk e mortalidade — a tela mostrava o conceito
   ~20s ANTES da narração, ordem quase invertida). Cada elemento entra no tempo EXATO da palavra que o ancora:
   leia os timestamps de words.json (tempo de cena = word.start − inSec) e cole a entrada/contagem de número na
   fala. NÃO chute a ordem pela tese — siga a NARRAÇÃO. Se a janela da cena é curta demais p/ cobrir tudo que a
   tese promete (a fala dos pontos finais cai DEPOIS do fim do clipe), ESTENDA a duração e realinhe a cena seguinte
   (rbmk: 25,81s→42,3s p/ cobrir até "padrão no Ocidente"). Número conta quando a voz diz o número, não antes.

**ARTE-16.** CENÁRIO VÍVIDO INTEGRADO + PROFUNDIDADE UNIVERSAL (lei do Mateus, 02/jul — cena paladar/avião):
   • Cena "desenho" NÃO é gráfico solto sobre fundo escuro chapado: CONSTRUA O CENÁRIO da narração (avião com
     janelinhas e passageiros voando, mar embaixo, cabine clara por dentro) e componha o dado DENTRO dele. Fundo
     mais VÍVIDO (céu azul vivo, luz do dia) quando o tema permite — não só navy escuro.
   • TODO fundo/preenchimento SÓLIDO (fill chapado, cenário desenhado) leva PROFUNDIDADE (gradiente + vinheta suave) — **e sólido quer dizer sólido: nunca sobre footage ou foto real, ver [ARTE-72]**. "Fundo azul sólido sem
     profundidade" = reprovado. Regra universal.
   • Elemento ilustrativo "fora da caixinha" no lugar de gráfico-slide: badges circulares com ícone+texto DENTRO,
     ondas/emanações, objetos reconhecíveis do cotidiano. TESTE A LEITURA do ícone (fatia de cítrico solta pareceu
     RODA DE LEME — suco = copo com canudo + gomo na borda). Barras genéricas não explicam; o desenho do MECANISMO explica.
   • SEM ECO reforçado: kicker/texto que repete a narração é CORTADO (a narração já diz; seja visual).

**ARTE-17.** DIVIDIR A CENA EM TAKES (lei do Mateus, 02/jul): cena longa = SEQUÊNCIA EDITADA de planos do MESMO cenário
   (wide → close no detalhe → close no efeito), com cortes (cross-dissolve ~0.3s) e push-in de câmera DENTRO de
   cada take. Nada de um plano fixo de 50s. + MOVIMENTO CONTÍNUO: nenhum elemento entra e congela (agulha treme,
   barra respira, ícone gira, nuvem deriva). + GUARD-RAIL: máx ~3 blocos-de-info simultâneos; cada bloco se
   APOSENTA antes do próximo (verificador: scripts/qc-carga.mjs --max=3; roda junto com scripts/shot.mjs).

**ARTE-18.** DOCUMENTÁRIO DE 4 PILARES (lei do Mateus, 03/jul — ver knowledge/MIDIA-REAL.md): o NORTE de todo vídeo é uma
   produção nível BBC News Brasil / History / Fantástico, misturando 4 PILARES conforme a narração pede — cada um
   SÓ onde é certo: (1) MOTIONS DESENHADOS (SVG — conceito/mecanismo/metáfora; ficou MARAVILHOSO em NY/tomada,
   manter); (2) MÍDIA REAL — footage 4K + fotos: lugar (aéreo/drone SÓ quando o assunto é a cidade/bairros, NÃO
   obrigatório; muitas vezes o certo é TAKE FECHADO de rua/gente/cotidiano), pessoa, evento, e HISTÓRICO (MÁXIMO de
   fotos de museu/arquivo — regra Colombo, nunca uma só); (3) MAPAS ANIMADOS — TODO assunto de LUGAR/geografia/rota/
   fronteira TEM mapa animado (base satélite HD real, câmera em movimento, bandeiras dos países; nunca à mão — PESQ-01);
   (4) INFOGRÁFICOS — gráfico/número SÓ quando a info EXIGE comparação/dado (não forçar). Inserir footage de 2 formas: (A) EMBUTIDO na cena (<video>+seek em __renderAt);
   (B) STANDALONE (clipe puro + texto por cima). Curadoria+download (o Claude baixa): Shutterstock (⚠️SÓ ilimitado,
   zero compra), Storyblocks, Envato, Motion Array + Google Imagens + ARQUIVOS/MUSEUS (LoC,NYPL,Europeana,NARA,
   Commons). Reuters = PONTOS → só shortlist + LINK pro Mateus. BANDEIRAS: país/estado citado em geo/geopolítica =
   BANDEIRA REAL em SVG (Commons), nunca à mão. 4K sempre. Agentes: [pesquisa-imagens] (footage/foto) e [pesquisa-logos] (bandeira/logo oficial); o montador marca `midia`+termos no espelho.

**ARTE-19.** INFO NO TEMPO EXATO — sem adiantar nem atrasar (lei do Mateus, 03/jul): cada informação entra na tela
   EXATAMENTE quando a narração a fala. NUNCA antecipar um beat que só será dito adiante (o espectador lê algo que
   ainda não ouviu), nem atrasar (mostrar depois que já passou). Word-lock não é só QUAL texto aparece — é QUANDO.
   Erro real (NY): "2ª maior cidade" e "The Bronx is burning" apareciam num gráfico ANTES da narração, repetindo
   no gráfico seguinte. Ao posicionar um elemento, cheque o segundo exato da fala-âncora no words.json.

**ARTE-20.** NÃO DUPLICAR BEAT ENTRE 2 GRÁFICOS — respeitar _mergedInto (lei do Mateus, 03/jul): se o plano marca uma cena
   `_mergedInto` outra, aquele beat mora numa cena SÓ — NÃO gerar a filha separada quando a mãe já cobre (senão
   dois gráficos "falam a mesma coisa" com timestamps sobrepostos). Antes de despachar geração, rodar
   scripts/cenas-reais.mjs <proj> (lista as reais, esconde as fundidas). A cena que FICA é a que está no tempo
   certo da narração (ARTE-19); a outra sai (drop ou trim). Vale no despacho E no QA de entrega.

**ARTE-21.** NÃO ROTULAR DETALHE IMPLÍCITO / DE PASSAGEM — só o PONTO, narrado com peso, UM TEXTO POR VEZ (lei do Mateus, 05/jul):
   se a narração cita algo DE PASSAGEM ou ÓBVIO/IMPLÍCITO (ex.: "cravado no leito rochoso de xisto que sustenta os
   arranha-céus" — o xisto é contexto, não o ponto), NÃO criar pill/rótulo separado pra isso — deixa a IMAGEM
   comunicar. Rotular SÓ a informação que MUDA a compreensão do espectador e é dita com peso (aqui: o COFRE, as
   toneladas de ouro, os países donos). E cada texto tem que ter TEMPO de ser lido/absorvido com CALMA (mín ~1.8s
   na tela, um de cada vez — NUNCA "piscar" nem empilhar 2 textos novos no mesmo instante). Menos é mais: se não
   muda a vida do espectador e não está na fala com peso, corta. Erro real (NY, federal-reserve-ouro): pill "xisto
   de Manhattan" piscava @6s — removida. Vale pra TODO agente de cena (mapista, infografico-animado, Diretor).

**ARTE-22.** NÃO DUPLICAR A NARRAÇÃO COMO TEXTO NA TELA (lei do Mateus, 05/jul — ENFÁTICA): se a narração JÁ diz aquilo, NÃO
   escrever a mesma coisa na tela — o espectador está OUVINDO, não quer LER o que já ouve; ele quer VER a imagem/o
   sujeito. Texto na tela = SÓ o que AGREGA além da fala (número-herói, nome próprio, rótulo-âncora curto/kicker).
   Paráfrase ou complemento da narração = CORTAR. Erros reais (ligar): "rumo ao sul…" (mapa3d-yaviza) e "olhar de
   perto…" (footage-darien-floresta) — removidos. Vale pra TODO agente de cena.

**ARTE-23.** NÃO REPETIR INFO JÁ ABSORVIDA (lei do Mateus, 05/jul): se a narração NÃO está voltando num dado, NÃO repetir esse
   dado na tela de novo (ex.: "30.000 km" pela enésima vez — o espectador já entendeu). Cada cena entrega o que é NOVO
   naquele beat; repetir vira "muita informação ao mesmo tempo" e afoga a essência. Erro real: dados-106km-proporcao.

**ARTE-24.** SELO "TOP 10 · CATEGORIA" NÃO É MARCA D'ÁGUA — só no CARD FINAL DA INTRO (lei do Mateus, 05/jul): eu tinha
   posto o selo "TOP 10 · GEOFÍSICA" no topo de TODA cena (escrevi isso em cada prompt de subagent, e o Fable passou
   a replicar "o padrão das cenas irmãs" → 14 HTMLs contaminados: 7 escudo, 3 aviões, 2 tomada, 2 NY). ERRADO. O selo
   de categoria aparece UMA ÚNICA VEZ no vídeo inteiro: no CARD FINAL DA INTRODUÇÃO — o beat que revela o tema ("No
   vídeo de hoje, você vai entender…", ~32s no escudo). REGRAS:
   • TODA cena de conteúdo (mapa/desenho/dados/footage/composite/documento) fica SEM marca de categoria fixa — topo e
     cantos livres. NÃO é marca d'água de canto.
   • Nos meus prompts de subagent (Diretor/Fable): NUNCA pedir "selo TOP 10 · X no topo". Corrigido no prompts.mjs do
     Diretor (regra explícita antes das LEIS INVIOLÁVEIS) — se o Fable vê o selo em cena irmã, IGNORA (resíduo, não padrão).
   • Cenas já feitas com selo: neutralizar com `#selo{display:none!important}` injetado (não regenerar — custo). Logo do
     canal no canto (quando pedida) é OUTRA coisa, não confundir. Auditar aviões/tomada/NY antes de re-render/entrega.

**ARTE-25.** ⛔ **SUPERADA NO OBJETO pela [ARTE-139] em 06/ago/2026 — mantida só como HISTÓRICO; NÃO aplicar.**
   Hoje o apresentador fica **AO LADO** da informação, **sem máscara nenhuma** (modelos M28/M32). A prescrição
   abaixo — mattar o apresentador e pô-lo RECORTADO NA FRENTE da animação — morreu, e com ela a lista de "três
   arranjos permitidos" do último parágrafo, que hoje **exclui por engano o arranjo vigente**. Auditado em
   08/ago/2026: nenhuma das quatro ferramentas de matting do repositório tem chamador em `scripts/`, `src/` ou
   nos agentes, e `apresentador-composite` **não consta do enum de `modo`** em `contratos/espelho.schema.json:65`
   — não existe modo vivo que esta lei governe. Em 06/ago o Mateus encerrou o teste: *"vamos deixar ele num fundo
   preto como já está mesmo"*.
   **O que sobrevive, e é a razão de a lei NÃO ter sido apagada:** (a) o registro de que o molde dividido já foi
   aposentado uma vez — apagá-lo deixa o molde voltar por engano; (b) o inventário das quatro ferramentas de
   matting com a armadilha de cada uma (o CLI `rembg i` quebra por falta de `asyncer`; `colorkey`/`lumakey` comem
   o apresentador inteiro) — que é a primeira tarefa se o cenário digital voltar; (c) a rota fal.ai como caminho
   **PAGO deliberadamente não tomado**. A [ARTE-28], citada ao lado, continua **INTACTA e válida**.
   ⚠️ **Conserto pendente FORA deste arquivo:** `marcas/top10/agentes/executor-de-molde.md:12` ainda mapeia o
   molde `apresentador` para "ARTE-25/ARTE-28" — tem de apontar para **M32/M28 + [ARTE-139]/[ARTE-28]**. Enquanto
   não apontar, o executor cai nestas linhas mortas sem nenhum aviso.
   **O texto original, preservado como histórico:**
   COMPOSITE DO APRESENTADOR = RECORTADO (matting) NA FRENTE DA ANIMAÇÃO — fundo dele = o azul da cena (lei do Mateus,
   05/jul, validada à vista): nas cenas "apresentador-composite" (o apresentador vem na METADE DIREITA do master pré-editado,
   sobre fundo preto de estúdio), NÃO fazer painel lateral (ilustração à esquerda + apresentador à direita com feather). O certo:
   a **animação ocupa a TELA TODA** e o **apresentador entra RECORTADO (silhueta com alpha) NA FRENTE dela** — o fundo imediato
   dele passa a ser o próprio azul/animação da cena, não o preto do estúdio.
   • MATTING: `rembg` (u2net) via **API Python** (`from rembg import remove` — o CLI `rembg i` quebra por falta de `asyncer`).
     Recorte limpo (cabeça/óculos/barba/dedos), e o **logo "Top" da equipe some junto** (está no fundo). `colorkey`/`lumakey`
     do ffmpeg NÃO servem (comem o apresentador inteiro).
   • Pipeline: `scripts/matting-apresentador.py <apresentador.mp4> <out.webm> [fps=30]` → extrai frames, rembg cada, remonta
     **WebM VP9 com alpha** (`yuva420p`), que o Chrome/render (capturar.mjs) TOCA e SEEKA (validado end-to-end). O `<video src=
     apresentador-alpha.webm>` no HTML: position:absolute à direita, seek `currentTime=f(t)` pulado em `__PREVIEW` (PESQ-12),
     `__fotosProntas` em loadeddata/error. SEM feather/scrim (o recorte já é limpo; o logo já sumiu).
   • Crops crus (apresentador.mp4, metade direita) via `scripts/recortar-apresentador.mjs`; matting depois. O source às vezes
     CORTA o apresentador no meio (vira ilustração da equipe) ou tem legenda embutida/teleprompter — tratar (take-2, cobrir).
   • ROTA fal.ai (matting SOTA + DEBLUR, quando o apresentador está desfocado — medido 05/jul, validado à vista no geodínamo):
     `scripts/matting-apresentador-fal.mjs <apresentador.mp4>` → devolve apresentador **deblurrado + recortado com alpha** como
     PNG-seq RGBA + `apresentador-alpha.webm` (VP9-alpha, ~20MB) em `<cena>/apresentador-alpha/`.
     - ALPHA: `fal-ai/birefnet/video` com `output_mask:true, model:"Portrait"` → devolve `mask_video` (matte cinza, mp4 comum =
       portável). [O teste que deu `mask_video:null` era SEM `output_mask:true`.] Alternativa: `fal-ai/ben/v2/video` com
       `output_format:"webm"` devolve VP9-alpha direto (o mp4 default vem sobre PRETO, sem alpha).
     - DEBLUR: `fal-ai/codeformer` **fidelity=0.8 (ALTA→preserva identidade), seed FIXO** (estável no tempo, sem flicker; corpo
       passa direto, rosto restaura). NAFNet REJEITADO (plastifica/aluciniza). ~$0.002/frame (barato, mas 17 clips = milhares de
       frames → medir). Aplica ANTES do matte (a máscara é silhueta, não sofre).
     - MITO CORRIGIDO: este ffmpeg (Mac) **ENCODA WebM VP9-alpha SIM** (`-c:v libvpx-vp9 -pix_fmt yuva420p`). O ffprobe mostra
       `pix_fmt=yuv420p` no stream PRIMÁRIO mas o alpha vive num stream VP9 secundário (`TAG:alpha_mode=1`) e SOBREVIVE
       encode→decode→Chrome (provado com `scripts/shot.mjs`: apresentador limpo sobre a navy da cena). A nota "cai pra yuv420p"
       do CLAUDE.md era leitura incompleta do ffprobe. PNG-seq RGBA continua sendo o fallback de alpha 100% garantido.
       ⚠️ **ESTE "MITO CORRIGIDO" FOI ELE PRÓPRIO REFUTADO POR MEDIÇÃO POSTERIOR (06/ago/2026)** —
       `knowledge/cenario/REFERENCIAS-3-CANAIS.md:99`: o `libvpx-vp9` **aceitava a flag `-pix_fmt yuva420p`,
       encodava e saía 0 — descartando o alpha**; o arquivo vinha `yuv420p` e, ao compor sobre um fundo, aparecia
       o preto do estúdio com **halo branco** (a máscara desenhada como imagem). O formato de alpha desta casa é
       **ProRes 4444** (`render-alpha.sh`). Corrijo em voz alta: a afirmação acima era verdadeira para o caminho
       fal.ai medido em 05/jul e FALSA para o `matting-rvm.py` medido em 06/ago — não generalize a linha de cima.
     - Push-in do `<video>`: `transform-origin:100% 0` (TOP-right) + scale 1.215 empurra a legenda lower-third embutida da equipe
       (dentro da silhueta) pra FORA do frame. Origin bottom-right NÃO funciona (ancora o rodapé → legenda fica).
     - ⚠️ 05/jul: **DEBLUR REMOVIDO** (Mateus). Matting = SÓ remoção de fundo (rápido: birefnet/video = 1 chamada/clip). O
       deblur codeformer frame-a-frame estourava o tempo (17 clips = 6.483 chamadas). Desligado no script. Apresentador fica
       levemente desfocado (aceito em troca de velocidade). E o **molde dividido (apresentador em painel + footage) está
       APOSENTADO**: ou apresentador RECORTADO na frente, ou cena limpa 100% tela cheia, ou apresentador tela cheia no bruto.

**ARTE-26.** ILUSTRAÇÃO COM IMAGEM/VÍDEO = FOOTAGE PURO, ZERO SOMBRA (lei do Mateus, 05/jul — universal): quando a ilustração
   de uma cena é **imagem ou vídeo** (footage, foto real, arquivo), usar o footage PURO — **0 SOMBRAS nas bordas**
   (nada de `box-shadow`/`filter:drop-shadow`/vinheta-moldura/borda-com-sombra no `<video>`/`<img>` nem no container).
   Nada de "card flutuante". A mídia preenche a TELA CHEIA (full-bleed 3840×2160, `object-fit:cover`, 100vw×100vh),
   logo do canal no canto superior direito, qualidade máxima (captura PNG lossless — anti-banding). Vale SÓ pra
   ilustração que É imagem/vídeo; cards de DADOS/infográfico/documento podem manter profundidade/sombra. Auditar:
   `grep -iE 'box-shadow|drop-shadow' <html>` num elemento de mídia = vazio.

**ARTE-27.** TEXTO PROGRESSIVO + TEMPO HÁBIL DE LEITURA, NUNCA POLUIR NEM CORTAR CEDO (lei do Mateus, 05/jul — reforça 4/13/20/21):
   • **Progressivo:** o texto ENTRA conforme a narração avança (word-lock pela fala, ARTE-15) — nunca despejar tudo de uma
     vez. Cada bloco surge no seu beat.
   • **Sem poluir:** só o texto NECESSÁRIO/narrado na tela; minimalismo. Preferir explicar com ANIMAÇÃO/desenho a encher
     de texto (carga visual dentro dos tetos, cada um se aposenta antes do próximo).
   • **TEMPO HÁBIL DE LEITURA (o novo, crítico):** todo bloco de texto fica na tela tempo suficiente pra o espectador LER
     e ABSORVER (regra prática: um bloco visível ≥ ~1,5-2s, proporcional ao nº de palavras). **PROIBIDO** um texto/elemento
     que pisca e some, ou que ENTRA a <1s do fim da cena (o corte engole antes de dar pra ler). **Nenhuma animação pode
     COMEÇAR já com um elemento faltando / a ~1s de acabar** — se a cena mostra algo importante, dá o tempo de leitura
     ANTES do corte. Se acontecer, a culpa é MINHA (timing/inSec/dur mal casados) → corrigir na raiz (dur da cena, ordem
     dos beats, ou estender o último bloco até o corte).
   • **Criatividade alinhada ao roteiro (repetir):** o exemplar que o Mateus ELOGIOU = `seed/examples/dourados/_sequencias-criativas/hubble-satelites-panico-online.html`
     (animação de CHOQUE + title card seguindo o Hubble + clippings de jornais SUBINDO). Repetir esse tipo de sequência
     criativa e narrativa nos demais vídeos — SEM exacerbar em texto. Auditoria: cada bloco de texto tem janela de leitura
     adequada (não entra e sai em <1,5s; não nasce a <1s do corte).

**ARTE-28.** OVERLAY "GLASS" SOBRE O VÍDEO DO APRESENTADOR = TRANSLÚCIDO, NÃO SÓLIDO (lei do Mateus, 08/jul — origem:
   templates de overlay do compilado-01; ele: "ao invés de 100% sólido azul, menos opacidade, pra mostrar o
   vídeo do fundo ainda"):
   • Painel/placa que fica SOBRE o vídeo do apresentador não pode tapá-lo: opacidade do glass ~.55-.62 (não
     .93-.97), deixando o footage por trás respirar.
   • Legibilidade se mantém com SCRIM de leitura sutil SÓ atrás do texto (gradiente local, não a placa inteira)
     + text-shadow denso (contorno curto opaco + halo) — funciona sobre qualquer fundo, inclusive branco.
   • `backdrop-filter: blur` é NO-OP no nosso pipeline: overlays são capturados com fundo transparente
     (omitBackground) e compostos sobre o vídeo só no Premiere — o vídeo nunca está no DOM na captura, não há
     backdrop pra borrar. Nunca conte com ele; use scrim + text-shadow.

**ARTE-29.** CARD DE TÍTULO DE TÓPICO = CAPA COM MÍDIA REAL DE FUNDO, NÍTIDA E SEM SOMBRA (lei do Mateus, 08/jul —
   origem: cards do compilado-01; ele: "ir atrás dos vídeos/fotos pra ilustrar o fundo de cada tópico… não
   quero sombras nas bordas… imagem bem nítida, não escura, sem [reduzir] opacidade"):
   • O card de título de cada tópico NÃO é um lower-third de texto sobre o apresentador — é uma CAPA que cobre
     a tela por ~3,5s com MÍDIA REAL do tema (footage 4K ou foto de arquivo alta-res), acionando pesquisa-imagens.
   • Footage puro: mídia full-bleed (object-fit cover), NÍTIDA e clara, SEM sombra/vinheta nas bordas e SEM
     filtro que escureça ou reduza a opacidade DA IMAGEM. Logo no canto superior direito.
   • O número+nome ficam num painel TRANSLÚCIDO lateral (ARTE-28), sem tapar a tela toda.
   • Nada congela: FOTO leva Ken Burns/push-in lento; VÍDEO seeka currentTime=f(t) no __renderAt (respeitando
     window.__PREVIEW), nunca play() solto.
   • ASSUNTO HISTÓRICO (compilado de curiosidades de história): a mídia é ARTE/FOTO HISTÓRICA AUTÊNTICA da época
     — pintura, gravura, ilustração de época, mapa antigo, foto de arquivo (Wikimedia/domínio público, Arquivo
     Nacional, Biblioteca Nacional, museus). NUNCA footage stock genérico de reconstituição/CGI: "footage
     genérico num assunto real decepciona o espectador logo de cara" (feedback Mateus 08/jul, compilado-01 — o
     footage viking de stock foi REJEITADO; a foto de arquivo da FEB foi aprovada). Regra tipo-Colombo: histórico
     rende PD farto em Arquivo Nacional/Commons; upscale não-generativo (Real-ESRGAN) quando a fonte for pequena.

**ARTE-30.** DESTAQUE EM TEXTO DE LEITURA = PESO (NEGRITO), NÃO COR; E NADA DE LETTER-SPACING NEGATIVO (lei do Mateus,
   08/jul — origem: citação bedmachine-morlighem, lugar-mais-profundo). Ele: "Ao invés de colocar cores
   diferentes nos trechos, poderíamos dar destaque com negrito… o texto em si não-negrito e as partes
   destacadas em negrito. Não gosto desses textos com letras muito próximas, quero mais espaçado."
   • Em fala/citação/parágrafo, NÃO pinte trechos de âmbar/cor pra destacar (colorir a cada N palavras POLUI e
     cansa). Corpo em **600** (⚠️ EMENDADO — dizia "peso normal (400–500)" até 11/ago/2026), trechos-chave em
     NEGRITO (800), MESMA cor. Contraste = PESO, não cor.
     ⚠️ **O NÚMERO desta lei foi revogado pela [ARTE-148]** (08/ago), que criou o PISO 600 para qualquer texto
     visível; o PRINCÍPIO (destaque é peso, não cor) segue de pé — é isso que o Mateus disse aqui. Lei nova vence
     no mesmo domínio, mas ninguém tinha voltado para emendar o número, e o `editor-de-arte.md` §7 copiava o
     400–500 daqui: quem obedecia era reprovado pelo `qc-tipografia`. Medido: 10 de 47 cenas do
     `quasares-primordiais` (11/ago) e 35 de 71 do `o-acre`. *Lei emendada sem emenda escrita no texto velho
     continua ensinando o erro pelo portador mais lido.*
   • PROIBIDO letter-spacing NEGATIVO em texto de leitura (aperta as letras). Use 0 ou levíssimo positivo (~+.006em).
     Negativo só cabe, com parcimônia, em display gigante de 1–2 palavras (título/número-herói).
   • Legenda/cargo de citação usa o NOME EXATO E COMPLETO da instituição ("Dartmouth College", não "Dartmouth") —
     reforça a regra de nome-próprio-na-tela: verificar e escrever por extenso o correto.
   • Bug do til (lei da fonte): NEGRITO em CAIXA-ALTA acentuada usa 900/Helvetica Neue (weight 600–749 quebra Ã/Õ).
     Peso 500 (corpo) e 800 (destaque) estão FORA da faixa defeituosa — combo seguro pra citação minúscula.

**ARTE-31.** MAPA3D "DRONE" = TERRENO 3D REAL (DEM), NÃO SÓ CÂMERA INCLINADA SOBRE SATÉLITE PLANO (lei do Mateus, 08/jul —
   origem: fechamento-canyon, epílogo de Denman). Ele: "achei GENIAL o jogo de câmera… PORÉM a base de mapa não
   está em 3D (com níveis das montanhas e tudo o mais)."
   • "Câmera 3D" (pitch/bearing) ≠ "terreno 3D". Satélite (ESRI/MapTiler) DRAPEJADO SEM DEM é uma foto plana
     inclinada — sem relevo. mapa3d/drone exige um `raster-dem` com `setTerrain` pra as montanhas/vales LEREM.
   • DEM sancionado: MapTiler terrain-rgb-v2 (a key faz TILES; só a Static API dá 403) ou AWS Terrarium (global,
     inclui Antártida). Satélite real drapejado POR CIMA do DEM (nunca terreno cinza sem textura).
   • EXAGGERATION é ferramenta de leitura, pode ser DINÂMICO: superfícies lisas (gelo/geleira) precisam de exagero
     alto (~5–8×) no beat de destaque pra o relevo aparecer; ache o valor que mostra montanha sem virar caricatura.
   • Batimetria global (GEBCO) tem degrau-de-tile duro no oceano — em plano largo de mar, desligue o terreno
     (`setTerrain(null)`) numa transição escondida (ex.: pico de escuridão) em vez de exibir o artefato.
   • `__prepararCaptura`/`__aguardarMapa` DEVE esperar a fonte `dem` carregar (incluir no `areTilesLoaded`) antes de
     liberar o frame — senão o render 4K pega relevo pela metade. Teste o teto de zoom onde o DEM tem cobertura.

**ARTE-32.** MEMBRO DE PERSONAGEM NÃO INVADE A ÁREA DO OVERLAY PERSISTENTE (lockup/QR) — SENÃO É FATIADO (publi Manual, 08/jul
   — origem: hook-cartoon, a mão do estalo cortada pela borda do lockup vertical; o Mateus teve que apontar 2×).
   O SVG da cena pinta ABAIXO do `<div>` do lockup/QR (canto inf-dir); qualquer extremidade ANIMADA do personagem
   (mão, braço, pé) que alcança a faixa do painel é cortada pela borda dele — e z-index não eleva SÓ o membro sem
   arrastar a cena inteira (sofá/planta cobririam o QR).
   • Regra prática: mantenha extremidades animadas na SAFE AREA à esquerda do lockup (na publi, x < ~1490 na tela p/
     lockup em right:36 width:330). MEÇA NO ÁPICE do gesto (não num frame solto) — o membro se estende mais no pico.
   • Alternativa autorizada: se o membro PRECISA sobrepor, promova SÓ ele a overlay com z-index ACIMA do lockup (resto
     da cena segue abaixo). O Mateus topa "mão por cima da logo" — o que ele NÃO topa é mão CORTADA.
   • Trocar lockup horizontal→vertical AUMENTA o painel (mais alto/largo) → re-cheque colisões de membro/texto que
     antes passavam raspando.

**ARTE-33.** NÃO CENTRALIZE DUAS VEZES: `margin-left:-metade` + `translate(-50%)` = elemento deslocado META-largura (publi
   Manual, 08/jul — origem: cta-final, QR desalinhado dos textos acima dele). Bloco que usa o helper
   `place()`/`translate(-50%)` NÃO deve TAMBÉM carregar um `margin-left` de centragem — centre por UM mecanismo só.
   Sintoma diagnóstico: se o elemento sai torto por EXATAMENTE metade da própria largura, procure a dupla-centragem.

**ARTE-34.** CARD DE TÍTULO DE TÓPICO SEMPRE ILUSTRA O TEMA COM VÍDEO/IMAGEM REAL — NUNCA FUNDO ABSTRATO (navy +
   partículas de luz). (lei do Mateus, 10/jul — origem: gerei os 5 títulos do ponto-nemo com o template
   navy-abstrato do gerar-cards-titulo.mjs; ele: "NUNCA mais... cards de título de tópico com cor navy de fundo,
   SEMPRE tem que ter vídeos (ou imagens) pra ilustrar esses tópicos").
   - O título de tópico é uma CENA DE ARTE do editor-de-arte, nao um template. Cada card e a MELHOR representacao
     visual do tema daquele tópico — footage(s) real(is) do assunto (pode montar 2+ numa animacao, pensar fora da
     caixinha), foto/arquivo quando nao ha video. O footage e o protagonista; numero+titulo por cima.
   - O gerar-cards-titulo.mjs vira só POSICIONADOR: extrai os títulos do roteiro do Drive + casa nos gaps de música
     do words.json em _cards-titulo.json (inSec/dur). NAO gera mais o HTML abstrato. A ARTE vai pro editor-de-arte,
     que veste com o footage/foto do tópico — o _media do próprio vídeo quase sempre já tem o material.
   - Paleta = a do projeto (navy+quentes por padrao; VERMELHO ou outra tematica quando o assunto "grita" a cor,
     ver _paleta-*.json). REVOGA a doutrina "fundo ABSTRATO, nunca ícone literal de tema" (gerar-cards-titulo.mjs
     + TITULOS-TOPICOS.md) — era exatamente o oposto do que o Mateus quer.

**ARTE-35.** A LEI-MÃE DA EDIÇÃO DINÂMICA — MONTAR NA VOZ, NÃO ILUSTRAR POR CIMA (destilada do eua-china que o Mateus elogiou,
   11/jul; catálogo completo + RIG + exemplares em `knowledge/dourados/README.md`). O que ele chamou de "movimentação
   de dinâmica edição + narração casou muito bem" são DUAS coisas, e são o coração de tudo:
   • **Cada beat travado numa PALAVRA** (word-lock): o elemento nasce/muda no timestamp exato em que a fala diz aquilo.
     Todo HTML abre com um bloco `Word-lock (−inSec): 0.9 história 5.01 medo…`. Entrada progressiva na palavra + os
     blocos anteriores PERSISTEM (`eb(seg(t,tw,0.62))`), grifo âmbar na palavra-pivô, count-up cravado na fala do número.
   • **Re-coreografar os MESMOS objetos** conforme a narração reinterpreta o assunto — um só conjunto de elementos
     conta a cena inteira mudando de papel (dourado máximo: `dados-16-casos-12-guerra` = 16 células nascem neutras →
     12 pintam vermelho → 4 acendem mármore → grid recua e sobe "75%" → as MESMAS células viram vórtice → choque).
   • RIG compartilhado (easing seg/eo/eb/win + `#cam` push-in+deriva senoidal + motor de takes de footage seek-f(t) +
     kit de acabamento scrim/vig/grain/véu-de-corte) em `knowledge/dourados/README.md` — REUSAR, não reinventar a base.
   • É VOCABULÁRIO, NÃO TEMPLATE: as travas são fixas, a METÁFORA visual de cada cena é invenção livre do Fable (o
     Mateus quer o Fable criativo). Editor-de-arte lê o dourados/README ANTES de criar. Nada estático (ARTE-16/ARTE-17).

**ARTE-36.** FUNDO = MÍDIA REAL + SCRIM, NUNCA NAVY CHAPADO (lei do Mateus, 11/jul — "nunca mais explicações com fundos neutros
   azul navy sólido; quero mais DINÂMICO, infográfico com imagem/vídeo no fundo + gradiente atrás do gráfico"):
   • TODA cena de explicação/dado/infográfico/conceito lidera com FOOTAGE ou IMAGEM REAL de fundo ilustrando o tema
     (o _media do próprio vídeo já tem farto). O gráfico/texto entra POR CIMA, com scrim/gradiente SÓ atrás dele
     (radial/banda) pra leitura — o footage fica VISÍVEL nas bordas/respiros e em movimento (Ken Burns). Modelo:
     `dados-china-ascensao`, `dados-saida-economia`, `dados-chips-ia` (dourados).
   • Navy sólido chapado como fundo inteiro = PROIBIDO (é o "slide genérico retrógrado" que o Mateus reprovou no
     ponto-nemo: `cronologia-mergulho-final`, `compromissos-diplomaticos`). Se a cena for navy (raro, sem footage
     possível), ele tem que estar VIVO: `#cam` com push-in + starfield paraláctico + embers + glow que respira
     (como `dados-16-casos`/`gancho-12-de-16`), nunca um retângulo estático. REVOGA a antiga "gradiente de
     profundidade como fallback basta". Footage on-tema (ARTE-23), full-bleed sem sombra (ARTE-26).

**ARTE-37.** FILTRO DE TEXTO — TEXTO É DADO OU DESTILAÇÃO, NUNCA A FRASE DA NARRAÇÃO (lei do Mateus, 11/jul — "nosso público
   não é burro, não precisa ter texto em tela sempre em palavras que não são infos relevantes; falta esse filtro"):
   • **GANHA tela:** número-herói/count-up (`12 EM 16`, `75%`, `US$584bi`) · nome próprio + cargo (`TUCÍDIDES ·
     historiador grego`) · lugar/entidade (`ESTREITO DE TAIWAN`, chip de bandeira) · data/período (`1991`,
     `2.500 ANOS`) · a TESE destilada em 2–4 palavras (`O MEDO`, `NÃO TERMINOU.`) · citação verbatim (modo M06 + grifo).
   • **NÃO ganha tela:** artigo/preposição/verbo/conectivo/frase copiada da narração · a palavra exata que o narrador
     diz naquele instante quando não é dado (ANTI-ECO — cabeçalho do HTML confirma `anti-eco ✓`) · legenda do que a
     imagem já mostra (vê barco + ouve "barco" = cortar). Anti-padrão: `abertura-barco-pacifico` revela "UM/BARCO/NO".
   • TESTE: apague a palavra da tela; se voz+imagem já entregam, corte. Complementa a ARTE-27 (tempo de leitura ≥1,5s).

**ARTE-38.** INSET DE PROVA REAL — footage REAL num canto de uma cena DESENHADA dá "peso absurdo" (lei do Mateus, 11/jul — ele
   AMOU no ponto-nemo: "entrou o vídeo da reentrada no canto inferior esquerdo, de um vídeo da NASA, ficou PERFEITO!!!!
   deu um peso absurdo pra explicação... quero ilustrações com dados REAIS"):
   • Numa cena conceitual/desenhada (diagrama, mecanismo, mapa, física), quando existe footage/foto REAL do fenômeno
     que se explica, abrir um INSET (picture-in-picture) num canto com esse registro real — o desenho explica o
     mecanismo, o vídeo real PROVA que aconteceu. Exemplar: `seed/examples/dourados/M02/fisica-reentrada.html` (diagrama da
     reentrada em camadas + `#inset` 760×418 no canto inf-esquerdo com `<video>` real da reentrada, word-locked).
   • É a PESQ-17/ARTE-36 numa FORMA de composição: mesmo quando o desenho é o certo pro conceito, cabe o real como
     EVIDÊNCIA por cima/no canto. Fontes: NASA/ESA/USGS/arquivo (o que a pesquisa já baixou). Inset entra word-locked
     (na hora que a narração menciona o fenômeno), com moldura sutil e o mesmo contrato de vídeo (seek f(t), sem play()).
   • Generaliza pra "quero ilustrações com dados REAIS": sempre que houver registro real do que se afirma, ACHAR um
     jeito de mostrá-lo (inset, fundo, split) — o real ancora e dá autoridade. Não deixar a explicação 100% abstrata
     quando existe prova visual disponível.

**ARTE-39.** A METÁFORA VISUAL É INVENÇÃO DO FABLE, NÃO DO ESPELHO — a divisão de trabalho que evita cenas tímidas (lei-raiz,
   destilada de 11/jul quando o Mateus notou "váaaarias cenas ficaram bem tímidas" e perguntou quem decide o arco da
   animação e o que o criador do HTML recebe). A CAUSA-RAIZ da regressão criativa foi de PROCESSO, não de talento do
   Fable: o montador (Opus) escrevia a tese JÁ ENCENADA — "pessoas em CAIXAS rotuladas GAY/HÉTERO", "balança com dois
   pesos", "chave que gira 180°" — e o Fable, recebendo a cena mastigada, virava mero EXECUTOR. Sem nada pra inventar,
   a cena sai LITERAL (o substantivo da fala vira um card, 3 bullets aparecem) — tímida. O eua-china/ponto-nemo (que
   o Mateus AMOU) tinham 29 anima-ops/cena e footage tecido no diagrama; os tímidos, 5–10 e canvas puro sobre navy.
   • **O MONTADOR entrega SEMENTE, não encenação:** conceito (a ideia) + dado (o fato/número, ou needs) + emoção-alvo
     + UMA semente de metáfora ≤6 palavras ("rótulo que aprisiona", "duas curvas que se cruzam"). É PROIBIDO blocar a
     cena (descrever objetos/atos/rótulos/re-coreografia) — isso mata o trabalho do Fable. (.claude/agents/montador.md)
   • **O FABLE PENSA a metáfora:** seu primeiro trabalho é achar o que a semente VIRA na tela — "não desenhe o
     substantivo da fala, ache o que ele VIRA" (identidade→rótulo que tranca; comércio→correntes trançadas cortadas por
     um raio; R$ 2 bi→curva que cruza e dispara). Do abstrato ao concreto físico que se MOVE. (editor-de-arte.md)
   • **RESERVAR 3–5 SHOWPIECES por vídeo** com densidade de dourado (metáfora + câmera coreografada + RIG completo +
     camadas que se recompõem na voz); o resto sustenta. Uma fileira de cenas todas no mesmo nível morno = o sintoma nº1.
   • **Teça footage real DENTRO da cena construída** (reforça 61/64): conceito/dado não é canvas puro sobre navy — o
     dourado costurava vídeo on-tema como fundo/inset do próprio diagrama. Se a pesquisa baixou o tema, ele entra.
   • Regra geral de PROCESSO: quem decide O QUE e ONDE (o arco) é o montador; quem decide COMO aquilo vira imagem (a
     metáfora, a coreografia, o RIG) é o Fable. Espelho que "desenha" e Fable que "só copia" = a regressão a evitar.

**ARTE-40.** MOTION DESIGN NÍVEL KURZGESAGT — TRANSIÇÕES CONTÍNUAS, LINHA DE BASE ALTA (lei do Mateus, 11/jul: "a meta no
   quesito animação desenho é ser um Kurzgesagt — movimentações de câmera, trocas de cena que acontecem sem parecer
   que houve troca; as cenas se integram, a câmera vai se movendo e os elementos se reconstruindo virando a próxima
   explicação... exceto alguns hard cuts deliberados nas viradas"). VOCABULÁRIO oficial: as "animações desenho" =
   **motion design** (modo `desenho` / M02 "Desenho explicativo"); estilo Kurzgesagt = flat design/vetorial;
   técnica de transição = **transição contínua (seamless)** / **plano-sequência (oner)** / **morphing** dos elementos
   / **match cut** (corte disfarçado) / **hard cut** (corte seco deliberado, só nas viradas de ato).
   • **LINHA DE BASE, não exceção:** toda cena de motion design (desenho) nasce nível Kurzgesagt — câmera viva,
     elementos que se remontam, transição contínua. "Sóbrio/estático" é LÍCITO só pro tecido conectivo REAL (corte no
     apresentador, cartão de número simples), NUNCA pra uma explicação de desenho. O showpiece (3–5, ARTE-39) é o PICO
     acima dessa base — não é que o resto pode ser morno. Muitas animações desenho BEM PRODUZIDAS ao longo do vídeo
     é a meta, não o luxo.
   • **O Kurzgesagt constrói o vídeo como UM canvas espacial** e a câmera VIAJA por ele: cada cena é um lugar; a
     transição é a câmera indo de um lugar a outro com os elementos se transformando. Hard cut = exceção (viradas).
   • **Como fazer na nossa arquitetura (1 HTML/cena → MP4 → Premiere):**
     (a) **Continuidade de fronteira** (sem mexer no pipeline): a cena N TERMINA numa pose de câmera/composição e a
         N+1 COMEÇA exatamente nessa pose e segue — o corte no Premiere fica invisível (último frame de N ≈ primeiro
         de N+1). Disciplina de projeto: pose-de-entrega(N) = pose-de-entrada(N+1). O diretor-de-arte planeja os
         hand-offs (campo `fluxo` no conceito-visual: quais cenas são um RUN contínuo e onde caem os hard cuts).
     (b) **Sequência/plano-sequência** (a técnica plena): UM HTML cobre um RUN de 3–4 falas com uma viagem de câmera
         contínua e elementos que se remontam (15–25s), word-locked por dentro. Mexe no mapeamento espelho→XML (uma
         cena com janela longa cobrindo vários beats) — o diretor-de-arte propõe o agrupamento; validar timeline-xml.
   • RIG da transição: um `#mundo` que translada/escala (a "câmera" = transform do container-pai) enquanto os
     elementos-filhos entram/saem/morfam por t; o beat da próxima explicação já está no palco, fora do quadro, e a
     câmera chega nele. Nunca fade-preto entre beats de um mesmo run (isso é slide, anti-padrão).

**ARTE-41.** CRÉDITO DE FOOTAGE SÓ QUANDO A LICENÇA EXIGE + CORTES DE INTRO CINEMATOGRÁFICOS (Mateus, 11/jul, eua-china):
   • **Crédito na tela** ("Vídeo: CCTV via Reuters" etc.) SÓ quando a licença marca exigência EXPLÍCITA
     (mandatory credit nas restrições/metadata — a Reuters especifica na descrição do item quando obriga).
     Sem exigência = SEM crédito na tela (polui). Reuters/CCTV padrão ("For Reuters customers only", sem
     mandatory credit) = sem crédito. A lei antiga ("crédito: só dado atribuível ou licença que exige") já
     valia — esta EXPLICITA o caso footage de agência, onde o crédito vinha sendo posto por hábito.
   • **Cortes de footage na INTRO** (e em geral): cortes rápidos e aleatórios = amador ("coisa de amador" —
     Mateus). Plano de footage ≥3,5s; corte MOTIVADO pelo beat da fala (nunca no meio de uma cartela de
     legenda); UMA linguagem de transição por peça (corte seco no beat OU micro-dissolve, não misturar);
     cenas ADJACENTES não podem repetir take/conteúdo (o gancho repetia handshake+Xi do cold-open =
     duplicação amadora). White-flash/corte INTERNO embutido na fonte (pacotes CCTV têm) NUNCA pode vazar
     pra dentro de um take nosso — mapear spans limpos por frames antes de cravar a janela de seek.
     Preferir 1 take longo levemente desacelerado (seek f(t)×0.85–0.9) a 2 cortes.

**ARTE-42.** ABSTRAÇÃO É DESENHO NATIVO, NÃO FOOTAGE — SEMENTE LIBERTA, SPEC ENGESSA (experimento controlado, 13/jul —
   mecânica orbital). PROVA POR EVIDÊNCIA: quando o MONTADOR classificou uma abstração (mecânica orbital) como
   `modo:footage` + `midia_termos:["solar system orbits NASA visualization"]`, ENGESSOU o Fable — que obedeceu e
   colou um JPG feio da NASA (marca "NASA/JPL-Caltech") em vez de desenhar arte nativa. A MESMA cena com input
   LIVRE ("desenhe um diagrama vívido no brand") virou um diagrama de sistema solar lindo, navy+âmbar, estilo
   Kurzgesagt — e rodando em effort MENOR. O gargalo era o INPUT (a sobre-especificação do montador), não o effort
   nem o Fable. As 4 frentes:
   • **(1) Abstração = desenho nativo, NUNCA footage/screenshot.** Conceito abstrato (órbita, trajetória, mecânica,
     dados, diagrama, esquema, fluxo) o montador classifica como modo de DESENHO — jamais `footage` — e a pesquisa
     NUNCA busca "visualização/screenshot" disso. O editor-de-arte DESENHA (SVG/canvas na paleta do canal). Colar
     o JPG da NASA foi o erro canônico do que NÃO fazer.
   • **(2) Mídia-real (ARTE-36) só pra SUJEITO REAL** fotografável de verdade — LUGAR (cidade, observatório), PESSOA,
     EVENTO, OBJETO. NÃO vale pra abstração/conceito: isso é desenho. É a fronteira que decide footage×desenho.
   • **(3) Semente, não spec (reforça 65):** o montador entrega SEMENTE (tese + o que a cena precisa comunicar +
     o modo em nível alto), com latitude criativa pro Fable — NÃO crava `midia_termos` que amarram. `midia_termos`
     numa cena de desenho É o próprio engessamento.
   • **(4) Complexidade proporcional à duração + showpiece contínuo:** cena curta (~4s) = UMA ideia clara; o detalhe
     rico vai nos beats longos. Quando um conceito se desenvolve por vários beats (ex.: arco de mecânica orbital por
     ~40s), o montador marca como UM SHOWPIECE CONTÍNUO que se CONSTRÓI ao longo da narração (ARTE-40) — não pica em
     cortes desconexos.

**ARTE-43.** MAPA "ZOOM NO LUGAR" = MOTOR 3D COM BEARING-LOOP POR DEFAULT — O TOP-DOWN LINEAR ESTÁ PROIBIDO COMO
   ESTILO (o Mateus, 20/jul: "os últimos mapas ficaram HO-RRÍ-VEIS, parece que você tá no Google Maps dando
   zoom com o mouse... a gente tinha um padrão com bearing loop e tudo mais que SE PERDEU, resgate isso").
   O s01b do terras e afins usaram maplibre 2D pitch=0 bearing=0 com zoom easing = scroll de Google Maps.
   O PADRÃO DA CASA (M04, já documentado no mapista.md e IGNORADO): motor `~/www/_arquivo/repos-2026-07/mapas-animados/engine` —
   flyTo van Wijk + ÓRBITA bearing-loop contínua + drone-oblíqua + TERRENO DEM real (ARTE-31). REGRA: pedido de
   "mapa do lugar / estilo GEOlayers / zoom em cidade-endereço-sítio" ⇒ M04 3D com pitch 55–70°, bearing em
   rotação lenta contínua e chegada em órbita — NUNCA reta top-down. O 2D (M03) fica pra contexto continental
   rápido/dados sobre mapa, e mesmo assim com deriva/bearing sutil, jamais zoom linear puro. Feedback conserta
   o agente-raiz: default do mapista endurecido.

**ARTE-44.** ASSET DOCUMENTADO ≠ ASSET PRODUZIDO — GATE `src`-EXISTE ANTES DO RENDER (20/jul, achado do editor na
   revisão do avioes-pequenos). Classe de bug silenciosa e recorrente: o editor ESCREVE no HTML um `<img>`/
   `<video src>` apontando pra um asset que o comentário do cabeçalho DOCUMENTA ("_assets/marilia-memorial.jpg",
   "s68-paginas/pg9.png", "s67-paginas/nsca-pg18.png") mas NUNCA roda o passo que o produz (ffmpeg/pdftoppm) — o
   elemento falha em silêncio, a cena vai pro render 4K com FUNDO PRETO e o log diz "sucesso". O `shot.mjs` no Mac
   às vezes engana (cache), e carga/check-overlap/qc-contrato NÃO olham se o arquivo existe. Pegou 4 cenas no
   avioes (s03 capota, s61 foto Marília, s67 página NSCA, s68 páginas do relatório) — todas passavam nos 3 gates.
   FIX de raiz: `scripts/qc-src-existe.mjs` (todo `src`/`data-src` de img/video/audio resolve pra arquivo real e
   não-vazio; ignora data:/http). Rodar por cena ao fechar e por projeto ANTES do render (`node scripts/qc-src-existe.mjs
   out/<proj>`). Regra do editor: se você DOCUMENTA um asset a produzir, PRODUZA-O na mesma cena e confirme com o
   gate — nunca deixe o `<img>` órfão. Complemento de taste (s68): documento real de caso com VÍTIMA citada evita
   página com foto de destroços — preferir páginas de texto/dado (memorial respeitoso). Ligado a REND-05/PESQ-18/SIS-05.
   (⚠ Housekeeping 22/jul: o parágrafo "ATUALIZAÇÃO … hidpi-bake" que morava aqui era sobre CANVAS 4K, não sobre
   o gate `src`-existe — foi MOVIDO pro seu lugar certo, a REND-11.)

**ARTE-45.** FOOTAGE DE FUNDO É POR-CENA, VARIADO E CONTÍNUO — NUNCA REUSO DA VIZINHA, NUNCA NAVY NO MEIO, NUNCA CLIPE
   ÚNICO EM CENA LONGA (o Mateus, 20/jul, revisou o avioes-pequenos na galeria e mandou 18 correções — ~10 delas
   a mesma família de footage de fundo). A raiz: no fan-out da arte, várias cenas de dado/explicação BLOQUEARAM
   esperando o footage escolhido chegar do bucket; ao re-rodar, os editores (a) REUSARAM o footage da cena
   vizinha (s10 = cockpit idêntico ao s09; s07 = destroços como s06; s44 repetido), (b) deixaram o fundo CAIR
   PRA NAVY/vazio num trecho (s25, s45 @22.4, s61 a foto nem apareceu), ou (c) ficaram num CLIPE SÓ parado numa
   cena longa que a narração usa pra LISTAR variedade (s12/s74/s79 = 28/20s com 1 footage; o Mateus: "deveria ter
   uns 5 footages rodando aqui"). REGRAS DURAS pro editor-de-arte, toda cena modo dado/explicação/síntese/split:
   (a) **footage PRÓPRIO** — antes de escolher, `grep '../_media/s' nos HTMLs vizinhos` e NÃO repita o arquivo de
   uma cena adjacente (reforça a regra de "sem reuso" da pesquisa; o banco tem 244 candidatos por tema, sobra
   opção); (b) **contínuo** — footage/imagem real cobrindo t=0→__duracao, VALIDADO com shot no início/meio/FIM
   (o buraco quase sempre está no fim, quando o clip curto acaba: faça loop/seek ou emende outro); nunca navy
   chapado em NENHUM instante (ARTE-36); (c) **cena >~15s que a fala LISTA tipos/exemplos = 3-5 footages** trocando
   word-locked com cada item citado, não 1 clipe estático; (d) **documento/relatório = página REAL** do PDF que a
   pesquisa baixou (pdftoppm → PNG), nunca folha em branco (s68 saiu 100% branca). O gate determinístico NÃO pega
   isso (footage repetido/ausente passa contrato+carga+overlap) — é a BANCADA VISUAL/galeria que pega (lei
   110). editor-de-arte.md endurecido na seção de mídia.

**ARTE-46.** PAÍS/REGIÃO DESTACADO NO MAPA = TERRITÓRIO INTEIRO POR GEOJSON, NUNCA SÓ PINO (o Mateus, 11/jul, no
   homossexualidade-antiguidade: "quando demarca o país tem que sempre marcar o território todo do país
   também" — o feedback ficou 9 dias sem virar regra e os 6 mapas saíram só com circle/pino sobre satélite).
   Regra dura pro mapista: cena que cita/destaca um país/estado/região ACENDE o POLÍGONO inteiro (fill âmbar
   translúcido ~0.22–0.30 + contorno forte + glow, GeoJSON real INLINE via addSource+fill/line, opacidade
   word-locked no instante da citação), NÃO um ponto flutuando. Território HISTÓRICO quando o assunto é
   império/reino antigo (Roma ~117 d.C., China Han, Macedônia de Filipe — historical-basemaps CC-BY-SA, creditar),
   país moderno só p/ lugar contemporâneo, legenda "aprox." quando recortado. E o satélite ESRI NÃO pode ficar
   escuro demais (brightness ≥ ~0.90; o s33 saiu quase preto por brightness .84+scrim+vinheta). mapista.md
   endurecido; geometria cacheada em assets/geojson/.

**ARTE-47.** COMENTÁRIO /* NÃO FECHADO NO <style> = TODO O CSS DA CENA MORRE (fundo branco default + layout caindo no
   fluxo; achado no homossexualidade: s60 saía 100% branca na 2ª metade, s36 mostrava só o topo do crânio — os
   dois PARECIAM "flash branco" e "crop ruim", mas a causa era um /* de cabeçalho sem o */). O CSS parser engole
   do /* até o próximo */ (inexistente) → o <style> inteiro vira comentário, zero regra aplica. NÃO se vê no
   thumbnail que é bug. Gate novo determinístico em qc-contrato.mjs (máquina de estado sobre os blocos <style>:
   /* sem */ = REPROVADO) — 0 falsos positivos nas 65 cenas, pega a CAUSA e não o sintoma. Rode qc-contrato
   SEMPRE antes de fechar a cena.

**ARTE-48.** CARD DE NAVEGAÇÃO/PROGRESSO (M26) — três regras do Mateus (23/jul), na 1ª revisão do card:
   (a) **O relógio NÃO tem número.** O progresso é o arco **laranja ANIMANDO** — preenche de 0 até a
   posição do assunto em ~1,6s quando o card entra, e o espectador *vê* avançar. Um "67%" escrito é
   REPROVA ("tire a numeração, deixe só a cor laranja andando"). (b) **Rótulo = título EXPLICATIVO do
   conteúdo**, nunca etiqueta vaga: "Como seria morrer em cada planeta do Sistema Solar", não
   "planetas"; "O que um buraco negro faria com o seu corpo", não "buracos negros" ("ficou muito
   vago, quero títulos mais explicativos"). (c) **Capitalização de frase formal do PT**: 1ª letra
   maiúscula + nomes próprios, resto minúsculo — **nunca 100% minúsculo** ("gosto que a primeira letra
   seja maiúscula igual qualquer frase no português formal"). Donos: `designer-de-navegacao` (o
   template/mecânica) e `curador-de-acervo` (grava o `assunto` explicativo e capitalizado). Rede de
   segurança determinística: `scripts/navegacao/gerar.mjs` força a 1ª maiúscula do rótulo (`capFrase`,
   idempotente, preserva nomes próprios do meio) — assunto minúsculo por engano ainda sai certo.

---

**ARTE-49.** UMA COR = UM SIGNIFICADO — A PALETA É SEMÂNTICA, NÃO DECORATIVA (destilada do feedback hands-on do
   Mateus no `hiroshima`, jun/2026; promovida de `aprendizado.auto.md` em 24/jul). Dentro de uma cena, cada cor é
   reservada a UM conceito. **Nunca pinte dois elementos de significados diferentes com a mesma cor** — o caso real
   foi rótulo e partícula ambos em ciano, e o espectador passa a ler os dois como a mesma coisa. Rótulo recebe cor
   FORA da família já usada pelos elementos físicos da cena. Corolário: se você precisou de uma cor nova só para
   "ficar bonito", ela não tem significado e não deveria estar ali.

**ARTE-50.** ÁREA SEGURA — NADA CORTADO NA BORDA (destilada do painel, jun/2026; promovida em 24/jul). Todo texto,
   número-herói, rótulo, ícone e seta cabe INTEIRO no quadro com margem mínima de **~80px em 1080p, ~160px no palco
   4K** de cada borda. Antes de fechar a cena, confira que o número grande e o rótulo mais longo não encostam nem
   estouram: se não couber, encurte, empilhe ou reposicione para o centro — **nunca deixe um algarismo ou uma letra
   cortada**, que é o defeito que mais denuncia amadorismo numa tela de TV. ⚠️ Esta lei ainda **não tem gate**: o
   `check-overlap` mede texto contra texto, não texto contra borda. Enquanto não tiver, ela depende de olho — e
   regra que depende de alguém lembrar é regra pela metade.

**ARTE-51.** TEMA POLAR PEDE VISTA POLAR (destilada do painel, jun/2026; promovida em 24/jul). Quando a cena trata
   de um polo ou de região circumpolar (Antártida, Ártico, oceano austral), o mapa usa vista **centrada no polo**
   (projeção azimutal/polar) — nunca a vista equatorial padrão, onde o polo fica espremido na borda inferior ou
   cortado. A região protagonista aparece **inteira e no centro**. Generaliza: a projeção do mapa é escolha
   editorial, não default do motor — quem escolhe a vista escolhe o que o espectador entende por "onde fica".

**ARTE-52.** SEM HALO, GLOW OU SETA FORA DA PALETA DA SÉRIE (destilada do painel, jun/2026; promovida em 24/jul).
   Brilho rosa/magenta/laranja decorativo não carrega dado e quebra o clima da série — sai. Se algo precisa de
   destaque, o destaque vem de **pulso ou preenchimento na cor semântica correta** (ARTE-49), não de um adorno
   luminoso numa cor que não significa nada. Teste: se você não consegue dizer que DADO aquele brilho comunica, ele
   é enfeite.

**ARTE-53.** O GATE DE TAMANHO/COLISÃO JULGA O TEXTO QUE SE LÊ, NÃO O MAIOR GLIFO — E O ORNAMENTO SAI DA CONTA SOZINHO
   (reforma do QC, 24/jul; agente-raiz: `qc-visual` + `editor-de-arte`). O gate antigo media o MAIOR texto do palco:
   numa citação, a **aspa decorativa** de 560px virava "texto-herói" e o gate ficava VERDE enquanto a fala real
   rodava a 132px — METADE do piso de 260 (medido em `ia-fisica/s60`: aspa 150px mascarando a fala a 64px, piso 130).
   Gate verde não provava legibilidade. Correção de raiz em `scripts/qc-tamanho.mjs` + `check-overlap.mjs`, com o
   critério numa fonte única (`scripts/qc-ornamento.mjs`): **aspa e divisor ISOLADOS** (um glifo que não é palavra)
   saem da conta do herói e da colisão automaticamente. Duas travas contra o falso-positivo, que é bug de prioridade
   alta: (a) **não depende de o autor marcar `data-qc-ornamento`** — regra que depende de alguém lembrar é regra
   morta, e das 8 cenas do acervo com aspa decorativa 1 marcava e 7 não; (b) o critério é **estreito de propósito** —
   `$`, `%`, `×`, `?` são CONTEÚDO e continuam contando (o `$` de 145px É o herói de `cobrar-duas-vezes`); só o glifo
   que não forma palavra sai. Provado nas 576 cenas do disco: ZERO cena boa passou a reprovar. Consequência para quem
   desenha: você NÃO precisa mais medir a fala à mão nem marcar a aspa — o gate faz. Consequência para o `qc-visual`:
   ele parou de remedir tamanho (inferência cara em trabalho de script) e cita o piso só para explicar a reprova.

**ARTE-54.** ROTEAR POR NATUREZA DA TAREFA: INVENÇÃO vai pro MODELO CRIATIVO, MOLDE vai PRO BARATO (Mateus,
   22/jul, reafirmado 24/jul: *"o Fable 5 não precisa editar documento/citação, é um trabalho simples que já tem até
   molde — ou seja, Opus 5 é capaz de fazer isso"*; agentes-raiz: `editor-de-arte` × `executor-de-molde`). O
   critério NÃO é a estação ("arte = Fable"), é o que a tarefa PEDE:
   • **INVENÇÃO** — inventar a metáfora, o showpiece, a cena que não existia: **`editor-de-arte` (Fable)**. É onde a
     cota escassa se paga.
   • **MOLDE** — `citacao`, `documento`, `titulo-topico`, `apresentador`: têm template, regra escrita e exemplar
     para copiar a estrutura. Vai pro **`executor-de-molde` (Opus)**. Preencher molde com o modelo caro é queimar o
     recurso raro no trabalho que o barato faz igual.
   **A MEDIÇÃO que decidiu** (24/jul, sobre as 596 cenas do disco): **23% são molde**, 77% invenção — e o diretor de
   cronograma projetava o Fable **sem folga por ~14%**. Ou seja, o roteamento **resolve o gargalo sem assinar conta
   nova**: uma decisão de arquitetura elimina uma decisão de dinheiro. `top10 arte <proj>` já separa as duas listas.
   ⚠️ **O executor PARA e escala** quando a cena pede ideia visual nova ou o conteúdo não cabe no molde (fala longa
   demais para o orçamento de texto). Escalar é o desenho funcionando; forçar o molde entrega cena morna, que é
   justamente o que a ARTE-39 combate.

**ARTE-55.** RITMO TEM PISO DE RESPIRO — "NADA CONGELA" É SOBRE MOVIMENTO, NÃO SOBRE TAXA DE ENTRADA
   (Mateus, 24/jul, revisando as 74 cenas do `compilado-previsoes-jiang`: *"tem várias animações que ficaram MUITO
   rápidas, que é algo que eu NÃO gosto"*; agentes-raiz: `editor-de-arte` e `mapista`). **O que causou:** a doutrina
   tinha PISO de movimento e nenhum TETO de ritmo. O ofício manda *"cada beat travado numa PALAVRA da narração"*
   (montar na voz) e *"frame parado é reprovação"* — e nada em lugar nenhum dizia quando PARAR de acrescentar. Fala
   corrida do canal é ~2,5–3 palavras/s: lido ao pé da letra, "um elemento por palavra" é **compliant** e entrega a
   cena que ninguém acompanha. **A regra:** word-lock diz *quando* a coisa entra, **não** obriga a preencher toda
   palavra — a decisão de mostrar continua editorial, e a maioria das palavras não vira nada na tela. Piso concreto:
   **bloco de texto ≥1,5 s no ar**, **≥1,2 s entre estreias de texto** na mesma região, nunca estreando a <1 s do
   corte. Antes de criar elemento novo, veja se um que já está na tela não faz o trabalho (**re-coreografar vence
   acrescentar**). ⚠️ A câmera, o push-in e a textura (partícula, grão, starfield) **não param nunca** — isso segue
   valendo. O que entra devagar é INFORMAÇÃO NOVA. **Como verificar:** `node scripts/qc-carga.mjs <html>` —
   teto de **0,9 estreias de texto/s** e **4 numa janela de 1 s** (= o máximo observado numa cena dourada; a mediana
   dourada é 0,32/s, e é ela o alvo). Pegou **36 das 76** cenas do lote.

**ARTE-56.** DENSIDADE É ORÇAMENTO — E O GATE QUE SÓ CONTA O QUE VOCÊ MARCOU NÃO MEDE NADA
   (Mateus, 24/jul: *"tiveram várias que ficaram POLUÍDAS, com muita informação ao mesmo tempo, o espectador fica
   cansado/sobrecarregado com muita informação, quando deveria ser o essencial"*; agente-raiz: `editor-de-arte`).
   **O que causou:** o `carga.mjs` conta o seletor `.lbl,#hero` — só o que o autor **lembrou** de marcar —, e
   regra que depende de lembrar é regra morta (é a mesma doença que a ARTE-53 matou no ornamento). Medido: em
   `ascensao-anti-imigracao-europa` o carga imprimiu **"PICO: 3 ✓"** enquanto o frame real tinha **26 blocos de
   texto e 140 elementos gráficos** simultâneos. E **nenhum gate jamais contou elemento GRÁFICO** — barra, ícone,
   card, seta, pino, moldura, foto —, que gasta a mesma atenção que uma palavra. Somava-se a isso o ofício
   empurrando para densidade (*"reserve os PICOS e entregue-os com densidade máxima"*, *"uma fileira de cenas todas
   no mesmo nível morno é o sintoma nº1 da regressão"*). **A regra:** o teto NÃO é a cota a gastar, é o limite a não
   alcançar — o alvo é a **mediana dourada: ~4 blocos de texto / ~18 elementos de informação**. Cada elemento tem de
   responder *"por que EU preciso estar aqui agora?"*; "pra não ficar vazio" ou "porque o dado tinha 8 linhas" = sai.
   **Tabela inteira na tela não é cena densa, é cena que não decidiu — escolher o que NÃO mostrar é o trabalho.** E
   **"densidade máxima" no showpiece é densidade de INVENÇÃO e MOVIMENTO, nunca de quantidade simultânea**: pico e
   poluição são opostos, não vizinhos. **Como verificar:** `node scripts/qc-carga.mjs <html>` conta TODO elemento de
   informação, marcado ou não, texto **e** gráfico (textura — partícula/grão/starfield — fica fora, é o "nada
   congela"). Tetos **9 blocos de texto / 77 elementos**, = o máximo já visto num dourado. Pegou **20 das 76**.

**ARTE-57.** TODO NOME DE PAÍS NA TELA ANDA COM A BANDEIRA AO LADO — EM QUALQUER MODO
   (Mateus, 24/jul: *"o nome dos países também ficaram sem as bandeiras, e eu quero que os nomes dos países SEMPRE
   tenham as bandeiras ao lado acompanhando"*; agentes-raiz: `editor-de-arte` e `mapista`). **O mais grave: a regra
   JÁ EXISTIA e foi cumprida em 0 de 74 cenas.** Estava escrita em três pontos de `knowledge/MIDIA-REAL.md` (§0
   pilar 3, "regra de mistura", §5b) e mesmo assim ninguém a aplicou, por **quatro** motivos que valem como lição
   de sistema: (a) o `ROUPA-CENA.md` só mandava abrir o MIDIA-REAL quando a cena era `midia:"footage"/"foto"/"drone"`
   — cena de desenho, dados ou mapa **nunca chegava lá**; (b) o OFÍCIO do editor-de-arte dava como exemplo de bom
   gosto exatamente o contrário (*"Não desenhe duas bandeiras: desenhe duas correntes que se trançam"*) — doutrina
   que se contradiz é pior que doutrina faltando; (c) não era lei numerada, então não estava na fatia que o agente
   carrega; (d) **ninguém media**. **A regra:** todo nome de país escrito na tela — mapa, ranking, comparação,
   timeline, legenda de série, aliança, rota — leva a bandeira oficial **ao lado, alinhada pelo centro**, altura ≈ a
   da caixa-alta do texto. Acervo: **`assets/flags/<iso2>.png`** (flagcdn, domínio público; procedência em
   `assets/flags/_PROCEDENCIA.json`; bloco OTAN em `assets/flags/nato/`). Faltou: baixe
   `https://flagcdn.com/w320/<iso2>.png` **e salve no acervo**, ou peça ao `pesquisa-logos` — bandeira nacional é
   domínio público, não existe motivo pra faltar. **Nunca** desenhar à mão, **nunca** emoji. Continente, oceano e
   região **não têm** bandeira — não invente para "Oriente Médio" ou "Pacífico". A bandeira **acompanha**, não
   substitui o nome. ⚠️ Em cena de mapa o rótulo vive em **screen-space**: a bandeira vai no MESMO container do
   nome, senão descola quando a câmera move. **Como verificar:** `node scripts/qc-pais-bandeira.mjs <html>`.

**ARTE-58.** NOME DE LUGAR É RÓTULO, NUNCA HERÓI — PISO 104px E **TETO 180px**
   (Mateus, 24/jul: *"elas ficaram meio grandes também os nomes dos países, pode diminuir"*; agentes-raiz:
   `editor-de-arte` e `mapista`). **O que causou:** todo texto tinha PISO e nenhum TETO, somado ao *"na dúvida,
   MAIOR"* da marca e ao fato de que **nome de país não tinha papel declarado** na hierarquia — então derivava para
   herói. Medido nas 74 cenas: 63 rótulos de país, mediana 112px, mas a cauda em 268 (CHINA, cobrindo 889px do
   território que a cena existia pra mostrar), 270 (TAIWAN), 286 e **300 (IRÃ)**. O IRÃ é o caso exemplar do
   mecanismo: a cena declarou `data-qc-papel="heroi"` no rótulo, e aí o `qc-tamanho` passou a **EXIGIR** ≥260px dele
   — **a regra produziu o defeito que deveria impedir**. **A regra:** nome de país/estado/cidade/região diz ONDE, e
   o herói é o dado ou a tese; em cena de mapa o herói é o **território**, não o nome dele. Piso **104px**, teto
   **180px**, alvo **~130–150px** (palco 4K; metade no legado 1920). Cidade/ponto continua menor que o país que a
   contém. ⚠️ **Nunca declare `data-qc-papel="heroi"` num nome de lugar** — cena pode não ter herói nenhum, e é pra
   isso que existe `qc-tamanho.mjs --sem-heroi`. Corolário geral: **todo piso quer um teto**; número que só tem
   mínimo cresce até incomodar, porque nada o segura. **Como verificar:**
   `node scripts/qc-pais-bandeira.mjs <html>` (acusa acima do teto **e** abaixo do piso). 10 dos 63 rótulos reprovam.

**ARTE-59.** DENSIDADE TEM UM DONO SÓ: `qc-carga`. O `guard-rail` FOI APOSENTADO — DOIS GATES PARA A MESMA COISA
   DIVERGEM POR DESENHO (Mateus, 24/jul, decidindo a tensão registrada no `compilado-previsoes-jiang`; agente-raiz:
   `editor-de-arte`). **O que causou:** o estúdio tinha DUAS réguas de poluição rodando ao mesmo tempo — o
   `guard-rail.mjs` (teto 3, de 22/jul) e o `qc-carga.mjs` (tetos calibrados nos 28 dourados, de 24/jul). Elas
   discordavam em 2 cenas (`golfo-dependencia-dessalinizacao`, `onda-migratoria-servicos`), e ninguém podia estar
   certo: **medir o mesmo fenômeno com duas réguas garante divergência**, é questão de tempo. **Por que o antigo
   perdeu, medido nas duas direções:** ele contava só `.lbl,#hero`, isto é, o que o autor LEMBROU de marcar —
   em `ascensao-anti-imigracao-europa` imprimiu **"PICO: 3 ✓"** num frame com **26 blocos de texto e 140 elementos
   gráficos** (falso-verde); e reprovava arte CORRETA cujos supostos "rótulos" eram legenda de eixo de gráfico
   (falso-vermelho). **Alarme falso é bug de prioridade alta:** verificação que grita à toa ensina a ignorar a
   verificação, e aí ela para de proteger justamente quando acerta. **A regra:** poluição/densidade/ritmo/vida se
   medem por **`node scripts/qc-carga.mjs <html>`** e por mais nada. Nunca "conserte" arte correta para agradar
   régua velha — aposente a régua. Corolário geral, que vale além deste caso: **quando um gate novo cobre o velho,
   o velho SAI** (para `arquivo-morto/`, com de-para) na mesma tacada em que o novo entra; deixar os dois vivos
   "por segurança" é criar a contradição que alguém vai ter de arbitrar no pior momento. **Como verificar:**
   `node scripts/qc-cena.mjs out/<proj>` — os gates são contrato, **carga**, colisão, tamanho, til-Bold, src-existe.

**ARTE-60.** UMA IMAGEM APARECE **UMA VEZ** — REPETIÇÃO INTENSA DA MESMA MÍDIA CANSA E É DEFEITO (Mateus,
   25/jul, sobre a versão nova do `senna`: *"tiveram repetições da mesma forma diversas vezes… E eu NÃO quero
   repetição intensa da mesma imagem, uma imagem/vídeo deve aparecer uma única vez e não repetir de novo
   durante o vídeo, pois fica chato e cansativo — tem que ter variações sempre"*). **VALE PARA TODOS OS
   PROJETOS**, não só aquele.
   **A ÚNICA EXCEÇÃO, e ela é semântica:** quando o roteiro **retoma o gancho** que remete àquela imagem
   específica — a volta é deliberada e o espectador a lê como rima, não como falta de material. Fora disso,
   reusar é preguiça de caça: o acervo de stock é ilimitado e o `pesquisa-imagens` existe para trazer variação.
   **Por que cansa:** a segunda aparição não acrescenta informação nenhuma e ainda avisa o espectador de que o
   vídeo está esticando material. É o mesmo defeito do plano genérico, com agravante — ele já foi visto.
   **Agentes-raiz:** `pesquisa-imagens` (não devolver o mesmo asset para needs diferentes) e `editor-de-arte`
   (não puxar de `_media/` um arquivo que outra cena já usou). **Corolário para a caça:** ao pedir mídia para N
   cenas do mesmo vídeo, o pedido é por N mídias DISTINTAS — devolver a mesma para duas cenas é entregar uma.
   **Como verificar:** `node scripts/qc-repeticao.mjs <proj|out/proj> [--grave]` — cruza a mídia usada nas
   cenas e acusa qualquer arquivo que apareça em mais de uma, exigindo justificativa de gancho.
   ⚠️ **Leia a ARTE-98 junto:** desde 02/ago o gate compara por **hash de conteúdo** (o mesmo arquivo com
   outro nome deixou de escapar), tem filtro de símbolo mais largo (bandeira/logo repetem de direito) e
   separa **GRAVE (≥4 cenas, reprova no `top10 qc` pré-render)** de **alerta (2–3, só relata)**.

**ARTE-61.** O RÓTULO DE PAÍS TEM **CONTEXTO** — E COBRAR BANDEIRA FORA DELE É PEDIR ERRO FACTUAL (25/jul).
   A regra "país escrito na tela vem com a bandeira ao lado" vale para o **rótulo**: o cartão que o canal
   desenha para identificar um Estado contemporâneo. Ela **não** vale em três situações, e o gate
   (`qc-pais-bandeira`) agora sabe disso:
   • **País histórico.** "EGITO · c. 1450 a.C." é o Egito faraônico; a bandeira egípcia atual é de 1984.
     Pendurá-la ali erra o lugar por três milênios. Data antiga (a.C./d.C./século/ano < 1950) = lugar, não Estado.
   • **País dentro de texto reproduzido.** O dateline de um clipping ("**BAHREIN** · 8 de março de 2026"), a
     manchete, a citação — ali o nome é conteúdo do documento, e uma bandeira ao lado falsificaria a fonte.
     O teste é estrutural: se a tag é de ênfase inline e o pai escreve mais alguma coisa, é frase, não rótulo.
   • **Rótulo com qualificador.** "CHINA · HOJE" e "JAPÃO · 1985" são o MESMO padrão; a normalização antiga
     apagava não-letras, então o qualificador numérico sumia e o textual não — e o gate cobrava um lado da
     comparação e ignorava o outro. Corta-se no separador (`·`, `—`, `|`), não nos caracteres.
   **O QUE NÃO É EXCEÇÃO — e foi onde eu quase enfraqueci o gate:** bandeira **desenhada** (CSS/SVG) conta, mas
   só se for LEGÍVEL como bandeira. O `japao-dobra-orcamento-defesa` marcou como bandeira um disco a **14% de
   opacidade**: no frame, uma mancha vermelha difusa em que ninguém lê "Japão". Eu ia calar o gate; o **frame**
   provou que ele acusava certo. Cenário identifica por presença — e presença exige ≥50% de opacidade e ≥15% da
   largura do palco. Bandeira desenhada precisa de `data-bandeira="<iso>"` para ser reconhecida.
   **A lição que fica maior que o caso:** quando o gate acusa e a correção "óbvia" é afrouxar o gate, **olhe o
   frame antes**. Duas das três acusações eram falsas e a terceira era real — e nenhuma medida numérica separava
   as três. Só o olho.
   **Como verificar:** `node scripts/qc-pais-bandeira.mjs out/<proj>/graphics/*.html`

**ARTE-62.** A TELA NÃO PODE **DESMENTIR O APRESENTADOR** — E NUM COMPILADO ISSO É ESTRUTURAL, NÃO AZAR
   (25/jul, medido). Em `compilado-previsoes-jiang`, a narração diz aos 3618,4s *"o Brasil tem a **terceira**
   maior reserva mundial de terras raras"* e a cena desenhada por cima mostrava **"2º"** — porque o dado mudou
   (USGS MCS 2025 → 2026) entre a gravação e a montagem. O espectador ouve uma coisa e lê outra, no mesmo
   segundo. **Passou em todos os gates**: a cena está perfeita e o dado está certo. O defeito não mora na cena,
   mora na RELAÇÃO entre a arte nova e a voz antiga — a mesma família de [FIN-37], o vão entre cenas.
   **POR QUE É ESTRUTURAL EM REAPROVEITAMENTO:** compilado monta arte NOVA sobre narração VELHA. Todo número
   que envelheceu no intervalo — ranking, população, recorde, preço, "o maior do mundo" — é uma contradição em
   potencial. E há uma ironia que precisa ser dita: **quanto melhor a pesquisa da arte (dado fresquinho!), maior
   a chance de desmentir o apresentador.** O acerto de uma estação vira o erro do conjunto.
   **O CONSERTO QUASE NUNCA É TROCAR O NÚMERO.** Escrever o valor velho põe dado morto na tela; escrever o novo
   desmente a voz. A saída é **não afirmar a posição**: mostre a grandeza (`11 Mt`) e deixe a proporção do
   gráfico contar o resto — é verdadeiro nas duas versões do dado, e ainda derruba um bloco de texto.
   **Como verificar:** `node scripts/qc-tela-x-fala.mjs <proj>` — cruza os ordinais escritos na tela com os que
   a narração diz na janela da cena. (Cobre ordinais, a família que já mordeu; não pretende cobrir todo número.)

**ARTE-63.** TEXTO CORTADO PELA BORDA — O DEFEITO QUE TRÊS GATES **IGNORAVAM DE PROPÓSITO** (25/jul).
   Em `golfo-dependencia-dessalinizacao`, os rótulos BAHREIN, OMÃ e EMIRADOS estavam com a base comida pela
   margem inferior **desde o primeiro frame**. Nenhum gate reclamou, e a razão é constrangedora: `check-overlap`
   compara elementos ENTRE SI, `qc-tamanho` mede altura de fonte, `qc-carga` conta blocos — e os três
   **descartam** o que está fora do viewport para não contá-lo, em vez de reclamar. A regra "ausência de
   resultado é falha a investigar" vale também aqui: *o elemento sumiu da medição* não é *o elemento está bem*.
   **A CAUSA É QUASE SEMPRE MOVIMENTO**, e é isso que torna o defeito traiçoeiro: a cena é composta PARADA,
   fica perfeita, e então ganha um push-in (`scale` com `transform-origin` deslocado). Cada frame do zoom empurra
   o conteúdo para fora, e o que estava a 40 px da margem sai do quadro no meio da animação. **Conferir o frame
   0 não pega** — o gate varre a duração inteira.
   **O QUE É DEFEITO:** intersecção PARCIAL com a borda (meia palavra, base das letras comida). Sair inteiro do
   quadro é saída deliberada e não se cobra.
   **Como verificar:** `node scripts/qc-fora-do-quadro.mjs out/<proj>/graphics/*.html`

**ARTE-64.** CARGA BAIXA **NÃO É QUALIDADE** — DESPOLUIR NÃO É ESVAZIAR (25/jul, medido no `senna`).
   A versão NOVA do `senna` ganha da ANTIGA em todos os números: mediana de **3** blocos de texto contra **9**,
   ritmo 0,18/s contra 0,32, info 8 contra 12. Pelos gates, é muito melhor. E o Mateus, de memória, disse que
   *"cenas da versão antiga tinham ficado bem melhores"* — **ele estava certo**.
   **A PROVA, no momento mais importante do vídeo** (a volta 7 em Imola): a ANTIGA é preto profundo, traçado em
   close, a volta em VERDE contra o cinza, o carro é um ponto branco com halo dourado, e "**1 MAI 1994** · 7ª
   VOLTA" no topo — a data que todo brasileiro reconhece. A NOVA é azul-marinho, traçado inteiro e minúsculo,
   linha branca fininha, o carro é um pontinho que mal se vê, e só "VOLTA 7" no canto. **A data sumiu.**
   A nova tem menos texto porque perdeu INFORMAÇÃO ESSENCIAL e perdeu DRAMA — não porque foi destilada.
   **A REGRA:** a mediana dourada é 4 blocos porque as cenas douradas são boas **com** 4, não porque menos é
   sempre melhor. O alvo da despoluição é *"o espectador consegue ler e sentir"*, não *"o número baixou"*. Antes
   de cortar, o teste continua sendo **"se isto sumir, a tese cai?"** — e data, cor de marca e escala dramática
   fazem parte da tese quando a cena é um momento histórico. Cortá-las derruba a cena e o gate aplaude.
   **Corolário para o editor-chefe:** ao comparar duas versões, número serve para RANQUEAR o que olhar primeiro;
   quem decide qual presta é o olho, sobre o frame. Nunca aprove uma refação só porque a métrica melhorou.

**ARTE-65.** FOOTAGE CONTEMPORÂNEO NÃO ILUSTRA EVENTO HISTÓRICO (25/jul, achado no `senna`).
   A cena `s36-pole-1-4-segundos` narra a pole de Senna em **1988** sobre um footage de Mônaco **atual**: Audi TT,
   Porsche 911, placa de hoje, pedestres em roupa contemporânea. O espectador vê carros modernos e lê "hoje" —
   a cena mente sobre a época sem dizer uma palavra falsa. É a mesma família de [ARTE-62] (a tela desmentindo a
   narração), com o agravante de ser silenciosa: nenhum texto está errado.
   **O lugar certo do footage de rua contemporâneo** é falar do lugar HOJE ("Mônaco é assim"), nunca do evento de
   décadas atrás que aconteceu ali. Para o evento histórico: arquivo real da época, ou cena construída/tipográfica
   — a versão antiga resolvia com um cartão de data em tipografia forte, e funcionava melhor.
   **Agravante medido:** esse mesmo footage serve DUAS cenas do vídeo (`s34` e `s36`), violando também [ARTE-60].
   **Como verificar:** não há gate automático — o anacronismo é semântico. É item obrigatório da lente factual do
   `qc-visual`: *"a mídia é da época do que a cena narra?"*

**ARTE-66.** MISTURA DE BASE DE MAPA — A REGRA EXISTIA, NINGUÉM MEDIA, E O MATEUS VIU (22/jul → gate em 25/jul).
   Ele reclamou, e a reclamação ficou 3 dias parada na fila: *"a silhueta do Brasil tá horrível aqui,
   provavelmente porque usou a base de mapa da NASA, quando era pra usar…"* e, na cena seguinte, *"aí aqui mudou
   pra um mapa Esri, tipo? porra claude, que merda... mesmos problemas de sempre"*.
   O ofício do mapista (§4.1) já dizia: *"a base do vídeo é UMA. Misturar fornecedores entre cenas irmãs do
   mesmo vídeo é reprovação — a textura, a cor e o nível de detalhe mudam visivelmente de uma cena pra outra, e
   o espectador percebe sem saber nomear."* **Medido em 25/jul:** o `compilado-previsoes-jiang` tem **23 cenas
   em MapTiler e 4 em NASA**, e `crimeia-corredor-terrestre` usa **as duas na mesma cena**.
   **DUAS COISAS DIFERENTES, E O GATE SEPARA AS DUAS:**
   • **Mistura** (duas famílias no mesmo vídeo) → **reprova**. Se a principal caiu, o vídeo **inteiro** desce
     junto para o fallback; nunca uma cena só.
   • **Projeto inteiro no fallback** → **avisa**. É consistente, mas o fallback existe para emergência: teto de
     zoom menor e **sem DEM irmão**, ou seja, 3D honesto fica fora. Medido: `homossexualidade-antiguidade` está
     100% em ESRI. Isso precisa ser decisão declarada, não descoberta.
   **Como verificar:** `node scripts/qc-base-unica.mjs <proj>`

**ARTE-67.** PAÍS DESTACADO ACENDE O **MULTIPOLÍGONO COMPLETO** — E A CAMADA NASCE NO STYLE, NUNCA EM
   `map.on('load')` (25/jul, medido). O Mateus escreveu em 11/jul, e o pedido ficou duas semanas parado:
   *"Quando demarca o país tem que sempre marcar o território todo do país também"*. Ao consertar, o mapista
   achou **dois** defeitos — o dele e um pior embaixo.
   **1 · GEOMETRIA MUTILADA.** A base era Natural Earth 50m simplificado, que descarta ilhas: **Egito 1 de 8
   partes** (Tiran, Sanafir, Shadwan, Zabargad…), **Grécia 61 de 74**, **Itália 15 de 29**, **China 9 de 70**.
   O país aparecia pela metade e ninguém via, porque o pedaço que falta não deixa buraco — só não acende.
   **Regra:** use `ne10m-admin0` (domínio público) com **todas as partes**, e simplifique com tolerância que
   não descarte polígono — o gerador deve **abortar** se a contagem de partes mudar.
   **2 · A CORRIDA QUE APAGA O TERRITÓRIO INTEIRO — e é a mais perigosa.** As camadas de país eram criadas em
   `map.on('load')`, ou seja, **depois** do primeiro `__renderAt`. Na captura o loop de animação está PAUSADO,
   então elas nasciam com opacidade 0 e **nunca mais recebiam valor**. Medido no frame 5,2 s: *"o Egito saía com
   pino, com nome e sem território nenhum"* — exatamente o que o Mateus viu. Grécia e Itália aparecerem foi
   sorte de temporização.
   **Regra:** fonte e camada de território nascem **dentro do style do construtor**, existindo no frame 0. Nada
   que a cena precise para o frame 0 pode depender de evento assíncrono — no preview funciona, no render não.
   **3 · Âmbar translúcido sobre deserto é invisível.** Realce precisa de contorno de três fios (glow → casing
   escuro → fio claro) com largura interpolada por zoom, senão some na areia e vira bolinha nas ilhotas.
   **Como verificar:** contar as partes dentro do quadro no beat de cada país (8/8, 74/74, 29/29, 70/70) com as
   camadas comprovadamente acesas — não basta a cena "ter" a geometria.

### ARTE-68 · Antes de propor reaproveitar versão antiga, confira o PALCO — não a memória
**O caso (26/jul, `senna`):** o Mateus lembrava que *"cenas da versão ANTIGA ficaram melhores"* e
pediu para apurar. A lembrança procede esteticamente, mas a medição encerrou a dúvida por outro
caminho: **nenhuma das 18 cenas antigas declara `data-render="4k-native"`** — todas foram desenhadas
no palco legado 1920×1080. Reaproveitar o arquivo entregaria HD ampliado, contra a regra dura do
canal (*"esqueça o HD… eu nunca economizaria pra colocar HD no lugar de 4K"*).
**A regra:** ao comparar duas versões de um projeto, a PRIMEIRA medição é o palco
(`grep -l '4k-native'`), antes de qualquer julgamento estético. Versão em palco legado está fora da
disputa como ARQUIVO, por mais bonita que seja — e descobrir isso depois de um agente já ter portado
cenas é retrabalho puro.
**⚠️ Mas a memória do dono continua sendo dado.** O que ele lembra como "melhor" costuma ser uma
TÉCNICA, não um arquivo. No `senna` era o fundo de COLETÂNEA (~8 fotos reais trocando com a narração
em crossfade+KenBurns, contra um footage travado) — registrado no `DONE.md` da sessão antiga.
Porta-se a técnica para as cenas novas; nunca o HTML velho.
**E confira se a versão lembrada estava mesmo pronta:** o mesmo `DONE.md` dizia *"fechamento sem
coletânea aplicada (só 3 fotos achadas)"*. A versão lembrada como melhor era ela própria incompleta —
o que significa que a nova pode superar as duas, e não só empatar com a antiga.
**Como verificar:** `grep -l '4k-native' <pasta>/*.html | wc -l` contra o total, nas DUAS versões.

### ARTE-69 · Atributo de autoria não é medida de qualidade — meça a SAÍDA e a FONTE
**Refina a [ARTE-68]**, que manda conferir o palco antes de reaproveitar versão antiga. O palco
continua sendo o teste certo para *aquela* pergunta (copiar arquivo velho). O que esta lei corrige é
o uso do MESMO atributo para julgar cena NOVA — ali ele mente.
**O caso, medido em 26/jul (`senna`):** o veredito listava *"9 cenas fora do 4K nativo — renderizar
assim entrega 9 buracos de resolução"*, contadas pela ausência de `data-render="4k-native"`. **Oito
das nove estavam boas.** Cena no palco legado 1920 passa pelo `hidpi-bake` e o Chrome rasteriza a 2×:
vetor e texto saem em 4K de verdade. Renderei a `s21-cinco-disciplinas` para provar — saída
**3840×2160**, e o recorte **1:1, sem reescala**, da área do texto mostra letra limpa, anti-aliasing
correto e Ã/Ç de caixa-alta bem desenhados.
**⚠️ E resolução do arquivo de saída também não prova nada sozinha:** um 1920 ampliado reporta
3840×2160 igual. A prova é o **pixel**, olhado em recorte 1:1 — nunca o cabeçalho do arquivo. Isto é
a [SIS-08] (verificação por agregado não é verificação) aplicada a imagem.
**O TESTE CERTO são as duas pontas:** (a) a **fonte** — a mídia raster dentro da cena tem ≥4K na
dimensão em que ela preenche o quadro? (b) a **saída** — o recorte 1:1 tem borda limpa? O palco é
convenção de autoria no meio do caminho, e não determina nenhuma das duas.
**O que a medição certa achou:** 6 de vetor puro (nada a fazer) · 1 com mídia ≥4K (nada a fazer) ·
1 com falso relato de arquivo ausente (erro do medidor) · **1 caso real** — `s08`, foto 3256×1968 em
tela cheia, ~1,18× de ampliação, que é o único a merecer mídia nova.
**Por que importa em dinheiro:** julgar por atributo teria mandado refazer 8 cenas prontas. Arte
pronta é ativo pago; o critério errado transforma verificação barata em regeração cara.
**Como verificar:** antes de condenar cena por resolução, `ffprobe` na mídia de origem **e** um
recorte 1:1 (`ffmpeg -vf crop=W:H:X:Y`, sem `scale`) do frame renderizado, olhado.

### ARTE-70 · Quem encomenda conserto gasta orçamento de tela — e o teto é do PICO, não do total
**O caso, medido em 26/jul (`golfo-dependencia-dessalinizacao`):** o revisor autônomo escreveu 5
achados para a mesma cena. Cada um estava CERTO isoladamente — os nomes dos países somem, 4 das 6
barras não mostram valor, nada diz o que o gráfico mede. Somados, pediam **6 nomes + 6 valores + 1
kicker + 1 linha de referência = 14 textos simultâneos**. O teto do gate de carga é **9**. O editor
obedeceu, a cena fechou em **13** e reprovou no portão. Ninguém errou o julgamento; o que faltou foi
alguém somar.
**A causa é estrutural, não do modelo:** o revisor julga por VISÃO e não conhece o teto; o gate de
carga é DETERMINÍSTICO e não lê achado. Um encomenda informação, o outro a limita, e os dois estão
certos. Trocar o modelo do executor não muda nada — o defeito nasce na encomenda.
**A REGRA, nos dois lados.** Quem ESCREVE achado tem orçamento: antes de pedir rótulo, número ou
legenda, conta o que já está no ar naquele instante. Achado que só cabe estourando o teto é achado
mal escrito — o pedido certo vira "escalone no tempo" ou "esta cena quer dizer coisa demais". Quem
EXECUTA mede antes de acrescentar (`qc-carga.mjs` lista os textos no ar no pico) e, se não couber,
escalona no tempo ou prioriza e **declara** (`CARGA: deixei <n> de fora — <por quê>`).
**A saída que quase ninguém lembra: o teto é do INSTANTE.** Rótulo que entra junto com sua barra e
sai antes da próxima não empilha. Seis rótulos sequenciados cabem onde seis simultâneos não cabem, e
a leitura costuma até melhorar — o olho segue um por vez.
**⚠️ O que esta lei NÃO autoriza:** afrouxar o teto para a cena caber. Um gráfico de 6 barras
totalmente rotulado é forma legítima, e se o teto de 9 a proibir por natureza, isso é calibragem a
DECIDIR com o dono — não a contornar item a item. Exceção concedida no calor do conserto vira porta
dos fundos e mata o gate sem ninguém revogá-lo.
**A generalização:** quando um agente encomenda trabalho que outro gate limita, a restrição tem de
estar no prompt de QUEM ENCOMENDA. Pôr só em quem executa transfere para o fim da linha um conflito
que nasceu no começo — e o fim da linha só pode obedecer ou reprovar.
**Como verificar:** `node scripts/qc-carga.mjs <cena>` depois de um lote de conserto; densidade no
pico dentro do teto, e todo achado não atendido declarado na resposta do agente.

### ARTE-71 · Card de título é MOLDE — e o `modo` diz quem DESENHA, não o que aparece no fundo
**Fecha um buraco da [ARTE-54]**, que criou o roteamento MOLDE × INVENÇÃO para tirar trabalho de
template do Fable. O roteamento estava certo; o que faltava é que **ninguém alimentava a categoria**.
**Medido em 26/jul:** 17 cards de título em 3 espelhos (`planetas` 6, `avioes-pequenos` 6,
`homossexualidade-antiguidade` 5) e **ZERO tipados `titulo-topico`**. O montador escrevia
`modo:"footage"` (porque o card tem footage de fundo) ou `modo:"cinematico"` (porque tem ar de
cinema). Os 17 iam para o `editor-de-arte`, ou seja, para o **Fable — a cota mais escassa do
estúdio** — fazer trabalho de template. São ~11% da carga de arte de cada vídeo.
**A confusão que causa isso, e é fácil de cometer:** o card TEM footage. Mas `modo` não descreve o
que aparece na tela — descreve **quem desenha e com que material de partida**. O insumo visual se
declara em `midia`/`midia_termos`. Card de título tem template versionado
(`templates-cena/navegacao/titulo-topico.html`), regra escrita e exemplar: muda o texto e o clipe de
fundo, a estrutura é idêntica em todo vídeo do canal. Isso é a definição de molde.
**O CONSERTO É EM DOIS LUGARES, e os dois são necessários.** (1) Raiz: o prompt do `montador` agora
manda `modo:"titulo-topico"` para card, explicando por que footage de fundo não muda o modo.
(2) Rede: o `top10 arte` reconhece card de tópico **pelo papel** — id `cardN-…` ou título
`CARD Tópico …` — e roteia para MOLDE mesmo com o modo errado, avisando em voz alta que o espelho
devia dizer outra coisa. Espelho já escrito não se reescreve para consertar roteamento, e confiar
que todo espelho futuro venha certo é confiar em disciplina.
**A generalização:** classificação que decide ROTA precisa de um reconhecedor por papel além do
campo declarado. Campo é preenchido por quem escreve e erra; papel é inferido do artefato. Quando o
custo do erro é gastar o recurso escasso, vale ter os dois.
**Como verificar:** `./bin/top10 arte <proj>` não pode listar card de tópico sob INVENÇÃO. Se listar
o aviso de resgate, o espelho está errado e o montador precisa ser corrigido — a rede é rede, não
destino.

### ARTE-72 · O footage é o CONTEÚDO — escurecer é exceção local, nunca acabamento
**O Mateus, 26/jul, olhando a bancada Opus × Fable:** *"eu não gosto de cenas com muito sombreamento,
que foi exatamente o que o Opus 5 fez. Esse é o tipo de cena que eu detesto, justamente porque não dá
pra ver nitidamente o footage do fundo, que é o que verdadeiramente importa."*
**Medido nas duas versões da MESMA cena** (`acordo-de-plaza-1985`, mesma foto do Hotel Plaza):
· **Opus** — `linear-gradient(205deg, rgba(30,52,104,.30))` **sobre o quadro inteiro** + um
  `rgba(0,0,0,.55)` de corpo inteiro, além dos scrims de texto (86% e 78%). A fachada virou silhueta.
· **Fable** — scrims direcionais nas bordas onde o texto pousa (92% à esquerda, 60% embaixo) e **dois
  gradientes partindo de opacidade ZERO**. A foto lê inteira.
Não é gosto do modelo: é o que a doutrina mandava.
**A CAUSA É UMA CONTRADIÇÃO INTERNA, e a ordem de leitura decidia quem vencia.** Três pontos
proibiam escurecer mídia real ([ARTE-32] "footage NÍTIDA e clara, SEM sombra/vinheta"; a proibição de
`box-shadow`/vinheta-moldura no `<video>`/`<img>`; e a lei do mapa escuro demais, que já tinha custado
uma cena quase preta por `brightness .84 + scrim + vinheta`). Três outros mandavam: o **kit de
acabamento "em toda cena boa"** com `#vig` e véu a 72%, o `design-laws` tratando mídia real como
*"fundo desfocado (blur + scrim escuro)"*, e o *"TODO fundo leva gradiente + vinheta suave"*.
E o `ROUPA-CENA` manda ler o do kit **ANTES DE CRIAR**. O artista lia "vinheta em toda cena boa" na
primeira página e a proibição noutro arquivo, depois. **Regra que chega primeiro vence regra que está
certa.**
**A REGRA:** sobre footage ou foto real vale **só o `#scrim`, e ele é LOCAL** — gradiente que parte de
**opacidade zero** e escurece apenas a faixa onde o texto pousa. `#vig`, `#grain` e véu de corte são
acabamento de **fundo desenhado** (cenário, fill chapado, palco sólido). Lavagem de corpo inteiro
sobre mídia real — gradiente diagonal cobrindo o quadro, `rgba(0,0,0,.5)` global, `filter:brightness`
abaixo de ~0,9 — é **reprovação**, por mais cinematográfica que fique.
**Desfoque + scrim de corpo inteiro só quando há primeiro plano nítido que É o assunto** — aí o fundo
é cenário, não conteúdo. Se a mídia É o assunto, ela fica nítida.
**A generalização, que é o que me interessa guardar:** quando duas regras da casa se contradizem,
quem ganha não é a mais recente nem a mais correta — é a que o agente lê primeiro. Contradição em
doutrina não se resolve escrevendo a regra certa mais uma vez; resolve-se **consertando o documento
que chega antes**.
**Como verificar:** `grep -oE 'linear-gradient\([0-9]+deg[^)]*rgba\([^)]*\.[3-9]' <cena>.html` sobre
cena com `<video>`/`<img>` de fundo tem de voltar vazio para gradientes que cobrem o palco inteiro; e
o frame renderizado precisa deixar a mídia legível fora da faixa de texto.

### ARTE-73 · O clímax precisa de TEMPO DE TELA — word-lock posiciona o beat, não o adia até o corte
**O revisor criativo, 26/jul, em `ormuz-autobloqueio-ira` (2,9s):** *"O clímax da cena — o bloqueio —
só existe nos últimos 0,25s. O espectador vê o percurso e a cena corta em cima do sentido dela."*
**Medido no HTML reprovado:** a rota gastava 1,72s se desenhando (`0.42→2.14`), a câmera ainda
empurrava em 2,17 e a porta só fechava em `2.30→2.60`, com a onda de choque terminando em **3,02 —
depois do fim da cena de 2,90**. O percurso, que é o CONTEXTO, comia 74% da duração; o bloqueio, que é
a TESE ("o Irã pode fechar o corredor por onde ele mesmo escoa"), tinha 0,25s de tela.
**A causa não foi descuido, foi word-lock aplicado ao pé da letra.** A narração diz *"no estreito"* em
1,66/1,76 e *"Ormuz"* em 2,36 — travar o fechamento na palavra "Ormuz" põe o clímax a 0,54s do corte.
Numa cena curta, word-lock estrito e clímax legível entram em conflito direto, e ninguém tinha
decidido quem ganha.
**A REGRA:** o beat que carrega a TESE fecha 100% até **~65% da duração** e sustenta o resto. Em cena
de 2–3s isso significa: contexto/percurso resolve no PRIMEIRO terço com **ease-out curto** (não
progresso linear espalhado pela duração inteira), a câmera pousa junto com ele, e o clímax tem ~1s
estático. Nada de keyframe terminando depois de `__duracao` — animação que não cabe na cena não
existe, só rouba tempo de quem cabe.
**Como o word-lock sobrevive:** ele trava a UNIDADE de fala, não a sílaba. *"no estreito de Ormuz"* é
um bloco — fechar a porta em "estreito" (1,76) está locked e ganha 1,1s de sustentação. E o nome
próprio continua tendo o seu instante: quem responde a "Ormuz" (2,36) é o **realce do rótulo** (troca
de cor), que custa zero tempo de tela. Beat estrutural cedo, ênfase de rótulo na palavra.
**Como verificar:** todo `ramp(t,a,b)`/keyframe da cena com `b > __duracao` é defeito; e o instante em
que o elemento-tese chega a 100% dividido por `__duracao` tem de ser ≤ ~0,65.

### ARTE-74 · A base de satélite é um ativo DE TERCEIRO com defeito conhecido — creditar o provedor e cobrir a costura
⚠️ **SUPERADA PARCIALMENTE — SÓ NA CLÁUSULA DE CRÉDITO — pela [ARTE-104] (04/ago/2026). A cláusula da COSTURA continua VIVA.**
> **O que morreu:** a regra de crédito. A [ARTE-104] tem palavra do Mateus em 04/ago — *"não precisa dar os
> créditos ao MapTiler não, para com isso, a gente JÁ PAGA"* · *"remova todos os créditos de todos os mapas"* —
> e é universal sobre ONDE o crédito mora: nada que exista só para cumprir contrato ocupa pixel. O crédito
> exigido por licença (OSM/ODbL, Wikimedia/CC BY-SA) **sai da tela e vai para a descrição do vídeo**.
> A colisão era LIVE dentro de um único agente: o `mapista.md:317` já proíbe escrever crédito de base na tela e
> o gate #8 dele (`:466`) exige que a busca por `MapTiler`/`OpenStreetMap` no HTML volte **vazia** — enquanto
> esta lei, sem marcador nenhum, mandava o oposto. Quem a lesse isolada obedecia e reprovava no próprio gate.
> **O que CONTINUA VIVO e não tem substituta em lugar nenhum:** a cláusula da **COSTURA** (máscara sobre a água
> por geometria real). A [ARTE-104] não fala uma palavra sobre mosaico; a receita certa — camada `water` do
> OpenMapTiles filtrada por `class == "ocean"`, e o **porquê** do filtro — existe num único lugar no estúdio, e é
> este bloco. Enterrar a lei inteira levaria esse conhecimento junto.
> **Achado para a fila (a costura nunca foi consertada NA FONTE):** `scripts/templates/map-scene.mjs:35` e
> `templates-cena/_smoke-map.html:8` ainda implementam `#ocean{…background:#0a2a4d;mix-blend-mode:screen;opacity:.28}`
> — tinta global de tela cheia, exatamente o "ajuste global de brilho" que esta lei diz que NÃO resolve.

**O revisor criativo, 26/jul, em `ormuz-autobloqueio-ira`, dois achados com a mesma raiz:**
· *"A imagem em tela é raster de satélite, e o rodapé credita apenas '© OpenStreetMap contributors' —
  o OSM não fornece imagem de satélite."*
· *"Retângulos de brilho diferente espalhados pelo mar do Golfo. Em 4K numa TV grande isso não lê como
  imagem de satélite, lê como defeito de compressão."*
**A raiz é uma só:** o template do mapista tratava a base `satellite-v2` como se ela fosse a geometria
do OSM. Daí crédito errado (a licença do provedor da imagem sem atribuição num vídeo para milhões) e
nenhum tratamento para um defeito **documentado dentro do próprio HTML** — o comentário do código já
dizia *"a satellite-v2 tem costura de mosaico no Golfo"* e a resposta era só `raster-brightness-min`,
que **não resolve**: erguer o piso não iguala tiles de exposição diferente. Auditado no projeto:
2 de 2 cenas de mapa com base satélite + crédito só-OSM tinham o mesmo furo.
**A REGRA — crédito:** ⛔ **MORTA desde 04/ago/2026 — ver [ARTE-104]. NÃO aplicar o parágrafo abaixo.**
~~cena com base raster credita **o provedor da imagem E os vetores**, na ordem
`traçado · Imagem © <provedor> · © <fonte da geometria>`. Cada camada visível tem dono; a que ocupa o
quadro inteiro é a que menos pode ficar sem nome.~~
O que vale hoje: **nenhum crédito de base cartográfica na tela**; a atribuição que a licença exige vai para a
descrição do vídeo. O ensinamento que sobrevive deste parágrafo é o do diagnóstico, não o da prescrição —
creditar o OSM por uma imagem que o OSM não fornece era erro de FATO, e continua sendo: o que mudou é que a
correção não é escrever o nome certo na tela, é não escrever nome nenhum lá.
**A REGRA — costura:** grande massa de água no quadro pede **máscara sobre a água**, não ajuste global
de brilho. A geometria é REAL (camada `water` do OpenMapTiles/MapTiler v3, filtrada por
`class == "ocean"` — sem o filtro, lago e salina do interior viram manchas navy no deserto e cada
açude ganha contorno neon), com fill navy da marca a ~0,72 e linha de costa turquesa discreta para
preservar a faixa de águas rasas. Efeito colateral bem-vindo: o mapa vai para o navy do padrão v5 em
vez do cinza-esverdeado cru.
**Como verificar (INVERTIDO em 08/ago/2026 pela [ARTE-104] — a régua antiga cobrava o contrário):**
`grep -c "MapTiler" <cena>.html` na linha do crédito de tela tem de voltar **ZERO** (é o gate #8 do `mapista`);
e o frame do mar em 4K não pode mostrar retângulo de brilho diferente — esta segunda metade nunca mudou, e é a
única verificação da costura que existe.

### ARTE-75 · O vídeo precisa RESPIRAR — e quem reserva o respiro é o montador
**Mateus, 26/jul:** *"eu quero justamente que tenham cenas de vídeos que não hajam textos nem nenhum
elemento em tela, justamente pra deixar um tempo do espectador absorver a leitura do roteiro, com
vídeos reais e acontecimentos reais, pra ilustrar o que está sendo dito, sem nenhuma informação extra
em tela… mas que haja um equilíbrio entre todas as opções que a gente tem hoje."*
**Cena que RESPIRA** = footage ou foto real em tela cheia, **tela limpa, zero texto**. Não é cena
vazia: é a cena em que a imagem carrega sozinha e o espectador **ouve**. Sem ela o vídeo inteiro é
leitura — o olho nunca descansa, e a narração compete com texto do primeiro ao último segundo.
**MEDIDO no artefato (não no espelho), 26/jul:** `homossexualidade-antiguidade` 18/66 = **27%** ·
`avioes-pequenos` 12/65 = **18%** · `senna` 5/56 = **9%** · `compilado-previsoes-jiang` 1/76 =
**1,3%**. O espalhamento de 1% a 27% é a prova de que **não havia critério nenhum** — cada vídeo saiu
do jeito que saiu.
**⚠️ E a régua da casa é MUDA:** os exemplares dourados respiram **11%** (3 de 28). Ou seja, isto não
é regressão a consertar — é capacidade que o estúdio **nunca exerceu de propósito**, e por isso não
dá para derivar o piso dos dourados. Quando a referência não responde, quem responde é o dono.
**QUEM RESERVA É O MONTADOR, e só ele.** Ninguém depois pode criar respiro: o editor de arte desenha
o que o espelho pede, e espelho que pediu rótulo recebe rótulo. Se o respiro não nasce na decupagem,
ele não existe no vídeo. Por isso a regra mora no prompt do montador, não no do artista.
**Onde o respiro cabe:** depois de um bloco denso de dados · na virada entre assuntos · quando a
narração já DIZ o que a imagem mostra e repetir na tela é eco (aí o word-lock vira redundância, não
reforço) · no momento emocional, onde texto atrapalha.
**E o equilíbrio de modos é parte da mesma doença:** o `planetas-algodao-doce` saiu com **46% de
desenho**, quase metade do vídeo na mesma linguagem. Nenhum modo deve passar de ~40% — o público
sente monotonia antes de saber nomeá-la.
**O gate MEDE e não reprova, de propósito:** `scripts/qc-respiro.mjs <proj>` dá a taxa e a
distribuição. O piso é decisão editorial do dono, não número que um agente inventa; quando ele
fixar, entra como `--piso=N` e passa a barrar. Gate que reprova contra um número inventado é alarme
falso com autoridade.
**Como verificar:** `node scripts/qc-respiro.mjs <proj>` depois da estação ARTE.

### ARTE-76 · Caixa que ANIMA de tamanho decapita acento — e nenhum gate vê
**Achado em 26/jul, olhando o frame, não medindo.** Numa cena do compilado, a palavra "IRÃ" aparecia
na tela como **"IRA"**: a caixa que a continha crescia (gaveta abrindo) com `overflow:hidden`, e
enquanto a altura animava, o til do Ã ficava FORA da área visível e era recortado. Meio segundo
depois a caixa terminava de abrir e o til aparecia — mas o frame do meio já tinha ido para o vídeo.
**Por que nenhum gate pega:** o texto no DOM está correto (`IRÃ`), a fonte está correta, o
`_audit-til.mjs` confere PESO de fonte (o bug do Bold 600–749 desenhar Ã/Õ errado), e o
`check-overlap` confere colisão entre caixas. Nada disso olha para *pixel recortado por
`overflow:hidden` durante uma transição de tamanho*. **Só o olho num frame do MEIO da animação vê** —
e a validação costuma amostrar início, pico e fim, exatamente os três instantes em que a caixa já
está no tamanho final.
**A regra:** caixa que anima `height`/`width`/`max-height` com `overflow:hidden` e contém texto com
diacrítico alto (Ã Õ Á Ê Í Ú Ç) precisa que o **texto materialize DEPOIS que a caixa parar de
crescer** — duas rampas separadas, não uma. No caso consertado: gaveta abre 17,15→17,45, texto entra
17,40→17,95.
**A generalização:** acento é a parte mais alta do glifo e a primeira a ser cortada; em PT-BR isso
atinge palavra comum, não caso raro. Sempre que animar recorte sobre texto, **amostre um frame no
MEIO da transição** — o começo e o fim mentem por construção.
**Como verificar:** `node scripts/shot.mjs <cena> <t>` num instante DENTRO da animação de abertura, e
ler a palavra na imagem. Se houver diacrítico na caixa animada, esse frame é obrigatório.

### ARTE-77 · O gate de hex corrompido acusava a própria paleta do canal
⚠️ **SUPERADA EM PARTE — NO OBJETO (o comando `perl`) — pela [ARTE-134] e pela [ARTE-153]. O PRINCÍPIO continua VIVO.**
> **O que morreu:** a prescrição operativa. O `perl -ne '… (?<!url\()#[0-9A-Fa-f]{3,8}[g-zG-Z]'` abaixo está
> **aposentado** pela [ARTE-134] e **proibido por escrito** pela [ARTE-153]. O gate vigente é
> **`node scripts/qc-hex.mjs`**. Medido em 08/ago/2026 contra as 48 cenas douradas: o `perl` acusa 7 tokens em 3
> arquivos (`#becG`, `#becCap`, `#becW`, `#fech`) e **ZERO são corrupção** — `seed/examples/dourados/M09/70-anos-nobel.html:59`
> é literalmente `#becCap{`, abertura de regra CSS; o `qc-hex.mjs` dá PASS nos três dizendo "seletor de ID não é cor".
> Ou seja, a frase "Provado contra os dois lados… 0 acusações" **é falsa contra o material bom de hoje**, e a
> própria generalização da lei condena a prescrição dela.
> **O dano é medido, não hipotético:** a [ARTE-153] registra um executor renomeando o id `#dbar`→`#qbar` — um
> identificador CORRETO — só para calar este regex. Alarme falso não é ruído inofensivo: produz edição
> desnecessária em arte paga.
> **O que CONTINUA VIVO, e é carga estrutural:** o princípio — *um gate que reprova o caso NORMAL não é rigoroso,
> é quebrado; antes de escrever "tem que voltar vazio", rode o comando contra material BOM conhecido*. As dez
> citações desta lei espalhadas pela doutrina invocam **todas** o princípio, nenhuma invoca o comando; a
> [ARTE-134] e a [ARTE-153] se apoiam nela pelo nome. Por isso a marca é **ponteiro, não deleção**.
> ⚠️ **E o comando está voltando pela porta dos fundos:** em 08/ago ele seguia prescrito em 7 arquivos vivos
> (`knowledge/ROUPA-CENA.md:58` e `:119`, `CLAUDE.md:337`, `marcas/top10/agentes/tradutor-de-tela.md:87`,
> `cerebro/agentes/mapista/CONTRATO.md:131`, `cerebro/agentes/editor-de-arte/CONTRATO.md:207` e `:221`), enquanto
> só `.claude/agents/editor-de-arte.md` e `.claude/agents/mapista.md` carregam a proibição. **É exatamente por
> isto que o histórico não se apaga:** o registro é o que impede o comando morto de voltar por engano.

**Medido em 26/jul, por um `editor-de-arte` que se recusou a aceitar o próprio checklist.** O comando
da doutrina era `grep -oE '#[0-9A-Fa-f]{3,8}[a-z]'`, com a instrução "tem que voltar VAZIO". Ele
**nunca volta vazio** numa cena do padrão v5: `a`–`f` minúsculos são dígitos hex *e* letras, então
`#08111d` casa como `#08111` + `d`. **Toda cor escura da paleta navy dispara o alarme.**
**Quanto ruído:** nas 76 cenas do `compilado-previsoes-jiang`, o padrão antigo acusava **10 cenas**;
o correto acusa **0**. Ou seja, o gate que existe para pegar corrupção de cor estava reprovando
cores certas, e os agentes aprenderam a ignorar a linha — que é exatamente como um gate morre.
**Duas correções, porque a primeira não bastou.** Trocar `[a-z]` por `[g-zG-Z]` (letra que NÃO é
dígito hex) matou os 10 falsos positivos de cor, mas sobraram 3: `url(#fabG)`, `url(#accent)` —
**referências a id de SVG**, não cores. O comando final exclui esse contexto e é portável no macOS
(que não tem `grep -P`):
⛔ **NÃO RODE O COMANDO ABAIXO — aposentado pela [ARTE-134], proibido pela [ARTE-153]. Use `node scripts/qc-hex.mjs`.**
Fica aqui só como histórico de como se chegou ao princípio:
```
perl -ne 'print "$&\n" while /(?<!url\()#[0-9A-Fa-f]{3,8}[g-zG-Z]/g' <html>
```
Provado contra os dois lados: pega `#4A6residual580` e `#abcxyz`; ignora `#08111d`, `#ffeeaa` e
`url(#accent)`. Nas 76 cenas: **0 acusações**, e o projeto está de fato limpo.
**A generalização:** *um gate que reprova o caso NORMAL não é rigoroso, é quebrado.* Antes de
escrever "tem que voltar vazio" numa doutrina, rode o comando contra material BOM conhecido — se ele
acusa, o comando está errado, não o material. E ao consertar um falso positivo, teste de novo: o
segundo falso positivo estava escondido atrás do primeiro.
**Onde vale:** o comando estava copiado em 7 arquivos (CLAUDE.md, ROUPA-CENA, e os contratos de
`editor-de-arte`, `mapista`, `tradutor-de-tela`). Corrigido nos 7 — regra que mora em sete lugares
diverge, e esta tinha divergido para o lado errado em todos.

### ARTE-78 · Ornamento desenhado peça por peça infla a DENSIDADE sem inflar a informação
**Achado em 26/jul por um `editor-de-arte` que instrumentou o próprio pico em vez de cortar no escuro.**
A cena `s77-ceu-azul-recap` reprovava o gate `carga` por **80 elementos de informação @26,6s (teto 77)**
— com ritmo ótimo (0,03/s) e **um único texto na tela**. Não havia excesso de conteúdo nenhum.
**A medição:** 53 dos 80 eram **elos de três órbitas**, desenhados como 90 `<rect>` minúsculos, um por
elo. O gate conta os que ficam girados perto de 45°, porque aí o bbox passa do corte de área. Ou
seja: **três objetos visuais contavam como 53 informações.**
**O conserto:** cada anel virou **dois `<path>`** (dois, não um, porque elos ímpares levam stroke 3 e
pares stroke 2,2 — espessura não varia dentro de um path). Pico: **80 → 33**.
**A prova de que o desenho não mudou** — e é isto que separa conserto de trapaça: renderizou as duas
versões isoladas e comparou pixel a pixel. **0,58% dos pixels diferem em mais de 8/255, máximo 104**,
tudo no cruzamento de elos translúcidos, que antes era composto duas vezes e agora uma.
**A regra:** *se é UM objeto visual, é UM elemento.* Corrente, enxame, malha, trilha de pontos,
constelação — desenhe com um `<path>` de subpaths, não com N nós. Isso não é enganar o gate: é fazer
a contagem bater com o que o espectador vê. O inverso (90 nós para 3 objetos) reprovava a cena por 4%
e mandaria alguém cortar conteúdo que não era o problema.
**Corolário para quem depura:** densidade alta com texto baixo e ritmo baixo é assinatura deste
defeito. Antes de cortar informação, **instrumente o pico** e veja QUANTOS dos elementos contados são
ornamento.
**Como verificar:** `node scripts/qc-carga.mjs <cena>` — se `info` no pico for muito maior que o
número de coisas que você vê na tela, o excesso é decoração fatiada.

### ARTE-79 · O bbox mente em dois casos: margem negativa e rótulo LARGO girado
**Duas causas de colisão/corte que apareceram repetidas nas cenas de documento do `avioes-pequenos`
(26/jul), ambas invisíveis no código e óbvias no gate.**

**1 · `margin` negativa em span de grifo.** O padrão `margin:0 -8px` (para o realce "vazar" além do
texto) faz as caixas de dois grifos vizinhos **se sobreporem** de verdade — e, se o span quebra linha,
o bbox infla para a linha inteira e cavalga o vizinho. Foi a causa recorrente de colisão em `s62` e
`s67`. **A regra:** grifo se faz com **padding simétrico**, nunca com margem negativa; e span de
grifo com vizinho ao lado leva `white-space:nowrap` (só os curtos — o longo continua quebrando, senão
estoura a coluna).

**2 · Rótulo largo girado engorda o bbox pela LARGURA, não pela altura.** A [ARTE-76] registrou a
folga como ~(altura/2)·sen(θ), medida num chip pequeno. Está incompleta: o bbox eixo-alinhado de um
elemento girado cresce **~largura·sen(θ)**, e em rótulo largo esse termo domina. Medido: "NSCA 3-13"
a −3° com 6 px de folga cavalgava a assinatura; corrigido a **−2° com 34 px**. **A folga é
proporcional à LARGURA do rótulo, nunca um número fixo copiado de outra cena.**

**⚠️ E a folga tem direção.** Ao empurrar o carimbo para baixo para resolver a colisão, o agente
criou uma regressão: 57 px cortados pela borda inferior desde 14,8 s. A folga foi para CIMA e os dois
gates ficaram verdes. **Conserto de geometria muda o vizinho e a borda ao mesmo tempo — rodar o gate
de colisão sem o de fora-do-quadro (e vice-versa) troca um defeito por outro.**
**Como verificar:** `node scripts/qc-cena.mjs <cena>` roda os dois juntos. Nunca feche geometria só
com o gate do defeito que você estava caçando.

### ARTE-80 · Plano novo NÃO herda a câmera do plano anterior — transformação composta acumula
**O defeito mais grave achado em 26/jul, e ia ao ar.** Na cena `s30-conta-em-pleno-voo`, o corte para
a cabine (`#setB`) estava escrito como filho de `#cam`/`#tilt` — o contêiner do push-in do plano
ANTERIOR. Transformação de CSS compõe: o novo plano levava o push do velho **multiplicado** pelo seu
próprio scale (2,48 × 1,12).
**Medido em t=23,5 s:** o painel inteiro caía abaixo do palco — o herói `ÓLEO` em **y = 2084…2861 num
palco de 2160**, e o rótulo `VÁCUO` **não aparecia em NENHUM instante da cena**. O clímax do trecho
estava fora do quadro, e a cena tinha carimbo de render.
**Por que passou tanto tempo:** no frame 0 e nos primeiros segundos tudo está no lugar — o push-in
ainda é pequeno. O erro só se materializa no fim do gesto, e conferir início/meio não pega. Foi o
`qc-fora-do-quadro`, que varre a duração inteira, quem viu; e ele só viu porque a cena foi mandada
para o portão, não porque alguém desconfiou.
**A regra:** **corte para outro plano é OUTRO nó, irmão do anterior, nunca filho.** Se dois planos
compartilham pai transformado, o segundo carrega a câmera do primeiro. Cada plano tem o seu push, a
sua origem e o seu clipping — e quem escreve a cena tem de poder somar as transformações de cabeça:
se a conta tem dois fatores de escala multiplicando, já está errada.
**Sintoma que denuncia:** rótulo que o gate acusa como "nunca entra no quadro" (não "cortado" — NUNCA
ENTRA). Isso não é margem apertada; é elemento em espaço transformado errado.
**Como verificar:** `node scripts/qc-fora-do-quadro.mjs <cena>` reporta separadamente *cortado* e
*nunca visível*. Um único "nunca visível" é sempre estrutural, jamais ajuste de padding.

### ARTE-81 · "Estava em trânsito" virou álibi para texto que NASCE fora do quadro
**Achado em 26/jul por um `editor-de-arte`, e o ponto cego era do gate que eu mesmo tinha calibrado.**
O `qc-fora-do-quadro` derruba a acusação de corte para todo texto que em algum instante esteve 100%
fora — a regra "quem saiu inteiro estava viajando", escrita contra um falso positivo real de
travelling. Ela abriu um buraco pior.
**O caso:** em `s41-excursao-pista`, o chip tinha `left:1548` num palco de 3840 e ia até **4087 px**. A
placa lia **"2021 — 20"** durante os **2 segundos** em que fica parada. O rótulo "2024" estava 100%
fora, então **(a)** não era *cortado* (estava inteiro fora), **(b)** não era *invisível* (ele entra
depois, quando o chip voa). Escapava das três classificações e o gate dava verde numa cena com meia
placa perdida — enquanto o espectador vê o vizinho cortado sem entender por quê.
**A distinção que resolve não é geométrica nem de duração, é de ORDEM:** quem **sai** está fora
DEPOIS de aparecer (despedida, legítimo); quem **NASCE** fora está fora ANTES de aparecer. O gate
passou a comparar o primeiro instante fora com o primeiro instante dentro; se o texto passa mais de
**1 s** fora antes de existir na tela, é acusado. O limiar de 1 s protege o gesto comum de entrada
deslizando da borda, que dura frações de segundo.
**Calibrado nos dois lados, porque gate não testado contra positivo é fé (SIS-31):** construí uma
cena sintética com um controle ("DENTRO SEMPRE") e um defeito (texto em x=4000 num palco de 3840 que
entra em t=3 s) — o gate acusa o defeito e ignora o controle. E varri 5 cenas reais que já passavam:
**nenhuma virou falso positivo.**
**Como verificar:** `node scripts/qc-fora-do-quadro.mjs <cena>` agora reporta três categorias
distintas — *cortado*, *nunca entra* e *nasce fora* —, e as três reprovam. Ler qual das três é o
diagnóstico: cortado é margem, nunca entra é espaço transformado errado ([ARTE-80]), nasce fora é
posição absoluta maior que o palco.

### ARTE-82 · Crédito de licença CC BY é OBRIGAÇÃO, e o estúdio não tinha gate nenhum
**Achado em 26/jul, de raspão.** Um `editor-de-arte` trocou 6 imagens repetidas e, ao fazê-lo,
descobriu que **nenhuma das 6 cenas tinha crédito na tela** — as menções a "Commons" eram
**comentário de código**, invisível ao espectador. Ele criou os créditos por conta própria e avisou.
Varrendo o projeto: de 53 cenas com mídia, **47 não tinham nenhum elemento de crédito**.
**Por que é diferente de todo outro gate:** os demais protegem QUALIDADE (carga, colisão, corte).
Este protege uma **condição legal**. CC BY e CC BY-SA concedem o uso *sob a condição* de atribuir —
sem o crédito, o uso simplesmente **não está licenciado**. Num canal com milhões de inscritos, o
custo de errar é desproporcional ao de consertar, que é um `<div>` por cena.
**⚠️ E NÃO é toda mídia.** CC0 e domínio público dispensam atribuição. Um gate que exigisse crédito
para tudo daria alarme em metade do acervo e seria desligado na primeira semana ([ARTE-77]). A régua
é a **licença declarada na pauta de pesquisa, arquivo por arquivo** — que o `pesquisa-imagens` já
grava (`path`, `licenca`, `autor`, `atribuicao`).
**O número que o gate novo devolveu, e por que ele vale mais que o meu susto:** eu tinha contado "47
cenas sem crédito". O gate diz **4 violações confirmadas** (mídia CC BY/CC BY-SA declarada + zero
crédito), **4 cenas corretas**, e **46 cenas cuja mídia não tem licença registrada** — para essas ele
reporta *"não sei julgar"* em vez de acusar. Gate que separa o que sabe do que não sabe é gate que
sobrevive; o meu 47 misturava violação com lacuna de cadastro.
**Duas coisas que o agente fez e que a doutrina deve exigir:** (1) o crédito nasceu com **pílula
escura translúcida atrás** — sem ela o texto claro desaparecia sobre o plinto branco de uma cena e a
vitrine clara de outra, o que ele viu no frame; (2) numa cena em que a imagem é engolida pela
escuridão, o crédito **apaga junto com ela** — a licença é respeitada enquanto a imagem está no ar, e
o fecho continua limpo.
**Como verificar:** `node scripts/qc-atribuicao.mjs <proj>` — reprova cena que usa mídia de licença
com atribuição e não tem elemento de crédito; lista à parte as mídias sem licença cadastrada.

### ARTE-83 · Véu de abertura + conteúdo word-locked = dois relógios que ninguém cruza
**A cena `s56` foi ao composto com 1,633 s de PRETO ABSOLUTO e passou por todos os gates duros
(26/jul).** Quem pegou foi o `qa-montagem`, no fim da linha — quando o clipe já estava renderizado e
o composto montado.
**O mecanismo:** a cena tinha um `#intro` (véu preto sobre tudo, `z-index` 12) que apagava em 0,4 s, e
o conteúdo (`#hL`/`#hR`) entrava word-locked em **1,60 s** e **2,06 s**. Entre 0,4 s e 1,6 s **não
havia nada na tela**. As duas coisas foram escritas com relógios independentes — o véu pelo tempo de
abertura, o conteúdo pela fala — e ninguém cruzou os dois.
**⚠️ Por que nenhum gate pegou:** o `qc-visual` amostra **beats declarados**, e a abertura não é um
beat. `carga`, `colisão`, `tamanho` e `fora-do-quadro` medem o que ESTÁ na tela; nenhum deles pergunta
*"há algo na tela?"*. Uma cena vazia passa em todos.
**A regra, em duas partes:**
1. **Todo instante depois do primeiro frame tem imagem.** `t=0,05 s` entra na amostragem obrigatória
   de QUALQUER cena — é o único instante que nenhum word-lock cobre, e custa um shot.
2. **Véu preto de abertura é padrão a evitar** quando o conteúdo entra word-locked depois. O hard cut
   (conteúdo no frame 0, sem véu) não tem esse modo de falha, e é o idioma honesto do ofício.
**E o conserto certo não é antecipar o fade — é piso de opacidade.** Antecipar `#hL`/`#hR` para 0,15 s
deixaria os 3 primeiros frames abaixo do limiar e o `blackdetect` reprovaria de novo. O agente mediu a
luma das duas mídias (**0,31** à esquerda, **0,91** à direita), pôs a metade CLARA presente no frame 0
com opacidade 0,62–0,72, e preservou o escalonamento do split (150 ms de defasagem, só comprimido).
**Como verificar:** `ffmpeg -i <clipe> -vf blackdetect=d=0.03:pix_th=0.10 -f null -` não pode devolver
`black_start:0`. `d=0,03` é o limiar de um frame — provado limpo nesta cena.

---

**ARTE-84.** A RÉGUA DE ARTE ESTAVA **INALCANÇÁVEL** — E O VOCABULÁRIO DO `modo` TEM **DOIS DONOS QUE
DIVERGEM** (26/jul/2026).

Fui conferir qual exemplar um `editor-de-arte` recém-despachado iria ler. `seed/examples/dourados/M11/`
estava **vazia**. Varri o resto: **17 de 26 modos com a pasta NUA** — e este número já é a segunda
correção: contei 19 antes de descobrir que M03 e M04 têm um `LEIA.md` que **já resolve o caso**, e melhor
do que eu ia. O do M03 diz: *"cena de mapa é WebGL e é entregue+limpa do disco, então o exemplar canônico
morre — a régua viva é a produção atual: `grep -l maplibre out/*/graphics/*.html | xargs ls -t | head`"*.
Eu estava a um passo de "promover um exemplar" para uma pasta que estava certa. **Pasta vazia e pasta com
instrução não são a mesma coisa, e tratá-las igual é o alarme falso que a [ARTE-77] proíbe** — na mesma
lei que eu citei para calibrar o gate.

E ao procurar o que promover achei outra coisa: os candidatos de projetos PUBLICADOS
(`antartida/mapa-politico-fatias-pizza`, `12-o-tesouro/terra-brasil-minerals-mapa`,
`avioes-linha-reta/great-circle-mapa`) são **SVG puro** — zero MapLibre, zero MapTiler. São de antes do
padrão vigente, e promovê-los canonizaria a técnica que a [PESQ-21] revogou ("nunca desenha país à mão").

A causa imediata: a régua é indexada por **CÓDIGO** (`M07`) e os espelhos escrevem **NOME DE FAMÍLIA**
(`foto`). Sem tradutor, o agente abre `dourados/foto/`, não acha nada e **desenha sem referência** — a
"regressão de cenas tímidas" da [ARTE-39] entrando pela porta de serviço. E os dois vocabulários **são a
mesma tabela**: a 4ª coluna de `knowledge/CATALOGO-MODELOS.md` é o nome de família da 2ª. Ninguém escreveu
o tradutor. Com a ponte (`src/modos.mjs`, que lê a tabela em tempo de execução): `foto` 0→4 exemplares,
`dados` 0→6, `desenho` 0→9, `cinematico` 0→3, `split` 0→2. Sobra `mapa` (M03+M16) em **0**, cobrindo 6
cenas no `homossexualidade` e **20 no Jiang**.

**⚠️ E EU ERREI A DIREÇÃO DO CONSERTO, o que vale mais que o achado.** A primeira versão desta lei dizia
que o espelho "deve cravar o código" e culpava o MONTADOR por escrever família. **Falso.**
`contratos/espelho.schema.json` tem enum explícito, e ele é de **famílias**: `dados mapa mapa3d drone
desenho footage cinematico foto citacao documento split split-footage titulo-topico apresentador nenhum`.
Família é a forma **correta**; quem viola o contrato é o `compilado-previsoes-jiang`, com **75 cenas em
código**. Cheguei a "consertar" `s43-pistas-invisiveis` de `modo:"drone"` para `M07` chamando-o de
quebrado, e **quebrei um espelho válido** — revertido.

> *Antes de declarar um dado inválido, ache o ARQUIVO que define o válido.* Doutrina em prosa — inclusive
> o `CLAUDE.md`, que diz "o `modo` do espelho aponta o modelo" — **não vence schema versionado**. O schema
> é o que uma máquina checa; a prosa é o que um humano lembra. Quando divergem, quem manda é o gate.

**A DOENÇA DE RAIZ: um assunto, DOIS donos.** O vocabulário do `modo` é definido em dois lugares que
ninguém sincroniza — o enum do schema (15 valores) e a coluna de família do catálogo (12). A divergência,
medida:

| divergência | valores | consequência |
|---|---|---|
| no SCHEMA, sem modelo no catálogo | `drone` · `titulo-topico` | válido escrever, **régua impossível** |
| no CATÁLOGO, fora do enum | `navegacao` (M26) | **capacidade inalcançável** |

O `navegacao` é o pior dos dois: **M26 existe, tem agente dedicado (`designer-de-navegacao`), e o
montador não pode pedi-lo** porque o enum não tem o valor. É capacidade construída e não solicitável — e
é exatamente o card que falta nas 36 fronteiras de tópico do compilado do Jiang.

**E o número que explica a poluição do Jiang:** 43 das 75 cenas dele usam modo cuja pasta está vazia.
Mais da metade do projeto foi desenhada às cegas — quando o laudo de arte reclamar, a causa é estrutural,
não falta de esforço do agente.

**⚠️ O CEGO DO GATE, que vale muito além da arte:** o `top10 doctor` já verificava "régua morta" — e
pescava só **PONTEIRO MORTO** (documento citando um `.html` que não existe). **Pasta vazia passava.**
Ponteiro morto grita na hora (o Read falha); referência ausente é muda — o agente trabalha pior e ninguém
sabe. *Quem escreve gate tem de checar o CONTEÚDO do destino, não só a existência do ponteiro.*

**Como verificar:** `node scripts/qc-modo-regua.mjs <proj>` — reprova `modo` fora do contrato e `modo`
escrito como código; alerta em régua vazia, em valor sem modelo e em modelo inalcançável. Está no trilho
do `finalizar.mjs` como advisory, e o `top10 doctor` conta as pastas vazias em toda rodada.

**Pendente de decisão do dono:** (a) `navegacao` entra no enum do schema? (b) `drone` e `titulo-topico`
ganham modelo no catálogo, ou saem do enum? (c) o Jiang tem 75 cenas a converter de código para família.

---

**ARTE-85.** O ORÇAMENTO DE BLOCOS DA CENA VEM DA **FALA**, NÃO DO MODELO — e o modelo é justamente o que
convida ao excesso (26/jul/2026, `golfo-dependencia-dessalinizacao`, a pior cena do compilado do Jiang).

Cena de 9,7s, `modo M11` (ranking de barras). Estado: **7 textos, 0,82 estreias/s, 38 itens de info,
excesso 2,19 — a pior de 76.** Tinha **seis países com seis números**.

A narração daquela janela diz: *"dados recentes mostram que o Kuwait e Omã dependem em torno de noventa por
cento da dessalinização pra água potável"* — **dois países e UM número**. Os outros quatro países e os
outros cinco números eram beats que a voz nunca pede. A cena respondia a uma pergunta que ninguém fez.

**O conserto não foi acabamento, foi decidir quem é ASSUNTO e quem é CENÁRIO.** Kuwait e Omã à frente, com
bandeira e nome. Catar, Bahrein, Saudita e Emirados ficaram na tela como a fileira de torres da costa —
**altura = o dado real (99 · 92 · 70 · 42), sem rótulo e sem número**, com a duna ocluindo a base. É
exatamente o que a voz faz com eles: cita o par e deixa a região como fundo. Resultado: 7→4 textos,
0,82→0,41 estreias/s, 2,19→**0,26**, e o projeto deixou de ter qualquer cena ≥2,0.

**⚠️ O QUE ISSO ENSINA SOBRE O CATÁLOGO:** *o nome do modelo é um convite, e alguns convites são
armadilhas.* "Ranking de barras (top-N)" sugere tabela; "panorama por país" **não** significa "um rótulo
por país". O mesmo vale para M10 (linha do tempo convida a datar tudo), M21 (stepper convida a rotular
cada etapa) e M15 (pictograma convida a legendar cada ícone). Em toda essa família, a régua é a **âncora**
do espelho — o trecho literal da narração —, e não o formato: *se a voz não diz, a tela não escreve.*

**⚠️ E A PROVA DE QUE FALTA RÉGUA:** esta mesma cena passou por **três rodadas de conserto** e voltou com a
tabela de seis linhas nas três. `seed/examples/dourados/M11/` está vazia — um agente que recebe `modo:"M11"`
hoje não tem **nenhuma** referência, e sem exemplar ele reconstrói o convite do nome. É a [ARTE-84] medida
em campo: 17 dos 26 modos estão assim.

**Como verificar:** compare o número de estreias com a contagem de entidades e números que a **âncora** do
espelho realmente cita. Estreia sem palavra que a justifique é eco ou invenção. `qc-poluicao` mede o
sintoma (excesso de blocos); a causa se lê no `ancora`.

---

**ARTE-86.** OS GATES SÃO **CEGOS PARA A GEOMETRIA** — em cena de mapa, três defeitos passam por todos eles
(26/jul/2026, destilado de dois `mapista` no compilado do Jiang).

1. **`check-overlap` NÃO VÊ POLÍGONO DE MAPA.** Ele compara caixas do DOM, e polígono desenhado pelo motor
   de mapa não é DOM. Medido no `taiwan-bloqueio-naval`: a zona Sudoeste ocupava `x 1247–1751 · y 1350–1803`
   — exatamente sobre a palavra "CHINA" da legenda em `x=160, y≈1734`. **Rótulo em cima da geometria que a
   cena existe para mostrar, com PASS em todos os gates.** A verificação é medir a posição PROJETADA da
   geometria ao longo da cena e conferir contra a caixa dos rótulos.
2. **O SCRIM DE BAIXO APAGA GEOMETRIA.** O bed de contraste a 0,74 de opacidade escondia a zona Sul, que
   descia até `y≈2071` — uma das seis zonas que a cena existia para mostrar, sumida sob o próprio scrim.
   Se não há texto ancorado embaixo, o scrim não se justifica; baixe ou remova.
3. **O RITMO DA GEOMETRIA NÃO É MEDIDO POR NINGUÉM.** O `qc-poluicao` conta estreias de TEXTO. Seis zonas
   nascendo de 0,32 em 0,32s são **~3,8 eventos/s** — 7× o teto de ritmo — e o gate diz PASS. O conserto é
   o mesmo do texto: agrupar os nascimentos em word-lock (3 pares em vez de 6 solos) e alongar a subida.

**⚠️ E ESTIMATIVA DE COORDENADA ERRA, SEMPRE.** A costa leste de Taiwan foi estimada em `x≈1829`; o probe
devolveu **2093** — a diferença era **Lanyu/Orchid**, ilhota real do multipolígono que o traço acende. Quem
posiciona rótulo por estimativa acerta por sorte. Meça no frame projetado.

**E o validador é outro:** `shot.mjs` stuba o loop de animação e fotografa **tile cru** — em cena de mapa
ele MENTE. Use `scripts/maprender.mjs`. Está em `knowledge/ROUPA-CENA.md:56`,
`knowledge/CATALOGO-MODELOS.md:50` e `.claude/agents/mapista.md:370` — e ainda assim eu escrevi `shot.mjs`
num briefing hoje ([SIS-35]).

---

### ARTE-87 · Pessoa CITADA na narração exige cena — sempre, sem exceção

Lei do Mateus (29/jul/2026), vendo o `el-nino` montado: *"quando cita o meteorologista norueguês,
também não teve cena pra ilustrar ele, E TEM que haver SEMPRE quando alguém é citado."*

Quando a narração nomeia uma pessoa real, o espectador precisa **ver** de quem se fala: rosto, nome
na tela, e função. Deixar só o apresentador falando desperdiça o único instante em que aquele nome
significa alguma coisa — e o nome sozinho, dito uma vez, não fixa.

**Medido no `el-nino`:** das duas pessoas citadas no vídeo inteiro, **as duas** caíram em cena
`apresentador`:

| pessoa | instante | cena no ar |
|---|---|---|
| Gilbert Walker | 395,34 s | `23-apresentador` — sem arte |
| Jacob Bjerknes | 538,74 s | `30-apresentador` — sem arte |

O detalhe que denuncia a causa: **a tese das duas cenas NOMEIA a pessoa** ("o matemático inglês
Gilbert Walker foi mandado à Índia", "o norueguês Jacob Bjerknes juntou as duas metades"). O montador
entendeu o conteúdo e mesmo assim escolheu `apresentador`. Não foi desatenção sobre o assunto — foi
não tratar "há uma pessoa aqui" como gatilho obrigatório de formato.

**A regra, para o montador:** ao escrever o espelho, todo segmento cuja fala contenha nome próprio de
pessoa nasce com `modo` que mostre a pessoa — nunca `apresentador`. O agente [pesquisa-pessoas] busca
a foto real (LinkedIn, site oficial, universidade, acervo para figuras históricas), verifica a
identidade por visão e monta a cena com **rosto + nome + função**. Rosto jamais é fabricado.

**O gate:** cruzar os nomes próprios do `words.json` com o `format` da cena ativa naquele instante.
Nome de pessoa sobre cena `apresentador` reprova — é barato de checar e pega exatamente esta classe.

---

### ARTE-88 · Coisa concreta citada = imagem REAL dela na tela — sem exceção

O caso que criou a lei (Mateus, 31/jul/2026): no `el-nino`, a seção inteira da **anchoveta** — o
peixe que sustenta "a maior pesca de um peixe só do planeta" — passou **sem uma única foto do
peixe**. Palavras dele: *"a pessoa que está ouvindo sobre o peixe quer VER o que é o peixe."*

**A regra:** quando a narração cita uma coisa CONCRETA — animal, objeto, pessoa, lugar, máquina,
alimento — a tela mostra **a imagem real dela**, não uma abstração. O desenho/ícone pode COMPOR a
cena; não pode SUBSTITUIR o registro real do que se está nomeando.

O teste do editor-de-arte antes de fechar qualquer cena: **"o espectador que nunca viu isso sai da
cena sabendo como isso É?"** Se a resposta depende de imaginação, a cena está incompleta — e a
`pesquisa-imagens` existe exatamente para isso (mídia real é doutrina da casa desde sempre; esta lei
fecha o furo de a coisa NOMEADA ficar de fora).

Casa com a ROT-48 (concretude antes de teoria): o roteiro entrega o concreto na fala, a arte entrega
o concreto no olho. Um sem o outro é meia cena.

---

### ARTE-89 · Footage é o padrão, não o tempero — e ele TROCA antes de cansar

O Mateus mediu no próprio olho (`planetas-algodao-doce` e `el-nino`, 31/jul/2026): *"poucos vídeos
reais ilustrando"* e, quando há footage, *"fica rodando o mesmo vídeo por muito tempo"*. E o estudo
BBC/DW mediu a régua externa: **plano médio de 4,3–4,7 s, 12–14 cortes/min** — as referências trocam
de imagem 3× mais rápido que uma cena nossa de footage único.

**As regras:**

1. **Lugar/evento/fenômeno citado → footage real é a PRIMEIRA opção**, desenho é o fallback (o
   inverso do hábito atual). Desenho e mapa continuam nobres — para conceito, mecanismo e geografia
   — mas não para o que existe em vídeo.
2. **Um footage não passa de ~8 s em tela sem trocar** — corta para outro ângulo, outra imagem do
   mesmo assunto, ou intercala com a camada gráfica. A `pesquisa-imagens` já baixa VARIAÇÕES; a cena
   tem de usá-las em sequência, não escolher uma e esticá-la.
   ⚠️ **SUPERADO PELA [ARTE-106] (04/ago).** O teto de ~8 s é régua PASSIVA — diz quando o plano já
   cansou, nunca quando ele devia ter trocado; os planos que o Mateus pediu no `paises-baixos-mar`
   batem em ~3,4 s e passariam folgados por aqui. Hoje o critério é **quantos objetos a fala
   atravessa**, e o teto sobrevive só como piso de vergonha.
3. **O modelo a seguir é a cena da Califórnia do `el-nino`** (nomeada pelo Mateus como referência):
   footage real de fundo + **relógio/dado no canto inferior direito + texto-explicação no canto
   inferior esquerdo**, as três camadas contando a MESMA história ao mesmo tempo. *"Explicações
   juntas com vídeos"* — o vídeo não é papel de parede; ele é coprotagonista da explicação.
4. **Mapa + imagem real + animação COMBINAM** na mesma cena: o mapa localiza, a foto mostra, o
   gráfico explica. A cena de mapa que só tem mapa está deixando duas camadas na mesa.

---

### ARTE-90 · A cena carrega camadas de informação simultâneas — o recurso "Califórnia"

Formalização do recurso que o Mateus pediu para multiplicar (31/jul/2026): a cena forte da casa tem
**três camadas simultâneas e coerentes**:

| camada | exemplo Califórnia | função |
|---|---|---|
| **fundo** | footage real do temporal | prova visual — "isso aconteceu" |
| **dado ancorado** | relógio no canto inf. direito | o número/tempo que situa |
| **explicação** | texto no canto inf. esquerdo | o que o espectador está vendo e por quê |

As três dizem a mesma coisa por ângulos diferentes — nunca três assuntos. Isso NÃO é poluição
(qc-carga segue valendo): são **âncoras fixas** nos cantos, com o fundo vivo — densidade
informacional SEM densidade de blocos soltos. É o formato broadcast que as referências usam
(GC + relógio + imagem), e é mensurável: fundo real + ≤2 âncoras de canto estáveis.

---

### ARTE-91 · Capa de livro é a capa OFICIAL — desenhar uma bonita é falsificar a obra

Correção do Mateus, 31/jul/2026: *"quando houver indicações de livros, temos que acionar o agente de
caça de imagem pra ir atrás da capa oficial do livro que está sendo citado, e não inventado pelo
Fable com fontes 'bonitas'."*

**Por que isto é mais grave que uma imagem genérica.** A capa não ilustra o livro — ela **é** como o
livro existe no mundo. Quem assistiu e quer comprar procura *aquela* capa na estante e na busca; uma
capa desenhada por nós, com tipografia elegante e o título certo, é uma edição que não existe. O
espectador que confia nela procura um objeto que ninguém vende. E, diferente de uma foto genérica de
"um livro qualquer", a capa inventada **afirma** ser aquela obra — é a mesma família do rosto
fabricado, que esta casa proíbe desde sempre.

**A regra:** livro citado, indicado ou mostrado → a capa vem da `pesquisa-imagens`, da edição real
em circulação, com a fonte registrada. Vale para a indicação de produto do YouTube Shopping, para o
livro citado no meio do roteiro e para a bibliografia na tela.

**Onde procurar, em ordem:** o site da editora (a página do próprio título); as bases bibliográficas
por ISBN; a livraria onde o link de afiliado aponta — a mesma edição, não outra tradução. Confirmar
**olhando** a imagem (Read), como manda a caça de foto: título, autor e selo da editora legíveis e
batendo com o que a narração diz.

**Quando não achar:** não desenhe uma. Mostre o **objeto genérico** honesto (uma pilha de livros, a
estante, a mesa) sem afirmar que aquele é o título, ou traga o título como **tipografia declarada**
— texto na tela, no nosso próprio padrão gráfico, que ninguém confunde com uma capa. A diferença é
que a tipografia declarada **não finge ser** o objeto.

**NO INTERNACIONAL, A CAPA MUDA COM O IDIOMA.** Correção do Mateus no mesmo dia: *"quando for o
composto de cada idioma a capa de livro deve ser no idioma atual da dublagem (inglês, espanhol,
francês e alemão) — precisa ser fidedigno."* A razão é a mesma que criou a lei: o espectador alemão
que vê a capa brasileira vai procurar na livraria dele um objeto que não está lá. **Cada idioma
carrega a capa da edição publicada NAQUELE idioma**, com o título traduzido como a editora o
publicou — nunca a tradução literal do título brasileiro, que quase nunca é o título real da edição
estrangeira. Se a obra não tem edição naquele idioma, isso é informação editorial, não um detalhe de
arte: ou se troca a indicação por uma que exista, ou a cena passa a tipografia declarada. A tradução
de tela **não traduz uma capa** — ela troca o arquivo.

**O caso geral, que vale além de livro:** todo objeto cuja **identidade visual pertence a outra
pessoa** — capa, logo, embalagem, selo, cartaz, rótulo — se busca, nunca se desenha. É o mesmo
princípio de nunca desenhar país à mão (ARTE/PESQ da geometria) e de nunca fabricar rosto, aplicado
à propriedade visual de terceiros. Desenhar "parecido" é pior que não mostrar: cria uma versão falsa
que passa por verdadeira. (Ver ARTE-88 — coisa concreta citada exige a coisa real; aqui a coisa tem
dono.)

### ARTE-92 · MÉTRICA QUE DIVIDE PELA DURAÇÃO REPROVA O CARD CURTO POR ARITMÉTICA — e o autor não tem como consertar
**Medido em 31/jul/2026.** Quatro cenas estavam travadas fora do render em dois projetos, todas
reprovadas no `qc-carga` por RITMO, e todas eram **card de título**:

| card | dur | textos | média | densidade | rajada (pior 1 s) | vida |
|---|---|---|---|---|---|---|
| `orcas-nao-matam/t02` | 3,0 s | 4 | **1,33/s ✗** | 4/9 ✓ | 4/4 ✓ | 2,6 s ✓ |
| `paises-baixos-mar/titulo-02` | 2,3 s | 4 | **1,76/s ✗** | 4/9 ✓ | 3/4 ✓ | 0,7 s ▲ |
| `paises-baixos-mar/titulo-03` | 3,4 s | 4 | **1,18/s ✗** | 4/9 ✓ | 3/4 ✓ | 1,9 s ✓ |
| `paises-baixos-mar/titulo-04` | 2,6 s | 4 | **1,52/s ✗** | 4/9 ✓ | 3/4 ✓ | 1,1 s ▲ |

**A CAUSA É A FÓRMULA, NÃO A ARTE.** `entradas/s = nº de estreias ÷ duração`. Num card de título as
estreias são o próprio conteúdo se estabelecendo **uma vez**; dividir por uma duração curta mede
**brevidade**, não pressa. Com os 4 blocos que um card precisa (kicker + 2 linhas de título +
crédito), a média só cai abaixo do teto de 0,9/s acima de **4,44 s** — e card de título é de 2 a 4 s
por desenho (M26/ARTE-34). **Encurtar o card, que é a decisão editorial certa, era exatamente o que o
fazia reprovar.**

**E O TETO FOI CRAVADO PELO ÚNICO CARD DO CONJUNTO DOURADO — O MAIS LONGO DELES.** O teto de cada
medida do `qc-carga` é, por construção, o máximo observado num dourado. O máximo de estreias/s veio de
`dourados/M01/titulo-5.html`, que é um **card de título com os MESMOS 4 blocos** e passa com
**0,81/s porque dura 4,9 s**. Não há M26 nenhum entre os dourados. Ou seja: a régua foi calibrada no
card mais longo que existia e passou a excluir todos os mais curtos — **a calibração empírica herdou o
viés da amostra, e a amostra tinha um único exemplar da classe.**

**A LEI, e ela é geral:** *toda métrica normalizada por duração precisa declarar a duração mínima em
que ela significa algo.* Abaixo desse piso, quem julga é a medida que **não se dilui** — aqui, a
rajada (entradas na pior janela de 1 s), que continua governando e é ela que protege de verdade contra
despejo de informação. A média segue sendo **medida e mostrada** (dívida escondida é pior que dívida
perdoada em voz alta), só não reprova.

**Conserto:** `qc-carga.mjs` ganhou `DUR_MIN_MEDIA = 4,5 s` (`--dur-min-media` sobrepõe) — logo acima
do ponto onde a aritmética deixa de condenar o card mínimo, e abaixo de qualquer cena explicativa, que
é o objeto para o qual a média foi calibrada. Nenhuma cena que passava passa a falhar: a mudança só
relaxa, e o teto da rajada não mudou.

**⚠️ E HAVIA DEFEITO DE VERDADE ESCONDIDO ATRÁS DO ALARME FALSO — é o motivo de nunca só silenciar um
gate.** Com o RITMO deixando de gritar, o aviso de VIDA ficou visível: no `titulo-02` o **título**
ficava **0,7 s** legível (39 caracteres) e no `titulo-04`, 1,1 s. A causa era um build de **cinco
tempos** (kicker 0,2 → eyebrow 0,4 → num 0,6 → régua 1,0 → **título 1,15**) num card de 2,3 s cujo
fade-out começa em `DUR−0,45 = 1,82 s`: **o assunto do card era a última coisa a entrar e já saía.**
Comprimida a cronometragem preservando a ORDEM do desenho, o título passou a viver **1,6 s** e **2,0 s**.
*Alarme falso não é só ruído: ele é uma cortina na frente do defeito real.*

**Como verificar:** `node scripts/qc-carga.mjs <card>` — a linha de ritmo diz `NÃO julgado` quando a
cena é curta demais, e o número medido continua à vista.

### ARTE-93 · O CARD DE TÍTULO DURA O GAP QUE ELE OCUPA, NÃO O SPAN DO MASTER — e três estações obedeceram o número errado sem que nenhuma estranhasse
**Medido em 01/ago/2026, paises-baixos-mar.** O espelho reservou "gap de 3s" (FIN-17) para cada card
de título, mas gravou em `dur` o span do SILÊNCIO no master: 1,92s (s55) e **0,88s** (s69). O
editor-de-arte obedeceu o `dur` e produziu um card de 0,88s — título ilegível por construção. O
qc-visual **aprovou**, porque julgou a cena "na duração dela": todas as lentes olham para DENTRO da
janela, e dentro de 0,88s a cena estava impecável. Na entrega, o XML abre o gap de 3s e o clipe
ocupa o buraco: **clipe mais curto que o gap = TELA PRETA no resto** (2,1s de preto no caso do s69).

**A LEI:** cena modo `titulo-topico` tem `__duracao` = a do GAP (~3,9s, folga sobre os 3s), NUNCA o
`dur` do espelho quando este for menor. O span do master é só o PONTO DE INSERÇÃO do card — os
irmãos corretos do mesmo vídeo (s04 3,96s · s32 3,90s) sempre souberam disso.

**Raiz tripla, três consertos:** editor-de-arte (contrato §4 ganhou a exceção), qc-visual (card
<3,5s virou gate duro da bancada) e o `ehCard` do `xml-premiere-5camadas.mjs`, que não reconhecia
card nenhum deste projeto por regex de nome — agora lê o `modo` do espelho (commit cb8a066).
*Quando três estações concordam com um número, ninguém confere de onde ele veio.*

**QUARTA raiz, achada 3 dias depois (03/ago, `o-acre`): o `qc-janela` lia esta lei ao CONTRÁRIO.** Ele
comparava o `__duracao` do card com o `dur` do espelho — que é o span da LEITURA no master, exatamente
o número que esta lei manda ignorar. Resultado no `o-acre`: **reprovava os dois cards certos** (s41 4,15
· s58 3,9, ambos citando a ARTE-93 no cabeçalho) e **absolvia o único frágil** (s14, 3,0 justo, margem
zero). Um laudo assim é pior que gate nenhum: quem obedecesse iria travar os cards sadios em 3,0 e
reintroduzir o preto. Agora o gate mede contra o `gapSec` do `_cortes.json` — abaixo do gap REPROVA
(com a conta do preto em segundos), margem <0,3s vira aviso, folga larga vira aviso. Medido no acervo
antes de entrar: `galaxia-arco-flecha` PASS, `uruguai-despovoado` caiu de 5 erros para 1 real + 4
avisos, e um card sabotado para 1,4s volta a reprovar. Régua que vale além deste caso: **gate que
compara contra o campo errado não erra de vez em quando — ele erra sistematicamente, e no sentido de
premiar o defeito.**
*Quando três estações concordam com um número, ninguém confere de onde ele veio.*

### ARTE-97 · O clipe é renderizado em tempo BRUTO e exibido até `cleanDur` — a cauda existe, e ninguém a vê

> 🔀 Nasceu como **ARTE-94** num commit local da VM e colidiu com a lei de mesmo número já publicada no remoto (02/ago). Pela [SIS-62], quem está no remoto fica com o número; esta virou **ARTE-97**. Citação antiga a `ARTE-94` que descreva ESTE assunto aponta para cá.

**Medido no `especies-humanas@arte` (01/ago/2026), a partir de um achado do executor-de-molde.** A
convenção da casa é `window.__duracao` = o `dur` **BRUTO** do espelho — conferido em 3 projetos
entregues (`nilo-nao-secou` 06-dados: `__duracao` 54,267 == espelho `dur` 54,2667). Mas o
`compor-base-youtube` posiciona a cena em `mapSec(inSec)` e fecha a janela em
`Math.min(end, next.inClean − 0,05)`, tudo em tempo **LIMPO**. Resultado: do clipe só se vê de
`t=0` até `t = cleanDur`. **Tudo que o artista puser depois disso é renderizado e nunca vai ao ar.**

**Não é caso raro — é o caso comum.** Neste vídeo, **21 das 25** cenas de arte tinham corte dentro da
própria janela; nos entregues anteriores, 21/30 (`nilo`), 17/29 (`orcas`), 15/58 (`uruguai`). E os
buracos são grandes: `s08` perde 20,8s de 50,15 (**41%**), `s31` perde 27,4 de 70,12 (**39%**), `s25`
— um dos cinco picos — resolve em 37,4s e não nos 56,48 que o `__duracao` anuncia. Numa cena de mapa
o estrago é maior que um corte no fim: o easing do `flyTo` inteiro está no relógio errado, e a câmera
chega ao destino depois de a fala já ter ido embora.

**Por que passa despercebido:** todo gate de cena (`qc-carga`, `qc-contrato`, `check-overlap`,
`shot.mjs`) roda sobre o HTML no relógio BRUTO, onde a cena está perfeita. O defeito só existe na
montagem, e lá ninguém volta a olhar o que ficou de fora. É a família da [FIN-42]/[FIN-44] — dois
relógios, comparação plausível, erro silencioso — mas do lado da ARTE, e a lei daquele lado não
avisava este.

**O ERRO ESPELHO, e ele é pior.** Descoberto horas depois, no mesmo vídeo: **dois agentes
diferentes, sem contato entre si, construíram um remap de "tempo narrativo" que SEGURA a animação
durante os cortes internos**, supondo que o composto emendaria o clipe nas bordas. Ele **não** emenda.
A cena entra por `setpts=PTS-STARTPTS+<start>/TB` e um `overlay=enable='between(…)'` — **deslocada e
tocada LINEARMENTE, sem `trim` nenhum por dentro** (`compor-base-youtube.mjs:343-344`); quem sofre
ripple é só a BASE, montada por `trim` nos keeps (linha 328). No `s40` — um dos cinco picos — isso
virou **11,5s de imagem congelada** no meio da cena: `shot.mjs` em 29,5 · 34,0 · 39,0 devolveu três
PNGs **byte-idênticos** (md5 `6cdefb26…`), e sobraram ~4s dos 44,16 visíveis para a dissolução que
era o gesto inteiro. Um agente cometeu o erro e corrigiu sozinho ao receber a medição; o outro
entregou com ele. **Dois agentes independentes convergindo no mesmo engano não é descuido — é lacuna
de doutrina**, e por isso a regra foi para o `.claude/agents/editor-de-arte.md` §4.0, antes do
contrato.

**A regra, para quem desenha.** (0) **Autore em tempo LIMPO e ponto** — sem remap, sem compensar
corte, sem segurar estado: o `t` do clipe vai DIRETO contra os beats. (1) `__duracao` continua sendo o `dur` BRUTO — **não mude**, o
compositor conta com isso. (2) **O relógio do word-lock é o dos beats da `regencia.json`**, que estão
em tempo LIMPO e relativos ao início da própria cena: o conteúdo nasce no primeiro beat e **RESOLVE
no último**, que é exatamente `cleanDur`. (3) A faixa entre o último beat e `__duracao` é **só ar** —
hold do último estado com câmera viva, nunca beat novo, revelação ou fecho. (4) Em **run fundido**, o
offset da segunda cena dentro do arquivo é `cleanDur` da primeira, **nunca** a diferença dos `inSec`
brutos (essa conta ignora os cortes e foi o erro que eu mesmo mandei no briefing desta produção).
(5) Todo briefing de arte passa a trazer o `cleanDur` ao lado do `__duracao`, nunca o `dur` sozinho —
número que só aparece acompanhado não deixa o leitor inventar a conta errada.

### ARTE-95 · Crédito que os gates não enxergam nasce pequeno — e o gate acusa a cena que creditou
**Medido no `especies-humanas@qc` (01/ago/2026).** O `qc-atribuicao` reprovou o `s08` por usar a foto
`Neanderthal_man_reconstruction…jpg` (CC BY-SA 2.0, Werner Ustorf) **sem crédito na tela**. Só que o
crédito ESTAVA lá — pílula escura, texto completo com autor e licença, entrando em 4,60 s, e o autor
até citou a [ARTE-82] no comentário. O que faltava era **a marcação**: o `txt()` da cena aceita
`papel:` (vira `data-qc-papel`) e ninguém passou `papel:"credito"`.

**O dano não é o falso positivo — é o que a cegueira permitiu do outro lado.** Sem marcação, o
crédito também some do `qc-tamanho`, que mede **por papel declarado** (pisos 4K: herói 260 · rótulo
104 · eixo 72 · **crédito 72**). Livre da régua, ele nasceu em **38px**. E não foi acidente isolado:
as **quatro** cenas de mapa do vídeo creditam a base cartográfica em **36, 36, 40 e 42px** — metade
do piso, em 3840 de largura, escrito por três agentes diferentes que nunca se falaram. Todos os
gates verdes. Atribuição que o espectador não consegue ler cumpre a licença no papel e falha no
objetivo dela.

**A regra.** (1) **Todo elemento de crédito nasce marcado** — `data-qc-papel="credito"` no HTML, ou
`papel:"credito"` no helper de texto SVG. Sem isso ele é invisível aos DOIS gates que existem para
ele. (2) **Piso 72px no palco 4K vale para crédito NO PALCO**, inclusive o de base cartográfica
(MapTiler / OpenStreetMap) e o de geometria — a pílula acompanha a altura, não o contrário. Texto
longo demais para caber a 72 numa linha vira DUAS linhas (foi o conserto do `s08`), não uma linha
menor. (3) **A exceção é o crédito dentro de um card**, e ela é real: no `s09` os créditos moram
dentro de vitrines de 1250px com `white-space:nowrap` — a 72px o mais longo mediria ~1900px e
sangraria a moldura. Ali a régua é a PROPORÇÃO (48px num card de 1250 equivale a ~148px no palco
cheio), não o absoluto. Subir o número sem olhar o continente do texto troca ilegibilidade por
sangria, que é pior. (4) Generalização que vale além do crédito: **gate que mede por papel declarado
é cego a quem não se declara**, e a falha se disfarça de aprovação. Elemento novo em cena entra com
o papel dito; o que não tem papel não tem régua, e o que não tem régua encolhe.

### ARTE-96 · `FeatureCollection` de países em camada de linha acende as fronteiras internas
**Medido no `especies-humanas@qc` (01/ago/2026), cena `s08`.** A cena abre com o destaque do
território europeu word-locked na primeira palavra da narração — "Europa". A fonte era
`assets/geojson/europa.json`, uma `FeatureCollection` com 38 países como Features separadas, e as
camadas `eu-glow`/`eu-case`/`eu-line` do MapLibre desenham **uma linha por polígono**. O que acendeu
não foi um continente: foi o mapa político da Europa, com Alemanha, Polônia, Ucrânia e os Bálcãs
brilhando cada um com seu contorno — num beat sobre a Europa da Idade do Gelo, onde nenhuma daquelas
fronteiras existia. O comentário do próprio código prometia "TERRITÓRIO INTEIRO aceso".

**Por que nenhum gate pegou:** `qc-contrato`, `check-overlap`, `qc-tamanho`, `qc-fora-do-quadro` e
`qc-src-existe` mediram tudo certo — a geometria é real, os tiles são a base única, nada colide,
nada sangra. Não existe gate que pergunte *"o que esta camada DESENHA é a forma que a cena
promete?"*. Só o frame pega, e só com a ferramenta certa: `shot.mjs` dá falso-negativo em cena de
mapa (chama `__prepararCaptura()`, que dispara `jumpTo`, antes de esperar `__ready`) — quem achou
foi uma recaptura com `scripts/maprender.mjs`, que espera na mesma ordem do render real.

**A regra.** (1) **Camada de LINHA sobre `FeatureCollection` multi-país é defeito por construção** —
dissolva antes. O contorno único de um continente/região se gera uma vez e vira asset
(`assets/geojson/europa-contorno.json`: união das 38 features com `polygon-clipping`, 10 anéis, 474
vértices, 7,7 KB). Fill sem outline pode usar a coleção crua; linha, glow e case, nunca.
(2) **Confira o recorte antes de dissolver**: o `europa.json` do acervo carrega a França *com a
Guiana Francesa* — 19 vértices na América do Sul que a união propaga para o bbox. O recorte curado
que a cena usava inline não tinha. União é operação que herda o lixo da entrada em silêncio.
(3) **Fronteira política moderna sobre cena pré-histórica é anacronismo visual**, mesmo quando a
geometria é real. Geometria real não é o mesmo que geometria certa para a época.
### ARTE-94 · O MUNDO REAL NÃO É O QUE SOBRA DO STOCK — a direção conta a própria mídia, e tese vertical é M04 obrigatório
**Medido em 02/ago/2026, `paises-baixos-mar`.** Vídeo sobre um país que vive **abaixo do nível do
mar** — tese topográfica do título ao fecho — entregue com **4,1% das cenas ancoradas em mídia real**
(86 de 97 marcadas `"construída"` no `conceito-visual.json`) e **zero** cenas `mapa3d`, num plano com
**8 cenas de argumento vertical** e 18 declarando `needs.geo`. A `_media/` inteira: 2 PNGs de
documento, 1 bandeira, o master e a trilha — **zero footage, zero foto**. Mateus: *"o vídeo também
ficou inteiramente desenhos praticamente… Tampouco mostrou o país de lado na água com a terra (visão
drone)… poderia ter usado mapas animados do MapTiler em 3D com elevação de terreno (nós pagamos a API
paga do MapTiler, você já sabe disso e já deveria saber)."*

**A CAUSA, e ela não é preguiça:** a biblioteca de stock estava fora do ar por re-login, e a direção
converteu o vídeo inteiro em desenho. **Erro de categoria** — confundir um canal de suprimento com o
mundo. Mapa (satélite + DEM, assinatura própria), documento, arquivo, foto oficial e dado real
continuavam disponíveis o tempo todo. *`"construída"` responde a "não existe registro disto", nunca a
"não consegui baixar".*

**⚠️ A régua NÃO é "% de desenho", e medir errado aqui custa o gate.** No acervo inteiro (15 espelhos)
a proporção de desenho vai de **54,3% (senna) a 82,2% (oceano-700km)**, e o condenado ficou em 76,9%
— dentro da faixa. Maioria desenho é o normal da casa. Quem denuncia é a **âncora**: simpsons 68,3 ·
avioes 59,7 · senna 53,3 · oceano 41,4 │ planetas-algodao-doce 10,7 · paises-baixos **4,1**. O piso de
**25%** mora na banda vazia entre 10,7 e 41,4, e só cobra onde o espelho declara lugar real
(`needs.geo` ≥ 5) — os 10,7% do `planetas-algodao-doce` são legítimos, porque não existe registro de
um exoplaneta de algodão-doce.

> ⚰️ **SUPERADA EM PARTE pela [ARTE-323] (16/set/2026) — só na frase «Maioria desenho é o normal da
> casa».** Ela descrevia o acervo de 02/ago; não era decisão do dono, e a fala dele de 16/set pede o
> contrário (*«quero mais vídeos e fotos reais… preciso de footages reais»*). A régua de «% de desenho»
> continua sem separar o bom do ruim; a que separa é a parcela de imagem do mundo em SEGUNDOS, sem
> documento e sem mapa. O resto desta lei — âncora contada, fornecedor caído vira `FALTA`, M04 em tese
> vertical — continua valendo.

**A LEI, em três partes:**
1. **A direção CONTA a própria mídia antes de entregar** — asset real × `construída` × `FALTA` ×
   `ESCALAR` — e declara a conta no report. O desequilíbrio não aparece em cena nenhuma isolada, só
   na soma.
2. **Fornecedor caído vira `FALTA` ou `ESCALAR`, nunca `construída`.** E âncora que cita arquivo
   inexistente é pior que falta declarada: a falta é acionável, o fantasma passa.
3. **Tese vertical ⇒ `mapa3d` (M04) obrigatório.** Quando a frase argumenta altura, profundidade ou
   inclinação, quem prova é a elevação real. No acervo o M04 aparece **3× em 918 segmentos de 15
   produções** (0,3%) — capacidade construída, paga e não usada.

**⚠️ E O PASSEIO DE DRONE NÃO RESOLVE RELEVO DE POUCOS METROS — aritmética, não intuição.** Em plano
largo de país cada pixel do palco 4K cobre centenas de metros: 7 m de desnível com `exaggeration` no
teto de 5–8× dá **fração de pixel**. As cenas de mapa deste projeto já subiam a 5,6 e o relevo
continuava chato. A resposta é o **CORTE DE PERFIL** — amostrar o DEM ao longo de um transecto e
desenhar a seção com **eixo vertical próprio e escala declarada**. Provado com a nossa chave em
02/ago: `terrain-rgb-v2` devolve **Schiphol −4,5 m** e **Vaalserberg +320,8 m** (oficial +322,7), a
água achata em **0 m** — a linha d'água sai de graça —, e um transecto de 60 pontos cruzando o país
deu **13 amostras abaixo de zero, mínimo −6,1 m**. Fórmula:
`alt = -10000 + (R*65536 + G*256 + B) * 0,1`.

**Raiz tripla, três consertos:** `diretor-de-arte` (OFÍCIO §6b — piso de mundo real, stock caído ≠ sem
registro, requalificação em voz alta; CONTRATO §3.0 — as QUATRO formas de `midia_ancora`, com
`ESCALAR` nova), `regente-de-imagem` (OFÍCIO §3 — a dispensa de registro real passa a exigir MOTIVO,
não rótulo; CONTRATO — `censo_registro` e os tipos `mapa_relevo`/`documento_real`) e `mapista`
(OFÍCIO §5b/§5c — quando o 3D é obrigatório e como se faz o corte de perfil). Fato do DEM em
`knowledge/MAPTILER-CATALOGO.md` §3.1.

**Como verificar:** `node scripts/qc-direcao-real.mjs <proj>` — mede a âncora real, acusa âncora que
aponta arquivo inexistente e acende quando a tese é vertical sem nenhuma cena `mapa3d`. Calibrado
contra os 15 espelhos do disco: **13 passam**, acende só em `paises-baixos-mar` (as três coisas) e
`oceano-700km` (tese vertical). Irmão pós-arte, que cobra o `<video>/<img>` vivo no HTML:
`scripts/qc-midia-real.mjs` (PESQ-29).

---

### ARTE-98 · A IDENTIDADE DA MÍDIA É O CONTEÚDO, NÃO O CAMINHO — e gate que só reprova depois do 4K chega tarde
🔀 *Nasceu como ARTE-95 e foi renumerada (SIS-62): outra sessão registrou a 95 no mesmo dia.*
**Medido em 02/ago/2026**, quando o Mateus perguntou sobre o `senna`: *"Que tanta media tem sendo que
as cenas repetiam a mesma foto 500x? Isso foi corrigido, por sinal?"* — **não tinha sido**. A ARTE-60
existia desde 25/jul e o `qc-repeticao.mjs` nasceu com ela; ainda assim, na produção da VM naquele
dia: `senna` com **7 mídias repetidas** (a pior em **6 de 70 cenas**) e `galaxia-arco-flecha` com
**10** (a pior em **9 de 36**). Lei escrita e gate escrito não bastaram, por três razões distintas —
e cada uma vira regra.

**1 · O gate comparava CAMINHO; a tela mostra CONTEÚDO.** O mesmo arquivo salvo em duas pastas, ou
com dois nomes, passava como duas mídias diferentes. `orcas-nao-matam` reportava **zero** repetições
e tem 163 MB do MESMO vídeo em quatro pastas (`c01`, `c05`, `t01`, `t03`) servindo quatro cenas — uma
delas com nome trocado (`orca_wild_swimming_close` × `..._pod`), o que derrota também qualquer
comparação por NOME. Na casa inteira: **5 grupos de gêmeos-por-conteúdo, 21 cenas, 1,18 GB de bytes
redundantes**, invisíveis a quem só olhava `src`. *Identidade de mídia é hash, não string* — e em
dois estágios (tamanho → só nos empates o hash) isso custa quase nada.

**2 · O gate rodava na estação errada.** A única chamada viva era o `finalizar.mjs` — **depois** do
render 4K, e advisory. Achar ali que a mesma foto está em 6 cenas custa re-caçar mídia, refazer arte
e re-renderizar; achar no `top10 qc <proj>` custa trocar um `src`. O SIS já diz que *regra sem gate é
regra morta*; o complemento é que **gate na estação errada é regra igualmente morta — só que com um
relatório para provar que ninguém agiu**. Todo gate nasce declarando em que estação a reprovação
ainda é barata.

**3 · Alarme falso comeu a autoridade do gate.** O filtro de símbolo cobria `flags/` e `logos/` mas
não `flag-uy.png` (bandeira fora da pasta) nem `logo/` no singular. Resultado: a PIOR acusação do
`uruguai-despovoado` era a bandeira do Uruguai — repetição **correta**, símbolo identifica — e o
`galaxia-arco-flecha` era acusado pelo logo da MNRAS. Quem lê duas acusações erradas para de ler a
terceira. A família de nomes de símbolo é ampla de propósito: **quem batiza o arquivo não consulta o
gate.**

**A RÉGUA DE SEVERIDADE, derivada do acervo** (35 assets repetidos em 11 projetos com ≥5 cenas):
2 cenas ×27 · 3 ×3 · 4 ×2 · 6 ×2 · 9 ×1. O joelho está entre 3 e 4 — **86% das repetições da casa
vivem em 2–3 cenas**, e a cauda de ≥4 é exatamente onde estão os dois casos que o Mateus VIU. Daí:
**GRAVE = a mesma mídia em ≥4 cenas** (reprova no pré-render) · **ALERTA = 2–3** (relata, não
bloqueia). Reprovar já em 2× pararia 6 dos 9 projetos medidos, e gate que para tudo é gate que se
aprende a ignorar.

**⚠️ E não confunda PESO DE PASTA com repetição na tela.** A mesma pergunta trazia *"69 GB de
`_media`"* como suspeita de mídia repetida. Medido: dos **68,90 GB** do `senna`, **67,34 GB (97,7%)
são UM master em dois codecs** — `_master-decupado.mov` (ProRes 422 LT, 60,26 GB, criado 31/jul pela
decisão de editabilidade do XML) e o `.mp4` de que ele foi transcodado (7,08 GB), a MESMA duração de
1498,567 s. A mídia de pesquisa inteira são **1,56 GB em 115 arquivos** — 2,3%. Disco cheio e tela
repetitiva são dois problemas, e o tamanho da pasta não mede nenhum dos dois.

**Como verificar:** `node scripts/qc-repeticao.mjs <proj|out/proj> [--grave] [--limite=N]` — funde
por hash de conteúdo, ignora símbolo (bandeira/logo/brasão) e separa GRAVE de alerta. Roda com
`--grave` no `top10 qc out/<proj>` (pré-render, **bloqueia**) e no modo cheio dentro do
`finalizar.mjs` (advisory, para o laudo do qa-montagem). Antes/depois medido nos 9 projetos da VM:
**2 alarmes falsos removidos, 4 repetições reais encontradas em projeto que reportava limpo, zero
regressão.**

---

### ARTE-99 · MÍDIA REAL AMONTOADA PASSA EM TODOS OS GATES — a razão não tem relógio
**Medido em 03/ago/2026, nos 22 espelhos do acervo (Mac + VM).** Mateus, sobre a `orcas-nao-matam`
recém-finalizada: *"Garanta que a orca que finalizou agora e os demais projetos também tenham bastante
FOOTAGES de vídeos, imagens, desenhos, mapas, mapas 3D, variações de tudo (quando há necessidade — e
ver como que está esse julgamento de quando entra cada coisa, pois pode estar mal calibrado também)."*

O julgamento **de quando entra cada linguagem** foi calibrado em 02/ago pela [ARTE-94] e pelos três
gates do eixo. O que ninguém tinha medido é **onde** aquilo cai na linha do tempo — e é ali que estava
o defeito.

**OS TRÊS GATES DO EIXO SÃO TODOS RAZÕES, E RAZÃO NÃO TEM RELÓGIO.** `qc-espelho-midia` (cenas que
pedem ÷ cobertura), `qc-direcao-real` (âncoras reais ÷ dirigidas) e `qc-midia-real` (HTMLs com mídia
viva ÷ cenas) respondem *quanto*. Nenhum responde *onde*. Consequência medida, e ela inverte o
ranking: os **dois projetos com a melhor razão do acervo** — `oceano-700km` e `energia-escura`, ambos
em **100%** no `qc-espelho-midia` — são os que têm **11min18s** e **9min04s** contínuos sem um único
`footage|foto|drone` na tela. O pior de todos, `nilo-nao-secou`, atravessa **15min06s (906 s, 22 cenas
seguidas)** sem uma imagem real, num vídeo sobre o rio Nilo. Os três gates passam limpo nos três.

**A DISTRIBUIÇÃO É BIMODAL, NÃO UMA RAMPA** — por isso o piso não é opinião. Maior janela contínua sem
registro real, 21 espelhos comparáveis, em segundos:

    0 · 0 · 33 · 42 · 55 · 57 · 61 · 69 · 94 · 99 · 104 · 130 · 133 · 134 · 136
    ╎ BANDA VAZIA DE 98s ╎
    234 (orcas) · 426 (especies-humanas) · 544 (energia-escura) · 563 (el-nino) · 678 (oceano) · 906 (nilo)

Quinze projetos abaixo de 136 s, seis acima de 234 s, **nada no meio**. O piso de **180 s** cai no
centro da banda vazia. A segunda medida confirma sem depender do corte: a **fração do vídeo dentro de
janelas > 180 s** é **0% em todos os 15** que passam e **24% a 85%** em todos os 6 que acendem — zero
faixa cinzenta, que é a condição que a [ARTE-77] exige antes de fixar limiar.

**⚠️ NÃO É "DESENHO DEMAIS", E MEDIR ASSIM DE NOVO CUSTARIA O GATE.** A [ARTE-94] já provou que a
proporção de desenho na cobertura vai de 54,3% a 82,2% no acervo inteiro: maioria desenho é o normal
da casa, e régua nesse eixo reprova tudo ou nada. Aqui o eixo é outro — **o mesmo vídeo pode ter
metade da cobertura em mídia real e ainda assim ter um deserto de quinze minutos, se a mídia estiver
toda amontoada num ato.** Razão e distribuição são duas perguntas; só uma tinha gate.

> ⚰️ **SUPERADA EM PARTE pela [ARTE-323] (16/set/2026) — só no título e na frase «maioria desenho é o
> normal da casa» do parágrafo acima.** O dono reprovou em 16/set um vídeo com 10,6% do tempo de
> cobertura em imagem do mundo. A régua que ele condena é a de «% de desenho por modo», e ela continua
> condenada; a parcela do mundo em SEGUNDOS, sem documento e sem mapa, é outra régua e tem gate próprio
> (`qc-piso-real`). O relógio desta lei — deserto acima de ~180 s — continua valendo.

**⚠️ E A TAXA DE PEDIDO CONTA INTENÇÃO, NÃO RESULTADO — cuidado ao lê-la como se contasse.** O
`pedeReal` do `qc-espelho-midia` aceita `midia_termos` preenchido, e `midia_termos` numa cena
`midia:"animacao"` é ambíguo por construção: em `heranca-sem-herdeiros` vale *"Thomas Piketty retrato
foto real"* (pedido genuíno de foto), em `energia-escura` vale *"balão inflando com pontos"* e *"seta
de gravidade"* (direção de desenho). São **106 de 1077 cenas de cobertura (9,8%)** em 7 projetos, e é
o que leva `oceano` e `energia-escura` a 100%. **Isto NÃO é bug do gate irmão** — a hipótese de que
`midia_termos` em cena de animação fosse sempre direção de desenho foi testada e **não sobreviveu aos
dados** (4 dos 7 projetos usam o campo corretamente). É limite do que o espelho permite saber. A saída
não é apertar aquela razão: é medir o que não depende de intenção — o relógio.

**A LEI:** *o registro real tem de estar DISTRIBUÍDO, não só presente.* Nenhuma janela contínua acima
de ~180 s sem `footage|foto|drone` na tela. Quando a janela existe, o conserto barato é na estação do
espelho e quase sempre já está escrito lá dentro: **quebre-a com uma coisa que a fala JÁ nomeia** —
elas passam despercebidas porque cada cena, isolada, está certa.

**Casos com a citação, para calibrar o olho** (a fala nomeia, e a tela não mostra):
`uruguai-despovoado` s37, 42,7 s em `split/animacao`: *"Do outro lado do Rio, a Argentina tem
exatamente o mesmo pampa… E bem na beira do Rio, cresceu Buenos Aires, uma cidade gigante com uns 15
milhões de pessoas"* · `especies-humanas` s31, **70,1 s** em `dados/animacao`: *"Uma equipe de
cientistas na China, liderada pela pesquisadora Qiaomei Fu, pegou seis dentes de Homo erectus"*
(pessoa real nomeada + fóssil fotografado, zero foto) · `especies-humanas` s29, **81,7 s** em `mapa`
2D: *"vive nas montanhas mais altas do planeta, no Tibete, a quase quatro mil metros de altura"*
(tese de altitude em mapa plano — a [ARTE-94] manda M04) · `paises-baixos-mar` s42, 37,5 s em
`dados/animacao`: *"É a província mais nova do país: só virou província oficial em 1986. Boa parte
desse chão novo virou canteiro de flor"* (Flevoland: terra tirada do mar e campo de tulipas, duas das
paisagens mais fotografadas do planeta).

**⚠️ A MONOTONIA DA CASA NÃO É "N CENAS SEGUIDAS DO MESMO MODO" — é CENA LONGA.** Medido: a maior
corrida de modo igual em todo o acervo é **7** (`paises-baixos-mar`, desenho ×7), mediana **3** — o
aviso de "3× seguidas" do `checar-plano.mjs` é quase inerte por isso. O que cansa é a **duração**: 21
cenas de `desenho` passam de 45 s, a mais longa tem **106,9 s**, e há uma de `desenho` com **97,6 s**
(`nilo-nao-secou`) e uma de `mapa` 2D com **81,7 s** (`especies-humanas`). Contar cenas não pega isso;
contar segundos pega.

**Capacidade morta que a distribuição denuncia:** `mapa3d` (M04) = **6 em 1528 segmentos (0,39%)**, em
5 de 22 projetos; `drone` = 3; `split-footage` = 0. Doze projetos nunca usaram M04. A [ARTE-94] já
mandou usá-lo em tese vertical; o `qc-direcao-real` acende só com **≥4 cenas verticais e zero
mapa3d**, e por isso pega o vídeo de tese vertical (`paises-baixos-mar`, `oceano-700km`) e **não pega
a cena solta** — Tibete a 4.000 m, Andes, o ponto mais alto do Uruguai a 514 m, todos em mapa 2D.
Limiar de projeto não enxerga defeito de cena, e apertá-lo produziria alarme falso; quem fecha esse
vão é o olho do `regente-de-imagem`, com o tipo `mapa_relevo` que ele já tem.

**Raiz e conserto:** `montador` (CONTRATO §2.3 — a maior janela entra no report ao lado da taxa; §3
checagem 12) e o gate novo. Os três gates irmãos **não mudam**: eles medem razão, e razão continua
sendo a pergunta certa deles.

**Como verificar:** `node scripts/qc-deserto-real.mjs <proj> [--duro] [--piso=180]` — mede a maior
janela contínua sem registro real e a fração do vídeo em deserto. Roda no `top10 espelhar` (estação do
espelho, onde o conserto custa uma linha; **advisory, não bloqueia**). Validado nos 22 projetos:
**12 PASS · 6 alerta · 2 exit 2** (`compilado-previsoes-jiang` e `publi-manual` não têm o campo
`midia` — indefinido não reprova).

---

### ARTE-100 · Gate escrito e nunca chamado é o mesmo que gate inexistente (03/ago/2026)

**O que aconteceu.** A [ARTE-99] destilou o defeito do registro real AMONTOADO e nasceu com ferramenta
própria: `scripts/qc-deserto-real.mjs`, que mede a maior janela contínua sem `footage/foto/drone`. Horas
depois, o `nilo-nao-secou` chegou ao **render 4K** com **876 s (14min36s) de deserto** e 72% do vídeo
dentro de janelas acima do piso de 180 s. Nenhum gate reclamou.

**Por quê.** Uma busca por quem invocava o script devolveu: o próprio script, o `montador.md`, e os
arquivos de leis. **Nenhuma estação do pipeline o chamava.** O gate existia, estava correto, media a
coisa certa — e nunca rodava. Pior: também não existia na VM (foi escrito no Mac e o código não chega
sozinho à máquina que produz, [SIS-76]), então mesmo quem quisesse chamá-lo receberia `Cannot find
module`.

**O custo de descobrir tarde.** O laudo custa ~1 s e lê só o `espelho.json`. Rodando na saída da
DECUPAGEM/ESPELHO, o conserto é reescrever linhas de um JSON. Rodando depois — como aconteceu — cada
cena convertida **joga fora um clipe 4K já renderizado**, que é máquina e inferência pagas. O gate certo
no lugar errado tem o preço do lugar, não do gate.

**A régua.** Todo gate nasce com **três** coisas, não uma:
1. o script que mede;
2. a **linha na estação** que o invoca, no ponto mais BARATO da linha (onde o conserto ainda é texto);
3. a resposta do que fazer quando ele acende — para **qual agente** volta e o que se pede a ele.

Gate sem (2) é documentação. Gate sem (3) é alarme que ninguém sabe atender, e vira ruído em duas
semanas ([ARTE-77]).

**Verificação:** ao criar ou citar um gate, `grep -rl <nome-do-gate> scripts/estudio/estacoes/` tem de
devolver **pelo menos um arquivo**. Se devolver vazio, o gate não existe na prática — só no papel.

### ARTE-101 · Máscara de revelação não é caixa apertada — o gate de recorte precisa perguntar "cabe em ALGUM instante?" (03/ago/2026)

**O que aconteceu.** A `s01` do `paises-baixos-mar` — a **cena de ABERTURA do vídeo** — ficou barrada no
`_portao.json` com `["fora-do-quadro"]`: *"4 texto(s) cortado(s) pela borda"*. A cena estava impecável.
Os quatro achados eram falsos, em duas famílias:
- o título `VIVER ABAIXO DO MAR` mora num `#tituloClip` com `overflow:hidden` e **sobe para dentro dele**
  (`top` 1000→630 px entre 15,3 s e 16,35 s). O gate mediu no meio da subida — *"baixo 213px"*,
  *"baixo 41px"* —, que é exatamente o gesto, não o defeito. No frame de 17,0 s o título está inteiro;
- `+8` e `+4` são números de uma **fita de altímetro**, que por construção rola atrás de uma janela
  recortada. Cortes de 18 e 29 px, com o número perfeitamente legível no frame.

**Por quê o gate não via.** O `qc-fora-do-quadro.mjs` já tinha a peneira certa — *"quem saiu inteiro
estava em trânsito"* —, mas ela pergunta se o texto saiu do **PALCO**. Texto recortado por contêiner
**nunca sai do palco**: ele fica ali, mascarado. A régua do contêiner (nascida em `ataque-agua-bahrein`)
foi acrescentada sem o par temporal que a régua da tela já tinha.

**O custo real, e é por isso que isto é ARTE e não SIS.** Alarme falso não é só ruído: ele **destrói
trabalho**. Aqui a cena reprovada fez matar um render 4K em curso, e a abertura do vídeo ficou órfã da
fila. Um gate que grita em cena impecável ensina a ignorá-lo — e no dia em que ele acertar, ninguém
olha ([ARTE-77]).

**⚠️ E ISTO ERA REINCIDÊNCIA.** O diário do MESMO projeto, dois dias antes (01/ago, estação render):
*"s10 renderizada a mão pelo Mateus após alarme falso do gate fora-do-quadro"*. O dono do canal
contornou o gate manualmente, o vídeo seguiu — e **ninguém consertou o gate**. Três dias depois ele
barrou a cena de abertura do mesmo vídeo. Contornar um alarme falso resolve a cena e **preserva o
defeito**: da segunda vez ele cobra de novo, mais caro. Alarme falso não se contorna, se conserta —
é a rotina do agente-raiz aplicada a gate, e vale mesmo quando o contorno é trivial.

**A régua.** Corte é defeito quando é **permanente**; enquanto o elemento atravessa a máscara, é
coreografia. Operacionalmente: **se em algum instante da varredura o texto coube INTEIRO dentro do
contêiner que o recorta, o corte era trânsito** — máscara de revelação, instrumento rolante, carrossel.
O defeito que criou a régua continua acusado, porque ele nunca cabe: a linha decepada pelo cartão em
`ataque-agua-bahrein` nasce cortada e assim permanece.

**Antes de "consertar" cena reprovada por recorte, OLHE O FRAME no instante em que o gate parou de
reclamar** — não só no instante em que ele reclamou. Custa um `shot.mjs` e evita mandar um editor de
arte desmontar uma animação correta.

**Verificação:** `node scripts/qc-fora-do-quadro.mjs <cena.html>`. Provado nos dois sentidos em 03/ago:
a `s01` passa a *"nada cortado, nada invisível"*, e um caso sintético de texto decepado em definitivo
por um cartão continua reprovando (*"pelo contêiner: baixo 50px (desde 0s)"*).

---

**ARTE-102.** **DATELINE NA TELA É AFIRMAÇÃO SOBRE A IMAGEM AO LADO — imagem de outra época ou se
troca, ou se rotula ARQUIVO.** Quando a cena crava lugar+data ("IMOLA · 1º DE MAIO DE 1994"), o
espectador lê tudo no quadro como registro **daquele dia**. Não existe leitura neutra: a legenda
data a foto por justaposição, mesmo que ninguém tenha escrito que a foto é de lá.

**O caso (senna `s75-entrevista-premonicao`, medido 03/ago/2026).** O kicker afirmava *"A ÚLTIMA
ENTREVISTA · IMOLA · 1º DE MAIO DE 1994"* sobre um retrato de Senna de macacão **John Player Special
da Lotus** — monograma JPS no peito, NACIONAL, elf, Goodyear, Olympus: libré de **1985/86**. Em
1º/mai/1994 ele corria pela **Williams**, macacão branco-e-azul Rothmans. Nove anos e duas equipes de
distância, num canal de 9,80 mi de brasileiros que conhecem as pinturas de cor. O cabeçalho do próprio
HTML já admitia que o frame real de Imola-94 era lacuna e que a foto entrava como *memória* — mas
**nada na TELA dizia isso**, e tela é o que vai ao ar.

**O conserto que vale, na ordem.** (1) Se existir registro real e NÍTIDO do evento, troque a imagem.
(2) Se não existir, **NÃO apague a dateline** — ela situa o beat e está certa; quem está errada é a
imagem. Rotule a foto como arquivo **dentro da linha de crédito que já existe**: `Foto: Fulano · CC
BY-SA 2.0` vira `Arquivo · 1985 · Foto: Fulano · CC BY-SA 2.0`. Zero bloco de texto somado, portanto
zero custo de carga, e a atribuição fica honesta.

**⚠️ Não troque um erro factual por um erro de resolução.** A recomendação automática de QC mandava
substituir por uma foto "sem macacão" que estava no disco — 1024×691. O painel da cena é uma faixa
**1500×2160** que desenha a imagem a **1760×3440**: a substituta subiria ~5× e chegaria borrada. Meça
o box de destino ANTES de aceitar troca de asset; num canal que recusa HD por doutrina, imagem mole é
defeito tão caro quanto data errada. A original tinha 4312×8428 e ficou.

**A régua geral.** Toda cena que exibe data/lugar afirmativos responde: *"a imagem deste quadro é
DESTE evento?"* Se a resposta for não, ou entra imagem do evento, ou entra a palavra **ARQUIVO** com
o ano verdadeiro. As duas saídas são honestas; o silêncio não é.

**Agente-raiz:** `editor-de-arte` (montou o par legenda×foto) e `pesquisa-imagens` (entregou retrato
de outra temporada para um beat datado, sem marcar a época no nome nem na pauta).

**Verificação:** `node scripts/shot.mjs <cena.html> <t> <png>` no instante em que a dateline e a
imagem estão juntas no ar, e OLHAR o frame — libré, macacão e patrocínio datam a foto melhor que
qualquer metadado. Na `s75` o crédito lê hoje *"Arquivo · 1985 · Foto: J. P. Donoso · CC BY-SA 2.0"*
e o `qc-cena` passa nos 8 gates (contrato, carga, colisão, tamanho, til-Bold, src-existe,
fora-do-quadro, mapa-vivo).

### ARTE-103 · Footage que não se move é imagem parada com custo de vídeo (04/ago/2026)

Mateus, revendo o `paises-baixos-mar`: *"a s11 ficou com render travada"* e *"a s39 usou um footage de vídeo
MUITO ruim"*. Fui atrás do render e não achei defeito nenhum: 10 amostras de hash ao longo do clipe, **nenhuma
repetida**; zero erro de demux; o HTML mapeia o tempo 1:1 (`currentTime = tt`), sem esticar; a janela do XML não
pede além do que o clipe tem. Tecnicamente, o clipe **anima**.

O que ele viu foi outra coisa: em **4,2 segundos o drone não sai do lugar**. O plano é um sobrevoo tão lento que
a cidade fica na mesma posição do primeiro ao último frame. A narração, por cima, fala de um bairro no fundo de
um lago que secou.

Nenhum gate viu, e não viu por construção: todos perguntam *"os pixels mudam?"*. Mudam — por ruído de compressão
e por um deslocamento de metros. A pergunta certa é outra: **essa imagem está indo a algum lugar enquanto a voz
está?**

> **A lei:** *movimento não é a diferença entre frames vizinhos, é o deslocamento ao longo da JANELA.* Um plano
> de drone que percorre menos que o próprio enquadramento em 5 s é foto cara. Na caça, o critério não é "é
> vídeo" — é *tem trajetória*: a câmera vai de algum lugar para outro, ou algo entra e sai do quadro.

Onde nasce e onde se conserta: **na caça**, não no render. O `pesquisa-imagens` precisa julgar deslocamento antes
de baixar (e a prova é barata: dois frames distantes do candidato, e olhar). O `qc-visual` ganha a mesma pergunta
na lente de cadência. Irmã da [ARTE-102] e do que o Mateus pediu como norma: *a tela acompanha o que a voz diz*.
➡️ **A mesma régua aplicada a MAPA é a [ARTE-111]** — lá o defeito tem nome de câmera (zoom picado × órbita
contínua) e a medida do deslocamento é obrigatória, porque mapa parado engana o gate com mais facilidade
ainda que drone lento: ele *renderiza*, e é isso que os gates de mapa conferem hoje.

### ARTE-104 · Crédito de base de mapa não vai para a tela — vai para a descrição (04/ago/2026)

⛔ **E ELA VALE SÓ PARA BASE DE MAPA — ampliar para foto/vídeo INVERTE a lei (medido em 05/set/2026).**
A base cartográfica é serviço que a casa **paga** (MapTiler), e o dono foi categórico sobre ela. Uma
foto sob licença **CC BY** é o caso oposto: a atribuição é a **condição da licença** — tirá-la do
quadro não limpa a tela, descumpre o contrato de uso da imagem.

Medido no `tunel-trem-bala-japao`: uma sessão citou esta lei para remover `Foto: くろふね · Wikimedia
Commons · CC BY 3.0` da cena `s26`, e a lente **`fonte` reprovou com nota 3** — porque o que sobrou
no rodapé (`Fonte: JR Hokkaido`, que é o dado) passou a ser lido como crédito da imagem, atribuindo
a foto a quem não a fez. *Aplicar uma lei fora do escopo dela não produz silêncio: produz uma
afirmação errada.*

**A régua, em uma linha:** base de mapa e dado pago → descrição do vídeo. Imagem cuja licença exige
atribuição (CC BY, CC BY-SA) → **crédito em tela, marcado por papel** (`data-qc-papel="credito"`),
como as cenas `s66` e `s71` fazem. Na dúvida sobre uma imagem, a pergunta é *"a licença exige?"*,
nunca *"a tela fica mais limpa sem?"*.


Mateus, 04/ago: *"não precisa dar os créditos ao MapTiler não, para com isso, a gente JÁ PAGA e deu"* · *"não
precisa colocar as fontes de geometria nem dados nem base, REMOVE"* · *"remova o 'Dique e edificações…' e todos
os créditos de todos os mapas"*.

Medido no `paises-baixos-mar`: **8 linhas de crédito desenhadas em 8 cenas** — e três delas misturavam
informação com fonte na mesma string (`"Cerca de 3.000 pôlderes · Beemster drenada em 1612 (UNESCO) · Satélite
e relevo: MapTiler, OpenStreetMap"`). Apagar a linha inteira levaria embora o dado; o corte é no marcador de
fonte, preservando o que informa.

A distinção que importa, e que a doutrina antiga não fazia:

· **MapTiler é serviço PAGO** — a assinatura já quita o uso, e não há exigência de atribuição. Creditar é ruído.
  ⚠️ **ESTA SEGUNDA FRASE É FALSA CONTRA O CONTRATO DO FORNECEDOR — ver [ARTE-315] (13/set/2026).** O
  MapTiler Cloud T&C §5.4 exige atribuição *na tela* em vídeo, salvo acordo por escrito, e o plano pago
  dispensa o **logo**, não a atribuição. **O que esta lei MANDA FAZER continua valendo** (o crédito não
  ocupa pixel, e o `qc-visual` segue proibido de reprovar por ausência); o que mudou é que a *razão*
  declarada aqui não se sustenta em documento, e a saída para a descrição está cumprida em **2 de 498**
  vídeos públicos. A decisão é do dono, e está nomeada na [ARTE-315].
· **OpenStreetMap (ODbL) e Wikimedia (CC BY-SA) EXIGEM atribuição por licença.** Remover da tela sem mais nada
  é descumprir a licença.

A saída que atende os dois: **o crédito sai da tela e vai para a descrição do vídeo**. A licença se cumpre, a
imagem fica limpa. Se um dia não houver onde creditar, a alternativa é trocar a imagem por material do acervo
assinado — nunca usar sem crédito.

> **A lei:** *a tela é do espectador, não do jurídico.* Nada que exista só para cumprir contrato ocupa pixel:
> vai para onde o contrato também se cumpre e ninguém precisa ler durante o vídeo.

Vale também para topônimo que o roteiro não cita: no mesmo vídeo saíram `ZUIDERZEE`, `HOLANDA DO NORTE` e
`FRÍSIA`, que o Mateus chamou de *"densamente bombardeado de informação… quando NÃO PRECISA"*.
🔀 **Este parágrafo virou lei própria: [ARTE-109]** (rótulo só com lastro na narração). São dois defeitos
com a mesma vítima — aqui sai da tela o que existe para o **jurídico**, lá o que existe para o
**cartógrafo** — e o topônimo órfão precisava de teste e exceções próprias, que não cabiam num corolário.

### ARTE-105 · A cena tem de explicar o ARGUMENTO, não ilustrar o substantivo (04/ago/2026)

Mateus sobre a `s23` do `paises-baixos-mar`: *"ficou bem confusa e não explicou absolutamente NADA a ver com o
que o roteiro tava explicando"*. Olhei o frame: um **anel verde visto de cima**, interior escuro, fundo azul —
sem uma palavra na tela, sem escala, sem referência de tamanho, sem nada que diga o que aquilo é.

E a cena não está errada por descuido. Ela é *bonita* e está *no assunto*: a narração fala de pôlder, e um
pôlder é um anel de dique com terra baixa dentro. A forma é fiel ao substantivo.

O que ela não faz é o trabalho: naquele ponto a narração explica **por que a água não tem para onde ir** — que
o chão lá dentro está *abaixo* do mar em volta, e por isso a gravidade trabalha contra. Nada no desenho mostra
nível, nem comparação, nem a água pressionando de fora. Um anel visto de cima **esconde justamente a dimensão
que é o argumento**: a altura.

> **A lei:** *ilustrar o substantivo não é explicar a frase.* Antes de desenhar, escreva em uma linha **qual
> afirmação da narração esta cena prova** — e então pergunte se o desenho a torna visível. "Pôlder" é o assunto;
> "o chão de dentro está abaixo do mar de fora" é o argumento. Assunto se ilustra com forma; argumento se explica
> com **contraste, corte, escala ou movimento**.

Teste barato, de custo zero: mostre o frame a quem não ouviu a narração e pergunte o que ele entendeu. Se a
resposta for o nome da coisa e não a ideia, a cena ainda não está pronta.

Onde se conserta: no `editor-de-arte` (a cena nasce de uma tese, não de um objeto) e no `montador`, que ao
escolher o modo deve registrar **a afirmação que a cena precisa provar** — não só o tema dela. Um corte
transversal teria resolvido a `s23` sem nenhuma tecnologia nova.

---

### ARTE-106 · A CENA TEM TANTOS PLANOS QUANTAS IDEIAS A FALA ATRAVESSA — e trocar sem ideia nova é o defeito gêmeo (04/ago/2026)

Mateus, revendo o `paises-baixos-mar` inteiro, cena a cena: na abertura (`s01`, 17 s) ele pediu
**≥5 footages em sequência, perspectivas variadas**; num trecho de 15 s (master 238,2–253,1 s),
*"footage, ~4 cortes"*; noutro de 20,7 s (master 494,2–514,8 s), *"≥5 cortes, um por trecho
citado"*; na cena de moinhos (`s39`), *"trocar por ≥3 footages, ângulos diferentes"*. A cena
entregue tinha **um plano só** em cada um desses lugares.

**A régua externa já estava na casa e não estava sendo obedecida.** A [ARTE-89] mediu a referência
BBC/DW — plano médio de **4,3–4,7 s, 12–14 cortes/min** — e escreveu um teto: *"um footage não passa
de ~8 s em tela sem trocar"*. Teto de duração é uma régua **passiva**: ela diz quando o plano
já cansou, nunca quando ele **devia** ter trocado. Os quatro pedidos acima batem em ~3,4 s por plano
(17 s ÷ 5; 15 ÷ 4; 20,7 ÷ 5), abaixo do teto de 8 s e abaixo até da média da BBC. O que o Mateus
está pedindo não é "cortar mais rápido": é que **a tela ande junto com a fala**, e a fala atravessa
uma ideia nova a cada três ou quatro segundos.

> **A lei:** *o número de planos de uma cena não vem da duração dela nem de um teto — vem de quantos
> OBJETOS/IDEIAS distintos a narração percorre naquela janela.* Quebre a fala da cena em sintagmas
> (é o ofício do `regente-de-imagem`) e conte quantas vezes ela **muda a coisa de que está falando**:
> esse é o número de planos. Cada plano existe porque a voz chegou num objeto novo — não porque o
> anterior estava velho.

**⚠️ E A TRAVA, que o Mateus escreveu no mesmo fôlego em que pediu a densidade** — ela é metade da
lei, não um adendo: *"Não quero obrigar footages de vídeos onde não caiba ok. Quero que seja onde
faça sentido… só quero que FAÇA sentido."*

**NÃO troque de plano quando:**
- a fala continua no **mesmo objeto** e só o qualifica ("o dique… ele tem 32 quilômetros… e foi
  fechado em 1932" é UM objeto: um plano, com o dado entrando por cima);
- o plano tem **trajetória própria** que ainda não terminou — um drone que atravessa a paisagem é uma
  ideia em movimento, e cortá-lo no meio joga fora o gesto ([ARTE-103]);
- a cena é de **mecanismo/argumento** e o corte quebraria a continuidade do palco ([ARTE-07]: um
  bloco, um cenário). Ali o "plano novo" é câmera, foco ou revelação dentro do mesmo cenário;
- o material que existiria para o plano seguinte é **o mesmo assunto pelo mesmo ângulo** — trocar por
  trocar produz o corte aleatório que a [ARTE-41] já chamou de amador.

**O teste, e ele é de uma linha:** para cada plano, escreva a palavra da narração que o convoca. Se
duas palavras iguais convocam dois planos, sobra um. Se um trecho de 6 s convoca três objetos
diferentes e há um plano só, faltam dois.

**Onde nasce e onde se conserta.** Isto é decisão de **montagem**, não de execução: o
`regente-de-imagem` prescreve os planos por sintagma na `regencia.json`, o `montador` reserva a
janela, o `diretor-de-arte` distribui a densidade pelo arco, e a `pesquisa-imagens` recebe um pedido
por PLANO — não um por cena. Cena que chega ao `editor-de-arte` com um `midia_termos` só recebe um
footage só, e o defeito nasce três estações antes de onde aparece.

**Como verificar:** `node scripts/mapa-limpo.mjs <proj> --tc <TC-IN>-<TC-OUT>` devolve a fala exata
daquela janela — conte os objetos ali e compare com o número de planos no HTML. Supera o item 2 da
[ARTE-89] (o teto de ~8 s continua valendo como piso de vergonha, mas não é mais o critério).

### ARTE-107 · UMA CENA NÃO É DE UM MODO SÓ — o regime pode virar no meio, e virar é o normal (04/ago/2026)

No mesmo passe de revisão, o Mateus pediu textualmente cenas que **mudam de regime por dentro**:
`s26` — *"footage por 2,2 s, depois desenho até o fim"* · `s83` — *"mantém a animação nos 6 s
iniciais; depois ≥4 fotos da quadra"* · `s37` — *"mantém o footage nos primeiros 5 s; depois OUTRO
footage"* · e três cenas novas que nascem misturadas: foto real de moinho **dentro** de um
cartão-postal animado, foto real do Afsluitdijk **dentro** de um desenho, mapa 3D **com** desenho por
cima.

**O que impedia isso não era técnico — era vocabulário.** O espelho carrega **um** `modo` por cena
(M01–M26) e a doutrina inteira lê esse campo como se descrevesse a cena toda. Um agente que recebe
`modo:"footage"` entende "esta cena é footage", enche os 12 s com um clipe e entrega. O campo nunca
foi um contrato de exclusividade; virou um por hábito de leitura.

> **A lei:** *`modo` é o regime de ABERTURA da cena, não a natureza dela.* Uma cena legítima pode
> abrir em registro real e fechar em desenho, abrir em animação e fechar em fotos, ou sobrepor os
> dois o tempo todo. A pergunta que decide o regime de cada trecho é sempre a mesma da casa: **o que
> aquele punhado de palavras precisa que o espectador VEJA?** — e a resposta muda dentro da cena
> porque a fala muda dentro da cena.

**As três formas, todas pedidas por ele no mesmo dia:**
1. **Sequencial** — registro real primeiro (a prova de que a coisa existe), desenho depois (a
   explicação do porquê). É a ordem natural: vê-se o moinho, entende-se a bomba.
2. **Encadeada no mesmo regime** — *sequência de DESENHOS*, um puxando o outro, quando a fala percorre
   etapas de um mecanismo. Vale exatamente como vale para footage: o que se proíbe é o plano único
   estático por 15 s, não o desenho. Um desenho que se remonta em três estágios word-locked é a mesma
   densidade da [ARTE-106], só que nativa.
3. **Sobreposta** — foto/footage real **dentro** da peça desenhada (o cartão-postal, a moldura, o
   painel). Aqui não há troca: há duas camadas simultâneas, e é o recurso "Califórnia" da [ARTE-90]
   levado ao registro real.

**O que continua proibido, para não virar licença de bagunça:** trocar de **CENÁRIO** no meio de uma
explicação segue vedado pela [ARTE-07] — mudar de regime não é mudar de assunto. O corte de footage
para desenho tem de cair num **beat da fala** (o mesmo critério da [ARTE-41]), nunca no meio de uma
cartela; e a peça desenhada que recebe a foto tem de ter sido concebida para recebê-la, não abrir um
buraco retangular no fim.

**Onde se conserta:** `montador` (o espelho passa a declarar o regime por TRECHO quando a cena vira —
`modo` continua sendo o de abertura), `regente-de-imagem` (é ele quem marca onde vira, porque é ele
que lê sintagma a sintagma), `diretor-de-arte` (a técnica da cena no `conceito-visual.json` pode ser
mista) e `editor-de-arte` (executar a virada é um `t` no `__renderAt`, não uma cena nova).

### ARTE-108 · CLIPE REPETIDO DENTRO DA MESMA CENA É DEFEITO — e o gate estava programado para ignorar exatamente isso (04/ago/2026)

Mateus sobre a `s43` do `paises-baixos-mar`: a cena tem **4 cortes**, e são **2 vídeos usados 2×
cada**. Veredito dele: manter os dois primeiros e *"trocar os 2 últimos por tulipas diferentes"*.

**Por que nenhum gate viu.** O `qc-repeticao.mjs` — o gate da [ARTE-98], que funde mídia por hash de
conteúdo e é o mais afiado da casa contra reuso — tem duas linhas que dizem, textualmente:
`// repetir DENTRO da mesma cena é composição, não reuso` e `// a unidade é a CENA distinta`. A
suposição estava certa **enquanto uma cena era um plano só**: a mesma imagem duas vezes na mesma cena
só podia ser fundo desfocado + primeiro plano nítido, ou moldura + conteúdo. Com a [ARTE-106] e a
[ARTE-107], a cena passou a ter **planos em sequência** — e aí a mesma imagem duas vezes deixou de
ser composição e virou o que o espectador enxerga: o vídeo esticando material, dentro de 12 segundos.

> **A lei:** *a unidade da repetição é o PLANO, não a cena.* Dentro de uma cena, mídia repetida é
> composição quando as duas aparições são **simultâneas** (camadas no mesmo instante) e é reuso
> quando são **sucessivas** (o clipe volta como plano posterior). O teste é temporal e barato: as
> janelas de exibição se sobrepõem no tempo? É composição. Não se sobrepõem? É repetição, e reprova.

**A severidade herda a [ARTE-98] sem mudança:** ≥4 aparições reprova, 2–3 alerta — mas agora contando
**planos**, e dentro da cena também. A `s43` é 2 mídias × 2 planos: alerta em cada uma, e o Mateus
reprovou as duas. Cena curta amplifica: 4 planos em ~12 s com 2 fontes é metade do material repetido
num intervalo em que o olho ainda lembra do que viu — a distância que perdoa a repetição entre cenas
não existe aqui.

**A causa a montante, e ela é a mesma da [ARTE-106]:** a `pesquisa-imagens` recebeu UM pedido para a
cena e entregou o que dava para um plano. Quem monta quatro planos com dois clipes não escolheu
repetir — não tinha o quarto arquivo. **Pedido por plano, não por cena** é o conserto de raiz; o gate
é a rede embaixo.

**Onde se conserta:** `qc-repeticao.mjs` (a unidade passa a ser o par cena×plano, com o teste de
sobreposição temporal para não acusar composição), `qc-visual` (lente de repetição olha para dentro da
cena) e `pesquisa-imagens`/`regente-de-imagem` (quantidade pedida = número de planos).

### ARTE-109 · RÓTULO NA TELA SÓ COM LASTRO NA NARRAÇÃO — se a voz não nomeia, a tela não escreve (04/ago/2026)

Mateus, sobre os topônimos que a `s47` carregava: *"foram textos DESNECESSÁRIOS e POLUÍDOS/TOO MUCH
que faz o espectador ficar densamente bombardeado de informações ao mesmo tempo que NÃO TEM
NECESSIDADE pois o contexto do roteiro não cita isso"*.

Medido no `paises-baixos-mar`: saíram da tela **ZUIDERZEE**, **HOLANDA DO NORTE**, **FRÍSIA** e
*"Traçado do Afsluitdijk"* — quatro rótulos numa cena só, nenhum deles pronunciado uma única vez na
narração. Eram todos **corretos**: é essa a armadilha. O rótulo não estava errado, estava **órfão** —
não tinha a quem se ligar no ouvido de quem assiste.

**Por que órfão é pior que errado.** Um rótulo errado o espectador ignora ou não percebe. Um rótulo
certo e não narrado ele **tenta processar**: lê, procura no que está ouvindo, não acha, e paga o
custo de atenção sem receber informação nenhuma. É carga cognitiva pura. Some isso à narração
correndo por cima e ao dado que a cena já legitimamente carrega, e o resultado é a palavra que ele
usou — bombardeio.

> **A lei:** *todo texto na tela responde "que palavra da narração te convocou?"* Sem resposta, o
> texto sai. O lastro é literal — a palavra é dita na janela daquela cena ou na fala imediatamente
> vizinha, não "está no assunto do vídeo".

**As três exceções, e são só três** — porque exceção larga devolve a poluição pela porta dos fundos:
1. **Orientação mínima que a imagem sozinha não dá** e sem a qual ela é ilegível: o `H`/`L` de um
   mapa meteorológico, `MAR` e `CHÃO` num corte transversal, a unidade num eixo. Aqui o rótulo não
   informa — ele torna o desenho legível, e some junto com o desenho ([ARTE-02] já mandava isso).
2. **Dado atribuível que a cena existe para provar** (o número, a data, a fonte discreta no rodapé).
3. **Card de título de tópico**, que é sistema de navegação e tem dono próprio.

**Consequência que o Mateus cobrou na mesma frase, e que fecha o cerco:** rótulo de país vizinho num
mapa não escapa por ser geografia — ele precisa de lastro **na narração** e de verificação **na
geometria** ([PESQ-38]). Nome próprio na tela é sempre uma afirmação.

Isto **promove para lei própria** o parágrafo final da [ARTE-104], que tratava o topônimo sem lastro
como corolário do crédito de mapa. São defeitos diferentes com a mesma vítima: a [ARTE-104] tira da
tela o que existe para o **jurídico**; esta tira o que existe para o **cartógrafo**. Nenhum dos dois é
para o espectador.

**Como verificar:** cruzar todo nó de texto do HTML com as palavras do `words.json` na janela da cena
(`node scripts/mapa-limpo.mjs <proj> --tc A-B` devolve a fala). Texto que não aparece na fala e não
cai numa das três exceções é achado do `qc-visual`, lente de poluição.

### ARTE-110 · TEXTO DE DADO SE LÊ DE PRIMEIRA OU NÃO SE PÕE — rótulo que precisa de decodificação é ruído com aparência de informação (04/ago/2026)

Mateus sobre a `s10` do `paises-baixos-mar`: o par de rótulos *"Ponto mais fundo: 6,76…"* e *"Área em
azul: …"* ficou *"MUITO confuso"*.

Os dois números estavam **certos**. O que falhou é que cada um exige do espectador uma operação antes
de virar sentido: *ponto mais fundo* — abaixo de quê, medido de onde? *área em azul* — que azul, o do
mapa ou o do mar, e azul é o que exatamente? A cena entrega o resultado de uma conta cujos termos ela
não mostrou. Quem lê tem 2 segundos e a narração seguindo por cima.

> **A lei:** *na tela, o dado vem com a referência colada nele, ou não vem.* O rótulo tem de ser
> legível por quem chegou naquele segundo, sem memória da cena anterior e sem parar o vídeo. Se
> explicar o rótulo exige uma segunda linha de texto, o problema não é a segunda linha — é que o dado
> escolhido não cabe em tela e o lugar dele é a narração.

**Como reescrever, na prática:** ancore o número numa referência que já está visível no quadro
(*"6,76 m ABAIXO DO MAR"* diz sozinho o que *"ponto mais fundo: 6,76"* não diz), e prefira **mostrar**
a comparação a nomeá-la — uma régua com o nível do mar em cima e o chão embaixo resolve o mesmo dado
sem rótulo nenhum. É a [ARTE-105] aplicada ao texto: o número tem de provar o argumento, não etiquetar
o objeto.

**Regra de corte quando não dá:** dois rótulos que só fazem sentido juntos são um sinal de que a cena
está carregando dois assuntos. Fique com o que sustenta a frase da narração e **jogue o outro fora** —
não o encolha nem o mande para o rodapé.

**Como verificar:** o teste de custo zero da casa, o mesmo da [ARTE-105] — capture o frame
(`node scripts/shot.mjs <cena.html> <t> <png>`) e leia **só o texto**, sem o áudio. Se a leitura
levanta uma pergunta em vez de responder uma, o rótulo está errado.

### ARTE-111 · MAPA PARADO É FOTO CARA — 3D se move em ÓRBITA CONTÍNUA, nunca em zoom picado (04/ago/2026)

Mateus, sobre duas cenas de mapa do `paises-baixos-mar`: *"render parada"* na `s11` e na `s78` — e a
`s78` foi medida em **~0,4 de variação quadro a quadro**, um número que prova movimento existindo e
não sendo visto. Na `s10` ele foi específico sobre a causa: trocar o **zoom picado** por **bearing
loop**.

**Os dois defeitos são um só, e é de LINGUAGEM de câmera.** Um mapa que dá zoom em degraus (`jumpTo`,
`flyTo` curto, salto de nível) tem movimento alto no instante do salto e **zero** entre os saltos: a
média engana o gate, e o olho vê uma sequência de fotos. Um mapa que não faz nada é a mesma foto sem
o salto. O que o espectador reconhece como "mapa vivo" é uma coisa só: **a câmera girando devagar em
torno do assunto, sem parar, do primeiro ao último frame** — o `bearing` variando continuamente
enquanto o `pitch` e o alvo ficam quietos.

> **A lei:** *em mapa, o movimento é da CÂMERA e é CONTÍNUO — órbita, nunca corte de posição.* O 3D
> (M04) abre com bearing loop e mantém a órbita durante toda a janela da cena; a aproximação, quando
> existe, acontece **dentro** da órbita (o raio fecha enquanto ela gira), nunca como um evento de
> zoom separado. Mapa sem órbita só se justifica quando a cena tem outro movimento carregando o
> quadro (rota se desenhando, área preenchendo, rótulo entrando) — e aí o movimento tem de estar
> visível o tempo todo, não em dois beats.

**A régua de medida, herdada da [ARTE-103] e agora obrigatória para mapa:** movimento não é a
diferença entre frames vizinhos — é o **deslocamento ao longo da janela**. O mapa tem de percorrer
algo comparável ao próprio enquadramento na duração da cena. Diferença quadro a quadro perto de zero
com o clipe "animando" é a assinatura exata deste defeito, e foi o que a `s78` mostrou.

**⚠️ E não conserte com velocidade.** Órbita rápida enjoa e denuncia o truque; a régua é a mesma da
[ARTE-55] — piso de movimento, não taxa de eventos. Uma volta lenta e ininterrupta lê como sobrevoo;
três acelerações lêem como screensaver.

**Onde se conserta:** `mapista` (é dele a coreografia de câmera nos dois modos) e o gate de mapa vivo,
que hoje confere que o mapa **renderizou** e precisa passar a conferir que ele **andou** — captura em
dois instantes distantes da janela e comparação do deslocamento, não da diferença de pixels.

**Como verificar:** `node scripts/maprender.mjs` (nunca `shot.mjs`, que dispara `jumpTo` fora de
ordem) em três instantes da cena — início, meio e fim. Se o enquadramento dos três for reconhecível
como o mesmo ponto de vista, não houve órbita.

### ARTE-112 · LINHA QUE REPRESENTA GEOGRAFIA SEGUE A GEOMETRIA REAL — desenhar por cima do satélite é inventar o mapa (04/ago/2026)

Mateus sobre a `s22` do `paises-baixos-mar`: a linha que contorna a água **passa por terra** à
direita, exatamente onde o rótulo aponta **"DIQUE"**. A cena afirma duas coisas ao mesmo tempo —
*aqui está a fronteira entre água e terra* e *isto é o dique* — e na imagem a linha corta o continente.

**Por que isto é mais grave que um traço torto.** O canal recusa mapa desenhado à mão por doutrina
antiga (geometria é sempre GeoJSON real), mas a proibição vinha sendo lida como "não desenhe o
CONTORNO DO PAÍS". Uma linha auxiliar — o traçado de um dique, a borda de uma área, o eixo de uma
rota — escapava, porque parecia enfeite. Não é: sobre uma base de **satélite**, qualquer linha é lida
como medição. O espectador vê a costa verdadeira embaixo e a linha por cima, e conclui que a linha
descreve o que está embaixo. Quando não descreve, a cena mentiu com precisão fotográfica.

> **A lei:** *toda linha desenhada sobre base real é uma afirmação sobre a base — e por isso nasce de
> geometria, nunca de coordenadas estimadas no olho.* Se a feição existe (dique, canal, fronteira,
> rota, contorno de pôlder), o traçado vem de GeoJSON real ([PESQ-38] governa a busca). Se não existe
> geometria publicada, a saída é **não desenhar a linha** — usar seta, halo, hachura ou rótulo com
> guia curta, que apontam sem afirmar percurso.

**O sinal de que o defeito está presente**, e ele é visível sem ferramenta: a linha e a borda natural
que ela deveria acompanhar **divergem e voltam a se encontrar**. Traçado tirado de dado real cola na
feição em todo o comprimento; traçado tirado no olho cola nos extremos e abre no meio, porque foram
dois pontos escolhidos e o resto é interpolação.

**Irmã da [ARTE-86]** (os gates são cegos para a geometria) e da [ARTE-96] (`FeatureCollection` de
países acendendo fronteira interna): a família toda é o mesmo buraco — nenhum gate compara o que foi
DESENHADO com o que a base MOSTRA. Enquanto não existir essa comparação, a verificação é o olho, e
ela é obrigatória: capturar o frame e conferir se a linha está sobre água ou sobre terra é um
`maprender.mjs` e dez segundos.

**Onde se conserta:** `mapista` (a linha vem de arquivo, e o pedido do arquivo é da `pesquisa-geo`) e
`qc-visual` (lente de geometria: linha sobre base real exige `src` de GeoJSON declarado na cena).

### ARTE-113
**A órbita do mapa revela a borda do mapa — e o defeito só existe em alguns segundos.**

Origem: 04/ago/2026, `paises-baixos-mar`, cena `s78`. A [ARTE-111] mandou trocar o zoom picado por
órbita contínua, e a órbita entrou — o movimento mínimo por segundo subiu de **0,39 para 1,22**, o
mapa parou de travar, a lei foi cumprida. E foi **cumprir a lei que abriu o buraco novo**: ao girar o
bearing com pitch, o retângulo do mapa deixa de cobrir o palco de 3840×2160, e o fundo aparece. Medido
recortando a região 3140,1660 (700×500) nos quadros 380, 470 e 540: o satélite some progressivamente
até sobrar um retalho no canto superior, com a linha teal atravessando o vazio.

> **A lei:** *mapa que gira precisa de sangria.* O container do mapa nasce **maior que o palco**, ou o
> zoom base é calculado para cobrir o quadro **na pior angulação da órbita** — não na angulação
> inicial. Vale para qualquer câmera que rotacione, incline ou faça pan: pan de canvas, Ken Burns com
> rotação, órbita 3D.

**Por que escapou de tudo:** todo gate de cena mede o **quadro 0**, e no quadro 0 o mapa cobre o palco
inteiro — a cena nasce correta e fica errada no meio. É a mesma família da [ARTE-111] (a diferença
entre quadros vizinhos não enxerga movimento nulo espalhado) e do `qc-fora-do-quadro`, que precisou
varrer a duração inteira justamente porque *"a causa costuma ser MOVIMENTO: um push-in empurra para
fora o que estava perto da margem"*. **A regra geral que as três compartilham: defeito de câmera não
se audita em um quadro.**

**A verificação, que custa segundos:** recortar as quatro bordas do clipe renderizado ao longo da
duração e procurar pixel de cor de fundo. Se aparecer, falta sangria.

**Onde se conserta:** `mapista` (sangria no container, zoom pela pior angulação) e `qc-visual` (a
lente de motion passa a varrer as bordas na duração inteira, não no quadro 0).

<!-- ═══ LEIS VINDAS DA VM `estudio-top10`, fundidas em 2026-08-05 ═══
     Elas foram destiladas lá, em paralelo, e nunca chegaram ao git. As que colidiam em número
     com uma lei diferente daqui foram RENUMERADAS (cada uma diz de onde veio, logo abaixo do
     título). As que caíam em número livre entraram com o ID original. Nada foi descartado. -->

### ARTE-124 · A DURAÇÃO DA CENA VIVE EM DOIS RELÓGIOS — quem briefa a arte aplica o ripple, ou desenha arco que ninguém vê

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-124` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação ARTE do `mamute-de-volta`. O editor-chefe gerou os briefings dos
editores-de-arte lendo `inSec`/`dur` do espelho **direto**, e o espelho fala em tempo **BRUTO**. Só que
o clipe de cena é posicionado no tempo **LIMPO** (pós-ripple de `_cortes.json`), e `compor-base-youtube`
trunca o clipe na duração limpa. Resultado: **32 das 81 unidades** tinham duração errada no briefing e
**11 já haviam sido desenhadas** antes de alguém perceber. O pior caso foi o showpiece `s28-romulo-remo`,
que pediu **29,94 s** quando só **11,01 s** existem no vídeo final — quase dois terços do arco de um PICO
desenhados para o lixo. `s115-cta-comentarios` pediu 16,56 s e tem **3,08 s**; `s40` pediu 30,82 s e tem
**6,96 s**, o que revogou até a instrução de "mínimo 4 clipes" que fora dada com base na duração falsa.

**Por que passou:** nenhum gate pega isso, e não é descuido do gate — **cada artefato está internamente
coerente**. O espelho é válido em bruto, o HTML é válido no seu próprio `__duracao`, o `qc-contrato`
confere o contrato e não o relógio. A divergência só aparece cruzando os dois, e ninguém cruzava.

**As três regras que ficam:**

1. **Quem transforma espelho em briefing de cena APLICA `mapSecFactory(cortes)`.** `dur` do HTML =
   `mapSec(fim) − mapSec(inSec)`, nunca `fim − inSec`. É uma linha de código, e é a diferença entre
   dirigir a cena e mentir para quem a desenha.
2. **Se o `inSec` cai DENTRO de um corte, a origem se desloca.** `mapSec` devolve `null` ali, e o clipe
   passa a ser posicionado a partir do **fim do corte**. O word-lock inteiro anda junto: no clímax deste
   vídeo (`s63`), o `inSec` caía 2,196 s dentro do corte do título lido em voz alta — usado como veio, o
   beat "A resposta honesta" cairia em t=2,90 quando a voz o diz em t=0,70. **Clímax dessincronizado, e
   nenhum gate reclamando.** E a palavra que caiu dentro de um corte **não existe no vídeo final**: ela
   tem de sumir da lista de word-lock, senão o beat ancora no vazio.
3. **O CARD DE TÍTULO é o TERCEIRO relógio e não obedece a nenhum dos dois.** Ele vive dentro do span
   `classe:"titulo"` (a leitura do título em voz alta, que é cortada) e ocupa o **gap de 3 s** que a
   finalização abre ali — por isso `mapSec` devolve ~0 para a janela dele e a `dur` do espelho é a que
   vale. Medir card pelo relógio limpo é o auditor errando, não a cena. *Corolário: um auditor que não
   conhece as três réguas acusa cena boa, e auditor que acusa inocente treina a sessão a ignorar aviso.*

**Quem descobriu não foi gate nem revisão: foi o editor-de-arte do clímax**, que estranhou 36,43 s para
uma fala que acabava antes e foi medir `_cortes.json` por conta própria — e o de `s43` chegou à mesma
conclusão sozinho. Vale como sinal: **o executor que confere a régua que recebeu é a última defesa
quando o erro está no briefing**, porque o briefing é a única coisa que ninguém audita.

---
### ARTE-125 · CANVAS COM BUFFER INTERMEDIÁRIO RECORTA EM SILÊNCIO — o buffer é do tamanho do PALCO, o desenho vem em coordenadas de MUNDO

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-125` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação ARTE do `mamute-de-volta`, pelo editor-de-arte do lote de genética.

O padrão é legítimo e nasce de uma lei anterior: silhueta composta de N elipses **nunca** pode ser desenhada
com `globalAlpha<1` peça por peça, senão o alpha acumula nas sobreposições e o bicho fica de vidro. A solução
é compor **opaco** num canvas intermediário e colar o resultado **uma vez** com o alpha desejado:

```js
function comBuffer(alpha,fn){
  var real=ctx; bctx.setTransform(1,0,0,1,0,0); bctx.clearRect(0,0,3840,2160);
  ctx=bctx; fn(); ctx=real;                       // fn desenha em coordenadas de MUNDO
  ctx.save(); ctx.globalAlpha=alpha; ctx.drawImage(buf,0,0); ctx.restore();
}
```

**O defeito:** o buffer tem 3840×2160 — o tamanho do PALCO —, mas `fn()` desenha em coordenadas de **MUNDO**.
Numa cena com câmera que recua, o mundo é maior que o palco: um objeto em `x≈4700` ou com base em `y=2617`
cai **fora** do buffer e é recortado. O canvas não erra, não avisa, não lança nada — ele simplesmente
**não desenha**. Medido: a silhueta final de `s60-gestacao-22-meses` não aparecia, e a base do elefante de
`s57-25-genes` saía cortada numa **reta perfeita** (a assinatura do recorte: geometria orgânica que termina
numa linha reta é sempre corte de buffer, nunca desenho).

**O conserto é passar o offset do mundo para o buffer** — desenhar deslocado e colar deslocado:
```js
function comBuffer(alpha,fn,ox,oy){
  bctx.setTransform(1,0,0,1,0,0); bctx.clearRect(0,0,3840,2160);
  bctx.setTransform(1,0,0,1,-ox,-oy);            // o mundo entra no buffer
  ctx=bctx; fn(); ctx=real;
  ctx.save(); ctx.globalAlpha=alpha; ctx.drawImage(buf,ox,oy); ctx.restore();
}
```

**Por que escapa de TODOS os gates:** `qc-contrato` vê o contrato, `check-overlap` mede caixas de **texto**,
`qc-carga` conta blocos, `_auditar` lê o HTML. Nenhum deles abre o canvas. O sintoma é só visual, e só num
instante específico da coreografia — o instante em que o objeto está mais longe do centro.

**A parte que vale além do bug:** este rig **não está em nenhuma doutrina** — não está no `knowledge/`, nem
nos agentes, nem nos exemplares dourados. Ele nasceu no `s43` deste mesmo vídeo e se propagou **por cópia
lateral entre cenas irmãs**, que é como rig de verdade se propaga. No `s43` e no `s41` o padrão **não morde**,
porque lá o objeto é screen-space e cabe no palco — então a cena de origem é uma prova viva de que o código
funciona. *Copiar rig de cena aprovada é a prática CERTA, e mesmo assim traz o defeito: o que viaja no
copy-paste é o código, não a premissa que o tornava correto.*

**As duas regras que ficam:**
1. **Buffer intermediário só é seguro quando mundo = palco.** Se a cena tem câmera que recua, panorâmica ou
   qualquer objeto fora de `0..3840 × 0..2160` em coordenadas de mundo, o buffer **precisa** do offset.
2. **Ao copiar um rig de outra cena, pergunte qual premissa o sustentava lá.** Screen-space × world-space é
   invisível na assinatura da função — e é exatamente a diferença entre o rig funcionar e apagar o objeto.
   Na dúvida, fotografe o instante em que o objeto está **mais longe do centro**, não o instante bonito.

---
### ARTE-126 · O `seekTo` DA DOUTRINA FALHAVA EM 4K — três agentes independentes acharam o mesmo buraco no mesmo dia

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-126` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação ARTE do `mamute-de-volta`, por **três** editores-de-arte que não
se falaram: os lotes do clima, do fecho e da conta chegaram ao mesmo defeito por caminhos diferentes.

O `seekTo` do `ROUPA-CENA §2-bis` já existia justamente para consertar o "vídeo indo e voltando"
(REND-47) — e ele resolveu aquele defeito. Mas em clipe **4K** ele tem três buracos que só aparecem
sob seek frio, e cada agente pegou um:

1. **`seeked` de um seek OBSOLETO resolvia a promessa.** `__prepararCaptura()` dispara um seek e o
   `__renderAt(t)` seguinte dispara outro por cima; o `seeked` do primeiro chegava com o segundo ainda
   em voo e a promessa resolvia cedo. Sintoma medido: o `<video>` pintava **transparente** e o clipe de
   baixo vazava, em 1 de 2 capturas no mesmo instante.
2. **O `return` antecipado mentia durante um seek.** `Math.abs(v.currentTime - tt) < 0.004` é verdadeiro
   **enquanto o seek está em voo**, porque `currentTime` já reporta o destino. A guarda é `!v.seeking &&`.
3. **O fallback de 2600 ms não cobre seek frio em 4K.** Medido num clipe de 739 MB a 59,94 fps:
   `t=2.8 → seekms=2615` com **`readyState = 1`** — o frame não chegou a existir, e a captura fotografou
   imagem velha. Passou a 9000 ms, e o `__renderAt` só pode seekar depois de `readyState >= 3`.

Some-se um quarto, do mesmo dia e da mesma família: **três `<video>` 4K vivos ao mesmo tempo saturam o
decode do Chrome** e os clipes param de pintar, deixando o fundo chapado. Nunca mais de dois ativos; o
take aposentado sai do documento (`display:none`).

**O que isso ensina além do patch:** o §2-bis foi escrito para curar um defeito real, foi medido contra
aquele defeito, e passou. O buraco novo não é regressão dele — é a **fronteira onde a cura anterior
deixou de valer** (arquivo maior, taxa maior, seek mais frio). *Doutrina validada contra um caso não é
doutrina validada.* E o sinal de que o buraco é real, e não teimosia de um agente, foi a **convergência**:
três execuções independentes, com sintomas diferentes, apontando o mesmo trecho de código.

**A regra que fica:** o `seekTo` vigente é o do `ROUPA-CENA §2-bis` **com as quatro proteções**
(`!v.seeking` na guarda, `if (v.seeking) return` no handler, `+34 ms` depois do `requestVideoFrameCallback`,
fallback 9000 ms). Cena com `<video>` que não as tenha vai para o render capturando frame errado **sem
erro, sem gate e sem aviso** — e o defeito só aparece no clipe pronto, quando custa render refazer.

---
### ARTE-127 · RUN FUNDIDO SÓ EXISTE SE ESTIVER NO ESPELHO — `_mergedInto` é o campo, arquivo à parte não conta

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-127` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação ARTE do `galaxia-arco-flecha`, que voltou **4×** pra ARTE com a arte
100% pronta.

Quando a direção marca `fundir:true`, vários segmentos viram **um** arquivo só. O estúdio inteiro já sabe
representar isso: o campo **`_mergedInto: "<id da mãe>"`** no segmento filho, lido por `situacao.mjs`,
`despachante.mjs` e `cenas-reais.mjs` — "esta cena não tem HTML/clipe próprio POR DESIGN".

No `galaxia-arco-flecha` a estação ARTE fundiu 11 runs corretamente (51 HTMLs cobrindo 70 segmentos, arte
impecável, gates verdes) e registrou a fusão num arquivo **inventado**, `_runs-fundidos.json`. **Nenhum
consumidor lê esse arquivo.** O resultado, medido:

1. **LOOP DE RE-DESPACHO.** `situacao.mjs` contava os 19 filhos como cenas sem arte → estação "arte" →
   o despachante devolvia o vídeo → a sessão auditava, achava tudo pronto, encerrava → **de novo**.
   Quatro tentativas (03:01, 04:05, 04:40, 06:20) gastas auditando trabalho já feito. As três últimas
   escreveram no diário, com todas as letras, "a arte JÁ estava completa" — e o loop continuou, porque
   o diário é prosa e a fila lê campo.
2. **BURACO NA MONTAGEM, invisível até o fim.** A `dur` da mãe seguia valendo só o primeiro beat
   (s01: 5,94 s de espelho para um HTML de 15,14 s) e os 19 filhos viravam entradas de manifest com
   `mp4: null` — **121,01 s** de vídeo desalinhado esperando a finalização.

**A regra:** quem funde, grava — no mesmo passo, não depois. Cada filho recebe `_mergedInto`; a mãe recebe
a `dur` da **janela inteira** do run. Só então o run existe para o estúdio.

**O que isso ensina além do patch:** *sinalizar não é registrar.* A doutrina do `diretor-de-arte` mandava
"sinalize para quem coordena validar na timeline" — e um agente headless obedeceu do único jeito que sabia:
escreveu um arquivo e o mencionou no report. Instrução que termina num humano vira arquivo órfão quando não
há humano na sala. **Toda decisão que outro programa precisa enxergar tem de virar CAMPO em artefato que
alguém já lê** — e a doutrina tem de dizer qual campo, em qual arquivo. Sem isso, o trabalho fica pronto e
o sistema não acredita. Consertado em `diretor-de-arte.md` §3.2 (instrução mecânica + checagem 4b) e em
`src/manifest.mjs` (respeita `_mergedInto`, que a normalização descartava).
### ARTE-128 · TEXTO QUE SE DATILOGRAFA É **UM** BLOCO — a chave do `qc-carga` é conteúdo, e prefixo crescente virava bloco novo por tecla

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-128` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `energia-escura`. O portão devolveu o vídeo inteiro por
**uma** cena reprovada — a `c07`, cuja etiqueta "ENERGIA ESCURA" se datilografa em
`txEl.textContent = FULL.slice(0,k)`. O laudo que reprovou se contradizia sozinho, e é a contradição
que prova o defeito:

```
densidade: 1 textos @10.7s (teto 9)      ← nunca há mais de UM bloco na tela
ritmo:     6 entradas na janela de 1 s   ← seis blocos novos entrando… num palco de um só
vida:      13 blocos abaixo de 0,5s      ← "EN"=0,1s · "ENERG"=0,1s · "ENERGIA ESC"=0,1s
```

Não há como 6 blocos estrearem num segundo se jamais existe mais de 1 ao mesmo tempo. A cena estava
certa; **quem media errado era o gate.**

**A raiz.** `chaveTexto` é baseada em CONTEÚDO, e tem de ser: a cena de mapa recria os `<text>` a cada
frame, então id de DOM mediria a técnica de desenho, não o ritmo. O gate já tratava dois disfarces do
mesmo bloco — o count-up (máscara de dígito, "44 Mt" = "43 Mt") e a palavra animada em `<span>` por
letra (conta pelo pai). **Faltava o terceiro, que é o mais comum:** um nó só cujo texto CRESCE. Cada
tecla virava chave nova → estreia nova (ritmo) e bloco de 0,1 s (vida).

**O conserto** (`scripts/qc-carga.mjs`, pós-processamento das amostras): unificar A→B quando **as três**
valem juntas — (1) mesmo corpo de fonte e o texto de A é prefixo estrito do de B; (2) A e B **nunca**
aparecem no mesmo frame; (3) B estreia contiguamente ao fim de A (≤1 passo). É a conjunção que impede
afrouxar: dois blocos de verdade que por acaso se prefixam **coexistem**, e continuam separados.
Regressão: **28 de 28 cenas douradas com métricas idênticas** antes e depois — a correção só age onde
há datilografia. Na `c07`: ritmo 1 → 0,08/s, pior janela 6 → 1, vida 0,1 s → **2,4 s** (que é a vida
real da etiqueta na tela, e passa até o piso do ofício).

**A regra maior, e ela não é sobre typewriter:** *gate cuja métrica se contradiz está medindo a
técnica, não a cena.* Densidade e ritmo respondem à MESMA pergunta por caminhos diferentes — pico de 1
com rajada de 6 é impossível no mundo, e impossível no laudo significa defeito no medidor. Antes de
mandar refazer cena que passou por todas as outras lentes, **cheque se as medidas do próprio laudo
fecham entre si**. Reprovar cena certa custa inferência, que é o recurso caro ([ARTE-59] já dizia isso
do lado oposto, quando o gate media a menos).
### ARTE-129 · A CENA PODE ESTAR PERFEITA E NO LUGAR ERRADO — todo gate julgava o HTML SOZINHO, nenhum o comparava com o espelho

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-129` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `energia-escura`. O portão imprimiu **"41/41 cenas passam
os gates duros"** — contrato, colisão, carga, til, tamanho, fora-do-quadro, src-existe, procedência,
espelho×fala, todos verdes — e o vídeo tinha **6 cenas dessincronizadas da narração** e **7 declarando
duração maior que a janela reservada**. Os gates não erraram: eles respondem à pergunta que sabem
fazer, e nenhum deles abria o `espelho.json`.

**O que aconteceu.** A transcrição foi refeita e a fala inteira andou **−16,24 s**. O espelho foi
ressincronizado, mas **não uniformemente** — cena deslocou −11,6 s, outra −22,8 s. Os HTMLs, feitos
dias antes, seguiram coreografados contra a ancoragem velha. O estrago, medido em frame:

| cena | defeito | consequência na tela |
|---|---|---|
| `c38` | arte 6,31 s atrasada | abre com **6,3 s de tela vazia** enquanto a narração já disparou a citação inteira |
| `c26b` | arte 4,60 s atrasada | 3,7 s de quadro vazio em cima do beat principal |
| `c23` | `__duracao` 15 × janela 10,282 | o beat da **trava do ponteiro — metade da tese** — nunca vai ao ar |
| `c11` | `__duracao` 16 × janela 11,023 | 4,98 s de animação desenhada para ninguém |

**Por que passou por tudo.** Cada gate abre um arquivo e mede o que há dentro dele. "Este texto colide
com aquele", "este bloco pisca", "este glifo sai do quadro" — perguntas de dentro da cena. Mas *quando*
a cena começa e *quanto* ela dura são fatos que só existem no espelho, e a arte só está certa em
relação a eles. **Um artefato que se julga sozinho não pode detectar que o contrato mudou embaixo
dele.** O `qc-espelho-fala` chega perto e passa ao lado: valida a âncora do ESPELHO contra a fala, e o
espelho estava certo — quem tinha ficado para trás era o HTML.

**O gate** (`scripts/qc-janela.mjs`, custo zero, sem Chrome): (A) `window.__duracao` × `dur` do
espelho; (B) a âncora que o cabeçalho declara (`Word-lock (−1338)`, padrão da casa) × o `inSec`
vigente. Duas armadilhas, e as duas custaram uma versão errada do gate antes de virar regra:

1. **O relógio inteiro pode ter mudado.** A primeira versão comparou os números crus e acusou **29 de
   41** — porque quando a origem do relógio anda, *toda* cena declara um `inSec` maior pela mesma
   quantidade. A régua é o **consenso**: a mediana dos deslocamentos é o relógio, e o que reprova é o
   **desvio** de cada cena em relação a ela. Gate que acusa o vídeo inteiro ensina a ser ignorado
   [ARTE-77].
2. **Âncora diferente nem sempre é defeito.** Quando o decupador troca de TAKE, o `inSec` muda e a
   FALA da janela é a mesma — a arte continua válida. O desempate é comparar o TEXTO das duas
   janelas: 87 % igual = take trocado (avisa), 37 % = a cena está sobre outra fala (reprova). Sem
   isso, `c24` (o mesmo parágrafo regravado 10,7 s depois) seria mandada para conserto à toa.

**Validação:** os desvios calculados reproduziram, ao décimo, a defasagem que o `qc-visual` levou
~500 mil tokens para achar medindo beat a beat em quatro cenas — `c25` −3,36 × −3,48 medido · `c26b`
−4,60 × −4,70 · `c36` −1,79 × −1,89 · `c38` −6,31 × −6,4.

**A regra maior:** *toda vez que uma estação REESCREVE um artefato que outra já consumiu, o consumo
anterior vira dívida silenciosa.* O espelho foi regravado às 07:05 sobre uma arte de dias antes, e
nada no sistema perguntou "quem já leu isto?". Onde há essa relação — espelho→arte, cortes→espelho,
pesquisa→cena —, o gate não pode ser só sobre o artefato: tem de ser sobre **a distância entre os
dois**. Verde nos dois lados não prova que eles concordam.
### ARTE-130 · TRÂNSITO É RÁPIDO — a peneira "saiu inteiro, logo estava passando" absolvia quem ESTACIONOU na borda

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-130` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `energia-escura`. O `qc-fora-do-quadro` imprimiu
`✓ nada cortado` na `c22`, e o rótulo **"HOJE" fica 3,2 s com a metade de baixo das letras fora da
tela** (t≈12,75 até o fim; `bottom` 2253 num palco de 2160 — conferido em frame, não deduzido).
Quem pegou foi um `qc-visual` medindo `Range.getBoundingClientRect` no DOM: **inferência paga para
achar o que o gate determinístico tinha visto e jogado fora**.

**A peneira era legítima e é ela que precisa de relógio.** O gate aprendeu, em 26/jul, que num
travelling os itens saem pela borda de propósito — *"cortar pela borda enquanto ATRAVESSA é o gesto;
ficar cortado é o defeito"* —, e implementou isso como: se o texto em algum instante aparece 100%
fora, ele estava viajando, e a acusação de corte parcial cai. **Sem relógio, "em algum instante" vale
para sempre**: o "HOJE" desce, estaciona 3,2 s pela metade e só então some inteiro — e a saída no fim
anula retroativamente os 3,2 s de defeito.

A distinção que faltava é de DURAÇÃO, não de destino. Atravessar a borda leva décimos (no
`sp500-aposentadoria-global`, que criou a regra, cada item corta por ~0,4 s); ficar segundos com a
base das letras comida é exatamente o defeito original. A absolvição por trânsito passa a valer só
enquanto o corte for **breve** (`--transito`, default 1,0 s). Reproduzido em HTML mínimo antes de
mexer no gate — regra velha `✓ nada cortado`, regra nova `✗ "HOJE" baixo 85px (desde 12,8s)` — e
regressão nas cenas douradas sem uma única mudança de veredito.

**A regra maior, e vale para toda exceção de gate:** *exceção sem limite não é exceção, é revogação.*
Toda peneira anti-falso-positivo responde a "isto aqui é deliberado" — e quase toda intenção
deliberada tem uma ESCALA que a delata: rápido demais para ser leitura, breve demais para ser
descanso, longo demais para ser passagem. Quando a peneira é escrita só com a condição qualitativa
("saiu inteiro", "está no fim", "é o mesmo elemento"), ela absolve o caso legítimo **e** o defeito
que por acaso termina igual. Pergunte sempre: *quanto tempo o gesto legítimo dura?* — e ponha esse
número na peneira. Irmã de [ARTE-128], onde a resposta foi o oposto (unificar o que o gate contava
duas vezes), pelo mesmo motivo: o gate estava medindo a técnica, não o que o espectador vê.

---
### ARTE-131 · COMPARAÇÃO DE ESCALA É MEDIÇÃO, NÃO FIGURA DE LINGUAGEM — quem escreve "cabe N vezes" deve o cálculo

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-131` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Medido em 03/ago/2026, `o-acre-o-estado-que-o`.** A narração do `s47` diz apenas: *"cerca de 190 mil
quilômetros quadrados, o Acre inteiro, **numa área maior que muitos países da Europa**"* — uma
comparação **vaga de propósito**. A tese do espelho a converteu em número: *"o contorno de um país
europeu real (ex.: Portugal ~92 mil km²) **cabe DUAS vezes dentro**"*, e o `conceito-visual` herdou a
conta sem checá-la. Ninguém mediu nada; o "duas vezes" saiu de dividir dois números redondos de
cabeça (190÷92≈2).

**Três erros empilhados, todos só visíveis com a geometria na mão:**
1. **A área não fecha.** Acre real (malha IBGE, medida elipsoidal) = **164.167 km²**; Portugal
   continental (NE 10m, sem Açores/Madeira) = **87.951 km²**. Cabe **1,87×** — dois Portugais
   transbordam 11.736 km². O "~92 mil" da tese incluía as ilhas, que não entram num encaixe de mapa.
2. **Área que cabe ≠ forma que encaixa.** Portugal em pé tem **574 km** N-S contra **446 km** do Acre:
   ele **não cabe sem girar ~90°**, e dois lado a lado dariam 1.147 km de largura. Encaixe é problema
   de empacotamento, não de divisão.
3. **O número da fala não é o polígono da tela.** Os ~190.000 km² são a área **cedida no Tratado de
   1903** (parte virou Amazonas/Rondônia); o Acre de hoje — o único que existe em GeoJSON público —
   tem 164.167. Rotular o contorno desenhado com "190.000 KM²" é atribuir ao objeto na tela um número
   que não é dele.

**Some-se a armadilha de projeção**, que sozinha inverteria o veredito: Acre a 9°S, Portugal a 39,6°N.
Sobreposto em lat/lon cru ou em Mercator centrado no Acre, **Portugal desenha 1,281× mais largo do que
é** (+28% de área aparente). A "prova visual" de que não cabe seria tão falsa quanto a de que cabe.

**A LEI:** toda comparação de escala que vire **número na tela ou encaixe de contornos** — "cabe N
vezes", "é do tamanho de", "maior que X" — é **medição**, e nasce depois da geometria, não antes.
Quem a escreve no espelho ou no conceito deve declarar: a **área calculada de cada polígono na
geometria que vai ser desenhada** (não a da Wikipédia), o **teste de encaixe por bounding box**, e a
**projeção equivalente** em que os dois foram postos. Sem as três, escreva a comparação **qualitativa**
que a narração já deu — *"maior que muitos países da Europa"* é verdade e não precisa de conta.

**E quando a conta não fecha, a saída não é apagar a comparação — é a verdade medida, que costuma ser
mais forte:** *"cabe Portugal inteiro dentro do Acre e ainda sobra quase outro"* (a sobra real são
76.216 km², 87% de um segundo Portugal) diz a mesma coisa, é impressionante igual, e sobrevive ao
comentário do YouTube que abre o mapa para conferir.

**Raiz e conserto:** o `montador` escreveu a comparação numérica sem a geometria (ela nem existia no
disco — a pesquisa-geo só rodou depois), e o `diretor-de-arte` a promoveu a plano de cena. Ambos os
ofícios passam a exigir a conta declarada antes do número. Conserto aplicado nos dois artefatos do
vídeo em 03/ago (tese do espelho e `midia_ancora` do conceito), com as três medições e a nota de
projeção gravadas na âncora para o mapista. Irmã da [ARTE-94] (a direção conta a própria mídia) e da
[PESQ-30] (geometria se seleciona por código, e trava que não confere identidade não é trava).
### ARTE-132 · CÂMERA COM PUSH-IN REDEFINE O QUADRO — compor no sistema LOCAL da peça e conferir só o frame 0 põe rótulo fora da tela

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-132` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, estação RENDER do `uruguai-despovoado`, cena `s84-recap-3-capital` (M01
dados, tabuleiro de quebra-cabeça). A cena é composta em coordenadas locais de cada peça (`0…S`, com
`S=760`) e a câmera abre **já ampliada no 3º encaixe**: `scale 1,88→1,91` com translate negativo. Isso
é coreografia deliberada — as peças 1 e 2, já encaixadas, ficam propositalmente meio fora de quadro.
O que não era deliberado: os rótulos dos vizinhos moravam justamente na faixa que a câmera come.
Medido no palco, no instante do maior avanço (t≈9,2 s): **a bandeira da Argentina inteira fora da tela**
(`right = −111 px`, nunca apareceu em nenhum frame) e o texto **ARGENTINA sangrando 75 px** pela borda
esquerda — meia letra comida durante os 10,7 s da cena. A do Brasil, no mesmo grupo, sangrava 73 px.

**A conta que ninguém fez.** Com a câmera em 1,907× e o local `x=0` caindo em `−320,6` no palco,
**tudo abaixo de `x ≈ 168` local está fora da tela** — e os rótulos estavam em `x=20` (bandeira) e
`x=130` (texto). A régua não é "está dentro do viewBox", é `x_local ≥ |offset_da_câmera| / escala`.
Quem compõe olhando o SVG parado, ou fotografando o frame 0 (onde a escala ainda é 1,62), vê tudo no
lugar: **o defeito nasce entre o segundo 1 e o 9**, junto com o push-in.

**O gate PEGA isto, e o portão do render é o último a perguntar.** O `qc-fora-do-quadro` varre a
duração inteira exatamente por causa disso e reprovou a cena — mas só depois de a arte estar fechada,
com o render do lote inteiro já feito e a cena barrada segurando o vídeo. Custo real: a estação render
chegou com 57 de 58 clipes e a última travada por um defeito de composição.

**A LEI:** cena com câmera que amplia é composta em **dois sistemas** — o local do elemento e o do
quadro final —, e só o segundo decide o que o espectador vê. Antes de fechar cena com push-in:
1. **projete a área visível** no instante de MAIOR avanço da câmera (não no frame 0, não no bonito):
   `getScreenCTM()` do grupo, ou `getBoundingClientRect()` de cada elemento de borda;
2. **mantenha rótulo, bandeira, logo e número dentro dessa área** — conteúdo que identifica não é
   ornamento, e cortá-lo pela metade é pior do que não o desenhar;
3. quando a palavra **não couber** na faixa visível (aqui "ARGENTINA" em corpo 104 media 595 contra
   592 de faixa útil), a saída é **reduzir o corpo dos rótulos irmãos JUNTOS** — mantendo o piso de
   rótulo da [REND-15] (104 px em 4K; corpo 80 local × 1,91 = 153 px, folgado) — e não empurrar um
   deles para fora nem deixar dois tamanhos brigando na mesma peça.

**Raiz e conserto:** o `editor-de-arte` compôs os `lb1`/`lb2` no sistema local sem projetar a câmera.
Conserto aplicado na cena (bandeiras 80×56 em `x=190`, textos em `x=282` corpo 80), gates
`fora-do-quadro`/`tamanho` verdes e confirmado em frame a t=9,2 s. Irmã da [ARTE-130] (ficar cortado é
o defeito, atravessar é o gesto) e da [ARTE-125] (o buffer recorta o que cai fora do palco em
silêncio) — as três são a mesma família: **o palco não é o mundo, e quem desenha no mundo deve a
projeção**.
### ARTE-133 · DOIS GATES DISCORDANDO DA MESMA CENA APONTAM UM TERCEIRO ARTEFATO FORA DE CONTRATO — não a régua de um deles

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-133` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `orcas-nao-matam`. O `qc-janela` reprovou `c30`:
**`__duracao` 55,22 × janela 23,04 → 32,18 s de animação que não vai ao ar**. O `c31` tem
`_mergedInto: "c30"` e não tem HTML próprio — é um plano-sequência fundido —, e **32,18 s é a `dur`
EXATA do `c31`**. A leitura fácil, que eu fiz: *"o gate não conhece fusão; a janela real é a soma"*.

**Estava errado, e o erro tinha escala.** Somar as `dur` dos `_mergedInto` matou aquele achado e
**criou 52 novos**:

| projeto | gate original | somando a fusão | verdade |
|---|---|---|---|
| `orcas-nao-matam` | 1 achado | 0 | o achado era **real** |
| `galaxia-arco-flecha` | 0 | **11 falsos** | espelho **conforme** |
| `mamute-de-volta` | 27 | **41** (14 falsos) | espelho **conforme** |

Porque a [ARTE-127] já define **uma** semântica: a fusão se grava no espelho e a **`dur` da MÃE já
vale a janela inteira do run**. Medido nos dois projetos conformes: `s02-nao-esqueleto` tem
`dur = 19,06` e a janela do run `[s02→s03]` é **19,06** — idênticas. Somar a `dur` do filho ali é
**contagem dupla**. O único lugar onde a soma "acertava" era o `orcas`, e só porque ele estava **fora
do contrato**: `c30` com `dur = 23,04` cobrindo o primeiro beat de um run de 55,22 s. Existia gate
dedicado (`qc-fusao-espelho`, [SIS-105]) dizendo isso em uma linha — *"clipe longo em slot curto"* — e
conserto oficial de um comando: **`--aplicar`**. Depois dele, `qc-janela` fechou **PASS nas 28 cenas**
sem nenhuma alteração no gate.

**A LEI:** quando dois medidores discordam sobre a mesma cena, **nenhum dos dois é o defeito** — há um
terceiro artefato fora de contrato, e é ele que se conserta. Antes de afrouxar a régua de um gate:
1. **Procure a doutrina do campo que você ia reinterpretar.** `_mergedInto` tinha lei ([ARTE-127]),
   gate próprio e comando de conserto. Eu inventei uma segunda semântica para um campo que já tinha
   uma — e "os outros projetos usam diferente" era, na verdade, "os outros estão certos".
2. **Contagem alta é suspeita da régua, não colheita.** 41 achados idênticos num projeto não são 41
   defeitos; são um erro meu multiplicado por 41. Vale nas duas direções — foi assim que eu li o
   `mamute` como "convenção alternativa" quando ele era o conforme.
3. **Meça o conserto do medidor nos projetos que têm o campo, versão velha × nova.** Sem esse par
   (1 → 0 no orcas, 0 → 11 no galaxia, 27 → 41 no mamute) a troca de 1 achado real por 52 falsos passa
   por vitória, porque o vídeo que você estava olhando ficou verde.
4. **Régua relaxada esconde o defeito do gate vizinho.** Aceitar "dur própria" como janela válida
   mascararia justamente a violação da [ARTE-127] que o `qc-fusao-espelho` existe para pegar — o vídeo
   sairia com o clipe de 55 s num slot de 23 s e nenhum gate perguntaria.

**Raiz e conserto:** a raiz é o **espelho** (fusão decidida no `conceito-visual` e não consolidada na
`dur` da mãe), nunca a arte — `c30.html` não foi tocado. Aplicado `qc-fusao-espelho --aplicar`; o
`qc-janela` voltou ao comportamento original e ganhou só uma **dica de encaminhamento**: quando o
excesso é a `dur` exata de um `_mergedInto`, ele nomeia o comando certo em vez de mandar re-ancorar
arte boa. ⚠️ `scripts/qc-janela.mjs` está **untracked no git** desde que nasceu — a estação QC depende
de um gate que não existe em clone novo.
**ARTE-134.** GATE QUE SEMPRE ACUSA É GATE QUE NINGUÉM OBEDECE — E CONVIDA A "CONSERTAR" O QUE ESTÁ CERTO

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-134` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
   (medido em 03/ago/2026 na estação de arte do `o-acre-o-estado-que-o`, varrendo 510 HTMLs do acervo).
   O `CLAUDE.md` mandava, como auto-QA de toda cena, que `grep -oE '#[0-9A-Fa-f]{3,8}[a-z]'` **voltasse
   vazio** — o caçador de hex corrompido. Rodado no acervo, ele acusa **44 de 400 arquivos e nenhum é
   defeito**. Dois falsos positivos, os dois estruturais:
   • **Backtracking:** em `#050d16` o `{3,8}` recua até `#050` e o `d` seguinte casa o `[a-z]`. Todo hex
     de 6 dígitos com letra minúscula no meio "reprova" — isto é, a paleta navy inteira da casa.
   • **Seletor não é cor:** a convenção da casa nomeia IDs por ano e camelCase (`#b1822{`, `#beamA`,
     `#accHot`, `#ceu`) e `b18`/`acc`/`ce` são dígitos hex válidos. Pior: `fill:url(#ceuG)` é referência a
     `<linearGradient>`, o padrão universal de gradiente SVG — qualquer regex que olhe "hex depois de
     propriedade de cor" acusa metade do acervo.
   O dano não é o ruído, é a **inversão**: o executor que obedece um gate sempre-vermelho ou passa a
   ignorá-lo (e aí o gate não existe), ou "conserta" uma cor válida (e aí o gate causa o defeito que
   deveria pegar). Nesta sessão o teste velho chegou a ser repassado a 7 agentes de arte antes de ser medido.
   • **Conserto:** `scripts/qc-hex.mjs` — ignora referência `url(#…)`, classifica o token inteiro (100%
     hex → decide pelo comprimento, que o CSS fixa em 3/4/6/8; com letra não-hex → só acusa se o sufixo
     for **unidade CSS** grudada, `#08182c` + `px`, que é a assinatura real do replace mal feito).
     Medido: 510/510 limpos, 0 falso positivo, e pega as duas corrupções injetadas em teste.
   • **A regra geral, que vale para qualquer gate novo:** antes de escrever um check na doutrina, **rode-o
     no acervo inteiro e conte os positivos**. Se ele acusa um décimo dos arquivos e ninguém nunca
     consertou nada por causa dele, o defeito está no check. Um gate se valida contra material que
     sabidamente PASSA, não só contra o caso que ele foi escrito para pegar.
**ARTE-135.** O `qc-janela` MEDE DURAÇÃO CONTRA A `dur` **BRUTA** — é cego para o aparo do ripple e acusa

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-135` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
   exatamente a cena que acabou de ser consertada
   (medido em 03/ago/2026 na estação QC do `oceano-700km`, 49 cenas, contra o XML de entrega).
   A [ARTE-124] já manda calcular a duração de desenho no relógio LIMPO (`dur_limpa = dur_bruta − Σ cortes
   internos`). O `scripts/qc-janela.mjs`, que existe para pegar "animação que não vai ao ar", **não aplica
   a própria lei**: ele compara `window.__duracao` com `s.dur` do espelho, e `s.dur` é BRUTO. O resultado
   erra nos DOIS sentidos, e o segundo é o caro:
   • **CEGO onde dói.** Quando a arte nasce com a `dur` bruta — o caso NORMAL, e o que aconteceu aqui —
     `__duracao == s.dur` e o gate diz "em dia". Foi assim que **4 min 46 s de animação** atravessaram o
     gate: `c27` −39,5 s, `c12` −29,5 s, `c10` −20,5 s, `c14` −15,2 s, todas verdes no `qc-janela` e
     todas aparadas pelo gerador. Quem achou o defeito foi o `qa-montagem` medindo o XML montado, **uma
     estação depois do render 4K** — 7 clipes pagos jogados fora.
   • **ACUSA quem está certo.** Re-tempadas as 7 cenas para a janela limpa, o gate passou a listá-las como
     "janela sem cena" (`c18 28.133 < 42.944`, `c29 36.4 < 73.452`, …) — porque o espelho segue guardando a
     `dur` bruta, e ela está morta para efeito de desenho. `n05` foi consertada e re-acusada no mesmo
     minuto. É a [ARTE-134] em estado puro: o gate convida a desfazer o conserto.
   **Placar deste vídeo:** o gate acusou 17 cenas por duração — 3 certas, **14 sãs**, e ficou cego para 8
   com sobra real, entre elas as 4 maiores perdas do vídeo.
   • **Como saber qual é a janela de verdade:** a autoridade é o **XML/composto de entrega** (`<in>`/`<out>`
     em frames ÷ fps), não uma recomputação. ⚠️ **Registrado para poupar o próximo:** a fórmula ingênua
     `dur − Σ(interseção dos cortes com [inSec, inSec+dur])` **NÃO reproduz** a janela real — testada aqui,
     bateu em **30 de 49** cenas. Ela erra nos cards de título (que vivem no gap e são o terceiro relógio
     da [ARTE-124]), nas cenas reancoradas, e onde o gerador aparou por `min(__duracao, janela)`. Consertar
     o gate exige ler a janela de quem a produz, e isso é trabalho de engenharia, não ajuste de constante.
   • **Enquanto o gate não for consertado:** trate reprovação de DURAÇÃO do `qc-janela` como *indício*, e
     confirme contra o XML antes de mandar arte para conserto. Reprovação por **ANCORAGEM** tem outro
     defeito, irmão deste: o gate mede o *desvio do consenso* do lote, então cena a 0,483 s do espelho —
     só 0,083 s acima do `TOL_IN` de 0,4 — foi jogada contra um consenso de 4,829 s e reportada como
     "arte ATRASADA 5,31 s, a fala só bate 60%". Era a `n07`, e ela está **certa**: conferida beat a beat
     contra `words.json`, erro máximo de 0,017 s. O gate compara a janela boa com uma janela FICTÍCIA
     (`inSec + dev`), e é a similaridade dessa comparação inventada que ele reporta.
**ARTE-136.** `qc-tamanho` COLETA OS CANDIDATOS **ANTES** DO LOOP DE TEMPO — texto criado em runtime nunca

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-136` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
   é auditado, e o gate reporta VERDE sobre uma lista vazia
   (medido em 03/ago/2026 na estação QC do `oceano-700km`, cena `c19`).
   `scripts/qc-tamanho.mjs` monta `const all = [...stage.querySelectorAll("*")]` **na linha 130**, e só
   depois entra no loop `for (let t = 0; t <= DUR; t += PASSO)` da **linha 213**, que itera sobre essa
   lista congelada. Todo texto que a cena cria DEPOIS do frame 0 — o `#dyn` que toda cena de mapa usa
   para rótulos, qualquer `textContent`/`insertAdjacentHTML` dentro do `__renderAt` — **não existe** para
   o gate.
   **O que passou:** no `c19` o gate auditou só os pills e imprimiu `"maior": 104`, dando ✓. Não viu o
   herói "2018" (240 px), não viu "JUÍNA" (88 px) e **não viu o crédito, que tem 60 px contra um piso de
   72**. Nas cenas sem texto dinâmico do mesmo projeto ele auditou de verdade (maior = 400 / 150 / 308).
   **O sintoma barato, que serve de teste:** `maior` MUITO abaixo do que a cena obviamente mostra. Medido
   aqui: as 2 cenas de mapa do projeto (`c14` e `c19` — as únicas com `#dyn`) reportam maior = 124 e 104;
   as outras 47, centenas. Um `maior` de ~100 px numa cena que tem manchete é assinatura de coleta vazia,
   não de cena discreta.
   **Por que é pior que "não medido":** a [SIS-106] ensina que "não medido" não é "passou". Aqui o gate diz
   **medido** e mediu outra coisa — o laudo sai com um número plausível, e número plausível não desperta
   ninguém. É a [ARTE-134] pelo avesso: em vez de acusar sempre, ele **absolve sempre**, e o custo aparece
   no vídeo montado.
   • **Conserto:** recoletar os candidatos a CADA passo do loop (o custo é uma `querySelectorAll` por
     frame amostrado, irrelevante perto do Chrome que já está aberto) e **imprimir quantos textos foram
     auditados** — a contagem é o que torna o verde vazio visível sem ninguém precisar desconfiar.
   • **A régua geral:** gate que fotografa o DOM uma vez só mede cena estática. Qualquer gate que julgue
     cena animada tem de reamostrar o DOM na mesma cadência em que julga o tempo — e declarar o tamanho
     da amostra, porque um gate que não diz quantos itens olhou não pode ser distinguido de um que não
     olhou nenhum.
**ARTE-137.** O QUE OCUPA O MESMO RETÂNGULO SE SUCEDE, NÃO COEXISTE (dois casos medidos na auditoria das 55 cenas

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-137` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
   prontas do `o-acre-o-estado-que-o`, 03/ago/2026 — um de arte, um de mapa, mesma raiz).
   **Caso A — o herói que cai por cima (`s51`, showpiece).** O carimbo `COMPRADO POR CONTRATO` batia sobre as três
   cláusulas do tratado, que seguiam em opacidade 1: **1,4 s com "todos os direitos" ilegível debaixo da tinta
   vermelha**. A intenção estava certa e ESCRITA no cabeçalho da própria cena ("ao bater, carimbos/recibo/rodapé se
   recolhem") — só que a lista do recolhimento não incluía as CLÁUSULAS, que eram exatamente o que o carimbo cobria.
   Estar acima na pilha não resolve leitura: durante o cruzamento os dois textos estão na tela.
   **Caso B — dois pinos no mesmo pixel (`s11`, mapa3d).** La Paz e o cume de 4.992 m ficam a poucos quilômetros um
   do outro; com a câmera afastada **se projetam quase no mesmo ponto da tela**. As janelas se sobrepunham 1,1 s e o
   quadro mostrava QUATRO rótulos empilhados (dois títulos + duas cotas), nenhum legível. Distância geográfica não é
   distância na TELA — e a projeção muda com a câmera, então o mesmo par pode estar separado num instante e colado
   no seguinte.
   • **Conserto (os dois casos):** a saída do anterior COMEÇA antes da entrada do próximo (~0,2 s bastam; são 4-5
     frames, imperceptíveis como gesto e decisivos para a leitura). No caso A o piso não é 0 e sim ~0,18 — o
     documento continua como TEXTURA em vez de o palco apagar; no caso B a troca é também editorial (o foco muda da
     capital para a muralha).
   • **A régua ao escrever:** ao pôr "X entra por cima", listar TUDO que ocupa aquele retângulo e dar a cada um a
     sua saída. O que não estiver na lista continua em opacidade 1 — o esquecimento é silencioso.
   • **Como separar defeito de ruído no `check-overlap`:** olhar a DURAÇÃO. Colisão que dura ≥1 s é defeito de
     leitura; colisão de UMA amostra (`t=10.4–10.4s`) é o cruzamento do fade e é normal. E colisão entre as duas
     linhas de um MESMO letreiro inclinado (`BOLIVIAN` ✕ `SYNDICATE`, `s45`) é falso positivo estrutural: a bbox é
     axis-aligned e a de linhas rotacionadas se cruza sem a tinta se tocar. Confirmar sempre com o frame ([ARTE-134]:
     gate que sempre acusa é gate que ninguém obedece).
   • **A família toda do falso positivo tem uma raiz só: partes de uma MESMA unidade tipográfica animadas como
     elementos separados.** Além do letreiro em duas linhas, o caso que fecha o padrão é a PONTUAÇÃO animada à
     parte — no `s66` o gate acusou `VIRGEM` ✕ `?` por **4 s** (acima da régua de 1 s!), e no frame é simplesmente
     `FLORESTA VIRGEM?`, com o `?` entrando depois para virar a chave da frase. Área minúscula (1.977 px², ~44 px
     de lado no palco 4K) é o segundo sinal: colisão real de leitura tem área grande. **Duração longa NÃO basta
     para condenar — duração longa + área grande, e o frame decidindo.**
**ARTE-138.** CRÉDITO CORTADO PELA BORDA — O DEFEITO QUE NENHUM GATE VÊ (medido no `o-acre` `s11`, 03/ago/2026).

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `ARTE-138` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
   O crédito do mapa passou da borda direita do palco e cortou `© OpenStreetMap contributors` em **"© OpenS"** —
   morreu justamente a atribuição obrigatória, a única parte não-negociável da linha. A cena irmã `s02`, com o
   MESMO código e o mesmo `size:72`, cabia: tinha 90 caracteres. O `s11` acrescentou o prefixo do DEM e foi a 150.
   • **Encolher a fonte NÃO é a saída:** o piso do papel `credito` no `qc-tamanho` é 72 px em 4K, e descer reprova.
     **Quebre em DUAS LINHAS** — que é, aliás, o que as cenas de mapa do mesmo vídeo que usam `<div>`+`<br>` já
     faziam. As que usavam `<text>` SVG de linha única foram as duas que estouraram.
   • **Régua de bolso:** em 72 px cabem ~120 caracteres numa linha do palco 3840. Passou disso, quebra.
   • **Por que ninguém pegou:** o `check-overlap` só vê colisão ENTRE textos e o `qc-tamanho` só vê altura — texto
     que sai pela BORDA não é colisão nem é pequeno, é invisível para os dois. Só o frame denuncia. É a prova de que
     `shot.mjs` + olho é gate de verdade, e não formalidade: os dois gates determinísticos imprimiram ✓ na mesma
     cena em que a atribuição do provedor estava partida ao meio.
**ARTE-114.** BRIEFING DE RE-TEMPO TEM DE SEPARAR A JANELA **PRÓPRIA** DA JANELA **ABSORVIDA** — senão o
   artista coreografa a cena contra a fala da cena SEGUINTE, e executa certo um insumo errado
   (medido em 03/ago/2026 na estação QC do `oceano-700km`, cena `c20`).
   Pela [FIN-47] o gráfico de uma cena **cobre a janela do apresentador** que vem depois dela: o clipe
   entregue é maior que a fala própria da cena. Medido aqui: janela limpa própria da `c20` = **32,666 s**,
   clipe entregue = **40,4 s**, e a diferença de **7,734 s** é exatamente a `dur` do `ap12` (7,733).
   O gerador de `_retempo/<cena>.md` derivou o word-lock da janela do CLIPE, não da janela da CENA, e
   entregou sob o título "WORD-LOCK NOVO — a fala que o espectador REALMENTE ouve por cima desta cena"
   palavras que são de `ap12` e da cabeça da `n12-nao-e-um-oceano`: `33.94 honesta` · `37.43 oceano.` ·
   `38.33 Se` … `39.85 seiscentos`. Nada disso é fala da `c20`.
   **O dano é sutil e é de SENTIDO, não de sincronia.** O artista ancorou corretamente contra o que
   recebeu, e o cabeçalho do HTML herdou a ambiguidade. Resultado na tela: nos 8,4 s finais (21% do
   clipe) a narração VIRA A CHAVE — *"Mas agora vem a parte honesta. Aqui a manchete não conta. **Não é um
   oceano.**"* — e a cena segue sustentando "Um fóssil, três cofres" com os três diamantes, isto é,
   **afirmando exatamente o contrário do que está sendo dito**. Nenhum gate vê: a duração está certa, o
   word-lock "bate", a colisão é zero.
   • **O briefing tem de trazer os dois blocos, rotulados:** *fala PRÓPRIA* (até 32,666 s, o que a cena
     tem de ilustrar) e *janela ABSORVIDA* (32,666→40,4 s, onde a cena **acompanha** a narração de outra
     unidade). E tem de dizer o que fazer na segunda: **esfriar o próprio enunciado** — baixar opacidade,
     dessaturar, contrair — nunca sustentar a afirmação, e nunca inventar a imagem da cena seguinte, que
     entra logo depois e fica roubada.
   • **A pergunta que fecha:** *"esta palavra é da minha cena ou da janela que eu só cubro?"* Se o
     briefing não responde isso, ele não é briefing de cena — é briefing de clipe.
**ARTE-115.** GIRO SÓ LÊ EM ELEMENTO **ASSIMÉTRICO** — gire o QUADRO, nunca o objeto radialmente simétrico
   (medido em 03/ago/2026 na estação QC do `oceano-700km`, cena `c29`, o SHOWPIECE DE FECHO).
   O cabeçalho prometia uma inversão de 180° como o evento da virada conceitual. O `rotate()` era aplicado
   em `#giro`, que contém **círculos concêntricos** (radialmente simétricos) mais uma nuvem de pontos
   aleatória. Rodar um objeto radialmente simétrico **não produz movimento visível**: os frames de 30.8,
   31.5 e 33.2 eram indistinguíveis entre si a não ser por um encolhimento de 10%. Resultado: **3,3 s sem
   nenhum evento novo na tela**, exatamente sobre *"talvez os oceanos daqui de cima sejam só a parte que um
   dia vazou pra fora"* — a frase que a cena existe para pagar.
   **O conserto é de referencial, não de valor:** o giro passou para um wrapper que envolve o campo
   estelar + o globo + as esferas. Aí gira o QUADRO — e o campo estelar, que é assimétrico por
   construção, denuncia a rotação. Medido depois: os mesmos instantes viraram frames com md5 distintos e
   diferença visível a olho.
   **Duas armadilhas do mesmo conserto, ambas encontradas na execução:**
   • **O que NÃO deve girar tem de ficar fora do wrapper.** A estampa de texto ficou em screen-space; se
     entrasse no giro, entraria de cabeça para baixo.
   • **Campo estelar tem de cobrir a DIAGONAL do palco, não a aresta.** Ao girar, o canto do quadro varre
     além da borda: o campo foi para 4440×4440 (meia-aresta 2220 > meia-diagonal 2203) para nenhum ângulo
     intermediário descobrir canto sem estrela.
   • **Efeito colateral que só aparece quando o giro passa a existir:** as gotas eram calculadas para "o
     hemisfério de cima **no referencial girado**". Com o giro invisível, saíam embaixo. Consertado o
     rig, o sinal do ângulo local teve de ser invertido junto. *Quando um giro não lê, tudo que foi
     posicionado relativo a ele está errado em silêncio — e conserta-se junto, no mesmo passe.*
   **A pergunta que fecha, antes de coreografar qualquer rotação:** *o que, neste elemento, denuncia que
   ele girou?* Se a resposta for "nada", o giro não existe para o espectador — por mais correto que esteja
   no código.
**ARTE-116.** FERRAMENTA DE CAPTURA ESPERA O SINAL DA CENA, NÃO O RELÓGIO (medido no `o-acre`, 03/ago/2026,
   por duas vias independentes no mesmo dia).
   Cena de mapa expõe `window.__aguardarMapa` justamente para dizer "os tiles do enquadramento novo
   chegaram". Existem três caminhos de captura na casa, e eles **discordavam**: o `render/capturar.mjs` (o
   render 4K de produção) chama o gancho a CADA frame; o `shot.mjs` chama duas vezes; e o `maprender.mjs`
   — **o único escrito PARA cena de mapa** — não chamava nenhuma vez, só `waitForTimeout`. O mapista mediu
   o estrago no `s65`: frame com metade dos tiles faltando (fundo `#08151f` em cruz) numa cena que o render
   4K produz inteira. A ferramenta feita para validar mapa era a que menos esperava mapa. Consertado
   (chama o gancho antes e depois do segundo `__renderAt`, porque é o primeiro que move a câmera e só então
   o maplibre pede os tiles novos); o frame que saía cortado passou a sair com 6,5 MB.
   **A segunda via, no mesmo dia:** o `shot.mjs` de um WORKTREE 673 commits atrás não tem esses ganchos e
   devolveu **22 KB de tela quase preta** numa cena boa — e por um instante fez o editor-chefe duvidar do
   laudo correto do agente. O sinal barato de que você está na cópia velha é a RESOLUÇÃO: cena boa sai
   3840×2160; se saiu 1920×1080, o `data-render="4k-native"` não foi lido.
   • **A régua:** falso NEGATIVO visual é pior que falso positivo. Um gate que acusa demais é ignorado
     ([ARTE-134]); um que mostra preto onde há imagem faz alguém **consertar o que estava certo**. Antes de
     acreditar num frame vazio, confira (1) de qual cópia do script ele veio e (2) se a ferramenta espera o
     sinal que a cena emite.
   • **TERCEIRA VIA — o mesmo buraco, agora em FOOTAGE (medido na `c02` do `oceano-700km`, 04/ago).** O
     conserto acima cobriu o sinal do MAPA; o do VÍDEO continuou de fora. `shot.mjs:64` ainda é
     `waitForTimeout(temMapa ? 2500 : 350)` — relógio puro —, enquanto `render/capturar.mjs:252-262` espera
     `requestVideoFrameCallback`, *"que só dispara quando um novo frame de vídeo foi de fato apresentado"*,
     com `seeked` como rede. Em clipe **all-intra 4K a ~146 Mbps** o seek não completa em 350 ms: o
     `shot.mjs` devolveu **frame preto em 3 de 4 tentativas** (t=11.9 e 15.0) numa cena boa, e a mesma cena
     recapturada com a disciplina do render saiu com imagem em 6 de 6 (luminância 204–210).
     *A cena não mudou; mudou quem esperou.*
     **Por que dói mais aqui:** footage pesado é exatamente onde mora a lente de COBERTURA. Frame preto faz
     o revisor concluir "a mídia real não está na tela" — o oposto do que existe —, e essa é a conclusão
     que manda converter cena e descartar clipe pago. Some com [SIS-106]/`qc-carga`, que já submede cena com
     mídia em lote por não esperar `__fotosProntas`: **as duas ferramentas de aferição visual da casa erram
     para o mesmo lado, e é o lado que faz gastar.**
     **Conserto pendente** (não aplicado — ferramenta compartilhada por todas as produções, e a estação QC
     que mediu decidiu não mexer em código de aferição sem validar em lote): dar ao `shot.mjs` o mesmo
     gancho de vídeo do `capturar.mjs`, com teto de espera para não pendurar em cena sem `<video>`.
**ARTE-117.** GATE QUE LÊ UM CAMPO DE ENUM FECHADO NÃO PODE COBRAR O QUE O ENUM NÃO SABE DIZER
   (medido em 04/ago/2026, estação FINALIZAÇÃO do `energia-escura`).
   O `qc-deserto-real` mede a maior janela contínua sem registro real na tela. O comentário da LEITURA
   PRINCIPAL sempre disse, em voz alta, *"qualquer segmento com mídia real quebra o deserto — **inclusive o
   plano do apresentador**, cuja mídia é a própria gravação"*. Mas o que o código testava era só
   `MIDIA_REAL.has(s.midia)`, e `midia` é um **enum FECHADO** em `contratos/espelho.schema.json`:
   `["animacao","footage","foto","drone"]`. **Não existe valor para "é a gravação do apresentador".**
   O montador é obrigado a escrever `"animacao"` nesse plano — e o gate então contou **42 aparições de uma
   pessoa real** como deserto.
   O tamanho do erro: o laudo acusou **549 s (9min09s)** de janela e **80% do vídeo em deserto**, com o
   texto *"o espectador atravessa 9min09s sem ver uma foto, um vídeo ou um relevo"*. Contando o
   apresentador, a maior janela é **77 s** — abaixo do piso de 180 s, **0%** em deserto. O Bôco reaparecia
   a cada 77 s no pior caso.
   **Por que isto era caro:** o laudo mandava devolver **40 cenas à arte**, e o próprio texto do gate avisa
   que "cada cena convertida joga fora um clipe pago". O alarme falso não custava só atenção — custava o
   render 4K de 40 cenas prontas e aprovadas.
   **Conserto (aplicado):** a leitura principal passou a ser `ehReal(s) || s.modo === "apresentador"`, que
   é o que o comentário já prometia. A leitura ESTRITA (só cobertura do assunto quebra) segue intacta e
   ainda informa os 549 s — esse dado é editorial e verdadeiro; o que estava errado era ele disparar o
   alerta contratual.
   **A regra geral:** antes de um gate cobrar a presença de algo, confira se a fonte que ele lê **tem como
   declarar esse algo**. Quando o vocabulário do contrato não alcança o conceito, o gate mede a lacuna do
   schema e chama de defeito do vídeo. Some com [SIS-106] e [ARTE-116]: as ferramentas de aferição da casa
   erram para o lado de "a mídia real não está lá" — o lado que manda descartar trabalho pago.

---
### ARTE-118 · O que a câmera move não pode encostar na borda — e `stroke-dasharray` reinicia a cada subpath (04/ago/2026)

**Duas armadilhas de execução medidas no mesmo QC** (`o-acre-o-estado-que-o`, 71 cenas por visão). Nenhuma
das duas é erro de conceito: as cenas estavam certas na ideia e erradas no pixel, e os dois defeitos
reincidiram em blocos que agentes diferentes desenharam — é padrão, não descuido isolado.

**1 · ELEMENTO FILHO DE `#cam` VAZA PELA BORDA.** A câmera respira (`scale`, `translate`), e tudo que é
filho dela viaja junto. Dois modos de falhar, os dois no ar:
- **O que sai:** o crédito `Fonte: CPDOC/FGV` do `s45` — a **única atribuição da cena**, do dado de
  £110.000 — estava dentro do contêiner que a câmera move e foi cortado pela borda inferior, 12→21px, com
  o corte **crescendo com o tempo** (5,8s → fim). Crédito que sai do quadro é o mesmo que crédito ausente.
- **O que entra:** o `<div id="nevoa">` do `s67` é 3840×2160 com `inset:0` e era filho de `#cam`, que abre
  em `scale(0.9469)` — então as **arestas retangulares do véu caem DENTRO do quadro** (medido no frame 0.3:
  esquerda x≈103, topo y≈57, direita x≈3739; o cálculo previu os três valores). Lê como glitch, não como
  atmosfera.

  **A regra:** o que precisa ficar ancorado ao QUADRO (crédito, rótulo de canto, véu, vinheta, scrim de
  tela cheia) mora **irmão** de `#cam`, dentro de `#palco` — nunca dentro dele. Se tiver de ficar dentro,
  superdimensione (`left:-240px;top:-160px;width:4320px;height:2480px`) para a borda nunca aparecer. E
  margem de segurança ≥64px medida na pose MAIS FECHADA da animação, não no frame 0.

**2 · CLAMP QUE PROTEGE O PONTO NÃO PROTEGE O TEXTO.** `clamp(430, 3560, x)` com `anchor:"middle"` garante
que a ÂNCORA fique no palco e não diz nada sobre a caixa: no `s21`, uma linha de 74px/ls 5 mede ~1440px, e
com x=3560 a borda direita cai em ~4280px — 440px fora. O que sumiu foi o **ano**: lia-se
`DESLOCADOS NO CEARÁ SÓ EM 187`, e o ano era o qualificador que impedia o número de mentir. Mesma família
no `s38` (`white-space:nowrap` num card de 704px: "PLÁCIDO DE CAS") e no `s04` (chip de 520px que quebra o
rótulo em duas linhas e joga o "+" EM CIMA do ícone). **Clampe pela meia-largura da linha mais larga, ou
meça `getBBox()` depois de desenhar.** Texto de largura variável nunca se protege pelo ponto de ancoragem.

  **Entre as duas saídas, prefira a medida.** Clamp numérico fixo (`clamp(760, 3060, x)`) embute uma
  meia-largura calculada na máquina de quem escreveu — e a métrica muda: Neue Haas no Mac, fallback no
  Linux do render. Chute de largura no código **erra em silêncio**, justo do lado que corta. `getBBox()`
  depois de desenhar mede o que existe. E ao empurrar o bloco para dentro, devolva o `dx` para o que
  aponta para ele (fio de chamada, seta, linha-guia) acompanhar: senão o texto entra no quadro e a
  associação com o lugar sai. Foi assim que a `s21` fechou os DOIS gates num passe — quebrar a linha em
  duas permitiu **subir** a fonte de 74px ao piso de 104px em vez de encolhê-la para caber.

**3 · `stroke-dasharray` REINICIA A CADA SUBPATH — gestos num `path` único revelam EM PARALELO.** Descoberto
ao re-traçar a assinatura do `s69`: os três gestos estavam num `path` só, separados por `M`, com a revelação
por `dashoffset`. No Chrome cada subpath reinicia o padrão do dash, então os três apareceram **ao mesmo
tempo**, matando a leitura de "uma assinatura sendo escrita". Conserto: **um elemento `<path>` por gesto**
(par fio+glow), com `dashoffset` sequencial cumulativo. Vale para qualquer traçado narrado — assinatura,
rota, contorno que "se desenha".

**4 · CAMPO DE DENSIDADE SOMADO NO CANVAS SATURA — a soma é em 8 BITS.** Medido no `s76`, mapa de calor
dos 961 sítios: o revisor acusou que, em *"o sudoeste da bacia, justo onde o Acre fica"*, o núcleo
incandescente caía **inteiramente fora** do contorno do estado. A causa aparente era o raio do kernel
fixo em pixels de tela (a densidade mudava de definição durante o voo: σ 0,59° na pose larga → 0,14° na
fechada) — e isso era mesmo um defeito. Mas a causa MAIOR estava na aritmética: somar 961 sprites com
`globalAlpha ≈ 0,005` **soma em 8 bits**. Cada contribuição valia 1,2 nível e **arredondava**, então o
campo deixava de medir densidade e virava contagem de vizinhos, saturando num platô branco que engolia a
divisa. O mapa não estava exagerando o cluster: estava medindo errado.

  **Conserto:** montar o campo **em ponto flutuante** (impulsos bilineares numa grade + blur gaussiano
  separável, normalizado) e compor **uma vez só** no canvas — zero acumulação em 8 bits. E o raio do
  kernel em unidade **geográfica** (graus), convertido para células da pose corrente, para que a mesma
  densidade signifique a mesma coisa em qualquer altura de câmera.

  **A prova é contra a geometria, não contra o olho:** medir a luminância do canvas contra a máscara do
  polígono rasterizada **na mesma projeção do frame**. Antes: núcleo com 59,2% da área fora do polígono.
  Depois: centro em lon −67,41 / lat −10,09, dentro. **E o que não se conserta, se declara** — o halo
  segue transbordando a divisa a leste porque o cluster real transborda (456 dos 961 sítios estão fora do
  estado). Recortar o halo na divisa deixaria a imagem mais bonita e o dado mentiroso.

**Agente-raiz:** `editor-de-arte` e `mapista` (os quatro padrões apareceram nos dois).

---
### ARTE-119 · A cena tem de caber na janela EXIBIDA — e procurar a CAUSA conhecida acha só o defeito conhecido (05/ago/2026)

**Medido no QC do `orcas-nao-matam`.** Oito cenas chegaram ao render 4K com 30% a 62% do clipe fora do
ar. `c32` renderizou 114,73s e o espectador vê 43,74s; `c33` renderizou 66,93s e vê 29,96s; `c27b`
renderizou 95,30s e vê 51,74s. Não é margem: o `conceito-visual.json` chama a `c32` de **clímax
emocional do arco**, e o reveal dela ("UMA ALIANÇA IMPROVÁVEL") está montado, bonito, e cai em
clip-local 82,28s — 38 segundos depois do último frame que alguém vai ver.

**Nenhum gate perguntava.** O `_portao.json` marcava as três `ok:true, falhas:[]`.

**HÁ TRÊS RELÓGIOS, e a arte só olhava dois:**

| relógio | o que é | quem media |
|---|---|---|
| `__duracao` | o clipe que o render produz | `qc-contrato` |
| `dur` do espelho | o span da FALA no bruto | `qc-janela` ([ARTE-129]) |
| **a janela EXIBIDA** | do `inClean` até a **próxima cena COM CLIPE** | **ninguém** |

O terceiro é o único que o espectador experimenta, e ele **não se deduz dos outros dois**: depende de
onde a cena SEGUINTE entra no relógio limpo. A conta é `Math.min(inClean + dur do clipe, next.inClean,
cleanDur)`, exatamente como em `compor-base-youtube.mjs` — reproduzir a regra do compositor em vez de
estimá-la é o que separa um gate de um palpite. O gate é `node scripts/qc-janela-exibida.mjs <proj>`.

**⚠️ E O AVISO QUE VALE MAIS QUE O GATE — o método de busca é que estava errado.** O achado de 03/ago
varreu as cenas por **grep de `eff(`/`colapso(`**, a assinatura do remap da [ARTE-97], e devolveu 5
cenas. Medindo o EFEITO em vez da causa, são 8 — e **`c33` e `c27b` não têm remap nenhum**: elas
simplesmente autoraram beats além da janela. Escaparam porque não havia o que grepar.

> **Procurar a assinatura de uma causa conhecida encontra só as cenas que falharam do jeito conhecido.**
> Quando o defeito tem um efeito MENSURÁVEL, meça o efeito: ele pega os caminhos que você ainda não sabe
> que existem. A lista por causa e a lista por efeito são **complementares, não substitutas** — `c26` e
> `c30` têm o remap e vão ao ar inteiras (o defeito delas é congelamento interno, não cauda), e por isso
> aparecem numa lista e não na outra. A união é a verdade; qualquer uma sozinha subconta.

**CUIDADO AO ESCREVER O GATE — e o erro que quase silenciou o achado mais grave:**
- **Segmento FUNDIDO não é invadido: ele É a cena.** `c30` acusou "34s por cima de c31" sendo que `c31`
  é justamente a metade fundida dentro do `c30.html` (`_mergedInto`). Esse sim era falso positivo.
- **⚠️ CARD DE TÍTULO ENTRA NA CONTA — eu excluí e estava ERRADO.** O gate acusou "`t04`: 0,03s no ar,
  99% morto". Raciocinei que o card vive no GAP de 3s que o XML abre (FIN-17), logo não ocuparia
  espaço na timeline limpa, e o excluí como artefato. A prova de que o defeito era real está escrita
  em uma linha de `scripts/finalizacao-config.mjs:143`:

  > `gapsLimpo: [], gapSec: 3,   // o composto não abre os gaps de 3 s dos cards — só o XML abre`

  **O COMPOSTO É A ENTREGA** (FIN-34) e nele o card não ganha buraco nenhum: é truncado pela regra
  normal. Quando a cena seguinte TEM clipe e entra no mesmo instante, o card fica **1 frame** no ar.
  Medido: `t04` 0,03s e `t02` 0,22s de um clipe de 3,9s — e com o `t04` some a única imagem real de
  veleiro do bloco. Os outros dois cards do vídeo passam só porque a cena seguinte é apresentador
  (sem clipe, não trunca). **Não existe regra especial de card: existe a regra geral, e ela bastava.**

  A lição é sobre a forma do erro, não sobre cards: *o gate acusou, eu não acreditei, e "consertei" o
  gate até ele concordar comigo.* Achado incômodo de gate novo merece a mesma investigação que
  achado de gate velho — a diferença é que no gate novo a hipótese "o gate está errado" parece
  barata, e foi por essa porta que o defeito quase passou. **Antes de silenciar um achado, ache no
  CÓDIGO a linha que prova que ele é falso.** Aqui a linha existia e provava o contrário.

**E O QUE NÃO É DEFEITO:** a cauda passando por cima do APRESENTADOR é o comportamento normal do
compositor — a arte segue no ar enquanto o Bôco fala, e a FIN-08 combate a FRESTA (o rosto aparecendo
por acidente), que é o oposto. Tentei separar "cobertura legítima" de "cauda vazia" casando
`/MANTER o rosto/` na tese do segmento: **bate em 18 de 18**, porque é o prefixo padrão que o montador
escreve em todos. Um teste que casa com tudo não separa nada, e **um gate que promete separar e não
separa é pior que gate nenhum** — quem lê "8 cenas tapam o rosto" age sobre um número vazio. Ficou como
aviso com a conta honesta, e quem julga se a cauda é viva ou parada é o olho, não o script.

**Agente-raiz:** `editor-de-arte` (checklist §7, item 10). Ao fechar QUALQUER cena, rode
`qc-janela-exibida` junto com o `qc-janela`: a pergunta não é só "cabe na fala que o espelho reservou",
é "cabe no pedaço que a cena seguinte deixa sobrar".

---
### ARTE-120 · O Ç maiúsculo da Neue Haas quebra em TODOS os pesos — e um gate que cobre metade de um defeito dá o verde da metade inteira (05/ago/2026)

**O defeito:** na Neue Haas Grotesk Display Pro o **Ç MAIÚSCULO** desenha a cedilha ~30px abaixo do C,
com folga visível — lê como vírgula solta no meio da palavra. O `ç` minúsculo sai certo.

**⚠️ O ESCAPE DOCUMENTADO NÃO SERVE AQUI.** O `CLAUDE.md` e o `infra/render/FONTS.md` descrevem o bug do
**Ã/Õ na Bold (600–749)** e mandam "usar 900 (Black) **ou** Helvetica Neue", como se fossem dois escapes
equivalentes. Para o Ç eles não são: **o defeito não é de peso**. Medido no `orcas-nao-matam` (05/ago),
os dois casos do vídeo estavam em **peso 800** e quebravam do mesmo jeito. Quem segue a regra ao pé da
letra troca o peso, acha que consertou, e o frame continua errado.

**A cura:** trocar a **FAMÍLIA** (`"Helvetica Neue","Helvetica","Nimbus Sans",Arial,sans-serif`),
mantendo 900 por causa do Ã — e **no BLOCO inteiro**, nunca numa linha só: duas famílias dentro da mesma
frase é defeito novo. A métrica é a mesma da Helvetica (E .667 · S .667 · P .667 · A .722 · C .722 ·
O .778), então centralização e alinhamento não se mexem.

**E A LIÇÃO QUE VALE ALÉM DA FONTE.** O `scripts/_audit-til.mjs` era citado como *o* gate de caixa alta
acentuada em 6 documentos, e sabia procurar **só o til**. No `orcas-nao-matam` ele imprimiu
**"0 arquivo(s) afetados"** com duas cenas quebradas na tela — uma delas o `#rvT` **"UMA ALIANÇA
IMPROVÁVEL"**, o CLÍMAX do vídeo. O 0 não era mentira sobre o til; era verdade sobre metade do problema,
lida como verdade sobre o todo.

> **Gate que cobre metade de um defeito conhecido é mais perigoso que gate nenhum**, porque devolve um
> verde com a autoridade do todo. Quem lê "0 afetados" num gate chamado "auditoria de caixa alta
> acentuada" conclui *tipografia ok* e segue — e o gate nunca disse isso. Quando um defeito tem
> **variantes com curas diferentes**, o gate tem de nomear a variante na saída (aqui: `TIL` × `CEDILHA`,
> cada uma com o seu conserto), senão a metade coberta absolve a descoberta.

O gate foi estendido em 05/ago e agora acusa as duas variantes, cada uma com a sua cura — e mede o glifo
**RENDERIZADO** (`text-transform:uppercase` faz "Aliança" virar "ALIANÇA" na tela; olhar só a string do
HTML deixaria passar).

**A MESMA DOENÇA, OUTRO ÓRGÃO — o gate que CONTA e não MOSTRA.** No mesmo dia, o `qc-janela` rodado no
`energia-escura` imprimiu **"✗ 1 cena(s) fora da janela do espelho:"** e, embaixo, **nada**. O laço de
impressão listava só os tipos `ancoragem` e `duracao`; o gate ganhou `duracao-card` com a [ARTE-93] e
**não ganhou a linha que imprime esse tipo**. O erro era real (`cTITULO4` com `__duracao 2.5 < gap 3` =
0,5s de tela preta), estava contado no rodapé e invisível no corpo.

> **Gate que reprova sem dizer O QUÊ é inatendível.** Não é um defeito cosmético de log: quem recebe o
> FAIL não tem por onde começar, e a estação trava por falta de INFORMAÇÃO, não por falta de conserto —
> o pior jeito de parar, porque parece trabalho e não é. Quando um gate cresce um tipo de achado novo,
> a saída tem de crescer junto; e o laço de impressão precisa de um **varredor final para os tipos
> desconhecidos**, senão o próximo tipo repete a história em silêncio.

**Agente-raiz:** `editor-de-arte` (e `mapista`, que também rotula em caixa alta).

---
### ARTE-121 · A silhueta AFIRMA a espécie — e o mesmo animal desenhado duas vezes no mesmo vídeo sai com duas anatomias (05/ago/2026)

**Medido no `orcas-nao-matam`:** o QC pegou **quatro** silhuetas de animal irreconhecíveis, em quatro
cenas desenhadas por agentes diferentes, num vídeo **sobre** esses animais:

| cena | o que era para ser | o que estava na tela |
|---|---|---|
| `c30` | ORCA | cauda bifurcada **VERTICAL** — a topologia do `tunaTail()`, só escalada; ao lado do atum âmbar, silhuetas idênticas |
| `c01` | FOCA | corpo em gota com caudal vertical de peixe, sem nadadeiras dianteiras nem cabeça de pinípede |
| `c08` | CHIMPANZÉ | bolha redonda azul-escura com um olho preto — a segunda entidade da comparação central da cena |
| `c25`/`c26` | FOCA / leão-marinho | irreconhecíveis como pinípedes (mesmo desenho, duas cenas) |

E o mais revelador: **as cenas `c26` e `c27b` do MESMO vídeo desenhavam a orca CORRETAMENTE** — fluke
horizontal, mancha ocular, sela, dorsal, peitoral. Não era falta de referência: era falta de reuso.

> **Silhueta não é ornamento — é uma AFIRMAÇÃO.** Um pinípede com cauda de peixe afirma uma coisa falsa
> sobre o animal, do mesmo tipo que um número errado num card. A lente `factual` cobra a silhueta pelo
> mesmo critério do dado, e nenhum gate a vê: `qc-tamanho`, `check-overlap` e `qc-contrato` passam
> todos por cima de um atum com nome de orca.

**A REGRA, em duas metades:**

1. **Antes de desenhar uma espécie, procure-a nas cenas IRMÃS do mesmo vídeo.** Se alguma já a
   desenhou e passou no QC, **copie 1:1** — é a silhueta canônica daquele vídeo. Duas anatomias do
   mesmo bicho no mesmo vídeo é continuidade quebrada, mesmo que ambas fossem defensáveis sozinhas.
2. **Cada espécie tem 2–3 traços que a tornam RECONHECÍVEL**, e eles não são estilo, são identificação:
   cetáceo → fluke **horizontal** (peixe tem vertical); pinípede → nadadeiras dianteiras visíveis,
   cabeça arredondada sem orelha externa, corpo fusiforme; primata → membros longos articulados e
   proporção de tronco. Estilizar é livre; **apagar o traço identificador não é**.

**O teste, e ele é barato:** `shot.mjs` no frame em que o animal está no ar, **crop ampliado** na
silhueta, e a pergunta de um leigo — *"que bicho é esse?"*. Se a resposta não vier em 1 segundo, a
silhueta falhou. Foi assim que as quatro foram pegas, e nenhuma delas tinha gate vermelho.

**Agente-raiz:** `editor-de-arte`. Quando o conserto for numa função compartilhada (`buildOrca`,
`buildSeal`), avise no retorno para o editor-chefe propagar — **não saia editando as cenas irmãs por
conta própria**, que é como se cria a terceira anatomia.

---
### ARTE-122 · "Citação" sem frase citada: o tipo de cena promete um herói que a fala nunca deu, e quem reprova é a cena certa (05/ago/2026, QC do `especies-humanas`)

**O caso.** `s27 — Svante Pääbo e o Prêmio Nobel` está no espelho como `modo:"citacao"` (M06). O roteiro
**não cita o Pääbo**: ele o NOMEIA — "o sueco Svante Pääbo, que liderou o trabalho, ganhou o Prêmio
Nobel". Não há frase entre aspas em lugar nenhum da fala.

O M06 pede quatro coisas: foto real + nome em caixa de acento + cargo + **fala com trecho-chave
grifado**. A arte entregou as três primeiras e, corretamente, **não inventou a quarta** — fabricar aspa
é proibido. Resultado: o qc-visual deu **9 nas 9 lentes** ("sem aspa fabricada — não há frase verbatim
no roteiro, corretamente não inventada") e o gate duro reprovou:

```
[tamanho] [heroi] texto-herói "Svante Pääbo" 113<260
```

Porque `citacao` está em `MODO_COM_HEROI`, e está com razão: numa citação de verdade a fala é autorada
a 260px — é ela a heroína da tela. O maior texto desta cena é a placa do nome, a 113px, cumprindo o
piso de **rótulo** (104), que é o papel que ela de fato exerce. Comparação no mesmo vídeo: `s33`, uma
citação real, tem 300px e passa liso.

**A leitura errada que isso convida.** Ver o vermelho e "consertar a cena" — subir o nome para 260px.
Isso transformaria uma placa de identificação no objeto dominante do quadro, competindo com o retrato
que É o herói visual, e derrubaria a nota 9 de poluição. **O gate não estava pedindo uma cena melhor;
estava pedindo a cena de outro tipo.** Servir ao gate contra o vídeo é a troca que nunca compensa.

**A regra.** (1) O tipo `citação` é sobre a **FALA**, não sobre a pessoa: só o use quando existir frase
verbatim na narração, e transcreva-a na âncora do espelho. Pessoa que o roteiro apenas nomeia é
**mídia real** — retrato + nome + cargo. (2) Quando um gate duro reprova uma cena que as 9 lentes
aprovaram com nota alta, **a primeira hipótese é o metadado, não a arte**: gate e lente medindo coisas
opostas sobre a mesma cena costuma ser o tipo declarado mentindo sobre o que a cena é. (3) Não fabrique
elemento só para alcançar um piso — o piso existe para descrever a cena que o tipo promete, e se a
promessa não cabe na fala, o errado é a promessa.

**Onde o conserto pertence.** Na escolha do tipo, com o montador (agente corrigido nesta data), e não
na arte — que fez tudo certo — nem no gate, que acertaria de novo amanhã.

---
### ARTE-123 · O instrumento que mede a cena tem latência — e o QC reprova cena boa, depois "conserta" o que não estava quebrado (05/ago/2026, QC do `mamute-de-volta`)

**O caso.** Um laudo reprovou a `s08-mapa-estepe` por CRÉDITO-FANTASMA: o rodapé credita "Estepe e gelo
do UMG · Ray & Adams 2001" e os frames mostravam o satélite pelado. Diagnóstico do laudo: opacidade
0,26–0,34 é baixa demais sobre satélite, suba para 0,9. Subi para 0,70. **O frame saiu idêntico.**
Subi para 0,95. **Idêntico de novo.**

**A prova.** Probe no mapa vivo: as camadas existem, estão na ordem certa (satélite no índice 1,
estepe em 2–3, gelo em 7), a opacidade nova está aplicada (0,70/0,72/0,67 lidos do estilo) e o
MapLibre reporta **9, 5 e 28 feições renderizadas**. Então tirei dois screenshots seguidos — um com as
camadas ligadas, outro logo após zerá-las — e eles saíram **trocados**: o único frame que mostrou a
estepe dourada e o manto de gelo foi o tirado DEPOIS de mandar apagá-las. Era o repaint atrasado do
estado anterior chegando à tela. **O instrumento estava um frame atrás o tempo todo.**

**Não era um caso isolado, e é aí que vira lei.** No mesmo dia, dois outros julgamentos independentes
bateram no mesmo muro: a `s82` foi acusada de mosaico de tiles quebrado (re-medida isolada com espera
longa, saiu limpa) e a `s85` deu `<video>` preto em cinco capturas seguidas — com 2600 ms de espera o
inset pinta, e o `readyState` era 4 nas duas medições. Três cenas, três lentes, um instrumento.

**Por que custa caro.** O QC julga POR FRAME — é a regra da casa e está certa. Mas quando o frame
mente, a cena boa é reprovada, vai para a fila de conserto, e o "conserto" **estraga o que estava
certo**: em 0,70 a estepe fica chapada e engole o satélite que ela deveria anotar. O laudo errado não
para em desperdício; ele empurra a mão para a direção oposta da correta.

**A regra.** (1) **Mapa ou vídeo que parece vazio é suspeita de CAPTURA, não de conteúdo** — antes de
tocar em qualquer valor de paint, opacidade ou `src`, repita a medição com espera longa
(`SHOT_MAPA_MS` alto) e confirme pelo estado do objeto vivo (feições renderizadas, `readyState`), não
pelo pixel. (2) Quando um conserto de opacidade/visibilidade **não muda o frame**, o problema não é o
valor — pare e investigue o instrumento; dois valores diferentes com o mesmo resultado é assinatura de
medição congelada, não de camada invisível. (3) Laudo de agente é hipótese com evidência, não veredito:
o que chega escrito como "provei por probe" ainda pode ter provado a coisa errada.

**Conserto aplicado.** `scripts/shot.mjs` esperava 2500 ms para mapa e **350 ms para todo o resto** —
e o "resto" incluía footage 4K, que faz `currentTime=f(t)` e ainda está buscando quando o obturador
abre. Agora o script aguarda o `seeked`/`loadeddata` de cada `<video>` (com teto de 4 s, nunca Promise
sem relógio) e usa 2600 ms para cena com vídeo. Medido: cena de footage 17,6 s e frame de 12,7 MB;
cena de desenho segue em 5,3 s — o caminho rápido não pagou a conta do lento.

## ARTE-139 — o apresentador fica AO LADO da informação, nunca na frente (06/ago/2026)

**O que aconteceu:** o Mateus pediu "texto ATRÁS do apresentador", citando a Ferramenta de
Mascaramento de Objeto do Premiere. Foi feito com matting de verdade — segmentação quadro a quadro,
ProRes 4444 com alfa — e **tecnicamente funcionava**. O QC pegou o defeito na leitura:

```
@5,5s   a tela lia "= TERRAS"
@8,25s  a tela lia "= TERRA"
```

O corpo dele cobria justamente **BAIXAS**, a palavra que a cena existia para mostrar. Efeito bonito,
mensagem perdida. Ele mesmo reviu: *"me expressei mal, foi erro meu… o texto não deve ficar atrás do
apresentador mesmo, não tem por quê."*

**A lei:** *corpo humano em movimento é máscara imprevisível — o que a palavra vai perder muda a cada
quadro.* Nenhuma checagem estática protege disso: a composição está certa no quadro em que você
olhou e errada no seguinte. Por isso a regra é de COMPOSIÇÃO, não de verificação: ele fica **ao
lado**, e a palavra está sempre inteira porque nada pode cruzá-la.

**A solução que substituiu o matting é mais barata e mais robusta:** o estúdio tem fundo preto —
medido no `ceuta`, 4,5 a 6,1 de 255 nas bordas, pico 11. Deslocar o vídeo abre, do outro lado, uma
faixa que **não é buraco**: é o mesmo preto do cenário. Zero matting, zero risco de borda.

A única peça técnica é a **vinheta que acompanha o deslocamento** (300 px de gradiente, opacidade
máxima 0,85). E ela não corrige cor — 4,5/255 é 1,8%, invisível. Ela dissolve a **linha reta** que a
borda do vídeo desenha ao entrar na tela: *o olho pega linha reta mesmo com contraste quase zero.*

⚠️ **A vinheta mora na CENA, nunca no master.** Queimada no V1, ela deslocaria junto com o vídeo e a
faixa escura apareceria no meio da tela — o oposto do efeito. A cena sabe para que lado ele foi; o
master não sabe o que a cena vai fazer com ele.

**Virou capacidade:** modelo **M28 · apresentador + informação**, com quatro arrumações (cede o lado ·
cerco · recuo · chegada), exemplar em `seed/examples/dourados/M28/` e o gatilho no montador (§6.9): a
pergunta é *"a fala aqui DIZ algo que a tela poderia MOSTRAR ao mesmo tempo?"*. Traduz, define,
numera → M28. Reage, respira, vira de assunto → apresentador puro.

### ARTE-140 · o mapa é PALCO, não ilustração — o dado pousa, a cena não troca (07/ago/2026)

**De onde veio:** primeira cena que o Mateus revisou no painel do espelho (07/ago/2026). O montador
tinha desenhado quatro cenas em 12 segundos de fala:

```
s03  mapa 2D do estreito             2,96s   "território da Espanha na África"
s04  relógio cênico de 24 horas      9,74s   "num único dia de julho de 2026"
s05  split de população              3,06s   "oitenta e três mil moradores"     (fundida em s04)
s06  cartão de mortos                3,06s   "morreram entre setenta e cem"     (fundida em s04)
```

Ele reescreveu tudo como **uma cena só**: *"essa cena inteira ser o mapa MapTiler 2D… irá colocar o
número de moradores em cima do país junto com bonequinho pra representar população, e depois um ícone
de morte com o número de '70 - 100 MORTES'."*

**A lei:** *quando a fala apresenta um LUGAR e em seguida dá dados SOBRE aquele lugar, o mapa não sai
— ele vira o PALCO, e os dados pousam sobre ele conforme são ditos.*

O montador tratou cada dado como assunto novo, e assunto novo pede cena nova. Mas ali não havia
assunto novo: havia **o mesmo lugar, ganhando camadas**. Trocar de tela a cada número desmonta a
leitura espacial que o espectador acabou de construir e o obriga a reconstruí-la três vezes em doze
segundos — e no fim ele não sabe mais onde Ceuta fica.

O teste para separar os dois casos: **o dado é SOBRE o lugar que está na tela?** Se é, ele pousa. Se
o assunto mudou de lugar, a cena troca.

⚠️ Isto NÃO é licença para cena longa e parada. O mapa-palco só se justifica porque **cada dado tem
sua entrada com word-lock** — a cena continua tendo tantos beats quantos a fala tem, e o que muda é
que os beats acontecem DENTRO de um palco estável em vez de em telas descartáveis.

**Consequência para o custo:** quatro cenas viram uma. Menos arte a desenhar, menos render, menos
transição — e o resultado é mais legível, não menos.

### ARTE-141 · território em mapa: contorno próprio + nome + bandeira, nos DOIS lados (07/ago/2026)

**De onde veio:** a mesma revisão. Ele foi específico sobre o que um mapa precisa mostrar:
*"com o nome do Marrocos + bandeira e o nome de Ceuta + bandeira em cima dos territórios, cada
território deve estar circulado em geojson com cor diferente diferenciando ambos territórios."*

A cena original dizia apenas *"o polígono de Ceuta acende com a bandeira espanhola"* — um território
identificado, o outro não.

**A lei:** *num mapa onde a história depende da RELAÇÃO entre territórios, cada território ganha os
três: contorno GeoJSON real em cor própria, nome, e bandeira sobre o próprio território.* Identificar
só um deixa o outro como fundo anônimo — e quando a história É a relação entre eles, o fundo anônimo
apaga metade do que se quer contar.

No caso do `ceuta` isso é a tese inteira do vídeo: um pedaço da Espanha **dentro** do Marrocos. Sem
os dois contornos em cores distintas, com nome e bandeira, o espectador vê um mapa de costa e não
entende por que atravessar uma praia é atravessar uma fronteira internacional.

⚠️ **Cor distinta não é enfeite: é o que separa.** Duas fronteiras da mesma cor num satélite viram
uma linha só. E a bandeira vai SOBRE o território, não numa legenda de canto — legenda obriga o olho
a ir e voltar, e a essa altura ele já perdeu o que a fala disse.

Vale para toda comparação geográfica: enclave, fronteira disputada, rota entre dois países, área
comparada. Não vale para mapa de UM lugar só (localização simples), onde o segundo contorno seria
ruído.

### ARTE-142 · número sobre lugar vem com a figura do que ele conta (07/ago/2026)

**De onde veio:** a mesma revisão. Ele não pediu "83.000 na tela" — pediu *"o número de moradores em
cima do país junto com bonequinho pra representar população, e depois um ícone de morte com o número
de '70 - 100 MORTES'."*

**A lei:** *número sobre lugar vem com a FIGURA do que ele conta.* População ganha pictograma de
gente; morte ganha ícone de morte; dinheiro ganha a figura do dinheiro. O algarismo sozinho é
abstrato — a figura dá ao olho a categoria antes de o cérebro ler o número, e é ela que faz "83.000"
significar *gente* e não *metros* ou *euros*.

Isto não é redundância decorativa: é o que permite ao espectador entender a cena **de relance**, que é
como a maioria assiste. Um dado sem figura só existe para quem está lendo com atenção.

⚠️ A figura tem de ser do MESMO sistema visual da casa — pictograma na paleta com significado fixo
(âmbar para dado, alerta para o que é grave), não ícone genérico de banco de imagens. E ela é
proporcional quando a proporção importa: um pictograma de população que não muda de tamanho entre
83 mil e 49 mil desperdiça a única coisa que a figura faz melhor que o número.

### ARTE-143 · a imagem real ANCORA dentro do território antes de virar mapa (07/ago/2026)

**De onde veio:** revisão do espelho do `ceuta` (Mateus, 07/ago/2026), descrevendo como sair de uma
foto real para um mapa:

> *"Da foto anterior, ela entraria dentro do mapa de Ceuta e ficaria DENTRO do território de Ceuta com
> foco no continente da África e um pouco do Sul da Europa, e depois de uns segundos sumiria a imagem
> de Ceuta e o mapa daria um zoom em Ceuta + Marrocos."*

**A lei:** *quando uma imagem real é seguida do mapa do lugar que ela mostra, a imagem não corta — ela
ENCOLHE para dentro do próprio território e fica ali, recortada pela fronteira, enquanto a câmera
abre. Só depois ela sai e o mapa assume.*

Corte seco entre foto e mapa entrega duas informações **soltas**: uma cena de gente, e depois uma
cena de geografia. O espectador tem de amarrar as duas por conta própria, e a maioria não amarra —
sai sabendo que teve uma multidão e que existe um lugar, sem juntar que a multidão estava **naquele
ponto exato do mundo**.

Ancorar a imagem dentro do polígono resolve isso em um gesto: no instante em que ela encolhe e é
recortada pela fronteira, **o lugar da foto vira uma propriedade visível dela**. E abrir a câmera
depois — norte da África, sul da Europa — dá a escala sem precisar de uma segunda cena para isso.

**A mecânica:** a foto vive como preenchimento do polígono GeoJSON (máscara pela fronteira real,
nunca por um retângulo). A câmera parte do enquadramento amplo e fecha; a foto se despede por
opacidade enquanto o satélite aparece por baixo. Nada de wipe nem de corte.

⚠️ **Só vale quando a foto MOSTRA o lugar do mapa.** Ancorar uma imagem genérica dentro de um
território é afirmar que aquilo aconteceu ali — e se não aconteceu, é fabricação, que esta casa não
faz. A foto tem de ser registro real e do lugar; se a pesquisa não achar, o desenho muda, não a
verdade.

⚠️ **E a foto é a MESMA das duas cenas, não uma parecida.** Trocar de imagem no meio da transição
desfaz a continuidade que a ancoragem existe para criar — o espectador lê como duas fotos, e volta a
ter dois fatos soltos.

### ARTE-144 · o vídeo abre no registro real, não no rosto de quem conta (07/ago/2026)

**De onde veio:** revisão do espelho do `ceuta` (Mateus, 07/ago/2026), sobre a primeira cena:

> *"É um trecho muito pequeno pra ser uma cena. Essa cena 01 deveria começar em 0:00 'Quarenta e nove
> mil pessoas entraram em Ceuta', e mostrar uma imagem REAL da invasão de Ceuta. Não um footage, uma
> imagem REAL e com card sutil de texto '49.000 PESSOAS'. **Sem o apresentador.**"*

O espelho abria com 0,88 s de apresentador — que é menos que uma respiração — e só depois mostrava o
número.

**A lei:** *o primeiro plano do vídeo é o REGISTRO do que aconteceu, não o rosto de quem vai contar.*
O apresentador entra depois, para conduzir; quem abre é o fato.

O motivo é de retenção, e é medível: nos primeiros segundos o espectador decide se fica, e ele decide
pelo ASSUNTO. Um rosto falando é a promessa de que algo vai ser contado; a foto real **é** a coisa.
Abrir no rosto gasta o instante mais caro do vídeo pedindo crédito em vez de entregar.

**Três exigências que vêm juntas:**

1. **Imagem REAL, e ele foi explícito: "não um footage".** Fotografia de agência do evento, não vídeo
   genérico de banco. Registro do acontecimento, não ilustração dele.
2. **O card é sóbrio e secundário.** A imagem é o assunto; o texto só carimba o número. Card grande
   sobre foto real inverte a hierarquia e transforma o registro em papel de parede.
3. **Cena curta demais não é cena.** 0,88 s não dá tempo de ler nem de ver — vira piscada. Abaixo de
   ~2 s, ou a cena se funde com a vizinha, ou não existe.

⚠️ Isto NÃO reduz a presença do apresentador no vídeo (a faixa de 10–15% segue valendo, [FIN-47]).
Muda **onde** ela começa: ele entra quando há o que conduzir, e no primeiro instante o que existe é o
fato.

### ARTE-145 · a imagem entra COM a palavra que a nomeia, nunca depois dela (07/ago/2026)

**De onde veio:** revisão do espelho do `ceuta` (07/ago/2026). Seis fronteiras de cena caíam DEPOIS
da palavra que a cena existia para ilustrar:

```
s11 (apresentador)  "…Era gente a pé, com câmara de pneu"   ← o objeto é NOMEADO aqui
s12 (footage)       "debaixo do braço e celular…"           ← e só aqui ele APARECE

s136 (footage)      "…No auge daqueles dias, Rachid"        ← o nome da pessoa
s137 (citação)      "Sbihi, que dirige…"                    ← e depois o retrato

s125 (ranking)      "…justamente o caminho em que a regra não mudou,"
s126 (linha)        "aumentaram mais de cento e sessenta por cento"  ← o número da s125, na s126
```

Em todos, o espelho estava "certo" pelos gates: as cenas se encostavam, as âncoras existiam, nada
se sobrepunha. O defeito é de meio segundo e não aparece em contagem nenhuma — aparece no vídeo,
como a sensação de que a imagem está sempre um passo atrás da voz.

**A lei:** *a fronteira de cena cai no início do SINTAGMA, não no meio dele.* Se a fala nomeia uma
coisa e a cena seguinte é a imagem dessa coisa, a cena seguinte começa **na palavra que a nomeia** —
nunca depois. Ilustrar o que já foi dito é chegar atrasado ao próprio assunto.

**Como se acha, e é barato:** para cada fronteira, ler a última frase da cena anterior. Se ela
contém o sujeito da cena seguinte — um objeto, um nome próprio, uma cifra —, a fronteira está no
lugar errado e o conserto é mover o corte para o `start` daquela palavra no `words-final.json`.

⚠️ **E a cena que sobra pode ficar curta demais.** Ao puxar a fronteira, a cena anterior encolhe;
se cair abaixo de ~2 s ela não é cena ([ARTE-144]) e a saída é fundir, não deixar a piscada. Foi o
caso da `s11`: com o corte no lugar certo ela ficaria com 1,36 s, e virou abertura da própria cena
de footage — que ganhou o beat de "gente a pé" antes dos objetos.

**Vale nos dois sentidos:** a imagem pode entrar até um frame ANTES da palavra (a tela pronta
esperando a voz é invisível), nunca depois. É o mesmo desempate que o alinhador de grade usa quando
a fronteira de palavra e a grade de frames não coincidem.

### ARTE-146 · cena longa declara um beat por frase — tese curta em cena longa é tela parada (07/ago/2026)

**De onde veio:** revisão do espelho do `ceuta` (07/ago/2026), como consequência direta da
[ARTE-140]. Quando quatro cenas viram um palco só, a cena resultante fica longa — e a tese, que
antes descrevia uma tela, passa a ter de reger vários minutos de fala. Em quatro cenas ela não
passou:

```
s139   25,8 s · 4 frases na fala · a tese descrevia UMA imagem ("setecentos ícones em bloco")
s101   23,7 s · 3 frases         · tese para 2
s156   15,3 s · 2 frases         · a segunda frase (o Tarajal de 2014) não tinha desenho nenhum
s137   20,4 s · 4 frases         · tese para o retrato, silêncio sobre o resto
```

O que acontece com o resto? Ou o editor-de-arte inventa (e o que ele inventar não passou por
ninguém), ou a tela fica parada enquanto a voz anda — que é exatamente o defeito que o mapa-palco
existe para não ter.

**A lei:** *cena longa declara um BEAT POR FRASE, com o word-lock de cada um.* A tese de uma cena
de 25 s não é uma imagem: é uma sequência de estados do mesmo palco, e cada estado tem a palavra em
que entra. A régua é aritmética e se confere sem ler nada: **frases na fala da cena × beats na
tese.** Se a tese tem menos beats que a fala tem frases, falta cena escrita.

**O modelo é a [ARTE-140]:** *"o mapa-palco só se justifica porque cada dado tem sua entrada com
word-lock — a cena continua tendo tantos beats quantos a fala tem, e o que muda é que os beats
acontecem DENTRO de um palco estável em vez de em telas descartáveis."* Fundir cenas sem escrever
os beats troca quatro telas por uma tela parada, que é pior que as quatro.

⚠️ **Beat não é troca de tela.** É o palco mudando de estado: um bloco que se desfaz em fila, um
carimbo que cai, um número que pousa, a câmera que abre. Se para haver um beat a cena precisa
trocar de fundo, então não era um palco — eram duas cenas, e fundi-las foi o erro.

### ARTE-147 · Gate que acusa o MECANISMO da animação: a cena precisa poder declarar, com motivo (07/ago/2026)

Gates determinísticos medem o que está na tela **num instante**. Animação é justamente o que muda
entre instantes — e vários mecanismos legítimos produzem, num frame isolado, a assinatura exata de um
defeito:

| mecanismo | o que o gate vê | o que é |
|---|---|---|
| **odômetro** (contador de rolagem) | dez dígitos no mesmo retângulo · dígitos cortados pelo contêiner | os dígitos se revezam na janela |
| **máscara de revelação** | texto decepado pelo cartão | o texto está entrando |
| **count-up** | texto que "pisca" 0,1 s | é o mesmo elemento com o dígito mudando |
| **push-in** | texto sai pela margem no fim | é a saída de cena |

Medido em 07/ago/2026 no `s49-2-milhoes-libras` do `o-acre`: **8 pares de colisão e 43 textos
cortados**, numa cena impecável — e o render barrado por isso, num vídeo a cinco cenas de fechar.

**A saída NÃO é afrouxar o gate.** Cada afrouxamento cega o gate para o defeito de verdade que ele
existe para pegar: texto realmente sobreposto, realmente decepado. A saída é a cena **declarar o
mecanismo**, e o gate isentar só o que a declaração cobre:

```html
<div class="slot" data-qc-rolagem="odômetro: os dez dígitos se revezam na janela">…</div>
<div id="palco" data-qc-sem-heroi="a informação está na maré de pontos: não há cifra a exibir">
```

**Três propriedades que separam declaração de escapatória**, e as três importam:
1. **motivo obrigatório** (12+ caracteres) — quem não consegue escrever por que aquilo é mecanismo
   provavelmente está fugindo do piso;
2. **escopo mínimo** — a isenção vale só para os descendentes do elemento declarado; o resto da cena
   continua medido, na mesma passada;
3. **contado e reportado** (`⊘ 10 fora da checagem`) — isenção silenciosa é o mesmo que gate
   desligado, e ninguém descobre.

⚠️ **Antes de criar declaração nova, veja se a peneira certa já existe e não alcança o caso.** O
`qc-fora-do-quadro` já tinha a peneira do `coubeNoClip` (*"o texto que cabe inteiro no contêiner em
algum instante é máscara de revelação, não caixa apertada"*) — perfeita para a revelação, e cega para
o odômetro, cujos dígitos ficam fora da janela a maior parte do tempo. *Era a peneira certa para o
problema errado.*

### ARTE-148 · O peso da fonte tinha teto e não tinha PISO — metade do vídeo saiu fina (08/ago/2026)

O Mateus, revendo o `o-acre`: *"A s07 parece estar com a fonte diferente da s08. A s08 está como eu
gosto, a s07 está mais fina. A s21 também está com a fonte feia do s07."*

Medido, e a diferença é objetiva:

    s07 (reprovada) ..... font-weight  500 · 700 · 900
    s08 (aprovada) ...... font-weight  600 · 800 · 900

**Peso 500 é Medium.** Num palco 4K a diferença para o 600 lê como *outra fonte* — que foi a palavra
dele. E o alcance é bem maior que as duas cenas apontadas: **35 das 71 cenas do vídeo usam 500.**

A casa tinha metade da régua: o CLAUDE.md registra que Bold (600–749) quebra Ã/Õ maiúsculos e manda
usar 900 nesses casos. Ninguém nunca disse quão FINO podia ser — e sem piso, cada cena escolheu.

⚠️ **A checagem de "consistência com a maioria" foi tentada e RETIRADA**, e o erro dela ensina: com 35
de 71 cenas em 500, o perfil da maioria virou `500 · 900` e o gate acusou **a cena aprovada** de
destoar. Recalculado só entre as cenas acima do piso, virou `900` e reprovou 59 de 71 — porque
600/800/900 na mesma cena não é inconsistência, é HIERARQUIA (título, subtítulo, corpo).

*Consistência entre cenas é julgamento de conjunto, e julgamento não vira gate determinístico sem uma
régua do que é "diferente demais". Quando a maioria viola a norma, medir contra a maioria transforma
o erro em régua e denuncia quem acertou.*

Gate: `scripts/qc-tipografia.mjs` — piso 600 e 900 obrigatório em caps acentuadas. Duas checagens
objetivas, 35 achados reais, zero falso positivo na cena aprovada.

### ARTE-159 · A declaração de composição nasce COM a cena, não no QC (07/ago/2026)

*(era `ARTE-148` na VM; o merge de 08/ago a pôs em `ARTE-150`, número que já era da lei do gate de
mapa — renumerada para `ARTE-159`. Ponte: `seed/DE-PARA-LEIS.md`.)*

Irmã da [ARTE-147], no eixo da mídia: o `qc-clipe-repetido` conta `src` iguais e **não lê intenção**.
Quem tem o contexto para declarar é quem desenha — e é lá que a declaração é barata.

Medido no `o-acre-o-estado-que-o` (07/ago, estação QC): **20 acusações do gate, 12 delas arte
legítima** — a transmutação leite→ouro da `s17` (a MESMA foto em duas camadas de cor simultâneas, com
`clip-path` descendo entre elas), os livros 3D da `s80`/`s81` (capa + chapa de fundo + reflexo na
sombra, um objeto só), a publi que fecha na pose-final exata da cena anterior. **Nenhuma declarava.**
O `editor-de-arte.md` já ensinava a distinção certa (*"simultâneas valem, sucessivas não"*) — o autor
sabia que estava certo e não escreveu a prova, porque nada mandava escrever.

O preço não é o gate reclamando: é que **cada conserto tardio invalida um clipe 4K já pago**, por um
atributo que não muda um pixel. E a passada seguinte do QC re-investiga do zero um caso já julgado,
gastando o recurso caro (inferência) para reconstituir uma conclusão que ninguém registrou.

**As duas escalas, e a segunda é a que se esquece:**
- **dentro da cena** → `data-qc-composicao="por que as duas estão no ar AO MESMO TEMPO"`;
- **entre cenas** → `data-qc-reuso="por que a volta do objeto é o efeito"`, **nas DUAS pontas** —
  declarar só na cena que reusa não convence o gate, e nem deveria: o par é que é deliberado.

**Bandeira, brasão e logo institucional contam como mídia repetida.** O mesmo símbolo identificando o
país em quatro cenas é vocabulário, não preguiça — mas o gate não sabe disso: declare e siga.

⚠️ **E o corolário para quem julga:** parecer sem atributo não fecha nada. O laudo do `qc-visual` que
absolve um uso tem de entregar o **texto exato** da declaração que falta; senão o gate segue acusando
e o caso volta na próxima passada, inteiro.

---

## ARTE-149 — Isenção declarada só vale nos gates que a LEEM — e o `qc-carga` era o irmão surdo

**Medido em 08/ago/2026, `s90-preco-do-estrago` (ceuta):** uma balança com **dois rótulos** na tela
inteira — FLUXO de um lado, CONTRATO do outro — reprovou o gate duro de densidade com
*"97 elementos de informação simultâneos @11s (teto 77)"*. Os 97 eram as **moedas e os círculos**
das duas pilhas. E o autor **já tinha declarado**:

```html
<g id="moedas" data-qc-ornamento="pilhas de moedas identicas: o preço como grandeza unica, nao N informacoes">
```

A declaração estava certa, o texto dela estava certo, e o gate a ignorava — porque `qc-carga.mjs`
nunca leu o atributo. `check-overlap` lia, `qc-tamanho` lia, e a fonte única
(`scripts/qc-ornamento.mjs`) diz em voz alta que **declaração do autor vence tudo**. O terceiro
irmão era surdo, e o resultado é o pior que um gate pode produzir: **punir exatamente quem seguiu a
régua** — e barrar render, porque `carga` é gate DURO do `qc-cena`, que carimba o `_portao.json`.

**A raiz não é o atributo: é a família.** `data-qc-ornamento`, `data-qc-rolagem`, `data-qc-composicao`
e `data-qc-reuso` são contratos entre o autor e a bancada, não entre o autor e UM script. Isenção que
vale em dois gates de três não é isenção: é sorteio. Quem escreve gate novo que conta elementos
herda o dever de ler as declarações que a casa já sancionou.

**O que mudou (`scripts/qc-carga.mjs`):** elemento sob `[data-qc-ornamento]` sai da densidade, por
`closest()` — herda pelo ancestral, porque o autor declara no GRUPO e os filhos nascem por script
dentro dele. Medido: 97 → 16 info na cena, e o laudo passa a imprimir
`ornamento: N elemento(s) FORA da densidade por data-qc-ornamento declarado`. **Isenção silenciosa
seria trocar um defeito por outro** — quem lê o laudo tem de saber o que saiu da conta. Regressão
conferida em 3 cenas sem declaração: medem igual, e a linha nova não aparece.

**Por que o teto não era o problema.** A tentação era subir 77. Errado: a densidade existe para medir
carga COGNITIVA, e ela **não cresce com a repetição do mesmo elemento** — uma pilha de moedas
idênticas é UM objeto para quem assiste, não 26 informações. Subir o teto teria deixado passar a
cena genuinamente poluída de 90 elementos DISTINTOS, que é o caso que o gate existe para pegar.

**Alcance medido:** 33 cenas do acervo declaram `data-qc-ornamento` e estavam sujeitas ao mesmo
castigo.


### ARTE-160 · JULGAR ARTE CONTRA UM PLANO NO MEIO DA LINHA CONDENA O QUE ESTÁ CERTO — o veredito herda o estado do espelho, não só o conteúdo dele (08/ago/2026)

*(era `ARTE-149` na VM; o merge de 08/ago a pôs em `ARTE-151`, número que já era da lei do gate que
lê HTML estático — renumerada para `ARTE-160`. Ponte: `seed/DE-PARA-LEIS.md`.)*

**Medido no `galaxia-arco-flecha`**, o mesmo vídeo que ensinou a [ARTE-127] cinco dias antes — e pela
mesma raiz, do outro lado. A ARTE-127 manda *quem funde, gravar no espelho*. Esta diz o que faz **quem
lê** um espelho onde ninguém gravou ainda.

Depois de uma re-decupagem do zero, o montador entregou o plano novo **sem a fusão de runs**: 87
segmentos, `_mergedInto` em nenhum, soma das `dur` batendo exatamente com o master. Um plano
íntegro, coerente e que passa em tudo — e **incompleto**, porque a fusão é passo do `diretor-de-arte`
e ele ainda não tinha rodado. O plano anterior tinha 11 runs fundidos: HTMLs de plano-sequência
coreografando até 4 beats (`s44` = 29,38 s cobrindo quatro cenas).

O `reaproveitador-de-cenas` julgou contra esse estado e o laudo passou em tudo: contrato estrito
válido, soma fechando 51 = 8 + 43 + 0, nenhum `id_novo` duplicado, todo `readapta` com a lista do que
muda. **Oito conferências independentes, todas verdes.** E o veredito mandava **18 cenas nascerem do
zero e 33 clipes 4K pagos morrerem** — porque, sem fusão, as mães valem só o primeiro beat e os
filhos parecem cenas soltas sem arte. Uma hora depois a fusão foi gravada, as mães voltaram à janela
inteira (8 das 10 dentro de ±0,5 s da original, sete dentro da tolerância de 0,15 s) e quase tudo
virou `reusa`.

**O que torna isto perigoso é que os dois estados são indistinguíveis a olho.** Um plano
deliberadamente desfundido e um plano que ainda não foi fundido têm exatamente os mesmos bytes. O
laudo não estava malfeito: estava certo sobre a pergunta errada.

**A regra, para qualquer agente que JULGUE um artefato contra outro:** antes de julgar, pergunte se o
artefato de referência **terminou de ser escrito** — não se ele é válido. Validade e completude são
coisas diferentes, e gate nenhum distingue as duas, porque um artefato incompleto é, quase sempre,
um artefato válido menor.

- **O sinal é a assimetria entre plano e disco.** Arte fundida contra plano sem fusão; 50 HTMLs
  contra um plano de 90 cenas; clipe de 29 s contra cena de 7 s. Quando o disco carrega uma estrutura
  que o plano não declara, **é o plano que está atrasado** — o disco não inventa coreografia.
- **Na dúvida, PARE e diga.** O custo de perguntar é uma sessão; o de julgar errado é a arte inteira.
- **E quem coordena não deve mandar o contrário.** Neste caso o editor-chefe instruiu o
  `diretor-de-arte` a *não* gravar a fusão, lendo a lei de registro como lei de propriedade. O agente
  seguiu o próprio charter e contrariou a ordem — **e foi por isso que o vídeo não se perdeu**. Ordem
  de quem coordena não revoga o §3.2 de um ofício; agente que obedece contra a própria doutrina
  transforma um engano de leitura em prejuízo.

---

## ARTE-150 — Em cena de mapa, o gate mede uma cena que NÃO vai ao ar — se a câmera esperar os tiles

**Achado pelo `mapista` em 08/ago/2026, consertando o `s130-argelia-marrocos`.** A cena tinha o
posicionamento da câmera preso atrás do guard de carga:

```js
function frame(t){ if(READY){ applyCam(t); … } }
```

O capturador de render espera o mapa assentar (`map.once('idle')`), então **no vídeo final isso
nunca aparece**. Mas os gates têm espera curta (8 s + 8 s) e nesta VM o mapa demora mais — então
eles amostram com `READY` ainda falso, e **o overlay inteiro é medido na projeção do t=0**, não na
posição real de cada instante.

O resultado não é um gate "mais rigoroso": é um gate medindo **outra cena**. Medido no mesmo
arquivo, o laudo de referência que eu passei ao especialista:

- **acusava** `MARROCOS ✕ legenda = 39.965 px²` — par que **não existe** com a câmera aplicada;
- **perdia** o `ARGÉLIA ✕ MARROCOS` real, que era o defeito de verdade (a bandeira da Argélia
  carimbada sobre as letras de MARROCOS, visível a olho nu no frame).

**Erra nas duas direções ao mesmo tempo** — inventa defeito e esconde defeito. É a pior classe de
falso positivo, porque o laudo parece cheio de conteúdo e manda consertar o lugar errado.

**A correção é de uma linha e não muda um pixel do vídeo:** tirar `applyCam(t)` de dentro do
`if(READY)`. A câmera é geometria de tela e não depende de tile nenhum ter chegado; só o desenho
do mapa depende. O que muda é a **honestidade da medição**.

**O sintoma irmão, para reconhecer sem ler código:** cena de mapa que **reprova em lote e passa
isolada** (ou o contrário). Aconteceu no mesmo dia com o `s94-saara-ocidental` — `✗ 1 par com
colisão` no lote, `✓ SEM colisões` rodando sozinha. Antes de mandar consertar cena de mapa, **olhe
o frame**: em mapa, o gate é indício e o PNG é a prova. Vale para inocentar tanto quanto para
condenar — foi a diferença entre gastar um especialista no par errado e achar a bandeira em cima
do país vizinho.

**ADENDO, medido no mesmo dia pelo `mapista` do `s146-desenho-inteiro`:** o defeito era maior que a
cena. **`qc-carga` e `qc-fora-do-quadro` NÃO esperavam o mapa** — nem chamavam `__prepararCaptura()`,
nem aguardavam `window.__ready`/`__aguardarMapa`. Só o `check-overlap` esperava (e o comentário dele
já documentava o caso `crimeia-corredor-terrestre`, com a mesma lição, desde antes).

Então **toda cena de mapa deste acervo foi medida degenerada por dois dos quatro gates**, e o erro
vai nas duas direções:
- **verde falso** — no `s146` o `qc-carga` imprimiu *"2 textos @4s"*; o pico REAL, com o mapa pronto,
  é de **9 blocos** (o próprio teto) e 0,86 estreias/s. O especialista só descobriu porque mediu
  por sonda própria;
- **alarme falso** — no `s130`, um par de colisão de 39.965 px² que não existe.

E o `qc-fora-do-quadro` era o caso mais irônico: ele existe porque *"conferir só o frame 0 não pega
o que a câmera empurra para fora"* — e, sem esperar o mapa, estava conferindo o frame 0 com outro
nome.

**Consertado nos dois** com o mesmo bloco do `check-overlap` (`__prepararCaptura` → `__ready` →
`__aguardarMapa`, teto de 8 s). Cena sem mapa cai no `Promise.resolve()` e mede exatamente igual.

⚠️ **Corolário para quem escreve rig de mapa:** `map.areTilesLoaded()` **devolve `true` na janela
entre o `jumpTo` e o motor registrar os pedidos de tile**. Num zoom-out de 12,4 → 5,2 isso entrega
frame com o país aceso sobre o fundo vazio e quase sem satélite (medido em t=7,2 s no `s146`). Um
`true` solto não é prova: exija **N leituras boas seguidas** (o `s146` usa 6).

---

## ARTE-151 — Gate que lê HTML estático numa casa que monta DOM por script pergunta a coisa errada

**Medido em 08/ago/2026.** O `qc-midia-real` acusou **mídia fantasma** — *"o HTML documenta a mídia
e nenhum `<video>`/`<img>` a usa"* — em duas cenas que **usam a mídia**, com a foto visível no frame:

- `s130-argelia-marrocos` → `foto.setAttributeNS(xlink:href, FOTO); foto.setAttribute("href", FOTO)`
- `s03-mapa-ceuta` → `g.appendChild(mk("image",{href:"../_media/foto/…"}))`

Nas duas o caminho chega por **SVG `<image>`**, que o regex do gate (`<img|video|audio|source src`
+ `data-src`) não conhece. E no `s130` o valor é uma **const**, então nem casar o literal dentro do
`setAttribute` resolveria.

**A lição não é "acrescente `href` ao regex".** Perseguir cada forma de atribuição é corrida
perdida: `href`, `xlink:href`, `style.backgroundImage`, `new Image().src`, `canvas.drawImage`, e a
próxima que alguém inventar. A pergunta que responde a todas de uma vez:

> **o caminho de `_media/` aparece no CÓDIGO, fora de comentário?**

Se aparece, alguma linha o usa. Se só existe em comentário, é a promessa escrita que nunca virou
tela — que é exatamente o que a lente de mídia fantasma existe para caçar. O gate passou a remover
comentário HTML, de bloco, **e de linha JS só quando a linha COMEÇA com `//`** — cortar todo `//`
até o fim da linha destruiria `http://www.w3.org/1999/xlink`, que é código vivo.

**O padrão do dia, e é o que fica:** três gates desta casa acusaram cena correta em 08/ago — o
`qc-carga` ignorando `data-qc-ornamento` [ARTE-149], o `qc-carga`/`qc-fora-do-quadro` medindo mapa
antes de assentar [ARTE-150] e este. Os três tinham a mesma forma: **o gate media um proxy do que
queria medir** (um atributo, um instante, uma tag) em vez da coisa. Quando o proxy e a coisa
divergem, quem paga é quem seguiu a régua — e o custo real não é o laudo errado, é o agente
aprendendo que o gate não vale leitura.


## ARTE-152 — Declarar tela VAZIA lendo marcação estática manda refazer o que está certo

**Medido no `especies-humanas` em 08/ago/2026, na estação de TEXTOS.** O `redator-de-tela` varreu os
25 HTMLs para montar a lista fechada do que vai escrito no vídeo, e declarou três cenas sem uma
palavra na tela. Nas três o texto existe — **injetado por JavaScript**, via `txt(...)` dentro de uma
função: `s08` (7 textos), `s15` (5), `s29` (1). Nas outras 22 o texto está na marcação e a varredura
valeu.

É a [ARTE-151] outra vez, e é o quarto caso do mesmo dia — mas com dois agravantes que a 151 não tem,
porque lá quem errou foi um gate e aqui foi um **agente**, e o veredito não era "passa/não passa":

**1 · Ausência é a afirmação mais cara de errar.** O laudo dizia que `s08` não creditava a foto e que
a licença CC BY-SA 2.0 estava descumprida — prioridade ALTA, *"não é estética, é obrigação de
licença"*. O crédito estava lá, duas linhas com fundo próprio, `papel:"credito"`, que é exatamente o
que os gates leem (`s08-…html:423-424`). Acatar custaria **2,0 GB de re-render** — a maior cena do
vídeo — para reescrever o que já estava escrito. Presença errada faz perder um laudo; **ausência
errada faz refazer artefato pago.**

**2 · A premissa errada contamina o que vem depois.** Tendo dado `s15` e `s29` como vazias, o mesmo
laudo ofereceu "autorizações novas, sem custo" para rotulá-las. As duas já escrevem — e a de `s15`
diz `"Escavação arqueológica · imagem ilustrativa"`, a ressalva que impede a cena de afirmar que o
footage é de Ledi-Geraru. Rotular por cima teria apagado uma proteção, achando que criava uma.

**A regra: nenhum agente declara ausência de texto por leitura de marcação.** Se aparece
`papel:"credito"`, `data-qc-papel`, `txt(`, `appendChild` ou qualquer literal de string no bloco de
script, a cena escreve — e o que ela escreve se lê **no frame**, com `shot.mjs`, que custa nada. A
[ARTE-151] resolveu o caso da mídia perguntando *"o caminho aparece no CÓDIGO, fora de comentário?"*;
para texto a pergunta gêmea é *"há string literal no script, fora de comentário?"*. **Grep responde
sobre o arquivo; só o frame responde sobre a tela.**

## ARTE-153 — "Só unidade CSS é corrupção" deixava a cor podre passar — e o pior caso é o INVISÍVEL

**Medido em 08/ago/2026, na 5ª onda de arte do `cerebro-quando-sonha`, auditando as 47 cenas prontas
antes de despachar as 13 que faltavam.** A `s46` trazia
`<circle cx="1000" cy="880" r="482" fill="#071late827" opacity="0"/>`. O `qc-hex.mjs` — o gate que a
[ARTE-134] criou justamente para isto — deu **PASS**.

**Por que passou.** A [ARTE-134] acertou o diagnóstico (o grep antigo acusava 44 de 400 arquivos e
nenhum era defeito) e foi conservadora demais no conserto: token com letra não-hex só era acusado se
o sufixo fosse **unidade CSS** grudada (`#08182c` + `px`), "porque qualquer outra letra depois do hex
é nome de identificador". Aqui o token fatia em hex `071` — 3 dígitos, comprimento legal — mais o
sufixo `late827`, que não é unidade. Passou pelo buraco entre as duas classificações.

**A premissa que caducou.** "Letra depois do hex é identificador" vale para **seletor**, e seletor não
chega até essa classificação: o `EM_VALOR` exige propriedade de cor antes, e o `REF_URL` já removeu
`url(#id)`. O que sobra é posição em que `#token` **só pode ser cor** — logo, token que não é hex
válido é corrupção, seja qual for o sufixo. O conserto é essa frase virada em código.

**Medi antes de mexer, que é a própria régua da [ARTE-134]:** contra 462 HTMLs (todo `out/*/graphics`
mais os exemplares dourados), a regra ampla acusa **0 arquivo a mais** que a antiga. Cobertura sem
ruído novo — se tivesse custado falsos positivos, o certo era não mudar.

**O agravante, e é ele que faz esta lei valer mais que o patch:** o elemento tinha `opacity="0"` e
estava coberto por um círculo opaco de raio maior. **Nenhum frame denunciaria.** `shot.mjs`,
`qc-carga`, `check-overlap`, os 9 olhos do `qc-visual` — todos veem a TELA, e na tela não havia nada
errado. O defeito ficaria dormindo até alguém animar aquela opacidade e ganhar um disco preto de
482 px. *Contra defeito latente, olhar não substitui gate:* o que não aparece hoje só é pego por
quem lê o código, e ler o código é trabalho de máquina.

**A raiz de processo, que é maior que o bug.** O `qc-hex.mjs` existe desde 03/ago e **não estava na
doutrina de nenhum agente que produz ou julga cena** — nem `editor-de-arte`, nem `executor-de-molde`,
nem `qc-visual`. O checklist do `editor-de-arte` (item 6) ainda mandava rodar o `perl` que a
[ARTE-134] aposentou, e que aqui acusou 5 arquivos com **1** defeito real: `#dado` e `#ades` são
seletores de ID cujas primeiras letras são dígitos hex. Ou seja, os três estavam desalinhados ao
mesmo tempo — **o gate certo existia, órfão, enquanto a doutrina mandava o gate errado**, e o
executor que obedecesse veria 4 alarmes falsos e aprenderia a ignorar o quinto, que era o verdadeiro.
**Gate escrito não é gate adotado.** Quem cria um check só terminou o trabalho quando ele entra no
checklist de quem executa e o comando velho SAI de lá — senão o acervo passa a ter dois gates, e o
pior dos dois é o que continua sendo rodado.

**A PROVA DE CAMPO chegou 40 minutos depois, na mesma sessão.** Uma das frentes de arte desta
mesma onda — despachada ANTES do conserto, portanto ainda com o `perl` na doutrina — relatou, entre
os gates da `s49`: *"hex vazio (renomeei o id `#dbar`→`#qbar`, que disparava falso-positivo no regex
de hex corrompido)"*. `d`, `b` e `a` são dígitos hex e o `r` não é: o regex acusa, e o executor
**renomeou um identificador que estava correto para calar o alarme**. Não é hipótese sobre o que um
gate ruidoso causa — é o dano acontecendo, medido, com o agente agindo de boa-fé sobre a doutrina que
recebeu. Confirma a [ARTE-134] pelo pior caminho: o gate sempre-vermelho não só é ignorado, ele
**produz edição desnecessária em arte paga**.

**Como verificar:** `node scripts/qc-hex.mjs <html>` ou `node scripts/qc-hex.mjs out/<proj>/graphics`
(a pasta do projeto não tem `.html` solto: apontar para `out/<proj>` mede zero e sai 2, que não é
aprovação). Nunca mais o `perl` — está proibido por escrito no item 6 do `editor-de-arte`.

## ARTE-154 — O `check-overlap` INFLA a caixa de quem está em plano inclinado — e o executor endireita a tela para calar o gate

**Medido em 08/ago/2026 na `s41` do `cerebro-quando-sonha`** (M06 citação: o registro PubMed de
Hobson & McCarley numa folha timbrada). O `check-overlap` acusou `"ativação-" ✕ "síntese"` com
**49.231px²** — as duas linhas do selo prensado. A tela estava perfeita, e o executor, obedecendo o
gate, **afastou as linhas em 46px** para zerar a interseção.

**A conta, que é toda a lei.** `getBoundingClientRect` devolve a caixa **alinhada aos eixos**. Para um
retângulo `w × h` girado de θ, essa caixa tem altura `w·|sen θ| + h·|cos θ|`. Aqui as linhas medem
1420 × 269px dentro de uma folha a −1,3°:

    1420 · sen(1,3°) = 32,2px de altura FANTASMA em cada linha

Com o entrelinhamento natural (269px, exatamente a altura da caixa) as duas AABB passam a se
sobrepor ~32px — **espaço vazio onde não há um pixel de tinta**. Quanto mais LARGO o texto, pior:
a inflação cresce com `w`, então título largo em plano inclinado é o caso garantido de reprovar.

**Por que dói mais que um alarme falso comum.** O gate não é ignorado — ele é **obedecido**, e a
obediência deforma o desenho: quem afasta linhas, reduz corpo ou endireita o plano está mudando arte
correta para satisfazer uma medição errada. É a [ARTE-134] no seu segundo formato: lá o gate
sempre-vermelho ensinava a ignorar; aqui ele ensina a **consertar o que está certo**. E o rastro fica
plausível — o comentário no HTML explica com precisão a folga de 46px, então o próximo a ler acha
que é decisão de composição.

**O gate já resolveu esse mesmo problema uma vez, e a solução não cobre este caso.** Para grifo
inline quebrado em 2+ linhas ele trocou `getBoundingClientRect` por `getClientRects()`, medindo o que
o motor DESENHOU fragmento a fragmento (caso do `nilo-nao-secou`, 28–31/jul). Só que isso vale para
`display:inline`: em bloco, `getClientRects()` devolve **a mesma AABB inflada**. O conserto certo é
medir **polígono**, não caixa — os 4 cantos transformados de cada elemento, com separação por eixo —
ou, no caso comum de dois irmãos sob o MESMO ancestral girado, comparar as caixas no espaço LOCAL:
transformação afim comum não altera se dois retângulos se cruzam, e no espaço local a caixa é exata.

**Por que esta lei não vem com o patch.** Mexer no `check-overlap` muda o veredito de todo o acervo,
e a régua da [ARTE-134] — a que este achado confirma — manda rodar o gate no acervo inteiro e contar
os positivos ANTES de trocar o critério. Isso é Chrome em centenas de cenas, e a máquina estava com
`load 125` rodando a própria onda de arte. Consertar sem medir seria cometer, no gate vizinho, o erro
que a lei acima descreve. **Fica o diagnóstico fechado e a conta pronta para quem tiver a janela.**

**Enquanto isso, para quem topar com o caso:** confira se há tinta de verdade na interseção antes de
mexer no layout — `shot.mjs` no instante que o gate cita responde em um frame. Se a sobreposição for
só das caixas, a saída sancionada é declarar a isenção no contêiner (`data-qc-rolagem`, que o gate
LÊ e propaga para os descendentes), como já se faz para texto em superfície panoramizada — **não**
endireitar a arte. E registre no HTML que a isenção é por rotação, senão o próximo executor desfaz.

## ARTE-155 — A URL identifica a FONTE, não o item — e um PDF de 20 páginas tem uma URL só

**Medido em 08/ago/2026 no QC do `ceuta-travessia-em-massa`.** O `qc-clipe-repetido` acusou 17
repetições. Quatro delas vinham rotuladas `⚠ mesmo item, nomes diferentes` — o veredito mais grave
que ele emite, porque é o que a [ARTE-139] criou para pegar o reencode renomeado. **Três das quatro
eram falsas**, e `md5sum` resolveu em um comando:

    s79-frontex-...-p2.jpg  1e5d4dee  217.857 bytes   ┐ três PÁGINAS do mesmo PDF do Statewatch,
    s79-frontex-...-p3.jpg  18af2b63  172.600 bytes   ┤ uma URL só na pauta porque o PDF é um só
    s79-frontex-...-p4.jpg  75d7fc85  168.452 bytes   ┘
    s50-painel-do-infante   a83b96c3  7.399.427 bytes ┐ a OBRA INTEIRA e um RECORTE de detalhe,
    s50-dom-henrique-...    4bd93ed0  2.465.481 bytes ┘ mesma página na Wikimedia
    s49-septa-...-1572.jpg  434ca6ce  1.895.611 bytes ┐ ESTE é real: byte a byte o mesmo arquivo,
    s52-antes-septa-...jpg  434ca6ce  1.895.611 bytes ┘ baixado duas vezes com nomes diferentes

**A troca que causou o erro.** A [ARTE-139] promoveu a URL a identidade do plano — correto para o
caso dela, em que dois nomes escondiam um vídeo só. Mas a URL responde *"de onde isto veio"*, e o
gate perguntava *"isto é a mesma imagem"*. São perguntas diferentes toda vez que uma fonte rende
mais de um item: página de documento, quadro e close, frame extraído de vídeo.

**Por que hash não pode ser a régua sozinho** — e é aqui que a lei ganha forma. Se o gate acusasse
só com bytes iguais, o reencode 30fps/all-intra da [REND-47] escaparia: ele muda todos os bytes e
continua sendo o mesmo plano na tela. Então o desempate não podia ser um teste, tinha de ser **dois
vereditos**:

    bytes IGUAIS      → o mesmo arquivo com dois nomes. Reprova, é repetição.
    bytes DIFERENTES  → mesma fonte, arquivos distintos. AVISA e manda conferir por VISÃO,
                        porque daqui não dá para separar "página 3" de "reencode do mesmo vídeo".

**O gate que confessa o que não sabe vale mais que o gate que chuta.** O aviso custa uma olhada; a
reprovação custava mandar refazer três páginas de um documento que estava certo — e, junto, ensinava
a passar os olhos pelo bloco inteiro, onde estava a repetição verdadeira da `s49`/`s52`.

**Conserto:** `scripts/qc-clipe-repetido.mjs` indexa `_media/` por basename, hasheia sob demanda e
separa os dois vereditos. Efeito medido no mesmo projeto: 17 → 14 achados sem perder nenhum real.
Depois de declarar `data-qc-reuso` nos 11 pares que o julgamento editorial aprovou como costura,
sobraram **3 achados reais**.


## ARTE-156 — `variantes_ouvidas` guarda duas espécies opostas, e o gate punia quem obedeceu à régua

**Medido em 08/ago/2026 no QC do `ceuta-travessia-em-massa`.** O `qc-textos-tela` reprovou 4 textos
de tela nas cenas `s97-torreblanca` e `s150-ecfr-torreblanca`, todos pelo mesmo motivo: escreviam
**"ECFR"**, que estava listado em `variantes_ouvidas`. Só que o mesmo glossário, na entrada ao lado,
já dizia o contrário em três campos:

    "_forma_curta": "ECFR"
    "_variante_confere": "'ECFR' aparece 1x na fala — é a sigla que o apresentador usa,
                          não erro de transcrição."
    "_nota": "Se a tela escrever a sigla, escreve 'ECFR'."

**As duas espécies.** `variantes_ouvidas` acumulou coisas que não se parecem em nada: a grafia
ERRADA que o transcritor ouviu (`"Celta"` por `"Ceuta"` — o caso que fez o gate nascer) e a SIGLA
OFICIAL que a instituição assina e o apresentador diz (`"ECFR"`). A primeira nunca pode ir para a
tela. A segunda é a forma curta correta. O campo tem um nome só para as duas, e o gate tratava a
lista inteira como proibida.

**O agravante que a distingue de um alarme falso qualquer:** o `redator-de-tela` **já tinha
separado** as duas, no campo `_forma_curta`, com a instrução explícita de escrever a sigla. O
executor obedeceu à declaração; o gate reprovou o executor. *Reprovar quem seguiu a régua declarada
ensina que declarar não vale nada* — e a próxima cena escreve "European Council on Foreign
Relations" por extenso num card de rodapé, ou some com a sigla que a voz diz, só para calar o gate.

**Conserto:** o gate isenta a variante quando ela é, normalizada, o `_forma_curta` declarado. O caso
`"Celta"` continua pego — ninguém declara como forma curta um erro de audição. Regressão nos 4
projetos com `textos-tela.json`: nenhuma falha nova, e o `ceuta` foi de 4 falhas a PASS.

**Padrão do dia — o quinto seguido.** [ARTE-149] (ornamento), [ARTE-150] (mapa não assentado),
[ARTE-151] (DOM por script), [ARTE-152] (tela vazia por marcação estática), [ARTE-155] (URL como
identidade) e este mediram todos um **proxy** do que queriam medir: um atributo, um instante, uma
tag, uma URL, uma lista. O custo real nunca é o laudo errado — é o agente aprendendo que o gate não
vale leitura, e passando batido no dia em que ele acerta.


## ARTE-157 — O gate que PREVÊ não pode vetar quando existe um gate que MEDE

**Medido em 08/ago/2026 no QC do `ceuta-travessia-em-massa`.** O `qc-tipografia`, nascido naquele
mesmo dia, acusou **61 das 124 cenas**. Depois de consertar o piso de peso — que era achado real, e
virou 62 declarações subidas a 600 em 54 cenas —, sobraram 6 cenas acusadas por um único motivo:
`risco900`, a previsão de que caps acentuadas em peso 600–749 sem 900 **vão sair quebradas**.

Rodei nelas o `_audit-til`, que não prevê: renderiza e olha o desenho. Veredito nas seis, inclusive
em `€ 6 BILHÕES` com Õ em peso 600 e em `ACEITAÇÃO` com cedilha em 400:

    == 0 arquivo(s) com caixa alta acentuada defeituosa, de N candidatos ==

**A regra da casa é verdadeira e o alarme era falso ao mesmo tempo** — não há contradição nisso. A
doutrina do til nasceu de um defeito real; o que não se sustenta é derivar dela um veto sobre cenas
que ninguém renderizou. Entre a regra e a cena existem a família que de fato resolveu, o fallback do
`font-family`, o tamanho, o traçado. Só o render sabe.

**Duas outras coisas o gate lia errado, e as duas acusavam a mais:**

- **Acento agudo não é til.** `CAPS_ACENTUADAS` incluía `ÁÀÂÉÊÍÓÔÚ`, e com isso reprovava `ARGÉLIA`,
  `POLÍTICA`, `PEDRO SÁNCHEZ` e `EX-COLÔNIA ESPANHOLA`. O defeito documentado é Ã/Õ e Ç. *O nome do
  especialista já dizia o alvo: `_audit-til`.*
- **Comentário de código não é texto de tela.** A varredura pegava toda string entre aspas do
  arquivo — e o laudo denunciou a si mesmo ao imprimir `"TUNÍSIA, 2023:\n//   € 105 MILHÕES"`, com
  as duas barras do comentário dentro do achado.

**Conserto:** `risco900` deixou de contar no exit e passou a imprimir a linha que resolve
(`node scripts/_audit-til.mjs <cena.html>`); as caps se restringem a Ã/Õ/Ç; comentários saem antes
da varredura. De 61 acusadas para **0 reprovações e 1 risco a medir**.

**A régua geral, que é o que fica.** Quando dois gates olham a mesma coisa e um deles RENDERIZA,
**quem manda é o que renderiza** — o outro no máximo aponta onde olhar. Vale para o par
`qc-tipografia`/`_audit-til` como valeu para `qc-carga`/frame de mapa na [ARTE-150]. Previsão que
contradiz medição e ainda barra a fila não é rede de proteção: é o gate ensinando que gate não vale
leitura, pouco antes do dia em que ele acerta.


---

## ARTE-158 — Contrato de cena é fato de EXECUÇÃO — o gate que faz `grep` aprova o cadáver

**Medido em 08/ago/2026, estação ARTE do `cerebro-quando-sonha`, cena `s15` (31 KB, "você aceita voar
sobre uma cidade que não existe").** A cena estava no disco, contada como pronta pelo despachante,
aprovada pelo `qc-contrato` e pela auditoria de conjunto. Ela estava **morta**.

Um array era declarado DEPOIS da IIFE que empurrava nele:

```js
var BLD=[];
(function(){ … BLD_BLINK.push({…}); … })();   // linha 277
var BLD_BLINK=window.BLD_BLINK||[];            // linha 339 — tarde demais
```

Com `var`, o hoisting eleva a **declaração** e não a **atribuição**: na hora do `push` o array valia
`undefined`, a exceção subia, **o script inteiro abortava** — e as linhas de baixo, entre elas
`window.__renderAt=`, nunca rodavam. O frame em t=12 s saía com o céu estrelado vazio e um toco de
estrutura no canto. A cidade inteira, que é a cena, não existia.

**Por que nenhum gate viu.** O `qc-contrato` respondia por `has(/window\.__renderAt\s*=/)` — *o texto
contém a atribuição?* Contém: está lá, na linha que nunca executa. O gate imprimia
`✓ expõe window.__renderAt(t)` sobre uma página onde `typeof window.__renderAt === "undefined"`.
Determinismo, `@keyframes`, comentário de `<style>`: tudo verde, tudo textual.

> **A régua:** quando a afirmação do gate é sobre o que a página FAZ, perguntar ao arquivo é
> perguntar à intenção do autor. Abra a cena e pergunte ao `window`. Irmã da [ARTE-157] — lá, entre
> dois gates, manda o que renderiza; aqui, dentro de um gate só, manda o passo que executa.

**Consertos aplicados** (`scripts/qc-contrato.mjs`):

1. **Passo de runtime**: abre a cena no Chrome e exige `typeof window.__renderAt === "function"` e
   `typeof window.__duracao === "number"`. Erro de JS na página entra no laudo — como CAUSA quando a
   cena morre, como aviso quando ela vive.
2. **Chrome que não sobe não é cena quebrada** (mesma proteção do `check-overlap.mjs`): falha de
   lançamento vira aviso *"não medido"*, nunca reprovação. Duas leituras (500 ms e 1500 ms) antes do
   veredito, porque cena com footage pesado adia o registro e reprovar por lentidão inventa defeito.
3. **`--sem-runtime`** para quem precisa só do estático.

**E um segundo defeito, que é o que me fez afirmar o que não tinha medido:** o script lia
`process.argv[2]`. Passar o glob das 60 cenas rodava **uma** e terminava em `✓ contrato OK` — que eu
li como "as 60 passaram", e escrevi isso. *Ferramenta que aceita a lista inteira em silêncio e
responde por um item devolve uma aprovação que ninguém pediu.* Agora percorre todos os arquivos e
fecha com `══ N/M passaram ══`.

**A varredura de runtime nas 60 cenas do vídeo deu 60/60 vivas** — a `s15` era a única, e o detector
foi validado contra um HTML quebrado sintético antes de eu confiar no número. Gate novo que nunca
pegou nada é hipótese, não rede.

**Onde este defeito nasce, e é o que fecha o caso:** a `s15` foi a **última** cena escrita pela onda
que morreu de cota às 04:17. Escrever o arquivo e validá-lo são dois passos, e a morte por 429 cai
entre eles — deixando no disco um HTML que tem exatamente a aparência de trabalho pronto. Enquanto o
critério de "arte concluída" for *o arquivo existe*, toda sessão interrompida planta uma dessas.

---

### ARTE-161 · A fonte errada não era o PESO, era a FAMÍLIA — e a ARTE-148 pegou só metade (08/ago/2026)

*(era `ARTE-153` na VM; o merge de 08/ago a pôs em `ARTE-155`, número que já era da lei da URL como
identidade da fonte — renumerada para `ARTE-161`. Ponte: `seed/DE-PARA-LEIS.md`.)*

A [ARTE-148] mediu peso e achou 35 de 71 cenas do `o-acre` em 500, abaixo do piso. Estava certa e
era **incompleta**: o Mateus reprovou **duas** cenas — a s07 *e a s21* — e a **s21 não tem peso 500
nenhum**. Ela passava no gate que nasceu para pegá-la.

Medindo o que ele de fato via:

    #palco   ......  font-family:"Neue Haas Grotesk Display Pro","Helvetica Neue",Arial   ← certo
    const FF_H  = '"Helvetica Neue",Arial,sans-serif'                                     ← OUTRA FONTE

O helper `FF_H` desenha os **rótulos, carimbos e kickers** — os textos grandes que o olho pega
primeiro. Com ele apontando para Helvetica Neue *sem a Neue Haas na frente*, a mesma cena sai com
duas tipografias. **"Parece outra fonte" era literal, não impressão.** Alcance: 14 das 71 cenas,
quase todas de mapa, e todas com a Neue Haas declarada no CSS do palco ao mesmo tempo.

**Por que a Helvetica estava ali, e por que sair é seguro.** Ela entrou por um motivo legítimo: a
Neue Haas em Bold (600–749) desenha Ã/Õ maiúsculos errado, e a régua da casa dá **duas** saídas —
*"usar 900 (Black) **ou** 'Helvetica Neue' em caps acentuadas"*. As cenas aplicaram **as duas ao
mesmo tempo**. Medido nas 14: **todo uso real de `FF_H` é com `w:900`** (os 700 que aparecem são
chamadas de `medir()` calculando caixa; o texto sai em 900). Em Black a Neue Haas desenha Ã/Õ
corretamente — a Helvetica primária era gratuita, e o preço dela era a identidade da marca.

O conserto **não remove** a Helvetica: rebaixa-a a *fallback*. Se a Neue Haas faltar na máquina o
texto ainda desenha; muda quem manda quando as duas existem.

⚠️ **A lição de método, e é maior que a tipografia:** um gate que mede a dimensão errada com todo
rigor devolve PASS para o defeito que o dono está apontando com o dedo. Quando o humano vê e o
número não vê, **o que está errado é o que se mede** — não os olhos dele. Aqui o gate media peso
enquanto o defeito era família, e a cena reprovada por ele saía limpa.

Conserto determinístico: `scripts/consertar-tipografia.mjs <proj> --aplicar` (backup automático em
`out/<proj>/_bkp-tipografia/`; sobe peso <600 e põe a Neue Haas na frente). Aplicado no `o-acre` em
41 cenas — 35 de peso, 14 de família. Agente-raiz: `editor-de-arte`.

---

### ARTE-162 · Marcação sobre mídia real: a coordenada se MEDE, nunca se estima (08/ago/2026)

*(era `ARTE-154` na VM; o merge de 08/ago a pôs em `ARTE-156`, número que já era da lei das
`variantes_ouvidas` — renumerada para `ARTE-162`. Ponte: `seed/DE-PARA-LEIS.md`.)*

Sete cenas do `o-acre` reprovadas pelo Mateus com a mesma queixa em roupas diferentes: *"o amarelo
tem de cobrir exatamente a palavra"* (s08) · *"o quadrado desenhado está fora de sincronia com o
quadrado real do vídeo"* (s61) · *"desenhos em alinhamento ERRADO"* (s67) · *"linhas erradas"* (s69)
· *"linhas marcadas do chão erradas"* (s78, s85) · e a s28, por marcar demais.

**Sete cenas com o mesmo defeito não são sete erros — são um método errado usado sete vezes.**

**A raiz:** escrevia-se `x:1550, y:1456` a partir do que se *imaginava* que a imagem mostra. Sobre
arte desenhada isso funciona, porque quem desenha põe o objeto onde quer. Sobre fotografia,
documento digitalizado ou footage, **a coordenada do alvo não é dedutível**: a vala está onde o
fotógrafo a pegou, a palavra está onde o tipógrafo de 1902 a compôs. O agente que consertou a s67
disse a frase que fecha o diagnóstico: *"é provável que o traçado original tenha sido escrito de
cabeça, sem a foto na tela."*

Os desvios medidos no conserto não são sutis — **77 a 900 px**, com arestas correndo em pasto liso
e um anel terminando 380 px antes da vala real.

**A regra, sem exceção:**

> Nenhuma coordenada de marcação sobre mídia real se escreve sem ter olhado o frame. Renderize,
> ABRA a imagem, meça onde o alvo está, escreva o número, renderize DE NOVO e confirme que caiu em
> cima.

O laço é barato (`scripts/shot.mjs` + Read do PNG): render é luz, inferência é o que custa. O teste
que decide: **marcação que cai sobre área uniforme** — sem borda, sem letra, sem contraste — está
fora do alvo.

**Três agravantes que o laço ingênuo não pega:**

1. **Um tempo só não prova nada** — confira na entrada E na permanência; marcação que nasce certa e
   escorrega com a animação é o mesmo defeito com outra roupa.
2. **Alvo que se move não tem posição, tem trajetória** — com câmera que recua ou vídeo de fundo,
   amostre 4–5 tempos. Foi o caso literal da s61.
3. **Confirme que a mídia CARREGOU antes de medir** — ver [SIS-155]. Medir contra um frame vazio
   produz "correção" pior que o defeito, com cara de trabalho feito.

**E o irmão gêmeo é o EXCESSO.** Ele reclamou duas vezes de *"excesso de texto/info em tela em
muitas cenas corridas"*, e **três dos sete pedidos eram de subtração pura**. Marcar tudo que se pode
marcar é a mesma preguiça por outro lado: marca-se o que a narração diz **agora**, e só isso.

Agente-raiz: `editor-de-arte` (§8 do ofício). Sem gate determinístico ainda — verificar se um
retângulo cai sobre "onde deveria haver a palavra" exige medir contraste de borda no frame, e a
tentativa precisa nascer com tolerância declarada, sob pena de virar alarme falso.
---

### ARTE-163 · A `ancora` do espelho é o ROTEIRO — quem diz o que foi FALADO é o `words-final.json` (08/ago/2026)

`galaxia-arco-flecha`, cena `s43-o-estouro-sonico-do-aviao`. A ordem de serviço da cena mandava, no
item 3, **manter o texto da tela**, com esta justificativa: *"a âncora nova troca 'avião de carga' por
'avião de caça' porque a re-decupagem corrigiu a transcrição"*. Sobre essa frase a sessão anterior
decidiu `CONTEÚDO NÃO MUDA`.

Fui ao `words-final.json`, que é a letra do master vigente, e li a janela da cena:

```
280.02 Sabe · 280.36 quando · 280.80 um · 280.92 avião · 281.26 de · 281.42 CARGA · 281.84 passa
```

A fala diz **carga**, em 281,42 s — t = 1,39 s dentro da cena. **A re-decupagem não corrigiu nada.**
Quem escreveu leu o campo `ancora` do espelho ("Sabe quando um avião de caça…") e o tomou por
transcrição. A `ancora` é o **roteiro**: o que estava escrito para ser lido, não o que a boca disse.
O próprio `motivo` do mesmo segmento avisava, duas linhas abaixo — *"o Bôco diz avião de CARGA"*.

**Por que isso é caro:** a cena escrevia `CAÇA F/A-18` na tela enquanto a voz dizia "carga". O
espectador ouve uma coisa e lê outra no mesmo segundo, e desconfia das duas — que é literalmente o
motivo registrado em `nao_vai_para_tela` pelo `redator-de-tela`. A afirmação falsa ("a transcrição foi
corrigida") tinha virado **autorização** para manter o defeito, e a ordem de serviço a carregava para
a próxima sessão com cara de fato apurado.

**A regra:** toda afirmação sobre **o que foi falado** — "a fala mudou", "a re-decupagem corrigiu",
"o take novo diz outra coisa" — se verifica no `words-final.json` (ou no `words-limpo`, conforme o
relógio da cena), e em nenhum outro lugar. Espelho, conceito, brief e ordem de serviço são derivados;
derivado não testemunha sobre a fonte. Custa um `node -e` de dez segundos.

Corolário de registro: quando a ordem de serviço estiver errada, **anexe uma emenda datada em vez de
reescrever o item**. O raciocínio velho preservado é o que impede a próxima sessão de refazer o mesmo
caminho e chegar à mesma conclusão errada. Parente de [ARTE-102] (derivado não é fonte) e da regra do
estúdio de que o roteiro do repo não é a fala gravada.


## [ARTE-193] `line-height` menor que a métrica da fonte colide sem a tinta encostar

> 🔀 **Era `ARTE-174`, virou `ARTE-191` em 09/ago/2026 e virou `ARTE-193` em 10/ago.**
> O segundo salto: a renumeração de 09/ago pousou no número que outra sessão usaria no dia
> seguinte para *"na citação, o piso de herói decide a GEOMETRIA"* — e aquela é citada pelo
> agente `editor-de-arte.md`, enquanto esta não é citada por ninguém de fora. **Entre duas leis
> que colidem e já estão no remoto, fica com o número a que tem CITAÇÃO VIVA:** renumerar a
> citada quebraria a referência de quem a segue; renumerar esta não quebra nada.
> *Corrigir colisão sem olhar o maior ID livre do domínio produz a colisão seguinte* — foi o que
> aconteceu aqui, duas vezes seguidas, no intervalo de um dia.
> (nota original de 09/ago:) O número colidia com a lei "o arquivo
> de fala também tem relógio", mais abaixo neste arquivo — e as citações vivas (`.claude/agents/
> editor-de-arte.md`) apontam para AQUELA, então quem estava em uso ficou com o número. Colisão
> travava `scripts/regras-todas.mjs`, e com ele o `_TODAS.md` inteiro parava de ser regenerado.

> 🔀 **Era `ARTE-168` e virou `ARTE-174` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-168` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

*(🔀 nasceu como `ARTE-159` na `estudio-top10` e colidiu no merge de 08/ago/2026 com a `ARTE-159` do
main — "a declaração de composição nasce COM a cena". Quem já estava no remoto ficou com o número.
A colisão escapou do agente que renumerou as outras 23 porque os dois lados escrevem o cabeçalho em
estilos diferentes e o regex só via um; a raiz está consertada em `scripts/lib/leis.mjs`.
Ponte: `seed/DE-PARA-LEIS.md`.)*

**Medido em 08/ago/2026 no QC do `ceuta-travessia-em-massa`**, na primeira varredura de
`check-overlap` completa do projeto: **119 cenas limpas, 5 reprovadas** — e **4 das 5 são o mesmo
defeito**, escrito por mãos diferentes, em cenas de modos diferentes.

| cena | par que colide | área | janela |
|---|---|---|---|
| `s97-torreblanca` | "A MIGRAÇÃO" ✕ "COMO ARMA" | 34.384 px² | t=10 → 17,4 s (até o corte) |
| `s124-ninguem-explicou` | "QUEM COMEÇOU AQUILO," ✕ "E POR QUE / NAQUELA MANHÃ?" | 25.831 px² | t=2,2 → 5,8 s |
| `s99-2022-virada` | "MARÇO" ✕ "2022" | 4.410 px² | t=2,6 → 15 s (12,4 s dos 15,2) |
| `s104-tarajal` | "CAM 7 · PERIMETRAL" ✕ "6 · FEV · 2014" | 1.275 px² | t=5,6 → 8,6 s |

**A forma é sempre a mesma:** bloco de DUAS LINHAS em caixa alta grande com **`line-height` menor que
a métrica da fonte** (1,00–1,05).

**A causa é ESTRUTURAL, não a animação — e isso foi medido contra a hipótese contrária.** Ao abrir o
laudo, minha primeira leitura foi "o movimento come a folga: `transform: scale` cresce a partir do
centro e as duas linhas se esticam uma contra a outra". Dois agentes mediram no Chrome, em cenas
diferentes, e a hipótese caiu como causa: na `s97` a vibração do grifo é `scaleX` — **horizontal**,
nunca tocou a linha de cima; e a `s99` colide desde t=2,6 s com o medalhão **parado**.

*O pulso agrava onde existe, mas nunca é o que abre a colisão.* Na `s124` — a única das quatro com
pulso vertical real — os blocos já se tocavam **estaticamente** (~30 px de tinta sobreposta, por isso
a colisão dura de 2,2 s a 5,8 s e não só no pico), e o `scale` a partir do centro ainda fechava mais
o vão em 2,81 s. Lá valeu somar ao conserto de interlinha os `transform-origin` **opostos**
(`50% 100%` na linha de cima, `50% 0%` na de baixo), que fazem o pulso **abrir** o vão em vez de
fechá-lo. Corrigir só a animação não teria resolvido nenhuma das quatro.

O mecanismo real: **o `check-overlap` mede a tinta por `Range.getClientRects()`, e o rect de um
fragmento de linha tem a altura das MÉTRICAS DA FONTE (~1,12–1,17 em), não a do `line-height`.** Com
o line box menor que isso, o retângulo de cada linha **estoura a própria caixa** para cima e para
baixo, e duas linhas empilhadas se cruzam sem que um pixel de tinta encoste. Medido: na `s99` o rect
do "2022" (`line-height:1`) transbordava 16–22 px acima de si mesmo e invadia o "MARÇO" em ~8 px; na
`s97` a cedilha do Ç de MIGRAÇÃO passava a ~19 px de "COMO ARMA" — perto, mas sem tocar.

**Por isso o conserto é a interlinha, e é pequeno:** `line-height` de 1,02 → **1,15** resolveu as
duas. A tinta desce bem menos do que uma margem equivalente exigiria, porque o gate desconta a folga
do line box — a composição quase não muda. Onde houver um elemento ancorado na baseline (o `<i>` do
marca-texto), ele desce junto: reajuste o `bottom` dele no mesmo passo.

**A régua prática:** `line-height` abaixo de ~1,15 em bloco de duas linhas é dívida esperando o gate.
E a margem tem de cobrir a variação de métrica entre máquinas — a VM mede 1,116 em (Liberation Sans)
e uma Neue Haas real, 1,165 em; o portão roda em qualquer uma das duas.

**A janela denuncia o tipo.** Colisão que começa junto com a entrada e vai **até o corte** não é
roçar de transição: é o estado de repouso do bloco. Das quatro acima, três ficam colididas a maior
parte da vida na tela — a `s99` por 12,4 dos seus 15,2 s. *Se a colisão dura o bloco inteiro, o
layout está errado; se dura 0,2 s na entrada, é a animação.* Ler a janela antes de abrir o arquivo
diz qual dos dois consertar.

**O conserto é o espaçamento, nunca o texto.** Folga vertical entre as linhas e/ou `line-height`
maior; onde houver animação, `transform-origin` que impeça a caixa animada de crescer na direção da
vizinha. Mexer no texto quebraria o word-lock, que é a sincronia com a fala.

**⚠️ Não "conserte" a família da fonte no caminho.** Três dessas cenas estão em `"Helvetica Neue"`
**de propósito** — `COMEÇOU`, `MARÇO`: Ç maiúsculo quebra na Neue Haas em todo peso ([ARTE-120]). O
comentário está no arquivo; quem troca para a fonte da marca "corrigindo" reintroduz um defeito pior.

**A quinta reprovação é de outra natureza, e vale por ela mesma:** na `s144-euronews` o rodapé de
atribuição obrigatória ("Fonte: Euronews, 31 de julho de 2026") cobre o bloco de ressalva
("A MATÉRIA CONDICIONA" / "SE OS NÚMEROS SE CONFIRMAREM") — **59.955 px² por 9 s**. As duas
informações são obrigatórias, uma por licença e outra por honestidade editorial, e foram desenhadas
sem que ninguém as visse disputando o mesmo rodapé.

**E o argumento de por que os dois gates existem:** a `s144` estava **APROVADA** no laudo
`L1_documento` do `qc-visual`. O olho leu a cena como composição e não viu erro; a caixa medida
reprovou. Sessenta mil px² sobrepostos durante nove segundos não se apresentam ao olho como "defeito"
— se apresentam como um rodapé um pouco cheio. *Lente julga composição, gate mede bbox; onde os dois
discordam, quem tem régua ganha.*

*Agente-raiz: `editor-de-arte` — validar o bloco no PICO da animação, não só no instante do pouso.*

---

### ARTE-164 · Declarar não basta: tem de declarar ONDE o gate olha — a janela de contexto é parte do contrato (08/ago/2026)

`galaxia-arco-flecha`, estação de arte. Dois gates cobram a mesma coisa por atributos diferentes:
`qc-clipe-repetido` quer `data-qc-reuso` (a costura visual) e `qc-repeticao` quer `data-gancho`
(a retomada narrativa, [ARTE-60]). Declarei os dois, na mesma tag — e o `qc-repeticao` continuou
acusando 3 famílias, entre elas a assinatura de rádio que reaparece em **14 cenas**.

A causa não estava na declaração, estava na **posição** dela. O gate lê:

```js
const trecho = src.slice(Math.max(0, m.index - 400), m.index + 400);
const gancho = (trecho.match(/data-gancho\s*=\s*["']([^"']*)["']/) || [])[1] || null;
```

Uma janela de **±400 caracteres ao redor do `src`**. Minhas declarações de `data-qc-reuso` tinham
~330 caracteres e ficavam **entre** o `src` e o `data-gancho` — empurrando o gancho para fora da
janela. Pior: como a janela também abre 400 caracteres *para trás*, o gate às vezes casava o
`data-gancho` da **tag vizinha** — a imagem de rádio recebeu o gancho da imagem rádio+óptico, e o
laudo imprimia um gancho que não era dela.

Conserto: mover o `data-gancho` para **imediatamente depois do `src`**, antes de qualquer atributo
longo — 40 tags em 33 cenas. Resultado: `11 mídias repetidas · 0 sem gancho · 0 GRAVE`.

**A regra:** quando um gate procura uma declaração por proximidade textual, a **ordem dos atributos
vira contrato**, mesmo que nenhuma documentação diga isso. Atributo de declaração (`data-gancho`,
`data-qc-reuso`, `data-qc-papel`, `data-qc-rolagem`) vai **colado no `src`**; prosa longa vai depois.

E o sintoma que denuncia o problema: o laudo imprime um gancho **que não corresponde àquela mídia**.
Se o texto declarado no relatório fala de outra imagem, não é o gancho errado — é a janela pegando
o vizinho, e a sua declaração continua invisível.


## [ARTE-175] O número que o gate acusa pode não estar escrito em lugar nenhum

> 🔀 **Era `ARTE-169` e virou `ARTE-175` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-169` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

*(🔀 nasceu como `ARTE-160` na `estudio-top10` e colidiu no merge de 08/ago/2026 com a `ARTE-160` do
main — "julgar arte contra um plano no meio da linha condena o que está certo". Mesma causa da
[ARTE-168]: estilos de cabeçalho diferentes nos dois lados. Ponte: `seed/DE-PARA-LEIS.md`.)*

**Medido em 08/ago/2026 no QC do `ceuta-travessia-em-massa`.** O `qc-tamanho` reprovou **9 rótulos em
6 cenas de mapa**, todos abaixo do piso de 104 px: ESPANHA a 94, MARROCOS a 97, "MURO MARROQUINO" a
96, "2 DE AGOSTO DE 2026" a 86. Quem abre o arquivo procurando `font-size:` ou `size:` para achar o
94 **não acha** — porque o 94 não existe no fonte.

**Quatro dos nove nasciam de uma multiplicação.** A linha do país dentro do helper `pill()` não tem
corpo próprio: é derivada do nome da cidade —

    const s1 = sz || 150, s2 = Math.round((sz || 150) * 0.62);   // 0,62 … 0,74 conforme a cena

Com `sz` de 152, `s2` cai em 94. O autor escolheu uma **razão**, não um tamanho; o gate mede o
**tamanho**. Entre a decisão e a medição existe uma conta, e é nela que o defeito mora.

**O conserto certo é um CHÃO no helper, não sete números no call site:**

    const s2 = Math.max(104, Math.round((sz || 150) * 0.62));

Chão e não razão nova, porque pill grande deve continuar na proporção que o autor escolheu — no mesmo
projeto, o `CEUTA` com `sz` 146 seguiu em 108 px e não foi tocado. Sete literais espalhados
consertariam estas seis cenas e deixariam a próxima nascer com o mesmo defeito.

**O efeito colateral se resolve sozinho, e pela mesma razão que causou o problema.** Eu tinha
avisado no despacho: "se subir o corpo, confira que o halo continua proporcional e a bandeira
também". Era desnecessário — halo (`size*0,05`) e bandeira (`fh = s2*0,76`) **também são derivados**,
então acompanham. *Onde a derivação causa o defeito, ela também carrega a correção.*

**A régua:** quando um gate acusa um valor que você não encontra no arquivo, procure a **conta**, não
o literal — e conserte na conta. Vale para tamanho, opacidade, duração, posição: qualquer número que
o desenho expressa como proporção e o gate lê como grandeza absoluta.

**Corolário de validação, do próprio executor:** *"gate verde também pode significar que o texto
sumiu."* Depois de mexer no helper que desenha o rótulo, ele gerou 7 frames e conferiu que os seis
rótulos continuavam **desenhados** — `rc=0` prova que nada reprovou, não prova que algo apareceu.

*Agente-raiz: `mapista` — piso dentro do `pill()`, e frame depois de mexer em helper de desenho.*

---

### ARTE-165 · No `qc-carga`, cada `<span class="grifo">` conta como um BLOCO DE TEXTO próprio (08/ago/2026)

Medido pelo `pesquisa-documentos` no `quao-fundo-terra`, montando os clippings M05. A cena `s43`
(6,43 s) saiu com **1,09 entradas/s** — reprovada — e ninguém entendia por quê: o card tinha um
masthead e duas frases. O que a métrica estava contando eram os **grifos**: cada `span` de destaque
progressivo é um nó de texto, e o `qc-carga` os soma como blocos independentes, do mesmo jeito que
somaria parágrafos.

**A régua que saiu daí:** clipping M05 **abaixo de ~7 s cabe UM grifo só**. A `s43` caiu de 1,09 para
**0,78** com essa única mudança. A `s45`, que tem 8,83 s, sustenta dois. E o **masthead precisa ser um
nó único** — veículo · seção · data no mesmo elemento, separados por caractere, não por três `<span>`
irmãos, que é como se escreve por instinto quando cada pedaço tem cor diferente.

**Por que isso não é detalhe de medição:** o grifo progressivo é a alma do M05 — é ele que faz o
documento *falar junto com a narração*, word-lock. Quem descobre a reprovação sem saber a causa tende
a cortar a frase citada, que é o conteúdo, quando o que sobra é cortar o **segundo grifo**, que é
enfeite. A cena fica com menos carga e mais força: um destaque só, no trecho que a voz está dizendo
naquele instante.

Corolário para quem desenha documento curto: escolha a frase que vai brilhar **antes** de montar o
card, não depois de o gate reprovar.

---

### ARTE-166 · Multiplicador na tela usa a PALAVRA da voz, não o resultado da conta (08/ago/2026)

O `redator-de-tela` do `dentro-do-sol` escreveu **`≈2.700×`** num rótulo cuja narração diz *"quase
três mil vezes mais quente que a superfície"*. A conta dele está certa — 15,67 milhões K ÷ 5.772 K =
2.715× — e o raciocínio também: *"arredondar para 3.000 apaga o «quase» e transforma a fala numa
igualdade falsa"*. Mesmo assim é o **defeito do `ceuta`** com o sinal trocado: lá a tela dizia `≈28×`
contra a voz *"quase trinta vezes"*, e o veredito foi que a tela nunca contradiz a voz. Ouvir "quase
três mil" e ler "2.700" é a dissonância que faz o espectador desconfiar das duas.

**A saída não é escolher entre os dois — é a forma que satisfaz os dois:** `QUASE 3.000×`. O
`QUASE` é o hedge da fala, então não há igualdade falsa; o número é o da voz, então não há
contradição; e a exatidão vive **no desenho**, na escala que sobe de 5.500 até 15.000.000 em
proporção real. É literalmente o exemplo que já estava no contrato do agente (`"na_tela": "QUASE 30
VEZES"`, `"valor_exato": "28,0×"`) — ele tinha a resposta escrita e não a aplicou.

**Por que escapou, e é a parte que importa:** o `pesquisa-dados` havia escrito no retorno
*"Corrija para ≈2.700×: fica fiel à fala, fiel ao modelo"*. Ele raciocinou como analista — para quem
o erro é o dígito — e o `redator-de-tela` acatou a recomendação de quem não carrega a régua de tela.
**O campo `texto_para_tela` do `pesquisa-dados` é insumo, nunca veredito**: quem decide o que se
escreve é o redator, e a única pergunta dele é "que palavra a voz disse".

**O teste, em uma linha:** o número da tela é **derivado de conta nossa** (multiplicador, razão,
porcentagem)? Então o rótulo é a forma FALADA e o exato vive na proporção. É **constante publicada
com fonte própria** (a idade do Sol, uma distância, uma temperatura medida)? Então o valor da fonte
pode ir à tela, porque ali a voz é que aproxima o dado — e não o contrário.

*Agente-raiz: `redator-de-tela` — §2.3 ganhou o teste operacional e a advertência de que
recomendação de `pesquisa-*` não é veredito de tela.*

### ARTE-167 · A CENA-FILHA DE RUN FUNDIDO NÃO SE DESENHA, E O DESPACHANTE DE ARTE NÃO SABIA DISSO (08/ago/2026, estação ARTE do `dentro-do-sol`)

Quando o diretor-de-arte marca um run com `fundir:true` no `fluxo` do conceito-visual, **UM** HTML —
o da cena-MÃE — cobre a janela inteira do run numa viagem de câmera contínua. É a [ARTE-40](b), o
único caminho vivo da transição contínua depois que a continuidade de fronteira entre dois arquivos
foi aposentada. As cenas seguintes do run continuam no espelho com `anima:true`, porque existem como
beats da narração; elas simplesmente **não têm arquivo próprio**.

O `scripts/desenhar-cenas.mjs` — a estação Arte em lote — não conhecia esse campo. Ele listava
`segmentos.filter(s => s.anima)` e despachava tudo. Medido em `dentro-do-sol`: **129 cenas na lista
contra 121 dossiês**, e as 8 sobrando eram exatamente as filhas (s21, s48, s76, s80, s81, s91, s92,
s112) — indo para o **Fable, a cota mais escassa do estúdio**, desenhar arte que a montagem
descarta.

**O desperdício é o menor dos dois danos.** O HTML órfão fica em `graphics/` e todo gate que conta
"cenas prontas" o conta: o vídeo passa a parecer mais completo do que está, e a cena que falta de
verdade se esconde atrás do número inflado. É a mesma armadilha que o `_montar-dossie-faltante.mjs`
já tinha produzido no `ceuta` (6 dossiês de filha em 77), com uma diferença que importa: lá o
sintoma apareceu na contagem de dossiês; aqui apareceria só na montagem, semanas depois.

**O sinal é gratuito e estava no disco.** O `_brief-arte.mjs` já filtrava filhas (não gera dossiê
para elas) — as duas ferramentas liam o mesmo `conceito-visual.json` e só uma o usava. Quando duas
peças derivam a mesma verdade e uma esquece, **a divergência é a ferramenta silenciosa ganhando da
correta**: a lista errada é a que despacha.

Consertado: o filtro entrou na origem da lista, com o log dizendo em voz alta quais cenas ficaram de
fora e por quê. E entrou junto um `--exceto=id1,id2`, porque a retomada por artefato só enxerga
trabalho TERMINADO — entre o instante em que outro despacho começa uma cena e o instante em que
grava o HTML, a lista a considera pendente e a manda de novo. É a disciplina que o render de lote
já usa entre o Mac e a VM (lista fixa por máquina, zero sobreposição) trazida para a arte.

**Antes de despachar lote de arte, confira a conta contra os dossiês.** Se a lista tem mais cenas
que o `_brief-arte/` tem arquivos, a diferença não é margem: é trabalho que ninguém vai usar.

### ARTE-168 · O `modelo` DO ESPELHO DECIDE A RÉGUA E QUEM PAGA A CONTA — E NINGUÉM O CONFERIA CONTRA O `modo` (08/ago/2026, estação ARTE do `dentro-do-sol`)

O montador declara duas coisas que dizem o mesmo por caminhos diferentes: `modo` (a família —
`footage`, `split`, `documento`) e `modelo` (o código do cardápio — `M07`, `M08`, `M05`). Ninguém
conferia se os dois falam da mesma cena. Medido: **33 das 121 cenas (27%)** de um vídeo só, em
padrão sistemático — 17 `footage` com **M14** (que é *print social re-criado*), 13 `split` com
**M25** (que é split **sem texto**), o comunicado do Nobel com **M22** (*anatomia/raio-X*), o CTA
com **M24** (*pergunta-retórica*).

**O campo alimenta duas decisões, e as duas erram em silêncio.** (1) `desenhar-cenas.mjs` resolve os
caminhos de `seed/examples/dourados/<Mxx>/` a partir dele e os entrega prontos ao executor — uma
cena de footage do Sol recebia exemplares de *print de tweet*. (2) O roteamento molde × invenção sai
do mesmo campo: `documento` é família de molde, então as 17 cenas de footage iam para o Opus, e uma
cena de invenção mal classificada chegaria ao **Fable** pelo motivo oposto. Nenhum dos dois falha;
os dois acertam a coisa errada.

⚠️ **O DOSSIÊ SALVOU AS CENAS, E É POR ISSO QUE O DEFEITO SOBREVIVEU.** A `s02-mais-denso-que-chumbo`,
declarada M25 (só vídeo, sem texto), saiu um split comparativo COM rótulo e unidade certos — porque
o `_brief-arte` entrega modo, metáfora e técnica, e isso pesa mais que a pasta de exemplares.
*Defeito que o bom senso do executor corrige não deixa de ser defeito: ele só passa a custar caro no
dia em que o executor não corrigir.* Foi o executor-de-molde quem percebeu, ao estranhar que o
dossiê do Nobel mandasse abrir a régua de um corte de subsolo.

O montador já tinha uma tabela "a fala pede → modelo" no ofício dele — e ela não cobria justamente
`footage`, `split` e `navegacao`, as três famílias que erraram. Tabela é lembrete, e regra que só
funciona se a pessoa lembrar é regra morta ([SIS-124]). Agora há gate:
`node scripts/qc-espelho-modelo.mjs <proj>`, pendurado no `top10 doctor` **antes da arte** — que é
onde ainda dá para consertar de graça. Ele deriva as famílias de `src/modos.mjs`, nunca de uma lista
digitada, e sugere o canônico de cada família (`--corrigir` troca, com backup).

Rodado nos projetos com espelho, o alcance é pequeno fora deste vídeo — `fatos-a380` 2/91 (`aereo-real`
com M04, que é mapa3d) e `galaxia-arco-flecha` 1/87 (`desenho` com M18, que é cronômetro). **Um
defeito raro num campo que decide gasto é exatamente o que um gate barato deve cobrir**, porque
quando ele acontece ninguém procura ali.

### ARTE-169 · O MOTOR DE MAPA OBEDECE PELA METADE QUANDO O DEM NÃO COBRE O ZOOM, E ISSO SAI NO FRAME COMO SE FOSSE A ARTE (08/ago/2026, `s123-mina-de-ouro-homestake`)

Com terreno ligado e o DEM ausente no nível pedido, o maplibre **não lança erro: aplica outra pose**.
Medido: a cena pediu `pitch 66,2 / zoom 17,48` e o motor entregou **`pitch 21,8 / zoom 16,18`** —
um solavanco no meio de uma câmera coreografada, sem uma linha no console. A causa é banal e
verificável: a chave respondia **200 no satélite até z18 e 400 no terrain-rgb a partir de z16**, e a
fonte de terreno herdava o `maxzoom` do satélite em vez de declarar onde ela realmente existe.

**O gênero do defeito é o que importa.** Não é "o mapa falhou" — é o motor cumprindo o pedido
possível e calando sobre a diferença. O agente que confia no `flyTo`/`jumpTo` e vai direto capturar
grava a pose errada com capricho, e o laudo dos gates passa: nenhum deles compara o que foi PEDIDO
com o que foi APLICADO. É a mesma família do `areTilesLoaded()` que responde `true` antes de pedir
tile — em mapa, **a ausência de erro nunca foi prova de que o quadro está como você escreveu**.

A defesa mora no `__aguardarMapa` da cena: **conferir a pose obtida contra `camAt(t)` e reaplicar
antes de liberar o frame** (depois disso, desvio de 0,00° na cena inteira). Está no ofício do
mapista para valer nas próximas — conserto que fica só dentro de um HTML morre com ele.

Duas medidas irmãs, da mesma cena: com terreno ligado o `center` **não** cai no meio da tela (a
elevação DELE define a altura da câmera — centrar no fundo de uma cava de 240 m põe a câmera dentro
do buraco), e o `exaggeration` sai da amplitude sondada no DEM, não do hábito (477 m em 8×8 km
pediram 2,4×→1,4×, não 4×).

E a régua editorial que a cena estabeleceu, porque ela vai se repetir: **1.478 m são subterrâneos e
nenhum DEM tem subsolo.** Acima da linha do chão, tudo é dado real (satélite + DEM + GeoJSON
drapejado); abaixo dela, o quadro **assume ser um corte esquemático** — campo escuro, estratos
abstratos, nenhuma cor fingindo foto de rocha — e a única coisa que afirma é a ESCALA, com o número
publicado. Fingir textura de rocha lá embaixo seria inventar registro onde não existe medição.
---

**ARTE-170.** **INSTRUMENTO DE ROLAGEM: meça o GLIFO MAIS LARGO contra a janela, e DECLARE a rolagem.**

> 🔀 **Era `ARTE-139` e virou `ARTE-170` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-139` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].
Odômetro, fita de altímetro, contador de casas — qualquer janela `overflow:hidden` com dígitos
empilhados girando por `transform`.

**A regra.** (1) A largura da janela se dimensiona pelo **glifo mais largo da fonte**, não pelo
`font-size` nem pelo advance médio: em `s49-2-milhoes-libras` (07/ago/2026) o `.slot` tinha 196px e o
"0" da Neue Haas em 308px desenha **208px** — 12px vazando à direita **sempre**, inclusive no número
final, que tem seis zeros. Meça com `Range.getBoundingClientRect()` do próprio dígito, que devolve a
extensão real das letras; `getBoundingClientRect()` do elemento devolve a caixa e mente aqui.
(2) A cena **declara** `data-qc-rolagem` no contêiner da janela — sem isso os gates leem os dez
dígitos empilhados como colisão, corte e texto novo a cada giro.

**Por que os 12px eram caros.** Eles não custaram um achado, custaram **43**: como nenhum dígito
jamais cabia INTEIRO no clip, a peneira de trânsito do `qc-fora-do-quadro` ("se coube inteiro alguma
vez, a máscara é de revelação") nunca disparava, e os ~40 cortes NORMAIS da rolagem viravam acusação.
Somados a 8 colisões e a `ritmo 1.94/s`, a cena parecia um desastre de composição e estava impecável —
o frame em `t=3.7s` mostra `£2.000.000` perfeito. Um vídeo inteiro ficou parado por causa disso.

**ARTE-171.** **TRAMA NÃO É INFORMAÇÃO — declare `data-qc-ornamento` na repetição idêntica.**

> 🔀 **Era `ARTE-140` e virou `ARTE-171` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-140` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].
Quando a metáfora É a quantidade (maré de pictogramas, chuva de pontos, grade de ícones iguais), o
espectador lê *uma* frase — "muita gente" — e o `qc-carga` conta N elementos. Em
`s24-multidao-brasileira` foram 78 cópias do mesmo pictograma (13×6) → 82 "elementos de informação"
contra teto 77, reprovando por 5 uma cena cujo resto do laudo dizia calma (3 blocos de texto, ritmo
0,35/s, vida 1,6s).

**A regra.** Marque o **grupo** da trama (`<g id="figs" data-qc-ornamento="...">`), nunca a cena
inteira, e **deixe de fora o que carrega significado próprio**: em s24 as três figuras bolivianas são
o contraste editorial da cena e continuam contando como informação. A marca vale só para GRÁFICO —
texto dentro de um ornamento segue contando, senão ela vira anistia geral. O `qc-carga` imprime
quantos dispensou (`⊘ trama: 78 gráficos`): régua que esconde o que dispensou é régua que mente.

**ARTE-172.** **A PARTITURA PODE CHEGAR NO EIXO ERRADO — CONFIRA COM UMA SUBTRAÇÃO ANTES DE COREOGRAFAR.**

> 🔀 **Era `ARTE-141` e virou `ARTE-172` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-141` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].
Medido no `cerebro-quando-sonha@arte` (07/ago/2026): **35 das 77 cenas** tinham os beats da
`regencia.json` em tempo **BRUTO**, e a [ARTE-97] manda coreografar em tempo **LIMPO**. A cena pior
anunciava `dur` 123,32 s e tinha **22,09 s** de tela — ela **começa dentro** de um corte de 101 s
(dois retakes encadeados). Coreografada no número bruto, o espectador veria os primeiros 22 s do
desenho e mais nada: 82% da cena renderizado para o lixo, incluindo a âncora documental que era o
único registro real daquele bloco.

**A raiz é uma costura entre dois agentes, e cada um estava certo sozinho.** O `editor-de-arte.md`
afirmava, como fato do contrato, que *"os beats da `regencia.json` já estão em tempo LIMPO"* — e
coreografava em cima disso sem conferir. O `regente-de-imagem.md`, que escreve o arquivo, **não tinha
uma única linha sobre relógio**: o gate dele mandava `beats[-1].t1 == dur`, e `dur` é o campo BRUTO do
espelho. Nenhum dos dois documentos mentia; **a afirmação de um era sobre o comportamento do outro, e
ninguém a testava.** O editor-chefe que despachou a estação de regência escreveu no diário que "o
remapeamento para o relógio limpo é determinístico e o editor-chefe faz depois" — e a estação seguinte
não sabia que havia um "depois" pendente.

**A LEI, e ela é uma conta de 30 segundos:** antes de coreografar qualquer cena, calcule
`cleanDur = dur − (cortes de _cortes.json dentro de [inSec, inSec+dur])` e compare com o **último
`t1`** dos beats. Bateu com `cleanDur` → siga. Bateu com o `dur` bruto **numa cena que tem corte
interno** → a partitura está no eixo errado; remapeie antes, e avise quem despachou (o conserto é do
`regente-de-imagem`). Quem escreve a partitura fecha o último `t1` em `cleanDur` e **reporta o par
`dur` × `cleanDur` por cena** — a cauda existe e quem consome precisa saber.

⚠️ **Início e fim têm políticas de borda OPOSTAS, e tratá-los igual quebra em silêncio.** Instante que
cai dentro de um corte não existe no limpo: para um **início**, a resposta é o primeiro instante VIVO
a partir dali; para um **fim**, o último instante VIVO até ali. Usar a mesma função nos dois devolve
`cleanDur` **negativo** em toda cena cujo fim seja exatamente a borda de um corte — foi o que deu
−424 s numa primeira tentativa, e o número absurdo é o que salvou: um erro de 2 s teria passado.
Use o `keepsDe` de `src/cortes.mjs`, que é a mesma decomposição que o master usa para concatenar —
dois mapeamentos independentes é como o vídeo acaba com dois relógios.

**A prova barata de que o remap está certo:** rode-o sobre uma cena cujo tempo limpo já foi declarado
por OUTRA estação e veja se os números batem. Aqui o remap devolveu 14,46 s para a `s30` e a estação
de pesquisa havia escrito 14,461 s no clipping por conta própria, semanas antes — duas contas
independentes, mesmo número. Sem essa prova, um remap plausível e errado é indistinguível do certo.

*Regra geral de processo: **quando um agente afirma como fato o comportamento de outro, essa frase é
uma dívida, não uma garantia** — e o juro dela é pago na montagem, onde ninguém mais olha.*

---

## ARTE-173 · O gate de carga te dá o PICO, não a lista — e uma falha esconde a próxima

> 🔀 **Era `ARTE-142` e virou `ARTE-173` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `ARTE-142` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**O caso (07/ago, `s51-comprado-por-contrato` do `o-acre`, a última cena de 71 antes do render).**
O portão barrava com uma linha: *"DENSIDADE: 12 blocos de texto simultâneos @5.8s (teto 9)"*. Parecia
um instante ruim. Não era nada disso, e cada camada só apareceu depois que a anterior caiu:

1. **O pico não é um instante — é um intervalo.** Listando os blocos de 0,5 em 0,5 s, o estouro ia de
   **5,4 s a 7,3 s**: quase dois segundos de ápice. Consertar "o 5,8" teria deixado a vizinhança inteira.
2. **Havia um SEGUNDO estouro que nenhum laudo citava** — 10 blocos em 8,3 s, no ato seguinte. O gate
   reporta o máximo, então o segundo pico fica invisível atrás do primeiro. Quem conserta só o que o
   laudo cita re-roda o gate e leva uma reprovação nova por um defeito que já estava lá.
3. **E atrás da densidade havia o RITMO.** O `qc-cena` mostra uma falha de carga por vez: com a
   densidade resolvida, apareceu `1,58 entradas/s` contra teto 0,9 — que o `qc-carga --json` já
   reportava desde o começo, no mesmo laudo que ninguém tinha aberto.

**A LEI, em duas partes.** (a) Antes de consertar carga, **liste os blocos instante a instante** —
quais elementos, com que opacidade efetiva, em cada amostra. São 20 linhas de Playwright replicando o
`eff()` e a regra do embrulho, custam um minuto, e substituem três iterações de conserto às cegas.
(b) Rode `qc-carga --json` e leia `picoTexto` **e** `entPorSeg`, sempre os dois — o laudo de uma linha
do `qc-cena` é um resumo, não o diagnóstico.

**Como saber se o gate é apertado ou se a cena é que está errada: meça as IRMÃS.** As cenas já
aprovadas do mesmo vídeo mediam 0,31 · 0,58 · 0,71 · 0,77 entradas/s. A `s51` media 1,58 — o dobro do
teto e o dobro da irmã mais agitada. Isso encerra a discussão: não havia nada de injusto na régua.

**A raiz não era de execução, era de ESCOPO.** A cena tinha **dois atos** — três cláusulas carimbadas
e, depois, um "recibo" de três linhas com ícone, leader pontilhado e dois textos cada. O espelho pedia
*"o tratado volta à tela e um carimbo bate: NEGOCIADO · PAGO · ADQUIRIDO; destilação final COMPRADO POR
CONTRATO — a tese do vídeo em um quadro"*. **Um quadro, um ato.** O segundo ato era inchaço além do
brief, e dois dos seus três itens re-diziam, com outra roupagem, as cláusulas carimbadas dois segundos
antes (o samba). Ele sozinho respondia por 6 das 19 estreias de texto. **Quando a carga estoura por
muito — não por pouco —, o defeito quase nunca é de coreografia: é um ato que não devia existir.
Releia o brief antes de mexer numa opacidade.**

⚠️ **E o meio-termo esperto costuma ser pior que o defeito.** A primeira tentativa foi manter as três
linhas do recibo tirando só as palavras — ícone, leader pontilhado, um "✓". A contagem passou e a cena
piorou: três linhas pontilhadas quase vazias com um ícone minúsculo na ponta leem como **formulário em
branco**, o oposto de "pago". Reduzir o que o gate CONTA sem reduzir o que a cena FAZ é como enganar a
régua e perder a tela. **Se o rótulo tem de sair, a linha sai junto** — e o tempo que sobra vira
movimento de câmera, que não custa uma única estreia de texto.

⚠️ **Cortar conteúdo muda a GEOMETRIA, e o resto do desenho não se ajusta sozinho.** Com o ato a menos,
o card caiu de ~1900 px para **1184 px** — e os keyframes de câmera seguiam mirando `cy 1288`, um ponto
que agora fica abaixo do documento, enquanto o carimbo do veredito passou a transbordar a base do papel
(girado −5,5°, ele mede `656·cos5,5 + 2500·sin5,5 ≈ 893 px`, e a rotação custa 240 px que o retângulo
parado não tem). **Meça a caixa depois do corte** — `offsetTop`/`offsetHeight` no Chrome, não estimativa —
e recoloque câmera e heróis a partir do número medido.

## [ARTE-176] Número-herói em `::first-line` é invisível para o gate — e ele reprova a cena certa

**Medido em 08/ago/2026, na `s10-composicao-h-he` do `dentro-do-sol`.** A cena escreve o par
número+rótulo num bloco só e separa os dois por `::first-line`:

```html
<div class="n"><span id="vH">~74%</span><br>HIDROGÊNIO</div>
```
```css
.n{font-size:104px}  .n::first-line{font-size:176px}   /* o número */
```

Na tela o número sai a 176 px — dá para ver no `shot.mjs`. Mas o `qc-tamanho` mede pelo **DOM**, e
`::first-line` **não é um nó**: `getComputedStyle` do bloco devolve os 104 px do rótulo, e o gate
laudou `texto-herói "~74%HIDROGÊNIO" → 109px < 260`. **A cena estava errada (176 < 260) e o laudo
estava errado junto** — ele acusou um número que não existe em lugar nenhum do arquivo, o que manda
quem for consertar procurar `109` e não achar nada ([ARTE-175] é a mesma família).

Pior: subir o `::first-line` para 260 px **não muda uma vírgula do laudo**. A cena fica certa na tela
e o gate segue reprovando — e a leitura natural disso é "gate quebrado, ignora", que é como se perde
a régua inteira.

**A regra: o número-herói é um NÓ, sempre.** Um `<div class="num">` para o número e um
`<div class="rot">` para o rótulo, cada um com seu `font-size` real. A aparência é idêntica (o
`line-height` de cada bloco substitui a herança proporcional do pseudo-elemento) e o gate passa a
medir o que o espectador vê — aqui, `herói 272px ≥ 260`.

*Vale para todo pseudo-elemento que carrega texto de tela: `::first-line`, `::first-letter`,
`::before`/`::after` com `content:`. Se o gate tem de medir, o texto mora num nó. Ferramenta que não
enxerga o que julga não é rigorosa: é ruído com aparência de rigor.*

## [ARTE-177] `line-height` menor que 1 fazia o gate de colisão acusar o VAZIO entre as linhas

**Medido em 09/ago/2026, na estação RENDER do `especies-humanas` — três cenas presas de uma vez.**
O `check-overlap` já descontava o acolchoamento do `line-height` FROUXO (`lh > fs`), com
`folga = Math.max(0, (lh - fs) / 2)`. Com `lh < fs` esse `max` devolve zero e a caixa sobrevive
inteira — e a caixa que o `Range.getClientRects()` entrega é o **font box** da fonte
(ascent+descent das métricas), não os glifos. Título grande com entrelinha apertada é o padrão
tipográfico desta casa, então duas linhas empilhadas se sobrepõem **por construção**, em exatamente
`fs - lh`:

| cena | texto | `fs` | `lh` | sobreposição | área acusada |
|---|---|---|---|---|---|
| `s40` | "NÃO ACABARAM." / "FORAM ABSORVIDOS." | 276 | 270,48 | **5,52px** | 12.642px² |
| `s41` | "39 MIL" / "ANOS" | 284 | 266,96 | **17,04px** | 13.794px² |
| `s38` | "A REDE" / "É O SEGURO" | 276 | 270,48 | 5,52px | 5.282px² |

As três conferidas à vista em 4K: folga ampla, nada se toca. E a `s38` **já estava renderizada** —
o portão mandaria refazer um clipe de 769 MB sem defeito nenhum.

A sobreposição vive onde **não há tinta**: entre o descender vazio da linha de cima (texto em
caixa-alta não desce abaixo da base) e o espaço acima das maiúsculas da de baixo. Por isso a régua
certa não é métrica de FONTE, é métrica de TEXTO — `actualBoundingBox*` mede o que aqueles glifos
ocupam, `fontBoundingBox*` mede o que a fonte reserva, e a diferença entre as duas era o que o gate
contava como colisão. O conserto mede o texto num canvas e recua cada borda pela sobra, só em
retângulo vindo do Range (na caixa cheia de quem pinta fundo, a caixa É tinta e nada se recua).

**Para quem desenha: `line-height` abaixo de 1 em título grande é escolha legítima — não afrouxe a
tipografia para calar um gate.** Se a colisão acusada mede menos que `fs - lh` e some ao olhar o
frame, é a régua que está errada, não a cena.

*Quarto irmão da mesma família (caixa cheia → tinta; grifo inline multi-linha; placa torta). Todos
diziam a mesma coisa: **medir o retângulo que o texto RESERVA, e não o que ele PINTA, inventa
colisão onde há folga** — e cada versão nova custou cenas boas presas no portão.*

## [ARTE-178] O teto de caracteres que você mediu numa vitrine vale para as IRMÃS

**Medido em 09/ago/2026, na `s09-denisovanoshobbitseluzon` do `especies-humanas`.** A cena tem
cinco vitrines com o mesmo molde de rótulo, e o autor **já havia medido o teto** de uma delas,
deixando registrado no próprio HTML: *"a string cheia mede ~1313px a 72px contra ~1145px de largura
útil da vitrine … Teto medido: 35 caracteres a 72px"*. Encurtou aquele rótulo — e deixou passar, no
mesmo arquivo, uma nota de **40 caracteres** com `letter-spacing:4px` (mais larga por caractere que
a que ele mediu). Resultado: ~1.783px num contêiner de 1.125px, vazando **658px** para fora da
moldura, lendo "POR DÉCADAS, NINGUÉM SABIA QUE EXI" — cortada no meio da palavra.

Medir um rótulo é medir o MOLDE. Quando o teto sai, ele vale para toda a família que usa o mesmo
`font-size` e a mesma largura útil, e a varredura é imediata: cada texto do molde, contado contra o
teto, no mesmo passe.

Os dois escapes óbvios estavam fechados de propósito e o comentário do arquivo dizia isso:
encurtar não servia (a nota é **word-lock** — repete o que a voz fala, literal) e baixar a fonte
também não (72px é o piso de rótulo no palco 4K). Sobrou o terceiro, que é o certo quando o texto e
o corpo são ambos intocáveis: **quebrar em duas linhas com `<br>` explícito** — que quebra mesmo sob
`white-space:nowrap` e, por ser explícito, não deixa o motor escolher o ponto. Com a quebra, declare
o `line-height` e suba o topo do bloco: a segunda linha nasce onde antes não havia nada.

**ARTE-174.** **O ARQUIVO DE FALA TAMBÉM TEM RELÓGIO — E O ERRADO NÃO DÁ ERRO, ENTREGA A FALA DE OUTRA CENA.**

Irmã da [ARTE-172]: lá era a partitura da `regencia.json` chegando no eixo errado; aqui é o insumo
mais básico de todos, o **word-lock**. `words.json`, `words-limpo.json` e `words-final.json` têm o
mesmo formato, o mesmo nome de campos e a mesma cara. Abrir o errado devolve texto plausível, com
timestamps plausíveis, e **exit 0**. A cena sai coreografada na fala de outro trecho do vídeo.

**Medido no `quao-fundo-terra` (09/ago/2026), antes de desenhar a primeira cena.** O espelho está em
tempo FINAL — 1263,0 s, o relógio do `_media/_master-decupado.mp4`. Na janela da última cena
(1258,03 → 1263,00 s) os três arquivos respondem:

| arquivo | fim | o que devolve na janela da s122 |
|---|---|---|
| `words.json` | 1753,6 s | "o que tem no manto e no núcleo? A resposta" |
| `words-limpo.json` | 1740,8 s | "o que tem no manto e no núcleo? A resposta" |
| **`words-final.json`** | **1261,4 s** | **"Muito obrigado pelo carinho da companhia e até o próximo vídeo."** |

A âncora do espelho para essa cena é a despedida. Só um dos três acerta, e os outros dois não
reclamam — devolvem a fala de ~8 minutos antes.

**A raiz é que a instrução vinha CRAVADA em dois lugares, e os dois envelheceram juntos.** A nota da
estação ARTE na fila mandava *"word-lock do words.json"*; o `scripts/estudio/arte-driver.sh` mandava,
dentro do prompt, *"words-limpo.json p/ word-lock"*. Nenhum dos dois olhava o projeto. Isso estava
certo no fluxo antigo, em que o espelho nascia antes do master e falava em BRUTO — e desde 06/ago o
espelho nasce **depois** do master, em tempo FINAL. *Nome de arquivo escrito à mão dentro de um
prompt é um fato copiado, e fato copiado apodrece* — o mesmo diagnóstico da [SIS-163], agora na
camada da arte.

**O conserto (feito em 09/ago).** Quem sabe responder qual é o relógio já existe e é **um só**:
`scripts/qc-espelho-cortes.mjs <proj> --json` devolve `relogio: "final"|"bruto"`, decidindo por
master + `words-final` no disco. O `arte-driver.sh` passou a **consultar o dono da regra** e a montar
o nome do arquivo a partir da resposta, em vez de adivinhar de novo — e a anunciar o relógio no
cabeçalho do log, para que a escolha fique auditável depois.

**A régua para quem desenha:** antes de confiar em qualquer arquivo de fala, faça a subtração de um
segundo — pegue uma cena **do FIM** do vídeo, leia a janela dela no arquivo, e compare com a `ancora`
do próprio espelho. Se não bater, o relógio está trocado. Cena do fim porque é onde a divergência
acumulada é maior: no começo do vídeo os dois relógios coincidem e o teste passa mentindo.

## [ARTE-179] Fonte e crédito não ESTREIAM — nascem no ar

**Medido em 09/ago/2026, estação ARTE do `dentro-do-sol`.** Duas cenas nasceram reprovando o portão,
as duas por RITMO, e nas duas o culpado era o rodapé de atribuição subindo de `opacity:0` junto com
o conteúdo. O `qc-carga` conta **estreias de bloco de texto**, e para ele todo bloco que aparece é
algo novo a ler:

| cena | dur | estreias | média | pior janela de 1 s | quantas eram rodapé |
|---|---|---|---|---|---|
| `s29-15-milhoes-3mil-vezes` | 8,70 s | 8 | **0,92/s** ✗ (teto 0,9) | 4 ✓ | 1 (`"Fontes: NASA · Bahcall et al. 2005"`) |
| `s32-10x-mais-denso-chumbo` | 5,71 s | 7 | **1,23/s** ✗ | **5** ✗ (teto 4) | 2 (`"Fontes: NASA · RSC"` + `"Foto: Alchemist-hp…"`) |

**O conserto é uma linha por rodapé, e não toca na composição:** nascer visível e ASSENTAR, em vez
de subir do zero — `opacity = base + (1-base)*p`, com `base` ≈0,30–0,34 (o gate lê presença acima de
`--op=0.25`) e o valor final preservado. Resultado medido no mesmo instante: `s29` 0,92 → **0,80/s**,
`s32` 1,23 → **0,88/s** e a janela de 1 s de 5 → **3**. Os 8 gates do `qc-cena --conc=1` passaram nas
duas, e nenhum pixel de layout mudou.

**Por que isso é a regra certa e não um truque para enganar o gate.** A contagem de entradas começa
no SEGUNDO quadro (`for (let i = 1; …)`): comparar cada amostra com a anterior é o que define
"entrada". Logo, o que já está no ar no quadro 0 não é informação chegando — **é cenário**. E fonte e
crédito são exatamente isso: existem por obrigação de atribuição, não porque a narração chegou neles.
Fazê-los subir do zero é apontar o dedo do espectador para a letra miúda no exato segundo em que o
conteúdo da cena está se estabelecendo. *O que ESTREIA é o que a narração está dizendo agora.*

⚠️ **Não é anistia ao crédito.** Ele continua obrigatório, continua marcado com
`data-qc-papel="credito"`, continua com piso de 72px no palco 4K e continua contando na DENSIDADE de
blocos simultâneos ([ARTE-95]). Muda só o INSTANTE em que ele entra.

**Agente-raiz corrigido:** `editor-de-arte` (seção de crédito + régua 2 do auto-QA).


## [ARTE-180] O crédito que a [ARTE-179] fez nascer no ar pode nascer ILEGÍVEL — meça, não escolha

**Medido em 09/ago/2026, estação ARTE do `dentro-do-sol`, horas depois da [ARTE-179].** A lei anterior
mandou o rodapé de atribuição **nascer visível e assentar**, com a fórmula `opacity = base + (1-base)*p`
— base ≈0,30 **e o valor final preservado**. Nas duas cenas em que foi aplicada, a metade da frente
entrou e a de trás não: a `s29` saiu como `0.30 + 0.20*p`, ou seja **teto 0,50**. O ritmo passou a
medir 0,80/s e os 8 gates ficaram verdes — e o crédito ficou a **2,64:1** de contraste, abaixo do piso
de 3:1. A `s97`, que nem passou pela [ARTE-179], estava pior: `color:#5E7890` (chumbo sobre fundo
escuro) com teto 0,55 → **2,34:1**.

| cena | como estava | contraste | depois | contraste |
|---|---|---|---|---|
| `s29-15-milhoes-3mil-vezes` | `0.30+0.20*p` (teto 0,50) | **2,64:1** ✗ | `0.55+0.35*p` (teto 0,90) | **5,60:1** ✓ |
| `s97-150-milhoes-km-8-min` | `0.55*p` + `#5E7890` | **2,34:1** ✗ | `0.90*p` + `#9FB8D0` | **8,53:1** ✓ |

**Por que nenhum gate via.** `check-overlap` mede COLISÃO de caixas, `qc-carga` mede QUANTIDADE e
RITMO de texto, `qc-tamanho` mede o herói. O contraste declarado no CSS está sempre certo — o que
muda é o **pixel que a arte pôs por baixo**, e a opacidade com que o texto foi desenhado por cima.
Os 8 gates duros passaram nas duas cenas, e o `_portao.json` as carimbou `ok:true`.

**A regra:** o teto de opacidade do crédito **não é escolha de estética, é resultado de medição**. Não
existe número seguro — no mesmo vídeo, teto 0,60 passa com folga (`s23`, 5,31:1, fundo quase preto) e
teto 0,50 reprova (`s29`). Quem decide é o fundo REAL daquela cena, naquele instante.

```
node scripts/qc-rodape-contraste.mjs <html>      # ou <proj> para varrer o vídeo
```

**Dois defeitos com o mesmo sintoma, e o conserto de um NÃO conserta o outro** — por isso o gate
emite o conselho a partir do que mediu, em vez de repetir uma receita fixa:
- **fundo claro passou por baixo** (`L` do fundo > 0,18) → scrim no `::before` do crédito: inset
  negativo, `z-index:-1`, radial-gradient escuro. No `::before` para não deslocar o texto e para
  herdar de graça a opacidade animada do pai. Sombra não resolve: marca a borda e deixa o miolo
  igual (medido na `s24`: halo curto levou 2,85 → 2,9; o scrim levou a 10,01:1).
- **fundo já escuro** → quem está apagado é o TEXTO. Scrim aqui não muda nada: suba o patamar de
  opacidade preservando o fade-in, e/ou clareie a cor para a da paleta.

**A armadilha do próprio gate, que custou duas versões dele.** A primeira achava o crédito por
`#fonte` e mediu 10 de 59 cenas — cada cena batiza o seu (`#fonte`, `#fontes`, `#fonteLinha`,
`#fonteL`), e o showpiece `s30`, onde o defeito foi VISTO a olho, não usava nenhum deles. A segunda
descartava opacidade < 0,6 para não medir o meio de um fade — e com isso **apagou do laudo a única
cena reprovada do vídeo**, imprimindo "✓ todos os créditos leem". Achar o crédito pelo que ele É
(texto de atribuição no rodapé, varrido no DOM) e separar fade de translucidez pela VARIAÇÃO da
opacidade entre instantes, nunca pelo valor dela. *Gate que filtra pelo sintoma do defeito devolve
verde sobre o defeito.*

**Discrição se faz com TAMANHO e posição, não apagando o texto.** Crédito existe por obrigação de
atribuição: se não dá para ler, a atribuição não foi feita.

**Agente-raiz corrigido:** `editor-de-arte` (seção 12 · crédito e fonte, e régua nova no auto-QA da
seção 7) + o briefing do `scripts/desenhar-cenas.mjs`, que é o que o Fable lê nesta linha de produção.

## [ARTE-181] Sombra em cena de footage: o proibido é o que escurece os PIXELS da mídia, não o card lift

**Medido em 09/ago/2026, estação ARTE do `dentro-do-sol` (64 cenas no disco).** O aviso de footage puro
do `qc-contrato` era `temFootage && has(/box-shadow|drop-shadow/)`: **qualquer** sombra, em **qualquer**
elemento, numa cena que tivesse um `<video>` em algum lugar. Acusou **10 de 10** e nenhuma tinha o
defeito. Onde as sombras estavam de verdade:

| cena | seletor com sombra | o que é |
|---|---|---|
| `s60`, `s93`, `s23` | `#pill276`, `#divisa`, `#div1` | pílula de número e divisor de split — desenho |
| `s05`, `s08` | `#risco` | grifo/sublinhado — desenho |
| `s107` | `#ringGlow` | glow de anel desenhado |
| `s101`, `s18`, `s24` | `#insetFrame`, `#insetWrap` | **moldura** do inset, sombra EXTERNA |
| `s01` | `el.style.filter` no JS | glow âmbar de partícula |
| `s08` | `#inset` | **o único real:** `inset 0 0 80px rgba(0,0,0,.35)` sobre o Sol do SDO |

**A régua desmente o gate, e ela está nos dourados.** `M07/esquentou-brilhou.html` e
`M07/caixa-orbita-reveal.html` — os exemplares do inset de prova real — dão à moldura
`border: 3px solid` + `box-shadow: 0 18px 60px rgba(0,0,0,.55)`. O card lift **é padrão da casa**.
Acusá-lo é acusar quem seguiu a régua, e isso ensina a ignorar o gate (a mesma lição da
[ARTE-180] e do grep bruto do `CLAUDE.md`, que reprovou 29 de 41 cenas sem um defeito).

**A distinção que a lei realmente faz:** sombra **externa** empurra a moldura para a frente do fundo;
sombra **`inset`** pinta por DENTRO, sobre a imagem — é `#vig` com outro nome, e cai na [ARTE-72].
Então o gate só acusa três coisas: sombra no próprio `<video>`/`.footage`, `box-shadow: inset` na
moldura que embrulha o vídeo, e sombra inline no `<video>`. Vale para `drop-shadow` no `filter`
também. Nove avisos morreram; o real sobreviveu, e um teste sintético (sombra posta de propósito no
`<video>`) confirma que ele ainda acusa — **gate que nunca dispara é tão inútil quanto o que sempre
dispara**, e só a segunda metade do teste prova isso.

**O conserto da cena foi de uma linha, e a honestidade da medição importa:** na `s08` o escurecimento
interno era quase imperceptível (o disco do SDO preenche o círculo e o limbo já é escuro). Tirei
mesmo assim, porque só pode revelar MAIS do footage e custa uma linha — mas o achado que vale é o
gate, não a cena. Registrar o contrário seria inflar um conserto cosmético em descoberta.

**Agente-raiz corrigido:** `editor-de-arte` (bullet do footage puro, nas 3 cópias — repo, `~/.claude`
e worktree) + o briefing do `scripts/desenhar-cenas.mjs` nos **dois** blocos "REGRAS QUE REPROVAM NO
PORTÃO" (com e sem dossiê), que é o texto que o Fable de fato lê nesta linha — ele não abre
`.claude/agents/*.md`.

---

### ARTE-182 · Caixa que cabe no palco não garante TEXTO que cabe — `nowrap` transborda em silêncio

**09/ago/2026, `mamute-de-volta`, cena `s83-sergey-zimov`.** O gate de fora-do-quadro reprovou 14
amostras da mesma linha, com o corte crescendo no tempo: *"DO NORDESTE, CHERSKY"* saindo **6px** aos
6,0s e **16px** aos 8,2s.

A causa não estava na animação, e sim na aritmética do bloco:

```css
.cg { left:2356px; width:1420px; font-size:106px; letter-spacing:.035em; white-space:nowrap; }
```

**2356 + 1420 = 3776**, com 64px de folga num palco de 3840 — a CAIXA cabe, e por isso o desenho
parece seguro. Mas `white-space:nowrap` manda o texto **ignorar a largura da caixa**: ele
transborda, e o que sai do palco é o texto, não o contêiner. O que a régua mede é o glifo.

**A conta que faltava, e ela é do texto:** 20 caracteres × `letter-spacing .035em` × 106px = **74px
só de espaçamento entre letras**. Reduzir para `.02em` devolve ~32px — o dobro dos 16px que
faltavam. Medido depois: **49/49 amostras limpas**, e colisão, tamanho e contrato seguem passando.

**A régua para quem desenha:** com `nowrap`, a `width` é decoração — quem decide se cabe é
`left + largura RENDERIZADA do texto`, e essa largura cresce com o número de caracteres, o corpo E o
espaçamento. *Antes de confiar numa caixa que cabe, pergunte se o conteúdo dela cabe na caixa.*

⚠️ **Por que o corte CRESCIA no tempo, e por que isso engana:** a cena escalona as três linhas do
crédito com uma animação de entrada. Um relatório que mostra 6px → 16px sugere *"a animação está
empurrando"* e leva a mexer no movimento; o defeito era estático desde sempre, e a animação só
revelava o transbordo aos poucos. **Sintoma que cresce no tempo não implica causa no tempo.**

⚠️ **Conserto determinístico, não criativo.** Ajustar espaçamento para caber é aritmética de layout
— não se gasta o modelo de arte com isso ([[SIS-04]] e a regra da casa: *não ponha modelo para
fazer trabalho de script*). O que exigiria julgamento seria reescrever o rótulo; encolher 1,5% do
espaçamento não muda desenho nenhum.


---

### ARTE-183 · Gate que acusa por PRESENÇA do caractere reprova a língua inteira — e prescreve um conserto que não conserta

**09/ago/2026, `energia-escura`.** Nove das 41 cenas de um vídeo pronto estavam barradas com o
veredito `til-Bold`. Fui consertar e nada funcionou. A investigação, em três passos, derrubou o
laudo inteiro:

1. **O conserto prescrito não muda nada.** O laudo mandava trocar a família para `"Helvetica Neue"`.
   Renderizei o mesmo card em Neue Haas, Helvetica Neue e Arial: **o Ç sai igual nas três**.
2. **O glifo está CERTO.** Pintando o Ç isolado em canvas e contando linhas de pixel sem tinta entre
   o corpo do C e a cedilha, o vão é **0** em cinco famílias (as três acima, Verdana e Georgia).
3. **O zoom confirma.** Ampliado, o Ç da cena mostra a cedilha **ligada ao C por um traço fino**. O
   que parecia descolamento é a forma dela em corpo grande.

**A causa estava numa linha:**

```js
if (/Ç/.test(visto)) out.push({ tipo: "CEDILHA", … });   // acusa a PRESENÇA, não mede nada
```

O irmão dela, o do til, tem condição (`w >= 600 && w < 750`). A cedilha não tinha nenhuma — e em
PT-BR o Ç em caixa alta é metade dos títulos: FORÇA, ALIANÇA, EQUAÇÃO.

**As duas metades do estrago, e a segunda é a pior:**

- **Reprovar o certo.** Nove cenas travadas, e a cada vídeo novo mais algumas.
- **Prescrever o impossível.** O laudo vinha com *"SÓ a troca de FAMÍLIA resolve"* em caixa alta,
  afirmação que a medição derruba. **Prescrição errada é pior que laudo sem prescrição: ela é
  obedecida.** Quem seguisse trocaria a fonte da marca em nove cenas, re-renderizaria nove clipes
  4K, e o "defeito" continuaria lá — para então concluir que o problema era outro, mais fundo.

**A régua:** *quando o defeito é de FORMA, o gate mede a forma.* Presença de caractere, nome de
classe, extensão de arquivo — são proxies, e proxy vira alarme falso no dia em que o mundo tem um
caso legítimo que casa com ele. Aqui a medição custa um canvas de 400×320 px, cacheado por
família+peso: mais barato que a primeira reprova falsa.

⚠️ **E o gate tem de continuar pegando o defeito de verdade.** Depois do conserto, testei com um
caso fabricado — `Ã` em peso 700 (a faixa quebrada), `Ã` em 900 (o escape) e `Ç` em 800: acusou
**só o 700**. *"0 defeitos" só vale como notícia boa quando se prova, no mesmo dia, que o gate
ainda sabe dizer 1.*

Ver [[SIS-244]] (não medir e aprovar são estados diferentes) — aqui a variante é presumir e reprovar.
### ARTE-184 · O véu de legibilidade tem de ZERAR dentro da própria caixa (09/ago/2026, `quao-fundo-terra` s70)

O padrão do véu por trás de texto sobre fundo vivo é um `radial-gradient` escuro no bloco. No
showpiece `s70-oceano-de-metal-liquido` ele estava escrito assim:

```css
background:radial-gradient(ellipse 100% 100% at 42% 50%,rgba(8,4,2,.46) 0%,rgba(8,4,2,0) 76%);
```

O alpha só chega a zero em **76% do raio** — mas com o centro a 42%, a borda direita da caixa está a
58% e as de cima/baixo a 50%. Ou seja, **o gradiente ainda tinha ~0,2 de alpha quando a caixa
acabava**, e o corte reto da borda desenhou um RETÂNGULO de 1982×632 por cima do disco do núcleo.
Dois blocos da mesma cena tinham o defeito (`#rGer` e `#rDado`).

**A regra:** `ellipse closest-side … 0% → 100%`. `closest-side` faz o raio parar no lado mais próximo
em cada eixo, então o fade sempre termina dentro da caixa, qualquer que seja o texto. Nunca declare o
raio em `100% 100%` com o stop final abaixo de 100% — é a combinação que garante o corte.

**Vale para QUALQUER véu, não só o de texto — e a prova veio no mesmo dia, de outro agente.** Enquanto
esta lei era escrita a partir da `s70`, o executor-de-molde achou o mesmo defeito sozinho na `s96`
deste projeto: o **scrim** era uma caixa de 2100×780 e o gradiente ainda valia **~0,34** quando a
caixa acabava — uma aresta reta atravessando o footage da mina. Ele consertou ancorando o radial no
canto, morrendo em zero muito antes de qualquer borda. Duas cenas, dois agentes, a mesma causa, no
mesmo dia: **isto não é acidente de uma cena, é o jeito errado de escrever véu**. Scrim, vinheta
local, realce por trás de selo — todo gradiente com borda de caixa tem de zerar antes dela.

**Por que isso escapa de todo mundo, e é o que interessa:**

1. **Num fundo navy chapado o defeito NÃO APARECE.** Ele só se revela sobre superfície clara e
   saturada — aqui, o laranja do manto. A mesma linha de CSS é invisível em 90% das cenas do canal e
   feia justamente no clímax, que é onde o fundo é vivo.
2. **Nenhum gate acusa.** Não há colisão de caixas, não há texto fora do quadro, não há carga
   excessiva, o contrato está OK, e a cena passou nos quatro gates com o retângulo na tela. O
   `qc-contrato` e o `check-overlap` medem geometria de elementos, não o que o COMPOSITOR pinta.
   *Só o frame olhado a olho pega isto* — é exatamente para isso que a régua manda conferir 2 frames
   por cena, e a auditoria por amostragem do editor-chefe existe.
3. **A hipótese óbvia estava errada, e custou duas medições.** O primeiro palpite foi `mask-repeat`
   ladrilhando o `<video>` que transborda o wrapper — plausível, do tamanho certo, e falso: esconder
   o `#oceanoWrap` inteiro deixou o retângulo intacto. Quem resolveu foi listar todo elemento com
   fundo/blend/filtro e comparar o `getBoundingClientRect` com as bordas medidas no pixel: `#rGer` em
   `[340,470,1982,632]` contra a borda medida em x≈2325/y≈1100. **Meça o retângulo e procure quem tem
   essa caixa** — não adivinhe pela aparência do efeito.

---

### ARTE-185 · A lei do relógio nasceu na decupagem e nunca desceu para a ARTE (09/ago/2026, `fatos-a380`)

A [FIN-139] resolveu o problema dos três relógios em 06/ago: o espelho passou a nascer sobre o
`words-final.json`, e as leis de finalização/decupagem foram todas atualizadas. **A doutrina parou
ali.** Três dias depois, na estação DIREÇÃO DE ARTE do `fatos-a380`, os dois documentos que dirigem
o Fable ainda mandavam ler o arquivo errado:

| documento | linha |
|---|---|
| `.claude/agents/diretor-de-arte.md` §2 | `out/<proj>/words.json` \| a **VOZ** (word-lock) \| **sim** |
| `scripts/estudio/estacoes/direcao-arte.md` passo 2 | "words.json (ou words-limpo)" |

Medido neste vídeo: espelho até **874 s**, `words.json` até **1109 s**, `words-limpo.json` até
**1104 s**. Os três abrem sem erro e os três devolvem palavras para qualquer janela. Na despedida
(`inSec` 868,6) o bruto entrega *"no fim, a conta quase dobrou"* — a âncora do espelho é *"Obrigado
pelo carinho da companhia"*. **235 s de deriva, e nenhuma exceção em lugar nenhum.** O word-lock do
vídeo inteiro sairia deslocado, e o defeito só apareceria no 4K, cena a cena, depois de gasta a cota
mais escassa da casa.

**O conserto** (feito): a §2a do ofício e o passo 2 da estação agora mandam PERGUNTAR ao árbitro —
`node scripts/qc-espelho-cortes.mjs <proj>` imprime `relógio do espelho: FINAL|BRUTO` — e escolher o
arquivo por essa resposta.

**O teste tem de ser na ÚLTIMA cena.** Na primeira os dois relógios coincidem (o desvio é a soma dos
cortes ANTERIORES), então validar no começo do vídeo prova exatamente nada. Pegue a última cena do
espelho e confira se as palavras da janela são as da `ancora` dela.

**A lição que não é sobre relógio:** *lei nova conserta os documentos que a sessão TINHA ABERTO.* A
[FIN-139] varreu a gaveta FIN e a decupagem porque foi ali que doeu; ninguém foi ver quem mais lia
`words.json`, e três estações adiante a instrução podre continuava de pé. Ao destilar uma lei sobre
QUAL ARQUIVO se lê, o passo final não é escrever a lei — é `grep -rl` pelo nome do arquivo velho em
`.claude/agents/` e `scripts/estudio/estacoes/`, e consertar todo mundo que o cita. Os prompts de
estação e os ofícios são o lugar onde o conhecimento vira ação; lei que não chega neles é lei que
não roda.

### ARTE-186 · O rótulo de duas linhas conta DOIS no qc-carga — e é assim que a cena "com folga" estoura o teto (09/ago/2026, `quao-fundo-terra` s115)

A `s115` declarava no próprio cabeçalho, por escrito: *"Pico de blocos = 8 (teto 9): kicker, KOLA,
TARIM, PASSOU, chip, herói, SONDA, crédito."* O `qc-carga` mediu **10 @11s** e barrou a cena.

Ninguém mentiu. O autor contou **blocos conceituais** — o que o espectador lê como uma coisa — e o
gate conta **elementos de texto**. `PASSOU DOS / 10.000 m` é um rótulo para quem assiste e dois
`<span>` para o medidor; `SONDA PARA 15 km / PROJETO ANUNCIADO EM 2025` é o mesmo caso. Dois rótulos
de duas linhas foram exatamente os 2 blocos que estouraram o teto de 9.

**A regra prática:** ao projetar a densidade de uma cena, conte **linhas de texto com corpo próprio**,
não rótulos. Título + subordinada = 2. Valor + unidade em `<b>` separado = 2. Só não conta a folha de
1–2 caracteres cercada de irmãs curtas (a peneira de letra-a-letra) e o que estiver sob
`data-qc-ornamento`.

**E o conserto certo não é fundir os `<span>` para enganar o contador.** Na `s115` a saída foi
dramatúrgica: o rótulo do Tarim (`PASSOU DOS / 10.000 m`) **recua para 20% meio segundo antes** de o
herói `12.262 m` entrar. Ele já tinha cumprido o papel — marcar que o Tarim passou dos 10.000 — e no
instante do clímax a atenção é do RECORDE, não da comparação. A densidade caiu para 9 e a cena ficou
**melhor**: a hierarquia do pico virou explícita.

*Quando o gate de densidade acusa, procure primeiro o que já cumpriu a função e ainda está no ar em
brilho cheio.* Quase sempre existe — e apagá-lo é design, não concessão.

### ARTE-187 · O gate cobrava o CONTRÁRIO da lei vigente — e queimou uma passada de QC por rodada (09/ago/2026, `especies-humanas` s08)

A `s08` tirou o crédito da foto Wikimedia da tela pela [ARTE-104], **declarou a decisão em comentário
no HTML** e escreveu o destino em `_atribuicoes-descricao.md`, com autor, licença e URL. O
`qc-atribuicao.mjs` a reprovou assim mesmo: ele nasceu sob a [ARTE-82] ("creditar NA TELA") e
continuava implementando essa régua depois de a [ARTE-104] tê-la superado com palavra do Mateus —
*"remova todos os créditos de todos os mapas"*, *"a gente JÁ PAGA"*.

**O custo não foi o falso positivo; foi a REINCIDÊNCIA.** O laudo de 08/ago já tinha diagnosticado a
colisão por escrito, com o número da linha (`qc-atribuicao.mjs:3` e `finalizar.mjs:225-245` mais
novos que a lei e implementando o oposto) — e consertou a CENA, não a FERRAMENTA. Vinte e quatro
horas depois a passada seguinte do QC reencontrou o mesmo alarme do zero e gastou de novo o tempo de
provar que era falso. *Diagnóstico que não vira patch é diagnóstico que se paga toda rodada.*

**A régua ao consertar um gate que acusa cena correta:** o alvo é a FERRAMENTA, e o teste de que o
conserto não é só um desligamento é a **prova nas três direções** — passa quando a obrigação está
cumprida, reprova quando o destino não existe, reprova quando o destino existe mas **não cita a
mídia**. Sem a terceira, "crédito na descrição" vira carimbo: bastaria o arquivo existir vazio.

**E o que sobrevive à mudança de lei é a cláusula dura, não o lugar do crédito.** A [ARTE-104] move o
crédito de pixel para descrição, mas mantém *"nunca usar sem crédito — se não houver onde creditar,
troque a imagem"*. Um gate de OBRIGAÇÃO LEGAL se reescreve pelas rotas válidas (agora duas), jamais
afrouxando o veredito final: sem nenhuma das rotas, continua REPROVADO.

**Detalhe que decide o caso na prática:** casar mídia com a lista da descrição exige comparação por
TOKENS, não por string. O disco guarda `Neanderthal_man_reconstruction_Natural_History_Museum_London.jpg`
e a URL do Commons traz `File:Neanderthal_man_reconstruction,_Natural_History_Museum,_London.jpg` — a
pontuação some no download. Comparar o literal devolveria "não coberta" para mídia licenciada, e esse
é o falso negativo caro: manda RECAÇAR o que já está resolvido, queimando cota diária de stock.

*Ao ver um gate reprovar algo que a cena DECLAROU estar fazendo por lei mais nova, a suspeita padrão
é do gate — e o conserto é dele, não de mais uma cena.*

### ARTE-189 · Três ajustes que não resolvem querem dizer que o PLANO está errado — e a resposta pode ser um arquivo já pago que ninguém abriu (09/ago/2026, `quao-fundo-terra` s70)

O showpiece do clímax tinha um defeito herdado e diagnosticado: o footage de metal fundido tecido no
anel do núcleo **entregava o lugar** — vigas de teto, luminárias, uma escada e equipamentos amarelos
legíveis através da máscara. O núcleo da Terra lia como chão de fábrica visto por um vidro laranja, e
*a metáfora não sobrevive a um lugar identificável: ninguém imagina o núcleo com pé-direito.*

O diagnóstico anterior dizia **"ampliar a escala até perder o contexto do galpão"**, e deixava o
*quanto* como escolha de arte. Segui esse caminho até ele provar que estava errado, em três medidas:

1. **3600×2025, deslocado −57%** — o galpão sumiu e o anel virou **mancha branca chapada**: sob
   `mix-blend-mode:screen` a poça incandescente achata e não sobra textura nenhuma.
2. **2760×1553, deslocado para o lado** — as vigas voltaram na metade esquerda **e** a poça estourou
   na direita. Pior que as duas anteriores.
3. **Exposição corrigida** (`brightness .54 contrast 1.34`) no enquadramento limpo — tirou o estouro
   e **ainda assim** não havia textura de metal.

A terceira medida é que entrega a conclusão: **não era o ajuste, era o plano.** Aquele arquivo tem
arquitetura legível em quase todo o quadro, e a única região limpa é a que estoura. Nenhum
enquadramento dele serviria.

**E então: a pasta tinha CINCO footages pagos, não os três que o cabeçalho da cena declarava.** O
`s70-metal-fundido-escorrendo-panela` (4K, 10,6 s, Storyblocks, já no `_PROCEDENCIA.json`) estava lá
**sem uso** — fundo **preto** com o fio incandescente escorrendo, que é exatamente o que o `screen`
pede, porque o preto desaparece e sobra só o metal. Troca feita, gates verdes, clímax resolvido.

**A regra:** quando dois ou três ajustes de enquadramento/exposição não resolvem, **pare de ajustar e
vá ver o que mais existe na pasta.** A pesquisa costuma baixar mais do que a cena usou, e o cabeçalho
lista o que o autor escolheu — não o que foi pago. `ls` na `_media/<cena>/` custa nada e às vezes a
resposta é um arquivo que ninguém abriu.

**E a regra sobre herança de diagnóstico:** um diagnóstico herdado ("amplie a escala") é uma hipótese,
não uma ordem. Ele já vem com o *caminho* embutido, e é justamente isso que faz a sessão seguinte
gastar três iterações dentro dele. Meça a hipótese antes de otimizá-la.

### ARTE-188 · A sangria do mapa estoura o teto de canvas do Chrome, e o 4K perde nitidez SEM NINGUÉM VER (09/ago/2026, `fatos-a380` s37)

O `#map` das cenas de mapa nasce **maior que o palco** — uma sangria por fora dos 3840×2160 — para
que o giro de `bearing` não exponha borda vazia no canto. Quanto maior o giro, maior a tentação de
aumentar a sangria. E existe um teto que ninguém tinha escrito: **o Chrome não entrega canvas acima
de 4096 px.** Passou disso, ele devolve 4096, o navegador **estica** de volta ao tamanho pedido, e a
cena inteira é desenhada abaixo da resolução nativa.

Medido nas três cenas de mapa do mesmo vídeo, no mesmo dia:

| cena | `#map` pedido | canvas que o Chrome deu | escala |
|---|---|---|---|
| `s37` (sangria 240) | 4320×2640 | **4096×2503** | **0,9481** ⚠️ |
| `s51` (sangria 120) | 4080×2400 | 4080×2400 | 1,0000 ✓ |
| `s92` (sem sangria) | 3840×2160 | 3840×2160 | 1,0000 ✓ |

**A régua: `3840 + 2×sangria` tem de ficar ABAIXO de 4096 — sangria máxima de 120 px por lado.** 128
bate exatamente no limite; não se encosta nele. Se o giro precisar de mais folga que 120, o conserto
é conter o giro ou fechar o zoom — nunca estourar o canvas.

**Por que isto escapa de todos os gates, e é o que a lei tem de ensinar:** `qc-cena` (8 gates),
`qc-carga`, `check-overlap` e `qc-mapa-movimento` passaram **todos** na `s37` defeituosa, e passaram
com razão — o layout está correto, o texto não colide, a câmera se move, os tiles carregam. O defeito
não está em nada que eles medem: está na **resolução em que tudo isso foi desenhado**. A cena boa e a
cena degradada são pixel a pixel a mesma composição, uma nítida e a outra não, e o frame de validação
sai igualmente "bonito" nas duas — a diferença só apareceria no 4K final, projetada, depois de paga.

Quem achou foi o mapista da `s51`, medindo o **próprio** canvas em vez de confiar no CSS que tinha
escrito. É a lição transferível: **num pipeline que declara tamanho, o tamanho declarado é um pedido,
não um fato.** Sempre que houver um teto de plataforma no meio (canvas, textura, buffer), meça o que
voltou. `node scripts/qc-mapa-canvas.mjs <cena.html>` imprime pedido × real × escala.

E o corolário de processo, porque foi ele que limitou o dano aqui: **achado de meio de trabalho vale
para quem ainda está trabalhando.** Havia três mapistas desenhando no mesmo instante; avisá-los com o
número medido custou uma mensagem cada e impediu três repetições do mesmo defeito. Achado que só vira
lei no fim do dia chega depois das cenas que ele salvaria.

### ARTE-190 · O gate de cor examinava só a PRIMEIRA parada do gradiente — e o lixo não-ASCII fechava o token e o inocentava
**SUPERA NO OBJETO a [ARTE-77], a [ARTE-134] e a [ARTE-153]** (o regex de `scripts/qc-hex.mjs`); o
princípio das três — *gate que reprova o caso normal está quebrado; meça contra material BOM antes
de instalar* — continua valendo e foi aplicado aqui antes de trocar uma linha.

**O defeito, medido em 09/ago/2026.** Uma cena de split saiu com
`background:linear-gradient(178deg,#061634 0%,#071B3E 40%,#050F２8 72%,#03091A 100%)`. O `２` é o
dígito **de largura total** (U+FF12), não o `2` ASCII. O navegador descarta a declaração inteira e a
cena renderiza com o fundo default. **O `qc-hex.mjs` — o gate declarado vigente — deu `✓ hex OK`.**
O autor releu o arquivo duas vezes e não viu: na tela, `２` e `2` são o mesmo desenho.

**Por que passou, e são DOIS furos independentes:**
1. **Só o primeiro `#` de cada declaração era lido.** O regex era
   `(?:PROPS)\s*[:=]\s*["']?[^;"'{}]*?(#[A-Za-z0-9_-]+)` — o `*?` preguiçoso casa UMA vez por
   propriedade e para no primeiro hex. Num gradiente de quatro paradas, **três nunca foram
   examinadas por este gate em cena nenhuma, desde que ele existe**. E gradiente é a construção mais
   comum da casa (a linha de marca frio→quente é um).
2. **O caractere estranho fechava o token.** `[A-Za-z0-9_-]` não inclui não-ASCII, então `#050F２8`
   virava o token `#050F`: quatro dígitos, comprimento legal, PASS. *O lixo que o gate procura era
   exatamente o que o inocentava.* Vale para homóglifo cirílico (`С`), largura total e traço
   tipográfico — os três tipos que **revisão humana não enxerga**, que é quando um gate vale mais.

**O conserto (na fonte, e com dono único):** o `qc-hex.mjs` passou a ler o VALOR inteiro da
declaração e a varrer TODOS os `#token` dentro dele, com o token terminando só em delimitador de
CSS de verdade. Medido nos dois sentidos antes de instalar: pega o defeito real (mais o
`#1B3answer2` do `ceuta` e o `#071late827` da `s46`) e acusa **0 de 71** cenas reais do disco.

**E o hook `cena-escrita.mjs` deixou de ter regex de cor próprio.** Ele mantinha uma **cópia
paralela** da mesma regra, e as cópias divergiram exatamente onde ninguém olhava: a do hook não
cobria hex depois de vírgula (todo gradiente), a do `qc-hex` não cobria não-ASCII — **o mesmo
defeito passou pelas duas, cada uma pelo furo que a outra não tinha**. Hoje o hook chama o
`qc-hex.mjs` (43 ms, cabe na régua dele). Um assunto, um dono.

**A generalização, que é maior que cor:** *toda checagem que fatia um token em "parte boa + resto"
precisa ser interrogada sobre o que acontece quando o lixo cai FORA da classe de caracteres que ela
sabe ler.* O padrão de falha é sempre o mesmo — o inesperado não entra no token, o token encolhe até
parecer legítimo, e o gate assina embaixo. E **verificação que examina o primeiro item de uma lista
não verificou a lista**: vale para parada de gradiente, para `argv` com glob ([SIS-165]) e para
qualquer laudo que diz "✓" tendo medido um de N.

**Como verificar:** `node scripts/qc-hex.mjs <cena.html | pasta>` (o rodapé imprime a POPULAÇÃO —
veredito verde só vale com a contagem atrás dele). O hook já o roda a cada escrita de cena.

---

### ARTE-191 · Na citação, o piso de herói decide a GEOMETRIA — não o contrário (10/ago/2026, `galaxia-arco-flecha` s19)

**Medido na estação RENDER.** A `s19` (M06, citação de pessoa real) chegou ao portão reprovando
`[tamanho] [heroi] "A estrutura desta fonte…" 168<260` e **barrou o render do lote**. A composição
era de duas colunas: retrato impresso de **836×1052 px** ocupando o terço esquerdo e a fala espremida
numa coluna de **2440 px**. Nessa largura, os 260 px do piso quebram a frase (113 caracteres) em
**7 linhas ≈ 2112 px de altura**, contra **1560 px** de vertical disponível. Não existia valor de
`font-size` que passasse: o layout tinha decidido, antes, que a fala não podia ser grande.

**A régua: numa cena com texto-herói, dimensione o BLOCO DO HERÓI primeiro e distribua o resto no que
sobrar.** O piso não é um acabamento que se ajusta no fim — é a primeira restrição geométrica da
cena. Conta de guardanapo antes de desenhar: a `260 px` na Neue Haas Display, um caractere ocupa
`≈0,6 em ≈ 156 px`; `caracteres × 156 / largura_do_bloco` dá as linhas, e `linhas × 260 × line-height`
tem de caber na vertical **junto com** tudo o que a cena ainda precisa mostrar.

**E a régua do modelo já resolvia isto.** `seed/examples/dourados/M06/citacao-descartes-holanda.html`
põe a citação em `width:2900px` a `264px` no topo e derruba o retrato para **372×505** num bloco de
atribuição no rodapé, ao lado do nome e da credencial. A `s19` fez o inverso exato do exemplar. Foi
recomposta na régua e a fala coube a **264 px em 4 linhas** — sem cortar uma palavra da citação, que
é literal e não se encurta.

*Quando um gate de tamanho reprova e nenhum `font-size` resolve, o defeito não é tipográfico: é de
composição, e a resposta quase sempre está no exemplar do modelo que não foi aberto.*

---

### ARTE-192 · `opacity:0` sem linha no `__renderAt` é um elemento que NUNCA chega à tela — a terceira falha da família [ARTE-179] (10/ago/2026, `galaxia-arco-flecha` s56)

**Medido na estação RENDER, um dia depois da [ARTE-179] e da [ARTE-180].** A `s56` (M05, documento
grifado) carregava um `#cred` com o crédito **CC BY 4.0** da imagem de fundo — atribuição que a
licença EXIGE. O CSS o declarava `opacity:0` e o `__renderAt` **não o mencionava em lugar nenhum**:
sem `E('cred')`, sem classe varrida por `querySelectorAll`, sem nada. O elemento ficou em zero os
5,4 s inteiros. O crédito existia no HTML, no comentário do cabeçalho (*"CC BY 4.0 EXIGE
atribuição"*) e no code review de quem lesse o arquivo — e **nunca esteve na tela**.

**Como a família de leis produziu o defeito:** a [ARTE-179] mandou o crédito parar de ESTREAR;
a [ARTE-180] avisou que ele pode nascer ILEGÍVEL. Esta é o degrau anterior aos dois — aplicar meia
[ARTE-179] (tirar o crédito das estreias) e esquecer a outra metade (dar a ele a linha que o levanta)
não produz um crédito discreto: produz **crédito nenhum**, e do jeito que nada denuncia.

**Por que escapa de TODOS os gates, e é isto que a lei tem de ensinar:** o `qc-carga` não o conta
(nunca estreia, nunca está no ar); o `qc-tamanho` não aplica piso (não tem caixa visível); o
`qc-contrato` só quer `__renderAt`/`__duracao`, que existem; o `check-overlap` não colide com quem
não aparece. Os oito gates do `qc-cena` deram **PASS**. O achado veio de OLHAR um frame — e só
apareceu porque a cena tinha sido barrada por outro motivo.

**A régua, que é grep e não leitura:** todo id/classe que nasce `opacity:0` tem de aparecer no corpo
do `__renderAt`. Antes de fechar a cena:

```bash
# ids que nascem invisíveis
grep -oE '#[A-Za-z][A-Za-z0-9_-]*\{[^}]*opacity:\s*0[;}]' cena.html | grep -oE '^#[A-Za-z0-9_-]+'
# cada um TEM de casar aqui; o que não casar nunca chega à tela
sed -n '/__renderAt/,$p' cena.html | grep -c "<id>"
```

E o corolário de destino: quando **não há lugar** na composição para a pílula de crédito (na `s56` o
card, com `scale(1.03)` no fim, chegava a ~2089 px e sobravam 71 px de faixa — menos que os próprios
72 px de piso do papel `credito`), a saída não é deixá-lo invisível "por enquanto". É levá-lo para a
linha de proveniência que a cena já tem, onde ele cumpre a licença **sem virar um bloco de texto
novo** — que era justamente o que reprovaria o RITMO de novo.

---

### ARTE-194 · Obedecer a [[ARTE-93]] pela letra e reabrir o preto POR DENTRO do clipe — um relógio de arte menor que `__duracao` (11/ago/2026, `quao-fundo-terra`, os 4 cards de título)

A [[ARTE-93]] manda o card de título durar o GAP inteiro (≥3,9 s), porque clipe curto deixa o resto do
buraco preto. Os 4 cards deste vídeo **obedeceram** — `var DUR=3.9` — e puseram o preto de volta um
nível abaixo, dentro do próprio clipe:

```js
var DUR=3.9; window.__duracao=DUR;   // certo: cobre o gap
var DA=3.0;                          // ⛔ relógio de ARTE interno, MENOR que DUR
t = cl(tt, 0, DA);                   // t congela em 3,0 …
var saida = 1 - eo(seg(t, DA-0.40, 0.40));   // … e o fade já zerou o palco lá
```

**O comentário do autor é a premissa inteira do erro:** *"os 0,9 s de rabo saem com o card já apagado
pelo fade"*. Ninguém recorta esse rabo. Na rota PT-BR o XML dimensiona o vão pela duração **real** do
clipe ([[FIN-164]]/[[FIN-165]]), então os 0,967 s finais foram ao ar como `#040A12` — luma 3,6 %, só o
logo, título desaparecido desde 2,933 s. Vezes 4 cards: **3,867 s de tela preta**, com o vão da V1
vazio embaixo — não há nada por baixo para salvar. Pego no gate de finalização, depois do render.

**A regressão tem testemunha:** o `ceuta`, entregue no dia anterior, tem o mesmo `DUR=3.9` **sem**
`var DA` e **sem** fade de saída — em t=3,85 s o título está inteiro na tela. O `DA` foi introduzido
depois, para "fechar no preto do gap", numa rota onde o gap não existe mais como preto: o XML o
preenche com o card.

**A regra:** `DA = DUR`, sempre. Coreografia que fecha antes **segura o último quadro visível** (câmera
viva, micro-deriva) até `__duracao`; fade de saída, quando houver, cabe nos últimos 0,40 s **de
`__duracao`**. O teste custa 20 s: `shot.mjs` no **penúltimo frame** (`t = __duracao − 1/30`) e olhe —
preto ali é FAIL de finalização, não ressalva. Vale para toda cena, não só card: é o
`hold do último estado` da [[ARTE-94]] lido como *apagar* em vez de *segurar*.

*Lei que fecha um buraco por fora não promete nada sobre o interior da peça que o tampa. Cumprir a
letra e reintroduzir o defeito um nível abaixo é a forma mais barata de parecer conforme.*

Agente-raiz: `editor-de-arte` (§4.0 e o bloco do contrato `__duracao`) — doutrina corrigida em 11/ago.

### ARTE-195 · O nome da PRÓPRIA CASA não está declarado em lugar nenhum — e sai em dois nomes com 0 frame entre eles (11/ago/2026, `quao-fundo-terra`)

Na V3, o card `s121` termina em 1257,100 s escrevendo **"Clube de Membros"**. No frame seguinte entra
o `cta-qr-clube-alpha.mov` escrevendo **"CLUBE DE CURIOSOS"**. Duas placas, dois nomes para a mesma
coisa, sem um único frame entre elas — e o espectador tem de decidir sozinho se são a mesma coisa.

**Ninguém errou, e é isso que faz o defeito ser estrutural.** Cada peça resolveu o nome pela fonte
que tinha, e as duas fontes discordam:

- o `redator-de-tela` fixou `glossario[53]` = "Clube de Membros", com `conferido: true` e fonte
  citada — *o roteiro do vídeo, linha 72: "o Clube de Membros está logo ali, no link embaixo"*. Ele
  seguiu a FALA, que é exatamente a regra de word-lock desta casa. A nota dele até antecipa o risco:
  *"O NOME DA PRÓPRIA CASA, e é o que ninguém confere."*
- o `cta-qr-clube-alpha.mov` é asset de marca PERMANENTE (31/jul), reusado em **todo** vídeo do canal.
  Ninguém o reabre há semanas, e ele carrega o nome de quando foi feito.

**A causa raiz é uma ausência:** `knowledge/BRAND.md` e `knowledge/DICIONARIO.md` **não contêm
nenhum dos dois nomes** — conferido por grep. O nome do clube nunca foi declarado como valor de
marca, então não existe fonte contra a qual conferir; existem duas peças, cada uma com sua
procedência legítima. *Não há divergência a detectar quando não há original.*

**Por que nenhum QC pega.** Cada peça passa sozinha: o `s121` bate com a fala (word-lock ✅), o QR é
asset aprovado da marca (autoria ✅). O conflito só existe no PAR, e o par só se forma na timeline —
depois de as duas terem sido julgadas e aprovadas em separado. É o mesmo cego da [[ARTE-99]]: lente
de cena não enxerga propriedade de conjunto.

**A regra:** todo nome PRÓPRIO da casa — clube, seções recorrentes, o que quer que apareça em asset
permanente — se declara em `knowledge/BRAND.md`, com a grafia e as caixas, ANTES de virar arte. E
quando a fala do apresentador diverge do asset de marca, **quem manda é a marca, e o conserto é
avisar** — não é o card do vídeo se alinhar em silêncio à fala daquele dia, porque asset permanente
sobrevive ao vídeo e a fala não.

Agente-raiz: `arquiteto-de-marca` / `knowledge/BRAND.md` (a declaração que falta). O
`redator-de-tela` fica ISENTO — fez o que a doutrina manda e ainda deixou o aviso escrito. ABERTA:
decidir o nome é ato do Mateus, e ele decide de uma vez para o canal inteiro, não para este vídeo.

### ARTE-196 · Dois gates da mesma casa julgando a MESMA pergunta, e o que decide ignorando o registro mais completo (11/ago/2026, `dentro-do-sol`)

O `qc-atribuicao` reportava **7 cenas "não sei julgar"** — mídia usada na tela cuja licença ele não
encontrava — num projeto onde o `qc-procedencia`, rodando sobre o mesmo acervo, fechava **0 sem
prova em 115 mídias**. A pergunta é uma só (de onde veio este arquivo e o que a licença exige), e os
dois liam registros diferentes: o que julga lia apenas as pautas de `_pesquisa/`, e o
`_media/_PROCEDENCIA.json` — a prova principal, a única que sobrevive à renomeação por assunto —
não era consultado por ele.

Medido: `s08-chama-fogueira-close.mp4` e `s18-metal-fundido-fundicao.mp4` têm licença Envato gravada
na procedência, com id do item, busca e URL. Não estão em pauta nenhuma porque vieram da caça
cirúrgica da regência, que escreve a procedência e não reabre a pauta.

**A segunda metade do alarme falso era de sufixo.** O gate já sabia que a variante `-branca`/`-preta`
de uma logo herda a licença do pai, e não sabia o mesmo da variante de ESCALA: os `pesquisa-*`
ampliam foto pequena para tela cheia por Lanczos+unsharp e salvam `-2x`/`-2.5x` ao lado do original.
`doc-galileu-manchas-solares-1612-p84-2.5x.jpg` e `pessoa-ray-davis-laboratorio-bnl-2x.jpg`
apareciam como desconhecidas em 3 cenas, com o pai declarado em domínio público **nas duas fontes**.
Super-resolução clássica é não-generativa: o upscale é a mesma obra e herda a mesma licença.

**Por que isto é caro, e não cosmético:** o custo do "não sei julgar" não é o ruído, é o que ele
ensina. Sete linhas de alarme que ninguém consegue resolver treinam a próxima passada a pular o
bloco inteiro — e no dia em que uma delas for violação de verdade, ela desce junto. E o conserto que
um agente apressado escolhe é o pior de todos: recaçar mídia que já está licenciada e paga.

**A régua:** antes de acusar lacuna de registro, leia TODOS os registros que a casa mantém sobre
aquele fato. Se um gate irmão já responde a mesma pergunta com mais dados, ou ele é a fonte, ou os
dois estão errados por metade. Depois do conserto: 7 → 1, e a que sobrou (`_media/flags/us.png`, sem
`_PROCEDENCIA.json` na pasta) é lacuna real de cadastro, que o gate deve mesmo acusar. *Gate que
nunca dispara é tão inútil quanto o que sempre dispara — o real tem de sobreviver ao conserto.*

Provado nas três direções da [[ARTE-187]]: com `_atribuicoes-descricao.md` citando as mídias, PASS
(exit 0); sem o arquivo, REPROVA as mesmas 6 cenas (exit 1); com o arquivo presente mas sem citar a
mídia, REPROVA igual. O veredito final não afrouxou — só parou de chamar de desconhecida a licença
que estava escrita.

### ARTE-197 · O índice de mídia do dossiê só conhecia UMA convenção de nome — e o que ele não indexa vira ordem para ignorar mídia paga (11/ago/2026, `planeta-em-meteorito`)

`scripts/_brief-arte.mjs` monta a seção **MÍDIA REAL NO DISCO** de cada cena varrendo `_media/` e
perguntando de quem é cada arquivo. A pergunta era feita por um regex só: `\bs(\d{1,3})(?![0-9])` —
a convenção `sNN` dos ids de cena. Metade dos vídeos desta casa **não usa essa convenção**: o espelho
nomeia por semântica (`hook-pedra-saara-corte`, `nao-e-asteroide-comum`) e a pesquisa grava em
`_media/<tipo>/<id-da-cena>/`. Nenhum path casa. Nada tem dono.

**O que o agente recebe quando nada tem dono não é uma seção vazia — é uma ordem.** O gerador tem um
ramo para a cena sem mídia própria, e o texto dele é *"Cena CONSTRUÍDA — não há mídia dedicada, e isso
é a direção, não uma falta. **Não é bloqueio: desenhe.**"* Escrito para a cena de desenho puro, ele
sai idêntico para a cena que tem footage 4K comprado esperando na pasta com o nome dela.

**Medido no `planeta-em-meteorito`** (59 cenas, ids semânticos), antes do conserto:
- **61 arquivos** de mídia dedicada indexados como órfãos, diluídos num "acervo comum" de 109;
- **38 arquivos próprios invisíveis** na seção de **18 cenas**; **6 cenas com ZERO** da sua mídia —
  entre elas `nao-e-asteroide-comum` (as duas fotos de Bennu do OSIRIS-REx, baixadas para ela) e
  `nascimento-sistema-solar` (os dois discos protoplanetários do ALMA);
- e o rótulo mentindo na direção oposta: sem dono no índice, o arquivo citado na âncora entrava pela
  porta do **reuso declarado** e saía marcado *"herdado de outra cena … escolha tomada diferente da
  cena de origem"* — **23 dos 30 rótulos**, todos apontando a pasta da PRÓPRIA cena. Uma origem que
  não existe, e uma instrução para se afastar dela.

**A régua:** a convenção do path nunca é a fonte da verdade sobre de quem é o arquivo — **o espelho
é**. Componente de diretório idêntico a um id de cena é dono, por igualdade exata (nunca por prefixo:
`s14` dentro de `s141` já custou este mesmo bug uma vez). As duas convenções convivem no mesmo índice.

**Por que este é caro de um jeito particular:** ele não reprova, não alerta e não deixa rastro. A cena
sai bonita, gera-se com a cota mais escassa do estúdio, e o defeito só aparece quando alguém pergunta
por que a foto que a pesquisa pagou não está no vídeo. Aqui as 18 cenas já desenhadas escaparam por
sorte — a mídia ainda aparecia no balaio do acervo comum e os agentes foram conferir o disco por
conta própria. As **30 pendentes** teriam sido desenhadas com o dossiê mentindo. *Insumo silencioso
erra pelo lado que ninguém audita: um bloqueio falso grita, uma ausência falsa é obedecida.*

Depois do conserto, no mesmo projeto: **0** arquivos próprios invisíveis (29 cenas completas),
"herdado de outra cena" cai de 30 para **7** — e os 7 são reuso real, conferidos um a um —, e
"Cena CONSTRUÍDA" cai de 20 para **14**, que são as de desenho puro. O acervo comum vai de 109 para
48, o número verdadeiro de arquivos sem dono. Ver [[ARTE-94]] (âncora é ativo pago) e [[ARTE-183]].

---

### ARTE-198 · O card de título declarado só na PROSA da tese foi roteado ao Fable — o reconhecedor lia dois campos, e o molde se anuncia em três (11/ago/2026, `planeta-em-meteorito`)

`scripts/desenhar-cenas.mjs` decide quem paga a conta de cada cena: **molde → `executor-de-molde`
(Opus)**, **invenção → `editor-de-arte` (Fable, a cota mais escassa da casa)**. O sinal canônico de um
card de título é `modo:"titulo-topico"`, e ele funciona: **30 dos 35 cards do disco** o usam e caem
no molde. Os outros 5 são de um vídeo só — o montador escreveu `modo:"cinematico"` e declarou o card
apenas na **prosa da tese** (`"CARD DE TÍTULO 5 (não narrado): 'O fantasma na palma da mão'…"`), com
`id:"titulo-fantasma-na-palma"`. Nenhum dos dois padrões que o reconhecedor lia casava: o `id` não
começa com `cardN-`, e o campo `titulo` é a cartela em si ("O fantasma na palma da mão"), não a
palavra "CARD".

**Resultado medido:** cinco cards de título do mesmo vídeo roteados ao Fable para preencher um molde
que tinha **quatro gêmeos prontos dentro do próprio vídeo**. Quatro já haviam sido desenhados pelo
recurso escasso; o quinto estava na fila do Fable no dia em que as 10 portas bateram 429 — parado por
falta de um recurso que a tarefa não precisava. Rodar `--so=molde` pelo Opus fechou a cena no mesmo
dia, com a frota viva (prova de separação modelo × frota: [SIS-292]).

**As duas frentes do conserto — e a ordem importa:**
- **A cura** é o montador declarar no CAMPO: card de título de tópico nasce `modo:"titulo-topico"`.
  Prosa não roteia nada. Escrever o modo na tese é como declarar um tipo num comentário.
- **A defesa em profundidade** é o reconhecedor aceitar a declaração explícita onde ela estiver:
  `/^\s*CARD\s+(?:DE\s+)?(?:T[ÍI]TULO|T[ÓO]PICO)\b/i` em `titulo` **e** em `tese`. É seguro porque a
  frase é uma DECLARAÇÃO de modo escrita pelo montador, não descrição de conteúdo — cena de invenção
  não abre a tese assim. Aditivo: só acrescenta reconhecimento, nunca remove. Regressão medida em
  todos os espelhos do disco: **exatamente 5 cenas mudam de rota**, as 5 deste vídeo, e nenhuma outra.

**E o corolário que veio no mesmo achado — O IRMÃO DO MESMO MOLDE É A RÉGUA MAIS FORTE, e o briefing
não o citava.** O dossiê mandava abrir os dourados de `seed/examples/`, que são de outro vídeo, outro
tema, outra paleta de cena. Os quatro cards gêmeos, no mesmo palco, feitos dias antes, não apareciam
em lugar nenhum do prompt — o quinto card ia ser desenhado sem que nada apontasse os quatro. O
briefing passa a listar os irmãos do mesmo molde que já têm HTML, **só para molde** (em cena de
invenção, mandar copiar a irmã convida o "círculo" que a [[ARTE-39]] combate). E com uma ressalva
explícita: a regra *"copie a estrutura, nunca os números"* existe contra exemplar de palco ANTIGO —
irmão do MESMO vídeo tem o MESMO palco 3840×2160, e ali a consistência PEDE a mesma geometria de
lockup; o que muda é o texto, a mídia e o word-lock.

*Peça do mesmo sistema saindo diferente é o defeito que o espectador percebe sem saber nomear, e
nenhum QC de cena o pega — cada card passa sozinho.* Ver [[ARTE-197]] (o dossiê como insumo
silencioso) e [[ARTE-71]] (o roteamento lendo o campo cru).


### ARTE-199 · Lei emendada sem emenda no texto VELHO segue ensinando o erro (11/ago/2026)

A [[ARTE-148]] criou o **piso 600** em 08/ago. A [[ARTE-30]] (08/jul) mandava *"corpo em peso normal
(400–500)"*. Lei nova vence no mesmo domínio — e mesmo assim, três dias depois, **10 das 47 cenas do
`quasares-primordiais` saíram em 500** e o `qc-tipografia` reprovou todas.

Ninguém desobedeceu. O §7 do `editor-de-arte.md` — o portador que o executor de fato lê — copiava o
`400–500` da lei velha, sem uma linha dizendo que o número tinha sido revogado. O Fable obedeceu ao
texto que tinha na mão, e o gate reprovou o que a doutrina mandou fazer.

**A precedência "NN maior vence" só funciona para quem lê as DUAS leis.** Quem executa lê o agente, e
o agente carregava só a velha. Uma lei nova que não volta para emendar o texto antigo — e, sobretudo,
os agentes que o citam — nasce inerte: o número errado continua circulando pelo caminho mais curto.

**Ao publicar lei que revoga um NÚMERO de lei anterior, na mesma passada:**
1. `grep` do número velho no repo inteiro (`.claude/agents/`, `~/.claude/agents/`, `cerebro/agentes/`,
   `knowledge/`, `seed/regras/`) — o mesmo parágrafo costuma viver em 3+ portadores;
2. **emende o texto velho no lugar**, marcando o que caiu e o que ficou de pé (aqui: o número mudou, o
   princípio "destaque é peso, não cor" continua sendo a fala do Mateus);
3. cite o gate que mede, para que a próxima cena feche medindo em vez de lembrando.

*Contradição entre gate e agente sempre se paga na cota do modelo criativo: cada cena reprovada é
inferência já gasta. Aqui o gate era o certo e a instrução era a velha — e foi a instrução que rodou.*


### ARTE-200 · O predicado estava certo; quem chamava entregou a cena SEM os campos que ele lê (11/ago/2026, `planeta-em-meteorito`)

`src/modos.mjs::ehCardDeTitulo` é o **dono único** de "esta cena é card de tópico?" — e existe exatamente
porque três consumidores carregavam cópias do regex e cada uma foi remendada em separado ([[FIN-80]],
[[FIN-85]], [[FIN-46]]). Ele lê quatro campos: `modo`, `id`, `titulo` e (desde hoje) `tese`.

O `qc-espelho-cortes.mjs` importava esse dono, perguntava a coisa certa — e passava adiante uma cena
projetada em `{id, ini, dur, modo}`, **descartando `titulo` e `tese` na renomeação de `inSec`→`ini`**.
O predicado respondia sobre um objeto mutilado. Sem erro nenhum: `String(undefined || "")` é `""`, e
string vazia não casa regex nenhum — "não é card" é indistinguível de "não perguntei".

Medido aqui: os 5 cards deste vídeo (declarados na `tese`) davam **5 REPROVAS de `gap-ocupado`
acusando o próprio card de invadir o vão do card**, com o conserto sugerido apontando para as únicas
cenas já certas. Consertei o dono (a rede da prosa) e o gate seguiu reprovando as 5 — foi essa
teimosia que revelou a causa. Depois da projeção: **7 reprovas → 2**, e as 2 são reais.

**A rede `/^CARD\b/` do `titulo`, viva no dono desde [[FIN-46]], estava morta neste gate desde sempre** —
três calibrações (`ceuta`, `orcas-nao-matam`, `especies-humanas`) mexeram no predicado, que já
estava certo, e nenhuma olhou o objeto entregue a ele.

**Ao consertar um predicado compartilhado, meça também o que cada chamador ENTREGA a ele.** Um dono
único não protege de nada se o consumidor o alimenta com uma projeção que ficou para trás: o bug
migra do regex para o `.map()`, onde ninguém procura, e volta a se espalhar por consumidor. O teste
que pega: rode o predicado sobre a cena INTEIRA e sobre a projeção, e compare os vereditos — aqui
divergiram em 5 de todas as cenas de todos os espelhos do disco.

**Cura estrutural preferida:** projeção **aditiva** (`{...x, ini: +x.inSec||0}`) em vez de literal
selecionado. Campo novo no espelho chega sozinho ao predicado e o próximo dialeto não pede um quarto
conserto no chamador. Ver [[ARTE-198]] (o mesmo card, o roteador, horas antes — e o dono único ficou
para trás naquele conserto: remendar o consumidor conserta o sintoma da vez e deixa os outros dois
quebrados em silêncio, porque **lista vazia não é erro**).

### ARTE-209 · A regra dava o CRITÉRIO e não dizia de onde ele se lê — e critério sem fonte é preenchido pelo nome do arquivo (11/ago/2026, `quasares-primordiais`)

A seção 12 do `editor-de-arte.md` está certa há semanas: *"imagem cuja licença exige atribuição →
crédito obrigatório; domínio público ou asset próprio → NÃO ponha fonte, crédito desnecessário
polui"*. A [[ARTE-41]] repete em outras palavras: crédito na tela **só** com exigência explícita.
Nenhuma das duas diz **de onde se lê a licença**. O agente tem a pergunta e não tem a fonte da
resposta — então responde com o que está à mão.

O que estava à mão era o nome do arquivo. Na `s94` deste vídeo (mãe de run fundido que cobre a
`s95`), duas fotos no mesmo quadro:

| arquivo | o que a tela fez |
|---|---|
| `s95-subaru-telescope-maunakea-naoj.jpg` | crédito **"Foto: NAOJ"** em x=232, y=1908 |
| `s95-keck-cupulas-gemeas-maunakea.jpg` | **nada** |

A diferença entre creditar e não creditar foi uma sigla no fim do nome do `.jpg`. E
`_media/foto/s95-o-subaru-e-o-keck/` **não tem `_PROCEDENCIA.json`** — não havia licença nenhuma para
consultar, nem para a foto creditada nem para a outra. Das duas decisões, uma atribui a imagem a uma
instituição sem prova e a outra omite a atribuição que talvez seja obrigatória: erradas pelo mesmo
motivo, em direções opostas.

O mais instrutivo é que **a cena escreve no próprio cabeçalho a regra que viola** — *"Crédito de FOTO
vai na tela (é outra coisa)"*, ao lado do ⛔ correto sobre mapas ([[ARTE-104]]). Ela sabia o critério.
Não tinha onde ler a licença, e nada no briefing dizia que a ausência de prova **decide** a questão.

Nenhum gate pega: `qc-contrato`, `check-overlap`, `qc-tipografia`, `qc-carga` e `qc-rodape-contraste`
passam todos — eles medem se o crédito **cabe, colide e se lê**, nunca se ele é **verdadeiro** ou
**devido**. O `qc-procedencia` mede o disco (e reprova este projeto: 35 arquivos, 17 pastas sem
prova), mas não olha a tela: `emCena: 0` num vídeo cuja única cena com crédito é justamente a da
pasta órfã.

**Ao escrever uma regra de decisão, declare no MESMO lugar de onde o dado da decisão se lê.** Regra
sem fonte declarada não fica em suspenso — ela é resolvida pelo insumo mais próximo, e nome de arquivo
é o insumo mais próximo que existe numa pasta de mídia. Para crédito, a fonte é o `_PROCEDENCIA.json`
da pasta: **sem prova, ou com prova que não declara mandatory credit, NÃO se credita** — e o caminho
para uma prova que falta é a pesquisa recaçar a URL, nunca a arte escrever um nome plausível.

Consertado em três portadores na mesma passada (o briefing de `scripts/desenhar-cenas.mjs`, que é o
texto que o agente lê em toda cena, e o `editor-de-arte.md` dos dois lados), mais o crédito removido
da `s94` com o motivo no cabeçalho, para ninguém "consertar de volta". Ver [[ARTE-41]] (a exigência
como critério) e a memória `credito-nao-se-tira-do-nome-do-arquivo`, que descrevia este erro **antes**
de ele acontecer aqui: memória que descreve o defeito não o impede se o portador que o agente lê não
for emendado.

### ARTE-210 · Duas regras da casa se cruzam em 600, e o conserto automático que atende uma cria a violação da outra (11/ago/2026, `quasares-primordiais`)

A [[ARTE-148]] põe o **piso** de peso da marca em 600. O bug da Neue Haas põe o **teto** do Ã/Õ
maiúsculo em 599: em Bold (600–749) a fonte desenha caixa alta acentuada errada. As duas convivem sem
atrito na maioria das cenas — e colidem em **exatamente um valor**, que é o valor que o
`consertar-tipografia.mjs` escreve: ele eleva todo `font-weight` de três dígitos menor que 600 para
**600**, o primeiro número da faixa proibida.

Medido aqui. O backup pré-conserto da `s131` tinha `.qb` em 500 e `.ap` em 300, com o auditor de til
**limpo** — 0 defeitos. Depois da passada das 13:39, os dois em 600 e **3 ocorrências defeituosas**:
`BILHÕES`, `TÃO RÁPIDO`, `INFÂNCIA`. A cena não tinha o defeito; o conserto o trouxe.

O mais caro é o que se revalidou depois: `qc-tipografia` (PASS — o peso está no piso, ele mediu
certo), `check-overlap` (PASS) e `qc-fora-do-quadro` (PASS, 78/78 amostras). Três gates verdes, e
nenhum dos três olha o til — quem olha é o `til-Bold`, que só roda dentro do `qc-cena`. **Escolher
quais gates revalidar depois de um conserto em lote é escolher o que se vai deixar passar**: a régua
certa não é "os gates que eu rodei antes", é "os gates que tocam o que eu acabei de mudar" — e o que
mudou aqui foi PESO, exatamente o insumo do gate que ficou de fora.

E o próprio script já sabia: o cabeçalho dele explica, em cinco linhas, que a Neue Haas erra o Ã/Õ em
600–749 — é por isso que o helper `FF_H` existia. Ele documentava a faixa e escrevia dentro dela.
*Conhecer a restrição no comentário não é obedecê-la no código.*

⚠️ **A segunda saída da prescrição é INERTE nesta frota.** O CLAUDE.md e o auditor oferecem *"900
(Black) **ou** font-family 'Helvetica Neue'"*. Na VM `fc-list | grep -i "helvetica neue"` devolve
**0** — só existe "Neue Haas Grotesk Display Pro". Trocar a família cairia num fallback genérico e
pioraria a cena. Onde o render roda, a prescrição tem **uma** saída: 900. Ver [[ARTE-199]] — instrução
que não roda na máquina onde é lida empurra para a alternativa errada.

**O conserto:** o `consertar-tipografia.mjs` passou a fechar o laço sozinho. Depois de elevar ao piso,
escreve o resultado num tmp, roda o MESMO auditor que o portão usa e sobe a **900** só os seletores
acusados; se sobrar defeito que ele não sabe endereçar, **não escreve a cena** e diz o que fazer à mão.
Falha fechada: se o auditor não roda, o passe devolve lista vazia e o conserto de peso segue como antes
— proteção que se acrescenta, nunca gate novo que derruba o que funcionava. Testado contra o caso real
(o backup da `s131` como entrada) e o resultado saiu **byte-idêntico** ao conserto manual.

**Ao escrever conserto automático que empurra um valor para o limite de uma regra, procure a outra
regra que mora naquele limite.** Piso e teto de domínios diferentes se encontram num ponto, e é
sempre no ponto que o conserto cego escreve.

### ARTE-211 · A entrada do roteador que nunca casou com nada — e ela mascarava o buraco que abria (11/ago/2026, `quasares-primordiais`)

O `desenhar-cenas.mjs` separa **molde** (Opus, cota folgada) de **invenção** (Fable, a cota mais escassa
da casa) por um `Set` de famílias. Ele tinha `"apresentador"` lá dentro desde a [[ARTE-54]] — e essa
entrada **nunca roteou uma cena sequer, em nenhum vídeo**.

Cena `modo:"apresentador"` é o Bôco puro em tela: ela **não gera HTML**, nasce com `anima:false`, e o
filtro de pendentes (`segs.filter(s => s.anima)`) a descarta três linhas ANTES de o `Set` ser consultado.
Medido nos 18 espelhos do disco: **379 cenas `modo:"apresentador"`, ZERO com `anima:true`**.

Quem o `executor-de-molde` sempre declarou cobrir — *"citação, documento grifado, card de título,
**apresentador em tela**"* — é outra família, irmã de nome: **`apresentador-info`, o M28** ("ele CEDE o
espaço, o texto ocupa"). Essa tem template, tem exemplar dourado (`seed/examples/dourados/M28/`) e quase
sempre tem irmã pronta no próprio vídeo — molde puro. E estava **fora** do `Set`.

**O custo, medido no mesmo dia:** 22 cenas `apresentador-info` em 7 vídeos, todas roteadas ao Fable — 9 já
desenhadas por ele (`ceuta` 5, `quao-fundo-terra` 3, e a `s14` daqui) e **13 pendentes** em 5 vídeos, que
o conserto acabou de mover para o Opus. Aqui foram **4 das 62 cenas que faltavam**, e elas são exatamente
o que esta sessão conseguiu produzir: o Fable bateu **429 nas 10 contas** às 14:57:22Z (com Opus OK na
mesma cascata 3 min depois — cota do modelo, não da frota), e as quatro saíram assim mesmo, porque
deixaram de depender dele.

**O agravante é o que faz esta lei diferente da [[ARTE-71]] e da [[ARTE-198]].** Naqueles casos o `modo`
vinha mal escrito e o roteador estava certo; aqui **ninguém digitou nada errado** — a família certa tem
duas grafias irmãs e o `Set` ficou com a que o filtro anterior já elimina. Pior: a entrada morta
**parecia cobertura**. Quem abrisse o roteador procurando "e o apresentador?" via `"apresentador"` na
lista e dava o caso por resolvido. Foi o que aconteceu por semanas.

⚠️ E havia um sinal grátis apontando para ela: `"apresentador"` é a única família do `Set` que **não tem
exemplar dourado próprio** (`M28` tem, `M06` tem, os cards têm) — porque não é peça desenhável.

**Antes de confiar num roteador que decide quem paga a conta, conte quantas vezes cada entrada dele
casou.** Entrada que nunca casa não é neutra: ela ocupa o lugar da entrada que faltava e faz o buraco
parecer tapado. O teste é de uma linha e vale para qualquer tabela de despacho — se o `grep` no disco
inteiro devolve zero, a linha está errada ou é a família irmã.

### ARTE-212 · O passe reconciliava a âncora e deixava o TOPO do arquivo dizendo FALTA (11/ago/2026, `quasares-primordiais`)

O `aplicar-ancoras-pesquisa.mjs` existe por um motivo escrito no próprio cabeçalho dele: *"o
editor-de-arte lê o conceito, não o disco"*. Ele promove `midia_ancora: "FALTA — …"` → caminho real
quando a pesquisa entrega, e prova que não tocou em nada mais.

Só que o `conceito-visual.json` guarda o estado da mídia em **dois lugares**, e ele reconciliava um: o
array **`faltas` do topo** — o inventário que o `diretor-de-arte` escreve ANTES de a pesquisa rodar —
ficava congelado. E o topo é literalmente a primeira coisa que se lê, porque o briefing de toda cena
manda *"abra `out/<proj>/conceito-visual.json` e ache a entrada desta cena"*.

**Medido aqui:** `s09` e `s60` ainda pendentes, com a mídia no disco **desde 10/ago** (3 fotos do
lançamento do Euclid; as 3 de época do Palomar/Schmidt) e o topo dizendo `FALTA — foto de época […] a
pasta de destino só tem _creditos.json, sem imagem`. Mais um `AVISO à coordenação: _media/logo/ está
VAZIA e 34 cenas têm needs.logos` sobre uma pasta com **16 logos oficiais pagos** (ESA, ESO, JWST, Keck,
NAOJ, NASA, Subaru). Duas versões do mesmo estado no mesmo insumo — e vence a de cima.

É a [[ARTE-199]] num objeto novo: **estado resolvido sem emenda no aviso velho segue ensinando o erro
pelo portador mais lido.** Lá era número de lei revogado; aqui é mídia que chegou.

**A trava desta parte é contra o erro OPOSTO — declarar resolvido o que não chegou.** A `s82` pede uma
escada de 4 degraus e diz `FALTA PARCIAL — o degrau 3 (Andrômeda)`; a pasta dela tem 4 arquivos (degraus
1, 2 e 4, mais um alternativo). Resolver falta por *pasta cheia* faria a cena desenhar um carimbo de
tempo vazio no degrau que não existe. Por isso o passe só marca `RESOLVIDA` quando **a âncora daquela
cena já cita arquivo vivo**, nunca marca `PARCIAL`, e jamais apaga o texto do diretor — o pedido original
segue no fim da linha, com o id da cena abrindo, na convenção que o arquivo já usava.

**Quando um estado mora em dois campos do mesmo arquivo, o passe que reconcilia um tem de reconciliar o
outro — ou dizer em voz alta que não reconcilia.** O segundo campo não fica "apenas desatualizado": ele
fica *contradizendo o primeiro para quem lê de cima para baixo*, que é como todo mundo abre um arquivo.


### ARTE-213 · Regra que só vive em PROSA é regra que o gate não cobra — o til atravessou oito gates verdes

**11/ago/2026, `planeta-em-meteorito`, cena `escala-mais-velho-terra-lua`.** A legenda de eixo
`Ga = BILHÕES DE ANOS ATRÁS` foi entregue em `font-weight:600` — exatamente a faixa (600–749) em que
a Neue Haas desenha **Ã/Õ maiúsculos quebrados**. A cena tinha passado por `qc-contrato`,
`check-overlap`, `qc-fora-do-quadro`, `qc-carga`, `qc-tamanho`, `qc-hex`, `qc-atribuicao` e
`qc-src-existe`: **oito verdes**, e ainda por um conserto anterior de geometria feito na mesma cena.

**Não foi o agente que esqueceu a regra — foi a checklist que não a cobrava.** A §7a do
`editor-de-arte.md` descreve o defeito com precisão desde a [[ARTE-120]], e a [[ARTE-183]] até
refinou o diagnóstico (o Ç está CERTO; só o til quebra). Mas a tabela "§7 · O que você valida ANTES
de entregar" tinha **13 itens e nenhum rodava `_audit-til.mjs`** — o script existe, funciona e não
era chamado por ninguém no fecho. Prosa que descreve um defeito e checklist que não o mede são duas
coisas diferentes, e sob cota **o agente executa a checklist**.

**Por que nenhum outro gate cobre:** o til não é colisão (as caixas não se tocam), não é corte (o
texto está inteiro dentro do quadro), não é carga (é um elemento só), não é contraste (a cor está
certa) e não é hex (o CSS é válido). É o glifo **desenhado errado dentro de uma caixa perfeita** — a
única família de defeito que só um medidor de fonte enxerga.

**O conserto** foi nos dois lugares onde o fecho mora, não na prosa que já estava certa: item **7c**
na tabela §7 do `editor-de-arte.md` (as três cópias vivas: repo, global e `~/estudio`) e uma linha
no auto-QA do `knowledge/ROUPA-CENA.md` §3. A cura da cena foi trocar a **família do bloco inteiro**
(`.leg` → Helvetica Neue), não subir o peso para 900: 900 engrossaria uma legenda de apoio e
alargaria um `white-space:nowrap` ancorado a 200px da borda, numa cena que já tinha sido consertada
de 34 textos cortados. Depois da troca, **re-medi** — `_audit-til` 0/1, contrato OK, zero colisões,
60/60 amostras sem corte — porque a família nova é mais larga e mover a caixa é efeito colateral
esperado, não surpresa.

**A regra geral:** *toda regra de execução precisa de uma linha na checklist de FECHAMENTO, ou ela
depende da memória do agente no instante em que ele está com menos contexto e mais pressa.* Se existe
script, ele entra na tabela; se não existe, o item entra marcado como **de olho** (a §7 já faz isso
com as checagens 9–12, e por isso elas não somem).

> ⚠️ **EMENDA (11/ago/2026, 17:0x, estação ARTE do `quasares-primordiais`) — a CURA prescrita acima é
> inerte em metade da frota; o DIAGNÓSTICO continua de pé.** Trocar a família para **Helvetica Neue**
> só funciona no Mac. Medido na VM `estudio-top10`, onde a outra metade do render roda: `fc-list` devolve
> **0** para Helvetica Neue e **16** para Neue Haas, e `fc-match "Helvetica Neue"` entrega **DejaVu Sans** —
> fallback genérico, outra fonte. A [ARTE-210] já tinha medido isso no mesmo dia; como o NN maior vence
> dentro do domínio, esta lei estava prestes a revogar na prática uma medição correta.
> **Onde o render roda, a saída para caixa alta acentuada é uma: peso 900.** Se o caso pedir mesmo troca de
> família (legenda de apoio que 900 engrossaria demais), a troca só é segura depois de `fc-list` na máquina
> que vai renderizar — e o lote se divide entre Mac e VM, então "funcionou aqui" não é resposta: a MESMA
> cena sairia com fontes diferentes nas duas máquinas, que é o defeito que ninguém vê até estar montado.

### ARTE-214 · A lista de portadores escrita DENTRO da lei não conserta ninguém — e o pior portador é o que EXECUTA (11/ago/2026, `quasares-primordiais`)

**O caso.** O `grep -oE '#[0-9A-Fa-f]{3,8}[a-z]'` foi aposentado pela [ARTE-77] em 26/jul, proibido por
escrito pela [ARTE-134] e pela [ARTE-153], e em 08/ago a própria [ARTE-77] ganhou um aviso listando **7
arquivos vivos que ainda o prescreviam**. Três dias depois, o censo devolveu **6 portadores vivos** —
a lista tinha sido registrada e não paga. Registro de dívida não é pagamento: *quem escreve "isto ainda
está prescrito em N arquivos" já tem o resultado do grep na mão, e consertar custa menos que documentar.*

**O que a lista custou, medido.** Dois dos seis portadores não ensinavam o comando: **rodavam**.
- `scripts/qa-cena.sh:23` executava o grep e convertia a saída em `ERR=1` → `QA FAIL`, exit 1. Contra as
  **52 cenas prontas** deste vídeo, ele acusa **2** — e as duas acusações são **cor navy da marca**
  (`#6d97bd`, `#15304a`): o `{3,8}` recua e a letra hex seguinte casa `[a-z]`. O gate vigente
  (`node scripts/qc-hex.mjs`) dá **PASS nas 52**. Ou seja, o QA prescrito reprovava cena perfeita pela
  cor da própria marca, e o "conserto" natural de quem obedece é mexer numa cor certa — o dano que a
  [ARTE-153] já tinha medido (um executor renomeando `#dbar`→`#qbar` só para calar o alarme).
- `scripts/desenhar-cenas.mjs:312` e `:389` — o **briefing que o editor-de-arte lê em TODA cena**, nos
  dois templates (com e sem dossiê). O `.claude/agents/editor-de-arte.md` carregava a PROIBIÇÃO desde
  08/ago; o briefing, que chega no mesmo despacho e mais perto da tarefa, mandava o contrário.
  **Quando dois textos do mesmo despacho se contradizem, o executor obedece o mais próximo da tarefa.**

**A prova de que a doutrina certa não basta.** O falso positivo que disparou este censo foi `#dado` na
`s21` — seletor do `id="dado"`, que existe no arquivo. E a redação já corrigida do agente cita `#dado`
**nominalmente** como exemplo do alarme falso. O texto certo e o comando errado conviviam no mesmo
despacho havia três dias, e foi o errado que rodou (por uma sessão que o leu no `CLAUDE.md` de um
worktree atrasado — ver a nota de propagação abaixo).

**Conserto (11/ago):** `scripts/qa-cena.sh` (passa a chamar `qc-hex.mjs`), `scripts/desenhar-cenas.mjs`
(os dois templates), `scripts/conserto-automatico.mjs`, `marcas/top10/agentes/tradutor-de-tela.md`,
`cerebro/agentes/editor-de-arte/CONTRATO.md` e `cerebro/agentes/mapista/CONTRATO.md`. Censo depois:
nenhum portador vivo prescreve o comando; as ocorrências restantes estão todas em contexto de proibição
ou no registro histórico da lei.

**A generalização, em duas partes:**
1. *Ao revogar, separe os portadores que **ENSINAM** (doc, agente, lei) dos que **EXECUTAM** (script,
   briefing injetado no despacho, hook).* O executável é prioridade absoluta: ele não espera alguém ler
   — ele reprova artefato são hoje e treina a frota inteira a ignorar o gate.
2. *Um portador de doutrina viaja com a cópia de trabalho.* O `CLAUDE.md` do repo já estava correto
   desde 08/ago; quem entregou a régua morta a esta sessão foi o `CLAUDE.md` do **worktree**, centenas
   de commits atrás, carregado no contexto porque o worktree era o diretório primário. Worktree velho
   não roda só código velho: ele **injeta doutrina velha**. Ao suspeitar de uma instrução, confira a
   linha no repo principal antes de obedecê-la — e antes de "consertá-la".


### ARTE-215 · Crédito é camada de SERVIÇO: não viaja com a câmera — e o gate absolvia quem nunca esteve dentro

**11/ago/2026, `planeta-em-meteorito`, cena `clinopiroxenio-onde-existe`.** Os dois créditos de foto
moravam **dentro do `#cam`**, o contêiner que recebe o push-in. Consequência, medida com sonda: em
t=13,37s o `#credA` estava em **y=2149 com 92px de caixa** (bottom 2241, palco 2160) e o `#credB` em
y=2149 com 184px — os dois **fora do quadro**. E não era só o zoom do fim: com a escala-base de
1,022 a caixa já nasce em bottom 2194. **Nenhum dos dois esteve inteiro no quadro em instante nenhum
da cena**, e um deles carrega a atribuição `CC BY-SA 4.0`, que é obrigação de licença.

**A regra:** rótulo, dado e metáfora vivem na câmera — eles SÃO a cena. Crédito, fonte e marca são
**camada de serviço**: ancoram no `#palco`, fora do `#cam`, porque precisam estar legíveis
independentemente de para onde a câmera foi. Um crédito que faz push-in junto com o diagrama é um
crédito que a composição pode expulsar sem que ninguém veja. E confira a conta mesmo parado:
`top:2078` + 92px de caixa **já não cabe** em 2160.

**O que o gate dizia enquanto isso: `72/72 amostras, nada cortado`.** A peneira 2 do
`qc-fora-do-quadro` (`transitou`) absolve quem chegou a ficar 100% fora do quadro — feita para o
travelling em que o item atravessa e sai. Ela pergunta metade da questão: **sair não prova trânsito;
sair DEPOIS de ter estado inteiro é que prova.** No push-in final o crédito saía de vez, e essa
saída perdoava retroativamente os 14,5s em que ele esteve decepado.

O conserto foi de uma linha, e o material já estava lá: `inteiroEm[txt]` é gravado desde 07/ago com
o comentário *"é o que distingue 'saindo' de 'nasceu decepado'"* — **computado a cada amostra e lido
por ninguém**. A peneira 4 (a do contêiner) sempre exigiu a condição simétrica (`coubeNoClip`); a da
borda de tela tinha só metade. Agora: `!(transitou && inteiroEm != null)`.

**A cura da cena** foi tirar os dois créditos do `#cam`, subir para `top:2036`, pôr em linha única
(o credB em duas linhas mede 184px e nenhum rodapé o comporta; baixar o corpo não é opção — 72px é
o piso do `qc-tamanho`) e ancorá-los nos CANTOS: centrado, o crédito cruzava a tinta do título de
236px, que desliza 910px para a esquerda entre 4,5 e 6,0s (colisão medida de 1.114px²). O crédito
passou a nascer em 6,4s, depois da passagem do título, e fica 8,1s no ar. Contraste: **2,00:1 →
18,39:1**.

**A ferramenta ficou:** `scripts/probe-elemento.mjs` (`IDS=credA,credB node scripts/probe-elemento.mjs
<html> <t>`) devolve o rect no palco, a opacidade ACUMULADA (o produto dos pais, que é quem decide se
o pixel aparece), se o elemento cabe no quadro e quem o `elementFromPoint` acha por cima. Foi ela que
achou o defeito em 20s depois de a cura óbvia — clarear a cor — não mexer no número: *quando o
conserto certo para a hipótese não muda a medida, a hipótese é que está errada.* Citada no item 7d da
§7 do `editor-de-arte`, para não virar capacidade órfã.

**O irmão do mesmo dia, na mesma sessão:** em `revelacao-angritos` o gate acusou **32 cortes**, e ali
era travelling de verdade — a câmera atravessa uma prateleira de museu. Provado com a mesma sonda
antes de declarar: a placa fica inteira e opaca de ~2,3s a ~4,5s (x 797→2177 em 2,6s) e só depois
sai (x −356 em 4,8s). A cura é a isenção sancionada `data-qc-rolagem` **no elemento que rola**, nunca
no `#palco`. *O mesmo laudo de "texto cortado" cobre um defeito e um gesto; quem separa os dois é a
medição de quando o texto esteve inteiro.*

---

### ARTE-216 · O cabeçalho da cena descreve o conserto DAQUELE dia e envelhece calado — e na irmã de RUN FUNDIDO ele envelhece duas vezes (10/ago/2026, `ceuta-travessia-em-massa` s120/s118)

O bloco de comentário no topo do HTML é o único lugar onde um agente lê **por que** a cena está do
jeito que está. Na `s120` ele afirmava três coisas, e as três eram falsas:

```
declarado no cabeçalho          valor real no código
top:1932                        top:1864
desliza 140px                   -72 * eb(seg(t,0.3,6.0))
"A s118 NÃO muda"               a s118 subiu o mesmo tanto, no mesmo dia
```

Nenhuma nasceu de descuido: **todas foram verdade** no conserto de 08/ago pela manhã. À tarde o
mesmo QC desceu o `top` 68px nas duas pontas, escreveu a explicação nova **logo abaixo** da velha —
e não apagou a velha. O arquivo passou a ter duas notas contíguas se contradizendo, a primeira
sendo a que o `head` mostra.

Por que isso é caro e não é frescura: o cabeçalho é o que barra o **próximo** conserto. A nota
dizia `NÃO ancorar em bottom, mexer aqui quebra a irmã` — instrução certa amarrada a um número
errado. Quem confiasse nela ajustaria a partir de 1932 e abriria um salto de 68px no corte entre as
duas cenas, que é exatamente o defeito que a nota existia para impedir.

E o run fundido **duplica a dívida**: `s118` e `s120` compartilham a geometria do corte por
contrato, então a redação obsoleta estava, palavra por palavra, nas duas. Consertar só a cena
despachada deixa a armadilha inteira do outro lado — e é a irmã que o próximo agente vai abrir,
porque foi ela que o gate apontou.

**A régua:** conserto que muda um número **reescreve a nota que o citava**, não empilha nota nova
embaixo. Se a nota velha explica um estado que não existe mais, ela não é histórico — é uma
afirmação falsa em voz de documentação. E antes de fechar: `grep` do número antigo nas irmãs
declaradas no cabeçalho (`RUN FUNDIDO` / `abre no estado-final de`).

*Custo de aplicar: o hash do HTML muda e o `-4k.mp4` se invalida — re-render, que é luz e é livre.
Cabeçalho verdadeiro vale um encode.*

Agente-raiz: `editor-de-arte` (quem escreve a nota ao consertar) e `qc-visual` (a lente que pegou
esta, na `s120`, como NITPICK de higiene — e acertou em não deixar passar).

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-198` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `198` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-216`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-217 · Anel fechado desenhado como SETOR: o arco de ~360° não tem centro, e o fechamento deixa costura (10/ago/2026, estação ARTE do `quao-fundo-terra`, cenas `s54` e `s56`)

São **duas falhas da mesma família**, e consertar a primeira produz a segunda — por isso elas
andam juntas nesta lei.

**(a) O arco de ~360° é numericamente indeterminado.** Num `<path>` SVG, `A r r 0 0 1 x y` com o
ponto final igual (ou quase igual) ao inicial não define um centro: existe uma família infinita de
círculos passando pelos dois pontos. O Chrome resolve para um centro deslocado e desenha **duas
esferas sobrepostas**. Medido no DOM da `s54`: bbox da casca `1366×1601` onde a geometria pedia
`1244×1244`. **Nenhum gate acusa** — o contrato passa, a carga passa, o overlap passa, e a bbox
errada só aparece no frame. Conserto: **partir cada arco em duas metades de menos de 180°**, pelo
ângulo médio.

**(b) Mas o setor fechado com `L`+`Z` deixa uma COSTURA RADIAL visível.** A metade resolve (a),
e aí o anel passa a ser um *setor* — e todo setor fecha com uma linha reta do raio externo ao
interno. Nas duas cenas essa linha ficou à vista, cortando a casca do planeta como um risco fino.
Auditado a olho em `s54` t=11,0 e `s56` t=6,0: a costura é discreta em 4K mas mora no objeto
central da cena.

**A regra que fecha as duas:** enquanto o anel **cresce angularmente** (construção word-locked), o
setor é a forma certa e a costura é o próprio bordo do que ainda não fechou. **Quando o anel chega
ao estado FECHADO, ele deixa de ser setor** — desenhe-o como dois círculos concêntricos com
`fill-rule:evenodd`, ou um `<circle>` com `fill:none` e `stroke-width` igual à espessura. Nenhum
dos dois tem costura, porque nenhum dos dois tem extremidade.

*Diagnóstico de campo: viu risco fino atravessando uma casca circular? Não é artefato de encode
nem de scrim — é o `Z` do setor. Procure o `L` no `d`.*

Agente-raiz: `editor-de-arte`.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-199` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `199` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-217`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-218 · Gradiente em `objectBoundingBox` dentro de elemento que CRESCE repinta a rampa a cada frame (10/ago/2026, estação ARTE do `quao-fundo-terra`, cena `s57`)

`gradientUnits` é `objectBoundingBox` por omissão, e isso significa que as paradas do gradiente são
relativas **à caixa do elemento, não ao mundo**. Num instrumento que cresce — coluna de termômetro,
barra que sobe, régua que se estende — a caixa muda a cada frame, então **o topo do elemento recebe
sempre a cor da última parada**. Efeito medido na `s57`: a coluna marcando **30 °C aparecia com a
ponta laranja**, a cor dos 200 °C. O número estava certo, a altura estava certa, e a cor mentia.

Conserto: `gradientUnits="userSpaceOnUse"` com `x1/y1/x2/y2` ancorados **na escala do instrumento**,
não no elemento (na `s57`: 0 °C em y=1690, 200 °C em y=430). Aí a rampa é do mundo, e qualquer
altura da coluna lê a cor que aquela altura significa.

Vale para tudo que **cresce e é colorido por valor**: termômetro, barra de progresso térmico,
medidor com zona vermelha, régua de profundidade com gradiente. Se o elemento tem tamanho fixo, o
default é inofensivo — o defeito nasce do crescimento.

*Irmã da [ARTE-193]: as duas são o mesmo erro de categoria — calibrar o canal errado e obter uma
imagem que mente com todos os números certos.*

Agente-raiz: `editor-de-arte`.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-200` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `200` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-218`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-219 · Câmera que RECUA precisa de sangria: abaixo de 1× o SVG expõe a própria borda (10/ago/2026, estação ARTE do `quao-fundo-terra`, cena `s53`)

Push-in é seguro; **recuo não é**. Ao afastar a câmera para 0,44×, um SVG de 3840×2160 passa a
ocupar menos que o palco e **mostra a borda do próprio viewBox** — o resto da tela sai preto. O
sintoma seguinte é pior porque parece desenho: com o viewBox apertado, a geometria orgânica é
**clipada numa reta horizontal**, e um globo que termina em linha reta lê como decisão de arte
ruim, não como corte de viewport.

**Régua:** todo palco que a câmera vai recuar nasce com sangria — viewBox maior que o quadro na
razão do recuo máximo (recuo de 0,44× pede pelo menos 2,3× de folga linear), com o conteúdo
centrado. E o teste é barato: um `shot.mjs` no instante de recuo máximo, que é sempre o que a
coreografia declara.

*Diagnóstico de campo: forma orgânica que termina em reta perfeita nunca é desenho — é borda de
viewport. Antes de mexer no path, confira a escala da câmera naquele t.*

Agente-raiz: `editor-de-arte`.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-201` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `201` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-219`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-220 · `__prepararCaptura` sem `return` deixa o `.then` do t=0 repintar por cima do instante pedido (10/ago/2026, estação ARTE do `quao-fundo-terra`, achado pelo lote C na `s80`)

O molde da casa escreve `window.__prepararCaptura = function(){ window.__renderAt(0); }` — **sem
`return`**. E nem o `shot.mjs` (linha 61) nem o `render/capturar.mjs` (linha 264) aguardam o
retorno: o `page.evaluate` do Playwright só espera quando a função **devolve** a promise. Resultado:
o seek do `t=0` continua correndo, e quando ele termina o `.then` **redesenha em t=0 por cima do
instante que já foi pedido**. Medido na `s80`: **4 shots de 4,6 s a 11,2 s saíram byte-idênticos**
(`md5sum` igual nos quatro), todos com o quadro do t=0. **O frame sai errado e o log diz `ok`.**

**A cura é um contador de geração**, e ela cabe em cinco linhas:

```js
var GEN=0;
window.__renderAt=function(t){
  var g=++GEN;
  try{ desenhar(t); }catch(e){}
  return Promise.all(jobs).then(function(){ if(g===GEN){ try{ desenhar(t); }catch(e){} } });
};
window.__prepararCaptura=function(){ return window.__renderAt(0); };
```

**Duas coisas medidas que impedem o pânico — e uma que impede o descaso.**

Varri as 30 cenas com `<video>` do `quao-fundo-terra` lendo o `currentTime` real depois de
`__renderAt(t)`: **27 avançaram**, e as 3 que não avançaram são **design declarado no código**
(`s82` tem `var CONG=6.00` com o comentário *"parado de propósito"*; a `s80` coreografa planos em
frames fixos; a `s09` tem `if(t>9.05) return` porque *"o real já saiu de cena"* — esta última foi
falso positivo do meu próprio probe, que sorteou t=85% da duração). Ou seja: **hoje o defeito está
mascarado** pelos `waitForTimeout` do `shot.mjs` (2600 ms quando há vídeo) e pelo fato de o
`capturar.mjs` renderizar **em sequência a partir de t=0**, onde não há instante mais novo para
atropelar.

Onde ele NÃO está mascarado é no **frame avulso** — `shot.mjs` num `t` arbitrário, que é
exatamente a ferramenta com que esta casa AUDITA. *Um defeito que só aparece na medição corrompe
justamente o instrumento de medir.*

**Por isso a regra é de ORIGEM, não de mutirão:** 25 das 30 cenas não têm a trava e **nenhuma delas
tem defeito medido** — reescrever 25 ativos pagos por um defeito latente é o oposto do que esta
casa manda fazer. A trava entra no **molde** (`editor-de-arte.md`), para toda cena nova nascer com
ela, e a lista das 25 fica no diário do projeto para quem for renderizar. Cena antiga só se mexe
com defeito **medido**, e a medida é:

```
node scripts/qc-video-avanca.mjs out/<proj>/graphics/<cena>.html
```

Ele lê o `currentTime` de cada `<video>` em dois instantes e diz **quantos de quantos** pararam —
o denominador importa, porque congelar pode ser design, e quem lê decide contra o cabeçalho da
cena.

Agente-raiz: `editor-de-arte` (o molde) — e o `shot.mjs`/`capturar.mjs` ficam como estão: quem
tem de devolver a promise é a cena, não o capturador.

---

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-202` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `202` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-220`. Ver `seed/DE-PARA-LEIS.md`.

---

## [ARTE-221] · O gate que delega ao humano a medição que a máquina sabe fazer não é um gate

**Medido em 10/ago/2026, no QC do `quao-fundo-terra`.** A `s12` e a `s98` usavam o **mesmo item do
Storyblocks** (id `353848549`), baixado duas vezes no mesmo dia por caçadas diferentes, com nomes
diferentes (`s12-descida-por-poco-com-canos-e-cabos.mp4` e
`s98-descida-por-poco-de-mina-canos-cabos.mp4`). O mesmo plano ia ao ar duas vezes, com **891 s** de
intervalo e **1,9 s de material sobreposto** — e a `s12` ainda declarava no cabeçalho, de boa-fé,
*"Sem clipe repetido (ARTE-108)"*.

O `qc-clipe-repetido` **viu o par** (as duas `_PROCEDENCIA.json` apontam a mesma URL) e imprimiu
`⚠ … confira por visão se não é o mesmo plano reencodado`. O comentário do próprio código dizia a
razão: *"pode ser um reencode, e daqui não dá para saber"*.

**Dava para saber, e o preço era um `ffmpeg`.** Bytes distintos não separam "página 3 do PDF" de
"segundo download do mesmo vídeo", mas o **pixel** separa. O gate agora decide sozinho: decodifica
**dois** instantes de cada arquivo (10% e 55%), reduz a 32×18 em cinza e compara a **diferença média
por pixel**.

Três decisões que fazem a medida funcionar, cada uma contra um jeito de errar:

- **Distância, não hash exato.** Dois reencodes do mesmo plano dão pixels *quase* iguais e nunca
  idênticos; hash exato responderia "diferente" e recriaria o buraco por outro caminho. Limiar
  medido: 4/255 por pixel absorve a perda dos reencodes e fica muito abaixo da distância entre dois
  quadros de verdade (0,0 contra 30+).
- **Dois instantes, não um.** Clipe que abre em preto colide no t≈0 — um instante só transformaria
  "os dois começam escuros" em "são o mesmo plano".
- **Não medir é um veredito, e ele NÃO é "igual".** Sem `ffmpeg`, sem arquivo ou sem decodificar, a
  função devolve `null` e o gate volta a avisar. Um array vazio faz `every()` responder `true`, e
  isso reprovaria o vídeo inteiro por não ter conseguido medir nada.

O falso positivo do `ceuta` (três páginas de um PDF acusadas como o mesmo plano) **continua
resolvido**: as páginas têm pixels diferentes, e agora o aviso delas diz *"o CONTEÚDO é distinto,
medido por pixel"* — afirmação provada, no lugar de uma tarefa passada adiante.

**A régua geral:** quando um gate escreve *"confira por visão"* no meio de uma lista, ele está
gerando trabalho que ninguém vai fazer — foi um aviso entre doze. Antes de aceitar um aviso assim
num gate, pergunte se a distinção que ele delega é mecânica. Se for, ela é do script.

Agente-raiz: `scripts/qc-clipe-repetido.mjs` (consertado nesta sessão) — e `pesquisa-imagens`, que
baixou o mesmo item duas vezes sem consultar o que as outras cenas já tinham na pasta `_media/`.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-203` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `203` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-221`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-222 · Clipe substituto se julga varrendo o ARQUIVO INTEIRO — o defeito costuma ser o offset, não a mídia (10/ago/2026, `card01` do `galaxia-arco-flecha`)

**O caso.** A recaça de acervo proibido trocou o footage do card de título. A arte julgou o
substituto DENTRO da cena — método certo — e reprovou: *"veio um CÂNION ao crepúsculo, e o conceito
pede o núcleo da Via Láctea"*. Pediu nova caça, e uma caça de 2 buscas × 3 tentativas rodou 32
minutos segurando a trava do Shutterstock, que outras produções disputam.

O clipe estava CERTO. É um timelapse *holy-grail*: começa em crepúsculo azul com o cânion dominando
e a noite fecha ao longo do arquivo. Medido frame a frame nos 7,27 s: t=1,5 e t=2,8 são crepúsculo;
**em t=4,5 o núcleo da Via Láctea já domina** e de 5,0 a 7,2 está no auge, com o cânion reduzido a
uma faixa escura no rodapé — exatamente a capa que o conceito pedia. O que estava errado era uma
linha: `fClip(t){return 0.96+0.48*t}`. O offset 0,96 foi escolhido a dedo **no clipe antigo**; no
arquivo novo ele aponta para outro conteúdo. Mesma linha de código, outra imagem.

**A regra.** Antes de reprovar um substituto por conteúdo, **amostre o arquivo inteiro**, não a
janela que o `fClip` herdado aponta. O veredito *"a mídia não serve"* só vale depois disso; até lá o
que existe é *"o offset não serve"*, que custa uma linha em vez de uma caça. Vale principalmente em
timelapse, aproximação e qualquer clipe cuja luz ou enquadramento MUDA ao longo do arquivo — nele,
dois instantes do mesmo arquivo são duas mídias diferentes.

**O aviso já estava escrito.** O `_via` do `_PROCEDENCIA.json` dizia, em letras maiúsculas:
*"ATENÇÃO AO OFFSET: o clipe começa em crepúsculo; o núcleo entra por volta de 3,60 s"*. Quem caça
mede o arquivo e anota onde está o conteúdo; quem julga leu o frame antes de ler a anotação. **Ao
receber mídia recaçada, leia o `_via` ANTES de tirar o primeiro shot** — ele diz onde olhar.

**A simétrica continua valendo:** trocar o `src` não basta ([o offset é conteúdo, não geometria]).
As duas metades da mesma lei: quem instala reancora, e quem julga não condena sem varrer.

Agente-raiz: `.claude/agents/editor-de-arte.md` (§ reancoragem de janela ao trocar footage) e a
rotina de julgamento da estação ARTE.

---

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-204` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `204` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-222`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-223 · Crédito ilegível tem TRÊS causas, não duas — e a do meio é o texto ESCURO sobre papel claro (10/ago/2026, estação ARTE do `galaxia-arco-flecha`, cenas s31/s34/s63/s69)

**O caso.** O `qc-rodape-contraste` reprovou 4 das 50 cenas: s34 2,24:1 · s31 2,43:1 · s63 2,87:1 ·
s69 2,92:1, contra piso de 3:1. O gate imprime a receita junto do laudo — e ela separava dois casos
pelo brilho do FUNDO: fundo claro → *scrim escuro no `::before`*; fundo escuro → *clarear o texto*.
Nas quatro ele mandou o que o brilho do fundo pedia, e **em duas a receita estava invertida**.

s63 e s69 são cards de DOCUMENTO: papel `#ECE6D8`, tinta `#141A22`, e o crédito da fonte escrito em
`color-mix(in srgb, var(--tinta) 46%, transparent)` — tinta escura TRANSLÚCIDA sobre papel claro.
O fundo é claro, então o gate mandou escurecê-lo. Escurecer o que está atrás de um texto escuro
**derruba** o contraste, e ainda planta uma mancha preta no meio de um clipping de jornal. Seguir a
instrução teria piorado a cena e reprovado de novo, dessa vez sem entender por quê.

**A regra.** Antes de escolher a cura, pergunte **de que cor é o texto**, não só quanto brilha o
fundo. São três casos:

1. **Texto claro sobre fundo que clareou** (s31, s34: o mosaico LoTSS e a mancha de rádio em
   falsa-cor não são escuros, são cinza-médio) → **scrim local no `::before`**, inset negativo,
   `z-index:-1`, radial-gradient escuro. No `::before` porque não desloca o texto e herda de graça a
   opacidade animada do pai. *Medido: 2,43 e 2,24 → 7,83:1 nas duas.*
2. **Texto escuro sobre papel claro** (s63, s69) → **subir a opacidade da TINTA**, jamais scrim.
   *Medido: 46% → 72% levou 2,87 e 2,92 a 6,27 e 6,38:1, e a hierarquia do card continua de pé —
   manchete 100%, corpo 92%, crédito 72%.*
3. **Texto apagado sobre fundo escuro de verdade** → clarear a cor / subir o patamar de opacidade.

`text-shadow` não resolve nenhum dos três: marca a borda da letra e deixa o miolo igual.

**A raiz era barata de consertar.** O gate JÁ media a luminância do texto (`Ltexto`, na mesma função
que calcula a razão) e simplesmente não a levava até a prescrição, que decidia só por `Lfundo`.
Consertado em `scripts/qc-rodape-contraste.mjs`: quando `Ltexto < Lfundo`, o laudo passa a dizer
*"NÃO use scrim"* e a receita da tinta. Reproduzi o defeito numa cópia da s69 com os 46% de volta e
o ramo novo saiu correto (texto L=0,250 · fundo L=0,825).

**A lição de fundo, que vale além deste gate:** *instrução automática que acerta em dois terços dos
casos é pior que instrução nenhuma no terço restante* — porque quem a lê não está medindo, está
obedecendo. Gate que imprime conserto tem de derivá-lo da medição inteira que já fez, não da metade
que era mais fácil de ler. É a mesma família da [ARTE-203] (gate que delega ao humano o que a
máquina sabe medir): **receita errada empurra para a versão perigosa**.

Agente-raiz: `scripts/qc-rodape-contraste.mjs` (a prescrição agora deriva de `Ltexto` × `Lfundo`) e
`.claude/agents/editor-de-arte.md` (§ crédito de fonte: a cura depende da cor do texto).

---

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-205` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `205` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-223`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-224 · Gate que acha por VOCABULÁRIO e ignora a declaração da cena diz "isento" onde devia dizer "reprovado" (10/ago/2026, `s67` do `galaxia-arco-flecha`)

**O caso.** A `s67` é showpiece — o círculo de giz âmbar do voluntário sobre o mosaico LoTSS. O
crédito dela, `LOFAR · LoTSS DR2 · Figura: Hota et al. 2026, MNRAS`, saía em `#9FB0C8` com teto de
opacidade **0,60** sobre um mosaico azul-CLARO: **1,39:1**, o pior crédito do vídeo. O
`qc-rodape-contraste` rodou nas 50 cenas e não disse uma palavra sobre ela. Não disse "reprovada":
disse **"sem crédito de rodapé"**, que qualquer um lê como *cena que não precisa de crédito*.

Achei olhando o frame na auditoria por amostragem. **A ferramenta cobria a cena e afirmava o
contrário do que o frame mostrava.**

**A causa.** O gate encontrava o crédito por regex de CONTEÚDO: começa com `Fonte:`/`Imagem:`/
`Foto:`/`Vídeo:`/`Dados:`, ou contém `NASA|ESA|NOAA|Reuters|Getty|Shutterstock|CC BY|©`. O crédito
da `s67` começa pelo **nome do acervo** — nenhuma das duas portas. E o elemento **já declarava
`data-qc-papel="credito"`**: a cena tinha dito, em contrato, o que aquele texto era, e o gate
preferiu adivinhar por dicionário.

**A regra, para quem escreve gate.** *Quando a peça DECLARA o que ela é, a declaração ganha da
heurística.* Regex de vocabulário é bom para pescar o que ninguém marcou; é péssimo como única
porta, porque só reprova o que já está escrito no formato que o autor do gate imaginou. Consertado
em `scripts/qc-rodape-contraste.mjs`: `data-qc-papel="credito|fonte"` basta, independente do texto.

**E havia uma segunda porta, maior que a primeira: o crédito em SVG.** Puxando o fio das cenas que
o gate dava por isentas, achei a `s30` — o showpiece do LOFAR, que escreve `Foto: A. R. Offringa ·
CC BY-SA 3.0` **como `<text>` SVG**, pela função `txt()` que metade das cenas deste estúdio usa para
desenhar texto. O seletor do gate era `div,span,p,figcaption,small,footer`: **nenhum crédito
desenhado em SVG jamais foi medido**, em nenhum vídeo. E o `txt()` já gravava `data-qc-papel` no
elemento — a declaração existia, o varredor é que não passava por ali. Corrigido: `text` entra no
seletor, e `<text>` com filhos `<tspan>` conta como folha. Depois do conserto a `s30` mede **11,24:1**
(ela usa `stroke` escuro com `paint-order:stroke`, que resolve sozinho) — passou, mas por mérito
dela, não por isenção. *Cobertura que ninguém contou não é cobertura: é a pergunta que o gate nunca
fez.*

**E a regra de leitura, para quem RODA gate:** *"não encontrei" nunca é sinônimo de "está tudo
bem"*. Um gate tem três respostas — passou, reprovou e **não mediu** —, e a terceira, impressa como
prosa amável no meio de uma lista de ✓, se disfarça da primeira. Ao ler laudo, conte quantas cenas
ele MEDIU contra quantas você mandou: aqui eram 50 mandadas e o crédito de uma delas nunca entrou na
conta. É a mesma família da [SIS-66] (limiar `NaN` reprovando cena boa em silêncio) e da
[qc-carga] que carimba "não medido" como aprovado.

**Conserto da cena:** scrim local no `::before` **e** teto de opacidade 0,60 → 0,92 — as duas
juntas, porque somavam-se três causas (fundo claro, texto claro, crédito semi-apagado) e nenhuma
sozinha chegava ao piso. A discrição do crédito se faz com TAMANHO e posição, nunca apagando o
texto ([ARTE-180]).

Agente-raiz: `scripts/qc-rodape-contraste.mjs` (detecção honra `data-qc-papel`) e a rotina de
auditoria da estação ARTE — **o frame olhado continua sendo o que pega o que gate nenhum vê**.

---

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-206` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `206` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-224`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-225 · O rodapé do palco 4K não cabe TRÊS níveis de texto — o rótulo da mídia vai para o alto (10/ago/2026, `clinopiroxenio-onde-existe` do `planeta-em-meteorito`)

**O caso.** `check-overlap` reprovou a cena com **38.265 px²** de colisão (limiar 560) entre o rótulo
`MICROSCOPIA REAL DO NWA 12774 · LUZ POLARIZADA CRUZADA` e o crédito `Foto: John Kashuba / CU
Boulder`. No frame, os dois textos estavam empilhados na mesma linha de base, um por cima do outro,
ilegíveis — e o crédito, que é obrigação de licença, era o que sumia.

**A causa, que é aritmética e não gosto.** A mídia (círculo de microscopia) desce até y≈1843. Sobram
**317 px** de palco. Nesses 317 px o editor pôs três níveis:

    #nome  top 1810 · 236px  →  desce até ~2093
    #subA  top 2062 ·  80px  →  2062–2158
    #credA top 2078 ·  72px  →  2078–2164

Some as alturas: 236+96+86 = **418 px em 317 px de espaço**. Não havia arranjo possível — a colisão
não foi um deslize de 20 px, foi um orçamento vertical estourado em 100 px antes de escrever a
primeira linha.

**A regra.** Numa cena com mídia grande, o rodapé aceita **DOIS** níveis de texto: o nome-herói e o
crédito. O **rótulo de identificação da mídia** (aquele "MICROSCOPIA REAL DE…", "IMAGEM: SATÉLITE…")
é o terceiro e **vive no ALTO do palco**, sobre o navy limpo acima da mídia — onde, em cena de mídia
centrada, quase sempre há 150 px vazios. Ele é também o texto certo para subir: é temporário (entra,
informa, aposenta-se), enquanto nome e crédito ficam.

**Antes de posicionar, some as alturas contra o espaço livre.** `2160 − (base da mídia)` é o
orçamento; 236px de nome-herói já come dois terços dele. E o crédito **nunca** é o que cede: mover o
crédito para caber o rótulo troca um defeito de layout por um defeito de licença.

**Agente-raiz:** `editor-de-arte` (§ orçamento vertical do rodapé).

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-207` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `207` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-225`. Ver `seed/DE-PARA-LEIS.md`.

---

### ARTE-226 · Zoom de câmera com origem descentrada tem TETO calculável — acima dele, come DADO nas pontas (10/ago/2026, `escala-mais-velho-terra-lua` do `planeta-em-meteorito`)

**O caso.** Cena de linha do tempo com câmera de mergulho: `scale(S)` sobre `#cam`, com
`transform-origin` em (1420, 1120) para "mirar o meio da fresta", `S` chegando a **1,33**.
`qc-fora-do-quadro` acusou **34 textos cortados**, e não eram enfeites: o número-herói **`4,563 Ga`
perdia o `4`** (lia-se ",563 Ga"), `LUA (CROSTA)` cortava 460 px, `4,51 Ga` 227 px, e a legenda que
ensina a unidade — `Ga = BILHÕES DE ANOS ATRÁS` — 473 px. A cena mutilava o dado principal no
instante em que a fala o dizia.

**A conta que decide antes de renderizar.** Com origem em `cx` e escala `S`, o ponto `x` do palco vai
para `cx + (x−cx)·S`. Logo o teto é:

    S_max = min( (3840 − cx) / (x_max − cx) ,  cx / (cx − x_min) )

onde `x_min`/`x_max` são as bordas do texto mais externo. Aqui: `x_max≈3595`, `cx=1420` →
**S ≤ 1,11**. A cena pedia 1,33. *Origem descentrada não é de graça: quanto mais longe do centro
você mira, menos zoom o quadro suporta, porque o lado oposto sai três vezes mais rápido.*

**O corolário que mordeu no conserto, e é a parte que ninguém espera.** Baixar o zoom fez aparecer
uma colisão que o zoom **mascarava**: `4,54 ✕ TERRA (FORMAÇÃO)`, 1.478 px². Escala grande AFASTA os
textos em pixels de tela; escala pequena os aproxima. **`check-overlap` e `qc-fora-do-quadro` se
movem em direções OPOSTAS quando você mexe no `scale`** — existe faixa de zoom em que nenhum dos dois
passa, e calibrar o número é rodar em círculo entre dois laudos vermelhos.

**Conserte a geometria, não o zoom.** Nesta cena os dois defeitos eram de base, e o zoom só os
revelava:
- os números da régua estavam em `y=1370`, a mesma faixa dos rótulos de marco (`top:1348`) → subiram
  para `y=1200`, acima da linha do eixo. Colisão morta, em qualquer escala.
- os rótulos das PONTAS eram `text-anchor="middle"` sobre a extremidade do eixo, logo metade nascia
  fora → **`start` na primeira, `end` na última**. Corte morto, em qualquer escala.

Com as duas causas resolvidas, o zoom voltou a ser escolha estética (ficou 1,085) em vez de a
variável que compra um defeito para pagar outro.

**Agente-raiz:** `editor-de-arte` (§ câmera: calcular o teto de escala antes de animar; rótulo de
extremidade ancora para dentro).

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-208` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `208` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-226`. Ver `seed/DE-PARA-LEIS.md`.

---

## [ARTE-227] · Crédito no ar antes da mídia que ele credita — a [ARTE-179] lida pela metade

**Medido em 10/ago/2026, QC do `quao-fundo-terra`.** Dois lotes independentes do `qc-visual`
acharam o mesmo defeito em cenas diferentes, e o gate novo confirmou em quatro: a linha de
atribuição está legível **antes de a foto entrar**.

| cena | crédito legível desde | mídia entra em | tempo creditando o vazio |
|---|---|---|---|
| `s13` | 0,00 s | 5,60 s | **54% da cena** |
| `s24` | 0,00 s | 4,20 s | 41% |
| `s65` | 0,00 s | 6,00 s | 25% |
| `s55` | 0,00 s | 4,20 s | 25% |
| `s77` | ~0,3 s | 7,80 s | 36% |
| `s109` | 0,00 s | 16,96 s | **89%** |

**A causa é uma lei boa aplicada onde ela não vale.** A [ARTE-179] manda fonte e crédito **nascerem
no ar** (base ≈0,32) em vez de subirem do zero, e o raciocínio dela é correto: o que já está no
quadro 0 não é informação chegando, **é cenário** — e apontar o dedo do espectador para a letra
miúda no segundo em que ela sobe é pior que deixá-la parada. Isso vale **quando a mídia também está
no quadro 0**.

Virou *"o rodapé existe desde t=0 com 0,32"*, sem a condição. E 0,32 em 4K é perfeitamente legível:
o espectador lê "Foto: Fulano — CC BY-SA 4.0" sobre uma tela **sem foto nenhuma**. A cena credita o
que não está lá.

**A regra completa:** *crédito nasce no ar junto com o que ele credita.* Se a mídia entra em t=N, a
opacidade do crédito se ancora em N — e aí ele nasce no ar **daquele** instante, que é o quadro 0
dele. O custo é **uma estreia** de bloco de texto na janela de N (o `qc-carga` conta), e essa janela
quase sempre tem folga porque a entrada da mídia já está lá.

**Linha MISTA não se apaga, se PARTE.** Rodapé que junta fonte de dado e crédito de foto (`"Fontes:
Skuf'in 2021 · Van Ittersum & Wansink 2012 · Foto: Stock Catalog, CC BY 2.0"`, a `s13`) tem as duas
metades com relógios diferentes: o dado é legítimo desde t=0, a foto não. Parta num `<span>` e dê ao
pedaço da foto o envelope da foto — apagar a linha inteira violaria a [ARTE-104].

**Crédito de DADO fica como está.** "Pressão estimada pelo gradiente litostático · ETH Zürich" (a
`s60`) não tem foto para esperar; o dado já está na tela. O gate aprendeu isso na primeira rodada,
depois de acusá-la — e alarme falso ensina a ignorar o gate, que é o único jeito de perder o caso
real junto.

**Gate:** `node scripts/qc-credito-fantasma.mjs out/<proj>` (nasceu nesta sessão). Ele amostra a cena
e pergunta, em cada instante: *há crédito de imagem legível e NENHUMA mídia real na tela?* Isenção
declarada: `data-qc-credito-antecipado="<por quê>"`.

⚠️ **O exemplar que quase virou régua.** Um dos laudos apontou a `s65` como "a cena que faz certo, o
exemplar a copiar". Ela tem o defeito — o comentário dela diz literalmente `/* crédito: nasce no ar
(ARTE-179) e sai com as fotos */`, com as fotos entrando aos 6,00 s. *Julgamento por visão num
defeito de TEMPO precisa de medida: o olho vê o quadro, não a linha do tempo.*

Agente-raiz: `editor-de-arte` (o molde do rodapé) — e a redação da própria [ARTE-179], que não disse
"quando a mídia já está no ar" porque, no caso em que ela nasceu, estava.

> ⚠️ **Esta lei nasceu como ARTE-204 na `estudio-top10` em 10/ago/2026** e foi
> renumerada para 209 ao ser RECUPERADA em 11/ago: duas leis diferentes tinham recebido o
> mesmo número na mesma máquina, no mesmo dia. Ver `seed/DE-PARA-LEIS.md`, 5ª leva.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-209` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `209` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-227`. Ver `seed/DE-PARA-LEIS.md`.

---

## [ARTE-228] · A máscara de dígito do `qc-carga` não cobre o count-up que termina em PALAVRA

**Medido em 10/ago/2026, RENDER do `quao-fundo-terra`.** A cena `s108-o-quadro-das-respostas` estava
**barrada no portão** — e portão barrado não é opinião, é render que não acontece. O laudo:

```
  densidade: 6 textos @11.5s (teto 9) · 35 info @21.4s (teto 77)
  ritmo:     0.37 entradas/s (teto 0.9) · pior 1s = 2 @16.8s (teto 4)
  vida:      menor texto no ar 0.2s (piso 0.5)
  ✗ VIDA: 1 bloco(s) de texto abaixo de 0.5s — "3 km"=0.2s
```

Todas as outras medidas passavam com folga. O "bloco que pisca 0,2 s" era o count-up:

```js
if(n2){ var v2=4*eo(seg(t,17.30,0.95)); n2.textContent=(v2>3.55?'QUASE 4 km':Math.round(v2)+' km'); }
```

**O cabeçalho do próprio gate promete que isso não acontece** — *"Contado POR ELEMENTO, não por
string — senão um count-up (mesmo elemento, dígito mudando) apareceria como 'texto que pisca 0,1 s'"*.
A promessa era cumprida por uma máscara de dígito (`"3 km"` e `"12 km"` → ambos `"# km"`), e ela vale
**enquanto o texto for dígito puro**. No instante em que o contador ganha um qualificador — `QUASE`,
`MAIS DE`, `CERCA DE`, `~` —, a chave vira `"QUASE # km"`, outra string, e o trecho numérico morre ali:
a vida medida é o tempo entre o número aparecer e a palavra entrar, que num count-up de 0,95 s é
sempre uma fração de segundo.

**Por que a unificação existente não pegava:** ela unia por PREFIXO estrito (`"EN"→"ENERG"`), porque
nasceu para a etiqueta datilografada, que cresce pela direita. O count-up qualificado cresce pela
**esquerda**. Uma letra de código: `startsWith` → `startsWith || endsWith`, com as outras duas
condições intactas (nunca coexistem no mesmo frame + estreia contígua ao fim da anterior) — são elas,
não a direção do crescimento, que impedem a anistia geral.

Depois do conserto, a mesma cena, **sem tocar em um pixel da arte**:

```
  ritmo:     0.32 entradas/s · pior 1s = 1 @0s
  vida:      menor texto no ar 4.1s (piso 0.5)
  ✓ dentro dos tetos
```

De 0,2 s para 4,1 s. O número não melhorou: ele **passou a ser medido**. Note que o RITMO também
caiu (0,37→0,32 e a pior janela de 2→1) — a chave partida inflava duas medidas ao mesmo tempo, e a
segunda passava despercebida porque estava dentro do teto.

**A regra, e ela é maior que este gate:** quando um gate reprova exatamente o gesto que o cabeçalho
dele declara isento, o defeito é do gate — não se reescreve a arte para caber na métrica. E a
verificação que separa um caso do outro custa um comando: *o laudo se contradiz?* Aqui contradizia —
6 textos simultâneos num pico e um deles vivendo 0,2 s numa cena de 21,6 s com ritmo de 0,37/s.
*Métrica contaminada mente com a mesma confiança de uma métrica boa* (o cabeçalho do gate já dizia).

**Agente-raiz:** `scripts/qc-carga.mjs` (unificação de chaves — aceita prefixo **ou** sufixo).
Nenhum agente de arte errou: a cena estava certa desde 09/ago e ficou barrada por isso.

> ⚠️ **Esta lei nasceu como ARTE-205 na `estudio-top10` em 10/ago/2026** e foi
> renumerada para 210 ao ser RECUPERADA em 11/ago: duas leis diferentes tinham recebido o
> mesmo número na mesma máquina, no mesmo dia. Ver `seed/DE-PARA-LEIS.md`, 5ª leva.

> ⚠️ **RECUPERADA em 11/ago/2026.** Esta lei foi escrita como `ARTE-210` em 10/ago,
> apagada horas depois pelo commit `d5a9837` junto com outras 23, e ficou fora do repositório
> por um dia. Nesse intervalo a `estudio-top10` reutilizou o número `210` para uma lei
> NOVA — então a recuperada entrou pelo fim, como `ARTE-228`. Ver `seed/DE-PARA-LEIS.md`.


## [ARTE-229] · O ARCO VISUAL ENVELHECE E NÃO AVISA — depois do re-espelho ele passa a mandar sobre um vídeo que não existe

**Medido em 11/ago/2026, `especies-humanas`, estação REGÊNCIA DE IMAGEM.** O `conceito-visual.json`
estava no disco, íntegro, com o arco escrito por extenso ("a história de uma CASA que esvazia"), os
picos reservados e as notas de `fluxo`. O contrato do regente diz, com razão, que **quando o arco
existe ele MANDA**. Só que o vídeo tinha sido **re-espelhado horas antes**, por densidade — 25 cenas
de arte viraram 126 —, e o arco continuava falando do espelho anterior:

| | |
|---|---|
| cenas vivas no espelho | **154** |
| cenas para as quais o arco foi escrito | 43 |
| cenas vivas **com** nota de arco | **25** |
| cenas vivas **sem** nota de arco | **129** |
| ids do arco que já não existem | **18** (um deles SHOWPIECE; dois em `fluxo.fundir`) |

**Por que isto não se parece com um defeito:** o arquivo abre, valida, tem conteúdo rico e responde
sobre 25 cenas de verdade. Nada nele está corrompido — ele só responde sobre **outro vídeo**. E a
falha se disfarça de escolha: para as 129 cenas restantes o arco fica em SILÊNCIO, e silêncio por
desatualização é indistinguível de silêncio deliberado. O regente lê "esta cena não tem nota de arco"
como *liberdade concedida* quando o fato é *arco ausente* — e sem ninguém tendo reservado os respiros
e os picos, a distribuição de ritmo do vídeo inteiro fica sem dono, que é exatamente o buraco que a
estação de regência existe para tapar. Pior: os dois `fluxo` com `fundir: true` mandavam fundir cenas
com ids mortos (`s04+s05`, `s09+s10`), instrução que a arte executaria contra o vazio.

**A régua: a cobertura do arco é um NÚMERO, e ele tem de ser impresso.** "O arco existe" e "o arco
descreve este vídeo" são afirmações diferentes, e só a segunda autoriza obedecê-lo. `existsSync` não
distingue as duas. Consertado em `scripts/regencia-insumo.mjs`, que passou a medir e a gritar no
rodapé:

```
  ⚠ ARCO PARCIAL: 25/154 cenas vivas têm nota de arco — 129 sem.
     18 id(s) do arco não existem mais no espelho (1 showpiece) → arco escrito ANTES do re-espelho
```

O bloco `arco_cobertura` no insumo carrega os ids mortos, os showpieces mortos e os `run` com id
morto, um a um; e a lista de showpieces entregue ao agente passa a excluir os que não existem, para
ninguém reservar pico numa cena que não vai ao ar. **Nada disso conserta o arco** — refazê-lo é da
estação de ARTE, e este vídeo segue devendo direção para 129 cenas. O que a medição garante é que a
estação seguinte não seja *enganada* por ele.

**Vale para todo registro que sobrevive a um re-espelho**, não só para o arco: `conceito-visual.json`,
`textos-tela.json`, `pauta-*.json`, `regencia.json`. O re-espelho troca o eixo do vídeo e nenhum deles
é reescrito junto; quem os lê depois precisa medir a interseção de ids antes de obedecer. Irmã da
[PESQ-79] pelo outro lado: aquela mede o registro que aponta para arquivo morto, esta mede o registro
que aponta para CENA morta.

### ARTE-230 · Num gráfico de ÁREA, o olho integra a ÁREA — calibrar só a ALTURA mente com os dois números certos (10/ago/2026, `ceuta-travessia-em-massa` s80)

> ⚠️ **RESTAURADA em 11/ago/2026 — e ela é a 25ª vítima do apagamento de `d5a9837`, a única que
> nenhum gate podia encontrar.** As outras 24 deixaram o número VAGO, e é assim que se acha lei
> sumida. Esta não: `ARTE-193` foi ocupado no mesmo dia por outra lei (a do `line-height`), então
> não havia buraco nenhum para procurar. Ela só apareceu porque o `editor-de-arte` continuava
> citando `[ARTE-193]` para o assunto ERRADO — o agente obedecia, com confiança, a regra de outra
> lei. *Apagamento que não deixa vaga é invisível para quem procura vaga: a prova de vida de uma lei
> é o TEXTO que a cita, não o número que ela ocupa.* Nasceu como `ARTE-193` e volta como `ARTE-230`.


O M10 da `s80-duas-levas` compara dois gastos: **€ 74,66 mi até 2010** contra **€ 140 mi a partir de
2018** — razão **1,875:1**. As alturas de pico estavam **exatas**: 380 px e 713 px, medidos no frame
como 416 e 813 px com a ondulação, **1,88:1**. As cifras estavam certas na tela, o eixo começava no
zero, 2001/2010/2018/2026 rotulados. E o desenho ainda assim **exagerava o dado em 26%**.

O que ninguém tinha calibrado é o **FATOR DE FORMA** — a integral do perfil normalizado de cada
figura. A onda 1 usava `bump = sin(π·u^0,92)^1,35` (fator **0,5859**: uma corcova, que esvazia as
laterais) e a onda 2 usava `s = eo(u/0,55)` com taper (fator **0,8361**: um platô, que as preenche).
Duas figuras com perfis diferentes, comparadas lado a lado: áreas de 253.357 px² e 602.673 px² →
**2,379:1** na analítica e **2,356:1** contando pixel pintado no frame.

**A regra:** num gráfico de área, o valor está codificado em DUAS variáveis visuais ao mesmo tempo —
altura de pico e área preenchida. O leitor lê a que ocupa mais retina, e num gráfico de área é a
ÁREA. Se as figuras comparadas não têm o **mesmo fator de forma**, a razão de área **≠** a razão de
altura, e a que o olho vê é a errada. Ou os perfis são idênticos (e aí a altura basta), ou a área é
calibrada explicitamente.

**O conserto foi UM NÚMERO:** expoente `1.35` → `0.586` na onda 1. A área sobe de 314.580 px para
396.435 px e a razão cai de 2,356:1 para **1,870:1** — 0,3% do dado. O pico **não muda** (o máximo de
`sin(...)^p` é 1 para qualquer p: bbox idêntico, 416 px), as pontas seguem tocando o zero, a onda 2
não é tocada, nenhum rótulo se move. O sino vira uma abóbada em vez de uma corcova.
⛔ Não unificar o perfil com o da onda 2 (dá 1,667:1, subdimensiona 11%, e abre um degrau de 380 px
em 2010) e ⛔ não mexer nas alturas 380/713, que já estavam exatas.

**Como verificar sem conta de papel** — renderize um PROBE da própria cena com os rótulos ocultos
(`.lbl{display:none}`) e CONTE o pixel pintado de cada figura:

```bash
node scripts/shot.mjs cena.html <t> /tmp/probe.png   # com o CSS do probe injetado
# razão de área medida ÷ razão do dado → tem de dar ~1,00
```

**Por que sobreviveu a três rodadas de QC:** o achado nasceu no L1/L2 e cada laudo o repassou com o
mesmo peso ATENÇÃO e **sem conserto testado**. O que o destravou foi RENDERIZAR o conserto proposto
num probe **antes** de prescrevê-lo. *Prescrição não medida é prescrição que ninguém aplica* — quem
recebe um número sem prova gasta a sessão re-derivando a prova, e por isso pula para o item barato.

---

### ARTE-231 · Objeto LINEAR desenhado num vão estreito lê como o objeto VERTICAL mais próximo — barreira se afirma pelo COMPRIMENTO (10/ago/2026, `ceuta-travessia-em-massa` s110)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `ARTE-194` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `ARTE-194`; volta como
> `ARTE-231`, porque o número antigo tem dono legítimo. Recuperada de `5d313d3` (10/Ago 21:23).


A `s110-como-funciona` narra a devolução a quente: a silhueta **desce a cerca**, toca o chão
espanhol, é levada ao portão, cruza. A cerca de Ceuta é o objeto central da cena. O que estava
desenhado: dois montantes verticais a **205 px** um do outro, com **948 px** de altura (razão
**1:4,6**), treliça em X a cada 95 px, e sete anéis de r=52 formando uma coroa de 371 px no topo.
Num quadro de **3840 px**, a estrutura inteira nascia e morria dentro de 205 px.

Ampliado 1:1, é uma **torre de transmissão** — com a concertina lendo como isolador. Um leigo lê
TORRE. Ninguém lê CERCA, porque **cerca é linha, e esta não tinha comprimento nenhum**.

**A regra:** objeto linear — cerca, muro, trilho, dique, ponte, oleoduto, fila — desenhado dentro de
um vão estreito é lido como o objeto VERTICAL mais próximo: torre, poste, andaime, portal. A
identidade dele está na **extensão**, não na altura. Se ele não **sai pelas bordas do quadro**, não é
barreira: é um monumento. E aumentar a altura piora, porque afina mais a razão.

**Detalhe de execução:** a malha não resolve sozinha. Enquanto o desenho estiver confinado a um vão
de 186 px, QUALQUER padrão lê como treliça de estrutura. A malha romboidal fina (passo 118 px,
alcance 520 px, `stroke-width` 5) só funciona **calculada ao longo do eixo do objeto**, atravessando
o quadro — é o que a `s68-poe-voce.html` faz (`for(var x=-400;x<4300;x+=118)`), e é por isso que lá
lê como cerca. Idem a concertina: 7 anéis empilhados sobre 186 px são a "coroa"; distribuídos pelo
comprimento todo, com r de 52 → ~34, são arame.

**O gate que pegou isto não existe — foi o próprio frame.** E a refutação estava DENTRO dele: a cena
usa um inset real do PRODEIN, que mostra a valla verdadeira atravessando o plano de ponta a ponta.
Os dois objetos apareciam no mesmo quadro contando histórias diferentes. **Quando a cena carrega uma
fotografia do objeto que ela também desenha, a fotografia é a régua** — compare os dois no mesmo
frame antes de fechar.

**Colateral de fluxo, e é o que fez o defeito sobreviver duas rodadas:** o laudo misturava cinco
itens de CSS (mudar um número) com **um** item de geometria (redesenhar). Foram aplicados os cinco
baratos e pulado o caro — nas duas passadas, pelo mesmo caminho. Laudo de arte que mistura ajuste de
valor com redesenho tem de cobrar **confirmação item a item**, porque o item de geometria é
sistematicamente o que sobra.

---

### ARTE-232 · Em tela DIVIDIDA, o crédito credita a metade em que ele está (10/ago/2026, `s80` do `galaxia-arco-flecha`)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `ARTE-195` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `ARTE-195`; volta como
> `ARTE-232`, porque o número antigo tem dono legítimo. Recuperada de `5d313d3` (10/Ago 21:23).


**O caso.** A cena é um split de duas metades: à esquerda a foto aérea do Superterp
(LOFAR/ASTRON, CC BY 3.0 — atribuição **obrigatória**), à direita um footage de stock de silhueta
diante de um monitor. O crédito estava em `right:120px`, o padrão da casa (8 das 43 cenas do vídeo).
No frame, ele lê como legenda do footage de stock: a tela **atribui a foto CC BY à imagem errada**, e
a metade que exige atribuição fica sem nenhuma.

**Por que nenhum gate pega.** O `qc-atribuicao.mjs` cobra a EXISTÊNCIA do elemento de crédito contra
a licença da pauta ([ARTE-77]) — a cena passava, e passa. Colisão, fora-do-quadro, carga e contrato
medem geometria e legibilidade, não a que imagem o texto se refere. **Só o frame pega**, e só se
quem olha perguntar *"o que este crédito está creditando daqui de onde ele está?"*.

**A regra.** Crédito é rodapé de canto **enquanto a tela é uma imagem só**. Quando o palco se divide
— split, díptico, tríptico, inset grande —, o crédito vai para o lado da mídia que ele credita, e o
padrão da casa cede: posição de crédito é semântica antes de ser diagramação. Duas fontes distintas
em duas metades = dois créditos, cada um do seu lado. E ao trocar a mídia de uma das metades
(recaça, substituição de acervo), reconferir para onde o crédito aponta — a troca move o referente
sem mover o texto.

Agente-raiz: `.claude/agents/editor-de-arte.md` (doutrina de crédito).

### ARTE-233 · O GATE DE MÍDIA REAL CHAMAVA DE FANTASMA A PROCEDÊNCIA QUE ELE MESMO EXIGE (10/ago/2026, estação ARTE do `quasares-primordiais`)

> ⚠️ **RESTAURADA em 11/ago/2026, e ela é do lote que NENHUM GATE PODIA ACHAR.** Foi apagada pelo
> commit `d5a9837` junto com outras 24, mas — ao contrário daquelas — o número `ARTE-196` foi
> **reocupado no mesmo dia** por uma lei nova. Sem vaga no arquivo, não havia buraco para procurar,
> e a varredura que recuperou as outras passou direto por esta. *Apagamento que não deixa vaga é
> invisível para quem procura vaga.* Ela só apareceu quando a busca deixou de perguntar "que número
> sumiu?" e passou a perguntar **"que TEXTO sumiu?"**. Nasceu como `ARTE-196`; volta como
> `ARTE-233`, porque o número antigo tem dono legítimo. Recuperada de `5d313d3` (10/Ago 21:23).


O `qc-midia-real.mjs` §3 caça "mídia fantasma": caminho de `_media/` que aparece SÓ em comentário,
nunca na tela — a promessa escrita que ninguém cumpriu. A pergunta é boa e o mecanismo é o certo
(procurar o caminho no código VIVO, não perseguir cada forma de atribuição). O que faltava era
saber que **dois nomes canônicos significam o oposto de promessa quebrada**.

O modo `documento` (M05) tem por ESPECIFICAÇÃO **recriar** o clipping em HTML/CSS preservando a
identidade da fonte. O `pesquisa-documentos` grava duas coisas ao lado: a base como
`<cena>-clipping.html` e o print de verificação como `<algo>-prova.png`. **Nenhum dos dois vai à
tela, e isso é o correto** — o primeiro é o molde que a cena reconstrói, o segundo é a evidência
de que o texto é fiel ao original. Citá-los no cabeçalho é a documentação de procedência que a
casa cobra. Era exatamente isso que o §3 carimbava de fantasma.

**Medido:** `s07-o-anuncio-de-julho-de-2026` e `s17-nao-foi-construido-pra-cacar-quasar`
reprovaram com o clipping da ESA **visível no frame** — manchete traduzida, grifo word-locked na
data, DOI no rodapé, tudo no padrão M05. O vídeo tem 6 cenas de documento: o alarme pegaria as 6.

**O dano não é o gate reprovar — é o que a reprovação MANDA fazer.** A linha de conserto do próprio
gate diz *"rode a caça de novo com LEQUE de buscas antes de aceitar 'não achei'"*. Uma sessão que
obedecesse mandaria recaçar mídia para uma cena que não precisa de mídia, e no limite mandaria
refazer arte correta: **queimar inferência para piorar o artefato**. É a mesma doença que o §4
deste arquivo já nomeia numa linha acima — *alarme que grita à toa ensina a ignorar o alarme*.

**A regra:** caminho de `_media/` citado só em comentário **não é fantasma quando todos os
caminhos citados terminam em `-clipping.html` ou `-prova.png`**. O recorte é estreito de propósito:
documento que citar uma FOTO comum em comentário e não a usar continua reprovando, que é o buraco
real. E o conjunto de caracteres do caminho tem de ser só o que é caractere de PATH — em prosa de
comentário o caminho vem seguido de vírgula ou ponto (`…-clipping.html, lido em 09/ago`), e engolir
a pontuação faz o sufixo nunca casar (foi o primeiro conserto, que passou s17 e deixou s07 preso).

**A lição que vale além deste gate:** antes de um gate reprovar um artefato, pergunte se o que ele
mediu é *defeito* ou *especificação de um modo que ele não conhece*. Gate escrito para a cena
comum reprova a cena especial — e o custo cai no lado caro, porque o remédio dele é sempre "refaça".

Agente-raiz: `scripts/qc-midia-real.mjs` (o gate, não o editor — a arte estava certa).

### ARTE-234 · Conserto de PARSING não termina no gate onde o defeito apareceu — os gates irmãos leem a mesma prosa (12/ago/2026, estação ARTE do `orcas-nao-matam`)

A [ARTE-233] consertou, em 10/ago, um gate que engolia a pontuação da frase junto do caminho de
arquivo: em prosa, `_media/x-prova.png` vem seguido de vírgula ou ponto, e capturar `…-prova.png,`
faz o sufixo nunca casar. O conserto foi feito, medido e escrito em lei. **Dois dias depois, dois
outros gates ainda tinham o mesmo defeito** — e um deles é o `qc-direcao-real`, que roda no portão
de entrada da estação de ARTE.

O que ele imprimiu neste vídeo:

```
✗ 1 âncora(s) apontando arquivo que NÃO EXISTE:
    c25  →  assets/geojson/peninsula-valdes.json.
```

O arquivo **está no disco** — 553 bytes, geometria real. A âncora da `c25` é uma frase que termina
em *"…+ assets/geojson/peninsula-valdes.json."*, e o ponto final da frase entrou no caminho.

**O dano não parou no falso FAIL**, e é isto que faz a lei valer: a mesma frase caiu depois no ramo
do *rótulo defasado*, e o gate passou a mandar **reconciliar uma âncora que estava certa** — com um
texto convincente ("a pesquisa entregou e ninguém reconciliou"). Um gate que reprova avisa; um gate
que **prescreve o conserto errado** consome a estação seguinte, e no caso o conserto prescrito era
mexer numa decisão editorial tomada de propósito (a `c25` está em FALTA porque o footage é
só-stock-pago com IP flagado — os geojson citados são o plano B, não o suprimento que falta).

**E a [ARTE-233] tinha ficado pela metade no próprio gate que a originou.** O comentário do
`qc-midia-real.mjs` promete aparar *"vírgula ou ponto"*, mas a correção foi feita **excluindo o
caractere da classe** — e o ponto não pode sair da classe, porque ele é a extensão. Reproduzido:

| texto no cabeçalho da cena | captura antes | isenção |
|---|---|---|
| `a prova esta em _media/documento/x-prova.png.` | `x-prova.png.` | **cai — cena certa reprovada** |
| `recriado em _media/documento/y-clipping.html.` | `y-clipping.html.` | **cai** |

**A régua: pontuação terminal se APARA, não se exclui da classe** — `.replace(/[.,;:!?]+$/, "")`
depois do `matchAll`. Excluir da classe conserta os separadores (`,` `;`) e é impossível para o
ponto, que é caractere legítimo de path. Consertados os dois: `qc-midia-real.mjs` e
`qc-direcao-real.mjs`. Varridos e **seguros por construção**: `qc-atribuicao.mjs` e
`qc-pauta-integrada.mjs` — os dois leem `src=`/`href=`/`url()`, e atributo é delimitado por aspas,
onde prosa nenhuma encosta.

**A lição, que é sobre o passo final de todo conserto de parsing:** o defeito não estava no gate,
estava na *forma como esta casa escreve caminho em prosa* — e essa forma é a mesma em todos os
cabeçalhos de cena, logo o defeito é de todo gate que os lê. Irmã da [ARTE-185] pelo método: lá, uma
lei sobre QUAL ARQUIVO se lê exigia `grep -rl` pelo nome velho em todos os ofícios; aqui, uma lei
sobre COMO SE EXTRAI um caminho exige varrer todo gate que extrai caminho. *Quando o conserto é de
leitura de um formato compartilhado, o alvo do conserto nunca é um arquivo — é o conjunto dos
leitores.* O `grep` que fecha esta lei, e que deve rodar sempre que um regex de path for corrigido:

```bash
grep -rn "matchAll(/\|match(/" scripts/qc-*.mjs | grep -E "_media|assets"
```

Agente-raiz: `scripts/qc-direcao-real.mjs` e `scripts/qc-midia-real.mjs` (os gates; a direção e a
arte estavam certas nos dois casos).

### ARTE-235 · Numa família de molde despachada em PARALELO, ninguém vê o irmão — e o primeiro card nasce sem o elemento de sistema (12/ago/2026, estação ARTE do `fatos-a380`)

Dez cards de título, despachados juntos com `--conc=4`. Nove nasceram com o trilho de navegação
"N de 10"; o `card-t1-dois-andares` nasceu **sem** — o único dos dez, e justamente **o primeiro que
o espectador vê**. Ele tem uma régua de marca, mas é outro elemento: o "piso de deck" da metáfora,
entre as duas linhas do título. Indicador de progresso, nenhum.

**Nenhum gate pegou, e nenhum pegaria.** `qc-contrato` passou 27/27, `qc-carga` passou, o frame é
bonito. Cada card passa sozinho porque o defeito não está NELE — está na relação entre os dez. É a
classe de erro que só existe no conjunto, e o conjunto não tem dono automático.

**A causa é de despacho, não de talento.** O `desenhar-cenas.mjs` já monta o bloco certo —
`irmaosDoMolde()` cita os irmãos do mesmo vídeo como "a régua mais forte que existe". Só que ele
filtra por `jaTem(o)`: irmão que já gravou HTML. Com a família inteira em voo ao mesmo tempo,
**nenhum irmão existe no disco quando o briefing é montado**, e os dez recebem o bloco vazio. A
régua não falhou — ela ainda não tinha nascido.

**O erro de leitura que isso induz no agente:** bloco de irmãos vazio lê-se como "não há régua a
seguir", quando na verdade significa "você é o primeiro, e os outros vão copiar de você". São
situações opostas e chegam com a mesma cara — o vazio.

O conserto da cena foi cirúrgico (transplante da geometria do `card-t2`: trilho 980×20, preench
= N/10 × 980 = 98px, entrando em 1.30 depois de o piso fechar), sem tocar na metáfora nem regerar
arte paga. O conserto do ofício está em `.claude/agents/executor-de-molde.md` §2.1: quando o bloco
de irmãos vier vazio, procure a especificação do CONJUNTO antes de escrever, e declare no cabeçalho
a geometria que você criar — porque os irmãos vão herdá-la.

**O degrau que fica aberto** (não feito aqui: três drivers de arte em voo, e editar o despachante em
produção para consertar consistência é trocar um defeito visível por um risco invisível): quando uma
família de molde tem N pendentes e **zero prontos**, `desenhar-cenas.mjs` deveria serializar a
PRIMEIRA e só então liberar as outras em paralelo — uma cena de atraso compra a régua para as N−1.

> *Paralelismo destrói a régua que o próprio paralelismo precisa. Quando a consistência entre peças
> é o produto, a primeira peça não é uma das N — é a especificação, e tem de existir antes.*

Agente-raiz: `executor-de-molde` (corrigido) · degrau de código pendente em `scripts/desenhar-cenas.mjs`.

### ARTE-236 · O `destino:` de uma âncora FALTA é o ENDEREÇO DA ENCOMENDA, não a citação de um arquivo — e o brief mandava pular a cena por causa dele (12/ago/2026, estação ARTE do `especies-humanas`)

Quando o diretor-de-arte não tem a mídia, ele escreve a âncora assim:

> `FALTA — foto real das pegadas de Laetoli para o inset de prova do bipedalismo (query: 'Laetoli
> footprints photograph Tanzania'; **destino: `_media/foto/n047/`**)`

Esse `destino:` é o endereço para onde a PESQUISA deve baixar. O `_brief-arte.mjs` o lia como
**citação de arquivo que não existe** e escrevia, no dossiê que o editor-de-arte obedece:
*"Ela está BLOQUEADA por falta de mídia. Pule a cena, faça as outras do lote e relate o bloqueio."*

**Medido neste vídeo: 11 de 133 briefs marcados BLOQUEADA; depois do conserto, 4.** Os 7 falsos eram
4 mapas, 1 documento e 2 desenhos. A prova não é o raciocínio — é o artefato: mandei os mapistas
desenharem assim mesmo, e `n024-ilha-de-flores-indonesia` e `n027-africa-do-sul-homo-naledi`
saíram inteiras e passaram nos gates **sem a mídia que o brief dizia ser bloqueante**.

**A régua certa não é se a âncora cita um path — é se a mídia é o CORPO ou o ACESSÓRIO da cena:**

| modo | o corpo da cena é | falta de registro bloqueia? |
|---|---|---|
| `foto`, `footage`, `drone`, `mapa3d` | o registro em si | **sim** — sem ele não há cena |
| `mapa` | a geometria real | não — o registro é enfeite sobre o palco |
| `desenho`, `cinematico`, `dados` | o palco construído | não — e o inset da ARTE-38 é oportunidade, por definição |
| `documento` (M05) | o clipping RE-CRIADO da fonte | não — o logo mora no acervo COMUM, não em `_media/<cena>/` |

A linha do `documento` tinha um segundo defeito, independente: o modo estava na lista dura de
"pede registro real". O M05 nunca pede — ele recria o clipping a partir do texto da fonte e do logo
oficial. A `n053-o-estudo-do-arizona-2025` saiu com masthead da Nature, grifo word-locked e 8/8 no
contrato, depois de o brief ter mandado pulá-la.

**Conserto (aplicado):** `scripts/_brief-arte.mjs` tira `documento` da lista de modos, ignora o
`destino:` ao procurar citação de arquivo, e ganha um terceiro texto — para âncora FALTA em cena
cujo corpo não é o registro, o brief agora manda **desenhar sem o acessório**, compor de forma que a
ausência não deixe buraco (nada de moldura vazia esperando a foto que não veio) e **declarar no
cabeçalho do HTML** o que não entrou, para a próxima passada saber onde encaixar.

> *Bloqueio declarado por engano é mais caro que bloqueio real* — o comentário já estava no arquivo,
> duas correções acima, escrito por quem consertou o mesmo tipo de falso positivo em 08/ago. Ele
> voltou por uma porta nova: antes o brief não achava o arquivo, agora ele achava **o endereço de um
> arquivo que ainda vai ser comprado**. O texto de um pedido de compra não é um inventário.

### ARTE-237 · O brief levava o PEDIDO de dado e nunca a RESPOSTA — a pesquisa entregava para ninguém (12/ago/2026, estação ARTE do `especies-humanas`)

O `_brief-arte.mjs` injeta o `needs.dados` do espelho — *"preciso da faixa temporal de existência de
Australopithecus, habilis, erectus, neandertal…"*. Isso é o **pedido**. A `pesquisa-dados` responde
esse pedido e grava a série, com fonte, licença e legenda pronta, em `out/<proj>/_dados/<id>.json`.

Entre os dois não havia ponte. Medido neste vídeo: **19 arquivos de dado verificado no disco** — com
série plotável, DOI conferido na Crossref e legenda escrita pensando em ser lida pelo desenhista — e
`grep -c _dados scripts/_brief-arte.mjs` = **0**. As oito seções do brief eram Ficha, Direção,
Espelho, Mídia real, Word-lock, Hand-off, Arco e Avisos. Nenhuma delas é o número.

O desenhista de uma cena M10 recebia *"preciso da série"* e não recebia a série. Ele tem uma janela
de 7 s, uma metáfora que promete um gráfico e nenhuma cifra autorizada — então desenha a régua vazia,
ou põe da memória um número que ninguém verificou. **É este o mecanismo pelo qual cena de dados sai
como desenho vazio MESMO com a pesquisa entregue e paga** — e o mais caro dele é ser invisível: a
pesquisa reporta sucesso, o gate de arte não pergunta por dado, e o buraco só aparece na tela.

Quem achou foi a própria `pesquisa-dados`, ao entregar: fez o `grep` e disse que a arte não ia ler
nada daquilo. O agente que entrega é quem melhor enxerga se a entrega chega — vale perguntar.

**Conserto (aplicado):** `_brief-arte.mjs` ganhou a seção `## 📊 DADOS VERIFICADOS`, que lê
`_dados/<id>.json` e serve ao desenhista os `valores` em tabela, a `serie`/`intervalos`/`lista`
truncados em 12 entradas (com o caminho do arquivo declarado para quem for plotar tudo), a `legenda`
pronta, o aviso de `controverso`, as listas `o_que_a_tela_pode/NAO_pode_escrever` e o crédito. O
cabeçalho da seção fecha a porta: *nenhuma cifra na tela pode sair daqui — nem da sua memória, nem
de arredondamento seu*. 19 dos 133 briefs deste vídeo passaram a carregar o número.

> *Pedido e resposta moram em arquivos diferentes, e só o pedido tinha carona.* Sempre que uma
> estação PERGUNTA num artefato e outra RESPONDE noutro, alguém tem de costurar os dois — senão a
> resposta existe, está certa, está paga, e não chega a quem ia usá-la.

### ARTE-238 · O gate lia a PRIMEIRA atribuição e o navegador obedece a ÚLTIMA — readaptação que empilha em vez de substituir (12/ago/2026, estação ARTE do `especies-humanas`)

A readaptação de uma cena ao relógio novo tem um passo mecânico: trocar a duração declarada. Em
`s29-genesvivostibeteedefesac` ela foi feita **por adição**. O arquivo ficou assim, em linhas
consecutivas: a duração nova, numérica, com o comentário *"a duração REAL do clipe, que é o que o
render lê"* — e, logo abaixo, viva, a atribuição velha que apontava para a `const DUR` de 81,74 s.

Quem escreveu sabia exatamente qual era a linha certa. Só não apagou a errada.

**O que torna isso pior que um erro comum é quem lê o quê.** `String.match` sem `/g` devolve a
primeira ocorrência, e era assim que o `qc-janela.mjs` extraía a duração: leu **11,44** e aprovou.
O Chrome executa as duas atribuições em ordem e fica com a última: **81,74**. O gate e o render
liam valores diferentes do mesmo arquivo, e o gate lia o certo — que é o pior dos casos, porque é
o que carimba. Sem o `--exceto` desta passada, essa cena entraria no render 4K com 7× a duração da
janela: 70 s de encode pago para um clipe que a montagem corta em 11,44.

Duas coisas que a auditoria mostrou e valem mais que o caso:

1. **Divergência entre leitor estático e executor é uma classe, não um caso.** Todo gate desta casa
   lê HTML como texto; o render o executa. Onde a linguagem tem ordem (atribuição, sobrescrita,
   `if` que redefine), texto e execução podem discordar — e o gate que lê a primeira ocorrência
   sempre discorda a favor do arquivo.
2. **O comentário também é texto.** Ao documentar o conserto neste mesmo arquivo, reproduzi a
   sintaxe da atribuição dentro de um `/* */` para explicar o que havia sido removido — e o gate
   recém-consertado contou a menção como segunda atribuição e reprovou a cena que eu acabara de
   consertar. *Documentar um defeito citando-o literalmente é recriá-lo aos olhos de quem mede por
   regex.* Descreva; não reproduza.

**Conserto (aplicado):** `scripts/qc-janela.mjs` varre **todas** as atribuições de duração com
`matchAll`, resolve cada uma (número ou identificador), fica com a **última** — a que o JS executa
— e emite o erro duro `duracao-atribuida-duas-vezes` sempre que houver mais de uma, **mesmo que os
valores coincidam**: hoje é inofensiva, amanhã alguém edita uma das duas linhas e o arquivo passa a
mentir. O `remapeador-de-cenas` ganhou a trava de substituir a linha, nunca empilhar.

> *Empilhar parece conservador — a linha velha "não faz mal, fica de histórico".* Faz: num arquivo
> que é executado, a linha velha não é histórico, é a que vale.

### ARTE-239 · Lei revogada volta pela porta de serviço: quem escreve o CAMPO não é quem carrega a lei do campo (12/ago/2026, estação ARTE do `aceleradores-particulas`)

> 🔀 **Nasceu como ARTE-238 e foi renumerada em 12/ago.** A estação ARTE do `especies-humanas` destilou
> outra 238 no mesmo dia e **commitou primeiro** (b9d08167), então o número é dela — a régua da [SIS-62].
> O rodapé que eu li dizia `max237` e estava certo **quando eu li**: com várias sessões destilando em
> paralelo, a contagem envelhece entre a medida e a escrita, e quem garante o número é o gate de ID
> repetido do `regras-todas.mjs`, não a leitura anterior.

A [ARTE-183] matou o mito do Ç com três medidas: o vão entre cedilha e C é **0 px** em cinco famílias,
`"Helvetica Neue"` desenha **igual** à Neue Haas, e o gate que reprovava acusava a **presença** do
caractere sem medir nada. O defeito real e vivo é outro: **Ã/Õ maiúsculos em peso 600–749**.

Três dias depois, o mito reapareceu — **não num agente, e sim num artefato**. O `_grafias` do espelho
deste vídeo, escrito pelo `montador`, dizia:

> *"⚠️ FONTE: FRANÇA e SUÍÇA em CAIXA ALTA levam Ç — o Ç maiúsculo da Neue Haas descola do C e o escape
> 'peso 900' NÃO resolve; nesse bloco, trocar a FAMÍLIA (Helvetica Neue) no bloco inteiro."*

É a doutrina revogada inteira, com as palavras que a lei derrubou, numa **ordem de degradar a
tipografia da marca**. E ela vazou para a `tecnica` de duas cenas do `conceito-visual.json` (s29, s59),
onde o brief determinístico a entrega ao executor como direção do diretor de arte.

**Por que ninguém barrou:** a tabela de fatias faz o corte por ofício, e ela está certa — o `montador`
lê `FIN.md + PESQ.md`, não `ARTE.md`. Só que o campo que ele escreve, `_grafias`, **é lido pela arte
como ordem**, e o `montador.md` não tinha uma linha dizendo o que vai nesse campo. Sem definição, ele
preencheu por analogia e passou do QUE aparece na tela (ortografia: `MÚON`, `ÍMÃS`, `por ora`) para o
COMO desenhar (peso, família, glifo) — um domínio cuja lei ele, por desenho, não carrega.

**O que salvou o vídeo foi o ofício de quem executa, não o sistema.** Os dois mapistas recusaram a
instrução e citaram a [ARTE-183] no relatório, um deles medindo que "peso 900 resolve" — porque
`mapista` lê `ARTE.md`. Se as duas cenas fossem de invenção pura despachadas num lote grande, a ordem
teria valido.

> *Lei revogada não volta pelo agente que a citava: volta pelo CAMPO que alguém sem a lei preencheu.
> Quem escreve texto que outro ofício obedece assume a fatia daquele ofício — ou escreve só o QUE, e
> deixa o COMO para quem tem a régua.*

**Consertado aqui (12/ago):** a nota reescrita no `espelho.json` e nas duas cenas do
`conceito-visual.json` (só a frase da fonte — metáfora, técnica e showpiece intactos, [ARTE-94] §2);
`montador.md` ganhou a definição do campo (`_grafias` é ORTOGRAFIA, e só); e a tabela de cruzamentos do
`aprendizado.md` passou a mandar o `montador` abrir a [ARTE-183].

Agente-raiz: `montador` — mas a culpa é de OMISSÃO do ofício, não de desobediência: ele escrevia um
campo que o próprio ofício nunca descreveu.

### ARTE-240 · A SOMBRA DO CARD APAGOU O RÓTULO LOGO ABAIXO DELE — e nenhum gate olha para isso (12/ago/2026, `especies-humanas/n030`, agente-raiz `mapista`)

🔀 *Nasceu como ARTE-239 e foi renumerada na mesma hora [SIS-62]: a estação ARTE do
`aceleradores-particulas` gravou a dela no mesmo minuto, entre a minha medição do maior ID livre e a
minha escrita. Duas sessões destilando em paralelo no mesmo arquivo é o caso normal desta casa, não
o excepcional — **medir o próximo ID e escrever não são o mesmo instante**, e quem chegou primeiro
no arquivo fica com o número.*

A cena põe um inset de foto sobre o mapa e, 24 px abaixo dele, o nome da espécie em 116 px âmbar.
No frame, o nome saía **cinza-escuro e com dois terços da altura lavados** — legível só porque a
barriga das letras escapava. Parecia colisão de layout. Não era: os dois elementos estão em fluxo,
um debaixo do outro, sem sobreposição de caixa nenhuma.

O que os sobrepõe é a PINTURA. O inset é `position:relative` (precisa disso para a moldura
`inset:0` por dentro) e o rótulo era estático. **Elemento posicionado pinta acima de elemento
estático mesmo vindo antes no DOM** — e a sombra do inset (`0 28px 78px`) alcança ~78 px além da
borda, isto é, até ~796 px, enquanto o texto começa em ~714 px. A conta fecha exatamente com o que
se vê: a sombra cobre 2/3 do rótulo.

**Por que nenhum gate pegou:** `check-overlap` mede colisão **texto × texto** por bounding box, e
aqui não há colisão de caixa — o que invade o texto é uma sombra, que não tem caixa. O laudo saiu
`✓ SEM colisões`, correto e inútil. `qc-carga` conta entradas, não legibilidade. Só o frame mostra.

**A regra:** todo bloco de texto que mora **logo abaixo** de um card/inset com `box-shadow` precisa
ou de `position:relative;z-index:1` (para pintar acima da sombra) ou de margem maior que o alcance
da sombra (`offset-y + blur`). O conserto barato é o primeiro — uma linha de CSS, sem tocar a
composição. E a régua para "quanto a sombra alcança" é aritmética, não olhômetro: some o
deslocamento vertical ao blur.

Parente da [ARTE-181] (sombra que escurece a MÍDIA) por um mecanismo só: *sombra é tinta preta que
não aparece no inventário de elementos.* Lá ela come o footage, aqui come o texto da própria cena.

> *Um gate que passa limpo não diz que a cena está boa — diz que a cena está boa naquilo que ele
> mede.* O `check-overlap` respondeu com precisão a pergunta que sabia fazer.

### ARTE-241 · O nome do país caía no país vizinho e os quatro gates de cena aplaudiam — porque todos mediam a ÂNCORA, e o espectador lê a CAIXA (12/ago/2026, estação ARTE do `aceleradores-particulas`)

> 🔀 **Nasceu ARTE-240 e foi renumerada.** Segunda colisão do dia para esta mesma sessão (a outra virou
> [ARTE-239]): outro vídeo destilou a 240 nos minutos entre eu medir o rodapé e escrever o texto. Com
> várias estações destilando ao mesmo tempo, **não existe "próximo livre" que sobreviva a uma leitura
> anterior** — só o gate de ID repetido do `regras-todas.mjs`, rodado DEPOIS de escrever, decide.

No showpiece `s59` (os anéis do LHC e do FCC sobre Genebra), a primeira versão pousava **"SUÍÇA" a
420 px da âncora**. Desprojetando os cantos da caixa renderizada: `[6,30–6,40 · 46,15–46,22]` =
**Haute-Savoie, FRANÇA**. Cinco de cinco pontos no país errado, num dos cinco picos visuais do vídeo.

**O que passou verde enquanto isso:** `check-overlap` (sem colisão), `qc-carga` (dentro dos tetos),
`qc-pais-bandeira` (nome com 132 px e bandeira presente) e `qc-fora-do-quadro` (nada cortado). Nenhum
deles é frouxo — **nenhum deles pergunta em que país o rótulo pousou.**

**A raiz é geométrica, e é o que faz a verificação honesta ser contraintuitiva:** validar a âncora por
point-in-polygon não prova nada, porque o texto tem LARGURA. A âncora pode estar impecável e a caixa
sair meio quilômetro ao lado, atravessando a fronteira — e o que o espectador lê é a caixa. No mesmo
vídeo, o mapista do `s29` validou âncora por point-in-polygon e ainda assim precisou medir a caixa na
tela para descobrir que a pílula não cabia em terra (o corredor entre o anel e o Léman tem ~4 km e a
pílula ocupa 5,2 km naquele zoom).

Dois achados irmãos da mesma medição, guardados porque vão repetir:
- **Quatro âncoras candidatas devolveram `368,0 m` idênticos no DEM** — era a lâmina do Léman achatada:
  todas estavam sobre o lago. Altitude repetida ao decimal é sinal de água, não de planalto.
- **O palpite "oeste = França" reprova em Genebra:** `[6,005 · 46,222]` é SUÍÇA (o esporão de
  Russin/Dardagny). Naquele mosaico, cada âncora se testa; nenhuma se deduz.

**O gate existe agora — `scripts/qc-rotulo-territorio.mjs`.** O probe original vinha com o HTML e os
globals da cena cravados no código (`_probe-s59.mjs`), e morreria com ela; extraí a capacidade:
desprojeta os 4 cantos + o centro de todo texto visível cuja normalização casa com uma geometria
(`SUÍÇA` → `suica.json`, no projeto ou no acervo) e testa point-in-polygon na pose de cada instante.

**A calibração é a parte que decide se o gate serve:** o 5º ponto é o CENTRO. **Centro fora = reprova**
(o rótulo está no país errado). **Centro dentro com canto fora = AVISA e não reprova** — a caixa só
encosta na outra margem. Sem essa separação o gate acusaria cena sã: rodando nas três cenas de mapa
deste vídeo, `CHINA` deu 5/5 em oito instantes e `SUÍÇA` 5/5 no `s29`, mas dois rótulos escorregam um
canto **no instante final**, com a câmera em órbita e o nome entrando a ~1 s do corte. Reprovar isso
transformaria o gate em ruído — e é assim que o erro de verdade, 5/5 fora no showpiece, volta a passar.

> *Gate que mede a âncora certifica a intenção; quem mente é o pixel. E gate novo nasce escolhendo o
> que NÃO vai reprovar — o alarme que grita no caso benigno é o que ensina a ignorar o maligno.*

Agente-raiz: nenhum — os mapistas acertaram por ofício (mediram por conta própria e um deles achou o
erro). O que faltava era CAPACIDADE, e ela não existia em lugar nenhum do estúdio.

### ARTE-242 · O passe determinístico mudou de veredito conforme o DIRETÓRIO de quem o chamou — e o veredito errado era "FALTA" (12/ago/2026, estação ARTE do `especies-humanas`)

O `aplicar-ancoras-pesquisa.mjs` existe para dizer uma verdade sobre o disco: a pesquisa entregou,
ou não entregou? Rodei-o duas vezes no mesmo vídeo, com **o mesmo comando e o mesmo minuto de
diferença**. A primeira não rebaixou nada. A segunda carimbou `FALTA —` em quatro cenas cuja âncora
estava perfeita: `s25`, `s28`, `n058` e `n078`, todas apontando GeoJSON que **existe**
(`rota-africa-europa.json`, `papua-nova-guine.json`, `ilhas-pacifico.json`, `ledi-geraru.json`).

A diferença entre as duas rodadas não estava no disco. Estava no `cwd`. O script resolvia
`assets/…` como caminho relativo ao diretório de quem o chamava, e a segunda chamada saiu de dentro
de um **worktree** — que tinha **153 GeoJSON contra 359 no principal**, congelado em 29/jul. Os
arquivos existiam; o processo é que estava olhando para uma fotografia velha do repositório.

**Três coisas que isso ensina, e nenhuma é sobre GeoJSON:**

1. **Determinismo não é propriedade do algoritmo, é do conjunto (algoritmo + o que ele consegue
   enxergar).** Um passe sem LLM, sem rede e sem aleatoriedade deu dois resultados opostos. Toda
   ferramenta que lê o repo tem de derivar a raiz de si mesma (`import.meta.url`), nunca do `cwd` —
   ainda mais nesta casa, onde o Bash **reseta o cwd entre chamadas** e a sessão nem sempre percebe
   de onde está rodando.
2. **O erro tinha sentido, e era o pior.** Cegueira aqui não produz "não sei": produz `FALTA`, que é
   a palavra que manda o editor-de-arte desenhar sem o acessório. Quando o modo de falha de uma
   ferramenta tem direção, projete a direção a favor do caro — na dúvida, cale-se, não acuse.
3. **Consertar a leitura quase quebrou a escrita.** Com a raiz absoluta, o passe passou a GRAVAR
   `/home/…/out/…` dentro do `midia_ancora`; o brief copiou, e path absoluto no `src=` é mídia
   ausente em silêncio no outro nó [ARTE-46]. Peguei no dossiê regerado, antes de qualquer cena.
   **Resolver é em absoluto; registrar é em relativo** — e as duas coisas moram na mesma função por
   três linhas de distância.

**Conserto (aplicado):** `RAIZ` derivada de `import.meta.url`; `resolvePath` junta `out/…`/`assets/…`
à RAIZ; e um `paraRegistro()` devolve tudo a relativo antes de escrever no conceito ou no relatório.
Validado rodando de `/tmp`: 4 promovidas, **0 rebaixadas**, 0 caminhos absolutos em 133 briefs.

> *A pergunta "o arquivo existe?" parece absoluta e não é: ela é sempre "existe A PARTIR DE ONDE?".*

### ARTE-243 · O brief não sabia que parte da cena não vai ao ar — e mandou coreografar a cauda (12/ago/2026, `especies-humanas/n022`)

Quando um corte cai **dentro** da janela de uma cena, o ripple engole aquele pedaço e o
`compor-base-youtube` clampa o fim na abertura da vizinha. A `n022` declara `dur` 8,3 s e tem um
corte de classe `erro` de 725,460 a 726,235: **0,775 s** que existem no papel e não existem na tela.

O `_cortes.json` sabia. O `qc-espelho-cortes` já marcava a cena como `[mutilada]`. O **brief**, que é
o único papel que o desenhista lê, entregava `__duracao 8.3` e mais nada — e um desenhista que
recebe 8,3 s coreografa o clímax para os 8,3 s. Neste caso o clímax é a caricatura rachando em
confete: ele cairia depois do corte. Arte paga, renderizada em 4K, que ninguém assiste.

**Duas armadilhas no caminho do conserto, ambas pegas antes de sair:**

- **Escrevi o aviso à mão no dossiê e a regeração seguinte o apagou.** Óbvio depois: `_brief-arte.mjs`
  reescreve os 133 arquivos. *Emenda manual em artefato gerado é rascunho, não conserto* — a costura
  tem de morar no gerador. Mesma forma da [ARTE-237].
- **A primeira versão da função leu 71 cortes e emitiu 0 avisos**, porque adivinhei o esquema
  (`inicio`/`de`/`start`) em vez de abrir o arquivo, onde as chaves são `ini`/`fim`. Silêncio de
  ferramenta nova é indistinguível de "não há defeito": só cruzar com o gate oficial revelou.
- **E o primeiro acerto saiu em 5 cenas, 4 delas falsas:** cards de título, onde o corte dentro da
  janela é o próprio gap do XML [FIN-17] e a régua é a [ARTE-93] — que manda exatamente o contrário
  do que meu aviso dizia. Filtrar `modo:"titulo-topico"` e a classe `titulo` derrubou para 1, e essa
  1 é a mesma que o `qc-espelho-cortes` aponta, com o mesmo número. **Instrução que contradiz a lei
  vigente é pior que instrução nenhuma**, porque chega com a autoridade do dossiê.

**Conserto (aplicado):** `_brief-arte.mjs` calcula a interseção da janela com os cortes reais e, se
sobrar mais de 0,08 s, escreve na Ficha quanto some, quantos segundos vão de fato ao ar e **até que
instante o clímax tem de resolver**. A `__duracao` continua a do espelho — é o contrato e o gate a
cobra; o que muda é o desenhista saber onde parar de investir.

### ARTE-244 · O `clamp` protegia o PONTO de ancoragem e ignorava a LARGURA do texto — e o corte só nascia no meio da cena (12/ago/2026, `especies-humanas/n078`, agente-raiz `mapista`)

A cena projeta um ponto geográfico e pousa ao lado dele o carimbo `~50 MIL ANOS`. O autor sabia do
risco de borda e escreveu a defesa: `clamp(820, 3180, qE[0]+120)`. A defesa está certa e não serve
para nada — porque o texto tem `text-anchor:"start"` e **cresce para a direita a partir do ponto
protegido**. Em 150 px / peso 900, os 12 caracteres ocupam ~1080 px: com `bx` no teto de 3180, a
última letra cai em ~4260, num palco de 3840.

**O que faz este defeito escapar de todo mundo:** `qE` é a projeção de uma coordenada geográfica, e
a câmera do mapa anda. No começo da cena o ponto está confortavelmente à esquerda e **não há corte
nenhum**; o carimbo só encosta na borda aos 8,8 s e o corte cresce de 11 px a 134 px até o fim. Quem
confere o frame 0 — ou o frame do beat, ou a thumbnail — vê uma cena impecável. Só um gate que varre
a duração inteira pega, e foi o `qc-fora-do-quadro` que pegou.

**A regra:** ao clampar a posição de um texto, clampe **a caixa dele, não a origem**. Com
`text-anchor:"start"`, o teto é `margem_direita − largura_do_texto`; com `"end"`, o piso é
`margem_esquerda + largura`. E quando o texto acompanha um ponto que se move, a saída boa não é
espremer a posição: é **virar o lado** — se não cabe à direita do ponto, pouse à esquerda e troque a
âncora. O carimbo continua colado ao que ele nomeia, que é a razão de ele existir ali.

**Conserto (aplicado):** `LARG_CARIMBO` entra na conta dos dois limites, `cabeDir` decide o lado, e
`text-anchor` passa a ser derivado em vez de fixo. A linha-guia liga ponto e carimbo nos dois casos.

> *Uma trava com o número errado é pior que trava nenhuma: ela ocupa o lugar da que faria efeito, e
> quem lê o código vê a defesa e para de procurar.*

Irmã da [ARTE-240] pelo modo de descoberta, não pelo mecanismo: as duas são invisíveis para quem
olha um frame e para o gate que mede a coisa errada — lá `check-overlap` comparava caixas de texto
enquanto o dano vinha de uma sombra; aqui o `clamp` media a origem enquanto o dano vinha da largura.

### ARTE-245 · Um cartão de conferência de logos ficou em `graphics/`, e a pasta é a FILA DO RENDER (12/ago/2026, `cerebro-quando-sonha`, agente-raiz `editor-de-arte`)

Alguém — com toda a razão — quis ver, antes de desenhar, se as logos baixadas abriam e quais tinham
fundo transparente. Escreveu `_logocheck.html`: seis `<img>` lado a lado sobre o navy, com uma legenda
em cada. Hábito bom. Só que salvou o cartão em `out/<proj>/graphics/`.

**Por que isso não é arrumação:** `graphics/` não é uma pasta de trabalho, é o **contrato com a
esteira**. O `_render-4k-loop.sh` monta a fila com `ls "out/$PROJ/graphics/"*.html` — sem filtro
nenhum, nem para `_*` — e calcula o prazo do portão por `_ncenas` desse mesmo `ls`. O cartão entrava
na fila do QC e do render como se fosse cena.

**O sintoma que teria custado a próxima sessão:** o cartão não tem `window.__renderAt` nem
`window.__duracao` — ele é uma folha estática. Então `qc-contrato` sobre o conjunto fechava em
**`60/61 passaram · 1 REPROVADA`** num vídeo cuja arte estava **inteira e sã**. Quem lesse esse
rodapé iria caçar a cena quebrada, e não há nenhuma. Alarme falso num gate custa duas vezes: gasta a
caçada e ensina a desacreditar do gate na vez em que ele estiver certo.

**A regra:** em `graphics/` só entra HTML que é **cena do espelho**. Cartão de prova, teste de fonte,
rascunho de layout, folha de conferência de asset → `out/<proj>/_arte/`. A conferência continua sendo
obrigatória; muda o endereço.

**Conserto (aplicado):** o arquivo foi **movido** para `_arte/` (não apagado — ele documenta quais
logos têm alfa), e `qc-contrato` voltou a `60/60 · 0 REPROVADA`. A §3 do `editor-de-arte.md` ganhou a
regra do endereço, ao lado da de path relativo — as duas são a mesma família: *o HTML de cena tem um
lugar, e o lugar significa coisas que o arquivo não declara.*

> *Pasta que uma ferramenta varre com `*` é interface pública, não gaveta. O que você deixa ali,
> alguém executa.*

Não mexi no `_render-4k-loop.sh` para filtrar `_*.html`: havia render vivo de outras produções, e o
bash relê o script em execução por offset de byte — editar arquivo de shell rodando corrompe a
execução corrente. O filtro é defensável como conserto futuro, em janela sem render.

### ARTE-246 · O brief listava a PASTA de destino como se fosse mídia — e `existsSync` aprovava, porque diretório existe (12/ago/2026, `especies-humanas`)

Quando a direção de arte roda **antes** da pesquisa, a `midia_ancora` nasce como uma ENCOMENDA, e a
encomenda diz onde entregar: *"footage real de perfuração de gelo (query: …; **destino:
`_media/footage/n132/`**)"*. Depois a pesquisa entrega, e o `aplicar-ancoras-pesquisa` promove
FALTA→asset **prefixando** o arquivo achado e preservando o texto do pedido — que é o comportamento
certo, porque as notas do diretor ("⚠️ NÃO usar o clipe de Shanghai: é Leste Asiático") são
justamente o que impede a arte de errar.

O efeito colateral morava no `_brief-arte.mjs`. O regex que varre a âncora atrás de assets captura
os dois: o arquivo real **e** a pasta de destino. E o filtro seguinte perguntava só `existsSync` —
que uma pasta responde **sim**. Resultado no brief entregue ao Fable:

```
- `_media/footage/n132/`  (0.0 MB) — **herdado de outra cena, reuso DECLARADO pelo diretor**
    - ⚠ procedência NÃO declarada — não invente crédito e NÃO deduza do nome do arquivo
```

Uma mídia que não existe, com dois carimbos errados: "reuso declarado" (não é — os clipes tinham
sido baixados naquela hora, para aquela cena) e um alarme de procedência que manda o Fable
**se preocupar com o crédito de um diretório**. Medido: **20 dos 133 briefs** do vídeo, uma linha
por cena cuja encomenda citava o destino — 15% da fila levando ruído para o recurso mais escasso da
casa.

**O conserto** (aplicado): `.filter(rel => … fs.statSync(rel).isFile())` no lugar de `existsSync`.
Voltou a 3 ocorrências de `(0.0 MB)`, e as três são **SVG de logo de 7–10 KB** que a formatação em MB
arredonda — arquivo real, exibição grossa, não defeito.

*A lição que generaliza: **existir não é ser arquivo.** Todo filtro de asset escrito com `existsSync`
aceita a pasta que contém o asset — e como a pasta costuma ter o nome certo, o erro sai plausível.
Onde o código pergunta "existe?" e o que importa é "é um arquivo que dá para carregar?", a pergunta
está errada, não o dado.*

### ARTE-247 · O `fluxo` do conceito-visual sobrevive ao re-espelho, e um id morto nele derrubava o brief INTEIRO (12/ago/2026, estação ARTE do `orcas-nao-matam`)

O re-espelho por densidade não é raro: o `orcas-nao-matam` saiu de 47 segmentos para 139, e a
[ARTE-229] já descreve o estrago do lado das CENAS (as novas nascem mudas, sem direção). Este é o
mesmo estrago pelo lado do **`fluxo`** — o campo que declara os runs fundidos e os hard cuts —, e ele
morde mais fundo, porque o fluxo não fala de uma cena: fala de PARES de cenas.

O conceito continha `{"run":["c30","c31"],"fundir":true}`. O `c31` morreu no re-espelho. O
`_brief-arte.mjs` montava a janela da mãe assim:

```js
const filhas = (fundidoMae[s.id] || []).map(id => sg[idx[id]]);
const fim = filhas.length ? Math.max(s.inSec + s.dur, ...filhas.map(f => f.inSec + f.dur)) : …
```

`idx['c31']` é `undefined`, `sg[undefined]` é `undefined`, e `f.inSec` **lança**. O laço não estava
gerando o brief de `c30`: ele gera os briefs de TODAS as cenas de uma vez. Um id morto num campo
auxiliar, e o comando morria com `TypeError` antes de escrever o primeiro arquivo — **as 96 cenas da
fila ficavam sem dossiê, e a mensagem de erro não citava nem `c30` nem `c31` nem a palavra fluxo.**

O disfarce é o que torna isto caro: pedi o brief de `s008-boco-o-nome-esta`, uma cena de molde que
não tem nada a ver com o run fundido, e o que voltou foi um stack trace na linha 329. Quem recebe
esse erro procura defeito na cena que pediu.

**O conserto** (aplicado): filtrar o `run` contra os ids VIVOS do espelho antes de montar
`fundidoMae`/`fundidoFilha`, e **anunciar** o que caiu —
`⚠️ fluxo defasado: 1 id(s) … ignorados: c31`. O run vira o que dele sobreviveu; se nada sobrar, o
item do fluxo é pulado. Voltou a escrever os 124 briefs.

*A lição que generaliza: **artefato de LLM que sobrevive ao re-espelho tem de ser lido como
DEFASADO, não como verdade.** O conceito-visual é ativo pago e por isso ninguém o apaga — mas o que
ele diz sobre a IDENTIDADE das cenas envelhece no instante em que o espelho muda. Todo código que
resolve um id do conceito contra o espelho precisa tratar "não existe mais" como caso normal, com
aviso, nunca como impossível. E o teste da defesa é rodar o comando pedindo uma cena que não tem
relação nenhuma com o id morto: se ela quebrar, o defeito é global e não local.*

---

### ARTE-248 · A ISENÇÃO `data-qc-composicao` MORA NO ELEMENTO DO `src` — no contêiner pai ela é invisível (12/ago/2026, `planeta-em-meteorito/hook-pedra-saara-corte`, agente-raiz `editor-de-arte`)

> 🔀 **Nasceu ARTE-241 e foi renumerada para ARTE-248.** Outra sessão destilou a 241 no mesmo dia,
> onze horas antes (o rótulo de território que caía no país vizinho). O merge preservou as duas —
> as duas são trabalho real —, e o repositório ficou com dois cabeçalhos iguais. **A colisão já
> tinha produzido dano:** o `editor-de-arte.md` citava `[ARTE-241]` querendo dizer ESTA lei e o
> `mapista.md` citava `[ARTE-241]` querendo dizer a outra. Cada agente lia a lei errada sem ter
> como perceber — o número existe, o texto é plausível, o assunto é só um pouco diferente do
> esperado ([SIS-245]). Renumera quem chegou depois, para que a mais antiga não mude de endereço.

O `qc-clipe-repetido` acusou 5 repetições neste vídeo. Uma delas, o `hook-pedra-saara-corte`, **já
tinha a declaração escrita** — e escrita bem, com a razão correta:

```html
<div id="wMao1" data-qc-composicao="metade ESQ do mesmo frame: as duas metades se afastam…">
  <video class="vfull" id="vMao1" src="…/pedra-escura-areia-mao-descobre-4k.mp4"></video></div>
```

O gate não a vê. Ele varre os tags que **carregam o `src`** e testa os atributos daquele tag
(`if (/\bdata-qc-composicao\b/.test(t.attrs))`), exatamente como o próprio cabeçalho dele
documenta: *"a cena declara no elemento: `<img src="…" data-qc-composicao="…">"*. Declaração no
`<div>` pai é texto morto. As outras quatro acusações eram composição legítima **sem** nenhuma
declaração — fundo desfocado da mesma foto sob o primeiro plano nítido (`citacao-aaron-bell`,
`documento-estudo-2026`), e dois players do mesmo master em crossfade com janelas de seek distintas
(`comercio-garimpo-meteoritos`).

**O conserto** (aplicado nas 4 + `data-qc-reuso` nas duas pontas do reuso entre cenas): atributo no
elemento que tem o `src`, com a razão escrita. O gate voltou a `✓ sem repetição de clipe`.

*A lição que generaliza: **isenção só existe onde o gate olha, e cada gate olha num lugar
específico.*** É a mesma família do `data-qc-rolagem`, que vale no contêiner e não no palco. Quando
você declarar uma isenção, não pergunte "escrevi a razão?" — pergunte **"o gate lê ESTE elemento?"**,
e prove rodando o gate depois de escrever. Uma isenção escrita no lugar errado é pior que nenhuma:
ela convence o autor de que o assunto está resolvido, e deixa o vermelho no painel para o próximo,
que aprende a ignorar o gate. *Alarme falso é bug de prioridade alta porque desarma o gate
justamente quando ele acerta.*

---

### ARTE-249 · O despacho de arte conhecia DUAS faixas, e "o resto" não é uma faixa — 47% da fila esperava uma cota de que não precisava (13/ago/2026, estação ARTE do `orcas-nao-matam`, agente-raiz `scripts/desenhar-cenas.mjs`)

A [ARTE-71] tirou o MOLDE do caminho caro e mediu o ganho: ~11% da carga de cada vídeo. O que ela
não viu é que a linha que ela consertou tinha a forma errada:

```js
const papel = ehMolde(s) ? "conserto" : "arte";   // ← "arte" = Fable, a cota mais escassa da casa
```

Um ternário só sabe dizer duas coisas. Tirar o molde do `else` melhorou o `else`, mas **o `else`
continuou sendo o destino de tudo que ninguém nomeou** — e o que morava ali não era só invenção:
era footage, foto, dados, split e mapa. Nenhum deles inventa metáfora. Composição é enquadrar mídia
REAL que a pesquisa já pagou e coreografar na fala; mapa é geometria de GeoJSON sobre base real, o
que o `infra/modelos.json` diz em voz alta desde 05/ago (*"mapa é execução técnica, não invenção"*,
`mapista` no papel `decisao`). Os dois são Opus, e Opus neste estúdio nunca é o gargalo.

**A medida, neste vídeo:** 75 cenas pendentes — 40 invenção, **31 composição, 4 mapa**. Com as 10
contas de Fable no teto até 14–19/ago, o despacho anunciava "75 invenção (Fable)" e parava. **35
cenas, 47% da fila, esperavam por uma cota de que não precisavam.**

**O conserto** (aplicado): `faixaDe(s)` devolve as QUATRO faixas e uma tabela liga cada uma ao seu
papel — `molde`→`conserto`, `composicao`→`conserto`, `mapa`→`decisao`, `invencao`→`arte`. Só a
última paga Fable. Três consequências que valem tanto quanto o roteamento:

1. **O rodapé passou a contar por faixa.** O antigo dizia "N molde · M invenção", com M = tudo que
   não era molde — ou seja, o número que mais importa era o único derivado por subtração. Quem lesse
   "75 invenção" com o Fable no teto concluía, corretamente à luz do que via, que não havia o que
   fazer. *Contar errado aqui não é relatório feio: é a decisão de parar.*
2. **O 429 deixou de abortar o LOTE e passou a abortar o PAPEL.** Com faixas em dois modelos,
   `esgotado = true` derrubaria junto as cenas que rodam no modelo que está de pé. É a REGRA ZERO na
   escala da fila: bloqueio parcial não é bloqueio total.
3. **A faixa `mapa` veste o ofício.** O briefing agora manda ler `.claude/agents/mapista.md` antes da
   primeira linha — sem isso o mapa saía por um editor-de-arte genérico, que não sabe da base única
   MapTiler nem que `__prepararCaptura` tem de pausar o auto-loop antes do frame de conferência.

*A lição que generaliza, e é a mesma da [ARTE-71] num degrau acima: **um `else` é um nome que
ninguém deu.** Enquanto o gargalo se chamar pelo nome da ESTAÇÃO ("a arte está travada") e não pelo
do RECURSO ("a invenção está travada"), ninguém procura o que dentro dela não depende daquele
recurso. Quando um roteamento decide QUEM PAGA A CONTA, ele não pode ter ramo default: toda faixa
precisa de nome próprio, e o placar precisa contá-las uma a uma — porque a faixa que só existe como
subtração é exatamente a que ninguém vai pensar em destravar.*

### ARTE-250 · O aviso de "cauda mutilada" cruzou os DOIS RELÓGIOS e apagou cenas inteiras no papel (13/ago/2026, estação ARTE do `orcas-nao-matam`, agente-raiz `scripts/_brief-arte.mjs`)

A [ARTE-243] é certa e o conserto dela era necessário — mas nasceu sem perguntar **em que relógio o
espelho está**, e isso a inverte. `_cortes.json` fala em tempo **BRUTO** (o da gravação inteira);
desde 06/ago o espelho nasce em tempo **FINAL** (o do master já decupado). Cruzar os dois é a
confusão dos dois relógios do `CLAUDE.md` — só que aqui ela não adianta um overlay em alguns
frames: ela **mente para o desenhista sobre quanto da cena vai ao ar**.

**Medido antes de despachar, neste vídeo.** O `src/relogio-espelho.mjs` responde `FINAL` pelo degrau
mais duro que existe (`como: "master"`): o `_master-decupado.mp4` tem 1048 s e o espelho termina em
1048 s. Os 37 cortes somam **394 s** de tempo bruto. Aplicados por cima de `inSec` já finais, o
resultado foi:

| | |
|---|---|
| dossiês com o aviso | **48 de 113** |
| deles, em cenas ainda por desenhar | **27** |
| na forma catastrófica (>50% da janela dada como perdida) | **14** |
| pior caso | `s003`, 5,64 s de arte: *"o espectador vê os ~0,00 s iniciais · resolva até ~0,0 s"* |

A prova de que era falso não precisou de teoria: o corte nº 1 é `0→18,2 · erro`, e a cena que ele
"engole" é a **`c01`** — o cold-open que já está desenhado, renderizado e no ar. Um aviso que apaga
a primeira cena do vídeo está medindo outra coisa.

**Por que é pior que o buraco que veio tapar.** O aviso da ARTE-243 é uma instrução que o desenhista
**obedece**: ele comprime o clímax para caber no que sobrou. Quando o número está certo, isso salva
arte paga; quando está errado, produz 14 cenas com a metáfora esmagada no primeiro instante e o
resto em respiro — e o defeito **não reprova em gate nenhum**, porque a `__duracao` continua correta.
Só apareceria no 4K, com a cota do Fable já gasta. *Instrução falsa custa mais que instrução
ausente porque ela é seguida.*

**Conserto (aplicado).** `_brief-arte.mjs` importa `relogioDoEspelho` (o mesmo dono que o
`qc-espelho-cortes` consulta) e só considera a lista de cortes quando o espelho está em **BRUTO**;
em FINAL a lista fica vazia — aqueles cortes já aconteceram — e o gerador **diz em voz alta** que os
ignorou, com o veredito e o degrau que o produziu. Em espelho bruto a ARTE-243 continua valendo
inteira, sem uma linha de diferença.

**O alcance não é deste vídeo.** Medido no mesmo dia sobre os 17 espelhos do disco:
**14 estão em FINAL** (`ate-que-altura-construir`, `dentro-do-sol`, `dias-mais-curtos`, `fatos-a380`,
`galaxia-arco-flecha`, `itaipu-afogou`, `mongolia-lugar-frio`, `orcas-nao-matam`,
`planeta-em-meteorito`, `putin-fronteiras-otan`, `quasares-primordiais`, `rosto-da-formiga`,
`sol-artificial-fusao`, `tunel-trem-bala-japao`) e **3 em BRUTO** (`cerebro-quando-sonha`,
`especies-humanas`, `uruguai-despovoado`). Ou seja: o aviso nasceu certo no único projeto onde foi
testado — `especies-humanas`, que é BRUTO — e estaria errado em **todos os outros que o
regerassem**. *Recurso validado num projeto só herda o relógio daquele projeto.*

*A lição que generaliza: **toda leitura de `_cortes.json` é uma conversão de relógio disfarçada de
filtro.** Um corte não é um fato sobre a cena, é um fato sobre um EIXO — e quem o cruza com um
`inSec` tem de provar que os dois eixos são o mesmo antes de subtrair. A pergunta já tem dono
importável desde 12/ago (`src/relogio-espelho.mjs`); o defeito não foi não saber a resposta, foi
não ter feito a pergunta.*

### ARTE-251 · A tese dá dois números na mesma frase, e o desenhista SOMOU os dois — 11 cenas com `__duracao` inflada em até 7,5 s (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz `.claude/agents/editor-de-arte.md`)

Quando o decupador corta DENTRO do span de uma cena, o montador escreve o aviso na tese:
`⚠️ DURAÇÃO DE TELA: 8,7 s (7,0 s de corte dentro do span)`. O aviso é correto e necessário — o span
bruto não é a duração de tela, e sem ele o desenhista não saberia que há um corte ali. Só que a
frase oferece **dois números com a mesma cara**, e o que saiu do outro lado foi a soma:

| cena | tese diz | `__duracao` do HTML | conta |
|---|---|---|---|
| `s31-200-bilhoes-pressao` | 8,7 s (7,0 s de corte) | **15,74** | 8,73 + 7,01 |
| `s53-escala-inimaginavel` | 5,3 s (7,5 s de corte) | **12,8** | 5,31 + 7,49 |
| `s38-milhoes-de-km-do-nucleo` | 6,0 s (6,9 s de corte) | **12,86** | 6,01 + 6,85 |

**A correlação é limpa, e por isso a causa não é opinião.** Das 121 cenas com arte: as **14** cuja
tese traz a marca `DURAÇÃO DE TELA` produziram **11 defeitos**; as **107** sem a marca produziram
**zero**. O erro não está espalhado pelo vídeo — ele mora exatamente onde o aviso está.

**O que custa.** O render pergunta a duração À PÁGINA ([REND-40], `render-one.sh` avalia
`window.__duracao` no navegador), então a `s31` renderizaria **15,74 s de 4K** para um vão de 8,73 s:
44 % do clipe é inferência e máquina jogadas fora. O que o espectador vê é pior que o desperdício —
a coreografia foi espalhada por 15,74 s e o corte cai aos 8,73 s, no meio do argumento. O
número-herói de três das cenas entra **depois** do último frame que alguém vê. Nenhum gate por cena
acende: o contrato existe, a carga passa, não há colisão. Quem pega é o `qc-janela`, que é de
projeto e não de cena — e por isso não roda no laço de quem desenha.

**Conserto (aplicado).** `editor-de-arte.md` §2 passa a dizer, antes de qualquer coisa sobre tempo,
que `__duracao` é **sempre** o número que o brief carimba em `| duração (__duracao) |` — e que a
marca `DURAÇÃO DE TELA: X s (Y s de corte dentro do span)` é UMA informação, não duas: `X` é a
duração, `Y` é o aviso de que a fala tem um buraco lá dentro. `X + Y` não é grandeza nenhuma.

*A lição que generaliza: **um aviso que carrega dois números da mesma unidade é uma pergunta de
múltipla escolha para quem lê.** A tese oferecia "5,3" e "7,5" na mesma frase, ambos em segundos,
ambos sobre a mesma cena — e o leitor precisa de contexto externo para saber qual é o alvo. Onde a
instrução precisa que o leitor escolha certo, metade escolhe errado: aqui foram 11 de 14. Número
que não é o alvo da instrução deveria vir com a unidade do PAPEL dele, ou não vir.*

---

### ARTE-252 · Laudo de readaptação é FOTOGRAFIA, não estado — e sem carimbo de versão ele manda refazer cena já consertada (13/ago/2026, `orcas-nao-matam`)

A estação Arte abriu com um achado herdado do turno anterior: **24 cenas com HTML no relógio velho**.
A re-decupagem de 11–12/ago encurtou o master de 1142 s para 1048,4 s, o remapeador reancorou o
ESPELHO e não tocou nos HTMLs — então `c01`, o cold-open showpiece, tinha `__duracao 31,28 s` numa
janela de 5,15 s (6,07×) e era cortada no meio da construção. O defeito era real, e a fila de
despacho saiu do `_readaptacao.json`.

**O erro: o laudo tinha 15 horas e duas das cenas já estavam consertadas.** `c03` (`DUR=12.94`
contra janela 12,943) e `c14` (`DUR=14.69` contra 14,687) foram gravadas às 05:24 de 13/ago por
outra sessão. O laudo é de 12/ago 21:03 e **nada nele registra contra qual versão do HTML julgou** —
então lê-se como estado atual, e dois agentes Opus foram despachados para recompor cena correta. O
`qc-janela` (que lê o disco) já discordava do laudo no mesmo instante: não listava nenhuma das duas
em DURAÇÃO. Re-rodar o `plano-readaptacao` depois do conserto devolveu **22 cenas, não 24** — as
duas saíram sozinhas.

**Conserto (aplicado).** `scripts/plano-readaptacao.mjs` passa a carimbar `hash_html` (sha1:12, o
mesmo carimbo que a `_fila-correcao.jsonl` usa para vencer achado velho) em cada cena, mais um campo
`aviso_de_validade` no topo dizendo como conferir. Quem monta despacho **confere o hash contra o
disco antes**; divergente = re-rodar `qc-janela.mjs`, que lê o disco, e tratar ELE como a verdade.

**O que isto tem de diferente da [[ARTE-251]]:** lá o defeito era a instrução ambígua sobre *qual
número* é a duração; aqui a instrução é clara e o **número está velho**. São falhas separadas do
mesmo artefato, e a segunda só aparece quando duas sessões trabalham no mesmo vídeo no mesmo dia —
que hoje é o normal, não a exceção.

**A economia que a mesma leitura destravou.** O turno anterior parou nas 24 porque tratou a
re-direção (diretor-de-arte = Fable) como passo 1 obrigatório, e o Fable estava no teto em 9 de 11
portas. Mas **só 6 das 24 são faixa `invencao`**: as outras 18 são `composicao`/`molde`/`mapa`, que
rodam em **Opus**. E readaptar não exige reescrever o `conceito-visual`: passando a direção ORIGINAL
ÍNTEGRA dentro do achado (metáfora/técnica/showpiece/âncora, [[ARTE-94]] §2 preservada), o
`consertar-cenas.mjs` recompõe a cena na janela de hoje sem gastar um token da cota escassa — e o
escape `ESCALAR:` do briefing dele devolve ao Fable só o que de fato exigir metáfora nova.

*A lição que generaliza: **artefato de diagnóstico é perecível, e a data de validade dele é a próxima
gravação do arquivo que ele julga.** Um laudo que não carimba a versão do que mediu não pode ser
distinguido de um laudo atual — e como ele é lido para GASTAR inferência, o custo do engano é
exatamente o recurso que o laudo existe para poupar. Todo artefato que vira ordem de compra precisa
carregar o hash do que julgou.*

### ARTE-253 · O decimal da casa é VÍRGULA, e o gate só lia PONTO — a âncora truncou 0,6 s e o laudo mandou destruir uma cena sã (13/ago/2026, estação ARTE do `orcas-nao-matam`, agente-raiz `scripts/qc-janela.mjs`)

O `qc-janela` isenta quem está em dia por uma regra absoluta, anterior a qualquer consenso: *"quem
declara a âncora VIGENTE está em dia, ponto"*. A isenção existe justamente para o gate não acusar as
cenas que **acabaram de ser consertadas**. Ela só funciona se o gate conseguir LER o que a cena
declara — e a leitura era `[0-9]+(?:\.[0-9]+)?`, que aceita ponto e não aceita vírgula.

Este estúdio escreve o cabeçalho em PT-BR. A `c28` (mapa do Estreito de Gibraltar, recomposta às
11:04 do mesmo dia) gravou `inSec 733,60 · dur 16,028`. O regex casou `733`, e a âncora entrou na
conta 0,6 s menor que a real. Como `TOL_IN` é **0,4**, esses 0,6 bastaram para a cena perder a
isenção e cair no ramo do consenso, que lhe carimbou o deslocamento inteiro da turma:

```
c28  ANCORAGEM · arte ATRASADA 144.84s — SUBTRAIA 144.84s dos tempos do renderAt
                 (a fala da janela só bate 7%)
```

A aritmética fecha exata e é a prova: `(733 − 733,6) − 144,237 = −144,84`. Lendo `733,60` o desvio
é **0,00** e a cena é isenta.

**A cena estava certa, e isso se mediu por dois caminhos independentes.** O word-lock do HTML cita
`"2025,"(0,88)`, `"Espanha,"(9,26)`, `"Portugal"(9,87)` e `"leme"(14,24)` — palavra por palavra a
fala vigente da janela em `words-final.json` (*"A partir de 2025, começaram a aparecer vídeos… entre
a Espanha, Portugal e o Estreito de Gibraltar, batendo com o corpo no leme até o barco parar"*). E os
shots em t=1,0 s e t=14,5 s mostram a câmera pousando no estreito com o rótulo e o crédito no lugar.

**Por que o alarme falso é pior que o silêncio, aqui.** O gate não emite dúvida, emite INSTRUÇÃO:
*"SUBTRAIA 144,84 s dos tempos do renderAt"*. Numa cena de 16 s isso joga todo o `renderAt` para
tempo negativo — obedecer destrói a arte que já estava certa. E a conta seguinte é de cota: das 6
cenas que o laudo apontava neste vídeo, 5 são da faixa **invenção**, a que só o Fable desenha e cuja
cota estava esgotada nas 11 contas. *Um gate que mede errado não fica neutro: ele manda estragar o
que está certo, e cobra a conta no recurso mais escasso da casa.*

**A regra que generaliza:** todo número que um gate LÊ de um artefato escrito em PT-BR aceita os dois
separadores decimais. Ler com régua de outra língua não falha — trunca, e o truncamento entra na
aritmética como se fosse medida.

### ARTE-254 · "Peça FOLGA no card de título" é conselho do vão aberto pelo XML — no vão MATERIALIZADO, folga é INVASÃO da fala (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz `scripts/qc-janela.mjs`)

A [[ARTE-93]] nasceu num mundo em que o buraco do card não existia no arquivo: o XML abria o gap na
montagem, o clipe entrava dentro dele, e clipe MENOR que o gap deixava **tela preta no resto**
(2,1 s no `paises-baixos-mar`, a cena-mãe da lei). Naquele mundo o conselho é obviamente certo —
sobra é barata, falta é preto —, e o gate o repetia: *"a ARTE-93 pede FOLGA (os irmãos sadios ficam
em ~3,9)"*.

**Desde que o espelho nasce em tempo FINAL, o buraco é FÍSICO.** O `_master-decupado.mp4` já contém
o vão, e ele mede exatamente o que a `dur` do card diz. Medido no `dentro-do-sol`: `gapSec` 3,0 nos
quatro cortes de classe `titulo`, e master de **1198,534 s = 1186,534 + 12,000** — os 4 × 3,0 s estão
dentro do arquivo. Um card de ~3,9 s aqui não ganha margem nenhuma: põe **0,9 s de card por cima da
primeira palavra do capítulo seguinte**, e com quatro cards são **3,6 s** de invasão.

**O custo real do aviso ambíguo não é o alarme — é a paralisia, e depois o dano.** Duas passadas de
QC seguidas pararam nesta linha e registraram *"4 cards com margem 0,00s (ARTE-93 × FIN-168, não
mexi)"*: ninguém sabia para que lado andar, porque a [[FIN-168]] (🔴 aberta) descreve a deriva de
0,9 s por card entre o vão de 3,0 s do espelho e o de 3,9 s do XML, e o gate mandava produzir
justamente essa diferença. A terceira passada que resolvesse "obedecendo o gate" quebraria o vídeo.

**A regra.** O tamanho do vão se lê no ARTEFATO, não na doutrina: quando o master materializa o
buraco, `__duracao == dur` é o estado **correto** e margem 0,00 não é defeito. O conselho de folga
vale só onde o vão é aberto na montagem. O gate agora decide pelo mesmo teste que já usava para
escolher o gap (espelho em relógio FINAL = vão materializado) e diz **NÃO estique**, com a conta da
invasão em segundos. Conferido no acervo antes de entrar: `fatos-a380` e `quasares-primordiais`
estavam no mesmo caso (4 cards cada) e passam a ser orientados a não esticar; `especies-humanas`
(vão não materializado) mantém o texto antigo; `orcas-nao-matam` e `galaxia-arco-flecha` sem
alteração.

*Conselho de gate envelhece junto com a rota que o gerou. Quando a arquitetura muda embaixo de uma
lei, o perigo não é ela ficar inútil — é ela continuar sendo obedecida.* Ver [[ARTE-93]], [[FIN-17]],
[[FIN-168]].

---

### ARTE-255 · O halo de blur alto é CORTADO na caixa do texto e vira retângulo luminoso — e nesta casa ele é pintado em RUNTIME, onde grep nenhum o acha (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz `editor-de-arte`)

`text-shadow` com blur muito grande não desvanece: o navegador o recorta no *bounding box* da linha, e
sobre fundo escuro sai um **bloco de bordas retas** — topo, base e laterais — em volta do lockup. A
faixa medida é conhecida: **≈120px ainda decai liso, ≈220px já corta**. Sobre o disco solar o mesmo
halo lava a textura numa banda horizontal reta, que lê como defeito de compressão.

**O que fez este defeito escapar de 25 cenas de um vídeo só não foi a régua — foi ONDE o valor mora.**
As cenas desta casa pintam o glow dentro de `__renderAt`, montando a string a cada frame:

```js
baseShadow = '0 0 '+(30+18*g).toFixed(0)+'px rgba(255,244,214,…),'+
             '0 0 '+(200+80*g).toFixed(0)+'px rgba(255,150,40,…)';   /* ← 280px no pico: CORTA */
```

O CSS estático da mesma cena declara blurs de 14–78px, todos irrepreensíveis. Quem audita por grep
mede o CSS, encontra 78px, e conclui que a cena está sã — foi o que aconteceu três vezes seguidas nesta
passada, com réguas diferentes, sempre errando **para o lado tranquilizador**. Pior: o `editor-de-arte`
despachado para consertar faz a mesma busca, não acha blur alto, responde *"já está correto"* e o
achado sai da fila como `sem-mudanca` com o defeito intacto.

**Duas consequências práticas.** (1) Ao escrever glow em runtime, some as camadas no PIOR caso
(`g=1`) e mantenha o total ≤120px; halo mais largo que isso **se pinta como camada própria** — uma div
maior que o texto com `radial-gradient(ellipse, …)` e `mix-blend-mode:screen`, que não tem caixa de
linha para cortar. (2) Ao auditar, a medida é o FRAME, nunca o código: `shot.mjs` no instante do pico
e a pergunta é uma só — *existe borda reta sobre o fundo?*

*Um valor que só existe depois do JS rodar não é auditável por leitura, e a auditoria por leitura não
falha em silêncio: ela devolve o número bonito do CSS e chama a cena de sã.* Ver [[ARTE-253]],
[[SIS-357]].

### ARTE-256 · A tabela de faixa tinha DUAS cópias, e a divergência não roteava errado: ela FUNDIA errado (13/ago/2026, estação ARTE do `especies-humanas`, agente-raiz `scripts/lib/faixa-de-cena.mjs`)

`scripts/lib/faixa-de-cena.mjs` abre dizendo-se *"o dono ÚNICO da pergunta"* e cita a [[SIS-287]] —
*a regra certa num módulo não protegeu quem tinha cópia própria*. Enquanto isso, `desenhar-cenas.mjs`,
que é **quem de fato despacha**, mantém a tabela repetida em linha própria (`const COMPOSICAO = new
Set([...])`). Comparadas modo a modo, as duas discordavam em `navegacao`: molde no driver, composição
na lib.

**Procurei a divergência esperando despacho para o agente errado, e não era isso.** As duas faixas
rodam em Opus, então o roteamento saía igual pelos dois caminhos — é exatamente por isso que a
divergência sobreviveu. O dano estava no OUTRO consumidor: a lib tem um só, o `fusao-candidatos.mjs`,
e ele lê a faixa justamente para **nunca fundir através dela**. Com `navegacao` marcada como
composição, um card de navegação adjacente a um footage lia como mesma faixa e era candidato a entrar
no MESMO HTML — que é precisamente o que a [[FIN-03]] proíbe: card de navegação é overlay alpha
compacto sobre o vídeo, nunca full-frame. Medido no dia: **4 pares assim, em `quasares-primordiais` e
`sol-artificial-fusao`**. Depois do conserto, 0.

A incoerência era interna e visível a olho: o **M26 do catálogo é um template só** — *"Card de
navegação/progresso + CARD DE TÍTULO DE TÓPICO (mesmo template)"* — e `titulo-topico`, a outra metade
do mesmo M26, sempre esteve em `MOLDE`. Meia entrada de um modelo numa faixa e meia noutra.

**A régua que isto deixa:** ao caçar o dano de duas tabelas que divergem, não pare em quem escolhe o
agente. Liste os consumidores do módulo (`grep -rn "<lib>" scripts/ src/`) e pergunte de cada um o que
ele faz com o valor — aqui, um decidia QUEM desenha (inerte, os dois lados Opus) e o outro decidia o
que vira UM ARQUIVO (destrutivo, e só apareceria montado). *Divergência cujo efeito principal é
inerte é a que mais sobrevive, porque o teste óbvio a inocenta.*

Ao mesmo tempo, um falso-positivo que vale registrar: `mosaico` (M29) NÃO é o mesmo caso. Ele cai no
`else` do driver e vira invenção, e a lib o lista em `INVENCAO` **nominalmente** — decisão deliberada,
sob a doutrina declarada no cabeçalho (*"modo desconhecido cai em `invencao` de propósito… na dúvida, a
mais alta"*). Cena de M29 tem registro real em cada painel e parece composição; classificá-la como
invenção é escolha, não esquecimento. Ver [[ARTE-213]], [[SIS-287]], [[FIN-03]].

### ARTE-257 · O gerador do prompt de direção só sabia FALAR DE EXTENSÃO — e no vídeo sem arco nenhum ele mandava, com dois números cravados, não reservar showpiece (13/ago/2026, estação DIREÇÃO DE ARTE do `uruguai-despovoado`, agente-raiz `scripts/direcao-prompt.mjs`)

`direcao-prompt.mjs` nasceu para a [[ARTE-229]] — o re-espelho que abre cenas mudas ao lado de um
`conceito-visual.json` íntegro — e por isso todo o texto dele está escrito na voz de quem ESTENDE um
arco que existe. No `uruguai-despovoado` não existia arco nenhum: o espelho de 05/ago foi invalidado
pela re-decupagem e o conceito nunca chegou a ser escrito (procurei no disco e no bucket: não há).
O gerador não tem modo para esse caso, então produziu o mesmo prompt com os buracos à mostra —
*"as **0** cenas de arte viraram 86"*, *"o `conceito-visual.json` continua no disco, íntegro"* sobre um
arquivo que não existe, e um `### O ARCO VIGENTE (contexto — obedeça, não reescreva)` com a palavra
**`null`** embaixo, porque `arco_vigente.texto` vinha nulo.

**Nada disso é o dano.** O dano são duas linhas que o modelo obedeceria sem hesitar, e que estavam
**cravadas em literal** no template — *"O arco já reserva **5** picos e **4** deles sobreviveram"* e
*"espere marcar `showpiece: true` em **0 ou 1** cena"*. Os dois números não vinham de projeto nenhum:
eram fixos, e sairiam iguais em qualquer vídeo. Num vídeo sem arco, os cinco lotes rodam em sessões
separadas e sem memória; cada um leria que os picos já estão reservados por outra passada e marcaria
zero. O `uruguai-despovoado` atravessaria a direção inteira — 86 cenas, cinco chamadas da cota mais
escassa da casa — e chegaria à arte com **zero showpiece**, que é exatamente a fileira de cenas todas
no mesmo nível morno que a [[ARTE-39]] existe para impedir. E o `validar-contrato` não pega: ele não
exige `showpieces` (só 3 dos 10 arquivos reais tinham).

O gerador ganhou os dois modos explícitos (`CRIACAO` × `extensao`, decididos por `arco_vigente.texto`).
No modo criação o prompt diz que o arco NASCE ali, corta o bloco de arco vigente, e — no lugar dos
literais — dá a cota que a [[ARTE-39]] pede repartida pelos lotes: *no máximo 1 showpiece neste lote, o
pico DESTA faixa*, com a faixa em segundos e o índice das 86 cenas vivas marcando as do lote, para que
cinco sessões cegas umas às outras ainda distribuam 3–5 picos pelo vídeo. A espinha que as amarra passou
a ser a `tese` e a `paleta` do próprio espelho, impressas no prompt. No modo extensão os dois números
passaram a ser contados do projeto.

Na mesma passada caíram dois resíduos que só se veem lendo o prompt RENDERIZADO, nunca o template:
`needs.geo` é lista de OBJETOS (`{tipo,id,rotulo}`) e o `join(", ")` cru escrevia **`[object Object]`** —
as 18 cenas de mapa deste vídeo chegavam ao diretor sem saber qual geometria pedem; e o rodapé ensinava
mídia real com um exemplo colado de OUTRO vídeo (*"o denisovano não tem rosto conhecido, e o arco já
resolve isso com contorno vazado"*), que aqui não descreve nada.

**O caminho (a) inteiro supunha o conceito prévio, e o segundo buraco só cobraria DEPOIS de pagar.**
`direcao-fundir.mjs` abria com um `readFileSync` seco do `conceito-visual.json`: no vídeo do zero ele
morre em **ENOENT com as cinco partes órfãs no disco** — os cinco lotes do Fable já gastos, a estação
sem fechar, e o conserto tendo de ser feito na hora. E criar o arquivo não bastava: o `required` do
contrato é `["arco","cenas"]`, e **ninguém no caminho (a) produz o `arco`** — 86 cenas dirigidas
reprovariam no `--estrito` por falta de uma prosa de 60 caracteres. O fundidor passou a criar o
esqueleto, a adotar o `arco` da parte que o trouxer (do primeiro, sem sobrescrever, porque os lotes
rodam cegos uns aos outros), a ACUMULAR `faltas` e `fluxo` — que cada lote só enxerga na própria faixa —
e a DERIVAR `showpieces` das cenas com `showpiece:true`, já que uma lista escrita à parte só teria como
divergir delas. O prompt do modo criação pede esse cabeçalho, com o `arco` designado ao lote 1.

**E o terceiro, que apareceu só quando a coisa DEU CERTO.** O `direcao-arte-driver.mjs` media o próprio
sucesso pela existência do `conceito-visual.json` — enquanto o prompt que ele mesmo dispara proíbe em
maiúsculas que o agente toque nesse arquivo. Resultado: o lote 1 escreveu 18 cenas dirigidas depois de
**11,8 min de Fable** e foi anunciado como `AUSENTE ⚠` + **exit 1 = "erro real"**. O `direcao-lotes.sh`
sobrevive porque testa o ARTEFATO antes do código de saída, mas quem lê o relatório e re-dispara o lote
paga de novo a cota mais escassa da casa. O alvo passou a sair do nome do prompt (`lote-*` /
`readaptar-*` → a parte; qualquer outro → o conceito). *Duas peças do mesmo par diziam coisas opostas
sobre onde o trabalho pousa, e a que mentia era a que dava a nota.*

Vale registrar o que a mesma rodada provou sobre a COTA: `var/estado/quotas/fable.json` dava as **11 portas
no teto**, com resets de 19,5 h a 151 h, e o registro tinha 10 minutos de vida — mas a **porta 10
atendeu**. O mapa fresco errou, e teria custado ao vídeo um dia inteiro de espera se eu tivesse aceitado
a leitura. Sonda barata e registro servem para ORDENAR as tentativas, nunca para dispensá-las: quem
decide se há vaga é o despacho real, e ele custa segundos quando não há (9 portas recusaram em 47 s).

**A régua que isto deixa:** script que monta prompt é agente-raiz como qualquer `.md`, e a revisão dele
é **ler a saída renderizada, não o template** — o template esconde `[object Object]`, esconde `null` sob
um cabeçalho afirmativo e esconde número cravado, porque no caso para o qual foi escrito os três saem
certos. E o teste específico: *quando o insumo vem VAZIO, este texto vira mentira com voz de autoridade?*
Um gerador com um modo só sempre tem um segundo caso — ele só ainda não apareceu. Vale para o pipeline
todo, não para o primeiro script: **percorra a rota inteira com o insumo vazio ANTES de gastar a cota**,
porque o defeito que espera no fim cobra o preço cheio. Ver [[ARTE-39]], [[ARTE-229]], [[ARTE-247]].

### ARTE-258 · Overlay que compõe SOBRE footage tem de herdar a transformação do vídeo — inclusive a origem, convertida (13/ago/2026, `galaxia-arco-flecha/s80`, agente-raiz `editor-de-arte`)

**O caso.** A `s80` compõe um mosaico de rádio dentro da tela de um monitor que aparece no footage.
O rect foi medido no clipe (`1475,166 / 1231×374`), convertido para dentro da pálpebra
(`margin-left:-1150px` → `left:325px`) e o overlay entrou como IRMÃO do `<video>`, o que já resolve
o deslize da pálpebra de graça. O shot mostrou o mosaico na tela — **e uma faixa de ~100 px no topo
onde o cabeçalho do footage reaparecia**, com o texto em inglês que a composição existia para tapar.

**A causa.** O `<video>` tinha um push-in PRÓPRIO, uma linha adiante no mesmo `draw()`:
`vid.style.transform='scale(1.02+0.05*seg(t,8.10,3.4))'`. Ser irmão herda o transform do PAI, não o
do irmão. A tela cresceu; o overlay ficou parado.

**A regra.** Antes de compor em coordenadas fixas sobre um elemento de mídia, **liste todas as
transformações que ELE recebe** — não só as do contêiner. Cada uma tem de ser copiada para o
overlay. Na prática, calcule a transformação uma vez e aplique nos dois:

```js
var escV = 'scale(' + (1.02 + 0.05*seg(t,8.10,3.4)).toFixed(4) + ')';
if (vid) vid.style.transform = escV;
var tR = E('telaR'); if (tR) tR.style.transform = escV;   // MESMO valor, sempre
```

**A pegadinha é a ORIGEM, e ela erra em silêncio.** `transform-origin` é relativa ao PRÓPRIO
elemento: o padrão `50% 50%` do vídeo é o centro do vídeo, e o padrão do overlay é o centro do
overlay — dois pontos diferentes, e o mesmo `scale()` os afasta. Converta: o centro do vídeo
(1920,1080 do clipe) cai em 770,1080 dentro da pálpebra; medido de dentro do overlay, que começa em
325,166, é **445,914** — e é isso que vai no `transform-origin` dele.

**Por que isto é caro.** Nenhum gate vê: o `check-overlap` mede colisão entre TEXTOS (o footage não
é texto), o `qc-fora-do-quadro` mede o que sai do palco (nada saiu), o `qc-carga` conta entradas. A
composição estava "certa" em t=0 — onde o scale ainda é ~1,02 — e se abria com o tempo. **Defeito
de composição sobre mídia só aparece OLHANDO, e em mais de um instante.** Tire shots em pelo menos
três pontos da janela em que a mídia está no ar, e recorte a região da composição: a olho, num
frame de 3840×2160, uma faixa de 100 px passa despercebida.

Agente-raiz: `.claude/agents/editor-de-arte.md` (composição sobre footage).

### ARTE-259 · A faixa da cena tinha TRÊS cópias, não duas — e a terceira é a que chega a quem executa (13/ago/2026, estação ARTE do `fatos-a380`, agente-raiz `scripts/lib/faixa-de-cena.mjs` + `scripts/desenhar-cenas.mjs` + `scripts/estudio/estacoes/arte.md`)

A [[ARTE-256]], escrita horas antes desta, achou a tabela de faixa repetida em **duas** cópias que
discordavam e consertou a divergência. Faltava uma: a **prosa do briefing da estação**
(`estacoes/arte.md` §3), que é a única das três que um agente lê ao executar a Arte — as outras duas
só rodam quando alguém chama o driver. Ela omitia `mosaico` e `navegacao`. Quem classificasse a olho,
como o próprio texto manda quando não há `regencia.json`, mandaria os dois ao Fable.

**E o caso concreto pagou por isso.** O `fatos-a380` fechou o dia com 2 cenas de 79 pendentes e as 11
portas de Fable no teto até 14–19/ago. Uma era invenção de verdade (`s78`, desenho M21, mídia
"construída") e a outra era a `s99-mosaico-recap` — um M29 de três registros que já estavam no disco,
1 `.jpg` e 2 `.mp4`. Pelas três listas ela era invenção, então o vídeo inteiro esperaria ~16 h pela
primeira porta a resetar para compor três painéis de mídia paga já baixada.

**A medida que desempatou, e por que ela vale mais que a leitura.** A ARTE-256 tinha classificado
`mosaico` em `INVENCAO` **deliberadamente**, sob o "na dúvida, a mais alta" do cabeçalho da lib — não
foi esquecimento, e a doutrina conservadora estava certa em existir. O que a derrubou foi contar os
HTMLs que este estúdio já produziu, no mesmo vídeo, por modo (linhas · elementos SVG desenhados ·
mídias reais):

| modo | faixa | linhas | **paths** | mídias |
|---|---|---:|---:|---:|
| `desenho` | invenção | 414 | **53** | 0 |
| `footage` | composição | 144 | **0** | 2 |
| `mosaico` (M29) | *era invenção* | 148 | **0** | 3 |

O M29 tem o perfil do `footage`, não o do `desenho`: **ele não desenha nada**. A `s04-chuveiro-bar-peso`
— M29 deste vídeo, desenhada PELO Fable — é três `<img>` reais e zero geometria, e a "metáfora"
declarada no cabeçalho dela é a ordem de entrada dos painéis, que é coreografia de enquadramento. E
não é acidente do caso: o catálogo torna o registro real **constitutivo** do modelo (*"N painéis, cada
um com registro real do lugar + nome + cor própria"*). **Onde o catálogo prescreve a estrutura E a
mídia, o que sobra para criar é enquadramento** — que é a definição de composição, palavra por palavra,
no cabeçalho da própria lib.

`cinematico` FICA em invenção, e a distinção é a régua que isto deixa: ele tem o **mesmo perfil de
contagem** (128 linhas, 0 paths, 2 mídias) e nenhuma estrutura prescrita. O que move o M29 não é "usa
mídia real" — o footage também usa — é **o catálogo já ter decidido a composição por ele**.

**A régua de processo:** ao revisar uma classificação que alguém tomou de propósito, não basta achar o
argumento fraco; é preciso trazer medida que o autor não tinha. E ao mexer numa tabela que a lei de
ontem unificou, **re-meça os OUTROS consumidores antes de commitar** — aqui, `fusao-candidatos.mjs`
saiu idêntico (14 runs / 22 cenas no `rosto-da-formiga`, nenhum tocando mosaico), e as duas tabelas
voltaram a concordar nos 18 modos do catálogo. Reabrir a divergência que a ARTE-256 fechou teria
custado mais que a cena.

*Cópia em PROSA é a pior das cópias: código que diverge um dia dá comportamento diferente e alguém
mede; documento que diverge só envelhece, e envelhece exatamente onde alguém está lendo para agir.*
A cura não é manter as três em dia — é a prosa mandar PERGUNTAR (`desenhar-cenas.mjs --listar` já
imprime a faixa de cada pendente, aplicando a lib) em vez de reproduzir a lista.

Agente-raiz: `scripts/lib/faixa-de-cena.mjs` (fonte única), `scripts/desenhar-cenas.mjs` (lista
própria do driver), `scripts/estudio/estacoes/arte.md` §3 (a prosa que chega a quem executa).
Ver [[ARTE-256]], [[ARTE-71]], [[SIS-287]].

### ARTE-260 · O espaço entre dois spans mora no PAI, e o pai quase nunca tem `font-size` — ele encolhe para 16px e as palavras colam (13/ago/2026, `fatos-a380/s78`, agente-raiz `editor-de-arte`)

A última cena de invenção do vídeo saiu com o rótulo **"A FIAÇÃO ATRASOU O AVIÃO EMDOIS ANOS"**. O
HTML estava certo — o espaço está lá, no fonte:

```html
<div id="dado"><span class="t1">A FIAÇÃO ATRASOU O AVIÃO EM</span> <span class="t2">DOIS ANOS</span></div>
```

Os dois spans declaram `font-size:106px`. **O espaço entre eles não é filho de nenhum dos dois** — é
um nó de texto filho do `#dado`, e herda o `font-size` DELE. O `#dado` declarava posição, alinhamento
e `white-space`, e **nenhum `font-size`**: herdou os 16px do body. Medido no Chrome: o nó de texto
tem **2,41px** de largura, onde o espaço da Neue Haas a 106px mede **17,38px**. Sete vezes menor —
que na tela é nenhum.

**Por que os cinco gates deram verde.** `qc-contrato`, `qc-carga`, `check-overlap`,
`qc-fora-do-quadro` e `_audit-til` passaram, com as palavras coladas no 4K. E não é buraco de gate: o
`check-overlap` procura caixas que se **sobrepõem**, e aqui elas se **encostam** — o estado que todo
motor de layout considera correto. Não existe métrica de "distância mínima entre duas palavras",
porque a distância entre palavras é justamente o que o espaço deveria estar resolvendo. *Defeito que
nasce da AUSÊNCIA de um valor não aparece em gate que audita os valores presentes.*

**A cura é uma linha, e é estrutural:** todo contêiner com filhos inline de `font-size` próprio
declara `font-size` igual ao maior deles. Vale para qualquer whitespace daquele bloco, hoje e depois.
A alternativa local — `<span class="t2">&nbsp;DOIS ANOS</span>` — conserta só aquele espaço.

**A medida que separa o defeito do ruído, e ela é o que torna a varredura utilizável.** Varrer por
"há whitespace entre dois inlines grandes" acusou **37 das 79 cenas** do `fatos-a380` — quase
metade, o que é o cheiro de um gate inútil. Todos os 37 tinham `largura: 0`: whitespace **colapsado**
entre elementos block ou absolutos, que não gera caixa nenhuma e é só indentação do código-fonte.
O critério certo tem piso **e** teto:

```
0 < largura(nó de texto) < 10% do font-size dos vizinhos   →  defeito
largura == 0                                               →  colapsado, irrelevante
```

Com esse corte, a mesma varredura devolveu **1 de 79** — a cena que de fato tinha o problema. *Filtro
que acusa metade do acervo não está achando um defeito comum: está medindo a coisa errada.*

Agente-raiz: `editor-de-arte` (§7·0). Ver [[ARTE-183]], [[ARTE-148]].

### ARTE-261 · A prova de crédito mora na RAIZ de `_media/`, e o dossiê só olhava a pasta da cena — a arte suprimiu crédito obrigatório em 8 cenas obedecendo corretamente uma informação errada (13/ago/2026, estação QC do `fatos-a380`, agente-raiz `scripts/_brief-arte.mjs`)

O `qc-atribuicao` reprovou **oito cenas** de um vídeo pronto — `card-t7`, `s04`, `s08`, `s20`,
`s22`, `s45`, `s62`, `s96` — todas usando foto ou vídeo **CC BY / CC BY-SA sem creditar em nenhuma
das duas rotas**. CC BY licencia o uso *sob a condição* de creditar: sem o crédito, o uso não está
licenciado, e o problema deixa de ser da cena e passa a ser do canal.

Nenhuma dessas cenas errou. Os cabeçalhos delas dizem, com todas as letras, *"procedência não
declarada"* — porque foi exatamente isso que o dossiê entregou. A `procedenciaDe()` do
`_brief-arte.mjs` montava o caminho assim:

```js
const alvo = path.join(path.dirname(abs), '_PROCEDENCIA.json');   // só a pasta do arquivo
```

E boa parte da procedência deste estúdio **não mora lá**: mora na RAIZ de `_media/`, que é onde o
`pesquisa-imagens` grava quando declara um lote inteiro de uma vez. Resultado: mídia plenamente
declarada — com autor, licença e URL — recebia `⚠ procedência NÃO declarada`, e essa frase manda o
editor-de-arte **não creditar**. *A arte obedeceu corretamente uma informação errada; o defeito
nunca foi dela.*

**Este é o TERCEIRO bug da mesma família na MESMA função**, e os três produzem a mesma frase falsa
pela mesma razão: a prova existe, está declarada, e não chega em quem decide. Os dois anteriores
eram de FORMATO (array em vez de objeto; `fonte` aninhada); este é de LUGAR. Quando três defeitos
distintos convergem numa única mensagem de saída, a mensagem é o sintoma — o que precisa de gate é
a AFIRMAÇÃO ("não há prova"), não cada caminho que leva a ela.

**A cura é buscar em cascata, subindo até `_media/`, com a pasta da cena vencendo a raiz** (a
específica sabe mais que a geral). E a chave tem duas formas: o nome puro do arquivo e o caminho
relativo a `_media/` (`drone/s46-taxi-alargado/s46-....mp4`), que é a forma que a raiz usa.

**O que denuncia isto sem ler código:** o cabeçalho da cena AFIRMA que não há procedência. Trate
essa frase como hipótese, nunca como fato — `grep -r "<nome do arquivo>" out/<proj>/_media/` custa
nada e responde. Foi assim que três agentes de `qc-visual`, cada um no seu lote, acharam o mesmo
defeito de forma independente.

**E o gate tem um furo que este caso expôs:** o `qc-atribuicao` **passou** em `s43` e `s50`, que
também não creditavam os fotógrafos — ele testa se EXISTE um elemento `data-qc-papel="credito"`,
nunca **quem está escrito nele**. A tela da `s50` credita o DADO (*"Fonte: Emirates, 2017"*) e não
os três autores das fotos. *Gate que confere a presença do campo e não o conteúdo dele dá PASS
falso justamente na cena que teve o cuidado de pôr um crédito.*

O conserto de todas as 13 mídias foi **uma edição de texto** em `_atribuicoes-descricao.md`
([ARTE-104]: a tela é do espectador, não do jurídico) — zero pixel, zero render. O caro nunca foi
consertar: foi descobrir.

Agente-raiz: `scripts/_brief-arte.mjs`. Ver [[ARTE-209]], [[ARTE-104]], [[ARTE-187]], [[ARTE-196]].

### ARTE-262 · "Pergunte ao `--listar`" é a cura certa — mas a resposta depende de ONDE e de QUANDO você perguntou, e as 56 árvores de estação estão todas atrás (13/ago/2026, estação ARTE do `especies-humanas`, agente-raiz `scripts/desenhar-cenas.mjs` + os worktrees `worktrees/<proj>`)

A [[ARTE-259]], escrita horas antes desta, fechou o caso das três cópias da tabela de faixa com a
cura certa: *não mantenha listas em dia — mande PERGUNTAR*, porque `desenhar-cenas.mjs --listar`
aplica a tabela que de fato despacha. A cura está certa e eu a segui. Ela tem um pressuposto que
ninguém declarou: **que só existe um `desenhar-cenas.mjs`.**

Existem dois. A estação de ARTE deste vídeo abre com o diretório primário em
`worktrees/especies-humanas`, e o Bash volta para lá sozinho entre comandos. Esse worktree está
parado em **29/jul — 1228 commits atrás**. O mesmo comando, no mesmo minuto, com o mesmo projeto:

| rodado de | veredito |
|---|---|
| `top10-estudio/` (principal) | `51 sem HTML — 1 composicao (opus-5) · 50 invencao (fable-5)`; `n017` = **composição** |
| `worktrees/especies-humanas/` | `62 sem HTML — 0 molde · 62 invenção (Fable)`; `n017` = **invenção** |

**Nenhum dos dois erra em voz alta.** Os dois imprimem um relatório bem-formado, com contagem,
emoji por faixa e nome de modelo. A pergunta prescrita pela lei foi feita e respondida — com a
resposta de duas semanas atrás.

**Separe os dois vetores, porque só um deles foi pago — e a atribuição honesta muda a lição.**

*Vetor 1, o que de fato aconteceu com a `n017`, e ninguém errou.* A nota de fila que abriu esta
estação dizia "as 51 restantes são 100% INVENÇÃO", e era **verdade quando foi escrita**: as
sessões de 14:05Z e 16:37Z mediram certo, com o código que existia. O `mosaico` só saiu de
invenção às **17:52Z** (`5b410d9b`/`2977fedb`, a [[ARTE-259]]) — 1h15 depois da última delas. A
cena esperou ~2h45, não as 13h da cota, e o que a destravou foi re-perguntar em vez de herdar a
classificação. *Nota de fila é um retrato, não um fato; ela envelhece no intervalo entre estações,
que é exatamente quando os consertos entram.*

*Vetor 2, medido e não pago — desta vez.* As **11 cenas de diferença** (62 − 51) são as **filhas
de run fundido**, e a árvore velha não as conhece porque a fusão que as marcou `_mergedInto` é
posterior a ela. Um driver despachado de lá desenharia **11 HTMLs órfãos**, que nenhum XML
referencia e nenhum vídeo mostra — **em Fable**, com as 11 contas no teto. Não foi pago porque as
sessões anteriores rodaram do principal; foi sorte de cwd, não desenho. *A árvore velha não erra
só a faixa: ela erra o CONJUNTO, porque não sabe o que foi fundido desde então.*

**E não é um worktree: são 56, e nenhum está em dia.** Medido no mesmo minuto — o mais novo a
**787 commits** atrás (08/ago), o mais velho a **1785** (18/jul), mediana em torno de 1160. Cada
estação de vídeo abre com o diretório primário no seu worktree, então esta não é uma anomalia
deste projeto: é o estado normal do parque. Pior, é **não-determinístico** — o Bash às vezes
resolve para o principal e às vezes volta para o worktree entre um comando e outro, então a mesma
sessão pode receber duas respostas diferentes da mesma pergunta. Foi o que me aconteceu: `--listar`
deu 51 na primeira chamada e 62 na terceira, sem que nada mudasse no projeto.

**O defeito é do CÓDIGO, não dos dados — e é por isso que passa despercebido.** O `out/` do
worktree é symlink para o `out/` do principal, então espelho, `_mergedInto` e conceito-visual são
os MESMOS bytes nas duas árvores. Prova: instalar o script novo dentro do worktree velho faz ele
responder `51 · 1 composição` de lá. A árvore velha não tem dado velho; ela tem um leitor velho do
dado certo. *Um projeto cujos dados estão perfeitamente compartilhados parece saudável por todos
os sinais que alguém costuma conferir.*

**O tell de custo zero, antes de qualquer despacho de arte:** `pwd` e comparar com
`git -C <árvore> log -1 --date=short`. Se a data for velha, tudo que o driver imprimir é história.
O sinal secundário é o próprio relatório: **a contagem de pendentes que SOBE** entre duas leituras
sem ninguém apagar HTML só tem duas explicações — re-espelho ou árvore velha.

*Uma cura que manda perguntar a um programa herda todas as maneiras de haver duas cópias daquele
programa* — e herda também o fato de a resposta ter validade curta. Os dois pressupostos que
"pergunte ao `--listar`" não declara são **onde** (qual árvore responde) e **quando** (há quanto
tempo você perguntou). O vetor 1 acima é o segundo pressuposto falhando sozinho, sem nenhum
worktree envolvido.

**O conserto tem um limite que é da natureza do problema, e ele precisa estar escrito:** o
guardião de árvore não alcança a árvore que quer proteger, porque a árvore velha por definição
não o tem. Ele protege quem roda do principal e qualquer árvore que envelheça a partir de hoje;
os 56 worktrees atuais só o receberão quando alguém os sincronizar — decisão de infra, não de uma
estação de arte, porque várias dessas árvores têm trabalho não commitado de outras sessões.

Agente-raiz: `scripts/desenhar-cenas.mjs` (roda relativo ao cwd, sem declarar de qual árvore veio)
e o worktree `worktrees/<proj>`, que serve `out/` por symlink correto e o CÓDIGO desatualizado.
Conserto de primeira ordem: rodar SEMPRE do principal por caminho absoluto. Ver [[ARTE-259]],
[[ARTE-256]], [[ARTE-102]].

### ARTE-263 · O revisor autônomo julga o FRAME sem ouvir a FALA — e por isso reprovava o word-lock, mandando adiantar o rótulo que a lei manda esperar (13/ago/2026, estação QC do `dentro-do-sol`, agente-raiz `scripts/revisar-no-lugar-do-mateus.mjs`)

O `revisar-no-lugar-do-mateus.mjs` recebe frames em PNG e a duração da cena. Só isso. A rubrica dele
manda, corretamente, *"OLHE OS FRAMES. Não leia o HTML para opinar"* — a lição de que gate que lê o
código conta o que o autor marcou, não o que aparece. Mas frame sem fala não responde a pergunta que
decide metade dos achados de ritmo: **QUANDO aquele elemento tinha permissão de entrar.**

Nesta casa o texto de tela é ancorado na palavra que o justifica. Então a tela fica mesmo quase vazia
enquanto a voz não chega — e para quem só vê os PNGs isso lê como build lento. Medido no
`dentro-do-sol`: **27 dos 172 achados vivos (16%, em 25 cenas)** pediam antecipar elemento
word-locked. Os quatro conferidos um a um, contra o `words-final.json`:

| cena | o revisor disse | a fala diz |
|---|---|---|
| `s17-fotosfera` | "o rótulo só existe em @6.85s de 7,1s" | "fotosfera." @5.94 — e o rótulo entra @5.55, ANTECIPADO |
| `s149-opcao1-adubo` | "o card não existe em @4.5, só em @5.75 de 6,0s" | "adubo?" @5.14 |
| `s142-heliossismologia` | "as três etiquetas só em @6.52 de 6,8s" | "heliossismologia." @4.67 |
| `s10-composicao-h-he` | "o hélio só existe no último instante" | rótulos declarados word-locked no HTML |

Os três primeiros HTMLs **documentam a decisão no cabeçalho**, e o `s149` diz por que ela existe:
*"'ADUBO' não pode estar na tela antes da palavra que o justifica"* — aquela cena JÁ tinha sido
consertada por sair 4,4s adiantada sobre a fala. O achado pedia desfazer um conserto pago.

**O prejuízo não é o achado errado: é o ciclo que ele alimenta.** O agente de conserto lê o HTML,
encontra a justificativa e RECUSA — comportamento certo, e o anticorpo funcionou. Mas o driver
registra a recusa como `sem-mudanca`, e `sem-mudanca` é retentável até o teto de 2 tentativas: a
passada seguinte re-despacha o mesmo pedido para receber a mesma recusa. Das 97 cenas da passada 4,
**48 fecharam como "o agente respondeu mas não tocou no arquivo"**, e 136 achados voltaram à fila.
*Encomenda que o executor tem razão em recusar é inferência paga duas vezes para não mudar nada.*

Conserto: o revisor recebe a FALA DA CENA — cada palavra com o segundo em que é dita, no MESMO
relógio dos frames —, extraída pelo dono único da pergunta (`wordsDoEspelho`, o mesmo que o
`_brief-arte` usa), e a rubrica ganhou a régua: elemento que entra junto ou até ~0,4s antes da sua
palavra está CERTO, não é achado nem NOTA; só é defeito entrar MUITO DEPOIS dela, ou aparecer sem
palavra nenhuma que o justifique. E, quando o vazio da espera incomoda, o achado legítimo é sobre o
que ocupa a tela ENQUANTO se espera — nunca "antecipe o rótulo".

**Dar a FALA não é dar o CÓDIGO.** A doutrina de julgar por visão fica intacta: fala é o conteúdo
que a tela acompanha, não a implementação que ela usa. Ver [[ARTE-243]], [[ARTE-250]].

---

### ARTE-264 · O cabeçalho da cena é lido como PROVA e não é conferido por ninguém — e por isso ele defende o defeito (13/ago/2026, estação QC do `fatos-a380`, agente-raiz `.claude/agents/editor-de-arte.md`)

Todo HTML desta casa abre com um cabeçalho que declara o que a cena faz e **por quê** — word-lock,
coreografia, ritmo medido, a lei que autoriza cada escolha. É a melhor prática do estúdio: foi ela
que me fez recuar de vários "consertos" que teriam desfeito trabalho certo ([[ARTE-263]]).

**O problema é que ele é a única voz na sala.** Quem revisa — agente de QC, agente de conserto, a
próxima sessão — lê o cabeçalho antes de olhar o código, e o cabeçalho tem a forma de uma medição.
Nenhum gate confere se a conta bate. Duas cenas do mesmo vídeo, no mesmo dia, nas duas direções:

| cena | o cabeçalho afirma | o código faz | como se descobre |
|---|---|---|---|
| `s93-25bi-nunca-recuperados` | a ressalva nasce no ar pela [[ARTE-179]] porque *"é o único texto que cairia abaixo do piso de vida se entrasse junto com o número"* | a ressalva estava legível desde o frame 0 qualificando uma cifra que só caía em 9,57 — **81% da cena** | `11.81 − 9.79 = 2,02 s` no ar, contra piso de **0,8 s**. A conta que a frase invoca **desmente a frase** |
| `s55-split-brinquedo` | *"o laudo pediu ~1000. Adotado 1000"*, com cinco constantes novas (`ALT_COMUM`, `GY_COMUM`, `W_COMUM`, `HCX_COMUM`, `TOP_COMUM`) | nenhuma das cinco é usada em lugar nenhum; o render segue animando `H` de 560→300 | `grep ALT_COMUM` → 2 ocorrências, ambas na própria declaração, **zero no render** |

A `s93` é a mais cara das duas, porque a justificativa é **tecnicamente formulada**: cita a lei certa
pelo número, nomeia o piso certo, e erra só na aritmética que ninguém refaz. Eu quase a aceitei — o
argumento é bom. O que o derrubou foi subtrair dois números que já estavam no arquivo.

E as duas se defendem por caminhos diferentes, o que é o ponto: a `s93` sobrevive ao **revisor**
(que lê a justificativa e recua), e a `s55` sobrevive ao **hash** (o arquivo mudou, então o achado
vence e é aposentado sem ninguém olhar se o defeito saiu — ver [[ARTE-265]]).

**A regra:** afirmação de MEDIÇÃO no cabeçalho não é documentação, é uma alegação — e alegação que
sustenta uma escolha contra uma lei tem de trazer a conta ao lado, com os dois números e a
subtração. `"cairia abaixo do piso de vida"` não é conferível; `"11.81−9.79 = 2,02 s > piso 0,8 s"`
é, e teria impedido a própria frase de ser escrita. Quem desenha: se você não consegue escrever a
conta, você não mediu — escreva que não mediu.

E quando o cabeçalho anuncia um conserto (*"adotado"*, *"corrigido"*, *"o laudo pediu X"*), a última
coisa antes de fechar o arquivo é `grep` do símbolo novo: **declarar a constante não é usá-la.**
Ver [[ARTE-179]], [[ARTE-180]], [[ARTE-227]].

---

### ARTE-265 · Achado vencido por HASH: o arquivo mudou, o defeito ficou (13/ago/2026, estação QC do `fatos-a380`, agente-raiz `scripts/consertar-cenas.mjs`)

O `consertar-cenas.mjs` grava o `hash_html` (sha1:12) de cada achado e, na passada seguinte,
**aposenta como VENCIDO** todo achado cujo hash não bate mais com o disco. A lógica é boa e economiza
muito: achado escrito contra outra versão da cena descreve um estado que não existe mais, e
re-despachá-lo é pagar um agente para reler defeito já resolvido ([[ARTE-263]] mediu o preço disso).

**Mas o hash prova que alguém TOCOU o arquivo, nunca que o defeito saiu.** Medido nesta passada: dos
12 achados pendentes, **8 venceram por hash**. Conferi os 8 um a um, contra o defeito e não contra o
carimbo:

| veredito | cenas | como conferi |
|---|---|---|
| consertado de verdade | `s54` (teto de escala 1,20 no código, com o comentário `⛔ TETO 1.20`) · `s67` (os dois blocos de texto sumiram do HTML) · `s70` parcial (`qc-tamanho` passa) | leitura do código + gate |
| **hash mudou, defeito ficou** | `s55` — cinco constantes novas declaradas e nenhuma usada ([[ARTE-264]]) | `grep` do símbolo novo |
| **metade tratada, metade aposentada junto** | `s70` — o achado tinha DOIS itens; o gate duro de tipografia foi resolvido, os 8 s de tela vazia não, e o item vivo venceu de carona no item morto | frame em `t=5.0`: só gabarito tracejado, zero texto |

A `s70` é o modo de falha mais traiçoeiro, porque **não depende de ninguém ter feito nada errado**:
o achado é uma unidade só para o hash, e a cena tinha dois defeitos independentes. Consertar um
muda o arquivo — e leva o outro para o cemitério no mesmo movimento.

**A regra:** onde o achado morre por hash, a conferência é o DEFEITO, nunca o carimbo — e o custo
disso é baixo, porque quase sempre é um `grep`, um gate ou um frame. Ao re-enfileirar, **reescreva
o problema no estado de hoje**: repetir o texto velho manda o agente procurar o que já não existe, e
ele volta com `sem-mudanca`, que o driver lê como falha retentável.

E quem ESCREVE achado: **um achado, um defeito.** Dois itens no mesmo registro compartilham um único
destino, e o mais barato de consertar arrasta o mais caro junto. Ver [[ARTE-264]].

### ARTE-266 · Legibilidade de marca dentro de mídia real se mede em CROP 1:1 — no frame reduzido o letreiro vira mancha, e a arte declara vitória sobre ele (13/ago/2026, estação QC do `fatos-a380`, cena `s54-gru-pista-portao`, agente-raiz `editor-de-arte`)

A cena fala do aeroporto de **Guarulhos** — a cena anterior acabou de cravar `GUARULHOS (GRU) · 26
DE MARÇO DE 2017 · VOO EK261` na tela — e o footage substituto é o **Ben Gurion, de Tel Aviv**. O
defeito foi achado, e o conserto escolhido foi **baixar o aperto da câmera**: 1,66x → 1,40x → 1,20x
em duas passadas. O cabeçalho da cena registra a medição que autorizou parar ali:

> `· <=1.20x ............ NADA identifica Israel: as marcas viram mancha.`
> `⛔ TETO DE ESCALA 1.20 — É O QUE IMPEDE A CENA DE MENTIR O LUGAR. NÃO SUBIR.`

**A afirmação é falsa.** No teto de 1.20x que ela mesma impôs, um crop 1:1 de 1100×480 sobre a
região do pátio (t=8,8s) entrega, todos legíveis: **EL AL** na fuselagem em latim **e** em hebraico ·
a **Estrela de Davi** na deriva · o banco **בנק הפועלים / bank hapoalim** estampado na ponte de
embarque · o **portão D4**. Três passadas de conserto, e o que saiu do quadro foi o zoom, não Israel.

A raiz é aritmética, e por isso vale para qualquer cena: **a legibilidade que importa é a da
resolução de SAÍDA, não a de quem julga.** Um PNG de 1920 tem um quarto dos pixels do frame que vai
ao ar em 4K; um letreiro que ocupa 40 px de altura no julgamento ocupa 80 no vídeo. Reduzir a escala
do clipe não apaga um texto — só o torna menor, e "menor" continua sendo legível por mais tempo do
que o olho no frame reduzido consegue verificar. Quem escreve "vira mancha" olhando um `--scale=0.5`
está declarando uma medição que não fez.

Régua, em duas linhas:

1. **Afirmação sobre o que se lê dentro da mídia — marca, letreiro, placa, matrícula, alfabeto —
   só se escreve depois de um crop 1:1** (`ffmpeg -i frame4k.png -vf "crop=L:A:X:Y"`). O shot de
   trabalho pode ser reduzido; a *conclusão* sobre legibilidade, não.
2. **Escala não é ferramenta para esconder identidade.** Se o clipe carrega uma identidade que
   contradiz a fala, o conserto é trocar o TRECHO ou a MÍDIA — nunca apertar o zoom até parecer que
   sumiu. Aqui nem o reenquadramento salvava: a ponte da borda esquerda traz o mesmo hebraico e o
   portão C1, e as pontes são justamente o que a voz nomeia ("pista e **portão**"). Quando o corpo
   inteiro do quadro é a coisa errada, o destino é a **pesquisa**, e reconhecê-lo cedo é mais barato
   que três passadas de conserto.

O agravante é de custo, e é o que torna isto lei em vez de anotação: o teto de 1.20x **ainda está
escrito no HTML como uma proibição** (`NÃO SUBIR`), com a medição falsa ao lado como justificativa.
Doutrina errada e confiante sobrevive à sessão que a escreveu — a próxima passada lê "isto já foi
medido", não repete a medição, e o defeito atravessa o QC de novo. Ver [[ARTE-209]], [[ARTE-265]].

### ARTE-267 · "Bloqueado por cota do Fable" vence: o ROTEADOR muda embaixo da nota, e 31 cenas dormiram 22h esperando uma cota de que não precisavam (13/ago/2026, estação ARTE do `aceleradores-particulas`, agente-raiz `scripts/estudio/estacoes/arte.md` §8)

A sessão de 12/ago fez tudo certo. Mediu a cota pela cascata (Fable 429 nas 10 portas em 51,8 s ·
Opus `ok` em 6,3 s pelo MESMO papel), aplicou a terceira medida do [[SIS-292]] e concluiu bloqueio
do **modelo**, não da frota. E foi além do que a doutrina pedia: perguntou ao próprio roteador
quanto da fila não dependia do Fable, e escreveu o que ele respondeu —

> `desenhar-cenas --listar` → **59 pendentes, 0 molde (Opus), 59 invenção (Fable)**
> *"Não há cena de mapista nem de executor-de-molde para adiantar com o Opus vivo."*

**Vinte e duas horas depois, o mesmo comando, no mesmo projeto, com o espelho intocado:**

> **55 pendentes — 29 composição (Opus) · 26 invenção (Fable)**

Ninguém mexeu no vídeo. O que mudou foi **quem classifica**: o commit `e85841f3` (13/ago 01:01,
"trabalho de código commitado pelo sincronizador automático") deu à tabela `COMPOSICAO` do
`desenhar-cenas.mjs` os modos `foto` · `dados` · `footage` · `split` — que até então caíam no `else`
e iam para o Fable. Seis horas depois de a sessão anterior encerrar, mais da metade da fila deste
vídeo deixou de depender da cota esgotada. **A nota de bloqueio continuou dizendo 100% invenção.**

O eixo é novo, e é o que separa esta lei da [[ARTE-262]]. Lá, o que envelhecia era o **dado** (o
`mosaico` virou composição às 17:52 e a nota das 16:37 não soube). Aqui o dado está congelado desde
12/ago: **envelheceu o CLASSIFICADOR**. Uma sessão que reabre o projeto e confere o espelho — byte a
byte igual — conclui, com razão aparente, que nada mudou. E o `--listar` que a desmentiria custa dois
segundos e zero inferência.

O agravante é de mecanismo, e é o que fez isto passar tanto tempo invisível: bloqueio de cota é o
único que tem **retomada automática**. O `destravar-cota` repesca a fila sozinha quando a janela
volta, então a estação nunca aparece como travada — aparece como *aguardando*, que é um estado
saudável. A fila em espera saudável não convida ninguém a re-medir. Trinta e uma cenas de Opus
ficaram sob uma nota de Fable sem que nenhum painel piscasse.

Régua, em três linhas:

1. **Nota de bloqueio de cota não se herda — se re-mede.** Ao abrir estação de ARTE com nota de cota,
   o primeiro comando é `node /home/<usuário>/top10-estudio/scripts/desenhar-cenas.mjs <proj>
   --listar` (caminho absoluto, [[ARTE-262]]). Antes de ler a nota, não depois.
2. **Constatou 429 agora? Re-meça a fila DEPOIS do 429, não antes.** A terceira medida separa modelo
   de frota; ela não diz quanto da fila depende do modelo que caiu. São duas perguntas, e só a
   segunda decide se a estação para.
3. **Medida nova que discorda da nota antiga não acusa ninguém de erro — data a divergência.**
   `git log -S'<modo>' --format='%h %ad %s' -- scripts/desenhar-cenas.mjs` responde em segundos.
   Aqui a sessão anterior estava **certa para o código dela**, e tratá-la como descuidada teria
   escondido a causa real: doutrina de roteamento que muda por commit de sincronizador, sem que
   nenhuma fila seja reavaliada. *Todo classificador que evolui invalida em silêncio as conclusões
   tiradas com a versão anterior — e a conclusão mais cara de invalidar é a que mandou parar.*

## [ARTE-268] Mídia que entra tarde parte o rodapé em DOIS relógios — a linha de dado nasce no ar, a de imagem sobe com a foto

**Medido em 13/ago/2026, estação ARTE do `planeta-em-meteorito`, cena `calculo-1000km-raio`.** O
portão registrou `ok:false · falhas:["crédito-fantasma"]`: o crédito legível de 0,00 s a 13,00 s —
**87% da cena** — sobre uma tela sem foto nenhuma, porque o disco real de Ceres só entra em 12,79 s
de 14,90 s. Não foi desleixo: a cena obedecia à [[ARTE-179]], que manda fonte e crédito **nascerem
no ar** (base ≈0,32) em vez de estrearem, para não gastar vaga de estreia no `qc-carga`. A [ARTE-179]
está certa — **quando a mídia já está no quadro 0**. Numa cena onde a foto chega no fim, obedecê-la
ao pé da letra põe "processamento: Andrea Luck (CC BY)" treze segundos antes de existir um Luck a
creditar.

O agente-raiz **já tinha o bullet** (`editor-de-arte.md` §12: *"crédito de mídia sem a mídia na tela
é defeito (crédito-fantasma), e reprova"*) e ainda assim produziu o defeito. É o padrão que dói: a
proibição estava escrita e o **conserto** não, então o agente ficava entre duas ordens — nascer no ar
e não anteceder a mídia — sem a terceira frase que as reconcilia. *Bullet que proíbe sem ensinar a
sair perde para a lei vizinha que ensina.*

A saída não é escolher entre as duas leis: é notar que **um rodapé com duas linhas tem dois
assuntos**, e assuntos com relógios diferentes não compartilham opacidade.

| linha | credita | quando é legítima | relógio |
|---|---|---|---|
| `.l1` "Fontes: Bell, Waters & Ghiorso (2026), EPSL · NASA/JPL SBDB" | o **dado** (já na tela desde o começo) | desde t=0 | nasce no ar, [[ARTE-179]] |
| `.l2` "Ceres: NASA/JPL-Caltech/… · Andrea Luck (CC BY)" | a **foto** | só com a foto | mesma curva da mídia (`eo(seg(t,12.79,0.85))`) |

O gate favorece esta leitura de propósito e vale conhecer o mecanismo, porque ele decide o conserto:
o `qc-credito-fantasma` avalia **só folhas** (`el.children.length` → pula o contêiner) e exige que o
texto case com `reImagem` (`fotos?|imagens?|cortesia|acervo|CC BY|domínio público`). A `.l1` cita
fonte de **dado** e é filtrada; só a `.l2` acusa. Logo **baixar o contêiner inteiro é o conserto
errado** — apaga a fonte do dado, que era legítima, e a cena fica sem atribuição nenhuma na metade
em que os números estão sozinhos na tela.

Régua:

1. **A mídia entra depois de ~1 s do início? O crédito DELA entra junto** — mesma âncora, mesma
   curva. Não é ajuste fino: é o `t` da mídia, copiado.
2. **Rodapé misto se parte em duas linhas** com opacidades independentes. Nunca se resolve movendo o
   contêiner: dado e imagem chegam em horas diferentes.
3. **Custo de estreia continua zero** — a linha de imagem sobe *dentro* da entrada da mídia, que já é
   uma estreia contada; a de dado segue nascendo no ar. As duas leis passam a caber juntas.
4. Exceção com motivo escrito: `data-qc-credito-antecipado="<por quê>"`.

### ARTE-275 · Bloqueio que espera PESSOA é o único sem quem o desarme: o insumo chegou 7 h depois da nota, e o vídeo ficou 35 h parado a UMA cena do fim (14/ago/2026, estação ARTE do `cerebro-quando-sonha`, agente-raiz `scripts/estudio/estacoes/arte.md` §5)

> 🔀 **Renumerada de ARTE-269 para ARTE-275 em 15/ago/2026** ([SIS-62]): duas sessões destilaram uma lei com o mesmo número em paralelo no mesmo dia, e o merge as trouxe juntas. Quem já estava no remoto ficou com o ARTE-269; esta é a outra. Toda citação a `ARTE-269` escrita antes desta data pode se referir a QUALQUER uma das duas — confira o título antes de aplicar.

A sessão de 12/ago fez tudo certo, e o diário dela é exemplar — mediu antes de gastar, não despachou
ninguém, não regerou nada:

> `{"ts":"2026-08-12T12:54:58Z","evento":"bloqueio-pede-pessoa","nota":"ARTE FECHADA ATÉ ONDE DÁ: 60/61.
> A única que falta é a s51 e ela PEDE PESSOA, não cota."}`

O diagnóstico estava correto: a `s51` é a cena de PUBLI, e o `needs` do espelho manda *"usar o produto
real, não similar de banco"*. Produto anunciado tem identidade de terceiro — não se troca por parecido,
e a foto oficial dependia do link que só o Mateus tinha. Caçar teria queimado cota para nada.

**O que aconteceu 7 horas depois, no mesmo dia:** o Mateus mandou o link e o print (17:24), e a foto
entrou em `_media/foto/s51/` às **20:28**. O bloqueio acabou ali. A estação só reabriu em **14/ago
07:13** — cerca de **35 h** com o insumo pago, no lugar certo, e o vídeo parado a uma cena do fim.

Isto não é a [[ARTE-267]] por outro nome. Lá o que envelheceu foi o **classificador** (um commit deu
novos modos ao roteador e metade da fila deixou de depender do Fable). Aqui nada de código mudou: o
que mudou foi o **mundo** — um arquivo apareceu numa pasta — e nada no estúdio olha para isso.

O eixo é o **mecanismo de desarme**, e vale enumerar porque a assimetria é o achado:

| bloqueio | quem desarma | a estação percebe? |
|---|---|---|
| cota do modelo | `destravar-cota` repesca sozinho | sim, volta pela fila |
| pesquisa pendente | a estação de pesquisa chama a seguinte ([[SIS-*]] encadeamento) | sim |
| **decisão/arquivo humano** | **ninguém** | **não — o disco muda em silêncio** |

E há um agravante de registro que fecha a armadilha: o `conceito-visual.json` ainda dizia
`midia_ancora: "FALTA — foto oficial do produto da publi …"` **35 h depois de o arquivo existir**. O
`aplicar-ancoras-pesquisa.mjs` promoveu FALTA→asset em 2 s, determinístico, zero inferência — mas ele
só roda quando alguém o roda. *A prova de que o bloqueio tinha acabado estava no disco, e o registro
que o agente lê continuava dizendo que não.* Quem confia no conceito conclui, com razão aparente, que
o vídeo segue bloqueado; e a nota de fila não salva ninguém — a desta estação falava do contador de
artefatos do watcher (*"227 artefatos — sem baseline não há variação"*), sem uma palavra sobre a s51.

Régua:

1. **Abriu estação com bloqueio de mídia anotado? Meça o disco antes de reler a nota.**
   `desenhar-cenas.mjs <proj> --listar` **e** `aplicar-ancoras-pesquisa.mjs <proj>` — juntos custam
   segundos e zero inferência, e respondem a pergunta que a nota não responde: *o insumo chegou?*
2. **Bloqueio humano se anota com o TESTE que o desarma, não só com o motivo.** "Aguardando o link do
   Mateus" é metade; a outra metade é *"desarma quando existir arquivo em `_media/foto/s51/`"*. Motivo
   sem teste obriga a próxima sessão a reconstruir o raciocínio inteiro para descobrir se ainda vale.
3. **Não confunda ausência de painel piscando com ausência de trabalho.** Bloqueio humano não aparece
   como TRAVADO — some da vista. *O único estado que ninguém monitora é o que espera uma pessoa: a
   fila descreve o que o estúdio faz, e a chegada do insumo humano é a única coisa que acontece fora
   dele.*

### ARTE-270 · Isenção escrita em COMENTÁRIO não desarma gate nenhum — e a raiz NÃO é o agente, é o runner que ele obedece: o auto-QA de cena rodava 9 gates e o de clipe repetido não estava entre eles (14/ago/2026, estação QC do `quasares-primordiais`, agente-raiz `scripts/qc-cena.mjs`)

A `s63` do `quasares-primordiais` traz, no cabeçalho, uma declaração de reuso melhor do que a maioria
dos laudos que este estúdio produz:

> `REUSO DECLARADO [ARTE-139]: mesmo arquivo da s89/s91; lá é quadro-cheio de leitura, aqui é o ALVO`
> `da viagem (escala de chegada + função narrativa distinta: o fio TERMINA nele).`

Está certa, é específica, cita a lei que a autoriza e explica a diferença de função. E o
`qc-clipe-repetido` reprovou a cena assim mesmo — porque ele lê `data-qc-reuso` **nos atributos da tag
que carrega o `src`**, e ali não havia nada. O mesmo valeu para a `s161` ("vocabulário da s125: a
miniatura REAL de Cassiopeia A"), para a `s144` (wide→detalhe do mesmo campo CEERS) e para a `s36`
(dois takes do mesmo mosaico). **Cinco dos sete achados do gate eram decisões deliberadas, corretas e
já escritas — no lugar errado.**

O custo não é o alarme falso em si; é o que o alarme falso ensina. Uma estação de QC que recebe sete
achados e descobre que cinco são intenção documentada aprende a ler a saída deste gate como ruído — e
o dia em que houver repetição de verdade, ela passa junto. *Gate cujo laudo é majoritariamente falso
positivo não protege nada: ele treina o leitor a ignorá-lo.*

A regra tem duas metades e as duas são obrigatórias:

1. **A isenção mora no ATRIBUTO da tag que o gate inspeciona** — `data-qc-reuso` / `data-qc-composicao`
   no próprio `<img>`/`<video>` que tem o `src`, nunca no `<div>` pai e nunca só no cabeçalho.
   O comentário continua valendo: ele é para o humano, e é onde o argumento cabe inteiro.
2. **O valor do atributo carrega o PORQUÊ**, não um "ok". Quem lê o HTML seis meses depois precisa
   saber por que aquele arquivo aparece duas vezes sem ter de reconstruir a cena.

⚠️ **E AQUI ESTÁ O QUE EU QUASE ERREI: a raiz não é o agente.** O `.claude/agents/editor-de-arte.md`
§5 já ensina isto com todas as letras — que o atributo vai na tag do `src`, que o `<div>` pai é
invisível, com exemplo certo e errado lado a lado, e fecha com *"depois de declarar, RODE
`node scripts/qc-clipe-repetido.mjs <proj>` e veja o `↩ DECLARADA`. Escrever a isenção e não conferir
é o mesmo que não declarar."* A doutrina é exemplar. Engordá-la de novo não consertaria nada.

O que falhou é mecânico: o auto-QA que o agente de fato roda — `scripts/qc-cena.mjs`, citado no
briefing do `desenhar-cenas.mjs` como *"rode e deixe verde"* — tinha
`GATES = [contrato, carga, overlap, tamanho, til, src, quadro, mapa, credito]`. **Nove gates, e
`clipe-repetido` não estava entre eles.** O agente escrevia a justificativa onde ele naturalmente
documenta (o cabeçalho da cena), rodava o runner, via verde, e entregava. O gate certo só rodava na
estação QC, dias depois, quando a cena já podia ter clipe 4K renderizado.

*Quando a instrução compete com a ferramenta, a ferramenta ganha.* Por isso o defeito reincidiu três
vezes em oito dias, sempre com a doutrina correta no lugar: `o-acre` (07/ago, 12 declarações escritas
à mão pelo QC), `planeta-em-meteorito` (12/ago), `quasares-primordiais` (14/ago, 8 declarações). A
correção foi pôr o gate no runner — como gate de CONJUNTO, que roda só no modo projeto e avisa sem
reprovar cena, porque "o mesmo arquivo em duas cenas" não é pergunta que uma cena isolada responda.

Irmã da [[ARTE-139]] (que criou a figura do reuso deliberado) pelo lado da execução: lá se decidiu que
reusar pode ser certo; aqui se descobre que **dizer que reusou de propósito só conta onde a máquina
olha**. E o mesmo eixo da [[SIS-396]] pelo lado do gate — declaração e medição têm de se encontrar no
mesmo lugar, ou as duas ficam certas e o veredito sai errado.

**A pergunta que esta lei deixa para a próxima estação:** antes de escrever mais uma linha num
`.md` de agente, confira se a regra já está lá. Se estiver, o defeito não é de instrução — é de
ferramenta, e o conserto é no runner.

---

### ARTE-271 · O `check-overlap` não enxergava `clip-path`: rótulo 100% RECORTADO tem bbox cheio e era acusado de colidir com o texto que está na tela (14/ago/2026, estação QC do `cerebro-quando-sonha`, agente-raiz `scripts/check-overlap.mjs`)

A `s08` do `cerebro-quando-sonha` chegou ao QC com o gate duro de colisão acusando 49.132px² entre
o rótulo `ACORDADO` e o herói `SONO REM`, em t=6–9,6 s. A cena está impecável, e a prova veio por
dois caminhos independentes, os dois de custo zero:

- **Por frame.** Dois shots olhados (7,5 s e 9,2 s) mostram `DORMINDO` e `ACORDADO` na tela, cada um
  no seu canto. `SONO REM` não está em lugar nenhum — ele só nasce em 16,05 s.
- **Por código.** O próprio `__renderAt` diz: `he.style.clipPath='inset(0 '+((1-wq)*100)+'% 0 0)'`,
  com `wq = eo(seg(t,16.05,0.65))`. Antes de 16,05 o `wq` é 0 e o inset é **100%** — o elemento está
  inteiramente recortado.

A `effOpacity` do gate percorre os ancestrais e conhece três formas de sumir: `display:none`,
`visibility:hidden` e `opacity`. **`clip-path` não estava na lista**, e `getBoundingClientRect()`
devolve a caixa cheia de um elemento recortado a zero. Como a revelação por máscara é a técnica
padrão desta casa para um rótulo NASCER da linha que o revelou — e o elemento fica no DOM com
`opacity:1` desde o frame 0 —, o gate acusava um texto visível contra outro que ainda não existe.

O conserto está no gate, não na cena: `clipZeraArea()` lê o `clip-path` computado do elemento e dos
ancestrais e, quando um `inset()` fecha a largura ou a altura inteira, o elemento sai da coleta
daquele frame. Medido depois da mudança: `s08` passa limpa, e a `s18` do mesmo projeto — onde a
colisão é REAL, com "80 A 140 Hz…" impresso por cima do crédito "Liu et al." — continua reprovando
com os mesmos 44.810px². Um gate que perde o falso positivo e mantém o verdadeiro é a única prova
que vale.

**Conservador de propósito, e é isso que separa esta lei de uma cegueira nova:**
1. **Só o recorte TOTAL isenta.** `inset(0 40% 0 0)` — metade do rótulo à mostra — segue medido pela
   caixa inteira. Num gate duro, errar para o lado de ACUSAR é o lado certo de errar.
2. **Só `inset()` é lido.** `polygon()`, `circle()`, `path()` e `url()` seguem sem tratamento, exatamente
   como antes desta linha existir. Nenhuma cena que passava hoje passa por um caminho novo.

Da mesma família do "irmão apertado" do `line-height` já documentado dentro do próprio script: as
duas vezes, o gate mediu a CAIXA que o navegador reserva em vez da TINTA que o espectador vê, e as
duas vezes o custo do alarme falso é o mesmo — mandar o editor-de-arte reabrir cena impecável e,
pior, treinar a estação a ler o laudo do gate como ruído. *Elemento presente no DOM não é elemento
presente na tela; o gate que confunde as duas coisas acusa o mecanismo em vez do defeito.*

**A pergunta que esta lei deixa para a próxima estação:** achado de colisão em cena com revelação
animada — máscara, `clip-path`, `stroke-dashoffset`, janela de rolagem — merece UM frame olhado no
instante acusado antes de virar despacho de conserto. O frame custa segundos; a cena refeita custa
uma sessão de Fable e um clipe 4K.

---

### ARTE-272 · O gate de crédito-fantasma era cego em DUAS direções ao mesmo tempo: não casava a palavra "imagem" e não olhava o fim da cena (14/ago/2026, estação QC do `quasares-primordiais`, agente-raiz `scripts/qc-credito-fantasma.mjs`)

O gate da [[ARTE-227]] fechou VERDE em três cenas que o `qc-visual` reprovou com medida no mesmo
lote. As duas causas são independentes e nenhuma delas era erro de lógica — as duas eram uma régua
escrita mais estreita do que a coisa que ela descrevia.

**(a) `imagens?` não casa "imagem".** O filtro que separa crédito de FOTO de crédito de DADO era
`/\b(fotos?|imagens?|cortesia|acervo)\b|…/i`. Em português o plural de *imagem* troca o M por N, e
`imagen` + `s?` cobre "imagens" e a forma inexistente "imagen" — deixando passar justamente o
singular, que é como quase toda cena credita. Medido na `s30`: o rodapé "Fonte: USGS · **Imagem**:
NASA/SDO" ficava **2,50 s** no ar antes de a foto entrar (38% da cena) e o gate devolvia PASS,
porque descartava a linha como "credita dado, não imagem". "Ilustração:" tinha o mesmo furo, e é
como se credita render de agência (a `s55` credita "Ilustração: ESO/M. Kornmesser").

**(b) A cauda estava isenta por uma razão boa, larga demais.** O cabeçalho declarava, de propósito:
*"não olha o fim da cena — mídia que SAI antes do crédito é decisão de composição (o fade final leva
a foto e deixa o rodapé um instante)"*. Verdade para o instante que a frase descreve; falso para o
que a isenção cobria. Na `s60` o `#cred` não tinha envelope nenhum e as fotos saíam em 8,62 s numa
cena de 11,70 s: **3,08 s (26% da cena)** com "Fotos: Los Angeles Daily News (UCLA Library Special
Collections) / Mike Peel" em opacidade cheia sobre campo estelar vazio. É o mesmo defeito da
entrada, na outra borda — e custava olho de agente caro para achar.

O conserto das duas é a mesma ideia: **a isenção vira uma TOLERÂNCIA medida.** A cauda passou a ser
aferida com `--tolSaida` (padrão 1,5 s, acima de qualquer fade da casa e bem abaixo dos 3,08 s
medidos), e o gate estendido reencontrou a `s60` sozinho — 3,4 s, 29% da cena — sem acusar nenhuma
das quatro cenas de controle, que creditam mídia presente desde o quadro 0.

*Uma isenção declarada com a razão certa continua sendo uma isenção: ela protege tudo que couber na
frase, não só o caso que o autor tinha na cabeça.* Quando a razão é de GRAU ("um instante", "um
pouco", "logo depois"), o jeito de não perder o caso grande é trocar a isenção por um número.

Irmã da [[ARTE-270]] — lá o gate certo não era chamado pelo runner, aqui ele era chamado e media
menos do que prometia. Nos dois casos o placar verde vinha de uma pergunta que ninguém fez.

**A pergunta que esta lei deixa para a próxima estação:** ao ler o `NÃO FAZ` de um gate, separe o que
é decisão de escopo do que é isenção por grau. Escopo se respeita; grau vira parâmetro. E em regex
de PT-BR, teste o SINGULAR e o PLURAL de cada palavra — `s?` só serve quando a raiz não muda.

### ARTE-273 · Card de título é o único modo onde `"construída"` nunca é resposta — e a lei que o proíbe foi citada como se autorizasse (15/ago/2026, estação QC do `nilo-nao-secou`, agente-raiz `.claude/agents/diretor-de-arte.md`)

Os quatro cards de título do `nilo-nao-secou` chegaram ao QC com **zero pixel de mídia real** — nenhum
`<img>`, nenhum `<video>`, nenhum caminho de arquivo nos quatro HTMLs. Não foi descuido do executor: o
`conceito-visual.json` prescreveu `midia_ancora:"construída"` nos quatro, e escreveu na `tecnica` de cada
um a justificativa **"card sóbrio padrão (FIN-06/FIN-17)"**. O editor-de-arte obedeceu uma direção
explícita, e obedeceu bem.

O defeito está uma estação antes, e é de LEITURA. A FIN-06 tem duas metades: *"título de tópico nunca
sai narrado"* **e** *"card = só música + FOOTAGE — uma capa muda com mídia real do tema, ARTE-29/ARTE-34"*.
A direção leu a primeira, tratou "sóbrio/mudo" como estilo visual, e citou a lei como autorização para
justamente aquilo que a segunda metade proíbe. *Lei citada pela metade não é lei enfraquecida — é lei
invertida:* o número na frente do parêntese faz a prescrição parecer auditada, e ninguém reabre a fonte.

O `diretor-de-arte` já tinha a doutrina certa em §3.0 — inclusive o aviso de que `"construída"` **não é o
destino de "não consegui baixar"**, e o `faltas` do próprio arquivo registrava "stock deslogado" em quatro
outras cenas. A regra existia, era genérica, e por isso perdeu para uma citação específica. O que faltava
era dizer que **no card de título não há julgamento editorial a exercer**: a ARTE-29 e a ARTE-34 já
decidiram por lei que ele é uma capa com registro real, então das quatro formas de `midia_ancora` só duas
sobrevivem ali — `<caminho do asset>` e `"FALTA — …"`.

E o insumo estava pago, no disco, ocioso: `piramides-gize-aereo-classico.mp4` e
`etiopia-lalibela-terras-altas-aereo.mp4` (Storyblocks, com `_PROCEDENCIA.json` e URL) mais cinco fotos
NASA do Nilo — **citados por nenhum HTML do projeto**. Os dois footages estavam em `_media/footage/` sob o
nome da cena que os baixou (`45-footage/`, `22-mapa3d/`), não sob a do card, e ninguém varreu o `_media/`
do projeto inteiro antes de declarar o fundo construído. A ARTE-34 diz literalmente que "o `_media` do
próprio vídeo quase sempre já tem o material" — a busca que ela pede é por ASSUNTO, não por pasta.

Nenhum gate determinístico pega isto: contrato, carga, overlap, til e fora-do-quadro passaram nos quatro
cards, porque um card construído é tecnicamente impecável. Quem vê é a lente de abordagem do `qc-visual`,
uma cena por vez, depois de a arte estar pronta.

**A pergunta que esta lei deixa para a próxima estação:** quando uma direção citar um ID de lei como
razão de uma escolha, abra a lei. A citação é a única parte do artefato que parece verificada e não é —
e uma lei que proíbe X, citada pela metade, vira a melhor defesa possível de X.

### ARTE-274 · O `titulo` do card de tópico É o texto de tela — o prefixo "CARD 1 — " chega cru ao executor de molde, e os dez gates do espelho passam verdes por cima dele (15/ago/2026, estação ESPELHO do `ucrania-duas-guerras-uma`, agente-raiz `montador`)

O montador entregou os 4 cards com `titulo: "CARD 1 — O drone que liga as duas guerras"`. O prefixo é
anotação interna — e tinha rota aberta até o 4K: `scripts/desenhar-cenas.mjs:491` entrega este campo
**cru** ao executor de molde (`título:  ${s.titulo}`). Os três geradores canônicos da casa gravam texto
puro no mesmo campo (`gerar-cards-titulo.mjs:69`, `_gen-cards-ligar.mjs:26`, `_gen-cards-ny.mjs:29`):
para `modo:"titulo-topico"`, **`titulo` não descreve a cena, ele É a cartela**.

**O que torna isto difícil de ver, e é o eixo da lei:** os **dez** gates do espelho passaram —
`validar-contrato`, `qc-espelho-midia`, `qc-modo-needs`, `qc-deserto-real`, `qc-espelho-fala`,
`qc-espelho-relogio`, `qc-espelho-cortes`, `qc-espelho-modelo`, `qc-espelho-verbos`, `checar-plano`.
Nenhum lê o CONTEÚDO do `titulo`; eles medem tempo, modo, needs e distribuição. E a `tese` da mesma cena
dizia certo (*"O texto na tela é exatamente: «O drone que liga as duas guerras»"*), de modo que havia
**duas fontes concordando sobre o card e discordando sobre a string** — o executor de molde receberia as
duas e teria de escolher. Bateria verde não é cobertura: é a cobertura das perguntas que alguém escreveu.

O roteamento nunca dependeu do prefixo, e isso desfaz a defesa óbvia: o `ehCardDeTopico` casa por
`MOLDE.has(s.modo)`, e o regex de rede de segurança é `/^\s*CARD\s+(?:DE\s+)?(?:T[ÍI]TULO|T[ÓO]PICO)\b/i`
— *"CARD 1 —"* **não casaria** com ele de todo modo. O prefixo não comprava reconhecimento nenhum;
só carregava risco.

**Conserto, e onde ele se faz:** `titulo` = texto puro; a numeração vive no `motivo` (*"Card N de 4"*),
que ninguém desenha. E a correção vai no **script que GERA o espelho**, nunca no JSON — senão o gerador
diverge do gerado e a próxima execução desfaz tudo. Aqui o `_espelho-fonte/gerar.mjs` foi editado e
re-rodado: o diff saiu com exatamente 4 segmentos alterados, um campo cada, o que é ao mesmo tempo o
conserto e a prova de que o gerador é reprodutível. Ver [[ARTE-198]] (o card se declara no CAMPO `modo`).
### ARTE-269 · O gate de colisão media a caixa do LAYOUT, e o `clip-path` esconde sem mudá-la (14/ago/2026)

O `check-overlap` lia `getBoundingClientRect`, que devolve a caixa que o **layout** reservou — e o
layout não sabe que o pintor foi proibido de pintar. Todo texto revelado por wipe
(`clip-path: inset(0 100% 0 0)`, o recurso padrão desta casa para escrever na tela) ocupa a caixa
inteira desde o frame zero, sem um pixel na tela.

**Medido na `s08` do `cerebro-quando-sonha`:** o gate acusou `"ACORDADO ✕ SONO REM"` em t=6–9,6 s
com 49.082px². O `SONO REM` só começa a ser revelado em **t=16,05**. A colisão nunca existiu em
nenhum frame.

**Por que isto é caro, e não um incômodo:** pela [SIS-64] o portão grava `ok:false` por hash e o
render **pula para sempre** a cena reprovada. Um falso positivo não faz barulho — faz uma cena
correta parar de ser renderizada, e ensina quem lê o laudo a não acreditar nele. *Alarme falso é
pior que verificação nenhuma, porque desarma a verificação no dia em que ela acerta.*

**O conserto lê o recorte, não um booleano.** `recorteClip` acumula os `inset(...)` de todos os
ancestrais (wipe no pai corta o filho) e devolve a caixa que de fato aparece; `aplicaClip` interseca
as caixas da tinta com ela e descarta o que sobra vazio. Assim o gate **continua acusando quando a
parte REVELADA colide** — que é o defeito de verdade.

**Provado nos dois sentidos antes de entrar** (é o que separa conserto de aposta):
- caso sintético com colisão real por trás de um wipe: versão antiga acusa `t=0–10s`, a nova acusa
  `t=5–10s` — mesma área máxima (170.264px²), então não subestima nada;
- 14 cenas reais do `cerebro-quando-sonha`: **um único veredito mudou**, o da `s08`. As 13 outras
  saíram idênticas, inclusive as duas que acusavam colisão verdadeira.

⚠️ **E ficou de pé um furo vizinho, ainda não consertado:** o gate **não acusa par de textos com o
mesmo conteúdo**. Descobri sem querer — o primeiro caso de teste que escrevi usava a mesma frase nos
dois elementos e passou limpo, com sobreposição total. Dois rótulos iguais colidindo de verdade
(o caso do eco de um mesmo nome em duas camadas) passariam.

### ARTE-276 · O detector do arquivo de fala reprovava o arquivo CERTO por 0,39 s — e, quando aprovava, carimbava o relógio pelo NOME do arquivo (15/ago/2026, estação REGÊNCIA do `energia-escura`, agente-raiz `scripts/regencia-insumo.mjs`)

A [ARTE-183] identificou o problema certo — três arquivos de fala com a mesma cara, e abrir o errado
não dá erro: devolve texto plausível e a partitura inteira sai coreografada na fala de outro trecho.
O `regencia-insumo.mjs` nasceu para decidir isso **por medição**, e o cabeçalho dele prega, em voz
alta: *"não se pergunta ao nome do arquivo; pergunta-se ao conteúdo"*. As duas medições estavam
frágeis, cada uma de um jeito.

**(a) O teste do FIM parava a estação.** Ele exigia a última palavra a menos de **2,5 s** do fim do
espelho. Só que a cauda do bruto quase sempre tem retake DEPOIS da última fala boa: aqui
`words-limpo.json` termina em **1532,39** contra **1529,50** do espelho — **reprovado por 0,39 s**,
com os três arquivos no disco e um deles perfeito. A estação não errou: ela **parou**.

**(b) O relógio era deduzido do NOME**, três linhas abaixo do comentário que prega o contrário:
`escolhido === 'words.json' ? 'BRUTO' : 'FINAL'`. E `words-limpo.json` é **ambíguo por construção** —
são as palavras SOBREVIVENTES, e elas tanto vêm em tempo bruto quanto já ripadas. Neste projeto vinham
em tempo **BRUTO** (a palavra "próprio" está em 80,26 nele E no bruto; só o `words-final.json` a traz
em 41,74), e o carimbo `FINAL` teria mandado o agente **não converter com `keepsDe`** — deslocando a
partitura nas 8 cenas que têm corte dentro da janela. Silencioso: nenhum gate pega partitura deslocada.

**A medida honesta é COBERTURA + LIMPEZA**, e as duas se medem no mesmo lugar. Medido neste projeto:

| arquivo | cenas cobertas | palavras dentro de corte | fim |
|---|---|---|---|
| `words.json` | **94**/94 | **705** | 1544,57 |
| `words-limpo.json` | 90/94 | **1** | 1532,39 |
| `words-final.json` | 74/94 | 773 | 1115,18 |

Escolhe-se entre os que estão no mesmo relógio (cobertura ≥85% da melhor) o **mais limpo** — porque
beat ancorado em palavra que o corte apaga é exatamente o defeito que quebrou a `c13` deste mesmo
vídeo (word-lock nascido do bruto CRU, coreografado sobre fala que não vai ao ar).

⚠️ **E o arquivo que cobre MAIS janelas é o que tem mais fala fantasma.** As 4 cenas que só o bruto
"cobre" aqui são os **cards de título** (`cTITULO1–4`), deitados exatamente sobre os retakes cortados
— o `cTITULO3` sobre *"o que quer dizer a ene-- o que quer dizer a energia"*. Para eles **MUDO é a
resposta certa**: são cards não narrados. Cobertura maior parecia qualidade melhor e era o oposto.

**Ripado se MEDE, não se supõe:** `(fimMaisLongo − fim) > somaCortes / 2` separa os 429 s do arquivo
FINAL dos 12 s de cauda cortada do bruto sem exigir precisão nenhuma. E **sem `_cortes.json` não há
BRUTO→LIMPO a fazer** — o relógio é FINAL, que é o caso do master pré-editado.

*Quando um script precisa escolher entre irmãos que se parecem, o nome é a pista que ele tem à mão e
a pior que existe. O conteúdo responde — e responde de graça.*

**(c) E A NOTA QUE O INSUMO ENTREGA AO AGENTE MANDAVA O CONTRÁRIO DO QUE O GATE COBRA.** No ramo
BRUTO, o `relogio_nota` dizia: *"o último t1 tem de fechar contra o cleanDur, não contra o dur"*. O
`montar-regencia.mjs:93` reprova exatamente isso — ele exige `|último t1 − dur| ≤ TOL`, com o `dur`
**bruto** do espelho. Duas peças da mesma estação, uma mandando o oposto da outra.

**Quem tem razão se mede no disco, não no argumento.** Dos 13 HTMLs de cena já desenhados no
`energia-escura`, **13 declaram `var DUR =` igual ao dur BRUTO e nenhum ao cleanDur** — incluindo as
6 em que os dois divergem de mais de 0,5 s (`c27` 28,268 contra 21,55 · `c16` 13,0 contra 7,05 ·
`c33` 11,0 contra 6,31). A arte é desenhada na **janela bruta**; quem desconta o corte é a
finalização, depois, com o `mapSecFactory`. O corte interno **não parte o beat**: ele vive dentro de
um beat só, porque na tela montada não existe e o plano segue contínuo.

O regente daquele dia leu a contradição, seguiu o gate, e **documentou a escolha** em
`cenas_com_corte_interno.nota` em vez de obedecer calado. Deu certo por competência dele.
*Doutrina que só funciona quando o leitor a desobedece é doutrina quebrada* — e a próxima leitura
podia ser a obediente, que passa a partitura inteira encurtada para quem desenha.

### ARTE-277 · A CLÁUSULA DE CRÉDITO É O CAMPO `credito_na_tela` — a [ARTE-209] apontou o arquivo e faltou apontar o campo (15/ago/2026, estação ARTE do `planeta-em-meteorito`, agente-raiz `editor-de-arte`)

> 🔀 **Nasceu como ARTE-276 e foi renumerada para ARTE-277 em 15/ago** (SIS-62): duas sessões
> paralelas destilaram no mesmo número no mesmo dia — a outra é a da estação REGÊNCIA do
> `energia-escura`, acima — e nenhuma das duas estava no remoto. O desempate foi a ordem de chegada;
> esta veio depois e andou para o próximo livre. Citação a "ARTE-276" que descreva o conteúdo abaixo
> aponta para cá.

**O que aconteceu.** A cena `nada-sobrou-estilhaco` foi entregue **sem linha de crédito**, com esta
justificativa escrita no próprio cabeçalho do HTML:

> *licença 'PENDENTE DE LIBERAÇÃO — may be copyrighted' **SEM cláusula de mandatory credit** no
> `_PROCEDENCIA.json` ⇒ SEM linha de crédito na tela, ARTE-41/ARTE-209*

O `_PROCEDENCIA.json` daquela pasta traz, no registro daquele arquivo:

    "licenca": "PENDENTE DE LIBERAÇÃO — 'This image may be copyrighted' declarado na página da MetBull",
    "credito_na_tela": "Beat Booz / Encyclopedia of Meteorites"

**A cláusula estava lá, num campo com o nome do que ela é.** O agente leu apenas `licenca`, procurou
a expressão "mandatory credit", não achou, e concluiu a ausência.

**Por que a doutrina produziu isso.** A [ARTE-209] resolveu *"de ONDE se lê a licença"* (o
`_PROCEDENCIA.json`, nunca o nome do arquivo) e encerrou com *"ou com prova que não declara mandatory
credit: NÃO credite"* — um critério que nomeia o ARQUIVO e não nomeia o CAMPO. Critério sem campo
declarado é preenchido por leitura livre, exatamente como critério sem arquivo declarado era
preenchido pelo nome do arquivo na própria ARTE-209. **É o mesmo defeito um degrau abaixo.**

**O sinal que denuncia, e ele é forte:** a cena IRMÃ `nwa-12774-o-codigo`, do MESMO vídeo, usando a
MESMA foto da MESMA pasta, credita — e troca a linha por plano (`Beat Booz` em 7,55 s,
`Sergey Vasiliev` em 12,9 s). *Licença mais restritiva produzindo MENOS crédito na tela é resultado
invertido: quando a leitura de uma licença te dá menos obrigação, releia.*

**A régua tem DOIS campos, e cada um responde uma pergunta diferente:**

| pergunta | campo | como decidir |
|---|---|---|
| a atribuição é **exigida**? | `licenca` | domínio público / obra própria ⇒ NÃO · CC BY(-SA), press kit "use with credit", "may be copyrighted" com fotógrafo nomeado ⇒ SIM |
| qual é o **texto**? | `credito_na_tela` | literal, nunca redigido pelo agente |

E **cite o valor lido** no cabeçalho (`licenca: domínio público ⇒ sem crédito`), nunca o veredito
("sem cláusula de mandatory credit") — o primeiro é falsificável em dois segundos, o segundo é
opinião com cara de fato.

> ⚠️ **Esta lei nasceu errada e foi corrigida na mesma sessão, pela verificação que ela própria
> propõe.** A primeira redação dizia *"a regra é binária: `credito_na_tela` preenchido ⇒ credite"* e
> mandava não olhar a `licenca`. Ao rodar a varredura do vídeo inteiro (abaixo), sobraram duas fotos
> em `escala-mais-velho-terra-lua` com `credito_na_tela` preenchido (`NASA / Apollo 17`,
> `NASA/GSFC/Arizona State University`) e `licenca: "domínio público (obra da NASA)"`. A cena **não
> credita, e está certa** — é a [ARTE-41], crédito desnecessário polui. A régua binária teria mandado
> poluir a tela e teria contradito uma lei mais antiga. *A pesquisa preenche `credito_na_tela` também
> como crédito CORTÊS: o campo diz COMO creditar, nunca SE.*

**Por que nenhum gate pegou.** `qc-credito-fantasma` mede crédito no ar **sem** a mídia que ele
credita; o caso inverso — mídia no ar sem o crédito que ela exige — ele não olha (é a entrada, não a
saída). `qc-procedencia` classifica a pasta em declarada/citável e não cruza com o HTML. Então a
cena passou nos oito gates, e o único vestígio era uma frase no cabeçalho que **afirma** algo sobre
um arquivo que o auditor não abre. Achado à mão, ao conferir a mídia de uma cena por amostragem.

**Verificação, para quem auditar um vídeo inteiro:** para cada `src` de `_media/`, o
`credito_na_tela` do registro tem de aparecer no HTML, ou o cabeçalho tem de citar o campo vazio.
Duas cenas do mesmo vídeo tratando o mesmo arquivo de formas opostas é o achado que vale procurar
primeiro — a discordância interna é mais barata de detectar que a leitura errada isolada.

**ARTE-278.** O DESTINO DO PEDIDO NÃO É A ENTREGA — GATE QUE CONFERE ÂNCORA TEM DE OLHAR ARQUIVO, NÃO CAMINHO
   (medido em 15/ago/2026, estação ARTE do `uruguai-despovoado`). Quando a direção de arte escreve uma âncora para
   mídia que ainda não existe, ela cita **onde a mídia deve cair**: `FALTA — footage de rua/multidão inglesa
   (query: crowded street London 4K; destino: _media/footage/)`. O `qc-direcao-real` extraía caminhos por regex e
   perguntava ao disco com `existsSync` — e `existsSync` de um **diretório** devolve `true`. Resultado: **8 cenas
   sem um único arquivo** apareceram como *"âncora rotulada FALTA que JÁ TEM arquivo no disco — rótulo defasado"*,
   com o gate mandando, em letras, *"reconcilie a âncora antes de despachar a arte"*.
   • **O perigo não é o número errado, é a INSTRUÇÃO que ele carrega.** Obedecer o aviso é promover FALTA→asset e
     despachar 5 cenas para desenhar sobre o vazio — o dano exato que a [ARTE-269] descreve, chegando pela porta
     oposta (lá o insumo existia e o registro dizia que não; aqui o registro diz que existe e o disco está vazio).
     Gate que erra em silêncio custa uma medição; gate que erra **mandando fazer** custa a cota do Fable.
   • **O desempate custou 2 comandos e existia o tempo todo:** `aplicar-ancoras-pesquisa --dry` dizia
     `promovidas FALTA→asset: 0 · seguem FALTA: 9` **no mesmo minuto** em que o `qc-direcao-real` acusava 8
     defasados. Dois gates lendo o MESMO `conceito-visual.json` contra o MESMO disco e discordando: quem tem razão
     é o que exige **arquivo com tamanho > 0**. *Diante de dois gates que discordam sobre o disco, não escolha o
     mais recente nem o mais específico — rode `ls` na pasta.*
   • **Destino se reconhece pela FORMA, não pelo disco:** termina em `/` ou não tem extensão. Ele não é entrega
     nem âncora morta — sai da conta dos **dois** lados (contá-lo como morto trocaria o falso "defasado" por um
     falso "âncora apontando arquivo que não existe"). Consertado em `scripts/qc-direcao-real.mjs`: filtro
     `ehDestino()` + `entregue()` exigindo `isFile() && size > 0` (arquivo de 0 byte é caça que morreu no meio).
     Medido depois: 8 falsos → 1.
   • **O 1 que sobrou é outra classe, e vale saber que existe: a âncora MISTA.** A `s90b-amar-ou-sentir-falta` é um
     split que declara `FALTA` para o lado direito e cita arquivo real para o esquerdo — um arquivo vivo numa
     âncora que começa com "FALTA" não prova rótulo defasado quando a cena tem dois lados. O gate ainda não separa
     isso; quem ler o aviso confere QUAL metade falta antes de reconciliar.

### ARTE-279 · Conserto que TROCA mídia tem de perguntar quem MAIS usa aquele arquivo — o gate de repetição é o único que vê, e ele mede o VÍDEO, não a cena (16/ago/2026, estação QC do `planeta-em-meteorito`, agente-raiz `editor-de-arte` via `scripts/consertar-cenas.mjs`)

**O que aconteceu.** Numa passada de conserto de 18 cenas, `qc-clipe-repetido` estava **VERDE às
08:07Z** e terminou **acusando 4 repetições às 09:22Z**. Nenhuma cena "quebrou": as 17 que fecharam
fecharam de verdade, cada uma resolvendo o próprio laudo. O defeito nasceu **entre** elas.

Duas cenas consertadas foram buscar mídia no disco e pegaram arquivo que **outra cena já usava**:

| cena consertada | arquivo que ela puxou | quem já usava |
|---|---|---|
| `assinatura-diferente` | `marte-disco-cheio-viking-mosaico-global.jpg` | `escala-lua-marte` |
| `assinatura-diferente` | `terra-disco-cheio-apollo17-blue-marble.jpg` | `escala-lua-marte` |
| `colisao-catastrofe` | `saara-nascer-do-sol-rochas-horizonte-aberto-4k.mp4` | `hook-pedra-saara-corte` |
| `colisao-catastrofe` | `pedras-escuras-areia-clara-sol-baixo-macro-4k.mp4` | `deserto-rocha-salta` |

Nenhuma das duas declarou `data-qc-composicao`. O gate registrou os quatro como *"declarado só em
X — falta em Y"*: **a outra ponta declarava, a recém-consertada não.**

**Por que passa por todo o resto.** Cada cena, isolada, está impecável — e é assim que TODOS os
outros gates a olham. `qc-contrato`, `qc-carga`, `check-overlap`, `qc-hex`, `qc-tamanho` e o próprio
`_portao.json` são **por-cena, por construção**. Até o `qc-visual`, que julga por visão, recebe uma
cena e não as 47 vizinhas. O único que enxerga o par é o `qc-clipe-repetido` — e ele **não é chamado
pelo conserto**. Resultado: o conserto pode fechar 17 laudos e reprovar um gate que estava verde
quando começou, sem que nada no caminho acuse.

**A régua, e ela é barata:** *trocar mídia numa cena não é decisão local — antes de escrever o `src`,
pergunte quem mais usa o arquivo.* Uma linha resolve:

    grep -l "src=\"[^\"]*<arquivo>\"" out/<proj>/graphics/*.html

Se voltar mais de um HTML, há três saídas legítimas e a escolha é editorial, não técnica:
**(a)** escolher outro arquivo; **(b)** declarar `data-qc-composicao` **nas DUAS pontas** (reuso
deliberado — comparação lado a lado, mesmo objeto revisto); **(c)** manter e assumir, se as duas
cenas estiverem longe o bastante e o plano não for reconhecível. O que **não** é saída é o silêncio,
que é o que sai por padrão hoje.

⚠️ **Repetição não é toda igual, e o veredito muda com a classe do arquivo.** Disco planetário
oficial (Marte da Viking, Terra da Apollo 17) é *o mesmo objeto real* — repetir é quase inevitável e
se resolve declarando. Já **plano de footage** (duna ao nascer do sol, chão pedregoso) o espectador
reconhece na hora: ali a saída honesta costuma ser (a). Foi por isso que o dono apontou a `s43` do
projeto que originou a [ARTE-108].

**O sinal para quem retoma:** se `qc-clipe-repetido` estava verde antes de uma leva de consertos e
ficou vermelho depois, **não procure a cena quebrada — procure a mídia que mudou de dono.** O gate
nomeia as duas pontas e diz qual delas declarou; a que falta é sempre a recém-tocada.

---

**ARTE-280.** KEN BURNS MANUAL É UMA CONDIÇÃO DE COBERTURA, NÃO UM GOSTO — O FOCO TEM MÍNIMO, E ELE SE
   CALCULA (medido em 17/ago/2026 na `s14-einstein-energia-e-massa` do `aceleradores-particulas`).
   O padrão da casa para foto com movimento é uma janela `overflow:hidden` com a imagem em tamanho
   NATIVO dentro, movida por `transform` num contêiner com `transform-origin:0 0` — e o helper
   canônico é `kbT(el,fx,fy,z,cx,cy)`, que **pousa o ponto (fx,fy) da IMAGEM no ponto (cx,cy) da
   JANELA**: `translate(cx−fx·z, cy−fy·z) scale(z)`.
   • **O defeito:** a `s14` pedia foco em **(555, 430)** de uma foto de **3000×4001**, para pousar no
     centro de uma janela de **1180×1360**. Como (555,430) está perto do canto superior-esquerdo, o
     `translate` saiu **POSITIVO** (+365, +506) e empurrou a imagem para dentro do quadro: sobrou um
     **"L" vazio** de 31% da largura à esquerda e 37% da altura acima, mostrando o `background` da
     janela — e o rosto de Einstein foi cortado ao meio pela borda direita.
   • **A conta, e ela é de uma linha por eixo.** Para a imagem COBRIR a janela é necessário
     `translate ≤ 0` **e** `translate + tamanho·z ≥ janela`, o que dá:

         fx ≥ cx/z          e     fx ≤ cx/z − W/z + IW
         fy ≥ cy/z          e     fy ≤ cy/z − H/z + IH

     Na `s14` (z mínimo 0,405 · W 1180 · H 1360 · IW 3000 · IH 4001) isso é
     **fx ∈ [1457, 1543]** e **fy ∈ [1679, 2322]** — o foco pedido estava fora dos dois. Conserto:
     foco **(1500, 1700)** e z **0,420→0,460** (a escala que o próprio cabeçalho do arquivo já
     declarava, "~0,42×"), que cobre com folga em todo o Ken Burns.
   • **O mínimo do eixo Y quase sempre EMPURRA o enquadramento, e isso é a favor.** O rosto da `s14`
     está em ~(1400, 1467); o mínimo obrigava fy ≥ 1679, ou seja, o rosto sobe ~94px acima do centro
     da janela. É exatamente onde retrato deve ficar (olhos no terço superior) — **a trava de
     cobertura e o bom enquadramento apontam para o mesmo lugar.**
   • **VERIFIQUE ANTES DE ESCREVER, e escreva a conta no comentário** ao lado da chamada, com os
     números do caso. Quem retoma a cena meses depois muda a janela ou a escala e precisa saber qual
     era o limite; um `lp(555,570,kp)` pelado não conta nada.
   ⚠️ **NENHUM GATE PEGA ISTO, e a lista dos que não pegam é o ponto.** `check-overlap`, `qc-carga`,
   `qc-contrato`, `qc-hex` e `qc-tamanho` mediram a `s14` e passaram — porque todos olham **TEXTO e
   contagem**, e um retângulo vazio dentro de uma moldura não é texto nenhum. O gate acusou a cena por
   OUTRA coisa (uma colisão de 8944px² entre o `=` e o `mc²` no pico da troca, `ARCO` 240→330), e foi
   essa acusação lateral que fez alguém abrir o frame. *Se a colisão não existisse, a cena teria ido
   ao render 4K com a foto cortada e todos os gates verdes.* Por isso a régua é **olhar o frame** no
   `shot.mjs` sempre que a cena tiver mídia dentro de janela recortada — e olhar em **dois t**
   distintos, porque um "L" vazio parado é defeito e um "L" vazio que se fecha é só Ken Burns em
   curso. Na `s14` os frames de 5,70s e 6,10s eram idênticos: parado.
   • Parente próximo, mesma raiz, já registrado na auto-memória: foto que não preenche um **clipe
     circular** (verde em todos os gates). Ali o recorte é `clip-path`; aqui é `overflow:hidden` +
     `transform`. A pergunta é uma só — *a mídia alcança as quatro bordas do recorte, no z MÍNIMO do
     movimento?*

---

**ARTE-281.** VETO ESCRITO NO CONCEITO-VISUAL NÃO É LIDO POR GATE NENHUM — O CLIPE REPROVADO POR
   ESCRITO ESTAVA NA CENA, COM TODOS OS GATES VERDES (medido em 17/ago/2026, estação ARTE do
   `uruguai-despovoado`, cena `s27-cenario-pastar`, agente-raiz `.claude/agents/editor-de-arte.md`).
   O `conceito-visual.json` da cena dizia, em maiúsculas e com o símbolo de proibição, dentro do
   campo `tecnica`: *"'soltar boi pra pastar' → `_media/footage/s27-gado-pastando-campo-aberto-v2.mp4`
   (⛔ NUNCA `s27-gado-pastando-verde.mp4` — REPROVADO em 03/ago: é dehesa ibérica, azinhal e solo
   avermelhado)"*. O HTML entregue usava **exatamente o clipe vetado**, e o aprovado estava no disco,
   pago, **com zero usos**.
   • **O que a tela mostrava:** gado Limousin sob **azinheiras esparsas** (*Quercus ilex*) em solo
     avermelhado — a assinatura da dehesa ibérica — ilustrando a narração sobre o pasto uruguaio, num
     vídeo cuja tese é o pampa. O mesmo projeto **já havia rejeitado footage por isso**: a pauta C3
     recusou clipes por "MOSTRAREM O LUGAR ERRADO (paisagem báltica, dehesa ibérica)", com o critério
     escrito *"o requisito é SER O PAMPA"*. O veto foi formulado, registrado, e desobedecido.
   • **A assimetria que faz isto passar:** o campo `midia_ancora` é MECÂNICO (o
     `aplicar-ancoras-pesquisa.mjs` o lê, promove e rebaixa), mas o veto mora na **prosa** do campo
     `tecnica`, que só o modelo lê. Prosa não tem consumidor determinístico: se o agente não a
     obedecer, nada acusa. Aqui os dois campos DISCORDAVAM — `midia_ancora` apontava o clipe certo e
     o HTML usava o errado — e essa discordância, que é trivial de medir, ninguém mediu.
   ⚠️ **Os gates que passaram, e é a lista que importa:** `qc-contrato` ✓, `qc-hex` ✓,
   `check-overlap` ✓, `qc-cobertura-arte` ✓ (contou a cena como PRONTA), `qc-procedencia` — que
   reprovou o projeto por OUTRA razão (23 arquivos sem prova) e **não** por este, embora o clipe
   vetado seja justamente um dos sem registro. Todos medem TEXTO, contagem, contrato e frescor;
   **nenhum pergunta se o arquivo que a cena carrega é o arquivo que a direção mandou carregar.**
   • **A régua, e ela é de uma linha:** antes de fechar qualquer cena com mídia, compare o `src=` do
     HTML com o `midia_ancora` da mesma cena no `conceito-visual.json`. **Divergiram? A direção
     manda.** Se o conceito nomear um arquivo dentro de `tecnica`, ele vale tanto quanto o campo
     `midia_ancora` — e um `⛔ NUNCA <arquivo>` é ordem, não observação histórica.
   • **Conserto determinístico, sem inferência:** `scripts/aplicar-substituicao-midia.mjs` com um
     mapa `_pesquisa/recaca-*.json` — ele troca o caminho, **remede** resolução/fps/duração por
     ffprobe para o cabeçalho não mentir, e copia o HTML para `_bkp-recaca-<data>/` antes de gravar.
     Aplicado aqui e validado por `shot.mjs` em dois `t`: a cena voltou ao pampa argentino real.
   ⚠️ **E o clipe certo estar PARADO no disco é o sintoma barato de procurar.** Um footage pago, com
   procedência provada e **zero usos** em `graphics/*.html`, enquanto sua cena declarada carrega
   outro arquivo, é a impressão digital exata deste defeito. Um `grep -l` por nome de arquivo nos
   HTMLs custa segundos e responde de uma vez quem está órfão e quem está em uso indevido.

**ARTE-282.** O DOSSIÊ DE ARTE NÃO TEM VALIDADE — E O DESPACHO SÓ PERGUNTAVA SE ELE EXISTE (medido em
   18/ago/2026, abertura da estação ARTE do `especies-humanas`; agente-raiz `scripts/desenhar-cenas.mjs`,
   corrigido no mesmo ato).
   O `temBrief()` do despachante testava `statSync(brief).size > 500` — existência e tamanho. Mas o
   `_brief-arte/<id>.md` é um **instantâneo** do espelho + conceito + mídia do disco, e as três coisas
   andam depois que ele é gravado. Neste projeto os 133 dossiês eram de **13/ago 09:23** e a SEGUNDA
   rodada de fusão gravou `espelho.json` e `conceito-visual.json` às **13/ago 13:58** — 4h35 depois.
   • **O que os dois dossiês vencidos diziam:** `n064` declarava `__duracao 10.06s` contra **13.60s**
     do espelho; `n095`, `11.12s` contra **17.24s**. E o número era o menor dos problemas — o
     word-lock parava no meio da frase (*"…se ignorassem por completo. Osso"*), e o hand-off mandava
     *"vai para: n065"*, a cena que aquela mesma fusão tinha **absorvido** e que já não tem arquivo
     próprio. As duas eram MÃES de run fundido: o agente desenharia 10s de uma janela de 13,6s
     tratando a filha como vizinha separada — o oposto exato da [ARTE-40](b), que existe para a mãe
     cobrir o run inteiro numa câmera contínua.
   ⚠️ **Por que só DUAS de onze, e por que isso engana:** houve duas rodadas de fusão, 09:23 e 13:58.
   Os dossiês nasceram entre elas, então **9 das 11 mães batiam** com o espelho. Amostrar uma mãe e
   achá-la coerente NÃO absolve o lote — a divergência aqui era de 2 em 11, e a amostra tinha 82% de
   chance de cair numa cena sã. Compare as `dur` de TODAS as pendentes; é um laço de milissegundos.
   • **O preço, e é o pior da casa:** cota de **Fable** — o recurso mais escasso do estúdio, com as
     12 contas no teto — gasta para produzir uma cena que o gate de contrato reprova depois. Dossiê
     velho não dá erro: ele descreve, com autoridade e formatação impecável, **outro vídeo**.
   ✅ **A cura é determinística e custa segundos:** `node scripts/_brief-arte.mjs <proj>` é idempotente
   e não chama LLM nenhum; regerar o projeto inteiro realinha todos os dossiês ao disco de agora. O
   despachante passou a fazê-lo sozinho: `garantirDossiesFrescos()` compara o mtime de cada dossiê
   pendente com o mais novo entre `espelho.json` e `conceito-visual.json`, regera se algum estiver
   atrás, e **não trava a linha** se a regeração falhar (avisa e segue — dossiê velho ainda é melhor
   que agente montando de cabeça). Provado nos três estados: 0 vencidos no disco são, 1 com mtime
   forjado, 0 de novo após restaurar.
   ⚠️ **A régua geral, que vale além do dossiê:** *artefato derivado precisa carregar a hora de quem o
   gerou, e quem o consome precisa CONFERIR essa hora.* É a mesma família do portão que barra por
   carimbo vencido ([REND-99]) e do `conceito-visual` vencido contra espelho recomposto — e o degrau
   que faltava era o mais barato de todos: **quem move a fonte (fusão, re-espelho, recomposição)
   regera o derivado no mesmo ato, ou o consumidor o detecta.** Aqui ninguém fazia nem um nem outro.

**ARTE-283.** DESVIO DECLARADO É DECISÃO; DESVIO SILENCIOSO É DEFEITO — E O GATE DE MODELO REPROVAVA OS
   DOIS IGUAL (medido em 18/ago/2026, estação ARTE do `aceleradores-particulas`; agente-raiz
   `scripts/qc-espelho-modelo.mjs`, corrigido no mesmo ato).
   O gate compara `modo` × `modelo` contra o catálogo e reprova a divergência. Correto na maioria dos
   casos — e cego para o caso em que a divergência é a ESCOLHA. A `s93-tres-caminhos` (SHOWPIECE do
   fecho, 15 s) declara `dados` + **M21**, e o montador escreveu o porquê no próprio `motivo`:
   *"os três caminhos são uma ENUMERAÇÃO nomeada e o stepper em três estações word-locked é a forma
   que garante que os três fiquem legíveis lado a lado no fim"*. O diretor de arte concordou por
   escrito na `tecnica` (*"SHOWPIECE M21, 15 s"*), com metáfora inteira construída em cima disso.
   • **O gate acusava, e o `--corrigir` que ele mesmo sugere teria trocado M21 por M09** — jogando
     fora a direção do showpiece mais importante do fecho. *A régua fazendo exatamente o estrago que
     a régua existe para evitar*, e com uma linha de comando pronta para copiar. É a mesma família da
     memória do `--corrigir` que quebra M19: **conserto automático sobre um campo que alguém escolheu
     a dedo não é conserto, é sobrescrita.**
   • **Três estados, não dois** (a régua do `qc-spec-agentes` trazida para cá): **declarado** (com
     justificativa, e o gate o EXIBE como decisão para quem lê poder discordar) · **silencioso**
     (defeito, reprova) · **impossível** (código que não existe no catálogo — este NUNCA se isenta:
     não há o que declarar sobre um M que não existe).
   • **Duas formas valem, e a segunda é a que não pediu reescrita:** o campo explícito
     `modelo_isencao` (padrão dos `data-qc-rolagem`/`data-qc-sem-heroi` das cenas) e o `motivo`
     citando LITERALMENTE o código declarado — que é como o montador já escreve hoje. Exigir campo
     novo teria deixado 100 espelhos vivos em falso vermelho até alguém os reescrever, e regra que
     depende de mutirão é regra morta ([SIS-124]).
   ✅ **Provado nos quatro estados antes de valer:** o caso real passa como declarado; desvio com
   motivo que NÃO cita o código reprova; `M99` inexistente reprova mesmo com justificativa; e o
   campo explícito isenta. Baseline medido nos 10 projetos com espelho no disco: 9 PASS antes e
   depois — a isenção não mascarou nada, porque não havia nada a mascarar.
   ⚠️ **A régua geral:** *gate que reprova uma decisão deliberada ensina a ignorar o gate* — e o
   próximo a ler o vermelho ou obedece ao `--corrigir` e quebra a cena, ou aprende que este gate
   mente e passa a pular também os vermelhos verdadeiros. Alarme falso não é ruído inofensivo
   ([ARTE-190]); é o que gasta a credibilidade que o alarme verdadeiro vai precisar.

**ARTE-284.** A PENEIRA DE FOLHAS CURTAS TEM DUAS PORTAS DE FUGA, E O DESENHISTA CONTAVA COMO SE NÃO
   TIVESSE — declarava 9 blocos no cabeçalho e a máquina media 14 (medido no
   `s35-o-modelo-padrao` do `aceleradores-particulas`, 18/ago/2026, cena barrada no portão desde
   07:22 com `[carga] DENSIDADE: 14 blocos @6.8s, teto 9`). A [ARTE-186] agrega as folhas de 1–2
   caracteres pelo texto do PAI — uma tabela de 17 símbolos deve contar 1. Ela vale, mas a chave da
   agregação é **(texto do pai, font-size DA FOLHA)**, e ela só alcança quem é folha de um pai com
   ≥3 irmãos curtos. Daí as duas fugas, ambas invisíveis a olho:
   • **Font-size distinto entre irmãos curtos DUPLICA o agregado.** O `H` do Higgs estava a 156 e as
     outras 16 células a 108: a MESMA string `uctdsbeμτνeνμντγgWZH` gerou duas chaves, dois blocos.
     Destaque de célula se faz por tamanho da CAIXA, cor e glow — não pelo corpo da letra.
   • **`<tspan>` dentro de `<text>` escapa da peneira.** O subscrito de `νe`/`νμ`/`ντ` era um tspan:
     como folha de um pai com UM filho, não tem os 3 irmãos curtos que a peneira exige, e cada um
     virou bloco solto — 3 blocos que ninguém enxerga no arquivo. Índice/subscrito numa grade se
     escreve como `<text>` IRMÃO posicionado, nunca como tspan.
   Somadas, as duas fugas punham 5 blocos fantasma no pico de uma cena que estava certa. **O sintoma
   que denuncia: o cabeçalho declara um pico e o `qc-carga` responde outro maior — a diferença não é
   opinião, é estrutura de DOM.** Quem desenha grade de símbolos roda `node scripts/qc-carga.mjs
   <html>` ANTES de declarar o pico no cabeçalho; a linha `no pico:` lista os blocos um a um e
   entrega o diagnóstico pronto. E o conserto de densidade se confere por FRAME: unir dois rótulos
   numa linha só resolveu a contagem e criou COLISÃO com os vizinhos, que só o olho pegou.

**ARTE-285.** TEXTURA SE DECLARA NO **CLAMP**, NÃO NO COMENTÁRIO — a cena escrevia `op ≤.10` em dois
   lugares e clampava em `0,34`, que é ACIMA do limiar de leitura do `qc-carga` (`--op` = 0,25), e por
   isso 26 bases decorativas viraram TEXTO NO AR (medido no `n102-so-sabemos-porque-deixou-rastro` do
   `especies-humanas`, 18/ago/2026: `✗ RITMO: 7 entradas na janela de 1 s @1s (teto 4)` numa cena que
   o próprio cabeçalho declarava com `Guard-rail: pico 0 blocos de texto · entradas de texto 0`).
   O desenhista conhecia a régua e a escreveu duas vezes em prosa — no comentário da criação
   (*"letras adormecidas — TEXTURA da matéria … nascem no ar; op ≤.10"*) e no cabeçalho da cena.
   **Prosa não executa.** O que a máquina lê é o terceiro argumento do `clamp`, e ali estava 0,34.
   O sintoma é o mesmo da [ARTE-284] — cabeçalho declara um pico, o gate responde outro maior — mas a
   causa é outra e o conserto também: lá é estrutura de DOM, aqui é **um número acima do limiar**.
   • **Por que estoura em RAJADA e não aos poucos:** textura costuma viver dentro de UM grupo com
     fade-in único (aqui `#cavRoot`, `seg(t,1.5,0.5)`). Enquanto o pai está a 0 a opacidade efetiva
     é 0; quando ele abre, as 26 folhas cruzam o limiar NO MESMO INSTANTE e a pior janela de 1 s
     recebe a rajada inteira. O laudo denuncia isso sozinho: os "blocos" saem com o MESMO texto
     repetido (`"ATTCATGACGGTACACTTTTTCCACA"` ×3 — as 26 letras concatenadas). *Bloco repetido no
     laudo de vida é assinatura de textura contada como texto, não de texto de verdade.*
   • ⛔ **E `data-qc-ornamento` NÃO É A SAÍDA — ele isenta DENSIDADE, não RITMO nem VIDA.** Tentei
     primeiro por ali, declarando o grupo com a descrição correta: o laudo saiu **idêntico**, 7
     entradas @1s. A isenção é honrada no laço da densidade (`qc-carga.mjs`, o `continue` dos
     ornamentos); o contador de estreias não a consulta. Quem marcar o contêiner e reler só a última
     linha vai achar que resolveu.
   **A régua:** textura de fundo tem teto de opacidade EFETIVA **abaixo de 0,25** — some o `base`, o
   `boost`, o `pos` e a amplitude do `sin` antes de cravar o clamp, porque é a soma que cruza. Acima
   disso não é textura: é texto, e responde como texto. Aqui 0,34 → 0,20 fez o gate passar e os
   frames de 6,2 s ficarem **indistinguíveis a olho** — as bases A/C/G/T continuam legíveis como
   granulação da matéria. *Quando o conserto de um gate não muda o frame, o gate estava medindo o que
   o desenhista já queria — e quem estava errado era o número, não a arte.*

**ARTE-286.** A MÍDIA REAL TAMBÉM **NOMEIA**, E O RÓTULO IMPRESSO NELA GRITA MAIS ALTO QUE O FIO QUE
   VOCÊ DESENHOU — quando você pousa um elemento semântico sobre uma foto que já tem legendas
   (vitrine de museu, prancha científica, painel de exposição, infográfico fotografado), a legenda
   mais PRÓXIMA e mais ALINHADA passa a ser lida como a legenda DELE. Medido no
   `n118-de-toda-a-familia-so-um-de-pe` do `especies-humanas` (18/ago/2026): a silhueta ÂMBAR — a cor
   que o vídeo inteiro reservou para *sapiens/nós* — pousava em `cx:2360, base:775` sobre a foto da
   vitrine do Natural History Museum, e o rótulo **"Homo floresiensis"** da própria foto ocupa
   `x 2499–3039, y 774–864`: **39 px de folga horizontal e a MESMA linha de base**, que é a geometria
   exata de legenda-para-objeto num painel de museu. Enquanto a narração dizia *"o único que continua
   de pé é o Homo sapiens. **Nós.**"*, a tela etiquetava o sobrevivente com o nome de uma das espécies
   extintas do próprio vídeo.
   • **Não era descuido — o desenhista tratou o problema e tratou só metade dele.** O cabeçalho
     declarava a atribuição correta e a razão do desvio (*"a âmbar fica DE PÉ na linha de prateleira
     vazia à direita do crânio sapiens — acima dele a foto não tem headroom — ligada ao osso pelo fio
     de luz + o halo âmbar … nunca pisando em osso de outra espécie"*). Ele blindou o eixo que
     enxergava (**não pisar em OSSO**) e não viu que o painel nomeia por **rótulo**, não por osso.
     *Guarda certa com inventário incompleto — a mesma raiz da [ARTE-227] e do caso do canvas.*
   • **A atribuição desenhada perde a disputa por CONTRASTE, e a conta é fácil de fazer:** o fio de
     luz caía para `opacity .25` depois de `firma` (`0.44*(1-0.42*firma)`), 7 px de traço em 3840;
     o rótulo é texto branco sobre etiqueta verde opaca, de alto contraste, a 39 px dos pés. **Âncora
     fraca contra âncora forte, e o espectador de TV lê a forte.** Se a sua atribuição é um fio, um
     halo ou uma linha fina, ela não vence um rótulo impresso — mude a POSIÇÃO, não a opacidade.
   • ⛔ **Nenhum gate vê isto, e não é falha deles — é definição:** `check-overlap` compara bbox de
     **texto do DOM**, e o rótulo é PIXEL da foto; além disso aqui **nem havia colisão** (39 px de
     folga), então nada seria acusado mesmo se o gate lesse a imagem. `qc-carga`, `qc-contrato`,
     `qc-hex` e `qc-tamanho` deram verde antes e depois do conserto. *Isto é um degrau ACIMA da
     [[colisao-texto-autoral-x-texto-da-midia]]: lá as letras se encavalam e o dano é legibilidade;
     aqui nada se toca e o dano é **atribuição** — a cena fica bonita, limpa e dizendo o contrário.*
   **A régua, e ela é de dez segundos:** antes de fechar cena que desenha por cima de foto com texto
   impresso, **liste os rótulos da foto e meça o mais próximo do seu elemento nos dois eixos**. Rótulo
   a menos de ~1 altura-de-figura, ou compartilhando a linha de base, é uma etiqueta que o espectador
   vai aplicar ao que você desenhou. O conserto é geométrico e grátis: aqui o vão de parede livre
   entre o crânio sapiens (fim `x≈1980`) e aquele rótulo tinha **519 px**, e `cx 2360 → 2160` trocou
   `39/—` por **65 px à esquerda e 224 px à direita**, encurtou o fio (portanto o tornou mais legível)
   e não custou um token de Fable — a cena inteira, coreografia, word-lock e halo, ficou de pé.

**ARTE-287.** GATE QUE LÊ HTML TEM DE JOGAR FORA O **COMENTÁRIO** ANTES DE PROCURAR DEFEITO — nesta
   casa a prosa de cabeçalho FALA CSS, então varrer o arquivo cru faz a documentação virar ré. Medido
   no `s025-boco-os-quatro-atributos` do `orcas-nao-matam` (19/ago/2026): o `qc-hex` acusou três cores
   corrompidas (`#vig`, `#grain`, `#3EC8FF→#FFB13D`) e **as três só existiam no comentário** — o CSS
   real da cena, `linear-gradient(180deg,#3EC8FF 0%,#FFB13D 100%)`, está impecável.
   • **O mecanismo é o casamento entre duas coisas certas.** O `DECL_COR` exige propriedade de cor
     antes do `#` (foi assim que ele parou de acusar seletor de id), e o valor é `[^;{}]*` — que não
     para na quebra de linha. O cabeçalho da cena explicava a decisão de sombra escrevendo
     `box-shadow: 0 …` em PROSA; dali o regex engoliu o parágrafo inteiro até o próximo `;`, e o
     parágrafo citava `#vig` e `#grain` ao dizer que a cena **não** os usava. *A frase que provava o
     acerto do desenhista foi lida como a prova do erro dele.*
   • **A régua, e ela vale para qualquer gate novo:** hex dentro de comentário NUNCA é pintado pelo
     navegador, logo não pode ser o defeito que este gate existe para achar — cor que o browser
     descarta. Se o achado não é renderizável, ele não é achado. O `qc-contrato.mjs` já limpava
     `<!-- -->` e `/* */` pelo mesmo motivo, e o `qc-hex` não limpava: **dois gates lendo o mesmo
     arquivo com premissas diferentes sobre o que é código.**
   • **O incentivo é perverso e é o que torna isto caro:** quanto MELHOR documentada a cena, mais
     alarme falso ela gera — e a `ROUPA-CENA` obriga o cabeçalho. O gate punia exatamente quem seguiu
     a régua, que é o jeito mais rápido de ensinar a ignorar o gate (a mesma raiz da [ARTE-190], que
     nasceu de calibrar falso positivo, e do `qc-portabilidade`, cuja terceira calibração foi
     *"uso GUARDADO não é defeito"*).
   • **Provado nos dois lados antes de fechar, que é o que separa conserto de afrouxamento:** os
     defeitos reais conhecidos continuam pegos — `#050F２8` (largura total U+FF12), `#071late827`,
     `#1B3answer2`, `#08182cpx` — e a varredura de **496 HTMLs** do disco devolveu **1 só achado**,
     que é REAL e em CSS ativo (`color:#BStyle;color:#B8D2E8` na `s67` do `aceleradores-particulas`,
     um replace mal feito que o navegador descarta). Antes do conserto: 1 de 113 no `orcas-nao-matam`,
     falso. Depois: 113/113 limpo, e o defeito de verdade do acervo continuou aparecendo.

**ARTE-288.** VOCABULÁRIO DE GATE EM PORTUGUÊS PRECISA DESAMBIGUAR HOMÓGRAFO — O VERBO COMUM AFOGA O
   SUBSTANTIVO RARO (medido em 19/ago/2026, na direção de arte do `ultimo-dia-dinossauros`). O
   `qc-direcao-real` acende o alerta `tese-vertical-sem-M04` quando ≥4 cenas argumentam ALTURA ou
   PROFUNDIDADE e o vídeo não tem nenhuma cena `mapa3d` — altura e profundidade se PROVAM com
   elevação real, não se desenham. A lista de gatilho trazia `\bencosta\b`, pensada para a **vertente
   de morro**. Só que `encosta` é também a 3ª pessoa de `encostar`, e num vídeo sobre um asteroide
   batendo na Terra tudo encosta em tudo: **3 das 4 cenas "verticais" eram "a rocha encosta no chão",
   "o golpe encosta no chão" e "a mão encosta na parede de rocha"**. A quarta era `relevo` usado como
   metáfora do tamanho do asteroide ("não era uma pedra, era um relevo inteiro voando"). Quatro
   acusações, **zero argumento vertical** — e 4 é exatamente o limiar.
   • **O dano não é o alarme; é o que o alarme ensina.** Este gate foi calibrado para ser raro (o
     próprio cabeçalho registra: acende em 2 de 15 produções). Um vídeo que o dispara sem motivo
     convida a estação seguinte a passar por cima dele — e no dia em que ele acender por um buraco de
     verdade, já terá sido treinado a ser ignorado. Mesma família da [[ARTE-190]].
   • **A cura é exigir a forma NOMINAL, não remover a palavra:** `\bencostas\b` (plural, quase sempre
     substantivo) ou `\b(?:na|da|pela|numa|duma|uma|a|à)\s+encosta\b` (precedido de artigo/preposição).
     O verbo vem depois de sujeito e antes de preposição — "a mão **encosta na** parede" —, o
     substantivo vem depois de determinante — "subiram **pela encosta**".
   • **Conserto se mede nos DOIS sentidos, e a prova é o controle que CONTINUA acusando.** Varridos os
     19 espelhos do disco: o verbo aparece em **9 projetos**; a correção muda o veredito em **2**
     (`ultimo-dia-dinossauros` 4→1 e `piramide-porta-secreta` 4→3, ambos apagando alerta falso) e
     **preserva todos os positivos reais** — `ate-que-altura-construir`, cuja tese literalmente é
     vertical, cai de 9 para 8 e **segue aceso**; `orcas-nao-matam` 6→5 e `itaipu-afogou` 5→4, acesos.
     *Um filtro que só se testa contra o caso que o incomodou não é conserto: é a poda do sintoma.*
   • **A régua geral, que vale para toda lista de gatilho:** antes de pôr uma palavra numa lista de
     vocabulário de gate, pergunte **em que outra classe gramatical ela existe** — e prefira a forma
     flexionada ou o contexto de determinante à palavra nua. Português conjuga muito, e o gate lê
     texto escrito por outro modelo, que descreve AÇÃO o tempo todo. `encosta`, `pico`, `salto`,
     `desce`, `cai`, `fundo`, `planta` e `sobe` são todos armadilhas do mesmo tipo.

**ARTE-289.** RUN ACUMULADO PRECISA SER COLHIDO **ANTES** DE ZERAR NUMA CENA RECUSADA. O
   `fusao-candidatos.mjs` guardava em memória cenas adjacentes elegíveis, mas, quando a próxima cena
   era apresentador, fronteira ou já tinha arte, fazia `atual = null; continue` sem registrar o run
   anterior. O resultado mais perigoso era um verde vazio: “nenhum candidato”. Medido no
   `energia-escura` em 19/ago/2026, `n06+n07` e `n17+n18` existiam e sumiam porque cada par era
   seguido por uma cena recusada.
   **A régua:** laço que acumula grupo e encontra uma fronteira primeiro entrega o grupo válido e só
   depois zera o acumulador. O teste precisa usar produção parcial, com run elegível imediatamente
   antes de item recusado; projeto virgem não ativa o defeito.

**ARTE-290.** O PAPEL DA CAÇA NÃO É A ENTREGA DA CAÇA — E O GATE CONTAVA O MARCADOR DE AUSÊNCIA
   COMO PRESENÇA. No `qc-direcao-real`, a âncora `FALTA — …` que cita, para quem for caçar depois, o
   `_PENDENCIA.md` da cena ou o manifesto da rodada (o `…json` dentro de uma pasta `_caca…`) tinha
   esses dois arquivos conferidos como asset vivo: existem, têm bytes, passam no `statSync`. A cena
   caía no ramo do **rótulo defasado** e o gate mandava *"reconcilie a âncora antes de despachar a
   arte"* — sobre pastas que não têm um único arquivo de mídia. Medido em 20/ago/2026 no
   `ate-que-altura-construir`: **3 acusações, 2 falsas** (s98 citava só o próprio `_PENDENCIA.md`;
   s115 citava o `_PENDENCIA.md` mais `_media/_cacaB/ss-round2.json`, que é lista de CANDIDATOS não
   baixados). A conta do cabeçalho mentia junto: 49 asset real / 15 FALTA, quando o disco diz 47/17.
   • **É a [[ARTE-269]] outra vez, pela porta do DOCUMENTO em vez da do diretório.** Aquela fechou o
     caso do destino (`existsSync` de pasta devolve true); esta fecha o caso do papel da caça. Mesmo
     dano, mesma frase de comando: obedecer o gate é **converter uma FALTA honesta em âncora "real"**
     e despachar arte sobre o vazio — exatamente o que o rótulo FALTA existe para impedir.
   • **O marcador de ausência é a prova mais forte que existe de que a mídia NÃO chegou** — e era
     lido como prova de que chegou. Quando um gate inverte o sinal de um artefato, ele não erra por
     pouco: erra ao contrário, e com a autoridade de quem conferiu o disco.
   • **A cura é pelo NOME, não pelo disco** — `_PENDENCIA`/`_PROCEDENCIA` e qualquer caminho sob uma
     pasta `_caca…` saem da conta **dos dois lados**: não são entrega (não são a mídia) e não são
     âncora morta (existem, e está certo que existam). Como o `ehDestino` da [[ARTE-269]], ao lado do
     qual mora.
   • **Conserto se mede pelo controle que CONTINUA acusando.** Nas 5 produções com conceito no disco,
     o único outro acusado — `orcas-nao-matam` c25 — segue aceso, e aponta `assets/geojson/argentina.json`
     (108,8 KB) e `peninsula-valdes.json`: entrega de verdade. *Um filtro por extensão teria matado
     esse positivo junto*, porque o GeoJSON também é `.json`; o que separa os dois não é o formato, é
     **morar numa pasta de caça**. Sobra 1 acusação no `ate-que-altura-construir` (s122), e ela é
     verdadeira: o `.jpg` existe, e a âncora o declara como fallback CONDICIONADO à procedência.
   • **A régua geral:** antes de contar um arquivo como prova de que o trabalho foi feito, pergunte se
     ele não é o registro de que o trabalho FALTA. Pasta de pendência, manifesto de rodada, log de
     tentativa e `_PENDENCIA.md` são todos evidência de ausência com forma de presença.

**ARTE-291.** MÉTRICA DE UM RELÓGIO NÃO MEDE ARQUIVO DE OUTRO — E A PROVA IMPRESSA NÃO ERA
   CRITÉRIO. O `regencia-insumo.mjs` escolhia o arquivo de fala por `palavras_em_corte` (menos
   palavras caindo dentro dos cortes = mais limpo). Mas os intervalos de `_cortes.json` estão em
   tempo **BRUTO**, e num arquivo **já ripado** os tempos estão deslocados para trás e caem nesses
   intervalos por acidente aritmético. Medido em 20/ago/2026 no `ate-que-altura-construir`: o
   `words-final.json` — o certo, o que o próprio `espelho._relogio.fonte` DECLARA e cujos irmãos ele
   PROÍBE por escrito — contava **542** "palavras em corte" contra **9** do `words-limpo.json`, e
   perdia. O insumo saía carimbado `BRUTO` sobre um espelho FINAL, e as 130 cenas sairiam
   coreografadas na fala de outro trecho, com a arte desenhada por cima [[ARTE-183]].
   • **O ripado perde por construção.** Quanto mais correto o arquivo (mais cortes já descontados),
     mais deslocado ele fica em relação à régua bruta que o mede. A métrica não estava imprecisa —
     estava invertida, e com sinal mais forte quanto melhor o candidato.
   • **A prova do fim já denunciava, e não contava.** O insumo imprimia lado a lado a âncora do
     espelho (`E pra descer ainda mais fundo… o clube de membros está logo aqui embaixo`) e a fala
     que o arquivo devolve naquela janela (`250 metros do topo são só uma agulha de metal`) — texto
     de trechos diferentes, divergência gritante, **e o script seguia em frente**. *Prova que não é
     critério é enfeite:* ela só serve se alguém abrir o arquivo e ler, e a estação existe
     justamente para ninguém precisar fazer isso.
   • **O relógio se decide pelo TEXTO**, que é o único sinal independente da timeline: a fração das
     palavras da âncora do espelho que reaparecem na fala daquela janela. A separação é limpa e não
     tem zona cinzenta — medido em 5 projetos, o arquivo certo dá **0,91–0,97** e os errados
     **0,03–0,08**. `palavras_em_corte` volta ao lugar que é dele: desempatar entre arquivos que já
     estão no MESMO relógio.
   • **Conserto se mede nos dois sentidos.** No `energia-escura` — o projeto que originou a
     calibração anterior deste mesmo trecho — os DOIS brutos ficam ≥0,91 e o desempate segue
     elegendo o `words-limpo.json` que aquela correção cravou como certo. Consertar o caso novo sem
     re-medir o caso velho é trocar de defeito, não resolver.
   • **A régua geral:** antes de comparar dois artefatos por um número, pergunte em que eixo cada um
     foi medido. Duas timelines, uma régua só — e a régua é de uma delas.

**ARTE-292.** A FUSÃO PODE ENGOLIR A EXIGÊNCIA DE REGISTRO REAL — E NENHUM GATE VIA
   (medido no `rosto-da-formiga`, 21/ago/2026):
   • **O fato:** a cena fundida herda a técnica da MÃE. Quando uma mãe de `dados`/`split` absorve
     uma vizinha de `footage`, a janela da filha — que pedia registro real — passa a ser coberta por
     gráfico, e o pedido some **sem deixar rastro**. Dois casos no mesmo vídeo:
     `s25-sete-vezes-mais-rapido` (dados) engoliu `s26-o-mundo-em-camera-lenta` (footage) e
     `s27-o-tapa-em-dois-tempos` (split-footage) e saiu com ZERO mídia; `s55-anestesico-e-anticoagulante`
     (split) engoliu `s56-a-picada-indolor-e-a-coceira` (footage), idem.
   • **Por que é invisível:** a filha não existe mais como arquivo, então o `--listar` conta as duas
     como cobertas; e a mãe passa em `qc-contrato`, `qc-hex` e `check-overlap` porque **não há nada de
     errado com ela** — o defeito não está na cena, está no que a cena deixou de ser. *Gate que examina
     o artefato existente nunca vê o pedido que foi apagado ao criá-lo.*
   • **A regra é AVISAR, não reprovar** — e a distinção é o ponto. Pode ser decisão editorial legítima
     (o gráfico cobre a janela de propósito). Reprovar condenaria arte JÁ PAGA a ser refeita por
     suspeita, que é o custo que a casa recusa. O gate garante que a escolha seja **vista**, não que
     seja desfeita. Quem decide refazer é quem tem a mídia na mão.
   • **Onde mora:** lente 2 do `qc-fusao-espelho.mjs` — a mãe tem HTML, o HTML não referencia mídia
     nenhuma (`src`/`href`/`url()`, ignorando `data:`), e ao menos uma filha do run tinha modo que pede
     registro real. Calibrado no parque: **13 vídeos com run fundido, 2 runs acusados, ambos os
     verdadeiros** — zero falso positivo nos outros 12.
   • **Na hora de fundir:** o `fusao-candidatos.mjs` recusa fundir através de FAIXA, e está certo — mas
     `dados` e `footage` são a MESMA faixa (`composicao`), então esta fusão é permitida por construção.
     Fundir cena de dados com cena de footage é legítimo; **sair sem o registro que a segunda pedia, não**.

**ARTE-293.** A RESOLUÇÃO É PARTE DO PEDIDO — E A ÂNCORA NÃO A DIZIA
   (medido no `rosto-da-formiga`, 21/ago/2026):
   • **O fato:** o editor-de-arte lê o conceito, não o disco. A `midia_ancora` entregava uma lista de
     caminhos **sem quantos pixels havia atrás de cada um**, e ele coreografava push-in às cegas. Na
     `s33` o agente ACERTOU a conta para a imagem cuja dimensão conseguiu inferir — deixou escrito no
     próprio HTML *"o zoom é curto de propósito — a micrografia tem 2048 px de largura, e passar de
     ~2,9× nativo transforma pelo em mingau"* — e **caiu na segunda imagem da mesma cena**, de
     1248×832, que em `cover` por largura num palco 3840 já nasce a **3,08× nativo antes do primeiro
     frame**. A cena abre espetacular aos 1,5 s e termina em papa aos 4,0 s.
   • **Nenhum gate pega:** o HTML é válido, o contrato existe, não há colisão, a mídia é real e a
     procedência está na tela. Só o olho no frame — e **só no frame do FIM**, porque o do começo está
     certo. *Amostrar o primeiro instante de uma cena com push-in é não medir o push-in.*
   • **A régua:** `3840 ÷ largura_da_imagem` = o fator NATIVO em cover-por-largura, antes de qualquer
     `scale`. Acima de ~2,9× a textura vira mingau. Imagem abaixo do palco cabe como **painel/inserto**
     ou em cover **sem zoom adicional** — nunca em full-bleed com push-in.
   • **Onde foi consertado:** `aplicar-ancoras-pesquisa.mjs` agora anexa `(L×A)` a cada caminho e
     carimba `⚠ RESOLUÇÃO ABAIXO DO PALCO` com o fator calculado. E o carimbo é **retroativo**: âncora
     promovida antes desta lente também recebe, porque a cena que ela alimenta pode estar na fila
     agora — foi o caso da `s85`, com duas imagens de **1024px (3,75× nativo)**, que estava na 15ª
     espera de lease quando o carimbo entrou. Conserto que só vale para vídeo futuro deixa o buraco
     aberto exatamente onde já há mídia esperando agente.
   • **E o dossiê tem de ser REGERADO depois** — `node scripts/_brief-arte.mjs <proj>`, determinístico
     e grátis. O `desenhar-cenas.mjs` só regera dossiê mais velho que o conceito **no início do lote**;
     carimbo escrito com o lote em curso não chega sozinho a quem já está na fila.
   • **Para quem PROMOVE mídia:** medir a dimensão é parte de curar, não detalhe de catálogo. Promover
     um arquivo pequeno sem declará-lo é entregar ao desenhista uma conta que ele não tem como fazer.

**ARTE-294.** O RAMO DO "RÓTULO DEFASADO" NÃO PODIA ACERTAR — 5 ACUSAÇÕES, 5 FALSAS, EM TODA A SUA
   HISTÓRIA — E MENTIA NO NÚMERO QUE O PRÓPRIO GATE USA PARA REPROVAR (20/ago/2026, `avioes-950`,
   achado na estação de direção de arte). O `qc-direcao-real` tinha um ramo com esta premissa: *"âncora
   `FALTA — …` que cita arquivo vivo ⟹ a pesquisa entregou e ninguém reconciliou"*. A premissa é
   impossível, e basta olhar o relógio para ver: **a âncora é escrita NO MOMENTO da direção**, quando a
   pesquisa ainda não entregou — que é exatamente por que ela diz FALTA. Todo caminho que o diretor põe
   ali é, por construção, **outra coisa que ele já sabia existir**. E quando a pesquisa de fato entrega
   depois, ela não reescreve a prosa: o arquivo cai no `destino` e o texto fica igual. O ramo procurava
   um sinal que nunca é emitido.
   • **As 5 acusações do acervo, e as três formas do mesmo engano** — nos 11 conceitos do disco:
     o **fallback pago** (`avioes-950` s83 → foto da s103; `ate-que-altura-construir` s122 → foto da
     s27), o **outro painel do split** (`piramide-porta-secreta` s96 pede o esquerdo e cita o direito;
     `uruguai-despovoado` s90b pede o DIR e cita o ESQ) e a **outra camada da cena** (`orcas-nao-matam`
     c25: o GeoJSON do mapa, quando o que falta é o footage). Nenhuma é entrega. ⚠️ A [[ARTE-290]]
     fechou dois casos e declarou os outros dois "verdadeiros" — **não eram**; ela olhou o disco e não
     leu a frase que apresenta o caminho.
   • **O substituto óbvio também não serve, e é isto que fecha a questão.** Trocar a prosa pelo
     DESTINO ("a pasta que o pedido nomeou ganhou mídia") acha outras 5 cenas, num conjunto **disjunto**
     — e as 4 conferíveis são igualmente falsas, porque o que está na pasta é a parte **PRÉ-PAGA que a
     âncora já declarava** (`avioes-950` s07: só o painel A380, com 737 e 787 faltando;
     `ate-que-altura-construir` s88: os painéis 1 e 2, faltando o 3) ou uma entrega **PARCIAL**
     (`brasil-portugues` s93: 1 Debret das 4–5 vistas pedidas). *Pasta não vazia não prova que chegou o
     que se pediu.* Casar "o que a âncora pede" com "o que o disco tem" é **julgamento de conteúdo, não
     teste determinístico** — e quem já tem esse ofício declarado é o `aplicar-ancoras-pesquisa`, que
     exige arquivo com bytes. Gate não duplica dono.
   • **O dano era duplo, e o silencioso é o pior.** (1) A prescrição — *"reconcilie a âncora antes de
     despachar a arte"* — convertia uma FALTA honesta em âncora "real" e mandava desenhar sobre um
     substituto: a [[ARTE-269]] pela **terceira** porta, depois do diretório (ARTE-269) e do documento
     ([[ARTE-290]]). (2) A cena acusada ia para `anc.real` e **inflava o `asset REAL: N = X%`, que é a
     métrica do piso de 25% deste mesmo gate**: `orcas` publicava 55,7% onde o disco diz 55,0%;
     `avioes-950`, 26,9% onde são 26,0%. Num vídeo perto do piso, o falso positivo carimba PASS abaixo
     da régua. *Gate que erra a própria manchete não erra só o alerta — erra o veredito.*
   • **Retirado, não remendado — e a ausência fica DECLARADA.** Terceiro conserto no mesmo ramo em três
     semanas ([[ARTE-269]], [[ARTE-290]], esta) é sinal de que o defeito não é o filtro, é a pergunta.
     Verificado nos 11 conceitos: **nenhum veredito mudou** com a retirada, e as contagens passaram a
     bater com o disco (5 cenas voltaram de `real` para `falta`). O comentário no lugar do alerta diz
     quem é o dono do ofício — *órfão declarado é decisão; órfão silencioso é defeito*.
   • **A régua geral, que vale além deste gate:** antes de escrever uma verificação, pergunte **quando o
     artefato é escrito** e **o que muda quando o fato muda**. Se o texto que você inspeciona é
     redigido antes do fato e não é reescrito depois dele, nenhum filtro o salva — você está lendo um
     documento que não pode saber a resposta. Falso positivo assim não se calibra: se retira.

**ARTE-295.** A PESQUISA DERRUBA O ESPELHO, E O DIRETOR DE ARTE NUNCA FICAVA SABENDO (achado no
   `ucrania-duas-guerras-uma`, 20/ago/2026, na própria estação de direção). O espelho é escrito ANTES
   de a pesquisa abrir as fontes. Quando a pesquisa abre e o número CAI, ela registra a divergência no
   shard `_pesquisa/pauta-*.json` — e o `direcao-prompt.mjs` montava a cena do espelho e do disco, sem
   ler os shards. Medido neste vídeo: **21 divergências registradas, 15 mudando a TELA**, todas
   invisíveis para quem dirige. O que ia ser prescrito: a frente ativa com ~1.000 km (é ~1.200,
   Syrskyi 06/fev/2026), o Shahed a US$ 49 mil (o observado é ~70 mil; 49 era projeção de 2023), a
   `s29` cravando "mais de 1.500 km" — número que **não existe em fonte nenhuma**, e o geodésico dá
   837 km —, a `s11` creditando um veículo cuja matéria foi conferida URL a URL e **NÃO EXISTE** (a
   fonte real é a AP), e a `s81` com um eixo de datas marcando o pico de um **recorde falso** (o OHCHR
   escreveu "mortos E FERIDOS"; pela série de mortos, seis meses de 2022 foram piores).
   • **A cadeia é o problema, não a cena:** o diretor prescreve, o `editor-de-arte` executa fielmente,
     o `qc-visual` julga UMA cena por vez e não tem como saber que a fonte diz outra coisa. Nenhum
     elo mente; o erro atravessa os três e só aparece no ar. **Insumo que corrige o insumo anterior
     tem de chegar a quem decide, ou vira arquivo de arquivo.**
   • **Ordem no prompt:** o bloco entra DEPOIS das cenas e ANTES do "o que escrever" — é a última
     coisa lida antes de escrever, e diz em voz alta quem vence. Onde espelho e pesquisa discordam,
     **manda a pesquisa**.
   • **Quando a VOZ já errou** (gravada, como a superlativa da `s81`), a tela no máximo **não
     reforça**: nunca contradiz a narração, nunca carimba o erro num eixo com o pico marcado.
   • **Formato não se presume:** `divergencias` traz `{cena,gravidade,espelho,fonte,recomendacao}` e
     `bloqueios` (pauta-geo) traz `{id_solicitado,cena:[…],veredito}`. Lendo só o primeiro formato, o
     bloqueio da geometria saía como uma linha com o id da cena e MAIS NADA — pior que ausente,
     porque ocupa o lugar do aviso. Foi a `s05`: 22,9 s de mapa pedindo o traçado da frente, e
     **nenhuma geometria de 2026 com licença que um canal monetizado possa usar**.
   • **LICENÇA, e o filtro tem de ser ESTREITO.** A primeira versão do gate marcou 28 de 84 arquivos
     com ⛔ — 26 eram o uso editorial NORMAL de um logo. Alarme que acende no caso comum ensina a
     ignorar o alarme, e o único bloqueio real do projeto (um retrato PENDENTE DE AUTORIZAÇÃO, que
     não pode ir ao ar em canal monetizado) passaria junto com o ruído. **Duas listas, porque são
     duas coisas:** "pode não ir ao ar" ≠ "vai ao ar, mas não se recolore, corta nem distorce" — e a
     segunda muda o DESENHO, então também é do diretor. Cena que depende de peça travada se dirige
     para **sobreviver sem ela**, e a trava vai em `faltas`.

---

### ARTE-296 · O arco chegava MUDO ao regente — o insumo lia a metáfora e a jogava fora

**Medido em 21/ago/2026, `avioes-950`, estação de REGÊNCIA.** O `conceito-visual.json` tinha
**104 cenas com `metafora` e `tecnica` escritas** pelo diretor de arte. O `_regencia-insumo.json`,
que é o único insumo que o driver manda o regente ler, entregava **zero** delas: o
`regencia-insumo.mjs` abria `cv.cenas[id]`, tirava dali só o booleano `showpiece`, e descartava o
resto no mesmo `map`.

O que passava adiante era o `arco_nota`, e ele **não é a prescrição da cena** — vem de `cv.fluxo`,
os runs de transição contínua, e por isso é raro: **19 de 127** aqui. O agente lia `arco_nota: null`
em 108 cenas e, obedecendo à própria roupa (*"nas cenas SEM nota de arco o silêncio é arco AUSENTE
… quem reserva é você"*), assumia liberdade onde havia prescrição escrita.

**Por que ninguém viu:** os três números que descrevem a cobertura do arco divergem, e o campo com o
nome mais óbvio é o que menos informa. `cenas_vivas_com_arco: 104` conta **id que sobreviveu ao
re-espelho** — não nota, não metáfora. O rodapé do script imprimia esse número com a legenda "têm
nota de arco", e quem lesse concluiria que 104 cenas chegaram dirigidas. Chegaram 19.

⚠️ **E o prompt do driver fechava o cerco:** ele afirma que *"todo o insumo já está mastigado"* no
JSON. Quem obedece nunca abre o `conceito-visual.json` — então a checagem 5 do contrato do regente
("contra o arco: onde ele marcou showpiece o regime não pode ser o mais morno; onde pediu respiro
você não põe rajada") era, na prática, **incheável**. Não havia como desobedecer ao arco e também
não havia como obedecê-lo.

**O que se perdia é justamente o objeto desta estação.** A `tecnica` do diretor não fala só de
paleta: ela crava **ritmo interno**. A da `s02` diz, literal — *"Primeiro plano segura o céu quase
vazio durante 'não é falta de tecnologia'; a silhueta entra em contraluz na palavra 'existiu',
cruza acelerando e sai antes de 'dobro'"*. Isso é uma partitura de três beats, ancorada em palavras,
escrita pela estação anterior e invisível para a estação cujo ofício é escrever partituras.

**O conserto (raiz, determinístico):**
1. `scripts/regencia-insumo.mjs` passa a levar, por cena, `arco_metafora`, `arco_tecnica` e
   `arco_midia_ancora` — este último já traz o `FALTA —` com query e destino, que é insumo direto do
   passo 5 (reabrir a pesquisa). Custo: insumo de 287 KB → 409 KB, indentado, legível por blocos.
2. `arco_cobertura` ganha `cenas_vivas_com_metafora`, `cenas_vivas_com_tecnica` e
   `cenas_vivas_com_nota_de_fluxo` — os números que se usam de verdade —, e o rodapé deixa de chamar
   id de "nota".
3. `scripts/_driver-regencia.mjs` aponta os três campos pelo nome no prompt, com os números lidos do
   insumo (nunca cravados), e diz em voz alta que **`arco_nota: null` não significa arco ausente**.

**A régua que fica, e ela é maior que esta estação:** *quando um montador de insumo abre o artefato
da estação anterior e extrai UM campo, pergunte o que ele fechou junto com a porta.* Descartar dado
não dá erro — dá um insumo plausível, do tamanho certo, que passa em todo gate. E o handoff entre
duas estações só existe onde alguém o transcreveu: **o artefato da anterior não chega à seguinte por
estar no disco.** Irmã da [PESQ-56] (declarar ausência sobre pasta cheia) pelo outro lado: aqui a
ausência é de PRESCRIÇÃO, e ela é ainda mais silenciosa, porque não há `find` que a denuncie.

---

### ARTE-297 · O agente MEDIU a disjunção, ESCREVEU a conta no comentário — e o gate reprovou os dois

**Medido em 21/ago/2026, `rosto-da-formiga`, estação de ARTE.** O `qc-clipe-repetido.mjs` acusou
**19 repetições**. Auditadas uma a uma, **18 eram trabalho já feito e não declarado**: o HTML trazia
a conta no topo, com os segundos exatos — a `s01` escrevia *"o card01 usa a janela 8.00->11.33s do
mesmo clipe; esta cena usa 0.15->2.21s. Janelas DISJUNTAS: nenhum quadro se repete entre as duas
cenas"*; o `card06` cravava *"janela 5,60→9,17s do clipe (16,534s) — disjunta da s52, que usa
1,60→3,73s"*; a `s03` abria a seção com *"janelas de clipe (disjuntas por porta, sempre para a
frente)"*. Nenhuma das três tinha o atributo.

**A raiz é uma frase FALSA na roupa do `editor-de-arte`**, e ela sobreviveu à criação do gate:
*"Nenhum gate automático pega footage repetido, ausente ou parado. Só o olho."* Lida ao pé da letra
— que é como um agente lê — ela manda escrever para o **olho humano**, em prosa, no cabeçalho. O
agente obedeceu, e obedecer custou 19 acusações. *Doutrina que descreve um gate inexistente produz
o trabalho certo no formato que ninguém consegue ler.*

**A distinção que o gate cobra, e que a prosa não substitui:** `data-qc-composicao` para o mesmo
arquivo **dentro** de uma cena (fundo desfocado da própria foto, camada fria + camada quente,
moldura + conteúdo — simultâneas); `data-qc-reuso` para o mesmo arquivo **entre** cenas, e este
**nas DUAS pontas**. O gate agrupa por md5, então pega também o mesmo arquivo sob **dois nomes** —
foi assim que apareceram `mosquito-na-pele-card.mp4` = `mosquito-sugando-pele-b.mp4` (card06 · s52)
e `acoplando-lente.mp4` = `lente-acoplada-ao-aparelho.mp4` (s75, duas vezes na mesma cena).

**A 19ª era defeito de verdade, e só apareceu porque as outras 18 saíram da frente:**
`pele-macro-textura.mp4` na `s75` usava 2,60→4,05s, dentro da janela da `s121` (1,20→7,86s).
Consertado movendo a janela para 8,30→9,75s — uma constante, zero inferência, disjunção real em vez
de declaração de conveniência. *Alarme falso não é ruído barato: ele esconde o alarme verdadeiro no
meio de dezoito iguais.*

**A régua que fica:** *comentário é para humano, atributo é para máquina — e quem tem gate escreve
os dois.* A prosa explica o porquê e sobrevive à leitura de quem for consertar a cena daqui a um
mês; o atributo prova ao gate. Escrever só a primeira é fazer o trabalho e não entregar o recibo.

**Achado lateral, mesma família:** o detector de âncora fantasma do `aplicar-ancoras-pesquisa.mjs`
extraía caminhos com `/_media\/[\w\-./]+/` — e o `.` da classe engolia a **pontuação final da
frase**. `_media/_PROCEDENCIA.json.` foi acusado de fantasma com o arquivo vivo no disco (68 KB).
Um de 166 caminhos. Corrigido aparando `[.,;:]+$`; provado dos dois lados (isca com caminho morto
continua acusada, o legítimo saiu do laudo). Irmã da [[ARTE-190]] pelo mesmo motivo: **falso
positivo em gate ensina a ignorar o gate.**

### ARTE-298 · O rVFC nunca dispara no Chrome de gate — e a cena SÃ de footage longo trava o render sem uma falha no laudo

**Medido em 21/ago/2026 em três projetos** (`uruguai-despovoado` s88 · `especies-humanas` n072 ·
`rosto-da-formiga` s03/s65/s109/s121). O `seekTo` da `ROUPA-CENA.md` §2-bis espera `seeked` e
**depois** o `requestVideoFrameCallback`, com um guarda de `setTimeout(fin, 2600)`. A doutrina
que criou esse molde (27/jul/2026) está certa sobre o render — o rVFC só dispara com um quadro de fato
APRESENTADO, e é por isso que ele curou o "vídeo indo e voltando". Só que a mesma virtude é a
armadilha: **num Chrome headless de gate, que não desenha porque ninguém pede screenshot, o
compositor nunca apresenta nada e o rVFC NÃO CHEGA.** Medido em 8 amostras: `seeked` = 285–537 ms
em **8/8**; rVFC = **~1 de 8**. Sem outro fim de linha, cada amostra paga os **2600 ms inteiros**.

**A conta que decide tudo é a DURAÇÃO da cena, não a máquina.** O custo unitário (~2,5 s/amostra) é
o mesmo em toda cena de footage da casa: a 0,2 s de passo, **~11 s de cena cabem no teto de 180 s**
do `qc-cena.mjs` e mais que isso não cabe. Acima do limiar a cena volta `[NÃO MEDIDO]` em colisão,
fora-do-quadro, crédito-fantasma e carga — e **desde 05/ago indefinido BARRA render**. Ou seja: a
cena está SÃ, o laudo sai com `falhas: []`, e mesmo assim ela trava o lote na VM **paga**.

⚠️ **E o teto ESTICA com a saturação (`tetoPara`), então a máquina OCIOSA é o pior caso.** Quem
mede com a VM cheia vê teto de 720 s, a cena passa, e ninguém descobre o defeito; quem mede com ela
livre vê 180 s e **culpa a cena**. O mesmo arquivo, no mesmo minuto, dá verde ou NÃO MEDIDO conforme
quem mais está usando a máquina — o que faz o defeito parecer intermitente quando é determinístico.

**O conserto, e por que ele é seguro:** o `seeked` continua a garantia dura e o rVFC vira
confirmação **com prazo** — `GRACA_RVFC = 300` armado dentro do handler de `seeked`, com
`clearTimeout` dos dois no `fin`; o guarda de 2600 ms fica de pé para quando o `seeked` não vier.
Quando o compositor ESTÁ desenhando, o rVFC chega 35–55 ms depois do `seeked`: 300 ms é ~6× a
latência real. **Não arrisca o render porque quem captura não confia nesta espera** —
`render/capturar.mjs` faz a própria (rVFC-ou-`seeked`, teto 400 ms) + 2 ciclos de composição +
`RENDER_SETTLE_MS` 350 ms, e o `shot.mjs` espera os mesmos 350 ms. Os 2600 ms só seguravam gate.
Medido: s88 **208,3 s → 51,7 s**; `rosto-da-formiga` s03 **`Terminated` (>120 s) → ✓ verde em 42,6 s**.

**É defeito de MOLDE, não de cena — e o lugar de curar é o gerador.** Consertar HTML a HTML é enxugar
gelo: eram 22 cenas no `uruguai-despovoado` e **35 de 73** no `rosto-da-formiga`. A raiz foi curada na
`ROUPA-CENA.md` §2-bis (toda cena nova nasce com o prazo) e o passivo tem ferramenta:
`node scripts/qc-graca-rvfc.mjs <proj> --aplicar`.

⛔ **A trava que a ferramenta encarna, e que vale para QUALQUER conserto em massa de HTML: o carimbo
do `_portao.json` é ancorado no HASH.** Tocar num arquivo com carimbo VERDE invalida a medição —
que é medição paga e provada — e a troca por uma re-medição incerta é prejuízo, não ganho. Por isso
o padrão do script é **só cena `ok:false`**: essas serão re-medidas de qualquer jeito, então o
conserto é grátis. No `rosto-da-formiga` isso separou 4 de 35: **31 cenas verdes ficaram intocadas**,
inclusive 13 acima do limiar que passaram por folga de teto. *Consertar o que não está reprovando
não é zelo — é destruir prova para refazê-la.*

**A régua que fica:** *gate que não fecha não é cena que falhou.* Antes de despachar agente para
consertar arte por causa de um `[NÃO MEDIDO]`, meça a cena isolada — nas cinco vezes registradas
aqui ela estava sã, e o custo de acreditar no laudo teria sido cota criativa gasta em arte correta.
Irmã da [[ARTE-190]] e da [[ARTE-297]] pela mesma família: **o defeito estava no instrumento, e o
instrumento acusava o trabalho.**

**ARTE-299.** O PROMPT DA DIREÇÃO PRECISA CARREGAR OS ALERTAS DA PESQUISA — SEMENTE VEM DA FALA, E A
   FALA ERRA (medido no `tunel-trem-bala-japao`, 20/ago/2026). O `direcao-prompt.mjs` montava a cena
   a partir do espelho e **só** dele: título, tese, word-lock, needs, acervo. A `tese` do montador é
   escrita a partir da NARRAÇÃO, e quem foi às fontes foi a pesquisa — que neste vídeo devolveu **21
   cenas com divergência declarada**, 6 delas endereçadas à arte com todas as letras no campo
   `alertas_de_desenho`. O prompt do lote 1 saía com **zero**. O que ia ao Fable como fato:
   `s03` mandava a agulha despencar de 320 para 160 (o par real é 260→160; os 320 são de OUTRA
   linha, centenas de km ao sul), `s16` pedia “40% das batatas produzidas em Hokkaido” (erra por
   fator SEIS na base que a fala usa) e `s54` pedia 20 silhuetas da Torre Eiffel para um
   multiplicador que nenhuma das duas bases produz (23 pela estrutura, 17 pelo monumento).
   • **Por que na DIREÇÃO e não no QC:** é aqui que a metáfora nasce. Arco que prescreve “velocímetro
     despencando de 320 para 160” é executado com fidelidade pelo `editor-de-arte` — obediência é a
     virtude dele —, passa em TODOS os gates de cena, que medem colisão, carga, contraste e word-lock
     e **nunca aritmética**, e só cai quando alguém com régua assiste ao vídeo pronto. Uma linha de
     prompt aqui contra uma cena refeita lá.
   • **A quantidade desenhada É uma afirmação numérica.** Silhueta, ícone repetido, fila de caminhão,
     ponto de série: o espectador CONTA. `s53` só fecha com carreta de 29 t (com caminhão pequeno
     seriam ~400) e `s83` tem 3 pontos publicados — inventar intermediários com cara de medição é
     fabricar dado com a mão do desenho.
   • **A régua geral, que vale para qualquer gerador de prompt desta casa:** quando dois artefatos da
     mesma produção falam da mesma cena e só um deles chega ao agente, o que fica de fora vira erro
     silencioso — e o campo `divergencia` existir no disco não serve de nada se ninguém o lê. A
     conciliação é do gerador, não do modelo. Conserto na fonte: `direcao-prompt.mjs` lê o glob
     `_pesquisa/pauta-*.json` (com o arquivo único LEGADO como plano B) e emite, por cena, o bloco
     **⚠️ A PESQUISA DIVERGE** com `divergencia_com_a_narracao`, `divergencia`, `alertas_de_desenho`,
     `divergencias_para_o_editor_chefe` e `nao_encontrados` — este último porque número sem fonte
     não pode ir à tela. Defensivo: pauta ausente ou campo “nenhuma” não geram seção, e só entra
     STRING (o `bloqueio` de documento é objeto e viraria `[object Object]`, que é ruído com cara
     de instrução).

### ARTE-300 · A guarda do dossiê cobria o VENCIDO e deixava passar o AUSENTE — e ausente é o estado normal de toda produção nova

**Medido em 22/ago/2026, na abertura da estação ARTE do `ultimo-dia-dinossauros`: `_brief-arte/`
VAZIO, 0 arquivos, com 89 cenas já despachadas em quatro faixas.** Nenhum aviso, nenhum erro,
exit 0 nos quatro logs.

O `desenhar-cenas.mjs` monta o prompt em DOIS ramos: `if (temBrief(s))` manda o agente tratar o
dossiê como fonte única — *"NÃO reabra `espelho.json`, `conceito-visual.json`, `words*.json` nem as
pautas — o dossiê é a fonte, e remontá-lo de cabeça é como nascem os erros de conjunto"*. Sem
dossiê, cada cena cai no outro ramo e o agente monta de cabeça exatamente o que a [ARTE-297] e a
própria [ARTE-167] existem para impedir.

**O mecanismo é uma linha, e ele é o oposto do que parece.** A guarda `garantirDossiesFrescos()`
nasceu (18/ago) contra o dossiê VENCIDO — instantâneo mais velho que o espelho. O filtro era:

```js
const vencidos = pendentes.filter((s) => { const m = mtime(briefDe(s)); return m && m < fonte; });
```

`mtime()` devolve **0** para arquivo que não existe, e `m &&` descarta o zero. Ou seja: **a única
função que gera dossiê no projeto inteiro ignorava precisamente as cenas que não tinham dossiê
nenhum.** Ela sabia consertar o instantâneo velho e tratava "instantâneo nenhum" como estado
saudável. E como ela é a única geradora (`grep -n garantirDossiesFrescos` devolve a definição e uma
chamada), o estado inicial de QUALQUER produção — pasta vazia — era o caso que ela não cobria.

**O que estava em jogo neste vídeo, concretamente:** o dossiê é onde o word-lock se decide, e aqui
havia **três** candidatos que abrem sem erro e devolvem texto plausível — `words.json` (0,08→2085 s),
`words-limpo.json` (23,2→2079 s) e `words-final.json` (0,24→1102 s). O gerado carimba
`words-final` contra o espelho de 1103 s e **descarta os outros dois por escrito**, mais os 4
degraus de −3,00 s dos cards. Sem ele, 89 agentes escolheriam o relógio sozinhos, e o erro só
apareceria no 4K, depois de gasta a cota — que é o modo de falha da [ARTE-183]. As mães de run
fundido (19 runs neste projeto) perderiam junto a janela pós-fusão.

**O conserto:** ausente e vencido viram o mesmo caso, com a régua de validade do próprio
`temBrief()` (existe **e** > 500 bytes), para as duas não divergirem como já divergiram — e o log
diz QUAL é qual, porque "N dossiês mais VELHOS que o espelho" impresso sobre uma pasta vazia é um
log que mente. Prova nas três pontas: 97 dossiês frescos → 0 em ambos os filtros (não regrediu);
3 ids inexistentes → antigo **0**, novo **3**; dossiê tocado para antes da fonte → **1** em ambos
(o caso original preservado).

**A régua que fica, e ela é maior que este script:** *toda guarda escrita contra "o artefato está
velho" precisa responder também "e se não houver artefato?" — e a resposta quase nunca é "então
está tudo bem".* Zero não é um valor pequeno de mtime: é a ausência disfarçada de número, e num
teste de verdade ela some. É a mesma família do `qc-carga` que mede zero de zero e reporta 100%, e
do `lote-render.sh` que imprimia `0 arquivos · ✓ nenhuma cena barrada`. Irmã da [[ARTE-167]] (que
criou o insumo) e da [[ARTE-190]] (o gate que só lia a primeira parada do gradiente): **cobertura
parcial de um gate não é meia proteção — é proteção nenhuma no caso que ninguém mediu.**

---

### ARTE-301 · Mídia no DOM e fora da janela: o elemento que o espectador NÃO vê é o que o gate vê

**Medido em 22/ago/2026, na estação ARTE do `especies-humanas`, aberta com a nota "clipe repetido
sem declaração".** O `qc-clipe-repetido` acusava **20 repetições**. Depois de julgar uma a uma:
**8 eram mídia que nunca aparece na tela** — e, entre elas, as DUAS de distância mais curta do
laudo (8s e 6s), isto é, exatamente as que mais pareciam graves.

O gate conta a **TAG**, não o pixel. E o padrão apareceu em três cenas com origens diferentes:

| cena | como ficou invisível | de onde veio |
|---|---|---|
| `s15` | rampas de alfa em t=11,30 e t=14,25, numa cena de **11,08s** | decupagem encurtou a janela; o `kb()` ainda citava t=24,40 |
| `s06` | `p1=0` e `p2=0` — **constantes literais**, não rampas | as provas migraram para `n015`/`n016` |
| `s16` | `opacity:0` no CSS e nenhuma ativação no `draw()` | re-espelho cortou a cena de 44,12s para 4,20s |

**A cura NÃO é uma só, e é isso que esta lei existe para separar.** Nas duas primeiras o elemento
era lixo — coreografia órfã e prova que mudou de cena —, e o certo foi **REMOVER** (provado por
frame: `s15` saiu idêntica em t=1,0/5,0/8,0; `s06` ficou a 62 dB de PSNR, arredondamento de
composição, sem um objeto alterado). Na `s16` o autor escreveu no cabeçalho que o DOM foi
*"PRESERVADO intacto... se a janela voltar a crescer, a arte está aqui, não precisa ser refeita"* —
apagar ali seria violar a regra de ouro da casa, que manda não descartar artefato pago. Para esse
caso nasceu o `data-qc-inativo="<motivo>"`: o elemento fica, o gate para de contá-lo como uso, e o
rodapé **lista** os inativos, porque cada `<video preload="auto">` invisível é um 4K decodificado
à toa em todo render.

**O QUE TORNA ISTO CARO NÃO É O ALARME FALSO — É A CURA QUE ELE INDUZ.** A reação natural a "clipe
repetido" é escrever `data-qc-reuso` explicando a costura. Feito sobre mídia invisível, isso
**assina uma continuidade que não existe**, e a mentira fica no HTML para sempre. A `s15` já tinha
uma: um `data-qc-reuso` de "costura deliberada com o card s14" num `<video>` cujo alfa máximo,
medido de centésimo em centésimo, era **0,0000**.

**Régua:** antes de declarar reuso, **prove que a mídia acende**. Alfa máximo por varredura do
tempo é barato e definitivo; `p=0` literal se lê no código. Só então pergunte se é costura.
E o inverso vale para quem escreve cena: **elemento zerado é mais caro que elemento removido** —
ele não aparece para o espectador e aparece para todos os gates.

Irmã da [[ARTE-108]] (que define repetição × composição) e da [[ARTE-148]] (que obriga declarar nas
duas pontas). Da mesma família do `.tmp-probe-s06.html`: um rascunho oculto em `graphics/`, contado
como cena, inflava seis achados **e apagava a distância real dos verdadeiros** — o laudo dizia
"posição desconhecida" onde a resposta era 8 segundos. *Ruído em gate não é só ruído: ele esconde o
sinal no meio dele.*
### ARTE-302 · O gate lia o ZOOM do rótulo como pressa — e o px do font-size era a terceira porta da mesma família

**Medido em 22/ago/2026, `viagem-no-tempo`, estação de ARTE.** O `qc-carga` reprovou a `s30` com três
falhas: *"RITMO 1,08 entradas/s"*, *"11 entradas na janela de 1 s @12,4s"* e *"VIDA: 17 blocos de texto
abaixo de 0,5 s — «600 m»=0,1s"* (quatro vezes o mesmo texto). **A cena não tinha nenhum defeito.** Há
UM elemento `600 m` no HTML, e uma sonda amostrando de 0,1 em 0,1 s provou que ele fica no ar
**11,9 s ininterruptos**, com opacidade que nunca zera. O frame em 12,8 s mostra **um** rótulo.

**A causa era a chave de identidade do texto:** `"T|" + txt_mascarado + "|" + Math.round(fontSize)`. O
rótulo **escala junto com a câmera** (150→104 px durante o recuo de 11,6→14,2 s), e o px arredondado
assumiu **19 valores distintos** — 19 chaves para um bloco só. Os números da reprova são exatamente
esses: 19 chaves − 2 de vida longa = **17 "piscando"**; e de 12,4→13,4 s a varredura passa por **11**
valores = a "pior janela de 1 s". *A métrica não estava medindo a carga da tela: estava medindo a
técnica de desenho.*

**É a TERCEIRA porta da mesma família, e as duas primeiras já estavam escritas no cabeçalho do próprio
gate:** id de DOM (a cena de mapa recria os `<text>` a cada frame → 90 entradas/s), string crua (o
count-up muda de dígito a cada frame). O px é a mesma doença no terceiro campo — e ninguém a viu
porque o tamanho entrou na chave por um motivo LEGÍTIMO: separar hierarquia (o mesmo "2024" como herói
de 400 px e como rótulo de 60 px são dois blocos). *Quando um campo entra na chave por um bom motivo,
ele deixa de ser suspeito — e é aí que ele passa a mentir.*

**O conserto é a BANDA LOGARÍTMICA** (`Math.round(Math.log2(fs))`), que atende os dois lados: absorve a
animação de escala (150 e 104 caem na mesma oitava) e continua separando hierarquia de verdade (104 e
400 caem em bandas 7 e 9). Provado nas duas pontas, que é o que esta casa exige de conserto de gate:
**61 cenas do disco → 0 reprovas** (antes 1, a falsa), e **duas iscas de defeito REAL continuam
reprovando** — texto de vida genuinamente curta ("DADO ILEGIVEL"=0,3 s, e ele escala igual à `s30`,
para provar que a banda não cega a lente) e seis estreias empilhadas num segundo. A `s30` saiu de
1,08 para 0,15 entradas/s e de 0,1 s para 3,2 s de vida mínima — números que batem com os 3 rótulos
que o frame mostra.

**Achado de alcance, e ele é maior que a reprova:** outras **4 cenas** (`s06`, `s23`, `s37`, `s59`)
também estavam contaminadas, só que abaixo do teto — 5 de 61 no total. Elas nunca teriam gerado
alarme, e por isso o defeito podia durar indefinidamente: *falso positivo só é descoberto quando
cruza o teto; abaixo dele, ele apenas envenena a métrica em silêncio.*

Irmã da [[ARTE-190]] e da [[ARTE-297]] pela mesma família — **o defeito estava no instrumento, e o
alarme falso ensina a ignorar o gate.** Aqui o custo seria pior que ignorar: a cena reprovada ia para
a fila de conserto, e um agente gastaria a cota mais cara da casa refazendo um rótulo que estava certo.

### ARTE-303 · O marcador de PENDÊNCIA contava como mídia — o instrumento de declarar a ausência era o que apagava a declaração dela

**Medido em 22/ago/2026, `viagem-no-tempo`, `s70-publi-netshoes-loja-da-selecao`.** A pesquisa não
conseguiu as fotos de produto (a `netshoes.com.br` devolve **403 em quatro rotas independentes** —
antibot de borda, não ausência de catálogo) e fez tudo certo: deixou em `_media/foto/s70/` o arquivo
`_PENDENTE.md`, escrito com motivo, o que foi tentado, o que destrava e a frase *"NÃO É 'a caça rodou
e não achou'"*. **O brief de arte transformou isso numa linha de inventário:**
`` - `_media/foto/s70/_PENDENTE.md`  (0.0 MB) `` sob o título **MÍDIA REAL NO DISCO**, com o alarme de
procedência ao lado, mandando o agente se preocupar com o crédito de um arquivo de texto.

**O mecanismo:** o `_brief-arte.mjs` decide o bloqueio por `todas.length ? listar : (dependeDeMidiaReal
? BLOQUEADA : …)`. O marcador entrou na contagem, `todas.length` virou 1, e **o ramo que emite
"BLOQUEADA por falta de mídia" nunca foi alcançado**. Como o `desenhar-cenas.mjs` só reconhece bloqueio
*"quando o dossiê disser, com essas palavras"*, a cena seguiria para o Opus como se tivesse mídia.

**E o segundo silêncio, empilhado sobre o primeiro:** os outros 4 arquivos eram a **LOGO** da marca,
herdados por reuso declarado. Logo não é produto. A conta "4 arquivos ✓" numa publi de camisa é
exatamente a armadilha que o diário deste projeto já havia registrado em 18/ago — *"minha primeira
contagem deu 's70 = 4 arquivos ✓'; os 4 são a logo; fotos de produto entregues: ZERO"*. **O mesmo erro
foi cometido duas vezes no mesmo vídeo, por duas ferramentas diferentes, com quatro dias de intervalo.**

O que estava em jogo não era uma cena morna: é **publi contratada**, e as saídas que um agente sem
aviso tomaria — desenhar a camisa à mão, usar print de loja ([PESQ-22] proíbe) ou pôr foto de terceiro
sobre produto de parceiro — são todas piores que entregar a cena vazia.

**A régua que fica: _existir não é ser arquivo_ (já estava escrita 12 linhas acima, [ARTE-212]) tem um
degrau seguinte — _ser arquivo não é ser mídia_.** E mais: **declaração vence inventário.** O conserto
tira `.md`/`.txt` da contagem de mídia e **eleva o marcador ao topo da seção**, com as palavras que o
despachante cobra, o texto integral que a pesquisa escreveu, e o aviso de que o que sobrou listado
**não substitui o que falta**. O marcador vence a contagem por um motivo simples: *quem declarou a
falta olhou a cena; quem conta arquivo só sabe somar.*

**Alcance medido, sem inflar: 1 marcador `_PENDENTE.md` em toda a produção — e era o silenciado.** A
convenção falhou na primeira vez que foi usada, e teria falhado em todas as seguintes. *Capacidade
nova que ninguém consumiu não dá erro: ela só não faz efeito, e quem a escreveu vai embora achando
que entregou o aviso.*

---

### ARTE-304 · A colisão que o gate acusa pode não existir na TELA: quem se toca é a CAIXA, e o padding é o culpado mais comum

**Medido em 22/ago/2026, `piramide-porta-secreta`, `s18-largo-demais-para-os-corredores`.** O
`check-overlap` reprovou o par `"97,8 cm" ✕ "O CAIXÃO É MAIS LARGO QUE…"` com **1234px² em
t=5.2–6.8s**. Abri o frame: **nada se toca.** O rótulo âmbar da cota está acima, o bloco branco
abaixo, com folga confortável entre os dois. A cena está certa e o gate também.

**O mecanismo, medido com o Chrome em vez de estimado:** `#cotaCx` ocupa **1428→1529** (top 1428 +
101px de `line-height:normal` sobre `font-size:84px` — a `.cota` não declara line-height). `#rotulo`
tem `top:1500px` e **`padding:52px 150px 56px 0`**. O texto dele começa em 1552, longe de tudo — mas
a **caixa** começa em 1500, ou seja, **29px dentro da cota**. O gate mede bounding-box de elemento
visível, e o padding é parte da caixa. *O autor compôs olhando o texto; o gate mede o elemento.*

**Por que isso não é preciosismo de gate:** pela [SIS-64] o portão (`qc-cena.mjs`) roda o
`check-overlap` por hash e o render **PULA PARA SEMPRE** a cena reprovada. Uma cena impecável trava o
render por uma sobreposição que ninguém consegue ver no frame — e quem for consertar vai procurar no
lugar errado, porque o frame não mostra defeito nenhum.

**⛔ E o conserto óbvio é o errado.** Mover o texto (descer o rótulo, subir a cota) resolve o número e
**estraga a composição que o autor escolheu** — aqui a cota estava a 41px da base do desenho do caixão
e o bloco branco a 62px do crédito; havia pouco para onde ir sem encostar noutra coisa. O conserto
certo move a **CAIXA** e devolve o mesmo tanto em padding, deixando o texto no MESMO pixel:
`top:1500px; padding:52px …` → **`top:1542px; padding:10px …`** (a caixa desce 42px, o texto continua
nascendo em 1552). Resultado: 13px de folga, `✓ SEM colisões`, e **zero deslocamento visual**.

**A régua:** diante de colisão que o frame desmente, **meça as caixas antes de mover qualquer coisa**
(`getBoundingClientRect` no instante que o gate aponta) e pergunte *quanto da caixa é padding?*. Se a
sobreposição couber dentro do padding, o defeito é geometria e o conserto não deve mudar um pixel do
que se vê. Se o texto de fato se toca, aí sim é composição — e aí sim é decisão de arte.

**O contraste, na mesma varredura e no mesmo dia:** a `s85-o-palco-em-2025` também reprovou, com
**18.743px²**, e essa era real e feia — a folha de crédito corria até x=2913 sem `max-width` e
**atravessava** o card `SAQQARA · 2023` (x 2505–3539), os dois ilegíveis no cruzamento. Ali o conserto
é de verdade (teto de largura em `.cred`, quebra em duas linhas). *E note qual conserto foi recusado:
encolher a fonte para caber — o cabeçalho da própria cena declara 72px como **piso** de legibilidade.
Crédito que ninguém lê não cumpre a cláusula BY; ele só finge que cumpre.* Duas reprovações do mesmo
gate, na mesma varredura, com diagnósticos opostos: **a área acusada não diz qual dos dois você tem.**

⚠️ **E o lote que os encontrou quase não os encontrou.** A primeira passada rodou com `timeout 90` e
`-P 6` enquanto dois agentes de arte trabalhavam na mesma máquina: **20 dos 82 arquivos foram medidos**
e 62 morreram no SIGTERM sem deixar linha, e o relatório imprimiu cabeçalho de sucesso mesmo assim.
Gate em lote precisa classificar cada item em **OK / ACHADO / NÃO MEDIDO** e imprimir os três — silêncio
por timeout é indistinguível de aprovação, e "82 de 82" era mentira sobre 62 arquivos que nem abriram.

---

### ARTE-305 · A âncora "construída" é uma AFIRMAÇÃO COM DATA — o passe de reconciliação só cura `FALTA`, e a mídia que a regência pediu depois envelhece ociosa no disco

Medido em **22/ago/2026**, `viagem-no-tempo`, cena **`s26-o-muon`** — cuja fala é, literalmente,
*"A primeira prova vem de uma partícula minúscula chamada múon."*

O `conceito-visual` do diretor prescreveu `midia_ancora: "construída"` e, na técnica, *"Fundo navy
VIVO, zero texto além do nome"*. **Depois**, a REGÊNCIA exigiu no beat 0–2,97 s: *"REGISTRO REAL de
rastros de partícula em câmara de nuvem: os riscos brancos de condensação sobre o preto, fotografia
de verdade. ENTREGUE E NO DISCO (21/ago) — `_media/foto/s26/`, 4 arquivos"* — e mandou **o mesmo
gesto** do diretor (dolly-in por push-in digital, os 5760 px dando 1,5× de folga sobre o palco 4K).
O `pesquisa-imagens` entregou os quatro arquivos, **CC BY-SA 4.0, atribuição obrigatória**.

O dossiê de arte trouxe TUDO: os quatro caminhos e, em cada um, o aviso em negrito
*"⚠️ EXIGE CRÉDITO NA TELA — cláusula BY; sem ela o uso NÃO está licenciado"*. E trouxe, nove linhas
acima, `Mídia âncora (o diretor): construída`. **A âncora venceu o inventário**: o agente escreveu no
cabeçalho *"Cena construída — nenhuma mídia real usada, logo sem crédito"* e fechou a cena com **zero
`<video>`/`<img>`** — a fagulha âmbar sobre navy, e a fotografia da prova parada no disco.

⛔ **E nenhum gate acusa, por construção.** A lente de cobertura cobra "a coisa nomeada aparece em
imagem real" de quem PEDE mídia; quem se declarou construído sai da conta. O `qc-procedencia` deu
**PASS** (a mídia tem procedência provada — ela só não está na tela). E o próprio
`aplicar-ancoras-pesquisa.mjs` rodou neste projeto e imprimiu `promovidas FALTA→asset: 0 · seguem
FALTA: 0` — **um verde perfeito sobre uma cena descoberta**, porque ele só sabe curar `FALTA`
([ARTE-94 §2]) e `construída` não é `FALTA`.

**A raiz não é o agente que desenhou — é o que a âncora RESPONDE.** `construída` responde *"a pesquisa
precisa comprar alguma coisa?"*. Ela **não** responde *"existe registro real do que esta cena afirma?"*.
São perguntas diferentes, feitas em momentos diferentes por autores diferentes, e a segunda é a que a
[ARTE-38] cobra. Quando a regência exige REGISTRO REAL num beat e o arquivo já está no `_media/`, a
âncora não está satisfeita: está **VENCIDA**.

✅ **A régua, antes de desenhar qualquer cena "construída":** cruze a `regencia.json` daquele beat com
o `_media/` da cena. Se a regência pede real **e** o arquivo existe, a âncora perdeu a validade — e o
conserto **não é reinventar a metáfora**, é atravessá-la pelo registro real ([ARTE-38]: o desenho
explica, o real prova; [ARTE-36]: mídia real + scrim, nunca navy chapado). Na `s26` as duas direções
nunca se contradisseram no gesto — ambas pedem dolly-in por anéis até a fagulha batizada; divergiam só
no que se atravessa. Conserto aplicado: `midia_ancora` corrigida (**exatamente um campo**, o resto do
conceito byte a byte igual) e a cena redesenhada na faixa de invenção.

⚠️ **E o custo de não ver isto é maior que uma cena morna:** mídia sob cláusula BY baixada e **nunca
creditada** porque nunca entrou na tela é trabalho de pesquisa jogado fora — e teria virado risco de
licença se tivesse entrado sem o crédito que o dossiê já mandava escrever.

---

### ARTE-306 · O carimbo do portão é o veredito, não a medição — e um `ok:false` nascido de lote saturado tem HASH VÁLIDO, logo ninguém o descarta

Medido em **22/ago/2026**, `viagem-no-tempo`, cena **`s30-600-metros-contra-15-quilometros`**. O mesmo
arquivo, byte a byte (hash `d0c1e26b8692` nas duas leituras), mediu coisas incompatíveis:

| quando | como | ritmo medido (teto 0.9) | carimbo |
|---|---|---|---|
| 16:11:50Z | dentro do lote do despacho, VM disputada | **1.08 entradas/s** — ✗ REPROVA | `ok:false · falhas:['carga']` |
| 20:17Z | isolada, um Chrome só | **0.15 entradas/s** — 6× abaixo do teto, 195/195 amostras válidas | `ok:true` |

Que gate em lote mede errado já se sabia por duas vias — o gotcha do `CLAUDE.md` (o lote submede cena
com mídia, porque não espera `__fotosProntas`) e a observação final da [ARTE-304] (lote sob `-P 6` com
agentes na mesma máquina mediu 20 de 82 arquivos e imprimiu cabeçalho de sucesso). **As duas falam da
MEDIÇÃO. Esta lei é sobre o que sobra dela.** O veredito falso não some quando a máquina esvazia: fica
GRAVADO no `_portao.json`, e o `_render-4k-loop.sh` confere o portão por hash **sem remedir**. A cena
estava certa desde as 16:08 e teria sido barrada no render indefinidamente.

⛔ **A régua de invalidação é o hash, e o hash está CORRETO — por isso o carimbo falso é indestrutível
pela via normal.** O `qc-cena` descarta carimbo quando o HTML mudou; aqui o HTML não mudou. Nada no
registro diz *sob que carga aquela medição foi feita*, então "reprovada por carga" e "medida enquanto
98 Chromes disputavam 16 vCPUs" são a MESMA linha de JSON. Quem lê o portão para decidir o que
consertar despacha arte contra uma cena correta — na cota de Fable, que é a mais escassa da casa.

⚠️ **A ponta gêmea é o silêncio, e ela mordeu a `s111` no mesmo projeto.** Lá o carimbo era
`indefinidos:['carga']` (NÃO MEDIDO — o passo padrão trava em footage 4K). Uma passada anterior mediu
a cena isolada com `--passo=0.5`, deu verde, **e não regravou o carimbo**: registrou o resultado só na
prosa do diário. Para o render, medição que não vira carimbo **não aconteceu** — a cena seguiu barrada
por um gate que já tinha respondido. `ok:false` e `indefinidos:[…]` barram exatamente igual.

✅ **As três linhas que fecham isto, e todas são baratas:**
1. Ao abrir ou fechar a estação, leia o portão inteiro e trate `ok:false` **e** `indefinidos` como
   pendências, não só o segundo — `85 carimbadas` não é `85 ok`.
2. Antes de crer numa reprovação de `carga`/`overlap`/`quadro` vinda de lote, **re-meça isolada** —
   custa um Chrome e alguns segundos, contra uma cena redesenhada à toa.
3. Medição feita à mão **só existe se regravar o carimbo**: rode o `qc-cena` na cena (com `--passo=0.5`
   quando houver footage 4K ou terreno), nunca só o gate solto. O `qc-cena` aceita `--passo`, ainda que
   a linha de uso curta não o anuncie — ele o repassa aos quatro gates de varredura, cada um na
   sintaxe que fala.
4. **E carimbo corrigido fora de despacho tem de ser PUBLICADO na mão.** Quem sobe o `_portao.json` ao
   bucket é o `desenhar-cenas.mjs`, uma vez, no fim da estação (`desenhar-cenas.mjs:931-938`, sob o
   comentário *"verificação feita e não publicada é verificação que vai ser refeita"*). Corrigir dois
   carimbos depois que o último driver morreu deixou o disco com **85 ok** e o bucket com **83** — e é o
   bucket que a VM de render lê. O remédio é uma linha:
   `gcloud storage cp out/<proj>/_portao.json gs://geracao-animacoes-prod-renders/out/<proj>/_portao.json`,
   provada relendo o DESTINO. *A lei inteira é a mesma ideia em três degraus: medir não é carimbar,
   carimbar não é publicar, e só o último degrau chega à máquina que gasta a hora.*

### ARTE-307 · Em marcha lateral, o card que ENTRA não pode nascer no ponto de onde o que SAI parte — e a folga se mede na régua do OLHO, não no `opMin` do gate (26/ago/2026)

Medido em **26/ago/2026**, `sol-artificial-fusao`, cena **`s65-tokamak-palavra-russa`** (faixa
composição, Opus). A cena é uma marcha histórica de três cards — 1958 → 1967 → 1979 — em que cada
peça nova chega grande pela direita e empurra as anteriores. O card `1979` nascia **parado em
x=2110**, que é exatamente o ponto de onde o `1967` parte, **no mesmo instante** (t=10,08). Os dois se
cruzavam por ~0,3s e a tela lia **`1967979`**.

Foi a única das 56 cenas reprovada no portão, e ficou **órfã**: nasceu com
`estado:"nasceu-reprovando"` no `_arte-diario.jsonl`, tem HTML no disco (então o
`desenhar-cenas.mjs --listar` não a devolve, porque ele lista cena SEM HTML) e tem carimbo
`ok:false` (então o render a pula). **Nenhuma fila a recupera.** Cena que nasce reprovando não é
"cena pendente" nem "cena pronta" — é um terceiro estado que o sistema não tem verbo para nomear.

⛔ **E A ARMADILHA QUE CUSTOU A PRIMEIRA TENTATIVA: consertar mirando o limiar do gate produz VERDE
FALSO.** O `check-overlap` só considera texto com opacidade efetiva acima de `opMin=0,55`. O primeiro
conserto deslizou o `1979` de x=2430 e alongou o fade para 1,35s, de modo que ele só cruzasse 0,55
depois de o `1967` vazar. **O gate ficou verde com passo 0,05** — 4× mais amostras que o padrão — e o
frame em t=10,30 **ainda mostrava `1967979` colado**, com o `1979` a 41% de opacidade. A 41% o olho lê
o número inteiro, sem esforço.

| régua | limiar | veredito em t=10,30 |
|---|---|---|
| gate (`check-overlap`) | op > 0,55 | ✓ sem colisão |
| olho (o frame) | op > ~0,08 | ✗ `1967979` |

*Um gate que ignora quem está abaixo do seu limiar não está errado — ele está medindo outra coisa.*
A colisão durante FADE-IN é o ponto cego, e ele é estrutural: todo texto que entra passa por toda a
faixa de opacidade entre 0 e 1.

**A régua, nesta ordem:**
1. Em coreografia de marcha, **o que entra e o que sai não compartilham origem no mesmo instante**.
   Separe em TEMPO (o que entra espera o que sai vazar) antes de tentar separar em ESPAÇO — o espaço
   costuma não existir, porque o rótulo largo do card impede nascer mais à direita sem estourar o
   palco. Aqui: entrada adiada de 10,08 para 10,42, quando a tinta do `1967` já passara de x=2430.
2. **Meça a caixa da TINTA, não a do layout.** `.ano` é um bloco dentro de um `.cap` shrink-to-fit:
   herda a largura do `.rot` e mede 1538px onde o glifo ocupa 523px. `Range.getClientRects()` é a
   régua — a mesma que o gate usa por dentro.
3. **Valide com o limiar do olho e OLHE O FRAME.** Verde de gate não é folga. A folga tem de valer em
   todo instante em que o texto é perceptível.
4. Atrasar entrada só é livre quando **nenhuma palavra nomeia o elemento**: aqui a fala diz "anos"
   (10,08) e "1950." (10,68), e nada diz *1979* — a âncora do card é de RITMO, não word-lock. Com
   word-lock literal, mexa no que entra ANTES, nunca no ancorado.

Custo do conserto: zero token de agente (é geometria, não criação — a skill `layout-texto-deterministico`
é explícita: *"reposicionar, respeitar safe area ou reduzir até um mínimo previamente declarado é
ferramenta, não criação"*). A composição final saiu byte-a-byte como o Fable a desenhou: o destino
segue x=2110, e os três cards no estado final ocupam [250..575], [1000..1387] e [2110..2630] como
antes. Publicado no bucket na mão, pela [ARTE-306].

### ARTE-308 · A bancada não reprova cena pelo que a FINALIZAÇÃO compõe depois — o fundo do card de membros é fundo por contrato (05/set/2026)

Medido em **05/set/2026**, `itaipu-afogou`, cena **`s99-card-membros-e-fecho`** — a única das 77 que
faltava renderizar, segurando o vídeo inteiro. O laudo reprovava com `espaco:6`, `wordlock:2` e
`abordagem:3`, e o motivo escrito era verdadeiro: *"o card não aparece em nenhum dos 7 frames
amostrados"*. Aparecer ali é que seria o defeito.

O card é um `.mov` 4K com alpha que `scripts/xml-composto-membros.mjs` deita sobre o composto final, e
ele vem do **resolvedor** (`assets/clube-membros/cards/`), nunca da pasta do projeto — exatamente para
que reusar lista velha seja impossível ([FIN-12]). Uma cena que desenhasse os nomes no próprio HTML
**congelaria** a lista daquele dia. A ausência é o projeto, e a cena a declarava duas vezes: no
comentário de contrato documental e no atributo `data-qc-sem-heroi`, o mesmo marcador que o gate
determinístico `qc-tamanho.mjs` já honra desde que existe.

A bancada ignorou porque a doutrina dela nunca falou do caso: `cerebro/agentes/qc-visual/OFICIO.md`
tinha **zero** ocorrências de "overlay", "POS" ou "FIN-12". A reprova não foi julgamento, foi ponto
cego — e de um tipo que não expira: **ela reprovaria o card de fecho de todo vídeo do canal, para
sempre**, porque a condição nunca muda. Alarme falso que não expira não é ruído, é uma produção parada
em regime permanente.

⛔ **A armadilha que custou a primeira tentativa: o conserto foi para o arquivo derivado.** Editei
`.claude/agents/qc-visual.md` — que é a cópia que o Claude Code lê — e a bancada não lê esse arquivo:
ela compila o prompt de `cerebro/agentes/qc-visual/{OFICIO,CONTRATO}.md` via `compilarPromptBundle`.
Re-julgar dali teria devolvido a MESMA reprova com o MESMO motivo, e a conclusão natural seria *"a
bancada realmente discorda"* — o erro se disfarçando de segunda opinião. **Antes de acreditar num
conserto de doutrina, imprima o bundle e confira se o texto está lá dentro:**

```
node -e "import('./scripts/lib/prompt-bundle.mjs').then(m=>console.log(
  m.compilarPromptBundle({agent:'qc-visual',brand:'top10'}).system.includes('<trecho novo>')))"
```

**A regra.** Existe cena deliberadamente incompleta na bancada, e certa assim: o elemento que a
completa é composto depois, na finalização, a partir de artefato resolvido fora da produção. Julgue o
fundo **como fundo** — o registro é real, sustenta contraste para o overlay, o movimento se mantém
discreto? Isso reprova legitimamente. **Nunca reprove pela ausência da camada que chega no POS**, em
lente nenhuma: não é falha de espaço, de wordlock, de abordagem nem de cobertura. A reprova de verdade
é a declaração **falsa** — a cena diz que um overlay externo a completa e nada compõe esse overlay —, e
aí o ônus é nomear quem deveria compor e mostrar que não compõe. Suspeita sem esse par vira observação
com nota ≥7.

Arquivos: `cerebro/agentes/qc-visual/OFICIO.md` §2.3; `scripts/xml-composto-membros.mjs`;
`scripts/membros/resolver.mjs`. Relacionadas: [FIN-12], [ARTE-306].

### ARTE-309 · Lente que julga a olho o que é medível INVENTA — a cor dentro da cena virou número (05/set/2026)

Medido em **05/set/2026**, `itaipu-afogou`, cena **`s99-card-membros-e-fecho`**, no mesmo dia e na
mesma cena da [ARTE-308] — e é um defeito **diferente**, que só apareceu quando o primeiro saiu da
frente. Com as sete reprovas de ponto cego removidas, sobrou uma: `tema:6`, afirmando que a paleta
*"muda de forma abrupta"* entre o corpo da cena e o frame final, de *"acinzentado/dourado com névoa"*
para *"água verde-azulada saturada, sem névoa, luz mais clara e direta"*, e que isso quebrava a rima
de cor *"no instante mais importante do vídeo inteiro"*.

O achado era bem escrito, citava a regência, nomeava as cenas irmãs e apontava o conserto. **E era
falso.** Três medições, todas contra ele:

| medida | t=0 | t=10,2 | deriva |
|---|---|---|---|
| clipe-fonte (11,1 s, `signalstats`) | matiz 111,1 · sat 12,32 · luma 102,3 | matiz 111,9 · sat 11,68 · luma 100,5 | estável, e a saturação **cai** |
| cena, quadro inteiro (RGB) | (66, 67, 65) | (67, 68, 66) | **1/255** |
| cena, metade inferior — a água (RGB) | (34, 36, 35) | (36, 38, 38) | **2–3/255** |

A alegação era contrariada em **todos** os eixos: dizia mais saturado (mediu-se menos), dizia mais
claro (mediu-se mais escuro), dizia mudança abrupta (mediu-se um ponto em 255). O filtro CSS da cena é
constante e a fonte é colorimetricamente estável — não havia por onde a cor mudar.

**A raiz não é o modelo, é a arquitetura da lente.** O ofício já mandava *"o que se mede, script mede
— e você não remede"*, e completava: *"se você medir a olho e discordar do gate, quem está errado é a
sua leitura"*. Só que **para cor não existia gate**. A lente `tema` era a única que fazia afirmação
factual sobre uma propriedade física do quadro sem ter a que se submeter — e afirmação sem régua
preenche o vazio com prosa plausível. Alucinação aqui não é acidente do modelo: é o que a estrutura
pedia.

**O conserto.** `scripts/lib/qc-paleta.mjs` mede a média RGB do quadro e da metade inferior em cada
instante amostrado e devolve a maior deriva entre dois instantes quaisquer (Chebyshev, o **pior par**,
não o primeiro contra o último — deriva no miolo escapava da comparação de pontas). Entra em
`contexto.evidencia.paleta` antes da inferência. Abaixo de **6/255** o veredito é `ESTÁVEL` e a lente
fica **proibida de afirmar mudança de paleta dentro da cena**; acima, é `DERIVA REAL` e ela descreve
citando o par de instantes. Medição que falha vira `{erro}`, a lente julga como antes e **declara no
laudo que não foi medida** — régua que quebra não pode virar reprova.

⚠️ **O que a medição NÃO tira da lente:** se a cor **serve ao assunto**, se a família bate com as
irmãs, se uma cor carrega um significado só. Isso continua inteiro e continua reprovando. O que saiu
foi a afirmação factual sobre movimento de cor, que nunca foi julgamento — era medição feita com o
instrumento errado.

⛔ **E a tentação que esta lei fecha:** diante de uma reprova que se suspeita falsa, re-rodar a
bancada até ela passar. Isso não é conserto, é fraudar o gate — o julgamento é probabilístico e
eventualmente passa por acaso, e aí o defeito real da próxima vez passa junto. O caminho é dar à
lente a régua que faltava e julgar **uma vez** com ela.

Arquivos: `scripts/lib/qc-paleta.mjs`; `scripts/julgar-cenas.mjs`;
`cerebro/agentes/qc-visual/OFICIO.md` lente 9. Relacionadas: [ARTE-308], [SIS-46].


### ARTE-310 · Procedência com caminho abreviado vira mídia ausente — e derruba o render do vídeo inteiro (10/set/2026)

Medido em **10/set/2026**, `terremotos-america-do-sul`. O `editor-de-arte` escreveu, no bloco de
dossiê do cabeçalho de **8 cenas**, o caminho da mídia escolhida com o identificador abreviado por
reticências (U+2026):

```
../_media/footage/t-c003/c254b0ba-…-2-Shaking_Earthquake_uhd_4268392.mp4
```

O arquivo real é `c254b0ba-ade9-4efb-a76c-b54957ff726f-2-Shaking_Earthquake_uhd_4268392.mp4`. Para
quem lê, a abreviação é inofensiva. Para máquina, é um caminho que não existe:

| leitor | o que fez |
|---|---|
| `referenciasDeMidia` (render) | extraiu o caminho abreviado como referência e não achou o arquivo |
| `planejarInsumoRenderParcial` | recusou o handoff parcial **do vídeo inteiro**: `3/21 mídia(s) citada(s) ausente(s)` |
| frota de render, ciclo de 10:03:50Z | `⏸ terremotos-america-do-sul` — nenhuma cena nova despachada |

**Três cenas com a abreviação seguraram as outras cem.** E a mensagem mandava investigar o disco, que
estava certo: os arquivos existiam, com o nome original, já convertidos a 30 fps all-intra. Duas
evidências brigaram (o ffprobe acabara de ler os arquivos que o render dizia ausentes) — e só quem
parou para medir achou o texto no cabeçalho.

**A regra.** Procedência de mídia no HTML cita o caminho **exato e inteiro**, como está no disco —
**copiado, não redigitado**. Nunca abreviar com "…", nunca parafrasear o nome, nunca "o clipe do
Medellín". O comentário não aparece na tela: não há economia visual a fazer, e cada caractere cortado
vira referência para um arquivo que não existe. Vale para o caminho da mídia **escolhida**; nomes de
clipes **rejeitados** citados em nota podem ser encurtados, porque não são caminho.

**O conserto aplicado.** Cada "…" dentro de um caminho `_media/footage/<cena>/…` virou coringa, e a
troca só aconteceu quando o padrão casou com **exatamente um** arquivo real — com zero ou mais de um,
a linha ficaria intacta e o caso seria reportado, porque adivinhar procedência é pior que deixá-la
ilegível. Resultado: **10/10 substituídos, 0 ambíguos**, nas 8 cenas (inclusive uma linha com três
reticências). Backup em `_bkp-reticencias-20260910T105735Z/`. Nenhuma das 8 tinha clipe renderizado,
então o conserto não custou re-render.

**Duas dívidas ficam com o código, não com o agente** (fila de consertos da coordenadora, 10/set):
(1) `referenciasDeMidia` não deveria extrair caminho de comentário — ou deveria dizer *"citado em
comentário e não resolve"* em vez de *"ausente"*, que manda olhar o disco errado; (2) uma cena com
mídia ausente não deveria derrubar o parcial inteiro — pela lógica do parcial, ela vai para as
barradas e o resto segue.

<!-- Para o agente-raiz (.claude/agents/editor-de-arte.md, e as outras duas cópias — fonte e global),
     na seção de procedência/cabeçalho do HTML, uma linha:
     "Procedência de mídia: caminho exato e inteiro, COPIADO do disco — nunca abreviado com '…' nem
      parafraseado. O render e o qc-procedencia leem esse caminho como referência (ARTE-310)." -->

### ARTE-311 · Marcador de pendência é ausência DECLARADA, não extensão de arquivo — e a regra por `.txt` mandou o Fable recusar 21 cenas cuja pasta estava cheia de fonte paga (11/set/2026, `terremotos-america-do-sul`, agente-raiz `scripts/_brief-arte.mjs`)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `ARTE-310` na árvore de trabalho do checkout compartilhado, destilada em paralelo com outra linhagem. O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele. Citação a `ARTE-310` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.


O dossiê da arte decidia "esta cena está BLOQUEADA por falta de mídia" com `/\.(md|txt)$/`: **qualquer
texto na pasta da cena** virava bilhete de ausência e o brief saía com a ordem
**"⛔ NÃO DESENHE. RECUSE E RELATE."**

Só que a pasta de mídia desta casa não guarda bilhete de falta — guarda FONTE ENTREGUE. Medido no
`terremotos`: **95 arquivos `.txt`/`.md` em `_media/`, e nenhum é `_PENDENTE.md`**. São `_fonte-*.txt`
(transcrição literal da fonte, com URL, data de leitura, sha256, trecho entre aspas, licença e a linha
de crédito), `_tinta-literal-*.txt`, `*-texto-literal.txt` e `_POR-QUE-SAIU.md`. É a PROVA de que a
pesquisa entregou.

**Efeito: 21 dos 144 briefs mandavam recusar a cena — falso positivo de 21 em 21.** Entre eles
`t-c007`, `t-s094`, `t-s103`, `t-s095`, `t-s085` e `t-s125`, cuja arte já estava pronta, julgada, e em
três casos **já renderizada e no bucket**. A `t-cov-020` ia para a sessão de arte com SEIS transcrições
de fonte do USGS na pasta e a ordem de não desenhar em cima delas.

⚠️ **A régua certa já estava escrita duas linhas acima, no comentário do próprio arquivo** — *"quem
declarou a falta olhou a cena; quem conta arquivo só sabe somar"* — e o código não a aplicava. **Quem
declarou a falta DECLAROU a falta.** O teste passou a ser de duas pontas, e as duas nasceram de falso
positivo medido no mesmo dia:

1. **só o cabeçalho (400 B)** — a declaração abre o bilhete, não se esconde na página 3. Varrer 1.200 B
   fazia um manual do ShakeMap casar com *"NÃO existe (404)"*, que fala de uma PÁGINA da documentação;
2. **com `\b` nas duas pontas** — sem isso, "inde·pendente·" casa com "pendente", e foi assim que a
   segunda prova independente da magnitude 7,4 do SGC virou "pendência" numa frase que dizia o oposto;
3. **a ENTREGA VENCE** — cabeçalho com `FONTE:` / `URL LIDA:` / `LIDA EM:` / `TINTA LITERAL` não pode
   ser, no mesmo fôlego, a declaração de que a coisa falta.

`_PENDENTE.md` segue sendo marcador sempre, por convenção; arquivo ilegível também, porque aí se falha
fechado. Provado nas duas direções: 95/95 fontes deixaram de bloquear, e um `_PENDENTE.md` sintético
mais um bilhete de ausência sem nome canônico continuam bloqueando.

⛔ **E os dois erros NÃO custam o mesmo, o que decide para que lado errar na dúvida:** bloqueio real
só faz a cena esperar a pesquisa; bloqueio falso **manda embora uma cena que estava pronta para
desenhar** — e gasta a sessão paga do Fable para produzir a palavra "recuso".

### ARTE-312 · A grafia que o redator FIXOU é lei para quem desenha e era invisível para quem JULGA — e o QC reprovou a grafia certa mandando carimbar o nome de um país sobre a cidade (11/set/2026, `terremotos-america-do-sul/t-s094`, agente-raiz `scripts/lib/qc-visual-contexto.mjs`)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `ARTE-311` na árvore de trabalho do checkout compartilhado, destilada em paralelo com outra linhagem. O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele. Citação a `ARTE-311` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.


O `_brief-arte.mjs` injeta o `textos-tela.json` no dossiê de quem desenha, com a frase **"a grafia é
LEI, não sugestão"**. O dossiê de quem JULGA não o via — `prepararContextoQc` montava espelho, fala,
regência, mídia, autoria e círculo, e nada de texto de tela.

O efeito não é cegueira, é **re-litígio**: sem a decisão à vista, a lente `factual` julga grafia pela
memória do modelo. Medido: a `t-s094` levou `factual:5` (13 das 14 lentes ≥ 8) porque a dateline diz
«ARMENIA» e o laudo mandou trocar por «ARMÊNIA» — isto é, mandou **carimbar o nome de um país da Ásia
Ocidental sobre imagem de arquivo de 1999 da cidade colombiana de Armenia (Quindío)**. A cena tinha a
decisão escrita no cabeçalho, com fonte, e reprovou assim mesmo.

É o caso Singapura/Cingapura do `CLAUDE.md` se repetindo: **um QC reprovando a grafia CERTA e travando
o vídeo.**

A cura não é instruir o agente a "confiar no cabeçalho da cena" — cabeçalho é prosa e não vincula. É
entregar ao juiz **o mesmo artefato que o desenhista recebeu**, para que os dois julguem contra a MESMA
lei. `evidencia.texto_de_tela` traz glossário, card de pessoa, rótulo de dado e proibições **filtrados
pela cena**, mais as políticas gerais, e diz em letras o que fazer com eles: *grafia listada está certa
por definição; divergência entre cenas vira OBSERVAÇÃO com nota ≥7, porque a decisão de conjunto é do
redator, não da lente.* Projeto sem o arquivo devolve `presente:false` — ausência declarada, nunca
bloqueio: a maioria dos projetos nunca rodou a estação `textos`.

⚠️ **O corolário é maior que a grafia.** Todo artefato que a casa trata como DECISÃO — e que por isso
manda no desenho — precisa chegar ao QC, ou o QC vai reabrir a decisão a cada laudo, de graça e com
cara de achado. Decisão que só um lado enxerga não é decisão: é opinião de um dos dois.

### ARTE-313 · Num produto em que a TELA JÁ VEM PRONTA, os gates que medem o PEDIDO julgam o vídeo errado — três reprovaram o mesmo espelho correto no mesmo dia (11/set/2026, `compilado-poder-militar-china-eua`, agentes-raiz `qc-tempo-apresentador.mjs` · `qc-deserto-real.mjs` · `qc-espelho-midia.mjs`)

O compilado de **edição sobre a edição** (dois masters de editor casados num só, com o estúdio
desenhando por cima a camada que faltou) tem uma propriedade que nenhum gate do eixo previa: **a maior
parte da tela não foi encomendada por este espelho.** Ela já existe — 81,6% do tempo é footage do
editor, print de matéria e infográfico do estúdio de jun/2026, tudo publicado e aprovado.

Os três gates do eixo leem o espelho como se pedido e tela fossem a mesma coisa, o que é verdade no
vídeo do zero e falso aqui. Medido, no mesmo espelho, no mesmo minuto:

| gate | o que disse | o que era |
|---|---|---|
| `qc-tempo-apresentador` | **FAIL: Bôco em 62,4%**, "cobertura faltando, 53 pp acima do declarado" | o complemento das cenas novas é o MASTER, não o rosto; o Bôco sem cobertura são **7,8%** — e o espelho novo já derrubou a presença dele de 18,0% (herdada) para isso |
| `qc-deserto-real` | 189 s sem registro real, 13% do vídeo "em deserto" | dentro da janela o master mostra HQ-9 e S-400 disparando, navio na costa, cabo submarino, documentos do MSS, o show aéreo de Changchun. Medida corrigida: **19 s** |
| `qc-espelho-midia` | taxa de pedido **13,2%**, "abaixo do piso, releia se virou diagrama" | o denominador contava 160 janelas de master que não pedem nada de propósito. Sobre as 98 cenas NOVAS: **29,9%** |

**O conserto é o mesmo nos três, e não é afrouxar a régua: é dizer a cada gate onde olhar.**
O apresentador passou a detectar compilado também por `_compilado-montagem.json` (já detectava por
`_reaproveitamento.json` — mesmo fato estrutural, outro pipeline); o deserto passou a contar a
anotação `_registro_master` do próprio espelho, que declara o que o master entrega em cada janela; e
a taxa de pedido parou de contar cena `anima:false` no denominador — cobertura é o que ALGUÉM VAI
DESENHAR. Impacto no acervo, medido antes de aplicar: **15 dos 16 espelhos no disco não mudam em um
único ponto percentual**, porque neles `anima:false` é sempre o apresentador, que já era excluído.

⚠️ **E existe uma armadilha do outro lado, que é por onde o defeito entra.** A tentação é marcar
`midia:"footage"` nas janelas de master — afinal é footage que está na tela, e isso faria os gates
calarem sozinhos. É errado e caro: `midia` não descreve a tela, é **o pedido assinado à pesquisa**, e
o `insumos-ledger.mjs` não olha o campo `anima` — ele abriria uma necessidade de caça para cada janela,
mandando o estúdio buscar clipe para 25 minutos de vídeo prontos desde junho. A janela de master leva
`midia:"apresentador"` (o valor que significa "não peço material") e o que está na tela se declara em
`modo` + `_registro_master`, que são campos que ninguém transforma em trabalho.

> **A régua:** antes de acreditar num gate, pergunte **o que ele mede** — o pedido ou a tela. Onde os
> dois coincidem, tanto faz; onde a tela chega pronta de outro lugar, o gate que mede o pedido está
> julgando um vídeo que não existe. E três alarmes falsos ao mesmo tempo não são três defeitos: são
> um só, na pergunta que os três fazem.

### ARTE-314 · `needs.geo[].tipo` é enum FECHADO e não avisava — dois montadores descreveram melhor do que o contrato permite, e o espelho inteiro reprovou (11/set/2026, `compilado-poder-militar-china-eua`, agente-raiz `cerebro/agentes/montador/CONTRATO.md`)

O contrato do montador diz, sobre o `modo`, **"vocabulário FECHADO — não invente valor ad-hoc"**. Três
linhas abaixo, descreve `needs.geo` como "lista de `{tipo, id, rotulo}`" e **não diz nada** sobre os
valores de `tipo`. Um campo que não se declara fechado se lê como texto livre.

Medido: dois montadores de faixas diferentes, no mesmo espelho, escreveram `oceano`, `regiao`,
`territorio` e `corpo-dagua` — descrevendo com exatidão o que pediam (Oceano Pacífico, Ásia Oriental,
Taiwan, Estreito de Taiwan). Seis violações, e o `validar-contrato` reprovou o espelho inteiro: 258
segmentos parados por quatro palavras que eram **melhores** que a permitida.

O enum vivo é `pais · uf_br · estado_mundo · circuito_f1 · cidade · outro`. O que ele não prevê entra
como **`outro`**, e o que aquilo É se diz no `rotulo` — que é campo livre e vai inteiro para o
`pesquisa-geo`. Nada se perde; o que muda é que o gate deixa de barrar.

> **O corolário, e vale para qualquer contrato:** onde um campo é fechado e o vizinho não é, **diga-o
> nos dois**. O silêncio ao lado de um aviso explícito não se lê como "este é livre" por acaso — lê-se
> assim por contraste, que é a leitura mais natural possível.

### ARTE-315 · O contrato do MapTiler exige atribuição em VÍDEO, e a saída que a [ARTE-104] desenhou está cumprida em 2 de 498 (13/set/2026, frente de direitos e procedência)

A [ARTE-104] continua **vigente e correta no que ela manda fazer** — crédito de base de mapa não
ocupa pixel, é ordem escrita do dono em 04/ago. O que esta lei acrescenta é o que aquela **afirma
sem documento**, e que uma frente de direitos não pode deixar passar:

> *"MapTiler é serviço PAGO — a assinatura já quita o uso, e não há exigência de atribuição."*

**Isso é a mesma armadilha que esta casa já conhece do Shutterstock, invertida:** lá, quatro faturas
pagas viravam "este clipe está licenciado"; aqui, a assinatura paga vira "não preciso creditar".
**Contratação não é licença, e pagamento não é dispensa de atribuição.**

**O documento, lido em 13/set/2026** (MapTiler Cloud Terms and Conditions, §5.4 «Limited Videos»):

> "MapTiler attribution is required to be shown on screen while the map is displayed, **unless
> otherwise agreed in writing**."

E a página de copyright do fornecedor: *"Our maps must always visibly show attribution: © MapTiler ©
OpenStreetMap contributors"*. O plano pago dispensa o **logo** na interface; não dispensa a
atribuição. Para impresso, imagem e gravação de vídeo, o fornecedor aceita a atribuição em
**descrição textual claramente visível junto do mapa** — que é o espírito da saída da [ARTE-104],
mas o §5.4 escreve "on screen" para vídeo.

**A MEDIÇÃO QUE FECHA O CASO — a saída existe e ninguém a percorreu.** A [ARTE-104] manda o crédito
ir para a *descrição do vídeo*. Varridas as **498 descrições públicas** do canal (cache
`out/_canal-videos.json`, 705 itens, 498 públicos): **2 creditam MapTiler/OpenStreetMap**, e as duas
são o mesmo par de vídeos de 05/set com bloco «Créditos:» escrito à mão. Qualquer marca de
crédito/fonte aparece em **6 de 498**. Não há gerador de descrição que leve a linha, e nenhuma tabela
do `estudio.db` guarda descrição para alguém cobrar.

> **A lei:** *tirar a obrigação da tela é decisão de design; tirá-la do produto é decisão jurídica.*
> Quando uma regra manda a obrigação para outro lugar, **esse lugar precisa ter um dono e um gate** —
> senão a regra não moveu o crédito, apagou.

**O que NÃO muda com esta lei, e é importante:** o `qc-visual` continua proibido de reprovar por
crédito de base ausente. Um agente de QC não é o lugar onde se decide licença de fornecedor, e
alarme falso na lente `fonte` já custou caro (ver abaixo). A decisão é do dono, e está nomeada.

**Decisão pendente do Mateus** (as três saídas, em ordem de custo):
1. **Pedir a dispensa por escrito ao MapTiler** — o próprio §5.4 abre a porta (*"unless otherwise
   agreed in writing"*). É um e-mail, e resolve de vez, inclusive retroativamente se assim for
   acordado. Esta frente NÃO contata terceiros: o pedido fica pronto, quem envia é o dono.
2. **Cumprir na descrição** — um bloco fixo de créditos gerado pela linha de publicação (hoje
   inexistente), com dono e gate. Atende a régua de impresso/gravação do fornecedor; para vídeo o
   §5.4 pede tela, então sozinha ela é cumprimento parcial declarado.
3. **Voltar o crédito à tela** — contraria a ordem de 04/ago e a [ARTE-104]; só se o dono reverter.

⚠️ **Escopo de correção é do presente para frente.** O que já foi ao ar não se reprocessa por isto
(PRINCÍPIOS §9): crava-se a medição, decide-se, e aplica-se dali em diante.

**O RASTRO OPERACIONAL QUE ESTA LEI TAMBÉM FECHA — e a causa NÃO era «integrar não é implantar».**
O ofício `.claude/agents/qc-visual.md` recebeu em `329961d48` (11/set 17:04 UTC) a régua *"se a
correção que você ia escrever começa com 'adicionar crédito de base/geometria/dados', a nota é 10,
não 5"*. Em 12/set, três cenas do `estreito-de-ormuz` foram julgadas cobrando exatamente o proibido
— `ormuz-j14-saida-golfo` (05:33, fonte 4), `ormuz-s078` (05:41, fonte 4) e `ormuz-s090` (05:50,
fonte 7). A leitura fácil é «a release de produção ainda não tinha o conserto». **Ela está errada, e
medi-la de verdade mudou o conserto.**

O que a release do controlador de QC carrega, medido em 13/set/2026 em `/opt/top10-qc-manager/current`
(release `0c1df941`, ligada às 18:53):

| peça | na release? |
|---|---|
| `.claude/agents/qc-visual.md` — o ofício portátil, **onde a régua foi escrita** | **AUSENTE** |
| `marcas/top10/agentes/qc-visual.md` — a roupa da marca | presente, **sem a régua** |
| `knowledge/qc/lentes.md` — que a própria roupa chama de «fonte única das 14 lentes» | **AUSENTE** |
| `knowledge/` inteiro | só `CATALOGO-MODELOS.md` e `ROUPA-CENA.md` |

**O juiz que roda em produção veste só a roupa — e a roupa aponta, como fonte única, para um arquivo
que não viaja com ela.** O conserto de 11/set foi escrito num arquivo que a release do QC nunca
carregou; ele nunca teve chance de chegar. E a tabela de defeitos da roupa trazia a linha *«Crédito de
base cartográfica na tela | 8 · fonte | [ARTE-104] | grep MapTiler/OpenStreetMap/Natural Earth no HTML
→ vazio»*: o defeito nomeado é o crédito **presente**, mas a coluna da prova descreve o estado
**limpo**, e foi lida ao contrário — pelo agente, e depois por mim.

> **O corolário, que vale muito além desta lente:** *um conserto de ofício só existe onde a execução
> o alcança.* Antes de dar por consertado um agente, **abra a release que ele roda e confirme que o
> arquivo que você editou está lá dentro.** Presença do commit na árvore não é presença do arquivo na
> release; e ponteiro para «fonte única» que não viaja é régua morta com cara de régua.

**O conserto, em três degraus** (13/set/2026): (1) a cláusula entrou em `knowledge/qc/lentes.md`,
porque é a fonte e a doutrina a declara única; (2) entrou também em `marcas/top10/agentes/qc-visual.md`,
**que é o único arquivo do agente que a release leva** — sem este degrau, (1) não chega ao juiz;
(3) ✅ **FECHADO NA FONTE em 14/set/2026, por outra frente** — o manifesto `scripts/lib/arquivos-runtime-qc.json`
passou a levar o TRIO `knowledge/qc/lentes.md` + `.claude/agents/qc-visual.md` +
`marcas/top10/agentes/qc-visual.md` (commit `abfc6c876`, *«a roupa dizia fonte única e a fonte não
viajava»*), com o gate `qc-fonte-unica-viaja` provando que o par viaja **e** que a roupa continua
declarando `lentes.md` como fonte única — senão o gate perderia o caso que o originou. ⏳ **Mas
integrar não é implantar:** vale quando a release do QC manager for cortada; até lá a ativa
(`0c1df941`) segue sem as peças, e **toda regra escrita só na rubrica continua invisível para quem
julga em produção.**

**A família inteira, varridos os 590 laudos de `/dados/out/*/qc/`:** 6 casos — 2 na
`piramide-porta-secreta` (01–02/set), o `s070-cone-do-amazonas` que motivou o conserto (11/set 08:17)
e os 3 do Ormuz (12/set). **`ormuz-j14-saida-golfo` e `ormuz-s078` estão reprovadas por esse único
item e por nenhum outro** — todas as demais lentes ≥ 7. Re-julgá-las **depois** do degrau (2) chegar à
release destrava duas cenas sem tocar em arte e sem render; re-julgá-las antes reproduz o mesmo laudo.
### ARTE-316 · A cena travou 2,13 s porque a câmera saiu de cima do desenho — e a lente que proíbe isso deu nota 9

> ⚠️ **Reemitida sob o número 316 — depois de DUAS colisões de ID.** Esta lei nasceu no ramo `release/distribuicao-social-threads-20260910` (03/set/2026) como **ARTE-304**, e o `main` já dera esse número a outra lei sobre a **mesma cena** `s18-largo-demais-para-os-corredores` (22/ago). Reemiti-a como **315** em 14/set — e enquanto o PR era revisado, o `main` integrou uma ARTE-315 própria (atribuição do MapTiler em vídeo). Por isso **316**. A régua não mudou nas duas vezes, inclusive quando pesou contra mim: *vale o que está INTEGRADO; quem chega depois recebe número novo.* Ramo que demora a integrar paga esse pedágio a cada volta — o preço não é o conflito, é a citação que passa a apontar para a lei errada.

**Medido em 03/set/2026, `piramide-porta-secreta`, `s18-largo-demais-para-os-corredores`.** O Mateus
viu o clipe no Premiere e relatou: *"ficou travada, com pixels quebrados"*. `ffmpeg -vf
freezedetect=n=0.003:d=0.3` mediu **2,133 s de frame parado, de 10,533 s a 12,667 s** — e o clipe era
FIEL ao HTML (o sidecar `.de-html` batia com o sha1, e o `shot.mjs` nos mesmos instantes devolvia a
mesma tela morta). **Não era defeito de render: re-renderizar teria pago VM para reproduzir o defeito.**

**A raiz tinha DUAS causas somadas, e a segunda é a que ninguém procura:**

1. **O elemento que devia "sobrar" saiu de quadro.** O `#solo` tem no HTML o comentário que declara a
   intenção — *"linha do solo: sobrevive ao desmonte ('sobra o chão nu')"*. Enquanto o nível de corte
   descia até ele (y=1959), a câmera subia atrás do caixão. Projetando `y_tela = 1080 + (1959−fy)·z`
   numa tela de 2160: **2235 px em t=10,4 · 2755 em t=12,2 · 2784 em t=12,6 — até 624 px ABAIXO da
   borda inferior.** Sobraram o céu e o caixão a **0,1 % da tela**: o retângulo de contorno branco
   solto no vazio que o dono chamou de "pixels quebrados".
2. **`eio` aplicado POR SEGMENTO zera a velocidade da câmera em cada keyframe.** O `camAt` interpolava
   cada par de keyframes com ease-in-out independente, então em `t:11.00` e `t:12.60` a câmera parava
   de fato — não desacelerava, parava. Somado ao ease-out do desmonte (que chega ao fundo cedo) e ao
   ease-in-out da reconstrução (que sai devagar), um respiro de **0,88 s** desenhado de propósito na
   pausa entre duas frases virou **2,4 s** de tela vazia e parada. Conserto: spline Hermite monotônica
   no trecho, com velocidade zero só nas pontas que casam com os segmentos vizinhos.

⚠️ **E o buraco caiu exatamente na DOBRA CONCEITUAL da cena.** Os marcos estavam word-locked
corretamente — `11.25` é a palavra *"cima."* e `12.13` é *"Quer"*. O clique lógico do vídeo
(*"fechada por cima"* → *"Quer dizer que aquele quarto foi pensado desde o primeiro bloco"*)
aconteceu sobre uma tela morta. **A intenção estava certa; a execução esvaziou justamente o momento
que a intenção queria sublinhar.**

⛔ **A REGRA JÁ EXISTIA, ESCRITA EM MAIÚSCULAS, E O JUÍZO NÃO A APLICOU.** A lente **7 · motion** de
`knowledge/qc/lentes.md` diz textualmente: *"**NUNCA parada:** sempre há algo em movimento — cena
estática = reprova"*. O laudo desta cena deu **motion: nota 9, zero problemas**. O QC julga por frames
AMOSTRADOS e por impressão: um buraco de 2,4 s entre duas amostras é invisível para ele. *Regra sem
verificação automática é regra morta — e esta estava morta desde que foi escrita.*

**O que fazer, e custa 3 s de CPU por clipe:** `ffmpeg -v info -i <clipe> -vf
"freezedetect=n=0.003:d=0.3" -map 0:v -f null - 2>&1 | grep freeze_`. ⚠️ **A invocação é a metade da
regra:** a saída do `freezedetect` é **info-level e sai em stderr** — com `-v error` ou `2>/dev/null`
ela some e a medição devolve "zero congelamentos" num clipe cheio deles. O mesmo vale para
`signalstats,metadata=print`. *Este alerta já estava no cabeçalho do `qc-congelamento.mjs` desde
04/ago e eu pisei nele duas vezes no mesmo dia.*

**Calibração, para não virar alarme falso.** Varridos os **81 clipes** deste vídeo: **27 acusam freeze
≥ 0,8 s** — e a maioria é legítima. Cena de FOTO REAL (`s75`, 4,73 s) é estática por natureza e a
tela está cheia; congelamento na ABERTURA (`s96`, `s61`) costuma ser o hold de entrada. **O perfil que
é defeito é outro: freeze longo NO MEIO da cena com a tela esvaziada** — só a `s18` (2,13 s @ 10,5 s)
e a `s36-primo-pesado-do-eletron` (2,60 s @ 15,0 s) o exibem. *Reprovar os 27 ensinaria a ignorar o
gate; é o denominador que separa a medição do alarme.*

**Régua para quem DESENHA cena com câmera:** se a cena tem voo, zoom ou travelling, **o enquadramento
é função do tempo e precisa ser provado ao longo dele** — não basta olhar o primeiro e o último frame.
Todo elemento que o desenho declara como âncora ("sobra o chão", "a base permanece") tem de ter
`y_tela` e `x_tela` DENTRO do palco em cada instante em que ele é a única âncora. E ao interpolar
keyframes, lembre que **easing por segmento zera a derivada nas juntas**: com keyframes próximos, o
movimento vira uma sequência de paradas.

Irmã da [[ARTE-190]] pela mesma família — **o defeito estava no instrumento de medir, não só na
peça**: aqui o instrumento era um juiz que olha frames soltos onde o defeito mora no intervalo entre
eles. *Quem amostra não vê o buraco; quem mede o tempo inteiro vê.*

### ARTE-317 · Duas hierarquias num bloco só, e a declaração de "sem herói" numa FLAG — o gate não enxerga nenhuma das duas, e a cena reprovada vira ÓRFÃ (14/set/2026, `compilado-poder-militar-china-eua`, agentes-raiz `knowledge/ROUPA-CENA.md` ARTE-58 + bloco de gates)

Duas cenas nasceram `ok:false` na mesma rodada de arte, por defeitos que **não eram de arte**: as duas
desenharam certo e declararam a intenção no lugar que o gate não lê.

- **`s025-plano-quinquenal`** explicou em comentário que "roda com `qc-tamanho --sem-heroi`, e nenhum
  bloco leva `data-qc-papel="heroi"`" — o raciocínio estava certo (*"o herói desta direção é a CURVA e
  depois o LEQUE, não uma cifra"*). Mas `--sem-heroi` é **flag de linha de comando**, e quem carimba o
  portão (`qc-cena`) chama o gate **sem flag nenhuma**: ele elegeu o maior texto do palco e cobrou
  260px de um rótulo de 128. A declaração que vale é `data-qc-sem-heroi="<motivo>"` **no HTML**, com
  **12+ caracteres** de motivo — abaixo disso é ignorada em silêncio.
- **`s102-frota-370-navios`** montou o kicker sobre o número num bloco só (`MAIS DE<br>370`), variando
  o corpo por `::first-line`. O `qc-tamanho` mede o ELEMENTO, não a pseudo-linha: leu **119px** onde o
  herói real tem 440 (`[heroi] "MAIS DE370" 119<260`) — e a caixa inflada do bloco ainda colidiu com o
  rótulo de baixo. **Um defeito de markup faturado como dois defeitos de arte.** Consertado com um
  *shell* (que o JS segue animando) e um filho por corpo, `data-qc-papel="heroi"` no filho do número:
  `herói 451px ≥ 260` e `SEM colisões`, com a pintura idêntica à anterior.

**O que torna isto caro é o terceiro estado.** Cena que nasce reprovando tem **HTML no disco** (some do
`desenhar-cenas --listar`, que só devolve cena SEM html) e carimbo **`ok:false`** (o render a pula).
**Nenhuma fila a recupera** — e o driver de arte não tem verbo para ela: `--conc`, `--max`, `--so` e
`--listar` partem todos da lista de pendentes. Aqui foram 2 de 46 carimbos; no `sol-artificial-fusao`
uma cena passou 10 voltas invisível, e o comentário do próprio `desenhar-cenas.mjs` registra outra que
ficou **13 h** parada. *Os três indicadores de saúde da estação — contagem de HTML, `--listar` e filhos
vivos do driver — são cegos a ela por construção.*

**Régua, e ela é de ESTAÇÃO, não de cena:** ao abrir ou fechar a estação de arte, some um **quarto
eixo** aos três de sempre —

```
python3 -c "import json;d=json.load(open('out/<proj>/_portao.json'));print([k for k,v in d.items() if v.get('ok') is not True])"
```

É determinístico, custa zero de cota, e **ninguém mais vai fazer**. Depois de consertar, o próprio
`qc-cena` na cena regrava o carimbo com o hash novo.

⚠️ **E meça da RAIZ do repositório.** `out/` é symlink para `/dados/out`: um `cd` para dentro dele faz
os gates-filhos do `qc-cena` quebrarem, e ele traduz "o gate não rodou" como **`[colisão] reprovou` ·
`[mapa-vivo] reprovou` · 6 NÃO MEDIDOS** — reprovação que parece defeito da cena e some quando o mesmo
arquivo é medido de `~/top10-estudio/…` com caminho `out/<proj>/graphics/<cena>.html`. Aconteceu nesta
mesma sessão, antes do diagnóstico correto. Irmã da [[ARTE-190]]: *o instrumento de medir também erra, e
o erro dele se veste de defeito da peça.*

### ARTE-318 · O recorte vertical mirou o tronco do operador porque o foco "declarado" nunca foi escolha — e a receita dizia `verified:false` até o master (14/set/2026, Prédios P5 `s72-o-predio-balanca`, agentes-raiz `editor-de-arte` e `scripts/verticais/regras/_nucleo.mjs`)

> 🔀 Nasceu como **ARTE-317** no PR #253 (14/set/2026) e, enquanto ele era revisado, o `main` integrou a ARTE-317 do PR #254 (duas hierarquias num bloco só). Vale o integrado: esta é a **318**.

**Caso.** O QC independente por visão reprovou a P5 vertical dos Prédios. Na `s72` (footage NOVA/PBS de
uma maquete de arranha-céu numa mesa vibratória), a recomposição 16:9 → 9:16 *"centrou no tronco do
operador, não no modelo: o colete fluorescente sozinho ocupa 19,7% do quadro e 47,4% do terço
inferior"*; a maquete ficou espremida no canto superior direito e, no fim do push-in, a caixa de acrílico
saiu pela borda direita (quadros 533 e 582). *(Números do laudo do QC independente,
`_obra/qc-independente-20260914/p5/lotes/lote-1.json`; não medidos por mim.)*

**Por que passou — três elos, e nenhum olhou o sujeito:**

1. **A receita declarou o chute e avisou.** No HTML da série
   (`pack/parts/parte-5/graphics/range-1-s72-o-predio-balanca.html`, lido em 14/set) a `__nativeRecipe`
   diz `"treatment": "…fóco por sujeito…"` e, na linha seguinte, `"focus": {"x": 0.5, "y": 0.5,
   "verified": false}`. O centro geométrico, marcado como não verificado — e **nenhum gate lê
   `verified`**. O aviso viajou intacto do plano ao master publicado.
2. **A revisão de quem produziu mediu o que sobrava, não o que aparecia.** O PROGRESSO da P5 deu a s72
   **OK: "0,0% de faixa morta; footage full-bleed, crédito presente"**. Faixa morta, aresta e contraste
   estavam certos; a pergunta "o maior elemento do quadro é o que a narração nomeia?" não foi feita.
3. **O motor novo tinha o mesmo furo, escrito como virtude.** `pontoFocal` (regras do motor vertical)
   reaproveitava o `object-position` da cena original *"porque ele foi escolhido por quem viu a imagem"*.
   Mas o valor vem de `getComputedStyle`, que devolve `50% 50%` para TODA mídia — e footage 16:9 numa
   caixa 16:9 não recorta nada na horizontal, então ali o X nunca mudou a imagem e nunca foi escolha.
   No 9:16, que corta ~68% da largura, ele vira o centro geométrico — rotulado `declarado-na-cena`. O
   ramo "padrão" do código nunca rodava, porque o valor computado sempre existe.

**A regra:**

1. **Foco só é decisão no eixo em que a composição original recortava.** Mídia em `cover` cuja caixa
   16:9 não tinha sobra num eixo não carrega escolha nesse eixo; receita com `verified:false` não
   carrega escolha nenhuma. Herdar isso como foco é mirar o centro geométrico.
2. **O recorte vertical mira o sujeito que a narração nomeia**, escrito numa frase com as palavras da
   cena, e conferido OLHANDO o quadro: o maior elemento do recorte tem de ser ele.
3. **Com push-in/zoom/travelling, prova-se no começo E no fim do movimento** — o push empurra para fora
   o que estava na borda (a régua de câmera da [ARTE-316]).
4. **Eixo não decidido fica declarado, nunca silenciado:** quem não vê o quadro (regra determinística,
   agente sem visão) não inventa porcentagem — marca o eixo em aberto e nomeia o sujeito, e quem julga
   por visão confere exatamente ali.

**Conserto aplicado (14/set/2026):**
- `scripts/verticais/regras/_nucleo.mjs` — `pontoFocal` decide POR EIXO se houve escolha (sobra do
  `cover` na caixa original > 1 px), devolve `decidido`, `cortaNoVertical` e `naoDecidido`, e rotula o
  resto `centro-geometrico-sem-sujeito`; `regras/index.mjs` grava `cover[].focoNaoDecidido` e a nota.
  Teste `scripts/testes/verticais-ponto-focal.test.mjs` (6 casos + controle por 3 mutantes, todos mortos).
- `scripts/verticais/agente-layout.mjs` — o prompt marca `[eixo x NÃO DECIDIDO]` na linha da mídia e
  ganhou a seção "o recorte da mídia mira o SUJEITO NOMEADO": nomear o sujeito em `sourceCrop.subject`
  com as palavras da cena e provar no fim do movimento (o teste monta o prompt e confere).
- `marcas/top10/agentes/editor-de-arte.md` §6c — recompor para o vertical.

⚠️ **O que ainda NÃO é gate:** `focoNaoDecidido` é declaração; quem o confere é o juiz por visão, que
nesta data ainda não está ligado ao pipeline do motor como porta antes de "pronto" (ordem da Holding de
14/set, em curso). Até lá, a regra depende de quem julga ler o campo — e esta lei existe porque um
`verified:false` já não foi lido uma vez.

### ARTE-319 · Inserto de mídia real sem rótulo numa cena de CONTRASTE: a foto oficial do produto certo foi lida como o material que a narração aposenta — por dois de três leitores (14/set/2026, `ate-que-altura-construir` s60 → Prédios P4 vertical, agente-raiz `editor-de-arte`)

**Caso.** A cena `s60-kone-fita-de-fibra-de-carbono` narra a troca do cabo de aço pela fita de fibra de
carbono da KONE. O card `#imFita` usa a imagem `ultrarope-innovation-951x535` da página oficial do KONE
UltraRope (procedência em `_media/footage/s60-kone-fita-de-fibra-de-carbono/_PROCEDENCIA.json`), sem
rótulo e sem conector, ao lado do rolo de cabo de aço. Três leituras da MESMA imagem, no mesmo dia:

1. **O QC independente por visão** (folha a 720×1280): *"lâminas metálicas PRATEADAS… A KONE UltraRope
   é uma fita plana PRETA e fosca"* — reprovou a cena como asset provavelmente errado. A cor da
   UltraRope veio da memória do juiz: a página técnica oficial diz *"carbon fiber core surrounded by
   high-friction coating"* e não declara cor.
2. **Eu, orquestrando, abri a imagem na página pública** e escrevi "faixas prateadas sobre um tambor
   polido — lê como metal". Repeti a premissa do laudo e destilei uma lei sobre ela (a PESQ-126 do PR
   #253, retirada antes de integrar).
3. **A execução do conserto, na VM, ampliou o asset:** *"as tiras verticais são escuras e foscas; o que
   brilha atrás delas é o tambor de metal polido. É mídia oficial do próprio produto — não se troca e não
   se fabrica."* Olhando de novo com atenção, é o que a imagem mostra.

**Não havia asset errado. Havia um inserto que não se lê.** Entre as tiras escuras aparece, em faixas
largas, o tambor espelhado — a região mais clara e maior do card. Em tamanho de telefone o olho lê a
luminância dominante, e ela é metal. Sem rótulo, nada diz ao espectador que as tiras escuras são o
assunto; ao lado do cabo de aço, a cena mostra metal ao lado de metal e a TROCA que ela existe para
mostrar não aparece.

**A regra:**
1. **Inserto que carrega o "B" de um contraste A → B leva RÓTULO que nomeia B** (e conector, quando há
   um A na tela). É o rótulo que resolve a ambiguidade que a foto real quase sempre tem.
2. **O recorte do inserto põe o traço que distingue B dominando o quadro** — aqui, as tiras escuras,
   não o tambor brilhante entre elas. Julgue no tamanho em que a cena vai ser vista (folha de telefone),
   não no arquivo ampliado.
3. **Laudo que acusa "asset errado" pede conferência da procedência ANTES da troca.** Mídia oficial do
   produto não se troca por palpite sobre a aparência dele — nem se fabrica substituto. Traço físico
   que a fonte não declara (a cor, aqui) não entra no laudo como fato.

**Conserto aplicado (14–15/set/2026):** na P4 vertical, a delegação `20260914-202713-predios-p4-conserto-qc-r2-7a71`
manteve o asset oficial e deu ao card o rótulo "FITA DE FIBRA DE CARBONO". Na raiz:
`marcas/top10/agentes/editor-de-arte.md` §6d; e o prompt do juiz por visão (PR #257) passou a exigir
fonte para afirmação sobre a aparência de produto real — sem fonte, o achado é "conferir procedência".
O vídeo longo já no ar não se refaz.

### ARTE-320 · Dossiê de cena não se edita com a sessão de arte EM VOO — o hash dos insumos joga a sessão inteira fora (15/set/2026, `compilado-poder-militar-china-eua`)

O `desenhar-cenas.mjs` compara o hash dos insumos entre o instante do PROMPT e o da IMPORTAÇÃO. Qualquer
mudança em `out/<slug>/_brief-arte/<cena>.md` — ou nos insumos que ele resume: espelho, regência e
conceito-visual, que entram no mesmo hash — faz a importação ser recusada com
`ARTE_IMPORTACAO_INSUMOS_DIVERGIRAM`, e **o que a sessão já desenhou vai fora**.

**Medido em 15/set/2026, na frente Compilados:** uma nota acrescentada ao dossiê da
`s135-mapa-alcance-costa-chinesa` às 03:12Z, com a sessão rodando, custou **1.790 s de Opus-5 já
gastos**. Outras duas cenas (`s220`, `s305`) tinham começado antes da edição e cairiam igual; foram
encerradas à mão antes de queimarem mais ~20 min cada.

⚠️ **O defeito não foi o CONTEÚDO da edição — foi o MOMENTO.** A nota era legítima (avisava que a sessão
de arte não tem Bash). É por isso que esta lei não manda «não edite o dossiê»: manda editar na ordem certa.

**A ordem é: PAUSAR e DRENAR o driver → editar → redespachar.** Nunca o contrário.

⚠️ *Esta linha dizia «derrubar o driver» até 15/set/2026, e o verbo estava errado — corrigido pela frente que mediu o preço: `kill -TERM` nos drivers levou junto as sessões filhas (`pgrep -x claude` = 0 quatro segundos depois) e queimou duas sessões de ~24 min de inferência. Derrubar abre a janela e paga por ela; drenar espera o trabalho em voo terminar. Como se faz isso está na [SIS-484].*

⚠️ **O ALCANCE É MAIOR QUE O DOSSIÊ — ampliado pela Holding em 15/set/2026, com a conta fechada da
madrugada.** Não é só `_brief-arte/<cena>.md`: **qualquer escrita** em `espelho.json`, `regencia.json`,
`conceito-visual.json` ou no `_insumos` de um projeto com arte EM VOO cai no mesmo hash e mata a sessão.
O custo total medido naquela noite foi **8.367 s de Opus em sessões que não escreveram nada** — inferência
paga que não virou um único HTML.

⏳ **E o conserto definitivo não é esta lei: é TRAVA.** Enquanto a recusa acontece na IMPORTAÇÃO, o dinheiro
já foi gasto — a sessão descobre 25 minutos depois que o chão mudou. O que a casa vai fazer (frente Motor da
produção, depois do ar do China/EUA) é recusar a ESCRITA na hora, dizendo o motivo e o nome da cena em voo.
*Disciplina protege quem lembra; trava protege quem não sabe que precisa lembrar* — e esta lei existe
justamente porque quem editou o dossiê tinha razão no conteúdo e não sabia do relógio.

*Por que isto é lei e não recado: a recusa do hash é a garantia de que ninguém desenha a partir de um
insumo que já mudou — ela está CERTA. O que se paga por não saber disso é inferência, que é o custo caro
da casa, e ela já estava gasta quando o erro apareceu.*

### ARTE-321 · Gate que exige campo por NOME aceita as variantes conhecidas — e diz o que procurou (15/set/2026, `compilado-poder-militar-china-eua`)

O `aplicar-abordagem.mjs` exigia `decisao_editorial.data` e `.porque`, e reprovou as três propostas do montador
(`s018`, `s321`, `s347`) com **«decisao_editorial sem data/porque»**. O campo estava lá, completo — data,
autorização da Holding de 14/set, abordagem anterior, o porquê e o que NÃO se fez —, só que chamado
`_decisao_editorial`. A proposta até avisava no corpo do texto que o nome levava underscore. Três cenas boas
ficaram ~2 h paradas com a mídia delas já no disco.

⛔ **O dano maior não é o atraso: é a mensagem AFIRMAR AUSÊNCIA onde há dado.** Quem lesse aquele laudo iria
cobrar do montador um campo que o montador escreveu. Alarme falso desse tipo não só custa a hora: ensina a
ignorar o gate, e aí ele para de proteger justamente quando acerta.

**A regra tem dois lados, e os dois são obrigatórios:**
- **do lado de quem VERIFICA:** casar por nome aceita as variantes conhecidas da casa (`x` e `_x`), e a mensagem
  **nomeia o que foi procurado** — «procurei `decisao_editorial` e `_decisao_editorial` em …» —, nunca só o que
  faltou. Laudo que diz o que procurou é laudo que se pode conferir;
- **do lado de quem PRODUZ:** o nome do campo se declara no CONTRATO do artefato, não num aviso dentro do texto.
  Aviso em prosa não é lido por gate nenhum.

⚠️ **SEGUNDO CASO MEDIDO, e ele é mais forte que o primeiro** (`s321`, 15/set/2026): o mesmo defeito com uma
torção a mais. O gate de insumos (`scripts/lib/insumos-arte.mjs`, na guarda `dado sem fonte declarada`) trata
**todo** `.json` sob `_dados/` como dado e exige `fonte`/`url`/`fontes`. O arquivo da cena é
`s321-…-NAO-ENCONTRADO.json`, com `status: "nao-encontrado"`: **não é um dado sem fonte, é a AUSÊNCIA
documentada** — dez consultas, CRS RL33153 (fetch falhou), CSIS (lido, sem menção), RAND (403), CBO, tudo sob o
campo `plataformas_ou_fontes_consultadas`.

No `_decisao_editorial` o gate procurava o campo certo com o nome errado; aqui ele **faz a pergunta errada** —
pergunta «qual a fonte do dado?» a um arquivo cuja função é dizer que o dado não existe. **Gate que valida por
família de arquivo tem de reconhecer o REGISTRO DE AUSÊNCIA como categoria própria**: dele se exige as fontes
CONSULTADAS, não a fonte do dado. E a ausência documentada **vale como insumo**, porque foi trabalho de pesquisa
que produziu uma resposta — tratá-la como buraco manda repetir a busca que já foi paga.

*Parente da [SIS-441] (o gate que lia a negação como confirmação) e da família «ausência é produzida pelo
instrumento»: aqui o instrumento produziu a ausência sozinho, por um underscore.*

### ARTE-322 · Em sandbox restrito, EXEMPLAR que venceu vale mais que INSTRUÇÃO sobre a restrição (15/set/2026, `compilado-poder-militar-china-eua`)

As cenas de mapa rodavam numa sessão sem Bash (`scripts/lib/isolamento-arte.mjs`, na atribuição de `configuracao.settings.permissions.allow =
["WebFetch", "WebFetch(domain:*)", "WebSearch"]` — sem Bash e sem Read). **Três pontes por INSTRUÇÃO falharam, cada uma melhor escrita que a anterior:**

| degrau | o que o dossiê dizia | custo |
|---|---|---|
| 1 | «esta sessão não tem Bash, use Read/Glob/Grep» | `s116` 1.417 s + 1.443 s · 14 e 7 comandos recusados |
| 2 | «a `MAPTILER_KEY` está inlineada na cena irmã, abra com Read e copie» | `s116` 1.134 s · 13 recusas |
| 3 | **a chave entregue PRONTA no dossiê**, para não haver o que procurar | `s116` 1.506 s · `s143` 1.767 s · `s411` 1.990 s · 16, 11 e 9 recusas |

⚠️ **O degrau 3 é o que ensina: a chave nunca foi o problema inteiro.** O mapista escrevia sondas `.mjs` para
calcular enquadramento e não conseguia executá-las — **gastava o turno descobrindo que não podia**. Instrução
explica a proibição; não substitui o que a proibição impede de fazer.

**O que resolveu foi trocar instrução por ARTEFATO:** no dossiê das três entrou o HTML da `s305` — mesmo vídeo,
mesmo sandbox, escrita no mesmo dia, portão `ok=true` com `indefinidos: []` — com a ordem de copiar o esqueleto
(base, chave, DEM, `__prepararCaptura`, contrato, crédito) e trocar só geometria, rótulos e enquadramento,
**conferindo pelo FRAME** em vez da sonda que não roda.

**Primeira rodada com o molde: `s411` 1.806 s · `s116` 1.917 s · `s143` 2.322 s — ZERO recusas nas três, portão
limpo nas três.** Contra 15+ sessões queimadas nas rodadas de instrução.

**A regra, para qualquer despacho em ambiente restrito:** aponte um artefato **IRMÃO que venceu aquele mesmo
ambiente** (mesmo projeto, mesmo dia, gate verde), diga o que copiar e o que trocar, e **nomeie a ferramenta que a
casa já tem**. Se não existir irmão, **produza um à mão antes de gastar a segunda rodada de agente**: meia hora de
Opus por tentativa custa mais que a edição mecânica sobre um exemplar aprovado.

⚠️ **Não revoga a ponte por instrução** — ela continua certa para explicar POR QUE algo é proibido. O que esta lei
fixa é a ORDEM: primeiro o exemplar, a instrução como acompanhamento.

⚠️ **COMO ESTA LEI CITA CÓDIGO, e por que isso é parte dela.** A primeira redação apontava uma LINHA, e a linha
estava certa numa árvore e errada na outra: em 15/set/2026 a atribuição acima estava na **113 no `main`** e na
**78 na release viva `4f95fa02`** — o arquivo tinha ganho 35 linhas entre as duas. Nenhuma das duas citações era
mentira; as duas eram verdade em árvores diferentes. **Lei não vive numa árvore só**, então ela cita o **SÍMBOLO**
(arquivo + nome da função, do campo ou da atribuição). Quando o número importar, ele vem com a árvore junto:
«linha 78 na release `4f95fa02`». *Referência que envelhece calada é a mesma doença da lei renumerada cuja citação
ficou apontando para outra — só que aqui o relógio é o do código.*

*E o padrão não é só de arte, o que sugere ofício e não estação: no mesmo dia, a caça da `s418` gastou os 70 turnos
**escrevendo do zero um cliente da API do DVIDS**, com zero turnos procurando clipe, porque o prompt não dizia que a
casa já tem `scripts/stock/baixar.mjs` — logado e com o túnel embutido. Quem despacha em qualquer estação nomeia a
ferramenta que já existe.*

### ARTE-323 · A IMAGEM DO MUNDO SE MEDE EM SEGUNDOS — o piso é do dono, e o sujeito nomeado pede a imagem DELE (16/set/2026, `petroleo-foz-do-amazonas`)
**O caso.** O dono reprovou o Petróleo: *«ficou com muitas animações e poucas fotos, imagens e footages
reais… quero mais vídeos e fotos reais. Preciso de footages reais.»* O espelho tinha passado em todos os
gates do eixo. O `qc-espelho-midia` ([PESQ-31]) contou **26,4% das CENAS** pedindo registro, acima do
alerta de 25%. O `qc-direcao-real` ([ARTE-94]) contou **32,9%** de âncora real, somando documento e mapa.
Medido em SEGUNDOS, sem documento e sem mapa, o Petróleo punha o mundo na tela em **10,6%** do tempo de
cobertura — com documento em 13,0% e mapa em 13,3% ao lado.

**Por que nenhum gate pegou — as duas causas, medidas:**
1. **As réguas respondiam perguntas vizinhas.** Contar cenas premia a cena curta; contar documento e mapa
   premia o palco que não é o mundo filmado. Das três réguas, só a de segundos sem documento e sem mapa
   põe o vídeo reprovado em ÚLTIMO lugar.
2. **A doutrina do montador mandava o mecanismo para o desenho, e a dispensa virou senha.** A lista
   «conceito, mecanismo, processo, metáfora → desenho» vinha antes de «coisa que existe → mídia real»; e a
   trava da [PESQ-31] exigia o motivo na forma «isto não foi filmado». Quem a escreve não tem ferramenta de
   busca, e passou a respondê-la sobre o MECANISMO (que ninguém filma) em vez do SUJEITO da frase: petróleo
   s047, terremotos t-s011, itaipu s26, dias-mais-curtos s11 (o relógio atômico nomeado e filmado). Houve
   afirmação falsa com confiança: os operários do túnel Seikan foram fotografados, e o duto da pirâmide foi
   filmado por um robô em 1993. E a trava «mecanismo em lugar real deve o lugar» era contornada com «o
   registro está na cena vizinha» (itaipu s26 → s11).

**O acervo, medido na `estudio-top10` em 16/set/2026** — 39 espelhos comparáveis de
`gs://geracao-animacoes-prod-renders/out/*/espelho.json` (44 listados; fora 4 compilados e 1 vertical sem
`midia`), com a régua desta lei: **P10 16,9 · P25 23,7 · P50 28,9 · P75 45,0 · P90 53,1**. Os mais baixos:
petroleo 10,6 · ormuz 14,9 · mamute 16,0 · terremotos 16,2 · energia-escura 17,1. Os mais altos: senna 92,0
· rosto-da-formiga 73,8 · putin 73,5. Abaixo de 25: 12 · abaixo de 30: 20 · abaixo de 35: 26. Abaixo de 30
a distribuição é rampa contínua; a única banda vazia da região densa vai de **33,4 a 40,6**.

**A LEI:**
1. **A parcela de imagem do mundo se mede em SEGUNDOS, no vídeo inteiro.** Numerador: cenas de cobertura
   com `midia` `footage|foto|drone`, `modo` fora de `documento|mapa|mapa3d`, e pedido que diz o que buscar
   (`midia_termos` ou `midia_necessidade`). Denominador: o tempo de cobertura, no mesmo recorte dos irmãos
   (fora apresentador, título de tópico, navegação e `anima:false`). Documento e mapa continuam certos onde
   cabem; só não contam como mundo.
2. **O piso é DECISÃO DO MATEUS e mora num arquivo só**, `infra/piso-registro-real.json`. Enquanto `piso`
   for `null`, o gate compara com o RECOMENDADO e avisa sem reprovar; `piso` preenchido sem `decidido_por`
   é recusado (exit 2). Exceção de projeto só ali, com decisor e data. O número recomendado e o porquê dele
   moram no mesmo arquivo — **não se repetem em doutrina nenhuma**.
   ✅ **DECIDIDO em 16/set/2026, por escrito no chat da Holding:** o dono fixou o piso para os espelhos de
   vídeos NOVOS e isentou o `estreito-de-ormuz` («só o que puder»). O número, a citação literal e a
   exceção estão no arquivo — desde então o gate REPROVA abaixo do piso. ⚰️ *O RECOMENDADO que a Holding
   propôs no PR #438 ficou lá marcado como superado: o dono escolheu um piso mais alto que ele.*
3. **O sujeito nomeado pede a imagem DELE; quem prova a ausência é a pesquisa.** O espelho não afirma que
   algo não foi filmado: pede, com o NOME da coisa no termo de busca, e diz na `midia_necessidade` o que
   desenhar se faltar. Mecanismo que acontece num lugar ou objeto real leva as duas camadas **na mesma
   cena**; a cena vizinha não paga a dívida desta. A [PESQ-17] decide a especificidade: nomeado → o
   próprio, ou `FALTA`; classe só quando a fala é da classe; evento datado nunca é classe; hipotético sobre
   coisa real entra como desenho com cara de desenho sobre o real que existe.
4. **O que NÃO muda:** frase sem coisa concreta continua desenho com semente livre; a pesquisa continua sem
   receber ordem de buscar «visualização» de mecanismo; e a trava do dono vale inteira — *«Não quero
   obrigar footages de vídeos onde não caiba»*. O piso é do vídeo; a escolha da cena é do montador.

**O QUE ELA SUPERA:**
- a frase «Maioria desenho é o normal da casa» da [ARTE-94] e «NÃO É "DESENHO DEMAIS", E MEDIR ASSIM DE NOVO
  CUSTARIA O GATE» da [ARTE-99], **só neste ponto**. As duas descreviam o acervo de 02–03/ago e a régua de
  «% de desenho por modo», que de fato não separa o bom do ruim. A fala do dono de 16/set pede mais
  registro real, e a régua desta lei é outra: parcela do mundo em segundos, que põe o vídeo reprovado em
  último. O resto das duas leis continua valendo;
- a regra 2 da [PESQ-31] («o porquê tem forma exata: "isto não foi filmado"»), só na forma. O ônus da prova
  continua sendo da dispensa — mas a prova de ausência passa a ser da pesquisa, não do espelho.

**NÃO SUPERA a PESQ-17 nem a ARTE-140.** Nenhuma pressão por segundos autoriza footage genérico sob
afirmação específica, imagem de outro evento ou rosto fabricado; e onde a relação é espacial, o mapa
continua sendo o palco.

**GATE:** `node scripts/qc-piso-real.mjs <proj> --laudo` — chamado pelo `top10 espelhar` (contratual só com o
piso decidido) e pelas receitas das estações `espelho` (passo 4c) e `decupagem` (passo 8b). Grava
`_laudo-piso-real.json` com os segundos que faltam e as cenas candidatas (heurística de ordenação: pedido
mudo, lugar declarado, nome próprio na âncora, a senha «não foi filmado»).
**PROVA:** `npm run test:piso-real` (19 casos, com o Petróleo e a pirâmide reais reduzidos, e três que
leem a config REAL: a decisão gravada, um espelho novo abaixo do piso REPROVA, o Ormuz abaixo dele sai
ISENTO) e `npm run test:piso-real-mutacao` (21 mutantes, todos mortos, na CÓPIA, com sha256 da árvore
conferido — dois deles apagam a decisão do dono: `piso` de volta a `null` e o Ormuz fora da exceção).
**AGENTE-RAIZ:** `montador` — `.claude/agents/montador.md` §6, §10, §10.1 (travas 1 e 2), §10.4, §13 e
CONTRATO §2.3/§3; roupa `marcas/top10/agentes/montador.md` §1, §2 e §3.1.
**O QUE FICA ABERTO:** (a) ⚰️ ~~o número do piso, que é do dono~~ — FECHADO em 16/set/2026, decidido
por ele (regra 2); (b) o irmão na ENTREGA — este gate mede o
PEDIDO, e cena `desenho` sobre `footage` vale o `dur` inteiro mesmo que o real seja só um fundo; (c) a
ligação no despachante, que só fazia sentido com o número decidido — e desde 16/set ele está; (d) a promoção da regra transferível ao
cérebro (`cerebro/agentes/montador/OFICIO.md`), que exige abstração e revisão próprias.
