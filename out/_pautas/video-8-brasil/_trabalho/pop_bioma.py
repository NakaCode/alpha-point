# Quantos brasileiros moram em cada bioma (pela sede municipal; Censo 2022), e a densidade de cada um.
# Dados: IBGE Biomas 1:250.000 (2019), IBGE Localidades 2022, IBGE Censo 2022. Uso: python -X utf8 -B pop_bioma.py
import sys, os
import shapefile, shapely
from shapely.geometry import shape, Point
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import Albers, area_km2
from xlsx_ler import linhas

AQUI = os.path.dirname(os.path.abspath(__file__))
MID = os.path.abspath(os.path.join(AQUI, "..", "..", "..", "..", "midia", "_pautas", "video-8-brasil"))
alb = Albers()
r = shapefile.Reader(os.path.join(MID, "ibge-biomas", "lm_bioma_250.shp"), encoding="utf-8")
bio = {}
for sr in r.iterShapeRecords():
    g = shape(sr.shape.__geo_interface__)
    shapely.prepare(g)
    bio[sr.record["Bioma"]] = g
pop = {}
for l in linhas(os.path.join(AQUI, "dados", "CD2022_Populacao_Coletada_Imputada_e_Total_Municipio_e_UF_20231222.xlsx"), 1)[2:]:
    if len(l) >= 8 and l[2].isdigit() and l[3].isdigit():
        pop[l[2] + l[3]] = int(float(l[7]))
sede = {}
rl = shapefile.Reader(os.path.join(MID, "ibge-localidades", "BR_localidades_2022.shp"), encoding="utf-8")
for sr in rl.iterShapeRecords():
    d = sr.record.as_dict()
    if d["SCT_LOCALI"] == "Sede Municipal":
        sede[d["CD_MUN"]] = sr.shape.points[0]
sede.setdefault("5300108", (-47.8825, -15.7942)); sede.setdefault("2605459", (-32.42, -3.85))
soma = {k: 0 for k in bio}; n = {k: 0 for k in bio}; fora = 0
for cod, p in pop.items():
    pt = Point(sede[cod])
    achou = False
    for k, g in bio.items():
        if g.contains(pt):
            soma[k] += p; n[k] += 1; achou = True; break
    if not achou:
        # sede na linha de costa ou fora do recorte: o bioma mais proximo
        k = min(bio, key=lambda k: bio[k].distance(pt)); soma[k] += p; n[k] += 1; fora += 1
T = sum(pop.values())
print("sedes fora de todo poligono (atribuidas ao mais proximo):", fora)
for k in bio:
    a = area_km2(bio[k], alb)
    print(f"{k}: {soma[k]:,} hab ({100*soma[k]/T:.1f}%) em {n[k]} municipios | {soma[k]/a:.1f} hab/km2 = {soma[k]/(a/2.589988):.0f}/sq mi")
