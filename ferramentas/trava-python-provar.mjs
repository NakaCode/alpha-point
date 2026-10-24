#!/usr/bin/env node
// trava-python-provar.mjs — a prova do ferramentas/trava-python.mjs, sem rodar Python nenhum.
//
// Quatro partes:
//   A. o juízo (avaliar): comandos do Bash e do PowerShell que têm de ser recusados (o Python lê o script pela entrada) e os que têm de
//      passar (o script é um arquivo, ou o "python -" está só no texto: aspas, comentário, corpo de heredoc, mensagem de commit).
//   B. o hook de verdade: o verificador rodado como o Claude Code o roda (node trava-python.mjs, com o JSON na entrada), conferindo a
//      saída (2 com o motivo na saída de erro; 0 sem nada) e que um JSON quebrado ou uma entrada vazia deixam rodar (saída 0).
//   C. os comandos que travaram de verdade: os de out/<proj>/_tmp/ e dos relatos citados no APRENDIZADOS.md, item 89, reescritos aqui.
//   D. os achados dos três céticos de 24/10/2026 (falsos positivos e negativos, o .sh no disco, o BOM e os comandos patológicos).
//
// Uso (cwd na raiz do canal): node ferramentas/trava-python-provar.mjs
// Saída: 0 = tudo certo · 1 = algum caso errado · 2 = não rodou.
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { existsSync } from "node:fs";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const TRAVA = path.join(AQUI, "trava-python.mjs");
if (!existsSync(TRAVA)) { console.error(`NÃO RODOU — falta ${TRAVA}`); process.exit(2); }
const { avaliar } = await import(pathToFileURL(TRAVA).href);

let erros = 0, total = 0;
const caso = (parte, ferramenta, comando, esperaRecusa, nota = "") => {
  total++;
  const r = avaliar(ferramenta, comando);
  const ok = esperaRecusa ? r !== null : r === null;
  if (!ok) {
    erros++;
    console.log(`✗ ${parte} [${ferramenta}] ${esperaRecusa ? "devia RECUSAR" : "devia PASSAR"}${nota ? ` (${nota})` : ""}: ${JSON.stringify(comando)} → ${r}`);
  }
};

// ─── A · o juízo ──────────────────────────────────────────────────────────────────────────────────────────────────────────────
const RECUSA_BASH = [
  "python - <<'EOF'\nprint(1)\nEOF",
  "python -X utf8 -B - <<'EOF'\nEOF",
  "python <<EOF\nprint(1)\nEOF",
  "python3 - <<\"PY\"\nimport sys\nPY",
  "python -X utf8 -B - <<-'EOF'\n\tprint(1)\n\tEOF",
  "cat x.py | python",
  "cat x.py | python3 -",
  "python - </dev/null",
  "python - <<'EOF' </dev/null\nprint(1)\nEOF",
  "python <<< \"print(1)\"",
  "python < script.py",
  "python",
  "python -i",
  "python -u",
  "python -X utf8",
  "python -W ignore -",
  "python --",
  "cd out && python -X utf8 - <<'PY' && echo ok\nx = 1\nPY",
  "ls; python - <<'EOF'\nEOF\necho fim",
  "PYTHONIOENCODING=utf8 python - <<EOF\nEOF",
  "timeout 60 python - <<EOF\nEOF",
  "env PYTHONUTF8=1 python - <<EOF\nEOF",
  "nohup python -u - <<EOF &\nEOF",
  "/c/Users/zangp/AppData/Local/Programs/Python/Python314/python.exe - <<EOF\nEOF",
  "\"C:/Users/zangp/AppData/Local/Programs/Python/Python314/python.exe\" -X utf8 -B - <<'EOF'\nEOF",
  "C:\\\\Python314\\\\python.exe -",
  "py -3 - <<EOF\nEOF",
  "py -3.14 -X utf8 -",
  "python3.14 - <<EOF\nEOF",
  "bash -c \"python - <<'EOF'\nprint(1)\nEOF\"",
  "sh -c 'cat a.py | python'",
  "echo $(python - <<'EOF'\nprint(1)\nEOF\n)",
  "X=$(python -X utf8 -B - <<'EOF'\nprint(len([1,2]))\nEOF\n); echo $X",
  "for f in a b; do python - <<EOF\nEOF\ndone",
  "if true; then python -; fi",
  "{ python - <<'EOF'; }\nEOF",
  "(cd out && python -)",
  "python -X utf8 -c 'print(1)'; python -",
  "git status && cat <<'EOF' | python\nprint(1)\nEOF",
  "cmd /c \"type a.py | python\"",
  "powershell -Command \"Get-Content a.py | python -\"",
  "python -X utf8 -B - <<'EOF' 2>/dev/null; echo \"(sanidade)\"\nEOF\ntrue",
];
const PASSA_BASH = [
  "python -X utf8 -B arquivo.py",
  "python -X utf8 -B out/peru-agua/_tmp/x.py --so=s01 -",
  "python3 \"C:/caminho com espaço/x.py\" -",
  "python -m pip list",
  "python -m json.tool a.json",
  "python -c \"print(1)\"",
  "python -Bc \"import sys; print(sys.version)\"",
  "python --version",
  "python -V",
  "py -0",
  "py --list",
  "py -3 x.py",
  "python -W ignore x.py",
  "which python",
  "grep -n \"python -\" APRENDIZADOS.md",
  "grep -c 'python - <<' a.md",
  "echo \"cat x | python\"",
  "echo 'python -'",
  "# python - <<'EOF'\nls",
  "ls # depois: python -",
  "git commit -F - <<'EOF'\nA trava recusa python - <<'X' e cat a | python.\nEOF",
  "git commit -m \"$(cat <<'EOF'\nTrava: python - e heredoc\nEOF\n)\"",
  "cat > x.py <<'EOF'\nimport sys\nprint(sys.argv)\nEOF\npython -X utf8 -B x.py",
  "node -e \"console.log('python -')\"",
  "ffmpeg -nostdin -i a.mp4 -f null -",
  "pip install requests",
  "ls python-",
  "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\"",
  "python -X utf8 -B x.py > saida.txt 2>&1",
  "python -X utf8 -B x.py | tee log.txt",
  "REGIE_MOTOR=C:/projetos/regie-v1 node scripts/qc-cena.mjs out/peru-agua --conc=3",
  "pythonic --help",
  "npx pyright x.py",
  "python -X importtime -B x.py",
  "python --check-hash-based-pycs never x.py",
  "bash -c \"python -X utf8 -B x.py\"",
];
const RECUSA_PS = [
  "@'\nprint(1)\n'@ | python -",
  "@\"\nprint(1)\n\"@ | python -X utf8 -B -",
  "Get-Content x.py | python",
  "\"print(1)\" | python -X utf8 -",
  "& python -",
  "& \"C:\\Users\\zangp\\AppData\\Local\\Programs\\Python\\Python314\\python.exe\" -X utf8 -B -",
  "cd out; python -",
  "Set-Location out && python",
  "$env:PYTHONUTF8='1'; @'\nimport sys\n'@ | python -",
  "$x = (Get-Content a.py | python -)",
  "bash -c \"python - <<'EOF'\nprint(1)\nEOF\"",
];
const PASSA_PS = [
  "python -X utf8 -B x.py",
  "& python -X utf8 -B \"C:\\x y\\a.py\"",
  "Select-String -Pattern \"python -\" -Path a.md",
  "git commit -m @'\nA trava recusa python - e o heredoc.\n'@",
  "Get-CimInstance Win32_Process -Filter \"Name='python.exe'\" | Select-Object ProcessId",
  "Stop-Process -Id 21332 -Confirm:$false",
  "python -m pip list",
  "python --version",
  "# python -\nGet-ChildItem",
  "Write-Output 'cat x | python'",
];
for (const c of RECUSA_BASH) caso("A", "Bash", c, true);
for (const c of PASSA_BASH) caso("A", "Bash", c, false);
for (const c of RECUSA_PS) caso("A", "PowerShell", c, true);
for (const c of PASSA_PS) caso("A", "PowerShell", c, false);

// ─── B · o hook de verdade ────────────────────────────────────────────────────────────────────────────────────────────────────
const hook = (entrada) => spawnSync(process.execPath, [TRAVA], { input: entrada, encoding: "utf8", timeout: 15000 });
const confere = (rotulo, entrada, codigo, trecho) => {
  total++;
  const r = hook(entrada);
  const ok = r.status === codigo && (!trecho || (r.stderr ?? "").includes(trecho));
  if (!ok) { erros++; console.log(`✗ B ${rotulo}: saída ${r.status} (esperava ${codigo}); stderr: ${(r.stderr ?? "").slice(0, 200)}`); }
};
const json = (tool, command) => JSON.stringify({ session_id: "prova", hook_event_name: "PreToolUse", tool_name: tool, tool_input: { command } });
confere("Bash com heredoc", json("Bash", "python -X utf8 -B - <<'EOF'\nprint(1)\nEOF"), 2, "python -X utf8 -B <arquivo>.py");
confere("Bash com heredoc (o motivo)", json("Bash", "python - <<'EOF'\nEOF"), 2, "heredoc");
confere("PowerShell com pipe", json("PowerShell", "@'\nprint(1)\n'@ | python -"), 2, "RECUSADO");
confere("Bash com arquivo", json("Bash", "python -X utf8 -B x.py"), 0);
confere("Bash sem Python", json("Bash", "ls -la"), 0);
confere("PowerShell com arquivo", json("PowerShell", "python -X utf8 -B x.py"), 0);
confere("JSON quebrado", "{isto não é json", 0);
confere("entrada vazia", "", 0);
confere("sem command", JSON.stringify({ tool_name: "Bash", tool_input: {} }), 0);
confere("JSON com BOM", "﻿" + json("Bash", "python - <<'EOF'\nprint(1)\nEOF"), 2, "heredoc");
confere("Monitor com heredoc", json("Monitor", "python - <<'EOF'\nEOF"), 2, "RECUSADO");

// ─── C · os que travaram de verdade (APRENDIZADOS.md, item 89) ───────────────────────────────────────────────────────────────
const TRAVARAM = [
  // qc-visual, 22/10/2026 (7 lotes): o Python por heredoc, numa cadeia que regravaria laudos
  "python - <<'EOF' && node scripts/qc-cena.mjs out/peru-agua/graphics/s19.html\nimport json\nprint(json.dumps({}))\nEOF",
  // qualidade-8, 22/10/2026 20:5x (3 lotes): o heredoc com a entrada redirecionada, que travou do mesmo jeito
  "python - </dev/null <<'EOF'\nprint(1)\nEOF",
  // arte-17, 23/10/2026 (6 vezes): o Python preso no meio da arte
  "cd /c/projetos/alpha-point && python -X utf8 - <<'PY'\nfrom pathlib import Path\nprint(Path('out').exists())\nPY",
  // a Sala, 24/10/2026 14:31: um heredoc vazio, com a saída de erro descartada
  "cd /c/projetos/alpha-point && python -X utf8 -B - <<'EOF' 2>/dev/null; echo \"(sanidade ignorada)\"\nEOF\ntrue",
];
for (const c of TRAVARAM) caso("C", "Bash", c, true, "travou de verdade");

// ─── D · os achados dos três céticos (24/10/2026), sobre a varredura de 100 mil comandos já rodados no canal ─────────────────────
const D_PASSA_BASH = [
  "py(){ python -X utf8 -B x.py \"$@\"; }", // função de verdade da varredura (o índice 369)
  "py() { :; }",
  "python() { command python \"$@\"; }",
  "function py { python -X utf8 -B x.py; }",
  "function py() { python -X utf8 -B x.py; }",
  "command -v python",
  "command -V py",
  "which python || command -v python3",
  "ls -la $(dirname $(command -v python))",
  "if command -v py >/dev/null; then py -3 x.py; fi",
  "PY=$(command -v python)",
  "ls *.py | xargs python",
  "find . -name '*.py' | xargs -n1 python",
  "printf '%s\\0' a.py | xargs -0 python3",
  "ls *.py | xargs -I{} python {}",
  "ls *.py | xargs -I {} python -X utf8 -B {}",
  "find . -name '*.py' -exec python {} \\;",
  "X=$(cat <<'EOF'\n1) python - foo\nEOF\n)",
  "MSG=$(cat <<'EOF'\n1) python - recusado\nEOF\n)\ngit commit -m \"$MSG\"",
  "git commit -m \"$(cat <<'EOF'\nA marca d'água (e o \"python -\") ficam.\nEOF\n)\"",
  "case \"$x\" in python|py) echo sim;; esac",
  "case $x in\n  python) echo sim;;\n  *) echo nao;;\nesac",
  "arr=(python -)",
  "arr=(python)",
  "python <(cat x.py)",
  "echo $((1<<3)); ls",
  "(( x = 1 << 2 )); echo $x",
  "echo ${#arr[@]} https://x.org/#python-",
  "sed -e 's#python -#py#' a.txt",
  "cat <<'EOF'\r\nx\r\nEOF\r\nls\r\n",
  "python -X utf8 -B \"C:\\Users\\zangp\\x.py\"",
  "\"C:\\Python312\\python.exe\" -X utf8 -B x.py",
  "cat > x.sh <<'EOF'\npython -X utf8 -B y.py\nEOF\nbash x.sh",
  "cat > notas.md <<'EOF'\npython - <<'PY'\nPY\nEOF",
  "bash <<'EOF'\nls\nEOF",
  "echo 'ls -la' | bash",
  "eval python -X utf8 regioesp.py",
  "env -i PATH=/usr/bin python x.py",
  "timeout -s KILL 60 python x.py",
  "uv run python x.py",
  "conda run -n base python -m pip list",
];
const D_RECUSA_BASH = [
  "cat > x.sh <<'EOF'\npython - <<'PY'\nprint(1)\nPY\nEOF\nbash x.sh",
  "cat > out/q.sh <<'EOF'\ncat a.py | python\nEOF",
  "tee x.sh <<'EOF'\npython -\nEOF",
  "bash <<'EOF'\npython - <<'PY'\nprint(1)\nPY\nEOF",
  "sh -s <<'EOF'\ncat x.py | python\nEOF",
  "echo 'python -' | bash",
  "cat <<'EOF' | bash\npython -\nEOF",
  "\"C:\\Python312\\python.exe\" - <<'PY'\nprint(1)\nPY",
  "eval python -",
  "eval \"python - <<'PY'\nprint(1)\nPY\"",
  "cmd //c \"python - < x.py\"",
  "env -i python - <<'PY'\nprint(1)\nPY",
  "timeout -s KILL 60 python -",
  "timeout -k 5 60 python -",
  "xargs -n 1 python -",
  "uv run python - <<'PY'\nPY",
  "conda run -n base python -",
  "PY=python; $PY - <<'EOF'\nprint(1)\nEOF",
  "\"$PYTHON\" -",
  "${PYTHON:-python} -",
  "echo \"`python -`\"",
  "x=\"`cat a.py | python`\"",
  "git commit -m \"a trava recusa `python -`\"",
  "bash -c -- 'python - < a.py'",
  "find . -exec sh -c 'python - < \"$1\"' _ {} \\;",
  "su -c 'python - < a.py'",
  "script -c 'python -' /dev/null",
  "python -i x.py",
  "python -ic \"print(1)\"",
  "cat x.py | python /dev/stdin",
  "python /dev/stdin <<'EOF'\nEOF",
  "python /proc/self/fd/0 < x.py",
  "coproc python -",
  "pypy3 - <<EOF\nEOF",
  "git commit -m \"$(cat <<'EOF'\nmarca d'água\nEOF\n)\" && python - <<'P'\nprint(1)\nP",
  "echo $((1<<3))\npython - <<'P'\nP",
  "cat <<'EOF'\r\nx\r\nEOF\r\npython -\r\n",
];
const D_PASSA_PS = [
  "Test-Path ('C:/Py/python.exe')",
  "foreach ($py in @('C:\\Py\\python.exe','C:\\Py2\\python.exe')) { & $py --version }",
  "foreach ($py in @('C:\\Py\\python.exe')) { & $py -c \"import sys\" }",
  "[IO.File]::Exists('C:\\x\\python.exe')",
  "Write-Output (\"python\")",
  "switch ($x) { 'python' { 1 } }",
  "Start-Process python -ArgumentList 'x.py' -NoNewWindow -Wait",
];
const D_RECUSA_PS = [
  "Start-Process python -ArgumentList '-' -RedirectStandardInput a.py -NoNewWindow -Wait",
  "Invoke-Expression 'python -'",
  "iex \"Get-Content a.py | python\"",
  "Get-Content a.py | . python -",
  "$r = python -",
];
for (const c of D_PASSA_BASH) caso("D", "Bash", c, false);
for (const c of D_RECUSA_BASH) caso("D", "Bash", c, true);
for (const c of D_PASSA_PS) caso("D", "PowerShell", c, false);
for (const c of D_RECUSA_PS) caso("D", "PowerShell", c, true);

// o .sh que já está no disco e o comando roda (bash x.sh, ./x.sh, source x.sh)
{
  const { mkdtempSync, writeFileSync, rmSync } = await import("node:fs");
  const os = await import("node:os");
  const pasta = mkdtempSync(path.join(os.tmpdir(), "trava-python-"));
  writeFileSync(path.join(pasta, "ruim.sh"), "#!/bin/bash\nset -e\npython -X utf8 -B - <<'PY'\nprint(1)\nPY\n");
  writeFileSync(path.join(pasta, "bom.sh"), "#!/bin/bash\npython -X utf8 -B x.py \"$@\"\n");
  const fwd = pasta.replace(/\\/g, "/");
  const msys = fwd.replace(/^([A-Za-z]):/, (_, l) => `/${l.toLowerCase()}`);
  for (const [cmd, recusa] of [
    [`bash ${fwd}/ruim.sh`, true], [`bash "${fwd}/bom.sh" a b`, false], [`${msys}/ruim.sh s13`, true], [`cd ${msys} && bash ruim.sh`, true],
    [`cd ${msys} && ./bom.sh`, false], [`source ${fwd}/ruim.sh`, true], [`bash -x ${fwd}/ruim.sh`, true], [`sh nao-existe.sh`, false],
  ]) caso("D", "Bash", cmd, recusa, "script no disco");
  rmSync(pasta, { recursive: true, force: true });
}

// o patológico: muitos $( sem fechar não quebram nem demoram, e o python - do começo continua recusado
{
  const t = performance.now();
  caso("D", "Bash", "python - <<'E'\nE\necho " + "$(".repeat(2161), true, "2.161 $( sem fechar");
  caso("D", "Bash", "python - <<'E'\nE\necho " + "$(".repeat(3500) + "a".repeat(2_000_000), true, "3.500 $( e 2 MB");
  const ms = performance.now() - t;
  total++;
  if (ms > 5000) { erros++; console.log(`✗ D os patológicos levaram ${Math.round(ms)} ms (o hook tem 10 s)`); }
}

console.log(erros ? `\n${erros} de ${total} casos errados` : `${total} de ${total} casos certos`);
process.exit(erros ? 1 : 0);
