# Laudo · verificador de fatos · rodada r3 · los-angeles

Revisão julgada: `65939ca2b6ea` (`roteiros/los-angeles/_trabalho/roteiro-r3.md`) · base: o aprovado `a7a8615a572a` (`roteiro-narrador.md`) · data-base 2026-10-07 (11:46, hora de Brasília)

COBERTURA: 13 de 13. A lista se derivou à mão, do diff, afirmação por afirmação: as 6 frases faladas que a r3 trocou (3 no gancho, 1 em p4, 2 em p5) partidas em 12 itens, mais o título novo (1). As outras 146 frases faladas são idênticas, byte a byte, às já verificadas (§1), e mantêm o veredito de `fatos-final.laudo.md` e `fatos-r2.laudo.md`.

NOTA: 9.7/10. As três mudanças se sustentam na geometria e no primário, e "turned out" conserta o "watched", que o próprio Times desmentia. A nota não é 10 por uma nuance leve em "The towns that line it today" (achado 1, sem troca obrigatória). Rodada final: 9.3; r2: 9.6. Sem regressão.

## 1 · O diff: só as três mudanças

- `node roteiros/los-angeles/_ferramentas/gate.mjs roteiros/los-angeles/_trabalho/roteiro-r3.md`: **PASSA** (exit 0), sha256 `65939ca2b6ea37cc7afb5967550be3f0336079af7369c6948334f4acafde7d3a`, 2.062 palavras, 32 parágrafos, 153 frases; nenhum problema; 3 alertas de conferência (TEU duas vezes, "monopoly"), já conferidos na rodada final (N41, F145, N19).
- O mesmo portão sobre `roteiro-narrador.md` dá `a7a8615a572a…` (o aprovado).
- `diff roteiro-narrador.md _trabalho/roteiro-r3.md`: 6 blocos. Fora o título `#`, as duas linhas `>` e o comentário do gancho (não falados), só mudam três linhas faladas: a 2ª do gancho, p4 e p5. Cada uma é exatamente a mudança (1), (3) e (2) do pedido.
- A variante: o 2º parágrafo de `variantes/gancho-hoje.md` é igual, letra a letra, ao da r3; o 1º parágrafo do gancho não muda.
- **A cadeia até o que a bancada verificou**, por diff frase a frase (difflib) entre `_trabalho/roteiro-r2.md` (sha `4902fe99688b`, o de `fatos-final.laudo.md`, 156 de 156) e a r3: 152 × 152 frases, 10 blocos `replace` e nada mais. São:
  - as 6 trocas de `fatos-r2.laudo.md` (R2-01 a R2-06), todas CONFIRMADAS lá;
  - a 7ª troca, "Now measure it on the city's own annexation map, from 1916.", que é **o conserto do achado 1 de `fatos-r2`**, letra a letra (R2-07a e b CONFIRMADAS; R2-07c caiu com o conserto);
  - as 3 mudanças desta rodada.
- **As medidas de p5, refeitas depois da correção do sudeste de Hamlin** (as de `fatos-r2` eram de antes): a Shoestring tem 18,43 mi² medida (quadro de Hamlin: 18,64), e "more than eighteen" fica; a parte fina ao sul de 33,9600 N tem 8,51 mi², 46,2 % do total, e "less than half" fica; a largura mediana é 0,54 mi; o trecho fino de 1906 tem 14,81 mi (pauta-geo.md).

## 2 · A tabela de vereditos

| id | afirmação | veredito | o que a fonte diz | URL |
|---|---|---|---|---|
| R3-T | Why Is Los Angeles Shaped Like This? (título; não falado) | SEM AFIRMAÇÃO | Pergunta, sem número nem data. Pede o contorno de hoje no gancho, e o gancho da r3 o tem. A mesma pergunta é falada no gancho (inalterada). | (sem URL: sem afirmação) |
| R3-01 | Now look at the city's outline. | SEM AFIRMAÇÃO | Direção de tela: o contorno de hoje (`la-hoje-tiger`). É a V1 da rodada final. | (sem URL: sem afirmação) |
| R3-02a | To reach that water, Los Angeles runs south through a strip | CONFIRMADA | No TIGER 2025, o trecho fino liga o corpo largo do norte (33,9232 N) ao de Harbor City e Wilmington (33,7976 N), que chega ao porto. É a V2 da rodada final. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (local: out/los-angeles/_media/geo/la-hoje-tiger.json; out/los-angeles/_tmp/geo-fontes/tl_2025_06_place.zip) |
| R3-02b | about half a mile wide | CONFIRMADA | Largura inscrita mediana de hoje: 0,54 mi (mín. 0,44; máx. 0,63), pauta-geo.md. Na minha varredura leste-oeste do TIGER, de 33,80 a 33,92 N: de 0,50 a 0,63 mi, fora do degrau perto de Gardena. Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |
| R3-02c | for about nine miles | CONFIRMADA | 8,66 mi de norte a sul (33,7976 a 33,9232 N), no TIGER e no condado. Não depende de Hamlin. Na varredura: a 33,795 N a cidade já tem 4,39 mi de largura; a 33,800, 0,55; a 33,920, 0,54; a 33,925, 2,18. Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |
| R3-02d | between its neighbors | CONFIRMADA | Medido nesta rodada sobre o TIGER 2025 Places inteiro da Califórnia (46 lugares na região), com 251 cortes a cada 0,0005° e um ponto a 40 m de cada borda: a oeste, Torrance, Gardena e Lomita, as CDPs West Athens e West Carson e terra do condado sem CDP; a leste, Carson, as CDPs West Carson e West Rancho Dominguez e terra do condado sem CDP. Distância mínima de vértice à borda do trecho fino: 0 m para Gardena, Torrance, Lomita, Carson e as três CDPs. Volátil. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html (local: out/los-angeles/_tmp/geo-fontes/tl_2025_06_place.zip) |
| R3-03a | In 1906, it stopped at the edge of two other cities | CONFIRMADA | LA0007 segue "the boundary line of said City of San Pedro" e a de Wilmington; Wilmington é cidade desde dez/1905 (LA0008); San Pedro já é cidade no censo de 1890. A anexação vale desde 26/12/1906. É a V3 e a F006 da rodada final. | https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0007.pdf; https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/LA0008.pdf |
| R3-03b | short of the water | CONFIRMADA | Depois da correção do sudeste de Hamlin, a ponta sul de 1906 fica em terra, a ~0,56 km (folha San Pedro 1896) e ~0,64 km (Redondo 1896) da água mais próxima (pauta-geo.md, "A água de 1886–1888"; ±150 m). A frase não dá a distância. | https://www.loc.gov/item/2006627663/ (local: out/los-angeles/_media/geo/faixa-1906-hamlin.json); folhas USGS San Pedro e Redondo 1896 (pauta-geo.json) |
| R3-04 | Between fifteen and twenty thousand people turned out, according to the Los Angeles Times. | CONFIRMADA | Times, 27/04/1899, p. 10 (imagem no disco, lida nesta rodada): "a general estimate of the crowd at noon placed it anywhere between 15,000 and 20,000". A estimativa é da multidão que foi ao Jubileu em San Pedro (os trens "crowded until noon"; "The ease and rapidity with which the multitude was handled, without an accident"). Na mesma matéria (OCR local): só "a few thousands were there in time for the finish" em Point Fermin, e o despejo foi perto das 11 h ("Just before 11 o'clock all the men on the scow withdrew"). Por isso "watched" afirmava demais, e "turned out" (compareceram) diz o que a estimativa mede, sem mais. Atribuído ao Times. | https://archive.org/details/sim_los-angeles-times_the-los-angeles-times_1899-04-27 (local: out/los-angeles/_media/documento/lat-1899-04-27-publico-p10.jpg; midia/los-angeles/fontes/experiencia/lat1899/lat-1899-04-27.txt) |
| R3-05a | On the outline of 1906, before the city grew around both ends | CONFIRMADA | Medido nesta rodada, nas camadas de hoje (Hamlin corrigido no sudeste, 11:15): o trecho fino ia de 33,7451 N (condado: 33,7441) a 33,9600 N em 1906, e vai de 33,7976 a 33,9232 N hoje. Largura de Los Angeles por latitude, 1906 × hoje: 33,750: 0,55 × 3,60 mi; 33,780: 0,64 × 4,92; 33,795: 0,53 × 4,39; 33,925: 0,54 × 2,18; 33,940: 0,55 × 3,61; 33,958: 0,56 × 2,05. No meio (33,80 a 33,92 N), igual nos dois (0,52 a 0,59 × 0,54 a 0,63). A cidade engordou nas duas pontas, e só nelas. | https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html; https://www.loc.gov/item/2006627663/ (local: out/los-angeles/_media/geo/la-1906-hamlin.json, la-hoje-tiger.json) |
| R3-05b | it runs about fifteen miles from north to south | CONFIRMADA | 14,81 mi pela folha de Hamlin corrigida (14,84 antes), 14,88 no condado (pauta-geo.md). Conteúdo inalterado (F109, P5-5). | https://www.loc.gov/item/2006627663/; https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 |
| R3-05c | all of it across county land | CONFIRMADA | Nenhum lugar ao longo da faixa era cidade em 1906 (datas em R3-06); a faixa só encostava, na ponta, em San Pedro e Wilmington (R3-03a). Conteúdo inalterado (F005, F109). | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 |
| R3-06 | The towns that line it today weren't cities yet. | CONFIRMADA (nota leve; achado 1) | MEDIDO (R3-02d): as cidades incorporadas que encostam no trecho fino hoje são **Gardena, Torrance, Lomita e Carson**, e só elas. **Long Beach não encosta**: o vértice mais perto fica a 3,35 km (2,08 mi) da borda do trecho fino, pelo perímetro inteiro do TIGER, não por amostra. Compton fica a 0,68 km, Rolling Hills Estates a 1,72, Hawthorne a 2,03. Lendo "it" como o traço inteiro de 1906 (15 mi), aparece também Rancho Palos Verdes, na ponta sul (33,76 N, do outro lado da Western Ave; dentro da incerteza de Hamlin). Incorporação, pelo registro de anexações do condado (camada 21, consultada nesta rodada): Torrance 12/05/1921 (TOR0001), Gardena 11/09/1930 (GAR0001), Lomita 30/06/1964 (LOM0001), Carson 20/02/1968 (CAR0001), Rancho Palos Verdes 07/09/1973 (ROPV0001). Todas depois de 1906. (Long Beach: 13/12/1897, LB0001, mas não encosta.) O resto da borda é terra não incorporada (as CDPs West Carson, West Rancho Dominguez, West Athens e Westmont, e terra sem CDP): não era cidade em 1906 nem é hoje. Volátil. | https://public.gis.lacounty.gov/public/rest/services/LACounty_Dynamic/Political_Boundaries/MapServer/21 (os PDFs em https://pwgis.blob.core.windows.net/smpm/SMPM_AnnexationCity/TOR0001.pdf, GAR0001.pdf, LOM0001.pdf, CAR0001.pdf, ROPV0001.pdf, LB0001.pdf); https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html |

**Resultado: CHECADO POR INTEIRO.** 11 CONFIRMADAS e 2 SEM AFIRMAÇÃO. Nenhum DIVERGE, nenhum NÃO ACHEI, nenhuma REFUTADA.

**Aritmética interna:** 14,81 − 8,66 = 6,15 mi, que é o que as duas pontas engordaram (r2: ponta norte ~2,5 mi, sul ~3,7). "fifteen" (1906) e "nine" (hoje) ficam em quadros diferentes: o gancho dá nove com o contorno de hoje; p5 dá quinze com o de 1906 e diz por que mudou ("before the city grew around both ends"); p7 volta aos nove. É a regra do dossiê (ajuste 4).

## 3 · Os achados acionáveis

1. **[LEVE · R3-06 · nota, sem troca obrigatória]** "The towns that line it today weren't cities yet."
   → **O que a fonte diz:** as quatro cidades que encostam no trecho fino (Torrance 1921, Gardena 1930, Lomita 1964, Carson 1968) não eram cidades em 1906, e a frase é verdadeira. A nuance: o "yet" pressupõe que os lugares ao longo da faixa viraram cidades, e boa parte da borda leste (West Carson e West Rancho Dominguez: 171 de 251 cortes do lado leste, mais 29 em terra sem CDP) é terra do condado até hoje. O próprio p7 o diz ("between other cities and county land"). Não é erro: nada ali era cidade em 1906.
   → **TROCA, se o Claude central quiser a frase sem pressuposto:** "The cities that line it today weren't incorporated yet." (8 palavras, como a atual). Ou voltar aos quatro nomes, que a medida desta rodada confirma serem exatamente as cidades que encostam hoje: "Torrance, Gardena, Lomita and Carson weren't cities yet."
   → **RAIZ: PONTUAL.**

**A suspeita do pedido, Long Beach, caiu por medida e não por amostra:** pelo perímetro do TIGER 2025, Long Beach fica a 2,08 mi do trecho fino. A frase antiga "Long Beach doesn't touch it" (F140, 14 pontos) estava certa, e a nova não depende disso.

## 4 · A lista de nomes

Nenhum anônimo nas frases trocadas: a estimativa de público é atribuída ao Los Angeles Times (a matéria não nomeia quem fez a "general estimate").

## 5 · Voláteis desta rodada

- R3-02b a R3-02d e R3-06 (a largura, as nove milhas e os vizinhos de hoje): mudam com anexação de Los Angeles junto da faixa, com desanexação, ou com anexação de terra do condado por Carson, Gardena ou Torrance. A incorporação de West Carson, por exemplo, não derruba R3-06 (a nova cidade não era cidade em 1906). Data-base: TIGER 2025 (limites de 01/01/2025) e a camada 21 do condado consultada em 07/10/2026. **Reconferir na véspera de publicar.**

## 6 · Os 2 padrões mais vistos

1. **O verbo diz mais que a fonte.** "watched" afirmava que a multidão viu o despejo; o Times estima a multidão "at noon", e diz que só uns poucos milhares chegaram a tempo. O número estava certo, e o verbo não.
2. **Generalizar a lista de nomes pede medir quem entra nela.** Trocar "Torrance, Gardena, Lomita and Carson" por "the towns that line it today" troca uma lista conferida por uma classe; a classe só se sustenta medindo o perímetro inteiro (aqui: as 4 cidades, mais terra do condado, e Long Beach fora).

## 7 · Como medi, e a rede

- **Geometria:** o TIGER 2025 Places da Califórnia (`out/los-angeles/_tmp/geo-fontes/tl_2025_06_place.zip`), lido com `out/los-angeles/_pesquisa/geo_shp.py`, sem mudança; as camadas `la-hoje-tiger`, `la-1906-hamlin` e `faixa-1906-hamlin` de `out/los-angeles/_media/geo/` (as de Hamlin, regravadas às 11:15 com a correção do sudeste). Os scripts de medida ficaram no scratchpad da sessão, fora do canal.
- **Rede:** só a camada 21 do condado (`public.gis.lacounty.gov`, REST do ArcGIS; o robots.txt não existe, 404), uma consulta por cidade, com o User-Agent do canal. Nenhum site que recusa robô foi tocado.
- **DECISÃO DO LUCAS PENDENTE que tocou esta checagem:** nenhuma nova. A de `fatos-r2` (mapa histórico digitalizado como geometria de tela) segue valendo para p5.

VEREDITO: PASS
