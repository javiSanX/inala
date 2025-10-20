import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import icon from 'astro-icon';
import lottie from 'astro-integration-lottie';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
   site: 'http://inala.es',

   integrations: [
      icon(),
      sitemap(),
      lottie(),
      partytown({
         config: {
            forward: ['dataLayer.push'],
         },
      }),
      react(),
      markdoc(),
      keystatic(),
   ],

   vite: {
      plugins: [tailwindcss(), basicSsl()],
   },
   output: 'static',
   adapter: vercel(),
});
