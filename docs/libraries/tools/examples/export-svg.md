```yaml
title: Export all Iconify icon sets as SVG
```

# Export all Iconify icons as SVG

This example shows how to generate SVG files for all icons from `[npm]@iconify/json` package.

First, create a blank Node project, add `[npm]@iconify/tools` as a dependency. 

Then create file `[file]export-files.mjs` and put this content:

```yaml
src: libraries/tools/examples/export-all-files.mjs
title: 'export-svg.mjs'
```

Then run that file:

```bash
node lib/export-svg.mjs
```

