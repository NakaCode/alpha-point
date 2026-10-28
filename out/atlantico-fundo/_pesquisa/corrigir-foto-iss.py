# Corrige o que os registros diziam da foto de abertura do vídeo 4 (atlantico-fundo): a ISS071-E-1036 mostra Porto Rico
# inteiro, e quem mostra San Juan de perto é a 1042. O registro de 24/10 tinha trocado as duas; a Sala conferiu em 28/10/2026
# pela folha do conferente (out/atlantico-fundo/_tmp/conferencia/lote2/s01-folha.jpg, feita dos arquivos inteiros).
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/corrigir-foto-iss.py
# Cada troca tem de casar o número exato de vezes; se uma não casar, nada se grava.
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[3]
CORRECAO = ("Correção de 28/10/2026 (a Sala, pela folha do conferente, out/atlantico-fundo/_tmp/conferencia/lote2/s01-folha.jpg): "
            "a 1036 mostra a ilha inteira, e quem mostra San Juan de perto (a baía, o aeroporto e a lagoa) é a 1042; o registro de "
            "24/10 tinha trocado as duas.")

TROCAS = {
    "pautas/atlantico-fundo/fundamento.json": [
        ("a costa norte de Porto Rico em San Juan, com o Atlântico no terço de cima e o norte para cima.",
         "Porto Rico inteiro, com Vieques e Culebra a leste e a Mona a sudoeste, o mar em volta (o Atlântico no terço de cima) e o "
         "norte para cima.", 1),
        ("Not 'right there' or 'off this coast' pointing at San Juan with the 83 miles.",
         "Not 'right there' or 'off this coast' pointing at one spot of the island with the 83 miles: they run from the Aguadilla "
         "coast.", 1),
        ("traz nomes impressos na prévia: reserva, a conferir.\"",
         "traz nomes impressos na prévia: reserva, a conferir. " + CORRECAO + "\"", 1),
        ("\"decisao\": \"A foto mostra San Juan; as 83 mi são de Aguadilla.\"",
         "\"decisao\": \"A foto mostra a ilha inteira (corrigido em 28/10/2026: o registro de 24/10 dizia San Juan, que é a 1042); "
         "as 83 mi são da costa de Aguadilla.\"", 1),
    ],
    "pautas/atlantico-fundo/fundamento.md": [
        ("a costa norte de Porto Rico em San Juan, com o Atlântico no terço de cima e o norte para cima.",
         "Porto Rico inteiro, com Vieques e Culebra a leste e a Mona a sudoeste, o mar em volta (o Atlântico no terço de cima) e o "
         "norte para cima.", 1),
        ("A foto mostra San Juan; as 83 mi são de Aguadilla.",
         "A foto mostra a ilha inteira (corrigido em 28/10/2026: o registro de 24/10 dizia San Juan, que é a 1042); as 83 mi são da "
         "costa de Aguadilla.", 1),
    ],
    "roteiros/atlantico-fundo/roteiro-editor.md": [
        ("(a foto mostra San Juan; as 83 mi são de Aguadilla)", "(a foto mostra a ilha inteira; as 83 mi são da costa de Aguadilla)", 1),
        ("a foto da ISS, San Juan e o mar ao norte,", "a foto da ISS, Porto Rico inteiro e o mar ao norte,", 1),
    ],
    "roteiros/atlantico-fundo/abertura-conferida-2026-10-24.md": [
        ("  - é a costa norte de Porto Rico em San Juan: a baía, o aeroporto e a lagoa, com o norte para cima;\n",
         "  - é a costa norte de Porto Rico em San Juan: a baía, o aeroporto e a lagoa, com o norte para cima;\n"
         "    - **Corrigido em 28/10/2026:** essa é a descrição da 1042. A 1036 mostra Porto Rico inteiro, com Vieques e Culebra a "
         "leste e a Mona a\n      sudoeste (a Sala, pela folha do conferente, `out/atlantico-fundo/_tmp/conferencia/lote2/s01-folha.jpg`, "
         "feita dos arquivos inteiros);\n", 1),
    ],
    "roteiros/atlantico-fundo/decisoes-lucas.md": [
        ("A foto mostra San Juan, e a\n    fossa fica fora do quadro.",
         "A foto mostra San Juan (corrigido em\n    28/10/2026: mostra Porto Rico inteiro; San Juan de perto é a 1042), e a fossa "
         "fica fora do quadro.", 1),
    ],
}

novos = {}
for rel, trocas in TROCAS.items():
    p = RAIZ / rel
    t = p.read_text(encoding="utf-8")
    for velho, novo, vezes in trocas:
        n = t.count(velho)
        if n != vezes:
            sys.exit(f"{rel}: esperava {vezes} vez(es), achei {n}: {velho[:70]!r}")
        t = t.replace(velho, novo)
    novos[p] = t

for p, t in novos.items():
    p.write_text(t, encoding="utf-8", newline="\n")
    print("ok", p.relative_to(RAIZ).as_posix())
