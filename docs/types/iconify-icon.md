```yaml
title: Iconify Icon Type
types:
  IconifyAlias: './iconify-alias.md'
  IconifyJSON: './iconify-json.md'
functions:
  getIconData: '../tools/utils/get-icon-data.md'
  defaultIconProps: '../tools/utils/default-icon-props.md'
```

# IconifyIcon type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article describes `[type]IconifyIcon` type.

## Usage

Icon data in `[type]IconifyIcon` type is usually extracted from `[type]IconifyJSON` icon set.

To extract icon data in your code, use `[func]getIconData()` function from Iconify Utils.

## Structure

Type `[type]IconifyIcon` is a simple object. It has two parts:

- `[prop]body`, `[type]string` contains icon content, mandatory.
- Optional `[type]IconifyOptional` properties that contain icon dimensions and transformations.

Example of a basic icon:

```yaml
src: types/icon-basic.json
copy: false
```

## Body

Body contains contents of `[tag]svg`, without `[tag]svg` tag.

It does not include `[tag]svg` tag because:

- Contents can be manipulated, such as rotating or flipping an icon. This is much easier to do when there is no need to parse an entire `[tag]svg`.
- It gives components full control over `[tag]svg` tag, allowing addition/removal of custom attributes.
- Makes it easy to use in various frameworks (such as React, Vue, Svelte), where `[tag]svg` element is created using framework's native code and content is set as its property.

## Optional properties {#iconify-optional}

There are several properties that are shared in multiple types. They are described in `[type]IconifyOptional` type.

`include types/iconify-optional`

Example of typical icon data:

```yaml
src: types/icon-basic2.json
copy: false
```

In your code you can get default values from `[var]defaultIconProps` constant from [Iconify Utils](../tools/utils/index.md).
