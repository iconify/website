```yaml
title: "Iconify SVG Framework Function: buildIcon"
types:
  IconifyIcon: "/docs/types/iconify-icon.md"
functions:
  renderIcon: "./render-icon.md"
  renderSVG: "./render-svg.md"
  renderHTML: "./render-html.md"
  replaceIDs: "./replace-ids.md"
  getIcon: "./get-icon.md"
  loadIcon: "./load-icon.md"
  iconExists: "./icon-exists.md"
  iconLoaded: "./icon-exists.md"
```

# SVG framework function: buildIcon

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#render).

Function `[func]buildIcon()` generates data used by `[func]renderSVG()` and `[func]renderHTML()` functions.

This function is meant to be used when you generate `[tag]svg` code.

## Usage

`include icon-components/functions/build-icon/usage`

## Result

See `[func]renderIcon()` function.

## Difference from renderIcon

This function is almost identical to `[func]renderIcon()` with one difference: first parameter is icon data, not icon name.

Why are there two functions? For compatibility with other icon components and with old versions of SVG framework. Other components export only `[func]buildIcon()`, SVG framework had `[func]renderIcon()` from old version. Internally, `[func]renderIcon()` uses same code as `[func]buildIcon()`, so having both does not increase bundle size by much.
