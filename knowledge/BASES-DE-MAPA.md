> **[porte Regie]** Origem: `top10-estudio/knowledge/BASES-DE-MAPA.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Base de mapa: a «base única MapTiler satellite-v2» ([PESQ-21]) é decisão do Top10, com a chave paga dele. Aqui o canal escolhe UM perfil de base (`aberto`, `vetorial` ou `maptiler`) em `canal.json → mapa.perfil` (`<motor>/src/mapa/perfis.json`); MapTiler exige a chave do próprio dono (`MAPTILER_KEY` em `chaves.env`), e os números medidos «contra a nossa chave» são da conta do Top10.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# BASES DE MAPA — análise de qualidade do acervo (21/jul/2026)

> ⚠️ **DECISÃO DO MATEUS (21/jul, revisão na galeria): MapTiler satellite-v2 é a BASE ÚNICA/DEFAULT de TODO mapa.**
> Nitidez + consistência valem mais que economizar cota. ESRI **só** como fallback de emergência se a cota MapTiler
> morrer. NÃO misturar bases entre cenas irmãs (mistura ESRI/NASA/MapTiler = reprovado; o Mateus vê e cobra).
> A NASA estática (Blue Marble) sai também: mapa é MapTiler ao vivo, não jpg estático com silhueta desenhada por cima.

Teste empírico: mesmos pontos do RS, mesmos zooms, tiles baixados e comparados à vista.
Pontos: Porto Alegre (cidade) · Cânion Itaimbezinho (relevo) · Barra de Rio Grande (costa) · RS inteiro (estado).

## O acervo (o que temos hoje)

| base | uso hoje | tile | licença/custo |
|---|---|---|---|
| **ESRI World Imagery** (arcgisonline) | **23 cenas** — o padrão do motor ferraz | **256px** | grátis c/ atribuição "Esri, Maxar, Earthstar Geographics" (ToS ArcGIS pede cuidado em uso comercial) |
| **MapTiler satellite-v2** | 3 cenas | **512px** | chave paga (`MAPTILER_KEY`), limite de tiles/mês; "© MapTiler © OpenStreetMap" |
| **MapTiler terrain-rgb-v2** (DEM) | 5 cenas | 512px webp | idem · **único que dá relevo 3D/hillshade real** |
| **Natural Earth / IBGE** (119 GeoJSON) | contornos, malhas | vetor | domínio público / IBGE |
| **NASA Blue Marble** (estático) | abertura, globo | imagem | domínio público |
| Google 3D Tiles (Cesium) | engine existe, **sem chave GMP** | — | pago, não ativado |

## Resultados do teste (o que os frames mostram)

### 1. Resolução — MapTiler tem 2× linear (4× em pixels)
ESRI serve 256×256; MapTiler serve 512×512 **no mesmo zoom**. Na prática, MapTiler@z = ESRI@z+1 em detalhe.
Isso é decisivo no **render 4K** (3840×2160): com ESRI o mapa precisa de um zoom a mais pra não amaciar.

### 2. Nitidez e limpeza — MapTiler ganha claramente
- **Itaimbezinho z15**: o ESRI tem **cobertura de nuvem** (borrão claro no meio do quadro) e fica macio; o MapTiler está limpo — lê-se trilha, curso d'água, edificação.
- **Porto Alegre z16**: MapTiler mostra telhados/veículos individualizados; o ESRI é visivelmente mais macio.
- **RS inteiro z6**: diferença menor (ambos servem), mas MapTiler tem verde mais escuro/cinematográfico (casa melhor com o navy do canal) e o ESRI é mais claro/saturado.

### 3. Teto de zoom — ⚠️ o ESRI QUEBRA FEIO
| zoom | ESRI | MapTiler |
|---|---|---|
| z17–z19 | ok (amaciando) | ok |
| **z20** | ❌ **placeholder cinza "Map data not yet available"** (testado em Porto Alegre) | imagem real (borrada) |

**Regra dura:** cena que passa de **z19** NÃO pode usar ESRI — entrega um retângulo cinza com texto em inglês na tela. Em cidade brasileira o teto seguro do ESRI é ~z18.

### 4. Capacidade exclusiva — relevo 3D
Só o **MapTiler terrain-rgb-v2** dá DEM (testado no Itaimbezinho: tile de 195 KB, disponível).
Sem DEM não existe hillshade/3D honesto — e a **ARTE-31** veta satélite inclinado sem DEM (vira "foto plana" reprovada).
Ou seja: **plano inclinado/3D só é possível com MapTiler**; com ESRI o certo é top-down (pitch 0).

## O que usar por tipo de cena (pós-decisão — lei PESQ-21)

⚠️ Esta tabela foi REESCRITA em 22/jul. A versão anterior ainda recomendava "ESRI ou MapTiler" no plano
continental e "NASA Blue Marble" no globo — contradizia o cabeçalho desta própria página e foi uma das razões
de o `mapista` seguir divagando entre bases por um mês.

| cena | base | porquê |
|---|---|---|
| **Continental / estado (z4–z9)** | **MapTiler satellite-v2** | consistência com as cenas irmãs vale mais que a cota; textura mais cinematográfica |
| **Regional (z10–z14)** | **MapTiler satellite-v2** | a 2× de resolução aparece; o ESRI já amacia |
| **Cidade / detalhe (z15+)** | **MapTiler satellite-v2** | o ESRI é macio, tem risco de nuvem e **z20 = placeholder cinza na tela** |
| **Relevo / 3D / hillshade** | **MapTiler terrain-rgb-v2** | única fonte de DEM (ARTE-31); sem DEM não há 3D honesto |
| **Contorno / geometria** | GeoJSON (IBGE/Natural Earth) | nunca desenhar à mão (PESQ-01); polígono inteiro, nunca pino (ARTE-46) |
| **Globo / espaço** | globo com **textura real reprojetada** (canvas 2D — o caminho já provado da casa) | ⚠️ caso NÃO coberto pelo teste do RS: maplibre 4.7.1 não tem projeção `globe` (só a v5+), então "base única" aqui é o método, não a URL. O que morreu é o **mapa** de jpg estático com silhueta desenhada por cima |
| **Território histórico** | geometria histórica (historical-basemaps) sobre a base acima, **ou** cartografia de época real | nunca base moderna anacrônica |
| **emergência: cota MapTiler morta** | ESRI (`tileSize:256`, teto z18 BR / z19) + DEM AWS Terrarium | fallback DECLARADO com prova; o vídeo INTEIRO desce junto, nunca uma cena só |

## Gotchas confirmados
- **Cobertura de nuvem no ESRI** varia por região do Brasil — se algum dia o fallback for usado, conferir o frame ANTES de fechar a cena (o Itaimbezinho tem nuvem no z15).
- Tile 256 vs 512 muda o `tileSize` no maplibre: declarar errado desalinha rótulos/escala. MapTiler = **512**.
- **Palco 4K nativo muda o enquadramento** (REND-13): no viewport 3840 o maplibre cobre o DOBRO do span no mesmo `zoom` (medido: center [-51.2,-30.03] z9 → 2,637° em 1920×DPR2 · 5,273° em 3840×DPR1). Zoom copiado de cena 1920 abre 2× demais — **some ~+1,0**. Em troca, vem um nível a mais de tile real: o mapa 4K-nativo é mais nítido.
- MapTiler é **cota paga** — a economia NÃO é motivo pra trocar de base (essa era a lógica antiga); se a cota apertar, o caminho é gerenciar a cota, não misturar bases.
- **Região polar não foi re-testada** (o teste foi todo no RS). A doutrina de jun/2026 dizia que o ESRI era melhor na Antártida; ninguém re-mediu. Em cena polar: abrir o MapTiler e CONFERIR O FRAME antes de concluir qualquer coisa.
- Validar cena de mapa com `scripts/maprender.mjs` (o `shot.mjs` stuba o rAF do maplibre → tile cru). **[porte Regie: não veio — `maprender.mjs`]**
- Cena de mapa é WebGL: sem GPU o Chrome cai no software e captura antes da geometria. **[porte Regie]** No Top10 isso se resolvia numa VM com GPU ligada à mão; aqui o render é no PC do dono. Sem GPU que o Chrome use, confira o quadro capturado antes de aprovar.
