```yaml
title: buildParsedSVG() in Iconify Utils
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  parseSVGContent: './parse-svg-content.md'
  convertParsedSVG: './convert-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# buildParsedSVG()

This function is part of [Iconify Utils package](./index.md).

Function `[func]buildParsedSVG()` parses result of `[func]parseSVGContent()`.

It validates and cleans up `[tag]svg` attributes, extracts and validates `[prop]viewBox` and returns data
as a list of attributes for `[tag]svg` element and content.

Result can be used by functions like `[func]iconToHTML()` to generate SVG or to generate various components.

## Usage

This function has the following parameter:

- `[prop]data`, `[type]object`. Result of `[func]buildParsedSVG()` function.

This function returns data with type `[type]ParsedSVGContent`, `[type]undefined` on error. See below.

## Result {#build-result}

The result is an object with the following properties:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]attributes`, `[type]object`. Attributes for `[tag]svg` element.
- `[prop]viewBox`, `[type]SVGViewBox`. `[prop]viewBox` as array of numbers.

List of attributes in the result does not include `[prop]xmlns` because it is identical in all SVG.
It always includes `[prop]viewBox`, usually includes `[prop]width` and `[prop]height`.

You can use `[func]iconToHTML()` to convert the result to string.

## Example

Example using `[func]parseSVGContent()` with `[func]buildParsedSVG()` and `[func]iconToHTML()` to clean up icon:

```yaml
src: libraries/utils/build-parsed-svg.ts
title: 'cleanup.ts'
```
