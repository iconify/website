```yaml
title: 'Iconify for Svelte Function: getIcon'
types:
  IconifyIcon: '/docs/types/iconify-icon.md'
```

# Iconify for Svelte function: getIcon

This tutorial is part of [Iconify for Svelte functions tutorial](./index.md#functions).

`include icon-components/functions/get-icon/intro`

## Usage

`include icon-components/functions/get-icon/props`

## Examples

```yaml
src: icon-components/common/get-icon.js
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
replacements:
  - search: react
    replace: svelte
```

Another example:

```yaml
src: icon-components/common/get-icon2.js
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
replacements:
  - search: react
    replace: svelte
```

Example with bad icon name, returns `null`:

```yaml
src: icon-components/common/get-icon-null.js
replacements:
  - search: react
    replace: svelte
```

## Svelte component example

This example renders `[html]<slot />` while icon is being loaded, emulating behavior of React component. Due to bug in Svelte, third party components cannot use `[html]<slot />`, so Svelte component behaves a bit different than other components.

```yaml
src: icon-components/common/get-icon.svelte
```
