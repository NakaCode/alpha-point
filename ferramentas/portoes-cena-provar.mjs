// portoes-cena-provar — a prova do ferramentas/portoes-cena.mjs.
//
// Uso (da raiz do canal): node ferramentas/portoes-cena-provar.mjs [--sem-chrome] [--cenas=s01,s10,s69]
//   --sem-chrome  só a parte A (sem Chrome, uns segundos).
//   --cenas       as cenas SEM mapa do vídeo 4 (atlantico-fundo) da parte B (padrão s01, s10 e s69: uma que passa, uma com
//                 vídeo e uma que o qc-tamanho reprova pelo crédito a 60 px). Cena de mapa aqui para a prova antes do Chrome.
// Saída: 0 = todas as checagens passaram · 1 = alguma falhou · 2 = a parte B não pôde rodar (a máquina ocupada, cena de mapa).
// O registro vai a out/atlantico-fundo/_tmp/portoes/prova-<AAAAMMDD-hhmmss>/ (fora do git): prova.log, a saída de cada
// portão rodado à parte e as pastas de aviso de teste.
//
// A. Sem Chrome e sem tile:
//   - a régua de cena de mapa (fixtures e as cenas do vídeo 4: toda cena que o `conferir` trata como mapa é mapa aqui; a s11 e
//     a s75, que só citam a MapTiler no comentário, não), a saída (a pior, na ordem do canal; a saída efetiva), as leituras de
//     cada portão (fixtures no formato que o código de cada um imprime) e a tabela (montar e ler de volta);
//   - o aviso da máquina numa pasta de teste: livre → ocupado → livre; ocupado por outro, o caca e o linha-do-tempo ocupados, o
//     ilegível e o que outro tomou: recusa, sem mexer no arquivo; ocupado pelo mesmo --quem: herda e não libera;
//   - a recusa da cena de mapa sem --mapa (sozinha e junto de uma sem mapa), rodando o script de verdade: sai 2, diz que
//     pediria tiles, em segundos, e NÃO MEXE em nada (o chrome.json de verdade, os .jsonl de _tmp/, o _portao.json e a pasta
//     _tmp/portoes/ ficam iguais, byte a byte);
//   - o plano com --mapa --seco: a pré-carga só nas chamadas de mapa, o qc-cena da cena de mapa sozinho, o portao-margens sem a
//     pré-carga, o conferir por último, com o --desde; e nada mexido;
//   - a recusa com a pré-carga no próprio script, com a máquina ocupada (pasta de teste) e o erro logo depois de marcar (o
//     gancho da prova): o aviso volta a livre; e, herdado pelo --quem, fica como estava.
// B. Com Chrome, SÓ em cenas sem mapa do vídeo 4 (nenhuma pré-carga, nenhum pedido à MapTiler):
//   - roda o portoes-cena e olha o chrome.json de 0,5 em 0,5 s (ocupado pelo script durante, livre no fim);
//   - o registro (plano, resumo, tabela e a saída de cada portão) e a tabela impressa igual ao resumo;
//   - marca a máquina e roda cada portão à parte, do jeito que o CLAUDE.md manda (o qc-cena em texto, sem --json), lendo cada
//     saída com uma leitura própria (não a do script): cada casa e cada linha que reprovou batem, cada saída bate, e a saída
//     do script é a pior das saídas dos portões;
//   - nenhum pedido à MapTiler (o maptiler-portoes.jsonl e o portoes-saidas.jsonl do mesmo tamanho; as linhas do portao-mapa
//     sem a pré-carga e com 0 pedidos);
//   - o _portao.json volta ao que era (as duas rodadas regravam o carimbo das cenas: a prova devolve as entradas de antes, e
//     confere o sha256 do arquivo);
//   - o chrome.json livre no fim.
import { spawn, spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, statSync, writeFileSync, appendFileSync } from "node:fs";
import { basename, join } from "node:path";
import { pathToFileURL } from "node:url";
import * as P from "./portoes-cena.mjs";

const RAIZ = P.RAIZ;
const PROJ = "atlantico-fundo", REL = `out/${PROJ}`, PASTA = join(RAIZ, REL);
const argv = process.argv.slice(2);
const SEM_CHROME = argv.includes("--sem-chrome");
const CENAS = ((argv.find((a) => a.startsWith("--cenas=")) || "--cenas=s01,s10,s69").slice(8)).split(",").map((s) => s.trim()).filter(Boolean);
const MAQ = join(RAIZ, "out", "_maquina");
const REG = join(PASTA, "_tmp", "portoes", `prova-${P.carimboPasta(new Date())}`);
mkdirSync(REG, { recursive: true });
const LOG = join(REG, "prova.log");

let passou = 0, falhou = 0;
const say = (s) => { console.log(s); appendFileSync(LOG, s + "\n"); };
const checa = (nome, cond, det = "") => { if (cond) passou++; else falhou++; say(`  ${cond ? "ok " : "FALHOU"}  ${nome}${!cond && det ? `\n         ${String(det).split("\n").join("\n         ")}` : ""}`); return !!cond; };
const igual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const sha256 = (arq) => { try { return createHash("sha256").update(readFileSync(arq)).digest("hex"); } catch { return null; } };
const bytes = (arq) => { try { return readFileSync(arq); } catch { return null; } };
const tam = (arq) => { try { return statSync(arq).size; } catch { return -1; } };
const PORTOES_DIR = join(PASTA, "_tmp", "portoes");
const JSONLS = ["maptiler-portoes.jsonl", "portoes-saidas.jsonl", "portao-mapa.jsonl", "portao-margens.jsonl"].map((f) => join(PASTA, "_tmp", f));
// o que nada sem Chrome pode mexer
const foto = () => ({
  chrome: bytes(join(MAQ, "chrome.json"))?.toString("utf8") ?? null,
  jsonl: JSONLS.map(tam), portao: sha256(join(PASTA, "_portao.json")),
  pastas: readdirSync(PORTOES_DIR).filter((d) => !d.startsWith("prova-")).sort().join(","),
});
const node = (args, env = {}) => {
  const t0 = Date.now();
  const r = spawnSync(process.execPath, args, { cwd: RAIZ, env: { ...process.env, ...env }, encoding: "utf8", windowsHide: true, timeout: 120_000 });
  return { code: r.status, out: r.stdout || "", err: r.stderr || "", ms: Date.now() - t0 };
};
const nodeAsync = (args, env = {}, aoSubir) => new Promise((res) => {
  const t0 = Date.now();
  const f = spawn(process.execPath, args, { cwd: RAIZ, env: { ...process.env, REGIE_MOTOR: P.MOTOR, ...env }, windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
  let out = "", err = "";
  f.stdout.setEncoding("utf8"); f.stderr.setEncoding("utf8");
  f.stdout.on("data", (s) => { out += s; }); f.stderr.on("data", (s) => { err += s; });
  if (aoSubir) aoSubir(f);
  f.on("close", (code) => res({ code, out, err, pid: f.pid, ms: Date.now() - t0 }));
});

say(`portoes-cena-provar · ${new Date().toISOString()} · registro ${REG.slice(RAIZ.length + 1).split("\\").join("/")}`);

// ══ A. sem Chrome ═══════════════════════════════════════════════════════════════════════════════════════════════════
say("\nA1. a régua de cena de mapa");
{
  const k = P.classificarCena;
  checa("a base de mapa (_vendor/perfil-mapa.js) é mapa", k('<script src="../_media/_vendor/perfil-mapa.js"></script>').mapa);
  checa("a maplibre-gl.js do _vendor é mapa", k('<script src="../_media/_vendor/maplibre-gl.js"></script>').mapa);
  checa("MapTiler só num comentário <!-- --> não é mapa", !k("<!-- o fundo não é MapTiler --><div>x</div>").mapa);
  checa("maptiler dentro de <script> conta como mapa (na dúvida, mapa)", k("<script>// maptiler\n</script>").mapa);
  checa("__aguardarMapa no código é mapa", k("<script>await window.__aguardarMapa()</script>").mapa);
  checa("__chaves no código é mapa", k("<script>const k = window.__chaves</script>").mapa);
  checa("cena sem nada disso não é mapa", !k("<div>texto</div>").mapa);
  checa("<video> pode ter vídeo", k('<video src="x.mp4"></video>').video && !k("<div></div>").video);
  checa('createElement("video") pode ter vídeo', k('document.createElement("video")').video);
  const g = join(PASTA, "graphics");
  const todas = readdirSync(g).filter((f) => f.endsWith(".html") && !f.startsWith("_")).map((f) => f.slice(0, -5));
  const base = /_vendor\/(?:perfil-mapa|maplibre-gl)\.js/;   // a régua do `conferir`
  const falsoNeg = todas.filter((c) => { const f = readFileSync(join(g, `${c}.html`), "utf8"); return base.test(f) && !k(f).mapa; });
  const mapas = todas.filter((c) => k(readFileSync(join(g, `${c}.html`), "utf8")).mapa);
  checa(`vídeo 4: toda cena que o conferir trata como mapa é mapa aqui (${mapas.length} de ${todas.length} são mapa)`, falsoNeg.length === 0, falsoNeg.join(", "));
  checa("vídeo 4: a s11 e a s75 (MapTiler só no comentário) não são mapa; a s47 é", !mapas.includes("s11") && !mapas.includes("s75") && mapas.includes("s47"));
  const qcMapa = /maptiler|mapbox|maplibre|__aguardarMapa/i;   // a régua do qc-cena e da pré-carga, com o comentário
  const soNoComentario = todas.filter((c) => { const f = readFileSync(join(g, `${c}.html`), "utf8"); return qcMapa.test(f) && !k(f).mapa; });
  checa(`vídeo 4: o que a régua do qc-cena chama de mapa e esta não, só cita no comentário (${soNoComentario.join(", ") || "nenhuma"})`,
    soNoComentario.every((c) => !qcMapa.test(P.semComentariosHtml(readFileSync(join(g, `${c}.html`), "utf8")))));
  for (const c of CENAS) checa(`a cena da parte B ${c} é sem mapa`, todas.includes(c) && !mapas.includes(c));
}

say("\nA2. a saída");
{
  const p = P.piorSaida;
  checa("pior: [0,0] = 0 · [0,1] = 1 · [0,2] = 2 · [1,2] = 1 · [2,1,0] = 1", p([0, 0]) === 0 && p([0, 1]) === 1 && p([0, 2]) === 2 && p([1, 2]) === 1 && p([2, 1, 0]) === 1);
  checa("fora de 0, 1 e 2 conta como 2: [0,3] = 2 · [143] = 2 · [null] = 2 · [3,1] = 1", p([0, 3]) === 2 && p([143]) === 2 && p([null]) === 2 && p([3, 1]) === 1);
  const e = P.saidaEfetiva;
  checa("efetiva: 1 sem casa reprovada (a pilha do node) = 2; 1 com casa 1 = 1", e(1, [0, 0]) === 2 && e(1, [0, 1]) === 1);
  checa("efetiva: 0 com casa sem linha (2) = 2; 0 com casas 0 e — = 0; 2 com casas 0 = 2", e(0, [0, 2]) === 2 && e(0, [0, null]) === 0 && e(2, [0, 0]) === 2);
}

say("\nA3. as leituras");
{
  // qc-cena --json: andamento antes do JSON (JSON.stringify com recuo 1, como ele imprime)
  const laudo = { total: 3, reprovadas: 1, naoMedidas: 1, foraDoPortao: [], carimbo: { gravado: true, erros: [], semProjeto: [] }, cenas: [
    { cena: "s01.html", file: "x/s01.html", ok: true, falhas: [], indefinidos: [], gates: [] },
    { cena: "s47.html", file: "x/s47.html", ok: false, falhas: [], indefinidos: ["til-glifo"], gates: [] },
    { cena: "s69.html", file: "x/s69.html", ok: false, falhas: [{ gate: "tamanho", detalhe: '[credito] "Source: IHO Publication M-3, 2026" → 60px < 72' }], indefinidos: [], gates: [] },
  ] };
  const txt = `  ⚖ 1 veredito(s) suspeito(s) do lote (conc=3) — re-medindo cada um SOZINHO antes de cravar…\n     ↻ s69.html [tamanho] …\n${JSON.stringify(laudo, null, 1)}\n`;
  const { casas: q } = P.casasQcCena(txt, ["s01", "s47", "s69", "s99"], 1);
  checa("qc-cena: s01 0, s47 2 (só o til-glifo), s69 1 com a linha inteira, s99 sem veredito = 2",
    q.s01.v === 0 && q.s47.v === 2 && igual(q.s47.indefinidos, ["til-glifo"]) && q.s69.v === 1 && q.s69.linhas[0] === '[tamanho] [credito] "Source: IHO Publication M-3, 2026" → 60px < 72' && q.s99.v === 2, JSON.stringify(q));
  const { casas: q2 } = P.casasQcCena("Error: boom\n    at x (y.mjs:1:1)\n", ["s01"], 1);
  checa("qc-cena sem o JSON (a pilha): a cena sai 2", q2.s01.v === 2);
  // portao-mapa: o veredito da linha com o pid do processo; as linhas do stdout
  const jl = [
    { pid: 111, portao: "til", cena: "s01", veredito: 0, veredito_txt: "nenhum glifo" },
    { pid: 111, portao: "til", cena: "s69", veredito: 1, veredito_txt: "TIL@700 #t: ão" },
    { pid: 222, portao: "til", cena: "s01", veredito: 1, veredito_txt: "de outro processo" },
    { pid: 111, portao: "rodape", cena: "s01", veredito: 1, veredito_txt: "do rodapé" },
  ].map((o) => JSON.stringify(o)).join("\n") + "\n{quebrada";
  const til = P.casasPortaoMapa("til", "out/atlantico-fundo/graphics/s69.html\tTIL\t700\t#t\tão — vão 9%\n", P.linhasDoPortaoMapa(jl, 111, "til"), ["s01", "s69", "s10"]);
  checa("til: s01 0 (a linha de outro pid e a do rodapé não contam), s69 1 com a linha do molde, s10 sem linha = 2",
    til.s01.v === 0 && til.s69.v === 1 && til.s69.linhas[0].startsWith("out/atlantico-fundo/graphics/s69.html\tTIL") && til.s10.v === 2, JSON.stringify(til));
  const rjl = [{ pid: 7, portao: "rodape", cena: "s69", veredito: 1, veredito_txt: "2.10:1 @ 3 s" }, { pid: 7, portao: "rodape", cena: "s01", veredito: 0, veredito_txt: "sem crédito de rodapé" },
    { pid: 7, portao: "rodape", cena: "s10", veredito: 2, veredito_txt: "NÃO MEDIDO — x" }].map((o) => JSON.stringify(o)).join("\n");
  const rod = P.casasPortaoMapa("rodape", "\n══ CONTRASTE ══\n\n  ·  s10                                — NÃO MEDIDO — x\n  ✗  s69                                2.10:1  @    3s  “Source”\n  ✓  s01x                               9.00:1\n", P.linhasDoPortaoMapa(rjl, 7, "rodape"), ["s01", "s10", "s69"]);
  checa("rodapé: s01 0 (a s01x não é a s01), s10 2 com a linha ·, s69 1 com a linha ✗",
    rod.s01.v === 0 && rod.s10.v === 2 && /NÃO MEDIDO/.test(rod.s10.linhas[0]) && rod.s69.v === 1 && /✗\s+s69/.test(rod.s69.linhas[0]), JSON.stringify(rod));
  // portao-margens (o texto do linhaTexto dele)
  const mtxt = [
    "✓ s01.html  (12 itens medidos em 35 amostras de 0.1 s)",
    "    aviso ultima-palavra: cred “Source: X, 1888” (última linha: “1888” @1s) · Q7",
    "✗ s10.html  (8 itens medidos em 40 amostras de 0.1 s)",
    "    baixo 1900 (limite ≤ 1880) @1.2s, 3 amostra(s) de 1.1 a 1.3s · texto .pill “X” · faixa do crédito",
    "    aviso linhas: cred “A B C” (3 linhas) · Q6",
    "? s69.html: NÃO MEDIDO — a cena não abriu: timeout",
    "    (indício) direita 3700 (limite ≤ 3640) @0s · texto .t “Y”",
    "portao-margens v3: 3 cena(s), 1 passaram, 1 reprovaram, 1 NÃO MEDIDO.",
  ].join("\n");
  const m = P.casasMargens(mtxt, ["s01", "s10", "s69", "s99"]);
  checa("margens: s01 0 (o aviso não reprova), s10 1 só com o item (sem o aviso), s69 2 com o motivo e o indício, s99 2",
    m.s01.v === 0 && m.s10.v === 1 && m.s10.linhas.length === 1 && /baixo 1900/.test(m.s10.linhas[0]) && m.s69.v === 2 && m.s69.linhas.length === 2 && m.s99.v === 2, JSON.stringify(m));
  const v = P.casasVideo([
    "✓  s10                                        t=1.2→3.4  0/1 parado(s)  [1.2] → [3.4]",
    "·  s01                                        sem <video> na cena — nada a medir",
    "⛔ TODOS PARADOS  s27                                        t=2.19→6.2  1/1 parado(s)  [0] → [0]",
    "ERRO  s51: Error: a cena não expõe __duracao/__renderAt",
  ].join("\n"), ["s10", "s01", "s27", "s51", "s72"]);
  checa("vídeo: s10 0, s01 0 sem vídeo (·), s27 1, s51 2, s72 sem linha 2",
    v.s10.v === 0 && v.s01.v === 0 && v.s01.semVideo && v.s27.v === 1 && v.s51.v === 2 && v.s72.v === 2, JSON.stringify(v));
  const c0 = P.casasConferir("atlantico-fundo: 0 cena(s) que carregam a base de mapa (só as do --so=s01,s10): nenhuma\n\nNada sem prova: todo portão…\n", 0, ["s01", "s10"]);
  checa("conferir sem cena de mapa: as casas ficam — (não se aplica)", c0.s01.v === null && c0.s10.v === null);
  const ctxt = ["atlantico-fundo: 2 cena(s) que carregam a base de mapa (só as do --so=s01,s47,s50): s47, s50", "", "A. …", "",
    "Reprovações medidas (1; não entram na conta da saída, e quem as julga é o portão):", "  - s50: tamanho: REPROVOU", "",
    "2 ponto(s) sem prova de medida com o mapa (NÃO MEDIDO, FALTA, SEM PROVA, indefinido, vencido, verde sem prova): saída 2.",
    "  - s47: til-glifo indefinido sem o portao-mapa", "  - s47: carimbo sem prova da pré-carga em carga"].join("\n");
  const c1 = P.casasConferir(ctxt, 2, ["s01", "s47", "s50"]);
  checa("conferir: s47 2 com as duas linhas, s50 0 (a reprovação medida não é problema dele), s01 —",
    c1.s47.v === 2 && c1.s47.linhas.length === 2 && c1.s50.v === 0 && c1.s01.v === null, JSON.stringify(c1));
  const c2 = P.casasConferir(ctxt.split("\n").slice(0, -1).join("\n") + "\n  … e mais 41\n", 2, ["s47", "s50"]);
  checa("conferir com a lista cortada: a cena não listada sai 2", c2.s47.v === 2 && c2.s50.v === 2);
  const c3 = P.casasConferir("", 1, ["s47"]);
  checa("conferir que não rodou: 2", c3.s47.v === 2);
  // o que o qc-cena só diz no JSON: o gate fora do portão e o carimbo que não se gravou (cético de 30/10/2026)
  const av = P.avisosDoQcCena([
    { grupo: "sem mapa", json: { foraDoPortao: ["mapa-vivo"], carimbo: { gravado: true, erros: [] } } },
    { grupo: "s47", json: { foraDoPortao: ["mapa-vivo"], carimbo: { gravado: false, erros: [{ arq: "_portao.json", motivo: "EBUSY" }] } } },
    { grupo: "s50", json: null },
  ]);
  checa("os avisos do qc-cena: o mapa-vivo uma vez, no topo, e o carimbo não gravado com o grupo e o motivo",
    av.length === 2 && /^⊘ fora do portão .*: mapa-vivo — /.test(av[0]) && av[1] === "⚠ qc-cena [s47]: carimbo NÃO gravado em _portao.json: EBUSY", JSON.stringify(av));
  checa("sem nada a avisar, nenhuma linha", P.avisosDoQcCena([{ grupo: "x", json: { foraDoPortao: [], carimbo: { gravado: true, erros: [] } } }]).length === 0);
}

say("\nA3b. a nota da exceção do Lucas (só nota; quem aplica é o qc-visual)");
{
  const exc = [
    { cena: "s69", sha1_html: "aaa", falha_no_portao: ["tamanho"], reprovacao: '[credito] "Source: X" → 60px < 72' },
    { cena: "s02", sha1_html: "bbb", falha_no_portao: ["tamanho"], reprovacao: '[tamanho] [credito] "Source: Y" 60<72' },
  ];
  checa("a mesma mensagem, o mesmo sha1: a nota diz que há exceção para ela", /para esta mensagem/.test(P.notaExcecao(exc, "s02", "bbb", '[tamanho] [credito] "Source: Y" 60<72')));
  checa("outra grafia da mensagem: a nota mostra a da exceção, para o qc-visual comparar", /com a mensagem "\[credito\] \\"Source: X\\" → 60px < 72"/.test(P.notaExcecao(exc, "s69", "aaa", '[tamanho] [credito] "Source: X" 60<72')));
  checa("outro sha1, outro portão ou o NÃO MEDIDO: nenhuma nota", P.notaExcecao(exc, "s69", "zzz", "[tamanho] x") === "" && P.notaExcecao(exc, "s69", "aaa", "[carga] x") === "" && P.notaExcecao(exc, "s69", "aaa", "[NÃO MEDIDO] tamanho") === "");
}

say("\nA4. a tabela");
{
  const casas = {
    s01: { "qc-cena": { v: 0 }, til: { v: 0 }, "rodapé": { v: 0 }, margens: { v: 0 }, "vídeo": { v: null }, conferir: { v: null } },
    s10: { "qc-cena": { v: 1 }, til: { v: 0 }, "rodapé": { v: 2 }, margens: { v: 0 }, "vídeo": { v: 0, semVideo: true }, conferir: { v: null } },
    s47: { "qc-cena": { v: 2, coberto: true }, til: { v: 0 }, "rodapé": { v: 0 }, margens: { v: 2 }, "vídeo": { v: null }, conferir: { v: 0 } },
  };
  const t = P.montarTabela(["s01", "s10", "s47"], casas, { s01: "2a25e1da00", s10: "b7549afe00", s47: "72df21e200" });
  const l = P.lerTabela(`antes\n${t}\ndepois da tabela, uma linha qualquer`);
  checa("montar e ler de volta: —, ·, 2*, 0, 1, 2 e o sha1", l && l.s01["vídeo"] === "—" && l.s10["vídeo"] === "·" && l.s47["qc-cena"] === "2*" && l.s10["qc-cena"] === "1" && l.s10["rodapé"] === "2" && l.s47.sha1 === "72df21e2", t);
}

say("\nA5. o aviso da máquina (pasta de teste)");
{
  const d = (n) => { const x = join(REG, `maquina-${n}`); mkdirSync(x, { recursive: true }); return x; };
  const w = (dir, f, o) => writeFileSync(join(dir, f), typeof o === "string" ? o : JSON.stringify(o) + "\n");
  let x = d("livre");
  let r = P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T1" });
  const ocupado = P.lerAviso(join(x, "chrome.json"));
  checa("sem aviso: toma (ocupado, Q, T1, desde) e relê", r.ok && !r.herdado && ocupado.estado === "ocupado" && ocupado.quem === "Q" && ocupado.tarefa === "T1" && /^\d\d\/\d\d\/\d{4} \d\d:\d\d$/.test(ocupado.desde));
  r = P.liberarMaquina({ dir: x, quem: "Q", tarefa: "T1" });
  checa("libera: livre, com o mesmo quem", r.ok && P.lerAviso(join(x, "chrome.json")).estado === "livre" && P.lerAviso(join(x, "chrome.json")).quem === "Q");
  r = P.tomarMaquina({ dir: x, quem: "Q2", tarefa: "T2" });
  checa("aviso livre de outro: toma", r.ok && P.lerAviso(join(x, "chrome.json")).quem === "Q2");
  x = d("outro"); w(x, "chrome.json", { estado: "ocupado", quem: "Arte (local_x)", tarefa: "render", desde: "30/10/2026 09:00" });
  let antes = bytes(join(x, "chrome.json"));
  r = P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T" });
  checa("ocupado por outro: recusa e não mexe", !r.ok && /ocupado por Arte/.test(r.motivo) && bytes(join(x, "chrome.json")).equals(antes), r.motivo);
  r = P.tomarMaquina({ dir: x, quem: "Arte (local_x)", tarefa: "T" });
  checa("ocupado pelo mesmo --quem: herda, sem mexer", r.ok && r.herdado && bytes(join(x, "chrome.json")).equals(antes));
  r = P.liberarMaquina({ dir: x, quem: "Arte (local_x)", tarefa: "outra tarefa" });
  checa("liberar com outra tarefa: não mexe", !r.ok && bytes(join(x, "chrome.json")).equals(antes));
  x = d("caca"); w(x, "caca.json", { estado: "ocupado", quem: "Sala", ultima_tarefa: "caça", desde: "30/10/2026 09:00" });
  r = P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T" });
  checa("caca.json ocupado: recusa e não cria o chrome.json", !r.ok && /caca\.json ocupado/.test(r.motivo) && !existsSync(join(x, "chrome.json")));
  x = d("linha"); w(x, "linha-do-tempo.json", { estado: "ocupado", quem: "Sala", tarefa: "o Lucas vendo", desde: "30/10/2026 09:00" });
  r = P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T" });
  checa("linha-do-tempo.json ocupado: recusa", !r.ok && /linha-do-tempo\.json ocupado/.test(r.motivo));
  x = d("ilegivel"); w(x, "chrome.json", "{ estado: quebrado"); antes = bytes(join(x, "chrome.json"));
  r = P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T" });
  checa("chrome.json ilegível: recusa e não mexe", !r.ok && bytes(join(x, "chrome.json")).equals(antes));
  x = d("tomado"); P.tomarMaquina({ dir: x, quem: "Q", tarefa: "T" }); w(x, "chrome.json", { estado: "ocupado", quem: "Outro", tarefa: "X", desde: "30/10/2026 09:00" });
  antes = bytes(join(x, "chrome.json"));
  r = P.liberarMaquina({ dir: x, quem: "Q", tarefa: "T" });
  checa("o aviso que outro tomou depois: liberar não mexe", !r.ok && bytes(join(x, "chrome.json")).equals(antes));
}

say("\nA6. o script de verdade, sem Chrome: as recusas e o plano");
{
  const f0 = foto();
  let r = node(["ferramentas/portoes-cena.mjs", PROJ, "s47"]);
  checa(`cena de mapa sem --mapa: sai 2, diz que pediria tiles e que não rodou nada (${r.ms} ms)`, r.code === 2 && /MapTiler/.test(r.err) && /--mapa/.test(r.err) && /Não rodei nada/.test(r.err) && r.ms < 20_000, r.err);
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01", "s47"]);
  checa("junto de uma sem mapa: recusa a rodada inteira (sai 2, só a s47 na mensagem)", r.code === 2 && /s47/.test(r.err) && !/s01 \(/.test(r.err) && r.ms < 20_000, r.err);
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01,s47", "--mapa", "--seco"]);
  const ls = r.out.split(/\r?\n/).filter((l) => /^\s+\d+\. /.test(l));
  const linha = (id) => ls.find((l) => new RegExp(`^\\s+\\d+\\. ${id} \\[`).test(l)) || "";
  const imp = (l) => l.includes("--import=file:///C:/projetos/alpha-point/ferramentas/chaves-nos-portoes.mjs");
  checa("--mapa --seco: sai 0 e lista as chamadas", r.code === 0 && ls.length === 8, r.out + r.err);
  checa("a pré-carga só nas de mapa: qc-cena-s47, til-mapa e rodape-mapa com ela; qc-cena, til, rodape e margens sem",
    imp(linha("qc-cena-s47")) && imp(linha("til-mapa")) && imp(linha("rodape-mapa")) && !imp(linha("qc-cena")) && !imp(linha("til")) && !imp(linha("rodape")) && !imp(linha("margens")), ls.join("\n"));
  checa("o qc-cena da cena de mapa roda sozinho, com --forcar e --conc=3", /scripts\/qc-cena\.mjs out\/atlantico-fundo\/graphics\/s47\.html --conc=3 --forcar --json$/.test(linha("qc-cena-s47")));
  checa("REGIE_MOTOR em todas; o conferir por último, com --desde e --so", ls.every((l) => l.includes(`REGIE_MOTOR=${P.MOTOR}`)) && /^\s+8\. conferir .*conferir out\/atlantico-fundo "--desde=\d{4}-\d\d-\d\d \d\d:\d\d:\d\d" --so=s01,s47$/.test(ls[7] || ""), ls[7]);
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s11", "s75", "--seco"]);
  checa("a s11 e a s75 (MapTiler só no comentário) rodam sem --mapa e sem a pré-carga", r.code === 0 && !r.out.includes("--import="), r.out + r.err);
  r = node(["--import=" + P.PRE_CARGA_URL, "ferramentas/portoes-cena.mjs", "prova-sem-projeto", "s01"]);
  checa("com a pré-carga no próprio script: recusa (sai 2)", r.code === 2 && /SEM a pré-carga/.test(r.err), r.err);
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01", "--nada"]);
  const r2 = node(["ferramentas/portoes-cena.mjs", PROJ, "s999"]);
  checa("opção desconhecida e cena que não existe: uso, sai 2", r.code === 2 && /opção desconhecida/.test(r.err) && r2.code === 2 && /não existe/.test(r2.err));
  const f1 = foto();
  checa("nada disso mexeu no chrome.json de verdade, nos .jsonl de _tmp/, no _portao.json nem em _tmp/portoes/", igual(f0, f1), JSON.stringify({ antes: f0, depois: f1 }));
}

say("\nA7. a máquina, rodando o script (pasta de teste, sem Chrome)");
{
  const d = (n) => { const x = join(REG, `maquina-cli-${n}`); mkdirSync(x, { recursive: true }); return x; };
  const f0 = foto();
  let x = d("ocupado");
  writeFileSync(join(x, "chrome.json"), JSON.stringify({ estado: "ocupado", quem: "Arte (local_x)", tarefa: "render 4K", desde: "30/10/2026 09:00" }) + "\n");
  let antes = bytes(join(x, "chrome.json"));
  let r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01"], { PORTOES_CENA_MAQUINA: x });
  checa(`chrome.json ocupado por outro: não começa (sai 2), não mexe (${r.ms} ms)`, r.code === 2 && /não começo/.test(r.err) && bytes(join(x, "chrome.json")).equals(antes) && r.ms < 20_000, r.err);
  x = d("caca");
  writeFileSync(join(x, "caca.json"), JSON.stringify({ estado: "ocupado", quem: "Sala", ultima_tarefa: "caça", desde: "30/10/2026 09:00" }) + "\n");
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01"], { PORTOES_CENA_MAQUINA: x });
  checa("caca.json ocupado: não começa (sai 2)", r.code === 2 && /caca\.json ocupado/.test(r.err) && !existsSync(join(x, "chrome.json")), r.err);
  x = d("erro");
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01"], { PORTOES_CENA_MAQUINA: x, PORTOES_CENA_PROVA_ERRO: "apos-marcar" });
  const a = P.lerAviso(join(x, "chrome.json"));
  checa("erro logo depois de marcar: sai 2 e o aviso volta a livre (o do script, com o pid)", r.code === 2 && /erro da prova/.test(r.err) && a?.estado === "livre" && /^portoes-cena \(pid \d+\)$/.test(a.quem) && /\[pid \d+\]$/.test(a.tarefa), JSON.stringify(a) + "\n" + r.err);
  x = d("herdado");
  writeFileSync(join(x, "chrome.json"), JSON.stringify({ estado: "ocupado", quem: "Arte (local_x)", tarefa: "arte-8", desde: "30/10/2026 09:00" }) + "\n");
  antes = bytes(join(x, "chrome.json"));
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01", "--quem=Arte (local_x)"], { PORTOES_CENA_MAQUINA: x, PORTOES_CENA_PROVA_ERRO: "apos-marcar" });
  checa("herdado pelo --quem, com erro: o aviso fica como o setor o marcou", r.code === 2 && bytes(join(x, "chrome.json")).equals(antes), r.err);
  // o gancho da pasta dos avisos só vale numa pasta da prova (cético de 30/10/2026): fora dela, ele passaria por cima do
  // chrome.json de verdade
  checa("a pasta da prova vale como gancho; out/_maquina, outra pasta de out/ e uma fora do canal, não",
    P.ehPastaDaProva(join(REG, "maquina-cli-x")) && !P.ehPastaDaProva(MAQ) && !P.ehPastaDaProva(join(RAIZ, "out", "_maquina-falsa")) &&
    !P.ehPastaDaProva(join(PASTA, "_tmp", "portoes", "prova-x", "m")) && !P.ehPastaDaProva("C:/Windows/Temp/prova-20261030-101010/x"));
  const fora = join(RAIZ, "out", `_maquina-falsa-${process.pid}`);
  r = node(["ferramentas/portoes-cena.mjs", PROJ, "s01"], { PORTOES_CENA_MAQUINA: fora });
  checa("PORTOES_CENA_MAQUINA fora da pasta da prova: recusa (sai 2), sem criar a pasta nem abrir o Chrome", r.code === 2 && /só da prova/.test(r.err) && !existsSync(fora) && r.ms < 20_000, r.err);
  const f1 = foto();
  checa("nada disso mexeu no que é de verdade (o chrome.json, os .jsonl, o _portao.json, _tmp/portoes/)", igual(f0, f1), JSON.stringify({ antes: f0, depois: f1 }));
}

// ══ B. com Chrome ═══════════════════════════════════════════════════════════════════════════════════════════════════
// as leituras próprias da prova (não as do script)
function lerQcCenaTexto(out) {
  const r = {}; let atual = null;
  for (const l of out.split(/\r?\n/)) {
    const m = /^  ([✓✗⚠]) (\S+?)(?:\.html)?$/.exec(l);
    if (m) { atual = r[m[2]] = { v: m[1] === "✓" ? 0 : m[1] === "✗" ? 1 : 2, falhas: [], indef: [] }; continue; }
    const d = atual && /^      \[(.+?)\] (.*)$/.exec(l);
    if (d) { if (d[1] === "NÃO MEDIDO") atual.indef = d[2].replace(/ — o carimbo.*$/, "").split(", "); else atual.falhas.push(`[${d[1]}] ${d[2]}`); continue; }
    if (atual && !/^      /.test(l)) atual = null;
  }
  return r;
}
const jsonlDo = (arq, desde, pid, portao) => {
  const r = {};
  const txt = readFileSync(arq).subarray(desde).toString("utf8");
  for (const l of txt.split(/\r?\n/)) { try { const o = JSON.parse(l); if (o.pid === pid && o.portao === portao) r[o.cena] = o; } catch { } }
  return r;
};

if (SEM_CHROME) {
  say("\nB. pulada (--sem-chrome)");
} else {
  say(`\nB. com Chrome, só nas cenas sem mapa ${CENAS.join(", ")} do vídeo 4 (nenhuma pré-carga, nenhum pedido à MapTiler)`);
  const avisos = ["chrome.json", "caca.json", "linha-do-tempo.json"].map((f) => [f, P.lerAviso(join(MAQ, f))]);
  const ocupado = avisos.find(([, a]) => a?.estado === "ocupado" || a?.ilegivel);
  const mapas = CENAS.filter((c) => P.classificarCena(readFileSync(join(PASTA, "graphics", `${c}.html`), "utf8")).mapa);
  if (ocupado || mapas.length) {
    say(`  NÃO MEDIDO: ${ocupado ? `out/_maquina/${ocupado[0]} ${ocupado[1]?.ilegivel ? "ilegível" : `ocupado por ${ocupado[1].quem}`}` : `cena de mapa na lista: ${mapas.join(", ")}`}. A parte B não roda.`);
    say(`\n${passou} ok, ${falhou} falharam (parte B NÃO MEDIDA)`);
    process.exit(falhou ? 1 : 2);
  }
  const ARQ_PORTAO = join(PASTA, "_portao.json");
  const portaoAntes = JSON.parse(readFileSync(ARQ_PORTAO, "utf8"));
  const shaPortao = sha256(ARQ_PORTAO);
  const originais = Object.fromEntries(CENAS.map((c) => [`${c}.html`, portaoAntes[`${c}.html`]]).filter(([, e]) => e));
  const tamTiles = tam(JSONLS[0]), tamSaidas = tam(JSONLS[1]);
  const { fundirCarimboPortao } = await import(pathToFileURL(join(RAIZ, "scripts", "lib", "qc-cena-gates.mjs")).href);
  let restaurado = false;
  const restaurar = () => {
    if (restaurado) return; restaurado = true;
    try { if (Object.keys(originais).length) fundirCarimboPortao(ARQ_PORTAO, originais); } catch (e) { say(`  ⚠ não consegui devolver o _portao.json: ${e.message}`); }
  };
  try {
    // B1. o portoes-cena, com o chrome.json olhado de 0,5 em 0,5 s
    const vistos = [];
    let filhoPid = null;
    const olhar = setInterval(() => { const a = P.lerAviso(join(MAQ, "chrome.json")); const s = a ? `${a.estado}|${a.quem}` : "ausente"; if (vistos[vistos.length - 1] !== s) vistos.push(s); }, 500);
    say("  rodando o portoes-cena…");
    const pc = await nodeAsync(["ferramentas/portoes-cena.mjs", PROJ, ...CENAS], {}, (f) => { filhoPid = f.pid; });
    clearInterval(olhar);
    const aFim = P.lerAviso(join(MAQ, "chrome.json"));
    writeFileSync(join(REG, "portoes-cena.saida.txt"), pc.out); writeFileSync(join(REG, "portoes-cena.erros.txt"), pc.err);
    say(`  portoes-cena: saída ${pc.code} em ${(pc.ms / 1000).toFixed(0)} s`);
    say(pc.out.split(/\r?\n/).map((l) => `    | ${l}`).join("\n"));
    const meu = `portoes-cena (pid ${filhoPid})`;
    checa("durante a rodada, o chrome.json ficou ocupado pelo script", vistos.includes(`ocupado|${meu}`), vistos.join(" → "));
    checa("no fim, o chrome.json está livre (o script o liberou)", aFim?.estado === "livre" && aFim.quem === meu, JSON.stringify(aFim));
    const regRel = (/^registro: (\S+)\/$/m.exec(pc.out) || [])[1];
    const regDir = regRel ? join(RAIZ, regRel) : null;
    const tem = (f) => regDir && existsSync(join(regDir, f));
    checa("o registro: plano.json, resumo.json, tabela.txt e a saída e o stderr de cada portão", regDir && tem("plano.json") && tem("resumo.json") && tem("tabela.txt") &&
      readdirSync(regDir).filter((f) => /^\d\d-.+\.(saida|erros)\.txt$/.test(f)).length === 2 * JSON.parse(readFileSync(join(regDir, "plano.json"), "utf8")).chamadas.length, regRel);
    if (!regDir || !tem("resumo.json")) throw new Error("sem o registro, a parte B para aqui");
    const resumo = JSON.parse(readFileSync(join(regDir, "resumo.json"), "utf8"));
    const plano = JSON.parse(readFileSync(join(regDir, "plano.json"), "utf8"));
    checa("o plano: nenhuma chamada com a pré-carga, e o --desde é a hora do começo", plano.chamadas.every((c) => !c.pre_carga && !c.comando.includes("--import=")) && /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(plano.desde));
    checa("a tabela.txt é o que se imprimiu", readFileSync(join(regDir, "tabela.txt"), "utf8").trim() === pc.out.trim());
    const tab = P.lerTabela(pc.out);
    const porCena = Object.fromEntries(resumo.cenas.map((c) => [c.cena, c]));
    checa("a tabela impressa bate com o resumo, casa a casa", tab && CENAS.every((c) => tab[c] && P.COLUNAS.every((col) => tab[c][col] === P.textoDaCasa(porCena[c].casas[col])) && tab[c].sha1 === porCena[c].sha1.slice(0, 8)), JSON.stringify(tab));
    checa("a saída do processo é a do resumo", pc.code === resumo.saida);
    const ruins = CENAS.flatMap((c) => P.COLUNAS.flatMap((col) => { const k = porCena[c].casas[col]; return k.v === 1 || k.v === 2 ? k.linhas.map((l) => `${c} · ${col}`) : []; }));
    checa("toda casa 1 ou 2 tem a linha impressa", ruins.every((r) => pc.out.includes(`  ${r} · `)), ruins.join("\n"));

    // B2. cada portão à parte, como o CLAUDE.md manda, com a máquina marcada pela prova
    const QUEM = `portoes-cena-provar (pid ${process.pid})`, TAREFA = `prova do portoes-cena: os portões à parte em ${CENAS.join(",")} [pid ${process.pid}]`;
    const tomada = P.tomarMaquina({ quem: QUEM, tarefa: TAREFA });
    if (!tomada.ok) throw new Error(`não marquei a máquina para os portões à parte: ${tomada.motivo}`);
    const sep = {};
    const t0 = new Date();
    const desde = P.horaBrasilia(new Date(Math.floor(t0.getTime() / 1000) * 1000));
    try {
      const htmls = CENAS.map((c) => `${REL}/graphics/${c}.html`);
      const roda = async (id, args) => { say(`  à parte: ${id}…`); const r = await nodeAsync(args); writeFileSync(join(REG, `${id}.saida.txt`), r.out); writeFileSync(join(REG, `${id}.erros.txt`), r.err); sep[id] = r; return r; };
      await roda("qc-cena", ["scripts/qc-cena.mjs", ...htmls, "--conc=3", "--forcar"]);
      for (const p of ["til", "rodape"]) { const pos = tam(JSONLS[2]); const r = await roda(p, ["ferramentas/portao-mapa.mjs", p, REL, `--so=${CENAS.join(",")}`]); r.jsonl = jsonlDo(JSONLS[2], pos, r.pid, p); }
      await roda("margens", ["ferramentas/portao-margens.mjs", REL, `--so=${CENAS.join(",")}`]);
      const comVideo = CENAS.filter((c) => P.classificarCena(readFileSync(join(PASTA, "graphics", `${c}.html`), "utf8")).video);
      if (comVideo.length) await roda("video", ["scripts/qc-video-avanca.mjs", ...comVideo.map((c) => `${REL}/graphics/${c}.html`)]);
      await roda("conferir", ["ferramentas/chaves-nos-portoes.mjs", "conferir", REL, `--desde=${desde}`, `--so=${CENAS.join(",")}`]);
    } finally {
      const l = P.liberarMaquina({ quem: QUEM, tarefa: TAREFA });
      if (!l.ok) say(`  ⚠ ${l.motivo}`);
    }

    // B3. as casas e as linhas
    const k = (c, col) => porCena[c].casas[col];
    const q = lerQcCenaTexto(sep["qc-cena"].out);
    for (const c of CENAS) {
      const a = q[c], b = k(c, "qc-cena");
      checa(`${c} · qc-cena: ${b.v} no script, ${a?.v} à parte; as mesmas linhas`, a && a.v === b.v && igual([...a.falhas].sort(), b.linhas.filter((l) => !l.startsWith("[NÃO MEDIDO]")).sort()) && igual(a.indef, b.indefinidos || []),
        JSON.stringify({ aParte: a, script: b }));
    }
    {
      // o gate fora do portão: o qc-cena à parte (em texto) o diz no rodapé; o script tem de dizê-lo também (cético de 30/10)
      const fora = (/⊘ fora do portão nesta versão da Régie \(não vieram do estúdio\): ([^—\n]+?) — /.exec(sep["qc-cena"].out) || [])[1];
      checa(`o gate fora do portão do qc-cena à parte (${fora || "nenhum"}) aparece na saída do script`,
        fora ? pc.out.includes(`(não vieram do estúdio): ${fora} — `) : !pc.out.includes("⊘ fora do portão"), pc.out);
    }
    for (const [p, col] of [["til", "til"], ["rodape", "rodapé"]]) {
      const r = sep[p];
      for (const c of CENAS) {
        const a = r.jsonl[c], b = k(c, col);
        const linhasA = a && a.veredito !== 0 ? r.out.split(/\r?\n/).filter((l) => (p === "til" ? l.includes("\t") && basename(l.split("\t")[0].replace(/\\/g, "/")) === `${c}.html` : new RegExp(`^\\s+\\S+\\s+${c}\\s`).test(l))) : [];
        checa(`${c} · ${col}: ${b.v} no script, ${a?.veredito} à parte (a linha do portao-mapa.jsonl com o pid); as mesmas linhas`,
          a && a.veredito === b.v && (b.v === 0 ? b.linhas.length === 0 : igual(linhasA.length ? linhasA : [a.veredito_txt], b.linhas)) && a.sha1 === b.sha1,
          JSON.stringify({ aParte: a && { v: a.veredito, txt: a.veredito_txt, sha1: a.sha1 }, linhasA, script: b }));
      }
    }
    {
      const blocos = {}; let at = null;
      for (const l of sep.margens.out.split(/\r?\n/)) {
        const m = /^(\S) (\S+?)\.html/.exec(l);
        if (m && "✓✗?".includes(m[1])) { at = blocos[m[2]] = { v: m[1] === "✓" ? 0 : m[1] === "✗" ? 1 : 2, cab: l, itens: [] }; continue; }
        if (at && l.startsWith("    ")) at.itens.push(l); else at = null;
      }
      for (const c of CENAS) {
        const a = blocos[c], b = k(c, "margens");
        const esperadas = !a ? null : a.v === 0 ? [] : a.v === 1 ? a.itens.filter((l) => !l.trim().startsWith("aviso ")) : [a.cab, ...a.itens];
        checa(`${c} · margens: ${b.v} no script, ${a?.v} à parte; as mesmas linhas`, a && a.v === b.v && igual(esperadas.length || a.v === 0 ? esperadas : [a.cab], b.linhas), JSON.stringify({ aParte: a, script: b }));
      }
    }
    for (const c of CENAS) {
      const b = k(c, "vídeo");
      const temVideo = P.classificarCena(readFileSync(join(PASTA, "graphics", `${c}.html`), "utf8")).video;
      if (!temVideo) { checa(`${c} · vídeo: — no script (o HTML não tem vídeo), e à parte também não rodou`, b.v === null); continue; }
      const l = (sep.video?.out || "").split(/\r?\n/).find((x) => new RegExp(`^(?:✓|⛔ TODOS PARADOS|·|ERRO)\\s+${c}[\\s:]`).test(x)) || "";
      const va = l.startsWith("✓") ? 0 : l.startsWith("⛔") ? 1 : l.startsWith("·") ? 0 : 2;
      checa(`${c} · vídeo: ${b.v} no script, ${va} à parte${l.startsWith("·") ? " (sem <video>)" : ""}`, b.v === va && (!!b.semVideo === l.startsWith("·")), JSON.stringify({ l, b }));
    }
    {
      const cab = /^\S+: (\d+) cena\(s\) que carregam a base de mapa[^:]*: (.*)$/m.exec(sep.conferir.out);
      checa(`conferir à parte: nenhuma cena de mapa no escopo e saída ${sep.conferir.code}; no script, todas as casas — e a mesma saída`, cab && cab[1] === "0" && cab[2] === "nenhuma" &&
        CENAS.every((c) => k(c, "conferir").v === null) && resumo.chamadas.find((x) => x.id === "conferir")?.saida === sep.conferir.code, sep.conferir.out.slice(0, 400));
    }
    // B4. as saídas
    const ids = Object.keys(sep);
    for (const id of ids) {
      const ch = resumo.chamadas.find((x) => x.id === id);
      checa(`a saída do ${id}: ${ch?.saida} no script, ${sep[id].code} à parte`, ch && ch.saida === sep[id].code);
    }
    checa("o script não rodou portão a mais nem a menos", igual(resumo.chamadas.map((x) => x.id).sort(), ids.sort()), JSON.stringify(resumo.chamadas.map((x) => x.id)));
    const pior = P.piorSaida(ids.map((id) => sep[id].code));
    checa(`a saída do script (${pc.code}) é a pior dos portões à parte (${pior}: ${ids.map((id) => `${id} ${sep[id].code}`).join(", ")})`, pc.code === pior);
    // B5. nenhum pedido à MapTiler
    const linhasPM = [...Object.values(sep.til.jsonl), ...Object.values(sep.rodape.jsonl)];
    const dele = [];
    for (const ch of resumo.chamadas.filter((x) => x.id === "til" || x.id === "rodape")) {
      for (const l of readFileSync(JSONLS[2], "utf8").split(/\r?\n/)) { try { const o = JSON.parse(l); if (o.pid === ch.pid) dele.push(o); } catch { } }
    }
    checa("nenhuma pré-carga e nenhum pedido: o maptiler-portoes.jsonl e o portoes-saidas.jsonl do mesmo tamanho", tam(JSONLS[0]) === tamTiles && tam(JSONLS[1]) === tamSaidas);
    checa(`as ${linhasPM.length + dele.length} linhas do portao-mapa das duas rodadas: sem a pré-carga e com 0 pedidos à MapTiler`, [...linhasPM, ...dele].length >= 4 * CENAS.length &&
      [...linhasPM, ...dele].every((o) => o.pre_carga === false && (o.maptiler?.pedidos ?? 0) === 0));
  } catch (e) {
    checa("a parte B chegou ao fim", false, e?.stack || String(e));
  } finally {
    restaurar();
    checa("o _portao.json voltou ao que era (sha256)", sha256(ARQ_PORTAO) === shaPortao, `${sha256(ARQ_PORTAO)} ≠ ${shaPortao}`);
    const a = P.lerAviso(join(MAQ, "chrome.json"));
    checa("o chrome.json está livre no fim da prova", a?.estado === "livre", JSON.stringify(a));
  }
}

say(`\n${passou} ok, ${falhou} falharam · registro ${REG.slice(RAIZ.length + 1).split("\\").join("/")}/prova.log`);
process.exit(falhou ? 1 : 0);
