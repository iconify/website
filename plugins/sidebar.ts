import type { Plugin } from 'vite'

export default function SidebarFix(): Plugin {
  return {
    name: 'vitepress-sidebar-item',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('VPSidebarItem.vue') && !id.endsWith('.css') && !id.includes('&setup='))
        return code.replace('{ collapsed: collapsed.value },', '{ collapsed: collapsed.value && !isActiveLink.value && !hasActiveLink.value },')
    },
  }
}
