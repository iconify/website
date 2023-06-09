```yaml
title: 'Iconify SVG Framework Function: enableCache'
functions:
  disableCache: './disable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# SVG framework function: enableCache

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#api).

```yaml
include: icon-components/functions/cache/intro-enable
replacements:
  - search: component
    replace: SVG framework
```

## Usage

`include icon-components/functions/cache/props-enable`

## Storage types

`include icon-components/functions/cache/storage-types`

## Examples

```js
// Enable caching in localStorage
Iconify.enableCache('local');
```

Another example:

```js
// Disable all caching
Iconify.enableCache('all', false);
```

## Notes

`include icon-components/functions/cache/notes`
