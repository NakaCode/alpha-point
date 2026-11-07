# Le as respostas da API do Commons e lista arquivo, tamanho, licenca e autor. Uso: python -I -X utf8 -B commons_ler.py <arq.json> ...
import json, sys, re
for arq in sys.argv[1:]:
    print("==", arq)
    d = json.load(open(arq, encoding="utf-8"))
    for p in sorted(d.get("query", {}).get("pages", {}).values(), key=lambda x: x.get("index", 0)):
        ii = p.get("imageinfo", [{}])[0]; m = ii.get("extmetadata", {})
        g = lambda k: re.sub(r"<[^>]+>", "", m.get(k, {}).get("value", ""))[:90]
        print(f"  {p['title'][:70]} | {ii.get('width')}x{ii.get('height')} | {g('LicenseShortName')} | {g('Artist')} | {g('DateTimeOriginal')[:20]}")
        print(f"      {g('ImageDescription')}")
