```yaml
title: Add item to icon set
types:
  IconSet: './index.md'
  IconifyIcon: '../../../types/iconify-icon.md'
  IconSetIconEntry: './entries.md#type'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setItem()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]setItem()` adds new item to icon set or overwrites existing item. If item is an alias or variation, function checks for parent icon.

This function is not simple to use. Better use one of simpler functions:

- `[func]setIcon()` to set icon.
- `[func]setVariation()` to set icon variation.
- `[func]setAlias()` to set icon alias.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]item`, `[type]IconSetIconEntry`. Icon data.

Function returns a simple `true` on success, `false` on failure.
