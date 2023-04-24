```yaml
title: 'Iconify for React Function: disableCache'
functions:
  enableCache: './enable-cache.md'
  addIcon: './add-icon.md'
  addCollection: './add-collection.md'
```

# Iconify for React function: disableCache

`include notices/react-with-api`

This tutorial is part of [Iconify for React with API functions tutorial](./index.md#functions).

`include icon-components/functions/cache/intro-disable`

## Usage

`include icon-components/functions/cache/props`

## Storage types

`include icon-components/functions/cache/storage-types`

## Examples

```js
import { disableCache } from '@iconify/react-with-api';

// Disable caching in localStorage
disableCache('local');
```

```js
import { disableCache } from '@iconify/react-with-api';

// Disable all caching
disableCache('all');
```

## Notes

`include icon-components/functions/cache/notes`
