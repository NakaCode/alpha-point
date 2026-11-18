# Le os capitulos (se houver) de uma pagina /watch publica do YouTube. Um pedido. Uso: python -X utf8 -B yt_capitulos.py <id>
import sys, re, json, urllib.request
vid = sys.argv[1]
req = urllib.request.Request("https://www.youtube.com/watch?v=" + vid, headers={"Accept-Language": "en-US,en;q=0.8"})
html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "replace")
tit = re.findall(r'"chapterRenderer":\{"title":\{"simpleText":"([^"]+)"\},"timeRangeStartMillis":(\d+)', html)
vistos = []
for t, ms in tit:
    if (t, ms) not in vistos:
        vistos.append((t, ms))
for t, ms in vistos:
    s = int(ms) // 1000
    print(f"{s//60:02d}:{s%60:02d}  {t}")
print("capitulos:", len(vistos))
for kw in ["need to reside", "eligible resident", "Canmore", "lease", "housing"]:
    print(kw, html.count(kw))
