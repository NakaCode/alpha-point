"""Os comandos mais comuns de cada papel (o que esta em 'shell outro', 'python' e 'node outro')."""
import json, sys, re, collections
D = sys.argv[1]
DESDE = sys.argv[2]
PAPEIS = sys.argv[3].split(',')
BASE = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
A = json.load(open(D + '/arquivos.json', encoding='utf-8'))['arquivos']
L = {l['i']: l for l in json.load(open(D + '/por-agente.json', encoding='utf-8'))}
def norm(c):
    c = c.strip()
    c = re.sub(r'^(cd\s+\S+\s*(&&|;)\s*)+', '', c)
    c = re.sub(r'^(\$env:\w+\s*=\s*\S+\s*;\s*|[A-Z_]+=\S+\s+)+', '', c)
    c = re.sub(r'C:/Users/zangp/AppData/Local/Temp/claude/\S+?/scratchpad', '<scratch>', c)
    c = re.sub(r'/c/Users/zangp/AppData/Local/Temp/claude/\S+?/scratchpad', '<scratch>', c)
    c = re.sub(r'out/[a-z-]+/', 'out/<proj>/', c)
    c = re.sub(r'\bs\d\d\b', 'sNN', c)
    c = re.sub(r'\d+', 'N', c)
    return c[:90]
for papel in PAPEIS:
    cont = collections.Counter(); exemplo = {}
    n = 0
    for i, r in enumerate(A):
        l = L.get(i)
        if not l or r['tipo'] == 'principal' or l['papel'] != papel or (r.get('primeiro') or '') < DESDE:
            continue
        with open(BASE + r['caminho'], 'rb') as fh:
            for line in fh:
                if b'"tool_use"' not in line or b'"type":"assistant"' not in line:
                    continue
                d = json.loads(line)
                for b in (d.get('message') or {}).get('content') or []:
                    if isinstance(b, dict) and b.get('type') == 'tool_use' and b.get('name') in ('Bash', 'PowerShell'):
                        c = (b.get('input') or {}).get('command') or ''
                        k = norm(c.split('\n')[0])
                        k = re.split(r'\s', k, maxsplit=2)
                        k = ' '.join(k[:2])
                        cont[k] += 1; n += 1
                        exemplo.setdefault(k, (b.get('input') or {}).get('description') or '')
    print(f'== {papel}: {n} comandos de shell')
    for k, v in cont.most_common(14):
        print(f'  {v:4d}  {k[:60]:60s} | {exemplo[k][:70]}')
