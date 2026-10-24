# Vídeo 4: a descrição do YouTube (rascunho de 24/10/2026)

Título do vídeo: **"Why Peru Lives on the Dry Side of the Andes"** (43 caracteres; Lucas, 19/10/2026, à pergunta "Qual título fica para o
vídeo do Peru?": "O de trabalho"; `roteiros/peru-agua/decisoes-lucas.md`, "O título final").

**Conferências:** o `verificador-de-fatos`, em 24/10/2026: 74 de 74 afirmações com veredito, nenhuma errada, nota 9,5 (PASS); as duas notas leves de texto (a atribuição da frase de 2012 ao plano nacional e o "extended 1991" de Lima) foram aplicadas, e a do "2%" do título alternativo fica com o Lucas. Os créditos e as licenças, o cético do redator conferiu contra o disco. O laudo:
`roteiros/peru-agua/qc-roteiro/fatos-descricao.laudo.md`. De onde saiu cada crédito, e o que não se confirmou no disco:
`out/peru-agua/_tmp/descricao/RELATO.md`.

Escrita no fechamento do vídeo, no formato da do vídeo 3 (`out/zona-do-canal/descricao-youtube.md`). O que entra e de onde veio:
- **a abertura** é texto novo, na voz do canal (`marca/voz.md`), e repete só o que o roteiro aprovado diz
  (`roteiros/peru-agua/roteiro-narrador.md`, o gancho e o p5). A 1ª linha é o ângulo da água de Lima, o que mais atraiu os leitores a frio
  (`out/peru-agua/_pesquisa/embalagem/leitor-1.md` e `leitor-3.md`: 1º clique no título da concorrência sobre a água de Lima). Ela paga o
  título (o lado seco: o deserto, a chuva de Lima) e termina na pergunta do gancho, sem dar a resposta (os vales, o porto, a migração), como
  pede `marca/embalagem.md` §2, "O título não entrega a resposta". Cada número leva a fonte e o ano que o vídeo mostra na tela:
  - "about a third of an inch of rain a year": SENAMHI, média de 1981–2010 (s03 e s17);
  - "more than ten million people", Lima com o Callao: INEI, censo de 2025 (s03);
  - "more than half of the water the city stores for the dry season", nos lagos do lado que drena para a Amazônia: SEDAPAL, 2007 (s04 e
    s39; o p5 do roteiro: "in the upper Mantaro basin, which drains toward the Amazon");
  - "about three-quarters of the country", "more than 97 percent", "about 2 percent" e "more than three in five" em 2012: ANA, Plano
    Nacional de Recursos Hídricos, dados de 2012 (s01);
  - "a single tunnel, built in the early 1960s": SENAMHI, 2016, e Defensoría del Pueblo, 2025 (s04). Sem "Lima drinks through a tunnel":
    só a água guardada para a seca atravessa (`embalagem/titulos.md`, "O que nenhum título diz");
- **os capítulos** são os `_capitulos` do `espelho.json`, cada um conferido contra a primeira palavra da parte no `words.json`, com o tempo
  arredondado para baixo (53,09 → 0:53; 122,26 → 2:02; 225,50 → 3:45; 322,35 → 5:22; 444,21 → 7:24; 542,74 → 9:02; 629,17 → 10:29). O
  primeiro em 0:00, 8 capítulos, o mais curto com 53 s (o gancho), o último com 94 s até o fim (723,8 s, 12:03,8; a fala acaba em 703,6 s
  e os 20 s finais são a tela final). O título do gancho é novo ("Peru's water divide", a assinatura do gancho: "this is where the story of
  Peru's water divide begins"); os outros são os do espelho, palavra por palavra;
- **a pergunta** é a `_pergunta_cta` do `textos-tela.json`, "Which side of the Andes would you live on?", palavra por palavra, na descrição e
  no comentário fixado (`marca/cta.md`);
- **as fontes** são as linhas "Source:"/"Sources:" que as cenas de hoje mostram (`out/peru-agua/graphics/*.html`), agrupadas por instituição;
- **as imagens**: as fotos e os documentos que as cenas citam, cada um casado pelo sha256 (ou pela URL do item, no footage) com um
  `aprovado` do `_pesquisa/conferencia-midia.json`. As sete fotos em CC BY-SA 4.0 e CC BY 2.5 vão com o autor, a licença e o link dela, como
  o `credito_na_tela`; as de domínio público vão como cortesia (a NASA, a NOAA, o USGS, a pintura de 1835, a carta de Frézier de 1717 e a
  edição de 1882 de Cobo);
- **o footage dos bancos pagos**: 10 clipes nas cenas (6 do Envato Elements, 3 do Motion Array e 1 da Storyblocks). Nenhum desses bancos pede crédito
  (`marca/midia.md` §3.1 a §3.3); a linha de cortesia vai só na versão completa. Nenhum clipe do Shutterstock (a volta de 22/10 não baixou
  nada; `_pesquisa/caca-relato.md`), então sem a linha "used under license from Shutterstock.com";
- **a geometria**: a divisória e as vertentes vêm do HydroBASINS v1 (WWF). A licença pede o texto do Exhibit B na descrição, e o Lucas
  aceitou a v1 assim (22/10/2026, 02:2x: "Aceito a v1 e eu baixo (Recomendado)"; o crédito "com o título do vídeo no lugar de 'This
  product'"). Aqui o texto segue o modelo do Exhibit B, que pede o nome no colchete depois de "This product" e de "incorporated within"
  (`marca/acervos/5-dados-e-fronteiras.md` §1.9). Os rios, as lagoas, o túnel e os bairros do OpenStreetMap entram na linha do OSM; o
  Natural Earth é domínio público, como cortesia;
- **os mapas** e **a música** são os blocos de `_creditos-mapa.md` (MapTiler e OSM, com a ODbL) e `_creditos-trilha.md` (Epidemic Sound,
  "<Artista> / <Música> / courtesy of Epidemic Sound" e o link). A música não passou por ferramenta nenhuma: só os créditos em texto.

**Pendente (antes de publicar):**
- **As conferências** acima (verificador-de-fatos e revisão de requisitos), e o "sim" do Lucas no chat da Sala.
- **Os links:** como no vídeo 3, vai primeiro a versão SEM LINKS. Ela traz o texto do Exhibit B do HydroBASINS, que termina num endereço
  ("www.hydrosheds.org"), sem "https://". Se o YouTube recusar a descrição por causa dele, a Sala decide com o Lucas; o texto da licença não
  sai. Quando o YouTube liberar os links, trocar pela versão completa.
- **Os tempos dos capítulos** se conferem no vídeo exportado: a montagem não muda o relógio (a vinheta, a inscrição e o comentário são
  chamadas na V3, por cima), mas um corte mudaria.
- **A categoria** (abaixo): o canal publicou os vídeos 2 e 3 em People & Blogs; Educação é decisão do Lucas.

## A versão SEM LINKS, a que vai agora (2.714 caracteres; a completa, 4.807, abaixo dos 5.000; a Sala pôs o endereço do Epidemic que a licença pede e as duas notas do verificador-de-fatos em 24/10)

Mais longa que a de 1.818 do vídeo 3, que o Lucas colou ("Tentar a de 1.818"): uns 900 caracteres são o texto do Exhibit B, obrigatório.
Se o campo recusar, a Sala corta com ele só o que não é obrigatório (a linha "Figures:", a de domínio público); crédito de licença nunca sai.

```text
Lima gets about a third of an inch of rain a year, yet with its port, Callao, it is home to more than ten million people. More than half of the water the city stores for the dry season sits in lakes high in the Andes, on the side that drains to the Amazon.

A line runs along the Andes and divides Peru. East of it, about three-quarters of the country drains toward the Amazon and holds more than 97 percent of Peru's water. West of it, on the Pacific side, is about 2 percent. Yet by the national water plan's 2012 figures, more than three in five Peruvians lived on that dry side. So why do most Peruvians live there?

Figures: SENAMHI, Peru's weather service (1981–2010 average); INEI, 2025 census; SEDAPAL, Lima's water utility (2007); ANA, Peru's water authority, National Water Resources Plan (2012 data).

Which side of the Andes would you live on? Answer in the comments.

0:00 Peru's water divide
0:53 The line down the Andes
2:02 Why the dry side is dry
3:45 Valleys and a port
5:22 Down from the mountains
7:24 Across the line
9:02 Where the pipes end
10:29 One way through

Sources are shown on screen.
Photos via Wikimedia Commons (may have been cropped or resized for the video): Diego Delso, delso.photo (CC BY-SA 4.0); Mr AndrewHolmes (CC BY-SA 4.0); JOSE MORALES CIENCIA POLITICA UNMSM (CC BY-SA 4.0); Håkan Svensson (CC BY 2.5); Johnattan Rupire (CC BY-SA 4.0); Isabel Mamani (CC BY-SA 4.0); Sichuancay (CC BY-SA 4.0).
Public domain: NASA; NOAA; Landsat imagery courtesy of the U.S. Geological Survey; Natural Earth.
Maps: © MapTiler © OpenStreetMap contributors (data under the Open Database License)
This product, "Why Peru Lives on the Dry Side of the Andes", incorporates data from the HydroSHEDS version 1 database which is © World Wildlife Fund, Inc. (2006-2022) and has been used herein under license. WWF has not evaluated the data as altered and incorporated within "Why Peru Lives on the Dry Side of the Andes", and therefore gives no warranty regarding its accuracy, completeness, currency or suitability for any particular purpose. Portions of the HydroSHEDS v1 database incorporate data which are the intellectual property rights of © USGS (2006-2008), NASA (2000-2005), ESRI (1992-1998), CIAT (2004-2006), UNEP-WCMC (1993), WWF (2004), Commonwealth of Australia (2007), and Her Royal Majesty and the British Crown and are used under license. The HydroSHEDS v1 database and more information are available at www.hydrosheds.org.

Music:
Elin Piel / Hazy Particles / courtesy of Epidemic Sound
Ooyy / Retrouvailles / courtesy of Epidemic Sound
Rand Aldo / Lullaby Beach / courtesy of Epidemic Sound
Sight of Wonders / Butterfly Traces / courtesy of Epidemic Sound
www.epidemicsound.com
```

## O comentário fixado

A pergunta, palavra por palavra (`textos-tela.json` › `_pergunta_cta`; `marca/cta.md`):

```text
Which side of the Andes would you live on?
```

## A versão completa, com links (para quando o YouTube liberar)

```text
Lima gets about a third of an inch of rain a year, yet with its port, Callao, it is home to more than ten million people. More than half of the water the city stores for the dry season sits in lakes high in the Andes, on the side that drains to the Amazon.

A line runs along the Andes and divides Peru. East of it, about three-quarters of the country drains toward the Amazon and holds more than 97 percent of Peru's water. West of it, on the Pacific side, is about 2 percent. Yet by the national water plan's 2012 figures, more than three in five Peruvians lived on that dry side. So why do most Peruvians live there?

Figures: SENAMHI, Peru's weather service (1981–2010 average); INEI, 2025 census; SEDAPAL, Lima's water utility (2007); ANA, Peru's water authority, National Water Resources Plan (2012 data).

Which side of the Andes would you live on? Answer in the comments.

Chapters:
0:00 Peru's water divide
0:53 The line down the Andes
2:02 Why the dry side is dry
3:45 Valleys and a port
5:22 Down from the mountains
7:24 Across the line
9:02 Where the pipes end
10:29 One way through

Sources:
ANA (Peru), National Water Resources Plan (2012 data); ANA, 2009 and 2014
SENAMHI (Peru), 2016 and 2021; 1981–2010 averages
WMO / SENAMHI, 1991–2020 averages
INEI (Peru): censuses 1940–2025; 2017 census profile; 2022 GDP estimate; 1995 study; 1996, cited by the CVR
Peru's Truth and Reconciliation Commission (CVR), 2003
Defensoría del Pueblo (Peru), 2025
SEDAPAL, 2007; SEDAPAL, 2019, cited by the Defensoría del Pueblo (2025); SEDAPAL via ProActivo, February 2021; SEDAPAL interview reported by Infobae, September 2024; SEDAPAL to AFP, March 2025
Sunass, Peru's water and sanitation regulator, 2025 study (via Gestión, March 2026)
Gestión, Aug. 30, 2026
MINAM (Peru), 2019
JICA, 2002
UNESCO World Heritage List: Chan Chan (1986), Historic Centre of Lima (1988; extended 1991), Caral (2009)
Harvard Growth Lab, 2023
Lasaponara & Masini, 2012
Bernabé Cobo, 1639 (1882 ed.), with the Jauja town council record of November 1534
Medina García, PUCP, 1982
AFP, March 2025
Kulturaustausch (ifa), January 2024
Distances measured by Alpha Point (straight line)

Photos (Wikimedia Commons; images may have been cropped or resized for the video):
"Vista de Puno y el Titicaca, Perú, 2015-08-01, DD 63" and "Acueductos subterráneos de Cantalloc, Nazca, Perú, 2015-07-29, DD 01" and "DD 04", by Diego Delso, delso.photo, CC BY-SA 4.0
"Satipo Aerial", by Mr AndrewHolmes, CC BY-SA 4.0
"Vista frontal de la imponente Pirámide Mayor de la Ciudad Sagrada de Caral", by JOSE MORALES CIENCIA POLITICA UNMSM, CC BY-SA 4.0
"Lima PuebloJov 4", by Håkan Svensson, CC BY 2.5 (https://creativecommons.org/licenses/by/2.5/)
"Río Santa Eulalia", by Johnattan Rupire, CC BY-SA 4.0
"IMG SJM 02", by Isabel Mamani, CC BY-SA 4.0
"Laguna Marcapomacocha", by Sichuancay, CC BY-SA 4.0
CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/

Public domain, via Wikimedia Commons: NASA (MODIS, Jeff Schmaltz, MODIS Land Rapid Response Team, NASA GSFC); NOAA; Amable-Paul Coutan, portrait of Francisco Pizarro (1835); Amédée François Frézier, chart of the bay of Callao (1717), John Carter Brown Library; Bernabé Cobo, Historia de la fundación de Lima (Lima, 1882).
Satellite imagery: Landsat Collection 2 Level-2 (Landsat 8, 2022; Landsat 5, June 3, 1998). Landsat imagery courtesy of the U.S. Geological Survey.
Country and region outlines, rivers and cities: Natural Earth (public domain).
Stock footage: Envato Elements, Motion Array, Storyblocks.

Maps: © MapTiler (https://www.maptiler.com/copyright/) · © OpenStreetMap contributors, data under the Open Database License (https://www.openstreetmap.org/copyright)

This product, "Why Peru Lives on the Dry Side of the Andes", incorporates data from the HydroSHEDS version 1 database which is © World Wildlife Fund, Inc. (2006-2022) and has been used herein under license. WWF has not evaluated the data as altered and incorporated within "Why Peru Lives on the Dry Side of the Andes", and therefore gives no warranty regarding its accuracy, completeness, currency or suitability for any particular purpose. Portions of the HydroSHEDS v1 database incorporate data which are the intellectual property rights of © USGS (2006-2008), NASA (2000-2005), ESRI (1992-1998), CIAT (2004-2006), UNEP-WCMC (1993), WWF (2004), Commonwealth of Australia (2007), and Her Royal Majesty and the British Crown and are used under license. The HydroSHEDS v1 database and more information are available at https://www.hydrosheds.org.

Music:
Elin Piel / Hazy Particles / courtesy of Epidemic Sound
Ooyy / Retrouvailles / courtesy of Epidemic Sound
Rand Aldo / Lullaby Beach / courtesy of Epidemic Sound
Sight of Wonders / Butterfly Traces / courtesy of Epidemic Sound
https://www.epidemicsound.com
```

## O título e as alternativas para o Test & Compare

O título é o do Lucas; as duas alternativas vão ao teste do YouTube (Test & Compare, até 3 títulos) só com o "sim" dele. Cada uma passa pela
`marca/embalagem.md` §2: o núcleo se paga nas 3 primeiras frases da voz (o paradoxo inteiro fecha na F4, aos 16,9 s;
`embalagem/titulos.md`, "A régua de todos"), nomeia o que o público conhece (o Peru, os Andes), não entrega a resposta (os vales, o porto,
a migração), sem "two-thirds", "desert", "never rains" nem "tunnel", e com no máximo 65 caracteres.

| | Título | Caracteres | Onde se paga | Por quê |
|---|---|---|---|---|
| **escolhido** | Why Peru Lives on the Dry Side of the Andes | 43 | F3–F4 (16,9 s); a última frase do vídeo o devolve | o do Lucas (19/10) |
| **alternativa A** | Why Most Peruvians Live on the Dry Side of the Andes | 52 | F4, palavra por palavra ("that is where most Peruvians live"), e a F11 é ele em pergunta | o finalista A do teste: de pé no cético, 1º clique do leitor britânico, 3º dos outros dois; tem o "Most" que falta ao escolhido |
| **alternativa B** | Most Peruvians Live Where Peru Has 2% of Its Water | 50 | F3 ("with about 2 percent") e F4 (16,9 s) | o número que dois de três leitores apontaram como o gancho ("o '2%' é o susto"), sem o "on the Side of the Andes" que os três acharam torto; não diz por quê |

Riscos que ficam: na B, o "2%" é o arredondamento de 1,76 % (PNRH, 2012) e a voz diz "about 2 percent" (o cético aceitou o arredondamento no
finalista B do teste); ela não nomeia os Andes. Nenhuma das duas passou por leitores a frio na forma exata (a A, sim; a B é nova).

## As tags

Separadas por vírgula, para colar no campo de tags do YouTube: 30 tags, 433 caracteres no texto, uns 458 pela conta do YouTube (que soma
as aspas das tags com espaço), abaixo dos 500. "Peru" é a primeira (a procura de `embalagem/demanda.md`).

```text
Peru, Peru geography, Lima Peru, Andes, Andes mountains, Peru water, why Peru, Lima desert, Lima water, continental divide, Pacific side, Amazon basin, Peru Amazon, Humboldt Current, El Niño, Rímac River, Caral, Chan Chan, Nazca puquios, Francisco Pizarro, founding of Lima, Peru migration, Villa El Salvador, Lima water supply, Andes tunnel, Peru history, South America geography, geography documentary, map documentary, Alpha Point
```

## A categoria e o idioma

Como nos vídeos 2 e 3 (`estudio/marcas/alpha-point/publicacao-youtube.json`, medido nos dois publicados em 21/10/2026):
- **Categoria:** People & Blogs (22). Educação (27) é decisão pendente do Lucas (as `_pendencias` do mesmo arquivo).
- **Idioma do vídeo e do áudio:** English (en).
- **Feito para crianças:** não. **Licença:** padrão do YouTube. **Incorporação:** permitida.
- **Conteúdo alterado ou sintético:** a narração é voz de IA (ElevenLabs); o arquivo marca `true` como a leitura conservadora, e o que o
  Lucas marca hoje no Studio não está registrado (pendência do mesmo arquivo).
