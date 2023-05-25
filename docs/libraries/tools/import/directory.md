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

Functions `[func]importDirectory()` and  `[func]importDirectorySync()` find and import all SVG files from a directory.

Both functions are identical, the only difference is in how they read files.
Function `[func]importDirectorySync()` reads files synchronously, `[func]importDirectory()` reads files asynchronously.

Functions create `[type]IconSet` instance, which [can be exported to various formats](../export/index.md).

## Usage

Function has the following parameters:

- `[prop]dir`, `[type]string`. Directory to import from.
- `[prop]options`, `[type]object`. Options (optional).

Function returns `[type]IconSet` instance.

## Options

The `[prop]options` object has the following optional properties:
- `[prop]prefix`, `[type]string`. Icon set prefix.
- `[prop]includeSubDirs`, `[type]boolean`. Scans files in subdirectories. Enabled by default.
- `[prop]keyword`, `[type]function`. Callback that returns keyword for icon based on file name.
- `[prop]ignoreImportErrors`, `[type]boolean`. Does not throw an error when an icon fails to load. Enabled by default. Disable for strict error checking.
- `[prop]keepTitles`, `[type]boolean`. If enabled, keeps titles in SVG. Disabled by default.

Keyword callback can be asynchronous in `[func]importDirectory()`,
but must be synchronous in `[func]importDirectorySync()`.
It has 3 parameters: file name, default generated keyword, icon set.
It should return `[type]string` with keyword or `[type]undefined` if file should be skipped.

## Validation

After importing icons, they need to be:

- Cleaned up and validated using `[func]cleanupSVG()`.
- In some cases palette needs to be fixed using `[func]parseColors()`.
- Optimised using `[func]runSVGO()`.

See example below.

## Examples

Asynchronous example:

```yaml
src: libraries/tools/import/dir.ts
title: 'example.ts'
```

Synchronous example:

```yaml
src: libraries/tools/import/dir-sync.ts
title: 'example.ts'
```
