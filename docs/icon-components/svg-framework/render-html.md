```yaml
title: 'Iconify SVG Framework Function: renderHTML'
functions:
  renderSVG: './render-svg.md'
  renderIcon: './render-icon.md'
```

# SVG framework function: renderHTML

This tutorial is part of [Iconify SVG Framework functions tutorial](./functions.md#render).

Function `[func]renderHTML()` generates HTML code for icon.

## Usage

Function has the following parameters:

- `[prop]name`, `[type]string`. Icon name.
- `[prop]customisations`. Optional customizations object.

Function returns `[type]string`, `null` if icon is not available.

## Examples

```js
if (Iconify.iconExists('mdi:home')) {
	node.innerHTML = Iconify.renderHTML('mdi:home');
}
```

Another example:

```js
const node = document.createElement('div');
node.innerHTML = Iconify.renderHTML('bi:stopwatch', {
	rotate: 1,
	height: 'auto',
});
```

## Customizations

Second parameter is optional icon customizations. Do not confuse it with placeholder `[attr]data-` attributes.

Available customizations:

`include icon-components/customisations`

For more details about dimensions and alignment see [icon dimensions documentation](./dimensions.md).

For more details about transformations see [icon transformations documentation](./transform.md).

## Rendering SVG

This function creates `[tag]string`. If you want to create `[tag]svg` element, use `[func]renderSVG()` instead.
