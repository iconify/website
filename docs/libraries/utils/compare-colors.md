```yaml
title: compareColors() in Iconify Utils
types:
  Color: './color.md'
```

# compareColors()

This function is part of [Iconify Utils package](./index.md).

Function `[func]compareColors()` compares two `[type]Color` objects, returning `true` if colors are identical.

This function can be used to parse colors in SVG. When the same color is represented with different methods, this function can help find duplicate colors.

## Usage

Function has two parameters:

- `[prop]color1`, `[type]Color`. First color.
- `[prop]color2`, `[type]Color`. Second color.

Function returns `true` if colors are identical, `false` if not.

## Example

```yaml
src: libraries/utils/compare-colors.ts
title: 'demo.ts'
```
