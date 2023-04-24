```yaml
title: 'Iconify for Vue Function: loadIcon'
types:
  IconifyIconName: './icon-name.md'
  FullIconifyIcon: '../../tools/utils/full-iconify-icon.md'
functions:
  loadIcons: './load-icons.md'
```

# Iconify for Vue function: loadIcon

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

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
    replace: '@iconify/vue'
```

Async/await syntax:

```yaml
src: icon-components/common/load-icon-async.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/vue'
```

If you want to load multiple icons, see `[func]loadIcons()`.
