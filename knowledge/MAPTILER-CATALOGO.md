> **[porte Regie]** Origem: `top10-estudio/knowledge/MAPTILER-CATALOGO.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Base de mapa: a «base única MapTiler satellite-v2» ([PESQ-21]) é decisão do Top10, com a chave paga dele. Aqui o canal escolhe UM perfil de base (`aberto`, `vetorial` ou `maptiler`) em `canal.json → mapa.perfil` (`<motor>/src/mapa/perfis.json`); MapTiler exige a chave do próprio dono (`MAPTILER_KEY` em `chaves.env`), e os números medidos «contra a nossa chave» são da conta do Top10. O `MAPTILER-PLANO.md` citado aqui é o plano e a conta do Top10 e não veio.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# MAPTILER — o catálogo INTEIRO, medido contra a nossa chave

> **Decisão do Mateus, 27/jul/2026: TODO mapa do estúdio é MapTiler, exclusivamente, e na melhor
> qualidade que eles derem.** Este arquivo é a fonte única do *que existe e qual usar*; o
> [`MAPTILER-PLANO.md`](MAPTILER-PLANO.md) continua sendo a fonte do *quanto custa e o que o plano
> libera*.
>
> ⚠️ **Tudo aqui foi MEDIDO, não copiado da documentação** — cada linha saiu de uma chamada real com
> a nossa `MAPTILER_KEY` em 27/jul/2026. A documentação lista o catálogo público; só a chave diz o
> que o nosso plano de fato abre. Reconferir com `scripts/qc-maptiler-catalogo.mjs` quando duvidar. **[porte Regie: não veio — `qc-maptiler-catalogo.mjs`]**

---

## 0 · O plano ativo é PAGO — confirmado por teste, não por fatura

Dois recursos são exclusivos do Flex em diante, e os dois respondem:

| teste | resultado |
|---|---|
| `Static Maps API` (`/static/…`) | **HTTP 200**, 164 KB |
| alta-DPI `@2x` | **HTTP 200**, 667 KB |

Isso importa além do técnico: **"Export for videos & games" só é licenciado do Flex em diante**, e
todo mapa que entra num vídeo do canal é uso **comercial**. No Free, esse uso não está liberado.

---

## 1 · A REGRA: MapTiler e mais nada

Nenhuma outra fonte de mapa entra em cena — **nem ESRI/ArcGIS, nem Mapbox, nem Stamen, nem tile
direto do OpenStreetMap, nem captura de tela do Google Maps.** Motivos, em ordem:

1. **Licença.** Só a MapTiler está paga e licenciada para vídeo comercial aqui.
2. **Consistência visual.** Base única = as cenas de mapa do canal se parecem entre si.
3. **Uma superfície para consertar.** Quando a chave morreu em 25/jul, 23 cenas renderizaram um
   buraco (REND-35). Com uma fonte só, existe um gate só a construir.

✓ Já vigiado por `scripts/qc-base-unica.mjs` (marca ESRI como não-principal) e por **[porte Regie: não veio — `qc-base-unica.mjs`]**
`scripts/qc-mapa-vivo.mjs`. Varredura em 27/jul: **nenhum uso ativo de fonte concorrente** — as **[porte Regie: não veio — `qc-mapa-vivo.mjs`]**
ocorrências de "stamen"/"arcgis" no código estão todas em scripts de QC que as **proíbem**.

---

## 2 · IMAGEM DE SATÉLITE — e o teto REAL, que não é o anunciado

| tileset | formato | maxzoom **declarado** | maxzoom **útil** |
|---|---|---|---|
| **`satellite-v2`** ← o nosso | jpg | **22** | **20** |
| `satellite-mediumres` | jpg | 13 | 13 |
| `satellite-mediumres-2018` | jpg | 13 | 13 |

🔴 **O `tiles.json` anuncia z22, mas a imagem real acaba em z20.** Baixei o mesmo ponto de Manhattan
em z19/z20/z21/z22 e olhei os quatro: em **z20** dá para distinguir carros individuais, faixas de
pedestre e pessoas; em **z21 já está borrado** e em **z22, muito borrado**. Acima de z20 o servidor
devolve *upscale*, não detalhe novo — e ainda cobra 4 requisições por tile.

➜ **`maxzoom: 20` é o certo, e é o que o mapista já usa.** Eu havia suposto que estávamos
"deixando dois níveis na mesa" e fui medir antes de mexer: a suposição estava errada. *Subir o
maxzoom para o valor anunciado deixaria a cena mais lenta, mais cara e mais borrada.*

**Estilo pronto com rótulos:** `hybrid` (satélite + nomes). Para satélite pelado, `satellite`.

---

## 3 · RELEVO E 3D

| tileset | formato | maxzoom | para quê |
|---|---|---|---|
| **`terrain-rgb-v2`** ← usar este | webp | **14** | DEM para `terrain` do MapLibre (M04 / mapa3d) |
| `terrain-rgb` (v1) | png | 12 | ⚠️ superado: 4× menos detalhe que a v2 |
| **`terrain-quantized-mesh-v2`** | quantized-mesh | **15** | malha 3D de verdade, para globo/relevo pesado |
| `terrain-quantized-mesh` (v1) | quantized-mesh | 13 | superado pela v2 |
| `hillshades` | png | 12 | sombreamento de relevo pronto, como camada |
| `contours-v2` | pbf | 14 | curvas de nível vetoriais |

➜ **Sempre a `-v2`.** A v1 do DEM para em z12 contra z14 da v2 — em cena de drone sobre montanha,
isso é a diferença entre relevo esculpido e relevo derretido.

### 3.1 · O DEM também serve como DADO, não só como terreno — e carrega altitude NEGATIVA

Medido em 02/ago/2026 com a nossa chave. O tile é imagem, e o valor sai da fórmula do encoding
`mapbox`: **`alt = -10000 + (R*65536 + G*256 + B) * 0,1`**. Baixar e ler é barato
(`ffmpeg -i tile.webp -f rawvideo -pix_fmt rgb24 tile.rgb` e endereçar o pixel):

| ponto | cota oficial | o DEM devolveu |
|---|---|---|
| Vaalserberg (ponto mais alto dos Países Baixos) | +322,7 m | **+320,8 m** |
| Schiphol, pista | ≈ −3,4 m | **−4,5 m** |
| Flevoland / Lelystad (pôlder) | ≈ −4 m | **−1,4 m** |
| mar do Norte · lâmina d'água interior | 0 | **0,0 m** |

Duas consequências práticas: **território abaixo do nível do mar existe no dado** (o `terrain-rgb`
não é clampado em zero por baixo), e **toda superfície de água é achatada em 0 m** — o que entrega a
linha d'água de graça num corte de perfil, e ao mesmo tempo faz um ponto amostrado dentro de um canal
voltar 0 e sumir com a depressão. Amostre vários pontos; zero isolado no meio de terreno negativo é
água, não chão.

➜ Isso abre um uso que não é "terreno 3D": o **corte de perfil** (amostrar o DEM ao longo de uma
linha e desenhar a seção com eixo vertical próprio). Transecto real de 60 pontos cruzando os Países
Baixos em z12 devolveu **13 amostras abaixo de zero, mínimo −6,1 m, máximo +100,3 m**. É a resposta
para relevo que se mede em METROS — o passeio de drone só mostra o que se mede em centenas
(`cerebro/agentes/mapista/OFICIO.md` §5c).

---

## 4 · OCEANO E BATIMETRIA

| recurso | tipo | maxzoom |
|---|---|---|
| estilo **`ocean`** | estilo (7 fontes) | — |
| **`ocean-rgb`** | webp (DEM do fundo do mar) | **7** |

➜ Para "o lugar mais profundo do oceano", "fossa das Marianas", "cabo submarino": o `ocean-rgb` é um
DEM como o do relevo, mas do **fundo do mar** — dá para extrudar a batimetria em 3D. O z7 limita a
escala: serve para oceano e fossa, **não** para detalhe costeiro.

---

## 5 · CLIMA (Weather) — 5 camadas, e o teto de zoom que decide o uso

Endpoint real: `https://api.maptiler.com/weather/latest.json?key=…` (o padrão `weather/<layer>/…`
que a intuição sugere devolve **404** — foi meu primeiro erro ao levantar isto).

| camada | o que mede |
|---|---|
| **Temperature** | temperatura a 2 m do solo [°C] |
| **Pressure** | pressão reduzida ao nível do mar [hPa] |
| **Precipitation** | taxa de precipitação [mm/h] |
| **Wind** | vento a 10 m do solo [m/s] |
| **Radar** | refletividade composta de radar [dB] — **é daqui que sai a "cobertura de nuvens"** |

Todas: raster/png, `scale 2`, **72 keyframes** (≈4 dias de previsão em passo horário).

🔴 **`maxzoom` = 3, em todas.** Isso é um teto duro e muda o uso: presta para **planeta, continente e
país grande**; não presta para cidade, estado pequeno ou qualquer aproximação. Não há camada
"clouds" separada — o que existe é o **Radar**, e é assim que a própria MapTiler monta o exemplo de
cobertura de nuvens.

⚠️ **É previsão de 4 dias e dado ATUAL** — serve para "está acontecendo agora", nunca para evento
histórico (ARTE-65: nada de clima de hoje ilustrando enchente de 1983).

---

## 6 · ESTILOS PRONTOS — os 31 que a nossa chave abre

Todos responderam **HTTP 200** em `maps/<id>/style.json`:

| família | ids | quando usar no canal |
|---|---|---|
| **satélite** | `satellite`, `hybrid` | lugar real, sempre que a cena for "onde fica" |
| **relevo/natureza** | `outdoor-v2`, `winter-v2`, `landscape`, `topo-v2` (+`-dark`, `-shiny`, `-pastel`) | montanha, trilha, parque, geografia física |
| **oceano** | `ocean` | fossa, corrente marinha, cabo submarino |
| **rua** | `streets-v2` (+`-dark`, `-light`, `-pastel`) | cidade, rota, endereço |
| **dados** | `dataviz` (+`-dark`, `-light`), `backdrop` | mapa temático — fundo neutro para o dado brilhar |
| **mínimo** | `basic-v2`, `bright-v2`, `toner-v2` (+ variantes) | quando a geometria é a estrela |
| **artístico** | `aquarelle` (+`-dark`, `-vivid`) | aquarela; histórico e narrativa lenta |
| **cru** | `openstreetmap` | referência, raramente em cena |

➜ **[porte Regie]** **Para um fundo escuro (o navy era do Top10; o deste canal é `var(--fundo)`), comece por `dataviz-dark`, `streets-v2-dark` ou `topo-v2-dark`** —
eles já nascem escuros e não exigem scrim, que é o que apaga geometria (ARTE-86).

⚠️ `satellite-v2` **não existe como estilo** (404) — só como *tileset*. Como estilo, é `satellite`.

**Dados vetoriais crus:** `v3` (z15, o OpenMapTiles completo), `countries` (z11), `land` (z14).

---

## 7 · STATIC MAPS — e por que ele NÃO resolve a cena 4K

O Flex libera a Static Maps API (mapa renderizado no servidor, devolvido como imagem). O
`MAPTILER-PLANO.md` §3.4 a recomendou como caminho mais robusto que o mapa vivo, porque não depende
de a rede entregar tiles em tempo de render.

🔴 **Medido: o teto é 2048×2048, e 1024×1024 em `@2x`.** O palco do canal é **3840×2160**. Ou seja,
a imagem estática chega a **pouco mais da metade da largura de 4K** — usá-la como fundo de cena
significaria *upscale*, exatamente o que a §2 condena no zoom.

➜ **Static Maps serve para inserto pequeno, miniatura, thumbnail e prova de enquadramento — nunca
como fundo de cena 4K.** Para 4K, o caminho continua sendo o **mapa vivo com tiles**, e a
fragilidade de rede se resolve com gate, não com resolução menor.

---

## 8 · O QUE FALTA CONSTRUIR (e é o mais importante desta página)

**Um gate que olhe o PIXEL.** Em dois dias, dois defeitos do mesmo tipo passaram por **todos** os
gates existentes:

- 26/jul — cena de mapa renderizada **sem geometria nenhuma**: satélite pelado e uma legenda
  prometendo duas esferas que não estavam na tela. Seis gates verdes.
- 27/jul — cena `split` (`s33-camada-vs-terra`, do `planetas-algodao-doce`) com **os dois painéis
  vazios**, só as bordas. Portão: 56 de 56 aprovadas.

São o mesmo defeito com roupas diferentes — **moldura presente, conteúdo ausente** — e nenhum gate
enxerga o canvas. O teste é determinístico e barato: renderizar A/B com a camada acesa e apagada e
comparar o pixel dentro da geometria. **Não construído.**

---

## 9 · COMO RECONFERIR

```bash
node --no-warnings scripts/qc-maptiler-catalogo.mjs        # reconfere tudo contra a chave   # [porte Regie: não veio] qc-maptiler-catalogo.mjs
```

Reconferir quando: a chave mudar, o plano mudar, ou antes de adotar uma capacidade nova.
