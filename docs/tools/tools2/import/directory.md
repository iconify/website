```yaml
title: Importing SVG from directory
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
functions:
  cleanupSVG: '../icon/cleanup.md'
  parseColors: '../icon/colors.md'
  runSVGO: '../icon/svgo.md'
```

# Importing SVG from directory

This function is part of [import functions](./index.md) in [Iconify Tools](../index.md).

Function `[func]importDirectory()` finds and imports all SVG files from a directory.

It creates `[type]IconSet` instance, which [can be exported to various formats](../export/index.md).

## Usage

Function has the following parameters:

- `[prop]dir`, `[type]string`. Directory to import from.
- `[prop]options`, `[type]object`. Options (optional).

Function returns `[type]IconSet` instance.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

## Validation

After importing icons, they need to be:

- Cleaned up and validated using `[func]cleanupSVG()`.
- In some cases palette needs to be fixed using `[func]parseColors()`.
- Optimised using `[func]runSVGO()`.

See example below.

## Example

```yaml
src: tools/tools2/import/dir.ts
title: 'example.ts'
```
