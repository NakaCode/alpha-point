# Lista os campos do Natural Earth 10m admin-1 (cache da maquina) para os paises que importam a medida.
# Uso: python -X utf8 -B ne_props.py
import json, os, collections

NE = os.path.expanduser("~/.regie/geo/natural-earth/ne_10m_admin_1_states_provinces.geojson")
d = json.load(open(NE, encoding="utf-8"))
print("features", len(d["features"]))
print("campos", sorted(d["features"][0]["properties"].keys())[:80])
alvo = {"KIR", "USA", "IDN", "FSM", "MHL", "SLB", "PNG", "FJI", "NZL", "TKL", "CHL", "AUS", "NFK", "FRA", "PYF", "NCL", "WLF", "TUV", "COK", "NIU", "UMI", "GUM", "ASM", "MNP", "PCN", "PHL", "JPN"}
c = collections.Counter()
for f in d["features"]:
    p = f["properties"]
    if p.get("adm0_a3") in alvo:
        c[(p.get("adm0_a3"), p.get("sov_a3"), p.get("admin"))] += 1
for k, v in sorted(c.items()):
    print(k, v)
for f in d["features"]:
    p = f["properties"]
    if p.get("adm0_a3") == "KIR":
        print("KIR:", p.get("name"), p.get("type_en"))
