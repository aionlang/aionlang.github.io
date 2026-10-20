import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aionlang.github.io',
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      langs: ['rust', 'kotlin', 'c', 'bash', 'toml', 'json'],
      wrap: true,
    },
  },
});
