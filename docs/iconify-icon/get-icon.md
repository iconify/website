```yaml
title: 'Iconify Icon Web Component Function: getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Web component function: getIcon

This tutorial is part of [Iconify Icon web component tutorial](./index.md#functions).

`include icon-components/functions/get-icon/intro`

## Usage

`include icon-components/functions/get-icon/props`

## Examples

```yaml
src: icon-components/common/get-icon.js
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

Another example:

```yaml
src: icon-components/common/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

Example with bad icon name, returns `null`:

```yaml
src: icon-components/common/get-icon-null.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```
