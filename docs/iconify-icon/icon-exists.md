```yaml
title: 'Iconify Icon Web Component Function: iconExists'
```

# Web component function: iconExists

This tutorial is part of [Iconify Icon web component tutorial](./index.md#functions).

`include icon-components/functions/icon-exists/intro`

## Usage

`include icon-components/functions/icon-exists/props`

## Example

```js
import { iconExists, loadIcons } from 'iconify-icon';

function renderLeftArrow() {
	// Check if 'bi:arrow-left' is available
	if (iconExists('bi:arrow-left')) {
		// Return HTML for 'bi:arrow-left'
		return '<iconify-icon icon="bi:arrow-left"></iconify-icon>';
	}

	// Load icon. Bad example because this should use a callback to re-render arrow in a stateful
	// component, but this code example is about iconExists(), not loadIcons()

	// Function loadIcons() is asynchronous, so in this example it will only trigger loading, but
	// icon data will not be available immediately
	loadIcons(['bi:arrow-left']);

	// Return '<'
	return '<span>&lt;</span>';
}
```
