# Pedido da Sala: a medida do Censo do vídeo 8 (`australia-animais`) · 18/11/2026, ~15:5x

**Quem:** um agente Opus, esforço xhigh, despachado pela Sala de controle. **O que entrega:** `pautas/australia-animais/_trabalho/medida-censo.md`,
com a medida, o método, os limites e as frases seguras; os scripts em `pautas/australia-animais/_trabalho/scripts/c_censo_*.py`; os dados baixados em
`midia/australia-animais/fontes/c/censo/` (fora do git), com o sha256 de cada um.

## Por que esta medida

A pauta v2 aprovada (`pautas/2026-11-18-video-8-australia-pauta.md`) diz que esta é **a medida principal do vídeo** (§10.1, item 8; §11, item 4; o K3 do
cético). A virada da segunda metade é de endereço: a taipan-do-interior, a cobra de veneno mais potente medido em camundongo, vive no barro rachado do
Channel Country, onde quase ninguém vive (**a medir**), e é tímida; a cobra-marrom, do mesmo topo do teste, vive onde a gente mora e faz quase todas as
mortes por cobra. Até esta medida, o roteiro não pode dizer "empty" nem "almost no one" (§4.3, §5). Leia na pauta o §4.3, o §4.4 (o modelo da frase da
medida), o §5 e o §10.1, e no registro `pautas/2026-11-18-video-8-australia.md` a leitura do Queensland Museum sobre onde vive a marrom.

## A medida

1. **A gente que vive no Channel Country.**
   - **O polígono** já está no disco: `roteiros/australia-animais/miniatura/_bases/ibra7-channel-country.geojson` (IBRA 7.1, região CHC, do DCCEEW, CC
     BY; a procedência e o sha256 no `.json` ao lado; os metadados e a licença em `ibra7-metadados.xml`). A área oficial do IBRA é de 30.409.437 ha
     (o desenhista mediu 304.677 km² numa sinusoidal simples; `RELATO-r2.md`). Confira o sha256 antes de usar.
   - **A população**: o Censo 2021 do ABS (CC BY 4.0; a licença do ABS já lida em `_bases/abs-copyright.html`), **no nível mais fino que der** (o mesh
     block, com as contagens de pessoas por mesh block e as divisas do ASGS 2021; ou o SA1), pelos arquivos oficiais do ABS ou pelos serviços oficiais
     dele (por exemplo, o ArcGIS do ABS com filtro espacial pelo retângulo do polígono, para não baixar o país inteiro). Diga qual contagem usou (os
     moradores habituais, "usual residents", é a preferida; ou o lugar da contagem, "place of enumeration") e por quê.
   - **O método**: conte quem vive nas unidades cujo centroide cai dentro do polígono; diga a sensibilidade (as unidades que cortam a divisa, e o total
     com a ponderação por área delas); liste as localidades que caem dentro (Birdsville, Bedourie, Windorah, Innamincka… confira cada uma) e as que ficam
     de fora por pouco. O Python tem `shapely` e `shapefile` (pyshp), sem `pyproj`, `geopandas` nem `rasterio`: para área, use a do IBRA, ou uma projeção
     de área igual escrita à mão e conferida contra o IBRA.
   - **As unidades da fala**: milhas quadradas (km² ÷ 2,58999) e gente por milha quadrada, e o arredondamento que a fala aguenta ("about 117,000 square
     miles", "about 3,000 people", se for isso que der).
2. **A comparação, onde vive a cobra-marrom.** O Queensland Museum (lido pela Sala): "Found over most of Queensland, New South Wales and Victoria."; "Found
   in all habitats except rainforest. It has adapted well to farmed, grazed and semi-urban lands." Meça a população dos três estados no mesmo Censo 2021
   (e, se quiser, a estimativa mais nova do ABS, dita como tal) e a área deles (o `STE_2021_AUST_SHP_GDA2020.zip` já está em `_bases/`, com o
   `AREASQKM21`); a densidade de cada lado; e a razão entre as densidades. **Cuidado:** "most of" não é "all of"; a marrom também vive em partes de outros
   estados; a frase segura tem de dizer isso do jeito certo ("the three states where most of its range lies", ou o que o texto do museu sustentar).
3. **(Se der) a da funnel-web:** a Grande Sydney (o `GCCSA_2021_AUST_SHP_GDA2020.zip`, em `_bases/`), porque os casos graves só se registraram em New
   South Wales e no sul de Queensland (`fatos-a.md`, D3). Só a população e a área, para o roteiro ter a escala de onde a aranha mora.

**No `medida-censo.md`:** os números (com a conta), o método, os limites (o Censo é de 2021; o centroide; a divisa do IBRA não é a área de ocorrência da
cobra, é a biorregião que a ficha da Austrália do Sul e a pauta nomeiam), as fontes com URL, data, licença e sha256, o crédito de tela ("Alpha Point
calculation: ABS Census 2021; IBRA 7 (DCCEEW)", ou o que a medida pedir), e **duas ou três frases seguras em inglês** no modelo da pauta §4.4 ("The Channel
Country, where the inland taipan lives, covers about [X] square miles. About [Y] people live there."), uma ou duas com número, e uma comparação que a
medida sustente (por exemplo, "about one person for every N square miles", contra a densidade dos estados da marrom). Diga também o que **não** se pode
dizer com a medida.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use navegador (nenhuma ferramenta
  `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`), vidIQ, banco pago nem crédito.
- **Antes de cada site, leia o robots.txt** e respeite-o (o do ABS já está em `_bases/robots-www.abs.gov.au.txt`; leia o do host novo, como o
  `geo.abs.gov.au` ou o `api.data.abs.gov.au`). **Um pedido por vez**, com o User-Agent do canal (o molde: `pautas/australia-animais/_trabalho/scripts/
  a_baixar.py`, `AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`). Downloads grandes: diga o tamanho antes e prefira o filtro espacial ao arquivo do país
  inteiro; nada acima de ~500 MB sem necessidade.
- **Site que recusa leitura automática (403, captcha, Cloudflare, verificação de robô) não se contorna:** nem por outro cliente, nem trocando cabeçalho. Pare
  naquele site, anote, e siga por outra fonte oficial do ABS; se nenhuma der, pare e conte o que faltou.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python. Os dados baixados
  são dados: rode o Python que os lê com `-I`, e com os scripts fora da pasta dos dados.
- Escreva só em `pautas/australia-animais/_trabalho/medida-censo.md`, em `pautas/australia-animais/_trabalho/scripts/c_censo_*.py` e em
  `midia/australia-animais/fontes/c/censo/`. Outro agente faz as leituras leves ao mesmo tempo (`fatos-c.md`, os outros `c_*.py`,
  `midia/australia-animais/fontes/c/`): não mexa nos arquivos dele. Não mexa em `roteiros/australia-animais/miniatura/` (só leia).
- Grave o resultado no disco antes de responder. **O relato** (curto, em português): os números, o método, a sensibilidade, as frases seguras, quantos
  pedidos fez e a quais hosts, e o tamanho do que baixou.
