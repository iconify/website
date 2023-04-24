```yaml
title: 'Iconify for Svelte Function: loadIcons'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# Iconify for Svelte function: loadIcons

This tutorial is part of [Iconify for Svelte functions tutorial](./index.md#functions).

`include icon-components/functions/load-icons/intro`

## Usage

`include icon-components/functions/load-icons/props`

## Icons list

`include icon-components/functions/load-icons/props-icons`

## Callback

`include icon-components/functions/load-icons/props-callback`

## IconifyIconName type

`include types/iconify-icon-name`

## Examples

Simple callback that loads one icon:

```yaml
src: icon-components/common/load-icons.js
replacements:
  - search: react
    replace: svelte
```

Async version of `[func]loadIcons()`:

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: react
    replace: svelte
```

## Svelte component example

This example renders `[html]<slot />` while icon is being loaded, emulating behavior of React component. Due to bug in Svelte, third party components cannot use `[html]<slot />`, so Svelte component behaves a bit different than other components.

```yaml
src: icon-components/common/get-icon.svelte
```

If you want to load only one icon, there is also `[func]loadIcon()` that is easier to use.
