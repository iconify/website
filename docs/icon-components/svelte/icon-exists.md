```yaml
title: 'Iconify for Svelte Function: iconExists'
functions:
  getIcon: './get-icon.md'
```

# Iconify for Svelte function: iconExists

This tutorial is part of [Iconify for Svelte functions tutorial](./index.md#functions).

`include icon-components/functions/icon-exists/intro`

## Usage

`include icon-components/functions/icon-exists/props`

## Example

This example renders `[html]<slot />` while icon is being loaded, emulating behavior of React component. Due to bug in Svelte, third party components cannot use `[html]<slot />`, so Svelte component behaves a bit different than other components.

```yaml
src: icon-components/common/icon-exists.svelte
```

This example uses `[func]iconExists()` to show function, but for this purpose it is better to use `[func]getIcon()`. See `[func]getIcon()` documentation for better example.
