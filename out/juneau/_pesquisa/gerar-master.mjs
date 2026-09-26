// Gera o master do vídeo: tela preta 3840×2160 com a narração como áudio (marca/identidade.md §5), pelo gerador da
// pré-v1 (src/finalize/master-sintetico.mjs › garantirMasterSintetico), sem esperar o finalizar.
//
// Por que chamar direto: na pré-v1 o master sintético só nasce dentro do finalizar.mjs, que pede o plano de cenas e
// as cenas renderizadas. O canal precisa do master antes delas. A resolução vai fixa em 3840×2160 (a das cenas do
// canal, renderizar --4k); quando o finalizar rodar com as cenas em 4K, o carimbo (narração, largura, altura, fps)
// bate e ele reusa este master em vez de refazer.
//
//   node out/juneau/_pesquisa/gerar-master.mjs <proj>        (cwd = raiz do canal; ex.: juneau)
// Grava out/<proj>/_media/_master.mp4 e o carimbo _master.mp4.de-narracao (fora do git, como toda mídia).
import { resolve } from "node:path";
import { readFileSync } from "node:fs";

const proj = process.argv[2];
if (!proj) { console.error("diga o projeto: node out/juneau/_pesquisa/gerar-master.mjs juneau"); process.exit(2); }
const D = resolve("out", proj);
const narracao = resolve(D, "narracao.wav");
const meta = JSON.parse(readFileSync(resolve(D, "narracao.json"), "utf8"));
if (!meta.tratamento_canal) {
  console.error("a narracao.wav ainda não passou pelo tratar-narracao.py (pontas e pico): trate antes do master");
  process.exit(1);
}
// A cauda da tela final (canal.json › narracao.cauda_tela_final_s) tem de estar na narração: o master dura o que ela
// dura, e sem a cauda a cena do fecho não tem onde entrar.
const caudaPedida = JSON.parse(readFileSync("canal.json", "utf8")).narracao?.cauda_tela_final_s ?? 0;
const caudaFeita = meta.tratamento_canal.cauda_tela_final?.segundos ?? 0;
if (caudaPedida !== caudaFeita) {
  console.error(`o canal.json pede ${caudaPedida} s de cauda para a tela final, e a narração tratada tem ${caudaFeita} s: ` +
    "refaça a narracao.wav pelo narrar (sai do cache, sem custo) e trate de novo antes do master");
  process.exit(1);
}
const { garantirMasterSintetico, FPS_SINTETICO } = await import("file:///C:/projetos/regie-v1/src/finalize/master-sintetico.mjs");
const m = garantirMasterSintetico(D, { narracao, w: 3840, h: 2160, fps: FPS_SINTETICO });
console.log(`master ${m.acao}: ${m.arquivo} · preto ${m.w}×${m.h} @ ${FPS_SINTETICO} fps + narração · ${m.dur.toFixed(2)} s · ${m.motivo}`);
