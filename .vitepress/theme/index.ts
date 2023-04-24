/// <reference types="vite-plugin-pwa/client" />
/// <reference types="../../shims" />
// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import { disableCache } from 'iconify-icon'
import Theme from 'vitepress/theme'
import './style.scss'
import 'uno.css'

import HomePage from './components/HomePage.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
  enhanceApp() {
    if (typeof window === 'undefined')
      return

    if (PWA) {
      disableCache('all')
      import('virtual:pwa-register').then(({ registerSW }) => registerSW({ immediate: true }))
    }
  },
}
