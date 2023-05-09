import type { SidebarItem } from '../siderbar-item'
import { IconsSidebar } from './icons'
import { UsageSidebar } from './usage'
import { ToolsSidebar } from './tools'
import { APISidebar } from './api'
import { ArticlesSidebar } from './articles'

export const DocumentationSidebar: SidebarItem[] = [
  { text: 'Icons', collapsed: true, items: IconsSidebar, link: '/docs/icons/' },
  { text: 'Usage', collapsed: true, items: UsageSidebar, link: '/docs/usage/' },
  { text: 'Libraries', collapsed: true, items: ToolsSidebar, link: '/docs/tools/' },
  { text: 'API', collapsed: true, items: APISidebar, link: '/docs/api/' },
  { text: 'Articles', collapsed: true, items: ArticlesSidebar, link: '/docs/articles/', hidden: true },
]
