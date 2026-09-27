# Acervos candidatos, grupo 2: governos de outros países e organismos internacionais

Levantamento para o Lucas escolher. **Nada aqui é regra do canal.** Hoje o `marca/midia.md` §7.3 deixa fora "toda
outra fonte gratuita" além de Commons, NASA, NARA, USGS, LoC, Smithsonian e as fontes federais dos EUA. Cada
candidato abaixo só entra com decisão dele.

## Como foi feito (27/09/2026, entre 15h15 e 16h05 de Brasília)

- **robots.txt:** um pedido por domínio, por script, com o User-Agent do canal
  (`regie/0.1 (canal alpha-point; ...)`), sem repetir e sem trocar cabeçalho. A resposta de cada um foi lida em dois
  papéis:
  - o do **script do canal**, que cai no grupo `User-agent: *`;
  - o do **agente** (WebFetch, que se apresenta como `Claude-User`).
- **Termos:** lidos na página da própria fonte, pelo WebFetch. Quando o WebFetch devolveu a página vazia (aplicação em
  JavaScript), li o HTML uma vez pelo script, com o robots conferido antes.
- **Amostras:** uma ou duas páginas de item por fonte.
  - **Nenhum arquivo de mídia foi baixado.** Em quatro casos fiz um `HEAD`, que só traz o tamanho do arquivo, sem o
    conteúdo: Câmara, Casa Rosada, EU AV Service e Taiwan (este redirecionou e não deu tamanho).
  - No Flickr, a resolução vem da página de tamanhos (`/sizes/o/`).
- **Recusa não contornada:** 403, desafio do Cloudflare, Incapsula, AWS WAF, Akamai, 402, robots que veta o `Claude-User`
  e `Content-Signal: ai-input=no`. Nesses casos não tentei outro cliente e marquei **NÃO CONFERIDO**.
- **Timeout ou falha de conexão:** também NÃO CONFERIDO. Não usei cópia arquivada.
- **Evidências:**
  - robots salvos em `scratchpad/acervos/_g2/robots/`, com registro em `_log.jsonl`;
  - HTML lido em `scratchpad/acervos/_g2/pg/`.

## Duas coisas que valem para vários

**1. Flickr.** Muitos governos e organismos publicam lá.
- O robots do Flickr (`www` e `api.flickr.com`, arquivo idêntico) veta tudo ao grupo `*` (`Disallow: /`). O script do
  canal não pode ler nem a API.
- O `Claude-User` pode abrir páginas de foto e de tamanhos, mas não a busca (`Disallow: /search`).
- **Conclusão:** no Flickr se busca **só pelo navegador**. O agente pode conferir a página de um item já escolhido.
- A licença vale **por foto**, e contas da mesma instituição misturam licenças.

**2. ShareAlike (BY-SA) num vídeo.** Vale para ESA, Senado e Korea.net. Texto lido na licença CC BY-SA 3.0 IGO, em
creativecommons.org/licenses/by-sa/3.0/igo/legalcode:
- a sincronização com imagem em movimento só vira "Adaptation" quando a obra é **musical**: "where the Work is a
  musical work, performance, or phonogram";
- "including the Work in a Collection is not an Adaptation";
- se a imagem for modificada, o §4(b) diz que isso "does not require the Collection apart from the Adaptation itself
  to be made subject to the terms of the Applicable License".

Na prática:
- **o vídeo do canal não precisa virar BY-SA;**
- a foto recortada ou tratada, ela sim, fica BY-SA;
- é preciso indicar a mudança e dar o link da licença (na descrição do YouTube, por exemplo).

Isto é leitura da licença, não parecer de advogado.

## Tabela-resumo

| Fonte | Mídia | Licença | Crédito | 4K? | Script ou navegador | Veredito |
|---|---|---|---|---|---|---|
| Copernicus Sentinel (UE/ESA) | dado de satélite (imagem se gera) | acesso livre e aberto por lei da UE | `Contains modified Copernicus Sentinel data [ano]` | sim, por render (dado de 10 m) | script (API STAC/OData) | **recomendo** |
| Nationaal Archief (Holanda) | foto histórica, ~418 mil | CC0 / Public Domain | não obrigatório (pede fotógrafo + Nationaal Archief) | foto ~A4 a 300 dpi (≈3.500 px no lado maior) | a API está fora do ar; o Commons espelha | **recomendo** |
| EU Audiovisual Service | foto, vídeo, stockshots | CC BY 4.0 | `© European Union, 202X, licensed under CC BY 4.0` | vídeo até 1080p; foto sem dimensão exposta | robots libera tudo; site em JS, sem API → navegador | **recomendo** (com os cuidados) |
| Câmara dos Deputados (BR) | foto | "Creative Commons BY" (versão não dita) | `Nome do Fotógrafo/Câmara dos Deputados` | foto: arquivo "Grande" de 4 a 7 MB em 2026 | script pode | **recomendo** |
| NRCan, série temporal NAPL (Canadá) | mosaico de foto aérea histórica 1932–2004 | OGL–Canada 2.0 | `Contains information licensed under the Open Government Licence – Canada.` | sim, por recorte (50–100 cm/pixel) | script (STAC, WMS, WCS; crawl-delay 20) | **recomendo** (nicho) |
| ESA | imagem de observação da Terra; vídeo | CC BY-SA 3.0 IGO (só os itens marcados) ou ESA Standard (não comercial) | ex.: `contains modified Copernicus Sentinel data (2025), processed by ESA, CC BY-SA 3.0 IGO` + link | imagem: TIF de 907 MB; os vídeos da amostra são Standard | páginas por script (2 s); a busca `/esearch` é vetada | com ressalvas |
| Parlamento Europeu (Flickr) | foto | CC BY 4.0 (por foto) | `CC-BY-4.0: © European Union 2026 – Source: EP` | foto 4010×2673 | só navegador (Flickr; sites do PE vetam) | com ressalvas |
| Riksantikvarieämbetet, Arkivsök (Suécia) | foto de paisagem, cidade, aérea, 1860→hoje | CC BY / CC0 / PDM por item; pessoa viva: BY-NC-ND | "ange gärna fotograf och källa" | "alta resolução grátis" (não medi) | sem robots; app em JS | com ressalvas |
| AIEA (Flickr) | foto | CC BY 4.0 (por foto) | `Photo Credit: <nome> / IAEA` | foto 8120×5413 | só navegador; o site da AIEA deu 402 | com ressalvas |
| Presidência de Taiwan | foto | OGDL 1.0 (site) / CC BY 4.0 (Flickr) | `Official Photo by <nome> / Office of the President` | não: no máx. 1567×1044 | site por script; Flickr no navegador | com ressalvas |
| Kantei (Japão) | foto; vídeo no YouTube | Public Data License 1.0 (compatível com CC BY 4.0) | `Source: Official Website of the Prime Minister's Office of Japan (URL)` | não: foto 980×654 | script pode | com ressalvas |
| Casa Rosada (Argentina) | foto | CC BY 2.5 Argentina | a página não dá o texto | não: arquivo original de ~200 KB | script pode | com ressalvas |
| Argentina.gob.ar | site | CC BY 4.0 "excepto cuando se declare lo contrario" | não especificado | não conferido | script (crawl-delay 10) | com ressalvas |
| DOC, Nova Zelândia | foto do site | CC BY 4.0 (fotos marcadas "DOC") | `Source: Department of Conservation (NZ)` | não: "não fornecemos cópias em alta" | `/images/` vetado a script → navegador | com ressalvas |
| Nasjonalarkivet (Noruega), Flickr Commons | foto histórica | "No known copyright restrictions" (não é licença) | fotógrafo + Riksarkivet + referência | amostra 1423×1423 | só navegador | com ressalvas |
| Riksarkivet (Suécia) | documento digitalizado, algumas fotos | PDM na maioria dos documentos; foto caso a caso | `Riksarkivet, [referenskod]` | não conferido | busca vetada ao Claude e aos parâmetros de busca → navegador | com ressalvas |
| Gobierno de Chile (Flickr) | foto | CC BY 2.0 | `Gobierno de Chile` | não conferido | navegador | com ressalvas (conta parada desde 2016) |
| MOD, Reino Unido (OGL) | foto, vídeo | OGL v3, **só sem pessoa identificável** | `Reproduced under the terms of the Open Government Licence.` | NÃO CONFERIDO (portal deu 403) | navegador | com ressalvas |
| Canada.ca (padrão dos sites) | todo tipo | uso comercial só com permissão escrita | — | — | — | não serve |
| DND/CAF, Combat Camera (Canadá) | foto, vídeo | permissão automática só "Canada wide" e abaixo de CAD 10 mil/ano | `© All rights reserved. (...) reproduced with the permission of DND/CAF (ano)` | — | — | não serve |
| UK Parliament (Flickr) | foto | CC BY-NC-ND 4.0 | `© House of Commons` | — | — | não serve (NC/ND) |
| Number 10 (Flickr) | foto | CC BY-NC-ND 4.0 | `Picture by <nome> / No 10 Downing Street` | — | — | não serve (NC/ND) |
| Defence Imagery, Austrália | foto, vídeo | "I agree not to use images for any Commercial Purposes" | — | — | — | não serve |
| Agência Brasil / EBC | foto, texto | "© Todos os direitos reservados pela EBC"; portal "sem intuito comercial" | "indicação da fonte" | — | — | não serve (hoje) |
| Senado Federal (Agência Senado) | foto, vídeo | Flickr diz CC BY-SA 4.0; a política do Senado veda uso comercial | `Foto: <nome>/Agência Senado` | foto 3820×2547 | navegador | não serve (conflito; só com confirmação escrita) |
| Planalto / gov.br | site, foto | CC BY-ND 3.0 | — | — | — | não serve (ND) |
| JapanGov (japan.go.jp) | foto, texto | uso privado; não se modifica sem permissão | — | — | — | não serve |
| gob.mx (México) | site, foto | "no deberá modificar, reproducir o mostrar pública o comercialmente" | — | — | — | não serve |
| Korea.net (Flickr) | foto | Flickr diz CC BY-SA 4.0; a descrição restringe a notícia e fim público | — | foto 8192×5464 | navegador | não serve (conflito) |
| Rigsarkivet (Dinamarca) | arquivo | nenhuma licença declarada; lei de direito autoral | "referir … Rigsarkivets samlinger" | — | — | não serve |
| ONU / UN Photo | foto | taxa para filme/vídeo (US$ 70 por foto); Flickr "All rights reserved" | `UN Photo/<nome>` | — | — | não serve |
| UNESCO | tudo | uso comercial vedado sem licença específica; proíbe raspagem | — | — | proíbe robô | não serve |
| OTAN | foto, vídeo | "Fair Use" (não é licença); Flickr CC BY-NC-ND 4.0 | "credited or sourced to NATO" | — | — | não serve |
| Banco Mundial (Flickr) | foto | CC BY-NC-ND 4.0 | `Photo: <nome> / World Bank` | — | — | não serve (NC/ND) |
| FMI | foto | site: uso pessoal e não comercial; Flickr CC BY-NC-ND 2.0 | `IMF Photo/<nome>` | — | proíbe download em massa | não serve |
| UIT (Flickr) | foto | CC BY-NC-SA 4.0 | `©ITU` | — | — | não serve (NC) |

NÃO CONFERIDO (detalhes na seção final):
- **Europa:** a The National Archives do Reino Unido e o texto da OGL; o site do UK Parliament; o Conselho da UE; o site
  do Parlamento Europeu; o Defence Imagery do MOD; a EUMETSAT.
- **Oceania:** PM&C (a licença CC BY do governo australiano); a NAA; a Defence australiana (a página de copyright);
  Beehive, Archives NZ e DigitalNZ.
- **Nórdicos:** Kansallisarkisto, Finna e Sotamuseo/SA-kuva (Finlândia); a página do Nasjonalarkivet e o
  Digitalarkivet (Noruega); a busca e a API do Riksarkivet (Suécia).
- **Rússia e Ucrânia:** kremlin.ru, government.ru e a presidência da Ucrânia.
- **Ásia:** PIB e GODL (Índia); o site da KOGL e o Korea.net (Coreia); MOFA, MOD e gov-online (Japão).
- **América Latina:** gob.cl e prensa.presidencia.cl (Chile).
- **Outros:** o site da AIEA; a página de FAQ da ESA (open.esa.int).

---

## 1. Canadá

### 1.1 Open Government Licence – Canada 2.0 (open.canada.ca) e a série temporal NAPL da NRCan
- **Licença:** OGL–Canada 2.0. A concessão: "Copy, modify, publish, translate, adapt, distribute or otherwise use the
  Information in any medium, mode or format for any lawful purpose."
- **YouTube monetizado:** sim, é qualquer uso lícito, comercial incluído.
- **Crédito:** "Contains information licensed under the Open Government Licence – Canada." Quando o provedor der uma
  atribuição própria, vale a dele.
- **Restrições:**
  - não cobre "Personal Information; third party rights the Information Provider is not authorized to license; the
    names, crests, logos, or other official symbols of the Information Provider; and Information subject to other
    intellectual property rights, including patents, trade-marks and official marks";
  - não endosso: "does not grant you any right to use the Information in a way that suggests any official status or
    that the Information Provider endorses you".
- **O detalhe que pesa:** a OGL só vale para o que o governo publicou **sob** ela. Isso quer dizer os conjuntos do
  open.canada.ca, não as fotos dos sites do governo (item 1.2).
- **Exemplo de imagem sob OGL:** a *Temporal Series of the National Air Photo Library* (Natural Resources Canada), com
  mosaicos de foto aérea histórica:
  - Halifax 1947–1977, com 100 cm/pixel em 1947 e 50 cm/pixel em 1977;
  - a coleção cobre de 1932 a 2004 (Regina, região Salish e outras);
  - formatos COG, WMS, WCS e API STAC.
  - É material forte para "a cidade antes e depois".
- **Mídia:** mosaico aéreo (geotiff). Não há vídeo.
- **4K:** sim, recortando o mosaico.
- **Acesso automático:**
  - robots do open.canada.ca: `Crawl-delay: 20`, `/search/` vetado a todos, página de conjunto liberada;
  - há API (STAC, WMS, WCS);
  - a OGL não fala de robô.
  - **Conclusão: script pelas APIs; a busca, pelo navegador.**
- **Lido:**
  - https://open.canada.ca/en/open-government-licence-canada (página de 02/12/2022);
  - https://open.canada.ca/data/en/dataset/4e8e3c6a-c961-4def-bdc7-f24823462818 (modificado em 20/02/2024);
  - https://open.canada.ca/data/en/dataset/114417c3-41a4-4cf7-8acd-2eb9d16c97f3.
- **Veredito: recomendo** (a série NAPL, para vídeo sobre cidades canadenses). A OGL em si é boa, mas só serve ao
  que foi publicado sob ela.

### 1.2 Canada.ca, o padrão dos sites do governo
- **Licença:**
  - "Unless otherwise specified, you may not reproduce materials on this site, in whole or in part, for the purposes
    of commercial redistribution without prior written permission from the copyright administrator.";
  - o uso não comercial é livre, com título, autor e URL;
  - os símbolos oficiais (Canada wordmark, Arms, bandeira) não se reproduzem sem autorização.
- **YouTube monetizado:** não, sem permissão escrita.
- **Lido:** https://www.canada.ca/en/transparency/terms.html (página de 05/09/2025).
- **Veredito: não serve** (padrão não comercial).

### 1.3 Library and Archives Canada (LAC)
- **O que a página diz:** "LAC holds a mix of public and private material, both published and unpublished, much of
  which is still protected by copyright". A LAC "will inform you if you need to get written consent". Não há licença
  aberta declarada.
- **Coleção:** a busca `recherche-collection-search.bac-lac.gc.ca` devolveu **desafio do Cloudflare** ao robots.txt.
  Não abri item: a resolução e a marcação de domínio público são **NÃO CONFERIDO**.
- **Lido:** https://www.canada.ca/en/library-archives/services/public/using-material/material-restrictions.html (página
  de 31/07/2025).
- **Veredito:** NÃO CONFERIDO, com indício de caso a caso.

### 1.4 Defesa Nacional e Forças Armadas (Combat Camera)
- **Licença:** as fotos e os vídeos da Combat Camera são "Crown copyright".
  - Para uso comercial abaixo de CAD 10.000 de receita bruta anual, há permissão automática "royalty-free", "Canada
    wide", "non-exclusive".
  - Acima disso, licença com royalty típico de 5 %.
  - "if it is used in conjunction with a commercial enterprise it would be considered 'commercial use'", e receita de
    publicidade conta.
- **Crédito:** "© All rights reserved. (Title of Crown copyright protected work) reproduced with the permission of
  DND/CAF (year permission granted)".
- **Restrições:** não cobre "badges, crests, flags and insignia".
- **Lido:** https://www.canada.ca/en/department-national-defence/corporate/intellectual-property/crown-copyright.html
  (página de 22/07/2022).
- **Veredito: não serve.** A permissão automática vale só no Canadá, e o YouTube é mundial; acima do teto, paga-se
  royalty.

## 2. Reino Unido

### 2.1 Open Government Licence v3.0 e o conteúdo do GOV.UK
- **O texto da OGL:** NÃO CONFERIDO na origem. O robots.txt da The National Archives, onde a OGL mora, declara
  `Content-Signal: ai-train=no, search=yes, ai-input=no`. Isso veta a leitura por IA, e não li.
- **O que o GOV.UK diz:** "Most content on GOV.UK is subject to Crown copyright protection and is published under the
  Open Government Licence (OGL)".
- **Lido:** https://www.gov.uk/help/terms-conditions (página de 03/09/2024).
- **Veredito:** ver o item 2.2. Foto do GOV.UK comum é pequena (tamanho de web) e não foi medida.

### 2.2 Ministério da Defesa (MOD), com Defence Imagery
- **Licença:** duas.
  - A **OGL**, que o MOD descreve como "a broad commercial, free re-use licence but does not allow the re-use of
    imagery containing personal data. (This includes identifiable persons in the imagery.)".
  - A **MOD News/Editorial Imagery Licence**: "allows free use of MOD imagery for the purposes of reporting".
- **YouTube monetizado:**
  - só pela OGL e só em imagem **sem pessoa identificável** (navio, avião, paisagem, base);
  - a licença editorial é para reportagem, e o canal não trata YouTube monetizado como editorial (`midia.md` §2.1).
- **Crédito:** "Reproduced under the terms of the Open Government Licence."
- **Restrições:**
  - insígnias, logos, brasões e distintivos ficam fora da OGL: "MOD takes its intellectual property, and in
    particular, use of its insignia very seriously";
  - nada que sugira endosso;
  - depois de 5 anos, o material importante vai para o Imperial War Museum.
- **Resolução e 4K:** NÃO CONFERIDO. O portal defenceimagery.mod.uk **respondeu 403** ao WebFetch. O robots.txt dele
  não existe (volta uma página de busca).
- **Acesso automático:** o portal recusa → **navegador**.
- **Lido:**
  https://www.gov.uk/government/publications/mod-copyright-licensing-information/ministry-of-defence-copyright-licensing-information
  (atualizada em 05/06/2026).
- **Veredito: com ressalvas.** Só para imagem sem pessoas, e cada item se confere no portal pelo navegador.

### 2.3 The National Archives (TNA)
- NÃO CONFERIDO: `Content-Signal: ... ai-input=no` no robots.txt. Não li nenhuma página do site.

### 2.4 UK Parliament
- **Site:** parliament.uk devolveu **desafio do Cloudflare** ao robots.txt. Os termos são NÃO CONFERIDO.
- **Flickr oficial** (`uk_parliament`, House of Commons): a amostra é **CC BY-NC-ND 4.0**, com crédito "© House of
  Commons" (https://www.flickr.com/photos/uk_parliament/55520383205/).
- **Veredito: não serve.** NC impede vídeo monetizado, e ND impede recorte.

### 2.5 Number 10 (gabinete do primeiro-ministro)
- **Flickr** `number10gov`: a amostra é **CC BY-NC-ND 4.0**, com crédito "Picture by Lauren Hurley / No 10 Downing
  Street" (https://www.flickr.com/photos/number10gov/55554342741/).
- **Veredito: não serve** (NC/ND).

## 3. Austrália

### 3.1 A licença CC BY do governo (PM&C)
- NÃO CONFERIDO. pmc.gov.au/copyright devolveu **desafio Incapsula** ("Request unsuccessful. Incapsula incident ID"),
  ao script e ao WebFetch.

### 3.2 National Archives of Australia (NAA)
- NÃO CONFERIDO. www.naa.gov.au **não respondeu** (timeout de 60 a 90 s, por script e por WebFetch).
- O recordsearch.naa.gov.au abre, com `Content-Signal: search=yes,ai-train=no,use=reference` e ClaudeBot vetado. Sem a
  página de copyright, não avaliei.

### 3.3 Defence Imagery (images.defence.gov.au)
- **Termos:** "I agree not to use images for any Commercial Purposes". O uso comercial pede licença por
  imagery.copyright@defence.gov.au, com processo de até 4 semanas.
- **Lido:** a página de item https://images.defence.gov.au/assets/S20221586. A página de copyright de defence.gov.au
  deu timeout.
- **Veredito: não serve** sem licença comercial.

## 4. Nova Zelândia

### 4.1 Beehive (governo), Archives New Zealand e DigitalNZ
- NÃO CONFERIDO:
  - beehive.govt.nz/copyright e archives.govt.nz/copyright devolveram **desafio Incapsula**;
  - www.digitalnz.org devolveu **AWS WAF** (`x-amzn-waf-action: challenge`).

### 4.2 Department of Conservation (DOC)
- **Licença:** "Material on this website is Crown Copyright and can be reused under the terms of the Creative Commons
  Attribution 4.0 International Licence (CC BY 4.0)."
  - Foto marcada "DOC" pode ser reusada, inclusive comercialmente.
  - Foto com "©" pede permissão.
  - Logos e o que a *Flags, Emblems, and Names Protection Act 1981* protege ficam fora.
- **Crédito:** "Source: Department of Conservation (NZ)", com o fotógrafo quando houver.
- **Resolução:** o DOC diz que não fornece cópias em alta resolução, o que dá tamanho de web.
- **Acesso automático:** robots veta `/images/` e `/api/` ao grupo `*` → **navegador**.
- **Lido:** https://www.doc.govt.nz/footer-links/copyright/ (a página não tem data).
- **Veredito: com ressalvas.** A licença é boa, mas a resolução é baixa: serve à exceção de foto pequena, não a 4K.

## 5. União Europeia

### 5.1 EU Audiovisual Service (Comissão Europeia)
- **Licença**, texto literal: "Unless otherwise indicated (e.g. in individual copyright notices), content owned by the
  EU on this website is licensed under the Creative Commons Attribution 4.0 International License (CC BY 4.0). This
  means that reuse is allowed provided appropriate credit is given and changes made are clearly indicated. Any reuse
  must not distort the original meaning or message of the content."
- **YouTube monetizado:** sim, porque a CC BY 4.0 permite uso comercial.
  - Atenção: a FAQ do mesmo site repete que o material "is offered free of charge for EU-related information and
    educational purposes". A página legal é a de *conditions of use*, mas a divergência fica registrada.
- **Crédito:** "© European Union, 202X, licensed under CC BY 4.0", e cada arquivo traz as suas "Conditions of use". A
  amostra mostra "© European Union, 2026 | Source: EC - Audiovisual Service".
  - No formato do canal (`identidade.md` §7): `European Union / EC Audiovisual Service · CC BY 4.0`.
- **Restrições:**
  - "content depicting private individuals may not be reproduced, modified or distributed without prior written
    authorisation from the depicted persons";
  - material de terceiros e marcas, logos e nomes ficam fora;
  - música no vídeo "may be subject to prior clearance of the music rights";
  - os prédios Charlemagne, Tour Madou e Breydel só em uso não comercial, por direito dos arquitetos.
- **Mídia:** foto, vídeo (reportagem, *stockshots*, *EbS*) e áudio.
- **Resolução:**
  - foto "JPEG format of 300 dots per inch, following press agency standards" (FAQ). A dimensão em pixels não aparece
    sem JavaScript: NÃO MEDIDA;
  - vídeo: "MPEG4 H264 at 11 megabits per second for high resolution" e "HLS adaptive streaming from 480p to 1080p".
- **4K:** não. O vídeo vai até 1080p, e o footage abaixo de 4K cai no `pendente_lucas` do conferente.
- **Acesso automático:**
  - robots `Allow: /` para todos;
  - não há API pública documentada;
  - os termos não falam de robô;
  - o site é aplicação em JavaScript.
  - **Conclusão: o script pode ler, mas na prática é navegador.**
- **Lido:** https://audiovisual.ec.europa.eu/en/conditions-of-use, /en/faq, /en/about e a amostra
  https://audiovisual.ec.europa.eu/en/media/photo/P-070458 (sem data).
- **Veredito: recomendo**, com os cuidados acima: pessoa privada, música e vídeo em HD. É a maior fonte oficial com CC
  BY para evento real europeu (cúpula, comissários, visitas).

### 5.2 Comissão Europeia, o aviso legal-base
- "Unless otherwise indicated, content owned by the EU on this website is licensed under the Creative Commons
  Attribution 4.0 International (CC BY 4.0) licence." A base é a Decisão da Comissão de 12/12/2011, e as exceções são as
  mesmas do item 5.1.
- **Lido:** https://commission.europa.eu/legal-notice_en.
- **Veredito:** é a regra de fundo dos sites da Comissão. Serve, mas o acervo é o do item 5.1.

### 5.3 Parlamento Europeu
- **Site:** NÃO CONFERIDO.
  - O robots de multimedia.europarl.europa.eu **veta o `Claude-User`** (`Disallow: /`) e, para `*`, veta toda URL com
    `?`, onde fica a busca.
  - www.europarl.europa.eu devolveu **AWS WAF**.
- **Flickr oficial** (`european_parliament`): a amostra é **CC BY 4.0**, com crédito "CC-BY-4.0: © European Union 2026
  – Source: EP" e original de **4010×2673** (https://www.flickr.com/photos/european_parliament/55535556209/).
- **Veredito: com ressalvas.** A licença é boa por foto, mas a página de termos do PE não foi lida, e a busca é só no
  navegador.

### 5.4 Conselho da UE
- NÃO CONFERIDO: www.consilium.europa.eu devolveu "Browser check" (403).

## 6. Agência Espacial Europeia (ESA)
- **Licença:** há duas, e **cada item diz a sua** no campo "LICENCE".
  - **CC BY-SA 3.0 IGO:** "reproduce, distribute, adapt, translate and publicly perform this publication, without
    explicit permission". Condições:
    - crédito, com exemplos "Credit: ESA/Rosetta/NavCam – CC BY-SA IGO 3.0" e "ESA/DLR/FU Berlin, CC BY-SA 3.0 IGO";
    - "a direct link to the licence text is provided";
    - indicar mudanças;
    - "Adaptation/translation/derivatives must be distributed under the same licence terms".
  - **ESA Standard Licence:** "Images or videos available on the ESA Website shall not be used for a commercial
    purpose", salvo autorização escrita.
- **YouTube monetizado:** só com item CC BY-SA 3.0 IGO. Sobre o ShareAlike num vídeo, veja o item 2 de "Duas coisas
  que valem para vários".
- **Crédito, na amostra de observação da Terra:** "contains modified Copernicus Sentinel data (2025), processed by ESA",
  com a licença "CC BY-SA 3.0 IGO or ESA Standard Licence (content can be used under either licence)".
  - Na tela: `Contains modified Copernicus Sentinel data (2025), processed by ESA · CC BY-SA 3.0 IGO`, e o link da
    licença na descrição.
- **Restrições** (termos gerais do site):
  - nada que sugira endosso da ESA a "commercial product, process or service, ideology, religion, political doctrine
    or party";
  - nada "in association with topics incompatibles with the role of ESA (such as ... alcohol, violence, drugs,
    tobacco, gambling, adult content, etc.)";
  - material de terceiros pede aprovação à parte;
  - o logo da ESA, só com autorização.
  - **Para um canal de geopolítica**, a cláusula de "violence" pede cuidado em vídeo sobre guerra.
- **Mídia e resolução:**
  - a amostra *Earth from Space: Jostedalsbreen, Norway* tem "HI-RES JPG [5.12 MB]" e "HI-RES TIF [907.00 MB]";
  - **os 5 vídeos da amostra** (três *Earth from Space*, dois de estação espacial) são todos **ESA Standard Licence**,
    com "SOURCE MP4" de 15 a 840 MB e, em dois, "This video includes third party content. It shall not be modified".
- **4K:** imagem sim (o TIF). Vídeo: resolução não medida, e a licença impede o uso.
- **Acesso automático:**
  - robots `Allow: /`, `Crawl-delay: 2`, **`Disallow: /esearch`** (a busca);
  - os termos não falam de robô;
  - não há API pública.
  - **Conclusão: script lê listas e itens a 2 s; a busca, pelo navegador.**
- **Lido:**
  - https://www.esa.int/ESA_Multimedia/Terms_and_conditions_of_use_of_images_and_videos_available_on_the_esa_website
    ("Last updated on 18 January 2024");
  - https://www.esa.int/Services/Creative_Commons_Attribution-ShareAlike_3.0_IGO_CC_BY-SA_3.0_IGO_Licence;
  - https://photolibrary.esa.int/terms-and-conditions/;
  - o texto legal https://creativecommons.org/licenses/by-sa/3.0/igo/legalcode;
  - a amostra https://www.esa.int/ESA_Multimedia/Images/2026/03/Earth_from_Space_Jostedalsbreen_Norway.
  - A FAQ open.esa.int/image-usage-creative-commons **não resolveu no DNS**: NÃO CONFERIDO.
- **Veredito: com ressalvas.** A imagem de observação da Terra em CC BY-SA 3.0 IGO serve, com crédito e link. O vídeo
  da ESA, em regra, não.

## 7. Copernicus (UE), dado Sentinel e "Image of the Day"
- **Licença:** o aviso legal da Comissão.
  - "users shall have a free, full and open access to Copernicus Sentinel Data and Service Information".
  - Usos: "(a) reproduction; (b) distribution; (c) communication to the public; (d) adaptation, modification and
    combination with other data and information".
  - Base: Regulation (EU) No 377/2014 e Delegated Regulation (EU) No 1159/2013, hoje (EU) 2021/696.
- **YouTube monetizado:** sim. O aviso não restringe a finalidade.
- **Crédito:**
  - "'Copernicus Sentinel data [Year]'";
  - quando adaptado: "'Contains modified Copernicus Sentinel data [Year]'";
  - produtos de serviço (por exemplo, os mapas de emergência): "'Copernicus Service information [Year]'".
  - É o crédito que o `identidade.md` §6 já usa para a base de mapa.
- **Restrições:** "specific limitations ... in the rare cases of security concerns, protection of third party rights or
  risk of service disruption". Logos do Copernicus pedem licença de marca.
- **Mídia:**
  - dado (Sentinel-2 a 10 m, Sentinel-1 radar), transformado em imagem ou timelapse pelo próprio canal;
  - a "Image of the Day" saiu do copernicus.eu, que agora é arquivo, e foi para eu-space.europa.eu. A amostra traz o
    crédito "European Union, Copernicus Sentinel-2 imagery" e um download "[WEBP, 753.07 KB]", pequeno.
- **4K:** sim, gerando a imagem do dado.
- **Acesso automático:**
  - Copernicus Data Space Ecosystem, com conta grátis e cotas. Os termos proíbem burlar a cota criando várias contas;
  - o mesmo dado está no Planetary Computer, que o canal já usa para o Landsat;
  - robots do dataspace e do eu-space liberam as páginas.
  - **Conclusão: script (API).**
- **Lido:**
  - o aviso legal (PDF de 2015) https://sentinels.copernicus.eu/documents/247904/690755/Sentinel_Data_Legal_Notice;
  - https://dataspace.copernicus.eu/terms-and-conditions;
  - https://www.copernicus.eu/en/copyright-and-licenses (o aviso de arquivo);
  - a amostra
    https://eu-space.europa.eu/components/earth-observation-copernicus/image-of-the-day/tidal-channels-shape-lagoon-grado-italy.
- **Veredito: recomendo.** Para um canal de geografia, é a melhor: comercial, crédito simples, qualquer resolução e
  API. Já está no canal como base de mapa. Levá-la a "acervo de imagem" é estender o uso, e a decisão é do Lucas.

## 8. Brasil

### 8.1 Agência Brasil (EBC)
- **Licença hoje:** o rodapé do site diz "© Todos os direitos reservados pela EBC" (HTML lido). Os termos da EBC
  (atualizados em 23/05/2025) dizem:
  - "b) O Usuário deverá utilizar o Portal apenas para finalidades de uso pessoal, sem intuito comercial ou lucrativo.";
  - "e) Reprodução autorizada mediante indicação da fonte.";
  - e §4: a EBC detém "com exclusividade toda a propriedade intelectual sobre o Portal, incluindo ... imagens".
  - **Não há menção a Creative Commons** no site nem nos termos.
  - Fotos de agência aparecem marcadas "Proibida reprodução" (por exemplo, "REUTERS/.../Proibida Reprodução").
- **YouTube monetizado:** não, pelos termos atuais: o portal é para uso "sem intuito comercial".
- **Observação:** a wiki da Creative Commons (fonte secundária, não conferida na origem) diz que a Agência Brasil já foi
  CC BY. Foto publicada naquela época pode ter CC BY válido, e o caminho seria o Commons, arquivo a arquivo, como o
  canal já faz.
- **Lido:** https://www.ebc.com.br/termos-de-uso-e-condicoes-gerais-do-portal-da-ebc e o rodapé de
  https://agenciabrasil.ebc.com.br/.
- **Veredito: não serve (hoje).**

### 8.2 Senado Federal (Agência Senado, TV Senado)
- **Política do Senado:**
  - "A reprodução de matérias e fotografias é livre, mediante a citação da Agência Senado e do autor.";
  - na TV: "fica vedado o uso comercial de seus programas e eventos, bem como inserção de anúncios";
  - no Guia de Direitos Autorais: "Não é permitido o uso comercial ou político-ideológico dos produtos da Secom."
- **Flickr** `agenciasenado`: a amostra está marcada **CC BY-SA 4.0**, com crédito "Foto: Carlos Moura/Agência Senado"
  e original de **3820×2547**.
- **O conflito:** a etiqueta do Flickr permite uso comercial, e a política do próprio Senado veda.
- **Crédito:** fotos "Nome/Agência Senado"; vídeos "Nome/TV Senado".
- **Restrições:** não deturpar; não cortar, desfocar ou montar de modo que "altere amplamente o sentido".
- **Acervo histórico:** o Senado está no **Flickr Commons** (`senadothecommons`), com "sem restrições de direitos
  autorais conhecidas". A página avisa que isso não garante domínio público e pede "análise independente". Não abri
  item.
- **Acesso automático:** o site (www12.senado.leg.br) libera todos no robots; o Flickr é só navegador.
- **Lido:**
  - https://www12.senado.leg.br/assessoria-de-imprensa/politica-de-uso;
  - https://www12.senado.leg.br/manualdecomunicacao/guia-de-direitos-autorais;
  - https://www12.senado.leg.br/noticias/arquivo-de-imagens-no-flickr-commons;
  - a amostra https://www.flickr.com/photos/agenciasenado/55551225310/.
- **Veredito: não serve** enquanto o Senado não confirmar por escrito que a CC BY-SA do Flickr vale para vídeo
  monetizado. Na dúvida, não entra.

### 8.3 Câmara dos Deputados, Banco de Imagens
- **Licença**, em cada álbum: "Todas as imagens são protegidas pelas leis de direitos autorais e podem ser livremente
  utilizadas, sem custo e sem necessidade de autorização, de acordo com a licença Creative Commons BY, que apenas exige
  que seja dado o crédito no formato 'Nome do Fotógrafo/Câmara dos Deputados'." A versão da CC BY não é dita.
- **YouTube monetizado:** sim, porque a CC BY permite.
- **Crédito:** "Nome do Fotógrafo/Câmara dos Deputados". No canal: `<Fotógrafo> / Câmara dos Deputados · CC BY`.
- **Restrições:** as gerais, como pessoa pública em contexto político e a regra do `voz.md`. Não há restrição escrita
  além do crédito.
- **Mídia:** foto, de 2004 em diante (atividade parlamentar).
- **Resolução:** o link "Grande" é o original. Pelo `HEAD`: 1,35 MB numa foto de 2021 e **4,2 e 7,0 MB** em fotos de
  setembro de 2026. A dimensão em pixels não aparece na página.
- **4K:** provavelmente em foto recente (arquivo de câmera), mas **não medido**.
- **Acesso automático:** robots libera o banco de imagens; os termos não falam de robô → **script pode**.
- **Lido:** https://www.camara.leg.br/internet/bancoimagem/ e o álbum
  https://www.camara.leg.br/banco-imagens/eventos/4B05274F-519C-4C8D-89B0-768D02525851.
- **Veredito: recomendo**, para cena de política brasileira.

### 8.4 Palácio do Planalto / gov.br
- **Licença:** o rodapé do gov.br/planalto diz "Todo o conteúdo deste site está publicado sob a licença Creative
  Commons Atribuição-SemDerivações 3.0 Não Adaptada".
- O Flickr `palaciodoplanalto` "has not made any photos public yet", na leitura de hoje.
- **Veredito: não serve.** O ND proíbe recorte, zoom e tratamento de cor, que o vídeo exige.

## 9. Japão

### 9.1 Public Data License 1.0 (substituiu os "Standard Terms of Use" 2.0)
- **Licença:**
  - "Commercial use of 'This Content' is also permitted.";
  - compatível com CC BY 4.0: "the public institution ... permits the user to use 'This Content' ... in accordance
    with CC BY".
- **Crédito:** "Source: Agency D website (URL of the relevant page) PDL1.0 (The License Original page URL)". Se
  editado: "Created by editing ...".
- **Restrições:**
  - direitos de terceiros, inclusive de imagem e de publicidade;
  - "Symbol mark, Logo, and Character Design";
  - conteúdo com termos próprios;
  - não apresentar o conteúdo editado como se fosse do governo.
- **Lido:** https://www.digital.go.jp/en/resources/open_data/public_data_license_v1.0 (estabelecida em 05/07/2024).

### 9.2 Kantei (gabinete do primeiro-ministro)
- **Licença:** PDL 1.0, que vale para o site **e para as contas oficiais nas redes, inclusive o YouTube**. Ficam fora
  "Symbols, logos, or character designs".
- **Crédito:** "Source: Official Website of the Prime Minister's Office of Japan (URL of the relevant page)". Com
  edição: "Created by editing 'XX' (Official Website of the Prime Minister's Office of Japan) (URL ...)". O inglês é
  só referência, e o japonês prevalece.
- **Resolução:** as fotos da amostra têm **980×654**, abaixo do piso de 1.600 px.
- **4K:** não em foto. O vídeo fica no YouTube, e baixar do YouTube esbarra nos termos do próprio YouTube: não conferi
  se o Kantei oferece arquivo.
- **Acesso automático:** não há robots.txt (404); os termos não falam de robô → script pode.
- **Lido:** https://japan.kantei.go.jp/policies/terms_e.html (31/03/2025) e a amostra
  https://japan.kantei.go.jp/105/actions/202609/22usa.html.
- **Veredito: com ressalvas.** A licença é ótima, mas a resolução é baixa: só a exceção de foto pequena.

### 9.3 JapanGov (japan.go.jp)
- "All information (including text, photographs and illustrations, etc.) provided on this website is subject to
  copyright." A reprodução é permitida para uso privado, citando a fonte, e não se modifica sem permissão.
- **Veredito: não serve.**

### 9.4 MOFA, Ministério da Defesa e Public Relations Office (gov-online)
- NÃO CONFERIDO:
  - mofa.go.jp: Akamai "Access Denied" (403);
  - mod.go.jp/en/notice.html: 403 ao WebFetch;
  - gov-online.go.jp: 403 vazio ao robots.

## 10. Arquivos nacionais nórdicos, e um bônus holandês

### 10.1 Noruega, Nasjonalarkivet (o ex-Arkivverket)
- **Site:** NÃO CONFERIDO.
  - A página "Foto i Arkivverket" (www.nasjonalarkivet.no) devolveu **403** ao WebFetch;
  - o robots do Digitalarkivet **veta o `Claude-User`** e dezenas de agentes de IA (`Disallow: /`).
  - Segundo a busca, a política seria CC BY ou CC BY-SA, mas **isso não foi conferido na origem**.
- **Flickr Commons** (`national_archives_of_norway`):
  - a amostra diz "No known copyright restrictions", com crédito "Bjørn Fjørtoft; Billedbladet NÅ; Riksarkivet
    (RA/PA-0797/U/Ue/L0064/0012)";
  - original **1423×1423**.
  - "No known copyright restrictions" é declaração da instituição, não licença.
- **Veredito: com ressalvas.** Só pelo navegador, item a item, e as fotos são pequenas.

### 10.2 Suécia, Riksarkivet e Riksantikvarieämbetet
- **Riksarkivet:**
  - "Arkivmaterial ... kan vara skyddat enligt lagen (1960:729) om upphovsrätt";
  - o Riksarkivet "har sällan övertagit upphovsrätten";
  - fonte: "Riksarkivet, [referenskod]".
  - A marca Public Domain Mark nos documentos digitalizados aparece na busca `sok.riksarkivet.se`, cujo robots **veta o
    `Claude-User`** (`Disallow: /`) e, para `*`, as URLs de busca (`sokord`, `bildvisning`). A página de termos da API
    fica lá: NÃO CONFERIDO.
  - Lido: https://riksarkivet.se/upphovsratt (lida em 27/09/2026).
  - **Veredito: com ressalvas**: documento sim, foto caso a caso, e só pelo navegador.
- **Riksantikvarieämbetet (RAA, patrimônio), serviço Arkivsök:**
  - ~200 mil imagens digitalizadas, de 1860 até hoje: "städer, landskap, industrier, världsarv, flygbilder";
  - download em alta resolução grátis;
  - licenças por item: CC BY ("även för kommersiella syften"), CC0 e PD;
  - **pessoa viva identificável: CC BY-NC-ND**, que não serve;
  - crédito: "ange gärna fotograf och källa".
  - Arkivsök não tem robots.txt e é aplicação em JavaScript. A API K-samsök não foi conferida.
  - Lido:
    - https://www.raa.se/om-riksantikvarieambetet/om-webbplatsen/licenser/ (04/06/2025);
    - https://www.raa.se/hitta-information/arkiv-och-bibliotek/om-arkivet-och-biblioteket/fotografier/;
    - https://www.raa.se/hitta-information/k-samsok/att-anvanda-k-samsok/rattigheter/ (19/11/2024).
  - **Veredito: com ressalvas**: bom para a Suécia, mas item e resolução não foram abertos.

### 10.3 Finlândia
- NÃO CONFERIDO: kansallisarkisto.fi, finna.fi, api.finna.fi e sotamuseo.fi (Museu Militar, hoje dono do SA-kuva)
  devolveram **desafio do Cloudflare**.
- **Alerta:** o domínio **sa-kuva.fi** hoje abre uma "Galleria" genérica (os módulos têm nomes como `weather`, `eprice`
  e `planner`), sem sinal das Forças Armadas. **Não tratar como fonte oficial.** O "CC BY 4.0 do SA-kuva" que circula
  na web não foi conferido na origem.

### 10.4 Dinamarca, Rigsarkivet
- O regulamento diz "Du skal være opmærksom på gældende lovgivning, herunder Arkivloven, Ophavsretsloven og
  Databeskyttelsesloven" e pede para referir os "Det Kgl. Biblioteks eller Rigsarkivets samlinger". Não há licença
  aberta nem banco de imagens com licença.
- **Lido:** https://www.rigsarkivet.dk/rigsarkivets-laesesale/reglement-for-brug-af-forskningslaesesalen/.
- **Veredito: não serve** como acervo aberto.

### 10.5 Bônus: Holanda, Nationaal Archief
- **Licença:** "Ruim 400.000 foto's zijn beschikbaar onder een CC0 publiek domein verklaring" (cerca de 418 mil).
  "Deze afbeeldingen kunnen kosteloos worden hergebruikt (onderzoek, publicatie, persoonlijk of commercieel gebruik)."
- **Crédito:** "het Nationaal Archief stelt geen voorwaarden". Fotógrafo e instituto são apreciados, não obrigatórios.
  No canal, sugiro `<Fotógrafo> / Nationaal Archief · CC0`.
- **Como se reconhece:** a foto aberta tem botão de download e, no campo "auteursrechthebbende", "Nationaal Archief, CC0"
  ou "Nationaal Archief, Public Domain". Sem botão, não se reusa.
- **Restrições:** "mensen op de foto aanspraak maken op portretrecht" e marcas de empresa na foto.
- **Mídia:** foto, principalmente o fotobureau **Anefo, 1945–1989**: Holanda, Indonésia, Suriname, Guerra Fria.
- **Resolução:** "JPEG download, met een 300 DPI afdrukkwaliteit voor A4", ≈2.480×3.508 px, perto de 4K no lado maior.
- **Acesso automático:**
  - "De API voor het opvragen van de scans en metadata is tijdelijk niet beschikbaar";
  - as imagens estão no **Wikimedia Commons** ("Images from Nationaal Archief"), que o canal já usa, com licença
    conferida arquivo a arquivo;
  - robots veta `/search/` a todos.
  - **Conclusão: navegador no site; por script, pelo Commons.**
- **Lido:** https://www.nationaalarchief.nl/onderzoeken/fotos/auteursrecht-op-fotos e
  https://www.nationaalarchief.nl/onderzoeken/open-data/fotos (as páginas não têm data).
- **Veredito: recomendo.**

## 11. Rússia, kremlin.ru e government.ru
- NÃO CONFERIDO: **conexão não abriu** a partir desta máquina.
  - Por script: `UND_ERR_CONNECT_TIMEOUT`, e `curl -4` sem IP remoto.
  - Pelo WebFetch: falha sem resposta.
- O "CC BY 4.0, exceto fotos RIA Novosti e TASS" vem só de fonte secundária (busca). Não vale como conferência.
- Se o Lucas quiser, a conferência é pelo navegador do app. Mesmo com licença, é conteúdo de Estado, e há o cuidado
  editorial do `voz.md`.

## 12. América Latina

### 12.1 México
- **Termos do gob.mx:** "El Usuario no deberá modificar, reproducir o mostrar pública o comercialmente los materiales, ni
  podrá distribuir o utilizarlos con algún propósito público o comercial".
- **Lido:** https://www.gob.mx/terminos (sem data).
- **Veredito: não serve.** O "Libre Uso MX" é dos dados abertos, não do site.

### 12.2 Chile
- **Site:** NÃO CONFERIDO. www.gob.cl devolveu **Cloudflare**; prensa.presidencia.cl tem **certificado TLS que não
  verifica** ("unable to verify the first certificate"), e não desliguei a verificação.
- **Flickr** `gobiernodechile`: a amostra é **CC BY 2.0**, com crédito "Gobierno de Chile" e **enviada em 14/12/2016**
  (https://www.flickr.com/photos/gobiernodechile/30804545744/). A conta parece parada.
- **Veredito: com ressalvas.** Serve para foto antiga, pelo navegador. O acervo atual não foi conferido.

### 12.3 Argentina
- **Casa Rosada:** "Los contenidos de Casa Rosada están licenciados bajo Creative Commons Reconocimiento 2.5 Argentina
  License".
  - O original da foto de amostra (`/images/202609/kmileifit.jpg`) tem **208.769 bytes** pelo `HEAD`: é foto de web,
    pequena.
  - O robots libera, e há galerias (`/informacion/fotos`).
- **Argentina.gob.ar:** "El Administrador licencia todos sus contenidos bajo la licencia Creative Commons Atribución 4.0
  Internacional", "excepto cuando se declare lo contrario" (sem data). O robots tem `Crawl-delay: 10`.
- **Veredito: com ressalvas.** As licenças são boas e comerciais, mas a resolução é baixa (Casa Rosada) ou não foi
  medida (argentina.gob.ar).

## 13. Ásia (e Ucrânia)

### 13.1 Índia
- NÃO CONFERIDO:
  - pib.gov.in devolveu **Akamai "Access Denied"** (403);
  - data.gov.in deu **503** ao robots, e a página da GODL não renderiza o texto (o conteúdo vem por JavaScript).
- A GODL, pelo que se sabe, é licença de **dados**, não de foto.

### 13.2 Coreia do Sul
- **KOGL:** www.kogl.or.kr **recusou a conexão** (ECONNREFUSED): NÃO CONFERIDO.
- **Korea.net:** o site entra em **laço de redirecionamento** para clientes que não são navegador: NÃO CONFERIDO.
- **Flickr oficial** (`koreanet`): a amostra está marcada **CC BY-SA 4.0**, com original **8192×5464**. A descrição da
  mesma foto diz:
  - "All photographs in the official Flickr account of the Republic of Korea are available only for publication by
    news organizations and/or for public purposes with proper attribution";
  - e "Any distortion to the original meaning of a photograph for provision to a third party through posting and
    resale, partial reproduction, falsification or use of the photograph with other images is strictly prohibited
    without the express written permission of the government of the Republic of Korea".
- **Veredito: não serve** sem autorização escrita. "use ... with other images" é exatamente o que um vídeo faz.

### 13.3 Taiwan, Presidência
- **Licença:** "may be reauthorized for public use without cost in a non-exclusive manner under the Open Government
  Data License, version 1.0". Os usuários "are not limited to time and by region to reproduce, adapt, edit, publicly
  transmit". Ficam fora:
  - "Some videos, photos, sheet music and contracted case writings or other works for which the administration must
    especially state that the approval must be duly obtained before use";
  - "patents, trademarks and administration's logo".
  - Não alterar "maliciosamente" o conteúdo; não sugerir endosso.
- **Flickr** `presidentialoffice`: a amostra é **CC BY 4.0**, com crédito "Official Photo by I Chen Lin / Office of the
  President". O **maior tamanho oferecido é 1567×1044**, sem o original.
- **Acesso automático:** o robots do site libera tudo (`Allow: /`); o Flickr é navegador.
- **Lido:** https://english.president.gov.tw/Page/18 (sem data) e a amostra
  https://www.flickr.com/photos/presidentialoffice/55552939351/.
- **Veredito: com ressalvas.** A licença é boa, mas a resolução fica abaixo do piso de 1.600 px.

### 13.4 Ucrânia (bônus)
- NÃO CONFERIDO: www.president.gov.ua devolveu **Akamai "Access Denied"** (403).

## 14. Organismos internacionais

### 14.1 ONU (UN Photo)
- **Termos:**
  - "UN photos cannot be altered, sold, redistributed or used to create derivative works";
  - "Prior written permission is required to reproduce UN photos in ... videos";
  - "Fees apply when the images are used in ... online pieces, film/video. The fee is US $70.00 per photo for initial
    use";
  - o Fair Use deles "applies solely to scholarly, academic, non-profit, or journalistic use".
- **Crédito:** "UN Photo/Mark Garten".
- **Flickr** `un_photo`: a amostra é **"All rights reserved"**.
- **Lido:** https://dam.media.un.org/CMS4/Brand/Root/.
- **Veredito: não serve** (a não ser pagando, com permissão).

### 14.2 UNESCO
- **Termos:** "the User shall not: (a) use the Sites or Materials for commercial purposes" (salvo licença específica,
  como CC IGO em publicação). Também proíbem "access, scrape, crawl, harvest or bulk-download Materials by any Automated
  System". O robots diz `Content-Signal: ... ai-input=yes`.
- **Lido:** https://www.unesco.org/en/terms-use (15/09/2026).
- **Veredito: não serve** (foto e vídeo sem licença aberta; robô proibido).

### 14.3 OTAN
- **Termos:** o material é oferecido sob "Fair Use", que não é licença, e "No material produced by NATO is to be sold,
  used for outside advertising or promotional purposes of any kind". Exigem crédito a NATO e proíbem difamar a OTAN ou
  os membros. O portal multimídia pede cadastro.
- **Flickr** `nato`: a amostra é **CC BY-NC-ND 4.0**.
- **Lido:** https://www.nato.int/en/about-us/official-texts-and-resources/use-of-nato-content-and-brand (sem data).
- **Veredito: não serve.**

### 14.4 Banco Mundial
- Os termos gerais remetem a termos próprios por coleção (amendados em 25/07/2025).
- **Flickr** `worldbank`: a amostra é **CC BY-NC-ND 4.0**, com crédito "Photo: Said Hlimi / World Bank".
- **Veredito: não serve** (NC/ND).

### 14.5 FMI
- **Termos:** "personal, noncommercial usage only", e "The IMF prohibits the bulk download of information by automated
  technology without explicit permission" (vigentes desde 11/10/2024).
- **Flickr** `imfphoto`: a amostra é **CC BY-NC-ND 2.0**.
- **Lido:** https://www.imf.org/en/_site_imf/about/copyright-and-terms.
- **Veredito: não serve.**

### 14.6 AIEA
- **Site:** NÃO CONFERIDO. A página de termos respondeu **HTTP 402 Payment Required**, cobrança por acesso de robô.
- **Flickr** `iaea_imagebank`: as duas amostras são **CC BY 4.0**, com crédito "Photo Credit: Dean Calma / IAEA" e
  original de **8120×5413**.
  - Uma delas mostra obra de arte de uma artista tiwi: **direito de terceiro dentro da foto**, que a CC BY do fotógrafo
    não cobre.
- **Veredito: com ressalvas.** Bom para nuclear e energia (Zaporíjia, Irã), mas os termos do site não foram lidos, e é
  preciso olhar item a item o que há de terceiro na foto.

### 14.7 UIT
- **Flickr** `itupictures`: a amostra é **CC BY-NC-SA 4.0** ("©ITU").
- **Veredito: não serve** (NC).

### 14.8 EUMETSAT
- NÃO CONFERIDO: www.eumetsat.int devolveu **403** ao robots.

---

## NÃO CONFERIDO: lista completa, com o motivo

| Fonte | Motivo |
|---|---|
| The National Archives (UK) e o texto da OGL v3 | robots.txt: `Content-Signal: ai-train=no, search=yes, ai-input=no` (veta leitura por IA) |
| UK Parliament (parliament.uk) | desafio do Cloudflare ("Just a moment...") |
| Defence Imagery, MOD (defenceimagery.mod.uk) | 403 ao WebFetch |
| Royal Navy (royalnavy.mod.uk) | 403 ao robots |
| LAC, busca da coleção (recherche-collection-search.bac-lac.gc.ca) | desafio do Cloudflare |
| PM&C, Austrália (licença CC BY do governo) | desafio Incapsula |
| NAA, defence.gov.au e dfat.gov.au | timeout (script e WebFetch) |
| Beehive e Archives NZ | desafio Incapsula |
| DigitalNZ | AWS WAF (`x-amzn-waf-action: challenge`) |
| Parlamento Europeu (multimedia.europarl.europa.eu e europarl.europa.eu) | robots veta `Claude-User`; AWS WAF |
| Conselho da UE (consilium.europa.eu) | "Browser check" (403) |
| FAQ de licença da ESA (open.esa.int) | o domínio não resolveu no DNS |
| EUMETSAT | 403 |
| Kansallisarkisto, Finna, api.finna.fi e Sotamuseo (Finlândia) | desafio do Cloudflare |
| SA-kuva | o domínio sa-kuva.fi não parece mais o arquivo oficial |
| Nasjonalarkivet (página de foto) | 403 ao WebFetch |
| Digitalarkivet (Noruega) | robots veta `Claude-User` e outros agentes de IA |
| Riksarkivet, busca e termos da API (sok.riksarkivet.se) | robots veta `Claude-User`; para `*`, veta as URLs de busca |
| kremlin.ru, en.kremlin.ru e government.ru | conexão não abre (timeout) |
| PIB (Índia) | Akamai "Access Denied" (403) |
| GODL (data.gov.in) | 503 no robots; o texto da licença não renderiza |
| KOGL (kogl.or.kr) | conexão recusada |
| Korea.net (site) | laço de redirecionamento |
| MOFA (Japão) | Akamai 403 |
| Ministério da Defesa do Japão (mod.go.jp) | 403 ao WebFetch |
| gov-online.go.jp (Japão) | 403 ao robots |
| gob.cl | desafio do Cloudflare |
| prensa.presidencia.cl | certificado TLS que não verifica |
| Presidência da Ucrânia | Akamai 403 |
| AIEA (site) | HTTP 402 (cobrança por acesso de robô) |
| Kringla (Suécia) | "Request Rejected" (WAF) |

Todos podem ser conferidos pelo navegador do app, com o Lucas vendo. Nenhum foi contornado.
