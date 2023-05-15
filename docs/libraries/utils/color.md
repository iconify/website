```yaml
title: Color Type
```

# Color type

`[type]Color` type is used in [Iconify Utils](./index.md) in functions for parsing colors.

You can find this type in `[file]src/colors/types.ts` of [Iconify Utils source code](https://github.com/iconify/iconify/tree/main/packages/utils).

Type is an object, with `[prop]type` property showing what color type it is, then optional properties for that type.

## RGB

RGB color, usually converted from hexadecimal color like `[str]#ff8080`, color keyword `[str]red` or RGBA color like `[str]rgba(255, 128, 128, 0.5)`.

It has the following properties:

- `[prop]type` = `[str]rgb`.
- `[prop]r`, `[prop]g`, `[prop]b` red, green and blue color components (`[num]0` - `[num]255`).
- `[prop]alpha` alpha (`[num]0` - `[num]1`).

## HSL

HSL color, usually converted from HSL or HSLA color like `[str]hsla(90, 50%, 50%, 0.5)`.

It has the following properties:

- `[prop]type` = `[str]hsl`.
- `[prop]h` hue that can be any number, but usually is in `[num]0` - `[num]360` range.
- `[prop]s`, `[prop]l` saturation and lightness components (`[num]0` - `[num]100`).
- `[prop]alpha` alpha (`[num]0` - `[num]1`).

## LAB

Lab color, currently being implemented by browsers, is converted from color strings like `[str]lab(50% 50 50 / 1)`.

It has the following properties:

- `[prop]type` = `[str]lab`.
- `[prop]l` lightness (`[num]0` - `[num]100`).
- `[prop]a`, `[prop]b` are distances along `[prop]a` and `[prop]b` axis in Lab color space.
- `[prop]alpha` alpha (`[num]0` - `[num]1`).

## LCH

LCH color, currently being implemented by browsers, is converted from color strings like `[str]lch(50% 50 50 / 1)`.

It has the following properties:

- `[prop]type` = `[str]lab`.
- `[prop]l` lightness (`[num]0` - `[num]100`).
- `[prop]c` chroma, usually in `[num]0` - `[num]230` range, but it can be higher.
- `[prop]h` hue angle.
- `[prop]alpha` alpha (`[num]0` - `[num]1`).

## Keywords

Several keywords have their own types that represent special colors.

They exist because functions for parsing colors can be used for cleaning up and parsing various icons, where finding values like `[str]currentColor` and `[str]none` could be important.

### transparent

Transparent color has a special type with only one property:

- `[prop]type` = `[str]transparent`.

When converting transparent colors like `[str]rgba(0, 0, 0, 0)`,
conversion function will return `[prop]transparent` type, making it easier to compare various colors.

### none

`[str]none` also has a special type with only one property:

- `[prop]type` = `[str]none`.

### currentColor

`[str]currentColor` also has a special type with only one property:

- `[prop]type` = `[str]current`.

## Other colors

This type is meant for parsing colors in SVG, not full color parsing, so it is limited only to simple colors and keywords that are important when parsing icons.
