```yaml
title: Get icon dependencies tree from icon set
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconSet: './index.md'
```

# getTree()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]getTree()` returns list of parent icons for each icon in icon set, `null` for icons that cannot be resolved.

It is useful when you need to figure out which icons need to be exported when exporting a subset of icons, it can be used to figure out which icons have invalid parent icons.

## Usage

Function has the following optional parameter:

- `[prop]names`, `[type]string[]`. List of icons to check. If not set, all icons will be checked.

Function will return object, where key is icon name, value is:

- `null` if icon cannot be resolved.
- `[type]string[]` array of parent icon names, excluding icon. First entry is direct parent.

## Example

```yaml
src: libraries/tools/icon-set/get-tree.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/get-tree.json
    title: 'Result:'
```
