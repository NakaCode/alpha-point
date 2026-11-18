# Conta, por estado, os corpos d'agua do NHD (camada "Waterbody - Small Scale", resolucao media 1:100k, servico da USGS National Map)
# de 10 acres ou mais, agrupados pelo tipo (FTYPE: LakePond, Reservoir, Playa, SwampMarsh...).
# Um pedido por estado, um por vez, com o User-Agent do canal. So estatistica (contagem e soma de area), sem baixar geometria.
# A geometria do estado vem do Census (cartographic boundary 1:20M, 2024), simplificada.
# Limite conhecido: o filtro e "intersects", entao um lago na divisa conta nos dois estados; o FTYPE do NHD nao e uma
# classificacao de origem confiavel (muita represa pequena esta como LakePond; LAGOS-US RESERVOIR, Rodriguez et al. 2023).
# Uso: python -X utf8 -B nhd_por_estado.py <dir_do_shapefile_de_estados> <saida.tsv> UF [UF ...]
import sys, json, time, urllib.request, urllib.parse
import shapefile
from shapely.geometry import shape, mapping

UA = "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"
URL = "https://hydro.nationalmap.gov/arcgis/rest/services/nhd/MapServer/10/query"
ACRES10_KM2 = 0.0404686
import os
GRUPO = os.environ.get("NHD_GRUPO", "FTYPE")  # FTYPE (padrao) ou FCODE

def estados(dirshp):
    r = shapefile.Reader(dirshp + "/cb_2024_us_state_20m")
    campos = [f[0] for f in r.fields[1:]]
    out = {}
    for sr in r.shapeRecords():
        rec = dict(zip(campos, sr.record))
        out[rec["STUSPS"]] = shape(sr.shape.__geo_interface__)
    return out

def esri_poly(geom, tol=float(os.environ.get("NHD_TOL", "0.01"))):
    g = geom.simplify(tol, preserve_topology=True)
    polys = [g] if g.geom_type == "Polygon" else list(g.geoms)
    rings = []
    for p in polys:
        if p.area < 0.002:
            continue
        ext = list(p.exterior.coords)
        rings.append([[round(x, 4), round(y, 4)] for x, y in ext[::-1]])  # Esri: externo no sentido horario
        for it in p.interiors:
            rings.append([[round(x, 4), round(y, 4)] for x, y in list(it.coords)])
    return {"rings": rings, "spatialReference": {"wkid": 4326}}

def consulta(geo):
    params = {
        "where": f"AREASQKM >= {ACRES10_KM2}",
        "geometry": json.dumps(geo),
        "geometryType": "esriGeometryPolygon",
        "inSR": "4326",
        "spatialRel": "esriSpatialRelIntersects",
        "outStatistics": json.dumps([
            {"statisticType": "count", "onStatisticField": "OBJECTID", "outStatisticFieldName": "n"},
            {"statisticType": "sum", "onStatisticField": "AREASQKM", "outStatisticFieldName": "km2"}]),
        "groupByFieldsForStatistics": GRUPO,
        "returnGeometry": "false",
        "f": "json",
    }
    data = urllib.parse.urlencode(params).encode()
    req = urllib.request.Request(URL, data=data, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=180) as r:
        return json.loads(r.read().decode("utf-8"))

def main():
    dirshp, saida, ufs = sys.argv[1], sys.argv[2], sys.argv[3:]
    est = estados(dirshp)
    linhas = ["uf\tftype\tn\tkm2"]
    for uf in ufs:
        try:
            res = consulta(esri_poly(est[uf]))
        except Exception as e:
            print(uf, "ERRO", e, flush=True)
            linhas.append(f"{uf}\tERRO\t\t{e}")
            time.sleep(3)
            continue
        if "error" in res:
            print(uf, "ERRO", res["error"], flush=True)
            linhas.append(f"{uf}\tERRO\t\t{res['error'].get('message')}")
        for f in res.get("features", []):
            a = f["attributes"]
            linhas.append(f"{uf}\t{a.get(GRUPO)}\t{a.get('n')}\t{round(a.get('km2') or 0, 1)}")
            print(uf, a.get(GRUPO), a.get("n"), round(a.get("km2") or 0, 1), flush=True)
        time.sleep(2)
    with open(saida, "w", encoding="utf-8") as f:
        f.write("\n".join(linhas) + "\n")

if __name__ == "__main__":
    main()
