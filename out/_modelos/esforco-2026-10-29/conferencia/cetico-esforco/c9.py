"""C9: onde e quando aparece 'Ultracode is on' (e variantes) nas conversas principais."""
import glob, re, json, collections, os
B = 'C:/Users/zangp/.claude/projects/C--projetos-alpha-point/'
res = collections.defaultdict(lambda: collections.defaultdict(list))
for p in glob.glob(B + '*.jsonl'):
    s = os.path.basename(p)[:8]
    with open(p, 'rb') as fh:
        for line in fh:
            if b'ltracode' not in line: continue
            try:
                d = json.loads(line)
            except Exception:
                continue
            t = d.get('type')
            ts = d.get('timestamp') or ''
            txt = json.dumps(d, ensure_ascii=False)
            for pat in ('Ultracode is on', 'ultracode is on', 'Ultracode is off', 'ultracode is off', 'Ultracode was turned', 'ultracode was turned', 'Ultracode has been', 'ultracode": true', 'ultracode": false', '"ultracode":true', '"ultracode":false'):
                if pat in txt:
                    sub = t
                    if t == 'attachment':
                        sub = 'attachment:' + str((d.get('attachment') or {}).get('type'))
                    res[s][(pat, sub)].append(ts)
for s, R in res.items():
    for k, v in R.items():
        v = sorted(x for x in v if x)
        print(s, k, len(v), v[0][:16] if v else '', '..', v[-1][:16] if v else '')
