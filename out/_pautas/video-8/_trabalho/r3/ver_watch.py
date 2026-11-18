import json, sys
for f in sys.argv[1:]:
    for line in open(f, encoding="utf-8"):
        line=line.strip()
        if not line: continue
        try: d=json.loads(line)
        except Exception: print("??", line[:120]); continue
        if "erro" in d and "titulo" not in d:
            print(d["id"], "ERRO", d["erro"]); continue
        print(f'{d["id"]}\t{(d.get("publicado") or "")[:10]}\t{d.get("views")}\t{d.get("duracao_s")}s\t{d.get("inscritos","")}\t{d.get("canal")}\t{d.get("titulo")}')
