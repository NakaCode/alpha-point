import json
g=json.load(open('ccdgeom.json',encoding='utf-8'))
for f in g['features']:
    r=f['geometry']['rings']
    print(f['attributes']['NAME'], len(r))
    for a in r:
        xs=[p[0] for p in a]; ys=[p[1] for p in a]
        s=0
        for i in range(len(a)-1):
            s+=(a[i+1][0]-a[i][0])*(a[i+1][1]+a[i][1])
        print('   pts',len(a),'lon %.3f..%.3f lat %.3f..%.3f'%(min(xs),max(xs),min(ys),max(ys)),'horario' if s>0 else 'anti')
