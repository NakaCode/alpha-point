# Conferência de mídia · `big-sur` (vídeo 5) · fluxo `midia` · lotes 1 a 5 · lotes 1 e 2 em 04/11/2026 (19:2x e 19:58), lote 3 em 05/11/2026 (04:50), lote 4 em 05/11/2026 (17:41), lote 5 em 06/11/2026 (14:43, Brasília)

**O laudo do arquivo inteiro:** 47 aprovados de 64 conferidos (3 reprovados, 14 trocar, 0 pendente_lucas); 1 com algo não conferido; recebidos: 64 vereditos sobre 44 arquivos.

**O lote 5** (06/11/2026, no `art`, os consertos; tarefa `big-sur-pesquisa-4`): a foto do terraço do Nepenthe para a s52 P1, que o
Lucas escolheu na linha do tempo. É 1 aprovado de 1, apoiado numa `excecao_lucas` (a data): entra sem ano na tela, com um aviso de foto
antiga. O detalhe está na seção "Lote 5", logo abaixo.

**O lote 4** (05/11/2026, no `art`, a pedido da Sala às 17:18): os 11 arquivos baixados na caça 1, conferidos contra as prévias (skill `cacar-no-chrome` §3, passo 5). São 11 aprovados de 11, todos com `mesmo_item: true`. Nenhum reprovado, trocar ou pendente_lucas. O detalhe está na seção "Lote 4", logo abaixo.

**O lote 3** (05/11/2026, no `screen_text`, tarefa `big-sur-pesquisa-1`): 33 julgamentos sobre a regência `e25d0e79…` (os 32 usos de `_usos_de_midia` e a Hurricane Point para s57 › beats[2]).
- As 17 janelas dos usos APROVADO valem e deixaram de ser provisórias. A cabana (s30) e o ROAD CLOSED (s50) valem com a permanência na mesa, e s12 vale na caixa nova.
- A JANELA NOVA de s37 vale.
- São 15 vereditos novos, todos aprovados: os 14 REUSO DECLARADO, cada um julgado na caixa da regência, e a Hurricane Point. O vídeo do DVIDS em s42 só vale nos planos 2 ou 5. A Hurricane Point só vale na 1ª frase do beat.
- Nenhum reprovado, trocar ou pendente_lucas.
- Mudaram os campos de data de s20, s37, s48 e s53, pelo laudo-delta.

Nada foi entregue nem movido. A lista de sha256 de `out/big-sur/_media/` é a mesma antes e depois: 178 arquivos (`out/big-sur/_tmp/conferencia/pesquisa-1/_media-antes.txt` e `_media-depois.txt`, as duas com o sha256 `24a01e3e…78af6`). O JSON foi emendado por script, com o sha256 conferido antes e as cópias em `out/big-sur/_tmp/conferencia/pesquisa-1/`. Foram abertas 15 imagens: recortes nas caixas, ampliações e duas folhas.

## Lote 5 · a foto do terraço do Nepenthe para a s52 P1

O pedido veio do setor Pesquisa e mídia (tarefa `big-sur-pesquisa-4`, 2ª de três peças: o veredito), a mando da Sala de controle, no `art`.
É um rascunho do acervo aberto, julgado antes do `entregar`. O Lucas comentou a s52 na linha do tempo ("Não há foto do restaurente para
inserir?") e, à pergunta da Sala, respondeu "Usar a do terraço (Recomendado)" (`roteiros/big-sur/decisoes-lucas.md`, 06/11/2026, commit
`ba4e009`). A escolha dele não é este veredito: a foto foi julgada pela marca, e a data passa pela exceção que a resposta dele dá.

**O laudo do lote 5:** 1 aprovado de 1 conferido (0 reprovados, 0 trocar, 0 pendente_lucas); 0 com algo não conferido; recebidos: 1.

| id | cena | fonte | veredito | motivo |
|---|---|---|---|---|
| `_media/_caca/s52/acervo-livre/s52-nepenthe-terrace-page-date-2008-02-01-klotz-commons.jpg` (`95dcd3a1…`) | s52 P1 | Wikimedia Commons, Jerrye and Roy Klotz MD, CC BY-SA 3.0 | aprovado | o terraço do Nepenthe com os clientes e a costa ao fundo, como a origem nomeia (Commons, CC BY-SA 3.0, 5318 × 3564, em tela cheia a 0,72×); entra sem ano, com um aviso de foto antiga, pela escolha do Lucas de 06/11; o card fica longe das pessoas ou depois da foto |

**A frase**, na fonte: "Kirk Gafill owns the Nepenthe restaurant in Big Sur." ("Kirk" 591,07 a "Sur." 593,77 no `words.json` `f6055f41…`;
roteiro, l. 75). A janela é a da regência `e25d0e79…`, s52 › beats[0]: 591,067–594,333 s, 3,27 s. O `exige` desse beat ainda descreve o
mapa com o ponto e o card. Como a foto e o mapa dividem os 3,27 s é da Arte e da Direção.

**Os quatro critérios:**
- **Contexto, passa.** A foto mostra o restaurante pelo terraço: mesas, cadeiras, uns 20 clientes comendo e o balcão de serviço, com a costa
  vista do alto. Não mostra o prédio sobre a estrada, e a frase não pede o prédio: pede o restaurante. A origem nomeia o Nepenthe e a costa
  de Big Sur, e nada no quadro contradiz.
  - A foto é antiga e a voz está no presente. A origem não dá o ano da foto: o único que dá, `2008-02-01 12:16:04`, é o do arquivo
    digitalizado. Pela marca, isso faria o contexto falhar ("Foto sem data na origem não entra", identidade §6).
  - Passa pela `excecao_lucas`: a pergunta ao Lucas dizia "num slide antigo sem ano exato", e a opção que ele escolheu, "com o crédito e
    um aviso de foto antiga".
  - Ninguém na foto está identificado, ninguém olha para a câmera, e ela não pode ser lida como retrato de Kirk Gafill.
- **Licença e fonte, passa.** Commons, CC BY-SA 3.0, own work, nem NC nem ND. A licença foi lida pela API hoje, às 14:14, e eu conferi a
  resposta gravada contra o manifest, campo a campo, sem reler na rede.
  - Os clientes são paisagem humana: de costas ou de perfil pequeno e macio, num restaurante, sem assunto sensível. A página não tem o
    modelo `{{Personality rights}}`.
  - A marca não tem regra para pessoa comum em foto de acervo: o §2.2 e o §3.1 da `midia.md` são dos bancos.
  - Nenhuma marca de terceiro se lê.
- **Técnica, passa.** 5318 × 3564 (`ffprobe`), mjpeg, yuvj420p, 18,95 MP. Enche a tela 4K sem ampliar (0,72×).
  - Na escala da tela, a maciez é do foco e do filme, não de ampliação: o grão é fino e não há blocos visíveis a 100 %.
  - Sem retícula e sem marca d'água nos quatro cantos.
  - O arquivo é leve: 0,57 bit por pixel. Não medi a tabela de quantização, que fica fora das ferramentas do ofício.
  - A versão de 2013-02-27 (5782 × 3946) é o mesmo scan com a moldura, não uma versão maior.
- **Repetição, passa.** O sha256 e a URL são únicos no vídeo.
  - As costas vizinhas são outras imagens: a s50 P3, a Caltrans ao sol, termina 9,4 s antes; a s53 P3, a fumaça do DVIDS, começa 15,4 s
    depois.

**Para o `redator-de-tela`:**
- **O crédito**, todo o tempo da foto, na faixa do crédito: `Jerrye and Roy Klotz MD / Wikimedia Commons · CC BY-SA 3.0`. A 60 px (do
  vídeo 5 em diante), quebra em duas linhas se passar de x 1.720, sem encolher.
- **O aviso, obrigatório e sem ano.** Ele diz que a foto é antiga e não tem data, e mais nada. O sentido é o de "Older photo, date unknown";
  a grafia é sua.
  - Nunca "Photo from 2008": o 2008 é, pela evidência, a data da digitalização.
  - Nunca "2008 or earlier", nem uma década ("1980s"): as roupas sugerem, mas a origem não diz.
  - O `data_na_origem` do veredito traz o 2008, copiado da página, e diz ali mesmo que não vai à tela: vale o `aviso_na_tela`.
- **O rótulo de lugar**, se houver: até "Nepenthe", ou "Nepenthe, Big Sur". Nunca "terrace" nem "Highway 1".
- **Na descrição do vídeo** (o que a CC BY-SA 3.0 pede):
  - a página do arquivo, os autores e a licença com o link (`https://creativecommons.org/licenses/by-sa/3.0/`);
  - a mudança (por exemplo, "cropped; text added");
  - nada que sugira endosso dos autores.

**Para a Arte:**
- **O arquivo:** o entregue pela peça 3, com este sha256 (`95dcd3a1…`). Hoje ele está em `_media/_caca/s52/acervo-livre/`, e só depois do
  `entregar` uma cena o cita.
- **O recorte:** no original, x 0, y 400, 5318 × 2991. Ele tira o canto arredondado da moldura do slide e o fio claro do alto, e fica a
  costa em cima e as mesas no terço de baixo. Vai em tela cheia (REGISTRO), a 0,7221×.
- **A escala:**
  - o empurrão vai de 1,00 a 1,12 e termina na caixa de 4.748 px, a 0,81×, que é a recomendada;
  - o teto deste arquivo é 1,00 (3.840 px de largura), abaixo do 1,4 da marca: o slide já é macio, e acima disso o grão vira ampliação;
  - o empurrão vai rumo ao centro das mesas (tela x ≈ 1.600, y ≈ 1.510), nunca rumo à pessoa de pé junto ao balcão (tela x ≈ 2.600–2.850,
    y ≈ 1.150–1.610).
- **Sem tratamento:** sem filtro, sem correção de cor, sem upscale, sem véu nem vinheta. Se a cor for tratada, isso também vai à
  descrição.
- **A faixa do crédito** cai sobre as costas das cadeiras brancas: o contraste se mede no portão (`portao-mapa rodape`). O canto de
  400 × 400 cai em folhagem e no gerânio.
- **O card "KIRK GAFILL · Owner, Nepenthe"**, sem retrato:
  - **o preferido:** não dividir o quadro com esta foto. O card entra no P2 (594,333 s), na mesa, ao lado da folha da Caltrans, onde a voz
    diz "he said". No P1 ficam a foto, o rótulo, o aviso e o crédito;
  - **se a Direção o quiser no P1:** só no alto da metade esquerda (tela x 200–1.900, y 160–900), longe de toda pessoa (as cabeças começam
    em y ≈ 1.150). Ele entra em "Kirk" (591,07 s), sem seta, linha ou ponta, e nunca na metade de baixo nem na coluna da direita
    (x ≥ 2.300), onde estão o guarda-sol, o balcão e a pessoa de pé com a criança;
  - **nunca** a foto no quadro do retrato do card, ou impressa ao lado dele como se fosse o retrato;
  - o card antes da foto, dentro do P1, não cabe: com os 2,0 s de bloco desde "Kirk", a foto ficaria 1,26 s, abaixo do piso de 1,5 s.

### Para o Lucas pesar (lote 5)

Nada: nenhum `pendente_lucas`. O aprovado se apoia na resposta dele de 06/11, gravada como `excecao_lucas`. Ela cobre este sha256, a
falta do ano e a forma do aviso.

### Para reconferir no navegador do app (lote 5)

Nada: nenhum critério ficou `nao_conferido`, e nenhuma página foi aberta.

### Para trocar (lote 5)

Nada. Um aviso do conjunto da cena, para o `regente-de-imagem` e o `montador`: o `exige` de s52 › beats[0] ainda é o mapa com o ponto e
o card, e a regência e o conceito precisam dizer como a foto e o mapa dividem o beat. Com o card no P2, o `exige` de beats[1] também muda.

### Para a Sala (lote 5; não reprova)

- **A leitura da exceção.** Li a resposta do Lucas como resposta direta à pergunta sobre este arquivo (ofício §6.1). A pergunta dizia que
  ele não tem ano exato, e a opção propunha o aviso de foto antiga. Se a Sala ler que ela não cobre a regra da data (identidade §6), o
  veredito vira `pendente_lucas`, com a pergunta: "A foto do terraço não tem o ano na origem, e a marca não deixa entrar foto sem data. Ela
  entra com um aviso 'foto antiga, sem data', sem ano na tela?".
- **A procedência diz "sem a moldura do slide".** Sobram o canto arredondado no alto à esquerda (até y ≈ 60) e um fio claro nas linhas 0
  a 5. O recorte os tira, e é um recado para o `pesquisa-imagens`, não uma falha da entrega.
- **O `data_na_origem` traz o 2008**, porque é o que a origem escreve. Quem o lê por máquina (o `pacote-cena.py` copia todo campo) recebe
  também o `aviso_na_tela`, que diz que nenhum ano vai à tela.

### Desvios do contrato e divergências (lote 5)

- **O JSON (447 KB) e o `.md` foram emendados por script**, de arquivo (`python -X utf8 -B`). O script conferiu o sha256 de antes, a volta
  do formato byte a byte e a contagem do laudo. Os scripts e as cópias de antes estão em `out/big-sur/_tmp/conferencia/s52-terraco/`
  (`scripts/` e `antes/`). O contrato §5 nomeia só o JSON para a emenda; a Sala pediu os scripts nessa pasta.
- **O olhar não foi de olhos de todo novos.** Olhei antes de ler o relato e o manifest, mas o pedido da Sala já descrevia o terraço, os
  clientes e a pessoa de pé junto ao balcão.
- **O que a CC BY-SA pede** saiu da leitura do código legal da 3.0 IGO feita pelo canal em 27/09/2026 (`marca/acervos/2-outros-governos.md`,
  item 2, e `4-video.md`). Nessas cláusulas, o texto é o da 3.0. O da 3.0 Unported não foi relido na rede: é leitura da licença, não
  parecer de advogado.
- Entre a marca e o ofício, nenhuma divergência. A exceção da data é do Lucas, e está gravada como tal.

### Imagens e rede (lote 5)

Abri 5 imagens, todas cópias em `out/big-sur/_tmp/conferencia/s52-terraco/`; o original de 19 MP não foi aberto como imagem:
- `v1-inteira-1920.jpg`, a foto inteira, reduzida;
- `v2-cantos.jpg`, os quatro cantos;
- `v3-100pct-pessoas-balcao.jpg`, as pessoas e o balcão a 100 %;
- `v4-tela4k-1para1-centro-direita.jpg`, o recorte na escala da tela 4K, a 1:1;
- `v5-recorte16x9-com-areas.jpg`, o recorte 16:9 com a área segura, a faixa do crédito, o canto e a zona do card.

As bordas se mediram por números, sem abrir imagem (`signalstats` do ffmpeg). Não fiz nenhum pedido de rede.

### `_media` (lote 5)

O sha256 dos 263 arquivos de `out/big-sur/_media/` deu as listas iguais antes (14:27) e depois (14:45), com o `diff` vazio
(`out/big-sur/_tmp/conferencia/s52-terraco/_media-antes.txt` e `_media-depois.txt`, as duas `3d6b1b61…`). A de antes é igual ao retrato do
setor (`out/big-sur/_tmp/setores/p4/media-antes-conferente.sha256`). A conferência não escreveu, não moveu e não apagou nada em `_media/`.

## Lote 4 · a caça 1: os 11 arquivos baixados, contra as prévias

O pedido da Sala de controle (05/11/2026, 17:18) é o fluxo `midia` de banco pago (skill `cacar-no-chrome` §3, passo 5; ofício §4.1).
Cobre os 11 arquivos que o Lucas aprovou: as linhas 1 a 9 da `lista-aprovacao-caca-1.md` e as linhas 10 e 11 da `lista-aprovacao-caca-2.md`.
A reserva 12 (`s45-a-2`) não foi baixada e não tem veredito. O `s45-a-3` foi julgado para s44, a cena dele; a s60 fica fora deste pedido.

**O laudo do lote 4:** 11 aprovados de 11 conferidos (0 reprovados, 0 trocar, 0 pendente_lucas); 0 com algo não conferido; recebidos: 11.
Os 11 têm `mesmo_item: true`.

**Como conferi.** Cada arquivo passou pelos mesmos passos:
- os três quadros de 15, 50 e 85 % pelo `_frames-de-clipe.mjs`, postos lado a lado com as prévias do mesmo ponto (`lado-a-lado.png`);
- a folha de um quadro por segundo do clipe inteiro;
- os quatro cantos, o topo e o centro a 100 % (a marca d'água), e recortes a 100 % onde havia algo a ver (casa, carro, gente, placa);
- `ffprobe` e `sha256sum`.

A fala foi lida na fonte: a regência `e25d0e79…`, o espelho `446ffccc…`, o `words.json` `f6055f41…` e o roteiro `b0b7234a…`.
Os quadros e as folhas estão em `out/big-sur/_tmp/conferencia/<id-do-candidato>/`, fora do git.
Não foi de olhos novos quanto ao veredito da caça: li o `conferencia-caca.md` antes de abrir os quadros (e, no s01-a, o veredito inteiro).
As prévias do Envato caíram nos pontos de 15, 50 e 85 % do arquivo, ao contrário do vídeo 3: o `previas_pontos` dá o tempo de cada uma, e o
quadro do arquivo no mesmo ponto bate com ela. Não foi preciso procurá-las no clipe inteiro.

| # | id_candidato | cena | banco · item | veredito | mesmo_item | motivo |
|---|---|---|---|---|---|---|
| 1 | s01-a | s01 | Envato `2dfb456b…` | aprovado | true | a ponte de Bixby de drone, em luz de fim de tarde, recuando até a praia, sem casa; 4K, 18,0 s, cobre os 4,0 s do beat |
| 2 | s05-a | s05 | Envato `1f008962…` | aprovado | true | a costa de Big Sur em dia de sol, praia, pedra e serra, em recuo lento, sem casa; 4K, 19,8 s para 4,97 s |
| 3 | s12-a | s12 | Envato `4c7608ca…` | aprovado | true | a estrada que a origem nomeia Highway 1, na encosta verde de Big Sur, em voo largo e lento, com o centro na encosta; 4K ProRes HQ, 13,2 s para 5,53 s |
| 4 | s20-a | s20 | Envato `04f8f43b…` | aprovado | true | uma enseada pequena com praia ao pé da encosta íngreme de Big Sur, em aproximação lenta; 4K ProRes, 29,7 s para 3,8 s |
| 5 | s21-a | s21 | Envato `e1ae4a55…` | aprovado | true | a estrada da costa com guard-rail pendurada na falésia de Big Sur, de cima; 4K, 15,8 s para 4,47 s |
| 6 | s35-a | s35 | Envato `df4a2136…` | aprovado | true | a ponte de Bixby de lado, o arco inteiro sobre o cânion, em drone que avança; 4096 × 2160, 18,2 s para 3,07 s |
| 7 | s48-a | s48 | Envato `39739042…` | aprovado | true | a estrada da costa de Big Sur na encosta, com carros pequenos da metade do clipe em diante, a costa e o mar; 4K, 9,9 s para 5,2 s |
| 8 | s57-a | s57 | Envato `c4f9a13e…` | aprovado | true | a estrada subindo da ponte de Bixby, de cima, com o trânsito e o mirante cheio de carros; 4K, 6,8 s para 3,4 s |
| 9 | s59-a | s59 | Envato `98ff0ab2…` | aprovado | true | o mirante da cabeceira norte de Bixby cheio de carros, com a ponte, até ~5 s; 4K, 16,1 s para 5,6 s |
| 10 | s18-a-2 | s18 | Motion Array `914470` | aprovado | true | as encostas íngremes de Big Sur descendo direto ao mar, em voo lento, sem casa em close; 4K, 12,4 s para 5,63 s |
| 11 | s45-a-3 | s44 | Storyblocks `SBV-353382311` | aprovado | true | a ponte de Bixby inteira, na altura do olho, em panorâmica lenta de tripé, inteira no quadro até ~6 s; 4K, 22,7 s para 4,3 s |

O passo 4 da Sala (nome, medida e ordem) bate com o que medi nos 11. São a mesma resolução, a mesma duração e os mesmos bytes, e o sha256 é
igual ao do `manifest.jsonl`. Nenhum arquivo tem marca d'água. Nenhum mostra pessoa reconhecível em primeiro plano, marca de terceiro legível
nem propriedade privada como assunto (`marca/midia.md` §3.1), e nenhum repete arquivo, item ou plano de outra cena.

### Para o Lucas pesar (lote 4)

Nada: nenhum `pendente_lucas`.

### Para reconferir no navegador do app (lote 4)

Nada: nenhum critério ficou `nao_conferido`, e nenhuma página foi aberta.

### Para trocar (lote 4)

Nada.

### Para quem monta e entrega (lote 4; não reprova)

- **s01-a.** Este veredito vale só para s01. A regência faz a tomada voltar em s02 (o último quadro, que encolhe para o anel) e em s31 P4 (a
  miniatura): "s01's image (the drone's last frame, or the 2023 photo)". Cada volta do clipe pede conferência nova, porque os reusos
  aprovados no lote 3 são da foto de Mavic of Steel, outro arquivo. Em 4 s, a ponte e o arco ainda estão inteiros no quadro.
- **s12-a.** Perto do centro, a 6,59 s, há uma mancha de verde vivo junto a um bosque (x ≈ 1.960–2.050, y ≈ 908–945 no 4K). Ela cai na área de
  repouso da agulha da vinheta (x 1316–2556, y 640–1552). A estrada entra pela esquerda até x ≈ 1.540. É composição, e quem confere é o editor.
- **s20-a.** A s20 › beats[0] tem agora dois aprovados: este clipe e o vídeo do Forest Service (DVIDS 1019795). O plano é um só, e quem rege e
  monta escolhe. O rótulo é "Big Sur coast, California", nunca o nome da enseada: a origem só diz "a cove (…) of Big Sur". Pela forma, a
  enseada parece a de McWay. Se a foto de Iliff (McWay Cove, a 2ª opção de s42) voltar, é o mesmo lugar visto doutro ponto, mas não o mesmo
  plano.
- **s35-a.** O arquivo é 4096 × 2160, e o corte para 16:9 é de quem monta. A praia que o `exige` do beat cita não aparece; a divergência já
  está no `conferencia-caca.md`.
- **s48-a.** Os carros só se distinguem da metade do clipe em diante. O trecho de 5,2 s que os mostra é o de ~4,6 a 9,8 s.
- **s57-a.** A 100 %, o detalhe fino é mole (parece imagem ampliada, com nitidez realçada). O clipe tem 25 fps e a cor não declarada; o
  `_instalar-lote` leva a 30 fps. O mirante cheio de carros aparece aqui, a 689,7 s, 37,7 s antes do "Back at Bixby Creek" do s59-a (727,4 s).
  São outros clipes e outros ângulos.
- **s59-a.** O mirante com os carros fica no quadro até ~5 s, e o beat tem 5,6 s. Com o clipe desde o 0, o fim do beat já mostra a ponte sem
  o mirante. O trecho é de quem monta.
- **s18-a-2.** No meio da encosta, perto do centro, há um pequeno conjunto de gramados, trilhas e uma estrutura escura (provavelmente uma
  construção), com uns 5 % da largura do quadro. O empurrão, se houver, não vai a ele. A luz é encoberta, como a caça já anotou. O arquivo
  traz áudio AAC, e o clipe vai sem o som.
- **s45-a-3.** O trecho sai do começo do clipe: a ponte fica inteira no quadro até ~6 s. A 19 Mb/s, não há bloco visível a 100 %, e o MP4
  serve; o MOV não é preciso. O arquivo traz áudio AAC, e o clipe vai sem o som. A volta em s60 está fora deste pedido: sem reuso declarado e
  sem conferência nova do trecho, ela falha na repetição (a mesma URL em s44 e em s60, 267 s depois).
- **A URL do Envato.** O registrador grava a URL da página do item sem `?itemType=…&term=…`. É a mesma página e o mesmo ID da caça. O
  veredito casa pela URL do `_PROCEDENCIA.json`, que é a que o `_instalar-lote` copia, como nos vereditos de banco do vídeo 3.

### Para a Sala (lote 4; não reprova)

- **A Storyblocks chegou sem metadados que se leiam.** O `ffprobe` só mostra o codificador (`Lavf58.45.100`), e a busca de texto no arquivo
  não acha "storyblocks" nem o ID. O `marca/midia.md` §2.8 dá como prova da Storyblocks "os metadados embutidos no arquivo (…) e o PDF da
  licença", e esta lista não tem linha L da Storyblocks. A prova do item fica no histórico da conta e no nome com que o arquivo chegou
  (`…-SBV-353382311-4K.mp4`, o `arquivo_baixado` do manifest). A prova de licença não é critério do conferente (skill §3.2). Fica registrado.
- **O `marcar` do s01.** O manifest dá o `marcado_em` às 16:08:26 e o arquivo criado às 16:51:07 (Brasília): 43 minutos entre o `marcar` e o
  arquivo. A skill pede o `marcar` logo antes do clique. A identidade sai dos quadros, que batem nos três pontos. É um registro para o relato
  da caça.

### Desvios do contrato e divergências (lote 4)

- **O `.md` também foi emendado por script**, como o JSON (`python -X utf8 -B`, de arquivo). Com 31 KB, regravá-lo inteiro pelo `Write`
  arriscava cortar o que os lotes 1 a 3 escreveram. O contrato §5 só nomeia o JSON para a emenda. O sha256 dos dois foi conferido antes, e as
  cópias de antes estão em `out/big-sur/_tmp/conferencia/caca1-midia/`.
- **Um retrato de `_tmp` foi sobrescrito e restaurado.** Gravei o retrato de antes desta conferência pelo comando do contrato §3 em
  `out/big-sur/_tmp/conferencia/_media-antes.txt`, que é o mesmo nome do retrato da 1ª leva da caça (13:39) citado no `conferencia-caca.md`.
  Restaurei-o com o `_media-depois.txt` da 1ª leva (14:00), que aquele `.md` dá como igual a ele (`diff` vazio). O conteúdo é o mesmo, e é
  igual também ao `_media-antes-leva2.txt` (`ba026ca8…`), mas a data do arquivo agora é de hoje, 17:2x. O retrato deste lote está em
  `_media-antes-caca1-midia.txt` e `_media-depois-caca1-midia.txt`.
- **Os quadros soltos foram abertos um a um só no s18-a-2 e no s45-a-3.** Nos outros nove, vi os mesmos quadros no lado a lado com as
  prévias (reduzidos a 800 px de largura) e, a 100 %, nos cantos e nos recortes.
- Entre a marca e o ofício, nenhuma divergência nesta conferência.

### `_media` (lote 4)

O sha256 dos 223 arquivos de `out/big-sur/_media/` deu as listas iguais antes (17:19) e depois (17:42), com o `diff` vazio
(`_media-antes-caca1-midia.txt` e `_media-depois-caca1-midia.txt`, sha256 `db9c1b6f…`). As duas são idênticas ao retrato da Sala das 17:17
(`out/big-sur/_tmp/caca/retrato-media-antes-conf3.txt`). A conferência não escreveu, não moveu e não apagou nada em `_media/`.

## Lote 3 · as janelas da regência `e25d0e79…`

| Uso | Regência › beat (espelho) | Arquivo | Estado | Na tela (s) | Resultado | Motivo |
|---|---|---|---|---|---|---|
| 0 | s01 › 0 | Mavic of Steel | APROVADO | 0,0–4,0 | vale | a mesma janela; a caixa vai da foto inteira à de 4.720 px (0,81×) |
| 1 | s02 › 0 | Mavic of Steel | REUSO | 4,0–4,8 | **aprovado** (novo) | a ancoragem de 0,8 s: o último quadro de s01 encolhe até o anel, sem afirmar nada sobre as metrópoles (DF-06) |
| 2 | s05 › 0 | Iliff | APROVADO | 15,4–20,367 | vale | a caixa da foto quase inteira (0,75× → 0,84×) |
| 3 | s09 › 0 | Caltrans (aérea) | REUSO | 37,267–41,7 | **aprovado** (novo) | a Highway 1 cortada pelo Regent's Slide, em tela cheia no gancho, com "Photo from 2024" (a estrada da foto está fechada, e a de hoje está aberta) |
| 4 | s09 › 0 (2ª opção) | USGS, Mud Creek | REUSO | 37,267–41,7 | **aprovado** (novo) | reserva: impressa na mesa até 1,4×, com "Photo from 2017"; só entra se a da Caltrans sair |
| 5 | s12 › 0 | Fred Moore | APROVADO | 50,2–55,733 | vale, na caixa nova | o enquadramento à direita: a falésia e o mar no centro, a estrada no terço esquerdo, nenhuma casa |
| 6 | s18 › 0 | Iliff, B | REUSO | 127,033–132,667 | **aprovado** (novo) | a encosta caindo no mar sem chão plano; nenhuma casa (os traços claros são a estrada e um carro, longe) |
| 7 | s19 › 2 | Cone Peak | APROVADO | 140,367–145,567 | vale | miniatura |
| 8 | s20 › 0 | DVIDS 1019795 | APROVADO | 151,067–154,867 | vale | plano 1, de preferência de 0,0 s |
| 9 | s21 › 0 | Fred Moore, B | REUSO | 159,0–163,467 | **aprovado** (novo) | a Highway 1 com a ponte e o carro amarelo, noutro enquadramento que s12 |
| 10 | s25 › 0 | Ventana | APROVADO | 227,2–230,067 | vale | |
| 11 | s25 › 3 (s26) | USGS, Mud Creek | APROVADO | 238,633–244,733 | vale | a miniatura presa ao ponto |
| 12 | s27 › 0 | USGS, Mud Creek | REUSO | 247,8–253,033 | **aprovado** (novo) | o deslizamento de cima, impresso na mesa; só o ano sobre ele, nunca como imagem do drone |
| 13 | s30 › 0 | a cabana de Pfeiffer | APROVADO | 277,533–289,0 | vale, com a permanência | como objeto até 280,533 s, depois fundo de mesa sob a sequoia e os fornos, sem desmentir nada |
| 14 | s30 › 1 | a sequoia | REUSO | 280,533–289,0 | **aprovado** (novo) | a sequoia no recorte do tronco (acima de y ~2.150, sem a criança e a passarela), com "Photo from 2023", até 289,0 s |
| 15 | s30 › 2 | os fornos do HABS | APROVADO | 285,8–289,0 | vale | com o recorte do VR-10 e o rótulo "Lime kilns, Big Sur" |
| 16 | s31 › 3 | Mavic of Steel | REUSO | 304,9–307,667 | **aprovado** (novo) | a imagem do começo como miniatura no anel: a fala a pede |
| 17 | s33 › 1 | a sequoia | APROVADO | 330,433–336,8 | vale | miniatura |
| 18 | s35 › 0 | Jav72 | APROVADO | 362,733–365,8 | vale | a caixa da foto quase inteira; Jav72 só aqui e em s60 (VC-12) |
| 19 | s37 › 0 | NOAA, a obra | JANELA NOVA | 377,9–382,833 | vale, com a janela nova | a foto da obra fica até "the plan says,": é o dano de que os colonos reclamam, no plano seguinte |
| 20 | s42 › 0 | DVIDS 1019795 | REUSO | 438,833–445,067 | **aprovado** (novo), planos 2 ou 5 | a costa sem nada construído; o plano 1 repetiria o quadro de s20 (a câmera é parada, não há voo) |
| 21 | s42 › 0 (2ª opção) | Iliff, C | REUSO | 438,833–445,067 | **aprovado** (novo) | reserva: a encosta de McWay caindo no mar, no enquadramento de baixo |
| 22 | s44 › 4 (s45) | Mavic of Steel, o mirante | REUSO | 475,167–479,467 | **aprovado** (novo) | o mirante com gente de pé no parapeito, sob "Stand there" |
| 23 | s48 › 2 | Caltrans (aérea) | APROVADO | 545,1–548,6 | vale | a data agora é fevereiro de 2024 (VP-B-085) |
| 24 | s50 › 1 | Caltrans, ROAD CLOSED | APROVADO | 574,867–581,633 | vale, com a permanência | como objeto até 579,567 s, depois sob a foto da estrada reaberta |
| 25 | s50 › 2 | Caltrans, img5061 | APROVADO | 579,567–581,633 | vale | |
| 26 | s53 › 2 | DVIDS 1019831 | APROVADO | 609,7–614,167 | vale | trecho 16,8–30,8 s (ou 0–16,8 s) |
| 27 | s55 › 5 (s56) | ACS p. 1 | APROVADO | 667,0–671,2 | vale | |
| 28 | s55 › 5 (s56) | ACS, o título | APROVADO | 667,0–671,2 | vale | opcional |
| 29 | s57 › 0 | Fred Moore, B | REUSO | 689,7–693,1 | **aprovado** (novo) | o carro amarelo sob "the visitors", no mesmo canto de s21, 531 s depois |
| 30 | s59 › 0 | Mavic of Steel | REUSO | 727,4–733,0 | **aprovado** (novo) | a imagem do começo, com os carros no mirante: a fala a pede |
| 31 | s60 › 0 | Jav72, B | REUSO | 742,3–745,967 | **aprovado** (novo) | as montanhas acima da ponte; nenhuma casa nem prédio nas duas caixas, conferido no tamanho do arquivo |
| — | s57 › 2 | Hurricane Point (Joe Mabel) | fallback proposto | 698,6–702,433 | **aprovado** (novo), só a 1ª frase | a vista do mirante que o plano de 1986 nomeia, sob "Many come for the view the 1986 plan set out to protect." |

**A Hurricane Point em s57 › beats[2], a medida:**
- O arquivo tem 6000×4000 e enche a tela a 0,64× pela largura.
- Toda caixa 16:9 de 2.743 a 6.000 px de largura cabe na altura dele, de 1.543 a 3.375 px num arquivo de 4.000. O recorte do empurrão, que precisa de pelo menos 2.743 px (VC-12), cabe com folga e fica em 1,4× ou menos.
- O veredito cobre 698,6–702,433 s, a 1ª frase. "They stop, they look, and then they drive on." (702,46–705,15 s) não está na foto: ninguém está parado, e os carros são pontos. Esse trecho fica com o mapa e os carrinhos que o fallback da regência escreve para ele. Uma foto parada nos 7,133 s inteiros passaria também do teto de 6 s.
- O rascunho é o `s05-big-sur-coast-from-hurricane-point-2025-03-11-joe-mabel-commons.jpg`, com sha256 `a93bb924…84cd`.
- O crédito é `Joe Mabel / Wikimedia Commons · CC BY-SA 4.0`, com "Photo from 2025".
- O `lugar_na_origem` é "Hurricane Point Vista Point, Big Sur, looking toward Bixby Creek Bridge".

### Os usos sem `aprovado`, e o fallback que passa a valer

Nenhum uso ficou sem `aprovado`. O fallback que passa a valer é este:
- **s57 › beats[2], de 702,433 a 705,733 s**: o mapa (P-DISTRITO) com os carrinhos que param num mirante e seguem, como a regência escreve. A Hurricane Point cobre só até 702,433 s.
- **s09 e s42**: valem as primeiras opções, a aérea da Caltrans e o vídeo do DVIDS. As 2ªs opções (USGS e Iliff C) também saíram aprovadas, mas ficam só como reserva.
- **s42, no vídeo**: o plano 1 do DVIDS (0–29,5 s) não está coberto. Se o editor não usar os planos 2 ou 5, vale a 2ª opção (Iliff C).

### Os campos de data (o laudo-delta dos fatos da pesquisa)

| Cena | Campo | Antes | Depois |
|---|---|---|---|
| s37 | `data_na_origem` | "1932 (no título do arquivo; a descrição diz 'under construction'; o campo Date, 13 December 2011, é o do envio)" | "sem ano na legenda da NOAA; 1932 só no título do envio; a obra, 1931–1932" (VP-B-082) |
| s37 | `motivo` | "…o cimbramento da ponte de Bixby em 1932…" | "…durante a obra de 1931–1932…", com a janela nova |
| s48 | `data_na_origem` | "2024-02-10 (no nome do arquivo na galeria…)" | "EXIF 2024-02-12 13:43; o nome do arquivo diz february-10-2024" (VP-B-085) |
| s48 | `motivo` e o motivo do contexto | "no dia seguinte ao deslizamento" / "dia seguinte ao deslizamento" | "em fevereiro de 2024 (EXIF de 12/02/2024)" |
| s20 | `data_na_origem`, `aviso_de_ano` | null, null | "2026-08-15 (Date taken, DVIDS)", false (VP-B-059) |
| s53 | `data_na_origem`, `aviso_de_ano` | null, null | "2026-08-13 (Date taken, DVIDS)", false (VP-B-094) |

Cada veredito guarda os valores de antes em `campos_antes`.

O VP-B-116 (s36 P1) ficou só registrado, em `lotes[2].notas_sem_veredito`. Se a foto do acampamento da NOAA voltar, ela vai com `aviso_de_ano` false e com "1930s" dentro do rótulo. Hoje o veredito dela continua trocar, e ela está fora da regência.

### Para o Lucas pesar

Nada. Nenhum veredito do lote 3 sai `pendente_lucas`.

### Para reconferir no navegador do app

Nada. O lote 3 fez um pedido à API do Commons, que respondeu 200, e não usou o `WebFetch`.

### Para trocar

Nada. Nenhum veredito do lote 3 sai trocar.

**Avisos do conjunto da cena** (para o `regente-de-imagem`, o `montador` e o `editor-de-arte`):
- **s57 › beats[2]**: se a Hurricane Point entrar, a regência precisa escrever a divisão do beat: a foto de 698,6 a 702,433 s, e o mapa com os carrinhos de 702,433 a 705,733 s. Sem essa divisão, o veredito não cobre o beat.
- **s42**: os 6,234 s passam 0,234 s do teto de 6 s do plano parado, tanto no vídeo, que é de câmera parada, quanto na foto com empurrão. O aviso é da cena, não do arquivo.
- **s30**: a sequoia vai no recorte do tronco, acima de y ~2.150 do arquivo, onde não aparecem a criança nem a passarela. A regência não deu caixa para ela.
- **s21 e s57**: o mesmo canto da foto de Fred Moore volta 531 s depois (IoU 0,89). A volta está declarada no conceito e na regência, e passa.
- **A foto de s01** tem 5 aparições (s01, s02, s31, s45, s59), todas declaradas. Jav72 tem 2 (s35, s60), e a VC-12 foi respeitada: Jav72 não vai a s45 nem a s59.

### Para quem monta e entrega (não reprova)

- **A Hurricane Point**: quem a entrega é o `pesquisa-imagens`, depois deste veredito. Ela vai à cena s57, com o sha256 do rascunho julgado.
- **s42, o vídeo do DVIDS**: use o plano 2 (29,5–43,8 s) ou o plano 5 (68,1–91,6 s). A névoa do plano 2 pode ser fumaça do Timber Fire. O plano 5 é limpo.
- **s27**: sobre a foto do USGS vai só o ano (MUD CREEK · 2017). O nome do USGS e a data do voo (19 de julho) não vão sobre ela, porque a foto é de 27 de maio e não é imagem do drone.
- **s09**: "Photo from 2024" sobre a aérea da Caltrans. Na 2ª opção, "Photo from 2017".
- **s37**: o ano, se for à tela, vem da obra (1931–32). **s48**: se houver rótulo de data, é "FEB 2024".
- **Os rótulos de lugar**: s21 e s57 levam "Highway 1, Big Sur", porque a origem põe a foto perto de Ragged Point, no fim sul, fora do distrito (VP-B-046). s09 leva "Highway 1, Big Sur", dentro do "Regent's Slide" da origem.

### Desvios do contrato e divergências (lote 3)

- **`data_na_origem` e `aviso_de_ano` em vídeo.** O contrato (§2.1) deixa esses campos fora do vídeo. O laudo-delta os pede para s20 e s53 (VP-B-059 e VP-B-094), e a Sala mandou gravar. Eles foram gravados nesses dois vereditos e no veredito novo do DVIDS em s42, cada um com uma nota `campos_de_video_fora_do_contrato`.
- **O motivo do contexto de s48** também perdeu o "dia seguinte", que repetia o erro do motivo (VP-B-085). O valor de antes está em `campos_antes`.
- **O vídeo de 2026 numa fala do passado (s42).** A regra é que "vídeo de outro ano continua fora". Li a fala ("how much of this coast should be built on") como fala sobre a costa, e o quadro como a costa de hoje. Nada nele data a imagem, e é o mesmo papel do B-roll de hoje que a caça pede. Se a Sala ou o Lucas lerem diferente, o veredito do vídeo cai, e vale a 2ª opção.
- **O reuso do DVIDS pressupõe um voo.** A regência pede um trecho "longe dele no mesmo voo", mas o vídeo tem sete planos de câmera parada. Por isso o plano 1 não serve em s42.
- **A parte da Hurricane Point.** O ofício (§3.5) pede a divisão escrita. A regência a escreve de dois jeitos: na tomada parada ("corta-se a ≤ 6 s e o resto fica no mapa") e no fallback, que já divide o beat por frase. O veredito usa essa divisão, na fronteira das frases (702,433 s).

## Lotes 1 e 2 (04/11/2026), como foram gravados

**O laudo dos lotes 1 e 2:** 20 aprovados de 37 conferidos (3 reprovados, 14 trocar, 0 pendente_lucas); 1 com algo não conferido; recebidos: 37 vereditos sobre 32 arquivos. Cinco arquivos foram julgados para duas cenas cada: o vídeo do USGS (s09 e s27), as fotos de Carmel de Daderot e de Leipelt (s14 e s17), a Pine Ridge (s25 e s33) e a foto aérea da Caltrans (s48 e s28).

**O lote 2:** 13 aprovados de 21 vereditos (2 reprovados, 6 trocar). São 17 vereditos novos, sobre 13 rascunhos do acervo aberto, a Pine Ridge para s33 e as duas páginas do questionário da ACS. Os outros 4 refazem vereditos do lote 1 com o que a Sala viu no navegador do app (Leipelt em s14 e s17; a cabana dos Pfeiffer e o HABS em s30). Os 4 vereditos antigos estão em `substituidos`, com `substituido_em`. A Hurricane Point de Joe Mabel para s44 ficou sem veredito: os três planos de s44 são mapa 3D, e o espelho diz "Nada a caçar: isto não foi filmado (uma regra); o relevo é a base". O plano não pede foto.

Nada foi entregue nem movido. A lista de sha256 de `out/big-sur/_media/` é a mesma antes e depois (148 arquivos; `out/big-sur/_tmp/conferencia/_media-antes-lote2.txt` e `_media-depois-lote2.txt`). O JSON foi emendado por script, com o sha256 conferido antes e uma cópia em `out/big-sur/_tmp/conferencia/conferencia-midia.json.antes-lote2`. Não há regência, então toda janela é provisória: é a do plano que o montador escreveu no espelho r2.

| Arquivo | Cena | Fonte | Veredito | Motivo |
|---|---|---|---|---|
| `s01-bixby-bridge-aerial-2023-06-24-mavic-of-steel-commons.jpg` | s01 | Commons | aprovado | reserva declarada da abertura: a ponte de Bixby de cima (2023, 5280×2970). Só entra sem o drone 4K da caça, com "Photo from 2023" |
| `s05-big-sur-coast-from-hurricane-point-2025-03-11-joe-mabel-commons.jpg` | s05 | Commons | trocar | céu encoberto, sem o sol que o plano pede para "isn't a harsh climate", e a ponte de s01 no centro. A foto de McWay serve |
| `s05-big-sur-coast-mcway-cove-sunny-2013-05-diliff-commons.jpg` | s05 | Commons | aprovado | reserva declarada de s05: a costa de McWay em sol (maio de 2013, 8000×5210), com "Photo from 2013". O aéreo de banco vem antes |
| `s09-s27-mud-creek-landslide-uas-2017-07-19-usgs-harrison.mp4` | s09 | USGS | trocar | a Highway 1 enterrada só aparece sob título, seta e legenda queimados. Os trechos limpos (até ~3,3 s) mostram as estradas de terra e não cobrem os 4,4 s |
| idem | s27 | USGS | trocar | a aproximação e a estrada sumindo estão sob título, seta e legenda queimados. Nenhum trecho limpo chega aos 4,9 s |
| `s12-highway-1-big-sur-cliffs-2012-07-29-fred-moore-commons.jpg` | s12 | Commons | aprovado | reserva declarada de s12: a Highway 1 na falésia em sol (2012, 4977×3318), com "Photo from 2012". O voo de banco vem antes |
| `s14-s17-carmel-beach-cypress-2013-11-18-daderot-commons.jpg` | s14 | Commons | trocar | o céu ocupa dois terços, e o mar e a cidade não aparecem: na miniatura de CARMEL, lê-se nuvem e árvore |
| idem | s17 | Commons | trocar | o mesmo |
| `s14-s17-carmel-by-the-sea-coastline-aerial-2016-10-24-leipelt-unsplash-commons.jpg` | s14 | Commons (do Unsplash) | **aprovado** (refeito no lote 2) | Carmel de cima, a cidade sobre o pontal e as praias (CC0 do Unsplash, publicada em 25/10/2016, 4096×2730), como miniatura junto de CARMEL, com "Photo from 2016" |
| idem | s17 | Commons (do Unsplash) | **aprovado** (refeito no lote 2) | a mesma miniatura de s14 P2, com reuso declarado (DF-18). A CC0 foi conferida no navegador do app |
| `s19-cone-peak-from-vicente-flat-trail-2022-11-12-natecation-commons.jpg` | s19 | Commons | aprovado | o Cone Peak no centro, nomeado na origem (2022, 4032×2268), como miniatura, com "Photo from 2022" |
| `s20-big-sur-coast-cliffs-cove-2026-08-15-usfs-avitt-dvids-1019795.mp4` | s20 | DVIDS (Forest Service) | aprovado | falésia a pique e uma praia pequena em Big Sur, no plano 1 (0–29,5 s), em 4K, domínio público |
| `s25-pine-ridge-trail-big-sur-2013-10-15-john-murphy-commons.jpg` | s25 | Commons | trocar | a coordenada da origem põe a trilha no Pfeiffer Big Sur State Park, a 1,4 km da Ventana Wilderness que a frase aponta |
| idem | s33 | Commons | trocar (lote 2) | o assunto é a trilha, e o título da origem também. As sequoias ficam nas bordas e, em miniatura, lê-se trilha na mata. A sequoia de Aligata cobre o plano |
| `s25-ventana-wilderness-bottchers-gap-2012-06-21-s-rae-commons.jpg` | s25 | Commons | aprovado | a Ventana Wilderness vista de Bottchers Gap, serra e mata sem uma casa (2012, 4320×3240), com "Photo from 2012" |
| `s26-mud-creek-landslide-air-photo-2017-05-27-usgs.jpg` | s26 | USGS | aprovado | o deslizamento de Mud Creek sobre a estrada, de cima, em 27/05/2017 (1500×992, a maior da origem), como miniatura, sem aviso |
| `s26-mud-creek-landslide-from-rv-snavely-2017-07-usgs.jpg` | s26 | USGS | trocar | a página data a foto de "July 2011 (approx.)", impossível para 2017, e a estrada não aparece. A foto aérea cobre a miniatura |
| `s48-s28-regents-slide-highway-1-closed-aerial-2024-02-10-caltrans.jpg` | s28 P3 | Caltrans | trocar (lote 2) | é o Regent's Slide certo, mas a mesma foto vai grande em s48, 279 s depois, e o espelho não declara essa volta |
| `s30-john-pfeiffer-homestead-cabin-2023-07-11-aligata-commons.jpg` | s30 P1 | Commons | **aprovado** (refeito no lote 2) | a cabana do colono John Pfeiffer, do fim do século XIX (2023, 4032×2866), com "Photo from 2023". A foto de época não está nos acervos ao alcance, porque a LoC recusou também o navegador do app |
| `s30-limekiln-kilns-1-2-habs-ca-2734-10-2002-rosenthal.tif` | s30 P3 | Commons (HABS) | **aprovado** (refeito no lote 2) | os fornos de cal de Limekiln (HABS, 2002, domínio público), com "Photo from 2002", pelo mesmo motivo |
| `s30-limekiln-lime-kilns-2013-03-30-akos-kokai-commons.jpg` | s30 P3 | Commons | trocar | os fornos em 2013, quando a foto do HABS, de 2002, mostra os mesmos fornos e é do ano mais perto do fato |
| `s30-tanbark-oak-harvesting-big-sur-c1900-cb-clark-commons.tif` | s30 P2 | Commons | reprovado | PD-US sem o ano de publicação que o modelo exige, tirada de um livro moderno, e a imagem é mole e comprimida |
| `s32-notleys-landing-big-sur-1914-slevin-commons.jpg` | s32 P3 | Commons | reprovado (lote 2) | o desembarcadouro de Notley's (1914) sem barco nenhum, e o domínio público sem prova: o modelo diz que a foto foi publicada antes de 1931, mas a fonte é um livro do archive.org sem o ano |
| `s33-pfeiffer-big-sur-sp-coast-redwood-2023-07-13-aligata-commons.jpg` | s33 P2 | Commons | aprovado (lote 2) | a sequoia do Pfeiffer Big Sur State Park, nomeada na origem (2023, 2410×3286), como miniatura junto do vale, com "Photo from 2023" |
| `s35-bixby-bridge-side-arch-canyon-drone-2025-02-28-jav72-commons.jpg` | s35 | Commons | aprovado (lote 2) | a ponte de Bixby de lado, com o arco e o cânion (2025, 8064×6048), reserva do aéreo de banco, com "Photo from 2025" |
| `s36-anderson-canyon-convict-camp-1922-commons.jpg` | s36 P1 | Commons | reprovado (lote 2) | o domínio público não está provado ("Original publication: unknown"), a origem não diz que eram presos, e os carros do quadro parecem dos anos 1930, não de 1922 |
| `s36-highway-1-prison-labor-camp-1930-1936-risvold-uscgs-noaa-commons.jpg` | s36 P1 | Commons (NOAA) | trocar (lote 2) | o acampamento é uma fila pequena de barracões no meio da paisagem, e os presos não aparecem. A origem diz Folsom, e a fala seguinte diz San Quentin |
| `s37-bixby-creek-bridge-under-construction-1932-risvold-uscgs-noaa-commons.jpg` | s37 P1 | Commons (NOAA) | aprovado (lote 2) | a falésia cortada pela estrada nova e o cimbramento da ponte de Bixby em 1932 (domínio público), na mesa como foto pequena, até ~1.330 px na tela. *No lote 3, o motivo passou a "durante a obra de 1931–1932", com a janela nova (VP-B-082)* |
| `s48-s28-regents-slide-highway-1-closed-aerial-2024-02-10-caltrans.jpg` | s48 P3 | Caltrans | aprovado (lote 2) | o Regent's Slide sobre a Highway 1, de cima, no dia seguinte ao deslizamento (10/02/2024, 5472×3648). *No lote 3, o motivo passou a "em fevereiro de 2024 (EXIF de 12/02/2024)" (VP-B-085)* |
| `s50-regents-reopening-road-closed-sign-first-cars-2026-01-caltrans-img4919.jpg` | s50 P2 | Caltrans | aprovado (lote 2) | a placa ROAD CLOSED saindo da pista e os primeiros carros passando, na reabertura (galeria de Regent's Slide), na mesa |
| `s50-highway-1-reopened-regents-slide-2026-01-caltrans-img5061.jpg` | s50 P3 | Caltrans | aprovado (lote 2) | a encosta de Regent's Slide reparada, com a estrada reaberta atravessando-a: a 2ª foto da mesa |
| `s50-regents-slide-crew-on-slope-2025-10-22-caltrans.jpg` | s50 P3 | Caltrans | trocar (lote 2) | é a obra de outubro de 2025, e não a reabertura de 2026 que a frase do P3 data. Serviria ao "Crews drilled…" do P1 |
| `s50-regents-slide-reopening-day-2026-01-14-dialh-commons.jpg` | s50 P2 | Commons | trocar (lote 2) | o céu ocupa mais da metade, e a estrada reaberta é uma linha fina sem nenhum carro. A foto da placa saindo e a vista de perto, as duas da Caltrans, cobrem a frase |
| `s50-regents-slide-steel-bars-2025-05-21-caltrans.jpg` | s50 P3 | Caltrans | trocar (lote 2) | as barras de aço no chão do canteiro (maio de 2025) não cobrem a reabertura adiantada. Serviriam ao "steel bars" do P1 |
| `s53-timber-fire-smoke-column-santa-lucia-2026-08-13-usfs-avitt-dvids-1019831.mp4` | s53 P3 | DVIDS (Forest Service) | aprovado (lote 2) | a fumaça subindo da mata na serra sobre o mar, no Timber Fire perto de Big Sur (13/08/2026, 4K), no trecho 16,8–30,8 s (ou 0–16,8 s) |
| `documento/acs-2024-questionario-p1.jpg` | s56 P2 | Census Bureau | aprovado (lote 2) | a página 1 do questionário da ACS 2024 (domínio público), sem a logo, com o trecho "conducted by the U.S. Census Bureau" para o grifo |
| `documento/acs-2024-questionario-p1-titulo.jpg` | s56 P2 | Census Bureau | aprovado (lote 2) | o título "American Community Survey" do mesmo caderno, sem a logo, opcional junto da página |

## As quatro reconferências do lote 1

- **A foto aérea de Carmel, de Leipelt (s14 e s17), passou a aprovado.** A Sala abriu https://unsplash.com/photos/-2KUZhA7iaU no navegador do app em 04/11/2026, às 19:27. A página mostrou "Publicada em 25 de outubro de 2016" (`<time datetime="2016-10-25T02:47:10.000Z">`), o autor "Chris Leipelt" e o lugar "Carmel-by-the-Sea, United States". A data é anterior a 05/06/2017, então a CC0 do Commons vale. O texto copiado e a hora estão em `conferido_no_navegador_do_app`.
- **A cabana dos Pfeiffer e os fornos do HABS (s30) passaram a aprovado.** A busca da foto de época passou pelo Commons e pela NARA, pela pauta. Ela passou também pela Library of Congress, que recusou o navegador do app em 04/11/2026, às 19:0x (HTTP 403, "Executando verificação de segurança"). A Sala parou ali pela regra do canal. Fechada a busca, vale a exceção da foto de outro ano (`identidade.md` §6, "É exceção"), com o aviso do ano. O pedido e o `navegador-sala.md` dão a hora sem o minuto. O veredito não depende disso, porque se baseia só na recusa, e não no que a página mostraria.
- **O tanbark e a Kokai não mudam.** O tanbark continua reprovado pela licença e pela qualidade. O `reconferir` antigo dele apontava para a LoC, que agora está fora do alcance deste vídeo, e por isso ficou sem efeito. A foto de Kokai segue trocar, porque a do HABS é do ano mais perto do fato.

## Para o Lucas pesar (lotes 1 e 2)

Nada. Nenhum veredito dos dois lotes sai `pendente_lucas`.

## Para reconferir no navegador do app (lotes 1 e 2)

Nada novo. A Library of Congress fica fora deste vídeo pela recusa de 04/11/2026, e nenhum item espera por ela.

## Para trocar (lotes 1 e 2)

Recados ao `pesquisa-imagens` (todos os `trocar` deste arquivo são dele):
- **s05**: a Hurricane Point não serve. Ela foi sugerida para s44, mas s44 não pede foto (mapa 3D), e por isso ficou sem veredito.
- **s09 e s27**: `Mud Creek landslide July 2017 UAS footage without captions, USGS`.
- **s14 e s17**: resolvido. A foto de Leipelt está aprovada nas duas cenas.
- **s25**: `Ventana Wilderness trail photograph, inside the wilderness boundary`.
- **s28 P3** (a miniatura de Regent's Slide): `Regent's Slide Caltrans February 2024 photo, a different frame`. A galeria tem outra foto do mesmo dia, "february-10-202401", com o alt "Photo showing extent of Regent's Slide". Outra saída é o montador declarar no espelho a volta da foto aérea de s48 (como fez com Carmel no DF-18). Aí uma conferência nova a aprova.
- **s32 P3**: `Big Sur coast landing with schooner, historic photograph, with publication and license at the source`.
- **s33 P2**: a Pine Ridge cede à sequoia de Aligata.
- **s36 P1**: `convict road crew working on the Carmel-San Simeon highway, 1930s photograph`. Os dois acampamentos ficam de fora.
- **s50**: as fotos da equipe na encosta e das barras de aço serviriam ao P1 ("Crews drilled thousands of steel bars into the slope at Regent's Slide"), se o montador quiser foto junto do perfil desenhado, com conferência nova. A do Dialh cede às duas da Caltrans.

**Avisos do conjunto da cena** (para o `regente-de-imagem` e o `montador`, antes da regência):
- **s30**: o P1 (a cabana) e o P3 (os fornos do HABS) estão cobertos. O P2 (sequoia ou casca) não tem foto aprovada. Na mesa, ele fica sem foto, ou volta a reserva do espelho, com o ícone do ofício.
- **s32 P3 e s36 P1**: nenhum `aprovado`. Vale a reserva do espelho: os desembarcadouros acesos no mapa, e o mapa com os acampamentos.
- **s28 P3**: as duas miniaturas estão sem foto aprovada. A de Paul's não foi achada (lacuna da pauta), e a de Regent's saiu trocar por repetição.
- **s09 e s27**: nenhum `aprovado` cobre os planos de footage. A saída é a declarada no espelho: a foto aérea de s26 e o mapa.
- **s01, s05, s12 e s35**: cobertos só por fotos de reserva. O preferido é o drone 4K da caça, que ainda não aconteceu. Em s35, o espelho não declarou reserva, então usar a foto ali é escolha do montador.
- **s59 P3** (reuso declarado da imagem de s01): com a foto da reserva, o plano dura 6,967 s, acima do teto de 6 s da foto parada (identidade §4.3).
- **s50**: o P2 (a placa saindo) e o P3 (a encosta reaberta) estão cobertos pela Caltrans, na mesma mesa. O P1 é desenho.
- Nenhuma cena deste lote tem janela de footage de 6 s ou mais sem `aprovado` com movimento que a cubra.

## Para quem monta e entrega (lotes 1 e 2; não reprova)

- **s37**: a foto da NOAA tem 2860×1605 nominais, mas o detalhe é o de uma foto de ~950 px. Reduzida a 1/3 e ampliada de volta, ela perde quase nada (PSNR 45,7 dB). Vai como a foto pequena, impressa sobre a mesa, com no máximo ~1.330 px de largura na tela. A foto do acampamento da NOAA (s36) tem o mesmo defeito.
- **s53**: use o plano 2 (16,82–30,83 s) ou o 1 (0–16,82 s). Os planos 3 (a brigada) e 4 (as viaturas com "CAL FIRE" legível) ficam fora desta frase. O vídeo vai sem o áudio e passa de 29,97 a 30 fps na entrega.
- **s35**: 48,8 MP, e o `entregar` reduz. A foto de McWay (s05) tem 41,7 MP. O TIFF do HABS se converte para JPG. Os vídeos do DVIDS passam a 30 fps.
- **s56**: a marca vazada "INFORMATIONAL COPY" é do próprio caderno e atravessa o trecho do grifo. Ela fica, porque diz a verdade sobre a página. A logo do Census e o código de barras ficaram fora dos dois recortes.
- **s50 img_4919**: há gente e carros de marca no quadro. É registro de evento real feito pelo órgão, não banco pago, e a regra de autorização de modelo (`midia.md` §3.1) não se aplica.
- **Créditos na tela**:
  - Caltrans: "Caltrans". A origem não pede crédito, e a foto do órgão estadual entra com o nome dele, como a do Estado (`midia.md` §7.5).
  - Commons com atribuição: `<autor> / Wikimedia Commons · <licença>` (Aligata, Jav72).
  - CC0 (Leipelt, Dialh), NOAA, HABS, DVIDS e Census: nenhum crédito (identidade §7).
- **O teto do rótulo de lugar** (`lugar_na_origem`):
  - img_4919: só "Highway 1, Big Sur", porque o alt não nomeia o ponto.
  - img_5061 e a foto aérea: "Regent's Slide".
  - o vídeo do DVIDS: "near Big Sur". A serra de Santa Lucia está só no nome do arquivo.
  - o acampamento da NOAA, se um dia voltar: nunca "San Quentin". A origem diz Folsom, e a diferença é do `verificador-de-fatos`.
- **O aviso do ano**: "Photo from 2023" (Aligata), "Photo from 2025" (Jav72) e, em s30, "Photo from 2023" e "Photo from 2002". As fotos da NOAA de 1932, da Caltrans de 2024–2026 e o vídeo de 2026 são do próprio fato e vão sem aviso.

## Divergências entre a marca e este ofício, e entre as peças (lotes 1 e 2)

- **As Conditions of Use da Caltrans, lidas de dois jeitos.** A pauta de documentos escreveu que as fotos ficam "fora dessa frase" de domínio público. A pauta de imagens e este conferente leem a frase sobre fotografias como a do material de terceiros que o site usa: "not owned or created by the California Department of Transportation". Por essa leitura, as fotos da própria galeria da Caltrans, sem crédito de terceiro, ficam no domínio público. O Lucas autorizou a Caltrans "conferindo a licença" e deixou o julgamento foto a foto com este conferente. Se o `verificador-de-fatos` ou a Sala lerem diferente, os 5 arquivos da Caltrans deste lote (6 vereditos) voltam para uma conferência nova.
- **A LoC e o "É exceção" da identidade §6.** A regra pede que a busca da foto do ano passe pelos acervos que recusam robô, e a regra de robô manda parar na recusa. Com a LoC recusando até o navegador do app, as duas regras se encontram assim: a busca passou por onde o canal pode ir, e a exceção vale. Fica registrado para o Lucas, caso ele queira outro caminho para a LoC nos próximos vídeos.
