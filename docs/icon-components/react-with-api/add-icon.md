```yaml
title: 'Iconify for React Function: addIcon'
types:
  IconifyJSON: '../../types/iconify-json.md'
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
```

# Iconify for React function: addIcon

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include icon-components/functions/add-icon/intro`

## Usage

`include icon-components/functions/add-icon/props`

## Examples

```js
import { addIcon } from '@iconify/react-with-api';

addIcon('mdi:account-box', {
	body: '<path d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

`include icon-components/functions/add-icon/notes`

## API provider

`include icon-components/functions/add-icon/provider`

Example:

```js
import { addIcon } from '@iconify/react-with-api';

addIcon('@custom:md:test', {
	body: '<path d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5z" fill="currentColor"/>',
	width: 24,
	height: 24,
});
```

Code above adds the following icon:

- `[prop]provider` is `[str]custom`.
- `[prop]prefix` is `[str]md`.
- `[prop]name` is `[str]test`.

In component this icon can be used like this:

```jsx
<Icon icon="@custom:md:test" />
```

`include icon-components/functions/add-icon/custom`

## One icon

`include icon-components/functions/add-icon/footer`
