import type { SidebarItem } from '../sidebar-item'
import { IconsSidebar } from './icons'
import { UsageSidebar } from './usage'
import { LibrariesSidebar } from './libraries'
import { APISidebar } from './api'
import { ArticlesSidebar } from './articles'

export const DocumentationSidebar: SidebarItem[] = [
  { text: 'Icons', collapsed: true, items: IconsSidebar, link: '/docs/icons/' },
  { text: 'Usage', collapsed: true, items: UsageSidebar, link: '/docs/usage/' },
  { text: 'Libraries', collapsed: true, items: LibrariesSidebar, link: '/docs/libraries/' },
  { text: 'API', collapsed: true, items: APISidebar, link: '/docs/api/' },
  { text: 'Articles', collapsed: true, items: ArticlesSidebar, link: '/docs/articles/', hidden: true },
]
