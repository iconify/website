import type { SidebarItem } from '../sidebar-item'

export const IconsSidebar: SidebarItem[] = [
  {
    text: 'Icon Basics',
    link: '/docs/icons/icon-basics',
  }, {
    text: 'Icon Set Basics',
    link: '/docs/icons/icon-set-basics',
  }, {
    text: 'Icon Data',
    link: '/docs/icons/icon-data',
    collapsed: true,
    items: [{
      text: 'All Icons',
      link: '/docs/icons/all',
    }, {
      text: 'Icon Sets List',
      link: '/docs/icons/collections',
    }, {
      text: 'Individual Icon Sets',
      link: '/docs/icons/json',
    }, {
      text: 'Individual Icons',
      link: '/docs/icons/icons',
    }],
  }, {
    text: 'Custom Icon Sets',
    link: '/docs/icons/custom',
  },
]
