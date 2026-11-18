# Le o robots.txt de cada host (um pedido por vez, User-Agent do canal), guarda em robots/ e mostra as regras de "User-agent: *".
# Uso: python -X utf8 -B robots.py <host> [<host> ...]
import sys, os, time, urllib.request
UA = "AlphaPointResearch/1.0 (contato.naka@hotmail.com)"
AQUI = os.path.dirname(os.path.abspath(__file__))
os.makedirs(os.path.join(AQUI, "robots"), exist_ok=True)
for h in sys.argv[1:]:
    url = "https://" + h + "/robots.txt"
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=40) as r:
            txt = r.read().decode("utf-8", "replace"); cod = r.status
    except Exception as e:
        print(f"== {h}: ERRO {e}"); time.sleep(1); continue
    open(os.path.join(AQUI, "robots", h + ".txt"), "w", encoding="utf-8").write(txt)
    print(f"== {h}: HTTP {cod}, {len(txt)} chars")
    bloco = False
    for lin in txt.splitlines():
        l = lin.strip()
        if l.lower().startswith("user-agent:"):
            bloco = l.split(":", 1)[1].strip() == "*"
            if bloco: print("  ", l)
        elif bloco and l and not l.startswith("#"):
            print("  ", l)
    time.sleep(1)
