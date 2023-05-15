import type { SidebarItem } from '../sidebar-item'

const root = '/docs/articles/'

export const ArticlesSidebar: SidebarItem[] = [
  {
    text: 'How icons are validated and cleaned up in Iconify',
    collapsed: true,
    items: [{
      text: 'Cleaning up icons',
      link: `${root}cleaning-up-icons/`,
    }, {
      text: 'Examples',
      collapsed: true,
      items: [{
        text: 'Bad icon example',
        link: `${root}cleaning-up-icons/cleanup`,
      }, {
        text: 'Validating SVG',
        link: `${root}cleaning-up-icons/validate`,
      }, {
        text: 'Changing icon palette',
        link: `${root}cleaning-up-icons/palette`,
      }, {
        text: 'Optimising icon',
        link: `${root}cleaning-up-icons/optimise`,
      }],
    }],
  }, {
    text: 'How add icon set to Iconify',
    link: `${root}add-icon-set/`,
  }, {
    text: 'Solving SVG animation issues',
    link: `${root}svg-animation-issues/`,
  }, {
    text: 'Avoid vendor lock-in',
    link: `${root}vendor-lock-in`,
  },
]
