> **[porte Regie]** Origem: `top10-estudio/knowledge/CADEIA-DE-COMANDO.md`, commit `4afda12` (17/09/2026), trazido em 23/09/2026.
> É aprendizado do estúdio do Canal Top10, copiado inteiro de propósito: o ofício vale para este canal.
> **Não vale aqui:** a infraestrutura do Top10 — VM, bucket (`gs://`), Mac, launchd, cascata de contas, fila `estudio.db`, túnel residencial, WhatsApp — e a Reuters (licença e contrato do Top10: este canal não pode usá-la). Aqui tudo roda no PC do dono, no Windows, com o Claude Code; os comandos `top10 <verbo>` e os scripts citados são do estúdio, e no canal o equivalente, quando existe, é `node scripts/<x>.mjs` ou `node <motor>/src/ferramentas/<x>.mjs`.
> **Marca:** fonte (Neue Haas), hex, logo, persona (Bôco) e o dono (Mateus) são do Top10 e servem de exemplo; a marca deste canal mora em `marca/` (tokens em `marca/tokens.css`). Onde o texto diz «o Mateus decide», leia «o dono do canal decide».
> O «painel do espelho (:8888)» é do estúdio; aqui a revisão do dono é na galeria/prévia do motor.
> Trechos trocados no porte estão marcados `[porte Regie]`.

# CADEIA DE COMANDO — quem manda no quê, do espelho à cena pronta

> Escrito em 07/ago/2026 porque o Mateus perguntou o que ninguém tinha escrito: *"é ele [diretor de
> arte] que manda nas cenas ou é o espelho? queria que fique bem dividido a função de TODO mundo."*
> A cadeia existia de fato e não existia no papel — e fronteira não escrita vaza: medido, **8% das
> teses do espelho descreviam câmera e movimento**, que é ofício do diretor de arte.
>
> Um assunto, um dono, um lugar: **este arquivo é o dono da pergunta "quem decide isto?"**. Se outra
> doutrina contradisser este arquivo, este arquivo vence, e a outra aponta para cá.

## A linha, em uma frase cada

| ordem | quem | decide | escreve | NÃO pode |
|---|---|---|---|---|
| 1 | **montador** | **O QUÊ** — o que cada trecho de fala mostra, quando entra/sai, que mídia real exige, em que palavra trava | `espelho.json` | dirigir câmera/movimento; escolher a metáfora visual |
| 2 | **diretor-de-arte** | **COMO, no vídeo inteiro** — a metáfora de cada cena, os 3–5 showpieces, o fluxo de transições | `conceito-visual.json` | mudar conteúdo, janela (`inSec`/`dur`), mídia pedida ou âncora |
| 3 | **regente-de-imagem** | **o RITMO dentro da cena** — sintagma a sintagma, onde a imagem troca, onde fica parada de propósito | `regencia.json` | mudar a cena, a metáfora ou a janela |
| 4 | **editor-de-arte** (Fable) | **a EXECUÇÃO** — o HTML determinístico da cena | `graphics/*.html` | inventar dado, trocar o pedido, ignorar o conceito |
| — | **qc-visual** | julga a cena pronta **contra os três documentos** | laudo | reprovar por gosto: só por régua declarada |

**A regra de ouro: cada camada ENRIQUECE uma dimensão que a anterior deixou aberta — nunca revoga a
anterior.** O espelho diz *o que é verdade na tela*; o conceito diz *que forma essa verdade toma*; a
regência diz *em que compasso*; o editor materializa.

## As fronteiras que vazam (e a régua para cada uma)

**Tese × metáfora.** A `tese` do espelho declara O QUE a cena AFIRMA — o fato, o dado, a mídia real,
a hierarquia da informação. Ela **não** descreve câmera, zoom, deslizamento ou coreografia: isso é a
`metafora`/`tecnica` do conceito-visual. Régua prática: *se a frase sobrevive à pergunta "isso é
verdade sobre o conteúdo?", é tese; se só faz sentido sobre a tela, é direção.*
- tese: "os DOIS territórios identificados com nome e bandeira; o número de moradores com pictograma"
- direção: "a câmera abre do enquadramento amplo; a foto se despede por opacidade"

**Fusão de cenas.** Quem funde é o **montador** (é decisão de conteúdo: uma janela de fala passa a
ser coberta por um palco só). O diretor-de-arte pode **propor** fusão quando o arco pedir — a
proposta volta ao montador, não é aplicada por cima.

**Mudança de modelo.** O `modelo` (o código `Mxx` de `knowledge/CATALOGO-MODELOS.md`) é do **montador**, porque modelo é promessa de conteúdo
(um M05 promete documento real; um M03 promete geografia real). O diretor pode propor troca pelo
mesmo caminho da fusão. O **editor-de-arte nunca troca o modelo sozinho** — se o modelo pedido não
funciona na execução, ele devolve com o motivo em vez de desviar em silêncio.

**Mídia.** O espelho pede (`needs`/pedido de mídia); a pesquisa **entrega ou declara NÃO ACHEI** —
nunca substitui por fonte proibida ([PESQ-*], o caso Pexels). O diretor trabalha com o que a
pesquisa achou; se a mídia que a metáfora precisa não existe, a metáfora muda, não a verdade.

## Conflito: como se resolve

1. A camada de baixo **não sobrescreve** a de cima — devolve com o motivo (uma linha basta).
2. Quem arbitra é o **editor-chefe** (a sessão que orquestra), e a decisão vira edição no documento
   da camada dona — nunca um terceiro arquivo de exceções.
3. Discordância que se repete vira **lei** (`seed/regras/`), e a lei corrige o agente-raiz.

## O que o Mateus decide (e ninguém decide por ele)

A revisão dele no painel do espelho (:8888) pode mudar **qualquer camada** — conteúdo, forma, ritmo.
Cada comentário dele é processado assim: corrige-se o artefato → identifica-se o agente-raiz →
corrige-se o prompt do agente → destila-se a lei ([ARTE-140] a [ARTE-144] nasceram exatamente
assim, de 2 cenas revisadas em 07/ago/2026).
