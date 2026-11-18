# Leitor A (vídeo 8). Mostra os registros de um JSON da Europe PMC (título, revista, ano, DOI, PMCID, resumo).
# Uso: python -X utf8 -B a_epmc.py <arquivo.json>
import sys, json
d = json.load(open(sys.argv[1], encoding='utf-8'))
for r in d['resultList']['result']:
    print('TITULO:', r.get('title'))
    print('REV:', r.get('journalTitle'), r.get('pubYear'), 'DOI', r.get('doi'), 'PMID', r.get('pmid'), 'PMCID', r.get('pmcid'), 'aberto:', r.get('isOpenAccess'))
    print('AUT:', r.get('authorString'))
    print('RESUMO:', r.get('abstractText'))
    print('------')
