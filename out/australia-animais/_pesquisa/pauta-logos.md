# Pauta de logos: australia-animais (vídeo 8)

Passo `research`, 19/11/2026, despacho da Sala. O JSON é `out/australia-animais/_pesquisa/pauta-logos.json` e passa no contrato
`pauta-pesquisa` (saída 0, com `REGIE_MOTOR`). O espelho lido foi a r2 (sha256 `833aaa75…993aa4`), com 75 cenas e 201 planos.

## Resumo

**Pedidos de logo: 0. Entregues: 0.** Nenhuma cena pede logo, selo, brasão, emblema, insígnia nem bandeira:

- nenhum segmento tem `needs.logos` (só `geo`, 35, e `dados`, 73);
- **a única "logo" do espelho é a proibição de s19**, como a Sala leu: "Nenhuma logo da Swansea University (midia §7.6)";
- a única PRANCHA (s49 P1–P2) é um cartão de texto com as duas cautelas dos médicos, sem ator, e por isso sem círculo com bandeira;
- os países (Australia, India, Sri Lanka) e os estados vão só com o nome escrito: cada `needs.geo` de país diz "SEM bandeira";
- o Taronga e a CSL não vão à tela; as outras instituições do pedido vão como nome escrito ou crédito em texto.

A regra do canal para elas é o nome escrito (`marca/midia.md` §7.6; roupa §4). **Nada foi buscado nem gravado em
`out/australia-animais/_media/logo/`**, e a pasta não foi criada. Nenhum pedido foi à rede: os nomes oficiais saíram das cópias locais
(`midia/australia-animais/fontes/`) e das leituras da Sala.

## As nove do pedido, e as outras que a tela nomeia

Todas vão em Inter 700 na pílula `--rotulo` ou no crédito, sem logo nem selo. As URLs e os sha256 das cópias estão no JSON.

| Entidade | No pedido | Nome oficial (de onde saiu) | Cenas na tela | Cenas na voz |
|---|---|---|---|---|
| Australian Bureau of Statistics (ABS) | sim | Australian Bureau of Statistics (ABS) (og:site_name e título das páginas do abs.gov.au; 'The Commonwealth owns the copyright in all material produced by the Australian Bureau of Statistics (ABS)') | s06, s07, s09, s13, s14, s15, s16, s17, s30, s39, s43, s45, s60, s61, s63, s64, s66 | s06, s13 |
| National Coronial Information System (NCIS) | sim | National Coronial Information System (NCIS) ('Attribution must be provided to the National Coronial Information System (NCIS)', a licença da página 'Fact sheets', lida pela Sala no navegador do app, 18/11/2026, ~16:1x) | s63 | s63 |
| Swansea University | sim | Swansea University (Live Science: 'Arbuckle, an associate professor of evolutionary bioscience at Swansea University in the U[K]') | s19, s67 | s19 |
| Live Science | sim | Live Science (og:site_name; 'Live Science is part of Future US Inc, an international media group and leading digital publisher') | s19, s20, s25, s53, s67 | — |
| Australian Reptile Park | sim | Australian Reptile Park (og:site_name e o rodapé do site: 'Australian Reptile Park, Pacific Highway, Somersby, NSW, 2250') | s69, s70, s71, s72 | s69, s70, s71, s72, s73 |
| Taronga Conservation Society Australia | sim | Taronga Conservation Society Australia (o Australian Shark Incident Database é 'Taronga Conservation Society Australia, along with Flinders University, and the New South Wales Department o[f Primary Industries]') | — | — |
| CSL (Commonwealth Serum Laboratories; hoje CSL/Seqirus) | sim | Commonwealth Serum Laboratories, como o espelho a escreve (s47 › motivo); 'CSL' é a marca no nome do soro ('Polyvalent Snake Antivenom (Australia and Papua New Guinea) (CSL)™', healthdirect) | — | — |
| World Health Organization (WHO) | sim | World Health Organization (WHO), por inteiro na voz de s45 ('the World Health Organization cites an estimate') | s15, s45 | s45 |
| Government of South Australia (SA Arid Lands NRM Board) | sim | Government of South Australia e South Australian Arid Lands Natural Resources Management Board, como o cabeçalho e o 'CONTACT US' da ficha os escrevem (a cópia local, p. 1 e p. 2); o PDF foi criado em 23/12/2009 (metadados) | s02, s33, s34, s37 | s37 |
| Australian and New Zealand Committee on Resuscitation (ANZCOR) | não | Australian and New Zealand Committee on Resuscitation (ANZCOR) ('This webpage is maintained by the Australian and New Zealand Committee on Resuscitation (ANZCOR)') | s48, s49, s61 | s48 |
| Healthdirect Australia | não | Healthdirect Australia Ltd; a marca do serviço se escreve 'healthdirect', em minúscula (os termos de uso e o cabeçalho do site) | s47, s48 | s47 |
| Queensland Museum | não | Queensland Museum (o cabeçalho do site, na cópia local da Memoir) | s42 | s42 |
| Geoscience Australia | não | Geoscience Australia (o cabeçalho do site) | s23, s54 | — |
| Bee Aware (Plant Health Australia) | não | Bee Aware, de Plant Health Australia ('Plant Health Australia, governments and R&D agencies', na cópia da página inicial) | s62 | — |
| University of Melbourne | não | University of Melbourne ('Pursuit by the University of Melbourne', título da página) | s16 | — |
| DCCEEW (IBRA 7.1) | não | Australian Government Department of Climate Change, Energy, the Environment and Water ('Users must attribute the Australian Government Department of Climate Change, Energy, the Environment and Water as the data provider', a licença do IBRA lida no roteiro; roteiro-editor.md, 'Os créditos da tela') | s02, s33, s39, s43 | — |

Notas de cada uma:

- **Australian Bureau of Statistics (ABS).** A voz diz 'Australia's statistics bureau' (s13) e 'the official death records' (s06). A licença do ABS é CC BY 4.0 'with the exception of: the Commonwealth Coat of Arms, the ABS logo, material protected by a trade mark…' (abs-copyright.html): a logo e o brasão ficam fora da licença, além de fora da regra do canal. O cabeçalho de cada folha do data cube traz a logo do ABS com o brasão da Commonwealth (a imagem xl/media/image1.png de abs-2025_01.xlsx, olhada nesta peça; ver notas_para_outros_passos).
- **National Coronial Information System (NCIS).** A voz diz 'Australia's national database of coroners' cases' (s63): já explica o que é. O ncis.org.au, o www.ncis.org.au e o files.ncis.org.au recusam leitura automática (403): esta peça não os tentou. A tela leva o nome e a frase literal, na tipografia do canal.
- **Swansea University.** O único 'logo' do espelho inteiro é este, e ele diz o contrário de um pedido: s19 › midia_necessidade, 'Nenhuma logo da Swansea University (midia §7.6)'. A voz diz 'an evolutionary biologist at Swansea University' (s19). O site da universidade não foi consultado: o nome sai da matéria que a tela cita.
- **Live Science.** Veículo de imprensa (midia §7.6: 'logo de jornal ou veículo de imprensa'): nem a logo 'Ls' nem o cabeçalho da matéria vão à tela. A voz não diz 'Live Science'; o crédito em texto diz. A citação vai em folha recriada, curta e literal (s19 › motivo).
- **Australian Reptile Park.** A voz o nomeia por inteiro em s69 e diz 'the park' em s70–s73. O site diz '© Copyright 2010 - 2026 All Rights Reserved'. O parque é parte interessada (s71 › motivo): o pino leva o nome escrito, nunca a logo dele, e nada na composição sugere parceria ou endosso. As fotos do parque são DECISÃO DO LUCAS PENDENTE (_decisoes_pendentes[3]) e não são desta peça.
- **Taronga Conservation Society Australia.** Não vai à tela nem à voz: sem a permissão para uso comercial ('cannot be used for commercial purposes without express permission from Taronga', pautas/australia-animais/_trabalho/fatos-b.md, l. 61), nenhum número do Taronga (_decisoes_pendentes[4]). Nem nome, nem logo.
- **CSL (Commonwealth Serum Laboratories; hoje CSL/Seqirus).** A voz não nomeia a CSL ('Australia has made antivenom since 1930', s47). A CSL/Seqirus não é fonte de imagem aprovada (_decisoes_pendentes[7]; midia §7.3). O nome 'CSL' com '™' no rótulo do frasco é marca: ver notas_para_outros_passos (s46, s47, s68).
- **World Health Organization (WHO).** Só o nome e o rótulo do código (o texto da página da CID não vai à tela: a licença dela não foi lida; s15 › motivo). Nenhum emblema da OMS.
- **Government of South Australia (SA Arid Lands NRM Board).** A voz diz 'a South Australian government fact sheet' (s37). A ficha não traz texto de licença (nem na cópia em texto nem nas duas páginas, olhadas nesta peça): a folha de s37 P4 é recriada (s37 › motivo), e o 'SA Arid Lands NRM Board' do crédito é a abreviação do nome que a ficha escreve por inteiro; a forma final é do redator-de-tela.
- **Australian and New Zealand Committee on Resuscitation (ANZCOR).** A voz diz 'Australia's official first-aid advice' (s48). A página de copyright diz: 'The logos or logos associated with any products, courses or services provided by us may not be used without our express written permission.' Só o nome no crédito.
- **Healthdirect Australia.** A voz diz 'the government's health service' (s47). Os termos: 'You may not display or use in any manner any trade marks featured on the Online Services or in any Information without the prior written permission of the trade mark owner.' Só o nome no crédito. A grafia: a empresa se escreve 'Healthdirect Australia' (os termos) e o serviço, 'healthdirect' (o cabeçalho do site); o crédito do espelho, 'healthdirect Australia', junta os dois. A forma final é do redator-de-tela, e o verificador-de-fatos a confere.
- **Queensland Museum.** A voz o diz por inteiro ('According to the Queensland Museum', s42). Museu estadual australiano: não é fonte de imagem aprovada (_decisoes_pendentes[7]); aqui é só crédito de texto.
- **Geoscience Australia.** Só dono de número no crédito; a voz não o nomeia.
- **Bee Aware (Plant Health Australia).** Só o fato, sem o texto da página (o Bee Aware não traz licença; s62 › motivo). Nenhuma logo.
- **University of Melbourne.** Só no crédito ('via'). Nenhuma logo.
- **DCCEEW (IBRA 7.1).** Crédito de dado, do pesquisa-geo e do mapista. Nem a logo do departamento, nem o brasão da Commonwealth.

## As linhas que explicam a entidade (roupa §5)

O ABS ('Australia's statistics bureau', s13), o NCIS ('Australia's national database of coroners' cases', s63), a ficha da Austrália do Sul ('a South Australian government fact sheet', s37), o healthdirect ('the government's health service', s47), a ANZCOR ('Australia's official first-aid advice', s48), a OMS e o Queensland Museum (por inteiro, s45 e s42), Arbuckle e a Swansea University ('an evolutionary biologist at Swansea University', s19) e o Australian Reptile Park (por inteiro e pelo que faz, s69). A Live Science, a Geoscience Australia, o Bee Aware, a University of Melbourne e o DCCEEW só aparecem como dono de número ou crédito: não pedem linha. Nenhuma linha nova se sugere ao redator-de-tela (roupa §5).

## Países, estados e bandeiras

Nenhuma bandeira foi entregue. AUSTRALIA (19 cenas), INDIA (s45) e SRI LANKA (s65), e Queensland, New South Wales, Victoria e o Northern
Territory vão só com o nome escrito (identidade §6, "País no mapa"). O `_exige` de s65 não repete "SEM bandeira", mas a regra vale para todo mapa.

## Selos e insígnias

Nenhum buscado nem entregue: a logo do ABS e o brasão da Commonwealth (o cabeçalho do data cube), a logo do NCIS, a da Swansea University, a 'Ls' e o cabeçalho da Live Science, a logo do Australian Reptile Park, a do Taronga, a da CSL/Seqirus (e a marca 'CSL' no rótulo do soro), o emblema da OMS, o selo do Government of South Australia e as árvores do SA Arid Lands NRM Board, as logos da ANZCOR, do healthdirect, do Queensland Museum, da Geoscience Australia, do Bee Aware/Plant Health Australia, da University of Melbourne e do DCCEEW, e os cabeçalhos dos periódicos (MJA, PNAS, Toxicon, PLOS NTD, eLife e os outros dos créditos). Só o nome escrito (midia.md §7.6; roupa §4).

## Fora desta pauta

- Os periódicos e os artigos dos créditos (Johnston et al., MJA 2017; Broad, Sutherland & Coulter, Toxicon 1979; Herzig et al., PNAS 2020 e os outros): documentos e créditos de fonte, do pesquisa-documentos e do redator-de-tela.
- Channel Country, Diamantina, Cooper Creek, Somersby, Central Coast, Sydney, Newcastle, Gondwana, Antarctica: lugares, rótulos de mapa (pesquisa-geo e mapista).
- s11, a vinheta do canal: peça do próprio canal (identidade §8), posta pela Sala no XML. Nenhuma logo de terceiro cai no canto de 400 × 400 px (roupa §6).
- MapTiler e OpenStreetMap: crédito em texto, '© MapTiler © OpenStreetMap contributors' (identidade §6); do mapista.
- IBRA 7.1 e ASGS 2021: créditos de dado e de base, do pesquisa-geo.
- 'Alpha Point calculation' e 'Alpha Point count: The Reptile Database': a conta do próprio canal, em texto.

## Para outros passos

- **s06 P1, s13 P1, s16 P1 (a folha do ABS) e s07 P2, se a outra vista for a folha** (`pesquisa-documentos, editor-de-arte, conferente-de-midia, qc-visual`). A 'página real' da tabela do ABS pode entrar (CC BY 4.0), mas o cabeçalho de cada folha do data cube traz a logo do ABS com o brasão da Commonwealth (olhado nesta peça: a imagem embutida xl/media/image1.png de midia/australia-animais/fontes/b/abs-2025_01.xlsx, presa às folhas Contents, Table 1.1–1.5 e Further information). A licença do ABS exclui os dois: 'with the exception of: the Commonwealth Coat of Arms, the ABS logo, material protected by a trade mark…' (abs-copyright.html, sha256 e041e535…). A folha vai sem esse cabeçalho (o recorte começa abaixo dele) ou recriada; o dono vai escrito no crédito, que já está no espelho. Não é pedido de logo.
- **s37 P4 (a ficha da Austrália do Sul, 'usually quite shy')** (`pesquisa-documentos, editor-de-arte`). Recriação, nunca fac-símile: sem brasão, selo, timbre nem logo (identidade §5; midia §7.6). Olhadas nesta peça as duas páginas da cópia local (sa-inland-taipan.pdf, sha256 ff1cc4ab…): a p. 1 (a da woma) traz no cabeçalho o selo do Government of South Australia (o círculo 'SOUTH AUSTRALIA' com a ave) ao lado do nome do NRM Board, e o brasão da Commonwealth com 'Australian Government'; a p. 2, a da taipan, onde está 'usually quite shy', não traz selo nem brasão, só os grafismos da série (a folha no topo, as árvores, o símbolo de reciclagem). Nenhum deles vai à folha recriada. As fotos da p. 2 ('Photographs by John Read') e o mapa ('Map courtesy of DWLBC') são de terceiros dentro da ficha, e a ficha não traz licença: só o texto grifado, recriado.
- **s63 P3 (a frase do NCIS)** (`redator-de-tela, editor-de-arte, qc-visual`). A folha leva a frase inteira e literal na tipografia do canal, com o crédito em texto. Nenhuma logo do NCIS, e nenhuma captura da página (o site recusa leitura automática; a Sala a leu no navegador do app).
- **s19 e s67 (o card de Kevin Arbuckle)** (`pesquisa-pessoas, editor-de-arte, conferente-de-midia`). O card vai sem a logo da Swansea University (s19 já diz) e sem a logo 'Ls' ou o cabeçalho da Live Science: o crédito é texto. Se o retrato trouxer ao fundo uma logo da universidade, é parte da foto (registro): nada se acrescenta ao card, e o recorte que a tira, se o editor quiser, é dele.
- **s46, s47 P2 e s68 (os frascos de soro); s47 P1 (a foto de época da produção)** (`pesquisa-imagens (lista de caça), conferente-de-midia`). O espelho pede 'sem marca legível'. No frasco, o nome do soro com 'CSL' e '™' (healthdirect: 'Polyvalent Snake Antivenom (Australia and Papua New Guinea) (CSL)™') é marca: rótulo legível de fabricante vale a régua do conferente. Na foto de época, a placa ou o letreiro da Commonwealth Serum Laboratories no lugar seria registro, mas a CSL/Seqirus não é fonte aprovada (_decisoes_pendentes[7]): a foto deles é pergunta da Sala ao Lucas, não desta peça.
- **s16 P3 (o hospital, por fora)** (`pesquisa-imagens (lista de caça), conferente-de-midia`). O espelho já pede 'nenhuma marca de hospital legível'. A logo de um serviço estadual de saúde ou o nome do hospital no letreiro, se legível no B-roll, é marca: vale a régua do conferente.
- **s48 e s49 (o primeiro-socorro, desenhado; a PRANCHA das cautelas)** (`editor-de-arte, qc-visual`). Só desenho e o rótulo do canal: nenhuma logo da ANZCOR nem do healthdirect (a ANZCOR: 'The logos … may not be used without our express written permission'; o healthdirect: 'You may not display or use in any manner any trade marks…'). Nem a cruz vermelha como sinal de primeiro-socorro: é emblema de uso protegido, não símbolo genérico. A PRANCHA de s49 é um cartão de texto, sem ator: não leva bandeira nem logo.
- **s69 a s74 (o Australian Reptile Park)** (`mapista, editor-de-arte, qc-visual`). O pino de s69 leva o nome escrito ('Australian Reptile Park'), nunca a logo do parque, e nenhum elemento sugere parceria, patrocínio ou endosso: o parque é parte interessada, e cada número vai com o dono (s71 › motivo). A miniatura de foto presa ao nome só se houver foto aprovada (DECISÃO DO LUCAS PENDENTE).
- **s47, s48 ('healthdirect Australia'); s02, s33, s34, s37 ('SA Arid Lands NRM Board')** (`redator-de-tela, verificador-de-fatos`). Duas grafias de nome para o redator decidir, sem mudar a regra do nome escrito: a empresa se escreve 'Healthdirect Australia' e o serviço, 'healthdirect' (o crédito do espelho junta os dois); e a ficha escreve por inteiro 'South Australian Arid Lands Natural Resources Management Board', que o crédito abrevia. Nenhuma das duas é erro de fato; é forma de tela.
- **s15, s45 (a OMS); s23, s54 (Geoscience Australia); s42 (Queensland Museum); s62 (Bee Aware); s74 (a linha do Shutterstock, condicional)** (`redator-de-tela, mapista`). Todos são crédito em texto. Nenhum emblema da OMS, nem logo de órgão, de museu ou de banco de imagem (a linha do Shutterstock é a frase que a licença pede, em texto).

## Olhado nesta peça (não é entrega)

- out/australia-animais/_tmp/pesquisa-logos/abs-xlsx-image1.png: a imagem embutida no data cube do ABS (546 × 78 px, pelo ffprobe; a mesma imagem nos 7 desenhos das 7 folhas), extraída da cópia local para olhar: a logo do ABS com o brasão da Commonwealth e 'Australian Bureau of Statistics'. Não é entrega e não vai à cena.
- out/australia-animais/_tmp/pesquisa-logos/sa-ficha-p1.png e sa-ficha-p2.png (as duas páginas da ficha da Austrália do Sul, a 80 dpi) e sa-ficha-p1-topo.png e sa-ficha-p2-topo.png (a faixa de cima, a 200 dpi), só para olhar. Não são entrega.

## NÃO MEDIDO / não se aplica

O `_svg-para-png`, o gate de 40 MP, o `qc-procedencia` e o `conferente-de-midia` não se aplicam: esta peça não entregou
nenhum arquivo.
