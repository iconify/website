```yaml
title: Merge icon sets with Iconify Tools
types:
  IconSet: './index.md'
```

# mergeIconSets()

This function is part of [Iconify Tools package](../index.md).

Function `[func]mergeIconSets()` merges to icon sets, creating new `[type]IconSet` instance.

## Why merge icon sets?

When you update an icon set, often old icons are lost.
If someone is using an old icon, which no longer exists or was renamed, removing that icon will result in a broken UI.
This is why icons should never be removed.

Merging new icon set and old icon set ensures that icons are never removed.
Merge process adds missing icons, but marks them as hidden,
so they are not shown in icons list, but are available to anyone using old icons.

This function attempts to detect renamed icons, creating aliases for those icons.

## Usage

Function has the following parameters:

- `[prop]oldIcons`, `[type]IconSet`. Old version of icon set.
- `[prop]newIcons`, `[type]IconSet`. New version of icon set.

Function does not modify icon sets passed in parameters, it creates new `[type]IconSet` instance and returns it.

## Example

```yaml
src: libraries/tools/merge-icon-sets.ts
title: 'example.ts'
extra:
  - src: libraries/tools/merge-icon-sets.json
    title: 'Result:'
```
