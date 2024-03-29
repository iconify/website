// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import 'iconify-icon'
import './style.scss'

import HomePage from './components/HomePage.vue'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomePage),
    })
  },
}
