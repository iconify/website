import type { SidebarItem } from '../../sidebar-item'

export const UtilsSidebar: SidebarItem[] = [
  {
    text: 'Examples',
    collapsed: true,
    link: '/docs/libraries/utils/examples/',
    items: [{
      text: 'Export icon set',
      link: '/docs/libraries/utils/examples/export-svgs-from-icon-set',
    }, {
      text: 'Export SVG from icon set',
      link: '/docs/libraries/utils/examples/export-svg-from-icon-set',
    }, {
      text: 'Export SVG from icon data',
      link: '/docs/libraries/utils/examples/export-svg-from-data',
    }, {
      text: 'Export CSS',
      link: '/docs/libraries/utils/examples/generate-css',
    }],
  },
  {
    text: 'Icon Sets',
    collapsed: true,
    items: [{
      text: 'validateIconSet()',
      link: '/docs/libraries/utils/validate-icon-set',
    }, {
      text: 'quicklyValidateIconSet()',
      link: '/docs/libraries/utils/quickly-validate-icon-set',
    }, {
      text: 'getIcons()',
      link: '/docs/libraries/utils/get-icons',
    }, {
      text: 'getIconData()',
      link: '/docs/libraries/utils/get-icon-data',
    }, {
      text: 'minifyIconSet()',
      link: '/docs/libraries/utils/minify-icon-set',
    }, {
      text: 'expandIconSet()',
      link: '/docs/libraries/utils/expand-icon-set',
    }, {
      text: 'convertIconSetInfo()',
      link: '/docs/libraries/utils/convert-info',
    }, {
      text: 'parseIconSet()',
      link: '/docs/libraries/utils/parse-icon-set',
    }],
  },
  {
    text: 'Icon',
    collapsed: true,
    items: [{
      text: 'mergeIconData()',
      link: '/docs/libraries/utils/merge-icon-data',
    }, {
      text: 'defaultIconProps',
      link: '/docs/libraries/utils/default-icon-props',
    }],
  },
  {
    text: 'Customisations',
    collapsed: true,
    items: [{
      text: 'mergeCustomisations()',
      link: '/docs/libraries/utils/merge-customisations',
    }, {
      text: 'defaultIconCustomisations',
      link: '/docs/libraries/utils/default-icon-customisations',
    }, {
      text: 'toBoolean()',
      link: '/docs/libraries/utils/to-boolean',
    }, {
      text: 'rotateFromString()',
      link: '/docs/libraries/utils/rotate-from-string',
    }, {
      text: 'flipFromString()',
      link: '/docs/libraries/utils/flip-from-string',
    }],
  },
  {
    text: 'SVG',
    collapsed: true,
    items: [{
      text: 'iconToSVG()',
      link: '/docs/libraries/utils/icon-to-svg',
    }, {
      text: 'iconToHTML()',
      link: '/docs/libraries/utils/icon-to-html',
    }, {
      text: 'calculateSize()',
      link: '/docs/libraries/utils/calculate-size',
    }, {
      text: 'replaceIDs()',
      link: '/docs/libraries/utils/replace-ids',
    }],
  },
  {
    text: 'CSS',
    collapsed: true,
    items: [{
      text: 'getIconCSS()',
      link: '/docs/libraries/utils/get-icon-css',
    }, {
      text: 'getIconsCSS()',
      link: '/docs/libraries/utils/get-icons-css',
    }],
  },
  {
    text: 'Icon Name',
    collapsed: true,
    items: [{
      text: 'matchName',
      link: '/docs/libraries/utils/match-name',
    }, {
      text: 'stringToIcon()',
      link: '/docs/libraries/utils/string-to-icon',
    }, {
      text: 'validateIconName()',
      link: '/docs/libraries/utils/validate-icon',
    }],
  },
  {
    text: 'Colors',
    collapsed: true,
    items: [{
      text: 'stringToColor()',
      link: '/docs/libraries/utils/string-to-color',
    }, {
      text: 'compareColors()',
      link: '/docs/libraries/utils/compare-colors',
    }, {
      text: 'colorToString()',
      link: '/docs/libraries/utils/color-to-string',
    }],
  },
]
