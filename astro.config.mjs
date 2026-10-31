import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bobsom.com',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/404') })],
});
