// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/assets/brand/tokens.css (commit 4afda12) — só o PAPEL; o código é NOVO,
// escrito para a Régie. No estúdio, os portões cravavam a marca do Top10 no código ("Neue Haas" no
// _audit-til, pisos derivados de 1920 no qc-tamanho, teto 180 no qc-pais-bandeira). Aqui eles
// perguntam à marca do CANAL, e a marca mora num arquivo só: marca/tokens.css.
// Na integração da v1: os pisos do ofício vêm do motor (src/marca/tokens.mjs › OFICIO), com reserva igual e testada; lê --fonte-sec e --peso-minimo; hashDependenciasMarca() é o carimbo da marca que a medida usou.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
/**
 * MARCA-TOKENS — o que os portões precisam saber da marca do canal, lido de marca/tokens.css.
 *
 * Onde procura, nesta ordem:
 *   1. REGIE_MARCA_TOKENS (caminho de um tokens.css — para teste, ou para medir outra marca);
 *   2. <canal>/marca/tokens.css (o arquivo que o arquiteto-de-marca escreve);
 *   3. os tokens NEUTROS do motor, src/cena/marca-padrao/tokens.css (a marca padrão da Régie).
 * Se nenhum existe, devolve só o OFÍCIO (pisos físicos) e diz isso em `aviso` — nunca inventa fonte.
 *
 * ⚠️ MARCA × OFÍCIO. Os pisos físicos de legibilidade no palco 3840×2160 — herói/título 260,
 * rótulo 104, eixo 72, crédito 72 (REND-15 do estúdio, `_neutra/identidade.md` da Régie) — NÃO são
 * roupa de marca: são o tamanho abaixo do qual o texto não se lê numa TV. A marca pode SUBIR um piso
 * (`--piso-rotulo: 120px`), nunca descer: `pisosEfetivos()` fica com o maior dos dois. Um canal que
 * escrevesse `--piso-heroi: 100px` não compraria legibilidade com isso, só um verde falso.
 */
import { existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, isAbsolute, join, relative, resolve } from "node:path";
import { caminhoDoMotor, importarDoMotor, RAIZ_CANAL } from "./motor.mjs";

/**
 * [porte Régie] O OFÍCIO MORA NO MOTOR (src/marca/tokens.mjs › OFICIO) — é de lá que o gerador de
 * tokens tira os pisos que escreve no tokens.css. Uma cópia aqui seria o gêmeo que diverge: o motor
 * sobe um piso, o gerador o escreve, e o portão segue cobrando o número velho. A cópia abaixo fica
 * só como RESERVA para quando o motor não abre (máquina sem o motor clonado), e o teste
 * (testes/portoes-visuais.test.mjs) confere que ela é igual à do motor.
 * Carregado com await no topo: lerMarca() segue síncrona para quem a chama (qc-tipografia.mjs).
 * Nunca lança: um import que falhasse aqui derrubaria o gate ANTES do morrerComoNaoMedido (exit 1).
 */
export const RESERVA_OFICIO = Object.freeze({
  palco: Object.freeze({ largura: 3840, altura: 2160 }),
  pisos: Object.freeze({ heroi: 260, titulo: 260, rotulo: 104, eixo: 72, credito: 72 }),
});
const { oficio: OFICIO, origem: origemOficio } = await (async () => {
  try {
    const m = await importarDoMotor("src/marca/tokens.mjs");
    if (m?.OFICIO?.pisos && m?.OFICIO?.palco) return { oficio: m.OFICIO, origem: "motor (src/marca/tokens.mjs)" };
    return { oficio: RESERVA_OFICIO, origem: "reserva — o motor não exporta OFICIO" };
  } catch (e) {
    return { oficio: RESERVA_OFICIO, origem: `reserva — ${String(e?.message || e).split("\n")[0]}` };
  }
})();
/** De onde vieram os pisos do ofício ("motor …" ou "reserva — <motivo>"). */
export const ORIGEM_OFICIO = origemOficio;

/** Pisos do OFÍCIO em px no palco 4K (3840 de largura). Ficam, qualquer que seja a marca. */
export const PISOS_OFICIO_4K = Object.freeze({ ...OFICIO.pisos });
export const PALCO_4K = Object.freeze({ w: OFICIO.palco.largura, h: OFICIO.palco.altura });
/**
 * [porte Régie] PISO DE PESO de texto (decisão I3 da integração). O 600 do estúdio era decisão de
 * MARCA do Top10 (ARTE-148), não ofício: aqui o piso vem de `--peso-minimo` no tokens.css do canal,
 * e nunca fica abaixo de 400 — abaixo disso o traço some num 4K reduzido a 1080p (isso sim é ofício).
 * Marca neutra = 400.
 */
export const PESO_MINIMO_OFICIO = 400;
const PAPEIS = ["heroi", "titulo", "rotulo", "eixo", "credito"];
const GENERICAS = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "emoji", "math",
  "fangsong", "ui-serif", "ui-sans-serif", "ui-monospace", "ui-rounded"]);

/** Tira comentários `/* … *\/`. CRLF do Windows não atrapalha: as regex abaixo aceitam \r. */
const semComentarios = (css) => String(css).replace(/\/\*[\s\S]*?\*\//g, "");

/** Todas as custom properties (`--nome: valor;`) do texto, na ordem; a última declaração vence. */
export function lerVariaveis(css) {
  const vars = {};
  // a última declaração do bloco pode vir sem ";" (`--piso-rotulo:150px}` é CSS válido)
  for (const m of semComentarios(css).matchAll(/(--[a-zA-Z0-9_-]+)\s*:\s*([^;{}]+?)\s*(?=[;}])/g)) vars[m[1]] = m[2].trim();
  return vars;
}

/** Os blocos @font-face: família, peso (ou faixa "100 900"), estilo e os url() do src. */
export function lerFontFaces(css) {
  const faces = [];
  for (const m of semComentarios(css).matchAll(/@font-face\s*\{([^}]*)\}/g)) {
    const corpo = m[1];
    const prop = (n) => (new RegExp(`(?:^|;|\\s)${n}\\s*:\\s*([^;]+)`, "i").exec(corpo)?.[1] ?? "").trim();
    const familia = prop("font-family").replace(/^["']|["']$/g, "");
    const urls = [...prop("src").matchAll(/url\(\s*["']?([^"')]+)["']?\s*\)/g)].map((u) => u[1]);
    faces.push({ familia, peso: prop("font-weight") || "400", estilo: prop("font-style") || "normal", urls });
  }
  return faces;
}

/** Divide uma pilha `"Marca", system-ui, Arial` em nomes, respeitando aspas. */
export function familiasDaPilha(pilha) {
  const out = [];
  let atual = "", aspa = null;
  for (const c of String(pilha || "")) {
    if (aspa) { if (c === aspa) aspa = null; else atual += c; continue; }
    if (c === '"' || c === "'") { aspa = c; continue; }
    if (c === ",") { if (atual.trim()) out.push(atual.trim()); atual = ""; continue; }
    atual += c;
  }
  if (atual.trim()) out.push(atual.trim());
  return out;
}

/** "Marca" → `"Marca"`; genérica (serif, system-ui…) fica sem aspas, senão vira uma família inexistente. */
export const citarFamilia = (f) => (GENERICAS.has(String(f).toLowerCase()) ? f : `"${String(f).replace(/"/g, '\\"')}"`);
export const ehGenerica = (f) => GENERICAS.has(String(f).toLowerCase());

const px = (v) => { const m = /^(-?[\d.]+)px$/.exec(String(v ?? "").trim()); return m ? Number(m[1]) : null; };
const num = (v) => { const n = Number(String(v ?? "").trim()); return Number.isFinite(n) ? n : null; };

/** Interpreta o texto de um tokens.css. Pura: o teste a chama com texto, sem disco. */
export function interpretarTokens(css, { arquivo = null, origem = "texto" } = {}) {
  const v = lerVariaveis(css);
  const pilha = v["--fonte"] || null;
  const familias = familiasDaPilha(pilha);
  // [porte Régie] A SECUNDÁRIA (src/marca/tokens.mjs escreve --fonte-sec: "MarcaSec", "Marca", …, ou
  // var(--fonte) quando a marca não tem). Ela também é da marca: cena que escreve var(--fonte-sec)
  // não está "fora da marca", e o til dela tem de ser auditado como o da principal.
  const pilhaSec = v["--fonte-sec"] && !/^var\(\s*--fonte\s*\)$/.test(v["--fonte-sec"]) ? v["--fonte-sec"] : null;
  const familiaSec = pilhaSec ? (familiasDaPilha(pilhaSec)[0] ?? null) : null;
  const faces = lerFontFaces(css).map((f) => ({
    ...f,
    // url() relativo ao próprio tokens.css — é assim que o Chrome o resolve quando a cena liga o arquivo
    arquivos: arquivo ? f.urls.filter((u) => !/^(data:|https?:)/i.test(u)).map((u) => resolve(dirname(arquivo), decodeURIComponent(u.split(/[?#]/)[0]))) : [],
  }));
  const pesos = {};
  for (const [k, val] of Object.entries(v)) { const m = /^--peso-(.+)$/.exec(k); if (m && num(val) != null) pesos[m[1]] = num(val); }
  const alvos = {}, pisos = {};
  for (const p of PAPEIS) {
    if (px(v[`--fs-${p}`]) != null) alvos[p] = px(v[`--fs-${p}`]);
    if (px(v[`--piso-${p}`]) != null) pisos[p] = px(v[`--piso-${p}`]);
  }
  const palco = { w: px(v["--palco-largura"]) ?? PALCO_4K.w, h: px(v["--palco-altura"]) ?? PALCO_4K.h };
  const familia = familias[0] ?? null;
  return {
    origem, arquivo,
    pilha,                                    // a pilha inteira, como a cena a escreve em var(--fonte)
    familia,                                  // a família da MARCA (a primeira da pilha)
    reservas: familias.slice(1),
    pilhaSec, familiaSec,                     // a secundária (null quando é a própria --fonte)
    familiasMarca: [...new Set([familia, familiaSec].filter(Boolean))],
    pesoMinimo: Math.max(PESO_MINIMO_OFICIO, num(v["--peso-minimo"]) ?? PESO_MINIMO_OFICIO),
    faces, pesos, alvos, pisos, palco,
    cores: Object.fromEntries(Object.entries(v).filter(([k, val]) => /^#[0-9a-f]{3,8}$/i.test(val) && !/^--(fs|piso|peso)-/.test(k))),
    aviso: pilha ? null : `${arquivo || "o tokens.css"} não declara --fonte`,
  };
}

/** Onde está o tokens.css que vale para este canal (ou null). */
export function acharTokens({ env = process.env, raiz = RAIZ_CANAL } = {}) {
  if (env.REGIE_MARCA_TOKENS) {
    const c = isAbsolute(env.REGIE_MARCA_TOKENS) ? env.REGIE_MARCA_TOKENS : resolve(env.REGIE_MARCA_TOKENS);
    return { arquivo: c, origem: "REGIE_MARCA_TOKENS", existe: existsSync(c) };
  }
  const doCanal = join(raiz, "marca", "tokens.css");
  if (existsSync(doCanal)) return { arquivo: doCanal, origem: "canal", existe: true };
  try {
    const neutro = join(caminhoDoMotor(), "src", "cena", "marca-padrao", "tokens.css");
    if (existsSync(neutro)) return { arquivo: neutro, origem: "motor (marca neutra)", existe: true };
  } catch { /* sem motor: cai no ofício abaixo, e o aviso diz */ }
  return null;
}

/**
 * A marca do canal, pronta para os portões. Nunca lança por falta de arquivo: sem tokens.css,
 * devolve origem "oficio" com os pisos físicos e o `aviso` dizendo o que faltou.
 * REGIE_MARCA_TOKENS apontando para arquivo inexistente É erro (quem define a variável quer aquela).
 */
export function lerMarca(opcoes = {}) {
  const achado = acharTokens(opcoes);
  if (achado && !achado.existe) {
    const err = new Error(`REGIE_MARCA_TOKENS aponta para ${achado.arquivo}, que não existe.`);
    err.code = "SEM_MARCA";
    throw err;
  }
  if (!achado) {
    return {
      ...interpretarTokens("", { origem: "oficio" }),
      aviso: "não achei marca/tokens.css no canal nem a marca neutra do motor — só os pisos do ofício valem",
    };
  }
  return interpretarTokens(readFileSync(achado.arquivo, "utf8"), { arquivo: achado.arquivo, origem: achado.origem });
}

/**
 * Pisos que um portão cobra num palco de `largura` px: o MAIOR entre o do ofício e o da marca, por
 * papel, escalado pela largura (os dois são declarados em 4K). Arredonda como o estúdio arredondava.
 */
export function pisosEfetivos(marca, largura = PALCO_4K.w) {
  const k = largura / PALCO_4K.w;
  const out = {};
  for (const p of PAPEIS) out[p] = Math.round(Math.max(PISOS_OFICIO_4K[p], marca?.pisos?.[p] ?? 0) * k);
  return out;
}

/**
 * [porte Régie] PISO DO CRÉDITO DE MAPA: 40 px no palco 4K (docs/CREDITO-DE-MAPA.md §6.2 e §6.4).
 *
 * O crédito da base do mapa (OSM, MapTiler, EOX) fica NA TELA do primeiro ao último quadro em que o
 * mapa aparece. A 72 px (o piso geral de crédito) ele ocupa ~1,5% do quadro a cena toda; o molde do
 * motor (src/mapa/moldes/mapa-base.html) usa 46 px, que é o mínimo da Apple para TV (23 pt em
 * 1080p), e a regra é nunca descer de 40 px — a casa já julgou ilegíveis os créditos de 36–42 px.
 * Vale só para o texto marcado `data-qc-credito="mapa"` (nele ou num ancestral) cujo papel é crédito
 * ou nenhum: a marca não afrouxa o piso de herói, rótulo ou eixo de ninguém. A marca do canal não
 * mexe neste número: ele é regra do crédito de mapa, não roupa de marca.
 */
export const PISO_CREDITO_MAPA_4K = 40;
export const pisoCreditoMapa = (largura = PALCO_4K.w) => Math.round(PISO_CREDITO_MAPA_4K * (largura / PALCO_4K.w));

/**
 * [porte Régie] O CARIMBO DA MARCA QUE A MEDIDA USOU (decisão I9 da integração).
 *
 * O _portao.json era ancorado só no hash do HTML. Só que tamanho e til leem marca/tokens.css e as
 * fontes da marca, e carga e colisão mudam com a métrica da fonte: trocar a marca sem tocar no HTML
 * deixava o carimbo velho valendo — verde para cena que agora sai na fonte reserva ou abaixo do piso
 * novo. É a mesma regra que o motor já segue na captura (src/lib/captura-png.mjs: "trocar a marca
 * sem mexer no HTML tem de refazer a peça").
 *
 * sha1 (12 hex) do CONTEÚDO do tokens.css resolvido e de cada arquivo de fonte que ele declara, na
 * ordem declarada. Arquivo que falta entra como "ausente:<caminho>" — sumir com a fonte também muda
 * o carimbo. Sem tokens.css nenhum, o hash é o do ofício.
 */
export function hashDependenciasMarca(marca) {
  const h = createHash("sha1");
  h.update(`oficio:${JSON.stringify(PISOS_OFICIO_4K)}\n`);
  if (!marca?.arquivo) { h.update("sem-tokens\n"); return h.digest("hex").slice(0, 12); }
  // o rótulo é o caminho RELATIVO ao tokens.css: mudar o canal de pasta não invalida carimbo nenhum
  const rel = (a) => relative(dirname(marca.arquivo), a).split("\\").join("/");
  const parte = (rotulo, caminho) => {
    h.update(`${rotulo}\n`);
    try { h.update(readFileSync(caminho)); } catch { h.update(`ausente:${rotulo}`); }
    h.update("\n");
  };
  parte("tokens", marca.arquivo);
  const arquivos = [...new Set((marca.faces || []).flatMap((f) => f.arquivos || []))];
  for (const a of arquivos) parte(`fonte:${rel(a)}`, a);
  return h.digest("hex").slice(0, 12);
}
