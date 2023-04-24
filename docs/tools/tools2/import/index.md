```yaml
title: Importing icons
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
  IconifyJSON: '../../../types/iconify-json.md'
functions:
  forEach: '../icon-set/for-each.md'
  cleanupSVG: '../icon/cleanup.md'
  runSVGO: '../icon/svgo.md'
  parseColors: '../icon/colors.md'
  deOptimisePaths: '../icon/paths.md'
  importDirectory: './directory.md'
  importFromFigma: './figma/index.md'
```

# Importing icons

[Iconify Tools](../index.md) can import icons from several sources.

## Usage

All functions listed below are asynchronous. Most functions create `[type]IconSet` instances.

Before using Iconify Tools, you should be aware that package is opinionated. Certain tags are not allowed and will fail import. See [SVG import limitations](../tags.md).

### Async

`include tools/tools2/async`

## Cleanup

After importing icons, make sure you validate them. See `[func]cleanupSVG()` function.

## Import functions

There are several functions for importing icons:

### importDirectory()

Function `[func]importDirectory()` imports SVG files from directory.

### importFromFigma()

Function `[func]importFromFigma()` imports icons from Figma document.

### Importing single icon {#svg}

Making a function for importing single file is redundant. All you have to do is read file and create `[type]SVG` instance.

See [importing SVG](./svg.md) documentation.

### Importing Iconify icon set {#json}

Making a function for importing `[type]IconifyJSON` data is also redundant. All you have to do is read file and create `[type]IconSet` instance.

See [importing Iconify icon set](./json.md) documentation.
