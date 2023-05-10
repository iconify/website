```yaml
title: Remove icon from icon set
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
```

# remove()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]remove()` deletes icon.

## Usage

Function has the following parameters:

- `[type]name`, `[type]string`. Icon name.
- `[type]removeDependencies`, `[type]boolean | string`. Optional, default is `true`. What to do with aliases and variations that use removed icon as parent icon.

Function returns `[type]number` of removed items.

Possible values for `[prop]removeDependencies` property:

- `true` removes icon, all aliases and variations.
- `false` removes only icon, does not change aliases and variations.
- `[type]string` removes icon, changes `[prop]parent` property for aliases and variations to provided value.

## Example

```yaml
src: libraries/tools/icon-set/remove.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/remove.json
    title: 'Result:'
```
