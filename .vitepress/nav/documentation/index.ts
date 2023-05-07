import type { SidebarItem } from '../siderbar-item'
import { IconsSidebar } from './icons'
import { UsageSidebar } from './usage'
import { TypesSidebar } from './types'
import { ToolsSidebar } from './tools'
import { APISidebar } from './api'
import { IconComponentsSidebar } from './icon-components'
import { IconifyIconSidebar } from './iconify-icon'
import { ArticlesSidebar } from './articles'

export const DocumentationSidebar: SidebarItem[] = [
  { text: 'Icons', collapsed: true, items: IconsSidebar, link: '/docs/icons/' },
  { text: 'How to use icons', collapsed: true, items: UsageSidebar, link: '/docs/usage/' },
  { text: 'Iconify Types', collapsed: true, items: TypesSidebar, link: '/docs/types/' },
  { text: 'Tools for Developers', collapsed: true, items: ToolsSidebar, link: '/docs/tools/' },
  { text: 'Iconify API', collapsed: true, items: APISidebar, link: '/docs/api/' },
  { text: 'Icons on demand', collapsed: true, items: IconComponentsSidebar, link: '/docs/icon-components/' },
  { text: 'Iconify Icon', collapsed: true, items: IconifyIconSidebar, link: '/docs/iconify-icon/' },
  { text: 'Articles', collapsed: true, items: ArticlesSidebar, link: '/docs/articles/', hidden: true },
]
