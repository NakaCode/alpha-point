# fatos-medidas-r2.py: a medida nova que a conferência de fatos do r2 (big-sur, 02/11/2026) precisou. As medidas da rodada 1 continuam
# em fatos-medidas.txt (M01 a M20); esta grava só a M21 em fatos-medidas-r2.txt. Uso (cwd = raiz do canal):
#   python -I -X utf8 -B roteiros/big-sur/qc-roteiro/fatos-medidas-r2.py
import html, re, os

RAIZ = os.getcwd()
def texto(rel):
    t = open(os.path.join(RAIZ, rel), encoding="utf-8", errors="replace").read()
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", t)))

fhwa = texto("midia/big-sur/fontes/web/fhwa-back0403-2026-11-02.htm")
plano = texto("midia/big-sur/fontes/bigsur-lup-1986-govinfo.htm")
inicio = re.search(r"Construction on Highway One began in (\d{4})", fhwa)
fim = re.search(r"On June 27, ?(\d{4}), the highway was completed", plano)
dezenove = re.search(r"became \$10 million nineteen years later", fhwa)
assert inicio and fim and dezenove, "a frase da FHWA ou a do plano não está na cópia"
a0, a1 = int(inicio.group(1)), int(fim.group(1))
anos = a1 - a0
linhas = [
    "fatos-medidas-r2.txt (big-sur, verificador de fatos, r2, 2026-11-02): saida de roteiros/big-sur/qc-roteiro/fatos-medidas-r2.py",
    "",
    "== F. A obra da estrada (FHWA, L4; o plano de 1986, P [1232]) ==",
    f"M21 Highway 1 construction from {a0} (FHWA: 'Construction on Highway One began in {a0}') to June 27, {a1} (the plan) "
    f"= {anos} years by calendar year = {anos / 10:.1f} decades; the FHWA counts nineteen years from the {a0} estimate to the $10 million cost "
    f"('{dezenove.group(0)}') = 1.9 decades",
]
open(os.path.join(RAIZ, "roteiros/big-sur/qc-roteiro/fatos-medidas-r2.txt"), "w", encoding="utf-8", newline="\n").write("\n".join(linhas) + "\n")
print("\n".join(linhas))
