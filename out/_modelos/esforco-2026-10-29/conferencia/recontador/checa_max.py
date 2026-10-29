"""Por que 'max' = 2.439 aqui e 2.451 no rascunho? Contagens alternativas, so leitura."""
import json
import collections

RAIZ = "C:/Users/zangp/.claude/projects/C--projetos-alpha-point/"
ARQ = ["f42bc036-0fdc-43ca-af3a-3895cd6017bd.jsonl", "6abb9076-59b2-4f2c-ba1f-4752c77f4fe3.jsonl"]

for a in ARQ:
    raw = collections.Counter()      # linhas brutas por effort
    ids = collections.defaultdict(set)
    ids_per = collections.defaultdict(set)
    sidechain = collections.Counter()
    mix = 0
    por_id_ef = collections.defaultdict(set)
    por_id_pt = collections.defaultdict(set)
    with open(RAIZ + a, "rb") as fh:
        for linha in fh:
            if b'"type":"assistant"' not in linha:
                continue
            try:
                d = json.loads(linha)
            except Exception:
                continue
            if d.get("type") != "assistant":
                continue
            m = d.get("message") or {}
            ef = d.get("effort")
            pt = d.get("perTurnEffort")
            mid = m.get("id") or ("X" + str(d.get("uuid")))
            raw[ef] += 1
            ids[ef].add(mid)
            ids_per[pt].add(mid)
            por_id_ef[mid].add(ef)
            por_id_pt[mid].add(pt)
            sidechain[d.get("isSidechain")] += 1
    print(a)
    print("  linhas brutas por effort:", dict(raw))
    print("  ids por effort:", {k: len(v) for k, v in ids.items()})
    print("  ids por perTurnEffort:", {k: len(v) for k, v in ids_per.items()})
    print("  ids com mais de um effort:", sum(1 for v in por_id_ef.values() if len(v) > 1))
    print("  isSidechain:", dict(sidechain))
