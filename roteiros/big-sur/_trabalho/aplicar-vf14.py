# A troca VF14 do laudo final de fatos (02/11/2026), aplicada pela Sala palavra por palavra, e os carimbos.
# Uso: python -I -X utf8 -B roteiros/big-sur/_trabalho/aplicar-vf14.py   (cwd = raiz do canal)
import json, subprocess
R = "roteiros/big-sur"
de = "Together, Los Angeles and San Francisco hold more than 17 million people."
para = "Together, the Los Angeles and San Francisco metro areas hold more than 17 million people."
def ler(f): return open(f, encoding="utf-8").read()
def gravar(f, s): open(f, "w", encoding="utf-8", newline="").write(s)
for f, n in [(f"{R}/roteiro-narrador.md", 1), (f"{R}/roteiro-editor.md", 2), (f"{R}/qc-roteiro/fatos-tabela.json", 2)]:
    s = ler(f)
    assert s.count(de) == n, (f, s.count(de))
    gravar(f, s.replace(de, para))
json.loads(ler(f"{R}/qc-roteiro/fatos-tabela.json"))
sai = subprocess.run(["node", f"{R}/_ferramentas/gate.mjs"], capture_output=True, text=True, encoding="utf-8")
sha = json.loads(sai.stdout)["sha256"][:12]
print("portão exit", sai.returncode, "sha novo", sha)
ed = ler(f"{R}/roteiro-editor.md")
assert ed.count("Revisão do roteiro: `dbf3aa915b13`") == 1
gravar(f"{R}/roteiro-editor.md", ed.replace("Revisão do roteiro: `dbf3aa915b13`", f"Revisão do roteiro: `{sha}`"))
la = ler(f"{R}/qc-roteiro/fatos.laudo.md")
velho = "Revisão julgada: `dbf3aa915b13` · data-base 2026-11-02"
assert la.count(velho) == 1
nota = (f"Revisão julgada: `{sha}` · data-base 2026-11-02\n\n> Troca da Sala depois deste laudo (02/11/2026): a VF14, aplicada palavra por palavra na f186 "
        "(\"Together, the Los Angeles and San Francisco metro areas hold more than 17 million people.\"). O laudo julgou `dbf3aa915b13`; "
        "nenhuma outra frase mudou, e a tabela leva a frase nova.")
gravar(f"{R}/qc-roteiro/fatos.laudo.md", la.replace(velho, nota))
