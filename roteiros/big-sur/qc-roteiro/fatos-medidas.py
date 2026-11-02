# As medidas do verificador de fatos (rodada 1, big-sur), 02/11/2026. Sem rede: so as copias locais.
# Uso (cwd = raiz do canal):
#   python -I -X utf8 -B roteiros/big-sur/qc-roteiro/fatos-medidas.py <pasta-do-PL> <pasta-do-shapefile-TIGER> > roteiros/big-sur/qc-roteiro/fatos-medidas.txt
# <pasta-do-PL>: cageo2020.pl e ca000022020.pl do PL 94-171 da California (ca2020.pl.zip, ~700 MB, fora do canal; URL no
# midia/big-sur/fontes/LEIA-ME.md). <pasta-do-shapefile-TIGER>: midia/big-sur/fontes/tl_2020_06_cousub.zip descompactado.
# As copias do canal lidas: midia/big-sur/fontes/co-est2025-alldata.csv, 2020_Gaz_counties_national.txt, acsdt5y2024-b25004.dat
# e bigsur-lup-1986-govinfo.htm.
import csv, os, struct, sys, math, re, html

PL, TIGER = sys.argv[1], sys.argv[2]
F = "midia/big-sur/fontes/"
M2_MI2 = 2589988.110336
out = []
def p(s=""): out.append(s)

p("fatos-medidas.txt (big-sur, verificador de fatos, rodada 1, 2026-11-02): saida de roteiros/big-sur/qc-roteiro/fatos-medidas.py")
p("")
# ---- A. PL 94-171 (censo de 2020) ----
p("== A. Censo de 2020, PL 94-171 da California (cageo2020.pl e ca000022020.pl) ==")
bs = None; ca = None; lugares_big_sur = []
with open(os.path.join(PL, "cageo2020.pl"), encoding="latin-1") as f:
    for ln in f:
        c = ln.rstrip("\n").split("|")
        if c[2] == "060" and c[9] == "0605390235": bs = c
        if c[2] == "040": ca = c
        if c[2] == "160" and "Big Sur" in ln: lugares_big_sur.append(c[9])
def campos_finais(c):
    # ... AREALAND|AREAWATR|BASENAME|NAME|FUNCSTAT|GCUNI|POP100|HU100|INTPTLAT|INTPTLON|LSADC|PARTFLAG|UGA
    return dict(zip("AREALAND AREAWATR BASENAME NAME FUNCSTAT GCUNI POP100 HU100 INTPTLAT INTPTLON LSADC PARTFLAG UGA".split(), c[-13:]))
b = campos_finais(bs); s = campos_finais(ca)
logrec = bs[7]
h1 = None
with open(os.path.join(PL, "ca000022020.pl"), encoding="latin-1") as f:
    for ln in f:
        c = ln.rstrip("\n").split("|")
        if c[4] == logrec: h1 = c[-3:]; break
pop, hu = int(b["POP100"]), int(b["HU100"])
land = int(b["AREALAND"]) / M2_MI2
ocup, vag = int(h1[1]), int(h1[2])
p(f"M01 {b['NAME']} (GEOID 0605390235, Monterey County): census 2020 population (POP100) {pop:,} people; housing units (HU100) {hu:,}")
p(f"M02 {b['NAME']}: land area {land:.1f} square miles in 2020 (AREALAND {int(b['AREALAND']):,} m2); density {pop/land:.2f} people per square mile in 2020")
p(f"M03 {b['NAME']}: H1 in 2020: {int(h1[0]):,} housing units, {ocup:,} occupied, {vag:,} vacant on census day = {100*vag/hu:.1f}% = {10*vag/hu:.2f} in 10 of the {hu:,} homes")
p(f"M04 places (SUMLEV 160) with 'Big Sur' in the 2020 PL geo file for California: {len(lugares_big_sur)} (no census place named Big Sur in 2020)")
ca_pop, ca_land = int(s["POP100"]), int(s["AREALAND"]) / M2_MI2
p(f"M05 California, census 2020: {ca_pop:,} people in {ca_land:,.0f} square miles of land = {ca_pop/ca_land:.1f} per square mile = {ca_pop/ca_land/(pop/land):.1f} times the Big Sur CCD density in 2020")
p("")
# ---- B. Estados: base de 2020 das estimativas + terra do Gazetteer 2020 ----
p("== B. States, 2020: ESTIMATESBASE2020 (co-est2025-alldata.csv) over land (2020_Gaz_counties_national.txt) ==")
est = {}; pop25 = {}
cty = {}
for r in csv.DictReader(open(F + "co-est2025-alldata.csv", encoding="latin-1")):
    if r["SUMLEV"] == "040": est[r["STNAME"]] = int(r["ESTIMATESBASE2020"]); pop25[r["STNAME"]] = int(r["POPESTIMATE2025"])
    if r["SUMLEV"] == "050" and r["STNAME"] == "California": cty[r["CTYNAME"]] = (int(r["ESTIMATESBASE2020"]), int(r["POPESTIMATE2025"]))
usps = {}
terra = {}
with open(F + "2020_Gaz_counties_national.txt", encoding="utf-8") as f:
    cab = [x.strip() for x in f.readline().split("\t")]
    for ln in f:
        c = [x.strip() for x in ln.split("\t")]
        d = dict(zip(cab, c))
        terra[d["USPS"]] = terra.get(d["USPS"], 0) + float(d["ALAND_SQMI"])
NOMES = {"AL":"Alabama","AK":"Alaska","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District of Columbia","FL":"Florida","GA":"Georgia","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PA":"Pennsylvania","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}
dens = sorted(((est[n] / terra[u], n) for u, n in NOMES.items() if n != "District of Columbia"))
p("M06 the five least dense of the 50 states in 2020: " + "; ".join(f"{n} {d:.2f}" for d, n in dens[:5]) + " people per square mile")
wy = [d for d, n in dens if n == "Wyoming"][0]
p(f"M07 Wyoming 2020: {est['Wyoming']:,} people over {terra['WY']:,.0f} square miles of land = {wy:.2f} per square mile; Big Sur CCD {pop/land:.2f}; only Alaska is lower among the 50 states")
mais = max(NOMES.values(), key=lambda n: est[n] if n != "District of Columbia" else 0)
mais25 = max(NOMES.values(), key=lambda n: pop25[n] if n != "District of Columbia" else 0)
p(f"M08 most populous state: {mais} in the 2020 base ({est[mais]:,}) and {mais25} in 2025 ({pop25[mais25]:,})")
la = ["Los Angeles County", "Orange County"]; sf = ["Alameda County", "Contra Costa County", "Marin County", "San Francisco County", "San Mateo County"]
s20 = sum(cty[c][0] for c in la + sf); s25 = sum(cty[c][1] for c in la + sf)
p(f"M09 Los Angeles metro area (Los Angeles + Orange) and San Francisco metro area (5 counties): together {s25:,} people in 2025 and {s20:,} in the 2020 base")
p("")
# ---- C. TIGER/Line 2020, subdivisoes de condado ----
p("== C. TIGER/Line 2020 county subdivisions (tl_2020_06_cousub) ==")
base = os.path.join(TIGER, "tl_2020_06_cousub")
dbf = open(base + ".dbf", "rb").read()
nrec, hlen, rlen = struct.unpack("<IHH", dbf[4:12]); cps, pos = [], 32
while dbf[pos] != 0x0D:
    cps.append((dbf[pos:pos+11].split(b"\x00")[0].decode(), dbf[pos+16])); pos += 32
regs = []
for i in range(nrec):
    r = dbf[hlen+i*rlen+1:hlen+(i+1)*rlen]; d, q = {}, 0
    for n, t in cps: d[n] = r[q:q+t].decode("latin-1").strip(); q += t
    regs.append(d)
shp = open(base + ".shp", "rb").read(); formas = []; pos = 100
while pos < len(shp):
    _, clen = struct.unpack(">ii", shp[pos:pos+8]); c = shp[pos+8:pos+8+clen*2]
    if struct.unpack("<i", c[:4])[0] == 5:
        bb = struct.unpack("<4d", c[4:36]); npart, npt = struct.unpack("<ii", c[36:44])
        partes = list(struct.unpack(f"<{npart}i", c[44:44+4*npart])); o = 44+4*npart
        pts = [struct.unpack("<2d", c[o+16*k:o+16*k+16]) for k in range(npt)]
        formas.append((bb, [pts[partes[j]:(partes[j+1] if j+1 < npart else npt)] for j in range(npart)]))
    else: formas.append((None, []))
    pos += 8 + clen*2
def dentro(lon, lat, aneis):
    ins = False
    for a in aneis:
        for k in range(len(a)):
            x1, y1 = a[k]; x2, y2 = a[(k+1) % len(a)]
            if (y1 > lat) != (y2 > lat) and lon < x1 + (lat-y1)*(x2-x1)/(y2-y1): ins = not ins
    return ins
def onde(lat, lon):
    return ", ".join(regs[i]["NAMELSAD"] for i in range(nrec) if formas[i][0] and formas[i][0][0] <= lon <= formas[i][0][2]
                     and formas[i][0][1] <= lat <= formas[i][0][3] and dentro(lon, lat, formas[i][1])) or "(none: ocean)"
pts = [("Carmel-by-the-Sea", 36.5552, -121.9233), ("Bixby Bridge", 36.3715, -121.9020), ("Ventana Double Cone (mountains)", 36.2930, -121.7210),
       ("Timber Fire origin point, CAL FIRE [36.224857,-121.72983]", 36.224857, -121.72983), ("Fernwood (Highway 1)", 36.2622, -121.7889),
       ("McWay Falls, Julia Pfeiffer Burns State Park", 36.1580, -121.6722), ("Cone Peak", 36.0508, -121.4967), ("Mud Creek", 35.8655, -121.4305),
       ("San Ardo (town, Salinas Valley)", 36.0205, -120.9044)]
for n, la_, lo_ in pts: p(f"M10 point {n} {la_:.4f},{lo_:.4f} -> {onde(la_, lo_)}")
ib = [i for i, r in enumerate(regs) if r["GEOID"] == "0605390235"][0]
todos = [q for a in formas[ib][1] for q in a]
norte = max(todos, key=lambda q: q[1])[1]
sul_costa = 35.9921   # onde a divisa Big Sur x San Ardo chega ao mar (ccd_divisa.py)
ia = [i for i, r in enumerate(regs) if r["GEOID"] == "0605392750"][0]
sul_cond = formas[ia][0][1]; leste_sa = formas[ia][0][2]
carmel = 36.5552
p(f"M11 Big Sur CCD: northernmost point {norte:.4f} N, {(carmel-norte)*69.05:.1f} miles (latitude only) south of Carmel-by-the-Sea; its land reaches the shore south to {sul_costa:.4f} N")
p(f"M12 San Ardo CCD reaches east to longitude {leste_sa:.4f}, across the mountains, and south to {sul_cond:.4f} N (the Monterey County line)")
frac = (norte - sul_costa) / (carmel - sul_cond)
p(f"M13 coast in the Big Sur CCD by latitude: {norte:.4f} to {sul_costa:.4f} = {(norte-sul_costa)*69.05:.1f} mi of {(carmel-sul_cond)*69.05:.1f} mi from Carmel-by-the-Sea to the county line = {frac:.2f} of the coast = {3*frac:.2f} thirds (roughly two-thirds)")
for n, la_ in [("Cone Peak", 36.0508), ("Mud Creek", 35.8655)]:
    p(f"M14 {n} lies {(carmel-la_)/(carmel-sul_cond):.2f} of the way down the coast from Carmel-by-the-Sea to the county line (latitude)")
p("")
# ---- D. ACS 2020-2024, B25004 ----
p("== D. ACS 5-year 2020 to 2024, table B25004 (acsdt5y2024-b25004.dat) ==")
alvos = {"0600000US0605390235": "Big Sur CCD", "0500000US06053": "Monterey County", "0400000US06": "California"}
with open(F + "acsdt5y2024-b25004.dat", encoding="utf-8") as f:
    cab = f.readline().rstrip("\n").split("|"); ix = {c: n for n, c in enumerate(cab)}
    for ln in f:
        c = ln.rstrip("\n").split("|")
        if c[0] in alvos:
            tot = int(c[ix["B25004_E001"]]); saz = int(c[ix["B25004_E006"]])
            p(f"M15 {alvos[c[0]]}, ACS 2020 to 2024: {saz:,} of {tot:,} vacant homes for seasonal, recreational, or occasional use = {100*saz/tot:.0f}% = one in {tot/saz:.2f}")
p(f"M16 order of size only (two different rulers): ACS seasonal homes over the 2020 census homes of the Big Sur CCD = about 3 in 10 of the {hu:,}")
p("")
# ---- E. Datas e numeros que a fala deriva do plano de 1986 ----
p("== E. Dates the narration derives (the plan of 1986: bigsur-lup-1986-govinfo.htm) ==")
t = open(F + "bigsur-lup-1986-govinfo.htm", encoding="utf-8", errors="replace").read()
t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", t)))
m = re.search(r"On June 27,1937, the highway was completed at a cost of approximately \$8,000,000", t)
p(f"M17 the plan's sentence {'is' if m else 'is NOT'} in the copy, printed with the date spaced: On June 27, 1937, the highway was completed at a cost of approximately $8,000,000")
m = re.search(r"Board of Supervisors 11/5/85", t); m2 = re.search(r"on April I-Cr, 1986", t)
p(f"M18 the plan was adopted by the Board of Supervisors on 11/5/85 ({'found' if m else 'NOT found'}) and its certification acknowledged in April 1986 ({'found' if m2 else 'NOT found'}): its 'at present' figures are from the 1980s")
p("M19 the closures of 2023, 2024 and 2026 (Caltrans) fall in the 2020s")
# ---- F. As datas das notas copiadas da rede, lidas sem as tags (o portao le o .htm cru, e a data fica partida por tag) ----
W = F + "web/"
for arq in ["caltrans-d5-news-1-14-26-2026-11-02.htm", "caltrans-d5-news-5-15-2026-2-lida-2026-11-02.htm",
            "caltrans-d5-news-8-11-2026-lida-2026-11-02.htm", "caltrans-d5-news-9-2-2026-lida-2026-11-02.htm"]:
    t = open(W + arq, encoding="utf-8", errors="replace").read()
    t = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", re.sub(r"(?s)<(script|style).*?</\1>", "", t))))
    m = re.search(r"Date: ([A-Za-z]+, )?([A-Z][a-z]+ \d{1,2}, \d{4})", t)
    p(f"M20 web/{arq}: the Caltrans note is dated {m.group(2) if m else 'NOT FOUND'}")
sys.stdout.reconfigure(newline="\n")
print("\n".join(out))
