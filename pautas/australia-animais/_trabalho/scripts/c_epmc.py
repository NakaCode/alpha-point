# Leitor C (vídeo 8, australia-animais). Consulta a API da Europe PMC (robots.txt do host lido hoje) e mostra título, revista, ano, DOI, PMID, PMCID, resumo.
# Uso: python -X utf8 -B c_epmc.py "<consulta Europe PMC>" <nome-do-json> [N=5]
# Um pedido por vez, com o User-Agent do canal; em 5xx tenta de novo (ate 4 vezes). Grava o JSON em midia/australia-animais/fontes/c/<nome>.
import sys, json, time, hashlib, os, datetime, urllib.request, urllib.parse, urllib.error

UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
LOG = os.path.join(RAIZ, '_log-c.txt')
q = sys.argv[1]
nome = sys.argv[2]
n = int(sys.argv[3]) if len(sys.argv) > 3 else 5
url = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?' + urllib.parse.urlencode(
    {'format': 'json', 'pageSize': str(n), 'resultType': 'core', 'query': q})
corpo = None
for tent in range(4):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        with urllib.request.urlopen(req, timeout=90) as r:
            corpo = r.read()
            st = r.status
        with open(LOG, 'a', encoding='utf-8') as f:
            f.write('%s\tapi\twww.ebi.ac.uk\t%s\t%s\n' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), st, url))
        break
    except urllib.error.HTTPError as e:
        print('HTTP', e.code, 'tentativa', tent + 1)
        with open(LOG, 'a', encoding='utf-8') as f:
            f.write('%s\tapi\twww.ebi.ac.uk\t%s\t%s\n' % (datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'), e.code, url))
        if e.code < 500:
            sys.exit(4)
        time.sleep(6 * (tent + 1))
if corpo is None:
    print('desisti (5xx repetido)')
    sys.exit(5)
open(RAIZ + '/' + nome, 'wb').write(corpo)
print('sha256', hashlib.sha256(corpo).hexdigest(), len(corpo), 'bytes ->', nome)
d = json.loads(corpo)
print('hitCount', d.get('hitCount'))
for r in d['resultList']['result']:
    print('TITULO:', r.get('title'))
    print('REV:', r.get('journalTitle') or r.get('bookOrReportDetails'), r.get('pubYear'), 'DOI', r.get('doi'), 'PMID', r.get('pmid'), 'PMCID', r.get('pmcid'), 'aberto:', r.get('isOpenAccess'), 'lic:', r.get('license'))
    print('AUT:', (r.get('authorString') or '')[:150])
    print('RESUMO:', r.get('abstractText'))
    print('------')
time.sleep(10)  # Crawl-Delay: 10 do robots.txt do ebi.ac.uk
