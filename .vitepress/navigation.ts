import type { DefaultTheme } from 'vitepress'

const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
  { text: 'How to use icons', link: '/docs/usage/' },
]

const DocumentationSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Getting Started', link: '/guide' },
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify Types', link: '/docs/types/' },
  { text: 'How to use icons', link: '/docs/usage/' },
]

// TODO: add each sidebar item to the sidebar for that section
const DocumentationSidebars: Record<string, DefaultTheme.SidebarItem[]> = {
  '/docs/': DocumentationSidebar,
  '/docs/api/': [],
  '/docs/articles/': [],
  '/docs/icon-components/': [],
  '/docs/iconify-icon/': [],
  '/docs/icons/': [],
  '/docs/tools/': [],
  '/docs/types/': [],
  '/docs/usage/': [],
}

function sideBarForDocumentation(link: string) {
  return DocumentationSidebar.map((item) => {
    const newItem = { ...item }
    if (item.link === link) {
      delete newItem.link
      newItem.items = DocumentationSidebars[link]!
    }

    return newItem
  })
}

const AboutNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history' },
]

const DefaultSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/guide',
  },
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Documentation',
    link: '/docs/',
  },
  {
    text: 'Sponsor Iconify',
    link: '/sponsors',
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
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy',
  },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'News',
    link: '/news/',
  },
  {
    text: 'Icons',
    link: 'https://icon-sets.iconify.design/',
  },
  {
    text: 'Docs',
    items: DocumentationNav,
    activeMatch: '^/(docs)/',
  },
  {
    text: 'Sponsor',
    link: '/sponsors',
  },
  {
    text: 'About',
    items: AboutNav,
    activeMatch: '^/(about|support)/',
  },
]

export const GlobalSidebar: DefaultTheme.Sidebar = {
  '/guide': DefaultSidebar,
  '/news/': DefaultSidebar,
  '/icon-sets/': DefaultSidebar,
  '/docs/': DocumentationSidebars['/docs/']!,
  '/docs/api/': sideBarForDocumentation('/docs/api/'),
  '/docs/articles/': sideBarForDocumentation('/docs/articles/'),
  '/docs/icon-components/': sideBarForDocumentation('/docs/icon-components/'),
  '/docs/iconify-icon/': sideBarForDocumentation('/docs/iconify-icon/'),
  '/docs/icons/': sideBarForDocumentation('/docs/icons/'),
  '/docs/tools/': sideBarForDocumentation('/docs/tools/'),
  '/docs/types/': sideBarForDocumentation('/docs/types/'),
  '/docs/usage/': sideBarForDocumentation('/docs/usage/'),
  '/sponsors': DefaultSidebar,
  '/support/': DefaultSidebar,
  '/about/': DefaultSidebar,
  '/privacy': DefaultSidebar,
}
