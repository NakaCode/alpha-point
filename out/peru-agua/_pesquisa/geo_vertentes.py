"""As vertentes do Peru (Pacífico, Atlântico/Amazonas, Titicaca) e a divisória continental, de UMA fonte só:
HydroBASINS v1c, nível 6, América do Sul (hybas_sa_lev06_v1c), recortado pelo contorno do Peru do Natural Earth
(_media/geo/peru-ne.json, o mesmo arquivo que a cena usa).

Método (nada desenhado):
  1. cada bacia segue NEXT_DOWN até a bacia terminal (NEXT_DOWN = 0);
  2. a terminal decide a vertente: endorreica (ENDO = 2) no Altiplano -> titicaca; terminal com saída a leste de
     -60 de longitude -> atlantico (no Peru, só o Amazonas); terminal a oeste de -69 -> pacifico. Endorreica fora do
     Altiplano -> pacifico (é o critério da ANA: as cuencas endorreicas da costa contam no Pacífico) e vai listada;
  3. união por vertente, recorte pelo peru-ne, e `coverage_simplify` (GEOS) com o contorno do país INTACTO
     (simplify_boundary=False): as três vertentes continuam a fechar sem vão nem sobreposição;
  4. a divisória = as arestas compartilhadas entre as vertentes simplificadas (a MESMA linha nos polígonos e no traço);
  5. áreas no elipsoide WGS84, pela projeção cilíndrica de área igual de Lambert (exata em área).
uso: python -P geo_vertentes.py <pasta-hybas-lev06> <saida-dir> [tol_graus=0.003]
"""
import sys, json, math, os
import shapefile
from shapely.geometry import shape, mapping, Polygon, MultiPolygon, LineString, MultiLineString
from shapely.ops import unary_union, linemerge, transform
import shapely

A, F = 6378137.0, 1 / 298.257223563
E2 = F * (2 - F); E = math.sqrt(E2)


def q(phi):
    s = math.sin(phi)
    return (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * math.log((1 - E * s) / (1 + E * s)))


def cea(x, y, z=None):
    # Lambert cilíndrica de área igual no elipsoide (k0 = 1): x = a*lambda, y = a*q/2
    import numpy as np
    xs = np.asarray(x, dtype=float); ys = np.asarray(y, dtype=float)
    lam = np.radians(xs); s = np.sin(np.radians(ys))
    qq = (1 - E2) * (s / (1 - E2 * s * s) - (1 / (2 * E)) * np.log((1 - E * s) / (1 + E * s)))
    return A * lam, A * qq / 2


def area_km2(g):
    return transform(cea, g).area / 1e6


def main():
    pasta, saida = sys.argv[1], sys.argv[2]
    tol = float(sys.argv[3]) if len(sys.argv) > 3 else 0.003
    r = shapefile.Reader(os.path.join(pasta, "hybas_sa_lev06_v1c"))
    campos = [f[0] for f in r.fields[1:]]
    bac = {}
    for sr in r.iterShapeRecords():
        d = dict(zip(campos, sr.record))
        bac[d["HYBAS_ID"]] = (d, sr.shape)
    term = {}

    def terminal(i):
        cam = []
        while True:
            if i in term:
                t = term[i]; break
            d = bac[i][0]
            cam.append(i)
            if d["NEXT_DOWN"] == 0:
                t = i; break
            i = d["NEXT_DOWN"]
        for c in cam:
            term[c] = t
        return t

    peru = shape(json.load(open(os.path.join(saida, "peru-ne.json"), encoding="utf-8"))["features"][0]["geometry"])
    pb = peru.bounds
    grupos = {"pacifico": [], "atlantico": [], "titicaca": []}
    MANTARO = 6060539900  # HydroBASINS nível 6, PFAF 622999: a bacia do Mantaro (34.669 km²), cabeceira do Ene/Tambo
    mantaro_bruto = []
    endo_fora = []
    n_usadas = 0
    for i, (d, shp) in bac.items():
        bx = shp.bbox
        if bx[2] < pb[0] - 0.5 or bx[0] > pb[2] + 0.5 or bx[3] < pb[1] - 0.5 or bx[1] > pb[3] + 0.5:
            continue
        g = shape(shp.__geo_interface__)
        if not g.intersects(peru):
            continue
        n_usadas += 1
        t = terminal(i)
        td, tshp = bac[t]
        tc = shape(tshp.__geo_interface__).representative_point()
        if td["ENDO"] == 2 or d["ENDO"] in (1, 2):
            if -71.5 <= tc.x <= -66 and -20.5 <= tc.y <= -14:
                v = "titicaca"
            else:
                v = "pacifico"; endo_fora.append((i, round(tc.x, 3), round(tc.y, 3), round(d["SUB_AREA"], 1)))
        elif tc.x > -60:
            v = "atlantico"
        elif tc.x < -69:
            v = "pacifico"
        else:
            raise SystemExit(f"terminal ambígua {t} em {tc}")
        grupos[v].append(g.buffer(0))
        if i == MANTARO:
            mantaro_bruto.append(g.buffer(0))
    brutos = {}
    for v, gs in grupos.items():
        u = unary_union(gs).intersection(peru)
        brutos[v] = u
    # cobertura: garante que as três cobrem o Peru sem vão (o que o HydroBASINS não cobre no recorte vai listado)
    uni = unary_union(list(brutos.values()))
    vao = peru.difference(uni)
    # o vão é a diferença entre a costa/fronteira do NE e a do HydroBASINS (fitas finas): cada pedaço vai à
    # vertente com que ele divide mais borda; os pedaços e o destino vão ao relato
    vaos = []
    for p in getattr(vao, "geoms", [vao]):
        if p.is_empty or p.area == 0:
            continue
        viz = {k: p.buffer(1e-7).intersection(g.boundary).length for k, g in brutos.items()}
        k = max(viz, key=viz.get)
        if viz[k] == 0:
            k = min(brutos, key=lambda kk: brutos[kk].distance(p))
        vaos.append((k, round(area_km2(p), 3), round(p.centroid.x, 3), round(p.centroid.y, 3)))
        brutos[k] = unary_union([brutos[k], p])
    resumo_vaos = {}
    for k, a, x, y in vaos:
        resumo_vaos.setdefault(k, [0, 0.0]); resumo_vaos[k][0] += 1; resumo_vaos[k][1] = round(resumo_vaos[k][1] + a, 3)
    maiores_vaos = sorted(vaos, key=lambda t: -t[1])[:8]
    sobre = brutos["pacifico"].intersection(brutos["atlantico"]).area + brutos["pacifico"].intersection(brutos["titicaca"]).area
    mant = unary_union(mantaro_bruto).intersection(brutos["atlantico"])
    resto = brutos["atlantico"].difference(mant)
    cov = shapely.coverage_simplify([brutos["pacifico"], resto, brutos["titicaca"], mant], tol, simplify_boundary=False)
    cov = [shapely.make_valid(c) for c in cov]
    simp = {"pacifico": cov[0], "atlantico": unary_union([cov[1], cov[3]]), "titicaca": cov[2]}
    mantaro_simp = cov[3]

    def so_poligono(g):
        if isinstance(g, (Polygon, MultiPolygon)):
            return g
        ps = [x for x in getattr(g, "geoms", []) if isinstance(x, (Polygon, MultiPolygon))]
        return unary_union(ps)
    simp = {k: so_poligono(v) for k, v in simp.items()}

    def compart(a, b):
        li = a.boundary.intersection(b.boundary)
        ls = [x for x in getattr(li, "geoms", [li]) if isinstance(x, (LineString, MultiLineString))]
        m = linemerge(unary_union(ls)) if ls else None
        return m

    div = {"pacifico-atlantico": compart(simp["pacifico"], simp["atlantico"]),
           "pacifico-titicaca": compart(simp["pacifico"], simp["titicaca"]),
           "atlantico-titicaca": compart(simp["atlantico"], simp["titicaca"])}
    rel = {"bacias_nivel6_usadas": n_usadas, "por_vertente": {k: len(v) for k, v in grupos.items()},
           "endorreicas_fora_do_altiplano_como_pacifico": endo_fora,
           "vao_km2": round(area_km2(vao), 3), "vaos_atribuidos": resumo_vaos, "maiores_vaos": maiores_vaos, "sobreposicao_graus2": sobre, "tol_graus": tol,
           "area_km2_bruta": {k: round(area_km2(v), 1) for k, v in brutos.items()},
           "area_km2_simplificada": {k: round(area_km2(v), 1) for k, v in simp.items()},
           "area_peru_ne_km2": round(area_km2(peru), 1),
           "divisoria_km": {}}
    # comprimento geodésico aproximado (haversine por segmento)
    def comp_km(g):
        tot = 0
        for ln in getattr(g, "geoms", [g]):
            c = list(ln.coords)
            for (x1, y1), (x2, y2) in zip(c, c[1:]):
                p1, p2 = math.radians(y1), math.radians(y2)
                h = math.sin((p2 - p1) / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(math.radians(x2 - x1) / 2) ** 2
                tot += 2 * 6371.0088 * math.asin(math.sqrt(h))
        return tot
    for k, g in div.items():
        rel["divisoria_km"][k] = round(comp_km(g), 1) if g is not None and not g.is_empty else 0
    rel["vertices"] = {k: int(shapely.get_num_coordinates(v)) for k, v in simp.items()}
    rel["vertices_divisoria"] = {k: (int(shapely.get_num_coordinates(g)) if g is not None else 0) for k, g in div.items()}

    def rnd(g, n=5):
        return shapely.set_precision(g, 10 ** -n) if False else transform(lambda x, y, z=None: (__import__("numpy").round(x, n), __import__("numpy").round(y, n)), g)

    nomes = {"pacifico": ("PACIFIC SIDE", "Pacific side (Pacific drainage)"),
             "atlantico": ("AMAZON SIDE", "Amazon side (Atlantic drainage)"),
             "titicaca": ("LAKE TITICACA BASIN", "Lake Titicaca basin (closed drainage)")}
    for k, (rot, nome) in nomes.items():
        fc = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {
            "name": nome, "name_pt": rot, "rotulo": rot, "vertente": k,
            "area_km2": rel["area_km2_simplificada"][k], "area_sq_mi": round(rel["area_km2_simplificada"][k] / 2.589988, 0)},
            "geometry": mapping(rnd(simp[k]))}]}
        json.dump(fc, open(os.path.join(saida, f"_fc-vertente-{k}.json"), "w", encoding="utf-8"))
    feats = []
    for k, g in div.items():
        if g is None or g.is_empty:
            continue
        feats.append({"type": "Feature", "properties": {"name": "Continental divide", "name_pt": "CONTINENTAL DIVIDE",
                      "rotulo": "CONTINENTAL DIVIDE", "entre": k, "km": rel["divisoria_km"][k]}, "geometry": mapping(rnd(g))})
    json.dump({"type": "FeatureCollection", "features": feats}, open(os.path.join(saida, "_fc-divisoria.json"), "w", encoding="utf-8"))
    ms = so_poligono(mantaro_simp)
    rel["mantaro_km2"] = round(area_km2(ms), 1)
    json.dump({"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Mantaro River basin (whole basin; HydroBASINS level 6, PFAF 622999)",
        "rotulo": "upper Mantaro basin", "vertente": "atlantico", "area_km2": rel["mantaro_km2"], "area_sq_mi": round(rel["mantaro_km2"] / 2.589988, 0),
        "nota": "no nível 6 o Mantaro é uma bacia só; a 'cuenca alta' não se separa sem os níveis 7–12"}, "geometry": mapping(rnd(ms))}]},
        open(os.path.join(saida, "_fc-bacia-mantaro.json"), "w", encoding="utf-8"))
    json.dump(rel, open(os.path.join(saida, "_vertentes-relato.json"), "w", encoding="utf-8"), indent=1, ensure_ascii=False)
    print(json.dumps(rel, indent=1, ensure_ascii=False))


main()
