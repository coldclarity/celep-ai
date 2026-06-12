import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://celep.ai',
  integrations: [
    sitemap({
      // Rechtsseiten (noindex) nicht in die Sitemap aufnehmen
      filter: (page) => !page.includes('/impressum') && !page.includes('/datenschutz') && !page.includes('/404'),
    }),
  ],
});
