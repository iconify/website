import type { SidebarItem } from '../siderbar-item'
import { Tools2Sidebar } from './tools/tools'
import { TypesSidebar } from './tools/types'
import { UtilsSidebar } from './tools/utils'

export const ToolsSidebar: SidebarItem[] = [
  {
    text: 'Iconify Types',
    link: '/docs/types/',
    collapsed: true,
    items: TypesSidebar,
  },
  {
    text: 'Iconify Tools',
    link: '/docs/tools/tools2/',
    collapsed: true,
    items: Tools2Sidebar,
  },
  {
    text: 'Iconify Utils',
    collapsed: true,
    link: '/docs/tools/utils/',
    items: UtilsSidebar,
  },

]
