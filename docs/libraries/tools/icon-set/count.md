```yaml
title: Count icons in icon set
types:
  IconSet: './index.md'
```

# count()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]count()` counts icons in icon set.

## Usage

Function has no parameters.

Function returns `[type]number` of icons.

## What icons are counted? {#logic}

Counted:

- Icons.
- Variations (see below).

Not counted:

- Hidden icons and their aliases/variations.
- Aliases.

## Icon types

`include libraries/tools/icon-set/icon-types`

## Example

```yaml
src: libraries/tools/icon-set/count.ts
title: 'example.ts'
```
