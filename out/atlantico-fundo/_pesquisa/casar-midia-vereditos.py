# Casa cada arquivo entregue em out/<proj>/_media/ com um veredito do conferente-de-midia (a Sala, antes do `regie advance`
# do research; CLAUDE.md, "Os especialistas": todo arquivo entregue em _media/<tipo>/<cena>/, pessoa/, logo/ e documento/,
# menos os -prova, casado com um veredito, e nenhum reprovado nem trocar em arquivo que continua lá).
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/casar-midia-vereditos.py <proj>
# Casa pelo sha256 do arquivo; no acervo aberto, também pelo sha256 do rascunho julgado que o _PROCEDENCIA.json da pasta grava
# (medido.sha256 ou medido.medido_no_download.sha256). Sai 0 só se todo arquivo casar com um aprovado da mesma cena (ou de
# cena declarada no veredito) e nenhum casar com reprovado ou trocar.
import hashlib, json, sys
from pathlib import Path

proj = sys.argv[1]
raiz = Path(__file__).resolve().parents[3]
media = raiz / "out" / proj / "_media"
conf = json.loads((raiz / "out" / proj / "_pesquisa" / "conferencia-midia.json").read_text(encoding="utf-8"))

FORA = {"_caca", "geo", "_vendor", "base"}

def sha(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()

def shas_da_procedencia(pasta, nome):
    """sha256 dos rascunhos julgados que o _PROCEDENCIA.json da pasta liga a este arquivo."""
    out = set()
    p = pasta / "_PROCEDENCIA.json"
    if not p.exists():
        return out
    try:
        d = json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return out
    itens = d.get("itens") if isinstance(d, dict) else d
    if isinstance(d, dict) and not itens:
        itens = [d]
    for it in itens or []:
        if not isinstance(it, dict):
            continue
        if it.get("arquivo") and Path(str(it["arquivo"])).name != nome:
            continue
        m = it.get("medido") or {}
        for v in (m.get("sha256"), (m.get("medido_no_download") or {}).get("sha256"), it.get("sha256"),
                  it.get("sha256_rascunho")):
            if isinstance(v, str) and len(v) == 64:
                out.add(v.lower())
    return out

por_sha = {}
for v in conf.get("candidatos", []):
    s = (v.get("sha256") or "").lower()
    if s:
        por_sha.setdefault(s, []).append(v)

entregues = []
for p in sorted(media.rglob("*")):
    if not p.is_file():
        continue
    rel = p.relative_to(media)
    if rel.parts[0] in FORA or p.name.startswith("_master") or p.name == "_PROCEDENCIA.json":
        continue
    if p.suffix.lower() == ".json" or "-prova" in p.stem or ".de-" in p.name:
        continue
    entregues.append(p)

problemas = 0
for p in entregues:
    rel = p.relative_to(media).as_posix()
    partes = p.relative_to(media).parts
    cena = partes[1] if len(partes) > 2 else None
    s = sha(p)
    cands = list(por_sha.get(s, []))
    for s2 in shas_da_procedencia(p.parent, p.name):
        cands += por_sha.get(s2, [])
    if not cands:
        problemas += 1
        print(f"SEM VEREDITO  {rel}  ({s[:12]})")
        continue
    vs = sorted({(c["cena"], c["veredito"]) for c in cands})
    ruins = [x for x in vs if x[1] in ("reprovado", "trocar")]
    bons = [x for x in vs if x[1] == "aprovado" and (cena is None or x[0] == cena)]
    if ruins and not bons:
        problemas += 1
        print(f"RUIM         {rel}  {vs}")
    elif not bons:
        problemas += 1
        print(f"SEM APROVADO {rel}  {vs}")
    else:
        print(f"ok           {rel}  {vs}")

print(f"\n{len(entregues)} arquivos entregues; {problemas} com problema")
sys.exit(1 if problemas else 0)
