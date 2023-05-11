```yaml
title: 'Iconify for Vue Function: getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Iconify for Vue function: getIcon

This tutorial is part of [Iconify for Vue functions tutorial](./index.md#functions).

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
  - search: react
    replace: vue
```

Another example:

```yaml
src: icon-components/common/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
replacements:
  - search: react
    replace: vue
```

Example with bad icon name, returns `null`:

```yaml
src: icon-components/common/get-icon-null.js
replacements:
  - search: react
    replace: vue
```
