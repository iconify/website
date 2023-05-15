import type { SidebarItem } from '../sidebar-item'

export const APISidebar: SidebarItem[] = [
  {
    text: 'API Queries',
    collapsed: true,
    link: '/docs/api/queries',
    items: [{
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
    link: '/docs/api/hosting',
    items: [{
      text: 'Node.js API',
      collapsed: true,
      link: '/docs/api/hosting-js/',
      items: [{
        text: 'Configuration',
        link: '/docs/api/hosting-js/config',
      },
      {
        text: 'HTTP Headers',
        link: '/docs/api/hosting-js/headers',
      },
      {
        text: 'Reverse Proxy',
        link: '/docs/api/hosting-js/reverse-proxy',
      }],
    }, {
      text: 'Custom CDN',
      link: '/docs/api/cdn',
    }],
  }, {
    text: 'API Providers',
    link: '/docs/api/providers',
  }, {
    text: 'Components Config',
    link: '/docs/api/config',
  },
]
