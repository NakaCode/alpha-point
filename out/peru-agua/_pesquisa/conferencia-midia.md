# Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, tarefa `peru-agua-pesquisa-3` às 04:0x (Brasília)

As janelas da regência, no passo `conducting`. A regência é `out/peru-agua/regencia.json`, sha256 `cf443768…`, com a lista
`_conferencia_de_janelas` e o relato do regente (`out/peru-agua/_tmp/setores/peru-agua-direcao-4.md`, "Os usos de mídia por cena").
O JSON está em `out/peru-agua/_pesquisa/conferencia-midia.json`.

**Laudo:** 18 aprovados de 24 vereditos (2 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não conferido (o JPL da s16, já
reprovado); recebidos: 23 arquivos e 1 uso novo.
- Nesta tarefa, 17 usos da regência: 13 com a janela definitiva, 2 em conferência nova (os dois aprovados) e 2 fora, de propósito.
- 14 vereditos refeitos, com os antigos em `substituidos`, e 1 veredito novo (a Caral frontal na s51).

## Os 13 usos com veredito aprovado: a janela definitiva

Todos cabem na janela provisória que eu tinha julgado, e nenhum muda de veredito. Cada arquivo casa com o veredito pelo sha256:
- o retrato, as páginas e o Landsat, pelo sha256 do arquivo;
- as fotos de acervo, pelo `medido.sha256` do `_PROCEDENCIA.json`;
- as duas de Cantalloc, pelo `medido_no_download.sha256`, porque o `entregar` as reduziu para 5120 px.

| Uso na regência | Arquivo | Janela definitiva (s) | Muda? |
|---|---|---|---|
| s06 b3 | Puno e o Titicaca | 64,133–67,867 (3,73) | não. A miniatura pousa em "Lake". |
| s13 b3 | MODIS de 2018 | 135,933–138,033 (2,1) | não |
| s16 b2 | Landsat 5 de 03/06/1998 | 161,867–165,867 (4,0) | sim, para dentro. Começa em "the desert coast"; o "The sea warms, and" passou à NOAA. |
| s18 b2 | Satipo | 186,2–190,833 (4,63) | não |
| s22 b1 | Caral frontal | 233,033–237,267 (4,23) | não. Ken Burns até 1,12, que dá 1,07× o arquivo. |
| s23 b5 (a janela da s25) | Cantalloc, a espiral | 264,767–266,9 (2,13) | sim, para dentro. Só em "underground channels called puquios". |
| s23 b6 (a janela da s25) | Cantalloc, o poço | 266,9–268,9 (2,0) | sim, para dentro. Só em "carry water to some fields". |
| s26 b0 | Pizarro, "Painting, 1835" | 271,667–275,667 (4,0) | não |
| s27 b0 | Cobo, p. 10 | 279,833–290,7 (10,87) | não |
| s28 b1 | Cobo, p. 14 | 296,833–302,867 (6,03) | não |
| s36 b1 | a barriada de 1997, impressa até 1,4× | 436,3–438,833 (2,53) | não. Leva "Photo from 1997". |
| s39 b3 (a janela da s40) | o rio Santa Eulalia | beat 480,033–487,1; miniatura de 482,533 a 484,8 (2,27) | sim, para dentro. A miniatura só aparece de "Santa" a "reaches". |
| s52 b0–b1 | a lagoa Marcapomacocha | tela cheia 689,933–695,167 (5,23); miniatura até 697,5 | sim, para dentro. Resolve a nota da foto parada de 7,57 s. |

**Onde o número da cena difere.** A regência fundiu algumas cenas do espelho, e conferi pelo tempo e pela frase que a janela é a mesma
que eu julguei:
- **s23 b5 e b6 são a janela da s25.** A fusão é s23←s24+s25. O beat começa em 237,267 + 27,5 = 264,767 s, que é o plano 2 da s25 no
  espelho. As palavras do `words.json` batem: "underground channels called puquios" vai de 264,79 a 266,64 s, e "carry water to some
  fields." de 266,9 a 268,4 s.
- **A ordem das duas de Cantalloc é a da fala.** A espiral, o canal que desce, entra no nome "puquios". O poço, com a água no fundo, entra
  em "carry water". Cada uma fica 2 s ou mais, acima do piso de 1,5 s.
- **s39 b3 é a janela da s40.** A fusão é s39←s40, e 461,3 + 18,733 = 480,033 s, o plano 2 da s40. A frase é a mesma, de 480,05 a
  486,45 s.
- **Os vereditos continuam com a cena do espelho** (s25 e s40). A cena da regência vai em `janela_definitiva.beats[].cena_regencia`.

**O Landsat da s16, o que a tela pode e não pode dizer:**
- Pode: "JUNE 1998" como legenda, e Piura só como o ponto da camada `cidades-peru-ne`, que fica seco no quadro.
- Não pode:
  - "Piura flooded", ou qualquer coisa que ligue a cidade à água;
  - o nome "La Niña" e o tamanho da lagoa;
  - "El Niño 1997–98", sem o `verificador-de-fatos`;
  - "Sechura" como rótulo. A origem não nomeia lugar, então o nome só entra por uma camada geo com procedência, na coordenada dela;
  - o realce da água desenhado à mão;
  - a borda da cena emendada sem costura no satélite de hoje.
- O exige da regência está de acordo com isso.

**A lagoa da s52 em tela cheia.** O arquivo tem 4056×2144 e enche a tela 4K pela altura a 1,0075×. Com o Ken Burns até 1,12, ele chega a
1,13× o arquivo, abaixo de 1,4×. Olhei de novo e a foto está nítida. Ela fica 5,23 s na tela, com movimento, abaixo dos 6 s. O plano
`aereo-real` vai em foto porque não há footage da lagoa nomeada, como já dizia o veredito.

**Pizarro.** Pela decisão da Sala de 22/10, o retrato pintado não conta como registro na régua de mundo real. Isso está anotado no
veredito. Para a Sala: o relato do regente conta o card como foto, 4,0 s, nos 74,96 %. Não mexi na régua.

## As 2 conferências novas

1. **s16 b1: o mapa de anomalia da NOAA, de 157,6 a 161,867 s (4,27 s). Aprovado.**
   - A janela começa em "and the cold water" e vai até "The sea warms, and".
   - Olhei de novo. A língua vermelha, de +3 a +5 °C, encostada na costa do Peru em JUN, JUL e AUG é, no próprio quadro, "The sea warms".
     O azul que some junto à costa é o "slows or stops rising".
   - A imagem parada fica agora 4,27 s na tela; antes eram 6,5 s.
   - A licença foi relida na API do Commons: domínio público, NOAA.
   - Para quem monta, do veredito anterior:
     - nada do logo da NOAA nem da escala em °C sem o °F;
     - "aligned to the coast" vai até 1,4× o arquivo. Um painel tem uns 930 px, então uns 1.300 px na tela.
   - O "In El Niño years… ease," fica no mapa do b0.
2. **s51 b1: o reuso declarado da Caral frontal, de 657,9 a 663,6 s. Aprovado, com o aviso "Photo from 2022" (`aviso_de_ano: true`).**
   - O reuso está declarado no espelho (s51 › `_reuso_declarado`), e a aparição vem 420,6 s depois da s22.
   - A fala é "about 5,000 years ago, people built a city above one of them": fala da construção, e a foto é de 27/11/2022. É o mesmo
     prédio, com a data na origem, e não existe foto do ano do fato. Pela identidade §6, a foto de outro ano de um prédio leva o aviso.
   - O quadro não desmente a fala: é a ruína do que foi construído.
   - **A regência não põe o aviso no s51 b1.** O `redator-de-tela` o escreve a partir deste veredito, junto da miniatura e fora da faixa do
     crédito. Sem o aviso, a miniatura não vai à cena.
   - Na miniatura, o recorte fica na pirâmide, porque o terço de baixo da foto é areia.
   - Na s22 b1, a fala está no presente e o aviso não entra. Mas a legenda "CARAL · c. 3000–1800 BC" do b0 não pode ficar sobre a foto:
     com a data do fato sobre ela, a foto pediria o aviso.

## Fora desta tarefa, de propósito

Os dois são fallback da caça. A Sala pediu que fiquem para depois da caça, e só se ela não trouxer o clipe. Até lá, nenhum dos dois
arquivos entra nessas janelas. Os dois continuam aprovados só na cena em que foram julgados, com a janela provisória.
- **s15 b0:** a reserva MODIS de 2015, aprovada na s13.
- **s22 b0:** a reserva de Caral, em 225,5–233,033 s.

A p. 9 de Cobo continua aprovada, com janela provisória e sem uso na regência. A página é opcional, e a decisão é do redator.

## Para o Lucas pesar

Nada.

## Para reconferir no navegador do app

Nada novo.

## Para trocar

Nada novo. O aviso do conjunto, para a Sala, o `regente-de-imagem` e o `redator-de-tela`: a s51 b1 precisa do "Photo from 2022" junto da
miniatura de Caral.

## Divergências entre a marca e o ofício

Nenhuma.

O olhar não foi de olhos novos: a regência e os vereditos anteriores foram lidos antes, e o `o_que_viu` diz isso.

## Contas desta tarefa

- **Imagens abertas: 5 de 25.** As 5 são cópias a 1600 px dos arquivos entregues, em `out/peru-agua/_tmp/conferencia/pesquisa-3/`: a
  NOAA, a Caral frontal, as duas de Cantalloc e a lagoa da s52.
- **Rede: 2 pedidos à API do Commons**, pelo `Bash`, com o User-Agent do canal, um por vez, com 2 s de pausa. Os dois responderam 200: a
  NOAA e a Caral frontal. Nenhum `WebFetch` e nenhuma busca nova.
- **A emenda do JSON** foi feita pelo `python`, porque o arquivo tem 147 KB.
  - O script está em `out/peru-agua/_tmp/conferencia/pesquisa-3/emenda.py`.
  - Antes de gravar, ele conferiu o sha256 do JSON e o da regência, e que o arquivo que a regência cita casa com cada veredito.
  - As cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-pesquisa-3.json` (sha256 `b375878d…`) e em
    `.antes-pesquisa-3.md`.
- **Checagem 6:** `out/peru-agua/_media/` não mudou. O sha256 dos 145 arquivos, antes e depois, está em
  `out/peru-agua/_tmp/conferencia/_media-antes-pesquisa-3.txt` e `_media-depois-pesquisa-3.txt`, e o `diff` saiu vazio.

---

# Histórico: a conferência até a tarefa `peru-agua-pesquisa-2`, como estava (Conferência de mídia: peru-agua, fluxo `midia`, 22/10/2026, lote 1 às 01:2x, lote 2 às 01:4x e tarefa `peru-agua-pesquisa-2` às 02:4x (Brasília))

Tarefas `peru-agua-pesquisa-1` (lotes 1 e 2) e `peru-agua-pesquisa-2` (os acertos da verificação do research, no passo `art_direction`).
O JSON está em `out/peru-agua/_pesquisa/conferencia-midia.json`.

**Laudo:** 17 aprovados de 23 conferidos (2 reprovados, 4 trocar, 0 pendente_lucas); 1 com algo não conferido; recebidos: 23.
- Lote 1: 9 aprovados de 11 (1 reprovado, 1 trocar).
- Lote 2: 7 aprovados de 11 (1 reprovado, 3 trocar, 0 pendente_lucas).
- Tarefa `peru-agua-pesquisa-2`: 1 arquivo novo, aprovado (o Landsat 5 de 1998, s16); 7 vereditos regravados, todos ainda aprovados, com
  os antigos em `substituidos` (s40; s06 e as duas da s25; Cobo p. 9, 10 e 14).
- Ficou fora da conferência, sem veredito: `_media/_caca/s26/acervo-livre/s26-jauja-panoramic-commons.jpg`. O próprio `pesquisa-imagens`
  o descartou (a Jauja de hoje numa fala de 1534, identidade §6) e não vai entregá-lo. Sem veredito, ele não vai à cena.

| id | cena | veredito | motivo |
|---|---|---|---|
| `_media/documento/cobo-1882-p9.jpg` | s27 | aprovado | p. 9 do Cobo de 1882 (o começo do auto de Jauja), domínio público lido no Commons, fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar"); cobre 'Their town council's record' na s27 (página opcional) |
| `_media/documento/cobo-1882-p10.jpg` | s27 | aprovado | p. 10 do Cobo de 1882, com o frio, a neve, a estrada e os carregadores mortos; domínio público lido no Commons; cobre os dois planos da s27; o Commons é fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar") |
| `_media/documento/cobo-1882-p14.jpg` | s28 | aprovado | p. 14 do Cobo de 1882, com a ordem de Pizarro ('comedio de tierra', 'poco trabajo', 'muy buen puerto'); domínio público lido no Commons; cobre o plano 2 da s28; o Commons é fonte aprovada pela resposta do Lucas de 07/10/2026, 12:03 ("Outra cópia, senão recriar") |
| `_media/pessoa/s26/francisco-pizarro-coutan-1835-commons.jpg` | s26 | aprovado | retrato pintado de Pizarro por Coutan (1835, Versailles), domínio público lido no Commons, 2900 px; card da s26 com 'Painting, 1835' |
| `_media/_caca/s06/acervo-livre/s06-puno-titicaca-bay-2015-commons.jpg` | s06 | aprovado | o Titicaca aberto visto de Puno (a origem nomeia Puno e o lago), CC BY-SA 4.0, 8593 px; miniatura do lago na s06 |
| `_media/_caca/s06/acervo-livre/s06-titicaca-totora-puno-2015-commons.jpg` | s06 | trocar | o quadro é um morro com um hotel atrás do juncal; o lago aberto não aparece, e a frase nomeia o Titicaca |
| `_media/_caca/s13/acervo-livre/s13-modis-low-clouds-peru-coast-2018-06-24.jpg` | s13 | aprovado | manta de nuvem baixa parando na costa do Peru (MODIS/Terra, 20/06/2018), domínio público da NASA; cobre 'a blanket of low cloud' na s13 |
| `_media/_caca/s13/acervo-livre/s13-modis-low-clouds-peru-coast-2015-06-18.jpg` | s13 | aprovado | a nuvem baixa ao longo de toda a costa do Peru (MODIS, junho de 2015), domínio público da NASA; reserva para 'a blanket of low cloud' na s13 |
| `_media/_caca/s16/acervo-livre/s16-noaa-avhrr-sst-anomalies-mar-aug-1997.jpg` | s16 | aprovado | anomalia de TSM da NOAA, mar.–ago. de 1997, o mar esquentando junto ao Peru; domínio público; cobre o plano 1 da s16 (sem o logo da NOAA) |
| `_media/_caca/s16/acervo-livre/s16-jpl-ssta-1997-12-26.png` | s16 | reprovado | a origem credita o JPL (Caltech, contratado), não é obra federal; a licença do JPL não está conferida para este item do SVS |
| `_media/base/s16/landsat5-1998-06-03-piura-sechura.png` | s16 | aprovado | Landsat 5 de 03/06/1998 (USGS, domínio público): o deserto do norte com água na depressão de Sechura, no mesmo El Niño de 1997–98; cobre o plano 2 da s16 com 'JUNE 1998' na tela, e nunca 'Piura alagada' |
| `_media/_caca/s18/acervo-livre/s18-satipo-aerial-2018-commons.jpg` | s18 | aprovado | Satipo no vale verde sob nuvens (a origem nomeia Satipo), CC BY-SA 4.0; miniatura junto ao nome na s18 |
| `_media/_caca/s22/acervo-livre/s22-caral-piramide-mayor-frontal-2022-commons.jpg` | s22 | aprovado | a Pirámide Mayor de Caral de frente, CC BY-SA 4.0, 4032 px; cobre "UNESCO calls it" (plano 2 da s22) |
| `_media/_caca/s22/acervo-livre/s22-caral-piramide-mayor-2022-commons.jpg` | s22 | aprovado | a Pirámide Mayor de Caral (GPS no sítio), CC BY-SA 4.0, 3264 px; reserva da pauta para o plano 2 da s22 |
| `_media/_caca/s25/acervo-livre/s25-cantalloc-puquio-spiral-2015-commons.jpg` | s25 | aprovado | um puquio de Cantalloc (a espiral), Diego Delso, CC BY-SA 4.0, 8688 px; cobre "underground channels called puquios" (plano 2 da s25) |
| `_media/_caca/s25/acervo-livre/s25-cantalloc-puquio-well-2015-commons.jpg` | s25 | aprovado | a água no fundo de um puquio de Cantalloc, Diego Delso, CC BY-SA 4.0; a 2ª foto do plano 2 da s25 ("carry water") |
| `_media/_caca/s26/acervo-livre/s26-mantaro-valley-from-concepcion-2024-commons.jpg` | s26 | trocar | a origem não nomeia Jauja, e a cidade de hoje domina o quadro numa fala de 1534 (identidade §6) |
| `_media/_caca/s36/acervo-livre/s36-lima-pueblo-joven-1997-commons.jpg` | s36 | aprovado | barriada de Lima em abril de 1997, CC BY 2.5; impressa sobre a mesa (até 1,4×), com "Photo from 1997"; cobre "Peruvians call them barriadas" |
| `_media/_caca/s36/acervo-livre/s36-lima-pueblo-joven-ancon-2004-commons.jpg` | s36 | reprovado | o domínio público foi declarado por quem enviou (Altiplano), e o autor é Maurice Chédel: a licença não está provada; e a de 1997 está mais perto de 1981 |
| `_media/_caca/s40/acervo-livre/s40-santa-eulalia-river-2021-commons.jpg` | s40 | aprovado | o rio Santa Eulalia nomeado na origem, CC BY-SA 4.0 dada pelo autor (Txolo liga 'Johnattan Rupire' à conta dele), 4000 px; miniatura junto ao nome (plano 2 da s40) |
| `_media/_caca/s40/acervo-livre/s40-santa-eulalia-valley-2010-commons.jpg` | s40 | trocar | o rio Santa Eulalia não aparece: é o vale verde com a encosta seca |
| `_media/_caca/s52/acervo-livre/s52-laguna-marcapomacocha-2018-commons.jpg` | s52 | aprovado | a Laguna Marcapomacocha nomeada na origem, CC BY-SA 4.0, 4056 px; cobre "its high lakes" (plano 1 da s52), como foto parada |
| `_media/_caca/s52/acervo-livre/s52-laguna-en-marcapomacocha-2025-commons.jpg` | s52 | trocar | a origem nomeia só o distrito, "Laguna en Marcapomacocha", não a lagoa do sistema que a decisão do Lucas pede |

**Os créditos na tela** vão no `credito_na_tela` de cada veredito, no formato `<autor> / Wikimedia Commons · <licença>`:
- **Diego Delso, desde a tarefa `peru-agua-pesquisa-2`:** `Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0` (s06 e as duas
  da s25);
- JOSE MORALES CIENCIA POLITICA UNMSM, Soto Caldaa Cesar, Johnattan Rupire, Mr AndrewHolmes e Sichuancay, com CC BY-SA 4.0;
- Håkan Svensson, com CC BY 2.5;
- sem crédito na tela: NASA, NOAA, o Landsat/USGS, o Pizarro de 1835 e o Cobo de 1882 (domínio público).

## Tarefa `peru-agua-pesquisa-2` (22/10/2026, 02:3x–02:4x): o que mudou

As decisões da Sala estão em `out/peru-agua/_tmp/verificar-research/consolidado.json` (`decisoes_da_sala`). Aqui ficam registradas, não
rediscutidas.

### 1. s40, o rio Santa Eulalia de 2021: continua aprovado, agora com a prova do autor

Pela API do MediaWiki, em 5 pedidos, um por vez:
- **Río Santa Eulalia.jpg.** Enviado por Txolo em 03/10/2021, às 21:42 UTC, com o comentário "Uploaded using [[COM:MOA|Commons Mobile
  App]]". O texto do arquivo traz `{{own}}`, `|author=[[User:Johnattan Rupire|Johnattan Rupire]]` e `{{self|cc-by-sa-4.0}}`.
- **Frutillada cusqueña.jpg** (02/10/2021) e **Iglesia Matriz del Callao 2.jpg** (05/10/2021). Os dois foram enviados por Txolo pelo
  mesmo app, na mesma versão (Android 3.1.1), com o mesmo autor e a mesma licença.
- **A prova mais forte, a mais do que a Sala citou.** Na Iglesia Matriz, 13 minutos depois de enviar (07:45:33 UTC), **o próprio Txolo
  trocou o link do autor** para `[[User:Txolo|Johnattan Rupire]]`. As revisões de 07:36 e 07:38 ainda tinham o link antigo. O dono
  da conta liga o nome "Johnattan Rupire" à conta dele: é o nome de autor que ele escolheu no app, não um terceiro. A licença
  `{{self}}` foi dada pelo próprio autor.
- **Por que não é o caso da reserva de 2004 da s36.** Lá, o autor e a fonte eram "Maurice Chédel", sem "Own work", e quem enviou
  (Altiplano) declarou o domínio público por outra pessoa. Aqui há `{{own}}` e `{{self}}`, e quem enviou se diz o autor.
- **O crédito não muda:** `Johnattan Rupire / Wikimedia Commons · CC BY-SA 4.0`. Base: midia §7.3.

### 2. Diego Delso: o crédito que ele pede (s06 e as duas da s25)

- O `credito_na_tela` passa a `Diego Delso, delso.photo / Wikimedia Commons · CC BY-SA 4.0`.
- **Por quê:** o modelo `{{User:Poco a poco/credit}}` pede "Diego Delso, delso.photo, License CC BY-SA" ao lado da imagem. Reli o
  modelo pela API, na revisão de 26/10/2024. A CC BY-SA 4.0, §3(a)(1)(A)(i), manda dar o crédito do jeito que o autor pede.
- O aviso por e-mail que o modelo pede é cortesia, não condição.

### 3. Cobo, p. 9 e p. 10 (s27) e p. 14 (s28): o motivo cita a resposta do Lucas

- **A resposta:** em Los Angeles, em 07/10/2026, às 12:03, o Lucas respondeu "Outra cópia, senão recriar (Recomendado)". A opção dizia:
  "Os pesquisadores procuram a mesma página numa fonte aprovada (Commons, governo). O que não aparecer, a cena recria". Lida em
  `out/los-angeles/_pesquisa/conferencia-midia.md`, "A resposta do Lucas aos 10 do Internet Archive"; o JSON de lá grava a hora
  `2026-10-07T12:03:00-03:00`.
- **O que ela quer dizer aqui:** por ela, o arquivo do Commons vem de fonte aprovada, mesmo nascido no Internet Archive. É o mesmo caso
  dos PDFs do Fæ que o conferente de Los Angeles aprovou depois dela.
- O `motivo` das três e o critério de licença agora citam essa resposta.

### 4. NOVO: o Landsat 5 de 03/06/1998 para a s16, plano 2. Aprovado

- **O arquivo:** `_media/base/s16/landsat5-1998-06-03-piura-sechura.png`, 2840 × 4766, RGBA, sha256 `8fde207d…`. O veredito casa por
  esse sha256.
- **O que olhei:** a prévia, a máscara de água e três recortes do próprio arquivo (a depressão reduzida; Piura e a borda leste a 100 %).
  - O deserto do norte tem uma rede grande de água verde-oliva, lisa, na depressão a leste da península de Illescas, e uma lagoa escura
    no meio dela.
  - O rio leva água ao estuário, e há uma faixa verde atrás da praia do sul.
  - Piura aparece seca: a mancha cinza da cidade dos dois lados do rio, sem água parada.
- **O contexto passa:** é o registro real do mesmo El Niño de 1997–98 do plano 1, com a data e a pegada na origem. Ele cobre "the desert
  coast gets … floods, mostly in the north". A água está no quadro, e não há gente.
- **A licença passa:** é USGS, domínio público. A página de citação do EROS diz "may be used, transferred, or reproduced without copyright
  restriction". É uma base aceita da identidade §6.
  - Não leva crédito na tela. A linha da descrição está na procedência: "Landsat imagery courtesy of the U.S. Geological Survey".
  - Veio pelo Planetary Computer, sem conta, como a identidade manda, e o robots.txt dele não veta nada.
- **A técnica passa:** são 45 m Mercator por pixel. Com a área da água enchendo a altura do quadro 4K, sai a ~1,07×. O arquivo aguenta
  até 1,4×, com pelo menos ~1.540 px dele na altura (uns 69 km).
  - A nuvem cobre 1,18 % da terra, sem cobrir o miolo da água.
  - A janela do plano é de 5,27 s, abaixo dos 6 s.
- **A repetição passa:** o still da mesa é outro Landsat (Landsat 8, de 2022).
- **`lugar_na_origem`:** a origem não nomeia lugar por nome; dá a pegada em coordenadas (bbox −82,31 a −80,21 de longitude e −6,74 a
  −4,84 de latitude).

**O que a tela pode dizer:**
- "JUNE 1998": o ano na tela que o espelho pede. Não é aviso de foto de outro ano, e o `aviso_de_ano` fica `false`.
- O nome de um lugar só por camada geo com procedência, na coordenada dela. "Piura", do Natural Earth, vai no ponto da cidade, que está
  seco no quadro.

**O que a tela não pode dizer:**
- "Piura alagada", nem nada que ligue a cidade à água.
- Que toda a água é a enchente: parte pode ser lagoa permanente, e a faixa verde atrás da praia entra na máscara.
- O nome da lagoa ("La Niña").
- O tamanho dela: nem os ~145 km da Wikipedia nem os ~978 km² medidos, sem o verificador-de-fatos.
- "El Niño 1997–98" na tela, só com o verificador-de-fatos.

**Para quem monta** (o `mapista`; não é critério):
1. Enquadrar a depressão de Sechura e o estuário, não a cena inteira com o mar e a nuvem do sul. Em cor natural, a água sai verde-oliva e,
   de longe, pode passar por vegetação.
2. Realçar a água só a partir de uma camada medida, com procedência, nunca com contorno à mão. Seria a máscara do `pesquisa-geo` em
   `_media/geo/`, que é a pergunta 2 dele à Sala.
3. A borda leste da cena corta a água. Não emende o Landsat de 1998 sem costura no satélite de hoje da MapTiler: a água de 1998
   terminaria numa linha reta sobre o chão de outra data. A borda da imagem fica à vista, como recorte de 1998, ou o quadro fica
   dentro da faixa da cena.
4. O PNG tem 30,6 % de área transparente, fora da faixa da cena.

## Para o Lucas pesar

Nada.

## Para reconferir no navegador do app

Nada novo. Ficam os itens da tarefa anterior (abaixo): a reserva de 2004 da s36 e a do JPL da s16, só se a Sala as quiser.

## Para trocar

Nada novo nesta tarefa. Os recados da tarefa anterior (abaixo) continuam.

O aviso do conjunto da cena, para o `regente-de-imagem` e o `montador`:
- **s16** tem agora um `aprovado` por plano: a NOAA no plano 1 (6,5 s) e o Landsat no plano 2 (5,27 s).
- As duas são imagens paradas sobre um mapa que se move, e nenhum dos dois planos passa de 6 s.
- A mudança do plano 2 de "foto" para satélite já está no espelho (direcao-3).

## Divergências entre a marca e o ofício

Nenhuma. Três notas de método:
- **A régua de técnica do Landsat.** O §5.3 do ofício não tem linha para base de satélite usada como registro. Julguei a resolução contra o
  uso (até 1,4×, como a foto de época), e não pela regra "a maior versão da origem", que é de foto de página. A origem tem 30 m nativos,
  1,5 vez o arquivo, se um quadro mais perto pedir.
- **O User-Agent.** Os pedidos ao Commons e ao USGS saíram pelo `WebFetch`, a única ferramenta de rede do contrato §5. Ele não leva o
  User-Agent do canal.
- **O olhar.** Nenhum olhar foi de olhos novos: o pedido, o espelho e o relato foram lidos antes, e o `o_que_viu` diz isso.

## Contas desta tarefa

- **Imagens abertas: 5 de 25:**
  - a prévia do Landsat;
  - a máscara de água;
  - três recortes do arquivo, em `out/peru-agua/_tmp/conferencia/pesquisa-2/`: `s16-depressao.jpg`, reduzido, e `s16-piura-100.jpg` e
    `s16-borda-leste-100.jpg`, a 100 %.
- **WebFetch: 7 pedidos, um por vez, nenhum recusado:**
  - 6 à API do MediaWiki, todos da s40 e de Delso:
    - a s40;
    - a Frutillada e a Iglesia juntas;
    - a 1ª revisão da Iglesia;
    - a lista de revisões dela;
    - as três revisões de 07:36–07:45;
    - o modelo de Delso;
  - 1 à página de citação do USGS EROS.
- **A emenda do JSON** foi feita pelo `python`, porque o arquivo tem mais de 95 KB.
  - O script, com o veredito novo ao lado, está em `out/peru-agua/_tmp/conferencia/pesquisa-2/`: `emenda.py` e `landsat-s16.json`.
  - Ele conferiu o sha256 do JSON antes de gravar, e também que o sha256 de cada um dos 7 arquivos regravados continua o do veredito.
  - As cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-pesquisa-2.json` (sha256 `2968601e…`) e em
    `.antes-pesquisa-2.md`.
  - Os 7 vereditos antigos estão em `substituidos`, com `substituido_em`.
- **Checagem 6:** `out/peru-agua/_media/` não mudou.
  - O sha256 dos 144 arquivos, antes e depois, está em `out/peru-agua/_tmp/conferencia/_media-antes-pesquisa-2.txt` e
    `_media-depois-pesquisa-2.txt`, e o `diff` saiu vazio.
  - As listas dos lotes anteriores ficaram como estavam.

---

# Histórico: a tarefa `peru-agua-pesquisa-1` (lotes 1 e 2), como estava

O aviso do ano: no lote 2, só a barriada da s36 leva aviso (`Photo from 1997`; a fala é de 1981). As outras fotos aprovadas cobrem falas
no presente (Caral, os puquios, o Santa Eulalia, a lagoa) e vão sem aviso (`aviso_de_ano: false`).

## Os pontos da Sala, um por um

- **s52, a lagoa nomeada.** A **Laguna Marcapomacocha de 2018 passa**. A origem a nomeia ("Laguna Marcapomacocha en el departamento de
  Junín, Perú"), e a câmera está em 11° 24′ S, 76° 20′ W. O rótulo pode dizer "Laguna Marcapomacocha", e nunca "uma das 19 lagoas".
  - **A reserva de 2025 vai a `trocar`.** A origem diz "Laguna en Marcapomacocha. Foto 2025.": é uma lagoa do distrito, sem dizer
    qual, e não tem coordenada. A linha das montanhas parece a da foto de 2018, mas o olho não nomeia lugar (midia §2.7).
  - Se a Sala quiser, a pergunta ao Lucas é: "Uma foto do Commons diz só 'Laguna en Marcapomacocha' (o distrito), sem nomear a lagoa,
    e as montanhas parecem as da Laguna Marcapomacocha. Ela entra na s52 como 'Marcapomacocha', ou fica só a foto que nomeia a lagoa?"
    Com o "sim" dele, ela volta a mim com a mensagem literal.
  - Nota para a pauta: os "tubos de condução" que a pauta descreve no primeiro plano da foto de 2018 são troncos de madeira deitados no
    capim, e não tubulação. O rótulo e a fala não dependem disso.
- **s26, o vale do Mantaro de Concepción.** O veredito é **trocar**.
  - A miniatura junto ao nome "Jauja" diria que a foto é Jauja, e a origem só nomeia o vale do Mantaro visto de Concepción (midia §2.7).
  - A cidade de hoje, com galpões e ruas, domina o primeiro plano numa fala de 1534. O aviso do ano não conserta uma foto que desminta a
    fala (identidade §6).
  - Pela marca, a saída é a miniatura não entrar: ela já estava "se couber" (diretor-de-arte), e o verificador sugeria tirá-la. A
    pergunta do relato ("Tirar a miniatura?") não precisa ir ao Lucas por esta foto.
- **s36, a barriada.** A foto de **1997 passa**, com o aviso "Photo from 1997".
  - A licença foi lida na página: licença tripla, e o canal fica com a CC BY 2.5.
  - A data também: "April 1997".
  - A busca pela foto de 1981 passou pelo Commons e pela NARA (`_pesquisa/tentativas-midia.jsonl`).
  - É foto média (1788 px): vai "impressa sobre a mesa, até 1,4×".
  - Os painéis pintados no morro (letras vermelhas, quase todos ilegíveis) não se leem no tamanho de tela.
  - **A reserva de 2004 foi reprovada.** Quem declarou o domínio público foi o usuário que enviou (Altiplano), e o autor e a fonte são
    "Maurice Chédel", sem "Own work". Além disso, a de 1997 está mais perto de 1981.
- **s22, Caral:** as duas fotos da Pirámide Mayor passam. A preferida tem, na página, a localização de câmera em Lima. É o GPS do iPad,
  e o próprio prédio a desmente: é o mesmo da outra foto, do mesmo dia, com GPS no sítio. O rótulo segue o texto da origem, Caral.
- **s25, os puquios:** a espiral e a água no fundo passam, as duas de Diego Delso. Os dois arquivos têm 50 MP, e o `entregar` reduz
  abaixo de 40 MP.
- **s40, o Santa Eulalia:** o rio de 2021 passa. A reserva de 2010 vai a `trocar`, porque mostra o vale, não o rio.
- **Pessoa e violência:** nenhum dos 11 arquivos tem gente reconhecível nem violência. Na água do puquio, há o vulto do reflexo de quem
  fotografa, sem rosto.
- **As fontes peruanas:** nenhum dos 11 arquivos vem da Andina, do gob.pe nem da SEDAPAL. Todos são "Own work" de pessoa física no
  Commons, menos a reserva do Santa Eulalia, que veio do Panoramio, com a licença revisada pelo robô do Commons. A UNMSM aparece só no
  nome de um usuário.
- **A foto pequena:** nenhuma foto do lote está abaixo de 1.600 px de largura. A regra "A foto pequena preenche a lacuna" não foi usada.

## Para o Lucas pesar (tarefa 1)

Nada no lote 2. A única pergunta possível é a da reserva da s52, acima, e ela só vai ao Lucas se a Sala a quiser.

## Para reconferir no navegador do app (tarefa 1)

- **s36, a reserva de 2004**, só se a Sala a quiser (a de 1997 está aprovada). Página: https://commons.wikimedia.org/wiki/File:Pueblo_joven_%28Lima%29.JPG.
  O que falta conferir: se o usuário Altiplano, que liberou o arquivo, é Maurice Chédel (pela página do usuário no Commons ou por um
  ticket VRT). O Commons não recusou leitura: é só uma página que não é a de origem do item, e por isso ficou fora desta conferência.
- Do lote 1: a reserva da s16, nas mesmas condições de lá.

## Para trocar (tarefa 1)

Do lote 2, tudo ao `pesquisa-imagens`:
- **s26:** a miniatura de Jauja sai. Busca, se a Direção quiser mesmo uma: `Jauja, Mantaro Valley, Peru, photograph naming Jauja,
  without the modern town`. O caminho mais simples é ficar sem miniatura (a Sala decidiu assim em 22/10/2026).
- **s40**, a reserva: `Santa Eulalia River, Huarochirí, Peru, photograph with the river water in frame`. A preferida, aprovada, já
  cobre o plano. A reserva serviria na **s23** ("their valleys run as strips of green"), com conferência nova, se o montador quiser.
- **s52**, a reserva: `Antacoto or Huascacocha lagoon, Junín, Peru, photograph with the lake named in the item`.
- **s36**, a reserva reprovada: quando o `entregar` rodar, ela não vai para `_media/foto/`.

Do lote 1: s06 (a reserva do totora) e s16 (a reserva do JPL), como lá.

Os avisos do conjunto das cenas, para o `regente-de-imagem` e o `montador`:
- **s52, plano 1** (689,9–697,5 s, 7,57 s): no espelho é aéreo, e tem uma só foto aprovada, parada. A foto fica até 6 s (identidade
  §4.3), e o resto do plano vai ao satélite das lagoas (o caminho que a decisão do Lucas já dá) ou a movimento com propósito. É também
  janela de 6 s ou mais sem nenhum `aprovado` com movimento, onde caberia respiro.
- **s40, plano 2** (7,07 s): a miniatura do Santa Eulalia fica sobre o mapa com relevo, que se move. A janela do plano não é tempo
  de foto em tela cheia.
- **s25, plano 2** (4,13 s): as duas fotos de Delso dividem o plano, 2,07 s cada, acima do piso de 1,5 s.
- **s22, plano 2** (4,23 s) e **s36, plano 2** (2,53 s): uma foto cada, dentro dos 6 s.
- **s26, plano 2:** sem miniatura aprovada; só o nome de Jauja no mapa.
- Para quem monta (não é critério):
  - na foto da barriada (s36), a bandeira do Peru e os painéis pintados do morro ficam pequenos;
  - no rio de 2021 (s40), a placa e o prédio branco da borda esquerda saem no recorte da miniatura.

## Notas de método e contas (tarefa 1)

- O despacho mandou ler a pauta e o relato antes de olhar, para achar a cena e o plano. Por isso, nenhum olhar foi de olhos novos, e
  cada `o_que_viu` diz isso.
- Neste lote, o que vi divergiu da pauta em dois pontos: os "tubos" da s52 são troncos de madeira, e a reserva do Santa Eulalia não
  mostra o rio.
- **Imagens abertas no lote 2: 12 de 25.** Onze cópias reduzidas, uma por arquivo, e um recorte do morro da s36 de 1997, todas em
  `out/peru-agua/_tmp/conferencia/olhar/` (prefixo `l2-`).
- **WebFetch no lote 2: 11 pedidos**, um por vez, todos lidos sem recusa: a página do Commons de cada um dos 11 arquivos.
- **A emenda do JSON do lote 2** está em `out/peru-agua/_tmp/conferencia/lote2/emenda.py`, com a cópia de antes em
  `out/peru-agua/_tmp/conferencia/conferencia-midia.antes-lote2.json`.
- **Checagem 6 dos lotes 1 e 2:** `_media-antes.txt` e `_media-depois.txt`, `_media-antes-lote2.txt` e `_media-depois-lote2.txt`, com o
  `diff` vazio.
