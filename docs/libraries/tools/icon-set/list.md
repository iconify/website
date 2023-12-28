```yaml
title: List icons in icon set
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: './merge.md'
```

# list()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]list()` lists all icons in an icon set.

## Usage

The function has the following parameter:

- `[prop]type`, `[type]string[]`. Optional. Icon types to list, default is `[js]['icon', 'variation']`.

Function returns an array of icon names `[type]string[]`.

## Icon types

`include libraries/tools/icon-set/icon-types`

## Example

```yaml
src: libraries/tools/icon-set/list.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/list.json
    title: 'Result of export():'
```
