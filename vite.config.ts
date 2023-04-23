import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import navbar from './plugins/navbar'

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
  define: {
    PWA: process.env.NODE_ENV === 'production' || process.env.SW_DEV === 'true',
  },
  plugins: [
    Components({
      dirs: [
        '.vitepress/theme/components',
      ],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'components.d.ts',
    }),
    AutoImport({
      imports: [
        'vue',
        'vue/macros',
        '@vueuse/core',
      ],
      dts: 'auto-imports.d.ts',
    }),
    UnoCSS(),
    navbar(),
  ],
})
