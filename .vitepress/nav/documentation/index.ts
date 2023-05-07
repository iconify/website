import type { DefaultTheme } from 'vitepress'
import { IconsSidebar } from './icons'
import { UsageSidebar } from './usage'
import { TypesSidebar } from './types'
import { ToolsSidebar } from './tools'
import { APISidebar } from './api'
import { IconComponentsSidebar } from './icon-components'
import { IconifyIconSidebar } from './iconify-icon'
import { ArticlesSidebar } from './articles'

export const DocumentationSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', collapsed: true, items: IconsSidebar },
  { text: 'How to use icons', collapsed: true, items: UsageSidebar },
  { text: 'Iconify Types', collapsed: true, items: TypesSidebar },
  { text: 'Tools for Developers', collapsed: true, items: ToolsSidebar },
  { text: 'Iconify API', collapsed: true, items: APISidebar },
  { text: 'Icons on demand', collapsed: true, items: IconComponentsSidebar },
  { text: 'Iconify Icon', collapsed: true, items: IconifyIconSidebar },
  { text: 'Articles', collapsed: true, items: ArticlesSidebar },
]
