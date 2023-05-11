```yaml
title: 'Iconify SVG Framework Function: getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# SVG framework function: getIcon

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#getting-icons).

`include icon-components/functions/get-icon/intro`

## Usage

`include icon-components/functions/get-icon/props`

## Examples

```yaml
src: icon-components/iconify/get-icon.js
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
```

Another example:

```yaml
src: icon-components/iconify/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
```

Example with bad icon name, returns `null`:

```js
// null
const data = Iconify.getIcon('no-such-icon');
```
