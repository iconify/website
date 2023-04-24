```yaml
title: Scale SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# Scaling SVG

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]scaleSVG()` changes icon size.

For most icons this function is not needed, you can change size by changing `[prop]width` and `[prop]height` properties, but it is available anyway.

## Usage

Function has the following parameters:

- `[prop]svg`, `[type]SVG`. Icon instance.
- `[prop]scale`, `[type]number`. Amount to multiply icon dimensions by.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Example

```yaml
src: tools/tools2/icon/scale.ts
title: 'svgo.ts'
extra:
  - src: tools/tools2/icon/scale.svg
    title: 'Result:'
```
