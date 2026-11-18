# Refina o chao de cada lugar: mediana de uma grade de 7 x 7 pontos (de 150 em 150 m, ~900 m de lado) em volta do
# ponto interno do Census, no 3DEP de 1 m (NAVD88). Compara com o lago a 12,5 e 15,5 ft NGVD29 (NAVD88 = NGVD29 - 0,377 m).
# Uso: python -X utf8 -B cidades_grade.py   (le alturas-cidades.tsv; grava cidades-grade.md)
import json, math, os, time, csv, urllib.request, urllib.parse, statistics as st
AQUI = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
FT = 3.280839895
lago = [x/FT - 0.377 for x in (12.5, 15.5)]
cid = list(csv.DictReader(open(os.path.join(AQUI, "alturas-cidades.tsv"), encoding="utf-8"), delimiter="\t"))
pontos = []
for k, c in enumerate(cid):
    la, lo = float(c["lat"]), float(c["lon"])
    for i in range(-3, 4):
        for jj in range(-3, 4):
            pontos.append((k, la + i*150/111320.0, lo + jj*150/(111320.0*math.cos(math.radians(la)))))
URL = "https://elevation.nationalmap.gov/arcgis/rest/services/3DEPElevation/ImageServer/getSamples"
vals = {}
for i0 in range(0, len(pontos), 100):
    lote = pontos[i0:i0+100]
    geom = {"points": [[round(p[2], 7), round(p[1], 7)] for p in lote], "spatialReference": {"wkid": 4326}}
    q = urllib.parse.urlencode({"geometry": json.dumps(geom), "geometryType": "esriGeometryMultipoint",
                                "returnFirstValueOnly": "true", "interpolation": "RSP_NearestNeighbor", "f": "json"})
    resp = None
    for tent in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(URL + "?" + q, headers=UA), timeout=120) as r:
                resp = json.loads(r.read())
            break
        except Exception as e:
            print("  falhou:", e); time.sleep(8)
    if resp is None:
        raise SystemExit("3DEP sem resposta")
    for s in resp.get("samples", []):
        try:
            vals[i0 + int(s["locationId"])] = float(s["value"])
        except Exception:
            pass
    time.sleep(2)
por = {}
for i, p in enumerate(pontos):
    if i in vals and vals[i] > -50:
        por.setdefault(p[0], []).append(vals[i])
out = ["| Lugar | Chao, mediana da grade (ft NAVD88) | % da grade abaixo do lago a 12,5 / 15,5 ft NGVD | Lago a 12,5 / 15,5 ft NGVD acima da mediana (ft) | Crista mais perto (ft NAVD88) | Crista acima da mediana (ft) |",
       "|---|---|---|---|---|---|"]
for k, c in enumerate(cid):
    v = por.get(k, [])
    if not v:
        continue
    m = st.median(v)
    b1 = sum(1 for x in v if x < lago[0])/len(v)*100
    b2 = sum(1 for x in v if x < lago[1])/len(v)*100
    out.append(f"| {c['lugar']} | {m*FT:.1f} | {b1:.0f} % / {b2:.0f} % | {(lago[0]-m)*FT:+.1f} / {(lago[1]-m)*FT:+.1f} | {c['crista_ft']} | {float(c['crista_ft'])-m*FT:.1f} |")
open(os.path.join(AQUI, "cidades-grade.md"), "w", encoding="utf-8").write("\n".join(out) + "\n")
print("\n".join(out))
