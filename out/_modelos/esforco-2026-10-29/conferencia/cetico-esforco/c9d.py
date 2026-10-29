"""C9: a troca de esforco (effort das respostas) e os attachments em volta, na Sala e na reserva."""
import json, sys
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
s, t0, t1 = sys.argv[1], sys.argv[2], sys.argv[3]
prev = None
with open(B + s + '.jsonl', 'rb') as fh:
    for line in fh:
        try:
            d = json.loads(line)
        except Exception:
            continue
        ts = d.get('timestamp') or ''
        if not (t0 <= ts <= t1): continue
        t = d.get('type')
        if t == 'assistant':
            e = d.get('effort')
            if e != prev:
                print(ts, 'assistant effort ->', e, '| perTurn', d.get('perTurnEffort'))
                prev = e
        elif t == 'attachment':
            a = d.get('attachment') or {}
            at = a.get('type')
            if at and ('effort' in str(at) or 'ultra' in str(at) or 'mode' in str(at) or 'setting' in str(at)):
                r = d.get('rendered') or [{}]
                txt = (r[0].get('content') if isinstance(r, list) and r else '') or ''
                print(ts, 'attachment', at, json.dumps({k: v for k, v in a.items() if k != 'type'}, ensure_ascii=False)[:200], '|', txt.replace('\n', ' ')[:160])
        elif t == 'system':
            c = str(d.get('content') or d.get('subtype') or '')
            if 'ffort' in c or 'ltra' in c:
                print(ts, 'system', c[:200])
