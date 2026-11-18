# Cético mississippi-divisas (17/11/2026): junta as faces (medir_pedacos.py) e os blocos do Censo 2020 (medir_blocos.py),
# e dá nome às 20 maiores pelo condado e pela subdivisão do Censo (TIGERweb, camadas 82 e 20, ponto interno; um pedido por vez).
# Saída: medida-resumo.md (a tabela que vai ao laudo) e medida.json.
import json, os, time, urllib.request, urllib.parse, collections
AQUI = os.path.dirname(os.path.abspath(__file__))
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
BASE = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/%d/query"
ped = {d["i"]: d for d in json.load(open(os.path.join(AQUI, "pedacos.json"), encoding="utf-8"))}
blo = [json.loads(l) for l in open(os.path.join(AQUI, "blocos-faces.jsonl"), encoding="utf-8")]
M2 = 2.589988
pecas = []
for b in blo:
    d = ped[b["i"]]
    pecas.append({"i": b["i"], "uf": b["uf"], "area_face_km2": b["area_face_km2"], "terra_km2": b["terra_km2"], "agua_km2": b["agua_km2"],
                  "pop2020": b["pop2020"], "moradias2020": b["moradias2020"], "lat": d["lat"], "lon": d["lon"], "largura_media_m": d["largura_media_m"]})
pecas.sort(key=lambda p: -p["terra_km2"])
def nome(lat, lon):
    out = {}
    for lay, chave in ((82, "condado"), (20, "subdivisao")):
        p = {"geometry": f"{lon},{lat}", "geometryType": "esriGeometryPoint", "inSR": "4326", "spatialRel": "esriSpatialRelIntersects",
             "outFields": "NAME,STATE", "returnGeometry": "false", "f": "json"}
        try:
            with urllib.request.urlopen(urllib.request.Request(BASE % lay, data=urllib.parse.urlencode(p).encode(), headers=UA), timeout=60) as r:
                fs = json.loads(r.read()).get("features", [])
            out[chave] = "; ".join(f["attributes"]["NAME"] for f in fs)
        except Exception as e:
            out[chave] = "erro: %s" % e
        time.sleep(0.7)
    return out
cache_p = os.path.join(AQUI, "nomes-cache.json")
cache = json.load(open(cache_p, encoding="utf-8")) if os.path.exists(cache_p) else {}
for p in pecas[:20]:
    k = "%s-%s" % (p["i"], p["uf"])
    if k not in cache:
        cache[k] = nome(p["lat"], p["lon"])
    p.update(cache[k])
json.dump(cache, open(cache_p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
L = []
L.append("# A medida preliminar: os pedaços de estado do outro lado do leito de hoje do Mississippi\n")
L.append("Faces fechadas entre a divisa do Censo 2020 e a linha do canal do OSM (relação 1756854, main_stream), com a terra, a água e a gente")
L.append("dos blocos do Censo 2020 cujo ponto interno cai dentro da face. Feito em 17/11/2026. Ver `medir_pedacos.py` e `medir_blocos.py`.\n")
for lim, rot in ((0.1, "≥ 0,1 km² de terra (~25 acres)"), (1.0, "≥ 1 km² de terra"), (2.59, "≥ 1 mi² de terra"), (10.0, "≥ 10 km² de terra")):
    s = [p for p in pecas if p["terra_km2"] >= lim]
    L.append("- %s: **%d pedaços**, %.0f km² de terra (**%.0f mi²**), %d moradores em 2020, %d moradias." % (
        rot, len(s), sum(p["terra_km2"] for p in s), sum(p["terra_km2"] for p in s) / M2, sum(p["pop2020"] for p in s), sum(p["moradias2020"] for p in s)))
tot_face = sum(p["area_face_km2"] for p in pecas)
L.append("- Todas as faces medidas (as de 0,5 km² ou mais de face): %d; face %.0f km², terra %.0f km² (%.0f mi²), água %.0f km², %d moradores.\n" % (
    len(pecas), tot_face, sum(p["terra_km2"] for p in pecas), sum(p["terra_km2"] for p in pecas) / M2, sum(p["agua_km2"] for p in pecas), sum(p["pop2020"] for p in pecas)))
por = collections.defaultdict(lambda: [0, 0.0, 0])
for p in pecas:
    if p["terra_km2"] >= 0.1:
        por[p["uf"]][0] += 1; por[p["uf"]][1] += p["terra_km2"]; por[p["uf"]][2] += p["pop2020"]
L.append("Por estado (pedaços com ≥ 0,1 km² de terra), o dono do pedaço:\n")
L.append("| Estado | Pedaços | Terra (km²) | Terra (mi²) | Moradores 2020 |")
L.append("|---|---|---|---|---|")
for uf, v in sorted(por.items(), key=lambda t: -t[1][1]):
    L.append("| %s | %d | %.1f | %.1f | %d |" % (uf, v[0], v[1], v[1] / M2, v[2]))
L.append("\nOs 20 maiores pela terra:\n")
L.append("| # | Dono | Terra km² (mi²) | Água km² | Moradores | Condado (pelo ponto) | Subdivisão do Censo | Lat, lon |")
L.append("|---|---|---|---|---|---|---|---|")
for n, p in enumerate(pecas[:20], 1):
    L.append("| %d | %s | %.1f (%.1f) | %.1f | %d | %s | %s | %.4f, %.4f |" % (n, p["uf"], p["terra_km2"], p["terra_km2"] / M2, p["agua_km2"], p["pop2020"],
             p.get("condado", ""), p.get("subdivisao", ""), p["lat"], p["lon"]))
open(os.path.join(AQUI, "medida-resumo.md"), "w", encoding="utf-8").write("\n".join(L) + "\n")
json.dump(pecas, open(os.path.join(AQUI, "medida.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print("\n".join(L))
