```yaml
title: 'Iconify SVG Framework Function: loadIcon'
functions:
  scan: './scan.md'
  loadIcons: './load-icons.md'
types:
  IconifyIconName: './icon-name.md'
  FullIconifyIcon: '/docs/libraries/utils/full-iconify-icon.md'
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
```

# SVG framework function: loadIcon

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

```yaml
include: icon-components/functions/load-icon/intro
replacements:
  - search: 'component'
    replace: 'SVG framework'
```

## Usage

`include icon-components/functions/load-icon/props`

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

Using `[type]Promise` syntax:

```yaml
src: icon-components/iconify/load-icon-global.html
```

Async/await syntax:

```yaml
src: icon-components/iconify/load-icon-await.js
```

If you want to load multiple icons, see `[func]loadIcons()`.
