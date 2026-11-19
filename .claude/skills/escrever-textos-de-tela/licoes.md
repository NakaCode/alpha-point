# Lições: escrever-textos-de-tela

Os erros desta etapa, um bloco cada, registrados pela `registrar-aprendizado-como-skill` (catálogo §1.4 e §1.5). Leia antes
de entregar o `textos-tela.json` e quando algo der errado. Estas são de julgamento: nenhum portão as mede. O "·" na quebra
fica com o portão de movimento e com a regra da quebra (roupa §3).

### L1 · A peça que volta de outra cena volta sem o rótulo que a identificava
- **Sintoma:** "de 0 a 6,2 s a cena mostra só o bloco hachurado saindo da borda esquerda e, de 1,9 s em diante, o
  pontilhado que cresce; nenhum texto diz o que o bloco é até a cota AGREEMENT IN PRINCIPLE · JULY 11, 2024, em 6,2 s"
  (s58). Quando a voz diz "the paid years ended" (3,7–4,6 s), nada liga o bloco aos anos pagos.
- **Causa:** a régua voltava "como a s34 o deixou", mas a s34 tinha a cota SEPT. 16, 2024 na ponta, e a lista fechada de
  textos da s58 começava em 6,2 s. A última vez que o espectador vira essa régua foi minutos antes, na s34.
- **O que resolveu:** consertos-1 (ESP-17; `out/rio-columbia/textos-tela.json` e `graphics/s58.html`): a cota da ponta
  "SEPT. 16, 2024" [430], a mesma da s34, entra na lista da s58 de 0,167 a 13,867 s, com a fonte na faixa do crédito; o
  `editor-de-arte` a pôs abaixo da banda, sem bater nas outras cotas.
- **Como evitar:** quando uma peça volta de uma cena anterior (régua, bloco, cabo, linha), a lista de textos da cena nova
  traz de volta o rótulo ou a cota que a identificava, desde a entrada dela ou, no mais tardar, na palavra da voz que a
  usa. Confira no espelho que peças voltam, e de que cena; o espectador não as reconhece pela forma.
- **Origem:** `out/rio-columbia/_tmp/espectador-r1/mantidos.json` (s58, t 0, ESP-17); vídeo 7 (`rio-columbia`), revisão
  de 13/11/2026, conserto de 16/11/2026. Destino a): julgamento (o que identifica a peça), nenhum portão mede.

### L2 · O crédito de fonte copiado do dossiê saiu sem o ano que a fonte tem
- **Sintoma:** oito créditos de instituição sem o ano na tela, os da Geoscience Australia, da healthdirect e da ANZCOR (o laudo
  de tela do vídeo 8, "Os dois padrões", 1: "Oito créditos de instituição (Geoscience Australia, healthdirect, ANZCOR) saíram do
  dossiê sem o ano, onde a fonte o dá"). Os de artigo levavam o ano, todos.
- **Causa:** o crédito veio do dossiê, que listava a instituição sem o ano, e não se conferiu cada um contra o molde da marca
  (`marca/identidade.md` §7: `Source: <instituição>, <ano>`). O artigo traz o ano na própria citação; a página de instituição,
  não: o ano está na página (a data de atualização, a edição da diretriz).
- **O que resolveu:** o conserto 1 do texto de tela (`out/australia-animais/textos-tela.json` `32375aed…`): o ano lido na fonte
  (Geoscience Australia, 2011; healthdirect Australia, 2024; ANZCOR 9.4.1 (2021), 9.4.3 (2021), 9.4.8 (2011)), e a regra nas
  `_regras_de_serie`, com as fontes sem data declaradas como exceção (a ficha da Austrália do Sul, o Bee Aware, o Queensland Museum).
- **Como evitar:** antes de entregar, liste os `Source:` sem um ano de quatro dígitos e confira cada um na fonte: o ano que ela
  tem vai à tela, e a fonte sem data vai como exceção declarada nas `_regras_de_serie`. O crédito do dossiê é ponto de partida,
  não a forma final.
- **Origem:** `roteiros/australia-animais/qc-roteiro/fatos-tela.laudo.md` (o padrão 1); vídeo 8 (`australia-animais`),
  19/11/2026. Destino a): só a fonte diz se o ano existe, e nenhum portão do canal o mede. O lado do dossiê teria casa na
  `pesquisar-dossie-de-pauta` (catálogo §2.1, nº 2), que ainda não existe.
