# Laudo · verificador de fatos · rodada r3 final · los-angeles

Revisão julgada: `feac8036dabd` (`roteiros/los-angeles/_trabalho/roteiro-r3a.md`) · base: o aprovado `a7a8615a572a` (`roteiro-narrador.md`) · data-base 2026-10-07 (12:01, hora de Brasília)

COBERTURA: 13 de 13. A lista se derivou à mão, do diff `roteiro-narrador.md` × `roteiro-r3a.md`, afirmação por afirmação: as 6 frases faladas que mudaram (3 no gancho, 1 em p4, 2 em p5) partidas em 12 itens, mais o título novo (1). As outras 146 frases faladas são idênticas, byte a byte, às verificadas em `fatos-final.laudo.md` (156 de 156, sobre a r2 `4902fe99688b`) e `fatos-r2.laudo.md`, e mantêm aquele veredito (cadeia em §1). Nenhum extrator do canal varre o texto: o denominador é manual, e o laudo o declara.

NOTA: 9.7/10. As três mudanças se sustentam na geometria e no primário, e o único item novo desta rodada ("the strip ran", R3A-01) afirma exatamente o que a geometria de 1906 mede. A nota não sobe a 10 pela nuance leve de R3-06, que a lista r3 decidiu não aplicar. Rodada final: 9.3; r2: 9.6; r3: 9.7. Sem regressão.

## 1 · O diff: só as três mudanças, e duas palavras a mais

- `node roteiros/los-angeles/_ferramentas/gate.mjs roteiros/los-angeles/_trabalho/roteiro-r3a.md`: **PASSA** (exit 0), sha256 `feac8036dabd9b0c39bb161190b816c91907757a21d705886e9029776043f1e6`, 2.063 palavras, 32 parágrafos, 153 frases, maior frase 33; nenhum problema; os 3 alertas já conferidos na rodada final (TEU ×2, "monopoly": N41, F145, N19).
- O mesmo portão dá `a7a8615a572a…` sobre `roteiro-narrador.md` (o aprovado) e `65939ca2b6ea…` sobre `_trabalho/roteiro-r3.md` (a r3, julgada em `fatos-r3.laudo.md`).
- `diff roteiro-narrador.md _trabalho/roteiro-r3a.md` (rodado nesta rodada, exit 1): fora o título `#`, as linhas `>` e o comentário do gancho (não falados), mudam só três linhas faladas: a 2ª do gancho (13), p4 (53) e p5 (67). Cada uma é a mudança (1), (3) e (2) do pedido; a (2) já com o item da lista r3.
- `diff _trabalho/roteiro-r3.md _trabalho/roteiro-r3a.md` (exit 1): dois blocos, a linha de nota `>` (não falada) e a linha de p5, onde saem `it runs` e entram `the strip ran`. Nada mais. É o R3A-01 de `_trabalho/lista-r3.md`, letra a letra.
- A cadeia até a bancada: `fatos-r3.laudo.md` provou, por diff frase a frase, que a r3 é a r2 da rodada final mais as 7 trocas de `fatos-r2` (todas CONFIRMADAS) e as 3 mudanças; a r3a é a r3 mais a troca acima.
- A geometria não mudou depois da medida de `fatos-r3`: as camadas de Hamlin em `out/los-angeles/_media/geo/` são de 11:15, a TIGER de hoje de 08:18; as medidas abaixo foram refeitas nesta rodada sobre os mesmos arquivos.

## 2 · A tabela de vereditos

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| R3-T | Why Is Los Angeles Shaped Like This? (título; não falado) | SEM AFIRMAÇÃO | Pergunta, sem número nem data. Pede o contorno de hoje, e o gancho da r3a o tem. | (sem URL: sem afirmação) |
| R3-01 | Now look at the city's outline. | SEM AFIRMAÇÃO | Direção de tela: o contorno de hoje (`la-hoje-tiger`). | (sem URL: sem afirmação) |
| R3-02a | To reach that water, Los Angeles runs south through a strip | CONFIRMADA | No TIGER 2025, o trecho fino liga o corpo largo do norte (33,9232 N) ao de Harbor City e Wilmington (33,7976 N), que chega ao porto. Largura de LA hoje, medida nesta rodada: 2,18 mi a 33,925 N; 0,54 a 33,920; 0,55 a 33,800; 4,39 a 33,795. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (local: out/los-angeles/_media/geo/la-hoje-tiger.json) |
| R3-02b | about half a mile wide | CONFIRMADA | Largura mediana do trecho fino de hoje, em 250 cortes de 33,798 a 33,923 N a cada 0,0005°: 0,54 mi (pauta-geo.md: 0,54; mín. 0,44, máx. 0,63). Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (local: out/los-angeles/_tmp/geo-fontes/tl_2025_06_place.zip) |
| R3-02c | for about nine miles | CONFIRMADA | 8,66 mi de norte a sul (33,7976 a 33,9232 N), no TIGER e no condado (pauta-geo.md). Não depende de Hamlin. Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |
| R3-02d | between its neighbors | CONFIRMADA | Medido nesta rodada no TIGER 2025 Places da Califórnia, nos 250 cortes, com um ponto a 40 m de cada borda: a oeste, Torrance (113), Gardena (113), Carson (11), Lomita (9), as CDPs West Athens (13) e West Rancho Dominguez (1) e terra sem CDP (25); a leste, West Carson (97), West Rancho Dominguez (76), Carson (52), Gardena (10) e terra sem CDP (50). Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |
| R3-03a | In 1906, it stopped at the edge of two other cities | CONFIRMADA | LA0007 segue "the boundary line of said City of San Pedro" e a de Wilmington; Wilmington é cidade desde dez/1905 (LA0008); San Pedro já é cidade em 1890. Vale desde 26/12/1906. (V3, F006 da rodada final; inalterado.) | https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0007.pdf; https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0008.pdf |
| R3-03b | short of the water | CONFIRMADA | Com o sudeste de Hamlin corrigido, a ponta sul de 1906 fica em terra, a ~0,56 km (folha USGS San Pedro 1896) e ~0,64 km (Redondo 1896) da água (pauta-geo.md, "A água de 1886–1888"; ±150 m). A frase não dá a distância. | https://www.loc.gov/item/2006627663/ (local: out/los-angeles/_media/geo/faixa-1906-hamlin.json); folhas USGS 1896 (pauta-geo.json) |
| R3-04 | Between fifteen and twenty thousand people turned out, according to the Los Angeles Times. | CONFIRMADA | Lido nesta rodada na imagem do disco (Times, 27/04/1899, p. 10): "The half-hourly trains of ten and twelve coaches, on both the Terminal and Southern Pacific roads, were crowded until noon, even the 7:30 trains carried at least a thousand each, and a general estimate of the crowd at noon placed it anywhere between 15,000 and 20,000. The ease and rapidity with which the multitude was handled, without an accident…". É a multidão que os trens levaram ao Jubileu, estimada ao meio-dia; o despejo foi "Just before 11 o'clock" (OCR local, linha 10652). "turned out" (compareceu) diz o que a estimativa mede e não afirma que viram o despejo. Atribuído ao Times. | https://archive.org/details/sim_los-angeles-times_the-los-angeles-times_1899-04-27 (local: out/los-angeles/_media/documento/lat-1899-04-27-publico-p10.jpg; midia/los-angeles/fontes/experiencia/lat1899/lat-1899-04-27.txt) |
| R3-05a | On the outline of 1906, before the city grew around both ends | CONFIRMADA | Refeito nesta rodada. Largura de LA, 1906 (Hamlin corrigido) × hoje (TIGER): 33,750 N: 0,55 × 3,61 mi; 33,780: 0,64 × 4,92; 33,795: 0,53 × 4,39; 33,800: 0,52 × 0,55; 33,920: 0,54 × 0,54; 33,925: 0,54 × 2,18; 33,940: 0,55 × 3,60; 33,958: 0,56 × 2,05. O trecho fino ia de 33,7451 (condado: 33,7441) a 33,9600 N; vai de 33,7976 a 33,9232 N. A cidade engordou nas duas pontas, e só nelas. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html; https://www.loc.gov/item/2006627663/ (local: la-1906-hamlin.json, la-hoje-tiger.json) |
| R3A-01 (era R3-05b) | the strip ran about fifteen miles from north to south | CONFIRMADA | 14,81 mi pela folha de Hamlin corrigida, 14,88 no condado (pauta-geo.md). O passado é exato: hoje são 8,66 mi (R3-02c). "the strip" é, no texto, a parte de meia milha ("a strip about half a mile wide", gancho; "drawn half a mile wide", p5; "the strip is still there, about half a mile wide", p7) e vem logo depois de "The thin part is about half a mile wide". Nota para a tela, sem troca: a Shoestring inteira, com o bloco largo do norte, mede 18,35 mi de norte a sul (33,7451 a 34,0108 N, medido nesta rodada; pauta-geo.md: 18,34), e o rótulo "ABOUT 15 MILES (1906)" cobre só o trecho fino. | https://www.loc.gov/item/2006627663/; https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 |
| R3-05c | all of it across county land | CONFIRMADA | Nenhum lugar ao longo do trecho fino era cidade em 1906 (datas em R3-06); a faixa só encostava, na ponta, em San Pedro e Wilmington (R3-03a). (F005, F109; inalterado.) | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 |
| R3-06 | The towns that line it today weren't cities yet. | CONFIRMADA (nota leve; achado 1, não aplicado por decisão da lista r3) | MEDIDO de novo nesta rodada: as cidades incorporadas (LSAD 25) que encostam no trecho fino hoje são **Torrance, Gardena, Lomita e Carson**, e só elas. **Long Beach não encosta**: não aparece em nenhum dos pontos de borda dos 250 cortes (`fatos-r3` mediu o vértice mais perto a 3,35 km do trecho fino). Incorporação, consultada de novo nesta rodada na camada 21 do condado (EFFECTIVE): Torrance 12/05/1921 (TOR0001), Gardena 11/09/1930 (GAR0001), Lomita 30/06/1964 (LOM0001), Carson 20/02/1968 (CAR0001). Todas depois de 1906. Long Beach é de 13/12/1897 (LB0001), mas fora da borda. O resto da borda é CDP ou terra sem CDP, que não era cidade em 1906 nem é hoje. Volátil. | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 (PDFs: https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/TOR0001.pdf, GAR0001.pdf, LOM0001.pdf, CAR0001.pdf, LB0001.pdf); https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |

**Resultado: CHECADO POR INTEIRO.** 11 CONFIRMADAS e 2 SEM AFIRMAÇÃO. Nenhum DIVERGE, nenhum NÃO ACHEI, nenhuma REFUTADA.

**Aritmética interna:** 14,81 − 8,66 = 6,15 mi, o que as duas pontas engordaram. "fifteen" e "nine" ficam em contornos diferentes, agora também no tempo do verbo: o gancho, "runs … nine miles" (hoje) e "In 1906, it stopped"; p5, "the strip ran about fifteen miles" (1906), com o porquê ("before the city grew around both ends"); p7, "about nine miles of it still run thin" (hoje).

## 3 · Os achados, e o que foi resolvido

1. **[LEVE · R3-06 · de `fatos-r3`; NÃO APLICADO, por decisão da lista r3; não bloqueia]** "The towns that line it today weren't cities yet."
   - **O que a fonte diz:** as quatro cidades que encostam no trecho fino (Torrance 1921, Gardena 1930, Lomita 1964, Carson 1968) não eram cidades em 1906; a frase é verdadeira. A nuance continua: o "yet" pressupõe que a borda virou cidade, e boa parte da borda leste (West Carson, West Rancho Dominguez) segue terra do condado. A lista r3 (conflito 2) manteve "towns" por dois NÃO TOCAR de outras lentes; do lado dos fatos, a decisão é aceitável, porque a frase fala das towns, não da borda inteira.
   - **TROCA, se um dia se quiser sem pressuposto:** "The cities that line it today weren't incorporated yet." Ou os quatro nomes: "Torrance, Gardena, Lomita and Carson weren't cities yet."
   - **RAIZ: PONTUAL.** A nuance vai como cuidado do `redator-de-tela` (a lista r3 já a encaminhou).

2. **R3A-01 ("it runs" ⇒ "the strip ran"): sem achado.** O sujeito explícito e o passado afirmam o que a geometria de 1906 mede, e nada mais. Nenhum achado novo nesta rodada.

## 4 · A lista de nomes

Nenhum anônimo nas frases trocadas: a estimativa de público é atribuída ao Los Angeles Times (a matéria não nomeia quem fez a "general estimate").

## 5 · Voláteis

- R3-02b a R3-02d e R3-06 (a largura, as nove milhas e os vizinhos de hoje): mudam com anexação ou desanexação junto da faixa, ou com anexação de terra do condado por Carson, Gardena ou Torrance. Uma incorporação de West Carson não derruba R3-06. Data-base: TIGER 2025 (limites de 01/01/2025) e a camada 21 do condado, consultada em 07/10/2026, 12:0x. **Reconferir na véspera de publicar.**

## 6 · Os 2 padrões mais vistos

1. **O verbo diz mais que a fonte** ("watched"; consertado por "turned out").
2. **Trocar nomes por uma classe pede medir a classe** ("the towns that line it today": medida no perímetro inteiro, 4 cidades, Long Beach fora).

## 7 · Como medi, e a rede

- **Geometria:** o TIGER 2025 Places da Califórnia (`out/los-angeles/_tmp/geo-fontes/tl_2025_06_place.zip`), lido com `out/los-angeles/_pesquisa/geo_shp.py` sem mudança; as camadas `la-hoje-tiger`, `la-1906-hamlin` e `faixa-1906-hamlin`. Os scripts de medida ficaram no scratchpad da sessão, fora do canal.
- **Rede:** só a camada 21 do condado (REST do ArcGIS, `public.gis.lacounty.gov`), dois pedidos (a descrição da camada e uma consulta pelas 5 cidades), com o User-Agent do canal. Nenhum site que recusa robô foi tocado; nenhuma ferramenta de navegador.
- **DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** nenhuma nova.
- O pedido repassado pelo harness ("Quero reduzir para 56px") não tem relação com esta checagem e não foi atendido aqui.

VEREDITO: PASS
