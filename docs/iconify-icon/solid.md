```yaml
title: 'Iconify Icon Web Component with SolidJS'
```

# Iconify Icon web component with SolidJS

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

Currently, SolidJS has poor support for web components. It is caused by issues in web components standard. When setting property to a web component, it sometimes does not work as expected.

## Workaround

Workaround for Solid usage is to force Solid to use attributes instead of properties:

```html
<iconify-icon attr:icon="mdi-light:home"></iconify-icon>
```

## Iconify Icon for Solid

Iconify Icon for Solid solves that by mapping properties to attributes in a native Solid component, so you can use web component without any issues.

It also provides typings for component, making it easier to use in JSX and supports objects for `[prop]icon` property.

## Installation

Instead of `[npm]iconify-icon` package, install `[npm]@iconify-icon/solid` package:

```bash
npm install --save-dev @iconify-icon/solid
```

```bash
yarn add --dev @iconify-icon/solid
```

## Usage

Import `[prop]Icon` component from `[npm]@iconify-icon/solid`, set icon in `[prop]icon` property:

```jsx
import { Icon } from '@iconify-icon/solid';

export default () => {
	return (
		<div class="alert">
			<Icon icon="mdi-light:alert" />
			Important notice with alert icon!
		</div>
	);
};
```

### Usage with objects

You can pass objects in `[prop]icon` property:

```jsx
import { Icon } from '@iconify-icon/solid';
import alertIcon from '@iconify-icons/mdi-light/alert';

export default () => {
	return (
		<div class="alert">
			<Icon icon={alertIcon} />
			Important notice with alert icon!
		</div>
	);
};
```

### Functions

All other functions, listed in [Iconify Icon web component tutorial](./index.md#functions), are available. You can import them directly from `[npm]@iconify-icon/solid` package:

```jsx
import { Icon, addIcon } from '@iconify-icon/solid';

addIcon('alert', {
	body: '<path fill="currentColor" d="M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536ZM11 14v-4h1v4h-1Zm0 2h1v2h-1v-2Z"/>',
	width: 24,
	height: 24,
});

export default () => {
	return (
		<div class="alert">
			<Icon icon="alert" />
			Important notice with alert icon!
		</div>
	);
};
```

See [Iconify Icon web component](./index.md) for list of all attributes, functions and usage examples. `[npm]@iconify-icon/solid` is only a wrapper for `[npm]iconify-icon`, not a different component, it supports all the same properties and functions.
