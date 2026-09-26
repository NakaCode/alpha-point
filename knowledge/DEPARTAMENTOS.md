> **[porte Regie]** Origem: `top10-estudio/knowledge/DEPARTAMENTOS.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Este é o organograma do estúdio: vários caminhos (`archive/`, `~/www/...`, `src/agent/*`, `criticos.mjs`) não existem no canal. Vale a divisão de ofícios; as ferramentas deste canal são as do motor (`<motor>/src/ferramentas/`) e os gates em `scripts/`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# DEPARTAMENTOS — o sistema agêntico da EDIÇÃO ponta a ponta (02/jul/2026)

Este repo é a **fábrica de edição** do Canal Top 10 (etapa 7 do ecossistema BIG CÉREBRO — ver
`~/www/_arquivo/repos-2026-07/top10-ecossistema/docs/00-visao-e-pipeline.md`; decupagem/dublagem/publicação vivem em repos irmãos).
AQUI a missão é: **receber o vídeo bruto/roteiro e sair com a edição COMPLETA** — todas as cenas animadas,
renderizadas em 4K e montadas na timeline (XML) prontas pro Premiere.

## Organograma (departamentos → agentes/ferramentas)

### 1. ROTEIRO & PLANEJAMENTO
Transforma o bruto em plano de cenas.
- **Transcrição**: `src/transcribe.mjs` (só ElevenLabs Scribe v2 — WhisperX aposentado) → `words.json`.
- **Roteirista/Diretor de conteúdo**: `archive/era2-api/src/agent/roteirista.mjs` (ARQUIVADO — era API) (`ROTEIRISTA_EFFORT=medium`) → `plano-roteirista.json`
  (cenas com `modo` do CATÁLOGO + tese + inSec/dur + needs). **Continuidade**: `continuidade.mjs` funde blocos.
- **BÍBLIA VISUAL (Diretor de Fotografia — 1× por vídeo, ANTES das cenas)**: quem coordena o vídeo lê o plano
  inteiro e escreve `out/<proj>/biblia-visual.json` — os MUNDOS/cenários-base compartilhados (agrupando cenas),
  paleta aplicada, motivos recorrentes (ícones/elementos que repetem entre cenas), tipografia/pills, transições.
  DECISÃO DE ESTILO É EM CAMADAS: roteirista dá o modo+paleta (macro) → a bíblia dá a coerência do FILME (meso)
  → o editor-de-arte executa cada cena DENTRO da bíblia (micro) → o crítico "tema" cobra a coerência. NÃO existe
  "agente estilista por cena" (lento, caro e gera incoerência — cada cena decidiria sozinha).
- Alinhamento: `scripts/alinhar-timestamps.mjs`.

### 2. PESQUISA & FATOS (abastece as cenas com REALIDADE)
- **Dados**: `cacador-de-dados.mjs` + agente `pesquisa-dados` (APIs/bases oficiais; nunca inventa número).
- **Documentos/estudos**: agente `pesquisa-documentos` — reportagens E **fontes técnicas** (ResearchGate,
  Google Scholar, PubMed, arXiv, SciELO, IEEE, Nature/Science, DOI direto), print de prova → clipping limpo
  traduzido PT-BR estilo telejornal.
- **Pessoas**: agente `pesquisa-pessoas` (LinkedIn/site oficial/gov; visão confirma identidade; nunca rosto fake).

### 3. MÍDIA (imagem/vídeo/logo reais)
- **Footage/foto** **[porte Regie]**: `node <motor>/src/ferramentas/buscar-midia.mjs` (Commons, Openverse, NASA, the Met, DVIDS,
  NARA, Smithsonian, Europeana, Pexels, Pixabay), com licença e procedência gravadas. No Top10 era a biblioteca premium do bucket
  mais o stock assinado do Mateus, caçado no Mac ou na VM; nada disso veio. Pexels/Pixabay: [PESQ-126] em
  `knowledge/FONTES-MIDIA.md`.
- **ÉPOCA (história antiga — fotos/gravuras/mapas históricos)**: Wikimedia Commons + **Europeana** + **NYPL** +
  **Smithsonian Open Access** (chaves no .env, smoke-testadas 05/jul) + LoC/Gallica/David Rumsey via navegador
  headless (API bloqueia curl). Modelos M12 (montagem histórica) e M16 (mapa de época) no catálogo. Fidelidade de
  período é FACTUAL: foto/mapa moderno numa cena de época = reprovado.
- **Logos oficiais**: agente `pesquisa-logos` (NOVO) — órgãos/agências nacionais (ANAC, IBGE, NOAA…) e empresas
  privadas: logo REAL do site oficial/imprensa, SVG/PNG alta, contraste certo. NUNCA redesenhar à mão.
- **Upscale 4K**: `upscale-tools.mjs` (Real-ESRGAN local no M3). **Visão/validação**: Claude (confereImagem).

### 4. GEO & MAPAS
- **BASE ÚNICA (PESQ-21)**: **MapTiler `satellite-v2`** (tile 512) em TODO mapa, 2D ou 3D. ESRI só fallback de
  emergência com cota MapTiler morta; Blue Marble estático e os templates `map-scene.mjs`/`geo-map.mjs`
  APOSENTADOS. Nunca misturar bases entre cenas irmãs do mesmo vídeo.
- **2D**: maplibre CDN sobre a base única; agente `mapista` (validação `scripts/maprender.mjs`). **[porte Regie: não veio — `maprender.mjs`]**
- **3D "drone"**: **terreno DEM real obrigatório** (MapTiler `terrain-rgb-v2` + `setTerrain`, ARTE-31).
  Motor alternativo `~/www/_arquivo/repos-2026-07/mapas-animados/engine` — MapLibre + MapTiler `satellite-v2`,
  câmera cinematográfica (flyTo van Wijk, órbita/bearing-loop, modo Drone Oblíqua rente ao chão), labels travados.
  Upgrade futuro: `~/www/animacoes-com-google-maps` (Cesium + Google 3D Tiles fotorrealista; exige key GMP).
- **Geometria real**: `pesquisa-geo` + agente `pesquisa-geo` (Natural Earth 10m+; nunca desenhar país à mão).

### 5. ARTE & CENAS (o chão de fábrica)
- **Diretor** (`diretor-de-arte` → `editor-de-arte`, vestindo `knowledge/ROUPA-CENA.md` + as leis de `seed/regras/ARTE.md`).
- **CATÁLOGO DE MODELOS**: `knowledge/CATALOGO-MODELOS.md` — TODO agente escolhe o modelo de cena DALI
  (o montador marca o `modo`; o editor-de-arte executa o modelo). Exemplar canônico v5: paladar-altitude-processo.

### 6. QUALIDADE (gates que não perdoam)
- **9 críticos** (`criticos.mjs`) + gates duros (colisão bbox, fonte<130px, crédito-fantasma).
- **Guard-rail** anti-sobrecarga: `scripts/qc-carga.mjs`. **Frames à vista**: `scripts/shot.mjs`.
- **Mídia repetida**: `scripts/qc-repeticao.mjs` (a mesma mídia em duas cenas, [ARTE-60]) e
  `scripts/qc-clipe-repetido.mjs` (o clipe repetido DENTRO da cena e entre planos sucessivos,
  [ARTE-108]). ⚰️ São eles que herdaram o "fundo repetido" do gate único que esta linha citava até
  08/ago/2026 e que **não existe mais** — o nome dele está no histórico e na [ARTE] que o enterrou.

### 7. RENDER & ENTREGA (saída física)
- **Render 4K** **[porte Regie]**: no PC do dono, por `node <motor>/src/ferramentas/renderizar.mjs`. No Top10 rodava só nas
  VMs `estudio-render-*` sob demanda, lendo do bucket; isso não existe aqui.
- **Finalização e entrega ([FIN-45], 30/jul)**: **`top10 finalizar <proj>`** = `scripts/finalizar.mjs` faz a estação **[porte Regie: não veio — `finalizar.mjs`, no canal: `node <motor>/src/ferramentas/finalizar.mjs`]**
  inteira, na ordem obrigatória — gate espelho×fala → planos (`branding/overlays.mjs` + `trilha/escolher.mjs`) →
  manifest/inSec/contrato → ponte `scripts/finalizacao-config.mjs` (remap bruto→limpo) → `compor-base-youtube.mjs` → **[porte Regie: não veio — `finalizacao-config.mjs`]**
  `finalizar-youtube.mjs` → gate `qa-finalizacao.mjs` → `entregar.mjs`. Todos os idiomas juntos:
  **`top10 entregar-tudo <proj>`**. 🔀 **O XML do Premiere VOLTOU** e sai JUNTO do composto: a [FIN-33] ("o XML
  morreu") foi SUPERADA pela **[FIN-45]** em 30/jul — a entrega PT-BR é o **XML de 5 camadas** que o Mateus edita,
  e o composto automático é a rota dos **dublados**, onde não há humano. O gerador vivo é `src/timeline-xml.mjs`,
  chamado na **etapa 6** de `finalizar.mjs`; só peças auxiliares (o `_deliver`) ficaram em
  `arquivo-morto/2026-07-xml-premiere/`.

### 8. APRENDIZADO (o gosto vira lei)
- Feedback do Mateus (galeria: chat + marcas `@12.3s`) → `out/_feedback-queue.jsonl` → destilar em
  `seed/aprendizado.md` (regras numeradas) + memória (`~/.claude/.../memory/`) + `knowledge/ROUPA-CENA.md`.
- **[porte Regie]** (No Top10: sincronizar o Windows por pack no bucket. Aqui o canal é um repositório git no próprio PC.)

## Fluxo ponta a ponta (o que "editar um vídeo" significa aqui)
```
bruto/roteiro → [1] words.json + plano-roteirista.json
             → [2/3/4] caçadores abastecem (dados, docs, pessoas, mídia, logos, geo) ANTES do editor-de-arte
             → [5] Diretor produz cada cena pelo CATÁLOGO (paralelizável por subagentes) **[porte Regie]**
             → [6] QA por cena (shots + carga + 9 focos) e só passa aprovada
             → [7] render 4K (no PC do dono) **[porte Regie]**
             → manifest → XML do Premiere + mídias referenciadas → pasta de entrega do canal  ✅ ENTREGUE **[porte Regie]**
             → [8] feedback do Mateus vira regra permanente
```
Regra de ouro da paralelização: subagente recebe a ROUPA completa (ROUPA-CENA.md + exemplar + brief do
segmento) e o QA final é SEMPRE de quem coordena (Opus).
