# A medida preliminar: quanto do petroleo da Noruega (campos, recuperavel original = produzido + restante,
# Sodir FactPages, versao mais nova de cada campo; licenca NLOD) fica do outro lado da fossa norueguesa.
# Posicao de cada campo = o poco descobridor (wellbore_exploration_all: coordenadas e lamina d'agua).
# Classes no Mar do Norte:
#   A = a oeste do eixo da fossa e em lamina < 200 m (a plataforma "do outro lado", a que o vizinho podia reivindicar)
#   B = a oeste do eixo, mas dentro da fossa (lamina >= 200 m): o caso de Troll
#   C = a leste do eixo (do lado da costa norueguesa)
# Mar da Noruega e Mar de Barents ficam a parte (a fossa nao os separa de vizinho nenhum).
# Uso: python -X utf8 -B medida_fossa.py
import csv, os, collections

AQUI = os.path.dirname(os.path.abspath(__file__))
D = os.path.join(AQUI, "dados")

def ler(nome):
    with open(os.path.join(D, nome), encoding="utf-8-sig", newline="") as f:
        return list(csv.DictReader(f))

def num(x):
    try:
        return float(x.replace(",", "."))
    except Exception:
        return 0.0

# 1. reservas: a versao mais nova de cada campo
res = {}
for r in ler("field_reserves.csv"):
    k = r["fldNpdidField"]
    v = int(r["fldVersion"] or 0)
    if k not in res or v > res[k][0]:
        res[k] = (v, r)
# so os campos com a versao do ano mais novo (os de versao velha foram fundidos a outro campo, ex.: Aerfugl em 2019)
vmax = max(v for v, _ in res.values())
velhos = sorted(r["fldName"] + " (" + str(v) + ")" for v, r in res.values() if v < vmax)
print("Fora (versao anterior a %d, campo fundido ou extinto): %s" % (vmax, ", ".join(velhos)))
res = {k: t for k, t in res.items() if t[0] == vmax}

# 2. campos: area e poco descobridor
campos = {r["fldNpdidField"]: r for r in ler("field.csv")}

# 3. pocos: coordenadas e lamina d'agua
pocos = {r["wlbNpdidWellbore"]: r for r in ler("wellbore_exploration_all.csv")}

# 4. eixo da fossa
eixo = [(float(r["lat"]), float(r["lon_eixo"])) for r in ler("fossa_eixo.csv")]
eixo.sort()

def lon_eixo(lat):
    if lat <= eixo[0][0]:
        return None  # ao sul do trecho N-S: a fossa corre para leste, ao norte dos campos
    if lat >= eixo[-1][0]:
        return eixo[-1][1]
    for (a, la), (b, lb) in zip(eixo, eixo[1:]):
        if a <= lat <= b:
            return la + (lb - la) * (lat - a) / (b - a)

soma = collections.defaultdict(lambda: [0.0, 0.0, 0])  # recuperavel OE, restante OE, n
detalhe = []
sem_pos = []
for k, (v, r) in res.items():
    c = campos.get(k)
    area = (c or {}).get("fldMainArea", "?").strip().lower()
    rec, rest = num(r["fldRecoverableOE"]), num(r["fldRemainingOE"])
    p = pocos.get((c or {}).get("wlbNpdidWellbore", ""))
    if area.startswith("north"):
        if not p or not p.get("wlbNsDecDeg"):
            classe = "MN-sem-posicao"
            sem_pos.append(r["fldName"])
            lat = lon = prof = None
        else:
            lat, lon = num(p["wlbNsDecDeg"]), num(p["wlbEwDecDeg"])
            prof = num(p.get("wlbWaterDepth", ""))
            le = lon_eixo(lat)
            if le is None or lon < le:
                classe = "MN-A-alem-da-fossa" if prof < 200 else "MN-B-dentro-da-fossa"
            else:
                classe = "MN-C-lado-da-costa"
    elif area.startswith("norwegian"):
        classe, lat, lon, prof = "Mar-da-Noruega", None, None, None
    elif area.startswith("barents"):
        classe, lat, lon, prof = "Mar-de-Barents", None, None, None
    else:
        classe, lat, lon, prof = "outra:" + area, None, None, None
    soma[classe][0] += rec
    soma[classe][1] += rest
    soma[classe][2] += 1
    detalhe.append((classe, r["fldName"], rec, rest, lat, lon, prof))

tot_rec = sum(s[0] for s in soma.values())
tot_rest = sum(s[1] for s in soma.values())
print("Campos (versao mais nova):", len(res), "| recuperavel original total: %.0f milhoes Sm3 o.e. | restante: %.0f" % (tot_rec, tot_rest))
print("%-24s %6s %12s %7s %12s %7s" % ("classe", "n", "recup. MSm3", "%", "restante", "%"))
for cl in sorted(soma):
    s = soma[cl]
    print("%-24s %6d %12.0f %6.1f%% %12.0f %6.1f%%" % (cl, s[2], s[0], 100 * s[0] / tot_rec, s[1], 100 * s[1] / tot_rest))

print("\nOs 15 maiores campos (recuperavel original, MSm3 o.e.):")
for d in sorted(detalhe, key=lambda t: -t[2])[:15]:
    print("  %-22s %-22s %8.0f  rest %7.0f  lat %s lon %s lamina %s" % (d[1], d[0], d[2], d[3], d[4] and round(d[4], 3), d[5] and round(d[5], 3), d[6]))
print("\nNo Mar do Norte, dentro da fossa (B) e do lado da costa (C):")
for d in sorted(detalhe, key=lambda t: -t[2]):
    if d[0] in ("MN-B-dentro-da-fossa", "MN-C-lado-da-costa"):
        print("  %-22s %-22s %8.1f  lat %.3f lon %.3f lamina %.0f m" % (d[1], d[0], d[2], d[4], d[5], d[6]))
if sem_pos:
    print("\nSem posicao:", sem_pos)

with open(os.path.join(AQUI, "medida-fossa-campos.csv"), "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow(["classe", "campo", "recuperavel_original_MSm3oe", "restante_MSm3oe", "lat_poco_descobridor", "lon", "lamina_m"])
    for d in sorted(detalhe, key=lambda t: (t[0], -t[2])):
        w.writerow(d)
