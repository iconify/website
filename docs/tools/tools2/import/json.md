```yaml
title: Importing Iconify Icon Set
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '../../../types/iconify-json.md'
```

# Importing Iconify icon set

This tutorial is part of [import functions documentation](./index.md) in [Iconify Tools](../index.md).

There is no special function for importing icon set because it is redundant. All you have to do is read content from file, parse JSON data and create new `[type]IconSet` instance.

## Example

```yaml
src: tools/tools2/import/json-min.ts
title: 'example.ts'
```
