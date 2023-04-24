```yaml
title: 'Iconify for Vue 2 Function: iconExists'
```

# Iconify for Vue 2 function: iconExists

This tutorial is part of [Iconify for Vue 2 functions tutorial](./index.md#functions).

`include icon-components/functions/icon-exists/intro`

## Usage

`include icon-components/functions/icon-exists/props`

## Example

```js
import { iconExists } from '@iconify/vue2';

const icon = 'bi:arrow-left';
console.log(`Is ${icon} available?`, iconExists(icon) ? 'yes' : 'no');
```
