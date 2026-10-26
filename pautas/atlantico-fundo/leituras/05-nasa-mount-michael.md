# Leitura 5 · O que faltava: a página da NASA do Mount Michael (pauta §9, item 5) · 26/10/2026

- **Quem leu:** um leitor da Sala (subagente), em 26/10/2026, entre 16:0x e 16:2x (Brasília).
- **Como:**
  - as páginas foram lidas pelo curl, uma por vez, com o User-Agent do canal, depois do `robots.txt` de cada site. O de
    `science.nasa.gov` e o de `www.nasa.gov` dizem `Allow: /`;
  - **nenhuma imagem foi baixada**. O tamanho em pixels saiu dos metadados que o próprio servidor de arquivos da NASA publica para
    cada imagem (`…/<arquivo>.jpg/jcr:content/metadata.json`: `tiff:ImageWidth`, `tiff:ImageLength`, `dam:size`). É um JSON, não a
    imagem;
  - o que a imagem mostra vem **do texto da página**, não de olhar a imagem.
- **O endereço mudou.** `earthobservatory.nasa.gov/images/149160/…` redireciona (301) para
  https://science.nasa.gov/earth/earth-observatory/mount-michael-volcano-track-or-plume-149160/

**O achado principal:** a página 149160 **não é** a do Landsat 8 de 24/08/2026. É *"Mount Michael, Volcano Track or Plume?"*, a
Image of the Day de **04/12/2021**, com uma imagem de **07/11/2021**. A imagem do lago de lava de 24/08/2026 está noutra página,
*"A Bright Spot at Mount Michael"* (07/09/2026), que a 149160 lista entre as relacionadas. A checagem §2.3 juntou o fato de uma
página com o endereço da outra.

---

## a) A data e o satélite da imagem

### 1. A resposta

- **Página 149160:** a imagem foi feita em **07/11/2021** pelo **OLI do Landsat 8**. A página foi publicada em 04/12/2021 e
  atualizada em 04/09/2026, na migração do site.
  - A frase da página: "acquired on November 7, 2021, with the Operational Land Imager (OLI) on Landsat 8".
  - É **falsa cor**: infravermelho de onda curta e azul (bandas 7-6-2 do OLI), para separar o rastro do vulcão do resto das
    nuvens.
- **A página do fato que a checagem citava** (*A Bright Spot at Mount Michael*):
  - 24/08/2026, OLI do Landsat 8: cor natural, com o sinal infravermelho (bandas 7-6-5) em vermelho, que mostra o calor do lago
    de lava na cratera do cume;
  - 01/09/2026, OLI do Landsat 9: nuvens em onda a favor do vento da ilha.

### 2. A fonte

- NASA Earth Observatory, "Mount Michael, Volcano Track or Plume?", 04/12/2021 (texto de Kathryn Hansen):
  https://science.nasa.gov/earth/earth-observatory/mount-michael-volcano-track-or-plume-149160/
- NASA Earth Observatory, "A Bright Spot at Mount Michael", 07/09/2026 (texto de Lindsey Doermann):
  https://science.nasa.gov/earth/earth-observatory/a-bright-spot-at-mount-michael/
- As duas lidas inteiras em 26/10/2026.

### 3. O grau

**Confirmado.** E a checagem fica corrigida: o fato de 24/08/2026 é da segunda página, não da 149160.

### 4. O que muda na pauta

- **Checagem §2.3, a linha "O vulcão das ilhas":** "Mount Michael (ilha Saunders) tem um lago de lava persistente; o Landsat 8 o
  viu em 24/08/2026 (NASA Earth Observatory, 'A Bright Spot at Mount Michael', 07/09/2026)". O status passa a **confirmado**.
- **Pauta §6, "As outras fontes livres":** a linha "a NASA para as Sandwich do Sul (as páginas não foram lidas)" passa a "lidas em
  26/10/2026 (`pautas/atlantico-fundo/leituras/05-nasa-mount-michael.md`)".

---

## b) O tamanho em pixels da maior versão

### 1. A resposta

| A imagem | O arquivo grande (o "Download" da página) | Pixels | Bytes | Pela marca |
|---|---|---|---|---|
| 07/11/2021, Landsat 8, falsa cor (página 149160) | `lenticularcloud_oli_2021311_lrg.jpg` | **4517 × 3627** | 3.004.183 (a página diz "2.87 MB") | grande: enche o 4K sem ampliar |
| 24/08/2026, Landsat 8, cor natural com o calor em vermelho | `mountmichael_oli_20260824_lrg.jpg` | **2993 × 2494** | 4.481.359 ("4.27 MB") | grande: enche o 4K a 1,28× (o teto é 1,4×, e o mínimo para a tela cheia é 2.743 px) |
| 01/09/2026, Landsat 9, nuvens em onda | `mountmichael_oli2_20260901_lrg.jpg` | **2049 × 1366** | 1.197.886 ("1.14 MB") | média: precisaria de 1,87× e vai impressa sobre a mesa |

As URLs, todas em `https://assets.science.nasa.gov/content/dam/science/esd/eo/images/`:
- `imagerecords/149000/149160/lenticularcloud_oli_2021311_lrg.jpg`;
- `iotd/2026/a-bright-spot-at-mount-michael/mountmichael_oli_20260824_lrg.jpg`;
- `iotd/2026/a-bright-spot-at-mount-michael/mountmichael_oli2_20260901_lrg.jpg`.

### 2. A fonte

Os metadados do servidor de arquivos da NASA, para cada arquivo, lidos em 26/10/2026. O tamanho do primeiro também foi conferido
por um HEAD (3.004.183 bytes, `image/jpeg`). As páginas dão o tamanho em MB do "Download". A **imagem não foi aberta**.

### 3. O grau

**Confirmado** pelos metadados do servidor: as dimensões e os bytes. Os bytes batem com o MB que a página dá. A medida no arquivo
fica para quem baixar.

### 4. O que muda na pauta

**Pauta §6, "As outras fontes livres":** "NASA, Sandwich do Sul: a do lago de lava (24/08/2026, 2993 × 2494, cor natural) enche
a tela; a de 2021 (4517 × 3627) é falsa cor." O resto fica para a regência.

---

## c) A licença e o crédito que a NASA pede

### 1. A resposta

- **A licença.** A diretriz da NASA, relida hoje (página atualizada em 13/08/2026), diz que o conteúdo da NASA "generally are not
  subject to copyright in the United States". O resto, em paráfrase:
  - o uso factual, sem sugerir endosso, dispensa permissão explícita;
  - a NASA deve ser citada como a fonte;
  - o uso comercial não pode sugerir endosso;
  - o material de terceiros vem marcado com "©" e o nome do dono.
  - Nenhuma das três imagens leva "©". Os dados são do Landsat, do USGS.
- **O crédito de cada página:**
  - 2021: "NASA Earth Observatory image by Lauren Dauphin, using Landsat data from the U.S. Geological Survey" (e "Story by
    Kathryn Hansen");
  - 2026: "NASA Earth Observatory images by Michala Garrison, using Landsat data from the U.S. Geological Survey" (e "Story by
    Lindsey Doermann"). Debaixo de cada imagem, "NASA Earth Observatory/Michala Garrison".

### 2. A fonte

- NASA, "Guidelines for using images and media" (Brand Center), atualizada em 13/08/2026, lida em 26/10/2026:
  https://www.nasa.gov/nasa-brand-center/images-and-media/
- As duas páginas do Earth Observatory (acima).

### 3. O grau

**Confirmado.** A licença foi lida na origem hoje e bate com a que o canal leu em 27/09/2026 (`marca/acervos/1-federais-eua.md`,
item 2).

### 4. O veredito

**Pode usar.** É obra federal dos EUA, de um acervo já aceito (`marca/midia.md` §7.3, a NASA; identidade §6).
- **Na tela, sem crédito** (identidade §7, "Domínio público (NASA, Landsat/USGS…)").
- **Na descrição**, a linha da página, como a NASA pede, por exemplo: `Mount Michael, South Sandwich Islands: NASA Earth Observatory
  image by Michala Garrison, using Landsat data from the U.S. Geological Survey.`
- **Cuidados:**
  - nada que sugira endosso da NASA;
  - nenhum logo da NASA na cena (`midia.md` §7.6);
  - **a de 2021 é falsa cor**: a fala e o rótulo não a apresentam como a cor real da ilha.
- **A data na tela.** A foto mostra a ilha num dia certo:
  - se a fala diz que o vulcão está ativo hoje, a de 24/08/2026 é a mais perto e mostra o lago de lava;
  - o aviso do ano (identidade §6) fica com o `redator-de-tela` e o conferente, pela frase que ela cobrir.

---

## d) A imagem mostra as ilhas sobre a fossa? O que se vê

### 1. A resposta

- **2021 (página 149160), pelo texto da página:**
  - a ilha Saunders, com o Mount Michael, no meio de um campo de nuvens (o texto só fala dela);
  - a favor do vento, uma faixa branca e brilhante: o "rastro" do vulcão ou uma pluma logo acima das nuvens, e nem o cientista
    da NASA sabe dizer qual;
  - uma nuvem lenticular, que não tem a ver com o vulcão.
  - Tudo em falsa cor.
- **24/08/2026 (*A Bright Spot*), pelo texto da página:**
  - a Saunders em cor natural, no meio do Atlântico Sul "ice-filled", tomado pelo gelo do mar;
  - o calor do lago de lava em vermelho no cume, uma baforada de pluma e a neve escurecida na encosta norte.
- **A fossa não aparece em nenhuma.** Ela fica a 7–8 km debaixo d'água, e o satélite mostra o mar, o gelo e as nuvens.
  - **Se o quadro chega até o eixo da fossa,** a leste do arco das ilhas: não se sabe. As páginas não dão a área coberta, e a
    imagem não foi aberta.
  - **Quem mostra as ilhas "sobre a fossa" é o mapa:** a imagem real da ilha, mais o mapa de batimetria (GEBCO) com a fossa ao
    lado.
- **O que as páginas dizem do lugar**, útil para a camada 7:
  - a 2026: as Sandwich do Sul são uma fileira de pequenos vulcões de ~350 km (220 mi), formada pela placa Sul-Americana
    mergulhando sob a pequena placa das Sandwich do Sul;
  - a 2021: a Saunders fica a ~1.600 km (1.000 mi) da Antártida e a ~2.400 km (1.500 mi) da América do Sul, sem moradores.

### 2. A fonte

As duas páginas do Earth Observatory (acima), lidas inteiras em 26/10/2026. As imagens não foram vistas.

### 3. O grau

- O que as imagens mostram: **confirmado pelo texto da página**, não pelo olho.
- Se o quadro cobre o eixo da fossa: **não conferido**. A pergunta fica para quem abrir a imagem (o conferente, no `research`) e
  para o mapista, com a GEBCO.

### 4. O que muda na pauta

- **Pauta §6, "As outras fontes livres":** "NASA, Sandwich do Sul: a ilha Saunders e o Mount Michael, de cima (o lago de lava em
  24/08/2026). Nenhuma imagem mostra a fossa: a fossa vem do mapa."
- **A altura do Mount Michael está em disputa entre as duas páginas da NASA:**
  - a de 2021: "nearly 1,000-meter-tall";
  - a de 2026: "843-meter-high (2,766-foot-high)".
  - Se o roteiro disser a altura, a Sala lê o Global Volcanism Program (Smithsonian), que a página de 2026 cita:
    https://volcano.si.edu/volcano.cfm?vn=390090

---

## e) As outras imagens da NASA das Sandwich do Sul

### 1. A resposta

- **O MODIS com as plumas de Zavodovski e do Mount Michael:**
  - é a página "Volcanic Plume Over Southern Atlantic Ocean Revealed Through False-Color Imagery", de 30/04/2014;
  - **o MODIS do satélite Aqua**, em **19/04/2014**, em falsa cor (bandas 7-2-1): as ilhas de gelo saem turquesa, as nuvens
    turquesa-claro e o mar preto;
  - ao norte, uma pluma fina sai de Zavodovski, a ilha mais ao norte, rumo a nordeste. Mais ao sul, uma pluma larga do Mount
    Michael, e vórtices de von Kármán atrás de outras três ilhas;
  - **é a única que mostra a fileira de ilhas inteira**;
  - o crédito: "Image Credit: Jeff Schmaltz/MODIS Land Rapid Response Team, NASA GSFC";
  - o arquivo é `https://www.nasa.gov/wp-content/uploads/2023/03/image04302014_250m.jpg`. Pelos atributos da imagem na página, tem
    **1041 × 1338 px**, em retrato. O "250m" do nome do arquivo sugere 250 m por pixel, mas a página não diz.
  - Pela marca, é **pequena** (menos de 1.600 px): só entra impressa sobre a mesa, se preencher uma lacuna (identidade §5, "A foto
    pequena preenche a lacuna").
- **As páginas do Visible Earth** com o mesmo par de plumas não abrem mais: redirecionam (301) para a capa do Earth Observatory.
  São a 121297 ("Plumes from Zavodovski and Mount Michael volcanoes… false color") e a 128626/128630 ("Tracks from…"). Uma versão
  maior que essa, se existiu lá, não se pôde ver.
- **"Lava Lake Discovered on Mount Michael"**, Image of the Day de 19/07/2019
  (https://science.nasa.gov/earth/earth-observatory/lava-lake-discovered-on-mount-michael-145328/):
  - Landsat 8, 31/01/2018, duas versões: a falsa cor (bandas 4-6-7, o calor em azul e a neve em vermelho) e a cor natural;
  - **1736 × 1480 px** cada (metadados do servidor). Pela marca, médias: vão impressas;
  - o crédito: "NASA Earth Observatory images by Lauren Dauphin, using Landsat data from the U.S. Geological Survey";
  - a fonte científica é Gray et al. 2019, *Journal of Volcanology and Geothermal Research* 379:60–71.
- **Há mais,** e não se leu: "Sandwiched Wave Clouds" (146366) e "Wave Clouds from South Sandwich Islands" (41390), citadas nas
  páginas.

### 2. A fonte

- NASA, "Volcanic Plume Over Southern Atlantic Ocean Revealed Through False-Color Imagery", 30/04/2014, lida inteira em 26/10/2026:
  https://www.nasa.gov/image-article/volcanic-plume-over-southern-atlantic-ocean-revealed-through-false-color-imagery/
- NASA Earth Observatory, "Lava Lake Discovered on Mount Michael", 19/07/2019, lida em 26/10/2026.

### 3. O grau

- Data, satélite e crédito do MODIS e da página de 2019: **confirmados**.
- O tamanho do MODIS: **confirmado pela página** (os atributos da imagem), não pelos metadados do arquivo.
- Uma versão maior do MODIS no Visible Earth: **não conferida** (as páginas saíram do ar).

### 4. O que muda na pauta

- **Pauta §6:** acrescentar "o MODIS de 19/04/2014 (Aqua), a fileira das ilhas com as plumas de Zavodovski e do Mount Michael,
  1041 × 1338 px: pequena, só impressa sobre a mesa".
- O que serve ao vídeo, na camada 7:
  - **a ilha em cor natural com o lago de lava** (24/08/2026), em tela cheia;
  - **a fileira inteira** (MODIS 2014), impressa;
  - **a fossa no mapa**.
- A licença e o crédito de todas são os da resposta c).
