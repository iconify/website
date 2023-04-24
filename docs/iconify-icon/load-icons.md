```yaml
title: 'Iconify Icon Web Component Function: loadIcons'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
types:
  IconifyIconName: './icon-name.md'
```

# Web component function: loadIcons

This tutorial is part of [Iconify Icon web component tutorial](./index.md#functions).

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
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

Async version of `[func]loadIcons()`:

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: '@iconify/react'
    replace: 'iconify-icon'
```

If you want to load only one icon, there is also `[func]loadIcon()` that is easier to use.
