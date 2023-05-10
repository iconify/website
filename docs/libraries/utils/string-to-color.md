```yaml
title: stringToColor() in Iconify Utils
types:
  Color: './color.md'
```

# stringToColor()

This function is part of [Iconify Utils package](./index.md).

Function `[func]stringToColor()` converts string to `[type]Color` object, returns `null` on error.

This function can be used to validate user input. It supports color keywords, hexadecimal colors, RGB, HSL, LAB and LCH colors. Variables are not supported because this is meant for parsing SVGs, which should not reference any external variables.

## Usage

Function has one parameter:

- `[prop]value`, `[type]string`. Color string.

Function returns `[type]Color` object on success, `null` on error.

## Possible values

Colors that function can convert:

- Keywords, such as `[str]red`.
- Hexadecimal colors, such as `[str]#ff0000`, also in short form and with alpha.
- Few functional notations:
  - RGB: `[str]rgba(255, 0, 0, 1)`.
  - HSL: `[str]hsla(0, 50%, 50%, 1)`.
  - LAB: `[str]lab(50% 86 40 / 1)`.
  - LCH: `[str]lch(50% 86 40 / 1)`.
- Several special keywords:
  - `[str]transparent`
  - `[str]none`
  - `[str]currentColor`

See `[type]Color` type description for details.

## Examples

```yaml
src: libraries/utils/string-to-color.ts
title: 'demo.ts'
```
