```yaml
title: 'Iconify Icon Web Component Function: disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# Web component function: disableCache

This tutorial is part of [Iconify Icon web component tutorial](./index.md#functions).

`include icon-components/functions/cache/intro-disable`

## Usage

`include icon-components/functions/cache/props`

## Storage types

`include icon-components/functions/cache/storage-types`

## Examples

```yaml
src: icon-components/common/disable-cache.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

Another example:

```yaml
src: icon-components/common/disable-cache2.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

## Notes

`include icon-components/functions/cache/notes`
