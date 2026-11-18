# O ranking da neve normal anual (1991-2020) de todas as estacoes das normais da NOAA, lido do pacote inteiro (sem extrair).
# Uso: python -X utf8 -B -I ranking_neve.py <normais-anuais-1991-2020.tar.gz> <saida.csv>
import csv, io, sys, tarfile

tgz, saida = sys.argv[1], sys.argv[2]
linhas = []
with tarfile.open(tgz, "r:gz") as t:
    for m in t:
        if not m.isfile() or not m.name.endswith(".csv"):
            continue
        txt = t.extractfile(m).read().decode("utf-8", "replace")
        rows = list(csv.DictReader(io.StringIO(txt)))
        if not rows:
            continue
        r = rows[0]
        v = (r.get("ANN-SNOW-NORMAL") or "").strip()
        if not v:
            continue
        try:
            val = float(v)
        except ValueError:
            continue
        linhas.append({
            "id": r.get("STATION", "").strip(), "nome": r.get("NAME", "").strip(),
            "lat": float(r.get("LATITUDE")), "lon": float(r.get("LONGITUDE")), "elev_m": float(r.get("ELEVATION") or "nan"),
            "neve_in": val, "comp": (r.get("comp_flag_ANN-SNOW-NORMAL") or "").strip(),
            "anos": (r.get("years_ANN-SNOW-NORMAL") or "").strip(),
            "djf_in": (r.get("DJF-SNOW-NORMAL") or "").strip(),
            "dias_ge10in": (r.get("ANN-SNOW-AVGNDS-GE100TI") or "").strip(),
        })
linhas.sort(key=lambda x: -x["neve_in"])
with open(saida, "w", newline="", encoding="utf-8") as f:
    w = csv.DictWriter(f, fieldnames=list(linhas[0].keys()))
    w.writeheader(); w.writerows(linhas)

def mostra(titulo, lst, n):
    print(f"\n== {titulo} ({len(lst)} estacoes)")
    for i, x in enumerate(lst[:n], 1):
        print(f"{i:>3} {x['neve_in']:>6.1f} in  {x['nome']:<38} {x['id']}  lat {x['lat']:.3f} lon {x['lon']:.3f} elev {x['elev_m']*3.28084:>6.0f} ft  comp={x['comp']} anos={x['anos']} dias>=10in={x['dias_ge10in']}")

print("Estacoes com ANN-SNOW-NORMAL:", len(linhas))
mostra("Todas", linhas, 40)
lest100 = [x for x in linhas if x["lon"] > -100 and x["lat"] < 50]
mostra("Leste do meridiano 100 W (sem Alasca)", lest100, 25)
lest105 = [x for x in linhas if x["lon"] > -105 and x["lat"] < 50]
mostra("Leste do meridiano 105 W (sem Alasca)", lest105, 10)
ny = [x for x in linhas if x["nome"].endswith(", NY US")]
mostra("Nova York", ny, 20)
std = [x for x in lest100 if x["comp"] in ("C", "S")]
mostra("Leste de 100 W, so completude C ou S", std, 15)
# Onde fica Hooker entre todas, e quantas estacoes no pais (fora do Alasca e ilhas) estao acima
h = next(x for x in linhas if x["id"] == "USC00303961")
acima = [x for x in linhas if x["neve_in"] > h["neve_in"]]
print(f"\nHooker 12 NNW: {h['neve_in']} in; {len(acima)} estacoes acima no pais inteiro")
print("Acima de Hooker, por estado/territorio:")
from collections import Counter
c = Counter(x["nome"].split(",")[-1].strip() for x in acima)
for k, v in c.most_common():
    print(f"  {k}: {v}")
for alvo in ("USW00014755", "USW00026451", "USW00014733", "USW00014771", "USW00026442", "USW00094846", "USW00014739", "USW00094728", "USW00014607", "USW00014858", "USW00026411", "USW00025309"):
    x = next((y for y in linhas if y["id"] == alvo), None)
    print(alvo, (f"{x['neve_in']} in {x['nome']} comp={x['comp']} anos={x['anos']}" if x else "sem normal de neve"))
