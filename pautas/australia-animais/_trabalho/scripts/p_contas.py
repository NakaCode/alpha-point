# p_contas.py: as contas da pauta do vídeo 8 (`australia-animais`), sem rede. Na v2 (depois do cético da v1), os títulos e os atos novos.
#
# Uso (da raiz do canal):
#   python -X utf8 -B pautas/australia-animais/_trabalho/scripts/p_contas.py --pauta=pautas/2026-11-18-video-8-australia-pauta.md
#
# 1. Os títulos: os caracteres de cada um (os três do teste e os que caíram).
# 2. Os blocos "> " da pauta (os ganchos e as frases seguras): palavras, frases, o tempo de cada frase a 179 palavras/min,
#    sem as marcas de fonte *[...]*, e os números ditos (algarismos e números por extenso; a contagem do regex é bruta).
# 3. O orçamento dos atos: o relógio de cada ato e a janela da inscrição (35 % a 60 % da fala).
# 4. As medidas que a pauta repete, refeitas dos números dos leitores (fatos-b.md, medida-b.csv; fatos-a.md).
import re
import sys

PPM = 179.0  # palavras por minuto da voz de hoje (memória ritmo-duracao)

TITULOS = [
    # v2, depois da correção do Lucas (18/11, ~12h): os quatro do teste (o dele e os 3 mais clicáveis dos seis já propostos)
    "Why Does Australia Have So Many Dangerous Animals?",
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia's Deadliest Snake Isn't Its Most Venomous One",
    "Why Australia's Spiders Stopped Killing People",
    # v2, antes da correção: os três que a v2 tinha posto no teste (agora o 1 é reserva, e os outros dois, sugestões fora do teste)
    "Australia Has the Venom. Why Doesn't It Have the Deaths?",
    "How Australia Ended Up With So Many Venomous Snakes",
    "Australia's Most Venomous Snake Lives Where Almost No One Does",
    # v2: as reservas do 2 e do 3
    "Where Australia's Venomous Snakes Came From",
    "The Snake That Actually Kills Australians",
    # v2: os que caíram na colisão da Sala (o 2 e o 3 do cético)
    "Why Most of Australia's Snakes Are Venomous",
    "Australia's Deadliest Snake Isn't Its Most Venomous One",
    # v1: os três do teste (caíram na colisão, K2)
    "Why So Few People Die From Australia's Deadly Animals",
    "Australia Has the World's Most Venomous Snake. It Rarely Kills.",
    "Why Australia's Spiders Stopped Killing People",
    # v1: as alternativas e os que caíram
    "Why So Few People Die From Australia's Venomous Animals",
    "Why Does Australia Have So Many Deadly Animals?",
    "Why Australia's Deadliest Animals Kill Almost No One",
    "In Australia, Beds Kill More People Than Venomous Animals",
    "Is Australia Really More Dangerous Than America?",
    "The Real Reason Australia Has So Many Venomous Animals",
    "Why Australia's Animals Are So Venomous, Yet So Rarely Deadly",
    "Australia Has the World's Most Venomous Snake. It's Not the Killer.",
]

NUM_PALAVRAS = (
    "one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen "
    "nineteen twenty thirty forty fifty sixty seventy eighty ninety hundred thousand million billion dozen twice half"
).split()  # os ordinais (first, second…) não contam: não são dado
RE_NUM = re.compile(r"\d[\d,\.]*(?:th|st|nd|rd|s)?|\b(?:" + "|".join(NUM_PALAVRAS) + r")\b", re.I)

# O orçamento dos atos (palavras), na ordem do vídeo. O gancho entra pela contagem do bloco A.
ATOS = [  # a v2
    ("ato 1 · o registro e a fama", 360),
    ("ato 2 · as cobras que vieram da Ásia", 430),
    ("ato 3 · a taipan e o vazio", 380),
    ("inscrição falada", 15),
    ("ato 4 · a marrom e o endereço", 340),
    ("ato 5 · o norte e as aranhas", 420),
    ("ato 6 · quem mata de verdade", 360),
    ("fecho", 175),
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
        protegido = re.sub(r"\b(St|Mt|Dr|Lt|D\.C)\. ", r"\1§ ", limpo)  # abreviações não fecham frase
        frases = [f.replace("§", ".") for f in re.split(r"(?<=[.?!])[\"”’]?\s+", protegido) if f]
        nums = RE_NUM.findall(limpo)
        n = len(limpo.split())
        print(f"  -- bloco {i}: {n} palavras, {len(frases)} frases (média {n / max(len(frases), 1):.1f}),"
              f" {n / PPM * 60:.1f} s a {PPM:.0f}/min; números (regex): {len(nums)} {nums}")
        total = 0
        for j, f in enumerate(frases, 1):
            k = len(f.split())
            print(f"     {j:2d}. ({k:2d} pal., começa aos {total / PPM * 60:5.1f} s, termina aos"
                  f" {(total + k) / PPM * 60:5.1f} s) {f[:100]}")
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
    print(f"  {'gancho A':44s} {palavras_gancho:4d}  0:00–{mmss(t)}")
    for nome, p in ATOS:
        ini = t
        t += p / PPM * 60
        extra = f"  ({ini / dur * 100:.0f} % do vídeo)" if "inscrição" in nome else ""
        print(f"  {nome:44s} {p:4d}  {mmss(ini)}–{mmss(t)}{extra}")


def medidas():
    print("\n== 4 · As medidas (dos números de fatos-b.md e fatos-a.md)")
    # ABS, Causes of Death 2025, tabela 1.2 (X20–X29), e a ERP de 30/jun (soma de pessoas-ano 2016–2025)
    venenosos = [4, 10, 19, 6, 9, 6, 6, 8, 11, 6]
    cobras = [2, 2, 9, 1, 6, 2, 3, 2, 5, 3]
    abelhas = [2, 7, 10, 4, 2, 3, 2, 6, 4, 2]
    pessoas_ano = 257_890_800
    v = sum(venenosos)
    print(f"  venenosos 2016–2025: {v} ({v / 10:.1f}/ano); cobras {sum(cobras)}; abelhas e vespas {sum(abelhas)};"
          f" aranhas 0; 2025: {venenosos[-1]}")
    print(f"  chance por ano: 1 em {pessoas_ano / v:,.0f} ({v / pessoas_ano * 1e5:.3f} por 100.000);"
          f" numa vida de 80 anos (ilustrativo): 1 em {pessoas_ano / v / 80:,.0f}")
    print(f"  cobras: {sum(cobras) / pessoas_ano * 1e5:.4f} por 100.000 por ano (1 em {pessoas_ano / sum(cobras):,.0f})")
    # as comparações do ABS
    cama25, cama10, calor10, agua_nat10, afog10, estrada25 = 118, 864, 202, 1010, 2077, 1276
    nao_ven10, cao10, w55_v80 = 154, 42, 127
    print(f"  queda envolvendo cama, 2025: {cama25} = {cama25 / v:.2f}× os venenosos de DEZ anos; {cama25 / venenosos[-1]:.1f}× os de 2025")
    print(f"  calor natural (X30), 10 anos: {calor10} = {calor10 / v:.1f}×; afogamento em água natural (W69): {agua_nat10} ="
          f" {agua_nat10 / v:.1f}×; afogamento total (W65–W74): {afog10} = {afog10 / v:.1f}×")
    print(f"  estrada 2025: {estrada25} = {estrada25 / venenosos[-1]:.0f}× os venenosos de 2025")
    print(f"  não venenosos (W53–W59), 10 anos: {nao_ven10} = {nao_ven10 / v:.2f}× os venenosos; cão {cao10};"
          f" o proxy W55 + V80: {w55_v80} = {w55_v80 / v:.2f}×; a fatia dos não venenosos: {nao_ven10 / (nao_ven10 + v) * 100:.0f} %")
    # Welton (a tabela do comunicado da University of Melbourne)
    intern = {"cobras": (27, 6123), "abelhas e vespas": (27, 12351), "aranhas": (0, 11994), "carrapatos e formigas": (5, 4533),
              "marinhos": (3, 3707), "escorpiões": (0, 61), "centopeias": (0, 119), "desconhecido": (2, 536)}
    m = sum(a for a, _ in intern.values())
    i = sum(b for _, b in intern.values())
    print(f"  Welton: {m} mortes e {i:,} internações (1 a cada {i / m:.0f}); aranhas {intern['aranhas'][1]:,} e 0;"
          f" a fatia das aranhas: {intern['aranhas'][1] / i * 100:.1f} %; cobras: 1 a cada {6123 / 27:.0f}")
    # ASP-20 (Johnston et al. 2017, resumo)
    print(f"  ASP-20: 23 mortes, 17 marrons ({17 / 23 * 100:.0f} %), 4 tigres, 2 desconhecidas; 10 depois de parada cardíaca"
          f" fora do hospital ({10 / 23 * 100:.0f} %, 'nearly half'); 4,3 h até o soro (mediana)")
    # a taipan-do-interior (Weinstein 2017): 11 anteriores + o caso do artigo
    print(f"  taipan-do-interior: {11 + 1} envenenamentos bem documentados, {2 + 1} por cobra selvagem, {12 - 3} não selvagens")
    # Austrália contra os EUA (o lado dos EUA vem do resumo de Forrester et al. 2018)
    au = (154 + 85) / pessoas_ano * 1e7
    eua = 1610 / 2_504_000_000 * 1e7
    print(f"  animais (W53–W59 + X20–X29): Austrália {au:.2f} contra EUA {eua:.2f} por 10 milhões por ano = {au / eua:.2f}×;"
          f" himenópteros {42 / pessoas_ano * 1e7:.2f} contra {0.297 * 1610 / 2_504_000_000 * 1e7:.2f}")
    print(f"  a soma do próprio resumo dos EUA: 4,8 (não venenosos) + 1,91 (himenópteros) = {4.8 + 1.91:.2f} > {eua:.2f}: não fecha")
    # a Índia (Mohapatra 2011, resumo): taxa padronizada, de inquérito; a australiana é bruta, do registro
    print(f"  Índia 4,1 por 100.000 contra Austrália {sum(cobras) / pessoas_ano * 1e5:.4f}: {4.1 / (sum(cobras) / pessoas_ano * 1e5):.0f}×"
          f" (medidas diferentes: 'hundreds of times')")
    # a deriva (fatos-a)
    print(f"  7 cm por ano = {7 / 2.54:.2f} polegadas ('almost three inches'); do rifte (85–80 Ma) à deriva rápida (45 Ma):"
          f" {80 - 45} a {85 - 45} milhões de anos")
    print(f"  endemismo (ABS 2002, tabela): mamíferos {206 / 260 * 100:.1f} %, répteis {641 / 748 * 100:.1f} %, aves {350 / 649 * 100:.1f} %"
          f" (o texto do ABS: 'About 90% of our reptiles and frog species')")
    # os anos entre os fatos
    print(f"  o soro da funnel-web (1981) → 2026: {2026 - 1981} anos ('more than 40', como o parque diz); o do redback (1955/56) → 2026:"
          f" {2026 - 1956} a {2026 - 1955}; o primeiro soro (tigre, 1930) → 2026: {2026 - 1930}")
    print(f"  Hayman, 1935 → 2026: {2026 - 1935} anos; a proteção do crocodilo (1971) → 2026: {2026 - 1971};"
          f" a caça de 1945 a 1971: {1971 - 1945} anos")
    print(f"  a vespa-do-mar no Território do Norte, 1991–2004: {2004 - 1991 + 1} anos, 1 morte em 225 picadas = {1 / 225 * 100:.2f} %")
    print(f"  o parque: ~150 ordenhas por frasco; até 13 frascos num paciente = até {150 * 13:,} ordenhas")
    # v2: as contas do cético (cetico_contas.py), refeitas para a pauta
    mes = estrada25 / 12
    print(f"  v2 · a estrada de 2025 por mês: {mes:.1f}; os 85 de dez anos = {v / mes:.2f} mês = {v / (estrada25 / 365):.1f} dias de estrada")
    print(f"  v2 · as cobras (Lee, via Live Science, a conferir): 145 de 220 = {145 / 220 * 100:.1f} % ('65%'); o mundo, ~15 %:"
          f" {145 / 220 / 0.15:.1f} vezes a fração")
    print(f"  v2 · a queda envolvendo cama (W06), a média de dez anos: {cama10 / 10:.1f} por ano (o pico de 2025, preliminar: {cama25})")


def main():
    titulos()
    ns = []
    for a in sys.argv[1:]:
        if a.startswith("--pauta="):
            ns = blocos(a.split("=", 1)[1])
    gancho_a = [n for texto, n in ns if texto.startswith("Out on the floodplains")]
    orcamento(gancho_a[0] if gancho_a else 130)
    medidas()


if __name__ == "__main__":
    main()
