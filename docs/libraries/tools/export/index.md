```yaml
title: Exporting icons
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
  IconifyJSON: '/docs/types/iconify-json.md'
functions:
  forEach: '../icon-set/for-each.md'
  cleanupSVG: '../icon/cleanup.md'
  runSVGO: '../icon/svgo.md'
  parseColors: '../icon/colors.md'
  deOptimisePaths: '../icon/paths.md'
  blankIconSet: '../icon-set/index.md'
  export: '../icon-set/export.md'
  toString: '../icon-set/to-string.md'
  exportToDirectory: './directory.md'
  exportIconPackage: './icon-package.md'
  exportJSONPackage: './json-package.md'
```

# Exporting icons

[Iconify Tools](../index.md) can export icons to several formats.

## Usage

All functions listed below work with `[type]IconSet` instances. You need to create instance using `[func]blankIconSet()` or by [using one of import functions](../import/index.md).

## Cleanup and optimisation

Before exporting icons, make sure you clean them up and optimise.

See [icon manipulation functions](../icon/index.md).

## Export functions

There are several functions for exporting icons:

### Exporting Iconify icon set {#json}

`[type]IconSet` instance has `[func]export()` function that creates `[type]IconifyJSON` data. All you have to do is write it to file.

See [exporting Iconify icon set](./json.md) documentation.

### Exporting SVG (simplified version) {#directory}

Function `[func]exportToDirectory()` exports all icons as SVG to a directory.

### Exporting as SVG {#svg}

`[type]IconSet` instance has `[func]toString()` function that generates `[type]string` for icon. You can use `[func]forEach()` to loop all icons in icon set.

See [exporting icons as SVG](./svg.md) documentation.

### Exporting NPM packages {#npm}

There are different types of icon packages published at NPM, there are functions for exporting each type:

- Function `[func]exportIconPackage()` creates NPM package with one file per icon. This is used when user needs only only few icons.
- Function `[func]exportJSONPackage()` creates NPM package with entire icon set in one file. This is used to get an entire icon set.

Functions do not publish packages, they only generate contents. Run `[bash]npm publish` to publish generated packages.
