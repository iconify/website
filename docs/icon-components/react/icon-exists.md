```yaml
title: 'Iconify for React Function: iconExists'
```

# Iconify for React function: iconExists

This tutorial is part of [Iconify for React functions tutorial](./index.md#functions).

`include icon-components/functions/icon-exists/intro`

## Usage

`include icon-components/functions/icon-exists/props`

## Example

```jsx
import { iconExists, loadIcons, Icon } from '@iconify/react';

function renderLeftArrow() {
	// Check if 'bi:arrow-left' is available
	if (iconExists('bi:arrow-left')) {
		// Return HTML for 'bi:arrow-left'
		return <Icon icon="bi:arrow-left" />;
	}

	// Load icon. Bad example because this should use a callback to re-render arrow in a stateful
	// component, but this code example is about iconExists(), not loadIcons()

	// Function loadIcons() is asynchronous, so in this example it will only trigger loading, but
	// icon data will not be available immediately
	loadIcons(['bi:arrow-left']);

	// Return '<'
	return <span>&lt;</span>;
}
```
