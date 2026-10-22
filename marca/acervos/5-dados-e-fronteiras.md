# Grupo 5 — Dados abertos para gráficos e geometria para mapas

Levantamento de CANDIDATOS para o Lucas escolher. Todas as páginas foram lidas em **27/09/2026**, na página
de licença ou de termos da própria fonte. Nada foi baixado em volume: só páginas, termos, documentação e
quatro leituras de metadado (duas na API do geoBoundaries, uma na do Banco Mundial, uma na do Our World in Data).

**Vereditos:**
- **recomendo**: a licença deixa usar em vídeo monetizado, o crédito é simples e a fonte é primária;
- **com ressalvas**: deixa, mas com uma condição que pede conferência item a item ou cuidado na tela;
- **não serve**: não comercial, ou exige comprar um direito.

**NÃO CONFERIDO** = o site recusou a leitura automática (403, página que só carrega por JavaScript, certificado
vencido). Não se contornou nada: nem outro cliente, nem outro cabeçalho, nem cópia arquivada. O que a busca
sugeriu nesses casos vai marcado como **pista (não conferida)**, para o Lucas conferir no navegador do app.

---

## 0. O que mexe no que o canal já faz (ler primeiro)

1. **EOxCloudless (o satélite da EOX da pré-v1).** Só a camada de **2016** é CC BY 4.0. As de **2018 a 2025**
   são **CC BY-NC-SA 4.0** (não comercial): num vídeo monetizado, só com a licença comercial paga da EOX.
   A pré-v1 usa a `s2cloudless_3857`, que o WMTS da EOX descreve como a de 2016 com CC BY 4.0: está certa.
   Detalhe: o `perfis.json` da pré-v1 escreve o crédito com "Copernicus Sentinel data 2016 & 2017", e o resumo
   atual da camada no WMTS diz "(Contains modified Copernicus Sentinel data 2016)". Vale usar o texto da EOX.
   Nunca trocar para uma camada `s2cloudless-2018…2025`. A de 2017 não tem licença nas páginas lidas.
2. **NASA GIBS e Worldview não são 100 % NASA.** A camada de rótulos ("Place Labels") vem da Esri, da TomTom, da
   Garmin e do OpenStreetMap. A de bordas e estradas vem do OpenStreetMap e do Natural Earth. As imagens (MODIS,
   VIIRS…) são livres; os rótulos, não.
3. **NASADEM e SRTM param em 60°N.** Juneau (58°N) está coberto; o resto do Alasca acima de 60°N e o norte do
   Canadá, não. Para o Alasca: **USGS 3DEP** (IfSAR de 5 m, sem restrição de uso) ou **Copernicus DEM** (global).
4. **Rios que o Natural Earth não tem** (Taku, Chilkat, Knik, Matanuska): o **HydroSHEDS v2** é CC BY 4.0 e já
   cobre as Américas, com rede de rios a ~30 m. A cobertura acima de 60°N não foi conferida. O HydroRIVERS (v1)
   também os teria, mas com licença própria da WWF (§1.9).
5. **Eurostat:** os dados de países de fora da UE, da EFTA e dos candidatos à UE (EUA, Canadá, China…) só podem
   ser usados de forma **não comercial**.
6. **GeoNames:** o `robots.txt` de `download.geonames.org`, onde fica o arquivo completo, veta todos os robôs
   (`Disallow: /`). Pela regra do canal, esse arquivo não se baixa por script.
7. **Banco Mundial:** a página geral de termos diz "non-commercial purposes only, unless otherwise stated". O
   "otherwise stated" é a licença de cada conjunto de dados (os WDI são CC BY 4.0), que a API devolve indicador
   por indicador.
8. **FRED:** cada série tem um rótulo. A série "Copyrighted: Pre-approval required" (o S&P 500, por exemplo) é
   só para uso não comercial.

---

## 1. Fronteiras e divisões administrativas (a)

### 1.1 geoBoundaries
- **O que é:** base global de divisões administrativas (ADM0 a ADM5) do geoLab da William & Mary. Diz ter
  "approximately 1 million boundaries within over 200 entities, including all UN member states".
- **Licença:**
  - Página inicial: "geoBoundaries datasets are provided under the CC BY 4.0 license, which allows for most
    commercial, noncommercial, and academic uses."
  - A página da API separa três lançamentos:
    - **gbOpen**: "CC-BY 4.0 compliant, and can be used for most purposes so long as attribution is provided";
    - **gbHumanitarian**: espelho da OCHA, que "may have less open licensure";
    - **gbAuthoritative**: espelho da UN SALB, que "cannot be used for commercial purposes".
  - Cada limite traz a licença da fonte original nos campos `boundaryLicense`, `licenseDetail` e `licenseSource`.
    Conferidos na API:
    - EUA, ADM1 (gbOpen): `boundaryLicense` = "Public Domain", fonte "United States Census Bureau, MAF/TIGER
      Database", ano 2018;
    - Canadá, ADM1 (gbOpen): "Open Government Canada 2.0", fonte "Statistics Canada (StatCan)", ano 2023.
- **Uso comercial (YouTube monetizado):** sim no **gbOpen**; **não** no gbAuthoritative; no gbHumanitarian,
  conferir limite a limite.
- **Crédito:**
  - "Our license requires an acknowledgement in any products you produce which use this data."
  - Na web: "put the name 'geoBoundaries' with a link back to this website, www.geoboundaries.org".
  - Citação: "Runfola, D. et al. (2020) geoBoundaries: A global database of political administrative boundaries.
    PLoS ONE 15(4): e0231866."
  - Sugestão para o canal: "geoBoundaries (CC BY 4.0)" mais o crédito da fonte original do `boundarySource`
    (por exemplo, o texto da Statistics Canada, §1.7).
- **Restrições:** a licença de cada país é a da fonte dele. O `boundaryLicense` decide, não o selo geral.
- **Formato e escala:**
  - GeoJSON, TopoJSON e Shapefile (zip), em versão completa e simplificada;
  - o detalhe é o da fonte: no Canadá ADM1, a média é de 1.269.933 vértices por unidade; nos EUA ADM1, de 5.260;
  - o **CGAZ** é o composto global (ADM0, ADM1 e ADM2), "extensive simplification is performed".
- **Script:**
  - API REST `https://www.geoboundaries.org/api/current/<gbOpen|gbHumanitarian|gbAuthoritative>/<ISO3>/<ADM0-5>/`,
    que devolve JSON com metadado e links (os arquivos ficam no GitHub `wmgeolab/geoBoundaries`);
  - `robots.txt`: `User-agent: *`, `Crawl-delay: 10`, e só veta pastas administrativas;
  - os termos não falam de script.
- **Páginas:** https://www.geoboundaries.org/ · https://www.geoboundaries.org/api.html ·
  https://www.geoboundaries.org/globalDownloads.html (lidas em 27/09/2026).
- **Veredito: recomendo**, só o **gbOpen**, conferindo o `boundaryLicense` de cada país. Nunca o gbAuthoritative.

### 1.2 GADM
- **Licença** (texto inteiro): "The data are freely available for academic use and other non-commercial use.
  Redistribution or commercial use is not allowed without prior permission." A Áustria tem licença à parte
  (CC BY-SA 2.0, do governo austríaco).
- **Uso comercial:** não.
- **Página:** https://gadm.org/license.html (lida em 27/09/2026).
- **Veredito: não serve.** É não comercial.

### 1.3 UN SALB (Second Administrative Level Boundaries)
- **O que é:** limites até o 2º nível subnacional, a 1:1 milhão, com dados dos Estados-membros.
- **Licença** (Terms of Use em PDF, extraído literalmente):
  - "Copyright of the SALB Data (including all codes, historical tables, and geospatial data) is vested in the
    United Nations."
  - "Users are prohibited from changing the geometry or content of the SALB Data without consent of the
    Contributor."
  - "The SALB Data may be used for only non-commercial purposes."
- **Crédito, se fosse usável:** "from SALB Data, United Nations", mais o nome do contribuinte que o metadado traz.
- **Aviso obrigatório:** "…do not imply the expression of any opinion whatsoever on the part of the Secretariat
  of the United Nations concerning the legal status of any country, territory, city or area or of its
  authorities, or concerning the delimitation of its frontiers or boundaries."
- **Páginas:** https://salb.un.org/en · https://salb.un.org/sites/default/files/wysiwyg_uploads/docs_uploads/TermsOfUseSALB2021.pdf
  (lidas em 27/09/2026).
- **Veredito: não serve.** É não comercial e proíbe mexer na geometria.

### 1.4 UN Geospatial (mapas da ONU; UN Geodata e Clear Map)
- **Mapas da ONU** (página "map permission"):
  - "maps and related cartographic materials can be used as long as the appropriate credit is given, and the
    United Nations is advised."
  - Mapa derivado: "If you wish to use any United Nations map as a basis for derived products or for creating
    your own map, you may do so. However, you will be solely responsible for the content of any modified map."
  - No mapa modificado, tirar o nome da ONU e o número do mapa. O crédito opcional é "based on United Nations
    map".
  - A página não fala de uso comercial.
- **UN Geodata e Clear Map (vetores):** **NÃO CONFERIDO.** O metadado do Clear Map
  (`geoservices.un.org`) deu 403, e os termos do UN Geodata não estão na página de permissão.
- **Páginas:** https://www.un.org/geospatial/mapsgeo · https://www.un.org/geospatial/mandates/public (lidas em 27/09/2026).
- **Veredito: com ressalvas.** Serve como referência de como a ONU desenha fronteira disputada, não como
  geometria. Pede avisar a ONU, e o uso comercial não está escrito.

### 1.5 Eurostat GISCO (e EuroGeographics)
- **Licença das unidades administrativas do GISCO:**
  - "The permission to use the data is granted on condition that: the data will not be used for commercial
    purposes; the source will be acknowledged."
  - Aviso: "© EuroGeographics for the administrative boundaries", "in the legend of the map and in the
    introductory page of the publication".
  - Uso comercial: "If you intend to use the data commercially, please contact EuroGeographics for information
    about their licence agreements." A página de licenças da EuroGeographics mostra preços (EuroBoundaryMap de
    € 3.300 a € 29.700 por ano).
- **EuroGeographics "Open Maps For Europe":**
  - produtos: EuroGlobalMap 1:1M, EuroRegionalMap 1:250k e EuroDEM;
  - a página diz que são "released as open data under a single licence";
  - **NÃO CONFERIDO:** a licença (`mapsforeurope.org/licence`) só carrega por JavaScript;
  - pista (não conferida): a busca mostra uma frase de atribuição longa e a forma curta "© EuroGeographics".
- **Páginas:** https://ec.europa.eu/eurostat/web/gisco/geodata/administrative-units ·
  https://eurogeographics.org/products-and-services/licensing/ (lidas em 27/09/2026).
- **Veredito: não serve** (o GISCO é não comercial). O Open Maps For Europe fica NÃO CONFERIDO.

### 1.6 US Census Bureau — TIGER/Line e Cartographic Boundary Files
- **Licença:** domínio público. A documentação técnica do TIGER/Line de 2025, §1.2, diz: "Copyright protection is
  not available for any work of the United States Government (Title 17 U.S.C., Section 105). Thus, you are free
  to reproduce census materials as you see fit. We would ask, however, that you cite the Census Bureau as the
  source."
- **Uso comercial:** sim.
- **Crédito:** pedido, não exigido. Sugestão: "Source: U.S. Census Bureau, TIGER/Line Shapefiles [ano]".
- **Restrições:**
  - "TIGER/Line® is a registered trademark of the Census Bureau…" (não usar como nome de produto);
  - "The boundary information in the TIGER/Line Shapefiles is for statistical data collection and tabulation
    purposes only. Their depiction … does not constitute a determination of jurisdictional authority…".
- **Formato e escala:**
  - Shapefile. O TIGER/Line tem o detalhe completo;
  - os Cartographic Boundary Files vêm em "500k = 1:500,000", "5m = 1:5,000,000" e "20m = 1:20,000,000";
  - cobre os EUA, com o Alasca (boroughs, census areas, CDPs). O canal já usa (`geo-tiger-matsu.mjs`).
- **Script:**
  - download em `www2.census.gov`: o `robots.txt` não veta nada para `User-agent: *` (só bloqueia robôs
    específicos);
  - a API de DADOS do Census pede o aviso "This product uses the Census Bureau Data API but is not endorsed or
    certified by the Census Bureau." e avisa que tentar passar dos limites pode bloquear o acesso.
- **Páginas:** https://www2.census.gov/geo/pdfs/maps-data/data/tiger/tgrshp2025/TGRSHP2025_TechDoc_Ch1.pdf ·
  https://www.census.gov/programs-surveys/geography/technical-documentation/naming-convention/cartographic-boundary-file.html ·
  https://www.census.gov/data/developers/about/terms-of-service.html (lidas em 27/09/2026).
- **Veredito: recomendo** para os EUA.

### 1.7 Statistics Canada — arquivos de limites do Censo
- **Licença:**
  - "Statistics Canada Open Licence". O guia de referência dos arquivos de limites de 2021 diz que o uso "is
    governed by" o "Statistics Canada Open Licence Agreement";
  - direitos: "use, reproduce, publish, freely distribute, or sell the Information; use, reproduce, publish,
    freely distribute, or sell Value-added Products."
- **Uso comercial:** sim.
- **Crédito** (literal):
  - uso direto: "Source: Statistics Canada, name of product, reference date. Reproduced and distributed on an 'as
    is' basis with the permission of Statistics Canada.";
  - mapa próprio (produto derivado): "Adapted from Statistics Canada, name of product, reference date. This does
    not constitute an endorsement by Statistics Canada of this product."
- **Restrições:** não sugerir endosso; não usar nome, brasão, logos nem símbolos oficiais do Governo do Canadá;
  a propriedade intelectual de terceiros fica fora da licença.
- **Formato e escala:**
  - Shapefile, GML, File Geodatabase, Esri REST e WMS;
  - o "cartographic" usa só a massa de terra e as ilhas costeiras; o "digital" inclui a água costeira;
  - Lambert conformal conic, NAD83;
  - níveis: províncias e territórios, census divisions, census subdivisions, entre outros.
- **Script:** o `robots.txt` de `www12.statcan.gc.ca` tem `crawl-delay: 10` e veta extensões como `.csv`,
  `.txt`, `.xls` e `.doc`. O `.zip` dos limites não está vetado.
- **Páginas:** https://www.statcan.gc.ca/en/terms-conditions/open-licence ·
  https://www12.statcan.gc.ca/census-recensement/2021/geo/sip-pis/boundary-limites/index2021-eng.cfm?year=21 ·
  https://www150.statcan.gc.ca/n1/pub/92-160-g/92-160-g2021001-eng.htm (lidas em 27/09/2026).
- **Veredito: recomendo** para o Canadá.

### 1.8 Overture Maps — tema "divisions"
- **Licença do tema:** **ODbL**. As fontes do tema, cada uma com o crédito dela:
  - "© OpenStreetMap contributors. Available under the Open Database License";
  - "geoBoundaries. Available under CC BY 4.0";
  - "Esri Community Maps contributors. Available under CC BY 4.0";
  - "Land Information New Zealand (LINZ). Available under CC BY 4.0".
- **Outros temas:**
  - base, buildings e transportation: ODbL;
  - places: CDLA Permissive 2.0, Apache 2.0 (Foursquare) ou CC0 (AllThePlaces);
  - addresses: licença de cada país.
- **Crédito:** o das fontes acima e "Overture Maps Foundation, overturemaps.org". Na prática, é o crédito do OSM
  que o canal já põe, mais geoBoundaries quando o recorte o usa.
- **Disputas:** cada `division_boundary` tem `is_disputed` ("…disputed outright or is a 'best guess'…") e
  `perspectives`, com `accepted_by` e `disputed_by`.
- **Formato e escala:** GeoParquet na nuvem (`s3://overturemaps-us-west-2/release/<data>/theme=…/type=…/*`),
  com 12 níveis de `country` a `microhood`. Última versão vista: `2026-09-23.1`.
- **Script:** feito para isso. A CLI `overturemaps download` recorta por bbox e "transfers only the data inside
  your bounding box"; também há DuckDB e catálogo STAC. A documentação não fala de credencial.
- **Páginas:** https://docs.overturemaps.org/attribution/ · https://docs.overturemaps.org/guides/divisions/ ·
  https://docs.overturemaps.org/schema/reference/divisions/division_boundary/ ·
  https://docs.overturemaps.org/getting-data/ (lidas em 27/09/2026).
- **Veredito: recomendo.** É o OSM empacotado, com metadado de disputa e recorte fácil. As regras são as do OSM,
  que o canal já cumpre.

### 1.9 HydroSHEDS e HydroRIVERS
- **HydroSHEDS v1 e HydroRIVERS:** licença PRÓPRIA da WWF, no Apêndice A da Technical Documentation v1.4, de
  abril de 2022 (PDF extraído literalmente).
  - A página do HydroRIVERS diz: "The HydroRIVERS database is freely available for scientific, educational and
    commercial use. The data are distributed under the same license agreement as the HydroSHEDS core products."
  - O que pesa na licença:
    - "HydroSHEDS data are free for non-commercial and commercial use";
    - "In no event shall Licensee license or distribute the Licensed Materials as a stand-alone product";
    - cláusula 10.7: "Licensee agrees to maintain complete, clear and accurate records for at least two (2)
      years … Licensee shall permit WWF or persons designated by WWF to inspect records…";
    - cláusula 7.1: a licença termina "(ii) in the sole discretion of WWF";
    - nome e logo da WWF, só com consentimento.
  - **Crédito obrigatório** (Exhibit B), "displayed with, attached to or embodied in (in a reasonably prominent
    manner) the documentation or metadata": "This product [insert Licensee Derivative Product name] incorporates
    data from the HydroSHEDS version 1 database which is © World Wildlife Fund, Inc. (2006-2022) and has been
    used herein under license. WWF has not evaluated the data as altered and incorporated within [insert Licensee
    Derivative Product name], and therefore gives no warranty regarding its accuracy, completeness, currency or
    suitability for any particular purpose. Portions of the HydroSHEDS v1 database incorporate data which are the
    intellectual property rights of © USGS (2006-2008), NASA (2000-2005), ESRI (1992-1998), CIAT (2004-2006),
    UNEP-WCMC (1993), WWF (2004), Commonwealth of Australia (2007), and Her Royal Majesty and the British Crown
    and are used under license. The HydroSHEDS v1 database and more information are available at
    https://www.hydrosheds.org."
  - Citação do HydroRIVERS: Lehner, B., Grill G. (2013), *Hydrological Processes* 27(15): 2171–2186,
    https://doi.org/10.1002/hyp.9740.
  - Formato do HydroRIVERS:
    - 15 arc-second, "8.5 million individual river reaches";
    - entra o rio com bacia ≥ 10 km² ou vazão ≥ 0,1 m³/s;
    - atributos: ordem de Strahler (`ORD_STRA`) e vazão média;
    - GDB ou SHP (o global em SHP tem 544 MB);
    - acima de 60°N, o v1 só existe a partir de 15 arc-second, feito com o HYDRO1k.
- **HydroSHEDS v2:**
  - "The core products of HydroSHEDS v2 are freely available for scientific, educational and commercial use. The
    data are distributed under a CC-BY 4.0 license.";
  - 1 arc-second (~30 m), "Currently limited to the Americas", com rede de rios (RIV) a partir de 1 km² de bacia;
  - citação: Lehner, B., A. Roth, M. Huber, M. Anand, and M. Thieme (2022), "A sharper look at the world's rivers
    and catchments," *Eos*, 103, https://doi.org/10.1029/2022EO220167.
  - A cobertura acima de 60°N não foi conferida.
- **Termos do SITE** (não dos dados): proíbem "any commercial use or any resale or redistribution of the Site or
  the Site Materials", ou seja, textos e imagens do site. Para conteúdo do site, o crédito é "Source: [Page title],
  [url address] downloaded on [date of download] © HydroSHEDS."
- **Script:** o `robots.txt` de `www.hydrosheds.org` tem só a linha do Sitemap, sem veto. **Mas os downloads ficam em
  `data.hydrosheds.org`, cujo `robots.txt` é "User-agent: * / Disallow: /"** (conferido em 22/10/2026, no vídeo 4, depois de um
  download por script: `APRENDIZADOS.md` item 87). Arquivo de lá, só pela pessoa no navegador, pelo botão Download da página do
  produto; o canal confere o sha256 depois. A leitura de 27/09 olhou só o host das páginas.
- **Páginas:** https://www.hydrosheds.org/products/hydrorivers · https://www.hydrosheds.org/products/hydrosheds ·
  https://www.hydrosheds.org/products/hydrosheds-v2 · https://www.hydrosheds.org/terms-of-use ·
  https://data.hydrosheds.org/file/technical-documentation/HydroSHEDS_TechDoc_v1_4.pdf (lidas em 27/09/2026).
- **Veredito:**
  - **HydroSHEDS v2: recomendo** nas Américas. É CC BY 4.0 e boa alternativa ao Taku do OSM.
  - **HydroRIVERS (v1): com ressalvas.** É comercial e gratuito, mas a licença é privada, com auditoria de
    registros e rescisão a critério da WWF, e o crédito longo vai na descrição.

### 1.10 GeoNames
- **Licença:** "This work is licensed under a Creative Commons Attribution 4.0 License." Termos:
  "commercial usage is allowed".
- **Crédito:** "give credit to GeoNames when using data or web services with a link or another reference to
  GeoNames."
- **Restrições:** "The data is provided 'as is' without warranty or any representation of accuracy, timeliness or
  completeness." É gazetteer colaborativo, fonte secundária.
- **Formato:** gazetteer de pontos (nomes e coordenadas). O detalhe não foi conferido.
- **Script:**
  - web services com `username`: "'10,000 credits' daily limit per application … the hourly limit is 1000
    credits";
  - `robots.txt` de `www.geonames.org` veta `/dump/`;
  - `robots.txt` de **`download.geonames.org`** é `User-agent: *` / `Disallow: /`: o arquivo completo não se
    baixa por script;
  - o `robots.txt` de `api.geonames.org` ficou **NÃO CONFERIDO** (certificado vencido).
- **Páginas:** https://www.geonames.org/about.html · https://www.geonames.org/export/ (lidas em 27/09/2026).
- **Veredito: com ressalvas.** A licença é boa, mas a fonte é secundária, a qualidade é variável e o host do
  download veta robôs.

### 1.11 Who's On First
- **Licença:**
  - "Crediting Who's On First is recommended and linking back to the License is required."
  - A base é "both an original work and a modification of existing open data", e "Some of those open data
    projects do require attribution."
  - A lista de fontes inclui o **OpenStreetMap (ODbL)**, o Natural Earth (domínio público), o GeoNames (CC BY), e
    o Quattroshapes e o Zetashapes ("CC-BY compatible").
  - A leitura não pegou a lista inteira de fontes, e não achei na página uma frase de licença única para a base.
- **Crédito sugerido pela fonte:** "Data from Who's On First. License", com link para a licença.
- **Uso comercial:** depende da fonte de cada registro.
- **Páginas:** https://whosonfirst.org/docs/licenses/ · https://whosonfirst.org/docs/sources/list/ (lidas em 27/09/2026).
- **Veredito: com ressalvas.** A licença é mista por registro, e cada lugar pede rastrear a fonte da geometria.

### 1.12 Extra: LSIB — Large Scale International Boundaries (Departamento de Estado dos EUA)
- **O que é:** as linhas de fronteira internacional do Office of the Geographer, versão **11.4**, de
  **24/02/2025**. "Most lines are within 100 meters of their true position on the ground". As linhas se dividem
  em 1 International Boundary, 2 Other Line of International Separation e 3 Special Line.
- **Licença:** "U.S. Government works prepared by employees as part of official duties are not subject to Federal
  copyright protection", mas "copyrighted material incorporated in U.S. Government works retains its copyright
  protection".
- **Uso comercial:** sim (domínio público).
- **Crédito recomendado:** "U.S. Department of State, Office of the Geographer and Global Issues."
- **Restrições:** é a posição oficial dos EUA. Em fronteira disputada, dizer isso na tela ou na descrição.
- **Script:** **NÃO CONFERIDO.** O `robots.txt` do host de download (`data.geodata.state.gov`) deu 403. O Lucas
  baixa no navegador `https://data.geodata.state.gov/LSIB.zip` ou `LSIB.gpkg`.
- **Página:** https://geodata.state.gov/geonetwork/srv/api/records/3bdb81a0-c1b9-439a-a0b1-85dac30c59b2 (lida em 27/09/2026).
- **Veredito: recomendo.** É fronteira internacional muito mais fina que o Natural Earth 1:10M, em domínio
  público. Na fronteira EUA–Canadá perto de Juneau, dá o traçado certo.

### 1.13 Natural Earth (já em uso; reconferido)
- "All versions of Natural Earth raster + vector map data found on this website are in the public domain."
- "No permission is needed to use Natural Earth. Crediting the authors is unnecessary." O crédito opcional é
  "Made with Natural Earth."
- **Página:** https://www.naturalearthdata.com/about/terms-of-use/ (lida em 27/09/2026).

---

## 2. Fronteiras disputadas: como cada fonte trata

| Fonte | Como desenha a disputa | Texto da fonte (literal) |
|---|---|---|
| Natural Earth | De facto (quem controla no chão). Desde a v5 (12/2021), tem versões de "ponto de vista" (POV) para 31 jurisdições, mais a ISO. | "We show who actually controls the situation on the ground because it turns out laws vary country to country." |
| OpenStreetMap (e o que vem dele: Overture, as camadas OSM da MapTiler) | Regra "On the Ground": um traçado só. Reivindicações rivais podem ter etiquetas (`boundary=disputed`, `claimed_by`, `disputed_by`), que são pouco usadas. | "…one set that, in OpenStreetMap contributor opinion, is most widely internationally recognised and best meets realities on the ground, generally meaning physical control." |
| Overture (divisions) | Por limite: `is_disputed` e `perspectives` (`accepted_by` / `disputed_by`), para desenhar o mapa do ponto de vista de um país. | "Political perspectives from which this division boundary is considered to be an accurate representation." |
| geoBoundaries | O CGAZ (global) tira as áreas disputadas e as refaz pelas definições do Departamento de Estado dos EUA. Os arquivos por país vêm de fontes nacionais e podem refletir a reivindicação de cada país (**inferência, não conferida**). | "disputed areas are removed and replaced with polygons following US Department of State definitions." |
| LSIB (EUA) | É a posição oficial do governo dos EUA, com linhas em 3 categorias. | (ver §1.12) |
| ONU (SALB e mapas) | Aviso-padrão de neutralidade. O SALB proíbe mexer na geometria. | "…do not imply the expression of any opinion whatsoever … concerning the delimitation of its frontiers or boundaries." |
| TIGER (EUA) | Limite estatístico, sem valor jurídico. | "…does not constitute a determination of jurisdictional authority or rights of ownership…" |
| Marine Regions (ZEE) | Sem opinião e sem valor legal. | "VLIZ expresses no opinion about the legal state … The data has no legal value whatsoever." |

Sugestão para o Lucas decidir, se quiser: uma política só, por exemplo "de facto, do Natural Earth, com nota na
tela quando a fronteira é disputada", registrada na `marca/identidade.md`. Sem ela, cada vídeo decide de novo.

---

## 3. Relevo, elevação e satélite (b)

### 3.1 Copernicus DEM (GLO-30 e GLO-90)
- **Licença:** "Licence for the use of the Copernicus WorldDEM-30", Full, Free & Open (PDF extraído literalmente).
  - Direitos: "(a) reproduction; (b) distribution; (c) communication to the General Public; (d) adaptation,
    modification and combination with other data and information."
  - "The use rights granted under this licence are free of charge to the User."
  - "worldwide and without limitation in time".
- **Uso comercial:** sim. A licença não tem cláusula não comercial.
- **Crédito obrigatório** (literal):
  - sem modificação: "© DLR e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS
    by the European Union and ESA; all rights reserved.";
  - **modificado** (relevo sombreado, 3D, que é o caso do canal): "produced using Copernicus WorldDEM-30 © DLR
    e.V. 2010-2014 and © Airbus Defence and Space GmbH 2014-2018 provided under COPERNICUS by the European Union
    and ESA; all rights reserved";
  - e, "in a licence or any legal warning or notice covering their distribution or communication to the General
    Public": "The organisations in charge of the Copernicus programme by law or by delegation do not incur any
    liability for any use of the Copernicus WorldDEM-30". Cabe na descrição do vídeo.
- **Restrições:** não sugerir endosso. A licença termina se uma obrigação for descumprida. O EEA-10 (10 m, Europa)
  é restrito e fica fora.
- **Formato e escala:** "Digital Surface Model providing a horizontal sampling of 30m with a worldwide/global
  coverage of all Earth landmasses", derivado do TanDEM-X; o GLO-90 tem 90 m. É modelo de superfície: inclui
  prédios e árvores. Cobre o Alasca inteiro.
- **Script:** pelo Copernicus Data Space Ecosystem: "All registered users can freely access the 30m and 90m
  resolution instances", com conta gratuita. Os termos do CDSE proíbem "creating multiple user accounts" para
  passar das cotas.
- **Pista (não conferida):** a busca fala de lacunas no GLO-30 na Armênia e no Azerbaijão.
- **Páginas:** https://documentation.dataspace.copernicus.eu/APIs/SentinelHub/Data/DEM/resources/license/License-COPDEM-30.pdf ·
  https://dataspace.copernicus.eu/explore-data/data-collections/copernicus-contributing-missions/collections-description/COP-DEM
  (lidas em 27/09/2026).
- **Veredito: recomendo.** É o melhor relevo global aberto, e o crédito é fixo.

### 3.2 SRTM e NASADEM (NASA)
- **Licença:** a orientação de uso de dados da NASA diz que "data provided from a NASA-led mission are licensed as
  Creative Commons Zero (CC0)". Na página do NASADEM: "openly shared, without restriction, in accordance with the
  EOSDIS Data Use and Citation Guidance".
- **Uso comercial:** sim, desde que não sugira endosso: "NASA material may not be used to suggest or imply
  endorsement by NASA or by any NASA employee of a commercial product, service, or activity."
- **Crédito:**
  - "NASA should be acknowledged as the source of the material where applicable.";
  - citação: "NASA JPL. (2020). NASADEM Merged DEM Global 1 arc second V001 [Dataset]. NASA Land Processes
    Distributed Active Archive Center. https://doi.org/10.5067/MEASURES/NASADEM/NASADEM_HGT.001".
- **Formato e escala:** 1 arc-second (~30 m), "all land between 60° N and 56° S latitude". **Não cobre o Alasca
  acima de 60°N.**
- **Script:** pelo NASA Earthdata (LP DAAC). A exigência de login não foi conferida.
- **Páginas:** https://www.earthdata.nasa.gov/engage/open-data-services-software-policies/data-use-guidance ·
  https://www.earthdata.nasa.gov/data/catalog/lpcloud-nasadem-hgt-001 (lidas em 27/09/2026).
- **Veredito: recomendo**, dentro da faixa de 60°N a 56°S.

### 3.3 NASA GIBS e Worldview
- **Licença das imagens:** a orientação de dados da NASA (CC0 para missão liderada pela NASA; uso comercial sem
  sugerir endosso). A documentação do GIBS fala em "full and open sharing of data".
- **Crédito** (literal):
  - GIBS: "We acknowledge the use of imagery provided by services from NASA's Global Imagery Browse Services
    (GIBS), part of NASA's Earth Science Data and Information System (ESDIS).";
  - Worldview Snapshots, pelo fórum oficial da Earthdata: "We acknowledge the use of imagery from the Worldview
    Snapshots application (https://wvs.earthdata.nasa.gov), part of the Earth Science Data and Information System
    (ESDIS)." Na legenda, "NASA Worldview Snapshots".
- **Restrição importante (camadas de terceiros)**, lida no metadado das camadas, no GitHub oficial `nasa-gibs/worldview`:
  - "Place Labels": os dados vêm de "Esri, TomTom, Garmin, FAO, NOAA, USGS, © OpenStreetMap contributors, and the
    GIS User Community" (Hybrid Reference Layer da Esri). **Não é NASA.**
  - "Coastlines/Borders/Roads": vem de "OpenStreetMap and Natural Earth". Com ela ligada, entra o crédito do OSM.
- **Formato:** WMTS e WMS, imagem diária global (MODIS, VIIRS…). A resolução varia por camada e não foi conferida.
- **Script:** WMTS e WMS sem chave. `gibs.earthdata.nasa.gov/robots.txt` dá 404, sem regras. A documentação não
  diz limite de taxa.
- **Páginas:** https://nasa-gibs.github.io/gibs-api-docs/ · https://forum.earthdata.nasa.gov/viewtopic.php?t=5232 ·
  https://raw.githubusercontent.com/nasa-gibs/worldview/main/config/default/common/config/metadata/layers/reference/Reference_Labels_15m.md ·
  …/Reference_Features_15m.md (lidas em 27/09/2026).
- **Veredito: recomendo** as camadas de imagem NASA, com os rótulos desligados e as bordas do próprio canal.

### 3.4 Sentinel Hub EO Browser (os termos da FERRAMENTA)
- **Sobre o que se exporta** (página do EO Browser): "Data exported from EO Browser can be used under CC BY 4.0
  license. Please mention Sentinel Hub EO Browser along with the relevant data collection in the credits."
  Timelapse e download em alta resolução "are only available if logged in".
- **Termos de uso** (Planet, "Last Updated: April 9, 2024"):
  - "Other than as expressly provided herein, you will only use the Services for your own internal, personal use,
    or as permitted by separate agreement.";
  - "If a plan specifies 'non-commercial/research' it may not be used for commercial purposes.";
  - os planos gratuitos podem acabar "without prior notice";
  - raspagem ("'Crawls,' 'scrapes,' 'spiders'…") é proibida;
  - créditos: "Contains modified Copernicus Sentinel data [Year] processed by Sentinel Hub" e, para Landsat,
    "Landsat 7 image courtesy of the U.S. Geological Survey processed by Sentinel Hub".
- **Como citar:** "EO Browser, https://apps.sentinel-hub.com/eo-browser/, Sinergise Solutions d.o.o., a Planet
  Labs company"; para o Sentinel, "Modified Copernicus Sentinel data [Year]/Sentinel Hub".
- **NÃO CONFERIDO:** a FAQ do EO Browser (`sentinel-hub.com/faq/eo-browser`) deu 403. Pista (não conferida): a
  busca diz que o EO Browser foi descontinuado em favor da Planet Insights Platform. A própria página do EO
  Browser recomenda o Copernicus Data Space Ecosystem "for permanently free exploration".
- **Páginas:** https://www.sentinel-hub.com/explore/eobrowser/ · https://www.sentinel-hub.com/tou/ ·
  https://www.sentinel-hub.com/faq/how-do-i-cite-eo-browser-or-other-web-pages-applications/ (lidas em 27/09/2026).
- **Veredito: com ressalvas.** O export sai CC BY 4.0, mas os termos do serviço falam em "internal, personal
  use", o plano gratuito é precário e o futuro da ferramenta é incerto. Prefira o Copernicus Browser (§3.5).

### 3.5 Copernicus Browser (CDSE) e os dados Sentinel
- **Licença dos dados Sentinel** (aviso legal da Comissão Europeia, extraído literalmente): a lei da UE dá acesso
  livre para "(a) reproduction; (b) distribution; (c) communication to the public; (d) adaptation, modification
  and combination with other data and information".
- **Uso comercial:** sim.
- **Crédito** (literal): "'Copernicus Sentinel data [Year]' for Sentinel data". Modificado (recorte, cor,
  composição, que é o caso do canal): "'Contains modified Copernicus Sentinel data [Year]' for Sentinel data".
- **Termos do CDSE:** "The access and use of Copernicus Sentinel data is available on a free, full and open basis
  through the Copernicus Data Space Ecosystem." Proíbem contas múltiplas para passar das cotas.
- **A ferramenta:** "Currently you need a free account to use the Browser." Exporta JPG, PNG, GeoTIFF e KMZ, e
  timelapse em GIF ou MPEG4. O botão "Show Captions" põe na imagem a fonte, a data, a escala "and branding
  information", que o canal desliga para usar o próprio crédito. A documentação não fala de licença do export,
  e então vale o aviso legal acima.
- **Páginas:** https://sentinels.copernicus.eu/documents/247904/690755/Sentinel_Data_Legal_Notice ·
  https://dataspace.copernicus.eu/terms-and-conditions ·
  https://documentation.dataspace.copernicus.eu/Applications/Browser.html (lidas em 27/09/2026).
- **Veredito: recomendo.** É Sentinel-2 a 10 m com data escolhida e crédito curto: bom para "antes e depois" e
  para a imagem do mês do fato.

### 3.6 EOxCloudless (Sentinel-2 cloudless, da EOX)
- **Licenças:**
  - "For the year **2016**, EOxCloudless is licensed under the Creative Commons Attribution 4.0 International
    License."
  - "For the years **2018 to 2025**, EOxCloudless WM(T)S layers is licensed under the Creative Commons
    Attribution-NonCommercial-ShareAlike 4.0 International License."
  - Uso comercial dessas: só com a "EOX Commercial Attribution-RestrictedUse 1.2 License", paga pelo contato de
    vendas. Essa licença também diz: "The Direct Redistribution of Licensed Material is prohibited – both for
    sale and for free."
  - O ano de 2017 não aparece nas páginas lidas: NÃO CONFERIDO.
- **A camada da pré-v1:** o WMTS da EOX descreve a `s2cloudless_3857` como "Sentinel-2 cloudless layer for 2016
  by EOX - 3857", com o resumo "EOxCloudless https://cloudless.eox.at by EOX IT Services GmbH (Contains modified
  Copernicus Sentinel data 2016) released under Creative Commons Attribution 4.0 International License."
- **Crédito:** o da camada, como acima. O exemplo de 2025 é "EOxCloudless https://cloudless.eox.at by EOX IT
  Services GmbH (Contains modified Copernicus Sentinel data 2025)".
- **Script:** tiles WMTS. A pré-v1 anota limite de requisições (HTTP 429) no serviço gratuito.
- **Páginas:** https://cloudless.eox.at/documentation/license · https://cloudless.eox.at/license-legal/ ·
  https://cloudless.eox.at/license-non-commercial · https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml
  (lidas em 27/09/2026).
- **Veredito:** **2016: com ressalvas** (livre com crédito, mas a imagem é de 2016 e não aguenta zoom de rua).
  **2018 a 2025: não serve** (não comercial).

### 3.7 Esri World Imagery
- **Licença:** o metadado do item diz "licensed under the Esri Master License Agreement". O crédito do item é
  "Esri, Vantor, Earthstar Geographics, and the GIS User Community".
- **Termos do site e dos serviços da Esri, §2.2:**
  - "You may download, view, copy, and print Services available on Esri Web sites solely for your own internal
    purposes, or for your own noncommercial external purposes unless otherwise specified.";
  - "Services may not be reproduced or transmitted for commercial purposes, in any form or by any means … except
    as expressly permitted in writing by Esri.";
  - "Proper attribution to Esri must be given for any use of the Services".
- **Uso comercial:** não, sem permissão por escrito ou licença Esri.
- **NÃO CONFERIDO:** o artigo de suporte da Esri sobre crédito em vídeo (`support.esri.com`) deu 403.
- **Páginas:** https://www.arcgis.com/sharing/rest/content/items/10df2279f9684e4a9f6a7f08febac2a9?f=json ·
  https://www.esri.com/en-us/legal/terms/web-site-service (lidas em 27/09/2026).
- **Veredito: não serve.**

### 3.8 Google Earth Studio (e Google Earth)
- **Permissão** (Geo Guidelines do Google):
  - "If you're using Google Earth content in an online video (e.g. YouTube) primarily for educational,
    instructional, recreational, or entertainment purposes, you don't need to request permission, even if your
    work is monetized.";
  - "You may use Google Earth and Earth Studio content for news broadcasts, television shows, films,
    documentaries, music videos, and any educational purposes. You don't need to submit a request, but you must
    follow all guidelines on this page … especially with regard to on-screen attribution.";
  - fica fora o uso promocional: filme de propaganda, anúncio, comercial, e o uso "specifically to sell or promote
    a product, business, or organization".
- **Termos adicionais do Google Maps/Earth** (modificados em 4 de junho de 2025): deixam "publicly display content
  with proper attribution online, in video, and in print" e proíbem "mass download or create bulk feeds of the
  content".
- **Crédito** (documentação do Earth Studio):
  - "All uses of Google Earth Studio must provide attribution to both 'Google Earth' and third party imagery
    providers, if applicable.";
  - "We require this attribution to be visible when Earth Studio content is shown." A FAQ diz "on screen for the
    duration of said content";
  - o render grava a marca d'água do crédito em cada quadro, e a posição é ajustável;
  - "We currently do not offer a license to use Google Earth imagery without attribution."
- **Restrições** (Geo Guidelines):
  - "You may not move the attribution away from the content, such as to … the credits of your film or show…";
  - "Don't remove, obscure, or crop out the attribution information.";
  - "you must not significantly alter how Google Maps, Google Earth, Earth Studio, or Street View would look
    online."
  - A FAQ também diz: "We currently do not offer a license to use Google Earth imagery for commercial
    applications." As diretrizes, que tratam do caso "YouTube monetizado educativo", liberam.
- **Acesso:** "Earth Studio requires a Google account and currently works in Google Chrome only", e o acesso se
  pede por formulário. É trabalho do Lucas, na conta dele.
- **Páginas:** https://about.google/brand-resource-center/products-and-services/geo-guidelines/ ·
  https://earth.google.com/studio/docs/attribution/ · https://www.google.com/earth/studio/faq/ ·
  https://www.google.com/help/terms_maps-earth/ (lidas em 27/09/2026).
- **Veredito: com ressalvas.** Serve ao canal, que é educativo, mesmo monetizado, com três condições: o crédito
  "Google Earth" e os provedores ficam NA TELA a cena inteira; não se repinta a imagem (a paleta do canal não
  pode mudar a cor do satélite); e nada dela entra em trecho de patrocínio.

### 3.9 Mapbox
- **Termos de produto** (PDF de 14/04/2025, §1.7): "Customer may not use any Licensed Map Content in any printed
  or video media except expressly as set forth in this Section."
  - "Video media are limited to video media distributed by Internet, cable, and satellite."
  - As exceções são: vídeo para promover o próprio aplicativo do cliente, "only incidentally" (1.7.1); até 100
    cópias estáticas de alta resolução pelo Studio (1.7.2); ou "Purchased Print & Video Rights … in an applicable
    active Order" (1.7.4).
- **§1.9:** "not perform bulk or automated queries, … not scrape or systematically download Licensed Map Content".
- **Página:** https://cdn.prod.website-files.com/609ed46055e27a02ffc0749b/67fd8d3325f4dfaf2f5145ef_Mapbox%20Product%20Terms%20(2025-04-14).pdf
  (e https://www.mapbox.com/legal/tos, de 31/03/2024, que não trata de vídeo; lidas em 27/09/2026).
- **Veredito: não serve.** Vídeo no YouTube só com direito de vídeo comprado.

---

## 4. Dados para gráficos (c)

### 4.1 Banco Mundial (World Bank Open Data, WDI)
- **Licença:**
  - o catálogo de dados diz que o padrão dos conjuntos do próprio Banco é "Creative Commons Attribution 4.0
    International license" (CC-BY 4.0). Existem também ODbL, Microdata Research License (só pesquisa), "License
    Specified Externally" e "Custom", e cada conjunto diz a sua no metadado;
  - o WDI é "Creative Commons Attribution 4.0" (metadado de 20/07/2026, com mais de 1.500 indicadores);
  - **o metadado da API dá a licença por indicador.** Exemplo: EG.USE.PCAP.KG.OE → `License_Type` "CC BY-4.0",
    com fonte "International Energy Agency (IEA)";
  - a página geral de termos (o endereço antigo "terms-of-use-for-datasets" abre nela) diz: "The content available
    on this platform is provided for informational and non-commercial purposes only, unless otherwise stated." A
    licença do conjunto é o "otherwise stated".
- **Uso comercial:** sim, no que for CC BY 4.0.
- **Crédito:** CC BY 4.0, "give appropriate credit (attribution) and indicate if they have made any changes".
  Sugestão: "Source: World Bank, World Development Indicators (CC BY 4.0)".
- **Restrições:** nada de logo nem de sugerir afiliação ("…nor in any event to represent or imply an association
  or affiliation with The World Bank Group"). Indicador de terceiro (IEA, por exemplo): o Banco declara CC BY 4.0,
  mas a IEA não pôde ser conferida (§4.11).
- **Script:** API v2 (`api.worldbank.org`), sem chave. O `robots.txt` do host dá 404, sem regras.
- **Páginas:** https://datacatalog.worldbank.org/public-licenses ·
  https://datacatalog.worldbank.org/search/dataset/0037712/World-Development-Indicators ·
  https://api.worldbank.org/v2/sources/2/indicators/EG.USE.PCAP.KG.OE/metadata?format=json ·
  https://www.worldbank.org/en/about/legal/terms-of-use-for-datasets (lidas em 27/09/2026).
- **Veredito: recomendo**, conferindo o `License_Type` de cada indicador, o que se faz por script.

### 4.2 FMI (IMF)
- **NÃO CONFERIDO:** `imf.org/en/About/copyright-and-terms` deu 403. O `data.imf.org` só aponta "Copyright and
  Usage" para `imf.org/external/terms.htm`, no mesmo domínio bloqueado, e mostra "© 2026 INTERNATIONAL MONETARY
  FUND. ALL RIGHTS RESERVED."
- **Pista (não conferida):** a busca diz que o reuso comercial pede e-mail a `copyright@imf.org` e que o download
  automatizado em lote é proibido sem permissão.
- **Veredito: NÃO CONFERIDO.** Não usar até o Lucas ler a página no navegador do app.

### 4.3 OCDE (OECD)
- **NÃO CONFERIDO:** `oecd.org/en/about/terms-conditions.html` e o comunicado de 07/2024 deram 403.
- **Pista (não conferida):** CC BY 4.0 como padrão desde 1º de julho de 2024.
- **Veredito: NÃO CONFERIDO.**

### 4.4 Eurostat
- **Licença:** "Reuse of statistical data, metadata, publications, and other dissemination tools published on
  this website for commercial or non-commercial purposes is authorised provided the source is acknowledged." O
  conteúdo editorial é CC BY 4.0.
- **Exceções**, que "may not be reused for commercial purposes, but non-commercial reuse is possible without
  restriction":
  - dados de fontes que não o Eurostat;
  - copublicações;
  - **"Data for countries other than: Member States of the European Union (EU), Member States of the European
    Free Trade Association (EFTA), official EU acceding and candidate countries"**;
  - comércio de Liechtenstein e Suíça (desde 1995) e da Áustria no nível de 8 dígitos da NC.
- **Crédito:** citar a fonte. Para conjunto de dados, o DOI e a data de acesso.
- **Script:** API oficial, não conferida em detalhe. O `robots.txt` de `ec.europa.eu` veta o caminho antigo
  `/eurostat/SDMX/diss-web/rest/`.
- **Página:** https://ec.europa.eu/eurostat/web/main/help/copyright-notice (lida em 27/09/2026).
- **Veredito: com ressalvas.** Serve para UE, EFTA e candidatos. Dado de outro país que vem do Eurostat não serve
  em vídeo monetizado.

### 4.5 UNdata
- **Termos:** "All data and metadata provided on UNdata's website are available free of charge and may be copied
  freely, duplicated and further distributed provided that UNdata is cited as the reference." A página não
  restringe o uso comercial.
- **Crédito:** "UNdata", mais a fonte da tabela.
- **Ressalva:** o UNdata junta bases de outras agências (FAO, Comtrade…), cada uma com termos próprios. Que eles
  prevaleçam é inferência: a página não trata disso.
- **Página:** https://data.un.org/Host.aspx?Content=UNdataUse (lida em 27/09/2026).
- **Veredito: com ressalvas.** Bom índice, mas o gráfico deve citar e seguir a fonte original.

### 4.6 UN Comtrade
- **Lido na FAQ oficial:**
  - "no distinction between profit and non-profit when it comes to re-dissemination";
  - redistribuir dado ORIGINAL a não assinantes acima de 100.000 registros exige a "license to distribute" paga,
    além da assinatura premium.
- **NÃO CONFERIDO:** o contrato de licença (`comtradeplus.un.org/LicenseAgreement` e a página antiga) só carrega
  por JavaScript ou volta vazio.
- **Páginas:** https://uncomtrade.org/docs/faqs-on-use-and-re-dissemination/ (lida em 27/09/2026).
- **Veredito: NÃO CONFERIDO (a licença).** Um gráfico com poucos números provavelmente cabe, mas sem ler a
  licença não recomendo.

### 4.7 FAOSTAT (FAO)
- **Licença:** "all datasets disseminated through FAO corporate statistical databases...are licensed under the
  Creative Commons Attribution-4.0 International licence (CC BY 4.0)".
- **Restrições:**
  - "Datasets shall not be used for or in conjunction with the promotion of a commercial enterprise and/or its
    product(s) or services";
  - "FAO corporate statistical databases may include data provided by third parties which may not be
    redistributed or reused without the consent of the original data provider… It is your responsibility to
    determine if a particular dataset is fully or partially owned by third parties";
  - não sugerir que a FAO endossa.
- **Crédito** (formato literal): "FAO. [YYYY (year of last update)]. [Name of database: Name of dataset OR Name of
  database]. [Accessed on [DD Month YYYY]]. [URL] Licence: CC-BY-4.0."
- **Script:** os termos não tratam. O `robots.txt` de `www.fao.org` não fala do FAOSTAT.
- **Página:** https://www.fao.org/contact-us/terms/db-terms-of-use/en/ (lida em 27/09/2026).
- **Veredito: com ressalvas.** É CC BY 4.0, mas nunca junto de patrocínio, e o dado de terceiro se confere.

### 4.8 Our World in Data
- **Licença:**
  - "Unless otherwise stated, you can use, reproduce, and distribute any chart we made (those with our logo and CC
    BY copyright stamp), provided that you cite us.";
  - "Most of the data on Our World in Data comes from third-party providers … and is subject to the license terms
    of those providers.";
  - "Data produced by us falls under our permissive CC BY license".
- **Crédito:** "credit both Our World in Data and the underlying third-party data provider". Exemplo da fonte:
  "Hannah Ritchie, Pablo Rosado and Max Roser (2023) - "CO₂ and Greenhouse Gas Emissions" Published online at
  OurWorldinData.org."
- **Script:**
  - cada gráfico tem `…/grapher/<slug>.metadata.json`, e a API de indicadores dá a **licença de cada origem**.
    Conferido: as origens do Global Carbon Budget vêm com "CC BY 4.0";
  - o `robots.txt` tem só a linha do Sitemap.
- **Páginas:** https://ourworldindata.org/faqs ·
  https://api.ourworldindata.org/v1/indicators/1119906.metadata.json (lidas em 27/09/2026).
- **Veredito: recomendo como atalho**: acha a série, diz a licença da origem e dá o CSV. O canal redesenha o
  gráfico e cita o OWID e a fonte original. A imagem do gráfico do OWID não vai à tela, porque a marca desenha
  os próprios.

### 4.9 Agências dos EUA: Census, BLS, BEA e EIA (domínio público)
- **Census:** Title 17 §105 (§1.6). A API de dados pede o aviso "This product uses the Census Bureau Data API but
  is not endorsed or certified by the Census Bureau."
- **BLS:**
  - "everything that we publish, both in hard copy and electronically, is in the public domain, except for
    previously copyrighted photographs and illustrations";
  - pede "cite the Bureau of Labor Statistics as the source";
  - o emblema do BLS é marca registrada;
  - API v1 sem registro e v2 com registro. O `robots.txt` só veta pastas internas para `*`.
- **BEA:**
  - "Unless stated otherwise, the information posted on this web site is in the public domain and may be used or
    reproduced without specific permission.";
  - citação sugerida: "Source: U.S. Bureau of Economic Analysis";
  - a API pede cadastro e aceite de um PDF de termos, que não foi lido.
- **EIA:**
  - "U.S. government publications are in the public domain and are not subject to copyright protection.";
  - citação no formato "Source: U.S. Energy Information Administration (Oct 2008)" (fonte e data);
  - exceções: material de terceiros "may be protected by U.S. and foreign copyright laws", fotos licenciadas e o
    logo;
  - API v2 com chave e arquivos em lote "twice daily". O `robots.txt` permite `/` e veta pastas como `/archive/`
    e `/reports/`.
- **Páginas:** https://www.census.gov/data/developers/about/terms-of-service.html ·
  https://www.bls.gov/opub/copyright-information.htm · https://www.bls.gov/developers/ ·
  https://www.bea.gov/help/faq/147 · https://www.eia.gov/about/copyrights_reuse.php · https://www.eia.gov/opendata/
  (lidas em 27/09/2026).
- **Veredito: recomendo** as quatro. Na EIA, confira se a série não é de terceiro.

### 4.10 FRED (Federal Reserve Bank of St. Louis)
- **Regra:** "Data series available through the FRED® Services … may be owned by third parties and may be
  protected by copyrights…". "BEFORE USING DATA SERIES OWNED BY THIRD PARTIES FOR ANYTHING OTHER THAN YOUR OWN
  PERSONAL USE, YOU MUST CONTACT THE DATA OWNER TO OBTAIN PERMISSION."
- **Como saber:** cada série mostra um rótulo.
  - "Public Domain: Citation Requested": livre. Exemplo conferido: GDP, cuja fonte é o BEA.
  - "Copyrighted: Citation Required": "you may use these data series with proper attribution of the source and
    acknowledgment that you obtained the data from FRED".
  - "Copyrighted: Pre-approval Required": "these series may only be used for non-commercial educational or
    personal use". Exemplo conferido: SP500, "Copyright © 2016, S&P Dow Jones Indices LLC. All rights reserved.
    Reproduction of S&P 500 in any form is prohibited except with the prior written permission…".
  - Na API: "Copyrighted series contain the word 'Copyright' in their notes."
- **Crédito:**
  - citação sugerida, no exemplo do GDP: "U.S. Bureau of Economic Analysis, Gross Domestic Product [GDP],
    retrieved from FRED, Federal Reserve Bank of St. Louis; https://fred.stlouisfed.org/series/GDP";
  - quem usa a imagem do gráfico do FRED põe "FRED® Graphs ©Federal Reserve Bank of St. Louis. All rights
    reserved…". O canal não deve usar essa imagem.
- **Script:**
  - API com chave. Aviso: "This product uses the FRED® API but is not endorsed or certified by the Federal Reserve
    Bank of St. Louis.";
  - a API proíbe uso para treinar IA;
  - `robots.txt`: `User-agent: *`, `Crawl-delay: 1`, e veta os caminhos de imagem dos gráficos.
- **Páginas:** https://fred.stlouisfed.org/legal/ · https://fred.stlouisfed.org/docs/api/terms_of_use.html ·
  https://fred.stlouisfed.org/series/SP500 · https://fred.stlouisfed.org/series/GDP (lidas em 27/09/2026).
- **Veredito: com ressalvas.** Vale o rótulo de cada série. Para série de domínio público, melhor ir direto à
  fonte (BEA, BLS).

### 4.11 IEA (Agência Internacional de Energia)
- **NÃO CONFERIDO:** `iea.org/terms` e `iea.org/terms/creative-commons-cc-licenses` deram 403.
- **Veredito: NÃO CONFERIDO.** O dado de energia pode vir da EIA (EUA, domínio público) ou, com a ressalva do
  §4.1, do Banco Mundial.

### 4.12 ACLED (conflitos)
- **EULA** ("Last Updated: 8 July 2025"):
  - "Commercial entities may not access or use the Content and/or Platforms without first obtaining a corporate
    license." O texto não define "commercial";
  - o que se publica tem de ser "transformative, such that they cannot be reverse engineered to recreate the
    Licensed Content";
  - "Scraping and crawling the Site is prohibited". O download pela API e pela plataforma é permitido.
- **Crédito:** "attribute the source data clearly and prominently on the visual itself, either at the bottom or
  within the key/legend". Em arquivo de dados: "ACLED, accessed on [DATE]. www.acleddata.com".
- **Páginas:** https://acleddata.com/terms-of-use/ · https://acleddata.com/eula · https://acleddata.com/attributionpolicy ·
  https://acleddata.com/contentusage (lidas em 27/09/2026).
- **Veredito: não serve** sem licença corporativa. Um canal monetizado muito provavelmente conta como entidade
  comercial. Se o Lucas quiser, pergunta-se à ACLED.

### 4.13 Global Carbon Project (Global Carbon Budget)
- **Licença:**
  - Zenodo: "The Global Carbon Project's fossil CO2 emissions dataset", versão 2025v15, de 22/10/2025,
    **"Creative Commons Attribution 4.0 International"**, de Andrew e Peters (CICERO);
  - o site do GCB não diz a licença. Diz só "Please cite the Global Carbon Budget 2025 (Friedlingstein et al.,
    2025, ESSD) for all data";
  - o ICOS, que hospeda o suplemento, declara CC BY 4.0 para os "ICOS data", mas a página da coleção do GCB não
    repete a licença.
- **Crédito:**
  - "Global Carbon Budget 2025 (Friedlingstein et al., 2025, ESSD)";
  - para o suplemento: "Global Carbon Project. (2026). Supplemental data of Global Carbon Budget 2025 (Version 1.0)
    [Data set]. Global Carbon Project. https://doi.org/10.18160/gcp-2025".
- **Script:** arquivos no Zenodo. O `robots.txt` permite `/records/…` e `/api/records/*/files`, veta o resto de
  `/api` e pede `Crawl-delay: 10`.
- **Páginas:** https://zenodo.org/records/17417124 · https://globalcarbonbudget.org/datahub/the-latest-gcb-data-2025/ ·
  https://www.icos-cp.eu/GCP/2025 · https://www.icos-cp.eu/data-services/about-data-portal/data-license (lidas em 27/09/2026).
- **Veredito: recomendo** o conjunto do Zenodo (CC BY 4.0).

### 4.14 ACNUR (UNHCR)
- **NÃO CONFERIDO:** `unhcr.org/us/terms-use-datasets` e `unhcr.org/refugee-statistics/` deram 403. O HDX
  (`data.humdata.org/organization/unhcr`) também deu 403. A documentação da API (`api.unhcr.org`) existe, mas não
  fala de licença.
- **Pista (não conferida):** CC BY 4.0, com o crédito "UNHCR Refugee Population Statistics Database".
- **Veredito: NÃO CONFERIDO.**

### 4.15 OMS (WHO)
- **Licença:**
  - `data.who.int`: "Unless specifically indicated otherwise, these Datasets are provided to you under a Creative
    Commons Attribution 4.0 International License (CC BY 4.0)";
  - a política de dados da OMS (`who.int`) fala em termos "that allow non-commercial, not-for-profit use of the
    Data for public health purposes";
  - a página do GHO não diz a licença;
  - as **publicações** da OMS são CC BY-NC-SA 3.0 IGO: não comerciais.
- **Crédito** (literal): "World Health Organization {YEAR} data.who.int, {ITEM_NAME} [{ITEM_TYPE}]. {URL} (Accessed
  on {ACCESS_DATE})".
- **Restrições:** nome e emblema da OMS só com aprovação escrita; não deturpar o conteúdo; dado de terceiro pede
  permissão da origem.
- **Script:** o `robots.txt` de `data.who.int` bloqueia 527 robôs pelo nome e veta `/immunizationdata` para todos.
- **Páginas:** https://data.who.int/terms-and-conditions · https://www.who.int/about/policies/publishing/data-policy ·
  https://www.who.int/about/policies/publishing/copyright · https://www.who.int/data/gho (lidas em 27/09/2026).
- **Veredito: com ressalvas.** Use só o conjunto do `data.who.int` que vem CC BY 4.0; o do GHO e as publicações,
  não.

---

## 5. Extras achados no caminho (fora da lista pedida)

| Fonte | O que é | Licença (literal) e crédito | Script | Veredito |
|---|---|---|---|---|
| **USGS 3DEP** | Relevo dos EUA: 1 m, 1/3" e 1"; **Alasca com IfSAR de 5 m** | "All 3DEP products are available, free of charge and without use restrictions." O USGS pede "Credit: U.S. Geological Survey". Fotos que não são do USGS podem ter direitos. | TNM Downloader (não conferido) | **recomendo** (o melhor relevo do Alasca) |
| **ETOPO 2022** (NOAA NCEI) | Relevo global de terra e fundo do mar, 15"/30"/60", em versões de gelo e de rocha | O metadado diz **CC0-1.0**. Citação: "NOAA National Centers for Environmental Information. 2022: ETOPO 2022 15 Arc-Second Global Relief Model." DOI 10.25921/fd45-gt74. Não serve para navegação. | GeoTIFF, NetCDF/THREDDS e recorte | **recomendo** |
| **GEBCO 2026 Grid** | Batimetria global com terra, 15" | "The GEBCO Grid is placed in the public domain and may be used free of charge." Deixa "Commercially exploit". Pede "Acknowledge the source". Não sugerir status oficial; "should NOT be used for navigation". Citação: "GEBCO Bathymetric Compilation Group 2026 (2026). The GEBCO_2026 Grid - a continuous terrain model for oceans and land at 15 arc-second intervals." DOI 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa | global, recorte, CEDA e OPeNDAP | **recomendo** |
| **Open Government Licence – Canada** (NRCan: CanVec, hidrografia, DEM) | Dados federais do Canadá | "…licence to use the Information, including for commercial purposes". Crédito: "Contains information licensed under the Open Government Licence – Canada." Excluídos: dado pessoal, direito de terceiro, símbolos oficiais. A licença de cada produto não foi conferida. | open.canada.ca | **recomendo** (conferindo o produto) |
| **Marine Regions** (VLIZ: ZEE e limites marítimos) | Zonas econômicas exclusivas e mares territoriais | "Marine Regions' products have been licensed under CC-BY since Maritime Boundaries version 11 (2019)." "…not meant to be used for legal, economical (in the sense of exploration of natural resources) or navigational purposes." Citação: "Flanders Marine Institute (2026): MarineRegions.org. Available online at www.marineregions.org. Consulted on 2026-09-27." | não conferido | **recomendo** (dizer que a linha não tem valor legal) |
| **ESA WorldCover** | Cobertura do solo a 10 m, 2020 e 2021 | "Creative Commons Attribution 4.0 International License". Crédito: "© ESA WorldCover project [year] / Contains modified Copernicus Sentinel data ([year]) processed by ESA WorldCover consortium" | AWS S3 sem login, Zenodo, WMS/WMTS | **recomendo** |
| **GHSL** (JRC, UE) | Área construída e população em grade | "Creative Commons Attribution 4.0 International (CC BY 4.0)", "…for any purpose, including commercial uses". Cita Pesaresi et al. (2024) e o produto. | download (não conferido) | **recomendo** |
| **WorldPop** | População em grade, 100 m e 1 km, 2015–2030 (R2025A) | "© 2026 WorldPop datasets are licensed under the Creative Commons Attribution 4.0 International License". Pede uso que não prejudique populações vulneráveis. | download (não conferido) | **recomendo** |
| **Maddison Project Database 2023** | PIB histórico por país | "Creative Commons Attribution 4.0 International License". Cita Bolt e van Zanden (2024), *J. Economic Surveys*, DOI 10.1111/joes.12618, e os artigos originais quando o dado vai a gráfico. | xlsx (não conferido) | **recomendo** |
| **ONU — World Population Prospects 2024** | População por país, com projeções | A página do conjunto não diz licença. A publicação diz: "Figures and tables in this publication can be reproduced without prior permission under a Creative Commons license (CC BY 3.0 IGO)". Citação: "United Nations, Department of Economic and Social Affairs, Population Division (2024). World Population Prospects 2024…" | portal (não conferido) | **com ressalvas** (a licença do conjunto não está declarada) |

Páginas dos extras (lidas em 27/09/2026):
- https://www.usgs.gov/3d-elevation-program/about-3dep-products-services
- https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits
- https://www.ncei.noaa.gov/products/etopo-global-relief-model
- https://data.noaa.gov/metaview/page?xml=NOAA%2FNESDIS%2FNGDC%2FMGG%2FDEM%2Fiso%2Fxml%2Fetopo_2022.xml&view=getDataView&header=none
- https://www.gebco.net/data-products/gridded-bathymetry-data
- https://www.gebco.net/data-products/gridded-bathymetry/terms-of-use
- https://open.canada.ca/en/open-government-licence-canada
- https://www.marineregions.org/disclaimer.php
- https://esa-worldcover.org/en/data-access
- https://human-settlement.emergency.copernicus.eu/GHSLhowToCite.php
- https://hub.worldpop.org/project/categories?id=3
- https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2023
- https://www.un.org/development/desa/pd/content/world-population-prospects-2024-dataset
- https://population.un.org/wpp/assets/Files/WPP2024_Data_Sources.pdf

---

## 6. NÃO CONFERIDO (o que falta e por quê)

| Item | Motivo | Como destravar |
|---|---|---|
| FMI (termos de dados) | 403 em `imf.org`; o `data.imf.org` aponta para o mesmo domínio | navegador do app, com o Lucas vendo |
| OCDE (termos, CC BY 4.0 desde 07/2024?) | 403 em `oecd.org` | idem |
| IEA (termos e CC) | 403 em `iea.org` | idem |
| ACNUR (licença dos dados) | 403 em `unhcr.org` e no HDX | idem |
| UN Comtrade (contrato de licença) | a página só carrega por JavaScript | idem |
| EuroGeographics Open Maps For Europe (licença) | a página só carrega por JavaScript | idem |
| UN Geodata e Clear Map (termos) | 403 no metadado do `geoservices.un.org`; os termos não estão na página | idem |
| Esri: artigo sobre crédito em vídeo | 403 no `support.esri.com` | não muda o veredito (os termos da Esri já barram o uso comercial) |
| FAQ do EO Browser (descontinuação?) | 403 | idem |
| LSIB: robots do host de download | 403 em `data.geodata.state.gov/robots.txt` | o Lucas baixa no navegador |
| GeoNames: robots da API | certificado vencido em `api.geonames.org` | tentar outro dia |
| EOxCloudless 2017 | o ano não aparece nas páginas de licença | não usar |
| Copernicus DEM: lacuna na Armênia e no Azerbaijão | só a busca fala disso | irrelevante para a América do Norte |
| HydroSHEDS v2 acima de 60°N | não declarado | conferir no mapa de cobertura antes de usar |
| NASADEM: login do Earthdata | a página não diz | ao baixar |
| GISCO: escalas | não lidas (a fonte não serve de todo modo) | — |
| Who's On First: lista inteira de fontes | a leitura foi truncada | só se o canal for usar |
| geoBoundaries: arquivo por país com a reivindicação nacional | inferência | olhar o país na hora |
| Global Carbon Budget: licença no site do GCB | o site não diz; o Zenodo diz CC BY 4.0 | usar o do Zenodo |
| OMS: licença do GHO | a página não diz | usar o `data.who.int` |
| ONU WPP: licença do conjunto | a página não diz; a publicação é CC BY 3.0 IGO | perguntar à Divisão de População ou tratar como CC BY 3.0 IGO com ressalva |
| Banco Mundial: indicadores de terceiros (IEA…) | a IEA deu 403 | usar indicadores de fonte pública ou aceitar a licença que o Banco declara |
| Planetary Computer (termos do serviço que o canal usa para o Landsat) | a página só carrega por JavaScript | fora do escopo; os dados Landsat são do USGS |

---

## 7. Tabela-resumo

| Fonte | O que é | Licença | Crédito | Script? | Veredito |
|---|---|---|---|---|---|
| geoBoundaries (gbOpen) | limites ADM0–5 do mundo | CC BY 4.0; licença de origem por limite | "geoBoundaries" + link; fonte original | sim, API, crawl-delay 10 | recomendo |
| GADM | limites ADM do mundo | não comercial | — | — | não serve |
| UN SALB | limites ADM1/2 da ONU | só não comercial; não mexer na geometria | "from SALB Data, United Nations" | — | não serve |
| UN Geospatial (mapas) | mapas oficiais da ONU | crédito e aviso à ONU; comercial não dito | "based on United Nations map" | NÃO CONFERIDO | com ressalvas |
| Eurostat GISCO | limites da Europa | não comercial | "© EuroGeographics for the administrative boundaries" | — | não serve |
| EuroGeographics OME | EuroGlobalMap e EuroRegionalMap | "open data" (licença NÃO CONFERIDA) | — | — | NÃO CONFERIDO |
| US Census TIGER/CB | limites dos EUA, com o Alasca | domínio público | pede citar o Census | sim | recomendo |
| Statistics Canada | limites do Canadá | Open Licence (comercial ok) | "Adapted from Statistics Canada, …" | sim (crawl-delay 10) | recomendo |
| Overture divisions | limites do OSM empacotados, com disputa | ODbL | "© OpenStreetMap contributors…" + geoBoundaries | sim (S3 e CLI por bbox) | recomendo |
| HydroSHEDS v2 | rios e bacias a 30 m, Américas | CC BY 4.0 | Lehner et al. 2022 | sim | recomendo |
| HydroRIVERS (v1) | rios do mundo, 15" | licença própria da WWF (comercial ok) | parágrafo longo da WWF (Exhibit B) | sim | com ressalvas |
| GeoNames | gazetteer de lugares | CC BY 4.0 | "GeoNames" + link | API com username; dump vetado no robots | com ressalvas |
| Who's On First | gazetteer com polígonos | mista por registro (inclui ODbL) | "Data from Who's On First. License" | não conferido | com ressalvas |
| LSIB (EUA) | fronteiras internacionais finas | domínio público | "U.S. Department of State, Office of the Geographer and Global Issues" | NÃO CONFERIDO (403) | recomendo |
| Copernicus DEM GLO-30 | relevo global a 30 m | licença livre Copernicus (comercial ok) | "produced using Copernicus WorldDEM-30 © DLR e.V. 2010-2014 and © Airbus…" | conta CDSE | recomendo |
| SRTM / NASADEM | relevo a 30 m, 60°N–56°S | CC0 / sem restrição | "NASA JPL (2020) NASADEM…" | Earthdata | recomendo |
| NASA GIBS / Worldview | imagem diária global | NASA livre; rótulos da Esri, bordas do OSM | "…NASA's Global Imagery Browse Services (GIBS)…" | WMTS sem chave | recomendo (sem rótulos) |
| Sentinel Hub EO Browser | visualizador de satélite | export CC BY 4.0; ToU "internal, personal use" | "Sentinel Hub EO Browser" + coleção | raspagem proibida | com ressalvas |
| Copernicus Browser (CDSE) | Sentinel-2 a 10 m, com data | livre, total e aberto (lei da UE) | "Contains modified Copernicus Sentinel data [Year]" | conta gratuita e cotas | recomendo |
| EOxCloudless 2016 | mosaico Sentinel-2 sem nuvem | CC BY 4.0 | "EOxCloudless https://cloudless.eox.at by EOX IT Services GmbH (… 2016)" | WMTS | com ressalvas |
| EOxCloudless 2018–2025 | idem | CC BY-NC-SA 4.0 | — | — | não serve |
| Esri World Imagery | satélite da Esri | Esri MLA; não comercial sem permissão | "Esri, Vantor, Earthstar Geographics…" | — | não serve |
| Google Earth Studio | voos 3D com imagem do Google | permitido em YouTube educativo monetizado | "Google Earth" + provedores, NA TELA | não (manual; bulk proibido) | com ressalvas |
| Mapbox | mapas-base | vídeo só com direito comprado | "© Mapbox © OpenStreetMap" | proibido em lote | não serve |
| Banco Mundial (WDI) | indicadores do mundo | CC BY 4.0 (licença por indicador) | "World Bank, WDI (CC BY 4.0)" | sim, API sem chave | recomendo |
| FMI | dados macro | NÃO CONFERIDO (403) | — | — | NÃO CONFERIDO |
| OCDE | dados da OCDE | NÃO CONFERIDO (403) | — | — | NÃO CONFERIDO |
| Eurostat | estatística da UE | comercial ok; outros países só não comercial | fonte + DOI | API | com ressalvas |
| UNdata | índice de estatística da ONU | copiar livre citando | "UNdata" + fonte | não conferido | com ressalvas |
| UN Comtrade | comércio exterior | licença NÃO CONFERIDA; redistribuição limitada | — | — | NÃO CONFERIDO |
| FAOSTAT | agricultura e alimentos | CC BY 4.0 (não em promoção comercial) | "FAO. [ano]. … Licence: CC-BY-4.0." | não dito | com ressalvas |
| Our World in Data | séries prontas | CC BY (OWID); terceiros pela licença deles | OWID + fonte original | sim (metadado com licença) | recomendo |
| Census, BLS, BEA, EIA | estatística dos EUA | domínio público | "Source: …" | sim, APIs | recomendo |
| FRED | agregador de séries | por série (rótulo) | fonte + "retrieved from FRED" | API com chave | com ressalvas |
| IEA | energia | NÃO CONFERIDO (403) | — | — | NÃO CONFERIDO |
| ACLED | conflitos | licença corporativa para entidade comercial | na própria arte | raspagem proibida | não serve |
| Global Carbon Project | CO₂ fóssil por país | CC BY 4.0 (Zenodo) | Friedlingstein et al. 2025 / GCP | sim (Zenodo) | recomendo |
| ACNUR | refugiados | NÃO CONFERIDO (403) | — | API existe | NÃO CONFERIDO |
| OMS (`data.who.int`) | saúde | CC BY 4.0 salvo indicação; GHO sem licença | "World Health Organization {YEAR} data.who.int…" | robots bloqueia robôs nomeados | com ressalvas |
| USGS 3DEP | relevo dos EUA (Alasca a 5 m) | sem restrição de uso | "U.S. Geological Survey" | sim | recomendo |
| ETOPO 2022 | relevo global com o mar | CC0 | citação da NCEI | sim | recomendo |
| GEBCO 2026 | batimetria global | domínio público (comercial ok) | "GEBCO Bathymetric Compilation Group 2026…" | sim | recomendo |
| OGL – Canada (NRCan) | dados federais do Canadá | comercial ok | "Contains information licensed under the Open Government Licence – Canada." | sim | recomendo |
| Marine Regions | ZEE e mares territoriais | CC BY desde v11 | "Flanders Marine Institute (2026)…" | não conferido | recomendo |
| ESA WorldCover | cobertura do solo a 10 m | CC BY 4.0 | "© ESA WorldCover project [year] / …" | S3 sem login | recomendo |
| GHSL | área construída e população | CC BY 4.0 | Pesaresi et al. 2024 | não conferido | recomendo |
| WorldPop | população em grade | CC BY 4.0 | WorldPop | não conferido | recomendo |
| Maddison 2023 | PIB histórico | CC BY 4.0 | Bolt e van Zanden 2024 | não conferido | recomendo |
| ONU WPP 2024 | população e projeções | CC BY 3.0 IGO (na publicação) | UN DESA 2024 | não conferido | com ressalvas |

---

## 8. Notas de método
- Leitura pela ferramenta de busca de páginas. PDFs que ela não leu (SALB, TIGER, HydroSHEDS, a licença do
  Copernicus DEM, o aviso legal do Sentinel, os termos da Mapbox e a publicação do WPP) foram extraídos
  literalmente com o PyMuPDF do cache da própria ferramenta.
- Citações de página HTML vêm do leitor da ferramenta; pedi a ele texto literal. Numa leitura, ele inventou uma
  frase: sobre o Worldview, disse que a página citava a Esri e o OSM. Refiz pedindo o literal, a página não
  citava, e o dado foi tirado do metadado oficial das camadas no GitHub da NASA.
- Uma leitura no Zenodo usou `/api/records/…`, caminho que o `robots.txt` veta para robôs, antes de eu conferir o
  robots. A licença foi reconfirmada pela página `/records/17417124`, que o robots permite.
- Nada foi escrito em `C:/projetos/alpha-point`. No clone da pré-v1, fiz só uma busca de texto por "EOX" em
  `C:/projetos/regie-v1/src`, que achou a camada em `src/mapa/perfis.json`. Foi para saber qual camada da EOX
  ela usa. Nada foi editado.
