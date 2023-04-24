```yaml
title: colorToString() in Iconify Utils
types:
  Color: './color.md'
functions:
  stringToColor: './string-to-color.md'
```

# colorToString()

This function is part of [Iconify Utils package](./index.md).

Function `[func]colorToString()` convert `[type]Color` objects to `[type]string`.

It is the opposite of `[func]stringToColor()`.

Converting color from string using `[func]stringToColor()`, then back to string using this function can be used to validate and clean up color strings.

## Usage

Function has one parameter:

- `[prop]color`, `[type]Color`. Color object to conver.

Function returns `[type]string`.

## Example

```yaml
src: tools/utils/color-to-string.ts
title: 'demo.ts'
```
