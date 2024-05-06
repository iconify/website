```yaml
title: Iconify for React
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/react@2'
    value: '${react.import}'
types:
  IconifyIcon: '../../types/iconify-icon.md'
functions:
  addCollection: './add-collection.md'
  addIcon: './add-icon.md'
  iconExists: './icon-exists.md'
  listIcons: './list-icons.md'
  loadIcons: './load-icons.md'
  loadIcon: './load-icon.md'
  getIcon: './get-icon.md'
  enableCache: './enable-cache.md'
  disableCache: './disable-cache.md'
  addAPIProvider: './add-api-provider.md'
  replaceIDs: './replace-ids.md'
  buildIcon: './build-icon.md'
```

# Iconify for React

```yaml
include: icon-components/components/intro
```

Please be aware that this component is not designed for server side rendering.
If you are using SSR, consider switching to [Iconify Icon web component](/docs/iconify-icon/index.md).

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/react@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/react@2
```

### Version 5

Code above will install version 4.

Version 5 beta is also available.
Component has been redesigned as a modern functional React component.
It is compatible with Next.js.

You can install version 5 using `[npm]@next` tag:

```bash
npm install --save-dev @iconify/react@next
```

## Usage

Install `[npm]@iconify/react@2` and import `[var]Icon` component from it:

```js
import { Icon } from '@iconify/react';
```

Then use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

```yaml
include: icon-components/components/intro-online
```

### Next.js {#ssr}

Component version 5 is compatible with the latest Next.js (see installation instructions above).

Version 4 works only with an older version of Next.js.

The component does not retrieve icon data until it is mounted.
For server side rendering it means generated HTML will not include SVGs,
icons will be rendered only on the client side after hydration is complete.

If you do want to render SVGs on the server side,
provide icon data as parameter instead of icon name or [use a different icon component](/docs/usage/index.md).

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

`include icon-components/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties and events. All other properties and events will be passed to generated SVG element, so you can do stuff like assigning `[prop]onClick` event, setting the inline style, add title and so on.

## Icon

```yaml
include: icon-components/components/intro-icon
```

## Color

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style={{ color: 'red' }} />
```

For various ways to set color, see [how to change icon color in Iconify for React](./color.md).

## Dimensions

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style={{ fontSize: '24px' }} />
```

For various ways to change icon dimensions, see [how to change icon dimensions in Iconify for React](./dimensions.md).

## Transformations

```yaml
include: icon-components/components/intro-transform
```

For more details see [how to transform icon in Iconify for React](./transform.md).

## onLoad

`include icon-components/components/onload`

## Functions {#functions}

```yaml
include: icon-components/components/functions-list/header
```

### Check available icons {#getting-icons}

```yaml
include: icon-components/components/functions-list/getting-icons
```

### Adding icons {#adding-icons}

```yaml
include: icon-components/components/functions-list/adding-icons
```

### Helper functions {#helper}

```yaml
include: icon-components/components/functions-list/helpers
```

### API functions {#api}

```yaml
include: icon-components/components/functions-list/api
```

### Internal API functions {#internal}

```yaml
include: icon-components/components/functions-list/internal
```
