import type { DefaultTheme } from 'vitepress'
import { DocumentationSidebar } from './documentation'
import { NewsSidebar } from './news'

export const GlobalSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/getting-started/',
  },
  {
    text: 'Documentation',
    collapsed: true,
    items: DocumentationSidebar,
  },
  {
    text: 'Sponsor Iconify',
    link: '/sponsors/',
  },
  {
    text: 'About Iconify',
    link: '/about/',
  },
  {
    text: 'Iconify Support',
    link: '/support/',
  },
  {
    text: 'News',
    collapsed: true,
    items: NewsSidebar,
  },
  {
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy/',
  },
]
