```yaml
title: 'Iconify for React Function: addAPIProvider'
standalone: true
navigation: './index.md'
```

# Iconify for React function: addAPIProvider

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include icon-components/functions/add-api-provider/intro`

## API providers

`include icon-components/api-providers`

## Usage

`include icon-components/functions/add-api-provider/props`

## Example

```jsx
import { addAPIProvider, Icon } from '@iconify/react-with-api';

addAPIProvider('local', {
	// Array of host names
	resources: ['http://localhost:3000'],
});

// Demo using provider in icon name
export function renderHomeIcon() {
	return <Icon icon="@local:material-icons:home" />;
}
```

`include icon-components/functions/add-api-provider/footer`
