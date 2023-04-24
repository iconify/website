```yaml
title: 'Iconify SVG Framework Function: listIcons'
```

# SVG framework function: listIcons

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#getting-icons).

`include icon-components/functions/list-icons/intro`

## Usage

`include icon-components/functions/list-icons/props`

## Examples

```js
// List all icons
console.log(Iconify.listIcons());
```

```js
// List all loaded Material Design Icons
console.log(Iconify.listIcons('', 'mdi'));
// ["mdi:alert", "mdi:home", "mdi:account-box-outline", "mdi:eyedropper", "mdi:account-off", "mdi:account", "mdi:account-box", "mdi:account-cash"]
```
