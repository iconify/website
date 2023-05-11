import type { SidebarItem } from '../../sidebar-item'
import { IconifyIconSidebar } from './icon'
import { SVGFrameworkIconSidebar } from './svg-framework'

export const IconifyUsageSidebar: SidebarItem[] = [{
  text: 'Web Component',
  collapsed: true,
  link: '/docs/iconify-icon/',
  items: IconifyIconSidebar,
}, {
  text: 'SVG Framework',
  collapsed: true,
  link: '/docs/icon-components/svg-framework/',
  items: SVGFrameworkIconSidebar,
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
}]
