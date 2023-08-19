```yaml
title: getSVGViewBox() and SVGViewBox in Iconify Utils
```

# getSVGViewBox() and SVGViewBox type

This function is part of [Iconify Utils package](./index.md).

Function `[func]getSVGViewBox()` is a helper function that parses `[prop]viewBox` attribute value.

Result is represented by `[type]SVGViewBox` type, used in various functions in Iconify Utils.

## Usage

The function has the following parameter:

- `[prop]value`, `[type]string`. Attribute value.

Function returns `[type]SVGViewBox` with parsed viewBox value or `[type]undefined` on error.

Function validates numbers to make sure values are valid numbers and there are exactly 4 numbers. On failure, it will return `[type]undefined`. 

## SVGViewBox type

Type `[type]SVGViewBox` is an array of four numbers:
- x (or left)
- y (or top)
- width
- height

## Example

```yaml
src: libraries/utils/get-svg-viewbox.ts
title: 'usage.ts'
extra:
  - src: libraries/utils/get-svg-viewbox.json
    title: 'Result:'
```

## Convert to string

To get `[prop]viewBox` attribute as a string from `[type]SVGViewBox`, use `[func]join` function:

```js
const value = viewBox.join(' ');
```
