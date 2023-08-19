```yaml
title: wrapSVGContent() in Iconify Utils
functions:
  mergeDefsAndContent: './merge-defs-and-content.md'
  splitSVGDefs: './split-svg-defs.md'
  iconToSVG: './icon-to-svg.md'
  buildParsedSVG: './build-parsed-svg.md'
  convertParsedSVG: './convert-parsed-svg.md'
```

# wrapSVGContent()

This function is part of [Iconify Utils package](./index.md).

Function `[func]wrapSVGContent()` wraps icon body in custom code. 

It is used by `[func]iconToSVG()` to apply flip and rotation to icon,
by `[func]buildParsedSVG()` and `[func]convertParsedSVG()` to move presentational
attributes from `[tag]svg` element to a group element.

## Usage

This function has the following parameters:

- `[prop]body`, `[type]string`. Icon content.
- `[prop]start`, `[type]string`. Start of wrapper, such as `[tag]<g>`.
- `[prop]end`, `[type]string`. End of wrapper, such as `[tag]</g>`.

This function extracts definitions from icon content, merges the rest of icon as `[str]start + content + end`,
merges it with previously extracted definitions.

## Example

```yaml
src: libraries/utils/split-svg-defs.ts
title: 'example.ts'
```
