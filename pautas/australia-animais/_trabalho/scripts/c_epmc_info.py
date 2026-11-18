# Leitor C (vídeo 8, australia-animais). Mostra, de um JSON do Europe PMC ja baixado (c_epmc.py), os campos de citacao: revista, volume, paginas, ano, DOI, PMID, licenca, tipo. Nao faz pedido de rede.
# Uso: python -X utf8 -B c_epmc_info.py <json> [indice]
import sys, json, os
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
d = json.load(open(os.path.join(RAIZ, sys.argv[1]), encoding='utf-8'))
for i, r in enumerate(d['resultList']['result']):
    if len(sys.argv) > 2 and str(i) != sys.argv[2]:
        continue
    ji = r.get('journalInfo') or {}
    print(i, '|', r.get('title'))
    print('   revista:', (ji.get('journal') or {}).get('title'), '| ano', r.get('pubYear'), '| vol', ji.get('volume'), '| n.', ji.get('issue'), '| pag', r.get('pageInfo'), '| data', r.get('firstPublicationDate'))
    print('   DOI', r.get('doi'), '| PMID', r.get('pmid'), '| PMCID', r.get('pmcid'), '| fonte', r.get('source'), '| licenca', r.get('license'), '| aberto', r.get('isOpenAccess'), '| tipo', r.get('pubType'))
    print('   autores:', (r.get('authorString') or '')[:200])
