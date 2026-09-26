// ── NOVO na Régie (não é porte) ──────────────────────────────────────────────────────────────
// O que é: onde mora o PERFIL do Chrome logado nos acervos pagos deste canal, quem o está usando, e
// quais plataformas ele conhece. É o que setup-login, sessao-conferir e chrome-daemon compartilham.
// De onde vieram as regras (top10-estudio, commit 4afda12):
//   · scripts/stock/setup-login.mjs:18 e sessao-conferir.mjs:83 — o perfil era out/_stock-perfil,
//     DENTRO do repositório. Aqui ele vai para %USERPROFILE%\.regie\chrome-stock\<canal>: é
//     credencial viva (o login do dono em cada plataforma), e credencial não mora em pasta que o git
//     vê nem em pasta que o Drive sincroniza;
//   · setup-login.mjs:74-131 — "esperar a caça, nunca invadir a janela dela": o estúdio usava a
//     trava de lib/trava.mjs (que não veio). Aqui a trava é um arquivo ao lado do perfil com o PID de
//     quem o segura; PID morto = trava velha, removida;
//   · setup-login.mjs:45-63 e sessao-conferir.mjs:135-143 — as URLs de trabalho e as de conta de
//     cada plataforma, num lugar só (as duas listas viviam separadas). Reuters SAIU: a licença é do
//     Top10 e os canais da Régie não podem usá-la.
// Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
import { closeSync, existsSync, lstatSync, mkdirSync, openSync, readFileSync, readlinkSync, unlinkSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { basename, dirname, join } from "node:path";

/**
 * As plataformas de stock LOGADO que o canal pode ter. `busca` é a página de TRABALHO (é nela que
 * CAPTCHA e sessão caída aparecem — setup-login.mjs:26-44); `conta` é a página só-de-conta usada
 * como prova de sessão (sessao-conferir.mjs:88-143 — duas delas estão CEGAS desde 14/set/2026, e o
 * sessao-conferir diz isso na saída em vez de fingir que mediu).
 */
const Q = "ocean";   // termo neutro: traz grade cheia em todas, e não gasta nada (ninguém baixa aqui)
export const PLATAFORMAS = Object.freeze({
  shutterstock: { busca: `https://www.shutterstock.com/video/search/${Q}?unlimited=true&orientation=horizontal`,
    conta: "https://www.shutterstock.com/account/downloads", lenteCega: "404 em todas as rotas de conta desde 14/set/2026 (rota morta, não sessão morta)" },
  storyblocks: { busca: `https://www.storyblocks.com/all-video/search/${Q}`,
    conta: "https://www.storyblocks.com/member/download-history", lenteCega: "202 com corpo vazio desde 14/set/2026 com a sessão viva" },
  envato: { busca: `https://app.envato.com/search?itemType=stock-video&term=${Q}`,
    conta: "https://app.envato.com/search?itemType=stock-video&term=test" },
  motionarray: { busca: `https://motionarray.com/stock-video/?q=${Q}`,
    conta: "https://motionarray.com/account/downloads/" },
  // música — não tem página de conta medida; o sessao-conferir não a julga
  epidemic: { busca: `https://www.epidemicsound.com/search/?term=${Q}`, conta: null },
});

/** O slug do canal (canal.json), com a pasta como reserva. */
export function slugDoCanal(raiz) {
  try {
    const c = JSON.parse(readFileSync(join(raiz, "canal.json"), "utf8").replace(/^﻿/, ""));
    if (c?.slug && /^[a-z0-9][a-z0-9-]*$/.test(c.slug)) return c.slug;
  } catch { /* sem canal.json: cai no nome da pasta */ }
  return basename(raiz).toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-+|-+$/g, "") || "canal";
}

/** A pasta dos perfis de stock desta máquina — fora de qualquer repositório. */
export const pastaDosPerfis = (env = process.env, casa = homedir()) =>
  env.REGIE_STOCK_PERFIS || join(casa, ".regie", "chrome-stock");

/** O perfil do canal. STOCK_PROFILE vence (mesmo nome do estúdio, para quem já o conhece). */
export function perfilDoCanal({ raiz, env = process.env, casa = homedir() } = {}) {
  return env.STOCK_PROFILE || join(pastaDosPerfis(env, casa), slugDoCanal(raiz));
}

/** Screenshots de conta (podem mostrar nome e e-mail do dono): fora do repositório também. */
export const pastaDeDebug = (perfil) => `${perfil}-debug`;

/** O arquivo que lista as plataformas em que o dono logou neste perfil (escrito pelo setup-login). */
export const arquivoDePlataformas = (perfil) => `${perfil}.plataformas.json`;

export function lerPlataformasDoPerfil(perfil) {
  try {
    const j = JSON.parse(readFileSync(arquivoDePlataformas(perfil), "utf8"));
    return Array.isArray(j?.plataformas) ? j.plataformas.filter((p) => PLATAFORMAS[p]) : [];
  } catch { return []; }
}

export function gravarPlataformasDoPerfil(perfil, plataformas, quando = new Date().toISOString()) {
  const atuais = new Set(lerPlataformasDoPerfil(perfil));
  for (const p of plataformas) if (PLATAFORMAS[p]) atuais.add(p);
  mkdirSync(dirname(perfil), { recursive: true });
  writeFileSync(arquivoDePlataformas(perfil), `${JSON.stringify({ plataformas: [...atuais].sort(), atualizado_em: quando }, null, 2)}\n`);
  return [...atuais].sort();
}

/** O executável do Chrome do stock: STOCK_CHROME, senão o acharChrome do motor (que olha CHROME_PATH). */
export async function chromeDoStock({ env = process.env, importarDoMotor } = {}) {
  if (env.STOCK_CHROME) return env.STOCK_CHROME;
  const { acharChrome, semChromeMensagem } = await importarDoMotor("src/lib/chrome.mjs");
  const achado = acharChrome({ env });
  if (!achado) throw Object.assign(new Error(semChromeMensagem(env)), { code: "SEM_CHROME" });
  return achado;
}

// ── a trava do perfil ──────────────────────────────────────────────────────────────────────────

const vivo = (pid) => {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try { process.kill(pid, 0); return true; }
  catch (e) { return e?.code === "EPERM"; }   // existe, mas é de outro usuário: vivo
};

/**
 * Pega a trava do perfil. {ok:true, liberar} ou {ok:false, motivo}. A trava é `<perfil>.trava`, com o
 * PID e o que o segura; trava cujo PID morreu é velha e sai (um Ctrl+C que matou o node não pode
 * deixar o perfil preso para sempre).
 */
export function travarPerfil(perfil, descricao = "") {
  const arq = `${perfil}.trava`;
  mkdirSync(dirname(perfil), { recursive: true });
  for (let tentativa = 0; tentativa < 2; tentativa++) {
    try {
      const fd = openSync(arq, "wx");
      writeFileSync(fd, JSON.stringify({ pid: process.pid, desde: new Date().toISOString(), descricao }));
      closeSync(fd);
      let solto = false;
      return {
        ok: true,
        liberar: () => {
          if (solto) return; solto = true;
          try { const j = JSON.parse(readFileSync(arq, "utf8")); if (j.pid === process.pid) unlinkSync(arq); } catch { /* já saiu */ }
        },
      };
    } catch (e) {
      if (e?.code !== "EEXIST") throw e;
      let j = null;
      try { j = JSON.parse(readFileSync(arq, "utf8")); } catch { /* ilegível: trata como velha */ }
      if (j && vivo(j.pid)) return { ok: false, motivo: `o perfil está com o processo ${j.pid} desde ${j.desde}${j.descricao ? ` (${j.descricao})` : ""}` };
      try { unlinkSync(arq); } catch { /* outro processo a removeu no meio: tenta de novo */ }
    }
  }
  return { ok: false, motivo: "não consegui pegar a trava do perfil (disputa com outro processo)" };
}

/**
 * Há um Chrome com este perfil aberto AGORA (inclusive um que a pessoa abriu à mão)? O segundo Chrome
 * no mesmo perfil não falha: ele imprime "Opening in existing browser session" e passa a dirigir a
 * janela do primeiro (setup-login.mjs:74-88 no estúdio). Melhor recusar antes.
 *   · Windows: o Chrome segura `<perfil>\lockfile` com acesso exclusivo — abrir para escrita falha;
 *   · Linux/macOS: `<perfil>/SingletonLock` é um link simbólico "<host>-<pid>".
 */
export function perfilAbertoPorOutroChrome(perfil, plataforma = process.platform) {
  if (plataforma === "win32") {
    const lf = join(perfil, "lockfile");
    if (!existsSync(lf)) return false;
    try { const fd = openSync(lf, "r+"); closeSync(fd); return false; }
    catch (e) { return ["EBUSY", "EPERM", "EACCES"].includes(e?.code); }
  }
  const sl = join(perfil, "SingletonLock");
  try {
    lstatSync(sl);
    const alvo = readlinkSync(sl);
    const pid = Number(String(alvo).split("-").pop());
    return vivo(pid);
  } catch { return false; }
}
