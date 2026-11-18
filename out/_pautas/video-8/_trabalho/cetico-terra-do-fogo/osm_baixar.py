# Terra do Fogo (cético, 18/11/2026): baixa do OpenStreetMap (Overpass API, um pedido por vez, User-Agent do canal)
# os dados crus da medida nossa. Saídas em midia/_pautas/video-8/cetico-terra-do-fogo/osm/ (fora do git).
#   estradas.json  : as vias principais (motorway..tertiary, com os _link) e as balsas (route=ferry) entre Río Gallegos e Ushuaia;
#   fronteira.json : as vias de fronteira nacional (boundary=administrative, admin_level=2) na mesma caixa;
#   marcos.json    : os nós de controle de fronteira (barrier=border_control) e os nós com "Hito" no nome, na caixa.
# Dados do OSM: © OpenStreetMap contributors, ODbL.
# Uso: python -X utf8 -B osm_baixar.py
import os, json, time, urllib.request, urllib.parse

UA = "AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)"
SAIDA = r"C:\projetos\alpha-point\midia\_pautas\video-8\cetico-terra-do-fogo\osm"
os.makedirs(SAIDA, exist_ok=True)
URL = "https://overpass-api.de/api/interpreter"
BB = "-55.10,-70.20,-51.50,-66.90"  # sul, oeste, norte, leste (a 1ª versão, com leste -67,20, cortava a RN3 em Tolhuin)

Q = {
    "estradas": """[out:json][timeout:180];
(
  way(%s)[highway~"^(motorway|trunk|primary|secondary|tertiary)(_link)?$"];
  way(%s)[route=ferry];
);
out body;
>;
out skel qt;""" % (BB, BB),
    "fronteira": """[out:json][timeout:120];
way(%s)[boundary=administrative][admin_level=2];
out tags geom;""" % BB,
    "marcos": """[out:json][timeout:120];
(
  node(%s)[barrier=border_control];
  node(%s)[name~"[Hh]ito"];
  node(%s)[historic=boundary_stone];
  node(%s)[boundary=marker];
);
out body;""" % (BB, BB, BB, BB),
}

for nome, q in Q.items():
    arq = os.path.join(SAIDA, nome + ".json")
    if os.path.exists(arq):
        print("cache", arq, os.path.getsize(arq))
        continue
    dados = urllib.parse.urlencode({"data": q}).encode()
    req = urllib.request.Request(URL, data=dados, headers={"User-Agent": UA})
    t0 = time.time()
    with urllib.request.urlopen(req, timeout=300) as r:
        corpo = r.read()
    d = json.loads(corpo)
    d["_lido_em"] = time.strftime("%Y-%m-%d %H:%M:%S")
    d["_consulta"] = q
    json.dump(d, open(arq, "w", encoding="utf-8"))
    print("ok", nome, len(d.get("elements", [])), "elementos", len(corpo), "bytes", round(time.time() - t0, 1), "s")
    time.sleep(5)
