from pathlib import Path
import copy, hashlib, importlib.util, json, tempfile, unittest

ROOT=Path(__file__).resolve().parents[2]
spec=importlib.util.spec_from_file_location('cena',ROOT/'ferramentas/ilustracao/validar-cena.py')
mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)

class AnimatedContractTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory();self.addCleanup(self.tmp.cleanup);self.root=Path(self.tmp.name)
        (self.root/'identidade.md').write_text('Canal de teste: regras externas, sem identidade Alpha.',encoding='utf-8')
        (self.root/'entrada.txt').write_text('Abrir uma caixa para revelar seu interior.',encoding='utf-8')
        roles=('fundo','superficie','papel','tinta','tinta_papel','contorno','protagonista','contraparte','risco')
        css=':root{'+''.join('--teste-'+str(i)+':#123456;' for i in range(len(roles)))+'--tipo:Example;--peso:600;--tamanho:30px;}'
        (self.root/'tokens.css').write_text(css,encoding='utf-8')
        typo={'familia_token':'--tipo','peso_token':'--peso','tamanho_token':'--tamanho','piso':20,'alvo':30,'teto':40}
        self.g={'versao_contrato':1,'id':'outro-canal','revisao':'r1','idioma_tela':'pt-BR','palco':[1280,720],
         'documentos':[self.ref('identidade.md')],'tokens_css':self.ref('tokens.css'),'papeis_cor':{k:'--teste-'+str(i) for i,k in enumerate(roles)},
         'tipografia':{k:copy.deepcopy(typo) for k in ('heroi','rotulo','legenda','credito')},
         'areas':{'conteudo':[40,32,1200,580],'credito':[40,650,700,50],'reservadas':[[1150,630,130,90]]},
         'limites':{'elementos':4,'blocos_leitura':2,'herois':1},'regras':['Direcao deste canal.'],'executor_padrao':'html-svg-js'}
        self.write('roupa.json',self.g)
        self.p={'versao_contrato':1,'projeto':'exemplo','cena':'c01','revisao':'v1','roupa':self.ref('roupa.json'),
         'entradas':[self.ref('entrada.txt')],'fala':'A caixa se abre.','direcao':'Revelar o interior.','relacao_visual':'Acesso ao interior.','regime_midia':'desenho',
         'executor':'html-svg-js','tempo':{'inicio_global':0,'fps':24,'quadros':48},'palco':[1280,720],'area_destino':[80,80,600,400],
         'eventos':[{'id':'abrir','em':.5,'acao':'Abrir pela dobradica.'}],'textos':[],
         'limites_editoriais':['Nao inventar rotulos.'],'consumidor':{'responsavel':'editor','hook_tempo':'renderAt','composicao':'editor'}}
    def write(self,name,data):
        (self.root/name).write_text(json.dumps(data),encoding='utf-8');return name
    def ref(self,name):return {'arquivo':name,'sha256':hashlib.sha256((self.root/name).read_bytes()).hexdigest()}
    def validate(self):return mod.validate('pedido',self.write('pedido.json',self.p),self.root)
    def test_accepts_other_channel_resolution_language_tokens_and_clock(self):
        self.assertEqual(self.validate()['palco'],[1280,720])
    def test_immutable_garment_reference(self):
        self.g['id']='revisada';self.write('roupa.json',self.g)
        with self.assertRaisesRegex(ValueError,'Hash divergente'):self.validate()
    def test_rejects_missing_token(self):
        self.g['papeis_cor']['fundo']='--inexistente';self.write('roupa.json',self.g);self.p['roupa']=self.ref('roupa.json')
        with self.assertRaisesRegex(ValueError,'Token ausente'):self.validate()
    def test_rejects_destination_outside_safe_area(self):
        self.p['area_destino']=[0,0,600,400]
        with self.assertRaisesRegex(ValueError,'area segura'):self.validate()
    def test_rejects_nonfinite_geometry(self):
        self.p['area_destino'][0]=float('nan')
        with self.assertRaisesRegex(ValueError,'tipo esperado'):self.validate()
    def test_rejects_event_after_scene(self):
        self.p['eventos'][0]['em']=2
        with self.assertRaisesRegex(ValueError,'fora da duracao'):self.validate()
    def test_rejects_extra_authority_field(self):
        self.p['publicar_automaticamente']=True
        with self.assertRaisesRegex(ValueError,'campo desconhecido'):self.validate()
    def test_rejects_path_escape(self):
        self.p['entradas'][0]['arquivo']='../fora.txt'
        with self.assertRaisesRegex(ValueError,'fora da raiz'):self.validate()
    def test_no_artistic_approval_without_independent_qc(self):
        self.validate();(self.root/'cena.html').write_text('<html></html>',encoding='utf-8')
        v=[{'tipo':x,'estado':'passou','evidencia':'Teste local.'} for x in ('estrutura','determinismo','movimento','areas_seguras','identidade','texto_credito','audio','qc_independente')]
        v[-1]['estado']='nao_medido'
        d={'versao_contrato':1,'projeto':'exemplo','cena':'c01','versao':'v1','estado':'aprovado','pedido':self.ref('pedido.json'),'roupa':self.ref('roupa.json'),
         'arquivos':[{**self.ref('cena.html'),'funcao':'cena'}],'animacao':{'executor':'html-svg-js','entrada':'cena.html','hook_tempo':'renderAt','fps':24,'quadros':48,'duracao':2},
         'partes':[{'id':'porta','funcao':'abrir','movimento':'giro'}],'verificacoes':v,'pendencias':[]}
        with self.assertRaisesRegex(ValueError,'QC independente'):mod.validate('entrega',self.write('entrega.json',d),self.root)

if __name__=='__main__':unittest.main()
