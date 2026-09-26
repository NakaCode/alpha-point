// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/qc-src-existe.mjs (linhas 1-88, commit 4afda12).
// O que mudou: saiu o --restaurar, que baixava do bucket de nuvem do estúdio com gcloud (a v1 não usa nuvem); a flag agora erra alto em vez de fingir que tentou.
// Mudança local vem marcada com [porte Régie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// GATE SRC-EXISTE (ARTE-44) — todo src de <img>/<video>/<audio>/data-src de uma cena DEVE resolver
// pra um arquivo REAL e não-vazio. Pega a classe de bug em que o editor DOCUMENTA um asset no
// comentário do HTML (ex.: "_assets/x.jpg", "s68-paginas/pg9.png") mas NUNCA roda o passo que o
// produz — o <img> falha em silêncio, a cena vai pro render com fundo PRETO e o log diz "sucesso".
// Pegou s03/s61/s67/s68 do avioes-pequenos (20/jul) que os gates de geometria/contrato deixaram passar.
//
// Uso: node scripts/qc-src-existe.mjs out/<proj>/graphics/<cena>.html   (1 cena)
//      node scripts/qc-src-existe.mjs out/<proj>                        (todas as graphics/ do proj)
// Sai 0 se tudo resolve; 1 se há src quebrado (lista o quê). data:/http(s): são ignorados.
import { readFileSync, existsSync, statSync, readdirSync } from "node:fs";
import { dirname, join, normalize, basename } from "node:path";

const arg = process.argv.slice(2).find((a) => !a.startsWith("--"));
const RESTAURAR = process.argv.includes("--restaurar");
// ── [porte Régie] A RESTAURAÇÃO DO BUCKET SAIU ─────────────────────────────────────────────────
// No estúdio, `--restaurar` rebaixava cada arquivo faltante do bucket de nuvem do estúdio. A
// Régie não usa nuvem no caminho crítico: a mídia do canal mora no disco de quem produz, e não há
// backup remoto de onde trazer. Então a flag não restaura — ela ERRA alto, em vez de fingir que
// tentou. O que faltar volta pela estação de pesquisa (pesquisa-imagens & cia.), que é quem sabe
// de onde a mídia veio e com qual licença.
if (RESTAURAR) {
  console.error("✗ --restaurar não existe na Régie: não há bucket de onde trazer. Rode de novo a pesquisa da cena.");
  process.exit(2);
}

if (!arg) { console.error("uso: qc-src-existe.mjs <cena.html | out/proj>"); process.exit(2); }
const alvos = arg.endsWith(".html")
  ? [arg]
  : readdirSync(join(arg, "graphics")).filter(f => f.endsWith(".html")).map(f => join(arg, "graphics", f));

const RE = /(?:<(?:img|video|audio|source)[^>]*?\ssrc|data-src)\s*=\s*["']([^"']+)["']/gi;
let quebrados = 0;
for (const html of alvos) {
  const dir = dirname(html);
  // ⚠ CORREÇÃO 22/jul: o gate lia COMENTÁRIO HTML como se fosse markup vivo. Os templates de
  // citação/documento documentam o preenchimento com `<!-- o agente troca por <img src="URL"> -->`
  // e o gate reprovava a cena por um src que não existe porque NÃO É UM SRC — é instrução em prosa.
  // Gate que reprova o certo é desligado por quem usa (foi o destino do checar-plano.mjs).
  const txt = readFileSync(html, "utf8").replace(/<!--[\s\S]*?-->/g, "");
  const vistos = new Set();
  // Duas fontes de referência, e a segunda foi acrescentada em 08/ago/2026: além do atributo `src`,
  // o `url(...)` do CSS. Uma foto de fundo posta por `background-image` não é um `<img>`, não aparece
  // em `document.images`, e sumia desta varredura inteira — mesmo defeito, mesmo fundo preto.
  const refs = [...txt.matchAll(RE)].map((m) => m[1])
    .concat([...txt.matchAll(/url\(\s*['"]?([^'")]+\.(?:mp4|mov|webm|jpg|jpeg|png|webp|avif|svg))['"]?\s*\)/gi)].map((m) => m[1]));
  for (const s of refs) {
    if (s.startsWith("data:") || /^https?:/.test(s) || vistos.has(s)) continue;
    vistos.add(s);
    const p = normalize(join(dir, s));
    let motivo = null;
    if (!existsSync(p)) motivo = "FALTA";
    else if (statSync(p).size === 0) motivo = "VAZIO";
    if (motivo) {
      console.log(`  [${motivo}] ${basename(html)}: ${s}`);
      quebrados++;
    }
  }
}

if (quebrados) {
  console.log(`✗ ${quebrados} src quebrado(s) — cena vai pro render com fundo PRETO`);
  console.log(`  Conserto: a mídia que falta volta pela pesquisa da cena; o src tem de ser relativo (../_media/...).`);
  process.exit(1);
}
console.log(`✓ src-existe OK — ${alvos.length} cena(s), todo img/video resolve`);
