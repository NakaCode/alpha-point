# O que a Sala leu no navegador do app: `australia-animais` (vídeo 8), passo `research`

A Sala de controle lê aqui o que as pesquisas não puderam ler por programa (o site recusa robô, ou a página só se abre clicando). Pela
decisão do Lucas de 27/09/2026 ("Sim, pode (Recomendado)", no `CLAUDE.md`, "A marca"), ela busca sem ele acompanhar, devagar, só nas
páginas necessárias, e para em qualquer verificação de robô. As leituras da pauta, de 18/11/2026, estão em
`pautas/2026-11-18-video-8-australia.md` ("As leituras da Sala").

## 19/11/2026

### O NCIS: o literal de s63 P3 (a prova que o `pesquisa-documentos` pediu)

- **A página:** https://www.ncis.org.au/research-publications/fact-sheets, lida às 01:22, sem verificação de robô.
  - O item "Animal-related deaths in Australia" da "Common interest series" abriu com um clique.
  - O texto saiu do próprio elemento da página, e a cópia está em `midia/australia-animais/fontes/s/ncis-fact-sheets-2026-11-19.txt`,
    fora do git.
- **O literal** é o mesmo que a Sala transcreveu em 18/11, palavra por palavra: "Australia has a reputation for being home to some of the
  world’s most dangerous animals. Thousands of hospital admissions are attributable to contact with bees, hornets, wasps, spiders, snakes,
  ticks, ants and marine animals each year in Australia. However, deaths as a result of these interactions remain relatively rare,
  particularly in comparison to deaths associated with other species."
- **A licença**, na mesma página: "Content is provided under a Creative Commons Attribution 4.0 International License (CC BY 4.0), unless
  otherwise stated. Attribution must be provided to the National Coronial Information System (NCIS)."
- **O PDF da ficha** (FS24-09) não foi baixado: o download espera o "sim" do Lucas.

### As fontes australianas que o `pesquisa-imagens` apontou (~01:3x–01:4x)

Antes de cada site, a Sala leu o robots.txt dele no navegador do app e procurou os nomes da Anthropic (`APRENDIZADOS.md`, item 99). Nada foi
baixado, e nenhum formulário foi preenchido.

- **O National Archives of Australia (s47 P1, a produção de soro de época).**
  - **O robots.txt** (`www.naa.gov.au`) só veta o GPTBot; nenhum nome da Anthropic.
  - **A foto:** "Antivenom development at Commonwealth Serum Laboratories", do Australian Information Service, de 1968 (NAA: A1200, L78947),
    na página https://www.naa.gov.au/students-and-teachers/learning-resources/learning-resource-themes/science-and-technology/antivenom-development-commonwealth-serum-laboratories.
    A página diz: "a black and white photo of a woman working in a laboratory for Commonwealth Serum Laboratories (CSL). She is holding a
    glass tube that contains the antivenom for snake bites manufactured at CSL."
  - **A licença** (https://www.naa.gov.au/home/national-archives-copyright): o conteúdo do site está sob a CC BY 4.0 da Austrália, menos o
    material de terceiros, o logo e o brasão. Para o acervo, a página diz: "Please note there are additional terms to those provided by the
    Creative Commons licence that apply to use of the National Archives' collection material", e "Various copyright conditions apply to
    content in the National Archives collection, depending on the type of material and its age. For permission to reproduce images and
    records from the collection, submit a copyright request."
  - **O que isso quer dizer:** a foto do acervo não tem licença aberta. Usá-la pede um pedido de permissão ao arquivo, por formulário, e a
    decisão de mandar é do Lucas.
- **A State Library NSW (s47 P1, as fotos da CSL de 1960):** o `collection.sl.nsw.gov.au` pediu verificação de humano já no robots.txt
  (HTTP 405, "Vamos confirmar que você é humano"). A Sala parou ali.
- **O Australian Reptile Park (s69 e s70 P1, a ordenha):**
  - o robots.txt libera tudo (`Allow: /`);
  - o site não tem licença para as fotos. A página "Media Requests" (https://www.reptilepark.com.au/media-requests) manda os pedidos de
    imprensa e de filmagem à equipe de marketing, e a filmagem no parque é paga ("fees are charged to offset these costs");
  - **o que isso quer dizer:** a foto do parque pede contato com ele, que é parte interessada no vídeo. A decisão é do Lucas.
- **A EurekAlert (s51 P2, a *Chironex fleckeri*):**
  - o robots.txt não veta a Anthropic nem a página da foto;
  - a página (https://www.eurekalert.org/multimedia/917624; University of Sydney, crédito "Photo by Jamie Seymour") diz "USAGE RESTRICTIONS:
    Only for this story" e "LICENSE: Licensed content";
  - **o que isso quer dizer:** a foto não serve ao vídeo. O "may be used with appropriate caption and credit" do resumo da busca não está na
    página. A s51 P2 fica com a caça.

### O PDF do NCIS, com o "sim" do Lucas (~07:3x)

- **O sim:** o Lucas, no chat da Sala, 19/11/2026, ~07:30, marcou "Baixar o PDF do NCIS" entre as liberações. A opção dizia: "A ficha 'Animal-related
  deaths in Australia' (PDF, 562 KB), do site do NCIS, com licença CC BY 4.0. Os números dos cavalos e do gado poderiam ir à tela, não à voz."
  (`roteiros/australia-animais/decisoes-lucas.md`).
- **O robots.txt, antes (07:3x, no navegador do app):** o do `www.ncis.org.au` é o padrão do Drupal, sem nenhum nome da Anthropic e sem vetar
  `/research-publications/`. O `files.ncis.org.au`, onde o PDF mora, é um armazenamento S3 sem robots.txt (o pedido devolve o
  "AccessDenied" de arquivo inexistente).
- **A cópia:** o arquivo já estava na pasta Downloads desde 18/11, às 19:53, quando o clique da Sala no link abriu a janela de salvar (o
  registro da pauta, `pautas/2026-11-18-video-8-australia.md`, diz que ela não seguiu, e o arquivo chegou assim mesmo). Para não abrir outra
  janela de salvar, a Sala o comparou com o que o servidor entrega hoje, calculando o sha256 dentro do navegador do app, sem gravar nada: são
  iguais.
  - O servidor: HTTP 200, `application/pdf`, 576.266 bytes, `Last-Modified: Mon, 25 Nov 2024 08:05:44 GMT`, a versão S3
    `q3ihr7W89pBmkQ3Rseqz0laXFx7z9rYe` (a do link da página), o ETag `7acf00826aa10c74e7977fe6988653d6`.
  - A cópia: sha256 `6bdefa14e314ed5b9364b21b592ccc42b070595b37c1e349e77e5ca04b14b765` (igual ao do servidor), md5 igual ao ETag.
  - Gravada em `midia/australia-animais/fontes/s/ncis-fs24-09-animal-related-deaths-2024.pdf`, fora do git. O texto extraído está em
    `out/australia-animais/_tmp/ncis/fs24-09.txt`.
- **A ficha** ("NCIS FACT SHEET · Animal-related deaths in Australia · NOVEMBER 2024", FS24-09, 4 páginas):
  - **O recorte:** os casos fechados de morte por causa externa relatados a um legista australiano de 01/01/2001 a 31/12/2021, com a
    contribuição de um animal nos campos codificados; extraídos em agosto de 2024.
  - **Os números:**
    - o total: 713 mortes (34 por ano em média), das quais 70,8 % envolveram mamíferos terrestres (505);
    - os mamíferos: os cavalos com 222 (31,1 %), os bovinos com 92 (12,9 %), os cães com 82 (11,5 %) e os cangurus com 53, todas em
      acidente de veículo;
    - os outros: as cobras com 50 (47 com cobra venenosa), as abelhas com 45 (todas por anafilaxia), os tubarões com 39 e os crocodilos com
      25.
  - **O literal sobre as aranhas:** "There were no deaths confirmed to have involved a spider bite".
  - **A licença, na p. 4:** "Unless otherwise stated, this content is provided under a Creative Commons Attribution 4.0 International License
    (CC BY 4.0), with the exception of logos, images or branding. Attribution must be provided to the NCIS."

### A NAA e o Reptile Park, depois do sim do Lucas (~07:4x)

- **A NAA:** o pedido de permissão ("copyright request", na página de copyright) é um formulário em `reftracker.naa.gov.au`. O robots.txt desse
  host (o gerenciado do Cloudflare) veta `ClaudeBot`, `anthropic-ai` e `Claude-Web`. Por isso a Sala não abriu o formulário, nem pelo navegador
  do app (`APRENDIZADOS.md`, item 99): o Lucas o manda, com o texto que a Sala deixou em `out/australia-animais/_tmp/pedidos-de-licenca.md`.
- **O Reptile Park:** a página "Media Requests" manda os pedidos de imagem e de filmagem ao e-mail da equipe de marketing, que ela publica. A
  filmagem no parque é paga ("Fees may be waived or reduced if ARP is highlighted or mentioned in the editorial script"). O Lucas manda o e-mail,
  com o texto do mesmo arquivo; o vídeo não apresenta o parque como patrocinador nem parceiro.
