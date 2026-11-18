# b_horario.py (leitor B, 18/11/2026): quantos dias por ano Utah (horário de verão) e o Arizona (sem horário de verão) ficam com 1 hora de diferença
# Regra (49 CFR 71.2, Uniform Time Act): do 2o domingo de março, 2h, ao 1o domingo de novembro, 2h.
import datetime as dt
def nth_sunday(y, m, n):
    d = dt.date(y, m, 1)
    while d.weekday() != 6: d += dt.timedelta(1)
    return d + dt.timedelta(7 * (n - 1))
for y in (2025, 2026, 2027):
    ini = nth_sunday(y, 3, 2); fim = nth_sunday(y, 11, 1)
    dias = (fim - ini).days
    ano = 366 if (y % 4 == 0 and (y % 100 != 0 or y % 400 == 0)) else 365
    horas = dias * 24
    print(y, 'início', ini, ini.strftime('%A'), 'fim', fim, fim.strftime('%A'), '| dias', dias, '(%.1f semanas, %.2f meses de 30,44 d, %.1f%% do ano)' % (dias / 7, dias / 30.44, dias / ano * 100))
