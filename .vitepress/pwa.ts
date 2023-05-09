import type { VitePWAOptions } from 'vite-plugin-pwa'
import { description, title } from './constants'

export function pwa(enablePWA: boolean) {
  return {
    outDir: 'dist',
    strategies: 'generateSW',
    registerType: 'autoUpdate',
    includeManifestIcons: false,
    injectRegister: false,
    disable: !enablePWA,
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
    workbox: {
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      skipWaiting: true,
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2,xml,txt}'],
      globIgnores: ['assets/images/**', 'assets/icons/**', 'assets/svg/**'],
      runtimeCaching: [{
        urlPattern: ({ sameOrigin, url }) =>
          sameOrigin && (url.pathname.startsWith('/assets/images/') || url.pathname.startsWith('/assets/icons/') || url.pathname.startsWith('/assets/svg/')),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'iconify-website-images-cache',
          expiration: {
            purgeOnQuotaError: true,
            maxEntries: 256,
            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
          },
          cacheableResponse: {
            statuses: [200],
          },
        },
      }, {
        urlPattern: /^https:\/\/cyberalien.github.io\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'cyberalien-gh-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24, // <== 1 day
          },
          cacheableResponse: {
            // don't remove 0, handling opaque responses (CORS)
            statuses: [0, 200],
          },
        },
      }],
    },
    devOptions: {
      enabled: enablePWA && process.env.SW_DEV === 'true',
      /* when building, the PWA plugin will switch to classic */
      // type: 'module',
      navigateFallback: 'index.html',
    },
  } satisfies Partial<VitePWAOptions>
}
