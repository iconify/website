```yaml
title: 'Iconify for Ember Function: iconExists'
functions:
  getIcon: './get-icon.md'
  loadIcons: './load-icons.md'
```

# Iconify for Ember function: iconExists

This tutorial is part of [Iconify for Ember functions tutorial](./index.md#functions).

`include icon-components/functions/icon-exists/intro`

## Usage

`include icon-components/functions/icon-exists/props`

## Example

```js
import { iconExists } from '@iconify/ember/components/iconify-icon';

const icon = 'bi:arrow-left';
console.log(`Is ${icon} available?`, iconExists(icon) ? 'yes' : 'no');
```
