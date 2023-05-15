```yaml
title: IconifyIconCustomisations Type
types:
  IconifyIconSize: './icon-customisations.md#icon-size'
functions:
  defaultIconCustomisations: './default-icon-customisations.md'
  iconToSVG: './icon-to-svg.md'
  mergeCustomisations: './merge-customisations.md'
```

# IconifyIconCustomisations type

`[type]IconifyIconCustomisations` type is used in [Iconify Utils](./index.md) in functions for generating SVG.

You can find this type in `[file]src/customisations/defaults.ts` of [Iconify Utils source code](https://github.com/iconify/iconify/tree/main/packages/utils).

Type is an object, with the following properties, split into groups:

## Dimensions {#icon-size}

Icon dimensions, which has type `[type]IconifyIconSizeCustomisations`, have 2 properties:

- `[prop]width`, `[type]IconifyIconSize` icon width.
- `[prop]height`, `[type]IconifyIconSize` icon height.

Type `[type]IconifyIconSize` is alias for `[type]null | string | number`. Possible values are:

- `[type]number` number in pixels.
- `[type]string` number with units, such as `[str]1em`.

There are several special keywords:

- `[str]auto` sets dimension to value from icon's `[attr]viewBox`. So if icon has `[attr]viewBox="0 0 24 24"`, setting `[prop]width` to `[str]auto` sets it to `[num]24`.
- `[str]unset` and `[str]none` tell function to skip attribute. This makes it easy to use `[prop]width` and `[prop]height` in CSS.

When calculating icon dimensions, setting one dimension (usually `[attr]height`) is enough. Another dimension will be automatically calculated using icon's proportions.

If both `[prop]width` and `[prop]height` are not set or `null`, by default `[prop]height` will be set to `[str]1em`.

## Transformations

Icon can be transformed. Transformations are done by rotating or flipping content inside SVG, these are not CSS transformations. Properties for transforming icon:

- `[prop]hFlip`, `[type]boolean`. Flips icon horizontally.
- `[prop]vFlip`, `[type]boolean`. Flips icon vertically.
- `[prop]rotate`, `[type]number`. Rotates icon in 90 degrees steps. `[num]1` is `[prop]90deg`, `[num]2` is `[prop]180deg`, `[num]3` is `[prop]270deg`. Rotation is limited only to these angles because these angles guarantee that icon content does not go beyond `[prop]viewBox` boundaries. If you want to rotate using different angle, use CSS rotation that rotates an entire icon with bounding box.

If you want to pick only transformations from customisations, use type `[type]IconifyTransformations`.

## FullIconifyIconCustomisations type

Type `[type]FullIconifyIconCustomisations` is the same as `[type]IconifyIconCustomisations`, but all properties are required.

Use `[func]defaultIconCustomisations` constant to get all default values and merged it with your values:

```yaml
src: libraries/utils/icon-customisations.ts
title: 'example.ts'
```

Then result can be used with `[func]mergeCustomisations()` function.

Also see `[func]defaultIconCustomisations` constant.
