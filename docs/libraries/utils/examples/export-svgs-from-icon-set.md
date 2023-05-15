```yaml
title: 'Iconify Utils Code Examples: Export SVG'
functions:
  parseIconSet: '../parse-icon-set.md'
  iconToSVG: '../icon-to-svg.md'
  replaceIDs: '../replace-ids.md'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Export SVGs using Iconify Utils

This tutorial is part of [code examples for Iconify Utils](./index.md).

## Export SVGs

This is an example of using Iconify Utils to generate SVGs from the icon set:

```yaml
src: libraries/utils/svgs-from-set.ts
title: 'demo.ts'
```

## Functions

Functions used in this code sample:

- `[func]parseIconSet()` to parse icon set, calling callback for each icon.
- `[func]iconToSVG()` to generate attributes and HTML for SVG.
- `[func]replaceIDs()` to create unique IDs, though it is commented out. Use it if you are embedding output in HTML.

## Source

For icon set source, this example uses `[file].json` file in `[type]IconifyJSON` format.

You can also use [individual icon set package](/docs/icons/json.md) or [full icon sets package](/docs/icons/all.md). Point `[var]source` variable to `[file].json` file from one of those packages.

## Output

This example writes all SVGs to the file system. Change `[var]target` variable to point to different directory.
