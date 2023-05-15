import type { SidebarItem } from '../../sidebar-item'

const root = '/docs/libraries/utils/'

export const UtilsSidebar: SidebarItem[] = [
  {
    text: 'Icon Sets',
    collapsed: true,
    items: [{
      text: 'validateIconSet()',
      link: `${root}validate-icon-set`,
    }, {
      text: 'quicklyValidateIconSet()',
      link: `${root}quickly-validate-icon-set`,
    }, {
      text: 'getIcons()',
      link: `${root}get-icons`,
    }, {
      text: 'getIconData()',
      link: `${root}get-icon-data`,
    }, {
      text: 'minifyIconSet()',
      link: `${root}minify-icon-set`,
    }, {
      text: 'expandIconSet()',
      link: `${root}expand-icon-set`,
    }, {
      text: 'convertIconSetInfo()',
      link: `${root}convert-info`,
    }, {
      text: 'parseIconSet()',
      link: `${root}parse-icon-set`,
    }],
  },
  {
    text: 'Icon',
    collapsed: true,
    items: [{
      text: 'mergeIconData()',
      link: `${root}merge-icon-data`,
    }, {
      text: 'defaultIconProps',
      link: `${root}default-icon-props`,
    }, {
      text: 'FullIconifyIcon',
      link: `${root}full-iconify-icon`,
      hidden: true,
    }],
  },
  {
    text: 'Icon Customisations',
    collapsed: true,
    items: [{
      text: 'mergeCustomisations()',
      link: `${root}merge-customisations`,
    }, {
      text: 'defaultIconCustomisations',
      link: `${root}default-icon-customisations`,
    }, {
      text: 'toBoolean()',
      link: `${root}to-boolean`,
    }, {
      text: 'rotateFromString()',
      link: `${root}rotate-from-string`,
    }, {
      text: 'flipFromString()',
      link: `${root}flip-from-string`,
    }, {
      text: 'IconifyIconCustomisations',
      link: `${root}icon-customisations`,
      hidden: true,
    }],
  },
  {
    text: 'SVG',
    collapsed: true,
    items: [{
      text: 'iconToSVG()',
      link: `${root}icon-to-svg`,
    }, {
      text: 'iconToHTML()',
      link: `${root}icon-to-html`,
    }, {
      text: 'calculateSize()',
      link: `${root}calculate-size`,
    }, {
      text: 'replaceIDs()',
      link: `${root}replace-ids`,
    }],
  },
  {
    text: 'CSS',
    collapsed: true,
    items: [{
      text: 'getIconCSS()',
      link: `${root}get-icon-css`,
    }, {
      text: 'getIconsCSS()',
      link: `${root}get-icons-css`,
    }],
  },
  {
    text: 'Icon Name',
    collapsed: true,
    items: [{
      text: 'matchName',
      link: `${root}match-name`,
    }, {
      text: 'stringToIcon()',
      link: `${root}string-to-icon`,
    }, {
      text: 'validateIconName()',
      link: `${root}validate-icon`,
    }, {
      text: 'IconName type',
      link: `${root}icon-name`,
      hidden: true,
    }],
  },
  {
    text: 'Colors',
    collapsed: true,
    items: [{
      text: 'stringToColor()',
      link: `${root}string-to-color`,
    }, {
      text: 'compareColors()',
      link: `${root}compare-colors`,
    }, {
      text: 'colorToString()',
      link: `${root}color-to-string`,
    }, {
      text: 'Color type',
      link: `${root}color`,
    }],
  },
  {
    text: 'Examples',
    collapsed: true,
    link: `${root}examples/`,
    items: [{
      text: 'Icon Set to SVGs',
      link: `${root}examples/export-svgs-from-icon-set`,
    }, {
      text: 'Export SVG',
      items: [{
        text: 'From Icon Set',
        link: `${root}examples/export-svg-from-icon-set`,
      }, {
        text: 'From Data',
        link: `${root}examples/export-svg-from-data`,
      }],
    }, {
      text: 'Export CSS',
      link: `${root}examples/generate-css`,
    }],
  },
]
