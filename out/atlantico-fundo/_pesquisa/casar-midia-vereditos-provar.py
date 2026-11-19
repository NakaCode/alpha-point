# A prova do casar-midia-vereditos.py no banco pago (a Sala, 19/11/2026, no requisitions do vídeo 8): monta um projeto falso numa
# pasta temporária, com uma cópia do casar, e confere os quatro casos da url do item.
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/casar-midia-vereditos-provar.py
# Sai 0 só se os quatro casos derem o esperado:
#   a) nenhum sha256 casa, e a url casa com um aprovado de mesmo_item true na cena: ok (pela url);
#   b) a url casa só com um veredito de mesmo_item null: SEM VEREDITO (a url só vale com mesmo_item true);
#   c) o sha256 casa com um reprovado, e a url com um aprovado: RUIM (com sha256, a url não entra);
#   d) a url casa com um aprovado de outra cena: SEM APROVADO.
import hashlib, json, shutil, subprocess, sys, tempfile
from pathlib import Path

aqui = Path(__file__).resolve()
casar = aqui.with_name("casar-midia-vereditos.py")
tmp = Path(tempfile.mkdtemp(prefix="casar-prova-"))
try:
    copia = tmp / "out" / "_ferramenta" / "_pesquisa" / "casar-midia-vereditos.py"
    copia.parent.mkdir(parents=True)
    shutil.copyfile(casar, copia)
    proj = tmp / "out" / "prova"
    media = proj / "_media"
    (proj / "_pesquisa").mkdir(parents=True)

    def clipe(cena, nome, conteudo, url):
        pasta = media / "footage" / cena
        pasta.mkdir(parents=True, exist_ok=True)
        (pasta / nome).write_bytes(conteudo)
        proc = {"itens": [{"arquivo": nome, "url": url,
                           "medido": {"sha256": hashlib.sha256(conteudo).hexdigest(), "sha256_do_baixado": "0" * 64}}]}
        (pasta / "_PROCEDENCIA.json").write_text(json.dumps(proc), encoding="utf-8")
        return hashlib.sha256(conteudo).hexdigest()

    def veredito(cena, veredito, sha, url, mesmo_item):
        return {"id": f"_media/_caca/{cena}/x.mov", "cena": cena, "veredito": veredito, "sha256": sha,
                "mesmo_item": mesmo_item, "fonte": {"url": url}}

    U = "https://www.shutterstock.com/pt/video/clip-{}-prova"
    clipe("s01", "a.mp4", b"clipe a", U.format(1))
    clipe("s02", "b.mp4", b"clipe b", U.format(2))
    sha_c = clipe("s03", "c.mp4", b"clipe c", U.format(3))
    clipe("s04", "d.mp4", b"clipe d", U.format(4))
    conf = {"candidatos": [
        veredito("s01", "aprovado", "1" * 64, U.format(1), True),
        veredito("s02", "aprovado", "2" * 64, U.format(2), None),
        veredito("s03", "reprovado", sha_c, U.format(3), True),
        veredito("s03", "aprovado", "3" * 64, U.format(3), True),
        veredito("s09", "aprovado", "4" * 64, U.format(4), True),
    ]}
    (proj / "_pesquisa" / "conferencia-midia.json").write_text(json.dumps(conf), encoding="utf-8")

    r = subprocess.run([sys.executable, "-X", "utf8", "-B", str(copia), "prova"], capture_output=True, text=True, encoding="utf-8")
    saida = r.stdout
    esperado = {
        "footage/s01/a.mp4": "ok ",
        "footage/s02/b.mp4": "SEM VEREDITO",
        "footage/s03/c.mp4": "RUIM",
        "footage/s04/d.mp4": "SEM APROVADO",
    }
    falhas = []
    for arq, marca in esperado.items():
        linha = next((l for l in saida.splitlines() if arq in l), "")
        if not linha.startswith(marca):
            falhas.append(f"{arq}: esperado '{marca.strip()}', veio '{linha.strip() or '(nada)'}'")
    if "a.mp4" in saida and "pela url" not in next((l for l in saida.splitlines() if "a.mp4" in l), ""):
        falhas.append("footage/s01/a.mp4: a linha não diz que casou pela url")
    if r.returncode != 1:
        falhas.append(f"o casar devia sair 1 (há três problemas), saiu {r.returncode}")
    print(saida)
    if falhas:
        print("PROVA FALHOU:\n  " + "\n  ".join(falhas))
        sys.exit(1)
    print("PROVA OK: os quatro casos da url do item deram o esperado.")
finally:
    shutil.rmtree(tmp, ignore_errors=True)
