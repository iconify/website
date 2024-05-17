import type { SidebarItem } from '../sidebar-item'
import { BlogSidebar } from './blog'
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
  // Old articles page
  { text: 'Articles', collapsed: true, items: ArticlesSidebar, link: '/docs/articles/', hidden: true },
  // New articles page, to be published when ready
  { text: 'Blog', collapsed: true, items: BlogSidebar, link: '/blog/', hidden: true },
]
