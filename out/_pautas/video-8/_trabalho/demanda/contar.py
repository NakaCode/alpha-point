"""Conta famílias e formatos de título nos estouros coletados (c*.tsv e s*.tsv desta pasta).

Uso: python -X utf8 -B contar.py
Regras: tira duplicados por videoId, fica com o publicado em 2026 e com duração >= 3 min (vídeo longo).
Saída: contagens.md nesta pasta.
"""
import csv
import glob
import os
import re
import statistics

AQUI = os.path.dirname(os.path.abspath(__file__))


def minutos(d):
    partes = [int(p) for p in d.split(":") if p.strip().isdigit()]
    if not partes:
        return 0
    if len(partes) == 3:
        return partes[0] * 60 + partes[1] + partes[2] / 60
    if len(partes) == 2:
        return partes[0] + partes[1] / 60
    return partes[0] / 60


def numero(x):
    try:
        return float(x)
    except (TypeError, ValueError):
        return None


linhas = {}
for caminho in sorted(glob.glob(os.path.join(AQUI, "*.tsv"))):
    with open(caminho, encoding="utf-8") as f:
        texto = [l for l in f if not l.startswith("#")]
    leitor = csv.DictReader(texto, delimiter="\t")
    for r in leitor:
        vid = (r.get("videoId") or "").strip()
        if not vid or vid in linhas:
            continue
        nota = r.get("breakout") or r.get("outlierScore")
        linhas[vid] = {
            "title": r.get("title", ""),
            "channel": r.get("channel", ""),
            "subs": numero(r.get("subs")),
            "views": numero(r.get("views")),
            "nota": numero(nota),
            "published": r.get("published", ""),
            "dur": minutos(r.get("duration", "0")),
        }

base = [v for v in linhas.values() if v["published"].startswith("2026") and v["dur"] >= 3]

familias = {
    "por que ninguém vive / vazio (nobody/no one lives, empty, so few people)": r"nobody|no one lives|empty|so few people|almost no one",
    "\"X Is Hiding Something (Nobody Talks About)\"": r"hiding something",
    "rio ou lago (river, lake)": r"\briver\b|\blake\b",
    "\"Not What You Think\" / \"Isn't Really a River\" / \"No Longer Makes Sense\"": r"not what you think|isn.t really|no longer makes sense|aren.t what you think",
    "\"Sitting On The Most Valuable Land\"": r"sitting on",
    "fronteira, enclave, tratado (border, treaty)": r"border|enclave|exclave|treaty",
    "\"Most Important\" / \"Collapsing\"": r"most important|collaps",
    "invadir / potência (invade, powerful)": r"invade|powerful|conquer|fight russia",
    "\"We Drained X\"": r"we drained",
    "\"Shouldn't Exist\" / \"Makes No Sense\" / \"Opposite of\"": r"shouldn.t exist|makes no sense|make no sense|opposite of",
    "\"Geography Is INSANE\" / fatos em lista": r"insane|\bfacts\b",
}

formatos = {
    "começa com \"Why\"": lambda t: t.strip().lower().startswith("why"),
    "tem palavra toda em maiúsculas (NOBODY, HUGE, INSANE...)": lambda t: bool(re.search(r"\b[A-Z]{4,}\b", t)),
    "\"Nobody\"/\"NOBODY\" no título": lambda t: "nobody" in t.lower(),
    "número no título (lista ou cifra)": lambda t: bool(re.search(r"\d", t)),
    "parêntese no título": lambda t: "(" in t,
    "nome de lugar dos EUA ou do Canadá": lambda t: bool(re.search(
        r"america|u\.s\.|\bus\b|usa|united states|texas|california|florida|washington|alaska|hawaii|idaho|maine|montana|wyoming|nevada|arizona|tennessee|kentucky|ohio|michigan|louisiana|mississippi|missouri|georgia|virginia|colorado|carolina|new hampshire|alabama|oregon|seattle|tucson|mesa|denver|phoenix|detroit|hudson|chicago|canada|canadian|ontario|saskatchewan|alberta|quebec|st\. lawrence|ottawa|lake tahoe|lake erie|lake superior|lake mead|lake powell|great lakes|great salt lake|crater lake|chattahoochee|minnesota|deep south|east coast|west coast|pacific northwest|big bend|puget|long island|new york|new jersey|newark|st\. louis|san antonio|harlan|appalachian|delmarva",
        t.lower())),
}


def resumo(grupo):
    notas = [g["nota"] for g in grupo if g["nota"] is not None]
    pequenos = [g for g in grupo if g["subs"] is not None and g["subs"] <= 100000]
    med = statistics.median(notas) if notas else None
    return len(grupo), len(pequenos), med


saida = []
saida.append("# Contagens dos títulos (gerado por contar.py)\n")
saida.append(f"Base: {len(base)} vídeos longos (>= 3 min) publicados em 2026, sem duplicados, de todas as respostas salvas nesta pasta "
             f"(as linhas que eu tirei por estarem fora do tema não entram).\n")
saida.append("\n## Famílias de assunto (um título pode cair em mais de uma)\n")
saida.append("| família | vídeos | em canal até 100 mil | nota de estouro mediana |")
saida.append("|---|---|---|---|")
for nome, rx in familias.items():
    grupo = [v for v in base if re.search(rx, v["title"], re.I)]
    n, p, med = resumo(grupo)
    saida.append(f"| {nome} | {n} | {p} | {med if med is None else round(med, 1)}x |")
saida.append("\n## Formatos de título\n")
saida.append("| formato | vídeos | em canal até 100 mil | nota de estouro mediana |")
saida.append("|---|---|---|---|")
for nome, fn in formatos.items():
    grupo = [v for v in base if fn(v["title"])]
    n, p, med = resumo(grupo)
    saida.append(f"| {nome} | {n} | {p} | {med if med is None else round(med, 1)}x |")

duracoes = [v["dur"] for v in base]
saida.append("\n## Duração\n")
saida.append(f"- mediana: {round(statistics.median(duracoes), 1)} min; "
             f"entre 10 e 20 min: {sum(1 for d in duracoes if 10 <= d <= 20)}; "
             f"acima de 30 min: {sum(1 for d in duracoes if d > 30)}")

with open(os.path.join(AQUI, "contagens.md"), "w", encoding="utf-8") as f:
    f.write("\n".join(saida) + "\n")
print("\n".join(saida))
