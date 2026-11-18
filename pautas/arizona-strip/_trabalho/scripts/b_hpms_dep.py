# b_hpms_dep.py: onde ficam os marcos altos da I-11 em Nevada (leitor B)
import sys
sys.path.insert(0, r'C:/projetos/alpha-point/pautas/arizona-strip/_trabalho/scripts')
from b_hpms_rota import Rota, hav_mi
i11 = Rota('NV', 2, '11'); i15 = Rota('NV', 2, '15')
for mp in (22.8, 30, 37.258, 40, 45, 50, 54.1):
    q = min(i11.pts, key=lambda q: abs(q[2] - mp)); print('I-11 MP %.2f em (%.4f, %.4f)' % (q[2], q[0], q[1]))
end = max(i11.pts, key=lambda q: q[2])
near = min(i15.pts, key=lambda q: hav_mi((q[0], q[1]), (end[0], end[1])))
print('ponta norte da I-11 (MP %.3f) a %.2f mi da I-15 (MP %.3f em %.4f,%.4f)' % (end[2], hav_mi((end[0], end[1]), (near[0], near[1])), near[2], near[0], near[1]))
