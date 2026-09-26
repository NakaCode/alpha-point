// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/lib/piso-real.mjs (linhas 1-221, commit 4afda12).
// O que mudou: lógica pura, sem I/O, como na origem. Onde o texto diz "Mateus", leia "o dono do canal": o piso de cada canal é
// decisão de quem é dono DELE, e mora em infra/piso-registro-real.json na raiz do canal (ver qc-piso-real.mjs). `apresentador`
// só sai da cobertura com { comApresentador: true } (o canal.json declara apresentador filmado): no faceless, o padrão da Régie,
// esse trecho é PRETO — conta como cobertura sem mundo, em vez de sumir da conta e inflar a parcela (revisão v1).
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// @roda: ambos
// ===========================================================================================
// piso-real.mjs — quanto do TEMPO de cobertura do espelho pede imagem do MUNDO real.
//
// Lógica pura, sem I/O. Quem lê arquivo e imprime é `scripts/qc-piso-real.mjs`; quem prova a
// lógica é `scripts/testes/qc-piso-real.test.mjs`, e quem prova o teste é
// `scripts/testes/prova-por-mutacao-piso-real.mjs`.
//
// ══ POR QUE ESTA RÉGUA, E NÃO AS QUE JÁ EXISTIAM (16/set/2026) ══
//
// O dono reprovou o `petroleo-foz-do-amazonas`: «ficou com muitas animações e poucas fotos, imagens
// e footages reais… preciso de footages reais». O espelho dele passou em todos os gates do eixo,
// porque cada um responde uma pergunta vizinha:
//
//   · `qc-espelho-midia` conta CENAS (26,4% pediam registro, acima do alerta de 25%);
//   · `qc-direcao-real` (ARTE-94) conta `documento` e `mapa` como registro (32,9%);
//   · `qc-deserto-real` (ARTE-99) mede o RELÓGIO da maior janela, não a parcela.
//
// A pergunta do dono é outra: **por quanto TEMPO o espectador vê o mundo filmado ou fotografado?**
// Três escolhas fazem a régua responder a ela, e cada uma tem um mutante que a vigia:
//
//   1. SEGUNDOS, não cenas. Doze fotos de 3 s não compensam dois desenhos de 60 s.
//   2. `documento`, `mapa` e `mapa3d` NÃO contam, mesmo com `midia:"foto"`. Print de matéria,
//      lei e mapa são registro legítimo (e seguem certos onde a relação é espacial ou documental),
//      mas não são o mundo que o espectador pediu para ver. No Petróleo, `documento` sozinho era
//      12,4 pp da cobertura: foi isso que o fez parecer ter o dobro de imagem real.
//   3. Pedido MUDO não conta. Cena `midia:footage` sem `midia_termos` nem `midia_necessidade`
//      manda a pesquisa caçar às cegas; contá-la premiaria a forma sem o pedido.
//
// O denominador é o MESMO recorte dos irmãos (`qc-espelho-midia`, `qc-direcao-real`), de propósito:
// fora o Bôco em câmera, a mobília de navegação e toda janela `anima:false`. O tempo do Bôco já tem
// gate próprio (FIN-47), e contá-lo aqui afogaria a razão.
//
// ⚠️ O PISO NÃO MORA AQUI. Ele mora em `infra/piso-registro-real.json`, e é DECISÃO DO MATEUS —
// enquanto ele não decidir, o gate mede, compara com o RECOMENDADO e avisa, mas não reprova.
// ===========================================================================================

/** O Bôco em câmera e a mobília de navegação: a "mídia" deles é a própria gravação. */
export const FORA_DA_COBERTURA = new Set(["apresentador", "titulo-topico", "navegacao", "nenhum"]);
/** [porte Régie] No canal FACELESS não há gravação: o `apresentador` é preto e fica NA cobertura (como animação sem mundo). */
const FORA_DA_COBERTURA_FACELESS = new Set([...FORA_DA_COBERTURA].filter((m) => m !== "apresentador"));
const foraDaCobertura = (comApresentador) => (comApresentador ? FORA_DA_COBERTURA : FORA_DA_COBERTURA_FACELESS);
/** Os valores de `midia` que pedem registro do mundo. */
export const MIDIA_REAL = new Set(["footage", "foto", "drone"]);
/** Palcos que são registro legítimo, mas NÃO são o mundo filmado: não entram na parcela. */
export const PALCO_NAO_MUNDO = new Set(["documento", "mapa", "mapa3d"]);

/** A forma «isto não foi filmado» e parentes: sinal de dispensa, usado só para ORDENAR candidatas. */
export const SENHA_DISPENSA =
  /n[ãa]o\s+(foi\s+)?filmad|n[ãa]o\s+(h[áa]|existe|tem)\s+(nenhum\s+)?registro|sem\s+registro|nenhuma\s+c[âa]mera|desenho\s+nativo|abstra[çc][ãa]o\s+[ée]\s+desenho/i;
/** Nome próprio no meio da frase (maiúscula que não abre a frase). Heurística de ordenação, nunca veredito. */
const NOME_PROPRIO = /(?<![.!?:]\s|^)\b[A-ZÁÉÍÓÚÂÊÔÃÕ][a-záéíóúâêôãõç]{2,}/;

const lista = (v) => (Array.isArray(v) ? v.filter((x) => String(x).trim()) : []);
const prosa = (v) => String(v ?? "").trim();
const dur = (s) => Math.max(0, Number(s?.dur) || 0);

/** Aceita `{segmentos}`, `{cenas}` ou array cru — as três formas vivas no acervo. */
export function segmentosDe(json) {
  if (Array.isArray(json)) return json;
  return json?.segmentos || json?.cenas || [];
}

/** A cena vai à arte? (fora o Bôco — só onde ele existe —, a navegação e as janelas `anima:false`). */
export function ehCobertura(s, { comApresentador = false } = {}) {   // [porte Régie] padrão faceless
  return s?.anima !== false && !foraDaCobertura(comApresentador).has(String(s?.modo || ""));
}

/** O pedido diz O QUE buscar? `needs.midia` não conta: é a grafia de onde o asset mora. */
export function pedidoDizOQue(s) {
  return lista(s?.midia_termos).length > 0 || prosa(s?.midia_necessidade) !== "";
}

/**
 * Classe de uma cena de cobertura, em ordem de precedência:
 *   `documento` / `mapa`  → palco legítimo que não é o mundo filmado
 *   `real-mudo`           → pede registro e não diz o que buscar
 *   `mundo`               → imagem do mundo, com pedido que diz o que buscar
 *   `animacao`            → o resto
 */
export function classificar(s) {
  const modo = String(s?.modo || "");
  if (modo === "documento") return "documento";
  if (modo === "mapa" || modo === "mapa3d") return "mapa";
  if (!MIDIA_REAL.has(String(s?.midia))) return "animacao";
  return pedidoDizOQue(s) ? "mundo" : "real-mudo";
}

export function ehMundo(s, opcoes = {}) {
  return ehCobertura(s, opcoes) && classificar(s) === "mundo";
}

const arred = (x, casas = 1) => +Number(x).toFixed(casas);

/** A medida: segundos por classe e a parcela do mundo sobre o tempo de cobertura. */
export function medirParcela(segs, opcoes = {}) {   // [porte Régie] opcoes = { comApresentador }
  const cobertura = (segs || []).filter((s) => ehCobertura(s, opcoes));
  const segundos = { mundo: 0, documento: 0, mapa: 0, "real-mudo": 0, animacao: 0 };
  const cenas = { mundo: 0, documento: 0, mapa: 0, "real-mudo": 0, animacao: 0 };
  for (const s of cobertura) {
    const c = classificar(s);
    segundos[c] += dur(s);
    cenas[c] += 1;
  }
  const cobertura_s = cobertura.reduce((a, s) => a + dur(s), 0);
  const parcela = cobertura_s > 0 ? (100 * segundos.mundo) / cobertura_s : 0;
  return {
    segmentos: (segs || []).length,
    cobertura_cenas: cobertura.length,
    cobertura_s: arred(cobertura_s),
    mundo_s: arred(segundos.mundo),
    parcela: arred(parcela),
    segundos: Object.fromEntries(Object.entries(segundos).map(([k, v]) => [k, arred(v)])),
    cenas,
  };
}

/**
 * Lê a configuração do piso. Devolve `{ erro }` quando ela não serve para decidir — o gate NUNCA
 * cai para um número padrão calado: régua que ninguém escolheu não é régua.
 *
 * Vigente = `piso` numérico E `decidido_por` preenchido. Número sem decisor é recusado: é
 * exatamente o jeito de um piso entrar na casa sem que o dono o tenha escolhido.
 */
export function lerConfig(cfg) {
  if (!cfg || typeof cfg !== "object") return { erro: "configuração ausente ou ilegível" };
  const rec = cfg.recomendado || {};
  // [porte Régie] o RECOMENDADO é opcional no canal: o número que o estúdio tinha aqui (35/45, depois 50) foi medido e decidido
  // no Top10, e um canal pode não ter nenhum. Ausente = null (só o --duro precisaria dele, e sem ele o CLI sai 2); presente e
  // inválido continua sendo erro de configuração.
  const temRec = rec.piso !== null && rec.piso !== undefined;
  if (temRec && !(Number(rec.piso) > 0 && Number(rec.piso) < 100)) return { erro: "configuração com `recomendado.piso` inválido" };
  const temPiso = cfg.piso !== null && cfg.piso !== undefined;
  if (temPiso && !(Number(cfg.piso) > 0 && Number(cfg.piso) < 100)) return { erro: `\`piso\` inválido: ${JSON.stringify(cfg.piso)}` };
  if (temPiso && !prosa(cfg.decidido_por)) return { erro: "`piso` preenchido sem `decidido_por` — o número é decisão do dono, e sem decisor não vale" };
  const excecoes = Array.isArray(cfg.excecoes) ? cfg.excecoes : [];
  for (const e of excecoes) {
    if (!prosa(e?.slug) || !prosa(e?.motivo) || !prosa(e?.decidido_por) || !prosa(e?.em)) {
      return { erro: `exceção incompleta (exige slug, motivo, decidido_por e em): ${JSON.stringify(e)}` };
    }
    if (e.piso !== undefined && e.piso !== null && !(Number(e.piso) >= 15 && Number(e.piso) < 100)) {
      return { erro: `exceção de ${e.slug} com piso fora de [15, 100): ${e.piso}` };
    }
  }
  return {
    vigente: temPiso,
    piso: temPiso ? Number(cfg.piso) : null,
    decidido_por: temPiso ? prosa(cfg.decidido_por) : null,
    decidido_em: temPiso ? prosa(cfg.decidido_em) : null,
    recomendado: temRec ? Number(rec.piso) : null,
    alvo: Number(rec.alvo) || null,
    cobertura_minima_s: Number(cfg.cobertura_minima_s) > 0 ? Number(cfg.cobertura_minima_s) : 240,
    excecoes,
    lei: prosa(cfg.lei) || null,
  };
}

/**
 * Fora do escopo desta régua → devolve o motivo (o CLI sai 2, INDEFINIDO). Não é exceção: é
 * produto diferente, ou medida impossível.
 */
export function foraDoEscopo({ segs, medida, slug = "", ehCompilado = false, coberturaMinima = 240 }) {
  if (!segs || !segs.length) return "espelho sem cenas";
  const semMidia = segs.filter((s) => s?.midia === undefined).length;
  if (semMidia / segs.length > 0.3) return `${semMidia}/${segs.length} segmentos sem o campo \`midia\` — schema incompatível`;
  if (ehCompilado || /^compilado-/.test(slug)) return "compilado: a tela entre as cenas novas é material publicado, e a proporção dele foi decidida quando foi feito";
  if (medida.cobertura_s < coberturaMinima) return `cobertura de ${medida.cobertura_s} s, abaixo de ${coberturaMinima} s (vertical ou casca) — a parcela de poucas cenas não é régua`;
  return null;
}

/**
 * O veredito. `pisoHipotese` (a flag `--piso=N`) e `duro` tornam contratual uma régua que não foi
 * decidida — servem a quem testa uma hipótese na mão, nunca à receita da estação.
 */
export function decidir({ medida, config, slug = "", pisoHipotese = null, duro = false }) {
  const excecao = (config.excecoes || []).find((e) => e.slug === slug) || null;
  let piso, fonte, contratual;
  if (pisoHipotese !== null && pisoHipotese !== undefined) {
    piso = Number(pisoHipotese); fonte = "hipotese"; contratual = true;
  } else if (config.vigente) {
    piso = config.piso; fonte = "vigente"; contratual = true;
  } else {
    piso = config.recomendado; fonte = "recomendado"; contratual = !!duro;
  }
  if (excecao && fonte !== "hipotese") {
    if (excecao.piso === undefined || excecao.piso === null) {
      return { veredito: "ISENTO", exit: 0, piso, fonte, contratual: false, excecao, falta_s: faltaPara(medida, piso) };
    }
    piso = Number(excecao.piso); fonte = "excecao";
  }
  const falta_s = faltaPara(medida, piso);
  if (medida.parcela >= piso) return { veredito: "PASS", exit: 0, piso, fonte, contratual, excecao, falta_s: 0 };
  return contratual
    ? { veredito: "REPROVADO", exit: 1, piso, fonte, contratual, excecao, falta_s }
    : { veredito: "ABAIXO_DO_RECOMENDADO", exit: 0, piso, fonte, contratual, excecao, falta_s };
}

/** Segundos de imagem do mundo que faltam para a parcela chegar ao piso. */
export function faltaPara(medida, piso) {
  const alvo = (Number(piso) / 100) * medida.cobertura_s;
  return Math.max(0, Math.ceil(alvo - medida.mundo_s));
}

/**
 * Onde o montador tira os segundos que faltam — HEURÍSTICA para ordenar, nunca veredito.
 * Primeiro o pedido mudo (conserto de uma linha: escrever o que buscar); depois a animação com
 * sinal de coisa real (lugar declarado, nome próprio na âncora, ou a senha «não foi filmado»),
 * das mais longas para as mais curtas.
 */
export function candidatas(segs, limite = 15, opcoes = {}) {   // [porte Régie] opcoes = { comApresentador }
  const out = [];
  for (const s of (segs || []).filter((x) => ehCobertura(x, opcoes))) {
    const c = classificar(s);
    if (c !== "animacao" && c !== "real-mudo") continue;
    const sinais = [];
    if (c === "real-mudo") sinais.push("pedido-mudo");
    if (lista(s?.needs?.geo).length) sinais.push("lugar-declarado");
    if (NOME_PROPRIO.test(String(s?.ancora || ""))) sinais.push("nome-proprio-na-ancora");
    if (SENHA_DISPENSA.test(String(s?.motivo || ""))) sinais.push("senha-nao-foi-filmado");
    if (c === "animacao" && !sinais.length) continue;
    out.push({ id: s.id, modo: s.modo || null, midia: s.midia || null, dur: arred(dur(s)), sinais });
  }
  out.sort((a, b) =>
    (b.sinais.includes("pedido-mudo") - a.sinais.includes("pedido-mudo")) ||
    (b.sinais.length - a.sinais.length) ||
    (b.dur - a.dur));
  return out.slice(0, limite);
}
