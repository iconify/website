```yaml
title: Changing icon content
types:
  IconSet: '../icon-set/index.md'
  SVG: '../svg/index.md'
functions:
  list: '../icon-set/list.md'
  forEach: '../icon-set/for-each.md'
  cleanupSVG: './cleanup.md'
  runSVGO: './svgo.md'
  parseColors: './colors.md'
  deOptimisePaths: './paths.md'
  scaleSVG: './scale.md'
  convertSVGToMask: './mask.md'
```

# Changing icon content

Before exporting icons, you need to properly fix them.
[Iconify Tools](./index.md) offers many functions for manipulating icon content: fixing various issues, 
optimising code, changing palette.

## Usage

All functions listed below are asynchronous and work with `[type]SVG` instances.

### Async

`include libraries/tools/async`

### Working with icon sets

How to use functions to parse all icons in an icon set?

It can be done by using `[func]forEach()` and `[func]forEachSync()` methods:

```yaml
src: libraries/tools/icon/icon-set.ts
```

## Cleanup

Before running any icon manipulation function, you should validate and clean up icon. See `[func]cleanupSVG()` function.

## Functions

There are several functions for manipulating icons:

### runSVGO()

Function `[func]runSVGO()` optimises icon.

Cleaning up icons with `[func]cleanupSVG()` is not enough. That function is very basic; it does bare minimum to get rid of bad stuff. It is mostly for validation.

Use `[func]runSVGO()` to properly clean up and optimise icons.

### parseColors()

Function `[func]parseColors()` is used to analyze icon's palette or change it.

Usually icons either do not have palette, relying on `[prop]fill` style or use black colors. Neither option is acceptable for using icons with Iconify. Iconify all icons that do not have hardcoded palette should use `[prop]currentColor`.

This function can be used to change colors, make sure icon does not have colors it is not supposed to have, add colors to shapes that rely on default colors.

### deOptimisePaths()

Function `[func]deOptimisePaths()` makes sure icon would work with old software.

All browsers support modern SVG, which include compressed arcs in `[tag]path` elements. However, there is plenty of software that does not. Usually it is image editing software that rely on ancient SVG parsing libraries.

### scaleSVG()

Function `[func]scaleSVG()` changes icon dimensions.

### resetSVGOrigin()

Function `[func]resetSVGOrigin()` shifts top left corner of `[prop]viewBox` to 0.

### removeFigmaClipPathFromSVG()

Function `[func]removeFigmaClipPathFromSVG()` attempts to remove unnecessary clip paths, which are often added when icon is exported in Figma.

### convertSVGToMask()

Function `[func]convertSVGToMask()` converts icon content to mask.

This is useful if you want to change icon with multiple colors into a monotone icon, using source colors as shades.
