```yaml
title: Using Iconify SVG Framework Without API
replacements:
  - code: '/2/2.0.0/'
    value: '/${svg-framework.version.major}/${svg-framework.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@2'
    value: '${svg-framework.import}'
```

# SVG framework without API

This tutorial is part of [Iconify SVG Framework tutorial](./index.md).

Retrieving icon data from Iconify API requires visitor to be online and relies on third party service. What if you want to use SVG framework offline or on local network?

## Hosting

You can [host your own Iconify API](../../api/hosting.md).

## Bundle without API

`include notices/deprecated-offline`

Iconify SVG framework offers bundle without API support. Difference from full bundle:

- It is smaller than full bundle.
- You will immediately see missing icons, which cannot be used without API. If you use full bundle, some icons could be left in `[prop]localStorage` or `[prop]sessionStorage` cache. Bundle without API does not support storage.

To switch from full bundle to bundle without API support, add `[str].without-api` to script URL:

```html
<script src="https://code.iconify.design/2/2.0.0/iconify.without-api.min.js"></script>
```

If you are using NPM package `[npm]@iconify/iconify@2`, import `[file]dist/iconify.without-api.min.js`:

```js
import Iconify from '@iconify/iconify/dist/iconify.without-api.min.js';
```

Do not mix `[str]iconify.without-api.min.js` and `[str]iconify.min.js` in the same project! These are separate bundles.

## Adding icons

When API is disabled, you need to make sure to provide data for all used icon to SVG framework.

There are two ways of doing it:

- [Importing icon bundles](./add-collection.md).
- [Importing icons from NPM](./add-icon.md).

Make sure you bundle those icons with Iconify SVG framework.
