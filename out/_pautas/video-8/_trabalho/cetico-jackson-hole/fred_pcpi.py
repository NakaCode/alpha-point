# Le series de renda per capita (PCPI) de condados no FRED (dados da BEA), um pedido por vez, 2 s entre pedidos.
# Uso: python -X utf8 -B fred_pcpi.py <SERIE> [<SERIE> ...]   ex.: PCPI56039
import sys, time, urllib.request
UA = {"User-Agent": "AlphaPoint-pesquisa/1.0 (contato.naka@hotmail.com)"}
for s in sys.argv[1:]:
    url = "https://fred.stlouisfed.org/graph/fredgraph.csv?id=" + s
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
            linhas = r.read().decode("utf-8").strip().splitlines()
        print(s, "|", " ; ".join(linhas[-3:]))
    except Exception as e:
        print(s, "| erro:", e)
    time.sleep(2)
