import { fotos, type Foto } from './fotos';

export interface Evento {
  nome: string;
  cidade: string;
  /** O que a BobSom fez, como informado pela empresa. */
  fez?: string;
  foto: Foto;
  /** Slugs de src/data/servicos.ts ligados a este evento (aparecem na página do serviço). */
  servicos: string[];
}

// Lista e descrições informadas pela BobSom em 03/11/2026. A ordem é a da galeria.
export const eventos: Evento[] = [
  {
    nome: 'Escola do Futuro',
    cidade: 'Teófilo Otoni',
    fez: 'Iluminação e projeção',
    foto: fotos.escolaFuturoPalco,
    servicos: ['iluminacao', 'projecao-e-painel-de-led'],
  },
  {
    nome: "E'Cidades",
    cidade: 'Juiz de Fora',
    fez: 'Produção e infraestrutura completas: sonorização, projeção, credenciamento e identidade visual',
    foto: fotos.ecidades,
    servicos: ['producao-de-eventos', 'sonorizacao', 'projecao-e-painel-de-led', 'credenciamento', 'identidade-visual'],
  },
  {
    nome: 'Núcleo do Conhecimento',
    cidade: 'Juiz de Fora',
    fez: 'Produção completa: identidade visual, sonorização, projeção e iluminação',
    foto: fotos.nucleoConhecimento,
    servicos: ['producao-de-eventos', 'identidade-visual', 'sonorizacao', 'projecao-e-painel-de-led', 'iluminacao', 'palestras-e-audiovisual'],
  },
  {
    nome: 'Aqui tem Sebrae',
    cidade: 'Ipatinga',
    fez: 'Produção completa: sonorização, palco, projeção, iluminação e identidade visual',
    foto: fotos.aquiTemSebrae,
    servicos: ['producao-de-eventos', 'sonorizacao', 'montagem-de-palco', 'projecao-e-painel-de-led', 'iluminacao', 'identidade-visual'],
  },
  {
    nome: 'Palestra Rafael Cortez',
    cidade: 'Teófilo Otoni',
    fez: 'Transmissão ao vivo pelo YouTube',
    foto: fotos.rafaelCortez,
    servicos: ['transmissao', 'palestras-e-audiovisual'],
  },
  {
    nome: 'Escola do Futuro',
    cidade: 'Teófilo Otoni',
    fez: 'Iluminação e projeção para o auditório lotado',
    foto: fotos.escolaFuturoPlateia,
    servicos: ['palestras-e-audiovisual'],
  },
  {
    nome: 'Varejo Mais Experience',
    cidade: 'Ponte Nova',
    fez: 'Credenciamento com totem, sonorização e projeção',
    foto: fotos.varejoMaisCredenciamento,
    servicos: ['credenciamento', 'sonorizacao', 'projecao-e-painel-de-led'],
  },
  {
    nome: 'Encontro Rede Nacional de Comunicação Pública (EBC)',
    cidade: 'Rio de Janeiro',
    foto: fotos.rncpEbc,
    servicos: [],
  },
  {
    nome: 'Minas Solar',
    cidade: 'Juiz de Fora',
    fez: 'Sonorização e projeção',
    foto: fotos.minasSolar,
    servicos: ['sonorizacao', 'projecao-e-painel-de-led', 'mobiliario'],
  },
  {
    nome: 'Sebrae Open Corp',
    cidade: 'Tiradentes',
    fez: 'Identidade visual, sonorização e projeção',
    foto: fotos.openCorp,
    servicos: ['identidade-visual', 'sonorizacao', 'projecao-e-painel-de-led', 'recursos-humanos'],
  },
  {
    nome: 'Encontro de Cafeicultores das Matas de Minas',
    cidade: 'Manhuaçu',
    fez: 'Identidade visual, sonorização, projeção, credenciamento e locação de stand',
    foto: fotos.cafeicultores,
    servicos: ['identidade-visual', 'sonorizacao', 'projecao-e-painel-de-led', 'credenciamento', 'montagem-de-stands'],
  },
  {
    nome: 'Congresso de Vendas Varejo Mais',
    cidade: 'Juiz de Fora',
    fez: 'Sonorização e identidade visual',
    foto: fotos.congressoVendas,
    servicos: ['sonorizacao', 'identidade-visual'],
  },
  {
    nome: 'Divinópolis Summit (Inova Invest)',
    cidade: 'Divinópolis',
    fez: 'Credenciamento e identidade visual',
    foto: fotos.summitInovaInvest,
    servicos: ['credenciamento', 'identidade-visual', 'montagem-de-stands'],
  },
  {
    nome: 'Encontro de Mulheres Empreendedoras',
    cidade: 'Arapuá',
    fez: 'Ambientação do local, sonorização e projeção',
    foto: fotos.mulheresArapua,
    servicos: ['sonorizacao', 'projecao-e-painel-de-led', 'iluminacao'],
  },
  {
    nome: 'Inauguração da academia Bluefit',
    cidade: 'Juiz de Fora',
    fez: 'Projeção, sonorização e DJ',
    foto: fotos.bluefitLed,
    servicos: ['projecao-e-painel-de-led', 'sonorizacao', 'bandas-shows-e-dj'],
  },
  {
    nome: 'Corrida Camilo dos Santos',
    cidade: 'Juiz de Fora',
    fez: 'Sonorização e DJ',
    foto: fotos.corridaCamilo,
    servicos: ['sonorizacao', 'bandas-shows-e-dj'],
  },
  {
    nome: 'Formatura do IF Sudeste MG',
    cidade: 'Juiz de Fora',
    fez: 'Projeção, sonorização e fornecimento de becas e canudos',
    foto: fotos.formaturaIf,
    servicos: ['projecao-e-painel-de-led', 'sonorizacao'],
  },
];

/** Eventos ligados a um serviço, na ordem da galeria. */
export function eventosDoServico(slug: string) {
  return eventos.filter((e) => e.servicos.includes(slug));
}
