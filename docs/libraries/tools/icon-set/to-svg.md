```yaml
title: Export icon as SVG instance in icon set
types:
  IconSet: './index.md'
  SVG: '../svg/index.md'
functions:
  fromSVG: './from-svg.md'
```

# toSVG()

This function is part of `[type]IconSet` class in [Iconify Tools](../index.md).

Function `[func]toSVG()` exports icon as `[type]SVG` instance.

It is used to process icon using functions that work with `[type]SVG` instances, then importing it back using `[func]fromSVG()` method.

## Usage

Function has the following parameter:

- `[prop]name`, `[type]string`. Icon name.

Function returns `[type]SVG` instance on success, `[type]null` on error.

## Example

```yaml
src: libraries/tools/icon-set/to-svg.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon-set/to-svg.svg
    title: 'Result:'
```
