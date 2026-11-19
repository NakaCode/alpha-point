"""A lista da escuta do vídeo 8 (australia-animais): onde cada nome de risco da folha de pronúncia cai na narração.

Derivado do do vídeo 7 (out/rio-columbia/_pesquisa/lista-escuta.py), com os nomes de roteiros/australia-animais/pronuncia.md
("Os nomes a ouvir" e os de "Risco baixo" que a folha manda conferir). Lê out/australia-animais/narracao.json (os segmentos de
fala, com o texto de cada trecho na grafia da cópia para a voz e o tempo). O minuto é o do começo do trecho, mais a fração do
texto até o nome (uma estimativa: a voz não fala a velocidade constante; erra por alguns segundos).
Só lê. Uso (cwd na raiz): python -I -X utf8 -B out/australia-animais/_pesquisa/lista-escuta.py
"""
import json
import re

NOMES = [
    ("Diamantina", r"\bDiamantina\b", "alto"),
    ("elapids", r"(?i)\belapids?\b", "alto"),
    ("taipan / taipans", r"(?i)\btaipans?\b", "médio a alto"),
    ("LD fifty (LD50)", r"\bLD fifty\b", "médio"),
    ("Swansea", r"\bSwansea\b", "médio"),
    ("Gondwana", r"\bGondwana\b", "médio"),
    ("anemones", r"\banemones\b", "médio"),
    ("anaphylaxis", r"\banaphylaxis\b", "baixo a médio"),
    ("Arbuckle", r"\bArbuckle\b", "baixo"),
    ("Channel Country", r"\bChannel Country\b", "baixo"),
    ("Newcastle", r"\bNewcastle\b", "baixo"),
    ("funnel-web", r"(?i)\bfunnel-webs?\b", "baixo"),
]


def mmss(s):
    m, r = divmod(int(round(s)), 60)
    return f"{m}:{r:02d}"


def main():
    with open("out/australia-animais/narracao.json", encoding="utf-8") as f:
        dados = json.load(f)
    falas = [s for s in dados["segmentos"] if s.get("tipo") == "fala"]
    print("| Nome | Risco | Onde (trecho, minuto aproximado) |")
    print("|---|---|---|")
    for nome, padrao, risco in NOMES:
        lugares = []
        for s in falas:
            texto = s["texto"]
            for m in re.finditer(padrao, texto):
                t = s["start"] + (s["end"] - s["start"]) * (m.start() / max(1, len(texto)))
                lugares.append(f"{s['trecho']} ({mmss(t)})")
        print(f"| {nome} | {risco} | {', '.join(lugares) if lugares else '—'} |")


main()
