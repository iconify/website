import type { SidebarItem } from '../../sidebar-item'

export const TypesSidebar: SidebarItem[] = [
  {
    text: 'IconifyIcon',
    link: '/docs/types/iconify-icon',
  }, {
    text: 'IconifyJSON',
    link: '/docs/types/iconify-json',
    collapsed: true,
    items: [{
      text: 'Metadata',
      link: '/docs/types/iconify-json-metadata',
    }, {
      text: 'IconifyAlias',
      link: '/docs/types/iconify-alias',
    }],
  }, {
    text: 'IconifyInfo',
    link: '/docs/types/iconify-info',
  },
]
