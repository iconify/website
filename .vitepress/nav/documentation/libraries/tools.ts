import type { SidebarItem } from '../../sidebar-item'

const root = '/docs/libraries/tools/'
const iconSetRoot = `${root}icon-set/`
const iconRoot = `${root}icon/`
const packageRoot = `${root}package/`

export const ToolsSidebar: SidebarItem[] = [
  {
    text: 'SVG Class',
    link: `${root}svg/`,
  },
  {
    text: 'IconSet Class',
    link: iconSetRoot,
    items: [{
      text: 'Icons',
      collapsed: true,
      items: [{
        text: 'list()',
        link: `${iconSetRoot}list`,
      },
      {
        text: 'forEach()',
        link: `${iconSetRoot}for-each`,
      },
      {
        text: 'exists()',
        link: `${iconSetRoot}exists`,
      },
      {
        text: 'count()',
        link: `${iconSetRoot}count`,
      },
      {
        text: 'remove()',
        link: `${iconSetRoot}remove`,
      },
      {
        text: 'rename()',
        link: `${iconSetRoot}rename`,
      },
      {
        text: 'setItem()',
        link: `${iconSetRoot}set-item`,
      },
      {
        text: 'setIcon()',
        link: `${iconSetRoot}set-icon`,
      },
      {
        text: 'setVariation()',
        link: `${iconSetRoot}set-variation`,
      },
      {
        text: 'setAlias()',
        link: `${iconSetRoot}set-alias`,
      },
      {
        text: 'getTree()',
        link: `${iconSetRoot}get-tree`,
      },
      {
        text: 'entries()',
        link: `${iconSetRoot}entries`,
      }],
    }, {
      text: 'Importing',
      collapsed: true,
      items: [{
        text: 'prefix',
        link: `${iconSetRoot}prefix`,
      },
      {
        text: 'resolve()',
        link: `${iconSetRoot}resolve`,
      },
      {
        text: 'load()',
        link: `${iconSetRoot}load`,
      },
      {
        text: 'export()',
        link: `${iconSetRoot}export`,
      },
      {
        text: 'toSVG()',
        link: `${iconSetRoot}to-svg`,
      },
      {
        text: 'fromSVG()',
        link: `${iconSetRoot}from-svg`,
      },
      {
        text: 'toString()',
        link: `${iconSetRoot}to-string`,
      }],
    }, {
      text: 'Metadata',
      collapsed: true,
      items: [{
        text: 'info()',
        link: `${iconSetRoot}info`,
      },
      {
        text: 'chars()',
        link: `${iconSetRoot}chars`,
      },
      {
        text: 'toggleCharacter()',
        link: `${iconSetRoot}toggle-character`,
      },
      {
        text: 'listCategory()',
        link: `${iconSetRoot}list-category`,
      },
      {
        text: 'toggleCategory()',
        link: `${iconSetRoot}toggle-category`,
      },
      {
        text: 'categories',
        link: `${iconSetRoot}categories`,
      },
      {
        text: 'checkTheme()',
        link: `${iconSetRoot}check-theme`,
      },
      {
        text: 'suffixes/prefixes',
        link: `${iconSetRoot}themes`,
      }],
    },
    {
      text: 'mergeIconSets()',
      link: `${iconSetRoot}merge`,
    }],
  }, {
    text: 'Cleanup/Validation',
    link: `${iconRoot}cleanup`,
  }, {
    text: 'ResolvedIconifyIcon',
    link: `${root}iconify-icon`,
    hidden: true,
  }, {
    text: 'Icon Manipulation',
    link: iconRoot,
    collapsed: true,
    items: [{
      text: 'runSVGO()',
      link: `${iconRoot}svgo`,
    }, {
      text: 'parseColors()',
      link: `${iconRoot}colors`,
    }, {
      text: 'deOptimisePaths()',
      link: `${iconRoot}paths`,
    }, {
      text: 'scaleSVG()',
      link: `${iconRoot}scale`,
    }, {
      text: 'convertSVGToMask()',
      link: `${iconRoot}mask`,
    }],
  }, {
    text: 'Import',
    link: `${root}import/`,
    collapsed: true,
    items: [{
      text: 'IconifyJSON',
      link: `${root}import/json`,
    }, {
      text: 'Single SVG',
      link: `${root}import/svg`,
    }, {
      text: 'Directory',
      link: `${root}import/directory`,
    }, {
      text: 'Figma',
      link: `${root}import/figma/`,
      items: [{
        text: 'Getting File ID',
        link: `${root}import/figma/file-id`,
      }, {
        text: 'Getting Access Token',
        link: `${root}import/figma/token`,
      }, {
        text: 'Types',
        link: `${root}import/figma/types`,
      }],
    }],
  }, {
    text: 'Export',
    link: `${root}export/`,
    collapsed: true,
    items: [{
      text: 'IconifyJSON',
      link: `${root}export/json`,
    }, {
      text: 'Single SVG',
      link: `${root}export/svg`,
    }, {
      text: 'Directory',
      link: `${root}export/directory`,
    }, {
      text: 'IconifyJSON Package',
      link: `${root}export/json-package`,
    }, {
      text: 'Icon Package',
      link: `${root}export/icon-package`,
    }],
  }, {
    text: 'Managing Packages',
    link: packageRoot,
    collapsed: true,
    items: [{
      text: 'Download Packages',
      collapsed: true,
      items: [{
        text: 'Git Repository',
        link: `${packageRoot}git`,
      }, {
        text: 'GitHub API',
        link: `${packageRoot}github`,
      }, {
        text: 'GitLab API',
        link: `${packageRoot}gitlab`,
      }, {
        text: 'NPM Package',
        link: `${packageRoot}npm`,
      }],
    }, {
      text: 'Versions',
      collapsed: true,
      items: [{
        text: 'Increase Version',
        link: `${packageRoot}bump-version`,
      }, {
        text: 'NPM Version',
        link: `${packageRoot}npm-version`,
      }, {
        text: 'Package Version',
        link: `${packageRoot}package-version`,
      }, {
        text: 'Git Repo Hash',
        link: `${packageRoot}git-repo-hash`,
      }, {
        text: 'GitHub Last Commit',
        link: `${packageRoot}github-commit`,
      }, {
        text: 'GitLab Last Commit',
        link: `${packageRoot}gitlab-commit`,
      }],
    }, {
      text: 'Helper Functions',
      collapsed: true,
      items: [{
        text: 'Compare Directories',
        link: `${packageRoot}compare`,
      }, {
        text: 'Send API Query',
        link: `${packageRoot}api-query`,
      }, {
        text: 'Download File',
        link: `${packageRoot}download-file`,
      }],
    }],
  }, {
    text: 'Examples',
    collapsed: true,
    link: `${root}examples/`,
    items: [{
      text: 'Export all Iconify icon sets as SVG',
      link: `${root}examples/export-svg`,
    }, {
      text: 'Import icon set from Figma',
      link: `${root}examples/import-figma`,
    }, {
      text: 'Convert Material Design Icons to Iconify JSON format',
      link: `${root}examples/import-mdi`,
    }, {
      text: 'Convert FontAwesome Pro to Iconify JSON format',
      link: `${root}examples/import-fa-pro`,
    }],
  }, {
    text: 'Import Limitations',
    link: `${root}tags`,
  },
]
