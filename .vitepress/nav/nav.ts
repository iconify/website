import type { DefaultTheme } from 'vitepress'

const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', link: '/docs/icons/', activeMatch: '^/docs/icons/' },
  { text: 'How to use icons', link: '/docs/usage/', activeMatch: '^/docs/(usage|design)/' },
  { text: 'Iconify Types', link: '/docs/types/', activeMatch: '^/docs/types/' },
  { text: 'Tools for Developers', link: '/docs/tools/', activeMatch: '^/docs/tools/' },
  { text: 'Iconify API', link: '/docs/api/', activeMatch: '^/docs/api/' },
  { text: 'Icons on demand', link: '/docs/icon-components/', activeMatch: '^/docs/icon-components/' },
  { text: 'Iconify Icon', link: '/docs/iconify-icon/', activeMatch: '^/docs/iconify-icon/' },
  { text: 'Articles', link: '/docs/articles/', activeMatch: '^/docs/articles/' },
]

const AboutNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'About Iconify', link: '/about/' },
  { text: 'Support', link: '/support/' },
  { text: 'History', link: '/about/history' },
]

export const Nav: DefaultTheme.NavItem[] = [
  {
    text: 'News',
    link: '/news/',
    activeMatch: '^/news/',
  },
  {
    text: 'Icons',
    link: 'https://icon-sets.iconify.design/',
    target: '_blank',
  },
  {
    text: 'Docs',
    items: DocumentationNav,
    activeMatch: '^/docs/',
  },
  {
    text: 'Sponsor',
    link: '/sponsors/',
  },
  {
    text: 'About',
    items: AboutNav,
    activeMatch: '^/(about|support)/',
  },
]
