```yaml
title: 'Iconify for Vue 2 Function: renderSVG'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  replaceIDs: './replace-ids.md'
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
  iconExists: './icon-exists.md'
```

# Iconify for Vue 2 function: buildIcon

This tutorial is part of [Iconify for Vue 2 functions tutorial](./index.md#functions).

`include icon-components/functions/build-icon/intro-component`

## Usage

`include icon-components/functions/build-icon/usage`

## Result

`include icon-components/functions/build-icon/result`

## Customizations

Second parameter is optional icon customizations. Available customizations:

`include icon-components/customisations`

For more details about dimensions see [icon dimensions documentation](./dimensions.md).

For more details about transformations see [icon transformations documentation](./transform.md).

## Example

```yaml
src: icon-components/common/build-icon.js
replacements:
  - search: '@iconify/svelte'
    replace: '@iconify/vue2'
extra:
  - src: icon-components/common/build-icon.json
    title: 'Result:'
```
