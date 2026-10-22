# Conferência da caça · peru-agua · fluxo `caca` · 22/10/2026, 15:5x (Brasília): o s01-a-4, da volta do Shutterstock

**Laudo desta tarefa:** 0 aprovados de 1 conferido (1 reprovado); 1 com algo não conferido; recebidos: 1.
**Laudo do arquivo:** 14 aprovados de 26 conferidos (3 reprovados, 9 trocar, 0 pendente_lucas); 1 com algo não conferido;
recebidos: 26.

| id | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| s01-a-4 | s01 | shutterstock | reprovado | é a Laguna Parón, na Cordilheira Branca, que a recusa do item exclui. O lago fica fora da linha da divisória, do lado do Pacífico, e domina o quadro, em vez da crista vista de cima: pela frase, seria `trocar`. Além disso, a IA não foi conferida (a busca rodou sem o filtro do Shutterstock) |

**O ponto que pesa: o lugar serve à frase e à cena?** Não.
- **O item recusa este lugar.** A recusa do s01-a diz "Cordillera Blanca/Huascarán no lugar dos Andes centrais". O item pede a crista
  dos Andes centrais, de preferência Ticlio ou Anticona, entre Lima e Junín. A Parón fica uns 400 km ao norte, em Áncash.
- **A regência pede um lugar sobre a divisória.** A s01, beat 0, desenha a linha "on the clip's crest" e prende a miniatura "to the clip's
  real spot". Pela própria regência, o fallback de mapa "vale também se o lugar_na_origem do item não estiver sobre a divisória".
  - O lugar que a origem dá é o lago, e ele está fora da linha. Medi contra a linha do próprio vídeo
    (`_media/geo/divisoria-continental-peru.json`, HydroBASINS, Pacífico–Atlântico): o centro do lago fica a ~7 km e a ponta leste a
    ~4 km a oeste dela, do lado do Pacífico. A Parón drena ao Santa.
  - A coordenada do lago (~ −8,999 / −77,682) é minha, aproximada: a origem não dá coordenada.
- **A crista ao fundo pode ser a divisória, mas a origem não diz isso.** A linha passa a ~1 km de onde eu poria os picos da cabeceira
  do vale, também por coordenada aproximada minha. A origem diz só "picos cobertos de neve da Cordilheira Branca": não nomeia os picos
  nem a direção da câmera. Desenhar a linha ali afirmaria o que ninguém conferiu.
- **O quadro não é o que a frase pede.** É um voo baixo, de dentro do vale, sobre um lago turquesa que ocupa a metade de baixo da
  tela, com um pico nevado ao fundo. Não há crista vista de cima nem passo. Congelada em "A line runs along the Andes", a tela mostra
  uma lagoa glaciar.
  - Num vídeo sobre a água de Lima, uma lagoa turquesa na abertura pode passar pelas lagoas altas da s52. O item da s52 também recusa a
    Parón.
- **O rótulo:** a pílula honesta seria "Laguna Parón" ou "Cordillera Blanca, Peru", nunca "Huaraz". A origem usa esse nome de forma solta:
  a lagoa fica perto de Caraz, em Huaylas. Mas uma pílula de lago não responde à frase sobre a linha.
- **A s02:** a mesma tomada viraria a miniatura presa ao ponto do clipe sobre o satélite, nos beats de mapa. Ela ficaria sobre a Parón,
  fora da linha e longe do ponto perto de Lima que o fallback usa.

**O `lugar_na_origem`**, se um dia fosse usado: "Vista aérea deslumbrante das águas azul-turquesa de Laguna Parón, com picos cobertos de
neve da Cordilheira Branca em Huaraz, Peru." (título e descrição da página, em português).

**O crédito na tela, se entrasse:**
- a linha "Image(s) and/or video used under license from Shutterstock.com", na faixa de crédito da última cena e na descrição
  (`midia.md` §3.4);
- `LV_DreamyTravelers/Shutterstock.com` na faixa da cena, só se o Lucas estender ao vídeo 4 a decisão do Juneau. O `midia.md` §3.4 diz:
  "nos próximos vídeos, pergunta nova, ou o Lucas estende". Em Los Angeles, a leitura foi a mesma. O artista está gravado.

**A técnica e a repetição passam:** 3840×2160 na horizontal, MP4, 0:17 (declarados pela página), com a câmera estável; o ID não aparece
em mais nenhum lugar.

**A licença: a IA não foi conferida.** Ela se apoia no filtro "Exclua imagens geradas por IA" (`midia.md` §2.6; skill §2.3, item 5: "no
Shutterstock, só com o filtro ligado"), e a volta rodou sem filtro nenhum. O resto passa.

**Preferência:** nenhuma. O s01-a continua sem aprovado e cai no fallback da regência: o run s01+s02 vira mapa, aberto sobre o ponto da
divisória mais perto de Lima.

## Para o Lucas pesar

Nada.

## Para reconferir

- **s01-a-4, a IA:** o selo ou o filtro de IA do Shutterstock, na página do item
  (https://www.shutterstock.com/pt/video/clip-4061957539-stunning-aerial-view-turquoise-waters-laguna-par%C3%B3n).
  - Quem confere é a Sala, numa caça. Banco pago não vai ao navegador do app.
  - Mesmo conferida, o veredito fica `trocar`, porque o contexto falha. Por isso, só vale a pena se a Sala quiser o clipe para outra
    cena.

## Para trocar (recado ao `pesquisa-imagens`)

- **s01** (agora também o s01-a-4): a busca continua `Ticlio pass Anticona Carretera Central Peru aerial drone 4K Andes crest continental
  divide`. Pelo relato, nenhum dos quatro bancos tem um aéreo de Ticlio, e o fallback de mapa já cobre o beat.

## Divergências entre a marca e este ofício

Nenhuma.

## Contas desta tarefa

- **Imagens abertas:** 4, as três prévias e o print da página.
- **Rede:** nenhum `WebFetch` e nenhuma ferramenta de navegador.
- **A medida da distância:** o `python` leu a geometria da divisória e calculou a menor distância de cada coordenada, que eu dei de
  memória, aproximada.
- **A emenda:**
  - o script e o veredito estão em `out/peru-agua/_tmp/conferencia/s01-a-4/` (`emenda.py` e `veredito.json`);
  - o sha256 do JSON foi conferido antes de gravar (`3ab466f8…`);
  - as cópias de antes estão em `out/peru-agua/_tmp/conferencia/conferencia-caca.antes-s01a4.json` e `.md`.
- **Checagem 6:** veja o `conferencia-midia.md` desta mesma hora. Nada mudou em `out/peru-agua/_media/`.

---

# Histórico: Conferência da caça · peru-agua · fluxo `caca` · 22/10/2026, 14:4x (Brasília)

**Laudo:** 14 aprovados de 25 conferidos (2 reprovados, 9 trocar, 0 pendente_lucas). Nenhum ficou com algo não conferido. Recebidos: 25.

A janela de cada plano é a do beat da `regencia.json` (não é provisória). Nada foi baixado, e nada em `out/peru-agua/_media/` mudou: o sha256 dos 153 arquivos de lá é o mesmo antes e depois.

| id | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| s01-a | s01 | envato | trocar | é o Patacancha, no Vale Sagrado (Cusco), longe da divisória: a linha que a cena desenha na crista do clipe mentiria sobre onde ela passa |
| s01-a-2 | s01 | envato | trocar | voo rasante sobre a puna de pedras, sem crista nem passo, e 'Central Peru' não diz onde: a linha e a miniatura da cena não teriam onde se prender |
| s01-a-3 | s01 | storyblocks | trocar | a origem diz só 'Peru' e 'Andes', sem lugar, e o quadro não confirma os Andes centrais: a linha da divisória desenhada nessa crista não teria lastro |
| s03-a | s03 | motionarray | **aprovado (1)** | deserto de areia até o horizonte contra o Pacífico, em Paracas (o título nomeia o lugar), sem cidade; 4K horizontal, 40 s |
| s03-a-2 | s03 | envato | aprovado (2, reserva) | penhasco seco de Paracas contra o Pacífico, sem cidade; serve, mas o deserto domina menos que no s03-a |
| s03-b | s03 | envato | **aprovado (1)** | Lima sobre o penhasco da Costa Verde, num dia claro (a descrição nomeia Lima e a Costa Verde); 4K horizontal, 17 s |
| s03-b-2 | s03 | storyblocks | aprovado (2, reserva) | a Costa Verde em contraluz sob névoa (o título nomeia Lima e Miraflores); a névoa a aproxima da s15, que já mostra esse penhasco |
| s03-c | s03 | envato | **aprovado (1)** | o porto do Callao, nomeado na descrição: a baía com barcos e o terminal de contêineres com os pórticos; 4K horizontal, 39 s |
| s03-c-2 | s03 | storyblocks | aprovado (2, reserva) | o terminal do Callao e a baía (o título nomeia o porto); a água sai turquesa demais, e os contêineres de perto pedem conferir marca no arquivo |
| s05-a | s05 | envato | trocar | morros de areia sem o mar e sem a cordilheira atrás que o plano da vinheta pede, num lugar que a origem não diz |
| s08-a | s08 | envato | trocar | é o Rímac canalizado no centro de Lima (Puente de Piedra), não o vale entre encostas secas que o plano pede; e o mesmo item foi proposto para a s37 |
| s09-a | s09 | motionarray | trocar | Iquitos e a floresta, mas sem o rio, que é metade do que a frase diz ('by air or river') |
| s09-a-2 | s09 | motionarray | **aprovado (1)** | o Amazonas largo com barcos, a orla de Iquitos e a mata (o título nomeia Iquitos e o rio); a câmera anda; 4K horizontal, 13 s |
| s15-a | s15 | envato | **aprovado (1)** | neblina grossa sobre os penhascos da Costa Verde, em Lima (o título nomeia o lugar e a neblina); 4K horizontal, 27 s |
| s15-a-2 | s15 | envato | aprovado (2, reserva) | o céu cinza e baixo sobre os penhascos de Miraflores, em Lima; a neblina é mais fraca que no s15-a |
| s15-b | s15 | envato | **aprovado (1)** | o céu cinza e baixo sobre Miraflores, em Lima (o título nomeia o lugar), em outra tomada que a do s15-a; 4K horizontal, 15 s |
| s17-a | s17 | storyblocks | **aprovado (1)** | La Molina, em Lima, espalhada entre morros de areia (o título nomeia o lugar); 4K horizontal, 34 s |
| s19-a | s19 | envato | **aprovado (1)** | o rio do Colca, barrento e com corredeiras, num vale íngreme do lado do Pacífico (o título nomeia Colca, Arequipa); plano parado de 3,2 s |
| s25-b | s25 | envato | trocar | uma espiral só, de perto, que repete as fotos de Cantalloc logo antes; o plano pede a fila de espirais vista do ar |
| s29-a | s29 | motionarray | **aprovado (1)** | a catedral, a Plaza de Armas e o Palacio de Gobierno de Lima vistos do ar (o título nomeia o lugar); a câmera recua; 4K horizontal, 19 s |
| s33-a | s33 | envato | **aprovado (1)** | a serra perto de Vinicunca (Cusco), com as parcelas pequenas apertadas no vale entre montanhas que não se lavram; o drone recua; 4K horizontal, 15 s |
| s37-a | s37 | envato | trocar | o Rímac em Lima com água em quase todo o leito e corredeiras: não é o rio baixo da estação seca que a frase diz; e é o mesmo item proposto para a s08 |
| s37-a-2 | s37 | motionarray | trocar | é o rio baixo que a frase pede, em Lima, mas o clipe tem 5 s para um plano de 5,37 s |
| s49-a | s49 | envato | reprovado | as escadarias pintadas são obra de arte e o assunto do quadro (midia.md §3.1); e o clipe tem 6 s para um plano de 6,77 s |
| s43-a | s43 | envato | reprovado | a escadaria pintada com arte têxtil andina é obra de arte no centro do quadro (midia.md §3.1), e o plano pede morros de casas a perder de vista, não um morro de perto |

**O preferido de cada item:** s03-a → s03-a; s03-b → s03-b; s03-c → s03-c; s09-a → s09-a-2; s15-a → s15-a; s15-b → s15-b; s17-a →
s17-a; s19-a → s19-a; s29-a → s29-a; s33-a → s33-a. Ficam sem nenhum aprovado: s01-a, s05-a, s08-a, s25-b, s37-a, s43-a e s49-a.

**O crédito na tela:** nenhum. Os aprovados são do Envato, do Motion Array e da Storyblocks, e nenhum é do Shutterstock. Os
metadados dos arquivos da Storyblocks ficam intactos (midia.md §3.3).

## Para o Lucas pesar

Nada. Nenhum candidato saiu `pendente_lucas`.

## Para reconferir no navegador do app

Nada.

## Para trocar (recado ao `pesquisa-imagens`)

- **s01** (s01-a, s01-a-2, s01-a-3): `Ticlio pass Anticona Carretera Central Peru aerial drone 4K Andes crest continental divide`.
  - A cena desenha a linha da divisória na crista do clipe e prende a miniatura ao ponto real dele no satélite. Por isso, a origem
    tem de dar um lugar que esteja na divisória.
  - O Vale Sagrado fica fora dela, e "Central Peru" ou "Peruvian mountain ranges" não dá ponto nenhum.
- **s05** (s05-a): `Peru coastal desert Andes foothills behind Pacific aerial drone 4K Lima`. O plano é o da vinheta: o deserto com a cordilheira atrás.
- **s08** (s08-a): `Rimac river valley Chosica Matucana Peru aerial drone 4K dry slopes`.
  - O s08-a talvez sirva à s38-a (o Rímac com água em Lima), com uma conferência própria contra a frase de lá.
- **s09** (s09-a): `Iquitos Amazon river aerial drone 4K city waterfront forest`. O item já tem o s09-a-2 aprovado.
- **s25** (s25-b): `Cantalloc aqueducts Nazca aerial drone 4K row of spirals puquios valley`.
- **s37** (s37-a, s37-a-2): `Rimac river dry season Lima Peru low water rocky riverbed aerial 4K`.
  - **Aviso para a Sala:** o s37-a-2 é o quadro certo para a frase: o leito de pedra quase seco e a água só num canal.
  - Ele cai por 0,37 s: a página e o player dizem 0:05, e o plano tem 5,37 s.
  - Se o regente aceitar um plano de até 5 s, ou se o arquivo medir mais de 5,37 s (o player arredonda), ele volta numa
    conferência nova.
  - O título nomeia só Lima. Com ele, o rótulo da tela fica "Lima", nunca "Rímac".
- **s43 e s49** (reprovados, s43-a e s49-a): o recado é o mesmo do trocar.
  - Para a s43: morros de casas da periferia de Lima a perder de vista, sem a escadaria pintada de Ate.
  - Para a s49: uma ladeira de areia ou uma escadaria sem pintura artística, filmada de baixo, com pelo menos 6,8 s.

**Os avisos do conjunto das cenas** (ofício §5.3), para o `regente-de-imagem` e o `montador`:
- A s01 (3,2 s), a s05 (4,9 s), a s08 (3,1 s), a s25 (beat 7, 2,8 s), a s37 (5,4 s), a s43 (4,2 s) e a s49 (beat 0, 6,8 s) ficam sem
  nenhum clipe aprovado, e cada uma cai no fallback que a regência já dá (mapa, ou as fotos do Commons na s25).
- A s49 beat 0 tem 6,8 s, onde caberia respiro, e nenhum aprovado com movimento a cobre.
- Nas cenas com aprovado, o aprovado cobre a janela do beat dele.

## O que a Sala deve saber antes de montar a lista

1. **A comparação da Fase B no Envato.** O player do Envato toca em laço, e a prévia sai 2 a 3 s depois do ponto.
   - Nos clipes curtos, a prévia "de 85 %" pode ter caído de novo no começo do laço. No s03-a-2 ela repete o quadro de 15 %, o
     que eu vi. No s15-a-2 (10 s), no s15-b (15 s), no s19-a (7 s) e talvez no s03-b (17 s), é a conta: 85 % mais 2 a 3 s passam
     do fim do clipe.
   - O `_frames-de-clipe.mjs` tira os quadros em 15, 50 e 85 % do arquivo. Nesses itens, o quadro de 85 % vai ser comparado com
     uma prévia de outro ponto, e o veredito sobre o arquivo pode sair `mesmo_item: null`, que vai ao Lucas.
   - Isso não mudou o veredito daqui: o conteúdo dos pontos vistos basta para a frase.
2. **O formato da Storyblocks.**
   - O s17-a, no MP4 4K, tem 24,6 MB em 34 s, uns 6 Mbit/s, e pode sair borrado. A página oferece o MOV ProRes, de 3.569,3 MB.
   - O s03-b-2 (reserva) tem 37,2 MB em 17 s; ali o ProRes tem 1.374,4 MB.
   - A escolha do formato na linha da lista é da Sala. A régua de resolução passa nos dois.
3. **A marca nos contêineres.** No s03-c-2 (reserva) e no s08-a, os contêineres e os caminhões não mostram marca legível na prévia,
   mas no arquivo 4K uma marca de armador pode se ler. O veredito sobre o arquivo (fluxo `midia`) confere isso.
4. **O s03-c e a s51.** O aprovado do s03-c vale para a frase da s03. A miniatura do porto na s51 é um reuso declarado, que pede
   conferência própria contra a frase da s51 (CLAUDE.md, "A regra da cena").
5. **O s01-a não foi olhado de olhos novos.** O título e a descrição dele foram lidos no primeiro comando, antes das prévias. O
   veredito (trocar) se apoia no lugar que a página nomeia, longe da divisória, e não no olhar.
6. **A s19 e o "short rivers".** O Colca é um dos rios mais longos do lado do Pacífico. Aprovei porque, na escala do vídeo (os rios
   do Pacífico contra os do Amazonas), ele é um dos rios curtos e íngremes que a frase diz, e o rótulo fica no lugar que a origem
   nomeia ("Colca Canyon, Arequipa").
7. **O s15-a e o s03-b-2 são clipes diferentes do mesmo trecho da Costa Verde.** Pus os dois lado a lado. Com o s03-b preferido
   na s03, a névoa sobre esse penhasco aparece uma vez só.

## Divergências entre a marca e este ofício

Não achei nenhuma divergência. A falha das escadarias pintadas (s43-a e s49-a) é a leitura conservadora do §3.1, que o ofício
(§5.2) põe como do canal: "obra de arte" como assunto do quadro. Se o Lucas a mudar, os dois voltam a ser julgados. Mesmo assim,
o s49-a cai pela duração e os dois caem pelo contexto.
