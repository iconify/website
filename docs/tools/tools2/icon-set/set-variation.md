```yaml
title: Add icon variation to icon set
types:
  IconSet: './index.md'
  IconifyIcon: '../../../types/iconify-icon.md'
  ResolvedIconifyIcon: '../iconify-icon.md'
  CommonIconProps: './entries.md#common'
functions:
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
```

# setVariation()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]setVariation()` adds new icon variation to icon set or overwrites existing item.

## Variation

Icon variation is an item that is based on different icon, but has at least one transformation applied to it.

For example, `[str]arrow-left` can be a variation of `[str]arrow-right` with `[prop]hFlip` enabled.

Variations make it easier to maintain icons that are based on other icons and reduce content duplication.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]parent`, `[type]string`. Parent item name.
- `[prop]props`, `[type]CommonIconProps`. Icon transformations.

Function returns a simple `true` on success, `false` on failure.

## Example

```yaml
src: tools/tools2/icon-set/set-alias.ts
title: 'example.ts'
extra:
  - src: tools/tools2/icon-set/set-alias.json
    title: 'Result:'
```
