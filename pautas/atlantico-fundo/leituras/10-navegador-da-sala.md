# Leitura 10 · O que ficou aberto, aberto pela Sala no navegador do app

Vídeo 5 (`atlantico-fundo`). Feita em 26/10/2026, entre 17:40 e 17:55 (Brasília), pela Sala, depois do pedido do Lucas: "Pode ver o
que ficou pendente". São os itens que as leituras 01 a 09 deixaram para o navegador do app (pauta §9, "Lidos em 26/10/2026") e os
abertos do dossiê (`pautas/atlantico-fundo/fundamento.json` › `abertos`) que uma página resolvia.

**Como:** uma página por item, devagar. Em verificação de robô, a Sala parou no site, sem tentar de novo e sem pedir ao Lucas que a
resolvesse. Onde a mesma informação estava num site que deixa programas lerem, a Sala a baixou com o User-Agent do canal, depois do
robots.txt. As cópias e a procedência estão em `midia/atlantico-fundo/fontes/` (`sala-*`, `_PROCEDENCIA-sala.md`, fora do git), e o
índice em `pautas/atlantico-fundo/fontes-local-sala.json`.

## O placar

| Item | O que se tentou | Deu | O roteiro, agora |
|---|---|---|---|
| A altura do Everest (F06, S26) | o Washington Times no navegador; a mesma matéria da AP na WDIV ClickOnDetroit, por script | **resolvido**: o Washington Times pediu verificação; a AP da ClickOnDetroit tem a frase | "8,848.86 meters (29,031.7 feet)", 08/12/2020. A conta do F06 fica: ~1.500 ft de fora |
| A zona econômica dos EUA (F14, A20) | a página da NOAA, por script | **resolvido** | a definição tem fonte (abaixo) |
| A licença da grade fina do sonar (A06) | a OGL v2 e os itens 137749/137750 da BGS, no navegador; os termos do NGDC, por script | **lido**; a decisão continua do Lucas | o mapa segue na GEBCO e no USGS |
| O nome "Brownson Deep" (A05, A03) | o blog da Library of Congress e Lyman 1954, no navegador | **recusou** os dois (verificação) | continua sem "named after him" |
| O *Archimède* (A01) | o MTS Journal 2020 (Ingenta) e o NYT de 1964, no navegador | **recusou** (Cloudflare; o navegador do app não abre o NYT) | continua "more than four miles down" |
| A altura do Mount Michael (A08) | o Global Volcanism Program, no navegador | **recusou** (verificação) | continua sem altura |
| Os dois artigos de 2020 (DSR I e *Endeavour*) | não se abriram: são pagos, e o navegador não muda isso | — | como está |

---

## 1 · O Everest (F06, S26): resolvido

- **A frase**, da AP: "The new height of the world's highest peak is 8,848.86 meters (29,031.7 feet)". O anúncio foi conjunto, da China e
  do Nepal, na terça, 08/12/2020. A mesma matéria lembra que a altura mais aceita até ali era 8.848 m (29.028 ft), do Survey of India,
  de 1954.
- **A fonte:** a matéria da AP publicada pela WDIV ClickOnDetroit. É a mesma que o dossiê cita no Washington Times, que pediu
  verificação (Cloudflare) no navegador do app. O robots.txt da ClickOnDetroit libera as matérias para qualquer programa e veta só o
  ClaudeBot, o rastreador de treino da Anthropic, que este pedido não é. A cópia guarda só os seis parágrafos da altura e do anúncio.
- **O grau:** confirmado (imprensa, AP).
- **No dossiê:** S26 passa a ter cópia local (`sala-01-ap-everest-2020.txt`), e a URL é a da ClickOnDetroit.

## 2 · A zona econômica (F14, A20): resolvido

- **O que a NOAA diz:** a zona econômica exclusiva dos EUA "extends no more than 200 nautical miles from the territorial sea baseline",
  incluindo Porto Rico. Dentro dela, os EUA têm direitos soberanos para explorar, conservar e administrar os recursos naturais, vivos
  ou não, do fundo, do subsolo e da água, e jurisdição sobre pesquisa científica marinha e proteção do ambiente.
- **A fonte:** NOAA, National Ocean Service, "What is the EEZ?" (atualizada em 23/09/2026), domínio público.
- **Na fala, em milhas:** 200 milhas náuticas × 1,150779 = 230,2 mi, ou seja, "about 230 miles". Por exemplo: "It lies inside the U.S.
  exclusive economic zone, the band of ocean, up to about 230 miles wide, where the U.S. controls the resources." Zona econômica não é
  território: nunca "U.S. soil" nem "U.S. territorial waters" (N32).
- **No dossiê:** F14 ganha a fonte nova; A20 fecha.

## 3 · A licença da grade fina do sonar (A06): lida, e a decisão é do Lucas

- **A OGL v2** (lida no navegador, sem verificação):
  - deixa copiar, publicar, adaptar e usar comercialmente;
  - pede o crédito que o fornecedor indicar e, onde der, o link da licença;
  - não deixa sugerir que o fornecedor endossa o uso;
  - é compatível com a CC BY 4.0.
- **Os dois conjuntos da Five Deeps no NGDC da BGS** (lidos no navegador; o script tinha levado recusa do firewall):
  - **137749**: a parte oeste da Fossa de Porto Rico, "the Brownson Deep area", com o sonar Kongsberg EM 124 do *Pressure Drop*, em
    18 e 19/12/2018. Arquivo `PRT_PD18PR04.zip`, de 20,81 MB;
  - **137750**: a Fossa das Sandwich do Sul, de 2 a 9/02/2019. Arquivo `SST_PD19ST02.zip`, de 48,84 MB;
  - **nos dois**: OGL, com o crédito "Contains data supplied by UKRI."; a Caladan Oceanic continua dona dos dados; os dados não servem
    para navegação; acesso aberto.
- **Os termos do NGDC** (v7.0, fevereiro de 2025, baixados por script): o dono continua dono; o NGDC pode distribuir "for all uses and
  re-uses, which may include commercial use"; os dados vão "as is", sem garantia. Nada além da OGL.
- **O que falta, se o mapa um dia pedir a grade fina:**
  - o ok do Lucas e o registro da OGL v2 na identidade §6, com o crédito "Contains data supplied by UKRI." e o link da licença;
  - um jeito de baixar. O app da BGS recusa script (firewall), e o navegador do app corta arquivo acima de ~1,8 MB. Sobra o navegador
    do próprio Lucas;
  - antes de tudo, saber se a GEBCO 2026 já traz esses dados (A07, do mapista). Se trouxer, a pergunta morre.
- **No dossiê:** A06 fica aberto, com o que falta acima.

## 4 · O que recusou

- **O nome "Brownson Deep" (A05) e a origem do 8.740 m (A03):** o blog da Library of Congress pediu "verificação de segurança", e a
  Royal Society (Lyman 1954), "Just a moment..." (Cloudflare). Um buscador resume o blog dizendo que o nome é de um comandante que mediu
  a fossa antes. É **pista, não fonte**: a página não foi lida. O roteiro continua sem "named after him".
- **O *Archimède* (A01):** a Ingenta (o MTS Journal de 2020, de acesso aberto) pediu "Just a moment...". O navegador do app não abre o
  nytimes.com ("not allowed due to safety restrictions"). Os dois artigos de 2020 da ScienceDirect são pagos. Os caminhos que sobram
  são comprar o artigo ou o "Request a copy" do NORA, que manda um e-mail ao autor. Os dois são decisão do Lucas, e o roteiro não
  precisa deles: "more than four miles down" vale para os dois números.
- **O Mount Michael (A08):** o Global Volcanism Program pediu "Smithsonian request verification". A fala fica sem altura.
- **O catálogo da BGS** (`data.bgs.ac.uk`, dataHolding 13607671): o script levou HTTP 400 com "supportID", do firewall.

## 5 · Uma decisão da Sala: a API da Figshare (leitura 01, item a)

O leitor das leituras 01 e 04 parou no desafio anti-robô do portal `outputs.ncl.ac.uk` e leu, pela API pública da Figshare, só a ficha
do item da *Endeavour* 2020: sem arquivo, com a licença "Copyrighted". **Decisão da Sala (26/10/2026): o uso valeu.** O motivo é o
mesmo das decisões da NARA e do Commons ("Tropeços conhecidos do apoio" no CLAUDE.md): a API pública é a porta que a plataforma abre
para programas, e o pedido não passou pelo portal que recusou.

## 6 · O que muda

- **No dossiê:**
  - S26 ganha a cópia local e a URL nova;
  - entram as fontes novas: a NOAA da zona econômica, a OGL v2, os itens do NGDC e os termos do NGDC;
  - F14 ganha a fonte da definição;
  - A20 fecha;
  - A01, A03, A05, A06 e A08 ganham a tentativa de hoje.
- **Na pauta §9:** os itens 1, 2, 4 e 5 ganham a linha de hoje.
- **No roteiro:** nada muda no que a fala pode dizer, fora duas coisas:
  - a altura do Everest passa a ter cópia para a checagem;
  - a zona econômica pode ser definida em milhas.
