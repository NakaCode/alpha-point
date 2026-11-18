# Austrália e os animais perigosos (vídeo 8): a base de fatos, leitor A (o porquê: a geografia e a evolução)

Lido em 18/11/2026. Escopo: o isolamento e a deriva da Austrália, as cobras (elapídeos, a taipan-do-interior e a medida de laboratório), o mar e o norte
tropical (vespa-do-mar, polvo-de-anéis-azuis, crocodilo, cones), as aranhas (funnel-web e redback, com os soros) e o endemismo. O leitor B (as mortes em
números e a medida nossa) é de outro agente.
Trecho literal: até 25 palavras, em inglês, como na fonte; número de referência entre colchetes foi cortado e vem marcado com "[…]".
Os arquivos baixados estão em `midia/australia-animais/fontes/a/` (fora do git; sha256 no fim). Os scripts do leitor A estão em
`pautas/australia-animais/_trabalho/scripts/` (`a_baixar.py`, `a_texto.py`, `a_pdf.py`, `a_epmc.py`, `a_epmc_q.py`, `a_contas.py`, `a_sha.py`, `a_robots_lote.sh`).

**Como li.** Todo pedido de rede levou o User-Agent do canal (`AlphaPoint-pauta/1.0`), um por vez, depois de ler o robots.txt do host (o `a_baixar.py` lê, guarda
e obedece). **Não usei o WebFetch**, então nenhum trecho leva [W]. O WebSearch só deu pistas de onde ler; o que veio **só** dele está marcado "visto por busca,
não lido". Os trechos de "(resumo)" vêm do resumo publicado do artigo, trazido pela API da Europe PMC (`ebi.ac.uk/europepmc`, aberta a programas: o JSON fica
guardado em `fontes/a/epmc-*.json`); onde o texto completo é aberto (CC BY), li o texto inteiro.
Uma ressalva de método, dita por inteiro: usei `python -c` em algumas linhas (cerca de sete) só para imprimir um pedaço de arquivo local (o verificador do canal deixa
passar), e não "Python só num arquivo", como o pedido manda. Nenhuma delas fez pedido de rede nem gravou nada.

## Resumo dos vereditos

| # | Fato | Veredito |
|---|---|---|
| A1 | O rifte entre a Austrália e a Antártida começou há 85 a 80 milhões de anos (Cretáceo tardio); foi o último grande evento da quebra de Gondwana | **CONFIRMADO** (Geoscience Australia) |
| A2 | A deriva rápida para o norte começou por volta de 45 Ma | **CONFIRMADO** (resumo de Hall 2013, a data é dele) |
| A3 | O "portão" da Tasmânia abriu fundo há 33,5 ± 1,5 Ma; a corrente circumpolar antártica começa por volta de 30 Ma | **CONFIRMADO** (resumo, Nature 2015) |
| A4 | A Austrália "isolada" por 40 a 50 milhões de anos (o resumo do Lucas) | **EM PARTE**: a Geoscience Australia dá "entre 55 e 10 Ma"; e a Austrália voltou a tocar a Ásia no Mioceno (A6) |
| A5 | A Austrália anda para o norte cerca de 7 cm por ano | **CONFIRMADO** (Geoscience Australia) |
| A6 | A colisão Austrália–Sudeste Asiático começou no Mioceno inicial e formou a Wallacea | **CONFIRMADO** (resumo de Hall 2013); o "25 Ma" do resumo de busca: **NÃO CONFERIDO** |
| A7 | A aridificação começou no Mioceno médio (~15 Ma); os desertos plenos do centro só apareceram há 1 a 4 Ma | **CONFIRMADO** (resumo, Byrne et al. 2008) |
| A8 | Só roedores e morcegos cruzaram a linha de Wallace entre a Ásia e a Austrália; as linhagens de lá vêm do clima úmido, as de cá, do seco | **CONFIRMADO** (Science 2023, texto lido) |
| A9 | Roedores murinos: 2 colonizações da Sahul; a linha de Wallace foi mais atravessada que a de Lydekker | **CONFIRMADO** (Rowe et al. 2019); "só no Plioceno": **NÃO CONFERIDO** |
| B1 | Elapídeos chegaram à Austrália numa janela larga de ~30 a 25 Ma, a partir de uma linhagem asiática; os elapídeos foram o primeiro grupo de cobras venenosas ali | **CONFIRMADO** como estimativa de relógio molecular (Lee et al. 2016) |
| B2 | Na Austrália as víboras estão ausentes e as colubrídeas de presa traseira chegaram depois; os elapídeos ocuparam a maioria dos nichos de cobra | **CONFIRMADO** (Jackson et al. 2016); a lista oficial (AFD): **NÃO CONFERIDO** (site recusou) |
| B3 | A radiação australiana é jovem: ~160 espécies do núcleo (com as cobras-do-mar) em menos de 10 Ma; ~100 elapídeos terrestres e ~30 marinhos | **CONFIRMADO** (Sanders 2008; Jackson 2016) |
| B4 | A taipan-do-interior é a mais tóxica no teste de laboratório em camundongo (Broad et al. 1979); o LD50 é a dose que mata metade dos camundongos | **CONFIRMADO** o posto; o **valor** "0,025 mg/kg": **NÃO CONFERIDO** (o artigo de 1979 não abriu) |
| B5 | O teste em camundongo não mede o perigo para gente; a taipan-do-interior tem 12 envenenamentos bem documentados, só 3 por cobra selvagem | **CONFIRMADO** (Ainsworth 2026; Weinstein 2017); "nenhuma morte registrada": **NÃO CONFERIDO** |
| B6 | A taipan-do-interior come mamíferos (ratos), vive nas planícies de inundação com rachaduras no solo; é "tímida" | **CONFIRMADO** (governo da Austrália do Sul) |
| B7 | O veneno forte e rápido das taipans (*Oxyuranus*) serviria a uma presa mamífera perigosa (picar e soltar, derrubar rápido) | **EM PARTE**: é **hipótese** dos autores ("probably"), não consenso |
| C1 | A vespa-do-mar (*Chironex fleckeri*): ~70 mortes atribuídas em águas tropicais australianas (até 2005); pólipos em riachos de maré; temporada de 1º de outubro a 1º de junho | **CONFIRMADO** (Currie & Jacups, MJA 2005) |
| C2 | Num estudo do Território do Norte (1991–2004), 1 morte em 225 picadas confirmadas | **CONFIRMADO** (a conta é minha; não é risco por banhista) |
| C3 | O polvo-de-anéis-azuis **não** é só do norte: *H. maculosa* vive na costa sul, de Fremantle à Tasmânia; o gênero vai até o Japão | **CONFIRMADO** (resumos, 2018 e 2023); o "por que a toxina": **HIPÓTESE** (defesa) |
| C4 | O crocodilo-de-água-salgada foi protegido no Território do Norte em 1971, depois de 26 anos de caça intensa, e se recuperou; ele vai do Sri Lanka ao norte da Austrália | **CONFIRMADO** (resumos, 2011 e 2023); o número total hoje: **NÃO CONFERIDO** |
| C5 | Cones: *Conus geographus* faz quase todas as mortes; 36 mortes em 139 casos no mundo; **uma** morte registrada na Austrália (1935, ilha Hayman) | **CONFIRMADO** (Kohn 2016; Healy 2022) |
| D1 | A toxina letal da funnel-web de Sydney evoluiu contra predadores vertebrados não humanos; matar primatas é "coincidência evolutiva"; cães e gatos são insensíveis | **CONFIRMADO** (PNAS 2020); "cães e gatos" é afirmação citada de revisão de 2002, não lida |
| D2 | Soro da funnel-web usado desde 1981; 13 mortes antes dele e nenhuma morte confirmada depois (revisão até 2004); mediana de 2 casos graves por ano em 1981–2004 | **CONFIRMADO** (MJA 2005) |
| D3 | Casos graves de funnel-web só em Nova Gales do Sul e sul de Queensland | **CONFIRMADO** (MJA 2005) |
| D4 | Redback: "nenhuma morte desde que o soro chegou, em 1956" | **EM PARTE**: é frase de carta de Wiener (2003), o autor do soro; e o ensaio RAVE-II (2014) achou que o soro não melhorou dor nem efeitos gerais |
| E1 | Endemismo (ABS 2002, tabela do WRI): mamíferos 206 de 260 (79 %), répteis 641 de 748 (86 %), aves 350 de 649 (54 %) | **CONFIRMADO** (fonte oficial, **antiga**) |
| E2 | A fauna de mamíferos terrestres: 273 espécies endêmicas; mais de 10 % já extintas | **CONFIRMADO** (resumo, PNAS 2015) |
| E3 | Endemismo atual do governo (SoE 2021, DCCEEW, Chapman 2009): rãs ~93 %, répteis ~90 %, mamíferos 83–87 % | **NÃO CONFERIDO** (os sites não responderam; só vistos por busca) |

## O que ficou NÃO CONFERIDO (para a Sala ler no navegador do app)

**Sites que recusaram a leitura automática (não contornei):**
1. **Australian Museum** (`australian.museum`): o `robots.txt` deu **403**. Páginas que importam: a taipan-do-interior
   https://australian.museum/learn/animals/reptiles/inland-taipan/ (o resumo de busca diz "rated as the most toxic of all snake venoms in LD50 tests on mice"); a funnel-web e o polvo-de-anéis-azuis
   (procurar na busca do próprio site; não tenho o endereço exato, só vi a lista de resultados do WebSearch); o Eoceno https://australian.museum/the-eocene-epoch (o resumo de busca diz que a Austrália ficou ligada à Antártida só
   pela Tasmânia, no começo do Eoceno).
   **Um pedido de página saiu depois do 403 do robots.txt** (`/learn/news/blog/an-australian-origin-story/`, 403 também): foi falha do meu script, que não parava
   no robots recusado; já consertei, e o `a_baixar.py` agora para.
2. **Australian Venom Research Unit, Universidade de Melbourne** (`biomedicalsciences.unimelb.edu.au`): `robots.txt` **403**. É a página que, pelo resumo de busca, diz que a
   taipan-do-interior "certainly does not rank amongst the world's most dangerous snakes, as there is not a single recorded human fatality":
   https://biomedicalsciences.unimelb.edu.au/departments/pharmacology/engage/avru/discover/snakes/taipansoxyuranus-sp. (e a da funnel-web:
   https://biomedicalsciences.unimelb.edu.au/departments/pharmacology/engage/avru/discover/spiders/funnel-web-spiders-atrax-robustus-and-hadronyche-sp. ).
   Ler no navegador: é a fonte do "nenhuma morte" da taipan e da lista das 25 cobras de menor LD50 (a lista do AVRU, que a National Geographic cita, **não** foi lida).
3. **Museums Victoria** (`museumsvictoria.com.au`): `robots.txt` **403**. **Queensland Government** (`www.qld.gov.au`, as páginas de "stingers"), **NSW Health**
   (`www.health.nsw.gov.au`) e **NT Government** (`nt.gov.au`, os números de crocodilos): `robots.txt` **403**. **ScienceDirect** (`www.sciencedirect.com`, o artigo de Broad et al. 1979):
   `robots.txt` **403**. **core.ac.uk** (uma cópia do artigo de Hall): **403**. **BioOne** (o texto integral de Fukuda 2011): devolveu a página de verificação de robô
   (Incapsula) e **não segui**; li só o resumo, no repositório da Western Sydney University.
4. **Australian Faunal Directory** (`biodiversity.org.au/afd`): o `robots.txt` e a página deram **405**. Para ler: https://biodiversity.org.au/afd/taxa/Elapidae e
   https://biodiversity.org.au/afd/taxa/COLUBRIDAE (a busca disse: "only 12 species in 9 genera occur in Australia" para as colubrídeas; **não lido**). A conferência
   "não há víboras nativas" pela lista oficial fica aqui; só tenho a frase de Jackson et al. 2016 (B2).
5. **Atlas of Living Australia, API** (`api.ala.org.au`): `robots.txt` **403**. No site `www.ala.org.au` só li o `robots.txt` (aberto); a busca não achou ali uma tabela de endemismo, então não fui atrás.

**Sites que não responderam (timeout, várias tentativas):**
6. **State of the Environment 2021** (`soe.dcceew.gov.au`; 3 tentativas, 90 a 100 s): https://soe.dcceew.gov.au/biodiversity/environment/flora-and-fauna. O resumo de busca diz: 243 rãs nativas,
   "around 93%" endêmicas; répteis ~10 % das espécies do mundo e ~90 % endêmicas. **Visto por busca, não lido.** É o número que o vídeo deveria usar para rãs e répteis.
7. **DCCEEW / environment.gov.au**: https://environment.gov.au/land/nrs/about-nrs/protecting-biodiversity e https://www.environment.gov.au/biodiversity/conservation/hotspots
   (resumo de busca: 83 % dos mamíferos, 89 % dos répteis, 45 % das aves); o relatório de Chapman (2009)
   https://www.environment.gov.au/system/files/pages/2ee3f4a1-f130-465b-9c7a-79373680a067/files/nlsaw-2nd-complete.pdf (resumo de busca: 87 % mamíferos, 93 % répteis,
   94 % rãs). O `robots.txt` abriu; as duas páginas deram timeout (1 tentativa de 60 s cada) e o PDF, também (3 tentativas, de 45 a 170 s). **Vistos por busca, não lidos.**

**O que não achei ou não li, mesmo com site aberto:**
8. **O artigo de 1979** (Broad, Sutherland & Coulter, "The lethality in mice of dangerous Australian and other snake venom", Toxicon 17:661–664,
   doi 10.1016/0041-0101(79)90245-9; PubMed 524395, sem resumo): o **valor do LD50 da taipan-do-interior** (0,025 mg/kg por via subcutânea, nos resumos de busca; 0,01 e 0,06
   em outras páginas de busca; os números variam com o método) **não foi lido**. O que está lido: que o artigo é a origem do posto "mais tóxica" (Jackson et al. 2016, ref. 21; Paz et al. 2025, ref. 26).
9. **O número total de crocodilos-de-água-salgada hoje no Território do Norte** (a busca não confirmou "mais de 100 mil"; o "100 mil" que aparece é o valor de antes da caça, segundo Webb).
10. **A origem de "cães e gatos são insensíveis" à funnel-web**: o PNAS 2020 cita Nicholson & Graudins 2002 (Clin Exp Pharmacol Physiol 29:785–794), **não lido**.
11. **"A colisão foi há 25 Ma"** (Hall): o resumo de 2013 só diz "Early Miocene"; o "25 Ma" veio de um resumo de busca de outro texto de Hall. **A chegada dos roedores no Plioceno** (Rowe et al. 2008,
    Mol Phylogenet Evol 47:84–101): só o título, na lista de referências de Rowe 2019.
12. **A área da funnel-web de Sydney** (o "raio de 160 km de Sydney" que se repete na internet): não achei fonte lida.
13. **O porquê ecológico do polvo-de-anéis-azuis no norte** e a **espécie e o lugar das mortes** dele: fica para o leitor B / uma busca à parte (aqui só o alcance geográfico).

## Notas ao resumo que o Lucas colou (e ao pedido)

- **"Isolada desde Gondwana, 40 a 50 milhões de anos"** (A4): não é uma data só. O rifte da Antártida começou há **85 a 80 Ma** (A1); a deriva rápida para o norte, por volta de **45 Ma** (A2);
  o mar fundo entre a Austrália e a Antártida abriu há **33,5 ± 1,5 Ma** (A3). A Geoscience Australia diz "entre 55 e 10 Ma" (A4). E a Austrália **deixou de estar isolada ao norte** quando
  encostou no Sudeste Asiático, no Mioceno inicial (A6): daí vieram os roedores, os morcegos e as cobras elapídeas. "40 a 50 milhões" é a metade da história; o texto da tela deve dizer
  "tens of millions of years" ou "about 45 million years since it started racing north", e não "isolated for 50 million years".
- **"Endemismo de ~80 %"** (E1 a E3): vale por grupo. Mamíferos **79 %** (ABS, 2002) ou **83 a 87 %** (páginas do governo, só vistas por busca); répteis **86 a 90 %**; rãs **~93 %**
  (esta, só por busca). Um "80 %" geral não aparece em nenhuma fonte lida. O número a usar precisa da leitura do SoE 2021 (NÃO CONFERIDO 6).
- **"Elapídeas chegaram há 40 milhões"**: não vi nenhuma fonte com isso. A janela das elapídeas pelo relógio molecular é de **~30 a 25 Ma** para todos os continentes (B1), e a explosão australiana
  é bem mais nova (menos de 10 a 12 Ma, B3).
- **"A taipan-do-interior é a cobra mais perigosa"** (B4 a B6): é a mais **tóxica no camundongo** (1979), e as próprias fontes dizem que isso não é perigo para gente. É o centro do paradoxo do vídeo.
- **"Nenhuma morte por aranha desde os soros"**: aqui só a funnel-web (D2: nenhuma confirmada de 1981 a 2004) e a redback (D4: carta de 2003). O "aranhas, no geral" e o que veio depois de 2004 são do leitor B.
- **A pergunta do pedido, item 4 ("a toxina é forte em primatas e fraca em cães e gatos, se a fonte confirmar")**: a fonte confirma, e vai além (D1): o artigo diz que a toxina evoluiu para outra coisa.

---

## A1. O rifte Austrália–Antártida: 85 a 80 milhões de anos · CONFIRMADO

- **Fonte**: Geoscience Australia, *AusGeo News* nº 104 (dez. 2011), "Cape Denison, the birthplace of Australian Antarctic expeditions", p. 4. https://www.ga.gov.au/bigobj/GA20294.pdf
  (`ga-cape-denison.pdf`). Lido em 18/11/2026.
- **Trecho**: "Antarctica began to rift from Australia much later, some 85 to 80 Ma in the late Cretaceous Period" e, na legenda da figura 4, "the last major geological event in the breakup of the supercontinent of Gondwana".
- **Nota**: a quebra de Gondwana como um todo começou no Jurássico, "around 185 Ma", pelo mesmo texto. A separação da Antártida foi a última peça. É começo de um processo lento, não "a ilha de uma vez".

## A2. A deriva rápida para o norte, por volta de 45 Ma · CONFIRMADO (resumo)

- **Fonte**: Hall, R. 2013. "The palaeogeography of Sundaland and Wallacea since the Late Jurassic". *Journal of Limnology* 72 (s2): e1, doi 10.4081/jlimnol.2013.s2.e1.
  https://www.jlimnol.it/index.php/jlimnol/article/view/jlimnol.2013.s2.e1 (`hall2013-landing.html`, resumo). Lido em 18/11/2026.
- **Trecho**: "At about 45 Ma Australia began to move north, subduction resumed and there was widespread rifting within Sundaland."
- **Nota**: o 45 Ma é de Hall, que escreve sobre o Sudeste Asiático; a Austrália aparece como a placa que se aproxima. O texto integral (PDF) não abriu (core.ac.uk: 403).

## A3. O "portão" da Tasmânia e a corrente circumpolar · CONFIRMADO (resumo)

- **Fonte**: Scher, H. D. et al. 2015. *Nature* 523: 580–583, doi 10.1038/nature14598 (PMID 26223626). Resumo pela Europe PMC (`epmc-gateway.json`). Lido em 18/11/2026.
- **Trecho**: "the deep Tasmanian Gateway opened 33.5 ± 1.5 million years ago" e "We observe onset of the ACC at around 30 million years ago".
- **Nota**: é a data do **mar fundo** entre a Austrália e a Antártida (a ponta da Tasmânia foi o último elo). O resumo diz que o início da corrente "coincided with major changes in global ocean circulation and probably
  contributed to the lower atmospheric carbon dioxide levels". A ligação dessa corrente com a **secagem da Austrália** (A7) **não** está em nenhum resumo lido: é inferência comum, não fato lido; não pôr na tela como
  fato. O resumo de Bijl et al. 2013 (*PNAS* 110: 9645–9650, `epmc-gateway.json`) põe a primeira abertura (um "portão" ao sul da Tasmânia, para uma corrente que ia para o oeste) em ~49–50 Ma, **mais cedo**: as
  datas variam com o que se chama de "abertura".

## A4. "Isolada" quanto tempo? · EM PARTE

- **Fonte**: Geoscience Australia, "The long history of Australian landforms".
  https://www.ga.gov.au/scientific-topics/national-location-information/landforms/australian-landforms-and-their-history (`ga-landforms.html`). Lido em 18/11/2026.
- **Trecho**: "Australia began its journey across the surface of the Earth as an isolated continent between about 55 and 10 million years ago".
- **Nota**: a página da GA dá uma **faixa larga** (55 a 10 Ma), não 40–50. A conta é de datas, não de uma linha: do início do rifte (85–80 Ma, A1) à deriva rápida (45 Ma, A2) são 35 a 40 milhões de anos de afastamento
  lento (`a_contas.py`). O "40 a 50 milhões de anos" do resumo do Lucas aparece, pelas buscas, na página "Gondwana" de uma sociedade de plantas australiana (visto por busca, não lido); não achei fonte científica lida que o diga.

## A5. 7 cm por ano para o norte · CONFIRMADO

- **Fonte**: a mesma página da Geoscience Australia (A4). Lido em 18/11/2026.
- **Trecho**: "continues to move north by about seven centimetres each year".
- **Nota**: "a placa mais rápida do mundo" (que aparece em blogs) **não** foi achado na GA; não usar a superlativa.

## A6. A colisão com a Ásia e a Wallacea · CONFIRMADO (resumo); "25 Ma" NÃO CONFERIDO

- **Fonte**: Hall 2013 (A2), resumo.
- **Trecho**: "Australia-SE Asia collision began, eliminating the former deep ocean separating the two continents, and forming the region now known as Wallacea."
- **Nota**: no resumo, a frase vem logo depois de "By the Early Miocene" (23 a 16 Ma). O mesmo resumo diz que "bathymetry changed very rapidly, especially during the Pliocene, but the detailed
  palaeogeography of this region remains uncertain": o caminho de ilhas (a Wallacea) é incerto no detalhe. É a porta pela qual entram roedores, morcegos e as cobras elapídeas (A8, A9, B1).

## A7. O clima secou: a aridificação · CONFIRMADO (resumo)

- **Fonte**: Byrne, M. et al. 2008. "Birth of a biome: insights into the assembly and maintenance of the Australian arid zone biota". *Molecular Ecology* 17: 4398–4417,
  doi 10.1111/j.1365-294x.2008.03899.x (PMID 18761619). Resumo pela Europe PMC (`epmc-arid.json`). Lido em 18/11/2026.
- **Trecho**: "Aridification of Australia began in the Mid-Miocene, around 15 million years" e "fully arid landforms in central Australia appeared much later, around 1-4 million years".
- **Nota**: o mesmo resumo diz que as linhagens adaptadas ao deserto mais antigas datam do Mioceno médio. O "clima secou" é gradual e tem dois momentos (15 Ma e 1–4 Ma).

## A8. Só roedores e morcegos cruzaram · CONFIRMADO

- **Fonte**: Skeels, A. et al. 2023. "Paleoenvironments shaped the exchange of terrestrial vertebrates across Wallace's Line". *Science* 381: 86–92, doi 10.1126/science.adf7122.
  Cópia do autor: https://vboussange.github.io/papers/science.adf7122.pdf (`sunda-sahul-science.pdf`; o PDF traz o carimbo "Downloaded from science.org"). Texto lido em 18/11/2026.
- **Trechos**: "only vagile rodents […] and bats […] have been successfully exchanged between continents"; "Sahulian lineages predominantly evolved in drier conditions, hampering establishment in Sunda and
  shaping faunal distinctiveness"; "rates of exchange estimated to be at least twice as high from Sunda to Sahul than in the opposite direction".
- **Nota**: o artigo escreve "the mammalian faunas of Sunda and Sahul are largely endemic". As linhagens da Sunda (Ásia) vieram de um clima úmido, parecido com o das ilhas de passagem; as da Sahul evoluíram no seco e
  ficaram presas. É o "porquê" da fauna sem os grandes placentários. A medida da assimetria é do artigo, e ele a atribui a outros estudos (ref. 23, não lida).
- O ABS (E1) tem uma frase do mesmo sentido: "Hooved animals, cats, canids (foxes and Dingos) […] are not found naturally here" (grupos de animais ausentes; o dingo aparece como introduzido).

## A9. Roedores murinos · CONFIRMADO; "só no Plioceno" NÃO CONFERIDO

- **Fonte**: Rowe, K. C. et al. 2019. *Journal of Biogeography* (título: "Oceanic islands of Wallacea as a source for dispersal and diversification of murine rodents").
  Cópia: https://www.bio.fsu.edu/steppanlab/assets/files/Rowe-etalWallaceaJBiogeog2019.pdf (`rowe2019-wallacea.pdf`). Lido em 18/11/2026.
- **Trechos**: "Wallacea was colonized eight times, the Phillipines five times, Sunda twice and Sahul twice" (a grafia "Phillipines" é do original); "Crossings of Wallace's Line were more common than subsequent transitions across Lydekker's Line to the east."
- **Nota**: a Sahul (Austrália + Nova Guiné) recebeu os murinos **duas vezes**. O artigo cita Rowe et al. 2008, "Pliocene colonisation and adaptive radiations in Australia and New Guinea (Sahul)"; só li o título.

## B1. Elapídeos: de onde e quando · CONFIRMADO como estimativa

- **Fonte**: Lee, M. S. Y., Sanders, K. L., King, B., Palci, A. 2016. "Diversification rates and phenotypic evolution in venomous snakes (Elapidae)". *Royal Society Open Science* 3: 150277,
  doi 10.1098/rsos.150277 (PMC4736917, CC BY 4.0). Texto integral por `ebi.ac.uk/europepmc` (`lee2016-fulltext.xml`). Lido em 18/11/2026.
- **Trechos**: "with all continents colonized within a period approximately between 30 and 25 Ma"; "elapids appear to be the first clade of venomous snakes to reach the continent";
  "Basal lineages are predominantly Asian, suggesting that this was the distribution of the common ancestor of extant elapids"; "this continent differed greatly from all other continents in lacking other advanced snakes, i.e. caenophidians".
- **Nota**: é uma janela de **todos os continentes**, não uma data da chegada à Austrália. O texto avisa que o registro fóssil de elapídeos é pobre ("a poor fossil record, including elapids"): a data vem de
  relógio molecular calibrado com fósseis. O grupo parente dos australianos inclui os kraits (*Bungarus*) da Ásia. **O que os artigos lidos sustentam**: elapídeos chegaram da Ásia, numa janela do Oligoceno (30 a 25 Ma).
  **Estimativa**: a data exata (sem fóssil de elapídeo australiano tão antigo nos textos lidos).

## B2. Sem víboras; colubrídeas depois · CONFIRMADO (afirmação do artigo)

- **Fonte**: Jackson, T. N. W. et al. 2016. "Rapid radiations and the race to redundancy: an investigation of the evolution of Australian elapid snake venoms". *Toxins* 8 (11): 309,
  doi 10.3390/toxins8110309 (PMC5127106, CC BY 4.0). Texto integral (`jackson2016-fulltext.xml`). Lido em 18/11/2026.
- **Trechos**: "viperid snakes are absent and NFFs are relatively recent arrivals" (NFF = cobras sem presa dianteira, as "colubrídeas"); "elapid snakes have diversified spectacularly in Australasia,
  occupying the majority of terrestrial snake niches and even invading the oceans".
- **Nota**: a frase se apoia em Shine (1991, *Australian Snakes: A Natural History*, não lido). A conferência pela lista oficial (AFD) deu **405** (NÃO CONFERIDO 4). Sem víboras e sem colubrídeas de peso, os
  elapídeos (que têm a presa dianteira oca, o "seringa") ficaram com o campo livre.

## B3. A radiação é jovem · CONFIRMADO

- **Fontes**: Sanders, K. L. et al. 2008. *Journal of Evolutionary Biology* 21: 682–695, doi 10.1111/j.1420-9101.2008.01525.x (PMID 18384538), resumo pela Europe PMC (`epmc-sanders2008.json`);
  e Jackson 2016 (B2). Lidos em 18/11/2026.
- **Trechos**: Sanders: "the approximately 160 species of the core Australian radiation (including sea snakes) arose within the last 10 Myr"; Jackson: "is less than 12 million years old"
  e "Australia is home to approximately 100 terrestrial and 30 marine species of elapid snake".
- **Nota**: os números diferem porque contam coisas diferentes (Sanders: o núcleo, com as cobras-do-mar; Jackson, ~100 terrestres e ~30 marinhas na Austrália). O mesmo resumo de Sanders diz que há ~100
  espécies de elapídeos terrestres australasianos e ~60 de cobras-do-mar vivíparas no grupo todo. O artigo de Lee 2016 (B1) diz que **não** viu aumento de ritmo de especiação ligado à colonização da Australásia: cuidado
  com "a chegada disparou uma explosão", que a fonte mais recente **não** apoia.

## B4. A taipan-do-interior e o LD50 · CONFIRMADO o posto; o valor NÃO CONFERIDO

- **Fontes**: Jackson 2016 (B2); Paz, G. G. et al. 2025, *Toxins* 17 (10): 488, doi 10.3390/toxins17100488 (PMC12567702, CC BY; `paz2025-fulltext.xml`); Ainsworth, S. et al. 2026, *PLOS Neglected Tropical Diseases*,
  doi 10.1371/journal.pntd.0014537 (PMC13405073; `ainsworth2026-fulltext.xml`). Lidos em 18/11/2026.
- **Trechos**: Jackson, sobre o complexo ativador da protrombina, exclusivo de *Oxyuranus* e *Pseudonaja*: "the most toxic snakes of all" (ref. 21 = Broad, Sutherland & Coulter 1979);
  e "partially underwrites the extreme toxicity of the venoms of Australian snakes to lab rodents". Paz 2025: "O. microlepidotus has higher lethality compared to other taipan species and is considered the most venomous snake in the world".
  Ainsworth 2026: "it is used to establish the lethality of venom in mice (the Median Lethal Dose (LD 50))".
- **Nota**: o LD50 é a dose que mata **metade** dos camundongos de teste (a via, a diluição e a linhagem mudam o número). O posto de "mais venenosa" vem do artigo de 1979. O **valor** da taipan-do-interior (0,025 mg/kg
  subcutâneo, nos resumos de busca) não foi lido (NÃO CONFERIDO 8); para a tela, "a mais tóxica em teste de camundongo (1979)" basta, sem número.

## B5. O teste em camundongo não é perigo para gente; os casos reais são poucos · CONFIRMADO

- **Fontes**: Ainsworth 2026 (B4); Weinstein, S. A. et al. 2017. "Neurotoxicity with persistent unilateral ophthalmoplegia from envenoming by a wild inland taipan […] in remote outback South Australia".
  *Toxicon* 137: 15–18, doi 10.1016/j.toxicon.2017.07.006 (PMID 28694006), resumo pela Europe PMC (`epmc-taipan-case.json`). Lidos em 18/11/2026.
- **Trechos**: Ainsworth: os ensaios de letalidade em camundongo "do not reflect the actual circumstances of snakebite envenoming"; Weinstein: "There have been 11 previously well-documented envenomings by O. microlepidotus, but only 2 were inflicted by wild snakes."
- **Nota**: com o caso do próprio artigo (uma cobra selvagem de ~1,5 m, paciente intubado, 3 dias de UTI, recuperado), são **12 envenenamentos bem documentados e 3 por cobra selvagem** (`a_contas.py`; a soma é minha).
  O resumo diz "life threatening envenoming" e não dá o desfecho dos 11 anteriores; **"nenhuma morte registrada"** (a frase do AVRU, vista por busca) fica NÃO CONFERIDO 2.

## B6. A taipan-do-interior: presa, lugar, temperamento · CONFIRMADO

- **Fonte**: governo da Austrália do Sul (South Australian Arid Lands), ficha "Inland Taipan".
  https://cdn.environment.sa.gov.au/landscape/docs/saal/woma-python-inland-taipan-student-fact.pdf (`sa-inland-taipan.pdf`). Lido em 18/11/2026.
- **Trechos**: "The Inland Taipan has the most potent venom of any land snake on earth, but fortunately it is usually quite shy" e "feed on small to medium sized mammals but seem to show a preference for rodents".
- **Nota**: a ficha cita o "Long-haired Rat" e o "Plains Rat", e diz que a cobra é registrada em planícies de inundação de argila rachada ("deep-cracking clays and loams") e nas planícies de pedra, dunas e afloramentos
  dos "Cooper and Diamantina Creeks" (a grafia é da ficha); abriga-se em tocas de rato e em rachaduras do solo. É ficha escolar de um órgão de governo, não artigo; serve como fato de lugar e de dieta, sem número.

## B7. Por que o veneno é forte: HIPÓTESE (não consenso)

- **Fonte**: Jackson 2016 (B2), seção 2.9 "Prey Defence Mechanisms" e o parágrafo sobre as formas de pegar a presa. Lido em 18/11/2026.
- **Trechos**: "The bites of mammals such as rodents and small marsupials are particularly dangerous"; "probably an adaptation for avoiding the risk of retaliation from the dangerous mammalian prey on which this genus specialises".
- **Nota**: a ideia: a taipan não pode agarrar um rato que morde, então **pica e solta**, e precisa de um veneno que derrube a presa em segundos (presa de pelo, fina, metabolismo alto). Os autores dizem "probably", e
  o artigo é uma discussão, não um teste. O mesmo texto avisa: "the most complex venom compositions […] were not those of the 'most toxic' species (e.g., Oxyuranus microlepidotus)": o **mais tóxico não é o mais complexo**.
  Do lado do consenso: a diferença entre toxicidade no camundongo e perigo para gente (B5). O que **não** achei: um estudo que diga que o veneno australiano é mais forte "por causa do isolamento" em si.

## C1. A vespa-do-mar (*Chironex fleckeri*) · CONFIRMADO

- **Fonte**: Currie, B. J., Jacups, S. P. 2005. "Prospective study of *Chironex fleckeri* and other box jellyfish stings in the 'Top End' of Australia's Northern Territory". *Medical Journal of Australia* 183 (11): 631–636.
  https://www.mja.com.au/journal/2005/183/11/prospective-study-chironex-fleckeri-and-other-box-jellyfish-stings-top-end (`mja2005-chironex.html`). Texto lido em 18/11/2026.
- **Trechos**: "has been the attributed cause of around 70 fatal jellyfish envenomings in tropical Australian waters"; "develops and replicates as polyps in tidal estuarine creeks and enters the sea at the beginning of each stinger season";
  "92% occurred during the 'stinger season' (1 October to 1 June), 83% occurred in water 1 m or less deep".
- **Nota**: o "~70 mortes" é o número do artigo, de 2005 (o leitor B pode ter um mais novo). O artigo avisa que o limite norte de *C. fleckeri* "not established" e que outra caixa-medusa
  multitentacular mata no Japão e nas Filipinas (outra espécie). **O "por que ali"**: água quente, riachos de maré para os pólipos e estação úmida; as fontes lidas dão o habitat, não uma causa evolutiva.

## C2. Uma morte em 225 picadas · CONFIRMADO (conta minha)

- **Fonte**: Currie & Jacups 2005 (C1). Lido em 18/11/2026.
- **Trecho**: "Box 5 shows the clinical features of the one fatality." (uma menina de 3 anos, em fevereiro de 1996, numa ilha de comunidade aborígine remota); "Eight per cent of those with of C. fleckeri stings required hospital admission." (a grafia "with of" é do original)
- **A conta** (`a_contas.py`): 1 morte em 225 picadas confirmadas (Darwin Harbour e ilhas Tiwi, 1991–2004) = **0,44 %**. Só conta quem chegou ao hospital ou ao posto; **não** é risco por banhista, e o
  artigo diz que não sabe quantas pessoas estavam na água.

## C3. O polvo-de-anéis-azuis · CONFIRMADO (resumos); o "por que a toxina" é hipótese

- **Fontes**: Morse, P. et al. 2018. *Ecology and Evolution* 8 (4): 2253–2267, doi 10.1002/ece3.3845 (PMC5817145; resumo pela Europe PMC, `epmc-bro.json`); Whitelaw, B. L. et al. 2023. *Molecular Phylogenetics and Evolution* 186: 107827,
  doi 10.1016/j.ympev.2023.107827; Whitelaw, B. L. et al. 2019. *Aquatic Toxicology* 206: 114–122, doi 10.1016/j.aquatox.2018.10.012. Lidos em 18/11/2026 (resumos).
- **Trechos**: Morse: "lacks a planktonic dispersal phase, yet ranges across Australia's southern coastline"; Whitelaw 2023: "known to occur from Southern Australia to Japan"; Whitelaw 2019:
  "Synthesised by bacteria, tetrodotoxin has been isolated from the tissues of several genera including pufferfish, salamanders and octopus. Believed to provide a defensive function".
- **Nota**: o resumo de Morse põe *H. maculosa* entre Fremantle (WA) e Stanley (Tasmânia), o que **corrige** a ideia de "bicho do norte tropical". A toxina é tetrodotoxina (de bactérias, como no baiacu); a função de defesa é
  "believed", ou seja, hipótese. O resumo de 2023 data a diversificação do gênero em ~30 milhões de anos; o artigo diz que há mais espécies do que as 4 descritas. O polvo-de-anéis-azuis que mata em
  Queensland que aparece no resumo é o de um menino de 4 anos socorrido a tempo, com 17 horas de ventilação (Cavazzoni et al. 2008, *Clin Toxicol* 46: 760–761): é relato de caso, não contagem de mortes (leitor B).

## C4. O crocodilo-de-água-salgada · CONFIRMADO (resumos)

- **Fontes**: Fukuda, Y. et al. 2011. "Recovery of saltwater crocodiles following unregulated hunting in tidal rivers of the Northern Territory, Australia". *Journal of Wildlife Management* 75 (6): 1253–1266, doi 10.1002/jwmg.191
  (resumo, no repositório da Western Sydney University: https://researchers.westernsydney.edu.au/en/publications/recovery-of-saltwater-crocodiles-following-unregulated-hunting-in/, `fukuda2011-ws.html`);
  Lloyd-Jones, L. R. et al. 2023. *Evolutionary Applications* 16 (4): 911–935, doi 10.1111/eva.13545 (PMC10130557). Lidos em 18/11/2026.
- **Trechos**: Fukuda: "were protected in 1971, after a severe population decline resulting from 26 yr of intense commercial hunting" e "achieving full recovery from uncontrolled hunting in 1945-1971";
  Lloyd-Jones: "the largest and most widely distributed of living crocodilians, extending from Sri Lanka to Southeast Asia and down to northern Australia".
- **Nota**: o crocodilo não é "da Austrália": a espécie vai até o Sri Lanka. O que **é** do vídeo: o perigo de hoje depende de uma **política** (a proteção de 1971). O resumo de Fukuda diz que o aumento "is posing management
  issues for public safety". O resumo informa 5,26 crocodilos que não são filhotes por km de rio em 2010 (densidade, não população total); o total no Território do Norte: NÃO CONFERIDO 9.

## C5. Os cones · CONFIRMADO

- **Fontes**: Kohn, A. J. 2016. "Human injuries and fatalities due to venomous marine snails of the family Conidae". *Int J Clin Pharmacol Ther* 54 (7): 524–538, doi 10.5414/cp202630 (PMID 27285461), resumo pela Europe PMC (`epmc-kohn.json`);
  Healy, J. M. 2022. "A return to Hayman Island: revisiting Australia's only recorded cone snail fatality after 85 years". *Memoirs of the Queensland Museum – Nature* 63: 41–83.
  https://museum.qld.gov.au/collections-and-research/memoirs/nature-63/mqm-n63-5-healy (`qm-healy2021.html`). Lidos em 18/11/2026.
- **Trechos**: Kohn: "It accounts for about half of the known human envenomations and almost all the fatalities" (sobre *Conus geographus*); "Death occurred in 36 cases" (de 139 casos aceitos);
  Healy: "the events of that day in June 1935" e a morte de Charles Hugh Garbutt "from a cone snail 'sting' inflicted at Hayman Island on the Great Barrier Reef".
- **Nota**: no **mundo**, 36 mortes em 139 casos (a conta é do artigo; a soma dos três grupos, 137, não fecha com 139, e o resumo diz que alguns casos são "tentativos"). Na **Austrália**, o título de Healy chama de
  "only recorded" a morte de 1935 (o artigo foi aceito em outubro de 2020 e publicado em janeiro de 2022). A frase da tela tem de levar esse limite: "the only recorded cone-snail death in Australia, as of that study".

## D1. A funnel-web de Sydney: a toxina que "não era para nós" · CONFIRMADO

- **Fonte**: Herzig, V. et al. 2020. "Australian funnel-web spiders evolved human-lethal δ-hexatoxins for defense against vertebrate predators". *PNAS* 117 (40): 24920–24928, doi 10.1073/pnas.2004516117
  (PMC7547274; `herzig2020-pmc.html`, `epmc-herzig2020.json`). Texto lido em 18/11/2026.
- **Trechos**: "Humans and other primates did not feature in the prey or predator spectrum during evolution of these spiders"; "in striking contrast to humans and other primates, some vertebrates such as dogs and cats are
  insensitive to funnel-web envenomation" (o artigo cita Nicholson & Graudins 2002 aqui); "with their lethal effects on humans being an unfortunate evolutionary coincidence"; e "mostly inflicted by male spiders that wander from their burrow in search of females".
- **Nota**: a toxina (δ-HXTX) causa **dor em camundongo** e é inseticida; o artigo propõe que ela nasceu contra insetos e foi reaproveitada como defesa contra vertebrados que não são humanos. É a hipótese dos
  autores (a evidência: dor em camundongo, conservação da sequência e efeito em baratas e moscas); o resumo diz "we propose". A frase de que os machos mordem mais é do artigo ("mostly inflicted"), e não é uma contagem.

## D2. A funnel-web e o soro de 1981 · CONFIRMADO

- **Fonte**: Isbister, G. K., Gray, M. R., Balit, C. R. et al. 2005. "Funnel-web spider bite: a systematic review of recorded clinical cases". *Medical Journal of Australia* 182 (8): 407–411.
  https://www.mja.com.au/journal/2005/182/8/funnel-web-spider-bite-systematic-review-recorded-clinical-cases (`mja2005-funnelweb.html`). Texto lido em 18/11/2026.
- **Trechos**: "Funnel-web spider antivenom was first used in 1981."; "13 deaths (all before the introduction of antivenom in 1981), seven in children"; "We found no confirmed deaths after funnel-web spider bite since the antivenom was introduced.";
  "The median number of cases of severe envenoming for 1981–2004 was 2 per year".
- **Nota**: o estudo reúne registros de museu desde 1926 e a literatura até 2004; as 13 mortes são as que **a revisão achou** (não é um censo de mortes do país). O soro reverteu o quadro em 97 % dos casos com a aranha identificada
  por especialista. A conta (`a_contas.py`): 13 + 16 + 48 = 77 casos graves, como no artigo. "Sem mortes confirmadas desde 1981" vale **até 2004**; o que veio depois é do leitor B.

## D3. Onde a funnel-web é grave · CONFIRMADO

- **Fonte**: a mesma revisão (D2).
- **Trecho**: "Severe funnel-web spider envenoming is confined to NSW and southern Queensland".
- **Nota**: picadas de funnel-web (por especialista) ocorreram em todos os estados do leste (108 em NSW, 16 em Queensland, 9 na Tasmânia, 3 em Victoria, 1 no ACT e 1 na Austrália do Sul), mas os casos **graves** ficaram
  em NSW e sul de Queensland. A área "a 160 km de Sydney": NÃO CONFERIDO 12.

## D4. A redback e o soro de 1956 · EM PARTE

- **Fontes**: Wiener, S. 2003 (carta). "Latrodectism: a prospective cohort study of bites by formally identified redback spiders". *Med J Aust* 179 (8): 455–456
  (`mja2003-redback.html`); Isbister, G. K., Gray, M. R. 2003, *Med J Aust* 179 (2): 88–91, doi 10.5694/j.1326-5377.2003.tb05442.x (PMID 12864719; resumo, `epmc-redback2003.json`);
  Isbister, G. K. et al. 2014. *Annals of Emergency Medicine* 64 (6): 620–628, doi 10.1016/j.annemergmed.2014.06.006 (PMID 24999282; resumo, `epmc-rave2.json`). Lidos em 18/11/2026.
- **Trechos**: Wiener: "No fatalities have occurred from redback spider bite since antivenom became available in 1956"; Isbister & Gray 2003: "Intramuscular antivenom appears to be less effective than previously thought";
  RAVE-II: "did not significantly improve pain or systemic effects".
- **Nota**: o "nenhuma morte desde 1956" vem de uma **carta** assinada por Saul Wiener, que é o autor do artigo de 1956 sobre o soro da redback (aparece na lista de referências da própria carta): fonte com interesse. Não achei
  a contagem das mortes anteriores a 1956 em fonte lida. O ensaio de 2014 (224 pacientes, placebo contra soro, com analgesia padrão) achou 34 % contra 23 % de melhora da dor às 2 h (P = 0,10), sem diferença significativa;
  não mede morte. **O que dá para dizer**: o soro está em uso desde 1956 e não há morte relatada desde então; **não** dá para dizer que o soro "evitou" mortes de redback, só que elas já eram raras.

## E1. Endemismo, a tabela oficial (antiga) · CONFIRMADO

- **Fonte**: Australian Bureau of Statistics, "1370.0 – Measuring Australia's Progress, 2002", comentário "Biodiversity: Looking more closely" (conteúdo arquivado; a tabela é do World Resources Institute).
  https://www.abs.gov.au/AUSSTATS/abs@.nsf/7d12b0f6763c78caca257061001cc588/9A0C82D0F59158DCCA256BDC0012240D (`abs-biodiv.html`). Lido em 18/11/2026.
- **Trecho**: "About 90% of our reptiles and frog species are endemic, and about 80% of our mammals and 85% of flowering plants."
- **A conta** (`a_contas.py`, a partir da tabela): mamíferos 206 de 260 = **79,2 %**; aves que se reproduzem 350 de 649 = **53,9 %**; répteis 641 de 748 = **85,7 %**. Na mesma tabela: Brasil 29 % dos mamíferos; Índia 14 %;
  Indonésia 49 %; EUA 24 %; Canadá 4 %.
- **Nota**: a página diz que é "approximate" e "archived". É a única fonte oficial **lida** com endemismo por grupo; os números do SoE 2021, do DCCEEW e de Chapman estão no NÃO CONFERIDO (6 e 7).

## E2. Os mamíferos terrestres · CONFIRMADO (resumo)

- **Fonte**: Woinarski, J. C. Z., Burbidge, A. A., Harrison, P. L. 2015. "Ongoing unraveling of a continental fauna: decline and extinction of Australian mammals since European settlement". *PNAS* 112: 4531–4540,
  doi 10.1073/pnas.1417301112 (PMID 25675493). Resumo pela Europe PMC (`epmc-woinarski.json`). Lido em 18/11/2026.
- **Trecho**: "The highly distinctive and mostly endemic Australian land mammal fauna has suffered an extraordinary rate of extinction (>10% of the 273 endemic terrestrial species)".
- **Nota**: **273 espécies endêmicas** de mamíferos terrestres; as extinções vêm sobretudo de gatos e raposas introduzidos e do fogo. A conta do endemismo em porcentagem **não** está nesse resumo.

---

## Arquivos baixados (sha256, primeiros 16 caracteres; todos em `midia/australia-animais/fontes/a/`, fora do git)

```
4188342610906aca  abs-biodiv.html            80946ae7422ee358  ainsworth2026-fulltext.xml   e1481ecae04a33cf  fukuda2011-ws.html
05673ff63e51f615  ga-cape-denison.pdf        2bf0a1acba9a1e6c  ga-landforms.html            c720f06a25239d15  hall2013-landing.html
39a52d9cd08c7733  herzig2020-pmc.html        79078f86b4f81bfb  jackson2016-fulltext.xml     4e6df087db5591d7  lee2016-fulltext.xml
1450ab794315b4b7  mja2003-redback.html       6f5c1e53184b3ce0  mja2005-chironex.html        86c6cf205a56d269  mja2005-funnelweb.html
902ffd157484b872  paz2025-fulltext.xml       0b1d2c73c4d71a53  qm-healy2021.html            45837f78b8c4b9cb  rowe2019-wallacea.pdf
ff1cc4ab47123b96  sa-inland-taipan.pdf       332075cce85fcfcf  sunda-sahul-science.pdf
epmc-*.json (resumos da Europe PMC): arid, bro, broad1979, croc1/2/3 (sem uso), gateway, herzig2020, jackson2016, kohn, lee2016, ld50 (b, c, sem uso), rave2, redback2003, sanders2008,
  sunda (sem uso: é sobre plantas), taipan-case, woinarski
```

Os `_robots-*.txt` e os `.txt` ao lado dos HTML/PDF (texto extraído) também estão lá. Resultados de busca do WebSearch (só pistas): a lista de links que cada uma deu está nas notas acima, sempre com "visto por busca, não lido".
