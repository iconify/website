import type { SidebarItem } from '../../sidebar-item'

export const ToolsSidebar: SidebarItem[] = [
  {
    text: 'SVG Class',
    link: '/docs/libraries/tools/svg/',
  }, {
    text: 'IconSet Class',
    link: '/docs/libraries/tools/icon-set/',
  }, {
    text: 'Cleanup/Validation',
    link: '/docs/libraries/tools/icon/cleanup',
  }, {
    text: 'Icon Manipulation',
    link: '/docs/libraries/tools/icon/',
  }, {
    text: 'Import',
    link: '/docs/libraries/tools/import/',
  }, {
    text: 'Export',
    link: '/docs/libraries/tools/export/',
  }, {
    text: 'Managing Packages',
    link: '/docs/libraries/tools/package/',
  }, {
    text: 'Examples',
    collapsed: true,
    link: '/docs/libraries/tools/examples/',
    items: [{
      text: 'Convert Material Design Icons to Iconify JSON format',
      link: '/docs/libraries/tools/examples/import-mdi',
    }, {
      text: 'Convert FontAwesome Pro to Iconify JSON format',
      link: '/docs/libraries/tools/examples/import-fa-pro',
    }],
  }, {
    text: 'Import Limitations',
    link: '/docs/libraries/tools/tags',
  },
]
