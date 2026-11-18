# A medida da salinidade de superficie por bacia (WOA23, media anual 1 grau, 0 m), ponderada pela area (cos lat).
# Bacias do WOA: 1 Atlantico, 2 Pacifico, 3 Indico (o mar Mediterraneo, o Caribe e outros mares tem codigos proprios ou entram na bacia, conforme a mascara).
# Uso: python -X utf8 -B sal_woa.py <woa23_decav_s00an01.csv.gz> <basinmask_01.msk>
import sys, gzip, math, csv
sal = {}
with gzip.open(sys.argv[1], "rt") as f:
    for line in f:
        if line.startswith("#"): continue
        p = line.strip().split(",")
        if len(p) < 3 or p[2] == "": continue
        sal[(p[0], p[1])] = float(p[2])
bas = {}
with open(sys.argv[2]) as f:
    for line in f:
        if line.startswith("#") or line.startswith("Latitude"): continue
        p = line.strip().split(",")
        if len(p) < 3 or p[2] == "": continue
        bas[(p[0], p[1])] = int(float(p[2]))
acc = {}
for k, s in sal.items():
    b = bas.get(k)
    if b is None: continue
    w = math.cos(math.radians(float(k[0])))
    a = acc.setdefault(b, [0.0, 0.0, 0])
    a[0] += s*w; a[1] += w; a[2] += 1
nomes = {1:"Atlantico",2:"Pacifico",3:"Indico",4:"Mediterraneo",5:"Baltico",6:"Negro",7:"Vermelho",8:"Persico",9:"Hudson",10:"Austral",11:"Artico",12:"Japao"}
for b in sorted(acc):
    s, w, n = acc[b]
    print(f"bacia {b:2d} {nomes.get(b,'?'):12s} celulas {n:6d}  salinidade media de superficie {s/w:.2f}")
# so as faixas tropicais e subtropicais (40S-40N), onde a diferenca e mais limpa
for lo, hi in [(-40, 40), (0, 40), (-40, 0)]:
    for b in (1, 2):
        sw = ww = 0.0
        for k, s in sal.items():
            if bas.get(k) != b: continue
            la = float(k[0])
            if lo <= la <= hi:
                w = math.cos(math.radians(la)); sw += s*w; ww += w
        print(f"faixa {lo:+d} a {hi:+d}  {nomes[b]:10s} {sw/ww:.2f}")
