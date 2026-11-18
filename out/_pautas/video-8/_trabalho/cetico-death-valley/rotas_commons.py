# Cético death-valley (17/11/2026):
# 1) duas rotas de carro no servidor de demonstração do OSRM (dados do OpenStreetMap), um pedido por vez, com pausa;
# 2) a contagem de arquivos de algumas categorias do Wikimedia Commons (API do MediaWiki, um pedido, User-Agent do canal).
# Uso: python -X utf8 -B rotas_commons.py   (cwd = esta pasta). Grava rotas.json e commons.json.
import json, time, urllib.parse, urllib.request

UA_OSRM = "AlphaPoint-pauta/1.0"
UA_COMMONS = {"User-Agent": "AlphaPoint/1.0 (https://www.youtube.com/@AlphaPoint; contato.naka@hotmail.com) pesquisa-de-pauta"}

P = {  # lon, lat (GNIS, gnis-pontos.json)
    "badwater_parada": (-116.76701, 36.22968),     # "Badwater", populated place 1656428 (o estacionamento/placa)
    "whitney_portal": (-118.22594, 36.58911),      # GNIS 1660174
    "lone_pine": (-118.0629, 36.6060),             # centro de Lone Pine (US 395), aproximado
}
ROTAS = [("badwater_whitney_portal", ["badwater_parada", "whitney_portal"]),
         ("badwater_lone_pine", ["badwater_parada", "lone_pine"])]

saida = {}
for nome, seq in ROTAS:
    coords = ";".join(f"{P[k][0]},{P[k][1]}" for k in seq)
    url = f"https://router.project-osrm.org/route/v1/driving/{coords}?overview=false"
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA_OSRM}), timeout=60) as r:
            d = json.load(r)
        rt = d["routes"][0]
        saida[nome] = {"mi": round(rt["distance"] / 1609.344, 1), "h": round(rt["duration"] / 3600, 2)}
    except Exception as e:
        saida[nome] = {"erro": str(e)}
    print(nome, saida[nome])
    time.sleep(1.5)
json.dump(saida, open("rotas.json", "w", encoding="utf-8"), indent=1)

cats = ["Category:Badwater Basin", "Category:Mount Whitney", "Category:Telescope Peak", "Category:Panamint Range",
        "Category:Death Valley", "Category:Death Valley National Park", "Category:Owens Valley",
        "Category:Lake Manly", "Category:Black Mountains (Inyo County, California)", "Category:Dantes View"]
u = "https://commons.wikimedia.org/w/api.php?" + urllib.parse.urlencode(
    {"action": "query", "prop": "categoryinfo", "titles": "|".join(cats), "format": "json"})
with urllib.request.urlopen(urllib.request.Request(u, headers=UA_COMMONS), timeout=60) as r:
    d = json.load(r)
res = {p["title"]: p.get("categoryinfo", "nao existe") for p in d["query"]["pages"].values()}
json.dump(res, open("commons.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for k, v in res.items():
    print(k, v)
