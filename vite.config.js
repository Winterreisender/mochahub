import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import sites from './sites.json'

export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          siteInfo: sites
        },
        tags: [
          {
            injectTo: 'body-prepend',
            tag: 'div',
            attrs: {
              id: 'tag',
            },
          },
        ],
      },
    }),
  ],
})