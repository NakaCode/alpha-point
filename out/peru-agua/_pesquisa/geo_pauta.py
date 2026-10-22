"""Enriquece o pauta-geo.json (gravado pelo gravarGeo da pré-v1) com o que o contrato deixa livre: os ids do needs.geo que
cada camada atende, as cenas (do espelho.json), a data do dado, a fidelidade e o crédito na tela; e grava os bloqueios.
Não mexe em fonte, arquivo, licenca, sha256 nem bbox. uso: python -P geo_pauta.py (da raiz do canal)"""
import json, collections, hashlib

P = "out/peru-agua/_pesquisa/pauta-geo.json"
esp = json.load(open("out/peru-agua/espelho.json", encoding="utf-8"))
cenas = collections.defaultdict(set)
for s in esp["segmentos"]:
    for g in (s.get("needs") or {}).get("geo") or []:
        cenas[g["id"]].add(s["id"])
OSM_T = "© OpenStreetMap contributors (já está no crédito da base MapTiler); openstreetmap.org/copyright na descrição"
HB = "nenhum na tela; o texto do Exhibit B da licença HydroSHEDS v1 na descrição"
NE = "nenhum (domínio público)"
M = {
    "peru-ne": (["peru-ne"], "Natural Earth v5.1 (2022)", "1:10M; costa generalizada (2.421 vértices no país); tol 0,002°", NE),
    "chile-ne": (["chile-ne"], "Natural Earth v5.1 (2022)", "1:10M; tol 0,004°; 163 partes intactas", NE),
    "divisoria-continental-peru": (["divisoria-continental-peru"], "HydroBASINS v1c (2013; relevo SRTM de 15\", ~500 m)",
        "a MESMA aresta dos polígonos das vertentes (coverage_simplify, tol 0,003° ≈ 330 m); 3 linhas contínuas: Pacífico–Atlântico 2.538 km, Pacífico–Titicaca 496 km, Atlântico–Titicaca 453 km", HB),
    "vertente-pacifico": (["vertente-pacifico"], "HydroBASINS v1c (2013)", "280.991 km² contra 278.483 da ANA (PNRH, doc.num-02): +0,9 %", HB),
    "vertente-atlantico": (["vertente-atlantico"], "HydroBASINS v1c (2013)", "960.519 km² contra 957.822 da ANA: +0,3 %", HB),
    "vertente-titicaca": (["vertente-titicaca"], "HydroBASINS v1c (2013)", "48.367 km² contra 48.910 da ANA: −1,1 %", HB),
    "bacia-mantaro": (["bacia-alto-mantaro"], "HydroBASINS v1c (2013)", "a bacia INTEIRA do Mantaro (34.534 km²; ANA dá 34.550 km² ao Mantaro): no nível 6 a 'alta' não se separa", HB),
    "tunel-transandino": (["tunel-transandino"], "OSM, 22/10/2026", "canal 11,98 km (JICA 11,9) + túnel 10,08 km (JICA 10,1) = 22,06 km = 13,71 mi; o túnel no OSM é uma RETA de 2 nós (boca de Cuevas → lagoa Milloc)", OSM_T),
    "lagoas-marcapomacocha-antacoto": (["lagoas-marcapomacocha-antacoto"], "OSM, 22/10/2026", "4 lagos (Marcapomacocha, Antacoto, Marcacocha, Tucto); a lista das '19 lagoas' da SEDAPAL não foi lida: nenhuma se apresenta como uma das 19", OSM_T),
    "represas-antacoto-huascacocha-yuracmayo": (["represas-antacoto-huascacocha-yuracmayo"], "OSM, 22/10/2026", "o espelho d'água de cada represa como o OSM o tem (Antacoto 5,18 km², Huascacocha 1,59, Yuracmayo 2,74)", OSM_T),
    "segundo-tunel-pontas": (["segundo-tunel-planejado"], "OSM, 22/10/2026", "as lagoas Pomacocha e Huallacocha e o rio Blanco; a quebrada Pucullo NÃO está no OSM (2 consultas); a seta entre elas é esquema declarado do mapista", OSM_T),
    "huinco": (["huinco"], "OSM, 22/10/2026", "ponto dentro do contorno da usina (way/864802081, start_date 1964)", OSM_T),
    "la-atarjea": (["la-atarjea"], "OSM, 22/10/2026", "contorno do water_works (2,68 km²) e um ponto dentro dele", OSM_T),
    "villa-el-salvador": (["villa-el-salvador"], "OSM, 22/10/2026 (limite de hoje)", "34,0 km² (INEI 35,46)", OSM_T),
    "san-juan-de-miraflores": (["san-juan-de-miraflores"], "OSM, 22/10/2026 (limite de hoje)", "22,1 km² (INEI 23,98)", OSM_T),
    "puente-piedra": (["puente-piedra"], "OSM, 22/10/2026 (limite de hoje)", "50,2 km² contra 71,18 do INEI: o limite do OSM é menor (−30 %), conferir antes de mostrar área", OSM_T),
    "ilha-san-lorenzo": (["ilha-san-lorenzo"], "OSM, 22/10/2026", "16,2 km²; o peru-ne cobre 92 % dela", OSM_T),
    "lima-callao-metropolitana": (["lima-callao-metropolitana"], "OSM, 22/10/2026 (limites administrativos de hoje)", "Província de Lima 2.702 km² (INEI 2.672: +1,1 %); Callao 160,7 km² com as ilhas", OSM_T),
    "pontos-osm": (["pamplona-1971", "puquios-cantalloc", "vilca", "matucana", "satipo", "jauja", "cordilheira-oriental-crista"], "OSM, 22/10/2026",
        "Pamplona = o bairro de hoje (ponto aproximado declarado do lugar de 1971); Vilca = o POVOADO (não a estação do SENAMHI); os picos não formam a crista", OSM_T),
    "rios-vertente-pacifico": (["rios-vertente-pacifico"], "OSM, 22/10/2026", "31 rios principais que chegam ao mar (sem afluentes); DP 0,002°", OSM_T),
    "rios-vertente-atlantico": (["rios-vertente-atlantico"], "Natural Earth v5.1 (2022)", "11 rios grandes do NE 1:10M no Peru (sem o Mantaro, que o NE não tem)", NE),
    "amazonas-ate-o-atlantico": (["amazonas-ate-o-atlantico"], "Natural Earth v5.1 (2022)", "Amazonas, Marañón e Ucayali até -52,7 de longitude (o NE termina a linha no estuário)", NE),
    "departamento-lima": (["departamento-lima"], "Natural Earth v5.1 (2022)", "o departamento inteiro (Lima + Província de Lima, sem o Callao), 35.221 km²; 1:10M", NE),
    "loreto": (["loreto"], "Natural Earth v5.1 (2022)", "373.776 km² (INEI 368.852: +1,3 %); 1:10M", NE),
    "pacifico-sudeste": (["pacifico-sudeste", "corrente-de-humboldt"], "Natural Earth v5.1 (2022)", "o oceano na janela -95,-35,-68,2; a corrente de Humboldt NÃO é polígono: é esquema declarado do mapista sobre este mar", NE),
    "cidades-peru-ne": (["lima", "callao", "iquitos", "piura", "tacna", "nazca", "jauja", "satipo"], "Natural Earth v5.1 (2022)",
        "todos em terra no peru-ne; Jauja a 2,7 km e Satipo a 5,8 km do ponto do OSM (o NE arredonda): para câmera fechada, use o do OSM", NE),
    "pontos-fontes": (["lima", "satipo", "matucana", "caral", "chan-chan", "nazca", "lagoas-marcapomacocha-antacoto"], "coordenadas publicadas (SENAMHI, OMM 1991–2020, UNESCO)",
        "Campo de Marte, as estações de Marcapomacocha, Satipo e Matucana, e os pontos da UNESCO de Caral, Chan Chan e das Linhas de Nazca; todos em terra", "o da fonte do dado na cena (SENAMHI, UNESCO), não de geometria"),
    "rio-rimac": (["rio-rimac"], "OSM, 22/10/2026", "139,2 km (a ANA dá ~145; o OSM declara 160): o OSM começa no Rímac nomeado, não na nascente", OSM_T),
    "rio-chillon": (["rio-chillon"], "OSM, 22/10/2026", "135,1 km", OSM_T),
    "rio-lurin": (["rio-lurin"], "OSM, 22/10/2026", "90,5 km", OSM_T),
    "rio-santa-eulalia": (["rio-santa-eulalia"], "OSM, 22/10/2026", "43,3 km, até Chosica; o trecho lagoa Milloc → Pillica não está nesta relation", OSM_T),
    "rio-supe": (["rio-supe"], "OSM, 22/10/2026", "96,9 km; o 'vale verde' é o satélite, não um polígono", OSM_T),
    "rio-moche": (["vale-moche", "canal-chan-chan"], "OSM, 22/10/2026", "83,2 km; o vale do Moche como linha do rio; passa a 7,1 km de Chan Chan", OSM_T),
    "rio-chicama": (["vale-chicama", "canal-chan-chan"], "OSM, 22/10/2026", "166,6 km; o ponto do Chicama mais perto de Chan Chan é a foz, a 29,6 km; o traçado do canal chimú (~80 km) NÃO foi lido: seta esquemática declarada do Chicama a Chan Chan", OSM_T),
}
p = json.load(open(P, encoding="utf-8"))
vistos = set()
for it in p["itens"]:
    slug = it["arquivo"].split("/")[-1][:-5]
    if slug not in M:
        raise SystemExit("sem mapa: " + slug)
    ids, data, fid, cred = M[slug]
    it["needs_ids"] = ids
    it["cena"] = sorted({c for i in ids for c in cenas.get(i, [])}, key=lambda x: int(x[1:]))
    it["data_do_dado"] = data
    it["fidelidade"] = fid
    it["credito_tela"] = cred
    if "HydroBASINS" in it["fonte"]:
        it["pendente_sala"] = ("data.hydrosheds.org tem robots.txt 'Disallow: /' (lido no mesmo comando do download, depois); a licença v1 é a da WWF, 'com ressalvas' em "
                               "marca/acervos/5-dados-e-fronteiras.md §1.9 (o aceito em 27/09 é o v2, CC BY 4.0); a ANA, a fonte preferida, não respondeu (timeout 2×). A Sala decide se fica.")
        it["credito_descricao"] = ("This product incorporates data from the HydroSHEDS version 1 database which is © World Wildlife Fund, Inc. (2006-2022) and has been used herein "
                                   "under license. WWF has not evaluated the data as altered and incorporated within this product, and therefore gives no warranty regarding its "
                                   "accuracy, completeness, currency or suitability for any particular purpose. Portions of the HydroSHEDS v1 database incorporate data which are "
                                   "the intellectual property rights of © USGS (2006-2008), NASA (2000-2005), ESRI (1992-1998), CIAT (2004-2006), UNEP-WCMC (1993), WWF (2004), "
                                   "Commonwealth of Australia (2007), and Her Royal Majesty and the British Crown and are used under license. The HydroSHEDS v1 database and more "
                                   "information are available at https://www.hydrosheds.org.")
    vistos.update(ids)
p["bloqueios"] = [
    {"needs_id": "desierto-costero-minam", "cena": sorted(cenas["desierto-costero-minam"]), "o_que_falta": "o polígono 'desierto costero' do Mapa Nacional de Ecosistemas (MINAM)",
     "onde_procurei": ["geoservidor.minam.gob.pe: robots.txt 'Disallow: /' (parei)", "sigrid.cenepred.gob.pe/arcgis (camada 'Ecosistemas'): robots.txt veta /arcgis/; 1 pedido feito antes de ler o robots (500, serviço inexistente), parei",
                       "sinia.minam.gob.pe/mapas/mapa-nacional-ecosistemas-peru: só PDF (mapa 1:2.200.000 e memória), sem shapefile nem licença", "datosabiertos.gob.pe: nenhum conjunto do mapa de ecossistemas"],
     "mais_proximo": "nenhum com o mesmo sentido; RESOLVE Ecoregions 2017 'Sechura desert' (CC BY 4.0) é outra régua (inclui o que o MINAM exclui) e não foi baixado",
     "proximo_passo": "o navegador do app, na seção de descargas do Geoservidor MINAM, com a licença lida lá; a área não foi medida"},
    {"needs_id": "regioes-naturais-inei", "cena": sorted(cenas["regioes-naturais-inei"]), "o_que_falta": "a lista de distritos por região natural do INEI (Costa, Sierra, Selva)",
     "onde_procurei": ["o dossiê (doc.lac-08 a deixa para a geo) e midia/peru-agua/fontes/documento: a lista não está lá"], "mais_proximo": "os distritos do OSM (admin_level 8), que viram a mancha da Costa só com a lista lida",
     "proximo_passo": "a lista do INEI lida (o pesquisa-dados ou o -documentos), e uma rodada de Overpass para os distritos"},
    {"needs_id": "lima-periferia-sem-rede", "cena": sorted(cenas["lima-periferia-sem-rede"]), "o_que_falta": "as áreas sem rede da periferia de Lima",
     "onde_procurei": ["o mapa da SEDAPAL de 11/2025 (gen-26) é referência, mas a SEDAPAL não tem licença (fontes-peruanas-licencas.md): redesenhar a figura é decalque sem permissão (roupa §6)",
                       "a lista dos 16 distritos periurbanos da Sunass não foi lida"],
     "mais_proximo": "os distritos já entregues (san-juan-de-miraflores, villa-el-salvador, puente-piedra), como limite administrativo, não como 'sem rede'",
     "proximo_passo": "pergunta à Sala: autorização escrita da SEDAPAL, ou a lista da Sunass lida, ou a cena sem a mancha"},
    {"needs_id": "cordilheira-oriental-crista", "cena": sorted(cenas["cordilheira-oriental-crista"]), "o_que_falta": "a linha da crista da Cordilheira Oriental (Huaguruncho → Huaytapallana)",
     "onde_procurei": ["Copernicus DEM GLO-90 (8 folhas, AWS): três critérios de derivação deram três linhas diferentes (a serra é cortada pelos vales de Tarma e do Chanchamayo; o caminho mais alto cai na puna de Junín). Rejeitado, nada gravado"],
     "mais_proximo": "os cumes reais (pontos-osm: Huaguruncho e Huaytapallana; no DEM, 5.604 m em -75,932/-10,530 e 5.507 m em -75,054/-11,909) e o próprio relevo da base",
     "proximo_passo": "o diretor-de-arte decide se a 'forma única de papel' segue o relevo da base entre os dois cumes; se precisar de linha medida, a Sala escolhe o critério"},
    {"needs_id": "encosta-leste-andes", "cena": sorted(cenas["encosta-leste-andes"]), "o_que_falta": "a faixa da encosta leste, colada à crista",
     "onde_procurei": ["depende da crista (acima)"], "mais_proximo": "nenhum", "proximo_passo": "junto com a crista"},
]
json.dump(p, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
open(P, "a", encoding="utf-8").write("\n")
todos = set(cenas)
cob = vistos | {b["needs_id"] for b in p["bloqueios"]}
print("ids do espelho:", len(todos), "| cobertos por camada:", len(vistos & todos), "| bloqueados:", len(p["bloqueios"]), "| sem resposta:", sorted(todos - cob))
print("itens:", len(p["itens"]))
