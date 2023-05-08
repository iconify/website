import type { DefaultTheme } from 'vitepress'

export const UsageSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'SVG in CSS',
    collapsed: true,
    link: '/docs/usage/css/',
    items: [
      {
        text: 'No Code',
        link: '/docs/usage/css/no-code/',
      }, {
        text: 'Tailwind CSS',
        link: '/docs/usage/css/tailwind/',
        collapsed: true,
        items: [{
          text: 'Plugin Options',
          link: '/docs/usage/css/tailwind/options',
        }, {
          text: 'Clean Class Names',
          link: '/docs/usage/css/tailwind/clean',
        }],
      }, {
        text: 'UnoCSS',
        link: '/docs/usage/css/unocss/',
      }, {
        text: 'Iconify Utils',
        link: '/docs/usage/css/utils/',
      },
    ],
  }, {
    text: 'SVG in HTML',
    collapsed: true,
    link: '/docs/usage/svg/',
    items: [
      {
        text: 'No Code',
        link: '/docs/usage/svg/no-code/',
      }, {
        text: 'Unplugin Icons',
        link: '/docs/usage/svg/unplugin/',
      }, {
        text: 'Iconify Utils',
        link: '/docs/usage/svg/utils/',
      }, {
        text: 'Astro Icon',
        link: '/docs/usage/svg/astro/',
      },
    ],
  }, {
    text: 'UI Design',
    collapsed: true,
    link: '/docs/design/',
    items: [{
      text: 'Figma Plugin',
      link: '/docs/design/figma/',
    }, {
      text: 'Sketch Plugin',
      link: '/docs/design/sketch/',
    }],
  },
]
