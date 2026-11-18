# Pedido: o gerador de pautas do Brasil para o vídeo 8 (18/11/2026)

Você é um subagente da Sala de controle do canal Alpha Point (raiz: `C:\projetos\alpha-point`), um canal do YouTube de geografia e geopolítica em
inglês dos EUA, para quem fala inglês em qualquer país, com distribuição americana. As notas são em português; títulos, ganchos e termos de busca, em
inglês dos EUA. Leia antes `out/_pautas/video-8/pedido-estrutural.md` (o canal e as regras) e `out/_pautas/video-8/pedido-estrutural-r3.md` (a régua
nova do Lucas, que vale aqui inteira), e o topo de `pautas/2026-11-18-video-8-brasil.md` (o pedido do Lucas e o que a Sala já viu).

## O pedido do Lucas

18/11/2026, no chat da Sala: **""Por que o Brasil se tornou tão grande?" "Por que o Brasil é tão rico em biomas" algo assim, sobre o Brasil"**. E,
à pergunta se o Brasil entrava no lugar do Grand Canyon: "Brasil no lugar".

## A tarefa

1. **As duas sementes**, cada uma com o nosso ângulo:
   - **Por que o Brasil ficou tão grande.** O tema é clássico e tem vídeos grandes (History Matters, 1,1 mi; o Geoff, 673 mil), e o enxame está nele
     agora (três vídeos de canais minúsculos nos últimos 4 dias, com títulos quase iguais: "How Did Brazil Get So Big?", "Why Is Brazil So
     Ridiculously Big", "Why Is Brazil So Big? (It Was Supposed to Be a Slice)"). Pela régua, o antigo não derruba, mas **o título igual e o ângulo
     de todos derrubam**: ache um ângulo e um título que sejam nossos (por exemplo, o contraste com um lugar conhecido, que é o que estoura em canal
     pequeno agora: a América espanhola que se partiu em vários países e o Brasil que não se partiu; o Brasil maior que os EUA contíguos; a linha de
     Tordesilhas contra a divisa de hoje), com uma **medida nossa de dado aberto** (por exemplo, quanto do Brasil de hoje fica a oeste da linha de
     1494, medido em mapa).
   - **Por que o Brasil é tão rico em biomas.** Ache o paradoxo que faz clicar (um semiárido ao lado da maior floresta tropical; a chuva da Amazônia
     que cai no Sudeste; o maior alagado do mundo; a savana mais rica do mundo sumindo), com uma medida nossa (MapBiomas, IBGE, INPE, NASA), sem cair
     no tema do momento (a COP, o desmatamento da semana).
2. **Outros candidatos do Brasil "algo assim"**: geografia ou geopolítica que explique um "por quê" grande do Brasil, com curiosidade para quem nunca
   pensou no Brasil. Até **20 candidatos** ao todo. Já se pensou e **ficam fora**: a Praia do Cassino (é o vídeo 6, parado depois da narração); São
   Paulo e a Serra do Mar e Manaus sem estrada (as opções de 07/11, `pautas/2026-11-07-video-6-brasil-opcoes.md`: leia, e só os traga de volta com
   ângulo novo e dizendo por quê).
3. **Desenvolva os 6 melhores**: o título (≤ 65 caracteres) e 2 variantes; o chamariz em uma frase; o paradoxo; o gancho em inglês (3 frases, até
   ~45 palavras, sem a resposta); 4 a 6 fatos com a URL lida na origem e a data; a medida nossa (a fonte do dado e a licença); 3 atos em uma linha
   cada; a miniatura no estilo das referências do Lucas (`marca/embalagem.md` §3: relevo amarelo, água azul, o assunto em vermelho, o secundário em
   ciano, a caixa preta ou amarela com 1 a 3 palavras, setas brancas grossas); a concorrência que você achou (os vídeos grandes antigos e os
   recentes, pelo buscador da web e pela página `/watch`, um pedido por vez, com `out/_pautas/video-8/_trabalho/yt_meta.py`); os riscos; e a nota de
   0 a 10 pela régua nova.
4. **O top 3**, na ordem, com o que a Sala tem de conferir na onda do momento (os termos de busca exatos).

## Regras (todas valem)

- **Sem vidIQ, sem navegador** (nenhuma ferramenta `mcp__Claude_Browser__*` nem `mcp__claude-in-chrome__*`); **não use `SendMessage` nem
  `send_message`**; sem commit, sem `regie`, sem gastar crédito pago.
- WebSearch e WebFetch à vontade. Não busque páginas de resultado do YouTube (`/results` está vetado no robots.txt do YouTube): use o buscador da web
  para achar títulos, e a `/watch` para ler um vídeo. Leia o robots.txt antes do primeiro pedido a um site novo.
- Site que recusa leitura automática (403, 418, captcha, verificação de robô) não se contorna: nem por `curl`, nem por outro cliente, nem trocando
  cabeçalho. Marque "NÃO CONFERIDO (site recusou)" e siga. Cópia arquivada (web.archive.org) não vale como fonte. O WebFetch resume por modelo: o
  trecho que vier só dele leva **[W]**.
- Python sempre num arquivo (`python -X utf8 -B <arquivo>.py`), em `out/_pautas/video-8-brasil/_trabalho/`; dados brutos grandes (mais de 5 MB) em
  `midia/_pautas/video-8-brasil/` (fora do git). Nada pessoal em arquivo nenhum.

## A saída

`out/_pautas/video-8-brasil/gerador.md`. Ao terminar, responda à Sala com o caminho, o top 3 (título, nota, o chamariz e a concorrência de cada um) e
os termos de busca que a Sala deve conferir na onda do momento.
