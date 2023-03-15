import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import sites from './src/site-info.mochahub.json'

export default defineConfig({
  base: '/mochahub',
  optimizeDeps: {
    exclude: ['firebase-functions','schema','private'],
  },
  plugins: [
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          siteInfo: sites,
          particles: {
            enabled: false // 启用粒子系统
          }
        },
        tags: [
        ],
      },
    }),
  ],
})