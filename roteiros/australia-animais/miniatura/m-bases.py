"""As bases das 2 miniaturas da pauta do vídeo 8, a Austrália (`australia-animais`, 18/11/2026). Pedidos de rede, um por vez, com o User-Agent
do canal (bases.py, a cópia desta pasta); os arquivos vão para roteiros/australia-animais/miniatura/_bases/ (fora do git), com o .json ao lado,
e cada pedido vai ao _bases/pedidos.jsonl. Nada que já está no disco se pede de novo.

    python -X utf8 -B -P roteiros/australia-animais/miniatura/m-bases.py        (da raiz do canal)

O robots.txt de cada host se lê antes do primeiro pedido a ele (bases.robots()).
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import bases as B

ETAPA = os.environ.get("MINI_ETAPA", "tudo")

# 1. a página dos arquivos de divisas do ABS (ASGS Edition 3, 2021–2026): os links dos zips e a licença
ABS_DBF = ("https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs-edition-3/jul2021-jun2026/"
           "access-and-downloads/digital-boundary-files")
if ETAPA in ("tudo", "paginas"):
    B.pagina(ABS_DBF, "abs-asgs3-digital-boundary-files.html")
    B.pagina("https://www.abs.gov.au/website-privacy-copyright-and-disclaimer", "abs-copyright.html")

# 2. onde está o IBRA 7 (o Channel Country). O catálogo do data.gov.au foi o primeiro caminho, mas o robots.txt dele diz "Disallow: /"
# (lido às 16:16:27Z de 18/11; nenhum outro pedido saiu para lá). O WebSearch (só pista) apontou o IBRA 7.1 (DCCEEW, 2025) e o serviço
# ArcGIS do DCCEEW em gis.environment.gov.au (IBRA7_Regions/FeatureServer/0): a descrição da camada (com a licença, se houver)
IBRA_FS = "https://gis.environment.gov.au/gispubmap/rest/services/ogc_services/IBRA7_Regions/FeatureServer/0"
if ETAPA in ("tudo", "busca"):
    B.pagina(IBRA_FS + "?f=json", "ibra7-camada.json")
    B.pagina("https://www.naturalearthdata.com/about/terms-of-use/", "naturalearth-terms-of-use.html")

# 3. os arquivos: as divisas do ABS (estados e Grande Sydney, GDA2020), o Channel Country do IBRA 7.1 (só a região, em lon/lat WGS 84), os
# metadados do IBRA (a licença) e os rios da Austrália do Natural Earth (o suplemento australiano, no commit da pré-v1)
ABS_ZIP = ("https://www.abs.gov.au/statistics/standards/australian-statistical-geography-standard-asgs/edition-3-july-2021-june-2026/"
           "access-and-downloads/digital-boundary-files/")
ABS_LIC = ("CC BY 4.0: a página dos arquivos diz 'Access constraints: Copyright Commonwealth of Australia administered by the ABS. Unless "
           "otherwise noted, content is licensed under a Creative Commons Attribution 4.0 International licence' (_bases/abs-asgs3-digital-"
           "boundary-files.html, 18/11/2026). Crédito: Australian Bureau of Statistics (ASGS Edition 3, 2021)")
NE_COMMIT = "ca96624a56bd078437bca8184e78163e5039ad19"     # o mesmo do acervo da pré-v1 (C:/projetos/regie-v1/acervo/geojson/manifest.json)
NE_LIC = ("domínio público: 'All versions of Natural Earth raster + vector map data found on this website are in the public domain' "
          "(naturalearthdata.com/about/terms-of-use/, lida em 18/11/2026; _bases/naturalearth-terms-of-use.html)")
if ETAPA in ("tudo", "arquivos"):
    # (a 1ª tentativa dos metadados, às 16:18:15Z, deu 504 do servidor: vão para o fim, numa tentativa só)
    B.baixar_arquivo(IBRA_FS + "/query?" + B.urllib.parse.urlencode({
        "where": "REG_NAME_7='Channel Country'", "outFields": "*", "outSR": "4326", "f": "geojson"}),
        "IBRA 7.1 (DCCEEW): a licença está nos metadados (_bases/ibra7-metadados.xml)",
        "IBRA 7.1, região Channel Country (DCCEEW, serviço ArcGIS IBRA7_Regions/FeatureServer/0), GeoJSON em WGS 84",
        nome="ibra7-channel-country.geojson")
    B.baixar_arquivo(ABS_ZIP + "STE_2021_AUST_SHP_GDA2020.zip", ABS_LIC, "ABS ASGS Ed. 3, States and Territories 2021 (STE), shapefile GDA2020")
    B.baixar_arquivo(ABS_ZIP + "GCCSA_2021_AUST_SHP_GDA2020.zip", ABS_LIC,
                     "ABS ASGS Ed. 3, Greater Capital City Statistical Areas 2021 (GCCSA), shapefile GDA2020")
    B.baixar_arquivo("https://raw.githubusercontent.com/nvkelso/natural-earth-vector/%s/geojson/ne_10m_rivers_australia.geojson" % NE_COMMIT,
                     NE_LIC, "Natural Earth 1:10m, rios da Austrália (o suplemento regional, ne_10m_rivers_australia)")
    # (os metadados do IBRA, depois do 504: a 2ª tentativa)
    if not os.path.exists(os.path.join(B.BASES, "ibra7-metadados.xml")):
        r, b = B.pedir(IBRA_FS + "/metadata", aceitar=(500, 502, 503, 504))
        if r is None:
            print("os metadados do IBRA deram", b, "de novo: a licença se lê noutro lugar")
        else:
            open(os.path.join(B.BASES, "ibra7-metadados.xml"), "wb").write(b)
            B.gravar_json(os.path.join(B.BASES, "ibra7-metadados.xml"),
                          {"sha256": B.sha256_bytes(b), "bytes": len(b), "procedencia": {
                              "url": IBRA_FS + "/metadata", "baixado_em": B.agora(), "user_agent": "o do canal (contato do canal.json)",
                              "gerado_por": "roteiros/australia-animais/miniatura/m-bases.py"}})

# 4. o relevo e o mar, da NASA GIBS (como no Grand Canyon e nas duas florestas): o cinza do ASTER GDEM, o índice de cor da altitude (o
# colormap já está em out/_pautas/video-8/miniaturas/_bases/) e a Blue Marble com batimetria. O recorte (90 a 172 E, 48 a 3 S) tem folga em
# volta do quadro (o continente inteiro, ~95 a ~167 E), para acertar o enquadramento sem pedir de novo. A GIBS não é site novo: o robots.txt
# dela deu 404 em 17/11/2026 (out/rio-columbia/_tmp/miniatura/gibs-baixar.py)
LON0, LAT0, LON1, LAT1, LARG = 90.0, -48.0, 172.0, -3.0, 5600
if ETAPA in ("tudo", "gibs"):
    B.gibs_relevo("au-aster-relevo", LON0, LAT0, LON1, LAT1, LARG)
    B.gibs_elevacao("au-aster-altitude", LON0, LAT0, LON1, LAT1, LARG)
    B.gibs_bluemarble("au-bluemarble", LON0, LAT0, LON1, LAT1, LARG)

# 5. (a mudança da Sala, 18/11, depois do cético: a m2 passa a ser "NO VIPERS", com a Austrália e o sudeste da Ásia no quadro) o relevo e o mar
# num recorte maior, que vai ao norte do equador: 72 a 178 E, 48 S a 14 N. Os mesmos três produtos da GIBS
if ETAPA in ("tudo", "gibs-asia"):
    B.gibs_relevo("asia-aster-relevo", 72.0, -48.0, 178.0, 14.0, 5600)
    B.gibs_elevacao("asia-aster-altitude", 72.0, -48.0, 178.0, 14.0, 5600)
    B.gibs_bluemarble("asia-bluemarble", 72.0, -48.0, 178.0, 14.0, 5600)
