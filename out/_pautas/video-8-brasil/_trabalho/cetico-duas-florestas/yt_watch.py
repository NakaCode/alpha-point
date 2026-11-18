# Le a pagina publica /watch de um video do YouTube (permitida pelo robots.txt), um pedido por vez:
# metadados, a descricao inteira, os capitulos (chapterRenderer e macroMarkers) e a contagem de palavras-chave.
# Guarda o HTML cru fora do git (midia/_pautas/video-8-brasil/cetico-duas-florestas/).
# Uso: python -X utf8 -B yt_watch.py <id> [<id> ...]
import sys, re, json, time, os, urllib.request

AQUI = os.path.dirname(os.path.abspath(__file__))
MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil", "cetico-duas-florestas"))
os.makedirs(MID, exist_ok=True)
KW = ["Atlantic Forest", "Atlantic forest", "Mata Atl", "Atlantic rainforest", "Cerrado", "Caatinga", "rainforest", "Pantanal",
      "dry diagonal", "savanna", "biome", "two rainforests", "Amazon"]


def watch(vid):
    url = "https://www.youtube.com/watch?v=" + vid
    req = urllib.request.Request(url, headers={"Accept-Language": "en-US,en;q=0.8"})
    with urllib.request.urlopen(req, timeout=30) as r:
        html = r.read().decode("utf-8", "replace")
    with open(os.path.join(MID, f"watch-{vid}.html"), "w", encoding="utf-8") as f:
        f.write(html)
    out = {"id": vid}
    m = re.search(r'ytInitialPlayerResponse\s*=\s*(\{.+?\});(?:var|</script>)', html, re.S)
    desc = ""
    if m:
        pr = json.loads(m.group(1))
        vd = pr.get("videoDetails", {})
        mf = pr.get("microformat", {}).get("playerMicroformatRenderer", {})
        desc = vd.get("shortDescription") or ""
        out.update({"titulo": vd.get("title"), "canal": vd.get("author"), "views": vd.get("viewCount"),
                    "duracao_s": vd.get("lengthSeconds"), "publicado": mf.get("publishDate") or mf.get("uploadDate"),
                    "palavras_chave": vd.get("keywords")})
    caps = []
    for t, ms in re.findall(r'"chapterRenderer":\{"title":\{"simpleText":"([^"]+)"\},"timeRangeStartMillis":(\d+)', html):
        if (t, ms) not in caps:
            caps.append((t, ms))
    macro = []
    for t, ts in re.findall(r'"macroMarkersListItemRenderer":\{"title":\{"simpleText":"([^"]+)"\},"timeDescription":\{"simpleText":"([^"]+)"\}', html):
        if (ts, t) not in macro:
            macro.append((ts, t))
    out["capitulos"] = [f"{int(ms)//60000:02d}:{(int(ms)//1000)%60:02d} {t}" for t, ms in caps]
    out["marcadores"] = [f"{ts} {t}" for ts, t in macro]
    out["kw_no_html"] = {k: html.count(k) for k in KW}
    out["kw_na_desc"] = {k: desc.count(k) for k in KW if desc.count(k)}
    print(json.dumps(out, ensure_ascii=False, indent=1))
    print("---- DESCRICAO INTEIRA ----")
    print(desc)
    print("---- FIM ----\n")


for vid in sys.argv[1:]:
    try:
        watch(vid)
    except Exception as e:
        print(json.dumps({"id": vid, "erro": str(e)}))
    time.sleep(2)
