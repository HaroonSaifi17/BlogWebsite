// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import rehypePrettyCode from 'rehype-pretty-code'
import react from '@astrojs/react'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), react(), icon()],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'rose-pine',
          transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
    ],
  },
})