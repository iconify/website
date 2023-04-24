```yaml
title: Iconify Utils Code Examples
types:
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyIcon: '../../../types/iconify-icon.md'
```

# Code examples for Iconify Utils

Documentation for [each function in Iconify Utils](../index.md) includes code samples.

However, how to figure out which function to look at? Below are code samples for common use cases.

## Export icon set

Examples to export an entire icon set:

- [Export icon set as SVGs](./export-svgs-from-icon-set.md).

## Export single SVG

Examples of generating a single SVG file:

- [Export SVG from icon set](./export-svg-from-icon-set.md).
- [Export SVG from icon data](./export-svg-from-data.md).

## Export CSS

Examples to export icons as CSS:

- [Generate CSS for selected icons](./generate-css.md).

## Advanced import / export {#advanced}

Iconify Utils is a basic package that parses `[type]IconifyJSON` and `[type]IconifyIcon` data. It is not meant for more complex stuff.

For more complex stuff, such as importing icons, validating icon code, changing palette, cleaning up, exporting to various formats, see [Iconify Tools package](../../tools2/index.md).
