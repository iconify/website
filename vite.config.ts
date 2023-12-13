import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import navbar from './plugins/navbar'
import sidebar from './plugins/sidebar'
import footer from './plugins/footer'
import ads from './plugins/ads'

export default defineConfig({
  optimizeDeps: {
    exclude: [
      'vitepress',
    ],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    Components({
      // allow auto load markdown components under `.vitepress/theme/components`
      dirs: [
        '.vitepress/theme/components',
      ],
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
    }),
    navbar(),
    sidebar(),
    footer(),
    ads(),
  ],
})
