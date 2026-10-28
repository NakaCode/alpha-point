"""Enriquece o pauta-geo.json do vídeo 4 (gravado pelo gravarGeo da pré-v1 via geo-gravar.mjs) com o que o contrato deixa livre:
os ids do needs.geo que cada camada atende, as cenas (do espelho.json), a data do dado, a fidelidade, o crédito na tela; acrescenta as
bases do fundo (_media/base/gebco-*), os bloqueios, o que ficou NÃO CONFERIDO e os avisos à Sala. Não mexe em fonte, arquivo,
licenca, sha256 nem bbox dos itens de geometria. uso (de out/atlantico-fundo/): python -X utf8 -B -P _pesquisa/geo_pauta.py"""
import json, collections, os, hashlib

P = "_pesquisa/pauta-geo.json"
esp = json.load(open("espelho.json", encoding="utf-8"))
cenas = collections.defaultdict(set)
for s in esp["segmentos"]:
    for g in (s.get("needs") or {}).get("geo") or []:
        cenas[g["id"]].add(s["id"])
MF = json.load(open("_tmp/pesquisa-geo/medidas-fundo.json", encoding="utf-8"))
MS = json.load(open("_tmp/pesquisa-geo/medidas-superficie.json", encoding="utf-8"))

NE = "nenhum (domínio público)"
OSM_T = "© OpenStreetMap contributors (já está no crédito da base MapTiler); openstreetmap.org/copyright na descrição"
GEB = "GEBCO Compilation Group (2026) GEBCO 2026 Grid — na tela; a citação com o DOI 10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa na descrição"
MR = "Marine Regions (VLIZ), CC BY 4.0 — na tela 'Maritime boundaries: MarineRegions.org (VLIZ)'; a citação 'Flanders Marine Institute (2026): MarineRegions.org … Consulted on 2026-10-28' na descrição"
FATO = "o da fonte do dado na cena (não de geometria)"
DATA_GEBCO = "GEBCO_2026 Grid (publicada em abril de 2026; date_created 2026-04-17), recorte de 28/10/2026"
pf = MF["fossa-porto-rico"]; pm = MF["fossa-porto-rico-trecho-mais-fundo"]; ss = MF["fossa-sandwich-do-sul"]; sm = MF["ss_medido"]
M = {
    "fossa-porto-rico": (["fossa-porto-rico"], DATA_GEBCO,
        f"isóbata de 7.000 m LIDA da grade (marching squares nos centros das células de 15\", ~460 m), o corpo principal, {pf['furos_preenchidos']} furos preenchidos, tol 0,002° (~200 m; área −0,008 %); "
        f"{pf['comprimento_leste_oeste_km']} km de leste a oeste (F20: ~810 km); contém o anel, a estimativa de 2019, o Blake, o Challenger (7.087 m, F22), a crista da lista (F29/F30) e o ponto de Lyman; "
        f"o alfinete do Dive 09 (F68) fica {pf['pontos_fora']['dive09_F68']} km FORA, na parede sul, como o espelho previa. Por que 7.000: a de 6.000 e a de 6.500 m vazam para fora da janela (se juntam ao Atlântico a leste e ao sul); a de 7.500 parte a fossa em dois e deixa o Challenger fora; a de 8.000 é só o trecho mais fundo", GEB),
    "fossa-porto-rico-trecho-mais-fundo": (["fossa-porto-rico-trecho-mais-fundo"], DATA_GEBCO,
        f"isóbata de 8.000 m, o corpo que contém o anel, {pm['furos_preenchidos']} furos preenchidos, tol 0,002°; {pm['comprimento_leste_oeste_km']} km (68,46–64,34°W); contém o anel, a estimativa de 2019, o Blake e o ponto de Lyman; "
        "o Challenger e a crista da lista ficam fora. A curva de 8.400 m do F19 NÃO existe na grade de 15\": abaixo de 8.400 m só há 79 células soltas (ruído), por isso a de 8.000. NUNCA rotulada PUERTO RICO TRENCH", GEB),
    "fossa-porto-rico-leste": (["fossa-porto-rico-leste"], DATA_GEBCO,
        f"a isóbata de 7.000 m a leste do meridiano do meio do eixo ({MF['fossa-porto-rico-leste']['meridiano_do_meio']}°), corte reto DECLARADO; {MF['fossa-porto-rico-leste']['area_km2']} km²; começa ao norte de Anegada (64,33°W)", GEB),
    "rupturas-wei-2024": (["fossa-porto-rico-leste"], "Wei, ten Brink & Atwater (2024), Tabela 2",
        f"projeção na superfície dos planos de falha do MODELO (não ruptura observada): C, D e E (o cenário CDE M8.45, megaempuxo, 7,5 m; {MS['rupturas']['cde_km2']} km²) e N (o cenário N M8.17, falha normal fora da fossa, 11,4 m; {MS['rupturas']['n_km2']} km²), pela Tabela 2 (centro da borda de baixo, comprimento, largura, mergulho, rumo); "
        f"os dois cenários são os menores que alagam todos os blocos (S18; texto de Wei 2024, l. 612–619). Ficam centradas em Anegada em longitude; Anegada fica {MS['rupturas']['distancia_anegada_a_cde_km']} km ao sul da área CDE. Trocam a 'figura 1 de Kilbourne, aproximada': agora sai da tabela",
        "Wei, ten Brink & Atwater (2024), CC BY 4.0 — na tela 'Fault model: Wei et al. (2024)'; a referência com o DOI 10.1029/2023JB028387 na descrição"),
    "fossa-sandwich-do-sul": (["fossa-sandwich-do-sul"], DATA_GEBCO,
        f"isóbata de 6.000 m: o corpo principal (com o Meteor, F75) e a bacia do sul (com o ponto ao sul de 60°S, S01), separados por um degrau mais raso a {ss['folga_entre_partes_km']} km; furos preenchidos; tol 0,003°; "
        f"de {abs(ss['lat_norte_sul'][0])}°S a {abs(ss['lat_norte_sul'][1])}°S (F73: ~54°40'S a 60°40'S). A de 6.500 e a de 7.000 m encurtam a fossa (a de 7.000 para em 58,6°S)", GEB),
    "levantamento-fossa-sandwich-tid": (["levantamento-2019-fossa-sandwich"], "GEBCO_2019 TID (abril de 2019) × GEBCO_2026 TID (abril de 2026)",
        f"dentro da fossa de 6.000 m ({sm['area_fossa_km2']} km²): medida direta (TID 10–17) em {sm['medido_2019_km2']} km² na GEBCO_2019 → {sm['fracao_sem_medida_direta_2019_%']} % SEM medida direta (F78: ~91 %); "
        f"na GEBCO_2026, {sm['medido_2026_km2']} km² medidos ({sm['fracao_sem_medida_direta_2026_%']} % sem). O 'novo depois de 2019' ({sm['novo_entre_2019_e_2026_km2']} km²) é de TODOS os levantamentos entregues à GEBCO de 2019 a 2026, não só o da Five Deeps (15.045 km² novos, S01 Tabela 1): "
        "nunca rotular a área como 'o levantamento de 2019'. Contornos de célula (dentes de 15\"); pedaços < 2 km² fora; tol 0,004°", GEB),
    "fossa-marianas": (["fossa-marianas-challenger-deep"], DATA_GEBCO,
        f"isóbata de 7.000 m, as {MF['fossa-marianas']['partes']} partes do arco (> 3.000 km², a leste de 140,5°E), recorte até 25°N; tol 0,01° (escala de mundo); o Challenger Deep (S01) cai dentro", GEB),
    "porto-rico": (["porto-rico", "porto-rico-relevo"], "Census Cartographic Boundary Files 2025 (1:500.000)",
        f"a união dos 78 municípios: {MS['porto_rico']['partes']} partes (ilha principal 8.732 km², Vieques 133, Mona 55, Culebra 27 e ilhotas, Desecheo inclusive); {MS['porto_rico']['area_km2']} km² (o Census dá 8.868 km² de terra: o cb 1:500k generaliza a costa, +1 %); "
        "NAD83 lido como WGS84 (< 2 m). O 'porto-rico-relevo' (s37) é este polígono sobre o terrain-rgb-v2 da MapTiler, que é do mapista (a pesquisa não pede tile)", NE),
    "aguadilla-municipio": (["aguadilla-costa"], "Census Cartographic Boundary Files 2025 (1:500.000)", "o município de Aguadilla (GEOID 72005)", NE),
    "aguadilla-costa-ponto": (["aguadilla-costa"], "F04 (Census 2023 1:500.000); conferido no cb_2025 em 28/10/2026",
        f"18,5130°N, 67,1145°W; CONFERIDO: o ponto da costa do Census 2025 mais perto do anel fica a {MS['aguadilla_costa']['dist_entre_os_dois_pontos_m']} m dele, em Aguadilla, a {MS['aguadilla_costa']['mais_perto_km']} km = {MS['aguadilla_costa']['mais_perto_mi']} mi do anel (Vincenty, WGS84); nunca San Juan nem Isabela como origem (N26, N35)", FATO),
    "costa-oeste-porto-rico": (["costa-oeste-porto-rico"], "Census Cartographic Boundary Files 2025 (1:500.000)",
        f"trecho DECLARADO: a costa da ilha principal dentro de Aguadilla, Aguada, Rincón, Añasco e Mayagüez; {MS['costa_oeste']['comprimento_km']} km, uma linha só", NE),
    "mar-ao-norte-de-porto-rico": (["mar-ao-norte-de-porto-rico"], "Census 2025 + GEBCO_2026",
        f"faixa DECLARADA: entre a costa norte da ilha principal e a borda sul da fossa de 7.000 m, nas longitudes da ilha (67,27–65,59°W), de 18,42°N para cima; {MS['mar_ao_norte']['area_km2']} km²", GEB),
    "passagem-de-mona": (["passagem-de-mona"], "Natural Earth 10m + Census 2025",
        f"trecho DECLARADO: o mar entre a costa da Hispaniola e a de Porto Rico, de 17,95°N a 18,6°N (os limites norte e sul são escolha da pesquisa: não há polígono lido da passagem); {MS['passagem_de_mona']['area_km2']} km²; Mona e Desecheo como buracos", NE),
    "republica-dominicana": (["republica-dominicana"], "Natural Earth v5.1 (2022)", f"1:10M, tol 0,002°; {MS['republica_dominicana']['area_km2']} km²", NE),
    "ilhas-virgens-britanicas": (["ilhas-virgens-britanicas"], "Natural Earth v5.1 (2022)", "1:10M, 6 partes, sem simplificar; contexto", NE),
    "anegada": (["anegada"], f"OSM, base de {MS['anegada']['osm_timestamp']}",
        f"o anel do way/158313299 (natural=coastline): {MS['anegada']['osm_vertices']} vértices, {MS['anegada']['area_km2_osm']} km² (o NE 10m tem 9 vértices e {MS['anegada']['area_km2_ne']} km²: pobre para a s45). Britânica: nunca 'U.S. island' (N24)", OSM_T),
    "anegada-costa-norte": (["anegada-costa-norte-blocos"], f"OSM, base de {MS['anegada']['osm_timestamp']}",
        f"PARCIAL: a costa norte INTEIRA ({MS['anegada_costa_norte']['comprimento_km']} km = {MS['anegada_costa_norte']['comprimento_mi']} mi), da ponta leste à oeste. O trecho de ~10 km (6,2 mi) do F51, 'de Bones Bight e Windlass Bight, a oeste, a Warner', NÃO está localizado: nenhum dos quatro nomes tem coordenada em fonte lida nem está no OSM", OSM_T),
    "ilhas-sandwich-do-sul": (["ilhas-sandwich-do-sul"], "Natural Earth v5.1 (2022)", f"as {MS['ilhas_sandwich_do_sul']['ilhas']} ilhas do arco a leste de 29°W (sem a Geórgia do Sul); {MS['ilhas_sandwich_do_sul']['extensao_norte_sul_km']} km de norte a sul (F86: ~350 km); só o nome, sem bandeira e sem dono (R09, N15)", NE),
    "mount-michael-saunders": (["mount-michael-saunders"], "Natural Earth v5.1 (2022)",
        f"o ponto é o CENTRO da ilha Saunders do NE ({MS['mount_michael']['ponto'][1]}°, {MS['mount_michael']['ponto'][0]}°), DECLARADO: o cume não foi lido (o Global Volcanism Program pediu verificação: A08); o vulcão ocupa a ilha; vai junto o polígono da ilha (38 km²). A altura fica fora (F87)", NE),
    "san-juan": (["san-juan"], "Natural Earth v5.1 (2022)", f"o ponto do NE; {MS['san_juan']['mi_ate_o_anel']} mi do anel (F17: ~116 mi); só para ancorar a foto da ISS", NE),
    "costa-dominicana-la-altagracia": (["costa-dominicana-la-altagracia"], "Natural Earth v5.1 (2022)",
        f"o ponto da costa do NE 10m mais perto do anel ({MS['costa_dominicana']['ponto'][1]}°N, {MS['costa_dominicana']['ponto'][0]}°), CONFERIDO: {MS['costa_dominicana']['km']} km = {MS['costa_dominicana']['mi']} mi (F16: 160,4 km, 99,7 mi)", NE),
    "zee-eua-porto-rico": (["zee-eua-porto-rico"], "Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026", "MRGID 33179 como veio; zona econômica, não território (N32)", MR),
    "zee-republica-dominicana": (["zee-republica-dominicana"], "Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026", "MRGID 8409 como veio", MR),
    "zee-sobreposicao-eua-rd": (["zee-eua-porto-rico", "zee-republica-dominicana"], "Marine Regions, Maritime Boundaries v12, WFS de 28/10/2026",
        "MRGID 48982, 'Overlapping claim: United States (Puerto Rico) / Dominican Republic', 18.350 km², entre as duas zonas ao norte de 18,88°N; o anel fica a 2,6 km (1,6 mi) da borda dela (a linha 3602, 'Unsettled median line'). Leia o aviso à Sala", MR),
    "zee-limites-eua-rd": (["zee-eua-porto-rico", "zee-republica-dominicana"], "Marine Regions, eez_boundaries, WFS de 28/10/2026",
        "3 linhas: 3344 (RD–Porto Rico, 'Median line' da VLIZ, só ao sul de 18,88°N), 3602 (Porto Rico–sobreposição, 'Unsettled median line', fonte Limits in the Seas No. 130) e 2041 (o limite de 200 milhas de Porto Rico, 'Unsettled', NOAA). A 'fronteira entre as duas zonas' ao lado do anel é a 3602, e é a borda da sobreposição, não da zona dominicana", MR),
    "limite-placas-norte-americana-caribe": (["limite-placas-norte-americana-caribe"], "USGS (serviço de 2026) sobre Bird (2003) PB2002",
        f"7 segmentos 'North American:Caribbean', {MS['placas']['vertices']} vértices em {MS['placas']['km_total_na_janela']} km (linha grossa, de escala global); {MS['placas']['km_dentro_da_fossa_7000']} km correm dentro da fossa de 7.000 m", "nenhum na tela (USGS, domínio público); na descrição: 'Plate boundaries: USGS, after Bird (2003), doi:10.1029/2001GC000252'"),
    "levantamento-usgs-2002-2003": (["levantamento-usgs-2002-2003"], "USGS OFR 2006-1210 (cruzeiros de set/2002, fev–mar/2003 e ago–set/2003)",
        "as TRILHAS de navegação dos 3 cruzeiros (o navio, não a faixa do multifeixe), tol 0,002°; a área coberta não é polígono lido: a grade combinada do OFR vai de 69,70 a 61,50°W e de 16,36 a 22,69°N (metadado). Mostrar como 'as trilhas do navio', ou a faixa da fala declarada", "nenhum na tela (domínio público); na descrição: 'Multibeam survey tracks: USGS Open-File Report 2006-1210 (USGS/NOAA)'"),
    "ponto-mais-fundo-atlantico": (["ponto-mais-fundo-atlantico"], "S01 (2021), Tabela 1", "19,712°N, 67,311°W, o ANEL de todo o vídeo; a GEBCO_2026 dá 8.373 m nesta célula (o número da tela é o do dossiê, 8.378 ± 5 m)", FATO),
    "estimativa-2019-stewart-jamieson": (["estimativa-2019-stewart-jamieson"], "S02 (2019)", "19,613°N, 67,847°W; 57,3 km (35,6 mi) a oeste do anel; na zona econômica da República Dominicana (Marine Regions)", FATO),
    "sondagem-blake-1883": (["sondagem-blake-1883"], "relatório do USC&GS de 1883, p. 46 (S11)", "19°40'50\"N, 66°23'40\"W; 59,75 mi a leste do anel ('60 MI EAST')", FATO),
    "sondagem-challenger": (["sondagem-challenger"], "IHR 1936 (S12)", "19°42'N, 65°07'W; 143 mi a leste do anel; dentro da fossa de 7.000 m; SEM o ano (N52)", FATO),
    "milwaukee-deep-lista-antiga": (["milwaukee-deep-lista-antiga"], "S02 Tabela 1 (GEBCO Gazetteer antigo)", "19°35'N, 66°30'W; 53,6 mi a leste do anel; a GEBCO_2026 dá 7.567 m ali (S02: 7.450 m, a crista)", FATO),
    "milwaukee-deep-lyman-1954": ([], "S02 Tabela 1 (Lyman 1954; Theodore N. Gill, 1952)", "19,6°N, 68,31667°W; 66 mi a OESTE do anel, ~119 mi da lista (F29: ~118 mi); na zona da República Dominicana. Sem needs.geo próprio: para s20/s60, se o montador quiser o 'Milwaukee Deep (1939)' de Lyman como ponto (o rótulo é de região: B19)", FATO),
    "mergulho-ex1502-dive09": (["mergulho-ex1502-dive09"], "NOAA EX1502 L3 Dive 09 (F68)", "19°09'N, 65°24'W; 130,6 mi a leste do anel; 3,1 km ao sul da fossa de 7.000 m (a parede sul); o mergulho junto à parede sul: o robô desceu a 5.999,7 m e voltou sem chegar ao fundo (S32: 'Bottom Time: N/A'); o alfinete marca o lugar, não um ponto do fundo", FATO),
    "meteor-deep": (["meteor-deep"], "S01 (2021), Tabela 1", "55,230°S, 26,173°W (o gazetteer IHO-IOC dá 55,23069°S, 26,17294°W); NUNCA 55,323°S, 26,294°W (C03). A GEBCO_2026 dá 8.258 m nesta célula (o mínimo do recorte)", FATO),
    "challenger-deep": (["fossa-marianas-challenger-deep"], "S01 (2021), Tabela 1", "11,369°N, 142,587°E (10.924 ± 15 m na Five Deeps); a NOAA (S25) dá a profundidade sem coordenada; a GEBCO_2026 dá 10.925 m nesta célula", FATO),
    "cinco-oceanos-five-deeps": (["cinco-oceanos-five-deeps"], "S01 (2021), Tabela 1", "os 5 pontos, um por oceano (Ártico, Atlântico = o anel, Austral = o ponto ao sul de 60°S, Índico, Pacífico), SEM nome do lugar", FATO),
    "oceanos-ne": (["oceano-atlantico", "oceano-pacifico", "cinco-oceanos-five-deeps"], "Natural Earth v5.1 (2022)", "as 7 áreas de RÓTULO de oceano do NE (N e S do Atlântico e do Pacífico, Índico, Ártico, Austral), tol 0,05°: servem para pôr o nome, não são os limites da IHO", NE),
    "paralelo-60s": (["paralelo-60s"], "linha de coordenada (IHO Res. 02/2023, F81)", "721 vértices; reta em Mercator", "nenhum"),
    "linha-do-equador": (["linha-do-equador"], "linha de coordenada", "721 vértices", "nenhum"),
}

p = json.load(open(P, encoding="utf-8"))
for it in p["itens"]:
    if it.get("tipo") != "geo":
        continue
    slug = it["arquivo"].split("/")[-1][:-5]
    if slug not in M:
        raise SystemExit("sem mapa: " + slug)
    ids, data, fid, cred = M[slug]
    it["needs_ids"] = ids
    it["cena"] = sorted({c for i in ids for c in cenas.get(i, [])}, key=lambda x: int(x[1:]))
    it["data_do_dado"] = data
    it["fidelidade"] = fid
    it["credito_tela"] = cred
    it["sistema"] = "WGS84, lon/lat em graus decimais"
    it["validado_por_visao"] = slug in {"porto-rico", "republica-dominicana", "fossa-porto-rico", "fossa-porto-rico-trecho-mais-fundo", "fossa-porto-rico-leste", "zee-limites-eua-rd",
                                        "limite-placas-norte-americana-caribe", "rupturas-wei-2024", "mar-ao-norte-de-porto-rico", "passagem-de-mona", "levantamento-usgs-2002-2003",
                                        "ponto-mais-fundo-atlantico", "anegada", "costa-oeste-porto-rico", "fossa-sandwich-do-sul", "levantamento-fossa-sandwich-tid",
                                        "ilhas-sandwich-do-sul", "meteor-deep", "paralelo-60s", "mount-michael-saunders"}

# as bases do fundo
BASES = {"gebco-caribe.png": (["gebco-2026-caribe"], "relevo sombreado do fundo, 15–24,5°N × 72,5–59°W, a partir da grade de 15\" (cor e sombra calculadas aqui: rampa proposta a partir do --fundo, exagero vertical ×4)"),
         "gebco-sandwich-do-sul.png": (["gebco-2026-sandwich-do-sul"], "relevo sombreado do fundo, 53–61,5°S × 33–20°W, a partir da grade de 15\" (a mesma rampa e o mesmo exagero)"),
         "gebco-mundo-relevo.jpg": (["globo-gebco-2026"], "o mundo (±85,05°) em Mercator, 4096², do WMS oficial (GEBCO_LATEST), na rampa de cor da GEBCO, terra e mar"),
         "gebco-atlantico-relevo.jpg": (["globo-gebco-2026"], "o Atlântico, 100°W–20°E × 66°S–72°N, 2530×4096, do WMS oficial (GEBCO_LATEST)"),
         "gebco-mundo-medido.png": (["gebco-2026-tid"], f"máscara do que a GEBCO marca como medido (TID 10–17 e 44), o mundo; {MF['mundo_tid_gebco-mundo-medido']['pixels_medidos_%']} % dos pixels"),
         "gebco-atlantico-medido.png": (["gebco-2026-tid"], f"a mesma máscara, o Atlântico; {MF['mundo_tid_gebco-atlantico-medido']['pixels_medidos_%']} % dos pixels")}
p["itens"] = [i for i in p["itens"] if i.get("tipo") != "base"]
for arq, (ids, fid) in BASES.items():
    meta = json.load(open(f"_media/base/{arq}.json", encoding="utf-8"))
    wms = "WMS" in meta["procedencia"]["fonte"]
    p["itens"].append({
        "tipo": "base", "fonte": meta["procedencia"]["fonte"], "arquivo": f"_media/base/{arq}",
        "licenca": "Domínio público (GEBCO Grid terms of use) — reconhecer a fonte" + ("; o WMS pede 'Imagery reproduced from the GEBCO_2026 Grid, GEBCO Compilation Group (2026) GEBCO 2026 Grid (doi:…)'" if wms else ""),
        "url": "https://wms.gebco.net/mapserv" if wms else "https://doi.org/10.5285/4f68d5c7-45eb-f999-e063-7086abc036fa",
        "exige_credito": True, "sha256": meta["imagem"]["sha256"], "resolucao": f"{meta['imagem']['largura']}×{meta['imagem']['altura']}",
        "cantos_lonlat": meta["imagem"]["coordinates"], "projecao": "Web Mercator (EPSG:3857)", "js": f"_media/base/{arq.rsplit('.', 1)[0]}.js (window.__BASE_GEBCO)",
        "needs_ids": ids, "cena": sorted({c for i in ids for c in cenas.get(i, [])}, key=lambda x: int(x[1:])),
        "data_do_dado": DATA_GEBCO + (" (pelo WMS 'LATEST', que hoje é a 2026)" if wms else ""), "fidelidade": fid, "credito_tela": GEB, "validado_por_visao": arq in ("gebco-caribe.png", "gebco-sandwich-do-sul.png"),
        "registrado": "2026-10-28"})

p["atendimento_needs"] = {i: sorted({(x["arquivo"]) for x in p["itens"] if i in x.get("needs_ids", [])}) for i in sorted(cenas)}
faltam = [i for i, a in p["atendimento_needs"].items() if not a]
if faltam:
    raise SystemExit("needs sem camada: " + ", ".join(faltam))
p["pedidos_needs_geo"] = sum(len(v) for v in cenas.values())
p["bloqueios"] = [
    {"needs_id": "anegada-costa-norte-blocos", "cena": sorted(cenas["anegada-costa-norte-blocos"]), "o_que_falta": "os pontos de Bones Bight, Windlass Bight, Soldier Point e Warner, que limitam o trecho de ~10 km (6,2 mi) do F51",
     "onde_procurei": ["Kilbourne et al. 2025 (cópia local, texto inteiro): só os nomes, sem coordenada; a figura 1 é o mapa regional (aberta: a base raster não tem os nomes)",
                       "Wei et al. 2024 (cópia local): Windlass Bight e Soldier Wash no texto, sem coordenada; a Tabela 2 só tem as falhas",
                       "OpenStreetMap (Overpass, 28/10/2026, nomes na caixa de Anegada): Loblolly Bay, Setting Point, Cow Wreck Beach; nenhum dos quatro"],
     "o_que_entreguei": "anegada-costa-norte: a costa norte inteira (19,9 km), do OSM", "destrava": "a figura S1 do suplemento de Kilbourne 2025, ou Atwater et al. 2017, no navegador do app (a Sala), para ler onde ficam os quatro nomes"},
    {"needs_id": "mount-michael-saunders", "cena": sorted(cenas["mount-michael-saunders"]), "o_que_falta": "a coordenada do cume do Mount Michael",
     "onde_procurei": ["as páginas da NASA (S39, S40, S42, cópias locais): sem coordenada", "o Global Volcanism Program (S65): pediu verificação no navegador (A08); não reaberto"],
     "o_que_entreguei": "o centro da ilha Saunders (NE 10m), DECLARADO como 'a ilha do vulcão'", "destrava": "o GVP (volcano.si.edu, vn=390090) no navegador do app"},
    {"needs_id": "levantamento-usgs-2002-2003", "cena": sorted(cenas["levantamento-usgs-2002-2003"]), "o_que_falta": "o polígono da área coberta pelo multifeixe",
     "onde_procurei": ["o catálogo GIS do USGS OFR 2006-1210: há as trilhas (shapefile) e a grade combinada (GeoTIFF colorido, UTM/geo), sem polígono de cobertura"],
     "o_que_entreguei": "as trilhas dos 3 cruzeiros e os limites da grade combinada (metadado)", "destrava": "a grade combinada (combined_grd.zip) lida como máscara, se a cena precisar da área: código novo, não feito"},
]
p["nao_conferido"] = [
    "o trecho de ~10 km da costa norte de Anegada (F51): os quatro nomes não têm coordenada lida (bloqueio acima)",
    "o cume do Mount Michael (o ponto é o centro da ilha, declarado)",
    "a área de cobertura do multifeixe de 2002–2003 (só as trilhas)",
    "a Passagem de Mona e o 'mar ao norte de Porto Rico' não têm polígono lido: são faixas DECLARADAS, com os limites escritos no item",
]
p["avisos_para_a_sala"] = [
    f"A GEBCO_2026 tem {MF['pr_celulas_abaixo_8383']['n']} células mais fundas que 8.383 m na Fossa de Porto Rico, a mais funda com {abs(MF['pr_celulas_abaixo_8383']['min_m'])} m em {MF['pr_celulas_abaixo_8383']['min_em'][0]}°N, {abs(MF['pr_celulas_abaixo_8383']['min_em'][1])}°W (TID 11, multifeixe; os vizinhos dão 8.400–8.500: ruído de linha). "
    "O 'mais fundo' da grade NÃO é o ponto mais fundo: nenhum número de tela sai da grade, e o medidor usa os números do dossiê. No anel a grade dá 8.373 m (8.378 ± 5 m publicados).",
    "O anel fica na zona econômica dos EUA (Porto Rico) pela Marine Regions, mas a 2,6 km (1,6 mi) da área 'Overlapping claim: United States (Puerto Rico) / Dominican Republic' (MRGID 48982), cuja borda é uma 'Unsettled median line' (linha 3602). "
    "A nota do F15 ('a camada da Marine Regions não põe a zona dominicana em disputa') não conta essa área. Do trecho de 8.000 m, 4.326 km² ficam na zona dos EUA, 1.671 na dominicana e 549 na sobreposição. Para o verificador-de-fatos: 'U.S. waters' continua certo para o ponto, mas a linha entre as duas zonas ao lado dele não é uma fronteira acertada.",
    "F75: os 9.195 km do dossiê são esféricos (haversine, R = 6.371 km); a geodésica no WGS84 dá 9.170,3 km (5.698 mi). 'About 5,700 miles' vale nos dois.",
    f"F78 conferido pela própria GEBCO: dentro da fossa de 6.000 m, a GEBCO_2019 tinha {sm['fracao_sem_medida_direta_2019_%']} % sem medida direta (o dossiê diz ~91 %).",
    "O Challenger (F22, 65°07'W) não cai na zona dos EUA (Porto Rico), nem na dominicana, nem na sobreposição: deve ser a zona das Ilhas Virgens dos EUA, que não foi baixada (nenhuma cena pede).",
    "A curva de 8.400 m do F19 não existe na grade de 15\" da GEBCO: o 'trecho mais fundo' é a de 8.000 m.",
]
p["mergulho_3d"] = {
    "viavel_com_o_que_o_canal_tem": False,
    "por_que": ["o MapLibre 4.7.1 aceita raster-dem (terrarium ou mapbox), mas só por TILES em URL; o molde só monta o terreno do perfil (MapTiler, 0 m no mar)",
                "a cena abre por file://, onde fetch de arquivo local é bloqueado (por isso a geometria vem em .js): as tiles de relevo teriam de vir embutidas em .js e servidas por maplibregl.addProtocol — código novo",
                "a grade existe e se codifica sem perda em Terrarium (geo_gebco.terrarium); faltam a pirâmide de tiles em Web Mercator, o protocolo, o exagero (×3–×5 para a fossa impressionar, declarado na tela: regra nova do Lucas) e a base de cor por cima",
                "o portao-margens dá NÃO MEDIDO em cena com relevo, por desenho"],
    "recomendacao": "s02 e s50 planas, como o espelho já diz; o mergulho só depois de uma prova fora da produção (out/prova-gebco-3d/), se a Sala quiser"}
p["globo"] = "o canal não faz globo: todas as vistas do mundo (s04, s48, s63, s64, s67, s68, s70) usam gebco-mundo-relevo e gebco-atlantico-relevo em Web Mercator"
json.dump(p, open(P, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
open(P, "a", encoding="utf-8").write("\n")
print(len(p["itens"]), "itens;", p["pedidos_needs_geo"], "pedidos;", len(p["atendimento_needs"]), "ids atendidos;", len(p["bloqueios"]), "bloqueios")
