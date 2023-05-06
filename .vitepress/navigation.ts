import type { DefaultTheme } from 'vitepress'
import { NewsSidebar } from './news-navigation'

const DocumentationNav: DefaultTheme.NavItemWithLink[] = [
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', link: '/docs/icons/', activeMatch: '^/docs/icons/' },
  { text: 'How to use icons', link: '/docs/usage/', activeMatch: '^/docs/usage/' },
  { text: 'Iconify Types', link: '/docs/types/', activeMatch: '^/docs/types/' },
  { text: 'Tools for Developers', link: '/docs/tools/', activeMatch: '^/docs/tools/' },
  { text: 'Iconify API', link: '/docs/api/', activeMatch: '^/docs/api/' },
  { text: 'Articles', link: '/docs/articles/', activeMatch: '^/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/', activeMatch: '^/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
]

const DocumentationSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Getting Started', link: '/getting-started/' },
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'Icons', link: '/docs/icons/' },
  { text: 'How to use icons', link: '/docs/usage/' },
  { text: 'Iconify Types', link: '/docs/types/' },
  { text: 'Tools for Developers', link: '/docs/tools/' },
  { text: 'Iconify API', link: '/docs/api/' },
  { text: 'Articles', link: '/docs/articles/' },
  { text: 'Icons on demand', link: '/docs/icon-components/' },
  { text: 'Iconify Icon Web Component', link: '/docs/iconify-icon/' },
]

const SVGInCssSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Getting Started', link: '/getting-started/' },
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'How to use icons', link: '/docs/usage/' },
  {
    text: 'SVG in CSS',
    items: [
      {
        text: 'CSS for icons without coding',
        link: '/docs/usage/css/no-code/',
      }, {
        text: 'Iconify for Tailwind CSS',
        link: '/docs/usage/css/tailwind/',
      }, {
        text: 'Iconify in UnoCSS',
        link: '/docs/usage/css/unocss/',
      }, {
        text: 'Generate CSS for icons with Iconify Utils',
        link: '/docs/usage/css/utils/',
      },
    ],
  },
]
const SVGInHtmlSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Getting Started', link: '/getting-started/' },
  { text: 'Iconify documentation', link: '/docs/' },
  { text: 'How to use icons', link: '/docs/usage/' },
  {
    text: 'SVG in HTML',
    items: [
      {
        text: 'SVG for icons without coding',
        link: '/docs/usage/svg/no-code/',
      }, {
        text: 'Unplugin Icons',
        link: '/docs/usage/svg/unplugin/',
      }, {
        text: 'Generate SVG with Iconify Utils',
        link: '/docs/usage/svg/utils/',
      },
    ],
  },
]

// TODO: add each sidebar item to the sidebar for that section
const DocumentationSidebars: Record<string, DefaultTheme.SidebarItem[]> = {
  '/docs/': DocumentationSidebar,
  '/docs/api/': [{
    text: 'API Queries',
    link: '/docs/api/queries',
  }, {
    text: 'Hosted API',
    link: '/docs/api/hosting',
  }, {
    text: 'API Providers',
    link: '/docs/api/providers',
  }, {
    text: 'Components Config',
    link: '/docs/api/config',
  }],
  '/docs/articles/': [{
    text: 'How Iconify works',
    link: '/docs/articles/how-iconify-works',
  }],
  '/docs/icon-components/': [{
    text: 'Vue 2',
    link: '/docs/icon-components/vue2/',
  }, {
    text: 'Vue 3',
    link: '/docs/icon-components/vue/',
  }, {
    text: 'Svelte',
    link: '/docs/icon-components/svelte/',
  }, {
    text: 'Ember',
    link: '/docs/icon-components/ember/',
  }, {
    text: 'React',
    link: '/docs/icon-components/react/',
  }, {
    text: 'React with API',
    link: '/docs/icon-components/react-with-api/',
  }, {
    text: 'Iconify SVG Framework',
    link: '/docs/icon-components/svg-framework/',
  }, {
    text: 'Iconify Icon Bundles',
    link: '/docs/icon-components/bundles/',
  }],
  '/docs/iconify-icon/': [],
  '/docs/icons/': [{
    text: 'Icon Basics',
    link: '/docs/icons/icon-basics',
  }, {
    text: 'Icon Set Basics',
    link: '/docs/icons/icon-set-basics',
  }, {
    text: 'Icon Data',
    link: '/docs/icons/icon-data',
  }, {
    text: 'Custom Icon Sets',
    link: '/docs/icons/custom',
  }],
  '/docs/tools/': [{
    text: 'Iconify Tools',
    link: '/docs/tools/tools2/',
  }, {
    text: 'Iconify Utils',
    link: '/docs/tools/utils/',
  }],
  '/docs/types/': [{
    text: 'IconifyIcon',
    link: '/docs/types/iconify-icon',
  }, {
    text: 'IconifyJSON',
    link: '/docs/types/iconify-json',
  }, {
    text: 'IconifyInfo',
    link: '/docs/types/iconify-info',
  }],
  '/docs/usage/': [{
    text: 'SVG in CSS',
    link: '/docs/usage/css/',
  }, {
    text: 'SVG in HTML',
    link: '/docs/usage/svg/',
  }, {
    text: 'Icons on Demand',
    link: '/docs/icon-components/',
  }, {
    text: 'UI Design',
    link: '/docs/design/',
  }],
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
  { text: 'History', link: '/about/history.md' },
]

const DefaultSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'Getting Started',
    link: '/getting-started/',
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
    text: 'History',
    link: '/about/history',
  },
  {
    text: 'Privacy',
    link: '/privacy/',
  },
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

export const GlobalSidebar: DefaultTheme.Sidebar = {
  '/getting-started/': DefaultSidebar,
  '/news/': NewsSidebar,
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
  '/docs/usage/css/': SVGInCssSidebar,
  '/docs/usage/svg/': SVGInHtmlSidebar,
  '/sponsors': DefaultSidebar,
  '/support/': DefaultSidebar,
  '/about/': DefaultSidebar,
  '/privacy': DefaultSidebar,
}
