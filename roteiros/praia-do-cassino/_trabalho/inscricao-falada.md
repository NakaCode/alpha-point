# A inscrição falada do Cassino (vídeo 6, `praia-do-cassino`): onde cai e a frase

Só proposta, para a Sala levar ao Lucas. Nada foi regravado, editado nem gasto. A conta está em
`_trabalho/inscricao-falada-calculo.py` (só lê; roda com `python -I -X utf8 -B`). Regra lida: `marca/voz.md` §3 e `marca/cta.md` §1, §5 e §6.

## 1 · Como contei

- **"Parágrafo N" é o `trecho` N da narração** (a cópia para a voz tem 21 parágrafos, um pedido à ElevenLabs cada; o texto da
  narração é idêntico ao de `out/praia-do-cassino/roteiro.md`, conferido parágrafo a parágrafo). É a numeração do Chuí
  (8, 9, 11 e 21): o Chuí está em 3:52 (parágrafo 8), 4:44 (9), 6:04 (11) e 12:57 (21).
- **O JSON inclui a cauda.** `audio.duracaoSec` = 832,2 s = fala + os 20 s sem voz (o segmento 41, `pausa`, com `motivo`;
  `tratamento_canal.cauda_tela_final`: de 812,2 s a 832,2 s). **Tirei a cauda** tomando como base o fim da última fala (segmento
  40): **812,2 s** (= 832,2 − 20). As pausas de 0,25 s entre parágrafos ficam dentro dos tempos.
- **A janela, sobre a fala:** 35 % = 284,3 s (4:44) e 60 % = 487,3 s (8:07). Para conferência, a mesma janela sobre o vídeo com a
  cauda (o `cta.md` §6 diz "duração do vídeo", e o exemplo dele conta a cauda dentro dos 10:00): 291,3 s (4:51) a 499,3 s (8:19).
- Os atos, nos tempos reais da narração (a pauta os estimou diferente): gancho = 1–3 (0:00–0:43); ato 1 = 4–7 (0:43–3:27);
  ato 2 = 8–12 (3:27–7:14); ato 3 = 13–17 (7:14–10:56); ato 4 = 18–20 (10:56–12:55); fecho = 21 (12:55–13:32).

## 2 · Os parágrafos

| nº | parte | início | fim | dur. (s) | % início | % fim (fala) | % fim (c/ cauda) | caracteres | fim na janela |
|---|---|---|---|---|---|---|---|---|---|
| 1 | gancho | 0:00,0 | 0:16,2 | 16,2 | 0,0 | 2,0 | 1,9 | 264 | |
| 2 | gancho | 0:16,4 | 0:37,1 | 20,7 | 2,0 | 4,6 | 4,5 | 320 | |
| 3 | gancho (assinatura) | 0:37,4 | 0:42,8 | 5,4 | 4,6 | 5,3 | 5,1 | 101 | |
| 4 | ato 1 | 0:43,1 | 1:16,7 | 33,6 | 5,3 | 9,4 | 9,2 | 542 | |
| 5 | ato 1 | 1:16,9 | 2:01,3 | 44,4 | 9,5 | 14,9 | 14,6 | 771 | |
| 6 | ato 1 | 2:01,6 | 2:37,4 | 35,8 | 15,0 | 19,4 | 18,9 | 632 | |
| 7 | ato 1 | 2:37,7 | 3:26,6 | 49,0 | 19,4 | 25,4 | 24,8 | 798 | |
| 8 | ato 2 (Chuí) | 3:26,9 | 4:00,6 | 33,7 | 25,5 | 29,6 | 28,9 | 567 | |
| 9 | ato 2 (Chuí) | 4:00,8 | 4:49,2 | 48,4 | 29,6 | **35,6** | 34,8 | 794 | **sim** (só na fala) |
| 10 | ato 2 | 4:49,4 | 5:17,6 | 28,2 | 35,6 | 39,1 | 38,2 | 486 | sim |
| 11 | ato 2 (Chuí) | 5:17,9 | 6:34,7 | 76,9 | 39,1 | 48,6 | 47,4 | 1263 | sim |
| 12 | ato 2 | 6:35,0 | 7:14,1 | 39,1 | 48,6 | 53,4 | 52,2 | 671 | sim |
| 13 | ato 3 | 7:14,4 | 7:43,6 | 29,3 | 53,5 | 57,1 | 55,7 | 498 | sim |
| 14 | ato 3 | 7:43,9 | 8:56,3 | 72,4 | 57,1 | 66,0 | 64,4 | 1176 | |
| 15 | ato 3 | 8:56,5 | 9:39,3 | 42,8 | 66,1 | 71,3 | 69,6 | 718 | |
| 16 | ato 3 | 9:39,6 | 10:19,6 | 40,0 | 71,4 | 76,3 | 74,5 | 654 | |
| 17 | ato 3 | 10:19,8 | 10:55,6 | 35,8 | 76,3 | 80,7 | 78,8 | 587 | |
| 18 | ato 4 | 10:55,9 | 11:45,0 | 49,1 | 80,7 | 86,8 | 84,7 | 815 | |
| 19 | ato 4 | 11:45,2 | 12:11,5 | 26,2 | 86,8 | 90,1 | 87,9 | 434 | |
| 20 | ato 4 | 12:11,7 | 12:54,9 | 43,2 | 90,1 | 95,4 | 93,1 | 744 | |
| 21 | fecho (Chuí) | 12:55,2 | 13:32,2 | 37,0 | 95,4 | 100,0 | 97,6 | 642 | |

Só cinco fins de parágrafo caem na janela (9 a 13). O 9 só cai na janela medida sobre a fala; sobre o vídeo com a cauda ele fica
0,25 ponto abaixo (34,8 %, uns 2 s antes de 291,3 s).

## 3 · Os lugares: quais servem

| fim do… | em | o que fecha, e o que abre | veredito |
|---|---|---|---|
| **parágrafo 9** (Chuí) | 4:49,2 · 35,6 % | fecha o bloco do nome ("Same sand, in other words. The argument is over the name on it."); o seguinte abre com "Back to the ruler, then.", a própria fala diz que é a volta ao assunto | **serve, o melhor.** Fronteira de bloco explícita. Não termina em número, citação nem documento (as duas paráfrases atribuídas, do secretário e de Rio Grande, estão 2 e 3 frases antes). A frase seguinte já é a "volta ao assunto", então a frase nova não precisa de cauda (poupa palavras). É da lista do Chuí. Defeito: a margem de 35 % (abaixo) |
| parágrafo 10 | 5:17,6 · 39,1 % | fecha em "The state's tourism website says 158." e abre com "The famous explanation for the gap is the coastline paradox." | **não.** Termina no número-herói (o 158) e o paradoxo é a resposta imediata a ele |
| parágrafo 11 (Chuí) | 6:34,7 · 48,6 % | fecha o teste da régua ("On this coast, it barely works."); abre com a reta | **não, por pouco.** "On this coast, it barely works." é a virada do ato 2, a frase-chave da pauta, e 4 frases antes vem o "less than two percent apart". Vantagem do Chuí, mas é o parágrafo mais caro (1.263 caracteres) |
| parágrafo 12 | 7:14,1 · 53,4 % | a única fronteira de ato dentro da janela (ato 2 para ato 3) | **não.** Termina em "So the strange thing about this beach isn't the number. It's the coast.", a frase-chave do ato, que o parágrafo seguinte responde com a pergunta ("So what keeps a coast this long this straight?"). A frase no meio corta o gancho do ato 3: colada à frase-chave, e o 132/136 do número-herói abre o mesmo parágrafo |
| **parágrafo 13** | 7:43,6 · 57,1 % | fecha a definição ("A barrier, because the sea built it…"), antes da resposta, que abre o 14 ("The waves do the drawing.") | **serve, a reserva segura.** Meio do ato 3, sem número, citação nem frase-chave na ponta, com margem larga nas duas bases (57,1 % e 55,7 %). Defeitos: não é fronteira de ato, só de bloco (o palco e o mecanismo), a pergunta de 7:14 fica aberta enquanto o canal pede inscrição, e não é parágrafo do Chuí |

A margem do 9. A frase começa em 4:49,2 e, com a frase nova (~4,9 s), a fala vai a 817,1 s e o vídeo a 837,1 s:
- sobre a fala, a frase começa em 35,4 % (o 35 % é 286,0 s, 3,2 s de folga) e termina em 36,0 %;
- sobre o vídeo com a cauda, começa em 34,5 % (o 35 % é 293,0 s: falta 3,9 s) e termina em 35,1 %.

**A Sala decide a base antes de pagar a regravação.** Sobre a fala (o que o Lucas disse, "da narração", e o que o pedido pediu), o 9
cabe. Se o regente e o qc medirem pelo vídeo inteiro com a cauda, o 9 reprova por ~4 s, e então o lugar é o 13. Depois da narração
a frase não muda de lugar (`cta.md` §5), por isso a conta vem antes.

## 4 · As 3 opções no parágrafo 9

Todas: "subscribe to Alpha Point" inteiro, só "If…" e segunda pessoa, nada do "Nunca" do §3 nem do §2 (conferido por varredura:
sem `please`, `don't forget`, like, comentário, número de plateia, frequência, nem as palavras de sensacionalismo ou de notícia
do dia). A volta ao assunto é a primeira frase do parágrafo 10, que já é "Back to the ruler, then.", então nenhuma opção repete
"back to". As durações usam o ritmo desta narração (16,7 caracteres por segundo, ~184 palavras por minuto); a faixa da tela
dura 4,5 s.

### Opção 1 (recomendada), 16 palavras, 81 caracteres, ~4,9 s

> …Rio Grande, for its part, says the longest beach begins at Cassino and ends at Barra do Chuí. Same sand, in other words. The argument is over the name on it.
> **If a beach that changes its name is your kind of story, subscribe to Alpha Point.**
> Back to the ruler, then. Every careful measurement we found lands within a few miles of every other.

Por que: ecoa a primeira frase do parágrafo ("the sand changes its name") e fecha o mesmo humor seco do "The argument is over the
name on it", em vez de cortar a graça com um pedido genérico. É a mais ligada ao que acabou de passar. Está no teto de palavras, e
dura ~0,4 s mais que a faixa.

### Opção 2, 14 palavras, 73 caracteres, ~4,4 s

> …Same sand, in other words. The argument is over the name on it.
> **If you like tracing a claim back to its source, subscribe to Alpha Point.**
> Back to the ruler, then. Every careful measurement we found lands within a few miles of every other.

Por que: liga ao fio dos 4 minutos anteriores (a fama do Guinness, o 158, quem mediu o quê), que é a promessa do canal, e é a que
melhor casa com os 4,5 s da faixa. Fica um passo atrás do parágrafo 9 em si.

### Opção 3, 11 palavras, 60 caracteres, ~3,6 s

> …Same sand, in other words. The argument is over the name on it.
> **If you're enjoying the map so far, subscribe to Alpha Point.**
> Back to the ruler, then. Every careful measurement we found lands within a few miles of every other.

Por que: é o exemplo que o Lucas viu e aprovou, com as palavras dele; é a mais segura e a mais barata. Fica uns 0,9 s mais curta
que a faixa de 4,5 s, que entraria na primeira frase do parágrafo 10, e isso contraria o §5 ("a única fala por baixo da peça").
Teria de entrar atrasada, ou a faixa sair mais cedo.

### A reserva, se a base for o vídeo com a cauda (no parágrafo 13)

> …Geologists at the federal university of Rio Grande do Sul call it one of the longest barriers of sand in the world. A barrier, because the sea built it: a long bank of sand with lagoons trapped behind it and the ocean out front.
> **If you've followed the coast this far, subscribe to Alpha Point.**
> The waves do the drawing.

11 palavras, 64 caracteres, ~3,8 s. Aqui a volta é "The waves do the drawing.", que é a resposta, não uma volta calma: se a Sala
a quiser mais calma, a frase pode ganhar um respiro antes (sem mudar o texto).

## 5 · O custo

Preço: 0,48 crédito por caractere (a razão do `narracao.json` é 6.489 / 13.477 = 0,4815; no parágrafo 9 é 0,4811). Conta com a
cópia para a voz como está (a frase vai depois de um espaço, sem número por extenso, porque não tem número).

| onde | parágrafo hoje | com a frase (opção 1) | créditos hoje → com a frase | só o acréscimo |
|---|---|---|---|---|
| **9** (recomendado) | 794 caracteres | **876** | 381 → **420** | 39 |
| 13 (reserva) | 498 | 580 (563 com a reserva de 64) | 239 → 278 (270 com a reserva) | 39 (31) |
| 11 | 1.263 | 1.345 | 606 → 646 | 39 |

Com as outras opções no parágrafo 9: opção 2, 868 caracteres, 417 créditos; opção 3, 855 caracteres, 410.

**O Chuí muda a conta.** Os parágrafos do Chuí (8, 9, 11, 21) somam 567 + 794 + 1.263 + 642 = 3.266 caracteres = ~1.568 créditos.
- **Se a escuta do Lucas pedir o conserto do Chuí:** com a frase no 9, o conserto e a frase viram uma regravação só, e a frase
  custa só o acréscimo: 3.348 caracteres, ~1.607 créditos (+39). No 13, seriam ~1.568 + ~270 = ~1.838 créditos.
- **Se a escuta não pedir:** a regravação é só do parágrafo da frase: 9 = ~420 créditos; 13 = ~270.
- **O que dizer ao Lucas:** a opção dele dizia "uns 300 créditos". O 9 passa disso (~420, uns 120 a mais) se o Chuí não for
  regravado; só o 13 (~270) fica nos 300.

Variante mais barata, para a Sala pesar (não é o que o Lucas aprovou): pôr a frase como um parágrafo próprio, um pedido só dela
(~82 caracteres, ~40 créditos), entre o 9 e o 10, sem regravar o 9. A frase ganharia uma pausa de 0,25 s de cada lado, mas a
cópia para a voz passaria a 22 parágrafos e os `trecho` 10 a 21 trocariam de número (o `--refazer`, o
`conferencia-paragrafos.json` e as linhas do `narracao.json`). Ficaria à parte da voz do parágrafo, que é uma boa coisa para um
pedido, e a regravação do Chuí continuaria independente.

## 6 · O que mais a Sala deve levar

1. **A base do 35 %** (§3): só o parágrafo 9 depende dela. Decidir antes da regravação.
2. **O canto da tela no parágrafo 9.** O ato 2 põe na tela os 39 mi e os 97 mi das duas cidades (pauta §4, "Os 97 mi vão à tela"):
   o regente confere que o canto fica livre a 80 px e fora da faixa de altura de uma pílula (`cta.md` §5). Não há `regencia.json`
   deste vídeo ainda, então isto não se mediu. Se o canto não couber, a frase muda de lugar antes da narração, e o 13 é a saída.
3. **O roteiro.** A frase tem de entrar no `roteiros/praia-do-cassino/roteiro-narrador.md` e na cópia para a voz
   (`out/praia-do-cassino/roteiro.md` e `roteiros/praia-do-cassino/voz/texto-para-voz.md`), no fim do parágrafo escolhido, e o
   relatório do roteiro diz o parágrafo (`voz.md` §3). Nada disso foi editado aqui.
