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

// Lista informada pela BobSom em 31/10/2026. A seção só aparece quando esta lista tiver itens.
export const clientes: Cliente[] = [
  { nome: 'Sesc', cidade: 'Juiz de Fora' },
  { nome: 'Sebrae', cidade: 'Juiz de Fora' },
  { nome: 'Banco do Brasil', cidade: 'Juiz de Fora' },
  { nome: 'Independência Shopping', cidade: 'Juiz de Fora' },
  { nome: 'Trade Hotel', cidade: 'Juiz de Fora' },
  { nome: 'Premier Park Hotel', cidade: 'Juiz de Fora' },
  { nome: 'Serjusmig', cidade: 'Minas Gerais' },
  { nome: 'Rodoviário Camilo dos Santos', cidade: 'Juiz de Fora' },
  { nome: 'Catedral Metropolitana de Juiz de Fora', cidade: 'Juiz de Fora' },
];
