import type { SidebarItem } from '../../sidebar-item'

export const IconifyIconSidebar: SidebarItem[] = [
  {
    text: 'Wrappers for',
    items: [{
      text: 'React',
      link: '/docs/iconify-icon/react',
    }, {
      text: 'Solid',
      link: '/docs/iconify-icon/solid',
    }],
  }, {
    text: 'Attributes',
    items: [{
      text: 'Icon Color',
      link: '/docs/iconify-icon/color',
    }, {
      text: 'Icon Dimensions',
      link: '/docs/iconify-icon/dimensions',
    }, {
      text: 'Transformations',
      link: '/docs/iconify-icon/transform',
    }, {
      text: 'Vertical Alignment',
      link: '/docs/iconify-icon/inline',
    }, {
      text: 'Rendering Modes',
      link: '/docs/iconify-icon/modes',
    }],
  }, {
    text: 'Use Without API',
    link: '/docs/iconify-icon/without-api',
  }, {
    text: 'Functions',
    collapsed: true,
    items: [{
      text: 'iconExists()',
      link: '/docs/iconify-icon/icon-exists',
    }, {
      text: 'listIcons()',
      link: '/docs/iconify-icon/list-icons',
    }, {
      text: 'getIcon()',
      link: '/docs/iconify-icon/get-icon',
    }, {
      text: 'addCollection()',
      link: '/docs/iconify-icon/add-collection',
    }, {
      text: 'loadIcons()',
      link: '/docs/iconify-icon/load-icons',
    }, {
      text: 'loadIcon()',
      link: '/docs/iconify-icon/load-icon',
    }, {
      text: 'enableCache()',
      link: '/docs/iconify-icon/enabled-cache',
    }, {
      text: 'disableCache()',
      link: '/docs/iconify-icon/disabled-cache',
    }, {
      text: 'buildIcon()',
      link: '/docs/iconify-icon/build-icon',
    }, {
      text: 'setFetch()',
      link: '/docs/iconify-icon/set-fetch',
    }],
  },
]
