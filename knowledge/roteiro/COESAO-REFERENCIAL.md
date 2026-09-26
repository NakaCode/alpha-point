> **[porte Regie]** Origem: `top10-estudio/knowledge/roteiro/COESAO-REFERENCIAL.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> Módulo de `knowledge/ROTEIRO-NARRACAO.md` (a «Ordem de leitura»). O agente `roteirista-narracao` do Top10 é o `roteirista` neste canal, e o `roteiro-boco.md` (o texto que o apresentador lia) é `out/<proj>/roteiro.md`; o `roteiro-editor.md` fica ao lado dele, em `out/<proj>/`. Canal **faceless**: tudo que só existe por causa de apresentador filmado (modos M28, M32, M33, faixa de tempo do apresentador, master gravado, mic e câmera) não se aplica aqui — é opcional declarado, para o dia em que o canal gravar apresentador.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# COESÃO REFERENCIAL — como o texto se amarra (módulo do roteirista)

> A cadeia referencial é o que faz meia hora soar como UM texto: cada coisa nomeada **volta**,
> em vez de ser rebatizada ou esquecida. É a *referência anafórica* — retomar um termo já dito —,
> o oposto da *anáfora retórica* (repetir o mesmo esqueleto: "Não tinha X, não tinha Y"), que é
> vetada. Uma economiza forma; a outra empilha.

## As três distâncias

**1 · Curta (frase a frase).** Nomeou uma vez, retoma. O sujeito rebatizado a cada frase é o vício
mais reconhecível de prosa de máquina.
> *"O terremoto começou embaixo de San José del Palmar. **Ali**, 40 casas caíram — e não morreu
> ninguém."*

**2 · Média (bloco a bloco).** A primeira frase de um bloco se liga ao anterior — **em um sintagma,
com o resto da frase novo**. Ligar não é reafirmar: se a frase inteira gasta no que o espectador já
tem, corte e comece no que é novo.
> *"**Esse segundo dono** nunca assinou nada — e é por isso que a cerca abriu em maio."*

⚠️ **Costura não é condução.** Esta régua garante que o texto soe como UM texto; ela não garante que
ele ANDE. *"Esse 7,4 fica mais claro ao lado de outros dois terremotos da mesma região"* cumpre este
item perfeitamente — um sintagma de retomada, o resto da frase novo — e abre o segundo de quatro
capítulos sobre a mesma coisa. O sintagma diz de ONDE você veio; quem responde PARA ONDE você vai é
a condução (`STORYTELLING.md` §4.1). Confira os dois separados: a junta pode estar impecável com o
roteiro parado.

**3 · Longa (o arco).** A âncora plantada na abertura volta **nomeada** no ato final, como a peça
que agora significa outra coisa — nunca como resumo. Quantas vezes ela reaparece no caminho é
decisão do tema: retomada que traz informação nova, entra; retomada que só lembra a promessa é
enrolação com outro nome.
> Intro: *"…e ninguém nunca achou a certidão assinada."*
> Ato final: *"Os ossos estão certos, a data está certa. **O que não existe é a certidão assinada.**"*

## A trava: todo antecedente se recupera DE OUVIDO

Quem lê volta a página; quem ouve, não. Pronome puro só a ≤2 frases do antecedente; com dois
candidatos do mesmo gênero na janela, pronome está proibido; e **a primeira frase de um bloco nunca
abre com pronome puro** — quem entrou pelo capítulo do YouTube não tem antecedente nenhum. O
definido descritivo ("essa cerca", "aquele número") atravessa qualquer distância — e é o que
sobrevive à dublagem (gênero gramatical não atravessa a tradução), ao corte de shorts (que exige
trecho autônomo) e ao reaproveitamento em compilado.

## O que se declara no dossiê (e o gate confere)

No `roteiro-editor.md`, a seção `## Cadeia referencial` cita o texto **literal** — a âncora (o gancho
da abertura, dentro das primeiras ~78 palavras, porque é lá que o espectador decide ficar) e onde ela
volta nomeada:

```markdown
## Cadeia referencial
- âncora: "a certidão assinada"
- paga em: bloco 4 — "o que não existe é a certidão assinada"
```

**Onde ela é paga é decisão do tema**, e não há posição obrigatória: o gancho fecha quando o roteiro
já construiu o que a resposta precisa para ser entendida. Se houver uma retomada intermediária que
valha citar, declare-a numa linha `- retomada:` — é opcional, e a ausência dela não é defeito.

O gate confere que o declarado existe no narrado; o julgamento fino é do crítico de clareza.
Diagnóstico **[porte Regie]**: o `medir-coesao.mjs` do Top10 não veio; a cadeia é conferida pelo `critico-de-roteiro`.
