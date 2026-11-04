# Conferência de mídia · `big-sur` (vídeo 5) · fluxo `midia` · lotes 1 e 2 de 2 · 04/11/2026 (lote 1 às 19:2x, lote 2 às 19:58, Brasília)

**O laudo do arquivo inteiro:** 20 aprovados de 37 conferidos (3 reprovados, 14 trocar, 0 pendente_lucas); 1 com algo não conferido; recebidos: 37 vereditos sobre 32 arquivos. Cinco arquivos foram julgados para duas cenas cada: o vídeo do USGS (s09 e s27), as fotos de Carmel de Daderot e de Leipelt (s14 e s17), a Pine Ridge (s25 e s33) e a foto aérea da Caltrans (s48 e s28).

**O lote 2:** 13 aprovados de 21 vereditos (2 reprovados, 6 trocar). São 17 vereditos novos, sobre 13 rascunhos do acervo aberto, a Pine Ridge para s33 e as duas páginas do questionário da ACS. Os outros 4 refazem vereditos do lote 1 com o que a Sala viu no navegador do app (Leipelt em s14 e s17; a cabana dos Pfeiffer e o HABS em s30). Os 4 vereditos antigos estão em `substituidos`, com `substituido_em`. A Hurricane Point de Joe Mabel para s44 ficou sem veredito: os três planos de s44 são mapa 3D, e o espelho diz "Nada a caçar: isto não foi filmado (uma regra); o relevo é a base". O plano não pede foto.

Nada foi entregue nem movido. A lista de sha256 de `out/big-sur/_media/` é a mesma antes e depois (148 arquivos; `out/big-sur/_tmp/conferencia/_media-antes-lote2.txt` e `_media-depois-lote2.txt`). O JSON foi emendado por script, com o sha256 conferido antes e uma cópia em `out/big-sur/_tmp/conferencia/conferencia-midia.json.antes-lote2`. Não há regência, então toda janela é provisória: é a do plano que o montador escreveu no espelho r2.

| Arquivo | Cena | Fonte | Veredito | Motivo |
|---|---|---|---|---|
| `s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons.jpg` | s01 | Commons | aprovado | reserva declarada da abertura: a ponte de Bixby de cima (2023, 5280×2970). Só entra sem o drone 4K da caça, com "Photo from 2023" |
| `s05-big-sur-coast-from-hurricane-point-2025-03-11-joe-mabel-commons.jpg` | s05 | Commons | trocar | céu encoberto, sem o sol que o plano pede para "isn't a harsh climate", e a ponte de s01 no centro. A foto de McWay serve |
| `s05-big-sur-coast-mcway-cove-sunny-2013-05-diliff-commons.jpg` | s05 | Commons | aprovado | reserva declarada de s05: a costa de McWay em sol (maio de 2013, 8000×5210), com "Photo from 2013". O aéreo de banco vem antes |
| `s09-s27-mud-creek-landslide-uas-2017-07-19-usgs-harrison.mp4` | s09 | USGS | trocar | a Highway 1 enterrada só aparece sob título, seta e legenda queimados. Os trechos limpos (até ~3,3 s) mostram as estradas de terra e não cobrem os 4,4 s |
| idem | s27 | USGS | trocar | a aproximação e a estrada sumindo estão sob título, seta e legenda queimados. Nenhum trecho limpo chega aos 4,9 s |
| `s12-highway-1-big-sur-cliffs-2012-07-29-fred-moore-commons.jpg` | s12 | Commons | aprovado | reserva declarada de s12: a Highway 1 na falésia em sol (2012, 4977×3318), com "Photo from 2012". O voo de banco vem antes |
| `s14-s17-carmel-beach-cypress-2013-11-18-daderot-commons.jpg` | s14 | Commons | trocar | o céu ocupa dois terços, e o mar e a cidade não aparecem: na miniatura de CARMEL, lê-se nuvem e árvore |
| idem | s17 | Commons | trocar | o mesmo |
| `s14-s17-carmel-by-the-sea-coastline-aerial-2016-10-24-leipelt-unsplash-commons.jpg` | s14 | Commons (do Unsplash) | **aprovado** (refeito no lote 2) | Carmel de cima, a cidade sobre o pontal e as praias (CC0 do Unsplash, publicada em 25/10/2016, 4096×2730), como miniatura junto de CARMEL, com "Photo from 2016" |
| idem | s17 | Commons (do Unsplash) | **aprovado** (refeito no lote 2) | a mesma miniatura de s14 P2, com reuso declarado (DF-18). A CC0 foi conferida no navegador do app |
| `s19-cone-peak-from-vicente-flat-trail-2022-11-12-natecation-commons.jpg` | s19 | Commons | aprovado | o Cone Peak no centro, nomeado na origem (2022, 4032×2268), como miniatura, com "Photo from 2022" |
| `s20-big-sur-coast-cliffs-cove-2026-08-15-usfs-avitt-dvids-1019795.mp4` | s20 | DVIDS (Forest Service) | aprovado | falésia a pique e uma praia pequena em Big Sur, no plano 1 (0–29,5 s), em 4K, domínio público |
| `s25-pine-ridge-trail-big-sur-2013-10-15-john-murphy-commons.jpg` | s25 | Commons | trocar | a coordenada da origem põe a trilha no Pfeiffer Big Sur State Park, a 1,4 km da Ventana Wilderness que a frase aponta |
| idem | s33 | Commons | trocar (lote 2) | o assunto é a trilha, e o título da origem também. As sequoias ficam nas bordas e, em miniatura, lê-se trilha na mata. A sequoia de Aligata cobre o plano |
| `s25-ventana-wilderness-bottchers-gap-2012-06-21-s-rae-commons.jpg` | s25 | Commons | aprovado | a Ventana Wilderness vista de Bottchers Gap, serra e mata sem uma casa (2012, 4320×3240), com "Photo from 2012" |
| `s26-mud-creek-landslide-air-photo-2017-05-27-usgs.jpg` | s26 | USGS | aprovado | o deslizamento de Mud Creek sobre a estrada, de cima, em 27/05/2017 (1500×992, a maior da origem), como miniatura, sem aviso |
| `s26-mud-creek-landslide-from-rv-snavely-2017-07-usgs.jpg` | s26 | USGS | trocar | a página data a foto de "July 2011 (approx.)", impossível para 2017, e a estrada não aparece. A foto aérea cobre a miniatura |
| `s48-s28-regents-slide-highway-1-closed-aerial-2024-02-10-caltrans.jpg` | s28 P3 | Caltrans | trocar (lote 2) | é o Regent's Slide certo, mas a mesma foto vai grande em s48, 279 s depois, e o espelho não declara essa volta |
| `s30-john-pfeiffer-homestead-cabin-2023-07-11-aligata-commons.jpg` | s30 P1 | Commons | **aprovado** (refeito no lote 2) | a cabana do colono John Pfeiffer, do fim do século XIX (2023, 4032×2866), com "Photo from 2023". A foto de época não está nos acervos ao alcance, porque a LoC recusou também o navegador do app |
| `s30-limekiln-kilns-1-2-habs-ca-2734-10-2002-rosenthal.tif` | s30 P3 | Commons (HABS) | **aprovado** (refeito no lote 2) | os fornos de cal de Limekiln (HABS, 2002, domínio público), com "Photo from 2002", pelo mesmo motivo |
| `s30-limekiln-lime-kilns-2013-03-30-akos-kokai-commons.jpg` | s30 P3 | Commons | trocar | os fornos em 2013, quando a foto do HABS, de 2002, mostra os mesmos fornos e é do ano mais perto do fato |
| `s30-tanbark-oak-harvesting-big-sur-c1900-cb-clark-commons.tif` | s30 P2 | Commons | reprovado | PD-US sem o ano de publicação que o modelo exige, tirada de um livro moderno, e a imagem é mole e comprimida |
| `s32-notleys-landing-big-sur-1914-slevin-commons.jpg` | s32 P3 | Commons | reprovado (lote 2) | o desembarcadouro de Notley's (1914) sem barco nenhum, e o domínio público sem prova: o modelo diz que a foto foi publicada antes de 1931, mas a fonte é um livro do archive.org sem o ano |
| `s33-pfeiffer-big-sur-sp-coast-redwood-2023-07-13-aligata-commons.jpg` | s33 P2 | Commons | aprovado (lote 2) | a sequoia do Pfeiffer Big Sur State Park, nomeada na origem (2023, 2410×3286), como miniatura junto do vale, com "Photo from 2023" |
| `s35-bixby-bridge-side-arch-canyon-drone-2025-02-28-jav72-commons.jpg` | s35 | Commons | aprovado (lote 2) | a ponte de Bixby de lado, com o arco e o cânion (2025, 8064×6048), reserva do aéreo de banco, com "Photo from 2025" |
| `s36-anderson-canyon-convict-camp-1922-commons.jpg` | s36 P1 | Commons | reprovado (lote 2) | o domínio público não está provado ("Original publication: unknown"), a origem não diz que eram presos, e os carros do quadro parecem dos anos 1930, não de 1922 |
| `s36-highway-1-prison-labor-camp-1930-1936-risvold-uscgs-noaa-commons.jpg` | s36 P1 | Commons (NOAA) | trocar (lote 2) | o acampamento é uma fila pequena de barracões no meio da paisagem, e os presos não aparecem. A origem diz Folsom, e a fala seguinte diz San Quentin |
| `s37-bixby-creek-bridge-under-construction-1932-risvold-uscgs-noaa-commons.jpg` | s37 P1 | Commons (NOAA) | aprovado (lote 2) | a falésia cortada pela estrada nova e o cimbramento da ponte de Bixby em 1932 (domínio público), na mesa como foto pequena, até ~1.330 px na tela |
| `s48-s28-regents-slide-highway-1-closed-aerial-2024-02-10-caltrans.jpg` | s48 P3 | Caltrans | aprovado (lote 2) | o Regent's Slide sobre a Highway 1, de cima, no dia seguinte ao deslizamento (10/02/2024, 5472×3648) |
| `s50-regents-reopening-road-closed-sign-first-cars-2026-01-caltrans-img4919.jpg` | s50 P2 | Caltrans | aprovado (lote 2) | a placa ROAD CLOSED saindo da pista e os primeiros carros passando, na reabertura (galeria de Regent's Slide), na mesa |
| `s50-highway-1-reopened-regents-slide-2026-01-caltrans-img5061.jpg` | s50 P3 | Caltrans | aprovado (lote 2) | a encosta de Regent's Slide reparada, com a estrada reaberta atravessando-a: a 2ª foto da mesa |
| `s50-regents-slide-crew-on-slope-2025-10-22-caltrans.jpg` | s50 P3 | Caltrans | trocar (lote 2) | é a obra de outubro de 2025, e não a reabertura de 2026 que a frase do P3 data. Serviria ao "Crews drilled…" do P1 |
| `s50-regents-slide-reopening-day-2026-01-14-dialh-commons.jpg` | s50 P2 | Commons | trocar (lote 2) | o céu ocupa mais da metade, e a estrada reaberta é uma linha fina sem nenhum carro. A foto da placa saindo e a vista de perto, as duas da Caltrans, cobrem a frase |
| `s50-regents-slide-steel-bars-2025-05-21-caltrans.jpg` | s50 P3 | Caltrans | trocar (lote 2) | as barras de aço no chão do canteiro (maio de 2025) não cobrem a reabertura adiantada. Serviriam ao "steel bars" do P1 |
| `s53-timber-fire-smoke-column-santa-lucia-2026-08-13-usfs-avitt-dvids-1019831.mp4` | s53 P3 | DVIDS (Forest Service) | aprovado (lote 2) | a fumaça subindo da mata na serra sobre o mar, no Timber Fire perto de Big Sur (13/08/2026, 4K), no trecho 16,8–30,8 s (ou 0–16,8 s) |
| `documento/acs-2024-questionario-p1.jpg` | s56 P2 | Census Bureau | aprovado (lote 2) | a página 1 do questionário da ACS 2024 (domínio público), sem a logo, com o trecho "conducted by the U.S. Census Bureau" para o grifo |
| `documento/acs-2024-questionario-p1-titulo.jpg` | s56 P2 | Census Bureau | aprovado (lote 2) | o título "American Community Survey" do mesmo caderno, sem a logo, opcional junto da página |

## As quatro reconferências do lote 1

- **A foto aérea de Carmel, de Leipelt (s14 e s17), passou a aprovado.** A Sala abriu https://unsplash.com/photos/-2KUZhA7iaU no navegador do app em 04/11/2026, às 19:27. A página mostrou "Publicada em 25 de outubro de 2016" (`<time datetime="2016-10-25T02:47:10.000Z">`), o autor "Chris Leipelt" e o lugar "Carmel-by-the-Sea, United States". A data é anterior a 05/06/2017, então a CC0 do Commons vale. O texto copiado e a hora estão em `conferido_no_navegador_do_app`.
- **A cabana dos Pfeiffer e os fornos do HABS (s30) passaram a aprovado.** A busca da foto de época passou pelo Commons e pela NARA, pela pauta. Ela passou também pela Library of Congress, que recusou o navegador do app em 04/11/2026, às 19:0x (HTTP 403, "Executando verificação de segurança"). A Sala parou ali pela regra do canal. Fechada a busca, vale a exceção da foto de outro ano (`identidade.md` §6, "É exceção"), com o aviso do ano. O pedido e o `navegador-sala.md` dão a hora sem o minuto. O veredito não depende disso, porque se baseia só na recusa, e não no que a página mostraria.
- **O tanbark e a Kokai não mudam.** O tanbark continua reprovado pela licença e pela qualidade. O `reconferir` antigo dele apontava para a LoC, que agora está fora do alcance deste vídeo, e por isso ficou sem efeito. A foto de Kokai segue trocar, porque a do HABS é do ano mais perto do fato.

## Para o Lucas pesar

Nada. Nenhum veredito dos dois lotes sai `pendente_lucas`.

## Para reconferir no navegador do app

Nada novo. A Library of Congress fica fora deste vídeo pela recusa de 04/11/2026, e nenhum item espera por ela.

## Para trocar

Recados ao `pesquisa-imagens` (todos os `trocar` deste arquivo são dele):
- **s05**: a Hurricane Point não serve. Ela foi sugerida para s44, mas s44 não pede foto (mapa 3D), e por isso ficou sem veredito.
- **s09 e s27**: `Mud Creek landslide July 2017 UAS footage without captions, USGS`.
- **s14 e s17**: resolvido. A foto de Leipelt está aprovada nas duas cenas.
- **s25**: `Ventana Wilderness trail photograph, inside the wilderness boundary`.
- **s28 P3** (a miniatura de Regent's Slide): `Regent's Slide Caltrans February 2024 photo, a different frame`. A galeria tem outra foto do mesmo dia, "february-10-202401", com o alt "Photo showing extent of Regent's Slide". Outra saída é o montador declarar no espelho a volta da foto aérea de s48 (como fez com Carmel no DF-18). Aí uma conferência nova a aprova.
- **s32 P3**: `Big Sur coast landing with schooner, historic photograph, with publication and license at the source`.
- **s33 P2**: a Pine Ridge cede à sequoia de Aligata.
- **s36 P1**: `convict road crew working on the Carmel-San Simeon highway, 1930s photograph`. Os dois acampamentos ficam de fora.
- **s50**: as fotos da equipe na encosta e das barras de aço serviriam ao P1 ("Crews drilled thousands of steel bars into the slope at Regent's Slide"), se o montador quiser foto junto do perfil desenhado, com conferência nova. A do Dialh cede às duas da Caltrans.

**Avisos do conjunto da cena** (para o `regente-de-imagem` e o `montador`, antes da regência):
- **s30**: o P1 (a cabana) e o P3 (os fornos do HABS) estão cobertos. O P2 (sequoia ou casca) não tem foto aprovada. Na mesa, ele fica sem foto, ou volta a reserva do espelho, com o ícone do ofício.
- **s32 P3 e s36 P1**: nenhum `aprovado`. Vale a reserva do espelho: os desembarcadouros acesos no mapa, e o mapa com os acampamentos.
- **s28 P3**: as duas miniaturas estão sem foto aprovada. A de Paul's não foi achada (lacuna da pauta), e a de Regent's saiu trocar por repetição.
- **s09 e s27**: nenhum `aprovado` cobre os planos de footage. A saída é a declarada no espelho: a foto aérea de s26 e o mapa.
- **s01, s05, s12 e s35**: cobertos só por fotos de reserva. O preferido é o drone 4K da caça, que ainda não aconteceu. Em s35, o espelho não declarou reserva, então usar a foto ali é escolha do montador.
- **s59 P3** (reuso declarado da imagem de s01): com a foto da reserva, o plano dura 6,967 s, acima do teto de 6 s da foto parada (identidade §4.3).
- **s50**: o P2 (a placa saindo) e o P3 (a encosta reaberta) estão cobertos pela Caltrans, na mesma mesa. O P1 é desenho.
- Nenhuma cena deste lote tem janela de footage de 6 s ou mais sem `aprovado` com movimento que a cubra.

## Para quem monta e entrega (não reprova)

- **s37**: a foto da NOAA tem 2860×1605 nominais, mas o detalhe é o de uma foto de ~950 px. Reduzida a 1/3 e ampliada de volta, ela perde quase nada (PSNR 45,7 dB). Vai como a foto pequena, impressa sobre a mesa, com no máximo ~1.330 px de largura na tela. A foto do acampamento da NOAA (s36) tem o mesmo defeito.
- **s53**: use o plano 2 (16,82–30,83 s) ou o 1 (0–16,82 s). Os planos 3 (a brigada) e 4 (as viaturas com "CAL FIRE" legível) ficam fora desta frase. O vídeo vai sem o áudio e passa de 29,97 a 30 fps na entrega.
- **s35**: 48,8 MP, e o `entregar` reduz. A foto de McWay (s05) tem 41,7 MP. O TIFF do HABS se converte para JPG. Os vídeos do DVIDS passam a 30 fps.
- **s56**: a marca vazada "INFORMATIONAL COPY" é do próprio caderno e atravessa o trecho do grifo. Ela fica, porque diz a verdade sobre a página. A logo do Census e o código de barras ficaram fora dos dois recortes.
- **s50 img_4919**: há gente e carros de marca no quadro. É registro de evento real feito pelo órgão, não banco pago, e a regra de autorização de modelo (`midia.md` §3.1) não se aplica.
- **Créditos na tela**:
  - Caltrans: "Caltrans". A origem não pede crédito, e a foto do órgão estadual entra com o nome dele, como a do Estado (`midia.md` §7.5).
  - Commons com atribuição: `<autor> / Wikimedia Commons · <licença>` (Aligata, Jav72).
  - CC0 (Leipelt, Dialh), NOAA, HABS, DVIDS e Census: nenhum crédito (identidade §7).
- **O teto do rótulo de lugar** (`lugar_na_origem`):
  - img_4919: só "Highway 1, Big Sur", porque o alt não nomeia o ponto.
  - img_5061 e a foto aérea: "Regent's Slide".
  - o vídeo do DVIDS: "near Big Sur". A serra de Santa Lucia está só no nome do arquivo.
  - o acampamento da NOAA, se um dia voltar: nunca "San Quentin". A origem diz Folsom, e a diferença é do `verificador-de-fatos`.
- **O aviso do ano**: "Photo from 2023" (Aligata), "Photo from 2025" (Jav72) e, em s30, "Photo from 2023" e "Photo from 2002". As fotos da NOAA de 1932, da Caltrans de 2024–2026 e o vídeo de 2026 são do próprio fato e vão sem aviso.

## Divergências entre a marca e este ofício, e entre as peças

- **As Conditions of Use da Caltrans, lidas de dois jeitos.** A pauta de documentos escreveu que as fotos ficam "fora dessa frase" de domínio público. A pauta de imagens e este conferente leem a frase sobre fotografias como a do material de terceiros que o site usa: "not owned or created by the California Department of Transportation". Por essa leitura, as fotos da própria galeria da Caltrans, sem crédito de terceiro, ficam no domínio público. O Lucas autorizou a Caltrans "conferindo a licença" e deixou o julgamento foto a foto com este conferente. Se o `verificador-de-fatos` ou a Sala lerem diferente, os 5 arquivos da Caltrans deste lote (6 vereditos) voltam para uma conferência nova.
- **A LoC e o "É exceção" da identidade §6.** A regra pede que a busca da foto do ano passe pelos acervos que recusam robô, e a regra de robô manda parar na recusa. Com a LoC recusando até o navegador do app, as duas regras se encontram assim: a busca passou por onde o canal pode ir, e a exceção vale. Fica registrado para o Lucas, caso ele queira outro caminho para a LoC nos próximos vídeos.
