// Grava uma peça animada (HTML) quadro a quadro, com fundo transparente, MEDE o alfa de todos os quadros e monta:
//   <saida>/<nome>.mov  — ProRes 4444 com alfa, 3840×2160, convertido e MARCADO em BT.709 (matriz, primárias,
//                          transferência, faixa de TV), como as cenas; para pôr por cima de qualquer cena no Premiere;
//   <saida>/<nome>.medidas.json — a medida do alfa, quadro a quadro (abaixo);
//   <saida>/<nome>-sobre-<fundo>.mp4 — prévias em 1920×1080: a peça composta em 4K sobre o quadro do canal, reduzida.
// A página expõe window.render(t) (t em segundos) e desenha o estado daquele instante, sem animação CSS solta. Se ela
// expõe window.__pronto (a promessa de fontes e símbolo: o contrato novo), o gravador a espera, e a rejeição dela para
// tudo com a mensagem da página; se não, espera document.fonts.ready (as peças antigas). window.__info(), se existir,
// vai à medida.
//
// Uso (o antigo continua valendo):
//   node marca/cta/_capturar.mjs <peca.html> <duracao_s> <pasta_saida> [--fps=30] [--fundos=a.jpg,b.jpg]
// e mais (toda opção com valor vai com "=": --q="Which one?", nunca --q "Which one?", que sai com erro):
//   <duracao_s> = auto (ou --dur=auto, e então <duracao_s> pode faltar): a duração vem de window.__info().duracao;
//                 com um número, ele vai à página como ?dur=<s> (a saída da peça se ancora no fim, se ela souber)
//   --q=<pergunta>   vai à página como ?q= (a pergunta do comentário; sem cópia do HTML por pergunta)
//   --lugar=cima     vai como ?lugar=cima;   --gira=0  vai como ?gira=0;   --corpo=176  vai como ?corpo=176
//   --nome=<saida>   o nome dos arquivos de saída (o padrão é o do HTML)
//   --manter-quadros guarda os PNG 4K em <saida>/_quadros-<nome>/ (por padrão, se apagam no fim, e também na falha)
//   --sem-trava      monta mesmo com a medida reprovada (só para comparar; a medida diz o que houve)
// O Chrome é o desta máquina, lançado sem a rasterização por GPU: assim o mesmo t dá o mesmo quadro, bit a bit, em
// qualquer página nova (com a GPU, o texto grande variava até 2/255 de uma página para outra).
// A MEDIDA (identidade §4.2), com alfa > 0 contando, em coluna e linha de pixel (de 0 a 3839 e de 0 a 2159): nada em
// x < 200, x ≥ 3640, y < 160, y ≥ 1880 nem no canto do YouTube (x ≥ 3440 e y ≥ 1760), como no _gravar.mjs da proposta
// A; o primeiro e o último quadro do clipe vazios; nenhum pixel laranja (perto de --destaque #F5A524) nem vermelho;
// e, nas páginas do contrato novo (com __pronto), o 1º e o último quadro visível com opacidade de até 5 % (sem estalo).
// Falhou, sai 1 sem montar (a não ser com --sem-trava). Também registra a caixa de todos os quadros e a FOLGA: a menor
// distância, em pixels livres, de um pixel da peça até a zona proibida; abaixo de 10 px, avisa (um retoque estoura).
import { chromium } from "playwright-core";
import sharp from "sharp";
import { pathToFileURL } from "node:url";
import { resolve, basename, join } from "node:path";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";

const USO = "uso: node marca/cta/_capturar.mjs <peca.html> <duracao_s|auto> <pasta_saida> [--dur=auto] [--q=<pergunta>] [--lugar=cima] [--gira=0] [--corpo=176] [--nome=<saida>] [--fps=30] [--fundos=a.jpg,b.jpg] [--manter-quadros] [--sem-trava]\n" +
  "     (toda opção com valor vai com \"=\": --q=\"Which one would you pick?\")";
const COM_VALOR = ["q", "lugar", "gira", "corpo", "nome", "dur", "fps", "fundos"], SEM_VALOR = ["manter-quadros", "sem-trava"];
const args = process.argv.slice(2);
const pos = args.filter((a) => !a.startsWith("--"));
const opt = Object.fromEntries(args.filter((a) => a.startsWith("--")).map((a) => { const i = a.indexOf("="); return i < 0 ? [a.slice(2), true] : [a.slice(2, i), a.slice(i + 1)]; }));
const usoErrado = (msg) => { console.error(`${msg}\n${USO}`); process.exit(2); };
for (const [k, v] of Object.entries(opt)) {
  if (COM_VALOR.includes(k) && v === true) usoErrado(`--${k} precisa de valor com "=" (--${k}=...); sem o "=", o valor cairia nos posicionais e a peça sairia com o padrão`);
  if (SEM_VALOR.includes(k) && v !== true) usoErrado(`--${k} não leva valor`);
  if (!COM_VALOR.includes(k) && !SEM_VALOR.includes(k)) usoErrado(`opção desconhecida: --${k}`);
}
if (pos.length > 3) usoErrado(`posicionais demais (${pos.length}): ${pos.slice(3).map((p) => JSON.stringify(p)).join(" ")}`);
let html, durArg, saida;
if (pos.length === 3) [html, durArg, saida] = pos;
else if (pos.length === 2 && opt.dur) [html, saida] = pos;
if (typeof opt.dur === "string") durArg = opt.dur;
if (!html || !durArg || !saida || (durArg !== "auto" && !(Number(durArg) > 0))) usoErrado("faltou a peça, a duração ou a pasta de saída");
if (!existsSync(html)) usoErrado(`a peça não existe: ${html}`);
// --fps aceita número ou razão («30000/1001», a régua do motor comum para cenas e master); o ffmpeg recebe o texto exato.
const fpsTxt = String(opt.fps || 30), [fpsA, fpsB] = fpsTxt.split("/");
const fps = fpsB === undefined ? Number(fpsA) : Number(fpsA) / Number(fpsB), W = 3840, H = 2160;
if (!(fps > 0)) usoErrado(`--fps inválido: ${fpsTxt}`);
const nome = typeof opt.nome === "string" ? opt.nome : basename(html).replace(/\.html$/, "");
mkdirSync(saida, { recursive: true });
const quadros = join(saida, `_quadros-${nome}`);
const limpar = () => { if (!opt["manter-quadros"]) rmSync(quadros, { recursive: true, force: true }); };
rmSync(quadros, { recursive: true, force: true }); mkdirSync(quadros, { recursive: true });
const falhar = (msg, cod = 1) => { limpar(); console.error(msg); process.exit(cod); };

// os parâmetros vão na URL pelo searchParams (o pathToFileURL sozinho trocaria o "?" por %3F)
const url = pathToFileURL(resolve(html));
for (const k of ["q", "lugar", "gira", "corpo"]) if (typeof opt[k] === "string") url.searchParams.set(k, opt[k]);
if (durArg !== "auto") url.searchParams.set("dur", String(Number(durArg)));

let dur, info = null, contratoNovo = false;
// CHROME_PATH: o Chrome de outra máquina (o WSL do motor comum usa /opt/google/chrome/chrome); sem ela, o desta máquina.
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true, args: ["--disable-gpu-rasterization"] });
try {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto(url.href, { waitUntil: "load" });
  contratoNovo = await page.evaluate(() => !!window.__pronto);
  if (contratoNovo) await page.evaluate(() => window.__pronto);   // rejeita com a mensagem da página
  else await page.evaluate(() => document.fonts.ready);
  if (!(await page.evaluate(() => typeof window.render === "function"))) throw new Error("a página não expõe window.render(t)");
  info = await page.evaluate(() => (window.__info ? window.__info() : null));
  dur = durArg === "auto" ? info?.duracao : Number(durArg);
  if (!(dur > 0)) throw new Error("--dur=auto, mas a página não diz a duração em window.__info().duracao");
  if (info?.aviso) console.log(`aviso da página: ${info.aviso}`);
  if (typeof opt.q === "string" && info?.peca !== "comentario") console.log(`aviso: --q foi à página, mas ela não é o comentário (peca: ${info?.peca ?? "?"}) e não lê ?q=`);
  const n = Math.round(dur * fps);
  for (let i = 0; i < n; i++) {
    await page.evaluate((t) => window.render(t), i / fps);
    await page.screenshot({ path: join(quadros, `f_${String(i).padStart(5, "0")}.png`), omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
  }
} catch (e) {
  await browser.close();
  // só a mensagem da página (ou do gravador), sem a pilha do Node
  falhar(`a gravação parou: ${String(e?.message || e).split("\n")[0].replace(/^(page\.evaluate: )?(Error: )?/, "")}`);
}
await browser.close();
const n = Math.round(dur * fps);

// ---- a medida, em todos os quadros (alfa > 0 conta) ----
const proibido = (x, y) => x < 200 || x >= 3640 || y < 160 || y >= 1880 || (x >= 3440 && y >= 1760);
const folgaDe = (x, y) => Math.min(x - 200, 3639 - x, y - 160, 1879 - y, Math.max(3439 - x, 1759 - y));
const med = { nome, parametros: Object.fromEntries(url.searchParams), duracao_s: dur, quadros: n, fps, info, contrato_novo: contratoNovo,
  uniao: null, folga_px: null, fora_da_zona_px: 0, quadros_fora: [], primeiro_vazio: null, ultimo_vazio: null,
  primeiro_visivel: null, ultimo_visivel: null, laranja_max_px: 0, vermelho_max_px: 0, por_quadro: [] };
let U = null, folga = Infinity;
for (let i = 0; i < n; i++) {
  const { data } = await sharp(join(quadros, `f_${String(i).padStart(5, "0")}.png`)).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let x0 = W, y0 = H, x1 = -1, y1 = -1, fora = 0, laranja = 0, vermelho = 0, amax = 0;
  for (let y = 0; y < H; y++) {
    const lin = y * W * 4;
    for (let x = 0; x < W; x++) {
      const o = lin + x * 4, a = data[o + 3];
      if (!a) continue;
      if (a > amax) amax = a;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      const f = folgaDe(x, y); if (f < folga) folga = f;
      if (proibido(x, y)) fora++;
      if (a > 128) {
        const r = data[o], g = data[o + 1], b = data[o + 2];
        if (r > 200 && g > 120 && g < 200 && b < 110) laranja++;
        else if (r > 170 && g < 100 && b < 100) vermelho++;
      }
    }
  }
  const vazio = x1 < 0;
  med.por_quadro.push(vazio ? null : { caixa: [x0, y0, x1, y1], alfa_max: amax });
  if (!vazio) {
    U = U ? [Math.min(U[0], x0), Math.min(U[1], y0), Math.max(U[2], x1), Math.max(U[3], y1)] : [x0, y0, x1, y1];
    if (!med.primeiro_visivel) med.primeiro_visivel = { quadro: i, alfa_max: amax, pct: +(100 * amax / 255).toFixed(1) };
    med.ultimo_visivel = { quadro: i, alfa_max: amax, pct: +(100 * amax / 255).toFixed(1) };
  }
  if (fora) { med.fora_da_zona_px += fora; med.quadros_fora.push(i); }
  med.laranja_max_px = Math.max(med.laranja_max_px, laranja);
  med.vermelho_max_px = Math.max(med.vermelho_max_px, vermelho);
  if (i === 0) med.primeiro_vazio = vazio;
  if (i === n - 1) med.ultimo_vazio = vazio;
}
med.uniao = U;
med.folga_px = isFinite(folga) ? folga : null;
med.sem_estalo = !!(med.primeiro_visivel && med.primeiro_visivel.pct <= 5 && med.ultimo_visivel.pct <= 5);
const motivos = [];
if (med.fora_da_zona_px) motivos.push(`${med.fora_da_zona_px} px fora da zona permitida (quadros ${med.quadros_fora.slice(0, 5).join(", ")}${med.quadros_fora.length > 5 ? "…" : ""})`);
if (!med.primeiro_vazio || !med.ultimo_vazio) motivos.push("o primeiro ou o último quadro do clipe tem conteúdo");
if (med.laranja_max_px) motivos.push(`${med.laranja_max_px} px laranja num quadro (o laranja é do protagonista do vídeo: o símbolo vai em uma cor, simbolo-tinta.svg)`);
if (med.vermelho_max_px) motivos.push(`${med.vermelho_max_px} px vermelhos num quadro`);
if (!med.sem_estalo && contratoNovo) motivos.push(`estalo: o 1º ou o último quadro visível passa de 5 % de opacidade (${med.primeiro_visivel?.pct} % e ${med.ultimo_visivel?.pct} %)`);
med.reprovada = motivos;
writeFileSync(join(saida, `${nome}.medidas.json`), JSON.stringify(med));
console.log(`medida ${nome}: ${n} quadros, união ${U}, folga ${med.folga_px} px, fora da zona ${med.fora_da_zona_px} px, 1º e último quadro vazios ${med.primeiro_vazio}/${med.ultimo_vazio}, ` +
  `1º visível ${med.primeiro_visivel?.pct} % (q${med.primeiro_visivel?.quadro}), último visível ${med.ultimo_visivel?.pct} % (q${med.ultimo_visivel?.quadro}), laranja ${med.laranja_max_px} px, vermelho ${med.vermelho_max_px} px`);
if (!med.sem_estalo && !contratoNovo) console.log("aviso: o 1º ou o último quadro visível passa de 5 % de opacidade (estalo na entrada ou na saída)");
if (med.folga_px !== null && med.folga_px >= 0 && med.folga_px < 10) console.log(`aviso: a folga até a zona proibida é de ${med.folga_px} px (menos de 10): um contorno mais grosso, uma sombra ou uma subida maior estouram`);
if (motivos.length && !opt["sem-trava"]) falhar(`REPROVADA: ${motivos.join("; ")}. A medida está em ${join(saida, `${nome}.medidas.json`)}${opt["manter-quadros"] ? `; os quadros, em ${quadros}` : ""}`);
if (motivos.length) console.log(`aviso: reprovada, mas montada com --sem-trava: ${motivos.join("; ")}`);

// ---- o .mov: ProRes 4444 com alfa, BT.709 convertido e marcado ----
const mov = join(saida, `${nome}.mov`);
const cor709 = ["-color_primaries", "bt709", "-color_trc", "bt709", "-colorspace", "bt709", "-color_range", "tv"];
try {
  execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-framerate", fpsTxt, "-i", join(quadros, "f_%05d.png"),
    "-vf", "scale=out_color_matrix=bt709:out_range=tv,format=yuva444p10le,setparams=color_primaries=bt709:color_trc=bt709:colorspace=bt709:range=tv",
    "-c:v", "prores_ks", "-profile:v", "4444", "-alpha_bits", "16", "-vendor", "apl0", ...cor709, mov]);
  console.log(`ok ${mov} (${n} quadros, ${fps} fps, alfa, BT.709)`);

  // ---- as prévias: a peça composta em 4K, em RGB, sobre o quadro do canal, reduzida para 1080p ----
  for (const f of (typeof opt.fundos === "string" ? opt.fundos.split(",") : [])) {
    const out = join(saida, `${nome}-sobre-${basename(f).replace(/\.\w+$/, "")}.mp4`);
    execFileSync("ffmpeg", ["-y", "-loglevel", "error", "-loop", "1", "-framerate", fpsTxt, "-i", f,
      "-framerate", fpsTxt, "-i", join(quadros, "f_%05d.png"),
      "-filter_complex", "[0:v]scale=3840:2160:flags=bicubic,format=gbrp[b];[b][1:v]overlay=0:0:format=gbrp:shortest=1,scale=1920:1080:flags=lanczos:out_color_matrix=bt709:out_range=tv,format=yuv420p,setparams=color_primaries=bt709:color_trc=bt709:colorspace=bt709:range=tv[v]",
      "-map", "[v]", "-frames:v", String(n), "-c:v", "libx264", "-crf", "16", "-r", fpsTxt, ...cor709, out]);
    console.log(`ok ${out}`);
  }
} catch (e) { falhar(`o ffmpeg parou: ${String(e?.stderr || e?.message || e).trim().split("\n")[0]}`); }
limpar();
