```yaml
title: Optimising icon code
functions:
  deOptimisePaths: ../../tools/tools2/icon/paths.md
  runSVGO: ../../tools/tools2/icon/svgo.md
```

# Optimising icon

This article is part of [SVG clean up article](./index.md).

After initial [clean up and validation](./cleanup.md), [changing icon palette](./palette.md), the icon is optimised.

Optimisation is done by SVGO. Not much to write about it, [you can try SVGO optimisation yourself using SVGOMG project](https://jakearchibald.github.io/svgomg/).

## Code

Optimisation is done using `[func]runSVGO()` function from [Iconify Tools](../../tools/tools2/index.md), followed by `[func]deOptimisePaths()` to make sure icons are usable everywhere.
