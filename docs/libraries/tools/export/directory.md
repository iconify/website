```yaml
title: Exporting Icons as SVG
types:
  SVG: '../svg/index.md'
  IconSet: '../icon-set/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  export: '../icon-set/export.md'
```

# Exporting icons to directory

This tutorial is part of [export functions documentation](./index.md) in [Iconify Tools](../index.md).

Function `[func]exportToDirectory()` writes all icons in `[type]IconSet` instance to a specified directory.

## Usage

Function has the following parameters:

- `[prop]iconSet`, `[type]IconSet`. Icon set to export.
- `[prop]options`, `[type]object`. Options. See below.

Function returns array of stored icons.

Function is asynchronous. That means you need to handle it as `[class]Promise` instance, usually by adding `[js]await` before function call.

### Options

The `[prop]options` object has the following mandatory property:

- `[prop]target`, `[type]string`. Target directory. If a directory is missing, it will be created.

and the following optional properties:

- `[prop]cleanup`, `[type]boolean`. If `true`, target directory will be emptied before exporting icons. Default is `false`.
- `[prop]autoHeight`, `[type]boolean`. If `true`, icons will have dimensions matching `[attr]viewBox`. If `false`, icons will have height set to `[str]1em`. Default is `true`.
- `[prop]includeAliases`, `[type]boolean`. Generates files for aliases. Default is `true`.
- `[prop]includeChars`, `[type]boolean`. Generates files for characters, such as `[file]f00.svg` for icon that has character `[str]f00` assigned to it. Default is `false`.
- `[prop]log`, `[type]boolean`. If `true`, function logs process. Default is `false`.

## Example

```yaml
src: libraries/tools/export/directory.ts
title: 'example.ts'
```
