import type { SidebarItem } from '../siderbar-item'

export const ToolsSidebar: SidebarItem[] = [
  {
    text: 'Iconify Tools',
    link: '/docs/tools/tools2/',
    collapsed: true,
    items: [
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
    ],
  },
  {
    text: 'Iconify Utils',
    collapsed: true,
    items: [
      { text: 'Iconify Utils', link: '/docs/tools/utils/' },
      {
        text: 'Examples',
        collapsed: true,
        link: '/docs/tools/utils/examples/',
        items: [{
          text: 'Export icon set',
          link: '/docs/tools/utils/examples/export-svgs-from-icon-set',
        }, {
          text: 'Export SVG from icon set',
          link: '/docs/tools/utils/examples/export-svg-from-icon-set',
        }, {
          text: 'Export SVG from icon data',
          link: '/docs/tools/utils/examples/export-svg-from-data',
        }, {
          text: 'Export CSS',
          link: '/docs/tools/utils/examples/generate-css',
        }],
      },
      {
        text: 'Icon Sets',
        collapsed: true,
        items: [{
          text: 'validateIconSet()',
          link: '/docs/tools/utils/validate-icon-set',
        }, {
          text: 'quicklyValidateIconSet()',
          link: '/docs/tools/utils/quickly-validate-icon-set',
        }, {
          text: 'getIcons()',
          link: '/docs/tools/utils/get-icons',
        }, {
          text: 'getIconData()',
          link: '/docs/tools/utils/get-icon-data',
        }, {
          text: 'minifyIconSet()',
          link: '/docs/tools/utils/minify-icon-set',
        }, {
          text: 'expandIconSet()',
          link: '/docs/tools/utils/expand-icon-set',
        }, {
          text: 'convertIconSetInfo()',
          link: '/docs/tools/utils/convert-info',
        }, {
          text: 'parseIconSet()',
          link: '/docs/tools/utils/parse-icon-set',
        }],
      },
      {
        text: 'Icon',
        collapsed: true,
        items: [{
          text: 'mergeIconData()',
          link: '/docs/tools/utils/merge-icon-data',
        }, {
          text: 'defaultIconProps',
          link: '/docs/tools/utils/default-icon-props',
        }],
      },
      {
        text: 'Customisations',
        collapsed: true,
        items: [{
          text: 'mergeCustomisations()',
          link: '/docs/tools/utils/merge-customisations',
        }, {
          text: 'defaultIconCustomisations',
          link: '/docs/tools/utils/default-icon-customisations',
        }, {
          text: 'toBoolean()',
          link: '/docs/tools/utils/to-boolean',
        }, {
          text: 'rotateFromString()',
          link: '/docs/tools/utils/rotate-from-string',
        }, {
          text: 'flipFromString()',
          link: '/docs/tools/utils/flip-from-string',
        }],
      },
      {
        text: 'SVG',
        collapsed: true,
        items: [{
          text: 'iconToSVG()',
          link: '/docs/tools/utils/icon-to-svg',
        }, {
          text: 'iconToHTML()',
          link: '/docs/tools/utils/icon-to-html',
        }, {
          text: 'calculateSize()',
          link: '/docs/tools/utils/calculate-size',
        }, {
          text: 'replaceIDs()',
          link: '/docs/tools/utils/replace-ids',
        }],
      },
      {
        text: 'CSS',
        collapsed: true,
        items: [{
          text: 'getIconCSS()',
          link: '/docs/tools/utils/get-icon-css',
        }, {
          text: 'getIconsCSS()',
          link: '/docs/tools/utils/get-icons-css',
        }],
      },
      {
        text: 'Icon Name',
        collapsed: true,
        items: [{
          text: 'matchName',
          link: '/docs/tools/utils/match-name',
        }, {
          text: 'stringToIcon()',
          link: '/docs/tools/utils/string-to-icon',
        }, {
          text: 'validateIconName()',
          link: '/docs/tools/utils/validate-icon',
        }],
      },
      {
        text: 'Colors',
        collapsed: true,
        items: [{
          text: 'stringToColor()',
          link: '/docs/tools/utils/string-to-color',
        }, {
          text: 'compareColors()',
          link: '/docs/tools/utils/compare-colors',
        }, {
          text: 'colorToString()',
          link: '/docs/tools/utils/color-to-string',
        }],
      },
    ],
  },

]
