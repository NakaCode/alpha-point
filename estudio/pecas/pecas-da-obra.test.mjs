// node --test estudio/pecas/pecas-da-obra.test.mjs   (sem rede, sem Chrome: só o cálculo, no modo seco)
import { test } from "node:test";
import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { acharAssinatura, chamadasDoRegente, duracaoVinheta, main, normal } from "./pecas-da-obra.mjs";

const frase = (passo, tema = "the Panama Canal Zone", ap = "’") =>
  `You${ap}re at Alpha Point, and this is where the story of ${tema} begins.`.split(" ")
    .map((w, i) => ({ w, start: 10 + i * passo, end: 10 + i * passo + passo * 0.8 }));
const silencio = (f) => { const e = console.error, l = console.log; console.error = () => {}; console.log = () => {}; try { return f(); } finally { console.error = e; console.log = l; } };
function obra(words, extra = {}) {
  const d = mkdtempSync(join(tmpdir(), "pecas-"));
  writeFileSync(join(d, "words-final.json"), JSON.stringify(words));
  for (const [n, v] of Object.entries(extra)) writeFileSync(join(d, n), JSON.stringify(v));
  return d;
}

test("normaliza o apóstrofo curvo e a pontuação colada", () => {
  assert.equal(normal("You’re"), "you're");
  assert.equal(normal("Point,"), "point");
  assert.equal(normal("begins."), "begins");
});

test("acha a assinatura e calcula a vinheta como o regente do vídeo 3 (59,50 s + 5,12 s)", () => {
  const words = [...Array(163)].map((_, i) => ({ w: "x", start: i * 0.3, end: i * 0.3 + 0.2 }));
  const sig = frase(0.3).map((x, i) => ({ ...x, start: 59.5 + i * 0.3, end: 59.5 + i * 0.3 + 0.2 }));
  sig.at(-1).end = 64.37; // o «begins.» do vídeo 3 terminava em 64,37 s
  const a = acharAssinatura([...words, ...sig]);
  assert.equal(a.i, 163);
  assert.deepEqual(duracaoVinheta(a.ini, a.fimFala), { dur: 5.12, aviso: null });
});

test("sem assinatura, PARA (saída 2)", () => {
  const d = obra([{ w: "Hello", start: 0, end: 0.4 }]);
  assert.equal(silencio(() => main(["t", `--obra=${d}`, "--seco"])), 2);
});

test("assinatura acima de 8 s PARA; abaixo de 4 s grava 4 s com aviso", () => {
  assert.equal(silencio(() => main(["t", `--obra=${obra(frase(0.7))}`, "--seco"])), 2);
  const a = acharAssinatura(frase(0.2));
  const r = duracaoVinheta(a.ini, a.fimFala);
  assert.equal(r.dur, 4);
  assert.match(r.aviso, /assinatura curta/);
});

test("chamadas: entra a do regente; fica de fora a pendente, a sem pergunta e a de lugar inexistente", () => {
  const reg = { _chamadas: [
    { peca: "vinheta", lugar: "centro", inSec: 59.5, dur: 5.12 },
    { peca: "inscricao", lugar: "baixo", inSec: 342.96, dur: 4.5 },
    { peca: "comentario", lugar: "esquerda", inSec: 808.5, dur: 6, estado: "ESPERA O LUCAS" },
    { peca: "comentario", lugar: "baixo", inSec: 700 },
    { peca: "inscricao", lugar: "esquerda", inSec: 400 },
  ] };
  const semPergunta = chamadasDoRegente(reg, null);
  assert.deepEqual(semPergunta.entram.map((c) => c.peca), ["inscricao"]);
  assert.equal(semPergunta.fora.length, 3);
  const comPergunta = chamadasDoRegente(reg, "Where would you draw the line?");
  assert.deepEqual(comPergunta.entram.map((c) => [c.peca, c.q]), [["inscricao", null], ["comentario", "Where would you draw the line?"]]);
});

test("no motor comum, as chamadas vêm de regencia.json › auditoria._chamadas, e o topo fica de reserva", () => {
  const linha = { peca: "inscricao", lugar: "cima", inSec: 400, dur: 4.5 };
  const doMotor = chamadasDoRegente({ auditoria: { _chamadas: [linha] }, _chamadas: [{ ...linha, inSec: 1 }] }, null);
  assert.deepEqual(doMotor.entram.map((c) => [c.lugar, c.ini]), [["cima", 400]]);
  const daRegie = chamadasDoRegente({ auditoria: {}, _chamadas: [linha] }, null);
  assert.deepEqual(daRegie.entram.map((c) => c.ini), [400]);
});
