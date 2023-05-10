```yaml
title: Add icon to icon set
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setIcon()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]setIcon()` adds new icon to icon set or overwrites existing item.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]icon`, `[type]ResolvedIconifyIcon`. Icon data, same as `[type]IconifyIcon`, but with other optional properties.

Function returns a simple `true` on success, `false` on failure.

## Example

```yaml
src: libraries/tools/icon-set/export.ts
title: 'example.ts'
```
