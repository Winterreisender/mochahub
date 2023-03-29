import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import userConfig from './src/site-info.mochahub.json'

export default defineConfig({
  base: '/mochahub',
  optimizeDeps: {
    exclude: ['firebase-functions','deprecated','private'],
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          config: userConfig
        },
        tags: [
        ],
      },
    }),
  ],
})