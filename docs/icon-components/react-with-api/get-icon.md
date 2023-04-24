```yaml
title: 'Iconify for React Function: getIcon'
types:
  IconifyIcon: '../../types/iconify-icon.md'
```

# Iconify for React function: getIcon

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include icon-components/functions/get-icon/intro`

## Usage

`include icon-components/functions/get-icon/props`

## Examples

```yaml
src: icon-components/react-with-api/get-icon.js
title: 'Code:'
extra:
  - src: icon-components/iconify/get-icon.json
    title: 'Result:'
```

```yaml
src: icon-components/react-with-api/get-icon2.js
title: 'Code:'
extra:
  - src: icon-components/iconify/get-icon2.json
    title: 'Result:'
```

```js
import { getIcon } from '@iconify/react-with-api';

// null
const data = getIcon('no-such-icon');
```
