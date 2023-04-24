```yaml
title: Assign category to icons in icon set
types:
  IconSet: './index.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconCategory: './categories.md'
functions:
  categories: './categories.md'
```

# toggleCategory()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]toggleCategory()` adds category to icon.

Categories are used to filter icons when displayng icon set.

## Usage

Function has the following parameter:

- `[prop]iconName`, `[type]string`. Icon name.
- `[prop]category`, `[type]string`. Category name.
- `[prop]add`, `[type]boolean`. If `true`, category will be added to icon. If `false`, category will be removed.

Function returns `true` on success, `false` on failure.

## Example

```yaml
src: tools/tools2/icon-set/list-category.ts
title: 'example.ts'
```
