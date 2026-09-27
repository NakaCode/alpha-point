# Acervos: museus, bibliotecas e coleções de mapas (grupo 3)

Pesquisa feita em 27/09/2026 para o Alpha Point: canal de geografia, sem rosto, narração em inglês dos EUA,
vídeo monetizado em 4K. A lista traz candidatos, e quem escolhe é o Lucas. Nada aqui entra sozinho no canal:
acervo de imagem novo passa pelo §7.3 do `marca/midia.md`, que hoje só admite os oficiais (Commons, NASA, NARA,
USGS, LoC, Smithsonian e as fontes federais).

## Como li

- **Termos.** Li cada termo na página da própria fonte em 27/09/2026, pelo WebFetch. Três páginas eu li pelo
  HTML, com um `curl` comum, sem trocar cabeçalho, e extraí o texto: a da Getty, que o WebFetch truncava, e os
  termos da British Library e de Harvard, porque eu queria o texto exato. As cópias estão em `3-paginas-lidas/`.
- **Resolução.** Medi a largura em px pelos metadados: `info.json` do IIIF, manifesto, JSON de API, descritor
  `.dzi` e metadado XML. Não baixei nenhum arquivo de mídia. Onde não havia metadado legível, marquei NÃO MEDIDO.
- **Robots.** Li o `robots.txt` antes das páginas. Houve dois deslizes, que registro:
  1. **NOAA.** Li a home e a página *About* do `historicalcharts.noaa.gov` antes de ler o `robots.txt`, que veta
     o site inteiro. Não li mais nada lá. A licença vem de outras páginas oficiais da NOAA.
  2. **NRCan.** Um mesmo comando leu o `robots.txt` do `ftp.geogratis.gc.ca`, que veta `/pub`, e uma listagem de
     diretório dentro de `/pub`. Descartei a listagem.
- **Onde o site recusou**, parei e marquei NÃO CONFERIDO. As recusas foram 403, 405, desafio do Anubis, do
  Cloudflare, do Imperva ou da AWS, e "Verify Access". Não tentei outro cliente nem outro cabeçalho. Às vezes a
  licença veio de outra página oficial da mesma instituição, que não recusava, e cada seção diz quando.
- **State Library of NSW.** O WebFetch recebeu páginas vazias, sem código de erro. Um `curl` comum recebeu a
  página inteira. Para saber se o vazio era recusa, testei só o `robots.txt` com três User-Agents, inclusive o
  do leitor do Claude: o servidor respondeu igual aos três, então não parece recusa. Se o Lucas preferir a
  leitura estrita, a fonte fica NÃO CONFERIDO.
- **"Script"** quer dizer os scripts do canal rodando nesta máquina, dentro do que o robots e os termos
  permitem. **"Só navegador"** quer dizer o navegador do app, como a regra do canal manda para site que recusa
  robô (CLAUDE.md, "A marca").
- **"Oficial?"** Em 26/09 o Lucas quis "só os oficiais" e recusou The Met, Europeana, Openverse e Internet
  Archive. Por isso, cada seção diz o que a fonte é: órgão de governo, biblioteca pública nacional ou estadual,
  universidade, museu ou fundação fora do governo, ou agregador.
- **Como entrariam.** Nenhuma destas fontes é do `buscar-midia`. Entrariam como o USGS entra hoje: pelo site do
  órgão, com a regra de robô e a procedência gravada (URL, licença, sha256).
- **Outros grupos.** O grupo 1 também fichou a NOAA e o NPS Carto, e o grupo 5 fichou a ONU. Onde meu achado
  difere do deles, a seção diz.

## Resumo

| # | Fonte | Mídia | Licença | Crédito | Resolução típica | Script ou navegador | Oficial? | Veredito |
|---|---|---|---|---|---|---|---|---|
| 1 | USGS topoView / HTMC | topográficos 1884–2006 e US Topo | domínio público federal | pedido: USGS como fonte | GeoTIFF 300 dpi ≈ 6.570 px; GeoPDF de scan 600 PPI ≈ 13.140 px | **script** (TNM Access API sem chave; bucket S3) | federal; já na lista | **recomendo** |
| 2 | NOAA Historical Map & Chart Collection | 35 mil+ cartas e levantamentos desde os anos 1700 | domínio público; CC0-1.0 no InPort | pedido, não exigido: Provided by NOAA Office of Coast Survey | 9.756 px (a única carta do bucket) | **só navegador** (robots veta o site; o bucket da AWS tem 1 carta) | federal | **recomendo**, pelo navegador |
| 3 | NPS Carto (Harpers Ferry Center) | 1.000+ mapas de parque atuais (JPG, PDF, AI) | domínio público | apreciado: National Park Service | vetorial (PDF/AI); JPG NÃO MEDIDO | script (robots não veta /carto/) | federal | **recomendo** (mapa moderno de parque) |
| 4 | CIA Maps (Factbook encerrado em 04/02/2026) | 110 mapas de país (JPG) | domínio público | pedido: a CIA como fonte | JPG de 111–166 kB; px NÃO MEDIDO | script, com crawl-delay de 10 s | federal | com ressalvas |
| 5 | ONU — UN Geospatial | mapas gerais e temáticos (PDF, JPG) | © ONU: uso com crédito e aviso à ONU; republicar pede e-mail | "appropriate credit"; derivado: based on United Nations map | PDF vetorial; JPG de 2,3 MB | script para ler; o uso é por e-mail | intergovernamental | com ressalvas |
| 6 | British Library (King's Topographical no Flickr) | 17.907 mapas e vistas de 1500–1824 | item a item; amostra: No known copyright restrictions | não exigido nos termos lidos | 4.000 px (amostra) | só navegador | biblioteca nacional (RU) | com ressalvas |
| 7 | National Library of Scotland (Map images) | mapas da Escócia e do RU (OS) | CC0 na camada de digitalização; página de mapas NÃO CONFERIDA | CC0 não exige | NÃO MEDIDO | só navegador (405 e 403) | biblioteca nacional | com ressalvas |
| 8 | State Library of NSW | imagens, mapas, manuscritos | fora de copyright: qualquer fim, inclusive comercial | pedido: criador + "from the collections of the State Library of NSW" | NÃO MEDIDO | só navegador (catálogo 403) | estadual (Austrália) | com ressalvas |
| 9 | National Library of Australia (extra) | mapas | até 1954, livre; publicar não pede permissão | exigido: NLA como custodiante + número de coleção | NÃO MEDIDO | só navegador (Anubis) | biblioteca nacional | com ressalvas |
| 10 | Library and Archives Canada (extra) | acervo nacional do Canadá | uso comercial de material do governo pede permissão escrita | título, autor e URL | NÃO MEDIDO | só navegador (403) | federal (Canadá) | com ressalvas |
| 11 | NRCan: Atlas of Canada, edições históricas (extra) | mapas de 1906 a 1999 (JPG, PDF) | Open Government Licence – Canada 2.0 (comercial permitido) | exigido: Contains information licensed under the Open Government Licence – Canada. | NÃO MEDIDO | registros por script; arquivos só navegador | federal (Canadá) | **recomendo** (Canadá) |
| 12 | Alaska State Library / Alaska's Digital Archives (extra) | fotos e documentos do Alasca | vídeo e web pedem permissão escrita | não fixado | 72 dpi grátis; 600 dpi por US$ 30 | busca só navegador | estadual (Alasca) | com ressalvas |
| 13 | Harvard Map Collection | mapas digitalizados | política: obra em domínio público pode ser usada para qualquer fim | pedido: citar a fonte | 13.758 px (amostra) | **script** (LibraryCloud + IIIF) | universidade privada | **recomendo**, se universidade couber |
| 14 | Stanford Libraries | mapas (PURL, EarthWorks) | item a item: PDM, "no restrictions on use"; itens Rumsey NC | cortesia opcional | 5.709 e 10.413 px (amostras) | script para metadado (PURL); servidor de imagem não respondeu | universidade privada | com ressalvas |
| 15 | David Rumsey Map Collection | mapas históricos | CC BY-NC-SA 3.0 | David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries | NÃO MEDIDO | só navegador | privado | **não serve** (sem permissão escrita) |
| 16 | Leventhal Center (Boston Public Library) | mapas e atlas | domínio público: publicar não pede permissão | Reproduction courtesy of the Norman B. Leventhal Map & Education Center at the Boston Public Library | TIFF e JPEG em alta (NÃO MEDIDO) | só navegador (403) | biblioteca pública municipal | com ressalvas |
| 17 | Perry-Castañeda (UT Austin) | mapas escaneados (muitos federais) | "maioria em domínio público; sem permissão" | apreciado: University of Texas Libraries | NÃO MEDIDO | só navegador (Anubis) | universidade pública | com ressalvas |
| 18 | Old Maps Online | agregador | NÃO CONFERIDO | — | — | Cloudflare 403 | agregador | não serve |
| 19 | NYPL Digital Collections | imagens e mapas | API: No Known U.S. Copyright / CC0 por item; site NÃO CONFERIDO | sugerido: From The New York Public Library | NÃO MEDIDO | só navegador (Imperva); a Repo API seria desligada em 01/08/2026 | não é governo | com ressalvas |
| 20 | Rijksmuseum | 5.289 mapas com imagem | CC0 ou livre, inclusive comercial; alguns CC BY 4.0 | pedido: Rijksmuseum | NÃO MEDIDO | metadado por script; imagem só navegador | museu nacional (NL) | com ressalvas |
| 21 | Art Institute of Chicago | arte; poucos mapas | dados CC0; licença de imagem NÃO CONFERIDA | NÃO CONFERIDO | 1.686 px documentado para domínio público | metadado por script; imagem recusou (403) | museu, não é governo | não serve |
| 22 | Cleveland Museum of Art | arte; cerca de 25 gravuras de mapa | CC0 | não exigido | print 3.400 px; full ~10.500 px | **script** (API sem chave) | museu, não é governo | com ressalvas |
| 23 | Getty Open Content | arte e arquivo | CC0 | pedido, não exigido: Digital image courtesy of Getty's Open Content Program | NÃO MEDIDO | páginas por script; imagem só navegador | fundação, não é governo | com ressalvas |
| 24 | Wellcome Collection | medicina; 3 mapas online | item a item (PDM, CC BY, CC BY-NC…) | CC BY exige; PDM não | 5.615 px (amostra) | script pela API; o site recusou | fundação, não é governo | não serve (para mapa) |
| 25 | Biodiversity Heritage Library | literatura científica (mapas em relatórios) | item a item; domínio público livre | apreciado: Image from the Biodiversity Heritage Library… | NÃO MEDIDO | API com chave; imagens vetadas no robots | consórcio | com ressalvas |
| 26 | DPLA | agregador | NÃO CONFERIDO | — | — | 403 e 405 | agregador | não serve |

## As três que mais recomendo para mapas

1. **USGS topoView / Historical Topographic Map Collection.** Domínio público federal sem ressalva nos mapas
   históricos. Scans de 600 PPI e busca por API sem chave. Tem o Juneau: 46 folhas na caixa testada, com
   edições de 1948 a 1996. E o USGS já está na lista do Lucas.
2. **NOAA Historical Map & Chart Collection.** Obra federal em domínio público, com CC0 no registro oficial:
   35 mil cartas de costa, porto e canal desde os anos 1700, inclusive as do Alasca. O custo é ser só pelo
   navegador.
3. **Harvard Map Collection**, se o Lucas aceitar universidade. Tem política institucional clara para domínio
   público, com uso "para qualquer fim", 13.758 px na amostra e acesso por API e IIIF.
   - A Stanford vem logo atrás: tem rótulo de domínio público item a item e 10.413 px, mas mistura itens
     Rumsey (não comerciais).
   - Se valer só órgão de governo, a terceira vira o **NPS Carto** (mapa atual de parque, vetorial) ou, para o
     Canadá, o **NRCan / Atlas of Canada** (licença de governo aberta, com uso comercial escrito).

## NÃO CONFERIDO

| Fonte | O que não foi conferido | Motivo |
|---|---|---|
| Old Maps Online | tudo | Cloudflare 403 na home (o robots.txt permitia) |
| DPLA | tudo | `dp.la` 403 (até o robots.txt); `pro.dp.la` 405 |
| NYPL | termos do site e resolução | desafio do Imperva em `digitalcollections.nypl.org` e `nypl.org` |
| National Library of Scotland | página de copyright dos mapas, o site de mapas e a resolução | `maps.nls.uk` 405 (inclusive a página da API); `www.nls.uk` 403 ao `curl` |
| Perry-Castañeda | FAQ do próprio site, portais e resolução | Anubis em `maps.lib.utexas.edu`, `collections.lib.utexas.edu` e `geodata.lib.utexas.edu`; a licença veio da LibGuide oficial |
| Leventhal | portal de coleções, direitos item a item e resolução | `collections.leventhalmap.org` 403; `digitalcommonwealth.org` sem conexão |
| David Rumsey | páginas de item e resolução | "Verify Access" |
| Art Institute of Chicago | licença das imagens, crédito e imagens | `www.artic.edu` 403 (site e IIIF) |
| Wellcome | página de licenças do site | 405 |
| NOAA | páginas do site da coleção | robots `Disallow: /`; a licença veio do InPort e do FAQ do Coast Survey; a página `noaa.gov/disclaimer` deu 403 |
| Library and Archives Canada | busca da coleção e resolução | 403 |
| National Library of Australia | catálogo, objetos digitais e resolução | Anubis |
| State Library of NSW | catálogo e resolução | 403 |
| Stanford | servidor de imagem (`stacks.stanford.edu`) e robots do SearchWorks | timeout desta máquina |
| Harvard | sites de busca CURIOSity e HOLLIS | desafio da AWS (HTTP 202 vazio) e robots `Disallow: /` |
| Getty | resolução | `media.getty.edu` devolveu 503 no robots.txt, o que a RFC 9309 manda tratar como veto |
| Rijksmuseum | resolução | robots do `iiif.micr.io` veta tudo |
| Biodiversity Heritage Library | resolução | robots veta `/pageimage` e as buscas |
| British Library | página formal de reuso de imagens | a antiga deu 404; o blog oficial arquivado deu 404; a licença veio dos termos do site e do rótulo do item |
| NRCan | resolução dos arquivos | robots veta `/pub` |
| NPS | FAQ do GIS (sem as respostas no HTML) e px do JPG | — |
| CIA | largura dos JPG | a página só mostra o peso; não baixei mídia |

---

## Fichas

### A. Órgãos de governo dos EUA

#### 1. USGS topoView e Historical Topographic Map Collection (HTMC)

- **Oficial?** Sim: órgão federal. O USGS já está na lista do canal (§7.3).
- **Mídia:**
  - mapas topográficos históricos de 1884 a 2006, que o USGS descreve como mais de 185 mil arquivos
    georreferenciados;
  - US Topo, de 2009 em diante;
  - formatos: GeoTIFF, GeoPDF, JPEG e KMZ.
- **Licença:** domínio público. O FAQ do USGS diz que todos os mapas topográficos do USGS estão em domínio
  público e não têm copyright. Há três exceções, e só no US Topo (2009+):
  1. dados de estrada licenciados, de 2010 a 2016;
  2. ortoimagens licenciadas em alguns US Topo antigos do **Alasca**;
  3. ortoimagens do Havaí, até 2016.

  Mesmo esses podem ser reproduzidos para qualquer fim, desde que se mantenham os avisos de copyright da
  legenda de créditos. A regra vale para a coleção toda. No metadado da folha de amostra (Juneau A-1 NW, 1986),
  o campo de restrição de uso diz `None`.
- **Uso comercial e YouTube:** sim.
- **Crédito:**
  - o FAQ pede, sem exigir, que se reconheça o USGS como fonte do mapa;
  - a página de créditos sugere "Credit: U.S. Geological Survey" ou "Department of the Interior/USGS";
  - pela regra do canal, domínio público federal vai sem crédito na tela e com procedência (identidade §7), e o
    pedido cabe na descrição.
- **Restrições:**
  - o identificador visual do USGS é marca;
  - US Topo antigo do Alasca: manter o aviso da ortoimagem de terceiros;
  - não há taxa.
- **Resolução:**
  - o GeoTIFF sai em 300 dpi (ajuda do topoView);
  - o metadado da folha de amostra diz scan de 600 PPI (mínimo de 400) e folha de 21,9 × 26,9 pol. Daí o
    GeoTIFF fica em ≈ 6.570 × 8.070 px, e o scan de origem do GeoPDF tem até ≈ 13.140 px de largura;
  - esses números são conta sobre o metadado oficial: não baixei o arquivo;
  - no Juneau, o GeoTIFF pesa de 4 a 9 MB e o GeoPDF uns 21 MB;
  - a caixa do Juneau tem 46 folhas históricas na TNM Access API. As que o bucket lista com o nome "Juneau" vão
    de 1948 a 1996, nas escalas 1:63.360 e 1:25.000.
- **Acesso automático:**
  - a TNM Access API (`tnmaccess.nationalmap.gov/api/v1/products`) funciona sem chave e respondeu ao WebFetch e
    ao `curl`;
  - os arquivos ficam no bucket público `prd-tnm` (S3);
  - o robots do `ngmdb.usgs.gov` não veta `/topoview/`. Ele veta `/ngm-bin/`, `/img*`, `/images/` e outros
    caminhos;
  - o robots do `tnmaccess` respondeu 403. Pela RFC 9309, robots indisponível com 4xx não veta;
  - não achei termo sobre script.
  - **Conclusão: script.**
- **Termos lidos** em 27/09/2026:
  - https://www.usgs.gov/faqs/are-usgs-topographic-maps-copyrighted
  - https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits
  - https://ngmdb.usgs.gov/topoview/help/
  - o metadado XML da folha de amostra (`thor-f5.er.usgs.gov/.../AK_Juneau_A1_NW_353674_1986_25000_geo.xml`)
- **Veredito: recomendo.** Domínio público claro, resolução alta, API aberta, e o órgão já está na lista do
  Lucas.

#### 2. NOAA Historical Map & Chart Collection (Office of Coast Survey)

- **Oficial?** Sim: órgão federal. Não está nominalmente no §7.3: as "federais" do Lucas foram sala de imprensa
  e DVIDS. A lógica, porém, é a mesma: obra federal, domínio público por lei (17 U.S.C. §105).
- **Mídia:**
  - mais de 35 mil mapas e cartas, de meados dos anos 1700 até os anos 2020;
  - cartas náuticas, levantamentos hidrográficos, topográficos e geodésicos, planos de cidade e mapas da Guerra
    Civil;
  - cartas aeronáuticas dos anos 1930 a 1950;
  - formato JPEG, e PDF só nas versões raster finais.
- **Licença:**
  - o registro oficial InPort, com metadado atualizado em 01/09/2026, diz: domínio público, CC0-1.0, "Usage is
    not restricted";
  - o FAQ do Coast Survey diz que as cartas históricas estão em domínio público e podem ser usadas para
    qualquer fim, sem custo;
  - o registro da coleção no AWS Open Data diz que os dados da NOAA ali são abertos e podem ser usados como se
    quiser, sem sugerir endosso e sem apresentar dado modificado como original;
  - vale para a coleção toda.
- **Uso comercial:** sim.
- **Crédito**, pedido e não exigido:
  - o FAQ pede "Provided by NOAA Office of Coast Survey";
  - o InPort pede a citação do conjunto, pelo DOI `10.25923/qzp6-4r20`.
- **Restrições:** as cartas não servem para navegação, e não se pode sugerir endosso da NOAA.
- **Resolução:** no bucket da AWS há um único descritor Deep Zoom (`preview/0-0-0.dzi`), que dá **9.756 ×
  5.687 px** para a única carta que está lá (`jpgs/0-0-0.jpg`, 2,3 MB). A resolução do acervo do site ficou NÃO
  MEDIDA.
- **Acesso automático:**
  - o robots.txt do `historicalcharts.noaa.gov` diz `User-agent: *` e `Disallow: /`: veta tudo;
  - o bucket `noaa-nos-historicalcharts-pds` (AWS Open Data) existe e abre sem conta. Porém, **listado em
    27/09/2026, tinha um só JPG** (`jpgs/0-0-0.jpg`) e os tiles dele;
  - o grupo 1 concluiu "script: sim, pelo bucket". Pela minha listagem, o acervo não está lá hoje.
  - **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026:
  - https://www.fisheries.noaa.gov/inport/item/39977
  - https://nauticalcharts.noaa.gov/learn/faq.html
  - https://registry.opendata.aws/noaa-historicalcharts/
- **Veredito: recomendo, pelo navegador.** A licença é a mais limpa possível e o acervo de costa do Alasca é
  enorme. O custo é não haver busca por script.

#### 3. NPS: Harpers Ferry Center Cartography (nps.gov/carto)

- **Oficial?** Sim: órgão federal.
- **Mídia:** mais de mil mapas de parque, atuais, em JPEG, PDF e Adobe Illustrator em camadas.
- **Licença:**
  - a página do HFC diz que todos os mapas do site Carto estão em domínio público;
  - a política do site do NPS lembra que obra do governo dos EUA não tem copyright;
  - vale para o site todo, com a exceção geral de conteúdo de terceiros.
- **Uso comercial:** sim. Na republicação comercial, o NPS diz que o aviso de copyright deve mencionar a obra
  original do governo dos EUA.
- **Crédito:** apreciado. O NPS gosta que se cite o National Park Service como fonte (política do site). O
  grupo 1 não achou esse pedido nas páginas do Carto.
- **Restrições:** o símbolo da ponta de flecha (*arrowhead*) exige permissão escrita do diretor do NPS, e parte
  do conteúdo do site é de terceiros.
- **Resolução:** PDF e AI são vetoriais e servem a qualquer tamanho. O JPEG ficou NÃO MEDIDO.
- **Acesso automático:**
  - o robots do `nps.gov` veta `/search/`, `/ns/` e `loader.cfm`, e deixa `/carto/` livre;
  - o portal Carto é um app em JavaScript.
  - **Conclusão: script** nos arquivos; a busca se faz pelo app.
- **Termos lidos** em 27/09/2026:
  - https://www.nps.gov/subjects/hfc/map-information.htm
  - https://www.nps.gov/aboutus/disclaimer.htm
  - https://www.nps.gov/carto/
- **Veredito: recomendo** para mapa atual de parque (Glacier Bay, Denali). É mapa pronto, com a identidade
  visual do NPS: na cena, serve mais como referência de traçado ou como documento na tela.

#### 4. CIA: World Factbook e "CIA Maps"

- **Oficial?** Sim: órgão federal.
- **Novidade:** a CIA encerrou o **World Factbook em 04/02/2026**. As páginas do Factbook no cia.gov, inclusive
  as de arquivo de edições antigas, mostram só o aviso de encerramento. Continua no ar a seção **CIA Maps**
  (`cia.gov/resources/cia-maps/`), com 110 mapas de país.
- **Mídia:** mapas de país em JPG. A Argentina, por exemplo, tem três: administrativo e fisiografia, de 2015, e
  transporte, sem data.
- **Licença:**
  - a página do mapa diz que os mapas-base estão em domínio público e podem ser copiados livremente, sem
    permissão da CIA;
  - a política do site diz que, salvo copyright indicado, o conteúdo está em domínio público.
- **Uso comercial:** sim. A lei proíbe usar o nome, a sigla ou o selo da CIA em atividade comercial de um jeito
  que sugira aprovação da agência.
- **Crédito:** a CIA pede que a Agência seja citada como fonte.
- **Resolução:** os três JPG da Argentina pesam de 111 a 166 kB. A página não dá a largura e eu não baixei o
  arquivo: NÃO MEDIDO. Pelo peso, devem ser pequenos para 4K.
- **Acesso automático:**
  - o robots do cia.gov pede crawl-delay de 10 s a robô genérico;
  - veta `.js`, `.json`, `/preview/` e as buscas do *reading room*, e bloqueia wget e HTTrack pelo nome.
  - **Conclusão:** script possível, mas pouco útil.
- **Onde estão os mapas antigos do Factbook:** no Wikimedia Commons, que já está na lista, e na PCL, que só
  abre pelo navegador (ficha 17).
- **Termos lidos** em 27/09/2026:
  - https://www.cia.gov/resources/map/argentina/
  - https://www.cia.gov/site-policies/
  - https://www.cia.gov/the-world-factbook/
- **Veredito: com ressalvas.** A licença é limpa, mas o Factbook acabou e os mapas que restam são pequenos.

#### 5. ONU: UN Geospatial (mapas gerais; o "atlas" da ONU)

- **Oficial?** Intergovernamental: Seção de Informação Geoespacial do Secretariado da ONU.
- **Mídia:**
  - mapas gerais de país em PDF vetorial e JPG. O do Mali, mapa 4231 rev. 4 de fevereiro de 2020, tem PDF de
    1,56 MB e JPG de 2,32 MB;
  - mapas temáticos;
  - mais de 10 mil publicações cartográficas antigas, na Dag Hammarskjöld Digital Library.
- **Licença:** não é aberta.
  - Os mapas são propriedade da ONU, que tem todos os direitos sobre o uso deles.
  - Em princípio, podem ser usados dando o crédito devido e avisando a ONU.
  - **Republicar sem modificação:** pedir por e-mail (geospatial@un.org), com os dados da publicação e o
    número do mapa.
  - **Mapa derivado:** permitido. É preciso tirar o nome da ONU e o número do mapa, e pode-se dizer "based on
    United Nations map".
  - A página geral de copyright da ONU diz "todos os direitos reservados" e pede permissão escrita para
    reproduzir.
- **Uso comercial:** não vem autorizado de antemão. As páginas não falam de uso comercial, como o grupo 5
  também notou.
- **Crédito:** "appropriate credit", sem texto fixado. Quem hospeda uma cópia atribui à Geospatial Information
  Section e põe link para www.un.org/geospatial.
- **Resolução:** o PDF é vetorial. O JPG pesa 2,3 MB, com largura NÃO MEDIDA.
- **Acesso automático:** o robots do un.org pede crawl-delay de 10 s e veta `/search/`; as páginas de mapa são
  livres. **Conclusão:** script para ler, mas o uso é por e-mail.
- **Termos lidos** em 27/09/2026:
  - https://www.un.org/geospatial/mandates/public
  - https://www.un.org/en/about-us/copyright
  - https://www.un.org/geospatial/content/mali
- **Veredito: com ressalvas.** Serve como referência para redesenhar, já que o derivado é permitido. Mostrar o
  mapa da ONU pede e-mail a cada mapa.

### B. Bibliotecas nacionais e estaduais

#### 6. British Library (mapas; King's Topographical Collection no Flickr Commons)

- **Oficial?** Sim: biblioteca nacional do Reino Unido, órgão público.
- **Mídia:** no Flickr, o álbum da King's Topographical Collection tem 17.907 fotos de mapas, vistas e atlas de
  1500 a 1824.
- **Licença:** item a item.
  - O item de amostra (Maps K.Top 124.supp.fol.87, de 1792) traz o rótulo **"No known copyright
    restrictions"**.
  - Os termos do site da BL dizem que, no conteúdo marcado como domínio público, o uso é livre, mas sem
    garantia sobre direitos de terceiros.
  - O Flickr Commons explica que esse rótulo não é garantia e pede análise própria.
  - O conteúdo Creative Commons da BL é só para uso não comercial.
- **Uso comercial:** sim no que está marcado como domínio público.
- **Crédito:** os termos lidos não exigem crédito para domínio público.
- **Restrições:** os termos do site proíbem montar base de dados com material baixado dele, salvo permissão
  expressa. Uma automação teria de ler isso antes.
- **Resolução:** o original do item de amostra tem 4.000 × 2.751 px.
- **Acesso automático:**
  - o robots do `bl.uk` permite tudo;
  - o robots do Flickr veta tudo (`User-agent: *` e `Disallow: /`) para robô genérico;
  - a API do Flickr exige chave, e aplicação cujo fim principal é gerar receita precisa de chave comercial.
  - **Conclusão: só navegador**, ou a API do Flickr, com chave, numa decisão à parte.
- **Termos lidos** em 27/09/2026:
  - https://www.bl.uk/terms (a seção do site diz "last updated on 08 October 2018")
  - https://www.flickr.com/photos/britishlibrary/50265296713/, com o `/sizes/o/`
  - https://www.flickr.com/commons/usage/
  - https://www.flickr.com/help/terms/api
- **Veredito: com ressalvas.** Biblioteca nacional, com rótulo de domínio público item a item e 4.000 px. Mas é
  só pelo navegador, e o rótulo do Flickr não dá garantia.

#### 7. National Library of Scotland (Map images)

- **Oficial?** Sim: biblioteca nacional da Escócia, órgão público.
- **Licença:**
  - o guia de copyright da NLS, atualizado em 17/02/2026, diz que a cópia fiel tem o mesmo status do original.
    Onde houver direito na camada de digitalização, a NLS renuncia a ele com **CC0**;
  - em outros conteúdos a NLS usa CC BY ou CC BY-NC-SA;
  - nos mapas há Crown copyright (o Ordnance Survey, por exemplo) e não-Crown, e o guia manda à página de
    copyright dos mapas (`maps.nls.uk/copyright.html`), que recusou: NÃO CONFERIDO.
- **Uso comercial:**
  - obra em domínio público, sim, pelo CC0 na camada digital;
  - a NLS define reuso comercial incluindo mídia sustentada por publicidade e transmissão. Por isso, item
    CC BY-NC-SA não serve.
- **Crédito:** CC0 não exige; CC BY exige atribuir e citar a licença.
- **Restrições:** a página de taxas lista preços por imagem para reuso comercial de imagens fornecidas pela NLS
  e o royalty de mapa OS ainda em copyright. Se isso vale para o que se baixa do site de mapas ficou NÃO
  CONFERIDO.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:**
  - `maps.nls.uk` respondeu 405 ao WebFetch, inclusive na página da API de mapas históricos;
  - `www.nls.uk` respondeu 200 ao WebFetch e 403 a um `curl` comum desta máquina. O robots dele veta só
    `/umbraco/`.
  - **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026:
  - https://www.nls.uk/copyright/
  - https://www.nls.uk/tools-for-research/copyright/licensing-fees/
  - https://www.nls.uk/collections/maps/services/reprographics/
- **Veredito: com ressalvas.** A política geral é boa, mas a página dos mapas não foi conferida e o site recusa
  script.

#### 8. State Library of New South Wales

- **Oficial?** Sim: biblioteca do estado de Nova Gales do Sul, na Austrália.
- **Licença:** item a item: o status vem no registro do catálogo. A página de copyright diz que o material do
  catálogo fora de copyright pode ser usado livremente para qualquer fim, inclusive comercial.
- **Crédito:** pede reconhecer o criador e dizer que o material vem das coleções da State Library of NSW.
- **Restrições:** material em copyright pede permissão. Há também material culturalmente sensível e acordos de
  doação.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:**
  - o robots do www veta `/search/` e barra, pelo nome, uma lista de robôs de IA (ClaudeBot, Claude-SearchBot,
    Claude-Web, anthropic-ai, ChatGPT-User e outros). Robô genérico não é barrado;
  - o catálogo (`collection.sl.nsw.gov.au`) respondeu 403 ao WebFetch e ao `curl`.
  - **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026, pelo `curl` (ver "Como li"):
  - https://www.sl.nsw.gov.au/copyright
  - https://www.sl.nsw.gov.au/copyright/your-responsibilities
- **Veredito: com ressalvas.** Só pelo navegador, e o acervo é da Austrália e do Pacífico.

#### 9. National Library of Australia, Maps Collection (extra)

- **Oficial?** Sim: biblioteca nacional da Austrália.
- **Licença:**
  - mapa publicado até 1954 está livre de copyright;
  - depois disso, o de governo fica protegido por 50 anos, e o de outros editores por 70, contados do fim do
    ano de publicação;
  - para publicar, não precisa de permissão da Biblioteca.
- **Crédito, exigido:** uma citação que reconheça a National Library como custodiante e traga o número de
  coleção do item.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:** o robots do `www.nla.gov.au` permite. O catálogo e os objetos digitais
  (`nla.gov.au/nla.obj-…`) estão atrás do Anubis, com acesso negado. **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026: https://www.library.gov.au/services/copyright-library-collections/rights-and-maps-collection
  (publicada em 23/03/2022).
- **Veredito: com ressalvas.** A licença é clara, mas é só pelo navegador.

#### 10. Library and Archives Canada (extra)

- **Oficial?** Sim: arquivo e biblioteca nacional do Canadá, governo federal.
- **Licença** (termos modificados em 24/09/2026):
  - a reprodução não comercial não pede permissão. As condições são manter a exatidão, não revisar nem traduzir,
    dar o título e o autor, e citar a URL;
  - a redistribuição comercial de material do Governo do Canadá pede **permissão prévia por escrito**;
  - a imagem com copyright expirado pode estar em domínio público no Canadá e não estar em outros países.
- **Crédito:** título completo, autor (quando houver) e URL.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:** a busca da coleção (`recherche-collection-search.bac-lac.gc.ca`) respondeu 403.
  **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026: https://www.canada.ca/en/library-archives/terms-conditions.html
- **Veredito: com ressalvas.** Uso comercial de material do governo pede permissão escrita.

#### 11. Natural Resources Canada: Atlas of Canada, edições históricas (extra)

- **Oficial?** Sim: governo federal do Canadá.
- **Mídia:** mapas das edições do Atlas of Canada de 1906, 1915, 1958, 1974 e 1993, e do atlas online de 1999.
  Há mapas avulsos em JPG e PDF, como o "Routes of Explorers" da 1ª edição, de 1906.
- **Licença:** **Open Government Licence – Canada 2.0**, conforme o registro no Portal de Governo Aberto. É
  mundial, gratuita e perpétua, e vale inclusive para fins comerciais: permite copiar, modificar, publicar e
  adaptar.
- **Crédito, exigido pela licença:** a frase do provedor ou, se ele não der uma, "Contains information licensed
  under the Open Government Licence – Canada."
- **Restrições:** a licença não cobre informação pessoal, direitos de terceiros, símbolos oficiais (brasões e
  logos) nem marcas.
- **Resolução:** NÃO MEDIDO: o servidor dos arquivos veta robôs em `/pub`.
- **Acesso automático:**
  - o robots do `open.canada.ca` pede crawl-delay de 20 s e veta busca e ordenação. Os registros dos datasets
    são legíveis;
  - os arquivos ficam em `ftp.geogratis.gc.ca/pub`, que o robots desse servidor veta a todos.
  - **Conclusão:** os registros saem por script; baixar, só pelo navegador.
- **Termos lidos** em 27/09/2026:
  - https://open.canada.ca/en/open-government-licence-canada
  - https://open.canada.ca/data/en/dataset/3923ef2c-1287-50da-8828-cd151c1145b9
  - https://natural-resources.canada.ca/maps-tools-publications/maps/atlas-canada/atlas-editions-historical-maps
    (modificada em 13/02/2026)
- **Veredito: recomendo** para mapa do Canadá (a fronteira Alasca–Canadá, o Yukon, a Colúmbia Britânica). É
  licença aberta de governo, com uso comercial escrito. Baixar pelo navegador.

#### 12. Alaska State Library / Alaska's Digital Archives (vilda) (extra)

- **Oficial?** Sim: governo estadual. São a Alaska State Library e os Alaska State Archives, no portal
  Alaska's Digital Archives, que eles mantêm com a Universidade do Alasca e outros.
- **Licença:**
  - as imagens podem ser impressas ou baixadas para uso pessoal, estudo, pesquisa ou ensino, sem permissão, e
    vale o uso justo;
  - qualquer outro uso pede **permissão por escrito**, inclusive publicação eletrônica, site, filme e vídeo;
  - o pedido se faz por dois formulários:
    - "Lo-Res Use", grátis: a pessoa baixa a imagem de 72 dpi;
    - "Hi-Res Use", por **US$ 30**: a biblioteca manda o arquivo de 600 dpi em até duas semanas.
- **Crédito:** a página não fixa um texto.
- **Resolução:** 72 dpi grátis, ou 600 dpi pagos.
- **Acesso automático:** o robots do `vilda.alaska.edu` veta todas as buscas (`/digital/search/` e as das
  coleções) e pede crawl-delay de 1 s. As páginas de item são livres. **Conclusão:** a busca é só pelo navegador.
- **Termos lidos** em 27/09/2026: https://library.alaska.gov/hist/vilda_rights.html (a página diz "last updated
  03/09/2026").
- **Veredito: com ressalvas.** É muito relevante para o Juneau, mas pede permissão escrita para vídeo e cobra
  pela alta resolução.
- **Nota ao Lucas:** o §7.5 do `marca/midia.md` deixa entrar foto do governo do Alasca citando a fonte. A
  própria Alaska State Library, porém, pede permissão escrita para uso em vídeo. Vale ele saber disso.

### C. Universidades e coleções de mapas

#### 13. Harvard Map Collection (Harvard Library)

- **Oficial?** Não: universidade privada.
- **Licença:**
  - pela política de 30/09/2014, Harvard não afirma copyright sobre a reprodução digital de obra em domínio
    público disponível sem login nos sites dela. Essa reprodução pode ser usada **para qualquer fim**, sem pedir
    permissão;
  - quem usa determina se a obra está em domínio público no lugar do uso;
  - o que não está em domínio público fica só para uso educacional ou uso justo.
- **Uso comercial:** sim, para obra em domínio público.
- **Crédito:** Harvard pede, como boa prática acadêmica, que se cite a fonte da reprodução.
- **Restrições:**
  - não usar o nome nem o logo de Harvard em publicidade, nem sugerir relação;
  - restrições de doador aparecem no registro do catálogo.
- **Resolução:**
  - amostra "Mount McKinley National Park, Alaska" (USGS, 1953): **13.758 × 10.544 px** pelo IIIF;
  - uma segunda amostra respondeu "Image Unavailable".
- **Acesso automático:**
  - a LibraryCloud Item API (`api.lib.harvard.edu`) e o IIIF (`ids.lib.harvard.edu`, que leva ao
    `mps.lib.harvard.edu`) responderam a script. Nenhum dos dois hosts tem robots.txt. A API não pede chave nas
    páginas lidas, e o metadado é CC0;
  - o CURIOSity devolveu desafio (HTTP 202 vazio, AWS/CloudFront);
  - o HOLLIS tem robots `Disallow: /`;
  - os termos de Harvard proíbem reproduzir em massa, ou de forma sistemática, só os recursos licenciados
    (e-resources), não as coleções digitalizadas.
  - **Conclusão: script** pela API e pelo IIIF; os sites de busca, só pelo navegador.
- **Termos lidos** em 27/09/2026:
  - https://library.harvard.edu/policy-access-digital-reproductions-works-public-domain
  - https://library.harvard.edu/about/policies/privacy-terms-use-copyright-information (seção *Digitized
    Content* / *Viewer*)
  - https://library.harvard.edu/services-tools/harvard-library-apis-datasets
- **Veredito: recomendo, se universidade couber no critério do Lucas.** Política clara, resolução muito alta e
  acesso por API.

#### 14. Stanford Libraries (Stanford Digital Repository; Branner Map Collections)

- **Oficial?** Não: universidade privada.
- **Licença:** item a item.
  - Os itens em domínio público vêm com **Public Domain Mark 1.0**: "There are no restrictions on use."
  - Os itens da **coleção David Rumsey na Stanford** são CC BY-NC-SA 3.0 e não servem ao canal.
  - Os dados licenciados de fornecedor são só para afiliados de Stanford (a amostra foi uma carta NIMA pela Land
    Info).
- **Uso comercial:** sim nos itens PDM; não nos itens Rumsey.
- **Crédito:** PDM não exige. A Stanford propõe uma linha de cortesia: "Image from the Map Collections courtesy
  Stanford University Libraries".
- **Resolução**, pelo JSON do PURL:
  - **5.709 × 5.839 px** (Arrowsmith, África, 1857);
  - **10.413 × 12.634 px** (*Alaska, Nome special map*).
- **Acesso automático:**
  - o robots do `purl.stanford.edu` não veta nada, e o JSON do PURL traz a licença e as dimensões;
  - o servidor de imagem (`stacks.stanford.edu`) e o robots do SearchWorks deram timeout desta máquina: NÃO
    CONFERIDO;
  - a Stanford publica os metadados de mapa no GitHub (OpenGeoMetadata).
  - **Conclusão:** script para metadado; a imagem ficou a conferir.
- **Termos lidos** em 27/09/2026:
  - https://purl.stanford.edu/qr891rz3640
  - https://purl.stanford.edu/kv203yh6355
  - https://purl.stanford.edu/rz172st2176
  - https://purl.stanford.edu/dn408qp7277
  - https://sdr.library.stanford.edu/documentation/copyrights-licenses-and-access-restrictions
- **Veredito: com ressalvas**, perto de recomendo: o rótulo PDM item a item é a melhor prova de licença deste
  grupo. Mas é item a item, e mistura itens Rumsey (NC) e itens restritos.

#### 15. David Rumsey Map Collection

- **Oficial?** Não: coleção privada, com o David Rumsey Map Center na Stanford.
- **Licença:** **CC BY-NC-SA 3.0**. O site diz que quem baixa aceita os termos dessa licença.
  - A página de copyright também diz que as imagens podem ser usadas sem custo em qualquer publicação, por
    editora com ou sem fins lucrativos.
  - A página *About* define uso comercial como vender reproduções.
  - As duas coisas contradizem a licença NC-SA.
  - Na Stanford, os mesmos itens dizem: não para uso comercial; para publicar ou reproduzir comercialmente,
    contatar rumseymapcenter@stanford.edu.
- **Uso comercial em YouTube monetizado:** não, sem permissão escrita. A licença é NC, e o SA obrigaria a
  licenciar o vídeo em CC.
- **Crédito:** David Rumsey Map Collection, David Rumsey Map Center, Stanford Libraries. A página de copyright
  escreve "Stanford University Libraries".
- **Restrições:**
  - mapa publicado depois de 1929 pode ainda estar em copyright;
  - imagem sem botão de download não pode ser usada.
- **Resolução:** NÃO MEDIDO: a página de item pede "Verify Access".
- **Acesso automático:** o robots.txt veta a busca (`/luna/servlet/search`, `/luna/servlet/view/search`) e o
  export, com Crawl-Delay de 500 s. As páginas de item devolveram "Verify Access". **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026:
  - https://www.davidrumsey.com/about
  - https://www.davidrumsey.com/about/copyright-and-permissions
  - https://purl.stanford.edu/dn408qp7277
- **Veredito: não serve**, salvo permissão escrita por e-mail (carto@davidrumsey.com ou
  rumseymapcenter@stanford.edu).
- **Cuidado:** um mapa do Rumsey pode aparecer no Commons marcado como domínio público. A origem diz NC. Isso
  não foi conferido nesta rodada, e, na dúvida, prefira a mesma obra numa fonte com rótulo explícito: Stanford
  PDM, Harvard ou LoC.

#### 16. Norman B. Leventhal Map & Education Center (Boston Public Library)

- **Oficial?** Biblioteca pública municipal (Boston).
- **Licença:**
  - a BPL em geral não tem copyright dos itens e não impõe restrição além da que o original já tem;
  - material em domínio público pode ser publicado sem permissão;
  - o "CC BY-ND 4.0" da página vale para o material do site (o texto, "unless specified otherwise"), não para
    os mapas.
- **Uso comercial:** sim para domínio público. A página não fala de vídeo.
- **Crédito, pedido:** Reproduction courtesy of the Norman B. Leventhal Map & Education Center at the Boston
  Public Library. Se houver instituição parceira, ela também.
- **Restrições:** os mapas das parceiras não se baixam pelo portal: o pedido vai à dona.
- **Resolução:** a página promete TIFF e JPEG em alta para a maioria dos mapas. NÃO MEDIDO.
- **Acesso automático:** `collections.leventhalmap.org` respondeu 403 ao WebFetch e ao `curl`, até no
  robots.txt. O Digital Commonwealth não respondeu (conexão recusada). **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026: https://www.leventhalmap.org/collections/permissions
- **Veredito: com ressalvas.** A licença é boa para domínio público, mas é só pelo navegador.

#### 17. Perry-Castañeda Library Map Collection (UT Austin)

- **Oficial?** Universidade pública estadual.
- **Mídia:** mapas escaneados, muitos do governo dos EUA (CIA e AMS). O site da PCL foi **arquivado em 2021** e
  não é mais atualizado. Os arquivos passaram para o Texas GeoData e o portal Collections.
- **Licença:** a maioria dos mapas escaneados e servidos pela UT está em domínio público: não precisa de
  permissão, e pode-se baixar e usar como quiser. Os poucos com copyright vêm marcados.
- **Crédito:** apreciado: University of Texas Libraries.
- **Restrições:** o selo de agência do governo dos EUA não pode ser usado em atividade comercial de modo que
  sugira aprovação.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:** `maps.lib.utexas.edu`, `collections.lib.utexas.edu` e `geodata.lib.utexas.edu` estão
  atrás do Anubis, com acesso negado até no robots.txt. A LibGuide permite robô genérico, com crawl-delay de
  10 s. **Conclusão: só navegador.**
- **Termos lidos** em 27/09/2026: https://guides.lib.utexas.edu/maps/faq. A FAQ do próprio site da PCL recusou.
- **Veredito: com ressalvas.** A licença é boa, mas é só pelo navegador, e o conteúdo federal está também em
  fontes da lista.

#### 18. Old Maps Online

- **Oficial?** Não: agregador. Quem o opera ficou NÃO CONFERIDO.
- **NÃO CONFERIDO:** a home devolve 403 do Cloudflare. O robots.txt permitia tudo, menos `/auth/` e
  `/analytics/`.
- **Quem é dono de cada mapa:** como agregador, cada mapa é da instituição de origem, com a licença dela, e nada
  no agregador vale como prova.
- **Veredito: não serve** como fonte. No máximo, serve como busca pelo navegador para chegar à instituição dona.

### D. Museus, fundações e bibliotecas fora do governo (a família do The Met)

#### 19. NYPL Digital Collections

- **Oficial?** Não: a NYPL não é órgão de governo.
- **NÃO CONFERIDO no site:** `digitalcollections.nypl.org` e `nypl.org` devolvem o desafio do Imperva, até no
  robots.txt.
- **A documentação oficial da API** (`api.repo.nypl.org`) diz:
  - o rótulo de domínio público é "No Known U.S. Copyright", e há itens CC0;
  - crédito sugerido, não exigido: From The New York Public Library, com link;
  - token obrigatório e 10.000 pedidos por dia;
  - **a Repo API seria desligada a partir de 01/08/2026.**
- **Resolução:** NÃO MEDIDO.
- **Conclusão:** só navegador.
- **Veredito: com ressalvas.** O site não foi conferido, o acesso é só pelo navegador e a fonte fica fora da
  régua de oficiais.

#### 20. Rijksmuseum

- **Oficial?** É o museu nacional dos Países Baixos. Não conferi se é órgão de governo.
- **Mídia:** 5.289 mapas com imagem, pela busca da API (`type=map` e `imageAvailable=true`).
- **Licença:**
  - dados e imagens são livres, inclusive para fins comerciais, quando livres de copyright ou quando o museu
    renunciou aos direitos (CC0);
  - onde há direito, o museu indica CC BY 4.0;
  - foto de obra ainda em copyright não é livre.
- **Crédito:** pedido, não exigido: o Rijksmuseum.
- **Restrições:** não sugerir aprovação do museu.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:**
  - a Search API (`data.rijksmuseum.nl/search/collection`) funciona sem chave;
  - o robots do rijksmuseum.nl veta as páginas de busca;
  - o IIIF de imagens fica em `iiif.micr.io`, cujo robots.txt diz `Disallow: /` para todos.
  - **Conclusão:** metadado por script; imagem só pelo navegador.
- **Termos lidos** em 27/09/2026:
  - https://data.rijksmuseum.nl/policy
  - https://data.rijksmuseum.nl/docs/search
  - https://data.rijksmuseum.nl/docs/iiif/image
- **Veredito: com ressalvas.** A licença é ótima, mas é museu, da mesma família do The Met, e a imagem só sai
  pelo navegador.

#### 21. Art Institute of Chicago

- **Oficial?** Não: museu, não é órgão de governo.
- **Licença:**
  - os dados da API são CC0;
  - a documentação recomenda usar só imagens marcadas como domínio público, e avisa que o IIIF pode entregar
    imagem que não é;
  - a página de licença de imagens (`www.artic.edu`) recusou com 403: NÃO CONFERIDO.
- **Crédito:** NÃO CONFERIDO.
- **Resolução:**
  - a API informa, nas amostras de mapa, imagens de 1.475 a 9.564 px de largura;
  - o tamanho documentado para baixar imagem de domínio público pelo IIIF é **1.686 px**.
- **Acesso automático:**
  - a API (`api.artic.edu`) não pede chave e limita a 60 pedidos por minuto;
  - o museu pede 1 pedido por segundo, sem paralelismo, que se prefiram os *dumps*, e um cabeçalho
    `AIC-User-Agent` com o projeto e um e-mail;
  - o site e o IIIF (`www.artic.edu`) deram 403.
- **Termos lidos** em 27/09/2026: https://api.artic.edu/docs/ e a busca da API.
- **Veredito: não serve.** A licença de imagem não foi conferida, os 1.686 px documentados são pouco para 4K, e
  não é órgão de governo.

#### 22. Cleveland Museum of Art

- **Oficial?** Não: museu, não é órgão de governo.
- **Licença:** Open Access **CC0** para imagens e dados das obras em domínio público, mais da metade do acervo.
  Serve a qualquer aplicação, sem taxa nem restrição.
- **Crédito:** CC0 não exige.
- **Restrições:** ficam de fora a obra em copyright, a obra com restrição de doador ou artista e a obra não
  digitalizada.
- **Resolução:**
  - os tamanhos são 900 px (*web*), 3.400 px (*print*) e o TIFF *full*;
  - amostra: a planta de Roma de Nolli (1748), com ~10.500 × 6.700 px no *full*.
- **Mapas:** poucos. A busca achou 25 gravuras "map" com imagem CC0.
- **Acesso automático:**
  - a Open Access API não pede chave, e o dataset completo está no GitHub;
  - o robots do site veta `/api` e pede crawl-delay de 10 s, e o host da API só barra o Amazonbot.
  - **Conclusão: script.**
- **Termos lidos** em 27/09/2026:
  - https://www.clevelandart.org/open-access
  - https://openaccess-api.clevelandart.org/
- **Veredito: com ressalvas.** É a licença mais limpa entre os museus, com acesso por API, mas quase não tem
  mapas e não é órgão de governo.

#### 23. Getty (Open Content Program)

- **Oficial?** Não: J. Paul Getty Trust, não é órgão de governo.
- **Licença:** as imagens do Open Content são **CC0** e dispensam permissão. Servem a qualquer fim, inclusive
  comercial, desde que não se sugira aprovação da Getty.
- **Crédito:** pedido, não exigido: Digital image courtesy of Getty's Open Content Program.
- **Restrições:**
  - a Getty não garante direitos de terceiros (marca, privacidade);
  - arquivo maior que o gratuito é serviço pago.
- **Resolução:** NÃO MEDIDO. A FAQ diz que os tamanhos *Large* e *Highest Resolution* do Museu, e todos os
  arquivos do Research Institute, servem para impressão.
- **Acesso automático:**
  - o robots do getty.edu permite; veta só `/cgi-bin`, `/slampoets` e `/research/collections/mirador/`;
  - o servidor de imagem `media.getty.edu` devolveu 503 no robots.txt. Pela RFC 9309, isso se trata como veto.
  - **Conclusão:** páginas por script; imagem só pelo navegador.
- **Termos lidos** em 27/09/2026:
  - https://www.getty.edu/projects/open-content-program/faqs/
  - https://www.getty.edu/legal/terms-of-use/
- **Veredito: com ressalvas.** A licença é boa, mas há poucos mapas e não é órgão de governo.

#### 24. Wellcome Collection

- **Oficial?** Não: fundação, não é órgão de governo.
- **Licença:** item a item.
  - Na busca "map" com item online, as licenças somam: 677 em copyright, 615 PDM, 243 CC BY-NC, 160 CC BY,
    8 CC BY-NC-ND, 3 CC0 e 2 OGL.
  - A página de licenças do site recusou (405): NÃO CONFERIDO.
  - A API mostra a licença de cada item.
- **Mapas:** só 3 itens online do tipo "Maps".
- **Resolução:** amostra de **5.615 × 3.656 px** (mapa geológico das Ilhas Britânicas, de Geikie, PDM).
- **Acesso automático:**
  - o catálogo sai pela API sem cadastro, e o IIIF pede crawl-delay de 30 s;
  - o robots do site barra ClaudeBot, Claude-Web e anthropic-ai, não os robôs genéricos;
  - o site devolveu 405 ao WebFetch.
  - **Conclusão:** script pela API; o site, só pelo navegador.
- **Termos lidos** em 27/09/2026: https://developers.wellcomecollection.org/docs/catalogue, a busca da API e o
  manifesto IIIF da amostra.
- **Veredito: não serve** para mapa. Tem poucos, e a licença vai item a item, com NC.

#### 25. Biodiversity Heritage Library

- **Oficial?** Não: consórcio de bibliotecas.
- **Licença:** item a item.
  - É domínio público a obra publicada antes do ano atual menos 95, e a obra do governo dos EUA.
  - "No known copyright restrictions" pede cautela.
  - A obra em copyright entra com permissão, em geral sob CC BY-NC-SA 4.0.
  - A obra em domínio público pode ser reusada livremente, **inclusive para fins comerciais**.
- **Crédito, apreciado:** "Image from the Biodiversity Heritage Library. Contributed by [instituição]. |
  www.biodiversitylibrary.org".
- **Mapas:** aparecem dentro de livros e de relatórios de expedição.
- **Resolução:** NÃO MEDIDO.
- **Acesso automático:**
  - o robots veta `/search`, `/pageimage`, `/download`, `/itempdf` e outros caminhos;
  - a API v3 pede chave;
  - há exportações mensais, OAI-PMH e o AWS Open Data.
  - **Conclusão:** API com chave, ou navegador.
- **Termos lidos** em 27/09/2026:
  - https://about.biodiversitylibrary.org/help/copyright-and-reuse/
  - https://about.biodiversitylibrary.org/tools-and-services/developer-and-data-tools/
- **Veredito: com ressalvas.** Serve a mapa de expedição do século XIX, mas é item a item, e o que está em
  copyright é NC.

#### 26. DPLA

- **Oficial?** Não: agregador.
- **NÃO CONFERIDO:** `dp.la` devolveu 403, até no robots.txt, e `pro.dp.la` devolveu 405. A licença de cada item
  é a da instituição dona.
- **Veredito: não serve.**

## Notas sobre os recusados (The Met, Europeana, Openverse, Internet Archive)

- **Sobre a CIA:** com o fim do World Factbook em 04/02/2026, os mapas antigos dele saíram do cia.gov. O
  Wikimedia Commons, que está na lista, guarda muitos. Para quem pensar no Internet Archive: ele continua
  recusado, e o Commons e a PCL (só navegador) cobrem o mesmo material.
- **Sobre o The Met, a Europeana e o Openverse:** nada de novo.
- **Sobre a régua de oficiais:** a mesma lógica que tirou o The Met tiraria o Rijksmuseum, o Art Institute, o
  Cleveland, a Getty e a Wellcome. Entre elas, só o Cleveland tem licença, API e resolução realmente boas, mas
  quase sem mapas.
