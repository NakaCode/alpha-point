"""A lista da escuta do vídeo 7 (rio-columbia): onde cada nome de risco da folha de pronúncia cai na narração.

Lê out/rio-columbia/narracao.json (os segmentos de fala, com o texto de cada trecho e o tempo) e procura os nomes de
roteiros/rio-columbia/pronuncia.md que a Sala marcou para o Lucas ouvir. O minuto é o do começo do trecho, mais a fração
do texto até o nome (uma estimativa: a voz não fala a velocidade constante; erra por alguns segundos).
Só lê. Uso (cwd na raiz): python -I -X utf8 -B out/rio-columbia/_pesquisa/lista-escuta.py
"""
import json
import re

NOMES = [
    ("The Dalles", r"\bThe Dalles\b", "alto"),
    ("Sinixt", r"\bSinixt\b", "alto"),
    ("Renata", r"\bRenata\b", "médio"),
    ("Grand Coulee", r"\bGrand Coulee\b", "médio"),
    ("Oregon", r"\bOregon\b", "baixo a médio"),
    ("acre-foot / acre-feet", r"\bacre-f(?:oo|ee)t\b", "baixo a médio"),
    ("U.S.", r"\bU\.S\.", "baixo"),
    ("Vanport", r"\bVanport\b", "baixo"),
]


def mmss(s):
    m, r = divmod(int(round(s)), 60)
    return f"{m}:{r:02d}"


def main():
    with open("out/rio-columbia/narracao.json", encoding="utf-8") as f:
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
