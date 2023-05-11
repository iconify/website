import type { SidebarItem } from '../../sidebar-item'
import { iconComponentSidebar } from './component'
import { IconifyIconSidebar } from './icon'
import { SVGFrameworkSidebar } from './svg-framework'

const root = '/docs/icon-components/'

export const IconifyUsageSidebar: SidebarItem[] = [{
  text: 'Web Component',
  collapsed: true,
  link: '/docs/iconify-icon/',
  items: IconifyIconSidebar,
}, {
  text: 'SVG Framework',
  collapsed: true,
  link: `${root}svg-framework/`,
  items: SVGFrameworkSidebar,
}, {
  text: 'React',
  collapsed: true,
  link: `${root}react/`,
  items: iconComponentSidebar(`${root}react/`),
}, {
  text: 'Vue 3',
  collapsed: true,
  link: `${root}vue/`,
  items: iconComponentSidebar(`${root}vue/`),
}, {
  text: 'Vue 2',
  collapsed: true,
  link: `${root}vue2/`,
  items: iconComponentSidebar(`${root}vue2/`),
}, {
  text: 'Svelte',
  collapsed: true,
  link: `${root}svelte/`,
  items: iconComponentSidebar(`${root}svelte/`),
}, {
  text: 'Ember',
  collapsed: true,
  link: `${root}ember/`,
  items: iconComponentSidebar(`${root}ember/`),
}]
