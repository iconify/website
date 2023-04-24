```yaml
title: List of icon sets
types:
  IconifyInfo: '../types/iconify-info.md'
```

# List of icon sets

You can get list of available icon sets using `[url]/collections` API query.

## Query

API query is `[url]/collections`.

Optional parameters:

- `[prop]prefix`, `[type]string`. Icon set prefix if you want to get result only for one icon set.
- `[prop]prefixes`, `[type]string`. Comma separated list of icon set prefixes. You can use partial prefixes that end with `[str]-`, such as `[str]mdi-` matches `[str]mdi-light`.

Response is an object, where key is icon set prefix, value is `[type]IconifyInfo` object.

Only icon sets that have info will be returned. If you want to hide an icon set, do not set info object when importing it.

```yaml
hint: /collections?prefixes=fa,fa-,fa6-&pretty=1
src: api/collections.json
```

### Error response

If browsing icons is disabled, route is not handled, server returns `[num]404` HTTP error.

## Type

```ts
import type { IconifyInfo } from '@iconify/types';

export type APIv2CollectionsList = Record<string, IconifyInfo>;
```
