> **[porte Regie]** Origem: `top10-estudio/seed/regras/FIN.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Este domínio veio INTEIRO (FIN): lei é citada por ID e o agente precisa achá-la. Onde a lei manda usar VM, bucket, Mac, cascata ou Reuters, vale o princípio, não o comando. `seed/regras/SIS.md` e `seed/regras/REND.md` vieram FILTRADAS (o que é só infra do Top10 está listado por ID no apêndice de cada uma). Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# FIN — montagem, finalização e entrega

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**FIN-01.** CONTEÚDO RECICLADO DO EDITOR NÃO PASSA COMO "MANTER" POR OMISSÃO — decupagem exige VEREDITO ATIVO (lei do
   Mateus, 07/jul — origem: caso real no `lugar-mais-profundo`, o MESMO mapa 3D estático da Geleira Denman
   reaparecendo **5 vezes** em 92s, cada uma só com legenda diferente queimada em cima, e passando batido como
   "manter" porque cada aparição foi classificada isolada como "tem uma imagem ali, ok"):
   • **Detecção de repetição visual agora é AUTOMÁTICA** (dHash perceptual, `src/agent/dhash.mjs`, limiar 20
     empírico) — todo plano da decupagem (`scripts/analisar-video-editado.mjs` → `_analise/segmentos.json`)
     ganha um campo `recorrente` com os índices de outros planos visualmente quase-idênticos. Não depende de
     ninguém "lembrar" ter visto aquele gráfico 4 planos atrás.
   • **`recorrente` não-vazio = PRESUNÇÃO DE `veredito:"trocar"`** em TODOS os planos do grupo. Só foge disso com
     um `motivo` que justifique EXPLICITAMENTE a exceção (ex.: "apresentador falando, ilustração de fundo é
     irrelevante") — nunca "parece ok"/silêncio.
   • **`qualidade` e `veredito` são campos OBRIGATÓRIOS, nunca null num plano já classificado** (schema:
     `contratos/decupagem.schema.json`). `tipo` (o que é) deixou de bastar — precisa da pergunta ativa "isso
     PRESTA pro padrão do canal, ou só está tecnicamente presente?" (qualidade: boa/fraca/genérica).
   • Detalhe do mecanismo + o caso real completo: `knowledge/DECUPAGEM-PRE-EDITADO.md`. Procedimento do montador:
     `.claude/agents/montador.md` §"Classificar a decupagem".

**FIN-02.** CARD DE MEMBRO (CLUBE DE MEMBROS) = SEMPRE UM CARD NOVO COM A ID VISUAL ATUAL + QR CODE, SOBREPOSTO AO ANTIGO
   (lei do Mateus, 10/jul). Todo vídeo com CTA de "vira membro / Clube de Membros" no encerramento ganha um card
   de membro NOVO (nossa identidade visual atual + QR do link de membros) por CIMA do que houver no master.
   - Overlay na track de branding (V4 / _overlays-branding.json), casado com a fala do membro (words.json:
     "membro"/"clube"/"link aqui embaixo" do encerramento). QR local (pip qrcode, ERROR_CORRECT_H) + validado por
     decode (cv2/pyzbar), como a lei do QR de publi. O link de membros vem do Mateus (nao inventar).

**FIN-03.** CARD DE NAVEGAÇÃO/CTA = OVERLAY ALPHA COMPACTO SOBRE O VÍDEO, NÃO FULL-FRAME (lei do Mateus, 11/jul — "'Você está
   assistindo' no meio da tela com fundo vermelho... esses cards e CTAs é tudo pra ser inserido EM CIMA do vídeo, um
   card/MOGRT com design + fundo transparente, com branding, que NÃO ocupe toda a tela"):
   • Card "Você está assistindo X / A seguir Y" e CTAs (Clube de Membros, like/inscreve) = HTML com
     `body{background:transparent}` renderizado `--prores4444` (yuva444p10le, alpha), design compacto (lower-third/
     faixa/canto) com branding, indo na V4 (_overlays-branding.json) SOBRE o vídeo. Nunca full-frame de fundo sólido.
   • ERREI no eua-china (cta-voce-assiste, bumper-voce-assiste-2/3/4, cta-membro full-frame vinho) → refazer overlay.
   • EXCEÇÃO: o CARD DE TÍTULO DE TÓPICO (capa com footage full-bleed + painel translúcido, ARTE-34/ARTE-29) NÃO é isto —
     esse é capa de tema que ilustra, e continua full-bleed. Distinção: título=capa que ilustra; navegação/CTA=overlay
     que informa sobre o vídeo rodando. iBest saiu de vez (lei do corte, `_cortes.json`).

**FIN-04.** SYNC DUAL-SYSTEM É PARTE DA DECUPAGEM — ÁUDIO DO MIC, NÃO DA CÂMERA, E COM OFFSET (Mateus, 12/jul, eua-china):
   O apresentador grava **mic (MONO*.wav) e câmera (C00XX.MP4) em aparelhos que ligam em tempos DIFERENTES**
   (offset de segundos; no eua-china = 15,32s, o mic começou 15,3s depois). Dois erros que isso causa se ignorado:
   • **Áudio errado**: usar o áudio-scratch da CÂMERA em vez do MIC (o bom). O deliverable usa SEMPRE o mic.
   • **Desalinho**: a transcrição/os cortes vêm do MIC (tempo-mic); cortar o VÍDEO com esses tempos SEM somar o
     offset joga todos os cortes pra ~15s errados (sobra claquete, retakes cortados no meio da fala). No vídeo:
     tempo_video = tempo_mic + offset.
   • **Ferramenta (integrada ao pipeline):** `scripts/decupagem/sync-dual-system.mjs <proj> <vídeo> <mic>` acha o
     offset por **cross-correlação de ENVELOPE de energia** (robusto a timbre câmera×mic; forma-de-onda crua dá
     pico falso — no eua-china conf 0,067 vs 0,885 do envelope) → grava `_decupagem/sync.json`. Confiança <0,3 =
     abortar, não adivinhar. O `master-decupado.mjs` faz o MERGE (vídeo + mic deslocado pelo offset) e corta os
     keeps daí = vídeo+mic sincronizados, áudio do mic, 30fps. O decupador (PASSO 0.5) roda isso obrigatório.
   • **Raiz do bug**: eu montei a V1 do eua-china com o áudio da câmera e sem offset, e declarei "pronto". O
     Mateus pegou. Dual-system sync agora é passo fixo da decupagem, não algo a lembrar caso a caso.

**FIN-05.** TIMELINE SEM SOBREPOSIÇÃO DENTRO DE TRILHA — NORMALIZAR É ETAPA FINAL OBRIGATÓRIA (Mateus, 12/jul, eua-china):
   "certifique que as cenas entrem e acabem (inSec e outSec) nos segundos EXATOS." A Premiere NÃO aceita dois
   clips sobrepostos na MESMA trilha (empilha/rejeita). Duas raízes achadas no `retimar.mjs` do eua-china:
   • **Cenas de fundo (V2)**: o re-timing usava `durS` (duração ANTIGA do vídeo renderizado) pro fim do clip.
     Quando a fala ENCURTOU no corte limpo (durNew < durS), a cena ficava longa demais e invadia a próxima
     (britania⇄passar-bastão: 16 frames de sobreposição). **Fix na raiz**: word-locked usa `min(F(durNew),
     F(durS))` — a duração é o span word-locked (durNew), capada no material disponível (durS) pra NUNCA pedir
     frame inexistente (media-offline vermelho no Premiere). Card tem durNew==durS (duração fixa).
   • **Cards overlay (V3/V4)**: cards de duração fixa reposicionados colidem (t1-encerramento CONTIDO no cta-like
     = logo+CTA que DEVEM coexistir em trilhas empilhadas, não na mesma).
   • **Rede de segurança universal** (`scripts/decupagem/normalizar-timeline.mjs`, roda AUTOMÁTICO no fim do
     retimar E do patch-v1): regra puramente GEOMÉTRICA, sem precisar saber card vs cena — dentro de cada trilha,
     sobreposição **PARCIAL** (o de cima acaba depois) → SNAP: encurta o de baixo até encostar (mantém o word-lock
     do INÍCIO; o fim só assenta a animação, cortar frames é imperceptível); **CONTIDO** (o de cima começa depois
     e acaba antes) → PROMOVE pra trilha empilhada nova (é camada real, ex.: logo por cima do CTA). Idempotente.
     Checa também COBERTURA GLOBAL (união de TODAS as trilhas) → buraco = intervalo sem NENHUM clip (a V1 master
     contínua deve cobrir tudo = 0 buracos). Gaps por-trilha NÃO contam (trilha de overlay é esparsa por design).
     No eua-china: 8 snaps + 1 promoção → 0 sobreposição, 50/50 refs, 0 buracos.
   • **Raiz do princípio**: qualquer etapa que mexe em timing (retimar, cold-open, música) pode gerar
     sobreposição; em vez de caçar caso a caso, um normalizador geométrico no FIM do pipeline garante que nunca
     chega sobreposto no Premiere. NUNCA declarar "cenas nos segundos exatos" sem rodar e validar o normalizador.

> **OS 7 DA FINALIZAÇÃO (FIN-06 … FIN-13, ex-leis 97–104 — Mateus 15/jul; agente-raiz: qa-montagem +
> `docs/18-finalizacao.md`).** O 3i-atlas (postado, NÃO refazer) saiu com 7 defeitos de FINALIZAÇÃO ao MESMO
> TEMPO. A infra de cada um JÁ EXISTIA (trilha, transições, CTAs, membros, ProRes, overlays no
> `_overlays-branding.json`) — o que faltava era um GATE que verificasse o COMPOSTO antes de postar. Cada lei
> abaixo conserta um agente-raiz; a **FIN-13** é o gate que torna as outras obrigatórias. Valem daqui pra frente
> (Simpsons em diante).

**FIN-06.** TÍTULO DE TÓPICO NUNCA SAI NARRADO — CARD = SÓ MÚSICA + FOOTAGE (erro real do Mateus, 15/jul — 3i-atlas). O
   3i-atlas foi ao ar com o Bôco LENDO os títulos de tópico em voz alta. O card de título é uma CAPA MUDA (footage/
   foto real do tema + trilha, ARTE-29/ARTE-34) — a voz do apresentador JAMAIS entra nele. Raiz dupla: (1) na edição do
   ZERO (bruto do estúdio) o Bôco LÊ o título e o decupador não removeu/silenciou a leitura; (2) ninguém isolou o
   trecho como card não-narrado. Fix: (a) **decupador** — comparar bruto × títulos do roteiro do Drive e marcar CADA
   leitura de título como span a SILENCIAR (a A-track da narração do título fica muda / trocada por trilha; a janela
   de vídeo permanece pro card). Anotar em `_titulos-mute.json` (ou flag no `_cortes.json`/espelho) pro finalização
   mutar aquele intervalo — NUNCA deixar audível.
   ⚠️ **MECANISMO SUPERADO pela FIN-17 (20/jul): o `_titulos-mute.json` está REVOGADO — nunca teve
   produtor (zero arquivos no disco em 22/jul). O que roda: o corte de título vira FRONTEIRA DE
   BLOCO e entre os blocos fica um GAP de 3s (tela muda) onde o card não-narrado entra. Não se muta
   a janela, corta-se o trecho lido.** O PRINCÍPIO desta lei continua inteiro (título JAMAIS narrado;
   card = capa muda), e o gate (c) abaixo também — ele checa voz do Bôco na janela do card, seja qual
   for o mecanismo. Só a via `_titulos-mute.json` morreu. (b) **montador/editor-de-arte** — o card entra como
   `titulo-topico`/`titulo`, footage+música, não-narrado. (c) **GATE qa-montagem**: em cada janela de card de título,
   a A-track de narração TEM que estar muda (só trilha); título com voz do Bôco = REPROVA. Arquivos: `.claude/agents/
   {decupador,montador,editor-de-arte,qa-montagem}.md`; `knowledge/TITULOS-TOPICOS.md §4-B`.

**FIN-07.** TRILHA POR CAPÍTULO, AMENA, COM DUCKING — COMPOSTO SEM MÚSICA É DEFEITO (erro real do Mateus, 15/jul — 3i-atlas
   saiu MUDO de trilha). Todo vídeo tem CAMA de música: UMA faixa por capítulo/ato (Epidemic, tom BBC/DW), volume BEM
   ameno sob a narração, com corte de faixa nos cards de título. Padrão de mix da casa: ≈−10 dB nos cards de título (a
   música lidera) e ≈−30 dB sob a narração (ducking), rampas ~0,5 s; cold-open sem trilha. Ferramenta PRONTA: curador
   Epidemic → `out/<proj>/_trilha-plano.json` → **`node scripts/finalizacao-config.mjs <proj>`** (remapeia o plano pro
   relógio LIMPO) → **`node scripts/finalizar-youtube.mjs <proj>`** (mixa o ducking no VÍDEO). Raiz: a etapa TRILHA foi
   tratada como opcional — é OBRIGATÓRIA no composto/finalização. GATE qa-montagem: trilha presente do 1º ao último
   capítulo E duckada sob a voz (níveis ~−10/−30 dB); sem trilha ou música alta demais = REPROVA. Arquivos:
   `scripts/estudio/estacoes/trilha.md`; `scripts/finalizar-youtube.mjs`.
   ⚠️ **MECANISMO SUPERADO pela FIN-33 (24/jul):** o `inserir-trilha.mjs`, que gravava os keyframes de volume dentro do
   XML do Premiere, **morreu com o XML** (`arquivo-morto/2026-07-xml-premiere/`). A LEI — cama por capítulo, amena,
   duckada, cold-open mudo — continua idêntica; só o lugar onde ela se materializa mudou de faixa de XML para mix de
   áudio no composto.

**FIN-08.** ZERO FLASH ACIDENTAL DO BÔCO — JANELA DE APRESENTADOR OU É 0 OU É INTENCIONAL ≥2–3 s (erro real do Mateus, 15/jul
   — no 3i-atlas o rosto do Bôco "piscava" <1 s entre quase TODAS as animações = cara de amador). Entre duas animações
   o master (Bôco, V1) NÃO pode vazar numa fresta <1 s. Regra dura: **ou as cenas se ENCOSTAM** (a próxima animação
   começa exatamente onde a anterior acaba, 0 gap → o Bôco não aparece), **ou a janela de Bôco é INTENCIONAL e
   RESPIRÁVEL** (≥2–3 s, distribuída de propósito dentro dos ~10–15% de rosto da decupagem — nunca sobra de timing).
   PROIBIDA qualquer janela de apresentador entre 0 e ~2 s. Raiz: gaps de ms/segundos deixados pela montagem/retiming.
   Fix: o **montador** distribui os respiros do Bôco de propósito (fala direta/gancho/emoção); a normalização
   geométrica no fim do pipeline (`scripts/decupagem/normalizar-timeline.mjs`, FIN-05) COLA as cenas sem gap e reporta
   toda fresta de master 0<dur<2 s pra fechar. GATE qa-montagem: varre a timeline e REPROVA qualquer janela de V1/
   master com 0<dur<2 s entre animações. Arquivos: `.claude/agents/{montador,decupador,qa-montagem}.md`.

**FIN-09.** ⚠️ **SUPERADA NO CODEC PELA [FIN-34]** (24/jul): a entrega é **H.264 MP4 4K de alta taxa**
   e o ProRes virou opt-in — a "qualidade pixelada" que motivou esta lei vinha do canvas em HD com zoom 2×,
   consertado na REND-13. O que CONTINUA valendo aqui é o espírito: **nunca rebaixar a entrega em silêncio**
   — só que o gate agora mede TAXA (≥25 Mbps em 4K), não o nome do codec.

   ENTREGA/COMPOSTO/CENA = PRORES 422 LT SEMPRE, NUNCA H.264 (erro real do Mateus, 15/jul — 3i-atlas finalizado em
   H.264). Qualidade-máxima (REND-08, nunca rebaixar calado): TODO render que COMPÕE a entrega — cenas 4K, composto,
   qualquer master de finalização — sai em **ProRes 422 LT** (10-bit 4:2:2, all-intra, `.mov`; `prores_ks -profile:v
   1`). H.264/HEVC só como PROXY de preview/galeria (descartável) ou no transcode FINAL de upload (o YouTube
   re-comprime — pode-se subir o ProRes direto OU transcodar dele por último). Ferramentas PRONTAS: `render-one.sh
   --prores422lt` (e saída `.mov` já seleciona ProRes 422 LT), ⚰️ `scripts/_render-paralelo-prores.sh` **APOSENTADO**
   em 11/ago/2026 (Mac+Windows — parque que não existe mais; `arquivo-morto/2026-08-capacidade-orfa/`). ⚠️ Com ele
   sai de cena o único LOTE de ProRes: na VM o `_render-4k-loop.sh` produz `-4k.mp4` (e `.mov` só nas cenas alpha).
   Lote ProRes hoje = `render-one.sh --prores422lt` cena a cena. Segue vivo:
   `src/compose.mjs` (default ProRes 422 LT). CUSTO: ProRes é grande (~4–6× o H.264) — ACEITO pela qualidade; a
   política de disco enxuto continua (bucket é storage; apagar local pós-entrega). GATE qa-montagem: `ffprobe` do
   master/cenas de entrega tem que dar `prores`; achou `h264`/`hevc` numa entrega = REPROVA — e desde a FIN-33 isso é
   VERIFICADO, não confiado: `scripts/entregar.mjs` roda o `ffprobe` no entregável e RECUSA promover um H.264.
   Arquivos: `render-one.sh`, `src/compose.mjs`, `scripts/entregar.mjs`, `scripts/estudio/estacoes/render.md`.
   ⚠️ A frase original citava a preferência `<id>-4k.mov` sobre `.mp4` no gerador de XML — que foi aposentado pela
   FIN-33 (`arquivo-morto/2026-07-xml-premiere/`). A preferência continua idêntica no
   `scripts/compor-base-youtube.mjs` (`EXT_PREF`), que é quem monta a entrega agora.

**FIN-10.** TRANSIÇÕES DE MARCA NAS FRONTEIRAS CERTAS — T1 E T2 (erro real do Mateus, 15/jul — 3i-atlas saiu SEM as
   transições). O vídeo leva transições de marca (overlay `.mov` com alpha, na V4) em pontos FIXOS: **T1**
   (`transicao-t1-laminas-alpha.mov`) entre INTRODUÇÃO → capítulo 1 (SEMPRE) e no ENCERRAMENTO; **T2**
   (`transicao-t2-oplay-alpha.mov`) entre capítulos no meio (cap 2→3, 3→4…) e capítulo → PUBLI. Exceção DURA:
   **PUBLI → capítulo NÃO leva transição** (volta seco pro conteúdo). Raiz: as transições estavam CONFIGURADAS no
   `_overlays-branding.json` mas o composto/entrega não as aplicou/exportou — faltava o GATE. Fix: o **montador** marca
   as fronteiras T1/T2 no espelho (alinhadas ao gap de música do card seguinte); o `_overlays-branding.json` as
   materializa — desde a FIN-33, como OVERLAY DE VÍDEO no composto, via `scripts/finalizacao-config.mjs` (que remapeia
   o instante bruto→limpo) + `scripts/finalizar-youtube.mjs`. GATE qa-montagem: confere por visão que T1 abre o cap 1
   e fecha o vídeo, e que CADA fronteira de capítulo (menos publi→cap) tem T2; fronteira sem transição, ou T em
   publi→cap = REPROVA. Arquivos: `assets/branding/README.md`; `.claude/agents/{montador,qa-montagem}.md`.
   ⚠️ **MECANISMO SUPERADO pela FIN-33 (24/jul):** a "track V4 do XML" não existe mais — o gerador foi pro
   `arquivo-morto/2026-07-xml-premiere/`. O plano (`_overlays-branding.json`) e a lei são os mesmos.
   ⚠️ Marca atualizada 31/jul/2026: o XML VOLTOU e as transições vivem na V5 do XML de 5 camadas
   (`scripts/xml-premiere-5camadas.mjs`) — T1/T2 CENTRADAS no corte (regra do Mateus 30/jul: metade antes,
   metade depois). "Alinhada ao gap de música" saiu; "centrada no corte" entrou.
   ⚰️ **ONDE ESTA LEI FOI INVERTIDA, no fim do mesmo dia — ver FIN-45.** O Mateus: *"eu NÃO quero manter
   transição entre tópicos mais, apenas depois de indicação de produto do YouTube shopping."* Tudo o que esta
   lei manda sobre **T1 entre introdução→cap 1, T2 entre capítulos e cap→PUBLI está REVOGADO**; e a "exceção
   dura" dela (PUBLI → capítulo volta seco) virou **o único caso em que a transição existe**. A inversão é
   exata. O que sobrevive da FIN-10: o princípio de que fronteira de marca precisa de GATE (o defeito do
   3i-atlas foi transição CONFIGURADA e não aplicada — isso continua valendo, agora sobre a única transição
   que resta), e o T1 do encerramento, que não é fronteira de tópico.

**FIN-11.** ✅ **CONFIRMADA pelo Mateus em 31/jul/2026, contra uma leitura minha que ia revogá-la.**
   Eu tinha lido as posições que ele deu em 30/jul (intro · 70% · últimos 20s) como se substituíssem o
   sincronismo por menção. Ele corrigiu: *"o CTA deve aparecer quando mencionado SIM. O que eu quis dizer
   sobre os 70% é mais para o ROTEIRO em si, que você deve colocar como meta."* São **duas camadas
   diferentes**, e confundi-las quase apagou uma: o **roteirista** mira as posições (é meta de onde
   ESCREVER a chamada); o **overlay** segue a fala (é onde ela é DITA). O overlay não tem posição
   própria — ele obedece ao roteiro. Onde o Bôco fala, o CTA aparece.
   **FIN-11.** CTA DE LIKE/INSCREVER — INTRO + CADA MENÇÃO DO BÔCO + FIM (erro real do Mateus, 15/jul — 3i-atlas saiu SEM CTA).
   O overlay de CTA (`cta-like-inscreva-alpha.mov` na abertura; `cta-inscreva-so-alpha.mov` no meio/fim) entra: (1) na
   INTRODUÇÃO (padrão de retenção); (2) TODA vez que o Bôco fala "se inscreve" / "deixa o like" / "ativa o sininho" ao
   longo do vídeo — o overlay SINCRONIZA com a fala; (3) no FIM. Raiz: o composto não pôs os overlays de CTA (mesmo
   com o slot de abertura no `_overlays-branding.json`). Fix: (a) o **roteirista-narracao** INCLUI as chamadas de like/
   inscrição na narração (intro + ao longo + fim) e as sinaliza; (b) o **montador** crava um overlay de CTA em CADA
   menção falada + intro + fim no `_overlays-branding.json` (V4), word-locked na fala. GATE qa-montagem: CTA presente
   na intro e no fim, e um em cada menção falada; menção do Bôco sem overlay = REPROVA. Arquivos: `.claude/agents/
   {roteirista-narracao,montador,qa-montagem}.md`.

**FIN-12.** CARD DE MEMBROS NO FIM + LISTA FRESCA A CADA POST (erro real do Mateus, 15/jul — 3i-atlas saiu SEM os membros).
   Todo vídeo FECHA com o card de AGRADECIMENTO AOS MEMBROS (todos os nomes rolando por nível — `scripts/
   gerar-agradecimento-membros.mjs`, overlay sem-bg via `render-alpha.sh`). A lista tem que ser a MAIS RECENTE A CADA
   PUBLICAÇÃO — NUNCA um CSV velho: puxar a **YouTube Members API FRESCA no momento do post** (quando a aprovação do
   `members.list` sair — PENDÊNCIA HUMANA no YouTube); até lá, RE-EXPORTAR o CSV do YouTube Studio → Membros
   imediatamente antes de finalizar (o gerador já pega o `.csv` mais novo de `assets/membros/`, mas o `.csv` precisa
   ser do dia do post). Raiz: card de membros não gerado/anexado + risco de lista defasada. GATE qa-montagem: card de
   membros presente no fim E fonte fresca (API puxada no post, OU `.csv` com mtime do dia da finalização); lista velha
   ou ausente = REPROVA. Arquivos: `scripts/gerar-agradecimento-membros.mjs`. Pendência: aprovação da Members API (humano).

**FIN-13.** FINALIZAÇÃO É UM GATE VISUAL OBRIGATÓRIO — NENHUM VÍDEO SOBE SEM PASSAR (lei-raiz do Mateus, 15/jul — a causa
   COMUM dos 7 erros do 3i-atlas). Os defeitos 97–103 saíram JUNTOS porque a camada de FINALIZAÇÃO COMPLETA nunca foi
   um GATE: a infra de cada um existia, mas ninguém VERIFICAVA o composto final antes de postar. Agora todo composto
   passa pela CHECKLIST DE FINALIZAÇÃO (`docs/18-finalizacao.md`), rodada pelo agente **qa-montagem** (ffprobe/ffmpeg
   determinístico ~80% + visão do Claude nos frames): (1) títulos NÃO narrados; (2) trilha 1/capítulo, amena, duckada;
   (3) zero janela de Bôco 0<dur<2 s; (4) ProRes 422 LT; (5) T1/T2 nas fronteiras certas (publi→cap SEM); (6) CTAs
   (intro + cada menção + fim); (7) card de membros fresco no fim. QUALQUER item reprovado = NÃO SOBE, volta pra
   correção do agente-raiz. A estação `scripts/estudio/estacoes/finalizacao.md` chama o gate ANTES de `entregar.mjs`.
   Arquivos: `.claude/agents/qa-montagem.md`; `docs/18-finalizacao.md`; `scripts/estudio/estacoes/finalizacao.md`.

**[SUPERADA pela FIN-33 no MECANISMO — o PRINCÍPIO continua valendo] FIN-14.** TIMELINE-XML: o ÁUDIO do master TEM
   que ripplar nos MESMOS keep-segments do VÍDEO quando há corte (o
   Mateus apontou 18/jul: "cortou o master mas o áudio não, ficou desconexo"). BUG: o A1 (áudio do master)
   entrava como UM clipe só (`aClip(...,0,bocoDurF,...)` = start=0, dur inteira) enquanto o V1 (vídeo) era
   partido em keep-segments (span do corte fora) → o áudio tocava o trecho cortado (ex.: o CTA iBest) e
   TUDO dessincronizava depois do corte. FIX em `src/timeline-xml.mjs` (~linha 213): quando `cortes.length`,
   montar o A1 com os MESMOS keep-segments do V1 — cada pedaço um clipitem com `<in>/<out>` (source) +
   `<start>/<end>` (timeline rippada via mapSec) + `<sourcetrack>audio</sourcetrack>`. Afeta TODO XML com
   corte no master (herança, ia-fisica — regenerados e re-subidos). Confirmar sempre: nº de segmentos A1 =
   nº de segmentos V1 (ex.: iBest = 2 keeps = 2 clipitems de áudio `boco-a-0/1`).
   ⚠️ O XML morreu em 24/jul (FIN-33, `arquivo-morto/2026-07-xml-premiere/`) e com ele o A1. **O PRINCÍPIO É O QUE
   IMPORTA e vale em todo lugar onde há corte:** áudio e vídeo se cortam no MESMO grafo, com os MESMOS keeps. Onde
   ele vive hoje: `scripts/compor-base-youtube.mjs` (concat único de vídeo+áudio) e `scripts/entregar-tudo.mjs`
   (`ripparAudio`, que aplica os mesmos keeps ao `dub/<lang>.wav` antes de trocar a narração do idioma). Quem
   escrever um caminho novo de áudio e ignorar isto reproduz o defeito de 18/jul num lugar diferente.
   ⚠️ Dupla reviravolta: o XML voltou (26/jul) e virou A entrega (30/jul). O princípio A1=V1 keeps vale de
   novo, agora no XML de 5 camadas (A1 = áudio do master decupado da V1).

**FIN-15.** DECUPAGEM = MASTER FÍSICO ProRes 422 LT, NÃO RIPPLE NO XML (o Mateus, 18/jul: "a decupagem ficou HORRÍVEL,
   está TUDO desordenado no XML... NÃO aplica os cortes usando o XML e sim o FFMPEG, re-renderizando em ProRes
   422 LT com a versão final do apresentador").
   ⚠️ **SUPERADA pela FIN-17 (master em BLOCOS, 20/jul) como DEFAULT.** O master CONTÍNUO de um arquivo só desta
   lei ficou sendo o caminho de FALLBACK — vale pro vídeo que NÃO tem título de tópico lido pelo apresentador.
   Vídeo COM títulos lidos (o caso normal) = master EM BLOCOS. Precedência no `timeline-xml.mjs`:
   `blocosOk` (FIN-17) > `isDecupado` (esta) > keep-segments (FIN-14) > V1 vazia. O DIAGNÓSTICO abaixo (por que o
   ripple-no-XML é ruim) continua valendo integralmente nos dois caminhos. O ripple-no-XML (FIN-04/FIN-14) montava V1 e A1 como 26+26
   keep-segments = ~52 clipitems picotados referenciando o master cru em in/out → no Premiere aparecia
   embaralhado ("desordenado"). FIX-RAIZ: os cortes viram um MASTER CONTÍNUO físico via
   `node scripts/decupagem/master-prores.mjs <proj>` (single-pass ffmpeg `trim/atrim→concat→fps=30`, VÍDEO+ÁUDIO
   cortados JUNTOS no MESMO grafo ⇒ 0 dessincronia possível; encoder `prores_ks -profile:v 1 -vendor apl0` +
   `yuv422p10le` + áudio PCM 48k = 422 LT da FIN-09; saída `out/<proj>/_master.mov`). O `timeline-xml.mjs`
   DETECTA o `_master.mov` (`const isDecupado = existsSync(masterMov)`) e monta V1/A1 como 1 ÚNICO clipe contínuo
   (0→durLimpa) — só animações/cards/branding seguem no `mapSec` (inSec = tempo-master ORIGINAL). O `.mov`
   decupado VENCE o `source.video` bruto e sua duração REAL é sempre re-probada (NÃO subtrai corte de novo:
   `isDecupado ? bocoDurSec : bocoDurSec-totalCorteSec`). Resultado Simpsons: 97→47 clipitems, V1/A1=1 cada,
   531,0s, 0 arquivos faltando. IMPORTANTE: a DECUPAGEM (decisões de corte) em si estava ÓTIMA — ANTES de culpar
   os cortes, auditar a narração limpa reconstruída de `words-limpo.json` (leu coerente ponta-a-ponta); o
   "HORRÍVEL" era a REPRESENTAÇÃO no XML, não o corte. Ripple-no-XML (FIN-14) fica só de FALLBACK quando NÃO há
   `_master.mov`. Disco: o `_master.mov` (~28GB p/ 4K 531s) é local-only reproduzível (fonte = `_master.mp4` no
   bucket + `_cortes.json` + o script) — não subir; o durável é o script/XML.

**FIN-16.** WHISPERX EM BRUTO DE ESTÚDIO SUPRIME RETAKES (repetição ≅ alucinação p/ o decoder) — TRANSCRIÇÃO DE BRUTO
   EXIGE CRUZAMENTO COM SILENCEDETECT (achado do decupador na odisseia, 20/jul). O bruto de estúdio repete as
   mesmas frases (retakes) e o Whisper/WhisperX DROPA blocos inteiros de fala real (na odisseia: 54 buracos,
   ~7,5min sumidos — exatamente onde há retake), o que faria a decupagem cortar narração BOA. FIX de estação
   (ingestão de bruto): (1) rodar `ffmpeg silencedetect` e comparar com os gaps do words.json — gap SEM silêncio
   = fala suprimida; (2) re-transcrever cada janela suspeita ISOLADA (faster-whisper large-v3-turbo local) e
   mesclar; (3) só então decupar. Scribe (quando com cota) sofre menos mas a verificação vale igual. Nomes
   próprios do ASR SEMPRE conferidos contra o ROTEIRO (o doc vence o ouvido: Schliemann/Hisarlik/Alaksandu…).

**FIN-17.** MASTER EM BLOCOS POR CAPÍTULO + DECUPAGEM DE TIMING JUSTO (decisão do Mateus 20/jul: "dividir o master do
   Bôco em várias partes, uma pra intro, uma pro cap1..."; "decupagem 100% no timing de fala, sem tempo vazio,
   mas não picotado"; "título NÃO deve ser lido pelo apresentador → CORTADO na master + tela PRETA sem som no
   trecho, pra bater com a edição"). Em vez de UM master contínuo (FIN-15), o `master-blocos.mjs` gera N BLOCOS
   de fala (`_master-00-intro.mov`, `_master-01-cap1.mov`…) separados pelas fronteiras dos TÍTULOS DE TÓPICO
   lidos (cortes cujo motivo tem "TÍTULO"). Entre os blocos fica um GAP de `--card` (default 3.0s) = tela preta
   muda onde o card de título não-narrado (V3) entra — resolve o título lido no timing exato. Ganhos: (a) o
   título vira gap automático; (b) erro isolado por capítulo (re-gera só o bloco, não 18min); (c) controle no
   Premiere (cada bloco é 1 clipe movível). TIMING JUSTO: uma passada de `silencedetect` (noise=-30dB,
   d=--minSil 0.8) APARA respiros longos internos que sobraram do decupador, mantendo `--respiro` 0.35s
   (encurta, não pica). Saída extra: `_blocos.json` (blocos + tlIni/tlFim + card). O `timeline-xml.mjs` detecta
   `_blocos.json` (`blocosOk`): V1/A1 = N clipes nos tlIni (gaps entre eles), V3 = os N cards nos N gaps EM
   ORDEM (clampados ao gap), e o `mapSec` das animações vira "acha o bloco + offset limpo interno + gaps de card
   antes" (título/corte interno → null). Precedência: blocosOk > isDecupado (1 master.mov) > keep-segments >
   V1 vazia. Cards de título saem em ~3.0s pra casar com o gap. Regra dura: vídeo com títulos de tópico lidos =
   master EM BLOCOS por default.

**FIN-18.** PUBLICAR É UMA CADEIA DE GATES — O ESTÚDIO PREPARA, QUEM TORNA PÚBLICO É O MATEUS (lei destilada em 22/jul do
   que `docs/17-publicacao-youtube.md` e `docs/13-publicacao.md` já mandavam desde 11–15/jul; agente-raiz:
   `curador-titulos-thumbs` + `qa-montagem`; código: `scripts/publicar/`). O fluxo existia inteiro em `docs/` e nas
   `description` dos contratos, mas **sem lei** — e as citações que o apontavam ("leis 96–99", "lei 97/98") caíam em
   leis de ROTEIRO e de FINALIZAÇÃO que nada têm a ver com publicação. Sem lei, o gate vira sugestão. Os SEIS travões:
   • ⚠️ **ESTE TRAVÃO FOI SUPERADO PELA FIN-33 (24/jul): não há mais rota por vídeo.** Era: *"ROTA POR VÍDEO,
     decidida em `out/<proj>/entrega.json`: `premiere` (PADRÃO — timeline XML, V1 = master referenciado; o estúdio
     NUNCA compõe) × `youtube` (composto 4K, a única exceção controlada…)"*. Hoje o estúdio SEMPRE compõe: a entrega
     é o composto 4K, e a exigência de revisão 100% do `qa-montagem` que pagava a "exceção" virou o regime normal.
     Os outros cinco travões abaixo continuam valendo integralmente.
   • **UPLOAD É SEMPRE PRIVADO.** `videos.insert` com `status.privacyStatus = "private"`, sem exceção — o estúdio sobe
     RASCUNHO, nunca público direto. Quem revisa no YouTube Studio e publica é o Mateus. (Casa com o ToS: projeto de
     API não-auditado já força `private`, então o nosso fluxo não tem atrito nenhum com a Google.)
   • **GATE DURO ANTES DO UPLOAD:** o `qa-montagem` revisa o composto **INTEIRO, 100%** (cenas no inSec, publi no
     ponto, QR sem cobrir texto, overlays, sync A/V, Bôco sem flash — FIN-08, sem preto/artefato/banding) e grava
     `gates.qa_montagem = PASS|FAIL`. `upload` **RECUSA** subir sem PASS.
   • **GOSTO É GATE HUMANO, sempre.** Título e thumbnail nunca são decididos pelo estúdio: o `curador-titulos-thumbs`
     pontua no VidIQ, **recomenda 3 títulos** e **gera 15 thumbs**, avisa por Z-API e para. Ele escreve
     `titulos[]`/`titulos_recomendados[]` e **NUNCA** `titulo_final`; a thumb final é escolha do Mateus.
   • **[porte Regie] REGRA DO TOP10, NÃO DESTE CANAL:** lá, o e-mail de contato do Top10 ia em TODA descrição (regra
     permanente dele, e o `youtube.mjs` dele abortava sem). Aqui, o contato da descrição é o do canal
     (`canal.json → contato`), e só se o dono quiser. Capítulos saem da transcrição do vídeo **FINAL** (com a publi
     já embutida), e **a publi NUNCA vira capítulo**: a janela `[at, at+dur]` é pulada e os capítulos seguintes
     deslocam por `publi.dur`.
   • **NADA SOBE "DE CABEÇA":** todo envio é registrado (`out/_publicacoes.jsonl`) e **sem credencial o caminho é
     DRY-RUN, nunca quebra** (vale p/ YouTube OAuth, Z-API e Libsyn). Na rota dos DUBLADOS (Spotify via Libsyn,
     `docs/13`): o 1080p é teto DELES e é downgrade **declarado e logado** (REND-08, nunca calado); idioma sem
     mercado elegível pode publicar pra plantar audiência mas NUNCA entra como argumento de receita; e clipe
     **Reuters** só é redistribuído fora do YouTube depois de conferir se a licença cobre (é por uso — PESQ-14).
   ⚠️ Status de PUBLICADO tem fonte ÚNICA: `out/_ENTREGAS.md` (gerado dos `ENTREGA.json`). Nunca inferir de
   `_fila-*.jsonl`, de `_publicacoes-*.md` nem do estado da pasta `out/<slug>/` — foi o engano de 20/jul.

**FIN-19.** COMPILADO TEMÁTICO: A ORDEM É UM ARCO DE BLOCOS, NÃO A DOS VÍDEOS-FONTE — E CADA TRECHO GANHA UM
   `titulo_novo` (compilado `previsoes-jiang`, 23/jul; agente-raiz: `curador-de-acervo`). Compilado que recompõe
   vários vídeos do MESMO tema seguindo a ordem dos fontes soa como vídeos colados. Ordene por um ARCO DE BLOCOS
   temáticos (ex.: dinheiro → guerra → ordem → colapso social → futuro), com tópicos do mesmo vídeo-fonte espalhados
   por blocos conforme o assunto; a ABERTURA pode FUNDIR duas fontes (a melhor apresentação do tema de um vídeo + o
   melhor enquadramento-do-que-vem de outro), sem T1 entre elas (é uma abertura só). E AQUI você **escreve** um
   `titulo_novo` por trecho — o `assunto` do catálogo é rótulo de arquivo, não card do novo arco —, preservando o
   original em `assunto_orig`. Distinção que resolve a tensão com o OFÍCIO §8: **reuso VERBATIM (filler, vídeo-inteiro,
   tópico-de-lista) NÃO reescreve; recomposição temática reescreve.** O `titulo_novo` segue ARTE-48 (explicativo +
   capitalização de frase formal + **acentuação PT-BR correta, nunca ASCII cru** — Ã/Õ na Neue Haas, CLAUDE.md).

**FIN-20.** AS FRONTEIRAS DO TRECHO REAPROVEITADO NÃO SE INVENTAM: `ini` É CANÔNICO DO CATÁLOGO E `fim` VAI ATÉ O
   **CARD** DO PRÓXIMO TÓPICO (`previsoes-jiang`, 23/jul — MEDIDO: dos 37 trechos definidos à mão, **32 cortavam no
   meio de fala**; agente-raiz: `curador-de-acervo` OFÍCIO §5, cálculo → script). Duas metades:
   • **`ini` = o `ini` do segmento do catálogo.** Os `segmentos[{ini,fim,assunto,gancho,texto}]` do `catalogador` já
     trazem o limite PRECISO de cada tópico. O curador **seleciona segmentos canônicos**, nunca estima timestamp a
     olho; vídeo do nicho sem `segmentos` não é utilizável às cegas (reporte o buraco, não chute).
   • **`fim` = a última frase antes do CARD do próximo tópico.** O `fim` do catálogo marca só o **NÚCLEO**: o
     desenvolvimento continua depois dele. Mas o espaço até o próximo segmento **não é vazio** — é onde moram o card
     de título do próximo tópico, a música e às vezes um CTA. O card se acha como o **gap de fala ≥ 2,5 s** (sem
     nenhuma palavra no `words.json`) dentro dos **~25 s imediatamente antes** do `ini` do próximo segmento.
     ⚠️ Procure o gap SÓ nessa janela: varrer o intervalo inteiro atrás do "maior gap" **truncou um tópico em 72 s**,
     porque uma anomalia de timestamp do `words.json` no começo do tópico ganhou de todos os gaps reais.
   Guarda dura: o ÚLTIMO segmento de conteúdo de um vídeo (sem próximo) NÃO corre até o fim do arquivo — clampe ao
   teto da FIN-26 (`conteudo_limpo_ate`) e à finalização (FIN-21). Depois disto vem o snap por pontuação (FIN-24) e
   só então a limpeza (FIN-25/FIN-23), nessa ordem. É aritmética: pertence a script, não ao julgamento do LLM
   ("não ponha modelo pra fazer trabalho de script"). Gate que confere: `scripts/compilado/validar-reaproveitamento.mjs`.
   ⚠️ **ESTA LEI FOI REESCRITA EM 23/jul e a versão anterior ESTÁ REVOGADA.** Ela mandava
   `fim = ini(próximo segmento do mesmo vídeo)` — o que **engole o card de título, a música e o CTA que moram no gap**
   e foi a causa direta dos cortes sujos. Quem tiver a regra velha na cabeça (ou citada em outro doc): o `ini` do
   próximo segmento é o limite EXTERNO da janela de busca do card, **nunca o `fim` do trecho**. Não confundir com o
   que continua valendo da versão antiga: o núcleo (`fim` do catálogo) segue sendo cedo demais para parar.

**FIN-21.** A FINALIZAÇÃO DO COMPILADO É O ENCERRAMENTO DE UMA FONTE, E NÃO PODE SOBREPOR O ÚLTIMO TÓPICO
   (`previsoes-jiang`, 23/jul — VERIFICADO: fecho `[1351,1394]` encosta na finalização `[1394,1458]`, 0 overlap;
   agente-raiz: `curador-de-acervo`). O CTA de encerramento do canal (like/inscrição/membros) vive nos ~60 s APÓS o
   último segmento catalogado — o catalogador mapeia conteúdo, não encerramento. Reusar o de UMA fonte
   (`finalizacao:true`, sem `titulo_novo`) dá um fecho próprio sem gravar nada. O overlap é o risco: o último tópico
   de conteúdo, pela FIN-20 sem próximo segmento, correria até o fim do arquivo e engoliria a finalização — clampe
   `fim(último tópico) = ini(finalizacao)`. Casa com FIN-10/FIN-17 (T1 no encerramento). ⚠️ **Esta lei trata do
   encerramento NARRADO** (fala reusável). A **cartela visual de créditos de membros** que vem depois dele é outra
   coisa e NUNCA entra em lugar nenhum — é a FIN-26, e o teto dela (`conteudo_limpo_ate`) vem antes deste clamp.

**FIN-22.** COMPILADO: VALIDAR O CORTE BASE (STORYTELLING) ANTES DE GASTAR TÍTULOS/FOOTAGE/CARDS (`previsoes-jiang`,
   23/jul; agente-raiz: `curador-de-acervo` + orquestração). A ordem dos blocos é a decisão CARA de reverter; cards e
   footage são caros de produzir. Entregue em duas ondas: **Onda 1** = corte cru concatenado (só V1+A1, minutos de
   ffmpeg — modo `--corte-base`) para o Mateus aprovar a ORDEM assistindo; **Onda 2** (só após o OK) = `titulo_novo`,
   transições de bloco, cards, footage. Refazer a ordem depois de N títulos+N caças é o retrabalho que esta lei mata.
   É o "aprovação antes do lote" (REND-10/galeria) aplicado ao compilado.

**FIN-23.** COMPILADO DE MATERIAL PUBLICADO VEM SUJO — MICRO-CORTES POR `words.json` SÃO OBRIGATÓRIOS (`previsoes-jiang`,
   23/jul; agente-raiz: `curador-de-acervo`, OFÍCIO §5 + CONTRATO). Todo vídeo já publicado carrega o que servia
   ÀQUELE vídeo e vira ruído no compilado: **(a)** CTA/publi/encerramento embutidos — mas **NÃO se corta tudo: corta-se
   o que DEIXOU DE SER VERDADE** (feedback do Mateus, 23/jul: *"as camisas da Copa TEM que cortar, pois a Copa já
   passou; os demais dos produtos que a gente recomenda mantém normal"*). O teste é de **RELEVÂNCIA TEMPORAL** —
   compare a data de publicação do fonte com a de HOJE: **DATADO/VENCIDO corta obrigatoriamente** (evento que já
   aconteceu, promoção com prazo, lançamento que já saiu, "a Copa tá logo aí" num vídeo de meses atrás — publicar isso
   hoje vende o que não existe mais); **PERENE MANTÉM** (livro indicado, clube de membros, loja com item vigente — é
   receita legítima, cortar é jogar dinheiro fora); **ENCERRAMENTO de vídeo** ("até o próximo vídeo", "um abraço") sai
   do MEIO mas PODE FICAR NO FIM, virando a finalização (FIN-21); **GANCHO pro próximo tópico do FONTE** ("bora ver
   como os EUA abandonam Taiwan") sai sempre, porque no compilado o que vem a seguir é outro e o gancho mente. Isso
   exige que o agente RECEBA a data do fonte e a data de hoje — sem elas ele não consegue julgar o vencimento;
   **(b)** redundância factual — o mesmo dado-âncora reexplicado em cada vídeo
   que toca no tema (a 1ª vez ensina, a 2ª entedia) — lê-se os textos na ORDEM final e corta-se a reexplicação. A
   ferramenta é o timestamp por palavra (`_words/<video>.json`): casa a frase-alvo, pega o `start`/`end`. Guarda:
   você NÃO gera fala nova, recorta a existente; o corte não pode deixar frase pela metade nem colar ideias sem
   respiro; corte no MEIO usa word-lock (in −0,10 s / out +0,35 s, como `acervo/_bordas.mjs`) pra emenda não se
   ouvir. Registre em `microcortes:[{de,ate,motivo}]`. ⚠️ **A limpeza é a ÚLTIMA operação e só ENCOLHE** (FIN-25):
   rodada antes do snap de pontuação, ela é desfeita — o CTA cortado volta. **O piso conta o material LIMPO** (some `(out−in) − Σ cortes`);
   se a limpeza derrubou abaixo do alvo, puxe mais material — nunca devolva o lixo pra bater minutos. `microcortes:[]`
   só vale depois de ter OLHADO o texto; `[]` por não-varrer é defeito.

**FIN-24.** CORTE DE TRECHO ENCOSTA NA **PONTUAÇÃO**, NÃO NO SILÊNCIO (`previsoes-jiang`, 23/jul — MEDIDO: encostando
   no gap, **11 de 34** trechos abriam ou fechavam frase pela metade; com o snap por pontuação, **0 de 35** — conferido
   palavra a palavra contra `_words/vN.json`; agente-raiz: `curador-de-acervo`). Os `words.json` trazem a pontuação
   PRESA à palavra (`"campo."`, `"sério?"`) — use-a. Regra: **o `fim` cai numa palavra terminada em `.`, `!` ou `?`;
   o `ini` é a primeira palavra DEPOIS de um fim-de-frase.** Por que o gap não basta: o apresentador respira no MEIO
   da oração, então um silêncio de 0,5 s é tão provável dentro da frase quanto entre duas — gap mede fôlego, pontuação
   mede sentido. Vale para toda fronteira de reuso (compilado, filler, tópico-de-lista), não só para o temático. O
   gate `scripts/compilado/validar-reaproveitamento.mjs` reprova ponta com frase aberta.

**FIN-25.** A ORDEM DAS OPERAÇÕES DE FRONTEIRA É CANÔNICO → SNAP → LIMPEZA, E **DEPOIS DA LIMPEZA NADA AVANÇA O `fim`**
   (`previsoes-jiang`, 23/jul — BUG REAL: o snap rodou DEPOIS do corte de CTA e, procurando a melhor pausa numa janela
   que permitia AVANÇAR, **reintroduziu CTAs já cortados** — voltaram o anúncio da Copa, a indicação do livro e o "não
   esquece de deixar o like"; agente-raiz: `curador-de-acervo`). A ordem é: **(1)** selecionar o segmento canônico
   (FIN-20) → **(2)** snap por pontuação (FIN-24) → **(3)** corte de CTA/redundância (FIN-23). Regra dura: **a limpeza
   é a ÚLTIMA operação, e só ENCOLHE** — recua o `fim`, avança o `ini`, nunca o contrário; nenhum ajuste roda depois
   dela. O sintoma de ordem invertida é diagnóstico: **um CTA que você já cortou reaparece no texto final.** Corolário
   da mesma monotonicidade: dois trechos do MESMO fonte nunca se sobrepõem — se o `fim` de um passou do `ini` do
   seguinte, o snap avançou demais e a correção é RECUAR (aconteceu: 1,16 s de fala repetida na emenda, achado pelo
   gate, não pelo ouvido). Generaliza além do compilado: **toda cadeia de refinamento com um passo de remoção põe a
   remoção por último** — senão o passo seguinte desfaz o que ela tirou.

**FIN-26.** A CARTELA DE CRÉDITOS DE MEMBROS É UM TETO DURO — DETECTA-SE POR IMAGEM E NUNCA ENTRA NO COMPILADO
   (`previsoes-jiang`, 23/jul — feedback do Mateus: *"antes disso tem uma parte imensa de finalização de cada vídeo que
   fica rodando com nome dos membros, ISSO DEVE SER CORTADO também… você tem que saber exatamente quando um tópico
   começa e termina, e saber quando a finalização já começou"*; agente-raiz: `curador-de-acervo` OFÍCIO §5d). Todo
   vídeo do canal fecha com 20–40 s de nomes de membros rolando — conteúdo zero. Ela **não está no catálogo** (o
   catalogador mapeia conteúdo) e **não se acha pelo texto** (quase não tem fala): a assinatura é VISUAL — a metade
   DIREITA da tela vira azul-forte e PERMANECE. Ferramenta: `node scripts/compilado/detectar-finalizacao.mjs
   <fonte.mp4>` (amostra 1 fps a metade direita reduzida a 8×8, marca os blocos azuis contínuos e devolve o **ÚLTIMO**
   bloco ≥ 10 s) → `{finalizacao_inicio, creditos_fim, conteudo_limpo_ate}`. Regra: **`fim` de QUALQUER trecho ≤
   `conteudo_limpo_ate` daquele fonte**, e o resultado fica gravado em `finalizacao_detectada` no
   `_reaproveitamento.json` (prova de que rodou). VALIDADO contra frames reais: v1 `1327,1→1353,1`, v2
   `1384,2→1396,2`, v3 `1403,2→1444,2`. ⚠️ Não confundir com FIN-21: lá é o encerramento **NARRADO** ("até o próximo
   vídeo"), que PODE virar o fecho do compilado; aqui é a cartela **visual**, que nunca entra. Um segundo a mais e o
   compilado exibe os créditos de outro vídeo no meio do seu. Por que ferramenta e não olho: são 3+ fontes por
   compilado e a fronteira é de frame — medição barata, julgamento caro.

---

**FIN-27.** UM TRECHO REAPROVEITADO NÃO É UMA CENA, E COMPILADO NÃO GERA TÓPICO NOVO — ELE GERA *USO*
   (decisão do Mateus, 23/jul: *"um trecho reaproveitado não é uma cena. Um compilado não precisa ser cortado bloco a
   bloco, como os vídeos puramente novos — nem os compilados que serão incluídos nos vídeos de 20 min pra darem 30 min.
   Só o que é novo efetivamente deve virar um novo ativo de tópico. Mas os compilados existem e são reais, logo devem
   ainda ser mapeados, de forma diferente"*; agentes-raiz: `catalogador` (repo `conteudo/`) e `curador-de-acervo`).
   **O ativo nasce uma vez, do vídeo que o produziu.** Reaparecer — num compilado, ou como o filler que completa um
   vídeo de 20 min até o piso de 30 — é **USO**, registrado no ledger `topico_uso`, nunca ativo novo. Consequências
   duras: (a) o `catalogador` **não segmenta compilado** — segmentar cria tópicos que competem com o original e o
   curador oferece como novidade o que já foi ao ar; (b) um trecho **dentro** de um compilado nunca é novo, **mesmo
   quando não se acha a fonte** — "não sabemos" ≠ "é novo", e inventar ativo contamina o ledger; (c) o compilado
   **continua inteiramente mapeado**, só que por reconhecimento: `top10 acervo sync` casa a narração por n-gramas de
   9 palavras contra todo o acervo, em ordem cronológica — quem publicou primeiro é o dono. **Custo zero de
   inferência: é casamento de texto, trabalho de script.** Por que não classificar por TÍTULO: ele mente nos dois
   sentidos — medido em 23/jul, "1 HORA DE CURIOSIDADES" é compilado e um vídeo de **19 min** era regravação de um
   anterior (73% de reuso); 27 vídeos do acervo eram reaproveitamento sem anunciar. É isto que torna respondível o
   pedido *"faz um compilado de 3 h de vídeos que nunca foram compilados"* — e os verbos são **`top10 acervo
   montar --horas=3 [--tema=X]`** (PROPÕE o compilado, na saída no formato `_reaproveitamento.json` que o pipeline já
   consome: agrupa por vídeo-fonte para não quebrar o fio, respeita o `fim_teto` e abre bloco pelo gancho) ·
   **`livres`** (lista o que está livre) · **`sync`** (re-projeta do bucket; rode quando o acervo crescer) ·
   **`registrar <proj>`** (grava o ledger do compilado que NÓS montamos — o `entregar.mjs` já chama sozinho na
   promoção, com `metodo='declarado'`). ⚠️ **Capacidade que ninguém sabe que existe é capacidade morta:** estes verbos
   nasceram e o `curador-de-acervo` continuou sendo instruído a parsear o `catalogo.jsonl` na mão — o ofício dele
   (§8.0) e o contrato agora mandam começar pelos verbos. Ao construir capacidade nova, o passo final é **ligá-la a
   quem a usa**, não só documentá-la no plano.
   ⚠️ **Ao rankear por retenção, use `relativeRetentionPerformance`, não `audienceWatchRatio`** — o segundo decai
   sempre (0,98 no início → 0,30 no fim), então ordenar por ele elege a ABERTURA de todo vídeo: mede posição, não
   qualidade. E a `posicao` da curva vem em FRAÇÃO (0,01–0,99), não em porcentagem: a primeira versão do cálculo
   comparou 0–100 contra 0–1, deu retenção só para os trechos que começavam em zero, e o ranking saiu plausível e
   errado. Resultado que parece razoável não é resultado verificado.

---

**FIN-28.** O ERRO ENGRAÇADO DO APRESENTADOR **NÃO SE CORTA** — ELE FICA EM **P&B, DENTRO DO CAPÍTULO ONDE ACONTECEU**;
   E O CORTE PASSA A GRAVAR A **CLASSE** DO MOTIVO, PRESERVANDO O DESCARTADO
   (decisão do Mateus, 24/jul, textual: *"os erros P&B devem entrar naturalmente junto com o capítulo onde ele brincou,
   e não ser algo à parte… é algo que ele deve fazer ao decupar o capítulo em si"* · *"o corte grava o motivo e preserva
   o recuperável — o julgamento leve×sério é do agente, mas o dado tem que sobrar"*; agentes-raiz: `decupador`
   (OFÍCIO §1/§9b + CONTRATO §2.1) e `montador` (a proporção de tela)). Três decisões que se sustentam:
   • **O JULGAMENTO É LEVE × SÉRIO, e é do agente.** PRESERVA quando as duas coisas valem juntas: reação genuína (riu de
     si mesmo, autocorreção divertida, comentário espontâneo) **e** contexto **leve**. CORTA quando é (a) erro/retake
     comum, sem graça, **ou** (b) riso que cai em assunto **sério** — morte, tragédia, doença, crime. O mesmo riso que
     cria vínculo numa curiosidade sobre pinguim destrói a credibilidade em cima de um naufrágio. Na dúvida sobre a
     gravidade, **corta**: perder um beat bom é barato, rir sobre desgraça custa o vídeo. Um ou dois por vídeo — cinco
     vira esquete e queima o efeito.
   • **O P&B ENTRA ONDE ACONTECEU, não num bloco de bastidores.** O span preservado é fatiado DENTRO do bloco do
     capítulo (`scripts/decupagem/master-blocos.mjs` + `master-decupado.mjs`, via `fatiarPB` em `src/cortes.mjs`) e
     ganha `hue=s=0`. Provado em 24/jul num master sintético: `SATAVG` cai de 112,9 para **0,000** exatamente no frame
     360 e volta a 112,9 no 510 — fronteira frame-exata, durações de bloco 15,000 s e 35,000 s conforme o cálculo.
     ⚠️ Janela de P&B que invade uma fronteira de título ABORTA a montagem: ali vira gap com o card por cima, e o
     momento seria preservado e invisível.
   • **`_cortes.json` deixou de ser só "corte": cada span tem `classe`** (`silencio|erro|retake|riso-leve|riso-serio|
     titulo|outro`) ao lado da prosa do `motivo` — o mesmo motivo em duas línguas, uma para o humano da revisão e outra
     para a máquina. `classe:"riso-leve"` ⇒ `manter:true` + `tratamento:"pb"`, e `lerCortes()` devolve `{cortes, pb}`:
     quem consome `.cortes` (timeline-xml, master-*, compor-base, gates) continua correto **sem saber que a categoria
     existe**, porque o trecho preservado simplesmente não aparece como corte. RETROCOMPATÍVEL e medido: os 7 projetos
     com `_cortes.json` no disco leem **bit-a-bit igual** ao de antes (span a span, mesmo total em segundos).
   • **O DESCARTADO SOBRA.** `aplicar-cortes.mjs` grava `_cortes-removidos.json` com span + classe + motivo + **o texto
     removido**. O local é cache e o bruto é apagado depois da entrega: sem esse derivado, rever um corte semanas
     depois exige rebaixar o master do bucket e re-transcrever. É derivação determinística, custo zero — e é o que
     autoriza o agente a JULGAR com convicção em vez de cortar por segurança, porque decisão errada com o dado salvo
     não é irreversível.
   • ⚠️ **A ARMADILHA DA PROSA:** `timeline-xml.mjs` e `qc-espelho-fala.mjs` ainda detectam a fronteira estrutural por
     regex no `motivo` (a palavra "título"). Enquanto não migrarem para `eTitulo()`, um span `classe:"titulo"` com
     prosa que não diz "título" sumiria do XML como corte comum e a leitura voltaria narrada — o `aplicar-cortes.mjs`
     cobra a redundância. **Regra geral: ao trocar detecção-por-prosa por campo estruturado, o gate que cobra a
     redundância nasce junto, e só morre quando o último consumidor legado migrar.**

**FIN-29.** ⚠️ **SUPERADA PELA [FIN-35]** — o alvo subiu de ~20% para **~35%** por recomendação do próprio
   YouTube ao Mateus (reunião de 24/jul). O resto desta lei — entrar ONDE CABE, nunca por cima da explicação,
   e a faixa ser gate duro — continua valendo, só o número mudou.

   O APRESENTADOR OCUPA **~20% DA TELA** (era ~15%) — E ENTRA **ONDE CABE**, NUNCA EM CIMA DA EXPLICAÇÃO
   (decisão do Mateus, 24/jul: *"o Bôco pode subir para ~20% de tempo de tela (era ~15%). E ele tem que entrar onde
   cabe e já prevendo pra não ocupar uma parte importante da explicação"*; agente-raiz: `montador`, que é quem escreve
   o espelho — `marcas/top10/agentes/montador.md` §2). Supera a meta de 10–15% que vivia na roupa do `montador` e do
   `decupador`. **Faixa aceita: 16–24%**, e agora é GATE DURO: `node scripts/qc-tempo-apresentador.mjs <proj>`, ligado
   em `top10 qc out/<proj>`.
   • **Por que ±4 pp e não menos:** o `dur` do espelho é PLANO, não medição, e o tempo do apresentador é o
     **complemento** da união das cenas que animam — ele absorve todo arredondamento de duração. Medido em 24/jul nos
     5 projetos de espelho íntegro, o complemento fica **0,9–3,3 pp** acima da soma explícita de `modo:"apresentador"`
     (média 2,1): faixa menor que ±3 pp dispararia pelo método de medição, não pela edição. **Por que não mais:** 16%
     é onde a meta antiga terminava (abaixo disso está o vídeo estéril que a subida veio consertar) e acima de 24% o
     rosto ocupa explicação que devia ser arte.
   • **A medida é o COMPLEMENTO, em tempo MONTADO** — não a soma dos `modo:"apresentador"`, que ignora buraco sem cena;
     e descontando os cortes, porque na edição do zero o `inSec` corre no relógio da GRAVAÇÃO (medir sem descontar
     inflou o número em 43,6% em média). **Complemento muito acima do declarado (>6 pp) NÃO é "muito apresentador", é
     COBERTURA FALTANDO** e o gate diz isso em vez de mandar consertar a coisa errada: medido em 24/jul, `ia-fisica`
     dava 42,2% de complemento contra 7,4% de declarado (espelho furado, já conhecido), e `heranca-sem-herdeiros`
     33,3% contra 22,1%.
   • **"Onde cabe" virou sinal determinístico:** trecho em que a narração despeja dado (número, porcentagem, ano) é
     lugar de ARTE — dado falado sem gráfico é explicação descoberta. O gate ALERTA (nunca reprova) quando uma janela
     de Bôco cobre **3+ tokens numéricos**; calibrado nos 4 projetos com `words.json`, a janela mais carregada que
     existe hoje tem 2, então o piso não dispara em nada legado.
   • **Estado do disco em 24/jul** (o gate é novo, os espelhos são antigos): passam `terras-raras-rs` (16,0%) e
     `publi-opera` (19,9%); ficam abaixo `simpsons-copa` (15,1%), `buracos-negros-predios` (15,7%) e
     `homossexualidade-antiguidade` (10,1%); estouram por espelho furado `heranca-sem-herdeiros` (33,3%) e `ia-fisica`
     (42,2%). Escopo de correção é **do presente para frente** — vídeo entregue não se refaz por isto.

**FIN-30.** GRAVAÇÃO EM VÁRIAS PARTES SE RESOLVE POR CONTEÚDO, NÃO POR NOME NEM POR HUMANO (Mateus, 24/jul:
   *"Não precisa avisar um humano. O nosso agente tem que ser capaz de resolver autonomamente: transcrever os dois
   wavs, e transcrever uns 60 segundos de um mp4 pra verificar qual áudio pertence a ele... tendo a transcrição de
   ambas as partes é só ver o que foi falado, identificar de qual parte do roteiro tá falando, e definir qual vem
   primeiro e qual vem depois."*; agente-raiz: o watcher da estação 0). O apresentador às vezes sobe a gravação em
   2 mp4 + 2 wav. Ordenar por NOME falha: "Acre (2).MP4" ordena antes de "Acre.MP4", e emendar trocado destrói o
   vídeo. Pedir a um HUMANO viola a autonomia da estação. **A verdade está no conteúdo:** `ordenar-partes.mjs`
   transcreve um trecho curto (~60-90 s) de cada parte, **pareia** mp4↔wav pelo texto falado no começo
   (similaridade de 5-gramas) e **ordena** os pares pela posição do texto no ROTEIRO — quem fala o começo do roteiro
   vem primeiro. Custo: transcrição de trechos, não das gravações inteiras. O watcher chama isso **sozinho** só
   quando a ordem é ambígua (nome sem número) ou vídeo×áudio têm contagens diferentes — o caso de 1 parte, que é a
   maioria, não paga nada. **Único caso que ainda escala pra humano:** quando o próprio conteúdo não distingue as
   partes (confiança de pareamento baixa em todas) — aí adivinhar seria pior que perguntar.

**FIN-31.** O SYNC DUAL-SYSTEM MEDE O OFFSET DE VERDADE — NUNCA ASSUME ZERO (auditoria de 24/jul confirmando a
   FIN-04; sem feedback novo, é a prova de que a lei está honrada no código). Auditei o `sync-dual-system.mjs`: ele
   **não** presume que câmera e mic começam juntos. Acha o offset por **cross-correlação de ENVELOPE de energia**
   (robusto ao timbre diferente de câmera×mic; a forma-de-onda crua dá pico falso — no eua-china conf 0,067 vs 0,885
   do envelope), grava `offsetVideoMenosMic` + `conf` em `_decupagem/sync.json`, e **aborta com `--min-conf=0.3`**
   quando não tem certeza, em vez de emendar no escuro. `tempo_no_video = tempo_no_mic + offset`. Se o vídeo não tem
   áudio-scratch da câmera para correlacionar, ele **para e pede sync manual** — não inventa. A lei estava cumprida;
   esta entrada existe para que a próxima auditoria não refaça o trabalho de descobrir isso.

**FIN-32.** A FOLHA DE EMENDAS DO COMPILADO É UM GATE, NÃO UM PASSO MANUAL (reforma do QC, 24/jul; agente-raiz:
   `curador-de-acervo` + `qa-montagem`). As 9 lentes do `qc-visual` miram CENA ANIMADA — um compilado não tem nada
   disso: é emenda de vídeo REAL + card + T1, e o risco dele é outro, todo MECÂNICO. `scripts/compilado/qc-emendas.mjs`
   (ligado em `top10 qc <compilado>`, que detecta o `_reaproveitamento.json` e roda ISTO no lugar da varredura de cena)
   confere o determinístico e **gera a folha de emendas**: **(1) ARCO** — `n` contíguo, bloco não reaparece (A→B→A soa
   como vídeos colados e faz a T1 disparar duas vezes), `titulo_novo` presente (FIN-19); **(2) EMENDA AUDÍVEL** — nenhuma
   palavra do `words.json` atravessa o corte além do recuo declarado (a SANGRIA do `in_pad` é aritmética: o Scribe
   entrega palavras coladas, então recuar 0,1 s quase sempre inclui a cauda da anterior — 6 dos 35 trechos, sempre <
   `in_pad`, é o contrato funcionando, não defeito; passar do pad é que reprova, FIN-24); **(3) T1** só na MUDANÇA de
   bloco e cabendo nos dois trechos que ela cobre 50/50; **(4) CARDS** — todo tópico tem card, o card CABE no trecho
   (não fica na tela quando o próximo começa) e **não foi renderizado pela metade** (achado real: 5 dos 34 cards do
   `previsoes-jiang` tinham 7–30 frames onde deviam ter 240 — o overlay entra e some antes de dar pra ler); **(5)
   DURAÇÃO** real × declarada, e o mp4 montado × a soma do plano (o vídeo no disco É este plano?). A **fronteira
   canônica** (ini/fim, pontuação, teto de créditos, overlap) tem dono e ele NÃO a reimplementa: delega a
   `validar-reaproveitamento.mjs` (FIN-20/24/25/26). O que régua nenhuma pega — **lower-third/título antigo da fonte
   reaparecendo quando o card sai**, emenda visível — a folha materializa como FRAMES reais (`graphics/emendas-contatos.html`)
   para o olho julgar. Estágio importa: numa PROPOSTA (`top10 acervo montar`, sem `montagem`) só arco e contabilidade
   bloqueiam; emenda/T1/card/folha só existem depois da montagem — cobrar deles quem não entrou em campo é alarme falso.

**FIN-33.** ⚰️ **SUPERADA em 30/jul/2026** — o Mateus decidiu: o composto MORRE e a entrega volta a ser o XML
   (agora de 5 CAMADAS — ver FIN-45 e docs/registro/PIPELINE-REVISAO-2026-07-30.md §1.1). ✅ A pendência que esta lei
   protegia — como os 5 idiomas saem no MESMO horário sem composto, que era a razão de negócio dela — foi
   RESPONDIDA pelo Mateus em 31/jul/2026: **PT-BR sai por XML (ele edita), dublados saem por composto
   automático**, herdando a arte que ele já aprovou. O composto não morre: vira a rota dos idiomas. Ver FIN-45.
   O ESTÚDIO ENTREGA **VÍDEO**, NÃO PROJETO DE EDIÇÃO — O TIMELINE XML DO PREMIERE MORREU (decisão do Mateus,
   24/jul/2026, decretada: *"o fim do XML já decretei, deixa encaixotado como lógica histórica, em outro lugar, e
   construa o que precisamos pra renderizarmos com ferramentas próprias"*). **SUPERA a rota `premiere` da FIN-18** e o
   MECANISMO (não o princípio) das FIN-07/FIN-10/FIN-14 e da FIN-09 na parte que citava o XML.
   • **O PORQUÊ é de negócio, não de gosto.** O canal publica em cinco idiomas e o Mateus quer *"todos os vídeos
     saindo no mesmo horário em todos idiomas"*. XML só vira vídeo quando um humano abre o Premiere, e ninguém abre
     cinco Premieres ao mesmo tempo: enquanto a entrega fosse um projeto de edição, o gargalo de publicação seria
     sempre uma pessoa e o internacional viveria atrás do BR.
   • **A rota é UMA.** Acabou a escolha `premiere` × `youtube` por vídeo (`entrega.json`). Entregável = o composto 4K
     **ProRes 422 LT** (FIN-09), promovido pra `entregas/<ano>/<slug>/video/`. O `entregar.mjs` PROVA o codec com
     `ffprobe` e RECUSA H.264 — proxy nunca é entrega.
   • **A ORDEM É OBRIGATÓRIA e mora em um comando.** `top10 finalizar <proj>` = gate espelho×fala → planos (branding +
     trilha) → manifest/inSec/contrato → **ponte plano→config** → composto-base → finalização → **gate do laudo
     (FIN-13)** → entrega. Antes cada peça existia SOLTA e funcionava: quem seguia o verbo oficial gerava XML sem
     trilha, sem CTA e sem laudo. Capacidade construída e não ligada é o defeito nº 1 desta casa.
   • **A PONTE É O DETALHE QUE MORDE — dois relógios.** Os planos (`_overlays-branding.json`, `_trilha-plano.json`,
     `_cards-titulo.json`) falam em tempo **BRUTO** (o relógio do master/`words.json`); o composto vive em tempo
     **LIMPO** (pós-ripple de `_cortes.json`). `scripts/finalizacao-config.mjs` remapeia com o `mapSecFactory` de
     `src/cortes.mjs` — a MESMA função que posiciona as cenas. Copiar número de um relógio pro outro põe a transição
     adiantada pela soma dos cortes anteriores, e ninguém vê até estar montado.
   • **DEPOIS DA APROVAÇÃO, o encadeamento vai até o fim:** `top10 entregar-tudo <proj>` faz PT-BR + cada idioma
     (tradução de tela pelo agente → render → composto com `graphics-<lang>` → dub **rippado nos mesmos keeps** →
     finalização) e imprime a MATRIZ de prontidão. Tradução é do agente (`tradutor-de-tela`/`tradutor-de-narracao`):
     onde a vez é de inferência, o script PARA e escreve o comando exato — e retoma na próxima chamada.
   • **RETOMADA É LEI aqui também:** composto/finalização que já existem são PULADOS (`--refazer` força). Re-encodar
     11 GB à toa é hora de máquina que outra sessão está esperando.
   • **O histórico NÃO foi apagado:** `arquivo-morto/2026-07-xml-premiere/` guarda o gerador, o `_deliver`, o
     `inserir-trilha`, o `compor-previa` e os re-timadores, com o `LEIA.md` explicando o que faziam e como
     ressuscitar. E `entregar.mjs --xml=<path>` continua promovendo entrega ANTIGA: morreu a GERAÇÃO de XML novo,
     não a leitura dos que existem.
   ⚠️ **LACUNA DECLARADA (FIN-17):** o `compor-base-youtube.mjs` concatena os keeps sem inserir os GAPS de card do
   master em blocos. Nenhum projeto no disco usa blocos hoje (medido em 24/jul: zero `_blocos.json`), e o
   `finalizar.mjs` AVISA alto quando encontra um. Quem for produzir com blocos fecha isto antes.
   Arquivos: `scripts/{finalizar,finalizacao-config,entregar-tudo,compor-base-youtube,finalizar-youtube,entregar}.mjs`;
   `arquivo-morto/2026-07-xml-premiere/LEIA.md`.

**FIN-34.** ⚠️ O OBJETO desta lei (composto H.264 como entregável) foi superado em 30/jul/2026 junto com a
   FIN-33. O ESPÍRITO segue: proxy não é entrega, taxa se MEDE — o gate de taxa migra para as peças do XML
   (clipes V2 + master V1).
   A ENTREGA É **H.264 MP4 4K DE ALTA TAXA**; O PRORES VIROU OPT-IN (decisão do Mateus, 24/jul: *"o
   ProRes não é imprescindível, ele era uma solução que eu tomei por conta de qualidade, mas acho que o problema
   da qualidade pixelada era do canvas do Chrome que criava em HD e tinha zoom 2x"*). **SUPERA a FIN-09** no
   ponto do codec. **Ele estava certo, e a causa foi confirmada:** o ProRes entrou em 15/jul para resolver
   "qualidade pixelada", mas a causa real era o canvas nascendo em HD com zoom 2×, consertado em **REND-13**
   (palco 4K nativo, 21/jul). Curado o canvas, o ProRes passou a proteger uma imagem que **já nasce nítida**.
   **O QUE ISSO CUSTAVA, medido em 60 s do corte-base 4K real e extrapolado para os 62 min do compilado:**

   | formato da entrega | tempo de encode | tamanho final |
   |---|---|---|
   | ProRes 422 LT | ~117 min | **134 GB** |
   | H.264 crf 14 `medium` | ~87 min | **6,4 GB** |
   | H.264 crf 16 `medium` | ~46 min | 5,1 GB |

   **21× de disco** por uma precisão que o YouTube descarta na primeira recompressão. O padrão passa a ser
   **H.264 crf 14, `preset medium`, yuv420p, bt709** (`--prores` devolve o master editorial quando alguém
   precisar montar por cima).
   ⚠️ **O GATE MUDOU DE PERGUNTA, e é a parte que não pode se perder:** o `entregar.mjs` recusava por CODEC
   (`if (!/^prores/)`), e o erro que a FIN-09 nasceu para impedir — o 3i-atlas entregue em H.264 — não era "ser
   H.264", era **ser um proxy magro**. Codec não é qualidade; **taxa é**. Agora o gate exige **≥25 Mbps em 4K**
   (o composto real dá ~14 Mbps; um proxy de galeria fica abaixo de 10), então um proxy continua sendo recusado
   e a entrega legítima passa. **Regra geral:** quando um gate proíbe um NOME para impedir um DEFEITO, ele
   erra nas duas direções assim que o nome deixa de implicar o defeito — meça o defeito.


**FIN-35.** ⚠️ **SUPERADA NO NÚMERO PELA [FIN-47] (31/jul/2026): a faixa voltou para 10–15%, alvo 12%,
   com 15% de MÁXIMO** — decisão do Mateus (*"quero MUDAR isso novamente, e voltar para 10-15%, no
   máximo"*). O que desta lei **continua valendo**: o apresentador entra ONDE CABE, nunca por cima da
   explicação; a faixa é gate DURO; e ela não é retroativa ao que já está montado. O que **caiu**: os
   30–40%. ⚠️ Não copie o número de nenhuma das duas — a faixa vigente mora em
   `infra/faixa-apresentador.json`, e foi justamente a cópia à mão que criou o problema que a FIN-47
   registra. O texto abaixo fica como HISTÓRIA da decisão de 24/jul.
   O APRESENTADOR SOBE PARA **~35% DE TEMPO DE TELA** — RECOMENDAÇÃO DO PRÓPRIO YOUTUBE (Mateus, 24/jul:
   *"hoje tive uma reunião com o pessoal do YouTube e eles me recomendaram a inserir mais o apresentador em tela,
   então quero aumentar os 20% para 35%"*). **SUPERA a FIN-29 no número**; tudo o mais dela segue: o apresentador
   entra **onde cabe**, nunca por cima da explicação, e a faixa é **gate duro**.
   **Nova faixa: 30–40%** (mantém o ±5 pp de folga que a FIN-29 justificou — o tempo do apresentador é o
   COMPLEMENTO da união das cenas que animam, então ele absorve todo arredondamento de duração do espelho).
   **Agente-raiz: `montador`**, que é quem escreve o espelho e decide o que vira cena e o que fica no apresentador.
   ⚠️ **VALE PARA PRODUÇÃO NOVA, NÃO PARA O QUE JÁ ESTÁ MONTADO** — o Mateus foi explícito: *"isso é detalhe para
   os demais vídeos, não para este compilado em si"*. Compilado é reaproveitamento do que já foi ao ar: a proporção
   dele vem dos vídeos originais e não se reescreve sem refazer o corte. **Corolário geral:** meta nova mira o
   pipeline **daqui para frente**; aplicá-la retroativamente ao que já está montado é refazer trabalho entregue —
   o mesmo princípio de "erro achado no que já saiu se crava, não se refaz".
   **Como verificar:** `node scripts/qc-tempo-apresentador.mjs <proj>` (a faixa dele precisa ser atualizada p/ 30–40).

**FIN-36.** A TIMELINE É O EDITOR, E O RENDER **OBEDECE** — EDIÇÃO HUMANA VIRA ARQUIVO, NÃO INTENÇÃO (Mateus,
   25/jul: *"a minha timeline tem que ser super fiel ao que será renderizado no final, tipo: não adianta nada eu
   aplicar um desacelerar e na render final isso ficar de fora"*). **O que havia:** a timeline era um
   VISUALIZADOR — o `espelho.json` mandava e ela mostrava. Qualquer controle de mover/encurtar/desacelerar ali
   seria **mentira**, porque o render lê o plano e ignoraria. E controle que mente é pior que controle ausente:
   o humano confia, revisa, aprova, e o defeito aparece no arquivo final.
   **A REGRA:** a edição humana mora em `out/<proj>/_edicao.json` e é o **DELTA** — só o que o humano mudou em
   relação ao plano, nunca uma cópia dele. Por quê: assim o Fable pode refazer a cena e o montador reescrever o
   espelho **sem apagar os ajustes do dono**. É a diferença entre editar o documento e anotar o documento.
   ⚠️ **UM DONO APLICA, SEMPRE: `scripts/edicao.mjs`.** A timeline e o render chamam a MESMA função. Se cada um
   interpretasse o arquivo por conta, divergiriam — e a divergência apareceria só no vídeo final, que é o pior
   lugar do pipeline para descobrir qualquer coisa. É o mesmo princípio dos DOIS RELÓGIOS da finalização
   (`finalizacao-config.mjs`): aritmética duplicada diverge por desenho.
   **O que a edição alcança hoje:** `inSec` (mover), `dur` (encurtar/esticar a janela), `velocidade` (`setpts` no
   ffmpeg — 0,5× desacelera de verdade e a janela cresce sozinha), `oculta` (sai do render sem apagar arquivo) e
   `nota` (o porquê, que sobrevive para quem ler depois). **Gravação atômica** (tmp + rename), porque a timeline
   salva a cada arrasto e um render lendo escrita parcial veria JSON quebrado.
   **Como verificar:** grave uma edição e confirme que a timeline E o render enxergam o mesmo —
   `curl -X POST localhost:8777/api/edicao -d '{"v":"<proj>","slug":"<cena>","campos":{"velocidade":0.6}}'` e
   depois `node scripts/compilado/compor-blocos.mjs <proj>` deve logar `✎ N cena(s) com edição humana`.

**FIN-37.** O VÃO DE UM DÉCIMO DE SEGUNDO ENTRE CENAS FAZ O **MASTER PISCAR** — E NENHUM GATE POR-CENA O VÊ
   (Mateus, 25/jul: *"quero que você tenha o máximo de cuidado pra que entre as cenas não fique um espaço vazio
   (tela preta ou master do Bôco) que era um bug que tava acontecendo de aparecer ele por menos de 1 seg"*).
   **DE ONDE VEM:** o plano diz onde a cena entra (`substitui_plano_em`), mas quem manda no fim é a duração
   **real** do mp4. Quando o render sai alguns frames mais curto que o planejado, o fim descola do início da
   próxima e o que está embaixo — o apresentador — aparece na fresta. Medido no `compilado-previsoes-jiang`:
   1 vão de **0,100 s** em 75 cenas. Invisível em qualquer planilha, gritante na tela.
   **POR QUE NENHUM GATE PEGAVA:** cada cena, isolada, está perfeita — duração certa, render íntegro, contrato
   válido. O defeito só existe na **relação** entre duas cenas, e todo gate olhava uma de cada vez. É a família
   "cada peça passa, o conjunto falha", e ela exige um verificador que olhe o vizinho.
   **O CONSERTO É NA MONTAGEM, não na disciplina:** `compor-blocos` costura sozinho, antecipando a cena seguinte
   até encostar na anterior (teto **0,4 s**). Antecipar usa material que já existe; esticar exigiria congelar o
   último frame, que é remendo visível. O custo é deslocar o word-lock da próxima pelo tamanho do vão —
   desprezível em 0,1 s (2,5 frames), inaceitável em 1 s. **Vão acima do teto é DENUNCIADO, nunca adivinhado**:
   pode ser respiro editorial deliberado, e costurá-lo em silêncio seria decidir montagem por conta própria.
   **Sobreposição também é reportada** (duas cenas no ar, a de cima cobre a de baixo): não pisca, mas é render
   pago que ninguém vê. **Como verificar:** `node scripts/qc-vaos.mjs <proj>`

### FIN-38 · A FIN-35 não é retroativa — e compilado está FORA do escopo dela
**Decisão do Mateus (26/jul/2026):** *"Não vou querer que os 3 que já foram feitos sejam refeitos,
deixa o apresentador como foi feito e consertamos nos novos mesmo."*
**O contexto:** a FIN-35 subiu o tempo de apresentador de ~20% para **~35%** (faixa dura 30–40%) em
24/jul. Ao pendurar o gate no `top10 espelhar`, os três projetos pendentes reprovaram — todos com o
espelho escrito ANTES da lei: `homossexualidade-antiguidade` 10,1% · `senna` 15,1% ·
`avioes-pequenos` 10,7%. Re-espelhar significaria **descartar arte já feita**, que é ativo pago, e o
núcleo é explícito: *escopo de correção é do presente para frente*.
**A regra:** a faixa vale para todo espelho escrito **a partir de 24/jul**. Os três anteriores estão
numa lista **fechada e datada** em `infra/faixa-apresentador-anterior.json`.
**⚠️ ISENÇÃO, NÃO AFROUXAMENTO — a diferença é o que mantém o gate útil.** Baixar o alvo ou alargar
a tolerância para "caber" os três faria a faixa parar de proteger justamente quando acerta. E a lista
**não cresce**: projeto novo que reprova conserta o espelho; acrescentá-lo ali transformaria a
exceção em porta dos fundos e mataria a FIN-35 sem ninguém revogá-la.
**⚠️ O gate continua MEDINDO e dizendo o número — só não reprova.** Silenciar a medição junto com o
veredito esconderia a dívida. `--sem-isencao` mostra o que a faixa diria.
**E COMPILADO ESTÁ FORA DO ESCOPO, o que é escopo e não exceção.** Medido: `compilado-previsoes-jiang`
deu **100% de Bôco** — o número certo, o veredito errado. Num compilado o que existe entre as cenas
novas não é o apresentador narrando: é **vídeo publicado sendo reaproveitado, com a arte que já
tinha**. A proporção daqueles trechos foi decidida quando aqueles vídeos foram feitos. Reprovar ali
mandaria "cobrir com arte" o que já está coberto — e gate que pede o impossível é ignorado em duas
semanas. Detecção estrutural e verificável: existe `_reaproveitamento.json`, logo é compilado.
**Como verificar:** `node scripts/qc-tempo-apresentador.mjs <proj>` devolve PASS, `▲ ISENTO` ou
`▲ FORA DE ESCOPO` — e reprova qualquer espelho novo fora de 30–40%.

**FIN-39.** A FRONTEIRA DE CAPÍTULO MORA NO ESPELHO, NÃO NO SILÊNCIO DO ÁUDIO — e um vídeo COM capítulo
   e SEM T1 ia à entrega em 26/jul. O `branding/overlays.mjs` só materializava T1/T2 a partir de
   `_blocos.json`, que o `master-blocos.mjs` deriva de SILÊNCIO no áudio bruto. Medido em
   `homossexualidade-antiguidade`: o master-blocos devolveu **"18 cortes · 0 títulos (fronteiras)"** —
   nenhuma —, o overlays gerou **ZERO transições** e imprimiu um aviso que ninguém lê. O
   `_overlays-branding.json` tinha **2 itens, ambos CTA**. O vídeo seguia para o composto sem T1 e sem
   T2: **o mesmo defeito que a [FIN-10] existe para matar e que já custou o 3i-atlas em 15/jul.**
   ⚠️ **As fronteiras existiam, num lugar melhor.** O espelho tinha **5 CARDS DE TÓPICO**
   (`s08-titulo-1-…`, `s17-titulo-2-egito`, `s23-titulo-3-grecia`, `s43-titulo-4-roma-china`,
   `s58-titulo-5-pecado`). **Card de tópico É a fronteira de capítulo por definição** — é a peça que
   anuncia o capítulo ao espectador. Derivar dela é fato gerado; esperar que a detecção de silêncio
   acerte é aposta, e ela erra em vídeo de narração contínua, que é o formato mais comum do canal.
   **Fix:** o `overlays.mjs` usa `_blocos.json` quando existe (é mais rico: tem nome de bloco e
   publi) e cai para os CARDS do espelho quando não. Resultado medido no mesmo projeto: 2 → **8
   overlays**, com T1 @73,5s (intro→cap 1), T2 @189,6/284,3/634,0/789,4s e T1 @962,9s (encerramento).
   **A regra geral:** *nunca ZERO transições num vídeo que tem capítulo.* Se o gerador não achou
   fronteira, ele está olhando na fonte errada — não é o vídeo que é contínuo.
   **Raiz do lado do agente:** a FIN-10 manda o **montador** marcar T1/T2 no espelho, e o espelho
   deste vídeo não tem nenhum campo de fronteira (chaves: `ancora`, `anima`, `dur`, `id`, `inSec`,
   `midia`, `modo`, `motivo`, `needs`, `tese`, `titulo`). Enquanto o montador não marcar, o fallback
   é a única defesa — e por isso ele existe no código, não na disciplina de quem roda.
   **Como verificar:** `node scripts/branding/overlays.mjs <proj>` tem de imprimir ≥1 T1; e o
   `finalizar --ate=config` não deve listar "T1/T2 (FIN-10)" nas LACUNAS.

**FIN-40.** DUAS ARMADILHAS QUE MATARAM AS TRANSIÇÕES **DEPOIS** DE EU AS CONSERTAR (26/jul, no mesmo
   dia da [FIN-39] — o laudo do `qa-montagem` provou por visão que nenhuma lâmina estava no vídeo).
   **1 · A GUARDA DE FALLBACK É `< 2`, NÃO `!length`.** Escrevi o fallback da FIN-39 com
   `if (!blocos.length)` e ele **nunca rodou**: o `_blocos.json` existia com **um único bloco
   degenerado** (`{n:0, nome:"00-intro", titulos:[]}`), porque o `master-blocos.mjs` não achou fronteira
   de título e devolveu o vídeo inteiro como um bloco. Com `length === 1` a guarda deu falso, o fallback
   foi pulado, e o laço de fronteiras (`i < blocos.length - 1`) fez **zero iterações**.
   **A lição vale para toda guarda de fallback:** o caso degenerado não é a lista VAZIA, é a lista
   **curta demais para o uso**. Aqui são necessários 2 blocos para haver 1 fronteira — logo a condição é
   `< 2`. Testar `!length` protege do vazio e deixa passar o inútil.
   **2 · O CLAMP VAI NO VALOR QUE É CONVERTIDO, NÃO NO QUE O ORIGINA.** A transição começa meia duração
   ANTES da fronteira, para ficar centrada nela. Medido: a fronteira do card 4 estava em **634,8s, FORA**
   do corte 573,0–634,6 — mas o `inSec` (634,8 − 0,75 = **634,05**) caía **DENTRO**, e é o `inSec` que o
   `mapSec` converte. Clampar a fronteira não movia nada; clampar o `inSec` move. Fronteira dentro de
   corte é empurrada para o primeiro instante keep (+0,05s), e o script **diz em voz alta** que moveu.
   **Por que isso é traiçoeiro:** `mapSec` devolve `null` para instante que não existe no vídeo limpo, e
   o overlay desaparecia **sem uma linha de erro**. Foi preciso um humano-máquina olhando 16 frames nas
   6 fronteiras para descobrir.
   **Como verificar:** `node scripts/branding/overlays.mjs <proj>` imprime `↻ transição em Xs caía
   DENTRO de corte — movida para Ys` quando corrige, e o total de transições nunca pode ser 0 num vídeo
   com card de tópico.

**FIN-41.** REDE DE SEGURANÇA QUE MORA NO CAMINHO DESATIVADO NÃO PROTEGE NINGUÉM — a proteção da
   [FIN-08] ficou ÓRFÃ por 2 dias e ninguém percebeu (26/jul). O `qa-montagem` achou **16 frestas de
   0,40 a 1,32 s** entre cenas consecutivas do `homossexualidade-antiguidade`, com talking-head visível
   em todas (conferido em 9 frames) — o limiar da casa é 0,3 s.
   **A causa não é do vídeo, é do pipeline.** A rede contra gap/sobreposição é o
   `scripts/decupagem/normalizar-timeline.mjs`, e ele **só aceita XML do FCP7**
   (`Uso: normalizar-timeline.mjs <arquivo.xml>`). O XML do Premiere morreu na [FIN-33] em 24/jul. Ele
   continuou referenciado pelo `finalizar-youtube.mjs` e **não podia rodar — não existe XML para dar a
   ele.** No caminho novo só havia `Math.min(end, next.inClean - 0.05)`, que impede invadir a próxima
   cena e **ignora o buraco**. Resultado: desde 24/jul nenhum vídeo teve proteção contra fresta.
   **A regra, que vale muito além deste caso:** ao matar uma ROTA (formato, ferramenta, integração),
   **a lista de coisas a portar não é a das features — é a das PROTEÇÕES**. Feature morta dá erro e
   alguém conserta; proteção morta fica silenciosa e o defeito volta a passar. Quem aposenta uma rota
   tem de inventariar o que ela protegia.
   **O conserto, no `compor-base-youtube.mjs`:** gap ≤ `GAP_MAX` (0,3 s) é DEFEITO e a cena anterior
   **estica** até encostar na seguinte. Esticar a anterior — e não antecipar a seguinte — preserva o
   `inSec` que o espelho cravou, e é ele que sincroniza arte com fala (antecipar quebraria word-lock).
   Gap ≥ `RESPIRO_MIN` (1,5 s) é respiro editorial e não se toca. **E a zona cinza entre os dois é
   reportada em voz alta**, porque ali o apresentador VAI aparecer e só o montador sabe se é
   intencional — mesma distinção da [REND-43].
   **Como verificar:** `node scripts/compor-base-youtube.mjs <proj> --dry` imprime
   `↻ N fresta(s) de apresentador FECHADA(S)` e `▲ N fresta(s) na ZONA CINZA`. Provado no
   `avioes-pequenos`: 1 fresta fechada, 65/77 cenas com clipe.

---

**FIN-42.** ⚠️ **A TESE VALE; A MEDIÇÃO QUE EU USEI PARA PROVÁ-LA ESTAVA NO RELÓGIO ERRADO** (corrigido em
26/jul, algumas horas depois de eu escrever isto — quem me pegou foi um `qa-montagem`).

> **O que está errado abaixo:** a tabela "11 vãos com 77–100 % de fala · 5 com exatamente 0 %" saiu de comparar
> instante **LIMPO** contra palavra em tempo **BRUTO**. O `words-limpo.json` é limpo de *palavras cortadas*, não
> de *relógio* — medi e confirmei nos dois projetos ativos: `homossexualidade-antiguidade` tem a última palavra
> em **982,356 s** contra `cleanDur` de **665,915 s**; `avioes-pequenos`, **1703,798 s** contra **1370,575 s**.
> No relógio certo a cobertura daqueles 11 vãos é **0–11 %**: são pausas entre frases. E a visão fecha o caso —
> **5 de 5 frames mostram o Bôco em tela cheia**.
>
> **Consequência real, não acadêmica:** os 11 vãos que este gate classificou como "talking-head deliberado" e
> **deixou abertos** são 11 piscadas do apresentador, e elas foram entregues no vídeo. O erro é silencioso por
> construção: comparar relógios diferentes devolve uma fração plausível entre 0 e 1, nunca um erro.
>
> **A tese continua de pé** — vão se julga pela FALA, não pela duração, e fechar vão não toca o áudio. O que
> caiu foi a *evidência* da bimodalidade. O conserto está no `compor-base-youtube.mjs`, trazendo cada palavra
> para o relógio limpo com o **mesmo `mapSec`** que posiciona as cenas (usar outra conta é como o bug renasce).
> Uma sessão paralela portou isso e referenciou uma `FIN-44` que ainda não existia — **agora existe**
> (escrita em 31/jul/2026, generalizando o defeito): toda medição de DISTÂNCIA passa por `mapSec` antes
> de comparar.
>
> **A lição que fica maior que a lei:** eu escrevi no código *"mesmo relógio LIMPO dos vãos"* como afirmação, e
> foi essa frase que impediu qualquer um de olhar para lá. *Comentário que declara um invariante sem medi-lo
> vira o próprio esconderijo do bug.*

**O ENUNCIADO ORIGINAL, preservado para o histórico** — leia com a ressalva acima:

**↳ ENUNCIADO ORIGINAL DA FIN-42, superado pela ressalva acima** — A **DURAÇÃO** DO VÃO NÃO DIZ SE ELE É DEFEITO, **A FALA DIZ** (26/jul, medido no
`homossexualidade-antiguidade`, e corrige a zona cinza que eu mesmo inventei na [FIN-37]/[FIN-41]).

A [FIN-37] separava fresta (≤0,3 s, defeito) de respiro (≥1,5 s, deliberado) e chamava o meio de "zona
cinza — decisão do montador". Isso transferia para o humano um julgamento que **é medível**. Medi os 16
vãos de 0,3–1,5 s deste vídeo contra `words-limpo.json` (mesmo relógio LIMPO dos vãos) e a distribuição
veio **bimodal, sem meio-termo nenhum**:

| vãos | fala dentro | o que é |
|---|---|---|
| 11 | 77–100 % | o apresentador está FALANDO — talking-head legítimo |
| 5 | **exatamente 0 %** | ele aparece MUDO por 0,46–1,10 s — piscada |

**Não existe vão em 40 %.** O limiar de duração errava nos DOIS sentidos: acusava as 11 batidas boas
(alarme falso, o defeito que faz desligarem o gate — [ARTE-77]) e deixaria passar os 5 defeitos reais se
alguém o afrouxasse para calar o alarme.

**A chave que torna a régua automática:** fechar um vão **não toca o áudio**. A narração continua
idêntica; só muda se o espectador vê a arte da cena anterior ou o apresentador *enquanto ouve o mesmo
som*. Sendo decisão puramente visual, dispensa humano: **mudo = fecha, falando = respeita.**

**O mecanismo, conferido em frame e não deduzido:** eu afirmei que `eof_action=pass` revelaria a base ao
fim do clipe, logo esticar `end` não fecharia nada. **Errado** — `overlay` tem `repeatlast=1` por
padrão, e o frame extraído em 50,40 s do composto mostra a arte do `s07` segurada, não o apresentador.
Cuidado colateral que sobra: se a cena acaba em fade-out, o frame segurado é escuro. Ainda é melhor que
o corte para o apresentador calado — e é por isso que existe `SEGURA_MAX` (1,5 s): acima dele segurar
vira congelamento, e aí o conserto é no espelho, esticando a cena.

**Como verificar:** `node scripts/compor-base-youtube.mjs <proj> --dry` imprime, por vão, o motivo
medido — `MUDO (0% de fala)` para o que fecha e `✓ N vão(s) RESPEITADO(s)` para o que fica.

---

**FIN-43.** GARANTIA DE DISTÂNCIA FEITA EM TEMPO **BRUTO** É NULA DEPOIS DO RIPPLE — e constante que
descreve arquivo é ficção (26/jul, dois bugs empilhados no mesmo sítio).

Achei **duas CTAs na tela ao mesmo tempo por 1,5 s** lendo o filtro do PASS A: `cta-membro` em
657,02–665,02 s e `cta-inscreva-fim` em 663,52–666,52 s. O de-duplicador existia e não viu. Por três
razões que só a terceira é estrutural:

1. **O regex cobria só `cta-(like|inscreva)`** — a família `cta-membro` estava fora da comparação.
2. **O `T_MEMBRO` era empurrado DEPOIS do laço de âncoras** — mesmo com o regex certo, a ordem sozinha
   garantia a falha. (Bug de ordem de execução, irmão do [SIS-34].)
3. **A comparação era início-contra-início, com `DUR_CTA = 4.5`** — e 4,5 s **não é a duração de nenhum
   ativo**: `cta-like` tem 6,0 s, `cta-membro` 8,0 s, `cta-inscreva-so` 3,0 s (ffprobe). O
   `finalizar-youtube.mjs` já usava a duração REAL no filtro, então quem decidia espaçamento raciocinava
   sobre um vídeo que não existe. *Fato gerado vence fato escrito: `dur` sai do ffprobe do arquivo.*

**E o achado que vale mais que os três:** consertado tudo isso, em tempo BRUTO o plano ficou correto —
membro acaba em 984,0 s e o fim começa em 985,7 s, 1,7 s de folga. **A colisão nasce no remap.** Um
corte mora entre os dois instantes, o ripple **encurta a distância**, e 1,7 s de folga em bruto viram
0,3 s de sobreposição em limpo.

Ou seja: **o ripple não só desloca posições, ele comprime distâncias.** Toda validação de *distância*
— colisão, espaçamento, densidade, cadência — tem de rodar no relógio em que o espectador vê. O plano
continua falando bruto (é o contrato); quem valida distância aplica `mapSec` antes de comparar.

**Corolário anti-descarte:** de-duplicação que só remove transforma "redundante" em "ausente" sem
ninguém ver. A âncora posicional existe para garantir que *haja* um CTA na região, não para ser ela
mesma — então depois do dedup o gate confere **cobertura por REGIÃO** (a intro tem CTA? o fim tem?) e
reprova se ficou vazia. Aqui o descarte foi legítimo: o fim já tinha `cta-like-abertura` + `cta-membro-1`.

**Como verificar:** `node scripts/branding/overlays.mjs <proj>` imprime `↺ N CTA(s) descartado(s) por
cruzar com…` e fecha com `✓ FIN-11: intro coberta (…) · fim coberto (…)`, com `exitCode=1` se faltar.

---

**FIN-44.** O RELÓGIO LIMPO É O ÚNICO EM QUE SE MEDE DISTÂNCIA — e cada estação que compõe tem de
aplicar `mapSec` ANTES de comparar dois instantes (a lei que a FIN-42 citou e que ninguém tinha
escrito; formalizada em 31/jul/2026).

A FIN-43 já dizia isto para o caso dela; a FIN-42 descobriu o mesmo defeito num segundo lugar e
apontou para uma "FIN-44" inexistente. **A referência órfã é o sintoma**: duas sessões acharam a
mesma família de bug e nenhuma tinha onde pendurá-la. Aqui é o lugar.

**O enunciado geral:** o plano fala em tempo **BRUTO** (é o contrato — `words.json`, espelho,
`_cards-titulo.json`, `_trilha-plano.json`, `_overlays-branding.json`). O espectador vive em tempo
**LIMPO** (pós-ripple dos `_cortes.json`). Entre os dois há uma função, `mapSec` de `src/cortes.mjs`,
e ela **não é linear**: além de deslocar posições, ela **comprime distâncias** — 1,7 s de folga em
bruto viram 0,3 s de sobreposição em limpo quando há corte entre os dois pontos.

**Portanto, qualquer estação que responda a uma das perguntas abaixo tem de converter primeiro:**
"isto colide?", "há espaço aqui?", "estão longe o bastante?", "cabe nesta janela?", "este vão é
mudo?". Comparar dois números brutos para responder a qualquer uma delas dá resposta plausível e
errada — e plausível é o que faz ninguém olhar.

**Como não errar de novo:** use SEMPRE o `mapSecFactory` de `src/cortes.mjs`, o mesmo que posiciona
as cenas. Recalcular a conversão por conta própria "porque é simples" é exatamente como o bug
renasce — foi assim nas duas vezes.

**A lição que ficou maior que a lei (da FIN-42, e vale para o repo inteiro):** um comentário no
código que **declara** um invariante sem medi-lo vira o esconderijo do bug. *"Mesmo relógio limpo
dos vãos"* estava escrito ali, era falso, e foi a frase que impediu qualquer um de olhar.

---

**FIN-45.** A ENTREGA É O XML DE 5 CAMADAS — e o composto sobrevive só onde não há humano
(decisão do Mateus, 30–31/jul/2026; supera a FIN-33).

O estúdio deixou de entregar um MP4 achatado e passou a entregar **o vídeo desmontado**, para o
Mateus fazer a pós no Premiere. As camadas, e o que cada uma é:

| | conteúdo | fonte |
|---|---|---|
| **V1** | o Bôco decupado — sem erro, sem pausa | `_media/_master-decupado` — **ProRes 422 LT** (H.264 long-GOP arrasta no scrub em 4K) |
| **V2** | as cenas 4K, cada uma no instante em que entra | `graphics/*-4k.mp4` |
| **V3** | o CTA do Clube, sem fundo | `cta-qr-clube-alpha.mov` |
| **V4** | o logo de posição — entra em 0 e vai até o fim | `posicao-logo-branca-4k-RECRIADA.png` |
| **V5** | as transições | T1/T2 |
| **A1** | a voz | do master decupado |
| **A2** | a trilha, com os abaixamentos já como keyframes | `_trilha-plano.json` remapeado (FIN-07 + FIN-44) |

**As duas regras de transição, ditadas por ele:**
1. **Centrada no corte** — *"50% antes do clipe anterior e 50% no próximo, exatamente no meio"*.
   Para uma virada em `T` e transição de duração `D`: começa em `T − D/2`.
2. **A transição existe SÓ na saída da indicação de produto** (YouTube Shopping) de volta ao
   conteúdo. Virada de tópico comum → **corte seco**. Correção do Mateus em 31/jul/2026, no mesmo
   dia: *"eu NÃO quero manter transição entre tópicos mais, apenas depois de indicação de produto do
   YouTube shopping."*

   ⚠️ **Isto INVERTE a regra anterior**, e a inversão é exata: o único ponto onde antes a transição
   era proibida (a volta da publi) é agora o único onde ela existe. A leitura editorial por trás
   disso: **a transição separa o comercial do conteúdo — não separa tópicos.** Quem separa tópico é
   o card de título, que já faz esse trabalho; empilhar transição em cima dele era redundância.
   Consequência prática: um vídeo com uma única indicação de produto tem **uma** transição. Isso é o
   esperado, não um defeito de geração.

**A pergunta que a FIN-33 protegia, e a resposta que o Mateus deu (31/jul):** o composto existia
porque permitia entregar **5 idiomas no mesmo horário sem ninguém no Premiere**. Com o XML, cada
idioma passaria a exigir o Mateus, o que o transformaria no gargalo que o Bôco deixou de ser. A
divisão decidida:

- **PT-BR sai por XML** — ele edita, porque é onde o controle fino importa;
- **os dublados saem por composto automático** — eles herdam a arte **já aprovada** por ele no
  PT-BR e só trocam narração e tela traduzida; não há decisão criativa nova a tomar.

**E a ordem de trabalho que ele definiu inverte o instinto** (31/jul/2026): *"precisaremos refinar
bem o composto dos idiomas com testes; se ficar perfeito, adaptamos o PT-BR — mas vamos primeiro
deixar perfeito o composto testando com os demais idiomas."*

Ou seja, **o composto dos dublados é o laboratório, não o subproduto.** A razão é boa: é o caminho
onde errar custa menos (o vídeo já foi aprovado em PT-BR, a arte já passou pelo olho dele) e onde o
volume de repetição é maior — quatro idiomas por vídeo dão quatro chances de achar o defeito. Quando
o composto automático estiver bom o bastante ali, a pergunta *"o PT-BR ainda precisa passar pelo
Premiere?"* volta à mesa com evidência, em vez de com opinião.

**Consequência para o QC:** o `qa-montagem` **não perde o objeto composto** — ele continua auditando
o composto de cada idioma, e é lá que a bancada de 9 lentes segue rodando por inteiro. O que muda é
que ele ganha um segundo objeto (o XML e suas peças), não que troca de objeto.

**Consequência para quem for desligar o caminho do composto:** ele **não se desliga** — vira a rota
dos idiomas. E, pela FIN-41, as proteções que moram nele (vãos, fala-no-vão, distância de CTA,
o gate do laudo) têm de existir também no caminho XML antes que alguém confie nele.

---

**FIN-46.** O CARD DE MEMBROS/AGRADECIMENTO NÃO É FRONTEIRA DE CAPÍTULO — e contá-lo empilha duas
transições no mesmo instante (29/jul, `lago-peigneur`).

> 🔀 **Esta lei nasceu numerada `FIN-45` numa sessão paralela, na VM** (29/jul), enquanto a sessão do
> Mac dava o mesmo número à *"entrega é o XML de 5 camadas"* (30–31/jul). A do Mac ficou com o número
> porque já estava no remoto e é citada pela [FIN-33], pela [FIN-41] e por `knowledge/roteiro/SHOPPING.md`;
> esta virou **FIN-46** na integração de 31/jul. Se algum texto antigo da VM citar "FIN-45 · card de
> membros", é **esta** lei. A causa está na [SIS-62].

A [FIN-39] deriva as fronteiras de capítulo dos CARDS do espelho quando não há `_blocos.json`, com o
filtro `/titulo-\d/.test(id) || /^CARD\b/.test(titulo)`. Esse `/^CARD\b/` é largo demais: casa também o
**"CARD DE MEMBROS — agradecimento"** (o outro no fim do vídeo, `s70`). Como esse card é a ÚLTIMA cena,
ele vira um capítulo de largura **zero** (`ini == fim == inSec da última cena`) e, pior, o laço de
fronteiras gera **duas transições no mesmo segundo**: `T2 cap_último→cap_degenerado` e
`T1 cap_degenerado→encerramento`, ambas no `inSec` do card de membros. Medido: em tempo LIMPO as duas
caíam **exatamente em 894,14 s** — duas wipes de branding no mesmo frame, glitch bem em cima do
agradecimento aos membros. No `escolher.mjs` o mesmo card injeta um capítulo `faixa:null` inócuo (a
ponte pula), mas no `overlays.mjs` o dano é visível.

**Só card de TÓPICO/TÍTULO delimita capítulo.** O de membros/agradecimento é outro, não ato. O filtro
ganha a exclusão `&& !/membros|agradec/i.test(id + " " + titulo)` — cirúrgica, mantém a detecção de
todos os "CARD DE TÍTULO — PARTE N" e legados. Aplicada nos DOIS lugares que derivam fronteira de card:
`scripts/branding/overlays.mjs` e `scripts/trilha/escolher.mjs` (a derivação está duplicada; se um dia
virar helper único em `src/`, é lá que a exclusão mora).

**Como verificar:** `node scripts/branding/overlays.mjs <proj>` deve imprimir `derivei N fronteira(s)`
com N = número de capítulos REAIS (7, não 8, no `lago-peigneur`), e nenhuma transição pode compartilhar
`atSec` no `_finalizacao-config.json` (`t.atSec` únicos após o remap).

### FIN-47 · O APRESENTADOR VOLTA PARA 10–15%, COM 15% DE MÁXIMO — e a faixa passa a ter DONO ÚNICO
**Decisão do Mateus (31/jul/2026):** *"o nosso pipeline estava prevendo 30-40% do apresentador em
tela, e quero MUDAR isso novamente, e voltar para 10-15%, no máximo."*

**SUPERA a [FIN-35] no número** (e com ela o ramo FIN-28/FIN-29): alvo **12%**, faixa dura
**10–15%**, e o **15% é teto, não centro de tolerância** — foi o lado que ele nomeou. O resto da
FIN-35 segue de pé: o apresentador entra **onde cabe**, nunca por cima da explicação, e a faixa é
gate duro. A FIN-35 nasceu de uma recomendação do próprio YouTube em reunião de 24/jul; esta lei a
reverte por decisão do dono do canal, que é quem responde pelo formato.

**⚠️ O ACHADO MAIOR NÃO FOI A MUDANÇA — FOI DESCOBRIR QUE O NÚMERO NÃO TINHA DONO.** Ao mapear onde
a faixa estava escrita, apareceram **cinco lugares com QUATRO valores vivos ao mesmo tempo**:

| onde | o que dizia | de quando |
|---|---|---|
| `scripts/qc-tempo-apresentador.mjs` (o gate DURO) | 30–40% | FIN-35, 24/jul |
| `marcas/top10/agentes/decupador.md` | 16–24% | FIN-28/29 |
| `marcas/top10/agentes/montador.md` | ~20%, faixa 16–24% | FIN-28, 24/jul |
| `scripts/checar-plano.mjs` | 16–24% | FIN-28/29 |
| `knowledge/DIRECAO-CRIATIVA.md` + `CATALOGO-MODELOS.md` | 10–15% | a faixa ORIGINAL, nunca atualizada |

O **`montador` é o agente-raiz da proporção** — é ele quem decide o que vira cena e o que fica no
apresentador. Ele lia **~20%** no seu briefing enquanto o gate reprovava fora de **30–40%**: um
espelho podia obedecer a doutrina que leu e reprovar de qualquer jeito, sem que nada estivesse
errado com ele. Isto é a [SIS-13] ("um assunto, um dono, um lugar") cobrando a fatura, e é da mesma
família da [SIS-62]: **esquema de número que depende de alguém copiar à mão não sobrevive a duas
revisões.**

**A IRONIA QUE PROVA O PONTO:** o comentário do `checar-plano.mjs` dizia, com todas as letras, que
*"duas fontes com limiares diferentes para a mesma medida é o defeito que o próprio doctor caça"* —
e cravava `pct >= 16 && pct <= 24` logo abaixo. **Saber a regra não substitui derivar o número.**
Enquanto ele é copiado à mão, ele divergirá.

**O CONSERTO É ESTRUTURAL, não textual:**
1. a faixa mora em **`infra/faixa-apresentador.json`** — piso, teto, alvo, quem decidiu e quando;
2. `qc-tempo-apresentador.mjs` e `checar-plano.mjs` **leem de lá** (sem arquivo, o gate cai para
   10–15% e **diz em voz alta que está adivinhando** — default calado mede contra régua que ninguém
   escolheu);
3. a doutrina em prosa **aponta** para o arquivo em vez de repetir o número;
4. **`top10 doctor` check 23** reprova documento operativo que cravar faixa diferente da vigente.
   Arquivo de lei (`seed/regras/*`, `seed/aprendizado.md`) está **fora do escopo do check**: citar
   número superado ali é a função deles, e varrê-los faria o gate gritar em cima da própria memória
   do estúdio.

**POR QUE UMA FAIXA DE 5 pp SE SUSTENTA, sendo metade da largura da anterior.** A FIN-35 justificou
±5 pp porque a janela do Bôco é o **complemento** da união das cenas e absorve todo arredondamento de
duração do espelho — isso continua verdade. O que muda o cálculo é *quando* o gate roda: ele está no
`top10 espelhar`, **antes de existir arte**. Reprovar ali custa reescrever um JSON; reprovar depois
do render custa descartar cena paga. Por isso o alvo é **12 e não 12,5**: 3 pp de folga para o lado
que o Mateus nomeou como máximo.

**O QUE ISSO EXIGE DA MONTAGEM, e é a parte que dá trabalho:** com 12% de alvo, **~88% do vídeo
precisa de cena** — o que significa MAIS cenas por minuto, não cenas mais longas. A [FIN-08] (janela
de Bôco ≥2–3 s) e o "nunca 3+ min sem o rosto" continuam valendo: o rosto fica mais **picado**, não
mais raro.

**⚠️ A ISENÇÃO DA [FIN-38] FICOU VESTIGIAL — medido, não deduzido.** Com a faixa em 10–15%, os três
projetos isentos passam sozinhos: `senna` **14,9%** e `avioes-pequenos` **10,7%** (`--sem-isencao`
confirma), e o `homossexualidade-antiguidade` já saiu do disco. A isenção **fica** — registro de
decisão datada não se apaga quando para de doer, e no dia em que a faixa subir de novo ela volta a
valer sem que ninguém precise reconstruir a história. O que **não** se faz é usar a irrelevância dela
como argumento para alargar a faixa. ⚠️ E os 15,1% que o JSON registra para o `senna` eram de uma
medição anterior: a régua atual mede 14,9%. **Número copiado à mão apodrece, inclusive dentro do
arquivo que existe para guardar números.**

**Como verificar:** `node scripts/qc-tempo-apresentador.mjs <proj>` (faixa lida do arquivo, PASS/FAIL)
· `node scripts/doctor.mjs` deve devolver **zero** achados em `faixa-apresentador`.

### FIN-48 · O RETAKE QUE SOBREVIVE AO CORTE É O PAR DE TAKES **COMPLETOS** — e ele atravessa três estações
**Achado em 31/jul/2026 no `oceano-700km`**, que estava na lista de PRONTOS — 30/30 cenas
renderizadas, XML de 5 camadas gerado e validado, clipes conferidos no bucket — e **dizia a mesma
frase duas vezes em voz alta**:

- *"…em 2018, oute-- **Só que o grão de Juína não ficou sozinho. Quatro anos depois, em 2018**…"*
- *"…presa den-- **pra esse gelo existir, tinha que ter havido ali, presa** dentro do cristal…"*
- *"**Só que um grão dentro de um diamante é um ponto só no mapa. Podia ser um acaso**…"* — 2× INTEIRO

**O PADRÃO, e ele é contraintuitivo.** O decupador acertou **36** retakes e deixou passar **8**. Não
foi desatenção: ele usou o sinal que a própria doutrina chama de mais confiável — o **token
abortado** ("estão--", "no espa--") — e cortou *todos* os que tinham "--". O que ficou foi
exclusivamente o **par em que os DOIS takes estão completos**. Gaguejo *parece* defeito; frase
perfeita dita duas vezes **parece narração**. O sinal fácil treinou a régua errada.

**E O DEFEITO SOBE A LINHA — é isso que o torna caro.** O montador escreveu o espelho sobre o texto
duplicado: a âncora de `c10` contém literalmente *"…para o fundo do planeta... Mas empurra ela para
baixo, para o fun"*. O editor-de-arte desenhou a cena sobre essa âncora. O render pagou por ela. **Uma
palavra que ninguém cortou atravessou decupagem → espelho → arte → render sem um único aviso.** Não é
uma família nova: é a mesma do "cada peça passa, o conjunto falha" da [FIN-37] — cada estação estava
correta em relação ao que recebeu.

**POR QUE NADA PEGAVA:** dos 18 gates de QC, nenhum comparava o áudio montado **consigo mesmo**. O
`qc-repeticao.mjs` acha mídia reusada; nada achava FALA reusada. E o `_cortes.json` estava
internamente coerente — os cortes que existem estão certos; o defeito é o corte que **não existe**, e
ausência não dispara verificação nenhuma.

**O GATE: `scripts/qc-fala-repetida.mjs`** (n-grama de 6 palavras sobre o texto pós-corte; chamado
pelo `finalizar.mjs` ao lado do `qc-repeticao`).

⚠️ **ELE ALERTA, NÃO REPROVA — e isto não é covardia, é o que o mantém útil.** Repetição também é
**estilo**: *"Uma Terra que não ganhou água de presente do espaço. Uma Terra que já nasceu com a água
guardada no bolso."* é anáfora deliberada, e um gate que a cortasse estragaria o fecho do vídeo.
Frase reusada em contextos diferentes ("do planeta onde a gente vive", em duas sentenças a 97 s de
distância) também é legítima. O gate **ordena a fila por suspeita** — trecho com "--" é retake quase
sempre — e a decisão é de quem lê o contexto. Alarme falso que manda cortar anáfora seria pior que
gate nenhum.

**O CONSERTO NO AGENTE-RAIZ (`decupador`):** a regra *"frase dita duas vezes inteiras: fica a
ÚLTIMA"* **já estava** no briefing dele. Acrescentar regra não conserta o que falhou na execução —
então o que entrou foi a **medição obrigatória** antes de declarar a decupagem pronta, com o caso
medido escrito por extenso para a régua não se formar só no sinal fácil. *Conserto que depende de
alguém lembrar é conserto morto.*

**⚠️ O CORTE NÃO BASTA: `words-limpo.json` TAMBÉM.** Os dois artefatos são lidos por estações
diferentes e divergiam — no `oceano-700km`, por **156 palavras já antes deste conserto** (é o defeito
que o `cortes-por-alinhamento.py` documenta desde o `el-nino`). Quando divergem, o word-lock aponta
para a palavra errada. ⚠️ E **não se regenera o `words-limpo` a partir dos cortes**: ele carrega as
correções de transcrição do decupador ("plantão"→"plâncton"), que se perderiam.

**O QUE A VARREDURA MOSTROU (13 projetos, 31/jul):** `senna`, `lago-peigneur`,
`planetas-algodao-doce`, `simpsons-copa` e `publi-opera` estão **limpos**. O `ia-fisica` tem 16
achados de suspeita ALTA com **1 único corte** e um *"não, não, não, não. Tá pagando"* no texto —
sinal de `words.json` transcrito do **bruto**, não do master editado; ele já está no ar, então é
registro, não refação ([núcleo §9]: erro no que já saiu se crava). `buracos-negros-predios` tem 1
achado ALTA a triar.

**Como verificar:** `node scripts/qc-fala-repetida.mjs <proj>` · `--todos` varre o disco inteiro.

⚠️ **ESTA LEI FALHOU QUATRO DIAS DEPOIS DE ESCRITA — leia a [FIN-76] junto.** Em 04/ago o
`paises-baixos-mar` entregou **5 takes da mesma frase com 2 sobreviventes**. A prescrição daqui
("medição obrigatória") não dizia **sobre qual objeto** medir, e medir o `_cortes.json` contra o
`words.json` é medir o plano contra o plano. A FIN-76 crava o objeto: o **áudio do master entregue**.

### FIN-49 · O CÓDIGO ESTAVA UMA DECISÃO ATRÁS DA FIN-45 — e três vídeos prontos não tinham como ser entregues
**Medido em 31/jul/2026, ao tentar concluir `senna` (70/70 cenas), `lago-peigneur` (68/68) e
`odisseia-real` (67/67).** A FIN-45 definiu em 30–31/jul que **o PT-BR sai por XML de 5 camadas** e o
composto é a rota dos dublados. O código não sabia disso em **quatro lugares**, e cada um bloqueava
por conta própria:

1. **`finalizar.mjs` encodava um composto 4K em todo vídeo PT-BR** e só depois gerava o XML, que o
   próprio comentário chamava de *"entregável adicional"*. Cada entrega pagava um encode completo
   para produzir algo que não é a entrega. → o XML virou **etapa própria, antes do composto**, e o
   composto virou **opt-in** (`--composto`; `--variante`/`--lang` o ligam sozinhos, porque dublado
   sai por composto).
2. **A etapa de mux não tinha guarda.** Sem composto ela chamaria o `finalizar-youtube` sobre um
   arquivo ausente e morreria com erro de caminho — falha por ausência de insumo tem de se ANUNCIAR,
   não parecer bug.
3. **`entregar.mjs` procurava XML só por `*-timeline*.xml`** — o nome do gerador ANTIGO. O de 5
   camadas escreve `<proj>-POS.xml`, que o padrão não casa. Somado à mensagem *"Gere o composto"*, o
   resultado era: vídeo com XML pronto **não tinha rota de entrega**, e a saída mandava refazer um
   encode que a FIN-45 tirou do caminho.
4. **O gerador de 5 camadas conhecia UM nome para o V1.** Ele nasceu para a edição do ZERO
   (`_master-decupado`), mas metade do catálogo é **PRÉ-EDITADO** e ali o arquivo é
   `_master-editado.mp4` (senna) ou `_master-edit.mp4` (lago-peigneur). Os três caíam para o gerador
   antigo — **sem trilha, sem gap, sem branding** — com uma mensagem mandando baixar um arquivo que
   existia com outro nome. **Lista de candidatos é contrato; quando ela não cobre os nomes reais, o
   fallback esconde o bug.**

⚠️ **E O `--base` É O CAMINHO NORMAL, NÃO A EXCEÇÃO.** A [REND-18] manda o disco ficar enxuto: o
master mora no bucket e sai do local depois do uso. Então, na hora do XML, o master quase nunca está
ali — e o gerador abortava pedindo download. Agora o `finalizar.mjs` detecta a ausência e passa
`--base` sozinho, dizendo isso em voz alta. O XML nasce descrevendo a máquina de destino; a duração
vem do relógio limpo do espelho, a mesma fonte que posiciona as cenas, então batem por construção.

**⚠️ UMA ARMADILHA QUE QUASE PASSOU, e vale mais que os quatro consertos:** ao acrescentar a rota
`xml5` eu quase deixei o upload do entregável de fora. O `entregar.mjs` decide o que sobe com
`if (rota === "xml-legado")` — e a rota nova não casava. A entrega **passaria sem subir o XML**, sem
erro nenhum. *Rota nova exige varrer TODO lugar que ramifica na antiga: um `===` esquecido não dá
erro, dá ausência.* No mesmo arquivo eu também dupliquei a chave `xmlOficial` num objeto literal —
em JS a última vence, e a minha nasceu morta, calada.

**⚠️ CORREÇÃO DE FATO NA [FIN-34]:** ela afirma que *"o composto real dá ~14 Mbps"*, o que faria o
piso de 25 Mbps recusar TODA entrega legítima. **Medido em dois compostos já entregues:**
`homossexualidade-antiguidade` **70,8 Mbps** (6,21 GB / 701,3 s) e `planetas-algodao-doce`
**29,4 Mbps** (2,45 GB / 666,8 s). Os dois passam com folga; o piso separa entrega de proxy de
galeria (<10 Mbps), como foi desenhado. O número na lei estava errado e assustava à toa.

**Como verificar:** `node scripts/finalizar.mjs <proj> --ate=xml` deve imprimir
`✓ <proj>-POS.xml — N cena(s)` sem cair para o fallback. Medido nos três: 70, 68 e 67 cenas.

**FIN-50.** A [FIN-04] EXISTIA E FOI VIOLADA MESMO ASSIM — REGRA SEM GATE É REGRA MORTA (Mateus, 31/jul, odisseia-real):
   O Mateus ouviu o `odisseia-real` e disse: *"está com o áudio do bruto MP4, e não com o áudio do WAV"*. Estava.
   Os 5 blocos `_master-*.mov` carregavam o áudio-scratch da CÂMERA (PCM, rótulo `SoundHandler`), enquanto o
   `_source/MONO-000.wav` — **481 MB, no mesmo diretório** — nunca foi tocado. A decupagem pulou a etapa 1 do
   pipeline (juntar mp4 + wav pelo offset, SALVAR a sincronizada, transcrever ELA) e cortou direto o `C0029.MP4`.
   **O que dói não é o erro: é que a lei que o proíbe já existia.** A [FIN-04] é de 12/jul; o odisseia foi decupado
   em 20/jul, oito dias depois. E o checklist do `decupador.md` tem, no item 13, exatamente *"a transcrição veio do
   arquivo SINCRONIZADO"*. Escrito. Em dois lugares. E ninguém checava — porque **conferir era trabalho de quem
   lembrasse**, e o dia em que ninguém lembra não produz erro visível: o vídeo sai com a duração certa, sem aviso
   nenhum, só com o áudio pior. Silêncio não é aprovação; aqui era ausência de quem perguntasse.
   **FIX-RAIZ:** `node scripts/decupagem/qc-sync.mjs <proj>` (ou `--todos`), que cobra as três coisas: se há WAV de
   mic, tem de haver `_decupagem/sync.json`; a confiança do sync tem de bater o piso (0,3); e o
   `_master-decupado.mp4` tem de trazer a faixa do MIC no `handler_name` — o rótulo é o que permite PROVAR a origem
   depois com um ffprobe, em vez de deduzir por bitrate.
   **A varredura achou que o odisseia não era caso isolado:** `especies-humanas` (sync com confiança **0,186**,
   abaixo do piso — offset não confiável), `o-acre-o-estado-que-o` e `supervulcao-napoles` (WAV de mic no disco,
   `sync.json` inexistente) e `ponte-mais-alta` (`sync.json` ilegível). Nenhum publicado — todos ainda dão para
   consertar antes de ir ao ar. Um gate que só nasce depois do estrago ainda paga: ele varre o passivo inteiro.
   **Cinco armadilhas que este gate teve antes de prestar, e que valem para qualquer verificação nova:**
   • **Cegueira lida como saúde.** A 1ª versão procurava o WAV só no disco local e respondeu *"0 FALHA · 63
     não-dual-system"* numa pasta onde senna e odisseia SÃO dual-system — porque o bruto pesado sobe pro bucket e
     sai do local (REND-18), que é o estado NORMAL aqui. Um gate que emudece quando o insumo sai do disco mente
     justamente no caso comum. *Verde por não ter olhado é pior que vermelho.*
   • **Alarme falso em cima do conserto.** A 2ª versão tratou QUALQUER ponteiro `*NO-BUCKET*` como rastro de
     dual-system e acusou `avioes-pequenos` e `compilado-previsoes-jiang`, cujos ponteiros só dizem que um master
     subiu. A régua final é a HIERARQUIA DA PROVA: **o artefato vale mais que o registro** — master com faixa de
     mic é PASS mesmo sem `sync.json` local (o json fica na máquina onde se decupou; o master é que viaja).
   • **A faixa prova a ORIGEM, não o ALINHAMENTO.** A 3ª versão devolvia PASS assim que via `handler_name`
     com "mic" — e um master montado sobre offset ERRADO passaria limpo: o áudio vem do microfone certo, só
     que deslocado. São duas perguntas ("de qual mic veio?" e "está no lugar certo?") e o gate respondia só a
     primeira. Agora, com faixa certa E `sync.json` presente, a confiança continua sendo cobrada.
   • **Decisão registrada não é etapa esquecida.** A 4ª versão procurava `offsetVideoMenosMic` na raiz do JSON
     e, não achando, chamava de "ilegível" — acusando `orcas-nao-matam` (que ABANDONOU o dual-system com
     medição: lapela cobrindo 48% do take e 10 dB abaixo do scratch, então usá-lo perderia metade da narração)
     e `ponte-mais-alta` (vídeo em 2 partes, conf 0,261 na I e recusa explícita de muxar — *"mux errado passaria
     por todos os gates"* — e o wav da II com 0 bytes). Os dois tinham a análise difícil FEITA e escrita.
     O alvo deste gate é a etapa **pulada em silêncio**, não quem documentou: onde há decisão escrita, ele
     ecoa a pendência como aviso e passa. *Gate que repreende quem fez o trabalho direito é gate que se
     aprende a ignorar.*
   • **"Ainda não chegou" ≠ "pulou", e "não dá" ≠ "não fez".** A 5ª versão acusava `o-acre-o-estado-que-o`
     e `supervulcao-napoles` de "offset nunca medido" — mas o `o-acre` tem 6 arquivos (roteiro + a gravação
     de áudio; nem cortes, nem words, nem espelho: ele nem ENTROU na decupagem) e o `supervulcao` está com o
     **vídeo corrompido** (mp4 sem `moov`, e a cópia do Drive subiu quebrada — já documentado em
     `_VIDEO-CORROMPIDO.md`, com os três caminhos de recuperação). Fila não é dívida e impedimento externo
     não é descuido; somar os três num número só infla o passivo e apaga a diferença entre o que se conserta
     e o que se espera. O gate só cobra de quem já tem `_cortes.json`/`words.json`/`espelho.json` ou master.
   **Como verificar:** `node scripts/decupagem/qc-sync.mjs --todos` — no Mac `5 PASS · 0 FALHA`, na VM
   `13 PASS · 0 FALHA · 9 não-dual-system`. Rode **nas duas máquinas**: cada uma enxerga o que tem no disco.
   **Prova de que não ficou permissivo** (controle negativo, o teste que todo gate novo precisa passar):
   removendo `sync.json` e o master do `odisseia-real`, ele volta a acusar `⛔ há mic separado (MONO-000.wav)
   mas NÃO existe .../sync.json`; restaurados, volta a PASS. *Um gate que só sabe dizer "verde" não é gate.*
   **Mapa do passivo:** `node scripts/decupagem/mapa-decupagem.mjs` classifica todo projeto em
   OK · VELHA · BLOCOS · BLOQUEADO · PENDENTE · ANTES · N/A. Varrido em 31/jul: **0 VELHA** — o
   `odisseia-real` era o único caso real e foi refeito no mesmo dia. Restam 1 BLOQUEADO (`supervulcao-napoles`,
   vídeo corrompido), 1 PENDENTE (`ponte-mais-alta`, mic da Parte II com 0 bytes) e 1 ANTES (`o-acre`).
   **O `especies-humanas` mostra como é o certo** (refeito pelo Mateus em 31/jul, auditado e aprovado aqui):
   conf global 0,186 é baixa, mas foi verificada por outro caminho (xcorr-FFT local no offset candidato:
   corr 0,641, pico/média 7,10×) e **corroborada por uma medida independente** — o mic (2344,69s) é 150,9s
   mais longo que o vídeo (2193,79s), que fecha como preâmbulo 134,72s + cauda 16,2s. Ainda achou **deriva de
   relógio de −17,93 ppm** (residuais −7,9/−22,9/−45,2 ms em t=40/1080/2120s — progressão linear) e corrigiu
   reamostrando o mic, derrubando os residuais para |<12| ms. Aritmética final: 2193,79 − 928,89 de cortes =
   1264,90s contra 1264,966s medidos, 66 ms de arredondamento frame-aligned. *Confiança baixa não condena o
   sync; confiança baixa SEM segunda medição, sim.*

### FIN-51 · PLANO DE FINALIZAÇÃO GRAVADO É DECISÃO EDITORIAL, NÃO CACHE — regenerá-lo apaga a troca à mão em silêncio (31/jul/2026, `lago-peigneur`)

> ⚠️ Nasceu como "FIN-49" num commit local da VM — SEGUNDA colisão de numeração do dia (a FIN-49
> do Mac já existia; ver SIS-62). Renumerada na integração para FIN-51.

O `_trilha-plano.json` nasce determinístico (`trilha/escolher.mjs`), mas o desenho SEMPRE admitiu
ajuste humano por cima — o próprio picker se descreve como "o julgamento, deixado explícito e
ajustável". Em 29/jul o editor-chefe trocou à mão duas faixas do `lago-peigneur` (cap 5
HUSTLE→Out There: tensão contida no lugar de action-pop; cap 7 Video Knights→Reclaim: desfecho
sereno pro lago que voltou) e registrou as trocas no diário — de propósito NÃO re-rodou o `escolher`
para preservá-las. Em 31/jul o `finalizar.mjs` re-rodou o `escolher` incondicionalmente na etapa de
planos: as duas trocas sumiram, o XML de 5 camadas saiu com a trilha errada e NENHUM gate acusou —
plano válido, faixas existentes, tudo verde. Só a releitura do diário contra o plano pegou.

**A regra:** todo gerador de plano que aceita edição humana por cima (`_trilha-plano.json` e irmãos)
PULA quando o artefato já existe e só regenera com `--refazer` — o mesmo princípio de RETOMADA que o
`finalizar.mjs` já aplicava ao composto ("artefato pronto é ativo pago"), estendido ao plano barato:
o que se paga ali não é encode, é decisão editorial. Aplicado em `scripts/trilha/escolher.mjs`.
E o espelho da regra: quem edita plano à mão registra a troca NO PRÓPRIO ARTEFATO (`notaMix` com
"TROCA À MÃO <data>: <motivo>"), não só no diário — o artefato é o que a máquina relê; o diário, não.

**Como verificar:** `node scripts/trilha/escolher.mjs <proj>` com plano existente imprime `⏭ PULADO`
e sai 0; o plano do `lago-peigneur` referencia `Out There` (cap 5) e `Reclaim` (cap 7), e o
`<proj>-POS.xml` gerado depois dele também.

### FIN-52 · A REDE QUE NUNCA PEGOU NADA — teste tautológico, e proteção que mora no chamador (01/ago/2026)

Dois defeitos da mesma família num só gerador, e os dois são MEUS, achados pelo `qa-montagem`:

**(a) O anti-flash era código morto.** Portei a rede da FIN-08 do `compor-base-youtube` para o
`xml-premiere-5camadas` e ela nunca fechou UM vão sequer. O motivo é aritmético: para decidir se
havia mídia sobrando para esticar, ela comparava `dur(c.file)` com `c.dur` — e `c.dur` **já é**
`dur(c.file)`, atribuído dez linhas acima. O teste era sempre verdadeiro, o `continue` disparava em
100% dos casos, e o log dizia "clipe sem padding — conserto é no espelho/render", mandando consertar
onde não havia defeito. Duas rodadas de re-render com padding foram gastas contra um gate que não
existia. *Rede que reporta "não deu para agir" em todos os casos não é conservadora: é desligada — e
o texto do aviso mandou a produção para o lugar errado.* Prova mínima ao portar um gate: uma entrada
que ele DEVE pegar, pega mesmo?

**(b) A proteção geográfica morava no chamador.** A regra "fora do Mac, o XML nasce com os caminhos
do Mac" (FIN-45) vivia só no `finalizar.mjs`. Ao regerar `senna` e `odisseia-real` chamando o
gerador na mão, pulei a proteção sem perceber: as 83 referências saíram com `/home/...` da VM e no
Premiere do Mac **0 de 83 resolvem** — projeto todo vermelho. A decisão passou para dentro do
gerador, onde o caminho é escrito; `--sem-base` desliga declarando a intenção. *Se a garantia
importa, ela mora onde o efeito acontece — não no caminho feliz que alguém pode contornar.*

**Gate:** `qa-montagem` rota A item 8 (referências resolvem na máquina de DESTINO) e item 3 (zero
flash mudo) — os dois pegaram; nenhum gate determinístico pegou, e é por isso que a bancada existe.

### FIN-53 · O PLANO DE TRILHA NÃO DIZIA EM QUE RELÓGIO FALAVA — e 34,6% do vídeo saiu mudo (01/ago/2026)

No `odisseia-real` a música terminava aos 738,7s num vídeo de 1.129s: o capítulo 3 pela metade e o
capítulo 4 INTEIRO sem trilha, com o `_trilha-plano.json` declarando cobertura até 1.121,88s. O
encolhimento batia exatamente Σcortes — assinatura de ripple aplicado DUAS vezes.

A raiz não é o consumidor, é o PRODUTOR: `trilha/escolher.mjs` monta o plano ora sobre o espelho
(`inSec`, relógio BRUTO), ora sobre `_blocos.json` (`tlIni`/`tlFim`, que já vêm com ripple **e** com
os gaps de card somados — relógio FINAL) e **não dizia qual dos dois havia usado**. O cabeçalho do
gerador afirmava "o plano fala BRUTO" — uma frase de doutrina errada, que custou 390,3s de silêncio
e sobreviveu porque ninguém a mediu contra o arquivo.

**A regra:** todo artefato que carrega tempo **declara o relógio** em que está (`relogio:
"bruto"|"limpo"|"final"`), e quem consome PERGUNTA a um dono único em vez de assumir —
`src/trilha-plano.mjs` normaliza para LIMPO, obedecendo o carimbo quando existe e, quando não,
decidindo por aritmética contra o fim do conteúdo (com o salto de exatamente 3s dos cards como
desempate entre LIMPO e FINAL). As duas rotas que consomem o plano (XML e composto) passaram a usar
o mesmo módulo — duas contas paralelas do mesmo mix é o que faz a entrega PT-BR e a dublada soarem
diferentes.

**Gate:** `qa-montagem` rota A item 2 (trilha por capítulo, cold-open mudo) + o gerador avisa o
relógio detectado em toda execução. ⚠️ Fica aberto: `serve-galeria.mjs` documenta o mesmo campo como
"tempo-TIMELINE" — TERCEIRA leitura do mesmo dado, ainda por unificar.

### FIN-54 · O que faz o scrub responder é ALL-INTRA, não ProRes — e confundir os dois custou 60 GB por vídeo (03/ago/2026)

**O problema, medido.** O V1 do XML de 5 camadas precisa que o Premiere ARRASTE a cabeça de
reprodução em 4K. Long-GOP não deixa: para desenhar um frame o decodificador refaz o GOP inteiro. Em
31/jul a resposta foi transcodar o master para **ProRes 422 LT** — que resolve o scrub e custa
**158,3 GB/h medidos**. No `senna` isso produziu um `.mov` de **60,26 GB** convivendo com o `.mp4` de
7,08 GB que o originou: **67 GB de V1 para um vídeo**, num disco de VM que lê a 23,4 MB/s.

**O que a decisão não viu.** ProRes é all-intra, mas all-intra não é só ProRes. **H.264 com
`-g 1 -bf 0` também é** — cada frame se decodifica sozinho, o scrub responde igual, e custa
**37,2 GB/h** (ambos medidos em 31/jul, no mesmo master). A receita já existia na casa: é a mesma que
a [REND-47] aplicou no footage. O ProRes foi escolhido pelo NOME do formato, não pela propriedade que
importa.

**O custo real não foi o disco — foi o dono ficar de mãos atadas.** O Mateus (03/ago): *"vamos voltar
com decupagem para mp4 ao invés de prores, muito espaço e fico de mãos atadas também depois pra poder
baixar pro mac e fazer pós xml"*. Um V1 de 60 GB não desce da VM para o Mac — e o Mac é onde o
Premiere de fato abre o XML. Uma decisão tomada para melhorar a edição acabou impedindo a edição.

**A regra.** O master decupado nasce **H.264 all-intra** (`master-decupado.mjs`). O gerador de XML
pergunta *"cada frame se decodifica sozinho?"* (amostra 60 quadros com `ffprobe -show_entries
frame=key_frame`) em vez de *"é ProRes?"* — senão o aviso vira alarme falso no master novo e manda
gerar 60 GB à toa. `master-prores.mjs` continua correto e vivo, mas é opt-in de mão, para exigência
real de ProRes (entrega a terceiro, finalização em outra casa).

**A pergunta que isto instala:** quando você escolher um formato, nomeie a PROPRIEDADE que resolve o
problema, não o produto que a tem. Supera a parte de editabilidade da FIN-45 e a de qualidade de
FIN-09/FIN-15; não mexe no entregável, que segue H.264 4K alta taxa ([FIN-34]).
### FIN-55 · A TERCEIRA CAMADA ATRÁS DA FIN-45 — o código foi consertado, a INSTRUÇÃO não (03/ago/2026, `senna`)

> 🔀 Nasceu como **FIN-54** num working tree da VM e colidiu com a lei de mesmo número já publicada no remoto (03/ago, o all-intra do master). Pela [SIS-62], quem está no remoto fica com o número; esta virou **FIN-55**.

A [FIN-49] consertou o `finalizar.mjs` para a rota nova. Mas o texto que **despacha** a estação —
`scripts/estudio/estacoes/finalizacao.md` — continuou mandando `--ate=finalizacao`, cobrar
`{{slug}}-YT-4k.mp4` e medir a taxa do composto, tudo com um bloco de abertura em negrito, "LEIA ISTO
ANTES DE MEDIR QUALQUER COISA". No PT-BR o `finalizar.mjs` **pula composto e finalização por desenho**:
a sessão chegava mandada a auditar um artefato que a própria ferramenta não gera mais. E o índice da
BÍBLIA (`seed/aprendizado.md`) ainda trazia a lápide *"⚰️ o XML do Premiere saiu do domínio FIN
(FIN-33)"* — a doutrina que a FIN-45 tinha revertido três dias antes.

**Uma decisão de rota vive em TRÊS camadas, e consertar uma só troca o modo de falhar:** o código
(faz), a instrução da estação (manda fazer) e a doutrina indexada (ensina o porquê). Enquanto as
três não concordam, cada sessão headless redescobre a rota sozinha, gastando inferência — ou pior,
reprova o artefato certo por não achar o da rota morta. **FAIL que não é defeito ensina a ignorar o
gate**, que é o dano caro.

O sintoma de fora: no `senna`, quatro tentativas seguidas de finalização (28/jul a 03/ago) abriram
com a sessão descobrindo a rota antes de trabalhar.

**Corolário técnico, medido no mesmo dia:** cena sem clipe no disco **envenena o XML em silêncio**. O
gerador usa `existsSync(clipe) ? dur(clipe) : (s.dur || 0)` — sem arquivo, a duração vem do ESPELHO, o
relógio da V2 sai errado e abrem-se vãos que a rede anti-flash nunca examinou. Com cena faltando,
**regerar o XML piora o que já está no disco**: o certo é não rodar e devolver à render. O
`senna-POS.xml` de 01/ago sobreviveu íntegro (89 pathurls, durações de s60/s62/s63 vindas do arquivo)
justamente porque nasceu DEPOIS dos clipes.

**A regra:** ao mudar uma rota de entrega, o commit toca as três camadas ou não está fechado —
`scripts/`, `scripts/estudio/estacoes/*.md` e `seed/`. Instrução de estação é código-fonte de
comportamento, não documentação.

**Gate:** o prompt da finalização agora ABRE perguntando qual é a rota (PT-BR = XML · dublado =
composto), manda contar clipe contra HTML antes de gerar, e diz que laudo anterior ao artefato não
vale. `top10 doctor` reprova régua morta — falta o equivalente para doutrina revertida.

### FIN-56 · Mover código é mudar quem enxerga o quê — a entrega morria em `ReferenceError` (03/ago/2026)

**O defeito.** A FIN-45 moveu a geração do XML da etapa 7 para a etapa 3 do `finalizar.mjs`. O
caminho nasceu como `const XML5` **dentro do bloco `if` da etapa 3** — e a etapa 7 continuou dizendo
`existsSync(XML)`, uma variável que não existia em lugar nenhum do arquivo. Resultado:
`ReferenceError: XML is not defined` **no exato passo que promove o vídeo para o bucket**. A
finalização gerava o XML, passava o gate do laudo, e morria na hora de entregar.

**Por que ninguém viu.** `node --check` não pega: é erro de EXECUÇÃO, não de sintaxe. E o passo é o
último — só quebra depois de tudo dar certo, quando quem acompanha já assumiu que passou. Havia até
um comentário `⚠️ O XML SAIU DAQUI` **na linha de cima da linha quebrada**, escrito por quem moveu o
código e não seguiu a referência até o outro lado.

**A regra.** Ao mover uma etapa de lugar, procure TODOS os usos do que ela produzia — o escopo mudou
junto. `const` dentro de bloco não existe fora dele, e a linguagem só reclama quando a linha roda.
Num script de etapas onde o passo final é o que entrega, "só roda no fim" significa "só falha no fim".

**Como pegar isto sozinho:** varra `existsSync(X)`/uso de identificador maiúsculo contra as
declarações do arquivo, ignorando comentários — barato e determinístico. (Meu primeiro detector deu
falso positivo lendo o `existsSync(XML)` que eu tinha acabado de escrever DENTRO do comentário que
explicava o bug. Verificador que não distingue código de comentário mente nas duas direções.)

### FIN-57 · A automação de membros existia e estava morta em dois pontos (03/ago/2026)

**O pedido:** *"Vê se conseguimos automatizar a lista de membros via API do YouTube."*

**O que já havia:** tudo. `scripts/membros/` tem `puxar-lista-youtube.mjs`, `atualizar.mjs`,
`resolver.mjs` e `consentir.mjs`, mais o agente `atualizador-membros`. A capacidade estava construída
desde 30/jul. **E não funcionava**, por duas razões que só aparecem quando se roda.

**1 · O fluxo OAuth usava OOB, que o Google desligou em fevereiro de 2022.** O `consentir.mjs` pedia
`redirect_uri=urn:ietf:wg:oauth:2.0:oob` — aquele em que o Google mostra o código na tela para você
copiar. Hoje isso responde `invalid_request — OOB flow blocked`. O script parecia pronto e era
decorativo: *instrução que não roda é pior que instrução nenhuma, porque cria a impressão de que a
porta existe.*

O client do estúdio (`top10-yt-oauth-client.json`) é `installed` e declara
`redirect_uris: ["http://localhost"]` — **sempre suportou loopback**. Agora o script sobe um servidor
efêmero em `127.0.0.1:<porta livre>`, o Google redireciona para lá, e o código chega sozinho.

**2 · Ele escolhia o client errado, e falharia DEPOIS do login.** A escolha era por ORDEM na lista, e
o primeiro (`youtube-oauth.json`) tem `client_id` e `client_secret` mas vem **sem envelope**
(`installed`/`web`) e **sem `auth_uri`** — é credencial em uso, não o client cru do console. Sem se
declarar Desktop, ele não ganha loopback em porta arbitrária, e o consentimento morreria em
`redirect_uri_mismatch` **depois de o dono já ter feito o login**. Falhar após o esforço humano é o
pior lugar para falhar. A escolha passou a ser por MÉRITO: ganha quem tem envelope `installed`.

**O que continua sendo humano, e deve continuar:** o consentimento. Quem autoriza é o dono do canal,
logado na conta dele. O script prepara tudo até a porta e para — e agora a porta abre.

⚠️ **Enquanto o consentimento não acontece, o gate FIN-12 é intransponível por construção:** ele exige
`.csv com mtime do DIA da finalização`, e o export manual do Studio envelhece em 24 h. Hoje o arquivo
tem **6,9 dias** e reprova todo vídeo que leve a tela de membros — o `oceano-700km` está parado nisso.

### FIN-58 · Grava o token PRIMEIRO, prova depois — teste que reprova não pode queimar o login (03/ago/2026)

O `consentir.mjs` fazia, nesta ordem: recebe o código → troca por `refresh_token` → **testa** o
`/members` → se o teste passa, grava. O comentário defendia a ordem: *"prova antes de gravar: um token
que não abre a porta não serve guardado"*.

Soa certo e está errado, porque são **duas perguntas diferentes**: o `refresh_token` prova que o dono
autorizou; a resposta do `/members` diz se o canal está elegível **hoje**. A segunda pode mudar sem que
a primeira precise ser refeita — e refazer a primeira custa um **login humano**, que é o recurso mais
caro do fluxo inteiro.

Medido: o `/members` devolveu 403, o script saiu por `exit 4`, e o token foi para o lixo. Três vezes no
mesmo dia, cada uma obrigando o dono a repetir o login inteiro **para descobrir exatamente a mesma
coisa**. Na quarta, com a ordem invertida, o token ficou gravado — e o diagnóstico do 403 passou a
custar zero, porque dava para consultar a API à vontade renovando o token sozinho.

Agora o arquivo grava sempre, com um campo `provado: false|true` e o `detalhe` do que a API respondeu.
*Um token guardado e marcado como não provado é informação; um login queimado não é nada.*

**Dois defeitos irmãos, achados no mesmo conserto:**

**1 · O servidor de loopback fechava na PRIMEIRA requisição.** O navegador não pede só o redirect —
pede `/favicon.ico` junto, às vezes primeiro. Quando o favicon ganhava a corrida, `code` vinha `null`,
o servidor fechava, e o script morria com "sem código" **depois** do login inteiro; o código do Google
chegava numa porta já fechada, e ele é de uso único. A espera agora só termina com `code` ou `error` —
o resto responde 204 e continua escutando.

**2 · Cinco minutos é o tempo de quem já sabe o caminho.** O gargalo é uma PESSOA trocando de conta,
achando o perfil da marca, lendo a tela de permissões. O limite virou 30 min.

> **A lei, para qualquer porta que exija toque humano:** *o passo humano é o recurso caro — o código à
> volta dele existe para nunca pedir duas vezes a mesma coisa.* Guarde o que o humano produziu antes de
> validar qualquer coisa que dependa de terceiro, e faça toda pergunta de diagnóstico com o que já foi
> guardado, nunca pedindo outro toque.

**E o resultado do diagnóstico, que fecha o assunto:** com o token em mãos, `/members`,
`/membershipsLevels` (que só lista os níveis do PRÓPRIO canal) e `mode=all_current` devolvem **todos
403 `forbidden`**, enquanto `/channels?mine=true` responde 200 com *"Canal Top10", 9,99 mi de
inscritos, monetização ativa*. Conta certa, canal certo, escopo certo: **a API de membros está fechada
para este projeto por decisão do YouTube**, não por erro de configuração. A rota que existe é o CSV do
Studio (`assets/clube-membros/listas/membros-AAAA-MM-DD.csv`), que o `resolver.mjs` já consome. Porta
fechada por política é informação — a saída é a alternativa legítima, nunca insistir na mesma porta.

### FIN-59 · Ferramenta que ignora argumento em silêncio produz sucesso sem produto (03/ago/2026)

O `atualizar.mjs` — a estação inteira do card de membros — chamava:

```js
execFileSync("node", ["render/capturar-alpha.mjs", html, tmp], { stdio: "inherit" });
```

parecendo dizer *"renderize este HTML para este arquivo"*. Só que o `capturar-alpha.mjs` lê **um único
argumento** (`argv[2]`, o HTML), **ignora o segundo sem reclamar**, e **não chama ffmpeg**: ele só
escreve os PNGs no `FRAMES_DIR` e termina. Quem monta o `.mov` é o `render-alpha.sh`.

Ele terminava com **código 0**. O `execFileSync` ficava satisfeito, a execução seguia, e o erro só
aparecia três linhas abaixo como `ffprobe: agradecimento-membros-2026-08-03.mov.parcial: No such file
or directory` — uma mensagem que não diz nada sobre a causa e manda procurar no lugar errado.

Medido: 600 frames 4K com alpha capturados, ~10 min de máquina, e nenhum vídeo. **Esse caminho nunca
funcionou** — o card de 27/jul que está em produção foi gerado por outra rota.

> **A lei:** *argumento ignorado em silêncio é a forma mais barata de mentir.* Uma ferramenta que
> aceita mais parâmetros do que usa transforma erro de chamada em sucesso aparente, e o defeito só se
> revela onde ninguém procura. Toda ferramenta deve **recusar** o que não entende — e todo chamador
> deve conferir se o **artefato existe**, não se o comando "deu certo".

O conserto: chamar `render-alpha.sh <html> <saida> --qtrle`, e testar `existsSync(tmp)` logo depois,
falhando com a mensagem certa. (`--qtrle` não é economia: para overlay de TEXTO sobre transparente o
RLE lossless comprime as áreas vazias e o mesmo card sai com 4,8 GB em vez de 13 GB de ProRes 4444,
com o alpha idêntico — REND-09.)

**Mesma família do que já mordeu antes:** `entregar.mjs --limpar` que apaga o que nunca subiu, o gate
que passa porque não mediu, o encode que reporta `done` com o áudio truncado. **Ausência de resultado
— rodou e não produziu, listou e veio zero sem erro — é falha a investigar, nunca sucesso silencioso.**

### FIN-60 · Entre dois CTAs falados que se cruzam, vence o que NÃO TEM SUBSTITUTO — o card de membros não perde para o terceiro "deixa o like" (03/ago/2026)

**O que aconteceu.** No `paises-baixos-mar`, a finalização em seco acusou *"card de membros (FIN-12) —
nenhuma menção a membro/clube na fala"*. A fala tinha, e bem explícita: *"quem quiser continuar essas
descobertas com a gente, encontra aí o clube de membros no link aqui embaixo do vídeo"*. O
`_overlays-branding.json` simplesmente não tinha nenhum `cta-membro`.

**Por quê.** O `scripts/branding/overlays.mjs` **detectou** o CTA de membro e o **descartou**:
`cta-membro-1 @1599,1s — cruza com cta-like-encerramento (1593–1599s)`. O Bôco diz *"deixa o like,
confirma a inscrição"* e emenda o convite do clube 6,1 s depois; com `FOLGA_CTA` de 1 s e o like durando
6 s, os dois se encostam no relógio LIMPO. A regra "2 CTAs na tela é defeito" está certa — o desempate é
que estava errado. Os dois são FALADOS, então a prioridade caía em quem o laço chamasse primeiro, e o
laço do like vinha na linha de cima. **Puro acidente de ordem de código decidindo o que vai ao ar.**

**O custo.** O vídeo sairia com a TERCEIRA aparição do like e **sem o card dos 227 membros pagantes** —
com o `.mov` de créditos pronto, regerado no mesmo dia justamente para não deixar 22 membros novos de
fora. E sairia limpo: nenhum gate por-cena enxerga plano de branding, e a mensagem de erro apontava para
o lugar errado ("nenhuma menção na fala"), o que manda quem for investigar procurar defeito na
transcrição em vez de no plano.

**A régua.** Entre dois CTAs falados que se cruzam, vence o que **não tem substituto**. O like/inscreva é
posicional por natureza e se repete no vídeo inteiro (4 aparições neste); o card de membros é ÚNICO,
obrigatório ([FIN-02], [FIN-12]) e carrega nome de gente que pagou para estar ali. Perder uma das quatro
aparições do like é redundância a menos; perder o card é quebra de contrato. Na prática: em
`overlays.mjs`, `T_MEMBRO` é percorrido **antes** de `T_LIKE`, e a ordem dessas duas linhas É a
prioridade.

**Verificação:** `node scripts/branding/overlays.mjs <proj> --seco` tem de listar um `cta-membro-*`
sempre que a fala citar membro/clube. Se listar o CTA em "descartado(s) por cruzar", o vídeo vai sair sem
card — trate como FALHA, não como aviso. Medido depois do conserto: `✓ FIN-11: fim coberto
(cta-membro-1)`, com o card em @1599,1s.

---

**FIN-61.** **VÃO MUDO NA V2: o que separa PAUSA RETÓRICA de BURACO DE PRODUÇÃO é a LISTA DE CORTES,
não o tamanho do vão.** O gate da FIN-42 reprovava todo vão acima de 1,5 s com pouca fala dentro,
chamando-o de *"BURACO DE PRODUÇÃO"*. A régua está errada por construção: ela mede o **sintoma**
(silêncio) e não a **causa** (alguém removeu material ali?).

**O teste que decide, e custa uma consulta.** Converta o vão de tempo LIMPO para BRUTO com o
`mapSec` de `src/cortes.mjs` e pergunte se existe fronteira de corte a **≤ 4,0 s** dele
(tolerância cravada, não "por perto" — régua sem número é régua que cada um lê como quer):
- **Existe corte encostado** → o vão foi ABERTO pelo ripple (retake/erro removido, a costura ficou
  larga). É buraco de verdade: conserto é ripple/esticar cena.
- **Não existe corte nenhum perto** → o silêncio é NATIVO da gravação. O apresentador **pausou de
  propósito**, e o decupador guardou a pausa retórica porque a doutrina manda guardar. É **PASS**.

**Medido no `senna` (03/ago/2026).** Os três vãos que reprovavam a entrega — 2,30 s @1161,80 s ·
3,10 s @1275,87 s · 2,633 s @1339,30 s, 8,03 s somados — **não têm um único corte a menos de 4 s**.
São silêncios da gravação, e o texto em volta mostra o que são: *"...a Fórmula 1 não voltaria a ser a
mesma depois daquele fim de semana."* → pausa → *"Algumas horas depois, na sétima volta, ele se
chocou contra o muro."* Reprovar isso é reprovar o beat mais bem colocado do vídeo.

**Por que isto é caro.** O falso alarme aqui não custa um frame: custa a ENTREGA. Ele derruba o
laudo da FIN-13, e o `entregar.mjs` recusa promover — o vídeo inteiro fica parado por três pausas
que um editor humano teria deixado de propósito. Alarme falso que trava a esteira é pior que gate
nenhum ([ARTE-77], [SIS-33]).

**A régua, com os DOIS limites cravados.** Vão mudo na V2 reprova quando **(a)** existe fronteira de
corte a ≤ 4,0 s dele — foi o ripple que o abriu —, **ou (b)** ele passa de **6,0 s**, com corte perto
ou não. Fora desses dois casos o veredito é PASS, e o vão vira linha informativa — *"pausa retórica
preservada (corte mais próximo a N s)"* —, nunca FAIL.

**Por que o teto de 6,0 s existe, e por que ele não é decoração.** A primeira versão desta lei tinha
só o teste do corte, e uma regra sem limite superior **deixa passar exatamente o caso que ela existe
para pegar**: um trecho de 30 s com o apresentador parado e mudo, longe de qualquer corte, seria
absolvido como "pausa retórica". Pausa é uma respiração entre beats, não um vazio. Os três vãos
medidos no `senna` foram **2,30 · 2,633 · 3,10 s** e a emenda mais próxima estava a **31–72 s** —
folgadamente dentro de um teto de 6,0 s e folgadamente fora da tolerância de 4,0 s. O teto foi
escolhido acima do maior caso legítimo observado e abaixo do que qualquer editor chamaria de buraco.

**Agente-raiz:** `xml-premiere-5camadas.mjs` (emite o aviso já rotulado como "BURACO DE PRODUÇÃO",
induzindo o auditor ao FAIL) e `qa-montagem`, que aceitava o rótulo sem aplicar o teste do corte.

**Verificação:** para cada vão acusado, imprima os cortes a ±4 s do equivalente BRUTO. Lista vazia
= pausa = PASS.

### FIN-70 · O master decupado é DERIVADO de `_cortes.json` — regerou o corte, refez o master, ou a entrega perde o fim do vídeo (03/ago/2026)

> 🔀 **Nasceu como FIN-61 e foi renumerada para FIN-70 em 04/ago** (SIS-62): colidiu com a `**FIN-61.` (estilo antigo) escrita no mesmo dia por outra sessão. Nenhuma estava no remoto; o desempate foi a ordem de chegada, e a do estilo antigo veio primeiro.

**O que aconteceu.** Na véspera de entregar o `paises-baixos-mar`, o gerador do XML avisou: *"o master
termina em 871.51s mas a última palavra limpa acaba em 1027.80s — há NARRAÇÃO cortada no fim"*. A conta
fecha e é feia:

| | |
|---|---|
| bruto sincronizado | 1613,45 s (última palavra: *"…até o próximo vídeo"*) |
| `_cortes.json`, regerado **hoje 06:56** | 57 cortes, soma **586,11 s** |
| limpo que se espera | **1027,3 s** |
| `_master-decupado.mp4`, de **29/jul 10:26** | **871,56 s** |
| diferença | **155,8 s de narração que não existem no master** |

O master fora cortado com uma versão ANTERIOR do `_cortes.json`. Os 155,8 s que faltavam não eram
sobra de fim de arquivo: continham o **CTA de like, o convite ao clube de membros e a despedida do
Bôco**. O vídeo terminaria seco, no meio do último tópico — e o card de membros que uma sessão inteira
gastou o dia regerando cairia sobre imagem que não existe.

**Por quê passou.** Nenhum gate compara a duração do master com o relógio limpo do projeto: o
`_cortes.json` é regerado por quem refaz a decupagem, e o master é um `.mp4` de 4,6 GB que ninguém
reprocessa por hábito. Pior, o defeito é **silencioso e contagioso**: cenas e overlays são posicionados
no relógio limpo NOVO enquanto a V1 vive no relógio limpo VELHO, então tudo depois do primeiro corte
divergente sai fora de sincronia — e os sintomas aparecem espalhados, como "7 cenas aparadas por
exceder a janela" e "5 buracos de trilha", que é como este caso se anunciou antes de alguém somar as
durações.

**A régua.** O `_master-decupado.mp4` é **artefato derivado** de `_cortes.json`, exatamente como o
clipe 4K é derivado do HTML da cena. Vale para ele o mesmo teste da [REND-39]: **pronto é ser mais novo
que a sua fonte, não existir**. `_cortes.json` mais novo que o master = master obsoleto, sem discussão.
E a prova barata, que não depende de mtime, é aritmética:

    duração(_master-decupado) ≈ duração(bruto) − Σ(fim−ini de _cortes.json)     (± 1 s)

**Cuidado ao refazer:** o bruto sincronizado costuma já ter saído do disco (é cache, a fonte é o
bucket). Baixe-o ANTES de apagar o master antigo, e arquive o antigo em vez de sobrescrever — em 28/jul
o `master-decupado.mjs` morreu no segmento 52 de 57 porque o despachante liberou espaço e apagou o
bruto debaixo dele ([SIS] retomada por fatia), e neste mesmo projeto havia um `/tmp/master-pb.log` de
uma tentativa anterior que morreu do mesmo jeito no segmento 42 de 82 — sem que ninguém percebesse que
o master seguia velho.

**Verificação:**

    node -e 'const c=require("./out/<proj>/_cortes.json");const a=Array.isArray(c)?c:c.cortes;
    console.log("soma cortes:", a.reduce((s,x)=>s+(x.fim-x.ini),0).toFixed(2))'
    ffprobe -v error -show_entries format=duration -of csv=p=0 out/<proj>/_media/_master-decupado.mp4

Se a diferença passar de ~1 s, o master está fora do relógio — refaça antes de gerar o XML.

### FIN-62 · Plano de corte mais novo que o vídeo que ele descreve é entrega dessincronizada (03/ago/2026)

O `paises-baixos-mar` estava a um comando de ir para o bucket com este estado:

```
_cortes.json          03/ago 06:56   ← a DECISÃO de corte, refeita hoje
words-limpo.json      03/ago 06:56
_master-decupado.mp4  29/jul 10:26   ← o VÍDEO, cortado pelo plano de 5 dias antes
```

Alguém refez o plano e **não aplicou ao arquivo**. Os números provam que os dois planos discordam:

```
bruto ............................ 1613,4 s (26 min 53 s)
cortes que o plano de HOJE remove   586,1 s (57 cortes)
→ o master DEVERIA ter ...........  1027,3 s (17 min 07 s)
   o master que existe tem .......   871,6 s (14 min 31 s)
   DIVERGÊNCIA ..................  −155,8 s
```

O master antigo removeu **2 min 36 s a mais** do que o plano atual manda manter. E o estrago não é só conteúdo faltando: o XML posiciona cena, overlay e trilha pelo `mapSecFactory` sobre o `_cortes.json` **de hoje**, enquanto o vídeo por baixo foi cortado por **outro** plano — a partir do primeiro ponto de divergência, **imagem e fala saem fora de sincronia**, e nada no vídeo denuncia isso até alguém assistir.

**Nenhum gate pegava.** A finalização confere espelho×fala, contrato, laudo — e nunca compara a **data** do master com a do plano que o descreve. O vídeo passaria limpo.

> **A lei:** *artefato derivado mais VELHO que a decisão que o gerou é reprovação automática.* Vale para
> todo par plano→produto da casa: `_cortes.json` → `_master-decupado.mp4`, `.html` → `-4k.mp4`
> ([REND-39]), `espelho.json` → XML, lista de membros → card. A regra é a mesma e o teste é o mesmo:
> **mtime do plano > mtime do produto ⇒ FAIL**, sem discussão e sem exceção.

**A ordem do pipeline, que é o que essa lei protege** (Mateus, 03/ago): o apresentador sobe **MP4 e WAV
separados** no Drive — o mic é dual-system. A sequência obrigatória é **juntar → encodar → transcrever
→ decupar → cortar**, nessa ordem. O áudio se casa com o vídeo *antes* de qualquer corte, porque
cortar primeiro obriga a cortar duas linhas do tempo em paralelo e elas divergem. Feito certo, sobra
prova: o `sync-info.json` do `paises-baixos` registra `metodo: envelope-xcorr` e
`itsoffsetAplicado: -24.43` — o mic estava 24,43 s atrasado e foi corrigido no mux.

**E a verificação de corte que fecha o ciclo, barata o bastante para ser obrigatória:** nenhum corte
pode cair **no meio de uma palavra** do `words.json` (corte pousa em pausa, ou o áudio estala e a
frase perde sílaba); e depois de cortado, **re-transcreva o master com o Scribe** — ~2 min, liberado
para usar à vontade. Se o texto do master cortado bate com o `words-limpo.json`, os cortes estão
certos; se falta palavra, o plano comeu conteúdo. *Transcreva sempre o MASTER, nunca o .wav bruto.*

**Varredura do dia:** 2 de 7 projetos estavam fora de fase — `paises-baixos-mar` (5 dias) e
`especies-humanas` (2 dias).

### FIN-63 · Nome de repositório dentro do código é bomba-relógio — o que identifica é o CAMINHO DO PROJETO (03/ago/2026)

O `entregar.mjs` promoveu o `senna` para o bucket com a pasta **`graphics-4k/` VAZIA**, imprimindo:

```
refs de mídia: 74 → local 0 · backup 0 · externas 74 · FALTANDO 0
```

**`FALTANDO 0` significava "não procurei em lugar nenhum"**, e foi lido como "nada falta". A entrega
subiu XML, áudio e metadados — sem um único clipe de vídeo. Só apareceu porque o editor foi conferir
o bucket depois de o comando dizer que deu certo.

**A causa era uma string:**

```js
if (!r.includes("/gerador-de-animacoes-top10/")) { plano.externo.push(base); continue; }
```

O repositório se chama `top10-estudio` há meses. Ninguém atualizou essa linha no rename, e como o
ramo "externa" é o ramo **silencioso** (mídia de fora religa sozinha no Premiere, é normal ter), o
defeito não tinha sintoma: cada caminho do XML caía ali e seguia em frente sem reclamar.

Dois consertos, os dois estruturais:

**1 · O critério é `/out/<proj>/`, não o nome do repositório.** O caminho do projeto é estável;
o nome da pasta que o contém é decoração que muda. *Identificador que aparece em rename não serve
para decidir nada.*

**2 · A referência se resolve CONTRA A MÁQUINA QUE ESTÁ RODANDO.** O XML de 5 camadas nasce com
caminhos absolutos do **Mac** — é lá que o Premiere abre —, mas quem promove é a **VM**, onde o mesmo
arquivo mora em `/dados/out/<proj>/`. Testar `existsSync` no caminho literal do Mac responde "não
existe" para arquivos que estão ao lado. O que viaja entre máquinas é o trecho depois de
`/out/<proj>/`; o prefixo é local e se refaz em cada uma.

**E o gate que faltava:** XML pedindo mídia + **zero** mídia resolvida = **RECUSA**, com a mensagem
dizendo que o resolvedor não achou o projeto, não que "está tudo externo". Medido depois do conserto,
na mesma máquina e no mesmo XML: **74 refs → 71 locais, 3 externas** (antes: 0 locais, 74 externas).

> **A lei:** *ausência de resultado nunca é aprovação.* "Zero faltando" quando o denominador também é
> zero é a mesma mentira do gate que passa porque a ferramenta não existe, do `entregar --limpar` que
> apaga o que nunca subiu e do encode que devolve `done` com o áudio truncado. Toda contagem de
> conformidade precisa **declarar o universo que examinou** — e recusar quando esse universo for vazio.

### FIN-64 · Quem entrega fecha a fila — senão o vídeo entregue nunca sai do disco (03/ago/2026)

O `senna` foi promovido ao bucket, verificado arquivo a arquivo (36,39 GiB, 93 objetos, laudo
`qa-montagem` PASS) — e a fila continuou dizendo `finalizacao/pendente`.

Isso não é cosmético. O descarregador tem uma trava correta: **não apaga projeto que a fila ainda
quer**. Sem a linha virar `concluido`, ele recusava com *"a fila ainda o quer"* — e o vídeo já
entregue seguia ocupando **149 GB**, enquanto o alerta `descarga_parada` repetia a cada passada
"nenhum projeto concluído na fila", como se o problema fosse não ter terminado nada.

Duas verdades corretas produzindo um resultado errado: a trava do descarregador está certa, e o
registro é que estava atrasado.

> **A lei:** *o passo que muda o mundo é o mesmo que registra a mudança.* Separar "fazer" de "anotar
> que foi feito" cria um segundo passo que depende de alguém lembrar — e regra que depende de lembrar
> é regra morta. O `entregar.mjs` fecha a fila na mesma execução.

**E o bookkeeping não pode derrubar a entrega:** o fechamento vai dentro de um `try`, porque o arquivo
já está no bucket quando essa linha roda. Falhar ao anotar imprime o comando manual e segue — o
inverso (perder a entrega por erro de anotação) seria trocar o barato pelo caro.

### FIN-68 · Nem todo span de `_cortes.json` é um corte — P&B é trecho MANTIDO, e somá-lo reprova master bom (03/ago/2026)

> 🔀 **Nasceu como FIN-62 e foi renumerada para FIN-68 em 04/ago** (SIS-62): duas sessões paralelas — uma no Mac, outra na VM — destilaram no mesmo número no mesmo dia, e nenhuma das duas estava no remoto. O desempate foi a ordem de chegada; esta veio depois e andou para o próximo livre. Citação antiga a "FIN-62" que descreva o conteúdo abaixo aponta para cá.

**O que aconteceu.** Minutos depois de escrever o gate da [FIN-61] (`qc-master-em-fase.mjs`), ele
reprovou o master que acabara de ser gerado — e que o próprio `master-decupado.mjs` havia conferido
na mesma execução:

    gerador:  1613.91s − 581.97s (56 cortes) = 1031.98s · desvio 0.020s  ✓
    meu gate: 1613.4s  − 586.11s (57 cortes) = 1027.8s  · divergência +4.2s  ✗ FAIL

**Por quê.** O `_cortes.json` guarda **duas** famílias de span: os CORTES (trechos removidos) e os
trechos **P&B** — o momento humano que a decupagem decide MANTER, só dessaturado. Meu gate fazia
`JSON.parse` e somava tudo, então contava um span P&B de 4,14 s como se fosse material removido.

**A raiz não é aritmética, é de arquitetura.** `src/cortes.mjs` é o dono do formato: já normaliza o
legado e já devolve `{ cortes, pb, todos }` separados. **Eu reimplementei a leitura em vez de usar o
dono dela** — e quem duplica a interpretação de um arquivo herda a obrigação de acompanhar cada
mudança dele, o que ninguém faz. Um `import { lerCortes }` de uma linha era a versão certa desde o
começo.

**O custo potencial era alto:** o gate é FATAL na finalização. Um alarme falso ali não atrapalha uma
cena — **trava toda entrega da casa** até alguém descobrir que o gate é que estava errado. E o
sintoma engana: o número "4,2 s a mais" parece defeito real de montagem.

**⚠️ E O MESMO BUG ESTAVA NO GERADOR DO XML — este era o caro.** Achado pelo `qa-montagem` na mesma
noite, em `xml-premiere-5camadas.mjs`:

```js
const rawCortes = JSON.parse(readFileSync(join(D, "_cortes.json"), "utf8"));
const cortes = rawCortes.cortes || rawCortes;      // ← o arquivo é um ARRAY: `.cortes` é undefined
```

O fallback entregava os 57 spans, e o `mapSecFactory` passava a colapsar 4,145 s que o master **não**
cortou — o trecho P&B "Não sei ler esse nome" (694,258→698,403 s). Resultado: **22 das 43 cenas
entravam 124 frames (4,15 s) adiantadas**, e dois cards de título abriam **partindo palavra**
("Numa", de "Numa noite de 1953"; "atrás."). No meu gate o bug só gerava alarme falso; aqui ele
desalinhava a entrega.

**Por que era quase invisível:** o desvio é **zero** antes de 694,26 s — metade do vídeo confere. E o
número errado é plausível: o próprio QA se enganou duas vezes com ele antes de cravar. O que fechou o
caso foi **comparar com quem já lia certo**: `compor-base-youtube --dry` punha `s96` em 1005,98 s e o
XML punha em 1001,83 s. *Quando dois caminhos calculam a mesma coisa, a discordância entre eles é o
teste mais barato que existe — e não precisa de nenhum gate novo.*

**A régua.** Todo consumidor de artefato do pipeline **importa o leitor canônico**, nunca `JSON.parse`
+ interpretação própria — e isso vale para gate, gerador e compositor igualmente. `master-decupado.mjs`,
`compor-base-youtube.mjs` e `qc-master-em-fase.mjs` usavam `lerCortes`; o gerador do XML era o único
fora, e por isso era o único errado. Se o leitor canônico não existir, quem precisa dele o cria — e aí
ele é o dono, e todo mundo passa a importar dali.

**O cheiro que denuncia:** `x.campo || x` é um fallback que finge tolerância a formato e na verdade
esconde a pergunta "qual formato é este?". Onde ele aparecer sobre um artefato compartilhado, há um
leitor canônico faltando ou sendo ignorado.

**E a régua de calibração, que vale para todo gate novo:** antes de ligá-lo como fatal, rode-o contra
um caso que você SABE que está bom e contra um que sabe que está ruim. Aqui o caso bom existia e
estava a um comando de distância — o próprio gerador tinha acabado de imprimir a conta certa na tela.

### FIN-69 · Mudança de régua precisa dizer o que acontece com o que JÁ ESTÁ na esteira (03/ago/2026)

> 🔀 **Nasceu como FIN-63 e foi renumerada para FIN-69 em 04/ago** (SIS-62): duas sessões paralelas — uma no Mac, outra na VM — destilaram no mesmo número no mesmo dia, e nenhuma das duas estava no remoto. O desempate foi a ordem de chegada; esta veio depois e andou para o próximo livre. Citação antiga a "FIN-63" que descreva o conteúdo abaixo aponta para cá.

**O que aconteceu.** O `paises-baixos-mar` chegou ao gate de entrega com **39,9% de apresentador em
tela** contra o teto de **15%** da [FIN-47]. Medição independente (`qc-tempo-apresentador.mjs`)
confirma o número. Só que o `tema` do próprio `espelho.json` do projeto declara, escrito lá dentro:

> *"Apresentador Bôco em câmera, faixa dura 30–40% (FIN-35)."*

O projeto nasceu em **27/jul**. A [FIN-47] — que devolveu a faixa para 10–15% por decisão do Mateus —
é de **31/jul**. O vídeo foi montado **em conformidade com a regra vigente à época** e reprovado por
uma regra que veio depois.

**A lacuna não é a lei nova, é o que ela não disse.** A FIN-47 mudou o número, nomeou o dono da faixa
e até criou um check no `doctor` para documento que crave valor divergente. **Não disse uma linha
sobre a produção que já estava na esteira** — e havia produção na esteira. O resultado é um gate duro
reprovando trabalho que ninguém fez errado, na véspera da entrega, quando o conserto (cobrir ~25% do
vídeo com arte nova: espelho novo, dezenas de cenas, render novo) custa dias e não horas.

**A régua.** Toda decisão que muda um NÚMERO DE GATE sai com uma linha de alcance, e só há três
respostas honestas:

1. **vale para tudo, inclusive o que está em produção** — e então quem decide aceita o retrabalho, que
   deve ser estimado ali mesmo, não descoberto depois;
2. **vale para o que começar a partir de agora** — e os projetos já abertos seguem pela régua antiga,
   com o gate lendo a régua que o espelho declara;
3. **vale para tudo, mas os já abertos entram como exceção registrada** — o laudo aponta, não barra, e
   a decisão de publicar é do dono.

Sem essa linha, a resposta acaba sendo tomada por acidente — pelo agente que estiver no gate na hora,
sob pressão de prazo. **Que é a pior das três.**

**Sinal de que a doutrina tem esse buraco:** um projeto cujo `espelho.json` cita uma lei SUPERADA no
campo `tema`. Isso não é espelho desatualizado — é um projeto que atravessou uma mudança de régua, e
merece a pergunta de alcance antes do gate, não depois.

**Verificação:** ao mudar número de gate, `grep -l "<lei superada>" out/*/espelho.json` responde em um
segundo quantos projetos vivos você acabou de reprovar retroativamente. Rodado em 03/ago:

    $ grep -l "FIN-35" out/*/espelho.json
    out/oceano-700km/espelho.json
    out/paises-baixos-mar/espelho.json

**Dois** — e o segundo estava a um comando da entrega quando isso apareceu. O `oceano-700km` vai bater
no mesmo muro, e agora sabe disso antes de chegar lá. *Um comando de um segundo, executado no dia da
decisão, teria transformado uma surpresa de véspera em uma linha de planejamento.*

### FIN-67 · Sem GAP na timeline não há card na tela — e o duck cai em cima da fala (04/ago/2026)

O gerador de XML criava janela de abaixamento de trilha para **todo** card do `_cards-titulo.json`,
inclusive os que **não têm clipe na V2**. Ele até avisava em texto — *"ganhou duck de trilha, mas
nenhum gap"* — e criava a janela mesmo assim. Aviso sem consequência é decoração.

Medido no `paises-baixos-mar`:

```
gaps na V1 ......... 707→797 · 6297→6387 · 15751→15841 · 21494→21584
janelas de −10 dB .. 707→797 ✓ · 6297→6387 ✓ · 15751→15932 ✗ · 21494→21584 ✓
```

A terceira ia a **15932f** com o gap terminando em **15841f**: **3,04 s de música alta fora do card**
(528,03→531,07 s). Ali a V1 já voltou e o Bôco está falando — o master mede `mean −33,8 dB /
max −13,2 dB`, idêntico às referências de narração viva. Ou seja: **música 25 dB acima da cama, por
3 segundos, por cima da narração**, e isso em todo vídeo que tivesse um card sem clipe.

**Por que escapou de duas verificações:** contar keyframes não revela (o número caiu de 146 para 128
com o [FIN-65], e parecia resolvido); o que não caía era o **cruzamento duck × gap**. E o laudo lia
os 5 primeiros pontos de cada card, que estão certos.

> **A lei:** *o duck existe porque há buraco na imagem.* A janela do abaixamento é o **gap real da
> timeline**, nunca a duração declarada no plano — o plano descreve intenção, o gap descreve o que a
> montagem de fato abriu. Sem gap, o card não está no ar, e abaixar a música ali não é estilo: é
> defeito.

Agora, card sem gap **não ganha duck** e o aviso sobe para ALTO, nomeando o conserto certo — *"se ele
devia aparecer, dê-lhe clipe na V2, não duck"*. E quando há gap, a janela é `min(dur declarada, gap)`:
o plano pode pedir 3 s onde a timeline abriu 2, e quem manda é a timeline.

**Prova depois do conserto:** 4 gaps · 4 trechos de música alta · **0 fora de gap**.

### FIN-71 · Entrega sem master é XML que abre sem o apresentador — e o script disse ✅ (04/ago/2026)

O `entregar.mjs` promoveu o `oceano-700km`, imprimiu `qa-montagem: ✓ PASS`, `FALTANDO 0` e
`✅ entregue`. O que subiu:

```
xml 1 · graphics-4k 50 · audio 2 · meta 5
master 0 · trilha 0          ← e o projeto tinha 8,65 GB de master + 20 faixas
```

O XML de 5 camadas abriria no Premiere com **V1 (o Bôco) e A2 (a música) offline**. O vídeo inteiro
sem apresentador e sem trilha, com todos os sinais dizendo sucesso.

Duas causas somadas, e as duas eram decisões antigas que envelheceram:

**1 · O master era classificado como "externo".** O comentário dizia *"V1 = referência que religa no
Premiere; nunca vai pro bucket de renders"* — verdade em 2025, quando o master vinha do Drive. Hoje
ele mora em `out/<proj>/_media/` e é parte do pacote: sem ele o projeto não abre.

**2 · O upload mandava tudo para `graphics-4k/`.** O destino saía da posição do arquivo numa lista
(`é o composto? senão, graphics-4k`), não do que o arquivo **é**.

O conserto tem duas metades, e a segunda importa tanto quanto a primeira:

- **o destino sai do papel do arquivo** — master em `master/`, mp3 em `trilha/`, composto em
  `video/`, o resto em `graphics-4k/`;
- **o pacote se completa a partir do DISCO, não só do XML.** O plano de upload nasce das referências
  do XML, e elas podem citar a trilha por um caminho que não resolve ou tratar o master como externo.
  Se o projeto tem `_media/_master-decupado.mp4` e `_media/trilha/*.mp3`, eles sobem.

> **A lei:** *o entregável é o que o destinatário precisa para abrir o projeto, não o que a lista de
> referências devolveu.* Quando a fonte da verdade é uma lista derivada, o que ela não enxerga some
> em silêncio — e some com carimbo de aprovado. Complete pelo disco e confira por pasta.

**O `paises-baixos-mar` só escapou porque um editor subiu o master à mão.** O script fez exatamente a
mesma coisa lá — o que não mede a falha, mede a sorte de alguém ter olhado.

### FIN-72 · O filtro de mídia da entrega listava só o que o COMPOSTO usa — 19 de 68 refs sumiram (04/ago/2026)

O `entregar.mjs` montava o plano de upload com:

```js
const mediaRefs = refs.filter(r => /\.(mp4|mov|wav|m4a|aac)$/i.test(r));
```

Essa lista descreve a rota do **composto**. O XML de 5 camadas cita mais coisas — e tudo que ficou de
fora sumiu da entrega **sem aparecer no `FALTANDO`**, porque o contador só conta o que entrou no
plano. Medido no `paises-baixos-mar`: **68 refs no XML contra 60 objetos no bucket, 19 faltando**, com
o script imprimindo `FALTANDO 0` e `✅ entregue`.

O que sumia: os **4 `-4k-hold.png`** (frames congelados da FIN-08 — sem eles a V2 abre com buraco), o
logo, e as **11 faixas de trilha**.

É a mesma mentira do [FIN-63] por outra porta. Lá o **caminho** não casava com o padrão; aqui a
**extensão**. Nos dois casos o denominador vira zero e o gate diz "nada falta" quando o que houve foi
"não procurei". A regra virou positiva — **o que o XML cita, o pacote leva** —, e só ficam de fora as
extensões que comprovadamente não são mídia (`.xml` é o projeto, `.json` é metadado).

> **A lei:** *lista de inclusão é dívida; lista de exclusão é regra.* Enumerar o que entra obriga
> alguém a lembrar de atualizar a lista a cada formato novo, e o esquecimento é silencioso. Enumerar
> o que **não** entra falha para o lado seguro: um formato desconhecido vai junto e alguém percebe,
> em vez de faltar e ninguém perceber.

Irmã do [FIN-71], achado no mesmo dia e no mesmo arquivo: lá o **destino** saía da posição na lista,
aqui a **seleção** saía de uma lista de extensões. Os dois entregavam pacote incompleto com carimbo de
aprovado. E os dois só apareceram porque alguém **contou os objetos no bucket contra as refs do XML**
— nenhum gate fazia essa conta.

### FIN-73 · O `entregar.mjs` sai com rc=1 depois de entregar tudo (04/ago/2026)

Medido no `oceano-700km`: o script caiu **duas vezes** com `ResumableUploadException: 503` (erro
transitório do lado do Google), imprimiu stack trace e saiu com **rc=1** — mas a entrega estava
**completa**: 68 de 68 referências do XML com objeto no bucket, `checksumsOk: true`.

O risco é de leitura em qualquer direção. Quem confia no rc **refaz** um upload de 32 GB que já
terminou; e o inverso — um rc=0 num run que subiu pela metade — é o [FIN-63] e o [FIN-72], onde o
script se declarava vitorioso sobre um denominador que ele mesmo zerou.

> **A lei:** *o código de saída relata o processo, não o resultado.* A prova de entrega é a
> comparação **arquivo a arquivo** entre o que o XML cita e o que o bucket tem — nunca o rc, nunca
> o "✅" impresso, nunca o tamanho total. Um 503 no meio de um upload resumível é ruído esperado;
> a pergunta que importa é se o objeto está lá agora.

Enquanto o retry não existir no script, a rotina é: rodar, **conferir arquivo a arquivo**, e subir à
mão o que faltar. Foi assim que os dois `-4k-hold.png` do oceano entraram na entrega.

## FIN-74 — o gate herdou o objeto errado quando a entrega mudou de forma

**04/ago/2026.** O `nilo-nao-secou` fechou 30/30 cenas, master 46/46, XML de 5 camadas gerado — e
parou num impasse que nenhuma repetição resolveria. A própria finalização imprime, em sequência:

```
── 4 · composto-base — PULADO (FIN-45: no PT-BR a entrega é o XML)
── 5 · finalização (mux) — PULADO: não há composto para muxar (FIN-45)
── 6 · gate (FIN-13) → "Rode o qa-montagem sobre out/<slug>/<slug>-FINAL-4k.mp4"
```

O gate cobra laudo sobre o **composto**, que a FIN-45 decidiu não produzir no PT-BR. O vídeo fica
elegível para sempre e nunca entrega — e a mensagem de erro manda o operador julgar um arquivo
inexistente, o que faz parecer defeito de render.

**A raiz não é o gate nem a FIN-45: é que a entrega mudou de OBJETO e o gate continuou apontando
para o antigo.** Quando o PT-BR passou a entregar XML, o `qa-montagem` ganhou dois modos (auditar o
XML de 5 camadas *ou* o composto) — mas o texto e o alvo do gate ficaram no composto.

**A regra:** um gate nomeia o objeto **da entrega vigente**, nunca um artefato intermediário. Ao
mudar o que se entrega, o gate é parte da mudança — se o passo 4 aprendeu a pular, o passo 6 tem de
aprender o que julgar no lugar. Verificação que aponta para arquivo que a doutrina proíbe existir é
**alarme falso permanente**, a pior categoria: ela não protege nada e ensina a ignorar o gate.

**Sintoma para reconhecer a família:** o log diz "PULADO" numa etapa e "AUSENTE" numa posterior,
sobre o mesmo arquivo. Isso nunca é falha de execução; é doutrina que andou pela metade.

### Emenda 1 à FIN-74 · medida no mesmo ciclo — o gate nunca aprovou nada
<!-- título ajustado em 04/ago: emenda não se declara lei (ver a nota da Emenda 2, abaixo). -->

Conferido nos quatro projetos que chegaram ao fim da linha (`oceano-700km`, `paises-baixos-mar`,
`senna`, `nilo-nao-secou`): **nenhum tem `qc/finalizacao.laudo.json`**. Os dois primeiros estão
entregues no bucket e já no Mac.

Ou seja: o gate não é um obstáculo que às vezes barra — ele **nunca deixou passar ninguém**, e a
prática estabelecida virou contorná-lo chamando `entregar.mjs` direto. Eu próprio fiz isso hoje,
duas vezes, sem perceber que estava furando um gate: como ele mora em `finalizar.mjs` e não em
`entregar.mjs`, quem entrega pela porta de baixo nunca o encontra.

**A lição que generaliza:** um gate que 100% das entregas contorna não está protegendo — está
documentando uma regra que ninguém aplica. Duas saídas, e escolher é decisão do dono: ou o gate
passa a julgar o objeto real (o XML) e vira obrigatório também em `entregar.mjs`, ou ele é removido
e a doutrina para de prometer uma verificação que não acontece. **Manter como está é o pior dos
três**, porque a FIN-13 escrita dá a impressão de que todo vídeo entregue foi auditado — e nenhum foi.

⚠️ Enquanto isso não se decide: os vídeos já entregues **não têm laudo de finalização**. Isso não
significa que estejam ruins — significa que ninguém verificou por essa lente.

### Emenda 2 à FIN-74 · CORREÇÃO da emenda anterior (mesmo dia) — o gate NÃO é contornável pela porta de baixo
<!-- título ajustado em 04/ago: `### FIN-74 ·` numa emenda é lido pelo `regras-todas.mjs` como uma
     SEGUNDA lei com o mesmo ID e trava a geração do `_TODAS.md` ([SIS-62]). O texto é o mesmo;
     só o cabeçalho parou de se declarar lei. Emenda pertence à lei que emenda — nomeie-a assim. -->

A emenda acima afirmou que "quem entrega pela porta de baixo nunca encontra o gate, porque ele mora
em `finalizar.mjs` e não em `entregar.mjs`". **Isso é falso, e medido:** rodado direto,
`node scripts/entregar.mjs nilo-nao-secou` recusou com

```
✗ RECUSADO — gate de finalização (ausente). Rode `node scripts/qa-finalizacao.mjs <slug>`
   Migração de entrega antiga (sem laudo): repita com --sem-qa.
```

O gate está nos DOIS lugares. O que existe é uma **válvula declarada** (`--sem-qa`), pensada para
migrar entrega antiga — e é por ela que os projetos sem laudo saíram, não por uma fresta.

Fica de pé o núcleo da FIN-74 (o gate cobra laudo sobre um composto que a FIN-45 proíbe existir no
PT-BR, e nenhum dos quatro projetos tem laudo). Cai a parte sobre como o contorno acontece.

**A lição sobre método, que vale mais que o fato corrigido:** eu deduzi o caminho do contorno a
partir de *onde o gate estava escrito* e reportei como se tivesse medido. Bastava rodar o comando —
custo zero — para saber. **Ausência de laudo não prova ausência de gate;** prova só que existe
alguma saída, e qual é ela é pergunta separada, que se responde executando.

**Detalhe que destrava:** `qa-finalizacao.mjs` **confere** o laudo, não o **produz**. Quem grava é o
agente `qa-montagem`. Um verificador cujo nome parece o do produtor manda o operador rodar o
comando que só repete a reclamação — foi o que aconteceu aqui.

---

### FIN-75 · SILÊNCIO MORTO ENTRE PALAVRAS É DEFEITO DE DECUPAGEM — e a régua acha o que o ouvido do dono já não aguenta procurar (04/ago/2026)

**O que aconteceu.** Revendo o composto do `paises-baixos-mar`, o Mateus apontou **três** buracos de
silêncio no meio da narração. Uma varredura do master pelo mesmo critério achou **um quarto** que ele
não tinha marcado. Os quatro, medidos no relógio do master:

| # | master (s) | duração |
|---|---|---|
| D1 | 45,300–47,467 | **2,32 s** |
| D5 | 743,833–746,300 | **3,10 s** |
| D6 | 793,367–795,167 | **2,23 s** |
| D3 | 689,500–689,567 | 0,07 s — erro de corte, não silêncio |

**Por que passou.** O decupador corta silêncio como classe (`classe:"silencio"` do `_cortes.json`, a
[FIN-28]) — mas cortar é uma **intenção**, e ninguém media o **resultado**. Um trecho pode ser cortado
e ainda sobrar 2,3 s de nada entre duas palavras, seja porque o span foi conservador, seja porque a
pausa é nativa da gravação e ninguém a classificou. O gate que existia olhava os `_cortes.json` — o
que foi decidido —, nunca a faixa de áudio entregue.

> **A lei:** *pausa é retórica até ~1,5 s; acima de ~2,0 s entre palavras, dentro de uma frase ou entre
> frases do mesmo parágrafo, é buraco e sai.* O limiar não é estético, é o que a medição do caso real
> mostrou: os quatro achados vivem em **2,2–3,1 s**, e é exatamente essa faixa que o Mateus ouviu como
> defeito. Abaixo de 2 s ninguém reclamou em nenhum vídeo da casa.

**As exceções, que existem e são poucas:** a pausa **antes** de uma revelação ou depois de um número
forte é gesto de locução e fica (o `critico-de-locucao` julga isso no roteiro, e o decupador respeita
quando o texto ao redor mostra o gesto); a fronteira de **título de tópico** tem gap declarado de 3 s e
não é silêncio — é o terceiro relógio ([FIN-17], [ARTE-93]); e o **fim do vídeo** não conta.

**A obrigação nova, e ela é de MEDIÇÃO, não de intenção:** o decupador varre o `_master-decupado` que
ele acabou de produzir — o arquivo, não o plano — e lista todo vão ≥2,0 s entre palavras. Cada vão
volta com um veredito escrito: *cortado*, *preservado porque é gesto*, ou *fronteira de título*.
Silêncio sem veredito é entrega incompleta. É a mesma disciplina que a [FIN-48] impôs para retake, pela
mesma razão: *conserto que depende de alguém lembrar é conserto morto.*

**Como verificar:** `node scripts/mapa-limpo.mjs <proj> --silencios 2.0` lista os vãos de fala no
relógio do master, já convertidos para o timecode que o dono usa na revisão. O projeto guarda o
resultado em `silencios.json`, e é ele — não a memória do agente — que responde se a decupagem fechou.

### FIN-76 · A REGRA DO RETAKE JÁ EXISTIA E FALHOU DE NOVO — o que faltava não era regra, era CONFERIR O ÁUDIO DE SAÍDA (04/ago/2026)

**O que aconteceu.** No `paises-baixos-mar`, master 319,833–327,733 s: o apresentador gravou a mesma
frase **cinco vezes**, e **duas** sobreviveram ao corte — uma atrás da outra, no vídeo que o Mateus
assistiu.

**E isto é REINCIDÊNCIA de uma lei escrita quatro dias antes.** A [FIN-48] nasceu em 31/jul do mesmo
defeito no `oceano-700km` (par de takes completos que passou), diagnosticou a causa certa — o decupador
se apoia no sinal fácil, o **token abortado** (`"estão--"`), e frase perfeita dita duas vezes *parece
narração* — e prescreveu o conserto certo: **medição obrigatória antes de declarar a decupagem
pronta**. A prescrição entrou no briefing. O defeito voltou assim mesmo, com um agravante: cinco takes,
não dois.

**Por que a lei anterior não bastou, e é aqui que está o aprendizado.** A [FIN-48] pediu medição sem
dizer **sobre qual objeto**. Um agente cumpre "medi" rodando o gate sobre o `words.json` e os
`_cortes.json` — os arquivos que ele próprio escreveu — e recebe um laudo internamente coerente. Não é
desonestidade: é medir o plano contra o plano. Neste projeto o buraco ficou grotesco porque o
`words.json` sequer era do master vigente ([SIS-100]), então o gate lia um vídeo que não existia. Mas o
defeito de método é anterior a isso: **cortes coerentes entre si não provam nada sobre o que o
espectador vai ouvir.**

> **A lei:** *a decupagem só está pronta quando foi conferida no ÁUDIO ENTREGUE.* O objeto da
> verificação é o `_master-decupado` recém-produzido — transcrito de novo se preciso —, nunca a lista de
> cortes nem a transcrição de origem. Sobre esse texto roda o detector de fala repetida, e cada achado
> volta com veredito: **retake** (corta), **anáfora/rima deliberada** (fica, e o motivo escrito), ou
> **retomada em contexto distante** (fica).

**A régua de julgamento, refinada pelo caso das CINCO tomadas.** A doutrina da casa é *"entre
repetições, vale a ÚLTIMA COMPLETA"* — e com cinco takes ela vira uma armadilha aritmética: sobraram
dois porque **quatro** decisões independentes tinham de dar certo. Com N takes, a conta certa é *N−1
cortes*, e o agente escreve esse número antes de cortar. Quando o mesmo trecho tem 3+ tentativas, ele
não é um corte — é um **bloco** a resolver de uma vez, e resolver de uma vez é o que impede que sobre
"a penúltima também estava boa".

**Onde se conserta:** `decupador` (a conferência passa a ser sobre o artefato de saída, com o número de
takes declarado); `qc-fala-repetida.mjs` continua sendo a ferramenta, e continua **alertando** em vez
de reprovar, porque anáfora é estilo e gate que corta fecho de vídeo seria pior que gate nenhum
([FIN-48] continua valendo inteira nesse ponto).

**Como verificar:** `node scripts/qc-fala-repetida.mjs <proj>` **depois** de gerar o master decupado, e
`node scripts/mapa-limpo.mjs <proj> --conferir` antes, para garantir que o texto sobre o qual ele roda é
o do arquivo que existe.

### FIN-77 · FALSO INÍCIO COLADO NO TAKE BOM SAI — o corte é a gagueira, não a frase (04/ago/2026)

**O caso.** `paises-baixos-mar`, master 689,900–690,833 s: *"**É um, é um** que chega devagar"*. O
apresentador começou, hesitou meia palavra e emendou a frase boa. No vídeo entregue, o "É um" duplicado
ficou.

**Por que escapou de todas as redes.** Não tem token abortado — não há `"--"` nenhum, as duas palavras
são inteiras e corretamente transcritas. Não é retake: nada foi regravado, é uma frase só com um tropeço
no começo. Não é silêncio: o áudio está cheio. Passa pelo detector de fala repetida porque o n-grama da
casa é de **6 palavras** e a repetição tem **duas**. É um defeito que só existe na escala do fôlego, e
todas as ferramentas da casa medem em escala de frase.

> **A lei:** *quando um take começa duas vezes, o corte entra ANTES do segundo começo.* O sinal é
> léxico e curto: as 1–4 primeiras palavras de uma sentença se repetem imediatamente, com ou sem
> hesitação no meio. Corta-se do primeiro início até o segundo — a frase entregue é a que emendou. Isto
> é o mesmo julgamento da [FIN-48] ("vale a última completa") aplicado dentro da frase, e é onde ele
> mais escapa, porque o trecho é curto demais para soar como erro em qualquer relatório.

**⚠️ O que NÃO é falso início, e cortar aqui estraga o vídeo:** repetição enfática deliberada
(*"muito, muito mais fundo"*), anáfora entre frases (a [FIN-48] já protege), e a retomada depois de uma
pausa retórica, em que o apresentador reinicia de propósito para dar peso. A diferença se ouve e se lê
no contexto: falso início não acrescenta ênfase, ele **troca de rumo** — a segunda tentativa reformula
o que a primeira mal começou.

**Onde se conserta:** `decupador`, na varredura do texto do master de saída ([FIN-76]) — passe de
n-grama **curto** (2–4 palavras) restrito ao **começo de sentença**, que é onde este defeito mora e onde
a taxa de alarme falso é baixa. O mesmo passe pega o *"É um, é um"* e não pega o *"muito, muito"*, que
não está em início de sentença.

### FIN-84 · A REPRESENTANTE DO GRUPO SE ESCOLHE DEPOIS DE SABER QUEM SOBREVIVEU AO CORTE (04/ago/2026)

**O caso.** `nilo-nao-secou`. O Bôco pede like quatro vezes; duas caem em retakes que a decupagem
removeu (976,0 s no corte 963,15–979,57 e 1632,5 s no corte 1627,32–1636,37) e duas sobrevivem inteiras
na entrega: *"deixa o like aí, é rápido e ajuda demais o canal"* (983,8 s) e *"apoia o canal com um like
e um inscrever"* (1650,1 s). O vídeo saiu **sem overlay em nenhuma das duas**.

**A mecânica.** O `overlays.mjs` agrupava menções a menos de 20 s como um pedido só — correto — mas
guardava **apenas a primeira de cada grupo** como representante, e só depois filtrava quem caiu em
corte. Quando a representante morria, o grupo inteiro morria com ela, levando junto as repetições que
estavam vivas. A ordem das duas operações é que produzia o defeito: *escolher* antes de *filtrar*
descarta candidatos que nunca chegaram a ser considerados.

> **A lei:** *quando um conjunto é reduzido a um representante e depois submetido a um filtro de
> sobrevivência, a redução tem de acontecer DEPOIS do filtro.* Escolher primeiro joga fora os
> suplentes; o eleito vira ponto único de falha de um grupo que tinha reserva. Vale para qualquer
> "pega o primeiro de cada janela" que anteceda um corte, um `ripple` ou uma exclusão.

**Onde se conserta:** `scripts/branding/overlays.mjs` — `gatilhos()` devolve o **grupo inteiro** e
`primeiraViva()` elege a primeira menção fora de corte. Grupo cujas menções morreram todas some, que é
o certo: ninguém diz aquilo na entrega.

**⚠️ Por que nenhum gate viu.** O próprio gerador imprimia `✓ FIN-11: intro coberta · fim coberto` e
parava aí — ele conferia as CTAs **posicionais**, que são plantadas por régua e nunca faltam, e nada
dizia sobre as **faladas**. Gate que só mede o que não pode falhar é decoração.

### FIN-85 · PREFIXO DE PALAVRA NÃO É INTENÇÃO — `curt` casa com "curto" (04/ago/2026)

**O caso.** Mesmo laudo. O gatilho de CTA era `/^(like|curt|inscrev|…)/` e casou com *"No tempo **curto**
da sua vida"*: o vídeo ganhou um botão **"DEIXA O LIKE / INSCREVA-SE"** plantado sobre uma frase que não
pede nada. Pior: com as menções reais mortas pela [FIN-84], esse órfão era o **único** CTA falado do
vídeo inteiro.

> **A lei:** *casamento por prefixo curto captura a família morfológica errada.* `curt` é o verbo
> curtir e também o adjetivo curto/curta — que em roteiro de curiosidade aparece o tempo todo (tempo
> curto, distância curta, prazo curto). Gatilho que dispara ação visível na tela se escreve pelas
> formas que **de fato** existem no sentido pretendido (`curte|curtir|curtiu|curtid`), nunca pelo
> radical que "pega tudo".

**A régua para escrever o próximo:** liste em voz alta as palavras que o prefixo captura fora do
sentido desejado. Se existir uma só que caiba no vocabulário do canal, o prefixo está curto demais.

**Onde se conserta:** `scripts/branding/overlays.mjs`, constante `T_LIKE`.

### FIN-86 · O CRITÉRIO É O CAMPO DECLARADO, NÃO O FORMATO DO NOME (04/ago/2026)

**O caso.** A rede de segurança que garante "nunca um vídeo com capítulo e sem T1" identifica os cards
de tópico por **regex sobre o `id` da cena**. Em 04/ago ela falhou duas vezes no mesmo dia, em dois
projetos, por dois dialetos de nome diferentes:

| projeto | ids dos cards | por que o regex não pegou |
|---|---|---|
| `oceano-700km` | `cTITULO1`…`cTITULO4` | exigia minúscula e um hífen que o id não tem ([FIN-80]) |
| `nilo-nao-secou` | `04-titulo-topico`…`36-titulo-topico` | `/titulo[-_ ]?\d/` quer o dígito DEPOIS da palavra; aqui ele vem antes |

O conserto da [FIN-80] foi **alargar o regex** — e oito horas depois o mesmo bloco quebrou de novo, no
projeto seguinte. Nos dois casos o sintoma é idêntico e mudo: `cards` vazio → `blocos` vazio → **zero
transições**, sem erro nenhum, porque lista vazia não é exceção.

> **A lei:** *quando o dado tem um campo que DECLARA o que a coisa é, o filtro lê esse campo — nunca a
> grafia do identificador.* O espelho traz `modo: "titulo-topico"`, que é contrato do catálogo de
> modelos; o `id` é convenção de quem nomeou a cena e muda de projeto para projeto sem avisar
> ninguém. Perseguir o nome é perseguir ortografia: cada correção vale até o próximo dialeto.

**A régua para reconhecer o erro:** se o conserto de um filtro é *"acrescentar mais um caso ao regex"*,
o filtro está lendo a fonte errada. Procure o campo canônico antes de alargar o padrão.

**Onde se conserta:** `scripts/branding/overlays.mjs` — `ehTitulo()` testa `modo` primeiro e mantém os
regex de `id` só como rede para espelho antigo, que não tem o campo. Supera o conserto da [FIN-80]
(que continua válida no diagnóstico: guarda que nunca dispara é pior que alarme falso).

**⚠️ Onde este conserto MUDA a tela, e onde não muda.** No PT-BR ele não muda nada hoje: desde a
[FIN-45] (31/jul) o `xml-premiere-5camadas.mjs` descarta transição de virada de tópico — *"virada de
tópico é seca"* —, então o `_overlays-branding.json` pode trazer as cinco e a V5 sai com zero, por
desenho. Quem consome as transições é o **composto** dos idiomas dublados. Registrado aqui porque a
tentação, ao ver "0 transições" no log do gerador, é caçar um defeito que não existe naquela rota:
antes de consertar um plano vazio, confira se quem lê o plano não o descarta de propósito.

<!-- ═══ LEIS VINDAS DA VM `estudio-top10`, fundidas em 2026-08-05 ═══
     Elas foram destiladas lá, em paralelo, e nunca chegaram ao git. As que colidiam em número
     com uma lei diferente daqui foram RENUMERADAS (cada uma diz de onde veio, logo abaixo do
     título). As que caíam em número livre entraram com o ID original. Nada foi descartado. -->

### FIN-100 · O MASTER PODE ESTAR NUM RELÓGIO E O RESTO DO XML NOUTRO — e a conta que provaria isso nunca era feita (03/ago/2026, `senna`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-100` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** O `senna` chegou à finalização com tudo verde: 70/70 cenas renderizadas, gate
espelho×fala PASS, 92/92 `pathurl` resolvendo, V2 sem um único clipe excedendo a duração do arquivo,
V1 all-intra na duração exata dos 44957 frames do XML. E ainda assim a entrega estava quebrada: o
`_master-decupado.mov` (01/ago) tinha sido cortado por uma lista de cortes **diferente** da vigente
(03/ago). A aritmética, que ninguém fazia:

```
bruto (_bruto/sync-info.json → duracaoFinalSeg) .. 1714,213 s
Σ (_cortes.json) ................................  280,234 s
⇒ master ESPERADO ............................... 1433,979 s
   master REAL (ffprobe) ........................ 1498,567 s
   ⇒ 64,588 s de cortes NUNCA APLICADOS
```

Consequência na tela: ~81 s de cauda com o apresentador encerrando a gravação, trilha sem cama nos
últimos 100 s, e **V1/A1 num relógio enquanto V2/V3/A2 estão noutro** — as cenas posicionadas sobre
uma fala que anda deslocada em relação a elas.

**Por que nenhum gate viu.** Cada um media uma metade consigo mesma: o `qc-espelho-fala` confere o
espelho contra `words-limpo.json` (derivado dos CORTES, não do master); o gerador de XML confere a V2
contra os ARQUIVOS de clipe; o `aplicar-cortes.mjs --conferir` confere `words-limpo` contra
`_cortes.json`; e o `compor-base-youtube` deriva `masterDur = base + cortes`, que é **conta circular**
— ela não pode discordar de si mesma. O master era o único artefato que ninguém confrontava com a
lista que o produziu, e é justamente o que carrega a voz.

**A regra.** Todo artefato DERIVADO de uma lista tem de ser confrontado com a lista, e não só com os
seus próprios derivados. Concretamente, antes de gerar XML ou composto:

```
| dur(_master-decupado) − ( dur(bruto) − Σ cortes ) | ≤ 0,5 s
```

com `dur(bruto)` lido de `_bruto/sync-info.json`. Falhou ⇒ o master é velho: refazer com
`master-decupado.mjs` (H.264 all-intra, [FIN-54]) **antes** de qualquer coisa — regerar o XML sobre um
master fora de fase só produz um XML fora de fase com aparência íntegra.

**A pergunta que isto instala:** quando um gate passa, pergunte *contra o que* ele mediu. Gate que
compara um derivado com outro derivado da mesma fonte é um espelho, não uma prova — e vídeo com
"todos os gates verdes" é exatamente onde este defeito se esconde.

**Gate:** `qa-montagem` rota A, item RAIZ (V1/A1 fora de fase), medido por aritmética e confirmado por
correlação de áudio master×bruto. **A conta virou gate duro em `scripts/decupagem/master-decupado.mjs`
(03/ago)**, no ponto onde o master nasce: `|dur(master) − Σ(keeps)| ≤ 0,5s`, medido no **stream de
vídeo** (o container devolve o `bin_data` herdado do bruto e a comparação sairia bruto-contra-bruto,
aprovando justamente o caso que o gate existe para reprovar). Falha ⇒ `exit 1`, sem master.

---
### FIN-101 · UM ARQUIVO TEM VÁRIAS DURAÇÕES, E A DO MIC NÃO É A DO VÍDEO (03/ago/2026, `senna`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-101` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** Ao refazer o master do `senna` pela lista vigente, sobravam **17,03 s** de cauda
que nenhum corte pegava. A causa estava no `source-sincronizada.mp4`, que tem três streams com três
durações:

```
v:0  vídeo ............................... 1714,212 s
a:0  "mic (lapela/shotgun) - trilha boa" .. 1696,938 s   ← a decupagem tomou ESTE por fim do arquivo
a:1  "camera (ambiente) - conferencia" .... 1714,048 s
```

O decupador escreveu o último corte como `1692,754 → 1697,184` com o motivo *"sai só o vazio ao fim do
arquivo"* — e o arquivo, para ele, acabava onde o **lapela** parou de gravar. Os 17 s seguintes, em que
o apresentador aparece parado esperando para desligar a câmera, entravam na entrega. O gate da FIN-100
não pega: ele confere que o master obedece à lista, e o master obedecia — a lista é que estava curta.

**A regra.** Quem decide o que sai tem de perguntar **de qual stream** vem cada número. A régua do fim
de um bruto dual-system é o **stream de vídeo** — o mic pode parar antes (bateria, desligamento, o
operador que tira o lapela primeiro) e a câmera segue rodando. Em particular: **um corte que declara ir
"até o fim do arquivo" tem de terminar em `dur(v:0)`**, não na duração que a transcrição enxergou —
porque a transcrição só conhece o áudio.

**A generalização, que é o que vale.** Cauda sem transcrição não é cauda sem imagem. Sempre que uma
decisão de corte se apoiar em "não há nada aqui", o "nada" precisa ser medido no MESMO stream que vai
para a tela. Ausência de fala é evidência sobre o áudio e sobre mais nada.

**Gate:** o próprio gate da FIN-100 reprova a diferença depois que a lista é corrigida; o decupador
passa a ler `dur(v:0)` do bruto antes de escrever o corte de cauda.

---
### FIN-102 · A ROTA NOVA HERDOU A DOCUMENTAÇÃO DA ANTIGA SEM HERDAR O CÓDIGO (03/ago/2026, `senna`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-102` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** O XML de 5 camadas — a rota que substituiu a antiga em 30/jul — saiu com dois
buracos que a documentação jurava cobertos:

- **25 pares de clipes sobrepostos na V2.** O gerador punha cada cena com a duração do **arquivo
  renderizado** no `inSec` do **espelho**: duas fontes para a mesma grandeza. 15 clipes eram mais
  longos que a janela reservada (s01 +15,24 s, s11 +17,68 s, s20 +10,89 s) e invadiam a cena seguinte;
  duas cenas (s02, s23) ficaram **contidas por inteiro** em outra e não apareceriam. A rede que
  impediria isso, `normalizar-timeline.mjs`, existe desde sempre e se declara *"etapa FINAL do
  pipeline"* — mas quem a chamava era o `retimar`/`patch-v1` da rota **antiga**. Ninguém a invocava.
- **4 CTAs de like/inscreva configurados, 0 materializados.** O `_finalizacao-config.json` os traz em
  `ctas[]`, o `overlays.mjs` assina *"FIN-11: intro coberta · fim coberto"* — e o gerador não tinha uma
  linha que os lesse. É a [FIN-10] se repetindo ("configurado e não aplicado"), agora na rota que a
  [FIN-41]/[FIN-45] mandam provar antes de confiar.

**A regra, nas duas pontas.** (1) **A janela do espelho manda, não a duração do arquivo** — o aparo é
sempre no FIM da cena (o começo é word-lock e não se toca), que é a mesma régua do `normalizar-timeline`
e do composto. Excesso grande não é só geometria: é espelho e render discordando, e o gerador tem de
contar e nomear os piores em vez de aparar calado. (2) **Config que ninguém lê não é configuração, é
comentário** — quem assina um plano tem de conferir que a camada saiu, e a conferência é contar os
clipes na trilha, não reler o plano.

**A pergunta que isto instala.** Ao trocar uma rota por outra, o inventário não é de funcionalidades —
é de **redes**. Toda proteção que a rota velha chamava e a nova não chama continua documentada,
continua passando nos próprios testes e não protege mais nada. Ferramenta pronta e desligada é pior que
ferramenta ausente: ela consta como se estivesse guardando, e ninguém procura o buraco.

**Gate:** `xml-premiere-5camadas.mjs` apara pela janela do espelho antes do anti-flash, materializa
`cfgFin.ctas[]` na V3 com a duração REAL do ativo, e chama `normalizar-timeline.mjs` sobre o XML já
escrito — reportando snaps, promoções e buracos no rodapé.

---
### FIN-103 · O AVANÇO DE UMA FAIXA DE TRILHA NÃO É A DURAÇÃO DELA (03/ago/2026, `senna`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-103` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** A cama de música do `senna` acabava **16,00 s** antes do fim do conteúdo. Não era
escolha, arredondamento nem faixa curta: era o planejador e o colocador discordando sobre uma conta.

`scripts/trilha/escolher.mjs` monta a sequência descontando a duração útil de cada faixa do que falta
cobrir (`restante -= util`). Mas quem coloca as faixas na timeline **recua o cursor a cada emenda**
(`t = fim − CROSSFADE`), para que uma entre por cima do fim da outra. O avanço líquido de toda faixa
depois da primeira é, portanto, `util − CROSSFADE`. Com 9 faixas e 8 emendas de 2 s:

```
déficit = (n − 1) × CROSSFADE = 8 × 2,00 s = 16,00 s   (medido: 8 recuos de exatamente 2,00 s)
```

**Por que passou.** O déficit cresce com o NÚMERO de faixas e aparece só no fim do vídeo — o lugar que
ninguém revisa e que o espectador sempre alcança. E some junto com outro defeito: no `senna` o laudo
mediu "100,17 s finais sem cama", dos quais só 16 eram este bug; o resto era o master fora de fase
([FIN-100]). Dois defeitos somados num sintoma só levam a consertar um e declarar resolvido.

**A regra.** Quando duas etapas descrevem a mesma geometria — uma planejando, outra desenhando —, elas
têm de compartilhar a fórmula, não a intenção. Separe as grandezas explicitamente: **`avanço`** é
quanto de janela a peça resolve; **`cobre`** é o comprimento dela, que inclui a sobreposição. Confundir
as duas é invisível com uma peça, e vira erro proporcional com muitas.

**E o fim do vídeo não é a última cena.** O mesmo ramo ancorava o bloco no fim da última cena do
espelho, quando o apresentador ainda fala depois que a última arte sai da tela (a despedida quase nunca
tem cena por cima) — 2,5 s a seco no `senna`. É a [FIN-35] outra vez, em outro consumidor: **a narração
é quem fecha o vídeo**.

**Gate:** `escolher.mjs` desconta o crossfade do avanço e fecha o bloco em
`max(fim da última cena, fim da narração)`; o `qa-montagem` mede a cobertura da cama contra o fim do
conteúdo (FIN-53).
### FIN-104 · O LUGAR ONDE A ÂNCORA BATE 100% PODE SER JUSTAMENTE O LUGAR QUE NÃO EXISTE (03/ago/2026, `oceano-700km`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-104` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** O gate `qc-espelho-fala` reprovou 4 cenas do `oceano-700km` por caírem dentro de
cortes de retake — "some do XML". O conserto que o próprio gate anuncia (`--corrigir`, realinhamento
monotônico) rodou e **não moveu nenhuma das 4**. Rodar de novo dava o mesmo FAIL, e o backup
`.pre-qc-fala.bak` saía byte a byte idêntico ao espelho: o script prometia o conserto, gravava um
backup, e não consertava nada.

**Por que passou.** O realinhamento escolhe, para cada cena, entre "ficar onde está" (com bônus de
`+0,15` de cobertura, para não trocar de lugar por ruído) e os candidatos achados na transcrição. Só
que a posição atual entrava na disputa **sem nunca ser perguntada se sobrevive ao ripple**. E o take
descartado tem quase as mesmas palavras do take bom que o sucede — então a cobertura da âncora ali é
**100%**, a maior possível. O bônus somava 1,15 contra 0,69–1,00 dos candidatos vivos, e a busca
reconfirmava o buraco com nota máxima. *A evidência textual mais forte estava no trecho que o vídeo
não tem.*

Havia uma segunda camada, na gravação: o limiar anti-ruído `Math.abs(novo − antes) > 0,05` que decide
o que vale reescrever. A `n13` precisava de **44 ms** (1172,900 → 1172,944, a borda do corte) e era
descartada por 6 ms de margem — o take bom começa milissegundos depois do fim do corte, então
**deslocamento minúsculo é a assinatura desse defeito, não a prova de que ele é irrelevante**.

**A regra.** Antes de comparar candidatos, **elimine os que não existem no artefato final**. Posição
morta não recebe bônus, não entra na disputa e não é ponto de partida — e nenhum limiar de "mudança
pequena demais" se aplica a quem está do lado morto de uma borda: ali, existir ou sumir se decide em
milissegundos. Vale além do espelho: toda vez que um otimizador pontua "onde está" contra alternativas,
a validade da posição atual é pré-requisito, não mais um critério a ponderar.

**Como se manifesta.** Ferramenta de conserto que roda limpa, grava backup e deixa o FAIL de pé. Se
`--corrigir` não muda nada duas vezes seguidas, o defeito é do corretor — não do artefato.

**Gate:** `realinhar()` só oferece a posição atual quando `mapSec(inSec) !== null`; a gravação reescreve
sempre que o movimento ressuscita a cena (`morta → viva`), ignorando o limiar. Medido no `oceano-700km`:
4 FAIL → PASS, com `n05` 577,633→572,804 · `n07` 716,933→717,416 · `c18` 932,202→966,016 ·
`n13` 1172,900→1172,944.
### FIN-105 · O BURACO TEM TAMANHO FIXO E A PEÇA QUE O TAPA, NÃO (03/ago/2026, `oceano-700km`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-105` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** O XML de 5 camadas do `oceano-700km` saiu com **1,90 s de TELA PRETA** em três
pontos (0,80 s @222,07 s · 1,03 s @501,20 s · 0,07 s @724,87 s) e com **flashes de 1 a 2 frames do
apresentador** logo em seguida. Nenhum gate viu: o `finalizar.mjs` fechou o trilho inteiro, o XML é
bem-formado, os 65 `<pathurl>` resolvem e a V2 tem 0 sobreposições.

**Por que passou.** O `xml-premiere-5camadas.mjs` abre um buraco na V1 para o card de título entrar —
`const GAP = +arg("--gap", 3)`, **3 s fixos para todo card** (decisão do Mateus em 31/jul). Mas a
duração de cada card vem do clipe renderizado, que vem do `dur` do espelho, que o montador derivou do
silêncio real entre capítulos. No `oceano-700km` os quatro cards mediram **3,73 · 2,20 · 1,97 · 2,93 s**
— e um só deles chega perto de 3:

```
card mais CURTO que o buraco → sobra buraco  → TELA PRETA        (cTITULO2 0,80 s · cTITULO3 1,03 s · cTITULO4 0,07 s)
card mais LONGO  que o buraco → o XML apara   → o fim da animação SOME (cTITULO1: 3,73 s entram como 3,00 s)
```

Os dois lados perdem, e só um dos dois grita. O card aparado (cTITULO1) é o caso benigno — some o
fecho da animação e ninguém percebe. O card curto deixa o buraco na tela.

O código até sabia metade disso — o comentário na linha do gap diz *"abrir um buraco de 3 s onde não há
card renderizado seria 3 s de preto"* — e checava se o card **existe**. Não checava se ele **cabe**.
Presença não é medida.

**Por que ninguém tinha visto.** `senna` e `paises-baixos-mar` dão 0,00 s de preto no mesmo gerador:
eles não têm card de título de capítulo, então nunca exercitaram este caminho. **Defeito que só aparece
com a feature ligada não é raro — é apenas novo**, e vai morder todo vídeo com cards daqui em diante.

**A regra.** Quando uma etapa abre espaço para a peça de outra, o espaço tem de ser medido **na peça**,
nunca numa constante. Se a constante é a intenção (o Mateus quer 3 s de respiro), então ela é um
requisito sobre a PEÇA — o card tem de ser renderizado com 3,00 s — e não sobre o buraco. O que não
pode existir é o par "buraco fixo + peça livre": ali o preto é certo, e a única dúvida é o tamanho.

**Gate:** medir o XML montado frame a frame procurando (a) frame sem master **e** sem cena = preto e
(b) janela de master descoberto com `0 < dur < 2 s` = flash. O `qa-montagem` cobra os dois; nenhum dos
dois se enxerga lendo log de etapa, só varrendo a timeline pronta.

---
### FIN-106 · A ARTE FOI DESENHADA CONTRA UM RELÓGIO QUE A TIMELINE NÃO TOCA (03/ago/2026, `oceano-700km`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-106` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** 49 cenas renderizadas, todas aprovadas no portão, todos os gates por-cena verdes.
Ao montar o XML, **19 cenas da V2 saíram aparadas** — c27 −39,5 s, c29 −37,1 s, c12 −29,5 s, c07
−27,9 s, c10 −20,5 s, e por aí abaixo. Nada disso é defeito do render: os clipes têm exatamente a
duração que o espelho pediu.

**Por que passou.** O espelho vive no relógio **BRUTO** (o do `words.json`), e é dele que sai o
`__duracao` do HTML. A timeline vive no relógio **LIMPO** (pós-ripple de `_cortes.json`). Quando um
corte cai **DENTRO** da janela de uma cena, a janela encolhe no limpo — mas o clipe já foi
renderizado com o comprimento bruto. O gerador então apara, porque a alternativa é sobrepor a cena
seguinte. `_cortes.json` tirou 661,5 s em 51 cortes; o que caiu dentro de cena virou aparo.

**O CLAUDE.md já avisava que a finalização tem DOIS RELÓGIOS — e listava dois consumidores** (os
planos de branding/trilha e as cenas). Faltava o terceiro, o que mais custa: **a ARTE**. Overlay
remapeado errado sai no segundo errado e alguém vê. Arte desenhada no relógio errado sai *no lugar
certo, com o fim faltando* — e ninguém vê, porque o que sumiu nunca esteve na tela.

**Os dois danos, e o segundo é o pior.** Medido a olho nos frames:

```
c18 · timeline corta em 28,1 s de um clipe de 69,1 s
     o que se perde: "ECO SÍSMICO SOB UM CONTINENTE — AMÉRICA DO NORTE", a órbita
     tracejada e "NÃO MEDIDO" — ou seja, a TESE da cena, que só existe no contraste
c27 · timeline corta em 31,8 s de 71,3 s
     a composição já está inteira aos 31 s; o que muda depois é o balão WORD-LOCKED
     ("quem trouxe a água?" → "quanta água já tinha?")
```

Onde a cena revela progressivamente, **some a revelação**. Onde a cena é estável, **quebra o
word-lock**: a arte acompanha a fala BRUTA e o espectador ouve a LIMPA. Não há caso benigno — só há
o dano que se vê e o que não se vê.

**A regra.** Toda peça temporizada contra a fala tem de ser produzida no relógio em que a fala será
**ouvida**. Se a decupagem roda antes do espelho — e roda —, as janelas do espelho saem de
`words-limpo.json`, não de `words.json`. Cena cuja janela mudou depois da arte pronta é **arte a
refazer**, não clipe a aparar.

**Gate:** o gerador de XML **já contava e nomeava** as cenas aparadas em `avisos` ("o excesso em si é
espelho × render discordando — concilie na origem"). Ninguém lia, porque aviso que não reprova é
aviso que não existe. O `qa-montagem` passa a cobrar: cena aparada em mais de 0,5 s = FAIL, com a
lista. *Um número que só aparece em log é um número que ninguém tem.*

---
### FIN-107 · PEÇA WORD-LOCKED CUJA PALAVRA FOI CORTADA SE DESCARTA — DESLOCAR É PIOR (03/ago/2026, `oceano-700km`)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-107` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O que aconteceu.** O Bôco gravou três tentativas do bloco do like; o decupador manteve a última e
cortou 775,27–812,09 s. O CTA @782,6 s **sobreviveu ao corte da própria fala que o justificava** e
foi para a timeline como overlay sem nada embaixo.

**Por que passou.** O `overlays.mjs` lê os gatilhos do `words.json` — o relógio BRUTO, que ainda
contém o que foi removido. O arquivo **já tinha** a função `foraDeCorte()`, usada nas transições, e
ela nunca foi aplicada aos CTAs.

**E aplicá-la teria sido o conserto errado.** `foraDeCorte()` **desloca** para o primeiro keep depois
do corte — aqui, colando o CTA na menção seguinte: dois CTAs a 1,33 s um do outro, que é o defeito
que a própria de-duplicação existe para evitar. A distinção é de natureza da peça:

```
peça POSICIONAL (intro, fim, T1/T2)  → precisa de um LUGAR válido  → deslocar
peça WORD-LOCKED (CTA em menção)     → precisa da PALAVRA          → descartar
```

**A regra.** Sem a palavra, a peça word-locked não tem por que existir — retake cortado não gera CTA.
E o descarte vem **antes** do dedup: gatilho fantasma que chega ao dedup já competiu por espaço com
um CTA real e pode tê-lo derrubado.

**Corolário que custou a mesma rodada.** O `overlays.mjs` seguia a **FIN-10** (T1 intro→cap1, T2 entre
capítulos) enquanto o `xml-premiere-5camadas.mjs` já seguia a **FIN-45**, que revogou as duas. Dois
geradores da mesma responsabilidade em leis de datas diferentes — e a divergência ficou **invisível
por um bug**: o regex de card não casava `cTITULO1`, então o overlays produzia zero fronteiras e não
havia o que discordar. Consertar o regex (FIN-46) acendeu 5 transições, 4 delas revogadas, que só a
rota DUBLADA aplicaria. *Bug que esconde divergência não é sorte: é a divergência esperando a data em
que vai sair no ar.* Ao consertar um filtro que estava zerando saída, confira o que a saída volta a
alimentar.
### FIN-108 · `--corrigir` NUM ESPELHO QUE JÁ TEM ARTE É OPERAÇÃO DESTRUTIVA — o espelho é o contrato contra o qual a arte foi coreografada

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-108` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.
**Medido em 03/ago/2026**, na estação QC do `orcas-nao-matam`. O `qc-espelho-fala` acusou **9 cenas com
`inSec` dentro de um span cortado** — "some do XML". O achado era **real e bem diagnosticado**: em
todas as 9, o `inSec` caía num take ABORTADO e a versão mantida começava no fim do corte (o `c18`
entrava em cima de *"uma **onça** selvagem nada mais de cem quilômetros"*, o erro de palavra que o
decupador removeu). Conferido: **93–100 % de fala idêntica** entre as duas posições, isto é, troca de
take clássica. E o rodapé do gate anuncia a saída em uma linha: `--corrigir`.

**Rodei. O que aconteceu, medido:**

| | antes | depois de `--corrigir` |
|---|---|---|
| `qc-espelho-fala` | 9 cenas fora de lugar | **as MESMAS 9** |
| `qc-janela` | **PASS nas 28 cenas** | **9 cenas fora da janela** |
| `qc-fusao-espelho` | PASS (fusão consolidada) | **desfeita** (`c30` 55,22 → 20,18) |

Ele **realinhou 25 dos 47 `inSec`** — maior ajuste **23,7 s** — para consertar 9, e não consertou
nenhum. O estrago colateral foi maior que o defeito: `c18` com a arte 9,27 s adiantada (a fala da
janela batendo **58 %**), `c21` 8,15 s atrasada (63 %), `c17` e `t03` — que estavam **verdes e nem
constavam na lista** — quebrados, e a fusão do `c30` que eu acabara de consolidar pela [ARTE-127]
revertida. Um comando, três gates piores.

**O aviso estava no código do próprio gate**, não no rodapé: *"as 4 cenas do `oceano-700km`
sobreviviam a `--corrigir` com 100 % de cobertura e sumiam do XML mesmo assim"*. Cena morta dentro de
corte é exatamente o caso que o realinhamento não resolve — porque a posição ruim tem cobertura
PERFEITA (o take descartado tem as mesmas palavras do bom), e o otimizador de cobertura não tem por
que sair de lá.

**A LEI**, em três partes:
1. **Espelho de projeto que já tem arte não se corrige em lote.** O `inSec` não é um número solto: é o
   contrato contra o qual cada `renderAt` foi coreografado. Um realinhamento que "melhora a cobertura
   média" mexendo em 25 âncoras troca 9 defeitos conhecidos por 9 desconhecidos — e os novos caem em
   cenas que ninguém estava olhando.
2. **O gate que corrige não é o gate que mede o dano.** Antes de qualquer `--corrigir`: backup do
   espelho **e** o veredito do `qc-janela` (arte × espelho) anotado ANTES. Depois, o mesmo veredito.
   Sem esse par, a regressão é invisível — o gate que você rodou continua dizendo a mesma coisa.
3. **Leia o código do gate antes de aceitar o conselho do rodapé.** Quando o comentário do script já
   documenta um caso que sobrevive à correção automática, esse caso **não é candidato ao comando**.

**Raiz e conserto:** a raiz é o **espelho** — o gerador reservou janela começando dentro de span
cortado (`c21` a 8,46 s de profundidade, `c18` a 6,88 s) —, e não a arte, que está coreografada
coerentemente com o espelho que recebeu. Restaurado do backup (os três gates voltaram a PASS/PASS/9) e
o vídeo **devolvido à estação espelho** com os deslocamentos medidos cena a cena, porque escolher entre
mover a âncora (e re-ancorar a arte) ou encurtar a janela é decisão de montagem, não de QC. ⚠️ O
`espelho.json` **não tinha backup nenhum** antes deste — e foi reescrito em 03/ago 07:05, depois da
arte de 31/jul, **sem uma linha no `diario.jsonl`**: é assim que a estação seguinte descobre o
desalinhamento por gate em vez de por aviso.
### FIN-65 · Uma palavra escolhe a trilha de um capítulo inteiro — inclusive quando a frase a NEGA (03/ago/2026)

**O problema, medido.** O picker de trilha (`scripts/trilha/escolher.mjs`) concatenava as teses do
capítulo num texto só e devolvia a PRIMEIRA linha do `MAPA_MOOD` que casasse em qualquer ponto dele.
Com 31 cenas de texto, alguma palavra sempre casa — e a que casa primeiro **na ordem da lista** ganha,
ainda que apareça uma única vez.

No `uruguai-despovoado` o capítulo final (568 s, **38 % do vídeo**) recebeu 4 faixas **Dark** por causa
de UMA ocorrência de "tragédi", vinda da frase *"o interior não esvaziou por **tragédia**, é que nunca
encheu"* — o texto afirmava o contrário do que a trilha tocou, e o capítulo fecha com *"vazio não é
fracassado"* e *"lá se vive bem"*. No mesmo capítulo **Sentimental casava 3 vezes** e perdeu por estar
mais abaixo na lista. O capítulo 3 repetiu o padrão: Dark com 1 ocorrência ("guerra") contra
Sentimental com 3.

**O segundo gatilho errado: `espaço` não é cosmos em PT-BR.** A linha de Sci-Fi casava `espa[çc]o`
solto. Nos cinco usos do vídeo — *"o Uruguai visto do espaço"* (imagem de satélite), *"sobra espaço"*,
*"espaço no meio"*, *"lugares mais espaçosos"* — **zero** eram astronômicos, e o capítulo do pampa foi
para o ar com cama de ficção científica sob gado pastando. Em português esse substantivo é território
por padrão; o sentido cósmico vem marcado (`espaço sideral/profundo`) ou vem dos vizinhos inequívocos
da linha. `planeta` tem a mesma ambiguidade ("nosso planeta" = a Terra) e continua lá, ainda não
mordido.

**A regra.** Mood de capítulo se decide por **CONTAGEM de cenas que casam**, não pela primeira
correspondência: ganha o mood mais representado, e o empate cai na ordem da lista — o critério antigo
deixou de ser o único, virou o desempate. Isso não ensina o mapa a entender negação (nada ali entende),
mas **tira de uma frase negada o poder de decidir sozinha** 9 minutos de trilha. Regex de mood que
casa palavra polissêmica do português cotidiano é gatilho, não sinal.
### FIN-66 · A penúltima faixa "estica pra cobrir a sobra" — e é esticada além do fim do próprio arquivo (03/ago/2026)

**O problema, medido.** Para não fechar o capítulo com um clipe de 5 s (que só produz mais um crossfade
audível), o picker descartava a última faixa da sequência e somava a sobra dela na penúltima,
comentando que *"ela ainda tem material de sobra no arquivo"*. Isso nunca foi medido — e é falso por
construção: **a penúltima chega ali já esticada até quase o fim do próprio mp3, que é exatamente como
ela virou penúltima.**

No `uruguai-despovoado`, "Serpent's Mystery" (arquivo de **201,2 s**) ficou encarregada de **215,4 s**
no capítulo 4: **14,2 s sem cama nenhuma**, no fecho do capítulo mais longo do vídeo e a menos de 30 s
do fim — a mesma zona cega da [FIN-53]. O que sai não é uma emenda torta, é silêncio.

**Por que ninguém veria.** O plano fecha a janela no papel (a aritmética do `cobre` bate), e nenhum
gate comparava o `outSec−inSec` de cada entrada com a **duração real do arquivo**. Silencioso dos dois
lados: quem lê o log vê a cobertura completa, quem assiste ouve a música morrer.

**A regra.** A sobra só é absorvida se `penúltima.cobre + sobra ≤ duração do arquivo da penúltima`
(com margem para o corte). Quando não couber, **fica a emenda a mais** e o script diz em voz alta por
quê. Um crossfade audível é defeito de acabamento; um buraco de 14 s na trilha o espectador ouve como
"acabou o vídeo". E toda estação que planeja mídia em janelas deve validar o plano contra o
`ffprobe` do arquivo — plano coerente consigo mesmo não é plano executável.
### FIN-109 · O overlay POSICIONAL conta os segundos do zero do BRUTO — e o vídeo não começa lá (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-109` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O problema, medido.** O CTA de like da introdução é posicional, não falado: o `overlays.mjs` o
ancorava em `min(12, limite)` — 12 segundos — em tempo **BRUTO**. Quando a gravação abre com erro
descartado, esses 12 s caem **dentro do primeiro corte**, e o `mapSec` colapsa qualquer instante
comido por um corte para o começo dele. No `uruguai-despovoado` o primeiro corte é `0,00–45,42s`
(classe *erro*): o CTA @12s bruto virou **0,00s limpo** — o overlay de like em cima do **primeiro
frame do composto**, antes de existir um único segundo de gancho.

**Por que a cura conhecida não servia.** Este mesmo arquivo já tinha `foraDeCorte()`, escrito em
26/jul para as fronteiras de transição que *sumiam* no remap ([FIN-46] e vizinhas). Aplicá-la aqui
devolve 45,47s bruto = **0,05s limpo**: ainda o primeiro frame. A diferença é o que estava quebrado
em cada caso — a transição perdia **existência** (e empurrar para fora do corte a devolve); o CTA
existia e perdia **posição**. Remédio certo, doença diferente.

**A regra.** Âncora posicional se conta a partir do **primeiro instante que sobrevive ao ripple**, não
do zero do bruto: `foraDeCorte(0) + N`. No caso medido, 57,47s bruto → **12,05s limpo**, que é o que o
número sempre quis dizer. Quando não há corte na abertura, `foraDeCorte(0)` é 0 e nada muda — o
conserto não tem regressão. Vale para toda peça posicionada por "N segundos do começo/do fim": num
projeto com ripple, **o começo do vídeo é um instante que precisa ser perguntado, não assumido**.
### FIN-110 · A transcrição regerada DEPOIS do espelho desalinha o gate — e o conserto que ele oferece destrói o vídeo (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-110` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O problema, medido.** No `uruguai-despovoado` o gate 0 do `finalizar.mjs` (espelho × fala) reprovou
**35 de 52 cenas ancoradas** e ofereceu o conserto de sempre: `qc-espelho-fala.mjs <proj> --corrigir`,
que realinha o espelho inteiro. Rodá-lo teria deslocado as **94 cenas** e jogado fora o alinhamento de
**58 clipes 4K já renderizados**. O espelho estava CERTO. Quem havia mudado era a régua: o `words.json`
foi **regerado pelo Scribe em 29/jul, um dia depois** do `_cortes.json` (28/jul 11:58) e do
`espelho.json` (28/jul 12:00), e nasceu **10,313 s adiantado** — o Scribe descarta o silêncio de cabeça
da gravação e re-zera o relógio nele. Cortes, espelho e `words-limpo.json` seguiam consistentes entre si;
só a referência do gate havia trocado debaixo deles.

**Por que a assinatura engana.** O desvio parecia crescer (+10 s no início, +20 s no meio), que é a cara
do erro clássico dos DOIS RELÓGIOS (bruto × limpo) — e o detector de relógio trocado do próprio gate não
disparava, o que empurrava para "então o espelho está errado mesmo". Os +20 s eram âncoras casando em
ocorrência secundária. Cruzando as duas transcrições por 5-gramas únicos: **1886 pares casados, offset
mediano +10,313 s, variação de 8 ms entre 0 s e 1600 s** — deslocamento RÍGIDO, sem drift. Acumulado de
ripple cresce; offset de transcrição não. **Meça o drift antes de nomear a doença.**

**A regra — arbitre pelo ÁUDIO, que não tem versão.** Transcrição é opinião datada; a onda é o fato.
`volumedetect` decidiu em dois comandos: **0,0–2,5 s = mean −91,0 dB** (silêncio digital absoluto, o piso
do 16-bit — o Scribe punha fala ali) contra **45,4–47,9 s = mean −32,8 dB, max −15,2 dB**, exatamente
onde o corte e o espelho colocam a abertura, e a 16 ms do `silence_end` medido. Conserto certo: deslocar
o `words.json` de volta (+10,313 s) e preservar o cru em `_bruto/`, **nunca** mexer no espelho. Depois
disso o gate virou PASS sozinho. Antes de aceitar o conserto automático de qualquer gate, pergunte
**qual dos dois lados mudou por último** — `ls -la --time-style=full-iso` responde, e artefato de LLM
regenerado é mais barato de reverter que 58 clipes pagos.
### FIN-111 · Overlay alpha renderizado em H.264 vira TELA OPACA por cima do apresentador (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-111` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O problema, medido.** `s40-cta-inscrever` e `s91-cta-final` do `uruguai-despovoado` são overlays alpha
por desenho — o HTML declara `html,body{background:transparent}` e o cabeçalho diz *"overlay alpha
COMPACTO… NUNCA full-frame… render via capturar-alpha/ProRes4444"*. Saíram do render em **H.264, que não
tem canal alpha**: o transparente virou BRANCO. No XML entraram na V2 como clipes opacos de tela cheia —
**44,3 s de tela branca cobrindo o Bôco** (20,47 s em @402,80 s e 23,83 s em @1235,67 s). A
`_revisao-autonoma.json` **já os havia reprovado** (veredito REPROVAR, confiança 72) e eles seguiram
para o XML assim mesmo.

**A assinatura é a TAXA, e ela é gritante.** Tela quase uniforme comprime a quase nada: **s40 = 2,59 e
s91 = 3,74 Mbps** contra **80,7–299,6 Mbps** nas outras 56 cenas (`YAVG 235/255` contra 41,7 de cena
normal). Nenhuma contagem de arquivos vê isso — os dois `.mp4` existem, são recentes e abrem. Cheque
**taxa por cena contra a mediana do lote**: ordem de grandeza a menos = cena que não tem imagem dentro.

**A regra.** Cena cujo HTML declara fundo transparente **não pode** ser renderizada pelo caminho comum
nem entrar na V2: alpha se renderiza em ProRes 4444 e se monta em **V3**, por cima. E veredito de revisão
que diz REPROVAR é gate, não opinião — se o artefato reprovado chega à finalização, o furo é a ponte
entre as estações, não o olho que o pegou.

**RAIZ CONSERTADA (03/ago, estação de render).** Os dois lados passaram a decidir sozinhos, e nenhum
depende mais de alguém lembrar ([REND-70]): o `_render-4k-loop.sh` detecta a cena alpha pelo próprio
HTML e a manda para `render-alpha.sh` (artefato `-4k.mov`); o `xml-premiere-5camadas.mjs` decide a
camada pelo `pix_fmt` do arquivo (`yuva`/`argb` = selo → V3) e **anuncia no rodapé** cada cena que mudou
de camada — peça que sai da V2 calada é indistinguível de peça que sumiu.
### FIN-112 · Casamento de SUBSTRING vira rótulo falso — e o rótulo falso apaga o verdadeiro (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-112` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Dois casos no mesmo vídeo.** (1) O detector de bloco de anúncio do `xml-premiere-5camadas.mjs` testava
`/publi/i` contra o **id da cena**: `s90-boco-pergunta-publico` casou por causa de "**públi**co" e
inventou uma indicação de produto num vídeo sem publi nenhuma — plantando uma transição T2 na V5.
(2) O gatilho de CTA do `branding/overlays.mjs` testava o prefixo `curt`: "se você **curte** descobrir…"
virou CTA de like e pôs o overlay **6,2 s antes** da menção verdadeira ("deixa o like, se inscreve").

**O que faz o segundo caso ser pior que um alarme falso.** O dedup de 20 s do `gatilhos()` guarda só a
PRIMEIRA menção da janela — então o hit errado não apenas erra: ele **engole a âncora certa**, que nunca
chega a ser considerada. Falso-positivo em detector com dedup não soma ruído, **subtrai sinal**.

**A regra.** Rótulo se casa como TOKEN DELIMITADO, não como pedaço de palavra — `(^|-)publi(cidade)?(-|$)`
para id com hífen. Gatilho ambíguo por natureza (`curt` é "curte o vídeo" e "curte descobrir") precisa
de uma palavra de contexto: exigir que a seguinte não seja infinitivo (`-ar/-er/-ir`) separa os dois
sentidos e não tem regressão nos CTAs reais (medido: 9/9 casos, 7/7 no de `publi`). Quando o casamento
decide MONTAGEM, o teste de mesa é obrigatório — o custo de errar não é um log, é um frame no ar.
### FIN-113 · Aviso que só aparece quando o passo FALHA não é aviso — e o sucesso parcial vira "✓" (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-113` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O `xml-premiere-5camadas.mjs` termina com um bloco `⚠ AVISOS:` para o que ele **não pode
consertar sozinho** — no `oceano-700km`, *"24 cena(s) da V2 aparada(s) por exceder a janela do espelho
(FIN-05) — maiores excessos: c18 −40,97s, c27 −39,57s, c29 −37,07s"*, ou seja: a `c18` entra na timeline
com 28,1s de uma animação de 69,1s e **41 segundos de arte renderizada nunca aparecem**. O
`finalizar.mjs` lia o `stdout` do gerador **só no ramo do `else`** (o do fallback). No ramo de sucesso
imprimia `✓ oceano-700km-POS.xml — 49 cena(s), 68 KB` e jogava o resto fora.

**O custo, medido.** TRÊS sessões de finalização no mesmo dia (15:45, 16:25, 17:40) rodaram a estação,
leram "✓ XML ok", reprovaram o vídeo por **outros** itens e o devolveram à fila — nenhuma delas soube
que 24 cenas estavam truncadas. O defeito estrutural sobreviveu a três gates porque o único lugar que
o denunciava era um canal que a estação fechava. O aviso existia, estava certo, e era invisível.

**A regra.** Passo que SUCEDE também fala. Se uma ferramenta separa "consegui produzir o artefato" de
"o artefato está são", quem a chama tem de propagar as duas coisas — o `✓` responde pela primeira e
mente sobre a segunda. É a mesma classe do fallback silencioso: **o log de sucesso é onde o defeito
a montante se esconde**, porque ninguém vai ler o ramo que não disparou. Ao embrulhar uma ferramenta,
pergunte o que ela diz quando dá certo — e não deixe o `spawnSync` de sucesso descartar `stdout`.
### FIN-114 · DECUPAR DEPOIS DE RENDERIZAR deixa a arte com a janela BRUTA — e o aparo come o payoff (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-114` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

> 🔀 Nasceu como **FIN-115** na sessão de finalização do `oceano-700km` e colidiu com duas leis que uma
> sessão paralela escreveu no mesmo arquivo minutos antes (FIN-115/FIN-116, ambas ainda fora do remoto).
> Pela [SIS-62] o par consecutivo da outra sessão fica onde está; esta virou **FIN-114**.

**O caso, com a cronologia que é a prova.** No `oceano-700km`: HTMLs desenhados 28/jul–01/ago, clipes
renderizados 29/jul, **decupagem rodada em 03/ago 08:44→09:23** (51 cortes, −661,5s). O `dur` do espelho
é distância em tempo **BRUTO** e é ele que vira `__duracao` no HTML — então a arte nasceu dimensionada
para a janela bruta. Quando a decupagem posterior tirou retakes de **dentro** da janela de uma cena, a
janela limpa encolheu e o gerador de XML aparou o excesso (FIN-05, corretamente — sem aparo haveria
sobreposição). Resultado medido: **21 cenas aparadas, 285,7s = 4min46 de animação que nunca chega à tela.**

**Por que "é só o fim da animação" é falso.** O fim é onde mora o *payoff*. Frames olhados: a `c18` para
em "1 GRÃO / JUÍNA" e nunca mostra o arco **"3× TETO PLAUSÍVEL"**; a `c29` nunca mostra a frase-tese
**"O OCEANO É O TRANSBORDO."**; a `n18` congela em *"Uma Terra que já nasceu com"* — frase truncada no
meio, com o aparo de apenas 2,23s. **O tamanho do aparo não prevê a gravidade:** a `c12` perde 29,47s e
não perde nada (padding), a `n18` perde 2,23s e fica feia. Só olhar o frame do ponto de corte decide —
foi 7 de 21 com perda visível, 3 leves, 11 sobra inofensiva.

**A regra.** A decupagem é dona da janela; **renderizar antes de a lista de cortes estar fechada é
desenhar contra um relógio que ainda vai mudar.** Se a decupagem rodar (ou for refeita) depois do
render, a estação seguinte tem de **recontar as janelas limpas e re-renderizar as cenas cuja animação
não cabe mais** — não basta deixar o aparo geométrico resolver, porque ele resolve a colisão e não o
conteúdo. E o aviso de aparo do gerador **não é ruído de geometria: é a lista de cenas a reconciliar
na origem** (ver [FIN-113], que é o motivo de esse aviso ter passado três gates sem ser lido).
### FIN-115 · A PROVA REPROVOU O PRÓPRIO TRABALHO — três vezes, e nenhuma era o vídeo (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-115` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O `scripts/membros/atualizar.mjs` renderiza o card de créditos do Clube e só o promove ao
nome definitivo depois de PROVAR o `.parcial`. A [FIN-103] consertou o ponto em que ele nem chegava a
produzir arquivo. Com aquilo resolvido, o card de 03/ago saiu **impecável** — 3840×2160, `argb`,
20,000 s, 600 frames, 2,97 GB — e a prova o recusou assim mesmo, por três defeitos empilhados que não
têm nada a ver com o card:

1. **O nome do temporário matava o muxer.** O parcial se chamava `<alvo>.parcial`, e o `ffmpeg` escolhe
   o formato de saída pela ÚLTIMA extensão: em `.parcial` ele não acha muxer nenhum e morre em
   `Error initializing the muxer ... Invalid argument` **antes de escrever um byte**. O `render-alpha.sh`
   então cai no `trap rm -rf` e leva junto os **600 PNGs 4K** recém-capturados — 8 minutos de máquina
   destruídos pelo sufixo que existia justamente para proteger o artefato.
2. **A prova testava o NOME do codec, não o canal.** `if (!/^yuva/.test(pix))` — `yuva*` é ProRes 4444.
   O render passou a sair em `--qtrle`, que grava `argb`. `argb` carrega alpha (é o A de ARGB), mas não
   se chama como o codec anterior, e a prova acusava *"sem canal alpha"* num card com o alpha inteiro.
3. **O `ffprobe` imprime na ORDEM DELE.** `-show_entries stream=pix_fmt,width,height -of nw=1:nk=1`
   devolve `3840 / 2160 / argb` — a ordem interna do struct, não a do pedido. Com `nk=1` (que APAGA as
   chaves) e `const [pix, w, h] = …`, `pix` recebia a LARGURA. A prova emitia então duas mentiras
   coerentes entre si — *"sem canal alpha (pix_fmt=3840)"* e *"não é 4K (2160×argb)"* — que descrevem um
   arquivo que não existe.

**O custo.** O `atualizar.mjs` **nunca completou uma vez sequer** desde que nasceu (30/jul): o card de
27/jul que estava em produção veio de outra rota, na mão. Três defeitos independentes, todos na
VERIFICAÇÃO, mantiveram a estação parada enquanto o trabalho que ela verificava estava certo — e o
vídeo seguiu com uma lista de 7 dias, deixando 22 membros novos fora dos créditos.

**A regra.** *Quando o gate reprova, o primeiro suspeito é o gate.* Antes de refazer o artefato, meça-o
por fora: um card que o `ffprobe` descreve como 4K, com alpha e com a duração certa **está pronto** — o
que falhou foi quem perguntou. E prove **a propriedade, não o nome**: alpha é o canal, não `yuva`; 4K é
3840×2160, não a posição de um campo. Leitura de ferramenta externa por POSIÇÃO é contrato que você não
controla — leia por CHAVE (`-of default=nw=1`, sem `nk=1`), e o dia em que o `ffprobe` reordenar os
campos não vira um bug que descreve um arquivo inexistente.

---
### FIN-116 · A estação relatou um estado que não era o dela — CSV de outro dono e um `--refazer` que não refez (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-116` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**(a) A lista de membros tinha um dono, e a ponte perguntava a outro.** Em 30/jul o Clube ganhou pasta
própria (`assets/clube-membros/listas/`) e um resolvedor — `scripts/membros/resolver.mjs` — que é a
fonte única de *"qual lista vale hoje"*. O `finalizacao-config.mjs` continuou lendo `assets/membros/`,
o lugar de antes, onde a lista de 27/jul ficou congelada. Medido no `oceano-700km`: na MESMA execução
em que o XML pegou o card de 03/ago (227 membros, o certo, porque o gerador do XML pergunta ao
resolvedor), a ponte anunciou `csv: membros-2026-07-27.csv (7.1d)` e o gate da FIN-12 reprovou por uma
defasagem de 7 dias **que não existia**. O diretório velho não fazia mal por guardar lixo: fazia mal
por continuar RESPONDENDO.

**(b) `--refazer` não chegava em quem sabia pular.** O `trilha/escolher.mjs` implementa a retomada
certinho e imprime *"⏭ já existe — PULADO (`--refazer` regenera)"*. O `finalizar.mjs` o chamava com
`[proj, ...secoArg]` e **nunca repassava a flag**. Então `finalizar.mjs <proj> --refazer` reescrevia
branding, config e XML e deixava o plano de trilha INTACTO, exibindo uma linha que ensinava a fazer
exatamente o que acabara de ser feito e não funcionou. Custou uma rodada inteira: o plano era das
01:58, anterior ao conserto do picker de trilha, e o laudo reprovou de novo pelo mesmo item — com o
conserto já no código.

**A regra.** *Um assunto, um dono — e quem responde é o dono, não o hábito.* Quando um assunto ganha
resolvedor, todo leitor passa a perguntar a ele; o diretório antigo vira último recurso ou vai para o
arquivo morto, porque **fonte obsoleta que ainda responde é pior que fonte ausente**: a ausente falha
alto, a obsoleta mente baixo e produz ALARME FALSO — o defeito que ensina a ignorar o gate. E *flag que
o chamador imprime, o chamador tem de repassar*: promessa impressa que o código não cumpre manda o
operador repetir o comando que já não funciona.

---
### FIN-117 · Laudo mais VELHO que a peça não certifica a peça — o gate lia o veredito e nunca o carimbo (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-117` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O `qa-finalizacao.mjs` é o gate que a [FIN-13] exige: sem laudo PASS, o `entregar.mjs` não
promove. Ele lia o JSON, validava contra o contrato, contava os `FAIL` — e **nunca perguntou se o
laudo ainda descrevia o artefato**. Só que a estação de finalização REESCREVE o entregável a cada
execução, e num dia com várias sessões na mesma pasta a corrida é a regra, não a exceção.

**Medido no `oceano-700km`.** O laudo saiu às **20:01:29**; o `oceano-700km-POS.xml` foi regerado às
**20:02:23**, 54 segundos depois. O laudo reprovava o item 7 (FIN-12) afirmando que a cartela era
`agradecimento-membros-2026-07-27.mov` — e o XML no disco trazia `agradecimento-membros-2026-08-03.mov`,
com os 22 membros que tinham entrado na semana. **O veredito descrevia um arquivo que não existia
mais.**

**Por que é grave nos dois sentidos.** Um `FAIL` já consertado trava entrega boa e manda a produção
refazer o que já está certo — caro, mas visível. O inverso é o que publica defeito: um `PASS` emitido
antes da última regeração **libera uma peça que ninguém julgou**, e o gate assina embaixo. O segundo
caso não deixa rastro nenhum — é a família dos mortos-silenciosos, e este gate era a última porta
antes do bucket.

**A regra.** *Prova por EXISTÊNCIA nunca bastou; o que vale é o CARIMBO.* É a [REND-39] um nível
acima: lá o teste é o clipe ser mais novo que o HTML, aqui é o laudo ser mais novo que o entregável.
Todo artefato de VEREDITO — laudo, gate, aprovação, relatório de verificação — nasce colado a uma
versão do que julgou, e envelhece junto com ela. Quem consome um veredito compara os dois relógios
antes de acreditar. O `qa-finalizacao.mjs` agora devolve o estado **`vencido`** quando o entregável é
mais novo que o laudo, e o `entregar.mjs` recusa promover — porque só `PASS` e `resolvido` passam.
### FIN-118 · Âncora posicional é do relógio do ESPECTADOR — 12 s no bruto viraram o frame 0 (03/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-118` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O `overlays.mjs` planeja tudo em tempo BRUTO (o do `words.json`) e a ponte remapeia para o
LIMPO depois. Os CTAs falados vêm da fala, então sobrevivem por construção. Mas as âncoras
POSICIONAIS — as que o script inventa para garantir a cobertura da [FIN-11] — eram coordenadas
cravadas à mão: `inSec: Math.min(12, limite)`. Doze segundos de quê, ninguém tinha perguntado.

**Medido no `senna`.** O bruto de todo vídeo gravado do zero abre com mic-check: aqui, **33,47 s** de
cabeça (*"Pode ir? Beleza. [pigarro] Acho que tem que apagar a luz, filho"*, classe `erro`). Os 12 s
da âncora caem inteiros dentro dessa cabeça. O `mapSecFactory` devolve `null` para instante engolido
por um corte, a ponte então **encosta o overlay no início do corte** — e quando o corte começa em 0, o
"início do corte" é o frame 0 do vídeo. O `cta-like-intro` foi para **0,00 s**, por cima da primeira
imagem. Não é caso isolado: **4 de 4** projetos com decupagem tinham o mesmo CTA no frame 0 —
`senna` 33,5 s de cabeça, `uruguai-despovoado` 45,4 s, `oceano-700km` 53,8 s, `paises-baixos-mar`
63,2 s.

**O gate aprovava — pelo motivo errado.** A checagem da FIN-11 no próprio script media
`inSec <= 60` em BRUTO e contava a intro como coberta: 0 s ≤ 60 s. O defeito que ele existe para pegar
era exatamente o que o fazia passar. *Gate no relógio errado não é gate fraco: é gate invertido.*

**E tirar a âncora de dentro do corte NÃO bastou.** O primeiro conserto empurrou os 12 s para 33,6 s
(logo depois da cabeça) e o CTA caiu em **0,13 s limpos** — o mesmo frame 0, por um caminho mais
comprido. Nem o terceiro: no gate, um fallback `null → devolve o bruto` misturou os dois relógios na
mesma comparação e passou a exigir CTA depois de 1635,8 s **limpos** num vídeo que acaba aos 1399,5 s.
Os 4 projetos reprovaram o FIM tendo CTA a 2 s do fim real.

**A regra.** *Uma coordenada em segundos só significa alguma coisa no relógio em que foi pensada.* A
posição de um overlay posicional é uma intenção sobre o que o ESPECTADOR vê ("o CTA entra uns 12 s
depois que o vídeo começa") — então se declara em LIMPO e se converte para BRUTO na entrada, com
`mapSecInversoFactory`, que por construção só devolve instantes vivos. Toda janela de julgamento
("o primeiro minuto", "os últimos 60 s") se mede em LIMPO. E `null` do ripple nunca vira o valor
bruto: encosta no início do corte, como a ponte faz. Num vídeo sem cabeça os dois relógios coincidem
— foi por isso que a posição fixa ficou tanto tempo de pé sem ninguém ver.

---
### FIN-119 · A música do capítulo começava DEPOIS do card — e o card de abertura ia ao ar em silêncio absoluto (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-119` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** O gerador converte LIMPO → FINAL com duas variantes de propósito: `comGapF` (`g <= tF`,
conta o gap do próprio ponto) e `comGapCardF` (`g < tF`, não conta). O card usa a segunda porque ele
*ocupa* o buraco que abriu. O trecho de trilha usava a primeira — inclusive no **início**.

**Medido no `oceano-700km`.** O cold-open era declarado `0 → 25,433 s` LIMPO e o cap 1 começava
exatamente nesse ponto, que é onde mora o card 1. Com `comGapF` nos dois, o silêncio ia até 29,167 s
e o cap 1 também: **3,733 s com o card de abertura na tela e SILÊNCIO ABSOLUTO** — a A1 não cobre o
gap (ele é mudo por construção) e a A2 ainda não tinha entrado. E o gerador ainda imprimia a janela
de −10 dB do `cTITULO1` em `25,4 → 29,2`: um *duck* declarado sobre música que não existia.

**A regra.** Fronteira de trilha que cai num ponto de gap usa a variante do CARD. Só morde o card
sem trecho anterior cobrindo o buraco (na prática, o primeiro depois do cold-open): nos cards do meio
quem cobre é o trecho ANTERIOR, cujo `b` atravessa o gap de propósito. Por isso o `b` não muda.

**Agente-raiz:** `scripts/xml-premiere-5camadas.mjs` (relógio da A2).

---
### FIN-78 · A cena depois do card entra 1–2 frames tarde, e isso conta como flash de Bôco (04/ago/2026)

**O caso.** O card entra por `comGapCardF` e o buraco mede `f2(dur)` do clipe dele. A cena seguinte
entra por `comGapF` a partir do `limpoSec` DELA — e esse ponto quase nunca é exatamente o ponto do
gap, porque a cena começa no frame em que a fala a pede. Sobra a diferença: 1–2 frames em que a V2
não cobre nada, a V1 aparece, e a [FIN-08] conta como janela de apresentador < 2 s.

**Medido no `oceano-700km`.** Três piscadas, todas na emenda card→cena: **@222,800 s (2 frames)**,
**@501,133 s (1 frame)**, **@723,767 s (1 frame)**. O laço anti-flash nunca as viu porque pulava todo
par que envolve card — *"o respiro do card é desenho, não defeito"*, verdade para o vão ANTES do card
e falso para o resíduo DEPOIS dele.

**A regra.** Encoste a CENA no fim do card, não estique o card: a duração do card é a do arquivo
renderizado, então pedir um frame a mais dele estoura o `out` da fonte. Puxar a cena 1–2 frames para
trás custa 33–67 ms de word-lock e não inventa frame nenhum.

**Agente-raiz:** `scripts/xml-premiere-5camadas.mjs` (geometria da V2).

---
### FIN-79 · Gatilho de CTA dentro de corte é retake apagado, não menção — e CTA não entra em cima do fecho da cena (04/ago/2026)

**Dois defeitos, a mesma origem: o CTA falado não sabe o que houve em volta dele.**

**(a) O órfão.** `foraDeCorte()` empurra o instante para o primeiro keep depois do corte. Isso serve à
TRANSIÇÃO, que é posicional. Para o CTA, que é word-locked, fabrica um botão sobre uma frase que
ninguém diz. Medido: o Bôco disse *"deixa o like"* em **782,60 s**, engasgou, e refez a fala inteira
em **819,44 s**; a decupagem removeu `775,266 → 812,086` (classe `retake`, 36,8 s). O gerador emitia
CTA nos DOIS pontos. **Três sessões apagaram o órfão à mão no JSON e a regeração seguinte o trouxe de
volta** — porque o conserto nunca esteve no código. Com o descarte certo, a menção real volta a ser o
índice 0 e recupera o nome `cta-like-abertura`.

**(b) O fecho da cena.** A caixa do CTA abre ~1,1 s depois de ele entrar e cresce para a esquerda. Os
últimos segundos de uma cena são onde moram o payoff e o CRÉDITO DA FONTE — então o CTA aparece limpo
no frame em que se testa e cobre a informação no frame seguinte. Medido: o `cta-like-abertura` entrava
dentro da `n11-citacao-jacobsen-ciclo` (que acaba em 820,00 s) e a caixa apagava *"Steven Jacobsen /
Mineralogista · Northwestern University"* — o crédito que VALIDA a citação.

**A regra.** Gatilho engolido por corte **sai**. Gatilho nos últimos ~2 s de uma cena é empurrado para
a fronteira dela; como o `at` É a menção, o empurrão mantém a fala dentro da janela do selo.

**Agente-raiz:** `scripts/branding/overlays.mjs`.

---
### FIN-80 · O id real do card é `cTITULO1`, e o regex da rede de segurança exigia minúscula e hífen (04/ago/2026)

**O caso.** O fallback que deriva as fronteiras de capítulo do espelho — a rede escrita para que nunca
exista vídeo com capítulo e sem T1 ([FIN-10], [FIN-17]) — filtrava por `/titulo-\d/`. Os cards do
`oceano-700km` se chamam `cTITULO1..cTITULO4`: **maiúsculo e sem hífen**. O segundo teste
(`/^CARD\b/` no `titulo`) também não pega, porque o `titulo` é o nome do capítulo (*"O diamante que
subiu molhado"*).

**O efeito.** `cards` vazio → `blocos` vazio → **ZERO transições**, exatamente o defeito que o bloco
existe para impedir. E, de quebra, a âncora do CTA de intro caía no `else 30`. Passava calado porque
**lista vazia não é erro**.

**A regra.** Guarda que nunca dispara é pior que alarme falso: não protege e ainda tranquiliza. Todo
fallback precisa de um teste que prove que ele JÁ disparou pelo menos uma vez com dado real.

**Agente-raiz:** `scripts/branding/overlays.mjs`.

---
### FIN-81 · O QR do clube não pode ultrapassar o fim do conteúdo — a cartela vem colada nele (04/ago/2026)

**O caso.** A âncora do QR é a MENÇÃO FALADA (*"clube de membros"*), e ela não sabe quanto o vídeo
ainda dura. No `oceano-700km` o Bôco cita o clube a **6,2 s** do fim do conteúdo e o QR dura **9,5 s**:
ele termina 3,267 s DEPOIS do último frame do master. Como `cartelaAt = ctaAt + dCTA` (a cartela entra
colada, [FIN-12]), a cartela escorrega junto.

**Medido.** 98 frames (**3,267 s**) de TELA PRETA com o cartão do QR no canto inferior esquerdo, sem
logo (a V4 acaba com o conteúdo) e sem áudio nenhum (A1 acaba em 1046,700 s, A2 em 1043,133 s).

**A regra.** O conserto é geométrico, não editorial: recua o QR o tanto que ele passou, para que ele
ENCOSTE no fim do conteúdo e a cartela comece exatamente ali. A menção continua dentro da janela do QR
por construção (ela é anterior ao fim do conteúdo). Só encurta para trás, e só quando passa — com
folga é um no-op, e as duas rotas continuam idênticas. ⚠️ O mesmo clamp cabe no
`finalizar-youtube.mjs`, que posiciona a cartela com a mesma conta.

**Agente-raiz:** `scripts/xml-premiere-5camadas.mjs`.

---
### FIN-82 · Dois selos na tela não se resolve empilhando trilha (04/ago/2026)

**O caso.** Quando um CTA de like encontrava o QR do clube, o gerador avisava que eles *"vão para uma
trilha empilhada na normalização"*. Promover o de cima para uma camada real arruma o XML e **não
arruma o vídeo**: os dois continuam aparecendo juntos, que é o que a [FIN-11] proíbe (*"0 pares na
tela ao mesmo tempo"*).

**Por que o dedup do plano não pega.** O `overlays.mjs` compara o `cta-membro` (**8,0 s**) na posição
do plano; quem vai à tela é o `cta-qr-clube` (**9,5 s**), e desde a [FIN-81] ele ainda pode recuar.
Três diferenças que só existem no gerador — então a decisão tem de ser tomada lá.

**A regra.** Recua o like o tanto que ele invade, com respiro; como o `at` dele é a menção, o recuo
mantém a fala dentro da janela enquanto for menor que a duração. Se não couber, o like **sai** — é a
régua que a casa já usa: entre dois CTAs que se cruzam vence o que não tem substituto, e o card de
membros é único e obrigatório ([FIN-02], [FIN-12]) enquanto o like se repete no vídeo inteiro.

**Agente-raiz:** `scripts/xml-premiere-5camadas.mjs`.

---
### FIN-83 · O recuo de UM passo cai dentro do corte anterior, e o `?? 0` teleporta a faixa para o segundo zero (04/ago/2026)

**O caso.** `paraLimpo` no `finalizacao-config.mjs` tratava "instante dentro de corte" com um único
salto para trás: `mapSec(c.ini - 0.001) ?? 0`. Quando os cortes são **adjacentes** — retake colado em
erro colado no título lido em voz alta, o feijão-com-arroz da decupagem do zero — esse ponto ainda
está cortado, `mapSec` devolve `null` de novo, e o `?? 0` responde **0**.

**O efeito.** No `energia-escura` (42 cortes, −433,1 s), das 11 faixas do `_trilha-plano.json`:
`On the March` (38,7–243,4 s) virou `a=24,4 b=0` e `Constellations` (1104,7–1315,1 s) virou
`a=797,8 b=0` — `fim <= ini`, **descartadas** pelo normalizador; `Close Encounter` e `Echoes` viraram
`0→230,2 s` e `0→1043,9 s`, ou seja música em cima do cold-open que a [FIN-07] declara MUDO, e uma
faixa de 135,4 s encarregada de 1043,9 s. O script imprimiu **"9 faixa(s)"** e seguiu. Duas perdidas e
duas impossíveis, sem uma linha de aviso — o rodapé contava o que sobrou, não o que entrou.

**A regra.** Fallback que responde `0` em caso de dúvida não é defensivo: `0` é um instante VÁLIDO, e
por isso o erro não levanta exceção nem log — vira uma faixa tocando no lugar errado. Quando o recuo
puder encadear, resolva a cadeia inteira (desconte `(t - c.ini)` do corte que contém `t` e
`(c.fim - c.ini)` dos anteriores) — que é a conta que o `compor-base-youtube.mjs` já fazia para
posicionar as CENAS. **Overlay, trilha e cena têm de sair da MESMA conta**, senão o card e o duck dele
param em lugares diferentes. E todo remap em lote deve comparar quantas entradas ENTRARAM contra
quantas SAÍRAM: contagem que só reporta o sobrevivente esconde exatamente o que se perdeu.

**Agente-raiz:** `scripts/finalizacao-config.mjs`.

---
### FIN-120 · `_cards-titulo.json` só existe na rota pré-editada — na edição do zero o card é cena do espelho (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-120` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** A ponte lia as janelas de −10 dB **só** do `_cards-titulo.json`, que é escrito pelo
`gerar-cards-titulo.mjs` no fluxo em que os cards chegam como peças à parte. Quando o vídeo nasce do
bruto, o montador põe os cards DENTRO do espelho (`cTITULO1..4`, com HTML e clipe renderizados como
qualquer cena) e esse arquivo **nunca é escrito**. A ponte devolvia `titulos: []`.

**O efeito.** No `energia-escura`, 4 cards e 11,5 s de vídeo com **zero** janelas de boost: a trilha
ficaria presa em −35 dB o vídeo inteiro. E o estrago mora justamente no card — ali o Bôco **não fala**,
porque o corte de classe `titulo` removeu a leitura em voz alta —, então sem o boost o card vai ao ar
em quase-silêncio, que é o buraco que a [FIN-07] existe para fechar.

**A regra.** Mesma raiz da [FIN-40] e da [FIN-80]: as fronteiras estavam no espelho o tempo todo, e a
rede que o `trilha/escolher.mjs` e o `branding/overlays.mjs` já tinham ganhado faltava aqui. **Um
arquivo que só existe em UMA das duas rotas de produção não pode ser a única fonte de nada** — quando
faltar, derive do espelho (`ehCardDeTitulo`, dono único em `src/modos.mjs`), e tire a duração do CLIPE
renderizado, que é a régua que o composto usa (`durOf(clip)` manda sobre o `dur` do espelho).

**Agente-raiz:** `scripts/finalizacao-config.mjs`.

---
### FIN-121 · O que variava não era o sufixo do id, era a POSIÇÃO do número — e o predicado morava em três cópias (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-121` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** "Isto é um card de título de tópico?" é a pergunta que define FRONTEIRA DE CAPÍTULO, e três
consumidores independentes precisam dela: `trilha/escolher.mjs` (uma faixa por capítulo + cold-open
mudo), `branding/overlays.mjs` (as transições T1/T2) e `finalizacao-config.mjs` (a janela de −10 dB).
Cada um carregava sua **própria cópia** de um regex sobre o `id`, e cada cópia foi remendada em
separado conforme chegava um espelho novo:

| dialeto | conserto |
|---|---|
| `s08-titulo-1` | o original |
| `cTITULO1` | [FIN-80] acrescentou `/i` e `[-_ ]?` |
| `04-titulo-topico` | **esta lei** — o número vem ANTES |

**A armadilha.** Os dois primeiros casos variavam no SUFIXO, então os dois consertos alargaram o
sufixo. O terceiro variou do outro lado: em `04-titulo-topico`, depois de `titulo-` vem `t`, não
dígito. Nenhum dos três regexes casa.

**O efeito, medido no `nilo-nao-secou` (4 cards, 46 cenas).** Os três consumidores caíram juntos e em
silêncio, porque **lista vazia não é erro**: (1) o picker tratou 1679 s como UM ato chamado "vídeo",
que não casa `/abertura|intro|cold/` — a cama entrou em **0,0 s, por cima do cold-open** que a
[FIN-07] manda deixar mudo; (2) o mood saiu de uma tigela com as 46 teses juntas, dando "Hopeful" em 7
das 9 faixas de um vídeo sobre um enigma geológico; (3) ZERO transições, o defeito que a [FIN-10]
existe para matar; (4) os 4 cards ao ar em quase-silêncio, com a trilha presa em −35 dB.

**A regra, em duas partes.** (1) **Quando um dado existe declarado, casar no rótulo é escolher a fonte
fraca**: `titulo-topico` é modo oficial do catálogo, enquanto o `id` é convenção de quem escreveu o
espelho e muda a cada montador — leia `modo` e deixe o `id` como rede. (2) **Predicado que três
consumidores fazem é predicado com dono**: `ehCardDeTitulo`/`cardsDeTitulo` em `src/modos.mjs`. Três
cópias erraram três vezes; a quarta se conserta uma vez só. *Remendo que alarga o caso conhecido não
generaliza — só adia o próximo dialeto.*

**Agente-raiz:** `src/modos.mjs` (novo dono) + os três consumidores.

---
### FIN-122 · Lei implementada em UM ramo é lei que vale por acaso — quem escolhe o ramo é o formato do espelho (04/ago/2026)

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `FIN-122` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**O caso.** A [FIN-53] está escrita em prosa dentro do `trilha/escolher.mjs`: *"o apresentador segue
falando depois que a última arte sai da tela; ancorar a cama nas cenas deixa a fala final a seco"*. A
medição do fim pela NARRAÇÃO (`words.json`) estava implementada — mas **dentro do ramo "sem blocos"**,
um dos três caminhos que o script tem para decidir capítulos. O ramo que deriva capítulos dos CARDS
fechava o encerramento em `fimV`, o fim da última CENA.

**O efeito.** No `nilo-nao-secou` a última cena termina em 1630,43 s e a última palavra em 1678,71 s:
**48,28 s de despedida sem cama**, na zona cega de sempre — o fim, que ninguém revisa. E o vídeo só
caiu nesse ramo porque o espelho traz os cards como cenas; o mesmo vídeo, com `_blocos.json`, teria
pegado o ramo certo e a lei teria "funcionado".

**A regra.** Quem escolhe o ramo é o FORMATO DO ARQUIVO DE ENTRADA, não o mérito do caso — então uma
lei que vive em um ramo só está sujeita a sorte de formato. Ao consertar um ramo, **pergunte quantos
outros respondem a mesma pergunta** e extraia a régua para uma função que todos chamem
(`fimDaFalaBruto()`). O sintoma é sempre o mesmo: o log de um ramo imprime o aviso ("fim do conteúdo
pela NARRAÇÃO…") e o outro não imprime nada.

**Agente-raiz:** `scripts/trilha/escolher.mjs`.

---
### FIN-87 · Card NARRADO não é respiro — o boost de −10 dB vira música por cima da voz (04/ago/2026)

**O caso.** A [FIN-82] passou a derivar as janelas de −10 dB dos CARDS do espelho quando não existe
`_cards-titulo.json`, com a premissa escrita no próprio comentário: *"ali o Bôco NÃO fala — o corte de
classe `titulo` removeu a leitura em voz alta"*. A premissa foi **assumida, não medida**. Medida agora,
com a régua que o mix usa (`[inSec, outSec]` em tempo LIMPO, contando só palavra que SOBREVIVE ao
ripple), ela é falsa nos dois vídeos: `uruguai-despovoado` tem 16 a 18 palavras vivas em cada um dos 4
cards — o card diz **MAIS VACA QUE GENTE** e o Bôco fala isso e emenda direto, *"Para sentir o tamanho
desse vazio, vale começar por quem mora lá"* — e o `energia-escura`, o vídeo que motivou a [FIN-82],
tem 7 a 9 palavras em cada um dos seus 4.

**Por que cortar a leitura do título NÃO abre respiro.** O corte tira a fala do BRUTO, mas o card
continua ocupando a duração do CLIPE no composto, e o `compor-base-youtube` posiciona cena em tempo
LIMPO **sem inserir gap** — ele só FECHA fresta ([FIN-08]). Então o card não abre silêncio: ele se
sobrepõe à narração SEGUINTE, que já está correndo.

**A armadilha de medição.** Medir a janela em BRUTO engana e foi o que sustentou a premissa: no
`energia-escura` o `cTITULO1` tem 10 palavras na janela bruta e **0 sobreviventes**, o que parece
respiro; a janela de boost REAL (3 s LIMPOS a partir de `paraLimpo`) cai sobre *"Começa como um fato
que parece impossível."* Janela bruta e janela de boost têm a mesma duração em números e cobrem
conteúdos DIFERENTES quando há corte no meio.

**A regra.** Janela de realce só sai onde é de fato respiro — mede-se com a MESMA régua e no MESMO
relógio que o consumidor usa. Onde há voz, a proteção de −30 dB sob narração é que vale: subir 20 dB
ali abafa exatamente o que a trilha existe para acompanhar. Não reverte a [FIN-82] — o ramo do espelho
segue derivando os cards; o que muda é que cada janela passa por um teste de respiro, e o script diz
em voz alta qual caiu e por quê.

**Agente-raiz:** `scripts/finalizacao-config.mjs`.
### FIN-88 · O card mora no corte por desenho, mas quem some do XML é ele — a rede existia só para as cenas ANCORADAS (04/ago/2026)

**O caso.** Na finalização do `nilo-nao-secou`, o gate `qc-espelho-fala` dizia **PASS** e os 4 cards de
título de tópico iam **todos** para fora do vídeo. O gerador do XML resolve a posição com
`const at = limpo(s.inSec); if (at === null) continue;` — e `inSec` dentro de um corte não tem tempo
limpo. Card descartado é título de capítulo que não aparece **e** gap que não abre; sem gap, o duck da
trilha desce sobre a narração viva ([FIN-109]). Nada contava, nada acusava: 4 de 4 ausentes, gate verde.

**A raiz, e ela é assimétrica.** O realinhamento monotônico já protegia as cenas ANCORADAS de pousar em
corte (*"posição que não existe no vídeo final não é candidata"*, a rede da [FIN-100]/`oceano-700km`). As
FLUTUANTES — cards não narrados, que não têm fala própria e são posicionadas por interpolação entre as
vizinhas — não tinham essa rede: a interpolação as põe onde a proporção mandar. E a fronteira de
capítulo é **exatamente onde o decupador corta** (a leitura do título em voz alta, a pausa, o retake).
O card cai no meio do trecho removido por construção, não por azar. Medido: 3 dos 4 já vinham assim do
montador; o quarto foi empurrado para lá pelo próprio `--corrigir`, que consertou 5 cenas de conteúdo e
matou um card no mesmo passe.

**Morar no corte é o desenho; sumir do XML não é.** Os dois casos coexistem e a [FIN-17] só cobre o
primeiro: em corte de classe `titulo` o card cobre o buraco que a leitura cortada deixou — é para isso
que ele existe. O que faltava dizer é *onde* ele entra depois do ripple: na **EMENDA**, o primeiro
instante que sobrevive ao corte. Ali o gap que ele abre cai em cima do buraco que o corte fez, que é o
comportamento que a [FIN-17] sempre quis. Nos cortes de `retake` não há desenho nenhum — é acidente, e
a emenda também é o destino certo.

**O gate não podia enxergar.** Card é pulado da verificação de fala com razão (não tem fala a cruzar —
alarme falso ensina a ignorar o gate), e o `continue` levava junto a única pergunta que cabia a ele:
*você existe no vídeo final?* Pior, o PASS saía **antes** do bloco `--corrigir`, então mesmo quem
rodasse com a flag não consertava nada enquanto não houvesse outro achado.

**A régua do "é card".** Cobrar posição limpa de tudo que `eCard` pega produz alarme falso: aquele teste
inclui `anima === false`, que é toda cena de apresentador ("manter") — sem clipe, sem gap, nem chega ao
XML. Medido: 6 falsos contra 4 reais. O predicado certo é o do gerador — o `modo` oficial
(`titulo-topico`, M26) mais os fallbacks de id/título.

**A regra.** Quem não tem fala própria ainda tem de ter LUGAR. Toda peça posicionada por interpolação
passa a ser empurrada para o primeiro instante vivo (`primeiroVivo`), com a cena seguinte como teto — e
o gate acusa card sem posição limpa como ERRO, com a emenda no texto do achado.

**Agente-raiz:** `scripts/qc-espelho-fala.mjs`.

---
### FIN-89 · Recuar N segundos num relógio onde o trecho final foi cortado não recua nada — a margem vira ZERO (04/ago/2026)

**O caso.** Na trilha do `orcas-nao-matam`, o `cta-inscreva-fim` foi parar em **1129,64 s de um vídeo de
1129,64 s**: o último frame. Um `.mov` de 3 s que começa no instante em que o vídeo acaba não aparece —
e nada reprovava. O `finalizar-youtube.mjs` não compara `atSec` com a duração do composto: ele empurra
o overlay para a lista e carimba *"CTAs like/inscreve: APLICADO"*.

**A raiz não é a posição, é a RÉGUA da distância.** A âncora está escrita assim, e a intenção é certa:
`inSec: fimVideo - dur - 1` — *"recuado do último frame para não ser cortado pelo mux"*. O defeito é que
`fimVideo` é `words[último].t`, a última palavra de `words.json`, que é a transcrição **BRUTA** e inclui
o que a decupagem jogou fora. Quando a decupagem corta justamente a cauda — retake, engasgo, o "valeu,
pessoal" refeito —, os 4 s de recuo aterrissam **DENTRO do corte**, e o remap da ponte encosta o overlay
no início do corte, que *é* o fim do vídeo. Medido aqui: fala bruta até 1793,60 s, mas 1789,118→1794,098
é corte; o CTA foi para 1789,6 e virou 1129,64 limpos. A margem não encolheu — ela virou zero.

**Por que é uma lei nova e não a [FIN-83] nem a [FIN-88].** Na [FIN-83] o overlay ia parar no lugar
ERRADO (teleportado para o segundo zero); na [FIN-88] o card SUMIA do XML. Aqui ele está exatamente onde
a conta pediu — **a conta é que foi feita na régua errada**. É a mesma família da [FIN-118], que já exigia
o relógio LIMPO na CHECAGEM da janela de 60 s; faltava exigi-lo na ÂNCORA que a checagem valida.
*Distância medida em tempo bruto não é distância no vídeo montado.*

**A regra.** Toda margem de segurança medida a partir do fim usa o último instante **VIVO** (`fimVivo` =
última palavra que sobrevive ao ripple, via `naFalaViva`), nunca a última palavra bruta. Vale para
qualquer peça ancorada por recuo, não só o CTA.

**O efeito colateral é a verdade aparecendo.** Com a régua certa o CTA ancora em material vivo, aí
CRUZA com o card de membros (1779,4–1787,4 s) e é descartado **com log**. É o resultado correto: em
tempo limpo o card de membros termina a 1127,92 s de um vídeo de 1129,64 s — sobram 1,72 s e um CTA de
3 s não cabe mesmo. A FIN-11 segue satisfeita (o fim tem CTA). Antes ele existia MENTINDO; agora a
ausência é visível e justificada. *Overlay fantasma é pior que overlay ausente, porque o laudo o conta.*

**Agente-raiz:** `scripts/branding/overlays.mjs`.
**Lacuna conhecida (não fechada aqui):** `scripts/finalizar-youtube.mjs` aceita `atSec` fora da duração
do composto sem reclamar. Enquanto ele não comparar os dois, este defeito volta por outra porta.
**FIN-90.** AVISO DE SYNC ESCRITO NUM JSON É REGRA MORTA — MEÇA A JUNÇÃO CÂMERA×MIC NO ARQUIVO PRONTO
   (medido em 04/ago/2026, estação FINALIZAÇÃO do `energia-escura`; o defeito nasceu em 27/jul e
   atravessou OITO DIAS e TODAS as estações).
   O `corrigir-source-bruta` montou a `source-sincronizada.mp4` com um offset de **baixa confiança**
   (`offsetDetectado: -10.75`, `confianca: 6.3`, `scorePico: 0.048`, `baixaConfianca: true`). Horas depois
   o `sync-dual-system` mediu o par de origem direito — **+16,38 s, conf 0,916** — e o `sync.json` gravou o
   aviso, por extenso: *"pode estar DESALINHADO na imagem (o offset real +16.38 caiu fora da janela ±15s).
   O corte por TEXTO é válido; **CONFERIR A JUNÇÃO DE VÍDEO à mão** antes de usar como fonte de imagem"*.
   **Ninguém conferiu.** O projeto seguiu para espelho, pesquisa, arte (41 cenas), QC (9 lentes, 41 laudos,
   41/41 aprovadas) e render 4K (41 clipes) — todos verdes, porque **nenhum deles olha a imagem do bruto**.
   O erro só apareceu quando a finalização foi montar o V1.
   **A MEDIÇÃO QUE RESOLVE, e é barata:** o arquivo muxado tem DUAS faixas — `a:0` mic e `a:1` câmera. A
   faixa da câmera foi gravada pelo mesmo dispositivo que a imagem e **não leva `itsoffset` no mux**
   (`-map 0:v:0` + `-map 1:a:0`, o offset vai só no mic): ela está travada à imagem. Então
   **correlacionar a:1 contra a:0 DENTRO do arquivo pronto mede o desalinhamento voz×imagem direto**, sem
   precisar dos originais — que aqui já nem existiam (`_bruto/origem/` foi apagado).
       ffmpeg -ss 100 -t 400 -i source-sincronizada.mp4 -map 0:a:1 -ac 1 -ar 8000 scratch.wav
       ffmpeg -ss 100 -t 400 -i source-sincronizada.mp4 -map 0:a:0 -ac 1 -ar 8000 mic.wav
       python3 scripts/decupagem/_sync-corr.py scratch.wav mic.wav     # ≈0 = imagem e voz batem
   Resultado medido: **5,620 s (conf 0,908)** na janela 100–500 s e **5,640 s (conf 0,933)** na de
   1000–1400 s → **offset CONSTANTE, não drift** — e fecha com a aritmética do aviso: 16,38 − 10,75 = 5,63.
   **CALIBRE O SINAL, não confie na convenção escrita.** Os dois scripts da casa documentam o sinal com
   palavras opostas (`_sync-corr.py` diz *"OFFSET>0 ⇒ o MIC começou DEPOIS do vídeo"*; `corrigir-source-bruta`
   diz *"offset>0 = mic ATRASADO vs câmera"*), e seguir a errada dobra o defeito em vez de zerá-lo. O teste
   custa 5 s: atrase o mic num valor conhecido e veja para onde o número anda. Aqui, `adelay=2000` levou
   5,620 → **3,620** — logo positivo = mic **ADIANTADO**, e a voz estava 5,63 s à frente da boca.
   **QUAL LADO MOVER:** o `words.json`, o `_cortes.json` e o `espelho.json` vivem no relógio do **MIC**.
   Mexer no mic obriga a ressincronizar os três. **Mova o VÍDEO** — o relógio do áudio fica intacto e o
   plano de corte inteiro continua válido. Neste caso o conserto não custava um único frame útil: os
   5,63 s descartados no início caem dentro do 1º corte (0→14,05 s, mic-check) e a ponta final não tem
   fala nenhuma (última palavra em 1529,99 s, e o keep final 1534,64→1545,02 tem **0 palavras**).
   **⚠️ MAS CONFIRME O RELÓGIO NO PRÓPRIO `words.json` — NUNCA no `audio.wav`** (medido em 04/ago, no
   conserto deste mesmo vídeo; foi o passo que quase inverteu a correção). O `out/<proj>/audio.wav` — o
   arquivo que o `transcribe.mjs` manda para o Scribe — estava aqui na faixa da **CÂMERA**, não na do mic:
   correlação `a:1 × audio.wav` = **OFFSET 0,000 / CONF 1,000** (sinais idênticos), duração idêntica à da
   câmera (1545,024 s, contra 1534,157 s do mic). Quem tomar o `audio.wav` como prova do relógio da
   transcrição conclui que o `words.json` vive no relógio da CÂMERA — e então **move o mic em vez do
   vídeo, DOBRANDO o erro** em vez de zerá-lo. Aqui o `words.json` não veio do `audio.wav`: veio do
   **WhisperX rodado sobre o mic** (`_decupagem/words-ORIGINAL-whisperx.json`).
   **O teste que desempata é o próprio plano de corte:** derive de `words.json` um sinal binário
   fala/silêncio a 100 Hz e correlacione contra o envelope de cada candidato. Medido na janela 600–780 s:
   vs câmera **+16,360 s**; vs `a:0` do container **+10,730 s** (= exatamente o `start_time` do mic no
   mux); vs o wav extraído do `a:0` **+0,000 s**. Lag zero = é esse o relógio. *O arquivo que gerou a
   transcrição pode ter sido descartado ou estar errado; o relógio dela está no artefato que sobrou.*
   **E note como o mic sai do container:** `ffmpeg -i src.mp4 -map 0:a:0 mic.wav` **DESCARTA** o
   `start_time` (aqui 10,728 s) e entrega o **mic cru** — que é justamente o relógio do `words.json`. Por
   isso o modo dual do `master-decupado.mjs` resolve sem gambiarra: extraia o `a:0`, mantenha o `sync.json`
   com o offset REAL (16,38) e ele acerta sozinho. O log tem de dizer *"cortes em tempo-MIC — último corte
   1534,64 s ≈ mic 1534,17 s (vídeo: 1545,02 s)"*, **com evidência** — se disser *"assumido"*, pare e meça.
   (Consequência colateral: com `baseDur` = duração do mic cru, aquele keep final de 0 palavras deixa de
   existir, e o master fecha em 1101,5 s de conteúdo mantido.)
   **A regra:** *aviso que depende de alguém lembrar não é rede, é bilhete.* O `qc-sync` já existe e cobra
   procedência (a faixa é a do mic?) — mas não cobrava **alinhamento**. Enquanto a medição acima não virar
   gate automático na saída da ingestão, todo projeto dual-system com `baixaConfianca: true` pode chegar ao
   render 4K com lip-sync quebrado e 100% dos gates verdes. Mesmo padrão da [FIN-04]/[SIS-64]: regra sem
   verificação automática é regra que morre no dia em que ninguém lembrar.
   **ARMADILHA DA RETOMADA, ao trocar a fonte:** o `master-decupado.mjs` guarda os segmentos em
   `/tmp/masterdec-<proj>/` e a retomada os aceita comparando **só a DURAÇÃO** (`|dTs − len| < 0,2`). Ela
   não sabe de que arquivo o `.ts` saiu. Se a fonte for consertada mas o plano de corte continuar o mesmo,
   os comprimentos batem e **os segmentos da fonte VELHA são reaproveitados em silêncio** — o defeito volta
   inteiro para dentro do master novo. Ao trocar a fonte, apague `/tmp/masterdec-<proj>/` antes (ou rode
   com `--limpar-tmp`). Aqui foram 13 `.ts` apagados à mão por isso.
   **E o `pkill` do node NÃO mata o `ffmpeg`:** o script roda um ffmpeg por segmento via `execSync`; matar
   o node deixa o filho encodando órfão e o `<bruto>.EM-USO.lock` para trás. Confira com
   `ps -eo pid,cmd | grep ffmpeg | grep <proj>`, mate por PID e remova o lock.
### FIN-91 · Empurrar a âncora para a EMENDA é operação NULA no vídeo final — é isso que a torna o conserto seguro (04/ago/2026)

**O caso.** Continuação direta da [FIN-108]: o `orcas-nao-matam` voltou para a estação ESPELHO com 9 cenas
de arte e 4 cards ancorados dentro de span cortado, depois de o `--corrigir` ter sido rodado e revertido
**em bloco** — jogando fora os 5 acertos de borda junto com os 3 remanejamentos absurdos (−8,6 s, −20 s,
−24 s). A pergunta que sobrou era de montagem, não de QC: mover a âncora e re-ancorar a arte, ou encurtar
a janela?

**Nenhuma das duas. A resposta é que o movimento certo não é movimento.** `mapSec` colapsa o span cortado
inteiro num ponto só do relógio limpo. Logo, para qualquer `t` dentro do corte, a posição limpa da emenda
é **a mesma** que aquele `t` teria se existisse: empurrar o `inSec` de dentro do corte para o fim dele
**não desloca a cena um único frame no vídeo final** — só a faz existir. Medido nas 18 do vídeo: a maior
correção em tempo BRUTO foi de 8,46 s (`c21`) e o deslocamento resultante em tempo LIMPO foi **0,000 s em
todas**. É por isso que este conserto preserva arte já coreografada e o realinhamento por busca de âncora
não: aquele procura a fala em OUTRO lugar do vídeo, este fica no mesmo lugar.

**A conta que ninguém tinha feito: o gate cobra 13, o espelho tinha 18.** As 5 que faltavam eram cenas de
apresentador (`anima:false`) — sem clipe, não chegam ao XML, e o gate as ignora com razão ([FIN-88], 6
falsos contra 4 reais). Só que consertar apenas o que o gate cobra **quebra a ordem cronológica do
artefato**: o card `t01` empurrado para 58,01 passou a vir DEPOIS do `c02` que ficou em 57,32. Nas cenas
sem arte o empurrão é de graça (não há coreografia contra elas, e a `dur` pode ser clampada para encostar
na seguinte), e é o que mantém o espelho um espelho. Uma delas, a `c26b`, estava presa em **três takes
abortados encavalados** e só o quarto sobrevive: o primeiro instante vivo estava 6,05 s à frente, dois
cortes depois. **Emenda não é "o fim do corte" — é o primeiro instante que sobrevive ao ripple**, e onde
os cortes se tocam esses dois não são a mesma coisa.

**O dano tem um lado que o gate não mostra: ressuscitar cena ENCURTA a janela da vizinha viva.** Enquanto
a cena sumia, a anterior herdava o tempo dela. Medido: a janela da `c14` caiu de 52,79 s para 23,93 s
quando a `c15` voltou, e a arte da `c14` — feita para 34,72 s — passou a ser aparada em 10,8 s. Sete
cenas mudaram de janela sem que uma linha delas fosse tocada. **Não é regressão do conserto**, é a cena
legítima recuperando o que era dela; mas quem não medir o par antes/depois vai ver a arte truncada e
culpar o passo errado.

**E re-consolide os runs fundidos depois.** A `dur` da cena-mãe de um run é a janela até o fim do filho
([ARTE-127]); mover a mãe encurta essa janela. Aqui `c30` foi de 55,22 para 54,17 e o `qc-fusao-espelho`
reprovou até rodar com `--aplicar` — o que também põe o `qc-janela` vermelho na mãe, corretamente: a arte
dela tem 1,05 s que não vai mais ao ar.

**A regra.** (1) `inSec` dentro de corte se conserta **um a um, para o primeiro instante vivo**, nunca em
lote por busca de âncora. (2) Conserte as **duas** populações — a que o gate cobra e a que ele ignora —,
ou o espelho sai fora de ordem. (3) Meça as janelas limpas **antes e depois** e entregue a lista à
estação de arte: as vizinhas mudam sem ser tocadas. (4) Re-consolide os runs fundidos no fim.

**Agente-raiz:** `montador` (OFÍCIO §7.2 e checagem 12 do CONTRATO, escritas neste conserto).

---
### FIN-92 · O gate afirmava um comportamento que NENHUM dos dois geradores de XML tem — e cobrava um conserto global para calar o alarme (04/ago/2026)

**O caso.** Estação de QC do `o-acre-o-estado-que-o`. O `qc-espelho-fala` reprovou o vídeo com 4 achados,
todos cards de título: *"card cai no corte [39.36→58.55] (titulo) — **o XML o DESCARTA**; o lugar dele é a
emenda @58.55s"*. O espelho, porém, declarava a mesma coisa como DESENHO, no próprio `_tempos`: *"Cenas
nunca caem dentro de corte — exceto os 4 cards de título ([FIN-17]), que moram DENTRO do span classe
'titulo' por desenho e duram o gapSec (3s)"*. Um dos dois estava errado, e a diferença valia o vídeo.

**Quem estava errado era o gate.** Os dois geradores de XML da casa já recuperam o card que cai no corte,
cada um com o seu código, ambos com comentário datado explicando por quê:
- `scripts/xml-premiere-5camadas.mjs` (rota ATUAL, via `scripts/finalizar.mjs`) — a função `limpo()`
  varre para trás a partir do início do corte até achar instante vivo; o `if (at === null) continue` da
  linha seguinte só dispara quando nem isso salva.
- `src/timeline-xml.mjs` (rota do `_deliver.mjs`) — faz o mesmo desde 28/jul, com `while` pela CADEIA de
  cortes adjacentes (o apresentador lê o título, erra e refaz: os cortes se tocam), e ainda avisa no
  stderr onde pousou o card.

**A prova não foi a leitura do código — foi o artefato.** `node scripts/xml-premiere-5camadas.mjs <proj>
--base /tmp/x --saida /tmp/x.xml` gera o XML sem precisar dos clipes 4K (o `--base` emula com o nome que
cada um terá). Os 4 cards estavam lá, com 3,00 s cada, em 27,97 · 104,80 · 355,10 · 527,67 s de timeline.
**Um gate que descreve o pipeline se verifica CONTRA o pipeline, e isso custa um comando.**

**O dano de um falso positivo que oferece remédio.** O laudo não parava em "confira": mandava *"corrija
ANTES de renderizar"* e oferecia `--corrigir`, que é um realinhamento **monotônico de todos os inSec** por
busca de âncora. Um espelho correto seria reescrito inteiro para calar um alarme falso — e é o mesmo
`--corrigir` que a [FIN-108] pegou remanejando cenas em −8,6 s, −20 s e −24 s. Alarme falso é caro; alarme
falso que vem com remédio automático de escopo global é uma armadilha.

**Encaixe com a [FIN-91], escrita no mesmo dia pelo outro lado do mesmo fato.** Ela mediu que empurrar a
âncora para a emenda desloca **0,000 s** no vídeo final, e concluiu (com razão) que por isso o conserto é
seguro. A conclusão que faltava é a recíproca: *se a operação é nula, o gate não pode reprovar por ela*.
Deslocamento nulo não é "conserto barato" — é sinal de que não havia defeito. A ressalva da FIN-91 continua
inteira para as cenas COMUNS `anima:true` sem tratamento especial, e para o caso real que sobrou.

**Conserto aplicado.** O achado `card-sem-posicao-limpa` deixou de disparar por "cai dentro de corte" e
passou a replicar o `limpo()` do gerador: recua a cadeia e só acusa quando **não sobra instante vivo**
(card no começo absoluto, cadeia que come o vídeo desde 0 s) — aí ele some de verdade. O vídeo voltou a
PASS sem que uma linha do espelho fosse tocada.

**A regra.** (1) Gate que afirma o comportamento de OUTRO script tem de medir aquele script, não citá-lo
de memória — e o custo dessa prova é um comando, sempre. (2) Antes de obedecer a um laudo cujo remédio é
global, verifique o artefato final: se ele já está certo, o defeito é do gate. (3) Quando o espelho declara
uma exceção por escrito e um gate a contradiz, um dos dois é dívida — não escolha pelo mais barulhento.

**Agente-raiz:** o próprio `scripts/qc-espelho-fala.mjs` (gate; conserto neste commit).

---
### FIN-93 · O teste de alpha media o arquivo que a busca nunca escolhia — e o FIN-111 saiu no ar assim (05/ago/2026)

**Medido no `uruguai-despovoado`, estação aprovação, 05/ago/2026.** O vídeo foi ENTREGUE em 04/ago 22:51
levando **44,3 s de tela BRANCA** por cima do Bôco — o defeito exato que a [FIN-111] descreve, num vídeo
cujo código já continha o conserto da FIN-111 inteiro, escrito e correto.

**Como um conserto presente falha.** O `xml-premiere-5camadas.mjs` tem `temAlpha(f)`, que lê o `pix_fmt`
do arquivo e decide se a peça é CENA (V2) ou SELO (V3). A função está certa e o comentário dela narra o
caso do `uruguai-despovoado` com precisão. Só que a linha que escolhe o arquivo era:

```js
let clipe = [".mp4", ".mov"].map((e) => join(D, "graphics", `${s.id}-4k${e}`)).find(existsSync);
```

`.find` devolve o PRIMEIRO que existe, e `.mp4` vem primeiro na lista. Nos dois CTAs existiam os **dois**
artefatos: o `.mov` ProRes 4444 com alpha que a rota nova produz ([REND-70]) e o `.mp4` H.264 opaco da
rota velha, que ninguém apagou. Vencia o `.mp4`; `temAlpha` media esse `.mp4`; `selo` saía `false`; os
dois selos entravam na V2 como cena comum. Medido no XML entregue: `s40-cta-inscrever-4k.mp4` yuv420p
3,32 Mbps 20,500 s e `s91-cta-final-4k.mp4` yuv420p 3,75 Mbps 23,834 s — os `.mov` de 157 MB e 206 MB
estavam ao lado, no mesmo diretório, sem uma única referência no XML.

**O agravante é o laudo.** O `qc/finalizacao.laudo.json` de 03/ago 22:15 traz o item 10 —
*"INTEGRIDADE — cenas de CTA renderizadas sem alpha: 44,3 s de tela BRANCA"* — com veredito **FAIL**, e o
laudo inteiro fechou **FAIL**. A entrega aconteceu 24 h depois assim mesmo.

**A regra.** (1) Quando existe mais de um artefato para a mesma peça, a escolha é por PROPRIEDADE MEDIDA
(o `pix_fmt` carrega alpha?), nunca pela ordem de uma lista literal — ordem de lista é preferência
acidental disfarçada de decisão. (2) Teste que mede o objeto errado é **pior que teste nenhum**: ele faz o
caso parecer coberto e cala a próxima pessoa que fosse olhar (mesma família do `--include-regex` que não
existe, no CLAUDE.md). Ao consertar na raiz, verifique que o conserto é ALCANÇADO, não só que está escrito
— um `console.log` no ramo novo, uma vez, prova o que a leitura não prova. (3) Artefato substituído não
fica de vizinho do substituto: o `.mp4` opaco de uma cena que virou alpha é lixo, e lixo ao lado do bom é
uma armadilha esperando por uma ordem de lista.

**Conserto aplicado.** A busca passou a montar os candidatos e escolher por alpha medido — `cands` filtra
o que existe, `alphaDe` mede cada um uma vez, e a preferência é *tem alpha* → `.mp4` → o que houver; o
`selo` reusa a medição em vez de refazê-la sobre o arquivo escolhido. Validado nos arquivos REAIS: s40 e
s91 passam de `.mp4`/`selo=false` para `.mov`/`selo=true`, e os dois casos de não-regressão (cena só com
`.mp4`, cena só com `.mov`) devolvem exatamente o mesmo arquivo de antes.

**Agente-raiz:** `scripts/xml-premiere-5camadas.mjs` (conserto neste commit) — e a estação de
FINALIZAÇÃO, que entregou com o laudo em FAIL (o gate [FIN-13] existe para isso e não segurou).
### FIN-94 · "Estranho" e "curiosidade" são o vocabulário da casa, não sinal de comédia — e o bloco de UMA cena não tem maioria para contar (05/ago/2026)

**Medido no `especies-humanas`, estação TRILHA.** O bloco `encerramento` — os 66 s finais, o fecho mais
solene do vídeo, onde entram os CTAs de like/inscrição/membros — recebeu **"The King of Thieves"**: mood
`Quirky, Restless`, gênero **`Orchestral, Sneaky`**, 115 bpm. Música de comédia de roubo debaixo de *"faz
só uns quarenta mil anos que a gente tá sozinho neste planeta… será que o mundo com uma espécie só é que
é o estranho e não o normal?"*.

**A palavra que decidiu.** O gatilho `Quirky` do `MAPA_MOOD` era
`/\b(engra[çc]ad|curios|inusitad|bizarr|estranho)/i` — cinco termos, **quatro polissêmicos**. Em PT-BR
documental "estranho" quer dizer *inquietante/inesperado*, e "curiosidade" é literalmente o que o canal
vende ("Top 10 curiosidades"): casaria em pauta séria o vídeo inteiro. É a mesma família do `espaço` e do
`planeta` já marcados neste mapa, com um agravante novo.

**O agravante: bloco unitário anula a contagem.** A [FIN-65] trocou "primeira linha que casa" por "mood
mais representado" justamente para que uma palavra isolada não vestisse um capítulo. Só que o bloco
`encerramento` é montado com **uma cena só**, por construção (`blocos.push({nome:"encerramento", ini:
cenas[cenas.length-1].inSec, …})`). Com N=1 como teto para todo mundo, o empate é **garantido** — não
azar, como no 1×1×1×1 do `orcas-nao-matam` — e o desempate por ordem da lista volta a decidir sozinho.
**Contagem só protege onde há o que contar.**

**A regra.** Termo que também é vocabulário corrente da pauta não é sinal, é ruído com sorte — o gatilho
de humor tem de exigir marcação inequívoca (`engraçad|piada|comédia|cômic|hilári|palhaç|humorístic|
ridícul`). E ao ler uma heurística de maioria, pergunte **qual é o menor bloco em que ela roda**: se
algum tem 1 item, ali ela não existe. Sem os polissêmicos o encerramento cai no `DEFAULT_MOOD`
(contemplativo) — que é o tom de um fecho.

**Conserto aplicado.** Gatilho `Quirky` restrito aos termos sem segundo sentido, em
`scripts/trilha/escolher.mjs`. Re-rodado: o encerramento passou a "Behind the Shadow" (`Dark, Mysterious`
/ Neoclassical Dark Wave, 68 bpm).

**Agente-raiz:** `scripts/trilha/escolher.mjs` (`MAPA_MOOD`).
### FIN-95 · O mood casa e o gênero desmente — e a coluna do gênero nunca foi buscada no SELECT (05/ago/2026)

**Medido no `especies-humanas`, estação TRILHA.** O capítulo 3 — *"O fantasma escondido no seu DNA"*,
545 s, o mais longo do vídeo — inferiu `Hopeful` **com razão** (são 11 teses de descoberta científica) e
recebeu **"Video Knights"**: mood `Happy, Hopeful`, gênero **`Synth-pop, 1980s`**. Synth-pop oitentista
debaixo de DNA arcaico, do ossinho de dedo de Denisova e da ressalva da Qiaomei Fu. O mood estava certo;
a faixa, não. Nenhum gate pegaria — o campo consultado batia.

**Mood é a emoção, gênero é a roupa.** O acervo traz as duas colunas do Epidemic e o filtro
(`doMood`) lia uma. Comédia (Comedy/Cartoons/Circus/**Sneaky**), dança e época marcada
(Disco/Synth-pop/1980s) e urbano moderno (Trap/Hip Hop) denunciam a costura em QUALQUER mood que casem:
são 9 das 42 faixas, e foi assim que "On the March" (Electro, 1980s) virou ficção científica sob os
golfinhos do `orcas-nao-matam` e "The King of Thieves" (Orchestral, Sneaky) o fecho deste vídeo
([FIN-94]). Elas existem para uso pontual escolhido À MÃO, não para forrar 500 s de narração.

**⚠️ O CONSERTO ESCRITO NÃO ERA O CONSERTO ALCANÇADO — e o log foi quem provou.** O veto de gênero
entrou, o picker re-rodou e **"Video Knights" continuou lá**. A linha do acervo era
`SELECT track_id, titulo, arquivo, mood, energia, bpm, duracao_seg FROM trilha` — sem `genero`. A coluna
existia na tabela desde o enriquecimento e nunca era buscada, então `t.genero` chegava `undefined`, o
regex testava contra `""` e **aprovava tudo em silêncio**. Só o `console.log` das faixas vetadas (que
imprimiu nada) revelou; a leitura do diff dizia que estava certo. É exatamente a (2) da [FIN-93], de
ontem: *teste que mede o objeto errado é pior que teste nenhum*. Aqui o objeto medido nem chegou a
existir.

**A regra.** (1) Filtro novo sobre um campo do banco: confirme que o campo está no **SELECT**, não só na
tabela — projeção ausente vira `undefined`, e `undefined` não reprova ninguém. (2) Todo veto nasce com um
`console.log` do que ele cortou; veto silencioso é indistinguível de veto quebrado. (3) Esgotar o pool de
um mood é resultado ACEITÁVEL — o plano sai com "SEM faixa — escolher à mão", que é honesto; pauta que
peça época troca a faixa à mão, como a estação já prevê.

**Conserto aplicado.** `genero` no SELECT + `GENERO_VETADO`/`camaOk` filtrando `doMood`, com log das
vetadas. Re-rodado: `ⓘ 9 faixa(s) fora da cama por GÊNERO` e o cap 3 passou a Love Begets Love → Echoes →
Radar Focus.

**Agente-raiz:** `scripts/trilha/escolher.mjs` (SELECT do acervo + `doMood`).
### FIN-96 · A lei nomeou a linha, criou o helper — e consertou o VIZINHO: o mesmo CTA morreu pela terceira vez (05/ago/2026)

**Medido no `especies-humanas`, estação TRILHA.** O `cta-inscreva-fim` foi ancorado em 2189,6 s, **dentro
do corte** 2185,27–2194,22 (*"rabo de gravação DEPOIS da despedida: «Aí agora foi»"*). A ponte encostou o
overlay na emenda — que *é* o fim do vídeo — e ele foi parar em **1239,07 s de um vídeo de 1239,04 s**,
terminando 3,03 s depois do fim. CTA de inscrição do fecho: perdido, e contado como aplicado.

**O que torna este caso diferente de repetir a [FIN-89]: a FIN-89 é sobre este defeito, foi escrita
ONTEM, e o conserto dela não estava na linha.** A lei de 04/ago descreve o mecanismo inteiro, nomeia o
arquivo (`scripts/branding/overlays.mjs`), nomeia o CTA e escreve a regra com o vocabulário pronto:
*"toda margem de segurança medida a partir do fim usa o último instante VIVO (`fimVivo` = última palavra
que sobrevive ao ripple, via `naFalaViva`), nunca a última palavra bruta"*. O helper `naFalaViva` **foi
criado** e **passou a ser usado** — em `primeiraViva` (linha ~362), sobre as menções faladas, 25 linhas
acima. A âncora posicional da linha 387 seguiu intacta, em `fimVideo = words[último].t`.

**O modo de falha tem nome próprio.** Não é a [FIN-55] (código consertado, instrução não) nem exatamente
a [FIN-93] (conserto escrito, ramo nunca alcançado): aqui o conserto foi aplicado no **vizinho** que a
investigação tinha aberto, e a linha que a lei citava por número ficou para trás. A lei ganhou
vocabulário, exemplo e agente-raiz — tudo menos o `sed`. **Uma lei que introduz um helper tem de terminar
com a lista de TODAS as chamadas que passam a usá-lo, e a lista tem de ser verificada uma a uma no
`grep`.** Aqui o grep custava 5 segundos: `grep -n "fimVideo" overlays.mjs` devolvia 6 linhas, e a 387
está entre elas.

**A regra.** (1) Ao fechar uma lei que cria um conceito novo (`fimVivo`, `naFalaViva`), grepe o conceito
VELHO que ele substitui e trate cada ocorrência — deixar uma é deixar o defeito com um caminho. (2) Lei
que nomeia uma linha específica só fecha com aquela linha mudada; se não mudou, a lei ainda está aberta,
por mais completa que seja a prosa. (3) Ao herdar um projeto, desconfie das leis mais RECENTES sobre a
estação que você está rodando: são as que tiveram menos tempo de virar código.

**Conserto aplicado.** `fimVivo` calculado por varredura de trás para frente com `naFalaViva`, ancorando o
CTA; e um aviso quando a cauda está cortada (`ⓘ a cauda da fala está CORTADA — fim bruto 2193,6 s, último
instante VIVO 2184,8 s`), para o operador ver a régua trocando. Re-rodado: o CTA ancorou em 2180,8 s (vivo),
CRUZOU com o `cta-membro-1` (2173,7–2181,7) e foi **descartado com log** — o mesmo desfecho correto que a
FIN-89 descreve no `orcas-nao-matam`. A [FIN-11] segue coberta no fim pelo `cta-like-encerramento` + card
de membros. *Overlay fantasma é pior que overlay ausente, porque o laudo o conta.*

**Agente-raiz:** `scripts/branding/overlays.mjs` (linha da âncora posicional do fim).
**Lacuna herdada, ainda aberta:** a da própria [FIN-89] — `scripts/finalizar-youtube.mjs` continua aceitando
`atSec` fora da duração do composto sem reclamar. Enquanto não comparar os dois, o defeito volta por outra porta.

---
**FIN-97.** O LAÇO QUE COMPARA *PARES* É CEGO PARA A BORDA — E O LIMIAR CALIBRADO COM UMA AMOSTRA SÓ FICA
   CURTO NA PRÓXIMA (medido 05/ago/2026, `energia-escura`, na rede anti-flash card→cena da [FIN-78]):

   A [FIN-78] fechou a piscada de Bôco na emenda card→cena com um laço `for (i = 0; i < n-1; i++)` sobre
   pares consecutivos da V2, com `SNAP_MAX_F = 3`. No `energia-escura` ela deixou passar **três** flashes,
   por dois motivos diferentes — e os dois são de forma, não de conteúdo:

   1. **O limiar.** Calibrado só com o `oceano-700km` (resíduos de 1–2 frames), 3 era curto por UM frame:
      as duas emendas card→cena vinham com **4f** e eram os ÚNICOS vãos < 2 s de toda a V2. A amostra dos
      dois vídeos juntos é BIMODAL e sem zona cinzenta — resíduo mede 1, 1, 2, 4, 4 frames; respiro
      DESENHADO (o Bôco falando na fronteira de tópico) mede 103 e 308. **Quando os dados são bimodais, o
      limiar pertence ao VALE, não à borda da amostra que você viu**: 6f (200 ms) fica 17× abaixo do menor
      respiro real e sobrevive à próxima calibração.
   2. **A borda.** A fresta entre o frame 0 da timeline e a PRIMEIRA cena **nunca foi testada**, porque não
      existe um "anterior" para formar par. A V1 começava em 0 e a `c01` no frame 4: quatro frames do Bôco
      de pé, parado, ABRINDO o vídeo. Sobreviveu ao conserto do limiar e foi o único vão que restou.

   **A regra.** Todo laço que valida *transições* (`i` contra `i+1`) valida N−1 das N+1 emendas de uma
   timeline: faltam a de ENTRADA e a de SAÍDA. Ao escrever ou revisar um, pergunte explicitamente o que
   acontece na primeira e na última — e note que a da abertura é a mais cara de errar, porque é o frame
   que todo espectador vê. O mesmo vale para o limiar: **um número calibrado com um caso é uma hipótese,
   não uma constante** — anote a amostra que o gerou no comentário, para que o próximo caso possa
   contestá-lo com dados em vez de fé.

   **Conserto aplicado:** `scripts/xml-premiere-5camadas.mjs` — `SNAP_MAX_F` 3 → 6 (com a amostra bimodal
   documentada no comentário) e um trecho novo que aplica o mesmo snap à borda de abertura. Medido depois:
   `3 cena(s) encostada(s) … c22b −4f @505.3s, c31 −4f @809.333s, c01 −4f @0s`; vãos < 2 s na V2 = 0.
   **Agente-raiz:** `scripts/xml-premiere-5camadas.mjs` (bloco anti-flash da V2).
**FIN-98.** CARD DE TÍTULO NO MEIO DE UMA PALAVRA PARTE A NARRAÇÃO EM DUAS — E O RMS NÃO ENXERGA
   (medido 05/ago/2026, `energia-escura`, 2 dos 4 cards):

   O card abre um buraco de 3 s na timeline e a A1 é partida no MESMO ponto do V1 — o áudio não corre por
   baixo do card, ele PARA. Quando o `inSec` do card cai dentro de uma palavra viva, o espectador ouve a
   primeira metade, três segundos de card mudo, e a segunda metade: `cTITULO1` @24,433 s partiu "quase"
   (24,360–24,640 · 0,073 s antes / 0,207 s depois) e `cTITULO2` @261,500 s partiu "feitos," (261,300–261,670
   · 0,200 s / 0,170 s). Os outros dois caem em silêncio e estão certos.

   **Por que passa batido.** Medir o corte por RMS/`volumedetect` NÃO resolve: o master tem ruído de sala
   constante, e as janelas de 0,3 s antes/depois dos quatro cortes deram −38,7/−38,5 · −35,6/−44,0 ·
   −30,1/−34,2 · −40,3/−36,6 dB — faixa indistinguível entre "palavra baixa" e "silêncio com ruído". Uma
   leitura por dB chegou a declarar SILÊNCIO justo o corte que parte "quase". **Quem decide é o
   `words-limpo.json`**, que diz onde cada palavra começa e acaba: `palavra.start < corte < palavra.end`
   é o teste inteiro, e é exato.

   **A regra.** Antes de fechar a finalização, teste os 4 `inSec` de card contra as palavras do
   `words-limpo.json` e exija que cada um caia num vale. O conserto é do MONTADOR e é barato — mover o
   `inSec` do card algumas dezenas de ms para o vale mais próximo, que numa fronteira de tópico sempre
   existe. **Prefira sempre a fonte que mede a COISA (a palavra) à que mede um proxy dela (a energia).**
   **Agente-raiz:** `montador` (o `inSec` do card no espelho).
**FIN-99.** UM PASS LIDO UMA VEZ NÃO É UM PASS — RE-RODE O GATE QUE AUTORIZA A PROMOÇÃO
   (medido 05/ago/2026, `energia-escura`):

   Na primeira execução da estação, o trilho do `finalizar.mjs` mostrou `master×cortes PASS` e a
   finalização seguiu até gerar o XML. Nas execuções seguintes, o MESMO gate deu FAIL — e um FAIL grande:
   master com 1111,9 s onde o `_cortes.json` manda 1101,0 s, **+10,9 s fora de fase**, dos quais os últimos
   6,3 s são tela preta medida por `blackdetect`. Confirmado estável em 3 execuções consecutivas, com
   `_cortes.json` (03/ago) e `words.json` (29/jul) intocados; só o master tinha mtime do dia (05/ago 03:13,
   materializado do bucket por outra sessão). A causa exata do PASS inicial não foi isolada — o que ficou
   provado é que **o mesmo gate, sobre os mesmos insumos, respondeu duas coisas diferentes na mesma sessão**.

   **A regra.** O estúdio roda várias sessões sobre a MESMA árvore, e os insumos de um projeto podem ser
   trocados debaixo de você no meio da estação (aqui, um `materializar-bruto.mjs` de outro projeto rodando
   em paralelo, e o master do seu restaurado do bucket minutos antes). Portanto: (1) o gate que decide
   PROMOVER é lido no instante da decisão, nunca no começo da sessão; (2) um PASS isolado que você não
   consegue reproduzir vale menos que um FAIL reproduzido — a assimetria é de propósito, porque promover
   errado custa um vídeo no ar e barrar errado custa uma re-rodada; (3) ao herdar um projeto, confira o
   `mtime` dos INSUMOS (master, cortes, words) contra o início da sua sessão antes de confiar em qualquer
   medida anterior a ele.
   **Agente-raiz:** a estação (procedimento), não um script.

---

## 123 · Áudio encodado em PEDAÇOS estala em cada emenda — o AAC entra UMA vez, no fim (06/ago/2026)

> 🔀 **Renumerada de FIN-84 para FIN-123 em 07/ago/2026.** Nasceu com um número já ocupado pela lei de
> 04/ago (a representante do grupo de membros), porque foi escrita à mão antes de existir o
> `scripts/nova-lei.mjs`. Pela [SIS-62], quem já estava no remoto fica com o número. Citações a
> "FIN-84" anteriores a esta data podem se referir a qualquer uma das duas — confira a data.
## FIN-149 · Áudio encodado em PEDAÇOS estala em cada emenda — o AAC entra UMA vez, no fim (06/ago/2026)

> 🔀 **Era `FIN-123` e virou `FIN-149` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `FIN-123` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

> 🔀 **Nasceu como "FIN-84" no commit local `b56a068` — TERCEIRA colisão de numeração do domínio.**
> A FIN-84 de 04/ago ("a representante do grupo se escolhe depois de saber quem sobreviveu ao corte")
> já estava em `origin/main` e é citada por `FIN-85`, `overlays.mjs` e `trilha/escolher.mjs`, então
> **ela fica com o número** ([SIS-62]) e esta foi renumerada para o próximo livre na integração
> (07/ago). O efeito da colisão foi concreto e mediu um dia: `scripts/regras-todas.mjs` **recusa
> gerar** com ID repetido, então `seed/regras/_TODAS.md` — o corpo que a casa inteira busca — ficou
> congelado em 06/ago 07:27 e **nenhuma lei nova entrou nele desde então**, inclusive as de outras
> sessões. *Colisão de ID não trava só a lei que colidiu; trava a destilação inteira.*

**O que aconteceu:** o Mateus ouviu o master decupado do `ceuta` e reportou *"uns flashes no áudio,
tipo uns estouros, bem pontuais, a cada mais ou menos 1 minuto"*. A conta confirmou o mecanismo
antes de qualquer teste: **43 cortes em 1511 s = uma emenda a cada 35 s.**

**A causa.** O `master-decupado.mjs` cortava cada keep para um `.ts` **com o áudio já em AAC**, e
depois concatenava os TS por bytes. Todo encoder AAC insere *priming samples* no começo (~1024
amostras) e padding no fim — são amostras **inventadas**, que existem para o decoder acertar o
arranque. Ao colar dois segmentos, essas amostras artificiais caem no meio da fala e as ondas se
encontram em fases diferentes. Descontinuidade de forma de onda é, literalmente, um clique.

**Nenhum ajuste de encode resolve, porque o defeito não é do encode: é de encodar em PEDAÇOS.**

**As duas tentativas erradas, e o que cada uma ensina:**

1. **`afade` de 8 ms nas pontas.** PIOROU — *"o tal fade comeu a fala do meu apresentador"*. O
   segmento é cortado com `-ss` de ENTRADA **e** de SAÍDA, então o stream de áudio não começa no
   timestamp 0; `afade=t=in:st=0` e `t=out:st=len-0.008` apontavam para posições absolutas que não
   correspondiam às bordas reais, e o fade caiu dentro da palavra. *Remendo sobre causa não
   diagnosticada tem chance de piorar — e piorou.*

2. **PCM dentro do MPEG-TS.** O container **não carrega `pcm_s16le`**. Os 40 segmentos "rodaram",
   nenhum arquivo foi escrito, e a surpresa só apareceu na concatenação. *Formato que o container
   recusa falha por arquivo; um laço que não confere transforma 40 falhas numa surpresa no fim.*

**O conserto que funcionou** (aprovado por ele: *"ficou ótimo, resolvido"*): cada segmento produz
**duas** saídas, cada uma no container que a aceita — vídeo em `.ts` (para o concat de H.264 por
bitstream, sem re-encode) e áudio em `.wav`/PCM (que não tem priming nem padding: concatenar PCM é
concatenar som). O AAC entra **uma vez só**, no mux final, sobre um stream contínuo, onde o priming
cai no começo do arquivo e não há emenda para ele estragar.

**A lei geral, e ela vale para todo formato com estado:** *codec que carrega estado entre quadros
não se concatena — se concatena o material CRU e se codifica uma vez.* AAC tem priming; vídeo
inter-frame tem GOP; qualquer compressão com predição tem fronteira. Onde houver emenda, ela tem de
cair no domínio sem estado.

**E a guarda que ficou de brinde:** cada segmento agora **prova** que produziu os dois arquivos com
tamanho plausível, e aborta no primeiro que faltar. Ela pegou, na mesma noite, um defeito diferente:
um keep de **duração ZERO** (o último corte terminava exatamente na duração do vídeo), que gerava
`.ts` de 0 byte. Sem ela, teria virado master truncado em silêncio.

### FIN-123 · `graphics/` guarda FONTE — e backup de outra máquina não é backup desta (07/ago/2026)

`out/<proj>/graphics/` mistura duas naturezas: os `.html` das cenas (**fonte**, arte de LLM, ativo
pago e insubstituível) e os `*-4k.mp4` (**artefato**, refazível a partir do HTML). O pacote de
entrega sobe só os clipes, em `graphics-4k/`. **Os HTMLs sobreviviam por acidente** — pelo
`macbook-backup`, que é espelho do **Mac**.

Medido em 07/ago/2026, com o Mateus dormindo e tendo pedido justamente para liberar disco na VM:
`uruguai-despovoado` tinha **58 HTMLs na VM e 5 no backup**. O `entregar.mjs --limpar` ia apagar a
pasta e **53 cenas de fonte morreriam** — porque nasceram na VM, e o backup só vê o Mac. O desastre
de 26/jul (5 cenas perdidas num rsync), dentro da ferramenta oficial de entrega e dez vezes maior.

A varredura que veio depois achou o dano já consumado e o risco ainda aberto:

| projeto | fonte | situação |
|---|---|---|
| `nilo-nao-secou` | 8 HTMLs para **30 clipes entregues** | **~22 perdidas** — local limpo, Mac e backup só têm 8 |
| `mamute-de-volta` | 81 na VM, **0 no backup** | salvo em 07/ago — estava a minutos de renderizar |
| `o-acre` | 71 na VM, **0 no backup** | salvo em 07/ago |
| `orcas-nao-matam` | 28 na VM, 3 no backup | salvo em 07/ago |

**A trava agora mora no código:** antes de apagar `graphics/`, o `--limpar` sobe os `.html` para
`entregas/<ano>/<slug>/graphics-fonte/` e **confere a contagem no destino**. Se faltar um arquivo,
recusa a limpeza inteira e diz quantas cenas seguem em cópia única — nada é apagado.

*Backup de outra máquina não é backup desta.* Numa casa de duas máquinas, "existe backup" é uma
pergunta mal formulada: a única que vale é **"existe cópia DO QUE ESTÁ NESTA MÁQUINA?"**, e ela se
responde contando arquivo no destino, nunca por tamanho, nunca por "o upload deu certo".

⚠️ O `nilo` não se refaz: ele foi entregue e está íntegro (30 clipes + XML no bucket). O que morreu
foi a capacidade de **reeditar** aquelas cenas. Erro achado no que já saiu se crava, não se refaz.

### FIN-127 · Gate que ESTIMA um insumo com a medição parada ao lado — e o comentário que jurava o viés contrário (07/ago/2026)

`qc-master-em-fase.mjs` confere se o master decupado está em fase com o `_cortes.json`:
`esperado = durBruto − somaCortes`, `delta = durMaster − esperado`. O bruto costuma ter saído do
disco (é cache), então o gate caía numa estimativa: **a última palavra do `words.json`**.

Havia medição de verdade a um arquivo de distância. O `_bruto/sync-info.json` — 1 KB, fica no disco
depois que o vídeo sai — carrega `duracaoFinalSeg`, gravado por quem produziu o arquivo. O gate o
ignorava.

**Medido no `o-acre`:** pela última palavra, desvio de **+1,05 s**; pela duração real, **+2,10 s**.
Acertou o veredito e errou o número pela metade.

E o comentário que justificava a estimativa afirmava o oposto do efeito real:

> *"o erro que ela introduz … é sempre no MESMO sentido, o que não fabrica alarme: torna o gate um
> pouco mais tolerante."*

A álgebra desmente em uma linha: subestimar `durBruto` reduz `esperado`, o que **aumenta** `delta` —
empurra para a reprovação, não para o perdão. E a premissa de que a última palavra "nunca passa do
fim do vídeo" também era falsa: ali ela terminava **1,06 s depois** do fim do arquivo, porque a
transcrição e a sincronização não estavam no mesmo relógio.

Conserto: três degraus na ordem certa — arquivo medido por `ffprobe` → `sync-info.json` (medição
gravada) → última palavra (estimativa, e só então).

*Comentário que declara o SENTIDO de um viés é uma afirmação verificável, não uma nota de rodapé:
faça a conta antes de escrevê-lo. Um viés declarado ao contrário é pior que viés não documentado —
ele convence o próximo leitor a não conferir.*

### FIN-128 · O gate de finalização é INALCANÇÁVEL pela rota que a doutrina manda usar (07/ago/2026)

`finalizar.mjs` roda as etapas em ordem: … → **3 · gera o XML** → … → **6 · exige o laudo do
qa-montagem**. E a etapa 6 recusa laudo mais VELHO que o entregável, com razão ("laudo é perecível",
FIN-13): um veredito emitido sobre outra versão não vale.

Só que a etapa 3 **regera o XML toda vez** — não há retomada nele, por desenho. Então qualquer laudo
emitido antes de rodar o `finalizar.mjs` nasce vencido na mesma execução que o cobra.

**Medido no `o-acre`:** emiti o laudo, rodei a finalização, e a etapa 6 respondeu *"o entregável foi
regerado 102s DEPOIS do laudo"*. Re-carimbei, rodei de novo: *"regerado 73s depois"*. É um laço que
não fecha sozinho — e o texto do erro manda "rode o qa-montagem de novo", que é exatamente o passo
que volta ao começo.

A saída existe e não está escrita em lugar nenhum: emitir o laudo **entre** a etapa 3 e a 6 —
`finalizar.mjs --ate=xml`, depois o laudo, depois `entregar.mjs` direto (que confere o mesmo gate sem
regerar nada).

⚠️ E ao re-carimbar um laudo, **confira por hash que o objeto não mudou** antes. No `o-acre` o XML
regerado tinha o mesmo md5 do julgado — as medições descreviam o mesmo objeto, e re-carimbar foi
honesto. Se o hash tivesse mudado, re-carimbar seria apagar o laudo para passar, que é o que o
contrato adverte.

*Quando um gate reprova por "artefato mais novo que o veredito", pergunte QUEM regerou o artefato. Se
foi o próprio processo que cobra o gate, o problema é a ordem das etapas, não o veredito.*

### FIN-129 · Contar o clipe que o XML CITA não é contar a cena que o espelho PEDE (07/ago/2026)

Emiti um laudo de finalização dizendo *"71 de 71 clipes existem no disco e estão no bucket"*. Era
verdade — e escondia o defeito.

**O espelho do `o-acre` pedia 73 cenas de arte.** Duas nunca foram desenhadas (`s73-ia-satelite`,
footage de 4,97s; `s84-recap-libras-ferrovia`, cinematográfica de 6,93s): sem HTML, sem clipe. O XML
não as cita, então não há duração inventada nem referência quebrada — o gerador simplesmente não as
viu. O efeito é mudo: 11,9s dos 799 ficam com o apresentador em tela onde o montador previu cena.

Nenhum gate pegou, porque todos mediam a mesma coisa por ângulos diferentes: clipes que o XML cita,
refs que resolvem, HTMLs na pasta. **Ninguém contava cena PREVISTA contra cena FEITA.**

A régua certa, e ela é de uma linha: para cada segmento do espelho que exige arte (tem `modo` e não é
`apresentador`), existe `graphics/<id>-4k.mp4`? Cena de apresentador não entra na conta — ela é o V1,
vindo do master.

*Um laudo pode ser factualmente correto em cada item e ainda assim mentir sobre o todo, se todos os
itens medem o lado que existe. Ao auditar cobertura, meça contra o PLANO, nunca contra o produzido.*

### FIN-130 · `entregar --limpar` apaga a FONTE junto com o artefato — e some com trabalho em curso (08/ago/2026)

Rodei `entregar.mjs o-acre --limpar` para liberar disco: o vídeo estava entregue, verificado no
bucket, e o `--limpar` tem a trava [FIN-123] que exige cópia conferida antes de remover. A trava
funcionou — o stub `ENTREGUE.md` ficou lá provando isso.

Só que ele levou **`graphics/` inteiro**: 71 HTMLs e 71 clipes. E eu estava, naquele momento,
refazendo a `s02` a pedido do Mateus. O render seguinte morreu com

    ENOENT: no such file or directory … /graphics/s02-mapa-era-da-bolivia.html

**A pasta `graphics/` guarda FONTE e ARTEFATO no mesmo lugar** — o `.html` é a fonte, o `-4k.mp4` é o
produto. Limpeza pós-entrega quer devolver o espaço do PRODUTO, e leva a fonte junto porque ela mora
ao lado. Isso já tinha mordido esta casa na direção contrária (o `rsync` do bucket que sobrescreveu 5
cenas frescas, 26/jul); é o mesmo defeito de arrumação, visto do outro lado.

O estrago aqui foi pequeno porque o HTML editado estava no Mac e o resto no bucket — mas custou uma
restauração no meio de uma correção urgente, e a cena teve de ser re-subida arquivo a arquivo, com os
assets (`_media/logos/*.png`) baixados de novo um a um.

**Duas saídas, e a segunda é a certa:**
1. paliativo — não rodar `--limpar` em projeto que ainda tem correção aberta;
2. **estrutural** — o `--limpar` preservar `*.html` e apagar só os `-4k.mp4`, que é o que ocupa 15 GB.
   HTML de cena pesa KB: mantê-lo custa nada e é a única cópia editável fora do git.

*Toda limpeza automática precisa saber distinguir o que ela PRODUZIU do que alguém ESCREVEU. Quando
os dois moram na mesma pasta, a regra tem de ser por extensão, não por diretório.*

---

### FIN-134 · [renumerado de FIN-124 no merge de 08/ago]
## FIN-124 · Segmento tem DUAS metades e a retomada olhava uma — 48,6 s de fala muda com todos os gates verdes (07/ago/2026)

**O caso.** O `dentro-do-sol` fechou a decupagem com laudo limpo: `_cortes.json` coerente, aritmética
fechando com desvio de **0,009 s**, duração do arquivo certa (1186,533 s), `qc-decisao-limpo` com
perda líquida de 2,16% e **zero dados perdidos**, `qc-espelho-fala` PASS, `qc-tempo-apresentador`
11,9%. O master entregue tinha **243 palavras (9,0% do texto limpo) sem som nenhum** — 48,6 s de fala
em **119 buracos**. Entre elas: *"O motor do Sol é a fusão"* (a abertura de um capítulo), *"Dessa
conta, quatro milhões de toneladas de"* (a cifra que o apresentador tinha corrigido no bruto) e
*"te pegou nessa viagem até o centro do"* (o encerramento).

**A causa.** O `master-decupado.mjs` escreve cada segmento como **dois** arquivos — vídeo em `.ts`,
áudio em `.wav`/PCM ([FIN-123]) — e o vídeo sai primeiro. A retomada media a duração **do `.ts`** e,
batendo, dava `lista.push(ts)` e `return`: o `.wav` do par nunca era olhado. Quando o encode morre
entre as duas linhas — e ele morreu duas vezes, com o `liberar-espaco.mjs` apagando o bruto embaixo
dele ([SIS-131]) —, sobra um `.ts` de duração exata e um `.wav` ausente ou pela metade. A retomada
seguinte declara "pulado — já pronto" e o buraco entra no master.

A assinatura é geométrica e denuncia a raiz: **22 dos 33 buracos maiores caem a menos de 2,5 s de uma
fronteira de keep** — as juntas, que é onde os pares moram.

**A lei:** *quando uma unidade de trabalho tem duas metades, "pronto" é sobre as duas.* O teste de
cache virou `durOk(ts) && durOk(wav)`, e o par incompleto é **apagado** antes de refazer — o que
sobrou de um encode morto no meio não se aproveita pela metade.

**E o que isso diz sobre retomada em geral:** a [REND-18] e toda a doutrina de "artefato pronto é
ativo pago" continuam valendo — o erro não foi retomar, foi **medir a prontidão pela metade barata**.
Retomada só é segura quando o teste de prontidão cobre tudo o que o passo produz.

## FIN-125 · O silencedetect não viu, o mapa-limpo viu no relógio errado — quem pegou foi ENERGIA × texto limpo (07/ago/2026)

Continuação do [FIN-124]. O buraco existia; a questão é que **as duas ferramentas de conferência da
casa passaram por cima dele**, cada uma do seu jeito, e é isso que torna o caso caro.

**1 · `silencedetect` devolveu ZERO.** Rodado no master a `-40dB`, `-45dB` e `-50dB`, `d=2.0`:
nenhum vão. O motivo é que ele exige o limiar **continuamente**, e um estalo de boca, uma respiração
ou o piso de sala normalizado a −16 LUFS quebram a contagem. Os buracos reais mediam **−58 a −67 dB**
de média — silêncio digital — e mesmo assim não foram reportados.

**2 · `mapa-limpo --silencios` devolveu 18 vãos, todos falsos.** Ele lê o `words.json` como se
estivesse no relógio do master; o próprio cabeçalho imprime *"última em 00:24:26:13 (relógio do
MASTER)"* — 1466 s, quando o master mede 1186 s. Na **edição do ZERO** o `words.json` é do BRUTO por
construção (é o lixo que o decupador precisa enxergar), então esse gate mede um relógio que não
existe. Os 18 vãos apontados tinham nível de FALA (−19 dB, idêntico à referência).

⚠️ Um gate que erra nos dois sentidos é pior que gate nenhum: o `silencedetect` deu falso NEGATIVO e
o `mapa-limpo` deu falso POSITIVO, **no mesmo arquivo, na mesma hora**. Quem confia em qualquer um
dos dois isoladamente sai com uma conclusão errada.

**A medição que pegou** (custo zero, e é a que vale):

1. RMS por janela de 100 ms sobre o áudio do master, e o limiar **relativo à mediana da fala** (8%),
   nunca em dB absoluto — o piso de ruído muda com a normalização de cada gravação;
2. cada palavra do `words-limpo.json` mapeada BRUTO→LIMPO e cruzada com esse envelope;
3. **palavra sem energia = fala perdida**, e o veredito é por palavra, não por vão.

*O vão sem fala é pausa; a fala sem som é defeito. Só a segunda pergunta encontra o buraco, e ela
precisa do texto — medir o áudio sozinho não a responde.*

**A régua da casa:** essa varredura é o que fecha a [FIN-48] e a §8c do ofício do decupador. "Medir o
artefato" é medir o áudio **contra o texto que ele deveria conter** — plano contra plano devolve
laudo limpo sobre vídeo furado, e desta vez devolveu com sete gates verdes.

---

### FIN-150 · São TRÊS arquivos de fala, não dois — e medir contra o errado passa em todos os gates (07/ago/2026)

> 🔀 **Era `FIN-123` e virou `FIN-150` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `FIN-123` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**O caso, medido duas vezes no mesmo dia, no `ceuta-travessia-em-massa`.** A pasta do projeto tem
`words.json`, `words-limpo.json` **e `words-final.json`**, e as leis desta gaveta só conheciam os dois
primeiros. Os relógios:

| arquivo | 1ª palavra | última | relógio |
|---|---|---|---|
| `words.json` | 11,18 s | 2190,64 s | **BRUTO** (o lixo que o decupador precisa enxergar) |
| `words-limpo.json` | 114,14 s | 2180,01 s | BRUTO, sem as palavras cortadas |
| `words-final.json` | 0,10 s | 1512,67 s | **FINAL** — o relógio do master entregue, pós-ripple |

Desde 06-07/ago o **espelho nasce em tempo FINAL**. Logo a régua de qualquer word-lock neste projeto é
`words-final.json`, e as duas primeiras estão deslocadas em **minutos**.

**O que aconteceu.** Um lote de pesquisa de documentos mediu o espelho contra o relógio LIMPO derivado
do `words.json` e registrou uma divergência (`DIV-00`): *"o espelho está adiantado 6–12 s"*, com
`inSec_sugerido_limpo` para 21 cenas. Estava invertido. A medição contra `words-final.json`:

| grifo | fala começa | `inSec` do espelho | erro real |
|---|---|---|---|
| s55 | 431,73 s | 431,733 s | **0,00 s** |
| s116 | 1062,09 s | 1061,60 s | **0,49 s** |

**Aplicar a correção teria adiantado o grifo em 5,98 s e 11,99 s** — exatamente o defeito que o modo
documento existe para evitar. Duas das 21 foram remedidas e retratadas; **as outras 19 seguem com os
campos suspeitos no shard**, e quem as montar precisa refazer o word-lock.

**Por que nenhum gate pegou.** O deslocamento é **constante**, então tudo continua internamente
coerente: o JSON valida, os beats somam, a cena fecha, o contrato passa. Um erro de relógio não parece
erro — parece um vídeo inteiro ligeiramente fora de sincronia, e isso só se vê no frame.

**A regra:**

1. **Descubra o relógio, não presuma.** O teste é de uma linha e custa zero: pegue a `ancora` de uma
   cena do meio do espelho e case-a com o texto de cada `words*.json` na janela `[inSec, inSec+dur]`.
   **O arquivo em que a âncora aparece é a régua.** Fazer isso antes de disparar o agente é o que
   impediu 401 beats de nascerem fora de sincronia nesta mesma produção.
2. **Nunca cite "o words.json" por nome num prompt de estação sem dizer o relógio.** O roteiro desta
   estação mandava usar `words.json`, que aqui é o BRUTO — a instrução estava escrita contra um projeto
   de outro tempo. Quem orquestra recorta a fala por cena **antes** de delegar; o especialista não deve
   ter a chance de abrir o arquivo errado.
3. **Divergência de relógio se retrata, não se aplica.** Achado que propõe mexer em `inSec` de espelho
   com arte em andamento passa antes pelo `qc-espelho-cortes`, que **detecta o relógio sozinho**. Se ele
   disser FINAL e o achado falar em LIMPO, o achado é que está errado.

*O gate cobre o que ele sabe medir. Relógio errado não é um valor fora da faixa — é a faixa inteira
deslocada, e ela some dentro da própria coerência.*


## FIN-126 · O card de título vive num gap que só o XML abre — no COMPOSTO ele é engolido pela cena seguinte (07/ago/2026)

**Medido no `cerebro-quando-sonha@arte` (07/ago/2026), com os 5 cards já desenhados e validados.**
O card de título de tópico nasce de um corte de classe `titulo`: o decupador tira a frase lida em voz
alta ("O palco, o cérebro no sono REM.") e marca `gapSec: 3` para o card mudo entrar no buraco. A
doutrina inteira — a skill `titulos-topico`, o espelho, o briefing de arte — trata esse gap como se
ele existisse. **No composto ele não existe**, e a linha que diz isso está escrita há tempos, sozinha,
em `scripts/finalizacao-config.mjs:143`:

```js
gapsLimpo: [], gapSec: 3,     // o composto não abre os gaps de 3 s dos cards — só o XML abre
```

**O que acontece então.** O span do card é 100% corte, logo `inSec` e `inSec+dur` caem os dois dentro
do mesmo corte. O `mapSec` do compositor (`compor-base-youtube.mjs:111`, ramo defensivo) faz **snap
ao início do corte no limpo** — e a cena SEGUINTE, que começa logo depois do mesmo corte, mapeia para
**exatamente o mesmo instante**. A regra geral de janela, `Math.min(end, next.inClean)`, então trunca
o card a ~1 frame. Não há regra especial de card; há a regra geral, e ela basta para matá-lo.

**A conta deste vídeo, e é o formato em que ela sempre aparece:** t01 colide com s05 · t02 com s17 ·
t04 com s35 · t05 com s52 — todas as quatro com clipe, todos os quatro cards somem. Sobrevive só o
**t03**, e por acidente: a cena seguinte (s25) é apresentador `anima:false`, não entra em `scenes`, e
**apresentador não trunca**. Ou seja, o card sobrevive exatamente quando o próximo trecho é o Bôco
falando — o que é sorte de montagem, não desenho.

**Por que passa despercebido até a entrega.** Todo gate de cena aprova o card: `qc-contrato` PASS,
`__duracao` correto, frame olhado, arte bonita. O `qc-janela-exibida`, que existe para pegar cauda
morta, **não alcança o caso** — ele importa `mapSecFactory` de `src/cortes.mjs`, que devolve `null`
dentro de corte, enquanto o compositor usa a própria `mapSec` com snap. O gate acredita reproduzir o
compositor (está escrito na doc dele) e usa outra função, então o card cai em "a conta nem alcança" e
a medição real nunca roda. É a família da [FIN-42]/[FIN-44] — dois relógios, comparação plausível,
erro silencioso — desta vez **dentro do gate que nasceu para matá-la**.

**Quem pega:** `qc-espelho-cortes`, e ele é inequívoco — `✗ [engolida] t04 — a cena inteira cai dentro
do corte [titulo] · o remapeador BRUTO→LIMPO não tem para onde mandá-la: ela some da montagem`.

**A regra.** (1) **Card de título é dado de finalização, não de arte** — antes de desenhar os cards de
um vídeo, rode `qc-espelho-cortes` e veja se eles saem `[engolida]`. Se saírem, a arte é válida mas
**só chega ao ar pela rota XML/Premiere**; decida antes de pagar a inferência. (2) Nas duas saídas
possíveis — o composto passar a abrir o gap, ou o card sair do espelho e viver só no XML — **quem
decide é a finalização**, porque `finalizacao-config.mjs` é o coração da entrega e é compartilhado.
(3) `qc-janela-exibida` precisa usar a `mapSec` DO COMPOSITOR, com snap, e não a `mapSecFactory` que
devolve `null`; trocar só a função, porém, **não fecha o conserto** — passa a acusar 100% de cauda
morta no card, que é o achado verdadeiro dito com a palavra errada. O gate tem de saber distinguir
"card truncado porque o composto não abre o gap" de "arte com cauda desperdiçada".

*Gate que diz reproduzir o compositor e importa outra função não erra por pouco: ele erra
exatamente onde o compositor foi defensivo, que é onde mora o caso difícil.*

---

### FIN-151 · A NOTA DA ESTAÇÃO ENVELHECE E MANDA LIGAR O ANTECESSOR DE UMA CAPACIDADE JÁ PORTADA (07/ago/2026)

> 🔀 **Era `FIN-127` e virou `FIN-151` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `FIN-127` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**O caso, no `o-acre-o-estado-que-o`.** O passo 3 de `scripts/estudio/estacoes/trilha.md` mandava, com
todas as letras: *"a trilha do XML hoje sai sem keyframes. Se a edição PT-BR precisar deles, é LIGAR
este script"* — o `scripts/inserir-trilha.mjs`, citando até o tamanho em bytes como prova de que ele
está lá. A frase era verdadeira quando foi escrita, sobre o estado de **26/jul**. Só que em **31/jul**
(d0daa74) o bloco `── A2 · a trilha, com os abaixamentos já em keyframes ──` entrou no
`xml-premiere-5camadas.mjs`, emitindo os `<keyframe>` de `audiolevels` nativamente e declarando o
motivo no próprio comentário: *"Com a entrega voltando a ser XML, ele precisa existir AQUI."* A nota
ficou **7 dias atrás do código**, e obedecê-la teria duplicado os keyframes num XML que já os tem.

**Por que engana bem.** Todo detalhe verificável da nota CONFERE: o arquivo existe, tem 7.419 bytes,
`grep` não acha chamador nenhum. Um script órfão parece obviamente um script esquecido — e a leitura
natural de "sem chamador" é "ninguém ligou ainda", quando aqui significava o oposto: **foi absorvido**.
A pista está no destino, não na origem: o gerador que herdou a capacidade cita o antecessor pelo nome
(*"é a mesma que o `scripts/inserir-trilha.mjs` gravava"*). É a mesma família da [FIN-46] e da rota
FIN-45 — capacidade portada, com o registro velho ainda mandando no cherry-pick que não existe mais.

**A regra.** (1) Antes de LIGAR um script que uma nota chama de órfão, **grep o nome dele dentro do
script que hoje faz o trabalho** — se o consumidor atual o cita em comentário, foi porte, não
esquecimento, e ligar é duplicar. (2) Instrução de estação é documentação e obedece à mesma
precedência do `docs/` (`CLAUDE.md`: *planos, NÃO estado atual*): quando ela afirma um estado do
código — "hoje sai sem X", "não tem chamador" —, **isso é hipótese a medir, não ordem a cumprir**, e
o custo de medir é um `grep`. (3) Quem mediu conserta a nota no mesmo turno; `git log -S` sobre a
frase-chave data o porte e prova qual dos dois textos é o mais novo.

*"Sem chamador" tem duas causas opostas — ninguém ligou ainda, ou já não é preciso ligar. O arquivo
órfão não sabe diferenciá-las; quem herdou o trabalho, sim.*

---

### FIN-135 · [renumerado de FIN-125 no merge de 08/ago]
### FIN-152 · CAPÍTULO LONGO É BIMODAL, E O PICKER SÓ SABE INFERIR UM MOOD PARA ELE INTEIRO (07/ago/2026)

> 🔀 **Era `FIN-128` e virou `FIN-152` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `FIN-128` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**O caso, no `o-acre-o-estado-que-o`.** O `escolher.mjs` inferiu `mood=Dreamy` para o cap 2 e cobriu
os 305 s com "Sweven" (184→446 s) + "Constellations" — as duas `Dreamy`. Mas o capítulo **se chama "A
borracha que virou guerra"** e vira no meio: 184–345 s é a Belle Époque de Manaus e a corrida dos
nordestinos (onde `Dreamy` cabe), e 345–489 s é `s26-bomba-relogio` → `s28-bolivian-syndicate` →
`s31-seringueiro-sangrando` → `s33-placido-de-castro` → `s35-guerra-na-floresta` →
`s38-estado-independente`. A faixa `Dreamy` mais longa engolia **a batalha inteira**.

**Não é defeito do picker — é o limite declarado do desenho dele.** Ele conta qual mood aparece em
mais cenas e devolve UM vencedor por capítulo; num capítulo bimodal o vencedor é a metade maior, e a
outra metade fica com a música errada por construção. A quebra em várias faixas que ele já faz é por
**duração** (nenhuma faixa do acervo cobre 305 s), não por conteúdo — então ele emenda duas faixas do
MESMO mood errado e o log sai idêntico ao de um capítulo bem servido. Nenhum gate pega: a cama existe,
cobre a janela, o gênero passa o veto da [FIN-95].

**Quem pega: a revisão de mood que a nota da estação pede em uma linha** — e a régua é ler os
`titulo` das cenas do capítulo no espelho, não o nome do capítulo. O título "A borracha que virou
guerra" já denunciava as duas metades; a lista de cenas diz **onde** fica a dobradiça.

**A regra.** (1) Capítulo acima de ~4 min: liste as cenas dele e procure a VIRADA — se a segunda
metade tem outro registro emocional, a troca à mão não é opcional. (2) Emende **na cena da virada**,
não no meio aritmético: aqui foi `s26-bomba-relogio` @345 s, e a música muda na palavra. (3) A faixa
nova tem de cobrir a janela em tempo **LIMPO** (a duração pós-ripple, não a bruta) e respeitar o veto
de gênero da [FIN-95] — `States` (Dark/Restless, Orchestral Hybrid+Drama, 105 bpm, 159,8 s) para 144 s
de guerra. (4) Salto de BPM na emenda: o script cita 82→138 como audível; 85→105 na dobradiça
dramática é degrau desejado. (5) Preserve o carimbo `relogio` do item e reconfira `perdidos: []` em
`src/trilha-plano.mjs` — a troca à mão mexe em `inSec`/`outSec`, que é exatamente o que a detecção de
relógio lê. O `escolher.mjs` **não** desfaz a troca (ele pula plano existente), mas só se ninguém
passar `--refazer`.

*O picker acerta a emoção média de um capítulo; a emoção média de um capítulo que vira guerra no meio
não é a emoção de nenhuma das suas metades.*

---

### FIN-136 · [renumerado de FIN-126 no merge de 08/ago]

Achado na estação de ARTE do `cerebro-quando-sonha`, com os 5 cards `t01`–`t05` **já desenhados,
validados e pagos**. Eles não vão ao ar no composto: **4 dos 5 recebem uma janela de exibição de
`0,000 s`.**

**A geometria.** Um card de título não tem fala — ele mora num `gapSec` de 3 s que o `_cortes.json`
declara na fronteira do tópico, e o span dele é **100% classe `titulo`**. Então:

1. `compor-base-youtube.mjs:111` tem `mapSec` PRÓPRIA, com ramo defensivo declarado no código:
   `else if (t > c.ini) shift += (t - c.ini)` — *"t DENTRO de um corte → snap ao início do corte no
   limpo"*. O card inteiro está dentro do corte, então ele faz **snap** para o início dele.
2. O início daquele corte, no limpo, é **exatamente onde a próxima cena começa** — porque é a mesma
   fronteira. Card e cena seguinte caem no MESMO instante.
3. `compor-base-youtube.mjs:263` fecha a janela em `end = Math.min(end, next.inClean)` (*"nunca invade
   a próxima"*). Com `start == next.inClean`, **`end == start`**.

**A prova, medida com a própria função do compositor** (`cerebro-quando-sonha`, 07/ago):

```
t01  inClean 46,928  →  próxima s05 @46,928   JANELA = 0,000 s  ⛔
t02  inClean 228,891 →  próxima s17 @228,891  JANELA = 0,000 s  ⛔
t03  inClean 377,946 →  próxima s26 @383,944  JANELA = 3,000 s  ok
t04  inClean 521,386 →  próxima s35 @521,386  JANELA = 0,000 s  ⛔
t05  inClean 726,270 →  próxima s52 @726,270  JANELA = 0,000 s  ⛔
```

O `t03` sobrevive **por acidente de vizinhança**: a cena logo depois dele é apresentador `anima:false`,
que não entra no array de `scenes` — a próxima COM CLIPE está 6 s adiante, e o card cabe no vão. Não é
projeto, é sorte; num vídeo em que todos os tópicos abrem em cena desenhada, some o card de todos.

**A causa está escrita, em uma linha, em `scripts/finalizacao-config.mjs:143`:**
`gapsLimpo: [], gapSec: 3, // o composto não abre os gaps de 3 s dos cards — só o XML abre`.
Isto é **decisão declarada**, não descuido: a rota do Premiere abre o gap e os 5 HTMLs valem lá. Mas
quem desenha o card para o composto está produzindo para um buraco que não existe naquela rota.

**Por que nenhum gate de arte pega.** Os 5 HTMLs estão CORRETOS: `qc-contrato` PASS, `__duracao` 3,9 s
(a margem da [ARTE-93] contra tela preta), word-lock não se aplica. O defeito não é da cena — é da
**relação entre a cena e o corte**, e só aparece somando `mapSec` do card com `inClean` da vizinha.
Quem grita é o `qc-espelho-cortes`, com o veredito exato: *"a cena inteira cai dentro do corte
`[titulo]` — o remapeador BRUTO→LIMPO não tem para onde mandá-la: ela some da montagem"*.

**A regra.**
1. **Arte não é a raiz e não conserta isto.** Não apague os cards, não mude `inSec`/`dur` para
   "escapar" do corte: o card fora do gap invade fala. Eles são válidos na rota XML.
2. A decisão é binária e mora na **FINALIZAÇÃO**: ou o composto passa a abrir o gap de 3 s
   (`gapsLimpo` alimentado com as fronteiras de card, em tempo limpo), ou o card **sai do espelho da
   rota do composto** e vive só no XML. As duas mexem em `finalizacao-config.mjs`, que é o coração da
   entrega e é compartilhado com produções vivas — não se muda de passagem.
3. **A conta é de 5 linhas e roda em qualquer projeto** — faça-a antes de despachar a arte de card:
   `mapSec(card.inSec)` contra `inClean` da primeira cena seguinte **com clipe** (`anima !== false`).
   Janela `< 0,1 s` = o card não vai ao ar.
4. Rodar `qc-espelho-cortes` na estação de arte é barato e é o único árbitro que enxerga isto sozinho.

*Um artefato pode estar impecável e mesmo assim durar zero frame: quem decide quanto tempo ele fica no
ar não é o arquivo, é a distância até o vizinho.*


### FIN-137 · [renumerado de FIN-127 no merge de 08/ago]

Medido no `o-acre-o-estado-que-o`, na finalização, com 71 clipes 4K prontos. O `qc-master-em-fase`
deu **FAIL num master correto** e mandou regerá-lo a partir do bruto — 10 GB de re-encode que moveria
o relógio do projeto e **invalidaria os 71 clipes já pagos**.

    último corte  [977,60 .. 1006,947]   ← passa 1,943 s do fim do bruto (1005,004 s)
    régua da subtração → esperado 785,387 s · master 787,467 s · delta +2,10 s → FAIL
    régua dos keeps    → esperado 787,330 s · master 787,467 s · delta +0,14 s → PASS

A subtração desconta 29,347 s que o arquivo não tem para dar. E o `_finalizacao-config.json` já
trazia `outSec: 787.33`: **a linha inteira andava no relógio certo e só o gate discordava.**

O `decupagem/master-decupado.mjs` — o DONO da conta — já tinha escrito o porquê ao lado dela:
*"continua correto quando não cabe (corte que extrapola a duração) — casos em que a subtração
mentiria e esta soma não"*. O gate reimplementou a aritmética em vez de usar o dono, que é o mesmo
pecado que o cabeçalho dele confessa trinta linhas acima, sobre a leitura do `_cortes.json`.

**A lei:** quando dois scripts calculam a mesma grandeza, o que NÃO a produz está errado por padrão.
Antes de mandar refazer um artefato caro, confira a conta contra a de quem o gerou.

**Corolário (o segundo relógio legítimo):** desde a "v2-gaps" o gerador materializa no master o gap de
card de cada fronteira de título. Existem portanto DUAS durações corretas — com e sem os `gapSec` —
e o gate aceita as duas, dizendo qual casou. Confundir 12 s de gap declarado com master fora de fase
é alarme falso; o defeito real que ele pega (`paises-baixos-mar`, −155,8 s) tem uma ordem de
grandeza de folga.

### FIN-138 · [renumerado de FIN-128 no merge de 08/ago]

O espelho marca a cena absorvida com `_mergedInto: "<id-da-irmã>"`, e a irmã passa a cobrir o span
das duas — o clipe dela é renderizado com a duração somada (`s19`: `dur` 10,87 s no espelho,
`-4k.mp4` de 10,90 s, cobrindo `s19`+`s20`).

Dez scripts da casa já respeitavam `_mergedInto` — inclusive o `lib/render-pronto.mjs`, e é por isso
que **o render fechou 71/71 corretamente**. O `xml-premiere-5camadas.mjs` era o único que não sabia,
e emitia cada fundida como clipitem próprio apontando para um `-4k.mp4` que nunca vai existir:

    s20 2,60 s · s62 10,77 s · s73 4,97 s · s84 6,93 s  =  25,3 s de MÍDIA OFFLINE no Premiere

E ainda TRUNCAVA a irmã: `s19` saía com 6,50 s em vez dos 9,10 s da janela, porque a fundida tomava
o resto.

⚠️ **A proteção existia e estava desligada justamente na rota padrão.** O `if (!clipe) continue` é
suspenso no modo `BASE_DESTINO` — o modo que a VM usa para escrever os caminhos do Mac, ou seja, o
PT-BR de todo dia. Ali a cena entra "apontando para o nome que o clipe terá", o que é certo para
clipe que ainda vai nascer e errado para clipe que **nunca** vai.

**A lei:** quando um conceito do espelho (`_mergedInto`, `anima:false`, `modo:"nenhum"`) é respeitado
por N scripts e ignorado por um, o ímpar não é exceção — é o bug. E contagem que fecha (71/71) não
absolve o XML: quem conta é outro código, com outra régua.

---

### FIN-139 · O gap do card tem UM dono — e o master novo virou o segundo (07/ago/2026)

*(o-acre-o-estado-que-o, 07/ago 20:2x — medido antes de entregar, não depois. Esta lei era `FIN-129`
na VM, número que já era da lei "contar o clipe que o XML CITA"; renumerada para `FIN-139` — que é o
número que o merge de 08/ago já tinha dado ao ADENDO dela, abaixo. Os dois voltaram a ser uma coisa
só. Ponte: `seed/DE-PARA-LEIS.md`.)*

O `xml-premiere-5camadas.mjs` declara no próprio cabeçalho que **ele** é quem abre o gap de 3 s do
card e desloca tudo que vem depois — V1, V2, áudio, tudo — porque *"aplicar o gap só na V1 deixaria a
imagem adiantada em relação ao áudio pela soma dos gaps anteriores, que é exatamente o defeito"*.
Para isso ele assume um master **SEM** gap: corta o master no relógio LIMPO e abre o buraco na
timeline.

Em 07/ago o `master-decupado.mjs` passou a materializar os 4 gaps **dentro** do master
(silêncio digital de −91 dB, medido em 28–30 s e 105–107 s). Os dois estão certos sozinhos. Juntos,
contam o mesmo gap duas vezes — e o erro **acumula**, porque o XML corta no relógio sem gaps um
arquivo que já os tem:

    card 1 · XML corta @27,97s · gap do master @27,97s → erro  0s
    card 2 · XML corta @101,80s · gap do master @104,80s → erro  3s
    card 3 · XML corta @349,10s · gap do master @355,10s → erro  6s
    card 4 · XML corta @518,67s · gap do master @527,67s → erro  9s

O sintoma na tela: o card entra 3s×N cedo, **cortando a fala no meio**, e o silêncio do gap reaparece
depois, dentro do trecho falado. A V1 consome os 23980 frames inteiros do master (salto interno 0f) e
ainda abre 476f (15,87 s) de buraco — 815,20 s de span para 799,33 s de material.

⚠️ **Nenhum gate existente pega isso**, e três deles dão PASS por cima: `espelho×fala` (não olha o
master), `master×cortes` (compara DURAÇÃO, não posição — e ele PASSA, dizendo em voz alta *"relógio
do master: com 12s de gap de card materializado"*), e a contagem 71/71 de render. O único jeito de
ver foi medir o `<in>`/`<out>` do XML contra o volume do master, segundo a segundo.

**A lei:** o gap do card é um deslocamento, e deslocamento só pode ter **UM** dono. Quem materializa
tem de declarar, e quem monta tem de LER a declaração — nunca assumir. Antes de gerar o XML, cobre a
pergunta: *o master que está no disco já tem o gap dentro dele?* O `qc-master-em-fase` responde de
graça e já imprime a frase — a falha não foi de medição, foi de ninguém ter cruzado a resposta dele
com o que o gerador do XML pressupõe.

**Agente-raiz:** `decupador` (dono do `_master-decupado` e da declaração dos gaps — o terceiro
relógio) + `xml-premiere-5camadas.mjs`, que precisa consultar essa declaração em vez de pressupor
master limpo.

**Adendo do `qa-montagem` (07/ago 21:1x) — a linha exata e o terceiro estado.**

O laudo mediu o mesmo defeito por outro caminho (blackdetect + silencedetect no master) e chegou aos
mesmos pontos — **27,97 · 104,83 · 355,17 · 527,73 s**, 3,000 s cada. Confirmação independente.

E achou o que faltava: **a causa não é "alguém errou a conta", é um estado que o código não prevê.**
A detecção de relógio em `scripts/xml-premiere-5camadas.mjs` (~419) é **binária** — BRUTO **ou** LIMPO —
e não existe o terceiro: *LIMPO COM GAPS JÁ MATERIALIZADOS*. No ramo do master decupado (~1312) isso
vira uma linha que assume o arquivo inteiro como um keep contínuo:

    keepsArq.push({ iniArq: 0, fimArq: dMasterArquivo, limpoIni: 0 });

O teste barato do terceiro estado já existe e cabe num `if`: **`duração == keeps + Σ gapSec`**. Quando
bate, o gerador não deve abrir gap nenhum — V1/A1 entram inteiras e o card ocupa o buraco que já está
lá dentro.

⚠️ **Um defeito de relógio não sai sozinho.** Os outros três FAILs do laudo são o MESMO bug vestido
de outra coisa, e cada um deles, isolado, mandaria consertar o agente errado:

- **1,03 s de PRETO na timeline** (543,53–544,57 s) — parece cena faltando; é o preto do gap do master
  aparecendo onde o XML não o pulou. *A cobertura dos 4 buracos da V1 dá 100% e não desmente isso:*
  o preto que sobra não está no buraco, está **dentro do material**.
- **CTAs órfãos** (like −12 s, QR −12 s da menção) — o plano de CTAs está CERTO; quem chegou tarde foi
  a fala.
- **QR e cartela por cima do conteúdo** (FIN-81) — 28 e 23 palavras cobertas, pela mesma deriva.

**A lei, agora completa:** antes de acusar quatro agentes, pergunte se os quatro sintomas têm **um**
relógio em comum. E quando um gate der PASS dizendo em voz alta *qual* relógio casou, essa frase é
uma pergunta para o próximo passo — não um carimbo.

### FIN-140 · [renumerado de FIN-130 no merge de 08/ago]

Desde a [FIN-139] e o passo 7b da decupagem (06/ago), o espelho nasce sobre o `words-final.json` — a
transcrição do master **já cortado e já com os gaps materializados**. O tempo dele é o tempo do
arquivo. Mas o `qc-tempo-apresentador.mjs` foi escrito para o fluxo antigo e descontava os cortes
**incondicionalmente**, num eixo que já não os continha.

Medido no `galaxia-arco-flecha`:

```
o vídeo real ........ 587 s montados · Bôco 71,4 s = 12,16%   (o alvo é 12%)
o que o gate media .. 501 s "montados" (−86 s de corte) · Bôco 56 s = 11,1%
```

**Os dois passavam na faixa de 10–15%, e é isso que torna o defeito perigoso**: ele fica invisível
até empurrar um espelho correto para fora da faixa. Encolher o numerador **e** o denominador não se
cancela — as janelas do apresentador não se distribuem como os cortes se distribuem.

**E ele estava escondendo defeito real.** Ao consertar, o `ceuta-travessia-em-massa` (espelho FINAL,
master de 1514 s) passou de "13,3% ✓" para **9,2% ✗** — abaixo do piso de 10%. O número certo é
140 s / 1514 s; o antigo dividia por um denominador falso de 1051 s. *Gate que mede errado não erra só
para reprovar: ele também aprova o que devia barrar.*

O conserto **reusa a detecção do `qc-espelho-cortes.mjs`** (master no disco + `words-final.json`, com
BRUTO como padrão conservador quando não há master). Isso não é economia de código: **dois gates que
decidem o relógio por critérios diferentes acabam discordando sobre o mesmo espelho**, e aí não há
como saber em qual acreditar. O P&B continua valendo nos dois relógios — é tratamento de trecho, não
geometria de tempo.

Regressão verificada: `mamute-de-volta`, `o-acre` e `dentro-do-sol` (espelhos BRUTOS, sem
`words-final.json`) seguem descontando os cortes e passando com 12,6% · 12,7% · 11,9%.

**Quando um formato de dado muda, o inventário do conserto não é "o que produz o dado" — é TODO
MEDIDOR que o lê.** A mudança de relógio de 06/ago já tinha derrubado `qc-espelho-fala`,
`mapa-limpo` e `qc-emenda-visual`; este era o quarto e ninguém o tinha listado.

*Agente-raiz consertado: `scripts/qc-tempo-apresentador.mjs`.*

### FIN-141 · [renumerado de FIN-131 no merge de 08/ago]

O `qc-palavra-longa.mjs` julgava pela DURAÇÃO do token: acima de 2 s, "não é palavra, é palavra +
silêncio". A régua nasceu de "dezenove" e envelheceu no primeiro **ano de 4 dígitos**: o Scribe
empacota *"mil oitocentos e oitenta e cinco"* — onze sílabas — num token só, e ele dura 2,48 s de voz
**contínua**. Medido no `ate-que-altura-construir`: zero silêncio dentro de `"1885."` e `"1956,"`.

**O estrago não é o alarme — é o conserto que o alarme manda fazer.** O "corte sugerido" cobria o
meio do token, e o `aplicar-cortes.mjs` filtra palavra pelo meio: aplicá-lo **apagaria os anos 1885 e
1956 do texto limpo**, e a lente "dado perdido" do `qc-decisao-limpo.py` reprovaria em seguida. *Dois
gates da casa mandando coisas opostas sobre o mesmo trecho ensinam a sessão a ignorar os dois.*

Não era isolado: os dois exemplares vivos reprovavam igual — `ceuta` em `"1956"`/`"1975"`,
`especies-humanas` em `"tsc,"`/`"sozinho."`.

**O conserto: duração virou SUSPEITA; o veredito é o silêncio MEDIDO no áudio.** O
`out/<proj>/audio.wav` já está no disco, no mesmo relógio BRUTO dos dois arquivos de palavras, e a
medição custa milissegundos. Sem o wav, o gate acusa como antes e **diz** que não pôde medir — nunca
finge que mediu.

**As duas armadilhas do conserto, as duas pescadas por teste de regressão, e as duas silenciosas:**

1. **`-v error` mata o próprio log que se quer ler.** O `silencedetect` loga em nível INFO. Com
   `-v error` — o reflexo de quem quer saída limpa — o filtro roda, não imprime nada, e a leitura
   devolve **"0 s de silêncio" para tudo**, inclusive para o buraco de 9,92 s que criou o gate.
   *Silêncio de log virando silêncio de áudio é o falso negativo perfeito: verde em cima de defeito.*
2. **−55 dB perde o defeito real**, porque ele **não é silêncio absoluto**: o apresentador se ajeita,
   e cadeira e roupa passam de −55 dB. O limiar foi calibrado contra os dois casos conhecidos, não
   escolhido redondo:

```
limiar    "Quarenta" 9,92s (tem de ACUSAR)   "1885."/"1956," (tem de INOCENTAR)
−55 dB           0,43 s                            0,00 s      ← perde o defeito real
−45 dB           1,99 s                            0,00 s
−40 dB           3,38 s                            0,00 s      ← separação máxima · ESCOLHIDO
−30 dB           3,44 s                            0,16 / 0,32 s ← começa a morder a VOZ
```

Verificado nos três projetos: `ate-que-altura-construir` PASSA (só o buraco real, já cortado);
`ceuta` volta a acusar o `"Quarenta"` **e revela que ele sobreviveu no `words-limpo`**; e em
`especies-humanas` o `"tsc,"`/`"sozinho."` **não eram falso positivo** — têm 2,1 s e 1,8 s de silêncio
medido. O gate antigo tratava os quatro casos como um só; o novo separa quem tem buraco de quem só
fala comprido, e entrega o instante exato do corte em vez de um chute de 1,2 s.

**A régua geral:** *quando um gate infere do metadado o que dá para medir no artefato, ele acerta
até o dia em que o metadado muda de forma.* Aqui bastou um ano por extenso.

*Agente-raiz consertado: `scripts/qc-palavra-longa.mjs` (a régua e o comando são dele, não do
decupador — o especialista tinha medido certo e recusado o "conserto" do gate).*

---

### FIN-142 · [renumerado de FIN-132 no merge de 08/ago]

Estação ARTE do `galaxia-arco-flecha`, re-espelhado. O `qc-janela.mjs` abriu com **74 cenas
reprovadas** de 51 (cenas contadas duas vezes), quase todas por ANCORAGEM, com frases como *"arte
ATRASADA 54,67s"* e *"a fala da janela só bate 0%"*. O laudo, obedecido ao pé da letra, significava
despachar o Fable para re-ancorar o vídeo inteiro. A medição independente do `reaproveitador-de-cenas`
dizia outra coisa: **13 cenas intactas e 38 com ajuste de fração de segundo**. Quando dois métodos
divergem nessa ordem de grandeza, o barato é conferir o gate antes de pagar o agente.

Eram **três defeitos empilhados**, todos da família da [FIN-130] — ferramenta que decide por NOME o
que devia decidir por MEDIDA:

1. **O arquivo de palavras estava grampeado.** `["words.json","words-limpo.json"]`, o primeiro que
   existisse — o BRUTO. Desde 06/ago o espelho nasce em tempo FINAL e quem o descreve é o
   `words-final.json`. Espelho 0→587,13s julgado contra uma transcrição 10,22→681,52s: toda janela
   caía sobre outro trecho da gravação. O mesmo defeito estava no `_brief-arte.mjs` (lia
   `words-limpo`), e ali é pior porque não há laudo — o Fable recebe o word-lock de outra cena e
   crava os beats nela: a `s30` receberia word-lock **VAZIO**, a `s62` receberia a fala da `s49`/`s50`.

2. **A mediana fazia as vezes de relógio.** O gate calcula um consenso ("a transcrição andou 71,733s")
   e procura a fala antiga em `inSec + dev`. Entre dois relógios de verdade isso é falso por
   construção: **o ripple dos cortes é CUMULATIVO**, então cada cena desloca mais que a anterior.
   Medido: de **17,06s na `s01` a 76,83s na `s85`**. A `s01` erra por 55s — o desempate procura a
   fala 55s adiante, acha outro assunto, devolve 0% e reprova a abertura do vídeo.

   **O conserto é não estimar: cada janela é lida NO SEU PRÓPRIO relógio.** A declarada no relógio em
   que a arte foi feita, a vigente no do espelho. Qual é o relógio da arte se descobre pela medida —
   o candidato do disco que faz as âncoras declaradas baterem com as vigentes (aqui: `words-limpo`,
   89% de aderência em 47 cenas). Com isso as mesmas 47 cenas medem **20 com fala IDÊNTICA e 34 acima
   de 85%**: a arte estava certa, e o gate saiu de 74 acusações para 38.

3. **O desconto de corte rodava sobre um espelho pós-ripple** — a [FIN-130] de novo, no mesmo arquivo.
   A `s01` (abertura, 15,2s) foi declarada *"o composto exibe 0s"*, porque um corte que no relógio
   bruto ficava ANTES dela foi subtraído de dentro dela.

**O que o laudo bom revelou, e o ruim escondia:** com a régua certa o gate passou a pegar um defeito
REAL que antes absolvia — o `_cortes.json` declarava gap de 3s nos quatro cards de título e os vãos
reais no master eram 3,07 / 3,27 / 4,10 / 3,57s. Contra o número velho, o `card03` (3,20s) parecia ter
folga e levaria **0,90s de tela preta** ao ar, que é exatamente a [ARTE-93]. *Vão materializado no
artefato vale mais que gap declarado: onde os dois discordam, manda o arquivo.*

**A economia, medida:** das 51 cenas, 15 precisavam apenas do carimbo do cabeçalho — `inSec` e
`Word-lock (−n)` velhos, coreografia correta. São 15 agentes pagos para reescrever um número. Viraram
`scripts/recarimbar-ancora.mjs`, que troca só o carimbo (nunca um tempo de `renderAt`, nunca
`__duracao`) e tira a lista do PRÓPRIO gate — só as cenas que ele classificou como `take-trocado`,
isto é, aquelas em que ele MEDIU que a fala não mudou. O script não decide sozinho que uma cena está boa.

**A régua geral:** *falso positivo em massa custa o dobro — paga o agente para consertar o que estava
certo e ensina a estação a ignorar o gate.* Quando um laudo manda refazer quase tudo, ele está
descrevendo um defeito do artefato ou um defeito da própria régua; distinguir os dois custa uma
medição e evita uma estação inteira de inferência. É a [FIN-127] pelo outro lado: lá o gate mandava
destruir 71 clipes pagos, aqui mandava repintar 47 cenas boas.

*Agentes-raiz consertados: `scripts/qc-janela.mjs` (3 defeitos), `scripts/_brief-arte.mjs` (word-lock),
mais o helper novo `scripts/lib/words-do-espelho.mjs` — a escolha do relógio passa a ser UMA
implementação medida, não uma constante repetida em cada consumidor.*

### FIN-143 · [renumerado de FIN-133 no merge de 08/ago]

O `orcas-nao-matam` chegou à finalização com tudo o que se costuma conferir em ordem: **28 de 28
clipes 4K** no disco, nenhum órfão, nenhum HTML editado depois do clipe, e os três gates baratos
verdes — `qc-clipe-legivel` (28, 0 ilegível), `qc-procedencia` (42 itens, 0 proibida, 0 sem prova),
`qc-deserto-real` (maior janela 107 s, piso 180 s). O `finalizar.mjs` abortou na **etapa 0**:

    ▲ há _cortes.json e _media/, mas NÃO existe _media/_master-decupado.mp4
      — a decupagem decidiu e ninguém gerou o vídeo.

**Duas falhas em série, e a segunda fechou a porta da primeira.**

1. A **decupagem parou no meio**. A re-decupagem do zero de 07/ago 21:12 (ordem do Mateus) reescreveu
   `_cortes.json`, `words.json` e `words-limpo.json` e arquivou os antigos em
   `arquivo-morto/2026-08-07-orcas-nao-matam-pre-redecupagem/` — **só JSONs, nenhum vídeo**. O
   `_master-decupado.mp4` nunca chegou a existir: não estava em `_media/`, nem no bucket, nem no
   arquivo-morto. Decidir o corte não é decupar; decupar é entregar o arquivo cortado.

2. Sete horas depois, às **05:21**, outra sessão removeu do disco o `_bruto/source-sincronizada.mp4`
   (52,06 GB) e deixou a nota que explica o raciocínio:

   > *"ela é consumida só pela TRANSCRIÇÃO, dentro da decupagem. Com `words.json` e `_cortes.json` no
   > disco, o papel dela acabou."*

   O procedimento estava impecável — tamanho conferido byte a byte contra o bucket antes de apagar,
   instrução de re-obtenção escrita. **A premissa é que estava errada:** o bruto sincronizado tem
   DOIS consumidores, e o segundo é o `master-decupado.mjs`, que corta os keeps dele para produzir a
   **V1 do XML — o vídeo do apresentador**. A sessão inventariou os consumidores olhando para trás
   (quem já usou) em vez de para a frente (quem ainda vai usar).

**A régua, que é a [FIN-61] pelo outro lado:** o master decupado é artefato DERIVADO do
`_cortes.json`, como o clipe 4K é derivado do HTML. Lá a pergunta era *"o derivado está em fase com a
fonte?"*; aqui é a anterior, e mais barata: ***a fonte só pode sair do disco depois que o derivado
EXISTE.*** Insumo cujo derivado ainda não nasceu não é cache — é fonte única. Verificar que a cópia
remota está íntegra prova que o arquivo é re-obtível, **não** que o papel dele acabou.

**O dano é assimétrico e por isso engana:** apagar cedo economiza 52 GB por algumas horas; recuperar
custa o download inteiro de volta antes que a estação seguinte possa começar. E o custo real não é a
banda — é a estação de finalização parada esperando um arquivo que estava a um comando de distância
quando a decisão foi tomada.

**Efeito colateral que quase virou diagnóstico errado:** sem o master no disco, o `qc-espelho-cortes`
não consegue detectar em que relógio o espelho está e **assume bruto** — imprimindo 3 reprovas e 48
alertas de "cena mutilada". A aritmética desmente o alarme: o espelho termina em 1789,22 s, contra
1794,10 s do bruto e ~1141,6 s do master esperado (1794,10 − 664,46 de corte + 12,00 de gaps), logo o
espelho está mesmo em tempo bruto e o projeto é do **fluxo antigo**, onde atravessar corte é o normal
e quem remapeia é a ponte. *Gate que precisa de um artefato ausente não devolve "não sei": devolve um
veredito com a suposição embutida — e a suposição vem impressa em uma linha, no meio de 48.*

*Agentes-raiz: o `decupador` (entregar o `_master-decupado.mp4`, não só o `_cortes.json`) e a rotina
de liberação de disco (inventariar consumidores FUTUROS antes de apagar).*

---

## FIN-144 · O gap do card: o MASTER abre, o XML PREENCHE — a decisão, do Mateus (08/ago/2026)

A finalização do `orcas-nao-matam` parou 4 tentativas seguidas e bloqueou com `tipo:"humano"`, na
pergunta certa: *"quem abre o gap de card — o master ou o XML?"*. O agente fez o que devia — não
decidiu arquitetura sozinho. **A resposta, textual:**

> *"O GAP em si de card (3 seg) é inserido com tela preta na decupagem e encodado já com esse espaço
> definido. No XML, ele vai adicionar o card na V2, pois é um card encodado sozinho e não junto com o
> master da V1."*

**Os dois lados, e a fronteira entre eles:**

| camada | o que carrega | onde nasce |
|---|---|---|
| **V1** (apresentador) | **3 s de PRETO já encodados** no `_master-decupado.mp4` | **decupagem** — o gap é materializado no arquivo |
| **V2** (cenas) | o **card**, um clipe encodado SOZINHO, por cima do preto | **XML** — referência independente, nunca fundida à V1 |

**Por que isto encerra a ambiguidade que travava a estação:** o gap **não é** um espaço a ser aberto
na montagem, nem um vão a ser calculado pelo XML — ele **já existe fisicamente** no master quando a
finalização começa. O XML não abre nada: ele **posiciona um clipe** na V2, na janela que o preto já
reservou. *Quem cria o tempo é a decupagem; quem preenche a imagem é a montagem.*

**As duas leituras erradas que isso mata:**
1. **"O XML abre o gap"** → produziria deslocamento duplo: o master já tem os 3 s, e o XML empurraria
   tudo mais 3 s. É a família da [FIN-139] (*o gap do card tem UM dono*), agora com o dono nomeado.
2. **"O card entra na V1, junto do master"** → obrigaria a re-encodar o master a cada troca de card, e
   perderia a independência que faz o card ser trocável (lista de membros, correção de título) sem
   tocar no vídeo do apresentador.

**Consequência operacional:** o `master-decupado.mjs` é o dono do preto (por isso o `empurraGap` do
commit `69a679c` importa tanto — sem ele, na RETOMADA o gap some do concat e o master sai curto); e o
gerador de XML é o dono da colocação do card na V2. Nenhum dos dois deve saber do outro além da
duração declarada em `_cortes.json`.
### FIN-147 · espelho sujo não é montagem quebrada — simule a lista antes de devolver o vídeo

O `ceuta-travessia-em-massa` chegou à sexta passada de QC com um alarme que duas sessões anteriores
registraram no diário e que estava a um passo de mandar o vídeo de volta ao montador: o
`espelho.json` declara **164 segmentos, 139 com `anima:true`** — e a pasta `graphics/` tem **124
HTMLs**. Cruzando as janelas, **15 pares se sobrepõem**, o pior deles por **19,90 s**
(`s139-700-menores` → `s140-justica-ilegal`). A frase que ficou escrita foi *"não bloqueia render,
mas a finalização posiciona cena por espelho"* — e é ela que estava errada.

**A finalização não posiciona por espelho: posiciona pelo que TEM CLIPE.**
`compor-base-youtube.mjs:152`, com o comentário da própria casa ao lado:

    const clip = findClip(sc);
    if (!clip) continue;   // só cenas COM clipe renderizado entram
                           // (apresentador/Bôco não tem clipe → aparece pela base; é o certo)

Segmento sem HTML é descartado **antes de virar janela**. Simulando `loadScenes()` + `findClip()`
com os 124 HTMLs que existem: a lista real que o compositor monta tem **124 cenas e ZERO
sobreposições**. As 15 sobreposições envolviam, **todas**, exclusivamente segmentos sem HTML — não
havia um único par sobreposto entre duas cenas que existem de fato.

**A métrica que assusta não era a métrica que decide.** Sobreposição *no espelho* mede a sujeira do
insumo; o que decide a montagem é a sobreposição *na lista com clipe*, e as duas divergem por
construção sempre que houve RUN FUNDIDO — a cena-filha continua declarando janela própria depois que
a arte a absorveu na mãe. Neste projeto foram 15 filhas (`s02 s04 s05 s06 s15 s51 s63 s66 s86 s119
s126 s140 s141 s148 s157`), 14 delas citadas por nome no cabeçalho da mãe. O `qc-fusao-espelho` dá
**PASS** e conhece só 9 em 6 runs, porque lê `fluxo[].fundir` — quem não foi declarado não aparece,
e o gate verde convive com a sujeira sem mentir.

**O mesmo raciocínio absolve os gaps.** A simulação acha **23 vãos > 0,30 s**, o maior de 12,20 s, e
nenhum é defeito: são os blocos de apresentador, que a base cobre — o que o comentário do código já
declarava como o comportamento certo.

**A régua:** antes de devolver um vídeo por sujeira de espelho, **rode o filtro do consumidor sobre o
insumo e meça a saída**, não a entrada. Espelho é insumo; a montagem é o que sobra depois do filtro.
Um alarme calculado sobre a entrada de um pipeline que filtra pode não existir na saída — e devolver
vídeo pronto a uma estação anterior custa uma passada inteira, que é o gasto que a [SIS-86] conta
como progresso e a próxima sessão repete.

*Agente-raiz: o EDITOR-CHEFE na estação de QC (ler o espelho como se fosse a timeline). O `montador`
tem dívida real e cosmética — cena-filha absorvida devia perder `anima:true` —, mas ela não move um
frame e não justifica volta.*

### FIN-145 · o caminho da RETOMADA tem de fazer tudo que o caminho longo faz

O `master-decupado.mjs` monta cada segmento e, quando aquele segmento é fronteira de título,
materializa logo depois dele o **gap de 3 s** (preto + silêncio) onde o card vai entrar. Os dois
`lista.push` ficavam no mesmo bloco, no fim do laço — mas o ramo de retomada (`pulado — já pronto`)
tinha um `return` **antes** dele.

Enquanto o script roda do zero, ninguém vê: todo segmento passa pelo caminho longo e empurra o
próprio gap. O defeito só existe na **retomada**, que neste script é o caminho normal — ele existe
justamente porque segmento cortado é ativo pago e o processo morre no meio com frequência.

Medido no `orcas-nao-matam` (08/ago/2026): a sessão anterior foi interrompida com 41 de 43
segmentos prontos; ao retomar, os 41 vieram do cache, **os 4 gaps ficaram fora do concat** e o
master saiu com 1129,633 s contra 1141,641 s esperados — **12,008 s** = exatamente os 4 × 3 s.

O que salvou foi a aritmética do fim do próprio script (`bruto − Σcortes + Σgaps`, tolerância
0,5 s), que **recusou reportar sucesso**. Sem ela o master entraria no XML 12 s fora de fase com as
cenas, a trilha e o CTA, e a `[FIN-35]` (duração V1/A1 × narração) não pegaria: o arquivo é
coerente consigo mesmo, só é curto. Nenhum gate adiante compara o master com a lista de cortes.

**A régua:** quando um laço tem caminho rápido (cache) e caminho longo (produzir), o efeito colateral
que os dois compartilham **não pode morar só no longo**. Extraia para função e chame nos dois — o
`return` antecipado é o lugar onde efeito colateral se perde. E ao ler um log de retomada, desconfie
de quantidade: 43 segmentos anunciados e 43 arquivos no concat parecem certos até você contar que
deviam ser 47.

*Agente-raiz: `scripts/decupagem/master-decupado.mjs` (consertado em 08/ago — `empurraGap(f, i)`
chamada nos dois ramos). A prova de que o gate aritmético vale o que custa: ele é o único ponto da
linha que sabe quanto o master DEVIA durar.*

### FIN-146 · o gap de card tem DOIS donos, e os dois o abrem — o buraco sai em dobro e fora de lugar

O buraco de 3 s onde o card de título entra é aberto por **duas** peças que não se conhecem:

- `master-decupado.mjs` **materializa** o gap DENTRO do arquivo (preto + silêncio) e cobra isso na
  própria aritmética final (`bruto − Σcortes + Σgaps`);
- `xml-premiere-5camadas.mjs` trata o master como concat **puro de keeps** e parte a V1/A1 nos
  pontos de gap, abrindo ele mesmo o buraco — com a duração REAL do card, medida por `ffprobe`.

As duas doutrinas estão escritas, cada uma com seu motivo, e nenhuma sabe da outra. Medido no
`orcas-nao-matam` (08/ago/2026), com o master íntegro:

- pretos materializados no master, por `blackdetect`: frames **909 · 9146 · 15394 · 23202**;
- pontos onde o XML corta a V1: **909 · 9056 · 15215 · 22932**.

O desvio é **0 · 90 · 179 · 270 frames** — exatamente 90f (3,0 s) acumulados por gap anterior,
porque o XML calcula sobre o relógio "keeps sem gaps" enquanto o arquivo já os carrega dentro. O
resultado na timeline entregue: **3 s de tela preta** onde nenhuma cena cobre, **4 janelas de 3 s
de silêncio** na narração, os cards t02/t03/t04 **cortando fala no meio**, e a sequência 12 s longa
demais no capítulo final (`c36` entra 360f antes da fala que a ancora).

**Quem deve ser o dono: o XML.** O gap materializado mede 3,000 s e o card mede 3,900 s — o master
é gerado na DECUPAGEM, antes de a arte existir, então ele nunca pode saber quanto o card dura. Um
buraco de medida de gaveta erra dos dois lados (é a mesma razão da [FIN-05] sobre o gap fixo). Só o
XML mede o card por `ffprobe`. ⚠️ Mas a rota do COMPOSTO depende do comportamento oposto: o
`compor-base-youtube` não abre gap, e lá o master materializado é que fecha a conta. **As duas rotas
consomem o MESMO master com expectativas opostas** — mudar um lado sem o outro quebra a rota que
hoje funciona. A decisão é arquitetural e precisa das duas rotas na mão.

**O que escondeu isto por meses:** o bug de retomada da [FIN-145]. Onde a decupagem foi *retomada*,
o master saía **sem** os gaps e casava com o XML por acidente; onde rodava do zero, saía com eles e
duplicava. O mesmo projeto dava resultados diferentes conforme tivesse sido interrompido ou não — e
o único sintoma era um vídeo 12 s longo, que nenhum gate por-cena vê.

*Agente-raiz: `scripts/xml-premiere-5camadas.mjs` (dono natural do buraco) em conjunto com
`scripts/decupagem/master-decupado.mjs`. **Não conserte um lado sozinho.** Ao encostar nisto,
verifique os dois consumidores: o XML de 5 camadas e o `compor-base-youtube`.*

### FIN-148 · O WAV do Scribe tem de medir o CONTAINER, não a TRILHA — foi assim que 7 projetos nasceram deslocados (08/ago/2026)

Uma varredura completa de **38 projetos** com `_cortes.json` (o universo real; a contagem anterior de
15 só via uma pasta) achou **7 deslocados**. A causa é uma linha, e ela é o começo de tudo o que a
decupagem produz.

**O mecanismo.** Num dual-system a câmera costuma começar antes do microfone. O
`corrigir-source-bruta.mjs` alinha os dois com `-itsoffset`, e o container resultante tem a trilha de
mic **começando em t > 0** (`start_time`). O `src/transcribe.mjs` extraía o áudio para o Scribe assim:

    ffmpeg -i <container> -map 0:a:<mic> -vn -ac 1 -ar 16000 -c:a pcm_s16le audio.wav

WAV não carrega timestamp. Sem instrução em contrário, **o ffmpeg descarta essa cabeça sem uma linha
de aviso**. O `audio.wav` nasce no relógio da TRILHA; o `words.json` herda; o `_cortes.json` herda; a
decupagem inteira sai `start_time` segundos adiantada.

Medido no `o-acre-o-estado-que-o`, com o lote rodando: container 1004,949 s, trilha de mic com
`start_time = 4,309` e duração 1000,683 — e o `audio.wav` media **exatamente 1000,683**.

⚠️ **Por que nenhum gate pegou, e é isto que faz a lei valer:** as durações são **coerentes entre
si**. O WAV mede a trilha, os cortes cabem no WAV, o master fecha a aritmética. *Deslocar uma lista
não muda o comprimento de nada* — e todo gate adiante compara comprimento. O defeito é invisível para
quem confere tamanho e só aparece para quem confere CONTEÚDO (a palavra falada naquele instante).

**O conserto, na raiz:** `-af aresample=async=1:first_pts=0` preenche a cabeça com silêncio até o PTS
zero, e o WAV passa a viver no relógio do container — o mesmo do vídeo e o mesmo em que os cortes
serão aplicados. Offset no outro sentido não é afetado: não há cabeça a preencher.

**E o gate que nasceu junto, porque conserto sem verificação apodrece:** o `transcribe.mjs` agora
compara a duração do WAV com a do container e **aborta** se divergirem mais de 0,5 s. Custa dois
`ffprobe`.

**Provado em produção, não em teste:** o `pais-menor-duracao` (trilha começando em **11,021 s**) foi
o primeiro projeto processado depois do conserto — container 1029,710 s, `audio.wav` **1029,709 s**,
desvio de **1 ms**. Sem o conserto teria saído com 1018,688: onze segundos adiantado.

⚠️ **Consequência operacional que ninguém deve esquecer:** o ciclo de decupagem PULA por existência
(*"words.json já existe — Scribe #1 pulado (é PAGO)"*). Um `audio.wav` velho e deslocado no disco faz
a decupagem nova **reusar o errado**. Ao consertar um relógio, **retire os derivados do relógio
antigo** — senão o conserto não alcança quem mais precisa dele.

⚠️ **O teste do `maxFim` NÃO SERVE para achar estes casos** — e a doutrina o recomendava. Ele deu SÃO
em **5 dos 7** defeituosos, porque descreve o ÚLTIMO item da lista, não a lista: o decupador tirava o
fim da cauda da duração do container enquanto lia todos os outros tempos do mic, e a lista saía mista
com o fim no lugar certo. *Critério que olha a borda não enxerga deslocamento do corpo.*
**O teste que decide é `duração(container) − duração(audio.wav)`**, e o previsor barato é
`sync-info.json.offsetDetectado < 0`, exato em 13 de 13.

### FIN-153 · PUBLI COM PRAZO: a fala GRAVADA não é evidência do estado dela, e a doutrina escrita também não (09/ago/2026)

**O caso, no `aceleradores-particulas`.** O `marcas/top10/agentes/decupador.md` §3 manda, em maiúsculas,
**cortar o bloco inteiro do iBest de TODOS os vídeos** ("a premiação de 2026 acabou e o canal não se
classificou"). O decupador **viu o bloco** — o motivo do corte em 517,53 s cita textualmente *"a virada
para o CTA do Prêmio iBest"* — e **não cortou**, sem declarar por quê. Os **35,10 s** de publi chegaram
inteiros ao master, à transcrição e ao espelho (`s54`–`s57`, 351,10 → 386,20 s).

**Por que ele não cortou, e é aqui que está a lei.** A doutrina afirma um fato *no passado*; a fala
gravada afirma o contrário *no presente*: *"a gente concorre no prêmio iBest 2026… **é agora, nesta
fase**, que dá pra classificar o canal pra próxima. O seu voto leva dez segundos no link aqui embaixo."*
Diante do conflito, o material venceu o papel — o que é a regra certa para conteúdo e a **errada** para
prazo. **Publi datada é gravada semanas antes e é sempre otimista por construção: ela descreve a
intenção de quem gravou, nunca o estado do mundo no dia da publicação.** A fala não vota sobre o próprio
prazo.

**E a doutrina também não decide sozinha, porque ela envelhece no sentido contrário.** A linha do
decupador é de **22/jul**; se fosse obedecida cegamente em toda gravação posterior, cortaria uma publi
**válida** no dia em que o canal entrasse numa edição nova. Duas fontes, ambas datadas, ambas capazes de
mandar a coisa errada — o desempate não está em nenhuma das duas.

**O desempate é medir, e custa um comando.** A votação foi conferida na fonte em 09/ago:
`https://app.premioibest.com/votacao/curiosidades` responde **"iBest Encerrada · Conheça as datas
oficiais de anúncio dos TOP20 Brasil 2026"**, e o canal não aparece entre os mais votados de
Curiosidades. A doutrina estava certa **no efeito** e o CTA pede um voto que ninguém mais pode dar.
⚠️ `WebFetch` devolve **403** nessa página e `Chrome headless` devolve **200** — quem parar no 403
conclui "não deu para conferir" e cai de volta no empate entre a fala e o papel.

**O que fazer, nesta ordem:**
1. **Publi com prazo no bruto → meça a página no dia de decupar**, com navegador, não com crawler.
   Só então corte ou mantenha.
2. **Declare a decisão no `_cortes.json` SEMPRE** — cortou *ou* manteve, com o motivo e a data da
   medição. Julgamento em branco é o defeito (OFÍCIO §3): aqui não houve registro nenhum de que a regra
   tinha sido considerada, e a estação seguinte só descobriu por leitura do roteiro.
3. **Doutrina de publi datada não afirma fato — manda conferir.** Regra que diz *"acabou"* vira mentira
   na edição seguinte; regra que diz *"meça antes de decidir"* nunca envelhece.

**A conta de por que isto é lei de decupagem e não de finalização:** o bloco tem 4 segmentos e só **2**
com `anima:true`, então cortá-lo agora custa ~2 cenas de arte. Depois da arte custa o mesmo mais o
re-timing das **40 cenas seguintes**, e o corte do master exige re-encode **e Scribe #2, que é PAGO**.
*Publi vencida é a única coisa num vídeo cujo custo de conserto sobe com o relógio de parede, não com o
trabalho feito.*

⚠️ **Não é de um vídeo:** o `planeta-em-meteorito`, espelhado no mesmo dia por outra sessão, traz
`publi-ibest-2026` (`anima:false`, 31,5 s) pelo mesmo caminho. Regra de corte que falha, falha em lote.

### FIN-154 · O CTA FALADO SE VERIFICA NA GRAVAÇÃO, NUNCA NO ROTEIRO — e a ausência dele não é defeito de quem escreveu (09/ago/2026)

**O caso, no `rosto-da-formiga`.** A [FIN-11] pede três CTAs: um na intro, **um em cada menção falada**
("se inscreve" / "deixa o like" / "ativa o sininho", word-locked) e um no fim. Ao fechar o espelho, a
conta deu **zero menções faladas no vídeo inteiro** — e a leitura natural, que eu ia repassar, é a que
a própria FIN-11 sugere: *"roteiro sem menção ao longo do vídeo = sinalize ao `roteirista-narracao`"*.

**Só que o roteiro tinha.** Linha 2 de `knowledge/roteiros/rosto-da-formiga.txt`: *"Antes, deixa o like
e se inscreve no canal. Bora pro vídeo!"* O roteirista cumpriu a FIN-11 exatamente como ela pede. Quem
não trouxe a frase foi a **gravação** — e a prova é barata e decisiva: grepar o `words.json` **BRUTO**,
que é tudo o que foi falado antes de qualquer corte. Zero ocorrências de `inscre`, `like`, `sininho`,
`curtir`, `joinha` em 1162 s de material. Não foi o decupador que cortou; nunca foi dito.

**Por que isso vira lei.** A rotina do estúdio manda consertar o agente-raiz, e é justamente aí que se
erra: o caminho curto — "faltou CTA → conserte o roteirista" — **conserta quem acertou**, e o defeito
real (o take que não foi gravado) fica intacto para o próximo vídeo. Instrução acrescentada a um agente
que já obedecia é pior que inócua: ela infla o prompt dele com uma regra que ele nunca violou, e ensina
a próxima sessão a repetir a atribuição errada.

**A régua, em duas linhas:**
1. **Item de fala se verifica na FALA GRAVADA** (`words.json` bruto), nunca no roteiro. Roteiro é
   intenção; a gravação é o fato. Vale para CTA, para o nome próprio na tela e para o número falado.
2. **Antes de culpar quem escreveu, leia o que ele escreveu.** Se o texto está lá e o áudio não tem, o
   raiz é a GRAVAÇÃO — e o destinatário do aviso é quem grava, não o agente.

**O que o espelho faz enquanto isso** (e é o certo): a FIN-11 fica cumprida por **overlay** — CTA na
intro e no fim, posicionais, sem depender de menção. Um vídeo sem CTA falado não é um vídeo travado; é
um vídeo em que a regra "um por menção" rende zero, e isso precisa estar **escrito no report**, senão o
próximo leitor conta os overlays, vê dois, e supõe que o terceiro foi esquecido.

Relacionado: [FIN-11] (a regra dos três CTAs), [ROT-84].
### FIN-155 · O relógio do master tem TRÊS estados, não dois — e o terceiro conta o respiro duas vezes (08/ago/2026)

A detecção em `xml-premiere-5camadas.mjs` perguntava só "bruto ou limpo?". Quando o decupador passou
a **materializar** os 3 s de respiro de cada card dentro do master (`_cortes.json` declara `gapSec` na
fronteira; a aritmética do ciclo fecha: 1005,00 − 215,25 + **12** = 801,76), surgiu um terceiro estado
que nenhuma das duas respostas descreve: *limpo, com os buracos já abertos*.

Sem ele o gerador via um master "limpo" e abria **outro** buraco em cada card. Medido no
`o-acre-o-estado-que-o`, antes × depois, mesmo material:

| | LIMPO | FINAL | pedaços da V1 |
|---|---|---|---|
| antes | 13:21,7 | 13:37,6 | 5 |
| **depois** | **13:09,7** | **13:25,6** | **9** |

**Exatamente 12,0 s de diferença** — os 4 gaps contados duas vezes. No XML entregue isso aparecia
como V2/A2 descolando de V1/A1 em degraus de 3 s (`s02` 0s → `s10` 3s → `s22` 6s → `s46` 9s → `s85`
**12s**) e 1,03 s de preto visível em 543,53–544,57 s, com `s07` e `s60` entrando dentro do preto.

**A saída NÃO é "não abrir gap".** O buraco do decupador é de gaveta — 3,000 s — e **card nenhum mede
3 s**: os do Acre medem 3,90 · 3,90 · 4,17 · 3,90. Deixar o buraco materializado servir de vão erra
dos dois lados (sobra preto no card curto, corta o card no longo) — é o mesmo erro que a régra do
`gapPorPonto` já tinha matado uma vez. O conserto **tira o buraco da geometria da V1, como se fosse
mais um corte**, e deixa o `comGapF` reabrir o vão com a duração real do clipe. O terceiro estado
reusa a máquina do ripple em vez de inventar uma segunda.

⚠️ **O empate agora avisa.** Se Σ`gapSec` e Σ cortes ficam a menos de 1 s um do outro, o vencedor
sairia de ruído de arredondamento — e escolher em silêncio é pior que classificar errado. No Acre a
margem é folgada (12,0 contra 215,25); em vídeo de cortes curtos, não seria.

📌 **O 9 pedaços em vez de 5 é sintoma de outra coisa, e é esperado aqui:** o buraco do master está em
28,17 s (limpo) e o card do espelho cai em 24,3 s — 3,87 s de distância, porque o espelho ainda é o
**anterior** à re-decupagem. Quando o `remapeador-de-cenas` reancorar as cenas, os dois pontos
coincidem e a V1 volta a 5 pedaços. *Um número que muda por causa do insumo velho não é regressão do
conserto — mas só dá para afirmar isso depois de medir onde cada ponto caiu.*

### FIN-156 · O T1 do encerramento SOBREVIVE — decidido, fim da divergência (08/ago/2026)

A [FIN-10] dizia que o T1 do encerramento sobrevive; a ordem de 31/jul (*"apenas depois de indicação
de produto"*) e o código diziam o contrário. **As duas leituras conviveram por oito dias sem que
ninguém decidisse** — e doutrina que se contradiz é pior que doutrina faltando, porque cada agente
escolhe um lado e o vídeo sai diferente conforme quem o montou.

**Decisão do Mateus, hoje: o T1 do encerramento SOBREVIVE.** A restrição "só depois de indicação de
produto" vale para as transições do MEIO do vídeo (virada de tópico é seca); o encerramento é a
exceção, e continua levando o T1.

Quem implementa: `xml-premiere-5camadas.mjs`, na montagem da V5 — a regra de 31/jul não pode capturar
o vão do encerramento. Confira contra o `_ENTREGAS` de um vídeo recente antes de dar por fechado.

**✅ IMPLEMENTADA em 08/ago/2026, e medida.** `xml-premiere-5camadas.mjs`, na montagem da V5. A V5
do `o-acre-o-estado-que-o` saiu com **2 transições**: a T2 de sempre na saída da publi e a
**T1 no encerramento — `s85-geoglifo-final` → `s86-boco-cta`, centro em 12:50,3**.

⚠️ **A âncora do encerramento NÃO é o relógio, e a primeira tentativa errou nisso:** o
`_trilha-plano.json` declara um ato `"encerramento"` começando em 943,1 s (BRUTO), mas a
`s85-geoglifo-final` vai de 936,77 a 947,45 — usar o plano de trilha põe a transição **no meio de
uma cena**, que é corte inventado. A fronteira certa é estrutural: **a última cena COM arte → o
bloco final SEM arte** (o CTA do apresentador). Vídeo que termina em cena desenhada não tem essa
fronteira, e o código não força nenhuma.

---

### FIN-157 · Quando duas evidências apontam o mesmo pedido, ancore na que NÃO é ambígua

**09/ago/2026, `orcas-nao-matam`.** O selo de like do encerramento entrava sobre *"Quem curte esse
tipo de mergulho…"* — uma frase que não pede nada. O pedido de verdade, *"Manda o like, clica em se
inscrever"*, vinha **22 segundos depois** e ficava mudo.

A [FIN-85] já havia matado o caso do ADJETIVO (*"no tempo CURTO da sua vida"*). O que sobrou é mais
sutil: a forma é mesmo o verbo, está conjugada, e ainda assim **ninguém está pedindo nada** — o
sujeito é o espectador em terceira pessoa (*"quem curte"*, *"gente que ia curtir"*), não o
espectador sendo chamado.

Os oito gatilhos da fala, medidos:

```
@1158,4 like     "um like ali ó, já empurra"            ← pedido
@1162,7 curtir   "mais gente que ia curtir isso aqui"   ← NÃO
@1192,6 like     "um like ali já empurra o"             ← pedido
@1196,8 curtir   "mais gente que ia curtir isso"        ← NÃO
@1753,0 curte    "Quem curte esse tipo de mergulho"     ← NÃO
@1765,5 curte    "Quem curte esse tipo de mergulho"     ← NÃO
@1775,2 like     "Manda o like, clica em se inscrever"  ← pedido
@1776,6 inscrever                                        ← pedido
```

Os quatro últimos caem no MESMO grupo (a janela de agrupamento é de 20 s) e a representante era *a
primeira viva* — o `curte` de 1753,0.

**A regra, e ela é mais barata que classificar gramática:** dentro de um grupo, a representante é a
primeira menção **INEQUÍVOCA** (`like`, `inscrev`, `sino`, `notifica`, `compartilh`); a ambígua
(`curte`/`curtir`) só ancora quando o grupo não tem nenhuma outra. *Não é preciso decidir se aquele
`curte` específico é um pedido — basta preferir a palavra que não deixa dúvida.* Sem nenhuma
inequívoca o comportamento antigo permanece, porque um CTA no lugar aproximado ainda vale mais que
CTA nenhum.

**Por que nenhum gate por-cena pegaria:** o overlay estava tecnicamente perfeito — existia, tinha
duração, não colidia, não estava em corte. *O defeito era de SIGNIFICADO: a peça certa no instante
errado*, e só quem cruza o overlay com a transcrição enxerga isso. Quem pegou foi o `qa-montagem`.

⚠️ **Consequência que não é regressão:** no `orcas`, movido para 1775,2 s o selo passa a cruzar com
o `cta-membro-1` (1779,4–1787,4 s), e a regra de que *dois CTAs na tela é defeito* descarta o like —
o membro é a peça mais rara. O vídeo fica com **intro coberta e fim coberto pelo card de membros**, e
a [FIN-11] segue verde. *Trocar um CTA no lugar errado por nenhum CTA naquele ponto é ganho, não
perda* — o que estava lá antes contradizia a fala.

Implementado em `scripts/branding/overlays.mjs` (`INEQUIVOCO` + `primeiraViva`). Ver [[FIN-84]] (a
representante se escolhe depois de saber quem sobreviveu ao corte) e [[FIN-85]].

---

### FIN-158 · Cena que vive num VÃO não se julga pela fala que sobrou

**O caso, medido em 09/ago/2026 no `o-acre-o-estado-que-o`.** A re-decupagem mudou o relógio e o
`remapear-espelho.mjs` devolveu `85 remapeadas · 1 órfã`. A órfã era o **`s14-card-t2`**, com o
motivo *"sobrou 0s depois dos cortes"*. O vídeo tinha **4 cards de título** e foi para a entrega com
**3** — um dos quatro tópicos sem título na tela, e um vão de 3 s vazio no meio do vídeo.

**A régua estava errada, não a conta.** Card de título existe pela [[FIN-17]]: o apresentador lê o
título no bruto, a leitura é CORTADA, e o card ocupa o buraco que o corte abriu. Ou seja, **por
construção não sobra fala nenhuma sob um card** — medir "quanto sobrou" e descartar quem sobrou zero
elimina exatamente a classe de cena que deveria sempre passar.

**O que torna este caso caro é que o script JÁ SABIA a resposta.** O `s14` descartado carregava
`_final: [105.45, 108.45]`, calculado por ele mesmo — e 105,45 s é precisamente onde o vão de título
sobrevivente estava, vazio. *A aritmética acertou e o veredito jogou o resultado fora.* O tratamento
correto de card existia no código, mas só dentro do ramo `a === null && b === null` (as DUAS pontas
dentro do corte); o `s14` tinha uma ponta fora, entrou pelo ramo de baixo e morreu no
`novaDur < 0.5` antes de chegar lá.

**A forma da regra, que vale além deste script:** quando uma peça é ancorada por uma ESTRUTURA (o
vão, o corte, o marcador) e não pelo conteúdo em volta, a decisão sobre ela tem de vir **antes** de
qualquer teste que meça conteúdo — e não pode depender de por qual ramo ela chegou. Um tratamento
especial escondido dentro de um `if` de caso raro é um tratamento que só funciona por sorte.

⚠️ **E nenhum gate pegou:** o `qc-espelho-cortes` deu **PASS** com 85 cenas, porque espelho sem card
cabe no arquivo e respeita os vãos — *falta não é colisão*. Contar peças estruturais contra os vãos
que os cortes declaram (4 vãos de título ⇒ 4 cards) é a checagem que faltava.

Consertado em `scripts/decupagem/remapear-espelho.mjs`: a decisão de card vem primeiro, casa o
i-ésimo card com o i-ésimo vão de título, e só vira órfã se **não houver vão** — aí o motivo diz a
contagem dos dois lados. Provado contra o espelho original: `86 remapeadas · 0 órfãs`, e os 4 cards
nas mesmas posições que a correção manual. Ver [[FIN-17]] e [[FIN-153]].

---

### FIN-159 · Duas ferramentas que convertem o MESMO relógio não se encadeiam

**O caso, 09/ago/2026, `o-acre-o-estado-que-o`.** O HANDOFF mandava *"XML velho — remapear e
refinalizar"*. Cumpri as duas etapas e o XML saiu com **6 grupos de cenas começando no mesmo
instante** — `s12`, `s13`, `s15` e `s16` todas em 44,27 s, embora no espelho estivessem em 82,8 ·
93,0 · 108,5 · 119,4 s.

**A causa:** o `xml-premiere-5camadas.mjs` declara na linha 18 que **espera o espelho em BRUTO** — a
conversão para o limpo é trabalho DELE. O `remapear-espelho.mjs` entrega o espelho já em FINAL.
Encadeados, os cortes são aplicados **duas vezes**: toda cena cuja fala caiu no mesmo corte colapsa
para a mesma fronteira, e o gerador apara o resto para não sobrepor. Mesmo material, só trocando o
espelho de entrada: **6 colapsos → 0**, aparos **33 → 24**, maior excesso **−13,47 s → −3,93 s**.

**A regra geral, e ela não é sobre estes dois scripts:** quando duas ferramentas sabem converter o
mesmo eixo, encadeá-las é o defeito — não porque uma esteja errada, mas porque **cada uma está certa
sozinha**. A pergunta antes de compor qualquer par é *"em que relógio esta ferramenta RECEBE, e em
qual ela DEVOLVE?"*, e a resposta tem de estar escrita no cabeçalho de ambas. Aqui estava, e eu não
li antes de rodar.

**O que induziu ao erro, e vale mais que o conserto:** a frase *"XML velho"* sugere que o espelho
envelheceu. **Não envelheceu.** *O tempo BRUTO não muda com a re-decupagem* — a gravação é a mesma;
o que muda é o `_cortes.json`. O XML fica velho porque foi gerado com os CORTES antigos, e o gerador
já lê os cortes. **Refinalizar basta.** O espelho bruto de 07/ago seguia perfeito: 86 cenas, 4 cards,
e a `s02` já com os 10 s decididos pelo Mateus.

⚠️ **Quando remapear É certo:** espelho escrito antes da [[SIS-125]], nascido em bruto, que precise
virar final para um consumidor que espera final. **Nunca** como preparo para o gerador de XML.

⚠️ **Nenhum gate pegou o colapso.** O `qc-espelho-cortes` deu PASS nos dois espelhos: um espelho
com cenas empilhadas ainda cabe no arquivo e ainda respeita os vãos. Quem acusou foi o **aviso do
próprio gerador** — *"começam no MESMO instante — confira o espelho"* —, que é fácil de ler como
ruído no meio de 8 avisos. Aviso que denuncia corrupção estrutural merece ser FALHA, não bullet.

Ver [[FIN-129]] (o terceiro estado de relógio) e [[FIN-158]].
### FIN-160 · Gate que se desliga por falta do arquivo aprova exatamente o caso que existe para pegar

**O caso, medido em 09/ago/2026 no `especies-humanas`.** A estação de finalização recebeu o vídeo com
tudo verde: 25 de 25 cenas renderizadas, clipes legíveis, procedência PASS, deserto real PASS, 25
laudos de QC de cena. O `finalizar.mjs` rodou inteiro e o trilho fechou com `master×cortes PASS`. O
XML de 5 camadas saiu com 25 cenas e 52 KB.

**E pedia ao Premiere o master até 2182,7 s de um arquivo que tem 1264,97 s** — 16 minutos, 44% do
vídeo, com a V1 vazia. O arquivo, aliás, nem estava no disco.

**A cadeia inteira foi de ausências lidas como zero.** Em 08/ago a decupagem foi arquivada e apagada
por ordem do dono (bug de relógio no `transcribe.mjs`), com a instrução escrita de re-decupar em 3
comandos. A re-decupagem nunca rodou. A partir daí:

    _cortes.json ausente  → lerCortes devolve []        → "ripple: 0 corte(s) = −0.0s"
    _cortes.json ausente  → qc-master-em-fase: "projeto pré-editado, não se aplica" → exit 0 = PASS
    _master-decupado.mp4 ausente → o gerador de XML escreve o pathurl assim mesmo

Nenhuma das três linhas mente. Cada uma é uma frase que um projeto saudável também produz — e é isso
que as torna invisíveis. `ripple: 0 corte(s)` é indistinguível de um vídeo legitimamente sem cortes.

**A regra:** *a condição que apaga a prova é a mesma que dispensa o exame.* Um gate cuja
inaplicabilidade é decidida pela ausência do arquivo que ele auditaria se desliga precisamente quando
esse arquivo se perde — que é o único momento em que ele importava. "Não se aplica" tem de ser provado
por evidência POSITIVA de que o caso é outro, nunca inferido da falta.

**O sinal que separa os dois mundos é o rastro, não o arquivo que sumiu.** Vídeo nascido de gravação
crua deixa `_bruto/`, `_master-decupado.log` e a nota de arquivamento; o pré-editado legítimo não tem
nenhum dos três. Consertado em `scripts/qc-master-em-fase.mjs`: sem `_cortes.json` **e** com qualquer
rastro de decupagem, o gate agora aborta com código 1 e nomeia o rastro que encontrou. Medido: o
`especies-humanas` passa de PASS a FAIL, e outros **3 projetos da mesma limpeza de 08/ago**
(`cerebro-quando-sonha`, `mamute-de-volta`, `uruguai-despovoado`) são pegos ainda com 0–2 clipes, antes
de custarem render.

**O que o caso ensina sobre trilho verde:** o `master×cortes PASS` do trilho era a tradução de um
`exit 0` que significava "não olhei". Gate que não mediu deve carimbar NÃO-MEDIDO, nunca PASS — e o
`finalizar.mjs` já tem esse estado, só não o recebia daqui. Ver [[FIN-45]], [[FIN-13]] e [[SIS-53]]
(o mesmo padrão na transcrição: o plano fica coerente consigo mesmo, e consistência interna não é
correção).


---

### FIN-161 · Antes de declarar um insumo PERDIDO, varra o bucket inteiro por padrão — três lugares não são "todos os lugares"

**09/ago/2026, `especies-humanas`.** Vídeo com **25 de 25 cenas renderizadas**, gate `laudo×arte`
limpo, parado na entrega por falta do `_master-decupado.mp4`. O log prova que ele existiu —
*"✓ 1264.97s @30fps, áudio MIC"* — e o `_cortes.json`, que o regeneraria, também não aparecia.

Procurei nos três lugares óbvios — disco da VM, `out/<proj>/` e `macbook-backup/out/<proj>/` — e
**concluí que o relógio estava perdido**. Cheguei a medir que o derivado sobrevivente
(`_cortes-removidos.json`) tinha o campo `manter` mas **não** o `gapSec`, montei a aritmética que
não fechava por 25,95 s, e escrevi que reconstruir produziria um relógio plausível e errado.

**Estava tudo certo, menos a premissa.** Um `ls` por padrão no bucket inteiro achou o arquivo em
**segundos**:

```
gs://…/arqueologia-decupagem/2026-08-08/especies-humanas/_cortes.json
```

Completo: 71 spans, com `gapSec` em 4 deles somando **12,00 s** — exatamente 4 cards × 3 s, a regra
da casa. E a mesma gaveta guardava **tudo**: `words.json`, `words-limpo.json`, `silencios.json`,
`audio.wav` e — o que eu tinha declarado perdido — o **`_master-decupado.mp4`, 6,04 GB**, cuja
duração confere com o log ao segundo (1264 s). *Nada a reconstruir, nada a decidir: só copiar de
volta.*

**A régua, e ela é barata:** *"procurei onde costuma estar" não é "procurei".* Antes de declarar
qualquer insumo perdido — e antes de propor o caminho caro que a perda implica —, gaste os cinco
segundos de `gcloud storage ls "gs://<bucket>/**/<proj>/**<arquivo>*"`. Um prefixo de arquivamento
criado por outra sessão, um `-pre-redecupagem`, uma pasta de arqueologia: o acervo tem mais gavetas
do que a doutrina lista, e a busca por padrão as cobre todas de uma vez.

⚠️ **O custo do erro aqui não seria o retrabalho — seria a DECISÃO.** Eu ia apresentar três saídas,
e a primeira delas era *re-decupar do zero*, que gera relógio novo e **invalida as 25 cenas de arte
já pagas**. Diagnóstico de perda tem esse formato: ele não pede um conserto, pede uma escolha entre
prejuízos. *Quando a conclusão é "não dá para recuperar", o ônus da busca exaustiva sobe.*

✅ **O que o ciclo já faz certo, e vale registrar porque quase o acusei injustamente:**
`decupagem/ciclo-vm.sh` trata `_cortes.json` como **obrigatório** ao subir (`:357`, *"faltar é
falha"*, não sucesso silencioso) e **preserva o relógio velho** antes de re-decupar (`:338`,
`-pre-redecupagem.json`) justamente para que a arte já paga continue reaproveitável. O insumo não
foi perdido por descuido de desenho; ele estava guardado, num lugar que eu não olhei.


---

### FIN-162 · Guarda que reconhece pelo NOME protege só quem seguiu a convenção — e quem a seguiu raramente é quem erra

**09/ago/2026, `especies-humanas`.** O `qc-espelho-cortes` deu **5 REPROVAS** num vídeo cujos cards
de título estão exatamente onde deveriam. Dois deles casam com o vão **ao centésimo**:

```
vão de título 911,61 → 916,56   ·   card s14  inSec=911,61  dur=4,95
vão de título 1211,07 → 1216,88 ·   card s23  inSec=1211,07 dur=4,43
```

O gate **já tinha** a guarda certa — *"card de título dentro de corte de título é o desenho, não
defeito"* — e ela não pegou, por dois motivos que valem separados:

**1 · Reconhecia o card pelo NOME.** A condição era o `id` conter "card"/"titulo", ou o `modo` ser
`card-titulo`. Neste espelho os cards se chamam `s14-abaguncaequasetaovelhaqu` e
`s23-ofantasmaescondidonoseud` — batizados pelo CONTEÚDO, como todo o resto do arquivo — e o modo é
**`titulo-topico`**. *Guarda que depende de convenção de nome protege só quem seguiu a convenção, e
quem a seguiu raramente é quem erra.* O sinal que não depende de ninguém é estrutural: um span com
**`gapSec > 0`** É, por definição, o buraco aberto para um card caber.

**2 · Ponto flutuante, e este é o mais traiçoeiro.** Com a guarda corrigida, `s14` e `s23`
continuavam reprovando — agora como *mutiladas*. Motivo: `911.61 + 4.95` dá
**916.5600000000001**, e `916.56 >= 916.5600000000001` é **falso**. A cena que cabe perfeitamente
não era reconhecida como "engolida", caía no ramo seguinte e saía **REPROVADA por 1e-13**.

A tolerância agora é **1/60 s** — um frame a 60 fps, mais estreito que qualquer frame que a casa
usa. Grande o bastante para o ruído binário, pequeno demais para perdoar erro real de relógio.

**Medido em 11 projetos com espelho e cortes: só o `especies-humanas` mudou (5 → 1), nenhum
piorou.** A reprova que sobrou é real — uma cena de CTA de 79,56 s com 66,18 s dentro de cortes.

⚠️ **O padrão que se repete e vale mais que o caso:** um gate que julga por PROXY (nome, presença de
caractere, extensão) acerta enquanto o mundo é arrumado, e no primeiro caso legítimo fora do padrão
ele barra o certo. Mesma família da [[ARTE-183]]. *Quando existe um campo que define a coisa por
construção, é nele que a guarda se apoia — o resto é reforço.*

---

### FIN-163 · O artefato gerado com a entrada AUSENTE fica no disco parecendo bom — e a retomada protege exatamente ele (09/ago/2026)

**O caso, no `especies-humanas`.** A estação TRILHA abriu e achou dois artefatos prontos e recentes:
`_overlays-branding.json` e `_finalizacao-config.json`, ambos de 09/ago 13:09. Bem-formados, com
`_gerado.em` fresco, nenhum aviso. Os dois estavam **fora de fase**, e por motivos diferentes:

| artefato | entrada que faltava às 13:09 | o que saiu |
|---|---|---|
| `_overlays-branding.json` | `words.json` | **1** CTA (o posicional da intro). Os dois CTAs FALADOS — like @1763,6 s e membro @2173,7 s — simplesmente não nasceram |
| `_finalizacao-config.json` | `_cortes.json` | `cortesAplicados: 0` → overlays, transições, CTAs e trilha em tempo **BRUTO**, adiantados por **955,2 s** |

Às 14:30 alguém restaurou as duas entradas. Os artefatos de 13:09 continuaram lá, mais novos que
nada e mais velhos que tudo que importa — e **a doutrina de RETOMADA manda pular artefato pronto**.
Ninguém regera o que já existe; é a regra que protege inferência paga. Aqui ela protegia o defeito.

**A raiz é o produtor, e ela já tinha sido consertada — no lugar errado.** A [FIN-160] ensinou que
"gate que se desliga por falta do arquivo aprova exatamente o caso que existe para pegar", e o
predicado do RASTRO (`_bruto/`, `_master-decupado.log`, `_DECUPAGEM-LIMPA.md`) foi escrito **dentro
do `qc-master-em-fase.mjs`**. Então o gate aprendeu e o `finalizacao-config.mjs` não — e o produtor
é justamente quem escreve o arquivo que a próxima estação consome sem reconferir. *Lição que mora
num arquivo só vale num arquivo só* (a mesma raiz do `ehCardDeTitulo`, que errou três vezes em três
cópias antes de virar `src/modos.mjs`).

**Por que nada denuncia.** `lerCortes` devolve `{cortes: []}` por ausência **e** por não haver
cortes — as duas respostas legítimas para ela, porque ela não sabe o que o chamador vai fazer com
elas. O contador impresso vira `ripple: 0 corte(s) = −0.0s`, que se lê como *"este projeto não tem
cortes"* e não como *"não achei o arquivo"*. **Zero por ausência e zero por vazio são o mesmo zero
na tela.**

**Conserto aplicado.**
1. `src/cortes.mjs` ganhou `rastroDeDecupagem(proj)` — dono único, ao lado do `lerCortes` que produz
   o `[]` ambíguo. É a pergunta que só faz sentido junto da resposta dela.
2. `scripts/finalizacao-config.mjs` aborta com exit 1 quando `!cortes.length && rastro.length`
   (medido: barra os três projetos da limpeza de 08/ago — `cerebro-quando-sonha`, `mamute-de-volta`,
   `uruguai-despovoado` — e deixa o caminho feliz idêntico, exit 0).
3. `scripts/qc-master-em-fase.mjs` passou a importar o predicado em vez de manter a cópia local.

**A regra, e ela é mais larga que este script.** Antes de aceitar um artefato pronto pela retomada,
pergunte **em que estado estavam as ENTRADAS dele quando ele foi escrito** — `mtime` do artefato
contra `mtime` das entradas responde de graça. Artefato mais VELHO que a entrada é suspeito; artefato
mais novo que a entrada não prova nada se a entrada nasceu depois de sumir. E quem PRODUZ tempo
derivado não tem direito a degradar em silêncio: sem saber o relógio, a resposta honesta é parar.

*Artefato ausente a retomada refaz. Artefato degradado em silêncio ela adota — por isso o silencioso
é o caro.* Ver [[FIN-160]], [[SIS-252]], [[SIS-254]].

---

### FIN-164 · O espelho mudou de relógio em 06/ago e quem DERIVA tempo dele não soube — quatro produtores, quatro erros, um dono (09/ago/2026)

**O caso, na estação TRILHA do `ceuta-travessia-em-massa`.** O espelho deste projeto fala em tempo
FINAL — o do master decupado, com os vãos de card já materializados. Está provado por três medições
independentes que fecham ao centésimo:

| grandeza | valor |
|---|---|
| bruto (`audio-hq.wav`) | 2190,656 s |
| Σ cortes (43 spans) | 688,935 s |
| LIMPO = bruto − cortes | 1501,721 s |
| FINAL = LIMPO + 4 × 3 s de vão | **1513,721 s** |
| `_master-decupado.mp4` medido | **1513,734 s** |
| fim do espelho | **1513,733 s** |

E os quatro silêncios do `words-final.json` (29,1–33,8 · 306,9–311,0 · 601,8–605,2 · 930,0–933,7)
casam com os quatro cards do espelho (30,4 · 307,7 · 602,2 · 930,2). O vão existe DENTRO do arquivo.

**O que cada produtor fez com isso, sem uma linha de erro:**

| produtor | o que fez | custo medido |
|---|---|---|
| `trilha/escolher.mjs` | carimbou `relogio:"BRUTO"` num plano construído sobre `inSec` FINAL | o carimbo MANDA em `src/trilha-plano.mjs` (degrau 1): o consumidor aplicaria o ripple num plano já rippado — o ripple-duplo da [[FIN-07]] entrando pela porta da frente |
| `trilha/escolher.mjs` | `Math.max(fimCenas, fimFala)` com `fimCenas` FINAL e `fimFala` do `words.json` BRUTO | "encerramento" de 1509 s a **2190,6 s** num vídeo de 1513,7 s — **4 faixas contratadas para forrar 681 s que não existem** |
| `branding/overlays.mjs` | CTA do `words.json` (BRUTO) e T1/T2 do card do espelho (FINAL) no MESMO arquivo | a T2 do cap 1→2 saiu em 306,9 s e o remap a levaria para ~183 s: **124 s** |
| `branding/overlays.mjs` | a guarda `foraDeCorte` comparou a fronteira de 29,6 s com o corte de cabeça 0→123,65 s (BRUTO) | **moveu a transição para 123,7 s** — em FINAL, 29,6 s não está em corte nenhum. *A guarda não deixou de pegar o defeito: ela o produziu, e imprimiu uma linha dizendo que estava consertando* |
| `finalizacao-config.mjs` | `paraLimpo` nos cards do espelho | os 4 cards remapeados para **0,0 · 86,1 · 314,2 · 598,1 s** |

**A raiz não é nenhum dos quatro.** A pergunta *"em que relógio este espelho fala?"* já tinha resposta
certa desde 06/ago — dentro do `qc-espelho-cortes.mjs`, inline, sem como ser importada. Um GATE
aprendeu e os PRODUTORES não; e é o produtor que escreve o arquivo que a próxima estação consome sem
reconferir. Mesma família da [[FIN-85]] (`ehCardDeTitulo` errou em três cópias antes de virar
`src/modos.mjs`) e da [[FIN-160]] (o predicado do rastro que ficou preso no gate).

**Conserto aplicado.** `src/relogio-espelho.mjs`, o dono único e importável:
`relogioDoEspelho()` (master medido → `words-final` → aritmética cortes×fala → assumido BRUTO),
`fimDaFala(dir, relogio)` (escolhe `words-final.json` ou `words.json` conforme o relógio),
`vaosDeCard()` e `paraBrutoFactory()` (FINAL → LIMPO → BRUTO, o inverso EXATO via
`mapSecInversoFactory`). Ligados nos quatro pontos acima **e** no `qc-espelho-cortes.mjs`, cujo
veredito foi conferido idêntico em **17 projetos** antes da troca.

**Duas armadilhas que este conserto produziu e que ficam registradas, porque são gerais:**
1. `Number.isFinite(+fimEspelho)` com o default `null` aceita **0** como medição válida — e "termina
   em 0 s" está sempre dentro do master, ou seja, **todo** espelho viraria FINAL. *Guarda de valor
   ausente que só olha `isFinite` transforma "não sei" em "zero".*
2. O card mora **na borda** do próprio vão: `vao.ini < t` fez o card 4 pagar o pedágio do buraco em
   que ele mesmo está (3,000 s exatos, não arredondamento). Os cards 1–3 passaram por sorte de
   arredondamento — *o teste que só mede o caso fácil aprova a conta errada*.

**A regra.** Dois instantes em relógios diferentes dentro de um `Math.max` não erram às vezes: erram
**sempre para o mesmo lado**, porque o bruto contém os cortes por construção — e com cara de decisão.
E um erro de relógio raramente sai como número torto: ele atravessa uma regra de negócio e sai como
veredito plausível (ver [[FIN-165]]). Antes de derivar tempo de um artefato, pergunte de quem é o
relógio dele — e se a resposta mora dentro de um gate, ela ainda não tem dono. Ver [[FIN-07]],
[[FIN-44]], [[FIN-85]], [[FIN-160]].

---

### FIN-165 · A janela do card NÃO EXISTE no relógio LIMPO — e a pergunta "há voz aqui?" respondida no relógio errado suprimiu o boost dos quatro cards (09/ago/2026)

**O caso, no `ceuta-travessia-em-massa`.** Com o relógio do espelho já consertado pela [[FIN-164]], a
ponte ainda entregava `titulos: 0` — nenhuma janela de −10 dB —, que é exatamente o defeito que a
[[FIN-82]] existe para matar: o card ao ar com a trilha presa em −35 dB, em quase-silêncio.

**Por quê.** A [[FIN-87]] manda medir a narração do card *"em LIMPO, que é o relógio do mix"*. No
fluxo antigo isso era certo: o card era peça colada por cima da narração corrida. No fluxo novo o
card **mora num vão** — a decupagem abre 3,0 s de silêncio real dentro do master. Esse buraco só
existe no relógio FINAL; em LIMPO ele foi espremido para zero. Converter a janela para LIMPO e
perguntar "há fala aqui?" pergunta sobre **outro trecho**: os segundos seguintes ao card, que são de
narração corrida por construção. Os quatro cards do vídeo foram declarados "narrados" com 8 a 11
palavras cada — palavras que, no vídeo montado, tocam DEPOIS do card.

**E havia uma segunda camada, que só apareceu com o relógio certo.** Corrigido para o `words-final.json`
na janela do espelho, o teste ainda suprimia os quatro — agora por **1 a 4 palavras**. A conta explica:
o vão dura **3,0 s** e o clipe renderizado do card dura **3,9 s**, então a janela declarada passa
0,4 a 0,9 s do fim do silêncio e encosta na primeira palavra do capítulo seguinte. Um teste binário
cobrava 3,4 s de respiro pelo preço de 0,5 s de sobra.

**Conserto aplicado** (`scripts/finalizacao-config.mjs`): a pergunta se faz onde o card ocupa lugar
(janela do ESPELHO contra o `words-final.json`, sem ripple a aplicar), e a janela é **encurtada até a
primeira palavra** em vez de suprimida — com piso de 1,0 s, abaixo do qual subir e descer 20 dB se
ouve como bombeamento e a supressão volta a ser a resposta honesta. Resultado: 4 janelas, com
3,03–3,45 s de respiro cada, batendo com os vãos medidos.

**A regra.** Quando uma peça vive num buraco, ela só tem coordenadas no relógio em que o buraco
existe — converter a janela dela para o relógio sem o buraco não desloca a medição, **desmonta** a
pergunta. E entre "suprimir tudo" e "aceitar tudo" quase sempre existe a terceira resposta: recortar
até onde a condição vale. Ver [[FIN-82]], [[FIN-87]], [[FIN-164]].

---

### FIN-166 · O bloco "encerramento" existe para a despedida que SOBRA depois da última arte — e ela pode não sobrar (09/ago/2026)

**O caso.** O `trilha/escolher.mjs` fecha todo vídeo com um bloco `encerramento` que vai do `inSec` da
última cena até o fim do conteúdo. Ele existe porque o apresentador costuma seguir falando depois que
a última arte sai ([[FIN-53]], [[FIN-86]]). No `ceuta` a última cena **é** a despedida
(`s163-boco-despedida`, 1509,47→1513,73): o bloco nasceu com **4,27 s** — e o laço que coloca as
faixas descarta trecho abaixo de 5 s, porque um clipe de 4 s com fade dos dois lados só produz mais um
crossfade audível. O bloco entrava no plano e saía vazio: **buraco de trilha no fecho**, que é onde
tocam o CTA e o card de membros, e a zona que ninguém revisa.

**Conserto aplicado.** Abaixo de 5 s não se abre bloco: o último capítulo vai até o fim, que é o que
um editor faria com a faixa já tocando. Medido depois do conserto: cobertura contínua de 30,4 s a
1501,73 s em LIMPO, contra 1501,72 s de conteúdo — `perdidos: []`, zero costuras, zero buracos.

**A regra, e ela é a mesma da [[FIN-84]] vista de outro lado.** Bloco degenerado não é a lista vazia,
é o bloco curto demais para o uso — e quando o piso do consumidor é conhecido (aqui, 5 s), quem
PRODUZ o bloco tem de respeitá-lo, senão entrega um item que existe no papel e some na execução.
*Buraco só se abre quando há material para preenchê-lo.*

---

### FIN-167 · Selo alpha NÃO é "cena com arte" — a fronteira do encerramento é a última cena que OCUPA O QUADRO (10/ago/2026)

**O caso.** O T1 do encerramento ([[FIN-154]]) ancora na última cena com arte, justamente para cair na
fronteira em que a imagem sai e o apresentador fica sozinho para se despedir. O laço perguntava
`segs[i].anima` — que responde *"esta cena tem clipe?"*, não *"esta cena ocupa o quadro?"*. No `ceuta`
a última cena animada é `s162-clube-membros`, que é **selo**: carrega canal alpha e o próprio gerador
a manda para a V3 (`cenasSelo`), por cima do apresentador. A arte full-frame acaba **24,82 s antes**,
em `s160-de-quem-paga` (1488,30 s). Ancorado no selo, o T1 saiu em 1513,08 s — **onde não existe corte
nenhum**: a V2 já tinha terminado e a V1 corre contínua até o fim — e tapou o QR do Clube por 1,5 s
dos 9,5 s em que ele está no ar. É exatamente o "corte inventado" que o comentário do próprio bloco
proíbe, cometido pelo bloco que o escreveu.

**Conserto aplicado** (`scripts/xml-premiere-5camadas.mjs`): o laço passa a excluir os `cenasSelo` — o
mesmo filtro que monta a V2, três telas abaixo no mesmo arquivo. Medido depois: T1 em
1487,53→1489,03 s, centro **1488,28 s** contra **1488,30 s** de fim da V2 (menos de um frame), com o
QR livre nos 9,5 s inteiros.

**A regra.** Quando duas partes do mesmo arquivo respondem *"que cenas contam?"*, elas têm de usar o
MESMO filtro — critério que diverge do consumidor põe a peça bem posicionada num mapa que ninguém
desenha. E `anima:true` nunca quis dizer "ocupa o quadro": **o alpha é precisamente a cena que não
ocupa**. Onde houver camada de selo, todo cálculo de *fronteira visual* tem de perguntar pela camada,
nunca pela existência do clipe. Ver [[FIN-154]], [[FIN-69]], [[FIN-45]].

---

### FIN-168 · A trilha está FORA DE FASE com os cards — e trocar o carimbo do relógio PIORA (10/ago/2026) 🔴 ABERTA

**O caso, medido no `ceuta-travessia-em-massa`.** A V2 recebe o deslocamento acumulado dos gaps de
card (Δ = 0 / +27 / +54 / +81 frames); os 12 trechos de A2/A3 recebem **Δ = 0 em todos**. Resultado: a
emenda entre faixas cai **0,90 s / 1,80 s / 2,70 s ANTES** do card — em cima da última fala do
capítulo, em vez de dentro do respiro — e o erro chega a 3,60 s no último trecho. Os ducks de −10 dB
estão certos (vêm da cena); só os clipes estão fora de fase. Achado comparando **as camadas entre si**,
não contra o plano: o laudo anterior deu PASS na trilha medindo níveis e cobertura, que estavam ótimos.

**A raiz aparente é uma colisão de vocabulário.** `src/relogio-espelho.mjs` só conhece dois valores e
chama de **FINAL** o relógio do master decupado (ripple aplicado, gaps de card **não**);
`src/trilha-plano.mjs` conhece três e reserva **FINAL** para "ripple + gaps já somados". O
`scripts/trilha/escolher.mjs:292` passa a palavra adiante sem traduzir, então o consumidor faz
FINAL→LIMPO (subtrai) e o XML soma de volta com `comGapF`: **identidade**.

**⚠️ E AQUI ESTÁ O QUE ESTA LEI EXISTE PARA IMPEDIR: a correção óbvia foi TESTADA E É PIOR.** Carimbar
`LIMPO` (traduzindo na fronteira) e regerar dá:

| carimbo | Δ card 1 | card 2 | card 3 | card 4 |
|---|---|---|---|---|
| `FINAL` (estado atual) | 0 | **−0,90 s** | −1,80 s | −2,70 s |
| `LIMPO` (tentado, revertido) | 0 | **+6,90 s** | +9,90 s | +12,90 s |

**Por quê:** o vão do card mede **3,0 s no espelho** e **3,9 s no XML** (que usa a duração real do
clipe, [[FIN-164]]/[[FIN-165]]) — a deriva de 0,9 s por card é justamente essa diferença. Carimbado
`LIMPO`, o `comGapF` soma o gap **inteiro** (3,9 s) onde faltavam só 0,9 s. **Nenhum dos três rótulos
descreve "relógio com vãos de tamanho ERRADO"**, então nenhuma escolha de rótulo conserta: o
vocabulário de 3 relógios não tem palavra para este estado.

**O conserto de verdade é reconciliar o TAMANHO do vão** entre o espelho e o XML (uma fonte só para
"quanto mede o buraco do card"), não rebatizar o relógio. Enquanto isso não acontece, **deixe o
carimbo `FINAL`**: erra por 0,9 s, e a alternativa erra por 6,9 s.

**A regra.** Quando duas escalas usam a mesma palavra, o bug não é ambiguidade — é um erro
*sistemático com cara de acerto*. E antes de traduzir entre elas, **meça as duas pontas**: se a
tradução muda o resultado por uma grandeza que não é a diferença esperada, o problema não estava no
rótulo. *Correção plausível que não se mede é chute com autoridade.* Ver [[FIN-164]], [[FIN-07]].

### FIN-169 · Span PRESERVADO contado como corte adianta o vídeo inteiro dali para a frente (10/ago/2026) 🟢 FECHADA

**O caso, medido no `orcas-nao-matam`.** O `scripts/decupagem/remapear-espelho.mjs` lia o
`_cortes.json` cru e montava a própria lista: o `.map()` até copiava `classe`, e **nada a
consultava**. Um span `riso-leve` de 1,340 s (bruto 290,970→292,310 — o "Na-na-na" que o decupador
mandou PRESERVAR em P&B, [FIN-28]) entrou no ripple como se tivesse sido removido. Mas o
`master-decupado.mjs` o MANTÉM no arquivo, porque usa `lerCortes`, que é o dono da pergunta e já
separa `cortes` de `pb`. As duas contas discordavam pela duração exata do riso.

Resultado: **todas as cenas a partir de 209,86 s (limpo) ficaram 1,34 s ADIANTADAS** — degrau único,
erro 0,00 s antes e −1,34 s constante depois, medido palavra a palavra contra o `words-final.json`
(mediana das 39 âncoras: **−1,360 s**). Os 3 últimos cards de título caíam **1,31 s ANTES** do vão,
em cima da última fala do capítulo, e deixavam o fim do respiro descoberto.

**Nenhum gate viu, e não é acaso: o espelho estava internamente consistente.** Cabia no arquivo,
terminava 1,25 s antes do fim do master (plausível como cauda), e o `qc-espelho-fala` deu **PASS** —
ele confere que a âncora acontece no tempo em que o espelho a põe, com tolerância maior que 1,34 s.
Erro de relógio não se prova dentro do próprio relógio: **a única régua é a fala do arquivo que vai
ao ar**, palavra a palavra, procurando o DEGRAU. Um deslocamento constante lido cena a cena parece
ruído de ancoragem; visto como série, é um degrau de 1,34 s com dois patamares limpos.

**A raiz não é o bug — é onde o conserto parou.** Este MESMO defeito foi achado e consertado em
09/ago no `qc-espelho-cortes.mjs` (`rosto-da-formiga`, 4,12 s de beat preservado empurrando 3 vãos),
com comentário de 9 linhas explicando tudo. O conserto ficou **no gate** e não foi ao **produtor** —
é a [FIN-160] outra vez, e o `src/cortes.mjs` já avisava por escrito: *"quem consome `.cortes`
continua correto sem saber que a nova categoria existe"* — verdade só para quem CONSOME a função.

**A regra:** quem deriva tempo de `_cortes.json` **importa `lerCortes`**; não relê o arquivo. E ao
consertar aritmética de relógio num gate, o mesmo dia procura quem PRODUZ o artefato — gate consertado
sozinho detecta para sempre o que continua sendo escrito errado.

Agente-raiz: `scripts/decupagem/remapear-espelho.mjs` (usa `lerCortes`, e imprime os spans preservados
no relatório para que 1,34 s fora do ripple sejam visíveis a olho).

### FIN-170 · O remapeador gravava em `cenas` e deixava `segmentos` velha ao lado (10/ago/2026) 🟢 FECHADA

`remapear-espelho.mjs` escrevia a saída com `{ ...esp, cenas }`, sempre. Entrada com `segmentos` (o
normal, e o nome do contrato) saía com **as duas listas** — a bifurcação da [SIS-128], em que quem
decide o que vale é a ordem dos `||` de cada um dos 17 consumidores.

**Só não virou desastre por acidente:** `cenas` recebia a mesma REFERÊNCIA de array, e as cenas são
mutadas in-place (`cena.inSec = aa`), então as duas cópias coincidiam. Bastava um `.map()` no lugar
da mutação para o espelho sair com metade dos consumidores no relógio errado. Medido no
`orcas-nao-matam`: `validar-contrato --estrito` reprovava por propriedade não prevista; o modo
normal só avisava.

**A regra: a lista volta na chave em que veio.** *Duplicata que hoje coincide não é redundância
inofensiva — é uma bifurcação esperando o refactor que a separe.*

### FIN-171 · O `<out>` do clipitem de trilha era o tamanho da JANELA, não o do ARQUIVO — e o aviso que sabia disso só imprimia (10/ago/2026) 🟢 FECHADA

`clipeTrilha` escrevia `<out>${lenF}</out>` com `lenF` = tamanho da janela na timeline, enquanto a
linha ACIMA, no mesmo `<file>`, declarava `<duration>` = tamanho do arquivo. Duas verdades a dois
centímetros de distância, nunca comparadas. Medido no `ceuta-travessia-em-massa`: `trilha-6`
(par estéreo) saía `<out>3218</out>` contra `<duration>3181</duration>` — **37 f = 1,233 s de mídia
que não existe**, e a janela caía inteira dentro do card 4, onde a A1 também está vazia:
**silêncio absoluto** no fecho do capítulo. De 164 clipitems, exatamente 2 — o par da mesma faixa.

**A causa é a conversão LIMPO→FINAL, e ela é legítima:** a janela cresce com os gaps de card que
engole (a música toca por cima do card, é o ponto do −10 dB). Esta faixa tinha 2,672 s de folga e a
virada de capítulo a alongou 3,900 s. As outras duas viradas sobreviveram por sorte de duração.

**O que ensina não é o bug — é o aviso.** A checagem `durSrc + 0.5 < b - a` existia ali desde sempre,
disparou, e a linha *"o Premiere corta (falta loop)"* SAIU no log da finalização. Ninguém leu, porque
ela sai no meio de outros seis avisos. Vinte linhas acima, o comentário do `silenciosFinal` já dizia
a frase inteira: *"regra sem verificação automática é regra morta, e esta já falhou uma vez em
silêncio"* — e a trilha tinha as duas coisas, a regra escrita e a verificação que só falava.
**Aviso que não muda o artefato é documentação, não proteção.**

**O conserto ancora pelo FIM, não pelo início**, e a razão é o que cada ponta significa: o `b` é a
VIRADA DE CAPÍTULO, que cai em cima do card e que o `qa-montagem` confere; o `a` é uma entrada que
o trecho anterior já está cobrindo, porque os trechos abrem 2 s antes do fim do anterior, de
propósito (crossfade). Encolher o `b` mexeria na virada **e deixaria o silêncio de pé**; atrasar o
`a` não move nada visível e o silêncio some. No `ceuta`: entrada 13:49,6 → 13:50,8 (+1,23 s), coberta
por `Storm Shelter` que vai até 13:51,6, virada preservada em 15:36,8, duck do card 4 intacto.
Só quando NÃO há trecho anterior cobrindo o recuo é que o `b` cede — aí o silêncio é inevitável e a
escolha é entre tê-lo no fim ou pedir mídia inexistente; o aviso então nomeia a cura real (trocar a
faixa, `curador-de-trilha`).

**A trava mora onde o número é escrito:** `clipeTrilha` clampa `endF` a `startF + f2(durSrc)`. O
trecho já chega cabendo, mas `f2` arredonda os dois lados de forma independente e um frame de sobra
bastaria. *Invariante conferido longe do ponto de escrita é invariante que o arredondamento revoga.*

Aceite (determinístico, roda em segundos sobre o XML): **zero clipitems com `out` > `<duration>` do
seu `<file>`** — vale para as 5 camadas, não só a trilha.

Agente-raiz: `scripts/xml-premiere-5camadas.mjs`.

### FIN-172 · O laço que apara PARES deixa a ÚLTIMA cena sem teto — e ela é a única que pode passar do fim do arquivo (10/ago/2026) 🟢 FECHADA

`remapear-espelho-final.mjs` protege cada cena de invadir a seguinte com um laço que anda até
`length - 1`, comparando `a` com `b`. A última cena não tem `b`. Ela é, por construção, a única sem
ninguém que a apare — e também a única cujo `dur` bruto costuma carregar dentro de si o **rabo que a
decupagem cortou** (a batida, o bastidor, o "acabou?"). No `mamute-de-volta`: `s118-boco-despedida`
saía com 7,33 s a partir de 1125,73 s e terminava em **1133,07 s num master de 1129,50 s**. Ali não
há arquivo: a cena não ficaria curta, ela **não existiria** na montagem — e é a DESPEDIDA, que a
`decupagem` trata como intocável.

**A confirmação estava escrita no próprio espelho, no campo ao lado.** O montador já anotara na
`tese`: *"⚠️ span com o corte de rabo dentro: ~3,8 s de tela"*. O teto real (1129,50 − 1125,73 =
3,7667 s = 113 quadros a 30 fps) **bate com a anotação dele**. Quem produziu o número sabia; o
remapeador não perguntou.

**E o script já sabia também.** O bloco `▲ N cena(s) passam do fim da fala` detectava o caso, rodou,
imprimiu — no meio de um relatório de censo, tabela de julgamento e variação de janela. É a
[FIN-171] outra vez, no script vizinho: *aviso que não muda o artefato é documentação, não
proteção.* E é a [FIN-97] outra vez na forma: *laço que compara pares é cego para a borda.* Duas
leis fechadas apontavam para este defeito e nenhuma o alcançou, porque cada uma foi escrita no
endereço de um script só.

O teto é o **fim do ARQUIVO**, não o fim da fala: o master tem rabo de silêncio depois da última
palavra (aqui, 1127,42 s de fala contra 1129,50 s de master — 2,08 s que são tela legítima). Medir
com `ffprobe` quando o master está no disco e cair no fim do `words-final.json` quando não está —
sem master, a fala é o teto honesto, e é melhor uma cena 2 s curta do que uma cena que não existe.

Aceite (roda em segundos, e o `qc-espelho-cortes` já o faz na lente TRANSBORDA): **nenhuma cena com
`inSec + dur` > duração do `_master-decupado.mp4`** — inclusive, e principalmente, a última. ⚠️ A
lente só roda com o master NO DISCO; sem ele o gate avisa que não mediu e passa. Master no bucket e
ausente do local não é "verificado", é **não medido**: baixe o arquivo (é banda, não inferência)
antes de ler o PASS como prova.

Agente-raiz: `scripts/remapear-espelho-final.mjs`.

### FIN-173 · O mood do capítulo sai de CASAMENTO DE REGEX EM TESES — sem peso de tempo, e 72 s decidiram 280 s (11/ago/2026)

**Refina a [[FIN-152]] num ponto que ela erra.** Aquela lei diz que num capítulo bimodal *"o vencedor
é a metade maior, e a outra metade fica com a música errada"*. Medido hoje no `quao-fundo-terra`, foi
o **contrário**, e a causa está no mecanismo: `moodDoCapitulo()` conta em quantas TESES cada regex do
`MAPA_MOOD` casa e devolve o padrão com mais casamentos. Não há peso por duração nem por número de
cenas — **um bloco curto de vocabulário forte vence um bloco longo de vocabulário que o mapa não
conhece.**

**Cap 3 (280 s), medido casamento a casamento:** venceu `Hopeful/Epic/Euphoric` com **n=3**. Desses,
**2 vieram do bloco de 72 s** (a reviravolta: o calor sustenta o campo magnético — `revela`,
`descoberta`) e **1 do bloco de 205 s** (a parede de calor: a rocha vira massa, a broca emperra, o
furo cicatriza). O bloco maior — 19 cenas contra 6 — empatou **1×1×1×1** entre quatro padrões e não
impôs nada. Resultado: 205 s de derrota técnica com cama esperançosa.

**Por que o bloco grande foi invisível: o mapa não tem padrão para DERROTA TÉCNICA.** "Por excesso de
fogo", "o furo cicatrizava", "os 15 km ficaram impossíveis" não casa
`perigo|ameaça|guerra|morte|colaps|sombri|terror` — obstáculo físico não usa o vocabulário do perigo.
Um bloco que o mapa não sabe ler não perde a votação: ele **não vota**.

**E o inverso, no cap 4 (507 s): o bloco que MENOS queria `Dreamy` foi o que mais o elegeu.** Dos 10
casamentos de `natureza|oceano|gelo|montanha|floresta|profund|remoto`, **5 saíram de 962→1077 s** —
onde o "gelo" é gelo industrial bombeado para o mineiro não assar a 60 °C, o "oceano" é onde um navio
fura rocha, e "profundo" é uma mina a 4 km. Vocabulário de paisagem serena descrevendo esforço
industrial. É a família de `espaço`/`planeta`/`estrela`/`astro` que o `MAPA_MOOD` já cataloga, um
nível acima: não é uma palavra polissêmica solta, é **um bloco inteiro cujo assunto casa o padrão
errado**, e marcar termo não resolve porque nenhum dos termos está errado.

**A regra.** Na revisão de mood, não pergunte "qual metade é maior" — **conte os casamentos POR
BLOCO**. Se o mood vencedor tira a maioria dos casamentos de um bloco que é minoria do TEMPO, a troca
à mão é obrigatória. A contagem roda em segundos: carregue o `MAPA_MOOD` do
`scripts/trilha/escolher.mjs`, aplique cada regex às teses de cada bloco e compare — foi assim que os
dois casos acima saíram de suspeita para número. E vale a [[FIN-152]] inteira no resto: emende na
cena da virada, respeite o veto de gênero da [[FIN-95]], preserve o carimbo `relogio` e reconfira
`perdidos: []`.

*Contador sem unidade não mede importância: ele mede quem fala a língua do dicionário.*

Agente-raiz: `scripts/trilha/escolher.mjs` (`moodDoCapitulo`) + a estação TRILHA.

---

### FIN-174 · Cascata de evidências que aceita a PRIMEIRA aceita a MEDIÇÃO DE METADE DO INSUMO — e o gate mandou destruir 89 clipes pagos (11/ago/2026) 🟢 FECHADA

**Sobe um degrau na [[FIN-127]].** Lá o defeito era a *aritmética* (a subtração mentia quando um corte
passava do fim do bruto, e a régua dos keeps consertou). Aqui a aritmética está perfeita e **a FONTE
mente** — e a régua dos keeps não salva ninguém, porque o laço apara cada keep com
`Math.min(+c.ini, durBruto)`: com `durBruto` valendo metade, **todo keep além do fim declarado é
truncado em silêncio.**

**O caso.** `quao-fundo-terra`, na finalização. O Bôco gravou até acabar a bateria do tablet onde lê o
roteiro, carregou, e continuou **noutro arquivo** — gravação em DUAS partes. O `sync-info.json` foi
escrito às 02:15 pelo sync da **Parte I** (`duracaoFinalSeg: 1117,099`); a Parte II foi materializada
às 06:28 e o master saiu da **concatenação** das duas, 1263,000 s. Ninguém reescreveu o `sync-info`,
porque quem o escreve é o sync de UM par de arquivos.

    durBruto = 1117,099  (sync-info, só a Parte I)  → esperado  820,8 s → delta +442,19 s → FAIL
    durBruto = 1753,614  (words.json do BRUTO)      → esperado 1263,0 s → delta   +0,00 s → PASS

**O erro não é de 1 s como no `o-acre`: são 636 s**, porque falta metade do insumo. E o FAIL vinha com
a receita de baixar 10 GB, mandar o master para o `arquivo-morto/` e regerar — o que moveria o relógio
do projeto e **invalidaria os 89 clipes 4K já pagos** de um vídeo cujo `qc-espelho-fala` passava com
95 âncoras verificáveis, cujas 4 fronteiras de capítulo foram medidas com `blackdetect` no próprio
master, e cujo `words-final.json` (transcrição DO master) vai a 1261,358 s. *Havia três provas de fase
ao lado, e a ordem era destruir o artefato.*

**A regra, e ela é geral — vale para toda cascata de evidências, não só para esta.** Quando várias
fontes medem A MESMA grandeza, **colha todas e use a MAIOR** (ou a mais confiável por critério
declarado), nunca "a primeira que responder". Ordenar por precedência supõe que a fonte preferida está
íntegra; num insumo multi-parte ela está *completa para a parte que conhece* e **errada para o todo**,
que é o pior modo de falhar — parece medição, tem casa decimal, e ninguém desconfia.

**Por que o máximo é seguro aqui, e não porta dos fundos:** subestimar `durBruto` reprova falso (a
álgebra da própria lei anterior), e nenhuma das três fontes superestima materialmente — a última
palavra do `words.json` do bruto é cota INFERIOR do fim do arquivo, e no pior caso medido passa 1,06 s,
dentro da TOL que o encode já consome. Medido em 15 masters do disco depois do conserto: 12 PASS com
delta ≤ 0,05 s, os dois FAIL reais preservados (`galaxia-arco-flecha` −3,19 s, `mongolia-lugar-frio`
+8,4 s) e o erro estrutural do `especies-humanas` intacto. No `o-acre` a fonte vencedora seguiu sendo
o `sync-info` (1005,0 s contra 1001,62 s do words) — **a lição de 07/ago continua de pé, agora por
mérito da medição e não por ordem na fila.** E o `_cortes.json` fica FORA das evidências de propósito:
usá-lo seria circular, é ele que está sob julgamento.

**O gate agora NOMEIA a discrepância** em vez de passar calado: quando a vencedora deixa outra fonte
para trás por mais que a tolerância, imprime os dois números e a frase *"insumo declarado INCOMPLETO
(assinatura de gravação em PARTES)"* — o próximo a ler a conta precisa entender por que o bruto
"cresceu". A raiz de fábrica segue aberta e registrada: `materializar-bruto.mjs` não suporta
multi-parte (só traz um par por linha da fila) e a concatenação não escreve um `sync-info` do
concatenado.

*Precedência de fontes é uma aposta na integridade da favorita. Quando o insumo pode chegar em
pedaços, a aposta perde — e perde parecendo certa.*

Agente-raiz: `scripts/qc-master-em-fase.mjs` (leitura do `durBruto`) — consertado. Raiz de fábrica em
aberto: `scripts/decupagem/materializar-bruto.mjs` (sem multi-parte).

---

### FIN-175 · "4 snap(s)" era uma AMPUTAÇÃO de 44% — a contagem sem nome, e os 8 avisos que a estação engoliu (11/ago/2026, `quao-fundo-terra`)

Três elos da mesma corrente, cada um medindo certo e reportando pela metade. O resultado foi o CTA
final do vídeo decapitado, descoberto pelo gate de finalização — não pela ferramenta que o causou e
mediu meia hora antes.

**O que aconteceu.** Na V3 o card do Clube (`s121`, 10,333 s / 310 f) entra em 1251,30 s e terminaria
em 1261,63 s. O QR do clube foi recuado para 1257,10 s pela [[FIN-81]] (passava 0,33 s do fim do
conteúdo). Colisão. O `normalizar-timeline.mjs` faz o que foi desenhado para fazer — *"sobreposição
PARCIAL → SNAP: encurta o de baixo até encostar"* — e o card virou **174 f, 5,80 s**. Como os beats
dele são ABSOLUTOS (`seg(t,5.96,…)`, `seg(t,6.50,…)`, `seg(t,8.50,…)`), as palavras **"Clube de
Membros" e a flecha, que só entram em ~6,2 s, nunca foram à tela** — exatamente enquanto o Bôco diz
*"o clube de membros está logo ali no link abaixo"*. No último frame no ar lê-se só "OBRIGADO".

**Os três elos:**

1. **O normalizador contava snaps sem pesar quanto cada um tira.** Aparo de 1 frame é assentamento de
   geometria (houve 3 assim, todos 0%); aparo de 136 de 310 frames é amputação. O relatório tratava os
   quatro como a mesma linha.
2. **O gerador do XML extraía o `RESUMO` por regex e jogava o nome fora.** O normalizador *já* nomeava
   cada snap na linha por-trilha; o `xml-premiere-5camadas.mjs` lia `"N snaps"` e imprimia
   `"4 snap(s)"`. *Rede que mede e reporta para quem descarta a medição não protege nada.*
3. **O `finalizar.mjs` engolia o rodapé inteiro no ramo de SUCESSO.** Só o ramo de falha mostrava
   saída. O gerador emitiu **8 avisos** naquela rodada e a estação imprimiu **3 linhas** — o `stdout`
   morria na variável. Aviso não é ruído de depuração: é a ferramenta dizendo o que **não** conseguiu
   resolver sozinha.

**Consertado nos três, e a cadeia foi testada de ponta a ponta:** o normalizador classifica o snap
como GRAVE (≥25% do clipe ou ≥0,5 s), imprime a fração e leva `graves` para o `RESUMO`; o gerador
propaga nome, fração e o ⛔ para os avisos; o `finalizar` mostra os avisos no sucesso. Onde se lia
*"4 snap(s)"* hoje se lê *"4 snap(s) · ⚠ 1 GRAVE(s)"* e, no rodapé, `⛔ SNAP GRAVE na V3:
"s121-card-clube-de-membros-4k" perdeu 136f de 310f (44%, 4,53 s)`. **A geometria do XML não mudou** —
md5 idêntico antes e depois, o laudo já emitido continuou valendo.

**A regra, e ela vale para toda rede de segurança desta casa:** quem apara, encurta, descarta ou
substitui **diz o QUÊ e QUANTO, não quantas vezes**. E quem chama uma ferramenta que grita **mostra o
grito** — sobretudo quando ela retorna 0, porque é aí que ninguém procura. Corolário para peça
ANIMADA: aparar pelo fim só é inócuo quando o fim é assentamento; quando a mensagem chega nos últimos
beats, aparo é censura. Peça cuja informação principal entra depois da metade não se apara — se a
janela não cabe, o conserto é na JANELA (mover o vizinho, alongar a cauda) ou nos BEATS.

*Contar eventos é barato e parece diligência. O que fere é a magnitude, e ela não aparece na contagem.*

Agentes-raiz: `scripts/decupagem/normalizar-timeline.mjs`, `scripts/xml-premiere-5camadas.mjs` (leitura
do RESUMO) e `scripts/finalizar.mjs` (ramo de sucesso da etapa `xml`) — os três consertados em 11/ago.
Segue ABERTA a colisão estrutural: card do Clube e QR são ancorados no mesmo `membrosAtSec` e nenhum
dos dois sabe do outro, então a janela livre real (6,767 s) é menor que a animação (~7,0 s).

### FIN-176 · O conserto da [[FIN-168]] pressupunha master SEM respiro — e num master COM respiro ele erra as TRÊS emendas de capítulo (11/ago/2026, `quao-fundo-terra`)

A [[FIN-168]] consertou, em 10/ago, a trilha que chegava cedo: *desfazer com o gap DECLARADO (3,00 s)
e refazer com o MATERIALIZADO (3,90 s)* é o que converte de um relógio FINAL para o outro. Conferido
no `ceuta-travessia-em-massa`, onde as trocas caíram exatamente em cima dos cards. **O conserto está
certo — para o master em que foi medido.**

Este master é de outro tipo: ele já tem os respiros MATERIALIZADOS (o 3º estado da [[FIN-155]]). O
par "desfaz 3,00 / refaz 3,90" sobrecorrige exatamente um respiro por fronteira, e o resultado é que
nenhuma das três emendas cai onde a [[FIN-77]] manda (no INÍCIO do card, para a música liderá-lo):

| emenda | caiu em | o card abre em | desvio |
|---|---|---|---|
| cap 1→2 | 254,067 s | 257,000 s | **−2,933 s** — sobre *"…que **os** cientistas não esperavam"* |
| cap 2→3 | 473,900 s | 476,833 s | **−2,933 s** — sobre *"A própria Terra **passou** a empurrar de volta"* |
| cap 3→4 | 762,133 s | 758,233 s | **+3,900 s** — cai no FIM do card, não no início |

As conversões INTERIORES estão todas certas (Δ = +1,8 / +2,7 / +3,6 s, idênticas às da V1). **Só erram
as fronteiras que coincidem com card** — que são justamente as que a trilha existe para marcar. Duas
das três trocam de música sobre a fala; a terceira entra depois de o card já ter passado, e o
capítulo novo abre sem música.

**Por que nenhuma rede pegou.** O gerador tem aviso para o caso de nenhum vão declarado casar
(`nenhum vão declarado de _cortes.json casou…`), e ele NÃO disparou: os vãos casaram. A conta rodou
com os dois números certos — e mesmo assim deu no lugar errado, porque a premissa não é o número, é
o ESTADO do master. Contagem de faixas não denuncia (são 8 clipes nos dois casos), e o ducking mede
−10 dB sob título com a mesma exatidão de sempre.

**A regra:** conversão entre relógios não se valida pelo VALOR dos gaps, e sim pelo ESTADO do master
que os produziu. Antes de desfazer-e-refazer, pergunte se o respiro já está materializado — se
estiver, ele já foi contado uma vez, e desfazê-lo de novo o conta duas. E o teste que fecha isso é
barato e não estava sendo feito: **a emenda de capítulo tem endereço conhecido — o `start` do card
de título.** Comparar os dois é uma subtração; qualquer desvio ≠ 0 é defeito, sem precisar entender
a aritmética que o produziu.

*O conserto de ontem carrega a premissa do master de ontem. Quando o insumo ganha um estado novo, o
conserto não vira errado — vira PARCIAL, que é mais difícil de ver, porque continua acertando tudo
o que acertava.*

Agente-raiz: `scripts/xml-premiere-5camadas.mjs` (o bloco `vaosDecl`/`gapDe` da [[FIN-168]]) e
`src/trilha-plano.mjs` (o dono único dos dois consumidores). ABERTA — diagnosticada e medida em
11/ago, não consertada: o item 2 do laudo passa (a trilha existe, é amena e ducka), o desvio é de
88 f e o Mateus o resolve no Premiere arrastando dois clipes. O conserto de código deve entrar na
próxima regeração do XML, com re-julgamento completo — mexer nesta aritmética sem re-julgar é como
o defeito nasceu.

---

### FIN-177 · O ÁUDIO DA CÂMERA NUNCA É FONTE — a entrega é o WAV do microfone, sempre, e o defeito se conserta no WAV (11/ago/2026)

**Ordem do Mateus, com ênfase literal dele:** *"O áudio da câmera NUNCA deve ser considerado,
N-U-N-C-A. O que deve ser resolvido e melhorado é sempre o áudio wav do microfone."*

Isto **não é uma preferência de qualidade a ponderar caso a caso** — é regra de identidade, da mesma
família do "sempre 4K, nunca HD". O scratch da câmera existe para SINCRONIZAR (é a referência que
casa os dois relógios) e para nada mais. Ele nunca vira entrega, nem "provisoriamente", nem quando a
medição diz que está bom, nem quando o lapela dá trabalho.

⚠️ **O QUE ESTA LEI PROÍBE, EXPLICITAMENTE:** o `single-system-fallback`. Um pipeline que, ao falhar
a sincronia, **decide sozinho** usar o áudio da câmera e segue em frente. Foi o que aconteceu no
`orcas-nao-matam`: o `corrigir-source-bruta.mjs` recusou muxar (correlação 0,073, piso 0,3 — recusa
CORRETA), e o fallback então gravou `"modo":"single-system-fallback"`, `"usouLapela":false`, com um
motivo bem escrito. Um mês depois o vídeo estava a um comando de ser entregue com áudio de câmera, e
**só não foi porque o Mateus ouviu**.

**Falha de sincronia é BLOQUEIO, não é escolha de fonte.** A saída certa da recusa é parar e
escalar; nunca trocar o insumo por um pior e continuar. *Fallback que degrada a ENTREGA não é
resiliência — é o defeito com uma justificativa anexada.*

⚠️ **E a premissa do fallback estava ERRADA, o que torna tudo pior:** ele concluiu que "o lapela só
cobre 48% do take" porque o intake tinha materializado **um único WAV**. A gravação tem DUAS partes
(`Orca.wav` 649,9 s + `Orcas ptII.wav` 865,8 s = 25,3 min, cobrindo a narração inteira, com
sobreposição de retake no meio). O `acharPar()` de `montar-fila-real.mjs` escolhe **o maior vídeo e
o maior wav** (`sort(por tamanho)[0]`) — numa gravação de duas partes isso emparelha por acaso, a
correlação vira ruído, e o fallback é acionado por um problema que não existe. Mesma raiz que já
mordeu o `chip-na-bola` (três sessões pareadas) e o `ponte-mais-alta`.

⚠️ **O gate que existia para pegar isto estava CEGO POR UMA ETIQUETA MENTIROSA.** O
`mapa-decupagem.mjs` classifica master com áudio errado lendo `stream_tags=handler_name`. O master do
`orcas` carrega áudio de câmera com a tag **`"mic (lapela) - audio bom, camera silenciada"`**. *Metadado
escrito por quem produziu o arquivo descreve a INTENÇÃO, não o conteúdo — e um gate que confia nele
audita a promessa, não o fato.* A prova honesta é o conteúdo: correlacionar o áudio do master com o
WAV do mic e exigir casamento.

**O que fazer quando o lapela tem problema real** (ganho baixo, hum, cobertura parcial): consertar o
lapela. Medido neste caso — o hum é de rede (pico em 180 Hz, harmônicos de 60), tratável com notches
estreitos que não tocam na voz; o ganho baixo se resolve com ganho ESTÁTICO. ⚠️ **Nunca com
`loudnorm`**, que é compressão de loudness e **levanta o piso de ruído entre as palavras** — foi ele
que fabricou o "chiado" que reprovou três rodadas de amostra nesta sessão. E ⚠️ **nunca com
`aformat=channel_layouts=mono`** num WAV estéreo de canais idênticos: isso SOMA os canais (+6 dB) e
clipa; o certo é `pan=mono|c0=c0`.

**⚠️ E O TRATAMENTO PADRÃO É NENHUM (decisão do Mateus, 11/ago/2026, ao ouvir as amostras):**
*"Prefiro o áudio do microfone wav original ainda. Sem filtro nenhum, nem ganho."*

Depois de comparar o WAV cru contra sete cadeias de tratamento (notches no hum, subtração espectral
em três forças, rede neural com três modelos, mistura wet/dry e ganho estático), **ele escolheu o
material intocado**. A entrega leva o WAV como ele saiu do gravador: sem denoise, sem notch, sem
normalização, sem ganho.

A razão é de ofício, não de medição: todo filtro troca ruído por artefato, e artefato não tem
volta — enquanto o nível se ajusta no Premiere, onde ele ouve o resultado no contexto da trilha e
decide. *O estúdio entrega a captação fiel; quem mistura é quem está olhando o vídeo pronto.*

Consequência prática para quem for muxar: a faixa entra **bit a bit como está no WAV**, e o único
processamento permitido é o que o CORTE exige (recorte nos mesmos pontos do vídeo). Se alguém achar
que "só um ganhinho ajuda", a resposta é não — foi medido, foi ouvido, e foi decidido.

**⛔ E ENTREGA PARCIAL EM LAPELA NÃO É UMA OPÇÃO — NEM COMO PERGUNTA (Mateus, 11/ago/2026):**
*"eu NUNCA iria aceitar um vídeo parcial 40% em lapela e 60% em câmera, registre isso pra você nunca
mais duvidar disso e ser uma dúvida real."*

Quando o lapela cobre só parte do take, a lista de opções tem DUAS entradas: **re-decupar usando as
outras tomadas** (o áudio bom quase sempre existe, em outro arquivo) ou **regravar**. "Aceitar o que
dá" não é a terceira via — não se oferece, não se pondera, não se lista "por completude".

*Oferecer a opção proibida já é meio caminho para ela ser escolhida num dia apertado.* Eu a listei
neste vídeo, com percentual e tudo, e o Mateus teve de gastar uma resposta para dizer o óbvio. O
custo de apresentá-la nunca é zero: ela vira precedente, e o próximo agente lê a lista, não a
recusa.

**Como isto se aplica na prática:** medido o buraco de cobertura, o agente NÃO pergunta "aceita
parcial?" — ele vai procurar o áudio que falta nas outras peças da pasta do Drive (é onde ele
esteve, nas duas vezes em que isso aconteceu), e só escala quando tiver provado que não existe em
lugar nenhum. Aí a pergunta é *"re-decupar com a tomada B ou regravar?"*, e só ela.

### FIN-178 · O gate do remapeador reprovava o ESPELHO DERIVADO — a régua contradizia o ofício que ela existe para conferir (12/ago/2026, `orcas-nao-matam`)

O `qc-espelho-derivado.mjs` tinha, na seção 1, `FALHA("o conjunto mudou de tamanho — remapear não
cria nem mata cena")` e `FALHA("ids inventados")`. Só que o §3b do ofício do `remapeador-de-cenas`
existe justamente para **acrescentar**, com a ordem do Mateus por escrito duas vezes: *"pode fazer
uma nova espécie de espelho sim… pra ficar mais fácil se tiver que adicionar/remover (principalmente
adicionar) mais coisas que não estavam previstas na cena"* e, em 12/ago, *"eu QUERO que tenha o
remapeamento de cena E também a adaptação e inclusão de novas cenas que foram determinadas no novo
espelho."* Duas cenas acrescentadas para cobrir troca de tomada reprovaram um espelho correto.

**A régua nasceu certa e pelo motivo certo** (o `mamute-de-volta`, onde a segunda conversão INVENTOU
cenas) — mas media a **consequência** em vez da **causa**: contava ids novos sem perguntar de onde
vieram. A distinção que separa os dois casos é **DECLARAÇÃO, não contagem**: cena acrescentada por
decisão carrega `_novaEm`; cena inventada por bug de conversão não carrega nada. Hoje id novo
declarado passa, id novo MUDO continua falha — e o caso do `mamute-de-volta` segue pego, porque a
segunda conversão nunca escreveu `_novaEm` em nada. O que **não** se afrouxou é o dano irreversível:
id que SUMIU é falha sempre, porque arte orfanada não volta (não há `_bkp/` de HTML e o versionamento
do bucket está `Suspended`).

⚠️ **E o mesmo gate tinha um segundo falso positivo, de outra natureza — a ALTERNÂNCIA COMENDO A
ÂNCORA.** Em `/-card|-titulo(-\d+)?$/` o `$` vale só para o **segundo** ramo, então `-card` casava em
QUALQUER posição do id. E "cardápio" começa com "card": num vídeo cujo tema central é o CARDÁPIO de
cada população de orca, `s015-o-cardapio-em-quatro`, `s068-cada-populacao-um-cardapio` e
`s086-nao-esta-no-cardapio` entraram na conta como cards de título, e o gate acusou *"7 card(s) para
4 vão(s) — a contagem tem de bater"*. O dano não parava no alerta falso: as três também saíam da
conta de "cena com arte e SEM HTML", que devolveu **93 onde a resposta é 96** — três cenas a desenhar
desaparecendo de uma lista de trabalho. A forma correta ancora os dois ramos:
`/(?:-card|-titulo)(?:-\d+)?$/`.

*Um gate que contradiz o ofício escrito do agente que ele confere ensina a ignorar o gate* — e aí o
defeito de verdade passa junto com o alarme falso. Antes de obedecer a um FAIL que manda desfazer o
que o dono pediu por escrito, **abra a linha do gate**: um dos dois está errado, e quem tem ordem
direta do Mateus por escrito não é o código.

### FIN-179 · Fronteira de cena se prova no ÁUDIO — o `start`/`end` do Scribe é borda de BLOCO, e 19 cenas trocavam em cima de sílaba (12/ago/2026, `orcas-nao-matam`)

Reancorado o espelho pela fala, 35 das 138 fronteiras caíam **dentro** do bloco de uma palavra. Lido
pela transcrição, isso parece defeito grave em alguns casos e inofensivo em outros — e a leitura está
errada nas duas pontas, porque **o `end` do Scribe é o fim do BLOCO, não o fim do SOM** (é a mesma
causa do §11.1 da re-decupagem, onde 18 cortes foram reprovados por um vão que não existia).

Medido no `_master-decupado.wav`, RMS em janelas de 20–30 ms, piso −55 dBFS (o ruído deste master é
~−85 e a fala vive acima de −40), os dois erros opostos apareceram juntos:

* **falso alarme** — a fronteira do card `t03`, a 0,88 s *dentro* do bloco `"antes."`, está a
  **−90,5 dBFS**: o bloco do Scribe engoliu os 3 s de silêncio do vão de card. Nada a consertar.
* **defeito real e invisível na transcrição** — **19 fronteiras** caíam em cima de som de fala, de
  −18,7 a −51,4 dBFS, quase todas na **primeira sílaba da palavra que abre a frase** (`"Primeiro"`,
  `"Cada"`, `"Quando"`, `"Esse"`, `"Já"`, `"Uma"`). Corte atrasado: a palavra já começou quando a
  imagem muda. Várias entravam só 70–110 ms — abaixo de qualquer limiar que se escolhesse na
  transcrição, e audíveis.

O conserto é determinístico e barato: recuar cada fronteira para o último instante silencioso antes
da palavra (teto de 0,6 s, sem engolir o segmento vizinho). As 19 foram de −18/−51 dBFS para −69/−89
dBFS, com recuo de 0,07 a 0,38 s. Depois disso, **zero** fronteiras em cima de som.

*A régua da fronteira é o som, não o carimbo de quem transcreveu.* E note a assimetria que faz este
defeito sobreviver: ele não estoura gate nenhum (o espelho continua contínuo, cabendo no arquivo e
com fala sob cada cena), não aparece no `words-final.json`, e só se vê medindo o WAV — ou assistindo.

### FIN-180 · Antes de culpar a mudança mais nova pelo desencaixe, meça contra o estado ANTERIOR: 27 das 28 cenas já estavam fora (12/ago/2026, `orcas-nao-matam`)

A tarefa chegou com a hipótese embutida — a re-decupagem encurtou o vídeo em 93,6 s (8,2%), então as
28 cenas com clipe 4K precisariam de adaptação por causa dela. Medido: **a re-decupagem mudou a
janela de 21 das 28 em menos de ±15%**, e o desencaixe real era outro. Comparando o `__duracao` de
cada HTML com a janela do espelho **de ANTES da re-decupagem**, **27 das 28 já divergiam mais de
15%** — com razões de 2,10× a **10,71×** (c34: 32,5 s de coreografia para 3,04 s de janela).

A causa é o **re-espelho de 11/ago**, que passou de 47 segmentos (cenas de 22–60 s) para 137 (cenas
de 3–22 s) preservando os ids e os HTMLs desenhados para as janelas antigas. Preservar id é o certo
(é o que impede a arte de virar órfã), mas preservar id **não faz a arte caber** — e o desencaixe
ficou invisível porque nenhum gate por-cena o vê: o HTML é válido, o clipe existe, o contrato passa.

Sem essa medição, o veredito honesto por cena era impossível: eu teria escrito "READAPTA por causa da
re-decupagem" em 23 cenas, e a estação seguinte procuraria o problema no lugar errado — no relógio
novo, que está certo. *A pergunta "o que esta mudança causou?" não se responde olhando só o depois:
ela precisa do antes, medido com a MESMA régua.* Uma diferença grande que já existia antes da
mudança não é efeito dela — e atribuí-la à mudança nova é o que faz o conserto ir para o arquivo
errado.

### FIN-181 · O ofício do remapeador mandava ancorar no `words-limpo.json` — que fica VELHO no disco sem avisar, e aqui descrevia um master 741 s mais longo (12/ago/2026, `orcas-nao-matam`)

O `.claude/agents/remapeador-de-cenas.md` dizia, em negrito e com justificativa convincente: *"O
relógio é o `words-limpo.json`, nunca o `words.json`. O primeiro descreve o master já cortado, com os
3 s de card materializados no arquivo."* Era verdade quando foi escrito e deixou de ser: desde
06-07/ago o espelho nasce em FINAL e o relógio do arquivo é o **`words-final.json`** — o Scribe #2
sobre o master pronto.

**Medido:** o `words-limpo.json` do `orcas-nao-matam` estava no disco, íntegro, bem formado, com
`mtime` de 07/ago e última palavra em **1789,09 s** — contra um master de **1048,400 s**. Obedecer a
instrução ao pé da letra teria ancorado o vídeo inteiro num relógio **741 s mais longo que o arquivo**,
e o resultado teria a aparência exata de trabalho feito: 139 cenas com `inSec` plausível, contínuas,
sem sobreposição.

*Artefato intermediário não some quando deixa de valer — ele fica no disco parecendo atual.* O
`words-limpo` é etapa do meio (a fala que fica, no relógio da decupagem, **antes** de o master
existir); depois de uma re-decupagem ninguém o regenera, porque ninguém mais o consome. Ausência
avisa; **desatualização não**.

**A régua, e ela custa um `ffprobe`:** antes de ancorar em qualquer transcrição, **compare o fim dela
com a duração medida do `_master-decupado`**. Quem bate é o relógio. Nome de arquivo não é prova de
relógio ([FIN-44]) — e "o documento manda usar este" também não.

⚠️ **E reancorar é casar DOIS relógios, não um.** O de DESTINO é o `words-final.json`; o de ORIGEM é
aquele em que o espelho velho fala, que a decupagem costuma preservar como
`words-final.json.ancora-<data>` (aqui, `ancora-10ago`, última palavra em 1141,50 s — exatamente onde
o espelho de 1142,000 terminava). Identifique **os dois** pelo fim. O ofício não mencionava o de
origem, e sem ele não há como saber em que fala cada cena antiga estava ancorada.

---

## [FIN-182] · Produzir o alpha não é entregá-lo — o formato de transporte precisa DECLARAR o canal

*12/ago/2026 · `mamute-de-volta` · medido nos arquivos antes de tocar em qualquer código*

O Mateus abriu o XML no Premiere e reportou: *"s115 e s117 do mamute ficou com fundo preto, e não
sem bg"*. Os dois são CTAs com canal alpha.

**A primeira medição inocentou o render, e isso mudou onde procurar.** `ffprobe` nos dois arquivos:
ProRes `yuva444p12le`. E o alpha do frame 45, extraído com `alphaextract`, dava média **4,1** e
**6,2** de 255 — quase tudo transparente, só o texto opaco. O canal existia e variava. *Ter `yuva`
no `pix_fmt` não prova que o alpha varia; a prova é a estatística do canal, e ela custa um comando.*

O que faltava era a DECLARAÇÃO. Nenhum `<file>` do gerador emitia `<alphatype>`, e sem ele o
Premiere importa ProRes 4444 **ignorando o canal** — o transparente vira preto chapado sobre o
apresentador.

⚠️ **E o defeito não era deste vídeo.** Dos 7 clipes com alpha, **5 são os ativos PADRÃO**: o QR do
clube, o selo de like/inscreva e a cartela de créditos dos membros. Eles entram em *todo* vídeo — ou
seja, **toda entrega em XML que esta casa já fez saiu assim**, e alguém corrigia na mão no Premiere
sem ninguém nomear a causa. *Defeito que tem contorno manual barato nunca vira relato, e por isso
vive para sempre.*

**A régua:** quem decide é o `pix_fmt` do ARQUIVO — a mesma do `temAlpha()`, que já escolhia a
CAMADA por ele ([FIN-69], onde dois CTAs em H.264 deram 44,3 s de tela branca). Ela passa a decidir
também a declaração: `straight` quando há alpha, `none` quando não há. Nunca pela extensão: `.mov`
tanto é ProRes 4444 com alpha quanto 422 opaco.

**O que generaliza:** um arquivo pode carregar a informação e ainda assim não a entregar, se o
formato que o transporta não tiver onde declará-la. Ao integrar por arquivo, pergunte sempre duas
coisas — *o dado está lá?* e *o destinatário tem como saber que está?*

---

## [FIN-183] · Amputação grave vira PROMOÇÃO de camada; gritar não devolve os frames

*12/ago/2026 · `normalizar-timeline.mjs` · o mesmo card, dois dias seguidos*

| vídeo | o que o card do Clube perdeu | consequência medida |
|---|---|---|
| `quao-fundo-terra` (11/ago) | 136 de 310 frames | as palavras "Clube de Membros" (entram em ~6,2 s) nunca chegaram à tela — exatamente enquanto o Bôco as diz |
| `mamute-de-volta` (12/ago) | **230 de 327 frames (70%)** | o card inteiro reduzido a 3,23 s de 10,9 s |

O código **já conhecia o estrago**: o comentário da [FIN-175] o descreve com nome e número. A reação
era gritar `⛔ SNAP GRAVE`. Gritar não devolve os frames — a mensagem some da tela do mesmo jeito, e
o aviso some junto, no meio de outros nove no rodapé.

**A causa não é o snap.** São dois subsistemas ilustrando a MESMA frase falada na MESMA trilha: o
espelho põe a cena de CTA (janela do montador) e a finalização põe o QR do clube (ancorado na menção
falada, `membrosAtSec`). Nenhum dos dois está errado sozinho, e nenhum sabe do outro.

**A saída já existia no mesmo arquivo**, usada só para o caso CONTIDO: promover o de cima para uma
trilha empilhada. Sobreposição de overlay é o que camada resolve — o QR é de canto, o card é de
tela, e os dois cabem juntos. Provado no XML regerado: `s117` voltou aos 10,90 s na V3 e o
`cta-qr-clube-alpha` subiu inteiro para a V6.

**A régua:** *o aparo pequeno é geometria; o grande é decisão editorial, e decisão editorial não se
toma em silêncio.* Aparo de 1–2 frames continua sendo aparo (criar trilha para ruído de
arredondamento encheria o projeto de camadas). Acima do limiar de grave, promove-se e **diz-se em
voz alta o que foi salvo** — senão o conserto resolve o problema e desaparece do relatório, e quem
abre o Premiere encontra uma trilha nova sem saber por que ela existe.

⚠️ E a contabilidade acompanha: promoção **não é snap**. Somá-la ao total devolveria "1 snap" para
uma peça que ficou inteira, que é o oposto do que o número existe para dizer.

---

## [FIN-184] · O ritmo do canal é 3–5× mais apertado que a referência de jornalismo — a régua é o que o Mateus PUBLICA

*12/ago/2026 · medido em DOIS vídeos, comparando o que o estúdio entregou com o que foi ao ar*

O `decupador` carrega uma regra bem fundamentada e com fonte: *"a pausa curta (0,7–1,5 s) aparece 2 a
3 vezes por minuto, e o silêncio acima de 1,5 s cerca de 1,5 vez por minuto — de propósito, para a
frase assentar"*. Ela vem do jornalismo audiovisual de referência, e é verdadeira **lá**.

**Não é o que este canal publica.** Rodando Scribe nos masters que o Mateus exportou do Premiere e
comparando vão a vão com o `words-final.json` do estúdio:

| | o estúdio entregou | ele publicou | encurtou |
|---|---|---|---|
| `quao-fundo-terra` (20:14) | 1263 s | 1214 s | **−50,4 s (4,0%)** |
| `mamute-de-volta` (18:48) | 1127 s | 1119 s | −9,9 s (0,9%) |

E o corte não é aleatório — tem uma forma só, idêntica nos dois:

| vão que o estúdio deixou | casos (quao / mamute) | ele deixou |
|---|---|---|
| 0,3–0,5 s | 218 / 174 | 0,27 s |
| 0,5–0,8 s | 64 / 30 | 0,42 s |
| 0,8–1,5 s | 13 / 3 | **0,43 s** |
| ≥ 1,5 s | 17 / 4 | **0,46 s** |

**Nenhum vão acima de 0,8 s sobrevive. Todos são esmagados para ~0,45 s, sem exceção, nos dois
vídeos.** O que sobra no ar é ~1,2 silêncio ≥0,6 s por minuto no `quao` e 0,75 no `mamute` — contra
os 3,5–4,5/min que a referência prevê.

**A régua, então:** *teto de 0,5 s para qualquer vão entre palavras, e ele vale inclusive para o que
parece pausa retórica.* A distinção "retórica fica / respiração sai" continua servindo para decidir
ONDE cortar dentro do vão, não SE corta.

⚠️ **E a diferença entre os dois vídeos é inteiramente a contagem de vãos longos deixados:** 30 no
`quao-fundo-terra` contra 7 no `mamute`. Não é que um tenha material pior — é que uma decupagem
deixou quatro vezes mais buraco que a outra. O número de vãos ≥0,8 s no `_cortes.json` é, por si só,
o indicador de qualidade da decupagem, e dá para medi-lo antes de renderizar qualquer coisa.

⚠️ **Sobre a faixa de 0,05–0,3 s, que soma 29,8 s: NÃO é edição.** São 0,025 s por vão em 1176
casos, e um frame a 30 fps vale 0,033 s. É arredondamento de re-encode. *Somatório grande feito de
parcelas menores que a resolução do sistema não é sinal — é ruído com cara de tendência*, e tratá-lo
como corte mandaria o decupador perseguir um efeito que não existe.

**Como isto foi obtido, porque o método vale mais que o número:** alinhamento por âncora de 4
palavras entre as duas transcrições (2.596 de 2.644 casadas). A primeira tentativa comparou por
ÍNDICE e produziu uma curva plausível e monotônica que eu quase reportei — só que as palavras nos
pontos de amostra eram diferentes (batiam só em "de"/"do"). *Curva suave não é prova de alinhamento;
a prova é conferir que os dois lados estão falando da mesma palavra.*

---

## [FIN-185] · Os capítulos do YouTube são os CARDS DE TÍTULO — o vídeo já declara a própria divisão

*12/ago/2026 · `mamute-de-volta` · correção do Mateus*

Montei a descrição do vídeo com **14 capítulos derivados do conteúdo** — li a narração inteira e
nomeei as viradas. Pareceu bom trabalho. O Mateus corrigiu em uma linha: *"os capítulos é pra ser
apenas onde tem os gaps de 3-4 seg"*.

Os gaps de 3–4 s **são os cards de título**, que a finalização materializa e o espectador vê na tela.
O vídeo já tem uma divisão em assuntos, declarada, desenhada e exibida. Derivar outra a partir do
texto cria **duas estruturas concorrentes para o mesmo vídeo** — a que o espectador lê na tela e a
que ele lê na descrição —, e a segunda é sempre a errada, porque é a que ninguém desenhou.

**No `mamute` eram 4 cards + o 00:00 obrigatório = 5 capítulos**, contra os 14 que eu inventara.

**Como achar os cards no vídeo QUE FOI AO AR** (não no plano, porque o Mateus reedita no Premiere):
os gaps de card **não aparecem como vão entre palavras** — eles têm trilha por cima, e o
`silencedetect` a −40 dB também não os pega. Quem os denuncia é o próprio Scribe, que escreve
`[vinheta]` / `[música]` / `[música suave]` exatamente ali. Confirmei cruzando com as âncoras que o
`finalizacao-config` declarou ("card-01 … antes de 'Antes de discutir'"), e as quatro bateram.

**O texto do capítulo é o do card, não uma paráfrase.** Ele está em `espelho.json`, no `titulo` do
segmento `card-NN-*` ("CARD 2 — Como se constrói um mamute"). Tirar o prefixo e usar o resto.

⚠️ E vale a regra do YouTube que nenhum documento desta casa registrava: **o primeiro capítulo tem de
ser `00:00`** ou a plataforma ignora a lista inteira; cada um precisa de **≥10 s**; e são **no mínimo
3**. Com 4 cards, o `00:00` completa o mínimo — com 2 cards não completaria, e aí a saída é não pôr
capítulo nenhum, não inventar um.

## [FIN-186] · O par de CTAs que ninguém comparava: o QR do clube contra o SELO que vem do ESPELHO

*12/ago/2026 · `mamute-de-volta` · laudo do qa-montagem, itens 6b e 7*

A [FIN-82] mandou parar de resolver dois selos na tela empilhando trilha, e o
`xml-premiere-5camadas.mjs` passou a **recuar o CTA de like** quando ele cruzava o QR do clube. Só
que a V3 recebe **três** famílias de peças, não duas: os CTAs do config, o QR + a cartela do
resolvedor, e — a esquecida — **as cenas do espelho que carregam canal alpha** (`cenasSelo`), que o
próprio gerador roteia para lá.

Quando a produção desenha a sua PRÓPRIA cena de convite ao clube, ela e o QR são ancorados na mesma
menção falada e caem juntas por construção. Medido: `v3-cta-clube` (33650→33935) sobre
`v3-81-s117-cta-membros` (33553→33880) = **230 frames (7,67 s) na tela ao mesmo tempo**, com o QR
cobrindo 42% da largura do selo — "CLUBE DE MEMBROS" lia-se "…E MEMBROS".

**O dedup tem de varrer a camada inteira, não os dois pares que alguém lembrou de escrever.**

⚠️ E o conserto tem uma armadilha: **a cartela de créditos NÃO acompanha o recuo do QR.** O código
dizia `cartelaAt = ctaAt + dCTA`, então mover o QR arrastava a cartela junto — e ela deixaria de ser
os últimos 20 s exatos ([FIN-12]), começando antes do fim do conteúdo com créditos rolantes opacos
por cima do final do vídeo. Quem recua é o selo de canto; a cartela mora na janela do composto.
Guarde a posição canônica ANTES do desvio (`ctaAtCanonico`) e ancore a cartela nela.

⚠️ Terceira armadilha, esta de régua: a folga de encaixe era **0,5 s de cada lado**, e o vão real
media 9,87 s para um QR de 9,50 s. O convite que cabia folgado foi **DESCARTADO por 0,13 s**. Folga
de gaveta reprova encaixe que cabe — a medida certa é o **frame** (2/FPS), porque o vão entre dois
selos é do tamanho que a edição deixou.

## [FIN-187] · O selo de like pousa no rodapé — e é lá que mora o crédito que a licença EXIGE

*12/ago/2026 · `mamute-de-volta` · laudo do qa-montagem, item 9*

O CTA de like/inscreva é plantado por **relógio** (`cfgFin.ctas` → `comGapF`), sem olhar o que está
por baixo. Em `s05-quem-era` ele ficou 6,00 s por cima da linha `anagoria · Wikimedia Commons ·
CC BY 3.0`, no rodapé esquerdo: com o selo, lia-se `anagoria · Wikime` e o resto sumia atrás da
pílula "DEIXA O LIKE".

Isso não é poluição de tela — é **descumprir a licença da foto**. Atribuição CC BY não é texto
decorativo, e ela não pode ser movida nem encurtada. Quem cede é o selo, que não tem word-lock de
palavra (a [FIN-11] cobra cobertura por REGIÃO, não o instante da menção).

A cena declara o crédito de forma legível por máquina — `data-qc-papel="credito"`, o mesmo marcador
do `qc-credito-fantasma` —, então o desvio é determinístico: empurre o selo para a primeira janela à
frente que caiba INTEIRA numa cena sem crédito.

⚠️ **A cena creditada não acaba no `at + dur` dela.** Cena aparada para fechar piscada de Bôco
([FIN-78]) deixa um `v2-hold-<id>` — um PNG do ÚLTIMO FRAME — cobrindo até a próxima cena entrar, e
esse frame congelado mostra a mesma tela, crédito incluído. Com o desvio pousando em `fim + 0,1 s` o
selo ainda pegava 1 frame do hold. **A borda segura é o INÍCIO DA PRÓXIMA CENA**, que é onde o hold
acaba por construção.

## [FIN-188] · Gate que procura só o `.mp4` acusa cena PRONTA e manda o vídeo para a estação errada

*12/ago/2026 · `mamute-de-volta`*

O `qc-cobertura-espelho` reprovou com *"2 sem CLIPE — HTML existe, só renderizar"*. As duas cenas
estavam prontas no disco: são selos com alpha (CTA e card do Clube), renderizados em ProRes 4444
como `<id>-4k.mov`, porque H.264 não carrega canal alpha. O `xml-premiere-5camadas` já os escolhe com
prioridade e os põe na V3 — só o gate procurava exclusivamente `-4k.mp4`.

**O estrago não é o número errado: é a instrução que ele imprime.** Quem lê "só renderizar" devolve
o vídeo para a estação de render, que não tem o que fazer porque o artefato existe, e a produção
fica em looping numa pendência inventada. *Gate que aponta a estação errada custa mais que gate
silencioso.*

O mesmo furo estava no `qc-clipe-legivel`, do outro lado: ele testava 80 dos 82 clipes e os 2 que
nunca abria eram justamente os `.mov` — entre eles o card de membros, **a última peça do vídeo**,
aquela cuja falha o espectador vê inteira. Testar só o formato comum deixa de fora exatamente a peça
que a régua da casa manda ter.

Os dois foram corrigidos para `-4k.(mp4|mov)`. Ao escrever gate novo que conte artefato de cena,
conte as DUAS extensões — a lista de formatos é a mesma que o gerador do XML usa.

### FIN-189 · Consistência entre dois derivados não é evidência — e o `_cortes.json` cru mente sobre o ripple (13/ago/2026)

O `dentro-do-sol` chegou ao QC com dois transbordos do `qc-espelho-cortes` (`s153`, `s154`) e a
suspeita registrada de que a despedida do Bôco — que a regra do decupador chama de **INTOCÁVEL** —
tinha sumido do word-lock. Levei três diagnósticos para chegar ao certo, e **os dois primeiros
falharam pelo mesmo motivo**: mediram derivados em vez de medir o arquivo.

**Erro 1 — alinhar dois textos.** Casar `words-final.json` com `words-limpo.json` palavra a palavra
dá um offset lindo: **272,255s com desvio-padrão de 0,0127s em 13 palavras consecutivas**. A
conclusão: a despedida começaria 0,41s DEPOIS do fim do master, logo teria sido cortada. É falso —
o `words-final` é justamente a peça deslocada, e o alinhamento herda o deslocamento sem um único
sinal de inconsistência. *Dois derivados da mesma peça quebrada concordam entre si e concordam com
o erro.* Só a medida FÍSICA decide: varredura de correlação de envelope sobre o áudio, **pico único
em 275,941s (r=0,9125)**, caindo a 0,80 a ±25ms. A despedida **está** no master, em 1183,26–1185,46,
com 1,07s de sobra.

**Erro 2 — somar o `_cortes.json` na mão.** Lido cru, ele declara 288,181s de corte contra 284,207s
realmente removidos (bruto 1470,741 − master 1186,534): uma divergência de 3,974s, que aponta
certeira para um corte de exatamente 3,90s marcado `classe:"riso-leve"` — o riso preservado em P&B.
Parece o culpado e não é. **`src/cortes.mjs` já resolve isso**: `ePreservado()` trata
`manter:true`, `classe:"riso-leve"` e `tratamento:"pb"` como não-corte, e `lerCortes()` devolve
`cortes` e `pb` separados. Pela via correta a conta fecha — 284,279s contra 284,207s, **0,072s de
divergência**. O decupador acertou o arquivo E o contrato; quem errou fui eu, por reimplementar uma
soma que tem dono importável.

**A causa real é um TERCEIRO relógio que ninguém declarou.** O gerador canônico
(`scripts/decupagem/words-final-derivado.mjs`) calcula
`FINAL = BRUTO − cortes + Σ gapSec dos cards` = 1470,803 − 284,279 + 12,000 = **1198,524s**, e nele
a despedida cai em 1195,28–1197,20. Mas o `_master-decupado.mp4` no disco tem **1186,534s** —
exatamente `1198,524 − 12,000`, os quatro cards de 3s que a régua soma e **o master materializado não
contém**. O `words-final.json` em uso (2584 palavras, fim 1186,46) foi truncado no comprimento do
arquivo e perdeu as últimas palavras reais; o derivado correto tem 2691.

**A régua:** nunca reimplemente a aritmética de cortes — `lerCortes()` de `src/cortes.mjs` é o dono,
e span preservado não é corte. E antes de acusar um artefato de estar deslocado, meça-o contra o
**arquivo**, nunca contra outro artefato da mesma cadeia.

**O conserto ficou no gate que já roda**, não num script novo que ninguém chamaria: o
`qc-espelho-cortes` agora confere `dur(master) == dur(bruto) − Σcortes + Σgaps` **antes** de aplicar
a lente TRANSBORDA, e a suprime quando a conta não fecha. É uma subtração, e ninguém a fazia — o
`_cortes.json` era lido como verdade e nunca conferido contra o arquivo que ele descreve. No
`dentro-do-sol` as duas reprovas viraram um alerta e o laudo passou a nomear a causa ("o master foi
materializado SEM os cards de título") em vez de mandar encurtar cena. Conferido em 4 outros
projetos: zero falso positivo.

⚠️ **Suprimir a lente é deliberado.** Um teto errado não produz veredito melhor por ser aplicado com
rigor — produz reprovação confiante na cena errada, e aqui o conselho impresso era destrutivo.
*Gate que mede contra uma régua que ele não conferiu não está protegendo: está emprestando
autoridade a um número que não olhou.* Irmãs: [FIN-44] (nome de campo não é prova de relógio),
[FIN-07] e [FIN-85] (o dono importável que três cópias ignoraram).

### FIN-190 · ⛔ REVOGADA no mesmo dia — a medição estava errada, não o `gapSec`. Superada pela [FIN-191]

> **Não aplique nada do que está abaixo.** Esta lei nasceu de uma medição que eu não conferi contra
> a aritmética do master, e o "conserto" que ela mandou fazer **cortou 0,467 s de narração** no XML
> entregue ao Mateus. O texto fica como registro do erro — apagá-lo esconderia como ele passou.
>
> O que ela chamou de "buraco real" era **silêncio audível**, que inclui o fade da voz nas bordas do
> corte. O vão inserido é 3,000 s exatos, e a conta do master prova: `682,11 − 107,00 + 12,00 =
> 587,11` contra o master de `587,13` (desvio 0,02 s). Com os 12,87 s que medi, o desvio ia a 0,85 s.
>
> Leia a **[FIN-191]**, que corrige e explica o que fazer.

#### Texto original da FIN-190, mantido como registro do erro — NÃO aplicar

O Mateus abriu o XML no Premiere e disse: *"os cortes estão COMPLETAMENTE errados, todos fora de
ordem"*. Estava certo, e a decupagem não tinha culpa — o Scribe v2 rodado no master decupado devolve
texto limpo de ponta a ponta, sem retake sobrando nem frase partida, e o `words-final.json` bate com
o arquivo (1390 × 1387 palavras, mesmo início e mesmo fim: 0,10s → 585,64s).

O defeito estava na **fronteira do card**. O `_cortes.json` declara `gapSec: 3` em cada um; o que o
decupador materializou no master, medido por `silencedetect` a −50 dB (o vão do card é silêncio
digital — `volumedetect` dá **−91 dB**, contra −32 dB na fala):

| card | declarado | real no arquivo |
|---|---|---|
| 1 | 3,00s | 3,000s |
| 2 | 3,00s | **3,363s** |
| 3 | 3,00s | 3,066s |
| 4 | 3,00s | **3,445s** |
| Σ | **12,00s** | **12,87s** |

Pular 3,000 s onde o buraco mede 3,445 s faz duas coisas ao mesmo tempo: deixa a sobra de silêncio
na V1 (fragmentos órfãos de Bôco, medidos em 0,07 · 0,30 · 0,63 · 0,30 s) **e adianta tudo que vem
depois**. O erro é CUMULATIVO, e como a V2 é posicionada pelo relógio do espelho — que também
acredita nos 3 s —, imagem e fala vão descolando até 0,87 s no fim do vídeo. Nenhum gate via: cada
peça estava coerente com a própria fonte, e a fonte é que mentia.

**O conserto é a régua da casa aplicada onde ela não estava:** *fato gerado vence fato escrito*. O
`xml-premiere-5camadas.mjs` agora MEDE o buraco (início e duração) e usa o `gapSec` só como âncora de
busca — a janela de ±2,5 s tolera a deriva dos gaps anteriores, e exigir ≥1,0 s de silêncio impede
que respiração ou pausa retórica sejam confundidas com vão de card. Sem master no disco (modo
`--base`) ou sem silêncio detectável, cai no declarado **e avisa em voz alta**, porque precisão que
não se pode medir é melhor anunciada como palpite.

⚠️ **O limiar importa e quase me fez errar o número.** O `silencios.json` do Scribe usa −40 dB e
`d=0,35`, e mediu 14,02 s de vão; a −50 dB, que é o limiar do silêncio materializado, são 12,87 s.
Reportei "2,02 s de deriva" antes de conferir, e a deriva real é **0,87 s**. *Duas medições do mesmo
arquivo com parâmetros diferentes não são a mesma medição — declare o limiar junto com o número.*

⚠️ **O que este conserto NÃO resolve:** sobram 4 fragmentos (0,07 · 0,07 · 0,27 · 0,47 s; eram 1,30 s
no total, agora 0,88 s). A causa é outra e continua aberta: o ponto onde o ESPELHO diz que o card
entra não coincide com a borda do buraco no ARQUIVO. Alinhar os dois relógios é mudança maior, e
está declarada aqui em vez de silenciada.

**Raiz e agente:** quem escreve `gapSec` é o `decupador`, e ele o declara em vez de medir o que
acabou de materializar. A doutrina dele passa a exigir que o valor gravado seja o MEDIDO no arquivo
que ele mesmo produziu — número inventado no papel apodrece na primeira vez que o encoder arredonda
um frame. Irmãs: [FIN-129] (o terceiro estado do relógio, que criou este caminho), [FIN-169] (span
preservado contado como corte — o mesmo sintoma de adiantar o vídeo, por outra porta) e [SIS-344]
(cada máquina com a sua verdade).

### FIN-191 · Silêncio AUDÍVEL não é vão INSERIDO — e uma medição que contraria aritmética exata está errada até que um TERCEIRO caminho a confirme (13/ago/2026, `galaxia-arco-flecha` · supera a [FIN-190])

De manhã escrevi a [FIN-190] afirmando que o `gapSec: 3` do `_cortes.json` mentia, porque o
`silencedetect` a −50 dB media 3,06 · 3,36 · 3,07 · 3,44 s nos quatro vãos de card. Pus o gerador de
XML para medir em vez de ler. **O conserto virou o defeito:** ele passou a pular 3,467 s onde o vão
tem 3,000, e o XML que foi para o Mateus **cortou 0,467 s de narração** num ponto, 0,367 s noutro.

**A prova de que o declarado estava certo é a aritmética do master — e ela sempre esteve disponível:**

| projeto | fim do bruto − Σcortes + gap | master real | desvio |
|---|---|---|---|
| `galaxia` com o DECLARADO (12,00 s) | 587,11 s | 587,13 s | **0,02 s** ✓ |
| `galaxia` com o que MEDI (12,87 s) | 587,98 s | 587,13 s | 0,85 s ✗ |
| `cerebro` com o DECLARADO (15,00 s) | 1105,98 s | 1105,97 s | **0,01 s** ✓ |

O decupador insere **3,000 s exatos** de preto e silêncio. O `silencedetect` mede mais porque a fala
já vem baixando antes do corte e ainda não subiu depois: o **fade** entra na conta do silêncio e não
faz parte do vão. *Dois fenômenos que se sobrepõem no tempo não são o mesmo fenômeno, e o instrumento
não sabe distingui-los — quem distingue é a régua de fora.*

**A regra que sobra, e vale para qualquer medição:** quando um instrumento contradiz uma aritmética
exata, a suspeita recai sobre o instrumento. E a confirmação precisa vir de um **terceiro caminho** —
não de repetir a mesma medição com outro parâmetro. Eu tinha medido a −40 dB (14,02 s) e a −50 dB
(12,87 s), vi que davam números diferentes, escolhi o "mais conservador" e segui: duas leituras do
mesmo instrumento não se auditam. Quem desempatou foi a conta `bruto − cortes + gap = master`, que é
independente e fechava em 0,02 s.

⚠️ **O que o `silencedetect` continua servindo para:** achar ONDE o vão começa (o instante em que a
fala para é real) e ALARMAR quando o silêncio destoa mais de ~1 s do declarado — aí pode ser vão
materializado fora do padrão, e um humano olha. **Nunca para corrigir o tamanho sozinho.**

⚠️ **Sinal de alerta que ignorei por horas:** a auditoria da cadeia acusou `aritmética fora: 37,8 s`
no `cerebro` logo depois do meu conserto, e minha primeira reação foi calibrar a auditoria em vez de
desconfiar do conserto. *Quando um gate acusa logo depois de você mexer em algo, o suspeito é o que
você mexeu.* Irmãs: [FIN-129] (o terceiro estado do relógio), [FIN-169] (span preservado contado como
corte) e [SIS-276] (o denominador é a primeira coisa a conferir).

---

### FIN-192 · Renomear o arquivo defeituoso não impede que ele volte; a trava tem de estar em quem PUBLICA

Em 13/ago/2026 alguém detectou que o master decupado do `dentro-do-sol` estava defeituoso, marcou-o
com o sufixo `.FURADO`, e **produziu um master novo e correto**. O diagnóstico estava certo, o
conserto foi feito, e o vídeo saiu errado assim mesmo.

Medido por CRC32C no bucket:

```
_media/_master-decupado.mp4          →  YmJlxg==   ← o que a produção lê
_media/_master-decupado.FURADO.mp4   →  YmJlxg==   ← o marcado como defeituoso
```

**O mesmo arquivo, com dois nomes.** O furado subiu ao caminho de produção às 20:02 e foi ele que
recebeu 121 renders de cena e um XML de 145 referências. O master bom (1198,53 s contra 1186,53 s
do furado; 2691 palavras contra 2584; **2 defeitos de decupagem contra 27**) ficou no disco da
`estudio-top10` e nunca subiu.

**Por que o sufixo não protegeu nada:** ele é uma anotação para humano. Nenhum script compara o
que sobe com o que foi marcado, nenhum gate pergunta *"existe uma versão deste arquivo marcada como
ruim?"*, e um `cp` ou `rsync` para o nome canônico apaga a distinção em silêncio. *Marcação sem
trava é um bilhete colado no arquivo errado — ele viaja junto e não impede nada.*

**A regra:** quando um artefato for identificado como defeituoso, o gesto não é renomeá-lo; é
**tirá-lo do alcance** (`arquivo-morto/`, fora do prefixo que a produção lê) e, se ele precisa ficar
para comparação, deixar quem publica capaz de recusá-lo — hash em lista de bloqueio, ou uma prova
de qualidade que o candidato tenha de passar antes de virar canônico.

E a régua que teria pego este caso sem lista nenhuma: **o master em produção tem de ser o que o
`words-final.json` descreve, e o texto dele tem de passar no `qc-decupagem-final`** — 27 defeitos
reprovam, 2 passam com aviso. Um gate de CONTEÚDO não se importa com o nome do arquivo.

*Diagnóstico correto sem trava correspondente produz exatamente o mesmo resultado que não ter
diagnosticado — só que com a impressão de que o problema foi tratado.* Ver [[SIS-372]], [[SIS-358]].

---

### FIN-193 · O remapeamento das cenas é da DUBLAGEM, não da entrega PT-BR

Quando o master é recortado **depois** da arte estar pronta — o dono ajustando a decupagem no
Premiere, um retake que escapou e foi cortado à mão —, a reação natural é remapear as cenas para o
relógio novo na hora. **Não se faz isso.**

O entregável PT-BR é o XML de 5 camadas ([FIN-45]), e quem monta é um humano com a timeline na
frente: ele vê o corte, arrasta o que precisa e resolve o alinhamento em segundos. Remapear ali
gasta máquina, reabre todas as cenas para verificação e conserta um problema que já tem dono.

O remapeamento se faz **quando a dublagem começa** (`docs/SPEC-DUBLAGEM.md`, etapa 0), e aí é
obrigatório: as versões por idioma são montadas **sem humano no caminho**, então cena fora do
relógio entra deslocada pela soma dos cortes anteriores e ninguém percebe até o vídeo estar no ar.

Fixada pelo Mateus em 14/ago/2026, ao refazer ele mesmo a decupagem do `dentro-do-sol` a partir do
MUX: *"não rode o remapeamento — deixe para rodar quando formos fazer a dublagem deste vídeo, e
isso deve ser uma regra"*.

*O que um humano conserta na timeline não precisa ser consertado no arquivo; o que vai virar vídeo
sem humano precisa.* Ver [[FIN-45]], [[SPEC-DUBLAGEM]].

---

### FIN-194 · O MUX entregue ao dono precisa do preto ESMAGADO — hoje ele sai cru e a correção é manual

Quando o dono pede "o MUX", ele quer o vídeo sincronizado **já com o fundo do estúdio em preto
puro** — a correção que faz a imagem do Bôco compor limpa sobre as cenas. Fixado por ele em
14/ago/2026, depois de receber o MUX cru: *"eu quis dizer que queria o MUX já com o filtro preto
aplicado sobre o vídeo do Bôco, e acabou vindo sem"*.

**O estado hoje, medido:** o `source-sincronizada.mp4` do `dentro-do-sol` tem o fundo em
**YAVG 5,4 de 255** (pico 9), estável em três pontos ao longo dos 20 min — o mesmo que o
`CATALOGO-MODELOS` mediu no `ceuta` (4,5–6,1). E **nenhuma correção existe no pipeline**: um `grep`
por `colorlevels`, `blackpoint` e equivalentes em todo o repositório não devolve nada. O MUX sempre
saiu cru, e a correção vinha sendo feita à mão no Premiere.

⚠️ **Não confundir com a VINHETA**, que o `CATALOGO-MODELOS` §320 manda manter fora do master
(*"a vinheta mora na CENA, nunca no master"*) — aquilo é o escurecimento de borda que acompanha o
deslocamento do vídeo numa cena específica. Isto aqui é outra coisa: nivelar o preto do CENÁRIO, que
é propriedade do material e não da composição.

⚠️ **Nem com o P&B da [FIN-28]**, que dessatura trechos de erro engraçado dentro do capítulo.

✅ **A CAPACIDADE EXISTE DESDE AS 02:31 DE 14/ago/2026: `scripts/decupagem/esmagar-preto.sh`.** Ele
baixa o MUX cru do bucket, mede o preto ANTES em três pontos, aplica
`colorlevels=rimin/gimin/bimin=0.03` (folga sobre os 5,4 medidos e sobre o pico de 9), re-encoda em
CRF 16 · preset slow · yuv420p, mede o preto DEPOIS, **recusa entregar se a duração mudar** e sobe
como `source-sincronizada-preto.mp4`, conferindo byte a byte. O disparo está declarado no passo 2c
de `scripts/estudio/estacoes/decupagem.md`.

⚠️ *Este parágrafo dizia "a capacidade não existe" até 14/ago 05:58 — 34 minutos depois de ela ser
construída, e por mais quatro horas.* **Lei que declara ausente o que já está no disco é mais cara
que lei nenhuma:** ela não deixa de informar, ela INSTRUI a reconstruir — e aqui o que ela mandaria
refazer é um re-encode 4K de preset slow, horas de VM. Quem escrever "a capacidade não existe" numa
lei, escreva junto o `grep` que a próxima sessão roda para desmentir.

*Enquanto o disparo não for automático, quem entrega o MUX ao dono roda o script — e MUX cru não é
entrega.* Ver [[FIN-28]], [[CATALOGO-MODELOS §320]].

### FIN-195 · A FRONTEIRA DO ESCOPO SE DERIVA DO RASTRO DE PRODUÇÃO, NUNCA DE UMA DATA — E O RASTRO SE ESCOLHE A DEDO (14/ago/2026)

Um gate que julga "o que existe no canal" precisa saber **o que este estúdio produziu** — porque o
canal é mais velho que o sistema. Sem essa fronteira, ele cobra de vídeos antigos um artefato que
nunca existiu, e cada alarme falso ensina a ignorar o gate justamente quando ele acerta.

**MEDIDO em 14/ago/2026**, no `qc-entrega-completa`: **20 dos 56 vídeos no ar** reprovavam. Depois
de separar o que é dívida real do que é fora de escopo, sobraram **5**. Os outros 15 se dividiam em
dois grupos, e nenhum era defeito:

- **9 tinham o artefato, mas no lugar errado** — 670 clipes 4K vivendo só no `macbook-backup`, o
  espelho que a doutrina manda tratar como descartável. Copiados para a entrega (server-side, mesmo
  bucket: 9,4 GB em 6 s) e o espelho limpo depois da prova arquivo a arquivo.
- **10 nunca passaram por esta casa** — compilados, repost e vídeos anteriores ao sistema. (Mateus:
  *"o gate de XML como entregável é para o que foi produzido do zero por essa casa, mas o canal em
  si tem muitos conteúdos anteriores a essa casa, que já foram produzidos e eles obviamente não têm
  nenhum XML"*.)

**A lei:** *a fronteira do escopo se DERIVA do rastro, nunca de uma data de corte.* Data envelhece,
precisa ser mantida à mão e erra nos dois sentidos — vídeo antigo refeito aqui e vídeo novo trazido
de fora. O rastro é o artefato que só esta casa fabrica: o espelho, o roteiro, o plano, o conceito
visual, o clipe 4K. Quem não tem nenhum deles não foi produzido aqui, e não se cobra dele o que
nunca teve.

**⚠️ E O RASTRO PRECISA SER ESCOLHIDO A DEDO, senão ele isenta de menos ou de mais.** `meta/` parecia
o sinal óbvio e está errado: o `top10 acervo indexar` copia `transcript.txt`, `words.json` e
`audio.json` para TODO vídeo publicado do canal — é ingestão, não produção. Medido: o `via-lactea`
tem exatamente esses três e nada mais (não passou por aqui), enquanto o `chico-xavier` tem
`roteiro.md`, `roteiro-narracao.txt` e `plano-roteirista.json`, que só a estação 0 escreve (passou).
Usar `meta/` cru mantinha o `via-lactea` sendo cobrado; usar só a lista de produção isenta ele e
mantém o `chico-xavier`. *Num sinal de pertencimento, a pergunta certa não é "existe o arquivo?" e
sim "quem é capaz de tê-lo escrito?"*

**E a isenção DECLARA, não cala.** O laudo mostra `○ fora-do-escopo` com o motivo, ao lado das
reprovas. Gate que silencia sozinho encolhe até não proteger mais nada, e ninguém percebe — porque
o silêncio dele é idêntico ao sucesso.

### FIN-196 · TÓPICO DE VÍDEO MONOGRÁFICO NÃO SE INTERCALA — O VÍDEO INTEIRO É A UNIDADE, E O FORMATO SE DECLARA (14/ago/2026)

Nem todo "tópico" é a mesma coisa, e tratar os dois tipos igual destrói o material melhor que a casa
tem.

**A distinção (Mateus, 14/ago/2026):** *"Esses vídeos que falam de um assunto só, como é do Sol e do
galáxia arco e flecha, eles devem começar do início (introdução) até o último tópico (antes da
finalização), SEM SEREM CORTADOS. Não precisa intercalar tópicos com estes. Os tópicos que são
intercalados é quando um tópico é um assunto fechadinho… existe diferença de tópico de um vídeo que
É um assunto só, e tópicos de vídeos que são listas soltas (uma curiosidade por tópico)."*

- **MONOGRÁFICO** — uma tese desenvolvida do começo ao fim. Os "tópicos" são **capítulos de um
  argumento**: tirar um do meio quebra o fio, e intercalá-lo com outro assunto destrói a leitura.
  Entra no compilado como **um bloco contínuo**, da abertura ao último capítulo, antes da finalização.
- **LISTA** — uma curiosidade por tópico, cada uma fechada em si. Aí sim os tópicos viajam sozinhos e
  se intercalam à vontade: é para isso que existem.

**MEDIDO no acervo de espaço, no dia da decisão:** dos 12 vídeos-fonte da proposta, **11 eram
monográficos** ("Ponto Nemo", "WASP-193b", "O Grande Atrator", "O que existe dentro do Sol") e **1
era lista** ("Como seria morrer em todos os planetas?", um planeta por tópico). O montador tratava os
12 igual e produzia **128 fragmentos** onde deviam existir 8 blocos inteiros e alguns itens avulsos.

**A lei:** *antes de picar um vídeo em tópicos reaproveitáveis, pergunte se ele É um assunto ou se
ele LISTA assuntos.* No primeiro caso o vídeo inteiro é a unidade; no segundo, o tópico é.

**⚠️ E ISTO SE DECLARA, NUNCA SE ADIVINHA.** A diferença é editorial, não sintática: *"Como seria
morrer em todos os planetas?"* e *"O que existe dentro do Sol?"* têm títulos da mesma forma —
pergunta aberta — e formatos opostos. Nenhum regex de título separa os dois; quem separa é quem
assistiu. Por isso o formato mora numa marca com data e autor (`video_formato`), e o que ninguém
classificou aparece **como não classificado**, tratado pelo caminho antigo, em vez de ser chutado em
silêncio.

**O corolário mecânico, que custou uma volta:** bloco inteiro não cabe "quase". O laço de montagem
só conferia o alvo ANTES de cada peça — inofensivo com trechos de 1–2 min, e estourador com blocos
de 20: a primeira proposta deu **3,25 h para um alvo de 3 h** (+8,3%), fora da tolerância de ±5%.
Cortar o bloco para caber é exatamente o que a decisão proíbe, então quem não cabe **cede a vez ao
próximo**, que pode fechar melhor. Com isso: 3,01 h, desvio de 0,4%.

### FIN-197 · O ENTREGÁVEL DO COMPILADO É O XML, NÃO O COMPOSTO — ELE É ORDEM DE LEITURA, NÃO PIXEL NOVO (14/ago/2026)

Um compilado não produz pixel novo: ele é uma **ordem de leitura** sobre material que já foi ao ar.
Expressar isso encodando 3 h reencoda tudo, custa horas de máquina sob demanda e entrega um vídeo
FECHADO — quando o entregável PT-BR desta casa é o XML que o dono reabre no Premiere.

**A decisão (Mateus, 14/ago/2026):** *"Eu não quero que você encode os vídeos, e sim que você crie o
XML com eles um do lado do outro apenas, e com os cards também de compilado que você normalmente já
faz."* E, sobre a linha inteira: *"já mude o motor do compilado para ser xml entregável, e não
encode."*

É a MESMA régua que a [FIN-45] já tinha fixado para o vídeo normal em 07/ago, chegando ao compilado
sete dias depois: **onde existe editor humano na pós, entrega-se o PROJETO; onde não existe,
entrega-se o VÍDEO.** O compilado PT-BR tem o Mateus abrindo o Premiere; os idiomas dublados não têm
ninguém, e por isso o composto continua vivo lá — agora atrás de `--composto`, exceção declarada em
vez de padrão.

**O que muda na prática:** o `compilar.mjs` deixa de encadear `corte-base → compor-overlays →
_montado.mp4` e passa a `gate → cards → planos → XML`. Cada trecho vira um `clipitem` com `in`/`out`
no arquivo-fonte e `start`/`end` na timeline; nada é recomprimido, e a ordem ainda pode ser mudada
por quem edita — que é justamente o que um compilado precisa, porque a curadoria fina é julgamento e
julgamento se revisa.

**⚠️ E O XML TEM DE CARREGAR OS CARDS, senão ele "abre" e está vazio.** Esta casa já pagou por isso:
no `compilado-previsoes-jiang` o XML saiu válido, com V1, V2 e A1 — e **sem os 34 cards de título e
sem as 34 transições**, com os 34 `.mov` prontos no disco. Nenhum gate pegou, porque o arquivo abria;
quem pescou foi o Mateus, à mão. Por isso o gerador declara em voz alta quantos cards entraram, e
acusa quando entram zero.

*A régua geral, e ela vale além do vídeo: quando o produto é uma DECISÃO sobre material existente,
entregue a decisão — não uma nova cópia do material com a decisão embutida.*

### FIN-198 · A faixa do apresentador estava ESCRITA na receita e ninguém a MEDIA — dois vídeos saíram com o dobro do teto, com a arte já renderizada (14/ago/2026, estação DECUPAGEM, agente-raiz `montador`)

**O que aconteceu.** O Mateus perguntou por que o `energia-escura` continuava no perfil antigo de
30–35% de apresentador em tela. Medido nos seis projetos com espelho vivo, a separação é de dois
regimes, não um gradiente:

| projeto | apresentador em tela | espelho nasceu |
|---|---|---|
| `energia-escura` | **36,4%** (gate mede 43,7% de ocupação) | 07/ago |
| `nilo-nao-secou` | **30,6%** (gate mede 29,4%) | 05/ago |
| `planeta-em-meteorito` | 17,3% | — |
| `uruguai-despovoado` · `especies-humanas` · `quasares-primordiais` · `orcas-nao-matam` | 9,4–12,4% | — |

**O que NÃO explica.** Não é o caso da [FIN-69] (`paises-baixos-mar`, montado sob a régua antiga e
reprovado por uma que veio depois). A cronologia é o contrário:

- **24/jul** — `scripts/qc-tempo-apresentador.mjs` já existe;
- **31/jul** — a [FIN-47] devolve a faixa a 10–15% **e escreve isso no passo 8 da receita**
  `scripts/estudio/estacoes/decupagem.md`, com o dono único em `infra/faixa-apresentador.json`;
- **05/ago e 07/ago** — os dois espelhos nascem, com a instrução na tela do agente, e saem em 30,6%
  e 36,4%.

Também não é doutrina que não chegou: o `montador.md` cita a faixa, o `decupador.md` a lista no
checklist (item 9), e a receita a diz por extenso, com o número certo e a proibição de copiá-lo.

**A causa.** Os gates que a receita chama depois do espelho — 8a (cabe nos cortes), 8b (relógio
certo), 8c (juntas palavra a palavra) — medem outra coisa. **Nenhuma das 13 receitas de estação
chamava o `qc-tempo-apresentador`.** A régua foi DITA ao agente e nunca CONFERIDA por ninguém.

*Instrução lida não é instrução cumprida. Regra sem verificação automática é seguida quando alguém
lembra — e aqui o montador não lembrou duas vezes seguidas, com cinco e sete dias de folga sobre a
lei.* É o mesmo padrão que esta casa já registrou nas linhas vizinhas da própria receita do espelho
(*"ele existia desde 05/ago e ninguém o chamava"*, *"este existia e ninguém o chamava"*) — a
terceira ocorrência, agora no gate mais caro de todos.

**O custo, e por que ele é assimétrico.** O gate roda ANTES da arte, onde reprovar custa reescrever
um JSON. Ninguém o rodou, e os dois chegaram com **30 e 41 clipes 4K renderizados e pagos** — que
não se aproveitam num vídeo que muda de proporção, porque mudar a fatia do apresentador é reescrever
quais trechos viram cena. Decisão do Mateus em 14/ago: **os dois vão ser refeitos**, e as cópias no
Mac foram apagadas depois de conferência arquivo a arquivo contra o bucket.

**O conserto (aplicado).** O gate virou passo nas duas receitas que produzem espelho — `8bb` em
`decupagem.md` e `4b` em `espelho.md` —, como GATE DURO, lendo a faixa de `infra/faixa-apresentador.json`.

**A régua que fica:** *toda régua numérica escrita numa receita precisa do gate correspondente
chamado NA MESMA receita, no passo seguinte.* Número em prosa é briefing; número medido é gate. Se a
receita diz um valor e não manda medi-lo, ela está pedindo boa vontade — e boa vontade não é
verificação. Ao escrever uma faixa nova em qualquer receita, o commit que a escreve é o mesmo que
pendura o gate.

**⚠️ E a segunda perda, que é de registro:** o Mateus havia autorizado refazer o espelho do
`energia-escura` antes. Essa permissão não existe em lugar nenhum que um agente leia — a linha dele
na fila não tem `notas`, nem `bloqueio`, nem entrada em `_feedback-queue.jsonl`. *Decisão do dono
que não vira campo na fila morre na sessão em que foi dita*, e a sessão seguinte recomeça sem ela.

### FIN-199 · A [FIN-164] RESOLVEU O RELÓGIO NA ENTRADA — MAS SÓ NUMA DAS DUAS PORTAS (15/ago/2026, `senna`, estação TRILHA, agente-raiz `scripts/branding/overlays.mjs`)

A [FIN-164] fechou o defeito "dois relógios dentro do mesmo arquivo" no `overlays.mjs` e escreveu a
doutrina em voz alta: *"o relógio se resolve na ENTRADA, uma vez"*. Ela converteu **uma** das duas
entradas. O ramo que lê `_blocos.json` continuou pegando `tlIni`/`tlFim` crus — e `tlIni` é o
relógio **FINAL**, coisa que o `trilha/escolher.mjs` afirma no próprio código ao decidir o carimbo
do plano (`temTl ? "FINAL" : "BRUTO"`).

Então o `_overlays-branding.json`, cujo contrato é BRUTO, voltou a sair com dois relógios: CTAs em
bruto (vêm do `words.json`) e T1/T2 em final (vêm dos blocos). Medido no `senna`, com 296,3 s de
corte: a última T2 saiu em **1228,0 s** contra os 1457,4 s que a fronteira ocupa no bruto — 229 s de
erro, que a ponte ainda remapeia mais uma vez, para longe.

**Por que passou tanto tempo:** as duas contas COINCIDEM no começo do vídeo. Aqui a T1 da primeira
fronteira deu 60,2 s pelos dois caminhos, e o CTA vizinho deu 60,3 s — o log parece perfeito na
linha que se lê primeiro. *Erro de relógio não aparece no início; ele abre com o tempo.*

**A régua que fica:** quando uma lei diz "resolvo X na entrada", o commit que a aplica tem de
enumerar **todas** as entradas. Doutrina aplicada a uma porta só não é doutrina — é o caso
particular que passou pelo teste.

**⚠️ E o valor CONVERTIDO ganha do valor MEDIDO, o que é contraintuitivo.**

O conserto foi escrito primeiro preferindo `masterIni`/`masterFim` — o bruto declarado, que no
`senna` eu tinha medido palavra a palavra na transcrição da gravação. A medição desmentiu: com
`masterIni`, as 10 transições saíram **0,6–5,4 s adiantadas** da fronteira, enquanto a trilha — que
nasce em FINAL e volta a FINAL pela mesma tabela de vãos — fechou em **Δ 0,00 nas dez**. Invertida a
preferência para `paraBruto(tlIni)`, as transições passaram a errar no máximo **0,14 s** (4 frames)
do alvo.

A ponte não pergunta de onde veio o número: faz `LIMPO = bruto − ripple` e o consumidor devolve
`FINAL = LIMPO + gaps`. Só o valor que entrou por `paraBruto` sobrevive à ida e à volta, porque é a
MESMA tabela desfazendo a MESMA conta. *Numa cadeia de conversões, o valor que fecha o circuito
vence o valor fisicamente medido.* Quando os dois discordam, é sinal de que a tabela diverge do
arquivo — no `senna`, `gapSec: 3` contra buracos reais de ~6,3 s medidos nos silêncios do
`words-final.json` — e aí o mínimo exigível é que trilha e transições **errem JUNTAS**, no mesmo
relógio, em vez de cada uma no seu.

### FIN-200 · O CONSERTO DA [FIN-166] CANCELOU O RIPPLE-DUPLO E DEIXOU O RESTO — OS GAPS DE CARD (15/ago/2026, `senna`, estação FINALIZAÇÃO, agente-raiz `scripts/xml-premiere-5camadas.mjs`)

A [FIN-166] pegou o espelho FINAL passando pelo ripple BRUTO→LIMPO uma segunda vez e consertou com
`limpoEsp = limpo(paraBruto(t))`. No `ceuta` o erro caiu de **−440 s** para o que parecia zero, e a
lei foi escrita. Não era zero: era **−30 s**, pequeno demais ao lado de sete minutos para alguém
olhar duas vezes. *Conserto que derruba a ordem de grandeza do erro compra o direito de não ser
medido de novo — e é aí que o resto sobrevive.*

**O que sobrou.** `limpo()` entrega o relógio LIMPO, e o LIMPO **não existe como arquivo**. Quem vai
na V1 é o `_master-decupado.mp4`, e o `scripts/decupagem/master-decupado.mjs` MATERIALIZA os gaps de
card dentro dele (preto + silêncio; a aritmética que ele próprio imprime é `bruto − Σcortes +
Σgaps`). O arquivo fala FINAL. Mandar a cena para LIMPO a adianta pela soma dos gaps anteriores.

**A discordância é entre dois donos, e é literal:** `src/relogio-espelho.mjs` conhece `gapSec`
(`vaosDeCard`); `grep gapSec src/cortes.mjs` volta **VAZIO**. O dono do ripple não sabe que os
buracos existem, então `mapSecFactory` devolve um relógio que o master não tem.

**Medido:** `s88-30-anos-depois-nosso-pais` entrava em **1349,53 s** contra os **1379,53 s** do
espelho — **−30,00 s exatos**, os 10 gaps de 3 s do vídeo. A âncora dela ("Mais de trinta anos
depois daquele primeiro de maio") está em **1379,94 s** no `words-final.json`. A arte entrava meio
minuto antes da fala que ilustra, com todos os gates verdes.

**Por que passou:** os 4 primeiros segmentos batem EXATO, porque estão antes do primeiro vão
(54,34 s). Quem confere a primeira cena vê 0,00 de desvio e para. O erro nasce no primeiro card e
cresce em degraus de 3 s — a mesma assinatura da [FIN-199] na trilha, no mesmo vídeo, no mesmo dia.

**A régua que fica, e ela é mais simples que a conversão que substitui:** espelho em FINAL foi
escrito CONTRA o `words-final.json`, que é a transcrição do arquivo que vai na V1. Mesmo arquivo,
mesmo relógio ⟹ **identidade**. Converter é que era o defeito. `ESPELHO_JA_BRUTO` preserva o
caminho antigo, e projeto anterior a 06/ago não sente nada.

**O que isto deixa em aberto (não conserte no escuro):** `src/cortes.mjs` continua sem saber de
`gapSec`, e o `finalizacao-config.mjs` — a ponte — ainda entrega LIMPO. A [FIN-199] declara o
contrato que fecha o circuito ("o consumidor devolve `FINAL = LIMPO + gaps`"), então quem consumir
a ponte tem de somar os gaps de volta. Mexer no `mapSecFactory` para embutir isso quebraria o
`master-decupado.mjs`, que usa `keepsDe` para montar o arquivo e soma os gaps por fora — é decisão
do Mateus, não de sessão.

### FIN-201 · O GATE DO APRESENTADOR CALCULAVA O RELÓGIO CERTO E LIA O ARQUIVO DE FALA ERRADO (15/ago/2026, `planeta-em-meteorito`, estação ARTE, agente-raiz `scripts/qc-tempo-apresentador.mjs`)

**O que aconteceu.** O `qc-tempo-apresentador` detecta o relógio do espelho na linha 185, guarda em
`RELOGIO`, **imprime a decisão na primeira linha da saída** (*"relógio do espelho: FINAL — os cortes
JÁ estão aplicados no arquivo, não desconto de novo"*) — e depois abria `words.json` **fixo** para o
alerta de explicação descoberta. As janelas vinham do espelho, em tempo FINAL; a fala vinha do
BRUTO, deslocada pela soma dos cortes.

**Medido.** Na janela do CTA (`@689,5s`, 37,3s) o gate acusou *"cobre 3 dado(s) falado(s) [2026,
2026. 2026,]"*. A fala real dali, no `words-final.json`, é a chamada de encerramento — *"deixa o
like, senta o dedo nesse bicho aí e se inscreve no canal […] vem fazer parte do nosso clube de
membros"* — **zero tokens numéricos**. Os três "2026" são a fala do estudo, ~25 s antes no relógio
bruto. Contagem na mesma janela: `words.json` = 3, `words-final.json` = 0. O piso do alerta é 3, ou
seja, o falso positivo nasceu exatamente em cima do gatilho.

**Por que é grave num alerta que nunca reprova.** O conselho que ele imprime é *"cubra com cena"* —
mandar desenhar arte, na cota mais escassa da casa, para tapar um dado que não existe naquele
trecho. E o alvo apontado é o CTA: a única janela do vídeo onde cobrir com arte seria errado.
*Alarme falso ensina a ignorar o aviso certo* — a mesma lição do `xml5` (vão longo julgado por
fração de fala) e da [[aviso-de-cauda-cruza-relogios]].

**O conserto.** Uma linha: o arquivo de fala segue o `RELOGIO` que o próprio gate acabou de
calcular (`RELOGIO === "final" && temFinal ? "words-final.json" : "words.json"`). Calibrado dos dois
lados, como manda a [FIN-69]: `planeta-em-meteorito` (FINAL) perdeu o alerta falso e manteve o FAIL
real de teto; `especies-humanas` (sem `words-final.json`, −946 s de corte) segue idêntico, PASS a
12,9%.

**O cheiro que denuncia, e ele é procurável.** Um script que **calcula** qual relógio vale, e mais
abaixo abre um arquivo de fala por nome literal. O `grep` que acha a família:

    grep -n 'words\.json"' scripts/*.mjs | grep -v words-final

Onde o mesmo arquivo também define `RELOGIO`/`temFinal`, há um candidato. Detectar o relógio e não
propagá-lo até o último leitor é meia correção — e a metade que falta é a que fala com o operador.

### FIN-202 · O MASTER JÁ TRAZIA O BURACO DO CARD E O GERADOR ABRIA OUTRO — 11,93s DE PRETO NA ENTREGA (15/ago/2026, `quasares-primordiais`, estação FINALIZAÇÃO, agente-raiz `scripts/xml-premiere-5camadas.mjs`)

**O que aconteceu.** O `_master-decupado.mp4` **materializa** cada `gapSec` de card como preto e
silêncio dentro do arquivo — o vão do card não é uma ideia no plano, é um trecho do vídeo. O gerador
do XML não sabia disso e abria o buraco DE NOVO na timeline: com o espelho em relógio FINAL (que já
contém os vãos), o `limpoEsp` virou IDENTIDADE e o `c.at = comGapF(...)` logo abaixo somou os gaps a
um relógio que já os tinha. Cada cena depois de um card entrava 3 s adiante do buraco que devia
cobrir, e o que ficava na tela era o preto do master, com o logo da V4 por cima.

**Medido.** V1 com **26634f (887,80s) de timeline consumindo 26274f (875,80s) de arquivo — +12,00s
exatos, 4 × 3,00**. As quatro emendas saíam COLADAS no arquivo (`out=759 → in=759`), isto é, o
pedaço seguinte ABRIA dentro do preto. Na tela: 28,30→31,27 · 191,90→194,90 · 338,80→341,77 ·
503,80→506,80s. O `blackdetect` no master acha os quatro buracos de **3,000s exatos** em 25,267 ·
185,900 · 329,767 · 491,800 — as posições dos cards —, e um frame extraído em 26,5s é preto puro.

**A contradição estava à vista, escrita pelo próprio arquivo.** O `Math.max` que classifica o
master compara o fim do espelho com `narracao.fim`, e o comentário de lá diz que a base de
comparação "é limpo SEM gaps". Com a identidade, o primeiro termo falava FINAL e o segundo LIMPO —
**dois relógios dentro do mesmo `max`**. Era isso que fazia o candidato "limpo" ganhar por 1,07s de
"com-gaps" (10,93s) e o caminho `masterComGaps`, que existe e sabe pular os buracos, nunca rodar.
*Quando um `max`/`min` mistura duas grandezas, o vencedor não é o maior: é o que está na unidade
errada.*

**O conserto.** `limpo(paraBruto(t))` — a inversa exata do `comGapF` que vem depois, e que se
auto-desliga onde não há vão (sem `vaosDeCard`, `paraBruto` é o inverso puro do ripple e a
composição devolve `t`). O caso que ela não cobre sozinha é **vão declarado com card SEM clipe
renderizado**: ali o buraco existe no arquivo, ninguém o reabre e nada o cobre. Era o estado do
`senna`, e foi diagnosticado como erro de relógio — o conserto de lá (`de2cd1cf`) pôs a identidade e
criou esta dupla contagem para todo vídeo COM cards. Agora tem aviso próprio, porque **a raiz dele é
RENDER, não relógio**.

**Dois vizinhos, achados só porque o conserto foi medido em vez de declarado pronto.**
`buracoReal` movia o início do buraco para onde o SILÊNCIO abre; a voz cai no fade antes de a imagem
apagar, então a V1 cortava 9, 14, 14 e 1 frames cedo e sobravam 0,93s de preto. O ajuste agora está
desligado nos dois sentidos, e por motivos opostos: para a frente cortava narração (os 0,467s do
`galaxia`, [FIN-190], revogada), para trás deixa preto. E o keep começa onde `_cortes.json` declara o
vão (25,280) mas é partido onde o espelho põe o card (25,300): os 0,6 frame viravam um pedaço de V1
de **1 frame** — o primeiro do buraco, preto puro, que a [FIN-08] conta como janela de Bôco < 2s.

**O cheiro que denuncia, e ele é procurável.** Uma conversão de relógio que é IDENTIDADE porque
"os dois falam o mesmo tempo", num arquivo que aplica um deslocamento adiante:

    grep -n 'identidade\|=> +t\|? limpo :' scripts/xml-premiere-5camadas.mjs

Identidade só é segura se **ninguém mais** somar o mesmo deslocamento depois. Antes de declarar dois
relógios iguais, procure quem reaplica a diferença — e prefira a inversa exata da função que vem
depois, que morre sozinha quando não há o que inverter.

**A régua que faltava.** Nenhum gate perguntava "o que a V1 mostra é imagem ou é o buraco?".
Todos mediam o lado que EXISTE (clipe referenciado, ref que resolve, duração que bate), e um
clipitem de V1 sobre o preto do master passa em todos eles. A sonda que faz a pergunta cruza o
`blackdetect` do master com o `in/out` de cada pedaço da V1:

    node scripts/.probe-preto-xml.mjs <proj> --pretos "25.2667,28.2667;185.9,188.9"

Depois do conserto: V1 = 875,80s de timeline para 875,80s de arquivo (0f de desvio), 5 pedaços sem
fragmento, 4 emendas pulando o buraco, **0,00s de preto exposto**.

### FIN-203 · O card de título entra no VÃO do master, não no ponto que o espelho declarou

**Medido no `planeta-em-meteorito` (17/ago/2026), pelo laudo do `qa-montagem` — 3 dos 5 cards.**

Convivem dois donos do mesmo instante e ninguém os confrontava:

| dono | o que ele diz | quem obedece |
|---|---|---|
| **espelho** (`inSec` do card → `gapsF`) | onde o card ENTRA | o laço dos `pedacos`, que parte a V1 ali |
| **`_cortes.json`** (`gapSec` na fronteira) | onde o BURACO existe dentro do master decupado | o `keepsArq`, que pula o preto ali |

Quando divergem, o gerador parte a V1 no ponto do espelho e pula o preto no ponto do corte — e
entre um e outro sobra um pedaço de **fala viva** que vai parar DEPOIS do card. Como V1 ≡ A1 frame
a frame, **o áudio para junto**: o espectador ouvia *"…entregou um FANTA"* + 6,1 s de card +
*"SMA do começo de tudo."*. Divergências medidas: 2,167 · 2,317 · 0,742 s — 65/70/22 frames.

**Por que atravessou.** O `FRAGMENTO_MIN` (2 frames) foi desenhado para absorver ARREDONDAMENTO
entre os dois donos, e absorve; esta é de MONTAGEM, 30× maior. E o único aviso que existia
(`tamGapDeclarado`) só dispara quando **nenhum** gap casa — aqui 2 dos 5 casavam, então o silêncio
era garantido justamente no caso misto, que é o comum.

**Quem tem razão é o VÃO.** Ele é físico, está no arquivo, foi aberto entre frases fechadas e é
mudo. O ponto do espelho é uma intenção que o decupador já materializou noutro lugar. O snap não
joga fora frame nenhum: devolve à V1 a fala que estava sendo partida.

Conserto no gerador (`xml-premiere-5camadas.mjs`, antes de `gapPorPonto`): parear cada card ao vão
declarado mais próximo dentro de `SNAP_MAX = 3,0 s`, um vão por card, e mover `limpoSec` para
`v.iniLimpo` — com AVISO nominal, porque correção invisível é o defeito de amanhã. Conserto de
ORIGEM: alinhar o `inSec` do card no espelho ao `gapSec` do `_cortes.json` (agente-raiz: montador).

**Como se prova, e a prova é barata:** os cortes da V1 contra o `words-final.json` (teste FIN-98) —
nenhum pode cair com `palavra.start < corte < palavra.end`. Depois do conserto, a V1 caiu de **9
para 6 pedaços** e os 5 cortes passaram a fechar frase: "tudo." · "melhor." · "maior." ·
"começar." · "viu?", retomando em "Em" · "Quando" · "Foi" · "A" · "No".

⚠️ Só vale no master COM GAPS. No BRUTO não há vão materializado com o que divergir — o ripple é
aplicado pelo gerador e o buraco reaberto no ponto do card, então o espelho é o único dono.

---

### FIN-204 · A PUBLI NÃO TEM CARD, ENTÃO A REDE DE FRONTEIRAS NUNCA A VIA — E ELA É A ÚNICA TRANSIÇÃO QUE RESTA (21/ago/2026, `aceleradores-particulas`)

**O caso.** O `_overlays-branding.json` saiu com **uma** transição (T1 do encerramento) num vídeo com
4 cenas de publi (`s54`…`s57`, 351,10–386,20 s FINAL). A T2 de saída da publi não existia.

**Por que atravessou, e por que é pior do que parece.** O `overlays.mjs` já sabe fazer a T2 — a linha
é literal: `const trans = a === "publi" ? "t2" : …`. O que falta é o bloco chamado `publi` existir na
lista. Ele nasce do `_blocos.json`, e o comentário do próprio arquivo declara isso em voz alta
(*"`_blocos.json` quando existir (é mais rico, tem nome de bloco **e publi**)"*). Só que **nenhum
projeto da casa tem `_blocos.json`** — medido: 22 projetos com espelho, zero com blocos. O caminho
real é sempre a rede de segurança, que deriva as fronteiras dos **cards de tópico**; e a publi não
tem card, porque não é capítulo: é um punhado de cenas no meio de um.

**O que isso custa mudou de tamanho no dia em que a lei virou.** A [FIN-10] pedia T1/T2 em toda
fronteira de capítulo — com aquela lei, faltar a T2 da publi era perder 1 de N transições. A
[FIN-45] INVERTEU (Mateus, 31/jul: *"eu NÃO quero manter transição entre tópicos mais, apenas depois
de indicação de produto do YouTube shopping"*), e a antiga exceção dura virou **o único caso em que a
transição de fronteira existe**. Desde então este ramo erra o único item que a lei ainda cobra — e o
log seguiu imprimindo *"derivei N fronteira(s) dos CARDS do espelho (para localizar publi/
encerramento)"*, anunciando um trabalho que não fazia.

**A extensão, medida antes de consertar:** `--seco` nos 22 projetos com espelho → **8 ganharam a T2
que faltava** (`aceleradores-particulas`, `viagem-no-tempo`, `rosto-da-formiga`, `um-dia-luz-da-terra`,
`tunel-trem-bala-japao`, `piramide-porta-secreta`, `itaipu-afogou`, `dias-mais-curtos`). Não era um
vídeo com azar: era todo vídeo com publi desde 31/jul.

**Conserto** (`scripts/branding/overlays.mjs`, no fim da rede do espelho): achar as cenas cujo
`id`/`titulo` casa `/publi/`, exigir que sejam CONTÍGUAS (min/max sobre dois grupos separados
engoliria o conteúdo entre eles e poria a T2 no meio da narração — sem fronteira é melhor que
fronteira errada, porque a errada é visível), e fatiar o bloco que as contém em
`cap N` + `publi` + `cap N retomada`. Aditivo por construção: projeto sem cena de publi não muda um
byte, projeto com `_blocos.json` de 2+ blocos nem entra neste ramo. Provado antes×depois nos 22:
contagem de CTA **idêntica**, T1 **22 antes / 22 depois**, zero publi não-contígua.

*A lição que se transporta: quando uma lei é invertida, o código que a implementava não passa a estar
"parcialmente certo" — ele passa a errar exatamente o item que sobrou. Vale reler os ramos de fallback
de toda lei que mudou de sinal, porque eles foram escritos para o mundo anterior.*

---

### FIN-205 · 🔴 ABERTA · O CAMPO `cauda` EXISTE PARA COBRIR A CARTELA DE MEMBROS E NENHUM CONSUMIDOR O LIGA (21/ago/2026, `aceleradores-particulas`)

**O caso.** Plano de trilha fechado, `perdidos: []`, música contínua — e **4,65 s de cartela do Clube
de Membros no silêncio absoluto**. A última faixa terminava em 693,53 s LIMPO (o fim da FALA) e a
cartela vai até 698,18 s (`membrosAtSec` 690,18 + 8,0 s de `cta-membro-alpha.mov`).

**Por que ninguém viu.** O `src/trilha-plano.mjs` TEM o conserto: o campo `cauda` estende o último
trecho até um alvo. E o comentário dele descreve o defeito com precisão, inclusive a condição de
falha — *"Quem sabe onde o vídeo termina é o consumidor (só ele conhece a cartela), por isso o alvo
entra por parâmetro — **sem ele, nada se estende e o silêncio da cauda continua**"*. Os dois
consumidores existentes são `scripts/finalizacao-config.mjs:208` e
`scripts/xml-premiere-5camadas.mjs:1660`, e **nenhum dos dois passa `ateLimpo`**. A capacidade é
órfã: escrita, documentada, nunca chamada — então `cauda` é sempre `null` e o silêncio é o padrão de
toda produção da casa, não o acidente desta.

**Onde cai é o que a torna cara.** É a zona cega da [FIN-53] — os últimos segundos, que ninguém
revisa — e o que fica mudo ali não é sobra: é o QR do Clube, o único CTA que cobra dinheiro.

**Contorno aplicado aqui (à mão, no plano):** `outSec` da última entrada de 705,53 → 710,18 s FINAL,
que a ponte converte para exatamente 698,18 s LIMPO. Cabe porque "Reclaim" tem 197,8 s de arquivo
para 60,1 s de janela — e a régua da [FIN-53] continua valendo: **antes de esticar, confira que a
faixa TEM o material**, senão o que se estende é silêncio com outro nome.

**Conserto de raiz (não feito — precisa dos dois consumidores e do dono da duração final):** passar
`ateLimpo` nas duas chamadas, com o fim que cada rota conhece (composto e XML podem divergir, e é
justamente por isso que o parâmetro existe em vez de o normalizador adivinhar). Enquanto não for
feito, **toda finalização precisa medir a última faixa contra `membrosAtSec` + a duração REAL do
`.mov`** — não contra o fim da fala.

---

### FIN-206 · A PALAVRA QUE **ENCOSTA** NA BORDA DO CARD NÃO O NARRA — ELA É A FRASE ANTERIOR ACABANDO (21/ago/2026, `aceleradores-particulas`)

**O caso.** `card03-a-aposta-de-17-bilhoes` foi declarado NARRADO e perdeu a janela de −10 dB.
A janela é 386,200 → 389,800 s (relógio FINAL). O que a [FIN-87] achou lá dentro: **duas** palavras —
`"aí."`, que termina em **386,21**, e `"A"`, que começa em **389,79**. Cada uma invade a janela por
**10 milissegundos**. Entre elas há **3,58 s de silêncio absoluto**: era o card mais mudo dos quatro,
e foi o único suprimido dos quatro.

**O mecanismo.** `falaEm(a,b)` devolve tudo que SOBREPÕE a janela, e sobreposição não distingue quem
narra o card de quem só o tangencia. `primeira` era o menor `start` do conjunto — inclusive o de uma
palavra que começou ANTES de `a`. Aí `respiro = primeira − a` sai **negativo**, jamais alcança o piso
de 1 s, e a [FIN-165] cai no `else`: janela suprimida. *Uma conta que pode dar negativo, comparada
contra um piso positivo, tem um ramo que nunca é alcançável — e o código não tem como reclamar.*

**Não era deste vídeo, e a varredura mostra o tamanho.** Nos 5 projetos com insumo, TODO card hoje
declarado "narrado" é borda: `uruguai-despovoado` acusava `"chão."` e `"bora."`, **uma palavra cada**,
pontos-finais da fala anterior; `orcas-nao-matam` acusava `"antes."`. O caso canônico que fundou a
[FIN-87] — *"16 a 18 palavras vivas em cada janela"* — era o sintoma do relógio errado que a
[FIN-164] consertou depois. **Corrigido o relógio, o que restou nesses mesmos vídeos foi a borda, e
a lei seguiu suprimindo com a autoridade de um caso que já não existia.**

**A régua, na mesma direção da [FIN-165] e agora nas DUAS pontas:** a janela do boost é **o silêncio
de fato** — começa onde a fala anterior acaba, termina onde a seguinte começa. Só narra o card quem
COMEÇA dentro dele. O piso de 1 s continua valendo (subir e descer 20 dB em menos de um segundo se
ouve como bombeamento) e suprimir continua sendo a resposta honesta onde há voz de verdade.

**Provado antes × depois, `--seco`, nos 5 projetos com insumo:**

| projeto | janelas −10 dB | narrados |
|---|---|---|
| `aceleradores-particulas` | 3 → **4** | 1 → 0 |
| `orcas-nao-matam` | 3 → **4** | 1 → 0 |
| `uruguai-despovoado` | 1 → **4** | 3 → 0 |
| `energia-escura` | 4 → 4 | 0 → 0 |
| `especies-humanas` | 4 → 4 | 0 → 0 |

**8 janelas de respiro recuperadas, zero regressão** — e nenhuma delas abre boost sobre voz: o
`orcas/t03` recuou 0,88 s e encurtou até 2,28 s, parando onde `"Aqui está a parte"` começa.

⚠️ **Onde este defeito NÃO chegava, e por que isso importa para lê-lo:** a rota PT-BR não era afetada.
Desde que a entrega voltou a ser XML, quem calcula os −10 dB é o `xml-premiere-5camadas.mjs`, que
deriva as janelas do espelho por conta própria — os quatro cards deste vídeo sempre tiveram duck no
XML. O estrago mora na rota do **composto** (dublados), que lê o `_finalizacao-config.json`. *Dois
consumidores com a mesma regra implementada duas vezes divergem em silêncio: a rota que ninguém
revisa é a que sai errada.*

---

### FIN-207 · A REANCORAGEM DO CARD ABRE A PISCADA QUE A REDE ANTI-FLASH FOI ENSINADA A IGNORAR (21/ago/2026, `aceleradores-particulas`)

**O caso.** Duas janelas de Bôco com `0 < dur < 2 s` no XML — o item 3 do gate de finalização —, as
duas na emenda **cena → card**: `s08-nem-os-cientistas-tem-certeza` → `card01` deixa **6 f (0,20 s)**,
e `s73-um-unico-anel-por-decadas` → `card04` deixa **11 f (0,37 s)**. Os outros 17 vãos da V2 são
respiro desenhado (2,30 s a 14,37 s, o Bôco falando) e estão certos.

**Quem as abriu foi o próprio gerador.** A [FIN-129]/[FIN-06] reancora cada card no vão REAL do
master decupado, para não partir a V1 no meio de uma palavra — aqui `+0,197 s` a `+0,413 s`. Onde a
cena anterior encostava no `inSec` do espelho, esse empurrão vira fresta.

**Por que nenhuma das duas redes a vê.** As duas excluem o card por uma premissa escrita em voz alta:

- o laço da [FIN-78] pula todo par em que o próximo é card (`if (!c.card || prox.card) continue`);
- a rede anti-flash da [FIN-08] não toca vão que contenha ponto de `gapsF`, porque *"gap de CARD é
  deliberado (3 s de respiro)"*.

E o comentário da [FIN-78] declara a premissa inteira: *"o respiro do card é desenho, não defeito —
**verdade para o vão ANTES do card**, falso para o resíduo DEPOIS dele"*. **Era verdade quando o card
entrava no `inSec` do espelho. Deixou de ser quando a reancoragem passou a mover o card para a
frente** — e a frase ficou no código descrevendo um mundo que o próprio código mudou depois.

**O conserto não é snap: é hold.** Medido, os dois clipes anteriores são usados INTEIROS
(`s08` 4,10 s de 4,10 s · `s73` 6,60 s de 6,60 s) — não há sobra para esticar, e é a mesma parede que
a [FIN-08] já documenta (*"o padding de render já está DENTRO de `c.dur`"*). Puxar o card para trás
está fora de questão: desfaz a reancoragem e devolve a V1 partida no meio da palavra. Sobra o
mecanismo que este gerador já tem e já usa — `holdDe()`, o PNG do último frame — estendido ao par
`cena → card` quando a fresta é pequena; acima de `SEGURA_MAX` continua sendo defeito de espelho.

**Feito**, como bloco à parte e não como guarda afrouxada: a exclusão do laço principal continua
valendo para `card → cena` (que a [FIN-78] fecha com snap) e para `card → card`; o que entra no bloco
novo é só a emenda que ninguém examinava, com as MESMAS réguas da rede (`SEGURA_MAX`, `FALA_MIN`,
`GAP_MAX_FLASH`) — nenhuma constante nova para recalibrar depois.

**Provado antes × depois.** No `aceleradores-particulas`: `V2 71 → 73 itens`, `holds 1 → 3`, janelas
de Bôco `0 < dur < 2 s` **2 → nenhuma**. E a mudança é cirúrgica: comparando camada a camada, **só a
V2 mudou** — V1, V3, V4, V5, A1, A2, A3 idênticas, e a lista de avisos do gerador idêntica. Em
projeto de controle, gerado com `--saida` para não tocar produção, o `energia-escura` saiu com XML
**byte a byte idêntico** antes e depois.

⚠️ **O que este conserto NÃO faz, dito para não ser lido como maior do que é:** ele fecha o par
`cena → card`. O mesmo teste mostrou que o `energia-escura` — **já entregue** — carrega 4 janelas de
`0 < dur < 2 s` (0,80 · 1,40 · 0,57 · 0,43 s) que continuam abertas, porque são de outra natureza.
O número interessa por outro motivo: **este item do gate nunca foi medido no XML de ninguém.** A
proteção que deveria medi-lo, `compor-base-youtube.mjs --dry`, não roda nesta rota — pede
`out/<proj>/_master.mp4`, imprime *"impossível calcular a timeline"* e sai **exit 0**. Quem lê o
código de saída lê como aprovado. *Rede que nasce de um caso cobre o caso, e a exclusão que ela
escreve para não errar naquele caso vira o buraco do caso seguinte — e quando a rede que vigiaria
tudo isso falha para o lado do verde, o buraco não tem quem o denuncie.*


### FIN-208 · O PREFIXO CURTO VOLTOU PELO SEGUNDO LADO: `inscri` PLANTOU "DEIXA O LIKE" SOBRE A INSCRIÇÃO DE UM SARCÓFAGO (02/set/2026, `piramide-porta-secreta`)

**O caso.** O `cta-like-abertura` entrou @199,47 s sobre `s21-a-mumia-que-nunca-apareceu`, com a
narração dizendo *"A múmia de Quéops… nunca foi encontrada em lugar nenhum."* A âncora era a palavra
**"inscrição"** @326,44 s bruto, na frase *"o caixão está completamente vazio, sem tampa e sem uma
única INSCRIÇÃO que diga de quem era"* — inscrição de sarcófago, não pedido de inscrever-se.

**É a [FIN-85] reincidente, no prefixo que ela não olhou.** O conserto de 04/ago trocou `curt` por
`curte|curtir|curtiu|curtid` e deixou `inscri` intacto — na linha de baixo do comentário que explica
por que prefixo curto é perigoso. `inscri` casa com **inscrição · inscrições · inscrito · inscritos**,
que não é caso de borda: é vocabulário permanente de arqueologia, epigrafia, concurso e matrícula.
*Consertar uma alternativa do regex e não reler as outras é deixar o mesmo defeito com endereço novo.*

**A leitura fácil não resolve, e vale mais que o conserto.** Tirar `inscri` só do `INEQUIVOCO` parece
bastar — é o desempate que a [FIN-85] introduziu. Não basta: quem escolhe a representante é
`primeiraViva`, e ela cai em `vivas[0]` quando o grupo **não tem nenhuma inequívoca**. A "inscrição"
do sarcófago está a 1128 s da menção real e a janela de agrupamento é de 20 s, então ela forma grupo
**sozinha** e continuaria ancorando por ser a única. **`INEQUIVOCO` desempata dentro de um grupo que
já existe; quem decide o que VIRA gatilho é o `T_LIKE`.** O prefixo tinha de sair dos dois, e sair só
do desempatador teria produzido um conserto que passa na leitura e falha na execução.

**Feito.** `INEQUIVOCO` e `T_LIKE` perderam `inscri` em `scripts/branding/overlays.mjs:144-145`.
Nenhum pedido se perde: `inscrev` cobre inscreva-se, inscrever, inscrevam, inscreve — o que sai é o
substantivo. Provado no mesmo projeto com `overlays.mjs --seco`: o CTA @199,47 s desapareceu, o
único falado passou a ser @1454,5 s (a menção real de "like"), e a rede da [FIN-11] segue fechada
por `cta-like-intro` (posicional) e `cta-membro-1`.

**A régua, agora aplicada aos dois lados:** *liste em voz alta as palavras que o prefixo captura FORA
do sentido desejado. Se a lista tem palavra de uso comum, o prefixo está curto demais — e quando
consertar um, releia as outras alternativas do mesmo regex, porque elas foram escritas no mesmo dia,
com o mesmo descuido.*

### FIN-209 · Vão da timeline se julga pela FALA, não pelo tamanho — o limiar que precisa de recalibre é o método errado (02/set/2026)

O anti-flash da emenda **card → cena** ([FIN-78]) julgava por **duração pura** — uma constante
`SNAP_MAX_F` própria, comparada com o tamanho da fresta. Ela foi recalibrada **quatro vezes**, e
sempre pelo mesmo sintoma: *curto por UM frame, no vídeo seguinte*.

| calibre | vídeo | fresta que escapou |
|---|---|---|
| 3 | `oceano-700km` | 4 f |
| 6 | `energia-escura` | 7 f |
| 9 | `orcas-nao-matam` | 10 f |
| — | `megabarragem-himalaia` (02/set/2026) | o quinto remendo **não** foi aplicado |

No `megabarragem-himalaia` a fresta media **10 f (0,333 s)** na emenda
`t02-card-a-queda-que-vira-energia → s33-agua-que-cai`: Bôco descoberto, de pé e **mudo** (0% de
fala; áudio a −49,4 dB de ruído de sala contra −24,9 dB da narração). Era o ÚNICO dos 18 vãos da V2
com `0 < dur < 2 s` — os outros 17 medem 3,167–28,767 s com 62,8–85,1% de fala, que é respiro
desenhado ([FIN-42]).

**A lei: vão da timeline se julga pela FALA, nunca pelo tamanho.** Fresta MUDA é resíduo e fecha;
fresta com o apresentador falando é respiro DESENHADO e não se toca. O tamanho só entra como *teto
de segurança* (`SEGURA_MAX`), para o hold restante não virar congelamento.

A prova de que o método é o problema, e não o número: os **outros dois** laços anti-flash do mesmo
arquivo — o principal (cena→cena) e o da [FIN-207] (cena→card) — perguntam pela fala desde que
nasceram e **nunca precisaram de recalibre nenhum**. O comentário do próprio código já havia
diagnosticado isso no terceiro recalibre (08/ago): *"a frase 'entre 4 e 103 não há nada' era uma
descrição da AMOSTRA lida como propriedade do mundo"* — e mesmo assim escolheu outro NÚMERO.
**Nenhuma amostra de vídeos passados limita a fresta do próximo.**

⚠️ **Por que o conserto demorou quatro rodadas, e o que destravou:** não era edição de uma linha. Os
blocos eram irmãos e disjuntos — o laço da FIN-78 abria antes de `cobertura()` e das constantes
existirem, então **não tinha como perguntar pela fala** mesmo que quisesse. Trocar o número era o
único conserto barato disponível, e por isso foi o escolhido três vezes. O conserto real foi elevar
`GAP_MAX_FLASH`/`SEGURA_MAX`/`FALA_MIN`, `palavrasFinal` e `cobertura()` a um escopo comum, acima
dos três laços, e extrair o veredito para `ehResiduo()`. *Quando o remendo barato é o único que cabe
no escopo, o escopo é o defeito.*

⚠️ **O laço principal (cena→cena) NÃO usa `ehResiduo()`, e isso é deliberado:** ele pergunta
`vao <= GAP_MAX_FLASH || mudo`, um OR mais permissivo, porque entre duas CENAS um vão de poucos
frames é flash mesmo com fala — não há tempo de ler nada ali. Na emenda com CARD o respiro curto com
fala é desenho legítimo. Unificar os três por estética mudaria vereditos em silêncio.

⚠️ **E o laço ficou FALANTE.** Antes, a fresta que escapava do teto não deixava rastro: o defeito só
aparecia no laudo do `qa-montagem`, depois do XML pronto, com cara de novidade. Agora a fresta muda
que o snap recusa por tamanho sai em `avisos` com os frames e a % de fala medidos. *Um limiar que
recusa em silêncio ensina que o problema é o número; um que explica a recusa mostra que é o método.*

**Medido depois do conserto**, mesmo vídeo, mesmo insumo: 3 cenas encostadas — `s33 −10f @258,8s`
(a que escapava), `s72 −9f @601,633s` e `s105 −8f @896,1s` (as que já passavam, sem regressão).

Agente-raiz: `scripts/xml-premiere-5camadas.mjs`. Substitui o quinto recalibre de `SNAP_MAX_F`.

**A régua que generaliza, e ela é simples: o pedido de inscrição é sempre VERBAL.** *Inscreva-se ·
inscrever · se inscreve* — todos cobertos por `inscrev`. O SUBSTANTIVO nunca é pedido: *inscrição ·
inscrições · inscrito · inscritos*. E o plural é o que fecha o caso neste canal em particular —
**"10 milhões de inscritos" é frase permanente aqui**, dita em abertura, em agradecimento e em
marco de audiência. Um gatilho que casa com ela não erra num vídeo de arqueologia: erra em
qualquer vídeo, no dia em que o apresentador citar o próprio número.

> Esta seção veio da redação paralela da mesma lei, escrita na worktree do `piramide-porta-secreta`
> e integrada em 03/set/2026. Duas sessões documentaram o mesmo defeito no mesmo dia, cada uma com
> um argumento que a outra não tinha: a daqui trouxe o alcance do vocabulário (epigrafia, concurso,
> matrícula), a de lá trouxe a régua verbo-contra-substantivo e o caso dos 10 milhões.

### FIN-210 · o log imprime o mood CASADO, não o da faixa — e a revisão humana lê o log (03/set/2026)

**O caso, no `dias-mais-curtos` (03/set/2026, estação TRILHA).** A revisão de mood que a [FIN-152]
manda fazer é feita **em cima do log do picker** — e o log mente por omissão. Ele imprime o mood
**CASADO**, não o mood da FAIXA:

```
♪ cap 3   475–675s   mood=Hopeful;    "Love Begets Love (Instrumental Version)" 90bpm
♪ cap 4   724–908s   mood=Sentimental; "Melting Glass" 134bpm
```

Os dois valores reais na tabela `trilha`, que o log não mostra:

| faixa | `mood` completo | `genero` |
|---|---|---|
| Love Begets Love | **`Romantic`, Hopeful** | Orchestral Hybrid, **World Fusion, Indian Classical** |
| Melting Glass | **`Restless`, Sentimental** | Contemporary Classical |

O filtro é `(t.mood||"").toLowerCase().includes(m)` (`escolher.mjs:173`), então **a posição não pesa**:
uma faixa cujo caráter dominante é `Romantic` entra como se fosse `Hopeful`, e uma `Restless` a
134 bpm entra como se fosse `Sentimental`. Medido aqui: 200 s do capítulo sobre relógios atômicos e
segundo bissexto forrados com música romântica indiana, e 184,7 s de contemplação geológica (o
retrorrefletor da Apollo, os corais fósseis, os 372 dias dos dinossauros) com uma faixa inquieta.

**As duas passaram no veto da [FIN-95]** — nem `Indian Classical` nem `Contemporary Classical` estão
na lista de gêneros vetados, e não devem estar: o defeito não é o gênero, é o mood lido pela metade.

⚠️ **E é por isso que este caso é caro, e não é só mais um do gênero errado.** A [FIN-95] fecha o furo
do campo que ninguém lê; aqui o campo **é** lido, o veto **passa**, o log sai **idêntico** ao de um
capítulo bem servido, e a única rede que restava — a revisão humana da [FIN-152] — recebe do log
exatamente a informação amputada que a impediria de ver. *A rede de segurança foi alimentada pela
mesma fonte que produziu o erro.*

**O conserto, e ele é de UMA linha antes de ser de julgamento:** o log tem de imprimir o mood
INTEIRO da faixa ao lado do mood casado — `mood=Hopeful ← faixa é "Romantic, Hopeful"`. Quem revisa
passa a enxergar a discordância sem abrir o banco. Depois, se valer: ponderar a posição no
desempate, porque mood primário e secundário não descrevem a mesma coisa.

**A régua da casa:** *quando a revisão de um automatismo lê o relatório DELE, o relatório é parte do
automatismo — e omitir ali é omitir duas vezes.* O log de uma escolha deve mostrar o que foi
escolhido **e o que a coisa escolhida é**, não só o critério que casou.

Consertado à mão neste vídeo (as duas faixas trocadas, [FIN-152]); o `escolher.mjs` segue como está.

### FIN-211 · Promover para camada de cima NÃO é dedup — o CTA cobriu os nomes dos membros pagantes (03/set/2026, `brasil-portugues`)

**O caso.** O selo `v3-cta-inscreva-fim` (32942→33070f) ficou **100% dentro** de `v3-membros`, a
cartela com os nomes de quem paga pelo canal. O `normalizar-timeline` fez o que devia — promoveu o
clipe contido para uma trilha empilhada — e com isso o pôs **ACIMA**. Resultado no vídeo:
*DEIXA O LIKE / INSCREVA-SE* cobrindo a faixa central de nomes nas três colunas, em **128 dos 129
frames (99%)**.

**O dedup existia e funcionava.** Ele descartou o `cta-like-encerramento` nesse mesmo vídeo, pela
regra de que dois CTAs na tela é defeito. O que ele não fazia era olhar a cartela: a [FIN-82]
comparava os likes contra `ctaAt`/`dCTA`, que é o **QR do clube**, e a cartela entra depois, em
`cartelaAt`/`dCartela`, como outra peça. Um like ancorado na cauda caía inteiro nela sem cruzar nada
que alguém estivesse conferindo.

**⚠️ O ERRO DE CATEGORIA, e é ele que faz isto voltar se só se ajustar a posição:** promover para
camada superior **arruma o XML e piora o vídeo**. Dois clipes deixam de disputar a mesma faixa — o
XML fica correto — e agora o de cima é o que aparece. A [FIN-82] já dizia isso em voz alta para o
QR; faltava valer para a cartela. **Promoção não é resolução de conflito visual: é o conflito
mudando de lugar.**

**A régua de quem sai é a que a casa já usa:** entre dois selos que se cruzam vence o que não tem
substituto. A cartela de membros é **única, obrigatória e nominal** — são pessoas, com nome na tela,
que pagam pelo canal ([FIN-02], [FIN-12]). O like se repete no vídeo inteiro. Recuar só vale se o
recuo não jogar o like de volta sobre o QR, que é o defeito que a [FIN-82] acabou de resolver.

**Consertado na fonte:** `scripts/xml-premiere-5camadas.mjs` passa a rodar o mesmo dedup contra
`cartelaAt`/`dCartela` depois do dedup contra o QR, com recuo quando cabe e descarte quando não cabe
— e o aviso diz qual dos dois motivos foi.

**Parente da [FIN-82] e da [FIN-11]**, e a família tem um padrão: *todo selo novo que entra na
timeline precisa passar pelo dedup, e "entrou por outro caminho" é como ele escapa.*

### FIN-212 · Um ativo cravado para todos os CTAs põe o banner ERRADO na tela (03/set/2026, `brasil-portugues`)

**O caso.** O `cta-inscreva-fim` foi para a timeline com `cta-like-inscreva-alpha.mov` — o banner
DUPLO, 114,9 MB — quando os dois planos do vídeo pediam a peça estreita:

```
config:  {"tipo":"inscreve", "atSec":1083.68, "_de":"cta-inscreva-fim"}
plano:   cta-inscreva-fim → cta-inscreva-so-alpha.mov     (53,7 MB)
XML:     cta-like-inscreva-alpha.mov                      (114,9 MB)
```

**O gerador não escolheu errado: ele não escolhia.** A linha era
`const CTA_LIKE = ["assets/branding/cta-like-inscreva-alpha.mov"].find(existsSync)` — uma lista de
um item, cravada, usada para todos. O `tipo` da config distinguia, o `mov` do plano de branding
distinguia, **e os dois eram ignorados.**

**Somou-se à [FIN-211] e foi por isso que doeu:** a peça larga é a que cobriu os nomes dos membros na
cartela. Os dois defeitos são independentes — o selo não devia estar ali, E o selo que estava ali era
o errado — e a peça certa tem menos da metade do tamanho. *Talvez nem tivesse coberto.*

**⚠️ A duração sai do ativo escolhido, nunca de um número comum.** Os dois `.mov` têm durações
diferentes; reaproveitar a do outro faz o clipe pedir frame que não existe. Isso vale também para as
janelas que guiam o recuo do QR ([FIN-82]): medi-las pela duração do banner duplo dá janela maior
que a real e faz o QR fugir de uma sobreposição que não existe.

**Consertado na fonte:** catálogo `CTA_POR_TIPO`, o ativo viaja junto de cada CTA (`c.ativo`), e o
rodapé passou a imprimir QUAL peça foi para cada selo — antes ele dizia *"3 selo(s) de
cta-like-inscreva-alpha.mov"*, o que era falso quando um deles era outro. **Tipo fora do catálogo cai
no padrão E AVISA**, em vez de escolher em silêncio.

**A família:** *plano que ninguém lê não é plano, é comentário.* Aqui havia DOIS planos concordando
entre si e nenhum sendo consultado — e o defeito só apareceu porque alguém foi medir alpha quadro a
quadro sobre os nomes de pessoas reais.

### FIN-213 · Escada de if(t<X) não é remap: só é congelamento se o valor virar TEMPO (03/set/2026)

**O `qc-congelamento` reprovou uma entrega correta** (03/set/2026, `ate-que-altura-construir`). Ele
acusou 6,18 s de "frame parado no ar" na `s49` e barrou o vídeo inteiro. Não havia congelamento
nenhum: o que ele leu foi

```js
function camY(t){ …; if(t<11.34) return 0; … }   // posição Y da CÂMERA
```

— a câmera fica **parada** por 6,18 s enquanto o desenho anima por baixo (a linha seguinte da cena
deriva `camY` para obter a VELOCIDADE da câmera: a parada é deliberada). **Prova à vista: 210 de 210
frames da janela acusada são ÚNICOS.** A cena é M02 desenho puro, sem `<video>` e sem um
`currentTime` sequer.

**A causa é de forma, não de conteúdo.** `if(t<X) return LITERAL;` é a forma de QUALQUER curva de
animação por partes — câmera, opacidade, zoom, escala. O gate tratava a FORMA como assinatura de
remap de cortes, quando a assinatura verdadeira é o **destino do valor**.

**A regra: escada só é remap quando o valor vira TEMPO** — alimenta `currentTime`, entra no lugar de
`t` numa função de desenho (`draw(vt(t))`), é guardado numa variável de tempo, ou a função tem nome
de remap (`vt`/`U`/`mapSec`, a forma da `c07`). Curva que só alimenta posição/escala/opacidade é
animação, e o gate a **LISTA como ignorada** em vez de a esconder — cegueira silenciosa é o defeito
que ele mesmo existe para não cometer. A `CUTS=[[a,b],…]` segue acusando sempre: nome inequívoco,
assinatura específica.

**E o autoteste achou um segundo furo, na direção contrária e mais cara.** O corpo da função era
extraído por regex até `\n}`, exigindo o fecho no início de uma linha: **remap escrito numa linha só
passava batido** — falso NEGATIVO, que neste gate é o defeito que ele existe para pegar. Agora o
corpo sai por chaves balanceadas. A varredura nova enxergou 2 curvas a mais no mesmo projeto
(`pontoOpac` em `s02` e `s44`) que a antiga nem via.

**Conserto:** `scripts/qc-congelamento.mjs` + `--autoteste` embutido, que prova os DOIS lados (pega a
escada `vt` da `c07` e a tabela `CUTS`; libera `camY` e curva sem patamar). Gate sem fixture negativa
não tem como distinguir "consertei o falso positivo" de "ceguei o gate".

*Falso positivo em gate não é ruído inofensivo: ensina a ignorar o gate, e o defeito de verdade passa
junto com o alarme falso.* Esta é a mesma doença do `perl` de uma linha aposentado pela [ARTE-153] e
do gate de hex que lia só a primeira parada do gradiente ([ARTE-190]) — régua que casa por FORMA onde
devia casar por PAPEL.

### FIN-214 · O hold congelado é derivado do clipe — retomada nele exige mtime, não existência (03/set/2026)

O `holdDe()` do `scripts/xml-premiere-5camadas.mjs` reusava qualquer `-hold.png` que existisse com
tamanho > 0. Isso é retomada correta para artefato PAGO e errada para artefato DERIVADO: o hold é o
último frame do clipe, então **re-renderizar a cena o torna obsoleto sem tocar no arquivo dele**.

Medido no `piramide-porta-secreta` (03/set/2026, achado pelo `qa-montagem`, item 11): a `s30-como-achar-sala-sem-furar-pedra`
teve o HTML corrigido às 17:56 e o clipe re-renderizado às 23:10; o hold ficou preso ao render das
17:09. A mancha escura elíptica que a correção removeu **voltava por 9 frames (0,300 s) em
299,833→300,133 s**, bem na emenda para o card do capítulo 2. Diferença medida contra o clipe atual:
média 1,45 · máx 91/255 · 180.969 px (2,18% do quadro 4K), com dx=0 dy=0 — não era defasagem de
tempo, era outra imagem.

**Por que nenhuma contagem denunciava:** dos 5 holds da V2, **4 batiam byte a byte** com o último
frame dos seus clipes. Só um errava, e o XML citava o caminho certo, com a duração certa. Todo gate
que mede o lado que EXISTE (referências resolvem, janela não excede, clipe abre) passava.

**A régua:** derivado se retoma por `mtime`, nunca por existência — a mesma que a casa já aplica a
clipe × HTML (`[ "$html" -nt "$clipe" ]`). Conserto aplicado no gerador: reusa o PNG só quando o
`mtimeMs` do clipe não é maior que o dele. Quem já tem um hold velho no disco conserta sem re-render:
`ffmpeg -v error -sseof -0.05 -i <clipe> -frames:v 1 -y <clipe sem extensão>-hold.png` (o XML não
muda — mesmo caminho, mesma duração).

Agente-raiz: `scripts/xml-premiere-5camadas.mjs`.

**E a mesma régua vale para a PROVA do artefato, um passo além do que este caso mediu.** Enquanto o
reuso era por existência, um still obsoleto nunca chegava ao `ffmpeg`; com a correção ele chega — é
exatamente o caso que ela manda re-extrair. E o `-update 1` só abre o arquivo quando decodifica um
frame, então o **ffmpeg mudo** (o que sai sem escrever, já documentado no cabeçalho do `holdDe`)
**deixa o still velho INTACTO**: conferir "existe e tem tamanho" depois da chamada aprovaria de novo o
still do render anterior — o defeito voltando pela porta que o próprio conserto abriu. As duas linhas
eram idênticas e respondiam perguntas diferentes: *"o que existe ainda vale?"* (retomada, régua do
clipe) e *"esta execução produziu alguma coisa?"* (prova, régua do carimbo de antes da chamada, que
não depende de relógio nem do mtime do clipe). Provado nos três cenários com `ffmpeg` real: reusa o
still novo, re-extrai o obsoleto, e RECUSA o obsoleto quando a extração não produz — sem apagá-lo.


### FIN-215 · NO COMPILADO, O VÍDEO-FONTE MAIS RECENTE ABRE — A ORDEM ENTRE FONTES É DO MAIS NOVO PARA O MAIS ANTIGO (09/set/2026, ordem do Mateus)

> 🔀 Nasceu como FIN-208 na árvore local em 09/set (o `main` local estava 114 commits atrás do remoto, onde FIN-208 já era a lei do `inscri`); renumerada para 215 em 10/set, o próximo livre em `origin/main`.

**A regra.** Os vídeos-fonte de um compilado entram em ordem **decrescente de data de publicação**:
o publicado por último é o primeiro bloco; o mais antigo fecha. A data é a **observada**
(`video_publicado` no `estudio.db`, o que `top10 publicados` imprime), nunca a declarada na entrega.

**O porquê, nas palavras dele (09/set/2026):** *"os vídeos mais recentes publicados no canal são os
que estão com a edição de vídeo mais atualizada até o presente momento. Então tudo que é mais recente,
teoricamente, é melhor. Então a gente precisa ordenar esses vídeos que serão inseridos no compilado
por essa ordem: de mais recentes como o primeiro."* A abertura é a vitrine: quem chega vê primeiro a
edição mais madura do canal, e a retenção do início decide se o resto é assistido. Ele acreditava que
a regra já existia — não existia: a FIN-19 mandava o contrário (arco de blocos, "não a dos
vídeos-fonte"), e nenhum gate media a ordem entre fontes.

**Como convive com a FIN-19.** A FIN-19 continua valendo **dentro** de cada fonte e na escolha do que
entra: a unidade de ordenação passa a ser o **vídeo-fonte** (bloco contíguo por fonte, mais novo
primeiro); tópicos da mesma fonte podem ser reordenados entre si para contar a história, mas um bloco
de fonte mais antiga **nunca é promovido à frente de um mais novo** por "arco". No ponto em que a
FIN-19 diz *"não a dos vídeos-fonte"*, ela está **SUPERADA** por esta.

**O que não muda.** Reuso em duas camadas (SPEC E4.1), corte da era Bôco (só 2023+), micro-cortes
(FIN-23), fronteiras por pontuação (FIN-24/25), corte base antes do caro (FIN-22), teto da cartela
(FIN-26), abertura própria e sumário do compilado.

**Prova.** Na proposta (`_reaproveitamento.json`), percorrendo `trechos[]` por `n` crescente, a data
de publicação da fonte é **não crescente**. ⚠️ Em 09/set/2026 essa checagem **não existe** em
`validar-reaproveitamento.mjs` nem em `qc-emendas.mjs` — a lei nasce antes do gate. Quem tocar
qualquer um dos dois fecha o gate junto: regra sem verificação automática é regra morta.

---

### FIN-216 · O CARD DE TÍTULO VOTA NO MOOD DE TODO CAPÍTULO — e o voto dele é sempre o mesmo (12/set/2026)

**Terceiro degrau da [[FIN-152]] e da [[FIN-173]], e o mais barato de todos:** lá o mood errado vinha
do ASSUNTO do bloco (`profund` de hipocentro lido como paisagem serena, vocabulário de derrota técnica
que o mapa não conhece). Aqui ele vem de um texto que **não é do capítulo** — é o molde.

**Medido no `terremotos-america-do-sul`, 11 de 11 cards:** todo card de título nasce com
`semente: "virada de assunto"`, e `virada` é termo do gatilho `Hopeful`. Como `moodDoCapitulo()`
testa `titulo + tese` de cada cena, **cada capítulo ganha +1 Hopeful de graça, antes de qualquer
conteúdo**. Nos capítulos de placar baixo isso não é ruído, é o resultado: o cap 6 (93 s) foi decidido
por esse único voto, e o cap 3 (89 s) quebrou 1×1 com ele.

**E a mesma porta deixa entrar o CAMPO, não só o molde.** A tese carrega `emoção: <palavra>`, e essas
palavras são vocabulário emocional puro — `virada`, `esperança`, `gravidade`. Elas casam o dicionário
de MOOD por construção, sem que ninguém tenha escrito nada sobre o capítulo. No cap 9 os três votos
`Hopeful` foram, todos: o molde do card, um `emoção: virada` e a palavra "esperança" dentro de
`semente: "relógio CONTRA a esperança"` — a cena que o próprio espelho declara ser *"a frase mais dura
do vídeo"*. Resultado: 173 s de 329 mortos, desaparecidos e resgate contra o relógio sob "Anytime
Soon", `Hopeful`, **170 bpm**, gênero **Corporate/Adventure** — o dobro do andamento dos vizinhos
(99 antes, 105 depois).

**A regra.** Na revisão de mood, conte os votos e **descarte três classes antes de olhar o placar**:
(1) o que vem de card de título (é molde, igual em todo capítulo de todo vídeo); (2) o que vem do
campo `emoção:` (é rótulo do montador, não fala do Bôco); (3) o que está NEGADO no texto que o cerca
(*contra a esperança*, *não é tragédia*). O que sobrar é o capítulo. Se sobrar zero, o capítulo não
votou — e aí a escolha é sua, não do placar.

*O contador não distingue o que o capítulo DIZ do que o formulário do capítulo TRAZ IMPRESSO.*

Agente-raiz: `scripts/trilha/escolher.mjs` (`tesesNoBloco`/`moodDoCapitulo`) + a estação TRILHA.

---

### FIN-217 · A TRANSIÇÃO É OPACA E NUNCA FOI OBSTÁCULO — o relógio estava certo e a LISTA é que estava incompleta (12/set/2026)

**O caso.** O `qa-montagem` reprovou o `terremotos-america-do-sul` (item 6b): `cta-inscreva-fim` foi
realocado para não cruzar o like do fecho e aterrissou **debaixo da T1**, 100% invisível. O laudo
atribuiu a culpa a medição no relógio errado, citando a [[FIN-44]].

**Não era.** O `cruza()` do `overlays.mjs` já roda em LIMPO desde a [[FIN-76]]. O defeito é que ele
testava o candidato contra `ctas` **e mais nada** — e as T1/T2 nasciam 200 linhas abaixo, direto no
`overlays`, depois de toda decisão de posição estar tomada. Elas não existiam para quem escolhia o
lugar. **Diagnóstico que troca "lista incompleta" por "relógio errado" é o mais caro que existe: ele
manda consertar a única parte que já estava certa.**

**E não é azar de um vídeo.** A [[FIN-45]] deixou a T1 do encerramento como a única transição que a
casa ainda usa, e a [[FIN-11]] obriga um CTA no fim: as duas peças são obrigatórias e miram a MESMA
fronteira. Medido nos outros quatro projetos com plano no disco, **3 de 4 tinham peça indo para
debaixo da lâmina** (`brasil-portugues`, `dias-mais-curtos`, `piramide-porta-secreta`) — nenhuma
vista por ninguém.

**A regra.** (1) Quem decide posição tem de conhecer TUDO que já ocupa a tela — transição inclusive;
peça calculada depois da decisão é peça invisível para a decisão. (2) Entre CTA e transição vale
**sobreposição crua, não folga**: a pergunta é binária (está embaixo da lâmina ou não), e passar a
`FOLGA_CTA` de 1 s para esse teste custou, na primeira tentativa deste conserto, o word-lock do like
do fecho — ele termina 0,72 s depois da T1 sair, não cruza nada, e foi realocado 15 s para trás.
*Trocar um CTA invisível por um CTA mentindo sobre o que a voz diz não é conserto.* (3) Quem cede é
quem PODE se mover: a transição mora na fronteira do capítulo e não tem para onde ir; o CTA tem
vizinhança para procurar.

Agente-raiz: `scripts/branding/overlays.mjs`.

---

### FIN-218 · `compartilh` SAI INTEIRO — o quarto laudo no mesmo radical, e desta o sufixo que passou foi o INFINITIVO (12/set/2026)

**A quarta ocorrência da família [[FIN-85]] → [[FIN-208]] → `compartilhado`.** Cada uma cortou um
sufixo do mesmo radical; esta corta o radical.

**O que passou agora:** `compartilh(?!ad|ament)` foi escolhido pela régua *"o pedido é sempre VERBAL;
o SUBSTANTIVO nunca pede nada"* — e por ela guardou `compartilhar`, que é verbo. Medido: o
`cta-like-abertura` do `terremotos-america-do-sul` nasceu de *"dois bairros da mesma cidade não
precisam COMPARTILHAR a mesma intensidade"* @884,3 s, e os botões ficaram 6 s sobre uma explicação de
intensidade sísmica.

**A régua estava a um degrau de distância: o pedido é IMPERATIVO, não "verbal".** O infinitivo é a
forma de dicionário — mora em toda oração subordinada (*precisam compartilhar*, *sem compartilhar*,
*ao compartilhar*) e não pede coisa alguma. A peneira anterior separou a classe gramatical certa e o
MODO errado.

**E aqui o prefixo acaba, porque não sobrou sufixo para cortar:** em `compartilhar` a MESMA palavra é
o pedido (*vale a pena compartilhar*) e o uso comum. Quatro laudos no mesmo radical, cada um aparando
uma ponta e nenhum alcançando a causa, provam que o radical inteiro é vocabulário normal de pauta
documental — países compartilham fronteira, bacias compartilham água, bairros compartilham
intensidade. É a [[FIN-94]] (`curios`/`estranho` são o vocabulário da casa) e a [[FIN-88]] (`planeta`
casa duas pautas opostas) aplicadas a um verbo.

**Nada de pedido se perde, e isto é medido:** nas quatro ocorrências o `compartilh` só produziu falso
positivo, e os pedidos reais foram sempre casados por `like`/`inscrev`. A rede da [[FIN-11]] (intro
coberta + fim coberto) fecha à parte e não depende deste gatilho.

*O prefixo que erra quatro vezes não está curto demais: está no dicionário errado.*

Agente-raiz: `scripts/branding/overlays.mjs`.
