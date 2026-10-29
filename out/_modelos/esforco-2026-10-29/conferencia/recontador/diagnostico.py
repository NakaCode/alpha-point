import pickle
import collections
import os

D = os.path.dirname(os.path.abspath(__file__))
msgs = pickle.load(open(os.path.join(D, "msgs.pkl"), "rb"))
print("total por arquivo:", len(msgs))
# (path, mid, ts, model, effort, in, cw5, cw1h, cr, out, attr)
ids = collections.Counter(m[1] for m in msgs)
dup = {k: v for k, v in ids.items() if v > 1}
print("ids unicos:", len(ids), "ids em >1 arquivo:", len(dup))
print("modelos:", collections.Counter(m[3] for m in msgs).most_common())
print("esforcos:", collections.Counter(m[4] for m in msgs).most_common())
# exemplo de duplicados
ex = list(dup.items())[:5]
for k, v in ex:
    print(k, v, [m[0].split('/')[-3:] for m in msgs if m[1] == k][:3])
# quantos duplicados entre arquivos de topo e subagente
tot_dup_msgs = sum(v for v in dup.values())
print("linhas em ids duplicados:", tot_dup_msgs)
