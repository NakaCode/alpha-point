# Confere os topos mais frios sobre a janela das Tiwi (lat -11,1 a -12,0; lon 129,9 a 131,7): os 5 menores valores de todos os cortes
# de novembro e quantos pixels abaixo de 190 K cada um tem (um pixel isolado pode ser ruido).
# Uso: python -P -X utf8 -B topo_frio.py <pasta_midia>
import sys, os, glob, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import numpy as np, hsd
pasta = sys.argv[1]
meta = json.load(open(os.path.join(pasta, "meta.json")))
r0, r1, k0, k1 = meta["janela_r0_r1_k0_k1"]
(la, ca), (lb, cb) = [hsd.latlon_para_lc(meta, *p) for p in ((-11.1, 129.9), (-12.0, 131.7))]
ra, rb = int(round(float(la))) - meta["lin1"] - r0, int(round(float(lb))) - meta["lin1"] - r0
qa, qb = int(round(float(ca))) - 1 - k0, int(round(float(cb))) - 1 - k0
res = []
for a in glob.glob(os.path.join(pasta, "cortes", "20??11*.npz")):
    T = np.load(a)["T"][ra:rb + 1, qa:qb + 1]
    res.append((float(np.nanmin(T)), int((T < 190).sum()), int((T < 195).sum()), os.path.basename(a)))
res.sort()
for r in res[:6]:
    print(f"{r[3]} (UTC): min {r[0]:.1f} K ({r[0]-273.15:.1f} C); pixels < 190 K: {r[1]}; < 195 K: {r[2]}")
