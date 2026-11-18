# p_contas.py: as contas da pauta v1 do vídeo 8 (`arizona-strip`), sem rede.
#
# Uso (da raiz do canal):
#   python -X utf8 -B pautas/arizona-strip/_trabalho/scripts/p_contas.py --pauta=pautas/2026-11-18-video-8-arizona-strip.md
#
# 1. Os títulos: os caracteres de cada um.
# 2. Os blocos "> " da pauta (os ganchos e as frases seguras): palavras, frases, o tempo de cada frase a 179 palavras/min,
#    sem as marcas de fonte *[...]*, e os números ditos (algarismos e números por extenso).
# 3. O orçamento dos atos: o relógio de cada ato e a janela da inscrição (35 % a 60 % da fala).
# 4. As medidas que a pauta repete (a rota, a Strip contra Nova Jersey, o relógio), refeitas dos números dos leitores.
import re
import sys
from datetime import date

PPM = 179.0  # palavras por minuto da voz de hoje (memória ritmo-duracao)

TITULOS = [
    "Why Arizona Didn't Stop at the Grand Canyon",
    "Why Utah Wanted Part of the Grand Canyon and Arizona Said No",
    "Why Is Arizona on Both Sides of the Grand Canyon?",
    "Why Utah Spent Decades Asking for Part of the Grand Canyon",
    "Why Isn't the North Side of the Grand Canyon in Utah?",
    "Why Arizona Ends on the Wrong Side of the Grand Canyon",
]

NUM_PALAVRAS = (
    "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen "
    "nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million billion dozen twice half"
).split()  # os ordinais (first, second…) não contam: não são dado
RE_NUM = re.compile(r"\d[\d,\.]*(?:th|st|nd|rd)?|\b(?:" + "|".join(NUM_PALAVRAS) + r")\b", re.I)

# O orçamento dos atos (palavras), na ordem do vídeo. O gancho entra pela contagem do bloco A.
ATOS = [
    ("ato 1 · a muralha", 430),
    ("ato 2 · as retas de Washington", 480),
    ("ato 3 · o lado de Utah", 330),
    ("inscrição falada", 16),
    ("ato 4 · Utah pede, o Arizona diz não", 620),
    ("ato 5 · o hoje", 540),
    ("fecho", 160),
]


def mmss(s):
    return f"{int(s // 60)}:{int(round(s % 60)):02d}"


def titulos():
    print("== 1 · Os títulos")
    for t in TITULOS:
        print(f"  {len(t):3d}  {t}")


def blocos(caminho):
    texto = open(caminho, encoding="utf-8").read()
    bl, atual = [], []
    for linha in texto.splitlines():
        if linha.startswith("> "):
            atual.append(linha[2:])
        elif atual:
            bl.append(" ".join(atual))
            atual = []
    if atual:
        bl.append(" ".join(atual))
    print(f"\n== 2 · Os blocos '> ' da pauta ({len(bl)})")
    saida = []
    for i, b in enumerate(bl, 1):
        limpo = re.sub(r"\*\[[^\]]*\]\*", "", b)
        limpo = re.sub(r"\s+", " ", limpo).strip()
        protegido = re.sub(r"\b(St|Mt|Ariz|Lt|D\.C)\. ", r"\1§ ", limpo)  # abreviações não fecham frase
        frases = [f.replace("§", ".") for f in re.split(r"(?<=[.?!])[\"”’]?\s+", protegido) if f]
        nums = RE_NUM.findall(limpo)
        n = len(limpo.split())
        print(f"  -- bloco {i}: {n} palavras, {len(frases)} frases (média {n / max(len(frases), 1):.1f}),"
              f" {n / PPM * 60:.1f} s a {PPM:.0f}/min; números: {len(nums)} {nums}")
        total = 0
        for j, f in enumerate(frases, 1):
            k = len(f.split())
            print(f"     {j:2d}. ({k:2d} pal., começa aos {total / PPM * 60:5.1f} s) {f[:100]}")
            total += k
        saida.append((limpo, n))
    return saida


def orcamento(palavras_gancho):
    print("\n== 3 · O orçamento dos atos")
    total = palavras_gancho + sum(p for _, p in ATOS)
    dur = total / PPM * 60
    print(f"  total: {total} palavras = {dur / 60:.2f} min ({mmss(dur)}), mais os 20 s da cauda")
    print(f"  janela da inscrição (35–60 % da fala): {mmss(dur * .35)} a {mmss(dur * .60)}")
    t = palavras_gancho / PPM * 60
    print(f"  {'gancho A':40s} {palavras_gancho:4d}  0:00–{mmss(t)}")
    for nome, p in ATOS:
        ini = t
        t += p / PPM * 60
        extra = f"  ({ini / dur * 100:.0f} % do vídeo)" if "inscrição" in nome else ""
        print(f"  {nome:40s} {p:4d}  {mmss(ini)}–{mmss(t)}{extra}")


def medidas():
    print("\n== 4 · As medidas (dos números de fatos-b.md)")
    ut, nv, az = 47.8, 117.9, 100.6
    tot = ut + nv + az
    print(f"  rota pelas rodovias numeradas (HPMS 2025): {tot:.1f} mi; Utah + Nevada {ut + nv:.1f} ({(ut + nv) / tot * 100:.0f} %)"
          f"; com as pontas (0,7 + 0,9): {tot + 1.6:.1f}")
    so_az = 31.18 + 30 + 164 + 151.4
    print(f"  só pelo Arizona (HPMS + NPS): {so_az:.1f} mi; a diferença: {so_az - tot:.0f} mi")
    strip, nj, az_terra = 7851.22, 7354.8, 113653.4
    print(f"  Strip {strip:,.0f} mi² contra Nova Jersey {nj:,.0f}: +{(strip / nj - 1) * 100:.2f} %;"
          f" {strip / az_terra * 100:.2f} % da terra do Arizona; 9.955 de 7.151.502 = {9955 / 7151502 * 100:.3f} % da gente")
    d = (date(2026, 11, 1) - date(2026, 3, 8)).days
    print(f"  horário de verão de 2026 (08/03 a 01/11): {d} dias = {d / 7:.1f} semanas; 2027 (14/03 a 07/11):"
          f" {(date(2027, 11, 7) - date(2027, 3, 14)).days} dias")
    print(f"  1897 → 1919: {1919 - 1897} anos; 1865 → 1919: {1919 - 1865}; 1850 → 1869 (Powell): {1869 - 1850};"
          f" 1850 → 1857 (Ives): {1857 - 1850}; 1863 (Arizona) → 1866 (Nevada): {1866 - 1863}")
    print(f"  1919 → hoje (2026): {2026 - 1919} anos; 1905 → hoje: {2026 - 1905}")


def main():
    titulos()
    ns = []
    for a in sys.argv[1:]:
        if a.startswith("--pauta="):
            ns = blocos(a.split("=", 1)[1])
    # o gancho A é o bloco que abre com as duas bordas
    gancho_a = [n for texto, n in ns if texto.startswith("The North Rim and the South Rim")]
    orcamento(gancho_a[0] if gancho_a else 140)
    medidas()


if __name__ == "__main__":
    main()
