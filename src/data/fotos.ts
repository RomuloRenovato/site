import type { ImageMetadata } from 'astro';
// Fotos da BobSom (ficha do Google)
import painelLed from '../assets/fotos/painel-led-auditorio.jpg';
import palestra from '../assets/fotos/palestra-auditorio.jpg';
import salaoFesta from '../assets/fotos/salao-festa-mobiliario.jpg';
import auditorioPalco from '../assets/fotos/auditorio-palco.jpg';
import buffetMesa from '../assets/fotos/buffet-mesa.jpg';
import tenda from '../assets/fotos/tenda-iluminada.jpg';
import areaExterna from '../assets/fotos/area-externa-iluminada.jpg';
import salaoAzul from '../assets/fotos/salao-iluminacao-azul.jpg';
// Fotos ilustrativas (Unsplash, licença livre). Não são eventos da BobSom: trocar pelas originais quando houver.
import plateiaPalestrante from '../assets/fotos/plateia-palestrante.jpg';
import plateiaConferencia from '../assets/fotos/plateia-conferencia.jpg';
import plateiaTelao from '../assets/fotos/plateia-telao.jpg';
import transmissaoCamera from '../assets/fotos/transmissao-camera.jpg';
import iluminacaoVaras from '../assets/fotos/iluminacao-varas.jpg';
import iluminacaoPalco from '../assets/fotos/iluminacao-palco.jpg';
import feiraPavilhao from '../assets/fotos/feira-pavilhao.jpg';
import credenciamentoMesas from '../assets/fotos/credenciamento-mesas.jpg';

export type Categoria = 'corporativo' | 'religioso' | 'social';

export interface Foto {
  src: ImageMetadata;
  alt: string;
  categoria: Categoria;
  /** Só as fotos da BobSom entram na galeria "nossos eventos". */
  ilustrativa?: boolean;
}

export const categorias: Record<Categoria, string> = {
  corporativo: 'Corporativos, congressos e palestras',
  religioso: 'Evangélicos',
  social: 'Recepções',
};

export const fotos = {
  painelLed: {
    src: painelLed,
    alt: 'Palco de auditório com painel de LED central e banners laterais de um encontro empresarial',
    categoria: 'corporativo',
  },
  palestra: {
    src: palestra,
    alt: 'Auditório cheio durante palestra, com telão, mesa de convidados e monitores da operação em primeiro plano',
    categoria: 'corporativo',
  },
  auditorioPalco: {
    src: auditorioPalco,
    alt: 'Salão preparado para conferência, com palco, instrumentos, caixas de som e telas laterais',
    categoria: 'religioso',
  },
  salaoFesta: {
    src: salaoFesta,
    alt: 'Salão com mesas e cadeiras montadas e colunas iluminadas',
    categoria: 'social',
  },
  buffetMesa: {
    src: buffetMesa,
    alt: 'Mesa de buffet com frios, frutas secas e arranjo de flores',
    categoria: 'social',
  },
  tenda: {
    src: tenda,
    alt: 'Tenda montada à noite com mesas redondas e iluminação azul e verde',
    categoria: 'social',
  },
  areaExterna: {
    src: areaExterna,
    alt: 'Área externa com piscina e jardim iluminados em azul durante a noite',
    categoria: 'social',
  },
  salaoAzul: {
    src: salaoAzul,
    alt: 'Salão de recepção com lustres, mesas decoradas e paredes iluminadas em azul',
    categoria: 'social',
  },
  plateiaPalestrante: {
    src: plateiaPalestrante,
    alt: 'Palestrante no centro de um grande auditório lotado, com telões nas laterais',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  plateiaConferencia: {
    src: plateiaConferencia,
    alt: 'Plateia sentada acompanhando uma conferência',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  plateiaTelao: {
    src: plateiaTelao,
    alt: 'Público assistindo a um palestrante diante de um telão de LED',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  transmissaoCamera: {
    src: transmissaoCamera,
    alt: 'Operador de câmera filmando um palco iluminado',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  iluminacaoVaras: {
    src: iluminacaoVaras,
    alt: 'Refletores de palco pendurados em varas de iluminação',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  iluminacaoPalco: {
    src: iluminacaoPalco,
    alt: 'Refletores e luzes de palco em azul e laranja',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  feiraPavilhao: {
    src: feiraPavilhao,
    alt: 'Pavilhão de feira com estandes e visitantes',
    categoria: 'corporativo',
    ilustrativa: true,
  },
  credenciamentoMesas: {
    src: credenciamentoMesas,
    alt: 'Mesas de credenciamento na entrada de um evento',
    categoria: 'corporativo',
    ilustrativa: true,
  },
} satisfies Record<string, Foto>;

/** Galeria de eventos: só fotos reais da BobSom, eventos corporativos primeiro. */
export const galeria: Foto[] = [
  fotos.painelLed,
  fotos.palestra,
  fotos.auditorioPalco,
  fotos.tenda,
  fotos.salaoAzul,
  fotos.salaoFesta,
  fotos.buffetMesa,
  fotos.areaExterna,
];
