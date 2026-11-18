# Pedido da Sala: as miniaturas do vídeo 8 prontas para a publicação (rodada 3) · 18/11/2026, ~16:0x

**Quem:** um desenhista Opus, esforço xhigh, despachado pela Sala de controle.

## O que está decidido

O Lucas, 18/11/2026, ~15:3x, à pergunta das 3 miniaturas da rodada 2: **"Uma por título (Recomendado)"** (`roteiros/australia-animais/decisoes-lucas.md`,
a última linha). No Test & Compare da publicação:
- *Australia's Deadliest Snake Isn't Its Most Venomous One* com a **r2-n1 "NOT THE KILLER"** (o Channel Country do IBRA em vermelho, a pílula "INLAND
  TAIPAN");
- *Why So Few People Die From Australia's Deadly Animals* com a **r2-n2 "10 YEARS OF VENOM / < 1 MONTH"** (as rodovias em vermelho);
- *Why Does Australia Have So Many Dangerous Animals?* (o do Lucas) com a "NOT THE KILLER";
- a r2-n3 "SNAKES 35 / BEES & WASPS 42" de reserva.

E **"os consertos de leitura em 168 px entram na publicação"**. Eles estão no teste dos leitores (`out/_pautas/video-8-australia/teste-leitores.md`, "A
rodada 2", o último item, e as respostas inteiras em `leitor-1-r2.md` a `leitor-4-r2.md`):
- **na r2-n1:** nada na imagem diz que é uma cobra, e "taipan" não é palavra de todo lugar (Tunde); com o título 3, ela repete a virada (Mia);
- **na r2-n2:** a malha de rodovias vira ruído em 168 px, o "< 1 MONTH" sai colado, e falta a palavra "deaths" (Mia);
- **na r2-n3** (reserva): a linha "DEATHS, 2016–2025" some em 168 px, e 35 + 42 não fecha 85 (Tunde).

## O que fazer

Faça a **rodada 3** das duas que vão ao ar (a n1 e a n2), e, se sobrar folga, a da reserva (a n3), **consertando só o que os leitores apontaram**, sem
trocar a ideia de nenhuma: `roteiros/australia-animais/miniatura/r3-n1-*`, `r3-n2-*` (e `r3-n3-*`), nos mesmos tamanhos da rodada 2 (1280, 2560, 320 e
168), com os `-pontos.json`, a folha `r3-folha.png` (as três ao lado das da rodada 2, a 320 e a 168) e o `RELATO-r3.md`.

Leia antes: o pedido da rodada 2 (`pautas/australia-animais/_trabalho/pedido-miniaturas-r2.md`), o `RELATO-r2.md` e o `RELATO.md` da rodada 1 (as bases,
as licenças, a conferência), os scripts da rodada 2 (`r2_comum.py`, `r2-n1.py`, `r2-n2.py`, `r2-n3.py`, `r2-folha.py`, `r2-conferir.py`), a marca da
miniatura (`marca/embalagem.md` §3 e a receita) e a pauta v2 §5, "A miniatura" (o que nunca: foto de bicho no lugar do mapa, caveira, emoji, "DEADLIEST",
"NOBODY", "MYTH", "NEVER", número que a voz não diz do mesmo jeito, bandeira; o vermelho e o ciano são de papel, não de juízo).

**Cuidados de fato** (a pauta e as leituras da Sala, no registro `pautas/2026-11-18-video-8-australia.md`):
- a taipan-do-interior é a de veneno mais potente **medido em camundongo** (1979), e não há morte por ela lida na base: nada na imagem pode dizer que ela
  "nunca matou"; a cobra que mais mata é a marrom (17 das 23 mortes de 2005–2015);
- os 85 são as mortes por **todos os animais venenosos** de 2016 a 2025 (ABS), e o mês é **um mês médio de estrada em 2025** (1.276 no ano, preliminar):
  se entrar "DEATHS", é com esse objeto;
- se a n3 entrar, a conta tem de fechar (35 + 42 + 6 + 2 = 85: os outros 6 são "outros artrópodes venenosos", X25, e os 2, "animais marinhos venenosos",
  X26) ou dizer que não é o total.

**A conferência** (a mesma da rodada 2): os três tamanhos; a palavra legível na 168 (meça a altura da maiúscula, como no `r2-conferir.py`); a geografia
contra a fonte independente; o canto de baixo à direita livre para a duração; a Nova Zelândia fora do quadro quando não for o assunto.

## As regras

- **Não use `SendMessage` nem `send_message`.** Não commite nem dê push (só a Sala commita). Não use navegador (nenhuma ferramenta
  `mcp__claude-in-chrome__*` nem `mcp__Claude_Browser__*`), vidIQ, banco pago nem crédito. **Use só as bases que já estão no disco**
  (`roteiros/australia-animais/miniatura/_bases/`); se precisar de uma camada nova, pare e diga qual, de onde e com que licença: a Sala decide.
- A trava do Python vale: script sempre num arquivo, `python -X utf8 -B <arquivo>.py`; nunca `python -`, heredoc ou pipe para o Python.
- Escreva só em `roteiros/australia-animais/miniatura/` (os arquivos `r3*` e `RELATO-r3.md`; não mexa nos da rodada 1 e 2).
- Grave o resultado no disco antes de responder. **O relato** (`RELATO-r3.md`, e um resumo curto em português na resposta): o que mudou em cada uma, e
  por quê; a conferência (os números da 168); o que ainda ficou fraco; o crédito que cada uma pede na descrição.
