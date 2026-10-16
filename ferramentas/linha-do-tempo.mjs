#!/usr/bin/env node
// linha-do-tempo.mjs — a linha do tempo pré-render: o Lucas assiste ao vídeo inteiro, com a narração mandando no tempo,
// ANTES do render 4K das cenas sem mapa, e comenta onde quiser (tecla C).
//
// Pedido do Lucas (02/10/2026): "Pensei em termos um "front-end" para vermos as cenas antes de serem renderizadas", "como
// uma "web time-line"". Decisões dele: "Neste PC (Recomendado)" (o servidor atende só este PC) e "Sim, antes do render
// (Recomendado)" (o "sim" dele no chat passa a segurar o render). O desenho inteiro: ferramentas/linha-do-tempo/DESENHO.md;
// como usar: ferramentas/linha-do-tempo/LEIA-ME.md.
//
// Uso (cwd na raiz do canal; --raiz=<pasta> troca a raiz, para provas numa cópia):
//   node ferramentas/linha-do-tempo.mjs servir <proj> [--porta=8790] [--forcar-rascunho=s05,s44] [--tailscale=lucasrosa-casa]
//     --tailscale: atende também UM aparelho do tailnet, do mesmo dono deste PC, pelo Tailscale Serve (Lucas, 16/10/2026:
//     "Só o meu aparelho (Recomendado)"). O servidor continua só em 127.0.0.1; o Serve se liga à parte, com
//     `tailscale serve --bg --http=<porta> http://127.0.0.1:<porta>`, e se desliga com `tailscale serve --http=<porta> off`.
//   node ferramentas/linha-do-tempo.mjs estado <proj> [--json]
//   node ferramentas/linha-do-tempo.mjs proxies <proj> [--cena=s05,s07]
//   node ferramentas/linha-do-tempo.mjs quadros <proj> [--cena=s02,s23] [--fps=2]      (abre Chrome: nunca com render rodando)
//   node ferramentas/linha-do-tempo.mjs aprovar <proj> --mensagem="<literal do Lucas>" --hora="<hora dele>" --assinatura=<a do estado>
//   node ferramentas/linha-do-tempo.mjs conferir <proj> [--depois-do-render]
// Saída: 0 = feito (no conferir: tudo aprovado) · 1 = falta algo (a lista diz o quê) · 2 = não rodou (uso, projeto, motor).
import { execFileSync, spawn } from "node:child_process";
import { mkdirSync, realpathSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  ConjuntoMudou, MOTOR, NaoRodou, RAIZ_CANAL, aprovar, carregarMotor, conferir, estadoDoProjeto, lerLinha, pastaLinha,
} from "./linha-do-tempo/linha.mjs";

const USO = `uso:
  node ferramentas/linha-do-tempo.mjs servir <proj> [--porta=8790] [--forcar-rascunho=<id>[,<id>]] [--tailscale=<aparelho>]
  node ferramentas/linha-do-tempo.mjs estado <proj> [--json]
  node ferramentas/linha-do-tempo.mjs proxies <proj> [--cena=<id>[,<id>]]
  node ferramentas/linha-do-tempo.mjs quadros <proj> [--cena=<id>[,<id>]] [--fps=2]
  node ferramentas/linha-do-tempo.mjs aprovar <proj> --mensagem="<literal>" --hora="<hora>" --assinatura=<a do estado>
  node ferramentas/linha-do-tempo.mjs conferir <proj> [--depois-do-render]
  (todos aceitam --raiz=<pasta>; o padrão é a raiz do canal)`;

const VERBOS = ["servir", "estado", "proxies", "quadros", "aprovar", "conferir"];
const OPCOES = {
  servir: ["porta", "forcar-rascunho", "raiz", "tailscale"], estado: ["json", "raiz"], proxies: ["cena", "raiz", "json"],
  quadros: ["cena", "fps", "raiz", "json"], aprovar: ["mensagem", "hora", "assinatura", "raiz", "json"],
  conferir: ["depois-do-render", "raiz", "json"],
};

function lerArgs(argv) {
  const a = { posicionais: [], op: {} };
  for (const x of argv) {
    const m = /^--([a-z-]+)(?:=([\s\S]*))?$/.exec(x);
    if (m) a.op[m[1]] = m[2] === undefined ? true : m[2];
    else a.posicionais.push(x);
  }
  return a;
}
const lista = (v) => (typeof v === "string" && v.trim() ? v.split(",").map((s) => s.trim()).filter(Boolean) : null);

const mmss = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(1).padStart(4, "0")}`;

// ─── verbos ──────────────────────────────────────────────────────────────────────────────────────

async function cmdEstado(m, raiz, proj, op) {
  const est = estadoDoProjeto(m, raiz, proj);
  if (op.json) { console.log(JSON.stringify(est, null, 2)); return 0; }
  const r = est.resumo;
  console.log(`${proj}: ${r.cenas} cenas em ${mmss(est.duracao)} (${est.totalQuadros} quadros) — ${r.porTipo.dom} de página, ` +
    `${r.porTipo.video} com vídeo, ${r.porTipo.mapa} de mapa (${r.mapaProxy} pelo clipe, ${r.mapaRascunho} em rascunho)` +
    (r.porTipo.falta ? `, ${r.porTipo.falta} sem HTML` : ""));
  if (est.fundidas.length) console.log(`  fundidas: ${est.fundidas.map((f) => `${f.id}→${f.em}`).join(", ")}`);
  if (est.orfas.length) console.log(`  HTML fora da linha (não toca): ${est.orfas.join(", ")}`);
  console.log(`  vistas nesta versão: ${r.vistasAtual} · mudaram depois de vistas: ${r.vistasVelhas} · ` +
    `comentários abertos: ${r.comentariosAbertos} (em ${r.cenasComComentario} cena(s)) · aprovadas nesta versão: ${r.aprovadasAtual}`);
  const pend = r.cenas - r.vistasAtual;
  console.log(`\n  Para o chat: "Você viu ${r.vistasAtual} das ${r.cenas} na versão de hoje` +
    (r.comentariosAbertos ? ` e comentou ${r.cenasComComentario}` : "") + (pend ? `; faltam ${pend}` : "") +
    (r.semSatelite.length ? `; ${r.semSatelite.length} mapa(s) você viu só em rascunho, sem satélite, e ficam para depois do clipe` : "") +
    `. Renderizo as ${r.aRenderizar.length}?"`);
  // O "sim" aprova exatamente este conjunto: o aprovar recusa se ele mudar até lá (uma cena vista no meio do caminho).
  console.log(`  Aprováveis agora (${r.aprovaveis.length}): ${r.aprovaveis.join(", ") || "nenhuma"}`);
  console.log(`  Com o "sim": aprovar ${proj} --mensagem="<literal>" --hora="<hora>" --assinatura=${r.assinatura}`);
  if (r.aRenderizarForcar.length) console.log(`  Renderizar com --forcar (o carimbo do render só olha o HTML, e um arquivo da cena é mais novo que o clipe): ${r.aRenderizarForcar.join(", ")}`);
  if (r.comErro.length) console.log(`  Com erro (não toca, não se aprova): ${r.comErro.join(", ")}`);
  console.log("");
  for (const c of est.cenas) {
    const marcas = [c.visto === "atual" ? "vista" : c.visto === "velho" ? "NOVA VERSÃO" : "não vista",
      c.abertos ? `${c.abertos} comentário(s)` : null, c.aprovada === "atual" ? "aprovada" : null,
      c.modoMapa === "rascunho" ? `rascunho (${c.motivoMapa})` : c.modoMapa === "proxy" ? "mapa pelo clipe" : null,
      c.avisoRelevo ? "relevo plano: anel e rótulos fora do lugar" : null, c.semSatelite ? "vista só em rascunho" : null,
      c.tipo !== "falta" && !c.clipeEmDia ? `clipe: ${c.motivoClipe}` : null, c.erro || null].filter(Boolean);
    console.log(`  ${c.id.padEnd(5)} ${String(c.ini).padStart(6)}–${String(c.fim).padEnd(6)} ${c.tipo.padEnd(5)} ${(c.sha1 || "").slice(0, 8)}  ${marcas.join(" · ")}`);
  }
  return 0;
}

async function cmdProxies(m, raiz, proj, op) {
  const { gerarProxies } = await import("./linha-do-tempo/mapa.mjs");
  const linha = lerLinha(m, raiz, proj);
  const cenas = lista(op.cena);
  if (cenas) {
    const fora = cenas.filter((id) => !linha.cenas.some((c) => c.id === id));
    if (fora.length) { console.error(`✗ cena fora da linha: ${fora.join(", ")}`); return 2; }
  }
  const r = await gerarProxies(m, raiz, linha, { cenas, log: (s) => console.log("  " + s) });
  if (op.json) console.log(JSON.stringify(r, null, 2));
  for (const p of r.pulados) console.log(`  ${p.id}: pulada — ${p.motivo}`);
  console.log(`${r.feitos.length} proxy(s) feito(s), ${r.pulados.length} pulado(s), ${r.falhas.length} falha(s)`);
  return r.falhas.length ? 1 : 0;
}

/**
 * Quadros para a revisão de espectador (DESENHO, A.7 passo 4): as cenas de página pelo caminho de captura do render
 * (captura-png do motor, DPR 0,5 = 1080p), as de mapa do clipe 4K em dia pelo ffmpeg. Abre Chrome: NUNCA com render
 * rodando neste PC, e nunca antes de o Claude central provar este verbo.
 */
async function cmdQuadros(m, raiz, proj, op) {
  // A pré-carga do canal (CLAUDE.md, "Tropeços"): sem ela, um quadro acima de 4 MB derruba a conexão com o Chrome.
  // Uma volta só: o filho leva LT_PRECARGA=1, e se nele o WebSocket continua sem a troca, para (nada de cadeia de node).
  if (globalThis.WebSocket?.name !== "WebSocketSemCompressao") {
    if (process.env.LT_PRECARGA === "1") {
      console.error("✗ a pré-carga do canal (ferramentas/cdp-sem-compressao.mjs) não trocou o WebSocket do Node: o verbo quadros não roda sem ela." +
        "\n  Confira o aviso dela acima (o dispatcher global do Node) e se algum NODE_OPTIONS desliga o WebSocket.");
      return 2;
    }
    const pre = pathToFileURL(join(RAIZ_CANAL, "ferramentas", "cdp-sem-compressao.mjs")).href;
    return await new Promise((ok) => {
      const p = spawn(process.execPath, ["--import", pre, fileURLToPath(import.meta.url), ...process.argv.slice(2)],
        { stdio: "inherit", windowsHide: true, env: { ...process.env, LT_PRECARGA: "1" } });
      p.on("exit", (c) => ok(c ?? 1)); p.on("error", (e) => { console.error(`✗ ${e.message}`); ok(2); });
    });
  }
  const fps = Number(op.fps ?? 2);
  if (!(fps > 0 && fps <= 30)) { console.error("✗ --fps tem de ser um número entre 0 e 30"); return 2; }
  const linha = lerLinha(m, raiz, proj);
  const ids = lista(op.cena);
  const cenas = linha.cenas.filter((c) => !ids || ids.includes(c.id));
  if (ids && cenas.length !== ids.length) { console.error(`✗ cena fora da linha: ${ids.filter((i) => !cenas.some((c) => c.id === i)).join(", ")}`); return 2; }
  const base = join(pastaLinha(raiz, proj), "quadros");
  const resumo = [];
  let falhas = 0;
  const posicoes = (c) => { const out = []; for (let k = 0; k / fps < c.n / 30 - 1e-9; k++) out.push(+(k / fps).toFixed(4)); return out; };

  // Mapa: do clipe, num ffmpeg só por cena (select pelos números dos quadros).
  for (const c of cenas.filter((x) => x.tipo === "mapa")) {
    if (!c.clipeEmDia) { resumo.push({ id: c.id, pulada: "sem clipe 4K em dia" }); console.log(`  ${c.id}: pulada — sem clipe 4K em dia`); continue; }
    const pasta = join(base, c.id); mkdirSync(pasta, { recursive: true });
    const ts = posicoes(c), qs = ts.map((t) => Math.round(t * 30));
    const t0 = Date.now();
    try {
      await m.rodar(m.FFMPEG(), ["-y", "-v", "error", "-i", join(raiz, "out", proj, "graphics", `${c.id}.mp4`),
        "-vf", `select='${qs.map((q) => `eq(n\\,${q})`).join("+")}',scale=1920:1080`, "-fps_mode", "passthrough",
        join(pasta, `${c.id}@%03d.png`)]);
      resumo.push({ id: c.id, posicoes: ts.length, de: "clipe", segundos: (Date.now() - t0) / 1000 });
      console.log(`  ${c.id}: ${ts.length} quadros do clipe (${((Date.now() - t0) / 1000).toFixed(1)} s; ${c.id}@001.png = ${ts[0]} s, de ${1 / fps} em ${1 / fps} s)`);
    } catch (e) { falhas++; resumo.push({ id: c.id, erro: e.message }); console.error(`  ${c.id}: ✗ ${e.message}`); }
  }

  const deCaptura = cenas.filter((x) => x.tipo !== "mapa" && x.tipo !== "falta");
  if (deCaptura.length) {
    const motor = (rel) => import(pathToFileURL(join(MOTOR, ...rel.split("/"))).href);
    const { abrirPagina } = await motor("src/lib/captura-png.mjs");
    const { abrirChrome, acharChrome, semChromeMensagem } = await motor("src/lib/chrome.mjs");
    const chrome = acharChrome();
    if (!chrome) { console.error("✗ " + semChromeMensagem()); return 2; }
    const nav = await abrirChrome({ caminho: chrome, prazoComandoMs: 120_000 });
    try {
      for (const c of deCaptura) {
        const pasta = join(base, c.id); mkdirSync(pasta, { recursive: true });
        const html = join(raiz, "out", proj, "graphics", `${c.id}.html`);
        const nativo = c.palco?.W === 3840;
        const t0 = Date.now(), tempos = [];
        let pagina = null;
        try {
          pagina = await abrirPagina({ navegador: nav, html, largura: c.palco.W, altura: c.palco.H, dpr: nativo ? 0.5 : 1 });
          await pagina.prontificar({ contrato: true });
          const tProntoS = (Date.now() - t0) / 1000;
          for (const t of posicoes(c)) {
            const t1 = Date.now();
            await pagina.posicionar(t, { esperaMs: 100 });
            writeFileSync(join(pasta, `${c.id}@${t.toFixed(1)}.png`), await pagina.fotografar());
            tempos.push(Date.now() - t1);
          }
          const media = tempos.reduce((s, x) => s + x, 0) / (tempos.length || 1);
          resumo.push({ id: c.id, posicoes: tempos.length, de: "captura", prontoS: tProntoS, msPorPosicao: Math.round(media) });
          console.log(`  ${c.id}: ${tempos.length} quadros (pronta em ${tProntoS.toFixed(1)} s; ${Math.round(media)} ms por posição)`);
        } catch (e) { falhas++; resumo.push({ id: c.id, erro: e.message }); console.error(`  ${c.id}: ✗ ${e.message}`); }
        finally { if (pagina) await pagina.fechar(); }
      }
    } finally { await nav.fechar(); }
  }
  writeFileSync(join(base, "_resumo.json"), JSON.stringify({ proj, fps, quando: new Date().toISOString(), cenas: resumo }, null, 2));
  if (op.json) console.log(JSON.stringify(resumo, null, 2));
  console.log(`quadros em ${join(base).replace(/\\/g, "/")} — ${falhas ? `${falhas} cena(s) com falha` : "sem falha"}`);
  return falhas ? 1 : 0;
}

async function cmdAprovar(m, raiz, proj, op) {
  let r;
  try { r = aprovar(m, raiz, proj, { mensagem: op.mensagem, hora: op.hora, assinatura: op.assinatura }); }
  catch (e) { if (e instanceof ConjuntoMudou) { console.log(`✗ ${e.message}`); return 1; } throw e; }
  const { gravadas, est } = r;
  if (op.json) console.log(JSON.stringify({ gravadas }, null, 2));
  const ja = est.cenas.filter((c) => c.aprovada === "atual").map((c) => c.id);
  if (!gravadas.length && !ja.length) { console.log("✗ nenhuma cena vista nesta versão e sem comentário aberto: nada aprovado"); return 1; }
  console.log(`✓ ${gravadas.length} cena(s) aprovada(s) agora${ja.length ? `, ${ja.length} já estavam` : ""} → out/${proj}/qc/_aprovacao-lucas.jsonl`);
  if (gravadas.length) console.log(`  ${gravadas.join(", ")}`);
  const fora = est.cenas.filter((c) => !gravadas.includes(c.id) && !ja.includes(c.id));
  if (fora.length) console.log(`  fora (não vistas nesta versão, com comentário aberto, com erro, ou mapa visto só em rascunho): ${fora.map((c) => c.id).join(", ")}`);
  return 0;
}

async function cmdConferir(m, raiz, proj, op) {
  const r = conferir(m, raiz, proj, { depoisDoRender: !!op["depois-do-render"] });
  if (op.json) console.log(JSON.stringify({ ok: r.ok, faltas: r.faltas }, null, 2));
  const qual = op["depois-do-render"] ? "o clipe 2160p de cada cena é da versão aprovada" : "todas as cenas aprovadas na versão atual";
  if (r.ok) { console.log(`✓ ${proj}: ${qual} (${r.est.cenas.length} cenas)`); return 0; }
  console.log(`✗ ${proj}: falta ${r.faltas.length} de ${r.est.cenas.length} — ${qual}, ainda não:`);
  for (const f of r.faltas) console.log(`  ${f.cena}: ${f.motivo}`);
  return 1;
}

async function cmdServir(m, raiz, proj, op) {
  const { criarServidor, HOST, PORTA_PADRAO } = await import("./linha-do-tempo/servidor.mjs");
  const porta = Number(op.porta ?? PORTA_PADRAO);
  if (!Number.isInteger(porta) || porta < 0 || porta > 65535) { console.error(`✗ porta inválida: ${op.porta}`); return 2; }
  const forcar = new Set(lista(op["forcar-rascunho"]) || []);
  const linha = lerLinha(m, raiz, proj, { forcarRascunho: forcar });   // projeto quebrado para aqui, com a mensagem
  const fora = [...forcar].filter((id) => !linha.cenas.some((c) => c.id === id && c.tipo === "mapa"));
  if (fora.length) { console.error(`✗ --forcar-rascunho só vale para cena de mapa da linha: ${fora.join(", ")}`); return 2; }
  let remoto = null;
  if (op.tailscale !== undefined) {
    remoto = aparelhoTailscale(String(op.tailscale), porta);
    if (remoto.erro) { console.error(`✗ --tailscale: ${remoto.erro}`); return 2; }
  }
  const { servidor } = criarServidor({ m, raiz, proj, forcarRascunho: forcar, log: (s) => console.log("  " + s), remoto });
  return await new Promise((fim) => {
    servidor.on("error", (e) => {
      if (e.code === "EADDRINUSE") {
        console.error(`✗ a porta ${porta} já está em uso — a linha do tempo provavelmente JÁ está aberta em http://${HOST}:${porta}/` +
          `\n  Não derrube a que está servindo o Lucas. Para uma segunda: --porta=${porta + 1}`);
      } else console.error(`✗ o servidor não subiu: ${e.message}`);
      fim(1);
    });
    servidor.listen(porta, HOST, () => {
      const p = servidor.address().port;
      console.log(`✓ linha do tempo de ${proj} em http://${HOST}:${p}/?p=${encodeURIComponent(proj)}`);
      console.log(`  ${linha.cenas.length} cenas · ${linha.cenas.filter((c) => c.modoMapa === "rascunho").length} mapa(s) em rascunho · só este PC (127.0.0.1) · Ctrl+C fecha`);
      if (remoto) {
        console.log(`  e o aparelho ${remoto.aparelho} (${remoto.ip.join(", ")}), pelo Tailscale Serve: http://${remoto.hosts[0]}/?p=${encodeURIComponent(proj)}`);
        console.log(`  o Serve ${remoto.serveLigado ? "já está ligado (proxy HTTP conferido)" : "ainda NÃO está ligado"} · liga: tailscale serve --bg --http=${p} http://127.0.0.1:${p} · desliga, ao fim: tailscale serve --http=${p} off`);
      }
    });
  });
}

/**
 * O aparelho do tailnet que pode ver a linha do tempo: o rótulo do nome dele (o 1º pedaço do DNSName), do MESMO dono
 * deste PC, com o IP e o login lidos do `tailscale status --json`. O login não se imprime (dado pessoal).
 */
const TAILSCALE_EXE = "C:/Program Files/Tailscale/tailscale.exe";   // só o caminho fixo: nada pelo PATH nem pela pasta atual
function tailscaleJson(args) {
  try { return JSON.parse(execFileSync(TAILSCALE_EXE, args, { encoding: "utf8", timeout: 15000, windowsHide: true })); }
  catch { return null; }
}
function aparelhoTailscale(rotulo, porta) {
  if (rotulo === "true" || !/^[a-z0-9-]{1,63}$/i.test(rotulo)) return { erro: `diga o aparelho (--tailscale=<nome>): "${rotulo}" não serve` };
  if (!porta) return { erro: "com --tailscale, a porta não pode ser 0 (o nome no tailnet leva a porta)" };
  const st = tailscaleJson(["status", "--json"]);
  if (!st?.Self) return { erro: `o ${TAILSCALE_EXE} status --json não respondeu (o Tailscale está instalado e ligado?)` };
  if (st.BackendState !== "Running") return { erro: `o Tailscale não está ligado neste PC (estado: ${st.BackendState})` };
  const nome = (p) => String(p?.DNSName || "").split(".")[0].toLowerCase();
  const achados = Object.values(st.Peer || {}).filter((p) => nome(p) === rotulo.toLowerCase());
  if (achados.length !== 1) return { erro: `${achados.length ? "mais de um" : "nenhum"} aparelho "${rotulo}" no tailnet` };
  const p = achados[0];
  if (p.UserID !== st.Self.UserID) return { erro: `o aparelho "${rotulo}" não é do mesmo dono deste PC` };
  if (p.Tags?.length) return { erro: `o aparelho "${rotulo}" tem tag: o Serve não manda a identidade dele` };
  const ips = (p.TailscaleIPs || []).filter((x) => /^100\.\d+\.\d+\.\d+$|^fd7a:115c:a1e0:/i.test(x));
  const login = st.User?.[String(p.UserID)]?.LoginName;
  const dns = String(st.Self.DNSName || "").replace(/\.$/, "").toLowerCase();
  if (!ips.length || !login || !dns) return { erro: "o tailscale status --json não trouxe o IP, o login ou o nome deste PC" };
  // O filtro do servidor só vale com o Serve em HTTP (que põe a identidade). Repasse TCP cru para a porta faria todo o
  // tailnet chegar como "este PC": se a porta já tiver Serve, ele tem de ser o proxy HTTP para http://127.0.0.1:<porta>.
  const sv = tailscaleJson(["serve", "status", "--json"]) || {};
  const tcp = sv.TCP?.[String(porta)];
  if (tcp && (tcp.TCPForward || tcp.TerminateTLS || !tcp.HTTP)) return { erro: `o Serve da porta ${porta} não está em HTTP (repasse TCP): desligue com "tailscale serve reset" e ligue com --http` };
  const web = sv.Web?.[`${dns}:${porta}`];
  if (tcp && JSON.stringify(web?.Handlers || {}) !== JSON.stringify({ "/": { Proxy: `http://127.0.0.1:${porta}` } }))
    return { erro: `o Serve da porta ${porta} não é só o proxy para http://127.0.0.1:${porta}` };
  return { aparelho: rotulo, ip: ips, login, hosts: [`${dns}:${porta}`], serveLigado: !!tcp };
}

// ─── principal ───────────────────────────────────────────────────────────────────────────────────

function ehPrincipal() {
  if (!process.argv[1]) return false;
  try {
    const eu = realpathSync(fileURLToPath(import.meta.url)), chamado = realpathSync(resolve(process.argv[1]));
    return process.platform === "win32" ? eu.toLowerCase() === chamado.toLowerCase() : eu === chamado;
  } catch { return false; }
}

export async function principal(argv) {
  const a = lerArgs(argv);
  const [verbo, proj, ...resto] = a.posicionais;
  if (a.op.help || a.op.h || !verbo) { console.log(USO); return verbo ? 0 : 2; }
  if (!VERBOS.includes(verbo)) { console.error(`✗ verbo desconhecido: ${verbo}\n${USO}`); return 2; }
  if (!proj || resto.length) { console.error(`✗ diga o projeto (um só)\n${USO}`); return 2; }
  const desconhecidas = Object.keys(a.op).filter((k) => !OPCOES[verbo].includes(k));
  if (desconhecidas.length) { console.error(`✗ opção desconhecida em ${verbo}: --${desconhecidas.join(", --")}\n${USO}`); return 2; }
  const raiz = resolve(typeof a.op.raiz === "string" ? a.op.raiz : RAIZ_CANAL);
  try {
    const m = await carregarMotor();
    const f = { servir: cmdServir, estado: cmdEstado, proxies: cmdProxies, quadros: cmdQuadros, aprovar: cmdAprovar, conferir: cmdConferir }[verbo];
    return await f(m, raiz, proj, a.op);
  } catch (e) {
    console.error(`✗ ${e instanceof NaoRodou ? e.message : `${verbo} não rodou: ${e.stack || e.message}`}`);
    return 2;
  }
}

if (ehPrincipal()) {
  const codigo = await principal(process.argv.slice(2));
  // O servir fica vivo até o Ctrl+C; os outros saem com o código.
  if (codigo !== undefined && !(process.argv[2] === "servir" && codigo === 0)) process.exit(codigo);
}
