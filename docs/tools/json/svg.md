```yaml
title: SVG class in Iconify JSON Tools
```

# SVG class in Iconify JSON Tools

`include notices/json-tools`

Iconify JSON Tools is a lightweight library for working with icon sets in Iconify JSON format. See [Iconify JSON Tools documentation](./index.md).

SVG class represents an icon.

To include it use this code:

```yaml
src: tools/json/svg.js
title: Node.js
extra:
  - src: tools/json/svg.php
    title: PHP
```

## Initializing

To create new `[class]SVG` instance, you need to provide full icon data.

### Loading from collection

This example creates `[class]SVG` instance with data retrieved from a collection:

```yaml
src: tools/json/new-svg-collection.js
title: Node.js
extra:
  - src: tools/json/new-svg-collection.php
    title: PHP
```

## Getting <svg> {#get-svg}

The `[class]SVG` class has one function: `[func]getSVG()`. It returns `[tag]svg` string.

Function `[func]getSVG()` has one parameter: custom properties array. Possible array properties:

- `[prop]inline`, `[type]boolean or string`. If `[bool]true` or `[str]"true"` or `[str]"1"`, function will add `[prop]vertical-align` to style, making it behave like a glyph.
- `[prop]width` and `[prop]height` are dimensions of icon. If only one dimension is set, another dimension will be set using icon's width/height ratio. Value can be `[type]string` (such as `[str]"1em"`, `[str]"24px"` or a `[type]number`). If value is `[str]"auto"`, icon's original dimensions will be used. If both `[prop]width` and `[prop]height` are not set, `[prop]height` defaults to `[str]"1em"`.
- `[prop]hFlip` and `[prop]vFlip`. If `[bool]true` or `[str]"true"` or `[str]"1"` (`[type]string` or `[type]boolean`), icon will be flipped horizontally and/or vertically.
- `[prop]flip`, `[type]string` is an alternative to `[prop]hFlip` and `[prop]vFlip`. Value can be `[str]"horizontal"`, `[str]"vertical"` or `[str]"horizontal,vertical"`.
- `[prop]rotate` is for rotating icon. Value can be in degrees `[str]"90deg"` (only 90, 180 and 270 degrees rotations are available), percentages `[str]"25%"` (25%, 50% and 75% are aliases of `[str]90deg`, `[str]180deg` and `[str]270deg`) or number 1-3 (1 = `[str]90deg`, 2 = `[str]180deg`, 3 = `[str]270deg`).
- `[prop]align` is for icon alignment. This is useful if you have custom `[prop]width` and `[prop]height` set. Unlike other images, SVG keep aspect ratio (unless stated otherwise) when scaled. Value is comma or space separated string with possible strings (example: `[str]"left,top,crop"`):
  - `[str]left`, `[str]right`, `[str]center` are for horizontal alignment.
  - `[str]top`, `[str]middle`, `[str]bottom` are for vertical alignment.
  - `[str]crop` crop parts that go outside of boundaries.
  - `[str]meet` scale icon down to fit entire icon (opposite of `[str]crop`).
- `[prop]color` sets custom color string to replace `[str]currentColor`, `[type]string`. This is useful when using icon as background image because background image cannot use `[str]currentColor`.
- `[prop]box` adds a bounding box. If `[bool]true` or `[str]"true"` or `[str]"1"` (`[type]string` or `[type]boolean`), icon will include extra rectangle matching its `[attr]viewBox`. This is useful to export icon to editor making icon easier to scale or place into its position in sketch because often editors ignore `[attr]viewBox`.

All properties, except for `[prop]box` are similar to attributes used for icons in Iconify SVG Framework and various Iconify components and behave exactly the same way.

```yaml
src: tools/json/get-svg2.js
title: Node.js
extra:
  - src: tools/json/get-svg2.php
    title: PHP
```
