```yaml
title: Export icon set
types:
  IconSet: './index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
```

# export()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]export()` exports icon set as `[type]IconifyJSON` object.

## Usage

Function has the following parameters:

- `[prop]validate`, `[type]boolean`. Optional. If enabled, icons will be validated before export.

Function returns `[type]IconifyJSON` object.

Result includes all metadata. If icon set has information property, export will automatically update total number of icons in info block.

## Example

```yaml
src: libraries/tools/icon-set/export.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/export.json
    title: 'Result:'
```
