import type { Plugin } from 'vite'

export default function SidebarFix(): Plugin {
  return {
    name: 'vitepress-sidebar-item',
    enforce: 'pre',
    async transform(code, id) {
      if (id.includes('VPSidebarItem.vue') && !id.endsWith('.css') && !id.includes('&setup=')) {
        // Do not allow active item to collapse
        code = code.replace('{ collapsed: collapsed.value },', '{ collapsed: collapsed.value && !isActiveLink.value && !hasActiveLink.value },')

        // Extend theme
        code = code.replaceAll('DefaultTheme.SidebarItem', 'SidebarItem')
        let match = 'const props = defineProps<{'
        code = code.replace(match, `
interface SidebarItem extends DefaultTheme.SidebarItem {
  hidden?: boolean
}
${match}`)

        // Visibility
        match = 'const classes ='
        code = code.replace(match, `
const visible = computed(() => !props.item.hidden || isActiveLink.value || hasActiveLink.value)
${match}`)

        // Hide it
        match = '<component :is="sectionTag"'
        code = code.replace(match, `${match} v-if="visible"`)

        return code
      }
    },
  }
}
