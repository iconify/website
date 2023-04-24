```yaml
title: Iconify Icon Web Component Without Iconify API
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
```

# Using web component without Iconify API

This tutorial is part of [Iconify Icon web component tutorial](./index.md).

Retrieving icon data from Iconify API requires visitor to be online and relies on third party service. What if you want to use web component offline or on local network?

## Hosting

You can [host your own Iconify API](../api/hosting.md).

## Offline use

If you do not want to use API, you need to provide web component with data for all icons you are using.

To provide icon data, web component has 2 functions:

- `[func]addIcon()` to add one icon.
- `[func]addCollection()` to add multiple icons from same icon set.

There are several ways to get icon data:

- You can build [icon bundles](../icon-components/bundles/index.md) for icons that are used in your application, making icon data available offline.
- You can use [individual icon packages](../icons/icons.md), which is similar to icon bundles, but import icons one by one and are easier to use.

However, best option is to [use a different component or use icons in CSS](../usage/index.md). Iconify icon component is not meant to be used offline, that's what many other icon components are designed to do.
