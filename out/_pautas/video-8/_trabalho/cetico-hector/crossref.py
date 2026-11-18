# Busca titulo, DOI, ano e resumo (quando a editora o deposita) na API publica da Crossref, um pedido por vez.
# Uso: python -I -X utf8 -B crossref.py "<busca 1>" ["<busca 2>" ...]
import sys, json, time, re, urllib.request, urllib.parse
UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
for q in sys.argv[1:]:
    url = "https://api.crossref.org/works?" + urllib.parse.urlencode({"query.bibliographic": q, "rows": 2, "select": "DOI,title,issued,abstract,container-title,author"})
    d = json.loads(urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=40).read())
    print("=== busca:", q)
    for w in d["message"]["items"]:
        ab = re.sub(r"<[^>]+>", " ", w.get("abstract", "") or "")
        ab = re.sub(r"\s+", " ", ab).strip()
        au = ", ".join((a.get("family") or "") for a in (w.get("author") or [])[:4])
        print("-", (w.get("issued", {}).get("date-parts") or [[None]])[0][0], "|", (w.get("title") or [""])[0], "|", au, "|", (w.get("container-title") or [""])[0], "| doi:", w.get("DOI"))
        print("  RESUMO:", ab[:3000] or "(sem resumo depositado)")
    time.sleep(1.5)
