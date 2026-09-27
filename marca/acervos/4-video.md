# Grupo 4: vídeo (footage) livre e oficial, para o Alpha Point

Levantamento de CANDIDATOS para o Lucas escolher. Quem decide é ele; nada aqui é regra do canal.

- **Data de todas as leituras:** 27/09/2026.
- **Método:** leitura das páginas de termos e de itens de amostra na própria fonte (WebFetch), mais o
  `robots.txt` de cada host. Busca na web só para achar a URL da página oficial.
- **Nada foi baixado.** Resolução tirada do que a página do item (ou o `metadata.json` oficial) declara. O leitor
  guardou sozinho, numa pasta temporária da sessão, o PDF do aviso legal do Copernicus (documento de termos, não
  mídia).
- **Site que recusou leitura** (403, sem resposta, `robots.txt` vetando o Claude) ficou NÃO CONFERIDO, sem
  contorno.
- **Recusados pelo Lucas em 26/09 e fora deste levantamento:** Pexels, Pixabay, Internet Archive, Openverse e
  Europeana.
- **Onde cada candidato bate na regra de hoje** (`marca/midia.md` §7.3): NASA, USGS e DVIDS já estão aprovados. O
  §7.3 aprova também a "sala de imprensa de órgão do governo federal". Se o B-roll do NPS, do USFWS, da NOAA, da
  FEMA e do State Department conta como sala de imprensa, quem diz é o Lucas. ESA, Copernicus (como vídeo), EU,
  Parlamento Europeu, ESO, Google Earth Timelapse, JMA, OTAN, MOD britânico e os outros são fontes novas e pedem
  decisão dele.

---

## 1 · Resumo

| Fonte | Licença | Crédito | Resolução real (amostras) | Script ou só navegador | Veredito |
|---|---|---|---|---|---|
| NASA SVS / Goddard | domínio público, salvo nota (a música licenciada não é) | por item: "NASA's Scientific Visualization Studio" ou "NASA's Goddard Space Flight Center" | 3840×2160 MOV/MP4; 4096×2160; até 5760×3240; 30 ou 60 fps | script: API oficial sem chave, sem `robots.txt` | **recomendo** |
| NASA JSC / ISS (images.nasa.gov + eol.jsc) | domínio público ("NASA does not maintain a copyright") | "Video courtesy of the Earth Science and Remote Sensing Unit, NASA Johnson Space Center" (eol); "NASA" (SVS) | 3840×1920 (2015); 4176×2784 a 29,97 fps (2023, 39 GiB, **com música licenciada**) | script: images-api já no `buscar-midia`; eol liberado no `robots` | **recomendo**, sem o áudio |
| ESA (esa.int) | CC BY-SA 3.0 IGO só no item marcado; o resto é "ESA Standard Licence", não comercial | "ESA/…, CC BY-SA 3.0 IGO" + link da licença + aviso de mudança | não declarada (só "SOURCE MP4" e o tamanho) | script na `/ESA_Multimedia/Search`; o `robots` veta `/esearch` e pede 2 s entre pedidos | **com ressalvas** |
| Copernicus (dado Sentinel) | livre, pleno e aberto (reproduzir, distribuir, adaptar) | "Contains modified Copernicus Sentinel data [Year]" | é dado (10 m), não footage: o vídeo o canal monta | script pela CDSE, com conta e cotas | **com ressalvas** |
| EUMETSAT | NÃO CONFERIDO (403) | — | — | só navegador | **NÃO CONFERIDO** |
| NOAA GOES (NESDIS/STAR) | não protegido por copyright (obra federal) | "NOAA"; na GeoColor, "CIRA/NOAA" (não confirmado na página) | quadros JPG de 5424², 10848² e 21696², vários por dia | script: o `robots` libera `/GOES/`, e o CDN não tem `robots.txt` | **recomendo** |
| RAMMB/CIRA SLIDER | termos não localizados | rótulo "SLIDER by RAMMB / CIRA @ CSU" | exporta PNG e GIF | `robots` do rammb2 dá 403 | **com ressalvas** (licença NÃO CONFERIDA) |
| Himawari, pela JMA/MSC | Public Data License 1.0, compatível com CC BY 4.0; "Commercial use … is also permitted" | "Source: Meteorological Satellite Center of JMA website (URL)" + aviso de edição; imagem TCR: JMA, NOAA/NESDIS, CSU/CIRA | não declarada | script: sem `robots.txt` | **com ressalvas** (medir a resolução) |
| Himawari, pelo NICT | "not allowed for commercial uses" | — | 11.000×11.000 | — | **não serve** |
| NPS | domínio público, salvo nota | citação "appreciated"; na republicação comercial, "No protection is claimed in original U.S. Government works" | 1080p a 24 fps (Grand Canyon); 4K só no Flickr de parques (não conferido) | script nas páginas de B-roll; o `robots` veta `/search/` | **com ressalvas** |
| USFWS | domínio público, com ressalva da música licenciada | "U.S. Fish and Wildlife Service" (pedido) | SD online; HD só por encomenda paga | script nas coleções; o `robots` veta `/search/`, onde hoje fica a antiga Digital Library | **não serve** para 4K |
| Forest Service | site próprio NÃO CONFERIDO (403); no DVIDS, "Public Domain" | o do item no DVIDS | 1920×1080 no máximo (amostra) | pelo DVIDS, que o canal já usa | **com ressalvas** |
| USGS | domínio público | "Credit: U.S. Geological Survey" | MP4 sem resolução no item; lançamento de 2016 em 4K | script em `/media/`; o `robots` veta `/search/` | **recomendo** para registro real |
| NOAA Ocean Exploration | domínio público, salvo nota | o crédito do item; "NOAA Ocean Exploration" | ProRes a pedido; portal de vídeo não abriu | script: o `robots` só veta `/map/*` | **com ressalvas** |
| NOAA Fisheries | domínio público | "NOAA Fisheries" (exigido) | não declarada | script nas categorias; o `robots` veta `/search/` | **com ressalvas** |
| NOAA Sanctuaries | "for news media and non-commercial scientific and educational uses" | a citação do item | não declarada | não verificado | **com ressalvas** (o texto restringe) |
| FEMA / DHS | domínio público (diretriz do DHS) | "U.S. Department of Homeland Security / <creator's name>" | a biblioteca da FEMA só embute YouTube; no DVIDS, item a item | pelo DVIDS (unidade FEMA, 714 vídeos) | **com ressalvas** |
| State Department | NÃO CONFERIDO (403) | — | — | só navegador | **NÃO CONFERIDO** |
| Comissão Europeia: Audiovisual Service + EbS | CC BY 4.0 nas condições de uso; o FAQ fala em "EU-related information and educational purposes" | "© European Union, [ano], licensed under CC BY 4.0" | até 1920×1080, 25p | script: o `robots` libera tudo | **com ressalvas** |
| Parlamento Europeu | aviso legal próprio (não é CC): uso comercial com a fonte | "© European Union, [ano] – Source: European Parliament" | NÃO CONFERIDA (o site dos itens veta o Claude) | só navegador | **com ressalvas** |
| kremlin.ru | NÃO CONFERIDO (sem resposta) | — | — | — | **NÃO CONFERIDO** |
| YouTube CC BY (canais oficiais) | CC BY, marcado pelo dono do canal | título, autor, URL, "is licensed under CC BY" | a do arquivo original, no site do órgão | licença confirmável pela YouTube Data API (`status.license`); baixar do YouTube é proibido | **com ressalvas** (só como pista) |
| Pond5 Public Domain | NÃO CONFERIDO (403) | — | — | — | **NÃO CONFERIDO** |
| JAXA | comercial proibido sem permissão prévia; sem modificação | "(C) JAXA" etc. | — | não verificado | **não serve** |
| DLR | CC BY-NC-ND 3.0 DE onde marcado | "Video: DLR, CC BY-NC-ND 3.0" | — | o `robots` libera | **não serve** |
| Agência Espacial Canadense | só não comercial | "© Canadian Space Agency" | — | não verificado | **não serve** |
| ESO | CC BY 4.0, salvo nota (a música não) | "ESO/<nome>", sem alterar | UHD 4K H.264/H.265 e broadcast 4K, 25 fps (2019); os antigos em 720p | script em `/public/videos/?search=` | **recomendo** (nicho: Chile e céu) |
| Google Earth Timelapse | CC BY 4.0 | "Google Earth Timelapse (Google, Landsat, Copernicus)" | MP4 "4k" (pixels não declarados) | script: links diretos no `storage.googleapis.com` | **recomendo** |
| OTAN | "Fair Use" para imprensa, academia, ONGs e público; não vender nem anunciar | "clearly credited or sourced to NATO" | não conferida | não conferido | **com ressalvas** |
| MOD britânico (Defence Imagery) | OGL v3.0 só no material pré-liberado e sem pessoa identificável; o resto, licença editorial | "Contains public sector information licensed under the Open Government Licence v3.0." | NÃO CONFERIDA (403 no acervo) | só navegador | **com ressalvas** (acervo NÃO CONFERIDO) |
| ONU (UN Audiovisual Library) | não é domínio público; licença com taxa | — | — | — | **não serve** |
| NOIRLab | NÃO CONFERIDO (página vazia) | — | — | — | **NÃO CONFERIDO** |

### As 3 que mais recomendo para B-roll de geografia em 4K

1. **NASA SVS / Goddard.** Tem 4K de verdade (MOV e MP4 em 3840×2160, e até 5760×3240), é domínio público, e a
   API oficial é sem chave e liberada para script. O acervo é de geografia: séries Landsat, globos e voos
   aéreos. Dois itens batem com o Juneau: "The Retreat of Alaska's Mendenhall Glacier" e as aéreas 4K do Alasca da
   Operation IceBridge. É a NASA, que já está aprovada, mas por um caminho que o `buscar-midia` não consulta.
2. **Google Earth Timelapse.** São MP4 em "4k", em CC BY 4.0, com link direto. Mostram a mudança do planeta de
   1984 em diante: cidades crescendo, rios que mudam de curso, geleiras, mineração, desmatamento. O crédito é
   uma linha só. Fonte nova: pede decisão do Lucas, porque não é acervo de governo.
3. **NOAA GOES (NESDIS/STAR), com a JMA/Himawari do outro lado do Pacífico.** Os quadros da Terra inteira vão
   de 5424² a 21696², em domínio público, e dão timelapse 4K de nuvem, furacão e dia e noite sobre as Américas. A
   JMA cobre Ásia e Oceania e permite uso comercial citando a fonte. O vídeo o canal monta (ffmpeg), e a camada
   GeoColor pede o crédito do CIRA.

Logo atrás delas:
- o **4K da ISS** da NASA JSC, que já está no acervo NASA em uso. Entra sem o áudio, porque a compilação de 2023
  traz música licenciada;
- a **ESO**, com timelapses 4K do Atacama e do céu austral em CC BY 4.0. Vale para um nicho.

**O que nenhuma fonte livre e oficial resolve:** B-roll genérico de cidade, porto, indústria ou drone em 4K. Isso
continua nos bancos pagos. As fontes oficiais são fortes em Terra vista do espaço, satélite, visualização e
registro real (parques, vulcões, desastres, instituições), e fracas em 4K de rua.

---

## 2 · NASA

### 2.1 · NASA Scientific Visualization Studio (SVS) e Goddard Media Studios

- **Licença:** domínio público, salvo nota. A ajuda diz: "All of our content is in the public domain (unless
  otherwise noted), meaning that it is free to download, use, and redistribute for whatever purposes you see
  fit."
- **Uso comercial / YouTube monetizado:** sim, é domínio público. A diretriz geral da NASA diz: "If the NASA
  material is to be used for commercial purposes, including advertisements, it must not explicitly or implicitly
  convey NASA's endorsement."
- **Crédito:** cada item traz "Please give credit for this item to: …". Nas amostras:
  - "NASA's Scientific Visualization Studio" (item 14666);
  - "NASA's Goddard Space Flight Center" (itens 13298 e 15030);
  - "NASA" (item 30623).

  A diretriz geral: "NASA should be acknowledged as the source of the material." É pedido, não exigência legal
  (domínio público). A regra do canal para domínio público federal é sem crédito na tela e com a procedência
  gravada (`midia.md` §7.3); vale pôr a linha na descrição.
- **Restrições:**
  - **música:** "some of our visualizations feature licensed music, which is **not** in the public domain. In
    these instances, the visualizations themselves are still in the public domain, meaning you're allowed to use
    them without the associated audio tracks." Isto é, sem a trilha, por causa do Content ID;
  - **logo:** o insígnia e o logotipo da NASA "not in the public domain". Clipe com o logo gravado não põe o logo
    como elemento (regra do canal, §7.6);
  - pessoa reconhecível em uso comercial pede permissão;
  - material de terceiro ("unless otherwise noted") se trata com o dono.
- **Resolução real (amostras):**
  - **13298**, "Operation IceBridge – Alaskan Landscape" (09/12/2019): aéreas de geleira, cachoeira, montanha e
    baleia no Alasca.
    - MOV 3840×2160 de 1,3 a 2,4 GB;
    - MP4 3840×2160 de 791,3 MB;
    - um MOV 4096×2160 de 2,8 GB, com "29.97" no nome (DCI: cortar para 3840);
    - um MOV 1920×1080;
    - versões 1080 e 540 para web.
  - **15030**, "The Retreat of Alaska's Mendenhall Glacier" (06/05/2026): série Landsat de 1986 a 2024. MP4
    5760×3240 de 619,8 MB, além de 1920×1080 e 1080×1920 (vertical).
  - **14666** (13/11/2025): ProRes MOV 3840×2160 de 3,1 GB e MP4 3840×2160 de 598 MB.
  - **A ajuda:** "Most of our newer visualizations are created in 4K (3840 x 2160)".
- **Quadros por segundo:** "at either 30 or 60 frames per second" (ajuda). Os itens não declaram.
- **Acesso automático:**
  - **API oficial:** `https://svs.gsfc.nasa.gov/api/search/?search=…` (limite padrão de 100 resultados, até
    2000) e `https://svs.gsfc.nasa.gov/api/{id}/`. É por GET e "No authentication key needed". Teste:
    `?search=Alaska glacier&limit=10` devolveu 10 itens;
  - `robots.txt`: não existe (404);
  - a ajuda sugere `curl` e DownThemAll para baixar sequência de quadros.

  **Conclusão: script permitido.**
- **Termos lidos (27/09/2026):**
  - https://svs.gsfc.nasa.gov/help/
  - https://www.nasa.gov/nasa-brand-center/images-and-media/ ("Last Updated: Aug 13, 2026")
- **Veredito: recomendo.** É 4K e 5K reais, em domínio público, com API sem chave e acervo de geografia. Cuidado
  só com a música e o logo.

### 2.2 · NASA Johnson (JSC): vídeo da ISS e o Gateway to Astronaut Photography of Earth

- **Licença:** domínio público. O FAQ do Gateway diz: "You are welcome to use our photos or videos, for which NASA
  does not maintain a copyright."
- **Uso comercial / YouTube monetizado:** sim, com dois limites do FAQ:
  - "NASA material may not be used to state or imply the endorsement by NASA or by any NASA employee of a
    commercial product, service, or activity";
  - "If a recognizable person appears in NASA material, use for commercial purposes may infringe a right of
    privacy or publicity."
- **Crédito (texto exato):**
  - no Gateway: "Video courtesy of the Earth Science and Remote Sensing Unit, NASA Johnson Space Center". Para
    vídeo, o FAQ recomenda também o título e o link da página;
  - no SVS 30623: "NASA".
- **Restrições:**
  - **música embutida:** o `metadata.json` oficial da compilação "Earth in 4K – Space Station Expedition 67-68
    Edition" (jsc2023m000111) lista várias faixas e diz: "This music requires a license for use. Please contact
    your local office for assistance." Use só a imagem;
  - o logo e as pessoas, como na 2.1.
- **Resolução real (amostras):**
  - **SVS 30623**, "Ultra-High-Definition Video from the International Space Station" (29/07/2015): MP4
    **3840×1920** (145,3 MB). Não é 16:9: falta altura para 2160, e se corta ou se enquadra;
  - **images.nasa.gov, jsc2023m000111** (21/04/2023), pelo `metadata.json`:
    - **4176×2784**, 29,97 fps, H.264;
    - 52 min 31 s, **39 GiB**.

    Há outras compilações "4K" da ISS: jsc2021m000138 e jsc2022m000172;
  - **Gateway (eol.jsc.nasa.gov):** a página de vídeos oferece "all resolutions", sem pixels declarados. O FAQ só
    cita uma câmera HD de 1920×1035. NÃO CONFERIDA.
- **Quadros por segundo:** 29,97 (jsc2023m000111). Nos outros, não declarado.
- **Acesso automático:**
  - `images-api.nasa.gov` já é a fonte `nasa` do `buscar-midia`;
  - o `robots.txt` do eol.jsc.nasa.gov tem só `User-agent: *` e o sitemap, sem veto;
  - o FAQ não fala de script nem de API.

  **Conclusão: script permitido.**
- **Termos lidos (27/09/2026):**
  - https://eol.jsc.nasa.gov/FAQ/
  - https://www.nasa.gov/nasa-brand-center/images-and-media/
- **Veredito: recomendo, sem o áudio.** É a Terra vista da órbita em 4K e em domínio público. O arquivo de 2015
  tem proporção 2:1, e as compilações recentes trazem música licenciada e pesam dezenas de GB.

---

## 3 · ESA, e o que a CC BY-SA 3.0 IGO pede num vídeo monetizado

- **Licença:** depende do item.
  - O vídeo "Euclid's first images: the Horsehead Nebula" diz "CC BY-SA 3.0 IGO or ESA Standard Licence": vale
    uma ou outra.
  - O "Jakobshavn Glacier flow" (16/09/2026) diz só "ESA Standard Licence".
  - A ESA Standard Licence (termos atualizados em 18/01/2024) permite uso "for educational, editorial or
    informational purposes" e veta o comercial: "Images or videos available on the ESA Website shall not be used
    for a commercial purpose, such as but not limited to, entertainment, advertisement, merchandising, etc."
- **Uso comercial / YouTube monetizado:**
  - **Standard Licence:** não;
  - **CC BY-SA 3.0 IGO:** sim, porque a licença não tem NC. Mas vem com o compartilha-igual (abaixo).
- **Crédito (texto exato):** exemplos da ESA:
  - "Credit: ESA/Rosetta/NavCam – CC BY-SA IGO 3.0";
  - "ESA/DLR/FU Berlin, CC BY-SA 3.0 IGO";
  - "ESA/Photographer's name, CC BY-SA 3.0 IGO".

  Mais "a direct link to the licence text", e dizer claramente se houve mudança. Na Standard Licence: "You must
  always credit the ESA copyright - ©ESA".
- **O que a CC BY-SA 3.0 IGO pede num vídeo monetizado** (código legal, creativecommons.org/licenses/by-sa/3.0/igo/legalcode):
  1. **Pode:** reproduzir, distribuir, adaptar e usar comercialmente.
  2. **Crédito**, "reasonable to the medium or means You are utilizing". No caso de adaptação, "a credit
     identifying the use of the Work in the Adaptation".
  3. **O link da licença** "with every copy of the Work You Distribute or Publicly Perform" (4(a)). Num vídeo do
     YouTube, o razoável é a descrição.
  4. **Não sugerir endosso:** "assert or imply any connection with, sponsorship or endorsement by the Licensor".
  5. **O ponto que pesa, o compartilha-igual:**
     - **Coleção.** Usar o clipe "in its entirety in unmodified form along with one or more other contributions"
       é Coleção, e "a Collection will not be considered as an Adaptation". Nesse caso o vídeo do canal não
       herda a licença.
     - **Adaptação.** Cortar um trecho, reenquadrar, tratar a cor, mudar a velocidade ou pôr texto e gráfico por
       cima é alterar ("any alterations and arrangements of any kind involving the Work"): vira Adaptação. Aí
       "You may Distribute or Publicly Perform an Adaptation only under the terms of: (i) this License; (ii) a
       later version of this License with the same License Elements".
     - **O risco.** Que a cena, ou o vídeo inteiro, tenha de sair em CC BY-SA, e qualquer um possa reutilizá-la
       comercialmente. O YouTube só oferece "licença padrão" ou CC BY, então a CC BY-SA ficaria declarada na
       descrição. Até onde vai a "Adaptação" num vídeo com várias fontes, a licença não resolve. Não é parecer de
       advogado.
  6. **Direito moral:** "must not distort, mutilate, modify or take other derogatory action … prejudicial to the
     honor or reputation of the Licensor".
  7. **Disputa:** com organização internacional, mediação e depois arbitragem UNCITRAL. Não se vai a um tribunal
     comum.
  8. **A página da ESA sobre a licença** repete: "Adaptation/translation/derivatives must be distributed under the
     same licence terms" e "The user must not give any suggestion that ESA necessarily endorses the
     modifications".

  O FAQ da ESA sobre a CC (open.esa.int) não abriu: o domínio não resolveu.
- **Restrições:**
  - o logo da ESA fica fora da CC;
  - material de terceiro pede aprovação do dono;
  - o **ESA Earth Online Visuals** (visuals.earth.esa.int) é "intended for non-commercial use", salvo o item
    marcado CC BY-SA.
- **Resolução real (amostras):** as páginas não declaram pixels, só "MP4" e "SOURCE MP4" com o tamanho:
  - Horsehead: 265,18 MB;
  - Jakobshavn: 66,44 MB para 6 s.

  NÃO CONFERIDA.
- **Quadros por segundo:** não declarado.
- **Acesso automático:**
  - `robots.txt`: `Crawl-delay: 2` e `Disallow: /esearch`, além de caminhos de layout. A busca de multimídia
    (`/ESA_Multimedia/Search?SearchText=…&result_type=videos`) não é vetada e respondeu com a lista;
  - não há API de mídia;
  - os termos não falam de script.

  **Conclusão: script permitido** na busca de multimídia, com 2 s entre pedidos, e a licença conferida item a
  item.
- **Termos lidos (27/09/2026):**
  - https://www.esa.int/ESA_Multimedia/Terms_and_conditions_of_use_of_images_and_videos_available_on_the_esa_website
  - https://www.esa.int/Services/Creative_Commons_Attribution-ShareAlike_3.0_IGO_CC_BY-SA_3.0_IGO_Licence
  - https://creativecommons.org/licenses/by-sa/3.0/igo/legalcode
  - https://visuals.earth.esa.int/terms-and-conditions
  - https://www.esa.int/About_Us/Law_at_ESA/Intellectual_Property_Rights/ESA_copyright_notice (aviso antigo:
    vídeo "limited to direct viewing and/or file storage on a single computer")
- **Veredito: com ressalvas.** Só o item marcado CC BY-SA 3.0 IGO, e o mais seguro é usá-lo inteiro, sem
  alteração e sem nada por cima, como trecho separado. O resto do acervo é não comercial. A resolução não se sabe
  antes de baixar.

## 4 · Copernicus

- **Licença do dado:** o aviso legal da Comissão (PDF) concede, "in so far as it is lawful":
  - "(a) reproduction; (b) distribution; (c) communication to the public; (d) adaptation, modification and
    combination with other data and information";
  - acesso "free, full and open".

  O aviso não restringe o uso comercial.
- **Uso comercial / YouTube monetizado:** sim, para o dado Sentinel.
- **Crédito (texto exato):**
  - "'Copernicus Sentinel data [Year]' for Sentinel data";
  - quando adaptado: "'Contains modified Copernicus Sentinel data [Year]'".
- **Restrições:**
  - no portal Copernicus Data Space Ecosystem, o conteúdo que não é dado Sentinel é "Non-commercial use", sem
    obra derivada;
  - há cotas, e não se criam várias contas para furá-las.
  - A licença dos **vídeos prontos** do programa não foi localizada:
    - o copernicus.eu está arquivado;
    - a página de "copyright and licences" só trata da licença de marca;
    - o aviso legal dá 404;
    - o eu-space.europa.eu não teve aviso localizado.

    A regra geral dos sites da UE é CC BY 4.0 (seção 9), mas não foi conferida para esses vídeos.
  - Cuidado com a ESA: vídeo feito de dado Sentinel processado pela ESA pode sair na Standard Licence, não
    comercial (o Jakobshavn, seção 3).
- **Resolução real:** é dado, não footage (Sentinel-2 a 10 m por pixel). O timelapse sai na resolução que o canal
  montar. A exportação de timelapse do Copernicus Browser não foi conferida.
- **Quadros por segundo:** não se aplica.
- **Acesso automático:** APIs da CDSE, com conta e cotas
  (https://documentation.dataspace.copernicus.eu/Quotas.html). **Conclusão: script permitido pelas APIs, com
  conta.**
- **Termos lidos (27/09/2026):**
  - https://sentinels.copernicus.eu/documents/247904/690755/Sentinel_Data_Legal_Notice
  - https://dataspace.copernicus.eu/terms-and-conditions
  - https://www.copernicus.eu/en/access-data/copyright-and-licences
- **Veredito: com ressalvas.** Serve como matéria-prima de timelapse feito pelo canal, e já é base de mapa
  (`identidade.md` §6). Não é acervo de footage.

## 5 · EUMETSAT

- **NÃO CONFERIDO.**
  - https://www.eumetsat.int/about-us/terms-use e o `robots.txt` responderam **403**;
  - https://user.eumetsat.int/resources/user-guides/data-registration-and-licensing só carrega JavaScript.
- **O que o buscador resumiu**, sem ser lido na página e por isso sem valor de conferência:
  - o padrão seria uso pessoal e não comercial, com autorização para o resto;
  - o crédito, "©EUMETSAT [year]";
  - a CC BY-SA 3.0 IGO valeria só no Learning Zone.
- **Script ou navegador:** só navegador, com o Lucas vendo.
- **Veredito: NÃO CONFERIDO.** Pelo resumo, provavelmente não serve sem autorização.

## 6 · Satélites geoestacionários

### 6.1 · NOAA GOES (NESDIS / STAR)

- **Licença:** obra federal dos EUA. A NESDIS diz, sobre as imagens do Satellite Maps: "This imagery is not
  copyrighted. You may use this material for educational or informational purposes, including photo
  collections, textbooks, public exhibits, computer graphical simulations and internet web pages."
- **Uso comercial / YouTube monetizado:** sim, é domínio público federal (17 U.S.C. §105). A frase da NESDIS
  lista usos, não restringe.
- **Crédito:**
  - "NOAA supports an open data policy and we encourage publication of imagery from NOAA Satellite Maps; when doing
    so, please cite it as 'NOAA'";
  - na **GeoColor**, produto do CIRA (Colorado State University, não é órgão federal), a praça pede "CIRA/NOAA".
    Isso veio de resumo de busca e **não** foi confirmado na página: o leitor não achou texto de crédito nem de uso
    nas páginas do visualizador STAR, que chegam cortadas pelo menu.
- **Restrições:**
  - prefira as bandas e os produtos da NOAA;
  - a GeoColor leva o crédito do CIRA.
- **Resolução real:** a listagem oficial https://cdn.star.nesdis.noaa.gov/GOES19/ABI/FD/GEOCOLOR/ traz JPG de
  339², 678², 1808², 5424², 10848² e 21696², vários por dia, sem MP4 nem GIF. Um recorte de 3840×2160 cabe folgado
  no 10848². O vídeo se monta com ffmpeg.
- **Quadros por segundo:** o canal define na montagem.
- **Acesso automático:**
  - o `robots.txt` de www.star.nesdis.noaa.gov só veta diretórios internos, não `/GOES/`;
  - cdn.star.nesdis.noaa.gov não tem `robots.txt` (404).

  **Conclusão: script permitido.**
- **Termos lidos (27/09/2026):**
  - https://www.nesdis.noaa.gov/imagery/interactive-maps/how-use-the-interactive-satellite-maps
  - https://www.nesdis.noaa.gov/imagery/media-stills-animation/geostationary-satellites-media-gallery ("All images
    are public domain", nas galerias de renderização)
- **Veredito: recomendo.** Dá 4K de sobra, em domínio público, com acesso aberto. O vídeo é feito pelo canal.

### 6.2 · RAMMB / CIRA SLIDER

- **Licença:** a página (um aplicativo JavaScript) não traz termos. Só o rótulo "SLIDER by RAMMB / CIRA @ CSU" e os
  logos do CIRA e da NOAA. O CIRA é da Colorado State University: o domínio público federal não vale para o que é
  dele.
- **Resolução:** exporta PNG animado, GIF e quadros PNG. Não exporta MP4.
- **Acesso automático:** o `robots.txt` de rammb2.cira.colostate.edu dá **403**.
- **Veredito: com ressalvas, licença NÃO CONFERIDA.** Os mesmos quadros vêm da NOAA (6.1), com licença clara.

### 6.3 · Himawari pela JMA (Meteorological Satellite Center)

- **Licença:** "The Terms of Use is based on the Public Data License (Version 1.0)", "compatible with the Creative
  Commons Attribution License 4.0".
- **Uso comercial / YouTube monetizado:** "Commercial use of Content is also permitted."
- **Crédito (texto exato):**
  - "Source: Meteorological Satellite Center of JMA website (URL of relevant page)";
  - se editado, "a statement expressing that the Content has been edited". O exemplo da JMA: "Based on 'Chart/picture names' (Japan
    Meteorological Agency) (URL of relevant page)";
  - na imagem True Color Reproduction, a página pede os créditos mínimos: Japan Meteorological Agency (JMA), NOAA
    National Environmental Satellite, Data, and Information Service (NOAA/NESDIS) e Colorado State
    University-CIRA (CSU/CIRA).
- **Restrições:** direito de terceiro "is the responsibility of the user".
- **Resolução real:** não declarada. A página tem animação da última 1 h até as últimas 23 h, sem formato
  declarado.
- **Quadros por segundo:** não se aplica.
- **Acesso automático:** data.jma.go.jp não tem `robots.txt` (404), e os termos não falam de script. **Conclusão:
  script permitido.**
- **Termos lidos (27/09/2026):**
  - https://www.data.jma.go.jp/mscweb/en/general/note.html (termos de 28/01/2016)
  - https://www.jma.go.jp/jma/en/copyright.html
  - https://www.data.jma.go.jp/mscweb/data/himawari/
- **Veredito: com ressalvas.** A licença é boa, e cobre Ásia e Oceania. A resolução se mede antes.

### 6.4 · Himawari pelo NICT (Himawari-8 Real-time Web)

- **Licença:** "This web application and data included are not allowed for commercial uses."
- **Resolução:** 11.000×11.000 px (área Ásia-Oceania).
- **Termos lidos (27/09/2026):** https://himawari8.nict.go.jp/himawari8-help.htm
- **Veredito: não serve** (não comercial). Use a rota da JMA (6.3).

---

## 7 · Órgãos federais dos EUA: B-roll e drone

### 7.1 · National Park Service (NPS)

- **Licença:** domínio público, salvo nota. O aviso cita a lei: "any work of the U.S. Government" / "a work
  prepared by an officer or employee of the U.S. Government as part of that person's official duties". A página
  de B-roll do Grand Canyon diz: "All video files in this archive are 'public domain' clips. You are free to use
  these videos without a release from the National Park Service." A do Yosemite: "All footage is in the public
  domain and may be used for any purpose."
- **Uso comercial / YouTube monetizado:** sim. O aviso diz que, na republicação comercial, "the copyright notice
  must include a reference to the original U.S. Government work", com linguagem como "No protection is claimed in
  original U.S. Government works".
- **Crédito:** "a citation or acknowledgement of the National Park Service as the source is appreciated". É pedido.
  Os itens trazem "Credit: NPS".
- **Restrições:**
  - o Arrowhead é "registered trademark" e "may not be used without prior written permission". No Joshua Tree,
    clipe com o Arrowhead nem é oferecido;
  - "The videos must not be used to imply National Park Service endorsement …";
  - material de terceiro: "not all materials appearing on this website … are in the public domain".
- **Resolução real (amostras):**
  - **Grand Canyon:** "(1080p, 24fps)", de 21 a 58 s;
  - **Rocky Mountain** (aérea, 06/06/2025): domínio público ("Multimedia credited to NPS without any copyright
    symbol are public domain"), mas o leitor não achou o link de download nem a resolução;
  - **Joshua Tree:** "Additional B-Roll footage, including clips in 4K" no Flickr do parque (não conferido).
- **Quadros por segundo:** 24 no Grand Canyon.
- **Acesso automático:**
  - `robots.txt`: `Disallow: /search/`, `/ns/` e `loader.cfm`. As páginas de B-roll e de vídeo são livres;
  - a NPS Data API existe e pede chave de cadastro, mas os endpoints de multimídia não foram confirmados: a
    documentação carrega em JavaScript.

  **Conclusão: script permitido** nas páginas de B-roll. A busca do site, não.
- **Termos lidos (27/09/2026):**
  - https://www.nps.gov/aboutus/disclaimer.htm ("Last Updated: March 5, 2025")
  - https://www.nps.gov/grca/learn/photosmultimedia/b-roll_hd_index.htm
  - https://www.nps.gov/yose/learn/photosmultimedia/b-roll.htm
  - https://nps.gov/jotr/learn/photosmultimedia/broll.htm
- **Veredito: com ressalvas.** Serve para registro real de parque, em domínio público. Para B-roll 4K, não: a
  maioria é 1080p a 24 fps.

### 7.2 · U.S. Fish & Wildlife Service (USFWS)

- **Licença:** domínio público. A coleção de B-roll diz: "Feel free to download and use these when creating your
  video. We do ask you give USFWS credit."
- **Uso comercial / YouTube monetizado:** sim na imagem. A música tem outra regra: "Some of the video productions
  contain music that has been licensed to the U.S. Fish and Wildlife Service … Any non-private use by the Public of
  these videos products containing licensed music, requires that a separate license be obtained."
- **Crédito:** "U.S. Fish and Wildlife Service" (pedido). No NCTC, os cinegrafistas Brett Billings, Ryan Hagerty e
  Doug Canfield.
- **Restrições:** a música (acima).
- **Resolução real:** os B-rolls do NCTC são "Standard definition online", em MP4 "16x9 letterbox". A cópia HD
  sai por encomenda paga a uma contratada ("for a nominal fee"). O player é o Vbrick (fws.rev.vbrick.com).
- **Quadros por segundo:** não declarado.
- **Acesso automático:**
  - `robots.txt`: veta `/search/`, `/search*` e a busca facetada;
  - a antiga National Digital Library (digitalmedia.fws.gov) hoje redireciona para `fws.gov/search/images`,
    vetada.

  **Conclusão: script só nas páginas de coleção.** A busca, só pelo navegador.
- **Termos lidos (27/09/2026):**
  - https://www.fws.gov/library/collections/b-roll-videos
  - https://www.fws.gov/NCTC-wildlife-b-rolls
- **Veredito: não serve para 4K** (é SD). Com ressalvas para registro de fauna (há ursos de Kodiak, por exemplo).

### 7.3 · USDA Forest Service

- **Site próprio: NÃO CONFERIDO.** A página de vídeos da região 6 e o `robots.txt` de fs.usda.gov responderam
  **403**.
- **Pelo DVIDS**, que o canal já usa, há a unidade https://www.dvidshub.net/unit/USDAForestService. Amostra:
  vídeo 1008357, "Eldorado National Forest Landscape (B-Roll)":
  - gravado em 11/05/2026, 1 min;
  - "Public Domain";
  - resoluções de 800×450 a **1920×1080**.
- **Veredito: com ressalvas.** Chega pelo DVIDS e é registro real (floresta, incêndio). O que se viu é 1080p.

### 7.4 · U.S. Geological Survey (USGS)

- **Licença:** "USGS-authored or produced data and information are considered to be in the U.S. Public Domain."
  As páginas de vídeo marcam "Public Domain".
- **Uso comercial / YouTube monetizado:** sim.
- **Crédito (texto exato):** "Credit: U.S. Geological Survey", ou "Department of the Interior/USGS", ou "U.S.
  Geological Survey/photo by [nome]". No lançamento do Kīlauea: "credit the 'U.S. Geological Survey'".
- **Restrições:**
  - material que não é do USGS pede permissão do dono;
  - a imagem e a voz de funcionário podem ter direito de publicidade;
  - o identificador do USGS é marca registrada.
- **Resolução real (amostras):**
  - "Aerial video of the Southwest Rift Zone eruption of Kīlauea" (03/06/2024, 50 s) e "Video of Episode 15 of the
    Halemaʻumaʻu eruption" (26/03/2025): "Download Video" em MP4 (servido de um bucket S3 do USGS), **sem
    resolução declarada**;
  - no lançamento de 04/10/2016: "a 4K resolution .MP4 version of the video footage", com ProRes a pedido.
- **Quadros por segundo:** não declarado.
- **Acesso automático:** `robots.txt` veta `/search/`. `/media/` e a galeria são livres. **Conclusão: script
  permitido** nas páginas de mídia.
- **Termos lidos (27/09/2026):**
  - https://www.usgs.gov/information-policies-and-instructions/copyrights-and-credits
  - https://www.usgs.gov/news/new-high-definition-video-active-hawaiian-volcano-lava-lake-available-free
- **Veredito: recomendo para registro real** (vulcões, terremotos, rios; o USGS já está aprovado). A resolução se
  mede no arquivo.

### 7.5 · NOAA (três portas que abriram; a política geral não)

- **A política geral da NOAA não abriu:** https://www.noaa.gov/disclaimer respondeu **403** (NÃO CONFERIDO).
- **NOAA Ocean Exploration:**
  - **Licença:** "Unless otherwise noted (copyrighted material for example), information presented on this
    website is in the public domain and may be distributed freely."
  - **Crédito:** "please refer to the original source page and use the credit that is listed with the
    image/video".
  - **Restrições:** há imagem e vídeo com copyright ("These copyrights are printed on the image or mentioned in
    image captions").
  - **Resolução:** "we can typically provide original source files up to ProRes quality". O portal de vídeo da
    NCEI deu tempo esgotado (NÃO CONFERIDO).
  - **Acesso automático:** o `robots.txt` só veta `/map/*`.
  - **Termos lidos:** https://oceanexplorer.noaa.gov/backmatter/faqs.html (27/09/2026).
- **NOAA Fisheries (videos.fisheries.noaa.gov):**
  - **Licença:** "B-roll packages are in the public domain and you can download them for use as long as you
    credit NOAA Fisheries."
  - **Crédito:** "NOAA Fisheries".
  - **Restrições:** cada pacote abre com uma cartela de atribuição e os números de autorização (permit)
    aplicáveis, que se corta.
  - **Resolução:** não declarada (MP4, player Brightcove). Amostra: "B-Roll: Saildrone Launch and Shakedown
    Cruise", 9 min 35 s.
  - **Acesso automático:** o `robots.txt` veta `/search/`, e as categorias são livres.
  - **Termos lidos:** https://videos.fisheries.noaa.gov/category/videos/b-roll-by-topic (27/09/2026).
- **NOAA National Marine Sanctuaries:**
  - **Licença:** a página diz: "Public domain photos and videos are publicly owned and available for free for news
    media and non-commercial scientific and educational uses." A frase restringe o uso, embora seja obra federal.
    Pedido de vídeo: onmsoutreach@noaa.gov.
  - **Termos lidos:** https://sanctuaries.noaa.gov/news/media/ (27/09/2026).
- **Veredito: com ressalvas.**
  - Ocean Exploration e Fisheries servem para registro real de mar e pesca, com a resolução medida no arquivo.
  - Sanctuaries só com pergunta ao órgão, ou com decisão do Lucas sobre a frase "non-commercial".

### 7.6 · FEMA (e a diretriz do DHS)

- **Licença:**
  - a FEMA diz: "In general, FEMA imagery, video and audio materials are not copyrighted";
  - a diretriz do DHS (Last Updated: 07/19/2022): "Videotape, video files and motion picture recordings made
    available on DHS.gov are considered public domain and are not protected by copyright unless noted." "A
    recording may be reproduced and distributed without further permission from DHS."
- **Uso comercial / YouTube monetizado:** sim, com ressalva de pessoa: "Use for commercial purposes of a portion or
  segment containing talent or a recognizable person may infringe a right of publicity and permission should be
  obtained."
- **Crédito (texto exato):** "Our preference for the credit line is: 'U.S. Department of Homeland Security /
  <creator's name>'."
- **Restrições:** "Copyrighted music or footage, which is incorporated in a production, may not be used unless
  permission is obtained from the copyright owner."
- **Resolução real:** a Media Library da FEMA classifica o vídeo como "Youtube Video", isto é, embed. Baixar do
  YouTube é proibido (seção 11). O caminho é o DVIDS: a unidade https://www.dvidshub.net/unit/FEMA tem 714
  vídeos. A resolução se confere item a item.
- **Acesso automático:** o `robots.txt` da fema.gov veta `/search/` e `/search?`, com `Crawl-delay` de 15. Pelo
  DVIDS, a API que o canal já usa.
- **Termos lidos (27/09/2026):**
  - https://www.fema.gov/faq/add-fema-widget-video-photo-audio-my-website
  - https://www.dhs.gov/photo-video-audio-use-guidelines
- **Veredito: com ressalvas.** Registro real de desastre, pelo DVIDS. Não é B-roll 4K.

### 7.7 · State Department

- **NÃO CONFERIDO.** https://www.state.gov/copyright-information e o `robots.txt` responderam **403**.
- **Script ou navegador:** só navegador, com o Lucas vendo.

---

## 8 · Comissão Europeia: Audiovisual Service e EbS (Europe by Satellite)

- **Licença:** as condições de uso dizem que "content owned by the EU on this website is licensed under the Creative
  Commons Attribution 4.0 International License". A mesma base está no aviso geral da UE: "Content owned by the EU
  on this website is licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) licence".
- **Uso comercial / YouTube monetizado:** a CC BY 4.0 permite. Mas o FAQ do serviço diz, em vídeo, foto e áudio:
  "The material is offered free of charge for EU-related information and educational purposes." A página do EbS
  fala em material "free of charge to media professionals", para "reporting on European issues, as well as for
  educational purposes". A licença CC BY 4.0 está nas condições de uso; a frase do FAQ descreve o serviço. A
  leitura conservadora usa o acervo em assunto ligado à UE.
- **Crédito (texto exato):** "© European Union, 202X, licensed under CC BY 4.0", com o ano e a indicação de
  mudanças.
- **Restrições:**
  - não distorcer: "must not distort the original meaning or message of the content";
  - pessoa privada: "content depicting private individuals may not be reproduced, modified or distributed without
    prior written authorisation from the depicted persons";
  - música: "may be subject to prior clearance of the music rights by the user";
  - terceiros pedem a permissão do dono. Exemplo real: o stockshot "European stock markets and traders"
    (I-271165, 20/05/2025) traz trechos "©BORSA ITALIANA EURONEXT GROUP" e da Deutsche Börse, "free of charge
    for journalistic purposes … Use for own advertising purposes is not permitted";
  - o FAQ diz ainda: "VNRs and stockshots can be edited by the user, however, documentaries must be used and shown
    in their complete versions."
- **Resolução real:**
  - FAQ: "MPEG4 H264 at 11 megabits per second for high resolution" e "HLS adaptive streaming from 480p to 1080p";
  - EbS: "1920x1080 / 25fps / Progressive / H.264".

  **O máximo é 1080p.**
- **Quadros por segundo:** 25.
- **Acesso automático:** o `robots.txt` diz `Allow: /` para todos. Não há API documentada. **Conclusão: script
  permitido.**
- **Termos lidos (27/09/2026):**
  - https://audiovisual.ec.europa.eu/en/conditions-of-use
  - https://audiovisual.ec.europa.eu/en/faq
  - https://audiovisual.ec.europa.eu/en/about-ebs
  - https://european-union.europa.eu/legal-notice_en
- **Veredito: com ressalvas.** Serve para registro real de instituições e eventos da UE, em CC BY 4.0, com o
  crédito na tela e o que for de terceiro conferido. Não serve para B-roll 4K (1080p a 25 fps).

## 9 · Parlamento Europeu (Multimedia Centre)

- **Licença:** o aviso legal do próprio PE, que não é CC: "EP content is available for personal use or for further
  non-commercial or commercial dissemination, provided the conditions stipulated in the EP legal notice are
  respected."
- **Uso comercial / YouTube monetizado:** permitido, com as condições:
  - "Videos, infographics and other edited material may not be edited and must be shown in its entirety";
  - "All other kinds of video material available on this website may be edited for EU information and education
    purposes".
- **Crédito (texto exato):** "© European Union, [year(s)] – Source: European Parliament" ou "© European Union,
  [year(s)] – EP".
- **Restrições:**
  - não apagar nem alterar a indicação de autor e fonte;
  - marcas e logo pedem consentimento;
  - terceiros: "Re-use does not apply … to content which is subject to intellectual property rights of third
    parties unless explicitly expressed";
  - música: "must declare and pay all the music rights to their national copyright collecting society".
- **Resolução real: NÃO CONFERIDA.** O `robots.txt` de multimedia.europarl.europa.eu tem `Disallow: /` para
  ClaudeBot, Claude-User, Claude-SearchBot e outros agentes de IA. Para os demais robôs, veta toda URL com `?` ou
  `&` (a busca). Nenhuma página de item foi aberta.
- **Acesso automático:** vetado ao Claude no site dos itens. **Conclusão: só navegador, com o Lucas vendo.**
- **Termos lidos (27/09/2026):**
  - https://www.europarl.europa.eu/website/multimedia-centre/en/about_us.html
  - https://www.europarl.europa.eu/legal-notice/en/ (o `robots.txt` de www.europarl.europa.eu não veta esses caminhos)
- **Veredito: com ressalvas.** Registro real do Parlamento. A edição fica limitada, e a pesquisa é só pelo
  navegador.

## 10 · kremlin.ru

- **NÃO CONFERIDO.** O site não respondeu ao leitor em quatro tentativas: http e https, en.kremlin.ru,
  www.kremlin.ru e o `robots.txt`.
- **O que o buscador resumiu, não conferido:** o conteúdo do site estaria em CC BY 4.0, com referência à fonte, e o
  site tem vídeo.
- **Além da licença:** é registro de governo parte em conflito. Pesa na `voz.md` e no §2.2 da mídia (pessoa e
  assunto sensível), e é decisão do Lucas.
- **Veredito: NÃO CONFERIDO.** Para B-roll de geografia, não serve de todo jeito: é agenda presidencial.

## 11 · Canais oficiais no YouTube com CC BY

- **Como confirmar a licença de cada vídeo:**
  - **na página:** a licença aparece na descrição ("check video descriptions to see license information"), e a
    busca tem o filtro "Creative Commons" ("select Creative Commons from the list of advanced search filters");
  - **por script:** a YouTube Data API v3, `videos.list` com `part=status`, devolve `status.license`, "The video's
    license", com os valores `creativeCommon` e `youtube`. Pede chave de API do Google.
- **O que a CC BY pede no YouTube:** "Title of the work, Author of the work, Source of the work (URL), License info,
  such as 'is licensed under CC BY.'"
- **O ponto que decide: o arquivo não pode vir do YouTube.**
  - Os Termos do YouTube dizem: "You may not access, reproduce, download, distribute … any Content, except: (a) if
    authorized expressly by the Service; or (b) with prior written permission from YouTube and, if applicable, the
    respective rights holders".
  - Sobre robô: "You may not access the Service using any automated means (such as robots, botnets or scrapers)",
    salvo buscadores e permissão escrita.
  - As políticas da API proíbem "download, import, backup, cache, or store copies of YouTube audiovisual content".
  - Por isso, a CC BY no YouTube serve de **pista**: o arquivo se busca no site do próprio órgão (ou no DVIDS), e a
    licença de lá é a que vale.
- **Risco:** a CC BY é marcada pelo dono do canal. O YouTube só diz que se marca conteúdo original ("If there's a
  Content ID claim on your video, you can't mark your video with the Creative Commons Attribution license"). Canal
  oficial pode marcar CC BY um vídeo com trecho ou música de terceiro.
- **Termos lidos (27/09/2026):**
  - https://support.google.com/youtube/answer/2797468?hl=en
  - https://www.youtube.com/t/terms (vigência mostrada: 5 de janeiro de 2022)
  - https://developers.google.com/youtube/v3/docs/videos (atualizado em 16/09/2026)
  - https://developers.google.com/youtube/terms/developer-policies (atualizado em 14/09/2026)
- **Veredito: com ressalvas.** Só como pista. Nunca se baixa do YouTube.

## 12 · Pond5: Public Domain Project

- **NÃO CONFERIDO.** O `robots.txt`, https://www.pond5.com/public-domain e https://www.pond5.com/legal/license
  responderam **403**.
- **O que o buscador resumiu, não conferido:** a própria Pond5 diria que cabe ao usuário confirmar que o item é
  mesmo de domínio público nos EUA e em cada país.
- **Além disso:** boa parte desse acervo é digitalização de NASA, NARA e outros, que o canal já pega na origem.
- **Veredito: NÃO CONFERIDO.**

## 13 · Outras agências espaciais

### 13.1 · JAXA

- **Licença:** sem permissão, só "press (media) activity/scientific research/educational activity/ and/or private
  use".
- **Uso comercial / YouTube monetizado:** "Your use of the Materials for business or commercial purposes without
  the prior permission of the copyright holder (JAXA) is strictly prohibited." O arquivo digital da JAXA diz também
  "We have now suspended the procedure for usage of JAXA images and videos that requires payment". Do canal oficial
  deles no YouTube, só o embed, com a linha "From the JAXA official YouTube channel".
- **Crédito:** "Provided by Japan Aerospace Exploration Agency (JAXA)", "Courtesy of JAXA", "(C) JAXA".
- **Restrições:** "No modification is allowed to any of the Materials, except for a modification needed for
  indicating their source." O logo pede permissão.
- **Termos lidos (27/09/2026):**
  - https://global.jaxa.jp/policy.html (29/03/2022)
  - https://jda.jaxa.jp/service.php?lang=e
- **Veredito: não serve.** É uso comercial sem permissão, e sem poder editar.

### 13.2 · DLR (Alemanha)

- **Licença:** onde marcado, "Creative Commons Attribution-NonCommercial-NoDerivatives 3.0 Germany (CC BY-NC-ND
  3.0)". Sem marca, não há CC, e a licença sai pelo contato da comunicação corporativa.
- **Crédito:** "'Video: DLR, CC BY-NC-ND 3.0'".
- **Acesso automático:** o `robots.txt` do dlr.de libera tudo.
- **Termos lidos (27/09/2026):**
  - https://www.dlr.de/en/service/imprint
  - https://eoweb.dlr.de/egp/resources/termsOfUse
- **Veredito: não serve** (NC e ND).

### 13.3 · Agência Espacial Canadense (CSA)

- **Licença:** "for personal, educational or informational non-commercial use". O comercial pede "prior written
  permission".
- **Crédito:** "'© Canadian Space Agency', 'Credit: Canadian Space Agency'".
- **Restrições:** "You do not use the materials for partisan or political purposes."
- **Termos lidos (27/09/2026):** https://www.asc-csa.gc.ca/eng/terms.asp (modificado em 15/11/2023)
- **Veredito: não serve.**

---

## 14 · Outras que achei

### 14.1 · ESO (European Southern Observatory)

- **Licença:** "Unless specifically noted, the images, videos, and music distributed on the public ESO website …
  are licensed under a Creative Commons Attribution 4.0 International License". A mesma página diz que "music,
  scientific papers, code, and text other than press releases …" ficam fora da CC BY 4.0 (a exceção é o Music
  Archive). Trate a trilha como não liberada.
- **Uso comercial / YouTube monetizado:** sim, pela CC BY 4.0, sem compartilha-igual. Adaptar é permitido.
- **Crédito (texto exato):** "The full image or footage credit must be presented in a clear and readable manner to
  all users, with the wording unaltered (for example: 'ESO/José Francisco')". Nas amostras: "ESO/C. Malin
  (christophmalin.com)" e "ESO/S. Guisard (www.eso.org/~sguisard)". Vai também o link da licença.
- **Restrições:**
  - pessoa: "If an image includes a picture of an identifiable person, using that image for commercial purposes is
    not permitted";
  - logo protegido;
  - sem sugerir endosso.
- **Resolução real (amostras):**
  - "Dance of the dishes" (uhd-cm-alma-mw1, 13/05/2019, 53 s):
    - "Ultra HD (4K)" em H.264 (193,1 MB) e H.265;
    - broadcast "4K Ultra HD" de 4,5 GB;
    - 25 fps;
  - "A day in the Atacama Desert" (2010): HD broadcast em 720p. Os antigos são baixos.
- **Quadros por segundo:** 25 (2019); 30 em outro item antigo.
- **Acesso automático:** o `robots.txt` veta só `/*/bin/search`, `/*/bin/WebSearch` e páginas de comitês. A busca
  `/public/videos/?search=` respondeu. Não há API documentada. **Conclusão: script permitido.**
- **Termos lidos (27/09/2026):** https://www.eso.org/public/copyright/
- **Veredito: recomendo, para nicho.** É 4K real em CC BY 4.0 do Atacama, dos Andes e do céu austral, com o
  crédito exato na tela e sem pessoa. A taxa de 25 fps pede conversão para os 30 do canal.

### 14.2 · Google Earth Timelapse (Google Earth Engine)

- **Licença:** "This dataset is licensed under Creative Commons Attribution 4.0 International License".
- **Uso comercial / YouTube monetizado:** sim, pela CC BY 4.0.
- **Crédito (texto exato):** "Google Earth Timelapse (Google, Landsat, Copernicus)". O período Sentinel "Contains
  modified Copernicus Sentinel data [2015-present]". Vão ainda o link da licença e a indicação de mudança.
- **Restrições:**
  - é satélite, 30 m por pixel até 2014 e 19,11 m de 2015 em diante: serve para cidade, rio e geleira vistos de
    cima, não para close;
  - as versões 3D e "with labels" trazem rótulo de lugar e ano. A versão `src` vem sem rótulo.
- **Resolução real:** "4k", sem os pixels declarados. Os MP4 ficam em
  `storage.googleapis.com/earthengine-timelapse/2023/curated/mp4/…`: 3D com rótulo, 2D com rótulo (3 voltas) e 2D
  sem rótulo (`src`).
- **Quadros por segundo:** não declarado.
- **Acesso automático:** os links são diretos e públicos. O `robots.txt` de developers.google.com só veta
  `/youtube/partner/`. **Conclusão: script permitido.**
- **Termos lidos (27/09/2026):**
  - https://developers.google.com/earth-engine/timelapse/videos
  - https://developers.google.com/earth-engine/timelapse/about ("Last updated 2026-09-16 UTC")
- **Veredito: recomendo.** É talvez a fonte mais "de geografia" do levantamento. Mas não é acervo de governo, e
  entra só se o Lucas a aprovar (§7.3).

### 14.3 · OTAN (NATO)

- **Licença:** "Photos, videos and articles are released under the legally recognized terms of 'Fair Use' to
  members of the press, academia, non-profits and the general public." "Fair use" é uma doutrina da lei americana,
  não uma licença.
- **Uso comercial / YouTube monetizado:** "No material produced by NATO is to be sold, used for outside advertising
  or promotional purposes of any kind." O vídeo monetizado não vende o material, mas o texto não o cobre por nome.
- **Crédito:** "All content taken from NATO and republished must be clearly credited or sourced to NATO."
- **Restrições:** "No material is to be used in programs, articles or online publications of any kind that defame
  NATO or its member countries". É dado "for use in objective and balanced content".
- **Resolução e acesso:** o portal de B-roll natomultimedia.tv não foi conferido.
- **Termos lidos (27/09/2026):** https://nato.int/en/about-us/official-texts-and-resources/use-of-nato-content-and-brand
- **Veredito: com ressalvas.** Só registro real, e o "fair use" é base fraca para um canal monetizado.

### 14.4 · Ministério da Defesa britânico (Defence Imagery)

- **Licença:**
  - "Open Government Licence (OGL)": "a broad commercial, free re-use licence but does not allow the re-use of
    imagery containing personal data. (This includes identifiable persons in the imagery.)";
  - o resto sai pela "MOD News/Editorial Imagery Licence", só para "reporting of persons, places, matters, topics,
    events and exhibitions".
- **Crédito (OGL v3.0):** "Contains public sector information licensed under the Open Government Licence v3.0."
- **Restrições:** a OGL exclui "personal data", "military insignia" e "third party rights".
- **Resolução e acesso: NÃO CONFERIDOS.** A declaração de copyright do acervo
  (https://www.defenceimagery.mod.uk/fotoweb/Copyright.fwx) respondeu **403**. Não há como ver, por script, qual
  item está na OGL.
- **Termos lidos (27/09/2026):**
  - https://www.gov.uk/government/publications/ministry-of-defence-copyright-and-merchandising-information-and-documents/ministry-of-defence-copyright-licensing-information
    (atualizado em 05/06/2026)
  - https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/
- **Veredito: com ressalvas, acervo NÃO CONFERIDO.** Só o item pré-liberado na OGL, sem pessoa e sem insígnia.
  Pela regra de insígnia, sobra pouco vídeo militar. A pesquisa é só pelo navegador.

### 14.5 · ONU (UN Audiovisual Library)

- **Licença:** "UN footage is not in the public domain, therefore, any use of the footage must be authorized by the
  United Nations"; "a license agreement must be signed … Licensing fees may apply."
- **Termos lidos (27/09/2026):** https://media.un.org/en/copyright_use
- **Veredito: não serve** (licença paga).

### 14.6 · NOIRLab

- **NÃO CONFERIDO.** https://noirlab.edu/public/copyright/ e o `robots.txt` chegaram vazios ao leitor.

---

## 15 · O que ficou NÃO CONFERIDO

Nenhum destes foi contornado. A conferência que falta se faz pelo navegador do app, com o Lucas vendo.

**Sites que recusaram a leitura:**
- **EUMETSAT:** 403 nos termos e no `robots.txt`; o portal de usuário só carrega JavaScript.
- **kremlin.ru:** sem resposta em quatro tentativas (http e https).
- **Pond5 Public Domain:** 403 no `robots.txt`, na página de domínio público e na licença.
- **State Department:** 403 na página de copyright e no `robots.txt`.
- **USDA Forest Service**, site próprio: 403. Só o que está no DVIDS foi lido.
- **noaa.gov/disclaimer:** 403 na política geral da NOAA. Os subsites (Ocean Exploration, Fisheries, Sanctuaries,
  NESDIS) foram lidos.
- **Parlamento Europeu, páginas de item:** o `robots.txt` de multimedia.europarl.europa.eu veta o Claude. A
  resolução e o crédito por item faltam.
- **MOD britânico:** 403 na declaração de copyright do Defence Imagery.
- **NOIRLab:** páginas vazias.
- **RAMMB/CIRA SLIDER:** termos não localizados; `robots.txt` do rammb2 com 403.

**Páginas que não abriram ou não trazem o dado:**
- **NOAA OER Video Portal:** tempo esgotado.
- **FAQ da ESA sobre a CC** (open.esa.int): o domínio não resolveu.
- **Licença dos vídeos prontos do programa Copernicus:** o copernicus.eu está arquivado, com o aviso legal em 404,
  e o eu-space.europa.eu não teve aviso localizado.
- **O crédito "CIRA/NOAA" da GeoColor:** veio de resumo de busca, não da página.
- **4K do NPS no Flickr de parques** e **endpoints de multimídia da API do NPS**: a documentação carrega em
  JavaScript.
- **natomultimedia.tv:** resolução e `robots.txt`.

**Resolução não declarada na página do item** (medir no arquivo antes da cena, pela régua do canal):
- ESA ("SOURCE MP4");
- USGS;
- NOAA Fisheries;
- Himawari (JMA);
- Google Earth Timelapse (só "4k");
- vídeos do Gateway da ISS;
- itens da FEMA e do Forest Service no DVIDS;
- a aérea do NPS em Rocky Mountain.

## 16 · Observações que valem para todas

- **Música embutida é o maior risco de Content ID** nas fontes livres. Aparece em:
  - NASA SVS e images.nasa.gov (a compilação "Earth in 4K" de 2023 diz que a música "requires a license");
  - USFWS;
  - Parlamento Europeu e Comissão Europeia (a música pede liberação à parte);
  - ESO (a música fica fora da CC BY).

  O canal já monta o som à parte, mas o clipe deve entrar **sem a trilha original**.
- **Quadros por segundo:** as fontes misturam 24 (NPS), 25 (UE e ESO), 29,97 (NASA JSC) e 30 ou 60 (SVS). O canal
  masteriza a 30. Converter 24 ou 25 para 30 pode dar trepidação: é ponto para o conferente olhar.
- **O DVIDS já abre duas portas civis:** as unidades FEMA (714 vídeos) e USDA Forest Service. A API do DVIDS que o
  `buscar-midia` usa chega a elas sem fonte nova.
- **O `buscar-midia` não consulta** SVS, GOES, JMA, ESO nem o Timelapse. Qualquer um deles, se o Lucas aprovar,
  pede um caminho do canal (as APIs e listagens acima permitem script), com a mesma procedência (URL, licença,
  crédito, data e sha256).
- **Crédito na tela:**
  - pela regra de hoje (§7.3), domínio público federal vai sem crédito na tela e com a procedência gravada;
  - as fontes com licença (CC BY 4.0 da UE, da ESO e do Google; CC BY-SA da ESA; OGL; JMA) exigem o crédito, e a
    CC pede também o link da licença (na descrição) e a indicação de mudança;
  - a ESO exige o crédito "unaltered".
