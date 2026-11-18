# b_hpms_dep2.py: confere que a I-15 do Arizona (MP 31,147) termina onde a I-15 de Utah (MP 0) começa, e a do Arizona (MP 0) onde a de Nevada (MP 123,765) acaba
import sys
sys.path.insert(0, r'C:/projetos/alpha-point/pautas/arizona-strip/_trabalho/scripts')
from b_hpms_rota import Rota, hav_mi
az = Rota('AZ', 2, '15'); ut = Rota('UT', 2, '15'); nv = Rota('NV', 2, '15')
a_max = max(az.pts, key=lambda q: q[2]); a_min = min(az.pts, key=lambda q: q[2])
u_min = min(ut.pts, key=lambda q: q[2]); n_max = max(nv.pts, key=lambda q: q[2])
print('I-15 AZ MP máx %.3f em (%.4f, %.4f) | I-15 UT MP 0 em (%.4f, %.4f) | distância %.3f mi' % (a_max[2], a_max[0], a_max[1], u_min[0], u_min[1], hav_mi(a_max[:2], u_min[:2])))
print('I-15 AZ MP 0 em (%.4f, %.4f) | I-15 NV MP máx %.3f em (%.4f, %.4f) | distância %.3f mi' % (a_min[0], a_min[1], n_max[2], n_max[0], n_max[1], hav_mi(a_min[:2], n_max[:2])))
