```yaml
title: 'Iconify SVG Framework Function: disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# SVG framework function: disableCache

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

This function is part of API module and is not available in [bundle without API support](./without-api.md).

```yaml
include: icon-components/functions/cache/intro-disable
replacements:
  - search: component
    replace: SVG framework
```

## Usage

`include icon-components/functions/cache/props`

## Storage types

`include icon-components/functions/cache/storage-types`

## Examples

```js
// Disable caching in localStorage
Iconify.disableCache('local');
```

```js
// Disable all caching
Iconify.disableCache('all');
```

## Notes

`include icon-components/functions/cache/notes`
