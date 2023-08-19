```yaml
title: iconToHTML() in Iconify Utils
types:
  IconifyIconBuildResult: './icon-to-svg.md#build-result'
functions:
  iconToSVG: './icon-to-svg.md'
  parseSVGContent: './parse-svg-content.md'
  buildParsedSVG: './build-parsed-svg.md'
```

# iconToHTML()

This function is part of [Iconify Utils package](./index.md).

Function `[func]iconToHTML()` generates SVG from a list of attributes for `[tag]svg` element and icon content.

It can be used with results of `[func]iconToSVG()`, `[func]parseSVGContent()` or `[func]buildParsedSVG()`.

## Usage

Function has the following parameters:

- `[prop]body`, `[type]string`. Icon content, without `[tag]svg` tag.
- `[prop]attributes`, `[type]Record<string, string>`. Attributes to add, such as `[prop]viewBox`.

Function returns `[type]string`.

## Notes

Function adds the following attributes automatically, do not add them in `[prop]attributes` parameter:

- `[str]xmlns`: always added.
- `[str]xmlns:xlink`: added if `[prop]body` contains `[str]xlink:`. Modern icons should not contain `[str]xlink:` attributes.

Attribute values are not modified. Make sure they are escaped before calling function.

## Example

```yaml
src: libraries/utils/get-icon.ts
title: 'example.ts'
```
