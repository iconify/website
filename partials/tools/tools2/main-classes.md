```yaml
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyJSON: '../../types/iconify-json.md'
  IconifyInfo: '../../types/iconify-info.md'
  FullIconifyIcon: '../utils/full-iconify-icon.md'
  IconifyIconName: './icon-name.md'
  Color: '../utils/color.md'
  FullIconCustomisations: '../utils/icon-customisations.md'
  IconCustomisations: '../utils/icon-customisations.md'
  SVG: './svg/index.md'
  IconSet: './icon-set/index.md'
functions:
  mergeIconSets: './icon-set/merge.md'
```

In Iconify Tools all functions for parsing icons work with 2 main classes:

- `[type]SVG` represents one icon. This class is used when icon's elements need to be manipulated.
- `[type]IconSet` represents an icon set with easy to use functions for managing icons.
