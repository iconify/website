```yaml
title: Icon Sets List
types:
  IconifyInfo: '/docs/types/iconify-json-metadata.md'
```

# Available icon sets list

If you are not using [full icon sets package](./all.md), which contains `[file]collections.json`, you might need to know list of available open source icon sets.

There are several ways to get it:

- From `[npm]@iconify/collections` NPM package.
- [From Iconify API](../api/collections.md).

In `[npm]@iconify/collections` and full icon sets package you'll find `[file]collections.json` with list of all icon sets.

## Structure

Data is stored as an object, where key is icon set prefix, value is icon set information in `[type]IconifyInfo` format.

## Import

If you are using `[npm]@iconify/collections` package, you can import icon sets list directly from `[file]@iconify/collections/collections.json` as default import or use named import:

```js
import { collections } from '@iconify/collections';
```

Code above uses JSON modules, which does not work with outdated version of Node.js. If you are using older version of Node, importing JSON files requires running script with `[str]--experimental-json-modules` flag.

Alternatively, for older versions of Node.js you can use `[func]require()`:

```js
const collections = require('@iconify/collections/collections.json');
```
