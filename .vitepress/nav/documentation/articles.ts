import type { DefaultTheme } from 'vitepress'

export const ArticlesSidebar: DefaultTheme.SidebarItem[] = [
  { text: 'Articles', link: '/docs/articles/' },
  {
    text: 'How icons are validated and cleaned up in Iconify',
    collapsed: true,
    items: [{
      text: 'Cleaning up icons',
      link: '/docs/articles/cleaning-up-icons/',
    }, {
      text: 'Examples',
      collapsed: true,
      items: [{
        text: 'Bad icon example',
        link: '/docs/articles/cleaning-up-icons/cleanup',
      }, {
        text: 'Validating SVG',
        link: '/docs/articles/cleaning-up-icons/validate',
      }, {
        text: 'Changing icon palette',
        link: '/docs/articles/cleaning-up-icons/palette',
      }, {
        text: 'Optimising icon',
        link: '/docs/articles/cleaning-up-icons/optimise',
      }],
    }],
  }, {
    text: 'How add icon set to Iconify',
    link: '/docs/articles/add-icon-set/',
  }, {
    text: 'Solving SVG animation issues',
    link: '/docs/articles/svg-animation-issues/',
  }, {
    text: 'Avoid vendor lock-in',
    link: '/docs/articles/vendor-lock-in',
  },
]
