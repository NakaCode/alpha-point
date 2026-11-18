# Pedido: o cético da reembalagem, um por vídeo (18/11/2026)

Você é o cético da embalagem (título e miniatura) de **um** vídeo já publicado do Alpha Point; o despacho diz qual, e onde está a história da
embalagem dele. Leia primeiro `out/_reembalagem/2026-11-18/decisoes-lucas.md` (o pedido do Lucas, os 4 vídeos e as regras).

## O seu trabalho, nas palavras do Lucas

"Única coisa que os céticos devem decidir é qual dos títulos é mais clicável e me sugerir outros, mas sem desconsiderar os meus."

- Você ranqueia **pelo clique** todos os títulos, os do Lucas e os seus, e sugere outros. **Nenhum título do Lucas sai da lista**, por pior que você
  o ache: ele recebe a nota e o porquê, como os outros.
- **A concorrência não conta.** Nada cai por colisão com vídeo de outro canal, e você não busca colisão (é decisão dele, de hoje).
- **O vídeo está publicado e não muda.** Você não sugere título que prometa o que o vídeo não entrega. Se um título do Lucas promete demais, você diz
  isso numa nota, sem tirá-lo.
- **O mesmo nas miniaturas:** as do Lucas (a que está no ar e as que foram ao teste) entram no ranking, e você propõe **2 novas**.
- Ao ranquear, pense em onde a pessoa vê o título: a maior parte das poucas views desses vídeos veio da busca (de 31 % a 44 %), e o resto da página
  inicial e dos sugeridos. Nos dois lugares, ela vê o título e a miniatura juntos e decide.

## Os números (prints do Studio que o Lucas mandou)

- **09/11** (aba Reach, desde a publicação): LA 754 impressões, CTR 1,1 %, busca 30,8 % das views; Panamá 991, 1,8 %, busca 41,7 %; Peru 115,
  0,9 %, busca 44,4 %. O Atlântico teve 4 impressões nos 2–3 primeiros dias (01/11). O YouTube quase parou de entregar os três: +12, +27 e +45
  impressões em 8 dias.
- **18/11** (a lista do Studio): views LA 17, Panamá 46, Peru 11, Atlântico 9.
- **O vídeo 5** (`big-sur`), o único que andou: CTR 4,4 % nos 2 primeiros dias e 364 views em 10 dias. O Lucas, 17/11: "Um adendo no Big sur é que
  as views vieram de pesquisa". Para a pauta do vídeo 8, ele pediu hoje "Algo chamativo, não necessariamente que vá ganhar em pesquisa, mas em
  curiosidade".

## O que ler

- **O vídeo como foi ao ar:** `roteiros/<proj>/roteiro-narrador.md` (o texto aprovado: o título se paga nele, e a abertura é o que a pessoa ouve
  depois do clique).
- **A história da embalagem dele:** os arquivos que o despacho lista, a pasta `roteiros/<proj>/miniatura/` (os relatos e as bancas; olhe os JPG de
  1280 com a ferramenta de ler arquivo) e `git log --oneline -- roteiros/<proj>/` (só leitura).
- **O aprendizado do canal:**
  - `marca/embalagem.md` (os moldes, as regras e a receita da miniatura);
  - `pautas/2026-11-08-canais-referencia.md` (os canais de referência e as escolas de miniatura, §2);
  - os testes dos leitores a frio: `out/_pautas/video-7-lesoto/teste-leitores.md`, `out/_pautas/video-7-rio-columbia/teste-leitores.md` e o de
    hoje, `out/_pautas/video-8-arizona-strip/teste-leitores.md`;
  - o Big Sur: `roteiros/big-sur/decisoes-lucas.md`;
  - as miniaturas de hoje no estilo das referências: `roteiros/arizona-strip/miniatura/` e `roteiros/australia-animais/miniatura/` (os `RELATO.md`
    e os JPG de 1280).

## A saída: `out/_reembalagem/2026-11-18/<proj>/cetico.md`

1. **Os títulos do Lucas:** o que está no ar e todo título que ele aprovou ou levou ao Test & Compare, cada um com a fonte (arquivo e linha, ou o
   commit). **As miniaturas dele**, com o arquivo de cada uma (a que está no ar é a da caixa na tabela do `decisoes-lucas.md`).
2. **De 3 a 5 títulos novos**, em inglês, cada um com a frase do roteiro que o paga e o número de caracteres.
3. **O ranking do clique:** todos os títulos (os do Lucas marcados), com a nota de 0 a 10 e o porquê numa linha; o mais clicável; e o trio que você
   levaria ao Test & Compare (quem decide é o Lucas).
4. **As miniaturas:** o ranking das do Lucas, com a nota e o porquê, e **2 conceitos novos** no estilo das referências: a palavra da caixa (de 1 a 3
   palavras), o recorte do mapa, o que fica vermelho e o que fica ciano, as setas, e o que a miniatura mostra que o título não diz. Com detalhe
   bastante para um desenhista desenhar sem voltar a você (o pedido dele é `out/_reembalagem/2026-11-18/pedido-miniaturas.md`).
5. **Para os leitores:** um parágrafo em inglês, de 4 a 6 frases, com o que o vídeo conta, sem os títulos (é a etapa em que os leitores julgam se
   cada título é honesto).

Ao terminar, responda à Sala em até 6 linhas: o caminho, o título mais clicável, o trio, as 2 miniaturas novas (a palavra de cada uma) e o que ficou
fraco.

**Lembretes:** não use `SendMessage` nem `send_message`; sem web, sem vidIQ, sem navegador; sem commit; não grave nada fora de
`out/_reembalagem/2026-11-18/<proj>/`; Python só num arquivo (`python -X utf8 -B <arquivo>.py`), nunca `python -c`.
