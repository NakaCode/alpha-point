# Aplica ao medir_pedacos.py: inclui o canal da eclusa 3 (é o trecho do canal principal) e fecha a lacuna de 43,58° N
# (eclusa 8) com um segmento reto; grava as faces >= 0,1 km2 em resolução cheia (WKT) no bruto, fora do git.
import os
p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "medir_pedacos.py")
s = open(p, encoding="utf-8").read()
s = s.replace('''    if e["tags"].get("waterway") != "river":
        print("fora (não é river):", e["id"], e["tags"].get("waterway"), e["tags"].get("name"))
        continue
    vias.append''', '''    if e["tags"].get("waterway") != "river":
        print("incluído (canal da eclusa, no curso principal):", e["id"], e["tags"].get("waterway"), e["tags"].get("lock_name"))
    vias.append''')
s = s.replace('''rio = linemerge(vias)
''', '''# a lacuna da eclusa 8 (43,58° N): as pontas das duas partes se ligam por um segmento reto
rio0 = linemerge(vias)
pontas = [(list(g.coords)[0], list(g.coords)[-1]) for g in rio0.geoms]
for (a0, a1) in pontas:
    for (b0, b1) in pontas:
        if a1 != b0 and abs(a1[1] - b0[1]) < 0.02 and abs(a1[0] - b0[0]) < 0.02 and a1[1] < 44.0:
            vias.append(LineString([a1, b0])); print("lacuna fechada: %.4f,%.4f -> %.4f,%.4f" % (a1[1], a1[0], b0[1], b0[0]))
rio = linemerge(vias)
''')
s = s.replace('''json.dump(saida, open(os.path.join(AQUI, "pedacos.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)''',
'''json.dump(saida, open(os.path.join(AQUI, "pedacos.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=0)
json.dump([{"i": i, "wkt": f.wkt} for i, f in enumerate(faces) if area_km2(f) >= 0.1], open(os.path.join(BRUTO, "faces-wkt.json"), "w", encoding="utf-8"))''')
s = s.replace("from shapely.ops import unary_union, polygonize, linemerge, transform", "from shapely.ops import unary_union, polygonize, linemerge, transform\nimport warnings; warnings.filterwarnings('ignore', category=DeprecationWarning)")
open(p, "w", encoding="utf-8").write(s)
print("ok")
