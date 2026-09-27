# Acervos livres e oficiais: o levantamento de 27/09/2026

O Lucas pediu, em 27/09/2026: "se conseguir encontrar mais bancos/acervos livres/oficiais para futuros trabalhos
também, melhor ainda". Cinco pesquisadores (agentes gerais, despachados pelo Claude central) leram, nesse dia, a
página de licença de cerca de 170 fontes. Algumas aparecem em mais de um grupo. Cada um anotou:
- o texto da licença que decide, copiado;
- se o uso comercial em vídeo monetizado do YouTube é permitido;
- o crédito que a fonte pede;
- as restrições;
- a resolução de uma amostra;
- se os pesquisadores do canal podem buscar ali por script ou só pelo navegador.

**Isto é levantamento, não regra.** Nenhuma fonte daqui entra no canal sem a decisão do Lucas. A lista do que vale
hoje continua em `marca/midia.md` §7.3 (foto e vídeo) e em `marca/identidade.md` §6 (base de mapa). O que ele
aprovar vai para lá, com a data e a resposta dele, e esta pasta fica como a prova das licenças.

| Arquivo | O grupo |
|---|---|
| `1-federais-eua.md` | órgãos federais dos EUA além dos que o canal já usa: NASA SVS, NASA Earth Observatory, NOAA, NPS, USFWS, USACE, USDA, FEMA, CBP e outros |
| `2-outros-governos.md` | governos de outros países e organismos internacionais: Canadá, Reino Unido, Austrália, Nova Zelândia, União Europeia, Holanda, países nórdicos, Brasil, Japão, Taiwan, ONU, OTAN e outros |
| `3-museus-bibliotecas-mapas.md` | museus, bibliotecas e coleções de mapas: USGS topoView, cartas da NOAA, Harvard, Stanford, David Rumsey, Leventhal, NLS e outros |
| `4-video.md` | vídeo livre e oficial, de preferência em 4K: NASA SVS, ESA, Copernicus, GOES, ESO, Google Earth Timelapse e outros |
| `5-dados-e-fronteiras.md` | dados para gráficos e geometria para mapas: geoBoundaries, GADM, Copernicus DEM, Banco Mundial, Our World in Data, Google Earth Studio, Mapbox e outros |

A página que o Lucas viu para escolher é o artifact "Acervos livres e oficiais" (claude.ai, privado).

## Como ler, depois de 27/09

- **"Não conferido"** é o site que recusou a leitura automática (403, Cloudflare, robots.txt): nada foi contornado.
  - Os relatórios dizem que esses sites se conferem "pelo navegador do app, com o Lucas vendo".
  - Desde 27/09/2026, a regra é outra: o Claude central os confere pelo navegador do app, sem o Lucas acompanhar
    (CLAUDE.md, "A marca").
- **Licença muda.** Antes de usar uma fonte num vídeo, releia a página de termos dela e compare com o texto copiado
  aqui. A data da leitura está em cada ficha.
- **Os deslizes de método** declarados pelos pesquisadores estão nos relatórios, e nenhum mudou um veredito:
  - uma leitura no Zenodo por caminho que o robots.txt veta;
  - a página "About" da NOAA lida antes de conferir o robots.txt;
  - uma listagem do NRCan que veio junto com o robots.txt que a veta;
  - a State Library of New South Wales lida por outro programa, quando o leitor normal recebeu página vazia. Pela
    leitura estrita, ela conta como não conferida.
- **O que já mexe no canal** (achados, não decisões):
  - a Alaska State Library pede permissão por escrito para uso em vídeo (`3-museus-bibliotecas-mapas.md`, item 12);
  - do satélite EOX, só a camada de 2016 é livre para uso comercial (`5-dados-e-fronteiras.md`);
  - o SRTM e o NASADEM param em 60°N: para o Alasca, use o USGS 3DEP ou o Copernicus DEM;
  - a Agência Brasil não é mais Creative Commons;
  - o CIA World Factbook acabou em 04/02/2026, e o NASA NEO foi desligado em setembro de 2026.
