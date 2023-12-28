```yaml
title: Icons data in icon set
types:
  IconSet: './index.md'
  IconSetIconEntry: './entries.md#type'
  IconifyIcon: '/docs/types/iconify-icon.md'
  IconCategory: './categories.md'
  CommonIconProps: './entries.md#common'
functions:
  setItem: './set-item.md'
  setIcon: './set-icon.md'
  setVariation: './set-variation.md'
  setAlias: './set-alias.md'
  remove: './remove.md'
  rename: './rename.md'
  categories: './categories.md'
```

# entries

This property is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Property `[prop]entries` contains data for all icons.

Avoid accessing `[prop]entries` if you can, use the following functions instead:

- `[func]remove(name)` removes icon.
- `[func]rename(oldName, newName)` renames icon.
- `[func]setIcon(name, icon)` adds/updates icon, using `[type]IconifyIcon` data.
- `[func]setVariation(name, parent, props)` creates a variation (alias with customisations) for icon.
- `[func]setAlias(name, parent)` creates an alias for icon.

## Icon types

`include libraries/tools/icon-set/icon-types`

## Structure

Property `[prop]entries` is a simple object, where key is icon name and value is `[type]IconSetIconEntry` entry.

## IconSetIconEntry type {#type}

Type `[type]IconSetIconEntry` is a set of 3 types:

- `[type]IconSetIcon` represents icon (`[js]type = 'icon'`).
- `[type]IconSetIconAlias` represents alias (`[js]type = 'alias'`).
- `[type]IconSetIconVariation` represents icon variation (`[js]type = 'variation'`).

To check the type, access `[prop]type` property of icon data.

## Properties

The following properties exist only in `[type]IconSetIcon` type:

- `[prop]body`, `[type]string`. Icon content.

The following properties exist on `[type]IconSetIcon` and `[type]IconSetIconVariation` types:

- `[prop]props`, `[type]CommonIconProps`. Icon data. See below.
- `[prop]categories`, `[type]Set<IconCategory>`. List of categories, see `[func]categories` property.

The following properties exist on `[type]IconSetIconVariation` and `[type]IconSetIconAlias` types:

- `[prop]parent`, `[type]string`. Parent item. Parent item can be any type, though usually it is an icon.

The following properties exist on all types:

- `[prop]chars`, `[type]Set<string>`. List of characters, see `[func]chars()` function.

### CommonIconProps type {#common}

Type `[type]CommonIconProps` is mix of common properties that exist in both `[type]ExtendedIconifyIcon` and `[type]ExtendedIconifyAlias` types. It is almost identical to `[type]IconifyIcon` type, but with small differences:

- New property: `[prop]hidden`, `[type]boolean`.
- Property `[prop]body` does not exist. It is available in `[type]IconSetIcon` type.
