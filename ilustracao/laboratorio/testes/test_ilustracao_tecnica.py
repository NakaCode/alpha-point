"""Testes de contrato; fixtures sinteticas nao simulam render ou QC artistico."""
from pathlib import Path
import copy
import hashlib
import importlib.util
import json
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('ilustracao_tecnica', ROOT/'ferramentas/ilustracao/validar-tecnica.py')
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)


class TechnicalContractTests(unittest.TestCase):
    def setUp(self):
        self.temp_base = (ROOT/'laboratorio/testes').resolve()
        self.tmp = tempfile.TemporaryDirectory(prefix='contrato-tecnico-', dir=self.temp_base)
        self.root = Path(self.tmp.name).resolve()
        self.addCleanup(self.cleanup_fixture)
        (self.root/'identidade.md').write_text('Identidade sintetica para testar interfaces.', encoding='utf-8')
        (self.root/'brief.txt').write_text('Fornecer um componente para o editor compor.', encoding='utf-8')
        roles = ('fundo','superficie','papel','tinta','tinta_papel','contorno','protagonista','contraparte','risco')
        css = ':root{'+''.join('--teste-'+str(i)+':#123456;' for i in range(len(roles)))+'--tipo:Example;--peso:600;--tamanho:30px;}'
        (self.root/'tokens.css').write_text(css, encoding='utf-8')
        typo = {'familia_token':'--tipo','peso_token':'--peso','tamanho_token':'--tamanho','piso':20,'alvo':30,'teto':40}
        self.g = {'versao_contrato':1,'id':'outro-canal','revisao':'r1','idioma_tela':'pt-BR','palco':[1280,720],
                  'documentos':[self.ref('identidade.md')],'tokens_css':self.ref('tokens.css'),
                  'papeis_cor':{k:'--teste-'+str(i) for i,k in enumerate(roles)},
                  'tipografia':{k:copy.deepcopy(typo) for k in ('heroi','rotulo','legenda','credito')},
                  'areas':{'conteudo':[40,32,1200,580],'credito':[40,650,700,50],'reservadas':[[1000,400,180,180]]},
                  'limites':{'elementos':4,'blocos_leitura':2,'herois':1},'regras':['Direcao externa.'],'executor_padrao':'html-svg-js'}
        self.write('roupa.json', self.g)
        self.p = {'versao_contrato':1,'tipo_contrato':'ilustracao-tecnica','projeto':'teste','id':'caixa','revisao':'r1',
                  'modo':'componente','objetivo':'Fornecer caixa para composicao externa.',
                  'brief':self.ref('brief.txt'),'roupa':self.ref('roupa.json'),'entradas':[],
                  'palco':[1280,720],'area_destino':[80,80,600,400],
                  'autoridade':{'composicao':'consumidor','funcao_recebida':'Desenhar o componente solicitado.'},
                  'consumidor':{'responsavel':'editor','interface':'svg-estatico'},
                  'limites':['Nao alterar a composicao final.'],'saidas_esperadas':['asset'],'controles':[]}

    def cleanup_fixture(self):
        # Conferencia antes da remocao recursiva da fixture, restrita a esta pasta de testes.
        self.assertTrue(self.root.is_relative_to(self.temp_base) and self.root != self.temp_base)
        self.tmp.cleanup()

    def write(self, name, data):
        (self.root/name).write_text(json.dumps(data, ensure_ascii=False), encoding='utf-8')
        return name

    def ref(self, name):
        return {'arquivo':name,'sha256':hashlib.sha256((self.root/name).read_bytes()).hexdigest()}

    def request(self):
        return mod.validate('pedido', self.write('pedido.json', self.p), self.root)

    def delivery(self):
        self.request()
        # Conteudo minimo intencional: o validador confere contrato, nao executa arte.
        (self.root/'asset.svg').write_text('<svg xmlns="http://www.w3.org/2000/svg"/>', encoding='utf-8')
        return {'versao_contrato':1,'tipo_contrato':'ilustracao-tecnica','projeto':'teste','id':'caixa','versao':'v1',
                'estado':'preparado','modo':self.p['modo'],'autoridade':copy.deepcopy(self.p['autoridade']),
                'pedido':self.ref('pedido.json'),'roupa':self.ref('roupa.json'),
                'arquivos':[{**self.ref('asset.svg'),'funcao':'asset'}],
                'api':{'interface':self.p['consumidor']['interface'],'entrada':'asset.svg',
                       **({'hook':self.p['consumidor']['hook']} if 'hook' in self.p['consumidor'] else {})},
                'partes':[{'id':'caixa','funcao':'Ilustrar o objeto.'}], 'poses_exemplo':[],
                'verificacoes':[{'tipo':x,'estado':'nao_medido','motivo':'Fixture: nenhuma revisao visual executada.'}
                                for x in sorted(mod.DOMAINS)], 'pendencias':[],
                **({'tempo':copy.deepcopy(self.p['tempo'])} if 'tempo' in self.p else {})}

    def submit(self, delivery):
        return mod.validate('entrega', self.write('entrega.json', delivery), self.root)

    def procedural(self):
        self.p['consumidor'] = {'responsavel':'editor','interface':'poses-js','hook':'Caixa.build'}
        self.p['controles'] = [{'id':'abertura','tipo':'numero','minimo':0,'maximo':90,'inicial_numero':0},
                              {'id':'face','tipo':'enum','opcoes':['frente','costas'],'inicial_opcao':'frente'}]
        d = self.delivery()
        d['poses_exemplo'] = [{'id':'aberta','valores':[{'controle':'abertura','numero':45},{'controle':'face','opcao':'frente'}]}]
        return d

    def reviewed_record(self):
        d = self.delivery()
        (self.root/'evidencia.txt').write_text('Registro sintetico para testar vinculacao. Nao e QC da arte.', encoding='utf-8')
        evidence = self.ref('evidencia.txt')
        d['arquivos'].append({**evidence,'funcao':'evidencia'})
        for v in d['verificacoes']:
            v.update(estado='passou', evidencia=copy.deepcopy(evidence))
        d['estado'] = 'aprovado'
        return d

    def test_static_component_needs_no_narration_clock_or_procedural_hook(self):
        d = self.submit(self.delivery())
        self.assertEqual(d['estado'], 'preparado')
        self.assertNotIn('tempo', d)
        self.assertNotIn('fala', self.p)

    def test_component_cannot_claim_final_composition(self):
        self.p['autoridade']['composicao'] = 'ilustrador'
        with self.assertRaisesRegex(ValueError, 'autoridade de composicao'):
            self.request()

    def test_explicit_independent_request_can_delegate_composition(self):
        self.p['modo'] = 'ilustracao_independente'
        self.p['autoridade']['composicao'] = 'ilustrador'
        self.assertEqual(self.submit(self.delivery())['modo'], 'ilustracao_independente')

    def test_delivery_cannot_escalate_mode_or_received_authority(self):
        original = self.delivery()
        for field, value in [('modo','ilustracao_independente'),
                             ('autoridade',{'composicao':'ilustrador','funcao_recebida':'Compor por conta propria.'})]:
            with self.subTest(field=field):
                d = copy.deepcopy(original)
                d[field] = value
                with self.assertRaisesRegex(ValueError, 'Entrega altera '+field):
                    self.submit(d)

    def test_modified_brief_is_rejected_until_reference_is_updated(self):
        (self.root/'brief.txt').write_text('Outra versao do brief.', encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'Hash divergente'):
            self.request()

    def test_outside_and_machine_specific_paths_are_rejected(self):
        for path in ('../fora.txt','C:/pessoal/brief.txt','pasta\\brief.txt','/fora.txt'):
            with self.subTest(path=path):
                self.p['brief']['arquivo'] = path
                with self.assertRaises(ValueError):
                    self.request()

    def test_destination_obeys_safe_and_reserved_areas(self):
        for area in ([0,0,600,400],[950,380,200,200]):
            with self.subTest(area=area):
                self.p['area_destino'] = area
                with self.assertRaisesRegex(ValueError, 'area segura|area reservada'):
                    self.request()

    def test_nonfinite_geometry_and_unknown_fields_are_rejected(self):
        self.p['area_destino'][0] = float('nan')
        with self.assertRaisesRegex(ValueError, 'tipo esperado'):
            self.request()
        self.p['area_destino'][0] = 80
        self.p['publicar_automaticamente'] = True
        with self.assertRaisesRegex(ValueError, 'campo desconhecido'):
            self.request()

    def test_procedural_pose_uses_typed_domains_without_mandatory_clock(self):
        d = self.submit(self.procedural())
        self.assertNotIn('tempo', d)
        self.assertEqual(d['api']['hook'], 'Caixa.build')

    def test_procedural_hook_and_numeric_default_are_checked(self):
        self.procedural()
        del self.p['consumidor']['hook']
        with self.assertRaisesRegex(ValueError, 'exige hook'):
            self.request()
        self.p['consumidor']['hook'] = 'Caixa.build'
        self.p['controles'][0]['inicial_numero'] = 91
        with self.assertRaisesRegex(ValueError, 'fora do dominio'):
            self.request()

    def test_pose_rejects_out_of_range_incomplete_and_unknown_controls(self):
        original = self.procedural()
        cases = [[{'controle':'abertura','numero':91},{'controle':'face','opcao':'frente'}],
                 [{'controle':'abertura','numero':20}],
                 [{'controle':'outra','numero':20},{'controle':'face','opcao':'frente'}],
                 [{'controle':'abertura','numero':20},{'controle':'face','opcao':'esquerda'}]]
        for values in cases:
            with self.subTest(values=values):
                d = copy.deepcopy(original)
                d['poses_exemplo'][0]['valores'] = values
                with self.assertRaisesRegex(ValueError, 'fora do dominio|incompleta'):
                    self.submit(d)

    def test_integer_domain_cannot_receive_fractional_pose(self):
        self.procedural()
        self.p['controles'][0]['tipo'] = 'inteiro'
        d = self.delivery()
        d['poses_exemplo'] = [{'id':'fracionada','valores':[{'controle':'abertura','numero':.5},{'controle':'face','opcao':'frente'}]}]
        with self.assertRaisesRegex(ValueError, 'recebeu fracao'):
            self.submit(d)

    def test_animation_requires_consistent_frame_count_and_duration(self):
        self.p['consumidor'] = {'responsavel':'editor','interface':'animacao-html','hook':'renderAt'}
        with self.assertRaisesRegex(ValueError, 'Animacao exige tempo'):
            self.request()
        self.p['tempo'] = {'fps':24,'quadros':48,'duracao':2}
        self.submit(self.delivery())
        self.p['tempo']['duracao'] = 3
        with self.assertRaisesRegex(ValueError, 'quadros/fps'):
            self.request()

    def test_static_svg_rejects_fabricated_animation_metadata(self):
        self.p['tempo'] = {'fps':24,'quadros':48,'duracao':2}
        with self.assertRaisesRegex(ValueError, 'SVG estatico'):
            self.request()

    def test_delivery_requires_expected_outputs_and_hashed_api_entry(self):
        self.p['saidas_esperadas'].append('previa')
        d = self.delivery()
        with self.assertRaisesRegex(ValueError, 'Saida esperada ausente'):
            self.submit(d)
        self.p['saidas_esperadas'] = ['asset']
        d = self.delivery()
        d['api']['entrada'] = 'arquivo-nao-listado.svg'
        with self.assertRaisesRegex(ValueError, 'sem asset com hash'):
            self.submit(d)

    def test_declared_part_geometry_has_coherent_dimensions(self):
        d = self.delivery()
        for bounds, pivot in [([0,0,0,10,20],[0,0]),([0,0,10,20],[0,0,0]),([0,0,-10,20],[0,0])]:
            with self.subTest(bounds=bounds, pivot=pivot):
                d['partes'][0].update(bounds=bounds, pivot=pivot)
                with self.assertRaisesRegex(ValueError, 'Bounds|Dimensao'):
                    self.submit(d)

    def test_approved_state_requires_completed_qc_and_no_pending_items(self):
        d = self.delivery()
        d['estado'] = 'aprovado'
        with self.assertRaisesRegex(ValueError, 'QC independente'):
            self.submit(d)
        d = self.reviewed_record()
        d['pendencias'] = ['Rever a perspectiva.']
        with self.assertRaisesRegex(ValueError, 'pendencias'):
            self.submit(d)

    def test_passed_verification_requires_listed_intact_evidence(self):
        d = self.delivery()
        d['verificacoes'][0]['estado'] = 'passou'
        with self.assertRaisesRegex(ValueError, 'sem arquivo de evidencia'):
            self.submit(d)
        d = self.reviewed_record()
        d['arquivos'] = [x for x in d['arquivos'] if x['funcao'] != 'evidencia']
        with self.assertRaisesRegex(ValueError, 'constar nos arquivos'):
            self.submit(d)
        d = self.reviewed_record()
        (self.root/'evidencia.txt').write_text('Registro alterado.', encoding='utf-8')
        with self.assertRaisesRegex(ValueError, 'Hash divergente'):
            self.submit(d)

    def test_accepts_structurally_complete_review_record_without_claiming_its_truth(self):
        d = self.reviewed_record()
        for v in d['verificacoes']:
            if v['tipo'] in ('movimento','determinismo'):
                v['estado'] = 'nao_aplicavel'
                del v['evidencia']
        self.assertEqual(self.submit(d)['estado'], 'aprovado')

    def test_missing_measurement_cannot_be_disguised_as_inapplicable_identity(self):
        d = self.delivery()
        next(v for v in d['verificacoes'] if v['tipo'] == 'identidade')['estado'] = 'nao_aplicavel'
        with self.assertRaisesRegex(ValueError, 'Dominio obrigatorio'):
            self.submit(d)

    def test_blocked_state_requires_concrete_pending_item(self):
        d = self.delivery()
        d['estado'] = 'bloqueado'
        with self.assertRaisesRegex(ValueError, 'exige pendencia'):
            self.submit(d)


if __name__ == '__main__':
    unittest.main()
