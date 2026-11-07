"""Quanto a faixa do IBGE (barra do Rio Grande -> foz do Arroio Chuí) se afasta da linha reta entre as pontas.

Uso: python -I -X utf8 -B desvio_corda.py <Municipios_Defrontantes_com_o_Mar_2024_shp.zip>

Reaproveita o costa_ibge.py (mesma pasta deste script, carregado pelo caminho absoluto, não pelo sys.path) para montar o
traçado, e mede:
- o afastamento de cada vértice em relação à corda (projeção local equidistante, em km), o maior e onde ele fica;
- a razão traçado/corda em janelas de 10, 25 e 50 km (a sinuosidade local);
- o rumo da corda.
Não baixa nada.
"""
import importlib.util
import math
import os
import sys
import zipfile

AQUI = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location("costa_ibge", os.path.join(AQUI, "costa_ibge.py"))
ci = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ci)


def montar(zip_path):
    with zipfile.ZipFile(zip_path) as z:
        nomes = z.namelist()
        shp = z.read(next(n for n in nomes if n.lower().endswith(".shp")))
        dbf = z.read(next(n for n in nomes if n.lower().endswith(".dbf")))
        cpg = next((z.read(n).decode().strip() for n in nomes if n.lower().endswith(".cpg")), "latin-1")
    regs, polis = ci.ler_dbf(dbf, cpg), ci.ler_shp(shp)
    por_cod = {r["CD_MUN"]: polis[i] for i, r in enumerate(regs)}
    rg, svp = por_cod["4315602"], por_cod["4317301"]
    sjn, lagoa = por_cod["4318507"], por_cod["4300002"]
    k_svp = {ci.chave(p) for anel in svp for p in anel}
    k_rg = {ci.chave(p) for anel in rg for p in anel}
    k_barra = {ci.chave(p) for anel in sjn + lagoa for p in anel}
    comuns = k_rg & k_svp
    anel_rg, anel_svp = ci.anel_com(rg, comuns), ci.anel_com(svp, comuns)
    ponta = max((p for p in anel_rg if ci.chave(p) in comuns), key=lambda p: p[0])

    def sentido_fora(anel, idx):
        n = len(anel) - 1
        return -1 if ci.chave(anel[(idx + 1) % n]) in comuns else +1

    i_rg = next(i for i, p in enumerate(anel_rg[:-1]) if ci.chave(p) == ci.chave(ponta))
    cad_rg = ci.andar(anel_rg, i_rg, sentido_fora(anel_rg, i_rg), lambda p, n: n > 2 and ci.chave(p) in k_barra)
    i_svp = next(i for i, p in enumerate(anel_svp[:-1]) if ci.chave(p) == ci.chave(ponta))
    # o fim fixado pela leitura da Sala: o vértice da foz do Arroio Chuí (-53,36949; -33,74354)
    alvo = (-53.36949, -33.74354)
    cad_svp = ci.andar(anel_svp, i_svp, sentido_fora(anel_svp, i_svp),
                       lambda p, n: abs(p[0] - alvo[0]) < 2e-5 and abs(p[1] - alvo[1]) < 2e-5)
    return cad_rg[::-1] + cad_svp[1:], ponta


def main():
    if len(sys.argv) < 2:
        print("uso: desvio_corda.py <shp.zip>")
        sys.exit(2)
    total, ponta = montar(sys.argv[1])
    L = ci.comprimento(total)
    a, b = total[0], total[-1]
    corda = ci.dist_km(a, b)
    print(f"traçado: {len(total)} vértices, de ({a[0]:.5f}, {a[1]:.5f}) a ({b[0]:.5f}, {b[1]:.5f})")
    print(f"  comprimento {L:.2f} km ({L * 0.621371:.1f} mi); corda {corda:.2f} km ({corda * 0.621371:.1f} mi); "
          f"excesso {100 * (L / corda - 1):.2f} %")
    # projeção local equidistante em torno do meio da corda
    lat0 = math.radians((a[1] + b[1]) / 2)
    lon0 = (a[0] + b[0]) / 2
    R = 6371.0

    def xy(p):
        return (math.radians(p[0] - lon0) * R * math.cos(lat0), math.radians(p[1] - math.degrees(lat0)) * R)

    ax, ay = xy(a)
    bx, by = xy(b)
    ux, uy = bx - ax, by - ay
    nrm = math.hypot(ux, uy)
    ux, uy = ux / nrm, uy / nrm
    rumo = (math.degrees(math.atan2(ux, uy)) + 360) % 360
    print(f"  rumo da corda (da barra para o Chuí): {rumo:.1f} graus")
    piores, acum = [], 0.0
    for k, p in enumerate(total):
        if k:
            acum += ci.dist_km(total[k - 1], p)
        px, py = xy(p)
        vx, vy = px - ax, py - ay
        ao_longo = vx * ux + vy * uy
        lado = vx * uy - vy * ux  # > 0: à esquerda de quem anda da barra ao Chuí? (sinal só para separar os lados)
        piores.append((abs(lado), lado, ao_longo, acum, p))
    m = max(piores)
    print(f"  maior afastamento da corda: {m[0]:.2f} km ({m[0] * 0.621371:.1f} mi), a {m[2]:.1f} km da barra ao longo da "
          f"corda (no traçado, km {m[3]:.1f}), em ({m[4][0]:.5f}, {m[4][1]:.5f}); sinal {'+' if m[1] > 0 else '-'}")
    lados = [x[1] for x in piores]
    print(f"  afastamento: de {min(lados):.2f} a {max(lados):.2f} km (os dois sinais = os dois lados da corda)")
    # perfil a cada ~20 km de corda
    print("  perfil (km ao longo da corda -> afastamento em km):")
    marcos = list(range(0, int(corda) + 1, 20))
    for mk in marcos:
        melhor = min(piores, key=lambda x: abs(x[2] - mk))
        print(f"    {mk:>4} km: {melhor[1]:+6.2f} km  (traçado km {melhor[3]:.1f})")
    # sinuosidade em janelas
    for jan in (10, 25, 50):
        razoes, ini = [], 0
        acum_v = [0.0]
        for k in range(1, len(total)):
            acum_v.append(acum_v[-1] + ci.dist_km(total[k - 1], total[k]))
        k0 = 0
        while k0 < len(total) - 1:
            k1 = k0
            while k1 < len(total) - 1 and acum_v[k1] - acum_v[k0] < jan:
                k1 += 1
            if acum_v[k1] - acum_v[k0] < jan * 0.9:
                break
            razoes.append((acum_v[k1] - acum_v[k0]) / ci.dist_km(total[k0], total[k1]))
            k0 = k1
        print(f"  janelas de ~{jan} km: {len(razoes)}; traçado/corda de {min(razoes):.4f} a {max(razoes):.4f} "
              f"(mediana {sorted(razoes)[len(razoes) // 2]:.4f})")


if __name__ == "__main__":
    main()
