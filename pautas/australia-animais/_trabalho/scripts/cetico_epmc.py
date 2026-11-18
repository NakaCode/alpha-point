"""cetico_epmc.py: o cetico da pauta v1 (video 8, australia-animais) consulta a API REST do Europe PMC
(www.ebi.ac.uk/europepmc/webservices/rest; o robots.txt do ebi.ac.uk, relido em 18/11/2026, so pede Crawl-Delay: 10 e nao veta o caminho).
Um pedido por vez, 12 s antes de cada um, User-Agent do canal. Grava o JSON em midia/australia-animais/fontes/c/ e imprime os resumos.
uso: python -X utf8 -B cetico_epmc.py <nome> "<consulta>" [--n=8] [--abs=1]"""
import json, re, sys, time, urllib.parse, urllib.request, pathlib

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = pathlib.Path(r'C:\projetos\alpha-point\midia\australia-animais\fontes\c')

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    opts = dict(a[2:].split('=', 1) for a in sys.argv[1:] if a.startswith('--') and '=' in a)
    nome, q = args[0], args[1]
    n = int(opts.get('n', 8)); com_abs = opts.get('abs', '1') == '1'
    url = ('https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=' + urllib.parse.quote(q) +
           f'&resultType=core&format=json&pageSize={n}')
    time.sleep(12)
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    with urllib.request.urlopen(req, timeout=60) as r:
        corpo = r.read()
    (RAIZ / f'epmc-{nome}.json').write_bytes(corpo)
    d = json.loads(corpo)
    print('hitCount', d['hitCount'])
    for x in d['resultList']['result']:
        print('-', x.get('pubYear'), '|', x.get('title'), '|', x.get('journalTitle'), '| doi', x.get('doi'), '| pmid', x.get('pmid'),
              '| OA', x.get('isOpenAccess'), x.get('pmcid'))
        if com_abs and x.get('abstractText'):
            print('   ', re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', x['abstractText'])))

main()
