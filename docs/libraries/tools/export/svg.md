```yaml
title: Exporting Icons as SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  toString: '../icon-set/to-string.md'
  forEach: '../icon-set/for-each.md'
```

# Exporting SVG

This tutorial is part of [export functions documentation](./index.md) in [Iconify Tools](../index.md).

`[type]IconSet` instance has `[func]toString()` function that exports icon as `[type]string`. You can use `[func]forEach()` to loop all icons in icon set.

## Example

```yaml
src: libraries/tools/export/svg.ts
title: 'example.ts'
```
