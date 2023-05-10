```yaml
title: 'Iconify Icon Web Component Function: loadIcon'
types:
  IconifyIconName: './icon-name.md'
  FullIconifyIcon: '/docs/libraries/utils/full-iconify-icon.md'
functions:
  loadIcons: './load-icons.md'
```

# Web component function: loadIcon

This tutorial is part of [Iconify Icon web component tutorial](./index.md#functions).

`include icon-components/functions/load-icon/intro`

## Usage

`include icon-components/functions/load-icon/props`

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

Using `[type]Promise` syntax:

```yaml
src: icon-components/common/load-icon.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

Async/await syntax:

```yaml
src: icon-components/common/load-icon-async.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

If you want to load multiple icons, see `[func]loadIcons()`.
