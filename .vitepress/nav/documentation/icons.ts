import type { SidebarItem } from '../sidebar-item'

const root = '/docs/icons/'

export const IconsSidebar: SidebarItem[] = [
  {
    text: 'Icon Basics',
    link: `${root}icon-basics`,
  }, {
    text: 'Icon Set Basics',
    link: `${root}icon-set-basics`,
  }, {
    text: 'Icon Data',
    link: `${root}icon-data`,
    collapsed: true,
    items: [{
      text: 'All Icons',
      link: `${root}all`,
    }, {
      text: 'Icon Sets List',
      link: `${root}collections`,
    }, {
      text: 'Individual Icon Sets',
      link: `${root}json`,
    }, {
      text: 'Individual Icons',
      link: `${root}icons`,
    }],
  }, {
    text: 'Custom Icon Sets',
    link: `${root}custom`,
  },
]
