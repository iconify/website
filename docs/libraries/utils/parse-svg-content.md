```yaml
title: parseSVGContent() in Iconify Utils
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# parseSVGContent()

This function is part of [Iconify Utils package](./index.md).

Function `[func]parseSVGContent()` parses string that contains SVG, extracts attributes for `[tag]svg` element and icon content.

## Usage

This function has the following parameter:

- `[prop]content`, `[type]string`. SVG.

This function returns data with type `[type]ParsedSVGContent`, `[type]undefined` on error. See below.

## Result {#result}

The result is an object with the following properties:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]attributes`, `[type]object`. Attributes for `[tag]svg` element.

Attributes are not checked.

The result should be passed to either `[func]buildParsedSVG()` or `[func]convertParsedSVG()`.
Both functions do simple validation of attributes in `[tag]svg` element and convert it to usable data.

## Iconify Tools

This function is very basic. For advanced parsing and clean up, use [Iconify Tools](../tools/index.md).

## Examples

Example using `[func]parseSVGContent()` with `[func]buildParsedSVG()` and `[func]iconToHTML()` to clean up icon:

```yaml
src: libraries/utils/build-parsed-svg.ts
title: 'cleanup.ts'
```

Example using `[func]parseSVGContent()` with `[func]convertParsedSVG()` to get icon data in `[type]IconifyIcon` format,
which can be used by various icon components:

```yaml
src: libraries/utils/convert-parsed-svg.ts
title: 'convert.ts'
```
