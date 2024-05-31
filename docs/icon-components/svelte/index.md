```yaml
title: Iconify for Svelte
replacements:
  - code: '60,000'
    value: '${counters.icons}'
  - code: '80+'
    value: '${counters.sets}+'
  - code: '@iconify/svelte@2'
    value: '${svelte.import}'
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
  setFetch: './set-fetch.md'
```

# Iconify for Svelte

```yaml
include: icon-components/components/intro
replacements:
  - search: React
    replace: Svelte
```

Please be aware that this component is not designed for server side rendering.
If you are using SSR, consider switching to [Iconify Icon web component](/docs/iconify-icon/index.md).

## Installation

If you are using NPM:

```bash
npm install --save-dev @iconify/svelte@2
```

If you are using Yarn:

```bash
yarn add --dev @iconify/svelte@2
```

## Usage

Install `[npm]@iconify/svelte@2` and import component from it (component is exported as default export):

```js
import Icon from '@iconify/svelte';
```

Then in template use `[var]Icon` component with icon name as `[prop]icon` parameter:

```jsx
<Icon icon="mdi-light:home" />
```

### Sapper / SvelteKit {#sapper}

Component is compatible with Sapper and SvelteKit. Syntax is the same as with Svelte.

The component does not retrieve icon data until it is mounted.
For server side rendering it means generated HTML will not include SVGs,
icons will be rendered only on the client side after hydration is complete.

If you do want to render SVGs on the server side,
provide [icon data](/docs/types/iconify-icon.md) as a parameter instead of icon name
or [use a different icon component](/docs/usage/index.md).

## Properties

You can pass any custom properties to `[var]Icon`.

Required properties:

- `[prop]icon`, `[type]IconifyIcon | string` icon name or icon data.

`include icon-components/component-optional-props`

See below for more information on each optional property.

In addition to the properties mentioned above, the icon component accepts any other properties. All other properties will be passed to generated SVG element, so you can do stuff like setting the inline style, add title and so on.

Unlike React component, Svelte component does not support events.

## Icon

```yaml
include: icon-components/components/intro-icon
```

## Color

```yaml
include: icon-components/components/intro-color
```

```jsx
<Icon icon="mdi:home" style="color: red" />
```

For various ways to set color, see [how to change icon color in Iconify for Svelte](./color.md).

## Dimensions

```yaml
include: icon-components/components/intro-size
```

```jsx
<Icon icon="mdi:home" style="font-size: 24px;" />
```

For various ways to change icon dimensions, see [how to change icon dimensions in Iconify for Svelte](./dimensions.md).

## Transformations

```yaml
include: icon-components/components/intro-transform
```

For more details see [how to transform icon in Iconify for Svelte](./transform.md).

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
