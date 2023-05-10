```yaml
title: Iterate icons in icon set
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
functions:
  mergeIconSets: './merge.md'
```

# forEach()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]forEach()` runs a custom callback for all icons in icon set.

Function supports asynchronous callbacks. If you use asynchronous callback, function is asynchronous as well. If you use synchronous callback, you can treat function as synchronous.

## Usage

Function has the following parameters:

- `[prop]callback`. Callback. See below.
- `[prop]type`, `[type]string[]`. Optional. Icon types to iterate, default is `[js]['icon', 'variation', 'alias']` (all items).

## Callback

Callback can be synchronous or async. It has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]type`, `[type]string`. Icon type (see below).

If callback returns `false`, function stops iterating icons.

## Icon types

`include libraries/tools/icon-set/icon-types`

## Example

```yaml
src: libraries/tools/icon-set/for-each.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/for-each.txt
    title: 'Result:'
```
