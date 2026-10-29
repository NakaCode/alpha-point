"""C9: lista cada attachment ultra_effort_* (tipo, reminderType, hora, 1a linha do texto) por conversa."""
import json, glob, os
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
for s in ('f42bc036', '6abb9076', '806a2100', '8b49bdf9', 'dd3c4500', '97895d01', '90213555', '0540596a'):
    p = glob.glob(B + s + '*.jsonl')[0]
    out = []
    with open(p, 'rb') as fh:
        for line in fh:
            if b'ultra_effort' not in line: continue
            d = json.loads(line)
            if d.get('type') != 'attachment': continue
            a = d.get('attachment') or {}
            if not str(a.get('type', '')).startswith('ultra_effort'): continue
            r = d.get('rendered') or [{}]
            txt = (r[0].get('content') if isinstance(r, list) and r else '') or ''
            out.append((d.get('timestamp'), a.get('type'), a.get('reminderType'), txt.replace('\n', ' ')[18:90]))
    print(s, len(out))
    for o in out[-6:]:
        print('   ', o)
