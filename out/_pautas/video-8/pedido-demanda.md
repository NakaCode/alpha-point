# Pedido: a procura de agora, no vidIQ (vídeo 8, 17/11/2026)

Você é um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`). Notas em português; títulos e buscas em inglês.

## Por quê

O Lucas, dono do canal, no chat da Sala (17/11/2026, ~20:3x): "Quero que me trata boas pautas, pautas com potencial real". O canal é pequeno
(faceless, geografia e geopolítica, em inglês dos EUA, para quem fala inglês em qualquer país; vídeos de 13 a 16 min). O que carrega um canal pequeno
é tema com procura provada AGORA, de preferência provada em canal pequeno. Sua tarefa é medir essa procura com dados, não com palpite.

Um outro agente gera candidatos sem vidIQ (`out/_pautas/video-8/estrutural.md`, ainda em andamento): não espere por ele nem leia o que ele escreve.

## O teto do vidIQ

O Lucas autorizou **até 500 créditos** para esta busca de pautas inteira (resposta "Até 500 (Recomendado)", 17/11/2026). **Você usa no máximo 300**;
o resto fica para a colisão de título dos finalistas e o cético. `vidiq_outliers` e `vidiq_youtube_search` custam 5 créditos por chamada; confira o
custo de qualquer outra ferramenta na descrição dela antes de chamar. Leia o saldo (`vidiq_balance`, 0 crédito) no começo e no fim, e anote cada
chamada (ferramenta, parâmetros principais, créditos).

## O que medir

1. **Os estouros recentes de geografia e geopolítica em inglês**, vídeo longo (`contentType: long`, `language: en`), nos últimos 3 meses (e alguns em
   6 meses), com `maxSubscribers` por volta de 100 mil (canal pequeno) e algumas buscas sem esse teto, para comparar. Famílias de palavra-chave
   (escolha e varie): why nobody lives / why is this part of X empty; why [country/state] is…; borders and exclaves; rivers, lakes, dams and water
   treaties; islands; coasts; deserts; mountains; cities in odd places; "most important" / "collapsing" / "impossible to invade"; geopolitics explained
   by geography (straits, ports, chokepoints, resources); Canada; Australia; U.S. states; Alaska; Hawaii; Mexico; Greenland; the Arctic.
2. **"Mais como este"** (`seedVideoId`) a partir das referências que o Lucas trouxe hoje (ache o ID com `vidiq_youtube_search`):
   - The Geo Lens (137 inscritos): "Why Almost Nobody Lives on Washington's Outer Coast" (43 mil views em 7 dias);
   - Geography by Geoff: "Why America's Most Important State Is Collapsing" (1,7 mi).
3. **Os canais de referência**, numa ou duas chamadas com `channelIds` (até 50; handle serve), últimos 3 meses: Geography by Geoff, The Geo Lens, Geography
   Effect, Vodar, Big Systems, TheLanguageMap, Planet B, OBF, Glore, Across The Globe, RealLifeLore, Casual Earth, Nation Lines, The Hidden Provinces,
   Astrum Earth, Armchair Engineer, GeoZyra, Half as Interesting, Wendover Productions, Johnny Harris. (Se algum handle não resolver, siga sem ele.)

## O que entregar: `out/_pautas/video-8/demanda.md`

- **A tabela dos ~40 estouros mais úteis**: título, canal, inscritos, views, a nota de estouro (breakout), data, duração, URL.
- **Os padrões**, com contagem: famílias de assunto, formatos de título, palavras de miniatura (se der para ver; `vidiq_get_images` só se couber no teto).
- **O saturado**: assunto ou ângulo com 3 ou mais vídeos em 2026 (o enxame de canais minúsculos que copia o outlier em dias). Liste com as datas.
- **As brechas**: procura provada com pouca oferta; o "vizinho" de um estouro (a mesma família, outro lugar que ninguém fez).
- **12 sugestões de assunto concretas**, cada uma com as linhas da tabela que a sustentam, um título de trabalho em inglês (≤ 70 caracteres) e o risco
  de colisão que você viu.
- **Os créditos**: o saldo antes e depois, e a lista das chamadas.

## Regras (todas valem)

- Sem navegador (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); não use `SendMessage` nem `send_message`; sem commit,
  sem `regie`, sem gastar outro crédito pago.
- WebSearch e WebFetch servem para contexto; não busque páginas de resultado do YouTube por WebFetch (`/results` está vetado no robots.txt).
- Site que recusa leitura automática não se contorna (nem `curl`, nem outro cliente, nem trocando cabeçalho).
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`), nunca pela entrada. Scripts e respostas brutas em `out/_pautas/video-8/_trabalho/demanda/`.
- Nada pessoal em arquivo nenhum.

Ao terminar, responda à Sala com: o caminho do relatório, os créditos gastos (antes → depois), as 5 sugestões mais fortes (título e a prova em uma
linha) e o que está mais saturado.
