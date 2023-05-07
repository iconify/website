import type { DefaultTheme } from 'vitepress'

export const APISidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Iconify API', link: '/docs/api/' },
  {
    text: 'API Queries',
    collapsed: true,
    items: [{
      text: 'Iconify API queries',
      link: '/docs/api/queries',
    }, {
      text: 'Generate SVG',
      link: '/docs/api/svg',
    }, {
      text: 'Generate CSS',
      link: '/docs/api/css',
    }, {
      text: 'Icon Data',
      link: '/docs/api/icon-data',
    }, {
      text: 'Last Modified',
      link: '/docs/api/last-modified',
    }, {
      text: 'List of Icon Sets',
      link: '/docs/api/collections',
    }, {
      text: 'List of Icons',
      link: '/docs/api/collection',
    }, {
      text: 'Search Icons',
      link: '/docs/api/search',
    }, {
      text: 'Keywords',
      link: '/docs/api/keywords',
    }, {
      text: 'API Version',
      link: '/docs/api/version',
    }],
  }, {
    text: 'Hosting API',
    collapsed: true,
    items: [{
      text: 'Hosting API',
      link: '/docs/api/hosting',
    }, {
      text: 'Node.js API',
      collapsed: true,
      items: [{
        text: 'Hosting Node.js API',
        link: '/docs/api/hosting-js/',
      }, {
        text: 'Configuration',
        link: '/docs/api/hosting-js/config',
      }, {
        text: 'HTTP Headers',
        link: '/docs/api/hosting-js/headers',
      }],
    }],
  }, {
    text: 'API Providers',
    link: '/docs/api/providers',
  }, {
    text: 'Components Config',
    link: '/docs/api/config',
  },
]
