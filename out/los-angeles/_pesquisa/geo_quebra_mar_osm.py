# Uso, da raiz do canal: python out/los-angeles/_pesquisa/geo_quebra_mar_osm.py  (depois: node out/los-angeles/_pesquisa/geo_quebra_mar_osm_gravar.mjs)
# Entrada: out/los-angeles/_tmp/geo-quebra-mar/dump3.json = Overpass (overpass-api.de, 08/10/2026), consulta:
#   [out:json][timeout:90];(way["man_made"](33.700,-118.29,33.716,-118.248);way["natural"="coastline"](33.700,-118.29,33.716,-118.248););out meta geom;
# Deriva o eixo do San Pedro Breakwater de hoje do OSM (dump3.json, Overpass 08/10/2026) e mede contra a linha de 1923.
import json, math
d=json.load(open('out/los-angeles/_tmp/geo-quebra-mar/dump3.json',encoding='utf-8'))
W={e['id']:e for e in d['elements']}
LAT0=33.708; kx=111320*math.cos(math.radians(LAT0)); ky=110950
def xy(p): return ((p[0]+118.27)*kx,(p[1]-33.708)*ky)
def ll(q): return (q[0]/kx-118.27, q[1]/ky+33.708)
def pts(i): return [(p['lon'],p['lat']) for p in W[i]['geometry']]
def interp_lat(chain,lon):
    for a,b in zip(chain,chain[1:]):
        if min(a[0],b[0])<=lon<=max(a[0],b[0]) and a[0]!=b[0]:
            t=(lon-a[0])/(b[0]-a[0]); return a[1]+t*(b[1]-a[1])
    return None
# 1) a raiz sobre o aterro de Cabrillo Beach: meio entre as duas margens (coastline 41645427 ao norte, 448064329 ao sul)
N=[p for p in pts(41645427)]; S=[p for p in pts(448064329)]
JUN=(-118.2773152,33.7080271)  # nó comum dos ways 524838430 e 1312790328 (ponta do aterro)
root=[]
lon0=-118.28240  # onde a margem norte vira para o norte (praia interna): o aterro encontra a terra
n=12
for k in range(n+1):
    lon=lon0+(JUN[0]-lon0)*k/n
    if k==n: root.append(JUN); break
    a=interp_lat(N,lon); b=interp_lat(S,lon)
    root.append((lon,(a+b)/2))
# 2) o braço no mar: eixo do polígono 1312790328 (média das duas margens por comprimento normalizado)
ring=pts(1312790328)[:-1]
iw=min(range(len(ring)),key=lambda i:ring[i][0]); ie=max(range(len(ring)),key=lambda i:ring[i][0])
def chain(i,j,step):
    out=[];k=i
    while True:
        out.append(ring[k]); 
        if k==j: break
        k=(k+step)%len(ring)
    return out
A=chain(iw,ie,1); B=chain(iw,ie,-1)
def resample(c,m):
    q=[xy(p) for p in c]; L=[0]
    for a,b in zip(q,q[1:]): L.append(L[-1]+math.dist(a,b))
    out=[]
    for k in range(m+1):
        s=L[-1]*k/m
        for i in range(len(L)-1):
            if L[i]<=s<=L[i+1]:
                t=(s-L[i])/(L[i+1]-L[i]) if L[i+1]>L[i] else 0
                out.append((q[i][0]+t*(q[i+1][0]-q[i][0]),q[i][1]+t*(q[i+1][1]-q[i][1]))); break
    return out
M=400
ra,rb=resample(A,M),resample(B,M)
arm=[ll(((a[0]+b[0])/2,(a[1]+b[1])/2)) for a,b in zip(ra,rb)]
# farol (way 1312710274, centróide)
F=pts(1312710274)[:-1]; FAROL=(sum(p[0] for p in F)/len(F),sum(p[1] for p in F)/len(F))
# corta o braço no farol: o último ponto do eixo antes da projeção do farol, e termina no farol
fx=xy(FAROL)
best=min(range(len(arm)),key=lambda i:math.dist(xy(arm[i]),fx))
arm_cut=arm[:best]+[FAROL]
linha=root[:-1]+[JUN]+arm_cut[1:] if math.dist(xy(arm[0]),xy(JUN))<15 else None
print('arm[0] vs junção (m):',round(math.dist(xy(arm[0]),xy(JUN)),1), 'farol->eixo mais próximo (m):',round(math.dist(xy(arm[best]),fx),1),'ponta do polígono:',ring[ie])
# simplificação Douglas-Peucker a 1 m
def dp(P,tol):
    if len(P)<3: return P
    a,b=xy(P[0]),xy(P[-1]); 
    def per(p):
        p=xy(p); dx,dy=b[0]-a[0],b[1]-a[1]
        t=max(0,min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy)))
        return math.dist(p,(a[0]+t*dx,a[1]+t*dy))
    i=max(range(1,len(P)-1),key=lambda i:per(P[i]))
    if per(P[i])<=tol: return [P[0],P[-1]]
    return dp(P[:i+1],tol)[:-1]+dp(P[i:],tol)
lin=dp(linha,1.0)
def comp(P): return sum(math.dist(xy(a),xy(b)) for a,b in zip(P,P[1:]))
L=comp(linha); Lr=comp(root); La=comp(arm_cut); Lfull=comp(arm)
print('vértices',len(linha),'->',len(lin))
print(f'total {L:.0f} m = {L/0.3048:.0f} ft ; raiz no aterro {Lr:.0f} m = {Lr/0.3048:.0f} ft ; braço junção->farol {La:.0f} m = {La/0.3048:.0f} ft ; braço até a ponta do polígono {Lfull:.0f} m = {Lfull/0.3048:.0f} ft')
# medida contra 1923
old=json.load(open('out/los-angeles/_media/geo/quebra-mar-usgs1923.json',encoding='utf-8'))['features'][0]['geometry']['coordinates']
def dist_to(p,P):
    best=(1e9,None); q=xy(p)
    for a,b in zip(P,P[1:]):
        a,b=xy(a),xy(b); dx,dy=b[0]-a[0],b[1]-a[1]
        t=max(0,min(1,((q[0]-a[0])*dx+(q[1]-a[1])*dy)/(dx*dx+dy*dy)))
        c=(a[0]+t*dx,a[1]+t*dy); dd=math.dist(q,c)
        # sinal: + se o ponto está à esquerda (norte) do segmento orientado oeste->leste
        s=1 if (dx*(q[1]-a[1])-dy*(q[0]-a[0]))>0 else -1
        if dd<best[0]: best=(dd,s,t)
    return best
print('\n1923 -> hoje (cada vértice da linha de 1923; + = 1923 ao norte/fora do muro de hoje):')
res=[]
for p in old:
    dd,s,t=dist_to(p,linha); res.append(s*dd); print(f'  {p[0]:.5f},{p[1]:.5f}  {s*dd:+.1f} m')
# amostra densa ao longo do muro de hoje
print('\nhoje -> 1923, a cada ~100 m do muro de hoje:')
q=resample(linha,int(L//100)); dens=[]
for p in q:
    pl=ll(p); dd,s,t=dist_to(pl,old); dens.append((-s)*dd)
    print(f'  {pl[0]:.5f},{pl[1]:.5f}  1923 a {(-s)*dd:+.1f} m')
print('farol: 1923 ponta',old[-1],'hoje',FAROL,'dist',round(math.dist(xy(old[-1]),xy(FAROL)),1),'m')
print('raiz: 1923',old[0],'hoje',linha[0],'dist',round(math.dist(xy(old[0]),xy(linha[0])),1),'m')
json.dump({'linha':lin,'linha_densa':linha,'farol':FAROL,'juncao':JUN,'raiz_ini':linha[0],'L':L,'Lr':Lr,'La':La,'Lfull':Lfull,'dens':dens,'vert1923':res},open('out/los-angeles/_tmp/geo-quebra-mar/resultado.json','w'),indent=1)
