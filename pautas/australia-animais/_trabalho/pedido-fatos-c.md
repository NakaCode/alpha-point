# Pedido da Sala: as últimas leituras antes do roteiro do vídeo 8 (`australia-animais`) · 18/11/2026, ~15:5x

**Quem:** um leitor Sonnet, esforço xhigh, despachado pela Sala de controle. **O que entrega:** `pautas/australia-animais/_trabalho/fatos-c.md`, com
as leituras abaixo, os scripts em `pautas/australia-animais/_trabalho/scripts/c_*.py` e as cópias em `midia/australia-animais/fontes/c/` (fora do git).

## O contexto

O vídeo 8 é "por que a Austrália tem tantos animais perigosos", no ângulo do paradoxo: muito veneno, poucas mortes. A pauta v2 está aprovada
(`pautas/2026-11-18-video-8-australia-pauta.md`), e o roteiro começa agora. O teste dos leitores a frio (`out/_pautas/video-8-australia/teste-leitores.md`,
"O que faltou, para o roteiro") pediu coisas que a base de fatos ainda não tem com fonte lida. A base está em `pautas/australia-animais/_trabalho/fatos-a.md`
e `fatos-b.md` (leia o que já existe antes de buscar, para não repetir); as leituras da Sala depois da pauta estão no registro
`pautas/2026-11-18-video-8-australia.md`. O narrador fala inglês dos EUA para quem fala inglês em qualquer país (só milhas).

## As leituras (em ordem de importância)

1. **Por que as 35 mortes por cobra não são 350: os primeiros socorros e o soro** (Mia, Dale e Tunde). Por fonte oficial ou primária:
   - **a bandagem de pressão e a imobilização** (pressure immobilisation): o que a orientação oficial da Austrália manda fazer numa picada de cobra, nas
     palavras dela. Fontes boas: o Australian Resuscitation Council (a diretriz de envenenamento), o healthdirect (do governo australiano), um
     departamento estadual de saúde;
   - **quem a criou e quando** (Struan Sutherland e colegas, *The Lancet*, 1979, pelo resumo no Europe PMC ou no PubMed), e o que o resumo diz que ela faz
     (retardar o veneno; não "curar");
   - **o soro**: que a Austrália faz soro para as suas cobras perigosas (desde 1930, já na base: `fatos-b.md`, item 14, Winkel 2006 [R]); se uma fonte
     oficial (a fabricante, CSL Seqirus, ou o governo) diz para quais cobras há soro hoje, e se há um polivalente;
   - **o que uma fonte diz sobre por que tão pouca gente morre** (a medicina, a ambulância, o soro), nas palavras dela, para o roteiro dizer "part of why",
     nunca "the reason".
2. **A abelha europeia, trazida de fora** (a Mia: "seria um bom momento"). Por fonte oficial:
   - **o ano em que a abelha-europeia (Apis mellifera) chegou à Austrália** (o departamento de agricultura federal, o de um estado, o CSIRO, a AgriFutures);
   - **se as mortes e as alergias graves por picada de abelha na Austrália são da abelha-europeia** (a ASCIA, a sociedade australiana de alergia; um estudo
     de anafilaxia fatal na Austrália, pelo resumo no Europe PMC). A pauta proíbe "Most bee deaths come from European honeybees" antes desta leitura
     (§5): diga se uma fonte sustenta a frase, e em que palavras;
   - **a vespa europeia** (Vespula germanica): quando chegou (se uma fonte oficial disser), porque o código X23 junta abelhas e vespas.
3. **O ano do soro do redback** (1955 ou 1956; a pauta usa "in the 1950s" até a leitura): o Museums Victoria, o *Australian Prescriber*, a CSL ou um
   artigo, com a frase da fonte.
4. **Quem são os outros 8 mortos** (35 + 42 = 77 de 85; Mia, Arjun e Tunde): o ABS deu X25 = 6 e X26 = 2 (`fatos-b.md`, a tabela do §1.1). A base pôs
   "carrapatos, formigas" e "água-viva etc." como glosa do leitor. Leia **o que cada código cobre** na CID-10 (o navegador da OMS, icd.who.int, ou a página
   do ABS que lista os códigos), para o roteiro dizer quem são "nas palavras do código". Se uma fonte oficial australiana nomear a formiga jack jumper ou o
   carrapato-da-paralisia como causa de morte por anafilaxia (a ASCIA, o governo da Tasmânia, um resumo), traga a frase.
5. **Uma régua de fora: a Índia por habitante** (Dale e Tunde pediram "poucos comparado a quê?"). A Sala já leu a ficha da OMS "Snakebite envenoming"
   (datada de 17/09/2026; o registro, "Os consertos dos leitores"): "Around 81 410 to 137 880 people die each year because of snake bites"; "as many as 1.2
   million Indians died from snakebite envenoming between 2000–2019 (average of 58 000/year)". Faça:
   - ache o estudo que a OMS cita para a Índia (Suraweera et al., *eLife*, 2020, o Million Death Study; a licença do texto) e leia o resumo;
   - a população da Índia de 2000 a 2019 (a API do Banco Mundial, `SP.POP.TOTL`, ou o UN WPP), e a taxa por 100.000 por ano;
   - a da Austrália, com o que a base já tem: X20 = 35 mortes em 2016–2025 (o X20 inclui lagartos venenosos), sobre as 257,9 milhões de pessoas-ano da
     ERP do ABS (`scripts/b_medida.py` e `scripts/p_contas.py`);
   - a razão, **com as ressalvas ditas** (períodos diferentes; inquérito de autópsia verbal contra registro de óbito). A pauta (§4.6) pôs a Índia fora
     porque as medidas são diferentes: diga se a conta se sustenta assim mesmo, e numa frase segura em inglês; e diga a frase segura **sem** a conta (só a
     OMS: o intervalo do mundo e os ~58.000 da Índia).
6. **(Só se der sem bloqueio) O AIHW**, *Injury in Australia*: as internações por mordida e picada de animal (a pauta usa a tabela de Welton, "EM PARTE",
   "about 12,000 times" das aranhas). O AIHW recusou o leitor da base (Cloudflare): leia o robots.txt e tente uma vez; se recusar, pare e anote, e a Sala
   lê pelo navegador do app.

**Para cada leitura:** a frase exata da fonte, entre aspas; a URL; a data da leitura; quem publica; a licença, se o texto puder ir à tela; o sha256 da
cópia; o grau (FIRME, [R] para só o resumo, EM PARTE, NÃO CONFERIDO); **a frase segura em inglês** para o roteiro (no tom da pauta: conversa, segunda
pessoa onde couber, a fonte na tela e na voz só o que precisa de dono); e **o que não afirmar**. No fim, uma tabela-resumo e a lista do que ficou sem
leitura (com o porquê).

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use navegador (nenhuma ferramenta
  `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`), vidIQ, banco pago nem crédito.
- **Antes de cada site, leia o robots.txt**, e respeite-o. **Um pedido por vez**, com o User-Agent do canal (o molde: `scripts/a_baixar.py`,
  `AlphaPoint-pauta/1.0 (contato.naka@hotmail.com)`). Para a API do Europe PMC, o molde é `scripts/a_epmc_q.py`.
- **Site que recusa leitura automática (403, captcha, Cloudflare, verificação de robô) não se contorna:** nem por outro cliente, nem trocando cabeçalho,
  nem pela cópia arquivada (a regra da cópia arquivada só vale para página oficial do Estado do Alasca). Pare naquele site, anote, e siga com a próxima
  fonte; a Sala lê pelo navegador do app.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `pautas/australia-animais/_trabalho/fatos-c.md`, em `pautas/australia-animais/_trabalho/scripts/c_*.py` e em
  `midia/australia-animais/fontes/c/`. Outro agente faz a medida do Censo ao mesmo tempo (`c_censo_*.py`, `medida-censo.md` e
  `midia/australia-animais/fontes/c/censo/`): não mexa nos arquivos dele.
- Grave o resultado no disco antes de responder. **O relato** (curto, em português): o que leu e o grau de cada item; as frases seguras; o que não abriu;
  quantos pedidos fez e a quais hosts.
