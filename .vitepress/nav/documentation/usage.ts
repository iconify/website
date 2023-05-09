import type { SidebarItem } from '../siderbar-item'
import { IconBundlesSidebar } from './usage/bundles'
import { IconifyIconSidebar } from './usage/icon'

export const UsageSidebar: SidebarItem[] = [
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
    text: 'Icons on Demand',
    collapsed: true,
    link: '/docs/icon-components/',
    items: [{
      text: 'Web Component',
      collapsed: true,
      link: '/docs/iconify-icon/',
      items: IconifyIconSidebar,
    }, {
      text: 'SVG Framework',
      link: '/docs/icon-components/svg-framework/',
    }, {
      text: 'React',
      link: '/docs/icon-components/react/',
    }, {
      text: 'Vue 3',
      link: '/docs/icon-components/vue/',
    }, {
      text: 'Vue 2',
      link: '/docs/icon-components/vue2/',
    }, {
      text: 'Svelte',
      link: '/docs/icon-components/svelte/',
    }, {
      text: 'Ember',
      link: '/docs/icon-components/ember/',
    }, {
      text: 'Icon Bundles',
      collapsed: true,
      link: '/docs/icon-components/bundles/',
      items: IconBundlesSidebar,
    }],
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
