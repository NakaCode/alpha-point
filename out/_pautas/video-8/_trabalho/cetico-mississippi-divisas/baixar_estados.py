# Cético mississippi-divisas (17/11/2026): baixa do TIGERweb (Census 2020, camada 80 "States") os 10 estados do Mississippi,
# em WGS84, em resolução cheia (sem maxAllowableOffset; o teste_resolucao.py mostrou que o offset de 3 m tirava 3/4 dos vértices). Um pedido por vez.
# Saída (bruto, fora do git): midia/_pautas/video-8/cetico-mississippi-divisas/estados-<UF>.json
import json, os, time, urllib.request, urllib.parse
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
URL = "https://tigerweb.geo.census.gov/arcgis/rest/services/TIGERweb/tigerWMS_Census2020/MapServer/80/query"
RAIZ = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", ".."))
SAIDA = os.path.join(RAIZ, "midia", "_pautas", "video-8", "cetico-mississippi-divisas")
os.makedirs(SAIDA, exist_ok=True)
UFS = ["MN", "WI", "IA", "IL", "MO", "KY", "TN", "AR", "MS", "LA"]
for uf in UFS:
    p = {"where": f"STUSAB='{uf}'", "outFields": "STUSAB,NAME,AREALAND,AREAWATER", "returnGeometry": "true",
         "outSR": "4326", "geometryPrecision": "7", "f": "json"}
    dados = urllib.parse.urlencode(p).encode()
    req = urllib.request.Request(URL, data=dados, headers=UA)
    with urllib.request.urlopen(req, timeout=300) as r:
        corpo = r.read()
    alvo = os.path.join(SAIDA, f"estados-{uf}.json")
    with open(alvo, "wb") as f:
        f.write(corpo)
    j = json.loads(corpo)
    fs = j.get("features", [])
    nv = sum(len(a) for f in fs for a in f["geometry"]["rings"]) if fs else 0
    print(uf, len(corpo), "bytes;", len(fs), "feição;", nv, "vértices;", j.get("error"))
    time.sleep(2)
