"""C9: o texto em volta de 'ltracode' por tipo de linha (attachment ultra_effort_*, prompt_snapshot, api-request-shape), na Sala e num setor."""
import json, re, sys
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
s = sys.argv[1]; tipos = sys.argv[2].split(',')
vistos = set()
with open(B + s + '.jsonl', 'rb') as fh:
    for line in fh:
        if b'ltracode' not in line: continue
        d = json.loads(line)
        t = d.get('type')
        sub = t + (':' + str((d.get('attachment') or {}).get('type')) if t == 'attachment' else '')
        if sub not in tipos: continue
        txt = json.dumps(d, ensure_ascii=False)
        for m in re.finditer(r'[Uu]ltra(code|_effort|Effort)', txt):
            tr = txt[max(0, m.start() - 250): m.end() + 350]
            k = (sub, re.sub(r'\d', '#', tr[200:330]))
            if k in vistos: continue
            vistos.add(k)
            print(d.get('timestamp'), sub, '|', tr.replace('\n', ' '))
            print()
