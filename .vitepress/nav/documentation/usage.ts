import type { DefaultTheme } from 'vitepress'

export const UsageSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: 'SVG in CSS',
    collapsed: true,
    items: [
      {
        text: 'How to use icons in CSS',
        link: '/docs/usage/css/',
      },
      {
        text: 'CSS for icons without coding',
        link: '/docs/usage/css/no-code/',
      }, {
        text: 'Iconify for Tailwind CSS',
        link: '/docs/usage/css/tailwind/',
      }, {
        text: 'Iconify in UnoCSS',
        link: '/docs/usage/css/unocss/',
      }, {
        text: 'Generate CSS for icons with Iconify Utils',
        link: '/docs/usage/css/utils/',
      },
    ],
  }, {
    text: 'SVG in HTML',
    collapsed: true,
    items: [
      {
        text: 'How to embed SVG in HTML',
        link: '/docs/usage/svg/',
      }, {
        text: 'SVG for icons without coding',
        link: '/docs/usage/svg/no-code/',
      }, {
        text: 'Unplugin Icons',
        link: '/docs/usage/svg/unplugin/',
      }, {
        text: 'Generate SVG with Iconify Utils',
        link: '/docs/usage/svg/utils/',
      },
    ],
  }, {
    text: 'UI Design',
    collapsed: true,
    items: [{
      text: 'Iconify for designers',
      link: '/docs/design/',
    }, {
      text: 'Figma Plugin',
      link: '/docs/design/figma/',
    }, {
      text: 'Sketch Plugin',
      link: '/docs/design/sketch/',
    }],
  },
]
