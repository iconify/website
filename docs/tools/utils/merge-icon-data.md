```yaml
title: mergeIconData() in Iconify Utils
types:
  IconifyIcon: '../../types/iconify-icon.md'
  IconifyOptional: '../../types/iconify-icon.md#iconify-optional'
```

# mergeIconData()

This function is part of [Iconify Utils package](./index.md).

Function `[func]mergeIconData()` merges data for icon and alias.

## Merging logic

When combining icon and alias, properties cannot be simply merged. This is because transformations for alias are relative to parent icons's transformations.

For example, if icon has 90 degrees rotation and alias also has 90 degrees rotation, result is 180 degrees rotation. Same for horizontal and vertical flip.

## Usage

Function has the following parameters:

- `[prop]icon`, `[type]IconifyIcon`. Icon data.
- `[prop]alias`, `[type]IconifyOptional`. Alias data.

Function returns merged icon data.

## Example

```yaml
src: tools/utils/merge-icon-data.ts
title: 'usage.ts'
extra:
  - src: tools/utils/merge-icon-data.json
    title: 'Result 1:'
  - src: tools/utils/merge-icon-data2.json
    title: 'Result 2:'
```
