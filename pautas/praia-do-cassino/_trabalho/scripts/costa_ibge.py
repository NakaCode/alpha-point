"""Mede, na geometria do IBGE (Municípios Defrontantes com o Mar 2024, shapefile), o limite com o mar de Rio Grande e de
Santa Vitória do Palmar, e o mesmo traçado com réguas de tamanhos diferentes (o método do compasso).

Uso: python -I -X utf8 -B costa_ibge.py <Municipios_Defrontantes_com_o_Mar_2024_shp.zip>

Como:
- lê o .shp e o .dbf com a biblioteca padrão (polígonos, tipo 5);
- o limite Rio Grande x Santa Vitória do Palmar são os vértices comuns aos dois polígonos; a ponta dele no mar é a mais a leste;
- Rio Grande: dessa ponta, anda pelo anel no sentido que se afasta do limite comum, até o primeiro vértice comum com São José do
  Norte ou com a "Área Operacional Lagoa dos Patos" (a barra);
- Santa Vitória do Palmar: da mesma ponta, anda pelo anel no sentido que se afasta do limite comum, até o vértice mais ao sul (a foz
  do Arroio Chuí, o ponto mais ao sul do Brasil);
- distâncias no elipsoide GRS80 (SIRGAS 2000), pelos raios de curvatura na latitude média de cada segmento;
- as réguas: o compasso anda pelo traçado com passos de tamanho fixo (em linha reta entre os pontos do traçado).
"""
import io
import math
import struct
import sys
import zipfile

A = 6378137.0
F = 1 / 298.257222101
E2 = F * (2 - F)


def dist_km(p, q):
    (lon1, lat1), (lon2, lat2) = p, q
    phi = math.radians((lat1 + lat2) / 2)
    s = math.sin(phi)
    m = A * (1 - E2) / (1 - E2 * s * s) ** 1.5
    n = A / math.sqrt(1 - E2 * s * s)
    dy = math.radians(lat2 - lat1) * m
    dx = math.radians(lon2 - lon1) * n * math.cos(phi)
    return math.hypot(dx, dy) / 1000.0


def ler_dbf(dados, cpg):
    n_reg, tam_cab, tam_reg = struct.unpack("<IHH", dados[4:12])
    campos, pos = [], 32
    while dados[pos] != 0x0D:
        campos.append((dados[pos:pos + 11].split(b"\x00")[0].decode("ascii"), dados[pos + 16]))
        pos += 32
    regs = []
    for i in range(n_reg):
        ini = tam_cab + i * tam_reg
        reg, p, d = dados[ini:ini + tam_reg], 1, {}
        for c, n in campos:
            d[c] = reg[p:p + n].decode(cpg, errors="replace").strip()
            p += n
        regs.append(d)
    return regs


def ler_shp(dados):
    f = io.BytesIO(dados)
    f.seek(100)
    polis = []
    while True:
        cab = f.read(8)
        if len(cab) < 8:
            break
        _, tam = struct.unpack(">ii", cab)
        conteudo = f.read(tam * 2)
        tipo = struct.unpack("<i", conteudo[:4])[0]
        if tipo != 5:
            polis.append([])
            continue
        n_partes, n_pontos = struct.unpack("<ii", conteudo[36:44])
        partes = list(struct.unpack(f"<{n_partes}i", conteudo[44:44 + 4 * n_partes]))
        ini = 44 + 4 * n_partes
        pts = [struct.unpack("<dd", conteudo[ini + 16 * k: ini + 16 * k + 16]) for k in range(n_pontos)]
        aneis = []
        for j, a in enumerate(partes):
            b = partes[j + 1] if j + 1 < n_partes else n_pontos
            aneis.append(pts[a:b])
        polis.append(aneis)
    return polis


def chave(p):
    return (round(p[0], 7), round(p[1], 7))


def comprimento(cadeia):
    return sum(dist_km(cadeia[i], cadeia[i + 1]) for i in range(len(cadeia) - 1))


def compasso(cadeia, regua_km):
    """Passos de tamanho fixo: de cada ponto, o próximo é o primeiro ponto do traçado a regua_km em linha reta."""
    passos, atual, i = 0, cadeia[0], 0
    t_ini = 0.0  # onde o ponto atual está no segmento i (0 = no começo dele): a busca só anda para a frente
    while True:
        achou = False
        while i < len(cadeia) - 1:
            a, b = cadeia[i], cadeia[i + 1]
            if dist_km(atual, b) >= regua_km:
                lo, hi = t_ini, 1.0
                for _ in range(40):
                    mid = (lo + hi) / 2
                    p = (a[0] + (b[0] - a[0]) * mid, a[1] + (b[1] - a[1]) * mid)
                    if dist_km(atual, p) < regua_km:
                        lo = mid
                    else:
                        hi = mid
                atual = (a[0] + (b[0] - a[0]) * hi, a[1] + (b[1] - a[1]) * hi)
                t_ini = hi
                passos += 1
                achou = True
                break
            i += 1
            t_ini = 0.0
        if not achou:
            return passos * regua_km + dist_km(atual, cadeia[-1]), passos


def anel_com(aneis, conjunto):
    melhor, n_melhor = None, 0
    for anel in aneis:
        n = sum(1 for p in anel if chave(p) in conjunto)
        if n > n_melhor:
            melhor, n_melhor = anel, n
    return melhor


def andar(anel, inicio, passo, parar):
    """Anda pelo anel fechado a partir do índice inicio, no sentido passo (+1/-1), até parar(ponto) ser verdadeiro."""
    n = len(anel) - 1  # o último repete o primeiro
    cadeia, i = [anel[inicio]], inicio
    for _ in range(n):
        i = (i + passo) % n
        cadeia.append(anel[i])
        if parar(anel[i], len(cadeia)):
            return cadeia
    return cadeia


def main():
    if len(sys.argv) < 2:
        print("uso: costa_ibge.py <shp.zip>")
        sys.exit(2)
    with zipfile.ZipFile(sys.argv[1]) as z:
        nomes = z.namelist()
        shp = z.read(next(n for n in nomes if n.lower().endswith(".shp")))
        dbf = z.read(next(n for n in nomes if n.lower().endswith(".dbf")))
        cpg = next((z.read(n).decode().strip() for n in nomes if n.lower().endswith(".cpg")), "latin-1")
        prj = next((z.read(n).decode(errors="replace") for n in nomes if n.lower().endswith(".prj")), "")
    print("prj:", prj[:120])
    import time; t0 = time.time()
    regs, polis = ler_dbf(dbf, cpg), ler_shp(shp)
    print(f"[{time.time()-t0:.1f}s] lido: {sum(len(p) for a in polis for p in a)} pontos", flush=True)
    por_cod = {r["CD_MUN"]: polis[i] for i, r in enumerate(regs)}
    rg, svp = por_cod["4315602"], por_cod["4317301"]
    sjn, lagoa = por_cod["4318507"], por_cod["4300002"]
    k_svp = {chave(p) for anel in svp for p in anel}
    k_rg = {chave(p) for anel in rg for p in anel}
    k_barra = {chave(p) for anel in sjn + lagoa for p in anel}
    comuns = k_rg & k_svp
    print(f"vértices comuns Rio Grande x Santa Vitória do Palmar: {len(comuns)}")
    anel_rg, anel_svp = anel_com(rg, comuns), anel_com(svp, comuns)
    # a ponta no mar do limite comum: o vértice comum mais a leste
    ponta = max((p for p in anel_rg if chave(p) in comuns), key=lambda p: p[0])
    print(f"ponta do limite no mar: lon {ponta[0]:.5f}, lat {ponta[1]:.5f}")

    def sentido_fora(anel, idx):
        n = len(anel) - 1
        return -1 if chave(anel[(idx + 1) % n]) in comuns else +1

    i_rg = next(i for i, p in enumerate(anel_rg[:-1]) if chave(p) == chave(ponta))
    cad_rg = andar(anel_rg, i_rg, sentido_fora(anel_rg, i_rg), lambda p, n: n > 2 and chave(p) in k_barra)
    i_svp = next(i for i, p in enumerate(anel_svp[:-1]) if chave(p) == chave(ponta))
    sul = min(anel_svp, key=lambda p: p[1])
    cad_svp = andar(anel_svp, i_svp, sentido_fora(anel_svp, i_svp), lambda p, n: chave(p) == chave(sul))
    for nome, cad in (("Rio Grande (até a barra)", cad_rg), ("Santa Vitória do Palmar (até o ponto mais ao sul)", cad_svp)):
        print(f"\n{nome}: {len(cad)} vértices; de ({cad[0][0]:.5f}, {cad[0][1]:.5f}) a ({cad[-1][0]:.5f}, {cad[-1][1]:.5f})")
        print(f"  pelo traçado do IBGE: {comprimento(cad):.2f} km; em linha reta: {dist_km(cad[0], cad[-1]):.2f} km")
    # o fim de Santa Vitória do Palmar: onde o traçado deixa a costa (rumo SW) e entra pelo Arroio Chuí (rumo W/NW)
    def rumo(p, q):
        dy = q[1] - p[1]
        dx = (q[0] - p[0]) * math.cos(math.radians((p[1] + q[1]) / 2))
        return (math.degrees(math.atan2(dx, dy)) + 360) % 360

    acum, corte = 0.0, len(cad_svp) - 1
    print("\nO fim do traçado de Santa Vitória do Palmar (km acumulados, rumo do segmento seguinte):")
    for k in range(len(cad_svp) - 1):
        r = rumo(cad_svp[k], cad_svp[k + 1])
        if acum > 150:
            print(f"  [{k}] {acum:7.2f} km  ({cad_svp[k][0]:.5f}, {cad_svp[k][1]:.5f})  rumo {r:5.1f}")
        if acum > 150 and corte == len(cad_svp) - 1 and all(
                235 <= rumo(cad_svp[j], cad_svp[j + 1]) <= 360 for j in range(k, min(k + 3, len(cad_svp) - 1))):
            corte = k
        acum += dist_km(cad_svp[k], cad_svp[k + 1])
    cad_svp = cad_svp[:corte + 1]
    print(f"  a costa acaba no vértice [{corte}] ({cad_svp[-1][0]:.5f}, {cad_svp[-1][1]:.5f}): "
          f"{comprimento(cad_svp):.2f} km de Santa Vitória do Palmar pelo traçado")
    total = cad_rg[::-1] + cad_svp[1:]
    print(f"\nA faixa inteira (barra -> foz do Chuí): {comprimento(total):.2f} km pelo traçado; "
          f"{dist_km(total[0], total[-1]):.2f} km em linha reta")
    seg = sorted(dist_km(total[i], total[i + 1]) for i in range(len(total) - 1))
    print(f"  segmentos do traçado: mediana {seg[len(seg) // 2] * 1000:.0f} m; o maior {seg[-1] * 1000:.0f} m")
    print("\nO compasso sobre o traçado do IBGE (régua -> comprimento):")
    for r in (0.05, 0.1, 0.5, 1, 2, 5, 10, 25, 50):
        c, n = compasso(total, r)
        print(f"  régua de {r:>5} km: {c:7.2f} km ({n} passos) [{time.time()-t0:.1f}s]", flush=True)


if __name__ == "__main__":
    main()
