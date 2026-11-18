# Converte a saída JSON do vidiq_youtube_search em TSV curto (data, views, inscritos, duração, canal, título, id).
# Uso: python -X utf8 -B vq_tsv.py <arquivo.json> [rótulo]
import json, sys, re
d = json.load(open(sys.argv[1], encoding='utf-8'))
rot = sys.argv[2] if len(sys.argv) > 2 else ''
def dur(s):
    if not s: return ''
    m = re.match(r'PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?', s)
    h, mi, se = (int(x or 0) for x in m.groups())
    return f"{h*60+mi}:{se:02d}"
for r in d['results']:
    if r.get('kind') != 'video':
        continue
    print('\t'.join(str(x) for x in (rot, (r.get('publishedAt') or '')[:10], r.get('viewCount'), r.get('subscriberCount'), dur(r.get('duration')), r.get('channelTitle'), r.get('title'), r.get('id'))))
