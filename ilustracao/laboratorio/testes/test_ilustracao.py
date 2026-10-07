from pathlib import Path
import copy, json, sys, tempfile, unittest
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / 'ferramentas/ilustracao'))
from validar import validate, sha, parse_svg, canonical_svg

class DeliveryTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g id="teste__braco"><rect x="1" y="1" width="20" height="30" fill="var(--papel)"/></g></svg>'
        self.part = {'id': 'teste__braco', 'pivot': [1,1], 'bounds': [1,1,20,30], 'animavel': True, 'transformacoes': ['rotate']}
        self.piece = {'id': 'teste', 'arquivo': 'teste.svg', 'sha256': '', 'viewBox': [0,0,100,100], 'partes': [self.part], 'areas_texto': []}
        self.m = {'versao_contrato':1,'projeto':'teste','cena':'s1','versao':'v001','estado':'preparado','midia':'construída','pedido_sha256':'a'*64,'tokens_permitidos':['--papel'],'pecas':[self.piece],'verificacoes':[]}

    def write(self, text=None):
        file = self.root / 'teste.svg'
        file.write_text(text or self.svg, encoding='utf-8')
        self.piece['sha256'] = sha(file)
        manifest = self.root / 'manifesto.json'
        manifest.write_text(json.dumps(self.m), encoding='utf-8')
        return manifest

    def reject(self, text=None, contains=None):
        with self.assertRaisesRegex((ValueError, ET.ParseError), contains or '.'):
            validate(self.write(text))

    def test_valid_articulated_delivery(self):
        self.assertEqual(validate(self.write())['pecas'], 1)

    def test_tampering_after_manifest(self):
        manifest = self.write()
        (self.root / 'teste.svg').write_text(self.svg.replace('width="20"','width="40"'))
        with self.assertRaisesRegex(ValueError, 'Hash divergente'):
            validate(manifest)

    def test_rejects_external_file(self):
        self.piece['arquivo'] = '../fora.svg'
        self.reject(contains='Caminho')

    def test_rejects_active_or_unsupported_content(self):
        for node in ['<script>alert(1)</script>', '<animate attributeName="x"/>', '<foreignObject/>', '<text>NEW CLAIM</text>', '<image href="https://invalid.example/image.png"/>', '<style>rect{fill:red}</style>']:
            with self.subTest(node=node):
                self.reject(self.svg.replace('</svg>',node+'</svg>'), 'Tag fora do perfil')

    def test_rejects_event_handlers(self):
        self.reject(self.svg.replace('width="20"','width="20" onclick="run()"'), 'Atributo')

    def test_rejects_unlisted_color_token(self):
        self.reject(self.svg.replace('--papel','--inventado'), 'Token')

    def test_rejects_literal_color(self):
        self.reject(self.svg.replace('var(--papel)','#fff'), 'Cor literal')

    def test_rejects_external_reference(self):
        self.reject(self.svg.replace('</svg>','<use href="https://invalid.example/a.svg#x"/></svg>'), 'externa')

    def test_rejects_dangling_reference(self):
        self.reject(self.svg.replace('</svg>','<use href="#teste__ausente"/></svg>'), 'não resolvida')

    def test_rejects_duplicate_id(self):
        self.reject(self.svg.replace('</svg>','<g id="teste__braco"/></svg>'), 'duplicado')

    def test_rejects_unknown_part(self):
        self.part['id'] = 'teste__ausente'
        self.reject(contains='grupo existente')

    def test_rejects_nonfinite_pivot(self):
        self.part['pivot'][0] = float('nan')
        self.reject(contains='finito')

    def test_rejects_invalid_viewbox(self):
        self.reject(self.svg.replace('0 0 100 100','0 0 0 100'), 'viewBox')

    def test_geometry_comparison_allows_movement(self):
        a = parse_svg(self.svg)
        b = parse_svg(self.svg.replace('id="teste__braco"','id="teste__braco" transform="rotate(30 1 1)"'))
        self.assertEqual(canonical_svg(a,self.piece),canonical_svg(b,self.piece))

    def test_geometry_comparison_detects_redraw(self):
        a = parse_svg(self.svg)
        b = parse_svg(self.svg.replace('width="20"','width="40"'))
        self.assertNotEqual(canonical_svg(a,self.piece),canonical_svg(b,self.piece))

    def test_geometry_comparison_does_not_ignore_fixed_part_transform(self):
        self.part['animavel'] = False
        self.part['transformacoes'] = []
        a = parse_svg(self.svg)
        b = parse_svg(self.svg.replace('id="teste__braco"','id="teste__braco" transform="translate(5 0)"'))
        self.assertNotEqual(canonical_svg(a,self.piece),canonical_svg(b,self.piece))

    def test_malformed_entity_is_rejected(self):
        self.reject('<!DOCTYPE svg [<!ENTITY entity "hello">]>'+self.svg, 'DTD')

if __name__ == '__main__':
    unittest.main()
