import type { VitePWAOptions } from 'vite-plugin-pwa'
import { description, title } from './constants'

export const pwa: Partial<VitePWAOptions> = {
  outDir: 'dist',
  strategies: 'injectManifest',
  srcDir: '.vitepress',
  filename: 'sw.ts',
  registerType: 'autoUpdate',
  includeManifestIcons: false,
  injectRegister: false,
  manifest: {
    id: '/',
    name: title,
    short_name: title,
    description,
    theme_color: '#ffffff',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  injectManifest: {
    globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2,json}'],
  },
  devOptions: {
    enabled: process.env.SW_DEV === 'true',
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
}
