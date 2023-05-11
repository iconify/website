import type { SidebarItem } from '../../sidebar-item'

export function commonInternalFunctions(root: string): SidebarItem[] {
  return [{
    text: 'addAPIProvider()',
    link: `${root}add-api-provider`,
    hidden: true,
  },
  {
    text: 'setFetch()',
    link: `${root}set-fetch`,
    hidden: true,
  }]
}

export function commonIconFunctions(root: string): SidebarItem[] {
  return [
    // Getting icons
    {
      text: 'iconExists()',
      link: `${root}icon-exists`,
    },
    {
      text: 'listIcons()',
      link: `${root}list-icons`,
    },
    {
      text: 'getIcon()',
      link: `${root}get-icon`,
    },
    // Adding icons
    {
      text: 'addIcon()',
      link: `${root}add-icon`,
    },
    {
      text: 'addCollection()',
      link: `${root}add-collection`,
    },
  ]
}

export function commonAPIFunctions(root: string): SidebarItem[] {
  return [{
    text: 'loadIcons()',
    link: `${root}load-icons`,
  },
  {
    text: 'loadIcon()',
    link: `${root}load-icon`,
  },
  {
    text: 'enableCache()',
    link: `${root}enable-cache`,
  },
  {
    text: 'disableCache()',
    link: `${root}disable-cache`,
  }]
}
