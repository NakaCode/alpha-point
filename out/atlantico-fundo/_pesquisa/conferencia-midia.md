# Conferência de mídia: atlantico-fundo (vídeo 4), fluxo `midia`, lotes 1 a 8; o lote 8 em 29/10/2026, 12:36 (Brasília)

**O laudo do lote 8:** 3 aprovados de 3 conferidos (0 reprovados, 0 trocar, 0 pendente_lucas); 0 com algo não conferido;
recebidos: 3. Os três com `mesmo_item: true`.

**O laudo do arquivo inteiro (lotes 1 a 8):** 40 aprovados de 56 vereditos sobre 45 arquivos (3 reprovados, 13 trocar,
0 pendente_lucas); 0 com algo não conferido.

## Lote 8: a caça 1 nos bancos pagos, Fase B (29/10/2026)

O despacho: a Sala, às 12:16, no fluxo `midia`, sobre os três arquivos baixados com o "sim" do Lucas à lista (12:0x: "1. Sim e o
atlantico-fundo está criado / 2. B"), antes do `_instalar-lote` (skill `cacar-no-chrome`, §3, passo 5). Os candidatos e as prévias são
os da Fase A (`conferencia-caca.json`, 11:46–11:58). A janela de cada plano é a do beat da regência (`9d0ab49f…a3d9`), não provisória.

| id | Cena | Fonte | Veredito | `mesmo_item` | Motivo |
|---|---|---|---|---|---|
| s10-a-2 | s10 | Shutterstock 3607760923 (Wirestock Creators) | aprovado | true | o mar aberto azul-escuro domina o quadro, com a costa de Aguadilla (nomeada no título) atrás e céu calmo para a pergunta; é o item da prévia nos três pontos; 4K, 18,4 s; sem o artista na tela, pela decisão do Lucas (só a linha do fim) |
| s11-a | s11 | Envato `c076f2d9…` (fivamedia) | aprovado | true | mar aberto azul-marinho de cima, sem terra, barco nem gente no clipe inteiro, com o centro livre para a vinheta; é o item da prévia (as três prévias casam com 6,6, 3,7 e 2,5 s do arquivo); 4K ProRes, 13,8 s |
| s51-a | s51 | Envato `485c96d0…` (world_footage) | aprovado | true | Old San Juan do ar (nomeada no título), a cidade densa sobre a baía: a ilha habitada da frase; é o item da prévia (as três prévias casam com 7,5, 18,5 e 27,4 s do arquivo); 4K, 28 s, sem letreiro legível nem gente em primeiro plano |

Os arquivos, em `out/atlantico-fundo/_media/_caca/`:
- `s10/shutterstock/shutterstock_3607760923.mp4`, sha256 `3d186e51…ec45`;
- `s11/envato/birds-eye-view-of-deep-blue-ocean-water-2026-10-02-17-07-31-utc.mov`, sha256 `121223b8…0071`;
- `s51/envato/bustling-cityscape-of-old-san-juan-from-above-2026-10-03-00-19-31-utc.mp4`, sha256 `38294e94…4e5d`.

### O arquivo é o item da prévia? (ofício §4.1)

Para cada arquivo: os quadros de 15, 50 e 85 % (`_frames-de-clipe.mjs`), descritos antes de abrir as prévias; depois, cada prévia ao
lado do quadro do arquivo no instante dela, no recorte do player. Além do olho, uma medida: os quadros do arquivo a 10 por segundo
contra cada prévia, por correlação de faixas de detalhe. O controle foi o arquivo da s11 contra as prévias da reserva s11-a-2, outro
clipe de mar aberto. A medida apoia o olho, e não o substitui.

- **s10 (Shutterstock):** as prévias caíram nos pontos. As melhores posições no arquivo são 2,7, 9,1 e 15,6 s (15, 49 e 85 %), com
  correlação de 0,99. No olho, o cais com a torre, o tanque, o galpão, os prédios e as nuvens estão nos mesmos lugares. O nome traz o ID.
- **s11 (Envato):** as prévias não caíram nos pontos. Elas casam com 6,6 s (48 %), 3,7 s (27 %) e 2,5 s (18 %), fora de ordem: a de
  85 % parece ter dado a volta no fim do clipe.
  - Na estrutura média, a correlação é de 0,95 a 0,97, contra no máximo 0,30 no resto do clipe e de 0,13 a 0,20 no controle.
  - Na estrutura fina, é de 0,70 a 0,77, contra 0,05 no controle.
  - No olho, a composição, o brilho e as manchas em arco estão nos mesmos lugares, e a ondulação bate crista por crista no recorte
    ampliado.
- **s51 (Envato):** as prévias caíram de 3,3 a 4,5 s depois dos pontos, em 7,5, 18,5 e 27,4 s (27, 66 e 98 %). A correlação é de 0,97
  a 0,98, contra mediana de 0,02 a 0,03 no resto do clipe. No olho, os veleiros, a barcaça, os guindastes e os prédios estão nos
  mesmos lugares.

O `previas_pontos` do Envato diz "1 a 3 s depois do ponto", e o medido foi outro: na s51, de 3,3 a 4,5 s; na s11, fora de ordem. Vale
para o relato da caça e para as próximas caças no Envato.

### O que o arquivo mostrou além das prévias

- **s10:** o clipe inteiro (18,4 s) é o mesmo plano lento. O mar ocupa cerca de metade da altura, o céu ~1/3 e a terra ~1/6, como nas
  prévias que a caça aprovou.
  - Em tamanho real: nenhuma marca d'água (o centro e os cantos) e nenhum letreiro legível. Na água, um ponto de poucos pixels (caiaque
    ou boia).
  - O rótulo "Aguadilla, Puerto Rico" não é mais específico que o título. A fala não diz a direção do mar, e nada se marca sobre ele.
- **s11:** só mar em 13,8 s, sem terra, barco, ave nem gente. O centro da vinheta (x 1316–2556, y 640–1552) fica em água uniforme o
  tempo todo.
  - Em tamanho real: textura de filmagem, sem marca d'água. Os cantos de baixo têm um borrão leve de movimento.
- **s51:** o voo avança sobre a cidade.
  - Até ~8 s, o quarteirão grande das placas solares e um prédio de telhado branco dominam o primeiro plano; depois, a malha densa
    enche o quadro. É nota para quem monta, e não reprova.
  - Em tamanho real (a 2, 14 e 26 s), a gente aparece só em figuras de poucos pixels. Nenhum nome de navio, letreiro ou logotipo é
    legível: os navios brancos de faixa vermelha estão ao fundo, pequenos, e a placa vermelha do canto, ampliada 4×, fica um borrão.
    Nenhuma marca d'água.

### O crédito da s10

Na tela da s10, nenhum: `Wirestock Creators/Shutterstock.com` não vai à tela.
- É a decisão do Lucas para este vídeo, no chat da Sala, em 29/10/2026, às 12:0x. Ele respondeu à pergunta do crédito do artista,
  feita às 11:5x (`marca/midia.md` §3.4: "nos próximos vídeos, pergunta nova, ou o Lucas estende").
- A mensagem, como a Sala a passou, foi "1. Sim e o atlantico-fundo está criado / 2. B". A opção B era "Só a linha do fim".
- Vai a linha `Image(s) and/or video used under license from Shutterstock.com` na faixa de crédito da última cena do vídeo e na
  descrição do YouTube (`midia.md` §3.4; identidade §7).
- Gravado no `credito_na_tela` do veredito. Os dois do Envato: nenhum crédito.

### Para a Sala, pela tabela da skill (§3, passo 5)

- **O que se faz:** o passo 4 bateu nos três (o que a Sala mediu bate com o que medi), e os três têm `aprovado` com
  `mesmo_item: true`. A linha é a do §4: instalar, pelo `_instalar-lote`. O resto daquela linha, o primeiro arquivo de cada banco na
  primeira caça, é da Sala.
- **Para quem instala:**
  - os três estão em 29,97 fps, e o `_instalar-lote` os leva a 30;
  - o da s11 é ProRes 422 HQ de 10 bits, e o quadro dele saiu mais claro e mais ciano que a prévia;
  - o da s51 não marca a cor.

  Conferir a cor depois da conversão.
- **A ISS 1042:** os vereditos dela na s10 e na s51 (lote 7) tinham a condição de a caça não trazer os aéreos. Com estes dois
  instalados, ela não entra em nenhuma das duas cenas. Os vereditos ficam como estão, condicionais.
- **O marcar da s51:** o manifest tem o `marcar` às 15:11:33Z e o arquivo criado às 15:14:28Z. O `marcar` veio uns 3 min antes do
  clique (12:14:23), e não "logo antes" (skill §3, passo 1). Chegou um arquivo só, e ele é o item: nada muda no veredito. Fica o
  registro.

### Para o Lucas pesar

Nada.

### Para reconferir no navegador do app

Nada. O lote 8 não usou a rede.

### Para trocar, e para quem volta

Nada: nenhum arquivo saiu `reprovado` nem `trocar`. O recado da Fase A, sobre a s10-a e a s43-a, continua no
`conferencia-caca.md`.

### Avisos do conjunto da cena

- s10 (4,0 s), s11 (5,0 s) e s51 (3,134 s) têm um beat cada, abaixo de 6 s, e o clipe aprovado cobre a janela inteira de cada uma.
  Nenhuma pede respiro.
- No gancho, o s10 (a costa e o horizonte) e o s11 (o mar de cima) são tomadas diferentes: a troca em 55,4 s fica clara.

### Como foi conferido

- **As entradas,** com o sha256 conferido:
  - a regência, `9d0ab49f…a3d9`;
  - o espelho, `bcfe74f9…f6cb`;
  - o `words.json`, `a86e44af…10af`;
  - o roteiro, `ca4ac18d…d2e3`;
  - o `conferencia-midia.json` de antes, `a9565fb8…8c41`, e o `.md` de antes, `6f5d3102…56dc`, com as cópias em
    `out/atlantico-fundo/_tmp/conferencia/lote8/`;
  - os `manifest.jsonl` e os `_PROCEDENCIA.json` das três pastas, que têm o banco, a URL, o ID, a conta e a data;
  - os PDFs de licença, só o sha256: `648499b7…ea34a` e `a17361bd…35f0`, os mesmos que a Sala deu.
- **A frase:** as três âncoras batem com o espelho atual, o `words.json` e o roteiro (l. 14 e 54), nos mesmos tempos da Fase A.
- **As imagens abertas:** 42, todas em `out/atlantico-fundo/_tmp/conferencia/`, nas pastas `s10-a-2/`, `s11-a/` e `s51-a/`:
  - os 9 quadros e as 9 prévias;
  - 6 pares lado a lado e 2 ampliações dos pares;
  - 3 folhas de um quadro por segundo;
  - 13 recortes em tamanho real.
- **A rede:** nenhum pedido.
- **`_media/`:** 230 arquivos antes (12:17) e depois (12:36), a mesma lista, com o sha256 `91ad8b07…0cd6`. Nada mudou.
- **O JSON** (522 KB) se emendou por um script Python em arquivo, com a cópia de antes e o sha256 conferido, como o contrato §5 prevê
  acima de ~100 KB. O pedido dizia "regrava inteiro pelo Write", o que, nesse tamanho, arriscaria sair cortado. A emenda conferiu que
  os 53 vereditos de antes, os `substituidos` e os 7 lotes ficaram iguais à cópia.
- **Este `.md`** se regravou pelo `Write`, curto (contrato §2.2): o lote 8, a tabela dos 56 e o que o lote 7 deixou em aberto. O texto
  inteiro dos lotes 1 a 7 está mais abaixo, em "Lotes 1 a 7".
- **Fora da lista do contrato §5,** só de leitura:
  - `git log` e `git status`;
  - `cat`, `grep`, `head`, `tail`, `wc`, `sed -n` e `od`;
  - um `bash` que só chamava o `ffmpeg`.

  Os scripts de leitura, de comparação e de emenda ficaram no scratchpad da sessão, fora do projeto.

### Divergências entre a marca e este ofício

Nenhuma nova. A diferença entre o pedido ("o JSON se regrava inteiro pelo Write") e o contrato §5 (a emenda pelo Python acima de
~100 KB) está acima, em "Como foi conferido".

## Do lote 7, ainda em aberto (copiado como estava)

Os usos sem `aprovado`, e o fallback que passa a valer:

- **s54, a alternativa** (o Limiting Factor depois do mergulho): `trocar`. Fica o retrato do Vescovo, aprovado neste lote. A regência
  não escreveu fallback para a alternativa: o fallback é o próprio retrato.
- **s70 › beat 1, a reserva**: `trocar`. A partitura fica como está, com o mapa voltando ao anel.
- **s29, a permanência no beat 1**: falha. A regência não escreveu fallback. Passa se a foto sai quando a ficha pousa, ou se fica com o
  lugar de origem escrito nela.
- **s51**: o veredito vale só se a s10 não usar a 1042. Se a s10 a usar, vale o fallback (2) da regência: o mapa da ilha sobre o
  satélite da MapTiler.

Para a Sala (alinhamentos):

1. **s58, a fonte do gráfico.** A linha da regência diz "Source: Stewart & Jamieson, Earth-Science Reviews, 2019, Table 1". Os números
   do sonar não estão na Tabela 1: vêm da §3.2 do artigo, e a `pauta-dados`, na s58, dá a fonte como "Table 1 and section 3.2". Isso é
   do redator e do verificador de fatos. A página por baixo prova só o lado publicado, e isso basta ao veredito.
2. **s58, o rótulo do conceito.** O conceito ainda chama o inset de "DECISÃO DO LUCAS PENDENTE". A Sala o decidiu (direcao-2, decisão
   5), e a regência o declara. Se a Sala entender que a decisão era do Lucas, o meu `aprovado` não substitui a palavra dele.
3. **s29.** A permanência pede um ajuste na regência ou no conceito: a foto sai quando a ficha pousa, ou leva o lugar de origem.
4. **s63, o rótulo.** Vai só o que a origem dá: "Cumberland East Bay, South Georgia" ou "South Georgia". Nunca "South Sandwich", e nunca
   "Southern Ocean": a origem diz "Southern Ocean, near South Georgia", mas o vídeo põe o Oceano Austral a partir de 60°S (s68), e a
   Geórgia do Sul fica ao norte da linha.
5. **s54 e s52, a data no card.** A legenda "Dec. 19, 2018" é a data da fala, não a da foto (24/10/2018). Nada diga que o retrato é
   daquele dia.
6. **s72, o enquadramento.** O peixe de frente (28,9–30,7 s, a cabeça rosa) fica mais perto do pepino-do-mar na cor e na forma do que
   de lado (31,6–33,4 s). A alça amarela do ROV está no canto de baixo à esquerda até ~30,7 s, nos dois trechos do clipe.
7. **A cena s10.** A regência previa uma pergunta ao Lucas sobre o gancho se a caça falhasse e a 1042 fosse negada. A 1042 saiu
   aprovada para a s10: a pergunta só volta se a Sala não quiser usá-la.

Com o lote 8, o item da s51 e o 7 deixam de pesar: a caça trouxe os dois aéreos, e a 1042 não entra na s10 nem na s51.

## Os vereditos de agora (os 56 de `candidatos`, depois do lote 8)

Na ordem de `candidatos`, com o lote em que cada um foi julgado; a janela definitiva do lote 7 está no `frase_coberta` de cada um.

| # | Arquivo | Cena | Fonte | Veredito | Lote | Motivo |
|---|---|---|---|---|---|---|
| 1 | `willard-h-brownson-harris-ewing-1907-nh57975-commons.jpg` | s14 | commons | aprovado | 1–6 | Willard H. Brownson em retrato de 1900–1909 (Harris & Ewing, NHHC NH 57975; domínio público nos EUA), com o aviso do ano: o NHHC não tem retrato de 1881–1884, e o dos anos 1890 (NH 64332) só chega pequeno ao canal |
| 2 | `george-nares-lock-whitfield-rijksmuseum-commons.jpg` | s17 | commons | aprovado | 1–6 | George Nares em retrato de ca. 1873–1878 (Rijksmuseum, domínio público), rosto inteiro no card a 0,72×; vai com o aviso do ano da década, sem o ano do fato |
| 3 | `alan-j-jamieson-gnangcomapp-2022-commons.jpg` | s56 | commons | aprovado | 1–6 | Alan Jamieson em foto de 2022 (Commons, CC BY-SA 4.0), com o aviso do ano: a busca pela de 2018–2019 (Caladan, Newcastle, UWA) não achou nenhuma que sirva |
| 4 | `stewart-jamieson-2019-p4.jpg` | s08 | nora | aprovado | 1–6 | a Tabela 1 de 2019 (CC BY 4.0) com a linha 'Milwaukee Deep … 8740 … GEBCO Gazetteer'; sem 'Brownson' na página |
| 5 | `stewart-jamieson-2019-p4.jpg` | s56 | nora | aprovado | 1–6 | a mesma Tabela 1 cobre a lista, o nome e os 8.740 m de s56 (plano 2), como volta declarada de s08 |
| 6 | `stewart-jamieson-2019-p6-gazetteer.jpg` | s56 | nora | aprovado | 1–6 | a frase da p. 6 ('8740 m as published in the IHO-IOC GEBCO Gazetteer…') cobre s56 (plano 2) palavra por palavra; alternativa à Tabela 1 |
| 7 | `stewart-jamieson-2019-p6-gazetteer.jpg` | s08 | nora | aprovado | 1–6 | a frase da p. 6 também cobre s08 ('the official list of undersea features'); alternativa à Tabela 1 |
| 8 | `stewart-jamieson-2019-p1-resumo.jpg` | s59 | nora | aprovado | 1–6 | o resumo de 2019 (CC BY 4.0) com 'propagated uncorrected through online sources and the scientific literature', a frase que s59 atribui aos autores |
| 9 | `stewart-jamieson-2019-p1-titulo.jpg` | s56 | nora | aprovado | 1–6 | o título e os autores do artigo de 2019, ao lado dos cards de s56 (plano 1), com as instituições de 2019 |
| 10 | `uscgs-1883-p8.jpg` | s16 | noaa | aprovado | 1–6 | a p. 8 do relatório de 1883 tem as duas frases de s16 seguidas ('brown ooze' e 'No record is known…'); obra federal; até 1,4× |
| 11 | `uscgs-1883-p46.jpg` | s16 | noaa | aprovado | 1–6 | a p. 46 cobre s16 com 'brown ooze' e a frase irmã 'This is believed to be the greatest depth…'; alternativa à p. 8; vale só para s16 |
| 12 | `s01-iss071-e-1036-puerto-rico-nasa.jpg` | s01 | commons | aprovado | 1–6 | Porto Rico inteiro visto da ISS em 06/04/2024 (NASA, domínio público), 6902 px: cobre 'off Puerto Rico, a U.S. island'; a foto mostra a ilha, e não San Juan, como o espelho supunha |
| 13 | `s01-iss071-e-1042-san-juan-nasa-reserva.jpg` | s01 | commons | trocar | 1–6 | San Juan de perto (NASA, domínio público): não mostra a ilha da fala; a 1036, aprovada, mostra. Serviria à ancoragem em San Juan de s02, com conferência nova |
| 14 | `s12-blake-steamer-plate1-sigsbee-1880-rijksmuseum.jpg` | s12 | commons | aprovado | 1–6 | o vapor Blake na prancha 1 do livro do Survey de 1880 (Rijksmuseum, CC0), com o aviso do ano: a busca na NOAA Photo Library parou na verificação humana, e a cópia dela não tem foto de 1881–1885 |
| 15 | `s12-sigsbee-sounding-machine-on-blake-plate-sigsbee-1880-rijksmuseum.jpg` | s12 | commons | aprovado | 1–6 | a máquina de sondagem do Survey a bordo do Blake (prancha 13, 1880; Rijksmuseum, CC0), com o aviso do ano: cobre o plano 2; a mesma busca da prancha 1 |
| 16 | `s17-hms-challenger-iln-1872-engraving.jpg` | s17 | commons | aprovado | 1–6 | o HMS Challenger em gravura do Illustrated London News de 14/12/1872 (domínio público), impressa sobre a mesa com 'Engraving, 1872' na tela: a gravura entra pela palavra do Lucas (17:5x) |
| 17 | `s17-hms-challenger-w-f-mitchell-print-pre1881.jpg` | s17 | commons | trocar | 1–6 | o HMS Challenger pintado entre icebergs: o gelo desmente a fala sobre a fossa do Atlântico tropical; e é pintura |
| 18 | `s19-uss-milwaukee-cl5-new-york-1942-01-07-nara-19-n-27088.jpg` | s19 | commons | aprovado | 1–6 | o USS Milwaukee em 07/01/1942 (Marinha, NARA 19-N-27088, domínio público), com o aviso do ano: a busca no NHHC não achou foto grande e livre mais perto de 1939, e a de 1938 é pequena |
| 19 | `s24-bathyscaphe-archimede-launch-1962-houot.jpg` | s24 | commons | reprovado | 1–6 | o Archimède em 1962 serve à fala, mas a licença é só a declaração de quem subiu ('Private collection', PD-self), sem prova de autoria; vale a de 2021, aprovada |
| 20 | `s24-bathyscaphe-archimede-cite-de-la-mer-2021-spekking.jpg` | s24 | commons | aprovado | 1–6 | o próprio Archimède, inteiro, no museu de Cherbourg em 2021 (CC BY-SA 4.0, com crédito): peça de acervo, sem aviso do ano |
| 21 | `s27-snailfish-seascape-alaska5-ex2306-dive08-1365m-2023-noaa-hd.mp4` | s27 | noaa-oer | aprovado | 1–6 | um peixe-caracol vivo filmado pela NOAA em Denson Seamount, Alasca, a 1.365 m (31/08/2023), em HD, aceito pelo Lucas com o lugar real na tela; 15 s limpos na 3ª tomada; sem o aviso do ano, que é de foto e de retrato |
| 22 | `s29-abyssobrotula-galatheae-cas-36574-specimen.jpg` | s29 | commons | trocar | 1–6 | exemplar conservado da mesma espécie, mas de outro peixe (Equador, 1968): na fala de 'this one' e 'the same catch', a tela diria que é o peixe de 1970; a enguia-cusk viva, aprovada, cobre o tipo |
| 23 | `s29-cusk-eel-ophidiid-salmon-bank-2015-noaa.jpg` | s29 | commons | aprovado | 1–6 | uma enguia-cusk viva no fundo (NOAA, domínio público, 1920 px), como o tipo de peixe, com o contorno e a cota do exemplar de 1970 ao lado |
| 24 | `s32-noaa-ship-ronald-h-brown-gulf-of-mexico-2003-noaa.jpg` | s32 | commons | aprovado | 1–6 | o Ron Brown (R 104) no mar em 27/09/2003, no período dos cruzeiros (NOAA Photo Library, CC BY 2.0, com crédito); sem aviso do ano |
| 25 | `s32-noaa-ship-ronald-h-brown-san-francisco-2014.jpg` | s32 | commons | trocar | 1–6 | o Ron Brown em 2014, 11 anos depois dos cruzeiros; há a foto de 2003, aprovada |
| 26 | `s41-mayaguez-correo-y-casino-1918-earthquake-el-mundo.jpg` | s41 | commons | aprovado | 1–6 | o Correio e o Casino de Mayagüez destruídos pelo terremoto de 1918, sóbria, sem corpo; foto de jornal (El Mundo) com a licença só pelo PD-1923 do Commons e o risco pesado pelo Lucas: entra com 'El Mundo / Universidad de Puerto Rico' na tela; cobre o plano 2, o dos mortos, nunca a cota do tsunami |
| 27 | `s41-point-borinquen-album-mayaguez-tower-tidal-wave-1918-nara-26-lg-41-42.jpg` | s41 | nara | trocar | 1–6 | a torre de Mayagüez de pé ('the tower is not damaged') e o farol de Point Borinquen rachado pelo tremor: nenhuma das quatro fotos mostra o dano do tsunami que a cota UP TO 20 FT diria |
| 28 | `s43-anegada-flying-past-aerial-2011-12-27-david-broad.jpg` | s43 | commons | aprovado | 1–6 | Anegada inteira, baixa e cercada de recife, vista do avião em 27/12/2011 (CC BY 3.0, com crédito): reserva do aéreo de banco, a mais aberta das duas |
| 29 | `s43-anegada-island-aerial-2012-david-broad.jpg` | s43 | commons | aprovado | 1–6 | a metade oeste de Anegada de perto, baixa e plana, com o recife, as lagoas de sal e a pista (CC BY 3.0, com crédito): reserva do aéreo de banco |
| 30 | `s44-anegada-brain-coral-boulder-750ft-inland-atwater-usgs.jpg` | s44 | usgs | aprovado | 1–6 | um bloco de coral-cérebro de 8 pés a 750 pés da praia em Anegada (USGS, domínio público), com um pesquisador dando a escala: é um dos 'hundreds of coral boulders' |
| 31 | `s47-okeanos-explorer-deploys-deep-discoverer-2015-04-10-noaa.png` | s47 | commons | aprovado | 1–6 | o Deep Discoverer baixado ao mar pelo Okeanos Explorer em 10/04/2015, na mesma viagem (NOAA, domínio público), impressa sobre a mesa até 1,4×: a foto que o Lucas escolheu para o plano 3 |
| 32 | `s48-dssv-pressure-drop-leith-2019-geograph.jpg` | s48 | commons | trocar | 1–6 | o Pressure Drop atracado em Leith em 06/09/2019; há a foto do ano, a do navio no mar em 17/12/2018 (Caladan Oceanic), aprovada |
| 33 | `s48-pressure-drop-limiting-factor-pre-dive-2018-12-17-caladan.jpg` | s48 | commons | aprovado | 1–6 | o Pressure Drop no mar em 17/12/2018, a semana do mergulho, com o nome na popa (Caladan Oceanic, CC BY-SA 4.0 com VRT, com crédito), impressa sobre a mesa até 1,4× |
| 34 | `s53-limiting-factor-aft-on-deck-2019-yeti-hunter.jpg` | s53 | commons | trocar | 1–6 | o Limiting Factor no convés em 10/09/2019 serviria com o aviso do ano, mas o item 11, de 2018, mais perto do fato, cobre o plano 2 |
| 35 | `s53-limiting-factor-after-puerto-rico-trench-dive-2018-12-19-caladan.jpg` | s53 | commons | trocar | 1–6 | o Limiting Factor na superfície da Fossa de Porto Rico em 19/12/2018, depois do mergulho, mas pequeno, uma luz no mar ao entardecer: não domina o plano 'in his own sub' |
| 36 | `s53-limiting-factor-cumberland-east-bay-2019-01-31-caladan.jpg` | s53 | commons | trocar | 1–6 | o Limiting Factor sendo baixado numa baía com neve da Geórgia do Sul em 31/01/2019: o gelo desmente a descida na Fossa de Porto Rico e mistura a fossa do sul |
| 37 | `s66-mount-michael-landsat8-oli-2026-08-24-nasa-eo.jpg` | s66 | nasa | aprovado | 1–6 | a imagem do Landsat 8 de 24/08/2026 da ilha Saunders com o Mount Michael (NASA EO, domínio público), em tela cheia a 1,28×: cobre o plano 1; o plano 2, o calor na cratera, não sai deste arquivo (o ponto quente tem 4 px) |
| 38 | `s72-swimming-sea-cucumber-ex1502-st-croix-2400m-2015-04-28-noaa-hd.mp4` | s72 | noaa-oer | trocar | 1–6 | o pepino-do-mar de St. Croix é transparente, com o miolo amarelo; ao lado do peixe-caracol rosa e opaco da s27, os dois não se parecem, e a frase diz que se parecem na cor, na textura e na forma |
| 39 | `s72-swimming-sea-cucumber-ex2606-dive03-american-samoa-2026-noaa-hd.mp4` | s72 | noaa-oer | aprovado | 1–6 | um pepino-do-mar nadador opaco, rosa-arroxeado (NOAA, Samoa Americana, 2.300 m, 2026), que se parece com o peixe-caracol da s27; HD aceito pelo Lucas (29/10, 00:1x) só na última tomada: serve de 68,44 a 78,2 s |
| 40 | `victor-vescovo-varcoe-2018-commons.jpg` | s52 | commons | aprovado | 1–6 | Victor Vescovo a bordo em 24/10/2018 (Caladan Oceanic, CC BY-SA 4.0 com VRT, liberada pelo Lucas às 15:0x): enche o card a 0,81×, sem aviso do ano, com crédito |
| 41 | `s19-uss-milwaukee-cl5-1938-sam-hood-slnsw-8366.jpg` | s19 | commons | trocar | 1–6 | o Milwaukee em 1938, um ano antes do fato, mas pequeno (1400×960) e com cabo desfocado na frente; a foto grande de 1942 serve, e pela ordem da identidade §6 a grande de outro ano vem antes da pequena |
| 42 | `s53-limiting-factor-underwater-test-phase-2018-caladan.jpg` | s53 | commons | aprovado | 1–6 | o Limiting Factor inteiro sob a água, na fase de testes de 2018 (Caladan Oceanic, CC BY-SA 4.0 com VRT), impresso sobre a mesa: cobre "his own sub"; nunca dito como o mergulho na fossa |
| 43 | `s41-mayaguez-house-washed-away-by-waves-shore-1918-ncei-273-033.jpg` | s41 | noaa-ncei | reprovado | 1–6 | a casa arrastada pelas ondas na praia de Mayagüez, 1918, mostra o tsunami, mas o NCEI não dá licença ('courtesy' da UPR, 'otherRestrictions') e declara que recriou pixels para subir a resolução |
| 44 | `s41-mayaguez-house-washed-away-by-waves-adrift-1918-ncei-273-034.jpg` | s41 | noaa-ncei | reprovado | 1–6 | a casa à deriva no mar de Mayagüez, 1918, mostra o tsunami, mas o NCEI não dá licença ('courtesy' da UPR, 'otherRestrictions') e declara que recriou pixels para subir a resolução |
| 45 | `s01-iss071-e-1036-puerto-rico-nasa.jpg` | s02 | commons | aprovado | 7 | a foto da s01 (Porto Rico inteiro, NASA) encolhendo para a ilha no 1º beat da s02: reuso declarado e contínuo; o ponto mais fundo vai no mapa, não na foto |
| 46 | `victor-vescovo-varcoe-2018-commons.jpg` | s54 | commons | aprovado | 7 | o retrato do Vescovo da s52 no card da fala citada dele ('One down!'): reuso declarado, o mesmo recorte a 0,81×, com crédito |
| 47 | `stewart-jamieson-2019-p4.jpg` | s58 | nora | aprovado | 7 | a Tabela 1 de 2019 (CC BY 4.0) pequena por baixo do gráfico da s58, como prova das profundidades publicadas de Porto Rico: reuso declarado pelo diretor e decidido pela Sala |
| 48 | `s27-snailfish-seascape-alaska5-ex2306-dive08-1365m-2023-noaa-hd.mp4` | s72 | noaa-oer | aprovado | 7 | o peixe-caracol da s27 noutro trecho (28,9–33,4 s), grande e perto, ao lado do pepino-do-mar da Samoa: reuso declarado, HD pela exceção do Lucas, sem legenda nem cartão na janela |
| 49 | `s53-limiting-factor-cumberland-east-bay-2019-01-31-caladan.jpg` | s63 | commons | aprovado | 7 | o Limiting Factor inteiro na Geórgia do Sul em 31/01/2019 (Caladan, CC BY-SA 4.0): o submersível da expedição no extremo sul do Atlântico, que a frase da s63 diz; o gelo que desmentia Porto Rico na s53 aqui é o lugar certo |
| 50 | `s01-iss071-e-1042-san-juan-nasa-reserva.jpg` | s10 | commons | aprovado | 7 | a costa norte de Porto Rico em San Juan e o mar aberto ao norte (NASA, 06/04/2024, domínio público), recortada com o mar em cima: serve à pergunta do gancho, com o rótulo San Juan, se a caça não trouxer o aéreo de Aguadilla |
| 51 | `s01-iss071-e-1042-san-juan-nasa-reserva.jpg` | s51 | commons | aprovado | 7 | San Juan de cima, a cidade densa (NASA, 2024), recortada na cidade: mostra a ilha habitada; só se a caça não trouxer o aéreo e a s10 não usar esta foto |
| 52 | `s53-limiting-factor-after-puerto-rico-trench-dive-2018-12-19-caladan.jpg` | s54 | commons | trocar | 7 | o Limiting Factor boiando na fossa depois do mergulho (19/12/2018), mas pequeno e com uma pessoa em pé sobre ele que a origem não identifica: em 'When he climbed out' a tela a faria passar por Vescovo saindo no mar |
| 53 | `s01-iss071-e-1036-puerto-rico-nasa.jpg` | s70 | commons | trocar | 7 | RESERVA: a foto de abertura (Porto Rico inteiro, NASA) serviria a 'Off Puerto Rico' como respiro, mas voltaria 626 s depois sem a volta declarada no espelho ou no conceito |
| 54 | `shutterstock_3607760923.mp4` | s10 | shutterstock | aprovado | 8 | o mar aberto azul-escuro domina o quadro, com a costa de Aguadilla (nomeada no título) atrás e céu calmo para a pergunta; é o item da prévia nos três pontos; 4K, 18,4 s; sem o artista na tela, pela decisão do Lucas (só a linha do fim) |
| 55 | `birds-eye-view-of-deep-blue-ocean-water-2026-10-02-17-07-31-utc.mov` | s11 | envato | aprovado | 8 | mar aberto azul-marinho de cima, sem terra, barco nem gente no clipe inteiro, com o centro livre para a vinheta; é o item da prévia (as três prévias casam com 6,6, 3,7 e 2,5 s do arquivo); 4K ProRes, 13,8 s |
| 56 | `bustling-cityscape-of-old-san-juan-from-above-2026-10-03-00-19-31-utc.mp4` | s51 | envato | aprovado | 8 | Old San Juan do ar (nomeada no título), a cidade densa sobre a baía: a ilha habitada da frase; é o item da prévia (as três prévias casam com 7,5, 18,5 e 27,4 s do arquivo); 4K, 28 s, sem letreiro legível nem gente em primeiro plano |

---

## Lotes 1 a 7

O texto deles, como estava depois do lote 7, não foi recopiado aqui: o arquivo tinha 115 KB, e regravá-lo inteiro pelo `Write`
arriscaria sair cortado. Ele está byte a byte em dois lugares:
- na cópia `out/atlantico-fundo/_tmp/conferencia/lote8/conferencia-midia.antes-lote8.md` (sha256 `6f5d3102…56dc`), fora do git;
- no git, no commit `c8ec95a` (o lote 7).

Os vereditos e as notas de cada lote continuam todos no `conferencia-midia.json` (`candidatos`, `substituidos` e `lotes[]`). Se a Sala
quiser o texto dos lotes 1 a 7 de volta neste arquivo, é a cópia acima.
