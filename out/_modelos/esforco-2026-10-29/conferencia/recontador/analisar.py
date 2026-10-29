import pickle
import collections
import json
import os
import statistics

D = os.path.dirname(os.path.abspath(__file__))
RAIZ = "C:/Users/zangp/.claude/projects/C--projetos-alpha-point"
msgs = pickle.load(open(os.path.join(D, "msgs.pkl"), "rb"))
# (path, mid, ts, model, effort, in, cw5, cw1h, cr, out, attr)

# entrada, escrita 5 min, escrita 1 h, leitura de cache, saida (US$ por milhao)
PRECO = {
    "fable": (10, 12.5, 20, 0.25, 50),
    "opus": (4, 5, 8, 0.20, 20),
    "sonnet": (2, 2.5, 4, 0.10, 10),
}


def familia(model):
    if not model:
        return None
    m = model.lower()
    for k in PRECO:
        if k in m:
            return k
    return None


def custo(r, fam=None):
    fam = fam or familia(r[3])
    if fam is None:
        return None
    p = PRECO[fam]
    return (r[5] * p[0] + r[6] * p[1] + r[7] * p[2] + r[8] * p[3] + r[9] * p[4]) / 1e6


def sep(t):
    print("\n" + "=" * 8, t, "=" * 8)


# ---------------------------------------------------------------- (a) C4
sep("(a) C4: conversa da Sala, por esforco, so Opus")
TOPOS = {
    RAIZ + "/f42bc036-0fdc-43ca-af3a-3895cd6017bd.jsonl",
    RAIZ + "/6abb9076-59b2-4f2c-ba1f-4752c77f4fe3.jsonl",
}
sala = [r for r in msgs if r[0] in TOPOS]
print("respostas nos 2 arquivos de topo:", len(sala))
print("modelos:", collections.Counter(r[3] for r in sala))
sala_opus = [r for r in sala if familia(r[3]) == "opus"]
por_ef = collections.defaultdict(list)
for r in sala_opus:
    por_ef[r[4]].append(r)
res_a = {}
for ef, rs in sorted(por_ef.items(), key=lambda kv: str(kv[0])):
    outs = [r[9] for r in rs]
    cs = [custo(r) for r in rs]
    res_a[ef] = dict(
        n=len(rs),
        saida_media=sum(outs) / len(outs),
        saida_mediana=statistics.median(outs),
        custo_medio=sum(cs) / len(cs),
        custo_mediano=statistics.median(cs),
        custo_total=sum(cs),
    )
for ef, rs in sorted(por_ef.items(), key=lambda kv: str(kv[0])):
    # tupla: 0 path,1 mid,2 ts,3 model,4 effort,5 in,6 cw5,7 cw1h,8 cr,9 out,10 attr
    ctx = [r[5] + r[6] + r[7] + r[8] for r in rs]
    res_a[ef]["ctx_medio"] = sum(ctx) / len(ctx)
    res_a[ef]["ctx_mediano"] = statistics.median(ctx)
for ef, v in res_a.items():
    print(ef, {k: (round(x, 4) if isinstance(x, float) else x) for k, x in v.items()})

# comparacao com contexto parecido (150-350 mil)
print("\ncom contexto entre 150 e 350 mil:")
for ef in ("max", "xhigh", "high"):
    rs = [r for r in por_ef.get(ef, []) if 150_000 <= (r[5] + r[6] + r[7] + r[8]) <= 350_000]
    if rs:
        print(ef, len(rs), "saida media", round(sum(r[9] for r in rs) / len(rs), 1),
              "custo medio", round(sum(custo(r) for r in rs) / len(rs), 4))

# quais arquivos / modelos contribuem
print("\nSala sem filtro de modelo, por (modelo, esforco):",
      collections.Counter((r[3], r[4]) for r in sala).most_common())

# ---------------------------------------------------------------- (b) C2
sep("(b) C2: custo da janela 2026-10-29T04:35Z .. 12:25Z")
ini, fim = "2026-10-29T04:35:00", "2026-10-29T12:25:00"
jan = [r for r in msgs if r[2] and ini <= r[2][:19] <= fim]
print("respostas na janela:", len(jan))
print("modelos na janela:", collections.Counter(r[3] for r in jan))
tot = 0.0
por_fam = collections.Counter()
sem_preco = collections.Counter()
for r in jan:
    c = custo(r)
    if c is None:
        sem_preco[r[3]] += 1
        continue
    tot += c
    por_fam[familia(r[3])] += c
print("custo total US$", round(tot, 2), "por familia:", {k: round(v, 2) for k, v in por_fam.items()})
print("sem preco (excluidas):", dict(sem_preco))
# sensibilidade haiku como sonnet
extra = 0.0
for r in jan:
    if custo(r) is None and r[3] and "haiku" in r[3]:
        extra += custo(r, "sonnet")
print("se haiku fosse precificado como sonnet, +US$", round(extra, 4))
print("custo / 37 =", round(tot / 37, 3))
# sensibilidade: janela com timestamp exclusivo e variantes de borda
for a, b in (("2026-10-29T04:35:00", "2026-10-29T12:25:00"), ("2026-10-29T04:35:01", "2026-10-29T12:24:59")):
    s = sum((custo(r) or 0) for r in msgs if r[2] and a <= r[2][:19] <= b)
    print("borda", a, b, round(s, 2))
# tambem, so topo vs subagentes
topo = sum((custo(r) or 0) for r in jan if r[0].count("/") == RAIZ.count("/") + 1)
print("topo:", round(topo, 2), "subagentes:", round(tot - topo, 2))

# ---------------------------------------------------------------- (c) C6
sep("(c) C6: mediana do custo por despacho")
arquivo_msgs = collections.defaultdict(list)
for r in msgs:
    arquivo_msgs[r[0]].append(r)

agentes = collections.defaultdict(list)  # agentType -> list of dispatch dicts
n_sem_meta = 0
for p, rs in arquivo_msgs.items():
    base = os.path.basename(p)
    if not base.startswith("agent-"):
        continue
    meta = p[:-6] + ".meta.json"
    if not os.path.exists(meta):
        n_sem_meta += 1
        continue
    try:
        at = json.load(open(meta, encoding="utf-8")).get("agentType")
    except Exception:
        continue
    tss = [r[2] for r in rs if r[2]]
    if not tss:
        continue
    prim = min(tss)
    fams = collections.Counter(familia(r[3]) for r in rs)
    efs = collections.Counter(r[4] for r in rs)
    c = sum((custo(r) or 0) for r in rs)
    agentes[at].append(dict(path=p, prim=prim, fam=fams.most_common(1)[0][0], fams=dict(fams),
                            efs=dict(efs), custo=c, n=len(rs)))
print("agent-*.jsonl sem meta.json:", n_sem_meta)

PERU = ("2026-10-19T03:00:00", "2026-10-24T15:00:00")
ATL = "2026-10-29T01:00:00"


def bloco(at, fam=None):
    ds = agentes.get(at, [])
    if fam:
        ds = [d for d in ds if d["fam"] == fam]
    peru = [d for d in ds if PERU[0] <= d["prim"][:19] <= PERU[1]]
    atl = [d for d in ds if d["prim"][:19] >= ATL]
    out = {}
    for nome, g in (("Peru", peru), ("Atlantico", atl)):
        if g:
            cs = [d["custo"] for d in g]
            ef = collections.Counter()
            for d in g:
                ef.update(d["efs"])
            out[nome] = dict(n=len(g), mediana=statistics.median(cs), media=sum(cs) / len(cs),
                             resp_mediana=statistics.median([d["n"] for d in g]), efs=dict(ef),
                             fams=dict(collections.Counter(d["fam"] for d in g)))
        else:
            out[nome] = dict(n=0)
    return out


res_c = {}
for at, fam in (("mapista", None), ("editor-de-arte", "fable"), ("qc-visual", None), ("editor-de-arte", "opus")):
    b = bloco(at, fam)
    res_c[(at, fam)] = b
    print("\n", at, fam or "(todos os modelos)")
    for nome, v in b.items():
        if v["n"]:
            print("  ", nome, "n =", v["n"], "mediana US$", round(v["mediana"], 2), "media US$", round(v["media"], 2),
                  "resp/despacho (mediana)", v["resp_mediana"], "modelos", v["fams"], "esforcos", v["efs"])
        else:
            print("  ", nome, "n = 0")

# agentTypes existentes, para ver se algo escapa
print("\nagentTypes:", collections.Counter({k: len(v) for k, v in agentes.items()}).most_common(30))

json.dump({"a": {str(k): v for k, v in res_a.items()},
           "b": {"total": tot, "dividido_37": tot / 37},
           "c": {f"{k[0]}|{k[1]}": v for k, v in res_c.items()}},
          open(os.path.join(D, "resultado.json"), "w", encoding="utf-8"), indent=1, default=str)
