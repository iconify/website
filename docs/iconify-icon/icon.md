```yaml
title: Icon Attribute in Iconify Icon Web Component
navigation: './index.md'
functions:
  addIcon: './add-icon.md'
```

# Icon attribute

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

When using [Iconify icon components](../icon-components/index.md), you can pass icon data to component instead of icon name, like this:

```jsx
import { Icon } from '@iconify/react';
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	return <Icon icon={arrowLeft} />;
}
```

Unfortunately, the same syntax is not available for the web component.
Attributes in HTML elements cannot be complex objects, making it harder to pass icon data to a web component.

How to solve this?

## Assigning icon name

Best and easiest solution is to assign icon name to icon using `[func]addIcon()` function:

```js
import { addIcon } from 'iconify-icon';
import arrowLeft from '@iconify-icons/bi/arrow-left';

addIcon('arrow-left', arrowLeft);

function renderLeftArrow() {
	return '<iconify-icon icon="arrow-left"></iconify-icon>';
}
```

## Serialising data

Web component also supports serialised objects for `[prop]icon` attribute:

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	const node = document.createElement('iconify-icon');
	node.setAttribute('icon', JSON.stringify(arrowLeft));
	return node.outerHTML;
}
```

Or this if you need to render HTML:

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

const replacements = {
	'&': '&amp;',
	'<': '&lt;',
	'>': '&gt;',
	'"': '&quot;',
	"'": '&#039;',
};

function stringify(data) {
	return JSON.stringify(arrowLeft).replace(
		/[&<>"']/g,
		(char) => replacements[char]
	);
}

const arrowLeftString = JSON.stringify(arrowLeft);

function renderLeftArrow() {
	return '<iconify-icon icon="' + arrowLeftString + '"></iconify-icon>';
}
```

## Using property

Instead of setting attribute, you can also set property, which accepts objects:

```js
import arrowLeft from '@iconify-icons/bi/arrow-left';

function renderLeftArrow() {
	const node = document.createElement('iconify-icon');
	node.icon = arrowLeft;
	return node.outerHTML;
}
```
