```yaml
title: Rename icon in icon set
types:
  IconSet: './index.md'
  IconifyJSON: '../../../types/iconify-json.md'
functions:
  export: './export.md'
  toggleCharacter: './toggle-character.md'
```

# rename()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]rename()` renames icon.

Function checks aliases and variations that use renamed icon, changes parent icon to new name.

If icon with new name already exists, it will be overwritten.

## Usage

Function has the following parameters:

- `[prop]oldName`, `[type]string`. Old icon name.
- `[prop]newName`, `[type]string`. New icon name.

Function returns a simple `true` on success, `false` on failure.

## Example

```yaml
src: tools/tools2/icon-set/rename.ts
title: 'example.ts'
extra:
  - src: tools/tools2/icon-set/rename.json
    title: 'Result:'
```
