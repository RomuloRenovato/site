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
// Fotos de eventos enviadas pela BobSom em 03/11/2026
import ecidades from '../assets/fotos/ecidades-palco.webp';
import formaturaIf from '../assets/fotos/formatura-if-sudeste.webp';
import summitInovaInvest from '../assets/fotos/summit-inova-invest-credenciamento.webp';
import escolaFuturoPalco from '../assets/fotos/escola-do-futuro-palco.webp';
import rafaelCortez from '../assets/fotos/rafael-cortez-palestra.webp';
import minasSolar from '../assets/fotos/minas-solar-palco.webp';
import varejoMaisCredenciamento from '../assets/fotos/varejo-mais-totem-credenciamento.webp';
import corridaCamilo from '../assets/fotos/corrida-camilo-dos-santos.webp';
import cafeicultores from '../assets/fotos/encontro-cafeicultores.webp';
import mulheresArapua from '../assets/fotos/mulheres-empreendedoras-arapua.webp';
import rncpEbc from '../assets/fotos/rncp-ebc-palco-led.webp';
import congressoVendas from '../assets/fotos/congresso-vendas-varejo-mais.webp';
import aquiTemSebrae from '../assets/fotos/aqui-tem-sebrae-ipatinga.webp';
import escolaFuturoPlateia from '../assets/fotos/escola-do-futuro-plateia.webp';
import openCorp from '../assets/fotos/open-corp-tiradentes.webp';
import bluefitLed from '../assets/fotos/bluefit-inauguracao-led.webp';
import nucleoConhecimento from '../assets/fotos/nucleo-do-conhecimento.webp';
// Equipe
import equipeVarejoMais from '../assets/fotos/equipe-varejo-mais.webp';
import equipeDjBluefit from '../assets/fotos/equipe-dj-bluefit.webp';
import equipeEscolaFuturo from '../assets/fotos/equipe-escola-do-futuro.webp';

export type Categoria = 'corporativo' | 'religioso' | 'social';

export interface Foto {
  src: ImageMetadata;
  alt: string;
  categoria: Categoria;
}

export const categorias: Record<Categoria, string> = {
  corporativo: 'Corporativos, congressos e palestras',
  religioso: 'Evangélicos',
  social: 'Recepções',
};

export const fotos = {
  // Ficha do Google
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
  // Eventos
  ecidades: {
    src: ecidades,
    alt: "Palco do E'Cidades em Juiz de Fora, com painel central, telões laterais, poltronas e púlpito",
    categoria: 'corporativo',
  },
  formaturaIf: {
    src: formaturaIf,
    alt: 'Canudos de formatura empilhados diante do telão com a marca do IF Sudeste MG, campus Juiz de Fora',
    categoria: 'corporativo',
  },
  summitInovaInvest: {
    src: summitInovaInvest,
    alt: 'Balcões de credenciamento com a identidade do Divinópolis Summit e recepcionistas atendendo',
    categoria: 'corporativo',
  },
  escolaFuturoPalco: {
    src: escolaFuturoPalco,
    alt: 'Palco do Escola do Futuro com painel de LED, moving lights e iluminação azul na frente do palco',
    categoria: 'corporativo',
  },
  rafaelCortez: {
    src: rafaelCortez,
    alt: 'Rafael Cortez no palco diante de um painel de LED com seu nome, com moving lights na frente',
    categoria: 'corporativo',
  },
  minasSolar: {
    src: minasSolar,
    alt: 'Palco do Minas Solar com painel de fundo, poltronas brancas e telões com a marca da BobSom',
    categoria: 'corporativo',
  },
  varejoMaisCredenciamento: {
    src: varejoMaisCredenciamento,
    alt: 'Totens de credenciamento com tela e crachás na entrada do Varejo Mais Experience, sobre tapete vermelho',
    categoria: 'corporativo',
  },
  corridaCamilo: {
    src: corridaCamilo,
    alt: 'Participantes da corrida do Rodoviário Camilo dos Santos reunidos em frente aos caminhões da empresa',
    categoria: 'corporativo',
  },
  cafeicultores: {
    src: cafeicultores,
    alt: 'Painel do 9º Encontro de Cafeicultores das Matas de Minas em frente a um castelo em Manhuaçu',
    categoria: 'corporativo',
  },
  mulheresArapua: {
    src: mulheresArapua,
    alt: 'Mesa de operação da BobSom com notebooks e monitor diante do painel do Encontro de Mulheres Empreendedoras de Arapuá',
    categoria: 'corporativo',
  },
  rncpEbc: {
    src: rncpEbc,
    alt: 'Palco com painel de LED do Encontro da Rede Nacional de Comunicação Pública da EBC e poltronas brancas',
    categoria: 'corporativo',
  },
  congressoVendas: {
    src: congressoVendas,
    alt: 'Painel do 2º Congresso de Vendas de Juiz de Fora e Região, Varejo Mais, iluminado por refletores no chão',
    categoria: 'corporativo',
  },
  aquiTemSebrae: {
    src: aquiTemSebrae,
    alt: 'Palco com painel azul da Celebração Regional do Sebrae em Ipatinga, iluminado em azul',
    categoria: 'corporativo',
  },
  escolaFuturoPlateia: {
    src: escolaFuturoPlateia,
    alt: 'Auditório lotado no Escola do Futuro em Teófilo Otoni, com luzes coloridas no teto',
    categoria: 'corporativo',
  },
  openCorp: {
    src: openCorp,
    alt: 'Salão do Sebrae Open Corp em Tiradentes, com palco ao fundo, telões laterais e a equipe de operação em primeiro plano',
    categoria: 'corporativo',
  },
  bluefitLed: {
    src: bluefitLed,
    alt: 'Painel de LED com a marca da Bluefit na inauguração da academia, com moving lights no teto',
    categoria: 'corporativo',
  },
  nucleoConhecimento: {
    src: nucleoConhecimento,
    alt: 'Palestrante no palco do Núcleo do Conhecimento, com painel de LED e coluna de som ao lado',
    categoria: 'corporativo',
  },
  // Equipe
  equipeVarejoMais: {
    src: equipeVarejoMais,
    alt: 'Integrante da BobSom apontando para o painel do Varejo Mais Experience',
    categoria: 'corporativo',
  },
  equipeDjBluefit: {
    src: equipeDjBluefit,
    alt: 'DJ da BobSom na controladora, com monitor exibindo a marca da Bluefit',
    categoria: 'corporativo',
  },
  equipeEscolaFuturo: {
    src: equipeEscolaFuturo,
    alt: 'Integrante da BobSom entre dois palestrantes do Escola do Futuro',
    categoria: 'corporativo',
  },
} satisfies Record<string, Foto>;
