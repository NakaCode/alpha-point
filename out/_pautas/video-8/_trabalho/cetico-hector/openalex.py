# Busca titulo, DOI, ano, acesso aberto e o resumo (reconstruido do indice invertido) na API da OpenAlex (CC0), um pedido por vez.
# Uso: python -I -X utf8 -B openalex.py "<busca 1>" ["<busca 2>" ...]
import sys, json, time, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
for q in sys.argv[1:]:
    url = "https://api.openalex.org/works?" + urllib.parse.urlencode({"search": q, "per-page": 3})
    d = json.loads(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=30).read())
    print("=== busca:", q)
    for w in d.get("results", []):
        inv = w.get("abstract_inverted_index") or {}
        pos = sorted((p, t) for t, ps in inv.items() for p in ps)
        resumo = " ".join(t for _, t in pos)
        oa = w.get("open_access", {})
        print("-", w.get("publication_year"), "|", w.get("title"), "|", w.get("doi"), "| OA:", oa.get("is_oa"), oa.get("oa_url"))
        print("  RESUMO:", resumo[:2500])
    time.sleep(1.2)
