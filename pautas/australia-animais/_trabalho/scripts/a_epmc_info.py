# Leitor A (vídeo 8). Mostra volume, número, páginas e DOI dos registros dos JSON da Europe PMC (para a citação).
# Uso: python -X utf8 -B a_epmc_info.py <json> [<json> ...]
import sys, json
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\a'
for nome in sys.argv[1:]:
    d = json.load(open(RAIZ + '/' + nome, encoding='utf-8'))
    for r in d['resultList']['result']:
        j = r.get('journalInfo') or {}
        print(nome, '|', (r.get('title') or '')[:60], '|', (j.get('journal') or {}).get('title'), 'vol', j.get('volume'), 'n', j.get('issue'), 'pp', r.get('pageInfo'), 'ano', r.get('pubYear'), 'doi', r.get('doi'))
