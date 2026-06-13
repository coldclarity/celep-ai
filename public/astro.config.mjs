import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://celep.ai',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/impressum') &&
        !page.includes('/datenschutz') &&
        !page.includes('/404'),
    }),
  ],
});
