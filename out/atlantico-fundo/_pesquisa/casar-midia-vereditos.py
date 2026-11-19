# Casa cada arquivo entregue em out/<proj>/_media/ com um veredito do conferente-de-midia (a Sala, antes do `regie advance`
# do research; CLAUDE.md, "Os especialistas": todo arquivo entregue em _media/<tipo>/<cena>/, pessoa/, logo/ e documento/,
# menos os -prova, casado com um veredito, e nenhum reprovado nem trocar em arquivo que continua lá).
#   python -X utf8 -B out/atlantico-fundo/_pesquisa/casar-midia-vereditos.py <proj>
# Casa pelo sha256 do arquivo; no acervo aberto, também pelo sha256 do rascunho julgado que o _PROCEDENCIA.json da pasta grava
# (medido.sha256 ou medido.medido_no_download.sha256); no banco pago, pelo sha256 do arquivo baixado que o conferente julgou,
# que o _instalar-lote grava como medido.sha256_do_baixado (o clipe instalado é reencodado, e o sha256 dele não é o julgado;
# o ofício do conferente, §3: "no vídeo, medido.sha256_do_baixado"; acrescentado na caça 1 do big-sur, 05/11/2026). Sai 0 só se
# todo arquivo casar com um aprovado da mesma cena (ou de cena declarada no veredito) e nenhum casar com reprovado ou trocar.
# No banco pago (footage/), casa também pela URL do item, a regra do CLAUDE.md ("A regra da cena": "No banco pago, casa pela URL
# do item (a `url` do `_PROCEDENCIA.json` da cena, com `mesmo_item: true`)"): só veredito com mesmo_item true, e só quando nenhum
# sha256 casa (o sha256 é o veredito do próprio arquivo; a url junta os de outros downloads do mesmo item). Acrescentado no
# requisitions do vídeo 8 (australia-animais, 19/11/2026): os dois ProRes do s03 foram instalados de uma cópia com o campo de cor
# preenchido (APRENDIZADOS 111), e o sha256_do_baixado deles é o da cópia, não o do arquivo que o conferente julgou.
import hashlib, json, sys
from pathlib import Path
from urllib.parse import unquote

proj = sys.argv[1]
raiz = Path(__file__).resolve().parents[3]
media = raiz / "out" / proj / "_media"
conf = json.loads((raiz / "out" / proj / "_pesquisa" / "conferencia-midia.json").read_text(encoding="utf-8"))

# trilha/: a música da Epidemic Sound nunca entra em ferramenta de IA (CLAUDE.md, "A trilha"), e por isso nunca vai ao conferente
# nem tem veredito (acrescentado em 05/11/2026; no atlantico-fundo eram os 4 SEM VEREDITO que sobravam).
# _fps-original/: o original que o scripts/normalizar-footage.mjs guarda ao converter um vídeo (é o rascunho julgado, e o
# veredito casa com o normalizado pelo medido.sha256 da procedência); nenhuma cena o cita (acrescentado em 05/11/2026).
FORA = {"_caca", "geo", "_vendor", "base", "trilha", "_fps-original"}

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
                  it.get("sha256_rascunho"), m.get("sha256_do_baixado")):
            if isinstance(v, str) and len(v) == 64:
                out.add(v.lower())
    return out

def url_norm(u):
    return unquote(str(u or "")).strip()

def url_da_procedencia(pasta, nome):
    """A url do item do _PROCEDENCIA.json da pasta que é deste arquivo (pelo nome), ou ""."""
    p = pasta / "_PROCEDENCIA.json"
    if not p.exists():
        return ""
    try:
        d = json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return ""
    itens = d.get("itens") if isinstance(d, dict) else d
    if isinstance(d, dict) and not itens:
        itens = [d]
    for it in itens or []:
        if isinstance(it, dict) and it.get("arquivo") and Path(str(it["arquivo"])).name == nome:
            return url_norm(it.get("url"))
    return ""

por_sha = {}
por_url = {}  # só os vereditos de banco com mesmo_item true
for v in conf.get("candidatos", []):
    s = (v.get("sha256") or "").lower()
    if s:
        por_sha.setdefault(s, []).append(v)
    u = url_norm((v.get("fonte") or {}).get("url") if isinstance(v.get("fonte"), dict) else "")
    if u and v.get("mesmo_item") is True:
        por_url.setdefault(u, []).append(v)

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
    # A url só entra quando nenhum sha256 casa: com sha256, o veredito é o do próprio arquivo, e a url traria junto os
    # vereditos de outros downloads do mesmo item (no los-angeles, um reprovado antigo do s01).
    pela_url = ""
    if partes[0] == "footage" and not cands:
        u = url_da_procedencia(p.parent, p.name)
        if u and por_url.get(u):
            cands = list(por_url[u])
            pela_url = "  (casado pela url do item, mesmo_item true: nenhum sha256 casou)"
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
        print(f"ok           {rel}  {vs}{pela_url}")

print(f"\n{len(entregues)} arquivos entregues; {problemas} com problema")
sys.exit(1 if problemas else 0)
