import { readFile } from 'node:fs/promises'
import type { Plugin } from 'vite'

export default function CustomAds(): Plugin {
  return {
    name: 'vitepress-footer',
    enforce: 'pre',
    async transform(code, id) {
      // Change VPSidebarItem.vue
      if (id.includes('VPCarbonAds.vue') && !id.endsWith('.css') && !id.includes('&setup='))
        return readFile('.vitepress/theme/components/VPCarbonAds.vue', 'utf8')
    },
  }
}
