# O portão do `regie advance` do research (CLAUDE.md, "Os especialistas", o conferente-de-midia):
# todo arquivo entregue em out/<proj>/_media/<tipo>/<cena>/, _media/pessoa/, _media/logo/ e _media/documento/
# (menos os -prova) casado com um veredito do conferencia-midia.json, e nenhum reprovado nem trocar em arquivo
# que continua lá. O pendente_lucas não segura (e continua fora da cena).
#
# Como casa (a regra da cena):
#   - banco pago: a url do item no _PROCEDENCIA.json da cena = fonte.url do veredito, com mesmo_item true;
#   - acervo aberto: o sha256 do rascunho julgado (medido.sha256 ou medido.medido_no_download.sha256) = sha256 do veredito;
#   - retrato, logo e documento: o sha256 do arquivo = sha256 do veredito.
# Só lê. Uso (da raiz do canal):  python out/juneau/_pesquisa/conferir-portao-research.py <proj> [--json]
# Saída: 0 = o portão passa; 1 = algum arquivo segura o passo; 2 = não rodou.
import hashlib, json, os, sys

def sha(p):
    h = hashlib.sha256()
    with open(p, "rb") as f:
        for b in iter(lambda: f.read(1 << 20), b""):
            h.update(b)
    return h.hexdigest()

def itens_procedencia(pasta):
    p = os.path.join(pasta, "_PROCEDENCIA.json")
    if not os.path.exists(p):
        return {}
    d = json.load(open(p, encoding="utf-8"))
    lst = d.get("itens") if isinstance(d, dict) else d
    if isinstance(d, dict) and lst is None:
        lst = [v for v in d.values() if isinstance(v, dict) and "arquivo" in v]
    out = {}
    for it in lst or []:
        if isinstance(it, dict) and it.get("arquivo"):
            out[os.path.basename(it["arquivo"])] = it
    return out

def shas_do_item(it):
    s = set()
    m = it.get("medido") or {}
    for v in (m.get("sha256"), (m.get("medido_no_download") or {}).get("sha256"), it.get("sha256"),
              (it.get("rascunho") or {}).get("sha256") if isinstance(it.get("rascunho"), dict) else None):
        if v:
            s.add(v)
    return s

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        print("uso: python out/juneau/_pesquisa/conferir-portao-research.py <proj> [--json]")
        return 2
    proj = args[0]
    base = os.path.join("out", proj, "_media")
    conf_p = os.path.join("out", proj, "_pesquisa", "conferencia-midia.json")
    if not os.path.isdir(base) or not os.path.exists(conf_p):
        print("não rodou: falta", base if not os.path.isdir(base) else conf_p)
        return 2
    cands = json.load(open(conf_p, encoding="utf-8"))["candidatos"]
    por_sha, por_url = {}, {}
    for c in cands:
        if c.get("sha256"):
            por_sha.setdefault(c["sha256"], []).append(c)
        url = (c.get("fonte") or {}).get("url")
        if url:
            por_url.setdefault(url, []).append(c)

    linhas = []
    for tipo in ("foto", "footage", "pessoa", "logo", "documento"):
        raiz = os.path.join(base, tipo)
        if not os.path.isdir(raiz):
            continue
        for dirpath, _, files in os.walk(raiz):
            proc = itens_procedencia(dirpath)
            for fn in sorted(files):
                if fn == "_PROCEDENCIA.json" or "-prova" in fn or fn.endswith(".de-html"):
                    continue
                p = os.path.join(dirpath, fn)
                rel = os.path.relpath(p, os.path.join("out", proj)).replace("\\", "/")
                cena = os.path.basename(dirpath) if tipo in ("foto", "footage") else None
                fsha = sha(p)
                it = proc.get(fn, {})
                shas = shas_do_item(it) | {fsha}
                achados = []
                for s in shas:
                    achados += por_sha.get(s, [])
                url = it.get("url")
                if url:
                    achados += [c for c in por_url.get(url, []) if c.get("mesmo_item") is True]
                # um veredito por id
                vistos, unicos = set(), []
                for c in achados:
                    if c["id"] not in vistos:
                        vistos.add(c["id"]); unicos.append(c)
                vs = sorted({c["veredito"] for c in unicos})
                cenas_v = sorted({c.get("cena") for c in unicos})
                if not unicos:
                    estado = "SEM VEREDITO"
                elif any(v in ("reprovado", "trocar") for v in vs):
                    estado = "SEGURA (" + "/".join(vs) + ")"
                elif "aprovado" in vs:
                    estado = "ok"
                elif vs == ["pendente_lucas"]:
                    estado = "pendente_lucas (não segura; fora da cena)"
                else:
                    estado = "?" + "/".join(vs)
                linhas.append({"arquivo": rel, "cena_da_pasta": cena, "vereditos": vs, "cenas_dos_vereditos": cenas_v,
                               "casou_por": ("url+mesmo_item" if url and any(c.get("mesmo_item") is True for c in unicos) else "sha256") if unicos else None,
                               "procedencia": bool(it), "estado": estado})

    segura = [l for l in linhas if l["estado"] == "SEM VEREDITO" or l["estado"].startswith("SEGURA") or l["estado"].startswith("?")]
    if "--json" in sys.argv:
        print(json.dumps({"proj": proj, "arquivos": len(linhas), "seguram": len(segura), "linhas": linhas}, ensure_ascii=False, indent=1))
    else:
        for l in linhas:
            marca = "  " if l["estado"] == "ok" else "!!" if l in segura else "··"
            outra = "" if not l["cena_da_pasta"] or l["cena_da_pasta"] in l["cenas_dos_vereditos"] else f"  [veredito de {','.join(map(str, l['cenas_dos_vereditos']))}]"
            print(f"{marca} {l['estado']:<42} {l['arquivo']}{outra}")
        print(f"\n{len(linhas)} arquivos; {len(segura)} seguram o passo.")
    return 1 if segura else 0

if __name__ == "__main__":
    sys.exit(main())
