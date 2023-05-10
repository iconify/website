```yaml
title: Fixing compatibility with old SVG parsers
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
```

# Compatibility with old SVG parsers

This function is part of [icon manipulation functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]deOptimisePaths()` checks `[tag]path` elements for syntax that might not be supported by older software and automatically fixes it.

Unfortunately a lot of software, such as image editing software, use old libraries for parsing SVG. Those libraries do not support compressing arcs in path, resulting in incorrectly imported icons. Compressing arcs doesn't make much different in icon size, so better to have icons usable in all software than save couple of bytes.

## Usage

Function has only one parameter:

- `[prop]svg`, `[type]SVG`. Icon instance.

Function does not return anything, it applies changes to `[type]SVG` instance.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Example

```yaml
src: libraries/tools/icon/paths.ts
title: 'example.ts'
extra:
  - src: libraries/tools/icon/paths.svg
    title: 'Result:'
```

As you can see from example, changes are minor. However, not applying these minor changes might break icon for many users that use old software, so better run this function on all icons before exporting.

Make sure you do not run SVGO optimisation after running this function because SVGO might compress paths.
