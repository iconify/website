```yaml
title: "Iconify for Svelte Functions: setCustomIconLoader and setCustomIconsLoader"
types:
  IconifyJSON: "../../types/iconify-json.md"
  IconifyIcon: "../../types/iconify-icon.md"
functions:
  loadIcon: "./load-icon.md"
```

# Custom icon loaders

This tutorial is part of [Iconify for Svelte tutorial](./index.md).

`include icon-components/functions/set-loaders/intro`

## Usage

`include icon-components/functions/set-loaders/props`

## Example

```yaml
src: icon-components/common/set-loader.js
replacements:
  - search: "@iconify/react"
    replace: "@iconify/svelte"
```

Make sure loader is set before any icons are rendered, otherwise component might attempt to load icon from API and fail to render it.
