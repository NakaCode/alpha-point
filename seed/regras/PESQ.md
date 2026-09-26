> **[porte Regie]** Origem: `top10-estudio/seed/regras/PESQ.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Este domínio veio INTEIRO (PESQ): lei é citada por ID e o agente precisa achá-la. Onde a lei manda usar VM, bucket, Mac, cascata ou Reuters, vale o princípio, não o comando. `seed/regras/SIS.md` e `seed/regras/REND.md` vieram FILTRADAS (o que é só infra do Top10 está listado por ID no apêndice de cada uma). Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# PESQ — mídia real

> Leis vigentes deste domínio. **A de número MAIOR vence** quando duas se cruzarem.
> Citação legada (número solto, sem prefixo) → `seed/DE-PARA-LEIS.md`.
> ⚠️ Leia TAMBÉM `SIS.md` — são as regras transversais que valem em todo ofício.

---

**PESQ-01.** MAPA = SÓ via usar_template("mapa") — PROIBIDO desenhar à mão (regra ENDURECIDA, erro reincidente).
   Todo e qualquer mapa SAI da tool usar_template("mapa", {vista, marcadores, quentes, setas}) — foto Blue
   Marble real + latlng→pixel exato. É TERMINANTEMENTE PROIBIDO desenhar continente/país/mundo como SVG
   <path>/polígono/topojson: mapa à mão SEMPRE sai com país faltando, África deformada e SEM Antártida —
   "uma bagunça" (reprovado na hora pelo runner, que checa se usou o template). (seca-1876, mapa-celeiros,
   zonas-pressao tinham saído à mão = bagunça; corrigidos pelo template.) vista: mundo/americas/pacifico/brasil.

**PESQ-02.** LOGO REAL: ao citar uma agência/marca (NOAA, IBGE…), use o LOGO REAL (cacarMidia/cacar_print). Nunca
   desenhe um logo falso. E explique brevemente o que a agência É quando ajuda (ex.: "NOAA — agência
   climática de previsão dos EUA").

**PESQ-03.** IMAGEM HISTÓRICA REAL em cena de LUGAR/ÉPOCA/EVENTO/PERSONAGEM (regra nova — erro real 20/jun, RS Farroupilha).
   Cena sobre fato/lugar/época/pessoa REAL (revolução, missão jesuítica, gaúcho, gado, erva-mate, personagem)
   DEVE carregar IMAGEM HISTÓRICA real de fundo (pintura/foto/retrato de Commons via cacarMidia) — vetor liso +
   fundo escuro NÃO "evoca o estado" = REPROVADO. MAS a COMPOSIÇÃO manda (foi o que derrubou a 1ª tentativa p/ 2.7):
   • a imagem é UMA camada com scrim + leve blur pra o texto ler. Se a foto histórica JÁ É poluída/tem TEXTO
     (placa, documento cheio de letra), escureça MAIS ou escolha outra — NUNCA texto branco sobre o texto da foto.
   • TÍTULO: max-width ~60% do palco e font-size que CABE — renderize o frame e confirme que a palavra NÃO corta
     na borda nem encosta em foto/bandeira. Máx 3 textos por vez, SEQUENCIADOS (some o anterior antes do próximo).
   • bandeira/retrato/selo entram num BOX definido que deixa o canto sup. direito livre (logo) e NUNCA fica sob texto.

**PESQ-04.** ASSET HISTÓRICO CORRETO (factual, reprova na hora se errar): a imagem tem que ser EXATAMENTE a entidade citada.
   Ex.: República Rio-Grandense = BANDEIRA TRICOLOR FARROUPILHA (verde-vermelho-amarelo c/ armas), NÃO a bandeira
   atual do estado; personagem da Farroupilha = retrato do BENTO GONÇALVES (não outro). Confirme o asset no frame.

**PESQ-05.** CAÇADOR DE MÍDIA — RECEITA QUE FUNCIONA (achado 20/jun, destravou o "fundo real" e passou a 1ª cena no painel):
   • FOTO de cena/paisagem (pampa, gado, gaúcho, cidade): busque em INGLÊS e AMPLO ("gaucho horse", "pampa grassland",
     "cattle ranch") — o Openverse (CC, agora integrado em media-tools) cobre paisagem/cena que o Commons NÃO tem.
     Query longa em PT = 0 resultado. Commons/flagcdn seguem melhores p/ BANDEIRA/RETRATO/LOGO nomeados.
   • Licença comercial (by/by-sa/cc0) + crédito no rodapé ("Foto: <autor> · <fonte> (<licença>)"). Valide magic-byte
     (PDF/HTML disfarçado de .jpg JÁ envenenou cena — rejeite).
   • Trate a foto: scrim (gradiente escuro do lado do texto) + Ken Burns contínuo. Texto sequenciado, ≤3, canto sup. dir.
     livre p/ logo. ESSA receita foi a 1ª a PASSAR o painel inteiro (7,4/10) — exemplo canônico em seed/examples/cinematico/.
   • Glifo: Ã/Õ/Ñ MAIÚSCULO em NHaas Display Bold sai errado (REVOLUÇÃO→REVOLUÇÁO) → naquele elemento use "Helvetica Neue".

**PESQ-06.** IMAGEM DE ÉPOCA + UPSCALE 4K (lei do Mateus, 21/jun): cena histórica NÃO pode usar foto MODERNA nem UMA foto só —
   use VÁRIAS FOTOS/GRAVURAS DA ÉPOCA passando (montagem tipo slideshow com Ken Burns), fiéis ao período. Qualquer
   foto pequena/antiga/ruim → tool **upscale_4k** (Real-ESRGAN **local** `infra/upscale/`, via `src/agent/upscale-tools.mjs` — upscale NÃO-generativo; Gemini saiu do pipeline em 02/jul/2026) → vira 4K restaurada e nítida.
   Fluxo: cacar_midia/WebSearch acha a imagem de época (url) → upscale_4k(src,key) → usa o 4K como fundo/quadro da
   montagem. Ex.: Farroupilha = gravuras/retratos do séc. XIX (Bento Gonçalves, cenas de batalha, charqueadas) — NUNCA
   gaúcho atual. E a EXPLICAÇÃO tem que ser rica (não pobre): conte o fato com as imagens da época + dado mínimo.

**PESQ-07.** FOOTAGE DE ESSÊNCIA, NÃO LITERAL (lei do Mateus, 05/jul — direção editorial de vídeo real): quando o roteiro
   fala de CONTEXTO político/nacional/institucional/humano, o footage real certo é o que ENCARNA a essência do
   ator/lugar — não a ilustração literal do substantivo. Ex. canônico: "precedente político nas terras raras (lado
   chinês)" → NÃO mostrar mineral de terras raras; mostrar XI JINPING em palestra/plenário, desfile, multidão —
   a CHINA em essência (poder, estado, escala humana). O objeto literal só quando ele É o assunto (o mineral na
   cena da geologia). Vale pra toda escolha de vídeo real (M07): perguntar "o que esta frase REPRESENTA?" antes
   de "o que esta frase CITA?". Fontes p/ esse tipo de footage: Reuters Connect (arquivo/eventos — ver regra de
   PONTOS abaixo), AP Archive, DVIDS, acervos institucionais.
   ⛔ REUTERS CONNECT CUSTA PONTOS (= dinheiro): NUNCA baixar por conta própria. Fluxo: buscar → shortlist com
   previews grátis → apresentar ao Mateus → só baixar o aprovado (dupla trava no hub de stock).

**PESQ-08.** PESSOA CITADA = SEMPRE ROSTO REAL, inclusive histórica (lei do Mateus, 05/jul): toda pessoa citada/mostrada no
   roteiro entra com o VISUAL REAL dela — foto (LinkedIn/site oficial/gov, verificada por visão, upscale 4K não-generativo).
   Pessoa HISTÓRICA NÃO é exceção: SEMPRE existe retrato/gravura/pintura/foto de época — caçar e usar. NUNCA só o nome
   sem rosto, NUNCA rosto fabricado ou genérico. Agente responsável: citador-pessoas.

**PESQ-09.** LOGO/SÍMBOLO = SEMPRE O REAL E OFICIAL, de QUALQUER entidade (lei do Mateus, 05/jul): empresa privada, órgão
   público, instituição, organização, PAÍS (bandeira/brasão oficial), ESTADO (brasão/bandeira), agência, veículo de
   imprensa — TODOS entram com o logo/símbolo REAL e oficial (site oficial/brand, Wikimedia Commons SVG, press-kit;
   contraste pela ARTE-09: fundo escuro→branca, claro→colorida). NUNCA desenhar, inventar ou aproximar um logo à mão.
   Agente responsável: cacador-logos.

**PESQ-10.** FOOTAGE DO MESMO TEMA = MESMO ENQUADRAMENTO + MUITAS VARIAÇÕES, mostrando o SUJEITO REAL (lei do Mateus, 05/jul):
   quando o footage ilustra um assunto comum em vários lugares (ex.: a ESTRADA Pan-Americana em cada país — que É o
   TEMA do vídeo), usar clipes do MESMO ângulo/enquadramento, com o SUJEITO (a estrada) no MESMO ponto X,Y da tela →
   transição milimétrica asfalto→asfalto, o espectador imerge na diferença. O footage tem que mostrar o SUJEITO em
   FOCO (a estrada), não a tangente (mato/árvores/sombra escondendo o foco). E cena longa (ex.: 24s) = MUITAS
   variações (vários clipes/fotos que trocam com a fala), NUNCA 1 clipe só segurado. Erros reais: desenho-perfil-rota,
   mapa3d-yaviza. Vale pro curador-midia (curadoria/enquadramento) e pro agente que monta a cena.

**PESQ-11.** VÍDEO É SEMPRE PRIORIDADE; FOTO É SECUNDÁRIA (lei do Mateus, 05/jul — ENFÁTICA): pra LUGAR/CIDADE/CENÁRIO/EVENTO,
   a mídia de fundo é SEMPRE footage em VÍDEO (existe vídeo 4K abundante de quase tudo famoso). FOTO só quando NÃO
   existe vídeo do assunto (pessoa histórica sem filmagem, documento/clipping/reportagem, objeto raro sem take). Nunca
   foto/coletânea de fotos pra algo que tem vídeo (NY, cidades, natureza, eventos recentes). O roteirista SEMPRE marca
   'midia' (NUNCA undefined): lugar/cenário/evento → "footage"; só cai em "foto" se comprovadamente não há vídeo.
   Erro real: abertura de NY virou fotos/vídeo-lixo em vez de footage 4K de skyline.

**PESQ-12.** FOOTAGE = LANDSCAPE 4K DE QUALIDADE, das plataformas ASSINADAS (lei do Mateus, 05/jul): todo footage tem que ser
   16:9 LANDSCAPE (REJEITAR vertical/retrato — arruína o enquadramento) e 4K real de fonte ASSINADA (Shutterstock 1ª
   parada / Envato / Storyblocks / Motion Array + Reuters p/ evento real). CC0 (Pexels/Pixabay/Coverr) FORA do pipeline
   — dava b-roll comprimido/lixo (bitrate baixo). Erro real: abertura de NY tinha 1 vídeo vertical + 2 CC0 de 3-13MB.
   → PRÉVIA DA GALERIA (bug do reprodutor): cena com <video> usa seek puro (currentTime=f(t)) que NÃO reproduz ao vivo
   (seek a 60fps trava → parece estático/foto). A galeria seta window.__PREVIEW=true + dá .play() nos vídeos, e o
   vSeek/currentTime da cena É PULADO quando __PREVIEW (toca fluido na revisão; seek só no render 4K). Toda cena de
   vídeo tem que respeitar __PREVIEW. NÃO confundir "estático na galeria" com "footage ruim" — conferir o render 4K.

**PESQ-13.** MÍDIA CAÇADA = VALIDAÇÃO POR VISÃO ROBUSTA + FONTE CERTA POR TIPO (lei do Mateus, 05/jul — o caçador NUNCA pode
   entregar mídia ERRADA): o caçador automático pega o 1º resultado do stock e o QA visual fraco (Haiku) deixa passar
   o assunto errado. Erro real: 5 "fotos" do escudo vieram TODAS uma foto de comida grega (bloco noSearchResults do
   Shutterstock) e 2 dos 4 footages errados (Hubble→fumaça, enchente RS→gelo ártico). REGRAS:
   • Toda mídia caçada passa por validação de VISÃO forte (eu/Opus na arquitetura CLI, não Haiku) — SE não mostra o
     assunto EXATO (o Hubble de verdade, a enchente do RS de verdade), DESCARTA (mídia errada é pior que nenhuma).
   • FONTE por tipo: espaço/NASA (Hubble/ISS/satélites) = NASA/ESA oficial, NÃO stock genérico. Evento REAL específico
     (enchente RS 2024) = Reuters/busca datada. DOCUMENTO (reportagem/estudo: Fapesp, Quanta, posts) = clipping REAL da
     fonte (citador-documentos), NUNCA foto de stock. PESSOA citada = foto REAL da pessoa (Commons/instituição), nunca
     stock genérico (PESQ-08). Stock (Shutterstock) = só p/ GENÉRICO de lugar/cenário que TEM resultado real.
   • Trava anti-lixo no baixar.mjs: se a busca cai no bloco "noSearchResults/curatedGrid", ABORTA (nada baixado).

**PESQ-14.** REUTERS: 1 (MÁX 2) VÍDEO POR VÍDEO INTEIRO — não por cena (lei do Mateus, 05/jul): cada vídeo do canal (que tem
   várias cenas) usa NO MÁXIMO **1 clipe Reuters** (2 só se muito necessário) — NÃO 1 por cena/beat. PTS = dinheiro;
   ser CRITERIOSO no que baixar (só o evento filmado que realmente NÃO existe em fonte aberta/PD e é central pra
   narrativa). O resto do histórico → fontes ABERTAS (Commons/NARA/LoC/AP Archive/British Pathé/domínio público) ou
   foto de arquivo. Curar shortlist de graça (shotlist é grátis) e baixar só o(s) 1-2 melhores por vídeo, ≤6 PTS cada.

**PESQ-15.** QUERY DE STOCK É SUJEITO+AÇÃO+ATMOSFERA, NUNCA CATEGORIA GENÉRICA (lei do Mateus, 07/jul — origem: auditoria
   real de `~/Downloads/stock-hub/manifest.jsonl` achou queries clichê de banco de imagens ("person sleeping
   peaceful bedroom night", "student studying writing notes focused desk") ao lado de queries boas ("surreal
   dream clouds sky ethereal slow motion"), e um caso de MISMATCH real: a query genérica de estudante trouxe
   um clipe aéreo de "Brooklyn public housing project" sem relação nenhuma — a plataforma não tem como filtrar
   por relevância quando a busca é abstrata demais):
   • **Fórmula:** SUJEITO ESPECÍFICO + AÇÃO/ESTADO CONCRETO + ATMOSFERA/LUZ + (quando fizer sentido) ESTILO DE
     CÂMERA. Tirar da FRASE da narração o detalhe concreto ("estudo do sono COM ELETRODOS", não "estudo do
     sono" liso).
   • **`--n=3` sempre explícito** na chamada de `scripts/stock/baixar.mjs` (o script já default pra 3, mas
     declarar por escrito evita herdar um `--n=1` de algum wrapper antigo — foi exatamente o que aconteceu:
     `scripts/stock/baixar.mjs`, código do runtime 2 já arquivado, tinha `--n=1` hardcoded e ninguém mais usa
     esse wrapper hoje, mas o hábito de comparar candidatos de verdade precisa estar no PROMPT do agente, não
     só no default do script). **Baixe os 3, compare os 3 por visão** — já pagou pelos 3, não decida no 1º.
   • Detalhe + os exemplos reais bons/ruins: `.claude/agents/pesquisa-imagens.md` §"Fórmula de query criativa".

**PESQ-16.** ASSET NOMEADO NO midia_necessidade/TESE DO ESPELHO É OBRIGATÓRIO — NÃO "HOOK OPCIONAL" (lei do Mateus, 08/jul —
   origem: a mesma cena bedmachine entregue SEM a viz real do BedMachine, só com um comentário "dropar o mapa real
   aqui SE QUISER" no HTML). Ele: "Cadê a imagem do fundo real da pesquisa do BedMachine? Você deveria ter pensado
   nisso já… [achei em 5s no Google]."
   • Se o midia_necessidade (ou a tese/prosa) do segmento NOMEIA uma mídia REAL ("viz do modelo na entrada", "mapa
     real do relevo", "o estudo citado", "a foto do lugar"), ela é PARTE DA CENA — não enfeite opcional.
   • O montador PROMOVE esse asset pra needs.media (não deixa só na prosa). pesquisa-* SOURCEIA da fonte oficial.
     editor-de-arte INTEGRA. É PROIBIDO deixar um comentário "dropar X aqui se quiser" e entregar a cena sem o X.
   • Regra do espectador: quando o roteiro/tese fala de uma imagem/estudo/mapa/relevo REAL, o público espera VÊ-LO
     na tela. Achar é barato (foi o 1º resultado do Google) — a omissão é que decepciona.

**PESQ-17.** EVENTO/OBJETO REAL NOMEADO = O REGISTRO REAL DAQUELE EVENTO, NUNCA FOOTAGE GENÉRICO (lei do Mateus, 09/jul —
   GENERALIZA a ARTE-29, que era só p/ histórico, agora p/ QUALQUER acontecimento real; origem: re-espelho
   mídia-real dos vídeos ponto-nemo/lago-peigneur/eua-china). Ele: "nunca ilustre eventos reais com footages
   genéricos, ok? sempre com footages REAIS para acontecimentos reais."
   • Roteiro cita um EVENTO específico (reentrada da Mir 2001 sobre Fiji, redemoinho do Lago Peigneur 1980,
     plataforma Texaco afundando, cachoeira do canal Delcambre) → a pesquisa caça o ARQUIVO REAL daquele evento
     (agência/news/USGS/NASA/ESA/AP Archive/DVIDS), NÃO um "whirlpool aerial 4K"/"spacecraft reentry" genérico que
     só se PARECE. Genérico ilustrando evento datado/nomeado DECEPCIONA o espectador logo de cara.
   • Cita um OBJETO real (ISS, Dragon, Zvezda, DF-41, porta-aviões nomeado) → footage/foto OFICIAL daquele objeto.
     A ISS é o objeto mais filmado do espaço (NASA PD) — não há desculpa pra desenhá-la; idem naves/módulos.
   • Hierarquia: VÍDEO real do evento > FOTO real do evento > (só então, e SÓ se o beat for genérico de verdade —
     oceano aberto, cleanroom, macro de dissolução) footage genérico real. Genérico jamais p/ acontecimento nomeado.
   • Footage já baixado é ATIVO PAGO: USAR, não recaçar (eua-china já tinha 70 arquivos + 2 Reuters em uso). Reuters
     cota 1–2/vídeo INTEIRO — cheia = não caçar mais. Vídeo é sempre prioridade sobre foto (PESQ-11).

**PESQ-18.** TODA MÍDIA BAIXADA PASSA POR GATE DE COMPATIBILIDADE CHROME ANTES DE ENTRAR EM `_media/` (mordeu 3× em
   24h, 18-19/jul). O Chrome do render NÃO decodifica HEVC/H.265, ProRes, nem 10-bit/422 — e imagem gigante
   (>40MP / JPEG progressive de dezenas de MB) estoura o timeout de `__fotosProntas` sob carga. Sintoma: render
   aborta "MÍDIA QUEBRADA (não carregou)" — correto do render-one.sh, mas tarde demais. Casos reais: frio
   s21/s69 (stock HEVC 422p10), buracos s30/s31/s49/s61 (ocular HEVC Rext) e s56/s57 (Bullet Cluster 53MP +
   Webb progressive 21MP). REGRA (agora no `pesquisa-imagens.md`): após CADA download, `ffprobe`; vídeo com
   codec≠h264 ou pix_fmt≠yuv420p → transcode imediato (`libx264 -pix_fmt yuv420p -crf 15`); imagem >40MP ou
   progressive gigante → downscale lado maior ≤5120px baseline. O arquivo entra em `_media/` JÁ compatível —
   a falha não pode esperar o render pra aparecer.

**PESQ-19.** CENA DE GEOGRAFIA SEM GEOMETRIA REAL É BLOQUEIO, NUNCA IMPROVISO (o Mateus, 19/jul, com raiva: "s33 sem
   o mapa real da China, VÁRIOS mapas sem mapa real — por quê?!"). O motor da VM rodou a estação ARTE sem as
   estações de PESQUISA (geo/pessoas/codec) e os editores IMPROVISARAM abstração: globo wireframe (s33), grade
   sem geografia (s10), mundo pontilhado (s41), cards de nome sem retrato (s07). Agravante: `assets/geojson/`
   JÁ TINHA `ne10m-admin0-countries.json`/`ne110m-countries.json` — o editor nem conferiu. REGRAS DURAS:
   (a) cena com país/estado/região/rota SEMPRE usa geometria REAL (Natural Earth/IBGE/fonte oficial) — conferir
   `assets/geojson/` PRIMEIRO, baixar da fonte se faltar, e se não conseguir → PARAR e reportar bloqueio,
   jamais "estilizar"; (b) pessoa citada → CAÇAR o retrato real primeiro (PESQ-08 proíbe FABRICAR rosto, não
   proíbe foto real; card sem rosto = só fallback DOCUMENTADO quando a foto comprovadamente não existe — caso
   Luísa Caon: mestranda sem foto pública; caso Marcelo: a foto ESTAVA no registro público da UFSM); (c) o
   DESPACHANTE nunca pula pesquisa-*: precedência dura pesquisa→arte. TÉCNICA que funcionou no conserto:
   pré-projetar o GeoJSON no BUILD (node: equiretangular→paths de tela, `scratchpad/build-s33.mjs`) = HTML
   determinístico enxuto (mundo 110m ≈ 55KB) sem fetch em file://; labels SEMPRE screen-space compensando a
   câmera (nunca dentro do #cam zoomado — vide lei do s38: pills cortadas + bandeira faltando).

**PESQ-20.** PENTE FINO É EDITORIAL, NÃO SÓ CAÇA A BUG — "SERÁ QUE NÃO TEM UMA IMAGEM MELHOR PRA REPRESENTAR?" (o Mateus,
   20/jul: "não procure só bug, vá com olhar crítico tipo tem-imagem-melhor"). Toda cena de mídia real merece a
   pergunta CURATORIAL: a obra é a mais ICÔNICA, PRECISA e HONESTA disponível? Caça a "proxy impreciso passando
   por fato" — o afresco "de Safo" de Pompeia NÃO é Safo (só vale se a tela disser "uma poeta", nunca legendado
   "Safo"); a herma Capitolina tem inscrição MODERNA (preferir vaso inscrito real); banquete genérico NÃO prova
   afeto same-sex (Warren Cup, a cena do casal); Nilo com torre de alta-tensão é anacrônico p/ o séc. II; a
   "lauda mariana" não ilustra "pecado" (Bíblia moralizada de Viena). Cruzar com história + WebSearch; se existe
   obra melhor, a pesquisa-* SOURCEIA antes de fechar. Num vídeo-vitrine, vale a revisão adversarial por bloco
   (críticos-editoriais em paralelo). E: quando a estação Arte (Fable) esgota, os desenhos podem ir de Opus 5
   via os tokens OAuth do .env (arte-driver-opus.sh, 1 instância/token) — vestindo o conceito-visual do diretor.

**PESQ-21.** BASE DE MAPA É UMA SÓ — MapTiler `satellite-v2` EM TODO MAPA DO CANAL (decisão do Mateus 21/jul na
   revisão da galeria; teste empírico em `knowledge/BASES-DE-MAPA.md`; **destilada só em 22/jul** — a decisão
   ficou 1 dia sem virar lei e o `mapista.md` seguiu prescrevendo ESRI/Blue Marble em 4 pontos, exatamente o
   modo de falha da ARTE-46). **Esta lei SUPERA as menções de base do ARTE-31 e do ARTE-46** (que citam
   "satélite ESRI/MapTiler" só como exemplo da época) e a linha de geografia do `knowledge/design-laws.md`.
   • **Nitidez e CONSISTÊNCIA valem mais que economizar cota.** O teste na unha (mesmos pontos do RS, mesmos
     zooms): MapTiler serve tile **512** contra 256 do ESRI = 2× linear / 4× em pixels no mesmo zoom — decisivo
     no render 4K; o ESRI tem cobertura de NUVEM em região brasileira (Itaimbezinho z15) e **em z20 devolve um
     retângulo cinza "Map data not yet available" NA TELA** (teto seguro ~z18 no Brasil).
   • **NÃO MISTURAR BASES ENTRE CENAS IRMÃS do mesmo vídeo** — mistura ESRI/NASA/MapTiler = reprovado, o Mateus
     vê e cobra. Se por emergência o vídeo cair pro ESRI, cai INTEIRO, nunca uma cena só.
   • **ESRI = fallback de emergência DECLARADO** (cota MapTiler 403/429 comprovada no terminal e reportada),
     nunca escolha estética. O DEM cai com a mesma cota → pra manter 3D no fallback, AWS Terrarium.
   • **Blue Marble estático SAIU** ("mapa é MapTiler ao vivo, não jpg com silhueta desenhada por cima"), e com
     ele os templates `scripts/templates/map-scene.mjs` e `geo-map.mjs` (marcados APOSENTADOS no cabeçalho).
   • Corolário de PROPAGAÇÃO (o erro de processo aqui): decisão registrada em `knowledge/*.md` **não é lei** —
     enquanto não vira `PREFIXO-NN` no `seed/aprendizado.md` E não entra no `.claude/agents/*.md` do especialista,
     o agente segue executando o padrão velho. Decidiu na galeria? destila + veste o agente na MESMA tacada.
   `mapista.md` reescrito (base única, critério 2D×3D, DEM obrigatório, palco 4K nativo) + propagado em
   CATALOGO-MODELOS · DEPARTAMENTOS · design-laws · qc/lentes · MIDIA-REAL · FONTES-MIDIA · knowledge/README ·
   PIPELINE · README.

---

**PESQ-22.** O PRODUTO INDICADO APARECE COMO **PRODUTO**, NUNCA COMO PRINT DE LOJA (o Mateus, 24/jul, ao desenhar o
   YouTube Shopping: *"na tela eu não quero que apareça print do produto na estante das lojas, e sim uma foto/vídeo do
   produto em si"*; agente-raiz: `pesquisa-imagens` + quem montar a cena de indicação). Screenshot de marketplace traz
   junto o que destrói a cena: preço que muda, selo de frete, avaliação, o layout de outra marca ocupando a tela do
   canal — e envelhece no dia seguinte. **O que entra:** foto ou vídeo **do objeto**, fundo limpo, tratado no padrão do
   canal, como qualquer outra mídia real. É o mesmo princípio de "nunca fabricar rosto" e "nunca desenhar país à mão",
   aplicado ao comércio: mostra-se a COISA, não a vitrine de terceiros. ⚠️ Vale também para o **QR em tela**: ele leva
   ao produto, então a arte ao redor dele é do canal, não da loja.

**PESQ-23.** O VENDEDOR DO PRODUTO INDICADO É AVALIADO DE VERDADE, NUNCA ESTIMADO — E "NÃO ACHEI PRODUTO DE QUALIDADE"
   É RESPOSTA VÁLIDA (o Mateus, 24/jul, ao desenhar o YouTube Shopping: *"a gente tem que avaliar o vendedor se tem
   vendas altas e boa avaliação na plataforma — isso é tarefa de um agente nosso"*). Agente-raiz: **`curador-de-produtos`**
   (novo). A indicação é de **1 produto por vídeo** ("otimizador de vidas" — solução real ou conhecimento que agrega —
   NUNCA vendedor de feira, R1.1), e o produto só entra com o vendedor **MEDIDO na própria plataforma**:
   • **Mercado Livre**: termômetro **verde** (`level_id` 5_green/4_light_green) **ou** **MercadoLíder** gold/platinum
     (`power_seller_status`), **E** ≥500 vendas (`transactions.total`) **E** ≥90% positivo (`ratings.positive`).
   • **Shopee**: `ratingStar` ≥4,7 **ou** loja oficial (`isOfficialShop`), **E** ≥500 vendas, **E** comissão de afiliado > 0.
   **Ausência de medição** (API sem credencial, vendedor sem histórico) é **REPROVAÇÃO**, não "provavelmente é bom" —
   inventar uma avaliação torna o canal fiador de uma mentira. Entrega **3–8 opções do MESMO tipo de produto** (ML e/ou
   Shopee) pro espectador escolher onde comprar; a **coleção** do YouTube Shopping é por **NICHO** (mín. 3 produtos), não
   por vídeo. **Nunca comprar, nunca inventar** produto/preço/link. Nenhum vendedor aprovado → `produto:null` + motivo
   (resposta completa, não fracasso). A reputação é **ponto no tempo** (grava `medido_em`; **remeça** ao reusar).
   Complementa a **PESQ-22**: a PESQ-22 governa o que aparece na TELA (a mídia é o objeto, não o print de loja); a
   PESQ-23 governa **quem pode vender** (o gate do vendedor). Sem credencial de API o caminho fica pronto e o dado real
   sai via Chrome — nunca finja que a busca rodou. Ferramenta: `top10 shopping <proj> --nicho --tema` (`scripts/shopping/`).

**PESQ-24.** RIGOR SEM TETO DE ESFORÇO VIRA DEMORA — TODO AGENTE DE BUSCA PRECISA DE ORÇAMENTO, NÃO SÓ DE
   PADRÃO (Mateus, 25/jul: *"o agente demorou 55 minutos pra ir atrás de uma foto, porque não é tão normal..."*).
   **O que aconteceu:** o `pesquisa-pessoas` levou **55 min e 216k tokens** para achar UM retrato. E não se
   perdeu — fez por escolha: baixou um episódio de 2h11, rodou detecção + reconhecimento facial em **21.875
   detecções**, mediu pose e piscada em **12.996 frames**, e só então baixou os instantes bons em 4K. O
   resultado foi ótimo (1800×2160 nativos contra os 506px anteriores, identidade confirmada por 3 vias).
   **A CULPA É DO BRIEFING, NÃO DO AGENTE.** O pedido empilhava exigências de rigor — *"identidade verificada
   olhando"*, *"≥1600px NATIVOS, não upscale"*, *"nunca fabricar rosto"*, *"NÃO ENCONTRADO é resposta válida"* —
   e **não dava nenhum teto de esforço**. Um agente que leva rigor a sério faz exatamente o que esse fez. Faltou
   a frase que ninguém escreveu: *"se em 10 min não tiver algo claramente melhor, volte com o que achou"*.
   **A REGRA, em dois tempos:** (1) **caça direta** nas fontes óbvias, com prazo curto — resolve a maioria dos
   casos; (2) **escavação** (extrair frame de vídeo, comparar quadro a quadro, medir pose) só quando a caça
   direta não achou nada usável E a cena depende daquela imagem — e **anunciando antes que vai escavar**.
   Estourou o tempo sem ganho claro? Pare e relate o que tem.
   ⚠️ **MÉTODO PESADO SEM GANHO PROPORCIONAL É DESPERDÍCIO MESMO QUANDO FUNCIONA.** A pergunta antes de montar
   qualquer pipeline de análise: *o que isto me dá que olhar os 5 melhores candidatos não daria?* Se a resposta
   for "certeza marginal", não vale — e o custo não é só cota, é **relógio de produção**.
   **Corolário para quem escreve briefing (eu):** toda exigência de qualidade que você empilha sem um teto de
   esforço é um convite para o agente cavar até o fim. Rigor e prazo se escrevem JUNTOS.

**PESQ-25.** FOTO DE ÉPOCA CERTA E RESOLUÇÃO ERRADA NÃO SERVE — E O PISO PRECISA ESTAR NO PEDIDO (25/jul).
   A caça anti-repetição do `senna` trouxe 10 fotos, todas de acervo aberto, todas com **a época correta** (o
   difícil) e todas validadas por visão. Medida a resolução: **1 de 10** serve para tela cheia 4K
   (`senna-chuva-donington-1993`, 2544×1696). As outras vão de **600×940** a 1800×1301 — ampliar 6× no palco
   3840. Uma delas, o cockpit de Imola-88, ainda tem desfoque de movimento.
   **O JULGAMENTO QUE ISSO EXIGE:** trocar a foto repetida por uma borrada é **piorar**. Repetição cansa; foto
   sem resolução quebra o piso de qualidade que o Mateus cravou (*"esqueça o HD, HD não faz parte da minha
   filosofia"*). Entre os dois defeitos, mantém-se a repetição e reporta-se — nunca se resolve um erro criando
   outro maior.
   **A CORREÇÃO É DE BRIEFING, não do caçador:** o pedido dizia "época correta, licença aberta, distintas
   entre si" e **não dizia largura mínima**. Ele entregou exatamente o pedido. Todo pedido de foto para tela
   cheia precisa carregar o piso: **≥2400 px de largura** para o palco 4K (≈1200 se a foto entra em meia tela),
   e "sem desfoque de movimento" quando o assunto é o objeto principal.
   ⚠️ **Upscale não resolve** e não deve ser aceito como saída: multiplica pixel sem acrescentar informação, e
   em rosto o resultado é pior que a foto pequena.
   **Como verificar:** `ffprobe -v error -select_streams v:0 -show_entries stream=width,height -of csv=p=0 <foto>`

### PESQ-26 · Superlativo se apura na base INTEIRA — e o limite do banco pode cortar antes de ordenar
**O caso, medido em 26/jul (`planetas-algodao-doce`):** para conferir *"2º planeta menos denso já
encontrado"*, o agente consultou o NASA Exoplanet Archive pedindo o ranking de densidade. Voltou uma
lista ordenada, plausível — e **sem o WASP-193b nem o Kepler-51**, que são justamente os planetas do
vídeo. Causa: o TAP do arquivo aplica o `TOP N` **antes** do `ORDER BY`. Ele corta um punhado
arbitrário de linhas e ORDENA ESSE PUNHADO. O resultado sai ordenado, com cara de ranking, e é o
ranking de uma amostra ao acaso.
**Por que é perigoso e não só errado:** ranking truncado não parece quebrado. Parece resposta. Um
"3º maior do mundo" derivado assim vai para a tela com a confiança de um dado apurado, e o erro só
aparece quando alguém do público refaz a conta.
**A REGRA:** superlativo ("o maior", "o segundo menos denso", "o mais antigo") **nunca** sai de uma
consulta com limite. Baixe a classe filtrada inteira e ordene LOCALMENTE, ou confirme o superlativo
numa fonte que já o afirma por escrito. E confira sempre se o sujeito do vídeo aparece no ranking
que você recebeu: **a ausência dele é o teste barato que pega este defeito.**
**Corolário — superlativo é datado.** O mesmo caso: *"2º menos denso"* era verdade em 2024 e hoje é
~7º, entre 6.324 exoplanetas. A frase só se sustenta porque a narração ancora no tempo (*"em 2024,
ele era"*) — então **o ano tem de estar visível na tela ao lado da posição**. Superlativo sem data é
uma afirmação que apodrece sozinha.
**Vale para qualquer catálogo com paginação padrão**, não só o da NASA: se a API impõe teto de
linhas, ordenar no servidor sem garantir que o teto veio DEPOIS da ordenação produz o mesmo engano.
**Como verificar:** o sujeito do vídeo tem de estar na lista devolvida. Se não está, a consulta
truncou — refaça baixando a classe inteira.

### PESQ-27 · Resolução máxima que é LIMITE FÍSICO DA FONTE não se caça de novo — declara-se
**O caso (26/jul, `planetas-algodao-doce`):** a cena precisava de Titã, e a melhor imagem existente
é **1024×1024**. Não é falha de busca: a câmera ISS da Cassini **é** um sensor de 1024 px, e a sonda
foi destruída em 2017. *Não existe Titã real em 4K no universo.* No mesmo lote, a capa do livro do
Hawking topa em **354×500** — a própria editora publica a 243×349, e nenhuma distribuidora passa
disso, porque a arte digital de origem não é maior.
**Por que a regra existe:** sem ela, o agente seguinte relê o alvo, vê "abaixo de 4K", e sai caçar
de novo o que não pode ser encontrado. Isso é inferência gasta contra a física — a busca mais cara
que existe, porque nunca termina por sucesso. E a alternativa silenciosa é pior: alguém amplia e
entrega HD disfarçado num 4K, contra a regra dura do canal.
**A REGRA, em três partes.** (1) Quando o teto de resolução é da FONTE, **registre o motivo junto do
número** na pauta — "1024² é o sensor da Cassini", não apenas "1024²". Número sozinho parece
desleixo de quem baixou; o motivo fecha o assunto. (2) A cena se adapta ao insumo: mídia assim entra
como **inserção comparativa, cartão ou moldura**, nunca em tela cheia — ampliar é o que a regra dura
proíbe. (3) Se a única saída for ampliar, isso é **decisão do dono**, não conveniência do agente.
**A pergunta que separa os dois casos:** *"existe uma versão maior em algum lugar do mundo?"* Se a
resposta é não por natureza da fonte — sensor, filme de época, arte digital pequena, registro único
—, o assunto está encerrado e a arte contorna. Se é não *por enquanto*, continue procurando.
**⚠️ Achado de infraestrutura do mesmo caso:** `infra/upscale/` tem README e `models/`, e **falta o
binário** `realesrgan-ncnn-vulkan`. Ou seja, a saída de ampliar controlada hoje **não existe** —
capacidade documentada que ninguém pode usar é pior que capacidade ausente, porque alguém a planeja.
**Como verificar:** todo item de pauta com resolução abaixo do master traz, no mesmo campo, o motivo
do teto — e o uso previsto (inserção/moldura), nunca "tela cheia".

### PESQ-28 · A FONTE ACHADA NO PRÉ-ROTEIRO ALIMENTA A EDIÇÃO — buscar de novo é trabalho dobrado
**Pedido do Mateus (31/jul/2026):** *"A gente também tem que ter um documento com as fontes certinhas
para que os agentes de mídia da edição de vídeo possam consumir os arquivos que os agentes de busca do
pré-roteiro já buscaram, e isso precisa ser alimentado na edição pra evitar agente fazendo trabalho
dobrado."*

**O buraco:** o `pesquisador-de-pauta` acha e LÊ o documento, o relatório, a matéria com imagens — e
semanas depois, na estação de pesquisa da edição, o `pesquisa-documentos` sai caçando A MESMA decisão
judicial do zero, o `pesquisa-dados` re-localiza a série que o relatório já trazia, e o
`pesquisa-imagens` vai ao stock sem saber que a matéria da Bloomberg tinha as fotos. Fonte achada duas
vezes é inferência paga duas vezes — e a segunda busca pode achar uma fonte PIOR que a primeira.

**A PONTE:** o pesquisador-de-pauta entrega saída DUPLA — `pauta-fundamento.md` (prosa, para o
roteirista) e **`pauta-fundamento.json`** (estruturado, para as máquinas; schema em
`contratos/pauta-fundamento.schema.json`). Cada fonte carrega:
- **`tipo`** — decide quem consome: `documento` → pesquisa-documentos (clipping) · `estatistica`/
  `relatorio` → pesquisa-dados · `materia` com mídia → pesquisa-imagens;
- **`citacoes`** — os trechos LITERAIS. É a mesma informação três vezes usada: o roteiro os aspa
  (ROT-58), o clipping os grifa (modo documento), e o QC confere narração×fonte;
- **`midia_potencial`** — o que a página oferece à tela, visto por quem JÁ a visitou.

**Os consumidores leem ANTES de buscar** (seção padronizada nas marcas de `pesquisa-documentos`,
`pesquisa-dados`, `pesquisa-imagens` e `montador` — este último escreve os `needs` já apontando as
URLs achadas). A ordem vira: primeiro o que a pauta apontou, depois a caça. O que a pauta declarou
não ter (seção "O que eu NÃO achei") é o que legitimamente se busca do zero.

**Como verificar:** `node scripts/validar-contrato.mjs pauta-fundamento out/<proj>/pauta-fundamento.json`
· e o driver (`pesquisa-driver.sh`) só dá OK com os DOIS arquivos no disco.

### PESQ-30 · Geometria se seleciona por ISO3, nunca por nome de soberania — e trava que não confere IDENTIDADE não é trava

> 🔀 Nasceu como **PESQ-29** num commit local da VM e colidiu com a lei de mesmo número já publicada no remoto (02/ago). Pela [SIS-62], quem está no remoto fica com o número; esta virou **PESQ-30**. Citação antiga a `PESQ-29` que descreva ESTE assunto aponta para cá.
**Caso (01/ago/2026, `galaxia-arco-flecha`):** `scripts/geo-pais-completo.mjs` casava `SOVEREIGNT` junto
com os nomes próprios no Natural Earth admin-0. "Netherlands" casava 4 features e retornava **Sint
Maarten** (Caribe); "United Kingdom" casava 18 e retornava **Dhekelia** (Chipre) — ambos com "✓" verde
na tela, porque a trava existente conferia CONTAGEM de partes, não identidade. Só foi pego porque o
bbox foi conferido contra coordenada conhecida.

**A regra:**
1. Seleção de país no Natural Earth (e afins) casa por **ISO3/ADM0_A3** (`--a3=NLD`), nunca por nome de
   soberania — a metrópole disputa com as próprias dependências e pode perder por ordem de arquivo.
   Match por nome só em duas passadas (nome próprio primeiro; soberania como último recurso, ABORTANDO
   se ambígua).
2. Validação de geometria confere **identidade**, não só estrutura: bbox contra coordenada conhecida
   (capital dentro do polígono, vizinho fora). Trava que passa com o país errado é pior que nenhuma.
3. Suspeita herdada: geojson antigo do acervo de países com dependências (GBR, NLD, FRA, DNK, USA)
   pode ter nascido desse bug — na dúvida, re-valide o bbox antes de usar.

**Conserto aplicado:** match em duas passadas + `--a3=` + `iso_a3` nas properties + log do ADM0_A3
escolhido (01/ago/2026, os dois worktrees).
---

**PESQ-29.** UMA NECESSIDADE É UM **LEQUE** DE BUSCAS — E "NÃO ACHEI" COM UMA QUERY ATRÁS É FALSO
   (Mateus, 02/ago/2026, sobre o `paises-baixos-mar`: *"quero mais uso dos footages que os nossos caças
   de mídias coletaram. E se eles coletaram mal esses footages, foi porque tivemos problemas nas queries
   dos caçadores de mídia"* · e sobre os que vieram: *"os que foram escolhidos também foram bem ruins,
   não representaram direito a cultura da Holanda"*).

   **A MEDIÇÃO.** 97 segmentos, 39 cenas de arte, e o vídeo inteiro entregue com **3 footages e 2 fotos**
   — 17,9% das cenas de arte com registro real (mediana da casa: 56,6%). A cadeia, medida arquivo por
   arquivo, tem três elos, e **nenhum deles é o que se suspeitava**:

   • **O espelho só PEDIU mídia real em 8 das 39 cenas de arte** (`needs.midia`). Um caçador perfeito
     traria 8. O teto foi decidido no montador, não na caça. *(Fora do escopo desta lei — mas é o maior
     fator isolado, e quem for consertar cobertura de mídia começa aí.)*
   • **Das 8, chegaram 4.** As outras 4 (s37 moinhos · s43 tulipas · s65 Maeslantkering · s83
     Benthemplein) nunca chegaram, viraram desenho, e a mídia prometida ficou num **comentário** do HTML
     (`/* <!-- INSET FOOTAGE: _media/…`). Morto-silencioso clássico: o log diz sucesso e a tela não tem.
   • **As 4 que falharam falharam por PORTA, não por busca.** `_pendencias-stock.md` registra
     Shutterstock, Storyblocks e Envato **deslogados na VM**, e a caça parou ali. Na madrugada anterior o
     **mesmo Shutterstock baixara 12 clipes sem falhar no Mac** (`~/Downloads/stock-hub/manifest.jsonl`,
     27/jul 22:41–22:57). A assinatura — **ilimitada** — estava paga e viva. Faltou trocar de máquina.

   ⚠️ **A HIPÓTESE DA QUERY EM PT-BR NÃO SE CONFIRMOU, e isso importa.** As queries de registro já eram
   inglês visual e cultural (`dutch windmills field turning landscape`, `tulip fields netherlands aerial
   drone colorful`, `Maeslantkering storm surge barrier Rotterdam aerial`). O `baixar.mjs` **nunca rodou
   uma vez** para este projeto (zero linhas holandesas no manifest, em qualquer data). O defeito não era
   a LÍNGUA da query: era **haver uma só**, escrita como nome de arquivo de destino, sem plano B.

   **A LEI:**
   1. **Toda necessidade leva ≥4 buscas a ≥2 plataformas** antes de qualquer "não achei", nesta escada:
      nome próprio (inclusive na língua local) → **descrição física do objeto SEM o nome** → contexto
      geográfico/cultural → plano alternativo que serve à mesma tese. O degrau que mais salva é o
      segundo: **acervo etiqueta pelo que a câmera viu, não pelo nome próprio**. Conceito não se indexa
      (`polder`, `waterschap`); imagem se indexa (`dutch countryside aerial`, `amsterdam canal houses`).
   2. **"Não achei" se escreve com os termos usados, todos** — senão é opinião, e ninguém pode
      acrescentar o termo que faltou.
   3. **Falha de ambiente não é resposta de conteúdo.** Sessão caída, CAPTCHA, perfil deslogado: troque
      de plataforma, troque de máquina (a sessão vive no perfil do Chrome, que é POR MÁQUINA), e só então
      declare — declarando **BLOQUEIO**, nunca ausência. Fonte livre não substitui assinatura bloqueada.
   4. **A régua de qualidade: representa o ASSUNTO e o LUGAR.** A pergunta que reprova é *"trocando este
      clipe por outro de outro país, alguém notaria?"* Se ninguém notaria, é stock intercambiável.
   5. **Ressalva que o próprio agente escreve é REPROVAÇÃO, não rodapé.** Os 2 clipes principais deste
      vídeo foram registrados com o defeito por escrito — *"mostra o pátio/terminal, não avião no ato de
      pousar"*, *"é vista a nível do rio, não o drone wide dos 19 em fila; o barco domina o quadro"* — e
      foram para a tela assim mesmo. Ver o defeito, escrever o defeito e entregar o defeito é pior que
      não tê-lo visto. Ressalva = volte ao leque.
   6. **Stock ilimitado não se economiza.** Shutterstock/Storyblocks/Envato/Motion Array são assinatura:
      o custo marginal do clipe seguinte é ZERO. Trazer 3 para 43 cenas não poupou nada de ninguém.

   **GATE (conserto que depende de memória é conserto morto):** `scripts/qc-midia-real.mjs`, ligado no
   `top10 qc out/<proj>`. Cruza o que o espelho PEDE (`needs.midia` + `modo` footage/foto/drone/
   split-footage + `midia`) contra o que chega na TELA, e distingue falha de faxina pós-entrega pelo
   HTML: src vivo com arquivo ausente = `--limpar` (REND-18, informa); sem src vivo = a mídia nunca
   chegou (reprova); caminho só em comentário = rebaixamento silencioso (reprova). O `qc-src-existe` não
   podia pegar isto — ele ignora comentário de propósito desde 22/jul, e **ausência não tem src pra
   quebrar**. Rodado na casa em 02/ago: pega as 4 do `paises-baixos-mar` e mais **7 em 3 outros projetos**
   (senna s27/s43/s45/s57 · buracos-negros-predios s10/s36 · simpsons-copa s35) — cenas em modo M07
   ("footage/imagem real full-bleed") entregues sem uma única `<img>`/`<video>`.

   **AGENTE-RAIZ corrigido:** `cerebro/agentes/pesquisa-imagens/OFICIO.md` §3b (o leque), §4 (opções, não
   a primeira), §4b (assunto+lugar), §4c (ressalva=reprovação), §9b (ambiente≠conteúdo) ·
   `CONTRATO.md` §1b (quais cenas são suas — `midia_termos`/`midia_necessidade` MORRERAM do schema e o
   contrato ainda os pedia) e checagens 1b/1c/2b/9 · `marcas/top10/agentes/pesquisa-imagens.md` §3b
   (escada de plataforma/máquina), §3c (fonte livre é declaração), §5b (o leque da Maeslantkering).

---

### PESQ-31 · O ESPELHO É O TETO DE MÍDIA REAL — e pedido sem termo de busca não é pedido

**Caso (02/ago/2026, `paises-baixos-mar`):** o Mateus, sobre o vídeo pronto: *"o vídeo ficou inteiramente
desenhos praticamente… pouquíssimos footages de vídeos (quase nada)."* Três consertos foram entregues no
mesmo dia — caça de mídia ([PESQ-29]), direção de arte ([ARTE-94]) e decupagem — e **nenhum levantava o
teto**, porque o teto é decidido antes de todos eles: das **39 cenas de cobertura, só 8 pediam registro
real** (20,5%, contra mediana de **44,6%** medida em 21 espelhos do acervo). Um caçador perfeito traria
8. Uma direção perfeita ancoraria 8.

E as 8 chegaram à pesquisa **mudas**: `midia_termos` vazio e `midia_necessidade` vazio nas oito. No
lugar dos termos havia 8 caminhos de arquivo INVENTADOS em `needs.midia`
(`_media/footage/kinderdijk/kinderdijk-19-moinhos-4k.mp4`), dos quais **4 nunca existiram no disco**.
Num vídeo sobre um país de moinhos, pôlderes, diques e Kinderdijk — coisas que existem, foram filmadas e
estão em qualquer banco de footage.

**A regra:**
1. **A arte não mostra o que ninguém pediu, e a pesquisa não caça o que ninguém listou.** O que o
   espelho deixa de pedir, nenhuma estação seguinte recupera. Toda coisa concreta NOMEADA na narração
   — animal, objeto, máquina, pessoa, lugar, obra — vira pedido de mídia real ([ARTE-88]).
2. **O ônus da prova é da DISPENSA, não da exigência.** O padrão é o registro real; quem dispensa
   escreve o porquê, e o porquê tem forma exata: *"isto não foi filmado"*. **"É mecanismo" é rótulo, não
   motivo** — num vídeo explicativo quase toda frase se deixa chamar de mecanismo, e é por essa porta
   que o mundo real sai do vídeo inteiro, uma cena por vez, cada uma bem justificada.
   A pergunta que separa os dois casos: ***isto não foi filmado, ou eu é que não procurei?***
   > ⚰️ **SUPERADA EM PARTE pela [ARTE-323] (16/set/2026) — só a FORMA «isto não foi filmado».** Quem
   > escreve o espelho não tem ferramenta de busca, e a forma virou senha: respondida sobre o mecanismo
   > e não sobre o sujeito, e às vezes falsa (operários do Seikan fotografados; duto da pirâmide filmado
   > em 1993). O ônus continua sendo da dispensa, mas o espelho PEDE a imagem da coisa nomeada, e quem
   > prova a ausência é a pesquisa. E a régua da soma passou a ser o TEMPO (`qc-piso-real`), não cenas.
3. **Mecanismo que acontece num LUGAR REAL ainda deve o lugar.** O desenho explica *como funciona*; o
   registro prova *que existe*. A maior parte das frases de mecanismo faz as duas coisas: pedem as duas
   camadas, não uma.
4. **Pedido MUDO não é pedido.** `midia: footage|foto|drone` com `midia_termos` e `midia_necessidade`
   vazios manda a pesquisa caçar sem assunto, sem lugar e sem época. Medido: isso é **0% em 19 dos 21**
   espelhos do acervo, e **100% (8/8)** no condenado — não é como a casa trabalha.
5. ⚠️ **`needs.midia` NÃO substitui o termo de busca.** Ele é a *grafia canônica* do asset: diz ONDE o
   arquivo vai morar, nunca O QUE procurar. Preenchê-lo sozinho, com um caminho que ainda não existe, é
   nomear o arquivo que se gostaria de ter — lê-se como pedido feito, e não é.

**⚠️ E A LEI IRMÃ ESTAVA NA GAVETA ERRADA — é metade da causa.** A [ARTE-88] ("a coisa nomeada vira
needs") foi escrita no ofício do **montador** e mora em `regras/ARTE.md`. Só que no fluxo do bruto do
apresentador — *"o PADRÃO, e a maioria esmagadora do que se produz"*, palavras do próprio ofício do
montador — quem escreve o espelho é o **decupador** (`PROXIMA.decupagem = "pesquisa"`; a estação
`espelho` só atende master pré-editado). E a fatia que o decupador carrega é `FIN.md` + `PESQ.md`.
Lei certa, agente que não roda, gaveta que ele nunca abre. **Por isso esta lei nasce em PESQ**, que é a
fatia que montador e decupador de fato leem — e por isso o gate mede o ARQUIVO sem perguntar quem o
assinou.

**GATE (conserto que depende de memória é conserto morto):** `node scripts/qc-espelho-midia.mjs <proj>`,
ligado nas estações **decupagem** (passo 6b) e **espelho** (passo 4) — as duas que produzem o arquivo.
REPROVA pedido mudo; ALERTA quando a taxa de pedido cai abaixo de 25% num vídeo que declara ≥5 cenas com
`needs.geo`. O piso e o guarda de `needs.geo` são os MESMOS do `qc-direcao-real` de propósito: dois pisos
diferentes para a mesma pergunta é como uma doutrina começa a divergir de si mesma. O guarda existe para
não reprovar quem desenha com razão — `planetas-algodao-doce` está em 23,2% e não deve nada: não existe
registro real de um exoplaneta ([ARTE-77], alarme falso é bug de prioridade alta). Rodado na casa em
02/ago: alerta em 3 de 21 (`el-nino` 10,9% — o vídeo da anchoveta; `nilo-nao-secou` 19,2%;
`paises-baixos-mar` 20,5%) e reprova em 2.

**AGENTE-RAIZ corrigido:** `cerebro/agentes/montador/OFICIO.md` — §10 deixa de contradizer a [ARTE-88]
(o corolário "não crave termo de busca" passa a falar do ASSUNTO abstrato, não do modelo escolhido),
nasce a **§10.1** (a dispensa é a porta larga, com as três travas) e a **§10.2** (a coisa nomeada vira
pedido, e pedido mudo não é pedido — a [ARTE-88] sai do rodapé e entra onde a contradição morava);
§13 ganha três recusas novas · `CONTRATO.md` §2.1 (`needs.midia` × termo de busca), §2.3 (o report passa
a trazer a TAXA DE PEDIDO) e a checagem 11.
⚠️ **Pendente, e é o elo que mais importa:** o `decupador` — que escreve o espelho da maioria dos vídeos
— continua sem doutrina nenhuma de declaração de mídia (`cerebro/agentes/decupador/OFICIO.md` não cita
`needs`, `midia_termos` nem "coisa nomeada"). Até isso ser corrigido, quem segura a linha é o gate.

### PESQ-32 · Falha de PORTA vestida de "não achei" — o Chrome Beta crashava e a produção lia ausência de mídia (03/ago/2026)

**O sintoma.** O `paises-baixos-mar` foi entregue com **3 footages para 39 cenas de arte**, e a
hipótese em cima da mesa — inclusive a do Mateus — era que as queries estavam ruins. Não estavam: as
buscas já eram inglês visual e cultural (`dutch windmills field turning landscape`,
`Maeslantkering storm surge barrier Rotterdam aerial`).

**A causa, medida.** `scripts/stock/baixar.mjs` usava **Google Chrome Beta** por padrão. Ele morre no
processo principal exatamente quando o download começa — `EXC_BREAKPOINT` no `CrBrowserMain`, com
relatório em `~/Library/Logs/DiagnosticReports/`. O script vê
`download.saveAs: Target page, context or browser has been closed`; a produção lê "não achei mídia".
Reproduzido **5 vezes seguidas**, em **Shutterstock e Storyblocks**, com destino em `/tmp` e em
`~/Downloads`, headed e headless. Com o Chrome **estável**, a mesma busca baixou **2/2 na primeira
tentativa**.

**Por que enganou tanta gente.** O erro não aparece como erro. Ele chega ao relatório como ausência —
e ausência tem mil explicações plausíveis (query ruim, acervo pobre, assunto sem registro). Duas
sessões diagnosticaram coisas diferentes e nenhuma errou de raciocínio: uma culpou a query, outra o
login. A porta estava fechada por um motivo que ninguém pensa em checar: **o binário do navegador**.

**A regra.** *Quem reporta ausência sem provar que a porta abriu está adivinhando.* Antes de concluir
"não existe mídia para isto", prove que o canal funciona — uma busca-controle que você SABE que tem
resultado. Um download bem-sucedido no mesmo run é a prova; sem ela, "não achei" é hipótese, não
medição.

E o corolário de ambiente: **navegador de produção é o ESTÁVEL**. Canal beta muda sem aviso, e um
crash dele se disfarça de conteúdo que não existe. Vale para o stock, para os gates que abrem Chrome
e para o render — o [REND-45] já dizia o mesmo sobre caminho de Chrome hardcoded.

**Efeito colateral que este defeito produziu:** a direção de arte do `paises-baixos-mar` marcou
**86 de 97 cenas como "construída"** porque o stock parecia indisponível, e o vídeo saiu praticamente
todo desenho ([ARTE-94]). Uma porta quebrada rebaixou a linguagem visual de um vídeo inteiro.

### PESQ-33 · Porta fechada não autoriza trocar a FONTE — autoriza avisar (03/ago/2026)

> ⚠️ **SUPERADA EM PARTE pela [PESQ-126] (14/set/2026) — só na PROIBIÇÃO DE FONTE.** Pexels e Pixabay saíram
> do veto: a régua passou a ser a ESPECIFICIDADE. **O que continua vivo, e é o coração desta lei:** porta
> fechada não autoriza **baixar a régua** — trocar a coisa nomeada por uma imagem genérica porque o acervo
> pago bloqueou continua proibido, venha a imagem de onde vier. Consultar Pexels deixou de ser «trocar de
> fonte»; usar um anfíbio qualquer no lugar do anfíbio chinês continua sendo.

**O que aconteceu.** A VM **nunca baixou um único arquivo de stock assinado na vida** — não existe um
`manifest.jsonl` nela. Shutterstock devolve **CAPTCHA em IP de datacenter**; Storyblocks mostra
"Login/Join Now". Em 29/jul uma sessão diagnosticou o bloqueio corretamente e **"resolveu" migrando
para Pexels/Pixabay/Coverr — que a marca proíbe**. O diagnóstico estava certo; a saída, não.

**A contaminação, medida:** `especies-humanas` **17 de 20** vídeos · `uruguai-despovoado` **16 de 21**
· `orcas-nao-matam` 7 de 16. Com nome descritivo, invisíveis por filename.

**A ironia que ensina:** os **três projetos com a melhor razão de mídia real do censo são os três mais
contaminados**. Nenhum dos gates do eixo (`qc-midia-real`, `qc-direcao-real`, `qc-espelho-midia`)
enxerga **PROCEDÊNCIA** — 61,9% de mídia real construída sobre fonte proibida passa limpo em todos.
*Medir quantidade sem medir origem premia quem burla.*

**A regra.** Quando o canal assinado não abre, a resposta é **PARAR E AVISAR**, nunca trocar por fonte
que a marca recusa. Substituir a fonte é decisão de marca, não de contorno técnico — e o agente que a
toma sozinho entrega um vídeo que não pode ir ao ar, com a aparência de um que pode.
Vale a irmã [PESQ-32]: antes de concluir qualquer coisa sobre mídia, **prove que a porta abriu**.

**Sem culpa retroativa:** a regra que proíbe fonte livre só entrou no agente em 02/ago. Em 29/jul ela
não existia — isto é conserto de sistema, não de pessoa.

**O gate que falta:** ler o sidecar de licença/fonte de cada mídia e reprovar procedência proibida. Um
gate de quantidade sem um de origem é meio gate.

### PESQ-34 · O acervo assinado tem COTA DIÁRIA — "ilimitado" era falso (03/ago/2026)

O `CLAUDE.md` dizia "plataformas ilimitadas". A página do Shutterstock diz *"Você atingiu o limite de
downloads por hoje… redefinido em 3 de agosto às 23:23"*, e **dois agentes leram a mesma mensagem**.
Medido: **4–5 caçadores em paralelo esgotam a cota em ~1 h** — e o que sobra depois disso parece
"não achei mídia", que é a família de erro da [PESQ-32].

**A regra.** Caça é recurso FINITO: serialize, priorize o que está mais perto da entrega, e ao
esbarrar no teto **diga que esbarrou** em vez de devolver ausência. Planejar lote de caça sem contar a
cota é o mesmo erro de planejar inferência sem contar o saldo do ciclo.

---

### PESQ-35 · Procedência não é propriedade do pixel — o gate que faltava, e a reincidência ao vivo (03/ago/2026)

> ⚠️ **SUPERADA EM PARTE pela [PESQ-126] (14/set/2026) — só na lista de fontes vetadas.** O gate que esta lei
> criou **continua de pé e continua obrigatório**: toda mídia de acervo declara procedência. O que mudou é
> que Pexels e Pixabay saíram de `MARCAS_VETADAS` (hoje em `scripts/lib/marcas-acervo.mjs`) e entram na
> classe `licença aberta`.

**O que aconteceu.** Em 29/jul uma sessão diagnosticou que a VM leva CAPTCHA nos acervos assinados
(IP de datacenter, [PESQ-33]) e "resolveu" migrando para **Pexels/Pixabay**, que a marca proíbe.
Cinco dias depois, com a lei escrita e o `CLAUDE.md` avisando, aconteceu **de novo, ao vivo**: a
estação de PESQUISA do `senna` baixou dois `pexels*.mp4` e encerrou com `ESTACAO_CONCLUIDA`.

Medido no mesmo dia, em todo o acervo: **76 arquivos de fonte proibida, 120 referências em cena**.

| projeto | mídia | de acervo assinado | **proibida** | em cena |
|---|---|---|---|---|
| `especies-humanas` | 80 | **0** | 44 | 80 |
| `orcas-nao-matam` | 88 | **0** | 28 | 40 |
| `senna` | 206 | 16 | 4 | 0 |

**Por que nenhum gate pegava.** Todos mediam o ARQUIVO — resolução, taxa, GOP, se abre, se colide, se
o footage é seekável. Nenhum perguntava **de onde ele veio**. Procedência não está no pixel: está no
nome, no manifesto de download, no registro da caça. Um `.mp4` 4K de Pexels é **tecnicamente
impecável e institucionalmente proibido** — e por isso atravessava a linha inteira sem um alerta.

O sinal mais claro de que a métrica errada engana: os projetos com a **melhor razão de mídia real**
eram os **mais contaminados**. O número subia porque a fonte fácil é infinita.

**A régua** (`scripts/qc-procedencia.mjs`, ligado em `pesquisa.md`, `qc.md` e `finalizacao.md`):
reprova mídia cujo nome carregue acervo proibido (pexels, pixabay, coverr, unsplash, videvo, mixkit,
freepik, vecteezy) e reporta separadamente o que está **no disco** e o que está **em cena** — só o
segundo é defeito no ar. É gate **DURO**: identidade de marca não é julgamento editorial.

⚠️ **Limite conhecido:** ele lê o NOME. Caçador que não carimbar a origem escapa — por isso o
carimbo no nome é obrigação do baixador, não conveniência.

**A lei que a reincidência ensina:** *quando o caminho legítimo fecha, a saída é AVISAR, nunca trocar
a fonte em silêncio.* Uma sessão bloqueada tem duas opções honestas — reportar e parar, ou usar a
máquina certa. Substituir por algo que passa nos gates e falha na marca é a pior das três, porque
produz um sucesso aparente que ninguém audita.

> ⚠️ **Atualização de 05/ago/2026 — a "máquina certa" INVERTEU.** A [PESQ-34] mandava caçar no Mac
> porque a VM saía por IP de datacenter e levava CAPTCHA. Hoje a VM sai pelo **IP de casa** por túnel
> permanente, e **toda caça e toda pesquisa de agente rodam nela** (ordem do Mateus). Provado com
> arquivo no disco: 623 MB de ProRes 4K do Shutterstock baixados na VM pelo IP residencial.
> O que **não** mudou é a lei acima — e ela ganhou um segundo degrau: as chaves de Pexels, Pixabay e
> Coverr foram desativadas no `.env`, porque a [PESQ-37] declarava esse degrau cumprido em 03/ago e
> **ele não estava**. Doutrina que dá um degrau por cumprido sem que ele tenha sido cumprido é pior
> que doutrina nenhuma: ela desliga a vigilância exatamente onde havia proteção a conferir.

### PESQ-36 · A ferramenta OFERECIA a fonte proibida, e a doutrina técnica a recomendava (03/ago/2026)

> ⚠️ **SUPERADA EM PARTE pela [PESQ-126] (14/set/2026) — Pexels e Pixabay deixaram de ser «fonte proibida».**
> As funções de busca que esta lei mandou retirar **seguem retiradas**: religá-las é passo separado, não
> consequência automática da nova regra. O princípio desta lei continua valendo — *a ferramenta não pode
> oferecer o que a doutrina proíbe* — só que o que a doutrina proíbe mudou.

**A descoberta que inverte a [PESQ-35].** Depois de instalar o gate de procedência, os mesmos dois
`pexels*.mp4` que eu havia arquivado **voltaram seis minutos depois**. Fui atrás de quem os baixava
esperando achar um agente desobediente. Achei o contrário:

```js
// ── FONTES CC0 de B-ROLL (ativam com chave de API; sem chave → []) ──
// Pexels e Pixabay são b-roll LIMPO (sem gráfico queimado) → ideal p/ o modo cinematográfico.
function buscarPexels(...)   licenca: "Pexels License (uso livre)"
function buscarPixabay(...)  licenca: "Pixabay License (uso livre)"
```

E em `docs/10-estilo-cinematografico.md`, com o visto verde:
> (b) ✅ **fontes CC0** Pexels/Pixabay fiadas — b-roll limpo, **ativam com `PEXELS_API_KEY`**…

E na mensagem de fallback do próprio caçador: *"Para b-roll limpo, configure
PEXELS_API_KEY/PIXABAY_API_KEY."*

**Nenhum agente estava desobedecendo.** A ferramenta oferecia a fonte que a marca proíbe, a doutrina
técnica a marcava com ✅, e o código pedia a chave. O `CLAUDE.md` dizia o contrário — e **contexto
que se contradiz é pior que contexto faltando**: o agente obedece o que está mais perto da mão, e o
que está mais perto da mão é a função que retorna resultado.

**Por que o gate não bastava.** Gate reprova DEPOIS: a mídia já foi baixada, já entrou na cena, já
gastou render. Enquanto a função existir, alguma sessão vai chamá-la — foi o que aconteceu seis
minutos depois da limpeza. **A garantia mora no código** (núcleo §10): o módulo simplesmente não
implementa a função perigosa.

**A régua.** `buscarPexels`, `buscarPixabay` e `buscarCoverr` foram **retiradas**. No lugar, uma
recusa que EXPLICA e devolve `[]` — nunca um silêncio, porque quem chamar precisa entender por quê e
saber o que fazer: caçar nos assinados **no Mac**, ou reportar a falta.

⚠️ **"Licença livre" não é o critério.** O que se compra num acervo assinado é **exclusividade
relativa**, não permissão de uso. Clipe gratuito é juridicamente impecável e roda em milhares de
canais — o espectador já viu aquele plano.

**A forma geral:** *antes de acusar o executor, leia a ferramenta que ele tinha na mão.* Quando um
erro se repete com agentes diferentes, em projetos diferentes, a causa raramente é disciplina — é
uma affordance. Consertar o prompt de quem errou, sem retirar a função, garante a reincidência.

### PESQ-37 · Retirar a função não bastou; a garantia mora na CREDENCIAL (03/ago/2026)

> ⚠️ **SUPERADA EM PARTE pela [PESQ-126] (14/set/2026) — só na premissa de que Pexels/Pixabay são vetados.**
> As chaves desativadas no `.env` em 05/ago **seguem desativadas**; reativá-las é decisão e trabalho
> separados. **O princípio desta lei está intacto e foi o que guiou a PESQ-126:** *a garantia mora no
> código* — por isso a nova regra só vale porque as quatro cópias executáveis do veto passaram a ler uma
> fonte única.

**A terceira volta do mesmo defeito, no mesmo dia.**

| hora | o que se fez | o que aconteceu depois |
|---|---|---|
| 09:26 | arquivei dois `pexels*.mp4` do `senna` | **09:32** — a estação viva rebaixou os mesmos dois |
| 09:53 | **retirei** `buscarPexels`/`buscarPixabay`/`buscarCoverr` de `footage-tools.mjs` ([PESQ-36]) | **13:37** — cinco `pexels*.mp4` entraram no `o-acre-o-estado-que-o` |

Nenhum grep achava a chamada: o código do estúdio não baixava mais de lá. O agente estava usando a
API **direto**, com a chave que continuava no `.env` — `curl` é uma ferramenta como outra qualquer, e
uma sessão que quer footage e tem credencial na mão vai usá-la.

**A escada da garantia, do mais fraco ao mais forte:**
1. **Instrução no prompt** — vale enquanto o agente lembra e não encontra atrito.
2. **Gate que reprova** — pega DEPOIS: a mídia já baixou, já entrou em cena, já gastou render.
3. **Função retirada do módulo** — fecha o caminho conhecido, e só ele.
4. **CREDENCIAL aposentada** — fecha TODOS os caminhos, inclusive os que ainda não existem.

Só o degrau 4 é uma garantia. Os três primeiros são convenções, e convenção não sobrevive a um
agente criativo com uma chave válida no ambiente.

**O que foi feito:** `PEXELS_API_KEY`, `PIXABAY_API_KEY` e `COVERR_API_KEY` foram **comentadas** no
`.env` (não apagadas — com backup verificado no bucket antes), com a razão escrita ali mesmo, para
quem for reabrir entender por quê. As chaves dos acervos ASSINADOS e os 8 tokens Anthropic ficaram
intactos.

**E as duas doutrinas que ainda apontavam para lá** — `knowledge/CONEXOES-E-TOOLS.md`, que listava
PEXELS/PIXABAY/COVERR entre as conexões disponíveis, e `docs/08-media-hunter.md`, que mandava
*"adicionar as PEXELS/PIXABAY keys no `.env`"*. Enquanto a documentação convidar, alguém aceita.

**A forma geral:** *para proibir de verdade um recurso externo, tire a credencial, não a função.*
Enquanto a chave existe, todo caminho novo — uma lib nova, um `curl` improvisado, um agente que leu
a doc antiga — reabre a porta, e o defeito volta pela terceira vez.

**⚠️ ADENDO, medido 40 min depois: a aposentadoria NÃO alcança processo vivo.** Às 13:43 comentei as
três chaves. Às **13:50** — sete minutos depois — outros cinco `pexels*.mp4` entraram no `o-acre`.
Não era caminho novo: **quatro sessões vivas ainda tinham a chave no `environ`**, carregada quando
iniciaram (15 a 148 min antes). Comentar o `.env` muda o que o PRÓXIMO processo lê; o que já subiu
carrega a variável em memória até morrer.

Verificação que responde isso de imediato:
```bash
tr '\0' '\n' < /proc/<pid>/environ | grep -E '^(PEXELS|PIXABAY|COVERR)_API_KEY='
```

Por isso a retirada da credencial tem **duas metades**, e a segunda é a que quase se esquece:
1. tirar a chave do `.env` — vale para todo processo futuro;
2. **decidir o que fazer com os que já rodam.** Matá-los custa o trabalho em curso (o `o-acre` estava
   produzindo 223 arquivos de pesquisa); deixá-los seguir aceita que baixem mais um pouco. Aqui a
   escolha foi deixar seguir, porque o gate de procedência está na SAÍDA (`qc.md`, `finalizacao.md`):
   o defeito não chega ao ar, só ocupa disco até a estação fechar.

*Toda mudança de ambiente tem um horizonte: ela começa a valer para quem nascer depois dela.*

---

### PESQ-38 · FRONTEIRA SE CONFERE NA GEOMETRIA, NUNCA NO ENQUADRAMENTO — proximidade na tela não é adjacência no mundo (04/ago/2026)

**O caso.** Na `s07` do `paises-baixos-mar` — o mapa que situa o país entre os vizinhos — o pedido que
chegou à produção mandava marcar a **França** como divisa dos Países Baixos. Os dois países aparecem
juntos em qualquer enquadramento da Europa Ocidental, e o mapa é bonito com os três. Mas os Países
Baixos fazem fronteira terrestre com **dois** países: **Alemanha** (leste, ~577 km) e **Bélgica** (sul,
~450 km). A França está a mais de 200 km, com a Bélgica inteira no meio.

**O que torna isso caro, e não é o erro em si.** Um canal de 9,80 mi de brasileiros tem espectador que
sabe geografia, e um mapa **é** a autoridade da cena: ele parece medido. Errar a adjacência num mapa
não é errar um detalhe — é o objeto que existe para provar dizendo o contrário do mundo. E o defeito
tem uma assinatura própria: ele **nunca vem de má-fé nem de desatenção**, vem de olhar o quadro em vez
do dado. O que está perto na tela parece vizinho; a tela não distingue "ao lado" de "encostado".

**A decisão do dono, quando informado** (Mateus, 04/ago): *"se não fazem, está tudo bem. Marca apenas os
países que fazem fronteira de fato… por terra."* Vale registrar o padrão: **contradizer o pedido com o
dado na mão foi aceito na hora.** A saída não era achar um jeito de encaixar a França.

> **A lei:** *rótulo de país vizinho é afirmação de adjacência, e afirmação se verifica no ARQUIVO.*
> Antes de marcar qualquer vizinho num mapa, confira o contato **terrestre** na geometria real (o
> GeoJSON de fronteiras que a cena já usa, ou a lista de fronteiras do país na fonte oficial) e
> registre a extensão em km na pauta. Vizinhança marítima não é fronteira terrestre e não entra sem
> ser nomeada como tal — se a cena precisa do país do outro lado do mar, o rótulo diz o que ele é.

**A verificação, que custa nada:** duas geometrias fazem fronteira quando os polígonos **se tocam**
(compartilham segmento de borda), não quando estão próximos. Com o GeoJSON na mão isso é um teste de
interseção; sem código, é a lista de fronteiras terrestres da fonte oficial do país. Distância ≠
adjacência é a única armadilha, e ela é sempre a mesma.

**Onde se aplica além de país:** estado/província, bacia, área de proteção, zona econômica — toda vez
que a tela afirma *"isto faz divisa com aquilo"*. E o gêmeo desta lei na execução é a [ARTE-112]: linha
desenhada sobre base real também é afirmação sobre geometria, e também vem de arquivo.

**Onde se conserta:** `pesquisa-geo` (entrega a geometria **e** a lista de contatos terrestres com
extensão, não só o polígono) e `mapista` (não rotula vizinho sem esse dado na mão). O `montador` que
escreve *"marcar os vizinhos"* na tese está pedindo uma verificação, não uma lista de memória.

<!-- ═══ LEIS VINDAS DA VM `estudio-top10`, fundidas em 2026-08-05 ═══
     Elas foram destiladas lá, em paralelo, e nunca chegaram ao git. As que colidiam em número
     com uma lei diferente daqui foram RENUMERADAS (cada uma diz de onde veio, logo abaixo do
     título). As que caíam em número livre entraram com o ID original. Nada foi descartado. -->

### PESQ-42 · Arquivo em `_media/` não é mídia entregue — só o HTML põe na tela

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `PESQ-42` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Caso (03/ago/2026, `senna`):** em 25/jul o Mateus reclamou de repetição — *"uma imagem/vídeo deve
aparecer uma única vez e não repetir de novo durante o vídeo, pois fica chato e cansativo"*. A resposta
foi correta e rápida: o `pesquisa-imagens` caçou **10 fotos novas** para 8 cenas, todas de domínio
público ou CC, todas validadas por visão, todas gravadas em `_media/` com a pauta
`pauta-imagens-antirepeticao.json` dizendo qual arquivo ia para qual cena. A estação fechou com PASS.

Nove dias depois, na volta do vídeo para a linha, a medição: **as 10 estavam no disco e apenas 1 tinha
sido integrada ao HTML.** As outras nove nunca chegaram à tela. O vídeo caminhava para a entrega com
`senna-lotus-1985-eurogp.jpg` em **seis** cenas e `senna-1985-86-portrait-4k.jpg` em quatro — as duas
com substituta pronta, paga e parada na pasta ao lado.

**A raiz não é preguiça de ninguém: é uma definição de "entregue" que para no disco.** O relatório do
caçador dizia a verdade (o arquivo existe), a pauta dizia a verdade (o destino está escrito), e a
conclusão — "a repetição foi corrigida" — era falsa. Entre a pasta e a tela existe um passo que ninguém
era dono: **a integração**. Quem redesenha a cena depois não tem obrigação de abrir uma pauta que não
sabe que existe, e quem escreveu a pauta já foi embora.

**Corolário do crédito, que morde junto:** trocar a foto e esquecer o crédito deixa na tela a atribuição
da imagem ANTIGA. Aconteceu quatro vezes nesta mesma sessão, ao integrar (s07 ficou creditando
*Jerry Lewis-Evans* numa foto do *Instituto Ayrton Senna*). **Atribuição errada é pior que ausente** —
a ausente é omissão, a errada é afirmação falsa sobre autoria de terceiro. Toda troca de `src` obriga a
conferir o `#cred` da cena, e CC BY / CC BY-SA **exigem** que ele exista.

**GATE:** `node scripts/qc-pauta-integrada.mjs <proj>` — cruza toda pauta que ligue arquivo→cena
(`_pesquisa/*.json`, `_media/*.json`) contra o HTML da cena, e REPROVA a **órfã**: arquivo no disco,
cena desenhada, HTML ignorando. Compara por RADICAL, então variante upscalada (`-4k`, `-x4`,
`-upscaled`) conta como a mesma imagem — alarme falso ensina a ignorar o gate. Duas absolvições
automáticas: arquivo nomeado `-fallback` (é plano B por construção) e a cena que substituiu por mídia
**exclusiva dela** (troca limpa, provável upgrade). ⚠️ Note que "a cena usa outra mídia real" **não**
basta como absolvição — foi a primeira heurística tentada e ela inocentava justamente o caso desta lei,
porque a mídia que ocupava o lugar era a foto repetida que a pauta viera substituir.

**RECUSA FUNDAMENTADA (mesmo contrato do `data-gancho` da [ARTE-60]):** nem toda promessa deve ser
cumprida — a pauta é escrita sem conhecer o SLOT. Neste vídeo, a Silverstone-93 designada para a `s09`
é retrato 1553×1868 e a lâmina da cena é landscape 1190×720: `object-fit:cover` cortaria quase tudo.
Recusar foi certo; recusar **em silêncio** é que não. Declare na cena e o gate absolve:

```html
<!-- pauta-recusa: senna-paddock-silverstone-1993.jpg — retrato em lâmina landscape 1190×720 -->
```

**AGENTE-RAIZ corrigido:** `pesquisa-imagens` (e irmãos) — "entregue" passa a significar *na tela ou
recusado por escrito*, nunca *no disco*; o relatório final da estação roda o gate e reporta o número de
órfãs. E o `editor-de-arte` ganha o dever de abrir as pautas de `_pesquisa/`/`_media/` **antes** de
(re)desenhar uma cena que já teve caça, mais o passo de conferir o crédito ao trocar qualquer `src`.

---
### PESQ-43 · QUEM ESCREVE O BRIEFING ENTREGA A LEI JUNTO — e memória velha vira ordem de violar

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `PESQ-43` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Medido em 03/ago/2026, `o-acre-o-estado-que-o`.** O editor-chefe despachou 6 caçadores de mídia e
escreveu, em **três** briefings, a instrução *"use fontes livres — Pexels, Pixabay, Commons…"*.
Pexels/Pixabay/Coverr são **proibidos pela marca desde 05/jul** ([PESQ-12]: *"CC0 fora do pipeline"*,
veto de IDENTIDADE — o mesmo clipe gratuito roda em milhares de canais). Resultado: **13 arquivos,
1,1 GB**, baixados, validados por visão, ancorados no conceito — e arquivados no mesmo dia. Sete
cenas voltaram a `FALTA`.

**A causa não foi desconhecimento do agente — foi o contrário.** Um dos seis leu a lei no repo, viu
que ela era mais nova que a ordem recebida, arquivou o próprio trabalho e reportou: *"minha instrução
de tarefa dizia para usar Pexels; a lei do repo é mais nova e vence"*. Os outros obedeceram o
briefing. **O agente que desobedece a ordem errada é o comportamento certo, e não se pode contar com
ele.**

**A raiz mais cara estava na MEMÓRIA, não no briefing.** A auto-memória do estúdio sobre stock dizia,
em caixa alta: *"Antes de registrar gap de footage na VM, ESGOTE as APIs livres (Pexels/Pixabay/
Coverr) — autenticam por chave, imunes ao IP flagado"*. Escrita em 29/jul para resolver um problema
real (4 sessões perdidas por falta declarada cedo demais), ela virou, depois da [PESQ-12], uma
**ordem persistente de violar a lei da marca** — recarregada a cada sessão, mais acessível que o
arquivo de regras. Foi ela que o editor-chefe seguiu ao escrever os briefings.

**Três regras:**
1. **Briefing que nomeia FONTE carrega a lei da fonte.** Ao mandar caçar, cite a lei que autoriza
   (`[PESQ-12]`) em vez de listar sites de cabeça. O caçador não deve ter de descobrir sozinho que a
   ordem recebida é ilegal.
2. **Memória que recomenda ferramenta ou fonte tem prazo de validade e precisa ser reconciliada com
   as regras.** Regra publicada **vence** memória, sempre; e a memória que a contradiz não é só
   inútil — é ativa. Ao destilar uma lei que proíbe algo, **varra a memória** por conselhos que
   mandam fazer aquilo.
3. **A garantia final mora na CREDENCIAL, não na instrução.** Retirar as funções de
   `footage-tools.mjs` não bastou: 4 h depois cinco `pexels*.mp4` entraram por outro caminho. Só
   quando o `.env` aposentou as chaves é que a porta fechou. Proibição que depende de todo agente
   lembrar não é proibição — é torcida.

**Conserto aplicado (03/ago):** 13 arquivos → `arquivo-morto/2026-08-03-pexels-pixabay-proibidos-o-acre/`
com `LEIA.md`; cenas s13/s14/s15/s17/s31/s58/s60 rebaixadas a `FALTA` pelo passe de âncoras; memória
`stock-vm-ip-flagado` reescrita; caçadores em voo avisados em tempo real; `tecnico-stock` acionado, e o
veredito dele **corrigiu o diagnóstico desta própria lei**: não era seletor — as **cinco assinaturas
estão DESLOGADAS** na VM (provado por página só-de-conta: `/member/downloads` redireciona para
`/login`, o header serve botão "Entrar", `app.envato.com` cai em `account.envato.com/sign_in`).
**O que enganou todo mundo, inclusive o editor-chefe:** as plataformas servem resultado de busca a
visitante ANÔNIMO — 48, 20, 120 itens — então o contador batia e parecia sessão viva até o download
morrer. Contagem de resultados NÃO prova sessão; só página só-de-conta prova. (Havia seletores
mortos também, consertados de passagem: o `.formats` do Motion Array pendia da grade "Related" e
baixava outro clipe.) **Não houve CAPTCHA nem sinal de IP flagado em ~25 navegações.** O destravamento
é humano e leva ~5 min: relogin por VNC (`scripts/stock/login-na-nuvem.sh`), porque não existe
credencial de stock no `.env` e os backups de perfil nasceram no Mac (cookies cifrados na Keychain,
indecifráveis no Linux).

> ⚠️ **Débito de numeração (registrado em 03/ago):** `PESQ-33`, `PESQ-34`, `PESQ-35` e `PESQ-36` são
> citados em código de produção (`scripts/qc-procedencia.mjs`, `src/agent/footage-tools.mjs`, `.env`)
> mas **nunca foram escritos** neste arquivo — quem esbarra na citação não acha a lei. Os números
> ficam reservados para quem os criou destilar; esta lei pulou para 37 para não colidir ([SIS-62]).

---
### PESQ-44 · QUEM TIRA MÍDIA DO DISCO RECONCILIA QUEM A CITA — apagar não é neutro

> 🔀 **Renumerada em 2026-08-05.** Nasceu como `PESQ-44` na VM `estudio-top10`, onde foi destilada em paralelo. O número antigo já pertencia a outra lei aqui — o lado que manteve o ID é o que já estava citado em documentos e código. Nenhuma linha foi perdida.

**Medido em 03/ago/2026, `o-acre-o-estado-que-o`, no despacho da estação ARTE — é a segunda metade da
[PESQ-43].** Arquivar os CC0 foi a decisão certa. O que ficou por fazer foi o outro lado dela: o
`conceito-visual.json` tinha sido escrito às 14h39, com os paths daquele material nas `midia_ancora`,
e ninguém voltou nele. Quatro horas depois o disco tinha **16 paths mortos em 6 cenas** e **cinco
pastas de footage vazias** (`s13`, `s15`, `s17`, `s26`, `s31`, `s36`) — a direção mandando desenhar
sobre arquivo que não existe mais.

**O agente de arte não tem como perceber sozinho.** Ele lê "Mídia âncora: `…/s26q-fuse-1943486.mp4`",
o arquivo não abre, e a saída barata é desenhar o pavio à mão ou puxar o footage da cena vizinha —
que é fundo repetido ([ARTE-19]) e metáfora falsificada. O defeito viaja da faxina até a tela.

**O gate que devia pegar tinha um ponto cego, e ele foi consertado junto** (`scripts/qc-direcao-real.mjs`):
o `continue` do rótulo `"FALTA —"` vinha **antes** da conferência de existência, então âncora que
começa com FALTA e termina com uma lista de arquivos — exatamente o que o passe-de-âncoras produz ao
remendar um pedido antigo — nunca era checada. O gate imprimia `✓ PASS · asset REAL 86%` com os 16
paths mortos dentro. Agora **o disco manda no rótulo**: confere primeiro, classifica depois; e âncora
que diz FALTA mas tem arquivo vivo sai avisada como *rótulo defasado* (a pesquisa entregou e ninguém
reconciliou — quem for desenhar lê "FALTA" e pula uma cena que tem mídia).

**A regra:** *mover ou apagar arquivo de `_media/` é meia tarefa.* A outra metade é reconciliar todo
artefato que o cita — `conceito-visual.json` em primeiro lugar — e **rodar `qc-direcao-real` DEPOIS da
faxina, não antes**. Fica também o padrão pro editor-chefe: ao despachar arte, o dossiê de cada cena
sai de um passe determinístico que lê o **disco**, não a âncora (`scripts/_brief-arte.mjs`, que marca
`⚠️ARQUIVO APAGADO — NÃO USE` e manda pular a cena em vez de improvisar). Direção é intenção; disco é
fato. Quando divergirem, quem executa obedece o disco e reporta a divergência.
**PESQ-39.** CONFIRMAR QUE A MÍDIA EXISTE TAMBÉM É ENTREGA — E A ENTREGA É O PATH, NUNCA A PROSA (medido em
   `o-acre-o-estado-que-o`, 03/ago/2026, na retomada da estação de arte). O terceiro lado da moeda da
   [PESQ-42] (entregue = na tela) e da [PESQ-44] (apagar = reconciliar): agora o caso em que a mídia
   **está** no disco, **certa e validada**, e mesmo assim a cena chega ao executor parecendo bloqueada.

   Na âncora do `s81-publi-fecho` a pesquisa anotou — com razão — que a cena *"não pede rosto"* e que a
   âncora verdadeira são as **três capas oficiais Planeta, no disco**; e citou por path apenas o
   **retrato do autor**. As capas existiam de fato, sob `_media/documento/s80/`. Como o índice de mídia
   do dossiê agrupa por **prefixo do path** e o prefixo delas é `s80`, o brief do `s81` saiu com
   **"0 arquivos"** + o aviso de bloqueio. A leitura editorial estava certa e o trabalho estava feito;
   faltou o endereço. **Prosa não é endereço:** nenhum gate resolve "as capas estão no disco", e o
   executor obediente pula a cena — o mesmo prejuízo da mídia que nunca foi caçada, com a mídia paga
   parada na pasta ao lado.

   • **Mídia sob outro prefixo se cita por path completo, sempre**, e com a origem nomeada ("herdado da
     família `s61`, reuso declarado"). É essa palavra que separa reuso legítimo de canibalizar o fundo
     da vizinha ([ARTE-19]) — sem ela o executor cauteloso pula, e o descuidado canibaliza.
   • **O conserto de esteira foi junto** (`scripts/_brief-arte.mjs`): a seção MÍDIA REAL NO DISCO passou
     a incluir também os arquivos **existentes citados na âncora**, mesmo fora do prefixo da cena,
     marcados como *herdado — reuso DECLARADO pelo diretor*. Medido: `s64` foi de 0 → 34 arquivos,
     `s24` de 0 → 1. Antes, uma cena inteira de geoglifos lia como travada tendo 34 fotos validadas.
   • **Quem declara uma âncora resolvida confere o que o próximo vai ler**, não o que escreveu:
     `node scripts/_brief-arte.mjs <proj>` e `grep -c '^- \`' out/<proj>/_brief-arte/<id>.md`. Zero
     arquivo numa cena que você deu por resolvida é defeito seu, não do gerador.

   A regra das três leis irmãs, junta: **o disco é o fato, mas o disco só chega a quem executa pelo
   path escrito.** Achar, apagar e confirmar são a mesma tarefa pela metade enquanto a citação não for
   reconciliada.
**PESQ-40.** PROCEDÊNCIA SE PROVA NO **REGISTRO DA CAÇA**, NÃO NO NOME DO ARQUIVO — o nome é o único
   campo que quem baixou controla, e um `mv` apaga a evidência
   (medido em 03/ago/2026 na estação QC do `oceano-700km`; varredura confirmada em 11 projetos).
   O `qc-procedencia` é gate DURO de identidade de marca e detectava a fonte proibida por regex **no
   caminho do arquivo** — `/pexels|pixabay|coverr|…/`. O cabeçalho dele sempre disse que a procedência
   "está no nome, no manifesto de download e no **registro da caça**"; só a primeira estava
   implementada. Basta salvar o clipe como `garimpo-aluvial-bateia-lavando-cascalho-rio-01.mp4` para o
   gate nunca ver nada — e não é sabotagem: **nomear pelo conteúdo é a boa prática que a casa pede em
   todo lugar**. As duas doutrinas se anulavam, e a que ganhava era a silenciosa.
   **O caso:** o gate imprimiu `✓ PASS — toda a mídia vem de acervo assinado` com **dois clipes do
   Pixabay full-bleed na `c02`**, enquanto o `_pesquisa/pauta-imagens.json` do MESMO projeto trazia
   `"provedor": "Pixabay"`, `pagina_url: https://pixabay.com/videos/id-26366/` e o `cdn.pixabay.com`
   do download escritos por extenso. A prova estava no repositório, em texto plano, a um diretório de
   distância — e ninguém a lia.
   **A extensão, que é o que assusta:** com a leitura do registro, a contagem do acervo foi de **38
   para 147** arquivos proibidos — **109 invisíveis** em 6 projetos. Os três maiores tinham detecção
   ZERO pelo nome: `mamute-de-volta` **57 arquivos em 64 cenas**, `galaxia-arco-flecha` 24,
   `uruguai-despovoado` 17. Os projetos que o gate já pegava (`especies-humanas`, `orcas-nao-matam`)
   eram justamente aqueles onde o caçador **não** renomeou — isto é, o gate só via quem não escondia.
   • **Conserto:** `scripts/qc-procedencia.mjs` passou a varrer `_pesquisa/*.json` e marcar como
     proibido todo nó que **nomeia um arquivo** e cita fonte proibida em qualquer campo seu. A busca é
     no NÓ, não no JSON inteiro — senão um item sujo contamina os irmãos. As duas provas valem, e a do
     registro sobrevive ao rename. Presença em `ASSINADAS` deixou de absolver quem o registro acusa.
   • **A regra geral:** quando um gate depende de um dado que o próprio autor do artefato escreve,
     ele mede disciplina, não fato. Procure a fonte que o executor **não** controla — aqui, o JSON que
     a estação de pesquisa grava no momento do download. *Toda vez que a doutrina tem duas provas e o
     código implementa a mais fácil, o gate vira teatro.*
**PESQ-41.** MÍDIA **SEM REGISTRO** É PROCEDÊNCIA **NÃO PROVADA** — E "JÁ ESTÁ PAGO NO DISCO" É
   ARGUMENTO DE CUSTO, NUNCA DE PROCEDÊNCIA
   (medido em 04/ago/2026 na estação QC do `oceano-700km`; varredura em 10 projetos do `out/`).
   Buraco IRMÃO da [PESQ-40], e o que sobrou dela: o gate passou a ler o registro da caça e a reprovar
   quem ele **acusa** — mas quem não tem registro **nenhum** continua passando, porque não há nó para
   acusar. A [PESQ-40] fechou a porta de quem mente no nome; esta fecha a de quem não diz nada.
   **O caso:** o `oceano-700km` tinha **22 `.mp4` 4K baixados em 9 minutos** (03/ago 04:33–04:42) em
   `_media/footage/{oceano,rocha-manto,laboratorio,sismologia,agua,mineral}` — 3,6 GB, **zero linha em
   qualquer `_pesquisa/*.json`** e zero uso em cena. E a estação de pesquisa **do mesmo projeto**
   havia registrado, cinco dias antes, que os TRÊS acervos assinados (Shutterstock/Storyblocks/Envato)
   estavam com a **sessão caída** — "a busca carrega, o download exige login" —, deixando a `c02`
   pendente por isso. A `c02` foi resolvida depois com **Pixabay**. *O único footage deste projeto com
   procedência escrita é o proibido; todo o resto é órfão, e nasceu na janela em que o acervo legítimo
   estava fora do ar.*
   **A armadilha, que é o motivo desta lei:** um achado de QC (03/ago 22:45) mediu esses 3,0 GB como
   *"FOOTAGE REAL PAGO E NUNCA USADO"*, gravidade alta, e recomendou consumi-lo para quebrar o deserto
   de registro real — *"não precisa recaçar na pesquisa"*. A recomendação estava tecnicamente certa e
   institucionalmente errada: ela teria levado mídia de origem não comprovada a **5 cenas**, e o
   `qc-procedencia` teria dito **PASS** — porque órfão não tem nó que o acuse. O defeito de 1 cena
   viraria o de 6, com inferência do Fable e clipes 4K pagos descartados no caminho.
   • **"Pago" foi INFERIDO de 4K + all-intra + nome descritivo.** Nenhum dos três prova assinatura: o
     próprio contrato da estação QC já diz que *"um `.mp4` 4K de fonte gratuita é tecnicamente
     impecável e institucionalmente inaceitável"*. Qualidade técnica não é recibo.
   • **Como se lê:** cruze o disco com o registro, não o disco com a vista.
     `_media/**` × `basename` de todo `arquivo` em `_pesquisa/*.json`. No acervo: **323 arquivos sem
     registro em 10 projetos** (`o-acre` 153, `mamute-de-volta` 39, `energia-escura` 29,
     `uruguai-despovoado` 29, `oceano-700km` 24). O cruzamento por nome superestima — parte é registro
     com caminho renomeado —, mas a ordem de grandeza é essa e ninguém a media.
   • **A regra:** órfão não entra em cena. Antes de consumir mídia que você não viu ser baixada,
     exija o nó de registro; sem ele, a mídia volta para a PESQUISA com a âncora escrita, mesmo que
     custe uma viagem. *Gate que só reprova o que foi declarado premia quem não declara.*

### PESQ-45 · o domínio de um link colhido sai da página, nunca de uma constante (07/ago/2026)

**De onde veio:** `ceuta`, 07/ago/2026. O Mateus mandou conferir se a caça estava mesmo baixando.
Estava — 7,4 GB em 28 arquivos numa hora. Mas o `manifest.jsonl` tinha **54 registros de shortlist
com `plataforma:"shutterstock"` e href `https://www.reutersconnect.com/pt/video/clip-…`**, um deles
com o título "sexy sultana" numa busca por "Ceuta Spain enclave North Africa".

A leitura óbvia — e errada — é *"o navegador está na plataforma errada"*. Quase fui depurar a sessão
do Chrome. O defeito era uma linha do fallback de colheita:

```js
href: href?.startsWith("http") ? href : "https://www.reutersconnect.com" + (href || "")
```

O fallback nasceu para a Reuters e nunca foi generalizado; o `--soListar` só passou a valer para
outras plataformas depois. Os caminhos eram do **Shutterstock** — inclusive o "sexy sultana", que é
um resultado real da busca. **Só o domínio estava colado errado.** A Reuters nunca foi acessada.

**A lei:** *o domínio de um link colhido sai da PÁGINA em que ele foi colhido, nunca de uma
constante.* `new URL(href, page.url())` resolve o relativo contra a página real e vale para toda
plataforma, hoje e nas próximas. Constante de domínio em código de colheita é uma bomba com
temporizador: ela funciona enquanto só existe uma fonte, e mente no dia em que aparece a segunda.

**Por que isto é grave e não cosmético:** o estrago é de **procedência**, que é o que esta casa
cobra antes de entregar (`qc-procedencia.mjs` reprova mídia de acervo proibido ou sem origem
declarada). Um clipe escolhido daquela shortlist entraria com a fonte errada — e a fonte errada era
justamente a **Reuters**, a plataforma que cobra em PONTOS e está pausada no fluxo. O registro
apontava para um lugar onde nada aconteceu.

⚠️ **E a lição de diagnóstico, que vale mais que o conserto:** um registro errado descreve um mundo
que não existe, e a primeira reação é ir investigar aquele mundo. *Antes de depurar o que o log
DIZ, confira se o log está dizendo a verdade* — aqui, a pergunta que resolveu foi "esse caminho
`/video/clip-…` é mesmo formato de URL da Reuters?". Não era.

### PESQ-46 · no stock a busca são 2-3 termos concretos: acima disso ela ZERA e vem grade de reserva (07/ago/2026)

**De onde veio:** o Mateus viu no manifest um clipe chamado *"sexy sultana"* numa busca por "Ceuta
Spain enclave North Africa" e mandou investigar (`ceuta`, 07/ago/2026).

**A causa, medida:** o Shutterstock casa os termos em **AND**. Cinco termos concretos não casam
clipe nenhum — e a plataforma **não diz "sem resultados"**. Ela serve uma **grade semântica de
reserva, carimbada como `listId=searchResults`**, indistinguível de resultado legítimo. Os 30 slugs
colhidos: pular corda ×7, cabras, cachorro, chaves de fenda, cortina vermelha, e a tal sultana.
Três de trinta citavam algum termo da busca.

**A lei:** *quantos termos a busca aguenta depende de quão RARO é o sujeito — e no sujeito raro,
acima de 2–3 termos concretos ela não afunila: ela ZERA, e a plataforma responde com uma grade de
reserva em vez de admitir que não achou.*

⚠️ **A distinção importa, e sem ela esta lei contradiz o que já funciona.** O contrato do
`pesquisa-imagens` prescreve a fórmula `SUJEITO + AÇÃO + ATMOSFERA + CÂMERA`, que produz 5–7 termos —
e ela está CERTA quando o sujeito é comum: existem milhares de clipes de estudo do sono, e
`"sleep study laboratory polysomnography electrodes patient"` afunila *dentro* de um universo
grande. O teste antes de escrever a query: **um banco de imagens tem isto aos MILHARES ou às
DEZENAS?** Aos milhares → fórmula cheia. Às dezenas (nome próprio de lugar pequeno, evento datado,
instituição específica) → 2–3 termos, todos concretos.

Calibração medida na mesma sessão, com dados reais:

| busca | relevância dos 24 primeiros |
|---|---|
| `Ceuta Spain enclave North Africa` | **10%** (3/30) ⛔ |
| `Ceuta` | 42% ✓ (bandeira, mapa, Estreito de Gibraltar) |
| `Tetouan Martil Morocco beach` | 100% ✓ |
| `border fence barbed wire coast sea` | 100% ✓ |

Termo genérico ("enclave", "north", "spain") não estreita: só multiplica a chance de zerar. Quem
estreita é o termo CONCRETO — o nome do lugar, o objeto, a ação.

⚠️ **E a armadilha do diagnóstico, que é a parte que se leva para outros defeitos:** a busca MAIS
precisa produziu o resultado PIOR. A intuição manda acrescentar termos quando o resultado vem ruim,
e aqui isso piora — porque o modo de falha da plataforma é silencioso e se disfarça de sucesso.

⚠️ **A trava que existia contra isso era CÓDIGO MORTO, e é a lição maior.** O código procurava
`noSearchResults|curatedGrid` no href. Em 93 linhas de manifest medidas: esse marcador aparece
**zero** vezes; `listId=searchResults` aparece **83**. A trava nunca disparou uma única vez, e
enquanto isso o laudo parecia protegido. *Trava que não dispara e parece proteger é pior que trava
nenhuma* — porque ninguém procura o defeito que ela deveria pegar.

O conserto certo é medir por **EFEITO**, não por marcador: que fração dos primeiros resultados cita
algum termo da busca? Abaixo de 30%, é grade de reserva. E note que a grade ruim **não dá zero**
(deu 3 de 30) — um gate `taxa == 0` não teria disparado. Tem de ser limiar de taxa.

### PESQ-47 · Contar ARQUIVO mede o estrago da caça; contar CENA mede o estrago no vídeo (07/ago/2026)

Quando um gate de mídia acusa — procedência proibida, footage não-seekável, clipe defasado — ele
reporta **arquivos**, porque é o que ele varre. E arquivo é a unidade errada para decidir o que
fazer: ela mede o tamanho da falha da caça, não o tamanho do conserto.

Medido em 07/ago/2026, com dois vídeos que pareciam perdidos:

| projeto | o gate disse | a realidade |
|---|---|---|
| `orcas-nao-matam` | **14 arquivos** de acervo proibido | **5 cenas** de 28 (18%) |
| `especies-humanas` | **25 arquivos** | **7 cenas** de 25 (28%) |

Os números divergem porque a relação não é um-para-um nos dois sentidos: **o mesmo clipe aparece em
várias cenas**, e **uma cena usa vários clipes**. Catorze arquivos viraram cinco cenas.

*Isso muda a decisão, não só o relatório.* Com "14 arquivos proibidos" o `orcas` parece um vídeo a
refazer, e a reação natural é adiá-lo indefinidamente. Com "5 cenas", ele é uma tarde: recaçar os
substitutos, trocar o `src`, **re-renderizar só essas cenas** — o resto dos clipes 4K continua
válido, e artefato pronto é ativo pago.

**A conta que importa se faz assim**, e é de custo zero:

```bash
grep -rlE 'pexels|pixabay|coverr' out/<proj>/graphics/*.html | wc -l   # cenas afetadas
ls out/<proj>/graphics/*.html | wc -l                                  # de quantas
```

⚠️ E a busca do substituto **já está escrita no nome do arquivo proibido** —
`orca_show_pool_empty_nagoya`, `surfer_alone_open_sea_aerial`. Quem baixou nomeou o que procurava;
recaçar não começa do zero.

### PESQ-48 · Paralelismo só compra tempo ATRAVÉS da fronteira de recurso (07/ago/2026)

A trava de caça serializa **por plataforma**, porque o recurso disputado é a **sessão** daquela conta
(duas caças simultâneas na mesma conta invalidam o login uma da outra).

⚠️ **Não é por causa de cota** — e eu escrevi isso errado quando destilei esta lei. O Mateus corrigiu
em 07/ago/2026: **só o Shutterstock tem teto, e ele é de 100 downloads/DIA**; Storyblocks, Envato e
Motion Array não têm limitação nenhuma. *Teto diário não se protege serializando: dez caçadores
gastam os mesmos 100 que um, só que mais cedo.* O que protege o teto é [PESQ-49] — avaliar pelo
preview antes de gastar download. Disparar N buscas da mesma plataforma ao mesmo tempo, então, **não paraleliza
nada**: as N entram na fila da trava e rodam em série — só que agora cada uma segura um processo e um
display virtual enquanto espera a vez.

Medido em 07/ago/2026 na VM: **35 processos de caça vivos, 4 com a vez**. Só o Storyblocks tinha
**19 esperando**, de três projetos diferentes. Trocou-se espera por processos parados, e não se
ganhou um segundo.

**A regra é a fronteira:**

| onde | como | por quê |
|---|---|---|
| **entre** plataformas, em máquinas **diferentes** | **paralelo** | contas distintas, sessões distintas, perfis distintos |
| **entre** plataformas, na **mesma** máquina | **série** | ⚠️ o PERFIL DO CHROME é único por máquina — ver abaixo |
| **dentro** de uma plataforma | **série** | a trava vai serializar de qualquer jeito |
| lista longa | **distribua entre as MÁQUINAS** antes de começar | Mac + VM são dois perfis; uma VM é um só |

*Paralelizar dentro de um recurso serializado é fazer fila do lado de fora da fila.*

⚠️ **E a primeira linha desta tabela estava errada, medido em 07/ago/2026 no `dentro-do-sol`.** Ela dizia
que entre plataformas se paraleliza, ponto. Não: duas caças do **mesmo agente** em **plataformas
diferentes** serializaram uma pela outra, com a mensagem *"perfil do Chrome ocupado por outra caça"*.
**A fronteira de recurso não é a plataforma nem a cota — é o PERFIL DO CHROME, e ele é um por
máquina.** Dividir os lotes por acervo para "espalhar o consumo" não compra paralelismo nenhum dentro
de uma VM; só não atrapalha. Quem quiser caça de verdade em paralelo divide entre **Mac e VM**, que é
onde há dois perfis — a mesma régua do render.

⚠️ **Corolário que custou uma cena:** a trava por plataforma tem tempo de desistência, e ele **vence**.
No mesmo dia, `s43` no Envato abortou com `EXIT=4` após 15 min esperando um agente que segurava a
plataforma havia 20. Esperar a vez é correto ([PESQ-48]), mas em fan-out grande a espera é longa o
bastante para estourar — conte a desistência como resultado possível e reponha a busca depois, em vez
de ler o `EXIT=4` como "a plataforma não tem o material".

⚠️ E o irmão do erro, que NÃO aconteceu aqui e vale registrar porque parecia: **os Chromes não eram
desperdício**. O `baixar.mjs` pede a trava (linha 436) **antes** de abrir o navegador (linha 499),
então quem espera não abre Chrome — os 61 processos medidos eram exatamente os 4 navegadores ativos
com seus filhos. *Conferi no código antes de acusar; a suspeita era razoável e estava errada.*

### PESQ-49 · Shutterstock: 100 downloads/DIA — avalie pelo PREVIEW antes de gastar um (07/ago/2026)

**Só o Shutterstock tem teto, e ele é de 100 downloads por dia** (Mateus, 07/ago/2026). Storyblocks,
Envato e Motion Array **não têm limitação** — e tratar os quatro como recurso escasso é informação
pela metade que faz serializar caça que não precisava.

⚠️ **O teto é do DIA, não do RITMO.** A doutrina anterior dizia que "4–5 caçadores em paralelo esgotam
a cota em ~1 h" e culpava o paralelismo. Dez caçadores gastam os mesmos 100 downloads que um, só que
mais cedo. *Serializar não protege teto diário: só o consome devagar.*

**O que protege é não gastar download em clipe que vai ser descartado.** Cada footage baixado e
rejeitado é um dos 100 do dia jogado fora — e a taxa de descarte de uma caça honesta é alta, porque
julgar footage exige VER o footage.

**O fluxo, no Shutterstock:**

```bash
node scripts/stock/baixar.mjs shutterstock "<busca>" --soListar   # lista título+link+thumb, NÃO baixa
# … olhe os previews, escolha …
node scripts/stock/baixar.mjs shutterstock "<busca refinada>" --n=2   # baixa só o que vale
```

`--soListar` **já existe e já é à prova de acidente**: ele desliga o `acceptDownloads` do Chrome, que
então CANCELA qualquer download — nem clique errado gasta cota. Foi construído para a Reuters (que
cobra em pontos, isto é, dinheiro) e servia ao Shutterstock desde sempre sem ninguém usar.

**Nos outros três acervos, baixe direto.** Sem teto, a volta do preview só adiciona latência — e o
julgamento fica melhor com o arquivo real na mão.

*A régua da economia muda com o recurso: onde o limite é a SESSÃO, serializa-se ([PESQ-48]); onde o
limite é a COTA, filtra-se antes de gastar.*

### PESQ-50 · "O agente não menciona a ferramenta" não prova que a ferramenta não é usada (07/ago/2026)

> ⚠️ **SUPERADA EM PARTE em 16/set/2026 — no FATO, não no princípio.** O princípio segue inteiro:
> *contar palavra no prompt mede vocabulário, não comportamento.* O fato deixou de valer: a frase
> *"o agente não precisa saber o nome delas: ele chama uma ferramenta, e ela chama as sete"* era
> verdade enquanto `cacarMidia`/`cacarFootage` eram ferramentas oferecidas ao modelo por
> `src/agent/tools.mjs`. Esse registro foi para `archive/era2-api/`, e **o caçador de hoje não chama
> nenhuma das duas**. Medido nas quatro camadas (quem expunha, quem importa, o que o ofício lista, o
> que o despachante diz) — tabela em `knowledge/media-apis.md`, bloco de 16/set.
>
> **E a ironia é instrutiva:** em 16/set a Holding refez a mesma auditoria desta lei (`buscarWikimedia`
> = 1 referência, só a definição) e chegou à conclusão **certa pelo motivo errado**. As funções de
> fonte **são** chamadas — por dentro, com o sufixo `Async`, que a contagem pelo nome-base não vê. O
> órfão estava **um nível acima**: nos agregadores. *Veredito certo com prova errada não é medição —
> na próxima vez, a mesma prova dá o veredito errado.*

Uma auditoria contou menções às APIs de acervo nos prompts dos agentes de caça — `pesquisa-imagens`
**1**, `pesquisa-documentos` **0**, `pesquisa-pessoas` **0** — e concluiu que sete chaves pagas
estavam instaladas e ociosas: *"as ferramentas existem e os agentes não sabem"*.

**Medido:** seis das sete já eram chamadas, e por dentro. `cacarMidia()` dispara Openverse, Met,
Smithsonian, Europeana e NYPL **em paralelo** para todo `tipo` foto ou footage; `cacarFootage()`
monta os candidatos com `buscarDVIDS() + buscarWikimedia() + buscarNASA()`. O agente não precisa
saber o nome delas: ele chama uma ferramenta, e ela chama as sete.

Só a **NARA** era buraco real — chave paga, zero linhas. Implementada e provada contra a API (6
candidatos em "Hiroshima 1945", HEAD 200 `image/tiff`).

Dois aprendizados da implementação, que valem para qualquer acervo novo: o ranking da NARA põe
**microfilme de documento** na frente (7 dos 10 primeiros em "Apollo 11 launch" eram "Textual
Records"), então pedir 8 para aproveitar 8 devolve quase nada — peça mais e filtre. E
`useRestriction: "Undetermined"` **não é restrição**: é o arquivo dizendo que não auditou. Tratá-lo
como proibido descartava foto oficial do governo; o certo é aceitar com a licença declarando o que
ela é, para o rodapé não afirmar domínio público que ninguém verificou.

*Para saber se uma capacidade é usada, siga a CHAMADA no código, não a palavra no prompt. Auditoria
por busca textual mede vocabulário, não comportamento — e o veredito "ninguém usa" manda implementar
o que já existe.*

### PESQ-51 · Contaminação SEM declaração se esconde melhor que a declarada (08/ago/2026)

O `qc-procedencia.mjs` detecta acervo proibido por três vias: nome do arquivo, `fonte` declarada no
`_PROCEDENCIA.json`, e referência viva no HTML da cena. **As três falham juntas no mesmo caso**, e
ele não é raro: o agente renomeia o arquivo para um nome descritivo e não escreve o
`_PROCEDENCIA.json`. Aí `s01-tundra-siberiana-plano-aberto.mp4` não denuncia nada, e a mídia cai no
balde "SEM PROVA" — que o gate trata, com razão, como *falta declaração*, não como *fonte vetada*.

**Medido no `mamute-de-volta`:** o gate deu `0 PROIBIDA` e 120 "sem prova". Confiei e disparei 81
renders. O `_pesquisa/footage.json` do mesmo projeto dizia, em `fontes_usadas`:
**`Pexels = 26 clipes · Pixabay = 4`** — com a justificativa registrada pelo próprio agente: *"as 4
assinaturas estavam DESLOGADAS nesta VM… Autorizado pelo despacho, caí para fontes livres"*.

Isso é o incidente de 29/jul se repetindo, e o despacho **não** autoriza: porta fechada autoriza
AVISAR, nunca trocar a fonte.

Conserto: o gate passou a ler `_pesquisa/*.json` e cruzar `fontes_usadas` com o veto. É a ponta mais
confiável que existe — a declaração de quem fez o download — e custa um `readFileSync` por projeto.

⚠️ **Só `fontes_usadas` conta.** Uma varredura por texto solto (`grep -i pexels`) acusou **8 projetos**;
pela régua certa, **um**. Os outros sete citam Pexels em `descartados_por_visao` e no leque de buscas —
isto é, o agente OLHOU e REJEITOU. Punir a rejeição registrada ensinaria o agente a não registrar.

*Quando um gate tem várias vias de detecção, procure o caso em que TODAS falham juntas — ele existe,
e é onde o defeito vai morar, porque é o único lugar onde ninguém olha.*


### PESQ-54 · [renumerado de PESQ-50 no merge de 08/ago — colisão entre Mac e VM]

Medido no `o-acre-o-estado-que-o`: o `qc-procedencia` reprovou a entrega com **218 arquivos "? SEM
PROVA"** em 37 pastas. **Zero eram proibidos** — a mídia estava certa e a caça havia registrado tudo.
O que faltava era a declaração no formato que o gate lê.

    o gate lia:   _PROCEDENCIA.json · manifest.jsonl · _pesquisa/pauta-*.json
    a prova está: _media/<pasta>/_creditos.json  e  _pesquisa/*.json (lote-final-arte, geoglifos, …)

Fonte, licença, autor e URL estavam a poucos diretórios de distância, estruturados. A "solução"
óbvia — mandar alguém redigitar 218 entradas lendo 18 JSONs — é arqueologia paga sobre dado que já
existe, com erro de cópia garantido. O próprio cabeçalho do gate previa o desperdício.

Escrito `scripts/procedencia-reconciliar.mjs`, um TRANSCRITOR: **218 → 30 sem prova**, sem buscar
nada e sem deduzir nada. Ele sobe na cadeia de ancestrais (em `pessoas.json` o `fonte_principal`
mora um nível acima do item que nomeia o arquivo — sem isso, 9 retratos ficavam órfãos com a prova
escrita ao lado), grava `_via` para auditar até a origem, nunca sobrescreve declaração existente, e
**deixa em branco e reporta** o que não tem prova em lugar nenhum.

**A lei:** "sem prova" e "sem declaração" são diagnósticos diferentes com consertos opostos — recaçar
queima cota à toa quando o que falta é transcrever. Antes de mandar refazer trabalho de pesquisa,
procure a prova nos artefatos que a estação já produziu. E o transcritor nunca inventa a fonte
plausível: fabricar procedência é exatamente o dano que o gate existe para impedir.


### PESQ-55 · [renumerado de PESQ-51 no merge de 08/ago — colisão entre Mac e VM]

Medido no `dentro-do-sol`, lote de fotos: o gate de relevância do `baixar.mjs` reprovou **toda** busca
de `--tipo=foto`, com um placar que se denuncia sozinho:

```
'ice cube macro' 6/24 · 'insect amber' 6/24 · 'ice cubes' 6/24     (25%, corte em 30%)
```

Três buscas **sem uma palavra em comum**, taxa idêntica até o numerador. Relevância real varia com o
termo; o que não varia é artefato. O screenshot que o **próprio gate** salvou como prova da reprovação
mostrava a página logada, o filtro "Só imagens ilimitadas" ativo, *"Fotos de Ice cubes — 94.302 fotos"*
e a grade inteira cheia de cubo de gelo. **A grade estava perfeita.**

A causa: `medirRelevancia` lê o slug dos 24 primeiros `href` e foi calibrado na grade de **vídeo**. Em
foto, `a[href*="/image-photo/"]` devolve 24 hrefs dos quais só ~6 são card com slug de palavras — o
resto é paginação e correlato. Divide por 24 e dá 25% fixo, qualquer que seja a busca. O mesmo arquivo
já documenta a saída para o caso idêntico do Envato: *"onde não é medível, não se mede."*

⚠️ **O dano não é a reprovação — é o conselho que vem junto.** A mensagem manda "encurte para 2–3
termos", que **não resolve** (com 2 termos dá 25% igual). Quem obedece tenta, falha de novo, e conclui
que a plataforma bloqueou — que é exatamente o degrau que em 29/jul levou uma sessão a migrar para
Pexels e contaminar três projetos. *Instrução de conserto que não conserta empurra para a versão
perigosa;* um gate que reprova sem saída válida é pior que gate nenhum, porque fabrica o falso
diagnóstico de porta fechada.

**A lei, em duas metades.** (1) Antes de aceitar o veredito de uma métrica, procure a **variância**: se
entradas que não se parecem produzem a mesma nota, a métrica não está lendo a entrada. É teste de um
minuto e vale para qualquer gate — relevância, carga, cobertura. (2) Métrica calibrada numa superfície
**declara** a superfície em que vale; portada para outra sem recalibrar, ela mede o layout, não o
conteúdo.

**Não conserte com a linha andando.** O agente que achou isto tinha 8 caçadores rodando o mesmo
arquivo e **não** editou — editar `baixar.mjs` em corrida quebraria a caça de todos os lotes. Achado
vai para o diário e o conserto é do `tecnico-stock`, com a linha parada. Medido junto, e pendente do
mesmo conserto: a rota de foto da **Envato** redireciona para a home (sessão viva, plano na barra
lateral) e **Storyblocks/Motion Array não têm rota de foto** — sem calibração, nenhum acervo assinado
tem caminho para FOTO.

---

### PESQ-56 · [renumerado de PESQ-52 no merge de 08/ago — colisão entre Mac e VM]

Medido na estação **regência de imagem** do `o-acre-o-estado-que-o`. O `regente-de-imagem` entregou uma
partitura sólida (86 cenas, 214 beats, censo de 62,6% de registro real) e, junto, oito
`pendencias_de_pesquisa` — a lista que reabre a caça de mídia. Uma delas dizia, sobre a cena das cidades
da borracha:

> *"nenhuma foto das duas cidades no disco — duas cidades nomeadas na fala e o milagre urbano é a tese
> da cena"*

O disco tinha **seis fotos de época já baixadas e com procedência escrita**: o Theatro Amazonas de 1911
(Pearson), o porto de Belém de 1890, o Palácio da Justiça, a Alfândega, a Associação Comercial e uma
vista de Manaus de 1906. O que faltava de verdade era **um** plano — o interior do teatro. O agente
prescreveu certo e **diagnosticou errado**: ele leu o que a cena EXIGE (o ofício dele) e afirmou o que o
disco TEM (que ele não olhou).

**Por que isto é caro, e não é um detalhe de redação.** Uma pendência é uma ordem de compra: ela despacha
`pesquisa-*`, que gasta cota de plataforma assinada e horas de caça em acervo histórico. Pendência falsa
manda **refazer trabalho já pago** — exatamente o que a doutrina de custo da casa proíbe, e do jeito mais
difícil de pegar, porque a lista chega bem escrita, com termo de busca e justificativa impecável. Pior que
o desperdício: quando uma linha da lista cai por diagnóstico falso, a estação seguinte passa a desconfiar
**da lista inteira** — e aí as sete pendências verdadeiras perdem autoridade junto com a falsa.

**A lei:** quem declara falta, MEDE a falta. Antes de escrever "não há X no disco", rode o `ls`/`find` em
`_media/` e diga o que encontrou. A pendência honesta tem duas partes — *o que a cena exige* **e** *o que
já existe* —, e a segunda é um comando, não uma lembrança. Vale para todo agente que produz lista de
trabalho para outro: **o custo de conferir é um comando; o custo de não conferir é a caça refeita.**

E o corolário que fecha o laço com a [PESQ-31]: pendência conferida vira lista **menor e mais afiada**.
No caso medido, das oito pendências sobreviveram cinco lacunas reais, uma virou parcial (um plano em vez
de uma cena inteira) e duas eram upgrade com fallback já garantido no disco — três quartos do despacho
mudou de tamanho depois de um minuto de `find`.

**AGENTE-RAIZ corrigido:** `cerebro/agentes/regente-de-imagem/CONTRATO.md` §4 (checagem nova, "a
pendência se confere no disco") e a cópia viva em `.claude/agents/regente-de-imagem.md` — os dois lados,
porque a fonte do cérebro está atrás do repo e reinstalar sobrescreveria só um deles.

---

### PESQ-57 · [renumerado de PESQ-53 no merge de 08/ago — colisão entre Mac e VM]

Medido na **recaça de Pexels** do `especies-humanas`. Um lote anterior substituiu o take 3 da cena
`s15` por um clipe assinado da Storyblocks — altiplano do Tigray, escolha editorial certa, validada
por visão, com procedência escrita. **11,39 s.** A cena pede **12,31 s**.

Ninguém percebeu porque **não há falha para perceber**. O motor de vídeo da casa é seek puro
(`video.currentTime = f(t)`), e `currentTime` além do fim não estoura: entrega o último frame. A
imagem simplesmente **para** — sem erro, sem log, sem gate. `qc-contrato`, `qc-carga`,
`check-overlap`, `qc-procedencia` e `qc-footage-seekavel` passam todos.

E o lugar do congelamento é o pior possível: o alfa daquele take é `smooth((t-14.25)/0.7)` **sem
`1-smooth(...)` multiplicando**, ou seja, sobe e nunca cai — o comentário do próprio HTML diz *"a
planície: o MESMO chão até o fim"*. O clipe satura em t≈31,2 s de uma cena de 32,60 s: **congela no
fecho**, que é o que fica na retina.

**O piso é calculável, e a conta é de segundos:**

```js
f = clamp(0, 12.5, 0.20+(t-14.25)*0.66)   // DUR=32.60 → 0,20 + 18,35×0,66 = 12,31 s
```

Três armadilhas na leitura, todas encontradas nesta mesma produção:

1. **O `clamp` de cima é TETO, não piso.** Aqui ele vale 12,5 e a fórmula chega a 12,31 — perto, mas
   em outra cena a diferença foi de 12,5 contra 4,0. Calcule os dois e use o **menor**.
2. **Quem decide o `t` máximo é o ALFA, não a duração da cena.** Take que sai aos 15 s pede muito
   menos do que a fórmula sugere. Take cujo alfa nunca cai pede até o último quadro.
3. **Arquivo que serve DUAS cenas obedece ao MAIOR dos dois pisos.** Nos pares de reuso deliberado
   ([ARTE-139]) a segunda cena costuma pedir menos: no mesmo vídeo, o leão pede 7,66 s na `s24` e
   **10,85 s** na `s06`. Medir só a segunda aprova um clipe que congela na primeira.

**O contra-exemplo interno é a prova de que isto é ensinável, não sorte.** O lote C da MESMA recaça,
no MESMO dia, abriu o HTML da `s40`, cravou os pisos dos três papéis antes de buscar (`≥14,55 ·
≥20,60 · ≥8,20`) e por isso **recusou** um clipe de Lisboa de 12,05 s que ele próprio havia caçado
para a vaga de 14,55 — registrando no laudo *"em C1 ele congelaria"*. Mesma ferramenta, mesma janela,
mesmas plataformas. A diferença foi abrir o arquivo.

**A lei:** substituição de mídia em cena que **já tem HTML** é um contrato de duração. Antes de
aprovar o candidato, leia a tabela de `JOBS`/`takesAt` da cena, calcule o piso de cada vaga e
**peça folga** — piso 12,5 s → procure 15–25 s. Custa nada na busca e sobrevive ao reajuste de tempo
que a arte fizer depois. Corrigido no agente `pesquisa-imagens` (§10.1).

**E meça DEPOIS da normalização, porque o reencode all-intra ENCURTA o clipe.** Medido nesta mesma
recaça: o tigre saiu do stock com 11,136 s e voltou do `qc-footage-seekavel --corrigir` com
**11,114 s** — 22 milésimos a menos. Ali a margem sobre o piso (10,80 s) aguentou; num clipe
escolhido no osso não aguentaria, e a perda acontece **depois** de todo mundo ter aprovado. O mesmo
nos outros: shanghai 32,19 → 32,17 s, tigray 11,39 → 11,37 s. *A conferência vale no arquivo que vai
ao ar, não no que foi baixado.*

*Defeito que não emite sinal precisa de gate ou de conta. Este não tem gate — então tem conta.*
---

### PESQ-58 · A categoria "sem procedência declarada" ESCONDE a violação — declare primeiro, julgue depois (08/ago/2026)

`galaxia-arco-flecha`. O `qc-procedencia` dizia: **37 arquivos sem procedência declarada, 0 proibidos**.
Lido assim, parece pendência de papelada — o tipo de reprovação que uma estação com pressa empurra
para a próxima.

A informação existia o tempo todo: as pautas em `_pesquisa/pauta-*.json` traziam `fonte`, `url` e
`licenca` em **87 itens**. Faltava só o formato que o gate lê. Gerei o `_media/_PROCEDENCIA.json` a
partir delas — trabalho determinístico, zero inferência — e o **mesmo gate, sobre os mesmos arquivos**,
passou a acusar:

```
itens  PROVADA  isenta  S/PROVA  PROIBIDA  em cena
  67       22      22        1        22        13
```

**22 arquivos de fonte PROIBIDA, 13 em cena.** Todos do **Pexels**, com URL `pexels.com` completa
gravada na própria pauta — [PESQ-12] tira CC0 do pipeline. Nada na mídia mudou; mudou o que o gate
podia **ver**.

**A regra:** "não sei a origem" não é um estado neutro entre limpo e sujo — é um **abrigo**. Enquanto
um item está em `S/PROVA`, ele não pode ser reprovado pelo que de fato é, e o laudo mostra zero
proibidos com ar de boa notícia. Por isso a ordem correta é sempre **declarar primeiro, julgar depois**:
converter a informação que já existe no formato que o gate lê é barato, e é a única coisa que
transforma uma pendência administrativa no achado que ela estava escondendo.

Corolário para quem baixa mídia: escrever `_PROCEDENCIA.json` **no ato do download** não é burocracia —
é o que impede que uma escolha de fonte errada atravesse a produção inteira invisível. O gate diz isso
com todas as letras: *"o agente de pesquisa ainda tem a URL na mão — daqui a uma semana isso vira
arqueologia."*

E quando o proibido aparecer: **porta fechada não autoriza trocar a fonte, autoriza AVISAR.** Reporte
com a medição (aqui: os 11 em uso eram 3840×2160 landscape real, então a razão empírica da PESQ-12 —
"b-roll comprimido de 3-13 MB" — não se verificava neles). Quem decide abrir exceção é o dono, não a
estação que encontrou.

---

### PESQ-59 · Dividir um `pesquisa-*` em lotes duplica o NOME do shard — e o segundo a salvar apaga o primeiro (08/ago/2026)

A estação de pesquisa manda **dividir o `pesquisa-imagens` por lote de cenas sem sobreposição**, porque
ele é o gargalo (é ele quem caça footage, e no `quao-fundo-terra` eram 26 cenas de footage + 25 de foto
num agente só). A divisão está certa e ganha tempo real. O que ninguém previu é que a doutrina de cada
`pesquisa-*` fixa **um caminho literal de shard**:

```
out/<proj>/_pesquisa/pauta-imagens.json      # pesquisa-imagens.md:466
out/<proj>/_pesquisa/pauta-dados.json        # pesquisa-dados.md:127
```

Três `pesquisa-imagens` em paralelo obedecem os três à mesma linha e escrevem **no mesmo arquivo**. Não
há lock nenhum em `_pesquisa/` (o único lock do repo é o do render), então o último a salvar sobrescreve
os outros dois. O contrato `pauta-pesquisa.schema.json` já dizia a metade da coisa — *"UM SHARD POR
AGENTE (são 6 agentes escrevendo em paralelo e o repo não tem lock nenhum além do render; arquivo único
seria corrupção garantida)"* — mas "um por agente" foi escrito pensando em **seis agentes DIFERENTES**,
e não cobre o caso de um agente dividido em N instâncias, que é justamente o que a estação manda fazer.

**Por que isso é pior que uma perda de arquivo:** o download não se perde. Os clipes ficam no disco, em
`_media/<cena>/`, com `_PROCEDENCIA.json` e tudo. O que se perde é o **registro** — e a arte e o
`qc-pauta-integrada` leem a PAUTA, não a pasta. O resultado é um vídeo em que dois terços da mídia paga
existe e ninguém sabe, com todos os gates verdes. É a forma mais cara de sucesso falso: cota diária de
Shutterstock gasta duas vezes pelo mesmo clipe, na produção seguinte.

**A regra:** ao dividir um `pesquisa-*` em lotes, **sufixe o shard com o lote** —
`pauta-imagens-footage-A.json`, `pauta-imagens-foto.json`, `pauta-dados-B.json`. É seguro porque quem
consome pauta **varre o glob `_pesquisa/pauta-*.json`** em vez de montar o nome à mão (o próprio contrato
manda isso, por causa da divergência singular/plural que ele documenta). E quem despacha os lotes é quem
tem de dizer o nome: o subagente não sabe que tem irmão.

**Corolário geral, que vale fora da pesquisa:** todo caminho de saída FIXO na doutrina de um agente é
uma aposta de que aquele agente roda **um por vez**. Quando a doutrina de cima manda paralelizar e a de
baixo fixa o nome do arquivo, as duas estão certas sozinhas e erradas juntas. Antes de disparar N cópias
do mesmo especialista, **grep o `.md` dele por caminho de escrita** e decida o sufixo antes — não depois,
que é quando o arquivo já foi sobrescrito.

### PESQ-60 · "Conferido em 1:1" não diz ONDE — declaração de identidade nacional nomeia os PONTOS (08/ago/2026)

Footage de fronteira, polícia, militar e resgate quase sempre foi captado em **algum** país, e a cena
que ele ilustra costuma falar de **outro**. Bandeira, insígnia, placa, numeração de casco ou grafia no
costado transformam um plano genérico em afirmação sobre um país específico — e quando isso acontece
sob a voz falando de outro lugar, o vídeo mente.

Medido no `ceuta-travessia-em-massa`, s82. O `_PROCEDENCIA.json` de um clipe declarava:

> *"NENHUMA bandeira, insígnia, numeração, grafia ou placa legível em nenhum dos instantes conferidos —
> nem em recorte 1:1. As viaturas são 4x4 tan genéricas e as fardas verde-oliva lisas. ⚠️ O TÍTULO do
> acervo cita Israel/IDF; isso é metadado do local de captação, NÃO aparece na imagem."*

A viatura em primeiro plano tem **placa militar preta com numeração branca legível na traseira**, com a
tarja amarela característica — ~90×25 px no palco 4K, visível num recorte ampliado do frame t=2,0s. A
paisagem também não era "árida genérica": mediterrânea verde, com cidade de casas claras no horizonte.
A URL do acervo dizia `idf-guards-patrolling-borders-of-israel`, e a cena ilustra **o que a União
Europeia compra para o Marrocos**.

O editor-chefe **aceitou o clipe lendo essa declaração** e registrou a decisão em voz alta no diário.
Quem o derrubou, horas depois, foi um juiz de re-julgamento que ampliou **a traseira**. Os dois olharam
em 1:1; só um olhou onde a marca estava. E o defeito era reincidente: essa mesma cena já perdera um
plano por bandeira da Grécia legível na proa — **o defeito voltou pela porta do conserto**.

**A regra:** `checagem_de_identidade_nacional` só vale se **nomear os pontos conferidos, um a um, com o
veredito de cada**. Marca nacional mora em lugar previsível — traseira e placa do veículo · costado e
proa da embarcação · ombro, peito e boina da farda · cauda e fuselagem da aeronave · porta e capô da
viatura · mastro e o que estiver hasteado nele. *"Confiro lateral e teto: limpos; traseira não visível
neste ângulo"* é declaração honesta e útil. *"Nada legível em 1:1"* é declaração vazia **que passa por
prova**, e é pior que nenhuma: ela encerra a conferência de quem lê.

**Corolário para quem DECIDE:** declaração de procedência é testemunho de quem caçou; o frame é prova.
Quando a decisão é editorial e o custo é institucional, extrair o frame custa dois minutos de luz —
e é a diferença entre revisar um clipe e publicar uma afirmação falsa sobre um país. Título de acervo
que cita país ou força armada é **alerta que obriga a conferência ponto a ponto**, nunca desempate
resolvido com "é só metadado de captação".

---

### PESQ-61 · Filtro de orientação na URL é uma DECLARAÇÃO; o `ffprobe` no arquivo é a MEDIDA (08/ago/2026)

Medido no `quao-fundo-terra`: o caçador de footage do lote A passou `--orientation=horizontal` e
mesmo assim **quatro clipes 2160×3840 entraram no disco**, vindos do Storyblocks. Ele pegou por
conta própria rodando `ffprobe` depois e rejeitou.

O `baixar.mjs` já tinha uma trava de retrato — mas ela lê o **texto da página do item**
(`garantir4K`, que procura "2160 × 3840" na lista de formatos ofertados) e por isso **só roda em
quem abre item**. O Storyblocks baixa direto da lista de resultados: passa ao largo do gate sem que
nada falhe. Dois mecanismos que pareciam redundantes cobriam, na verdade, rotas diferentes — e
ninguém tinha percebido porque nas plataformas que abrem item o gate funcionava.

**O ponto que vale além deste caso:** um parâmetro na URL é um *pedido* à plataforma. Se ela mudar
o nome do parâmetro, ignorá-lo numa rota nova ou aplicá-lo só à busca e não ao download, **ela não
avisa** — devolve o item errado com HTTP 200. Todo filtro que você manda pela URL precisa de uma
verificação correspondente **no artefato que chegou**, senão o que você tem é uma intenção
registrada, não uma garantia.

E o custo é assimétrico, que é o que torna isto uma lei e não um capricho: no Storyblocks, Envato e
Motion Array — sem teto — um vertical baixado custa tempo. **No Shutterstock ele custa um dos 100
downloads do dia**, e o vídeo seguinte fica sem cota por causa de um clipe que nunca poderia ter
sido usado. Vertical também é insidioso porque **passa em qualquer gate de resolução**: 2160×3840
tem os mesmos pixels de um 4K, e quem só confere "tem 2160?" aprova.

O conserto está no `baixar.mjs`, logo após o `saveAs`: mede com `ffprobe`, e se `h > w` (sem
`--orientation=vertical` explícito) move para `_rejeitado-vertical/` e conta o download como gasto
— porque ele foi. Não apaga: arquivo em quarentena é auditável, arquivo apagado vira discussão.
E quando o `ffprobe` não consegue medir, **deixa passar**: sem medida não se acusa, que é a mesma
calibração que tornou o `qc-portabilidade` confiável.
---

### PESQ-62 · O FORMATO DA PROVA SÓ EXISTIA DENTRO DO GATE — e dois caçadores o improvisaram (07/ago/2026)

> 🔀 **Era `PESQ-45` e virou `PESQ-62` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `PESQ-45` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**A [PESQ-35] instalou o `_PROCEDENCIA.json` e a [PESQ-37] provou que a garantia mora na
credencial, não no escopo. Falta o degrau do meio: a prova precisa ser LEGÍVEL, e o formato dela
não estava escrito em lugar nenhum que um agente leia.**

Medido no `ceuta-travessia-em-massa`. O gate lê a declaração assim, e só assim:

```js
const e = j[arq.nome] ?? j[arq.rel];      // qc-procedencia.mjs — chave na RAIZ
```

`grep -l PROCEDENCIA .claude/agents/*.md` volta **vazio**: nenhum dos 34 agentes documenta o
formato. Ele aparece em `knowledge/FONTES-MIDIA.md` como conceito ("o gate reprova por fonte
declarada no `_PROCEDENCIA.json`"), nunca como estrutura. Resultado, no mesmo projeto e no mesmo
dia: o `pesquisa-imagens` escreveu as chaves na raiz e **acertou**; o `pesquisa-logos` aninhou tudo
sob `"arquivos"`, imitando o formato da pauta que ele acabara de escrever, e **errou**. Os dois
agiram de boa-fé. Um acertou por sorte.

**O que torna isto pior que não declarar:** ninguém percebeu. As duas pastas do `pesquisa-logos` —
`logo/` e `flag/` — são **isentas por pasta**, então o laudo dizia `isenta` e o gate dava PASS. A
declaração existia, tinha URL, licença e busca de cada um dos 64 itens, era honesta — e **nunca foi
lida uma única vez**. Uma prova que ninguém lê não é uma prova fraca; é uma armadilha que só dispara
no dia em que a isenção mudar, com o caçador jurando que declarou e o disco já limpo.

**O conserto foi no gate, não no agente — de propósito.** Corrigir os dois `.md` conserta os dois
agentes de hoje e nenhum dos futuros: o próximo caçador que precisar declarar mídia numa pasta nova
vai improvisar de novo, porque o formato continua morando dentro do código. Então o gate passou a
DENUNCIAR declaração órfã — `_PROCEDENCIA.json` cujas chaves de topo não casam com arquivo nenhum —
dizendo o motivo provável e a forma certa ao lado:

```
⚠ 1 `_PROCEDENCIA.json` que o gate NÃO consegue ler — a declaração existe e não vale:
     _media/logo/_PROCEDENCIA.json
       entradas aninhadas sob "arquivos" — o gate lê na RAIZ: { "<arquivo>": {fonte,url,…} }
```

**É AVISO, nunca reprovação**, e a assimetria é deliberada: o arquivo pode estar legitimamente
isento, e transformar formato errado em FAIL puniria exatamente quem declarou a mais. Punir o zelo
ensina a não declarar.

**A regra:** *contrato que vive só no leitor não é contrato — é adivinhação com uma resposta certa.*
Quando um gate exige uma estrutura, ele tem a obrigação de dizer, no próprio laudo, quando o que
recebeu não casa. Laudo que aceita em silêncio o que não consegue ler ensina que está tudo bem.

**Limite conhecido do aviso:** ele só enxerga pasta que tenha ao menos um arquivo com extensão do
`EXT` do gate (`mp4|mov|jpg|jpeg|png|webp`). `_media/flag/` é só `.svg` e por isso **não** aparece,
embora tenha o mesmo defeito de formato. Quem mexer no `EXT` ganha esse aviso de graça.

### PESQ-63

> 🔀 **Era `PESQ-47` e virou `PESQ-63` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `PESQ-47` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**A trava de caça serializa a CONTA; o PERFIL do Chrome serializa tudo o resto — e ninguém avisa.**

Medido em `cerebro-quando-sonha`, 07/ago/2026, por dois agentes independentes na mesma hora. A
doutrina manda dividir `pesquisa-imagens` em lotes sem sobreposição, porque a parte cara do trabalho
(buscar, olhar candidato, julgar) acontece FORA da trava: enquanto um lote baixa, o outro cura. A
`trava-caca.mjs` existe justamente para permitir isso — ela serializa **por plataforma**, para os dois
lados não gastarem o mesmo pote de cota.

Só que `out/_stock-perfil` é **um diretório único**, e o Chrome não abre o mesmo perfil duas vezes. O
lote A tentou **10 vezes** e morreu todas com `Opening in existing browser session` — **inclusive em
plataforma diferente da que o lote B usava**, ou seja, num caso em que a trava teria liberado a vaga
na hora. A paralelização que a trava foi construída para permitir simplesmente **não acontecia**.

O sintoma não se parece com a causa, e é isso que custa caro:

- não é limite de cota (a trava estava livre);
- não é anti-bot (o IP é residencial e a sessão está viva);
- não é plataforma fechada (a busca responde normalmente);
- **parece o agente estar travado**, e foi assim que o lote B morreu: watchdog de 600 s sem progresso,
  depois de já ter baixado 21 clipes que ninguém tinha promovido ainda.

Os dois agentes chegaram sozinhos à mesma saída — **clonar o perfil** (uma cópia em `out/` e outra
fora do repositório) — o que funciona e prova o diagnóstico, mas é improviso reinventado a cada
produção, por agentes que não conversam entre si. Improviso que dois especialistas descobrem no mesmo
dia é defeito de ferramenta, não talento de agente.

**A regra:** *recurso que a paralelização toca precisa ser tão paralelo quanto a trava promete.* Uma
trava que libera a vaga e um perfil que a nega se contradizem — e a contradição sai como travamento
mudo, o pior formato de erro que existe, porque imita exatamente o comportamento correto de "esperar a
vez", que a doutrina manda respeitar.

**Onde consertar** (não feito nesta estação, que é de pesquisa e não de dev): `scripts/stock/baixar.mjs`
— perfil derivado por plataforma ou por PID, clonado sob demanda a partir do perfil logado. Enquanto
não for, quem dividir a caça em lotes **precisa clonar o perfil no brief**, e não descobrir isso na
décima falha.

**Corolário, medido no mesmo dia:** o carimbo `_PROCEDENCIA.json` escrito **no fim** é carimbo que se
perde — o lote B morreu antes de escrever e deixou 6 arquivos promovidos sem declaração. Salvou o
trabalho o `manifest.jsonl` do hub do baixador, de onde a procedência foi reconstruída casando por
duração e resolução. **Escreva o carimbo logo após cada download**, e nunca recace por falta de
declaração: o arquivo costuma estar certo, e recaçar queima cota diária finita para reobter o que já
está no disco.


### PESQ-64

> 🔀 **Era `PESQ-48` e virou `PESQ-64` em 08/ago/2026.** O número colidia com outra
> lei do mesmo domínio, vinda do merge Mac×VM. Citação antiga a `PESQ-48` que fale deste assunto
> aponta para cá. Doutrina: [SIS-62].

**COTA DIÁRIA ESGOTADA é a TERCEIRA causa — e o script empurrava ela para as outras duas, que mandam
o caçador para o lugar errado.**

Medido em `orcas-nao-matam`, 07/ago/2026, durante a recaça de procedência. O Shutterstock aceitou a
busca, devolveu 20 resultados no tema e falhou em 3 itens seguidos com o botão de licenciar
`disabled`. O `baixar.mjs` fechou o laço anunciando *"3 falhas SEGUIDAS — isto não é item ruim, é a
máquina (seletor/sessão)"*. **Estava errado.** O screenshot de debug que o próprio script tirou
daqueles mesmos itens mostrava a conta **logada**, plano Ilimitado **ativo**, e o banner: *"Você
atingiu o limite de downloads por hoje. Seu limite será redefinido em 7 de agosto de 2026 às 23:23."*

O que torna esta confusão cara é que **as três causas pedem ações opostas**, e as duas que o script
sabia nomear mandam para o lugar errado:

| causa | o que a sessão faz | custo do diagnóstico errado |
|---|---|---|
| seletor quebrado | chama o `tecnico-stock` | ele procura um seletor perfeito e não acha nada |
| sessão caída | relogin por VNC | relogin não devolve cota nenhuma |
| **cota esgotada** | **espera o reset** (que a própria tela informa) | — |

E as duas primeiras, juntas, soam como *"a plataforma fechou"* — que é exatamente o degrau que em
29/jul levou uma sessão a migrar para o Pexels e contaminar TRÊS projetos (44 arquivos em
`especies-humanas`, 28 em `orcas-nao-matam`), todos aprovados por todos os gates da época.

**Cota esgotada é a única das três que já vem com a hora do conserto.** Ela não é bloqueio da
plataforma nem defeito da casa: é o teto de HOJE da conta, que é do PAR de máquinas (Mac+VM) e some
mais rápido quanto mais sessões headless caçam ao mesmo tempo — naquele dia havia ~10, incluindo
outra recaça de procedência em `especies-humanas` disputando o mesmo pote.

**Consertado na raiz no mesmo dia:** `scripts/stock/baixar.mjs` agora PERGUNTA À PÁGINA antes de
culpar a máquina — lê o texto da aba do item (antes de fechá-la, que é onde o banner vive) e, se achar
indício de esgotamento, sai com código 6 e mensagem que nomeia a causa certa, diz para NÃO chamar o
técnico e para NÃO trocar de acervo. A regex exige indício de esgotamento ("atingiu o limite", "will
reset", "has been reached"), nunca a palavra "limite" solta: rodapé de termos de uso fala em limite o
tempo todo, e falso positivo pararia caça saudável.

É o mesmo defeito que a correção de 05/ago (pulo ≠ falha) já havia atacado um degrau antes, e a lei
que os une é uma só: **contador de falhas não é diagnóstico.** Quando o script for anunciar a causa,
ele tem de olhar a tela — porque um diagnóstico falso não só desperdiça o conserto certo, ele
autoriza o conserto proibido.

---

## PESQ-65 · Vídeo não se valida como foto: a declaração carrega a AMOSTRA (08/ago/2026)

Uma foto tem **um** estado; um clipe de 6 s a 30 fps tem **180**. Quando a pesquisa escreve no
`_PROCEDENCIA.json` uma frase sobre o clipe — *"nenhum rosto voltado para a câmera"*, *"sem marca
d'água"*, *"plano único"* —, ela afirma algo sobre os 180, e todo mundo que ler depois **age como se
os 180 tivessem sido vistos**.

**O caso.** `ceuta-travessia-em-massa`, cena `s138`, sobre **menores desacompanhados**. A procedência
do clipe `s138-adolescentes-de-costas-no-guiche` declarava *"nenhum rosto voltado para a câmera"*. Eu
prescrevi esse clipe ao `editor-de-arte` confiando na declaração. Ele varreu frame a frame (passo
0,4 s) antes de usar e achou rostos de menores legíveis em **cinco** instantes: t≈0,0 frontal · 1,2
em 3/4 · 2,0–3,6 perfil nítido em primeiro plano · 4,8 frontal · 5,6 perfil grande. A maior faixa
limpa era **menor que 0,9 s** contra um plano mínimo de ~1,6 s — **não existia janela exibível**.
Conferi o frame de t=2,0 com meus próprios olhos: perfil nítido, olho, nariz e boca, em primeiro
plano. O agente estava certo em me desobedecer.

**A raiz não é preguiça — é a régua.** A doutrina mandava "validar por visão", e validar por visão
uma FOTO é olhar a foto. Aplicada a vídeo sem qualificação, a mesma frase autoriza olhar dois frames
e declarar sobre o arquivo inteiro. O defeito é de ESCRITA da declaração, e é por isso que o conserto
também é:

> Toda propriedade declarada sobre um VÍDEO vem com a amostra que a sustenta. Varreu? Diga o passo.
> Viu N frames? Diga quais — e a declaração vale **só para esses N**.

Não *"sem rosto"*, e sim *"sem rosto em t=0, 1,5, 3,0, 4,5 (4 frames; NÃO varrido)"*.

**Varredura obrigatória** (não opcional): rosto de menor de idade; pessoa identificável em situação
de vulnerabilidade; marca d'água de terceiro; e qualquer propriedade que o roteiro use como promessa.
Passo 0,3–0,5 s, do começo ao fim do ARQUIVO — não da janela pretendida, porque quem reabrir a cena
escolherá outra.

**O corolário que paga a conta.** No mesmo caso, o plano que resolveu a cena estava **escondido
depois de um corte interno em ~3,65 s**, dentro de um arquivo que outra cena já usava e clampava
antes do corte. Material pago, invisível no catálogo, melhor que uma caça nova — e a cota diária do
Shutterstock é finita. **Varrer não é só cautela: é inventário.**

Consertado no agente `pesquisa-imagens` (§4d) no mesmo dia.

---

## [PESQ-66] "Não consegui abrir" não é "não existe" — e a ferramenta que resolve não pode morar em arquivo ignorado

**09/ago/2026, `aceleradores-particulas`.** O `pesquisa-pessoas` foi atrás do release do CERN que
sustenta o vínculo dos doadores privados do FCC, tomou 403/404 e reportou: *"home.cern devolve a
casca da página para crawler e **não há puppeteer nesta VM**"*. Fui medir. **As duas metades do
diagnóstico estavam erradas**, e cada uma ensina uma coisa diferente.

**1 · O navegador existia.** A casa roda Chrome headless o dia inteiro — é com ele que renderiza. O
que não existia era um caminho que o agente pudesse achar: a ferramenta se chamava
`scripts/_tmp-ler-pagina.mjs` e o `.gitignore` descarta `_tmp-*.mjs`. Ou seja, um utilitário que
seis agentes precisam **não estava em clone nenhum**, não sobrevivia a `git clean` e não existia no
Mac. O agente concluiu, razoavelmente, que a capacidade não existia. *Ferramenta que os agentes
devem usar não pode viver em arquivo ignorado, nem se chamar `_tmp`.* Promovida a
`scripts/ler-pagina.mjs`, versionada, com saída 0/1 para testar URL viva.

**2 · Não era muro anti-robô: era URL morta.** O `home.cern` migrou para WordPress. Os caminhos
`/news/press-release/<x>/<slug>` dão **301 → 404** — e são justamente os que o `WebSearch` devolve e
os que terceiros citam. A forma viva é a curta, `home.cern/<slug>/`. **Três agentes bateram nesse
mesmo muro no mesmo dia**, cada um por sua conta, e só dois escaparam.

**A regra.** Antes de escrever "bloqueado" ou "não achei", rode `node scripts/ler-pagina.mjs <url>`.
E ao citar URL numa pauta, rode nela também: link morto no shard vira link morto na tela, e quem
reauditar a procedência em um mês não saberá se a fonte sumiu ou se nunca foi conferida.

**Por que isto é caro e não parece.** Um 403 lido como bloqueio produz um "NÃO ENCONTRADO" que
*parece trabalho honesto* — tem a forma de uma resposta válida. Ninguém audita um "não achei". No
caso, o documento estava no ar e continha a divergência mais importante do vídeo: o release **não
nomeia Yuri Milner**, que a narração cita como doador. A ausência de prova virou quase prova de
ausência, e passaria.

Consertado no mesmo dia nos **seis** agentes `pesquisa-*` (bloco "quando a página não abre"),
nos dois lados: `.claude/agents/` e a fonte `cerebro/agentes/*/CONTRATO.md`.

### Duas portas que parecem fechadas e não estão (medido 09/ago/2026, `aceleradores-particulas`)

- **`cds.cern.ch` (o acervo de mídia do CERN) fica atrás do Anubis**, um desafio de *proof-of-work*
  em JS: `curl` recebe **HTTP 200** com o corpo *"Making sure you're not a bot!"* — status de
  sucesso, conteúdo de bloqueio, que é o pior par possível para quem só olha o código. **Chrome
  headless resolve o desafio sozinho.** Foi assim que saíram as 113 fotos oficiais do anúncio do
  Higgs de 2012.

- **`upload.wikimedia.org` devolve HTTP 429 ao IP de datacenter da VM.** Metade dos downloads falhou
  após 6 tentativas. **O túnel residencial já instalado resolve** — `curl --socks5-hostname
  localhost:1080 …` — e todos passaram de primeira. O túnel não serve só para stock pago: serve para
  qualquer acervo que trate IP de nuvem como robô. A API de busca (`/w/api.php`) tem limite próprio
  e pede consultas serializadas.

*Padrão comum aos dois: a resposta HTTP não descreve a porta.* 200 pode ser bloqueio e 429 pode ser
só o IP errado. Meça com a ferramenta certa antes de trocar de fonte — e **nunca** troque um acervo
por um proibido só porque o primeiro resistiu.

### PESQ-67 · A procedência da pasta inteira vale por arquivo — e o gate agora a lê (09/ago/2026, `quao-fundo-terra`)

Quando N arquivos saem da **mesma obra**, repetir url/licença/atribuição N vezes é ruído. O agente de
pesquisa que trouxe os 5 fotogramas do filme oficial da NSF (`s105-projeto-mohole`) fez a coisa
certa: escreveu **`_fonte_comum`** uma vez — obra, produtor, ano, url, licença, por que a licença é
confiável — e deixou em cada arquivo só o que varia (timecode, o que se vê, por que está ali).

O `qc-procedencia` só olhava `entrada.fonte` por arquivo e reprovou as cinco por **"SEM PROVA"**, com
a procedência completa escrita dois campos acima. **O falso positivo não era o dano.** O laudo manda
*"o agente de pesquisa ainda tem a URL na mão"* — ou seja, empurra para RECAÇAR, e recaçar queima
cota diária de Shutterstock (100/dia, do par Mac+VM) para substituir arquivo que já estava certo.
*Punir quem declarou bem ensina que caprichar não adianta* — a mesma calibração que o
`qc-portabilidade` já fazia com uso guardado.

**Consertado no gate, não no JSON:** `_fonte_comum` é herdado pela entrada de cada arquivo da MESMA
pasta (nunca global), e a entrada específica sempre vence. Medido: a herança **endurece** o veto —
um `_fonte_comum: "Pexels"` com entradas mudas era classificado `? SEM PROVA` e agora sai
`⛔ PROIBIDA`, porque a fonte herdada passa a alimentar a checagem da lista vetada.

**A segunda face, e é a que não se vê:** a normalização de fps **reescreve a extensão** (`.mov` →
`.mp4`) e a chave do `_PROCEDENCIA.json` fica com o nome antigo — a declaração vira órfã de um
arquivo que existe e está certo. É a irmã da [REND-48] (que trata do `<video>` apontando para
`.__norm`): mesma causa, alvo diferente. Depois de normalizar footage, **confira as chaves do
`_PROCEDENCIA.json` contra o `ls` da pasta** — o único gate que acusa é o de procedência, e ele
acusa com a palavra errada ("sem prova", quando é "nome trocado").

---

### PESQ-68 · Quadro com DOIS objetos do mesmo tipo: identifique os dois, não só o assunto (09/ago/2026, `fatos-a380`)

**Caso.** A regência do `fatos-a380` reabriu a busca da `s43-pneu-michelin` pedindo *pneu do A380 com
pessoa ao lado* — a escala humana **é** o assunto do beat. A `pesquisa-imagens` entregou uma foto
ótima do Commons: homem de pé, mão no topo do pneu, e validou por visão o que importava — a placa
`AIRBUS A380-800` dentro da roda e o `1400x530R23` no flanco, a medida real do trem principal. Ela
até varreu o flanco procurando marca concorrente, para não contradizer o "Michelin" da narração.
Cuidado exemplar no objeto certo.

**Só que o quadro tem DUAS rodas**, lado a lado, e a segunda nunca foi olhada. Ampliada, a placa dela
diz **`AIRBUS A310-300`**. A foto não é "as rodas do A380": é uma roda do A380 ao lado de uma roda de
outro avião. Quem receber o arquivo com a nota *"o pneu do A380, com pessoa para escala"* e usar o
quadro inteiro com esse rótulo põe uma **afirmação falsa na tela** — e nenhum gate da casa pega,
porque o arquivo é real, a procedência é real e o assunto principal está certo.

**A regra:** quando o quadro contém **mais de um exemplar do mesmo tipo de coisa** — duas rodas, dois
aviões, duas máquinas, duas pessoas —, identifique **todos** antes de entregar, e escreva na
procedência **o que é cada um**. O trabalho de validação não termina no assunto; termina no quadro.
A pergunta é *"o que mais está aqui dentro que alguém pode confundir com o assunto?"*.

**E o achado costuma valer mais que o susto:** identificados, os dois viram **comparação declarada**
(A310 × A380 no mesmo enquadramento, com a pessoa entre eles), que é argumento mais forte que a roda
sozinha. O defeito não era a foto — era a nota de uso incompleta. Por isso a saída não é descartar:
é **rotular cada objeto** ou **dizer onde fechar o corte** (aqui: na roda da direita, com o homem no
quadro).

Irmã da [ARTE-88] pelo outro lado: aquela cobra que a coisa nomeada **apareça**; esta cobra que o que
aparece **não seja confundido** com a coisa nomeada.

**AGENTE-RAIZ corrigido:** `pesquisa-imagens` — a validação por visão passa a exigir o **censo do
quadro** (todo objeto do mesmo tipo do assunto, identificado e escrito na procedência), e não só a
confirmação do assunto.

### PESQ-69 · A cláusula "declare em voz alta e siga" foi a porta pela qual o acervo proibido entrou (09/ago/2026, `galaxia-arco-flecha`)

**O que aconteceu.** A estação de RENDER parou 9 das 52 cenas do `galaxia-arco-flecha` — a abertura,
dois cards de título e a cena da publi — porque `qc-procedencia` acusou **22 itens de acervo
proibido** (14 em uso). Todos do **Pexels**, que a [PESQ-12] tira do pipeline e a [PESQ-33] proíbe
como contorno.

**A parte que interessa: a pesquisa não desobedeceu.** Ela seguiu o manual. O
`pesquisa-imagens.md`, na seção *"Falha de AMBIENTE não é resposta sobre o CONTEÚDO"*, dizia — depois
de proibir corretamente a troca — *"se ainda assim for a única saída, **declare em voz alta** que o
beat foi resolvido abaixo do padrão"*. Ela declarou: o `_media/_PROCEDENCIA.json` traz
`"licenca": "Pexels License"` em cada um dos 14, com autor, título e URL. Honestidade completa.

**E a declaração não salvou nada — só deixou por escrito que o vídeo não podia ir ao ar.** É o
formato mais caro do defeito: passa por todas as estações com aparência de diligência (tem
procedência! está declarado!) e só é cobrado na ENTREGA, com a arte inteira paga.

*Uma cláusula de escape numa regra é lida como a permissão, não como a exceção.* O texto gastava
quatro linhas explicando por que não se deve, e uma dizendo como fazer assim mesmo — e foi a última
que operou. Regra com saída documentada é regra opcional.

**A régua:** acervo assinado que não abre = **PARE E AVISE**. Trocar a fonte é decisão de MARCA, não
contorno técnico, e não pertence ao agente por mais bem declarada que fique. Beat sem mídia se
conserta em minutos quando alguém reabre a porta; vídeo montado sobre fonte proibida se refaz
inteiro.

⚠️ **E o nome do arquivo não denuncia mais.** A [PESQ-35] reprova por nome (`pexels*`, `pixabay*`…);
os 14 deste caso chamavam-se `s04-ceu-noturno-timelapse-pico.mp4`, `s75-lua-crateras-terminador.mp4`
— nomes de produção, impecáveis. **O que os pegou foi a declaração que a própria pesquisa escreveu.**
Fonte proibida com nome caprichado é a versão invisível do mesmo defeito, e ela existe hoje no
acervo. Corolário desconfortável: *o gate de nome premia quem esconde a origem, e o de declaração só
pega quem foi honesto.* Enquanto a régua for essa, "sem procedência declarada" merece a mesma
suspeita que fonte proibida — não é ausência de problema, é ausência de prova.

**O que a estação de render fez** (o padrão para o caso, [REND-]): não renderizou as 9, moveu-as para
`out/<proj>/_bloqueado-pexels/` com a tabela cena × arquivo e o caminho de volta, abriu 9 pendências
de recaça em `_fila-correcao.jsonl`, e **renderizou as outras 43**. Bloqueio parcial não é bloqueio
total — as 43 não deviam nada a ninguém.

**AGENTE-RAIZ corrigido:** `pesquisa-imagens` — a cláusula de escape da seção 9b foi **removida** e
substituída por PARE E AVISE, com o caso medido. Corrigido nos dois lados (`.claude/agents/` do repo
e `~/.claude/agents/`, que estava 51 linhas atrás).

### PESQ-70 · Rosto de stock IDENTIFICÁVEL numa cena cuja tese nomeia uma pessoa real vira sósia falso (10/ago/2026, `card04`/`s80` do `galaxia-arco-flecha`)

**O caso.** O card abre o capítulo **"Quem achou foi um voluntário"** — ciência cidadã: um voluntário
do RAD@home achou a estrutura olhando imagens de rádio em casa. A cena pede uma pessoa diante de uma
tela acesa. Duas recaças seguidas trouxeram stock corporativo, a segunda com um **executivo de blazer
e óculos, rosto nítido de perfil, em escritório com vários monitores e dashboards financeiros**
(título do item: *night business senior man computer accounting website*).

**Por que é falsificação e não só feiura.** O vídeo mostra a **foto REAL do voluntário** em outra cena
— nome na tela, cargo, crédito da fonte. Quando o mesmo arco visual traz um rosto nítido de stock, o
espectador atribui: *este é o voluntário*. E é outra pessoa. O HTML da cena declarava a proteção em
voz alta — *"NADA rotula quem é a pessoa: a silhueta é genérica"* — e a troca de mídia a desfez sem
que nenhum gate notasse, porque nenhum gate lê tese contra rosto.

**A regra.** Em cena cuja tese nomeia (ou o vídeo mostra) uma pessoa real, footage de pessoa entra
**só em silhueta, contraluz ou enquadramento não identificável**. É o mesmo princípio do *nunca
fabricar rosto*, do outro lado: ali se proíbe inventar um rosto que não existe; aqui, emprestar um
rosto que existe para um papel que não é dele. A silhueta não é estética — é o que torna a cena
honesta.

**Vocabulário de busca é escolha editorial.** `business`, `office`, `programmer`, `accounting`
puxam o mesmo acervo corporativo, e foi o que as duas tentativas usaram. Para pessoa comum em casa:
`silhouette`, `backlit`, `dark room`, `bedroom`, `apartment`. Título de stock não é prova —
já veio *milky way core* que era céu de nuvens com poste laranja.

**E o custo técnico do rosto errado:** a arte compõe sobre a mídia em coordenadas FIXAS. Nas duas
tentativas o mosaico de rádio que devia cair na tela caiu **na nuca** e depois **no rosto**. Cena que
compõe sobre footage precisa, no brief, do enquadramento E da estabilidade — travelling lateral move
o alvo da composição.

Agente-raiz: `.claude/agents/pesquisa-imagens.md` (régua de escolha de footage com pessoa).

### PESQ-71 · "O proxy não respondeu" pode ser o NOME resolvendo para a pilha errada — e a trava manda chamar gente que não tem o que fazer (10/ago/2026, `galaxia-arco-flecha`)

**O caso.** A caça de stock na VM parou com o laudo mais assustador que a ferramenta sabe emitir:
*"⛔ CAÇA RECUSADA — esta máquina é de NUVEM e o túnel residencial não está provado · o proxy
socks5://localhost:1080 não respondeu (túnel caiu ou porta errada)"*, seguido da receita
**"COMO DESTRAVAR — no Mac: `node infra/launchd/instalar.mjs com.top10.tunel-residencial`"**. Ler isso
e concluir *"o túnel caiu, preciso do Mateus"* é o movimento natural. Estava errado: o túnel estava
**de pé o tempo todo**, e o Mac publicava o batimento havia 9 segundos.

**A medição que separou as duas coisas.** Um `curl` pelo MESMO proxy devolveu na hora
`177.22.174.240` — o IP de casa. Então o proxy respondia. `ss -tln` mostrou a razão: o túnel escuta
nas duas pilhas, e a fila de accept do IPv6 estava com **Recv-Q 45** contra **2** na do IPv4 (várias
caças simultâneas de outras produções). Medição pareada, mesmo instante:
`127.0.0.1` → **3 de 3** respostas em 1,08s · `[::1]` → 1,07s, 1,68s e um **timeout de 20s**.
`localhost` resolve `::1` primeiro, o teste caiu na fila cheia, deu timeout, e o timeout virou
"não respondeu".

**A regra.** Antes de declarar túnel/proxy caído, **conecte por fora da ferramenta**: um `curl -x`
pelo mesmo endereço decide em 1 segundo. Se o curl passa e a ferramenta não, a falha é da
FERRAMENTA, não da infra. E em endereço de loopback use **`127.0.0.1`, nunca `localhost`** — nome
com duas pilhas é sorteio, e sob carga o sorteio tem lado ruim.

**Por que isto custa vídeo.** O falso negativo não devolve "tente de novo": ele veste a fantasia de
**trava humana** e manda subir no Mac um serviço que já está rodando. Trava humana inventada em cima
de defeito de software para a produção até alguém agir — e é o pior tipo de parada, porque parece
diagnóstico responsável. É a mesma família do `000` do curl que parecia site fora do ar e abria no
navegador: *não confunda "minha ferramenta não conseguiu" com "o mundo está quebrado"*.

**Conserto aplicado** (`scripts/stock/tunel.mjs`): o padrão da nuvem virou
`socks5://127.0.0.1:1080` e `localhost` que chegue pelo ambiente é normalizado para v4 — o Playwright
e o `curl` do conferidor passam a usar a mesma pilha determinística. Prova: `tunel-conferir.mjs`
rodou **5 vezes seguidas** e deu ✅ nas 5, onde antes recusava.

Agente-raiz: `.claude/agents/tecnico-stock.md` (diagnóstico de caça recusada).

### PESQ-72 · O gargalo é o CANO, não a conta — a trava serializa por plataforma e três caças se atropelam no mesmo túnel (10/ago/2026, `galaxia-arco-flecha`, 3ª recaça do `card04`)

**O caso.** A 3ª recaça do footage do `card04` gastou ~100 sondas de túnel e **75+ carregamentos de
página**, em 2 plataformas e 6 formulações de busca, e voltou **sem um arquivo**. Não foi cota, não
foi CAPTCHA, não foi vocabulário: foi **trânsito**. O diagnóstico literal do navegador era
`url=chrome-error://chromewebdata/`, `texto=170B`, `clips=0`, *"took too long to respond…
ERR_TIMED_OUT"*.

**O número que fecha o caso:** no mesmo instante, `Downloads/stock-hub` **não recebia um arquivo de
mídia havia mais de 3 horas** — de nenhuma das três produções que caçavam na VM. As três estavam
registrando falha de trânsito como **"0 resultados"**, que é a frase que faz um caçador concluir
*"o acervo não tem isso"* e desistir de um clipe que existe.

**A raiz é de granularidade.** A trava de stock serializa por **plataforma**
(`${BUCKET}/${plataforma}.json`), porque a premissa era *"o recurso disputado é a CONTA"*. Isso vale
quando o Shutterstock roda no Mac e o Envato na VM. **Não vale aqui:** as produções desta VM saem
todas pelo MESMO remote-forward SSH residencial. Shutterstock + Envato + a recaça "não se
atropelam" pela trava e se atropelam no cano — medido com **44 Chromes vivos** disputando um túnel.

Vazão medida no dia, pelo túnel: **194 KB/s** às 17:10, **273–463 KB/s** às 17:36, **0 B/s em cinco
amostras seguidas** às 17:37–17:39, e às 17:53 o TCP **nem estabelecia**. Direto, sem túnel: **68
MB/s**. A janela boa existe, dura ~30 s e vem separada por minutos de nada.

**O que fazer, em ordem:**
1. **Serializar as caças ENTRE produções** quando elas compartilham o túnel (trava global de cano),
   ou hospedar a caça no Mac, que é a ponta residencial e não precisa de túnel nenhum.
2. Antes de declarar *"a plataforma não tem"*, **exija a prova de trânsito**: `clips=0` só vale se a
   página carregou. `url=chrome-error://` e `texto=170B` são a página de erro do Chrome, não um
   resultado de busca. Screenshot chamado `plataforma-sem-resultados.png` que mostra o dinossauro do
   Chrome é a mesma mentira com outro nome.
3. Ao sondar um cano congestionado, **falhe rápido e amostre mais** (timeout de 35 s por página em
   vez de 180 s): com 180 s você amostra a janela 1× a cada 3 min e quase sempre cai no vazio.

**E o probe do túnel foi consertado junto.** `scripts/stock/tunel.mjs` fazia **uma** sonda
`curl --max-time 20`; com a fila de accept cheia ela estoura e o laudo sai como *"o proxy não
respondeu (túnel caiu ou porta errada)"*, seguido da receita de chamar o Mateus — falso negativo
vestido de TRAVA HUMANA, que é o pior tipo, porque para a produção até alguém agir. Agora são **três
tentativas** (o `--max-time` continua 20 s de propósito: baixá-lo reprovaria a conexão de 18,1 s que
eu medi prestes a completar). Prova: com o cano no mesmo estado, o `tunel-conferir.mjs` passou de
*"⛔ NÃO PODE CAÇAR"* para **"✅ PODE CAÇAR"**. É a [PESQ-71] sobrevivendo num segundo lugar — lá era
o nome resolvendo para IPv6, aqui é a sonda única.

Agente-raiz: `scripts/stock/tunel.mjs` (retry no probe) · `.claude/agents/tecnico-stock.md` (§ separe
FERRAMENTA de INFRA — agora com a terceira camada: **CANO**) · `.claude/agents/pesquisa-imagens.md`
(exigir prova de trânsito antes de concluir que o acervo não tem).

---

### PESQ-73 · Vídeo pré-editado tem DOIS "masters", e os "planos N" do espelho são do OUTRO (10/ago/2026, `comercio-garimpo-meteoritos` do `planeta-em-meteorito`)

**O caso.** Uma cena de footage travada em `FALTA`. O diário da sessão anterior tinha o diagnóstico
certo — *"não precisa de caça: o master tem o registro (planos 15,17)"* — e o caminho **errado**:
mandava extrair de `_media/_master-decupado.mp4`. Baixei os 8,97 GB, extraí a janela 58,13→71,50 do
relógio do espelho, olhei os frames: **o Bôco falando em fundo preto de estúdio**, os três frames.
Nenhum comércio, nenhum deserto.

**A causa.** Um vídeo pré-editado tem dois arquivos que a conversa chama de "o master":

| arquivo | o que é |
|---|---|
| `_media/_master-decupado.mp4` | a **gravação do apresentador**, decupada — talking-head, fundo preto, do começo ao fim |
| `_master.mp4` | o **master EDITADO da equipe** — B-roll, footage real, CGI, os 113 planos |

E os **"planos N"** que o espelho cita em `motivo` são a numeração de `_analise/segmentos.json`, que
decupa **o editado**. No decupado aquele índice não existe; o que existe é o mesmo *instante de fala*,
porque os dois relógios foram sincronizados pela narração. Daí a armadilha: **o arquivo errado devolve
vídeo válido, no timestamp certo, com a fala certa** — e sem nada do que a cena precisa. Só o frame
olhado separa os dois.

**A regra.** Antes de extrair mídia "do master", abra `_analise/segmentos.json` e leia o plano pelo
`i`: ele traz `inSec`/`outSec`, `tipo` (`apresentador` | `footage` | `imagem`) e `veredito`. Se o
`tipo` do plano é `footage`, a mídia está no **editado** — e o `inSec` a usar é o DO PLANO, não o
`inSec` da cena do espelho. Aqui a diferença era decisiva: a cena começa em 58,13 s, mas o plano 14
(58,0→61,1) é apresentador; o footage real são os planos **15+16+17 = 61,1→71,5**.

**O atalho que custa 19 MB em vez de 7 GB.** `_analise/proxy.mp4` é o master editado inteiro em
854×480. Baixe o proxy, tire frames nos instantes do plano e CONFIRME o conteúdo antes de puxar o
master 4K. Foi assim que a rua do vilarejo (62,5 s) e o negociante com o meteorito na mão (70 s)
apareceram — em segundos, antes de gastar banda com o arquivo grande.

**E declare o que veio queimado.** Footage tirado do master da equipe traz o **selo "Top" gravado no
canto superior direito**. Não sai por CSS: quem desenhar tem de empurrá-lo fora do quadro por
enquadramento ou cobri-lo. Registre isso no `_PROCEDENCIA.json` da pasta — a cena é desenhada por
outro agente, dias depois, que nunca viu o frame.

**Agente-raiz:** o handoff da estação ARTE/PESQUISA (a nota que aponta o arquivo) e
`_PROCEDENCIA.json` como o lugar onde o aviso sobrevive.


### PESQ-74 · Procedência escrita no relatório do AGENTE não é procedência — o gate lê só o `_PROCEDENCIA.json`, e 120 arquivos reprovaram com a fonte a dois diretórios de distância (10/ago/2026, estação QC do `mamute-de-volta`)

O `qc-procedencia` exige prova POSITIVA e a lê de um lugar só: o `_PROCEDENCIA.json` da pasta do
arquivo. Os agentes `pesquisa-*` registram fonte, URL, licença, autor e crédito de cada peça — no
SEU relatório (`_pesquisa/footage.json`, `fotos.json`, `logos.json`, `pessoas.json`, `dados.json`),
que nenhum gate abre.

Medido no `mamute-de-volta`: **120 arquivos "SEM PROVA"** e o vídeo REPROVADO, com a procedência
inteira escrita em disco desde 03/ago. Nenhuma pasta de `_media/` tinha `_PROCEDENCIA.json`; todas
as fontes estavam nos JSONs de pesquisa, com URL e licença por arquivo.

O conserto NÃO é recaçar. Recaçar aqui queima cota diária de acervo assinado — que é finita — para
suprir uma lacuna de REGISTRO, não de mídia. `scripts/procedencia-declarar.mjs` (escrito aqui)
transcreve dos JSONs de pesquisa para o `_PROCEDENCIA.json` de cada pasta: 144 entradas em 5 pastas,
e o gate saltou de 13 para 76 PROVADAS. Ele varre recursivamente e reconhece o par (caminho de
arquivo, campos de procedência) onde estiver, com herança da fonte declarada no nível da cena — para
não morrer quando um agente muda o aninhamento.

**A régua: prova tem de estar onde o VERIFICADOR olha.** Escrever a fonte no relatório do próprio
agente é anotação de trabalho; o gate não é obrigado a conhecer o formato de cinco agentes, e o
arquivo canônico existe justamente para ser o contrato entre quem baixa e quem verifica. Todo agente
que traz mídia escreve os DOIS lados: o seu relatório (rico, para humano) e o `_PROCEDENCIA.json`
(mínimo, para gate).

⚠️ E a transcrição NÃO maquia nada — é o ponto dela. Copia a `fonte` como o agente a escreveu,
inclusive quando é PROIBIDA: no `mamute-de-volta` isso moveu 33 arquivos de "sem prova" para
"PROIBIDA", e o gate passou a nomear cada um com a cena em que está no ar (`↳ NO AR em
graphics/…`). Foi assim que "120 arquivos sem declaração" virou uma lista de recaça acionável de 17
cenas. *Declarar a fonte proibida é o objetivo, não o efeito colateral: o que não está declarado não
está reprovado — está invisível.*

Duas isenções do gate erravam pelo NOME DA PASTA e foram corrigidas junto, porque produziam o mesmo
falso "sem prova": `docs/` não casava com `documentos?|clippings?` (8 clippings `*-prova.png` cuja
fonte está estampada na própria imagem) e `_bframes-original/` não casava com `_fps-original` (7
backups pré-normalização do MESMO clipe já conferido na pasta irmã — o gate reclamava duas vezes do
mesmo arquivo). Com as duas, os "sem prova" caíram de 24 para 9, e os 9 são fotos alternativas que
nenhuma cena usa. *Regra de isenção que não casa com o nome usado na prática é uma isenção que não
existe.*

### PESQ-75 · A proibição de acervo admite exceção do DONO — por arquivo, datada, e visível no laudo (10/ago/2026, `senna`)

A [[PESQ-12]] proíbe Pexels/Pixabay/Coverr por identidade, e a [[PESQ-69]] fechou a porta pela qual
o agente se autorizava a driblá-la. Faltava o degrau oposto, e ele apareceu inteiro num caso real:
**o dono olhar um item proibido e decidir que ele fica.**

Auditando a procedência dos 24 projetos, achei dois footages de box e pitlane de F1 no `senna`
(cena `s27`, vídeo ainda em `refazendo`) vindos do Pexels. Levei o achado com o conserto proposto —
recaçar nos assinados. Mateus: *"mantenha os dois do Pexels, pois a F1 realmente é difícil de
conseguir imagens."* Escassez real de nicho, verificável, e a decisão é dele.

**O problema que isso cria, se nada mudar:** o gate passaria a reprovar o `senna` para sempre por
um item que o dono examinou e liberou. Gate que grita o que já foi decidido é alarme falso, e
alarme falso ensina a ignorar o gate — da próxima vez que ele acertar, ninguém olha.
O desfecho previsível é alguém comentar a checagem, e aí a porta abre inteira.

**A régua:** *regra de identidade é o padrão, não uma parede — mas a exceção é um ATO REGISTRADO,
nunca um silêncio.* Ela vale se, e só se, tiver **quem autorizou, quando e por quê**; se morar
junto do item (não numa lista central que ninguém revisa); se for por **arquivo**, jamais por
padrão, pasta ou acervo — liberar "Pexels" abre a porta toda, liberar dois clipes de F1 libera dois
clipes de F1; e se **aparecer sempre no laudo**. Exceção que não se vê é indistinguível de furo, e
some da vista de quem precisaria revogá-la quando o motivo deixar de valer.

Feito: campo `excecao_autorizada` (`por` · `em` · `motivo`) no `_PROCEDENCIA.json` do próprio
arquivo; `qc-procedencia.mjs` a lê, tira o item de PROIBIDA, conta em coluna própria (`exceç`) e
imprime autor, data e razão. **Exceção incompleta não vale** — falta um dos três campos e o arquivo
volta a reprovar, que é o que impede o campo de virar carimbo automático. Nenhum nome de arquivo
foi cravado no código. Provado nos dois lados: exceção completa → PASS listado; sem a data → segue
reprovando.

**Convive com a [[PESQ-74]], e isto foi CONFERIDO no código, não suposto.** Aquela lei manda
transcrever a procedência dos JSONs de pesquisa para o `_PROCEDENCIA.json` via
`procedencia-declarar.mjs` — que escreve no mesmo arquivo onde a exceção mora. Ele funde com
`if (!fundido[nome])`: só acrescenta chave que ainda não existe, e portanto **não sobrescreve
entrada com exceção já declarada**. As duas peças nasceram no mesmo dia, em máquinas diferentes,
sem uma saber da outra; a fusão conservadora é o que as fez coexistir. *Antes de escrever num
arquivo que outra ferramenta também escreve, abra a outra ferramenta.*

⚠️ **O que esta lei NÃO decide:** se material de agência baixado FORA da assinatura (o caso dos 43
clipes de YouTube do `ceuta`) é aceitável como método. Aquele vídeo foi publicado por decisão do
Mateus em 10/ago, mas decisão sobre UM vídeo não é régua — e enquanto a régua não existir, o gate
segue tratando "declarado" como prova, que é confundir rastreabilidade com legitimidade.
### PESQ-76 · O laudo do QC RECOMENDA arquivo — e recomendação não passa por gate nenhum: a lente `camadas` do `qc-visual` mandou preencher uma cena com dois clipes Pexels (11/ago/2026, `s107` do `mamute-de-volta`)

> ⚠️ **Esta lei nasceu numerada como PESQ-75 na `estudio-top10` em 11/ago/2026** e foi
> renumerada para 76 no merge do mesmo dia: o Mac havia destilado OUTRA PESQ-75 em 10/ago
> (a exceção do dono, logo acima), e as duas máquinas destilaram em paralelo sem saber uma
> da outra. A numeração desta casa é cronológica, então a mais nova cedeu. Commits anteriores
> a este merge que citem "PESQ-75" sobre o laudo do QC referem-se a ESTA lei.

A lente `camadas` é de oportunidade e manda apontar **material nomeado**: "o arquivo baixado que não
entrou". A instrução está certa e é o que dá utilidade à lente — mas ela tem um ponto cego, porque
**um arquivo pode não ter entrado justamente por ser proibido**.

Medido na `s107-pergunta-do-dinheiro`: o laudo sugeria preencher o vazio de US$ 942 BI com
`s40-elefante-asiatico-b-tromba-close.mp4` e `s40-elefante-asiatico-e-mata-aberta.mp4`, "dois clipes
reais BAIXADOS e com ZERO uso em qualquer cena do vídeo". Os dois são **Pexels**, declarados como
tal no `_PROCEDENCIA.json` da própria pasta. E o argumento que o laudo usou para tranquilizar —
*"as duas licenças não exigem atribuição, então sem crédito"* — é a **assinatura da fonte gratuita**,
apresentada como vantagem.

O perigo não é o laudo estar errado: é **onde** ele está. O `qc-procedencia` varre HTML e disco, não
laudo. A recomendação atravessa a recaça inteira sem ser tocada por gate nenhum, e chega à estação de
arte como ordem de serviço — reintroduzindo, depois do conserto, exatamente a mídia que a recaça
tirou. Quem lê o laudo é um agente de arte, que não tem motivo para desconfiar de um arquivo que o
QC nomeou.

**A régua: antes de nomear um arquivo de mídia num laudo, abra o `_PROCEDENCIA.json` da pasta dele.**
Vale para toda lente que recomenda material (`camadas`, `cobertura`, `cadência`), e o custo é uma
leitura de JSON. Se for de fonte proibida, a lente ainda tem algo a dizer — a *ideia* costuma ser boa
—, mas diga-a sem o arquivo: "existe um vazio de 2,7 s que pede uma terceira camada" é acionável;
"use o clipe X" com X proibido é uma armadilha com a assinatura do QC.

E o corolário, que é o que torna isto caro: **"não exige atribuição" nunca é argumento a favor de um
arquivo.** É o traço que distingue banco gratuito de acervo assinado. Quando essa frase aparecer
justificando uma escolha de mídia, ela está provando o contrário do que pretende.

*Consertado no ato:* o aviso foi embutido **dentro da lente `camadas` do próprio laudo** da `s107`,
não só num markdown de estação — porque o agente de arte lê o laudo, e um documento paralelo que ele
não abre não protege nada.

### PESQ-77 · Trocar o ARQUIVO não troca o TEXTO que o descreve — e o gate de procedência não lê cabeçalho (11/ago/2026, recaça do `mamute-de-volta`)

A recaça de mídia proibida tem duas metades, e só uma delas é automática. O
`aplicar-substituicao-midia.mjs` troca o `src=`, remede resolução/fps/duração com ffprobe e substitui a
palavra da fonte proibida — **mas só na LINHA que contém o caminho novo**, porque é ali que mora a
linha de metadados `3840×2160 · 29,97 fps · 14,51 s · Pexels`.

Metade dos cabeçalhos desta casa não escreve assim. Escreve a atribuição na linha **seguinte**:

```
    · vídeo ../_media/footage/card-04-artico-degelo-alt.mp4  3840×2160 · 29,97 fps · 20,79 s
        Pexels · Cristian Manieri · Pexels License (sem atribuição exigida)
```

Medido no `mamute-de-volta`: **12 menções na mesma linha** (trocadas) contra **20 em linha separada**
(intocadas), espalhadas por 17 cenas.

O que torna isso perigoso é a combinação com o gate: **o `qc-procedencia` lê `_PROCEDENCIA.json` e
`fontes_usadas`, nunca o cabeçalho do HTML.** Então, depois de uma recaça bem-sucedida, o gate fica
**verde** e o cabeçalho continua afirmando que um clipe Shutterstock é Pexels. Ninguém é avisado,
porque nada está quebrado — só falso.

E o dano não é cosmético. Essas linhas quase sempre trazem `credito_exigido=false` / *"atribuição NÃO
exigida"*, que é a assinatura da fonte gratuita. O próximo agente que abrir o HTML lê isso como
instrução, e a cena vai ao ar **sem o crédito que o acervo assinado exige** — a violação volta pela
porta da documentação, depois de a mídia já ter sido consertada.

**A régua: depois de aplicar qualquer mapa de substituição, varra os HTMLs tocados por
`/Pexels|Pixabay|Coverr/` em linhas SEM `src=` e reescreva à mão.** O que sobrar tem de ser
conscientemente uma das duas coisas: atribuição correta do arquivo novo, ou comentário de **descarte**
(*"recusei o clipe X porque…"*) — que é registro pago e deve ficar intacto.

*Consertado no ato:* o `aplicar-substituicao-midia.mjs` passou a **listar essas linhas no fim da
aplicação**, com arquivo e número de linha. Deliberadamente ele **não** as reescreve sozinho: menção a
fonte proibida também aparece em comentário de descarte, e sobrescrevê-la apagaria o motivo da recusa.
Quem decide como reescrever é editorial; o dever da ferramenta é não deixar passar em silêncio.

---

**PESQ-78.** A CADEIA DA PROCEDÊNCIA SE ROMPE EM QUATRO PONTOS, E TODOS FALHAM EM SILÊNCIO — O CRÉDITO
ACABA SAINDO DO NOME DO ARQUIVO (medido em 11/ago/2026 no `quasares-primordiais`, estação ARTE).
A cena `s94` creditou **"Foto: NAOJ"** sob o card do Subaru e **nada** sob o do Keck. O agente não
inventou: era o único dado que ele tinha, porque `s95-subaru-telescope-maunakea-naoj.jpg` traz a sigla
no nome e `s95-keck-cupulas-gemeas-maunakea.jpg` não traz. Os quatro elos, na ordem em que quebram:
   • **O transcritor apagava o provedor.** `procedencia-declarar.mjs` fazia `String(fonte)` — e a `fonte`
     que os agentes de pesquisa escrevem é um OBJETO (`{provedor, pagina_url, licenca, credito_na_tela}`).
     O resultado gravado era `"[object Object]"`. Medido: **66 de 66** entradas escritas no dia anterior
     eram esse texto, 57 delas em `_dados` (as citações de fonte que vão à tela).
   • **O gate aceitava o placeholder como PROVA.** `qc-procedencia.mjs` testava `typeof fonte === "string"
     && length >= 3`; `"[object Object]"` tem 15 caracteres e passava. O campo que o gate existe para
     proteger era exatamente o campo corrompido — e o arquivo saía da lista de pendências.
   • **Havia um registro ÓRFÃO ao lado, completo.** A pesquisa também grava `_creditos.json` na própria
     pasta da mídia, com `fonte`, `pagina`, `licenca` e `credito_na_tela` — o texto pronto para a tela.
     Ninguém lia: o transcritor varria só `_pesquisa/*.json` e o gate só reconhece `_PROCEDENCIA.json`.
     *Registro que existe e ninguém lê é pior que ausência: faz o dono do dado achar que cumpriu.*
   • **O dossiê da cena não levava procedência nenhuma.** `_brief-arte.mjs` listava caminho + tamanho e
     pulava o `_PROCEDENCIA.json` de propósito (não é mídia). O Fable recebia o arquivo sem fonte, sem
     licença e sem crédito — e o nome do arquivo era a única pista na mesa.
   **Consertado nos quatro pontos** (tudo determinístico, zero inferência): o transcritor achata a `fonte`
   preservando o `provedor` e puxa url/licença/crédito de DENTRO do objeto; ele passou a ler os
   `_creditos.json`; entrada cujo `fonte` é placeholder deixa de bloquear a própria re-transcrição (é
   CURADA, não preservada); o gate trata placeholder como SEM PROVA; e o brief passa a imprimir
   `crédito p/ tela · fonte · licença · url` por arquivo — ou, quando não há registro, a ordem explícita
   de **não deduzir do nome e relatar a pendência**. Efeito medido no mesmo vídeo: 66 entradas curadas,
   5 arquivos recuperados dos sidecars órfãos, 40 → 35 sem prova.
   **O que esta lei NÃO afirma:** os 35 restantes não são recuperáveis por ferramenta — nenhum aparece em
   JSON de pesquisa algum (varredura literal: 0/40). Para esses a fonte precisa ser reidentificada por
   quem tem a URL, e inventá-la é o defeito, não o conserto.

---

**PESQ-79.** O CENSO DE NEEDS DÁ 100% COM TODAS AS ÂNCORAS MORTAS — SÃO DUAS PERGUNTAS, E A ESTAÇÃO
SÓ FAZIA UMA (medido em 11/ago/2026 no `especies-humanas`, estação PESQUISA).
A recaça de 08/ago tirou o Pexels do projeto e fez isso BEM: caçou 15 substitutos Storyblocks/Envato,
escreveu o `MAPA-SUBSTITUICAO.json` com piso de seek e folga medidos, e o QC re-apontou os 34 `src=`
dos HTMLs. A mídia proibida saiu do ar de verdade. O que ninguém fechou foram os REGISTROS que dirigem
o trabalho seguinte, e eles ficaram três dias de pé:
   • O `conceito-visual.json` seguiu mandando desenhar sobre **13 caminhos apagados** — mais uma frase
     de licença dizendo "footage Pexels não exige crédito", instrução de fonte VETADA viva no arquivo
     que dirige cada cena.
   • A própria `pauta-imagens.json` seguiu creditando **Pexels em 20 dos 32 itens** e **não listava
     nenhum** dos 15 clipes pagos que entraram no lugar: 4,6 GB de acervo assinado invisíveis no
     inventário. Quem lesse "o que já temos" recaçaria do zero e queimaria cota de Shutterstock, que é
     finita — o inverso exato do que o registro existe para evitar.
   • O de-para foi entregue rotulado `instrucoes_para_a_arte` ("a pesquisa não edita HTML"). Verdade,
     e insuficiente: o campo nomeia UM destinatário para uma correção que tinha TRÊS, e os outros dois
     não têm dono declarado. **Substituir mídia é operação de quatro lugares** — arquivo, HTML,
     conceito-visual e pauta —, e três deles falham em silêncio.
   **Por que nenhum gate acusou:** o `qc-procedencia` deu PASS o tempo todo, e corretamente — ele conta
   arquivo no disco e referência VIVA em cena, e os `pexels-*` não estavam em nenhum dos dois. Ele
   varre `_pesquisa/*.json` só pela chave `fontes_usadas`; a pauta guarda em `itens`, então passou ao
   largo. *Um projeto pode estar limpo na tela e sujo no papel — e é o papel que dirige o próximo ciclo.*
   **O erro de método, que é o que importa:** a passada de 09/ago mediu o DISCO em vez de acreditar na
   lista ([PESQ-52], o método certo) e concluiu "a estação já estava pronta" — 0 needs de geo pendentes,
   0 de dados, mídia em todas as pastas. Tudo verdade. E o `qc-direcao-real` reprovava havia três dias
   com **17 âncoras apontando arquivo que não existe**, porque a estação nunca o rodou. "A mídia existe?"
   e "o que aponta para ela aponta certo?" são perguntas diferentes, e a segunda não se responde olhando
   a pasta: um censo de needs 100% coberto é compatível com 100% das âncoras mortas.
   **A estação fecha rodando os dois**, e o segundo é o que reprova:
   ```bash
   node scripts/qc-midia-real.mjs <proj>       # a mídia que a cena pediu existe?
   node scripts/qc-direcao-real.mjs <proj>     # o que aponta para ela ainda aponta certo?
   ```
   **O de-para se reconstrói de duas pontas que se conferem**, e vale mesmo dias depois: o
   `MAPA-SUBSTITUICAO.json` da pesquisa e o `src=` dos HTMLs já renderizados. Onde as duas concordam a
   troca é mecânica; onde o mapa cala, o HTML decide (foi assim que 4 pares sem registro saíram — um
   deles com DUAS gerações de substituição, `pexels-* → multidao-*.mp4` renomeado → Storyblocks). E
   onde o HTML tem menos vídeos que o conceito, o plano foi CORTADO: a menção sai, não se inventa
   substituto para ela.

---

**PESQ-80.** A PASTA DA CENA TEM UM TERCEIRO LAYOUT — E ELE FEZ 30 ARQUIVOS DE STOCK PAGO LEREM COMO
DISCO VAZIO, DENTRO DO SCRIPT QUE CITA A [PESQ-52] (medido em 11/ago/2026 no `especies-humanas`,
estação REGÊNCIA DE IMAGEM).
O `regencia-insumo.mjs` imprimiu **"cenas com mídia no disco: 0"** e gravou `midia_no_disco: []` nas
154 cenas. O disco tinha, no mesmo instante, **30 arquivos** de Shutterstock/Envato/Wikimedia em 10
pastas de cena — os leões da `s06`, a escavação de Tigray da `s15`, o Himalaia da `s29`, as multidões
de Lisboa/Nova Iorque/Xangai da `s40`, Lucy, a falange de Denisova. Nada disso havia sido apagado.
   **Os três layouts, e o script só conhecia dois:**
   • `_media/<id-inteiro-da-cena>/arquivo.mp4` — casado por nome de DIRETÓRIO;
   • `_media/footage/s28-filhote.mp4` — casado por prefixo no nome do ARQUIVO ([PESQ-52], 10/ago);
   • `_media/footage/s06/male-lion-…-SBV-352853710-4K.mp4` — **a pasta é o PREFIXO CURTO** (`s06`, não
     `s06-especiehumanacomoleaoeti`) **e os arquivos guardam o nome do banco**. Este é o layout que a
     caça escreve quando entrega VÁRIOS planos para a mesma cena, ou seja exatamente quando há mais
     mídia paga em jogo. As duas varreduras existentes passavam por ele sem tocá-lo: a de pasta
     comparava com o id inteiro, a de arquivo exigia o prefixo no nome do arquivo.
   **Por que esta é a pior das três aparições da mesma falha:** os 30 arquivos não desapareciam do
   JSON — eles caíam no `acervo_compartilhado`, sob a nota *"nomeada por ASSUNTO e não por cena"*.
   Essa frase é FALSA aqui (eles são nomeados por cena, na pasta) e é a frase que autoriza o próximo
   agente a tratá-los como material solto. Somada ao `midia_no_disco: []` por cena, ela diz ao regente
   duas coisas erradas ao mesmo tempo: *esta cena não tem nada* e *o que existe não é de ninguém*. A
   consequência é uma ordem de recaça sobre stock já comprado, queimando cota diária FINITA.
   *Ausência declarada por um script é lida como medição, não como falha de varredura.*
   **Consertado** em `scripts/regencia-insumo.mjs`: o diretório passa a resolver por id inteiro **ou**
   prefixo curto, com três travas que a ampliação exigiu —
   (a) o filtro de LIXO passa a valer na varredura de PASTA também, senão `_fps-original/s15/` (o
   backup pré-REND-47) entra como se fosse o plano da cena;
   (b) prefixo AMBÍGUO (duas cenas vivas com o mesmo `sNN`) **não** se atribui: fica no acervo
   compartilhado, oferecido a todas — atribuir à cena errada é pior que não atribuir a nenhuma;
   (c) o que a varredura de pasta atribuiu sai do acervo compartilhado, para o mesmo arquivo não ser
   contado como dos dois lados.
   Medido depois: **9 cenas · 25 arquivos**, `_fps-original` fora, e as 2 fotos de *Homo erectus* da
   `s10` — cena que morreu no re-espelho — corretamente no acervo compartilhado, porque prefixo que
   não aponta para cena VIVA não tem dono.
   **A régua para a próxima vez:** `midia_no_disco: []` em TODAS as cenas de um projeto que tem
   `_media/` populado é sintoma de varredura, não de ausência. O teste custa um comando e não depende
   de saber o layout: `find out/<proj>/_media -type f | wc -l` contra o total que o insumo atribuiu.
   Se o primeiro número é grande e o segundo é zero, o defeito é do script.

---

**PESQ-81.** O INSUMO OFERECEU O MASTER DE 6 GB COMO FOOTAGE DE CENA — E A NOTA DIZIA "QUALQUER CENA
PODE USÁ-LA" (11/ago/2026, `especies-humanas`, estação REGÊNCIA).
O `regencia-insumo.mjs` varre `out/<proj>/_media/`, atribui cada arquivo à cena que o batiza, e o que
não casa com cena nenhuma cai no `acervo_compartilhado` — cuja nota, escrita no próprio JSON, é
*"Mídia REAL já paga que NÃO está batizada por uma cena viva. QUALQUER cena pode usá-la — não peça
recaça do que está aqui."* Só que `_media/_master-decupado.mp4` — **o Bôco decupado inteiro, 6,04 GB,
infraestrutura da finalização** — mora na raiz de `_media/` como arquivo plano, não casa com cena
nenhuma, e por isso entrava na lista. O regente de imagem, que é quem lê esse campo para decidir o que
já existe antes de pedir caça, recebia o vídeo inteiro apresentado como um clipe disponível.
   **Por que nenhum gate pegaria:** o arquivo EXISTE, é mídia por extensão, e uma âncora apontando para
ele RESOLVE. `qc-direcao-real` testa se o destino existe ([PESQ-52]/[PESQ-79]) — e existe. `qc-procedencia`
pede prova de origem — e ela está no projeto. Todo gate desta casa mede *se a mídia está lá*; nenhum
mede *se aquilo é mídia de cena*. O defeito só apareceria na tela, como o vídeo inteiro rodando dentro
de uma cena de 5 s.
   **A regra:** o filtro de LIXO de qualquer varredura de `_media/` tem de excluir a INFRAESTRUTURA, não
só os backups. Backup (`_fps-original`, `_bframes-original`, `_bkp`) já estava lá; master, não. O
critério que generaliza é a raiz: **arquivo na raiz de `_media/` com prefixo `_` é infraestrutura da
produção, nunca plano de cena.**
   **CONSERTO (feito, e é uma linha):** `scripts/regencia-insumo.mjs`, o regex `LIXO` ganhou o ramo
`(^|\/)_master-[^/]*$`. Medido antes/depois com diff estrutural dos dois JSONs: acervo compartilhado
9 → 8 arquivos, e as **154 cenas saíram byte-idênticas** — a correção não tocou em mais nada.
   **O parentesco que fecha o par:** a [PESQ-80] nasceu do mesmo script varrendo de MENOS
(`midia_no_disco: []` com 30 arquivos pagos no disco, lido como prova de ausência e mandando recaçar o
que já estava comprado). Esta nasce dele varrendo de MAIS. *Uma varredura de acervo erra nos dois
sentidos, e os dois custam: a que vê pouco manda comprar de novo, a que vê demais manda usar o que não
é para usar.* Contar arquivo não basta — o inventário tem de dizer o que cada arquivo É.

---

**PESQ-82.** O GATE DA ANCHOVETA LIA METADE DO INVENTÁRIO E MANDAVA RECOMPRAR O QUE JÁ ERA NOSSO
(11/ago/2026, `especies-humanas`, estação REGÊNCIA).
O `qc-regencia-nomeados.mjs` é o teste da anchoveta por máquina: extrai os nomes próprios da narração
e cobra que cada um apareça em algum beat de tipo REAL. Para não acusar o que já está resolvido, ele
monta um `noDisco` com a mídia que a pesquisa baixou — **e montava lendo só `insumo.cenas[].midia_no_disco`**.
Só que o insumo guarda a mídia em DOIS campos: esse, que é a mídia BATIZADA por uma cena, e o
`acervo_compartilhado.arquivos`, que é a que não casa com cena nenhuma e que o próprio insumo oferece
a todas — a nota do campo diz, literalmente, *"QUALQUER cena pode usá-la — não peça recaça do que
está aqui"*. O gate não lia a segunda metade, e por isso pedia exatamente a recaça que ela proíbe.
   **Medido:** dos 30 nomes próprios da narração, o gate dava 11 cobertos e 19 órfãos. Quatro dos
"órfãos" eram **Svante Pääbo, Qiaomei Fu, Prêmio Nobel e Universidade do Arizona**, com os quatro
arquivos pagos e presentes em `_media/pessoa/` e `_media/logo/`. Depois do conserto: **15 cobertos**,
e os quatro saíram da lista.
   **Por que isso não é ruído barato:** a saída desta estação é uma ORDEM DE COMPRA — ela gasta cota de
plataforma, que é finita, e horas de caça. E o dano maior é de confiança: uma lista com falso positivo
óbvio faz a estação seguinte desconfiar da lista inteira e derrubar junto as pendências verdadeiras
([PESQ-52]). *Um gate que acusa demais é desarmado pelo leitor, e aí ele para de proteger do que
acusava certo.*
   **CONSERTO (feito):** `scripts/qc-regencia-nomeados.mjs` passa a concatenar os dois campos no
`noDisco`.
   **A irmã, e as duas juntas dizem a regra:** a [PESQ-81] nasceu no mesmo dia do mesmo par de arquivos,
pelo defeito espelhado — o insumo varrendo de MAIS e oferecendo o master de 6 GB como footage de cena.
Uma lê de menos e manda comprar o que já existe; a outra vê demais e manda usar o que não é para usar.
**Quando o inventário mora em mais de um campo, quem o consome tem de ler todos — e quem o escreve tem
de dizer o que cada campo É.**

**PESQ-83.** O PASSE DE ÂNCORAS SÓ ENXERGAVA IDS QUE COMEÇAM COM `s` — E NUM VÍDEO INTEIRO EM `n` ELE
FICOU CEGO, DIZENDO "FALTA" SOBRE MÍDIA PAGA E VIVA NO DISCO (12/ago/2026, `especies-humanas`,
estação ARTE).
O `aplicar-ancoras-pesquisa.mjs` existe para uma coisa só: a direção de arte roda antes da pesquisa,
o `conceito-visual.json` nasce cheio de `midia_ancora: "FALTA — …"`, a pesquisa depois enche o disco
e **ninguém volta para avisar o conceito**. O passe é quem volta. Ele casa arquivo→cena pelo id no
caminho — e casava com `/^s\d+[a-z]?/`, com a letra **cravada no literal**, em cinco lugares do
arquivo. Este vídeo tem 129 das 154 cenas com id `nNNN-` (o vocabulário do espelho que nasce da
NARRAÇÃO, não do montador). Resultado: nenhum arquivo casou com nenhuma cena, em nenhum dos cinco
pontos.
   **Medido:** `0 promovidas · 18 seguem FALTA`, com `_media/foto/n017/` guardando **8 fotos de crânio
de museu**, `_media/foto/n021/` **6 de ferramenta musteriense**, `n022` a reconstrução do neandertal e
`_media/footage/n024/` um aéreo 4K de **530 MB** — todos pagos, todos vivos, todos em pastas com o
nome exato da cena que os pedia. Depois do conserto (`[sn]` nos cinco pontos): **4 promovidas, 14
seguem FALTA** — e as 14 são falta de verdade.
   **Por que é pior que uma promoção perdida:** o passe não erra o alvo, ele fica **cego** — e cego
ele diz `FALTA`. `FALTA` é a frase que manda o editor-de-arte desenhar por cima do vazio, e o Fable é
a cota mais escassa do estúdio. O defeito não gasta a mídia à toa: gasta a mídia à toa **e** o
desenho que a substituiu, e o vídeo sai sem o registro real que já estava comprado.
   **CONSERTO (feito):** `scripts/aplicar-ancoras-pesquisa.mjs`, cinco regexes de `s` para `[sn]` —
`idDaString`, o reconhecedor de cena dos relatórios, o `registra`, o casador de segmento de caminho,
e os dois da leitura de falta declarada. Consertar um só deixa o passe meio-cego, que é pior de
diagnosticar que cego inteiro.
   **A trava de tabela que veio junto:** a varredura ignorava `_snapshot|_bkp|_backup|arquivo-morto` e
**não** `_fps-original` — que não é backup inofensivo, é o footage ANTES da normalização [REND-47]
(30 fps + all-intra), guardado de propósito, com o mesmo nome do bom. A âncora da `n024` promoveu o
`.mov` defeituoso ao lado do `.mp4` normalizado, e nada no texto dizia qual era qual. Entrou na lista.
   **A família, e o que ela ensina:** [PESQ-80] (a pasta da cena tem um terceiro layout), [PESQ-81]
(varreu de mais e ofereceu o master de 6 GB), [PESQ-82] (leu metade do inventário). Quatro leis, quatro
scripts diferentes, **um só defeito**: quem casa arquivo com cena escreveu a convenção de nome à mão
e a convenção mudou embaixo dele. *Régua de id não se escreve em literal espalhado por cinco linhas —
e quando o vocabulário de id ganha uma família nova, o primeiro vídeo dela é o que descobre todos os
lugares onde a antiga estava cravada.*

---

**PESQ-84.** ASPAS DE TRANSCRIÇÃO NÃO SÃO ASPAS DE CITAÇÃO — a pontuação do ASR é *inferida*, e ela
inventa atribuição.
   **Medido (`a-guerra-da-ucrania-deixou`, 12/ago/2026, cena `s62-yurii-ihnat`):** o `words-final.json`
devolve a fala gravada como `…resumiu o problema depois daquela noite: "Sistemas nós temos o suficiente.
O que a gente precisa é de um fornecimento constante de mísseis. O lançador está lá, parado, esperando
munição".` — **três** frases dentro de um par de aspas. O ROTEIRO (linha 48) fecha as aspas depois de
`mísseis"`, e *"O lançador está lá, parado, esperando munição"* é frase **do narrador**. O Scribe não
ouviu aspas: ele pontuou.
   **O estrago, e onde ele ia parar:** o montador leu o `words` e ampliou a citação no espelho — a `tese`
listava as duas frases como `verbatim` e o **título da cena virou `Yurii Ihnat: 'o lançador está lá,
parado'`**. Como o modo é `citacao` e a cena grifa progressivamente o verbatim, o vídeo iria ao ar
atribuindo a uma pessoa real, nomeada e viva, uma frase que **nenhuma fonte tem** — o `pesquisa-documentos`
abriu a entrevista e o que Ihnat disse foi `"We have enough systems, but what we need is a steady supply
of missiles."`, e só. Citação fabricada é o dano que não tem conserto depois de publicado.
   **Por que passa por todos os gates:** não é erro de tempo, de layout, de colisão nem de procedência.
`qc-espelho-fala` dá PASS (a cena acontece no instante certo), o contrato do espelho dá válido, e o
word-lock casa — porque o texto da tela **bate com a fala**. O que ninguém compara é *onde a aspa fecha*.
   **CONSERTO (feito):** título e `tese` da `s62` corrigidos no espelho, com a instrução negativa junto
(`NÃO aspar, NÃO pôr o nome ao lado, NÃO grifar como verbatim`); e o agente `montador` passou a ser
obrigado a abrir o roteiro em `knowledge/roteiros/<slug>.md` antes de escrever qualquer cena `citacao`.
   **A regra:** quem decide o que está DENTRO das aspas é o roteiro (e, na dúvida, a fonte primária) —
nunca a transcrição. *A fala manda no conteúdo; a pontuação dela não manda em nada.* Vale para aspas,
travessão de diálogo e dois-pontos: toda marca que ATRIBUI é inferência do ASR.

---

## [PESQ-85] Timeout externo MENOR que a espera na trava = a caça sempre perde a fila

**Medido (`mamute-de-volta`, 12/ago/2026, recaça de procedência):** disparei quatro buscas no
Shutterstock com `STOCK_TRAVA_ESPERA_S=2400` (esperar 40 min pela vez) dentro de `timeout 900`
(matar aos 15). O baixador fez a coisa certa — imprimiu `⏳ shutterstock ocupada por
estudio-top10/1190515 — esperando a vez, até 40 min`, entrou na fila e ficou esperando. Aos 15 min
o `timeout` o matou: **exit 124, zero downloads, 15 minutos por busca jogados fora**, e o log final
diz apenas "esperando a vez", que se lê como plataforma lenta.

**Por que engana:** as duas réguas existem por motivos diferentes e ninguém as compara. A espera da
trava é generosa de propósito (`trava-caca.mjs` serializa Mac+VM na mesma conta); o `timeout` externo
é a rede de segurança contra processo pendurado. Quem escreve o script põe cada número pensando no
seu próprio problema — e o menor sempre vence, calado. Com o parque saturado (medi 6 sessões
headless caçando ao mesmo tempo), a espera na fila passa de 15 min com facilidade, e aí **100% das
buscas morrem antes de baixar qualquer coisa**.

Isto é exatamente o *"quem cede a vez nunca caça"* que o `_RECACA-PROCEDENCIA.md` já descrevia — mas
lá a causa apontada era a espera padrão de 60 s ser curta demais. **Aumentar a espera não resolve
nada se o timeout continuar menor**: o conserto tem de tocar os dois números juntos.

**A regra:** em qualquer laço de caça, `timeout` > `STOCK_TRAVA_ESPERA_S`, com folga para o download
em si (usei 2100 contra 1500). E o log tem de imprimir o `exit` de cada busca — `124` é "eu desisti",
não "a plataforma negou", e confundir os dois manda a próxima sessão consertar a porta errada.
*Dois relógios governando a mesma espera, e o mais curto decide sem avisar.*

## [PESQ-86] "Logado" medido no domínio da CONTA não prova que o domínio da BUSCA abre

**Medido (`mamute-de-volta`, 12/ago/2026, recaça de procedência):** `sessao-conferir.mjs` devolveu
`envato ✓ LOGADO — a página de conta serviu` e, no mesmo minuto, as duas buscas que despachei
voltaram `0 resultados visíveis` com a URL final em
`account.envato.com/pt-BR/sign_in?state=…&to=envatoapp`. **0/3 baixados em dois slots.** Não era
seletor morto nem busca ruim: a sessão do Envato está partida entre `www.envato.com` (conta, viva) e
`app.envato.com` (busca, morta) — **dois domínios, duas sessões**, e o conferidor media só o
primeiro. O `--diag` do próprio `baixar.mjs`, que abre o domínio da busca, tinha medido DESLOGADO
duas horas antes: a casa possuía as duas medidas e acreditou na errada, porque a errada era a mais
nova e a mais bonita de ler.

**Por que engana:** o conferidor foi escrito com uma regra boa — *"página só-de-conta, nunca uma
busca"* — para que busca vazia por outro motivo não virasse falso "deslogado". A regra protege
contra o falso NEGATIVO e abre a porta do falso POSITIVO, que é pior: o negativo faz repetir a
medida, o positivo faz **gastar caça numa porta fechada** e depois procurar o defeito no seletor.

**A regra:** o alvo do teste de sessão é o domínio que a FERRAMENTA usa, não o que o humano usaria
para conferir a conta. Quando os dois diferem, mede-se o da ferramenta (aqui:
`app.envato.com/search`). O veredito continua sendo o DESTINO da navegação — redirect para login é
deslogado; contagem de resultados nunca decide. E quando duas medidas discordam, vence a que tocou
a porta por onde o trabalho passa.
*Conferir a porta da frente não diz nada sobre a porta de serviço, que é por onde se entrega.*

## [PESQ-87] Mapa de recaça é ORDEM DE SERVIÇO: julgamento revogado se revoga NO ARQUIVO

**Medido (`mamute-de-volta`, 12/ago/2026, estação RENDER):** o `_pesquisa/recaca-A.json` ainda
declarava, em `substituicoes`, que o `card-01-estepe-glacial.mp4` fosse trocado pelo
`card01-planalto-artico-escarpa-nevada--shutterstock_4098320875.mov`. Esse arquivo tinha sido
**recusado por visão duas vezes** (11 e 12/ago) — é cordilheira alpina de picos afiados, e o critério
da cena é *planície de capim, não montanha*. As duas recusas estavam escritas: no
`_RECACA-PROCEDENCIA.md`, em prosa, numa tabela chamada "o que NÃO precisa ser rebaixado de novo".
O mapa nunca foi tocado.

**Por que isso é diferente de uma anotação errada:** `aplicar-substituicao-midia.mjs <proj>
--aplicar` **sem `--mapa=` carrega TODOS os `_pesquisa/recaca-*.json`** — e é exatamente essa a forma
do comando que a fila despacha. Simulado antes de consertar: ele trocava o card-01 pela cordilheira.
O que aconteceria depois é o que faz esta lei existir: o `qc-procedencia` ficaria **mais verde** (um
proibido a menos), e **nenhum gate reprovaria**, porque procedência julga LICENÇA e não CONTEÚDO. A
montanha recusada entraria no ar com a fila inteira limpa, e o defeito só apareceria quando o Mateus
assistisse.

**Por que o parecer original não estava errado:** ele mediu contraste no terço inferior e ausência de
veículo/pessoa — critérios reais — e foi escrito ANTES de a direção fixar o critério de RELEVO. Ninguém
mentiu; o julgamento **envelheceu**. É a mesma classe do documento que descreve bloqueio já resolvido,
com um agravante: documento vencido atrasa quem lê, ordem de serviço vencida **é executada por quem
não leu**.

**A regra:** recusou um candidato que algum `recaca-*.json` declara? **Mova a entrada para fora de
`substituicoes`** no mesmo ato — para `REVOGADA_pelo_julgamento_mais_novo`, preservando o parecer
original e escrevendo o que mudou. O aplicador lê `substituicoes` e só ela; qualquer outro campo é
memória, não ordem. E antes de rodar com `--aplicar`, **rode a simulação e leia linha por linha o que
ele diz que vai trocar** — ela é o único lugar onde o mapa inteiro aparece junto.

*Julgamento não se revoga no lugar onde se explica; revoga-se no lugar onde se executa.*

## [PESQ-88] Ferramenta auxiliar não herda a proteção do canônico — e a fila perdida é o custo

**Medido (`mamute-de-volta`, 12/ago/2026):** `scripts/stock/_tmp-mmt-ma-baixar.mjs` e
`_tmp-mmt-ss-baixar.mjs` — os baixadores **por URL de item**, que são a rota de ECONOMIA DE COTA da
casa (`--soListar` → olhar → baixar só o escolhido) — nasceram no Mac e **não tinham o auto-xvfb** que
o `baixar.mjs` canônico ganhou em 03/ago. Na VM, sem `$DISPLAY`, o Chrome headed nem sobe.

**O custo não foi o erro; foi a FILA.** O baixador do Motion Array esperou **15 minutos** na trava de
plataforma, ganhou a vez, e morreu **em 1 segundo** com `Missing X server or $DISPLAY`. Quinze minutos
de fila numa plataforma disputada, entregues de volta sem baixar nada. Pior: "morreu ao ganhar a vez"
lê-se como sessão caída — e ler bloqueio onde há defeito local é o degrau documentado para alguém
"resolver" indo ao banco gratuito vetado ([PESQ-12]).

**A POSIÇÃO do conserto é lei, não detalhe:** o embrulho vai **ANTES de tomar a trava**. Se a trava
for tomada primeiro, o processo de fora a segura e o processo re-lançado sob `xvfb-run` **espera a si
mesmo** até o timeout — um deadlock que se parece com fila cheia. O `baixar.mjs` já documenta esse
cuidado na ordem do próprio arquivo; quem copia o baixador precisa copiar a ordem junto.

**A regra:** ferramenta auxiliar que aciona o mesmo recurso caro que a canônica (navegador logado,
trava entre máquinas, cota diária) tem de carregar as MESMAS proteções de ambiente — e isso se
verifica **rodando-a na máquina onde ela vai rodar**, não lendo o código. Antes de despachar um
`_tmp-*` na VM, confira que ele trata `$DISPLAY` ausente; é uma linha de `grep`, contra uma fila
inteira perdida.

*Quem copia a função esquece a proteção, porque a proteção não é o que a função faz — é o que ela
sobrevive.*

## [PESQ-89] O anti-bot que se disfarça de seletor quebrado — checagem que só vale num modo é checagem que falta no outro

**Medido (`ate-que-altura-construir`, lote B, 12/ago/2026):** o Shutterstock serviu página de desafio
no lugar da grade, com o texto **"Verification Required · Automated (bot) activity on your network
(IP 177.22.174.240)"** — o IP do *túnel residencial*, que é a casa do Mateus. A causa foi volume
agregado: **31 processos `baixar.mjs` de TRÊS produções diferentes** saindo pelo mesmo IP ao mesmo
tempo (load 38,6 numa VM de 16 vCPUs).

**O defeito não foi o CAPTCHA; foi o que o caçador LEU.** O `baixar.mjs` tinha o checador `barrado`
dentro do bloco `if (SHORTLIST)`, e só lá. No modo de **download real** o mesmo bloqueio saía com a
cara de:

> `0 itens — ou o seletor de item morreu, ou esta URL não é a busca`

Duas consequências, e a segunda é a cara: (1) o **alarme humano nunca disparava** no modo que mais
roda — e CAPTCHA é o único gate humano legítimo desta casa, porque nenhum agente pode resolvê-lo;
(2) o sintoma **acusa o inocente**, e a próxima sessão chama o `tecnico-stock` para consertar um
seletor são enquanto a conta continua apanhando do anti-bot. Foi só o agente ter tirado print e
comparado com a própria shortlist boa para ver que o seletor estava vivo.

**Consertado (`scripts/stock/baixar.mjs`, 12/ago):** o checador virou a função de módulo
`barradoPorAntibot(page, contexto)`, usada nos DOIS modos. No download real ela roda **quando
`total === 0`, antes de acusar o seletor** — custo zero no caminho feliz, porque só se chega ali
quando já deu errado. O regex ganhou `verification required` e `automated (bot) activity`, e foi
provado contra o texto real: casa no CAPTCHA medido, **passa limpo na grade de busca normal e na
página de login** (login não é CAPTCHA — o diagnóstico e a cura são outros).

**A regra, e ela é maior que o stock:** quando o mesmo defeito pode aparecer em dois caminhos de
código, a checagem que existe num só **não é meia-proteção — é diagnóstico errado no outro**, que
custa mais caro que a ausência dela. Ao portar uma checagem, pergunte por qual mensagem o defeito
sai no caminho onde ela não está; se essa mensagem aponta para outro componente, você não tem um
buraco, tem uma **acusação falsa** gravada no log.

**Corolário operacional, medido no mesmo dia:** o teto do Shutterstock é do DIA (100), mas o
**anti-bot é do RITMO e do IP**. Dez caçadores gastam os mesmos 100 downloads que um — só que
concentrados o bastante para a plataforma ver robô no IP de casa. Antes de disparar caça em lote,
conte os `baixar.mjs` vivos na máquina (`pgrep -cf baixar.mjs`): eles são de TODAS as produções, não
só da sua, e quem paga o flag é o IP residencial compartilhado.

*Bloqueio não avisado vira bug de outro componente na cabeça de quem ler o log depois.*

---

### PESQ-90 · O PASSE DE ÂNCORAS PROMOVE MÍDIA COM LICENÇA **PENDENTE** — ele só sabe se o arquivo existe (12/ago/2026, `planeta-em-meteorito/piso-vs-estimativa`, agente-raiz `pesquisa-imagens` + `aplicar-ancoras-pesquisa.mjs`)

O `conceito-visual.json` mandava a cena `piso-vs-estimativa` usar
`nwa12774-mapa-elementos-epma-mg-al-cr-fe.jpg`. O `_PROCEDENCIA.json` da própria pasta diz, com
todas as letras: *"PENDENTE DE LIBERAÇÃO — © Meteorite Exchange, Inc.; sem licença aberta
declarada. **Não colocar no ar sem autorização**"*. A âncora chegou ao conceito assim mesmo.

Não é falha do passe: o `aplicar-ancoras-pesquisa.mjs` é determinístico e promove FALTA→asset
**se o arquivo existe e tem tamanho > 0** — ele nunca prometeu ler licença. O problema é que esse é
o único portão entre a pasta e o HTML, e ninguém mais abre o `_PROCEDENCIA.json` antes do desenho.
Aqui só não foi ao ar porque o editor-de-arte abriu o arquivo por conta própria e trocou pelo
`nwa12774-mapa-raiox-falsa-cor-bell.jpg` — mesma função, licença de imprensa clara, e melhor para a
cena por ser do primeiro autor do estudo. A cena irmã `aluminio-dentro-do-cristal` já havia vetado
os dois EPMA pelo mesmo motivo, **e essa decisão não voltou para o conceito**.

**A regra, nos dois lados.** Quem CAÇA: escreva o veto no nome ou numa chave que o próximo leia —
"PENDENTE" dentro de um JSON que só o humano abre não impede nada. Quem DESENHA: abra o
`_PROCEDENCIA.json` da pasta antes de usar o arquivo, sempre; a âncora do conceito diz *o que* a
cena precisa, não que *aquele arquivo* pode ir ao ar.

*A lição que generaliza: **"o arquivo existe" e "o arquivo pode ser publicado" são perguntas
diferentes, e só a primeira tem código respondendo.*** Toda vez que um passe automático promove um
insumo, pergunte o que ele NÃO verifica — e garanta que alguém verifique isso antes do ponto sem
volta. Irmã de [PESQ-52] (pendência medida no disco) pelo mecanismo: contar arquivo é fácil, julgar
arquivo é que decide. E irmã do caso vizinho do mesmo vídeo, em que o footage comprado para
"meteorito na mão" era uma **peça ornamental polida** (*heart chakra stone*): mídia paga, presente
no disco, e falsa sob a frase que ilustrava. **Existir no disco nunca foi prova de servir.**

### PESQ-91 · conferir sessão é VISITAR a plataforma logado — o gate do túnel vale para quem SÓ OLHA (12/ago/2026)

**Medido em 12/ago/2026, e é o furo mais caro que a caça de stock teve.** O
`sessao-conferir.mjs` — o gate OFICIAL de "as sessões de stock estão vivas?" — era o único script de
stock que **não importava `scripts/stock/tunel.mjs`**. Sem o import, nada do módulo acontece: nem o
default de nuvem (ele escreve `STOCK_PROXY=socks5://127.0.0.1:1080` no ambiente ao ser carregado)
nem o `proxy` que o Playwright precisa receber no launch. Medição pareada, com o launch copiado
linha a linha do conferidor: `{"ip":"104.198.163.68"}` — **Google Cloud** — no mesmo minuto em que o
`tunel-conferir.mjs` reportava `177.22.174.240` (casa).

**O que isso fazia, toda vez que alguém rodava o gate:** abrir Shutterstock, Storyblocks, Envato e
Motion Array **com os cookies das assinaturas dentro**, a partir de um servidor americano. É
exatamente o padrão que o túnel residencial inteiro existe para não produzir — e o risco declarado
pela casa nunca foi levar 403: é a plataforma ver assinatura ilimitada saindo de datacenter e
**suspender a conta**. Pior: o `login-na-nuvem.sh` chama o conferidor no passo final, então o fluxo
oficial de *consertar* o login terminava carimbando as quatro contas com o IP errado — e o Mateus
era instruído a rodar justamente esse fluxo sempre que a caça travava.

**Por que passou meses invisível.** Toda a doutrina do túnel está escrita em volta da CAÇA
(`baixar.mjs`), do LOGIN (`setup-login.mjs`) e da TRANSFERÊNCIA (`sessao-transferir.mjs`) — os três
importam o módulo e os três têm o gate. O conferidor nasceu depois, para responder outra pergunta
("está logado?"), e ninguém o classificou como *coisa que toca a plataforma logado*. Ele não dá
erro, não avisa, e o log dele é tranquilizador: imprime `✓ LOGADO` do jeito mais convincente
possível. Um morto-silencioso ao contrário — não deixa de fazer o trabalho, faz o trabalho pela
porta errada.

**A regra:** a lista do que precisa do túnel não é "os scripts que baixam" — é **todo código que
abre uma plataforma com a sessão da assinatura carregada**, incluindo o que só olha. Medir é
visitar. Ao escrever qualquer peça nova que instancie um contexto com o perfil `_stock-perfil`, o
`exigirTunelNaNuvem()` + `proxyPlaywright()` entram junto, no mesmo commit — e a prova de que
entraram é o IP, medido, não a leitura do diff.

*A garantia mora no código, não no escopo* — e aqui a garantia era só o hábito dos scripts vizinhos.
Irmã da [PESQ-86] pelo lugar (as duas moram no conferidor) e da [SIS-66] pelo mecanismo: capacidade
que funciona *quase* certo é mais difícil de achar do que capacidade quebrada, porque o sintoma que
ela produz é sucesso.

### PESQ-92 · portão humano abre na página de TRABALHO, nunca na home — a home esconde os dois defeitos (12/ago/2026)

**O gesto humano tem de começar onde o defeito aparece.** O `setup-login.mjs` — o script que abre o
navegador da VM para o Mateus resolver login e CAPTCHA por VNC — abria as **homes** das seis
plataformas (`https://www.shutterstock.com/`, etc.). E home não mostra **nenhum** dos dois defeitos
que trazem uma pessoa até ali:

- **sessão caída:** a home é servida igual para anônimo e para assinante, e o header pode exibir
  avatar de cache. Medido em 12/ago/2026: com Storyblocks e Envato DESLOGADOS, as duas homes abriam
  normalmente; quem denunciou foi a página de trabalho (`/all-video/search/…` e
  `app.envato.com/search`), que redirigiu para a tela de login.
- **anti-bot:** o desafio do Shutterstock (*"Verification Required — Automated (bot) activity on your
  network (IP …)"*, registrado às 22:37 UTC do mesmo dia) é servido **na busca**, que é onde a caça
  bate. A home vinha limpa.

O efeito prático era o pior possível para um gate humano: a pessoa atravessa o túnel VNC, olha seis
páginas bonitas, fecha a janela satisfeita — e a caça seguinte bate na mesma parede. O gesto caro foi
gasto sem tocar no problema.

**A regra:** todo portão humano abre na **URL que a ferramenta realmente usa** (no nosso caso a
`url()` do config de cada plataforma no `baixar.mjs`, com um termo neutro), nunca na porta de
entrada institucional. E vale além do stock: quando se pede a uma pessoa que confira ou destrave
alguma coisa, o que se põe na frente dela é a tela onde o sistema falha, não a tela onde o sistema
se apresenta.

Aplicação direta da [PESQ-86] — *conferir a porta da frente não diz nada sobre a porta de serviço,
que é por onde se entrega* — do lado humano em vez do automático. No Envato isso é literal:
`www.envato.com` (conta) e `app.envato.com` (busca) têm sessões SEPARADAS, e logar na primeira não
abre a segunda.

### PESQ-93 · a palavra do defeito mora no rodapé das páginas saudáveis — e o sinal específico vence o genérico (12/ago/2026)

**A palavra que nomeia o defeito costuma aparecer no rodapé das páginas saudáveis.** O
`sessao-conferir.mjs` decidia "estou barrado por anti-bot?" com o regex
`/captcha|verify you are human|unusual traffic|access denied|just a moment/i` sobre o texto da
página. Medido em 12/ago/2026: a tela de login **legítima** do Storyblocks termina com *"This site is
protected by reCAPTCHA."* — boilerplate que quase toda página de login do mundo carrega. Veredito
emitido: `storyblocks ⚠ BLOQUEIO/CAPTCHA — não mediu`. O print, aberto e olhado, mostrava um
formulário de e-mail e senha vazios: sessão simplesmente morta.

**O estrago não é o rótulo, é o código de saída.** "Não mediu" sai **2**, e o `login-na-nuvem.sh`
traduz 2 como *"VM saturada ou timeout; veja o /proc/loadavg e repita"* — ou seja, **manda a pessoa
embora sem fazer nada**, com a sessão morta e a caça parada. O veredito correto (deslogado, exit 1)
manda logar, que é o que resolveria em trinta segundos. Um alarme falso que não só ruge à toa: ele
ruge o alarme ERRADO, e o errado é o que desmobiliza.

**Dois consertos, e o segundo é o que generaliza:**
1. O regex passou a casar **desafio ativo** (`verification required`, `automated (bot) activity`,
   `just a moment`, `unusual traffic`…) depois de remover a frase-rodapé do reCAPTCHA, em inglês e
   em português. Provado nos dois lados, como todo gate desta casa deve ser: pega os 5 desafios reais
   já vistos no disco e acusa **0** das 4 telas legítimas.
2. **O sinal mais específico tem precedência sobre o mais genérico.** Se a navegação terminou numa
   URL de login, a sessão morreu — ponto; o texto da página não pode revogar isso. Desafio servido
   *dentro* da tela de login pede a mesma ação de quem lê (abrir e resolver), e "deslogado" é o
   veredito acionável dos dois.

**A regra:** ao escrever um detector por palavra-chave, procure a palavra no **estado saudável** do
que você está medindo antes de confiar nela — "captcha" no rodapé, "error" num nome de variável,
"failed" numa legenda de tabela. E quando dois sinais discordam, vence o que tem lugar definido (a
URL de destino), não o que tem texto solto.

Irmã da [ARTE-190] (o gate de hex que reprovava cena boa) e da [PESQ-91], que mora no mesmo arquivo:
*alarme falso é bug de prioridade alta porque ensina a ignorar o alarme certo* — e aqui ele ainda
substituiu a instrução certa por uma que manda esperar.

### PESQ-94 · recalibrar plataforma: pergunte à UI a rota, meça o seletor no DOM, prove o filtro por efeito (12/ago/2026)

**A UI de uma plataforma sabe a própria rota; adivinhar o nome do parâmetro é caro e silencioso.**
Medido em 13/ago/2026, consertando o Envato depois que o portão devolveu a sessão: com a conta
LOGADA e a grade cheia na tela, a caça acusava `0 candidatos`. Não era sessão nem anti-bot — era a
rota do card, que mudou sem aviso:

| | antes (no código) | medido no DOM |
|---|---|---|
| card de vídeo | `a[href*="/stock-video/"]` | **0** |
| card de vídeo | `a[href*="/search/footage/"]` | **5** |
| busca de foto | `?itemType=stock-photo` | redireciona para a **raiz**, 0 cards |
| busca de foto | `https://app.envato.com/photos?term=…` | **11** |

O caminho da foto não saiu de tentativa e erro sobre o nome do parâmetro (`stock-photo`, `photos`,
`photo`…): saiu de **clicar em "Fotos" na barra lateral e ler a URL que a própria interface gerou**.
Uma navegação, resposta definitiva. Adivinhar teria sido várias rodadas de medição, cada uma com o
risco de parar na primeira que "não deu erro" — que é o pior lugar para parar, porque rota errada
nesta plataforma **não falha: redireciona e serve outra coisa**.

**E o parâmetro novo foi verificado por EFEITO, não por ausência de erro.** O próprio `baixar.mjs` já
registra o veneno no bloco do Reuters: *"param/valor inválido é DESCARTADO EM SILÊNCIO — a busca
'funciona' e volta o acervo INTEIRO"*. Então a prova de que `?term=` filtra foi rodar duas buscas
incompatíveis e comparar os conjuntos: `ocean waves` (6 ids) contra `desert camel sahara` (12 ids),
**interseção 0**. Parâmetro decorativo devolveria a mesma grade nas duas.

**A regra, em três passos, para toda recalibração de plataforma:**
1. **Pergunte à UI** onde fica o que você quer — clique no menu e leia a URL. Não adivinhe rota nem
   nome de parâmetro.
2. **Meça o seletor no DOM real**, contando por padrão de href (`/<segmento>/<uuid>`), não testando
   um palpite por vez. O padrão que aparece 5 ou 11 vezes é o card; o que aparece 3 é a coluna
   lateral (aqui, música — excluída de propósito).
3. **Prove o filtro por efeito**, com duas buscas que não podem coincidir. "Voltou resultado" não é
   prova de que a busca é sua.

E o achado que só aparece medindo: **a grade do Envato é virtualizada** — rolando dez vezes, a
contagem no DOM não cresce (5 → 4 → 5 → 2), porque a SPA recicla os nós. `count()` mede a janela,
nunca o acervo, e `--n` acima de ~5 fica sem ter o que pegar. Não é defeito de seletor; é teto, e
está documentado no config para ninguém "consertar" duas vezes. A saída conhecida é a que a casa já
usa: várias buscas vizinhas com `--buscas="a|b|c"`.

### PESQ-95 · saída antecipada de ferramenta de diagnóstico não pode pular a pergunta de causa (13/ago/2026)

**Medido em 13/ago/2026, e o caso é constrangedor porque a vítima foi a ferramenta de
diagnóstico.** O `baixar.mjs --diag` existe para responder *"por que esta caça não achou nada?"*.
Ele imprime rota, seletor, sessão e a contagem de itens — e **saía antes de perguntar se a
plataforma tinha servido um desafio anti-bot**. A pergunta existia, e a ordem certa também: o modo
de download real já traz *"pergunte ANTES de acusar o seletor"*, escrita quando o CAPTCHA aparecia
disfarçado de `0 itens — ou o seletor morreu`. Só que o `--diag` tinha um `process.exit` mais cedo,
e ficou fora da regra.

O que a tela mostrava:

```
Verification Required
We detected unusual activity from your device or network.
- Automated (bot) activity on your network (IP 177.22.174.240)
```

O que o laudo dizia:

```
· seletor de item: a[href*="/video/clip-"]
· itens casados: 0
```

Idêntico ao que ele diria se o seletor tivesse morrido. Quem lesse iria recalibrar um seletor são —
e recalibrar seletor é abrir o navegador e martelar a plataforma, ou seja, **a leitura errada leva
exatamente à ação que piora o bloqueio**.

**A regra:** toda saída antecipada de uma ferramenta de diagnóstico precisa passar pelas mesmas
perguntas de causa que o caminho normal faz. Quando um código tem dois pontos de saída para o mesmo
sintoma (`--diag` e execução real), a verificação vai **antes da bifurcação**, ou se duplica de
propósito e com teste — nunca fica só num ramo. *A ferramenta que existe para explicar o problema é
a última que pode esconder a causa.*

**E a causa do bloqueio em si vale como aviso separado:** o desafio nasceu do MEU volume. Testando os
consertos do dia, disparei dezenas de buscas em poucas horas, todas pelo mesmo IP residencial que a
casa inteira compartilha — e o Shutterstock leu como o que era: atividade automatizada. Verificar é
barato em CPU e **não é barato em reputação de IP**. Piloto pequeno, espaçado, e nunca a mesma
plataforma em rajada; quando um conserto de coleta já foi provado numa plataforma (aqui, o Envato de
3 → 37), repetir a prova nas outras três é curiosidade cara.


### PESQ-96 · confissão de ignorância não é procedência — o campo `fonte` só aceita origem, nunca a palavra "não sei" (13/ago/2026)

**Medido em 13/ago/2026, no `uruguai-despovoado`.** Dois agentes `pesquisa-imagens` receberam o mesmo
trabalho — identificar a origem de 16 footages recuperados de backup, sem registro em lugar nenhum —
e chegaram à mesma conclusão honesta: não deu para identificar. Escreveram essa conclusão de dois
jeitos, e só isso decidiu o veredito do gate:

| lote | o que escreveu em `fonte` | o que o `qc-procedencia` concluiu |
|---|---|---|
| B | `null` | 8 arquivos **SEM PROVA** ✔ correto |
| A | `"NAO IDENTIFICADA"` | 8 arquivos **PROVADOS** ✘ falso verde |

O gate somou **29 provados / 8 sem prova** quando a verdade eram **21 / 16**. A string passava no
teste de `length >= 3` e virava prova de origem — em arquivos que o próprio laudo apontava como
suspeitos de banco gratuito (quatro deles com `handler_name` ausente de 333 downloads assinados).
**O buraco que este gate existe para fechar é exatamente esse**, e ele se abria com a frase que
declara o buraco.

É o irmão do `[object Object]` da [PESQ-74], e o mais perigoso dos dois: aquele é acidente de
serialização, este é o agente sendo **honesto**. Punir a honestidade com um verde falso ensina a
escrever qualquer coisa no campo — e o campo existe para uma coisa só.

**A regra, para quem escreve:** `fonte` recebe origem ou `null`. Nunca a narrativa da tentativa.
O que você tentou, por onde procurou e por que falhou vai em `confianca`, `como_confirmei` e no
diário — campos que ninguém confunde com prova.

**A regra, para quem escreve gate:** todo campo que serve de PROVA precisa de uma lista de
sentinelas, e a lista tem de incluir as frases que significam *ausência*. Consertado nos dois
lados: o `PLACEHOLDER` de `qc-procedencia.mjs` e `procedencia-declarar.mjs` agora casa
`não identificada`/`não encontrada`/`sem procedência`/`indefinido`, e o declarador deixou de
**criar** placeholder (ele já curava os existentes — faltava a outra ponta).

*Um campo de prova que aceita qualquer texto não prova nada: ele só transforma quem foi honesto em
quem passou no teste.*

### PESQ-97 · Quando o vocabulário já falhou três vezes, o que está errado é o ÂNGULO — e o plano cenital resolve o anonimato por construção (13/ago/2026, `galaxia-arco-flecha/card04`+`s80`, agente-raiz `pesquisa-imagens`)

> 🔀 Nasceu como PESQ-95 e foi renumerada na hora: outra sessão gravou um PESQ-95 no mesmo dia,
> enquanto esta caça rodava. O gerador pegou a colisão ([SIS-62]) — vale a régua de sempre, o
> número de quem já está no remoto fica.

**O caso.** Duas cenas ficaram **cinco dias** em quarentena por um único footage: uma pessoa diante de
uma tela, num capítulo que se chama *"Quem achou foi um voluntário"* — ciência cidadã. Quatro caças,
quatro reprovações, e todas pelo MESMO defeito de fundo, o rosto: close de nuca (o mosaico caiu na
nuca) · executivo de blazer em escritório (caiu no rosto) · hacker de capuz em porão (sem tela à
vista). A [PESQ-70] já tinha diagnosticado o vocabulário — `business`/`office` puxa corporativo — e
a correção dela foi trocar por `silhouette`/`dark room`. **Que puxou THRILLER.** Três formulações
depois (`silhouette man laptop dark room`, `over the shoulder … at night`, `silhouette watching tv
… back view`) o acervo devolvia, em ordem: porão de hacker, `business man`/`employee`/`manager` de
novo, e silhueta em janela de apartamento de luxo.

**O que quebrou o ciclo.** Parar de descrever A PESSOA e passar a descrever **a tela e o ângulo**:
`man sitting at desk with blank white computer screen mockup at home dark room` — e o filão que ela
abriu (`overhead`, `top down`) era a resposta. O escolhido é um **plano cenital em tripé travado**.

**A regra, e é mais forte que uma dica de busca.** Silhueta é uma aposta: depende da luz, e um take
bem exposto entrega o perfil. **Plano cenital não é silhueta que quase esconde o rosto — é um ângulo
em que o rosto não existe no quadro.** Quando a cena precisa de pessoa ANÔNIMA (porque o vídeo mostra
a pessoa REAL em outra cena, [PESQ-70]), busque pelo ÂNGULO: `overhead`, `top down`, `from above`,
`hands only`, `over the desk`. O anonimato deixa de depender da iluminação do take.

**Dois brindes que o cenital dá de graça, e que eram requisitos duros aqui.** (1) *Estabilidade*: o
cenital é quase sempre tripé, e a composição em coordenadas FIXAS exige isso — medido, o rect da
tela variou **1 px** de t=0 a t=12, contra 32 px em x e 80 px em y do clipe reprovado. (2) *Tela de
frente*: vista de cima, a tela é um retângulo plano e inteiro, sem a distorção de perspectiva que o
plano de costas impõe — e é sobre ela que a arte compõe.

**A régua de "não achei".** Antes de dizer que o acervo não tem, conte quantos ÂNGULOS você tentou,
não quantas palavras. Quatro caças gastaram 4 vocabulários e **um só ângulo**.

Agente-raiz: `.claude/agents/pesquisa-imagens.md` (busca por ângulo quando o requisito é anonimato).

---

### PESQ-98 · O gate que diagnostica a caça sabia menos que a caça — e o falso "não roda aqui" virou nota de diário, herança e vídeo parado (15/ago/2026, `uruguai-despovoado`, agente-raiz: `scripts/stock/sessao-conferir.mjs`)

**O caso.** A estação ARTE do `uruguai-despovoado` parou 9 cenas por falta de footage de multidão
urbana — a antítese visual de um vídeo sobre país despovoado, e o lado direito de toda comparação
que ele faz. O diário registrou o motivo em 14/ago 21:34, com rigor aparente: *"A caça de stock NÃO
RODA NESTA VM: `sessao-conferir.mjs` morre em «Missing X server or $DISPLAY» … a caça é do MAC."*
Em 15/ago 01:5x o MESMO script, com `xvfb-run -a` na frente, devolveu **túnel residencial vivo**
(saída por 177.22.174.212, IP de casa, não pelo datacenter) e **Envato + Motion Array LOGADOS**.
Não havia bloqueio de infra nenhum. O `xvfb` estava instalado o tempo todo e a porta 1080 aberta.

**A causa, e ela é de arquitetura, não de descuido.** O `baixar.mjs` — quem CAÇA — se auto-embrulha
em `xvfb-run` desde 03/ago, e o comentário dele já previa este exato desfecho: *"esse erro CRU parece
bloqueio de plataforma e já mandou caçador pra fonte gratuita vetada"*. O `sessao-conferir.mjs` —
quem DIAGNOSTICA a mesma capacidade — só trazia `xvfb-run -a node …` como texto no cabeçalho. A
capacidade de não cair nessa armadilha existia na ferramenta de execução e **não** na ferramenta de
medição. Quem mede é justamente quem é consultado quando algo parece quebrado: o único script cuja
resposta vira veredito era o único sem a proteção.

**A régua.** *Ferramenta de diagnóstico tem de ser pelo menos tão capaz quanto a que ela diagnostica.*
Se o executor sabe subir uma tela virtual, escolher rota, atravessar túnel — o gate precisa saber o
mesmo, ou o veredito dele mede o gate, não o mundo. Ao consertar um caçador, pergunte na hora: **o
script que testa isto tem a mesma capacidade?**

**Por que este falso negativo é o mais caro de todos.** Erro para o lado do "impossível" não pede
para ser revisto. Falso positivo ("logado" com a porta fechada) morre no primeiro download que falha;
falso negativo vira **nota de diário**, a nota vira **herança**, e a herança para a produção sem
ninguém remedir — porque a estação seguinte lê "é do Mac" e nem tenta. É o furo do `especies-humanas`
([PESQ] cabeçalho do próprio `sessao-conferir`) por outra porta: lá o impedimento foi herdado por
escrito **sem** teste; aqui o teste existia e **mentia**, que é pior, porque traz prova junto.

**A régua de quem HERDA um bloqueio de infra.** "Não roda nesta máquina" é a classe de afirmação que
mais envelhece mal e a que menos se reconfere. Custa segundos desmentir: `which xvfb-run` · a porta
do túnel · `--diag` da plataforma. Faça isso ANTES de aceitar o bloqueio — e note que aqui a nota
herdada era de **quatro horas antes**, escrita por uma sessão cuidadosa, com medição real anexada.
Não foi descuido de quem escreveu: foi o instrumento.

**Conserto aplicado.** O bloco AUTO-XVFB do `baixar.mjs` foi portado para o `sessao-conferir.mjs`
(mesma guarda `STOCK_XVFB=1` contra recursão, mesma mensagem explícita quando o `xvfb` falta de
verdade). O cabeçalho de uso deixou de mandar `xvfb-run` à mão: instrução que depende de o humano
lembrar é a que falha na sessão headless.

---

### PESQ-99 · A fonte do card sustenta o NOME e o FEITO — e quase nunca a AFILIAÇÃO, que é o que vai à tela (15/ago/2026, `energia-escura/n03`, agente-raiz `redator-de-tela`)

**O caso.** Três cards de pessoa (Perlmutter, Schmidt, Riess) citavam a matéria do Berkeley Lab sobre
o Nobel de Física de 2011. A fonte abre, é primária, fala das três pessoas e sustenta o feito inteiro.
Só que, sobre dois dos três, ela diz apenas *"leader of the High-z Supernova Search Team and first
author of that team's analysis, respectively"* — **sem uma instituição**. E os cards afirmavam, no
campo que a tela imprime, "Australian National University" e "Space Telescope Science Institute /
Johns Hopkins". Verdadeiro no mundo; não sustentado pela fonte citada.

**Por que nenhum gate pega.** `qc-textos-tela` mede grafia única por referente, pessoa sem gaveta,
variante inventada e número volátil sem data — quatro invariantes de CONJUNTO. Vínculo não-sustentado
é uma relação entre um campo e uma frase da fonte: passa verde nos quatro. E a conferência humana que
sobra ("cada `fonte` é URL que foi ABERTA") também passa, porque a URL abre e é sobre a pessoa certa.
**A pergunta que faltava não é "a fonte abre?" — é "QUAL FRASE dela sustenta o `vinculo`?".**

**É a [PESQ-96] por outra porta.** Lá o campo `fonte` trazia a palavra "não sei" e isso contava como
procedência. Aqui ele traz origem real, aberta e primária — e mesmo assim não cobre o campo que a
tela vai imprimir. Fonte presente não é fonte suficiente: ela tem de cobrir **cada afirmação**, campo
a campo, não a pessoa em geral.

**A porta que resolve, e é datada de fábrica.** `nobelprize.org/prizes/<área>/<ano>/<sobrenome>/facts/`
publica o campo **"Affiliation at the time of the award"** — afiliação já carimbada com a data, que é
exatamente a régua quando o card legenda foto de época. Confirmou os três, literal. E expôs um
segundo defeito de graça: o vínculo de Riess é o de **2011**, não o de 1998 (em 1998 ele não estava
nessas instituições). O card legenda a coletiva do Nobel, então está correto — mas o `data_do_cargo`
precisava dizer isso em voz alta, ou a arte dataria o vínculo no ano da descoberta.

**A régua.** Cargo e vínculo são afirmações independentes do nome, e envelhecem por conta própria.
Ao escrever um card, cole no campo `fonte` **o literal que sustenta o vínculo** — não a URL da
matéria que fala da pessoa. Se a fonte do feito não traz afiliação, busque a da afiliação (ficha do
prêmio, página institucional, press-kit) e cite as duas. Quando as duas datas divergem (o feito é de
um ano, o vínculo é de outro), o `data_do_cargo` declara qual das duas o card está escrevendo.

---

### PESQ-100 · Em acervo institucional de ciência, "impressão de artista" vem embalada IGUAL ao registro real — e o nome do arquivo é uma AFIRMAÇÃO que ninguém a jusante reconfere

> 🔀 Nasceu como **PESQ-30** no worktree de `galaxia-arco-flecha`; esse número já pertence à lei de geometria publicada. Pela [SIS-62], esta lei foi incorporada como **PESQ-100** em 15/ago/2026.
**Caso (03/ago/2026, `galaxia-arco-flecha`, cena s75):** o `pesquisa-imagens` entregou
`_media/s75-saturno-aneis-hubble-2019.jpg` para o beat "os anéis de Saturno". O arquivo é a
**impressão de artista do exoplaneta K2-18b** (ESA/Hubble, 2019): planeta azul liso, anã vermelha ao
fundo, **zero anéis** — assunto errado E gênero errado. Passou pela pesquisa, pela direção de arte
(entrou como `midia_ancora` no `conceito-visual.json`) e chegou intacto até o editor-de-arte, que só
pegou porque **abriu a imagem para enquadrar** e viu que não era Saturno. Havia o arquivo certo na
mesma pasta o tempo todo (`s75-saturno-hubble-heic1917a-real.jpg`).

**Por que passa:** ESA/Hubble, NASA e ESO publicam *artist's impression* no MESMO release, com a
MESMA marca d'água, o MESMO formato de crédito e a MESMA cara de "imagem oficial de agência
espacial" que o registro observado. A heurística que protege contra stock ruim ("veio de fonte
institucional, é real") **falha exatamente aqui** — a fonte é impecável e o conteúdo é desenho. E
como o nome do arquivo já vinha afirmando "saturno-aneis", ninguém depois teve motivo para duvidar.

**A regra:**
1. Em acervo de agência espacial/observatório, **leia o gênero declarado no release** antes de baixar:
   *artist's impression / artist's concept / illustration / simulation / rendering* **não é registro
   real** e não serve onde a narração promete "o que se vê". Registro observado diz o instrumento e a
   data (`Hubble/WFC3, 2019`); ilustração diz o artista ou nada.
2. **O nome do arquivo é uma afirmação, e é a única coisa que a jusante lê.** Nome só pode afirmar o
   que você CONFIRMOU olhando. Não confirmou o sujeito? O nome carrega a dúvida
   (`s75-CANDIDATO-saturno-verificar.jpg`), nunca o assunto pretendido — porque o próximo elo (diretor
   de arte, editor-de-arte, QC) trata o nome como fato apurado.
3. Sujeito **fotografável e famoso** (planeta do sistema solar, monumento, animal, rosto) tem prova
   barata: a forma canônica aparece? Saturno sem anéis, Torre Eiffel sem treliça, zebra sem listra =
   descarta na hora, seja qual for a fonte.
4. Entregou mídia que você não abriu? Isso não é entrega — é dívida repassada. O laudo do
   `pesquisa-imagens` declara, por arquivo, **o que foi olhado**; item sem essa marca vale como
   NÃO ENTREGUE.

**Conserto aplicado (03/ago/2026):** seção 5c no `.claude/agents/pesquisa-imagens.md` (gênero
declarado + nome que não afirma o não-confirmado); arquivo errado movido para
`arquivo-morto/2026-08-midia-mislabeled/`; cena s75 já usava a imagem certa (`heic1917a`), trocada
pelo editor-de-arte do lote C, que achou o defeito.

---

**PESQ-101.** "A PLATAFORMA NÃO TEM ESSE ACERVO" É QUASE SEMPRE A BUSCA, E DEPOIS O PLANO — NUNCA O
   ACERVO (medido em 17/ago/2026, `uruguai-despovoado`, cena `s18-pasto-espalha`, agente-raiz
   `.claude/agents/pesquisa-imagens.md`).
   Uma caça anterior, no mesmo dia e na mesma máquina, registrou por escrito em `_pendencias-stock.md`:
   *"Envato `gaucho` (termo puro) → 'gar fish' e 'gaur'; Envato não tem acervo de gaúcho"* e, para o
   Storyblocks, seis buscas sem um cavaleiro em campo plano. A conclusão virou documento: **ausência
   real**. À noite, o **termo puro `gaucho` no Storyblocks** devolveu **48 resultados com 54% de
   relevância**, incluindo *"gaucho cowboys from Argentina ride horses and watch over their fields and
   flocks"* — exatamente o que se procurava.
   • **O mecanismo, e o próprio baixador o explica em voz alta:** a busca casa os termos em **AND**;
     sem casar nada, a plataforma serve uma **grade semântica de reserva carimbada como resultado
     real** (`listId=searchResults`). As buscas que "provaram" a ausência tinham 5 termos
     (`gaucho argentina pampa horse cattle`, `cowboy horseback cattle open grassland aerial`). Prova
     do mecanismo, colhida no mesmo teste: `arreo de ganado a caballo` (5 termos, espanhol) → **0% de
     relevância** e uma grade inteira de **Granada, Espanha** — o "de" e o "a" casando com topônimos.
     *Grade cheia não é acervo: é a plataforma preenchendo o vazio, e ela não avisa.*
   • **O SEGUNDO filtro, que ninguém tinha medido: relevância textual ≠ DISPONIBILIDADE.** Dos 7
     itens relevantes do Storyblocks, **6 não tinham 4K MP4 no nosso plano** (só HD/ProRes) e o
     baixador os recusou um a um pela régua da marca — `⤼ item N: clipe sem 4K MP4 no catálogo do
     plano (só HD/ProRes) — a marca é 4K sempre`. O item textualmente perfeito era um deles. **O
     acervo existia, o item existia, e mesmo assim não havia o que baixar** — e essa é uma conclusão
     completamente diferente de "a plataforma não tem", porque a alavanca é outra: *plano*, não *query*.
   • **A régua da caça, nesta ordem:** (1) **termo puro primeiro** — uma palavra, a mais específica
     e menos traduzível (`gaucho`, `Ceuta`); só depois some termos, um a um; (2) leia a **linha de
     relevância** que o script imprime — abaixo de ~20% a grade é de reserva e não prova nada;
     (3) quando o item certo aparecer e não descer, olhe o **motivo da recusa** antes de concluir
     ausência: `sem 4K no plano` é limite comercial, `0 itens` é seletor/sessão, e nenhum dos dois é
     acervo vazio.
   ⚠️ **E a conclusão errada custa mais que a busca errada.** "Não existe" vira parágrafo em
   `_pendencias-stock.md`, entra no `midia_ancora` como `FALTA (declarada)` e **desautoriza a próxima
   sessão a procurar** — que foi o que quase aconteceu aqui. Ao declarar ausência, escreva **as
   buscas exatas que a produziram**; foi só relendo-as que se viu que todas tinham 4+ termos, e que a
   [PESQ-46] ("sujeito RARO pede POUCOS termos") estava citada no mesmo documento, aplicada ao plano
   do Shutterstock e **não aplicada às plataformas que estavam abertas**.
   ⛔ **O que continua valendo:** porta fechada (CAPTCHA) e plano sem 4K **autorizam avisar**, nunca
   trocar a fonte por banco gratuito vetado. Os dois únicos itens 4K obtidos aqui foram vistos e
   **recusados por conteúdo** — silhueta em contraluz com mochila escolar (a tela diria "criança indo
   à escola" sob a voz "peões tomam conta de milhares de animais") e cavaleiro em terreno montanhoso
   (a serra contradiz as cenas s34/s35 do próprio vídeo). *Recusar o "menos ruim" continua sendo o
   comportamento certo — o erro nunca foi a recusa, foi o diagnóstico que a acompanhou.*

**PESQ-102.** DOWNLOAD PAGO SÓ EXISTE PARA O PROJETO DEPOIS DE INSTALADO — E ENTRE OS DOIS PASSOS ELE FICA
   INVISÍVEL (medido no `rosto-da-formiga`, 20/ago/2026, na estação ARTE):
   • **O fato:** `/dados/tmp/cacaB/` guardava **25 clipes 4K do Envato com `manifest.jsonl`** em 12 tags deste
     projeto, baixados em **09/ago**. O disco do projeto dizia `footage 1/47 · foto 0/42`, o `conceito-visual`
     trazia 88 `midia_ancora: "FALTA — …"` e a doutrina do vídeo repetia havia 9 dias que a arte estava parada
     esperando caça. **A caça já tinha acontecido.** Instalados, aqueles clipes destravaram **9 cenas pendentes**
     — inclusive 4 mães de run fundido — sem gastar um download novo.
   • **A raiz é de ARQUITETURA, não de execução:** a caça escreve em `/dados/tmp/<lote>/<tag>/` e a instalação
     (`scripts/stock/_instalar-lote.mjs`) é um passo SEPARADO, disparado à mão. Sessão que morre entre os dois
     deixa o ativo pago num diretório que **nenhum gate do projeto lê**: `aplicar-ancoras-pesquisa.mjs` só
     promove FALTA→asset olhando `_media/`, o `_cobertura-midia.json` conta `_media/`, e o `--listar` classifica
     pela âncora. Todos concordam — e todos estão medindo o lugar errado.
   • **Por que não aparece como erro:** nada falha. O `tmp` não é apagado, o manifest está lá, a procedência está
     preservada. O sintoma é o CONTRÁRIO de um alarme: é a produção seguindo em frente convicta de que falta
     material que já foi comprado. *Ausência de mídia se declara pelo que EXISTE no disco inteiro, nunca pela
     pasta que o gate escolheu olhar.*
   • **A regra:** antes de declarar bloqueio por falta de mídia — e antes de disparar caça nova —, varra os
     diretórios de trabalho da caça (`/dados/tmp/caca*`, `/dados/tmp/stock-*`) procurando as tags do SEU slug.
     Achou? Instale com `_instalar-lote.mjs` (que já faz o transcode da [REND-47] e declara a procedência do
     manifest) e só então meça o que falta. Caçar o que está no disco é pagar duas vezes pelo mesmo clipe.
   • **Duas ressalvas que a instalação em massa precisa declarar, e que só se veem OLHANDO o nome do arquivo:**
     (a) **espécie divergente** — o clipe de `s71-salto-inseto` era **gafanhoto**, e a fala é sobre a **pulga**;
     instalado com nota proibindo rotulá-lo como a pulga (usar só como analogia de salto). (b) **animação
     vendida como registro** — 3 clipes traziam `3d animation` no nome para cenas cujo brief pedia registro REAL;
     instalados com nota, e onde havia equivalente real da NASA o real entrou junto e ficou marcado como o
     preferido. *Mídia recuperada do `tmp` não passou por curadoria de ninguém — ela foi baixada e abandonada;
     tratá-la como aprovada é herdar a decisão que a sessão morta não chegou a tomar.*

**PESQ-103.** A PESQUISA ENTREGA NA PASTA DE TRABALHO E O GATE MEDE A PASTA DA CENA — E ENTRE AS DUAS O
   ACERVO INSTITUCIONAL DESAPARECE (medido no `rosto-da-formiga`, 20/ago/2026, estação ARTE):
   • **O fato:** o `_pesquisa-fotos-diario.jsonl` carimbava `s09-mandibulas-serrilhadas · 0 arquivos ·
     sem-arquivo` e `s12-centenas-de-lentes-mosaico · 0 arquivos`. No disco, `_media/_caca-s09/` tinha **seis
     macros focus-stack de formiga** (uma de 5335×3557, domínio público do USGS BIML) e **duas MEV do MUSE de
     Trento** com `_creditos.json` completo — página, licença CC BY-SA 3.0, autor, resolução. Uma delas era a
     MEV do olho composto a 500×, que é a tese literal da s12. **O agente achou, baixou, creditou — e parou um
     diretório antes.** As mesmas imagens destravaram s07 (o SHOWPIECE que dá nome ao vídeo), s09, s12 e o lado
     microscópio do par da s03, sem uma busca nova.
   • **É a [PESQ-102] outra vez, um nível abaixo:** lá o ativo pago morria entre `/dados/tmp` e `_media/`; aqui
     ele morre entre `_media/_caca-<id>/` e `_media/foto/<id>/`, dentro do mesmo projeto. A família é a mesma —
     *quem executa entrega onde é natural para ELE, e quem mede olha onde é natural para o gate* — e nas duas o
     sintoma é o inverso de um erro: um relatório afirmando ausência, com o material a metros dali.
   • **Por que ninguém vê:** `sem-arquivo` é uma resposta LEGÍTIMA da pesquisa (micrografia é acervo escasso, e
     "não achei" é veredito válido e útil). Ela e "achei e deixei no lugar errado" são indistinguíveis no log.
     *Confissão de ausência tem de ser conferida contra o disco INTEIRO da cena, não aceita pelo carimbo* —
     irmã da memória `confissao-de-ignorancia-vira-prova`.
   • **A regra, nas duas pontas:** (a) o agente `pesquisa-imagens` promove para `_media/<tipo>/<id>/` **antes**
     de imprimir o veredito, e converte TIF→JPG na promoção, porque o Chrome não decodifica TIFF e a cena é
     HTML; (b) antes de aceitar qualquer `sem-arquivo`, rode `find out/<proj>/_media -path '*<id>*' -size +0`.
     Achou? É promoção que falta, não caça.

**PESQ-104.** O FILTRO DE DESPACHO DE MÍDIA PERGUNTA AO **PEDIDO**, NUNCA SÓ AO MODO — E A CENA QUE CAI NO VÃO
   É SEMPRE A MAIS CARA (medido no `rosto-da-formiga`, 20/ago/2026):
   • **O fato:** `pesquisar-fotos-cenas.mjs` selecionava por `modo ∈ {foto, split, dados, documento}`. Duas
     cenas ficaram sem executor NENHUM, porque a caça de FOOTAGE também não as pega — o que elas precisam não
     é clipe: `card05-pulga-ampliada` é `titulo-topico` com âncora "macro/micrografia de pulga de perfil", e
     `s07-esmaga-sem-pensar-capacete` é `footage` com âncora "MEV colorizada da cabeça de formiga". A s07 é o
     **showpiece que dá nome ao vídeo**. A sessão anterior já a tinha achado e resolvido À MÃO, uma cena de cada
     vez, sem fechar o buraco que a produzia — e o buraco devolveu a card05 no dia seguinte.
   • **A raiz:** o `modo` diz como a cena se MONTA; a pesquisa responde *de que tipo de imagem ela precisa*. São
     eixos diferentes, e a lista de modos é a [ARTE-259] de novo — tabela digitada à mão que envelhece calada.
   • **A regra:** o filtro é `MODOS_FOTO.test(modo) || PEDE_IMAGEM_PARADA(midia_ancora)`, com o segundo lendo o
     texto do pedido (MEV/SEM/TEM, micrografia, microscopia, focus-stack, radiografia, esfregaço).
   • ⚠️ **E as siglas casam MAIÚSCULAS, sem `/i`:** `SEM` e `TEM` são preposição e verbo em português. Medido no
     minuto seguinte ao conserto: `s18 — footage high-speed de mosca decolando (com ou SEM gesto humano)` entrou
     na fila de micrografia por causa do "sem". *Falso positivo em filtro de despacho não é ruído: é um agente
     inteiro gasto para descobrir que a cena queria outra coisa.*

**PESQ-105.** O MANIFEST MORA ONDE A CAÇA O ESCREVEU — E O INSTALADOR QUE SÓ OLHA UM LUGAR INSTALA MÍDIA PAGA
   SEM PROCEDÊNCIA (medido no `rosto-da-formiga`, 20/ago/2026):
   • **O fato:** `_instalar-lote.mjs` procurava `manifest.jsonl` em três pastas fixas de `~/Downloads` (o hub do
     Mac). A caça em fila da VM grava em `/dados/tmp/<lote>/<tag>/manifest.jsonl`, ao lado do arquivo. Resultado:
     `⚠ sem registro no manifest — procedência NÃO declarada` + `exit 1` **depois** de o clipe já ter sido
     copiado e transcodificado. O arquivo entra no projeto, o `_PROCEDENCIA.json` não recebe a entrada dele, e a
     cena vai ao render com mídia paga cuja origem o estúdio não sabe provar.
   • **O erro não é o dano — a ORDEM é:** a declaração é o ÚLTIMO passo, então todo defeito nela deixa o efeito
     colateral (o arquivo instalado) e perde só a prova. Um `exit 1` no fim parece uma recusa e é uma instalação
     silenciosamente incompleta.
   • **A regra:** procure o manifest do mais específico para o mais genérico — ao lado do arquivo, um nível
     acima, e só então o hub compartilhado (onde nomes repetem entre lotes). E, ao herdar um projeto, confira
     `_PROCEDENCIA.json` contra a contagem de arquivos de `_media/`: a diferença é passivo de registro, e se
     resolve relendo o manifest da caça — nunca recaçando.

**PESQ-106.** CONSERTAR O PRODUTOR NÃO CONSERTA O MEDIDOR — E É O MEDIDOR QUE RESPONDE À PERGUNTA
   (medido no `rosto-da-formiga`, 21/ago/2026, exatamente 24 h depois da [PESQ-103]):
   • **O fato:** a [PESQ-103] nasceu ontem do achado certo — "`sem-arquivo` é resposta LEGÍTIMA da pesquisa, e
     ela e *achei-e-deixei-no-rascunho* são indistinguíveis no log". O conserto foi para o AGENTE
     (`pesquisa-imagens`, nos dois portadores): não deixe candidato no rascunho. Vinte e quatro horas depois,
     **seis cenas** estavam de novo carimbadas `sem-arquivo` com **8, 14, 24, 28, 32 e 83 arquivos** em
     `_media/_caca-*` — 183 arquivos somados, entre eles a MEV colorizada do piolho no fio (Wellcome, CC BY 4.0)
     e as TRÊS micrografias do CDC que a `s59` pedia nome por nome. E duas delas foram **re-pesquisadas**, porque
     o filtro de pendência também só olha o destino: a segunda varredura pagou de novo pelos mesmos candidatos.
   • **Por que o conserto de ontem não pegou:** ele endereçou quem PRODUZ o estado, não quem o LÊ. Produtor
     conserta um caminho; medidor conserta todos — inclusive o agente que morre no meio, o que muda de mão e o
     que ainda vai nascer. Enquanto `midiaDe()` contasse só `_media/<tipo>/<cena>/`, qualquer produtor futuro
     reabriria o mesmo buraco, e o log continuaria dizendo "não achei" sobre trabalho pago dormindo no disco.
   • **A regra:** quando dois estados incompatíveis compartilham um carimbo, **o conserto vai para o medidor** —
     dê nome ao segundo estado e faça a ferramenta MEDIR o que antes era invisível. Aqui: `rascunhoDe()` conta
     `_media/_caca-<curto>/` (ignorando `_grade-*`/`_ver-*`, que são contatos da própria caça), o status vira
     **`rascunho-nao-promovido`** quando destino=0 e rascunho>0, e o condutor lista essas cenas **antes** de
     gastar a primeira busca: *cure, não rebusque*. `sem-arquivo` volta a significar uma coisa só — e passa a
     ser confiável.
   • **O sintoma que denuncia:** cena que a pesquisa declara vazia DUAS vezes seguidas com o mesmo tempo de
     execução. Acervo escasso devolve vazio rápido; agente que baixou e não promoveu gasta 800–1400 s para
     "não achar nada".

**PESQ-107.** PROVA AUSENTE É O PIOR ESTADO POSSÍVEL PARA MÍDIA QUE **EXIGE** CRÉDITO — E A RÉGUA CERTA
   TRABALHA CONTRA VOCÊ NELE (medido no `rosto-da-formiga`, 21/ago/2026):
   • **O fato:** a caça promoveu três micrografias do Wellcome para `_media/foto/s92-o-arpao-farpado/` e não
     escreveu `_PROCEDENCIA.json`. As três são **CC BY 4.0**, licença que EXIGE atribuição. O nome dos arquivos
     dizia `wellcome` — e era exatamente por isso que ele não podia servir de prova.
   • **Por que isso é pior que um erro comum:** a [ARTE-209] manda, com toda a razão, *"prova AUSENTE → não
     credite, nem com a sigla que estiver no nome do arquivo"*. Ela nasceu para impedir atribuição INVENTADA, e
     está certa. Mas num arquivo CC BY sem prova ela produz o dano oposto: o editor-de-arte obedece à risca,
     não credita, e o canal publica imagem sob licença de atribuição **sem atribuir** — com o agente tendo feito
     tudo certo. *Regra boa aplicada a estado ausente não protege: ela executa o defeito com disciplina.*
   • **A capacidade existia e ninguém a chamava:** `qc-procedencia` já reprovava (507 arquivos no projeto) e
     `procedencia-reconciliar.mjs` já sabia transcrever a prova que a pesquisa deixou no disco (70 provas em 11
     pastas, achadas em segundos). Os dois fora do caminho da arte — órfãos no degrau que decide o que vai ao ar.
   • **E o conserto anterior não cobria este caso:** a [PESQ-105] consertou o `_instalar-lote.mjs`. Aqui a
     promoção veio de um script ad-hoc que o próprio agente escreveu para a API do Wellcome. **Conserto no
     instalador não alcança quem não instala** — é a [PESQ-106] outra vez, pelo eixo do CAMINHO em vez do
     medidor.
   • **A regra:** a prova entra no caminho do DESPACHO, não na boa vontade de quem baixou. O
     `desenhar-cenas.mjs` roda `procedencia-reconciliar.mjs --escrever` antes de regerar os dossiês (nesta
     ordem — é o dossiê que carrega o aviso até o agente), com o mesmo contrato do `_brief-arte.mjs`:
     determinístico, sem LLM, segundos, e falha NÃO trava a linha.
   • **O sintoma que denuncia:** pasta de cena com mídia dentro e sem `_PROCEDENCIA.json`. Meça direto —
     `ls _media/foto/<cena>/_PROCEDENCIA.json` — e trate ausência como pendência ABERTA, nunca como
     "provavelmente é livre". Licença permissiva e licença ausente têm a mesma aparência no disco.

**PESQ-108.** "ACERVO ESGOTADO" DECLARADO COM UMA CHAVE DE BUSCA MAIS ESTREITA QUE O ASSUNTO **NÃO ESTÁ
   ESGOTADO** (medido no `rosto-da-formiga`, 21/ago/2026):
   • **O fato:** a âncora das cenas de Demodex declarava esgotamento com rigor exemplar — *"conferido por TRÊS
     caminhos independentes, não repita"* — listando pesquisa-fotos (2×), Wikimedia Commons e Europe PMC, e
     afirmando que *"o Commons só tem a lâmina YPM 1920×1421 e um desenho a nanquim"*. Uma consulta à API do
     Commons com o termo **curto** `Demodex` devolveu **seis registros reais**, entre eles um de **3024×4032,
     CC BY 4.0**, descrito na fonte como *"Demodex sp (human mite) from eyebrows"* — Demodex humano, tirado de
     sobrancelha, que é literalmente o endereço que a narração dá.
   • **A causa:** a busca anterior usara `Demodex folliculorum`, o nome completo da espécie. Termo mais
     específico, resultado mais pobre — e o acervo aberto registra muita coisa só pelo gênero, ou pelo nome
     comum, ou por outra espécie do mesmo bicho.
   • **Por que passou:** o rigor da declaração ESCONDEU a fragilidade dela. Três caminhos independentes soam
     conclusivos, mas os três perguntaram a mesma coisa. *Independência de FONTE não é independência de
     CHAVE — e é a chave que decide o que a fonte devolve.*
   • **A regra:** antes de escrever "esgotado" numa âncora, varra o eixo do TERMO, não só o das fontes: nome
     científico completo · **só o gênero** · nome comum em português e em inglês · o LUGAR ou o gesto em vez do
     sujeito (foi o que a `s39` já tinha aprendido — buscar *o pó nos dedos*, não *a mariposa*). E declare na
     âncora **quais termos** foram queimados, não só quais fontes: a próxima sessão herda a lista e não repete
     a mesma pergunta com outra roupa.
   • **O que fazer com o que se acha assim:** o registro real modesto ganha do ideal inexistente. Aqui a
     técnica pedia MEV colorizada e o acervo só tinha campo claro — usar campo claro real é a escolha certa
     contra render 3D (proibido pela marca) e contra reconceber a cena às pressas.

**PESQ-109.** A RÉGUA DE ID DE CENA ESTAVA CRAVADA NO CÓDIGO E JÁ ENVELHECEU **DUAS** VEZES — NA
   TERCEIRA, DERIVE-A DO PROJETO EM VEZ DE ACRESCENTAR MAIS UMA LETRA (medido no `rosto-da-formiga`,
   21/ago/2026, estação ARTE):
   • **O fato:** o `aplicar-ancoras-pesquisa.mjs` casa arquivo→cena pelo id no caminho, e o casador era
     `[sn]\d+` — `sNN` e `nNNN`. O id do card de tópico é `cardNN`, e `c` não é `s` nem `n`. Resultado no
     `--dry`: `0 promovidas · 40 seguem FALTA`, com **1,7 GB de footage pago e vivo** em
     `_media/footage/cardNN-<nome-exato-da-cena>/` para 4 dos 10 cards. Depois do conserto: **4 promovidas ·
     36 seguem FALTA** — e as 36 são filhas de run fundido, falta que não existe (a mãe cobre a janela).
   • **A reincidência, que é o ponto:** a [PESQ-83] é este mesmo defeito com a família `n`, e o conserto dela
     foi trocar `s` por `[sn]` em **cinco** regexes espalhados. Ela fecha com a frase certa — *régua de id não
     se escreve em literal espalhado por cinco linhas* — e ninguém a executou: a lista continuou literal, só
     que com duas letras. Quando `card` chegou, encontrou os mesmos cinco literais, mais dois que haviam
     nascido depois. **Sete.** *Lei que diagnostica a causa e conserta só o sintoma compra tempo, não imunidade.*
   • **E não eram três famílias — eram cinco.** Medido no parque no mesmo dia: `sNN-` (montador), `nNNN-`
     (narração), `cNN` (id nu — `energia-escura`, `orcas-nao-matam`), `tNN-` (card de título, 5 projetos) e
     `cardNN-` (este vídeo), mais a variante `cTITULO1`. Uma lista literal teria envelhecido pela terceira vez
     antes de alguém a reler.
   • **⛔ Mas alargar o literal para `[snct]` troca o defeito por um PIOR.** O `idDaString` corre sobre TEXTO
     LIVRE dos relatórios, onde *"take t2"* e *"clipe c4"* casariam — e id que casa errado promove a mídia
     **ERRADA**, sem aviso. A própria [PESQ-83] já dizia: cego se diagnostica, colisão silenciosa não.
   • **A regra:** **a régua vem dos ids REAIS do conceito**, que o script já tem em mãos (`IDS_DO_PROJETO`,
     derivado de `Object.keys(conceito.cenas)`), com os prefixos ordenados do mais longo para o mais curto
     (`card` antes de `c`, senão a alternância gulosa come o sufixo). E uma segunda trava, `idConhecido()`, que
     é o que autoriza a primeira a ser larga: id extraído só vale se for cena DESTE vídeo. Vocabulário novo
     passa a funcionar sozinho — não há lista para envelhecer. Provado nos dois sentidos: 11/11 casos de
     unidade (3 famílias casam, 5 impostores recusados), **+4 promoções** aqui, **+1** no `orcas` (`c25`), e
     **zero regressão e zero rebaixamento** nos 13 projetos com `conceito-visual.json`.
   • **A armadilha do próprio banco de teste, que quase virou um achado falso:** para comparar HEAD × consertado
     montei uma árvore espelho em `/tmp` com symlink para `out/` — e **esqueci o `assets/`**. Como o passe
     resolve `assets/…` contra a RAIZ, todo caminho de asset apareceu MORTO, e o HEAD "rebaixou 61 âncoras a
     FALTA" em 7 projetos. Cheguei a escrever que o conserto evitava as 61. Com o symlink no lugar: **0 e 0**,
     nos dois lados. *O número era do meu banco, não do código.* Banco de comparação incompleto não devolve
     erro: devolve um achado grande, plausível e falso — e o viés dele aponta sempre para o lado que confirma
     quem está medindo. **Antes de reportar um delta, rode a MESMA medição contra o estado que você já sabe
     ser normal; se o "antes" acusa um desastre que ninguém nunca viu em produção, o suspeito é o banco.**

**PESQ-110.** A PENDÊNCIA SE CONFERE NO DISCO — E "DISCO" NÃO É SÓ `_media/`: O INSUMO QUE NÃO **MEDE** UM
   ARTEFATO CONDENA O AGENTE A **INVENTAR O ESTADO** DELE (medido no `viagem-no-tempo`, 21/ago/2026):
   • **O fato:** a ordem de compra da regência declarou *"15 cenas carregam `needs.dados` que precisam fechar
     antes de o rótulo entrar"*. Falso em bloco: o espelho pede dado em **20** cenas e havia **20** respostas em
     `_dados/*.json`, gravadas em 18/ago — três dias ANTES da partitura —, todas com fonte e URL, e nenhuma
     declarando "não encontrado".
   • **A causa, e ela não é do agente:** `scripts/regencia-insumo.mjs` media `_media/` por `find` de verdade
     — foi escrito para isso pela [PESQ-56] — e era **cego para `_dados/`**. O insumo passava o `needs.dados`
     do espelho, que é o **PEDIDO**, e nada sobre a **ENTREGA**. O regente só enxerga o insumo; ele reportou
     com fidelidade um mundo que lhe foi descrito pela metade.
   • **O tell que prova a inocência dele, e que é o mais instrutivo:** dois dos casos que ele listou
     nominalmente já traziam no disco **exatamente a conclusão dele** — a unidade impossível da fala em `s27`
     ("dois mil quilômetros" → 1.917 m, com `sugestao_texto_tela` já redigida) e a ausência de cálculo
     primário publicado em `s58`. Ele **descreveu o conteúdo certo e o ESTADO errado**, porque o estado não
     estava no insumo. Achado que descreve certo e prescreve errado é o mais caro de pegar: a prescrição
     chega bem escrita, com justificativa impecável, e despacha `pesquisa-dados` para refazer o que já
     estava pago.
   • **A regra:** a [PESQ-56] foi aplicada à MÍDIA e o dado ficou de fora — e a mesma pergunta vale para
     toda família de artefato que uma estação anterior produz (`_dados/`, `assets/geojson/`, `_media/`,
     `textos-tela.json`). **Antes de um agente escrever "falta X", o montador de insumo tem de MEDIR se X já
     existe** — e medir de verdade: existir não é responder, porque `pesquisa-dados` grava o arquivo mesmo
     quando não achou, e "NÃO ENCONTRADO" é resposta válida do ofício dela. Contar arquivo em vez de ler o
     veredito inverte o defeito.
   • **Por que o conserto é no SCRIPT e não no prompt:** a checagem é determinística (`readdirSync` +
     um teste de veredito), roda em milissegundos e vale para todo projeto futuro. Pedir ao agente que
     "confira também os dados" é pôr modelo para fazer trabalho de script, e depende de ele lembrar.
   • **AGENTE-RAIZ corrigido:** `scripts/regencia-insumo.mjs` — o insumo traz `dados_no_disco` por cena
     como lista de `{arquivo, fechado, assunto, fonte, url, valores, sugestao_texto_tela, veredito}`:
     a relação é **N:N**, com respostas em `_dados/` e `_pesquisa/dados/`, vinculadas pelo nome literal
     da cena ou por `cenas[]`. `null` significa que nenhuma resposta válida vinculada foi localizada:
     **só nessa situação uma cena com pedido entra na ordem de compra por dado.** Uma resposta negativa
     permanece na lista com `fechado: false` e não se recompra. Medido depois do conserto inicial neste
     projeto: 20 cenas com dado no disco, 20 fechadas, 0 em aberto.

### PESQ-111 · A régua do id era DERIVADA em três lugares e literal no quarto — e o quarto é o que varre o disco

**Medido em 22/ago/2026 no `ultimo-dia-dinossauros`, achado pelo próprio caçador ao simular o passe
antes de entregar.** O `aplicar-ancoras-pesquisa.mjs` promove `midia_ancora: "FALTA — …"` para o
arquivo real por duas vias: a **pauta declarada** (o relatório do caçador, com `cena` + `arquivo`
explícitos) e a **varredura do disco** (acha o id no nome da pasta/arquivo). A segunda existe
justamente para o caso em que ninguém declarou — e era ela que estava cega.

O topo do §1 já resolve isso do jeito certo, e o comentário de lá diz por quê: `FAM` é **derivado
dos ids reais do conceito** (`IDS_DO_PROJETO`), com a justificativa escrita de que *"vocabulário
novo passa a funcionar sozinho — não há lista para envelhecer"*, depois de uma lista literal ter
envelhecido pela terceira vez. `FAM`, `FAM_SUF`, `FAMILIA_ID` e `idConhecido` nascem daí.

**E a varredura de disco não usava nenhum dos quatro.** Ela tinha a própria cópia:

```js
seg.match(/^((?:card|[sn])\d+[a-z]?)(?:[-_.]|$)/)
```

`card`, `s`, `n` — **sem `t`**, que é a família do card de título de tópico. Este vídeo tem `t01`
a `t04`; o footage dos quatro estava no disco, na pasta com o nome exato que o conceito pediu, e o
passe seguia imprimindo FALTA. Só a pauta declarada os salvava. Depois do conserto, no mesmo disco
e no mesmo minuto: **3 promovidas → 6**, e as FALTA caíram de 8 para 2 (as duas restantes eram
ausência real de arquivo).

**O conserto NÃO foi alargar o literal para `[snct]`** — o próprio arquivo já avisa, em letras
garrafais, que isso troca um defeito por outro pior: `idDaString` corre sobre TEXTO LIVRE dos
relatórios, onde *"take t2"* e *"clipe c4"* casariam, e id que casa errado promove a mídia ERRADA
sem aviso. Foi fazer a quarta cópia **usar a régua derivada** (`FAM_SUF`), que é larga por
construção e segura porque `registra()` aplica `idConhecido()` — id que não é cena deste conceito
não arquiva nada. Prova lado a lado: `t01`/`t02` saem de `—` para `t01`/`t02`, e `s07`, `s141`,
`s123b`, `card04` continuam idênticos (zero regressão).

**A régua que fica:** *quando um arquivo já deriva a verdade de uma fonte viva, toda cópia literal
que sobrou dentro dele é a próxima a envelhecer — e vai envelhecer sozinha, calada.* O sinal é
gratuito e é sintático: `grep` pelo nome da constante derivada e veja quem, no mesmo arquivo, faz o
mesmo trabalho sem chamá-la. Aqui os comentários das linhas 199 e 217 citavam `FAM_SUF` pelo nome
a poucas linhas de uma regex que não o usava. É a mesma doença que a [[ARTE-256]] achou entre dois
arquivos e a [[ARTE-262]] achou entre duas árvores — aqui, dentro de UM arquivo, entre quatro
linhas. Irmã da [[ARTE-300]] pela consequência: gate que cobre parte dos casos não é meia proteção,
é proteção nenhuma no caso que ninguém mediu.

**PESQ-112.** ⛔ "CONFERIDO POR VISÃO" TEM DE OLHAR O ELEMENTO EM DISPUTA, NÃO O QUADRO — o composto VFX passa
   quando a prova é do PLATE (medido em `ucrania-duas-guerras-uma`, 22/ago/2026, cena `s14-trump-encerra-acordo`).
   O `pesquisa-imagens` baixou um cargueiro em chamas da Envato e declarou na procedência: *"Registro REAL (não
   CGI — conferido por visão: textura de água, veleiro e linha de costa distantes denunciam filmagem)"*. As três
   provas estão CERTAS e são todas do **plate** — o mar, o veleiro e a costa são filmagem verdadeira mesmo.
   **Nenhuma delas fala do FOGO**, que é o elemento composto e o único que a cena precisava que fosse real.
   • **O que o segundo olhar viu, nos frames t=1/4/7/9,5s:** sombra da fumaça na água como faixa cinza chapada,
     em linha reta para a câmera, sem acompanhar a ondulação nem a direção do sol · cunha preta de aresta reta à
     direita do casco, estendendo-se além da linha do navio · bola de fogo destacada dentro da fumaça, borda
     nítida e cor uniforme · **casco e superestrutura em luz de dia limpa, SEM reflexo do incêndio ao lado**, com
     a água encostando no navio uniformemente azul. Fogo real de porte ilumina o convés e alaranja a água: a
     ausência de interação luz→cena é a assinatura mais barata de composição, e a mais fácil de não procurar.
   • **A REGRA:** ao julgar autenticidade, primeiro NOMEIE o elemento que a cena precisa que seja real (o fogo, a
     explosão, a multidão, o dano), e só então procure prova DELE. Prova de que "o vídeo é filmagem" não é prova
     de que "o acontecimento é filmagem" — plate real com elemento inserido é exatamente o material que os
     acervos vendem, e ele é 4K, resolve, tem licença e **passa em todos os gates determinísticos**.
   • **Por que é caro:** a cena narrava "novos ataques iranianos a navios". Incêndio fabricado sob afirmação
     noticiosa é fabricar evidência visual de um fato — a falha mais grave possível num canal jornalístico, e
     nenhum gate desta casa a pega. Pego por acaso, por um caçador de OUTRA cena que reconheceu o mesmo asset id.
   • **Consequência prática:** na procedência, declarar o campo `natureza` (`registro` · `composto VFX` · `CGI` ·
     `encenação`) SEMPRE que houver evento dramático no quadro, e dizer de qual ELEMENTO a prova fala. Material
     de acervo com fogo/explosão/destruição entra sob suspeita de composição até prova do contrário.
   Irmã da [[PESQ-22]] (print de loja não é o objeto) pelo mecanismo: prova do continente vendida como prova do
   conteúdo. Ver também `achado-descreve-clipe-pelo-nome-do-arquivo` — lá o nome mentia, aqui a prova era parcial.

> **Redação paralela integrada em 03/set/2026.** Duas sessões documentaram este mesmo
> defeito no mesmo dia, na worktree de um vídeo e na `main`. Fiquei com a redação mais
> completa e trouxe abaixo os parágrafos que só a outra tinha — nenhum argumento se perdeu,
> e a lei continua uma só, com um número só.

---

A caça grava de duas formas, e as duas são legítimas:

```
_media/footage/s103-segurou.../s103-p1-salvador.mp4    ← família no primeiro nível
_media/s02-linha-riscada-em-1494/s02-cantino-1502.jpg  ← pasta da CENA, sem família nenhuma
```

O detector de cobertura filtrava com `caminho.startsWith(familia + "/")`. O segundo layout não casa com
isso — então ficava **invisível nas duas portas ao mesmo tempo**: não contava como cobertura *e* não
aparecia como candidato a reuso. Toda cena arrumada assim nascia com "0 no disco", e cada beat
imprescindível dela virava ordem de compra.

**Medido:** 74 das 110 cenas caíam no buraco. A lista mandava caçar **43 itens; depois do conserto,
4** — e os 39 restantes estavam pagos, com nome quase literal do que o beat pedia (pedia *"planisfério
de Cantino, 1502"* com `s02-cantino-planisferio-1502-estense.jpg` na pasta; pedia Bolívar e San Martín
com os dois retratos de Gil de Castro lá dentro). Beats cobertos: **43 → 97**.

**A regra:** *quem mede acervo mede o DISCO, não a convenção que ele imagina que o disco segue.* Onde
a família não estiver no caminho, quem responde é a **extensão** — um `.jpg` na pasta da cena serve a
`foto_real` e a `documento_real`, que é como a caça de fato salva. E o primeiro nível só desqualifica
quando é uma família declarada *diferente*.

⚠️ **Mesma família da [PESQ-110]**, que consertou `geo` (o `geo: []` que tornava toda a família
incapaz de achar qualquer coisa). Duas portas, um defeito: **o cabeçalho do script promete "mídia no
acervo é do PROJETO, não da pasta que a batizou" e a implementação lia a pasta.** Quando um arquivo
diz uma coisa no comentário e outra no código, é o código que roda.

⛔ **E CUIDADO COM A PORTA OPOSTA, que este conserto ABRE:** ampliar o pool faz cena de 0 arquivos sair
de `CAÇAR` para `REUSO` com candidato ruim, porque o casamento por token é frouxo de propósito
(`hits >= 2 || score >= 3,2`). Medido logo depois: ofereceu **"Juan de la Cosa, 1500"** (cartógrafo)
para o beat que pede **"Juan Manuel de Rosas"** (caudilho, 350 anos depois) — casou por *"juan"*; e
**urna funerária marajoara** para o **trono imperial**, por *"museu nacional"*. **`REUSO` não é
veredito, é sugestão** — o próprio script diz "ele conta, aponta e mostra o candidato; a escolha é de
quem lê". Rebaixar dívida real a sugestão fraca é pior que a lista inflada, porque some do radar em
vez de gritar. *Não mexi no limiar: ele foi calibrado contra casos medidos e eu não tinha banco de
teste — e [banco de teste incompleto vira achado falso].* A defesa que existe hoje é humana e está
nesta lei: **em cena com `naCena = 0`, leia os candidatos um a um antes de aceitar reuso.**

*Corolário que vale para todo detector de acervo: o estado "não achei" tem duas causas — **não existe**
e **não sei procurar** —, e elas se parecem no relatório. Antes de comprar o que a lista manda comprar,
pegue UM item, procure com `find -iname` e olhe. Se o arquivo estiver lá, o defeito é do detector, e a
lista inteira está suspeita.*

### PESQ-117 · insumo é lista com id, não prosa em três artefatos (10/set/2026)

> ⚠️ **Nasceu como PESQ-112 e virou PESQ-117 em 11/set/2026.** Duas linhagens paralelas destilaram lei no mesmo dia e as duas leram "o próximo número livre" no seu próprio clone: a PESQ-112 original ("conferido por visão" tem de olhar o elemento em disputa) já estava no `main` e ficou com o número, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[PESQ-112]" que fale de *insumo é lista com id, não prosa em três artefatos* aponta para cá.


**A arte pode RECUSAR cena sem insumo — mas alguém precisa ter a OBRIGAÇÃO de alimentar antes dela.**
Enquanto a falta só é descoberta na porta da arte, ela é descoberta pela estação mais cara da casa,
uma cena por vez, depois de paga.

Medido em 10/set/2026, nos três vídeos em produção, quando o dono perguntou *"por que estes mapas
estão sem GeoJSON? … os 36 footages esperando caça, por que ninguém tá caçando? Onde que tá esse
gargalo?"*:

- `petroleo-foz-do-amazonas` — 10 cenas de mapa recusadas porque `anp-bloco-fza-m-59.json` e
  `ibge-uf-ap-16.json` **não existem em lugar nenhum do disco**. O espelho cita os dois caminhos,
  **com sha256**, desde o dia em que foi escrito. Mais 8 cenas paradas por navio-sonda e contorno
  da Guiana ausentes.
- `estreito-de-ormuz` — 30 cenas de footage esperando caça.

**O gargalo não era falta de agente.** `pesquisa-geo`, `pesquisa-imagens`, `pesquisa-logos`,
`pesquisa-pessoas`, `pesquisa-documentos` e `pesquisa-dados` existem, funcionam, e a estação
`pesquisa` roda entre o espelho e a arte. O gargalo era **falta de LISTA**: a pendência estava
declarada em PROSA, espalhada por três artefatos que ninguém cruzava — `needs.geo/dados/logos/midia`
no espelho, beats `footage_real`/`foto_real`/`documento_real` na regência, `midia_ancora: "FALTA — …"`
no conceito visual.

*Prosa não é fila.* Sem lista não há fila; sem fila não há quem cobre; e o que ninguém cobra não
tem prazo, não tem dono e não dá erro. Foi assim que 30 cenas de footage esperaram sem que nada, em
lugar nenhum, emitisse um som.

**A régua:** toda necessidade de insumo tem de virar LINHA COM ID, derivada por script dos artefatos
que já a declaram, com status, arquivo-alvo e histórico de tentativa. A unidade é a NECESSIDADE, não
a cena (uma cena espera por quatro coisas) nem o agente (um agente atende necessidades de muitas
cenas): é a necessidade que fecha ou não fecha.

**E três consequências que só aparecem quando a lista existe:**

1. **O determinístico vem primeiro, e não é agente.** Com a lista na mão dá para perguntar o que já
   está no disco: o acervo `assets/geojson/` tem 323 malhas versionadas, e **29 necessidades de
   geometria dos três vídeos já estavam prontas** — `estreito-ormuz.json` inclusive. Mais as malhas
   de país, que `geo-pais-completo.mjs` resolve por script. Mandar o `pesquisa-geo` buscar na
   internet o que está a dois diretórios daqui é queimar a cota mais cara da casa no trabalho mais
   barato dela.
2. **Entrega vazia SEM evidência é `bloqueado`, nunca veredito.** A owner do Ormuz mediu 23 sessões
   de pesquisa: UMA fechou o manifesto. As 22 pararam entre 61 e 80 retornos de ferramenta, todas em
   `stop_reason: "tool_use"` — ainda trabalhando quando o orçamento acabou —, e 16 tinham trabalho
   pronto no staging: 113 arquivos, 2,96 MB de ativo pago. O estúdio registrava `nao-encontrado`
   para todas. *Corte de orçamento virando decisão editorial é a forma mais cara de mentir: o vídeo
   passa a esperar por mídia que já está no disco.*
3. **Porta fechada não autoriza trocar de fonte.** Sem túnel residencial provado, footage fica
   `pendente` com o motivo escrito — e não pode existir caminho no código que chegue a fonte
   proibida. Em 29/jul uma sessão "resolveu" o bloqueio migrando para Pexels/Pixabay/Coverr:
   `especies-humanas` 17 de 20 vídeos contaminados, `uruguai-despovoado` 16 de 21, `orcas-nao-matam`
   7 de 16. Porta fechada autoriza **avisar**.

**Onde isso mora:** estação `insumos` entre `textos` e `arte` (`scripts/estudio/fila.mjs`), ledger
`out/<slug>/_insumos.json` derivado por `scripts/estudio/insumos-ledger.mjs`, motor em
`scripts/estudio/insumos.mjs`, gate por cena em `scripts/qc-insumos.mjs` — consultado pelo
`desenhar-cenas.mjs` antes de cada despacho, para que cena sem insumo **não receba agente**.

### PESQ-113 · O trabalho de pesquisa já pago fica invisível dentro do checkpoint, e a estação manda refazê-lo (10/set/2026)

**O que aconteceu (10/set/2026, `petroleo-foz-do-amazonas`).** Dez cenas de mapa estavam paradas
esperando `anp-bloco-fza-m-59.json` e `ibge-uf-ap-16.json`, e o diagnóstico corrente — repetido em
três documentos — era que os arquivos "não existem em lugar nenhum do disco". Não existiam no
disco: existiam no BUCKET, dentro de
`_operacao/<run>/checkpoints/pesquisa-paid-20260906-01/checkpoint.tgz`, com os sha256 **iguais aos
que o espelho crava** (`08a3c61d…`, `085d0c79…`). A sessão de `pesquisa-geo` rodou em 06/set,
entregou 17 geometrias, foi arquivada — e o que se perdeu foi a VISTA dela.

**Por que dói.** Ativo pago que ninguém enxerga é indistinguível de ativo que não existe, e a
diferença aparece na fatura: a estação de insumos ia despachar 20 sessões de `pesquisa-geo`, a 150
turnos cada, para reencontrar o que estava a um `tar xzf`. Pior que o custo é o efeito colateral:
enquanto a caça não voltasse, o gate manteria as cenas BARRADAS — uma produção parada por falta de
material que ela já tinha comprado.

**A regra.** Antes de despachar qualquer `pesquisa-*`, procure o insumo nesta ordem: acervo
versionado → projeto → `_operacao/<run>/` → bucket → **checkpoint pago**. O checkpoint é o último
degrau e o mais esquecido, porque parece arquivo-morto e não é: ele carrega o `manifest.json` (que
diz o que há dentro, sem baixar o pacote) e o shard `pauta-pesquisa` (que diz, por escrito, qual
arquivo serve qual cena, com sha256, features e bbox conferidos).

**O que NÃO fazer, e por quê.** Não aceite casamento frouxo em nome da economia. Duas travas
nasceram de falsos positivos medidos no mesmo dia: (1) o "item único da cena" valendo para todas as
necessidades dela fechou quatro bacias com a geometria da quinta; (2) o casamento por token comum
fechou as cinco pela palavra "bacia". Marca que as irmãs compartilham não separa ninguém — só
empresta ao casamento a aparência de precisão. *Foi a economia que quase abriu a porta para o
defeito que o ledger existe para matar.*

**Onde isto vive:** `scripts/estudio/insumos-bucket.mjs` (`resgatarDeCheckpoints`,
`casarComPautaPesquisa`), com 26 testes contra um bucket injetado.

### PESQ-114 · A trava da faixa barrava o próprio caçador: o pai reservava o recurso e o filho esperava por ele (10/set/2026)

Quando um orquestrador reserva um recurso para a faixa inteira e depois despacha FILHOS que precisam
do mesmo recurso, a trava deixa de proteger e passa a bloquear. A identidade da trava é
`host/PID/plataforma`, e o PID do filho nunca é o do pai — então o filho espera o tempo inteiro e
desiste.

Medido em 10/set/2026, na estação de insumos do `estreito-de-ormuz`: o `insumos.mjs` tomava a trava
de `storyblocks` para a faixa (dono `estudio-top10/1225506/storyblocks`) e despachava o
`pesquisa-imagens` (PID 1226857, **filho direto** dele), cujo prompt manda rodar `baixar.mjs
storyblocks`. Vinte e cinco minutos de sessão paga sem um único download, sem navegador aberto.

⚠️ **O estrago não aparece como erro, e é aí que ele custa caro:** a faixa terminaria com exit 0,
cada necessidade registraria "nada foi baixado nesta tentativa", e o estúdio concluiria "não achei
mídia" sobre uma caça que NUNCA ABRIU O NAVEGADOR. É o morto-silencioso vestido de veredito
editorial — a mesma família do "exit 0 sem ter feito nada".

**A régua: quem reserva para a faixa tem de deixar o executor da faixa usar a reserva.** A saída é
RESERVA DELEGADA por PARENTESCO de processo — se o dono da trava é ancestral de quem pede, a vaga já
é daquela execução, e a propriedade protegida (no máximo um caçador por conta) continua intacta,
porque o ancestral não caça: ele orquestra.

⛔ **Parentesco, não flag.** Parentesco é fato do sistema operacional, verificável e local à máquina;
variável de ambiente é opção que alguém liga por engano — e é assim que trava vira decorativa.

⚠️ E o teste que fecha o buraco não é o do caso feliz: é o dos três que NÃO podem herdar — processo
sem parentesco, dono em OUTRA máquina (o Mac e a VM dividem a conta, não a árvore de processos) e
trava malformada.

### PESQ-115 · Entrega paga dentro do workspace da própria sessão é invisível para o ledger (10/set/2026)

Sessão de pesquisa em workspace isolado entrega dentro do PRÓPRIO workspace
(`top10-arte-<cena>-<hash>/_media/geo/<cena>/…`). Se a rodada é interrompida antes da promoção, esses
workspaces ficam preservados no bucket — e o derivador do ledger, que procura em
`<staging>/_media/<tipo>/<cena>/`, não olha para lá.

Medido em 10/set/2026 no `estreito-de-ormuz`, `_stagings-preservados-20260910-Q/`:
**16 workspaces · 5,9 MB · 122 objetos em `_media`**, com `_PROCEDENCIA.json` e `_VALIDACAO-GEO.json`
ao lado. Depois de importados, o ledger foi de `geo/pronto 12 · pendente 74` para
`geo/pronto 82 · pendente 4`.

**69 necessidades de geometria fechadas por 5,9 MB de download.** A ~20–30 min por sessão de
`pesquisa-geo`, era o equivalente a **23 a 35 horas de agente** prestes a ser gasto de novo, do zero,
sobre geometria que já estava no bucket, conferida e com procedência.

É a [PESQ-113] outra vez — *ativo pago que ninguém enxerga é indistinguível de ativo que não existe* —
mas com um agravante que a 113 não cobre: ali o ativo estava num CHECKPOINT (formato que a estação já
sabia abrir); aqui ele está numa árvore de trabalho de sessão, que é o formato natural de toda entrega
interrompida. **O lugar mais provável de achar pesquisa paga é o rascunho de quem foi cortado.**

O verbo é `node scripts/estudio/insumos-importar-staging.mjs <slug> --de=<pasta> [--aplicar]`, e ele
carrega três regras: só `_media/`; extra é REGISTRADO e não recusado (arquivo sem necessidade casada
continua sendo trabalho pago); destino existente com conteúdo diferente é conflito e não é tocado.

**A régua, para além desta ferramenta:** antes de despachar caça, procure o rascunho da sessão que
morreu. A ordem completa de busca é acervo → projeto → `_operacao/<run>/` → **workspace preservado** →
bucket → checkpoint pago.

### PESQ-116 · Logo institucional tem POLÍTICA DE USO, e achar o símbolo não é ter direito de exibi-lo (10/set/2026)

**O que aconteceu.** O logo do **USGS** foi entregue para o `terremotos-america-do-sul` e a owner
teve de **retirá-lo da cena**: o USGS proíbe o uso do identificador dele sem permissão escrita
prévia. Conferido na fonte primária no mesmo dia
(`usgs.gov/information-policies-and-instructions/use-trademarked-usgs-identifier-non-usgs-organizations`):
o identificador é **marca registrada** e organização não-USGS *"must request a copy of the
identifier through its USGS client or contact"*.

**Por que passou.** Por uma inferência que parece raciocínio sólido, e que ninguém escreve porque
parece óbvia demais: *"é agência federal dos EUA, obra de governo americano é domínio público, logo
o símbolo é livre"*. O **§105** põe em domínio público a **OBRA** — o dado, o mapa, a foto — e
**não cobre a MARCA**. São dois regimes jurídicos diferentes, e o segundo continua valendo com toda
a força. O dado do USGS se usa à vontade; o símbolo dele, não.

⚠️ E o repositório de mídia livre não desfaz isso: ele declara a licença **do arquivo** (quem
desenhou aquele SVG, sob que termos), **não** a política da **instituição** sobre o uso da marca
dela. SVG disponível lá não é autorização.

**A régua.** Antes de entregar qualquer logo, **abra e leia a política da própria instituição** —
*visual identity system*, *brand guidelines*, *logo policy*, *crediting*. Três desfechos, e os três
são entrega:

| a política diz | o que se faz |
|---|---|
| **livre** / uso editorial permitido | entrega o arquivo, com a `licenca` citada e a URL onde foi lida |
| **exige autorização prévia** | ⛔ **não entrega o arquivo.** Registra `licenca_status: "proibido"`, a citação e a URL, e entrega no lugar o **crédito em texto** que a instituição prescreve |
| **não achou política** | `licenca_status: "a_confirmar"`, com o que se procurou. Quem decide o uso é o dono |

**Não se fica sem nada:** a mesma instituição que proíbe o símbolo costuma PRESCREVER o crédito em
texto, com a frase pronta. A do USGS é `"(Product or data name) courtesy of the U.S. Geological
Survey"`. *Crédito em texto é a entrega; o logo é que era o atalho.*

⛔ **E "a instituição proíbe" NÃO é "não achei" — confundir os dois manda recaçar para sempre.** Sem
essa distinção, a sessão que LÊ a política e faz a coisa certa fecha com `não existe em fonte
permitida`, que é falso duas vezes: o arquivo existe, e o que falta não é fonte — é autorização. A
sessão seguinte lê isso e vai procurar de novo o que não está faltando. O veredito é `dispensado`
com a razão real, e ele carrega o `credito_em_texto` num campo próprio: quem monta a cena lê campo,
não parágrafo.

**Onde isso mora:** §5.1 e §7 do `.claude/agents/pesquisa-logos.md` (mais a linha 2b da tabela de
validação e o §5 do bloqueio), o bloco de `tipo: "logo"` do `montarPrompt` e o ramo `proibido` do
`julgarTentativa`, ambos em `scripts/estudio/insumos.mjs`. A escala do que estava em risco quando a
regra nasceu: **24 necessidades de logo** no `terremotos-america-do-sul`, das quais **9 são o
identificador do USGS**, e 30 no `petroleo-foz-do-amazonas`.

**A irmã desta lei é a [PESQ-33]** (porta fechada não autoriza trocar a fonte — autoriza avisar): as
duas dizem que uma barreira externa não se contorna por conta própria. Ela se DECLARA, com o
registro do que a barreira é. Aqui a barreira é jurídica em vez de técnica, e a diferença é que
esta não dá erro nenhum: o arquivo baixa, a cena monta, o QC passa, e quem descobre é a owner.
> ⚠️ **Nasceu como PESQ-113 e virou PESQ-118 em 11/set/2026.** Outra linhagem já havia ocupado o 113 no mesmo dia — as duas leram "o próximo número livre" no seu próprio clone. A PESQ-113 original (o trabalho de pesquisa já pago que fica invisível dentro do checkpoint) ficou com o número, e esta foi renumerada para o gate de ID repetido do `regras-todas.mjs` voltar a passar. Citação antiga "[PESQ-113]" que fale de *`nao-encontrado` gravado por runtime anterior ao conserto do envelope* aponta para cá.

**PESQ-118.** ⛔ `nao-encontrado` GRAVADO POR RUNTIME ANTERIOR AO CONSERTO DO ENVELOPE NÃO É CONCLUSIVO — RE-EXECUTE
   ANTES DE TRATÁ-LO COMO VEREDITO (medido em `estreito-de-ormuz`, 10/set/2026, 23 sessões de pesquisa geo).
   `claude -p --max-turns N`, quando estoura o orçamento, para em `stop_reason: "tool_use"` e emite um envelope
   **sem o campo `result`** (`{"is_error":true,"num_turns":2,"stop_reason":"tool_use",…}`). Antes do conserto,
   `interpretarEnvelope` (`scripts/lib/cascata.mjs`) abria com `!("result" in cru) → return null`, e a mensagem
   final virava `INSUMOS_PESQUISA_RECUSADA: sem resultado`. O estúdio gravava isso como `nao-encontrado`.
   *"Estourei o orçamento"* e *"essa mídia não existe"* viravam a mesma frase. A primeira pede repetição com mais
   turnos. A segunda é veredito editorial: tira a mídia do vídeo, dispensa a necessidade no ledger, empurra a
   cena para re-espelho.
   • **A prova:** das 23 sessões, **1** fechou o manifesto (`end_turn`, 90 retornos de ferramenta). As **22 cortadas**
     pararam entre 61 e 80 retornos, todas em `tool_use`, contra `--max-turns 60`. **Taxa de sucesso do teto: 4%.**
     E o trabalho não estava só perdido, estava no lixo: **16 dos 23 stagings tinham entrega real — 113 arquivos,
     2,96 MB de GeoJSON com procedência — em `/tmp`**, descartados por falta do `entrega-insumos.json` que o agente
     não chegou a assinar. O `G27` do Ormuz fechou com 27 "não encontrado" assim.
   • **Os consertos, e o marco que decide:** `3978c658d` (10/set 03:06Z) passou a exigir `pesquisa_verificada`, com
     buscas concluídas lidas da transcrição, para gravar `nao-encontrado` (`classificarEntregaVazia`, em
     `scripts/lib/pesquisa-execucao-evidencia.mjs`). `9687d7ca9` (10/set 03:26Z) fez `interpretarEnvelope` devolver
     `orcamentoDeTurnos: true` quando `subtype === "error_max_turns"` ou `stop_reason === "tool_use"`, marcando o
     caso como **RETOMÁVEL**.
   • **A REGRA:** `nao-encontrado` sem o campo `pesquisa_verificada`, ou gravado por um runtime cujo `cascata.mjs`
     não tem `orcamentoDeTurnos`, **não fecha nada**. Antes de dispensar a necessidade, re-espelhar a cena ou
     comprar substituto:
     1. **Olhe o staging, não o recibo:** `find <staging>/out -type f` mostra o que o agente já entregou. A última
        mensagem da transcrição (`<staging>/cli/projects/**/*.jsonl`) com `stop_reason: tool_use` quer dizer
        **cortado**, não fracassado. Entrega real no staging se adota; não se caça de novo.
     2. **Re-execute** pelo runtime atual (com os dois commits acima), com teto de turnos que caiba no trabalho.
        Só o `nao-encontrado` que sair de lá, com `pesquisa_verificada.buscas_concluidas > 0`, é veredito.
     3. **`/tmp` some no boot:** preserve os stagings antes de desligar a VM. É o único lugar onde a entrega
        cortada existe.
   • **Como saber se o runtime é anterior:** `grep -c orcamentoDeTurnos <runtime>/scripts/lib/cascata.mjs` dá `0`,
     ou `git -C <runtime> merge-base --is-ancestor 9687d7ca9 HEAD` sai diferente de zero.
   • **O que ESTA lei não derruba:** um negativo que chega como RELATÓRIO de busca, com as URLs sondadas, os termos
     rodados e o motivo de cada recusa, é conclusivo pelo conteúdo, qualquer que seja o runtime. Foi o caso das 6
     cenas do evento de 10/08 do `terremotos-america-do-sul` (busca urgente em fontes oficiais, relatório com 14
     produtos USGS listados e sites que devolveram 403), e o re-espelho delas se apoiou nisso. O que não é
     conclusivo é o **envelope vazio que alguém traduziu em frase**.

*Mesma família da [PESQ-111] e do corolário da [PESQ-110]: "não achei" tem mais de uma causa — não existe,
não sei procurar, **não terminei de procurar** —, e as três se parecem no relatório. A doença geral é a dos
mortos-silenciosos (SIS): **ausência de resultado é falha a investigar, nunca veredito silencioso.***

### PESQ-119 · A rota do card do Envato dura semanas — e o `--diag` que não mostra o que a página TEM obriga a próxima pessoa a escrever o probe à mão (11/set/2026, `terremotos-america-do-sul/t-c011`, agente-raiz `scripts/stock/baixar.mjs`)

> 🔀 **Renumerada na integração de 11/set/2026.** Nasceu como `PESQ-113` na árvore de trabalho do checkout compartilhado, destilada em paralelo com outra linhagem. O número antigo já pertencia a outra lei no `main` — pela [SIS-62], quem já está no remoto fica com ele. Citação a `PESQ-113` que descreva ESTE assunto aponta para cá. Nenhuma linha foi perdida.


Duas buscas seguidas no Envato devolveram **`0 itens`** com a mensagem de sempre — *"ou o seletor de
item morreu, ou esta URL não é a busca"*. O screenshot em `_debug` mostrava **a grade CHEIA**, a
sessão logada («20 créditos restantes», menu de Assinaturas) e a busca certa na caixa. Ou seja: a
página estava certa, a rota estava certa, a conta estava certa — o seletor é que não casava mais.

`a[href*="/search/footage/"]`, recalibrado em **13/ago**, durou **29 dias**: os cards agora vivem em
**`/search/stock-video/`**.

⚠️ **O mais caro não foi a virada — foi o diagnóstico parar em "0".** O `--diag` media rota, seletor,
sessão e anti-bot, e para a terceira causa (seletor morto) dizia só *quantos casaram*, que é sempre
zero justamente quando se precisa dele. O dado que decide é barato e estava na página: **o censo dos
`href` por prefixo.**

```
14 × /search/stock-video   ← os cards
 1 × /stock-video             (item do menu lateral, NÃO é card)
 0 × /search/footage          (a rota de agosto não existe mais)
```

Uma linha e a hipótese se fecha: **prefixo de mídia presente e diferente do seletor ⇒ recalibre, a
rota está boa; nenhum prefixo de mídia ⇒ a rota é que está errada.** O censo entrou no `--diag` e só
roda quando `total === 0`. Efeito medido na mesma busca: **0 → 24 itens colhidos.**

✅ **O seletor ACUMULA rota em vez de trocar.** As três ficam (`/search/stock-video/`,
`/search/footage/`, `/photos/`): a antiga não casa hoje e não custa nada, e evita que a próxima virada
— ou uma conta servida por um A/B velho — volte a devolver zero. **A barra final separa o card do
menu:** o item de menu aponta para `/stock-video` puro e não casa.

⛔ **A armadilha que isto desarma é de LEITURA, e ela reincide:** "0 resultados" e "0 casados" saem
idênticos no log, e a conclusão barata — *"a plataforma não tem esse assunto"* — manda trocar o termo
de busca, depois trocar de plataforma, e por fim declarar a necessidade impossível. Nenhum desses
passos toca na causa. **Antes de culpar o termo, olhe o screenshot: grade cheia com zero casados é
sempre ferramenta, nunca acervo.**

⚠️ **E existe uma QUARTA causa do "0 itens", medida no mesmo dia e na outra plataforma — a única que
se cura sozinha, repetindo.** As três que a mensagem de erro citava são falhas de FERRAMENTA (seletor
morto · rota que não é busca · anti-bot). A quarta é de TEMPO: a grade é pintada por JavaScript e,
com a máquina carregada, o coletor roda antes de ela existir.

Medido em 11/set/2026, caçando rua às escuras para a `t-s118`: o Storyblocks devolveu **`0 itens`** e
o screenshot em `_debug` mostrava, escrito na própria página, **«119 results found for city blackout
night»** — com a área da grade em BRANCO. **Repetir a MESMA busca, sem trocar uma letra, devolveu
83% de relevância e 48 resultados.**

O conserto entrou na mensagem de erro: quando o seletor casa zero, o caçador agora lê o contador que
a própria página publica e diz *"0 itens casados, mas a PÁGINA declara «119 results» — não é falta de
acervo"*, apontando a repetição como primeiro remédio e o `--diag` como desempate.

⛔ **A armadilha é sempre a mesma e é de LEITURA, não de código:** "0 resultados" lido como *"a
plataforma não tem esse assunto"* manda trocar o termo, depois trocar de plataforma, e por fim
declarar a necessidade impossível — três passos caros, nenhum deles tocando na causa. **Antes de
culpar o termo, olhe o screenshot.** Grade cheia com zero casados é ferramenta. Contador alto com
grade em branco é tempo. Nenhum dos dois é acervo.
---

## PESQ-123 — O DEGRAU "PROJETO" DA BUSCA POR ATIVO PAGO SÓ EXISTIA NA DOUTRINA, NÃO NO CÓDIGO

A [PESQ-113] manda procurar o que já foi pago nesta ordem: **acervo → PROJETO → `_operacao/<run>/`
→ workspace preservado → bucket → checkpoint pago**. Cinco desses degraus viraram código. O
segundo — o mais óbvio de todos, o próprio diretório do vídeo — não.

`casarComPautaPesquisa()` nasceu dentro do modo `--de-bucket`, para runtime isolado, e por isso as
duas funções que localizam o shard (`shardsNoStaging`, `resgatarDeCheckpoints`) só olham para
`_checkpoints/`. Um projeto que RODA na máquina onde a pesquisa rodou tem o shard no lugar mais
banal possível — `pauta-pesquisa.json` na raiz, `_pesquisa/pauta-<especialidade>.json` ao lado — e
**ninguém o abria**.

Medido em 14/set/2026 no `compilado-poder-militar-china-eua`: **224 itens de pesquisa entregue, 171
com arquivo, 171 presentes no disco** — e o ledger derivava **131 necessidades `pendente`**, com
**69 cenas barradas**. A estação ia despachar `pesquisa-dados`, `pesquisa-geo` e `pesquisa-logos`
para reencontrar o que a estação anterior tinha entregado, no mesmo diretório, três dias antes.

**Ligar os shards locais fechou 99 das 131 sem um único turno de inferência** — pendentes 131 → 32,
cenas barradas 69 → 24.

### Os três defeitos, e os dois primeiros falhavam CALADOS

**1 · O item diz onde o arquivo está, e a função jogava fora o endereço.** `escolhido.arquivo` vem
em duas formas porque as duas pontas escrevem o shard: o runtime isolado grava o caminho ABSOLUTO
da máquina dele (`/q/a.json`), que aqui não existe e tem de ser reconstruído pela convenção; a
pesquisa que roda DENTRO do projeto grava o RELATIVO (`_media/geo/china.json`), que é exato. Só a
convenção era consultada, e ela crava `assets/geojson/` para geo — pasta que este projeto não tem.
*A função procurava o arquivo no lugar onde ele estaria se tivesse vindo de outra máquina, tendo em
mãos o endereço de onde ele estava.*

**2 · O consolidado duplica o shard de origem, e o desempate conta ITENS.** A pesquisa escreve por
especialidade e depois consolida. Ler as duas camadas — que é o certo, porque nem todo projeto tem
as duas — faz cada item chegar em dobro. E as duas únicas portas por onde um item vira `pronto`
(`porNome.length === 1` e `daCena.length === 1`) contam itens: com tudo dobrado, **nenhuma abre
nunca**. 342 itens lidos, 171 arquivos reais, **zero casamentos, zero erro, zero log**. *A trava que
existe para impedir a geometria errada passou a impedir a geometria certa, e do jeito mais caro:
calada.* A dedução é pelo ARQUIVO RESOLVIDO, nunca pelo nome — dois homônimos em pastas diferentes
seguem sendo dois candidatos, e a cena com dois candidatos segue sem casar.

**3 · O `dado` respondido não tem arquivo, e por isso escapava de todo mundo.** O insumo de um
`dado` é o NÚMERO com a fonte que o sustenta: dos 86 itens de `dado` da pauta, **53 não têm arquivo
nenhum** — têm `valores[]`, `fonte`, `url` e `dataConsulta`, que é a entrega inteira. `casarComPauta
Pesquisa` só lê item COM arquivo, então nem os enxergava. `casarDadosComPautaPesquisa()` é a porta
deles, com a régua de sempre: valor E fonte, as duas metades, porque o valor é o que vai à tela e a
fonte é o que o sustenta quando alguém contesta.

### ⛔ A trava que NÃO se afrouxa, e o motivo de ela valer aqui também

O desempate é por **marca discriminante**: as palavras do `o_que` desta necessidade que as IRMÃS da
mesma cena NÃO têm; vencedor único e estritamente superior; empate volta para agente. É a mesma
régua que impediu quatro bacias de fecharem com a geometria da quinta, e ela se prova no caso
difícil: a `s025-plano-quinquenal` pede **três** dados (número do plano · série SIPRI do orçamento ·
crescimento do PIB) e a pauta traz três respostas — cada uma achou a sua.

⚠️ **Mas a trava do verbo de ordem NÃO se transporta.** `classificarDadoDeclarado` recusa linha que
começa em "Confirmar…"/"Verificar…" porque ali o texto é do MONTADOR, e verbo de ordem é pedido de
trabalho por escrito. Na pauta-pesquisa o texto é a **resposta do agente que foi confirmar**: o
pedido dele fica em `pedido`, o que ele achou fica em `resposta`. *Recusar a resposta porque a
pergunta começava em "Confirmar" seria jogar fora exatamente o trabalho que se mandou fazer.*

### A régua geral

**Capacidade que nasce dentro de um modo herda as suposições daquele modo.** Esta nasceu para o
bucket e ficou com o layout do bucket cravado — pasta de destino por convenção, shard só em
`_checkpoints/`, item sempre com arquivo. Nenhuma dessas três é verdade fora de lá, e as três
falharam sem ruído, porque "não casei nada" é indistinguível de "não havia nada para casar".
*Ativo pago que ninguém enxerga é indistinguível de ativo que não existe* — e um casamento que
devolve zero merece a mesma desconfiança que um que devolve demais.

---

## [PESQ-120] Fonte na internet é perecível — prova é a transcrição literal gravada na COLETA, não o link (14/set/2026, `petroleo-foz-do-amazonas` s129)

A [PESQ-66] manda conferir se a URL está viva antes de citá-la, e continua valendo. **Esta lei é o
degrau seguinte, e o caso que a produziu é um acerto, não um erro.**

Na `s129-simulado-aprovado`, o `pesquisa-dados` coletou a notícia do MME de 25/09/2025 e gravou, no
`_PROCEDENCIA.json`, **duas** peças: o dado em JSON **e uma transcrição literal e integral** da
notícia, com sha256 próprio, marcada `tipo: "prova-textual"` e com o aviso
*"Transcrição — não editar nem parafrasear o bloco abaixo do separador"*.

**Onze meses depois, a URL original responde 404.** O registro já sabia: o `aviso_de_uso` declara o
404 e aponta a captura do Internet Archive de 05/12/2025 em `url_arquivada`. **A cena continua
provável hoje** — citação conferível palavra por palavra, licença declarada (`CC BY 3.0 BR`,
`exige_credito: true`) e o crédito cumprido na tela (`MME · 25/09/2025 · CC BY 3.0 BR`).

> **A lei:** *link é endereço, não prova.* Quem guarda só a URL tem prova enquanto o servidor de
> terceiro quiser; quem grava **a transcrição literal no momento da coleta** tem prova para sempre.
> A diferença aparece meses depois, quando não há mais como voltar e coletar.

**O que gravar, toda vez que uma citação for para a tela:** (1) o texto **integral e literal** da
fonte, em arquivo próprio com sha256; (2) a URL original **e** a URL arquivada; (3) a data da
captura; (4) a licença e se ela exige crédito. Parafrasear na coleta destrói a prova — o grifo
progressivo e o QC factual precisam do texto exato.

**Por que isto não é zelo excessivo:** o custo de gravar é um arquivo de texto no momento em que a
página já está aberta. O custo de não gravar é descobrir, na véspera da entrega ou depois da
publicação, que **a única prova de uma afirmação em tela era um link que morreu** — e aí a escolha é
entre tirar a cena ou publicar sem lastro. *"Tínhamos fonte" e "temos prova" só se distinguem depois
que o link morre.*

⚠️ **Não confundir com preservar a MÍDIA.** Aqui se preserva o **texto que sustenta a afirmação**.
Redistribuir o arquivo de terceiro é outra questão, e ela se decide pela licença — a mesma régua da
[ARTE-315]: pagar ou ter acesso não é ter permissão.

---

## [PESQ-121] Aviso de mídia que só enumera o proibido empurra para o DESCARTE — diga também o que está liberado (14/set/2026, `petroleo-foz-do-amazonas` s086)

O `_avisos-arte.json` existe para que o desenhista saiba o que **só se descobre abrindo o arquivo**.
Ao escrever o aviso da `s086-respiro-fpso-guiana` — um FPSO real cujo casco traz **«ENERGEAN POWER»
legível em 4K**, navio do campo de Karish, no Mediterrâneo, num vídeo sobre a Foz do Amazonas —, as
quatro primeiras linhas saíram todas duras: não nomeie o navio, não deixe o nome legível, o QC reprova
no frame, não reabra por conta própria.

**Lidas juntas, elas não protegem a peça: condenam-na.** Quem recebe quatro alertas seguidos sobre o
mesmo arquivo conclui, razoavelmente, que ele é problemático — **e troca o take**. Isso custa três
coisas de uma vez: caça nova que não precisava acontecer, cota de plataforma gasta à toa, e o descarte
de um 4K all-intra **já pago e já normalizado** (REND-47), que é ativo pronto.

**Por isso a quinta linha entrou, e ela é um «está tudo certo»:** *licença de assinatura Envato — uso
comercial permitido, NÃO exige crédito em tela; arquivo já normalizado 3840×2160 · 30 fps · all-intra;
nada a creditar, nada a reprocessar.*

> **A lei:** *todo aviso de mídia declara as duas colunas — o que trava e o que libera.* Restrição sem
> permissão ao lado não é cautela: é um empurrão para jogar fora trabalho pago. E o custo do descarte
> é invisível no laudo, porque a peça descartada não deixa defeito — deixa só uma caça a mais.

**O que escrever na coluna do liberado, quando houver:** a licença e se ela **dispensa** crédito ·
o tratamento técnico já feito (formato, taxa, all-intra) · e, explicitamente, *«nada a reprocessar»*
quando for o caso. Se não houver nada liberado a declarar, diga isso também — silêncio nessa coluna é
lido como ausência de permissão.

⚠️ **O que é medido e o que é previsto, declarado:** o caso da `s086` é **medido** (o nome no casco
está no `_PROCEDENCIA.json`, conferido por recorte 1:1 sobre a proa; o arquivo está normalizado e a
licença é de assinatura). **O descarte é previsto, não observado** — a cena ainda não foi redesenhada
quando esta lei foi escrita. A previsão se apoia num padrão que a casa já mediu: a [ARTE-104] registra
consertos *«que erram para o lado de "a mídia real não está lá" — o lado que manda descartar trabalho
pago»*.

Irmã da **[PESQ-68]** pelo outro lado: aquela diz que, achado um segundo objeto no quadro, *«a saída
não é descartar: é rotular cada objeto ou dizer onde fechar o corte»*. Esta diz **como escrever isso**
para que a saída não-descartar seja a que o leitor toma.

### PESQ-122 · Cobertura de mídia medida pelo CAMINHO conta o sidecar e faz a pasta vazia passar por cheia (14/set/2026, `compilado-poder-militar-china-eua/s042`, agente-raiz `scripts/regencia-reabrir-pesquisa.mjs`)

O passo 5 da regência fechou com **`✓ nada a caçar`** num vídeo onde uma cena tinha **zero vídeo no
disco**. A pasta `_media/footage/s042-anfibios-desembarque/` continha exatamente dois arquivos —
`_PROCEDENCIA.json` e `manifest.jsonl` —, e nenhum deles é mídia.

A causa é de uma linha. O primeiro ramo de `daFamilia()` devolvia `true` pelo **prefixo** do caminho:

```js
if ((EQUIV[fam] || []).some((a) => m.startsWith(a + "/"))) return true;   // ⛔
```

Então `footage/<cena>/manifest.jsonl` contava como footage, `contaNaCena('footage')` devolvia 2, os
dois beats imprescindíveis entravam em "cobertos pela própria cena" e a cena **nunca virava pedido**.
Medido: **20 pares (cena, família) inflados e 40 sidecars contados como mídia** — em 19 deles não
custava nada, porque a cena tinha mídia real de sobra; em s042 custava a única ordem de compra
verdadeira do vídeo.

⚠️ **O grave não é a contagem errada — é o ESTADO em que a cena cai.** Ela não saiu como `CAÇAR` nem
como `COBERTO`: saiu **de nenhuma das duas listas**. Um número inflado numa lista ainda se confere; a
cena ausente das duas não tem onde ser conferida. *Cobertura medida pelo caminho, e não pelo conteúdo,
dá 100% de zero: a pasta vazia vira coberta e a ordem de compra some em silêncio.*

⛔ **E o conserto ÓBVIO tem regressão — meça antes de aplicar.** A correção natural é exigir
`EXT[fam]` no primeiro ramo. Aplicada crua, ela **apaga 67 logos e bandeiras oficiais** do acervo:
`EQUIV.foto` inclui `logo`, e `EXT.foto` não cobria `.svg`, que é como a casa guarda
`logos/csis.svg`, `logos/lockheed-martin.svg`, `logos/bandeira-china.svg`. O efeito seria toda cena
que cita uma instituição pedir **caça de logo já paga** — a [PESQ-56] de novo, pela porta que este
arquivo existe para fechar. Um defeito trocado por outro, e o novo mais caro.

✅ **A régua certa não é "família × extensão", é _mídia × sidecar_:**

```js
if ((EQUIV[fam] || []).some((a) => m.startsWith(a + "/"))) return EXT[fam].test(m) && !SIDECAR.test(m);
```

com `svg` reconhecido em `foto`/`documento`, e `SIDECAR` excluindo `_PROCEDENCIA`/`manifest`/`.bak`/
`.cjs` **por nome e por extensão** — porque para `geo` a extensão sozinha não decide: a geometria
também é `.json`.

**A prova que autoriza mexer numa peça compartilhada é a de NÃO-REGRESSÃO, e ela é barata.** Rodar o
script nos 6 projetos com `regencia.json` antes e depois, e comparar pedido a pedido: **nenhum pedido
sumiu em nenhum deles** — o conserto só revela. 11 pedidos antes invisíveis apareceram, e as pastas
`geo/` que guardam bandeira `.png` mantiveram a cobertura porque têm 9–10 `.json` de geometria junto.
*Conserto de gate que só mostra o que passou a acusar não prova nada; o que prova é a lista do que
ele parou de acusar estar vazia.*

⚠️ **O achado veio do agente auditado, e ele estava certo de origem.** O `regente-de-imagem` mediu o
defeito, escreveu a causa, propôs o conserto e **não o aplicou** — declarou que a decisão era do
editor-chefe, e deixou a ordem de compra de s042 escrita à mão na própria auditoria, com as duas
queries, o destino e os cinco substitutos proibidos. *Agente que encontra defeito na porta que
consome o trabalho dele deve declarar e seguir entregando, nunca consertar peça compartilhada da 24/7
no meio da própria estação.* O que a casa acrescenta a isso é a medição da regressão: a proposta dele
estava certa no diagnóstico e incompleta no remédio.
### PESQ-124 · Um asset tem UMA procedência, e ela mora na pasta da cena — declarar de novo no `_media/_PROCEDENCIA.json` global TRAVA a arte (14/set/2026, `compilado-poder-militar-china-eua`, agente-raiz `pesquisa-imagens`)

`procedenciaPorAsset` sobe da pasta do arquivo até `_media/` recolhendo toda declaração pelo caminho.
Achando duas para o mesmo clipe, ela **lança** `PROCEDENCIA_ENTRADA_DUPLICADA` — e está certa: duas
procedências são duas respostas para "de onde isto veio", e escolher uma por conta própria é como
crédito errado chega à tela.

Medido: **35 assets em 19 cenas** declarados no global E na pasta da cena. O custo não é o erro — é
ONDE ele aparece. O driver de arte despachou 15 cenas, o agente rodou inteiro em cada uma (17 a 118 s
de inferência paga) e só encontrou a porta fechada na hora de ler o insumo: **15 despachos, 15 falhas,
zero HTML**. *Gate que reprova depois do gasto é gate que cobra o preço cheio para não entregar nada.*

**As duas declarações não competem — e é isso que torna o conserto delicado.** O global foi escrito
pelo caçador no ato do download (`arquivo_original`, `resolucao`, `baixado_em`, `maquina`, `ip_saida`,
`url`); o local foi costurado depois, com a CURADORIA (`papel`, `por_que_esta`, `validado_por_visao`,
`descartados_por_visao` — o que foi olhado e rejeitado, com motivo). Apagar o global perde a prova de
download; apagar o local perde curadoria paga por visão. **Fundir, nunca escolher:** base local, o
global entra só no que falta, e divergência de granularidade vira `_declaracao_do_lote` em vez de
descarte. O verbo é `node scripts/procedencia-fundir-duplicata.mjs <proj> [--aplicar]`, e ele só funde
o par cuja identidade PROVA (id/título do local cruzado contra url/arquivo_original do global) —
fundir declarações de assets diferentes seria fabricar procedência, o único dano que ele pode causar.

✅ **De quebra, a duplicata escondia a cura da outra metade:** o `qc-procedencia` aceita rastro por
`entrada.url` ou chave `id*` **no topo**, e a declaração local guardava o id dentro de `fonte_detalhe`
— aninhado, invisível para o gate. A `url` que faltava veio justamente do global.

**A regra para quem caça:** promoveu o arquivo para `_media/<tipo>/<cena>/`, a procedência vai ALI e
em nenhum outro lugar. Se já existe entrada para esse arquivo no `_media/_PROCEDENCIA.json` global,
**mova-a** (funda e remova de lá) em vez de escrever a segunda.

### PESQ-125 · Nota de status não é declaração de procedência — e ela cita o arquivo do mesmo jeito (14/set/2026, mesmo vídeo, agente-raiz `scripts/lib/procedencia-por-asset.mjs`)

Ao lado da entrada real do clipe, a pesquisa grava o andamento da necessidade: `_resolvido_lado_catapulta`,
com `status`, `por`, `atencao` e um campo `arquivo` apontando para o MESMO mp4. A própria nota diz
*"ver a entrada do arquivo acima para a prova completa"* — ela não declara fonte nenhuma, só registra
que a metade direita do split fechou e que a esquerda (rampa de porta-aviões chinês) segue em aberto.

O leitor casava as duas e reprovava `PROCEDENCIA_ENTRADA_DUPLICADA` sobre um asset que tem **uma**
procedência. Três cenas (s111, s112, s418) travadas por um registro que existia para AJUDAR quem
viesse depois.

**A régua usa duas marcas juntas, porque nenhuma sozinha basta:** prefixo `_` é a convenção de
metadado desta casa (a mesma de `_fonte_comum`, e a que `pastaTemMidia` aplica a nomes de arquivo), e
**ausência de `fonte` é o que separa anotação de declaração** — declarar de onde veio é a única coisa
que toda procedência faz. Exigir as duas significa que uma declaração de verdade com chave
`_alguma-coisa` continua sendo lida, e que anotar o andamento deixa de ser perigoso.

Medido nos três projetos com `_media/`: o compilado foi de 3 assets irresolvíveis para **0**;
`petroleo-foz-do-amazonas` (21) e `terremotos-america-do-sul` (1) ficaram **inalterados** — os erros
deles são de outra causa e não foram tocados.

---

## [PESQ-126] Pexels e Pixabay SAEM do veto — a régua deixa de ser a FONTE e passa a ser a ESPECIFICIDADE (14/set/2026)

**Palavra do Mateus, por escrito, em 14/set/2026:**

> *«Sobre o Pexels/Pixabay, eu já falei que PODE usar ambos para coisas REAIS, nesse caso do anfíbio
> chinês se lá tem, PODE USAR SIM. O que eu não quero que usem de lá são footages genéricos, tipo:
> escolher um carro anfíbio nada a ver que tem lá (que não é chinês) pra ilustrar essa cena que pede um
> anfíbio chinês. Ou seja, Pexels/Pixabay podem SIM, e devem ser consultados, como uma fonte adicional
> de candidatos de footages.»*

**A lei:** *a coisa na imagem é a coisa nomeada?* Um anfíbio chinês real no Pexels **serve**; um anfíbio
russo no Shutterstock **não serve**. Mídia genérica sob afirmação específica não serve em plataforma
nenhuma, nem nas assinadas. **O defeito de 29/jul nunca foi a plataforma: foi imagem genérica pondo-se no
lugar da coisa nomeada** — e ler a plataforma como causa fazia a casa DEIXAR DE PROCURAR onde o registro
verdadeiro podia estar, declarando `NÃO_ENCONTRADO` cedo demais.

### O alcance, exato

- ✅ **Pexels e Pixabay** — permitidos, como fonte adicional de candidatos, com `_PROCEDENCIA.json`
  declarado como qualquer acervo.
- ⛔ **Coverr, Unsplash, Videvo, Mixkit e Freepik continuam vetados.** O dono não falou deles, e liberar o
  que não foi liberado é afrouxar por arrasto.
- ⚠️ **Não religa nada:** as chaves de Pexels/Pixabay seguem desativadas no `.env` e as funções de busca
  seguem retiradas do código. Religar é credencial e trabalho, e é passo separado.

### A licença, conferida no documento — e por que isso muda a CLASSE

Lido em 14/set/2026:
- **Pexels License:** *"Attribution is not required. Giving credit to the photographer or Pexels is not
  necessary but always appreciated."*
- **Pixabay Content License:** *"Use Content without having to attribute the author (although giving
  credit is always appreciated by our community!)"*

**Logo, crédito NÃO é obrigatório** — e a peça entra no gate como classe própria, **`licença aberta`**, e
**não** como `atribuição` (que é a do Vecteezy e declara crédito obrigatório). Rotular como atribuição
poria na tela um crédito que a licença dispensa, e crédito supérfluo é reprovação na lente `fonte`
([ARTE-41]). *O pedido original mandava pô-los em `ATRIBUICAO`; o documento mostrou que seria o erro
simétrico ao do MapTiler ([ARTE-315]) — lá a casa não creditava o que devia, aqui creditaria o que não
precisa.*

**As restrições que as licenças impõem, e que o QC visual precisa conhecer:** pessoa identificável não
pode aparecer de forma ofensiva ou em má luz; não se usa como marca registrada; e a do Pixabay proíbe uso
*"in a misleading or deceptive way"* — **que é, literalmente, a régua da especificidade.** O dono e a
licença dizem a mesma coisa por caminhos diferentes.

### A fronteira que esta lei NÃO atravessa

⛔ **O gate de procedência NÃO julga específico × genérico.** Ele garante que a **origem está declarada**.
Se a coisa na imagem é a coisa nomeada é julgamento editorial, e mora na lente de **cobertura/factual**
do `qc-visual`. *Prometer no gate o que ele não mede é produzir um verde que não quer dizer nada.*

### Como a lei virou código — e as duas armadilhas que o pedido escondia

**1 · O veto não morava num lugar só.** A lista de acervo vetado estava **copiada em quatro arquivos que
executam**: `scripts/qc-procedencia.mjs` (o gate), `scripts/procedencia-declarar.mjs`, o
`scripts/estudio/despachante.mjs` 24/7 e o `scripts/estudio/observatorio.mjs`. **Mudar só o gate teria
feito o anfíbio chinês passar no QC e continuar marcado como «sujo» pelo despachante.** As quatro passaram
a importar **`scripts/lib/marcas-acervo.mjs`**, a fonte única. *Quatro cópias da mesma regra divergem —
e divergem exatamente no dia em que a regra muda.*

**2 · Armadilha A, medida por mutação.** A régua de negação da [SIS-456] reconhecia a oração de não uso
listando marcas vetadas — *«Nenhuma peça veio de Pexels, Pixabay ou Coverr»*. Tirar só os dois nomes da
lista faria a frase deixar de casar, e o «Coverr» dentro dela voltaria a reprovar a cena. **Provado:** com
a mudança ingênua, **7 testes reprovam**, incluindo a regressão original da SIS-456. A régua de negação
passou a usar `MARCAS_CONHECIDAS` (vetadas + liberadas): negar uso nunca é rastro de uso.

**3 · O import novo entrou nas listas de peças.** `qc-procedencia.mjs` está na lista MANUAL do ofício da
VM de render (`scripts/estudio/publicar-oficio.sh`) e em **dois palcos** de teste que o copiam como pacote
fechado. Sem a lib nas três listas, o render morreria em `ERR_MODULE_NOT_FOUND`. **Provado por mutação:**
removida a linha do ofício, `oficio-fechado.test.mjs` reprova nomeando `marcas-acervo.mjs`.

### Os testes: reescritos, não apagados

Os testes que usavam Pexels/Pixabay como **exemplo** de marca vetada passaram a usar **Coverr/Unsplash**,
que continuam vetados — porque o que eles protegem é o **mecanismo** da SIS-456 (URL vence a prosa,
negação não pega carona, nome carimbado reprova), e isso independe da marca. A frase histórica da SIS-456
ficou **intacta**, para provar a armadilha A. Testes novos provam a regra nova: Pexels/Pixabay com
procedência **passam** na classe `licença aberta`; Pexels **sem** procedência cai em SEM PROVA como
qualquer acervo; e **Coverr, Unsplash, Videvo, Mixkit e Freepik continuam reprovando** — o controle de que
o veto não afrouxou por inteiro.

### O que é medido e o que não é

**Medido:** o texto das duas licenças (lido no documento em 14/set/2026); o comportamento do gate nos
dois sentidos; as duas armadilhas, por mutação. **Não medido:** nenhum footage de Pexels foi julgado por
especificidade nesta mudança — isso é do QC visual, caso a caso.

**Supera, na parte da PROIBIÇÃO DE FONTE, as [PESQ-33], [PESQ-35], [PESQ-36] e [PESQ-37]** — marcadas lá,
cada uma com o que dela continua vivo.

✅ **ONDE ESTA LEI EXECUTA (16/set/2026) — a busca foi RELIGADA no código** ([PESQ-129]: lei que libera
nomeia o ponto de execução). O «religar é passo separado» desta lei foi dado em duas metades:

| metade | onde | estado |
|---|---|---|
| código | `scripts/lib/acervo-livre-fontes.mjs` (adaptadores `pexels`/`pixabay`, entradas no registro de fontes) | religado — busca, baixa pela porta e procedência como qualquer fonte livre |
| chaves | `.env` da VM: `PEXELS_API_KEY`, `PIXABAY_API_KEY` | **sob a Infra**; a fonte só conta como ligada quando o `--diag` rodado da release devolve `status: ok`; sem chave, a etapa registra `sem_chave` e segue |

O que a religação trouxe além do «ligar», tudo medido na documentação oficial em 16/set:
- **Marca vetada que mora num site liberado é recusada.** O exemplo oficial da API do Pixabay traz um vídeo
  de `"user": "Coverr-Free-Footage"`: liberar a plataforma não libera a Coverr. Lista única: `MARCAS_VETADAS`.
- **A resolução é a do ARQUIVO entregue.** O Pexels declara o vídeo em 4096×2160 e pode entregar um arquivo de
  640; o Pixabay declara `imageWidth` do original e entrega `largeImageURL` de 1280 sem acesso completo.
- **A restrição comercial do Pixabay é CONDICIONAL** a marca/logo reconhecível — a frase solta proibiria tudo.
- **Os termos da API do Pexels pedem crédito ao fotógrafo quando possível**, embora a licença o dispense:
  ressalva no candidato, não exigência.

---

## PESQ-127 · A guarda que recusa o ATALHO protege contra o operador com pressa — e é ela que segura a régua do dono

> 🔒 ID **reservado** antes de escrito (`reservar-id-lei.mjs --dominio=PESQ`, sem faixa: o alocador
> pegou o próximo livre e o **reservou**, em vez de alguém lê-lo).

**Medido em 15/set/2026, caçando o terceiro plano da `ormuz-s107`.** Busca boa — 92 % dos 24
primeiros citando algum termo, 48 resultados — e mesmo assim:

```
⤼ 16 itens: clipe sem 4K MP4 no catálogo do plano (só HD/ProRes) — a marca é 4K sempre
✗  2 itens: download não iniciou (timeout 150s)
0/3 baixados   (16 pulados por regra da casa — NÃO é falha)
```

**O caçador recusou baixar HD**, item a item, dizendo o motivo. E a frase que ele imprime é do dono:
*«esqueça o HD, HD não faz parte da minha filosofia, e eu nunca economizaria pra colocar HD no lugar
de 4K»* — uma preferência declarada que virou **guarda executável**.

⚠️ **A tentação era real e invisível:** HD teria «resolvido» a cena. O clipe entraria, o QC de
cadência fecharia, e o defeito só apareceria com o vídeo em 4K na tela — quando refazer custa o
lote inteiro. *O atalho que a pressa escolhe é sempre o que não dá erro hoje.*

**A mesma família, na mesma pasta:** `baixar.mjs --soListar` **desliga o `acceptDownloads`** — com
ele, o Chrome **cancela** qualquer download, e nem um clique errado gasta um dos 100 do dia. As duas
guardas têm a mesma forma: *não pedem disciplina, tornam o atalho impossível.*

**A LEI:**

1. **Preferência do dono que importa vira guarda no código, não linha na doutrina.** Doutrina é
   seguida quando alguém lembra; guarda é seguida sempre. A régua do 4K só segurou hoje porque
   alguém a escreveu em `baixar.mjs`, e não só no `CLAUDE.md`.
2. **A guarda diz o motivo, item a item.** «16 pulados por regra da casa — NÃO é falha» é o que
   torna um zero **interpretável**; um zero mudo manda o operador tirar o filtro e rodar de novo.
3. ⛔ **Separe «recusei» de «não consegui» no mesmo relatório.** Aqui: **16 `⤼`** (recusa
   deliberada) contra **2 `✗`** (timeout de download) — e os dois `✗` são falha de verdade, que
   **podiam ser justamente os 4K**. *Um zero que mistura as duas coisas não diz nada, e o que se faz
   a seguir é oposto: com recusa, muda-se de acervo; com timeout, re-tenta-se o mesmo item.*
4. **Porta fechada não autoriza baixar a régua** — autoriza avisar e mudar de acervo. Foi o que
   valeu aqui: Storyblocks sem 4K → Envato, que entregou **dois clipes em 3840×2160**. A [PESQ-12]
   nasceu do oposto disso, quando uma porta fechada virou justificativa para fonte vetada.

*Irmã de [SIS-490] na forma (guarda que recusa) e o inverso dela no resultado: lá o fallback caía
para o caminho proibido; aqui a recusa não oferece caminho pior nenhum.*

### PESQ-128 · CC BY-SA está LIBERADO: exibir a foto num vídeo é coleção, não derivação — e a condição é o crédito COMPLETO (15/set/2026, decisão do Mateus)

**A decisão, do dono, nesta data:** *«pode usar o CC BY-SA»* — dita depois de a diferença entre as
duas licenças ser explicada, e repassada pela Holding.

**A régua, para ninguém reabrir isto:**
- **CC BY** pede uma coisa: **creditar o autor**.
- **CC BY-SA** pede a mesma coisa **e mais uma**: se você criar uma **obra derivada daquela imagem**,
  a derivada sai sob a mesma licença.
- **Exibir uma foto dentro de um vídeo é COLEÇÃO, não derivação** — como um livro que traz uma foto
  não vira obra derivada dela. Derivar seria **alterar a imagem e distribuí-la como imagem**. Por
  isso o «SA» **não contamina o vídeo**, e por isso o dono liberou.
- ⛔ **A contrapartida é dura: crédito COMPLETO, sempre — autor + licença + link, na descrição.**
  Sem o crédito, o BY-SA deixa de ser uso permitido e **vira uso indevido**. É a CONDIÇÃO da
  licença, não um detalhe de estilo. Vale igual para CC BY.

**O que esta lei NÃO decide, e não se deve esticar:** `BY-ND` (proíbe derivada — é o caso do rodapé
do gov.br, `CC BY-ND 3.0`) e `NC` (não comercial, incompatível com canal monetizado) **continuam
fora** — o dono falou de BY-SA. Licença nova pede decisão nova.

**Onde isso vive, e por que não basta estar escrito:** o crédito sai da tela por [ARTE-104] e vai
para `out/<proj>/_atribuicoes-descricao.md`, derivado dos `_PROCEDENCIA.json` por
`scripts/gerar-atribuicoes.mjs` e cobrado por `scripts/qc-atribuicao.mjs`. *Obrigação de licença que
depende de alguém lembrar de colar o texto na descrição não é obrigação cumprida* — é por isso que o
gate cobra a mídia nominalmente, e que a completude do crédito (autor, licença e link) é verificada
em vez de pedida.

⛔ **ONDE A PROVA DE LICENÇA MORA DEPOIS DO `--limpar` — e ela NÃO foi toda perdida.** O
`_PROCEDENCIA.json` vive em `out/<proj>/_media/**`, e o `entregar.mjs --limpar` apaga a cópia LOCAL.
Daí nasceu o registro de que «94 de 96 entregas de 2026 não têm mais prova». **Medido em 15/set/2026:
a cópia do BUCKET sobreviveu** — `gs://…/out/**/_PROCEDENCIA.json` tem **1.805 manifestos cobrindo 38
slugs**, entre eles 24 já publicados. Antes de declarar ausência de prova, procure ali: *o que o
`--limpar` leva é o disco da máquina, não o bucket.* O que de fato não existe é a promoção para
`entregas/<ano>/<slug>/meta/` — medido no mesmo dia: **zero** `_atribuicoes-descricao.md` e **zero**
`_PROCEDENCIA.json` sob `entregas/**/meta/`.

⛔ **E o buraco que isso revelou, medido nos 24 publicados com prova viva:** **21 vídeos no ar usam
mídia cuja licença declarada EXIGE crédito e não têm nenhum sinal de crédito na descrição** —
`piramide-porta-secreta` (98 mídias), `ucrania-duas-guerras-uma` (76), `ultimo-dia-dinossauros` (72),
`sol-artificial-fusao` (58), `senna` (57), `o-acre-o-estado-que-o` (55), `orcas-nao-matam` (47),
`fatos-a380` (46), `energia-escura` (41), `quasares-primordiais` (34), `megabarragem-himalaia` (29),
`terremotos-america-do-sul` (28), `avioes-950` (21), `planeta-em-meteorito` (17),
`ate-que-altura-construir` (16), `dentro-do-sol` (14), `dias-mais-curtos` (11), `viagem-no-tempo` (11),
`galaxia-arco-flecha` (10), `nilo-nao-secou` (3), `um-dia-luz-da-terra` (4). O único com prova viva e
crédito publicado é o `itaipu-afogou`.
⚠️ **O número é LIMITE SUPERIOR e a razão importa:** ele conta licença declarada no manifesto, não
mídia que a cena de fato usou — quem filtra por uso é o `gerar-atribuicoes.mjs`. A lista serve para
abrir os casos, não para afirmar infração em cada um.
⚠️ **Dois achados vizinhos, do mesmo levantamento, ainda NÃO medidos em profundidade:** aparece
`CC BY-NC` declarado (`megabarragem-himalaia`, via The Conversation) — **NC é incompatível com canal
monetizado** — e licença `"a_confirmar"` em `terremotos-america-do-sul`. Os dois pedem medição por
uso, não por manifesto.

⚠️ **Nenhuma doutrina viva desta casa dizia que BY-SA era proibido** — medido nesta data em
`seed/regras`, `knowledge/`, `marcas/` e `.claude/agents/`: o que existia já mandava creditar
(`editor-de-arte`, `mapista`, `pesquisa-imagens`, `review-panel/06`). A decisão não revoga regra
nenhuma: ela fixa o PORQUÊ e torna a condição cobrável.

✅ **ONDE ESTA LEI EXECUTA (16/set/2026) — e a correção da varredura acima.** O parágrafo anterior
mediu **quatro árvores de doutrina e nenhuma de código**, e era no código que a regra decidia: em
16/set a casa ganhou a etapa de acervo livre (`scripts/lib/acervo-livre.mjs`), escrita **um dia
depois** desta decisão, e ela recusava `BY-SA` com o comentário *"decisão do dono, que está em
curso"*. *Lei nova medida só onde as leis moram não encontra o lugar onde a permissão é concedida.*
Hoje esta lei tem ponto de execução e prova:

| onde | o que faz |
|---|---|
| `scripts/lib/acervo-livre.mjs` → `licencaAceita` | aceita `CC BY-SA <versão>`; `NC`, `ND` e share-alike de rótulo estranho seguem fora |
| `scripts/lib/acervo-livre.mjs` → `candidatosDaRespostaCommons` | **a condição**: licença que exige crédito só vira candidato com **autor legível E página de origem**; o descarte é contado em `recusados_por_credito_incompleto` |
| `scripts/testes/acervo-livre.test.mjs` | a prova executável — 15 casos, 5 mutantes pegos, inclusive "o BY-SA volta a ser recusado" |
| `scripts/qc-atribuicao.mjs` | o gate do fim: crédito sem autor, sem licença ou sem link reprova |

**Custo medido do filtro velho, antes de mexer** (6 buscas reais no Commons, 16/set): **68 páginas
acima de 1600 px → 29 aceitos e 10 `BY-SA` descartados, todos com autor legível**. Em
`"nuclear reactor control room"` eram **6 de 9**; em `"ZBD-05 amphibious"`, as **duas maiores do
lote** (6460×3403 e 5568×3712). Num canal cuja regra dura é *«esqueça o HD»*, o filtro velho
descartava preferencialmente os arquivos grandes. **Custo medido da condição nova: zero** — nenhum
dos 29 aceitos perdia autor.

### PESQ-129 · A decisão do dono não viaja para o código sozinha — e o código que nasce depois dela se defende dizendo que ela «está em curso» (16/set/2026)

**O caso, e ele durou um dia.** Em 15/set o dono liberou o `CC BY-SA` por escrito ([PESQ-128]). Em
16/set, outra frente construiu a etapa de busca no acervo livre — código bom, com teste, fixture real
e prova por mutação — e escreveu nela:

> `if (/\bsa\b|sharealike|share alike/.test(n)) return false;   // condição ao derivado: decisão do dono`
>
> *"`BY-SA` … é decisão do dono, **que está em curso**."*

Ninguém desobedeceu. A frente que escreveu **não sabia** que a decisão tinha saído, e a lei que a
registrou **não dizia onde a permissão é concedida na máquina**. As duas metades estavam certas e o
resultado foi errado: um filtro que descarta 10 de 39 candidatos livres — **os maiores do lote** —
citando uma decisão que já existia.

**Por que isto não se resolve avisando melhor.** Aviso depende de alguém lembrar, e o parque tem
sessões paralelas que não se veem. O erro simétrico já tinha acontecido na direção oposta e está
registrado nesta casa: doutrina que descreve um buraco **já tapado** faz consertar o que está certo.
Aqui, doutrina que descreve uma decisão **já tomada** faz travar o que está liberado.

**A regra, em duas linhas:**
1. **Lei que LIBERA ou PROÍBE nomeia o ponto de execução.** Enquanto ela só descrever o princípio,
   ela é uma opinião bem escrita. A [PESQ-128] ganhou a tabela «onde esta lei executa» por isso.
2. **Código que nega algo por decisão de terceiro cita a decisão com ID e data** — `// decisão do
   dono` sem número é um comentário que envelhece sem avisar; `// [PESQ-128], 15/set` é uma âncora
   que a próxima busca encontra.

⚠️ **E a varredura de quem escreve a lei tem de incluir o CÓDIGO.** A minha, em 15/set, cobriu
`seed/regras/`, `knowledge/`, `marcas/` e `.claude/agents/` — quatro árvores de doutrina, nenhuma
linha executável. *Medir onde as regras moram não encontra o lugar onde elas são aplicadas.* É o
princípio de «meça o caminho que EXECUTA, não o artefato» — que a casa vinha aplicando a diagnóstico
de defeito — aplicado à escrita da doutrina.

**O que NÃO se conclui daqui:** que a frente vizinha errou. Ela fez a coisa certa — fechou por
padrão, contou o descarte à parte (`recusados_por_licenca`) *"porque ele é informação: diz quanta
coisa boa está atrás da decisão do BY-SA"*, e levou o desenho para revisão antes de implementar. Foi
esse contador que tornou o custo mensurável em minutos. **Fechar por padrão e MEDIR o que se fecha é
o comportamento correto diante de uma decisão que se acredita pendente.**

### PESQ-130 · O vigia não desmente uma pessoa — `indeterminada` NÃO é porta aberta, e a vigília LIMPA o alarme quando não sabe (16/set/2026)

**O caso, no journal da `estudio-top10`** (`journalctl --user -u top10-vigia-portas`, 16/set):

```
17:02:07Z   · shutterstock: sinal de sessão → vivo=false morto=false → indeterminada
17:02:07Z   ✓ shutterstock: porta aberta
17:02:52Z  ══ 4 aberta(s) · 0 precisando de humano · 0 não medida(s)
            (idêntico às 17:32Z e às 18:02Z)
18:20:01Z  o Mateus escreve «SHUTTERSTOCK RESOLVIDO»          ← relato da Holding
18:24:17Z  `baixar.mjs shutterstock … --soListar`: 12 candidatos ← relato da Holding
18:32:11Z   · shutterstock: sinal de sessão → vivo=true morto=false → viva
```

O CAPTCHA estava na tela e a vigília relatou **porta aberta três vezes seguidas**. A virada para
`viva` só aconteceu depois da mão humana.

**O erro foi de leitura antes de ser de código.** Às 02:30Z do mesmo dia, com o dono pedindo o portão
para resolver um CAPTCHA, a frente do túnel respondeu *"não há CAPTCHA — medido pelo gate"*, citando
exatamente o rodapé `4 aberta(s) · 0 precisando de humano`, e não abriu. O instrumento citado é cego
para esse desafio: ninguém sabe se havia CAPTCHA às 02:30, e a resposta afirmou que não havia.
*Ausência de alarme foi lida como prova de porta aberta* — e contra a palavra de quem estava olhando.

**O mecanismo** — `scripts/stock/vigia-portas.mjs`, a cadeia de decisão de cada plataforma:
`pareceDesafio(txt)` → `nao-medida` → `caida` → assinatura vencendo → **`else`**. A `indeterminada`
não tem ramo próprio: cai no `else`, que imprime `✓ porta aberta` **e chama
`alarme-bloqueio limpar`**. Com o CAPTCHA na tela, a vigília não só deixa de acusar — ela **apagaria
um alarme** registrado por quem viu o bloqueio.

Por que o texto não acusou: **não medido.** Hipótese, e marcada como hipótese — o DataDome desenha o
desafio num `iframe` de outro domínio, e o `document.body.innerText` do quadro principal não o
contém. O `png` que provaria foi sobrescrito na volta seguinte.

**A regra:**
1. **Pessoa que vê CAPTCHA abre o portão.** A vigília pode CONFIRMAR um bloqueio; nunca desmenti-lo.
   Rodapé sem alarme é ausência de alarme — não é prova de porta aberta.
2. **`indeterminada` não se relata como `✓ porta aberta` e não limpa alarme.** Quem não sabe diz que
   não sabe — a mesma régua que o ramo `NÃO MEDIDO` já aplica ao erro de medição.
3. **Qual conta está logada não é motivo para abrir o portão.** Cada visita sai pelo IP de casa, que
   o DataDome já marcou. A conta se mede quando a 2ª conta do Shutterstock for ligada.

**Onde esta lei executa — e onde ainda NÃO executa:**

| ponto | estado em 16/set |
|---|---|
| decisão de abrir o portão, na sessão que recebe o pedido | procedimento: este texto + handoff da frente do túnel |
| `vigia-portas.mjs`, ramo `else` | ⛔ **não executa** — `indeterminada` segue virando `✓ porta aberta` e limpando alarme |

⚠️ **Por que o conserto do `else` não entrou junto com a lei.** Fora o portão
(`login-na-nuvem.sh`, no fechamento), a vigília é o **único** caminho automático que limpa alarme — e
Envato e Motion Array dão `indeterminada` **em toda volta** (o markup delas não expõe avatar nem
botão de entrar; está declarado em `sessao-veredito.mjs`). Parar de limpar no `indeterminada` sem
mais nada deixaria o alarme dessas duas preso até alguém abrir o portão, e trocaria um verde falso
por uma caça parada. O conserto de raiz é um sinal **positivo** do desafio (o quadro do DataDome),
e ele se mede com o CAPTCHA na tela — não se deduz.
