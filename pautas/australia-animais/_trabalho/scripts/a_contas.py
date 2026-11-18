# Leitor A (vídeo 8, australia-animais). As contas simples que o fatos-a.md cita, com a entrada de cada uma (todas lidas nas fontes; ver o fatos-a.md).
# Uso: python -X utf8 -B a_contas.py
print('--- ABS 1370.0 (2002, arquivada; tabela do World Resources Institute): endemismo')
for nome, n, end in (('mamiferos', 260, 206), ('aves (que se reproduzem)', 649, 350), ('repteis', 748, 641)):
    print('  %-26s %3d de %3d = %.1f%%' % (nome, end, n, 100.0 * end / n))
print('--- Currie & Jacups 2005 (MJA 183:631): C. fleckeri, 1991-2004, Darwin Harbour e Tiwi')
print('  1 morte em 225 picadas confirmadas = %.2f%%  (so os casos que chegaram ao hospital ou posto; nao e risco por banhista)' % (100.0 / 225))
print('  92%% das 225 em 1 out-1 jun = %d picadas; 8%% fora da temporada = 17 (o artigo diz 17)' % round(0.92 * 225))
print('--- Weinstein et al. 2017 (Toxicon): taipan-do-interior')
print('  envenenamentos bem documentados: 11 anteriores + 1 deste artigo = %d' % (11 + 1))
print('  por cobra selvagem: 2 anteriores + 1 deste artigo = %d' % (2 + 1))
print('--- Kohn 2016: Conus, mundo todo')
print('  36 mortes em 139 casos aceitos = %.1f%%' % (100.0 * 36 / 139))
print('  soma dos tres grupos: 36 mortes + 57 graves com recuperacao + 44 leves = %d (nao fecha com os 139; o resumo diz que alguns casos sao "tentativos")' % (36 + 57 + 44))
print('--- MJA 2005 (funnel-web): 77 casos graves; 13 mortes (todas antes de 1981); 48 tratados com soro; 16 nao fatais antes do soro')
print('  13 + 16 + 48 = %d (confere com os 77)' % (13 + 16 + 48))
print('--- Datas (so aritmetica): do soro da funnel-web (1981) ao fim da revisao (2004) = %d anos sem morte confirmada nesse levantamento' % (2004 - 1981))
print('  do soro da redback (1956) a carta de Wiener (2003) = %d anos' % (2003 - 1956))
print('--- Hall 2013 / GA: 85-80 Ma (rifte) menos 45 Ma (deriva rapida) = %d a %d milhoes de anos de afastamento lento' % (80 - 45, 85 - 45))
