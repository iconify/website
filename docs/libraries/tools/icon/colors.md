```yaml
title: Changing colors in SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  Color: '../../utils/color.md'
functions:
  stringToColor: '../../utils/string-to-color.md'
  colorToString: '../../utils/color-to-string.md'
```

# Parsing colors in SVG

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]parseColors()` parses colors in SVG.

It can:

- Find all colors.
- Replace colors.
- Add missing default color.

Function parses colors in:

- Stylesheets.
- Inline styles.
- Shapes, including gradients and filters.
- SVG animations that animate one of color attributes.

Function does not parse colors in:

- Masks.

## Usage

Function has the following parameters:

- `[prop]svg`, `[type]SVG`. Icon instance.
- `[prop]options`, `[type]object`. Options.

Function returns array of colors.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Colors

Colors used in callback and returned by function can be two types:

- `[type]Color` object, same as in [Iconify Utils](../../utils/index.md).
- `[type]string`. Value is a string if color cannot be parsed.

## Options

Options object has the following properties:

- `[prop]defaultColor`, `[type]Color | string`. Default color to add to shapes that use system default color. See below.
- `[prop]callback`, `[type]function`. Callback to call for each color. See below.

### Default color

Some icons use system color. Example:

```xml
<svg viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg" width="1200" height="400">
    <path d="M300 200H150A150 150 0 10300 50z"/>
</svg>
```

In that icon path uses default fill. In Iconify all icons should use colors set by `[prop]color` attribute, which means shapes should use `[str]currentColor` for fill.

If you set `[prop]defaultColor` option, parser will automatically set color for shapes that use default color.

Example:

```yaml
src: libraries/tools/icon/color-default.ts
title: 'default-color.ts'
extra:
  - src: libraries/tools/icon/color-default.svg
    title: 'Result:'
```

### Replacing colors

With `[prop]callback` option you can replace colors.

Callback has the following parameters:

- `[prop]attr`, `[type]string`. Attribute where color is used, such as `[str]fill` or `[str]stroke`.
- `[prop]colorStr`, `[type]string`. Color value as string.
- `[prop]color`, `[type]Color | null`. Parsed color value. If color can be parsed, callback will have `[type]Color` value. If color cannot be parsed, callback will have `[type]null` value.
- `[prop]tagName`, `[type]string`. Optional parameter. Name of tag where color is found. If color is found in stylesheet, parameter will be `[type]undefined`.

Callback should return:

- `[type]Color` or `[type]string` to set new color. If you do not want to change color, return color passed to callback (either `[prop]colorStr` or non-null `[prop]color` object).
- `[str]remove` to remove element. This is used to remove stuff like white background rectangle left by some editors.
- `[str]unset` to remove color.

Callback can be asynchronous.

Example

```yaml
src: libraries/tools/icon/colors.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/colors.json
    title: 'Result:'
```
