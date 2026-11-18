# Lista as estacoes NOAA CO-OPS de nivel d'agua perto do Niagara (lat 42.8-43.4, lon -79.3 a -78.8). Uso: python -X utf8 -B -I noaa_estacoes.py <stations.json>
import sys, json
d = json.load(open(sys.argv[1], encoding="utf-8"))
for s in d["stations"]:
    if 42.8 <= s["lat"] <= 43.4 and -79.3 <= s["lng"] <= -78.8:
        print(s["id"], s["name"], s.get("state"), s["lat"], s["lng"])
