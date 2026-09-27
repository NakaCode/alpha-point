# Acervos federais dos EUA: candidatos (grupo 1)

- **O que é:** levantamento de fontes federais de imagem, vídeo e mapa para o Alpha Point, feito em **27/09/2026** a pedido
  do Lucas ("se conseguir encontrar mais bancos/acervos livres/oficiais para futuros trabalhos também, melhor ainda").
- **Só candidatos.** Quem decide é o Lucas. Nada aqui muda o `marca/midia.md` nem o `marca/midia.json`.
- **Fora do escopo, porque o canal já usa:** Wikimedia Commons, NASA (images.nasa.gov), NARA, USGS, Library of Congress,
  Smithsonian, sala de imprensa de órgão federal em geral e DVIDS.
- **Como li:**
  - cada site pelo leitor automático do Claude Code (WebFetch), sempre o `robots.txt` antes;
  - nenhuma mídia baixada, nenhuma ferramenta de navegador, nenhuma chave lida;
  - 403, captcha, `robots.txt` que veta o caminho ou erro de certificado: parei ali e marquei **NÃO CONFERIDO**, sem
    tentar outro caminho.
- **Datas:** todas as páginas foram lidas em 27/09/2026. A data entre parênteses é a de atualização que a própria página
  mostra.
- **O que quer dizer "script" e "navegador":**
  - "script": os pesquisadores do canal (os `pesquisa-*`, o `buscar-midia`) podem consultar por programa sem contornar
    nada;
  - "só navegador": a consulta é pelo navegador do app, com o Lucas vendo.

---

## Resumo

| # | Fonte | Mídia | Licença | Crédito | 4K? | Script ou navegador | Veredito |
|---|---|---|---|---|---|---|---|
| 1 | NASA Scientific Visualization Studio (SVS) | vídeo, quadros, imagem | domínio público "for whatever purposes" (menos música licenciada) | pedido: "NASA's Goddard Space Flight Center" (por item) | **sim** (4K; amostras 5760×3240) | script (API + curl, a própria ajuda ensina) | **recomendo** |
| 2 | NASA Earth Observatory (hoje em science.nasa.gov), com o Blue Marble | imagem de satélite, mapa global | NASA: sem copyright nos EUA; terceiro marcado | pedido: a linha de cada imagem | não é vídeo; imagem até 6885×7457 e 21600×10800 | script | **recomendo** |
| 3 | NASA Worldview / GIBS | imagem de satélite diária, em camadas | CC0 (missão NASA); terceiro pela licença dele | pedido: frase do GIBS | não é vídeo | script (API WMTS) | **recomendo** (como base, identidade §6) |
| 4 | NASA Photojournal / JPL | imagem (planetária; Terra: SRTM, radar) | permissão da JPL "for any purpose", com condições | **exigido**: "Courtesy NASA/JPL-Caltech" | não conferido | script (página de item) | com ressalvas |
| 5 | NOAA Photo Library / Digital Photo Collection | foto histórica e atual | domínio público (biblioteca NOAA); no Flickr, CC BY 2.0 | "cite" (formato NÃO CONFERIDO); CC BY no Flickr | não (a coleção não aceita vídeo) | só navegador (site 403; Flickr) | com ressalvas |
| 6 | NOAA NESDIS / GOES | satélite quase em tempo real | "not copyrighted" | pedido: "NOAA" | imagem até 10000×6000; animação não conferida | script | **recomendo** |
| 7 | NOAA Ocean Exploration (e o Video Portal da NCEI) | foto e vídeo de mar profundo | domínio público, menos o marcado | pedido: o do item + URL; manter os metadados | não (HD; 4K "in the future") | script | com ressalvas |
| 8 | NOAA Historical Map & Chart Collection | mapa e carta náutica histórica (35.000+) | domínio público, "for any purpose" | pedido, **não exigido**: "Provided by NOAA Office of Coast Survey" | não se aplica | site só navegador (`robots` veta tudo); script pelo bucket da AWS | **recomendo** |
| 9 | NOAA Emergency Response Imagery (NGS) | foto aérea depois de desastre | licença NODD ("can be used as desired") | atribuição pedida | não se aplica | script pela AWS; site 403 | com ressalvas |
| 10 | NCEI Natural Hazards Image Database | foto de terremoto, tsunami, vulcão | **NÃO CONFERIDO** | citação do banco | não se aplica | `robots` libera, 60 s; app em JavaScript | não recomendo por ora |
| 11 | NOAA Climate.gov (arquivado) | mapa e gráfico de clima | reuso livre com atribuição | atribuição | não se aplica | só navegador (`robots` veta os Data Snapshots) | com ressalvas |
| 12 | National Park Service: NPGallery, nps.gov, B-roll | foto, vídeo, áudio, mapa | domínio público quando creditado ao NPS sem ©; campo por item | pedido (varia por parque) | não achei (B-roll 1080p) | script (item + API com chave); busca do site vetada | **recomendo** |
| 13 | NPS Cartography (Harpers Ferry Center) | mapa de parque (JPG, PDF, Illustrator) | "All maps on the Carto website are in the public domain" | nenhum nas páginas lidas | não se aplica | script | **recomendo** (como traçado) |
| 14 | U.S. Fish & Wildlife Service (fws.gov/media) | foto, vídeo | domínio público por item; parte licenciada | pedido: "Credit: … /U.S. Fish and Wildlife Service" | não achei | busca só navegador; item por script | **recomendo** |
| 15 | Bureau of Land Management | foto | domínio público no site; no Flickr, CC BY 2.0 | CC BY: obrigatório | não conferido | só navegador (Flickr) | com ressalvas |
| 16 | Bureau of Reclamation | foto (Flickr), vídeo (YouTube) | Flickr em CC BY-SA 2.0; banco próprio fora do ar | CC BY-SA | não | só navegador | não serve (como fonte nova) |
| 17 | USGS EROS (Earthshots, Earth As Art) | imagem de satélite, foto aérea | domínio público (USGS) | pedido: "U.S. Geological Survey" | não conferido | script | recomendo (já é USGS) |
| 18 | USDA (Flickr usdagov) | foto | "Public Domain" na foto; o perfil exige crédito e veta edição | **exigido pelo perfil** | não conferido | só navegador | com ressalvas |
| 19 | USDA Forest Service (Flickr) | foto | Public Domain Mark 1.0; o perfil exige crédito e veta edição | **exigido pelo perfil** | não conferido | só navegador | com ressalvas |
| 20 | USDA NAIP | ortofoto aérea (0,3–1 m) | domínio público | não achei pedido | não se aplica | script (STAC, AWS) | **recomendo** (como base, identidade §6) |
| 21 | USACE Digital Library (CONTENTdm) | foto histórica, mapa, relatório | domínio público por item | pedido: "Please use proper credit" | não se aplica | script pela API do CONTENTdm (1 s); busca da interface vetada | **recomendo** |
| 22 | FEMA Media Library | foto de desastre (poucos vídeos) | "free of copyright" na maioria | pedido: "Citation of FEMA.gov and a link back" | não conferido | script (15 s entre pedidos) | com ressalvas |
| 23 | CBP (Media Library, Flickr) | foto e vídeo de fronteira | domínio público, menos o marcado | preferido: "U.S. Customs and Border Protection / <nome>" | não conferido | script no cbp.gov; Flickr só navegador | com ressalvas |
| 24 | Guarda Costeira e Forças Armadas fora do DVIDS | — | **NÃO CONFERIDO** (403 e TLS) | — | — | — | não serve (o caminho é o DVIDS) |
| 25 | Departamento de Estado (Flickr statephotos) | foto de diplomacia | "United States government work" | legenda: "Official State Department photo by …" | não | só navegador | com ressalvas |
| 26 | Embaixadas e consulados no Flickr | foto | por conta; várias vetam comercial ou edição | varia | não | só navegador | não serve |
| 27 | Departamento de Estado: LSIB (fronteiras oficiais) | geometria | "other-pd" | não achei pedido | não se aplica | **NÃO CONFERIDO** (`robots` 403) | com ressalvas (identidade §6) |
| 28 | CDC PHIL | foto e ilustração de saúde | domínio público ou © por item | **exigido**: CDC + fotógrafo + site | não | script | não serve (para geografia) |
| 29 | NSF: U.S. Antarctic Program Photo Library | foto polar | **NÃO CONFERIDO** (site fora do ar) | — | — | — | não serve |
| 30 | Contas federais no Flickr (regra geral) | foto | varia foto a foto | varia | — | só navegador | com ressalvas |

---

## As 3 que mais recomendo para um canal de geografia

1. **NASA SVS.**
   - É a única fonte federal achada com vídeo acima de 4K e licença escrita para qualquer fim.
   - Tem API oficial, e a própria ajuda ensina a baixar em lote.
   - O acervo é de geografia física: gelo, costa, Landsat em série temporal. Tem inclusive "The Retreat of Alaska's
     Mendenhall Glacier" (06/05/2026), que é o glaciar de Juneau, em 5760×3240.
2. **NASA Earth Observatory, com o Worldview e o GIBS.**
   - Imagem de satélite de qualquer lugar do mundo, com texto que explica o que se vê e crédito pronto em cada imagem.
   - Tamanho grande (6885×7457 numa amostra Landsat; o Blue Marble em 21600×10800 e em blocos de 21600×21600).
   - Script liberado: o `robots` permite tudo e o GIBS tem API.
3. **NOAA Historical Map & Chart Collection.**
   - Mais de 35.000 mapas e cartas desde o século XVIII: costa, porto, fronteira marítima, cidade.
   - O Coast Survey escreve "may be used for any purpose free of charge", e o crédito é pedido, "not required".
   - Casa com a decisão de "mais mapa" (Lucas, 27/09/2026).
   - O site em si é só pelo navegador, porque o `robots` veta tudo. O mesmo acervo está aberto num bucket da AWS.

Logo atrás: o **NPS** (foto de lugar nomeado, domínio público item a item, mas o B-roll é 1080p), o **USFWS** (foto aérea de
refúgio, muita do Alasca, original de 4992×3328 com "Public Domain" no item) e o **GOES** da NOAA (tempo, furacão, fumaça,
até 10000×6000).

---

## O que ficou NÃO CONFERIDO

| Onde | O que aconteceu | O que não se sabe por isso |
|---|---|---|
| www.noaa.gov/digital-library (o photolib.noaa.gov redireciona para lá) e o `robots.txt` de www.noaa.gov | 403 | a página "Using NOAA Images", o formato de crédito e a resolução da coleção principal de fotos da NOAA. Também o vídeo no noaa.gov |
| storms.ngs.noaa.gov (viewer das fotos pós-desastre) | 403 | a página e a resolução. A licença foi lida no registro da AWS |
| historicalcharts.noaa.gov | o `robots.txt` diz `User-agent: *` / `Disallow: /` (não li nenhuma página do site) | a resolução das imagens. A licença foi lida no FAQ do Coast Survey e no registro da AWS |
| www.ngdc.noaa.gov/hazardimages/ | app em JavaScript; os metadados não falam de copyright | a licença de cada foto do banco de desastres |
| www.ncei.noaa.gov/access/ocean-exploration/video/ | tempo esgotado | formatos e resolução do Video Portal. O que está na ficha vem do FAQ do Ocean Exploration |
| usace.army.mil | 403 | o site principal do USACE. A conta dele no Flickr (usacehq) respondeu 410, removida |
| state.gov e o `robots` de data.geodata.state.gov | 403. O hiu.state.gov não resolveu (DNS) | a página de copyright do Departamento de Estado e a regra de robô do site do LSIB. O arquivo de metadados do LSIB abriu |
| usda.gov e fs.usda.gov | 403. O fsa.usda.gov esgotou o tempo | as páginas de política do USDA e do Forest Service. Valeu o perfil de cada um no Flickr |
| uscg.mil, history.uscg.mil, history.army.mil, defense.gov | 403 | as fontes da Guarda Costeira e do Exército fora do DVIDS |
| history.navy.mil (Naval History and Heritage Command) | erro de certificado TLS ("unable to verify the first certificate") | tudo; não contornei |
| developer.nps.gov | 403. A documentação da API no nps.gov é JavaScript | os endpoints de multimídia da API do NPS e se eles devolvem crédito e restrição |
| página de foto do Departamento do Interior no Flickr (usinterior) | 403 (veio no fim; parei de ler o Flickr ali) | a licença das fotos do Interior no Flickr |
| photolibrary.usap.gov (NSF) | o domínio não resolve (ENOTFOUND) | tudo. O que a ficha diz vem de resultado de busca |
| páginas de foto do nps.gov/media e do Media Library da CBP | JavaScript; os metadados não apareceram | resolução e campos (usei o NPGallery no lugar do nps.gov) |
| resolução em FEMA, BLM, Reclamation, USDA, CBP, NOAA Photo Library, EROS, cartas da NOAA | a página não mostra, e não baixei nada | a resolução típica |
| CDC PHIL | o FAQ não trata de uso comercial | se o uso em vídeo monetizado está coberto |

---

## Notas que valem para todas

1. **O domínio público federal só cobre obra de servidor no serviço.**
   - O USA.gov (30/04/2026) diz: "Government work is something created by a U.S. government officer or employee as
     part of their official duties".
   - E também: "Content on federal websites may include protected intellectual property used with the right holder's
     permission."
   - Contratado, bolsista, universidade, voluntário e cidadão que mandou foto ficam fora dessa lei. Todas as fontes
     abaixo avisam que têm material de terceiro.
   - A biblioteca da NOAA dá o teste prático (13/05/2026): "If any other authorship appears (such as a Cooperative
     Institute, university, etc.), you cannot assume it's public domain".
2. **Logo, selo e insígnia não são domínio público**, e o endosso é proibido em todas.
   - Avisam isso a NASA, o NPS (o Arrowhead, 18 U.S.C. §701), o FWS (o "blue goose", o Duck Stamp), o CDC, o USGS, o
     Interior, o DHS/FEMA e a NOAA.
   - O canal já não põe logo na tela (`midia.md` §7.6).
3. **Pessoa reconhecível**: a NASA, a JPL, o USGS, o Interior, a CBP e a NOAA (OMAO) avisam que o uso comercial de pessoa
   reconhecível pode ferir o direito de imagem (*right of publicity*).
4. **"No known copyright restrictions"** (Flickr Commons) não é domínio público.
   - É a pesquisa da instituição, sem garantia.
   - O próprio Flickr pede "análise independente" (a página veio em português: "LEMBRE-SE DE CONDUZIR UMA ANÁLISE
     INDEPENDENTE").
5. **Crédito.** Na obra federal, o crédito é pedido, não exigido por lei, e o canal põe domínio público federal sem crédito
   na tela (`midia.md` §7.3). Há três exceções que mudam isso, e são decisão do Lucas:
   - a fonte aplica CC BY ou CC BY-SA (fotos da NOAA, do BLM, da Reclamation e de alguns parques no Flickr): o crédito
     vira condição da licença;
   - o perfil do USDA e o do Forest Service escrevem que a atribuição é exigida e que editar é proibido;
   - a JPL e o CDC PHIL põem o crédito como condição.
6. **"Educational or informational purposes, including …"** (NESDIS, CBP): a frase lista exemplos e não proíbe o uso
   comercial. O que pesa é o "not copyrighted". A CBP, porém, pede permissão para uso internacional (ficha 23).
7. **O aviso de copyright do canal.** O NPS lembra: "the copyright notice must include a reference to the original U.S.
   Government work" na republicação comercial. Vale se o canal puser aviso de copyright num vídeo feito sobretudo de obra
   federal.
8. **Resolução.** Quase todo vídeo federal achado é HD. Pela régua do canal, footage real abaixo de 4K é `pendente_lucas`
   (conferente, §5.3). A exceção é o SVS.
9. **Flickr**: só navegador, em todas as contas (ficha 30).

---

## Fichas

### 1. NASA Scientific Visualization Studio (SVS): svs.gsfc.nasa.gov

- **Mídia:** visualizações científicas da NASA Goddard em vídeo, quadros e imagem: satélite, clima, gelo, Landsat em série
  temporal. A busca "glacier alaska" deu 63 resultados, entre eles:
  - "The Retreat of Alaska's Mendenhall Glacier" (id 15030, 06/05/2026);
  - "The Retreating Alsek Glacier, Alaska" (15054, 22/06/2026).
- **Licença:** "All of our content is in the public domain (unless otherwise noted), meaning that it is free to download,
  use, and redistribute for whatever purposes you see fit."
- **Uso comercial em YouTube monetizado:** sim ("for whatever purposes").
- **Crédito:** pedido, item a item. Nos dois itens: "Please give credit for this item to: NASA's Goddard Space Flight
  Center". A ajuda remete às diretrizes de mídia da NASA, que dizem "NASA should be acknowledged as the source of the
  material".
- **Restrições:**
  - "Some of our visualizations feature licensed music, which is **not** in the public domain." A visualização continua
    livre, sem a trilha;
  - pelas diretrizes da NASA (13/08/2026):
    - a insígnia, o logotipo e os identificadores da NASA não são domínio público e têm proteção legal;
    - não sugerir endosso;
    - astronauta ou servidor não aparece em produto comercial;
    - "Those wishing to use copyright protected material of third parties must contact the copyright holder directly."
- **Resolução:**
  - 15030 e 15054: MP4 "Hyperwall" de **5760×3240** (619,8 MB e 366,2 MB), versão web de 1920×1080 e vertical de 1080×1920;
  - a ajuda lista "4K (3840 x 2160) at 30 or 60fps", HD, e quadros em `.exr`, `.tif` e `.png`.
- **4K:** sim.
- **Acesso automático:**
  - o `robots.txt` não existe (404), então nada é vetado;
  - API oficial: busca em `https://svs.gsfc.nasa.gov/api/search/` e página em `https://svs.gsfc.nasa.gov/api/{page_ID}/`;
  - a ajuda ensina a baixar em lote com `curl` e com o DownThemAll.
  - **Script: sim.**
- **Termos:** https://svs.gsfc.nasa.gov/help/ (lida em 27/09/2026). Diretrizes da NASA:
  https://www.nasa.gov/nasa-brand-center/images-and-media/ (página de 13/08/2026).
- **No canal:** é NASA, que a §7.3 já aprova. O `buscar-midia` só consulta a API images.nasa.gov, não o SVS.
- **Veredito: RECOMENDO.** Licença explícita para qualquer fim, vídeo acima de 4K, API.
  - Conferir, item a item, música licenciada e dado de terceiro.
  - É visualização, não registro filmado.

### 2. NASA Earth Observatory (EO): science.nasa.gov/earth/earth-observatory/

- **Situação do site:**
  - earthobservatory.nasa.gov redireciona (301) para science.nasa.gov/earth/earth-observatory/;
  - a antiga página "image-use-policy" também redireciona para a capa: a política própria do EO não existe mais, e vale a
    diretriz geral de mídia da NASA;
  - o Visible Earth (visibleearth.nasa.gov) também redireciona para o EO;
  - o **NASA NEO** (neo.gsfc.nasa.gov) foi desativado em setembro de 2026. A página dele aponta como sucessores o EO Global
    Maps, o Worldview e o GIBS.
- **Mídia:** imagem de satélite com texto (Image of the Day, diária) e coleções como o Blue Marble. Vídeo é raro.
- **Licença** (diretrizes da NASA): "NASA content – images, audio, video, and media files...generally are not subject to
  copyright in the United States."
- **Uso comercial:** sim, sem sugerir endosso ("it must not explicitly or implicitly convey NASA's endorsement").
- **Crédito:** cada imagem traz o seu. Exemplos:
  - "NASA Earth Observatory image by Michala Garrison, using MODIS data from NASA EOSDIS LANCE and GIBS/Worldview."
    ("Cloudy Cloak Over the Northwest", 24/09/2026);
  - "NASA Earth Observatory / Lauren Dauphin" ("Boom Year for Desert Blooms", 23/09/2026).
- **Restrições:**
  - material de terceiro aparece dentro das matérias: em "Boom Year for Desert Blooms", fotos "© CSIRO Australia" estão ao
    lado das imagens Landsat;
  - as da NASA (insígnia, endosso, pessoa).
- **Resolução:**
  - amostras: JPEG de 2160×2160 (MODIS, 3,26 MB) e dois JPEGs de 6885×7457 (Landsat, cerca de 13–14 MB);
  - Blue Marble: Next Generation com topografia e batimetria: 5400×2700, 21600×10800 e blocos de 21600×21600 (500 m por
    pixel), em JPEG e GeoTIFF.
- **4K:** não é fonte de vídeo; as imagens passam do 4K.
- **Acesso automático:** o `robots` de science.nasa.gov diz `Allow: /` para todos. Não há API; há RSS
  (science.nasa.gov/earth/earth-observatory/subscribe/feeds/). **Script: sim.**
- **Termos:** https://www.nasa.gov/nasa-brand-center/images-and-media/ (13/08/2026) e
  https://science.nasa.gov/earth/earth-observatory/, lidas em 27/09/2026.
- **Veredito: RECOMENDO.** Imagem de satélite com contexto, do mundo inteiro, grande e com crédito pronto.
  - Conferir terceiro imagem a imagem (o "©" no crédito).
  - O Blue Marble serve de base de mapa, pela identidade §6.

### 3. NASA Worldview e GIBS (EOSDIS)

- **Mídia:** imagem de satélite diária (MODIS, VIIRS e outras) em camadas. O Worldview recorta e anima; o GIBS serve as
  camadas por WMTS.
- **Licença** (Earthdata, "Data Use and Citation Guidance", 26/09/2026):
  - "Unless marked with usage restrictions, data from NASA-led missions are licensed as Creative Commons Zero (CC0)."
  - Dado de fora da NASA "is subject to the license arrangements of the sponsoring organization".
- **Uso comercial:** sim, com a ressalva "NASA material may not be used to suggest or imply endorsement by NASA or by any
  NASA employee of a commercial product, service, or activity".
- **Crédito pedido:**
  - GIBS: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services (GIBS), part
    of NASA's Earth Science Data and Information System (ESDIS)."
  - Earthdata: "NASA should be acknowledged as the source of the material where applicable."
- **Restrições:** as camadas de referência do Worldview vêm de fora da NASA. Resposta oficial no fórum Earthdata
  (23/02/2024, editada em 22/10/2024):
  - "Coastlines information are gleaned from OpenStreetMap";
  - "Coastlines/Borders/Roads information are gleaned from OpenStreetMap and Natural Earth".
  - Se essas camadas aparecerem, vale o crédito do OSM que o canal já usa.
- **Resolução:** NÃO CONFERIDA na fonte (a página de visualizações do GIBS não trouxe esse dado).
- **4K:** não é vídeo. A resolução da animação do Worldview não foi conferida.
- **Acesso automático:** o `robots.txt` do Worldview não existe (404). O GIBS tem API documentada em
  https://nasa-gibs.github.io/gibs-api-docs/. **Script: sim.**
- **Termos:** https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance e
  https://nasa-gibs.github.io/gibs-api-docs/, lidas em 27/09/2026.
- **Veredito: RECOMENDO, como base de imagem de satélite.** É base de mapa, então entra pela identidade §6, por decisão do
  Lucas, não pela §7.3.

### 4. NASA Photojournal e JPL

- **Situação:** photojournal.jpl.nasa.gov redireciona para science.nasa.gov/photojournal. A página se descreve como "An
  image archive containing fascinating imagery, animations, and videos from numerous Solar System exploration missions".
  Tem também imagens da Terra, como o SRTM do Alasca.
- **Licença** (política de imagem da JPL):
  - "images and video on JPL public web sites (public sites ending with a jpl.nasa.gov address) may be used for any
    purpose without prior permission", com condições;
  - a JPL é operada pela Caltech para a NASA, e o texto é uma permissão com condições, não uma declaração de domínio
    público.
- **Uso comercial:** sim, com as condições.
- **Crédito, exigido pela política:** "the credit line should be 'Courtesy NASA/JPL-Caltech.'" O item do Photojournal traz o
  seu: PIA03386, "NASA/JPL/NIMA".
- **Restrições:**
  - "no image may be used to explicitly or implicitly suggest endorsement by NASA, JPL or Caltech";
  - logos da NASA e da JPL só com aprovação escrita;
  - pessoa reconhecível ("permission should be obtained");
  - "Some image and video materials on JPL public web sites are owned by organizations other than JPL or NASA".
- **Resolução:** PIA03386 (Malaspina Glacier, Alaska): 3162×1581 na página, TIFF de 12,01 MB.
- **4K:** não conferido.
- **Acesso automático:** o `robots` de science.nasa.gov libera tudo; o de jpl.nasa.gov veta toda URL com "?" (`Disallow:
  /*?*`). **Script: sim, na página de item.**
- **Termos:** https://www.jpl.nasa.gov/jpl-image-use-policy (sem data) e https://science.nasa.gov/photojournal, lidas em
  27/09/2026.
- **Veredito: COM RESSALVAS.** Útil para relevo (SRTM) e radar. Mas o crédito é condição, o que foge ao "sem crédito" da
  §7.3, e a maior parte do acervo é planetária.

### 5. NOAA Photo Library / NOAA Digital Photo Collection

- **Situação:** photolib.noaa.gov redireciona (301) para www.noaa.gov/digital-library, que respondeu **403**. O
  `robots.txt` de www.noaa.gov também respondeu 403. **Site NÃO CONFERIDO.**
- **O que se leu em outras páginas da própria NOAA:**
  - Blog da NOAA Central Library (27/08/2025):
    - o acervo tem cerca de 70.000 imagens e "was moved in 2024 to the NOAA Digital Photo Collection";
    - "Photos are in the public domain and are not subject to copyright";
    - "however, you do need to cite any photos you use";
    - a coleção "does not accept video files".
  - Flickr oficial "NOAA Photo Library" (flickr.com/photos/noaaphotolib, 8.617 fotos):
    - o perfil diz "a selection of images from the public domain images residing in the NOAA Digital Collections" e "Most
      of the images were taken by NOAA employees or public-spirited citizens";
    - a foto de amostra (fly00711) está sob **CC BY 2.0**.
  - OMAO, a operação de navios e aviões da NOAA:
    - "NOAA still images, audio files and video generally are not copyrighted";
    - o emblema da NOAA só com consentimento;
    - pessoa reconhecível em uso comercial pode pedir permissão.
- **Uso comercial:** sim na obra da NOAA. A foto de cidadão não é obra federal, e a do Flickr exige o crédito da CC BY.
- **Crédito:** "cite". O formato está na página "Using NOAA Images", no site que deu 403: NÃO CONFERIDO.
- **Resolução:** NÃO CONFERIDA.
- **4K:** não (a coleção não aceita vídeo).
- **Acesso automático:** site 403; Flickr só pelo navegador. O `robots` do blog da biblioteca (library.noaa.gov) pede 10 s
  entre pedidos. **Só navegador.**
- **Termos:** https://library.noaa.gov/blogs/news-research-highlights/photos-and-videos (27/08/2025),
  https://library.noaa.gov/blogs/news-research-highlights/question-of-the-quarter-noaacopyright (13/05/2026) e
  https://www.omao.noaa.gov/image-licensing-usage-info (sem data), lidas em 27/09/2026.
- **Veredito: COM RESSALVAS.** O acervo histórico (costa, levantamentos, tempo) tem valor. Mas o site oficial recusa leitura
  automática, então a conferência é pelo navegador, com o Lucas vendo, e a autoria se confere foto a foto.

### 6. NOAA NESDIS / GOES (satélites geoestacionários)

- **Onde:**
  - STAR GOES Image Viewer (www.star.nesdis.noaa.gov/GOES/);
  - a pasta de arquivos dele (cdn.star.nesdis.noaa.gov);
  - NOAA Satellite Maps (www.nesdis.noaa.gov/imagery);
  - Flickr "NOAA Satellites".
- **Licença** (NESDIS, "How to Use the Interactive Satellite Maps"): "This imagery is not copyrighted. You may use this
  material for educational or informational purposes, including photo collections, textbooks, public exhibits, computer
  graphical simulations and internet web pages."
  - A galeria de fotos e desenhos das naves GOES-R, na NESDIS, diz: "All images are public domain".
  - No Flickr NOAA Satellites, a amostra "First GOES-18 16-channel Image" (11/05/2022) está em "Public domain", com
    "Credit: NOAA/NASA".
- **Uso comercial:** não proibido; é obra federal (nota 6).
- **Crédito pedido:** "cite it as 'NOAA'". Em artigo científico: "We acknowledge the use of imagery from the NOAA Satellite
  Maps application: [LINK]".
- **Restrições:** "Data is for display purposes only, and should not be used operationally".
- **Resolução:** o GeoColor do GOES-19 sobre os EUA contíguos sai em 416×250, 625×375, 1250×750, 2500×1500, 5000×3000 e
  **10000×6000** JPG. Exemplo de nome: `…_GOES19-ABI-CONUS-GEOCOLOR-10000x6000.jpg`.
- **4K:** a imagem, sim. Animação: "It is not possible to download animations from the map viewers at this time"
  (Satellite Maps); a animação do STAR não foi conferida.
- **Acesso automático:**
  - o `robots` do STAR não veta /GOES/;
  - a pasta de arquivos não tem `robots` (404);
  - o `robots` do nesdis.noaa.gov veta /search/.
  - **Script: sim**, com moderação.
- **Termos:** https://www.nesdis.noaa.gov/imagery/interactive-maps/how-use-the-interactive-satellite-maps (sem data), lida
  em 27/09/2026.
- **Cuidado:** o RAMMB/SLIDER é da CIRA, da Colorado State University. Não é órgão federal e não foi avaliado aqui.
- **Veredito: RECOMENDO** para tempo, furacão, fumaça, neve e o disco inteiro da Terra.

### 7. NOAA Ocean Exploration (com o Video Portal da NCEI)

- **Mídia:** foto e vídeo de expedição (ROV em mar profundo, navio Okeanos Explorer) e mapa de fundo.
- **Licença** (FAQ): "Unless otherwise noted (copyrighted material for example), information presented on this website is
  in the public domain and may be distributed freely."
  - A exceção: "Selected copyrighted images have been contributed to the site. These copyrights are printed on the image
    or mentioned in image captions."
- **Uso comercial:** sim, menos o material marcado.
- **Crédito pedido:**
  - "please refer to the original source page and use the credit that is listed with the image/video";
  - "include the appropriate URL";
  - manter os metadados: "you agree to maintain this metadata with the image".
- **Resolução:**
  - foto: sem link de alta resolução, "most likely we do not have a high-resolution version";
  - vídeo: "can typically provide original source files up to ProRes quality", a pedido por e-mail, e o Video Portal da
    NCEI (a página dele não abriu; NÃO CONFERIDA).
- **4K:** não hoje. A matéria da temporada de 2026 (29/05/2026) fala em "build a system for collecting 4K video in the
  future".
- **Acesso automático:** o `robots` do oceanexplorer só veta /map/*; o da NCEI não veta /access/ocean-exploration. **Script:
  sim.**
- **Termos:** https://oceanexplorer.noaa.gov/faqs/ (sem data), lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** Bom para oceano profundo e fundo do mar. O vídeo é HD: abaixo da régua de 4K do canal, vira
  `pendente_lucas`.

### 8. NOAA Historical Map & Chart Collection (Office of Coast Survey)

- **Mídia:** "over 35,000 images — cancelled nautical charts, maps, sketches, and more", desde meados do século XVIII.
- **Licença** (FAQ do Coast Survey): "These historical charts are in the public domain and may be used for any purpose free
  of charge."
- **Uso comercial:** sim ("any purpose").
- **Crédito:** "When republishing a NOAA chart or a portion of a chart image, we request the citation, 'Provided by NOAA
  Office of Coast Survey' be used, although this is not required."
- **Restrições:**
  - não servem para navegação;
  - a licença do NODD proíbe sugerir endosso e diz: "If you modify NOAA data, you may not state or imply that it is
    original, unaltered NOAA data".
- **Resolução:** NÃO CONFERIDA (o site veta robô).
- **4K:** não se aplica.
- **Acesso automático:**
  - `historicalcharts.noaa.gov/robots.txt` diz `User-agent: *` / `Disallow: /`: **o site é só pelo navegador** (não li
    nenhuma página dele);
  - o acervo também está no Registry of Open Data da AWS: bucket `noaa-nos-historicalcharts-pds` (us-east-1), acessível
    sem conta (`aws s3 ls --no-sign-request s3://noaa-nos-historicalcharts-pds/`);
  - a licença do bucket (NODD): "NOAA data disseminated through NODD are open to the public and can be used as desired."
  - **Script: sim, pelo bucket.**
- **Termos:** https://nauticalcharts.noaa.gov/learn/faq.html (sem data) e https://registry.opendata.aws/noaa-historicalcharts/,
  lidas em 27/09/2026.
- **Veredito: RECOMENDO.** Mapa histórico de costa, porto e fronteira marítima, com licença para qualquer fim.

### 9. NOAA Emergency Response Imagery (NGS)

- **Mídia:** foto aérea georreferenciada depois de furacão e de outros desastres.
- **Situação:** o viewer (storms.ngs.noaa.gov) respondeu **403**: NÃO CONFERIDO.
- **Licença** (registro da AWS, bucket `noaa-eri-pds`, GeoTIFF e COG, sem conta): "NOAA data disseminated through NODD are
  open to the public and can be used as desired. […] NOAA requests attribution for the use or dissemination of unaltered
  NOAA data. However, it is not permissible to state or imply endorsement by or affiliation with NOAA. If you modify NOAA
  data, you may not state or imply that it is original, unaltered NOAA data."
- **Uso comercial:** sim ("as desired").
- **Crédito:** atribuição pedida, sem formato.
- **Resolução:** NÃO CONFERIDA.
- **4K:** não se aplica.
- **Acesso automático:** script pelo bucket da AWS; o site, não (403).
- **Termos:** https://registry.opendata.aws/noaa-eri/, lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** Serve para o "antes e depois" de desastre nos EUA, mas o site oficial não abriu.

### 10. NCEI Natural Hazards Image Database (www.ngdc.noaa.gov/hazardimages/)

- **Mídia:** foto de dano e de geologia: terremoto, tsunami, vulcão, deslizamento.
- **Licença:** **NÃO CONFERIDA.**
  - A página é um app em JavaScript e não mostra a licença de cada foto.
  - Os metadados só trazem a isenção de responsabilidade e a citação: "Cite as: National Geophysical Data Center / World
    Data Service (NGDC/WDS). 2012: NCEI/WDS Natural Hazards Image Database. First. https://doi.org/10.7289/V5154F01."
  - Sobre copyright, nada.
- **Acesso automático:** o `robots` veta `/hazard/data` e `/hazard/img`, mas não /hazardimages/, e pede 60 s entre pedidos.
- **Termos:** https://www.ncei.noaa.gov/metadata/geoportal/rest/metadata/item/gov.noaa.ngdc:Hazard_Images_Database/html,
  lida em 27/09/2026.
- **Veredito: NÃO RECOMENDO POR ORA.** O banco mistura autores. Pela regra da própria biblioteca da NOAA (nota 1), cada foto
  precisa de conferência, e essa conferência é pelo navegador, com o Lucas.

### 11. NOAA Climate.gov (arquivado)

- **Situação:** "This website is an ARCHIVED version of NOAA Climate.gov as of June 25, 2025. Content is not being updated
  or maintained".
- **Mídia:** mapa e gráfico de clima.
- **Licença** (FAQ): "Anything credited to NOAA Climate.gov can be freely re-used with proper attribution."
  - Com "a specific copyright or credit to an individual or group other than NOAA", pedir à fonte.
  - Sem endosso.
- **Uso comercial:** o FAQ não trata; é obra federal.
- **Crédito:** atribuição, sem formato.
- **Acesso automático:** o `robots` veta /search, /maps-data/tools-interactives/ e 19 padrões dos Data Snapshots, que são o
  produto principal. **Só navegador para os mapas de dado.**
- **Termos:** https://www.climate.gov/faqs, lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** É acervo congelado, e o canal refaz dado no visual dele (DADO), não mostra o mapa pronto.

### 12. National Park Service: NPGallery e multimídia do nps.gov (foto, vídeo, B-roll)

- **Mídia:** foto, vídeo, áudio, mapa e documento. O acervo histórico do Harpers Ferry Center tem "400,000 images"
  (página "Photos & Multimedia", 07/02/2025).
- **Licença:**
  - disclaimer do NPS (05/03/2025): o material do NPS "is generally considered in the public domain";
  - o mesmo texto avisa: "Not all information or content on this website has been created or is owned by the National Park
    Service. Some content is protected by third party rights, such as copyright, trademark, rights of publicity, privacy,
    and contractual restrictions.";
  - páginas de vídeo do nps.gov: "Multimedia credited to NPS without any copyright symbol are public domain";
  - NPGallery, campo de cada item: "Constraints Information: Public domain" ou "Restrictions apply on use and/or
    reproduction", junto com "Digital assets without any copyright restrictions are public domain.";
  - B-roll do Grand Canyon (20/02/2026): "All video files in this archive are 'public domain' clips. You are free to use
    these videos without a release from the National Park Service.";
  - B-roll de Yosemite (09/05/2023): "in the public domain and may be used for any purpose."
- **Uso comercial:** sim no que é domínio público, sem endosso.
- **Crédito pedido:** varia.
  - Disclaimer: "a citation or acknowledgement of the National Park Service as the source is appreciated".
  - Death Valley (27/06/2021): "Please credit 'Courtsey of the National Park Service.'" (grafia da página).
  - Grand Canyon no Flickr: "NPS/'photographer name'".
- **Restrições:**
  - "The Arrowhead symbol may not be used without prior written permission from the Director";
  - "Videos must not be used to imply National Park Service endorsement of a product, service, organization or individual";
  - terceiros e direito de imagem;
  - aviso de copyright na republicação comercial (nota 7).
- **Resolução:**
  - NPGallery, foto de 1951 (Bodie, CA): TIFF de 2901×4102, 23,8 MB;
  - B-roll do Grand Canyon: "1080p resolution at 24 fps".
- **4K:** não achei. O Grand Canyon é 1080p; Yosemite, Death Valley e Joshua Tree não especificam.
- **Acesso automático:**
  - o `robots` de www.nps.gov veta /search/ e `loader.cfm` e libera o resto; o NPGallery não tem `robots` (404);
  - há API oficial (NPS Data API), com chave gratuita e limite de "1,000 requests per hour" (guia, 11/01/2023);
  - o developer.nps.gov respondeu 403 ao leitor, e a documentação é JavaScript: os endpoints de multimídia e os campos de
    crédito e restrição ficaram NÃO CONFERIDOS.
  - **Script: sim**, em página de item e pela API com chave (pedir a chave é decisão do Lucas). A busca do site, não.
- **Termos:** https://www.nps.gov/aboutus/disclaimer.htm (05/03/2025) e
  https://www.nps.gov/grca/learn/photosmultimedia/b-roll_hd_index.htm (20/02/2026), lidas em 27/09/2026.
- **Veredito: RECOMENDO.** Foto de lugar nomeado, com o campo de restrição item a item.
  - Conferir o "©" e o campo de restrição em cada item.
  - O B-roll HD vira `pendente_lucas` pela régua de 4K.

### 13. NPS Cartography (mapas de parque do Harpers Ferry Center): www.nps.gov/carto

- **Mídia:** mais de 1.000 mapas de parque. "All NPS maps produced by Harpers Ferry Center are free and available as JPEGs,
  PDFs, or Adobe production files" (05/12/2023). Cerca de 200 também em PDF geoespacial.
- **Licença:** "All maps on the Carto website are in the public domain." (Map Information, 21/05/2019).
- **Uso comercial:** sim.
- **Crédito:** nenhum pedido nas páginas lidas.
- **Restrições:** o Arrowhead, se estiver no mapa. Não li de onde vem o relevo sombreado nem os dados de base (NÃO
  CONFERIDO).
- **Resolução:** o arquivo do Illustrator é vetorial, serve a qualquer tamanho.
- **4K:** não se aplica.
- **Acesso automático:** o `robots` do nps.gov não veta /carto/. **Script: sim.**
- **Termos:** https://www.nps.gov/subjects/hfc/map-information.htm (21/05/2019) e https://www.nps.gov/carto/ (05/12/2023),
  lidas em 27/09/2026.
- **Veredito: RECOMENDO, como fonte de traçado** (trilha, limite de parque, estrada de parque) e de referência. Na tela, o
  canal desenha no visual dele (identidade §6).

### 14. U.S. Fish & Wildlife Service: acervo de mídia do fws.gov (a antiga National Digital Library)

- **Situação:** digitalmedia.fws.gov redireciona (301) para fws.gov/search/images. Os itens ficam em
  `fws.gov/media/<nome>`.
- **Mídia:** foto e vídeo; há B-roll subaquático do NCTC.
- **Licença:**
  - por item: o campo de direitos diz "Public Domain";
  - o disclaimer avisa: "Not all the information on our site is in the public domain. Some images/graphics are licensed
    for use under the copyright law".
- **Uso comercial:** sim no que é domínio público.
- **Crédito pedido:**
  - "Credit: U.S. Fish and Wildlife Service Photo by [Photographer Name]/U.S. Fish and Wildlife Service";
  - "USFWS photo", quando o fotógrafo é desconhecido;
  - "USFWS/[Originating Office]";
  - no B-roll: "Credit: John Doe, USFWS".
- **Restrições:**
  - "Use of the Service logo without prior written approval is prohibited";
  - o mesmo vale para o Duck Stamp, os símbolos do Federal Aid e o "blue goose";
  - "Some of the video productions contain music that has been licensed to the U.S. Fish and Wildlife Service."
- **Resolução:** "Aerial view of Kanuti National Wildlife Refuge in Alaska" (Steve Hillebrand/USFWS, 10/05/2023): JPEG
  original de **4992×3328**, 1,7 MB, "Public Domain".
- **4K:** não achei. Os vídeos ficam em fws.rev.vbrick.com, sem especificação.
- **Acesso automático:**
  - o `robots` veta /search/ e /search*, qualquer URL com "page=" e a busca facetada ("f[");
  - a página de item é liberada, e o `robots` declara um sitemap.
  - **A busca é só pelo navegador; a página de item conhecida pode ser lida por script.**
- **Termos:** https://www.fws.gov/disclaimer e https://www.fws.gov/notices (sem data), lidas em 27/09/2026.
- **Veredito: RECOMENDO.** Foto aérea e de paisagem de refúgio (muitas do Alasca), direito explícito por item, original
  grande.

### 15. Bureau of Land Management (BLM)

- **Mídia:** foto de terras públicas. Flickr "mypubliclands": 8.816 fotos, desde 01/2013.
- **Licença:**
  - blm.gov (política de direitos digitais): "Most of our content posted is in the public domain which does not require
    copyright or other intellectual property notices.";
  - Flickr: a amostra "BLM My Public Lands Roadtrip: Montana/ Dakotas" (08/08/2015) está em **CC BY 2.0**.
- **Uso comercial:** sim. A CC BY 2.0 permite, com crédito.
- **Crédito:** obrigatório pela CC BY 2.0 no Flickr.
- **Restrições:** logo e selo do BLM. O BLM tem também um grupo no Flickr, o "Your Land Your Story", que recebe foto do
  público: nem toda foto é de servidor.
- **Resolução:** NÃO CONFERIDA.
- **4K:** não conferido.
- **Acesso automático:** o `robots` do blm.gov veta /search/. O Flickr é só pelo navegador.
- **Termos:** https://www.blm.gov/info/notices/drctp-policy (sem data), lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** A CC BY no Flickr põe crédito na tela, e a autoria se confere.

### 16. Bureau of Reclamation

- **Mídia:** represa, rio, obra hidráulica. "Reclamation photographs exceed at least 500,000 images" desde 1902, com parte
  na NARA.
- **Situação:**
  - "At this time the Reclamation Photograph Database is not available." (18/08/2021);
  - as fotos estão no Flickr (flickr.com/photos/usbr, 10.519) e o vídeo no YouTube.
- **Licença:**
  - o disclaimer do site (05/08/2026) não fala de copyright, só remete à política do Interior;
  - no Flickr, duas amostras em **CC BY-SA 2.0**: "11101909 Completed Part of Dam 052" e "Jackson Lake Dam" ("Photo by
    Nikki Polson", 21/08/2017).
- **Uso comercial:** a CC BY-SA permite, mas exige crédito e a mesma licença na obra derivada. É risco para o vídeo.
- **Resolução:** NÃO CONFERIDA.
- **4K:** não. O vídeo fica no YouTube, que não é para baixar.
- **Acesso automático:** o `robots` do usbr.gov veta só /pn-bin e /gp-bin. O Flickr é só pelo navegador.
- **Termos:** https://www.usbr.gov/main/disclaimer.html (05/08/2026) e
  https://www.usbr.gov/lc/region/g5000/photolab/photostart.cfm (18/08/2021), lidas em 27/09/2026.
- **Veredito: NÃO SERVE, como fonte nova.** O banco próprio está fora do ar, e o Flickr está em CC BY-SA. A foto histórica
  da Reclamation vem pela NARA, que o canal já usa.

### 17. USGS EROS (Earthshots, Earth As Art)

- **Situação:** o `robots.txt` do eros.usgs.gov redireciona para usgs.gov/centers/eros. Vale o `robots` do usgs.gov, que
  veta /search/ e libera /media e /centers/eros.
- **Mídia:** imagem Landsat (Earth As Art) e foto aérea. O NAIP também sai pelo EROS (ficha 20).
- **Licença** (USGS): "USGS-authored or produced data and information are considered to be in the U.S. Public Domain."
  O que não é do USGS "are generally marked as being copyrighted".
- **Crédito pedido:** "U.S. Geological Survey", "Department of the Interior/USGS" ou "U.S. Geological Survey/photo by
  [Creator Name]".
- **Earth As Art:** "These and all Earth As Art images can be downloaded for free from the EROS Image Gallery."
- **Resolução:** NÃO CONFERIDA.
- **4K:** não conferido.
- **Termos:** https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits (sem data), lida em
  27/09/2026.
- **Veredito: RECOMENDO, como parte do USGS**, que já entra. Não é fonte nova.

### 18. USDA (Flickr usdagov)

- **Mídia:** foto. São 98.244, desde 08/2009: agricultura, NRCS, campo, eventos, e coleções do Forest Service.
- **Situação:** usda.gov respondeu 403, e o `robots.txt` também. **Site NÃO CONFERIDO.**
- **Licença:**
  - a amostra (20250910-USDA-OSEC-CDP-1043) está em "Public Domain";
  - o perfil, porém, diz:
    - "Attribution is Required: You are fully welcome to use these photographs, provided you give proper credit to the
      U.S. Department of Agriculture (and the specific photographer, when noted)."
    - "No Editing Permitted: To maintain the journalistic and historical accuracy of the photographers' work, these
      images must be used in their original form. Altering or editing the photos is not allowed."
    - "No Endorsements."
- **Uso comercial:** não proibido.
- **Crédito:** exigido pelo perfil, no formato da legenda: "(USDA photo by Christophe Paul)".
- **Restrições:** "sem edição" choca com o que a cena faz com a foto (recorte, movimento, cor).
- **Resolução:** NÃO CONFERIDA.
- **4K:** não conferido.
- **Acesso automático:** só navegador (Flickr).
- **Termos:** https://www.flickr.com/people/usdagov/, lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** O perfil exige crédito e veta edição, o que choca com o "sem crédito" da §7.3 e com o
  tratamento de cena. É pergunta para o Lucas.

### 19. USDA Forest Service (Flickr usforestservice)

- **Situação:** fs.usda.gov respondeu 403. **Site NÃO CONFERIDO.**
- **Mídia:** foto. São 14.717, desde 11/2016, com o álbum "Historical Forest Service Photos" (1.213).
- **Licença:** a amostra (20110731-FS-Bridger-TDJ-001, Bridger-Teton, 31/07/2011) está em Public Domain Mark 1.0. O perfil
  diz: "These photos may be used with attribution, and editing is not permitted."
- **Uso comercial:** não proibido.
- **Crédito:** exigido pelo perfil. Formato da legenda: "(Forest Service photo by Tyler D. Johnson)".
- **Restrições:** sem edição (a mesma questão da ficha 18).
- **Resolução:** original de 4272×2848.
- **4K:** não conferido.
- **Acesso automático:** só navegador.
- **Termos:** https://www.flickr.com/people/usforestservice/, lida em 27/09/2026.
- **Veredito: COM RESSALVAS**, a mesma do USDA.

### 20. USDA NAIP (fotografia aérea)

- **Mídia:** ortofoto aérea, em RGB e em infravermelho.
- **Licença** (USGS EROS): "Sources/Usage: Public Domain."
- **Cobertura:**
  - o EROS diz "conterminous United States" (2003 em diante);
  - o catálogo STAC do Planetary Computer inclui também Havaí, Porto Rico e Ilhas Virgens;
  - **o Alasca fica fora.**
- **Resolução:** "1-meter" até 2017; desde 2018, 0,6 m, "with the option for .3 meter" (EROS). O STAC lista 0,3, 0,6 e
  1,0 m.
- **Crédito:** nenhum pedido nas páginas lidas.
- **Restrições:** no STAC do Planetary Computer, o campo de licença diz "proprietary", que é a convenção do STAC para "ver o
  provedor". O provedor e licenciador é o USDA Farm Service Agency, e a página do USGS diz domínio público.
- **4K:** não se aplica.
- **Acesso automático:** EarthExplorer (USGS) e Planetary Computer (STAC; o `robots` libera tudo). O fsa.usda.gov esgotou o
  tempo. **Script: sim**, pelo STAC.
- **Termos:** https://www.usgs.gov/centers/eros/science/usgs-eros-archive-aerial-photography-national-agriculture-imagery-program-naip
  (06/07/2018) e https://planetarycomputer.microsoft.com/api/stac/v1/collections/naip, lidas em 27/09/2026.
- **Veredito: RECOMENDO, como base de imagem aérea dos EUA contíguos.** Entra pela identidade §6, por decisão do Lucas, não
  como acervo de mídia.

### 21. U.S. Army Corps of Engineers: USACE Digital Library (usace.contentdm.oclc.org)

- **Situação:** usace.army.mil respondeu 403. A conta USACE HQ no Flickr (usacehq) respondeu 410, removida.
- **Mídia:** 14 coleções, entre elas "Photographs", "Maps and Drawings", "Histories", "Media" e relatórios.
- **Licença:** o campo de direitos varia por item.
  - Foto de amostra ("William L. Guthrie dredge 1940", B. Berry, 13/08/1940): "This item is in the public domain. Please
    use proper credit."
  - Documento de amostra: "This document was published by a federal government agency and is in the public domain."
- **Uso comercial:** sim no que é domínio público.
- **Crédito:** "Please use proper credit", sem formato.
- **Resolução:** a amostra é um TIFF de 600 dpi de uma cópia 8×10 pol., 11,3 MB.
- **4K:** o vídeo não foi avaliado.
- **Acesso automático:**
  - o `robots` do CONTENTdm veta a busca da interface (/digital/search/, /digital/collection/*/search/), /oai/, /utils/ e
    /ui/, e pede 1 s entre pedidos;
  - a API do CONTENTdm (`/digital/bl/dmwebservices/…`) não é vetada e devolve os metadados com o campo de direitos;
  - não achei página de termos do site (NÃO CONFERIDO).
  - **Script: sim pela API, 1 pedido por segundo.** A busca da interface, não.
- **Termos:** o campo de direitos de cada item, lido pela API em 27/09/2026.
- **Veredito: RECOMENDO.** Represa, porto, eclusa, obra de rio e mapa histórico, com o direito escrito no item. Conferir item
  a item.

### 22. FEMA Media Library

- **Mídia:** 4.708 itens (4.679 fotos e 29 vídeos): desastre, resposta, lugar atingido.
- **Licença** (Website Information, 01/05/2023): "Most material on FEMA.gov is free of copyright and may be copied and
  distributed without permission."
  - A exceção, para foto e gráfico licenciado: "Check to see if there is a copyright or photo credit. You need to request
    permission from the original source to use this material."
- **Uso comercial:** sim no material sem copyright.
- **Crédito pedido:** "Citation of FEMA.gov and a link back is much appreciated." Na foto: "FEMA Photo by Jevan
  Alves/Released".
- **Restrições:** o selo e as marcas do DHS (política de propriedade intelectual do DHS) e material de terceiro.
- **Resolução:** NÃO CONFERIDA (a página do item não mostra, e não baixei).
- **4K:** não conferido. O filtro do acervo chama o tipo de "YouTube Videos".
- **Acesso automático:** o `robots` do fema.gov pede 15 s entre pedidos e veta /search/ e /search?; /multimedia-library e
  /fema-media-library ficam liberados. **Script: sim, um pedido a cada 15 s.**
- **Termos:** https://www.fema.gov/about/website-information e https://www.fema.gov/photo-video-audio-use-guidelines
  (01/05/2023), lidas em 27/09/2026.
- **Veredito: COM RESSALVAS.** Foto de desastre com data e lugar (evento real, `midia.md` §1). Conferir crédito e "©" item a
  item. Vídeo há pouco, e no YouTube.

### 23. CBP (U.S. Customs and Border Protection)

- **Mídia:** foto e vídeo de fronteira, porto de entrada e patrulha, em três lugares:
  - o Media Library (cbp.gov/medialibrary);
  - o Flickr (cbpphotos, 17.445 fotos);
  - o DVIDS, que o canal já usa.
- **Licença** (Photo, Video & Audio Use Guidelines, 23/12/2025): "CBP photographs / imagery made available on CBP.gov are
  considered public domain and are not protected by copyright unless noted." O mesmo vale para vídeo e áudio. No Flickr,
  a amostra está em "United States government work".
- **Uso comercial:** sim, com as ressalvas abaixo.
- **Crédito:** "Our preference for the credit line is: 'U.S. Customs and Border Protection / <creator's name>'. Without the
  creator's name, please simply use 'U.S. Customs and Border Protection'."
- **Restrições:**
  - sem endosso;
  - "use for commercial purposes of a portion or segment containing talent or a recognizable person may infringe a right
    of publicity and permission should be obtained from the talent or recognizable person.";
  - **"For international use, please contact the Office of Public Affairs - Media Relations to request permission."**
- **Resolução:** NÃO CONFERIDA.
- **4K:** não conferido.
- **Acesso automático:** o `robots` do cbp.gov veta /search/ e libera as páginas do Media Library. O Flickr é só pelo
  navegador.
- **Termos:** https://www.cbp.gov/site-policy-notices/photo-video-audio-use-guidelines (23/12/2025), lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** Útil para fronteira. Duas coisas pedem o Lucas:
  - o pedido de permissão para uso internacional (um vídeo no YouTube é mundial);
  - a pessoa reconhecível: a amostra do Flickr é uma detenção.

### 24. Guarda Costeira e Forças Armadas fora do DVIDS

- **Situação:**
  - uscg.mil, history.uscg.mil, history.army.mil e defense.gov responderam 403;
  - history.navy.mil (Naval History and Heritage Command) deu erro de certificado TLS.
  - **NÃO CONFERIDO.**
- **O que se leu:** o Flickr oficial da Guarda Costeira (coast_guard) tem 1.412 fotos, sem texto de uso no perfil, e aponta
  o acervo para uscg.mil.
- **Veredito: NÃO SERVE como fonte nova.** O caminho oficial de imagem das Forças Armadas é o DVIDS (`midia.md` §7.3), que o
  canal já usa.

### 25. Departamento de Estado (Flickr statephotos)

- **Situação:** state.gov respondeu 403. A página de copyright do site ficou **NÃO CONFERIDA.**
- **Mídia:** foto de diplomacia (pessoas, reuniões). São 50.437, desde 06/2007.
- **Licença:** duas amostras (23/04/2026 e 23/05/2026) em "United States government work". No Flickr, essa marca remete ao
  USA.gov.
- **Uso comercial:** sim, sem sugerir endosso nem usar logo da agência. O USA.gov diz: "You also cannot use federal
  government trademarks or federal government agency logos without permission."
- **Crédito:** a legenda traz "(Official State Department photo by Freddie Everett)".
- **Restrições:** pessoas públicas em cena, e as do USA.gov.
- **Resolução:** original de 3000×2018 na amostra.
- **4K:** não.
- **Acesso automático:** só navegador.
- **Termos:** https://www.flickr.com/photos/statephotos/55233552107 e https://www.usa.gov/government-copyright
  (30/04/2026), lidas em 27/09/2026.
- **Veredito: COM RESSALVAS.** Serve para evento diplomático com data e lugar; para geografia, pouco.

### 26. Embaixadas e consulados no Flickr

- **Termos:** variam por conta. Dois exemplos, pelo perfil de cada uma:
  - **U.S. Embassy New Delhi** (87.622 fotos): as imagens são "made available for publication by news organizations,
    educational use, and/or for personal use by the subject(s) of the photographs"; o conteúdo de usuário fica sob uma
    Creative Commons 3.0 não comercial e sem obra derivada;
  - **US Embassy Lisbon** (12.406 fotos): "These photographs are works of the United States Government, excluded from
    copyright law and considered to be in the public domain." Mas o mesmo perfil veta foto manipulada e o uso em material
    comercial ou político que sugira endosso.
- **Veredito: NÃO SERVE.** Os perfis restringem o uso comercial ou a edição, e cada conta tem a regra dela.

### 27. Departamento de Estado: LSIB (Large Scale International Boundaries)

- **Mídia:** geometria de fronteira internacional em GeoPackage e Shapefile. Edição 11.4, de 24/02/2025.
- **Licença** (metadados ISO): `useLimitation` "other-pd".
  - "While U.S. Government works prepared by employees of the U.S. Government as part of their official duties are not
    subject to Federal copyright protection (see 17 U.S.C. § 105), copyrighted material incorporated in U.S. Government
    works retains its copyright protection..."
- **Uso comercial:** sim (domínio público).
- **Crédito:** nenhum pedido nos metadados.
- **Restrições:** a descrição do catálogo, vista em resultado de busca e não na fonte, diz que o dado "reflect[s] U.S.
  Government policy on international boundary alignment, political recognition, and dispute status". Não é neutro em
  fronteira disputada.
- **Acesso automático:**
  - o `robots.txt` de data.geodata.state.gov respondeu 403 (o arquivo de metadados abriu);
  - o hiu.state.gov não resolveu.
  - **Script: NÃO CONFERIDO.**
- **Termos:** https://data.geodata.state.gov/waf/iso/lsib.xml, lida em 27/09/2026.
- **Veredito: COM RESSALVAS.** É geometria, então entra pela identidade §6, por decisão do Lucas. Serve quando o vídeo pedir
  a linha oficial dos EUA.

### 28. CDC PHIL (Public Health Image Library)

- **Mídia:** foto e ilustração de saúde pública. Há uma coleção "Natural Disasters".
- **Licença** (FAQ): "Images are either 'Public Domain' (free use) or 'Copyright Protected' (restricted, obtain permission
  before use)".
- **Uso comercial:** o FAQ não trata. O texto fala em "personal, professional, and educational use with appropriate
  attribution".
- **Crédito, exigido:** "Redistribution must credit CDC and, where known, the individual photographer, and identify the CDC
  website as the free source."
- **Restrições:**
  - o logo do CDC, "a registered trademark", só com licença;
  - no uso sensível, "the phrase, 'Stock photo. Posed by model.' is required".
- **Resolução:** na amostra (id 1128), "High resolution download is not available for this image".
- **4K:** não.
- **Acesso automático:** não há `robots` em wwwn.cdc.gov (404).
- **Termos:** https://wwwn.cdc.gov/phil/FAQ.aspx, lida em 27/09/2026.
- **Veredito: NÃO SERVE para geografia.**

### 29. NSF: U.S. Antarctic Program Photo Library

- **Situação:** photolibrary.usap.gov não resolve (ENOTFOUND). **NÃO CONFERIDO.**
- **O que se sabe, por resultado de busca e não pela fonte:** a maioria das fotos era CC BY-NC-ND 4.0, e o site parou em
  julho de 2025. A cópia está no Internet Archive, que o canal deixou de fora (`midia.md` §7.3).
- **Veredito: NÃO SERVE.**

### 30. Contas federais no Flickr (a regra geral)

- **Licenças vistas nas amostras:**
  - "United States government work": Departamento de Estado, CBP;
  - "Public Domain" ou Public Domain Mark 1.0: USDA, Forest Service, NOAA Satellites;
  - CC BY 2.0: NOAA Photo Library, BLM, Grand Canyon NPS;
  - CC BY-SA 2.0: Reclamation.
  - A licença pode variar dentro da mesma conta. O perfil do Grand Canyon, por exemplo, fala em domínio público, e a
    amostra dele está em CC BY 2.0. **Confere-se foto a foto.**
- **A marca "United States Government Work":** segundo um funcionário do Flickr (fórum, 2016), "The accounts who have
  access to that designation are members of the Flickr Commons".
- **O Departamento do Interior:** a página de copyright dele diz que a imagem de domínio público no Flickr pode ser usada sem
  permissão, mas quem usa confere se ela é mesmo de domínio público, porque "Some images on our site have been obtained from
  other organizations".
- **Acesso automático:**
  - **o `robots.txt` do flickr.com e o do api.flickr.com** liberam uma lista de robôs nomeados (Googlebot, bingbot,
    ChatGPT-User, Claude-User e outros), e mesmo a eles vetam /search;
  - para todo o resto: `User-agent: *` / `Disallow: /`. Um script do canal cai nesse veto. O leitor que usei aqui não foi
    recusado nas páginas de foto e de perfil (não conferi o cabeçalho dele), até o 403 da página do Interior;
  - os **termos do site** (24/07/2025) proíbem "scraping or otherwise using any data mining, robots or similar data
    gathering or extraction methods on or in connection with the Services";
  - os **termos da API** (09/05/2018) exigem chave e dizem:
    - "If the primary purpose of your application is to derive revenue, it is considered a commercial application", e a
      chave comercial é por pedido;
    - "If you use Flickr photos for a commercial purpose, the photos must be marked with a Creative Commons license that
      allows for such use." A marca "United States government work" não é licença Creative Commons.
- **Termos:** https://www.flickr.com/help/terms, https://www.flickr.com/help/terms/api, https://www.flickr.com/commons/usage/
  e https://www.doi.gov/copyright, lidas em 27/09/2026.
- **Veredito: COM RESSALVAS, e só pelo navegador.** A API só entraria com chave comercial, e isso é decisão do Lucas.
