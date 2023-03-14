import { defineConfig } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import sites from './src/site-info.mochahub.json'

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
            enabled: true // 启用粒子系统
          }
        },
        tags: [
        ],
      },
    }),
  ],
})