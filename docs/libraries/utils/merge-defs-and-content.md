```yaml
title: mergeDefsAndContent() in Iconify Utils
functions:
  splitSVGDefs: './split-svg-defs.md'
  wrapSVGContent: './wrap-svg-content.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# mergeDefsAndContent()

This function is part of [Iconify Utils package](./index.md).

Function `[func]splitSVGDefs()` merges definitions and other SVG content in a string.

This function is used by `[func]wrapSVGContent()` to wrap icon content,
which is used by `[func]iconToSVG()` to apply flip and rotation to icon,
by `[func]buildParsedSVG()` and `[func]convertParsedSVG()` to move presentational
attributes from `[tag]svg` element to a group element.

## Usage

This function has the following parameters:

- `[prop]defs`, `[type]string`. Definitions.
- `[prop]content`, `[type]string`. Icon content.

This function returns merged icon as a string.

## Example

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
