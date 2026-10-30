# O cético dos três scripts do caminho 1 (30/10/2026)

Os scripts: `ferramentas/pacote-cena.py`, `ferramentas/folhas-cena.py` e `ferramentas/portoes-cena.mjs`, com as provas
(`ferramentas/*-provar.*`). O pedido é testar na Drake (o vídeo 5) os trabalhos mecânicos com script (Lucas, 30/10/2026: "Vamos
testar neste próximo vídeo os trabalhos mecânicos com script e o .md enxuto…"). Tudo rodou no vídeo 4 (`atlantico-fundo`).

Nenhum pedido foi feito à MapTiler. Nada foi commitado. O `_portao.json` voltou ao que era (a prova confere pelo sha256, e o git
não mostra mudança). O `out/_maquina/chrome.json` ficou livre, e não sobrou nenhum `python.exe` rodando.

## As provas

| prova | antes do conserto | depois |
|---|---|---|
| `pacote-cena-provar.py` | 0 falhas, 14 de 14 mutações pegas | 0 falhas, 21 de 21 mutações; e 0 falhas nas 67 cenas do vídeo 4 |
| `folhas-cena-provar.py` | 725 conferências, 0 falhas | 730 conferências, 0 falhas |
| `portoes-cena-provar.mjs` | 94 ok (parte B com Chrome, só s01, s10 e s69, sem mapa) | 99 ok, 0 falharam |

As três provas de antes passavam. Os defeitos abaixo estavam onde elas não olhavam.

## pacote-cena.py: regra que sumia do pacote, sem aviso (grave, consertado)

A página diz "Nenhuma regra, portão ou peça sai", e a 1.0 deixava fora, sem dizer, frases que citam a cena:

1. **O espelho fora dos segmentos não era lido.** Ficavam de fora o `_decisoes_do_lucas`, o `_decisoes_pendentes`, o `_relogio`,
   o `_medidor`, as chamadas e a régua. Dois exemplos da s47:
   - `_decisoes_do_lucas[9]`, "A IMAGEM DE s47 (28/10/2026, 15:0x: 'Foto do robô e mapa (Recomendado)'…", uma decisão do Lucas
     sobre a própria cena;
   - `_relogio.regra_de_corte`, "UMA exceção declarada… o plano 4 de s47", a borda da cena.

   No vídeo 4 eram 440 menções, nenhuma no pacote.
2. **Uma nota que cita a cena no meio do texto ficava de fora.** Na regência eram 209 de 706 menções; no textos-tela, 75 de 749.
   Exemplos:
   - "CONSERTO 8, para a arte-6 … - s47: …", no `_instrucoes_para_a_arte[46]`;
   - "a linha da licença do Shutterstock … a s10 usa o clipe", que fala da s10 e da s75;
   - as condições que ligam a foto 1042 à s10 e à s51.

   O conceito e a conferência fora da entrada da cena também não eram lidos.
3. **No veredito da cena, a parte 6 copiava só 11 campos.** O resto sumia sem aviso. O caso mais claro é a s72, que perdia a
   `janela_no_clipe` [28.9, 33.4]: o trecho do clipe da s27 que foi aprovado para ela. Sumiam também `uso`,
   `credito_na_descricao`, `aviso_de_ano_regra`, `alternativa_de`, `serviria_em`, `destino` e o resto da `fonte`.
4. **Na exceção, sumiam `falha_no_portao`, `medido_em` e `observacao`.** Da decisão do Lucas, só iam a mensagem e a hora (sem
   a `pergunta` nem o `vale_para_este_video`).
5. **No segmento do espelho, o resto dos campos só era nomeado.** Ficavam assim `_licenca` (o crédito na tela da s63), `_relevo`,
   `_inscricao`, `_tela_final`, `_vinheta`, `motivo` e `midia_necessidade`. Os `needs.dados`, que trazem o número exato e a grafia
   de tela ("Tela 27,487 FT · MORE THAN 5 MI"), eram só contados.
6. **O texto de tela com o id da filha ficava de fora.** Em Los Angeles, um texto da s31 (filha da s29) não entrava no pacote da
   mãe.
7. **A faixa dentro de um nome de arquivo punha a cena em notas que não eram dela.** "iss1042-recortes-s10-s51.jpg" contava como
   s10 a s51.
8. **Uma filha com `_mergedInto` para uma cena que não existe derrubava o script com pilha.** Agora sai 1, com a mensagem.

O que fiz (versão 1.1):
- **Notas laterais dos cinco arquivos.** Espelho (parte 2), regência (3), conceito (4), textos-tela (5) e conferência (6), todas
  no mesmo formato.
- **Uma parte 9 nova, "As outras menções à cena".** Traz, em trecho, com o arquivo e o caminho, toda frase desses cinco arquivos
  que cita a cena (ou uma filha) e que as partes 2 a 6 não trazem. Entra também a entrada de outra cena que fala dela,
  marcada "da sNN". Fica de fora só o histórico (`_consertos` e `substituidos`), contado como antes.
- **Todo campo pelo nome.** Vale para o veredito, a exceção (com a decisão do Lucas inteira) e o segmento do espelho (com os
  `needs` inteiros). Os longos de registro (`criterios`, `o_que_viu`, `quadros`, `arquivos_olhados`, `sha1_anteriores`,
  `reconferencias`) vão nomeados na linha "no original, sem copiar".
- **A faixa da prosa.** "s45–s48" conta como faixa; a de nome de arquivo, não.
- **A filha.** O texto com o id dela entra; a cena com mãe inexistente sai 1.
- **Um aviso no cabeçalho** quando a janela da regência não é a do espelho.

A prova ganhou uma conferência de cobertura, escrita de novo, sem importar o script. Toda folha de texto dos cinco arquivos
que cita a cena, fora da entrada dela e do histórico, tem de ter o caminho no pacote. Ela confere também:
- cada campo do veredito, da exceção e do segmento;
- cada `needs.dados` inteiro;
- 7 mutações novas (21 no total).

Rodada contra o pacote da 1.0, a cobertura acusa 50 faltas na s47 e 43 na s02. Contra o de agora, 0, nas 67 cenas. Consertei
também um falso negativo dela: a nota com `"cena": "s60–s70"` não era reconhecida como da s67.

**O preço é o tamanho.** Nas 11 cenas da prova, o pacote passou de 37 % para 60 % do que a peça leria hoje (de ~130 mil para
~213 mil tokens). Nas 67 cenas, deu 64 % (~938 mil contra ~1.469 mil). A medida é a mesma estimativa em caracteres do autor, não
a medida em voltas. A economia do pacote cai. Mas na 1.0 ela vinha, em parte, de deixar regra para trás.

## folhas-cena.py: sólido; só avisos do lote (consertado)

- **Ninguém quebrou a escolha dos quadros.** Testei, fora da prova:
  - dois beats no mesmo tempo, beats com o mesmo t0, beat de duração zero, fora da janela ou negativo;
  - 30 beats colados, cena longa sem beat, cadência 0, sem cena anterior ou sem a seguinte.

  Em todos, cada beat tem um quadro, a cadência fica ≤ 4 s, e o par da emenda fica na mesma linha. Só o clipe de 1 ou 3 quadros
  parte o par, o que não acontece de verdade.
- **Os recusos estão certos.** A prova cobre o clipe ausente, o velho (o sha1 do carimbo é outro), o 1080p e o sem carimbo, e o
  script recusa sem gravar nada.
- **As folhas seguem a revisão de espectador.** São o mesmo formato PNG de 1920×1208 que o `folhas-espectador.py` já usa, e o
  nome muda com o conteúdo, como pede a roupa do qc-visual (§2.1).
- **O teto da M11 só tinha o aviso acima de 25.** Agora o script avisa também:
  - acima de 20, que a folga de 5 para o recorte encolheu;
  - quando as cenas pedidas não caberiam num lote (§2.1, item 2): mapa e sem mapa juntas, mais de 2 de mapa (só 1 se passa de
    30 s) ou mais de 4 sem mapa.

  Os avisos não recusam: o lote é de quem despacha, e o editor e o mapista usam o script no próprio trabalho. A prova confere os
  avisos.
- **Um beat sem t0 ou t1 numérico derrubava o script com pilha.** Agora vira aviso.
- **Fica como limite**, já declarado: o carimbo guarda só o sha1 do HTML. Uma foto, o `tokens.css` ou o `_rig.js` mudados depois
  do render não aparecem. Um aviso pela data dos arquivos que o HTML cita seria barato, mas não fiz: é melhoria, não erro.

## portoes-cena.mjs: os mesmos portões e réguas; três consertos

Conferi que ele só chama os portões, com os argumentos documentados, e que nenhuma régua muda. Conferi também que a pré-carga só
entra com `--mapa` e que, sem `--mapa`, a cena de mapa recusa a rodada inteira (sai 2, sem rodar nada). A régua de mapa dele
contém a do `conferir`, e no vídeo 4 toda cena que o `conferir` trata como mapa é mapa nele. O `conferir` escolhe "a rodada mais
recente de cada cena", então um qc-cena por cena de mapa não engana a conferência.

Consertei:
1. **O `--json` do qc-cena calava dois avisos.**
   - O gate fora do portão: o `mapa-vivo`, que "não veio do estúdio e fica fora do portão (ele avisa)", como diz o CLAUDE.md.
   - O carimbo do `_portao.json` que não se gravou. Aí o qc-cena sai 2 com toda cena verde, e a tabela não dizia por quê.

   Os dois agora saem depois da tabela. A prova, com Chrome, confere que o `mapa-vivo` do qc-cena rodado à parte aparece.
2. **A marca `2*` (o til de mapa coberto) podia esconder um carimbo não gravado.** Agora ela só vale com o carimbo da chamada
   gravado.
3. **O gancho da prova `PORTOES_CENA_MAQUINA` valia em qualquer pasta.** Com ele, qualquer processo passaria por cima do
   `chrome.json` de verdade. Agora o gancho só vale numa pasta `out/<proj>/_tmp/portoes/prova-<data>/`; fora dela, o script
   recusa e sai 2. A prova confere.

As recusas que o pedido mandou tentar já seguravam: cena de mapa sem `--mapa`, `chrome.json` ocupado por outro, `caca.json` ou
`linha-do-tempo.json` ocupados, aviso ilegível e erro logo depois de marcar (o aviso volta a livre).

## Para a Sala decidir (não mexi)

1. **A pré-carga só nas cenas de mapa.** O CLAUDE.md ("Os portões medem") e o regimento dizem que todo portão "em vídeo com cena
   de mapa" roda com a pré-carga. O script a põe só nas chamadas de cena de mapa. A medida da cena sem mapa é a mesma: a página
   recebe a chave e não a usa. A s11 e a s75, que citam a MapTiler só num comentário, saem até melhor sem ela. E o `conferir`
   aceita, porque olha só as cenas de mapa. Mas é uma divergência da letra, e a decisão é da Sala.
2. **A saída 2 de toda rodada com cena de mapa.** Ela sai 2 sempre, pelo til-glifo, que só o portao-mapa mede, mesmo com tudo
   certo. A última linha diz quanto sairia sem ele. O editor e o mapista rodam "até sair 0", então o pedido deles tem de dizer
   que a casa `2*`, com o til do portao-mapa medido e o `conferir` 0, conta como coberta. Sem isso, eles entram em laço.
3. **O `--quem` herdado.** Uma peça que copie o `quem` do `chrome.json` passa pela trava de outra sessão. A trava continua
   escrita, como o regimento a define: o pedido do setor tem de dar o `quem` exato.
4. **Para os scripts valerem na Drake**, o que falta mudar fora deles:
   - as roupas do qc-visual, do editor-de-arte e do mapista, e o regimento, ainda não citam os três scripts;
   - a roupa do qc-visual (§2.1, item 5) aceita como quadro o que o verbo `quadros` da linha do tempo gera, e o `folhas-cena.py`
     precisa entrar ali do mesmo jeito.

   Essa mudança é da Sala, junto com a divisão do CLAUDE.md enxuto, que vai ao Lucas.

## Onde está

- Os scripts e as provas consertados estão em `ferramentas/`. As cópias de antes ficaram fora do git, no scratchpad desta
  sessão.
- O registro das provas:
  - `out/atlantico-fundo/_tmp/pacotes/prova/`;
  - `out/atlantico-fundo/_tmp/folhas-cena/_prova/20261030-111552/`;
  - `out/atlantico-fundo/_tmp/portoes/prova-20261030-111807/prova.log`.
