```yaml
title: 'Iconify Utils Code Examples: Export SVG'
navigation: ./index.md
standalone: true
functions:
  getIconData: '../get-icon-data.md'
  iconToSVG: '../icon-to-svg.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '../../../types/iconify-json.md'
  IconifyIcon: '../../../types/iconify-icon.md'
```

# Export SVG using Iconify Utils

This tutorial is part of [code examples for Iconify Utils](./index.md).

## Export SVG

This is an example of using Iconify Utils to generate SVG from icon data:

```yaml
src: tools/utils/svg-from-icon.ts
title: 'demo.ts'
```

## Functions

Functions used in this code sample:

- `[func]iconToSVG()` to generate attributes and HTML for SVG.
- `[func]replaceIDs()` to create unique IDs, though it is commented out. Use it if you are embedding output in HTML.

## Source

For icon data source, this example uses hardcoded `[type]IconifyIcon` data.

You can import individual icon from [split icon set package](../../../icons/icons.md).

## Output

Example outputs SVG to console.

If you need to write it to a file, use file system function, such as `[func]writeFileSync()` or one of its asynchronous counterparts.
