# assets/geojson — a geometria que este canal já tem

> **[porte Regie]** No estúdio do Top10 esta pasta tinha 394 arquivos (70 MB), e 345 das 389 entradas do manifesto
> não diziam de onde vinham nem sob qual licença. Nada disso veio. Aqui a pasta começa vazia e cresce com procedência.

## Onde a geometria nasce

Por vídeo, com as ferramentas do motor (rode de dentro da pasta do canal):

| Preciso de | Comando |
|---|---|
| ver o que já existe (cache da máquina + acervo do motor) | `node <motor>/src/geo/catalogo.mjs --busca=<termo>` |
| um país inteiro (Natural Earth, domínio público) | `node <motor>/src/geo/geo-pais-completo.mjs ...` |
| a camada Natural Earth que falta | `node <motor>/src/geo/obter-natural-earth.mjs <camada>` |
| lugar, área ou rota do OpenStreetMap | `node <motor>/src/geo/geo-lugar-osm.mjs`, `geo-osm-area.mjs`, `geo-osm-rota.mjs` |
| recorte, ilha de país, grande círculo | `geo-recorte-bbox.mjs`, `geo-ilha-de-pais.mjs`, `geo-grande-circulo.mjs` |
| levar uma geometria do cache para a produção | `node <motor>/src/geo/catalogo.mjs usar <proj> <slug> [--cena=<id>]` |

⚠️ **O `catalogo.mjs` do motor NÃO lê esta pasta**: ele consulta só o cache da máquina (`%USERPROFILE%\.regie\geo\`) e o
acervo do motor (`<motor>/acervo/geojson/`). Para saber o que existe, rode `node <motor>/src/geo/catalogo.mjs --busca=<termo>`;
este `manifest.json` vazio NÃO quer dizer que não há geometria nesta máquina.

Cada ferramenta abre com o seu uso completo. O cache da máquina fica em `%USERPROFILE%\.regie\geo\`; a produção
usa a cópia em `out/<proj>/_media/geo/`, registrada na pauta.

## O que entra nesta pasta

Só geometria que o canal vai reusar entre vídeos, e sempre com a entrada no `manifest.json`, no mesmo formato do
acervo do motor (`<motor>/acervo/geojson/manifest.json`): `id`, `arquivo`, `nome`, `features`, `bbox`, `bytes`,
`sha256`, `fonte`, `fonte_url`, `licenca`. **Sem fonte e licença, não entra.** OpenStreetMap exige crédito (ODbL).
