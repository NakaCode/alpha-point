# Pedido: o cético de uma pauta do vídeo 8 (17/11/2026)

Você é um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`). Notas em português; títulos, ganchos e buscas em
inglês dos EUA. A mensagem que despachou você diz QUAL pauta é a sua (o `slug`, o título de trabalho e onde está o que já se sabe dela).

## O contexto

- O canal: faceless, "Geografia e geopolítica", narração e tela em inglês dos EUA, para quem fala inglês em qualquer país (distribuição americana);
  vídeos de 13 a 16 min, narrativa calma, fontes na tela, mapas com geometria real. Publicados: Los Angeles, a Zona do Canal do Panamá, o Peru e a
  água, o ponto mais fundo do Atlântico (não andou: título repetido de outro canal), Big Sur (o melhor: 364 views em 10 dias, quase todas vindas da
  PESQUISA do YouTube) e o tratado do rio Columbia (publicado hoje).
- O Lucas, dono do canal, hoje (17/11/2026): "Quero que me trata boas pautas, pautas com potencial real"; "Um adendo no Big sur é que as views vieram
  de pesquisa". Em 09/11: "quero arriscar em um lugar mais conhecido como canadá ou austrália, mas com nossa versão...".
- Duas buscas já rodaram: `out/_pautas/video-8/demanda.md` (o vidIQ: os estouros de 2026, o saturado, as brechas e o volume de busca) e
  `out/_pautas/video-8/estrutural.md` (35 candidatos, 12 desenvolvidos, com fatos lidos na origem). Leia as partes que a mensagem aponta.
- **A régua de "potencial real"** (da Sala): (1) o nome do lugar é buscado no YouTube (a calibração: "big sur" ≈ 13,3 mil buscas/mês, concorrência 40);
  (2) há prova recente de interesse no assunto (um curto ou longo que estourou em 2026, de preferência em canal pequeno); (3) o vídeo longo bem
  feito sobre o ângulo ainda não existe, ou está com canal minúsculo; (4) o paradoxo cabe em 3 frases e se vê no mapa da miniatura; (5) a geografia
  explica o porquê (não só uma lei ou uma notícia); (6) temos uma medida nossa, de dado aberto, que ninguém mostrou.
- **O enxame:** canais minúsculos copiam o outlier em dias; o molde "Why (Almost) Nobody Lives…" tem 103 vídeos em 2026. O título repetido derrubou o
  vídeo do Atlântico: colisão (título igual ou quase igual em inglês nos últimos 12 meses) é risco de primeira linha, e um vídeo antigo com muitas views
  sobre o mesmo ângulo também pesa, porque ocupa a busca.
- **O estilo de miniatura** que o Lucas quer (prints em `out/rio-columbia/_tmp/miniatura/referencias/`; o modelo feito em
  `roteiros/rio-columbia/miniatura/miniatura-A-1280.jpg`): o mapa é o protagonista, relevo amarelo, água azul, o assunto em vermelho, um destaque em
  ciano, uma ou duas palavras numa caixa preta, setas brancas grossas.

## A sua tarefa: tentar derrubar a pauta, com prova

1. **Os fatos que seguram o paradoxo e o gancho** (4 a 8): leia cada um na fonte primária (órgão oficial, lei, tratado, censo, USGS, relatório do
   Congresso, artigo científico), com a URL e a data de leitura. O que não conseguir ler fica NÃO CONFERIDO, com o motivo. Se o paradoxo for falso,
   exagerado ou depender de uma palavra forte demais ("every", "never", "only"), diga e proponha a frase verdadeira.
2. **A colisão, no vidIQ** (`vidiq_youtube_search`, 5 créditos por chamada; **teto de 30 créditos para você**; o saldo com `vidiq_balance`, de graça,
   antes e depois): o título e o ângulo nos últimos 12 meses (`publishedAfter` 2025-11-17) e também sem data, por relevância e por views. Liste os 5
   vídeos mais próximos (título, canal, inscritos se souber, views, data, duração) e diga se colide. Pode ler a página pública `/watch` de um vídeo
   (não `/results`), um pedido por vez, para conferir data e views.
3. **O potencial real**, pela régua acima: a busca (os números de `demanda.md`, ou "não medido"), a prova de interesse, o lugar vago no vídeo longo, o
   quão rápido o enxame chega, e se o assunto sustenta 13 a 16 min de narrativa calma em 3 atos sem encher linguiça.
4. **A nossa versão:** a medida própria é possível com dado aberto? Se for rápido, faça uma conta preliminar (script em
   `out/_pautas/video-8/_trabalho/cetico-<slug>/`) e diga o número.
5. **O material:** há mapa com geometria real, satélite aberto (NASA/USGS/Landsat) e foto de acervo livre (Commons, NARA, USGS, NPS, NOAA) para 13 a 16 min?
6. **O título e o gancho que você defende:** o melhor título único (≤ 65 caracteres, com o nome buscado do lugar) e 2 alternativas; o gancho em inglês
   (3 frases, até ~45 palavras, sem dar a resposta); a palavra da miniatura e o que fica vermelho e ciano.
7. **O veredito:** DE PÉ, DE PÉ COM AJUSTE ou DERRUBADO, com a nota de 0 a 10 na escala dura ("na dúvida, derrube"; as melhores pautas do canal
   tiveram 6,5 a 7,5), e os pontos K1, K2… com GRAVE, MÉDIO ou LEVE.

## Regras (todas valem)

- Sem navegador (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); não use `SendMessage` nem `send_message`; sem commit, sem
  `regie`, sem gastar outro crédito pago (ElevenLabs, MapTiler). vidIQ só até 30 créditos.
- Site que recusa leitura automática (403, captcha, verificação de robô) não se contorna: nem por `curl`, nem por outro cliente, nem trocando cabeçalho.
  Marque NÃO CONFERIDO e siga. API de acervo (Commons, NARA) só com o User-Agent do canal, um pedido por vez.
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`), nunca pela entrada.
- Nada pessoal em arquivo nenhum.

## A saída

`out/_pautas/video-8/cetico-<slug>.md`, com o veredito e a nota no topo, a tabela dos fatos (fato, fonte, data, CONFERE / NÃO CONFERE / NÃO CONFERIDO),
a colisão, o potencial, a medida, o material, o título e o gancho, e os K. Ao terminar, responda à Sala com o caminho, o veredito, a nota, o título que
você defende e o ponto mais grave.
