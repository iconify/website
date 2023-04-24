```yaml
title: 'Iconify for Ember Function: loadIcons'
types:
  IconifyIconName: './icon-name.md'
functions:
  getIcon: './get-icon.md'
  loadIcon: './load-icon.md'
```

# Iconify for Ember function: loadIcons

This tutorial is part of [Iconify for Ember functions tutorial](./index.md#functions).

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
    replace: '@iconify/ember/components/iconify-icon'
```

Async version of `[func]loadIcons()`:

```yaml
src: icon-components/common/load-icons-async.js
replacements:
  - search: '@iconify/react'
    replace: '@iconify/ember/components/iconify-icon'
```

If you want to load only one icon, there is also `[func]loadIcon()` that is easier to use.
