```yaml
title: List icons in category in icon set
types:
  IconSet: './index.md'
  IconifyJSON: '../../../types/iconify-json.md'
  IconCategory: './categories.md#type'
functions:
  categories: './categories.md'
```

# listCategory()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]listCategory()` lists icons that belong to a category.

Categories are used to filter icons when displayng icon set.

## Usage

Function has the following parameter:

- `[prop]category`, `[type]string | IconCategory`. Category name or item.

Function returns `[type]string[]` array of icon names.

Result does not include:

- Hidden icons (and their variations).
- Aliases.

This function automatically updates `[prop]count` property of `[type]IconCategory` item. If category is empty, category is removed from `[func]categories` property of icon set.

## Example

```yaml
src: tools/tools2/icon-set/list-category.ts
title: 'example.ts'
```
