import type { SidebarItem } from '../../sidebar-item'

const root = '/docs/types/'

export const TypesSidebar: SidebarItem[] = [
  {
    text: 'IconifyIcon',
    link: `${root}iconify-icon`,
  }, {
    text: 'IconifyJSON',
    link: `${root}iconify-json`,
    collapsed: true,
    items: [{
      text: 'Metadata',
      link: `${root}iconify-json-metadata`,
    }, {
      text: 'IconifyAlias',
      link: `${root}iconify-alias`,
    }],
  }, {
    text: 'IconifyInfo',
    link: `${root}iconify-info`,
  },
]
