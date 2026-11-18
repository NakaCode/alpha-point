# Pedido: a base de fatos do vídeo 8 (`australia-animais`), leitores A e B (18/11/2026)

Você é um leitor de fatos da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`), um canal do YouTube de geografia em inglês dos
EUA, para quem fala inglês em qualquer país. Notas em português; o trecho literal fica em inglês, como na fonte (até 25 palavras por trecho).

**O vídeo 8:** por que a Austrália tem tantos animais perigosos, e o paradoxo que o Lucas mandou: tem os mais venenosos, e quase ninguém morre
deles. A pergunta e as falas dele estão no topo de `pautas/2026-11-18-video-8-australia.md` (leia). A geografia explica o porquê; os números
desmontam a fama. Para ver como é uma base de fatos boa: `pautas/arizona-strip/_trabalho/fatos-a.md` e `fatos-b.md`.

## O leitor A: o porquê (a geografia e a evolução)

1. **O isolamento:** quando e como a Austrália se separou da Antártida e de Gondwana; a deriva para o norte e o clima que secou; o contato com a
   Ásia (a Wallacea) e o que chegou por ela. Com fonte científica ou oficial (Geoscience Australia, CSIRO, museus, artigos revisados).
2. **As cobras:** quando e de onde chegaram os elapídeos; por que quase todas as cobras venenosas da Austrália são elapídeas e quase não há víboras;
   a taipan-do-interior (a mais venenosa em teste de laboratório, e de onde vem essa medida: a LD50 em camundongo) e o porquê do veneno forte
   (a presa, o ambiente). Diga com cuidado o que é hipótese e o que é consenso.
3. **O mar e o norte tropical:** a vespa-do-mar (*Chironex fleckeri*), o polvo-de-anéis-azuis, o crocodilo-de-água-salgada, os cones; onde vivem e
   por que ali.
4. **As aranhas:** a aranha-de-teia-de-funil de Sydney (a toxina que é forte em primatas e fraca em cães e gatos, se a fonte confirmar), a
   redback; o soro e o ano em que chegou.
5. **O endemismo:** os números (mamíferos, répteis, anfíbios) por fonte oficial (o governo australiano, o DCCEEW, o Atlas of Living Australia).

## O leitor B: o perigo real em números, e a medida nossa

1. **As mortes por animal na Austrália**, pela fonte primária: o estudo das mortes por animais venenosos (Welton e colegas, Internal Medicine
   Journal, 2017, com os dados de 2000 a 2013, se for esse) e o das mortes por todos os animais (cavalos, gado, cães, tubarões, crocodilos), e os
   dados oficiais do AIHW (internações por mordida e picada) e do ABS (causas de morte, a CID-10 X20 a X29). Diga o período, o número e a definição.
2. **A comparação que vira o paradoxo:** quantas pessoas morrem por ano de cobra, aranha, abelha (a alergia), tubarão, crocodilo, cavalo e colisão
   com canguru, e quantas de acidente de trânsito, com a mesma fonte e o mesmo período, se der.
3. **Os soros:** quando chegou cada soro (cobra, funnel-web, redback, vespa-do-mar) e o que aconteceu com as mortes depois (o "nenhuma morte por
   aranha desde…", com a fonte).
4. **A medida nossa:** uma conta com dado aberto que ninguém mostrou (por exemplo, a chance de morrer por animal venenoso por ano contra outra
   chance conhecida; as internações contra as mortes; a medida por estado ou por região, do norte tropical ao sul). Faça o script, diga a fonte, a
   licença e o número.
5. **O que é atual (os voláteis), lido hoje:** alguma notícia de 2026 sobre ataque, morte ou falta de soro na Austrália. Diga a data de cada leitura.

## Regras (todas valem)

- **Sem vidIQ, sem navegador** (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); **não use `SendMessage` nem
  `send_message`**; sem commit, sem `regie`, sem gastar crédito pago.
- Site que recusa leitura automática (403, 418, captcha, verificação de robô, conexão recusada) **não se contorna**: nem por `curl`, nem por outro
  cliente, nem trocando cabeçalho. Marque "NÃO CONFERIDO (site recusou)", com a URL, e siga. Leia o robots.txt antes do primeiro pedido a um site
  novo. Cópia arquivada (web.archive.org) não vale como fonte.
- Leia na origem e cite o trecho literal. O WebFetch resume por modelo: a citação que vier só dele leva **[W]**. Prefira baixar a página com `curl`
  (User-Agent do canal: `AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`, um pedido por vez) e procurar o trecho no arquivo.
- Fonte de segunda mão (a Wikipédia, blogs, o Instagram, o TikTok, o Reddit do resumo do Lucas) só serve para achar a primária.
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`), em `pautas/australia-animais/_trabalho/scripts/` (prefixo `a_` ou `b_`); os
  baixados em `midia/australia-animais/fontes/a/` ou `b/` (fora do git). Nada pessoal em arquivo nenhum.
- Os vereditos: **CONFIRMADO**, **EM PARTE**, **NÃO CONFERE**, **NÃO CONFERIDO**. Cada fato com o trecho, a URL, a data da leitura e, se for número,
  a conta.

## A saída

- O leitor A grava `pautas/australia-animais/_trabalho/fatos-a.md`; o B, `fatos-b.md`. No topo: o resumo dos vereditos e o NÃO CONFERIDO para a Sala
  ler no navegador do app (com a URL).
- Ao terminar, responda à Sala com o caminho, os 5 fatos mais fortes para o vídeo e o NÃO CONFERIDO.
