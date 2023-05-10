```yaml
title: Add icon alias to icon set
types:
  IconSet: './index.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setAlias()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]setAlias()` adds new icon alias.

## Alias

Icon alias is a different name for icon. It is usually used when renaming icon to allow users access icon using old name.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]parent`, `[type]string`. Parent item name.

Function returns a simple `true` on success, `false` on failure.

## Example

```yaml
src: libraries/tools/icon-set/set-alias.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/set-alias.json
    title: 'Result:'
```
