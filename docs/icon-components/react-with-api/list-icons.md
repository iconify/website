```yaml
title: 'Iconify for React Function: listIcons'
```

# Iconify for React function: listIcons

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include icon-components/functions/list-icons/intro`

## Usage

`include icon-components/functions/list-icons/props`

## Examples

```js
import { listIcons } from '@iconify/react-with-api';

// List all icons
console.log(listIcons());
```

```js
import { listIcons } from '@iconify/react-with-api';

// List all loaded Material Design Icons
console.log(listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
