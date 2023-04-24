```yaml
title: Load icon set
types:
  IconifyJSON: '../../../types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: '../index.md'
  validateIconSet: '../../utils/validate-icon-set.md'
```

# load()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]load()` loads icon set from `[type]IconifyJSON` data.

It replaces existing icon set data, so it is identical to creating new `[type]IconSet` instance. If you want to merge icon sets instead, see `[func]mergeIconSets()` function.

## Validation

Function does not validate icon set. If you are not sure about source, you need to validate it using `[func]validateIconSet()` from [Iconify Utils](../../utils/index.md).

## Example

```yaml
src: tools/tools2/icon-set/load.ts
title: 'example.ts'
```
