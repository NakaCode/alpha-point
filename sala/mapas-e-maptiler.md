# `sala/mapas-e-maptiler.md`, da Sala de controle

Veio do `CLAUDE.md` na divisão do CLAUDE.md enxuto, palavra por palavra (o mapa: `out/_modelos/md-enxuto/mapa-de-linhas.json`). O núcleo, com o índice, é o `CLAUDE.md`; o completo de antes, `sala/CLAUDE-completo.md`.

A liberação da MapTiler em cada vídeo (o `MapTiler liberado`), a base de satélite, o teste com Landsat, a geometria do Juneau, o crédito a 56 px do vídeo 2 e o Juneau depois dos 56 px.


## Peças da pré-v1 em uso (desde 25/09/2026) (do CLAUDE.md)

6. **Geometria real dos mapas**: Natural Earth offline, pela pré-v1. **Feito em 25/09**: EUA e Canadá inteiros e
   os recortes `panhandle-juneau`, `alasca-e-vizinhos` e `matsu-anchorage` em `out/juneau/_media/geo/` (fora do git;
   refaz-se com os comandos da procedência), registrados em `out/juneau/_pesquisa/pauta-geo.json`. Conferência:
   `out/juneau/geo-previa.html`. **Rios e cidades, também em 25/09**:
   - rios e lagos do Natural Earth (`rios-*`, `lagos-*`), em domínio público;
   - o **Taku** do OpenStreetMap (`rio-taku-osm`, relation/16167118), porque o NE 1:10M não tem Taku, Chilkat,
     Knik nem Matanuska;
   - pontos de cidade reais: `cidades-ne` (Juneau, Sitka, Skagway, Whitehorse, Anchorage, Wasilla e Fairbanks,
     do NE) e, do OSM, Willow e Haines. Todos caem em terra. Use o ponto do NE para Juneau: o aproximado antigo
     caía na água.

   **A estrada e Cascade Point** (o Lucas escolheu em 25/09 "Pela estrada no OSM"):
   - `estrada-juneau-cascade`: a Alaska Route 7 (relation/535397) do centro de Juneau até a ponta norte da Glacier
     Highway, 67,48 km (41,9 milhas; o roteiro diz "about 43 miles", e fica). O `geo-osm-rota` sozinho costurou
     com 21 órfãos (pista dupla e rotatória); `out/juneau/_pesquisa/estrada-juneau-cascade.mjs` monta o caminho
     e o entrega a ele (os dois comandos estão no topo do script; `--dump=` refaz sem rede).
   - `cascade-point`: a ponta norte dessa estrada, 58.700137, -134.937863, gravada por
     `out/juneau/_pesquisa/ponto-fim-da-estrada.mjs --gravar`. O nome vem do roteiro: nem NE nem OSM têm o lugar.
     No NE 1:10M o ponto cai na água, a 236 m da costa simplificada (310 vértices da estrada também); sobre o
     satélite fica certo. Se a cena pintar a terra com o polígono do NE, declare o deslocamento.

   **Base de satélite pela MapTiler** (o Lucas avisou em 25/09 que a chave vem): perfil `maptiler` da pré-v1
   (satellite-v2 + terrain-rgb-v2), com a chave `MAPTILER_KEY` em `C:\Users\zangp\.regie\chaves.env` (o
   `.env` do canal também é lido e fica fora do git, mas a casa dela é o arquivo da máquina). **A chave chegou e
   funciona** (25/09: um pedido de teste ao satellite-v2 respondeu 200). A licença está registrada em
   `marca/identidade.md` §6: a conta é do Lucas, no plano Flex, que vale até 100 mil inscritos. O crédito
   `© MapTiler © OpenStreetMap contributors` fica na tela durante todo o mapa, mais a linha na descrição. O plano
   cobra por pedido de mapa, e render pede muitos: olhe o painel da MapTiler no primeiro mês. Para usá-la numa
   produção, `canal.json` › `mapa.perfil: "maptiler"`, o que é a escolha da base do vídeo inteiro, e decisão do
   Lucas.
   **Base Landsat, testada em 25/09** (o Lucas pediu o teste com Landsat): `out/prova-mapa/graphics/landsat-juneau.html`
   é a frase 10 do roteiro sobre Landsat 8 e 9 de 23–24/03/2024 (USGS, domínio público, sem crédito na tela), baixado
   do Planetary Computer sem conta por `out/prova-mapa/_pesquisa/base-landsat.py`. A cena lê a base do canal
   (`window.__BASE_CANAL`) no lugar do perfil da pré-v1, e tirou o véu escuro do molde (a identidade não tem
   degradê). Saiu em 4K pelo `renderizar.mjs` (210 quadros em 114 s) e passou por revisão contra a marca.
   - depois de qualquer `preparar-cena prova-mapa`, rode o `base-landsat.py` de novo: ele regrava o
     `_creditos-mapa.md`, que a pré-v1 escreveria com o crédito da EOX;
   - não há data de verão limpa nessa janela: as limpas são de março e abril, com neve até perto do mar. A de
     06/08/2024 saiu enevoada a 30 m;
   - a divisa em branco a 35 % quase sumia sobre o campo de gelo. O Lucas pediu o contorno escuro por baixo
     (25/09), e ele virou regra da §6 (`--fronteira-contorno-*` no `marca/tokens.css`).
   **A base do Juneau é a MapTiler** (o Lucas decidiu em 26/09: "será o maptiler"): `canal.json` › `mapa.perfil:
   "maptiler"`, que o `preparar-cena` lê. O Landsat fica como teste. Toda cena de mapa leva o crédito
   `© MapTiler © OpenStreetMap contributors` na tela, mais a linha na descrição.
   **O vídeo 2 também vai na MapTiler** (Lucas, 07/10/2026, depois de ver que 24 das 56 cenas são mapa: "pode seguir com maptiler
   (quero diminuir o tamanho dos créditos num geral)", e logo depois "Quero reduzir para 56px"). O crédito de todo tipo passa de 76 a
   56 px no palco 4K, do vídeo 2 em diante; o Juneau fica com 76. O piso do motor é 72 no crédito que não é de mapa e 40 no de mapa
   (`data-qc-credito="mapa"`): o caminho da reprovação do `qc-tamanho` a 56 px está em `marca/identidade.md` §4.1. O contador da
   MapTiler se anota antes e depois de cada render de mapa, como no Juneau.
   **O Juneau, depois dos 56 px** (revisão da marca, 07/10/2026): o `tokens.css` mudou, e 44 das 56 cenas do Juneau leem
   `var(--fs-credito)` sem override.
   - Nada de `qc-cena out/juneau` no projeto inteiro: com o `hash_marca` novo, ele re-mediria as 56 cenas, reprovaria o crédito a 56
     e gravaria `ok:false` sobre clipes certos a 76 (e pediria tiles nas 17 de mapa, com a pré-carga).
   - Portão e render do Juneau, só em cena refeita, com `:root { --fs-credito: 76px; }` num `<style>` depois do `<link>` do
     `tokens.css` (identidade §4.1). O carimbo `.mp4.de-html` guarda só o sha1 do HTML: um render a 56 sairia com carimbo válido.
   - A linha do tempo serve o `tokens.css` ao vivo: nela, o Juneau aparece com o crédito a 56, que não é o entregue.
   - Pôr o override nas 44 cenas de uma vez muda o sha1 de todas e pede render novo (MapTiler nas de mapa): não sem o Lucas.

## Os especialistas (desde 26/09/2026) (do CLAUDE.md)

  **No vídeo 2 (Los Angeles), o gasto também está liberado, sem relevo 3D** (Lucas, 07/10/2026: "Sim, como no Juneau
  (Recomendado)"; identidade §6): as 24 cenas de mapa, com o contador em `out/los-angeles/_pesquisa/maptiler-gasto.md`.
  **No vídeo 3 (Zona do Canal), liberado** (Lucas, 15/10/2026, 01:4x, no chat da Sala: "Pode usar o Maptiler"): as cenas de
  mapa, com o contador em `out/zona-do-canal/_pesquisa/maptiler-gasto.md`, anotado antes e depois de cada render de mapa. O
  relevo 3D não foi perguntado e não está liberado: cena com relevo pede o ok dele antes. É esta mensagem que a Sala cita no
  `MapTiler liberado` aos setores.
  **No vídeo 4 (Peru), liberado, com relevo quando necessário** (Lucas, 21/10/2026, 23:1x, no chat da Sala, à pergunta "Posso usar o
  MapTiler no vídeo do Peru, do mesmo jeito que no vídeo 3? Seria sem relevo 3D: cada cena com relevo eu te pergunto antes": "Sim e pode
  usar relevo quando necessário"). As cenas de mapa e o relevo 3D onde a cena precisa dele, sem pergunta por cena; a cena da prova
  ("The mountains help…") fica plana, porque o Lucas a preferiu assim (19/10). O contador fica em `out/peru-agua/_pesquisa/maptiler-gasto.md`,
  anotado antes e depois de cada render e de cada rodada de portão com a pré-carga. É esta mensagem que a Sala cita no `MapTiler liberado`.
  **No vídeo 5 (`atlantico-fundo`), liberado como no Peru** (Lucas, 24/10/2026, 18:5x, no chat da Sala, à pergunta "O vídeo 5 é quase
  todo mar: o fundo vem da GEBCO (grátis). Posso usar o MapTiler na costa e na superfície, como no Peru?": "Sim, como no Peru
  (Recomendado)"). As cenas de mapa e o relevo 3D onde a cena precisa dele, sem pergunta por cena. O vídeo sai pelo motor sem rosto
  ("O motor sem rosto", abaixo), que renderiza sozinho e não anota o contador por render: a conta da MapTiler se confere pelo painel
  dela, no começo e no fim do vídeo.
