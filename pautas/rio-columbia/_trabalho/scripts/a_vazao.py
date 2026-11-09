"""Médias anuais de vazão: Water Survey of Canada (API aberta do ECCC) e USGS (waterservices).

Uso: python -I -X utf8 -B a_vazao.py wsc <estacao> | usgs <site> | wscest <estacao>

Um pedido por vez, com o User-Agent do canal. Grava o bruto em BAIXADOS/<nome>.json e imprime o resumo.
"""
import json
import os
import statistics
import sys
import urllib.error
import urllib.request

BAIXADOS = os.environ.get("BAIXADOS") or sys.exit("defina BAIXADOS")
UA = "AlphaPoint-pauta/1.0 (canal Alpha Point; contato.naka@hotmail.com)"


def pegar(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=90) as r:
            return r.status, r.read()
    except urllib.error.HTTPError as e:
        print(f"HTTP {e.code} em {url}: paro (não se contorna)")
        sys.exit(1)
    except Exception as e:
        print("falhou:", type(e).__name__, e)
        sys.exit(1)


def main():
    modo, alvo = sys.argv[1], sys.argv[2]
    os.makedirs(BAIXADOS, exist_ok=True)
    if modo == "wscest":
        url = f"https://api.weather.gc.ca/collections/hydrometric-stations/items?STATION_NUMBER={alvo}&f=json"
        st, corpo = pegar(url)
        d = json.loads(corpo)
        open(os.path.join(BAIXADOS, f"wsc-estacao-{alvo}.json"), "wb").write(corpo)
        for f in d.get("features", []):
            print(json.dumps(f.get("properties"), ensure_ascii=False, indent=1))
            print(f.get("geometry"))
    elif modo == "wsc":
        url = f"https://api.weather.gc.ca/collections/hydrometric-annual-statistics/items?STATION_NUMBER={alvo}&f=json&limit=500"
        st, corpo = pegar(url)
        d = json.loads(corpo)
        open(os.path.join(BAIXADOS, f"wsc-anual-{alvo}.json"), "wb").write(corpo)
        feats = d.get("features", [])
        print("registros:", len(feats), "numberMatched:", d.get("numberMatched"))
        if feats:
            print("propriedades:", list(feats[0]["properties"].keys()))
            print(json.dumps(feats[0]["properties"], ensure_ascii=False))
    elif modo == "usgs":
        url = (
            "https://waterservices.usgs.gov/nwis/stat/?format=rdb&sites=%s&statReportType=annual"
            "&statTypeCd=mean&parameterCd=00060" % alvo
        )
        st, corpo = pegar(url)
        open(os.path.join(BAIXADOS, f"usgs-anual-{alvo}.rdb"), "wb").write(corpo)
        linhas = [l for l in corpo.decode("utf-8", "replace").splitlines() if l and not l.startswith("#")]
        print("linhas de dados:", len(linhas) - 2)
        print("\n".join(linhas[:3]))
        vals = []
        for l in linhas[2:]:
            c = l.split("\t")
            try:
                vals.append((int(c[5]), float(c[6])))
            except Exception:
                pass
        if vals:
            print("anos:", vals[0][0], "a", vals[-1][0], "n=", len(vals))
            print("média das médias anuais (cfs):", round(statistics.mean(v for _, v in vals), 1))
    else:
        sys.exit("modo?")


main()
