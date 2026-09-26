// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O que é: o contador do teto diário do Shutterstock POR CONTA do dono — um escritor só para a
// pergunta "quantos downloads do Shutterstock esta conta ainda tem hoje?".
//
// Por que por CONTA, e não por canal (ADR 0009 §D, decisão do Mateus em 23/09/2026 ~20h20,
// docs/planejamento/V1-PLANO.md "Shutterstock"): cada dono usa a PRÓPRIA conta Shutterstock, com o
// limite dela (100 downloads por dia). O limite é da conta — se o mesmo dono tem dois canais no mesmo
// PC, os dois gastam do mesmo dia. Por isso o registro mora na MÁQUINA, fora de qualquer canal:
//   %USERPROFILE%\.regie\estado\shutterstock\<conta>.jsonl
// (os.homedir(): no Windows é o %USERPROFILE%; é também onde o ADR 0009 §A põe o estado de cota).
// Fora do repositório de propósito: é estado de máquina, e um merge ou um worktree não o duplicam.
//
// Quem conta aqui: a caça pelo Chrome (scripts/stock/registrar-download.mjs) e a API oficial
// (scripts/stock/api-oficial.mjs, desligada por padrão) — as duas portas gastam o MESMO dia da conta
// (medido no estúdio em 10/set/2026: API e site dividem o mesmo pote diário; api-oficial.mjs:74-95).
// Dois contadores do mesmo teto divergem exatamente no dia em que importa (regra 1 da casa).
//
// O que ele NÃO sabe: o que o dono baixou à mão no site, fora desta máquina. A verdade é o banner da
// própria plataforma ("Você atingiu o limite de downloads por hoje"); por isso existe o ACERTO: uma
// linha que diz "hoje já foram N" e passa a valer daí para a frente. O contador local é uma guarda
// para não gastar às cegas, não uma leitura da conta.
//
// Formato do registro (JSONL, uma linha por evento, só acrescenta):
//   {"ts":"…","dia":"2026-09-23","conta":"lucas-rosa","n":1,"via":"chrome","canal":"alpha-point","url":"…"}
//   {"ts":"…","dia":"2026-09-23","conta":"lucas-rosa","acerto":37,"motivo":"o site mostrou 63 restantes"}
// Linha ilegível é ERRO (fail-closed: contar errado poderia furar o teto). BOM e CRLF são tolerados
// (arquivo aberto e salvo no Bloco de Notas do Windows).
//
// O dia é o do FUSO configurado (padrão America/Sao_Paulo — o dono opera do Brasil). A plataforma
// pode virar o dia noutra hora; quando o banner disser a hora do reset, vale o banner, e o acerto
// alinha o contador.
//
// Configuração: marca/midia.json do canal, campo "shutterstock" (a forma está em
// lerConfigShutterstock). Sem o arquivo ou sem o campo, valem os padrões. Arquivo ilegível ou campo
// mal formado é ERRO que ensina, nunca "segue com o padrão" (I5).
//
// Nenhum token, senha ou cookie passa por aqui: só números, a URL pública do item e o apelido da conta.
// Dependência npm: nenhuma. Não importa nada do motor (roda até sem o motor no disco).
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { appendFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join } from "node:path";

export const PADRAO = Object.freeze({ tetoDia: 100, fuso: "America/Sao_Paulo" });
/** Um teto acima disto é erro de digitação, não plano de assinatura. */
export const TETO_MAXIMO = 10_000;

const APELIDO = /^[a-z0-9](?:[a-z0-9-]{0,38}[a-z0-9])?$/;

const FORMA = [
  "  Forma esperada em marca/midia.json (todos os campos sao opcionais):",
  "    \"shutterstock\": {",
  "      \"conta\": \"<apelido da SUA conta, ex.: lucas-rosa>\",   (sem ele: o dono do canal, canal.json > owner)",
  `      "teto_dia": ${PADRAO.tetoDia},                                  (downloads por dia da conta)`,
  `      "fuso": "${PADRAO.fuso}",                    (o fuso em que o dia vira)`,
  "      \"api_oficial\": { \"ligada\": false, \"usuario\": null }",
  "    }",
].join("\n");

/** Apelido de arquivo: minúsculas, sem acento, hífen no lugar do resto. "Lucas Rosa" → "lucas-rosa". */
export function apelidoDe(texto) {
  return String(texto ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40).replace(/-+$/, "");
}

/** JSON de arquivo do canal, com BOM, CRLF e UTF-16 tolerados. Ilegível = erro JSON_ILEGIVEL. */
export function lerJsonDoCanal(caminho, rotulo) {
  let texto;
  try { texto = readFileSync(caminho, "utf8"); }
  catch (e) { throw Object.assign(new Error(`nao consegui ler ${rotulo} (${e.code || e.message}).`), { code: "JSON_ILEGIVEL" }); }
  // UTF-16 (o "Unicode" do Bloco de Notas antigo / Out-File do PowerShell 5.1) vira lixo em utf8:
  // detecta pelo byte nulo e relê do jeito certo, em vez de reclamar de um JSON que está certo.
  if (texto.includes("\u0000")) {
    try { texto = readFileSync(caminho, "utf16le"); } catch { /* cai no parse e ensina */ }
  }
  try { return JSON.parse(texto.replace(/^\uFEFF/, "")); }
  catch (e) {
    throw Object.assign(new Error(`${rotulo} esta ilegivel (${e.message}). Conserte o JSON: com a configuracao ilegivel, nada do Shutterstock roda.`), { code: "JSON_ILEGIVEL" });
  }
}

/**
 * A configuração do Shutterstock NESTE canal — o leitor ÚNICO do campo "shutterstock" de
 * marca/midia.json (o api-oficial.mjs também lê daqui).
 *
 * @returns {{conta: string, contaOrigem: string, tetoDia: number, fuso: string,
 *            api: {ligada: boolean, usuario: string|null}, origem: string}}
 */
export function lerConfigShutterstock(raizCanal) {
  const erro = (msg) => Object.assign(new Error(`${msg}\n${FORMA}`), { code: "CONFIG_INVALIDA" });
  const arq = join(raizCanal, "marca", "midia.json");
  const j = existsSync(arq) ? lerJsonDoCanal(arq, "marca/midia.json") : null;
  if (j !== null && (typeof j !== "object" || Array.isArray(j))) throw erro("marca/midia.json nao e um objeto JSON.");

  // O campo antigo (revisão I4) e o pote do Top10 são recusados com a forma nova: um "ligado": false
  // de alguém não pode sumir calado, e o pote integrated_media é de uma conta que o canal não usa.
  if (j && Object.prototype.hasOwnProperty.call(j, "shutterstock_api")) {
    throw erro("marca/midia.json tem o campo antigo \"shutterstock_api\". Troque-o pelo campo \"shutterstock\" (a API oficial agora e\n  \"shutterstock\": { \"api_oficial\": { \"ligada\": true, \"usuario\": \"<seu usuario>\" } }, e o teto e da SUA conta).");
  }
  const c = j?.shutterstock ?? null;
  if (c !== null && (typeof c !== "object" || Array.isArray(c))) throw erro("\"shutterstock\" em marca/midia.json nao e um objeto.");
  if (c && Object.prototype.hasOwnProperty.call(c, "integrated_media")) {
    throw erro("\"shutterstock.integrated_media\" e o pote mensal da conta do Top10, e este canal nao usa conta do Top10 no Shutterstock\n  (ADR 0009 D: cada dono usa a propria conta). Apague o campo.");
  }

  // conta: o apelido explícito, senão o dono do canal (canal.json › owner). Nunca e-mail: o arquivo vai
  // para o git, e o apelido basta para separar as contas nesta máquina.
  let conta = null, contaOrigem = null;
  if (c?.conta !== undefined && c?.conta !== null) {
    if (typeof c.conta !== "string" || c.conta.includes("@") || !APELIDO.test(c.conta)) {
      throw erro(`"shutterstock.conta" tem de ser um apelido curto (letras minusculas, numeros e hifen, sem e-mail); veio ${JSON.stringify(c.conta)}.`);
    }
    conta = c.conta; contaOrigem = "marca/midia.json";
  } else {
    const arqCanal = join(raizCanal, "canal.json");
    const canal = existsSync(arqCanal) ? lerJsonDoCanal(arqCanal, "canal.json") : null;
    const doDono = apelidoDe(canal?.owner);
    if (doDono) { conta = doDono; contaOrigem = "canal.json > owner"; }
  }
  if (!conta) {
    throw erro("nao sei de qual conta Shutterstock e este canal: canal.json nao tem \"owner\" e marca/midia.json nao tem \"shutterstock.conta\".");
  }

  let tetoDia = PADRAO.tetoDia;
  if (c?.teto_dia !== undefined) {
    if (!Number.isInteger(c.teto_dia) || c.teto_dia < 0 || c.teto_dia > TETO_MAXIMO) {
      throw erro(`"shutterstock.teto_dia" tem de ser um inteiro de 0 a ${TETO_MAXIMO} (o limite diario do plano da SUA conta; o padrao e ${PADRAO.tetoDia}); veio ${JSON.stringify(c.teto_dia)}.`);
    }
    tetoDia = c.teto_dia;
  }

  let fuso = PADRAO.fuso;
  if (c?.fuso !== undefined) {
    if (typeof c.fuso !== "string" || !fusoValido(c.fuso)) throw erro(`"shutterstock.fuso" tem de ser um fuso IANA (ex.: "America/Sao_Paulo"); veio ${JSON.stringify(c.fuso)}.`);
    fuso = c.fuso;
  }

  const api = { ligada: false, usuario: null };
  if (c?.api_oficial !== undefined) {
    const a = c.api_oficial;
    if (!a || typeof a !== "object" || Array.isArray(a) || typeof a.ligada !== "boolean") {
      throw erro(`"shutterstock.api_oficial" tem de ser { "ligada": true|false, "usuario": "<usuario da SUA conta>" }; veio ${JSON.stringify(a)}.`);
    }
    if (a.usuario !== undefined && a.usuario !== null && (typeof a.usuario !== "string" || !a.usuario.trim())) {
      throw erro(`"shutterstock.api_oficial.usuario" tem de ser o nome de usuario da sua conta Shutterstock (texto); veio ${JSON.stringify(a.usuario)}.`);
    }
    api.ligada = a.ligada;
    api.usuario = typeof a.usuario === "string" ? a.usuario.trim() : null;
  }

  return { conta, contaOrigem, tetoDia, fuso, api, origem: j ? "marca/midia.json" : "padrao (sem marca/midia.json)" };
}

function fusoValido(fuso) {
  try { new Intl.DateTimeFormat("en-CA", { timeZone: fuso }); return true; } catch { return false; }
}

/** O dia (AAAA-MM-DD) de `quando` no fuso dado. */
export function diaNoFuso(quando, fuso = PADRAO.fuso) {
  const d = quando instanceof Date ? quando : new Date(quando);
  // en-CA formata como AAAA-MM-DD; formatToParts evita depender disso.
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: fuso, year: "numeric", month: "2-digit", day: "2-digit" })
    .formatToParts(d).filter((x) => x.type !== "literal").map((x) => [x.type, x.value]));
  return `${p.year}-${p.month}-${p.day}`;
}

/** Onde mora o registro desta conta nesta máquina. `home` injetável para o teste. */
export function arquivoDaConta(conta, { home = homedir() } = {}) {
  return join(home, ".regie", "estado", "shutterstock", `${conta}.jsonl`);
}

/** As linhas do registro. Ilegível = erro com a linha (fail-closed). Ausente = []. */
export function lerRegistro(arquivo) {
  if (!existsSync(arquivo)) return [];
  let texto = readFileSync(arquivo, "utf8");
  if (texto.includes("\u0000")) texto = readFileSync(arquivo, "utf16le");
  const linhas = [];
  texto.replace(/^\uFEFF/, "").split(/\r?\n/).forEach((l, i) => {
    if (!l.trim()) return;
    try { linhas.push(JSON.parse(l)); }
    catch {
      throw Object.assign(new Error(`linha ${i + 1} ilegivel em ${arquivo} — conserte-a (ou apague so essa linha): sem ler o registro, o teto do Shutterstock nao pode ser conferido.`), { code: "JSON_ILEGIVEL" });
    }
  });
  return linhas;
}

/** Quantos downloads o registro conta para `dia`: o último acerto do dia, mais o que veio depois dele. */
export function usadosNoDia(linhas, dia) {
  let total = 0;
  for (const l of linhas) {
    if (l?.dia !== dia) continue;
    if (Number.isInteger(l.acerto) && l.acerto >= 0) total = l.acerto;
    else if (Number.isInteger(l.n) && l.n > 0) total += l.n;
  }
  return total;
}

/**
 * Quanto resta HOJE na conta deste canal.
 * @returns {{restante: number, usados: number, teto: number, dia: string, conta: string, fuso: string, arquivo: string}}
 */
export function restante(raizCanal, { agora = Date.now(), home = homedir(), config = null } = {}) {
  const cfg = config || lerConfigShutterstock(raizCanal);
  const arquivo = arquivoDaConta(cfg.conta, { home });
  const dia = diaNoFuso(agora, cfg.fuso);
  const usados = usadosNoDia(lerRegistro(arquivo), dia);
  return { restante: Math.max(0, cfg.tetoDia - usados), usados, teto: cfg.tetoDia, dia, conta: cfg.conta, fuso: cfg.fuso, arquivo };
}

function acrescentar(arquivo, linha) {
  mkdirSync(dirname(arquivo), { recursive: true });
  // Uma escrita só, em modo de acréscimo: duas sessões que registram ao mesmo tempo não se apagam.
  appendFileSync(arquivo, `${JSON.stringify(linha)}\n`);
}

/**
 * Conta `n` downloads da conta deste canal. Grava ANTES de conferir o resto: o download já
 * aconteceu, e um registro que falha em ler o passado não pode deixar de contar o presente.
 * @returns o mesmo que restante(), ou {…, erro} quando o registro não pôde ser relido depois.
 */
export function registrar(raizCanal, n = 1, { agora = Date.now(), home = homedir(), config = null, via = null, url = null, canal = null } = {}) {
  if (!Number.isInteger(n) || n < 1) throw Object.assign(new Error(`registrar precisa de um inteiro >= 1; veio ${JSON.stringify(n)}.`), { code: "USO" });
  const cfg = config || lerConfigShutterstock(raizCanal);
  const arquivo = arquivoDaConta(cfg.conta, { home });
  acrescentar(arquivo, {
    ts: new Date(agora).toISOString(), dia: diaNoFuso(agora, cfg.fuso), conta: cfg.conta, n,
    ...(via ? { via } : {}), ...(canal ? { canal } : {}), ...(url ? { url: String(url) } : {}),
  });
  try { return restante(raizCanal, { agora, home, config: cfg }); }
  catch (e) { return { restante: null, usados: null, teto: cfg.tetoDia, dia: diaNoFuso(agora, cfg.fuso), conta: cfg.conta, fuso: cfg.fuso, arquivo, erro: e.message }; }
}

/**
 * ACERTO: "hoje a conta já gastou `usados`" — o número que o site mostra. Vale daí para a frente.
 * É o conserto quando o dono baixou à mão fora desta máquina, ou quando o banner de limite apareceu
 * antes do contador chegar ao teto.
 */
export function acertar(raizCanal, usados, { agora = Date.now(), home = homedir(), config = null, motivo = null } = {}) {
  const cfg = config || lerConfigShutterstock(raizCanal);
  if (!Number.isInteger(usados) || usados < 0 || usados > TETO_MAXIMO) {
    throw Object.assign(new Error(`o acerto tem de ser um inteiro de 0 a ${TETO_MAXIMO} (quantos downloads a conta ja gastou hoje); veio ${JSON.stringify(usados)}.`), { code: "USO" });
  }
  const arquivo = arquivoDaConta(cfg.conta, { home });
  acrescentar(arquivo, { ts: new Date(agora).toISOString(), dia: diaNoFuso(agora, cfg.fuso), conta: cfg.conta, acerto: usados, ...(motivo ? { motivo: String(motivo).slice(0, 200) } : {}) });
  return restante(raizCanal, { agora, home, config: cfg });
}

/** Uma linha para o dono ler. */
export function descrever(r) {
  if (r.restante === null) return `Shutterstock (conta ${r.conta}): o registro nao pode ser relido (${r.erro}).`;
  return `Shutterstock (conta ${r.conta}): ${r.usados} de ${r.teto} downloads usados hoje (${r.dia}, fuso ${r.fuso}) — restam ${r.restante}.`;
}
