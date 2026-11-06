# A caça nos bancos pagos do vídeo 5 (big-sur)

O relato de cada caça, pela skill `.claude/skills/cacar-no-chrome/SKILL.md` (§6). Uma seção por caça, que não se apaga.
A conta é `lucas-rosa` (o apelido do `marca/midia.json`); nada de e-mail, usuário ou ID de conta aqui.

## Caça 1 · 05/11/2026

**O pedido.** O Lucas, no chat da Sala, às 11:5x, à mensagem da manhã, cuja pergunta 1 era "Faço a caça nos bancos pagos? São 16
itens com cena (lista em `out/big-sur/_pendencias-banco-pago.md`). Sem ela, uma foto da costa aparece 5 vezes, a da estrada 3, e
outras duas aparecem 2 vezes cada. Com ela, essas repetições somem. Preciso do Brave aberto, e a caça não roda junto com render.",
respondeu: "1 sim, pode caçar. 2 mantém 1934." (registrado em `roteiros/big-sur/decisoes-lucas.md`).
- **A lista:** `out/big-sur/_pesquisa/lista-de-caca.json` (do `pesquisa-imagens`, sha256 `5b0cf136…`). São 18 itens, e 16 se caçam:
  o s22-a e o s40-a têm `"estado": "sem lugar na regência"` e `"fora_da_lista_do_lucas": true` (skill, §1, "Item sem lugar"). Todos
  são vídeo de hoje, um arquivo de cada, na ordem Envato, Motion Array, Storyblocks e Shutterstock. A ordem da lista é a prioridade:
  as três imagens reais do gancho primeiro (s01, s05 e s12), depois a ordem do vídeo.
- **A máquina:** nenhum setor trabalhava. O `chrome.json`, o `linha-do-tempo.json` e o `conferente-big-sur.json` estavam livres, e a
  Sala marcou o `out/_maquina/caca.json` ocupado às 12:04.

**O combinado** (§0, item 6), dito no chat às 12:0x, antes de qualquer busca, junto do pedido para abrir o Brave (só o Chrome do Top10
estava conectado, e nada se chamou nele). A resposta do Lucas, às 12:04: "pronto, abri o brave com todas contas corretas conectadas".
A Sala a tomou como o ok ao combinado, porque responde à mensagem que o trazia, e o diz a ele na mensagem da lista de aprovação.

**O Shutterstock** entra, em último, como na caça do Atlântico (§0, item 10). O `teto`, às 12:05: 0 de 100 usados hoje, restam 100.

### Fase A

**O navegador** (§0, item 5).
- O primeiro `list_connected_browsers` (12:0x) mostrou só o Chrome do Top10 (`8059a56f…`), em uso. Nada se chamou nele.
- Com o Brave aberto, o segundo mostrou o Brave `Default` (`2e106ec9…`, conectado às 12:03, o `connectedAt` `1793890980499`) e o
  do Top10, ainda em uso. O `select_browser` foi no Brave, e o `inUse` passou a ele.
- **A prova do perfil, às 12:05:** a sessão não via grupo de abas; o `tabs_context_mcp` com `createIfEmpty` abriu uma janela nova do
  Brave, com o grupo da caça e uma aba vazia (a aba fixa desta caça). Numa segunda aba, a marca
  `alpha-point-perfil-20261105-120428-15016` foi aberta às 12:04 e achada no histórico do Brave `Default` na segunda procura
  (12:05:03). A aba da prova fechou às 12:05; a aba fixa ficou.
- **A extensão reconectou sem erro às 12:37:46** (o `connectedAt` passou de `1793890980499` a `1793893066198`), com o `inUse` ainda
  no Brave. A Sala viu a troca na conferência das 13:02, antes da primeira página do Motion Array (as conferências são antes da
  primeira busca de cada banco e de cada clique que baixa, e o Envato já estava aberto desde 12:05). A prova se refez antes de
  qualquer outro clique: a marca `alpha-point-perfil-20261105-130159-29245`, achada no histórico do Brave `Default` na segunda
  procura (13:02:28), e a aba da prova fechada. A caça seguiu sem pedir de novo as contas (§0, item 5; Lucas, 07/10/2026). As
  páginas do Envato entre 12:37 e 13:02 mostraram a mesma conta.

**As contas** (§0, item 7), lidas no topo da primeira página de cada banco, sem abrir página de conta: no Envato, "Assinaturas"
(no pé da barra lateral); no Motion Array, "Business"; na Storyblocks e no Shutterstock, só o avatar. São os rótulos do Atlântico.
O Lucas disse "todas contas corretas conectadas" às 12:04, e os rótulos vão a ele com a lista.

**O ritmo** (§2.2): 30 s fixos entre duas páginas do mesmo banco, contados por um script da Sala, com o registro fora do git
(`out/big-sur/_tmp/caca/ritmo.json`). Do Envato sozinho (12:05–13:02) ao rodízio dos quatro bancos (13:02–13:38). O clique de filtro
que recarrega a grade contou como página. Nenhum banco recusou, e nenhum pediu verificação de robô.

**Os filtros da marca** (§2.2), ligados na página:
- **Motion Array:** *Usage Rights → Commercial Use* (a página pôs `specs=editorial:exclude` na URL, e as buscas seguintes a usaram).
- **Storyblocks:** a resolução 4K (`video_quality=4K`). O "Editorial: No" se conferiu no *Video Details* de cada item.
- **Shutterstock:** no painel "Filtros aplicados", o 4K (`res=4k`) e *Uso → Não editorial* (`release=non-editorial`; o primeiro
  clique não pegou, e o segundo sim, às 13:32). A busca de vídeo não tem filtro de IA (`APRENDIZADOS.md`, item 70), e a IA se
  conferiu na página do item.
  - **Para o Lucas:** às 13:32 a Sala clicou "Salvar" no painel, achando que só aplicava os filtros. O painel passou a mostrar
    "Filtros salvos" (4K, Horizontal, Somente vídeos ilimitados), com a nota "Filtros salvos podem ser aplicados a todas as
    pesquisas futuras". Pode ter ficado salvo na conta dele. Vai a ele com a lista, e o "Limpar" do painel só com o ok dele.

**Os players**, medidos nesta caça (as prévias em 15, 50 e 85 % da barra, com o tempo do player em cada uma):
- **Envato (16:9):** o primeiro clique só mostra os controles. Cada clique na barra volta a tocar e pede a pausa (botão em 355,506; a
  barra em y 539, de x 352 a 1164). O zoom do vídeo dá 1026 × 578. No clipe 4096 × 2160, o player é mais baixo (a barra em y 509).
  O zoom do painel da direita estoura o tempo do CDP: o print da página é recorte de um screenshot inteiro, sem o topo.
- **Motion Array:** mostra a capa até o vídeo tocar uma vez (play e pausa antes das prévias). A barra busca sem tocar. O zoom do player
  estourou o tempo do CDP três vezes: as prévias do s42-a são recortes de screenshot inteiro (893 × 502).
- **Storyblocks:** os controles aparecem no *hover*, e o zoom deu 996 × 560.
- **Shutterstock:** o zoom da caixa do player deu 1180 × 500, com as faixas cinzas dos lados.
- **Um tropeço:** às 13:08 a navegação da Storyblocks para o Motion Array não saiu da página (que estava com o *Video Details*
  aberto). As ferramentas responderam "the page navigated to a different domain", e nada se clicou. A segunda navegação (13:09:34)
  carregou.

**Os candidatos** (§2.4): 17 para os 16 itens, em `candidatos-caca.json` (sha256 `a5e2ab7f…`), com as prévias em
`previas/<id>-p15|p50|p85.png` e o print em `previas/_pagina/<id>.png` (fora do git).

| Candidato | Cena | Banco | Item | Autor | Busca |
|---|---|---|---|---|---|
| s01-a | s01 | Envato | `2dfb456b…` "Aerial of Bixby Bridge and coastline of California" | forrestbro | Bixby Bridge aerial |
| s05-a | s05 | Envato | `1f008962…` "Drone view of sandy beach and Pacific Ocean waves crashing in big sur California" | DepictionImages | Big Sur coastline aerial |
| s12-a | s12 | Envato | `4c7608ca…` "Experience the Stunning Aerial View of Big Sur Along Highway 1…" | olegb10 | Big Sur Highway aerial |
| s18-a | s18 | Envato | `9c2e1104…` "California seaside coast beach along famous Highway One Big Sur at Monterey. Aerial." | BlackBoxGuild | Big Sur mountains ocean |
| s20-a | s20 | Envato | `04f8f43b…` "Beautiful Aerial View of Big Sur Coastline" | Pro-Studio | Big Sur cliffs aerial |
| s21-a | s21 | Envato | `e1ae4a55…` "Coastal Highway Winds Along Big Sur Cliffs" | ShiftDrive | Big Sur cliff road |
| s35-a | s35 | Envato | `df4a2136…` "Aerial View of Bixby Creek Bridge in California" | Vadim_Key | Bixby Bridge side view |
| s38-a | s38 | Shutterstock | `1108699909` "McWay Creek trickles through the forest in Big Sur State Park" | BlackBoxGuild | Big Sur redwood forest |
| s42-a | s42 | Motion Array | `2054502` "Big Sur Coast At California Highway 1" | bydronevideos | Big Sur coast aerial |
| s45-a | s45 | Envato | `d2ada2cb…` "Scenic Bixby Bridge Overlooking California Coastline and Ocean" | surfware | Bixby Bridge viewpoint |
| s48-a | s48 | Envato | `39739042…` "Scenic coastal drive along California's Big Sur coastline" | Cascadia_Films | Big Sur driving aerial |
| s55-a | s55 | Envato | `a4241d01…` "Drone shot of Mansion of the cliffs of the Pacific Ocean in Big Sur, California…" | BlackBoxGuild | Big Sur cliff home |
| s57-a | s57 | Envato | `c4f9a13e…` "Aerial View of Scenic Big Sur Coastline and Bixby Creek Bridge" | BlackBoxGuild | Big Sur traffic aerial |
| s57-a-2 | s57 | Storyblocks | `SBV-328685643` "Aerial View Cars Wind Along The Rocky Coast Of Ca1 Big Sur In Monterey County" | Raw Media Network | o "Same Shoot" de um resultado de "Big Sur viewpoint tourists" |
| s57-b | s57 | Storyblocks | `SBV-328684598` "Hikers Along A Dirt Trail Admire The View In Big Sur In Monterey County" | Raw Media Network | Big Sur viewpoint tourists |
| s59-a | s59 | Envato | `98ff0ab2…` "Aerial view of vehicles driving on Bixby Creek Bridge, California." | AmazingAerial | Bixby Bridge viewpoint cars |
| s60-a | s60 | Envato | `8d03cd1f…` "Big Sur California Landscape by Aerial Drone, Pacific Coast Highway 1 PCH," | Cascadia_Films | Big Sur untouched coast |

**O que se abriu e não virou candidato** (§2.3):
- s01-a: `19ea4af1…` (AmazingAerial), com casas no promontório.
- s18-a: `d342d12f…` (MilkImage-aFilms), plano quase parado de um morro, com terraço plano em primeiro plano.
- s45-a: `c2ca66e2…` (BlackBoxGuild, ProRes), tomada do chão, enevoada, talvez de outro mirante.
- s42-a: `ccd9af2e…` (megafilm), só HD.
- s55-a:
  - `7d1cc0a5…` (Pro-Studio): uma casa moderna, de perto, como assunto;
  - Storyblocks `SBV-354073533` (OlegBog): o complexo de Ragged Point, de perto;
  - no Motion Array, "Hillside Houses" e "House Positioned On Hillside": o título não nomeia lugar, e a página não tem descrição.
- s57-b:
  - Envato `20cd0fc7…`: uma mulher de costas, de perto, numa trilha;
  - Envato `591d7078…`: gente de perto, e não nomeia Big Sur;
  - Storyblocks `SBV-328680440` (Raw Media Network): o fotógrafo no mirante vira o rosto e é o assunto do quadro.
- s60-a: `ae9c367a…` (DogoraSun). A descrição não nomeia Big Sur, e a ponte está no quadro.
- s38-a:
  - só HD: Motion Array `redwood-trees-102387` e Storyblocks `SBV-300018712`;
  - sem lugar: Storyblocks `SBV-353843654` e Envato `f4282a38…`;
  - Storyblocks `SBV-353382168`: o título nomeia Julia Pfeiffer Burns, mas o plano é a pedra e a samambaia, sem sequoia;
  - Shutterstock `3561175793`: a queda de Pfeiffer de perto, sem sequoia.

**As buscas e o NÃO ACHADO por banco.** O Envato devolveu o mesmo conjunto de uns 30 clipes de Big Sur a quase toda busca.
- **s38-a:** NÃO ACHADO no Envato, no Motion Array e na Storyblocks, cada um com as 4 buscas. Só apareceram sequoias de outros lugares
  (Muir Woods, Redwood National Park, Sequoia, Big Basin, Northern California) ou sem lugar. Achado no Shutterstock, na 3ª busca; a 4ª
  também se fez.
- **s57-b:** NÃO ACHADO no Envato, com as 4 buscas, e no Motion Array, com a 1ª. Achado na Storyblocks, na 1ª.
- **s42-a:** nada no Envato, com as buscas 1 e 2. Achado no Motion Array, na 1ª; a 2ª também se fez.
- **s55-a:** achado no Envato, na 3ª busca. Nada no Motion Array nem na Storyblocks, com as buscas 1 e 2 de cada um.
- Os outros itens tiveram candidato no Envato.
- **As buscas que não se fizeram**, porque o item já tinha candidato e o conjunto se repetia:
  - Envato: as buscas 3 e 4 do s42-a e a 4 do s55-a;
  - Motion Array: as buscas 3 e 4 do s42-a e do s55-a, e as buscas 2 a 4 do s57-b;
  - Storyblocks: as 4 do s42-a, as buscas 3 e 4 do s55-a e as buscas 2 a 4 do s57-b.
- O fim da Fase A foi às 13:38.

### O conferente (§2.5)

- O `conferente-de-midia` (fluxo `caca`) foi despachado às 13:38, com o `out/_maquina/conferente-big-sur.json` ocupado das 13:38 às
  14:06. O pedido disse que ele não usa nenhuma ferramenta `mcp__claude-in-chrome__*` nem do painel de navegador do app, não abre
  site de banco, não baixa nada e julga só pelo disco.
- **O laudo (13:55):** 9 aprovados de 17, todos do Envato e cada um com `preferencia: 1` (s01-a, s05-a, s12-a, s20-a, s21-a, s35-a,
  s48-a, s57-a e s59-a); 6 trocar (s18-a, s38-a, s45-a, s57-a-2, s57-b e s60-a); 2 reprovados (s42-a e s55-a); nenhum
  `pendente_lucas`. O `conferencia-caca.json` tem sha256 `38d68389…`, e o `.md`, `06be93d0…`. A Sala leu os vereditos no disco.
- **O `_media` não mudou:** 180 arquivos, iguais antes e depois, pelo retrato da Sala (13:39 e 14:06) e pelo do conferente (13:39
  e 14:00).
- **O trocar e o reprovado**, com o motivo, estão no `conferencia-caca.md` (a tabela e "Para trocar"). Em resumo:
  - s18-a: um terraço plano entre a serra e o mar desdiz a frase;
  - s38-a: é o McWay Creek, no Julia Pfeiffer Burns, outro parque;
  - s42-a: uma casa com gramado vira o assunto do quadro (propriedade identificável);
  - s45-a: a tomada é do lado da serra, perto da cabeceira sul, e não do mirante do DF-12;
  - s55-a: casas de arquitetura marcante ("Mansion") são o assunto;
  - s57-a-2: a estrada e os carros só passam na borda;
  - s57-b: uma trilha, sem mirante de estrada nem carro;
  - s60-a: a foz de um rio, não a vista do mirante de Bixby, e quase a mesma imagem do s05-a.
- **O recado ao `pesquisa-imagens`:** o `trocar_por` de cada item, na tabela "Para trocar" do `conferencia-caca.md`. Ele decide se
  muda as `buscas`; a caça segue com as da lista.
- **Para o Lucas:** o s05-a (DepictionImages) e o s48-a (Cascadia_Films) parecem do mesmo voo, com dois autores no Envato. A
  conferência não prova de quem é o material. A pergunta do crédito do Shutterstock fica sem efeito, porque o s38-a foi para
  trocar.
- **Os avisos para a regência** (`regente-de-imagem` e `montador`), que a Sala leva à Direção depois da caça:
  - s42 fica com o vídeo parado do Forest Service, 0,23 s acima do teto de 6 s do plano parado;
  - no s35, a praia que o `exige` pede não aparece no s35-a;
  - a ponte de Bixby aparece em quatro planos de banco aprovados.

### A lista de aprovação (§2.6)

- `out/big-sur/_pesquisa/lista-aprovacao-caca-1.md` (sha256 `209916f8…`): 9 linhas preferidas, todas do Envato, cada uma com a
  linha L (1L a 9L), nenhuma reserva e nenhum `pendente_lucas`.
- **Foi ao Lucas no chat às 14:08, com o arquivo.** Na mesma mensagem:
  - a conta do Envato ("Assinaturas", a assinatura da Top10), que o "sim" confirma;
  - o combinado, tomado pelo "pronto" das 12:04;
  - o projeto `big-sur` na primeira janela de licença do Envato, que ele digita;
  - o s05-a e o s48-a do mesmo voo;
  - a pergunta do "Salvar" do Shutterstock.
- **A resposta dele:** pendente.

### Fase A, a volta dos itens sem aprovado (§2.5: "volta ao §2 na próxima plataforma")

A partir das 14:08, com a lista enviada, a Sala volta aos itens sem aprovado. Segue só as buscas da lista, nas plataformas e
buscas que faltam, e não baixa nada:
- s18-a, s45-a e s60-a: no Motion Array, na Storyblocks e no Shutterstock;
- s57-b: o resto do Motion Array e da Storyblocks, e o Shutterstock;
- s42-a e s55-a: as buscas que faltam em cada banco.

O s38-a já passou pelas 4 buscas nos 4 bancos, e fica **NÃO ACHADO**: entra o mapa da regência.

- **A extensão reconectou de novo, sem erro, às 14:07:30.** O `connectedAt` passou de `1793893066198` a `1793898450563`, e o
  `inUse` ficou no Brave. A Sala viu a troca na conferência das 14:09, antes de qualquer clique, e refez a prova: a marca
  `alpha-point-perfil-20261105-140955-4545`, achada no histórico do Brave `Default` na segunda procura (14:10:17), e a aba da
  prova fechada. A aba fixa ficou.
- **O ritmo** continuou o mesmo: 30 s por banco, em rodízio. A volta foi das 14:10 às 14:47, e nenhum banco recusou nem pediu
  verificação de robô.
- **Um tropeço que se repetiu:** a 1ª navegação para o Motion Array vinda de outro banco não saiu da página anterior quatro vezes
  (14:10, 14:20, 14:38 e 14:44). As ferramentas responderam "the page navigated to a different domain", ou o `tabs_context` mostrou
  a página de antes. Nada se clicou, e a 2ª navegação, 30 s depois, carregou. Um screenshot da Storyblocks estourou o tempo do
  CDP uma vez e passou na 2ª tentativa.

**Os candidatos novos** (§2.4), em `candidatos-caca.json` (agora 21, sha256 `56d60df7…`):

| Candidato | Cena | Banco | Item | Autor | Busca |
|---|---|---|---|---|---|
| s18-a-2 | s18 | Motion Array | `914470` "Big Sur Coastline" | Andriy | Big Sur cliffs drone |
| s42-a-2 | s42 | Shutterstock | `3801230985` "Coastal Environment In Highway 1… Big Sur…" | ByDroneVideos | Big Sur coast aerial |
| s45-a-2 | s44 | Storyblocks | `SBV-353382486` "Bixby Bridge On Highway 1 Along The California Coast In Big Sur" | crbellette | Bixby Bridge viewpoint |
| s45-a-3 | s44 | Storyblocks | `SBV-353382311` "A Wide Angle Panning Shot Of Bixby Bridge…" | crbellette | o "Same Shoot" do s45-a-2 |

O s45-a-3 leva uma nota para o s60: o fim da panorâmica é a costa ao sul da ponte vista do mesmo mirante, sem a ponte. O
conferente pesa se serve ali.

**O que se abriu e não virou candidato** (§2.3):
- s18-a:
  - Motion Array `914464` (Andriy), um patamar no alto da falésia com casas, como o s18-a (as prévias ficaram em
    `previas/_fora/`, fora do git);
  - Storyblocks `SBV-355191011` (Chelsea_Abbott), um promontório de topo plano, com 0:05 numa janela de 5,6 s.
- s42-a: Motion Array `914468` (Andriy), uma casa só, a meia distância.
- s45-a: Shutterstock `4003437253` (Bogdan Pictures), aéreo de drone, que a lista recusa.
- s55-a: Shutterstock `1098791239` (Bogdan Pictures), uma casa grande com gramado, de perto.
- s57-b: Storyblocks `SBV-331593159` (Vadim_Key), um homem de perto, com o rosto de perfil.
- s60-a: Motion Array `3866060` (Bestcityscape), uma enseada que não é a vista do mirante de Bixby.

**As buscas e o NÃO ACHADO por banco, depois desta volta:**
- **s18-a, s42-a e s45-a** pararam no candidato novo, como na Fase A, porque o conjunto se repetia:
  - s18-a: a 1ª busca no Motion Array, na Storyblocks e no Shutterstock;
  - s42-a: as buscas 3 e 4 do Envato, a 3 do Motion Array, e a 1ª da Storyblocks e do Shutterstock;
  - s45-a: a 1ª busca da Storyblocks e do Shutterstock.
- **NÃO ACHADO nos 4 bancos, com as 4 buscas da lista em cada um:**
  - **s55-a:** as casas de Big Sur dos bancos são de perto ou de Carmel. Entra o mapa da regência.
  - **s57-b:** só gente noutros lugares, de perto, ou carros sem gente. Entram a foto de Hurricane Point e o mapa.
  - **s60-a:** o que nomeia Bixby tem a ponte no quadro, e a lista recusa construção. Entra a foto de Jav72, se o conferente
    não aceitar o fim do s45-a-3.
- O fim da volta foi às 14:47.

### O conferente, 2ª leva (§2.5)

- Despachado às 14:47, só para os 4 novos, com o `conferente-big-sur.json` ocupado das 14:47 às 15:08. O pedido repetiu as
  proibições da 1ª leva (nenhuma ferramenta do navegador, nenhum site de banco, nada baixado, só o disco).
- **O laudo:**
  - `s18-a-2` aprovado (preferência 1);
  - `s45-a-3` aprovado (preferência 1);
  - `s45-a-2` aprovado (preferência 2, reserva);
  - `s42-a-2` reprovado: é o mesmo grupo de casas do s42-a, a meia distância, com a casa moderna de gramado reconhecível.
- **No total, 12 aprovados de 21.** Os 17 vereditos da 1ª leva ficaram iguais, e nada foi para `substituidos`. O
  `conferencia-caca.json` tem agora sha256 `aa92a07c…`, e o `.md`, `46f637c6…`.
- **O `_media` não mudou:** 180 arquivos, iguais às 14:47 e às 15:08, pelo retrato da Sala e pelo do conferente.
- **O mirante do s45:** o conferente o confirmou contra o DF-12, comparando com o s59-a, com a foto de s01 e com o eixo da ponte
  no OSM.
- **O s45-a-3 no s60:** o `serviria_em` diz que o fim da panorâmica (≈ 0:16,5 a 0:22) serviria a s60 › beats[0]. Isso só vale se o
  `montador` ou o `diretor-de-arte` declarar o reuso, com uma conferência nova do trecho. Vai à Direção depois da caça.
- **Para o Lucas:**
  - a Storyblocks entra na cena da regra do condado (s44), e a marca só a aceita em cena neutra (§3.3). O conferente leu a cena
    como neutra;
  - a taxa do MP4 do s45-a-3 (≈ 18 Mb/s) pode dar blocos numa panorâmica 4K, e os quadros do arquivo baixado vão mostrar.

### A lista de aprovação 2 (§2.6)

- `out/big-sur/_pesquisa/lista-aprovacao-caca-2.md` (sha256 `c99b51bd…`). A numeração continua a da lista 1:
  - 10 (s18-a-2, Motion Array) com a linha 10L;
  - 11 (s45-a-3, Storyblocks), preferido;
  - 12 (s45-a-2, Storyblocks), reserva.
- **Foi ao Lucas no chat às 15:10, com o arquivo.** Na mesma mensagem:
  - as contas do Motion Array ("Business") e da Storyblocks (só o avatar), que o "sim" confirma;
  - os dois pontos do conferente;
  - que a lista 1 continua valendo.
- **A resposta dele:** pendente.
- **O s42-a volta ao §2**, nas buscas que faltam: a 4 do Motion Array, e as 2 a 4 da Storyblocks e do Shutterstock.

### Fase A, o fim do s42-a (15:10–15:15)

- **A extensão reconectou de novo, sem erro, às 14:55:56**, enquanto o conferente rodava e ninguém clicava. O `connectedAt` passou
  de `1793898450563` a `1793901356136`, e o `inUse` ficou no Brave. A Sala viu a troca na conferência das 15:10 e refez a prova:
  a marca `alpha-point-perfil-20261105-151001-13404`, achada no histórico do Brave `Default` na segunda procura (15:10:26), e a aba
  da prova fechada.
- **O mesmo tropeço de navegação**, agora também do Motion Array para a Storyblocks (15:10 e 15:11): a 1ª navegação não saiu
  da página, e a 2ª carregou. Nada se clicou.
- **As 7 buscas que faltavam não deram candidato.** O que se abriu e não virou candidato:
  - Shutterstock `1098955701` (Bogdan Pictures): duas casas a meia distância, uma moderna com gramado;
  - Storyblocks `SBV-354300151` (wedmov): a página só diz "California", não Big Sur.
- **O s42-a fica NÃO ACHADO nos 4 bancos**, com as 4 buscas da lista em cada um. Fica o vídeo parado do Forest Service, com o
  aviso do conferente: 0,23 s acima do teto de 6 s do plano parado. O aviso vai à Direção depois da caça.
- **O fim da Fase A foi às 15:15.** São 12 aprovados de 21 nas duas listas, e NÃO ACHADO nos 4 bancos: s38-a, s42-a, s55-a,
  s57-b e s60-a.

**A resposta do Lucas às duas listas** (16:0x, no chat da Sala): "pode baixar". Respondeu à mensagem das 15:15, que dizia: "As
listas: 'sim nas duas' baixa os preferidos das duas e as licenças. A reserva 12 só entra se você pedir."
- A Sala a toma como o "sim" das duas listas: as linhas preferidas 1 a 11 e as licenças 1L a 10L.
- A reserva 12 fica de fora, porque a resposta não a nomeia.
- As mensagens das listas diziam que o "sim" também confirma as contas, e a resposta as cobre:
  - o Envato ("Assinaturas", a assinatura da Top10);
  - o Motion Array ("Business", a conta individual dele);
  - a Storyblocks (só o avatar, a assinatura da Top10);
  - e o combinado, tomado pelo "pronto" das 12:04.
- O "Limpar" dos filtros salvos do Shutterstock ficou sem resposta, e não se clica.

### Fase B (16:07–17:16): só o aprovado, um download por vez (§3)

- **A extensão reconectou três vezes sem erro, e a prova do perfil se refez a cada uma, antes do clique seguinte:**
  - às 15:31:12 (`connectedAt` `1793903472822`, os dois navegadores no mesmo instante), vista às 16:07, antes do 1º clique: a marca
    `alpha-point-perfil-20261105-160728-239`, achada no histórico do Brave `Default` na 2ª procura (16:07:53);
  - às 16:20:11 (`1793906411166`), enquanto a janela de licença da linha 1 esperava o Lucas, vista às 16:54, antes do PDF 1L: a marca
    `alpha-point-perfil-20261105-165433-16946`, achada na 2ª procura (16:54:57);
  - às 17:12:02 (`1793909522717`), vista às 17:12:3x. **Um deslize da Sala:** a conferência saiu junto com a navegação para a página
    do Motion Array, e não antes dela. O `inUse` estava no Brave, e a navegação foi para ele. A prova se refez antes de qualquer
    clique: a marca `alpha-point-perfil-20261105-171250-29011`, achada na 2ª procura (17:13:17).
  - Às 17:04 só o Chrome do Top10 (`8059a56f`) reconectou, e os nomes da lista trocaram de ordem. O Brave seguiu `inUse`, com o
    `connectedAt` da prova, e a seleção não mudou.
- **Antes de cada clique que baixa** (o clipe e o PDF): a página do item, com o ID; o rótulo da conta (Envato "Assinaturas";
  Motion Array "Business"; Storyblocks, só o avatar); o `inUse` no Brave, com o `connectedAt` da última prova; e a pasta Downloads
  sem `.crdownload`. Entre um `recolher` e o clique seguinte do mesmo banco passaram pelo menos 20 s, e entre páginas do mesmo banco,
  30 s.
- **O projeto `big-sur` do Envato.** Na linha 1, a janela de licença não trazia `big-sur` (só os projetos de outros vídeos e canais). A
  Sala parou com a janela aberta, sem escolher nem digitar nada, e chamou o Lucas. Ele digitou o nome ali e confirmou: "pronto" (16:5x).
  O arquivo chegou às 16:51:07, o único novo desde o `marcar` das 16:08:26. Nas linhas 2 a 9, `big-sur` veio no topo da lista: um clique
  nele e o aviso "Licensed to big-sur". O "+ Create new" do painel *Licenses* não se tocou.
- **Motion Array:** o "Download" abriu "Choose a format" (4K, HD, Original, Preview), e o clique foi no 4K. O balão dele dizia "file size:
  60.79MB", e os 669,39 MB do cabeçalho são do original ProRes. Depois do download apareceu o ícone "Download License" ao lado do
  Download, de onde saiu o 10L.
- **Storyblocks:** o 4K MP4 (h264), de 52.1 MB, já vinha marcado no seletor, e o clique foi no "Download" do mesmo painel, nunca no
  "Download Watermarked". O arquivo chegou com o `SBV-353382311` no nome, e o registrador o gravou com o nome encurtado, sem o SBV. O
  ID fica no `arquivo_baixado` e no `id_na_fonte` (`353382311`) do manifest.
- **Nada se clicou fora das linhas:** nem "Preview", nem o Hub, nem "Original", nem "Edit with AI", nem a reserva 12.

| Nº | Candidato · cena | Banco · item | `marcar` → `recolher` | O que chegou (nome, medida, sha256) |
|---|---|---|---|---|
| 1 | s01-a · s01 | envato 2dfb456b-53d5-495a-a47a-beba248026dd | 16:08:26 → 16:51:46, saída 0 | `aerial-of-bixby-bridge-and-coastline-of-california-2026-10-01-22-55-10-utc.mp4`, 3840x2160, h264, 29,970 fps, 18,018 s, 448.830.312 bytes, sha256 `ea91687a…`, criado às 16:51:07 |
| 1L | s01 | envato | — | `licencas/2dfb456b-53d5-495a-a47a-beba248026dd-licenca.pdf`, 51.542 bytes, sha256 `0d8bd595…`, gravado às 16:55:29 |
| 2 | s05-a · s05 | envato 1f008962-1067-4b99-9098-8120fd214e06 | 16:56:29 → 16:56:56, saída 0 | `drone-view-of-sandy-beach-and-pacific-ocean-waves-2026-10-03-04-51-09-utc.mp4`, 3840x2160, h264, 29,970 fps, 19,753 s, 62.858.699 bytes, sha256 `1f2fe543…`, criado às 16:56:50 |
| 2L | s05 | envato | — | `licencas/1f008962-1067-4b99-9098-8120fd214e06-licenca.pdf`, 48.110 bytes, sha256 `365e37fa…`, gravado às 16:57:40 |
| 3 | s12-a · s12 | envato 4c7608ca-5b39-4f43-af70-32533eb7c99a | 16:58:21 → 16:59:17, saída 0 | `experience-the-stunning-aerial-view-of-big-sur-alo-2026-10-03-02-18-43-utc.mov`, 3840x2160, prores, 23,976 fps, 13,180 s, 1.159.967.734 bytes, sha256 `c05b5a6c…`, criado às 16:58:35 |
| 3L | s12 | envato | — | `licencas/4c7608ca-5b39-4f43-af70-32533eb7c99a-licenca.pdf`, 48.870 bytes, sha256 `cb887ce1…`, gravado às 16:59:58 |
| 4 | s20-a · s20 | envato 04f8f43b-d0ca-4366-9ccc-8c4f31e2e459 | 17:00:35 → 17:01:53, saída 0 | `beautiful-aerial-view-of-big-sur-coastline-2026-10-02-13-09-36-utc.mov`, 3840x2160, prores, 23,976 fps, 29,738 s, 1.600.494.615 bytes, sha256 `56c8f4cc…`, criado às 17:00:49 |
| 4L | s20 | envato | — | `licencas/04f8f43b-d0ca-4366-9ccc-8c4f31e2e459-licenca.pdf`, 52.892 bytes, sha256 `8238fc0e…`, gravado às 17:02:34 |
| 5 | s21-a · s21 | envato e1ae4a55-ccb0-4399-9619-21863b03491d | 17:03:10 → 17:03:33, saída 0 | `coastal-highway-winds-along-big-sur-cliffs-2026-10-03-04-47-01-utc.mp4`, 3840x2160, h264, 29,970 fps, 15,816 s, 58.734.669 bytes, sha256 `cfc7cc32…`, criado às 17:03:25 |
| 5L | s21 | envato | — | `licencas/e1ae4a55-ccb0-4399-9619-21863b03491d-licenca.pdf`, 50.559 bytes, sha256 `05bb559e…`, gravado às 17:04:12 |
| 6 | s35-a · s35 | envato df4a2136-a300-498e-b524-2280ad084356 | 17:04:57 → 17:06:02, saída 0 | `aerial-view-of-bixby-creek-bridge-in-california-2026-10-02-20-54-00-utc.mov`, 4096x2160, mjpeg (Photo JPEG), 23,976 fps, 18,185 s, 1.547.614.262 bytes, sha256 `8c0fbe9b…`, criado às 17:05:11 |
| 6L | s35 | envato | — | `licencas/df4a2136-a300-498e-b524-2280ad084356-licenca.pdf`, 50.744 bytes, sha256 `09a1bcac…`, gravado às 17:06:45 |
| 7 | s48-a · s48 | envato 39739042-fb1d-44c3-9dc8-1cbaf425e00c | 17:07:21 → 17:07:45, saída 0 | `scenic-coastal-drive-along-california-s-big-sur-co-2026-10-03-05-11-12-utc.mp4`, 3840x2160, h264, 29,970 fps, 9,877 s, 36.888.236 bytes, sha256 `0a22675c…`, criado às 17:07:38 |
| 7L | s48 | envato | — | `licencas/39739042-fb1d-44c3-9dc8-1cbaf425e00c-licenca.pdf`, 50.189 bytes, sha256 `58b81e83…`, gravado às 17:08:24 |
| 8 | s57-a · s57 | envato c4f9a13e-563a-4797-ad00-471880f44412 | 17:09:02 → 17:09:29, saída 0 | `aerial-view-of-scenic-big-sur-coastline-and-bixby-2026-10-03-15-11-34-utc.mp4`, 3840x2160, h264, 25,000 fps, 6,840 s, 223.875.042 bytes, sha256 `52e5fafd…`, criado às 17:09:15 |
| 8L | s57 | envato | — | `licencas/c4f9a13e-563a-4797-ad00-471880f44412-licenca.pdf`, 49.960 bytes, sha256 `a32b739a…`, gravado às 17:10:12 |
| 9 | s59-a · s59 | envato 98ff0ab2-b4e2-407f-8483-43e626087a71 | 17:10:53 → 17:11:14, saída 0 | `aerial-view-of-vehicles-driving-on-bixby-creek-bri-2026-10-02-23-08-55-utc.mp4`, 3840x2160, h264, 29,970 fps, 16,149 s, 100.366.076 bytes, sha256 `73d492b0…`, criado às 17:11:07 |
| 9L | s59 | envato | — | `licencas/98ff0ab2-b4e2-407f-8483-43e626087a71-licenca.pdf`, 52.306 bytes, sha256 `cdff6fcc…`, gravado às 17:11:56 |
| 10 | s18-a-2 · s18 | motionarray 914470 | 17:13:39 → 17:14:04, saída 0 | `Big_Sur_Coastline_uhd_914470.mp4`, 3840x2160, h264, 23,976 fps, 12,429 s, 63.744.812 bytes, sha256 `4672c89e…`, criado às 17:14:00 |
| 10L | s18 | motionarray | — | `licencas/914470-licenca.pdf`, 112.866 bytes, sha256 `e50c0e45…`, gravado às 17:14:50 |
| 11 | s45-a-3 · s44 | storyblocks SBV-353382311 | 17:16:11 → 17:16:26, saída 0 | `a-wide-angle-panning-shot-of-bixby-bridge-on-highway-1-along-the-california-coast-i-SBV-353382311-4K.mp4` (gravado como `a-wide-angle-panning-shot-of-bixby-bridge-on-highway-1-along-the-california-coas.mp4`), 3840x2160, h264, 29,970 fps, 22,698 s, 54.640.043 bytes, sha256 `4fd7df8f…`, criado às 17:16:18 |

- **O passo 4 bateu nos 11** (§3, passo 4):
  - a resolução e a duração são as da página (até 0,88 s acima do número redondo dela), e o s35-a é 4096×2160, como a página dizia;
  - o tamanho, onde a página o mostra: no 10, 60,79 MiB, o do balão do 4K; no 11, 52,11 MiB, os 52.1 MB do seletor;
  - o nome: no Envato, o título do item (não prova nada); no Motion Array, o ID `914470`; na Storyblocks, o `SBV-353382311`;
  - a ordem: um download por vez, e cada arquivo é o único novo desde o seu `marcar`.
- **Os 10 PDFs** (§3.2): um arquivo novo de cada vez, `%PDF`. A conferência imprimiu só sim ou não: todos citam o ID e o título do item, e
  os 9 do Envato também `big-sur`. Cada um foi para `licencas/<id>-licenca.pdf` e saiu de Downloads.
- **A seguir:** o conferente no fluxo `midia`, sobre os 11 arquivos (despachado às 17:18, com o `conferente-big-sur.json` ocupado e o
  retrato do `_media` tirado às 17:17: 223 arquivos). Só se instala o `aprovado` com `mesmo_item: true`.

### O conferente sobre os arquivos (§3, passo 5) e a instalação (§4)

- **O conferente, fluxo `midia`** (17:18–17:43, lote 4 do `conferencia-midia.json`; o `conferente-big-sur.json` ocupado das 17:18
  às 17:45): **11 aprovados de 11, todos com `mesmo_item: true`**. Ele pôs os quadros de 15, 50 e 85 % de cada arquivo ao lado das
  prévias. As do Envato caíram nos mesmos pontos, sem precisar procurá-las no clipe inteiro. Nenhum arquivo tem marca d'água, pessoa
  reconhecível em primeiro plano, marca de terceiro legível nem casa como assunto, e cada sha256 é único no `_media`.
  - O `.json` tem agora 63 vereditos (sha256 `470095dc…`): os 52 de antes ficaram iguais e na mesma posição, conferido pela Sala
    contra o HEAD. O `.md` está em `5b79ccf5…`: mudaram só o título e o resumo, e entrou a seção do lote 4.
  - **O `_media` não mudou durante a conferência:** 223 arquivos, iguais ao retrato da Sala das 17:17, conferido de novo pela Sala às
    17:44.
  - **Os desvios que ele mesmo declarou:**
    - gravou o retrato de antes com o nome `_media-antes.txt`, por cima do da 1ª leva da caça (13:39), e o restaurou a partir do
      `_media-depois.txt` daquela leva. A Sala conferiu que os dois são iguais, com 180 linhas. Os dois ficam em `_tmp`, fora do git;
    - emendou o `.md` por script;
    - abriu os quadros um a um só no s18-a-2 e no s45-a-3; nos outros nove, viu-os no lado a lado e nos recortes a 100 %.
- **Instalados** (17:45–17:51, `_instalar-lote`, saída 0 nos 11). Todos saíram a 30 fps, só com quadros inteiros (a REND-47, conferida
  no destino). A procedência está no `_PROCEDENCIA.json` de cada `_media/footage/<cena>/`:
  - s01 `bixby-bridge-aerea-abertura`; s05 `big-sur-costa-sol-aerea`; s12 `big-sur-highway-1-falesias-aerea-vinheta`;
  - s18 `big-sur-encostas-ingremes-aerea`; s20 `big-sur-falesias-enseada-aerea`; s21 `big-sur-highway-1-falesias-aerea`;
  - s35 `bixby-bridge-lateral-arco-canion`, que fica 4096×2160 (o instalador não muda o quadro);
  - s44 `bixby-mirante-vista-ponte-altura-do-olho`; s48 `big-sur-highway-1-carros-costa-aerea`;
  - s57 `big-sur-highway-1-visitantes-aerea`; s59 `bixby-mirante-carros-entrando`.
- **A regra da cena, conferida por script nos 11:** cada clipe instalado casa com o veredito `aprovado` da mesma cena pela URL do
  item e pelo `medido.sha256_do_baixado`. O sha256 do instalado é o `medido.sha256` da procedência, e o ffprobe dá a medida gravada.
- **O portão `casar-midia-vereditos.py`** (em `out/atlantico-fundo/_pesquisa/`) dava os 11 como "SEM VEREDITO". Ele casava só pelo
  sha256 do arquivo e dos rascunhos de acervo, e o clipe de banco instalado é reencodado.
  - Ganhou a chave `medido.sha256_do_baixado`, a que o ofício do conferente manda usar no vídeo de banco pago.
  - Saiu também a pasta `trilha/`: a música nunca vai ao conferente (a licença proíbe ferramenta de IA).
  - Com as duas mudanças, ele sai 0 no `big-sur` (30 arquivos), no `atlantico-fundo` (32; antes, 7 problemas: os 3 clipes de banco e as
    4 músicas) e no `peru-agua` (30). O `qc-procedencia` dá PASS (82 itens: 15 provados, 26 isentos, 41 rascunhos da caça e 0 sem prova).

### O fim da caça 1 (05/11/2026, 17:55)

- **11 clipes instalados em 11 cenas**, com 10 comprovantes de licença (9 do Envato, com o projeto `big-sur`, e 1 do Motion Array). A
  Storyblocks não tem linha L: a prova do item é o nome com que o arquivo chegou (`SBV-353382311`) e o histórico da conta. O
  conferente registrou que o arquivo não traz metadados embutidos que se leiam.
- **NÃO ACHADO nos 4 bancos, no fallback da regência:** s38-a, s42-a, s55-a, s57-b e s60-a. A reserva 12 (`s45-a-2`) não se baixou.
- **Para a Direção e a Arte** (nenhum segura a instalação):
  - **s01-a:** o veredito vale só para a s01. As voltas da tomada em s02 e em s31 P4 pedem conferência nova: os reusos aprovados ali
    são da foto de Mavic of Steel, outro arquivo;
  - **s20:** a cena tem agora dois aprovados, este clipe e o vídeo do Forest Service, para um plano só. Quem rege e monta escolhe, e o
    rótulo fica "Big Sur coast, California", porque a origem não nomeia a enseada;
  - **s48-a:** os carros só aparecem da metade do clipe em diante (de ~4,6 a 9,8 s);
  - **s45-a-3 (s44):** a ponte fica inteira no quadro até ~6 s. A taxa de ~19 Mb/s não mostra bloco a 100 %. A volta em s60 (o fim da
    panorâmica) só com o reuso declarado e uma conferência nova do trecho;
  - **s42:** fica o vídeo parado do Forest Service, 0,23 s acima do teto de 6 s do plano parado;
  - **s35:** o clipe não mostra a praia embaixo da ponte;
  - **a ponte de Bixby** aparece em vários clipes (s01, s35, s44, s57, s59): a repetição é da regência e da montagem;
  - **a Storyblocks na s44** (a cena da regra do condado): a marca a aceita só em cena neutra (§3.3), e o conferente leu a cena como
    neutra.
- **Para o Lucas:** o "Limpar" dos filtros salvos do Shutterstock (13:32) continua com ele.
- A aba fixa do Brave fica aberta para a próxima caça. O `caca.json` foi liberado às 17:55.

## O "Limpar" dos filtros do Shutterstock (05/11/2026, 22:2x)

- **O ok do Lucas,** no chat da Sala, à pergunta do "Salvar" das 13:32: "Pode limpar".
- **A prova do perfil, refeita antes:** a extensão tinha reconectado desde a última prova (`connectedAt` 1793922274353). O `select_browser` foi
  no `deviceId` do Brave, e a marca apareceu no histórico do perfil `Default` na 2ª procura (22:25). O `inUse` foi conferido de novo antes do
  clique.
- **O que a página mostrou:** numa busca nova de vídeo (`big-sur-coast`, sem parâmetro na URL), o painel dizia "Filtros aplicados" só com
  "Somente vídeos ilimitados", com 4.706 vídeos. O conjunto salvo às 13:32 (4K, Horizontal, Somente vídeos ilimitados) já não se aplicava, e
  a página não mostrava "Filtros salvos" em lugar nenhum.
- **O clique:** "Limpar", no painel. A busca passou a `?disableUnlimitedFilter=true`, com 10.513 vídeos, e o botão voltou a dizer "Filtros".
- **Depois, numa busca nova:** o "Somente vídeos ilimitados" voltou sozinho (4.706 vídeos). Parece ser o padrão do plano ilimitado da conta,
  e não o resto do "Salvar". Nada mais se clicou, e a aba foi fechada.
