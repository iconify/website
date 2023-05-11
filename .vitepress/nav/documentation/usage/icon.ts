import type { SidebarItem } from '../../sidebar-item'

export const IconifyIconSidebar: SidebarItem[] = [
  {
    text: 'IconifyIconName type',
    link: '/docs/iconify-icon/icon-name',
    hidden: true,
  },
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
      text: 'Icon',
      link: '/docs/iconify-icon/icon',
      hidden: true,
    }, {
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
    text: 'Functions',
    items: [
      // Internal functions
      {
        text: 'addAPIProvider()',
        link: '/docs/iconify-icon/add-api-provider',
        hidden: true,
      },
      {
        text: 'setFetch()',
        link: '/docs/iconify-icon/set-fetch',
        hidden: true,
      },
      // Getting icons
      {
        text: 'iconExists()',
        link: '/docs/iconify-icon/icon-exists',
      }, {
        text: 'listIcons()',
        link: '/docs/iconify-icon/list-icons',
      }, {
        text: 'getIcon()',
        link: '/docs/iconify-icon/get-icon',
      },
      // Adding icons
      {
        text: 'addIcon()',
        link: '/docs/iconify-icon/add-icon',
      }, {
        text: 'addCollection()',
        link: '/docs/iconify-icon/add-collection',
      },
      // API
      {
        text: 'loadIcons()',
        link: '/docs/iconify-icon/load-icons',
      }, {
        text: 'loadIcon()',
        link: '/docs/iconify-icon/load-icon',
      }, {
        text: 'enableCache()',
        link: '/docs/iconify-icon/enable-cache',
      }, {
        text: 'disableCache()',
        link: '/docs/iconify-icon/disable-cache',
      },
      // Rendering icons
      {
        text: 'buildIcon()',
        link: '/docs/iconify-icon/build-icon',
      }],
  },
]
