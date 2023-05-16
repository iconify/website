import type { Plugin } from 'vite'

export default function FooterFix(): Plugin {
  return {
    name: 'vitepress-footer',
    enforce: 'pre',
    async transform(code, id) {
      // Change VPSidebarItem.vue
      if (id.includes('VPDocFooter.vue') && !id.endsWith('.css') && !id.includes('&setup=')) {
        const lines = code.split(/\r?\n/)

        lines.forEach((line, index) => {
          if (line.includes('@media (min-width: 640px) {')) {
            const nextLine = lines[index + 1]
            if (nextLine.includes('.pager') || nextLine.includes('.prev-next'))
              lines[index] = '@supports (display: flex) {'
          }
        })
        return lines.join('\n')
      }
    },
  }
}
