"""2a rodada (pesquisa-2): as camadas do OSM (Overpass de 15/10/2026, dumps em _tmp/pesquisa-geo/dumps/r2-osm-*.json) e a
linha de 1936 refeita sobre a avenida e o rio do OSM.
Gera em _tmp/pesquisa-geo/r2/:
  fc-avenida-martires-osm.json   a Av. de los Martires de hoje (uma pista, a de menor caminho, da ponte ao norte)
  fc-rio-curundu-osm.json        o Rio Curundu de hoje (curso a ceu aberto + trechos canalizados, marcados)
  fc-ponte-americas-osm.json     o Puente de las Americas (as duas vias da ponte, como linha)
  fc-pontos-osm-atlantico.json   Cristobal, Edificio de Administracion de Cristobal, Colon, Puerto de Cristobal, Mount Hope, Coco Solo
  fc-corregimento-ancon-osm.json o corregimento de Ancon (limite administrativo de hoje)
  fc-opcao-b-cidade-do-panama.json  OPCAO (b), aguarda o Lucas: San Felipe + Santa Ana + El Chorrillo + Calidonia (uniao) e cada um
  fc-opcao-b-colon.json             OPCAO (b), aguarda o Lucas: Barrio Norte + Barrio Sur (uniao) e cada um
  fc-linha-1914-panama-r2.json   a linha de 1936 com a avenida e o rio trocados pelo OSM
uso: python -I geo_r2_osm.py"""
import json, math, heapq
from shapely.geometry import LineString, Point, Polygon, MultiPolygon, mapping
from shapely.ops import polygonize, unary_union, linemerge, substring
B = r"C:/projetos/alpha-point/out/zona-do-canal/_tmp/pesquisa-geo/"
G = r"C:/projetos/alpha-point/out/zona-do-canal/_media/geo/"
D = B + "dumps/"
MX, MY = 111320 * math.cos(math.radians(8.96)), 110600
def ld(n): return json.load(open(D + n, encoding="utf-8"))
def meta(n): return json.load(open(D + n + ".meta.json", encoding="utf-8"))
def fc(feats): return {"type": "FeatureCollection", "features": feats}
def F(geom, **p): return {"type": "Feature", "properties": p, "geometry": geom}
def r6(c): return [round(c[0], 6), round(c[1], 6)]
def comp_m(c): return sum(math.hypot((b[0]-a[0])*MX, (b[1]-a[1])*MY) for a, b in zip(c, c[1:]))
OSM = "© OpenStreetMap contributors"
def salvar(nome, obj): json.dump(obj, open(B + "r2/" + nome, "w", encoding="utf-8"), ensure_ascii=False)

# ---------- avenida (grafo dos nos das vias; menor caminho da ponta sul a ponta norte) ----------
lin = ld("r2-osm-linhas-pacifico.json")["elements"]
av = [e for e in lin if "rtires" in e["tags"].get("name", "")]
def grafo(ways):
    adj = {}
    for e in ways:
        g = [(round(p["lon"], 7), round(p["lat"], 7)) for p in e["geometry"]]
        for a, b in zip(g, g[1:]):
            w = math.hypot((b[0]-a[0])*MX, (b[1]-a[1])*MY)
            adj.setdefault(a, []).append((b, w)); adj.setdefault(b, []).append((a, w))   # sem sentido: quer-se o eixo, nao a mao
    return adj
def caminho(adj, ini, fim):
    near = lambda q: min(adj, key=lambda n: (n[0]-q[0])**2 + (n[1]-q[1])**2)
    s, t = near(ini), near(fim); dist = {s: 0}; prev = {}; h = [(0, s)]
    while h:
        d0, u = heapq.heappop(h)
        if u == t: break
        if d0 > dist[u]: continue
        for v, w in adj[u]:
            if d0 + w < dist.get(v, 1e18): dist[v] = d0 + w; prev[v] = u; heapq.heappush(h, (d0 + w, v))
    out = [t]
    while out[-1] != s: out.append(prev[out[-1]])
    return out[::-1]
AV_ADJ = grafo(av)
AV_SUL, AV_NORTE = (-79.55696, 8.94654), (-79.54231, 8.96381)
av_c = caminho(AV_ADJ, AV_SUL, AV_NORTE)
ids_av = sorted(e["id"] for e in av)
salvar("fc-avenida-martires-osm.json", fc([F({"type": "LineString", "coordinates": [r6(c) for c in av_c]},
       name="Avenida de los Mártires", name_pt="Avenida de los Mártires", rotulo="Avenida de los Mártires",
       antes="Fourth of July Avenue (renomeada depois de 1964)", data_do_tracado="OSM, 15/10/2026",
       osm="ways " + ",".join(map(str, ids_av)), metodo="menor caminho pelos nos das vias, da cabeceira da ponte (sul) ao fim norte; a avenida e de pista dupla: a linha segue uma das pistas, ~10-20 m do eixo",
       comprimento_m=round(comp_m(av_c)), credito=OSM)]))
# ---------- rio ----------
rio = [e for e in lin if "Curund" in e["tags"].get("name", "")]
rfeats = []
for e in rio:
    t = e["tags"]; g = [r6((p["lon"], p["lat"])) for p in e["geometry"]]
    rfeats.append(F({"type": "LineString", "coordinates": g}, name="Río Curundú", name_pt="Curundú River", rotulo="Curundú River",
                    osm=f"way/{e['id']}", waterway=t.get("waterway"), canalizado=("sim (" + ("tunnel=" + t["tunnel"] if "tunnel" in t else "culvert") + ")") if t.get("tunnel") or t.get("culvert") else "nao",
                    data_do_tracado="OSM, 15/10/2026", credito=OSM))
salvar("fc-rio-curundu-osm.json", fc(rfeats))
RIO_LINE = linemerge([LineString([(x*MX, y*MY) for x, y in f["geometry"]["coordinates"]]) for f in rfeats])
# ---------- ponte ----------
pa = ld("r2-osm-ponte-arcoiris.json")["elements"]
ponte = [e for e in pa if e["tags"].get("name") == "Puente de las Américas" and e["tags"].get("highway")]
pl = linemerge([LineString([(p["lon"], p["lat"]) for p in e["geometry"]]) for e in ponte])
pc = [r6(c) for c in pl.coords]
salvar("fc-ponte-americas-osm.json", fc([F({"type": "LineString", "coordinates": pc}, name="Puente de las Américas", name_pt="Bridge of the Americas",
       rotulo="Bridge of the Americas", antes="Thatcher Ferry Bridge (1962)", osm="ways " + ",".join(str(e["id"]) for e in ponte),
       comprimento_m=round(comp_m(pc)), data_do_tracado="OSM, 15/10/2026", credito=OSM)]))
# ---------- pontos do Atlantico ----------
at = {e["type"] + "/" + str(e["id"]): e for e in ld("r2-osm-atlantico.json")["elements"]}
def ctr(e): c = e.get("center") or {"lat": e["lat"], "lon": e["lon"]}; return r6((c["lon"], c["lat"]))
PONTOS = [("node/2606132098", "cristobal-hoje", "Cristóbal", "place=neighbourhood (o no do bairro)"),
          ("way/390025234", "administration-building-cristobal", "Cristóbal Administration Building", "Edificio de Administración de Cristóbal (centro do contorno)"),
          ("way/30687159", "puerto-de-cristobal", "Port of Cristóbal", "Puerto de Cristóbal (centro da area do porto)"),
          ("node/339209702", "colon-hoje", "Colón", "place=city (o no da cidade; fica no sudeste da ilha, a ~400 m do centro antigo)"),
          ("node/7995465710", "mount-hope-hoje", "Mount Hope", "Monte Esperanza, place=neighbourhood"),
          ("node/3023982594", "coco-solo-hoje", "Coco Solo", "place=neighbourhood")]
salvar("fc-pontos-osm-atlantico.json", fc([F({"type": "Point", "coordinates": ctr(at[k])}, name=at[k]["tags"].get("name"), name_pt=rot, rotulo=rot, slug=s,
       osm=k, nota=n, data_do_tracado="OSM, 15/10/2026", credito=OSM) for k, s, rot, n in PONTOS]))
# ---------- corregimentos (relacoes -> poligonos) ----------
rel = {e["id"]: e for e in ld("r2-osm-corregimentos-geom.json")["elements"]}
def poligono(e):
    linhas = [LineString([(p["lon"], p["lat"]) for p in m["geometry"]]) for m in e["members"] if m["type"] == "way" and m["role"] in ("outer", "")]
    polys = list(polygonize(unary_union(linhas)))
    u = unary_union(polys)
    return u
def geom(u, tol=0.00003):
    u = u.simplify(tol, preserve_topology=True); g = mapping(u)
    return json.loads(json.dumps(g, default=list))
def area_km2(u):
    from shapely.affinity import scale
    return scale(u, MX, MY, origin=(0, 0)).area / 1e6
def ffeat(rid, **p):
    e = rel[rid]; u = poligono(e)
    return u, F(geom(u), name=e["tags"]["name"], osm=f"relation/{rid}", admin_level=e["tags"].get("admin_level"), area_km2=round(area_km2(u), 2),
                wikidata=e["tags"].get("wikidata", ""), data_do_tracado="OSM, 15/10/2026 (limite administrativo de hoje)", credito=OSM, **p)
u_anc, f_anc = ffeat(11382233, name_pt="Ancón", rotulo="Ancón", nota="corregimento de Ancon (distrito do Panama): o limite de HOJE, nao o da Zona; cobre a antiga Zona do lado do Pacifico e mais")
salvar("fc-corregimento-ancon-osm.json", fc([f_anc]))
AVISO = "OPCAO (b), AGUARDA O LUCAS: nenhuma cena cita esta camada ate a decisao (a cidade de hoje nesses limites, nao a de 1914)"
NUCLEO = [(11381880, "San Felipe"), (11381981, "Santa Ana"), (11381891, "El Chorrillo"), (11381614, "Calidonia")]
EXTRA = [(11382004, "Curundú"), (11381324, "Bella Vista")]
us, fs = [], []
for rid, _ in NUCLEO:
    u, f = ffeat(rid, opcao="b", aviso=AVISO, papel="parte da uniao"); us.append(u); fs.append(f)
for rid, _ in EXTRA:
    u, f = ffeat(rid, opcao="b", aviso=AVISO, papel="vizinho, FORA da uniao (so para a decisao)"); fs.append(f)
un = unary_union(us)
fs.insert(0, F(geom(un), name="Panama City (San Felipe + Santa Ana + El Chorrillo + Calidonia)", name_pt="Panama City", rotulo="Panama City", opcao="b", aviso=AVISO,
               papel="uniao", area_km2=round(area_km2(un), 2), osm="relations " + ",".join(str(r) for r, _ in NUCLEO), data_do_tracado="OSM, 15/10/2026", credito=OSM))
salvar("fc-opcao-b-cidade-do-panama.json", fc(fs))
us, fs = [], []
for rid in (11777523, 11777524):
    u, f = ffeat(rid, opcao="b", aviso=AVISO, papel="parte da uniao"); us.append(u); fs.append(f)
un = unary_union(us)
fs.insert(0, F(geom(un), name="Colón (Barrio Norte + Barrio Sur)", name_pt="Colón", rotulo="Colón", opcao="b", aviso=AVISO, papel="uniao", area_km2=round(area_km2(un), 2),
               osm="relations 11777523,11777524", data_do_tracado="OSM, 15/10/2026", credito=OSM))
salvar("fc-opcao-b-colon.json", fc(fs))
# ---------- a linha de 1936 refeita ----------
L36 = json.load(open(G + "linha-1914-panama.json"))["features"][0]["geometry"]["coordinates"]
AVL = LineString([(x*MX, y*MY) for x, y in av_c])
def sub(L, a, b):
    da, db = L.project(Point(a[0]*MX, a[1]*MY)), L.project(Point(b[0]*MX, b[1]*MY))
    s = substring(L, min(da, db), max(da, db)); c = list(s.coords)
    if da > db: c = c[::-1]
    return [r6((x/MX, y/MY)) for x, y in c]
# v1..v7 (a 4th of July Ave, a 0-13 m da avenida de hoje) -> a avenida do OSM; v8..v11 ficam da folha (a avenida de 1936 segue
# para nordeste ate a Av. Central, e a de hoje vira para o norte: 73-256 m); v11..v27 (o rio, a 1-124 m) -> o rio do OSM
trecho_av = sub(AVL, L36[1], L36[7])
if RIO_LINE.geom_type == "MultiLineString":   # o rio vem em pedacos; usa o pedaco continuo que passa junto a v11 e a v27
    pa_, pb_ = Point(L36[11][0]*MX, L36[11][1]*MY), Point(L36[27][0]*MX, L36[27][1]*MY)
    cands = [g for g in RIO_LINE.geoms if g.distance(pa_) < 60 and g.distance(pb_) < 100]
    print("pedacos do rio:", len(RIO_LINE.geoms), "| o que liga v11 a v27:", len(cands))
    RIO_USADO = cands[0]
else:
    RIO_USADO = RIO_LINE
trecho_rio = sub(RIO_USADO, L36[11], L36[27])
nova = [r6(L36[0])] + trecho_av + [r6(c) for c in L36[8:11]] + trecho_rio
dif = [Point(x*MX, y*MY).distance(LineString([(a*MX, b*MY) for a, b in nova])) for x, y in L36]
salvar("fc-linha-1914-panama-r2.json", fc([F({"type": "LineString", "coordinates": nova}, name="Canal Zone boundary (Panama City)", name_pt="the line", rotulo="the line",
       data_do_tracado="1936 (folha de out/1936) + OSM 15/10/2026 nos trechos da avenida e do rio",
       trechos="mar por Chorrillo (folha 1936) -> Av. de los Martires (OSM; era a 4th of July Ave) -> trecho ao norte ate a Av. Nacional (folha 1936) -> Rio Curundu (OSM)",
       comprimento_m=round(comp_m(nova)), credito=OSM,
       incerteza="avenida: a do OSM (a folha diz o caminho; 0-13 m da leitura de 1936); trecho norte e ponta do mar: +-40-90 m (folha 1936); rio: o curso de hoje, que difere 1-124 m (mediana ~45 m) do de 1936 (canalizado depois)")]))
print("avenida", len(av_c), "nos", round(comp_m(av_c)), "m | ponte", round(comp_m(pc)), "m | rio", len(rfeats), "vias |",
      "linha r2", len(nova), "pts", round(comp_m(nova)), "m; distancia dos vertices de 1936 a nova linha: max %.0f m" % max(dif))
print("Ancon %.1f km2" % area_km2(u_anc))
