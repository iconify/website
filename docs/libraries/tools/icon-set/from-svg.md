```yaml
title: Import icon from SVG to icon set
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
```

# fromSVG()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]fromSVG()` imports icon from `[type]SVG` instance to `[type]IconSet` icon set. It can be used to add new icon or replace existing icon.

## Usage

Function has the following parameters:

- `[type]name`, `[type]string`. Icon name.
- `[type]svg`, `[type]SVG`. SVG instance.

Function returns `true` on success, `false` on failure.

## Example

```yaml
src: libraries/tools/icon-set/to-svg.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-svg.svg
    title: 'Result:'
```
