# Lista um diretorio publico (indice HTML) ou le uma pagina, um pedido por vez, com o User-Agent do canal.
# Uso: python -X utf8 -B listar.py <url> [salvar_em]
import sys, re, html, urllib.request, urllib.error

UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
url = sys.argv[1]
req = urllib.request.Request(url, headers={"User-Agent": UA})
try:
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read()
        print("HTTP", r.status, r.headers.get("Content-Type"), len(raw), "bytes")
except urllib.error.HTTPError as e:
    print("HTTP", e.code, url)
    sys.exit(0)
if len(sys.argv) > 2:
    with open(sys.argv[2], "wb") as f:
        f.write(raw)
    print("salvo em", sys.argv[2])
txt = raw.decode("utf-8", "replace")
links = re.findall(r'href="([^"?][^"]*)"[^>]*>([^<]*)</a>\s*([^\n<]*)', txt)
if links:
    for h, t, resto in links:
        print(html.unescape(h), "|", t.strip(), "|", re.sub(r"\s+", " ", resto).strip())
else:
    print(re.sub(r"\s+", " ", re.sub(r"(?s)<[^>]+>", " ", txt))[:3000])
