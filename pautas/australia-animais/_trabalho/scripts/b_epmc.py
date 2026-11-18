"""b_epmc.py: consulta a API REST do Europe PMC (www.ebi.ac.uk/europepmc/webservices/rest), um pedido por vez, 10 s entre pedidos
(Crawl-Delay do robots.txt do ebi.ac.uk), User-Agent do canal. Grava o JSON em midia/australia-animais/fontes/b/ e imprime o resumo.
uso: python -X utf8 -B b_epmc.py <nome-do-arquivo> "<consulta>" [--abs=1] [--n=8]"""
import json, re, sys, time, urllib.parse, urllib.request, pathlib

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = pathlib.Path(r'C:\projetos\alpha-point\midia\australia-animais\fontes\b')

def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    opts = dict(a[2:].split('=') for a in sys.argv[1:] if a.startswith('--') and '=' in a)
    nome, q = args[0], args[1]
    n = int(opts.get('n', 8)); com_abs = opts.get('abs', '0') == '1'
    url = ('https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=' + urllib.parse.quote(q) +
           f'&resultType=core&format=json&pageSize={n}')
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    corpo = None
    for tentativa in range(3):
        time.sleep(12)
        try:
            with urllib.request.urlopen(req, timeout=60) as r:
                corpo = r.read()
            break
        except Exception as e:
            print('tentativa', tentativa + 1, 'falhou:', e)
    if corpo is None:
        sys.exit(2)
    (RAIZ / f'epmc-{nome}.json').write_bytes(corpo)
    d = json.loads(corpo)
    print('hitCount', d['hitCount'])
    for x in d['resultList']['result']:
        print('-', x.get('pubYear'), '|', x.get('title'), '|', x.get('journalTitle') or x.get('bookOrReportDetails', {}).get('publisher'),
              '| doi', x.get('doi'), '| pmid', x.get('pmid'), '| OA', x.get('isOpenAccess'), x.get('pmcid'))
        if com_abs and x.get('abstractText'):
            print('   ', re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', x['abstractText'])))

main()
