import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import sites from './src/sites.json'

export default defineConfig({
  assetsInclude: ['src/*.css'],
  optimizeDeps: {
    exclude: ['firebase-functions'],
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          siteInfo: sites,
          particles: {
            enabled: true
          }
        },
        tags: [
        ],
      },
    }),
  ],
})