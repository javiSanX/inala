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

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
   site: 'https://inala.es',

   integrations: [
      icon(),
      sitemap({
         filter: (page) => {
            const pathname = new URL(page).pathname;
            if (pathname.startsWith('/blog/author/')) return false;
            if (/^\/blog\/\d+\/$/.test(pathname)) return false;
            return true;
         },
      }),
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
