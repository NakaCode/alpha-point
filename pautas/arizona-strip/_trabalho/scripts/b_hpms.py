# b_hpms.py (leitor B, 18/11/2026): marcos de milha oficiais (HPMS 2025, FHWA, dados que cada DOT estadual envia) das rotas que o cético roteou.
# Serviço: geo.dot.gov, Hosted/HPMS_FULL_<UF>_2025 (FeatureServer/0). Um pedido por vez, User-Agent do canal.
# Para cada (UF, assinatura, número) baixa as seções (begin_point, end_point, geometria) e grava em hpms-<UF>-<sig>-<num>.json.
import json, os, sys, time, urllib.parse, urllib.request
UA = 'AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)'
PASTA = r'C:/projetos/alpha-point/midia/arizona-strip/fontes/b'
def baixar(uf, sig, num, ano=2025):
    arq = os.path.join(PASTA, 'hpms-%s-%d-%s.json' % (uf, sig, num))
    if os.path.exists(arq):
        return json.load(open(arq, encoding='utf-8'))
    base = 'https://geo.dot.gov/server/rest/services/Hosted/HPMS_FULL_%s_%d/FeatureServer/0/query' % (uf, ano)
    feats = []; off = 0
    while True:
        q = {'where': 'route_number=%s AND route_signing=%d' % (num, sig), 'outFields': 'objectid,route_id,begin_point,end_point,route_name,route_signing,route_number,facility_type,f_system,ownership',
             'returnGeometry': 'true', 'outSR': '4326', 'f': 'json', 'resultOffset': str(off), 'resultRecordCount': '1000'}
        req = urllib.request.Request(base + '?' + urllib.parse.urlencode(q), headers={'User-Agent': UA})
        d = json.load(urllib.request.urlopen(req, timeout=300))
        if 'error' in d:
            print(uf, sig, num, 'ERRO', d['error']); return None
        feats += d.get('features', [])
        time.sleep(1.2)
        if d.get('exceededTransferLimit'):
            off += len(d.get('features', [])); continue
        break
    out = {'_lido_em': time.strftime('%Y-%m-%d %H:%M:%S'), 'uf': uf, 'sig': sig, 'num': num, 'ano': ano, 'features': feats}
    json.dump(out, open(arq, 'w', encoding='utf-8'))
    return out
if __name__ == '__main__':
    pedidos = [('AZ', 2, '15'), ('UT', 2, '15'), ('NV', 2, '15')]
    if len(sys.argv) > 1:
        pedidos = []
        for a in sys.argv[1:]:
            uf, sig, num = a.split(':'); pedidos.append((uf, int(sig), num))
    for uf, sig, num in pedidos:
        d = baixar(uf, sig, num)
        if not d: continue
        F = d['features']
        if not F: print(uf, sig, num, 'sem seções'); continue
        ids = {}
        for f in F:
            a = f['attributes']; ids.setdefault(a['route_id'], []).append(a)
        print('==', uf, 'sig', sig, 'rota', num, '| seções', len(F), '| route_ids', len(ids))
        for rid, L in ids.items():
            b = min(x['begin_point'] for x in L); e = max(x['end_point'] for x in L)
            soma = sum(x['end_point'] - x['begin_point'] for x in L)
            print('   ', rid, 'nomes', set(x['route_name'] for x in L), '| MP %.3f a %.3f | soma dos comprimentos %.3f | facility_type' % (b, e, soma), set(x['facility_type'] for x in L))
