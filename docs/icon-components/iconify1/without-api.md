```yaml
title: Using Iconify SVG Framework Without API
replacements:
  - code: '/1/1.0.3/'
    value: '/${iconify1.version.major}/${iconify1.version.full}/'
  - code: '60k'
    value: '${counters.icons-short}'
  - code: '@iconify/iconify@1'
    value: '${iconify1.import}'
```

# SVG framework without API

`include notices/iconify1`

Iconify SVG framework retrieves icon data from Iconify API. That makes it very easy to use because developer does not need to prepare icon data. Downside is, visitor must be online to retrieve icon data.

However, SVG framework can also work without API.

## Bundle without API

Iconify SVG framework offers bundle without API support. You do not need to use it, you can use full bundle without relying on API, however you can use bundle without API support to reduce bundle size.

To switch from full bundle to bundle without API support, add `[str].without-api` to script URL:

```html
<script src="https://code.iconify.design/1/1.0.3/iconify.without-api.min.js"></script>
```

If you are using NPM package `[npm]@iconify/iconify@1`, import `[file]dist/iconify.without-api.min.js`:

```js
import Iconify from '@iconify/iconify/dist/iconify.without-api.min.js';
```

## Adding icons

When API is disabled, you need to make sure to provide data for all used icon to SVG framework.

There are two ways of doing it:

- [Using Iconify.addCollection()](./functions.md#add-collection).
- [Using Iconify.addIcon()](./functions.md#add-icon).

Make sure you bundle those icons with Iconify SVG framework.
