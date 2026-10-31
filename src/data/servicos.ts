import { fotos, type Foto } from './fotos';

export type Grupo = 'producao' | 'tecnica' | 'estrutura' | 'operacao';

export const grupos: Record<Grupo, { nome: string; chamada: string; foto: Foto }> = {
  producao: {
    nome: 'Produção',
    chamada: 'Um responsável pelo evento inteiro, do planejamento à desmontagem.',
    foto: fotos.plateiaConferencia,
  },
  tecnica: {
    nome: 'Som, luz e imagem',
    chamada: 'A parte técnica que o público sente, mesmo sem perceber.',
    foto: fotos.painelLed,
  },
  estrutura: {
    nome: 'Estrutura e montagem',
    chamada: 'Palco, stands e estrutura montados com segurança e no prazo.',
    foto: fotos.iluminacaoVaras,
  },
  operacao: {
    nome: 'Pessoas e recepção',
    chamada: 'Quem recebe, organiza e atende os participantes.',
    foto: fotos.credenciamentoMesas,
  },
};

export interface Servico {
  slug: string;
  nome: string;
  grupo: Grupo;
  /** Título da página, pensado para a busca local. */
  titulo: string;
  resumo: string;
  texto: string;
  itens: string[];
  foto: Foto;
}

export const servicos: Servico[] = [
  {
    slug: 'producao-de-eventos',
    nome: 'Produção de eventos',
    grupo: 'producao',
    titulo: 'Produção de eventos em Juiz de Fora',
    resumo: 'Planejamento, fornecedores e execução em um só lugar.',
    texto:
      'Você conta o que precisa e a BobSom cuida do conjunto: define a estrutura, organiza a montagem e acompanha o evento até o fim. Atuamos em eventos corporativos, congressos, feiras, palestras e eventos evangélicos, com a mesma equipe coordenando as etapas.',
    itens: [
      'Levantamento das necessidades do evento',
      'Proposta reunindo todos os serviços',
      'Coordenação da montagem e da desmontagem',
      'Acompanhamento durante o evento',
    ],
    foto: fotos.plateiaPalestrante,
  },
  {
    slug: 'sonorizacao',
    nome: 'Sonorização',
    grupo: 'tecnica',
    titulo: 'Sonorização para eventos em Juiz de Fora',
    resumo: 'Som claro para palestra, congresso, culto ou show.',
    texto:
      'Da fala de um palestrante ao show de uma banda, o som é dimensionado para o espaço e para o público. A equipe monta, testa e opera o equipamento durante o evento.',
    itens: [
      'Caixas de som e microfones',
      'Mesa de som e operador',
      'Passagem de som antes do evento',
      'Atendimento a ambientes internos e externos',
    ],
    foto: fotos.auditorioPalco,
  },
  {
    slug: 'iluminacao',
    nome: 'Iluminação',
    grupo: 'tecnica',
    titulo: 'Iluminação para eventos em Juiz de Fora',
    resumo: 'Luz de palco, cênica e de ambiente.',
    texto:
      'A iluminação muda a cara de um auditório ou de um salão. Trabalhamos com luz cênica para palco e com iluminação de ambiente para valorizar paredes, colunas, stands e decoração.',
    itens: [
      'Iluminação de palco e cênica',
      'Luz de ambiente em colunas e paredes',
      'Iluminação de áreas externas',
      'Cores combinadas com a identidade do evento',
    ],
    foto: fotos.iluminacaoVaras,
  },
  {
    slug: 'projecao-e-painel-de-led',
    nome: 'Projeção e painel de LED',
    grupo: 'tecnica',
    titulo: 'Painel de LED e projeção para eventos em Juiz de Fora',
    resumo: 'Telão, projetor e painel de LED para qualquer plateia.',
    texto:
      'Apresentações, vídeos e marcas precisam ser vistos do fundo da sala. Montamos projetores, telas e painéis de LED adequados ao tamanho do espaço e à luz do ambiente.',
    itens: [
      'Painel de LED',
      'Projetor e tela',
      'Monitores de apoio para palco',
      'Operação de conteúdo durante o evento',
    ],
    foto: fotos.painelLed,
  },
  {
    slug: 'transmissao',
    nome: 'Transmissão',
    grupo: 'tecnica',
    titulo: 'Transmissão de eventos ao vivo em Juiz de Fora',
    resumo: 'Seu evento também para quem não está no local.',
    texto:
      'Para congressos, cultos, palestras e reuniões com público remoto, cuidamos da captação de imagem e som e da transmissão durante o evento.',
    itens: [
      'Captação de imagem e áudio',
      'Operação da transmissão ao vivo',
      'Integração com o som e o telão do evento',
    ],
    foto: fotos.transmissaoCamera,
  },
  {
    slug: 'bandas-shows-e-dj',
    nome: 'Bandas, shows e DJ',
    grupo: 'tecnica',
    titulo: 'Bandas, shows e DJ para eventos em Juiz de Fora',
    resumo: 'Música e toda a técnica que ela precisa.',
    texto:
      'Atendemos convenções, confraternizações, formaturas e shows com DJ, bandas e a estrutura técnica necessária para a apresentação, do palco à operação de som e luz.',
    itens: [
      'DJ para eventos',
      'Contratação de bandas e atrações',
      'Som e luz para shows',
      'Apoio técnico aos artistas',
    ],
    foto: fotos.iluminacaoPalco,
  },
  {
    slug: 'palestras-e-audiovisual',
    nome: 'Palestras e audiovisual',
    grupo: 'tecnica',
    titulo: 'Audiovisual para palestras e congressos em Juiz de Fora',
    resumo: 'Microfone, telão e operação para o palestrante só falar.',
    texto:
      'Palestras, congressos e reuniões corporativas pedem som limpo e imagem sem falhas. A equipe prepara o auditório e acompanha a programação para o palestrante se preocupar só com o conteúdo.',
    itens: [
      'Microfones e som de auditório',
      'Telão, projetor ou painel de LED',
      'Mesa de operação durante a programação',
      'Montagem de palco e mesa de convidados',
    ],
    foto: fotos.plateiaTelao,
  },
  {
    slug: 'montagem-de-palco',
    nome: 'Montagem de palco',
    grupo: 'estrutura',
    titulo: 'Montagem de palco para eventos em Juiz de Fora',
    resumo: 'Palco no tamanho certo, com acabamento e segurança.',
    texto:
      'Montamos o palco de acordo com o espaço e a programação, para apresentações, palestras, cultos e shows, com a integração de som, luz e imagem.',
    itens: [
      'Palco dimensionado para o espaço',
      'Acesso por escada e acabamento',
      'Integração com som, luz e LED',
      'Montagem e desmontagem',
    ],
    foto: fotos.plateiaPalestrante,
  },
  {
    slug: 'montagem-de-stands',
    nome: 'Montagem de stands',
    grupo: 'estrutura',
    titulo: 'Montagem de stands em octanorme em Juiz de Fora',
    resumo: 'Estandes em octanorme para feiras e congressos.',
    texto:
      'Temos anos de experiência em montagem de estruturas em octanorme para feiras, congressos e palestras, com a equipe cuidando da montagem segura e dentro do cronograma do evento.',
    itens: [
      'Estruturas em octanorme',
      'Estandes para feiras e congressos',
      'Montagem e desmontagem',
      'Iluminação e audiovisual integrados',
    ],
    foto: fotos.feiraPavilhao,
  },
  {
    slug: 'locacao-de-estrutura-e-tendas',
    nome: 'Locação de estrutura e tendas',
    grupo: 'estrutura',
    titulo: 'Locação de tendas e estrutura para eventos em Juiz de Fora',
    resumo: 'Cobertura e estrutura para eventos em qualquer lugar.',
    texto:
      'Para eventos ao ar livre ou em espaços que precisam de apoio, locamos tendas e estruturas, com montagem pela nossa equipe.',
    itens: [
      'Tendas para áreas externas',
      'Estruturas para eventos',
      'Entrega, montagem e retirada',
      'Iluminação integrada à estrutura',
    ],
    foto: fotos.tenda,
  },
  {
    slug: 'mobiliario',
    nome: 'Mobiliário',
    grupo: 'estrutura',
    titulo: 'Locação de mobiliário para eventos em Juiz de Fora',
    resumo: 'Cadeiras, mesas e o que mais o evento pedir.',
    texto:
      'Cadeiras, mesas e outros móveis para acomodar o público de acordo com o formato do evento, entregues e organizados junto com o restante da montagem.',
    itens: [
      'Cadeiras e mesas',
      'Organização do layout do espaço',
      'Entrega e retirada',
    ],
    foto: fotos.palestra,
  },
  {
    slug: 'credenciamento',
    nome: 'Credenciamento',
    grupo: 'operacao',
    titulo: 'Credenciamento para eventos em Juiz de Fora',
    resumo: 'Entrada organizada, sem fila desnecessária.',
    texto:
      'A recepção é a primeira impressão do participante. Organizamos o credenciamento de congressos, feiras e eventos corporativos, com equipe no local para orientar o público.',
    itens: [
      'Recepção e identificação dos participantes',
      'Equipe de atendimento no local',
      'Organização do fluxo de entrada',
    ],
    foto: fotos.credenciamentoMesas,
  },
  {
    slug: 'recursos-humanos',
    nome: 'Recursos humanos para eventos',
    grupo: 'operacao',
    titulo: 'Equipe e recursos humanos para eventos em Juiz de Fora',
    resumo: 'Profissionais para receber, orientar e apoiar.',
    texto:
      'Fornecemos pessoas para as funções de apoio que o evento precisar, com a coordenação no mesmo fluxo da produção.',
    itens: [
      'Recepção e orientação de público',
      'Apoio operacional',
      'Coordenação junto à produção',
    ],
    foto: fotos.plateiaConferencia,
  },
  {
    slug: 'buffet',
    nome: 'Buffet',
    grupo: 'operacao',
    titulo: 'Buffet para eventos em Juiz de Fora',
    resumo: 'Coffee break e serviço junto com o resto do evento.',
    texto:
      'Para simplificar a contratação, o buffet pode entrar na mesma proposta do som, da luz e da estrutura, ajustado ao tipo de evento e ao número de participantes.',
    itens: [
      'Coffee break, coquetel e refeições',
      'Mesa montada e decorada',
      'Tudo na mesma proposta',
    ],
    foto: fotos.buffetMesa,
  },
];

export const servicosPorGrupo = (Object.keys(grupos) as Grupo[]).map((grupo) => ({
  id: grupo,
  ...grupos[grupo],
  servicos: servicos.filter((s) => s.grupo === grupo),
}));
