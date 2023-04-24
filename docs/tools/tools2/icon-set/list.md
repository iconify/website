```yaml
title: List icons in icon set
types:
  IconifyJSON: '../../../types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: './merge.md'
```

# list()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]list()` lists all icons in an icon set.

It replaces existing icon set data, so it is identical to creating new `[type]IconSet` instance. If you want to merge icon sets instead, see `[func]mergeIconSets()` function.

## Usage

Function has the following parameter:

- `[prop]type`, `[type]string[]`. Optional. Icon types to list, default is `[js]['icon', 'variation']`.

Function returns array of icon names `[type]string[]`.

## Icon types

`include tools/tools2/icon-set/icon-types`

## Example

```yaml
src: tools/tools2/icon-set/list.ts
title: 'example.ts'
extra:
  - src: tools/tools2/icon-set/list.json
    title: 'Result of export():'
```
