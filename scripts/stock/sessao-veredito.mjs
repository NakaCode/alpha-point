// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/sessao-veredito.mjs (linhas 1-76, commit 4afda12).
// O que mudou: nada no código. No estúdio ela servia ao vigia-portas (que não veio); aqui o
// sessao-conferir.mjs a usa como REFORÇO ao lado da página só-de-conta — ver lá.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// O VEREDITO DE SESSÃO — "esta máquina ainda está LOGADA nesta plataforma?"
//
// ── POR QUE ISTO SAIU DE DENTRO DO VIGIA (13/set/2026) ──────────────────────────────────────────
// Medido: o `vigia-portas` reportava «4 aberta(s) · 0 precisando de humano» com o **Storyblocks
// DESLOGADO**. Não era bug de código — era o critério. Ele julgava sessão caída só quando a página
// de busca PEDIA login no texto visível (`RE_LOGIN && !logado`), e a busca do Storyblocks é servida
// a visitante anônimo sem pedir nada. Medido isoladamente naquela página: `RE_LOGIN=false`,
// `RE_LOGADO=false` → a conjunção nunca dispara, e o veredito sai "porta aberta".
//
// É exatamente a armadilha que o cabeçalho do `sessao-conferir.mjs` já descrevia e que ninguém
// tinha ligado ao vigia: *«as plataformas servem busca a visitante anônimo […] o contador bate,
// parece sessão viva, e só o download morre»*. O preço é caro e silencioso: a caça sai, gasta o
// tempo, e só falha na hora de baixar — enquanto a vigília jura de meia em meia hora que está tudo bem.
//
// ── A RÉGUA: PROVA DOS DOIS LADOS, OU NÃO SE JULGA ──────────────────────────────────────────────
// Acusar sessão caída por um sinal só é como o critério antigo errava — para o outro lado. Aqui só
// existe veredito "caída" quando há **prova positiva de morte E ausência de prova de vida**. Faltando
// qualquer das duas, o veredito é `indeterminada` e o vigia segue com o comportamento antigo.
//
// *Alarme falso ensina a ignorar o alarme; por isso o silêncio é uma resposta legítima aqui, e é a
// resposta padrão.* Medido nas quatro plataformas em 13/set, e acertou 4 de 4:
//
//   shutterstock  vivo=true   morto=false  → viva            (avatar no header, plano "Unlimited")
//   storyblocks   vivo=false  morto=true   → CAÍDA           (botão de entrar, sem avatar)
//   envato        vivo=false  morto=false  → indeterminada   (o markup não expõe nenhum dos dois)
//   motionarray   vivo=false  morto=false  → indeterminada   (idem)
//
// ⚠️ Os dois `indeterminada` são o ponto: eles NÃO viram acusação. O `sessao-conferir.mjs`, que vai
// à página só-de-conta, mediu as duas como LOGADAS no mesmo minuto — ou seja, o silêncio daqui
// estava certo, e ter chutado teria produzido dois alarmes falsos de uma vez.

/**
 * Seletores por plataforma. `vivo` prova que a sessão está de pé; `morto` prova que ela caiu.
 *
 * Ficam aqui, e não espalhados pelo vigia, porque seletor de plataforma MUDA — e quando mudar, quem
 * conserta tem de achar um lugar só. (Foi por haver três cópias da regra de anti-bot que o
 * `antibot.mjs` nasceu; a lição é a mesma.)
 */
export const SINAIS = {
  shutterstock: {
    vivo: '[data-automation*="avatar" i],[class*="avatar" i],[aria-label*="account" i]',
    morto: 'a[href*="/login" i],button[data-automation*="login" i]',
  },
  storyblocks: {
    vivo: '[class*="avatar" i],[data-testid*="avatar" i],[aria-label*="account" i]',
    morto: 'a[href*="/login" i]',
  },
  envato: {
    vivo: '[data-testid*="avatar" i],[class*="avatar" i],[aria-label*="account" i]',
    morto: 'a[href*="/sign-in" i],a[href*="/login" i]',
  },
  motionarray: {
    vivo: '[class*="avatar" i],[aria-label*="account" i]',
    morto: 'a[href*="/sign-in" i],a[href*="/login" i]',
  },
};

/**
 * @param {{vivo:boolean, morto:boolean}} sinais  o que o DOM mostrou
 * @returns {"viva"|"caida"|"indeterminada"}
 */
export function vereditoSessao({ vivo, morto }) {
  if (vivo) return "viva";                    // prova de vida vence: avatar não aparece a anônimo
  if (morto) return "caida";                  // morte provada E vida ausente
  return "indeterminada";                     // sem prova de nenhum lado: NÃO se acusa
}

/**
 * O seletor de cada lado, para a plataforma pedida. Plataforma desconhecida devolve seletores vazios
 * — que produzem `indeterminada`, nunca acusação. *Ausência de configuração não pode virar alarme.*
 */
export function sinaisDe(plat) {
  return SINAIS[plat] || { vivo: "", morto: "" };
}
