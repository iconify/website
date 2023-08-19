```yaml
title: convertParsedSVG() in Iconify Utils
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
  SVGViewBox: './get-svg-viewbox.md'
functions:
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
  iconToHTML: './icon-to-html.md'
```

# convertParsedSVG()

This function is part of [Iconify Utils package](./index.md).

Function `[func]convertParsedSVG()` converts result of `[func]parseSVGContent()` to `[type]IconifyIcon`.

Function also does basic validation and cleanup of `[tag]svg` attributes.

Result can be used by various functions and icon components that use `[type]IconifyIcon` type.

## Usage

This function has the following parameter:

- `[prop]data`, `[type]object`. Result of `[func]buildParsedSVG()` function.

This function returns data with type `[type]IconifyIcon`, `[type]undefined` on error.

## Iconify Tools

This function is very basic. For advanced parsing and clean up, use [Iconify Tools](../tools/index.md).

## Example

Example using `[func]parseSVGContent()` with `[func]convertParsedSVG()` to get icon data in `[type]IconifyIcon` format,
which can be used by various icon components:

```yaml
src: libraries/utils/convert-parsed-svg.ts
title: 'convert.ts'
```
