"""As contas da pauta v1 do vídeo 7 (`rio-columbia`), sobre os dados da base (fatos-a, fatos-b) e as cópias locais.

Uso: python -I -X utf8 -B p_contas.py [<wsc-mensal-08NE049.json>] [--pauta=<pauta.md>]

1. Converte os volumes da base (MAF) em dias de rio, pelas médias medidas pelo leitor A
   (Birchbank, WSC 08NE049: 2.012,3 m3/s = 71.063 cfs; The Dalles, USGS 14105700: 188.120 cfs) e pelos 134 MAF do F12.
2. Com o JSON das médias mensais de Birchbank (a cópia local da base), compara a forma do ano antes das barragens
   do tratado (1938–1967) e depois da última (1974–2025): a média de cada mês, o mês mais cheio e o mais baixo,
   e a parte do volume do ano que passa de maio a julho.
3. Com --pauta, conta as palavras e o tempo dos ganchos (os blocos "> " do §8), sem as marcas de fonte *[...]*,
   a 179 palavras por minuto.

Só lê arquivos locais. Não acessa a rede.
"""
import json
import re
import sys
from collections import defaultdict

PES3_POR_AF = 43_560.0          # pés cúbicos num acre-pé (definição)
SEG_DIA = 86_400.0
M3_POR_PE3 = 0.028316846592     # metros cúbicos num pé cúbico (definição)
PPM = 179.0                     # palavras por minuto da voz de hoje (memória ritmo-duracao)


def maf_por_dia(cfs):
    return cfs * SEG_DIA / PES3_POR_AF / 1e6


def contas_de_volume():
    birch_m3s = 2012.3
    birch_cfs = birch_m3s / M3_POR_PE3
    dalles_cfs = 188_120.0
    rios = {
        "Birchbank (WSC, média 1938–2025)": maf_por_dia(birch_cfs),
        "The Dalles (USGS, média 1879–2024)": maf_por_dia(dalles_cfs),
        "The Dalles (134 MAF/ano, F12)": 134.0 / 365.25,
    }
    print("== 1 · Os rios, em MAF por dia e por ano")
    print(f"  Birchbank: {birch_m3s} m3/s = {birch_cfs:,.0f} cfs")
    for nome, d in rios.items():
        print(f"  {nome}: {d:.4f} MAF/dia = {d * 365.25:.1f} MAF/ano")
    volumes = [
        ("as três barragens do tratado (Art. II.1)", 15.5),
        ("as três + o não-tratado de Mica (BC Hydro: 5 MAF)", 20.5),
        ("o tratado + Libby (≈ 5 MAF, F3/F6)", 20.5),
        ("a flexibilidade do AIP, 15 primeiros anos (4,0 MAF)", 4.0),
        ("a flexibilidade do AIP, depois (5,0 MAF)", 5.0),
        ("o espaço de cheia pago em Arrow (3,6 MAF)", 3.6),
        ("o espaço de cheia do tratado de 1964 (Art. VI: 8,45 MAF)", 8.45),
        ("o espaço de cheia que a BC diz que o Canadá dava (8,95 MAF)", 8.95),
        ("Arrow, armazenamento do tratado (7,1 MAF)", 7.1),
        ("Mica, armazenamento do tratado (7,0 MAF)", 7.0),
        ("Mica, total licenciado (12 MAF)", 12.0),
    ]
    print("\n== 1b · Dias de rio médio (volume ÷ vazão média por dia)")
    for nome, v in volumes:
        partes = []
        for rio, d in rios.items():
            partes.append(f"{rio.split(' (')[0]}{' 134' if '134' in rio else ''}: {v / d:5.1f} d ({v / (d * 365.25) * 100:4.1f} % do ano)")
        print(f"  {v:5.2f} MAF  {nome}")
        print("           " + " | ".join(partes))
    print("\n== 1c · Frações")
    print(f"  3,6 / 8,45 = {3.6 / 8.45 * 100:.1f} %   3,6 / 8,95 = {3.6 / 8.95 * 100:.1f} %   3,6 / 7,1 = {3.6 / 7.1 * 100:.1f} %")
    print(f"  Mica: 80.000 af de cheia = {0.08 / 8.45 * 100:.1f} % dos 8,45 MAF; Arrow: 7,1 = {7.1 / 8.45 * 100:.1f} %")
    print(f"  Pagamento de 1964 pela cheia: Arrow 52,1 de 64,4 = {52.1 / 64.4 * 100:.1f} %")
    print(f"  Entitlement: 1.141 → 660 MW = -{(1 - 660 / 1141) * 100:.1f} %; 454 → 305 aMW = -{(1 - 305 / 454) * 100:.1f} %;"
          f" 1.141 → 550 MW = -{(1 - 550 / 1141) * 100:.1f} %; 454 → 225 aMW = -{(1 - 225 / 454) * 100:.1f} %")
    print(f"  Trecho no Canadá: 498/1.243 mi = {498 / 1243 * 100:.1f} %; 664/1.942 km = {664 / 1942 * 100:.1f} %")
    print(f"  Bacia: 39.500/259.000 mi² = {39500 / 259000 * 100:.2f} %; 99.700/666.700 km² = {99700 / 666700 * 100:.2f} %")
    print(f"  Arrow: faixa licenciada 1.444,0 − 1.377,9 = {1444.0 - 1377.9:.1f} pés; 2017: 1.401,4 (4/fev) → teto de cheia"
          f" 1.414 (fim de abril de 2018) = {1444.0 - 1414.0:.0f} pés abaixo do máximo normal")
    print(f"  Anos: 1956 → 1964 = {1964 - 1956}; 1956 → 1968 = {1968 - 1956}; 1941 → 1967/1973 = {1967 - 1941}/{1973 - 1941};"
          f" 1964 + 60 = {1964 + 60}")


def forma_do_ano(caminho):
    dados = json.load(open(caminho, encoding="utf-8"))
    por_ano = defaultdict(dict)
    for f in dados:
        p = f["properties"]
        v = p.get("MONTHLY_MEAN_DISCHARGE")
        if v is None:
            continue
        a, m = int(p["DATE"][:4]), int(p["DATE"][5:7])
        por_ano[a][m] = float(v)
    completos = {a: ms for a, ms in por_ano.items() if len(ms) == 12}
    print(f"\n== 2 · Birchbank, a forma do ano ({len(completos)} anos completos, {min(completos)}–{max(completos)})")
    periodos = [("antes (1938–1967)", 1938, 1967), ("depois (1974–2025)", 1974, 2025), ("depois (1991–2020)", 1991, 2020)]
    nomes = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"]
    for rot, a0, a1 in periodos:
        anos = [a for a in completos if a0 <= a <= a1]
        med = [sum(completos[a][m] for a in anos) / len(anos) for m in range(1, 13)]
        media_ano = sum(med) / 12
        mx, mn = max(range(12), key=lambda i: med[i]), min(range(12), key=lambda i: med[i])
        verao = sum(med[4:7]) / sum(med) * 100
        inverno = (med[11] + med[0] + med[1]) / sum(med) * 100
        print(f"  {rot}: {len(anos)} anos; média {media_ano:,.0f} m3/s")
        print("    " + " ".join(f"{n} {v:,.0f}" for n, v in zip(nomes, med)))
        print(f"    mês mais cheio: {nomes[mx]} {med[mx]:,.0f}; mais baixo: {nomes[mn]} {med[mn]:,.0f};"
              f" razão {med[mx] / med[mn]:.1f}×; mai–jul = {verao:.1f} % do volume; dez–fev = {inverno:.1f} %")
        print(f"    junho em cfs: {med[5] / M3_POR_PE3:,.0f}; fevereiro em cfs: {med[1] / M3_POR_PE3:,.0f}")


def ganchos(caminho):
    texto = open(caminho, encoding="utf-8").read()
    blocos, atual = [], []
    for linha in texto.splitlines():
        if linha.startswith("> "):
            atual.append(linha[2:])
        elif atual:
            blocos.append(" ".join(atual))
            atual = []
    if atual:
        blocos.append(" ".join(atual))
    print(f"\n== 3 · Os ganchos ({len(blocos)} blocos '> ' na pauta)")
    for i, b in enumerate(blocos, 1):
        limpo = re.sub(r"\*\[[^\]]*\]\*", "", b)
        limpo = re.sub(r"\s+", " ", limpo).strip()
        frases = [f for f in re.split(r"(?<=[.?!])\s+", limpo) if f]
        total = 0
        print(f"  -- bloco {i}: {len(limpo.split())} palavras, {len(frases)} frases,"
              f" {len(limpo.split()) / PPM * 60:.1f} s a {PPM:.0f}/min")
        for j, f in enumerate(frases, 1):
            n = len(f.split())
            print(f"     {j:2d}. ({n:2d} pal., começa aos {total / PPM * 60:5.1f} s) {f[:90]}")
            total += n


def main():
    contas_de_volume()
    for a in sys.argv[1:]:
        if a.startswith("--pauta="):
            ganchos(a.split("=", 1)[1])
        elif a.endswith(".json"):
            forma_do_ano(a)


if __name__ == "__main__":
    main()
