"""Parte B da geo do vídeo 4 (atlantico-fundo), 28/10/2026: o que não sai da GEBCO.
Costas e fronteiras (Census 2025 1:500k, Natural Earth 10m, OSM em Anegada), zonas econômicas (Marine Regions), o limite
das placas (USGS, a partir de Bird 2003), os cruzeiros do USGS de 2002–2003 (trilhas de navegação), as áreas de ruptura do
modelo de Wei et al. 2024 (Tabela 2), os pontos do dossiê pelos ids F/S, os oceanos, as linhas de 60°S e do equador.
Grava em _tmp/pesquisa-geo/fc/<slug>.json (+ .origem.json); medidas em _tmp/pesquisa-geo/medidas-superficie.json.
uso (de out/atlantico-fundo/): python -X utf8 -B -P _pesquisa/geo_superficie.py"""
import os, sys, json, math
import numpy as np
from shapely.geometry import Point, Polygon, MultiPolygon, LineString, MultiLineString, box, mapping, shape
from shapely.ops import unary_union, linemerge

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geo_gebco as G
import geo_util as U
import geo_shp

PROJ = G.PROJ
FC = os.path.join(G.TMP, "fc"); os.makedirs(FC, exist_ok=True)
BX = os.path.join(G.TMP, "baixado")
MED = {}
NE_ADMIN0 = "C:/projetos/regie-v1/acervo/geojson/ne10m-admin0-countries.json"
NE_DIR = "C:/Users/zangp/.regie/geo/natural-earth"
ANEL = (-67.311, 19.712)

O_NE = {"fonte": "Natural Earth 1:10m Admin 0 — Countries (ne10m-admin0-countries.json, v5.1)", "licenca": "Domínio público (Natural Earth) — sem crédito obrigatório; citável como fonte",
        "url": "https://www.naturalearthdata.com/about/terms-of-use/", "exige_credito": False}
O_CENSUS = {"fonte": "U.S. Census Bureau — Cartographic Boundary Files 2025, counties 1:500,000 (cb_2025_us_county_500k), Porto Rico (STATEFP 72)",
            "licenca": "Domínio público (U.S. Census Bureau: obra federal dos EUA, 17 U.S.C. §105) — sem crédito obrigatório",
            "url": "https://www2.census.gov/geo/tiger/GENZ2025/shp/cb_2025_us_county_500k.zip", "exige_credito": False}
O_OSM = {"fonte": "OpenStreetMap via Overpass API (28/10/2026, base OSM de 2026-10-28T17:33Z) — way/158313299 (natural=coastline, Anegada)",
         "licenca": "ODbL 1.0 — exige atribuição © OpenStreetMap contributors", "url": "https://www.openstreetmap.org/way/158313299", "exige_credito": True}
O_MR = {"fonte": "Flanders Marine Institute (2026): MarineRegions.org — Maritime Boundaries v12, WFS MarineRegions:eez (geo.vliz.be)",
        "licenca": "CC BY 4.0 (Marine Regions, desde a v11 de 2019; disclaimer lido em 28/10/2026) — citar; sem valor legal",
        "url": "https://www.marineregions.org/disclaimer.php", "exige_credito": True}
O_FATO = {"fonte": "Coordenada publicada, lida na fonte do dossiê", "licenca": "Fato (coordenada publicada); sem crédito de geometria — o crédito é o da fonte do dado na cena",
          "url": "pautas/atlantico-fundo/fundamento.json", "exige_credito": False}


def r5(g):
    from shapely import set_precision
    return set_precision(g, 1e-5)


def feat(geom, props, preciso=True):
    return {"type": "Feature", "properties": props, "geometry": mapping(r5(geom) if preciso else geom)}


def gravar(slug, feats, origem, extra=None):
    json.dump({"type": "FeatureCollection", "features": feats}, open(os.path.join(FC, slug + ".json"), "w", encoding="utf-8"), ensure_ascii=False, separators=(",", ":"))
    o = dict(origem); o.update(extra or {})
    json.dump(o, open(os.path.join(FC, slug + ".origem.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"  fc {slug}: {len(feats)} features")


def partes(g):
    return list(g.geoms) if g.geom_type.startswith("Multi") else [g]


def ne_pais(a3):
    ne = json.load(open(NE_ADMIN0, encoding="utf-8"))
    for f in ne["features"]:
        if f["properties"]["ADM0_A3"] == a3:
            return shape(f["geometry"])
    raise SystemExit("sem " + a3)


def ponto(lon, lat, props):
    return {"type": "Feature", "properties": props, "geometry": {"type": "Point", "coordinates": [round(lon, 6), round(lat, 6)]}}


# ---------------- Porto Rico (Census) ----------------
def porto_rico():
    print("Porto Rico (Census 2025)")
    zp = os.path.join(BX, "census", "cb_2025_us_county_500k.zip")
    fs, prj = geo_shp.features(zp, lambda r: r["STATEFP"] == "72")
    MED["census_prj"] = prj[:120]
    muni = {f["properties"]["GEOID"]: (f["properties"]["NAME"], shape(f["geometry"]).buffer(0)) for f in fs}
    pr = unary_union([g for _, g in muni.values()])
    ilhas = sorted(partes(pr), key=lambda p: -p.area)
    MED["porto_rico"] = {"municipios": len(muni), "partes": len(ilhas), "area_km2": round(U.area_km2(pr), 1), "bbox": [round(v, 4) for v in pr.bounds],
                         "vertices": sum(len(p.exterior.coords) for p in ilhas),
                         "maiores_partes": [{"area_km2": round(U.area_km2(p), 2), "ponto": [round(p.representative_point().x, 3), round(p.representative_point().y, 3)]} for p in ilhas[:8]],
                         "referencia": "Census: Porto Rico tem 8.868 km² de terra (3.424 mi²) — a área de terra do QuickFacts/Gazetteer"}
    print("  ", {k: v for k, v in MED["porto_rico"].items() if k != "maiores_partes"})
    gravar("porto-rico", [feat(pr, {"rotulo": "PUERTO RICO", "papel": "território (com Vieques, Culebra, Mona, Desecheo e as ilhotas)", "name_pt": "Puerto Rico"})], O_CENSUS,
           {"derivado_por": "geo_superficie.py: a união dos 78 municípios de Porto Rico (STATEFP 72) do cb_2025_us_county_500k; NAD83 lido como WGS84 (diferença < 2 m)",
            "sha256_fonte": G.sha256_arquivo(zp), "datum": "NAD83 (EPSG:4269)"})
    # Aguadilla
    nome, ag = muni["72005"]
    gravar("aguadilla-municipio", [feat(ag, {"rotulo": "Aguadilla", "papel": "município (Census, GEOID 72005)", "name_pt": "Aguadilla"})], O_CENSUS,
           {"derivado_por": "geo_superficie.py: GEOID 72005 do cb_2025_us_county_500k", "sha256_fonte": G.sha256_arquivo(zp)})
    # o ponto da costa das 83 mi (F04): conferido contra a costa do Census 2025
    lon, lat, d = U.ponto_mais_perto(*ANEL, pr)
    d_f04 = U.vincenty(*ANEL, -67.1145, 18.5130)
    dist_ag = ag.exterior.distance(Point(-67.1145, 18.5130)) if ag.geom_type == "Polygon" else min(p.exterior.distance(Point(-67.1145, 18.5130)) for p in partes(ag))
    MED["aguadilla_costa"] = {"F04_ponto": [-67.1145, 18.5130], "F04_km": 134.3, "vincenty_F04_km": round(d_f04 / 1000, 2),
                              "mais_perto_census2025": [round(lon, 5), round(lat, 5)], "mais_perto_km": round(d / 1000, 2), "mais_perto_mi": round(d / 1609.344, 2),
                              "dist_entre_os_dois_pontos_m": round(U.vincenty(lon, lat, -67.1145, 18.5130), 1),
                              "F04_dentro_de_aguadilla": ag.buffer(0.0005).contains(Point(-67.1145, 18.5130)), "F04_a_borda_de_aguadilla_m": round(dist_ag * 111320, 1),
                              "mais_perto_no_municipio": next((n for k, (n, g) in muni.items() if g.buffer(0.0003).contains(Point(lon, lat))), None)}
    print("  ", MED["aguadilla_costa"])
    gravar("aguadilla-costa-ponto", [ponto(-67.1145, 18.5130, {"rotulo": "Aguadilla", "papel": "o ponto da costa de onde saem as ≈ 83 MI (F04)", "fato": "F04",
                                                                  "km_ate_o_anel": round(d_f04 / 1000, 2), "mi_ate_o_anel": round(d_f04 / 1609.344, 2)})],
           dict(O_FATO, fonte="Dossiê F04 (S01, S55): o ponto da costa do Census 2023 1:500.000 mais perto do ponto do sonar; conferido contra o cb_2025"),
           {"derivado_por": "coordenada do F04; conferida por geo_superficie.py (Vincenty no WGS84)"})
    # a costa oeste: a costa da ilha principal nos municípios de Aguadilla a Mayagüez
    oeste = {"72005": "Aguadilla", "72003": "Aguada", "72117": "Rincón", "72011": "Añasco", "72097": "Mayagüez"}
    principal = ilhas[0]
    faixa = unary_union([muni[k][1].buffer(0.002) for k in oeste])
    costa = principal.exterior.intersection(faixa)
    costa = linemerge(costa) if costa.geom_type == "MultiLineString" else costa
    MED["costa_oeste"] = {"municipios": list(oeste.values()), "comprimento_km": round(U.comprimento_km(costa), 1), "partes": len(partes(costa)), "bbox": [round(v, 4) for v in costa.bounds]}
    print("  ", MED["costa_oeste"])
    gravar("costa-oeste-porto-rico", [feat(costa, {"rotulo": "west coast", "papel": "a costa da ilha principal de Aguadilla a Mayagüez (trecho declarado, F47)"})], O_CENSUS,
           {"derivado_por": "geo_superficie.py: o contorno da ilha principal (cb_2025) dentro dos municípios Aguadilla, Aguada, Rincón, Añasco e Mayagüez (+0,002°); sem Mona e Desecheo"})
    return pr, principal, muni


# ---------------- vizinhos (Natural Earth) e Anegada (OSM) ----------------
def vizinhos():
    print("Vizinhos (Natural Earth) e Anegada (OSM)")
    dom = ne_pais("DOM").simplify(0.002, preserve_topology=True)
    MED["republica_dominicana"] = {"area_km2": round(U.area_km2(dom)), "bbox": [round(v, 3) for v in dom.bounds], "partes": len(partes(dom))}
    gravar("republica-dominicana", [feat(dom, {"rotulo": "DOMINICAN REPUBLIC", "papel": "contexto (--contexto-2), sem bandeira", "name_pt": "Dominican Republic"})], O_NE,
           {"derivado_por": "geo_superficie.py: ADM0_A3=DOM do NE 10m, tol 0,002°"})
    vgb = ne_pais("VGB")
    gravar("ilhas-virgens-britanicas", [feat(vgb, {"rotulo": "BRITISH VIRGIN ISLANDS", "papel": "contexto, só rotulado, sem bandeira", "name_pt": "British Virgin Islands"})], O_NE,
           {"derivado_por": "geo_superficie.py: ADM0_A3=VGB do NE 10m, sem simplificar (6 partes)"})
    ane_ne = max((p for p in partes(vgb) if p.bounds[1] > 18.68), key=lambda p: p.area)
    # Anegada pelo OSM (way/158313299, natural=coastline, a ilha inteira)
    d = json.load(open(os.path.join(BX, "osm", "anegada-overpass.json"), encoding="utf-8"))
    w = next(e for e in d["elements"] if e["type"] == "way" and e["id"] == 158313299)
    anel = [(p["lon"], p["lat"]) for p in w["geometry"]]
    ane = Polygon(anel)
    if not ane.is_valid:
        ane = ane.buffer(0)
    if not ane.exterior.is_ccw:
        ane = Polygon(list(ane.exterior.coords)[::-1])
    MED["anegada"] = {"osm_vertices": len(anel), "fechado": anel[0] == anel[-1], "area_km2_osm": round(U.area_km2(ane), 2), "area_km2_ne": round(U.area_km2(ane_ne), 2),
                      "bbox_osm": [round(v, 4) for v in ane.bounds], "bbox_ne": [round(v, 4) for v in ane_ne.bounds], "ne_vertices": len(ane_ne.exterior.coords),
                      "osm_timestamp": d["osm3s"]["timestamp_osm_base"], "anel_km": round(U.vincenty(*ANEL, *ane.centroid.coords[0]) / 1000, 1)}
    print("  ", MED["anegada"])
    gravar("anegada", [feat(ane, {"rotulo": "Anegada", "papel": "ilha das British Virgin Islands; nunca 'U.S. island' (N24)", "name_pt": "Anegada"})], O_OSM,
           {"derivado_por": "geo_superficie.py: o anel do way/158313299 (natural=coastline, place=island) como polígono; sem simplificar",
            "alternativa_ne": "o NE 10m tem Anegada com %d vértices (pobre para a s45)" % len(ane_ne.exterior.coords)})
    # a costa norte: do ponto mais a oeste ao mais a leste, pelo lado de cima
    cs = list(ane.exterior.coords)[:-1]
    iw = min(range(len(cs)), key=lambda i: cs[i][0]); ie = max(range(len(cs)), key=lambda i: cs[i][0])
    def arco(i, j):
        out = [cs[i]]
        while i != j:
            i = (i + 1) % len(cs); out.append(cs[i])
        return LineString(out)
    a1, a2 = arco(iw, ie), arco(ie, iw)
    norte = a1 if np.mean([y for _, y in a1.coords]) > np.mean([y for _, y in a2.coords]) else a2
    MED["anegada_costa_norte"] = {"comprimento_km": round(U.comprimento_km(norte), 2), "comprimento_mi": round(U.comprimento_km(norte) / 1.609344, 2),
                                  "de": [round(c, 5) for c in norte.coords[0]], "ate": [round(c, 5) for c in norte.coords[-1]],
                                  "F51": "≈ 10 km (6,2 mi) de Bones Bight e Windlass Bight, a oeste, a Warner — os quatro nomes NÃO estão em fonte lida com coordenada nem no OSM (consulta de 28/10/2026)"}
    print("  ", MED["anegada_costa_norte"])
    gravar("anegada-costa-norte", [feat(norte, {"rotulo": "north shore", "papel": "a costa norte INTEIRA de Anegada (a que dá para a fossa), da ponta oeste à ponta leste; o trecho de ~10 km do F51 não está localizado"})],
           O_OSM, {"derivado_por": "geo_superficie.py: o arco norte do anel do way/158313299, entre o vértice mais a oeste e o mais a leste"})
    # Sandwich do Sul (NE): só o arco de ilhas, sem a Geórgia do Sul
    sgs = ne_pais("SGS")
    arco_ilhas = MultiPolygon([p for p in partes(sgs) if p.bounds[0] > -29.0])
    MED["ilhas_sandwich_do_sul"] = {"ilhas": len(partes(arco_ilhas)), "bbox": [round(v, 3) for v in arco_ilhas.bounds],
                                    "extensao_norte_sul_km": round(U.vincenty(-27.5, arco_ilhas.bounds[3], -27.5, arco_ilhas.bounds[1]) / 1000, 1), "F86": "~350 km"}
    print("  ", MED["ilhas_sandwich_do_sul"])
    gravar("ilhas-sandwich-do-sul", [feat(arco_ilhas, {"rotulo": "SOUTH SANDWICH ISLANDS", "papel": "o arco de ilhas, só o nome, sem bandeira e sem dono (R09, N15)", "name_pt": "South Sandwich Islands"})],
           O_NE, {"derivado_por": "geo_superficie.py: as partes do ADM0_A3=SGS do NE 10m a leste de 29°W (as 11 ilhas do arco; a Geórgia do Sul fica fora)"})
    # Mount Michael: o centro da ilha Saunders (NE), declarado
    sau = next(p for p in partes(sgs) if p.bounds[1] < -57.7 and p.bounds[3] > -57.8)
    c = sau.representative_point() if not sau.contains(sau.centroid) else sau.centroid
    MED["mount_michael"] = {"ilha_saunders_bbox": [round(v, 4) for v in sau.bounds], "ponto": [round(c.x, 4), round(c.y, 4)], "area_ilha_km2": round(U.area_km2(sau), 1)}
    gravar("mount-michael-saunders", [ponto(c.x, c.y, {"rotulo": "Mount Michael", "papel": "o vulcão da ilha Saunders: o ponto é o CENTRO da ilha (NE 10m), não o cume lido; a altura fica fora (F87)"}),
                                      feat(sau, {"rotulo": "Saunders Island", "papel": "a ilha do Mount Michael (NE 10m)"})],
           O_NE, {"derivado_por": "geo_superficie.py: o centroide do polígono da ilha Saunders do NE 10m; o cume (Global Volcanism Program) não foi lido (A08)"})
    # San Juan (NE populated places)
    pp = json.load(open(os.path.join(NE_DIR, "ne_10m_populated_places_simple.geojson"), encoding="utf-8"))
    sj = [f for f in pp["features"] if f["properties"].get("name") == "San Juan" and f["properties"].get("adm0_a3") == "PRI"]
    x, y = sj[0]["geometry"]["coordinates"]
    MED["san_juan"] = {"ne_ponto": [x, y], "km_ate_o_anel": round(U.vincenty(*ANEL, x, y) / 1000, 1), "mi_ate_o_anel": round(U.vincenty(*ANEL, x, y) / 1609.344, 1), "F17": "~116 mi (conta da Sala)"}
    print("  ", MED["san_juan"])
    gravar("san-juan", [ponto(x, y, {"rotulo": "San Juan", "papel": "só para ancorar a foto da ISS; nunca origem das 83 mi (N26)"})],
           dict(O_NE, fonte="Natural Earth 1:10m Populated Places Simple (ne_10m_populated_places_simple)"), {"derivado_por": "geo_superficie.py: name=San Juan, adm0_a3=PRI"})
    # a costa dominicana mais perto do anel (F16): La Altagracia
    dom_full = ne_pais("DOM")
    lon, lat, dd = U.ponto_mais_perto(*ANEL, dom_full)
    MED["costa_dominicana"] = {"ponto": [round(lon, 5), round(lat, 5)], "km": round(dd / 1000, 2), "mi": round(dd / 1609.344, 2), "F16": "160,4 km (99,7 mi), em La Altagracia, no NE 10m"}
    print("  ", MED["costa_dominicana"])
    gravar("costa-dominicana-la-altagracia", [ponto(lon, lat, {"rotulo": "Dominican coast", "papel": "o ponto da costa dominicana mais perto do anel (F16), o fim da linha de ≈ 100 MI",
                                                              "km_ate_o_anel": round(dd / 1000, 2), "mi_ate_o_anel": round(dd / 1609.344, 2)})],
           O_NE, {"derivado_por": "geo_superficie.py: o ponto da costa do ADM0_A3=DOM (NE 10m, densificada a ~30 m) mais perto de 19,712°N, 67,311°W, por Vincenty"})
    return dom_full, ane


# ---------------- a região entre a costa norte e a fossa; a Passagem de Mona ----------------
def regioes(pr, principal, dom):
    print("Regiões declaradas")
    fossa = shape(json.load(open(os.path.join(FC, "fossa-porto-rico.json"), encoding="utf-8"))["features"][0]["geometry"])
    x0, y0, x1, y1 = principal.bounds
    caixa = box(x0, 18.42, x1, fossa.bounds[3])   # 18,42°N: abaixo da costa norte (18,43–18,52°N), sem o mar das costas oeste e leste
    resto = caixa.difference(fossa).difference(pr.buffer(0.0005))
    faixa = max((p for p in partes(resto) if p.distance(principal) < 0.01 and p.representative_point().y > 18.4), key=lambda p: p.area)
    # só o que fica ao sul da fossa: corta o que sobra ao norte dela (pelo lado de cima da caixa)
    faixa = faixa.simplify(0.002, preserve_topology=True)
    MED["mar_ao_norte"] = {"area_km2": round(U.area_km2(faixa)), "bbox": [round(v, 4) for v in faixa.bounds]}
    print("  ", MED["mar_ao_norte"])
    gravar("mar-ao-norte-de-porto-rico", [feat(faixa, {"rotulo": "north of Puerto Rico", "papel": "faixa DECLARADA: o mar entre a costa norte da ilha principal e a borda sul da fossa (7.000 m), entre as longitudes extremas da ilha"})],
           dict(O_CENSUS, fonte="Derivada: costa do Census 2025 (cb_2025_us_county_500k) e a isóbata de 7.000 m da GEBCO 2026 (fossa-porto-rico)",
                licenca="Domínio público (Census) + domínio público com reconhecimento da fonte (GEBCO)", exige_credito=True),
           {"derivado_por": "geo_superficie.py: caixa (longitudes da ilha principal; de 18,42°N até o norte da fossa) − fossa − terra; o pedaço que encosta na costa norte"})
    # Passagem de Mona: entre a costa leste da Hispaniola (NE) e a costa oeste de Porto Rico (Census), declarada
    lat_n, lat_s = 18.6, 17.95
    caixa = box(-68.75, lat_s, -67.15, lat_n)
    mona = caixa.difference(dom.buffer(0.001)).difference(pr.buffer(0.001))
    mona = max(partes(mona), key=lambda p: p.area).simplify(0.002, preserve_topology=True)
    MED["passagem_de_mona"] = {"area_km2": round(U.area_km2(mona)), "bbox": [round(v, 4) for v in mona.bounds], "limites_declarados": {"norte": lat_n, "sul": lat_s},
                               "largura_minima_km": round(U.vincenty(-68.33, 18.6, -67.15, 18.5) / 1000, 1)}
    print("  ", MED["passagem_de_mona"])
    gravar("passagem-de-mona", [feat(mona, {"rotulo": "Mona Passage", "papel": f"trecho DECLARADO: o mar entre as duas costas, de {lat_s}°N a {lat_n}°N (as ilhas Mona e Desecheo ficam como buracos)"})],
           dict(O_NE, fonte="Derivada: costa da República Dominicana (NE 10m) e de Porto Rico (Census 2025); limites norte e sul declarados (não há polígono lido da passagem)",
                licenca="Domínio público (NE e Census) — sem crédito obrigatório"),
           {"derivado_por": f"geo_superficie.py: caixa 68,75–67,15°W × {lat_s}–{lat_n}°N menos as terras; o maior pedaço"})


# ---------------- zonas econômicas (Marine Regions) ----------------
def zonas():
    print("Zonas econômicas (Marine Regions)")
    d = json.load(open(os.path.join(BX, "marineregions", "eez-pr-rd.json"), encoding="utf-8"))
    sob = json.load(open(os.path.join(BX, "marineregions", "eez-sobreposicao-pr-rd.json"), encoding="utf-8"))
    lim = json.load(open(os.path.join(BX, "marineregions", "eez-limites-mona.json"), encoding="utf-8"))
    g = {f["properties"]["mrgid"]: shape(f["geometry"]) for f in d["features"]}
    us, rd = g[33179], g[8409]
    sp = next(shape(f["geometry"]) for f in sob["features"] if f["properties"]["mrgid"] == 48982)
    P = {"anel_F10": ANEL, "estimativa_2019_F15": (-67.847, 19.613), "lyman_1954": (-68.31667, 19.6), "blake_F23": (-66.3944, 19.6806), "lista_F29": (-66.5, 19.5833),
         "challenger_F22": (-65.1167, 19.7)}
    onde = {k: ("EUA (Porto Rico)" if us.contains(Point(p)) else "República Dominicana" if rd.contains(Point(p)) else "sobreposição EUA/RD" if sp.contains(Point(p)) else "nenhuma") for k, p in P.items()}
    fossa = shape(json.load(open(os.path.join(FC, "fossa-porto-rico.json"), encoding="utf-8"))["features"][0]["geometry"])
    mais_fundo = shape(json.load(open(os.path.join(FC, "fossa-porto-rico-trecho-mais-fundo.json"), encoding="utf-8"))["features"][0]["geometry"])
    fronteira = us.boundary.intersection(rd.buffer(1e-4))
    fronteira = linemerge(fronteira) if fronteira.geom_type == "MultiLineString" else fronteira
    MED["zee"] = {"pontos": onde, "area_km2": {"eua_pr": round(U.area_km2(us)), "rd": round(U.area_km2(rd)), "sobreposicao": round(U.area_km2(sp))},
                  "sobreposicao_bbox": [round(v, 3) for v in sp.bounds],
                  "fossa_7000_km2_por_zona": {"eua_pr": round(U.area_km2(fossa.intersection(us))), "rd": round(U.area_km2(fossa.intersection(rd))), "sobreposicao": round(U.area_km2(fossa.intersection(sp)))},
                  "trecho_8000_km2_por_zona": {"eua_pr": round(U.area_km2(mais_fundo.intersection(us))), "rd": round(U.area_km2(mais_fundo.intersection(rd))), "sobreposicao": round(U.area_km2(mais_fundo.intersection(sp)))},
                  "fronteira_direta_eua_rd_km": round(U.comprimento_km(fronteira), 1) if not fronteira.is_empty else 0, "fronteira_bbox": [round(v, 3) for v in fronteira.bounds] if not fronteira.is_empty else None,
                  "anel_a_sobreposicao_km": round(sp.distance(Point(ANEL)) * 111.32 * math.cos(math.radians(19.7)), 1), "anel_a_zona_rd_km": round(rd.distance(Point(ANEL)) * 111.32 * math.cos(math.radians(19.7)), 1)}
    print("  ", MED["zee"])
    ex = {"pedido": "WFS MarineRegions:eez, CQL mrgid IN (33179, 8409); a sobreposição por geoname; os limites por BBOX -69,5,17,-66,22 (MarineRegions:eez_boundaries)",
          "citacao": "Flanders Marine Institute (2026): MarineRegions.org. Available online at www.marineregions.org. Consulted on 2026-10-28.",
          "aviso": "VLIZ: 'The data has no legal value whatsoever'; zona econômica não é território (N32)"}
    gravar("zee-eua-porto-rico", [feat(us, {"rotulo": "U.S. EXCLUSIVE ECONOMIC ZONE", "mrgid": 33179, "geoname": "United States Exclusive Economic Zone (Puerto Rico)", "papel": "zona econômica, não território (N32)"}, preciso=False)],
           O_MR, dict(ex, derivado_por="geo_superficie.py: MRGID 33179 como veio do WFS"))
    gravar("zee-republica-dominicana", [feat(rd, {"rotulo": "DOMINICAN REPUBLIC EEZ", "mrgid": 8409, "geoname": "Dominican (Republic) Exclusive Economic Zone"}, preciso=False)],
           O_MR, dict(ex, derivado_por="geo_superficie.py: MRGID 8409 como veio do WFS"))
    gravar("zee-sobreposicao-eua-rd", [feat(sp, {"mrgid": 48982, "geoname": "Overlapping claim: United States (Puerto Rico) / Dominican Republic", "papel": "área reivindicada pelos dois; na Marine Regions não pertence a nenhuma das duas zonas"}, preciso=False)],
           O_MR, dict(ex, derivado_por="geo_superficie.py: MRGID 48982 como veio do WFS"))
    feats = []
    for f in lim["features"]:
        p = f["properties"]
        if p["line_id"] in (3344, 3602, 2041):
            feats.append({"type": "Feature", "properties": {k: p[k] for k in ("line_id", "line_name", "line_type", "source1", "doc_date", "length_km")}, "geometry": f["geometry"]})
    gravar("zee-limites-eua-rd", feats, O_MR, dict(ex, derivado_por="geo_superficie.py: as linhas 3344 (RD–Porto Rico, linha mediana da VLIZ), 3602 e 2041 (as bordas da sobreposição) do eez_boundaries"))


# ---------------- o limite das placas (USGS) ----------------
def placas():
    print("Limite das placas (USGS, Bird 2003)")
    d = json.load(open(os.path.join(BX, "usgs", "placas-camada1-caribe.json"), encoding="utf-8"))
    fs = [f for f in d["features"] if f["properties"]["NAME"] == "North American:Caribbean"]
    linhas = [shape(f["geometry"]) for f in fs]
    fossa = shape(json.load(open(os.path.join(FC, "fossa-porto-rico.json"), encoding="utf-8"))["features"][0]["geometry"])
    ml = unary_union(linhas)
    dentro = ml.intersection(fossa)
    MED["placas"] = {"segmentos": len(fs), "vertices": sum(len(l.coords) for l in linhas), "bbox": [round(v, 3) for v in ml.bounds],
                     "km_total_na_janela": round(U.comprimento_km(ml), 1), "km_dentro_da_fossa_7000": round(U.comprimento_km(dentro), 1) if not dentro.is_empty else 0,
                     "rotulos": sorted({f["properties"]["LABEL"] for f in fs})}
    print("  ", MED["placas"])
    gravar("limite-placas-norte-americana-caribe", [{"type": "Feature", "properties": {**f["properties"], "papel": "limite NA–CA (modelo PB2002)"}, "geometry": f["geometry"]} for f in fs],
           {"fonte": "USGS, serviço Tectonic Plate Boundaries (earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries, camada 1 'Plates'), a partir de Bird (2003) PB2002",
            "licenca": "Domínio público (USGS, obra federal) — o serviço cita Bird, P. (2003), G³ 4(3), doi:10.1029/2001GC000252; sem crédito na tela, a citação na descrição",
            "url": "https://earthquake.usgs.gov/arcgis/rest/services/eq/map_plateboundaries/MapServer/1", "exige_credito": False},
           {"derivado_por": "geo_superficie.py: os 7 segmentos 'North American:Caribbean' que cruzam 75–58°W × 14–26°N, como vieram (WGS84)"})


# ---------------- os cruzeiros do USGS de 2002–2003 ----------------
def cruzeiros():
    print("Cruzeiros USGS 2002–2003 (trilhas)")
    feats = []
    for nome, cruzeiro, datas in [("nav2002", "USGS 02051 / NOAA RB0208", "2002-09-24 a 2002-09-30"), ("nav2003", "USGS 03008 / NOAA RB0303", "2003-02-18 a 2003-03-07"),
                                  ("nav2003aug", "USGS 03032 / NOAA RB0305", "2003-08-28 a 2003-09-04")]:
        fs, prj = geo_shp.features(os.path.join(BX, "usgs", nome + ".zip"))
        ls = unary_union([shape(f["geometry"]) for f in fs if f["geometry"]])
        ls = ls.simplify(0.002)
        feats.append(feat(ls, {"cruzeiro": cruzeiro, "datas": datas, "papel": "trilha do navio Ronald H. Brown (NOAA) com o multifeixe SeaBeam 2112", "km": round(U.comprimento_km(ls))}))
        MED["cruzeiro_" + nome] = {"registros": len(fs), "km": round(U.comprimento_km(ls)), "bbox": [round(v, 3) for v in ls.bounds], "prj": prj[:60]}
        print("  ", nome, MED["cruzeiro_" + nome])
    gravar("levantamento-usgs-2002-2003", feats,
           {"fonte": "USGS Open-File Report 2006-1210 (ten Brink, Danforth et al.): Navigation Tracklines nav2002, nav2003, nav2003aug (shapefiles)",
            "licenca": "Domínio público (USGS/NOAA: 'Public domain data from the U.S. government are freely redistributable with proper metadata and source attribution'); reconhecer USGS e NOAA",
            "url": "https://pubs.usgs.gov/of/2006/1210/html/catalog.htm", "exige_credito": False},
           {"derivado_por": "geo_superficie.py: as trilhas dos 3 cruzeiros, simplificadas a 0,002°; a área coberta pelo multifeixe NÃO é polígono lido (a grade combinada do OFR fica nos limites 69,70–61,50°W × 16,36–22,69°N, pelo metadado)",
            "limites_da_grade_combinada": {"oeste": -69.702916, "leste": -61.503357, "norte": 22.693986, "sul": 16.363297}})


# ---------------- as áreas de ruptura do modelo de Wei et al. 2024 ----------------
def rupturas():
    print("Áreas de ruptura (Wei et al. 2024, Tabela 2)")
    T = {"C": (64.957413, 19.071085, 130.7, 90, 15, 94.4), "D": (64.061490, 19.040467, 51.6, 90, 15, 91.0), "E": (63.556372, 18.999278, 74.0, 90, 15, 97.0),
         "N": (63.957207, 19.807328, 132.0, 45, 60, 101.3)}
    feats = []
    for seg, (lonW, lat, L, W, dip, strike) in T.items():
        lon = -lonW
        h = W * math.cos(math.radians(dip)) * 1000
        a = U.vincenty_direto(lon, lat, strike, L * 500); b = U.vincenty_direto(lon, lat, strike + 180, L * 500)   # a borda de baixo, centrada no ponto
        a2 = U.vincenty_direto(*a, strike - 90, h); b2 = U.vincenty_direto(*b, strike - 90, h)                    # a borda de cima, a W·cos(mergulho) para o lado oposto ao mergulho
        pol = Polygon([b, a, a2, b2, b])
        if not pol.exterior.is_ccw:
            pol = Polygon(list(pol.exterior.coords)[::-1])
        cen = "CDE M8.45 (megaempuxo, 7,5 m)" if seg != "N" else "N M8.17 (falha normal do 'outer rise', 11,4 m)"
        feats.append(feat(pol, {"segmento": seg, "cenario": cen, "comprimento_km": L, "largura_km": W, "mergulho": dip, "rumo": strike,
                                "projecao_horizontal_km": round(h / 1000, 1), "papel": "projeção na superfície do plano de falha do MODELO (não é ruptura observada)"}))
    cde = unary_union([shape(f["geometry"]) for f in feats if f["properties"]["segmento"] != "N"])
    ane = shape(json.load(open(os.path.join(FC, "anegada.json"), encoding="utf-8"))["features"][0]["geometry"])
    MED["rupturas"] = {"cde_km2": round(U.area_km2(cde)), "n_km2": round(U.area_km2(shape(feats[-1]["geometry"]))),
                       "distancia_anegada_a_cde_km": round(cde.distance(ane) * 111.32 * math.cos(math.radians(18.7)), 1) if not cde.intersects(ane) else 0,
                       "anegada_dentro_cde": cde.intersects(ane), "bbox_cde": [round(v, 3) for v in cde.bounds], "bbox_n": [round(v, 3) for v in shape(feats[-1]["geometry"]).bounds]}
    print("  ", MED["rupturas"])
    gravar("rupturas-wei-2024", feats,
           {"fonte": "Wei, ten Brink & Atwater (2024), JGR Solid Earth 129(3) e2023JB028387, Tabela 2 (segmentos C, D, E e N) — cópia local midia/atlantico-fundo/fontes/fa-noaa-ir-61168-wei-2024-jgr.pdf",
            "licenca": "CC BY 4.0 — citar Wei, ten Brink & Atwater (2024)", "url": "https://doi.org/10.1029/2023JB028387", "exige_credito": True},
           {"derivado_por": "geo_superficie.py: o ponto da Tabela 2 é o centro da borda de baixo do plano; a borda de baixo tem o comprimento L no rumo; a de cima fica a W·cos(mergulho) na direção rumo−90° (Vincenty direta). Cenários pela Tabela 3 e pelo texto (CDE M8.45; N M8.17)"})


# ---------------- pontos do dossiê ----------------
def pontos():
    print("Pontos do dossiê")
    dm = lambda d, m, s=0: d + m / 60 + s / 3600
    L = [("ponto-mais-fundo-atlantico", -67.311, 19.712, "the deepest point", "F10 (S01 Tabela 1 e §3.1; S03)", "o ANEL: o mesmo ponto em todo o vídeo; 8.378 ± 5 m"),
         ("estimativa-2019-stewart-jamieson", -67.847, 19.613, "2019 ESTIMATE", "F15 (S02)", "a estimativa de 2019, 8.408 m, na zona da República Dominicana"),
         ("sondagem-blake-1883", -dm(66, 23, 40), dm(19, 40, 50), "1883 · BLAKE", "F23 (S11, relatório de 1883, p. 46)", "19°40'50\"N, 66°23'40\"W; ~60 mi a leste do anel"),
         ("sondagem-challenger", -dm(65, 7), dm(19, 42), "HMS CHALLENGER", "F22 (S12, IHR 1936)", "19°42'N, 65°07'W; sem o ano (em disputa: N52)"),
         ("milwaukee-deep-lista-antiga", -66.5, dm(19, 35), "MILWAUKEE DEEP · LISTED", "F29 (S02 Tabela 1: GEBCO Gazetteer)", "19°35'N, 66°30'W; onde o estudo de 2019 achou a crista (F30)"),
         ("milwaukee-deep-lyman-1954", -68.31667, 19.6, "LYMAN 1954", "S02 Tabela 1 (Lyman 1954: 8.710 m, Theodore N. Gill, 1952)", "19,6°N, 68,31667°W; o 'Milwaukee Deep' de Lyman; ~118 mi a oeste da lista (F29)"),
         ("mergulho-ex1502-dive09", -dm(65, 24), dm(19, 9), "2015 · NOAA ROBOT", "F68 (S32–S35, S58)", "19°09'N, 65°24'W; o mergulho junto à parede sul: o robô desceu a 5.999,7 m e voltou sem chegar ao fundo (S32: 'Bottom Time: N/A')"),
         ("meteor-deep", -26.173, -55.230, "Meteor Deep", "F75 (S01 Tabela 1; o gazetteer IHO-IOC dá 55,23069°S, 26,17294°W)", "nunca 55,323°S, 26,294°W (o ponto de referência da Marine Regions, a 12,9 km: C03)"),
         ("challenger-deep", 142.587, 11.369, "Challenger Deep", "S01 Tabela 1 (Mariana Trench/Challenger Deep, 10.924 ± 15 m)", "o ponto da Five Deeps no Challenger Deep; a NOAA (S25) dá 'approximately 10,935 meters' sem coordenada")]
    for slug, lon, lat, rot, fonte, nota in L:
        km = U.vincenty(*ANEL, lon, lat) / 1000
        gravar(slug, [ponto(lon, lat, {"rotulo": rot, "fato": fonte, "nota": nota, "km_ate_o_anel": round(km, 2), "mi_ate_o_anel": round(km / 1.609344, 2)})],
               dict(O_FATO, fonte=fonte), {"derivado_por": "coordenada da fonte, sem mudança (graus e minutos convertidos a decimal)"})
        MED.setdefault("pontos", {})[slug] = {"lon": round(lon, 6), "lat": round(lat, 6), "km_ate_o_anel": round(km, 2), "mi_ate_o_anel": round(km / 1.609344, 2)}
    print("  ", MED["pontos"])
    # os cinco pontos da Five Deeps (S01 Tabela 1), um por oceano, SEM o nome dos outros quatro
    cinco = [("Arctic", 2.706, 79.194), ("Atlantic", -67.311, 19.712), ("Southern", -25.542, -60.479), ("Indian", 114.942, -11.129), ("Pacific", 142.587, 11.369)]
    gravar("cinco-oceanos-five-deeps", [ponto(x, y, {"oceano": o, "papel": "o ponto mais fundo deste oceano pela Five Deeps (S01, Tabela 1); SEM nome do lugar (decisão 'Enxugar o Atlântico Sul', 26/10)"}) for o, x, y in cinco],
           dict(O_FATO, fonte="S01 (Bongiovanni, Stewart & Jamieson 2021, Geoscience Data Journal, Tabela 1, CC BY 4.0)"), {"derivado_por": "as 5 linhas da Tabela 1, uma por oceano (o Atlântico é Porto Rico; o Austral, o ponto ao sul de 60°S)"})


# ---------------- oceanos, 60°S, equador ----------------
def oceanos_linhas():
    print("Oceanos (NE), 60°S e equador")
    d = json.load(open(os.path.join(NE_DIR, "ne_10m_geography_marine_polys.geojson"), encoding="utf-8"))
    nomes = {"North Atlantic Ocean": "ATLANTIC", "South Atlantic Ocean": "ATLANTIC", "North Pacific Ocean": "PACIFIC", "South Pacific Ocean": "PACIFIC",
             "INDIAN OCEAN": "INDIAN", "Arctic Ocean": "ARCTIC", "SOUTHERN OCEAN": "SOUTHERN"}
    feats = []
    for f in d["features"]:
        n = f["properties"].get("name")
        if n in nomes:
            g = shape(f["geometry"]).simplify(0.05, preserve_topology=True)
            feats.append(feat(g, {"name_ne": n, "oceano": nomes[n], "papel": "área de rótulo do Natural Earth (não é o limite da IHO)"}))
    gravar("oceanos-ne", feats, dict(O_NE, fonte="Natural Earth 1:10m Geography Marine Polys (ne_10m_geography_marine_polys), featurecla=ocean"),
           {"derivado_por": "geo_superficie.py: os 7 polígonos de oceano do NE, tol 0,05° (áreas de rótulo, não limites)"})
    MED["oceanos"] = [f["properties"]["name_ne"] for f in feats]
    lon = np.linspace(-180, 180, 721)
    gravar("paralelo-60s", [feat(LineString([(float(x), -60.0) for x in lon]), {"rotulo": "60°S", "papel": "o limite norte do Oceano Austral (IHO, Res. 02/2023; F81)"}, preciso=False)],
           {"fonte": "Linha matemática: o paralelo de 60°S (IHO Res. 02/2023, F81)", "licenca": "Não se aplica (linha de coordenada)", "url": "pautas/atlantico-fundo/fundamento.json", "exige_credito": False},
           {"derivado_por": "geo_superficie.py: 721 vértices de 180°W a 180°E em 60°S"})
    gravar("linha-do-equador", [feat(LineString([(float(x), 0.0) for x in lon]), {"rotulo": "Equator", "papel": "a linha do equador"}, preciso=False)],
           {"fonte": "Linha matemática: o equador", "licenca": "Não se aplica (linha de coordenada)", "url": "pautas/atlantico-fundo/fundamento.json", "exige_credito": False},
           {"derivado_por": "geo_superficie.py: 721 vértices de 180°W a 180°E em 0°"})


if __name__ == "__main__":
    pr, principal, muni = porto_rico()
    dom, ane = vizinhos()
    regioes(pr, principal, dom)
    zonas()
    placas()
    cruzeiros()
    rupturas()
    pontos()
    oceanos_linhas()
    json.dump(MED, open(os.path.join(G.TMP, "medidas-superficie.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1, default=str)
    print("ok")
