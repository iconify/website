import type { SidebarItem } from '../sidebar-item'

const root = '/docs/api/'

export const APISidebar: SidebarItem[] = [
  {
    text: 'API Queries',
    collapsed: true,
    link: `${root}queries`,
    items: [{
      text: 'Generate SVG',
      link: `${root}svg`,
    }, {
      text: 'Generate CSS',
      link: `${root}css`,
    }, {
      text: 'Icon Data',
      link: `${root}icon-data`,
    }, {
      text: 'Last Modified',
      link: `${root}last-modified`,
    }, {
      text: 'List of Icon Sets',
      link: `${root}collections`,
    }, {
      text: 'List of Icons',
      link: `${root}collection`,
    }, {
      text: 'Search Icons',
      link: `${root}search`,
    }, {
      text: 'Keywords',
      link: `${root}keywords`,
    }, {
      text: 'API Version',
      link: `${root}version`,
    }],
  }, {
    text: 'Hosting API',
    collapsed: true,
    link: `${root}hosting`,
    items: [{
      text: 'Node.js API',
      collapsed: true,
      link: `${root}hosting-js/`,
      items: [{
        text: 'Configuration',
        link: `${root}hosting-js/config`,
      },
      {
        text: 'HTTP Headers',
        link: `${root}hosting-js/headers`,
      },
      {
        text: 'Reverse Proxy',
        link: `${root}hosting-js/reverse-proxy`,
      }],
    }, {
      text: 'Custom CDN',
      link: `${root}cdn`,
    }],
  }, {
    text: 'API Providers',
    link: `${root}providers`,
  }, {
    text: 'Components Config',
    link: `${root}config`,
  },
]
