import type { SidebarItem } from '../../siderbar-item'

export const Tools2Sidebar: SidebarItem[] = [
  {
    text: 'SVG Class',
    link: '/docs/tools/tools2/svg/',
  }, {
    text: 'IconSet Class',
    link: '/docs/tools/tools2/icon-set/',
  }, {
    text: 'Cleanup/Validation',
    link: '/docs/tools/tools2/icon/cleanup',
  }, {
    text: 'Icon Manipulation',
    link: '/docs/tools/tools2/icon/',
  }, {
    text: 'Import',
    link: '/docs/tools/tools2/import/',
  }, {
    text: 'Export',
    link: '/docs/tools/tools2/export/',
  }, {
    text: 'Managing Packages',
    link: '/docs/tools/tools2/package/',
  }, {
    text: 'Examples',
    collapsed: true,
    link: '/docs/tools/tools2/examples/',
    items: [{
      text: 'Convert Material Design Icons to Iconify JSON format',
      link: '/docs/tools/tools2/examples/import-mdi',
    }, {
      text: 'Convert FontAwesome Pro to Iconify JSON format',
      link: '/docs/tools/tools2/examples/import-fa-pro',
    }],
  }, {
    text: 'Import Limitations',
    link: '/docs/tools/tools2/tags',
  },
]
