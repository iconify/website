import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { isCI, isDevelopment } from 'std-env'
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
    PWA: isCI || !isDevelopment || process.env.SW_DEV === 'true',
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
    UnoCSS(),
    navbar(),
  ],
})
