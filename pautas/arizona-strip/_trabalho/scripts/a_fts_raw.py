# Leitor A (vídeo 8): mostra o JSON bruto do primeiro resultado do FTS do Internet Archive para um identificador.
# Uso: python -X utf8 -B a_fts_raw.py "<consulta>" <identificador>
import sys, json, urllib.request, urllib.parse
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
q, ident = sys.argv[1], sys.argv[2]
url = 'https://archive.org/services/search/beta/page_production/?' + urllib.parse.urlencode({
    'service_backend': 'fts', 'user_query': q, 'hits_per_page': '12', 'page': '1'})
req = urllib.request.Request(url, headers={'User-Agent': UA})
d = json.load(urllib.request.urlopen(req, timeout=60))
def achar(o, out):
    if isinstance(o, dict):
        if o.get('fields', {}).get('identifier') == ident if isinstance(o.get('fields'), dict) else False:
            out.append(o)
        for v in o.values(): achar(v, out)
    elif isinstance(o, list):
        for v in o: achar(v, out)
out = []
achar(d, out)
print(json.dumps(out[:1], ensure_ascii=False, indent=1)[:3000])
