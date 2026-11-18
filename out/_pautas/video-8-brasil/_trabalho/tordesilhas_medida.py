# A medida nossa da semente do tamanho: quanto do Brasil de hoje (e de quem mora nele) fica a leste da linha de 1494,
# em cada leitura historica da longitude da linha (en.wikipedia "Treaty of Tordesillas", lida em 18/11/2026).
# Dados: IBGE BR_Pais_2022 (malha territorial), IBGE Localidades 2022 (sedes municipais), IBGE Censo 2022 (populacao por municipio).
# Uso: python -X utf8 -B tordesilhas_medida.py
import sys, os
import shapefile
from shapely.geometry import shape, box, LineString
from shapely import make_valid
sys.path.insert(0, os.path.dirname(__file__))
from geo_util import Albers, area_km2
from xlsx_ler import linhas

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", "..", "..", ".."))
MID = os.path.join(RAIZ, "midia", "_pautas", "video-8-brasil")

r = shapefile.Reader(os.path.join(MID, "ibge-pais", "BR_Pais_2022.shp"), encoding="utf-8")
br = make_valid(shape(r.shape(0).__geo_interface__))
alb = Albers()
A_TOT = area_km2(br, alb)
print(f"Brasil (BR_Pais_2022, Albers GRS80): {A_TOT:,.0f} km2 = {A_TOT/2.589988:,.0f} sq mi | registro: {r.record(0).as_dict()}")

# populacao por municipio (Censo 2022, total) e sede municipal (Localidades 2022)
pop = {}
for l in linhas(os.path.join(AQUI, "dados", "CD2022_Populacao_Coletada_Imputada_e_Total_Municipio_e_UF_20231222.xlsx"), 1)[2:]:
    if len(l) >= 8 and l[2].isdigit() and l[3].isdigit():
        pop[l[2] + l[3]] = int(float(l[7]))
print("municipios com populacao:", len(pop), "| soma:", f"{sum(pop.values()):,}")
sede = {}
rl = shapefile.Reader(os.path.join(MID, "ibge-localidades", "BR_localidades_2022.shp"), encoding="utf-8")
for sr in rl.iterShapeRecords():
    d = sr.record.as_dict()
    if d["SCT_LOCALI"] == "Sede Municipal":
        x, y = sr.shape.points[0]
        sede[d["CD_MUN"]] = (x, y, d["NM_MUN"], d["SIGLA_UF"])
# sem "Sede Municipal" na base: Brasilia (DF, o Plano Piloto) e Fernando de Noronha (distrito estadual); coordenadas aproximadas
sede.setdefault("5300108", (-47.8825, -15.7942, "Brasília", "DF"))
sede.setdefault("2605459", (-32.42, -3.85, "Fernando de Noronha", "PE"))
falta = [k for k in pop if k not in sede]
print("sedes:", len(sede), "| municipios sem sede achada:", len(falta), falta[:5])
P_TOT = sum(pop.values())

LEITURAS = [
    ("Ferrer 1495, na esfera dele", -(42 + 25 / 60)),
    ("Cantino c.1502 (Harrisse, globo real)", -(42 + 30 / 60)),
    ("Zaragoza 1529, limite leste", -(43 + 56 / 60)),
    ("Enciso 1518 (Harrisse, globo real)", -(45 + 38 / 60)),
    ("Zaragoza 1529, limite oeste", -(46 + 18 / 60)),
    ("Duran/Cabot/Vespucci 1524 (Harrisse)", -(46 + 36 / 60)),
    ("globo portugues, Badajoz 1524", -(47 + 16 / 60 + 52 / 3600)),
    ("Ferrer 1495 (Harrisse, medida perfeita)", -(47 + 37 / 60)),
    ("Diogo Ribeiro 1529", -(49 + 45 / 60)),
]
CIDADES = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Brasília", "Curitiba", "Salvador", "Recife", "Fortaleza", "Goiânia", "Florianópolis", "Porto Alegre", "Manaus", "São Luís", "Campinas", "Santos", "Laguna"]
idx = {}
for k, (x, y, n, uf) in sede.items():
    if (n in CIDADES or (n, uf) == ("Belém", "PA")) and (n, uf) not in idx:
        idx[(n, uf)] = (x, y)

print("\nleitura | longitude | area a leste (km2, %) | populacao a leste (hab, %)")
for nome, lon in LEITURAS:
    leste = br.intersection(box(lon, -40, -20, 10))
    a = area_km2(leste, alb)
    p = sum(v for k, v in pop.items() if k in sede and sede[k][0] > lon)
    lado = ", ".join(f"{n}/{uf}:{'L' if x > lon else 'O'}" for (n, uf), (x, y) in sorted(idx.items()))
    print(f"{nome} | {lon:.3f} | {a:,.0f} ({100*a/A_TOT:.1f}%) | {p:,} ({100*p/P_TOT:.1f}%)")
    # onde a linha corta o litoral: os extremos norte e sul do meridiano dentro do Brasil
    seg = br.intersection(LineString([(lon, 10), (lon, -40)]))
    ys = []
    for g in getattr(seg, "geoms", [seg]):
        ys += [c[1] for c in g.coords]
    if ys:
        print(f"    meridiano dentro do Brasil: de {max(ys):.3f} a {min(ys):.3f} de latitude")
print("\ncidades (O = lado espanhol, a oeste) para cada leitura:")
for nome, lon in LEITURAS:
    print(f"  {lon:.2f}: " + ", ".join(f"{n}:{'L' if x > lon else 'O'}" for (n, uf), (x, y) in sorted(idx.items(), key=lambda t: t[1][0])))
print("\nlongitudes das cidades:", {f"{n}/{uf}": round(x, 3) for (n, uf), (x, y) in idx.items()})
