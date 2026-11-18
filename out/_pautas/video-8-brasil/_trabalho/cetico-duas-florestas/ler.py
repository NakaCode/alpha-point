# Le uma pagina (um pedido, com o User-Agent do canal), guarda o texto em leituras/ e mostra os trechos que casam com os padroes.
# Uso: python -X utf8 -B ler.py <url> <padrao1> [<padrao2> ...]   (padroes em regex, sem diferenca de caixa)
import sys, re, os, html, time, urllib.request, hashlib

UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
url = sys.argv[1]
pads = sys.argv[2:]
req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "en-US,en;q=0.8,pt-BR;q=0.6"})
try:
    with urllib.request.urlopen(req, timeout=60) as r:
        raw = r.read()
        cod = r.status
        ctype = r.headers.get("Content-Type", "")
except urllib.error.HTTPError as e:
    print("HTTP", e.code, url)
    sys.exit(0)
txt = raw.decode("utf-8", "replace")
if "html" in ctype or txt.lstrip().startswith("<"):
    txt = re.sub(r"(?is)<(script|style)[^>]*>.*?</\1>", " ", txt)
    txt = re.sub(r"(?s)<[^>]+>", " ", txt)
    txt = html.unescape(txt)
txt = re.sub(r"[ \t\r\f\v]+", " ", txt)
txt = re.sub(r"\n\s*\n+", "\n", txt)
os.makedirs(os.path.join(AQUI, "leituras"), exist_ok=True)
nome = re.sub(r"[^A-Za-z0-9]+", "-", url.split("//", 1)[-1])[:90] + "-" + hashlib.sha1(url.encode()).hexdigest()[:6] + ".txt"
with open(os.path.join(AQUI, "leituras", nome), "w", encoding="utf-8") as f:
    f.write(f"URL: {url}\nHTTP: {cod}\nLIDO: {time.strftime('%Y-%m-%d %H:%M')}\n\n{txt}")
print(f"HTTP {cod} | {len(txt)} chars | leituras/{nome}")
plano = txt.replace("\n", " ")
for p in pads:
    ms = list(re.finditer(p, plano, re.I))
    print(f"\n### /{p}/ : {len(ms)} ocorrencias")
    for m in ms[:4]:
        a, b = max(0, m.start() - 260), min(len(plano), m.end() + 260)
        print("...", plano[a:b].strip(), "...\n")
