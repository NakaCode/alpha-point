# Baixa geometrias abertas (um pedido por vez, User-Agent do canal): o condado de Teton (TIGERweb, Census) e os limites
# do NPS (Land Resources Division) de Yellowstone, Grand Teton e da John D. Rockefeller Jr. Memorial Parkway.
import json, time, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
def get(url, params, arq):
    u = url + "?" + urllib.parse.urlencode(params)
    with urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=120) as r:
        open(arq, "wb").write(r.read())
    d = json.load(open(arq, encoding="utf-8"))
    print(arq, len(d.get("features", [])), "feicoes", [f["properties"] for f in d.get("features", [])][:3] if d.get("features") else d)
    time.sleep(2)
get("https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/State_County/MapServer/1/query",
    {"where": "GEOID='56039'", "outFields": "GEOID,NAME,AREALAND,AREAWATER", "outSR": "4326", "f": "geojson"}, "teton_condado.geojson")
get("https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Land_Resources_Division_Boundary_and_Tract_Data_Service/FeatureServer/2/query",
    {"where": "UNIT_CODE IN ('YELL','GRTE','JODR')", "outFields": "*", "outSR": "4326", "f": "geojson"}, "nps_limites.geojson")
