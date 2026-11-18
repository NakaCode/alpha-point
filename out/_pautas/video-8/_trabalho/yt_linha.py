# Le a saida JSON (uma por linha) do yt_meta.py e imprime uma linha curta por video.
import sys, json
for l in open(sys.argv[1], encoding="utf-8"):
    l = l.strip()
    if not l:
        continue
    try:
        d = json.loads(l)
    except Exception:
        print(l); continue
    dur = int(d.get("duracao_s") or 0)
    print((d.get("publicado") or "?")[:10], "|", d.get("views"), "|", d.get("canal"), "|", d.get("inscritos"), "|", d.get("titulo"), "|", f"{dur//60}:{dur%60:02d}", d.get("erro", ""))
