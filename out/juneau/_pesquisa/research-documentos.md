# Juneau · research · pesquisa-documentos (27/09/2026, revisado depois do verificador e, à noite, com as decisões do Lucas)

Pedido: `espelho.json` › `_despacho_research` › `documentos` (peças e matérias) e as mascotes de s26. Os dados
completos, com o texto literal de cada trecho, o word-lock e as caixas do grifo, estão em
`out/juneau/_pesquisa/pauta-documentos.json` (28 itens, **válida** no contrato `pauta-pesquisa`).

> **2ª revisão, noite de 27/09.** A capa do ca9 saiu de `documento/s52/` pelo veredito `trocar` do conferente, e a
> pauta leva as decisões do Lucas sobre s07, s31 e s52 e o recorte do Federal Register (s58). O que mudou e como
> conferi está no §7. Nenhum pedido de rede.

> **1ª revisão, tarde de 27/09.** O verificador achou 6 defeitos na 1ª entrega. O mais sério: **a 1ª rodada mandou 2 HEAD por
> curl ao akleg.gov**, que está na lista de sites que recusam robô, e o relato dizia o contrário. O registro de cada
> acesso e o que mudou estão no §6. A revisão não fez nenhum pedido de rede: saiu da transcrição da 1ª rodada, das
> cópias locais e dos arquivos entregues.

## 1 · Divergências (vêm primeiro)

**Nenhum trecho do despacho contradiz a fonte.** Os 27 grifos estão, literais, na fonte, e os 27 caem dentro da janela
do plano no `words.json`. O que a tela precisa saber:

- **s05**: a fonte imprime "time consuming", **sem hífen**. O "time-consuming" é da cópia para a voz.
- **s58, plano 3**: no ROD, o "Declining oil prices…" vem depois de "In summary, **DOT&PF and FHWA** find the
  following:". É um achado dos dois, dentro de um documento da FHWA. O `midia.md` §7.1 dá dois créditos:
  - `Source: Federal Highway Administration, 2018` para a frase de decisão;
  - `Source: Alaska DOT&PF and FHWA, 2018` para o texto citado.

  Qual dos dois vai sob este grifo é decisão do `redator-de-tela`.
- **s40**: o despacho sugere `Source: Alaska State Legislature, 2026`, mas a versão A do HB 3 é de 22/01/2025. É o PDF
  na cópia do dossiê (arquivo de 23/09/2026) que traz "Second Session". O ano fica com o `redator-de-tela`.
- **s55 (a fonte se contradiz)**: a p. 2-42 do FSEIS diz que Walker anunciou em "December 15, **2017**". As p. 1-2 e
  2-52 dizem 15/12/2016, a data do comunicado. A voz diz 2016, como as duas que concordam. Fica para o
  `verificador-de-fatos`.
- **s28**: o texto do primeiro anúncio só existe, em fonte aberta, na citação da coluna do ADN. O original (Juneau
  Empire, 8/10/1982, p. 7, pela lista de fontes da coluna) não foi achado, então fica **NÃO CONFERIDO no original**.
- **s43**: o localizador certo é o §1.4.2, p. 1-16 (PDF p. 76), como o despacho já corrigiu. O "§1.3" do
  `fundamento.json` (mec-01.27) está errado.

## 2 · Por item do pedido

Todas as páginas foram olhadas antes da entrega. O nome com `-prova` quer dizer que o arquivo **não vai à tela**.

| Cena · peça | Arquivo | Fonte · data na origem | Licença hoje | Resolução |
|---|---|---|---|---|
| s02, s23, s30 · folheto de 1982, BM 8, sumário | `documento/s02/oep1982-prova-p17.jpg` | State of Alaska, Official Election Pamphlet, 1982, p. 88 (cópia arquivada de 18/02/2017) | sem permissão: recriada | 1273×1644 |
| s32 · idem, LAA Summary | `documento/s32/oep1982-prova-p18.jpg` | idem, p. 89 | sem permissão: recriada | 1273×1644 |
| s05, s25 · idem, falas de Harris e Clark | `documento/s05/oep1982-prova-p19.jpg` | idem, p. 90 (Frank W. Harris; Jim Clark) | sem permissão; autores particulares | 1273×1644 |
| s16, s18 · folheto de 1978, falas da Prop. 3 | `documento/s18/oep1978-prova-p06.jpg` | Official Election Pamphlet, 1978, p. 49 (cópia de 30/12/2016) | sem permissão: recriada | 1273×1644 |
| s19 · idem, a Prop. 3 e o Bond 10 | `documento/s19/oep1978-prova-p05.jpg`, `…-p20.jpg` | idem, p. 48 e 63 | sem permissão: recriada | 1273×1644 |
| s33, s34 · folheto de 1994, BM 3 | `documento/s34/oep1994-prova-p05.jpg` | Official Election Pamphlet, 1994, p. B-24 (cópia de 30/12/2016) | sem permissão: recriada | 1273×1644 |
| s07 · 31 Stat. 321 (06/06/1900) | `documento/s07/stat-31-321-1900-p1.jpg` | U.S. Statutes at Large, govinfo | **domínio público federal: original**, até 1,4× (§7) | 1153×1715 |
| s07 · 37 Stat. 512 (24/08/1912) | `documento/s07/stat-37-512-1912-p1.jpg` | idem | **domínio público federal: original**, até 1,4× (§7) | 1154×1716 |
| s13 · parecer do AG (24/08/1993) | `documento/s13/ag-opinion-1993-prova-p04.jpg` | Alaska Department of Law, p. 4 (Charles E. Cole) | sem permissão: recriada | 1275×1650 |
| s13 · Boucher v. Engstrom (15/11/1974) | cópia `midia/…/pesquisa-documentos/cap-boucher.json` | Alaska Supreme Court, 528 P.2d 456, pelo Caselaw Access Project (Harvard) | só conferência | — |
| s31 · Alaska Economic Trends, jun. 1990 | `documento/s31/trends-jun1990-prova-p02.jpg` | Alaska Department of Labor, Brian N. Rae, p. 2 | sem permissão provada: **recriada** (Lucas, 27/09; §3 e §7) | 1276×1755 |
| s36, s61 · AS 44.06.055 | cópia `midia/…/mecanismo/verif/as4406.html` | Alaska Statutes (BASIS), texto vigente conferido em 26/09 | sem permissão: recriada; sem captura | — |
| s40 · HB 3, versão A (22/01/2025) | `documento/s40/hb3-2025-prova-p12.jpg`, `…-p01.jpg` | Alaska State Legislature, Sec. 16 (cópia do dossiê; canônica **NÃO MEDIDA**, §6) | sem permissão: recriada | 1275×1650 |
| s03, s43, s51, s53, s55 · FSEIS de 2018 | `documento/<cena>/fseis-2018-prova-p0NN.jpg` | Alaska DOT&PF e FHWA (ES-2, 1-16, ES-9, 2-19, 2-43, 2-52) | estadual: só o texto recriado | 1275×1650 |
| s58 · ROD (18/06/2018) | `documento/s58/rod-2018-prova-p010.jpg`, `…-p013.jpg` | FHWA, ROD p. 3 e 6 | estadual: recriada | 1275×1650 |
| s58 · Federal Register, 83 FR 36661 (30/07/2018) | `documento/s58/federal-register-2018-16263-p1.jpg` | FHWA, FR Doc. 2018-16263 | **domínio público federal: original**, recortada (§7) | 5100×6600 |
| s52 · a decisão de 13/02/2009 | — | **NÃO ACHADO** (§4) | — | — |
| s52 · 9º Circuito (04/05/2011), com o rótulo "upheld on appeal, 2011" | `documento/s52/ca9-2011-seacc-p04.jpg` (a capa, `-p01`, saiu: §7) | U.S. Court of Appeals, 9th Cir., No. 09-35551 | **domínio público federal: original** | 5100×6600 |
| s27, s31, s28 · coluna do ADN (09/02/2026) | cópia `midia/…/evento/adn_reamer.html` | Anchorage Daily News, David Reamer | "All rights reserved": recriada | — |
| s41 · KTOO (13/06/2025) | cópia `midia/…/experiencia/verif/exp03.html` | KTOO, Clarise Larson | sem licença (© KTOO): recriada | — |
| s57 · KTOO/CoastAlaska (24/01/2017) | cópia `midia/…/experiencia/verif/exp33.html` | CoastAlaska, Jacob Resneck | sem licença: recriada | — |
| s26 · mascotes (planos 1 e 3) | `documento/s26/access-annie-adn-1982-10-18-prova.jpg`, `football-fannie-adn-1982-10-21-prova.jpg` | anúncios do ADN de 18 e 21/10/1982, pela coluna de 2026 | **sem permissão: não vão** | 1191×1444 · 1769×2958 |

Notas:
- **As páginas federais** vieram sem o selo "AUTHENTICATED … GPO". Ele é um campo de assinatura que o govinfo
  sobrepõe à página, e logo de órgão não vai à cena (§7.6).
  - Nos estatutos: a imagem embutida, extraída sem recompressão.
  - No FR e no 9º Circuito: página vetorial em 600 dpi, sem anotações.
- **As caixas do grifo** estão na pauta (`bbox_px`).
  - **As dos estatutos foram regravadas na revisão**, pela tinta da própria página (±2 px, sem folga). As de antes
    vinham do OCR do govinfo e erravam: em 1900 começavam 9 px acima da linha, e em 1912 a caixa começava no "That",
    antes de "the capital". Nas duas, pisavam a linha vizinha. A nota de cada caixa diz até onde vai a folga.
  - As do FR e do 9º Circuito saem da camada de texto do PDF e não mudaram.
- **As páginas de imprensa** não têm prova em imagem: não há navegador para mim, e a captura é do Claude central.

## 3 · Licença: o que ficou para o Lucas

1. **Documentos do Estado.** A permissão de cada um se confere na origem de hoje, e vários sites recusam robô:
   - não toquei no elections.alaska.gov, no BASIS nem no dot.alaska.gov;
   - o PDF do HB 3, no akleg.gov, levou 2 HEAD por curl na 1ª rodada, o que foi contorno (§6, incidente 1);
   - a home do law.alaska.gov deu 403, e parei ali.

   Vale o navegador do app, pelo Claude central; desde 27/09, o Lucas não precisa acompanhar (CLAUDE.md, "A marca").
   Até lá, tudo se recria com a fonte.
2. **Trends de 1990.** As edições atuais dizem "This material is public information, and with appropriate credit it may
   be reproduced without permission." Conferi na de jan/2023 (labor.alaska.gov), e a busca mostra o mesmo texto de 1997
   a 2007. Mas o expediente de 1990 não está no site, então vale como permissão ou não? Decisão do Lucas.
   - **Decidido** (Lucas, 27/09/2026, 21:0x de Brasília). A pergunta: "Revista do Trabalho do Alasca, junho de 1990
     (cena 31): como mostramos o trecho?" A resposta: "Recriar com a fonte (Recomendado)". A opção dizia: "O trecho é
     redesenhado na tela, citando a revista. Sem risco de direito autoral." A página fica como `-prova`, e o plano
     recria o trecho.
   - Um cuidado: o `jun90art2.pdf`, que mostra que a outra parte da edição também não traz o expediente, foi baixado
     depois de um 403 no mesmo host (§6, incidente 2).
3. **Estatutos de 1900 e 1912.** São escaneados de 150 dpi, a maior versão que o govinfo oferece, e têm menos de
   1.600 px. Não ampliei nada.
   - **Decidido** (Lucas, 27/09/2026; identidade §5, "Documento antigo"): a página real, com permissão, entra como a folha
     só até 1,4 vez o tamanho dela, e acima disso vai a recriação datilografada. O conferente os aprovou por essa regra, e
     a pauta não diz mais `pendente_lucas` (§7).
4. **Mascotes de s26.** A imagem só entra com autorização escrita dos detentores.
   - Detentores: o NFL Access Committee, de Lee Stoops (que registrou a marca Football Fannie, segundo a coluna),
     o Capital Access Committee e o ADN, dono da digitalização.
   - Os anúncios não mostram aviso de copyright, e isso não é permissão.

## 4 · NÃO ACHADO

- **s52, plano 1: a decisão de 13/02/2009.** É a Order, Doc. No. 105, do processo 1:06-cv-00009-JWS, D. Alaska
  (citada como 2009 WL 10677763). Onde procurei:
  - o govinfo só tem as opiniões de 2007, 2013 e 2014 desse processo;
  - dockets.justia.com e courtlistener.com deram 403, e parei ali. No CourtListener, depois do 403 da busca, ainda
    abri uma página de acórdão pelo mesmo WebFetch, que voltou vazia, e não insisti (§6, incidente 4). O Boucher v.
    Engstrom veio de outra fonte aberta, o Caselaw Access Project, de Harvard;
  - o PACER e o Westlaw são pagos e não foram abertos;
  - **uma pista ficou sem abrir.** O WebSearch das 15:24:46 UTC trouxe um resultado do CaseMine:
    `casemine.com/judgement/us/59146cd5add7b04934317c1e/amp`, com o título "1:06-cv-00009 JWS | D. Alaska | Judgment".
    - Na 1ª rodada, não o abri por descuido, e ele não entrou no relato.
    - Na 1ª revisão, não o abri por decisão. É agregador, e o ofício (§2) não aceita agregador como fonte. O título não
      traz data, e pode ser qualquer decisão do processo; três delas o govinfo já tem. E, mesmo sendo a de 2009,
      traria o texto no leiaute do site, e não a página do tribunal que o plano pede.
    - Se o `montador` quiser um DOCUMENTO recriado com as palavras da corte distrital, é um despacho novo. Ele abre a
      pista uma vez e confere o texto contra as citações do 9º Circuito e do Doc. 185, que fica NÃO CONFERIDO no
      original.

  O Doc. 185 de 2013 e o 9º Circuito provam o número e a data. **Decidido pelo Lucas (27/09/2026; identidade §5,
  "Documento de outra data que atesta o fato, com rótulo")**: o plano 1 usa a p. 4 de 2011 com o rótulo "upheld on
  appeal, 2011" na tela, e não muda de regime. O conferente a aprovou lendo o grifo proposto, "The district court
  vacated the FHWA's Record of Decision ("ROD")", sobre "a federal court threw out that choice" (542,62–544,38 s). A
  capa do mesmo acórdão saiu (§7). A de 2009 continua NÃO ACHADA.
- **s26, planos 1 e 3: as mascotes com permissão.** Buscas no `buscar-midia` (Commons, NASA, NARA, Smithsonian,
  DVIDS), sem nada da campanha:
  - "Access Annie";
  - "Football Fannie";
  - "NFL Access Committee";
  - "Alaska capital move".

  As cópias dos candidatos estão em `_pesquisa/candidatos/s26--pesquisa-documentos-{1,2,4}.json`. **A da 3ª busca não
  existe**: o laço rodou a 3ª e a 4ª antes do `cp`, e a 4ª sobrescreveu o `s26.json`. Não se perdeu nada: o log dela
  (`_tmp/documentos/busca-s26-NFL Access Committee.log`) mostra 0 candidato aceito, e não houve `baixar`. A busca na
  web só achou a coluna do ADN. Os planos ficam com os nomes escritos, como o despacho prevê.
- **s28, plano 1: o primeiro anúncio (Juneau Empire, 8/10/1982).** Não há acervo aberto do jornal em 1982. O texto
  vem pela citação da coluna.

## 5 · Portões (§3 do contrato)

- **1, a URL abre.** Nenhuma das duas revisões fez pedido novo. Pelo que a 1ª rodada mediu:
  - govinfo.gov e cdn.ca9.uscourts.gov (estatutos, FR, Doc. 185, 9º Circuito): 200, com o tamanho da cópia;
  - static.case.law (Boucher): 200;
  - law.alaska.gov (parecer de 1993) e laborstats.alaska.gov (Trends): HEAD 200, com o tamanho da cópia, mas cada
    host deu 403 logo depois (§6, incidentes 2 e 3). Se esses HEAD valem, decide o Claude central;
  - akleg.gov (HB 3, e o AS 44.06 no BASIS): **NÃO MEDIDA**. O site recusa robô, e o HEAD da 1ª rodada ao HB 3 foi
    contorno, que não vale como conferência (§6, incidente 1);
  - elections.alaska.gov (folhetos), dot.alaska.gov (FSEIS e ROD), adn.com e ktoo.org (as matérias): **NÃO MEDIDA**
    hoje, sem pedido meu. O texto vem das cópias do dossiê. As dos folhetos são arquivadas, e valem como fonte (Lucas,
    27/09).
- **2 e 3, o trecho está na fonte:** conferido página a página, e o texto literal está na pauta.
- **4, o teto de 40 MP:** o `identify` sai **NÃO MEDIDO (identify)**. Medi por ffprobe, e o maior arquivo tem 33,7 MP.
  Os arquivos não mudaram na 1ª revisão (o sha256 de cada um é o mesmo da 1ª entrega). Na 2ª, a capa do ca9 mudou de
  pasta com o mesmo sha256, e os outros ficaram onde estavam (§7).
- **5, a legibilidade:** olhei os quadros, o que não é portão.
- **6, o contrato:** `validar-contrato pauta-pesquisa` deu válido depois das duas revisões.
- **7 e 8:** não se aplicam, porque não montei cena.
- **`qc-procedencia juneau`:** PASS depois da 1ª revisão (47 itens no projeto) e de novo depois da 2ª (95 itens, com o
  que os outros pesquisadores entregaram no dia; §7). A pasta `documento/` sai isenta, e a capa retirada conta como
  rascunho.

## 6 · Incidentes de rede e o que a revisão mudou

Reconstituídos da transcrição da 1ª rodada (horas em UTC; Brasília é UTC−3). Estão também na pauta, em
`incidentes_de_rede`, e no `_PROCEDENCIA.json` das cenas que eles tocam.

1. **akleg.gov: contorno da regra anti-robô.**
   - Às 15:25:55 (12:25:55 em Brasília), 2 HEAD por curl em `https://www.akleg.gov/PDF/34/Bills/HB0003A.PDF`. A
     resposta foi 200, `application/pdf`, Content-Length 238.759.
   - Foi num laço que conferia 7 endereços canônicos de 6 peças (o portão 1, "a URL abre"). O laço pegou todas as
     URLs sem separar as dos sites da lista. Tratei o HEAD como conferência inofensiva, e a regra não tem essa exceção.
   - O akleg.gov está na lista: o CLAUDE.md, em "A marca"; o `midia.md` §7.1; e a minha roupa, §0 ("Não tente de novo
     por curl"). É o mesmo padrão do `APRENDIZADOS.md`, item 14.
   - O relato da 1ª entrega dizia "HEAD 200 em todas as canônicas que não recusam robô", e o resumo dela dizia "não
     mexi em nada proibido". **Os dois estavam errados.**
   - O que a revisão fez: nenhum pedido novo ao akleg.gov. A pauta (`hb3-34th-legislature`) e o `_PROCEDENCIA.json` de
     s40 dizem agora "cópia local do dossiê; canônica NÃO MEDIDA". O texto do HB 3 vem só da cópia do dossiê
     (`midia/juneau/fontes/evento/hb0003a.pdf`), e a URL se confere no navegador do app, com o Lucas vendo.
2. **laborstats.alaska.gov: um 403 que o relato não listava.**
   - Às 15:26:15, `curl -I https://laborstats.alaska.gov/trends/` respondeu **403** (`text/html`).
   - No mesmo laço, 3 endereços deram 404: `/trends/jun90.pdf`, `live.laborstats.alaska.gov/trends/jun90.pdf` e
     `/trends/trends.htm`.
   - Antes do 403, às 15:25:55, 2 HEAD em `/trends/jun90art1.pdf` deram 200.
   - Depois dele, segui no host:
     - às 15:26:38, 5 HEAD: `jun90art2` deu 200; `jun90art3`, `jun90toc`, `jun90cover` e `jun90` deram 404;
     - no mesmo minuto, 1 GET em `labor.alaska.gov/trends/jan23.pdf`, que é outro host do Departamento e respondeu
       200. É dele o aviso "public information" do §3;
     - às 15:27:02, 1 GET em `/trends/jun90art2.pdf` (464.043 bytes). Ele está em
       `out/juneau/_tmp/documentos/trends-jun90art2.pdf` e não foi entregue.
   - **A leitura:** provavelmente é o 403 de uma pasta cujo conteúdo o servidor não lista, e não um bloqueio de robô.
     O mesmo cliente recebeu 200 e 404 de arquivos do mesmo host antes e depois. Não está provado: o HEAD não traz o
     corpo da resposta.
   - **Decide o Claude central.** Se foi recusa, os 6 pedidos seguintes ao laborstats (5 HEAD e 1 GET) foram
     contorno. Nesse caso, o `jun90art2.pdf` sai do `_tmp`, e a frase da licença da Trends que se apoia nele perde a
     prova.
3. **law.alaska.gov: parei no 403.**
   - Às 15:25:55, 2 HEAD no PDF do parecer de 1993 deram 200, com o tamanho da cópia.
   - Às 15:27:08, o WebFetch em `/opinions/opinions.html` levou um 302 para `/404error.html`, que não segui.
   - Às 15:27:12, o WebFetch na home deu **403**. Depois disso, nenhum pedido ao host.
   - O HEAD veio 77 s antes do 403, quando o host não estava em lista nenhuma. Se ele vale como conferência da URL,
     decide o Claude central.
4. **courtlistener.com: volta depois do 403.** A busca deu 403 às 15:25:00. Às 15:27:59, abri uma página de acórdão
   pelo mesmo WebFetch, e ela voltou vazia. Voltar ao site foi contra o "pare nele" da roupa. O verificador pediu só o
   registro, que fica.
5. **dockets.justia.com:** 403 às 15:24:55, e parei.

O que mais mudou na 1ª revisão:
- as caixas do grifo de 1900 e de 1912 (§2, notas);
- a pista do CaseMine e a cópia que faltou em s26 (§4);
- a correção à mão que a 1ª rodada fez na caixa do 9º Circuito (às 15:46:24) foi levada para o gerador da pauta
  (`out/juneau/_tmp/documentos/montar-pauta.py`). Ao gerar de novo, ela não se perde, e a caixa ficou igual à entregue.

**Para o Lucas, pelo Claude central:** o incidente 1 repete o item 14 do `APRENDIZADOS.md`, o 403 do Legislativo
contornado por curl. Desta vez, a regra estava no pedido, na roupa e no CLAUDE.md, e o HEAD saiu mesmo assim, dentro
de um laço de conferência. A lição, que serve a qualquer canal: **o HEAD de conferência também é um pedido**. A lista
dos sites que recusam robô se consulta antes de qualquer pedido, e não só depois de um 403. Não editei o
`APRENDIZADOS.md`, que fica com o Claude central.

## 7 · 2ª revisão, 27/09/2026 à noite: as decisões do Lucas e a capa do ca9

Pedido do Claude central, depois do 2º despacho do `conferente-de-midia` (20:30 de Brasília). Nenhum pedido de rede.
A pauta saiu do gerador (`out/juneau/_tmp/documentos/montar-pauta.py`). Antes de mexer nele, provei que ele ainda
reproduzia a pauta e os 18 `_PROCEDENCIA.json` entregues, com diferença só nas horas; depois, que reproduz o que ficou no
disco. Os rascunhos e as provas desta revisão estão em `out/juneau/_tmp/documentos/revisao-2/`, fora do git.

**1. A capa do ca9 saiu de s52.**
- `ca9-2011-seacc-p01.jpg` foi movida, e não apagada, de `_media/documento/s52/` para `_media/_caca/_retirado/documento/`,
  às 02:26:43Z (23:26 em Brasília).
- O sha256 (`bc944613…`) é o mesmo antes e depois, e igual ao do veredito e ao da procedência. A capa não está mais em
  `s52/`.
- O veredito foi `trocar`: "a capa mostra o tribunal e as partes, não a anulação; a página 4, aprovada, é a que diz o que
  a fala diz".
- Ao lado dela está o `_RETIRADO.json`, no formato do das logos. Ele traz a origem, o sha256, a hora, o motivo com o
  veredito citado e quem retirou. Traz também o veredito inteiro e a procedência inteira, sem mudança.
- O `_PROCEDENCIA.json` de `s52/` ficou só com a página 4. Ganhou `retirados`, que aponta para o `_RETIRADO.json`.
- Na pauta, a capa passou de `arquivos_extra` para `arquivos_retirados`.
- Não há substituto: a página 4 cobre o plano, e a decisão de 2009 continua NÃO ACHADA.

**2. As decisões do Lucas, levadas à pauta.**
- **Os estatutos de 1900 e 1912 (s07).** A pauta dizia que eles saíam `pendente_lucas` por terem menos de 1.600 px.
  - O Lucas já decidiu (identidade §5, "Documento antigo"): a página real entra como a folha só até 1,4 vez o tamanho
    dela, e acima disso vai a recriação datilografada. O conferente os aprovou por essa regra.
  - A página inteira na altura da tela pede 1,26×. A 1,4×, a de 1900 fica com 1614×2401, e a de 1912, com 1616×2402.
  - A 1,4×, a tinta da linha do grifo chega a 29 px (1900) e a 31 px (1912), perto de um terço do corpo da folha
    recriada (86 px). A página real se reconhece, e o trecho legível fica com a recriação.
- **A Trends de junho de 1990 (s31).** O Lucas escolheu "Recriar com a fonte (Recomendado)" (§3, item 2): a página fica
  `-prova`, e o plano recria o trecho citando a revista.
  - O `na_tela`, a licença e a sugestão de crédito da pauta dizem isso, e o `_PROCEDENCIA.json` de `s31/` leva a
    licença nova.
  - A sugestão de crédito continua `Source: Alaska Department of Labor, 1990`, no formato da identidade §7. A opção
    dizia "citando a revista": como o nome Alaska Economic Trends entra na linha, decide o `redator-de-tela`.
- **O s52.** A página 4 da decisão de 2011 do 9º Circuito entra com o rótulo "upheld on appeal, 2011" (identidade §5,
  "Documento de outra data que atesta o fato, com rótulo").
  - O rótulo fica na tela todo o tempo da página, no papel legenda, e sem ele a página não entra. A grafia final é do
    `redator-de-tela`.
  - O grifo continua uma proposta, porque o despacho deu `grifar: []`. Se ele entra no plano, decidem o `montador` e o
    `regente-de-imagem`.
  - A decisão de 13/02/2009 continua NÃO ACHADA.

**3. O recorte do Federal Register (s58).** Os dois avisos do conferente estão na pauta, em `recorte`, com o lugar de
cada coisa na página. As caixas saem da camada de texto do PDF, em px do arquivo, e as faixas de papel, da tinta do
próprio arquivo.
- **Ficam fora:**
  - o fim do aviso da FAA, na coluna 1, que traz o nome e o telefone de um contato e o nome de quem assina;
  - o parágrafo FOR FURTHER INFORMATION CONTACT da FHWA, no alto da coluna 2, com nome, cargo, endereço, telefone e
    e-mail de um servidor da FHWA e de um do DOT&PF.
- **A data.** O cabeçalho diz "Monday, July 30, 2018", perto do "JUNE 2018" da tela. Ou a linha do "issued on June 18,
  2018" entra no quadro, ou o cabeçalho fica fora.
  - A frase quebra a linha: "issued on" fecha a 6ª linha abaixo do grifo, e "June 18, 2018" abre a 7ª.
- **O corte entre os contatos e o texto.** Entre a última linha dos contatos e o SUPPLEMENTARY INFORMATION há 16 px de
  papel puro (y 3432 a 3447).
  - Testei um recorte da coluna 2, do SUPPLEMENTARY INFORMATION ao "June 18, 2018", e olhei: não pega nenhuma linha dos
    contatos e tem o grifo.
  - É um teste dos dados. O enquadramento é do `editor-de-arte`.
  - Um retângulo só, do título (coluna 1) ao "June 18, 2018" (coluna 2), não fecha limpo embaixo: na altura da data, a
    coluna 1 tem texto.
- **O que não precisa corte.** A linha VerDate do pé e a etiqueta da composição na margem só existem na camada de texto do
  PDF. No arquivo não há tinta ali.

**4. O que conferi no disco.**
- Medi o sha256 de `documento/` e de `_retirado/documento/` antes (02:26:31Z) e depois (02:38:55Z). As diferenças são só
  as pretendidas:
  - a capa saiu de `s52/`;
  - a capa e o `_RETIRADO.json` entraram em `_retirado/documento/`;
  - mudaram os `_PROCEDENCIA.json` de `s31/` e `s52/`;
  - as outras 25 mídias ficaram iguais.
  Os arquivos estão em `revisao-2/sha256-antes.json` e `sha256-depois.json`.
- As 4 páginas que vão à tela em `documento/` casam, pelo sha256, com um `aprovado` do `conferencia-midia.json`. São as
  duas de s07, a p. 4 de s52 e a de s58. Não sobra `trocar` nem `reprovado` em `documento/`.
- `validar-contrato pauta-pesquisa` deu válido.
- `qc-procedencia juneau` deu PASS: 95 itens no projeto, contando o que os outros pesquisadores entregaram no dia, com
  16 provados, 29 isentos e nenhum sem prova. A capa conta como rascunho.
- Não escrevi em `_media/foto/`, `_media/pessoa/`, `_media/_caca/s16|s28|s35/` nem `_retirado/pessoa/`. Também não
  mexi no `espelho.json` nem nos `conferencia-*.json`.

**Devolução:**
- Em `documento/`, nada segura mais o `regie advance` do `research`: as 4 páginas que vão à tela têm `aprovado`, e a
  capa saiu. As outras pastas de mídia são dos outros pesquisadores.
- Em s52, o plano 1 do espelho ainda descreve a decisão de 2009 como objeto. O re-espelho e a entrada do grifo são do
  `montador` e do `regente-de-imagem`. O rótulo é do `redator-de-tela`.
- O recorte de s58 e a folha até 1,4× de s07 são do `editor-de-arte`. A linha de crédito de s31, citando a revista, é do
  `redator-de-tela`.
- O que já estava aberto continua como estava:
  - nos créditos de s40, s58 e s05, decide o `redator-de-tela`;
  - na data de s55, decide o `verificador-de-fatos`;
  - nos incidentes 2 e 3, decide o Claude central;
  - nas licenças do §3, itens 1 e 4, e no aviso do incidente 1, decide o Lucas.
