```yaml
title: Categories data in icon set
types:
  IconSet: './index.md'
  IconCategory: './categories.md#type'
functions:
  listCategory: './list-category.md'
```

# categories

This property is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Property `[prop]categories` contains list of categories.

## Structure

Property `[prop]categories` is a `[type]Set` of `[type]IconCategory` entries.

## IconCategory type {#type}

Type `[type]IconCategory` has the following properties:

- `[prop]title`, `[type]string`. Category title.
- `[prop]count`, `[type]number`. Number of icons.

Number of icons is approximate, to get exact number use `[func]listCategory()` function. Runing `[func]listCategory()` updates `[type]IconCategory` entry and deletes empty categories.
