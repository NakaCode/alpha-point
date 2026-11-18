# Leitor A (vídeo 8). Busca de texto integral no Internet Archive (o mesmo ponto que o site usa), um pedido por vez, com o User-Agent do canal.
# Uso: python -X utf8 -B a_fts.py "<consulta>" [pagina]
import sys, json, urllib.request, urllib.parse, time

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
q = sys.argv[1]
page = sys.argv[2] if len(sys.argv) > 2 else '1'
url = 'https://archive.org/services/search/beta/page_production/?' + urllib.parse.urlencode({
    'service_backend': 'fts', 'user_query': q, 'hits_per_page': '12', 'page': page})
req = urllib.request.Request(url, headers={'User-Agent': UA})
with urllib.request.urlopen(req, timeout=60) as r:
    d = json.load(r)


def achar(o, hits):
    if isinstance(o, dict):
        if 'fields' in o and isinstance(o['fields'], dict) and 'identifier' in o['fields']:
            hits.append(o)
        for v in o.values():
            achar(v, hits)
    elif isinstance(o, list):
        for v in o:
            achar(v, hits)


hits = []
achar(d, hits)
vistos = set()
for h in hits:
    f = h['fields']
    ident = f.get('identifier')
    if ident in vistos:
        continue
    vistos.add(ident)
    print('#', ident, '|', f.get('year'), '|', str(f.get('title'))[:110])
    for k in ('highlight', 'highlights', 'text', 'snippets'):
        if k in h:
            print('   ', json.dumps(h[k], ensure_ascii=False)[:700])
time.sleep(2)
