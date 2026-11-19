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
