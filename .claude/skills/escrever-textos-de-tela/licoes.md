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
