# Conta as ondas de tsunami registradas em Hilo e em Honolulu na base aberta da NOAA (NCEI Global Historical Tsunami Database).
# A API nao filtra pelo nome do lugar: baixa os registros do Havai (country=USA, area=HI; ~11 paginas), um pedido por vez,
# com o User-Agent do canal, e filtra aqui. Uso: python -X utf8 -B ncei_hilo.py
import json, time, urllib.request, urllib.parse
from collections import defaultdict

UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
BASE = "https://www.ngdc.noaa.gov/hazel/hazard-service/api/v1/tsunamis/runups"

itens, pagina = [], 1
while True:
    q = urllib.parse.urlencode({"country": "USA", "area": "HI", "page": pagina})
    req = urllib.request.Request(BASE + "?" + q, headers={"User-Agent": UA, "Accept": "application/json"})
    with urllib.request.urlopen(req, timeout=90) as r:
        d = json.load(r)
    itens += d.get("items", [])
    if pagina >= int(d.get("totalPages", 1)):
        break
    pagina += 1
    time.sleep(2)
json.dump(itens, open("ncei-havai.json", "w", encoding="utf-8"), ensure_ascii=False)
print("registros do Havai:", len(itens))

def resumo(rotulo, filtro):
    it = [x for x in itens if filtro((x.get("locationName") or "").upper())]
    anos = sorted({x.get("year") for x in it if x.get("year")})
    mortes_por_ano = defaultdict(int)
    for x in it:
        mortes_por_ano[x.get("year")] += int(x.get("deaths") or 0)
    altos = [x for x in it if float(x.get("runupHt") or 0) >= 3]
    anos_altos = sorted({x.get("year") for x in altos})
    maxh = max((float(x.get("runupHt") or 0) for x in it), default=0)
    print(f"\n{rotulo}: {len(it)} registros, {len(anos)} anos com onda registrada; {len(anos_altos)} anos com onda >= 3 m: {anos_altos}")
    print("   altura max:", maxh, "m; mortes por ano (>0):", {a: m for a, m in mortes_por_ano.items() if m})
    nomes = sorted({x.get("locationName") for x in it})
    print("   nomes de lugar:", nomes[:12])

resumo("HILO", lambda n: "HILO" in n)
resumo("HONOLULU", lambda n: "HONOLULU" in n)
mortes_ha = defaultdict(int)
for x in itens:
    mortes_ha[x.get("year")] += int(x.get("deaths") or 0)
print("\nHAVAI inteiro, mortes por ano (>0):", {a: m for a, m in sorted(mortes_ha.items(), key=lambda t: t[0] or 0) if m})
