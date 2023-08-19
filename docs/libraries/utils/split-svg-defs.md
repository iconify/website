```yaml
title: splitSVGDefs() in Iconify Utils
functions:
  mergeDefsAndContent: './merge-defs-and-content.md'
  wrapSVGContent: './wrap-svg-content.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# splitSVGDefs()

This function is part of [Iconify Utils package](./index.md).

Function `[func]splitSVGDefs()` splits SVG body in contents of `[tag]defs` and other content.

This function is used by `[func]wrapSVGContent()` to wrap icon content,
which is used by `[func]iconToSVG()` to apply flip and rotation to icon,
by `[func]buildParsedSVG()` and `[func]convertParsedSVG()` to move presentational
attributes from `[tag]svg` element to a group element.

## Usage

This function has the following parameter:

- `[prop]content`, `[type]string`. Icon content.

This function returns an object with 2 properties:

- `[prop]defs`, `[type]string`. Contents of `[tag]defs` element(s).
- `[prop]content`, `[type]string`. The rest of icon.

To merge back definitions and content, use `[func]mergeDefsAndContent()`.

## Example

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
