```yaml
title: Iconify Icon Bundles
replacements:
  - code: '60k'
    value: '${counters.icons-short}'
types:
  IconifyJSON: '/docs/types/iconify-json.md'
```

# Icon bundles

`include visual-blocks/bundle`

## Offline use

Icon bundle is the easiest way to make [Iconify icon component](/docs/icon-components/index.md) work without relying on API. Instead of loading icon data from Iconify API, you can provide icon by loading icon bundle.

## Advantages

What are advantages of using icon bundles?

### Instant rendering and offline use {#offline}

When Iconify icon component to renders an icon, if icon data is not available, component attempts to load data for icon from Iconify API.

Even though loading icon data from API is very fast, it is not instant and it requires internet access. By providing icon data for most used icons, you guarantee that icon data is ready when a component needs it, rendering icon instantly.

This also allows rendering icons when internet access is not available and you are no longer relying on third party service.

### Smaller bundle size {#size}

Compares to [individual icon packages](/docs/icons/icons.md) that contain data for each icon separately, icon bundles import multiple icons at the same time. This reduces bundle size.

## How to create icons bundle? {#create}

You need to:

1. Generate icon data for bundle. This is done by extracting data for a few icons from a big icon set.
2. Wrap data in a function that loads icon data or assign it to a variable.

### Icon data {#data}

First you need to get data for icons.

Icon data is a simple `[type]IconifyJSON` object, like this:

```yaml
src: api/mdi.json
```

There are several ways to generate data for icon bundles:

- [Using Iconify API to generate bundle](./api.md).
- [Using Iconify Utils to generate bundle](./utils.md).

### Wrapping data in callback {#callbacks}

After retrieving data, you need to convert it to string and wrap that data in a callback to create a JavaScript file:

```yaml
src: api/mdi.js
```

Then you can bundle it with your application or load separately.

See [wrapper function for icon bundles](./wrapper.md).
