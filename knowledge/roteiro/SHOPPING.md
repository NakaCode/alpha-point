> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/SHOPPING.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador. Indicar produto pelo YouTube Shopping depende de o canal estar habilitado nele, e isso é cadastro e decisão do dono: sem isso, a resposta é `"produto": null`.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# A INDICAÇÃO — um produto por vídeo, como quem otimiza uma vida

> Módulo do `roteirista-narracao`, sujeito à mesma régua da voz: **se soa a comercial, está errado.**
> Mecanismo: YouTube Shopping (afiliados) — **[porte Regie]** a marcação técnica é do dono do canal, no YouTube Studio
> (no Top10, da estação de publicação); aqui é o texto.

## 1 · O que é, e o que nunca é

O espectador acabou de passar meia hora aprendendo uma coisa que não sabia. A indicação é a
extensão natural disso: *"se isso te interessou, existe uma coisa que te leva adiante."* Duas
famílias passam: a **solução real** (o objeto que resolve um problema que o vídeo tornou visível) e
o **bom livro** sobre o assunto — o caso mais fácil de acertar e o mais alinhado ao canal.

O que nunca passa: bugiganga, gadget de moda, qualquer coisa que você não indicaria a um amigo — e,
acima de tudo, o **tom de vendedor de feira** ("corre que é por tempo limitado", superlativo de
anúncio, urgência fabricada). O público é adulto; adulto reconhece vendedor na primeira sílaba, e o
que se perde ali não é a venda — é a confiança no resto do vídeo.

## 2 · Onde e como

**No fim, depois de o conteúdo estar fechado** — o espectador recebe o que veio buscar antes de
qualquer indicação. **Uma indicação só, e curta o bastante para não virar bloco:** ela cabe no tempo
de dizer o que o vídeo mostrou, a lacuna que abriu e o que a preenche. Se precisou de mais que isso,
virou comercial — e comercial custa a confiança no resto do vídeo.

> *"Nada disso aqui é consenso fechado — e se você quiser ver a discussão inteira, com os dois
> lados, o livro do Eric Cline sobre 1177 a.C. é o melhor que existe em português. Deixei ele
> marcado aqui embaixo."*

Continua o assunto, dá um motivo específico, nomeia, e some. "Deixei marcado aqui embaixo" é a
marcação; não invente URL nem dite cupom. A transição que devolve o espectador ao conteúdo é a
única transição do vídeo.

## 3 · Quando NÃO indicar

**"Não há produto honesto para este tema" é resposta válida e não é fracasso** — registre
`"produto": null` com o motivo. Tema sem objeto, assunto sensível (tragédia, doença), ou nenhum
produto que você indicaria de verdade. Forçar indicação em vídeo sobre desastre é o pior erro deste
módulo.

## 4 · De onde vem o produto

Você escreve o **gancho**. **[porte Regie]** No Top10, quem achava o produto e avaliava o vendedor era o agente
`curador-de-produtos` (`top10 shopping <proj>`); ele não existe neste canal. Aqui: nomeie só produto que você
confirmou existir à venda na loja que o canal usa, deixe o link para o dono marcar, e na dúvida registre
`"produto": null` com o motivo. **Livro exige a capa oficial da mesma edição do link na tela** — capa desenhada por
nós é uma edição que não existe.

## 5 · O que vai no manifest

```json
"shopping": {
  "produto": "1177 a.C. — O Ano do Colapso da Civilização (Eric Cline)",
  "tipo": "conhecimento",
  "otimiza": "quem terminou o vídeo querendo a discussão acadêmica inteira",
  "gancho": "<as frases EXATAS, como narradas>",
  "onde": "encerramento, depois do fecho"
}
```

Com `"produto": null`, só `"motivo"` é exigido. O gate confere que o campo existe, que o gancho está
no texto narrado e que ele não carrega os vícios de vendedor.
