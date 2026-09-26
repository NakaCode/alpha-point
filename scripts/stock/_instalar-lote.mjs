#!/usr/bin/env node
// ── PORTADO para a Régie ─────────────────────────────────────────────────────────────────────
// Origem: top10-estudio/scripts/stock/_instalar-lote.mjs (linhas 1-202, commit 4afda12).
// O que mudou:
//   · a raiz era cravada (/home/mateuselucas/top10-estudio): agora é a pasta do canal (a atual), e
//     out/<proj>/ tem de existir — nenhuma pasta nasce fora de um projeto que já existe;
//   · o manifest é procurado ao lado do arquivo e uma pasta acima (onde o buscar-midia do motor e o
//     api-oficial.mjs do canal o gravam); os três hubs de ~/Downloads do Mac saíram. A linha casa
//     pelo sha256 (medido.sha256), e só na falta dele pelo nome;
//   · a declaração vai para o _PROCEDENCIA.json DA PASTA DA CENA (_media/footage/<cena>/), que é
//     onde o motor (pauta, créditos) a lê — o estúdio gravava em _media/_PROCEDENCIA.json. A escrita
//     é a de scripts/stock/lib/procedencia-canal.mjs: JSON ilegível NÃO vira {} e não é sobrescrito;
//     arquivo já declarado RECUSA antes de instalar (o estúdio sobrescrevia a entrada e o arquivo);
//   · `maquina` e `ip_saida` saíram do registro (o hostname do PC do dono não serve a ninguém e vaza
//     o nome do computador no git); entra a MEDIDA do arquivo instalado (medir() do motor);
//   · plataforma assinada sem linha de manifest exige --url= (ver lib/instalacao-procedencia.mjs);
//   · foto recusa com o caminho certo (o estúdio transcodificava JPEG para .mp4);
//   · ffmpeg/ffprobe por lib/ferramentas.mjs (FFMPEG_PATH, array, sem shell, CRLF da saída do
//     ffprobe do Windows tolerado); a conversão grava num temporário e só então renomeia;
//   · [revisão v1, 23/09/2026] o temporário é MEDIDO (ffprobe + medir() do motor) ANTES de ir para a
//     pasta da cena, e "pôr o arquivo" + "declarar" acontecem juntos, sob a trava do _PROCEDENCIA.json
//     (declarar(..., {antes})). Antes, o medir() rodava DEPOIS do rename e fora de try: com só
//     FFMPEG_PATH definido (o que o canal ensina) o motor não achava o ffprobe, e o clipe ficava na
//     cena SEM _PROCEDENCIA.json, com o retry recusando "ja existe". Qualquer falha agora apaga o
//     temporário e a pasta da cena fica como estava;
//   · [I4] --plataforma + --url: a URL tem de ser do domínio da plataforma (instalacao-procedencia.mjs).
// Mudança local vem marcada com [porte Regie] no ponto exato. Dependência npm: nenhuma.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// INSTALADOR do lote — pega o arquivo baixado, garante compatibilidade com o motor de render
// (h264 + yuv420p, OFICIO §10), copia para out/<proj>/_media/footage/<cena>/ e DECLARA a
// procedência lendo o manifest.jsonl da caça (que já tem plataforma + URL do item).
//
// A declaração é MERGE: outros lotes escrevem no mesmo _PROCEDENCIA.json em paralelo, então
// relê o arquivo imediatamente antes de gravar e nunca sobrescreve chave alheia.
//
// uso: node scripts/stock/_instalar-lote.mjs <proj> <cena> <arquivo-baixado> <nome-final-sem-extensao>
//        [--nota="…"] [--plataforma=<p> --url=<página do item>] [--busca="…"] [--janela=IN,DUR] [--teto-seg=240]
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { importarDoMotor } from "../lib/motor.mjs";
import { declaracaoDeInstalacao } from "./lib/instalacao-procedencia.mjs";
import { declarar, podeDeclarar } from "./lib/procedencia-canal.mjs";
import { ehPrincipal, opcao, posicionais, rodarSync } from "./lib/ferramentas.mjs";
import { linhasCsv } from "../lib/ffprobe-csv.mjs";   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs

const EXT_VIDEO = /\.(mp4|mov|m4v|mkv|webm|mxf)$/i;

/** [porte Regie] a saída `default=nw=1` do ffprobe, com o \r\n do Windows tolerado — pura. */
export function lerProbe(s) {
  const g = (k) => ((String(s).match(new RegExp(`^${k}=(.*)$`, "m")) || [, ""])[1] || "").trim();
  const [num, den] = (g("r_frame_rate") || "0/1").split("/").map(Number);
  return { codec: g("codec_name"), pix: g("pix_fmt"), w: +g("width"), h: +g("height"),
    fps: g("r_frame_rate"), fpsNum: den ? num / den : 0, bframes: +g("has_b_frames"),
    dur: +g("duration") };
}

/** [porte Regie] a linha do manifest que descreve ESTE arquivo — por sha256, senão pelo nome. */
export function acharLinha(manifestos, { nome, sha256 = null, ler = (m) => readFileSync(m, "utf8") }) {
  for (const m of manifestos) {
    if (!existsSync(m)) continue;
    let porNome = null, porSha = null;
    for (const l of ler(m).split(/\r?\n/)) {
      if (!l.trim()) continue;
      try {
        const j = JSON.parse(l);
        if (sha256 && j?.medido?.sha256 === sha256) porSha = j;
        if (j?.arquivo && basename(String(j.arquivo).replace(/\\/g, "/")) === nome) porNome = j;
      } catch { }
    }
    const reg = porSha || porNome;
    if (reg) return { reg, manifesto: m };                  // o mais específico vence
  }
  return { reg: null, manifesto: null };
}

export async function principal(argv = process.argv.slice(2), { raiz = process.cwd(), log = console.log } = {}) {
  const [PROJ, CENA, ORIG_ARG, NOME] = posicionais(argv);
  const NOTA = opcao(argv, "nota", "") || null;
  if (!PROJ || !CENA || !ORIG_ARG || !NOME) { console.error("uso: _instalar-lote.mjs <proj> <cena> <arquivo> <nome-final>"); return 2; }
  const ORIG = resolve(raiz, ORIG_ARG);
  if (!existsSync(ORIG)) { console.error("x nao existe: " + ORIG); return 2; }
  const PROJ_DIR = join(raiz, "out", PROJ);                 // [porte Regie] a pasta do canal, nunca uma raiz cravada
  if (!existsSync(PROJ_DIR)) { console.error(`x nao existe out/${PROJ}/ em ${raiz} — rode da pasta do canal, com o nome certo do projeto.`); return 2; }
  if (!EXT_VIDEO.test(ORIG)) {
    // [porte Regie] foto transcodificada para .mp4 seria um vídeo de um quadro com nome de clipe
    console.error("x este instalador e de FOOTAGE (video). Foto: node <motor>/src/ferramentas/buscar-midia.mjs <proj> entregar (acervo livre) ou scripts/stock/api-oficial.mjs baixar foto ... --proj --cena (Shutterstock).");
    return 2;
  }
  const { lerProcedencia, medir } = await importarDoMotor("src/midia/procedencia.mjs");
  const { comTrava, exigirFerramenta, nomeSeguro, renomearComRetentativa, sha256Arquivo } = await importarDoMotor("src/midia/arquivos.mjs");
  const cenaSegura = nomeSeguro(CENA, { max: 60, reserva: "cena" });
  const nomeSeguroFinal = nomeSeguro(NOME, { max: 80, reserva: "footage" });
  if (cenaSegura !== CENA || nomeSeguroFinal !== NOME) log(`  aviso: nome seguro no Windows: cena "${cenaSegura}", arquivo "${nomeSeguroFinal}.mp4"`);
  const DESTDIR = join(PROJ_DIR, "_media", "footage", cenaSegura);

  const probe = (f) => lerProbe(rodarSync("ffprobe", ["-v", "error", "-select_streams", "v:0", "-show_entries",
    "stream=codec_name,pix_fmt,width,height,r_frame_rate,has_b_frames", "-show_entries", "format=duration",
    "-of", "default=nw=1", f], { paraQue: "medir o clipe antes de instalar" }));

  // ⚠️ A COMPATIBILIDADE COM O MOTOR TEM QUATRO EIXOS, NÃO DOIS (13/ago/2026).
  //
  // Esta linha media só `h264 + yuv420p` e imprimia "já compatível" — uma afirmação sobre um estado
  // que ela não tinha medido inteiro. Os outros dois eixos são a [REND-47]: **30 fps e all-intra**
  // (`has_b_frames=0`). Vídeo com B-frames TRAVA A TELA ao ser seekado quadro a quadro pelo
  // `__renderAt`, que é como toda cena de footage é renderizada aqui.
  // [porte Regie] Vale igual na Régie: o _rig.js do motor posiciona o <video> por currentTime a cada
  // quadro (src/cena/_rig.js), o mesmo seek quadro a quadro.
  //
  // Medido no `especies-humanas`: o footage da n110 entrou por este script, que imprimiu
  // `· cópia direta (já compatível: h264/yuv420p)` — e o arquivo tinha **B-frames=2 e 25 fps**. Os
  // DOIS ramos erravam: o de cópia mentia por omissão, e o de transcodificação reencodava sem
  // `keyint=1`/`bframes=0`, produzindo B-frames novos em arquivo que acabara de passar pelo ffmpeg.
  // Só não foi para o render travando porque rodei o `normalizar-footage.mjs` por fora — passo que
  // este script nunca mencionou.
  //
  // O que NÃO se decide aqui: o MODO de conversão de taxa. `conform` (o padrão do normalizador)
  // conserva os frames e MUDA A DURAÇÃO — num footage de multidão caminhando isso acelera a cena em
  // 20%. Por isso o ramo de transcodificação usa `fps=30` (modo simples, preserva a velocidade real,
  // que é o seguro), e o de cópia direta não converte nada: ele RECUSA e manda medir.
  //
  // ⚠️ E all-intra NÃO se mede por `has_b_frames=0` — esse campo só diz que não há frames B, e um
  // arquivo `I P P P…` passa nele e reprova no gate (medido em 07/ago/2026: um clipe entregue como
  // "já compatível, sem transcode" tinha `has_b_frames=0` e era IP). Quem decide é o `pict_type` de
  // uma janela de frames: tem de vir só `I`. É o mesmo teste do `qc-footage-seekavel.mjs`, que segue
  // sendo a palavra final — este script é a porta de entrada, não o juiz.
  const soIFrames = (f) => {
    try {
      const s = rodarSync("ffprobe", ["-v", "error", "-select_streams", "v:0",
        "-read_intervals", "%+#150", "-show_entries", "frame=pict_type", "-of", "csv=p=0", f]);
      const tipos = [...new Set(linhasCsv(s, 1).map(([t]) => t))];   // [porte Régie] ffprobe: campo vazio no fim da linha (side data) — lib/ffprobe-csv.mjs
      return { ok: tipos.length > 0 && tipos.every((t) => t === "I"), tipos };
    } catch { return { ok: false, tipos: ["(não medido)"] }; }
  };
  const REND47 = (p, f) => Math.abs(p.fpsNum - 30) < 0.01 && soIFrames(f).ok;

  // ⛔ A PROCEDÊNCIA É DECIDIDA ANTES DE INSTALAR (16/set/2026). Este bloco ficava DEPOIS da cópia e do
  // transcode — o próprio comentário abaixo registra o dano: numa recusa, o clipe já estava na pasta da
  // cena, sem entrada no _PROCEDENCIA.json. Recusar agora sai sem ter tocado no projeto.
  // ── procedência, lida do manifest da caça ────────────────────────────────────────────────────────
  //
  // ⚠️ O MANIFEST MORA ONDE A CAÇA O ESCREVEU, E ISSO NÃO É SÓ `~/Downloads` (20/ago/2026).
  //
  // Esta busca olhava três pastas fixas do Mac. Na VM a caça em fila grava em
  // `/dados/tmp/<lote>/<tag>/manifest.jsonl` — ao lado do próprio arquivo baixado —, então TODA
  // instalação vinda de lá caía no `exit 1` com "procedência NÃO declarada". E o dano não é o erro:
  // é que o clipe **já foi copiado e transcodificado** antes desta linha. O arquivo entra no projeto,
  // o `_PROCEDENCIA.json` não recebe a entrada dele, e a cena vai para o render com mídia paga cuja
  // origem o estúdio não sabe provar — exatamente o estado que o gate de crédito existe para impedir.
  //
  // Medido na arte do `rosto-da-formiga`: 14 clipes de Storyblocks instalados a partir de
  // `/dados/tmp/cacaB/`, todos com `manifest.jsonl` completo (plataforma + URL + busca) a um
  // diretório de distância, e nenhum declarado.
  //
  // A ordem é do mais específico para o mais genérico: o manifest ao lado do arquivo descreve ESTE
  // download; o de `~/Downloads` é o hub compartilhado, onde nomes podem repetir entre lotes.
  // [porte Regie] Na Régie não há hub em ~/Downloads: o manifest mora em
  // out/<proj>/_media/_caca/<cena>/<plataforma>/manifest.jsonl, ao lado do arquivo.
  const manifestos = [
    join(dirname(ORIG), "manifest.jsonl"),                 // .../<cena>/<plataforma>/manifest.jsonl
    join(dirname(dirname(ORIG)), "manifest.jsonl"),        // uma pasta acima
  ];
  const sha = await sha256Arquivo(ORIG);
  const { reg, manifesto } = acharLinha(manifestos, { nome: basename(ORIG), sha256: sha });
  // ⛔ A licença NUNCA cai num texto de assinatura por falta de tabela — ver `lib/instalacao-procedencia.mjs`.
  // Até 16/set/2026 esta linha era `LIC[plat] || "licença de assinatura ativa"`, e uma foto do Commons
  // instalada aqui sairia declarada como clipe de assinatura paga.
  const plat = reg?.plataforma || opcao(argv, "plataforma", "") || null;
  const { chaveDoSelo, seloDaLinhaConfere } = await importarDoMotor("src/midia/selo.mjs");
  const chaveSelo = chaveDoSelo();
  const declaracao = declaracaoDeInstalacao({ plat, reg, urlArg: opcao(argv, "url", "") || null,
    seloConfere: (linha) => seloDaLinhaConfere(linha, chaveSelo) });
  if (!declaracao.ok) { console.error(`x ${declaracao.motivo}`); return 1; }

  const nomeFinal = `${nomeSeguroFinal}.mp4`;
  const destino = join(DESTDIR, nomeFinal);
  // [porte Regie] o estúdio sobrescrevia arquivo e entrada; aqui os dois recusam ANTES de tocar em nada
  if (existsSync(destino)) { console.error(`x ja existe out/${PROJ}/_media/footage/${cenaSegura}/${nomeFinal} — escolha outro nome.`); return 1; }
  const pode = podeDeclarar(DESTDIR, nomeFinal, { lerProcedencia });
  if (!pode.ok) { console.error(`x ${pode.porque}`); return 1; }
  // [I2] ffprobe/ffmpeg conferidos ANTES de criar a pasta da cena: ausente = "instale"; presente mas que
  // não se identifica (o caminho aponta outro programa) = "o caminho apontado não serve".
  for (const f of ["ffprobe", "ffmpeg"]) {
    try { await exigirFerramenta(f, "medir e converter o clipe antes de instalar"); }
    catch (e) { console.error(`x ${e.message}`); return 2; }
  }
  mkdirSync(DESTDIR, { recursive: true });

  const p = probe(ORIG);
  const compat = p.codec === "h264" && p.pix === "yuv420p";

  // ── TETO DE DURAÇÃO ────────────────────────────────────────────────────────────────────────────
  // All-intra não comprime entre quadros: cada frame é uma foto inteira. Um clipe 4K sai por volta
  // de **1 GB por minuto** — proporção que é o PREÇO da [REND-47] e não um defeito dela.
  //
  // Este script já media `format=duration` e só a IMPRIMIA. Medido em 20/ago/2026, na arte do
  // `rosto-da-formiga`: o `earth-views-4k.mp4` da NASA tem **52 minutos**; entrou inteiro, virou
  // **51,5 GB**, e foi instalado em DUAS cenas — **103 GB de disco para servir a ~5 s de tela cada
  // uma**. A VM tinha 211 GB livres com uma fila de instalação ainda rodando por cima.
  //
  // A cena é uma JANELA: o HTML seeka `currentTime = VOFF + f(t)` sobre um trecho de segundos. O
  // resto do arquivo nunca é lido por ninguém — só ocupa disco, atravessa a banda do bucket e faz o
  // Chrome abrir um arquivo gigante para pintar cinco segundos. [porte Regie] Aqui não há bucket: o
  // custo é o disco do PC do dono do canal, que costuma ser MENOR que o da VM.
  //
  // O teto é AVISO, não recusa: quem instala pode ter razão (uma cena longa, um take que precisa de
  // escolha ampla). O que não pode é acontecer em silêncio. `--janela=IN,DUR` recorta na entrada, que
  // é onde sai barato — depois do HTML escrito, mexer no arquivo desloca o take escolhido e é preciso
  // reescrever o `VOFF` junto (o clipe se ancora em FRAÇÃO, não em segundo absoluto).
  const TETO_S = +opcao(argv, "teto-seg", "") || 240;
  const JANELA = opcao(argv, "janela", "") || null;
  if (JANELA) {
    const [ini, dur] = JANELA.split(",").map(Number);
    log(`| janela pedida: ${ini}s +${dur}s (de ${p.dur.toFixed(0)}s) — recortando na ENTRADA`);
  } else if (p.dur > TETO_S) {
    log(`! clipe de ${(p.dur / 60).toFixed(1)} min — all-intra 4K sai a ~1 GB/min, ` +
      `estimativa ${(p.dur / 60).toFixed(0)} GB para uma cena que usa segundos.`);
    log(`  Se o take ja e conhecido: --janela=<inicio-seg>,<dur-seg>. Instalando inteiro.`);
  }
  /** args de recorte, aplicados ANTES do -i para o seek ser rápido e exato o bastante */
  const corte = () => (JANELA ? ["-ss", JANELA.split(",")[0], "-t", JANELA.split(",")[1]] : []);
  // [porte Regie] tudo sai num temporário na pasta da cena e só vira o arquivo final no fim — DEPOIS de
  // medido e junto da declaração. Qualquer falha até lá apaga o temporário: a pasta da cena nunca
  // recebe clipe sem _PROCEDENCIA.json.
  const tmp = join(DESTDIR, `.${nomeFinal}.instalando.mp4`);
  let instalado = false;
  try {
    if (compat && REND47(p, ORIG) && !JANELA) {
      copyFileSync(ORIG, tmp);
      log(`| copia direta (medido: ${p.codec}/${p.pix} | ${p.fpsNum.toFixed(2)} fps | all-intra)`);
    } else if (compat && REND47(p, ORIG)) {
      // já conforme, mas com janela pedida: corta sem reencodar (o take escolhido não se degrada)
      rodarSync("ffmpeg", ["-v", "error", "-y", ...corte(), "-i", ORIG,
        "-c", "copy", "-movflags", "+faststart", "-an", "-f", "mp4", tmp], { stdio: "inherit" });
      log(`| recorte sem reencode (ja era 30 fps all-intra)`);
    } else if (compat) {
      // Codec/pix OK, mas fora da REND-47: reencoda para 30 fps all-intra preservando a velocidade.
      const gop = soIFrames(ORIG);
      const fora = [gop.ok ? null : `GOP ${gop.tipos.join("")}`,
        Math.abs(p.fpsNum - 30) >= 0.01 ? `${p.fpsNum.toFixed(2)} fps` : null].filter(Boolean).join(" | ");
      log(`| ${p.codec}/${p.pix} OK, mas FORA da REND-47 (${fora}) — reencodando p/ 30 fps all-intra ...`);
      rodarSync("ffmpeg", ["-v", "error", "-y", ...corte(), "-i", ORIG, "-vf", "fps=30", "-c:v", "libx264",
        "-pix_fmt", "yuv420p", "-crf", "14", "-preset", "medium",
        "-x264-params", "keyint=1:min-keyint=1:scenecut=0:bframes=0",
        "-movflags", "+faststart", "-an", "-f", "mp4", tmp], { stdio: "inherit" });
    } else {
      log(`| transcodificando (${p.codec}/${p.pix} nao roda no motor headless) ...`);
      rodarSync("ffmpeg", ["-v", "error", "-y", ...corte(), "-i", ORIG, "-vf", "fps=30", "-c:v", "libx264",
        "-pix_fmt", "yuv420p", "-crf", "14", "-preset", "medium",
        "-x264-params", "keyint=1:min-keyint=1:scenecut=0:bframes=0",
        "-movflags", "+faststart", "-an", "-f", "mp4", tmp], { stdio: "inherit" });
    }

    // [porte Regie] MEDIDO NO TEMPORÁRIO, antes de tocar a pasta da cena. O medir() do motor acha o
    // ffprobe pelo REGIE_FFPROBE que lib/ferramentas.mjs espelhou do FFPROBE_PATH/FFMPEG_PATH (I2).
    const q = probe(tmp);
    const medida = await medir(tmp);
    const rend47 = REND47(q, tmp);
    const gopDestino = rend47 ? null : soIFrames(tmp).tipos.join("");

    // [porte Regie] a declaração vai para a pasta da cena, com a MEDIDA do arquivo instalado
    const item = {
      arquivo: nomeFinal,
      ...declaracao.campos,
      id: (reg?.arquivo ? basename(String(reg.arquivo)) : basename(ORIG)).replace(/\.(mp4|mov)$/i, ""),
      ...(reg?.id_na_fonte || reg?.id ? { id_fornecedor: String(reg.id_na_fonte || reg.id) } : {}),
      busca: reg?.busca || opcao(argv, "busca", "") || null,
      cena: cenaSegura,
      arquivo_original: basename(ORIG),
      resolucao: `${q.w}x${q.h}`,
      baixado_em: reg?.ts || null,                           // [porte Regie] sem linha, não se inventa data
      medido: { resolucao: medida.resolucao, codec: medida.codec, pix_fmt: medida.pix_fmt, fps: medida.fps, duracao_s: medida.duracao_s, bytes: medida.bytes, sha256: medida.sha256, sha256_do_baixado: sha },
      declarado_por: { quem: "_instalar-lote", manifesto: manifesto ? basename(dirname(manifesto)) + "/manifest.jsonl" : null },
      ...(NOTA ? { nota: NOTA } : {}),
    };
    // Pôr o arquivo e declarar: um passo só, sob a trava do _PROCEDENCIA.json da cena.
    const r = declarar(DESTDIR, item, {
      lerProcedencia, renomearComRetentativa, comTrava, quem: "instalar_lote",
      antes: () => {
        if (existsSync(destino)) throw Object.assign(new Error(`ja existe out/${PROJ}/_media/footage/${cenaSegura}/${nomeFinal} — outro processo instalou esse nome agora.`), { code: "JA_EXISTE" });
        renomearComRetentativa(tmp, destino);
        instalado = true;
      },
    });
    if (!r.ok) { rmSync(tmp, { force: true }); console.error(`x ${r.porque} — nada foi instalado.`); return 1; }

    log(`ok ${destino}\n   ${q.w}x${q.h} | ${q.codec}/${q.pix} | ${q.fps} fps | ${q.dur.toFixed(1)}s | ${(statSync(destino).size / 1e6).toFixed(1)} MB`);
    // O veredito da REND-47 é IMPRESSO, e sobre o arquivo INSTALADO — nunca sobre o de origem. Se
    // falhar aqui, o arquivo trava a tela no render e o defeito só aparece no 4K, depois de gasta a arte.
    if (rend47) {
      log(`   REND-47 conferida no destino: 30 fps | all-intra (pict_type so I)`);
    } else {
      log(`   REND-47 NAO ATENDIDA no destino: ${q.fpsNum.toFixed(2)} fps | GOP ${gopDestino}`);
      log(`      Isto TRAVA a tela no render (seek quadro a quadro). Conserte antes de desenhar a cena:`);
      log(`      node scripts/normalizar-footage.mjs ${PROJ} --modo=simples --fps=30`);
      log(`      (--modo=simples preserva a velocidade real; o padrao 'conform' muda a DURACAO)`);
    }
    log(`procedencia declarada em out/${PROJ}/_media/footage/${cenaSegura}/_PROCEDENCIA.json`);
    return 0;
  } catch (e) {
    rmSync(tmp, { force: true });
    // Se o arquivo já tinha ido para o lugar e a GRAVAÇÃO da declaração falhou, ele sai de novo: clipe
    // na cena sem _PROCEDENCIA.json é o estado que este script existe para impedir.
    if (instalado) rmSync(destino, { force: true });
    throw e;
  }
}

if (ehPrincipal(import.meta.url)) {
  try { process.exitCode = await principal(); }
  catch (e) { console.error(`erro: ${e.message}`); process.exitCode = 1; }
}
