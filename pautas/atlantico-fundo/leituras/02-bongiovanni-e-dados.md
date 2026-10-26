# Leitura 2 · O Bongiovanni 2021 inteiro e os dados do sonar (pauta §9, item 2) · 26/10/2026

- **Quem leu:** um leitor da Sala (subagente), em 26/10/2026, das 15:52 às 16:2x (Brasília).
- **O que se leu:** o **texto inteiro** do artigo, 16 páginas, no PDF da editora depositado no NORA. Foi baixado pelo curl, com o
  User-Agent do canal, depois do `robots.txt` do NORA (que só veta `/cgi/`). O texto saiu pelo PyMuPDF
  (`midia/atlantico-fundo/fontes/_scripts/02-bongiovanni-texto.py`), e os links da pág. 1 por
  `02-bongiovanni-links.py`.
- **O arquivo:** `midia/atlantico-fundo/fontes/02-bongiovanni-2021-gdj3.122.pdf`, com 60.532.708 bytes e sha256
  `d59b4c65…dc3f4`. A linha está no `_PROCEDENCIA.md`.
- **A fonte, para todas as perguntas abaixo:** Cassandra Bongiovanni, Heather A. Stewart e Alan J. Jamieson, "High-resolution
  multibeam sonar bathymetry of the deepest place in each ocean", *Geoscience Data Journal* 9(1):108–123, DOI
  10.1002/gdj3.122. Recebido em 07/09/2020, aceito em 07/04/2021 e online em 05/05/2021. É acesso aberto, CC BY 4.0 (a
  linha está na pág. 1 do PDF). Registro no NORA: https://nora.nerc.ac.uk/id/eprint/530930/
- **Não se tentou** a Wiley, que deu 403 em 24/10. O PDF do NORA é o da própria editora: não fez falta.

---

## a) As coordenadas e a profundidade, com a margem

### 1. A resposta

A Tabela 1 (pág. 6) e as seções 3.1 e 3.2 (pág. 4) dão os pontos assim:

| O ponto | Latitude | Longitude | Pelo sonar (EM 124) | Pelo CTD do submersível |
|---|---|---|---|---|
| **Brownson Deep**, Fossa de Porto Rico ("North Atlantic") | **19.712°N** | **67.311°W** | **8,378 ± 5 m** | **8,376 ± 5 m** |
| **Meteor Deep**, Fossa das Sandwich do Sul ("South Atlantic") | **55.230°S** | **26.173°W** | **8,265 ± 13 m** | "N/A": não houve mergulho ali |
| **Factorian Deep**, que o artigo chama de "Unnamed Deep" ("Southern") | **60.479°S** | **25.542°W** | **7,432 ± 13 m** | **7,434 ± 3 m** |

A frase do artigo para o Brownson (pág. 4): "The deepest point was identified as 8,378 ± 5 m uncertainty at 19.712°N/67.311°W."

O que vem junto e muda a forma de dizer:
- **As margens do sonar são de 95 % de confiança.** Saem do estimador de incerteza do Qimera (o CUBE) sobre uma grade de **75 m**
  (§2.2, pág. 4).
- **A margem do submersível** é o desvio-padrão das leituras de profundidade dos CTDs: os dois do submersível, mais os dos
  landers que desceram ao mesmo ponto (§2.2).
- **O Meteor Deep, a posição.** O artigo dá **55.230°S, 26.173°W**. A checagem usou **55,323°S, 26,294°W**: **não confere**,
  porque são duas coisas diferentes.
  - O ponto da checagem é o do registro do gazetteer da GEBCO na Marine Regions (MRGID 63479, relido hoje pela API REST). É o
    ponto de referência do acidente, com uma caixa de 55,555° a 55,086°S e de 26,647° a 25,850°W.
  - O ponto do artigo é **a sondagem mais funda**, e cai dentro dessa caixa.
  - Entre os dois, **12,9 km (8,0 mi)**: conta minha (haversine).
  - Para o anel do "ponto mais fundo" no mapa, vale o do artigo.
- **As contas da checagem, refeitas com o ponto do artigo** (minhas):
  - do Meteor até a linha de 60°S, **530 km (330 mi)**, contra os 520 km (323 mi) da checagem;
  - do Brownson ao Meteor, **9.195 km (5.713 mi)**, contra 9.198 km (5.715 mi): dá o mesmo.
  - O Factorian fica **53 km (33 mi) ao sul de 60°S**.
- **O mergulho do Factorian** deu **7.434 ± 3 m**, segundo o artigo. É o número que o artigo dá ao submersível, e não o
  7.433,6 m do post da Five Deeps.
- **No Meteor, ninguém mergulhou:** a Tabela 1 dá "N/A" na coluna do submersível.
- **O nome "Factorian".** O artigo foi aceito em abril de 2021 e ainda chama o ponto de "an unnamed deep". O nome vem depois
  (a BGS, em 11/05/2021, fala de "the recently named Factorian Deep"). A origem do nome é o item 4, de outro leitor.
- **Dois erros de digitação na Conclusão** (pág. 14): "60.479°N" para o ponto do Oceano Austral e "2.706°S" para o Molloy. A
  Tabela 1 e a §3.2 dão 60.479°**S** e 2.706°**E**. Vale a Tabela.

### 2. A fonte

Bongiovanni, Stewart & Jamieson 2021 (acima), Tabela 1, §3.1, §3.2 e §2.2. **Texto inteiro**, lido em 26/10/2026. O registro da
Marine Regions (MRGID 63479) foi relido em 26/10/2026:
https://www.marineregions.org/rest/getGazetteerRecordByMRGID.json/63479/

### 3. O grau

- O Brownson, o Meteor e o Factorian, com a margem: **confirmado**, no texto inteiro e na tabela.
- A posição do Meteor que a checagem usou: **corrigida**. Não há disputa: a da Marine Regions é o ponto de referência do
  acidente, e a do artigo é o ponto mais fundo.

### 4. O que muda na pauta

- **§4, "O ponto mais fundo":** a coordenada sai do próprio artigo, e não só da BGS. Texto novo da coluna "De onde": "Bongiovanni
  et al. 2021, Tabela 1 e §3.1 (texto inteiro, 26/10/2026); a margem ± 5 m é de 95 % de confiança".
- **§4, "O mergulho":** acrescentar a margem que o artigo dá ao submersível: "8.376 **± 5** m (CTD do submersível, Bongiovanni
  Tabela 1)". O 27.480 ft e a data continuam como estão.
- **§4, "A outra candidata":** o texto novo:

  > o **Meteor Deep** (8.265 ± 13 m, a **55,230°S, 26,173°W**, ponto mais fundo pelo sonar; ninguém mergulhou ali) fica em
  > águas do Atlântico e é **113 m (371 ft) mais raso**. O **Factorian Deep** (7.432 ± 13 m a 60,479°S, 25,542°W; o submersível
  > deu 7.434 ± 3 m) é o mais fundo do Oceano Austral pela linha de 60°S, 33 mi ao sul dela. Fonte: Bongiovanni et al. 2021,
  > Tabela 1. O 55,323°S, 26,294°W da Marine Regions é o ponto do gazetteer, a 8 mi do mais fundo: não usar como "o ponto mais
  > fundo".

- **Para o roteiro** (camada 7): nada de "Vescovo mergulhou no Meteor Deep". Pelo artigo, ele não mergulhou ali.

---

## b) Onde estão os dados do sonar, a licença de cada conjunto e se o canal pode usá-los no mapa

### 1. A resposta

**Onde estão:**
- O artigo (pág. 1, quadro "Dataset") dá sete conjuntos, cada um com DOI próprio no prefixo 10.5285. É o prefixo do NERC: todos
  apontam para o **National Geoscience Data Centre (NGDC) da BGS**.
- O artigo também diz que todos os dados da Caladan foram entregues em outubro de 2020 ao **Seabed 2030**, pelo centro de dados
  de batimetria da IHO (IHO DCDB), brutos e processados. As **grades finais** estão no NGDC.
- As grades têm **75 m** de célula (§2.2).

Os dois que importam ao vídeo, lidos hoje na página do NGDC de cada um:

| | Porto Rico | Sandwich do Sul |
|---|---|---|
| Título | *Five Deeps Expedition to map the western Puerto Rico Trench (Atlantic Ocean)* | *Five Deeps Expedition to map the South Sandwich Trench (spanning the Atlantic and Southern oceans)* |
| DOI | https://doi.org/10.5285/7df163a1-30c6-40b6-844d-20fa0acffd18 | https://doi.org/10.5285/143e304e-b9d5-43bf-b323-f2ab517bc18b |
| Página | https://www2.bgs.ac.uk/nationalgeosciencedatacentre/citedData/catalogue/7df163a1-30c6-40b6-844d-20fa0acffd18.html | https://www2.bgs.ac.uk/nationalgeosciencedatacentre/citedData/catalogue/143e304e-b9d5-43bf-b323-f2ab517bc18b.html |
| Quem fez | Caladan Oceanic LLC | Caladan Oceanic LLC |
| Quem publica | British Geological Survey, em 26/02/2021 | British Geological Survey, em 26/02/2021 |
| O levantamento | 18 e 19/12/2018 | de 02 a 09/02/2019 |
| Formato | "Various" | "Various" |
| Licença | **Open Government Licence**, com link para a **versão 2** | a mesma |
| A linha de crédito exigida | a mesma (abaixo) | a mesma |
| Onde baixar | https://webapps.bgs.ac.uk/services/ngdc/accessions/index.html#item137749 | https://webapps.bgs.ac.uk/services/ngdc/accessions/index.html#item137750 |

A licença, nas duas páginas: o conjunto está na Open Government Licence, com uma linha de crédito que acompanha todo material
reproduzido: "Contains data supplied by permission of the Natural Environment Research Council [YEAR]".

**Um achado lateral, que confirma a pauta:** a página de Porto Rico dá o levantamento em **18 e 19/12/2018**. É a mesma data do
mergulho que a pauta dá (19/12/2018, pelo *Popular Science*). O artigo não dá a data do mergulho.

**O que não se conseguiu ler, e ficou parado ali, sem contorno:**
- **O texto da OGL v2** (http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/). O site dos National
  Archives mandou o `robots.txt` e as páginas para o arquivo web deles, que respondeu com uma página "Human Verification"
  (CAPTCHA da AWS WAF, HTTP 405). Parei ali. O canal também já tinha anotado que esse site declara `ai-input=no`
  (`marca/acervos/2-outros-governos.md` §2.1) e que o texto da OGL nunca foi conferido na origem.
- **O que a BGS diz da OGL**, na página dela (https://www.bgs.ac.uk/bgs-intellectual-property-rights/open-government-licence/,
  lida hoje): a licença deixa usar e reusar "freely and flexibly, with only a few conditions". Atenção: essa página fala da **v3**
  e dá outra linha de crédito ("Contains British Geological Survey materials © UKRI [year]"), que vale para o material da
  própria BGS. Para estes dois conjuntos vale a página de cada um: a v2 e a linha do NERC.
- **A lista de arquivos, o formato e o tamanho de cada conjunto.** A página "Onde baixar" monta a lista por JavaScript, com uma
  API em `webservices.bgs.ac.uk`. Essa API, e o registro de metadados `data.bgs.ac.uk/id/dataHolding/13607671`, responderam
  **HTTP 400 com um "supportID"**: é a recusa de um firewall de aplicação. Parei ali.
- **Se a GEBCO 2026 já tem esses dados** (pelo Seabed 2030). O artigo diz que foram entregues em 2020, mas não li prova de que
  entraram na grade. Uma busca na web não achou nada.

### 2. A fonte

- O artigo, pág. 1 (o quadro "Dataset" e os links, tirados das anotações do PDF), §2.2 e §2.3. Texto inteiro.
- As duas páginas do NGDC Cited Data Catalogue (BGS), lidas em 26/10/2026 pelos DOIs acima. Os DOIs resolvem nelas (302).
- A página de OGL da BGS, lida em 26/10/2026.
- O texto da OGL v2: **não lido**.

### 3. O grau

- **Confirmado:** onde estão os dados, os DOIs, quem os publica, a licença declarada (OGL, com link para a v2) e a linha de
  crédito.
- **Não conferido:**
  - o texto da OGL v2. A Sala abre no navegador do app:
    http://www.nationalarchives.gov.uk/doc/open-government-licence/version/2/ (e, se o site pedir verificação, para ali);
  - a lista e o formato dos arquivos: https://webapps.bgs.ac.uk/services/ngdc/accessions/index.html#item137749 e `#item137750`;
  - o "[YEAR]" da linha de crédito. A página não diz qual ano. O costume é o da publicação do conjunto (2021), mas isso não está
    escrito em lugar nenhum.

### 4. O que muda na pauta, e o veredito da licença

**O veredito: a licença deixa, a regra do canal ainda não.**

- **Pela licença:**
  - a OGL é a licença aberta de dados do governo britânico. A BGS a descreve como reuso livre, com poucas condições;
  - a cláusula de uso comercial e a do link da licença ficam a conferir no texto da v2, que não abriu (acima).
  - Com a v2 confirmada, o uso num vídeo monetizado no YouTube **pode**, com a linha do NERC e a fonte.
- **Pela regra do canal, ainda não:**
  - o `marca/identidade.md` §6 diz que qualquer outra base só entra depois de a licença ser lida e registrada lá;
  - a OGL britânica não está entre as fontes que o Lucas aceitou em 27/09: a do Canadá entrou, e a britânica não foi perguntada;
  - isto pede **o ok do Lucas e o registro no §6** antes de qualquer cena usar estas grades.
  - No vídeo 5, que sai pelo motor, a pergunta vai pela Sala.
- **Se ele aprovar, o crédito:**
  - **na tela**, na faixa de crédito, enquanto a batimetria fina aparecer: `Bathymetry: Five Deeps Expedition (Caladan Oceanic
    LLC), BGS NGDC · Contains data supplied by permission of the Natural Environment Research Council 2021`. O ano fica a
    confirmar, como o "[YEAR]" acima;
  - **na descrição**, a citação que a página pede: "Caladan Oceanic LLC (2021): Five Deeps Expedition to map the western Puerto
    Rico Trench (Atlantic Ocean). British Geological Survey. (Dataset). https://doi.org/10.5285/7df163a1-30c6-40b6-844d-20fa0acffd18".
    Para a Sandwich do Sul, a do segundo DOI. Mais o link da OGL v2.
- **Sem o ok, o caminho que já está aceito:**
  - a **GEBCO 2026** (domínio público, a ~450 m) desenha a fossa e a curva de 8.000 m, como a pauta §6 já prevê;
  - o **mapa multifeixe do USGS** de 2002–2003 (domínio público, checagem §3) cobre a metade oeste da fossa de Porto Rico, onde
    fica o Brownson;
  - a grade de 75 m só faria diferença no zoom fino, no "corredor" de ~13 × 3 km e na lupa da miniatura (pauta §8).
  - O mapista pode conferir, no **TID da GEBCO** (a grade que diz de onde veio cada célula), se a célula do Brownson já é de
    sonar multifeixe.
- **As figuras do próprio artigo** (a Figura 2 é o mapa do Brownson; a 3, o da Sandwich do Sul) estão na CC BY 4.0 do artigo, que
  deixa usar e reproduzir em qualquer meio, com a citação. Como DOCUMENTO, a página ou a figura teriam permissão clara
  (`marca/midia.md` §7.1). O crédito: `Bongiovanni, Stewart & Jamieson / Geoscience Data Journal, 2021 · CC BY 4.0`. Fonte de
  documento nova, ainda assim: a Sala decide se pergunta.
- **Na pauta:**
  - **§6, "As outras fontes livres":** uma linha nova. "As grades de 75 m da Five Deeps (NGDC/BGS, OGL v2, com a linha do NERC):
    a licença deixa, mas a fonte não está aceita (identidade §6). Só com o ok do Lucas, e só para o zoom fino."
  - **Checagem §3, a linha "Dados da Five Deeps":** "a confirmar" passa a "OGL v2 no NGDC (lido em 26/10/2026); texto da OGL e
    aceite do Lucas pendentes".

---

## c) O que o artigo diz da diferença entre o sonar (8.378 m) e o submersível (8.376 m)

### 1. A resposta

- **O artigo não comenta os 2 m do Brownson um por um.** Ele dá os dois números e diz que o mergulho **confirmou** o do sonar.
  A frase (pág. 4): "The maximum depth was verified by the subsequent submersible dive to the location as 8,376 ± 5 m."
- **O número oficial do artigo é o do sonar**, 8.378 ± 5 m, e o do submersível é a verificação. As duas margens são de ± 5 m, e
  2 m (6,6 ft) cabem nelas: a conta é minha.
- **O que o artigo diz em geral** (§4, pág. 10, em paráfrase): fora o Molloy Hole, os números do sonar e os dos CTDs diferiram
  **~4 m** em média, o que os autores chamam de concordância forte. Na Fossa das Marianas, eles acrescentam que variações de 1 a 5 m
  nessas profundidades não correspondem, necessariamente, a diferenças reais.
- **Os dois números se medem de jeitos diferentes:**
  - o do sonar sai da grade de 75 m, corrigida depois dos mergulhos com o perfil de velocidade do som que os CTDs do submersível e
    dos landers mediram, da superfície ao fundo (§2.1, §2.2 e §4);
  - o do submersível é a média dos sensores de pressão dos CTDs (§2.2).

### 2. A fonte

Bongiovanni et al. 2021, §3.1, §2.2, §4 e Tabela 1. Texto inteiro, lido em 26/10/2026.

### 3. O grau

**Confirmado.** O artigo dá os dois números e diz que o mergulho os verificou. Que ele não discute os 2 m em particular, também
está confirmado: o texto inteiro foi lido.

### 4. O que muda na pauta

- **§4, "Um número por frase":** a regra fica. O artigo dá apoio a uma frase como "the sub's own gauges confirmed it" logo depois
  do número do sonar, sem um segundo número.
- **Se o roteiro quiser os dois números,** a forma honesta é "8,378 meters by sonar, 8,376 by the sub's gauges — the same, within
  the margin", com as duas fontes e em frases separadas. Em pés, 27,487 e 27,480.
- **Não dizer** que o submersível "corrigiu" o sonar, nem que o "real" é um dos dois: o artigo trata o do sonar como o número, e
  o do submersível como a confirmação.

---

## Achados laterais, para a Sala (não são as perguntas deste item)

- **A linha de 60°S, como o artigo a chama** (pág. 2): a Fossa das Sandwich do Sul cruza "the 60°S boundary between the Southern
  and South Atlantic oceans as defined by the IHO and The Antarctic Treaty System".
  - É o que os autores escreveram em 2021, num artigo de dados, e não um texto da IHO.
  - Ele contradiz a página da NOAA que a checagem usou ("proposta em 2000 e não ratificada").
  - É o item 9, de outro leitor: a fala continua na forma da pauta §4 até a resolução de 2023 ser lida.
- **O Meteor Deep foi descoberto em 1926**, pelo artigo (pág. 2, "discovered in 1926"). Serve à camada 7.
- **O fundo do sul estava raso demais na grade de 2019**, pela §3.2 (pág. 4):
  - antes da Five Deeps, ~91 % da Fossa das Sandwich do Sul não tinha sido mapeada;
  - a GEBCO_2019 dava o Meteor Deep **804 m (2.638 ft) mais raso** que o sonar, e o ponto ao sul de 60°S **1.140 m (3.740 ft)
    mais raso**.
  - É o avesso de Porto Rico, onde o número dos livros era fundo demais. Pode servir à camada 7 sem repetir a 2.
  - Em Porto Rico, a diferença média entre a Five Deeps e a GEBCO_2019 foi de 18 m (Tabela 2), e 14 % da área era nova.
- **O tamanho da fossa:** o artigo também dá "approximately 810 km long" (pág. 2), como Stewart & Jamieson 2019. A disputa com a
  Britannica (checagem §2.1) continua.
