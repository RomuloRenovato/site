import type { ImageMetadata } from 'astro';

export interface Cliente {
  /** Nome do cliente ou do evento. */
  nome: string;
  cidade?: string;
  ano?: number;
  /** O que a BobSom fez, em uma frase. */
  servicos?: string;
  /** Importar de src/assets/. Logo de cliente só com autorização dele. */
  imagem?: ImageMetadata;
  imagemAlt?: string;
}

// Lista informada pela BobSom em 31/10 e 03/11/2026. A seção só aparece quando esta lista tiver itens.
export const clientes: Cliente[] = [
  { nome: 'Sebrae', cidade: 'Minas Gerais', servicos: 'Varejo Mais, Minas Solar, Open Corp, Aqui tem Sebrae e Encontro de Cafeicultores' },
  { nome: 'Sesc', cidade: 'Juiz de Fora' },
  { nome: 'Banco do Brasil', cidade: 'Juiz de Fora' },
  { nome: 'EBC', cidade: 'Rio de Janeiro', servicos: 'Encontro da Rede Nacional de Comunicação Pública' },
  { nome: 'IF Sudeste MG', cidade: 'Juiz de Fora', servicos: 'Formatura: projeção, som, becas e canudos' },
  { nome: 'Rodoviário Camilo dos Santos', cidade: 'Juiz de Fora', servicos: 'Sonorização e DJ na corrida da empresa' },
  { nome: 'Bluefit', cidade: 'Juiz de Fora', servicos: 'Inauguração da academia' },
  { nome: 'Independência Shopping', cidade: 'Juiz de Fora' },
  { nome: 'Trade Hotel', cidade: 'Juiz de Fora' },
  { nome: 'Premier Park Hotel', cidade: 'Juiz de Fora' },
  { nome: 'Serjusmig', cidade: 'Minas Gerais' },
  { nome: 'Catedral Metropolitana de Juiz de Fora', cidade: 'Juiz de Fora' },
];
