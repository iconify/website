import type { SidebarItem } from '../../sidebar-item'
import { commonAPIFunctions, commonIconFunctions, commonInternalFunctions } from './common'

const root = '/docs/icon-components/svg-framework/'

export const SVGFrameworkIconSidebar: SidebarItem[] = [
  {
    text: 'IconifyIconName type',
    link: `${root}icon-name`,
    hidden: true,
  },
  // Attributes
  {
    text: 'Icon Color',
    link: `${root}color`,
  },
  {
    text: 'Icon Dimensions',
    link: `${root}dimensions`,
  },
  {
    text: 'Transformations',
    link: `${root}transform`,
  },
  {
    text: 'Vertical Alignment',
    link: `${root}inline`,
  },
  {
    text: 'Functions',
    items: [
      // Internal
      ...commonInternalFunctions(root),
      // Getting/adding icons
      ...commonIconFunctions(root),
      // Rendering icons
      {
        text: 'renderSVG()',
        link: `${root}render-svg`,
      },
      {
        text: 'renderHTML()',
        link: `${root}render-html`,
      },
      {
        text: 'renderIcon()',
        link: `${root}render-icon`,
      },
      {
        text: 'replaceIDs()',
        link: `${root}replace-ids`,
      },
      {
        text: 'buildIcon()',
        link: `${root}build-icon`,
      },
      // Observer
      {
        text: 'scan()',
        link: `${root}scan`,
      },
      {
        text: 'observe()',
        link: `${root}observe`,
      },
      {
        text: 'stopObserving()',
        link: `${root}stop-observing`,
      },
      {
        text: 'pauseObserver()',
        link: `${root}pause-observer`,
      },
      {
        text: 'resumeObserver()',
        link: `${root}resume-observer`,
      },
      // API
      ...commonAPIFunctions(root),
    ],
  },
  {
    text: 'Optimizations',
    link: `${root}optimizations`,
  },
]
