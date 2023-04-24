```yaml
title: Iconify Alias Type
types:
  IconifyIcon: './iconify-icon.md'
  IconifyJSON: './iconify-json.md'
```

# IconifyAlias type

All Iconify libraries share common object structures. They are described as types in `[npm]@iconify/types` NPM package.

For description of types and short explanation of TypeScript see [types documentation](./index.md).

This article describes `[type]IconifyAlias` type.

## IconifyAlias type {#iconify-alias}

Type `[type]IconifyAlias` represents an alias for icon. It is used in Iconify JSON files.

What is an alias? An alias is icon that reuses another icon's properties.

`[icon]arrow-left` could be an alias of `[icon]arrow-right` with horizontal flip enabled. No need to create new shape when existing shape can be reused with a simple transformation.

`[icon]battery-empty` could be an alias of `[icon]battery-0` without any changes. This makes it possible to assign multiple names to the same icon.

## Structure

Type `[type]IconifyAlias` is similar to `[type]IconifyIcon`.

Properties:

- `[prop]parent`, `[type]string`. Name of parent icon, required.

Other properties are from `[type]IconifyOptional` type, they are shared with `[type]IconifyIcon` type.

`include types/iconify-optional`

### Parent icon

Parent icon name should not include icon set prefix and parent icon must be present in icon set.

If you use another alias as parent, make sure there are no circular dependencies. For example, if `[icon]arrow-left` is an alias of `[icon]arrow-right` (with horizontal flip), which in turn is an alias of `[icon]arrow-up` (with 90 degrees rotation), which in turn is an alias of `[icon]arrow-down` (with vertical flip), `[icon]arrow-down` could not be an alias of `[icon]arrow-left` because that would create a loop.

To be safe, use only icons as parent, not other aliases.

## Merging properties for icon and alias

If, when merging properties, an icon alias has a property that parent icon also has, the following rules apply:

- `[prop]hFlip` and `[prop]vFlip`. Result is `[js]icon.hFlip !== alias.hFlip`. That means if both icon and alias are flipped horizontally, result will not be flipped (horizontal flip + horizontal flip cancel each other). If only one of items is flipped horizontally, result will be flipped (horizontal flip + no flip = horizontal flip).
- `[prop]rotate`. Result is a sum of rotations. That means 90 degrees rotation + 180 degrees rotation = 270 degrees rotation.

For all other properties alias overrides parent icon's value.

Examples of merging icon and alias:

```yaml
src: types/icon-merge1.json
title: 'Icon:'
extra:
  - src: types/icon-merge1-alias.json
    title: 'Alias:'
  - src: types/icon-merge1-result.json
    title: 'Merged:'
```

In the example above, `[js]hFlip + hFlip = false`, `[js]!vFlip /* default value */ + vFlip = true`, other properties were overridden by alias.

## Examples

```yaml
src: types/alias-raw.json
title: 'IconifyAlias:'
extra:
  - src: types/alias-json.json
    title: 'IconifyJSON:'
  - src: types/alias-merged.json
    title: 'Merged "arrow-right" icon as IconifyIcon:'
```

```yaml
src: types/alias2-raw.json
title: 'IconifyAlias:'
extra:
  - src: types/alias2-json.json
    title: 'IconifyJSON:'
  - src: types/alias2-merged.json
    title: 'Merged "home" icon as IconifyIcon:'
```

```yaml
src: types/alias3-raw.json
title: 'IconifyAlias:'
extra:
  - src: types/alias3-json.json
    title: 'IconifyJSON:'
  - src: types/alias3-merged.json
    title: 'Merged "house-32" icon as IconifyIcon:'
```
