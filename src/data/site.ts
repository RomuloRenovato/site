import google from './google.json';

const WHATSAPP = '5532991371765';

export const site = {
  nome: 'BobSom Produções',
  nomeCurto: 'BobSom',
  descricao:
    'Produção de eventos corporativos, congressos, palestras e feiras em Juiz de Fora desde 2003: som, luz, painel de LED, transmissão, palco, stands, estrutura, credenciamento, equipe e buffet.',
  desde: 2003,
  cidade: 'Juiz de Fora',
  uf: 'MG',
  bairro: 'Centro',
  telefone: '(32) 99137-1765',
  telefoneE164: `+${WHATSAPP}`,
  instagram: 'https://www.instagram.com/bobsom.jf/',
  instagramNome: '@bobsom.jf',
  // Vazio esconde o link. Preencher com o endereço confirmado da página.
  facebook: '',
  regioes: ['Juiz de Fora', 'Uberaba', 'Lavras', 'Montes Claros', 'Viçosa'],
  avaliarUrl: `https://search.google.com/local/writereview?placeid=${google.placeId}`,
  fichaGoogleUrl: `https://www.google.com/maps/search/?api=1&query=BobSom&query_place_id=${google.placeId}`,
};

export function linkWhatsApp(mensagem: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

export const tiposDeEvento = [
  'Corporativos',
  'Congressos e palestras',
  'Feiras e exposições',
  'Lançamentos e convenções',
  'Evangélicos',
  'Escolares e formaturas',
  'Sociais',
];
