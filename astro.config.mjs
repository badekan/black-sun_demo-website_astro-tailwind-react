// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';
import svgr from 'vite-plugin-svgr';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), react()],
  vite: {
    plugins: [
      // https://doray.me/articles/use-svgs-as-react-components-in-astro-MNUvh#64c7e33c_astro-v4
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
          svgoConfig: {
            plugins: ['preset-default', 'removeTitle', 'removeDesc', 'removeDoctype', 'cleanupIds'],
          },
        },
      }),
    ],
  },
});