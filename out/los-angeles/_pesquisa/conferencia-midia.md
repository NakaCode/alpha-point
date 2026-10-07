# Conferência de mídia: los-angeles, fluxo midia, 07/10/2026 11:33, 13:55, 14:15 e 17:02 (Brasília)

**Laudo:** 37 aprovados de 64 conferidos (17 reprovados, 10 trocar, 0 pendente_lucas); 3 com algo não conferido; recebidos: 64.

## Rodada das 17:02

Entraram 15 arquivos novos: 6 páginas de documento (2ª rodada do `pesquisa-documentos`) e 9 rascunhos de acervo aberto (2ª rodada
do `pesquisa-imagens`). Também entraram a resposta do Lucas aos 10 `pendente_lucas` do Internet Archive e o espelho novo
(`espelho.json` das 16:17, commit c458688, sobre o relógio da r3a). Sem `regencia.json`: as janelas continuam provisórias, tiradas
dos `_planos` do espelho de hoje. Fora do julgamento, como antes: `la0007-prova-p2.jpg` (é prova), `_media/base/` e `_media/geo/`.
`_media/` não mudou durante a conferência (sha256 antes e depois, 149 arquivos).

### A resposta do Lucas aos 10 do Internet Archive

- Mensagem literal, às 12:03 de Brasília: "Outra cópia, senão recriar (Recomendado)". A opção dizia: "Os pesquisadores procuram a
  mesma página numa fonte aprovada (Commons, governo). O que não aparecer, a cena recria: o trecho literal no visual do canal, com
  a fonte (ex.: Source: Los Angeles Times, 1899). Sem risco com os termos."
- A resposta cobre os 10 pelo nome. Os 10 saem **reprovados**: a imagem tirada do archive.org não vai à tela. Os vereditos antigos
  (`pendente_lucas`) foram para `substituidos`, e a resposta ficou gravada em `resposta_lucas` em cada um.
- **Dana, Hood (2) e Willard** foram substituídos pelas cópias novas, abaixo. **As 6 páginas do Los Angeles Times vão à
  recriação** (`pauta-documentos.json`, `rodada_2.recriacao`).
- **Quem entregou (`pesquisa-documentos`)** move as 10 de `_media/documento/` para `_media/_caca/_retirado/documento/`. Enquanto
  estiverem lá com `reprovado`, elas seguram o `regie advance` do `research`.

### A pergunta que era só minha: a cópia do Commons de um scan do Internet Archive cumpre a decisão?

**Cumpre.** Dana, Willard e o folheto do Hood estão no Commons como o PDF que o Internet Archive gerou da mesma digitalização.
A conta Fæ subiu esses PDFs, e a ficha cita o identificador do IA. A minha leitura:
- a opção que o Lucas escolheu nomeia o Commons como fonte aprovada e pede "a mesma página";
- o Commons está na lista do canal, com licença arquivo a arquivo (`midia.md` §7.3). Li hoje a ficha dos três: domínio público,
  publicados antes de 1931, sem restrição;
- os arquivos vieram do `upload.wikimedia.org`, não do archive.org. Os termos de acesso do archive.org ("for scholarship and
  research purposes only"), que eram o risco da pergunta, regem o uso do site deles;
- nos EUA, a digitalização fiel de uma página em domínio público não cria direito novo;
- é a mesma leitura que já aprovou neste vídeo cópias do Commons de acervos fora da lista (LAPL, USC/CHS). Nesta rodada, ela vale
  também para o Met, o Getty e a NYPL.

Não ficou dúvida real, e por isso o veredito não é `pendente_lucas`. Se o Lucas entender a "outra cópia" como outra
digitalização, a recriação de Dana e de Willard já está escrita na pauta (`recriacao_se_recusado`), e na s20 a cena usa o govinfo
de todo jeito.

### Os 15 novos e os 12 que mudaram

| id | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `documento/hed41-1892-p28.jpg` | s20 p1 | govinfo (Law Library of Congress) | aprovado | a abertura impressa da audiência de 08/09/1892, limpa e federal; a preferida do plano 1 |
| `documento/hed41-1892-p58.jpg` | s20 p2 | govinfo | aprovado | "would go to the wall" na fala de Hood, p. 58; a preferida do plano 2. Na tela, a grafia desta impressão |
| `documento/hood-1892-commons-p1.jpg` | s20 p1 | Commons (scan do IA, exemplar da LoC) | aprovado | reserva: a capa do folheto, com marcas de catálogo nas margens; a cena usa a do govinfo |
| `documento/hood-1892-commons-p40.jpg` | s20 p2 | Commons (scan do IA) | aprovado | reserva: a mesma fala no folheto; a cena usa a do govinfo, nunca as duas |
| `documento/dana-1895-commons-p109.jpg` | s06 p2 | Commons (scan do IA, BPL) | aprovado | "the worst place we had seen yet", agora pelo Commons, em domínio público |
| `documento/willard-1899-commons-p1.jpg` | s22 | Commons (scan do IA, UC) | aprovado | a folha de rosto com "open to competition", pelo Commons |
| `_caca/s04/…/los-angeles-view-over-the-plain-1876-watkins-met.jpg` | s04 | Commons (Met, CC0) | aprovado | a cidade inteira na planície, sem água, em 1876, grande; "Photo from 1876" |
| `_caca/s04/…/the-plaza-los-angeles-stereograph-ca1880-watkins-getty.jpg` | s04 | Commons (Getty) | aprovado | a Plaza c. 1880, uma metade do estereograma; a alternativa que nomeia a Plaza (a ancoragem de s05) |
| `_caca/s04/…/la-plaza-from-fort-moore-hill-1876-lapl.jpg` | s04 | Commons (LAPL) | trocar (era aprovado) | 800 px: entrava pela lacuna, e agora o plano tem foto grande |
| `_caca/s04/…/la-plaza-and-plaza-church-ca1868-lapl.jpg` | s04 | Commons (LAPL) | trocar (era aprovado) | 1022 px: o mesmo motivo |
| `_caca/s09/…/birds-eye-view-los-angeles-wilmington-inset-1877-glover-loc.jpg` | s09 p2 | Commons (LoC, mapa) | aprovado | o porto de Wilmington em 1877 no encarte da vista de Glover: mapa antigo, impresso sobre a mesa, com o gênero e o ano na tela, nunca como foto |
| `_caca/s18/…/longest-wharf-…-nypl-lossless-from-tiff.png` | s18 p2 | Commons (NYPL) | aprovado | o Long Wharf num cartão de 1902, com o trem, na resolução inteira da origem; "Postcard from 1902" |
| `_caca/s18/…/longest-wharf-…-nypl-commons-1920.jpg` | s18 p2 | Commons (NYPL) | reprovado | o mesmo cartão em versão menor (1920 contra 2404 px): vai o PNG |
| `_caca/s28/…/harbor-day-celebration-san-pedro-1899-usace.jpg` | s28 p2 | Commons (USACE) | reprovado | multidão em San Pedro, 1899, mas a origem diz "Harbor Day", sem o nome do jubileu nem a data: o evento não foi conferido |
| `_caca/s47/…/dredging-wilmington-harbor-waterfront-ca1912-chs2407.jpg` | s47 p1–p2 | Commons (USC/CHS) | aprovado | a frente de água de Wilmington c. 1912, aterro vazio e sem cais; uma foto nos dois planos, com movimento (declarado no espelho); "Photo from about 1912" |
| `_caca/s49/…/los-angeles-harbor-deepening-dredge-1982-usace.jpg` | s49 p1 | Commons (USACE, federal) | aprovado | o aprofundamento de 1982, com a ponte Vincent Thomas atrás; só no plano 1, nunca no "By 2013" |
| `_caca/s49/…/los-angeles-harbor-deepening-dredge-aerial-1982-usace.jpg` | s49 p1 | Commons (USACE, federal) | aprovado | a mesma obra vista do alto; só no plano 1, alternativa da de baixo. No plano 2 faria o papel do aprofundamento de 2008–2013 |
| `documento/dana-1895-p109.jpg` | s06 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; substituída pela cópia do Commons |
| `documento/hood-1892-p40.jpg` | s20 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; substituída pela p. 58 do govinfo |
| `documento/hood-1892-p1.jpg` | s20 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; substituída pela p. 28 do govinfo |
| `documento/willard-1899-p1.jpg` | s22 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; substituída pela cópia do Commons |
| `documento/lat-1899-04-27-barcaca-p10.jpg` | s28 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação |
| `documento/lat-1899-04-27-publico-p10.jpg` | s28 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação. A frase da r3a diz "turned out" |
| `documento/lat-1906-11-13-p1.jpg` | s38 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação |
| `documento/lat-1906-11-20-p2.jpg` | s38 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação |
| `documento/lat-1906-11-21-p2.jpg` | s38 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação |
| `documento/lat-1909-08-13-p1.jpg` | s45 | Internet Archive | reprovado (era pendente_lucas) | a resposta do Lucas; vai à recriação |

### Os aprovados anteriores contra o espelho de hoje

Os textos de cena que a r3a mudou não têm mídia aprovada: s03 e s40 são mapa, e na s28 as duas páginas do Times saíram
reprovadas pela resposta do Lucas. Nos 25 aprovados que ficaram (o .mov da s01, s09, s11 ×2, s18, s27 ×2, s33, s47 ×2, s54, o
retrato de Dana e 13 documentos), a frase é a mesma, e o objeto do plano também. Mudou só o relógio: as bordas andaram até
1,6 s, e as janelas, menos de 0,05 s.
- O veredito fica, com a nota `revisao_r3a`: os `t0`, `t1` e `janela_s` de hoje, os planos, e o sha256 conferido de novo.
- **s01, plano 1:** o objeto ganhou "presa ao lugar dela no contorno de hoje". O .mov continua servindo: é Los Angeles do ar. O
  plano 2 virou satélite.
- **s54:** o objeto diz agora "o farol do porto de San Pedro". O rótulo continua sem "Angels Gate".
- **s51:** o plano virou "aéreo-real", sem caça. O clipe de banco, que já estava reprovado, perdeu também o plano.
- **s47:** os aprovados do farol cobrem os planos 3 e 4 (641,7–648,07 s, 6,37 s), como antes.

Os dois aprovados da s04 que mudaram (as fotos pequenas da LAPL) estão na tabela acima.

## Para o Lucas pesar

Nenhum `pendente_lucas`. Para ele saber, sem pergunta: li a cópia do Commons de um scan do Internet Archive como "a mesma
página numa fonte aprovada" (acima). Se ele não concordar, Dana e Willard vão à recriação, já escrita.

## Para reconferir no navegador do app

- **s28, "Celebration of Harbor Day. San Pedro." (USACE, 1899):** falta uma fonte que ligue "Harbor Day" ao dia de San Pedro do
  Free Harbor Jubilee (26/04/1899). Pode vir do `verificador-de-fatos`, pelo dossiê, ou de outra cópia do mesmo registro com
  legenda e data: Calisphere/USC ou LAPL, buscas "Free Harbor Jubilee 1899" e "harbor celebration San Pedro 1899". Willard põe o
  primeiro dia em San Pedro, "near Point Fermin", com cerca de 20.000 pessoas, o que torna o elo plausível, mas nenhuma fonte do
  dossiê usa "Harbor Day". Com o elo provado, conferência nova.
- Continuam da rodada das 11:33: s01, o aéreo do Dronalist (licença no YouTube), e o TIFF da s18. O TIFF fica superado pelo PNG
  aprovado e não precisa mais de conferência.

## Para trocar

**pesquisa-documentos:** mover os 10 reprovados do IA para `_media/_caca/_retirado/documento/` e seguir a recriação das 6 do
Times.

**pesquisa-imagens:**
- s04: as duas da LAPL (800 e 1022 px) saem do lugar delas como `trocar`, sem busca nova: o plano já tem a Watkins de 1876 e o
  estereograma da Plaza.
- s18: o JPEG de 1920 px (reprovado) e o TIFF ilegível (reprovado) ficam em `_caca`; vai o PNG. O PNG não passou pelo `baixar`
  e não tem selo: o veredito casa pelo sha256 dele, `816aa007…`.
- s28, plano 2: `Free Harbor Jubilee San Pedro April 26 1899 crowd photograph` (o Harbor Day, se o elo se provar).
- s49, planos 2 e 3: `USACE Los Angeles District Port of Los Angeles Main Channel deepening 2008-2013 photo (federal, no logo)`.
  O spl.usace.army.mil recusou robô (403): pelo navegador do app.
- Os `trocar_por` das 11:33 continuam, menos o da s04 (resolvido) e o da s09, plano 2, que a litografia cobre.

**Avisos do conjunto da cena** (para o `regente-de-imagem` e o `montador`):
- **s49:** os planos 2 e 3 ("By 2013… from forty-five feet to fifty-three") continuam sem mídia. As fotos de 1982 cobrem só o
  plano 1 (3,1 s).
- **s28, plano 2:** sem foto da multidão. A página do Times virou recriação.
- **s30 e s31:** nenhum arquivo aprovado.
- **s33, plano 2 (Wilmington):** lacuna.
- **s47:** os quatro planos estão cobertos (CHS-2407 nos planos 1 e 2, as fotos da NARA nos planos 3 e 4).
- **s09, plano 2:** coberto pela litografia. Ela não conta na régua de mundo real como registro: é mapa antigo e desenho de época.
- **s04:** um plano de 4,5 s e duas aprovadas (a Watkins de 1876 e o estereograma). Uma basta, e a escolha é do montador e do
  regente: a de 1876 mostra a planície, e o estereograma nomeia a Plaza.

## Para quem escreve a tela (redator-de-tela e verificador-de-fatos)

- **s09, a litografia:** o aviso diz o gênero e o ano ("Lithograph from 1877" ou "Bird's-eye view, 1877"), nunca "Photo from". O
  rótulo de lugar vai até "Wilmington", como a legenda do encarte.
- **s04:** a Watkins de 1876 só pode levar o rótulo "Los Angeles", porque a origem não diz Plaza. O estereograma pode dizer "The
  Plaza, Los Angeles", e o aviso vai como a origem dá ("about 1880").
- **s18:** "Postcard from 1902"; o rótulo não passa de "Santa Monica".
- **s20:** na tela, a grafia da p. 58 do govinfo ("very nearly"; sem vírgula antes de "would go to the wall").
- **s22:** a folha diz "Contest", e a tela não atribui "Free Harbor Fight" a Willard.
- **s47, a CHS-2407:** "Photo from about 1912"; o rótulo de lugar vai até "Wilmington" ou "Los Angeles Harbor".
- **s49:** "Photo from 1982". A origem chama o equipamento de "spill barge", não de draga: o rótulo, se houver, não diz
  "dredge".

## Divergências e notas (rodada das 17:02)

- **Entre a marca e este ofício:** nenhuma.
- **Olhos novos:** em parte. O pedido do Claude central e os nomes de arquivo vieram antes. Os 9 rascunhos de imagem foram
  abertos e descritos antes de eu ler o `por_que_esta` deles. Das 6 páginas de documento, li a pauta (trechos e tratamento)
  antes de abri-las.
- **O PNG da s18:** a igualdade de pixels com o TIFF da origem não foi medida por mim (o `ffprobe` não lê esse TIFF). A
  resolução bate com a que o Commons declara.
- **As fotos de 1982 da s49:** o fotógrafo não é nomeado. O Commons as marca como obra de funcionário do USACE, e a origem diz
  "Approved for public release, distribution unlimited". Contam como federais, como as outras do acervo do Corpo de Engenheiros.

---

# Histórico (rodadas anteriores, como estavam)

As linhas abaixo são das conferências das 11:33, 13:55 e 14:15. Onde a rodada das 17:02 mudou um veredito, vale a tabela de
cima: os 10 do IA, que eram `pendente_lucas`, e as duas fotos da LAPL na s04, que eram aprovadas. A seção "Para o Lucas pesar"
de lá já foi respondida.

**Laudo das 14:15:** 26 aprovados de 49 conferidos (5 reprovados, 8 trocar, 10 pendente_lucas); 2 com algo não conferido; recebidos: 49.

14:15: entrou o Original do mesmo item da s01 (Motion Array 2212473, `…_original_2212473.mov`, 4096x2160): aprovado. O
reprovado do `.mp4` 3840x2026 das 13:55 continua como estava (os dois se distinguem pelo sha256). Os 48 vereditos
anteriores ficaram iguais.

13:55: entraram os três arquivos de banco pago da caça 2 (linhas 1, 2 e 3 do "Sim, A" do Lucas às 13:27), pelo §3, passo 5,
da skill: 1 aprovado (s54), 2 reprovados (s01, s51). Os 45 vereditos de 11:33 ficaram como estavam.

Sem `regencia.json`: todas as janelas são provisórias, tiradas dos `_planos` do espelho (rascunho de 07/10). Conferência
nova sobre os `aprovado` quando a regência nascer. Fora do julgamento: `la0007-prova-p2.jpg` (é prova; não vai à tela),
`_media/base/` e `_media/geo/`. O `aprovado` daqui não é o sim do Lucas.

Nota de método: as pautas foram lidas antes de abrir as imagens. O `o_que_viu` descreve o que está no arquivo, mas não
foi um olhar de olhos novos.

| id | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_caca/s01/…/downtown-los-angeles-aerial-dronalist-2022.webm` | s01 | Commons (YouTube, CC BY 3.0) | reprovado | aéreo 4K que serve, mas a revisão de licença do Commons está pendente e o YouTube não abriu |
| `_caca/s04/…/la-plaza-from-fort-moore-hill-1876-lapl.jpg` | s04 | Commons (LAPL) | aprovado | Plaza e planície, 1876; 800 px, lacuna, impressa sobre a mesa até 1,4×, aviso do ano |
| `_caca/s04/…/la-plaza-and-plaza-church-ca1868-lapl.jpg` | s04 | Commons (LAPL) | aprovado | Plaza e igreja, c. 1868; lacuna, mesa até 1,4×, aviso do ano |
| `_caca/s04/…/los-angeles-1869-panorama-loc.tif` | s04 | Commons (LoC) | trocar | tira de ~6:1 que não domina o quadro (a "tira fina" da s56 do Juneau) |
| `_caca/s09/…/wilmington-bannings-landing-railroad-1870-lapl.jpg` | s09 | Commons (LAPL) | aprovado | o trem no cais de Banning, Wilmington, 1870; lacuna, mesa até 1,4×, aviso |
| `_caca/s09/…/la-and-san-pedro-railroad-station-ca1880-chs6107.jpg` | s09 | Commons (USC/CHS) | trocar | estação em Los Angeles, sem porto; a fala é o cais e o porto de Wilmington |
| `_caca/s11/…/deadmans-island-san-pedro-ca1910-chs13019.jpg` | s11 | Commons (USC/CHS) | aprovado | Deadman's Island inteira, c. 1910, grande |
| `_caca/s11/…/jetty-to-deadmans-island-san-pedro-ca1903-chs1244.jpg` | s11 | Commons (USC/CHS) | aprovado | o muro de pedra até a ilha, c. 1903, grande |
| `_caca/s11/…/san-pedro-and-deadmans-island-1873-lapl.jpg` | s11 | Commons (LAPL) | trocar | pequena, a ilha ao longe; o plano já tem foto grande |
| `_caca/s18/…/long-wharf-port-los-angeles-ca1900-chs842.jpg` | s18 | Commons (USC/CHS) | aprovado | o Long Wharf e os trilhos na praia, c. 1900, grande |
| `_caca/s18/…/longest-wharf-santa-monica-postcard-1902-nypl.tif` | s18 | Commons (NYPL) | reprovado | o TIFF não abre no ffmpeg/ffprobe: não foi olhado |
| `_caca/s27/…/free-harbor-jubilee-poster-1899-loc.jpg` | s27 | Commons (LoC) | aprovado | o cartaz do jubileu de 1899; peça do fato, sem aviso de ano |
| `_caca/s30/…/san-pedro-breakwater-construction-trestle-ca1908-chs2807.jpg` | s30 | Commons (USC/CHS) | trocar | cavalete de trilhos, sem barcaça; a fala é "barge after barge" |
| `_caca/s30/…/great-white-fleet-and-breakwater-trestle-1908-chs5471.jpg` | s30 | Commons (USC/CHS) | trocar | cavalete com espectadores da Great White Fleet, sem barcaça |
| `_caca/s31/…/dredging-wilmington-harbor-ca1912-chs2407.jpg` | s31 | Commons (USC/CHS) | trocar | dragas privadas em 1912, pela origem; a fala é a draga federal de 1905 |
| `_caca/s31/…/ship-and-dredge-los-angeles-harbor-1913-chs5799.jpg` | s31 | Commons (USC/CHS) | trocar | o vapor Yale domina; a draga é pequena e não é a federal de 1905 |
| `_caca/s33/…/san-pedro-harbor-town-ca1891-1910-jackson.jpg` | s33 | Commons (Denver PL) | aprovado | San Pedro, cidade e cais, grande; aviso com o intervalo "ca. 1891–1910" |
| `_caca/s33/…/san-pedro-harbor-1899-lapl.jpg` | s33 | Commons (LAPL) | trocar | o porto sem a cidade, pequeno; o plano já tem a foto grande |
| `_caca/s47/…/los-angeles-harbor-light-breakwater-1914-nara-26lg64a63.jpg` | s47 | NARA (RG 26) | aprovado | farol na ponta do quebra-mar, 26/01/1914, grande |
| `_caca/s47/…/los-angeles-harbor-light-album-1912-1913-nara-26lg64a64.jpg` | s47 | NARA (RG 26) | aprovado | só a foto C (março de 1913) vai à tela, impressa sobre a mesa até 1,4× |
| `_caca/s49/…/port-of-la-channel-deepening-final-bucket-2013-usace-dvids.mp4` | s49 | DVIDS (USACE) | reprovado | logo do USACE gravado no canto o tempo todo (midia.md §7.6), e em 1080p |
| `pessoa/s06/dana-richard-henry-jr-1842-commons.jpg` | s06 | Commons | aprovado | Dana Jr. em 1842, enche o card sem ampliar, aviso do ano |
| `pessoa/s27/mckinley-william-president-1898-loc-commons.jpg` | s27 | Commons (LoC) | aprovado | McKinley presidente, 1898, aviso do ano |
| `documento/arce1888-p2122.jpg` | s13 | govinfo | aprovado | carta de Mendell, San Francisco, 8/11/1886; federal |
| `documento/arce1888-p2123.jpg` | s02 (+s13, reuso declarado) | govinfo | aprovado | "can never be made a harbor for deep-water ships"; federal |
| `documento/arce1888-p2124.jpg` | s15 | govinfo | aprovado | o levantamento de 13/02/1888 com o quebra-mar; federal |
| `documento/arce1888-p2126.jpg` | s15 | govinfo | aprovado | o endosso de Mendell; federal |
| `documento/stat29-1896-p213.jpg` | s24 | govinfo | aprovado | a lei de 1896, a junta e "final as to the location"; folha até 1,4× |
| `documento/sdoc18-1897-p3.jpg` | s24 | govinfo | aprovado | relatório da junta, 1º/03/1897; domínio público pela data |
| `documento/sdoc18-1897-p24.jpg` | s24 | govinfo | aprovado | "this Board reports in favor of San Pedro" |
| `documento/ca-stat1883-p97.jpg` | s35 | Assembleia da Califórnia | aprovado | "contiguous municipal corporations", 1883 |
| `documento/ca-stat1883-p98.jpg` | s35 | Assembleia da Califórnia | aprovado | "consolidated into one corporation", 1883 |
| `documento/ca-stat1889-p360.jpg` | s35 | Assembleia da Califórnia | aprovado | proibição de anexar o que já é cidade, 1889 |
| `documento/ca-stat1909-p282.jpg` | s43 | Assembleia da Califórnia | aprovado | "each one of which is contiguous to the other", 11/03/1909 |
| `documento/hamlin-1916-p1.jpg` | s39 | Commons (LoC) | aprovado | o mapa de anexações de Hamlin, 1916 |
| `documento/dana-1895-p109.jpg` | s06 | Internet Archive (BPL) | pendente_lucas | "the worst place we had seen yet"; DP pela data, imagem do IA |
| `documento/hood-1892-p40.jpg` | s20 | Internet Archive (LoC) | pendente_lucas | "would go to the wall"; DP pela data, imagem do IA |
| `documento/hood-1892-p1.jpg` | s20 | Internet Archive (LoC) | pendente_lucas | capa da audiência de 08/09/1892; imagem do IA |
| `documento/willard-1899-p1.jpg` | s22 | Internet Archive (UC) | pendente_lucas | folha de rosto de Willard, "open to competition"; imagem do IA |
| `documento/lat-1899-04-27-barcaca-p10.jpg` | s28 | Internet Archive (microfilme) | pendente_lucas | "Automatic Barge Fails to Do Just What Was Expected."; imagem do IA |
| `documento/lat-1899-04-27-publico-p10.jpg` | s28 | Internet Archive (microfilme) | pendente_lucas | "between 15,000 and 20,000"; imagem do IA |
| `documento/lat-1906-11-13-p1.jpg` | s38 | Internet Archive (microfilme) | pendente_lucas | "Annexation by a Hair… Six Votes"; imagem do IA |
| `documento/lat-1906-11-20-p2.jpg` | s38 | Internet Archive (microfilme) | pendente_lucas | "Ten Ahead… 213… 203"; imagem do IA |
| `documento/lat-1906-11-21-p2.jpg` | s38 | Internet Archive (microfilme) | pendente_lucas | 6612 a 914, só no plano 2 (o "213" sai impresso "218"); imagem do IA |
| `documento/lat-1909-08-13-p1.jpg` | s45 | Internet Archive (microfilme) | pendente_lucas | "Thus Los Angeles becomes in reality a seaport city"; imagem do IA |
| `_caca/s01/motionarray/Los_Angeles_Downtown_Aerial_Fly_Drone_uhd_2212473.mp4` | s01 | Motion Array 2212473 | reprovado | é o item da prévia (mesmo_item true) e serve à fala, mas veio em 3840x2026: o "4K" do Motion Array reduz o original 4096x2160; a régua do banco pago não tem exceção |
| `_caca/s51/motionarray/Cargo_Shipping_Operations_At_Port_Of_Los_Angeles_….mp4` | s51 | Motion Array 4239434 | reprovado | é o item da prévia, mas no 4K os pórticos dizem "LBCT" e "ZPMC": marca de terceiro legível, e LBCT é o terminal de Long Beach, não o Porto de Los Angeles |
| `_caca/s54/envato/san-pedro-harbor-lighthouse-bathed-in-the-warm-hue-….mp4` | s54 | Envato 90e9da08… | aprovado | o mesmo item da prévia: o farol na ponta do quebra-mar de San Pedro, hoje, 4K, 19 s para 4,8 s; rótulo só San Pedro/Los Angeles |
| `_caca/s01/motionarray/Los_Angeles_Downtown_Aerial_Fly_Drone_original_2212473.mov` | s01 | Motion Array 2212473 | aprovado | o mesmo item da prévia (mesmo_item true), agora no Original 4096x2160 (ProRes 422 LT, 22 s): o centro de Los Angeles do ar, sem letreiro legível, cobre "second-largest city"; o .mp4 3840x2026 continua reprovado e fora da cena |

## Para o Lucas pesar (11:33; respondida às 12:03)

Os 10 `pendente_lucas` são a mesma pergunta: dana-1895-p109, hood-1892-p40, hood-1892-p1, willard-1899-p1,
lat-1899-04-27-barcaca-p10, lat-1899-04-27-publico-p10, lat-1906-11-13-p1, lat-1906-11-20-p2, lat-1906-11-21-p2 e
lat-1909-08-13-p1.

- **O que pesar:** são páginas de livro, impresso e jornal de 1892 a 1909, em domínio público pela data (midia.md §7.1).
  A imagem de cada uma só existe no Internet Archive: scans da Boston Public Library, da Library of Congress e da
  University of California, e o microfilme do próprio IA para o Los Angeles Times. A marca deixa o IA fora como acervo
  de imagem e vídeo (§7.3), e nunca se perguntou sobre página de documento tirada dele. Os termos de uso do archive.org
  não abriram à leitura automática.
- **Pergunta:** "Página de documento de domínio público tirada do Internet Archive pode ir à tela, ou a cena recria o
  trecho (literal, com a fonte)?"
- Nas duas do Hood, a pergunta pode sumir se a mesma digitalização estiver no loc.gov, que é acervo da lista.

## Para reconferir no navegador do app (11:33)

- s01, o aéreo do Dronalist: https://www.youtube.com/watch?v=FFRW43AVTQk. Copiar a licença que a página mostra e o nome do
  canal. No Commons, a revisão de licença do arquivo está pendente.
- s18, o cartão-postal da NYPL: não é coisa de navegador. O `pesquisa-imagens` entrega uma cópia legível do mesmo item
  (o JPEG em tamanho original que o Commons gera do TIFF), e o conferente olha de novo.
- Os 10 documentos do IA: https://archive.org/about/terms.php, copiar o que os termos dizem sobre uso.
- s20, Hood: procurar no loc.gov a transcrição de 1892 ("Before the honorable Board of government engineers", Craighill).

## Para trocar (11:33)

**pesquisa-imagens:**
- s04: `Los Angeles Plaza 1870s view over the plain, photograph 1600 px wide or larger` (o panorama de 1869 é tira fina).
- s09, plano 2: `Wilmington harbor California 1870s photograph`.
- s11: `Deadman's Island San Pedro 1870s photograph, 1600 px wide or larger` (a de 1873 é pequena; o plano já tem duas grandes aprovadas).
- s30: `barge dumping rock San Pedro breakwater construction 1899-1912 photograph`. A CHS-2807 serviria em s29, se o
  montador lhe der um plano de foto (conferência nova).
- s31: `U.S. government dredge San Pedro Los Angeles harbor 1905 photograph`. A CHS-2407 serviria em s47, planos 1–2
  (conferência nova).
- s33: `Wilmington California town 1905 photograph`.
- s49 (reprovado, mas com recado): `USACE Los Angeles District dredge Port of Los Angeles Main Channel deepening 2013,
  B-roll or photos without logo (DVIDS)`.

**Avisos do conjunto da cena** (para o `regente-de-imagem` e o `montador`):
- s01 (12,3 s, cabe respiro): nenhum footage aprovado. (Superado às 14:15 no plano 1: ver abaixo.)
- s30, s31 e s49: nenhum arquivo aprovado.
- s09 plano 2 e s18 plano 2: sem aprovado.
- s33 plano 2 (Wilmington) e s47 planos 1–2: lacunas.
- s28 plano 2: o espelho pede foto da multidão. A página do Times só serve se a cena mantiver o documento.

## Divergências e notas para quem escreve a tela (11:33)

- s33 (Jackson): o aviso dá o intervalo da origem, "ca. 1891–1910", e não "the 1890s".
- s38: o recorte de 21/11/1906 imprime "218". Ele fica só no plano 2, e o "213" vai na folha de 20/11.
- s45: a citação continua na fonte depois de "city", então a tela não fecha com ponto.
- s28: a manchete vai inteira, "Automatic Barge Fails to Do Just What Was Expected."
- s47: o rótulo segue a origem, "Los Angeles Harbor Light", e não diz "Angels Gate".
- s06 (Dana): a origem não diz o meio do retrato. A forma do aviso é do `redator-de-tela`.
- Entre a marca e este ofício: nenhuma divergência.

## Banco pago, caça 2 (13:55)

`mesmo_item`: **true nos três**. Cada quadro do arquivo (15, 50 e 85 %, pelo `_frames-de-clipe`) foi posto ao lado da
prévia do mesmo ponto: mesmo enquadramento, luz, movimento e coisas nos mesmos lugares. Na s01 e na s51, o
`arquivo_baixado` traz o ID do próprio item; no Envato, o nome não prova nada, e a prova é o olho.

**Para o Lucas pesar** (não é `pendente_lucas`: a régua não deixa a ele; é pergunta de regra, se ele quiser mudá-la):
- s01, Motion Array 2212473: o arquivo veio em **3840x2026** (proporção 256:135), porque o "4K" do Motion Array reduz o
  original de 4096x2160 a 3840 de largura. A régua do banco pago é 3840x2160 ou mais, sem exceção na caça, e a skill
  proíbe o "Original" (ProRes 422, 984,46 MB). Para encher a tela 16:9, a cena ampliaria 1,066× e cortaria uns 120 px
  de cada lado. Quer abrir uma exceção (o arquivo como está, ou o "Original" numa linha nova), ou trocar o clipe?
- s51, Motion Array 4239434: só se ele quiser outro olhar. O veredito não depende dele: marca de terceiro legível
  ("LBCT", "ZPMC") e lugar contradito (Long Beach na fala do Porto de Los Angeles).

**Para trocar** (pesquisa-imagens):
- s01, plano 1: `Los Angeles downtown skyline aerial drone, delivered file 3840x2160 (16:9 UHD) or larger, no legible signage`.
  (Superado às 14:15: o Original do mesmo item foi aprovado.)
- s51: `Port of Los Angeles container terminal aerial 4K (San Pedro / Terminal Island side, e.g. Pier 400 or TraPac), no
  legible company names or logos on cranes and containers`.

**Avisos do conjunto da cena:** s01 continua sem footage aprovado nos dois planos (o porto da abertura virou vista de
satélite, decisão do Lucas). s51 fica sem aprovado.

**Para quem monta:** s54 aprovado com janela provisória de 4,8 s; o farol vai do meio-esquerdo para a borda direita ao
longo do clipe, então o trecho escolhido decide onde ele fica.

**Divergências:**
- O `registrar-download` mede só o lado maior (`LADO_4K = 3840` sobre `max(w, h)`) e aceitou 3840x2026 com saída 0. O
  ofício (§5.3) e a skill (§2.3) pedem 3840x2160 ou mais. O script vem do molde e não se edita; vale a régua do ofício.
- A prévia da caça (cerca de 1.100 px) não mostra letreiro que o 4K mostra: a s51 passou na caça e reprova no arquivo.
  O recorte 1:1 do arquivo é o que pega isso.
- Olhos novos só em parte: os vereditos da caça foram lidos antes de abrir os quadros dos arquivos.

## Banco pago, caça 2, o Original da s01 (14:15)

Um arquivo: `_caca/s01/motionarray/Los_Angeles_Downtown_Aerial_Fly_Drone_original_2212473.mov`, candidato s01-p1-3, o mesmo
item do `.mp4` reprovado às 13:55. Baixado no formato Original, que a skill (§3, passo 2, mudada em 07/10/2026) permite
quando o 4K do Motion Array vem abaixo de 2160.

- **Veredito: aprovado**, com os quatro critérios em `passa`.
- **`mesmo_item: true`.** Os quadros de 15, 50 e 85 % (pelo `_frames-de-clipe`, que leu o `.mov`) batem com as prévias
  `-p15`, `-p50` e `-p85` e com o quadro de 50 % do `.mp4` do mesmo item: o mesmo enquadramento, luz, torres e movimento.
  O `arquivo_baixado` traz o ID 2212473, e a medida bate com a página (4096x2160, 0:22, 984,46 MB).
- **Técnica:** 4096x2160 horizontal, dentro da régua. Os recortes 1:1 do 4096x2160 não mostram letreiro nem logotipo
  legível; as quatro pessoas da trilha (15 %) são minúsculas, sem rosto.
- **Para o `_instalar-lote`** (não reprova aqui): ProRes 422 LT, yuv422p10le, 23,976 fps, sem áudio (uma faixa de dados,
  de timecode); o footage vai a h264/yuv420p, 30 fps.
- **Para quem monta:** 256:135 (1,896:1). Encher 3840x2160 sem ampliar pede reduzir a 4096 de largura e cortar 128 px de
  cada lado.
- **O `.mp4` 3840x2026** continua `reprovado`, em `_caca`, e não vai à cena: a cena cita só o `.mov`, pelo sha256
  `2e13a16a…f2dd`.
- **Conjunto da cena:** a s01 passa a ter footage aprovado no plano 1 (3,1 s pelo espelho; o clipe tem 22 s). O plano 2,
  o porto, continua sem footage (virou vista de satélite, decisão do Lucas).
- **Olhos novos só em parte:** o veredito das 13:55 do mesmo item foi lido antes de abrir os quadros do `.mov`.
- Entre a marca e este ofício: nenhuma divergência.
