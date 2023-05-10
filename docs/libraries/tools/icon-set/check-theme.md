```yaml
title: Checking themes in icon set
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
  CommonIconProps: './entries.md#common'
functions:
  themes: './themes.md'
  prefixes: './themes.md'
  suffixes: './themes.md'
  export: './export.md'
```

# checkTheme()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]checkTheme()` finds all icons that belong to theme. It can be used to validate themes to make sure there are no empty or missing themes.

## Usage

Function has the following parameter:

- `[prop]prefix`, `[type]boolean`. What to check. If `true`, function checks `[func]prefixes`. If `false`, function checks `[func]suffixes`.

Function returns an object with the following properties:

- `[prop]valid`, `[type]Record<string, string[]>`. Icons that match theme. Key is theme name (not title!), value is array of icon names.
- `[prop]invalid`, `[type]string[]`. Icons that do not match any theme.

## Example

```yaml
src: libraries/tools/icon-set/check-theme.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/check-theme1.json
    title: 'Results:'
  - src: libraries/tools/icon-set/check-theme2.json
```
