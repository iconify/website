import type { SidebarItem } from '../sidebar-item'
import { IconifyUsageSidebar } from './usage/iconify'

const usageRoot = '/docs/usage/'

export const UsageSidebar: SidebarItem[] = [
  {
    text: 'SVG in CSS',
    collapsed: true,
    link: `${usageRoot}css/`,
    items: [
      {
        text: 'No Code',
        link: `${usageRoot}css/no-code/`,
      }, {
        text: 'Tailwind CSS',
        link: `${usageRoot}css/tailwind/`,
        collapsed: true,
        items: [{
          text: 'Plugin Options',
          link: `${usageRoot}css/tailwind/options`,
        }, {
          text: 'Clean Class Names',
          link: `${usageRoot}css/tailwind/clean`,
        }],
      }, {
        text: 'UnoCSS',
        link: `${usageRoot}css/unocss/`,
      }, {
        text: 'Iconify Utils',
        link: `${usageRoot}css/utils/`,
      },
    ],
  }, {
    text: 'SVG in HTML',
    collapsed: true,
    link: `${usageRoot}svg/`,
    items: [
      {
        text: 'No Code',
        link: `${usageRoot}svg/no-code/`,
      }, {
        text: 'Unplugin Icons',
        link: `${usageRoot}svg/unplugin/`,
      }, {
        text: 'Iconify Utils',
        link: `${usageRoot}svg/utils/`,
      }, {
        text: 'Astro Icon',
        link: `${usageRoot}svg/astro/`,
      },
    ],
  }, {
    text: 'Icons on Demand',
    collapsed: true,
    link: '/docs/icon-components/',
    items: IconifyUsageSidebar,
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
