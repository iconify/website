```yaml
title: Exporting Iconify Icon Set
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: '../icon-set/export.md'
```

# Exporting Iconify icon set

This tutorial is part of [export functions documentation](./index.md) in [Iconify Tools](../index.md).

`[type]IconSet` instance has `[func]export()` function that exports icon set in `[type]IconifyJSON` format.

Then you need to convert it to string using `[func]JSON.stringify()` and save it to file.

## Example

```yaml
src: libraries/tools/export/json.ts
title: 'example.ts'
```
