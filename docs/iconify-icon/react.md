```yaml
title: 'Iconify Icon Web Component with React'
```

# Iconify Icon web component with React

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

Iconify icon web component works well with React, but there are few problems:

- When using web components in React, you need to use `[prop]class` instead of `[prop]className` to pass class name.
- Property `[prop]icon` can only be a string.
- No JSX hints.

## Iconify Icon for React

These problems are solved by Iconify Icon for React.

It is a wrapper for web component that provides support for `[prop]className`, allows to use objects with `[prop]icon` and provides typings for React component.

## Installation

Instead of `[npm]iconify-icon` package, install `[npm]@iconify-icon/react` package:

```bash
npm install --save-dev @iconify-icon/react
```

```bash
yarn add --dev @iconify-icon/react
```

## Usage

Import `[prop]Icon` component from `[npm]@iconify-icon/react`, set icon in `[prop]icon` property:

```jsx
import React from 'react';
import { Icon } from '@iconify-icon/react';

export function Alert() {
	return (
		<div className="alert">
			<Icon icon="mdi-light:alert" />
			Important notice with alert icon!
		</div>
	);
}
```

### Usage with objects

You can pass objects in `[prop]icon` property:

```jsx
import React from 'react';
import { Icon } from '@iconify-icon/react';
import alertIcon from '@iconify-icons/mdi-light/alert';

export function Alert() {
	return (
		<div className="alert">
			<Icon icon={alertIcon} />
			Important notice with alert icon!
		</div>
	);
}
```

### Functions

All other functions, listed in [Iconify Icon web component tutorial](./index.md#functions), are available. You can import them directly from `[npm]@iconify-icon/react` package:

```jsx
import React from 'react';
import { Icon, addIcon } from '@iconify-icon/react';

addIcon('alert', {
	body: '<path fill="currentColor" d="M1 21L11.5 2.813L22 21H1Zm19.268-1L11.5 4.813L2.732 20h17.536ZM11 14v-4h1v4h-1Zm0 2h1v2h-1v-2Z"/>',
	width: 24,
	height: 24,
});

export function Alert() {
	return (
		<div className="alert">
			<Icon icon="alert" />
			Important notice with alert icon!
		</div>
	);
}
```

See [Iconify Icon web component](./index.md) for list of all attributes, functions and usage examples. `[npm]@iconify-icon/react` is only a wrapper for `[npm]iconify-icon`, not a different component, it supports all the same properties and functions.
