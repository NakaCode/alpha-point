# Leitor C (vídeo 8, australia-animais). A conta da Índia contra a Austrália, por 100.000 habitantes por ano. Nao faz pedido de rede.
# Entradas (todas gravadas em midia/australia-animais/fontes/c/): wb-pop-ind-aus.json (Banco Mundial SP.POP.TOTL, atualizado em 2026-11-11);
# Tabela 1 e texto do eLife (Suraweera et al. 2020: mortes estimadas por ano, em milhares); ABS X20 (35 em 2016-2025, fatos-b.md §1.1) e a ERP do ABS (p_contas.py: 257.890.800 pessoas-ano).
# Uso: python -X utf8 -B c_india_conta.py
import json, os
RAIZ = r'C:\projetos\alpha-point\midia\australia-animais\fontes\c'
wb = json.load(open(os.path.join(RAIZ, 'wb-pop-ind-aus.json'), encoding='utf-8'))
pop = {'IND': {}, 'AUS': {}}
for r in wb[1]:
    pop[r['countryiso3code']][int(r['date'])] = r['value']

# eLife, Tabela 1 (2001-2014) e o texto (2000 e 2015-2019): mortes estimadas por picada de cobra na Índia, em milhares
mortes_ind = {2000: 54.0, 2001: 55.0, 2002: 55.3, 2003: 55.8, 2004: 55.6, 2005: 60.8, 2006: 62.7, 2007: 61.0, 2008: 57.4, 2009: 53.8,
              2010: 52.4, 2011: 54.9, 2012: 59.2, 2013: 62.3, 2014: 61.2, 2015: 62.3, 2016: 62.0, 2017: 61.4, 2018: 60.3, 2019: 59.8}
soma_mil = sum(mortes_ind.values())
print('Índia: soma das mortes estimadas 2000-2019 = %.1f mil (o eLife diz 1,167 mil na Tabela 2; "1.2 million" no resumo)' % soma_mil)
print('Índia: média por ano = %.1f mil' % (soma_mil / 20))
pop_ind_sum = sum(pop['IND'][a] for a in range(2000, 2020))
print('Índia: soma da população (Banco Mundial) 2000-2019 = %.0f pessoas-ano; população 2000 = %d; 2019 = %d; média = %.0f' % (
    pop_ind_sum, pop['IND'][2000], pop['IND'][2019], pop_ind_sum / 20))
taxa_ind = soma_mil * 1000 / pop_ind_sum * 100000
print('Índia: taxa bruta 2000-2019 = %.2f por 100.000 por ano (mortes estimadas pelo eLife / população do Banco Mundial)' % taxa_ind)
print('Índia: taxa bruta ano a ano: 2000 %.2f | 2010 %.2f | 2019 %.2f' % tuple(mortes_ind[a] * 1000 / pop['IND'][a] * 1e5 for a in (2000, 2010, 2019)))
print('Índia: o eLife dá a taxa PADRONIZADA por idade (censo 2001) de 4,8 por 100.000 na média de 2001-2014')
print('Índia: com 58.000/ano e a população média: %.2f por 100.000' % (58000 / (pop_ind_sum / 20) * 1e5))
print('Índia: 1 em %.0f por ano (taxa bruta)' % (1e5 / taxa_ind))
print()

# Austrália
ps_abs = 257_890_800
t_abs = 35 / ps_abs * 1e5
print('Austrália (ABS, X20 = 35 em 2016-2025; ERP do ABS, %d pessoas-ano): %.4f por 100.000 por ano (1 em %.1f milhões por ano)' % (ps_abs, t_abs, 1e5 / t_abs / 1e6))
ps_wb = sum(pop['AUS'][a] for a in range(2016, 2026))
print('Austrália 2016-2025 com a população do Banco Mundial: %d pessoas-ano -> %.4f por 100.000 (a ERP do ABS e a do Banco Mundial diferem em %.2f %%)' % (
    ps_wb, 35 / ps_wb * 1e5, (ps_wb / ps_abs - 1) * 100))
ps_w = sum(pop['AUS'][a] for a in range(2000, 2017))
t_w = 35 / ps_w * 1e5
print('Austrália 2000-2016 (Welton 2017: 35 mortes por cobra, NCIS; Banco Mundial, %d pessoas-ano): %.4f por 100.000 por ano (1 em %.1f milhões)' % (ps_w, t_w, 1e5 / t_w / 1e6))
ps_w2 = sum(pop['AUS'][a] for a in range(2000, 2020))
print('Austrália 2000-2019 sem morte nova (ilustração, NAO usar): -')
print()
print('RAZÃO Índia (taxa bruta 2000-2019) / Austrália ABS 2016-2025: %.0f vezes' % (taxa_ind / t_abs))
print('RAZÃO Índia (taxa bruta 2000-2019) / Austrália Welton 2000-2016 (35 mortes): %.0f vezes' % (taxa_ind / t_w))
print('RAZÃO Índia padronizada 4,8 / Austrália ABS: %.0f vezes' % (4.8 / t_abs))
print('RAZÃO Índia padronizada 4,8 / Austrália Welton: %.0f vezes' % (4.8 / t_w))
# a faixa honesta: Austrália entre 2,2 mortes/ano (Welton) e 3,5 (ABS); 16 mortes diretamente atribuídas em 2000-2016 (Welton) = 0,9/ano
ps_w16 = 16 / ps_w * 1e5
print('Austrália 2000-2016, só as 16 "atribuídas diretamente à picada" (Welton): %.4f por 100.000; razão com a Índia bruta: %.0f vezes' % (ps_w16, taxa_ind / ps_w16))
print()
# sensibilidade: o que a Índia teria se tivesse a taxa da Austrália
print('A Índia, com a taxa da Austrália (ABS): %.0f mortes por ano (contra ~58.000)' % (t_abs / 1e5 * (pop_ind_sum / 20)))
print('A Austrália, com a taxa da Índia (bruta): %.0f mortes por ano (contra 3,5)' % (taxa_ind / 1e5 * (ps_abs / 10)))

# --- Anexo: o que explica a razão? Picadas com envenenamento por habitante x mortes por envenenamento (conta grosseira, so para enquadrar; NAO vai à voz com número) ---
print()
print('--- ANEXO: exposição x letalidade (conta nossa, grosseira) ---')
pop2015 = pop['IND'][2015]
for bites in (1.11e6, 1.77e6):
    env = bites * 0.70
    print('Índia 2015: %.2f milhões de picadas x 70%% com sinais de envenenamento = %.0f mil envenenados = %.0f por 100.000 hab.; mortes 2015 (eLife) %.1f mil = %.1f%% dos envenenados' % (
        bites / 1e6, env / 1e3, env / pop2015 * 1e5, mortes_ind[2015], mortes_ind[2015] * 1000 / env * 100))
ps_asp = sum(pop['AUS'][a] for a in range(2006, 2016)) / 10  # jul/2005-jun/2015: aproximado pelos anos 2006-2015
env_aus = 87
print('Austrália (ASP-20, jul/2005-jun/2015): mediana de %d envenenados por ano em hospital / população média %.1f milhões = %.2f por 100.000 hab. por ano' % (
    env_aus, ps_asp / 1e6, env_aus / ps_asp * 1e5))
print('Austrália (ASP-20): 23 mortes / 835 envenenados = %.1f%% (denominadores não são os mesmos: as mortes vêm também do NCIS; o ASP recruta com viés para casos graves)' % (23 / 835 * 100))
print('Razão de envenenados por habitante, Índia/Austrália: %.0f a %.0f vezes' % (
    1.11e6 * 0.70 / pop2015 * 1e5 / (env_aus / ps_asp * 1e5), 1.77e6 * 0.70 / pop2015 * 1e5 / (env_aus / ps_asp * 1e5)))
